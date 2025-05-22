/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#6366f1", // indigo-500
          dark: "#818cf8",    // indigo-400
        },
      },
      boxShadow: {
        glass: "0 8px 32px 0 rgba(0,0,0,0.15)",
      },
      backdropBlur: {
        xs: "2px",
      },
    },
  },
  plugins: [],
};
