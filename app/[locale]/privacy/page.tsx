import type { Metadata } from "next";
import { ShieldCheck } from "lucide-react";

import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type PrivacyPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: PrivacyPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.pages.privacy.title,
    description: dictionary.pages.privacy.description
  };
}

export default async function PrivacyPage({ params }: PrivacyPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const content = getDictionary(locale).pages.privacy;

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="inline-flex h-12 w-12 items-center justify-center rounded-md bg-mint text-teal">
          <ShieldCheck aria-hidden="true" size={24} />
        </div>
        <h1 className="mt-6 text-4xl font-black tracking-tight text-ink sm:text-5xl">{content.heading}</h1>
        <div className="mt-8 space-y-6 text-base leading-8 text-slate">
          {content.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}
