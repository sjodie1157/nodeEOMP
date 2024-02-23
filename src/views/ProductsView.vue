<template>
    <div>
        <ul>
            <li v-for="product in products" :key="product.prodID">
                {{ product.prodName }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    computed: {
        products() {
            return this.$store.state.products;
        }
    },
    mounted() {
        this.$store.dispatch('fetchProducts');
    },
    methods: {

    },
};
</script>

<style scoped></style>
