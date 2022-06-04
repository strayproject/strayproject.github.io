module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.html',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.{md,html}',
    './assets/js/flowbite.js',
  ],
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
        require('flowbite/plugin'),
    ],
}
