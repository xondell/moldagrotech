import type { ReactNode } from "react";
export function PageHero({ eyebrow, title, intro, children }: { eyebrow: string; title: string; intro: string; children?: ReactNode }) {
  return <main><section className="bg-forest-950 py-20 text-white sm:py-28"><div className="container-shell"><p className="eyebrow !text-agro-300">{eyebrow}</p><h1 className="mt-5 max-w-5xl text-[clamp(2.8rem,6vw,5.7rem)] font-semibold leading-[.98] tracking-[-.055em]">{title}</h1><p className="mt-7 max-w-3xl text-lg leading-8 text-white/60">{intro}</p></div></section>{children}</main>;
}
