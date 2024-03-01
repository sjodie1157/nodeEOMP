<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addprodmodal"
            data-bs-whatever="@mdo">Add Product</button>

        <!-- Modal -->
        <div class="modal fade" id="addprodmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">New Product</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addProduct">
                            <div class="mb-3">
                                <label for="prodName" class="col-form-label">Product Name:</label>
                                <input type="text" class="form-control" id="prodName" v-model="newProduct.prodName">
                            </div>
                            <div class="mb-3">
                                <label for="quantity" class="col-form-label">Quantity:</label>
                                <input type="text" class="form-control" id="quantity" v-model="newProduct.quantity">
                            </div>
                            <div class="mb-3">
                                <label for="price" class="col-form-label">Price:</label>
                                <input type="number" class="form-control" id="price" v-model="newProduct.price">
                            </div>
                            <div class="mb-3">
                                <label for="category" class="col-form-label">Category:</label>
                                <input type="text" class="form-control" id="category" v-model="newProduct.category">
                            </div>
                            <div class="mb-3">
                                <label for="prodDesc" class="col-form-label">Product Description:</label>
                                <textarea class="form-control" id="prodDesc" v-model="newProduct.prodDesc"></textarea>
                            </div>
                            <div class="mb-3">
                                <label for="imgUrl" class="col-form-label">Image URL:</label>
                                <input type="text" class="form-control" id="imgUrl" v-model="newProduct.imgUrl">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" @click="closeModal">Close</button>
                                <button type="submit" class="btn btn-primary">Add Product</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            newProduct: {
                prodName: null,
                quantity: null,
                price: null,
                category: null,
                prodDesc: null,
                imgUrl: null
            }
        };
    },
    methods: {
        addProduct() {
            try {
                // Note to Naeema: Generate unique ID for the new product
                const timestamp = Date.now();
                this.newProduct.prodID = timestamp;

                // Note to Naeema: Dispatch addProduct action with new product data
                this.$store.dispatch('addProduct', this.newProduct);

                // Note to Naeema: Clear input fields after adding the product
                this.clearInputFields();

                // Note to Naeema: Show alert when product is successfully added
                alert("Product has been added successfully!");

                // Note to Naeema: Close modal after adding the product
                this.closeModal();
            } catch (error) {
                // Note to Naeema: Handle error if dispatch fails
                console.error("Error adding product:", error);
                alert("Failed to add product. Please try again.");
            }
        },
        clearInputFields() {
            // Note to Naeema: Clear all input fields in newProduct object
            Object.keys(this.newProduct).forEach(key => {
                this.newProduct[key] = null;
            });
        },
        closeModal() {
            setTimeout(() => {
                location.reload();
            }, 300);
        }
    }
}
</script>

<style scoped>
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

input:focus,textarea:focus {
    min-width: 2em;
    border-color: red;
    box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
}
</style>
