// const webpack = require('webpack');
const config = require('./config');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');

module.exports = merge(commonConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    contentBase: config.dev.assetsRoot
    // hot: true
    // open: true
  }
  // plugins: [new webpack.HotModuleReplacementPlugin()]
});
