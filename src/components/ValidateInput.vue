<template>
  <div class="form-group row mb-2">
    <label for="validationServer03" class="col-sm-2 col-form-label">{{leadel}}</label>
    <div class="col-sm-10  mb-1">
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
    <div class="text-danger" :class="{'d-block': inputRef.error}">{{inputRef.message}}</div>
  </div>
</template>

<script lang='ts'>
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, reactive, PropType } from 'vue'
import { formEmitter } from './components'

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
    modelValue: String,
    leadel: String
  },
  inheritAttrs: false,
  setup (props, context) {
    const inputRef = reactive({
      val: props.modelValue || '',
      error: false,
      message: ''
    })

    const validetaInput = () => {
      if (!props || !props.rule) { return true }

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
      formEmitter.emit('form-item-created', allPassed)

      return allPassed
    }

    const onInput = (e: KeyboardEvent) => {
      const targetVal = (e.target as HTMLInputElement).value
      inputRef.val = targetVal
      context.emit('update:modelValue', targetVal)
    }

    formEmitter.on('form-submit', (isValidate) => {
      if (isValidate) validetaInput()
    })

    return {
      inputRef,
      validetaInput,
      onInput
    }
  },
  unmounted () {
    formEmitter.off('form-submit', this.validetaInput)
  }
})
</script>

<style>
</style>
