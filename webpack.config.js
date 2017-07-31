const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/browser.js",
  output: {
    filename: "build/application.js"
  },
  devtool: "sourcemap",
  plugins: [
    new HtmlWebpackPlugin({
      template: "index.html",
      inject: false
    })
  ]
};
