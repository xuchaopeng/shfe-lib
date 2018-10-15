const webpack = require('webpack');
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const myresolve = p => {
  return path.resolve(__dirname, p);
};

module.exports = {
  entry: {
    app: myresolve('../src/index.js')
  },
  output: {
    filename: 'static/js/[name].[contenthash:6].js',
    chunkFilename: 'static/js/[name].[contenthash].js',
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
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new webpack.ProvidePlugin({
      // _: 'lodash'
      join: ['lodash', 'join']
    })
  ]
};
