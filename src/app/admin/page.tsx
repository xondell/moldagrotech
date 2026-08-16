import { notFound } from "next/navigation";

// The public repository intentionally exposes no unauthenticated admin UI.
// Replace this route only after Supabase Auth + authorization checks are configured.
export default function AdminPage() {
  notFound();
}
