/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryGreen: '#4CAF50',
        darkGreen: '#388E3C',
        lightGreen: '#E8F5E9',
        accentOrange: '#FF5722',
        textGray: '#333333',
        borderGray: '#E0E0E0',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming Inter font from Figma; import via CDN or local
      },
    },
  },
  plugins: [],
};