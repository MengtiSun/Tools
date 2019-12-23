const path = require('path');

module.exports= {
  // mode can be omitted, but will get warning
  mode: 'development',
  // SPA
  entry: './src/js/index.js',
  // output has to be an object
  output: {
    path: path.resolve(__dirname, 'dest'),
    filename: 'bundle.min.js'
  },
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: ['style-loader', 
              'css-loader', 
              // 'postcss-loader'
              {
                loader: 'postcss-loader',
                options: {
                  plugins: [
                    require('autoprefixer')
                  ]
                }
              }
            ]
      }
    ]
  },
  // MPA
  // entry: {
  //   index: './src/js/index.js',
  //   news: './src/js/news.js',
  // },
  // output: {
  //   path: path.resolve(__dirname, 'dest'),
  //   filename: '[name].bundle.min.js'
  // }
};