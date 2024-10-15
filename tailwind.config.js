/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#285546', // Verde
        secondary: '#c8ae92', // Crema
      },
      screens: {
        '2xl': '2440px',
        'xl': '1920px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
      fontFamily: {
        involve: ['Involve-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
}