import Vue from "vue";
import VueRouter from "vue-router";
//1.创建组件
import Home from "../views/Home.vue";
import Content from "../components/Content.vue";
import User from "../views/User.vue";
import UserAdd from "../components/User/UserAdd.vue";
import UserList from "../components/User/UserList.vue";

Vue.use(VueRouter); //挂载vuerouter

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/content/:aid",
    name: "Content",
    component: Content
  },
  {
    //2。配置路由
    path: "/user", //路由跳转路径
    name: "user", //路由明明
    component: User, //路由路径相对于的组件（注册）
    children: [
      { path: "useradd", component: UserAdd },
      { path: "userlist", component: UserList }
    ]
  }
];
//3.实力化vuerouter
const router = new VueRouter({
  mode: "history" /*hash模式修改为history*/, //访问后缀名的文件需要后端配合，使用nginx配置，详情见vue官网
  routes //缩写相当于 routes: routes
});

export default router;
