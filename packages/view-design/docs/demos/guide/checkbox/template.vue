<template>
  <Form :form="form">
    <Field
      name="single"
      title="是否确认"
      :decorator="[FormItem]"
      :component="[Checkbox]"
    />
    <ArrayField
      name="multiple"
      title="复选"
      :dataSource="[
        { label: '选项1', value: 1 },
        { label: '选项2', value: 2 },
      ]"
      :decorator="[FormItem]"
      :component="[CheckboxGroup]"
    />
    <Submit @submit="onSubmit">提交</Submit>
  </Form>
</template>

<script>
import { createForm } from '@formily/core'
import { Field, ArrayField } from '@formily/vue'
import {
  Form,
  FormItem,
  Checkbox,
  CheckboxGroup,
  Submit,
} from '@formily/view-design'

const form = createForm()

export default {
  components: { Form, Field, ArrayField, Submit },
  data() {
    return {
      FormItem,
      Checkbox,
      CheckboxGroup,
      form,
    }
  },
  methods: {
    onSubmit(value) {
      console.log(value)
    },
  },
}
</script>
