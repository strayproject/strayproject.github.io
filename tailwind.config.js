module.exports = {
  content: [
    './**/*.html'
  ],
  theme: {
    extend: {
      fontFamily: {
        'boogaloo': ['"Boogaloo"', 'regular']
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
]
}
