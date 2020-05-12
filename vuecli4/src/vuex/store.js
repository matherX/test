import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

//1.state在vuex中用于储存数据
var state = {
  count: 1,
  list: []
};

//2.mutations里面放的时方法，方法主要用于改变state里面的数据
var mutations = {
  incCount() {
    ++state.count;
  },
  addList(state, data) {
    state.list.push(data);
  }
};

//3、有点类似计算属性， 该百年state里面的count数据的时候会出发getters里面的方法获取新的值
var getters = {
  computed: state => {
    return state.count * 2;
  }
};

//4.Action 类似于mutation，不同在于，
//Action提交的时mutation，为不是直接变更状态
//Action可以提交包含任意异步擦操作
var actions = {
  incMutatincCount(context) {
    context.commit("incCount");
  }
};

//vuex 实例化Vuex.state
const store = new Vuex.Store({
  state,
  mutations,
  getters,
  actions
});

export default store;
