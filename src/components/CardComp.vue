<template>
    <div class="container">
        <div class="row">
            <div class="col d-flex flex-wrap justify-content-lg-start justify-content-center justify-content-sm-center">
                <div v-for="product in filteredProducts" :key="product.prodID">
                    <div class="card m-2" style="width: 14.9rem;">
                        <img :src="product.imgUrl" class="card-img-top" :alt="product.prodName">
                        <div class="card-body d-flex flex-column justify-content-end">
                            <h5 class="card-title">
                                <slot name="ProductName" :product="product"></slot>
                            </h5>
                            <p class="card-text">
                                <slot name="ProductDesc" :product="product"></slot>
                            </p>
                            <p class="card-text">
                                <slot name="ProductPrice" :product="product"></slot>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        filteredProducts: Array
    },
    computed: {
        latestProducts() {
            const sortedProducts = this.filteredProducts.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
            return sortedProducts.slice(0, 3);
        }
    }
}
</script>

<style scoped>
.card {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    width: 100%;
    height: 30rem;
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
}</style>
