<template>
    <div>
        <button id="regBtn" type="button" class="btn" data-bs-toggle="modal" data-bs-target="#loginmodal"
            data-bs-whatever="@fat">Log In
        </button>

        <div class="modal fade" id="loginmodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-body">
                        <form>
                            <div class="container">
                                <div class="row">
                                    <div class="col" id="modalimg">
                                        <img src="https://i.postimg.cc/qvzGbcQx/The-Colossus-removebg-preview.png"
                                            alt="login">
                                    </div>
                                    <div class="col">
                                        <h1>
                                            Log In
                                        </h1>
                                        <div class="mb-0">
                                            <label for="message-text" id="recipient-email" class="col-form-label"></label>
                                            <input type="text" class="form-control" id="recipient-email"
                                                placeholder="Enter Your Email Here">
                                        </div>
                                        <div class="mb-0">
                                            <label for="message-text" id="recipient-name" class="col-form-label"></label>
                                            <input type="text" class="form-control" id="recipient-name"
                                                placeholder="Enter Your Name Here">
                                        </div>
                                        <div class="mb-0">
                                            <label for="message-text" id="recipient-surname" class="col-form-label"></label>
                                            <input type="text" class="form-control" id="recipient-surname"
                                                placeholder="Enter Your Surname Here">
                                        </div>
                                        <div class="mb-3">
                                            <label for="message-text" id="recipient-pass" class="col-form-label"></label>
                                            <input type="password" class="form-control" id="recipient-pass"
                                                placeholder="Create Password">
                                        </div>
                                        <button type="button" class="btn1" data-bs-dismiss="modal">Close</button>
                                        <button type="button" class="btn1">Sign Up</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style scoped>
/* modal */

img[alt="login"] {
    width: 18rem;
    position: absolute;
    left: -.5em;
    margin: 0;
    transition: all .5s;
}

img[alt="login"]:hover {
    width: 19rem;
}

.modal-body {
    margin: 0;
    padding: 0;
    background-image: linear-gradient(rgba(255, 255, 255, 0), white);
    transition: background-color .5s ease;
}

.modal-body:hover {
    background-color: red;
}

.modal-content {
    overflow: hidden;
    width: 60rem;
    position: relative;
    right: 45%;
}

/* buttons */

.btn1 {
    background-color: red;
    border: 2px solid red;
    margin: 2px 5.3em;
    border-radius: .3pc;
    color: white;
    transition: all .3s;
}

.btn1:hover {
    background-color: white;
    border-color: red;
    color: red;
}
</style>