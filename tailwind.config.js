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
      '14': '14px',
      'md': '12px',
      'lg': '15px',
      '24': '24px'
    },
    extend: {
      width: {
        '700': '700px',
        'half': '50%'
      },
      maxWidth: {
        '1/2': '210px',
        '1/3': '230px',
        '30': '250px'
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
        'secondaryColor':'#E25A5A',
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
        'statusPending': '#E0A80E',
        'caramelAsh': '#F2F3F4',
        'fieldAsh': '#F2F6F7',
        'ash-3': '#e4e4e4',
        'black-200': '#04151D',
        'green-50': '#E7F1F2',
        'borderColor': '#EFEFEF'
      },

    },
  },
  plugins: [],
}