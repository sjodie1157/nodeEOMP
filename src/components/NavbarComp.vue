<template>
    <div>
        <nav>
            <router-link to="/">Home</router-link> |
            <router-link to="/about">About</router-link> |
            <router-link to="/products">Products</router-link> |
            <router-link to="/product">Product</router-link> |
            <router-link to="/admin">Admin</router-link> |
            <router-link to="/contact">Contact</router-link>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>

</style>
