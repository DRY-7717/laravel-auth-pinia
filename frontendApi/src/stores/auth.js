import axios from "axios";
import { defineStore } from "pinia";

export const useAuthStore = defineStore("auth", {
  state: () => ({
    user: null,
  }),
  getters: {
    userauth: (state) => state.user,
  },
  actions: {
    async login(credential) {
      await this.getToken();
      await axios.post("/login", credential);
      await this.getUser();
    },
    async register(credential) {
      await this.getToken();
      await axios.post("/register", credential);
    },
    async getToken() {
      await axios.get("/sanctum/csrf-cookie");
    },

    async getUser() {
      const { data } = await axios.get("/api/user");
      this.user = data;
    },

    async logout() {
      await axios.post("/logout");
      this.user = null;
    },

    // async getUser() {
    //   const { data } = await axios.get("/api/user");
    //   this.user = data
    // },
  },
});
