(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-c61657a6"],{"24bb":function(t,e,o){"use strict";o("4ed6")},"2a79":function(t,e,o){t.exports=o.p+"static/img/file_pdf.1bf2177c.png"},3881:function(t,e,o){t.exports=o.p+"static/img/filebox.7347b85c.png"},"4ed6":function(t,e,o){},"854e":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"Files_Controller_Container"},[i("div",{staticClass:"top_buttons"},[t.multipleSelection.length>0?i("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-download"},on:{click:t.List_download}},[t._v(" 打包下载 ")]):t._e()],1),i("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:t.tableData,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[i("el-table-column",{attrs:{type:"selection",width:"55"}}),i("el-table-column",{attrs:{prop:"file_type",label:"文件名"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"filebox"},[["入账通知单"].includes(e.row.file_type)?i("img",{attrs:{src:o("e931")}}):["合同","认定清单","发票"].includes(e.row.file_type)?i("img",{attrs:{src:o("2a79")}}):i("img",{attrs:{src:o("3881")}}),["合同","入账通知单","认定清单","发票"].includes(e.row.file_type)?i("el-button",{attrs:{type:"text",disabled:""==e.row.fixtime},on:{click:function(o){return t.pdf_preview(e.row)}}},[t._v(" "+t._s(e.row.file_type)+" ")]):t._e(),["专利","到款凭证"].includes(e.row.file_type)?i("el-button",{attrs:{type:"text",disabled:""==e.row.fixtime},on:{click:function(o){return t.seeFiles(e.row)}}},[t._v(" "+t._s(e.row.file_type)+" ")]):t._e()],1)]}}])}),i("el-table-column",{attrs:{prop:"fixtime",label:"修改时间"}}),i("el-table-column",{attrs:{prop:"setting",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[i("div",{staticClass:"setting"},[["合同"].includes(e.row.file_type)?i("el-button",{attrs:{icon:"el-icon-document",type:"text"},on:{click:t.generateContract}},[t._v(" 生成合同模版 ")]):t._e(),["合同"].includes(e.row.file_type)?i("el-button",{attrs:{icon:"el-icon-position",type:"text"},on:{click:t.sendContract}},[t._v(" 发送 ")]):t._e(),["入账通知单"].includes(e.row.file_type)?i("el-button",{attrs:{icon:"el-icon-document",type:"text"},on:{click:t.getAccountingInfo}},[t._v(" 生成入账通知单 ")]):t._e(),""!=e.row.fixtime&&["合同","认定清单","发票"].includes(e.row.file_type)?i("el-button",{attrs:{icon:"el-icon-download",type:"text"},on:{click:function(o){return t.downloadFiles(e.row)}}},[t._v(" 下载 ")]):t._e(),"finance"!=t.authorize&&["合同","到款凭证","认定清单","发票"].includes(e.row.file_type)?i("el-upload",{attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":t.Upload}},[i("el-button",{attrs:{type:"text",icon:"el-icon-upload2"},on:{click:function(o){return t.get_fileType(e.row.file_type)}}},[t._v("上传")])],1):t._e(),""!=e.row.fixtime&&["认定清单"].includes(e.row.file_type)?i("el-button",{attrs:{icon:"el-icon-edit-outline",type:"text"},on:{click:t.edit_contractCode}},[t._v(" 填写技术合同备案编号 ")]):t._e()],1)]}}])})],1),i("el-dialog",{attrs:{title:"填写技术合同备案编号",visible:t.edit_contractCode_dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.edit_contractCode_dialogFormVisible=e}}},[i("el-form",{ref:"edit_contractCodeForm",attrs:{model:t.edit_contractCode_form,rules:t.edit_contractCode_rules}},[i("el-form-item",{attrs:{label:"技术合同备案编号",prop:"contractFilingNo"}},[i("el-input",{attrs:{autocomplete:"off"},model:{value:t.edit_contractCode_form.contractFilingNo,callback:function(e){t.$set(t.edit_contractCode_form,"contractFilingNo",e)},expression:"edit_contractCode_form.contractFilingNo"}})],1)],1),i("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[i("el-button",{on:{click:function(e){t.edit_contractCode_dialogFormVisible=!1}}},[t._v("取 消")]),i("el-button",{attrs:{type:"primary"},on:{click:t.confirm_contractFilingNo}},[t._v("确 定")])],1)],1)],1)},a=[],n=o("5530"),c=(o("fb6a"),o("ac1f"),o("1276"),o("b0c0"),o("2f62")),s=o("af2c"),l={data:function(){return{tableData:[{file_type:"合同",fixtime:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.gmtCreate,fileId:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.fileId},{file_type:"到款凭证",fixtime:0==this.$store.state.contract_files.voucherList.length?"":this.$store.state.contract_files.voucherList[this.$store.state.contract_files.voucherList.length-1].gmtCreate},{file_type:"认定清单",fixtime:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.gmtCreate,fileId:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.fileId},{file_type:"入账通知单",fixtime:null==this.$store.state.contract_files.accounting?"":this.$store.state.contract_files.accounting.gmtCreate,fileId:null==this.$store.state.contract_files.accounting?"":this.$store.state.contract_files.accounting.fileId},{file_type:"发票",fixtime:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.gmtCreate,fileId:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.fileId},{file_type:"专利"}],loading:!0,multipleSelection:[],upload_fileType:"",edit_contractCode_dialogFormVisible:!1,edit_contractCode_form:{contractInfoId:"",contractFilingNo:""},edit_contractCode_rules:{contractFilingNo:[{required:!0,message:"请填写技术合同备案编号",trigger:"blur"}]},projectCode:this.$store.state.contract_files.projectCode,contractInfoId:this.$store.state.contract_files.contractInfoId,authorize:this.$store.state.signed_authorize}},created:function(){console.log(null==this.$store.state.contract_files.contract)},methods:Object(n["a"])(Object(n["a"])({},Object(c["c"])(["get_files"])),{},{handleSelectionChange:function(t){this.multipleSelection=t},seeFiles:function(t){switch(console.log(t),t.file_type){case"到款凭证":this.$router.push({path:"./files_voucherList"});break;case"专利":this.$router.push({path:"./files_patents"});break}},get_fileType:function(t){this.upload_fileType=t},Upload:function(t){var e=this,o=this;console.log(t);var i="";switch(this.upload_fileType){case"合同":i="/file/uploadContract";break;case"到款凭证":i="/file/uploadVoucher";break;case"认定清单":i="/file/uploadChecklist";break;case"发票":i="/file/uploadInvoice";break;default:break}if("pdf"!=t.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式!");else if(t.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var a=new FormData;a.append("file",t.file),a.append("contractInfoId",o.contractInfoId),console.log(a),o.request(i,a,"POST",{}).then((function(t){if(console.log(t),"success"==t.data.status){e.$message({type:"success",message:"上传成功！"});var i="/file/getFileListByContractInfoId?contractInfoId="+o.contractInfoId;o.request(i,{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.get_files(t.data.data),sessionStorage.setItem("state",JSON.stringify(e.$store.state)),window.location.reload()):(o.$message.error(t.data.data.errMsg),window.location.reload())})).catch((function(t){console.log(t),o.$message.error("出错了！")}))}else e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))}},downloadFiles:function(t){var e="/file/downloadFileById?fileId="+t.fileId;s["a"].downloadFiles(e)},List_download:function(){console.log(this.multipleSelection);for(var t=[],e=0;e<this.multipleSelection.length;e++)switch(this.multipleSelection[e].file_type){case"合同":null!=this.$store.state.contract_files.contract&&t.push(this.$store.state.contract_files.contract.fileId);break;case"到款凭证":for(var o=0;o<this.$store.state.contract_files.voucherList.length;o++)t.push(this.$store.state.contract_files.voucherList[o].fileId);break;case"认定清单":null!=this.$store.state.contract_files.checklist&&t.push(this.$store.state.contract_files.checklist.fileId);break;case"入账通知单":null!=this.$store.state.contract_files.accounting&&t.push(this.$store.state.contract_files.accounting.fileId);break;case"发票":null!=this.$store.state.contract_files.invoice&&t.push(this.$store.state.contract_files.invoice.fileId);break;case"专利":for(var i=0;i<this.$store.state.contract_files.patentList.length;i++){var a=this.$store.state.contract_files.patentList[i];null!=a.certificate&&t.push(a.certificate.fileId),null!=a.oa&&t.push(a.oa.fileId),null!=a.tax&&t.push(a.tax.fileId)}break}console.log(t),s["a"].downloadFilePackage(this.projectCode,t)},generateContract:function(){var t="/contract/generateContract?contractInfoId="+this.contractInfoId;s["a"].downloadFiles(t)},sendContract:function(){var t=this,e="/file/sendContractToCwc?contractInfoId="+this.contractInfoId;this.request(e,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?t.$notify.success({title:"成功",message:"已发送至财务处",duration:2e3}):t.$notify.error({title:"错误",message:e.data.data.errMsg})})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},getAccountingInfo:function(){var t="/file/generateAccounting?contractInfoId="+this.contractInfoId;s["a"].downloadFiles(t)},pdf_preview:function(t){console.log(t),"入账通知单"==t.file_type?this.$notify.warning({title:"提示",message:"暂不支持预览word文档！"}):s["a"].previewFile(t.fileId)},edit_contractCode:function(){this.edit_contractCode_form.contractInfoId=this.contractInfoId,this.edit_contractCode_dialogFormVisible=!0},confirm_contractFilingNo:function(){var t=this,e=this;this.$confirm("确认要提交吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/file/setContractFilingNo?contractInfoId="+t.contractInfoId+"&contractFilingNo="+t.edit_contractCode_form.contractFilingNo;e.request(o,{},"GET",{}).then((function(o){console.log(o.data),"success"==o.data.status?(t.$notify.success({title:"成功",message:"提交成功！"}),e.edit_contractCode_dialogFormVisible=!1,e.edit_contractCode_form.contractInfoId="",e.edit_contractCode_form.contractFilingNo="",window.location.reload()):t.$notify.error({title:"错误",message:o.data.data.errMsg})})).catch((function(e){console.log(e),t.$notify.error({title:"错误",message:"出错了！"})}))})).catch((function(){t.$message({type:"info",message:"已取消操作！"})}))}})},r=l,d=(o("24bb"),o("2877")),f=Object(d["a"])(r,i,a,!1,null,null,null);e["default"]=f.exports},af2c:function(t,e,o){"use strict";o("ac1f"),o("1276"),o("caad"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d");var i=o("4ec3"),a=o("5c96"),n=o.n(a),c=function(t){var e="/file/downloadFileById?fileId="+t;Object(i["a"])(e,{},"GET",{},"arraybuffer").then((function(t){if(console.log(t),void 0==t.headers["content-disposition"])n.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var e="",o=t.headers["content-disposition"].split("fileName=")[1].split(".").length,i=t.headers["content-disposition"].split("fileName=")[1].split(".")[o-1];if(["pdf","png","jpg","jpeg"].includes(i)){switch(i){case"pdf":e="application/pdf";break;case"png":e="image/png";break;case"jpg":e="image/jpeg";break;case"jpeg":e="image/jpeg";break}var a=t.data,c=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var s=new Blob([a],{type:e});console.log(c),window.navigator.msSaveOrOpenBlob(s,c)}else{var l=new Blob([a],{type:e}),r=window.URL.createObjectURL(l);console.log(r),window.open(r)}}else n.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(t){console.log(t),n.a.Message({message:"出错了！",type:"error"})}))},s=function(t){Object(i["a"])(t,{},"GET",{},"blob").then((function(e){if(console.log(e),void 0!=e.headers["content-disposition"]){n.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var o=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),c=URL.createObjectURL(a),s=document.createElement("a");s.href=c,s.setAttribute("download",o),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(l){console.log(l),n.a.Message({message:"数据请求失败！",type:"error"})}}else Object(i["a"])(t,{},"GET",{}).then((function(t){n.a.Message({message:t.data.data.errMsg,type:"error"})}))})).catch((function(t){console.log(t),n.a.Message({message:"出错了！",type:"error"})}))},l=function(t,e){var o="";if(0==e.length)n.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==e.length)o="/file/downloadPackage?projectCode="+t+"&fileIdList="+e[0];else if(e.length>1){o="/file/downloadPackage?projectCode="+t+"&fileIdList="+e[0];for(var a=1;a<e.length;a++)o=o+"&fileIdList="+e[a]}Object(i["a"])(o,{},"GET",{},"blob").then((function(t){if(void 0!=t.headers["content-disposition"]){n.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var e=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var o=new Blob([t.data],{type:"application/force-download"}),i=URL.createObjectURL(o),a=document.createElement("a");a.href=i,a.setAttribute("download",e),document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(c){console.log(c),n.a.Message({message:"数据请求失败！",type:"error"})}}else n.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(t){console.log(t),n.a.Message({message:"出错了！",type:"error"})}))}};e["a"]={previewFile:c,downloadFiles:s,downloadFilePackage:l}},e931:function(t,e,o){t.exports=o.p+"static/img/file_word.cdded0c4.png"},fb6a:function(t,e,o){"use strict";var i=o("23e7"),a=o("861d"),n=o("e8b5"),c=o("23cb"),s=o("50c4"),l=o("fc6a"),r=o("8418"),d=o("b622"),f=o("1dde"),u=o("ae40"),p=f("slice"),g=u("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),_=[].slice,m=Math.max;i({target:"Array",proto:!0,forced:!p||!g},{slice:function(t,e){var o,i,d,f=l(this),u=s(f.length),p=c(t,u),g=c(void 0===e?u:e,u);if(n(f)&&(o=f.constructor,"function"!=typeof o||o!==Array&&!n(o.prototype)?a(o)&&(o=o[h],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return _.call(f,p,g);for(i=new(void 0===o?Array:o)(m(g-p,0)),d=0;p<g;p++,d++)p in f&&r(i,d,f[p]);return i.length=d,i}})}}]);