<template>
  <div class="container">
    <div class="mt-4 row row-cols-1 row-cols-md-3">
      <div
        class="col mb-4"
        v-for="performanceItem in performanceRow"
        :key="performanceItem.stressId"
        :stressId="performanceItem.stressId"
        @click="addAnimateElementId(performanceItem.stressId)"
      >
        <div class="card h-100">
          <div class="img-box overflow-hidden">
            <img
              loading="lazy"
              class="card-img-top animate__animated animate__infinite"
              alt="..."
              :src="performanceItem.thumb"
              :class="{'animate__flipInY': animateArr.includes(performanceItem.stressId), 'willpage': performanceItem.stressId === '1275'}"
            />
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
    const width = ref(null)
    const performanceRow = ref(null)
    const animateArr = ref([])
    getPerformanceRow({
      cityId: '1',
      pageFrom: 1,
      pageSize: 100
    }).then((res) => {
      performanceRow.value = res
    })
    const updataWidth = (t) => {
      width.value = t / 100
      const r = window.requestAnimationFrame(updataWidth)
      if (width.value >= 300) {
        window.cancelAnimationFrame(r)
      }
    }

    const addAnimateElementId = (elementId) => {
      const i = animateArr.value.indexOf(elementId)
      if (i >= 0) {
        animateArr.value.splice(i, 1)
      } else {
        animateArr.value.push(elementId)
      }
    }
    return {
      performanceRow,
      updataWidth,
      addAnimateElementId,
      animateArr,
      width
    }
  },
  mounted () {
    this.updataWidth()
  }
})
</script>

<style>
.willpage {
  will-change: transform;
}
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
@keyframes awid {
  0% {
    width: 300px;
  }
  50% {
    width: 0;
  }
  100% {
    width: 300px;
  }
}
.animate__widget {
  -webkit-backface-visibility: visible !important;
  backface-visibility: visible !important;
  -webkit-animation-name: awid;
  animation-name: awid;
}
</style>
