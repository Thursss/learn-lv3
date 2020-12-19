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
    <div class="text-danger" :class="{'d-none': !inputRef.error}">{{inputRef.message}}</div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, PropType } from 'vue'
import { formEmitter } from 'components/exports'

interface RuleProp {
  type: 'requires' | 'email' | 'min' | 'max' | 'phone' | 'password';
  message: string;
}

const emailReg = /^\w+@[a-zA-Z0-9]{2,10}(?:\.[a-z]{2,4}){1,3}$/
const phoneReg = /^((0\d{2,3}-\d{7,8})|(1[3584]\d{9}))$/
const passwordReg = /^[a-zA-Z]\w{5,17}$/

export type RuleProps = RuleProp[]

export default defineComponent({
  props: {
    rule: Array as PropType<RuleProps>,
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
      if (!props || !props.rule) return true

      const val = inputRef.val.trim()
      const allPassed: boolean = props.rule.every(rule => {
        let passed = true
        switch (rule.type) {
          case 'requires':
            passed = (val !== '')
            break
          case 'min':
            passed = (val.length >= 6)
            break
          case 'max':
            passed = (val.length <= 26)
            break
          case 'password':
            passed = (passwordReg.test(val))
            break
          case 'phone':
            passed = phoneReg.test(val)
            break
          case 'email':
            passed = emailReg.test(val)
            break
          default:
            break
        }
        inputRef.message = rule.message
        return passed
      })
      inputRef.error = !allPassed
      return {
        isPassed: allPassed,
        val: val
      }
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
  },
  mounted () {
    formEmitter.emit<Function>('form-item-created', this.validetaInput)
  },
  unmounted () {
    formEmitter.off<Function>('form-submit', this.validetaInput)
  }
})
</script>

<style>
</style>
