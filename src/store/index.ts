import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const carrinho: object[] = [];

export default new Vuex.Store({
  state: {
    carrinho,
  },
  mutations: {
    atualizarCarrinho(state, payload) {
      state.carrinho = [...state.carrinho, payload];
    },
    limparCarrinho(state) {
      state.carrinho = [];
    },
  },
  actions: {
    atualizarCarrinho({ commit }, payload) {
      commit("atualizarCarrinho", payload);
    },
    limparCarrinho({ commit }) {
      commit("limparCarrinho");
    },
  },
  modules: {},
});
