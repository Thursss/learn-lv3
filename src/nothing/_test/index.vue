<template>
  <test-1></test-1>
  <test-2></test-2>
  <Curry />
</template>

<script>
import { defineComponent } from 'vue'
import Test1 from './items/test1.vue'
import Test2 from './items/test2.vue'
import Curry from './items/curry.vue'

export default defineComponent({
  components: {
    Test1,
    Test2,
    Curry
  }
})
</script>

<style>

</style>
