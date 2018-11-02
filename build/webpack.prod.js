const webpack = require('webpack');
const merge = require('webpack-merge');
const common = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const path = require('path');
const myresolve = p => {
  return path.resolve(__dirname, p);
};

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  plugins: [
    new CleanWebpackPlugin([myresolve('../dist')], {
      root: path.join(__dirname, '..')
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});
