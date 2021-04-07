import Vue from "vue";
import Vuex from "vuex";
import clientList from "./../assets/clientList.json";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    clients: clientList,
    currentComponent: "Void",
  },
  mutations: {
    setCurrentComponent(state, value) {
      state.currentComponent = value;
    },
  },
  actions: {},
  modules: {},
});
