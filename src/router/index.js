import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  base: '/https://ayomideakanji.com/',
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
    },
    {
      path: '/joinebo',
      name: 'Joinebo',
      component: ()=> import('../components/Join.vue')
    },
    {
      path: '/deex',
      name: 'Deex',
      component: ()=> import('../components/Deex.vue')
    },
    {
      path: '/ellance',
      name: 'Ellance',
      component: ()=> import('../components/Ellance.vue')
    }
  ]
})

export default router
