const webpack = require('webpack');
const path = require('path');
const glob = require('glob-all');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCssPlugin = require('purifycss-webpack');

const IS_DEV = process.env.NODE_ENV === 'development'; // 开发
const IS_PRE = process.env.NODE_ENV === 'preproduction'; // 上测试
const IS_PRO = process.env.NODE_ENV === 'production'; // 上线
const myresolve = p => {
  return path.resolve(__dirname, p);
};

const webpackConfig = {
  entry: {
    index: myresolve('../src/js/index.js')
  },
  output: {
    filename: 'js/[name].[contenthash:6].js',
    chunkFilename: 'js/[name].[contenthash:6].js',
    path: myresolve('../dist'),
    publicPath: './'
  },
  resolve: {
    alias: {
      '@nm': path.resolve(__dirname, '../node_modules'),
      '@': path.resolve(__dirname, '../src')
    }
  },
  optimization: {
    runtimeChunk: {
      name: 'runtime' // webpack运行时文件
    },
    splitChunks: {
      cacheGroups: {
        common: {
          test: /[\\/]node_modules[\\/]|[\\/]src[\\/]common[\\/]/, // 将node_modules和src/common下的js打包到一个chunk
          name: 'common',
          chunks: 'all'
        }
      }
    }
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          'babel-loader', // 处理js新特性
          'eslint-loader' // 代码格式校验
        ]
      },
      {
        test: /\.s?css$/,
        use: [
          IS_DEV
            ? 'style-loader' // 将css代码注入html中
            : {
                loader: MiniCssExtractPlugin.loader, // 提取css形成文件
                options: {
                  publicPath: '../'
                }
              },
          'css-loader', // 解决js中引入css问题
          'postcss-loader', // 支持autoprefixer、cssnano等
          'sass-loader' // 支持scss语法
        ]
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/i,
        use: [
          {
            loader: 'url-loader', // 处理css图片引用
            options: {
              limit: 8192,
              name: IS_DEV ? '[path][name].[ext]' : 'img/[name].[hash:6].[ext]' // 图片文件名
            }
          },
          'image-webpack-loader' // 图片压缩
        ]
      },
      {
        test: /\.html$/,
        use: 'html-loader' // 处理html图片引用
      }
    ]
  },
  plugins: [
    // html依赖注入
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'src/index.html',
      minify: IS_DEV
        ? null
        : {
            removeComments: true,
            collapseWhitespace: true,
            removeRedundantAttributes: true,
            useShortDoctype: true,
            removeEmptyAttributes: true,
            removeStyleLinkTypeAttributes: true,
            keepClosingSlash: true,
            minifyJS: true,
            minifyCSS: true,
            minifyURLs: true
          }
    }),
    // css提取
    new MiniCssExtractPlugin({
      filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash:6].css',
      chunkFilename: IS_DEV ? 'css/[id].css' : 'css/[name].[contenthash:6].css'
    }),
    // css tree-shaking
    new PurifyCssPlugin({
      minimize: true,
      paths: glob.sync([path.join(__dirname, '../src/index.html'), path.join(__dirname, '../src/js/*.js')])
    }),
    new webpack.DefinePlugin({
      DEVELOPMENT: JSON.stringify(IS_DEV),
      PREPRODUCTION: JSON.stringify(IS_PRE),
      PRODUCTION: JSON.stringify(IS_PRO)
    })
  ]
};
module.exports = webpackConfig;
