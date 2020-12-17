const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './main.js',
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    filename: './static/js/[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, './public/index.html'),
    }),
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
        use: ['style-loader', 'css-loader', 'sass-loader', {
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
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src')
    },
    extensions: ['.js', '.css', '.scss', '.vue']
  }
}