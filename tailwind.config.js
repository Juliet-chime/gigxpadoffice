/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      'circular': ['Circular Std'],
      'cabinetgrotesk': ['CabinetGrotesk'],
      'rubik': ['Rubik']
    },
    borderRadius: {
      'large': '40px',
    },
    extend: {
      colors: {
        'deposit': '#A7EFBD',
        'withdraw': '#CCECF8',
        'swaps': '#FF9A9A',
        'transfer': '#FFE579',
        'filterColor': '#808080',
        'search': '#3E3E3E',
        'lightash': '#EEEEEE',
        'tableInput': '#F7F7F7',
        'mainColor': '#1D3C48',
        'ash': '#67777E',
        'complete': '#27B785',
        'failed': '#FF1414',
        'pending': '#EA7D1F',
        'dateLine': '#CCCCCC',
        'lighterAsh': '#67777E'
      },

    },
  },
  plugins: [],
}