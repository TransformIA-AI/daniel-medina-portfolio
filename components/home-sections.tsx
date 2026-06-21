import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Layers3,
  ShieldCheck,
  Workflow
} from "lucide-react";

import { CaseCard } from "@/components/case-card";
import { CVDownloadButtons } from "@/components/cv-download-buttons";
import { RecruiterConcierge } from "@/components/recruiter-concierge";
import { SectionHeading } from "@/components/section-heading";
import type { PortfolioDictionary } from "@/content/portfolio";
import { siteConfig } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";

type LocalizedSectionProps = {
  dictionary: PortfolioDictionary;
  locale: Locale;
};

export function ValueAreasSection({ dictionary }: LocalizedSectionProps) {
  const icons = [Cpu, Layers3, BriefcaseBusiness, Workflow];
  const content = dictionary.valueAreas;

  return (
    <section className="bg-mist py-20" id="positioning">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {content.items.map((area, index) => {
            const Icon = icons[index];
            return (
              <article className="rounded-lg border border-line bg-white p-6 shadow-card" key={area.title}>
                <div className="flex h-11 w-11 items-center justify-center rounded-md bg-mint text-teal">
                  <Icon aria-hidden="true" size={20} />
                </div>
                <h3 className="mt-5 text-lg font-bold text-ink">{area.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">{area.body}</p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {area.tags.map((tag) => (
                    <span className="rounded bg-mist px-2.5 py-1 text-xs font-medium text-slate" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function ProofOfWorkSection({ dictionary, locale }: LocalizedSectionProps) {
  return (
    <section className="bg-paper py-20" id="work">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={dictionary.proof.eyebrow}
            title={dictionary.proof.title}
            body={dictionary.proof.body}
          />
          <Link
            className="focus-ring inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"
            href={`/${locale}/assets`}
          >
            {dictionary.proof.assetsCta}
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {dictionary.cases.map((caseStudy) => (
            <CaseCard caseStudy={caseStudy} key={caseStudy.slug} locale={locale} />
          ))}
        </div>
      </div>
    </section>
  );
}

export function LabSection({ dictionary }: LocalizedSectionProps) {
  const content = dictionary.lab;

  return (
    <section className="bg-ink py-20 text-white" id="lab">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{content.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            {content.body}
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {content.boundaries.map((boundary) => (
              <div className="flex items-start gap-2 text-sm text-white/75" key={boundary}>
                <ShieldCheck aria-hidden="true" className="mt-0.5 text-teal" size={16} />
                {boundary}
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border border-white/10 bg-white/[0.04] p-5 shadow-soft">
          <div className="flex items-center justify-between gap-4 border-b border-white/10 pb-4">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-white/45">{content.cockpitEyebrow}</p>
              <p className="mt-1 text-sm font-semibold text-white">{content.cockpitTitle}</p>
            </div>
            <span className="rounded-full bg-teal/20 px-3 py-1 text-xs font-semibold text-teal">{content.demoOnly}</span>
          </div>
          <div className="mt-5 grid gap-3">
            {content.flow.map((step, index) => (
              <div className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-md bg-white/[0.06] p-4" key={step}>
                <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal text-sm font-black">
                  {index + 1}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{step}</p>
                  <p className="mt-1 text-xs leading-5 text-white/55">
                    {content.flowBody}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function ConciergeSection({ dictionary }: LocalizedSectionProps) {
  return (
    <section className="bg-paper py-20" id="concierge">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={dictionary.conciergeSection.eyebrow}
            title={dictionary.conciergeSection.title}
            body={dictionary.conciergeSection.body}
          />
          <div className="inline-flex w-fit items-center gap-2 rounded-full bg-mint px-3 py-1.5 text-xs font-semibold text-teal">
            <Bot aria-hidden="true" size={14} />
            {dictionary.conciergeSection.badge}
          </div>
        </div>
        <RecruiterConcierge content={dictionary.recruiter} />
      </div>
    </section>
  );
}

export function CredentialsSection({ dictionary }: LocalizedSectionProps) {
  const content = dictionary.credentialsSection;

  return (
    <section className="border-y border-line bg-white py-20" id="credentials">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mt-10 grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <article className="rounded-lg border border-amber/30 bg-[#FFFBEF] p-6">
            <GraduationCap aria-hidden="true" className="text-amber" size={30} />
            <h3 className="mt-5 text-2xl font-bold text-ink">{content.cardTitle}</h3>
            <p className="mt-3 text-sm leading-6 text-slate">
              {content.cardBody}
            </p>
          </article>
          <div className="grid gap-4 sm:grid-cols-2">
            {content.items.map((item) => (
              <div className="rounded-lg border border-line bg-paper p-5" key={item}>
                <CheckCircle2 aria-hidden="true" className="text-teal" size={19} />
                <p className="mt-4 text-sm font-semibold leading-6 text-ink">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function OperationsSection({ dictionary }: LocalizedSectionProps) {
  const content = dictionary.operations;

  return (
    <section className="bg-mist py-20">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 sm:px-6 lg:grid-cols-[0.8fr_1.2fr] lg:px-8">
        <SectionHeading
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="grid gap-4 sm:grid-cols-3">
          {content.items.map((item, index) => {
            const Icon = [BriefcaseBusiness, Building2, Cpu][index] ?? BriefcaseBusiness;
            return (
              <article className="rounded-lg border border-line bg-white p-6 shadow-card" key={item.title}>
                <Icon aria-hidden="true" className="text-teal" size={22} />
                <h3 className="mt-5 text-lg font-bold text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate">{item.body}</p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export function CVHubSection({ dictionary }: LocalizedSectionProps) {
  return (
    <section className="bg-paper py-20" id="cv">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <SectionHeading
            eyebrow={dictionary.cvHub.eyebrow}
            title={dictionary.cvHub.title}
            body={dictionary.cvHub.body}
          />
          <CVDownloadButtons compact files={dictionary.cvHub.files} />
        </div>
        <div className="mt-10 grid gap-5 md:grid-cols-3">
          {dictionary.cvHub.files.map((cvFile) => (
            <a
              className="focus-ring rounded-lg border border-line bg-white p-6 shadow-card transition hover:border-teal hover:shadow-soft"
              download
              href={cvFile.href}
              key={cvFile.href}
            >
              <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{cvFile.language}</p>
              <h3 className="mt-4 text-xl font-bold text-ink">{cvFile.shortLabel}</h3>
              <p className="mt-3 text-sm leading-6 text-slate">{cvFile.audience}</p>
              <p className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink">
                {dictionary.cvHub.downloadPdf}
                <ArrowRight aria-hidden="true" size={15} />
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

export function ContactSection({ dictionary, locale }: LocalizedSectionProps) {
  return (
    <section className="bg-ink py-20 text-white" id="contact">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{dictionary.contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {dictionary.contact.title}
          </h2>
          <p className="mt-5 text-base leading-7 text-white/70">
            {dictionary.contact.body}
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md bg-teal px-5 text-sm font-semibold text-white transition hover:bg-[#14665c]"
              href={`mailto:${siteConfig.contactEmail}?subject=Portfolio%20contact%20-%20Daniel%20Medina%20Sanchez`}
            >
              {dictionary.contact.requestInterview}
            </a>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
              href={siteConfig.linkedinUrl}
              rel="noreferrer"
              target="_blank"
            >
              {dictionary.contact.linkedin}
            </a>
            <Link
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-white/20 px-5 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
              href={`/${locale}/cv`}
            >
              {dictionary.contact.cvHub}
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
