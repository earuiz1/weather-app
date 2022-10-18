/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontSize: {
        xs2: "0.625rem",
      },
      colors: {
        glass: "#111928",
      },
      screens: {
        xs: "320px",
      },
      borderWidth: {
        1: "1px",
      },
    },
  },
  plugins: [],
};
