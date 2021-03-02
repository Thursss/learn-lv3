import { createRouter, createWebHistory } from 'vue-router'
import store from '@/store'
import { performanceLearn } from 'performance/exports'
import { visualizationLearn } from 'visualization/exports'

const routerHistory = createWebHistory()
const router = createRouter({
  history: routerHistory,
  routes: [
    {
      path: '/',
      name: 'Container',
      redirect: '/nothing',
      component: import('views/Container.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: import('views/Login.vue'),
      meta: {
        noRequiredLogin: true
      }
    },
    {
      path: '/performance',
      name: 'Performance',
      component: performanceLearn
    },
    {
      path: '/visualization',
      name: 'Visualization',
      component: visualizationLearn
    },
    {
      path: '/nothing',
      name: 'Nothing',
      component: import('@/nothing/index.vue'),
      children: [
        {
          path: 'htmlLayout',
          name: 'HtmlLayout',
          component: import('@/nothing/layout/index.vue')
        },
        {
          path: 'test',
          name: 'Test',
          component: import('@/nothing/_test/index.vue')
        },
        {
          path: 'vueLifeCycle',
          name: 'VueLifeCycle',
          component: import('@/nothing/vueLifeCycle/index.vue')
        },
        {
          path: 'componenCommunication',
          name: 'ComponenCommunication',
          component: import('@/nothing/componenCommunication/index.vue')
        },
        {
          path: 'classExtent',
          name: 'ClassExtent',
          component: import('@/nothing/classExtent/index.vue')
        },
      ]
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
