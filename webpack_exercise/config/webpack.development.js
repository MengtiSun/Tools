const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'development',
  output: {
    filename: 'bundle.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Cannot use '../index.html'. Because it will eventually used by
      // webpack.config.js. So the absolute path is wrong
      template: path.resolve(__dirname, '../index.html')
    })
  ]
}