<template>
  <div class="list">
    <div class="list-top g0 f14">
      <el-row>
        <el-col :sm="24" :md="8" class="mb20">
          <el-row>
            <el-col :sm="24" :md="8" class="tc">
              <label>发布时间</label>
            </el-col>
            <el-col :sm="24" :md="16">
              <input class="form-control" />
            </el-col>
          </el-row>
        </el-col>
        <el-col :sm="24" :md="8" class="mb20">
          <el-col :md="8" class="tc">
            <label> — </label>
          </el-col>
          <el-col :md="16">
            <input class="form-control" />
          </el-col>
        </el-col>
        <el-col :sm="24" :md="8" class="mb20">
          <el-col :md="8" class="tc">
            <label class="ws24">类 型</label>
          </el-col>
          <el-col :md="16">
            <select class="form-control">
              <option value="">全部</option>
              <option value="0">首页Banner</option>
              <option value="1">找职位Banner</option>
              <option value="2">找精英Banner</option>
              <option value="3">行业大图</option>
            </select>
          </el-col>
        </el-col>
        <el-col :sm="24" :md="8" class="mb20">
          <el-row>
            <el-col :sm="24" :md="8" class="tc">
              <label class="ws24">状 态</label>
            </el-col>
            <el-col :sm="24" :md="16">
              <select class="form-control">
                <option value="">全部</option>
                <option value="2">上线</option>
                <option value="1">草稿</option>
              </select>
            </el-col>
          </el-row>
        </el-col>
      </el-row>
      <div class="tr">
        <button tyep="button" class="bc46 f16">清空</button>
        <button tyep="button" class="bc30 f16">搜索</button>
      </div>
    </div>
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
    <ul class="paging">
      <li>每页显示<input type="text" v-model="pageSize" />条</li>
      <li class="ml20" @click="currentPage = 1,requestData()">
        <button type="button">首页</button>
      </li>
      <li @click="currentPage--,requestData()">
        <button v-if="!(currentPage == 1)" type="button">&lt;</button>
      </li>
      <!--  判断页数大于10并且当前页面离第一页距离小于3时显示 -->
      <li v-show="size.length > 7 && currentPage > 3 ? true : false">
        <button type="button" disabled="disabled">...</button>
      </li>
      <li v-for="(item,index) in size" :key="index" @click="btn($event)">
        <button :class="{ bkd: currentPage == item }" 
        >
          {{ item }}
        </button>
      </li>
      <!--  判断页数大于10并且当前页面离最后一页距离小于3时显示 -->
      <li
        v-show="size.length > 7 && size.length - currentPage > 3 ? true : false"
      >
        <button type="button" disabled="disabled">...</button>
      </li>
      <li @click="currentPage++,requestData()">
        <button v-if="!(currentPage == size.length)" type="button">
          &gt;
        </button>
      </li>
      <li class="mr20" @click="currentPage = size.length,requestData()">
        <button type="button">末页</button>
      </li>
      <li>
        去第<input v-model="currentPage" type="text" />页
        <button @click="handleCurrentChange">确定</button>
      </li>
    </ul>
    <!-- <div class="block">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-sizes="[10, 20, 30, 40]"
        :page-size="pageSize"
        background
        layout="total, sizes, prev, pager, next, jumper"
        :total="resp.total"
      >
      </el-pagination>
    </div> -->
  </div>
</template>

