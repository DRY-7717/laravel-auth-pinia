<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container">
      <a class="navbar-brand" href="#">Navbar</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">Home</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/dashboard" class="nav-link"
              >Dashboard</router-link
            >
          </li>
          <li class="nav-item" v-if="authUser.user">
            <router-link
              to=""
              @click.prevent="logout"
              class="nav-link"
              v-if="authUser.user"
              >Logout</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/login" class="nav-link" v-if="!authUser.user"
              >Login</router-link
            >
          </li>
          <li class="nav-item">
            <router-link to="/register" class="nav-link" v-if="!authUser.user"
              >Regiser</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
<script setup>
import { useAuthStore } from "../stores/auth";

let authUser = useAuthStore();

const logout = () => {
    authUser.logout()
};
</script>

<style scoped>
.nav-link.active{
  color: green;
}
</style>