(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-063b51e0"],{"2a79":function(e,t,s){e.exports=s.p+"static/img/file_pdf.1bf2177c.png"},"62a2":function(e,t,s){},e931:function(e,t,s){e.exports=s.p+"static/img/file_word.cdded0c4.png"},f869:function(e,t,s){"use strict";s.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Files_Onlyfile_Container"},[a("div",{staticClass:"top_buttons"},["accounting"!=e.table_type?a("el-upload",{attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("el-button",{attrs:{icon:"el-icon-upload2"}},[e._v("上传文件")])],1):e._e(),"accounting"!=e.table_type?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-download"},on:{click:e.List_download}},[e._v(" 打包下载 ")]):e._e(),"accounting"==e.table_type?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-download"},on:{click:e.getAccountingInfo}},[e._v(" 生成入账通知单 ")]):e._e()],1),a("el-table",{ref:"multipleTable",staticClass:"tableStyle",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"}},[a("el-table-column",{attrs:{prop:"file_name",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"filebox"},["accounting"==e.table_type?a("img",{attrs:{src:s("e931")}}):a("img",{attrs:{src:s("2a79")}}),a("a",{on:{click:function(s){return e.downloadFiles(t.row)}}},[e._v(e._s(t.row.file_name))])])]}}])}),a("el-table-column",{attrs:{prop:"fixtime",label:"修改时间"}})],1)],1)},o=[],i=s("5530"),c=(s("fb6a"),s("ac1f"),s("1276"),s("b0c0"),s("d3b7"),s("3ca3"),s("ddb0"),s("2b3d"),s("2f62")),n={data:function(){return{table_type:this.$route.query.type,tableData:[],loading:!0,multipleSelection:[],projectCode:this.$store.state.contract_files.projectCode,contractInfoId:this.$store.state.contract_files.contractInfoId}},created:function(){console.log(this.$route.query),this.refresh()},methods:Object(i["a"])(Object(i["a"])({},Object(c["c"])(["get_files"])),{},{handleSelectionChange:function(e){this.multipleSelection=e},refresh:function(){switch(this.tableData=[],this.$route.query.type){case"contract":if(null!=this.$store.state.contract_files.contract){var e={};e.file_name=this.$store.state.contract_files.contract.fileDisplayName,e.fixtime=this.$store.state.contract_files.contract.gmtCreate,e.fileId=this.$store.state.contract_files.contract.fileId,this.tableData.push(e)}break;case"accounting":if(null!=this.$store.state.contract_files.accounting){var t={};t.file_name=this.$store.state.contract_files.accounting.fileDisplayName,t.fixtime=this.$store.state.contract_files.accounting.gmtCreate,t.fileId=this.$store.state.contract_files.accounting.fileId,this.tableData.push(t)}break;case"checklist":if(null!=this.$store.state.contract_files.checklist){var s={};s.file_name=this.$store.state.contract_files.checklist.fileDisplayName,s.fixtime=this.$store.state.contract_files.checklist.gmtCreate,s.fileId=this.$store.state.contract_files.checklist.fileId,this.tableData.push(s)}break;case"invoice":if(null!=this.$store.state.contract_files.invoice){var a={};a.file_name=this.$store.state.contract_files.invoice.fileDisplayName,a.fixtime=this.$store.state.contract_files.invoice.gmtCreate,a.fileId=this.$store.state.contract_files.invoice.fileId,this.tableData.push(a)}break;default:break}},Upload:function(e){var t=this,s=this;console.log(e);var a="";switch(this.$route.query.type){case"contract":a="/file/uploadContract";break;case"accounting":a="/file/uploadVoucher";break;case"checklist":a="/file/uploadChecklist";break;case"invoice":a="/file/uploadInvoice";break;default:break}if("pdf"!=e.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式!");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var o=new FormData;o.append("file",e.file),o.append("contractInfoId",s.contractInfoId),console.log(o),s.request(a,o,"POST",{}).then((function(e){if(console.log(e),"success"==e.data.status){t.$message({type:"success",message:"上传成功！"});var a="/file/getFileListByContractInfoId?contractInfoId="+s.contractInfoId;s.request(a,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),s.refresh()):s.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),s.$message.error("出错了！")}))}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}},downloadFiles:function(e){var t=this,s=this,a="/file/downloadFileById?fileId="+e.fileId;s.request(a,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){t.$notify({title:"成功",message:"准备开始下载！",type:"success"});var s=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),o=URL.createObjectURL(a),i=document.createElement("a");i.href=o,i.setAttribute("download",s),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(c){console.log(c),t.$message({message:"数据请求失败！",type:"error"})}}else t.$message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))},List_download:function(){var e=this,t=this;if(console.log(this.multipleSelection),0==this.multipleSelection.length)this.$message.warning("请选择要下载的文件！");else{var s="/file/downloadPackage?projectCode="+this.projectCode+"&fileIdList="+this.multipleSelection[0].fileId;if(this.multipleSelection.length>1)for(var a=1;a<this.multipleSelection.length;a++)s=s+"&fileIdList="+this.multipleSelection[a].fileId;t.request(s,{},"GET",{},"blob").then((function(t){if(void 0!=t.headers["content-disposition"]){e.$notify({title:"成功",message:"准备开始下载！",type:"success"});var s=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([t.data],{type:"application/force-download"}),o=URL.createObjectURL(a),i=document.createElement("a");i.href=o,i.setAttribute("download",s),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(c){console.log(c),e.$message({message:"数据请求失败！",type:"error"})}}else e.$message({message:"文件可能丢失了！",type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))}},getAccountingInfo:function(){var e=this,t=this,s="/file/generateAccounting?contractInfoId="+this.contractInfoId;t.request(s,{},"GET",{}).then((function(s){if("success"==s.data.status){t.$message.success("入账通知单已生成！");var a="/file/getFileListByContractInfoId?contractInfoId="+t.contractInfoId;t.request(a,{},"GET",{}).then((function(s){console.log(s.data),"success"==s.data.status?(e.get_files(s.data.data),sessionStorage.setItem("state",JSON.stringify(e.$store.state)),t.refresh()):t.$message.error(s.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}else t.$message({message:s.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}})},l=n,r=(s("ffac"),s("2877")),f=Object(r["a"])(l,a,o,!1,null,null,null);t["default"]=f.exports},fb6a:function(e,t,s){"use strict";var a=s("23e7"),o=s("861d"),i=s("e8b5"),c=s("23cb"),n=s("50c4"),l=s("fc6a"),r=s("8418"),f=s("b622"),d=s("1dde"),u=s("ae40"),h=d("slice"),p=u("slice",{ACCESSORS:!0,0:0,1:2}),g=f("species"),m=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!h||!p},{slice:function(e,t){var s,a,f,d=l(this),u=n(d.length),h=c(e,u),p=c(void 0===t?u:t,u);if(i(d)&&(s=d.constructor,"function"!=typeof s||s!==Array&&!i(s.prototype)?o(s)&&(s=s[g],null===s&&(s=void 0)):s=void 0,s===Array||void 0===s))return m.call(d,h,p);for(a=new(void 0===s?Array:s)(b(p-h,0)),f=0;h<p;h++,f++)h in d&&r(a,f,d[h]);return a.length=f,a}})},ffac:function(e,t,s){"use strict";s("62a2")}}]);