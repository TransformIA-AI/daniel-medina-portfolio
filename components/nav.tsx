import Link from "next/link";
import { Download } from "lucide-react";

import { LanguageToggle } from "@/components/language-toggle";
import type { PortfolioDictionary } from "@/content/portfolio";
import { siteConfig } from "@/lib/constants";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Nav({ dictionary, locale }: { dictionary: PortfolioDictionary; locale: Locale }) {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-[var(--nav-height)] max-w-7xl items-center justify-between gap-5 px-5 sm:px-6 lg:px-8">
        <Link className="focus-ring flex min-w-0 items-center gap-3 rounded-sm" href={`/${locale}`} aria-label={dictionary.nav.homeAria}>
          <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-ink text-[13px] font-black tracking-[0.12em] text-white shadow-card">
            DMS
          </span>
          <span className="hidden min-w-0 sm:block">
            <span className="block truncate text-sm font-bold leading-5 text-ink">{dictionary.nav.identityName}</span>
            <span className="block truncate text-xs leading-4 text-slate">{dictionary.nav.identityRole}</span>
          </span>
        </Link>
        <div className="hidden items-center gap-5 lg:flex">
          {dictionary.nav.links.map((link) => (
            <Link
              className="focus-ring rounded-sm text-sm font-semibold text-slate transition hover:text-ink"
              href={localizedPath(locale, link.href)}
              key={link.href}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="flex shrink-0 items-center gap-2">
          <a
            className="focus-ring hidden min-h-10 items-center justify-center rounded-md border border-line bg-white px-4 text-sm font-semibold text-ink transition hover:border-teal hover:text-teal md:inline-flex"
            href={`mailto:${siteConfig.contactEmail}?subject=Interview%20request%20-%20Daniel%20Medina%20Sanchez`}
          >
            {dictionary.nav.bookInterview}
          </a>
          <LanguageToggle locale={locale} />
          <a
            className="focus-ring inline-flex min-h-10 items-center justify-center gap-2 rounded-md bg-ink px-4 text-sm font-semibold text-white transition hover:bg-carbon"
            href={dictionary.hero.primaryCvHref}
            download
          >
            <Download aria-hidden="true" size={15} />
            {dictionary.nav.cv}
          </a>
        </div>
      </nav>
    </header>
  );
}
