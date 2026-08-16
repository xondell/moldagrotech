"use client";

import { Menu, X, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/dictionary";
import { Logo } from "./Logo";

export function Header({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const localeHref = (target: Locale) => pathname.replace(/^\/(ro|ru|en)(?=\/|$)/, `/${target}`) || `/${target}`;
  const links = [
    ["solutions", dict.nav.solutions], ["technology", dict.nav.technology], ["industries", dict.nav.industries],
    ["about", dict.nav.about], ["insights", dict.nav.insights], ["contact", dict.nav.contact],
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-forest-950/10 bg-sand/90 backdrop-blur-xl">
      <div className="container-shell flex h-[74px] items-center justify-between gap-6">
        <Logo locale={locale} />
        <nav className="hidden items-center gap-6 lg:flex" aria-label="Primary navigation">
          {links.map(([href, label]) => <Link key={href} href={`/${locale}/${href}`} className="text-sm font-medium text-forest-950/70 transition hover:text-forest-950">{label}</Link>)}
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <div className="flex rounded-full border border-forest-950/10 p-1 text-xs font-semibold">
            {(["ro", "ru", "en"] as Locale[]).map((item) => <Link key={item} href={localeHref(item)} className={`rounded-full px-2.5 py-1.5 uppercase ${item === locale ? "bg-forest-900 text-white" : "text-forest-950/55 hover:text-forest-950"}`}>{item}</Link>)}
          </div>
          <Link href={`/${locale}/contact`} className="inline-flex items-center gap-2 rounded-full bg-forest-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-forest-800">{dict.nav.cta}<ArrowUpRight size={16}/></Link>
        </div>
        <button className="rounded-full border border-forest-950/10 p-2.5 md:hidden" onClick={() => setOpen(!open)} aria-expanded={open} aria-label="Toggle menu">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-forest-950/10 bg-sand px-5 py-6 md:hidden">
        <nav className="mx-auto flex max-w-lg flex-col gap-1" aria-label="Mobile navigation">
          {links.map(([href, label]) => <Link key={href} onClick={() => setOpen(false)} href={`/${locale}/${href}`} className="rounded-2xl px-4 py-3 text-lg font-medium hover:bg-white">{label}</Link>)}
          <div className="mt-4 flex gap-2 px-4">{(["ro", "ru", "en"] as Locale[]).map((item) => <Link key={item} href={localeHref(item)} className={`rounded-full px-4 py-2 text-sm font-semibold uppercase ${item === locale ? "bg-forest-900 text-white" : "border border-forest-950/10"}`}>{item}</Link>)}</div>
          <Link href={`/${locale}/contact`} className="mt-5 rounded-full bg-forest-900 px-5 py-4 text-center font-semibold text-white">{dict.nav.cta}</Link>
        </nav>
      </div>}
    </header>
  );
}
