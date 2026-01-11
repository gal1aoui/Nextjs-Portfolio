import {heroui} from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-sans)"],
        mono: ["var(--font-mono)"],
      },
      color: {
        light: "#F0F0F0",
        dark: "#0D0D0D"
      },
      keyframes: {
        blob: {
          '0%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
          '33%': {
            borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%',
          },
          '66%': {
            borderRadius: '40% 60% 70% 30% / 40% 60% 30% 50%',
          },
          '100%': {
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
          },
        },
      },
      animation: {
        blob: 'blob 8s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

module.exports = config;