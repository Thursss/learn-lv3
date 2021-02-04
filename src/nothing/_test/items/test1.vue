<template>
  <div v-for="(i, index) in menuLength" :key="`item-${index}`">
    {{i}}- -- {{index}}
  </div>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  data () {
    return {
      menuLength: 5,
      menuColNum: 5
    }
  }
})
</script>

<style>

</style>
