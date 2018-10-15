const config = require('./config');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');

module.exports = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([config.build.assetsRoot], {
      root: path.join(__dirname, '..')
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});
