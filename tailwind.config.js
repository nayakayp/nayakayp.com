module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          400: "#0C2C38",
          300: "#425A63",
          200: "#78888E",
          100: "#AFB7BA",
        },
        turq: {
          400: "#207697",
          300: "#5191AA",
          200: "#82ADBD",
          100: "#B4C9D2",
        },
        light: {
          400: "#BFE7F4",
          300: "#C9E6F0",
          200: "#D2E6EC",
          100: "#DCE6E9",
        },
      },
    },
    fontFamily: {
      sans: ["Open Sans", "Arial", "sans-serif"],
      // display: ["Oswald"],
      // body: ['"Open Sans"'],
    },
  },
  plugins: [],
};
