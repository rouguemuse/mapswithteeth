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
        // Locked Canonical Brand Palette
        mwt: {
          black: "#11100F",       // Archive Black
          oxblood: "#841F2B",     // Primary Brand Accent
          "oxblood-dark": "#661620",
          "oxblood-light": "#A52B3A",
          parchment: "#EEE8DB",   // Editorial Light Surface
          ivory: "#F8F5EE",       // Reading Ivory
          stone: "#B5A58E",       // Aged Stone
          graphite: "#4D4944",    // Secondary Ink & Muted Text
        },
        // Backward compatibility mappings
        brand: {
          charcoal: "#11100F",
          dark: "#11100F",
          paper: "#F8F5EE",
          "paper-secondary": "#EEE8DB",
          ivory: "#F8F5EE",
          oxblood: "#841F2B",
          "oxblood-muted": "#A52B3A",
          border: "#B5A58E",
          sand: "#EEE8DB",
          stone: "#4D4944",
          slate: "#394247",
          ruby: "#841F2B",
          muted: "#4D4944",
        },
      },
      fontFamily: {
        serif: ["'Fraunces'", "'Newsreader'", "'Georgia'", "'Cambria'", "serif"],
        sans: ["'IBM Plex Sans'", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'IBM Plex Mono'", "'Space Mono'", "Menlo", "monospace"],
      },
      borderRadius: {
        xs: "2px",
        sm: "4px",
        md: "6px",
        lg: "8px",
        xl: "12px",
        "2xl": "16px",
      },
    },
  },
  plugins: [],
};
export default config;
