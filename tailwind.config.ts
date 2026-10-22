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
        surface: {
          DEFAULT: "#ffffff",
          muted: "#f9fafb",
          hover: "#f3f4f6",
        },
        text: {
          primary: "#121417",
          body: "#1f2937",
          secondary: "#374151",
          muted: "#6b7280",
        },
        border: {
          DEFAULT: "#e5e7eb",
          strong: "#c9cdd3",
        },
        accent: {
          DEFAULT: "#0f766e",
          dark: "#115e59",
          soft: "#f0fdfa",
        },
      },
      fontFamily: {
        sans: [
          "Pretendard",
          "-apple-system",
          "BlinkMacSystemFont",
          "system-ui",
          "Roboto",
          "Helvetica Neue",
          "Arial",
          "sans-serif",
        ],
      },
      maxWidth: {
        page: "1160px",
      },
    },
  },
  plugins: [],
};

export default config;
