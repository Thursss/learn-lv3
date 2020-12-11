<template>
  <div class="container">
    <!-- <form-test /> -->
    <router-test />
    <router-view />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import 'bootstrap/dist/css/bootstrap.min.css'
// import FormTest from './learn/form.vue'
import RouterTest from './learn/router/router.vue'

export default defineComponent({
  name: 'App',
  components: {
    // FormTest,
    RouterTest
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
