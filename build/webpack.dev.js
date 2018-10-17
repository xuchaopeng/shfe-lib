// const webpack = require('webpack');
const config = require('./config');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = merge(commonConfig, {
  mode: 'development',
  output: {
    publicPath: config.dev.assetsPublicPath
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: config.dev.assetsRoot
    // hot: true
    // open: true
  }
  // plugins: [new webpack.HotModuleReplacementPlugin()]
});
module.exports = devConfig;
