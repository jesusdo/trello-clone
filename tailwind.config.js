/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');  
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        primary: colors.blue,
        secondary: colors.gray,
        success: colors.green,
        danger: colors.red,
        warning: colors.yellow
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}

