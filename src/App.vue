<template>
  <HelloWorld />
  <Model :isOpen="modelIsOpen" @close-model="closeModel">this is My moder</Model>
  <button @click="openModel">打开</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Model from './components/Model.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Model
  },
  setup () {
    const modelIsOpen = ref(false)
    const openModel = () => {
      modelIsOpen.value = true
    }
    const closeModel = () => {
      modelIsOpen.value = false
    }
    return {
      modelIsOpen,
      openModel,
      closeModel
    }
  }
})
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
