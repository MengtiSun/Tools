const path = require('path');

const StyleLintPlugin = require('stylelint-webpack-plugin');

module.exports = {
  mode: 'development',
  entry: './src/js/index',
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.js'
  },
  plugins: [
    new StyleLintPlugin({
      files: ['**/*.css', '**/*.less', '**/*.html', '**/*.htm', '**/*.vue', '**/*.scss']
    }),
  ]
}