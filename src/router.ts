import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import store from '@/store'
import Learn from 'learn/App-L.vue'
import Login from 'views/Login.vue'
import { toRefs } from 'vue'

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

// router.beforeEach((to, from, next) => {
//   if (to.path === '/login' && store.state.user.isLogin) {
//     next(false)
//   } else if (to.path !== '/login') {
//     next('/login')
//   } else {
//     next()
//   }
// })

export default router
