import type { Metadata } from "next";

import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

const swatches = [
  ["Ink", "#0B1D3A"],
  ["Teal", "#1A7A6E"],
  ["Paper", "#FAFAF8"],
  ["Mist", "#F4F4F1"],
  ["Amber", "#B8860B"],
  ["Carbon", "#1C1C1E"]
];

type DesignSystemPageProps = {
  params: Promise<{
    locale: string;
  }>;
};

export async function generateMetadata({ params }: DesignSystemPageProps): Promise<Metadata> {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const dictionary = getDictionary(locale);

  return {
    title: dictionary.pages.designSystem.title,
    description: dictionary.pages.designSystem.description
  };
}

export default async function DesignSystemPage({ params }: DesignSystemPageProps) {
  const { locale: rawLocale } = await params;
  const locale: Locale = isLocale(rawLocale) ? rawLocale : "es";
  const content = getDictionary(locale).pages.designSystem;

  return (
    <section className="bg-paper py-16">
      <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
        <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{content.eyebrow}</p>
        <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">{content.heading}</h1>
        <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{content.body}</p>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {swatches.map(([name, value]) => (
            <div className="rounded-lg border border-line bg-white p-5 shadow-card" key={name}>
              <div className="h-20 rounded-md border border-line" style={{ backgroundColor: value }} />
              <p className="mt-4 text-sm font-bold text-ink">{name}</p>
              <p className="mt-1 text-sm text-slate">{value}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
