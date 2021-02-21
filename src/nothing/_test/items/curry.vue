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
      console.log(fn.length)
    },
    add (x) {
      console.log(x)
    }
  },
  mounted () {
    const sum = this.curryItem(1)(2)(3)
    // this.add(1, 2)
    // console.log('柯里化：' + this.currying(this.add(1, 2)))
    this.currying(this.add)
  }
})
</script>

<style scope></style>