<script>
export default {
  data() {
    return {
      message: [], //储存列表数据的数组
      resp: [], //因为后台数据有一层Object无法寻找到下级，所以这个时用来计算页面数的数组
      size: [], //页面数
      reset: [
        //数据重写，后台获取的数字数据转化成相应的选项
        { val: 0, type: "首页Banner" },
        { val: 1, type: "找职位Banner", status: "草稿" },
        { val: 2, type: "找精英Banner", status: "上线" },
        { val: 3, type: "行业大图" }
      ],
      currentPage: 1, //当前页面，上传后台和判断当前所在的页面数
      pageSize: 10 //每页的数据量（条数）
    };
  },
  methods: {
    // handleSizeChange(val) {
    //   // this.pageSize = val;
    //   this.requestData();
    // },
    handleCurrentChange(val) {
      //用来写设置每页数据条数以及快速跳转页面的函数
      // this.currentPage = val;
      if (this.currentPage < 0) {
        alert("请输入整数以及正数，帮您跳转到首页");
        this.currnetPage=1;
      } else if (this.currentPage > this.size.length) {
        this.currentPage = this.size.length;
        alert(
          "抱歉！目前数据只有" + this.size.length + "页，已帮您跳转到最后一页"
        );
      } else {
        this.requestData();
      }
      if (this.pageSize > 0 && this.currentPage <= this.resp.total) {
        this.requestData();
      } else {
        alert("单页数据量设置在1~" + this.resp.total);
      }
    },
    btn(e) {
      this.currentPage = e.target.innerHTML;
      this.requestData();
    },
    requestData() {
      //从接口获取数据的函数，在生命周期函数中调用，在页面刷新时执行
      this.$axios({
        method: "get", //axios的get方法，数据不需要转化数据类型，可以直接上传，
        url: "/carrots-admin-ajax/a/article/search", //post必须通过qs转换数据类型以及格式，否则报错
        headers: { "content-type": "application/x-www-form-urlencoded" },
        params: {
          page: this.currentPage,
          size: this.pageSize
        }
      })
        .then(resp => {
          this.resp = resp.data.data; //赋值给resp用来计算分页数
          this.message = resp.data.data.articleList; //数据用来渲染到页面
          for (let a = 0; a < this.message.length; a++) {
            //时间转换
            this.message[a].createAt = new Date( //发布时间通过jq的方法转换成24小时制
              this.message[a].createAt
            ).toLocaleString("chinese", { hour12: false });
            this.message[a].updateAt = new Date( //发修改间通过jq的方法转换成24小时制
              this.message[a].updateAt
            ).toLocaleString("chinese", { hour12: false });
          }
          if (this.size.length == 0 || this.pageSize !== 10) {
            if (this.pageSize !== 10) {
              //设置改变时size和循环的b重置重新赋值
              this.size.length = 0;
              b = 1;
            }
            for (
              var b = 1;
              b <= Math.ceil(this.resp.total / this.pageSize);
              b++
            ) {
              this.size.push(b); //for计算分页的数量，通过数据总数除以单页数据量
            }
          }
          console.log(this.resp);
          console.log(this.size.length)
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  mounted() {
    this.requestData();
  }
};
</script>

<style lang="scss" scoped>
.list {
  width: 100%;
  padding: 20px;
  .list-top {
    padding: 20px;
    background-color: white;
    border: 1px solid rgb(138, 138, 138);
    border-radius: 5px;
    label {
      font-weight: 600;
      margin: 0;
    }
    input {
      display: block;
      width: 100%;
    }
    button {
      width: 50px;
      height: 30px;
      margin: 0 5px;
      color: white;
      border-radius: 5px;
      outline: none;
    }
  }
  .list-bottom {
    margin-top: 20px;
    background-color: white;
    border: 1px solid rgb(138, 138, 138);
    border-radius: 5px;
    .bottom-caption {
      line-height: 30px;
      padding: 5px 20px;
      background-color: rgb(236, 234, 234);
      border-bottom: 1px solid rgb(138, 138, 138);
      button {
        float: right;
        width: 40px;
        height: 30px;
        color: white;
        font-size: 10px;
        background-color: rgb(66, 173, 81);
        border-radius: 5px;
      }
    }
    .bottom-content {
      overflow: hidden;
      padding: 20px;
      table {
        // min-width: 528px;
        margin: 0;
        border: 1px solid #eeeeee;
        th,
        td {
          vertical-align: middle;
          text-align: center;
          img {
            width: 120px;
            height: 80px;
          }
          a {
            margin: 0 5px;
            color: rgb(61, 61, 255);
          }
        }
      }
      tr > td:nth-last-child(1) {
        min-width: 62px;
        a {
          white-space: nowrap;
        }
      }
      tr:nth-last-child(even) {
        background-color: #eceaea;
      }
    }
  }
  .block {
    margin-top: 20px;
    text-align: center;
  }
  ul,
  li {
    display: inline-block;
  }
  .paging {
    text-align: center;
    width: 100%;
    line-height: 50px;
    margin: 30px auto 0;
    font-size: 14px;
    color: black;
    li {
      input {
        text-align: center;
        vertical-align: middle;
        width: 30px;
        height: 30px;
        border: 0;
        border-radius: 3px;
        font-size: 14px;
      }
      button {
        width: 40px;
        line-height: 30px;
        //margin: 0 2px;
        text-align: center;
        color: rgb(61, 61, 255);
        background-color: rgb(255, 255, 255);
        //border: 1px solid rgb(172, 172, 172);
        border-radius: 3px;
        box-sizing: border-box;
        font-size: 14px;
        outline: none;
      }
      .bkd {
        width: 40px;
        height: 35px;
        color: white;
        background-color: blue;
      }
    }
  }
}
</style>
