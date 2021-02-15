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

    REMOVER_ITEM(state, payload) {
      const novoCarrinho = state.carrinho.filter((item) => {
        return item != payload;
      });
      state.carrinho = novoCarrinho;

      localStorage.setItem("carrinho", JSON.stringify(state.carrinho));
    },

    ATUALIZAR_QUANTIDADE(state, payload) {
      console.log(payload.item.name);
      const novoCarrinho = state.carrinho;
      const indexProduto = novoCarrinho.findIndex(
        (p) => p.name == payload.item.name
      );

      novoCarrinho[indexProduto] = {
        ...novoCarrinho[indexProduto],
        quantity: novoCarrinho[indexProduto].quantity + payload.quantidade,
      };
      state.carrinho = [...novoCarrinho];

      localStorage.setItem("carrinho", JSON.stringify(state.carrinho));
    },

    TOGGLE_WINEBOX(state) {
      state.wineBox = !state.wineBox;
    },
  },
  actions: {
    ATUALIZAR_CARRINHO({ commit }, payload) {
      commit("ATUALIZAR_CARRINHO", payload);
    },

    REMOVER_ITEM({ commit }, payload) {
      commit("REMOVER_ITEM", payload);
    },

    ATUALIZAR_QUANTIDADE({ commit }, payload) {
      commit("ATUALIZAR_QUANTIDADE", payload);
    },

    TOGGLE_WINEBOX({ commit }) {
      commit("TOGGLE_WINEBOX");
    },
  },
  modules: {},
});
