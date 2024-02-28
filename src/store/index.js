import { createStore } from 'vuex';
import axios from 'axios';

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
    },
    removeProduct(state, prodID) {
      state.products = state.products.filter(product => product.prodID !== prodID);
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
    },
    async editProduct(context, { newInfo, prodID }) {
      try {
        await axios.patch(`https://nodeeomp-api.onrender.com/products/${prodID}`, newInfo);
      } catch (error) {
        console.error('Error editing product:', error);
        throw new Error('Failed to edit product');
      }
    },
    async addProduct(context, newInfo) {
      try {
        await axios.post(`https://nodeeomp-api.onrender.com/products`, newInfo);
      } catch (error) {
        console.error('Error adding product:', error);
        throw new Error('Failed to add product');
      }
    },
    async deleteProduct(context, prodID) {
      try {
        await axios.delete(`https://nodeeomp-api.onrender.com/products/${prodID}`);
        context.commit('removeProduct', prodID);
      } catch (error) {
        console.error('Error deleting product:', error);
        throw new Error('Failed to delete product');
      }
    }
  },
  modules: {
  }
});
