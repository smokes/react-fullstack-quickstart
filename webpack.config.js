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
    filename: '[name].[contenthash:4].js',
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
            loader: MiniCssExtractPlugin.loader, // creates style nodes from JS strings
          },
          {
            loader: 'css-loader', // translates CSS into CommonJS
          },
          {
            loader: 'sass-loader', // compiles Sass to CSS
          },
        ],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(BUILD_PATH),
    new HtmlWebpackPlugin({
      template: './client/public/index.html',
    }),
    new MiniCssExtractPlugin({ filename: './assets/[name].[contenthash:4].css' }),
  ],
  resolve: {
    extensions: ['.js', '.jsx'],
  },
};
