<template>
  <div class="login-page mx-auto p-3 w-330">
    <validate-form>
      <validate-input :leadel="'邮箱'" :rule="accountInput" />
      <validate-input type="password" :leadel="'密码'" :rule="passWordInput" />
    </validate-form>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue'
import { ValidateForm, ValidateInput, inputRulesProp, formEmitter } from 'components/exports'
import { GlobalDataProps } from '@/store'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

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
    const store = useStore<GlobalDataProps>()
    const router = useRouter()

    const onSubmit = (inputData?: object[]) => {
      if (inputData === undefined || inputData.length <= 0) return
      store.commit('login', (inputData[0] as any).val)
      router.push('/')
      // inputData.forEach((data) => {
      //   console.log((data as any).val)
      // })
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
