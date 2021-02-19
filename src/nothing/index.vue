<template>
  <div>
    <router-link to='/nothing/htmlLayout' class="link">页面布局</router-link>
    <router-link to='/nothing/test' class="link">test</router-link>
    <router-link to='/nothing/vueLifeCycle' class="link">vue生命周期</router-link>
    <router-link to='/nothing/componenCommunication' class="link">组件通信</router-link>
    <router-view />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({

})
</script>

<style>
  .link{
    padding: 0 10px;
  }
</style>
