<template>
  <div class="container mt-5">
    <h1>selamat datang <span v-if="authUser.user">{{ authUser.user.name }}</span> ,Ini adalah halaman home</h1>
  </div>
</template>
<script setup>
import { ref, onMounted, computed } from "vue";
import axios from "axios";
import {useAuthStore} from '../stores/auth'

let authUser = useAuthStore();

let user = authUser.user



</script>
