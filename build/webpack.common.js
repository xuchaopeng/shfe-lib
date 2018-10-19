// const webpack = require('webpack');
const path = require('path');
// const DashboardPlugin = require('webpack-dashboard/plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const IS_DEV = process.env.NODE_ENV === 'development';
// const IS_PRE = process.env.NODE_ENV === 'preproduction';
// const cfg = IS_DEV ? config.dev : IS_PRE ? config.pre : config.build;
const myresolve = p => {
  return path.resolve(__dirname, p);
};

const webpackConfig = {
  entry: {
    index: myresolve('../src/js/index.js')
  },
  output: {
    filename: 'js/[name].[contenthash:6].js',
    chunkFilename: 'js/[name].[contenthash:6].js',
    path: myresolve('../dist'),
    publicPath: './'
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
        test: /\.s?css$/,
        use: [
          IS_DEV
            ? 'style-loader'
            : {
                loader: MiniCssExtractPlugin.loader,
                options: {
                  publicPath: '../'
                }
              },
          'css-loader',
          'postcss-loader',
          'sass-loader'
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|eot|ttf|woff|woff2)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192,
              name: IS_DEV ? '[path][name].[ext]' : 'img/[name].[hash:6].[ext]'
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
      filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash:6].css',
      chunkFilename: IS_DEV ? 'css/[id].css' : 'css/[name].[contenthash:6].css'
    })
    // new DashboardPlugin()
  ]
};
module.exports = webpackConfig;
