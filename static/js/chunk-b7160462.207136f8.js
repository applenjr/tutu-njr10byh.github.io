(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b7160462"],{"24bb":function(t,e,o){"use strict";o("4ed6")},"4ed6":function(t,e,o){},"854e":function(t,e,o){"use strict";o.r(e);var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"Files_Controller_Container"},[o("t-loading",{attrs:{loading:t.fullScreenloading,text:"加载中...",fullscreen:""}}),o("div",{staticClass:"top_buttons"},[t.multipleSelection.length>0?o("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-download"},on:{click:t.List_download}},[t._v(" 打包下载 ")]):t._e(),["root","admin","superadmin"].includes(t.authorize)?o("el-button",{attrs:{icon:"el-icon-position"},on:{click:t.sendContract}},[t._v(" 发送文件至财务处 ")]):t._e()],1),o("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.tableLoading,expression:"tableLoading"}],ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:"teacher"==t.authorize?t.tableData_Teacher:t.tableData_notTeacher,"tooltip-effect":"dark"},on:{"selection-change":t.handleSelectionChange}},[o("el-table-column",{attrs:{type:"selection",width:"55"}}),o("el-table-column",{attrs:{prop:"file_type",label:"文件名"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"filebox"},[["入账通知单","个人所得税备案"].includes(e.row.file_type)?o("t-icon",{staticStyle:{color:"#409EFF"},attrs:{name:"file-word"}}):["合同","认定清单","发票","专利证书"].includes(e.row.file_type)?o("t-icon",{staticStyle:{color:"#f96b6c"},attrs:{name:"file-pdf"}}):["到款凭证","专利"].includes(e.row.file_type)?o("t-icon",{staticStyle:{color:"#E6A23C"},attrs:{name:"folder"}}):t._e(),["合同","入账通知单","认定清单","发票","专利证书","个人所得税备案"].includes(e.row.file_type)?o("el-button",{attrs:{type:"text",disabled:""==e.row.fixtime},on:{click:function(o){return t.pdf_preview(e.row)}}},[t._v(" "+t._s(e.row.file_type)+" ")]):t._e(),["专利","到款凭证"].includes(e.row.file_type)?o("el-button",{attrs:{type:"text",disabled:""==e.row.fixtime},on:{click:function(o){return t.seeFiles(e.row)}}},[t._v(" "+t._s(e.row.file_type)+" ")]):t._e()],1)]}}])}),o("el-table-column",{attrs:{prop:"fixtime",label:"更新时间"}}),o("el-table-column",{attrs:{prop:"setting",label:"操作"},scopedSlots:t._u([{key:"default",fn:function(e){return[o("div",{staticClass:"setting"},[["root","admin","superadmin"].includes(t.authorize)&&["合同"].includes(e.row.file_type)?o("el-button",{attrs:{icon:"el-icon-document",type:"text"},on:{click:t.generateContract}},[t._v(" 生成合同模版 ")]):t._e(),["root","admin","superadmin"].includes(t.authorize)&&["入账通知单"].includes(e.row.file_type)?o("el-button",{attrs:{icon:"el-icon-document",type:"text"},on:{click:t.getAccountingInfo}},[t._v(" 生成入账通知单 ")]):t._e(),""!=e.row.fixtime&&["合同","认定清单","入账通知单","发票","专利证书","个人所得税备案"].includes(e.row.file_type)?o("el-button",{attrs:{icon:"el-icon-download",type:"text"},on:{click:function(o){return t.downloadFiles(e.row)}}},[t._v(" 下载 ")]):t._e(),["root","admin","superadmin"].includes(t.authorize)&&["合同","到款凭证","认定清单","发票"].includes(e.row.file_type)?o("el-upload",{attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":t.Upload}},[o("el-button",{attrs:{type:"text",icon:"el-icon-upload2"},on:{click:function(o){return t.get_fileType(e.row.file_type)}}},[t._v("上传")])],1):t._e(),"finance"==t.authorize&&["发票"].includes(e.row.file_type)?o("el-upload",{attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":t.Upload}},[o("el-button",{attrs:{type:"text",icon:"el-icon-upload2"},on:{click:function(o){return t.get_fileType(e.row.file_type)}}},[t._v("上传")])],1):t._e(),["root","admin","superadmin"].includes(t.authorize)&&""!=e.row.fixtime&&["认定清单"].includes(e.row.file_type)?o("el-button",{attrs:{icon:"el-icon-edit-outline",type:"text"},on:{click:t.edit_contractCode}},[t._v(" 填写技术合同备案编号 ")]):t._e()],1)]}}])})],1),o("el-dialog",{attrs:{title:"填写技术合同备案编号",visible:t.edit_contractCode_dialogFormVisible,width:"30%"},on:{"update:visible":function(e){t.edit_contractCode_dialogFormVisible=e}}},[o("el-form",{ref:"edit_contractCodeForm",attrs:{model:t.edit_contractCode_form,rules:t.edit_contractCode_rules}},[o("el-form-item",{attrs:{label:"技术合同备案编号",prop:"contractFilingNo"}},[o("el-input",{attrs:{autocomplete:"off"},model:{value:t.edit_contractCode_form.contractFilingNo,callback:function(e){t.$set(t.edit_contractCode_form,"contractFilingNo",e)},expression:"edit_contractCode_form.contractFilingNo"}})],1)],1),o("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[o("el-button",{on:{click:function(e){t.edit_contractCode_dialogFormVisible=!1}}},[t._v("取 消")]),o("el-button",{attrs:{type:"primary"},on:{click:t.confirm_contractFilingNo}},[t._v("确 定")])],1)],1)],1)},a=[],n=o("1da1"),c=o("5530"),s=(o("96cf"),o("fb6a"),o("ac1f"),o("1276"),o("b0c0"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d"),o("2f62")),r=o("af2c"),l=o("5f87"),d={data:function(){return{fullScreenloading:!1,tableData_notTeacher:[{file_type:"合同",fixtime:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.gmtCreate,fileId:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.fileId},{file_type:"到款凭证",fixtime:0==this.$store.state.contract_files.voucherList.length?"":this.$store.state.contract_files.voucherList[this.$store.state.contract_files.voucherList.length-1].gmtCreate},{file_type:"认定清单",fixtime:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.gmtCreate,fileId:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.fileId},{file_type:"入账通知单",fixtime:null==this.$store.state.contract_files.accounting?"":this.$store.state.contract_files.accounting.gmtCreate,fileId:null==this.$store.state.contract_files.accounting?"":this.$store.state.contract_files.accounting.fileId},{file_type:"发票",fixtime:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.gmtCreate,fileId:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.fileId},{file_type:"专利"}],tableData_Teacher:[{file_type:"合同",fixtime:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.gmtCreate,fileId:null==this.$store.state.contract_files.contract?"":this.$store.state.contract_files.contract.fileId},{file_type:"到款凭证",fixtime:0==this.$store.state.contract_files.voucherList.length?"":this.$store.state.contract_files.voucherList[this.$store.state.contract_files.voucherList.length-1].gmtCreate},{file_type:"认定清单",fixtime:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.gmtCreate,fileId:null==this.$store.state.contract_files.checklist?"":this.$store.state.contract_files.checklist.fileId},{file_type:"发票",fixtime:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.gmtCreate,fileId:null==this.$store.state.contract_files.invoice?"":this.$store.state.contract_files.invoice.fileId},{file_type:"专利证书",fixtime:null==this.$store.state.contract_files.certificate?"":this.$store.state.contract_files.certificate.gmtCreate,fileId:null==this.$store.state.contract_files.certificate?"":this.$store.state.contract_files.certificate.fileId},{file_type:"个人所得税备案",fixtime:null==this.$store.state.contract_files.tax?"":this.$store.state.contract_files.tax.gmtCreate,fileId:null==this.$store.state.contract_files.tax?"":this.$store.state.contract_files.tax.fileId}],tableLoading:!1,multipleSelection:[],edit_contractCode_dialogFormVisible:!1,edit_contractCode_form:{contractInfoId:"",contractFilingNo:""},edit_contractCode_rules:{contractFilingNo:[{required:!0,message:"请填写技术合同备案编号",trigger:"blur"}]},projectCode:this.$store.state.contract_files.projectCode,contractInfoId:this.$store.state.contract_files.contractInfoId,authorize:this.$store.state.signed_authorize}},mounted:function(){Object(l["a"])()},created:function(){console.log(null==this.$store.state.contract_files.contract)},methods:Object(c["a"])(Object(c["a"])({},Object(s["c"])(["get_files"])),{},{handleSelectionChange:function(t){this.multipleSelection=t},seeFiles:function(t){switch(console.log(t),t.file_type){case"到款凭证":this.$router.push({path:"./files_voucherList"});break;case"专利":this.$router.push({path:"./files_patents"});break}},get_fileType:function(t){this.upload_fileType=t},Upload:function(t){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function o(){var i,a,n,c,s;return regeneratorRuntime.wrap((function(o){while(1)switch(o.prev=o.next){case 0:i=e,console.log(t),a="",o.t0=e.upload_fileType,o.next="合同"===o.t0?6:"到款凭证"===o.t0?8:"认定清单"===o.t0?10:"发票"===o.t0?12:14;break;case 6:return a="/file/uploadContract",o.abrupt("break",15);case 8:return a="/file/uploadVoucher",o.abrupt("break",15);case 10:return a="/file/uploadChecklist",o.abrupt("break",15);case 12:return a="/file/uploadInvoice",o.abrupt("break",15);case 14:return o.abrupt("break",15);case 15:if("pdf"==t.file.name.split(".").slice(-1)){o.next=19;break}e.$message.warning("上传文件只能是pdf格式!"),o.next=32;break;case 19:if(!(t.file.size/1024/1024>10)){o.next=23;break}e.$message.warning("上传文件大小不得超过10M!"),o.next=32;break;case 23:return e.tableLoading=!0,n=!1,c=new FormData,c.append("file",t.file),c.append("contractInfoId",i.contractInfoId),console.log(c),o.next=31,i.request(a,c,"POST",{}).then((function(t){console.log(t),"success"==t.data.status?(e.$message.success("上传成功！"),n=!0):e.$message({message:t.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}));case 31:n&&(s="/file/getFileListByContractInfoId?contractInfoId="+i.contractInfoId,i.request(s,{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.get_files(t.data.data),sessionStorage.setItem("state",JSON.stringify(e.$store.state)),setTimeout((function(){window.location.reload(),e.tableLoading=!1}),800)):(i.$message.error(t.data.data.errMsg),setTimeout((function(){window.location.reload(),e.tableLoading=!1}),800))})).catch((function(t){console.log(t),i.$message.error("出错了！")})));case 32:case"end":return o.stop()}}),o)})))()},downloadFiles:function(t){var e="/file/downloadFileById?fileId="+t.fileId;r["a"].downloadFiles(e)},List_download:function(){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function e(){var o,i,a,n,c;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:console.log(t.multipleSelection),o=[],i=0;case 3:if(!(i<t.multipleSelection.length)){e.next=26;break}e.t0=t.multipleSelection[i].file_type,e.next="合同"===e.t0?7:"到款凭证"===e.t0?9:"认定清单"===e.t0?11:"入账通知单"===e.t0?13:"发票"===e.t0?15:"专利"===e.t0?17:"专利证书"===e.t0?19:"个人所得税备案"===e.t0?21:23;break;case 7:return null!=t.$store.state.contract_files.contract&&o.push(t.$store.state.contract_files.contract.fileId),e.abrupt("break",23);case 9:for(a=0;a<t.$store.state.contract_files.voucherList.length;a++)o.push(t.$store.state.contract_files.voucherList[a].fileId);return e.abrupt("break",23);case 11:return null!=t.$store.state.contract_files.checklist&&o.push(t.$store.state.contract_files.checklist.fileId),e.abrupt("break",23);case 13:return null!=t.$store.state.contract_files.accounting&&o.push(t.$store.state.contract_files.accounting.fileId),e.abrupt("break",23);case 15:return null!=t.$store.state.contract_files.invoice&&o.push(t.$store.state.contract_files.invoice.fileId),e.abrupt("break",23);case 17:for(n=0;n<t.$store.state.contract_files.patentList.length;n++)c=t.$store.state.contract_files.patentList[n],null!=c.certificate&&o.push(c.certificate.fileId),null!=c.oa&&o.push(c.oa.fileId),null!=c.tax&&o.push(c.tax.fileId);return e.abrupt("break",23);case 19:return null!=t.$store.state.contract_files.certificate&&o.push(t.$store.state.contract_files.certificate.fileId),e.abrupt("break",23);case 21:return null!=t.$store.state.contract_files.tax&&o.push(t.$store.state.contract_files.tax.fileId),e.abrupt("break",23);case 23:i++,e.next=3;break;case 26:return console.log(o),e.next=29,r["a"].downloadFilePackage(t.projectCode,o);case 29:case"end":return e.stop()}}),e)})))()},generateContract:function(){var t=this,e="/contract/generateContract?contractInfoId="+this.contractInfoId;this.tableLoading=!0;var o=this.$notify.info({title:"提示",content:"正在生成中......等待时间可能较长，请耐心等待！",duration:0});this.request(e,{},"GET",{},"blob").then((function(i){if(console.log(i),t.tableLoading=!1,t.$notify.close(o),void 0!=i.headers["content-disposition"]){t.$notify.success({title:"成功",content:"准备开始下载！",duration:2e3});var a=decodeURI(i.headers["content-disposition"].split("fileName=")[1]);try{var n=new Blob([i.data],{type:"application/force-download"}),c=URL.createObjectURL(n),s=document.createElement("a");s.href=c,s.setAttribute("download",a),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(r){console.log(r),t.$message.error("数据请求失败！")}}else t.request(e,{},"GET",{}).then((function(e){t.$message.error(e.data.data.errMsg)}))})).catch((function(e){console.log(e),t.$message.error("出错了！"),t.$notify.close(o),t.tableLoading=!1}))},sendContract:function(){var t=this;this.tableLoading=!0;var e="/file/sendContractToCwc?contractInfoId="+this.contractInfoId;this.request(e,{},"GET",{}).then((function(e){console.log(e.data),t.tableLoading=!1,"success"==e.data.status?t.$notify.success({title:"成功",content:"已发送至财务处",duration:2e3}):t.$notify.error({title:"错误",content:e.data.data.errMsg})})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},getAccountingInfo:function(){var t=this,e=this;this.tableLoading=!0;var o="/file/generateAccounting?contractInfoId="+this.contractInfoId;e.request(o,{},"GET",{}).then((function(o){if(console.log(o.data),t.tableLoading=!1,"success"==o.data.status){t.$notify.success({title:"成功",content:"已生成！"});var i="/file/getFileListByContractInfoId?contractInfoId="+e.contractInfoId;e.request(i,{},"GET",{}).then((function(o){console.log(o.data),"success"==o.data.status?(t.get_files(o.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),window.location.reload()):(e.$message.error(o.data.data.errMsg),window.location.reload())})).catch((function(t){console.log(t),e.$message.error("出错了！")}))}else t.$notify.error({title:"错误",content:o.data.data.errMsg})})).catch((function(e){console.log(e),t.$notify.error({title:"错误",content:"出错了！"})}))},pdf_preview:function(t){console.log(t),r["a"].previewFile(t.fileId)},edit_contractCode:function(){this.edit_contractCode_form.contractInfoId=this.contractInfoId,this.edit_contractCode_dialogFormVisible=!0},confirm_contractFilingNo:function(){var t=this,e=this;this.$confirm("确认要提交吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/file/setContractFilingNo?contractInfoId="+t.contractInfoId+"&contractFilingNo="+t.edit_contractCode_form.contractFilingNo;e.request(o,{},"GET",{}).then((function(o){console.log(o.data),"success"==o.data.status?(t.$notify.success({title:"成功",content:"提交成功！"}),e.edit_contractCode_dialogFormVisible=!1,e.edit_contractCode_form.contractInfoId="",e.edit_contractCode_form.contractFilingNo="",window.location.reload()):t.$notify.error({title:"错误",content:o.data.data.errMsg})})).catch((function(e){console.log(e),t.$notify.error({title:"错误",content:"出错了！"})}))})).catch((function(){t.$message({type:"info",message:"已取消操作！"})}))}})},f=d,u=(o("24bb"),o("2877")),p=Object(u["a"])(f,i,a,!1,null,null,null);e["default"]=p.exports},af2c:function(t,e,o){"use strict";o("ac1f"),o("1276"),o("caad"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d");var i=o("4ec3"),a=o("5c96"),n=o.n(a),c=function(t){var e="/file/downloadFileById?fileId="+t;Object(i["a"])(e,{},"GET",{},"arraybuffer").then((function(t){if(console.log(t),void 0==t.headers["content-disposition"])n.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var e="",o=t.headers["content-disposition"].split("fileName=")[1].split(".").length,i=t.headers["content-disposition"].split("fileName=")[1].split(".")[o-1];if(["pdf","png","jpg","jpeg"].includes(i)){switch(i){case"pdf":e="application/pdf";break;case"png":e="image/png";break;case"jpg":e="image/jpeg";break;case"jpeg":e="image/jpeg";break}var a=t.data,c=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var s=new Blob([a],{type:e});console.log(c),window.navigator.msSaveOrOpenBlob(s,c)}else{var r=new Blob([a],{type:e}),l=window.URL.createObjectURL(r);console.log(l),window.open(l)}}else n.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(t){console.log(t),n.a.Message({message:"出错了！",type:"error"})}))},s=function(t){Object(i["a"])(t,{},"GET",{},"blob").then((function(e){if(console.log(e),void 0!=e.headers["content-disposition"]){n.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var o=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),c=URL.createObjectURL(a),s=document.createElement("a");s.href=c,s.setAttribute("download",o),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(r){console.log(r),n.a.Message({message:"数据请求失败！",type:"error"})}}else Object(i["a"])(t,{},"GET",{}).then((function(t){n.a.Message({message:t.data.data.errMsg,type:"error"})}))})).catch((function(t){console.log(t),n.a.Message({message:"出错了！",type:"error"})}))},r=function(t,e){var o="";if(0==e.length)n.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==e.length)o="/file/downloadPackage?projectCode="+t+"&fileIdList="+e[0];else if(e.length>1){o="/file/downloadPackage?projectCode="+t+"&fileIdList="+e[0];for(var a=1;a<e.length;a++)o=o+"&fileIdList="+e[a]}Object(i["a"])(o,{},"GET",{},"blob").then((function(t){if(void 0!=t.headers["content-disposition"]){n.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var e=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var o=new Blob([t.data],{type:"application/force-download"}),i=URL.createObjectURL(o),a=document.createElement("a");a.href=i,a.setAttribute("download",e),document.body.appendChild(a),a.click(),document.body.removeChild(a)}catch(c){console.log(c),n.a.Message({message:"数据请求失败！",type:"error"})}}else n.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(t){console.log(t),n.a.Message({message:"出错了！",type:"error"})}))}};e["a"]={previewFile:c,downloadFiles:s,downloadFilePackage:r}}}]);