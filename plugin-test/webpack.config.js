const path = require("path");

module.exports = {
  mode: "production",
  entry: {
    kintone: "./src/js/kintone.js",
    kintonecss: "./src/css/kintone.css",
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  devtool: "inline-source-map",
  plugins: [],
  output: {
    filename: "[name].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
};
