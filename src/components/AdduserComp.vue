<template>
    <div>
        <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#signupModal" id="modalBtn">
            Add user
        </button>
        <div class="modal fade" id="signupModal" tabindex="-1" aria-labelledby="signupModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title" id="signupModalLabel">Add User</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <form @submit.prevent="addUser">
                            <div class="mb-3">
                                <label for="username" class="form-label">New Username:</label>
                                <input type="text" class="form-control" id="username" v-model="user.username" required>
                            </div>
                            <div class="mb-3">
                                <label for="txtPassword" class="form-label">Create Password:</label>
                                <input type="password" class="form-control" id="txtPassword" v-model="user.txtPassword"
                                    required>
                            </div>
                            <div class="mb-3">
                                <label for="firstName" class="form-label">Name:</label>
                                <input type="text" class="form-control" id="firstName" v-model="user.firstName" required>
                            </div>
                            <div class="mb-3">
                                <label for="lastName" class="form-label">Surname:</label>
                                <input type="text" class="form-control" id="lastName" v-model="user.lastName" required>
                            </div>
                            <div class="mb-3">
                                <label for="userAge" class="form-label">Age:</label>
                                <input type="number" class="form-control" id="userAge" v-model="user.userAge" required>
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
                                <label for="emailAdd" class="form-label">Email Adress:</label>
                                <input type="email" class="form-control" id="emailAdd" v-model="user.emailAdd" required>
                            </div>
                            <div class="mb-3">
                                <label for="userProfile" class="form-label">User Description:</label>
                                <textarea class="form-control" id="userProfile" v-model="user.userProfile"
                                    required></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary">Submit new user</button>
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
                username: '',
                txtPassword: '',
                firstName: '',
                lastName: '',
                userAge: '',
                gender: '',
                emailAdd: '',
                userProfile: ''
            }
        };
    },
    methods: {
        async addUser() {
            try {
                await fetch(`https://nodeeomp-api.onrender.com/users`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(this.user)
                });

                this.user = {
                    username: '',
                    txtPassword: '',
                    firstName: '',
                    lastName: '',
                    userAge: '',
                    gender: '',
                    emailAdd: '',
                    userProfile: ''
                };
                this.refresh();
                alert("User has been added successfully!");
            } catch (error) {
                console.error("Error adding user:", error);
                alert("Failed to add user. Please try again.");
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

input:focus,
textarea:focus {
    border-color: red;
    box-shadow: 0 0 0 0.2rem rgba(255, 0, 0, 0.25);
}
</style>
