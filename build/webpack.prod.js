const config = require('./config');
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const commonConfig = require('./webpack.common');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer')
  .BundleAnalyzerPlugin;
const hasAnalyzer = process.env.WEBPACK_ANALYZER === '1';

const proConfig = merge(commonConfig, {
  mode: 'production',
  devtool: 'source-map',
  optimization: {},
  plugins: [
    new CleanWebpackPlugin([config.build.assetsRoot], {
      root: path.join(__dirname, '..')
    }),
    new webpack.HashedModuleIdsPlugin()
  ]
});

if (hasAnalyzer) {
  proConfig.plugins.push(new BundleAnalyzerPlugin());
}

module.exports = proConfig;
