<template>
 <div></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import axios from 'axios'

export default defineComponent({
  name: 'App',
  setup () {
    console.log('learn')
  },
  mounted () {
    axios.get('http://console.xhj.com/api/search/?text=雨花&newHouse=false&cityId=1&houseType=11').then(res => {
      console.log(res)
    })
  }
})
</script>

<style>
</style>
