import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);

import $ from "jquery";
Vue.prototype.$ = $;

import axios from "axios";
import qs from "qs";
Vue.prototype.$axios = axios; //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs; //全局注册，使用方法为:this.qs

import { BootstrapVue, IconsPlugin } from "bootstrap-vue";
// 安装 BootstrapVue
Vue.use(BootstrapVue);
// 可选地安装BootstrapVue图标组件插件
Vue.use(IconsPlugin);

import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";

//sass的重置样式表和css基础样式表
import "./assets/css/basic.scss";
//css的基础样式表
import "./assets/css/common.css";
//font-awesome的字体图标库
import "font-awesome/css/font-awesome.min.css";

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
