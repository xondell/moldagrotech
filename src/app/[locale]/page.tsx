import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import { getDictionary } from "@/content/dictionary";
import { isLocale } from "@/lib/i18n";
import { pageMetadata } from "@/lib/site";
export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> { const { locale } = await params; if (!isLocale(locale)) return {}; return pageMetadata(locale); }
export default async function Page({ params }: { params: Promise<{ locale: string }> }) { const { locale } = await params; if (!isLocale(locale)) notFound(); return <HomePage locale={locale} dict={getDictionary(locale)}/>; }
