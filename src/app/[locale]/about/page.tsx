import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { StandardPage } from "@/components/StandardPage";
import { getDictionary } from "@/content/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; const d = getDictionary(locale); return pageMetadata(locale, d.pages.about.title, d.pages.about.intro, "/about"); }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <StandardPage locale={locale} dict={getDictionary(locale)} pageKey="about"/>; }
