<template>
  <router-test />
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

import RouterTest from 'learn/router/router.vue'

export default defineComponent({
  name: 'App',
  components: {
    RouterTest
  },
  mounted () {
    axios.get('https://dog.ceo/api/breeds/image/random').then((res) => {
      console.log(res)
    })
  }
})
</script>

<style>

</style>
