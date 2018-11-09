const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const APP_PATH = path.resolve(__dirname, './client/index.js');
const BUILD_PATH = path.resolve(__dirname, './build');

module.exports = {
  entry: {
    main: APP_PATH,
  },
  output: {
    filename: './assets/[name].[hash:4].js',
    path: BUILD_PATH,
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: 'babel-loader',
      },
      {
        test: /\.jsx$/,
        loader: 'babel-loader',
      },
      {
        test: /(\.css|.scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader',
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'file-loader',
        options: {
          name: './assets/[name].[hash:4].[ext]',
        },
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_PATH),
    new HtmlWebpackPlugin({
      template: './client/public/index.html',
    }),
    new MiniCssExtractPlugin({ filename: './assets/[name].[hash:4].css' }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
  devServer: {
    port: 3000,
    open: true,
    proxy: {
      '/api': 'http://localhost:8080',
    },
  },
};
