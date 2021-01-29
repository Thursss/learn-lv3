<template>
  <div class="layout">
    <tableLayout></tableLayout>
    <floatLayout></floatLayout>
    <absoluteLayout></absoluteLayout>
    <flexLayout></flexLayout>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import tableLayout from './layoutComponts/table.vue'
import floatLayout from './layoutComponts/float.vue'
import absoluteLayout from './layoutComponts/absolute.vue'
import flexLayout from './layoutComponts/flex.vue'

export default defineComponent({
  components: {
    tableLayout,
    floatLayout,
    absoluteLayout,
    flexLayout
  }
})
</script>
<style>
</style>
