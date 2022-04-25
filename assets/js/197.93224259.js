(window.webpackJsonp=window.webpackJsonp||[]).push([[197],{661:function(n,e,o){"use strict";o.r(e),e.default="<template>\n  <FormProvider :form=\"form\">\n    <SchemaField :schema=\"schema\" />\n  </FormProvider>\n</template>\n\n<script>\nimport { createForm } from '@formily/core'\nimport { createSchemaField, FormProvider } from '@formily/vue'\nimport {\n  FormItem,\n  FormLayout,\n  Input,\n  Select,\n  Submit,\n} from '@formily/view-design'\n\nconst schema = {\n  type: 'object',\n  properties: {\n    layout: {\n      type: 'void',\n      'x-component': 'FormLayout',\n      'x-component-props': {\n        labelCol: 6,\n        wrapperCol: 10,\n      },\n      properties: {\n        input: {\n          type: 'string',\n          title: '输入框',\n          required: true,\n          'x-decorator': 'FormItem',\n          'x-decorator-props': {\n            tooltip: '123',\n          },\n          'x-component': 'Input',\n        },\n        select: {\n          type: 'string',\n          title: '选择框',\n          required: true,\n          'x-decorator': 'FormItem',\n          'x-component': 'Select',\n        },\n      },\n    },\n  },\n}\n\nconst form = createForm()\nconst fields = createSchemaField({\n  components: {\n    FormLayout,\n    FormItem,\n    Input,\n    Select,\n  },\n})\n\nexport default {\n  components: { FormProvider, ...fields, Submit },\n  data() {\n    return {\n      form,\n      schema,\n    }\n  },\n  methods: {\n    onSubmit(value) {\n      console.log(value)\n    },\n  },\n}\n<\/script>\n"}}]);