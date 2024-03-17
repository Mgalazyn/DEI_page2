/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./src/app/*.{html,ts}",
    "./src/app/components/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: {
        customYellow: '#FFCD00',
      },
      fontFamily: {
        'plus-jakarta-sans': ['Plus Jakarta Sans', 'sans-serif']
      }
    },
  },
  plugins: [],
}