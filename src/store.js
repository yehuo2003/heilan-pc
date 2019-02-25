import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    // this.$store.state.userName调用
    userName: "", //当前登录的用户名
    pcUrl: "http://yehuo-img.stor.sinaapp.com/img/pc/",
    imgUrl: "http://127.0.0.1:3000/img/", //图片地址
    apiUrl: "http://127.0.0.1:3000/pc/" //后端地址
  },
  mutations: {
    // 控制数据进化
    // this.$store.commit('setuserName','tom')
    setuserName(state, value) {
      state.userName = value;
    }
  },
  actions: {}
});
