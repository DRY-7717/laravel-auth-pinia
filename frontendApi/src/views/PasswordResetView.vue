<template>
  <div class="container mt-5 mx-auto">
    <div class="row">
      <div class="col-lg-7 mx-auto">
        <h1 class="mb-3">Reset Password</h1>
        <form @submit.prevent="resetpassword">
          <div class="mb-3">
            <label for="password" class="form-label">New Password</label>
            <input
              type="password"
              class="form-control"
              :class="validation.password ? 'is-invalid' : false"
              id="password"
              aria-describedby="emailHelp"
              v-model="reset.password"
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
              v-model="reset.password_confirmation"
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
import { useRoute, useRouter } from "vue-router";
import { useAuthStore } from "../stores/auth";
import axios from "axios";

const authStore = useAuthStore();

const router = useRouter();
const route = useRoute();

let validation = ref([])

let reset = reactive({
  token: route.params.token,
  email: route.query.email,
  password: "",
  password_confirmation: "",
});

const resetpassword = async () => {
  await authStore.getToken();
  await axios
    .post("/reset-password", reset)
    .then(function (response) {
      router.push("/login");
    })
    .catch(function (error) {

        const {errors} = error.response.data
        validation.value = errors
    });
};
</script>
