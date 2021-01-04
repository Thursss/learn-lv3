<template>
  <div>{{ttt}}</div>
  <RowList />
</template>

<script lang="ts">
import { defineComponent, onErrorCaptured, ref } from 'vue'
import RowList from 'performance/RowList.vue'

export default defineComponent({
  components: { RowList },
  setup () {
    // 页面可见性的状态监听
    const visibilityEvent = (document as any).webkitHidden ? 'webkitvisibilitychange' : 'visibilitychange'
    const connection = (navigator as any).connection || (navigator as any).mozConnection || (navigator as any).webkitConnection
    const effectiveType = ref(connection.effectiveType)

    // 性能监听
    const loadEvent = (e: Event) => {
      const timing = performance.getEntriesByType('navigation')[0] as PerformanceNavigationTiming
      const diff = timing.domInteractive - timing.fetchStart
      console.log('性能指标: ' + diff + 'ms')
    }
    // 观察长任务
    const longtaskEvent = () => {
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) { console.log(entry) }
      })
      observer.observe({ entryTypes: ['longtask'] })
    }
    const pageVisibilityEvent = () => {
      if (document.hidden || (document as any).webkitHidden) {
        console.log('Web page is hidden.')
      } else {
        console.log('Web page is visible.')
      }
    }
    // 网络状态监听
    const entworkEvent = () => {
      console.log(effectiveType.value + ' ---> ' + connection.effectiveType)
      effectiveType.value = connection.effectiveType
    }
    return {
      visibilityEvent,
      connection,
      effectiveType,
      loadEvent,
      longtaskEvent,
      pageVisibilityEvent,
      entworkEvent
    }
  },
  mounted () {
    window.addEventListener('load', this.loadEvent)
    document.addEventListener(this.visibilityEvent, this.pageVisibilityEvent, false)
    this.connection.addEventListener('change', this.entworkEvent)
    this.longtaskEvent()
  },
  unmounted () {
    window.removeEventListener('load', this.loadEvent)
    document.removeEventListener(this.visibilityEvent, this.pageVisibilityEvent)
    this.connection.removeEventListener('change', this.entworkEvent)
  }
})
</script>

<style>
</style>
