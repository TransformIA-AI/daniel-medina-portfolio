import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/constants";
import { getCaseStudies } from "@/lib/cases";
import { locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = ["", "/cv", "/lab", "/contact", "/assets", "/design-system", "/privacy"];
  const localizedRoutes = locales.flatMap((locale) => [
    `/${locale}`,
    ...staticRoutes.slice(1).map((route) => `/${locale}${route}`),
    ...getCaseStudies(locale).map((caseStudy) => `/${locale}/case/${caseStudy.slug}`)
  ]);
  const redirectRoutes = ["", "/cv", "/lab", "/contact", "/assets", "/design-system", "/privacy"];

  return [...redirectRoutes, ...localizedRoutes].map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" || route === "/es" ? "weekly" : "monthly",
    priority: route === "/es" ? 1 : 0.7
  }));
}
