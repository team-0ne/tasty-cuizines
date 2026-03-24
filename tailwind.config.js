/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./build/*.html"],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: "#FDF6EC",
          dark:    "#F5E9D4",
          mid:     "#EDD9B8",
        },
        brown: {
          DEFAULT: "#3C1F0A",
          mid:     "#6B3A1F",
          light:   "#9B6B47",
        },
        gold: {
          DEFAULT: "#C49A3C",
          light:   "#E2C27D",
        },
      },
    },
  },
  plugins: [],
};

