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
    extend: {
      margin: ['hover'],
      margin: ['responsive', 'hover'],
    },
  },
  plugins: [
        require('flowbite/plugin'),
    ],
}
