/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {      
      fontFamily: {
       'sans': ['Inter', ...defaultTheme.fontFamily.sans],
      },

      colors: {
        background:	'#EAE7DC',
        foreground:	'#959dcb',
        comment:	'#E98074',
        accent:	'#E85A4F',
        redish:	'#ff5370',
        orangish:	'#f78c6c',
        yellowish:	'#ffcb6b',
        maroonish:	'#662a26',
      },
    },
  },
  plugins: [],
}
