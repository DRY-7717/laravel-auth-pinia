<template>
  <div class="container mt-5 mx-auto">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <h1 class="mb-3">Forgot Password</h1>
        <div class="alert alert-success border-0" v-if="status" role="alert">
          {{ status }}
        </div>
        <form @submit.prevent="forgotpassword">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Input your email</label
            >
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="forgot.email"
            />
            <!-- <div class="invalid-feedback" v-if="validation.email">
              {{ validation.email[0] }}
            </div> -->
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useAuthStore } from "../stores/auth";
import axios from "axios";

const authStore = useAuthStore();
let status = ref("");
const forgot = reactive({
  email: "",
});

const forgotpassword = async () => {
  await authStore.getToken();
  await axios
    .post("/forgot-password", forgot)
    .then(function (response) {
      status.value = response.data.status;
    })
    .catch(function (error) {
      console.log(error);
    });
};
</script>
