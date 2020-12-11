<template>
  <div>
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
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import mitt from 'mitt'

export const emitter = mitt()
export default defineComponent({
  setup () {
    const isPassed = ref(true)
    const submitForm = () => {
      emitter.emit('form-submit', true)
    }
    const callBack = (ispassed: any) => {
      isPassed.value = ispassed
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
