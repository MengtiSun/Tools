const path = require('path');

module.exports= {
  // mode can be omitted, but will get warning
  mode: 'development',
  // SPA
  // entry: './src/index.js',
  // output has to be an object
  // output: {
  //   path: path.resolve(__dirname, 'dest'),
  //   filename: 'bundle.min.js'
  // }

  // MPA
  entry: {
    index: './src/index.js',
    news: './src/news.js',
  },
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: '[name].bundle.min.js'
  }
};