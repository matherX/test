<template>
  <div id="content">
    <h2>
      {{ list.title }}
    </h2>
    <div class="box" v-html="list.content"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: []
    };
  },
  mounted() {
    var aid = this.$route.params.aid;
    //调用请求数据的方法
    this.requestData(aid);
    // console.log(this.$route.params)/*动态路由*/
    // console.log(this.$route.query)//get传值
  },
  methods: {
    requestData(aid) {
      //get请求如果跨域的话 后台的php java里面要允许跨域请求
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalArticle&aid=" + aid;
      this.$http.get(api).then(
        response => {
          // console.log(response);
          this.list = response.body.result[0];
        },
        err => {
          console.log(err);
        }
      );
    }
  }
};
</script>

<style lang="scss" scoped>
#content {
  padding: 1rem;
  line-height: 2;
}
::v-deep img {
  max-width: 100%;
}
</style>
