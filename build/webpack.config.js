const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');

const myresolve = p => {
  return path.resolve(__dirname, p);
};
const BUNDLE_PATH = myresolve('../dist');

module.exports = {
  entry: {
    print: myresolve('../src/print.js'),
    index: myresolve('../src/index.js')
  },
  output: {
    path: BUNDLE_PATH,
    filename: '[name].bundle.js',
    publicPath: myresolve('/')
  },
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: BUNDLE_PATH,
    // useLocalIp: true,
    watchContentBase: true,
    port: 8888
  },
  plugins: [
    new CleanWebpackPlugin([BUNDLE_PATH]),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html'
    })
  ]
};
