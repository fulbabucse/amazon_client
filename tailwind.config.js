/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#232F3E",
        secondary: "#131921",
        ternary: "#3A4256",
        base: "#FFFFFF",
        danger: "#FF385C",
      },
    },
  },
  plugins: [],
};
