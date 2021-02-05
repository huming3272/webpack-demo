const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require("path");

module.exports = {
  mode: "development",
  output: {
    filename: "main.[hash].js",
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: "页面被更改",
      template: "./src/assets/index.html",
      // 如果template属性存在，title不起作用
      path: path.resolve(__dirname, "dist"),
      //输出路径默认为dist
    }),
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options:{
              publicPath:'./'
            }
          },
          "css-loader",
        ],
      },
    ],
  },
};
