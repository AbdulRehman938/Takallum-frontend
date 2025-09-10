/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#f2f9f4",
          100: "#e6f2e9",
          200: "#cce5d3",
          300: "#b3d8bd",
          400: "#99cca7",
          500: "#80bf91",
          600: "#66b27b",
          700: "#4da565",
          800: "#33884f",
          900: "#1a6b39",
        },
        secondary: {
          50: "#ebf3f2",
          100: "#d6e6e4",
          200: "#adcfc8",
          300: "#85b9ad",
          400: "#5ca292",
          500: "#43897a",
          600: "#35605A",
          700: "#2c4d48",
          800: "#233b37",
          900: "#192926",
        },
        gray: "#727272",
        primaryDefault: "#BCDBCC",
        secondaryDefault: "#35605A",
      },
    },
  },
  plugins: [],
};
