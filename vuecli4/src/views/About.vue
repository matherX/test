<template>
  <div id="about">
    <!-- <ul class="list">
      <li v-for="(item, key) in list" :key="item.title">
        <router-link :to="'/content/' + item.aid">
          {{ key }}.{{ item.api }}
        </router-link> -->
    <!-- get传值配置路由不惜要添加收的:aid,直接定义跳转名即可
        <router-link :to="'/content?aid=' + key">
          {{ key }}-{{ item }}
        </router-link> -->
    <!-- </li>
    </ul> -->
    <!-- <ul
      v-infinite-scroll="loadMore"
      infinite-scroll-disabled="loading"
      infinite-scroll-distance="10"
      class="list"
    >
      <li v-for="(item,value) in list" :key="value">{{item.rank}}.{{item.author}}:{{item.album_title}}
      </li>
    </ul> -->
    <ul class="infinite-list" v-infinite-scroll="load" style="overflow:auto">
      <li v-for="list in count" :key="list" class="infinite-list-item">
        {{ list }}
      </li>
    </ul>
  </div>
</template>

<script>
/* 1配置动态路由
routes:[
    动态路由的参数，以冒号开头
    {path: "/content/:aid",component: Content}
]
2.在对应的页面
this.$route.params获取动态路由的值*/
export default {
  data() {
    return {
      list: [],
      page: 1,
      value: 1,
      count: 0,
      loading: false
    };
  },
  methods: {
    // loadMore() {
    //   this.requestData();
    //   this.$indicator.open({
    //     text: 'Loading...',
    //     spinnerType: 'fading-circle',
    //   });
    //   this.requestData();
    // },
    load() {
      if (this.count < 10) {
        this.count += 2;
      }
      // this.requestData();
    },
    requestData() {
      // this.loading = true;
      var api =
        "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1";
      // 'https://api.apiopen.top/musicRankingsDetails?type=' + this.page;
      this.$http.get(api).then(
        resp => {
          //数据防再store里面

          // elementui无限滚动
          for (
            this.page = 1;
            this.list.length < 184;
            this.page++, this.value++
          ) {
            this.list = this.lis.concat(resp.body.result);
            console.log(this.list.length);
          }
          // mint-ui
          // if(response.body.result !== null && this.list.length < 184){
          //     setTimeout(() => {
          //       this.list = this.list.concat(response.body.result);
          //       this.$indicator.close();
          //       this.loading = false
          //       ++this.page;
          //       ++this.value;
          //     },500)
          //     console.log(this.list)
          // }else if(this.list.length == 184){
          //   this.loading = true;
          //   this.$indicator.close();
          // }else{
          //   this.loading = false;
          //   this.$indicator.close();
          //   ++this.page;
          // }
          // console.log(this.page)
        },
        err => {
          console.log(err);
        }
      );
      //     this.$axios
      //       .get(
      //         "http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=" +
      //           this.page
      //       )
      //       .then(resp => {
      //         console.log(resp);
      //         this.list = resp.data.result;
      //         console.log(this.list.title);
      //       })
      //       .catch(err => {
      //         console.log(err);
      //       });
    }
  },
  mounted() {
    this.requestData();
  }
};
</script>

<style lang="scss" scoped>
.list {
  // height: calc(100vh - 52px);
  // overflow-y: auto;
  // margin-bottom: 10px ;
  li {
    line-height: 3.4rem;
    text-align: center;
    font-size: 1.2rem;
    border-bottom: 1px solid;
  }
}
</style>
