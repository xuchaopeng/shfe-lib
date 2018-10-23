// const webpack = require('webpack');
const path = require('path');
const glob = require('glob');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const PurifyCssPlugin = require('purifycss-webpack');
const IS_DEV = process.env.NODE_ENV === 'development';
// const IS_PRE = process.env.NODE_ENV === 'preproduction';
// const cfg = IS_DEV ? config.dev : IS_PRE ? config.pre : config.build;
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
  optimization: {
    runtimeChunk: {
      name: 'manifest' // webpack运行时文件
    },
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /([\\/]node_modules[\\/])/,
          name: 'vendors', // 打包从node_modules引入的js到一个公共文件
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
        use: {
          loader: 'babel-loader' // 处理js新特性
        }
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
      template: 'src/index.html'
    }),
    // css提取
    new MiniCssExtractPlugin({
      filename: IS_DEV ? 'css/[name].css' : 'css/[name].[contenthash:6].css',
      chunkFilename: IS_DEV ? 'css/[id].css' : 'css/[name].[contenthash:6].css'
    }),
    // css tree-shaking
    new PurifyCssPlugin({
      paths: glob.sync(path.join(__dirname, '../src/index.html'))
    })
  ]
};
module.exports = webpackConfig;
