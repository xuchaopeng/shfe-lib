// const webpack = require('webpack');
const path = require('path');
const config = require('./config');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';
console.log('IS_DEV::', IS_DEV);

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
        use: [
          IS_DEV ? 'style-loader' : MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: IS_DEV ? '[path][name].[ext]' : '[hash].[ext]'
            }
          }
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader'
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new MiniCssExtractPlugin({
      filename:
        config.common.assetsSubPath +
        (IS_DEV ? '/css/[name].css' : '/css/[name].[contenthash:6].css'),
      chunkFilename:
        config.common.assetsSubPath +
        (IS_DEV ? '/css/[id].css' : '/css/[id].[contenthash:6].css')
    })
    // new DashboardPlugin()
  ]
};
module.exports = webpackConfig;
