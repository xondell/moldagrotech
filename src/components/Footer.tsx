import Link from "next/link";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/dictionary";
import { Logo } from "./Logo";

export function Footer({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  return <footer className="bg-forest-950 text-white">
    <div className="container-shell grid gap-12 py-16 lg:grid-cols-[1.3fr_.7fr_.7fr_.7fr]">
      <div className="max-w-sm"><Logo locale={locale} inverted/><p className="mt-5 text-sm leading-7 text-white/60">{dict.footer.description}</p></div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-white/40">{dict.footer.company}</p><div className="flex flex-col gap-3 text-sm text-white/72"><Link href={`/${locale}/about`}>{dict.nav.about}</Link><Link href={`/${locale}/partners`}>{dict.nav.partners}</Link><Link href={`/${locale}/contact`}>{dict.nav.contact}</Link></div></div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-white/40">{dict.footer.resources}</p><div className="flex flex-col gap-3 text-sm text-white/72"><Link href={`/${locale}/solutions`}>{dict.nav.solutions}</Link><Link href={`/${locale}/technology`}>{dict.nav.technology}</Link><Link href={`/${locale}/insights`}>{dict.nav.insights}</Link></div></div>
      <div><p className="mb-4 text-xs font-bold uppercase tracking-[.15em] text-white/40">{dict.footer.legal}</p><div className="flex flex-col gap-3 text-sm text-white/72"><Link href={`/${locale}/legal/privacy`}>{dict.footer.privacy}</Link><Link href={`/${locale}/legal/cookies`}>{dict.footer.cookies}</Link><Link href={`/${locale}/legal/terms`}>{dict.footer.terms}</Link></div></div>
    </div>
    <div className="border-t border-white/10"><div className="container-shell flex flex-col gap-3 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between"><span>{dict.footer.tagline}</span><span>© {new Date().getFullYear()} MoldAgroTech</span></div></div>
  </footer>;
}
