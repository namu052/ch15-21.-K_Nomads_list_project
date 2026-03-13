import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#1E4E7A",
        secondary: "#E8732B",
        "bg-light": "#F8F9FA",
        "text-main": "#333333",
        "text-sub": "#888888",
        "border-line": "#CCCCCC",
        "footer-bg": "#2C3E50",
      },
      fontFamily: {
        sans: ["var(--font-noto-sans-kr)"],
      },
    },
  },
  plugins: [],
};

export default config;
