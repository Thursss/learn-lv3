<template>
  <teleport to='#model'>
    <div id="center" v-if="isOpen">
      <h2><slot>this is model !!!</slot></h2>
      <button @click="buttonClick">close</button>
    </div>
  </teleport>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  props: {
    isOpen: Boolean
  },
  emits: {
    'close-model': null
  },
  setup (prop, content) {
    const buttonClick = () => {
      content.emit('close-model')
    }

    return {
      buttonClick
    }
  }
})
</script>

<style>
  #center {
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    z-index: 999;
    margin: auto;
    width: 200px;
    height: 200px;
    background: #fff;
    border: #000 1px solid;
  }
</style>
