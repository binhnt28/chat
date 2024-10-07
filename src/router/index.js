import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import Register from "@/views/auth/Register.vue";
import Login from "@/views/auth/Login.vue";
import { authGuard } from "@/middleware/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: { requiresAuth: true },
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      meta: { layout: 'auth' }
    },
    {
      path: '/login',
      name: 'Login',
      component: Login,
      meta: { layout: 'auth' }
    }
  ]
})
router.beforeEach((to, from, next) => {
  authGuard(from, to, next);
});

export default router
