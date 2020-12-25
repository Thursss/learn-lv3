import { createStore } from 'vuex'

type userProps = {
  isLogin: boolean;
  id?: string;
  name?: string;
  image?: string;
}

export interface GlobalDataProps {
  loading: boolean;
  user: userProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    loading: false,
    user: {
      isLogin: false
    }
  },
  mutations: {
    login (store, name) {
      store.user.isLogin = true
      store.user.name = name
      // store.user = { ...store.user, isLogin: true, name: 'name' }
    },
    logout (store) {
      store.user.isLogin = false
      store.user.name = ''
    },
    setLoading (store, loading) {
      store.loading = loading
    }
  },
  actions: {},
  getters: {}
})

export default store
