<template>
    <div>
        <!-- Note to Naeema: Added button to trigger the Bootstrap modal and added the product ids -->
        <button type="button" class="btn my-2" data-bs-toggle="modal" :data-bs-target="'#editprodmodal' + product.prodID">
            Edit
        </button>
        <!-- Note to Naeema: Bootstrap modal for editing product Changed from the created one -->
        <div class="modal fade" :id="'editprodmodal' + product.prodID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit Product</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="editProduct">
                            <div class="mb-3">
                                <label for="prodName" class="col-form-label">Product Name:</label>
                                <input type="text" class="form-control" id="prodName" v-model="editInfo.prodName">
                            </div>
                            <div class="mb-3">
                                <label for="quantity" class="col-form-label">Quantity:</label>
                                <input type="number" class="form-control" id="quantity" v-model="editInfo.quantity">
                            </div>
                            <div class="mb-3">
                                <label for="price" class="col-form-label">Price:</label>
                                <input type="number" class="form-control" id="price" v-model="editInfo.price">
                            </div>
                            <div class="mb-3">
                                <label for="category" class="col-form-label">Category:</label>
                                <input type="text" class="form-control" id="category" v-model="editInfo.category">
                            </div>
                            <div class="mb-3">
                                <label for="prodDesc" class="col-form-label">Product Description:</label>
                                <textarea class="form-control" id="prodDesc" v-model="editInfo.prodDesc"></textarea>
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Submit</button>
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
    props: {
        product: Object
    },
    data() {
        return {
            // Note to Naeema: Initialize editInfo with current product details
            editInfo: {
                prodName: this.product.prodName,
                quantity: this.product.quantity,
                price: this.product.price,
                category: this.product.category,
                prodDesc: this.product.prodDesc
            }
        };
    },
    methods: {
        editProduct() {
            // Note to Naeema: Dispatch editProduct action with updated product information
            this.$store.dispatch('editProduct', { newInfo: this.editInfo, prodID: this.product.prodID });
            // Note to Naeema: Reload the page after editing
            setTimeout(() => {
                location.reload();
            }, 300);
        }
    }
};
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

</style>
