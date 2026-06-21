import { defaultLocale, getPortfolioContent, locales, type Locale } from "@/content/portfolio";

export { defaultLocale, locales, type Locale };

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function getDictionary(locale: Locale) {
  return getPortfolioContent(locale);
}

export function localizedPath(locale: Locale, href: string) {
  if (href.startsWith("/#")) {
    return `/${locale}${href.slice(1)}`;
  }

  if (href === "/") {
    return `/${locale}`;
  }

  return `/${locale}${href}`;
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === "es" ? "en" : "es";
}
