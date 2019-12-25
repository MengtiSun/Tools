const path = require("path");
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new StylelintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue', '**/*.scss']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html")
    })
  ],
  devtool: "source-map"
}