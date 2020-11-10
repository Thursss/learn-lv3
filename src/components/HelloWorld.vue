<template>
  <div class="hello">
    <h2>{{count}}</h2>
    <h2>{{price}}</h2>
    <h3>x: {{x}} -- y: {{y}}</h3>
    <button @click="add">加加</button>
  </div>
</template>

<script lang="ts">
import { ref, reactive, toRefs, computed, watch } from 'vue'
import useMousePosition from '../hooks/useMousePosition'
import userUrlLoading from '../hooks/userUrlLoading'

interface DataPros {
  count: number;
  price: number;
  add: () => void;
}

export default {
  name: 'HelloWorld',
  setup () {
    const data: DataPros = reactive({
      count: ref(0),
      price: computed(() => data.count * 2),
      add: () => { data.count++ }
    })

    const resData = toRefs(data)
    const { x, y } = useMousePosition()
    const { res, loading, error } = userUrlLoading('https://dog.ceo/api/breeds/image/random')

    watch(resData.count, (newVal, oldVal) => {
      console.log(oldVal + ' --- ' + newVal)
    })
    return { ...resData, x, y, res, loading, error }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
