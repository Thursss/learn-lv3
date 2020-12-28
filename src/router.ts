import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import store from '@/store'
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
      component: Login,
      meta: {
        noRequiredLogin: true
      }
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { requiredLogin, noRequiredLogin } = to.meta
  const { user, token } = store.state
  if (!user.isLogin) {
    if (token) {
      store.commit('login', { name: '17300792864', token: token })
      if (noRequiredLogin) {
        next('/')
      } else {
        next()
      }
    } else {
      if (requiredLogin) {
        next('login')
      } else {
        next()
      }
    }
  } else {
    if (noRequiredLogin) {
      next('/')
    } else {
      next()
    }
  }
})

export default router
