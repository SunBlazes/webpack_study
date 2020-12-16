const path = require('path')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  entry: {
    entry: './main.js',
    entry2: './main2.js',
  },
  output: {
    filename: '[name].[chunkhash:8].chunk.js',
    path: path.resolve(__dirname, 'dist')
  },
  plugins: [
    new CleanWebpackPlugin()
  ],
  optimization: {
    // 诸如import()这种异步加载的代码，即为运行时代码。
    // 设置runtimeChunk可以防止运行时代码的改变导致chunk的hash改变
    // 只创建一个在所有生成chunk之间共享的运行时文件
    runtimeChunk: 'single',
  }
}