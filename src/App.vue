<template>
  <HelloWorld />
  <Model :isOpen="modelIsOpen" @close-model="closeModel">this is My moder</Model>
  <h1 v-if="error">{{error}}</h1>
  <div v-else id="dog">
    <Suspense>
      <template #default>
        <dog-show></dog-show>
      </template>
      <template #fallback>
        <h1>Loading</h1>
      </template>
    </Suspense>
  </div>
  <button @click="openModel">打开</button>
</template>

<script lang="ts">
import { defineComponent, ref, onErrorCaptured } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import Model from './components/Model.vue'
import DogShow from './components/DogShow.vue'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld,
    Model,
    DogShow
  },
  setup () {
    const modelIsOpen = ref(false)
    const error = ref(null)

    onErrorCaptured((e: any) => {
      error.value = e
    })
    const openModel = () => {
      modelIsOpen.value = true
    }
    const closeModel = () => {
      modelIsOpen.value = false
    }
    return {
      modelIsOpen,
      openModel,
      closeModel,
      error
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
