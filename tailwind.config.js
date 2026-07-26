import { heroui } from "@heroui/theme"

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
        display: ["var(--font-display)"],
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
          }
        },
        // Transform-only drifts for the modern background glow (compositor
        // friendly: no per-frame paint).
        aurora1: {
          '0%, 100%': { transform: 'translate3d(-8%, -4%, 0) scale(1)' },
          '50%': { transform: 'translate3d(12%, 10%, 0) scale(1.15)' },
        },
        aurora2: {
          '0%, 100%': { transform: 'translate3d(6%, 8%, 0) scale(1.1)' },
          '50%': { transform: 'translate3d(-10%, -6%, 0) scale(0.95)' },
        },
        aurora3: {
          '0%, 100%': { transform: 'translate3d(-4%, 6%, 0) scale(0.95)' },
          '50%': { transform: 'translate3d(8%, -8%, 0) scale(1.1)' },
        },
      },
      animation: {
        blob: 'blob 8s ease-in-out infinite',
        aurora1: 'aurora1 28s ease-in-out infinite',
        aurora2: 'aurora2 34s ease-in-out infinite',
        aurora3: 'aurora3 40s ease-in-out infinite',
      },
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}

export default config;