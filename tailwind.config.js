/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.tsx"],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        'main-gray' : "rgb(57, 52, 52)",
        'secondary-gray':"rgb(35, 30, 30)",
        'main-red'  : "rgb(185 28 28)",
      },
      fontFamily:{
        'titles' : "'Geologica', sans-serif",
        'mono-text' : "'Fragment Mono', monospace",
      }
    },
  },
  plugins: [],
}

