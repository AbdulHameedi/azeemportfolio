/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    letterSpacing:{
      tightest: '-.075em',
      tighter: '-.05em'
    }
  },
  plugins: [],
}