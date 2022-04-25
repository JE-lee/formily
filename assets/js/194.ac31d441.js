(window.webpackJsonp=window.webpackJsonp||[]).push([[194],{658:function(n,e,o){"use strict";o.r(e),e.default='<template>\n  <Form :form="form">\n    <SchemaField>\n      <SchemaStringField\n        name="input"\n        title="输入框"\n        x-decorator="FormItem"\n        x-component="Input"\n        required\n      />\n    </SchemaField>\n    <Submit @submit="onSubmit">提交</Submit>\n  </Form>\n</template>\n\n<script>\nimport { createForm } from \'@formily/core\'\nimport { createSchemaField } from \'@formily/vue\'\nimport { Form, FormItem, Input, Submit } from \'@formily/view-design\'\n\nconst form = createForm()\nconst fields = createSchemaField({\n  components: {\n    FormItem,\n    Input,\n  },\n})\n\nexport default {\n  components: { Form, ...fields, Submit },\n  data() {\n    return {\n      form,\n    }\n  },\n  methods: {\n    onSubmit(value) {\n      console.log(value)\n    },\n  },\n}\n<\/script>\n'}}]);