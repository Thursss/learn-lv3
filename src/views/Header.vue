<template>
  <nav class="navbar-dark bg-primary justify-content-between fixed-top px-4">
    <div class="w-75 mx-auto navbar">
      <router-link to="/" class="router-link-active router-link-exact-active navbar-brand">逼乎</router-link>
      <ul class="list-inline mb-0">
        <li class="list-inline-item" v-if="!user.isLogin">
          <router-link to="/login" class="btn btn-outline-light my-2">登录</router-link>
        </li>
        <li class="list-inline-item dropdown" v-else>
          <button
            class="btn btn-outline-light dropdown-toggle my-2"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >你好 {{ user.name }}</button>
          <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a class="dropdown-item" @click="logout" href="#">退出登录</a>
          </div>
        </li>
        <li class="list-inline-item" v-if="!user.isLogin">
          <router-link to="/signup" class="btn btn-outline-light my-2">注册</router-link>
        </li>
      </ul>
    </div>
  </nav>
  <div class="box"></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'

export default defineComponent({
  props: {
    user: Object
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const logout = () => {
      store.commit('logout')
    }
    return {
      logout
    }
  }
})
</script>

<style>
  .box{
    height: 70px;
  }
</style>
