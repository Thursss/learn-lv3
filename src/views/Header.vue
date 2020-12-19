<template>
  <nav class="navbar-dark bg-primary justify-content-between mb-4 px-4">
    <div class="w-75 mx-auto navbar">

    <router-link to='/' class="router-link-active router-link-exact-active navbar-brand">逼乎</router-link>
    <ul class="list-inline mb-0">
      <li class="list-inline-item" v-if="!user.isLogin">
        <router-link to='/login' class="btn btn-outline-light my-2">登录</router-link>
      </li>
      <li class="list-inline-item" v-else>
        <a to='/login' class="btn btn-outline-light my-2">你好 {{user.name}}</a>
      </li>
      <li class="list-inline-item" v-if="!user.isLogin">
        <router-link to='/signup' class="btn btn-outline-light my-2">注册</router-link>
      </li>
    </ul>
    </div>
  </nav>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'

export default defineComponent({
  setup () {
    const store = useStore<GlobalDataProps>()
    return {
      user: store.state.user
    }
  }
})
</script>

<style>

</style>
