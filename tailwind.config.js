/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "rgb(var(--ink) / <alpha-value>)",
        paper: "rgb(var(--paper) / <alpha-value>)",
        moss: "#41644a",
        copper: "#b65f3a",
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
      boxShadow: {
        soft: "0 24px 70px rgba(16, 20, 24, 0.12)"
      }
    }
  },
  plugins: []
};
