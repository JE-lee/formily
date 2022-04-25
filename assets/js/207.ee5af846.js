(window.webpackJsonp=window.webpackJsonp||[]).push([[207],{674:function(n,o,r){"use strict";r.r(o),o.default='<template>\n  <FormProvider :form="form">\n    <Field\n      name="input"\n      title="输入框"\n      :decorator="[FormItem]"\n      :component="[\n        InputNumber,\n        {\n          style: {\n            width: \'240px\',\n          },\n        },\n      ]"\n    />\n    <Submit @submit="log">提交</Submit>\n  </FormProvider>\n</template>\n\n<script>\nimport { createForm } from \'@formily/core\'\nimport { FormProvider, Field } from \'@formily/vue\'\nimport { FormItem, InputNumber, Submit } from \'@formily/view-design\'\n\nconst form = createForm()\n\nexport default {\n  components: { FormProvider, Field, Submit },\n  data() {\n    return {\n      FormItem,\n      InputNumber,\n      form,\n    }\n  },\n  methods: {\n    log(value) {\n      console.log(value)\n    },\n  },\n}\n<\/script>\n'}}]);