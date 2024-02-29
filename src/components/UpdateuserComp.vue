<template>
    <div>
        <!-- Note to Naeema: Added button to trigger the Bootstrap modal and added the user userID -->
        <button type="button" class="btn my-2" data-bs-toggle="modal" :data-bs-target="'#editusermodal' + user.userID">
            Edit
        </button>
        <!-- Note to Naeema: Bootstrap modal for editing user Changed from the created one -->
        <div class="modal fade" :id="'editusermodal' + user.userID" data-bs-backdrop="static" data-bs-keyboard="false"
            tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="staticBackdropLabel">Edit User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="editUser">
                            <div class="mb-3">
                                <label for="username" class="form-label">New Username:</label>
                                <input type="text" class="form-control" id="username" v-model="user.username">
                            </div>
                            <div class="mb-3">
                                <label for="txtPassword" class="form-label">Create Password:</label>
                                <input type="password" class="form-control" id="txtPassword" v-model="user.txtPassword"
                                >
                            </div>
                            <div class="mb-3">
                                <label for="firstName" class="form-label">Name:</label>
                                <input type="text" class="form-control" id="firstName" v-model="user.firstName">
                            </div>
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Surname:</label>
                                <input type="text" class="form-control" id="lastName" v-model="user.lastName">
                            </div>
                            <div class="mb-3">
                                <label for="userAge" class="form-label">Age:</label>
                                <input type="number" class="form-control" id="userAge" v-model="user.userAge">
                            </div>
                            <div class="mb-3">
                                <label class="form-label">Gender:</label>
                                <div class="form-check">
                                    <input type="radio" class="form-check-input" id="male" value="male"
                                        v-model="user.gender">
                                    <label class="form-check-label" for="male">Male</label>
                                </div>
                                <div class="form-check">
                                    <input type="radio" class="form-check-input" id="female" value="female"
                                        v-model="user.gender">
                                    <label class="form-check-label" for="female">Female</label>
                                </div>
                            </div>
                            <div class="mb-3">
                                <label for="emailAdd" class="form-label">Email Address:</label>
                                <input type="email" class="form-control" id="emailAdd" v-model="user.emailAdd">
                            </div>
                            <div class="mb-3">
                                <label for="userProfile" class="form-label">User Description:</label>
                                <textarea class="form-control" id="userProfile" v-model="user.userProfile"
                                ></textarea>
                            </div>
                            <label class="form-label">User Role:</label>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="user" value="user" v-model="user.userRole">
                                <label class="form-check-label" for="user">User</label>
                            </div>
                            <div class="form-check">
                                <input type="radio" class="form-check-input" id="admin" value="admin"
                                    v-model="user.userRole">
                                <label class="form-check-label" for="admin">Admin</label>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit</button>
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
            user: {
                username: this.username,
                txtPassword: this.txtPassword,
                firstName: this.firstName,
                lastName: this.lastName,
                userAge: this.userAge,
                gender: this.gender,
                emailAdd: this.emailAdd,
                userProfile: this.userProfile
            }
        };
    },
    methods: {
        async editUser() {
            try {
                await fetch(`https://nodeeomp-api.onrender.com/users/${this.user.userID}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                });
                this.refresh();
            } catch (error) {
                console.error('Error editing user:', error);
            }
        },
        refresh() {
            setTimeout(() => {
                location.reload();
            }, 300);
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
