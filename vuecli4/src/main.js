import Vue from "vue";
import App from "./App.vue";

//vue路由模块化，这个项目创建时就添加了router的，所以不需要额外配置，
//如果项目中没有，可以新建router文件加，添加注册路由的。js文件，
//路由路由注册配置同意存放在里面，之后在main.js中全局引入就可以了
import router from "./router/index.js";
import store from "./store";

import axios from "axios";
import qs from "qs";
Vue.prototype.$axios = axios; //全局注册，使用方法为:this.$axios
Vue.prototype.qs = qs; //全局注册，使用方法为:this.qs

import Mint from "mint-ui";
import "mint-ui/lib/style.css";
Vue.use(Mint);

import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
Vue.use(ElementUI);
// import {Row,
//   Button,
//   Container,
//   Header,
//   Main,
// } from 'element-ui'
// import 'element-ui/lib/theme-chalk/index.css';
// Vue.use(Row)
// Vue.use(Button)
// Vue.use(Container)
// Vue.use(Header)
// Vue.use(RadioButton)
// // Vue.use(Main)

// import axios from "axios";
// Vue.prototype.$axios = axios;
// axios.defaults.baseURL = "/api"; //关键代码
// Vue.config.productionTip = false;

// import $ from "./jquery";
// import request from './request/request.js'
// Vue.prototype.request = request;

import "./assets/css/basic.scss";

//请求数据
import VueResource from "vue-resource";
Vue.use(VueResource);

Vue.config.productionTip = false;

//4挂载路由
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
