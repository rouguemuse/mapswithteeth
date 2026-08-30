import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          charcoal: "#1C1D1D",      // Primary ink / near-black
          dark: "#1C1D1D",          // Primary ink alias
          paper: "#F5F1E8",         // Warm ivory primary paper background
          "paper-secondary": "#EEE8DD", // Secondary warm paper / dossier surface
          ivory: "#F5F1E8",         // Warm ivory alias
          oxblood: "#971F26",       // Signature oxblood accent
          "oxblood-muted": "#A52A30", // Muted red linework / leader lines
          border: "#D9D1C4",        // Pale warm gray border / grid rules
          sand: "#D9D1C4",          // Pale warm gray alias
          stone: "#78726A",         // Secondary metadata text
          slate: "#394247",         // Optional data system accent
          ruby: "#971F26",
          muted: "#78726A",
        },
      },
      fontFamily: {
        serif: ["'Newsreader'", "'Playfair Display'", "'Georgia'", "'Cambria'", "serif"],
        mono: ["'Space Mono'", "'JetBrains Mono'", "'Fira Code'", "Menlo", "monospace"],
        handwriting: ["'Caveat'", "'Kalam'", "'Indie Flower'", "cursive"],
        sans: ["'Inter'", "system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
