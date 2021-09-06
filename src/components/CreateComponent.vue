<template>
  <div class="row justify-content-center">
    <div class="col-md-6">
      <h3 class="text-center">Tambah Data</h3>
      <form @submit.prevent="handleSubmitForm">
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
      data: {
        name: '',
        email: '',
        city: ''
      },
    };
  },
  methods: {
    handleSubmitForm() {
      let apiURL = "http://localhost:4000/api/create-data";

      axios.post(apiURL, this.data).then(() => {
                  this.$router.push('/')
                  this.data = {
                    name: '',
                    email: '',
                    city: ''
                  }
                }).catch(error => {
                    console.log(error)
                });
    },
  },
};
</script>
