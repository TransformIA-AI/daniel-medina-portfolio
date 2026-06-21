import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./content/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        ink: "#0B1D3A",
        carbon: "#1C1C1E",
        slate: "#5A5A5A",
        paper: "#FAFAF8",
        mist: "#F4F4F1",
        line: "#E4E4DF",
        teal: "#1A7A6E",
        mint: "#E8F5F2",
        amber: "#B8860B"
      },
      boxShadow: {
        soft: "0 20px 60px rgba(11, 29, 58, 0.12)",
        card: "0 10px 30px rgba(11, 29, 58, 0.08)"
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "sans-serif"
        ]
      }
    }
  },
  plugins: []
};

export default config;
