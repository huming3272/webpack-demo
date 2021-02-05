const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    output: {
      filename: "index.[contenthash].js"
    },
    plugins:[
      new HtmlWebpackPlugin({
        title: "页面被更改",
        // template:"./index.html"
      })
    ]
  };