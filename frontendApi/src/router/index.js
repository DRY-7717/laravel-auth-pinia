import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/dashboard",
      name: "dashboard",

      component: () => import("../views/DashboardView.vue"),
    },
    {
      path: "/login",
      name: "login",

      component: () => import("../views/LoginView.vue"),
    },
    {
      path: "/register",
      name: "register",

      component: () => import("../views/RegisterView.vue"),
    },
    {
      path: "/forgotpassword",
      name: "forgotpassword",

      component: () => import("../views/ForgotPasswordView.vue"),
    },
    {
      path: "/password-reset/:token",
      name: "passwordreset",

      component: () => import("../views/PasswordResetView.vue"),
    },
  ],
  linkActiveClass: "active",
});

export default router;
