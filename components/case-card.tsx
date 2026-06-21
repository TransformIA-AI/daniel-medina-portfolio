import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

import type { LocalizedCaseStudy } from "@/content/portfolio";
import type { Locale } from "@/lib/i18n";

export function CaseCard({ caseStudy, locale }: { caseStudy: LocalizedCaseStudy; locale: Locale }) {
  return (
    <Link
      className="focus-ring group flex h-full flex-col rounded-lg border border-line bg-white p-6 shadow-card transition hover:-translate-y-1 hover:border-teal hover:shadow-soft"
      href={`/${locale}/case/${caseStudy.slug}`}
    >
      <div className="flex items-start justify-between gap-4">
        <p className="text-xs font-bold uppercase tracking-[0.16em] text-teal">{caseStudy.eyebrow}</p>
        <ArrowUpRight aria-hidden="true" className="text-slate transition group-hover:text-teal" size={18} />
      </div>
      <h3 className="mt-4 text-xl font-bold tracking-tight text-ink">{caseStudy.title}</h3>
      <p className="mt-3 text-sm leading-6 text-slate">{caseStudy.summary}</p>
      <div className="mt-5 flex flex-wrap gap-2">
        {caseStudy.tags.map((tag) => (
          <span className="rounded bg-mist px-2.5 py-1 text-xs font-medium text-slate" key={tag}>
            {tag}
          </span>
        ))}
      </div>
      <div className="mt-6 border-t border-line pt-5">
        <p className="text-sm font-semibold text-ink">{caseStudy.proof[0]}</p>
      </div>
    </Link>
  );
}
