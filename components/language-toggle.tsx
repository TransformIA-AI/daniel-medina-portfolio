"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import { getAlternateLocale, type Locale } from "@/lib/i18n";

function swapLocale(pathname: string, nextLocale: Locale) {
  const parts = pathname.split("/");
  const currentLocale = parts[1];

  if (currentLocale === "es" || currentLocale === "en") {
    parts[1] = nextLocale;
    return parts.join("/") || `/${nextLocale}`;
  }

  return `/${nextLocale}`;
}

export function LanguageToggle({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const alternateLocale = getAlternateLocale(locale);

  return (
    <div className="flex h-10 items-center rounded-md border border-line bg-white p-0.5 text-xs font-bold text-slate">
      {(["es", "en"] as const).map((item) => {
        const isActive = item === locale;
        return (
          <Link
            aria-current={isActive ? "page" : undefined}
            className={[
              "focus-ring flex h-8 min-w-8 items-center justify-center rounded px-2 transition",
              isActive ? "bg-ink text-white" : "text-slate hover:text-ink"
            ].join(" ")}
            href={item === locale ? pathname : swapLocale(pathname, item === alternateLocale ? alternateLocale : item)}
            key={item}
          >
            {item.toUpperCase()}
          </Link>
        );
      })}
    </div>
  );
}
