"use client";
import { useRef, useState } from "react";
import type { Dictionary } from "@/content/dictionary";
import type { Locale } from "@/lib/i18n";

export function ContactForm({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const startedAt = useRef(Date.now());
  const [state, setState] = useState<"idle"|"pending"|"success"|"error">("idle");
  const [error, setError] = useState("");
  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault(); setState("pending"); setError("");
    const form = e.currentTarget; const data = Object.fromEntries(new FormData(form));
    const response = await fetch("/api/leads", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify({ ...data, language: locale, source_page: `/${locale}/contact`, started_at: startedAt.current }) });
    const result = await response.json().catch(() => ({}));
    if (response.ok) { setState("success"); form.reset(); return; }
    setState("error"); setError(response.status === 503 ? dict.contact.unavailable : (result.error || "Unable to send request."));
  }
  const f = dict.contact.fields;
  return <form onSubmit={submit} className="grid gap-5 rounded-[2rem] bg-white p-6 shadow-soft sm:p-8">
    <div className="hidden" aria-hidden="true"><label>Website<input name="website" tabIndex={-1} autoComplete="off"/></label></div>
    <div className="grid gap-5 sm:grid-cols-2"><Field label={f.name} name="name" required/><Field label={f.company} name="company"/><Field label={f.phone} name="phone" type="tel"/><Field label={f.email} name="email" type="email" required/><Field label={f.location} name="location"/><Field label={f.farmSize} name="farm_size"/></div>
    <label className="grid gap-2 text-sm font-semibold">{f.interest}<select name="interest" required className="rounded-xl border border-forest-950/15 bg-sand px-4 py-3.5 outline-none focus:border-forest-700"><option value="">—</option>{dict.contact.interests.map(i=><option key={i}>{i}</option>)}</select></label>
    <label className="grid gap-2 text-sm font-semibold">{f.message}<textarea name="message" required rows={6} maxLength={3000} className="resize-y rounded-xl border border-forest-950/15 bg-sand px-4 py-3.5 outline-none focus:border-forest-700"/></label>
    <button disabled={state === "pending"} className="rounded-full bg-forest-900 px-6 py-4 font-semibold text-white disabled:opacity-50">{state === "pending" ? dict.contact.pending : dict.common.sendRequest}</button>
    {state === "success" && <p className="text-sm font-medium text-forest-700" role="status">{dict.contact.success}</p>}
    {state === "error" && <p className="text-sm font-medium text-red-700" role="alert">{error}</p>}
  </form>;
}
function Field({ label, name, type="text", required=false }: { label:string; name:string; type?:string; required?:boolean }) { return <label className="grid gap-2 text-sm font-semibold">{label}<input name={name} type={type} required={required} maxLength={200} className="rounded-xl border border-forest-950/15 bg-sand px-4 py-3.5 outline-none focus:border-forest-700"/></label> }
