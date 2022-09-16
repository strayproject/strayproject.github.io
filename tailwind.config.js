module.exports = {
  content: [
    './_drafts/**/*.html',
    './_includes/**/*.{html,js}',
    './_layouts/**/*.html',
    './_posts/*.md',
    './*.{md,html}',
    './assets/js/*.js',
    './assets/css/amplitude.css',
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
        require('@tailwindcss/typography'),
    ],
}
