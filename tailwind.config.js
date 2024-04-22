/** @type {import('tailwindcss').Config} */
const fs = require("fs");
const path = require("path");
const componentFiles = [];
const getAllJSFile = (currentPath) => {
  const files = fs.readdirSync(currentPath);
  for (const file of files) {
    if (file.slice(-3) === ".js") {
      componentFiles.push(currentPath + "/" + file);
    }
    if (!path.extname(file).length) {
      getAllJSFile(currentPath + "/" + file);
    }
  }
};
getAllJSFile("./src");
module.exports = {
  content: componentFiles,
  theme: {
    extend: {},
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: ["dim"],
  },
};
