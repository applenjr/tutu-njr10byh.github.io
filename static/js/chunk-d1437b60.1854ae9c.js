(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d1437b60"],{"8b78":function(t,e,a){},b011:function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[["root","superadmin"].includes(this.$store.state.signed_authorize)?a("div",{staticClass:"UserList"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Search"}),a("div",{staticClass:"refresh_handle"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-plus"},on:{click:function(e){t.add_admin_dialog=!0}}},[t._v(" 添加管理员 ")])],1)])]),a("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:t.tableData,"tooltip-effect":"dark",border:"",stripe:""}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{prop:"userName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"userGh",label:"工号"}}),a("el-table-column",{attrs:{prop:"authorize",label:"权限"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"120"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("div",{staticClass:"setting"},[a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){return t.handleDelete(e.row)}}},[t._v(" 删除 ")])],1)]}}],null,!1,4128604754)})],1),a("el-dialog",{attrs:{title:"添加管理员",visible:t.add_admin_dialog,width:"30%"},on:{"update:visible":function(e){t.add_admin_dialog=e}}},[a("div",[a("span",[t._v("姓名：")]),a("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入姓名"},model:{value:t.willadd.userName,callback:function(e){t.$set(t.willadd,"userName",e)},expression:"willadd.userName"}})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("span",[t._v("工号：")]),a("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入工号"},model:{value:t.willadd.userGh,callback:function(e){t.$set(t.willadd,"userGh",e)},expression:"willadd.userGh"}})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("span",[t._v("手机号：")]),a("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入手机号"},model:{value:t.willadd.userPhone,callback:function(e){t.$set(t.willadd,"userPhone",e)},expression:"willadd.userPhone"}})],1),a("div",{staticStyle:{"margin-top":"20px"}},[a("span",[t._v("身份证号：")]),a("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入身份证号"},model:{value:t.willadd.userIdCard,callback:function(e){t.$set(t.willadd,"userIdCard",e)},expression:"willadd.userIdCard"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.add_admin_dialog=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.addConfirm()}}},[t._v("添 加")])],1)])],1):a("div",[a("el-empty",{attrs:{description:"无权限"}},[a("t-button",{attrs:{theme:"primary",size:"large"},on:{click:t.RoleLow_back}},[t._v(" 返回 ")])],1)],1)])},l=[],i=(a("caad"),a("5f87")),n={data:function(){return{tableData:[],total:0,add_admin_dialog:!1,willadd:{userName:"",userGh:"",userPhone:"",userIdCard:""}}},mounted:function(){Object(i["a"])()},created:function(){var t=this;setTimeout((function(){["root","superadmin"].includes(t.$store.state.signed_authorize)?t.refresh():t.$message.warning("权限不足！")}),300)},methods:{RoleLow_back:function(){window.history.back()},refresh:function(){var t=this,e=this;e.tableData=[],e.request("/admin/getAdminList",{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){for(var s=0;s<a.data.data.length;s++){var l={};l.index=s+1,l.userName=a.data.data[s].userName,l.userGh=a.data.data[s].userGh,l.authorize=a.data.data[s].role,e.tableData.push(l)}t.$message.success("数据已更新！")}else t.$message.error(a.data.data.errMsg)})).catch((function(){t.$message.success("出错了！")}))},addConfirm:function(){var t=this,e=this;console.log(e.willadd),e.request("/admin/addAdmin",e.willadd,"POST",{}).then((function(a){console.log(a.data),"success"==a.data.status?(t.$message.success("添加成功！"),e.refresh()):t.$message.error(a.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.success("出错了！")})),e.add_admin_dialog=!1,e.refresh()},handleDelete:function(t){var e=this,a=this;console.log(t),this.$confirm("确定删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var s="/admin/deleteAdmin?userGh="+t.userGh;a.request(s,{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.$message.success("已删除！"),a.refresh()):e.$message.error(t.data.data.errMsg)})).catch((function(){e.$message.success("出错了！")}))})).catch((function(){e.$message.info("取消操作！")}))}}},r=n,o=(a("b129"),a("2877")),d=Object(o["a"])(r,s,l,!1,null,null,null);e["default"]=d.exports},b129:function(t,e,a){"use strict";a("8b78")}}]);