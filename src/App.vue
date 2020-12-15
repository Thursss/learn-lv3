<template>
  <v-header />
  <router-view />
  <v-footer />
</template>

<script lang="ts">
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent } from 'vue'
import VHeader from 'views/Header.vue'
import VFooter from 'views/Footer.vue'

export default defineComponent({
  name: 'App',
  components: {
    VHeader,
    VFooter
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
}
</style>
