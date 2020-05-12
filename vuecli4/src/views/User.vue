<template>
  <div id="user">
    <div class="left">
      <ul>
        <li>
          <router-link to="/user/useradd">增加用户</router-link>
        </li>
        <li>
          <!-- 子路由在父级路由（路由的嵌套）下面通过children的方法，添加子级路由
          下面的这种写法，在自己路由中的path属性对象不需要加“/”，否则子级路由不显示，寻找不到页面。
          这么写的好处是可以在父级路由添加默认显示的子级路由页面   详细方法：
          子级路由注册
          path: "/user",
            component: User,
            children: [
              { path: "useradd", component: UserAdd },
              { path: "userlist", component: UserList }
            ] -->
          <router-link to="/user/userlist">用户列表</router-link>
        </li>
      </ul>
      <ul>
        <li></li>
      </ul>
    </div>
    <div class="right">
      <action-sheet></action-sheet>
      <router-view></router-view>
      <ul class="list">
        <li v-for="(item, key) in list" :key="item.title">
          {{ key }}{{ item.title }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import ActionSheet from "../components/ActionSheet.vue";
import store from "../vuex/store.js";
export default {
  // name: "action",
  components: { ActionSheet },
  data() {
    return {
      list: []
    };
  },
  store,
  methods: {
    incCount() {
      this.$store.count("incCount");
    },
    requestData() {
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      this.$http.get(api).then(
        resp => {
          console.log(resp);
          this.list = resp.body.result;
          //数据防再store里面
          this.$store.commit("addList", resp.body.result);
        },
        err => {
          console.log(err);
        }
      );
    }
  },
  mounted() {
    //判断store里面有没有数据
    var listData = this.$store.state.list;
    if (listData.length > 0) {
      this.list = listData;
    } else {
      this.requestData();
    }
  }
};
</script>

<style lang="scss" scoped>
#user {
  display: flex;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  .left {
    width: 30%;
    margin: 30px 0;
    text-align: center;
    a {
      color: #42b983;
      padding: 0 30px;

      &.router-link-exact-active {
        font-weight: bold;
        color: #42b983;
      }
    }
  }
  .right {
    width: 70%;
    padding: 30px;
  }
}
</style>
