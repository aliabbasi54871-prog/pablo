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
        background: "#080808",
        surface: "#111111",
        netflix: "#E50914",
        secondary: "#D4D4D4",
        muted: "#8A8A8A",
        border: "rgba(255,255,255,0.1)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        quote: ["var(--font-quote)", "Georgia", "serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: {
        prose: "42rem",
        content: "72rem",
      },
      letterSpacing: {
        editorial: "0.08em",
      },
    },
  },
  plugins: [],
};

export default config;
