import { createStore } from "vuex";
import user from "@/store/user";

export default createStore({
  //state：存储状态信息，如用户状态
  //actions（异步）： 执行异步操作，并且触发mutation
  //mutation（同步）：定义了对变量进行增删改的方法
  mutations: {},
  actions: {},
  modules: {
    user,
  },
});
