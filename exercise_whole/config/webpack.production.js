const path = require("path");
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: "production",
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: "bundle.min.js"
  },
  plugins: [
    new StylelintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue', '**/*.scss']
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "../index.html")
    })
  ],
}