<template>
    <div id="footer">
        <div class="container">
            <div class="row">
                <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-start my-3">
                    <h2>Find Out More About US</h2>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-12 d-flex justify-content-around my-3">
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-twitter-x"></i>
                    <i class="bi bi-youtube"></i>
                </div>
            </div>
            <div class="row">
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex flex-column align-items-sm-center align-items-lg-start">
                    <h2>Shop</h2>
                    <div class="col d-flex flex-column align-items-sm-center align-items-lg-start">
                        <h4>Clearance Sale</h4>
                        <h4>Tech’sure</h4>
                        <h4>Monthly Grabs</h4>
                        <h4>Newly Listed</h4>
                        <h4>Gift Vouchers</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex flex-column align-items-sm-center align-items-lg-start">
                    <h2>Help</h2>
                    <div class="col d-flex flex-column align-items-sm-center align-items-lg-start">
                        <h4>Technicians</h4>
                        <h4>Contact Us</h4>
                        <h4>Suggest Tech</h4>
                        <h4>Returns</h4>
                        <h4>Shipping & delivery</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex flex-column align-items-sm-center align-items-lg-start">
                    <h2>Account</h2>
                    <div class="col d-flex flex-column align-items-sm-center align-items-lg-start">
                        <h4>Your Account</h4>
                        <h4>Your Orders</h4>
                        <h4>Invoices</h4>
                        <h4>Log Out</h4>
                    </div>
                </div>
                <div class="col-lg-3 col-md-6 col-sm-6 d-flex flex-column align-items-sm-center align-items-lg-start">
                    <h2>Company</h2>
                    <div class="col d-flex flex-column align-items-sm-center align-items-lg-start">
                        <h4>About Us</h4>
                        <h4>About Us</h4>
                        <h4>Sell to technoflex-zone</h4>
                        <h4>Terms & Conditions</h4>
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-between">
                <h3>Follow us on</h3>
            </div>
            <div class="row">
                <h4>Copyright &copy; {{ currentYear }} - All rights reserved by Technoflex-zone</h4>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    computed: {
        currentYear() {
            return new Date().getFullYear();
        }
    }
}
</script>

<style scoped>
#footer {
    background-color: black;
    color: white;
    position: relative;
    bottom: 0;
}

h2 {
    color: white;
}

i {
    color: rgb(158, 158, 158);
    transition: all .3s;
}

i:hover {
    color: red;
}

h4 {
    color: rgb(176, 176, 176);
    font-weight: 400;
    font-family: "Quicksand", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    font-size: 20px;
}

@media screen and (min-width: 300px) and (max-width: 720px) {
    h4 {
        font-size: 10px;
    }

    h2 {
        font-size: 20px;
    }
}
</style>
