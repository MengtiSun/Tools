const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  mode: 'production',
  output: {
    path: path.resolve(__dirname, '../dest'),
    filename: 'bundle.min.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      // Cannot use '../index.html'. Because it will eventually used by
      // webpack.config.js. So the absolute path is wrong
      template: path.resolve(__dirname, '../index.html')
    }) 
  ]
}