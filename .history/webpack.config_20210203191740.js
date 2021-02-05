const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    output: {
      filename: "index.[contenthash].js"
    },
    plugins:[
      new HtmlWebpackPlugin({
        title: "页面被更改",
        template:"./src/assets/index.html",
        // 如果template属性存在，title不起作用
      })
    ],
    module
  };