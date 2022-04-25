(window.webpackJsonp=window.webpackJsonp||[]).push([[234],{698:function(n,e,o){"use strict";o.r(e),e.default="<template>\n  <Form :form=\"form\">\n    <SchemaField :schema=\"schema\" />\n    <Submit @submit=\"onSubmit\">提交</Submit>\n  </Form>\n</template>\n\n<script>\nimport { createForm } from '@formily/core'\nimport { createSchemaField } from '@formily/vue'\nimport { Form, FormItem, Switch, Submit } from '@formily/view-design'\n\nconst schema = {\n  type: 'object',\n  properties: {\n    switch: {\n      type: 'boolean',\n      title: '开关',\n      'x-decorator': 'FormItem',\n      'x-component': 'Switch',\n    },\n  },\n}\n\nconst form = createForm()\nconst { SchemaField } = createSchemaField({\n  components: {\n    FormItem,\n    Switch,\n  },\n})\n\nexport default {\n  components: { Form, SchemaField, Submit },\n  data() {\n    return {\n      form,\n      schema,\n    }\n  },\n  methods: {\n    onSubmit(value) {\n      console.log(value)\n    },\n  },\n}\n<\/script>\n"}}]);