<template>
  <div class="container">
    <div class="mt-4 row row-cols-1 row-cols-md-3">
      <div
        class="col mb-4"
        v-for="performanceItem in performanceRow"
        :key="performanceItem.stressId"
      >
        <div class="card h-100" :style="performanceItem.stressId === '1275' ? `width: ${width};` : ''">
          <div class="img-box overflow-hidden">
            <img :src="performanceItem.thumb" class="card-img-top" alt="..." />
          </div>
          <div class="card-body text-left">
            <h4 class="card-title">{{performanceItem.name}}</h4>
            <p class="card-text text-truncate">{{performanceItem.description}}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { getPerformanceRow } from '@/network'

export default defineComponent({
  setup () {
    const width = ref('')
    const performanceRow = ref(null)
    getPerformanceRow({
      cityId: '1',
      pageFrom: 1,
      pageSize: 12
    }).then(res => {
      performanceRow.value = res
    })
    return {
      performanceRow,
      width
    }
  },
  mounted () {
    setTimeout(() => {
      this.width = '300px'
    }, 2000)
  }
})
</script>

<style>
.img-box {
  position: relative;
  width: 100%;
  height: 200px;
}
.img-box > img {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
</style>
