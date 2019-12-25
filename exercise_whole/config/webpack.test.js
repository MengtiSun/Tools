const StylelintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new StylelintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue', '**/*.scss']
    }),
  ],
  devtool: "source-map"
}