import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        berry: {
          50: "#fbf0f3",
          100: "#f6dde4",
          200: "#eebbc9",
          300: "#e093ab",
          400: "#c96484",
          500: "#a63d5c",
          600: "#8a2f4b",
          700: "#6e2439",
          800: "#4f1a2c",
          900: "#33101d",
        },
        caramel: {
          DEFAULT: "#d98a2b",
          dark: "#b06d1d",
          light: "#fdf0dc",
        },
        ivory: "#fdf8f1",
        sand: "#f6ecdd",
        gold: "#d9a441",
        amberstar: "#e8a33d",
        ink: "#2b2118",
        muted: "#6b5d52",
      },
      fontFamily: {
        serif: ['"Fraunces"', "Georgia", '"Times New Roman"', "serif"],
        sans: ['"Inter"', "-apple-system", "BlinkMacSystemFont", '"Segoe UI"', "Roboto", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
