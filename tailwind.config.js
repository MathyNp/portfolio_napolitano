/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Quantico': ["Quantico", "sans-serif"],
        'Rubik' : ["Rubik Mono One", "monospace"],
        'Kanit' : ["Kanit", "sans-serif"]

      }
    },
  },
  plugins: [
    
  ],
}