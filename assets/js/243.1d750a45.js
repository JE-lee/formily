(window.webpackJsonp=window.webpackJsonp||[]).push([[243],{707:function(n,e,o){"use strict";o.r(e),e.default="<template>\n  <Form :form=\"form\" :label-col=\"4\" :wrapper-col=\"10\">\n    <SchemaField :schema=\"schema\" />\n    <FormButtonGroup align-form-item>\n      <Submit @submit=\"onSubmit\">提交</Submit>\n    </FormButtonGroup>\n  </Form>\n</template>\n\n<script>\nimport { createForm } from '@formily/core'\nimport { createSchemaField } from '@formily/vue'\nimport {\n  Form,\n  FormItem,\n  Upload,\n  Submit,\n  FormButtonGroup,\n} from '@formily/view-design'\nimport { Button } from 'view-design'\n\nconst UploadButton = {\n  functional: true,\n  render(h) {\n    return h(Button, {}, '上传图片')\n  },\n}\n\nconst schema = {\n  type: 'object',\n  properties: {\n    base: {\n      type: 'array',\n      title: '上传',\n      'x-decorator': 'FormItem',\n      'x-component': 'Upload',\n      'x-component-props': {\n        action: 'https://formily-vue.free.beeceptor.com/file',\n        textContent: '上传',\n      },\n      required: true,\n    },\n    // card: {\n    //   type: 'array',\n    //   title: '卡片上传',\n    //   'x-decorator': 'FormItem',\n    //   'x-component': 'Upload',\n    //   'x-component-props': {\n    //     listType: 'picture-card',\n    //     action: 'https://formily-vue.free.beeceptor.com/file',\n    //   },\n    //   required: true,\n    // },\n    drag: {\n      type: 'array',\n      title: '拖拽上传',\n      'x-decorator': 'FormItem',\n      'x-component': 'Upload',\n      'x-component-props': {\n        action: 'https://formily-vue.free.beeceptor.com/file',\n        textContent: '将文件拖到此处，或者点击上传',\n        type: 'drag',\n      },\n      required: true,\n    },\n    custom: {\n      type: 'array',\n      title: '自定义按钮',\n      'x-decorator': 'FormItem',\n      'x-component': 'Upload',\n      'x-component-props': {\n        action: 'https://formily-vue.free.beeceptor.com/file',\n      },\n      'x-content': UploadButton,\n      required: true,\n    },\n  },\n}\n\nconst form = createForm()\nconst { SchemaField } = createSchemaField({\n  components: {\n    FormItem,\n    Upload,\n  },\n})\n\nexport default {\n  components: { Form, SchemaField, Submit, FormButtonGroup },\n  data() {\n    return {\n      form,\n      schema,\n    }\n  },\n  methods: {\n    onSubmit(value) {\n      console.log(value)\n    },\n  },\n}\n<\/script>\n"}}]);