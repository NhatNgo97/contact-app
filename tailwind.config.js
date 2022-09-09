/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      mdp: "850px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
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
