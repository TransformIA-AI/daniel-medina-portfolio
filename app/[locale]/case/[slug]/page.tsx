import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, ShieldCheck } from "lucide-react";

import { CVDownloadButtons } from "@/components/cv-download-buttons";
import { getCaseStudyBySlug, getLocalizedCaseParams } from "@/lib/cases";
import { siteConfig } from "@/lib/constants";
import { getDictionary, isLocale, type Locale } from "@/lib/i18n";

type CasePageProps = {
  params: Promise<{
    locale: string;
    slug: string;
  }>;
};

export function generateStaticParams() {
  return getLocalizedCaseParams();
}

export async function generateMetadata({ params }: CasePageProps): Promise<Metadata> {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    return {};
  }

  const caseStudy = getCaseStudyBySlug(rawLocale, slug);

  if (!caseStudy) {
    return {};
  }

  return {
    title: caseStudy.title,
    description: caseStudy.summary,
    openGraph: {
      title: `${caseStudy.title} | ${siteConfig.name}`,
      description: caseStudy.summary,
      url: `${siteConfig.siteUrl}/${rawLocale}/case/${caseStudy.slug}`
    }
  };
}

export default async function CaseStudyPage({ params }: CasePageProps) {
  const { locale: rawLocale, slug } = await params;

  if (!isLocale(rawLocale)) {
    notFound();
  }

  const locale: Locale = rawLocale;
  const dictionary = getDictionary(locale);
  const caseStudy = getCaseStudyBySlug(locale, slug);

  if (!caseStudy) {
    notFound();
  }

  return (
    <article className="bg-paper">
      <section className="border-b border-line bg-white py-16">
        <div className="mx-auto max-w-5xl px-5 sm:px-6 lg:px-8">
          <Link
            className="focus-ring inline-flex items-center gap-2 rounded-sm text-sm font-semibold text-slate transition hover:text-teal"
            href={`/${locale}/#work`}
          >
            <ArrowLeft aria-hidden="true" size={16} />
            {dictionary.casePage.back}
          </Link>
          <p className="mt-10 text-xs font-bold uppercase tracking-[0.18em] text-teal">{caseStudy.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-black tracking-tight text-ink sm:text-5xl">{caseStudy.title}</h1>
          <p className="mt-6 max-w-3xl text-lg leading-8 text-slate">{caseStudy.summary}</p>
          <div className="mt-8 flex flex-wrap gap-2">
            {caseStudy.tags.map((tag) => (
              <span className="rounded-full bg-mint px-3 py-1 text-xs font-bold text-teal" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14">
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-6 lg:grid-cols-[0.75fr_1.25fr] lg:px-8">
          <aside className="space-y-5">
            <div className="rounded-lg border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate">{dictionary.casePage.role}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-ink">{caseStudy.role}</p>
            </div>
            <div className="rounded-lg border border-line bg-white p-6 shadow-card">
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-slate">{dictionary.casePage.sector}</p>
              <p className="mt-3 text-sm font-semibold leading-6 text-ink">{caseStudy.sector}</p>
            </div>
            <div className="rounded-lg border border-teal/20 bg-mint p-6">
              <div className="flex items-center gap-2 text-sm font-bold text-teal">
                <ShieldCheck aria-hidden="true" size={17} />
                {dictionary.casePage.boundary}
              </div>
              <p className="mt-3 text-sm leading-6 text-teal">{caseStudy.publicSafeNote}</p>
            </div>
          </aside>

          <div className="space-y-8">
            <section className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-bold text-ink">{dictionary.casePage.evidence}</h2>
              <ul className="mt-5 space-y-3">
                {caseStudy.proof.map((item) => (
                  <li className="rounded-md bg-mist px-4 py-3 text-sm font-medium text-slate" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {caseStudy.sections.map((section) => (
              <section className="rounded-lg border border-line bg-white p-6 shadow-card" key={section.title}>
                <h2 className="text-xl font-bold text-ink">{section.title}</h2>
                <p className="mt-4 text-base leading-8 text-slate">{section.body}</p>
              </section>
            ))}

            <section className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-bold text-ink">{dictionary.casePage.nextStep}</h2>
              <p className="mt-4 text-base leading-8 text-slate">{dictionary.casePage.nextStepBody}</p>
              <div className="mt-6">
                <CVDownloadButtons compact files={dictionary.cvHub.files} />
              </div>
            </section>
          </div>
        </div>
      </section>
    </article>
  );
}

export const dynamicParams = false;
