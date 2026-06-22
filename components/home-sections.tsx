import Link from "next/link";
import {
  ArrowRight,
  Bot,
  BriefcaseBusiness,
  Building2,
  CheckCircle2,
  Cpu,
  GraduationCap,
  Layers3
} from "lucide-react";

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
  const icons = [BriefcaseBusiness, Layers3, Cpu];
  const content = dictionary.valueAreas;

  return (
    <section className="bg-mist py-20" id="work">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-3">
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

function EditorialCard({
  body,
  category,
  cta,
  footer,
  href,
  tags,
  title
}: {
  body: string;
  category?: string;
  cta?: string;
  footer: string;
  href: string;
  tags: readonly string[];
  title: string;
}) {
  return (
    <Link
      className="focus-ring group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-teal hover:shadow-soft"
      href={href}
    >
      {category ? (
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{category}</p>
      ) : null}
      <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">{title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate">{body}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <span className="rounded bg-mist px-2.5 py-1 text-xs font-medium text-slate" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-auto border-t border-line pt-5">
        <p className="text-sm font-semibold text-ink">{footer}</p>
        {cta ? (
          <p className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-teal">
            {cta}
            <ArrowRight aria-hidden="true" size={15} />
          </p>
        ) : null}
      </div>
    </Link>
  );
}

export function ExperienceSection({ dictionary, locale }: LocalizedSectionProps) {
  const content = dictionary.proof;

  return (
    <section className="bg-paper py-20" id="experience">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <SectionHeading
          align="center"
          eyebrow={content.eyebrow}
          title={content.title}
          body={content.body}
        />
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          {content.professionalCards.map((card) => (
            <EditorialCard
              body={card.body}
              category={card.category}
              cta={card.cta}
              footer={card.footer}
              href={`/${locale}/case/${card.slug}`}
              key={card.slug}
              tags={card.tags}
              title={card.title}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

export function FeaturedCasesSection({ dictionary, locale }: LocalizedSectionProps) {
  return (
    <section className="bg-white py-20">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 sm:px-6 lg:px-8">
        {dictionary.featuredCases.map((caseBlock) => (
          <article
            className="grid gap-8 rounded-lg border border-line bg-paper p-6 shadow-card lg:grid-cols-[1.05fr_0.95fr] lg:p-8"
            key={caseBlock.slug}
          >
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{caseBlock.eyebrow}</p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-ink sm:text-4xl">{caseBlock.title}</h2>
              <div className="mt-5 space-y-4 text-base leading-7 text-slate">
                {caseBlock.body.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
              </div>
              <Link
                className="focus-ring mt-7 inline-flex min-h-11 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-carbon"
                href={`/${locale}/case/${caseBlock.slug}`}
              >
                {caseBlock.cta}
                <ArrowRight aria-hidden="true" size={15} />
              </Link>
            </div>
            <div className="grid content-start gap-3">
              {caseBlock.highlights.map((highlight) => (
                <div className="rounded-md border border-line bg-white px-4 py-3 text-sm font-semibold leading-6 text-ink" key={highlight}>
                  {highlight}
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export function LabSection({ dictionary, locale }: LocalizedSectionProps) {
  const content = dictionary.lab;

  return (
    <section className="bg-ink py-20 text-white" id="lab">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.9fr_1.1fr] lg:px-8">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-teal">{content.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
            {content.title}
          </h2>
          <p className="mt-5 whitespace-pre-line text-base leading-7 text-white/70">
            {content.body}
          </p>
          <Link
            className="focus-ring mt-8 inline-flex min-h-11 items-center justify-center gap-2 rounded-md border border-white/20 px-4 text-sm font-semibold text-white transition hover:border-teal hover:text-teal"
            href={`/${locale}/case/${content.slug}`}
          >
            {content.cta}
            <ArrowRight aria-hidden="true" size={15} />
          </Link>
        </div>

        <div className="grid gap-3">
          <p className="text-sm font-bold text-white">{content.methodTitle}</p>
          {content.method.map((step, index) => (
            <div className="grid grid-cols-[2.5rem_1fr] gap-4 rounded-md border border-white/10 bg-white/[0.06] p-4" key={step.title}>
              <div className="flex h-9 w-9 items-center justify-center rounded-md bg-teal text-sm font-black">
                {index + 1}
              </div>
              <div>
                <p className="text-sm font-semibold text-white">{step.title}</p>
                <p className="mt-1 text-xs leading-5 text-white/55">
                  {step.body}
                </p>
              </div>
            </div>
          ))}
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
          align="center"
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
