// const webpack = require('webpack');
const path = require('path');
const config = require('./config');
// const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const IS_DEV = process.env.NODE_ENV === 'development';

module.exports = {
  entry: {
    app: config.common.entry
  },
  output: {
    filename: path.posix.join(
      config.common.assetsSubPath,
      '/js/[name].[contenthash:6].js'
    ),
    chunkFilename: path.posix.join(
      config.common.assetsSubPath,
      '/js/[name].[contenthash:6].js'
    ),
    path: config.common.assetsRoot,
    publicPath: config.common.assetsPublicPath
  },
  optimization: {
    runtimeChunk: {
      name: 'manifest'
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
