import { TbKeyframes } from 'react-icons/tb'

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        bounce: 'bounce 2.5s ease-in-out infinite',
      },
      keyframes:{
        bounce: {
          // 0%,50%:"translateY(-5%)",
          "0%, 100%" : {transform : "translateY(-5%)"},
          "50%" : {transform : "translateY(5%)"}
        }
      }
    },
  },
  plugins: [],
}

