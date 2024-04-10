(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3cc7937f"],{"4efc":function(t,e,i){t.exports=i.p+"static/img/gateway.5a51e30f.png"},"52bb":function(t,e,i){t.exports=i.p+"static/img/product.66c3c4d5.png"},"98bc":function(t,e,i){"use strict";i.r(e);var r=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticStyle:{padding:"6px"}},[r("el-card",{staticStyle:{"margin-bottom":"5px"}},[r("el-form",{ref:"queryForm",staticStyle:{"margin-bottom":"-20px"},attrs:{model:t.queryParams,inline:!0,"label-width":"68px"}},[r("el-form-item",{attrs:{label:"产品名称",prop:"productName"}},[r("el-input",{attrs:{placeholder:"请输入产品名称",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.productName,callback:function(e){t.$set(t.queryParams,"productName",e)},expression:"queryParams.productName"}})],1),r("el-form-item",{attrs:{label:"分类名称",prop:"categoryName"}},[r("el-input",{attrs:{placeholder:"请输入产品分类名称",clearable:"",size:"small"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleQuery(e)}},model:{value:t.queryParams.categoryName,callback:function(e){t.$set(t.queryParams,"categoryName",e)},expression:"queryParams.categoryName"}})],1),r("el-form-item",{attrs:{label:"状态",prop:"status"}},[r("el-select",{attrs:{placeholder:"请选择状态",clearable:"",size:"small"},model:{value:t.queryParams.status,callback:function(e){t.$set(t.queryParams,"status",e)},expression:"queryParams.status"}},t._l(t.dict.type.iot_product_status,(function(t){return r("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)],1),r("el-form-item",[r("el-button",{attrs:{type:"primary",icon:"el-icon-search",size:"mini"},on:{click:t.handleQuery}},[t._v("搜索")]),r("el-button",{attrs:{icon:"el-icon-refresh",size:"mini"},on:{click:t.resetQuery}},[t._v("重置")])],1),r("el-form-item",{staticStyle:{float:"right"}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:add"],expression:"['iot:product:add']"}],attrs:{type:"primary",plain:"",icon:"el-icon-plus",size:"mini"},on:{click:function(e){return t.handleEditProduct(0)}}},[t._v("新增")])],1)],1)],1),r("el-card",{staticStyle:{"padding-bottom":"100px"}},[r("el-row",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],attrs:{gutter:30}},t._l(t.productList,(function(e,a){return r("el-col",{key:a,staticStyle:{"margin-bottom":"30px","text-align":"center"},attrs:{xs:24,sm:12,md:12,lg:8,xl:6}},[r("el-card",{staticClass:"card-item",attrs:{"body-style":{padding:"20px"},shadow:"always"}},[r("el-row",{attrs:{type:"flex",gutter:10,justify:"space-between"}},[r("el-col",{staticStyle:{"text-align":"left"},attrs:{span:20}},[r("el-link",{staticStyle:{"font-weight":"bold","font-size":"16px","line-height":"32px","white-space":"nowrap"},attrs:{type:"",underline:!1},on:{click:function(i){return t.handleEditProduct(e)}}},[r("svg-icon",{attrs:{"icon-class":"product"}}),t._v(" "+t._s(e.productName)+" "),1==e.isSys?r("el-tag",{staticStyle:{"margin-left":"5px","font-weight":"200"},attrs:{type:"info",size:"mini"}},[t._v("系统")]):t._e()],1)],1),r("el-col",{attrs:{span:4}},[2==e.status?r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"取消发布",placement:"top-start"}},[r("el-button",{staticStyle:{padding:"5px"},attrs:{type:"success",size:"mini"},on:{click:function(i){return t.changeProductStatus(e.productId,1,e.deviceType)}}},[t._v("已发布")])],1):t._e(),1==e.status?r("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"现在发布",placement:"top-start"}},[r("el-button",{staticStyle:{padding:"5px"},attrs:{type:"info",size:"mini"},on:{click:function(i){return t.changeProductStatus(e.productId,2,e.deviceType)}}},[t._v("未发布")])],1):t._e()],1)],1),r("el-row",{attrs:{gutter:10}},[r("el-col",{attrs:{span:14}},[r("el-descriptions",{staticStyle:{"margin-top":"10px","white-space":"nowrap"},attrs:{column:1,size:"small"}},[r("el-descriptions-item",{attrs:{label:"所属分类"}},[r("el-link",{attrs:{type:"primary",underline:!1}},[t._v(t._s(e.categoryName))])],1),r("el-descriptions-item",{attrs:{label:"产品类型"}},[r("dict-tag",{attrs:{options:t.dict.type.iot_device_type,value:e.deviceType}})],1),r("el-descriptions-item",{attrs:{label:"联网方式"}},[r("dict-tag",{attrs:{options:t.dict.type.iot_network_method,value:e.networkMethod}})],1),r("el-descriptions-item",{attrs:{label:"设备授权"}},[1==e.isAuthorize?r("el-tag",{attrs:{type:"success",size:"mini"}},[t._v("已启用")]):r("el-tag",{attrs:{type:"info",size:"mini"}},[t._v("未启用")])],1)],1)],1),r("el-col",{attrs:{span:10}},[r("div",{staticStyle:{"margin-top":"10px"}},[null!=e.imgUrl&&""!=e.imgUrl?r("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{lazy:"","preview-src-list":[t.baseUrl+e.imgUrl],src:t.baseUrl+e.imgUrl,fit:"cover"}}):2==e.deviceType?r("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{"preview-src-list":[i("4efc")],src:i("4efc"),fit:"cover"}}):3==e.deviceType?r("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{"preview-src-list":[i("c59e")],src:i("c59e"),fit:"cover"}}):r("el-image",{staticStyle:{width:"100%",height:"100px","border-radius":"10px"},attrs:{"preview-src-list":[i("52bb")],src:i("52bb"),fit:"cover"}})],1)])],1),r("el-button-group",{staticStyle:{"margin-top":"15px",height:"28px"}},[r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:query"],expression:"['iot:product:query']"}],attrs:{size:"mini",type:"primary",icon:"el-icon-view"},on:{click:function(i){return t.handleEditProduct(e)}}},[t._v("详情")]),1==e.status?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:remove"],expression:"['iot:product:remove']"}],attrs:{size:"mini",type:"danger",icon:"el-icon-delete"},on:{click:function(i){return t.handleDelete(e)}}},[t._v("删除")]):t._e(),2==e.status?r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:product:edit"],expression:"['iot:product:edit']"}],attrs:{size:"mini",type:"success",icon:"el-icon-s-check",disabled:1!=e.isAuthorize},on:{click:function(i){return t.handleDeviceAuthorize(e)}}},[t._v("设备授权")]):t._e(),r("el-button",{directives:[{name:"hasPermi",rawName:"v-hasPermi",value:["iot:device:query"],expression:"['iot:device:query']"}],attrs:{size:"mini",type:"warning",icon:"el-icon-search"},on:{click:function(i){return t.handleViewDevice(e.productId)}}},[t._v("查看设备")])],1)],1)],1)})),1),0==t.total?r("el-empty",{attrs:{description:"暂无数据，请添加产品"}}):t._e(),r("pagination",{directives:[{name:"show",rawName:"v-show",value:t.total>0,expression:"total>0"}],attrs:{total:t.total,page:t.queryParams.pageNum,limit:t.queryParams.pageSize,pageSizes:[12,24,36,60]},on:{"update:page":function(e){return t.$set(t.queryParams,"pageNum",e)},"update:limit":function(e){return t.$set(t.queryParams,"pageSize",e)},pagination:t.getList}}),r("el-dialog",{attrs:{title:t.title,visible:t.open,width:"500px","append-to-body":""},on:{"update:visible":function(e){t.open=e}}},[r("el-link",{staticStyle:{"padding-left":"10px"},attrs:{type:"danger",underline:!1}},[t._v("该功能暂未实现，参考教程和项目的SDK示例")]),r("el-form",{attrs:{"label-width":"80px"}},[r("el-form-item",{attrs:{label:"设备类型"}},[r("el-radio-group",{model:{value:t.form.datatype,callback:function(e){t.$set(t.form,"datatype",e)},expression:"form.datatype"}},t._l(t.dict.type.iot_device_chip,(function(e){return r("el-radio",{key:e.value,staticStyle:{"margin-top":"15px",width:"160px"},attrs:{label:e.value}},[t._v(t._s(e.label))])})),1)],1)],1),r("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{attrs:{type:"primary",disabled:""},on:{click:t.downloadSdk}},[t._v("下 载")]),r("el-button",{on:{click:t.cancel}},[t._v("取 消")])],1)],1)],1)],1)},a=[],n=i("c7eb"),o=i("1da1"),s=(i("14d9"),i("a9e3"),i("d3b7"),i("9b9c")),c=(i("caad"),i("2532"),i("4360"));function u(t){if(t&&t instanceof Array&&t.length>0){var e=c["a"].getters&&c["a"].getters.permissions,i=t,r="*:*:*",a=e.some((function(t){return r===t||i.includes(t)}));return!!a}return console.error("need roles! Like checkPermi=\"['system:user:add','system:user:edit']\""),!1}var l={name:"Product",dicts:["iot_yes_no","iot_product_status","iot_device_type","iot_network_method","iot_vertificate_method","iot_device_chip"],data:function(){return{loading:!0,total:0,productList:[],title:"",open:!1,queryParams:{pageNum:1,pageSize:12,productName:null,categoryId:null,categoryName:null,tenantId:null,tenantName:null,isSys:null,status:null,deviceType:null,networkMethod:null},form:{},baseUrl:"/prod-api"}},created:function(){this.getList()},activated:function(){var t=this.$route.query.t;null!=t&&t!=this.uniqueId&&(this.uniqueId=t,this.queryParams.pageNum=Number(this.$route.query.pageNum),this.getList())},methods:{getList:function(){var t=this;this.loading=!0,Object(s["f"])(this.queryParams).then((function(e){t.productList=e.rows,t.total=e.total,t.loading=!1}))},getDeviceCountByProductId:function(t){return new Promise((function(e,i){Object(s["d"])(t).then((function(t){e(t)})).catch((function(t){i(t)}))}))},changeProductStatus:function(t,e,i){var r=this;return Object(o["a"])(Object(n["a"])().mark((function a(){var o,c,l,d;return Object(n["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(o="确定取消发布？",2!=e){a.next=9;break}if(c=u(["iot:product:add"]),c){a.next=6;break}return r.$modal.alertError("没有操作权限"),a.abrupt("return");case 6:o="产品发布后，可以创建对应的设备",a.next=18;break;case 9:if(1!=e){a.next=18;break}if(l=u(["iot:product:edit"]),l){a.next=14;break}return r.$modal.alertError("没有操作权限"),a.abrupt("return");case 14:return a.next=16,r.getDeviceCountByProductId(t);case 16:d=a.sent,d.data>0&&(o="重要提示：产品下已有 "+d.data+" 个设备，取消发布可以修改产品信息和模型，重新发布后对应设备状态将会被重置！");case 18:r.$confirm(o,"提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a={};a.productId=t,a.status=e,a.deviceType=i,Object(s["b"])(a).then((function(t){r.getList(),r.$modal.alertSuccess(t.msg)})).catch((function(){}))})).catch((function(){}));case 19:case"end":return a.stop()}}),a)})))()},handleViewDevice:function(t){this.$router.push({path:"/iot/device",query:{t:Date.now(),productId:t}})},cancel:function(){this.open=!1,this.reset()},handleQuery:function(){this.queryParams.pageNum=1,this.getList()},resetQuery:function(){this.resetForm("queryForm"),this.handleQuery()},handleGeneratorSDK:function(t){this.title="生成SDK",this.open=!0},downloadSdk:function(){this.$download.zip("/iot/tool/genSdk?deviceChip=1","fastbee-sdk")},handleDelete:function(t){var e=this,i=t.productId||this.ids,r="";this.$modal.confirm('是否确认删除产品编号为"'+i+'"的数据项？').then((function(){return Object(s["c"])(i)})).then((function(){e.getList(),e.$modal.msgSuccess(r)})).catch((function(){}))},handleEditProduct:function(t){var e=0;0!=t&&(e=t.productId||this.ids),this.$router.push({path:"/iot/product-edit",query:{productId:e,pageNum:this.queryParams.pageNum}})},handleDeviceAuthorize:function(t){var e=t.productId;this.$router.push({path:"/iot/product-edit",query:{productId:e,tabPanelName:"productAuthorize",pageNum:this.queryParams.pageNum}})}}},d=l,p=(i("c445"),i("2877")),m=Object(p["a"])(d,r,a,!1,null,"9657abb2",null);e["default"]=m.exports},"9b9c":function(t,e,i){"use strict";i.d(e,"f",(function(){return a})),i.d(e,"e",(function(){return n})),i.d(e,"a",(function(){return o})),i.d(e,"g",(function(){return s})),i.d(e,"d",(function(){return c})),i.d(e,"b",(function(){return u})),i.d(e,"c",(function(){return l}));var r=i("b775");function a(t){return Object(r["a"])({url:"/iot/product/list",method:"get",params:t})}function n(t){return Object(r["a"])({url:"/iot/product/"+t,method:"get"})}function o(t){return Object(r["a"])({url:"/iot/product",method:"post",data:t})}function s(t){return Object(r["a"])({url:"/iot/product",method:"put",data:t})}function c(t){return Object(r["a"])({url:"/iot/product/deviceCount/"+t,method:"get"})}function u(t){return Object(r["a"])({url:"/iot/product/status/",method:"put",data:t})}function l(t){return Object(r["a"])({url:"/iot/product/"+t,method:"delete"})}},c445:function(t,e,i){"use strict";i("ffb42")},c59e:function(t,e,i){t.exports=i.p+"static/img/video.fb1e1b71.png"},ffb42:function(t,e,i){}}]);