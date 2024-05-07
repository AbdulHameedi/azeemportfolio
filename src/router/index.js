import { createRouter, createWebHistory } from 'vue-router'
import preloader from '../views/preloader.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'preloader',
      component: preloader
    }
  ]
})

export default router
