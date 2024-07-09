import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/DashBoard.vue')
    },
    {
      path: '/new',
      name: 'dashboard-new',
      component: () => import('../views/DashBoardOld.vue')
    }
  ]
})

export default router
