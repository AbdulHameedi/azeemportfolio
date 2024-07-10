import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: '/https://azeemportfolio-psi.vercel.app/',
  routes: [
    {
      path: '/',
      name: 'preloader',
      component: () => import('../views/preloader.vue'),
    },
    {
      path: '/project',
      name: 'Project',
      component: ()=> import('../components/ProjectPage.vue')
    },
    {
      path: '/mooyi',
      name: 'Mooyi',
      component: ()=> import('../components/Mooyi.vue')
    },
    {
      path: '/mte',
      name: 'Mte',
      component: ()=> import('../components/Mte.vue')
    }
  ]
})

export default router
