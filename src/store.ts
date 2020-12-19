import { createStore } from 'vuex'

type userProps = {
  isLogin: boolean;
  id?: string;
  name?: string;
  image?: string;
}

export interface GlobalDataProps {
  user: userProps;
}

const store = createStore<GlobalDataProps>({
  state: {
    user: {
      isLogin: false
    }
  },
  mutations: {
    login: (store, name) => {
      store.user.isLogin = true
      store.user.name = name
      // store.user = { ...store.user, isLogin: true, name: 'name' }
    }
  }
})

export default store
