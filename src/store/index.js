import { createStore } from 'vuex';

export default createStore({
  state: {
    products: null,
    product: null
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    }
  },
  mutations: {
    setProducts(state, value) {
      state.products = value;
    },
    setProduct(state, value) {
      state.product = value;
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        let res = await fetch(`https://nodeeomp-api.onrender.com/products`);
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        let json = await res.json();
        context.commit('setProducts', json);
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    },
    async fetchProduct(context, prodID) {
      try {
        let res = await fetch(`https://nodeeomp-api.onrender.com/products/${prodID}`);
        if (!res.ok) {
          throw new Error('Failed to fetch product');
        }
        let json = await res.json();
        context.commit('setProduct', json);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
  },
  modules: {
  }
});
