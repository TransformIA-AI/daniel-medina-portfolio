export const siteConfig = {
  name: "Daniel Medina Sánchez",
  role: "AI Transformation, Digital Workplace & Operations Transformation Leader",
  repoUrl: "https://github.com/TransformIA-AI/daniel-medina-portfolio",
  siteUrl:
    process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, "") ??
    "https://daniel-medina-portfolio.vercel.app",
  contactEmail: "Danielmedinasanchez86@gmail.com",
  linkedinUrl: "https://linkedin.com/in/danielmedina-ai"
};

export const cvFiles = [
  {
    id: "es",
    href: "/generated-cv/daniel-medina-sanchez-cv-es.pdf"
  },
  {
    id: "en",
    href: "/generated-cv/daniel-medina-sanchez-cv-en.pdf"
  },
  {
    id: "enNoPhoto",
    href: "/generated-cv/daniel-medina-sanchez-cv-en-no-photo.pdf"
  }
] as const;

export const cvRoutes = {
  es: cvFiles[0].href,
  en: cvFiles[1].href,
  enNoPhoto: cvFiles[2].href
};
