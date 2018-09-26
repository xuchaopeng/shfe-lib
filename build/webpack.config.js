const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const webpack = require('webpack');

const myresolve = p => {
  return path.resolve(__dirname, p);
};
const BUNDLE_PATH = myresolve('../dist');

module.exports = {
  entry: ['webpack-hot-middleware/client', myresolve('../src/index.js')],
  output: {
    path: BUNDLE_PATH,
    filename: 'index.bundle.js',
    publicPath: myresolve('/')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  // devServer: {
  //   contentBase: BUNDLE_PATH,
  //   // useLocalIp: true,
  //   // watchContentBase: true,
  //   hot: true,
  //   port: 8888
  // },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
    ]
  },
  plugins: [
    new CleanWebpackPlugin([BUNDLE_PATH]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    }),
    new webpack.HotModuleReplacementPlugin()
  ]
};
