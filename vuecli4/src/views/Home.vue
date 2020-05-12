<template>
  <div>
    <!-- <img src="../assets/logo.png"> -->
    <button type="button" @click="getData()">编程时导航，命名路由</button>
    <HelloWorld msg="Welcome to Your Vue.js App" />
    {{ this.$store.state.count }}

    <br />

    <button @click="incCount">增加</button>

    <!-- <h1 class="red">This is an about page</h1>
    <p>{{ count }}</p>
    <button @click="add" class="red">增加</button> -->
  </div>
</template>

<script>
//state的几种使用方法https://www.cnblogs.com/wangshucheng/p/11203152.html
//2.vuex.state方法引入的用法
// import store from '@/store/index.js'
//3.vuex.mapState的使用方法
import HelloWorld from "../components/HelloWorld.vue";
import store from "../vuex/store.js";
export default {
  name: "Home",
  components: { HelloWorld },
  data() {
    return {
      msg: "123"
    };
  },
  store, //注册
  computed: /*mapState方法在用mapState引入vuex后，在compited后面加上*/ mapState(
    {
      count: state => state.count //3.map辅助函数帮助计算可以解决重复和冗余(){
      //1.vuex。state的使用方法 return this.$store.state.count
      //2.直接引入可以不用写this.$ return store.state.count
      // }
      // count(){
      //   return this.$store.state.count
      // }
    }
  ),
  methods: {
    //改变vuex store里面的数据
    incCount() {
      store.commit("incCount", 10);
    },
    getData() {
      //编程式导航
      this.$router.push({ path: "content/497" });

      //命名路由
      // this.$router.push({ name: "About" });
    }
  }
};
</script>

<style></style>
