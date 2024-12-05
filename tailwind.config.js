/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
const withMT = require('@material-tailwind/react/utils/withMT');

module.exports = withMT({
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 25"', 'sans-serif'],
      },
      colors: {
        primary: '#42ADE2',
        secondary: '#ED4C5C',
      },
    },
  },
  plugins: [require('@tailwindcss/line-clamp')],
});
