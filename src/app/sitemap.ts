import type { MetadataRoute } from "next";
import { locales } from "@/lib/i18n";
import { siteConfig } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap { const paths=["","/solutions","/technology","/industries","/about","/partners","/insights","/contact"]; return locales.flatMap(locale => paths.map(path => ({ url:`${siteConfig.defaultUrl}/${locale}${path}`, lastModified:new Date(), changeFrequency:path===""?"weekly":"monthly", priority:path===""?1:.7 }))); }
