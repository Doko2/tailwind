/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        'text': '#7A9D8C',
        'gradient1': '#ABA8BF',
        'gradient2': '#F5E9F3'
      },
      fontFamily: {
        display: 'Roboto'
      },
      fontSize: {
        xs: '12px'
      },
      screens: {
        xs: '390px'
      },
      width: {
        pic: '500px'
      }
    },
  },
  plugins: [],
}