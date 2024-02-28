<template>
    <div>
        <h1>Contact us</h1>
        <h2>Get in touch with us by completing this form</h2>
        <form @submit.prevent 
        action="https://formspree.io/f/xaygazkl"
        method="POST"> 
        <div class="row">
            <div class="col-6">
                <label>First name</label>
                <input type="firstName" placeholder="Enter your first name here" v-model="formData.firstName">
            </div>
            <div class="col-6">
                <label>Last name</label>
                <input type="LastName" placeholder="Enter your last name here" v-model="formData.lastName">
            </div>
        </div>
        <div class="row">
            <div class="col-6">
                <label>Email address</label>
                <input type="email" placeholder="Enter your emails here" v-model="formData.emailAddress">
            </div>
            <div class="col-6">
                <label>Message</label>
                <input type="text" placeholder="Type your message here" v-model="formData.userMessage">
            </div>
        </div>
                <button type="submit" @click="submitBtn">Submit</button>
                <button @click="clearInput">Clear</button>
            <p>{{ submitMessage }}</p>
        </form>
        <h2 class="addressPtag">Alternatively: Call or visit us directly </h2>
        <p class="addressPtag mt-3">Cell: 079 000 0000</p>
        <h2 class="addressPtag mt-3">Address: </h2>
        <div class="addressPtag mt-3">
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
        data(){
            return{
                formData: {
                    firstName: null,
                    lastName: null,
                    emailAddress: null,
                    userMessage: null
                },
                submitMessage: null
            }
        },
        computed: {
            
        },
        methods:{
            clearInput(){
                    this.$data.formData.firstName = "",
                    this.$data.formData.lastName = "",
                    this.$data.formData.emailAddress = "",
                    this.$data.formData.userMessage = ""
            },
            submitBtn(){
                // NOTE: The @submit.prevent of line 5 prevents the formspree page from loading
                // Custom validation needed instead of the require parameter
                let checkFirstName = this.$data.formData.firstName
                let checkLastName = this.$data.formData.lastName
                let checkEmail = this.$data.formData.emailAddress
                let checkUserMsg = this.$data.formData.userMessage

                if (checkFirstName && checkLastName && checkEmail && checkUserMsg){
                    alert("You've submitted all your fields correctly. Thank you for contacting us")
                    this.clearInput()
                } else {
                    alert("Please enter all the fields before submitting the form" )
                }
            }
        }
    }
</script>

<style scoped>

label, input {
    margin: 5px;
}

label {
    width: 150px;
}

button {
    margin: 20px;
    background-color: red;
    /* border: none; */
    border-radius: 5px;
}

.addressPtag {
    margin-inline: 100px;
    width: fit-content;
}

</style>