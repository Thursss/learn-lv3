import { createRouter, createWebHistory } from 'vue-router'
import Learn from 'learn/App-L.vue'
import Login from 'views/Login.vue'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'app-learn',
      component: Learn
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    }
  ]
})

export default router
