/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      container:{
        center:true
      },
      boxShadow: {
        '3xl': '0 35px 60px -15px rgba(203,195,223,255)',
      },
      height: {
        '128': '32rem',
      }
      ,    width: {
        '140': '35rem',
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}





