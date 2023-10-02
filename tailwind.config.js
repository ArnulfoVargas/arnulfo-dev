/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    ham: "class",

    extend: {
      screens:{
        'xs':'300px'
      },
      colors:{
        "light-gray" : "#F7F7F7",
        "light-red" : "#ea3636"
      }
    },
  },
  plugins: [],
}

