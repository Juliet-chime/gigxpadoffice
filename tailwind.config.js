/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'deposit': '#A7EFBD',
        'withdraw':'#CCECF8',
        'swaps':'#FF9A9A',
        'transfer':'#FFE579'
      },

    },
  },
  plugins: [],
}

