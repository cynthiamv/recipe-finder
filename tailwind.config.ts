import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/app/**/*.{ts,tsx}",
    "./src/components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        body: "var(--bg-body)",
        header: "var(--bg-header)",
        text: "var(--text)",
        headerBorder: "var(--border-header)",
        brandTitle: "var(--brand-title)",
        buttonHoverBg: "var(--button-hover-bg)",
        shadowCard: "var(--shadow-card)",
        card: "var(--bg-card)",
        shadowHover: "var(--shadow-hover)",
      },
    },
  },
  plugins: [],
};

export default config;
