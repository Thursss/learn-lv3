<template>
  <visualizationLearn />
  <performanceLearn />
</template>

<script>
import { defineComponent } from 'vue'
import { visualizationLearn } from 'visualization/exports'
import { performanceLearn } from 'performance/exports'
export default defineComponent({
  components: {
    visualizationLearn,
    performanceLearn
  }
})
</script>

<style>

</style>
