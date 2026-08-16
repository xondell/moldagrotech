import Link from "next/link";
import type { Locale } from "@/lib/i18n";

export function Logo({ locale, inverted = false }: { locale: Locale; inverted?: boolean }) {
  return (
    <Link href={`/${locale}`} className="inline-flex items-center gap-3" aria-label="MoldAgroTech home">
      <svg width="34" height="34" viewBox="0 0 34 34" aria-hidden="true" className="shrink-0">
        <rect width="34" height="34" rx="9" fill={inverted ? "#A6D85F" : "#0B2419"}/>
        <path d="M8 23.5c5.8-1.2 9.7-5.1 11.9-12.1 2.2 4.6 4.2 7.3 6.1 8.1-3.7.1-6.7 1.1-9 3.1-2.3-1.1-5.3-.8-9 .9Z" fill={inverted ? "#0B2419" : "#A6D85F"}/>
        <path d="M17.1 22.5v4.2" stroke={inverted ? "#0B2419" : "#A6D85F"} strokeWidth="1.7" strokeLinecap="round"/>
      </svg>
      <span className={`text-[1.02rem] font-semibold tracking-[-0.03em] ${inverted ? "text-white" : "text-forest-950"}`}>MoldAgroTech</span>
    </Link>
  );
}
