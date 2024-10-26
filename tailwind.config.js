/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#234436', // Verde
        secondary: '#c8ae92', // Crema
      },
      screens: {
        '3xl': '3840px',
        '2xl': '2440px',
        'fh' : '1920px',
        'xl': '1440px',
        'lg': '1024px',
        'md': '768px',
        'sm': '640px',
      },
      fontFamily: {
        involve: ['Involve-Regular', 'sans-serif'],
      },
      keyframes: {
        fadeInTop: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInBottom: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        fadeInRight: {
          '0%': { opacity: '0', transform: 'translateX(20px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        spin: {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        moveX: {
          from: { left: '0' },
          to: { left: '100%' },
        },
        moveY: {
          from: { top: '0' },
          to: { top: '100%' },
        },
      },
      animation: {
        fadeInTop: 'fadeInTop 1.5s ease-out',
        fadeInBottom: 'fadeInBottom 1.5s ease-out',
        fadeInLeft: 'fadeInLeft 1.5s ease-out',
        fadeInRight: 'fadeInRight 1.5s ease-out',
      },
    },
  },
  plugins: [],
}