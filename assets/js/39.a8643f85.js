(window.webpackJsonp=window.webpackJsonp||[]).push([[39],{353:function(t,e,r){var n=r(1),o=r(6);n({target:"Object",stat:!0,forced:!o,sham:!o},{defineProperties:r(181)})},354:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(103),r(31),r(33),r(361),r(98),r(99),r(182),r(353),r(177);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},761:function(t,e,r){"use strict";r.r(e);var n=r(354),o=r(352),c=r(347),i=r(355),u=Object(o.createForm)(),a=Object(c.createSchemaField)({components:{FormItem:i.FormItem,Input:i.Input}}),s={components:Object(n.a)(Object(n.a)({Form:i.Form},a),{},{Submit:i.Submit}),data:function(){return{form:u}},methods:{onSubmit:function(t){console.log(t)}}},m=r(20),b=Object(m.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("Form",{attrs:{form:this.form}},[e("SchemaField",[e("SchemaStringField",{attrs:{name:"input",title:"输入框","x-decorator":"FormItem","x-component":"Input",required:""}})],1),this._v(" "),e("Submit",{on:{submit:this.onSubmit}},[this._v("提交")])],1)}),[],!1,null,null,null);e.default=b.exports}}]);