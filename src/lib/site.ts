import type { Metadata } from "next";
import type { Locale } from "./i18n";

const vercelUrl = process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
    ? `https://${process.env.VERCEL_URL}`
    : undefined;

export const siteConfig = {
  name: "MoldAgroTech",
  defaultUrl: process.env.NEXT_PUBLIC_SITE_URL || vercelUrl || "https://moldagrotech.md",
  email: "",
  phone: "",
};

const metadataText = {
  ro: {
    title: "MoldAgroTech — Tehnologie pentru agricultura modernă",
    description: "Soluții AgriTech pentru monitorizare, irigare inteligentă, automatizare, IoT, analiză de date și AI în agricultura din Moldova.",
  },
  ru: {
    title: "MoldAgroTech — Технологии для современного сельского хозяйства",
    description: "AgriTech-решения для мониторинга, умного полива, автоматизации, IoT, аналитики данных и ИИ в сельском хозяйстве Молдовы.",
  },
  en: {
    title: "MoldAgroTech — Technology for modern agriculture",
    description: "AgriTech solutions for monitoring, smart irrigation, automation, IoT, data analytics and AI for agriculture in Moldova.",
  },
} satisfies Record<Locale, { title: string; description: string }>;

export function pageMetadata(locale: Locale, title?: string, description?: string, path = ""): Metadata {
  const base = metadataText[locale];
  const url = `${siteConfig.defaultUrl}/${locale}${path}`;
  return {
    title: title ? `${title} | MoldAgroTech` : base.title,
    description: description || base.description,
    alternates: {
      canonical: url,
      languages: {
        ro: `${siteConfig.defaultUrl}/ro${path}`,
        ru: `${siteConfig.defaultUrl}/ru${path}`,
        en: `${siteConfig.defaultUrl}/en${path}`,
        "x-default": `${siteConfig.defaultUrl}/ro${path}`,
      },
    },
    openGraph: {
      type: "website",
      url,
      siteName: "MoldAgroTech",
      locale: locale === "ro" ? "ro_MD" : locale === "ru" ? "ru_RU" : "en_US",
      title: title ? `${title} | MoldAgroTech` : base.title,
      description: description || base.description,
    },
    twitter: {
      card: "summary_large_image",
      title: title ? `${title} | MoldAgroTech` : base.title,
      description: description || base.description,
    },
  };
}
