<template>
  <v-header :user="user" />
  <router-view />
  <v-footer />
  <loader v-if="loading" :type="'加载中...'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import VHeader from 'views/Header.vue'
import VFooter from 'views/Footer.vue'
import Loader from 'components/Loader.vue'

export default defineComponent({
  name: 'App',
  components: {
    VHeader,
    VFooter,
    Loader
  },
  computed: {
    loading: (vm) => vm.store.state.loading,
    user: (vm) => vm.store.state.user
  },
  methods: {
    onError (error: Event) {
      console.error(error)
    }
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    return {
      store
    }
  },
  created () {
    // 监听错误事件
    window.addEventListener('error', this.onError, true)
  },
  beforeUnmount () {
    window.removeEventListener('error', this.onError)
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
