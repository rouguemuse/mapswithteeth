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
          dark: "#111113",
          charcoal: "#18181b",
          slate: "#27272a",
          muted: "#3f3f46",
          border: "#3f3f46",
          parchment: "#f6f4ee",
          ivory: "#fbfaf7",
          cream: "#f1ede2",
          oxblood: "#7a1726",
          crimson: "#961c2e",
          ruby: "#b91c1c",
          amber: "#d97706",
          gold: "#b45309",
          brass: "#ca8a04",
          teal: "#0f766e",
          pine: "#134e4a",
          surface: "#1f1f23",
          card: "#19191d",
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
