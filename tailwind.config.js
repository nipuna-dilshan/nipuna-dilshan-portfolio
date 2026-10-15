/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        "background": "#060913",
        "surface": "#060913",
        "surface-container-lowest": "#090e1a",
        "surface-container-low": "#161b28",
        "surface-container": "#1b1f2c",
        "surface-container-high": "#252a37",
        "surface-container-highest": "#303542",
        "primary": "#8ed5ff",
        "primary-container": "#38bdf8",
        "secondary": "#b4c5ff",
        "secondary-container": "#0053db",
        "on-surface": "#dee2f4",
        "on-surface-variant": "#bdc8d1",
        "outline": "#87929a",
        "outline-variant": "#3e484f",
        "inverse-surface": "#dee2f4",
        "inverse-on-surface": "#2b303d",
      },
      fontFamily: {
        heading: ["'Plus Jakarta Sans'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
        label: ["'JetBrains Mono'", "monospace"],
      },
      borderRadius: {
        DEFAULT: "0.125rem",
        lg: "0.25rem",
        xl: "0.5rem",
        full: "9999px",
      },
      animation: {
        "fade-slide-up": "fadeSlideUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards",
        "tech-pulse": "techPulse 2.4s ease-in-out infinite",
      },
      keyframes: {
        fadeSlideUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        techPulse: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.85)" },
        },
      },
    },
  },
  plugins: [],
}
