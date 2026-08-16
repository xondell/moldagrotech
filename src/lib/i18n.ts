export const locales = ["ro", "ru", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "ro";

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localize(locale: Locale, path = "") {
  const safePath = path.startsWith("/") ? path : `/${path}`;
  return `/${locale}${safePath === "/" ? "" : safePath}`;
}
