import type { Metadata } from "next";

import { siteConfig } from "@/lib/constants";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Daniel Medina Sánchez | Transformación con IA y operaciones",
    template: `%s | ${siteConfig.name}`
  },
  description:
    "Portfolio profesional de Daniel Medina Sánchez: operaciones, Digital Workplace, consultoría tecnológica y transición sólida hacia IA aplicada.",
  applicationName: "Daniel Medina Portfolio",
  authors: [{ name: siteConfig.name }],
  keywords: [
    "AI Transformation",
    "Digital Workplace",
    "Operations Transformation",
    "Human-in-the-Loop",
    "ITSM",
    "CS50AI",
    "Public Sector Delivery"
  ],
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: "Daniel Medina Sánchez | Transformación con IA y operaciones",
    description:
      "Portfolio profesional de Daniel Medina Sánchez: operaciones, Digital Workplace, consultoría tecnológica y transición sólida hacia IA aplicada.",
    siteName: "Daniel Medina Portfolio",
    locale: "es_ES"
  },
  twitter: {
    card: "summary_large_image",
    title: "Daniel Medina Sánchez | Transformación con IA y operaciones",
    description:
      "Portfolio profesional de Daniel Medina Sánchez: operaciones, Digital Workplace, consultoría tecnológica y transición sólida hacia IA aplicada."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body>
        {children}
      </body>
    </html>
  );
}
