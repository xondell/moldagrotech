import { createClient } from "@supabase/supabase-js";
import { NextRequest, NextResponse } from "next/server";

const allowedLanguages = new Set(["ro", "ru", "en"]);
const rateLimit = new Map<string, { count: number; resetAt: number }>();

function isRateLimited(ip: string) {
  const now = Date.now();
  const current = rateLimit.get(ip);
  if (!current || current.resetAt < now) { rateLimit.set(ip, { count: 1, resetAt: now + 10 * 60_000 }); return false; }
  current.count += 1;
  rateLimit.set(ip, current);
  return current.count > 5;
}
function text(value: unknown, max: number) { return typeof value === "string" ? value.trim().slice(0, max) : ""; }
function validEmail(value: string) { return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value); }

export async function POST(request: NextRequest) {
  const ip = request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() || "unknown";
  if (isRateLimited(ip)) return NextResponse.json({ error: "Too many requests." }, { status: 429 });
  let body: Record<string, unknown>;
  try { body = await request.json(); } catch { return NextResponse.json({ error: "Invalid request." }, { status: 400 }); }
  if (text(body.website, 200)) return NextResponse.json({ ok: true });
  const startedAt = Number(body.started_at || 0);
  if (!Number.isFinite(startedAt) || Date.now() - startedAt < 1800) return NextResponse.json({ error: "Submission rejected." }, { status: 429 });

  const lead = {
    name: text(body.name, 120), company: text(body.company, 180), email: text(body.email, 200), phone: text(body.phone, 80),
    location: text(body.location, 180), farm_size: text(body.farm_size, 120), interest: text(body.interest, 120), message: text(body.message, 3000),
    language: text(body.language, 2), source_page: text(body.source_page, 250), status: "new",
  };
  if (!lead.name || !lead.email || !validEmail(lead.email) || !lead.interest || !lead.message || !allowedLanguages.has(lead.language)) return NextResponse.json({ error: "Please complete all required fields." }, { status: 400 });

  const url = process.env.SUPABASE_URL || process.env.NEXT_PUBLIC_SUPABASE_URL;
  const backendKey = process.env.SUPABASE_SECRET_KEY || process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!url || !backendKey) return NextResponse.json({ error: "Lead storage is not configured." }, { status: 503 });
  const supabase = createClient(url, backendKey, { auth: { persistSession: false, autoRefreshToken: false } });
  const { error } = await supabase.from("leads").insert(lead);
  if (error) { console.error("Lead insert failed", error.code); return NextResponse.json({ error: "Unable to store request." }, { status: 500 }); }
  return NextResponse.json({ ok: true }, { status: 201 });
}
