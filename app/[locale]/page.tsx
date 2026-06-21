import type { Metadata } from "next";

import {
  CVHubSection,
  ConciergeSection,
  ContactSection,
  CredentialsSection,
  LabSection,
  OperationsSection,
  ProofOfWorkSection,
  ValueAreasSection
} from "@/components/home-sections";
import { Hero } from "@/components/hero";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type HomePageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: HomePageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.metadata.title,
    description: dictionary.metadata.description
  };
}

export default async function LocalizedHomePage({ params }: HomePageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return (
    <>
      <Hero dictionary={dictionary} locale={locale} />
      <ValueAreasSection dictionary={dictionary} locale={locale} />
      <ProofOfWorkSection dictionary={dictionary} locale={locale} />
      <LabSection dictionary={dictionary} locale={locale} />
      <ConciergeSection dictionary={dictionary} locale={locale} />
      <CredentialsSection dictionary={dictionary} locale={locale} />
      <OperationsSection dictionary={dictionary} locale={locale} />
      <CVHubSection dictionary={dictionary} locale={locale} />
      <ContactSection dictionary={dictionary} locale={locale} />
    </>
  );
}
