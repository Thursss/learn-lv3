<template>
  <div>
    <router-link to="/" class="btn btn-lg mb-2">首页</router-link>
    <div @click="click" style="display: block" class="btn btn-primary btn-lg">=====></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { useRouter } from 'vue-router'

export default defineComponent({
  setup () {
    const router = useRouter()
    const click = () => {
      router.push('/router-test/11')
    }

    return {
      click
    }
  }
})
</script>

<style>
</style>
