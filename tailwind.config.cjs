module.exports = {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}",
    "./legacy/pages/**/*.html",
  ],
  theme: {
    extend: {
      fontFamily: {
        boogaloo: ['"Boogaloo"', "regular"],
      },
    },
  },
  plugins: [
    require("flowbite/plugin"),
    require("@tailwindcss/typography"),
  ],
};
