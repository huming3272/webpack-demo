module.exports = {
    mode: 'development',
    output: {
      filename: "index.[contenthash].js"
    },
    plugins:[
      new HtmlWebpackPlugin({
        
      })
    ]
  };