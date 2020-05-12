<!-- 说明 -->
<!-- @author 作者 -->

<template>
  <div>
    <h1>This is an about page</h1>
    <div :class="$style.logo" />
    <div class="list-bottom g0">
      <div class="bottom-caption f14"><b>Article</b><button>+新增</button></div>
      <div class="bottom-content">
        <table class="table table-striped f14">
          <tr>
            <th>ID</th>
            <th>名称</th>
            <th>类型</th>
            <th>发布时间</th>
            <th>修改时间</th>
            <th>发布者</th>
            <th>状态</th>
            <th>操作</th>
          </tr>
          <tr v-for="(item, key) in message" :key="item.id">
            <td>{{ key + 1 }}</td>
            <td>{{ item.title }}</td>
            <td>{{ reset[item.type].type }}</td>
            <td>{{ item.createAt }}</td>
            <td>{{ item.updateAt }}</td>
            <td>{{ item.author }}</td>
            <td>{{ reset[item.status].status }}</td>
            <td><a>上线</a><a>编辑</a><a>删除</a></td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [],
      reset: [
        { val: 0, type: '首页Banner' },
        { val: 1, type: '找职位Banner', status: '草稿' },
        { val: 2, type: '找精英Banner', status: '上线' },
        { val: 3, type: '行业大图' },
      ],
    }
  },
  methods: {
    requestData() {
      let data = {
        page: 2,
        size: 8,
        total: 30,
        list: 3,
      }
      this.$axios({
        method: 'get',
        url: '/carrots-admin-ajax/a/article/search',
        headers: { 'content-type': 'application/x-www-form-urlencoded' },
        data: this.qs.stringify(data),
      })
        .then(resp => {
          this.message = resp.data.data.articleList
          for (var a = 0; a < this.message.length; a++) {
            this.message[a].createAt = new Date(
              this.message[a].createAt,
            ).toLocaleString('chinese', { hour12: false })
            this.message[a].updateAt = new Date(
              this.message[a].updateAt,
            ).toLocaleString('chinese', { hour12: false })
          }
          console.log(resp)
          console.log(data)
          console.log(this.qs.stringify(data))
        })
        .catch(err => {
          console.log(err)
        })
    },
  },
  mounted() {
    this.requestData()
  },
}
</script>

<style lang="less" module>
.logo {
  background: url('~@/assets/logo.png');
  background-size: auto 100%;
  opacity: 0.5;
  height: 30px;
}
</style>
