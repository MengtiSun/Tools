module.exports = function (env, argv) {
  env = env || {development: true};
  return {
    entry: './src/js/index.js',
    ...env.production? require('./config/webpack.production'):
      require('./config/webpack.development'),
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
        {
          test: /\.(jpg|png|gif)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'imgs/',   // relative to output.path
              limit: 1*1024,         // files smaller than this will be in base64 in
            }
          }
        }, {
          test: /\.(eot|svg|ttf|woff|woff2)$/i,
          use: {
            loader: 'url-loader',
            options: {
              outputPath: 'fonts/',   // relative to output.path
              limit: 4*1024,         // files smaller than this will be in base64 in
            }
          }
        }, {
          test: /\.less$/i,
          use: ['style-loader', 'css-loader', 'less-loader']
        }, {
          test: /\.(js|jsx)$/i,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['@babel/preset-env']
            }
          }
        }, {
          test: /\.(js|jsx)$/i,
          loader: 'eslint-loader',
          exclude: /node_modules|bower_modules/,
          options: {
            
          }
        }
      ]
    },
    devtool: 'source-map'
  }
}

// module.exports= {
//   // mode can be omitted, but will get warning
//   mode: 'development',
//   // SPA
//   entry: './src/js/index.js',
//   // output has to be an object
//   output: {
//     path: path.resolve(__dirname, 'dest'),
//     filename: 'bundle.min.js'
//   },
//   module: {...}
// };