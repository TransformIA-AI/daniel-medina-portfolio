import type { Metadata } from "next";

import { CVHubSection, ContactSection } from "@/components/home-sections";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type CVPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: CVPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.pages.cv.title,
    description: dictionary.pages.cv.description
  };
}

export default async function CVPage({ params }: CVPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return (
    <>
      <CVHubSection dictionary={dictionary} locale={locale} />
      <ContactSection dictionary={dictionary} locale={locale} />
    </>
  );
}
