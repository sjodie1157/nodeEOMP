import { createStore } from 'vuex';
import axios from 'axios';

export default createStore({
  state: {
    products: null,
    product: null,
    users: null,
    loadingProducts: false,
    loadingUsers: false
  },
  getters: {
    allProducts(state) {
      return state.products;
    },
    getProduct(state) {
      return state.product;
    },
    allUsers(state) {
      return state.users;
    },
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
    },
    setUser(state, value) {
      state.users = value;
    },
    removeUser(state, userID) {
      state.users = state.users.filter(user => user.userID !== userID);
    },
    setLoadingProducts(state, value) {
      state.loadingProducts = value;
    },
    setLoadingUsers(state, value) {
      state.loadingUsers = value;
    }
  },
  actions: {
    async fetchProducts(context) {
      try {
        context.commit('setLoadingProducts', true);
        let res = await fetch(`https://nodeeomp-api.onrender.com/products`);
        if (!res.ok) {
          throw new Error('Failed to fetch products');
        }
        let json = await res.json();
        context.commit('setProducts', json);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        context.commit('setLoadingProducts', false);
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
    },
    async fetchUsers(context) {
      try {
        context.commit('setLoadingUsers', true);
        let res = await fetch(`https://nodeeomp-api.onrender.com/users`);
        if (!res.ok) {
          throw new Error('Failed to fetch users');
        }
        let json = await res.json();
        context.commit('setUser', json);
      } catch (error) {
        console.error('Error fetching users:', error);
      } finally {
        context.commit('setLoadingUsers', false);
      }
    },
    async editUser(context, { newInfo, userID }) {
      try {
        await axios.patch(`https://nodeeomp-api.onrender.com/users/${userID}`, newInfo);
      } catch (error) {
        console.error('Error editing user:', error);
        throw new Error('Failed to edit user');
      }
    },
    async addUser(context, newInfo) {
      try {
        await axios.post(`https://nodeeomp-api.onrender.com/users`, newInfo);
      } catch (error) {
        console.error('Error adding user:', error);
        throw new Error('Failed to add user');
      }
    },
    async deleteUser(context, userID) {
      try {
        await axios.delete(`https://nodeeomp-api.onrender.com/users/${userID}`);
        context.commit('removeUser', userID);
      } catch (error) {
        console.error('Error deleting user:', error);
        throw new Error('Failed to delete user');
      }
    }
  },
  modules: {
  }
});
