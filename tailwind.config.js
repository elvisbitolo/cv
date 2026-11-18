/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        moss: "rgb(var(--moss) / <alpha-value>)",
        copper: "rgb(var(--copper) / <alpha-value>)",
        cloud: "rgb(var(--cloud) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)"
      },
      opacity: {
        8: "0.08",
        12: "0.12",
        15: "0.15",
        45: "0.45",
        52: "0.52",
        55: "0.55",
        62: "0.62",
        68: "0.68",
        72: "0.72",
        88: "0.88"
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translate3d(0, 18px, 0)" },
          to: { opacity: "1", transform: "translate3d(0, 0, 0)" }
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" }
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(0.96) translate3d(0, 10px, 0)" },
          to: { opacity: "1", transform: "scale(1) translate3d(0, 0, 0)" }
        },
        float: {
          "0%, 100%": { transform: "translate3d(0, 0, 0)" },
          "50%": { transform: "translate3d(0, -14px, 0)" }
        },
        "ring-breathe": {
          "0%, 100%": { opacity: "0.55", transform: "scale(1)" },
          "50%": { opacity: "0.9", transform: "scale(1.08)" }
        },
        "pulse-soft": {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.72", transform: "scale(0.9)" }
        }
      },
      animation: {
        "fade-up": "fade-up 700ms cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 320ms ease-out both",
        "scale-in": "scale-in 280ms cubic-bezier(0.22, 1, 0.36, 1) both",
        float: "float 9s ease-in-out infinite",
        "ring-breathe": "ring-breathe 7s ease-in-out infinite",
        "pulse-soft": "pulse-soft 2.2s ease-in-out infinite"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 20, 24, 0.12)"
      }
    }
  },
  plugins: []
};
