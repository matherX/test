const webpack = require("webpack");

module.exports = {
  devServer: {
    host: "localhost",
    port: 8081,
    // http: false,
    // open: false,
    //
    proxy: {
      "/carrots-admin-ajax/": {
        target: "http://dev.admin.carrots.ptteng.com/",
        changeOrigin: true,
        //ws: true,
        pathRewrite: {
          "^/carrots-admin-ajax/": "./src"
        }
      },
      "/apis": {
        target: "http://www.phonegap100.com",
        changeOrigin: true
        // pathRewrite: {
        //   "^/apis": "/"
        // }
      }
    }
    // proxy: {
    //   "/apis": {
    //     target: "http://www.phonegap100.com",
    //     changeOrigin: false,
    //     // ws: true,
    //     pathRewrite: {
    //       "^/apis": "/"
    //     }
    //   }
  },
  // cssSourceMap: false,
  chainWebpack: config => {
    config.plugin("provide").use(webpack.ProvidePlugin, [
      {
        $: "jquery",
        jquery: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery"
      }
    ]);
  },
  lintOnSave: false
};
