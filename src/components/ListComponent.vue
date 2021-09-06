<template>
    <div class="row">
        <div class="col-md-12">
            <table class="table table-striped">
                <thead class="thead-dark">
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>City</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="data in Datas" :key="data._id">
                        <td>{{ data.name }}</td>
                        <td>{{ data.email }}</td>
                        <td>{{ data.city }}</td>
                        <td>
                            <router-link :to="{name: 'edit', params: { id: data._id }}" class="btn btn-success">Edit
                            </router-link>
                            <button @click.prevent="deleteData(data._id)" class="btn btn-danger">Delete</button>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</template>
<script>
import axios from "axios";
    export default {
        data() {
            return {
                Datas: []
            }
        },
        created() {
            let apiURL = 'http://localhost:4000/api';
            axios.get(apiURL).then(res => {
                this.Datas = res.data;
            }).catch(error => {
                console.log(error)
            });
        },
        methods: {
            deleteData(id){
                let apiURL = `http://localhost:4000/api/delete-data/${id}`;
                let indexOfArrayItem = this.Datas.findIndex(i => i._id === id);

                if (window.confirm("Do you really want to delete?")) {
                    axios.delete(apiURL).then(() => {
                        this.Datas.splice(indexOfArrayItem, 1);
                    }).catch(error => {
                        console.log(error)
                    });
                }
            }
        }
    }
</script>

<style>
    .btn-success {
        margin-right: 10px;
    }
</style>