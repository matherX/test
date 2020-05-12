const webpack = require("webpack");

module.exports = {
  devServer: {
    host: "localhost",
    port: 8080, //端口号
    proxy: {
      //用来替换掩盖获取数据网址的
      "/carrots-admin-ajax/": {
        //目标端口的网址
        target: "ttp://dev.admin.carrots.ptteng.com/",
        changeOrigin: true, //跨域
        pathRewrite: {
          "^/carrots-admin-ajax/": ""
        }
      }
    }
  },
  configureWebpack: {
    resolve: {
      //配置路径别名
      alias: {
        assets: "@/assets",
        common: "@common",
        components: "@components",
        network: "@network",
        views: "@views"
      }
    },
    plugins: [
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "windows.jQuery": "jquery"
      })
    ]
  }
};
