/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        ocean: {
          light: '#E0F2FE',
          DEFAULT: '#0EA5E9',
          dark: '#0369A1',
        },
        sand: {
          light: '#FDF6E3',
          DEFAULT: '#EAB308',
        }
      }
    },
  },
  plugins: [],
}
