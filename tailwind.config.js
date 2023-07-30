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
      'full': '100%',
      'large': '40px',
      'md': '12px'
    },
    extend: {
      width:{
        '700':'700px'
      },
      maxWidth: {
        '1/2': '210px',
      },
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
        'lighterAsh': '#67777E',
        'borderLine': '#dbdbdb',
        'ash-01': '#f5f5f5',
        'ash-2': '#d8d8d8',
        'statusGreen': '#31C491',
        'statusPending':'#E0A80E',
        'caramelAsh': '#F2F3F4',
        'fieldAsh':'#F2F6F7'
      },

    },
  },
  plugins: [],
}