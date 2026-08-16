import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { ContactForm } from "@/components/ContactForm";
import { PageHero } from "@/components/PageHero";
import { getDictionary } from "@/content/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; const d=getDictionary(locale); return pageMetadata(locale, d.contact.title, d.contact.body, "/contact"); }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); const d=getDictionary(locale); return <PageHero eyebrow={d.contact.eyebrow} title={d.contact.title} intro={d.contact.body}><section className="section-pad bg-sand"><div className="container-shell grid gap-10 lg:grid-cols-[.65fr_1.35fr]"><div><p className="eyebrow">MoldAgroTech</p><h2 className="mt-4 text-3xl font-semibold tracking-[-.04em]">{d.common.requestConsultation}</h2><p className="mt-5 text-sm leading-7 text-forest-950/55">{d.contact.alternative}</p></div><ContactForm locale={locale} dict={d}/></div></section></PageHero>; }
