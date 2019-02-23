/*
 *Vue-CLI项目的核心配置文件
 */
const webpack = require("webpack");

module.exports = {
  // Webpack开发服务器的设置
  devServer: {
    host: "127.0.0.1",
    port: 8090
  },
  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        Popper: ["popper.js", "default"]
      })
    ]
  }
};
