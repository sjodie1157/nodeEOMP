<template>
    <div class="container">
        <h1>Contact us</h1>
        <h2>Get in touch with us by completing this form</h2>
        <form @submit.prevent action="https://formspree.io/f/xaygazkl" method="POST">
            <div class="row">
                <div class="col-md-6">
                    <label>First name</label>
                    <input type="text" class="form-control" placeholder="Enter your first name here"
                        v-model="formData.firstName">
                </div>
                <div class="col-md-6">
                    <label>Last name</label>
                    <input type="text" class="form-control" placeholder="Enter your last name here"
                        v-model="formData.lastName">
                </div>
            </div>
            <div class="row mt-3">
                <div class="col-md-6">
                    <label>Email address</label>
                    <input type="email" class="form-control" placeholder="Enter your email here"
                        v-model="formData.emailAddress">
                </div>
                <div class="col-md-6">
                    <label>Message</label>
                    <input type="text" class="form-control" placeholder="Type your message here"
                        v-model="formData.userMessage">
                </div>
            </div>
            <div class="mt-3 d-flex justify-content-evenly">
                <button type="submit" class="btn btn-primary me-4" @click="submitBtn">Submit</button>
                <button type="button" class="btn btn-secondary" @click="clearInput">Clear</button>
            </div>
            <p class="mt-3">{{ submitMessage }}</p>
        </form>
        <h2 class="mt-5">Alternatively: Call or visit us directly</h2>
        <p class="mt-3">Cell: 079 000 0000</p>
        <h2 class="mt-3">Address:</h2>
        <div class="mt-3">
            <p>25 Loop Street</p>
            <p>Grassy Park</p>
            <p>Cape Town</p>
            <p>Western Cape</p>
            <p>7941</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            formData: {
                firstName: '',
                lastName: '',
                emailAddress: '',
                userMessage: ''
            },
            submitMessage: null
        };
    },
    methods: {
        clearInput() {
            this.formData.firstName = '';
            this.formData.lastName = '';
            this.formData.emailAddress = '';
            this.formData.userMessage = '';
        },
        submitBtn() {
            let checkFirstName = this.formData.firstName;
            let checkLastName = this.formData.lastName;
            let checkEmail = this.formData.emailAddress;
            let checkUserMsg = this.formData.userMessage;

            if (checkFirstName && checkLastName && checkEmail && checkUserMsg) {
                this.submitMessage = "You've submitted all your fields correctly. Thank you for contacting us";
                alert('Submit Successful')
                this.clearInput();
            } else {
                this.submitMessage = "Please enter all the fields before submitting the form";
            }
        }
    }
};
</script>
<style scoped>

label, input {
    margin: 5px;
}

label {
    width: 150px;
}

button {
    box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
    border-radius: .3pc;
    border: 2px solid red;
    color: white;
    background-color: red;
    transition: all .3s;
}

button:hover {
    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
    color: red;
    border-color: red;
    background-color: white;
}

.addressPtag {
    margin-inline: 100px;
    width: fit-content;
}

input:hover {
     box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
}
input:focus {
    min-width: 2em;
    border-color: red;
    box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
}

</style>