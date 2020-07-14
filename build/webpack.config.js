'use strict'

const path = require('path');
const webpack = require('webpack');
const VueLoaderPlugin = require('vue-loader/lib/plugin')
// 将 html加载进内存， 并自动引入内存中的 bundle.js 文件
const HtmlWebpackPlugin = require('html-webpack-plugin')

function resolve(dir) {
  return path.join(__dirname, '../', dir)
}

module.exports = {
  context: path.resolve(__dirname, '../'),
  entry: {
    main: './src/main.ts'
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: 'bundle.js',
    publicPath: '/'
  },
  module: {
    rules: [
      /**
       * 它会应用到普通的 `.js` 文件, 以及 `.vue` 文件中的 `<script>` 块.
       *  将 es6 语法转为 es5
       */
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      /**
       * 它会应用到普通的 `.css` 文件
      以及 `.vue` 文件中的 `<style>` 块
       */
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ]
      },
      /**
       * 解析和转换 .vue 文件，提取出其中的逻辑代码 script、样式代码 style、以及 HTML 模版 template，再分别把它们交给对应的 Loader 去处理，核心的作用，就是提取
       */
      {
        test: /\.vue$/,
        loader: 'vue-loader'
      },
      {
        test: /\.ts$/,
        exclude: /node_modules/,
        enforce: 'pre',
        loader: 'tslint-loader'
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      /**
       * 处理 html, style 中引入的图片问题
       */
      {
        test: /\.(png|jpg)$/,
        loader: 'url-loader',
      }
    ]
  },
  devtool: "source-map",
  devServer: {
    clientLogLevel: 'warning',
    historyApiFallback: true,
    overlay: true,
    publicPath: "/"
  },
  performance: {
    hints: false
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: './index.html',
      inject: true
    })
  ],
  resolve: {
    extensions: ['.js', '.vue', '.json', '.ts'],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      '@': resolve('src'),
      '@component': resolve('src/component'),
    }
  },
}