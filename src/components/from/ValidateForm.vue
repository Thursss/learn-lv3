<template>
  <form class="form-horizontal">
    <slot name="default"></slot>
    <button
      type="button"
      class="btn btn-primary btn-lg"
      :disabled="!isPassed"
      @click="submitForm"
    >
      <slot name="submit">
        <span>提交</span>
      </slot>
    </button>
  </form>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import mitt from 'mitt'

type validetaInputFunc = () => object

export const emitter = mitt()
export default defineComponent({
  setup () {
    const isPassed = ref(true)
    const validetaInputArr: validetaInputFunc[] = []

    const submitForm = () => {
      const inputData = validetaInputArr.map((func) => {
        return func()
      })
      const isAllPassed = inputData.every((res) => {
        return (res as any).isPassed
      })
      if (!isAllPassed) return

      emitter.emit<object[]>('form-submit', inputData)
    }
    const callBack = (func?: validetaInputFunc) => {
      if (func === undefined) return
      validetaInputArr.push(func)
    }

    emitter.on('form-item-created', callBack)

    return {
      submitForm,
      callBack,
      isPassed
    }
  },
  unmounted () {
    emitter.off('form-item-created', this.callBack)
  }
})
</script>

<style>
</style>
