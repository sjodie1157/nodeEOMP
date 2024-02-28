<template>
  <div>
    <div class="about" v-if="showAbout">
      <section class="sec-back1">
        <div class="container">
          <div class="row">
            <h1>About<span> Our</span> Company</h1>
            <div class="col">
              <p class="par2"> Welcome to <span>Technoflex-zone</span>, your ultimate destination for <span>cutting-edge
                  technology</span> and
                gaming
                equipment. At
                <span>Technoflex-zone</span>, we are passionate about providing top-of-the-line devices and accessories
                tailored to
                meet
                the needs of gamers and tech enthusiasts alike.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section class="sec-red"></section>
      <section class="sec-back2 d-flex justify-content-center">
        <h1>From Our <span>Store</span> To Your <span>Home</span></h1>
      </section>
      <section class="sec-red"></section>
      <section class="aboutVid flex-column align-items-center justify-content-around">
        <video src="../assets/videos/Untitled video - Made with Clipchamp (1).mp4" autoplay loop></video>
      </section>
      <section class="sec-red">
        <h2>At <span>Technoflex-zone</span>, 10% of all proceeds goes towards teaching computer literacy
          skills in schools in
          <span>under-resourced</span> communities so that the <span>youth of tomorrow</span> are not deprived of
          opportunities due to a <span>lack of skills.</span>
        </h2>
      </section>
      <section class="sec-back3 d-flex justify-content-around">
        <img src="https://i.postimg.cc/d3SSPcn1/remove-bg.png" alt="logo">
        <h1>TECHNO<span>FLEX</span>-ZONE</h1>
      </section>
    </div>
    <div v-else class="my-5">
      <SpinnerComp />
    </div>
  </div>
</template>

<script>
import SpinnerComp from '@/components/SpinnerComp.vue';

export default {
  components: {
    SpinnerComp
  },
  data() {
    return {
      showAbout: false
    };
  },
  mounted() {
    setTimeout(() => {
      this.showAbout = true;
    }, 950);
  }
}
</script>

<style scoped>
.about {
  position: relative;
}

.aboutVid {
  height: 50vh;
}

.aboutVid video {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.sec-red {
  background-color: black;
  height: 20vh;
}

.sec-back1 {
  background-image: url(https://i.postimg.cc/1Xc3rB2G/server-room.png);
  height: 75vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.sec-back2 {
  background-image: url(https://i.postimg.cc/025TnSWd/farrel-rtx-on-5.jpg);
  height: 75vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

.sec-back3 {
  background-image: url(https://i.postimg.cc/1Xc3rB2G/server-room.png);
  height: 30vh;
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: cover;
}

@media screen and (min-width: 300px) and (max-width: 720px) {
  .aboutVid {
    height: 50vh;
  }
}

@media screen and (min-width: 721px) {
  .aboutVid {
    height: 76vh;
  }
}

h1 {
  color: white;
  margin: 2em 0;
  font-size: 75px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

h2 {
  position: absolute;
  color: white;
  margin: 2em 4em;
  font-size: 35px;
  text-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5);
}

.par2 {
  color: white;
  font-size: 35px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

h4 {
  position: absolute;
  color: grey;
  font-size: 35px;
  text-shadow: 1px 1px 5px rgba(0, 0, 0, 0.5);
}

section {
  display: flex;
  align-items: center;
}

span {
  color: red;
}

img[alt="logo"] {
  width: 250px;
}
</style>
