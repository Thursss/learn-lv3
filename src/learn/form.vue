<template>
  <div>
    <form class="form-horizontal">
      <validate-input :rule="emailRules" v-model="emailVal"  placeholder="输入邮箱地址" type="text"/>
    </form>
    <p>{{ emailVal }}</p>
  </div>
</template>

<script lang='ts'>
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, ref } from 'vue'
import { ValidateInput, RulesProp } from '../components/components'

export default defineComponent({
  components: {
    ValidateInput
  },
  setup () {
    const emailVal = ref('vvv')
    const emailRules: RulesProp = [
      {
        type: 'requires',
        message: '电子邮箱不能为空'
      },
      {
        type: 'min',
        message: '不能少于6个字母'
      },
      {
        type: 'email',
        message: '电子邮箱格式不正确'
      }
    ]
    return {
      emailRules,
      emailVal
    }
  }
})
</script>

<style>
#inputError1 {
  border: 1px solid red;
}
</style>
