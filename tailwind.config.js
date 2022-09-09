/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        search: "url(https://static.thenounproject.com/png/101791-200.png)",
      },
      gridTemplateRows: {
        layout: "50px minmax(0px, 1fr)",
      },
    },
  },
  plugins: [],
};
