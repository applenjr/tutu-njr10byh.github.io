(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-90093f20"],{"0b13":function(e,t,a){},"2a43":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"completed_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Search"}),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表")])],1)])]),a("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新时间"}},[a("span",[e._v(e._s(t.row.zhgxsj))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"60"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"projectCode",label:"立项编号",width:"100"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"100"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作",width:"490"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(a){return e.downloadPdf(t.row,"Contract")}}},[e._v("下载合同")]),a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(a){return e.downloadPdf(t.row,"Voucher")}}},[e._v("下载到款凭证")]),a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(a){return e.downloadPdf(t.row,"Checklist")}}},[e._v("下载认定清单")]),a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(a){return e.downloadPdf(t.row,"Invoice")}}},[e._v("下载发票")])]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1)],1)},s=[],n=a("1da1"),o=(a("ac1f"),a("1276"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),{data:function(){return{tableData:[],total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",console.log(e.$store.state),r="/process/getTransferredPatentPage?currPage="+a.currentPage+"&size=10",a.Page_url=r,t.next=10,a.getExam(r);case 10:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var s={};s.index=a+1,s.wid=e.data.data.records[a].wid,s.sqbh=e.data.data.records[a].sqbh,s.zlmc=e.data.data.records[a].zlmc,s.zlh=e.data.data.records[a].zlh,s.zlqr=e.data.data.records[a].zlqr,s.gsdw=e.data.data.records[a].gsdw,s.zhgxsj=null==e.data.data.records[a].transferProcess?e.data.data.records[a].zhgxsj:e.data.data.records[a].transferProcess.gmtUpdate,s.pzrq=e.data.data.records[a].pzrq,s.zldlr=e.data.data.records[a].zldlr,s.zldyzzgh=e.data.data.records[a].zldyzzgh,s.zldyzzxm=e.data.data.records[a].zldyzzxm,s.zlh=e.data.data.records[a].zlh,s.zlmc=e.data.data.records[a].zlmc,null==e.data.data.records[a].transferProcess?s.gmtUpdate=null:s.gmtUpdate=e.data.data.records[a].transferProcess.gmtUpdate,null==e.data.data.records[a].transferProcess?s.state="未转换":(s.transferProcessId=e.data.data.records[a].transferProcess.transferProcessId,e.data.data.records[a].transferProcess.isWithdraw?s.state="审批表已撤回":e.data.data.records[a].transferProcess.isZldyzzConfirm?e.data.data.records[a].transferProcess.isZldyzzApproval?e.data.data.records[a].transferProcess.isDepartmentConfirm?e.data.data.records[a].transferProcess.isDepartmentApproval?e.data.data.records[a].transferProcess.isComplete?(s.state="已转换",s.projectCode=e.data.data.records[a].transferProcess.projectCode):e.data.data.records[a].transferProcess.isCxyConfirm?e.data.data.records[a].transferProcess.isCxyApproval?(s.projectCode=e.data.data.records[a].transferProcess.projectCode,e.data.data.records[a].transferProcess.isPublicNotice?r.TimeDiffer(e.data.data.records[a].transferProcess.publicNoticeTime)?null==e.data.data.records[a].transferProcess.contractId?s.state="正在转换：等待上传合同":e.data.data.records[a].transferProcess.isContractSendBack&&null!=e.data.data.records[a].transferProcess.voucherId?null==e.data.data.records[a].transferProcess.checklistId?s.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[a].transferProcess.invoiceId?s.state="正在转换：等待上传发票":e.data.data.records[a].transferProcess.isComplete||(s.state="等待流程结束"):s.state="正在转换：等待合同寄回和上传到款凭证":s.state="正在转换：正在公示中":s.state="正在转换：等待公示"):s.state="产学研未通过":s.state="正在转换：等待产学研审批":s.state="归属单位未通过":s.state="正在转换：等待归属单位审批":s.state="第一作者未通过":s.state="正在转换：等待第一作者确认"),r.tableData.push(s)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:"数据请求失败",type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,console.log(r.Page_url),s=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(s),r.tableData=[],r.currentPage=e,a.next=8,r.getExam(s);case 8:case"end":return a.stop()}}),a)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),n=t.getHours(),o=t.getMinutes(),c=t.getSeconds(),d=a+"-";return r<10&&(d+="0"),d+=r+"-",s<10&&(d+="0"),d+=s+" ",n<10&&(d+="0"),d+=n+":",o<10&&(d+="0"),d+=o+":",c<10&&(d+="0"),d+=c,d},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),s=(a-r)/1e3,n=parseInt(s/86400);parseInt(s/3600),parseInt(s%3600/60),parseInt(s%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,r="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?7:"授权编号"===t.t0?10:13;break;case 7:return r="/patent/getPatentPageByZLMC?currPage="+a.currentPage+"&size=10&zldyzzgh="+a.id+"&zldyzzxm="+a.name+"&zlmc="+a.SearchText,a.Page_url=r,t.abrupt("break",14);case 10:return r="/patent/getPatentPageBySQBH?currPage="+a.currentPage+"&size=10&sqbh="+a.SearchText+"&zldyzzgh="+a.id+"&zldyzzxm="+a.name,a.Page_url=r,t.abrupt("break",14);case 13:return t.abrupt("break",14);case 14:console.log(r),a.getExam(r);case 16:case"end":return t.stop()}}),t)})))()},downloadPdf:function(e,t){var a=this,r=this,s="",n="";switch(t){case"Contract":s="/transferring/downloadContract?transferProcessId="+e.transferProcessId,n="合同";break;case"Voucher":s="/transferring/downloadVoucher?transferProcessId="+e.transferProcessId,n="到款凭证";break;case"Checklist":s="/transferring/downloadChecklist?transferProcessId="+e.transferProcessId,n="备案清单";break;case"Invoice":s="/transferring/downloadInvoice?transferProcessId="+e.transferProcessId,n="发票";break;default:break}r.request(s,{},"GET",{},"blob").then((function(e){if(console.log(e),"application/json"==e.data.type)a.$message({message:"文件获取失败！",type:"error"});else try{var t=new Blob([e.data],{type:"application/pdf"}),r=URL.createObjectURL(t),s=document.createElement("a");s.href=r,s.setAttribute("download",n),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(o){console.log(o),a.$message({message:"数据请求失败！",type:"error"})}})).catch((function(e){console.log(e),a.$message({message:"出错了！",type:"error"})}))}}}),c=o,d=(a("2d4a"),a("2877")),l=Object(d["a"])(c,r,s,!1,null,null,null);t["default"]=l.exports},"2d4a":function(e,t,a){"use strict";a("0b13")}}]);