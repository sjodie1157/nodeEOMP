<template>
    <div>
        <!-- Button trigger modal -->
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addusermodal"
            data-bs-whatever="@mdo">Add User</button>

        <!-- Modal -->
        <div class="modal fade" id="addusermodal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">New User</h1>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"
                            @click="closeModal"></button>
                    </div>
                    <div class="modal-body">
                        <form>
                            <div class="mb-3">
                                <label for="username" class="col-form-label">User Name:</label>
                                <input type="text" class="form-control" id="username" v-model="newUser.username">
                            </div>
                            <div class="mb-3">
                                <label for="hashPassword" class="col-form-label">Password:</label>
                                <input type="password" class="form-control" id="hashPassword" v-model="newUser.hashPassword">
                            </div>
                            <div class="mb-3">
                                <label for="firstName" class="col-form-label">firstName:</label>
                                <input type="text" class="form-control" id="firstName" v-model="newUser.firstName">
                            </div>
                            <div class="mb-3">
                                <label for="lastName" class="col-form-label">lastName:</label>
                                <input type="text" class="form-control" id="lastName" v-model="newUser.lastName">
                            </div>
                            <div class="mb-3">
                                <label for="userAge" class="col-form-label">User age:</label>
                                 <input type="number" class="form-control" id="userAge" v-model="newUser.userAge">
                            </div>
                            <div class="mb-3">
                                <label for="gender" class="col-form-label">gender:</label>
                                <input type="text" class="form-control" id="gender" v-model="newUser.gender">
                            </div>
                            <div class="mb-3">
                                <label for="emailAddress" class="col-form-label">email Address:</label>
                                <input type="email" class="form-control" id="emailAddress" v-model="newUser.emailAddress">
                            </div>
                            <div class="mb-3">
                                <label for="userProfile" class="col-form-label">user Profile:</label>
                                <input type="text" class="form-control" id="userProfile" v-model="newUser.userProfile">
                            </div>
                            <div class="modal-footer">
                                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal"
                                    @click="closeModal">Close</button>
                                <button type="submit" class="btn btn-primary" @click="addUser">Add User</button>
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
    data() {
        return {
            newUser: {
                userID: null,
                username: null,
                hashPassword: null,
                firstName: null,
                lastName: null,
                userAge: null,
                gender: null,
                emailAddress: null,
                userProfile: null,
                userRole: null
            }
        };
    },
    methods: {
        addUser() {
            // Note to Naeema: Generate unique ID for the new User
            const timestamp = Date.now();
            this.newUser.userID = timestamp;

            // Note to Naeema: Dispatch addUser action with new User data
            this.$store.dispatch('setUser', this.newUser);

            // Note to Naeema: Clear input fields after adding the User
            this.clearInputFields();

            // Note to Naeema: Reload page after adding the User
            this.closeModal()
        },
        clearInputFields() {
            // Note to Naeema: Clear all input fields in newUser object
            Object.keys(this.newUser).forEach(key => {
                this.newUser[key] = null;
            });
        },
        closeModal() {
            setTimeout(() => {
                location.reload()
            }, 300);
        }
    }
}
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
