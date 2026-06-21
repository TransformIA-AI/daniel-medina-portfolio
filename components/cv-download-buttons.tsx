import { Download } from "lucide-react";

import type { PortfolioDictionary } from "@/content/portfolio";

type CVDownloadButtonsProps = {
  compact?: boolean;
  files: PortfolioDictionary["cvHub"]["files"];
};

export function CVDownloadButtons({ compact = false, files }: CVDownloadButtonsProps) {
  return (
    <div className="flex flex-wrap gap-3">
      {files.map((cvFile, index) => (
        <a
          key={cvFile.href}
          className={[
            "focus-ring inline-flex items-center justify-center gap-2 rounded-md border px-4 font-semibold transition",
            compact ? "min-h-10 text-sm" : "min-h-12 text-sm",
            index === 0
              ? "border-ink bg-ink text-white hover:bg-carbon"
              : "border-line bg-white text-ink hover:border-teal hover:text-teal"
          ].join(" ")}
          href={cvFile.href}
          download
        >
          <Download aria-hidden="true" size={16} />
          {compact ? cvFile.shortLabel : cvFile.label}
        </a>
      ))}
    </div>
  );
}
