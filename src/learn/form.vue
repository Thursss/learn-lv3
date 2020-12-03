<template>
  <div>
    <validate-form>
      <validate-input :rule="emailRules" v-model="emailVal" :leadel="'邮箱'"  placeholder="输入邮箱地址" type="text"/>
      <validate-input :rule="emailRules" v-model="emailVal" :leadel="'邮箱'"  placeholder="输入邮箱地址" type="text"/>
      <template #submit>
        <span>提交</span>
      </template>
    </validate-form>
  </div>
</template>

<script lang='ts'>
import 'bootstrap/dist/css/bootstrap.min.css'
import { defineComponent, ref } from 'vue'
import { ValidateInput, ValidateForm, formRulesProp } from '../components/components'

export default defineComponent({
  components: {
    ValidateForm,
    ValidateInput
  },
  setup () {
    const emailVal = ref('')
    const emailRules: formRulesProp = [
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
</style>
