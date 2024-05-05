import { createRouter, createWebHistory } from 'vue-router'
import preloaderView from '../views/preloaderView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'preloaderView',
      component: preloaderView
    }
  ]
})

export default router
