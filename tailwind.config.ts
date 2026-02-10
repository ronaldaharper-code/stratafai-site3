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
          50: "#eef4ff",
          100: "#d9e6ff",
          200: "#bcd4ff",
          300: "#8eb8ff",
          400: "#5990ff",
          500: "#3366ff",
          600: "#1a45f5",
          700: "#1333e1",
          800: "#162bb6",
          900: "#18298f",
          950: "#141b57",
        },
        surface: {
          DEFAULT: "#0a0a0f",
          50: "#f6f6f8",
          100: "#eeeef1",
          200: "#d8d9e0",
          300: "#b6b7c4",
          400: "#8e90a3",
          500: "#707288",
          600: "#5a5b70",
          700: "#4a4a5c",
          800: "#40404e",
          900: "#181820",
          950: "#0a0a0f",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
