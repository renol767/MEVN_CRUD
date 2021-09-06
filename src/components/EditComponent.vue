<template>
    <div class="row justify-content-center">
        <div class="col-md-6">
            <h3 class="text-center">Update Student</h3>
            <form @submit.prevent="handleUpdateForm">
                <div class="form-group">
                    <label>Name</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="data.name"
                        required
                    />
                </div>
                <br />
                <div class="form-group">
                    <label>Email</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="data.email"
                        required
                    />
                </div>
                <br />
                <div class="form-group">
                    <label>City</label>
                    <input
                        type="text"
                        class="form-control"
                        v-model="data.city"
                        required
                    />
                </div>

                <br /><br />
                <div class="form-group">
                    <button class="btn btn-danger btn-block">Submit</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script>
import axios from "axios";
    export default {
        data() {
            return {
                data: { }
            }
        },
        created() {
            let apiURL = `http://localhost:4000/api/edit-data/${this.$route.params.id}`;

            axios.get(apiURL).then((res) => {
                this.data = res.data;
            })
        },
        methods: {
            handleUpdateForm() {
            let apiURL = `http://localhost:4000/api/update-data/${this.$route.params.id}`;

            axios.put(apiURL, this.data).then((res) => {
                console.log(res)
                this.$router.push('/')
            }).catch(error => {
                console.log(error)
            });
        }
    }
}
</script>