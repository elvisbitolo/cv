/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,jsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ink: "var(--ink)",
        paper: "var(--paper)",
        moss: "#41644a",
        copper: "#b65f3a",
        cloud: "var(--cloud)",
        surface: "var(--surface)"
      },
      boxShadow: {
        soft: "0 24px 70px rgba(16, 20, 24, 0.12)"
      }
    }
  },
  plugins: []
};
