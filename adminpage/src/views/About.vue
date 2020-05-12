<template>
  <div class="about">
    <el-row>
      <el-col :xs="24" :sm="6">
        <div class="content-left">
          <!-- <ul>
            <li class="left-nape">
              <a @click="Popup">
                <i class="fa fa-pencil"></i>
                后台管理
                <span class="fa fa-angle-right fa-lg"></span>
              </a>
              <ul style="display: none">
                <li>模块管理</li>
                <li>角色管理</li>
                <li>密码修改</li>
                <li>账户管理</li>
              </ul>
            </li>
            <li class="left-nape">
              <a @click="Popup">
                <i class="fa fa-pencil"></i>
                信息管理
                <span class="fa fa-angle-right fa-lg"></span>
              </a>
              <ul style="display: none">
                <li>公司列表</li>
                <li>职位列表</li>
              </ul>
            </li>
            <li class="left-nape">
              <a @click="Popup">
                <i class="fa fa-pencil"></i>
                列表管理
                <span class="fa fa-angle-down fa-lg"></span>
              </a>
              <ul>
                <li>Article列表</li>
              </ul>
            </li>
          </ul> -->
          <b-navbar toggleable="md" type="dark">
            <b-collapse id="nav-collapse" is-nav>
              <ul class="pt30">
                <li class="left-nape">
                  <a class="let-nape-list" @click="Popup">
                    <i class="fa fa-pencil"></i>
                    后台管理
                    <span class="fa fa-angle-right fa-lg"></span>
                  </a>
                  <ul class="let-nape-son" style="display: none">
                    <li><router-link to="">模块管理</router-link></li>
                    <li><router-link to="">角色管理</router-link></li>
                    <li><router-link to="">密码修改</router-link></li>
                    <li><router-link to="">账户管理</router-link></li>
                  </ul>
                </li>
                <li class="left-nape">
                  <a class="let-nape-list" @click="Popup">
                    <i class="fa fa-pencil"></i>
                    信息管理
                    <span class="fa fa-angle-right fa-lg"></span>
                  </a>
                  <ul class="let-nape-son" style="display: none">
                    <li><router-link to="">公司列表</router-link></li>
                    <li><router-link to="">职位列表</router-link></li>
                  </ul>
                </li>
                <li class="left-nape">
                  <a
                    class="let-nape-list"
                    style="border-left: 3px solid rgba(255, 255, 255)"
                    @click="Popup"
                  >
                    <i class="fa fa-pencil"></i>
                    列表管理
                    <span class="fa fa-angle-down fa-lg"></span>
                  </a>
                  <ul class="let-nape-son">
                    <li @click="show">
                      <router-link to="/alist" v-on:click="hflag = 0"
                        >Article列表</router-link
                      >
                    </li>
                  </ul>
                </li>
              </ul>
            </b-collapse>
          </b-navbar>
        </div>
      </el-col>
      <el-col :xs="24" :sm="18">
        <div class="content-right">
          <p v-if="hflag" class="f35 p30 g0">Welcome!</p>
          <router-view />
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import $ from "jquery";
import { mapState } from "vuex";
export default {
  data() {
    return {
      hflag: 1,
      popup: false,
      list: []
    };
  },
  computed: {},
  methods: {
    Popup() {
      $("ul")
        .find(".left-nape")
        .click(function() {
          $(this)
            .find("ul")
            .show();
          $(this)
            .find(".let-nape-list")
            .css("border-left", " 3px solid rgba(255, 255, 255, 1)");
          $(this)
            .find("span")
            .attr("class", "fa fa-angle-down fa-lg");
          $(this)
            .siblings()
            .find("ul")
            .hide();
          $(this)
            .siblings()
            .find(".let-nape-list")
            .css("border-left", " 3px solid rgba(255, 255, 255, 0)");
          $(this)
            .siblings()
            .find("span")
            .attr("class", "fa fa-angle-right fa-lg");
        });
    },
    show() {
      $(".f35").hide();
    }
  }
};
</script>

<style lang="scss" scoped>
.about {
  height: calc(100% - 50px);
  .content-left {
    float: left;
    width: 100%;
    min-height: 100%;
    box-sizing: border-box;
    .navbar {
      padding: 0;
      ul {
        width: 100%;
        .left-nape {
          line-height: 40px;
          font-size: 16px;
          .left-nape > a:focus,
          .left-nape > a:hover {
            background-color: rgba(58, 58, 255, 0.418);
          }
          .let-nape-list {
            display: block;
            width: 100%;
            height: 100%;
            padding: 0 10px;
            border-left: 3px solid rgba(255, 255, 255, 0);
            box-sizing: border-box;
            z-index: 3;
            .fa-pencil {
              padding-right: 15px;
            }
            .fa-pencil ~ span {
              float: right;
              line-height: 40px;
              padding-right: 5%;
            }
          }
          .let-nape-son {
            font-size: 14px;
            a {
              display: block;
              width: 100%;
              height: 100%;
              padding-left: 70px;
              color: white;
            }
            a:focus,
            a:hover {
              background-color: rgba(25, 105, 255, 0.411);
            }
          }
        }
      }
    }
  }
  @media screen and( min-width: 768px) {
    .content-right {
      min-height: 887px;
    }
  }
  .content-right {
    float: right;
    width: 100%;
    background-color: rgb(236, 234, 234);
  }
}
</style>
