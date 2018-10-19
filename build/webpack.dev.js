const path = require('path');
const config = require('./config');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const devConfig = merge(commonConfig, {
  mode: 'development',
  output: {
    filename: 'js/[name].js',
    chunkFilename: 'js/[name].js',
    publicPath: config.dev.assetsPublicPath
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: config.dev.assetsRoot,
    open: config.dev.autoOpenBrowser
  }
});
module.exports = devConfig;
