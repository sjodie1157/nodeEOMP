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
    <h1>Latest Products</h1>
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
  <section>
    <div class="container my-5">
      <h2>Partnered By</h2>
      <div class="row">
        <div class="col">
          <img src="https://i.postimg.cc/nhmBZb53/image-2024-02-26-233023603.png" alt="partner">
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/6phRTLWZ/processor-overview-framed-badge-rwd-jpg-rendition-intel-web-480-270.jpg"
            alt="partner">
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/MKmXY6C2/05-Mv-Zi-HAYTFEo-BAux-Ou0-Tcl-12.webp" alt="partner">
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/52tvYQ6k/HD-wallpaper-asus-carbon-logo-grunge-art-carbon-background-creative-asus-black-logo-asus-logo-asus.jpg" alt="partner">
        </div>
        <div class="col">
          <img src="https://i.postimg.cc/sgSzJwQB/C64-ADF9-E-9-B21-41-B2-BB4-E-B61164-D6735-F.png" alt="partner">
        </div>
      </div>
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
        return sortedProducts.slice(0, 5);
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
        alert('No Database Connection', error)
      }
    }, 750);
  }
}
</script>

<style scoped>
img[alt="partner"] {
  width: 150px;
  margin: 2em;
  border-radius: .3pc;
  filter: gray;
  -webkit-filter: grayscale(100%);
  -webkit-transition: all .6s ease;
  -webkit-backface-visibility: hidden;
}

img[alt="partner"]:hover {
  -webkit-filter: grayscale(0%);
  width: 175px;
}</style>