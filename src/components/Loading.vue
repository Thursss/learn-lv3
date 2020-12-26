<template>
  <teleport to="#loading">
    <div
      class="d-flex justify-content-center loading-container"
      :style="{backgroundColor: background || ''}"
    >
      <div class="align-items-center m-auto text-center">
        <div class="spinner-border text-primary" role="status"></div>
        <span v-if="type" class="sr-only d-block text-primary font-weight-bold mt-1">{{type}}</span>
      </div>
    </div>
  </teleport>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'

export default defineComponent({
  props: {
    type: String,
    background: String
  },
  setup (prop) {
    console.log(prop.type || 'ss')
  }
})
</script>

<style>
.loading-container {
  position: fixed;
  top: 0;
  left: 0;
  z-index: 9999;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
