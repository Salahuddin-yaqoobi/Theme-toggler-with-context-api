/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  //basically this is used when you are changing in the html code so it is must to change the config
  darkMode : "class",
  theme: {
    extend: {},
  },
  plugins: [],
}

