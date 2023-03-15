/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*.{html,js}"],
  theme: {
    fontFamily: {
      sans: ["Rubik", "sans-serif"],
    },
    colors: {
      transparent: "transparent",
      white: "#fff",
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
    extend: {},
  },
  plugins: [],
};
