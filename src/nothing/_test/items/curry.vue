<template>
  <div></div>
</template>

<script>
/* eslint-disable */
import { defineComponent } from 'vue'
export default defineComponent({
  methods: {
    curryItem (a) {
      return b => {
        return c => {
          return a + b + c
        }
      }
    },
    currying (fn) {
      const args = Array.prototype.slice.call(arguments, 1)
    },
    add (x) {
      console.log(arguments)
    }
  },
  mounted () {
    const sum = this.curryItem(1)(2)(3)
    this.add(1, 2)
    console.log('柯里化：' + sum)
  }
})
</script>

<style scope></style>
