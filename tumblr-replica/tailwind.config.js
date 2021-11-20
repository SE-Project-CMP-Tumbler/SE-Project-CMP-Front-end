module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'tumblr-blue': '#061833',
        'search-white': '#445266',
        'post-blue': '#52B5F9',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
