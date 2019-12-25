const StylelintPlugin = require('stylelint-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
  mode: "development",
  output: {
    filename: "bundle.js"
  },
  plugins: [
    new StylelintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue', '**/*.scss']
    }),
    new VueLoaderPlugin()
  ],
  devtool: "source-map"
}