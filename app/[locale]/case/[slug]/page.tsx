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

function getSectionParagraphs(body: string | readonly string[]) {
  return Array.isArray(body) ? body : [body];
}

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
            href={`/${locale}/#experience`}
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
        <div className="mx-auto grid max-w-5xl gap-8 px-5 sm:px-6 lg:grid-cols-[minmax(0,1.25fr)_minmax(18rem,0.75fr)] lg:px-8">
          <div className="space-y-8">
            {caseStudy.sections.map((section) => (
              <section className="rounded-lg border border-line bg-white p-6 shadow-card" key={section.title}>
                <h2 className="text-xl font-bold text-ink">{section.title}</h2>
                <div className="mt-4 space-y-4 text-base leading-8 text-slate">
                  {getSectionParagraphs(section.body).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
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

          <aside className="self-start space-y-5 lg:sticky lg:top-28">
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
            <section className="rounded-lg border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-bold text-ink">{dictionary.casePage.evidence}</h2>
              <ul className="mt-5 flex flex-wrap gap-2">
                {caseStudy.proof.map((item) => (
                  <li className="rounded-md bg-mist px-3 py-2 text-xs font-semibold leading-5 text-slate" key={item}>
                    {item}
                  </li>
                ))}
              </ul>
            </section>
          </aside>
        </div>
      </section>
    </article>
  );
}

export const dynamicParams = false;
