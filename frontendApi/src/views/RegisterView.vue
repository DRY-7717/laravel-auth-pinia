<template>
  <div class="container mt-5 mx-auto">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <h1 class="mb-3">Registration</h1>
        <form @submit.prevent="submitRegister">
          <div class="mb-3">
            <label for="name" class="form-label">Name</label>
            <input
              type="text"
              class="form-control"
              :class="validation.name ? 'is-invalid' : false"
              id="name"
              aria-describedby="emailHelp"
              v-model="register.name"
            />
            <div class="invalid-feedback" v-if="validation.name">
              {{ validation.name[0] }}
            </div>
          </div>
          <div class="mb-3">
            <label for="exampleInputEmail1" class="form-label">Email</label>
            <input
              type="email"
              class="form-control"
              :class="validation.email ? 'is-invalid' : false"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              v-model="register.email"
            />
            <div class="invalid-feedback" v-if="validation.email">
              {{ validation.email[0] }}
            </div>
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
              v-model="register.password"
            />
            <div class="invalid-feedback" v-if="validation.password">
              {{ validation.password[0] }}
            </div>
          </div>
          <div class="mb-3">
            <label for="password_confirmation" class="form-label"
              >Confirm Password</label
            >
            <input
              type="password"
              class="form-control"
              id="password_confirmation"
              v-model="register.password_confirmation"
            />
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>
<script setup>
import { reactive, ref } from "vue";
import { useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";

let router = useRouter();
let authStore = useAuthStore();
let validation = ref([]);

let register = reactive({
  name: "",
  email: "",
  password: "",
  password_confirmation: "",
});

let submitRegister = async () => {
  // console.log(register);
  await authStore
    .register(register)
    .then(function (response) {
      router.push("/login");
    })
    .catch(function (error) {
      const { errors } = error.response.data;

      validation.value = errors;
    });
};
</script>
<style scoped></style>
