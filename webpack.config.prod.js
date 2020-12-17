const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const CompressionWebpackPlugin = require('compression-webpack-plugin')
const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer')
const isProduction = process.env.NODE_ENV === 'production'

module.exports = {
  mode: 'production',
  entry: './main.js',
  output: {
    filename: './static/js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
    new MiniCssExtractPlugin({
      filename: './static/css/[name].[contenthash:8].content.css'
    }),
    // new BundleAnalyzerPlugin(),
    new CompressionWebpackPlugin({
      filename: '[path].gz[query]',
      algorithm: 'gzip',
      test: /\.(js|css|html).*$/i,
      threshold: 10240,
      minRatio: 0.8
    })
  ],
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
        use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader', {
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
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name(module) {
            // name is like D:\projects\extract-css\node_modules\_jquery@3.5.1@jquery\dist
            const reg = /[\\/]node_modules[\\/](.*)?[\\/]/
            const packageName = module.context.match(reg)[1]
            return `npm.${packageName.replace(/@/g,'')}`
          }
        }
      }
    }
  }
}