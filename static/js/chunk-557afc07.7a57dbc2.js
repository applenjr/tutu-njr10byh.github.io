(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-557afc07"],{"0473":function(e,t,a){"use strict";a("1d6e")},"1d6e":function(e,t,a){},3736:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("caad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var o=a("4ec3"),n=a("5c96"),r=a.n(n),s=function(e){var t="/file/downloadFileById?fileId="+e;Object(o["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])r.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",a=e.headers["content-disposition"].split("fileName=")[1].split(".").length,o=e.headers["content-disposition"].split("fileName=")[1].split(".")[a-1];if(["pdf","png","jpg","jpeg"].includes(o)){switch(o){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var n=e.data,s=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var c=new Blob([n],{type:t});console.log(s),window.navigator.msSaveOrOpenBlob(c,s)}else{var i=new Blob([n],{type:t}),l=window.URL.createObjectURL(i);console.log(l),window.open(l)}}else r.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),r.a.Message({message:"出错了！",type:"error"})}))},c=function(e){Object(o["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){r.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var a=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var n=new Blob([t.data],{type:"application/force-download"}),s=URL.createObjectURL(n),c=document.createElement("a");c.href=s,c.setAttribute("download",a),document.body.appendChild(c),c.click(),document.body.removeChild(c)}catch(i){console.log(i),r.a.Message({message:"数据请求失败！",type:"error"})}}else Object(o["a"])(e,{},"GET",{}).then((function(e){r.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),r.a.Message({message:"出错了！",type:"error"})}))},i=function(e,t){var a="";if(0==t.length)r.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var n=1;n<t.length;n++)a=a+"&fileIdList="+t[n]}Object(o["a"])(a,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){r.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),o=URL.createObjectURL(a),n=document.createElement("a");n.href=o,n.setAttribute("download",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(s){console.log(s),r.a.Message({message:"数据请求失败！",type:"error"})}}else r.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),r.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:s,downloadFiles:c,downloadFilePackage:i}},"79ce":function(e,t,a){"use strict";a.r(t);var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],staticClass:"contract_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:e.type_change},model:{value:e.contract_type,callback:function(t){e.contract_type=t},expression:"contract_type"}},[a("el-radio-button",{attrs:{label:"进行中"}})],1)],1)]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"合同名称"}},[a("span",[e._v(e._s(t.row.projectName))])]),a("el-form-item",{attrs:{label:"合同编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"受让方"}},[a("span",[e._v(e._s(t.row.paName))])]),a("el-form-item",{attrs:{label:"转让总金额"}},[a("span",[e._v(e._s(t.row.totalTransferAmount)+" 万元")])]),a("el-form-item",{attrs:{label:"转化状态"}},[a("span",[e._v(e._s(t.row.state))])]),null!=t.row.publicNoticeTime?a("el-form-item",{attrs:{label:"公示信息"}},[a("span",[e._v("已经公示 "+e._s(t.row.publicNoticeTime)+" 天")])]):e._e(),a("el-form-item",{attrs:{label:"更新时间"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"projectName",label:"合同名称"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(a){return e.seeContract(t.row)}}},[e._v(e._s(t.row.projectName))])]}}])}),a("el-table-column",{attrs:{prop:"projectCode",label:"合同编号",width:"120"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("a",{on:{click:function(a){return e.seeContract(t.row)}}},[e._v(e._s(t.row.projectCode))])]}}])}),a("el-table-column",{attrs:{prop:"paName",label:"受让方单位"}}),a("el-table-column",{attrs:{prop:"state",label:"转化状态",width:"300"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"300"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("div",{staticClass:"settings"},[["等待上传合同"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-reading"},on:{click:e.getPublicNotice_detail}},[e._v(" 公示页 ")]):e._e(),["等待上传合同"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-printer"},on:{click:function(a){return e.generateContract(t.row)}}},[e._v(" 生成 ")]):e._e(),"等待上传合同"==t.row.state?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.editContract(t.row)}}},[e._v(" 修改 ")]):e._e(),"等待上传合同"==t.row.state?a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){return e.deleteContract(t.row)}}},[e._v(" 删除 ")]):e._e(),"等待公示"==t.row.state?a("el-button",{attrs:{icon:"el-icon-reading"},on:{click:function(a){return e.BeginPublic(t.row)}}},[e._v("开始公示 ")]):e._e(),"等待流程结束"==t.row.state?a("el-button",{attrs:{icon:"el-icon-circle-check"},on:{click:function(a){return e.ConfirmEnd(t.row)}}},[e._v("确认流程结束 ")]):e._e(),["等待上传合同","等待上传到款凭证","等待上传认定清单（备案）","等待生成入账通知单","等待财务处上传发票","等待流程结束"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-folder-opened"},on:{click:function(a){return e.file_manage(t.row)}}},[e._v("文件管理 ")]):e._e()],1)]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),a("el-dialog",{attrs:{title:"选择上传文件类型",visible:e.file_type_Dialog,width:"40%"},on:{"update:visible":function(t){e.file_type_Dialog=t}}},[a("div",{staticClass:"uploads"},[a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(t){return e.upload(e.upload_row,"Contract")}}},[e._v("合同 ")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(t){return e.upload(e.upload_row,"Voucher")}}},[e._v("到款凭证 ")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(t){return e.upload(e.upload_row,"Checklist")}}},[e._v("认定清单 ")])],1),a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("el-button",{attrs:{icon:"el-icon-tickets"},on:{click:function(t){return e.upload(e.upload_row,"Invoice")}}},[e._v("发票 ")])],1)],1)])],1)},n=[],r=a("1da1"),s=a("5530"),c=(a("ac1f"),a("1276"),a("fb6a"),a("b0c0"),a("96cf"),a("2f62")),i=a("3736"),l={data:function(){return{tableData:[],loading:!0,contract_type:"进行中",total:0,currentPage:1,Page_url:"",SearchType:"",SearchType_prepend:"查询字段",SearchText:"",choose_Dialog:!1,choose_Data:[],choose_loading:!0,choosed_patents:[],download_row:{},file_type_Dialog:!1,upload_row:{},upload_content:{type:"",contractInfoId:""},file_list:{accounting:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},checklist:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},contract:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},invoice:{fileDisplayName:"",fileId:"",fileName:"",fileType:"",gmtCreate:""},patentList:[],voucherList:[]},PublicDialog:!1,public_content:{projectCode:"",paName:"",totalTransferAmount:0}}},created:function(){this.refresh()},methods:Object(s["a"])(Object(s["a"])({},Object(c["c"])(["get_files"])),{},{refresh:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="",a.SearchType_prepend="查询字段",a.SearchText="",a.contract_type="进行中",console.log(e.$store.state),o="/contract/getTransferringContractPage?currPage="+a.currentPage+"&size=20",a.Page_url=o,t.next=12,a.getContract(o);case 12:case"end":return t.stop()}}),t)})))()},getContract:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t,o.tableData=[],a.next=4,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var n={};n.index=a+1,n.arbitrationCommission=e.data.data.records[a].arbitrationCommission,n.contractInfoId=e.data.data.records[a].contractInfoId,n.contractSigningDate=e.data.data.records[a].contractSigningDate,n.disputeSettlementMethod=e.data.data.records[a].disputeSettlementMethod,n.gmtUpdate=e.data.data.records[a].gmtUpdate,n.invoicingEnterprise=e.data.data.records[a].invoicingEnterprise,n.paAddress=e.data.data.records[a].paAddress,n.paContactEmail=e.data.data.records[a].paContactEmail,n.paContactPerson=e.data.data.records[a].paContactPerson,n.paContactPhone=e.data.data.records[a].paContactPhone,n.paMailingAddress=e.data.data.records[a].paMailingAddress,n.paName=e.data.data.records[a].paName,n.paRepresentative=e.data.data.records[a].paRepresentative,n.patentNum=e.data.data.records[a].patentNum,n.paymentMethod=e.data.data.records[a].paymentMethod,n.pbContactPerson=e.data.data.records[a].pbContactPerson,n.pbImplPatentRight=e.data.data.records[a].pbImplPatentRight,n.pbLicensedPatentRight=e.data.data.records[a].pbLicensedPatentRight,n.projectCode=e.data.data.records[a].projectCode,n.projectName=e.data.data.records[a].projectName,n.publicNoticeTime=e.data.data.records[a].isPublicNotice?n.publicNoticeTime=o.TimeDiffer(e.data.data.records[a].publicNoticeTime):null,n.taxpayerCode=e.data.data.records[a].taxpayerCode,n.totalTransferAmount=e.data.data.records[a].totalTransferAmount,e.data.data.records[a].isPublicNotice?null==e.data.data.records[a].contractFileId?n.state="等待上传合同":null==e.data.data.records[a].voucherId?n.state="等待上传到款凭证":null==e.data.data.records[a].checklistId?n.state="等待上传认定清单（备案）":null==e.data.data.records[a].accountingInfoId?n.state="等待生成入账通知单":null==e.data.data.records[a].invoiceId?n.state="等待财务处上传发票":e.data.data.records[a].isComplete?n.state="流程已结束":n.state="等待流程结束":n.state="等待公示",o.tableData.push(n)}t.$message({message:"数据已更新！",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,t.$message({message:"出错了！",type:"error"})}));case 4:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var o,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return o=t,o.loading=!0,console.log(o.Page_url),n=o.Page_url.split("currPage")[0]+"currPage="+e+"&size"+o.Page_url.split("size")[1],console.log(n),o.tableData=[],o.currentPage=e,a.next=9,o.getContract(n);case 9:case"end":return a.stop()}}),a)})))()},type_change:function(e){console.log(e);var t=this;t.loading=!0,t.tableData=[];var a="";switch(e){case"进行中":a="/contract/getTransferringContractPage?currPage=1&size=20";break;case"已完成":a="/contract/getTransferredContractPage?currPage=1&size=20";break;default:break}t.Page_url=a,t.getContract(a)},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),o=t.getMonth()+1,n=t.getDate(),r=t.getHours(),s=t.getMinutes(),c=t.getSeconds(),i=a+"-";return o<10&&(i+="0"),i+=o+"-",n<10&&(i+="0"),i+=n+" ",r<10&&(i+="0"),i+=r+":",s<10&&(i+="0"),i+=s+":",c<10&&(i+="0"),i+=c,i},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,o=new Date(t),n=(a-o)/1e3,r=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return r},handleDropdown:function(e){console.log(e);var t=this;switch(t.SearchType_prepend=e,e){case"项目编号":t.SearchType=1;break;case"项目名称":t.SearchType=2;break;case"受让方单位名":t.SearchType=3;break;default:break}},search:function(){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function t(){var a,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,a.loading=!0,"查询字段"==a.SearchType_prepend?e.$message({message:"请填写查询字段！",type:"warning"}):""==a.SearchText?e.$message({message:"请填写查询内容！",type:"warning"}):(a.tableData=[],a.currentPage=1,o="/contract/getTransferredContractPageByCondition?currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,console.log(o),a.getContract(o));case 3:case"end":return t.stop()}}),t)})))()},seeContract:function(e){console.log(e),this.$router.push({path:"/transfer_contract_detail",query:{contractInfoId:e.contractInfoId}})},upload:function(e,t){this.upload_content.type=t,this.upload_content.contractInfoId=e.contractInfoId,console.log(this.upload_content)},Upload:function(e){var t=this,a=this;console.log(e);var o="";switch(a.upload_content.type){case"Contract":o="/transferring/uploadContract";break;case"Voucher":o="/transferring/uploadVoucher";break;case"Checklist":o="/transferring/uploadChecklist";break;case"Invoice":o="/transferring/uploadInvoice";break;default:break}if("pdf"!=e.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式!");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var n=new FormData;n.append("file",e.file),n.append("contractInfoId",a.upload_content.contractInfoId),console.log(n),a.request(o,n,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message({type:"success",message:"上传成功！"}),a.file_type_Dialog=!1,a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}},getPublicNotice_detail:function(){window.open("http://cxy.njupt.edu.cn/_s366/gs/list.psp")},generateContract:function(e){console.log(e);var t="/contract/generateContract?contractInfoId="+e.contractInfoId;i["a"].downloadFiles(t)},editContract:function(e){console.log(e),this.$router.push({path:"/filling_contract",query:{contractInfoId:e.contractInfoId,type:"edit"}})},deleteContract:function(e){var t=this;console.log(e),this.$confirm("确认要删除吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var a="/contract/deleteContract?contractInfoId="+e.contractInfoId;that.request(a,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"删除成功！"}),that.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消操作！"})}))},BeginPublic:function(e){var t=this,a=this;console.log(e),a.loading=!0,this.$confirm("确认已经开始公示了吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/transferring/makePublicNotice?contractInfoId="+e.contractInfoId;a.request(o,{},"GET",{}).then((function(e){console.log(e.data),a.loading=!1,"success"==e.data.status?(t.$message({type:"success",message:"开始公示！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消操作！"})}))},upload_file:function(e){console.log(e),this.upload_row=e,this.file_type_Dialog=!0},file_manage:function(e){var t=this,a=this;console.log(e);var o="/file/getFileListByContractInfoId?contractInfoId="+e.contractInfoId;a.request(o,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),t.$router.push({path:"./files_controller"})):a.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),a.$message.error("出错了！")}))},ConfirmEnd:function(e){var t=this,a=this;this.$confirm("确认要结束流程吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/transferring/processComplete?contractInfoId="+e.contractInfoId;a.request(o,{},"GET",{}).then((function(e){"success"==e.data.status?(t.$message({message:"流程已结束！",type:"success"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))}})},d=l,u=(a("0473"),a("2877")),p=Object(u["a"])(d,o,n,!1,null,null,null);t["default"]=p.exports},fb6a:function(e,t,a){"use strict";var o=a("23e7"),n=a("861d"),r=a("e8b5"),s=a("23cb"),c=a("50c4"),i=a("fc6a"),l=a("8418"),d=a("b622"),u=a("1dde"),p=a("ae40"),g=u("slice"),f=p("slice",{ACCESSORS:!0,0:0,1:2}),m=d("species"),h=[].slice,b=Math.max;o({target:"Array",proto:!0,forced:!g||!f},{slice:function(e,t){var a,o,d,u=i(this),p=c(u.length),g=s(e,p),f=s(void 0===t?p:t,p);if(r(u)&&(a=u.constructor,"function"!=typeof a||a!==Array&&!r(a.prototype)?n(a)&&(a=a[m],null===a&&(a=void 0)):a=void 0,a===Array||void 0===a))return h.call(u,g,f);for(o=new(void 0===a?Array:a)(b(f-g,0)),d=0;g<f;g++,d++)g in u&&l(o,d,u[g]);return o.length=d,o}})}}]);