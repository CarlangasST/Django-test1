/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "blue-button":'rgb(53, 106, 167)'
      }
    },
  },
  plugins: [],
}

