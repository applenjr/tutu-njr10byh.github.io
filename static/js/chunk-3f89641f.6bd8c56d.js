(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3f89641f"],{"0961":function(e,t,a){"use strict";a("4ad8")},"4ad8":function(e,t,a){},"4eb3":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[["root","superadmin","admin"].includes(this.$store.state.signed_authorize)?a("div",{staticClass:"Examing_Transfer_Container"},[a("div",{staticClass:"head_btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:e.type_change},model:{value:e.exam_type,callback:function(t){e.exam_type=t},expression:"exam_type"}},[a("el-radio-button",{attrs:{label:"待审批"}}),a("el-radio-button",{attrs:{label:"未通过"}}),a("el-radio-button",{attrs:{label:"已通过审批"}}),a("el-radio-button",{attrs:{label:"正在转化"}}),a("el-radio-button",{attrs:{label:"已转化"}})],1)],1),["待审批","正在转化","已转化"].includes(e.exam_type)?a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.SearchType_prepend)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"专利第一作者"}},[e._v(" 专利第一作者 ")]),a("el-dropdown-item",{attrs:{command:"成员名单"}},[e._v("成员名单")]),a("el-dropdown-item",{attrs:{command:"所属学院"}},[e._v("所属学院")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}}),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1):e._e(),"已通过审批"==e.exam_type?a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("t-button",{attrs:{variant:"outline",theme:"warning",size:"medium"},on:{click:e.addContract}},[a("t-icon",{attrs:{name:"add"}}),e._v(" 创建合同 ")],1)],1)]):e._e()]),a("t-table",{staticClass:"t_table_style",attrs:{"row-key":"id",columns:"已通过审批"==e.exam_type?e.columns_select:e.columns,data:e.tableData,"expanded-row-keys":e.expandedRowKeys,"expanded-row":e.expandedRow,expandOnRowClick:!0,expandIcon:!1,"table-layout":"auto",stripe:"",hover:"",bordered:"",allowResizeColumnWidth:"",loading:e.tableLoading},on:{"expand-change":e.rehandleExpandChange,"select-change":e.rehandleSelectChange},scopedSlots:e._u([{key:"projectCode",fn:function(t){var r=t.row;return[a("a",{staticClass:"link",attrs:{href:"#"}},[e._v(e._s(r.projectCode))])]}},{key:"settings",fn:function(t){return[a("div",{staticClass:"settings_buttons"},[["已通过审批","正在转化","已转化"].includes(e.exam_type)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getPatent(t.row)}}},[a("t-icon",{attrs:{name:"file"}}),e._v(" 查看审批表 ")],1):e._e(),["待审批","未通过"].includes(e.exam_type)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getPatent_opreate(t.row)}}},[a("t-icon",{attrs:{name:"file"}}),e._v(" 查看审批表 ")],1):e._e(),["等待产学研审批","产学研未通过"].includes(t.row.state)?a("t-button",{attrs:{theme:"success"},on:{click:function(a){return e.Pass(t.row)}}},[a("t-icon",{attrs:{name:"check-circle"}}),e._v(" 通过 ")],1):e._e(),"等待产学研审批"==t.row.state?a("t-button",{attrs:{theme:"danger"},on:{click:function(a){return e.Failed(t.row)}}},[a("t-icon",{attrs:{name:"close-circle"}}),e._v(" 不通过 ")],1):e._e(),"等待产学研创建合同"==t.row.state?a("t-button",{attrs:{theme:"danger"},on:{click:function(a){return e.CancelPass(t.row)}}},[a("t-icon",{attrs:{name:"close-circle"}}),e._v(" 撤销通过 ")],1):e._e(),"已通过审批"==e.exam_type&&-1!=e.choosed_patents.indexOf(t.row.wid)?a("el-radio",{staticStyle:{"margin-left":"10px"},attrs:{label:t.row.wid},nativeOn:{click:function(a){return a.preventDefault(),e.radio_cancelChoose(t.row.wid)}},model:{value:e.top_patent,callback:function(t){e.top_patent=t},expression:"top_patent"}},[e._v("置顶 ")]):e._e()],1)]}}],null,!1,1511225665)}),"已通过审批"!=e.exam_type?a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1):e._e()],1):a("div",[a("el-empty",{attrs:{description:"无权限"}},[a("t-button",{attrs:{theme:"primary",size:"large"},on:{click:e.RoleLow_back}},[e._v(" 返回 ")])],1)],1)])},n=[],o=a("1da1"),s=(a("96cf"),a("caad"),a("ac1f"),a("1276"),a("af2c"),a("4ec3")),c=a("5f87"),i={data:function(){this.$createElement;return{columns_select:[{colKey:"row-select",type:"multiple",width:50},{colKey:"id",title:"序号"},{colKey:"zlmc",title:"专利名称"},{colKey:"paName",title:"受让方单位"},{colKey:"state",title:"转化状态"},{colKey:"settings",title:"操作"}],columns:[{colKey:"id",title:"序号"},{colKey:"zlmc",title:"专利名称"},{colKey:"paName",title:"受让方单位"},{colKey:"state",title:"转化状态"},{colKey:"settings",title:"操作"}],expandedRowKeys:[],expandedRow:function(e,t){var a=t.row;return e("div",[e("b",{style:"color:#99a9bf;"},["专利号:"]),e("span",{style:"margin-left:10px;"},[a.zlh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["授权编号:"]),e("span",{style:"margin-left:10px;"},[a.sqbh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利第一作者姓名:"]),e("span",{style:"margin-left:10px;"},[a.zldyzzxm]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利第一作者工号:"]),e("span",{style:"margin-left:10px;"},[a.zldyzzgh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["立项编号:"]),e("span",{style:"margin-left:10px;"},[a.projectCode]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["归属单位:"]),e("span",{style:"margin-left:10px;"},[a.gsdw]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["所有权人:"]),e("span",{style:"margin-left:10px;"},[a.zlqr]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["转化状态:"]),e("span",{style:"margin-left:10px;"},[a.state]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利代理人:"]),e("span",{style:"margin-left:10px;"},[a.zldlr]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["最后更新时间:"]),e("span",{style:"margin-left:10px;"},[a.gmtUpdate])])},tableData:[],tableLoading:!0,exam_type:"待审批",total:0,currentPage:1,Page_url:"",SearchType:"",SearchType_prepend:"查询字段",SearchText:"",choose_loading:!0,choose_Dialog:!1,choose_Data:[],choosed_patents:[],widList:[],top_patent:""}},mounted:function(){Object(c["a"])()},created:function(){var e=this;setTimeout((function(){console.log(e.$store.state.signed_authorize),["root","superadmin","admin"].includes(e.$store.state.signed_authorize)?e.refresh():e.$message.warning("权限不足！")}),300)},methods:{RoleLow_back:function(){window.history.back()},refresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableLoading=!0,a.tableData=[],a.currentPage=1,a.SearchType="",a.SearchType_prepend="查询字段",a.SearchText="",a.exam_type="待审批",console.log(e.$store.state),r="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage="+a.currentPage+"&size=20&search=0&patentState=5",a.Page_url=r,t.next=13,a.getExam(r);case 13:case"end":return t.stop()}}),t)})))()},getExam:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),r.tableLoading=!1,"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var n={};n.id=a+1,n.wid=e.data.data.records[a].wid,n.sqbh=e.data.data.records[a].sqbh,n.zlmc=e.data.data.records[a].zlmc,n.zlh=e.data.data.records[a].zlh,n.zlqr=e.data.data.records[a].zlqr,n.gsdw=e.data.data.records[a].gsdw,n.pzrq=e.data.data.records[a].pzrq,n.zldlr=e.data.data.records[a].zldlr,n.zldyzzgh=e.data.data.records[a].zldyzzgh,n.zldyzzxm=e.data.data.records[a].zldyzzxm,n.zlh=e.data.data.records[a].zlh,n.zlmc=e.data.data.records[a].zlmc,n.paName=e.data.data.records[a].paName,n.transferApplicationFormId=e.data.data.records[a].transferApplicationFormId,n.gmtUpdate=e.data.data.records[a].gmtUpdate,null==e.data.data.records[a].transferProcessId?n.state="未转化":(n.transferProcessId=e.data.data.records[a].transferProcessId,e.data.data.records[a].isWithdraw?n.state="审批表已撤回":e.data.data.records[a].isZldyzzConfirm?e.data.data.records[a].isZldyzzApproval?e.data.data.records[a].isDepartmentConfirm?e.data.data.records[a].isDepartmentApproval?e.data.data.records[a].isComplete?n.state="已转化":e.data.data.records[a].isCxyConfirm?e.data.data.records[a].isCxyApproval?null==e.data.data.records[a].contractInfoId?n.state="等待产学研创建合同":e.data.data.records[a].isPublicNotice?null==e.data.data.records[a].contractFileId?n.state="等待上传合同":0==e.data.data.records[a].voucherNum?n.state="等待上传到款凭证":null==e.data.data.records[a].checklistId?n.state="等待上传科技成果认定清单":null==e.data.data.records[a].accountingInfoId?n.state="等待生成入账通知单":null==e.data.data.records[a].invoiceId?n.state="等待上传发票":e.data.data.records[a].hasCashReward&&!e.data.data.records[a].isCashRewardPublicNotice?n.state="等待现金奖励公示":e.data.data.records[a].isComplete||(n.state="等待流程结束"):n.state="等待公示":n.state="产学研未通过":n.state="等待产学研审批":n.state="归属单位未通过":n.state="等待上传所属部门意见":n.state="第一作者未通过":n.state="等待第一作者确认"),r.tableData.push(n)}}else t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),r.tableLoading=!1,t.$message.error("出错了！")}));case 3:case"end":return a.stop()}}),a)})))()},rehandleExpandChange:function(e){this.expandedRowKeys=e},handleCurrentPage:function(e){var t=this;return Object(o["a"])(regeneratorRuntime.mark((function a(){var r,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,r.tableLoading=!0,console.log(r.Page_url),n=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(n),r.tableData=[],r.currentPage=e,a.next=9,r.getExam(n);case 9:case"end":return a.stop()}}),a)})))()},radio_cancelChoose:function(e){window.event.cancelBubble=!0,e===this.top_patent?this.top_patent="":this.top_patent=e},rehandleSelectChange:function(e,t){var a=t.selectedRowData;this.top_patent="",this.expandedRowKeys=[];var r=[];console.log(a);for(var n=0;n<a.length;n++)r.push(a[n].wid);this.choosed_patents=r},addContract:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r,n,o,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(console.log(e.top_patent),0==e.choosed_patents.length)e.$notify.warning({title:"提示",content:"请选择至少一个专利！"});else{if(e.widList=[],""!=e.top_patent)for(e.widList.push(e.top_patent),a=0;a<e.choosed_patents.length;a++)e.choosed_patents[a]!=e.top_patent&&e.widList.push(e.choosed_patents[a]);else for(r=0;r<e.choosed_patents.length;r++)e.widList.push(e.choosed_patents[r]);for(n="",n+=e.widList[0],o=1;o<e.widList.length;o++)n=n+"&widList="+e.widList[o];c="/contract/checkPatentList?widList="+n,console.log(c),Object(s["a"])(c,{},"GET",{}).then((function(t){console.log(t),"success"==t.data.status?"OK"==t.data.data&&(e.$notify.success({title:"成功",content:"正在跳转...",duration:1500}),setTimeout((function(){e.$router.push({path:"/filling_contract_transfer",query:{widList:e.widList,type:"filling"}})}),1500)):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}))}case 2:case"end":return t.stop()}}),t)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,n=t.getDate(),o=t.getHours(),s=t.getMinutes(),c=t.getSeconds(),i=a+"-";return r<10&&(i+="0"),i+=r+"-",n<10&&(i+="0"),i+=n+" ",o<10&&(i+="0"),i+=o+":",s<10&&(i+="0"),i+=s+":",c<10&&(i+="0"),i+=c,i},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),n=(a-r)/1e3,o=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return!0},handleDropdown:function(e){console.log(e);var t=this;switch(t.SearchType_prepend=e,e){case"专利名称":t.SearchType=1;break;case"专利第一作者":t.SearchType=2;break;case"成员名单":t.SearchType=3;break;case"所属学院":t.SearchType=4;break;default:break}},search:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,a.tableLoading=!0,"查询字段"!=a.SearchType_prepend){t.next=6;break}e.$message.warning("请填写查询字段！"),t.next=26;break;case 6:if(""!=a.SearchText){t.next=10;break}e.$message.warning("请填写查询内容！"),t.next=26;break;case 10:r="",a.tableData=[],a.currentPage=1,t.t0=a.exam_type,t.next="待审批"===t.t0?16:"正在转化"===t.t0?18:"已转化"===t.t0?20:22;break;case 16:return r="/cxy/getTransferApplicationFromByCondition?contractType=0&patentState=5&currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.abrupt("break",23);case 18:return r="/cxy/getTransferApplicationFromByCondition?contractType=0&patentState=2&currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.abrupt("break",23);case 20:return r="/cxy/getTransferApplicationFromByCondition?contractType=0&patentState=3&currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:console.log(r),a.Page_url=r,a.getExam(r);case 26:case"end":return t.stop()}}),t)})))()},type_change:function(e){console.log(e);var t=this;t.tableLoading=!0,t.tableData=[];var a="";switch(e){case"待审批":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=5";break;case"未通过":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=4";break;case"已通过审批":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=1";break;case"正在转化":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=2";break;case"已转化":a="/cxy/getTransferApplicationFromByCondition?contractType=0&currPage=1&size=20&search=0&patentState=3";break;default:break}t.Page_url=a,t.getExam(a)},getPatent_opreate:function(e){window.event.cancelBubble=!0,console.log(e),this.$router.push({path:"/exam_detail_pc",query:{wid:e.wid,type:"examing_opreate"}})},getPatent:function(e){window.event.cancelBubble=!0,console.log(e),this.$router.push({path:"/exam_detail_pc",query:{wid:e.wid,type:"examing"}})},Pass:function(e){var t=this;window.event.cancelBubble=!0,console.log(e);var a=this;this.$confirm("确认通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r="/process/approvalTransferApplication?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message.success("已通过审批！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！")}))},Failed:function(e){var t=this;window.event.cancelBubble=!0;var a=this;this.$prompt("请填写拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(r){if(console.log(r.value),null==r.value||""==r.value)t.$message({type:"warning",message:"拒绝原因不能为空！"});else{var n="/process/notApprovalTransferApplication?remarks="+r.value+"&transferApplicationFormId="+e.transferApplicationFormId;a.request(n,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("已拒绝！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}})).catch((function(e){console.log(e),t.$message.info("已取消操作！")}))},CancelPass:function(e){var t=this;window.event.cancelBubble=!0,console.log(e);var a=this;this.$confirm("确认撤销通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r="/process/cancelApprovalTransferApplication?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message.success("已撤销通过审批！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！")}))}}},l=i,d=(a("0961"),a("2877")),p=Object(d["a"])(l,r,n,!1,null,null,null);t["default"]=p.exports},af2c:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("caad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var r=a("4ec3"),n=a("5c96"),o=a.n(n),s=function(e){var t="/file/downloadFileById?fileId="+e;Object(r["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])o.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",a=e.headers["content-disposition"].split("fileName=")[1].split(".").length,r=e.headers["content-disposition"].split("fileName=")[1].split(".")[a-1];if(["pdf","png","jpg","jpeg"].includes(r)){switch(r){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var n=e.data,s=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var c=new Blob([n],{type:t});console.log(s),window.navigator.msSaveOrOpenBlob(c,s)}else{var i=new Blob([n],{type:t}),l=window.URL.createObjectURL(i);console.log(l),window.open(l)}}else o.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),o.a.Message({message:"出错了！",type:"error"})}))},c=function(e){Object(r["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){o.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var a=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var n=new Blob([t.data],{type:"application/force-download"}),s=URL.createObjectURL(n),c=document.createElement("a");c.href=s,c.setAttribute("download",a),document.body.appendChild(c),c.click(),document.body.removeChild(c)}catch(i){console.log(i),o.a.Message({message:"数据请求失败！",type:"error"})}}else Object(r["a"])(e,{},"GET",{}).then((function(e){o.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),o.a.Message({message:"出错了！",type:"error"})}))},i=function(e,t){var a="";if(0==t.length)o.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var n=1;n<t.length;n++)a=a+"&fileIdList="+t[n]}Object(r["a"])(a,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){o.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.setAttribute("download",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(s){console.log(s),o.a.Message({message:"数据请求失败！",type:"error"})}}else o.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),o.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:s,downloadFiles:c,downloadFilePackage:i}}}]);