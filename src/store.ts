import { createStore } from 'vuex'

type userProps = {
  isLogin: boolean;
  loading: boolean;
  id?: string;
  name?: string;
  image?: string;
}

type loadingProps = {
  isOpen: boolean;
}

export interface GlobalDataProps {
  loading: loadingProps;
  user: userProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    loading: {
      isOpen: false
    },
    user: {
      loading: false,
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
    setLoading (store, isOpen) {
      store.loading.isOpen = isOpen
    }
  },
  actions: {
  },
  getters: {}
})

export default store
