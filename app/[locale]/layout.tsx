import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Footer } from "@/components/footer";
import { Nav } from "@/components/nav";
import { getDictionary, isLocale, locales, type Locale } from "@/lib/i18n";

type LocaleLayoutProps = {
  children: React.ReactNode;
  params: Promise<{
    locale: string;
  }>;
};

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: LocaleLayoutProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const dictionary = getDictionary(rawLocale);

  return {
    title: {
      default: dictionary.metadata.title,
      template: `%s | Daniel Medina Sánchez`
    },
    description: dictionary.metadata.description,
    alternates: {
      canonical: `/${rawLocale}`,
      languages: {
        es: "/es",
        en: "/en"
      }
    },
    openGraph: {
      title: dictionary.metadata.title,
      description: dictionary.metadata.description,
      locale: dictionary.metadata.openGraphLocale
    }
  };
}

export default async function LocaleLayout({ children, params }: LocaleLayoutProps) {
  const { locale: rawLocale } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = getDictionary(locale);

  return (
    <>
      <Nav dictionary={dictionary} locale={locale} />
      <main>{children}</main>
      <Footer dictionary={dictionary} locale={locale} />
    </>
  );
}
