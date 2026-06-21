import type { Metadata } from "next";

import { ContactSection } from "@/components/home-sections";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type ContactPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: ContactPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.pages.contact.title,
    description: dictionary.pages.contact.description
  };
}

export default async function ContactPage({ params }: ContactPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return <ContactSection dictionary={dictionary} locale={locale} />;
}
