module.exports = {
  purge: [

  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'boogaloo': ['"Boogaloo"', 'regular']
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [
        require('flowbite/plugin')
    ],
}
