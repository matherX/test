<template>
  <div class="home">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App" /> -->
    <form v-if="!status">
      <img src="/" alt="" />
      <div class="form">
        <input
          id="int-name"
          tyep="text"
          max="18"
          min="6"
          name="uname"
          placeholder="账号"
          v-model="uname"
        />
        <i class="fa fa-user fa-lg" aria-hidden="true"></i>
        <label for="int-name" class="form-int"></label>
      </div>
      <div class="form">
        <input
          id="int-pwd"
          type="password"
          max="18"
          min="6"
          name="pwd"
          placeholder="密码"
          v-model="pwd"
        />
        <i class="fa fa-lock fa-lg" aria-hidden="true"></i>
        <label for="int-pwd" class="form-int"></label>
      </div>
      <span class="g0 tc">{{ list }}</span>
      <button type="button" @click="skip">登陆</button>
    </form>
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  // name: "Home",
  // components: {
  //   HelloWorld
  // },
  data() {
    return {
      uname: "",
      pwd: "",
      list: "",
      intervalid: null
      // status: false
    };
  },
  methods: {
    skip() {
      let data = {
        name: this.uname,
        pwd: this.pwd
      };
      this.$axios({
        method: "post", //方法
        url: "/carrots-admin-ajax/a/login", //替换网址的代码，用来骗服务器的
        headers: { "content-type": "application/x-www-form-urlencoded" }, //请求头，试了不加也能请求到，习惯加了
        data: this.qs.stringify(data) //上次就是这里没有配置好，需要用qs代替JSON把上传的数据转换一下格式
      })
        .then(resp => {
          //请求成功返回的参数
          console.log(resp);
          if (resp.data.code == 0) {
            //请求成功后执行
            this.$router.push({ path: "about" }); //编程时导航，使用点击函数跳转页面
            this.$store.state.status = true; //使用vuex保存的status的状态，显示主页面的头部导航栏信息，相应的隐藏登陆框
          } else {
            //身份验证失败执行

            clearTimeout(this.intervalid); //定时器置空，下面的方法也行，不过是对应setInterval()方法的  clearTimeout对应setTimeout()
            // clearInterval(this.intervalid);
            this.list = resp.data.message; //赋值显示登陆证失败的原因
            this.intervalId = setTimeout(() => {
              //定时器3秒后置空list，取消页面登陆验证失败原因
              this.list = "";
            }, 3000);
          }
        })
        .catch(err => {
          //请求失败显示原因
          console.log(err);
        });
    }
  },
  computed: {
    status() {
      return this.$store.state.status;
    }
  }
};
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
  form {
    position: absolute;
    top: 50%;
    left: 50%;
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    width: 50%;
    height: 280px;
    padding: 50px 20px 30px;
    background-color: white;
    border-radius: 5px;
    box-sizing: border-box;
    box-shadow: 2px 2px 10px rgb(63, 53, 53);
    transform: translate(-50%, -50%);
    img {
      position: absolute;
      top: -35px;
      left: calc(50% - 35px);
      width: 70px;
      height: 70px;
      border-radius: 50px;
      box-shadow: 1px 1px 4px rgba(131, 131, 131, 0.212);
      background: url("../../dist/img/sprites.png") -10px -10px;
    }
    .form {
      position: relative;
      line-height: 40px;
      color: rgb(189, 189, 189);
      input {
        width: calc(100% - 31.16px);
        color: rgb(255, 148, 25);
        border: 0;
        outline: none;
      }
      i {
        float: left;
        line-height: 40px;
        padding: 0 7px;
      }
      .form-int {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        margin: 0;
        border: 1px solid rgb(187, 187, 187);
        border-radius: 5px;
      }
      input:focus,
      input:focus + i {
        color: rgb(255, 148, 25);
      }
      input:focus ~ .form-int {
        border: 1px solid rgb(255, 148, 25);
      }
    }
    button {
      height: 50px;
      color: white;
      background-color: rgb(247, 169, 0);
      border: 0;
      border-radius: 5px;
      outline: none;
    }
    button:hover {
      background-color: rgb(247, 140, 0);
    }
  }
}
</style>
