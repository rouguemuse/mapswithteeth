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
          charcoal: "#1C1B1A", // Primary dark, structural text, headers
          ivory: "#F3EFE7",    // Main background (60%)
          paper: "#FAF8F5",    // Elevated clean card surface
          sand: "#E5DFC5",     // Subtle border line & grid divider
          oxblood: "#7A2026",  // Signature accent (5% - barriers, broken nodes, route thread)
          ruby: "#7A2026",     // Direct alias to oxblood
          stone: "#A8A29A",    // Secondary info, marginalia (10%)
          slate: "#394247",    // Data / system accent
          dark: "#1C1B1A",
          muted: "#A8A29A",
          border: "#E0D9CC",
        },
      },
      fontFamily: {
        sans: ["system-ui", "-apple-system", "BlinkMacSystemFont", "'Segoe UI'", "Roboto", "sans-serif"],
        serif: ["'Georgia'", "'Cambria'", "'Times New Roman'", "serif"],
        mono: ["'JetBrains Mono'", "'Fira Code'", "Menlo", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
