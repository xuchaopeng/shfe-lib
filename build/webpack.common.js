const path = require('path');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const myresolve = p => {
  return path.resolve(__dirname, p);
};

module.exports = {
  entry: {
    app: myresolve('../src/index.js')
  },
  output: {
    filename: '[name].[contenthash].js',
    // chunkFilename: '[name].[contenthash].js',
    path: myresolve('../dist/static'),
    publicPath: './static/'
  },
  optimization: {
    runtimeChunk: 'single',
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
    new CleanWebpackPlugin([myresolve('../dist')], {
      root: path.join(__dirname, '..')
    }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
