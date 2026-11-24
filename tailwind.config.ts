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
        // Canonical Monograph & Brand Token Layer (1:1 with src/styles/tokens.css)
        mwt: {
          ink: "#0E0D0C",                // var(--mwt-ink)
          black: "#11100F",              // var(--mwt-archive-black)
          charcoal: "#1C1A17",           // var(--mwt-charcoal)
          "charcoal-elevated": "#24211E",// var(--mwt-charcoal-elevated)
          paper: "#F8F5EE",              // var(--mwt-paper)
          "paper-warm": "#F5EFE2",       // var(--mwt-paper-warm)
          "paper-display": "#F2ECE1",    // var(--mwt-paper-display)
          "paper-muted": "#E8DEC8",      // var(--mwt-paper-muted)
          parchment: "#EEE8DB",          // var(--mwt-parchment)
          ivory: "#F8F5EE",              // var(--mwt-paper)
          stone: "#B5A58E",              // var(--mwt-aged-stone)
          graphite: "#4D4944",           // var(--mwt-graphite)
          "institutional-red": "#841F2B",// var(--mwt-institutional-red)
          "crimson-seal": "#971F26",     // var(--mwt-crimson-seal)
          "signal-red": "#C82832",       // var(--mwt-signal-red)
          "signal-bright": "#D83B44",    // var(--mwt-signal-red-bright)
          oxblood: "#841F2B",            // var(--mwt-institutional-red)
          "oxblood-dark": "#661620",     // var(--mwt-institutional-red-deep)
          "oxblood-light": "#D83B44",    // var(--mwt-signal-red-bright)
          "text-secondary": "#2C2825",   // var(--mwt-text-secondary)
          "border-paper": "#C4B69E",     // var(--mwt-border-paper)
          "border-subtle": "#E2DACB",    // var(--mwt-border-subtle)
        },
        // Backward compatibility mappings
        brand: {
          charcoal: "#11100F",
          dark: "#0E0D0C",
          paper: "#F8F5EE",
          "paper-secondary": "#E8DEC8",
          ivory: "#F8F5EE",
          oxblood: "#841F2B",
          "oxblood-muted": "#D83B44",
          border: "#B5A58E",
          sand: "#EEE8DB",
          stone: "#4D4944",
          slate: "#394247",
          ruby: "#841F2B",
          muted: "#4D4944",
        },
      },
      fontFamily: {
        display: ["'Playfair Display'", "'Fraunces'", "'Georgia'", "serif"],
        serif: ["'Playfair Display'", "'Fraunces'", "'Newsreader'", "'Georgia'", "serif"],
        editorial: ["'Fraunces'", "'Playfair Display'", "'Georgia'", "serif"],
        sans: ["'IBM Plex Sans'", "'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'IBM Plex Mono'", "'Space Mono'", "Menlo", "monospace"],
      },
      borderRadius: {
        xs: "2px",
        sm: "2px",
        md: "4px",
        lg: "4px",
        xl: "4px",
        "2xl": "6px",
      },
    },
  },
  plugins: [],
};
export default config;
