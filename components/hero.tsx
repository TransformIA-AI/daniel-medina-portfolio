import Link from "next/link";
import { ArrowRight, Award, BriefcaseBusiness, Download, Globe2, GraduationCap, TrendingUp, Users } from "lucide-react";

import type { PortfolioDictionary } from "@/content/portfolio";
import { siteConfig } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";

const statIcons = [BriefcaseBusiness, Users, Globe2, TrendingUp, GraduationCap];

function FloatingMetric({
  value,
  label,
  className,
  variant = "light"
}: {
  value: string;
  label: string;
  className: string;
  variant?: "light" | "teal";
}) {
  return (
    <div
      className={[
        "rounded-xl px-5 py-4 shadow-card ring-1",
        variant === "teal" ? "bg-teal text-white ring-teal/20" : "bg-white text-ink ring-line",
        className
      ].join(" ")}
    >
      <p className="text-3xl font-black tracking-tight">{value}</p>
      <p className={["mt-1 text-xs font-medium", variant === "teal" ? "text-white/75" : "text-slate"].join(" ")}>
        {label}
      </p>
    </div>
  );
}

function ProfileVisual({ hero }: { hero: PortfolioDictionary["hero"] }) {
  return (
    <div className="relative mx-auto w-full max-w-[34rem]">
      <div className="surface-grid relative min-h-[28rem] overflow-hidden rounded-2xl border border-line bg-white/60 shadow-soft">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(26,122,110,0.12),transparent_34%),radial-gradient(circle_at_12%_72%,rgba(11,29,58,0.08),transparent_30%)]" />
        <div className="relative grid gap-4 p-5 lg:block lg:h-[28rem]">
          <FloatingMetric
            className="lg:absolute lg:left-4 lg:top-5 lg:w-[10rem]"
            label={hero.stats[0].label}
            value={hero.stats[0].value}
          />
          <FloatingMetric
            className="lg:absolute lg:right-4 lg:top-8 lg:w-[10rem]"
            label={hero.stats[1].label}
            value={hero.stats[1].value}
          />

          <div className="rounded-2xl bg-ink p-7 text-white shadow-soft lg:absolute lg:left-1/2 lg:top-1/2 lg:w-[15rem] lg:-translate-x-1/2 lg:-translate-y-1/2">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45">{hero.profile.label}</p>
            <h2 className="mt-4 text-2xl font-bold tracking-tight">{hero.profile.name}</h2>
            <p className="mt-2 text-sm leading-5 text-white/70">{hero.profile.role}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {hero.profile.chips.map((chip) => (
                <span className="rounded bg-white/10 px-2.5 py-1 text-[11px] font-semibold text-white/75 ring-1 ring-white/10" key={chip}>
                  {chip}
                </span>
              ))}
            </div>
          </div>

          <FloatingMetric
            className="lg:absolute lg:bottom-12 lg:left-6 lg:w-[10.5rem]"
            label={hero.stats[3].label}
            value={hero.stats[3].value}
            variant="teal"
          />
          <FloatingMetric
            className="lg:absolute lg:bottom-16 lg:right-6 lg:w-[10rem]"
            label={hero.stats[2].label}
            value={hero.stats[2].value}
          />

          <div className="flex items-center justify-center gap-2 rounded-lg border border-amber/30 bg-[#FFF8E7] px-4 py-3 text-xs font-bold text-[#7A5C00] shadow-card lg:absolute lg:bottom-3 lg:left-1/2 lg:-translate-x-1/2">
            <Award aria-hidden="true" size={15} />
            {hero.profile.credential}
          </div>
        </div>
      </div>
    </div>
  );
}

export function Hero({ dictionary, locale }: { dictionary: PortfolioDictionary; locale: Locale }) {
  const hero = dictionary.hero;

  return (
    <section className="overflow-hidden border-b border-line bg-paper">
      <div className="mx-auto grid min-h-[calc(100vh-var(--nav-height)-6.5rem)] max-w-7xl items-center gap-12 px-5 py-16 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:py-20">
        <div className="max-w-[36rem]">
          <div className="inline-flex items-center gap-2 rounded-full border border-teal/20 bg-mint px-3.5 py-1.5 text-xs font-semibold text-teal">
            <span className="h-2 w-2 rounded-full bg-teal" aria-hidden="true" />
            {hero.badge}
          </div>

          <h1 className="mt-7 text-left text-5xl font-black leading-[1.05] tracking-tight text-ink sm:text-6xl">
            {hero.name}
          </h1>

          <p className="mt-4 text-xl font-semibold tracking-tight text-teal sm:text-2xl">
            {hero.headline}
          </p>

          <p className="mt-6 whitespace-pre-line text-base leading-8 text-slate sm:text-lg">{hero.body}</p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md bg-ink px-5 text-sm font-semibold text-white transition hover:bg-carbon"
              download
              href={hero.primaryCvHref}
            >
              <Download aria-hidden="true" size={16} />
              {hero.downloadCv}
            </a>
            <Link
              className="focus-ring inline-flex min-h-12 items-center justify-center gap-2 rounded-md border border-ink px-5 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal"
              href={`/${locale}/#work`}
            >
              {hero.viewCases}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
            <a
              className="focus-ring inline-flex min-h-12 items-center justify-center rounded-md border border-teal/25 bg-mint px-5 text-sm font-semibold text-teal transition hover:border-teal"
              href={`mailto:${siteConfig.contactEmail}?subject=Interview%20request%20-%20Daniel%20Medina%20Sanchez`}
            >
              {hero.bookInterview}
            </a>
          </div>

          <div className="mt-10 border-t border-line pt-5">
            <p className="text-[11px] font-bold uppercase tracking-[0.18em] text-slate/65">{hero.credentialsLabel}</p>
            <div className="mt-4 flex flex-wrap gap-x-6 gap-y-2">
              {hero.credentials.map((credential) => (
                <span className="text-sm font-semibold text-slate" key={credential}>
                  {credential}
                </span>
              ))}
            </div>
          </div>
        </div>

        <ProfileVisual hero={hero} />
      </div>

      <div className="bg-ink text-white">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-6 px-5 py-8 sm:grid-cols-3 sm:px-6 lg:grid-cols-5 lg:px-8">
          {hero.stats.map((metric, index) => {
            const statIcon = statIcons[index] ?? BriefcaseBusiness;
            const Icon = statIcon;
            return (
              <div className="flex items-center gap-4" key={metric.label}>
                <Icon aria-hidden="true" className="shrink-0 text-white/35" size={21} />
                <div>
                  <p className="text-2xl font-black leading-none tracking-tight">{metric.value}</p>
                  <p className="mt-1 text-xs font-medium leading-5 text-white/55">{metric.label}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
