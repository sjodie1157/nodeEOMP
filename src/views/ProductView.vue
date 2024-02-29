<template>
    <div>
        <div v-if="product">
            <div class="container">
                <div class="row">
                    <div class="col d-flex justify-content-start">
                        <img :src="product[0].imgUrl" alt="product">
                    </div>
                    <div class="col d-flex flex-column align-items-start my-3">
                        <h2>Item Name: {{ product[0].prodName }}</h2>
                        <h3>Price: R{{ product[0].price }}</h3>
                        <h3 class="d-flex align-items-start">Specs: {{ product[0].prodDesc }}</h3>
                        <button type="button">Add To Cart</button>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex justify-content-start mt-5">
                        <h3>Reviews</h3>
                    </div>
                </div>
                <div class="row">
                    <div class="col d-flex align-items-center">
                        <img src="https://i.postimg.cc/RC7bCcy8/pngtree-user-avatar-placeholder-png-image-3918418-removebg-preview.png"
                            alt="User">
                    </div>
                    <div class="col d-flex align-items-center">
                        <h4>John Smith</h4>
                    </div>
                    <div class="col d-flex align-items-center">
                        <h4>This is a exceptional product</h4>
                    </div>
                    <div class="col d-flex flex-column align-items-center ">
                        <h4>Rating:</h4>
                        <div class="star-rating"></div>
                    </div>
                </div>
            </div>
        </div>
        <div v-else>
            <SpinnerComp />
            <div id="space"></div>
        </div>
    </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
    components: {
        SpinnerComp
    },
    computed: {
        product() {
            return this.$store.state.product;
        }
    },
    mounted() {
        let prodID = +this.$route.path.split('/').at(-1);
        this.$store.dispatch('fetchProduct', prodID);
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

#space {
    height: 20vh;
}

.star-rating {
    font-size: 24px;
}

.star-rating::before {
    content: '★ ★ ★ ★ ★';
    background: linear-gradient(to right, red 80%, rgb(0, 0, 0) 80%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

img[alt="User"] {
    width: 100px;
}

img[alt="product"] {
    width: 275px;
    border: 2px solid rgba(0, 0, 0, 0.351);
    border-radius: .5pc;
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}

.container {
    margin: 3rem auto auto auto;
}
</style>
