(window.webpackJsonp=window.webpackJsonp||[]).push([[233],{697:function(n,e,o){"use strict";o.r(e),e.default='<template>\n  <FormProvider :form="form">\n    <SchemaField>\n      <SchemaStringField\n        required\n        name="input1"\n        title="输入框"\n        x-decorator="FormItem"\n        x-component="Input"\n      />\n      <SchemaStringField\n        required\n        title="输入框"\n        name="input2"\n        x-decorator="FormItem"\n        x-component="Input"\n      />\n    </SchemaField>\n    <FormButtonGroup align-form-item>\n      <Submit @submit="handleSubmit">提交</Submit>\n    </FormButtonGroup>\n  </FormProvider>\n</template>\n\n<script>\nimport { createForm } from \'@formily/core\'\nimport { FormProvider, createSchemaField } from \'@formily/vue\'\nimport {\n  FormLayout,\n  Submit,\n  FormButtonGroup,\n  FormItem,\n  Input,\n} from \'@formily/view-design\'\n\nconst fields = createSchemaField({ components: { FormItem, Input } })\n\nexport default {\n  components: {\n    FormProvider,\n    FormLayout,\n    Submit,\n    FormButtonGroup,\n    ...fields,\n  },\n  data() {\n    const form = createForm()\n    return {\n      form,\n    }\n  },\n  methods: {\n    handleSubmit(values) {\n      return new Promise((resolve) => {\n        setTimeout(() => {\n          console.log(values)\n          resolve()\n        }, 2000)\n      })\n    },\n  },\n}\n<\/script>\n'}}]);