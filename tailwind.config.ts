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
        background: "#050505",
        netflix: "#E50914",
        secondary: "#B7B7B7",
        success: "#29C36A",
        glass: "rgba(255, 255, 255, 0.04)",
        "glass-border": "rgba(255, 255, 255, 0.08)",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        quote: ["var(--font-quote)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};

export default config;
