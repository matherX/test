<template>
  <div id="app">
    <div id="nav">
      <b-navbar toggleable="md" type="dark">
        <b-navbar-brand v-if="status">
          <el-row>
            <el-col :xs="24" :sm="6">
              <div href="#" class="header-left">
                <b>萝卜多后台系统管理</b>
                <b-navbar-toggle target="nav-collapse" right></b-navbar-toggle>
              </div>
            </el-col>
            <el-col :xs="24" :sm="18">
              <div href="#" class="header-right">
                <router-link to="/about">管理员</router-link>|
                <router-link to="">admin</router-link>|
                <i class="fa fa-power-off" aria-hidden="true"></i>
              </div>
            </el-col>
          </el-row>
        </b-navbar-brand>
      </b-navbar>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  // data(){

  // },
  created() {
    //在页面加载时读取sessionStorage里的状态信息
    if (sessionStorage.getItem("store")) {
      //replaceState用来修改当前历史记录实体
      this.$store.replaceState(
        //通过函数改把源对象的值赋给目标对象，重合的不同值的变量用源对象的值进行覆盖
        Object.assign(
          {},
          this.$store.state, // 目标对象
          JSON.parse(sessionStorage.getItem("store")) //源对象
        )
      );
      sessionStorage.removeItem("store");
    }

    //用事件句柄监听，在页面刷新时将vuex里的信息保存到sessionStorage里
    window.addEventListener("beforeunload", () => {
      sessionStorage.setItem("store", JSON.stringify(this.$store.state));
    });
  },
  computed: {
    status() {
      return this.$store.state.status;
    }
  }
};
</script>

<style lang="scss">
html,
body {
  // // height: 100%;
  // min-height: 100vh;
  #app {
    min-height: 100vh;
    background: url("../dist/img/background.png") no-repeat;
    background-size: 100% 100%;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: white;
    #nav {
      line-height: 50px;
      text-align: center;
      font-weight: 400;
      overflow: hidden;
      a {
        color: #ffffff;
        padding: 0 10px;
        &.router-link-exact-active {
          color: #3273ff;
        }
      }
      i {
        padding: 0 10px;
        color: rgb(255, 218, 0);
        font-weight: 200;
      }
      .navbar {
        display: block;
        padding: 0;
        .navbar-brand {
          display: table;
          word-spacing: -1em;
          width: 100%;
          line-height: 50px;
          margin: 0;
          padding: 0;
          .header-left {
            display: flex;
            justify-content: space-between;
            width: 100%;
            padding: 0 10px;
            float: left;
            box-shadow: 1px 1px 2px rgb(4, 0, 255);
            .navbar-toggler {
              width: 40px;
              height: 34px;
              margin-top: 8px;
              padding: 0;
            }
          }
          .header-right {
            float: right;
            width: 100%;
            text-align: right;
            color: rgb(219, 219, 219);
            background-color: white;
            box-shadow: 0 0 6px #e3e2e2;
            a {
              color: rgb(49, 49, 255);
            }
          }
          // a:hover {
          //   color: white;
          //   background-color: rgb(255, 119, 119);
          // }
        }
      }
    }
  }
}
</style>
