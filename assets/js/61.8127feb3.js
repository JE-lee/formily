(window.webpackJsonp=window.webpackJsonp||[]).push([[61],{353:function(e,t,r){var n=r(1),o=r(6);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:r(181)})},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return c}));r(103),r(31),r(33),r(361),r(98),r(99),r(182),r(353),r(177);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},802:function(e,t,r){"use strict";r.r(t);var n=r(354),o=r(352),c=r(347),i=r(355),a=Object(o.createForm)(),s=Object(c.createSchemaField)({components:{FormItem:i.FormItem,Transfer:i.Transfer}}),u={components:Object(n.a)(Object(n.a)({FormProvider:c.FormProvider},s),{},{Submit:i.Submit}),data:function(){return{form:a}},methods:{log:function(e){console.log(e)}}},l=r(20),b=Object(l.a)(u,(function(){var e=this.$createElement,t=this._self._c||e;return t("FormProvider",{attrs:{form:this.form}},[t("SchemaField",[t("SchemaStringField",{attrs:{name:"input",title:"单选","x-decorator":"FormItem","x-component":"Transfer",enum:[{label:"选项1",key:1},{label:"选项2",key:2}]}})],1),this._v(" "),t("Submit",{on:{submit:this.log}},[this._v("提交")])],1)}),[],!1,null,null,null);t.default=b.exports}}]);