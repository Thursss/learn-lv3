<template>
  <div class="container">
    <h1>router</h1>
    <h2>
      <pre>{{ route }}</pre>
    </h2>
  </div>
</template>

<script lang='ts'>
import { useRoute } from 'vue-router'
import { defineComponent } from 'vue'
import { useStore } from 'vuex'
import { GlobalDataProps } from '@/store'

export default defineComponent({
  setup () {
    const route = useRoute()
    const store = useStore<GlobalDataProps>()
    return {
      route,
      store
    }
  }
})
</script>

<style>
</style>
