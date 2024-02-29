<template>
  <div>
    <h2>Inventory configure</h2>
    <h1>Products</h1>
    <!-- AddProductModal component -->
    <div class="container my-4">
      <AddproductComp />
    </div>

    <div class="table-responsive">
      <table class="table">
        <thead>
          <tr>
            <th>ProductID</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Category</th>
            <th>Product Description</th>
            <th>Action</th> <!-- Added column for action -->
          </tr>
        </thead>
        <tbody>
          <tr v-for="product in $store.state.products" :key="product.prodID">
            <td>{{ product.prodID }}</td>
            <td>{{ product.prodName }}</td>
            <td>{{ product.quantity }}</td>
            <td>{{ product.price }}</td>
            <td>{{ product.category }}</td>
            <td>{{ product.prodDesc }}</td>
            <td>
              <UpdateproductComp :product="product" @editProduct="editProduct"/>
              <button type="button" class="btn btn-danger" @click="deleteProduct(product)">Delete</button>
              <!-- Delete button -->
            </td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import AddproductComp from '@/components/AddproductComp.vue';
import UpdateproductComp from '@/components/UpdateproductComp.vue';

export default {
  components: {
    UpdateproductComp,
    AddproductComp
  },
  methods: {
    async deleteProduct(product) {
      try {
        await this.$store.dispatch('deleteProduct', product.prodID);
        this.$store.commit('removeProduct', product.prodID);
        console.log('Product deleted:', product);
        alert('Product deleted successfully');
      } catch (error) {
        console.error('Error deleting product:', error);
        alert('Failed to delete product');
      }
    },
    editProduct() {
      setTimeout(() => {
        location.reload
      }, 300);
    }
  },
  mounted() {
    try {
      this.$store.dispatch('fetchProducts');
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<style scoped>
td,
th {
  width: 200px;
  border: dotted;
}

button {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: .3pc;
    border: 2px solid red;
    color: white;
    background-color: red;
    transition: all .3s;
}

button:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    color: red;
    border-color: red;
    background-color: white;
}
</style>
