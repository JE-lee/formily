(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{353:function(e,t,r){var o=r(1),n=r(6);o({target:"Object",stat:!0,forced:!n,sham:!n},{defineProperties:r(181)})},354:function(e,t,r){"use strict";r.d(t,"a",(function(){return a}));r(103),r(31),r(33),r(361),r(98),r(99),r(182),r(353),r(177);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},723:function(e,t,r){"use strict";r.r(t);var o=r(354),n=r(352),a=r(347),p=r(355),i=Object(a.createSchemaField)({components:{FormItem:p.FormItem,ArrayTable:p.ArrayTable,ArrayTableColumn:p.ArrayTableColumn,ArrayTableAddition:p.ArrayTableAddition,ArrayTableMoveDown:p.ArrayTableMoveDown,ArrayTableMoveUp:p.ArrayTableMoveUp,ArrayTableRemove:p.ArrayTableRemove,ArrayTableIndex:p.ArrayTableIndex,ArrayTableSortHandle:p.ArrayTableSortHandle,Input:p.Input,Editable:p.Editable}}),c={components:Object(o.a)({FormProvider:a.FormProvider,Submit:p.Submit},i),data:function(){return{form:Object(n.createForm)(),schema:{type:"object",properties:{array:{type:"array","x-decorator":"FormItem","x-component":"ArrayTable",items:{type:"object",properties:{column1:{type:"void","x-component":"ArrayTableColumn","x-component-props":{width:80,title:"Index",align:"center"},properties:{index:{type:"void","x-component":"ArrayTableIndex"}}},column2:{type:"void","x-component":"ArrayTableColumn","x-component-props":{width:200,title:"A1"},properties:{a1:{type:"string","x-decorator":"Editable","x-component":"Input"}}},column3:{type:"void","x-component":"ArrayTableColumn","x-component-props":{width:200,title:"A2"},properties:{a2:{type:"string","x-decorator":"FormItem","x-component":"Input"}}},column4:{type:"void","x-component":"ArrayTableColumn","x-component-props":{title:"A3"},properties:{a3:{type:"string","x-decorator":"FormItem","x-component":"Input"}}},column5:{type:"void","x-component":"ArrayTableColumn","x-component-props":{title:"Operations",prop:"operations",width:200},properties:{item:{type:"void","x-component":"FormItem",properties:{remove:{type:"void","x-component":"ArrayTableRemove"},moveDown:{type:"void","x-component":"ArrayTableMoveDown"},moveUp:{type:"void","x-component":"ArrayTableMoveUp"}}}}}}},properties:{add:{type:"void","x-component":"ArrayTableAddition",title:"添加条目"}}}}}}},methods:{log:function(){var e;(e=console).log.apply(e,arguments)}}},l=r(20),m=Object(l.a)(c,(function(){var e=this.$createElement,t=this._self._c||e;return t("FormProvider",{attrs:{form:this.form}},[t("SchemaField",{attrs:{schema:this.schema}}),this._v(" "),t("Submit",{on:{submit:this.log}},[this._v("提交")])],1)}),[],!1,null,null,null);t.default=m.exports}}]);