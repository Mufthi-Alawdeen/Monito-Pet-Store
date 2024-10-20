/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      fontFamily: {
        gilroy: ['SVN-Gilroy-Bold'], // Define Gilroy as a font family
        gilroymedium: ['SVN-Gilroy-Medium'],
        GilroySVN:['SVN-Gilroy'],
      },
    },
  },
  plugins: [],
};
