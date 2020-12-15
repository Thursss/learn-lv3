<template>
  <div class="login-page mx-auto p-3 w-330">
    <validate-form>
      <validate-input :leadel="'账号'" :rule="accountInput" />
      <validate-input :leadel="'密码'" :rule="passWordInput" />
    </validate-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ValidateForm, ValidateInput, inputRulesProp, formEmitter } from 'components/exports'

const accountInput: inputRulesProp = [
  {
    type: 'requires',
    message: '请输入账号'
  },
  {
    type: 'min',
    message: '请输入正确的账号'
  }
]
const passWordInput: inputRulesProp = [
  {
    type: 'password',
    message: '请输入正确的密码'
  }
]

export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const onSubmit = (isPassed?: boolean) => {
      console.log(isPassed)
    }
    formEmitter.on('form-submit', onSubmit)
    return {
      accountInput,
      passWordInput,
      onSubmit
    }
  },
  unmounted () {
    formEmitter.off('form-submit', this.onSubmit)
  }
})
</script>

<style>

</style>
