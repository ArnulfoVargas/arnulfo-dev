/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  
  theme: {
    extend: {
      screens:{
        'xs':'300px'
      }
    },
  },
  plugins: [],
}

