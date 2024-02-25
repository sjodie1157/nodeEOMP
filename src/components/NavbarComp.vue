<template>
    <div>
        <!-- bootstrap modified navbar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <img src="https://i.postimg.cc/d3SSPcn1/remove-bg.png" alt="logo">
                <h3>TECHNOFLEX-ZONE</h3>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link active" aria-current="page" to="/">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/about">About Us</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/products">Products</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/contact">Contact</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link class="nav-link" to="/admin">Admin</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <nav class="secondNav">
            <div class="container-fluid d-flex flex-row justify-content-end">
                <h4>login</h4>
                <span> . </span>
                <h4>register</h4>
            </div>
        </nav>
        <router-view />
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
img[alt='logo'] {
    width: 75px;
}

.nav-link {
    font-size: 20px;
}
.nav-link:hover {
    color: red;
}

.secondNav {
    background-color: red;
    margin: 0;
    padding: 0;
}
</style>
