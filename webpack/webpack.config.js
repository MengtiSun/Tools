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
      }, 
      // {
      //   test: /\.(jpg|png|gif)$/i,
      //   use: {
      //     loader: 'file-loader',
      //     options: {
      //       outputPath: 'imgs/',   // relative to output.path
      //       publicPath: 'dest/imgs/',  // tell css the path
      //     }
      //   }
      // },
      {
        test: /\.(jpg|png|gif)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'imgs/',   // relative to output.path
            publicPath: 'dest/imgs/',  // tell css the path
            limit: 8*1024,         // files smaller than this will be in base64 in
          }
        }
      }, {
        test: /\.(eot|svg|ttf|woff|woff2)$/i,
        use: {
          loader: 'url-loader',
          options: {
            outputPath: 'fonts/',   // relative to output.path
            publicPath: 'dest/fonts/',  // tell css the path
            limit: 4*1024,         // files smaller than this will be in base64 in
          }
        }
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