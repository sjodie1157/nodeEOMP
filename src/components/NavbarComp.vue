<template>
    <div>
        <!-- bootstrap modified navbar -->
        <nav class="navbar navbar-expand-lg bg-body-tertiary fixed-top">
            <div class="container-fluid">
                <img src="https://i.postimg.cc/d3SSPcn1/remove-bg.png" alt="logo">
                <h6>TECHNOFLEX-ZONE</h6>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                    aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <router-link class="nav-link" aria-current="page" to="/">Home</router-link>
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
                <LoginComp />
                <SignupComp />
            </div>
        </nav>
    </div>
    <router-view />
</template>

<script>
import SignupComp from './SignupComp.vue';
import LoginComp from './LoginComp.vue';

export default {
    components: {
        SignupComp,
        LoginComp
    }
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
    padding: 0;
    margin: 5em 0 0 0;
    box-shadow: rgba(0, 0, 0, 0.45) 0px 25px 20px -20px;
}
</style>
