import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import store from '@/store'
import Container from 'views/Container.vue'
import Login from 'views/Login.vue'
import htmlLayout from '@/nothing/layout/index.vue'
import { performanceLearn } from 'performance/exports'
import { visualizationLearn } from 'visualization/exports'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'container',
      component: Container
    },
    {
      path: '/login',
      name: 'login',
      component: Login,
      meta: {
        noRequiredLogin: true
      }
    },
    {
      path: '/performance',
      name: 'performance',
      component: performanceLearn
    },
    {
      path: '/visualization',
      name: 'visualization',
      component: visualizationLearn
    },
    {
      path: '/htmlLayout',
      name: 'htmlLayout',
      component: htmlLayout
    }
  ]
})

router.beforeEach((to, from, next) => {
  const { requiredLogin, noRequiredLogin } = to.meta
  const { user, token } = store.state
  if (!user.isLogin) {
    if (token) {
      store.commit('login', { name: user.name, token: token })
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
