import { createStore } from 'vuex';

let serverURL = 'https://tnfz-backend.onrender.com/';

export default createStore({
  state: {
    products: null,
  },
  getters: {
    products(state) {
      return state.products;
    }
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    }
  },
  actions: {
    async fetchProducts(context) {
      let res = await fetch(`${serverURL}items`);
      let json = await res.json();
      context.commit('setProducts', json)
      console.log(context);
    },
  },
  modules: {
  }
});
