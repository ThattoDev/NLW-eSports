/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['inter', 'sans-serif']
    },
    extend: {
      
      backgroundImage: {
        galaxy: "URL('/background-galaxy.png')",
        'nlw-gradient': 'linear-gradient(89.86deg, #9572FC 23.88%, #43E7AD 68.94%, #E1D55D 64.57%)',
        'game-gradient': 'linear-gradient(180deg, rgba(0, 0, 0, 0) 8%, rgba(0, 0, 0, 0.9) 67.08%)',
      },
    },
  },
  plugins: [],
}
