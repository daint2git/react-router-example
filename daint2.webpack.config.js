/**
 * Author: daint2@fsoft.com.vn
 * File: daint2.webpack.config.js
 */

const PATH = require('path');
const SRC_DIR = PATH.resolve(__dirname, 'src');
const PUBLIC_DIR = PATH.resolve(__dirname, 'public');

module.exports = {
  entry: SRC_DIR + '/index.js',
  module: {
    rules: [{
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015'],
          plugins: ['transform-class-properties']
        }
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      },
      {
        test: /\.(jpg|png|svg|gif)$/,
        use: 'file-loader'
      }
    ]
  },
  output: {
    path: PUBLIC_DIR + '',
    publicPath: '/',
    filename: 'bundle.js'
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      ComponentPath: SRC_DIR + '/components'
    }
  },
  devServer: {
    contentBase: PUBLIC_DIR + '',
    historyApiFallback: true,
    port: 9999
  }
};