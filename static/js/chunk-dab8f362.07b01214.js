(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-dab8f362"],{"0260":function(e,t,o){"use strict";o.r(t);var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Files_VoucherList_Container"},[a("div",{staticClass:"top_buttons"},["finance"!=e.authorize?a("el-upload",{attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("el-button",{attrs:{icon:"el-icon-upload2"}},[e._v("上传到款凭证")])],1):e._e(),e.multipleSelection.length>0?a("el-button",{staticStyle:{"margin-left":"10px"},attrs:{icon:"el-icon-download"},on:{click:e.List_download}},[e._v(" 打包下载 ")]):e._e()],1),a("el-table",{ref:"multipleTable",staticStyle:{width:"100%"},attrs:{data:e.tableData,"tooltip-effect":"dark"},on:{"selection-change":e.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"file_name",label:"文件名"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"filebox"},[a("img",{attrs:{src:o("2a79")}}),a("a",{on:{click:function(o){return e.pdf_preview(t.row)}}},[e._v(e._s(t.row.file_name))])])]}}])}),a("el-table-column",{attrs:{prop:"fixtime",label:"修改时间"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"setting"},[a("el-button",{attrs:{icon:"el-icon-download",type:"text"},on:{click:function(o){return e.downloadFiles(t.row)}}},[e._v(" 下载 ")])],1)]}}])})],1)],1)},i=[],s=o("5530"),n=(o("fb6a"),o("ac1f"),o("1276"),o("b0c0"),o("2f62")),l=o("af2c"),c={data:function(){return{tableData:[],loading:!0,multipleSelection:[],projectCode:this.$store.state.contract_files.projectCode,contractInfoId:this.$store.state.contract_files.contractInfoId,authorize:this.$store.state.signed_authorize}},created:function(){this.refresh()},methods:Object(s["a"])(Object(s["a"])({},Object(n["c"])(["get_files"])),{},{handleSelectionChange:function(e){this.multipleSelection=e},refresh:function(){this.tableData=[],console.log(this.$store.state);for(var e=0;e<this.$store.state.contract_files.voucherList.length;e++){var t={};t.file_name=this.$store.state.contract_files.voucherList[e].fileDisplayName,t.fixtime=this.$store.state.contract_files.voucherList[e].gmtCreate,t.fileId=this.$store.state.contract_files.voucherList[e].fileId,this.tableData.push(t)}},Upload:function(e){var t=this,o=this;console.log(e);var a="/file/uploadVoucher";if("pdf"!=e.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式!");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var i=new FormData;i.append("file",e.file),i.append("contractInfoId",o.contractInfoId),console.log(i),o.request(a,i,"POST",{}).then((function(e){if(console.log(e),"success"==e.data.status){t.$message({type:"success",message:"上传成功！"});var a="/file/getFileListByContractInfoId?contractInfoId="+o.contractInfoId;o.request(a,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),o.refresh()):o.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),o.$message.error("出错了！")}))}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}},downloadFiles:function(e){var t="/file/downloadFileById?fileId="+e.fileId;l["a"].downloadFiles(t)},List_download:function(){var e=[];console.log(this.multipleSelection);for(var t=0;t<this.multipleSelection.length;t++)e.push(this.multipleSelection[t].fileId);l["a"].downloadFilePackage(this.projectCode,e)},pdf_preview:function(e){console.log(e),l["a"].previewFile(e.fileId)}})},r=c,d=(o("0d0b"),o("2877")),f=Object(d["a"])(r,a,i,!1,null,null,null);t["default"]=f.exports},"0d0b":function(e,t,o){"use strict";o("8799")},"2a79":function(e,t,o){e.exports=o.p+"static/img/file_pdf.1bf2177c.png"},8799:function(e,t,o){},af2c:function(e,t,o){"use strict";o("ac1f"),o("1276"),o("caad"),o("d3b7"),o("3ca3"),o("ddb0"),o("2b3d");var a=o("4ec3"),i=o("5c96"),s=o.n(i),n=function(e){var t="/file/downloadFileById?fileId="+e;Object(a["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])s.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",o=e.headers["content-disposition"].split("fileName=")[1].split(".").length,a=e.headers["content-disposition"].split("fileName=")[1].split(".")[o-1];if(["pdf","png","jpg","jpeg"].includes(a)){switch(a){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var i=e.data,n=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var l=new Blob([i],{type:t});console.log(n),window.navigator.msSaveOrOpenBlob(l,n)}else{var c=new Blob([i],{type:t}),r=window.URL.createObjectURL(c);console.log(r),window.open(r)}}else s.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))},l=function(e){Object(a["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){s.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var o=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var i=new Blob([t.data],{type:"application/force-download"}),n=URL.createObjectURL(i),l=document.createElement("a");l.href=n,l.setAttribute("download",o),document.body.appendChild(l),l.click(),document.body.removeChild(l)}catch(c){console.log(c),s.a.Message({message:"数据请求失败！",type:"error"})}}else Object(a["a"])(e,{},"GET",{}).then((function(e){s.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))},c=function(e,t){var o="";if(0==t.length)s.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)o="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){o="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var i=1;i<t.length;i++)o=o+"&fileIdList="+t[i]}Object(a["a"])(o,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){s.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var o=new Blob([e.data],{type:"application/force-download"}),a=URL.createObjectURL(o),i=document.createElement("a");i.href=a,i.setAttribute("download",t),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(n){console.log(n),s.a.Message({message:"数据请求失败！",type:"error"})}}else s.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:n,downloadFiles:l,downloadFilePackage:c}},fb6a:function(e,t,o){"use strict";var a=o("23e7"),i=o("861d"),s=o("e8b5"),n=o("23cb"),l=o("50c4"),c=o("fc6a"),r=o("8418"),d=o("b622"),f=o("1dde"),p=o("ae40"),u=f("slice"),g=p("slice",{ACCESSORS:!0,0:0,1:2}),h=d("species"),m=[].slice,b=Math.max;a({target:"Array",proto:!0,forced:!u||!g},{slice:function(e,t){var o,a,d,f=c(this),p=l(f.length),u=n(e,p),g=n(void 0===t?p:t,p);if(s(f)&&(o=f.constructor,"function"!=typeof o||o!==Array&&!s(o.prototype)?i(o)&&(o=o[h],null===o&&(o=void 0)):o=void 0,o===Array||void 0===o))return m.call(f,u,g);for(a=new(void 0===o?Array:o)(b(g-u,0)),d=0;u<g;u++,d++)u in f&&r(a,d,f[u]);return a.length=d,a}})}}]);