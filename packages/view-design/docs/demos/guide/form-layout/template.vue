<template>
  <FormProvider :form="form">
    <FormLayout :labelCol="6" :wrapperCol="10">
      <Field
        name="input"
        title="输入框"
        :decorator="[
          FormItem,
          {
            tooltip: '123',
          },
        ]"
        :component="[Input]"
        :required="true"
      />
      <Field
        name="select"
        title="选择框"
        :decorator="[FormItem]"
        :component="[Select]"
        :required="true"
      />
    </FormLayout>
  </FormProvider>
</template>

<script>
import { createForm } from '@formily/core'
import { FormProvider, Field } from '@formily/vue'
import { FormLayout, FormItem, Input, Select } from '@formily/view-design'

export default {
  components: { FormProvider, Field, FormLayout },
  data() {
    const form = createForm()
    return {
      FormLayout,
      FormItem,
      Input,
      Select,
      form,
    }
  },
}
</script>
