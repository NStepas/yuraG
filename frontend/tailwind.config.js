/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./**/*.tsx'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        darkModeColor: '#0e7490',
        lightModeColor: '#7dd3fc',
      },
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1028px',
        xl: '1440px',
      },
    },
  },
  plugins: [],
};
