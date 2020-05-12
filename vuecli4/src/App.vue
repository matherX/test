<template>
  <div id="app">
    <header class="header">
      <router-link to="/">首页</router-link> |
      <router-link to="/about">新闻</router-link>|
      <router-link to="/user/useradd">用户</router-link>
    </header>
    <router-view />
  </div>
</template>

<script>
import store from "./vuex/store.js";
export default {
  data() {
    return {
      list: []
    };
  },
  store, //注册
  methods: {
    //改变vuex store里面的数据
    incCount() {
      store.commit("incCount", 10);
    }
  }
};
</script>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}

.header {
  padding: 10px;
  text-align: center;
  background-color: black;
  a {
    font-weight: bold;
    color: white;
    padding: 0 30px;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
