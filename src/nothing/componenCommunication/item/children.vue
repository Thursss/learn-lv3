<template>
  <h3>Children</h3>
  <p>父组件传来的值： {{ msg || '-' }}</p>
  <p @click=getParentValue>点我： {{value}}</p>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    msg: String
  },
  data () {
    return {
      value: '我是泰罗'
    }
  },
  methods: {
    getParentValue () {
      this.$emit('communication', this.value)
    }
  },
  mounted () {
    console.log(this.$parent.value1)
  }
})
</script>
