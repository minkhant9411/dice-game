/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        'Press-Start': ["'Press Start 2P'", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
