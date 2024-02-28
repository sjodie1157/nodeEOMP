<template>
    <div>
        <h2>Inventory configure</h2>
        <h1>Products</h1>
        <!-- Button trigger modal -->
<button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop1">
    Add a new product
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop1" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2>Please enter the details for the new product</h2>
        <p class="mt-3">Product Name</p>
        <input type="text" v-model="addInfo.prodName">
        <p class="mt-3">Quantity</p>
        <input type="text" v-model="addInfo.quantity">
        <p class="mt-3">Price</p>
        <input type="text" v-model="addInfo.price">
        <p class="mt-3">Category</p>
        <input type="text" v-model="addInfo.category">
        <p class="mt-3">Product Description</p>
        <input type="text" v-model="addInfo.prodDesc">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn btn-primary" @click="addProduct()">Submit</button>
      </div>
    </div>
  </div>
</div>
        <div class="table-responsive">
            <table class="table">
                <div v-for="product in $store.state.products" :key="product.prodID">
                    <tr>
                        <th>ProductID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>Category</th>
                        <th>Product Description</th>
                    </tr>
                    <tr >
                        <td>{{product.prodID}}</td>
                        <td>{{product.prodName}}</td>
                        <td>{{product.quantity}}</td>
                        <td>{{product.price}}</td>
                        <td>{{product.category}}</td>
                        <td>{{product.prodDesc}}</td>
                        <td><!-- Button trigger modal -->
<button type="button" class="btn" data-bs-toggle="modal" data-bs-target="#staticBackdrop"> Edit
</button>

<!-- Modal -->
<div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="staticBackdropLabel">Modal title</h5>
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div class="modal-body">
        <h2>Please enter the values you would like to change for the product</h2>
        <p class="mt-3">Product ID</p>
        <input type="text" v-model="editInfo.prodID">
        <p class="mt-3">Product Name</p>
        <input type="text" v-model="editInfo.prodName">
        <p class="mt-3">Quantity</p>
        <input type="text" v-model="editInfo.quantity">
        <p class="mt-3">Price</p>
        <input type="text" v-model="editInfo.price">
        <p class="mt-3">Category</p>
        <input type="text" v-model="editInfo.category">
        <p class="mt-3">Product Description</p>
        <input type="text" v-model="editInfo.prodDesc">
      </div>
      <div class="modal-footer">
        <button type="button" class="btn" data-bs-dismiss="modal">Close</button>
        <button type="submit" class="btn" @click="editProduct()">Submit</button>
      </div>
    </div>
  </div>
</div></td>
                    </tr>
                </div>
            </table>
        </div>
        
    </div>
</template>

<script>
export default {
    data(){return{
        editInfo: {
            prodID: null,
            prodName:null,
            quantity:null,
            price:null,
            category: null,
            prodDesc: null
        },
        addInfo: {
            prodID: null,
            prodName:null,
            quantity:null,
            price:null,
            category: null,
            prodDesc: null
        }
        
    }},
    methods:{
        editProduct(){
            this.$store.dispatch('editProduct', this.$data.editInfo)
            // window.location.reload();
        },
        addProduct(){
            this.$store.dispatch('addProduct', this.$data.addInfo)
            // window.location.reload();
        }
    },
    computed:{},
    mounted(){
        try{
            this.$store.dispatch('fetchProducts')
            // commenting out the getProducts computed method and then using .dispatch in mounted to get the products from the store is what allows the products to display even after refreshing
        } catch(error){
            console.error(error)
        }
        
    }
}
</script>

<style scoped>
td, th{
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