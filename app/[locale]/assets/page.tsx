import type { Metadata } from "next";
import { FileDown, ShieldCheck } from "lucide-react";

import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type AssetsPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: AssetsPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.pages.assets.title,
    description: dictionary.pages.assets.description
  };
}

export default async function AssetsPage({ params }: AssetsPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);
  const content = dictionary.pages.assets;

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{content.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">{content.heading}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{content.body}</p>

        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {dictionary.cvHub.files.map((cvFile) => (
            <a
              className="focus-ring rounded-lg border border-line bg-white p-6 shadow-card transition hover:border-teal"
              download
              href={cvFile.href}
              key={cvFile.href}
            >
              <FileDown aria-hidden="true" className="text-teal" size={24} />
              <h2 className="mt-5 text-lg font-bold text-ink">{cvFile.shortLabel}</h2>
              <p className="mt-3 break-all text-sm leading-6 text-slate">{cvFile.href}</p>
            </a>
          ))}
        </div>

        <div className="mt-10 rounded-lg border border-teal/20 bg-mint p-6 text-teal">
          <div className="flex items-center gap-2 text-sm font-bold">
            <ShieldCheck aria-hidden="true" size={18} />
            {content.boundaryTitle}
          </div>
          <p className="mt-3 text-sm leading-6">{content.boundaryBody}</p>
        </div>
      </div>
    </section>
  );
}
