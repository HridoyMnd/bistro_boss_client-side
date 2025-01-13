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
        Menu_back:"url('./src/assets/banner.jpg')",
        Shop_back:"url('./src/assets/banner2.jpg')",
        Contact_back:"url('./src/assets/banner3.jpg')",
        Salad_back:"url('./src/assets/salad-bg.jpg')",
        Soup_back:"url('./src/assets/soup-bg.jpg')",
        Dessert_back:"url('./src/assets/dessert-bg.jpeg')",
        Pizza_back:"url('./src/assets/pizza-bg.jpg')",
      }
    },
  },
  plugins: [daisyui],
}