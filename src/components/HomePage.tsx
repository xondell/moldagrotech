import Link from "next/link";
import { ArrowRight, Droplets, RadioTower, BrainCircuit, BarChart3, Cpu, Workflow, Check, ChevronDown, MapPinned, Sparkles } from "lucide-react";
import type { Locale } from "@/lib/i18n";
import type { Dictionary } from "@/content/dictionary";
import { FieldVisual } from "./FieldVisual";

const solutionIcons = [Droplets, RadioTower, BrainCircuit, BarChart3, Cpu, Workflow];

export function HomePage({ locale, dict }: { locale: Locale; dict: Dictionary }) {
  const demo = {
    ro: { eyebrow: "Interfață produs", title: "Un dashboard pentru decizii, nu pentru supraîncărcare cu date.", body: "Interfața prioritizează starea câmpului, excepțiile, tendințele și următoarea acțiune operațională. Toate valorile sunt date demonstrative.", overview: "Privire operațională", normal: "Toate sistemele sunt normale", moisture: "Umiditate 42%", humidity: "Aer 61%", devices: "Dispozitive 12/12", assistant: "Asistent AI: umiditatea este stabilă în zona monitorizată. Nu este sugerată o acțiune de irigare pe baza acestui set demonstrativ." },
    ru: { eyebrow: "Интерфейс продукта", title: "Панель для решений, а не для перегрузки данными.", body: "Интерфейс ставит на первое место состояние поля, отклонения, тренды и следующее операционное действие. Все значения являются демонстрационными.", overview: "Операционный обзор", normal: "Все системы в норме", moisture: "Влажность 42%", humidity: "Воздух 61%", devices: "Устройства 12/12", assistant: "AI-ассистент: влажность стабильна в контролируемой зоне. На основе демонстрационных данных полив не предлагается." },
    en: { eyebrow: "Product interface", title: "A dashboard designed for decisions, not data overload.", body: "The interface architecture prioritizes field status, exceptions, trends and the next operational action. All values shown here are illustrative demo data.", overview: "Operational overview", normal: "All systems normal", moisture: "Moisture 42%", humidity: "Humidity 61%", devices: "Devices 12/12", assistant: "AI assistant: moisture is stable across the monitored zone. No irrigation action is suggested from this demo dataset." },
  }[locale];
  return <main>
    <section className="bg-sand pb-16 pt-10 sm:pt-16 lg:pb-24 lg:pt-20">
      <div className="container-shell grid items-center gap-12 lg:grid-cols-[1.02fr_.98fr]">
        <div>
          <p className="eyebrow">{dict.hero.eyebrow}</p>
          <h1 className="display mt-5 max-w-[800px] text-forest-950">{dict.hero.title}</h1>
          <p className="lead mt-7 max-w-[670px]">{dict.hero.body}</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <Link href={`/${locale}/solutions`} className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-900 px-6 py-4 text-sm font-semibold text-white transition hover:bg-forest-800">{dict.common.exploreSolutions}<ArrowRight size={17}/></Link>
            <Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full border border-forest-950/15 bg-white/60 px-6 py-4 text-sm font-semibold text-forest-950 transition hover:bg-white">{dict.common.requestConsultation}</Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-xs font-medium text-forest-950/55"><span>IoT & sensors</span><span>Automation</span><span>Analytics</span><span>AI decision support</span></div>
        </div>
        <FieldVisual label={dict.hero.preview} note={dict.hero.previewNote}/>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.8fr_1.2fr]">
        <div><p className="eyebrow">{dict.intro.eyebrow}</p><h2 className="h2 mt-4 max-w-xl">{dict.intro.title}</h2></div>
        <div><p className="lead max-w-3xl">{dict.intro.body}</p><div className="mt-10 grid gap-4 md:grid-cols-3">{dict.intro.pillars.map((p, i) => <div key={p.title} className="border-t border-forest-950/15 pt-5"><span className="text-xs font-bold text-agro-500">0{i+1}</span><h3 className="mt-6 text-xl font-semibold tracking-[-.03em]">{p.title}</h3><p className="mt-3 text-sm leading-6 text-forest-950/60">{p.body}</p></div>)}</div></div>
      </div>
    </section>

    <section className="section-pad bg-sand" id="solutions">
      <div className="container-shell">
        <div className="max-w-3xl"><p className="eyebrow">{dict.solutions.eyebrow}</p><h2 className="h2 mt-4">{dict.solutions.title}</h2><p className="lead mt-6">{dict.solutions.body}</p></div>
        <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{dict.solutions.items.map((s, i) => { const Icon = solutionIcons[i]; return <article key={s.title} className="surface card-lift rounded-[1.7rem] p-7"><div className="flex h-11 w-11 items-center justify-center rounded-xl bg-forest-900 text-agro-300"><Icon size={21}/></div><h3 className="mt-7 text-2xl font-semibold tracking-[-.035em]">{s.title}</h3><p className="mt-4 min-h-20 text-sm leading-6 text-forest-950/60">{s.description}</p><ul className="mt-6 space-y-2 border-t border-forest-950/10 pt-5">{s.bullets.map(b => <li key={b} className="flex items-center gap-2 text-xs font-medium text-forest-950/65"><Check size={14} className="text-forest-700"/>{b}</li>)}</ul></article>})}</div>
        <Link href={`/${locale}/solutions`} className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-forest-800">{dict.common.learnMore}<ArrowRight size={16}/></Link>
      </div>
    </section>

    <section className="section-pad bg-forest-950 text-white">
      <div className="container-shell">
        <div className="grid gap-8 lg:grid-cols-[.8fr_1.2fr]"><div><p className="eyebrow !text-agro-300">{dict.ecosystem.eyebrow}</p><h2 className="h2 mt-4 max-w-xl">{dict.ecosystem.title}</h2></div><p className="max-w-2xl text-lg leading-8 text-white/55">{dict.ecosystem.body}</p></div>
        <div className="mt-14 grid gap-3 lg:grid-cols-4">{dict.ecosystem.layers.map((layer, i) => <div key={layer.label} className="relative rounded-3xl border border-white/10 bg-white/[.045] p-6"><span className="text-[10px] font-bold uppercase tracking-[.16em] text-agro-300">0{i+1}</span><h3 className="mt-5 text-xl font-semibold">{layer.label}</h3><div className="mt-5 flex flex-wrap gap-2">{layer.items.map(item => <span key={item} className="rounded-full border border-white/10 bg-white/5 px-3 py-2 text-xs text-white/60">{item}</span>)}</div>{i < 3 && <ArrowRight className="absolute -right-5 top-1/2 z-10 hidden text-agro-300/40 lg:block"/>}</div>)}</div>
      </div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-shell">
        <div className="max-w-3xl"><p className="eyebrow">{dict.process.eyebrow}</p><h2 className="h2 mt-4">{dict.process.title}</h2></div>
        <div className="mt-14 divide-y divide-forest-950/10 border-y border-forest-950/10">{dict.process.steps.map((step, i) => <div key={step.title} className="grid gap-4 py-7 md:grid-cols-[80px_1fr_1.3fr] md:items-start"><span className="font-mono text-sm text-agro-500">0{i+1}</span><h3 className="text-xl font-semibold tracking-[-.03em]">{step.title}</h3><p className="text-sm leading-6 text-forest-950/60">{step.body}</p></div>)}</div>
        <Link href={`/${locale}/contact`} className="mt-8 inline-flex items-center gap-2 rounded-full bg-forest-900 px-6 py-4 text-sm font-semibold text-white">{dict.common.discussFarm}<ArrowRight size={16}/></Link>
      </div>
    </section>

    <section className="section-pad bg-sand">
      <div className="container-shell"><p className="eyebrow">{dict.useCases.eyebrow}</p><h2 className="h2 mt-4 max-w-3xl">{dict.useCases.title}</h2><div className="mt-12 grid gap-px overflow-hidden rounded-[2rem] border border-forest-950/10 bg-forest-950/10 md:grid-cols-2 lg:grid-cols-3">{dict.useCases.items.map((u, i) => <div key={u.title} className="bg-sand p-7"><div className="flex items-center justify-between"><MapPinned size={20} className="text-forest-700"/><span className="text-xs text-forest-950/30">0{i+1}</span></div><h3 className="mt-8 text-xl font-semibold tracking-[-.03em]">{u.title}</h3><p className="mt-3 text-sm leading-6 text-forest-950/60">{u.description}</p></div>)}</div></div>
    </section>

    <section className="section-pad bg-white">
      <div className="container-shell grid gap-12 lg:grid-cols-[.9fr_1.1fr] lg:items-center">
        <div><p className="eyebrow">{demo.eyebrow}</p><h2 className="h2 mt-4">{demo.title}</h2><p className="lead mt-6">{demo.body}</p></div>
        <div className="rounded-[2rem] bg-forest-950 p-4 shadow-panel sm:p-6"><div className="rounded-[1.5rem] border border-white/10 bg-[#0c2117] p-5 text-white"><div className="flex items-center justify-between border-b border-white/10 pb-4"><div><p className="text-xs text-white/45">Field 08 / North sector</p><p className="mt-1 font-semibold">{demo.overview}</p></div><span className="rounded-full bg-agro-400/15 px-3 py-1.5 text-xs text-agro-300">{demo.normal}</span></div><div className="mt-5 grid gap-3 sm:grid-cols-3">{[demo.moisture,demo.humidity,demo.devices].map(v => <div key={v} className="rounded-xl bg-white/5 p-4 text-sm text-white/75">{v}</div>)}</div><div className="mt-4 h-32 overflow-hidden rounded-xl bg-white/5 p-4"><svg viewBox="0 0 500 100" className="h-full w-full" aria-label="Illustrative moisture trend"><path d="M0 72 C70 62, 95 78, 145 51 S240 28, 285 45 S390 70, 500 22" fill="none" stroke="#A6D85F" strokeWidth="3"/><path d="M0 88H500M0 55H500M0 22H500" stroke="rgba(255,255,255,.07)"/></svg></div><div className="mt-4 flex gap-3 rounded-xl border border-agro-400/20 bg-agro-400/10 p-4"><Sparkles size={18} className="mt-0.5 text-agro-300"/><p className="text-xs leading-5 text-white/65">{demo.assistant}</p></div></div></div>
      </div>
    </section>

    <section className="section-pad bg-sand"><div className="container-shell"><p className="eyebrow">{dict.why.eyebrow}</p><h2 className="h2 mt-4 max-w-4xl">{dict.why.title}</h2><div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">{dict.why.items.map((w,i)=><div key={w.title} className="border-l border-forest-950/15 px-5 py-2"><span className="text-xs font-bold text-agro-500">0{i+1}</span><h3 className="mt-5 text-xl font-semibold tracking-[-.03em]">{w.title}</h3><p className="mt-3 text-sm leading-6 text-forest-950/60">{w.body}</p></div>)}</div></div></section>

    <section className="section-pad overflow-hidden bg-forest-900 text-white"><div className="container-shell grid gap-12 lg:grid-cols-[1fr_.75fr]"><div><p className="eyebrow !text-agro-300">{dict.moldova.eyebrow}</p><h2 className="h2 mt-4 max-w-3xl">{dict.moldova.title}</h2><p className="mt-7 max-w-2xl text-lg leading-8 text-white/60">{dict.moldova.body}</p></div><div className="grid content-start gap-2">{dict.moldova.points.map((p,i)=><div key={p} className="flex items-center justify-between border-b border-white/10 py-4"><span className="text-white/75">{p}</span><span className="text-xs text-agro-300">0{i+1}</span></div>)}</div></div></section>

    <section className="section-pad bg-white"><div className="container-shell"><div className="flex flex-col justify-between gap-6 md:flex-row md:items-end"><div className="max-w-3xl"><p className="eyebrow">{dict.insights.eyebrow}</p><h2 className="h2 mt-4">{dict.insights.title}</h2><p className="lead mt-6">{dict.insights.body}</p></div><Link href={`/${locale}/insights`} className="inline-flex items-center gap-2 text-sm font-semibold">{dict.common.learnMore}<ArrowRight size={16}/></Link></div><div className="mt-12 grid gap-4 lg:grid-cols-3">{dict.insights.articles.map(a=><article key={a.title} className="rounded-[1.7rem] border border-forest-950/10 p-7"><span className="text-xs font-bold uppercase tracking-[.12em] text-forest-700">{a.category}</span><h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-.04em]">{a.title}</h3><p className="mt-4 text-sm leading-6 text-forest-950/60">{a.excerpt}</p><ChevronDown className="mt-8 rotate-[-90deg] text-forest-950/40" size={18}/></article>)}</div></div></section>

    <section className="bg-agro-400 py-16 sm:py-20"><div className="container-shell grid gap-8 lg:grid-cols-[1.3fr_.7fr] lg:items-end"><div><h2 className="h2 max-w-4xl text-forest-950">{dict.finalCta.title}</h2><p className="mt-6 max-w-3xl text-base leading-7 text-forest-950/65">{dict.finalCta.body}</p></div><div className="flex flex-col gap-3 sm:flex-row lg:flex-col"><Link href={`/${locale}/contact`} className="inline-flex items-center justify-center gap-2 rounded-full bg-forest-950 px-6 py-4 text-sm font-semibold text-white">{dict.common.requestConsultation}<ArrowRight size={16}/></Link><Link href={`/${locale}/solutions`} className="inline-flex items-center justify-center rounded-full border border-forest-950/20 px-6 py-4 text-sm font-semibold">{dict.common.exploreSolutions}</Link></div></div></section>
  </main>;
}
