(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d149bae6"],{"5bab":function(e,t,a){},"63b3":function(e,t,a){"use strict";a("5bab")},af2c:function(e,t,a){"use strict";a("ac1f"),a("1276"),a("caad"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d");var r=a("4ec3"),n=a("5c96"),s=a.n(n),o=function(e){var t="/file/downloadFileById?fileId="+e;Object(r["a"])(t,{},"GET",{},"arraybuffer").then((function(e){if(console.log(e),void 0==e.headers["content-disposition"])s.a.Notification({title:"错误",message:"文件可能丢失了！",type:"error"});else{var t="",a=e.headers["content-disposition"].split("fileName=")[1].split(".").length,r=e.headers["content-disposition"].split("fileName=")[1].split(".")[a-1];if(["pdf","png","jpg","jpeg"].includes(r)){switch(r){case"pdf":t="application/pdf";break;case"png":t="image/png";break;case"jpg":t="image/jpeg";break;case"jpeg":t="image/jpeg";break}var n=e.data,o=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);if(window.navigator&&window.navigator.msSaveOrOpenBlob){var i=new Blob([n],{type:t});console.log(o),window.navigator.msSaveOrOpenBlob(i,o)}else{var c=new Blob([n],{type:t}),l=window.URL.createObjectURL(c);console.log(l),window.open(l)}}else s.a.Notification({title:"提示",message:"该文件类型暂不支持在线预览，请下载后查看！",type:"warning"})}})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))},i=function(e){Object(r["a"])(e,{},"GET",{},"blob").then((function(t){if(console.log(t),void 0!=t.headers["content-disposition"]){s.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var a=decodeURI(t.headers["content-disposition"].split("fileName=")[1]);try{var n=new Blob([t.data],{type:"application/force-download"}),o=URL.createObjectURL(n),i=document.createElement("a");i.href=o,i.setAttribute("download",a),document.body.appendChild(i),i.click(),document.body.removeChild(i)}catch(c){console.log(c),s.a.Message({message:"数据请求失败！",type:"error"})}}else Object(r["a"])(e,{},"GET",{}).then((function(e){s.a.Message({message:e.data.data.errMsg,type:"error"})}))})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))},c=function(e,t){var a="";if(0==t.length)s.a.Notification.warning({title:"提示",message:"文件为空！"});else{if(1==t.length)a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];else if(t.length>1){a="/file/downloadPackage?projectCode="+e+"&fileIdList="+t[0];for(var n=1;n<t.length;n++)a=a+"&fileIdList="+t[n]}Object(r["a"])(a,{},"GET",{},"blob").then((function(e){if(void 0!=e.headers["content-disposition"]){s.a.Notification({title:"成功",message:"准备开始下载！",type:"success"});var t=decodeURI(e.headers["content-disposition"].split("fileName=")[1]);try{var a=new Blob([e.data],{type:"application/force-download"}),r=URL.createObjectURL(a),n=document.createElement("a");n.href=r,n.setAttribute("download",t),document.body.appendChild(n),n.click(),document.body.removeChild(n)}catch(o){console.log(o),s.a.Message({message:"数据请求失败！",type:"error"})}}else s.a.Message({message:"文件可能丢失了！",type:"error"})})).catch((function(e){console.log(e),s.a.Message({message:"出错了！",type:"error"})}))}};t["a"]={previewFile:o,downloadFiles:i,downloadFilePackage:c}},fb5f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Patents_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("el-radio-group",{on:{change:e.type_change},model:{value:e.exam_type,callback:function(t){e.exam_type=t},expression:"exam_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"未通过"}}),a("el-radio-button",{attrs:{label:"已通过"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1)],1),["全部"].includes(e.exam_type)&&!e.multiple_check?a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("t-button",{attrs:{theme:"primary"}},[e._v(" "+e._s(e.SearchType)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"专利号"}},[e._v("专利号")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}}),a("t-button",{on:{click:e.search}},[a("t-icon",{attrs:{name:"search"}}),e._v(" 搜索 ")],1)],1):e._e(),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("t-button",{staticClass:"saveBox",attrs:{variant:"outline",size:"large"},on:{click:e.savedBox}},[a("t-icon",{attrs:{name:"edit"}}),e._v(" 草稿箱 ")],1),e.multiple_check?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:e.multiple_transfer}},[a("t-icon",{attrs:{name:"money-circle"}}),e._v(" 批量填写价格意向（转让） ")],1):e._e(),e.multiple_check?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:e.multiple_licence}},[a("t-icon",{attrs:{name:"money-circle"}}),e._v(" 批量填写价格意向（许可） ")],1):e._e()],1)])]),a("t-table",{staticClass:"t_table_style",attrs:{"row-key":"id",columns:"全部"==e.exam_type?e.columns_select:e.columns,data:e.tableData,"expanded-row-keys":e.expandedRowKeys,"expanded-row":e.expandedRow,expandOnRowClick:!0,expandIcon:!1,"table-layout":"auto",stripe:"",hover:"",bordered:"",allowResizeColumnWidth:"",loading:e.tableLoading},on:{"expand-change":e.rehandleExpandChange,"select-change":e.rehandleSelectChange},scopedSlots:e._u([{key:"settings",fn:function(t){return[a("div",{staticClass:"settings_buttons"},["未转换"!=t.row.state||""==t.row.zlzsxzdz&&null==t.row.certificateId?e._e():a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.handleExam(t.row)}}},[a("t-icon",{attrs:{name:"edit"}}),e._v(" 填写审批 ")],1),"未转换"==t.row.state&&""==t.row.zlzsxzdz&&null==t.row.certificateId?a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.upload(t.row,"certificate")}}},[a("t-icon",{attrs:{name:"cloud-upload"}}),e._v(" 上传专利证书 ")],1)],1):e._e(),"未转换"==t.row.state?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.FillingPrice(t.row)}}},[a("t-icon",{attrs:{name:"money-circle"}}),e._v(" 价格意向 ")],1):e._e(),"未转换"!=t.row.state&&"产学研未通过"!=t.row.state&&"审批表已撤回"!=t.row.state&&"第一作者未通过"!=t.row.state?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getPatent(t.row)}}},[a("t-icon",{attrs:{name:"file"}}),e._v(" 查看审批表 ")],1):e._e(),["等待第一作者确认","等待上传学院意见"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.withDraw(t.row)}}},[a("t-icon",{attrs:{name:"rollback"}}),e._v(" 撤回 ")],1):e._e(),["产学研未通过","审批表已撤回","第一作者未通过"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.editPatent(t.row)}}},[a("t-icon",{attrs:{name:"edit"}}),e._v(" 修改审批表 ")],1):e._e(),["产学研未通过"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getFailedReason_cxy(t.row)}}},[a("t-icon",{attrs:{name:"help-circle"}}),e._v(" 查看原因 ")],1):e._e(),["第一作者未通过"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.getFailedReason_teacher(t.row)}}},[a("t-icon",{attrs:{name:"help-circle"}}),e._v(" 查看原因 ")],1):e._e(),["产学研未通过","第一作者未通过","审批表已撤回"].includes(t.row.state)?a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.deletePatent(t.row)}}},[a("t-icon",{attrs:{name:"delete"}}),e._v(" 删除 ")],1):e._e(),["等待上传到款凭证"].includes(t.row.state)?a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.upload(t.row,"pdf")}}},[a("t-icon",{attrs:{name:"cloud-upload"}}),e._v(" 到款凭证 ")],1)],1):e._e(),["等待上传学院意见","产学研未通过"].includes(t.row.state)?a("el-upload",{ref:"upload",staticClass:"upload-demo",attrs:{action:"/pdf/upload","show-file-list":!1,"http-request":e.Upload}},[a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.upload(t.row,"picture")}}},[a("t-icon",{attrs:{name:"cloud-upload"}}),e._v(" 学院意见 ")],1)],1):e._e(),a("t-button",{attrs:{variant:"outline",theme:"primary"},on:{click:function(a){return e.downloadCertificate(t.row)}}},[a("t-icon",{attrs:{name:"download"}}),e._v(" 下载专利证书 ")],1)],1)]}}])}),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{"current-page":e.currentPage,"page-sizes":[10,20,50,100],"page-size":20,layout:"total, sizes, prev, pager, next, jumper",total:e.total},on:{"size-change":e.handleSizeChange,"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Price_Dialog",attrs:{title:"价格意向（单位：万元）",visible:e.PriceVisible,width:"30%"},on:{"update:visible":function(t){e.PriceVisible=t}}},[a("div",{staticClass:"price_expect"},[a("div",[e._v("转让：")]),a("el-input",{staticStyle:{"margin-top":"5px"},attrs:{type:"number",placeholder:"请填写转让价格"},model:{value:e.transferprice,callback:function(t){e.transferprice=t},expression:"transferprice"}}),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("许可：")]),a("el-input",{staticStyle:{"margin-top":"5px"},attrs:{type:"number",placeholder:"请填写许可价格"},model:{value:e.licenseprice,callback:function(t){e.licenseprice=t},expression:"licenseprice"}}),a("div",{staticStyle:{"margin-top":"10px"}},[e._v("开放许可：")]),a("el-input",{staticStyle:{"margin-top":"5px"},attrs:{type:"number",placeholder:"请填写开放许可价格意向"},model:{value:e.openlicenseprice,callback:function(t){e.openlicenseprice=t},expression:"openlicenseprice"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("t-button",{on:{click:function(t){e.PriceVisible=!1}}},[e._v("取 消")]),a("t-button",{on:{click:function(t){return e.ConfirmPrice()}}},[e._v(" 确 认 ")])],1)]),a("el-dialog",{attrs:{title:"未通过原因",visible:e.dispassDialog,width:"60%"},on:{"update:visible":function(t){e.dispassDialog=t}}},[a("el-table",{attrs:{data:e.dispassData}},[a("el-table-column",{attrs:{prop:"operatorName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"operatorGh",label:"工号"}}),a("el-table-column",{attrs:{prop:"operatorDepartment",label:"工作单位"}}),a("el-table-column",{attrs:{prop:"remarks",label:"未通过原因"}}),a("el-table-column",{attrs:{prop:"gmtCreate",label:"操作时间",width:"180"}})],1)],1)],1)},n=[],s=a("1da1"),o=(a("96cf"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("ac1f"),a("1276"),a("b0c0"),a("fb6a"),a("caad"),a("af2c")),i={data:function(){this.$createElement;return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,columns_select:[{colKey:"row-select",type:"multiple",width:50},{colKey:"id",title:"序号"},{colKey:"zlmc",title:"专利名称"},{colKey:"state",title:"转换状态"},{colKey:"settings",title:"操作"}],columns:[{colKey:"id",title:"序号"},{colKey:"zlmc",title:"专利名称"},{colKey:"state",title:"转换状态"},{colKey:"settings",title:"操作"}],expandedRowKeys:[],expandedRow:function(e,t){var a=t.row;return e("div",[e("b",{style:"color:#99a9bf;"},["专利号:"]),e("span",{style:"margin-left:10px;"},[a.zlh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["成员名单:"]),e("span",{style:"margin-left:10px;"},[a.cymd]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["成员工号:"]),e("span",{style:"margin-left:10px;"},[a.cygh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利第一作者姓名:"]),e("span",{style:"margin-left:10px;"},[a.zldyzzxm]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利第一作者工号:"]),e("span",{style:"margin-left:10px;"},[a.zldyzzgh]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["授权日期:"]),e("span",{style:"margin-left:10px;"},[a.sqrq]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["归属单位:"]),e("span",{style:"margin-left:10px;"},[a.gsdw]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["所有权人:"]),e("span",{style:"margin-left:10px;"},[a.zlqr]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["转换状态:"]),e("span",{style:"margin-left:10px;"},[a.state]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["专利代理人:"]),e("span",{style:"margin-left:10px;"},[a.zldlr]),e("br"),e("br"),e("b",{style:"color:#99a9bf"},["最后更新时间:"]),e("span",{style:"margin-left:10px;"},[a.gmtUpdate])])},tableData:[],tableLoading:!0,exam_type:"全部",multiple_check:!1,selected_patents:[],total:0,currentPage:1,size:20,Page_url:"",SearchType:"查询字段",SearchText:"",price_type:"",PriceVisible:!1,price:"",price_wid:"",transferprice:"",licenseprice:"",openlicenseprice:"",dispassDialog:!1,dispassData:[{operatorName:"",operatorGh:"",operatorDepartment:"",remarks:"",gmtCreate:""}],upload_content:{type:"",contractInfoId:"",transferApplicationFormId:""}}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;e.tableData=[],e.currentPage=1,e.SearchType="查询字段",e.SearchText="",console.log(this.$store.state);var t="/teacher/getMyPatentPage?currPage="+e.currentPage+"&size="+e.size;e.Page_url=t,e.getUserPatent(t)},getUserPatent:function(e){var t=this,a=this;a.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),a.tableLoading=!1,"success"==e.data.status){a.total=e.data.data.total;for(var r=0;r<e.data.data.records.length;r++){var n={};n.id=r+1,n.wid=e.data.data.records[r].wid,n.certificateId=e.data.data.records[r].certificateId,n.sqrq=e.data.data.records[r].zlsqrq,n.sqbh=e.data.data.records[r].sqbh,n.sqggh=e.data.data.records[r].sqggh,n.zlmc=e.data.data.records[r].zlmc,n.zlh=e.data.data.records[r].zlh,n.zlqr=e.data.data.records[r].zlqr,n.gsdw=e.data.data.records[r].gsdw,n.priceIntention=null==e.data.data.records[r].priceIntention?"暂无":e.data.data.records[r].priceIntention,n.licencePriceIntention=null==e.data.data.records[r].licencePriceIntention?"暂无":e.data.data.records[r].licencePriceIntention,n.openLicencePriceIntention=null==e.data.data.records[r].openLicencePriceIntention?"暂无":e.data.data.records[r].openLicencePriceIntention,n.pzrq=e.data.data.records[r].pzrq,n.zldlr=e.data.data.records[r].zldlr,n.zldyzzgh=e.data.data.records[r].zldyzzgh,n.zldyzzxm=e.data.data.records[r].zldyzzxm,n.zlh=e.data.data.records[r].zlh,n.zlmc=e.data.data.records[r].zlmc,n.zlzsxzdz=e.data.data.records[r].zlzsxzdz,n.cymd=e.data.data.records[r].cymd,n.cygh=e.data.data.records[r].cygh,n.transferApplicationFormId=e.data.data.records[r].transferApplicationFormId,n.gmtUpdate=e.data.data.records[r].gmtUpdate,null==e.data.data.records[r].transferProcessId?n.state="未转换":(n.transferProcessId=e.data.data.records[r].transferProcessId,e.data.data.records[r].isWithdraw?n.state="审批表已撤回":e.data.data.records[r].isZldyzzConfirm?e.data.data.records[r].isZldyzzApproval?e.data.data.records[r].isDepartmentConfirm?e.data.data.records[r].isDepartmentApproval?e.data.data.records[r].isComplete?n.state="已转换":e.data.data.records[r].isCxyConfirm?e.data.data.records[r].isCxyApproval?null==e.data.data.records[r].contractInfoId?n.state="等待产学研创建合同":e.data.data.records[r].isPublicNotice?a.TimeDiffer(e.data.data.records[r].publicNoticeTime)?0==e.data.data.records[r].voucherNum?n.state="等待上传到款凭证":null==e.data.data.records[r].checklistId?n.state="等待上传认定清单（备案）":null==e.data.data.records[r].accountingInfoId?n.state="等待生成入账通知单":null==e.data.data.records[r].invoiceId?n.state="等待财务处上传发票":e.data.data.records[r].hasCashReward&&!e.data.data.records[r].isCashRewardPublicNotice?n.state="等待现金奖励公示":e.data.data.records[r].isComplete||(n.state="等待流程结束"):n.state="正在公示中":n.state="等待公示":n.state="产学研未通过":n.state="等待产学研审批":n.state="归属单位未通过":n.state="等待上传学院意见":n.state="第一作者未通过":n.state="等待第一作者确认"),a.tableData.push(n)}t.$message.success("数据已更新！")}else t.$message.error(e.data.data.errMsg)})).catch((function(e){a.tableLoading=!1,console.log(e),t.$message.error("出错了！")}))},type_change:function(e){console.log(e);var t=this;t.tableLoading=!0,t.tableData=[];var a="";switch(e){case"全部":a="/teacher/getMyPatentPage?currPage=1&size=20";break;case"未通过":a="/teacher/getMyPatentPageNotApproval?currPage=1&size=20";break;case"已通过":a="/teacher/getMyPatentPageApproval?currPage=1&size=20";break;case"正在转换":a="/teacher/getMyPatentPageTransferring?currPage=1&size=20";break;case"已转换":a="/teacher/getMyPatentPageTransferred?currPage=1&size=20";break;default:break}t.Page_url=a,t.getUserPatent(a)},handleSelectionChange:function(e){console.log(e),this.multiple_check=!0,0==e.length&&(this.multiple_check=!1),this.selected_patents=e},rehandleExpandChange:function(e){this.expandedRowKeys=e},rehandleSelectChange:function(e,t){var a=t.selectedRowData;this.multiple_check=!0,0==a.length&&(this.multiple_check=!1),this.selected_patents=a},multiple_transfer:function(){var e=this,t=this;console.log(this.selected_patents),this.$prompt("请输入转让价格（单位：万元）","批量转让",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"单位：万元",inputType:"number"}).then((function(a){var r=a.value,n={};n.priceIntention=parseInt(r),n.widList=[];for(var s=0;s<t.selected_patents.length;s++)n.widList.push(t.selected_patents[s].wid);console.log(n),t.request("/intention/batchFillingTransferPriceIntention",n,"POST",{}).then((function(a){console.log(a.data),"success"==a.data.status?(e.$message.success("批量转让成功！"),t.refresh()):e.$message.error(a.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}))})).catch((function(t){console.log(t),e.$message.info("已取消操作！！")}))},multiple_licence:function(){var e=this,t=this;console.log(this.selected_patents),this.$prompt("请输入许可价格（单位：万元）","批量许可",{confirmButtonText:"确定",cancelButtonText:"取消",inputPlaceholder:"单位：万元",inputType:"number"}).then((function(a){var r=a.value,n={};n.priceIntention=parseInt(r),n.widList=[];for(var s=0;s<t.selected_patents.length;s++)n.widList.push(t.selected_patents[s].wid);console.log(n),t.request("/intention/batchFillingLicencePriceIntention",n,"POST",{}).then((function(a){console.log(a.data),"success"==a.data.status?(e.$message.success("批量许可成功！"),t.refresh()):e.$message.error(a.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}))})).catch((function(t){console.log(t),e.$message.info("已取消操作！！")}))},export_allpatents:function(){var e=this,t=this;t.request("/export/exportAllPatents",{},"GET",{},"blob").then((function(t){console.log(t);try{console.log(t.data);var a=new Blob([t.data]),r="全部专利.xls",n=document.createElement("a");n.download=r,n.style.display="none",n.href=URL.createObjectURL(a),document.body.appendChild(n),n.click(),URL.revokeObjectURL(n.href),document.body.removeChild(n),e.$notify.success({title:"成功",content:"已准备开始下载！"})}catch(s){console.log(s),e.$message.error("数据请求失败！")}})).catch((function(t){console.log(t),e.$message.error("出错了！")}))},handleCurrentPage:function(e){var t=this;t.tableLoading=!0;var a=t.Page_url.split("currPage")[0]+"currPage="+e+"&size"+t.Page_url.split("size")[1];console.log(a),t.tableData=[],t.currentPage=e,t.getUserPatent(a),t.size>=50&&this.$message.success("当前页面数据较多，请稍等！")},handleSizeChange:function(e){var t=this;this.size=e,this.tableData=[],t.tableLoading=!0,this.refresh()},TimeDiffer:function(e){var t=new Date,a=new Date(e),r=(t-a)/1e3,n=parseInt(r/86400);parseInt(r/3600),parseInt(r%3600/60),parseInt(r%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,"查询字段"!=a.SearchType){t.next=5;break}e.$message.warning("请填写查询字段！"),t.next=24;break;case 5:if(""!=a.SearchText){t.next=9;break}e.$message.warning("请填写查询内容！"),t.next=24;break;case 9:a.tableLoading=!0,r="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?16:"专利号"===t.t0?19:22;break;case 16:return r="/teacher/getPatentPageByZLMC?currPage="+a.currentPage+"&size="+a.size+"&userGh="+a.id+"&userName="+a.name+"&zlmc="+a.SearchText,a.Page_url=r,t.abrupt("break",23);case 19:return r="/teacher/getPatentPageByZLH?currPage="+a.currentPage+"&size="+a.size+"&sqbh="+a.SearchText+"&userGh="+a.id+"&userName="+a.name+"&zlh="+a.SearchText,a.Page_url=r,t.abrupt("break",23);case 22:return t.abrupt("break",23);case 23:a.getUserPatent(r);case 24:case"end":return t.stop()}}),t)})))()},savedBox:function(){this.$router.push({path:"/save_exam"})},deletedBox:function(){this.$router.push({path:"/delete_exam"})},FillingPrice:function(e){console.log(e),this.price_wid=e.wid,this.transferprice=e.priceIntention,this.licenseprice=e.licencePriceIntention,this.openlicenseprice=e.openLicencePriceIntention,this.PriceVisible=!0},ConfirmPrice:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var a,r,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(""!=e.transferprice||""!=e.licenseprice||""!=e.openlicenseprice){t.next=4;break}e.$notify.warning({title:"提示",content:"请至少填写一项！",duration:2e3}),t.next=25;break;case 4:if(a=e,r={},n="",s=!1,""==e.transferprice){t.next=14;break}return r={priceIntention:a.transferprice,wid:a.price_wid},console.log(r),n="/intention/updateTransferPriceIntention",t.next=14,a.request(n,r,"POST",{}).then((function(t){console.log(t),e.PriceVisible=!1,"success"==t.data.status?(a.price="",s=!0):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}));case 14:if(""==e.licenseprice){t.next=19;break}return r={licencePriceIntention:a.licenseprice,wid:a.price_wid},n="/intention/updateLicencePriceIntention",t.next=19,a.request(n,r,"POST",{}).then((function(t){console.log(t),e.PriceVisible=!1,"success"==t.data.status?(a.price="",s=!0):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}));case 19:if(""==e.openlicenseprice){t.next=24;break}return r={openLicencePriceIntention:a.openlicenseprice,wid:a.price_wid},n="/intention/updateOpenLicencePriceIntention",t.next=24,a.request(n,r,"POST",{}).then((function(t){console.log(t),e.PriceVisible=!1,"success"==t.data.status?(a.price="",s=!0):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}));case 24:s&&(e.$notify.success({title:"成功",content:"操作成功！",duration:2e3}),a.refresh());case 25:case"end":return t.stop()}}),t)})))()},handleExam:function(e){console.log(e),this.$router.push({path:"/filling_exam",query:{wid:e.wid,type:"filling"}})},getPatent:function(e){console.log(e),this.$router.push({path:"/exam_detail_pc",query:{wid:e.wid}})},withDraw:function(e){var t=this;console.log(e);var a=this;this.$confirm("确定撤回吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r="/process/withdrawProcessById?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("撤回成功！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！！")}))},editPatent:function(e){console.log(e),this.$router.push({path:"/filling_exam",query:{wid:e.wid,type:"fix"}})},deletePatent:function(e){var t=this,a=this;console.log(e),this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r="/process/deleteProcessById?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("删除成功！"),a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！！")}))},getFailedReason_cxy:function(e){var t=this,a=this;console.log(e);var r="/process/getCXYNotApprovalReason?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("获取成功！"),a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},getFailedReason_teacher:function(e){var t=this,a=this;console.log(e);var r="/process/getZLDYZZNotApprovalReason?transferApplicationFormId="+e.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message.success("获取成功！"),a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},upload:function(e,t){this.upload_content.type=t,this.upload_content.contractInfoId=e.contractInfoId,this.upload_content.transferApplicationFormId=e.transferApplicationFormId,this.upload_content.wid=e.wid},Upload:function(e){var t=this,a=this;if(console.log(e),console.log(e.file),"picture"==a.upload_content.type)if("image/jpeg"!=e.file.type&&"image/png"!=e.file.type)this.$message.warning("只能上传jpg/png文件，且不超过10M！");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var r=new FormData;r.append("file",e.file),r.append("transferApplicationFormId",a.upload_content.transferApplicationFormId),a.request("/file/uploadOAResult",r,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message.success("上传成功！"),a.file_type_Dialog=!1,a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}else if("pdf"==a.upload_content.type)if("pdf"!=e.file.name.split(".").slice(-1))this.$message.warning("上传文件只能是pdf格式，且不超过10M！");else if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var n=new FormData;n.append("file",e.file),n.append("contractInfoId",a.upload_content.contractInfoId),console.log(n),a.request("/transferring/uploadVoucher",n,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(t.$message.success("上传成功！"),a.file_type_Dialog=!1,a.refresh()):t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"}),t.$message.error("出错了！")}))}else if("certificate"==a.upload_content.type)if(console.log(e),["pdf","png","jpg","jpeg"].includes(e.file.name.split(".")[1]))if(e.file.size/1024/1024>10)this.$message.warning("上传文件大小不得超过10M!");else{var s=new FormData;s.append("file",e.file),s.append("wid",a.upload_content.wid),console.log(s),a.request("/file/uploadCertificate",s,"POST",{}).then((function(e){if(console.log(e),"success"==e.data.status){t.$message.success("上传成功！");var r="/file/getFileListByContractInfoId?contractInfoId="+a.contractInfoId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.get_files(e.data.data),sessionStorage.setItem("state",JSON.stringify(t.$store.state)),window.location.reload()):(t.$message.error(e.data.data.errMsg),window.location.reload())})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}else t.$message.error(e.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))}else this.$message.warning("上传文件只能是pdf或图片!")},downloadCertificate:function(e){console.log(e);var t="/teacher/downloadCertificate?wid="+e.wid;o["a"].downloadFiles(t)}}},c=i,l=(a("63b3"),a("2877")),d=Object(l["a"])(c,r,n,!1,null,null,null);t["default"]=d.exports}}]);