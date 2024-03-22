/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        primary: '#001E17',
      },
      fontFamily:{
        nunito: ['Nunito Sans', 'sans-serif'],
      },

    },
  },
  plugins: [],
}