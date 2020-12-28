import { createApp } from 'vue'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import store from './store'

const app = createApp(App)

// axios设置
axios.defaults.baseURL = ''
axios.interceptors.request.use(config => {
  store.commit('setLoading', true)
  return config
})
axios.interceptors.response.use(config => {
  setTimeout(() => {
    store.commit('setLoading', false)
  }, 1000)
  return config
}, e => {
  store.commit('setLoading', false)
  console.error(e)
  return Promise.reject(e)
})

app.use(router)
app.use(store)
app.mount('#app')
