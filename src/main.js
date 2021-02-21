import Vue from "vue";
import App from "./App.vue";
import Vuex from "vuex";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import VueRouter from "vue-router";

Vue.use(Vuex);
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0,
    count2: 1,
  },
  mutations: {
    increment(state) {
      state.count++;
    },
  },
});

new Vue({
  render: (h) => h(App),
  store,
}).$mount("#app");

// store.commit("increment");

// console.log(store.state.count); // -> 1
