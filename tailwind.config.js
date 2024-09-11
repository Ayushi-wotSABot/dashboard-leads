/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#002D57",
        item: "#01172C",
        card: "#dee7ea",
        table: "#cadce1",
      }
    },
  },
  plugins: [],
}

