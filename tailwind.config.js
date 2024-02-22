/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Component/Title.js",
    "./src/Component/TitleNavi.js",
    "./src/Component/AboutMe.js",
    "./src/Component/Contact.js",
    "./src/Component/Project.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
