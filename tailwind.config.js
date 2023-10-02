/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    ham: "class",

    extend: {
      screens:{
        'xs':'300px'
      }
    },
  },
  plugins: [],
}

