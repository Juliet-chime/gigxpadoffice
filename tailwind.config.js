/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'circular':['Circular Std']
    },
    extend: {
      colors: {
        'deposit': '#A7EFBD',
        'withdraw':'#CCECF8',
        'swaps':'#FF9A9A',
        'transfer':'#FFE579',
        'filterColor':'#808080',
        'search':'#3E3E3E',
        'lightash':'#EEEEEE',
        'tableInput':'#F7F7F7'
      },

    },
  },
  plugins: [],
}