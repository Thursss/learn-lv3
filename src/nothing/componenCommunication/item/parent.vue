<template>
  <h2>Parent</h2>
  <p> {{value1}} </p>
  <p ref='p'>字组件传来的值 {{value2}} </p>
  <Children ref='children' :msg='value1' @communication=getChildrenVal></Children>
</template>

<script>
import { defineComponent } from 'vue'
import Children from './children.vue'

export default defineComponent({
  components: {
    Children
  },
  data () {
    return {
      value1: '我是迪迦',
      value2: '-'
    }
  },
  methods: {
    getChildrenVal (val) {
      this.value2 = val
    }
  },
  mounted () {
    console.log(this.$refs)
  }
})
</script>
