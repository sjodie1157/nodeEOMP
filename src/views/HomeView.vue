<template>
  <div class="home">
    <div id="carouselExampleDark" class="carousel carousel slide">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="5000">
          <img src="https://i.postimg.cc/9F6rzBfF/AMD-RX-7600-XT-slider-banner-2560px-v1.webp" class="d-block w-100"
            alt="car" loading="eager">
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="https://i.postimg.cc/t4q83KJr/RTX-40-Series-Laptops-slider-banner-2560px-v1.webp"
            class="d-block w-100" alt="car" loading="eager">
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
        <div class="carousel-item" data-bs-interval="5000">
          <img src="https://i.postimg.cc/ncZ4MZSP/intel-14th-gen-laptops-2560px-v1.webp" class="d-block w-100" alt="car"
            loading="eager">
          <div class="carousel-caption d-none d-md-block"></div>
        </div>
      </div>
    </div>
  </div>
  <section>
    <h2>Latest Products</h2>
    <div v-if="latestProducts.length > 0">
      <CardComp :filteredProducts="latestProducts" class="d-flex justify-content-center">
        <template #ProductName="{ product }">
          {{ product.prodName }}
        </template>
        <template #ProductDesc="{ product }">
          {{ product.prodDesc }}
        </template>
      </CardComp>
    </div>
    <div v-else>
      <SpinnerComp />
    </div>
  </section>
</template>

<script>
import CardComp from '@/components/CardComp.vue';
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  name: 'HomeView',
  components: {
    CardComp,
    SpinnerComp
  },
  computed: {
    latestProducts() {
      if (this.$store.state.products) {
        const sortedProducts = this.$store.state.products.slice().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
        return sortedProducts.slice(0, 3);
      } else {
        return [];
      }
    }
  },
  mounted() {
    setTimeout(() => {
      try {
        this.$store.dispatch('fetchProducts');
      } catch (error) {
        alert('No Database Connection',error)
      }
    }, 750);
  }
}
</script>