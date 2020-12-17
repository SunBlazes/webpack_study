const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  entry: './main.js',
  mode: 'development',
  output: {
    filename: './static/js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './static/css/[name].[contenthash:8].content.css'
    }),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html).*$/i,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
  devServer: {
    port: 8000
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
        },
      },
      {
        test: /\.s(c|a)ss$/,
        exclude: /(node_modules)/,
        use: [isProduction ? MiniCssExtractPlugin.loader : 'style-loader', 'css-loader', 'sass-loader', {
          loader: 'style-resources-loader',
          options: {
            patterns: [
              path.resolve(__dirname, './src/style/*.scss')
            ]
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|svg|gif)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 1024 * 5,
              fallback: 'file-loader',
              publicPath: '/',
              name: 'static/imgs/[name].[hash:8].hash.[ext]'
            }
          }
        ]
      }
    ],
  }
}