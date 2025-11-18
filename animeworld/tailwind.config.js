/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors : {
        background : "#0A0A0E",
        text : "#fff",
        primary : "#00E0FF",
        secondary : "#FF3D8F"
      },

      fontFamily : {
        itim : ["itim", "sans-serif"],
        inter : ["inter", "sans-serif"],
        roboto : ["roboto", "sans-serif"]
      },

      boxShadow : {
        customShadow : "0px 0px 4px 2px #00e0ff",
        sideBarShadow : "0px 2px 4px 0px #00e0ff"
      }
    },
  },
  plugins: [],
}

