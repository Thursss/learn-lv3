import { createStore } from 'vuex'
import axios from 'axios'

export interface UserProps {
  isLogin: boolean;
  id?: string;
  name?: string;
  image?: string;
}

export interface GlobalDataProps {
  loading: boolean;
  user: UserProps;
  token: string;
}

const store = createStore<GlobalDataProps>({
  state: {
    loading: false,
    user: {
      isLogin: false
    },
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    login (store, user) {
      const { name, token } = user
      store.user = { ...store.user, isLogin: true, name: name }
      token && (store.token = token)
      token && localStorage.setItem('token', token)
      token && (axios.defaults.headers.common.Authorization = token)
    },
    logout (store) {
      store.user = { ...store.user, isLogin: false, name: '' }
      store.token = ''
      localStorage.removeItem('token')
    },
    setLoading (store, state) {
      store.loading = state
    }
  },
  actions: {},
  getters: {}
})

export default store
