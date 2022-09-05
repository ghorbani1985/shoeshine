module.exports = {
  content: ['./public/**/*.{html,js}', './src/js/*.js'],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1rem',
    },
    extend: {
      fontFamily: {
        sans: ['Vazir_FD', 'Vazir'],
      },
      padding: {
        '1/3': '33.33333%',
        '2/3': '66.666667%',
      },
      keyframes: {
        moveBackground: {
          '0%': { 'background-position': 'bottom' },
          '100%': { 'background-position': 'top' },
        },
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms')({
      strategy: 'base', // only generate global styles
      strategy: 'class', // only generate classes
    }),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
