/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'secondary': 'rgb(24 24 27)',
        "border-all": "rgba(63, 63, 70, 0.4 )",
      },
    },
    fontFamily : {
      roboto: ['Roboto', "sans-serif"],
    }
  },
  plugins: [],
}
