/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      gray: {
        DEFAULT: "#333333",
        50: "#CCCCCC",
        100: "#C2C2C2",
        200: "#ADADAD",
        300: "#999999",
        400: "#858585",
        500: "#707070",
        600: "#5C5C5C",
        700: "#474747",
        800: "#333333",
        900: "#171717",
      },
      white: {
        DEFAULT: "#FFFFFF",
        50: "#FFFFFF",
        100: "#F1F1F1",
        200: "#D5D5D5",
        300: "#B9B9B9",
        400: "#9D9D9D",
        500: "#818181",
        600: "#656565",
        700: "#494949",
        800: "#2D2D2D",
        900: "#111111",
      },
      blue: {
        DEFAULT: "#04348C",
        50: "#4E8AFA",
        100: "#3A7DF9",
        200: "#1263F8",
        300: "#0651DB",
        400: "#0543B4",
        500: "#04348C",
        600: "#022055",
        700: "#010B1F",
        800: "#000000",
        900: "#000000",
      },
    },
    extend: {
      boxShadow: {
        custom: "0px 0px 20px rgba(0, 0, 0, 0.07)",
        left: "-50px 0px 0px 0px #04348c",
      },
      borderRadius: {
        custom: "120px 120px",
      },
    },
  },
  plugins: [],
};
