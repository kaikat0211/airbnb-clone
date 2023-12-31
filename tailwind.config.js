/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "hoverbg": "#F7F7F7",
        "bordergray" : "#DDDDDD"
      },
      screens: {
        "3xl": "1800px"
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar-hide')
  ],
}