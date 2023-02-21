/** @type {import('tailwindcss').Config} */

// import withMT from "@material-tailwind/react/utils/withMT";
const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = withMT({
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "path-to-your-node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#232F3E",
        secondary: "#131921",
        ternary: "#3A4256",
        base: "#FFFFFF",
        danger: "#FF385C",
      },
      boxShadow: {
        inputShadow: "0 0 6px 0 rgb(231,118, 0)",
        selectShadow: "0 0 6px 0 rgb(0,113, 133)",
      },
    },
  },
  plugins: [],
});
