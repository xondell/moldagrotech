import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/dictionary";
import { PageHero } from "./PageHero";

export function StandardPage({ locale, dict, pageKey }: { locale: Locale; dict: Dictionary; pageKey: "solutions"|"technology"|"industries"|"about"|"partners"|"insights" }) {
  const page = dict.pages[pageKey];
  return <PageHero eyebrow={page.eyebrow} title={page.title} intro={page.intro}>
    <section className="section-pad bg-sand"><div className="container-shell grid gap-4 lg:grid-cols-3">{page.sections.map((s,i)=><article key={s.title} className="surface rounded-[1.7rem] p-7"><span className="text-xs font-bold text-agro-500">0{i+1}</span><h2 className="mt-8 text-2xl font-semibold tracking-[-.04em]">{s.title}</h2><p className="mt-4 text-sm leading-7 text-forest-950/60">{s.body}</p></article>)}</div></section>
    {pageKey === "solutions" && <section className="section-pad bg-white"><div className="container-shell"><p className="eyebrow">{dict.solutions.eyebrow}</p><div className="mt-10 grid gap-4 md:grid-cols-2">{dict.solutions.items.map(s=><div key={s.title} className="rounded-3xl border border-forest-950/10 p-7"><h3 className="text-2xl font-semibold tracking-[-.04em]">{s.title}</h3><p className="mt-4 text-sm leading-6 text-forest-950/60">{s.description}</p></div>)}</div></div></section>}
    {pageKey === "technology" && <section className="section-pad bg-white"><div className="container-shell"><div className="grid gap-3 lg:grid-cols-4">{dict.ecosystem.layers.map((l,i)=><div key={l.label} className="rounded-3xl border border-forest-950/10 p-6"><span className="text-xs font-bold text-agro-500">0{i+1}</span><h3 className="mt-6 text-xl font-semibold">{l.label}</h3><p className="mt-4 text-sm leading-6 text-forest-950/55">{l.items.join(" · ")}</p></div>)}</div></div></section>}
    {pageKey === "industries" && <section className="section-pad bg-white"><div className="container-shell grid gap-4 md:grid-cols-2 lg:grid-cols-3">{dict.useCases.items.map(u=><article key={u.title} className="rounded-3xl border border-forest-950/10 p-7"><h3 className="text-xl font-semibold">{u.title}</h3><p className="mt-4 text-sm leading-6 text-forest-950/60">{u.description}</p></article>)}</div></section>}
    <section className="bg-agro-400 py-16"><div className="container-shell flex flex-col justify-between gap-7 md:flex-row md:items-center"><h2 className="max-w-3xl text-3xl font-semibold tracking-[-.04em]">{dict.finalCta.title}</h2><Link href={`/${locale}/contact`} className="inline-flex shrink-0 items-center gap-2 rounded-full bg-forest-950 px-6 py-4 text-sm font-semibold text-white">{dict.common.requestConsultation}<ArrowRight size={16}/></Link></div></section>
  </PageHero>;
}
