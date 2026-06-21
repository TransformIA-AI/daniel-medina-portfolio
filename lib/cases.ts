import { getPortfolioContent, locales, type Locale } from "@/content/portfolio";

export function getCaseStudies(locale: Locale) {
  return getPortfolioContent(locale).cases;
}

export function getCaseStudyBySlug(locale: Locale, slug: string) {
  return getCaseStudies(locale).find((caseStudy) => caseStudy.slug === slug);
}

export function getCaseStudySlugs(locale: Locale) {
  return getCaseStudies(locale).map((caseStudy) => ({
    slug: caseStudy.slug
  }));
}

export function getLocalizedCaseParams() {
  return locales.flatMap((locale) =>
    getCaseStudies(locale).map((caseStudy) => ({
      locale,
      slug: caseStudy.slug
    }))
  );
}
