<template>
  <div class="berbox">
    <img src="https://cn.vuejs.org/images/logo.png" alt="https://cn.vuejs.org/">
  </div>
  <ul class="list">
    <li v-for='i in list' :key="i">{{i}}</li>
  </ul>
</template>

<script>
import { defineComponent } from 'vue'
export default defineComponent({
  /* eslint-disable */
  data () {
    return {
      list: []
    }
  },
  methods: {
    add: a => b => c => {
      console.log(a + b + c)
    },
    timerAdd () {
      let i = 1;
      let timer = setInterval(() => {
        if (i >= 10) {
          clearTimeout(timer)
        }
        let j = (i + 2) <= 10 ? (i + 2) : 10
        for (; i <= j; i++) {
          this.list.push(i)
          console.log(i)
        }
      }, 3000)
    }
  },
  mounted () {
    const me = {
      name: 'perfee',
      doMain () {
        const _this = this
        console.log(this.name)
        console.log(_this.name)
        // (function () {
        //   console.log(_this)
        //   console.log(this)
        // })()
      },
    }
    me.doMain()
    this.add(1)(2)(3)
    this.timerAdd()
  }
})
</script>

<style scoped>
  .berbox{
    position: relative;
    width: 200px;
    height: 100px;
    box-sizing: border-box;
    border: 5px solid red;
    overflow: hidden;
  }
  .berbox>img{
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    margin: auto;
    width: 100%;
  }
  .list {
    list-style: none;
    padding: 0;
  }
</style>
