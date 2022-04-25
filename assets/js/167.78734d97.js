(window.webpackJsonp=window.webpackJsonp||[]).push([[167],{631:function(n,e,o){"use strict";o.r(e),e.default='<template>\n  <Form :form="form">\n    <SchemaField>\n      <SchemaBooleanField\n        name="single"\n        title="是否确认"\n        x-decorator="FormItem"\n        x-component="Checkbox"\n      />\n      <SchemaArrayField\n        name="multiple"\n        title="复选"\n        :enum="[\n          { label: \'选项1\', value: 1 },\n          { label: \'选项2\', value: 2 },\n        ]"\n        x-decorator="FormItem"\n        x-component="CheckboxGroup"\n      />\n    </SchemaField>\n    <Submit @submit="onSubmit">提交</Submit>\n  </Form>\n</template>\n\n<script>\nimport { createForm } from \'@formily/core\'\nimport { createSchemaField } from \'@formily/vue\'\nimport {\n  Form,\n  FormItem,\n  Checkbox,\n  CheckboxGroup,\n  Submit,\n} from \'@formily/view-design\'\n\nconst form = createForm()\nconst fields = createSchemaField({\n  components: {\n    FormItem,\n    Checkbox,\n    CheckboxGroup,\n  },\n})\n\nexport default {\n  components: { Form, ...fields, Submit },\n  data() {\n    return {\n      form,\n    }\n  },\n  methods: {\n    onSubmit(value) {\n      console.log(value)\n    },\n  },\n}\n<\/script>\nl\n'}}]);