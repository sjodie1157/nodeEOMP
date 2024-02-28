<template>
  <div>
    <h2>Inventory configure</h2>
    <h1>Products</h1>
    <!-- AddProductModal component -->
    <AddproductComp />

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
              <UpdateproductComp :product="product" @editProduct="editProduct" />
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
    editProduct(product) {
      // Handle edit action here, e.g., navigate to edit page or show modal
      console.log('Edit product:', product);
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
  margin: 20px;
  background-color: red;
  border: black;
  border-radius: 5px;
}
</style>
