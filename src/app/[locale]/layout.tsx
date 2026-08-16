import { notFound } from "next/navigation";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { getDictionary } from "@/content/dictionary";
import { isLocale, locales } from "@/lib/i18n";

export function generateStaticParams() { return locales.map(locale => ({ locale })); }

export default async function LocaleLayout({ children, params }: { children: React.ReactNode; params: Promise<{ locale: string }> }) {
  const { locale } = await params; if (!isLocale(locale)) notFound(); const dict = getDictionary(locale);
  return <><Header locale={locale} dict={dict}/>{children}<Footer locale={locale} dict={dict}/></>;
}
