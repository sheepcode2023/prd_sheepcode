const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/js/main.js",
  output: {
    path: path.resolve(__dirname, "dist/dev/assets/js/"),
    filename: "bundle.js",
  },
};
