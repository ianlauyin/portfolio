/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/App.js",
    "./src/Component/Title.js",
    "./src/Component/TitleNavi.js",
    "./src/Component/AboutMe.js",
    "./src/Component/Contact.js",
    "./src/Component/Project.js",
    "./src/Component/ProjectMenu.js",
    "./src/Component/Boardousell/BoardousellSummary.js",
    "./src/Component/Boardousell/BoardousellMainPage.js",
    "./src/Component/Boardousell/Features.js",
    "./src/Component/Boardousell/Frontend.js",
    "./src/Component/Boardousell/Backend.js",
    "./src/Component/Lingo/LingoSummary.js",
    "./src/Component/Lingo/LingoMainPage.js",
    "./src/Component/Bullet/BulletSummary.js",
    "./src/Component/Bullet/BulletMainPage.js",
  ],
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
