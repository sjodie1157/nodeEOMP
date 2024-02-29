<template>
    <div>
        <!-- Note to Naeema: Added button to trigger the Bootstrap modal and added the product ids -->
        <button type="button" class="btn my-2" data-bs-toggle="modal" :data-bs-target="'#editusermodal' + user.userID">
            Edit
        </button>
        <!-- Note to Naeema: Bootstrap modal for editing product Changed from the created one -->
        <div class="modal fade" :id="'editusermodal' + user.userID" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="editUser">
                            <div class="mb-3">
                                <label for="username" class="col-form-label">Username:</label>
                                <input type="text" class="form-control" id="username" v-model="newUser.username">
                            </div>
                            <div class="mb-3">
                                <label for="txtPassword" class="col-form-label">Password:</label>
                                <input type="text" class="form-control" id="txtPassword" v-model="newUser.txtPassword">
                            </div>
                            <div class="mb-3">
                                <label for="firstName" class="col-form-label">First Name:</label>
                                <input type="text" class="form-control" id="firstName" v-model="newUser.firstName">
                            </div>
                            <div class="mb-3">
                                <label for="lastName" class="col-form-label">Last Name:</label>
                                <input type="text" class="form-control" id="lastName" v-model="newUser.lastName">
                            </div>
                            <div class="mb-3">
                                <label for="userAge" class="col-form-label">User Age:</label>
                                <input type="number" class="form-control" id="userAge" v-model="newUser.userAge">
                            </div>
                            <div class="mb-3">
                                <label for="gender" class="col-form-label">Gender:</label>
                                <input type="text" class="form-control" id="gender" v-model="newUser.gender">
                            </div>
                            <div class="mb-3">
                                <label for="emailAddress" class="col-form-label">Email Address:</label>
                                <input type="email" class="form-control" id="emailAddress" v-model="newUser.emailAddress">
                            </div>
                            <div class="mb-3">
                                <label for="userProfile" class="col-form-label">User Profile:</label>
                                <input type="text" class="form-control" id="userProfile" v-model="newUser.userProfile">
                            </div>
                            <div class="mb-3">
                                <label for="userRole" class="col-form-label">User Role:</label>
                                <input type="text" class="form-control" id="userRole" v-model="newUser.userRole">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                <button type="submit" class="btn btn-primary">Submit</button>
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
    props: {
        product: Object
    },
    data() {
        return {
            // Note to Naeema: Initialize editInfo with current product details
            editInfo: {
                username: null,
                txtPassword: null,
                firstName: null,
                lastName: null,
                userAge: null,
                gender: null,
                emailAdd: null,
                userProfile: null,
                userRole: null
            }
        };
    },
    methods: {
        editUser() {
            try {
                // Note to Naeema: Dispatch editUser action with updated user information
            this.$store.dispatch('editUser', { newInfo: this.editInfo, userID: this.user.userID });
            // Note to Naeema: Reload the page after editing
            setTimeout(() => {
                location.reload();
            }, 300);
            } catch (err) {console.log(`This is the updateUserComp. The following error was found ${err}`)}
            
        }
    }
};
</script>

<style scoped>
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

</style>
