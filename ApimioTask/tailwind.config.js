/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:
      {
        background: "#F9FAFB"
      }
    },
    screens: {
      'xsm': { 'min': '0px', 'max': '577px' },

      'sm': { 'min': '577px', 'max': '768px' },

      'md': { 'min': '768px', 'max': '1024px' },

      'lg': { 'min': '1024px', 'max': '1280px' },

      'xl': { 'min': '1280px', 'max': '1536px' },

      '2xl': { 'min': '1536px', 'max': '2000px' },
    },

  },
  plugins: [],
}