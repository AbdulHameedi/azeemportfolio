import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'preloader',
      component: () => import('../views/preloader.vue')
    }
  ]
})

export default router
