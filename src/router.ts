import { createRouter, createWebHistory } from 'vue-router'
import RouterTest from './learn/router/test.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/router-test/:id',
      name: 'router-test',
      component: RouterTest
    }
  ]
})

export default router
