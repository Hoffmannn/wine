import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

interface Produto {
  available: boolean;
  image: string;
  name: string;
  priceMember: number;
  pricePromotional: number;
  priceStock: number;
  quantity: number;
}

const storageCarrinho = localStorage.getItem("carrinho");
let carrinho: Produto[] = [];
if (storageCarrinho) {
  carrinho = JSON.parse(storageCarrinho);
}
export default new Vuex.Store({
  state: {
    carrinho,
    wineBox: false,
  },
  mutations: {
    ATUALIZAR_CARRINHO(state, payload) {
      const novoCarrinho = state.carrinho;
      const indexProduto = novoCarrinho.findIndex(
        (p) => p.name == payload.name
      );
      if (indexProduto >= 0) {
        novoCarrinho[indexProduto] = {
          ...novoCarrinho[indexProduto],
          quantity: novoCarrinho[indexProduto].quantity + 1,
        };
        state.carrinho = novoCarrinho;
      } else state.carrinho = [...state.carrinho, payload];

      localStorage.setItem("carrinho", JSON.stringify(state.carrinho));
    },

    limparCarrinho(state) {
      state.carrinho = [];
    },

    TOGGLE_WINEBOX(state) {
      state.wineBox = !state.wineBox;
    },
  },
  actions: {
    ATUALIZAR_CARRINHO({ commit }, payload) {
      commit("ATUALIZAR_CARRINHO", payload);
    },

    TOGGLE_WINEBOX({ commit }) {
      commit("TOGGLE_WINEBOX");
    },
  },
  modules: {},
});
