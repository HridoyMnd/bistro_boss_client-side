/** @type {import('tailwindcss').Config} */
import daisyui from 'daisyui'
// import back_img from './src/assets/featured.jpg'

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage:{
        Feature_back:"url('./src/assets/featured.jpg')",
      }
    },
  },
  plugins: [daisyui],
}