/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./public/**/*.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'purple': '#a78bfa',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
        },
    extend: {
      fontFamily: {
        'poppins': ["'Poppins', sans-serif"]
      }
    },
  },
  plugins: [],
}
