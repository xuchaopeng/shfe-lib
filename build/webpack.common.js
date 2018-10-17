// const webpack = require('webpack');
const path = require('path');
const config = require('./config');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const IS_DEV = process.env.NODE_ENV === 'development';
const webpackConfig = {
  entry: {
    index: config.common.entry
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
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      },
      {
        test: /\.css$/,
        // use: ['style-loader', 'css-loader']
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'postcss-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename: config.common.assetsSubPath + '/css/[name].[contenthash:6].css',
      chunkFilename:
        config.common.assetsSubPath + '/css/[name].[contenthash:6].css'
    })
    // new DashboardPlugin()
  ]
};
module.exports = webpackConfig;
