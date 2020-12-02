<template>
  <div class="form-group row">
    <label for="validationServer03" class="col-sm-2 col-form-label">邮箱</label>
    <div class="col-sm-10">
      <input
        class="form-control"
        id="validationServer03"
        :class="{'is-invalid': inputRef.error}"
        :value="inputRef.val"
        v-bind="$attrs"
        @blur="validetaInput"
        @input="onInput"
      />
    </div>
  </div>
  <div class="invalid-feedback" :style="{'display: block': inputRef.error}">{{inputRef.message}}</div>
</template>

<script lang='ts'>
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, reactive, PropType } from 'vue'

interface RuleProp {
  type: 'requires' | 'email' | 'min' | 'max' | 'phone';
  message: string;
}

const emailReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
const phoneReg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/

export type RulesProp = RuleProp[]

export default defineComponent({
  props: {
    rule: Array as PropType<RulesProp>,
    modelValue: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const validetaInput = () => {
      if (!props || !props.rule) { return }

      const allPassed = props.rule.every(rule => {
        let passed = true
        switch (rule.type) {
          case 'requires':
            passed = (inputRef.val.trim() !== '')
            break
          case 'min':
            passed = (inputRef.val.trim().length >= 6)
            break
          case 'max':
            passed = (inputRef.val.trim().length <= 26)
            break
          case 'phone':
            passed = phoneReg.test(inputRef.val)
            break
          case 'email':
            passed = emailReg.test(inputRef.val)
            break
          default:
            break
        }
        inputRef.message = rule.message
        return passed
      })
      inputRef.error = !allPassed
    }

    const onInput = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value
      inputRef.val = targetVal
      context.emit('update:modelValue', targetVal)
    }
    return {
      inputRef,
      validetaInput,
      onInput
    }
  }
})
</script>

<style>
</style>
