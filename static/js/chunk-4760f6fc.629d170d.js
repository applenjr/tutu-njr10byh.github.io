(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4760f6fc"],{"5bab":function(e,t,a){},"63b3":function(e,t,a){"use strict";a("5bab")},fb5f:function(e,t,a){"use strict";a.r(t);var s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Patents_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" 查询字段"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"授权编号"}},[e._v("授权编号")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}},[a("template",{slot:"prepend"},[e._v(e._s(e.SearchType))])],2),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-download"},on:{click:e.export_patents}},[e._v("导出所有专利 ")]),a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表 ")])],1)])]),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"价格意向（万元）"}},[a("span",[e._v(e._s(t.row.priceIntention))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新日期"}},[a("span",[e._v(e._s(t.row.zhgxsj))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"sqbh",label:"授权编号",width:"160"}}),a("el-table-column",{attrs:{prop:"priceIntention",label:"价格意向（万元）",width:"180"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),a("el-table-column",{attrs:{prop:"zhgxsj",label:"最后更新时间",width:"180"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["未转换"==t.row.state?a("el-button",{attrs:{icon:"el-icon-coin"},on:{click:function(a){return e.FillingPrice(t.row)}}},[e._v("价格意向")]):e._e(),"未转换"==t.row.state?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.handleExam(t.row)}}},[e._v("填写审批")]):e._e(),"未转换"!=t.row.state&&"已转换"!=t.row.state&&"产学研未通过"!=t.row.state&&"审批表已撤回"!=t.row.state?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent(t.row)}}},[e._v("查看审批表")]):e._e(),"正在转换：等待第一作者确认"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-delete"},on:{click:function(a){return e.withDraw(t.row)}}},[e._v("撤回 ")]):e._e(),["产学研未通过","审批表已撤回"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.editPatent(t.row)}}},[e._v("修改审批表")]):e._e(),"审批表已撤回"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-checked"},on:{click:function(a){return e.resubmit(t.row)}}},[e._v("重新提交 ")]):e._e(),["产学研未通过","审批表已撤回"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){return e.deletePatent(t.row)}}},[e._v("删除 ")]):e._e(),"产学研未通过"==t.row.state?a("el-button",{attrs:{icon:"el-icon-mouse"},on:{click:function(a){return e.getFailedReason(t.row)}}},[e._v("查看原因")]):e._e()]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Price_Dialog",attrs:{title:"价格意向",visible:e.PriceVisible,width:"30%"},on:{"update:visible":function(t){e.PriceVisible=t}}},[a("div",{staticClass:"price_expect"},[a("el-input",{attrs:{type:"number",placeholder:"请填写价格意向（单位：万元）"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.PriceVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ConfirmPrice()}}},[e._v("确 认")])],1)]),a("el-dialog",{attrs:{title:"未通过原因",visible:e.dispassDialog,width:"60%"},on:{"update:visible":function(t){e.dispassDialog=t}}},[a("el-table",{attrs:{data:e.dispassData}},[a("el-table-column",{attrs:{prop:"operatorName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"operatorGh",label:"工号"}}),a("el-table-column",{attrs:{prop:"operatorDepartment",label:"工作单位"}}),a("el-table-column",{attrs:{prop:"remarks",label:"未通过原因"}}),a("el-table-column",{attrs:{prop:"gmtCreate",label:"操作时间",width:"180"}})],1)],1)],1)},r=[],o=a("1da1"),n=(a("96cf"),a("b0c0"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("ac1f"),a("1276"),{data:function(){return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,tableData:[],loading:!0,total:0,currentPage:1,size:20,Page_url:"",SearchType:"查询字段",SearchText:"",PriceVisible:!1,price:"",price_wid:"",dispassDialog:!1,dispassData:[{operatorName:"",operatorGh:"",operatorDepartment:"",remarks:"",gmtCreate:""}]}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;e.tableData=[],e.currentPage=1,e.SearchType="查询字段",e.SearchText="",console.log(this.$store.state);var t="/patent/getMyPatentPage?currPage="+e.currentPage+"&size="+e.size+"&zldyzzgh="+e.id+"&zldyzzxm="+e.name;e.Page_url=t,e.getUserPatent(t)},getUserPatent:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return s=t,a.next=3,s.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),s.loading=!1,"success"==e.data.status){s.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var r={};r.index=a+1,r.wid=e.data.data.records[a].wid,r.sqbh=e.data.data.records[a].sqbh,r.zlmc=e.data.data.records[a].zlmc,r.zlh=e.data.data.records[a].zlh,r.zlqr=e.data.data.records[a].zlqr,r.gsdw=e.data.data.records[a].gsdw,r.priceIntention=e.data.data.records[a].priceIntention,r.zhgxsj=null==e.data.data.records[a].transferProcess?e.data.data.records[a].zhgxsj:e.data.data.records[a].transferProcess.gmtUpdate,r.pzrq=e.data.data.records[a].pzrq,r.zldlr=e.data.data.records[a].zldlr,r.zldyzzgh=e.data.data.records[a].zldyzzgh,r.zldyzzxm=e.data.data.records[a].zldyzzxm,r.zlh=e.data.data.records[a].zlh,r.zlmc=e.data.data.records[a].zlmc,null==e.data.data.records[a].transferProcess?r.gmtUpdate=null:r.gmtUpdate=e.data.data.records[a].transferProcess.gmtUpdate,null==e.data.data.records[a].transferProcess?r.state="未转换":(r.transferProcessId=e.data.data.records[a].transferProcess.transferProcessId,e.data.data.records[a].transferProcess.isWithdraw?r.state="审批表已撤回":e.data.data.records[a].transferProcess.isZldyzzConfirm?e.data.data.records[a].transferProcess.isZldyzzApproval?e.data.data.records[a].transferProcess.isDepartmentConfirm?e.data.data.records[a].transferProcess.isDepartmentApproval?e.data.data.records[a].transferProcess.isComplete?(r.state="已转换",r.projectCode=e.data.data.records[a].transferProcess.projectCode):e.data.data.records[a].transferProcess.isCxyConfirm?e.data.data.records[a].transferProcess.isCxyApproval?(r.projectCode=e.data.data.records[a].transferProcess.projectCode,e.data.data.records[a].transferProcess.isPublicNotice?s.TimeDiffer(e.data.data.records[a].transferProcess.publicNoticeTime)?null==e.data.data.records[a].transferProcess.contractId?r.state="正在转换：等待上传合同":e.data.data.records[a].transferProcess.isContractSendBack&&null!=e.data.data.records[a].transferProcess.voucherId?null==e.data.data.records[a].transferProcess.checklistId?r.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[a].transferProcess.invoiceId?r.state="正在转换：等待上传发票":e.data.data.records[a].transferProcess.isComplete||(r.state="等待流程结束"):r.state="正在转换：等待合同寄回和上传到款凭证":r.state="正在转换：正在公示中":r.state="正在转换：等待公示"):r.state="产学研未通过":r.state="正在转换：等待产学研审批":r.state="归属单位未通过":r.state="正在转换：等待归属单位审批":r.state="第一作者未通过":r.state="正在转换：等待第一作者确认"),s.tableData.push(r)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},export_patents:function(){var e=this,t=this,a="/export/exportAllPatents?zldyzzgh="+t.id+"&zldyzzxm="+t.name;t.request(a,{},"GET",{},"blob").then((function(t){console.log(t);try{console.log(t.data);var a=new Blob([t.data]),s="专利.xls",r=document.createElement("a");r.download=s,r.style.display="none",r.href=URL.createObjectURL(a),document.body.appendChild(r),r.click(),URL.revokeObjectURL(r.href),document.body.removeChild(r),e.$message({type:"success",message:"已准备开始下载！"})}catch(o){console.log(o),e.$message({type:"error",message:"数据请求失败！"})}})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))},handleCurrentPage:function(e){var t=this;t.loading=!0;var a=t.Page_url.split("currPage")[0]+"currPage="+e+"&size"+t.Page_url.split("size")[1];console.log(a),t.tableData=[],t.currentPage=e,t.getUserPatent(a),t.size>=50&&this.$message({message:"当前页面数据较多，请稍等！",type:"success"})},handleSizeChange:function(e){var t=this;this.size=e,this.tableData=[],this.refresh(),t.size>=50&&this.$message({message:"当前页面数据较多，请稍等！",type:"success"})},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),s=t.getMonth()+1,r=t.getDate(),o=t.getHours(),n=t.getMinutes(),c=t.getSeconds(),i=a+"-";return s<10&&(i+="0"),i+=s+"-",r<10&&(i+="0"),i+=r+" ",o<10&&(i+="0"),i+=o+":",n<10&&(i+="0"),i+=n+":",c<10&&(i+="0"),i+=c,i},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,s=new Date(t),r=(a-s)/1e3,o=parseInt(r/86400);parseInt(r/3600),parseInt(r%3600/60),parseInt(r%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,a.loading=!0,"查询字段"!=a.SearchType){t.next=6;break}e.$message({message:"请填写查询字段！",type:"warning"}),t.next=24;break;case 6:if(""!=a.SearchText){t.next=10;break}e.$message({message:"请填写查询内容！",type:"warning"}),t.next=24;break;case 10:s="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?16:"授权编号"===t.t0?19:22;break;case 16:return s="/patent/getPatentPageByZLMC?currPage="+a.currentPage+"&size="+a.size+"&zldyzzgh="+a.id+"&zldyzzxm="+a.name+"&zlmc="+a.SearchText,a.Page_url=s,t.abrupt("break",23);case 19:return s="/patent/getPatentPageBySQBH?currPage="+a.currentPage+"&size="+a.size+"&sqbh="+a.SearchText+"&zldyzzgh="+a.id+"&zldyzzxm="+a.name,a.Page_url=s,t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:a.getUserPatent(s);case 24:case"end":return t.stop()}}),t)})))()},FillingPrice:function(e){var t=this,a=this;console.log(e),this.PriceVisible=!0,this.price_wid=e.wid;var s="/intention/getPriceIntentionByWid?wid="+a.price_wid;a.request(s,{},"GET",{}).then((function(e){"success"==e.data.status?a.price=e.data.data.priceIntention:t.$message({type:"error",message:e.data.data.errMsg})})).catch((function(e){console.log(e),t.$message({type:"error",message:"出错了！"})}))},ConfirmPrice:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,s,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,console.log(a.price_wid),console.log(a.price),s={priceIntention:a.price,wid:a.price_wid},r="/intention/getPriceIntentionByWid?wid="+a.price_wid,t.next=7,a.request(r,{},"GET",{}).then((function(t){console.log(t),"success"==t.data.status?(a.price=t.data.data.priceIntention,a.request("/intention/updatePriceIntention",s,"POST",{}).then((function(t){console.log(t),"success"==t.data.status?(e.$message({type:"success",message:"更新成功！"}),e.PriceVisible=!1):e.$message({type:"error",message:t.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))):"fail"==t.data.status&&a.request("/intention/addPriceIntention",s,"POST",{}).then((function(t){console.log(t),"fail"==t.data.status?e.$message({type:"error",message:"提交失败！"}):"success"==t.data.status&&(e.$message({type:"success",message:"提交成功！"}),e.PriceVisible=!1)})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}));case 7:case"end":return t.stop()}}),t)})))()},handleExam:function(e){console.log(e),this.$router.push({path:"/filling_exam",query:e})},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:e})},withDraw:function(e){var t=this;console.log(e);var a=this;this.$confirm("确定撤回吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var s={};s.operatorName=a.$store.state.signed_username,s.operatorGh=a.$store.state.signed_id,s.operatorDepartment=a.$store.state.signed_department,s.remarks="",s.transferProcessId=e.transferProcessId,console.log(s),a.request("/process/withdrawProcessById",s,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"撤回成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"取消撤回！"})}))},editPatent:function(e){console.log(e),this.$router.push({path:"/filling_exam",query:e})},deletePatent:function(e){var t=this,a=this;console.log(e),this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var s={};s.operatorName=a.$store.state.signed_username,s.operatorGh=a.$store.state.signed_id,s.operatorDepartment=a.$store.state.signed_department,s.remarks="",s.transferProcessId=e.transferProcessId,console.log(s),a.request("/process/deleteProcessById",s,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"删除成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},resubmit:function(e){var t=this;console.log(e);var a=this;this.$confirm("确定重新提交吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var s={};s.operatorName=a.$store.state.signed_username,s.operatorGh=a.$store.state.signed_id,s.operatorDepartment=a.$store.state.signed_department,s.remarks="",s.transferProcessId=e.transferProcessId,console.log(s),a.request("/process/cancelWithdrawalProcessById",s,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"提交成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"取消撤回！"})}))},getFailedReason:function(e){var t=this,a=this;console.log(e);var s="/process/getCXYNotApprovalReason?transferProcessId="+e.transferProcessId;a.request(s,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"获取成功！"}),a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message({type:"error",message:e.data.data.errMsg})})).catch((function(e){t.$message({type:"error",message:"出错了！"})}))}}}),c=n,i=(a("63b3"),a("2877")),l=Object(i["a"])(c,s,r,!1,null,null,null);t["default"]=l.exports}}]);