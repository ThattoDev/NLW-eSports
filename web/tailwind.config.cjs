/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    extend: {
      colors: {
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.88%, #43E7AD 33.94%, #E1D55D 44.57%)',
      },
      backgroundImage: {
        galaxy: "URL('/background-galaxy.png')"
      },
    },
  },
  plugins: [],
}
