<template>
  <div class="about">
    <section class="sec-back1">
      <div class="container">
        <div class="row">
          <h1>Technoflex-zone</h1>
          <div class="col">
            <p class="par2"> Welcome to Technoflex-zone, your ultimate destination for cutting-edge technology and gaming equipment. At
              Technoflex-zone, we are passionate about providing top-of-the-line devices and accessories tailored to meet
              the needs of gamers and tech enthusiasts alike.
            </p>
          </div>
        </div>
      </div>
    </section>
    <section class="sec-red">
    </section>
    <section class="sec-back2">
    </section>
    <section class="sec-red"></section>
    <section class="aboutVid">
      <video src="../assets/videos/Untitled video - Made with Clipchamp (1).mp4" autoplay loop></video>
    </section>
  </div>
</template>

<style>
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
  height: 15vh;
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
}

#par2 {
  color: red;
}
.par2 {
  color: grey;
  font-size: 30px;
}


section {
  display: flex;
  align-items: center;
}
</style>
