const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}", flowbite.content()],
  theme: {
    fontFamily: {
      inter: ["Inter", "serif"],
    },
    extend: {
      colors: {
        gray: {
          50: "#F9FAFB",
          100: "#E2E2E3",
          200: "#F6F6F6",
          300: "#D1D5DB",
          400: "#E5E5E5",
          500: "#6B7280",
          600: "#676767",
          700: "#374151",
          750: "#2f2f2f",
          800: "#1F2A37",
          900: "#101828",
          950: "#ef4444",
        },
        green: {
          500: "#0E9F6E"
        },
        red: {
          500: "#F05252",
          600: "#E02424"
        },
        orange: {
          100: "#FEECDC",
          600: "#D03801"
        },
        pink: {
          800: "#99154B"
        },
        blue: {
          600: "#1C64F2"
        }
      },

    },
  },
  plugins: [flowbite.plugin()],
};