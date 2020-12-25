<template>
  <p>{{loading}}</p>
  <router-test />
  <v-Loading v-if="loading" :type="'加载中...'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'
import axios from 'axios'

import RouterTest from 'learn/router/router.vue'
import Loading from 'components/Loading.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterTest,
    'v-Loading': Loading
  },
  setup () {
    const store = useStore<GlobalDataProps>()
    const loading = store.state.user.isLogin
    return {
      loading,
      store
    }
  }
  // mounted  () {
  //   axios.get('http://console.xhj.com/api/search/?text=雨花&newHouse=false&cityId=1&houseType=11').then(res => {
  //     console.log(res)
  //   })
  //   setTimeout(() => {
  //     console.log(this.loading)
  //   }, 3000)
  // }
})
</script>

<style>

</style>
