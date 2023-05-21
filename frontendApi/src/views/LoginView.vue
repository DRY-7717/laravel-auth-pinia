<template>
  <div class="container mt-5 mx-auto">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <h1 class="mb-3">Login First</h1>
        <form @submit.prevent="submitlogin">
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label"
              >Email address</label
            >
            <input
              type="email"
              class="form-control"
              :class="validation.email ? 'is-invalid' : false"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="login.email"
            />
            <div class="invalid-feedback" v-if="validation.email">{{ validation.email[0] }}</div>
          </div>
          <div class="mb-3">
            <label for="exampleInputPassword1" class="form-label"
              >Password</label
            >
            <input
              type="password"
              class="form-control"
              :class="validation.password ? 'is-invalid' : false"
              id="exampleInputPassword1"
              v-model="login.password"
            />
             <div class="invalid-feedback" v-if="validation.password" >{{ validation.password[0] }}</div>
          </div>
          <router-link to="/forgotpassword" class="d-block text-end text-decoration-none">Forgot password?</router-link>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import axios from "axios";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
const router = useRouter();
let authStore = useAuthStore();

const login = reactive({
  email: "",
  password: "",
});

let validation = ref([]);

const submitlogin = async () => {
  await authStore
    .login(login)
    .then(function (response) {
      router.push("/dashboard");
    })
    .catch(function (error) {
      const { errors } = error.response.data;

      validation.value = errors;
    });
};
</script>
