(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{353:function(t,e,r){var o=r(1),n=r(6);o({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperties:r(181)})},354:function(t,e,r){"use strict";r.d(e,"a",(function(){return c}));r(103),r(31),r(33),r(361),r(98),r(99),r(182),r(353),r(177);function o(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function n(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);e&&(o=o.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,o)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?n(Object(r),!0).forEach((function(e){o(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}},782:function(t,e,r){"use strict";r.r(e);var o=r(354),n=r(352),c=r(347),i=r(355),u=Object(c.createSchemaField)({components:{FormItem:i.FormItem,Input:i.Input}}),a={components:Object(o.a)({FormProvider:c.FormProvider,FormLayout:i.FormLayout,Reset:i.Reset,FormButtonGroup:i.FormButtonGroup},u),data:function(){return{form:Object(n.createForm)()}}},s=r(20),m=Object(s.a)(a,(function(){var t=this.$createElement,e=this._self._c||t;return e("FormProvider",{attrs:{form:this.form}},[e("SchemaField",[e("SchemaStringField",{attrs:{required:"",name:"input1",title:"输入框","x-decorator":"FormItem","x-component":"Input"}}),this._v(" "),e("SchemaStringField",{attrs:{required:"",title:"输入框",name:"input2","x-decorator":"FormItem","x-component":"Input",default:"123"}})],1),this._v(" "),e("FormButtonGroup",{attrs:{"align-form-item":""}},[e("Reset",{attrs:{forceClear:""}},[this._v("重置")])],1)],1)}),[],!1,null,null,null);e.default=m.exports}}]);