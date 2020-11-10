<template>
  <img :src="dog.message" alt="">
</template>

<script>
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  async setup () {
    const dog = await axios.get('https://dog.ceo/api/breeds/image/random')
    return {
      dog: dog.data
    }
  }
})
</script>
