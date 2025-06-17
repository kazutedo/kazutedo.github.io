/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["index.html", "*.html"],
  darkMode: "class",
  theme: {
    container: {
      center: true,
      padding: "16px",
    },
    extend: {
      colors: {
        primary: "#10b981",
        secondary: "#64748b",
        dark: "#020617",
      },
      screens: {
        "2xl": "1320px",
      },
      typography: {
        DEFAULT: {
          css: {
            color: "#020617",
            a: {
              color: "#10b981",
            },
          },
        },
        invert: {
          css: {
            color: "#fff",
            a: {
              color: "#10b981",
            },
          },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};
