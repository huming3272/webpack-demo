const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path');

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
        path: path.resolve(__dirname, 'dist'),
      })
    ],
    module: {
      rules:[
        {
          test: /\.css$/i,
          use:['style-loader','css-loader'],
        }
      ]
    }
  };