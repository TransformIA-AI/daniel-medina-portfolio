import Link from "next/link";

import type { PortfolioDictionary } from "@/content/portfolio";
import { siteConfig } from "@/lib/constants";
import { type Locale } from "@/lib/i18n";

export function Footer({ dictionary, locale }: { dictionary: PortfolioDictionary; locale: Locale }) {
  return (
    <footer className="border-t border-line bg-white">
      <div className="mx-auto grid max-w-7xl gap-8 px-5 py-10 sm:px-6 lg:grid-cols-[1.4fr_1fr] lg:px-8">
        <div>
          <p className="text-sm font-semibold text-ink">{siteConfig.name}</p>
          <p className="mt-2 max-w-2xl text-sm leading-6 text-slate">{dictionary.footer.body}</p>
        </div>
        <div className="flex flex-wrap gap-x-5 gap-y-3 text-sm font-medium text-slate lg:justify-end">
          <Link className="focus-ring rounded-sm hover:text-ink" href={`/${locale}/privacy`}>
            {dictionary.footer.links.privacy}
          </Link>
          <Link className="focus-ring rounded-sm hover:text-ink" href={`/${locale}/assets`}>
            {dictionary.footer.links.assets}
          </Link>
          <Link className="focus-ring rounded-sm hover:text-ink" href={`/${locale}/design-system`}>
            {dictionary.footer.links.designSystem}
          </Link>
          <a className="focus-ring rounded-sm hover:text-ink" href={siteConfig.repoUrl}>
            {dictionary.footer.links.github}
          </a>
        </div>
      </div>
    </footer>
  );
}
