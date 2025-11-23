/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'urbacy': {
          'basic': 'rgb(76, 175, 80)',
          'erweitert': 'rgb(30, 136, 229)',
          'ki': 'rgb(126, 87, 194)',
          'managed': 'rgb(0, 137, 123)',
          'premium': 'rgb(212, 175, 55)',
          'dark': 'rgb(33, 33, 33)',
          'light': 'rgb(245, 245, 245)'
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif']
      }
    },
  },
  plugins: [],
}