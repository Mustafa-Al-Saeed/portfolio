/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode:"class",
  theme: {
    extend: {
      boxShadow: {
        'ul-shadow': '1px 1px 40px #2323242a',
        'icon-shadow': '1px 1px 8px 1px #2323242a',
      },
      colors: {
        'secondary': 'rgb(24 24 27)',
        "main-border": "rgba(63, 63, 70, 0.4 )",
      },
    },
    fontFamily : {
      roboto: ['Roboto', "sans-serif"],
    }
  },
  plugins: [],
}
