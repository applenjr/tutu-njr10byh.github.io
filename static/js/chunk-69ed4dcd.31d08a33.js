(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69ed4dcd"],{2136:function(e,t,a){},3090:function(e,t,a){"use strict";a("2136")},"414a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Data_Center_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("div",[a("el-radio-group",{attrs:{size:"small"},on:{change:e.table_type_change},model:{value:e.table_type,callback:function(t){e.table_type=t},expression:"table_type"}},[a("el-radio-button",{attrs:{label:"专利列表"}}),a("el-radio-button",{attrs:{label:"合同列表"}}),a("el-radio-button",{attrs:{label:"公司列表"}})],1),"专利列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-left":"16px"},attrs:{size:"small"},on:{change:e.patents_type_change},model:{value:e.patents_type,callback:function(t){e.patents_type=t},expression:"patents_type"}},[a("el-radio-button",{attrs:{label:"已授权"}}),a("el-radio-button",{attrs:{label:"未授权"}})],1):e._e(),"合同列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-left":"18px"},attrs:{size:"small"},on:{change:e.contract_type_change},model:{value:e.contract_status_type,callback:function(t){e.contract_status_type=t},expression:"contract_status_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1):e._e()],1),"专利列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-top":"10px"},on:{change:e.patents_type_change},model:{value:e.patents_status_type,callback:function(t){e.patents_status_type=t},expression:"patents_status_type"}},[a("el-radio-button",{attrs:{label:"全部专利"}}),a("el-radio-button",{attrs:{label:"未转换"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已完成转换"}})],1):e._e(),"合同列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-top":"10px"},on:{change:e.contract_type_change},model:{value:e.contract_type,callback:function(t){e.contract_type=t},expression:"contract_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"普通实施许可"}}),a("el-radio-button",{attrs:{label:"拍他许可"}}),a("el-radio-button",{attrs:{label:"独占许可"}}),a("el-radio-button",{attrs:{label:"转让"}})],1):e._e()],1),"合同列表"==e.table_type?a("div",{staticClass:"contractCode"},[a("div",[e._v("合同编号区间")]),a("el-input",{model:{value:e.codeBegin,callback:function(t){e.codeBegin=t},expression:"codeBegin"}}),a("span",[e._v(" —— ")]),a("el-input",{model:{value:e.codeEnd,callback:function(t){e.codeEnd=t},expression:"codeEnd"}})],1):e._e(),a("div",{staticClass:"Search"},[a("div",{staticClass:"input_button"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.SearchType_prepend)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),"专利列表"==e.table_type?a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"专利第一作者"}},[e._v(" 专利第一作者 ")]),a("el-dropdown-item",{attrs:{command:"成员名单"}},[e._v("成员名单")]),a("el-dropdown-item",{attrs:{command:"所属学院"}},[e._v("所属学院")])],1):e._e(),"合同列表"==e.table_type?a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"合同名称"}},[e._v("合同名称")]),a("el-dropdown-item",{attrs:{command:"合同编号"}},[e._v("合同编号")]),a("el-dropdown-item",{attrs:{command:"受让方单位"}},[e._v("受让方单位 ")])],1):e._e(),"公司列表"==e.table_type?a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"公司名称"}},[e._v("公司名称")]),a("el-dropdown-item",{attrs:{command:"注册地址"}},[e._v("注册地址")]),a("el-dropdown-item",{attrs:{command:"通讯地址"}},[e._v("通讯地址")]),a("el-dropdown-item",{attrs:{command:"法定代表人"}},[e._v(" 法定代表人 ")]),a("el-dropdown-item",{attrs:{command:"联系人姓名"}},[e._v(" 联系人姓名 ")]),a("el-dropdown-item",{attrs:{command:"纳税人识别号"}},[e._v(" 纳税人识别号 ")])],1):e._e()],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}}),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1),a("div",{staticClass:"download_button"},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:e.datevalue,callback:function(t){e.datevalue=t},expression:"datevalue"}}),a("el-button",{attrs:{icon:"el-icon-download"},on:{click:e.download_excel_Dialog_open}},[e._v(" 导出Excel ")])],1)])]),"专利列表"==e.table_type?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.PatentstableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"成员名单"}},[a("span",[e._v(e._s(t.row.cymd))])]),a("el-form-item",{attrs:{label:"成员工号"}},[a("span",[e._v(e._s(t.row.cygh))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"申请日期"}},[a("span",[e._v(e._s(t.row.zlapplyrq))])]),a("el-form-item",{attrs:{label:"授权日期"}},[a("span",[e._v(e._s(t.row.zlsqrq))])]),a("el-form-item",{attrs:{label:"转让价格意向（万元）"}},[a("span",[e._v(e._s(t.row.priceIntention))])]),a("el-form-item",{attrs:{label:"许可价格意向（万元）"}},[a("span",[e._v(e._s(t.row.licencePriceIntention))])]),a("el-form-item",{attrs:{label:"开放许可价格意向（万元）"}},[a("span",[e._v(e._s(t.row.openLicencePriceIntention))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"最后更新日期"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}],null,!1,210521182)}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"zldyzzxm",label:"第一作者",width:"120"}}),a("el-table-column",{attrs:{prop:"cymd",label:"成员名单"}}),a("el-table-column",{attrs:{prop:"gsdw",label:"所属学院"}}),"已完成转换"==e.patents_status_type?a("el-table-column",{attrs:{prop:"completeTime",label:"完成时间",width:"180"}}):e._e()],1):e._e(),"合同列表"==e.table_type?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.ContractstableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"合同名称"}},[a("span",[e._v(e._s(t.row.projectName))])]),a("el-form-item",{attrs:{label:"合同编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"受让方"}},[a("span",[e._v(e._s(t.row.paName))])]),a("el-form-item",{attrs:{label:"转让总金额"}},[a("span",[e._v(e._s(t.row.totalTransferAmount)+" 万元")])]),a("el-form-item",{attrs:{label:"转化状态"}},[a("span",[e._v(e._s(t.row.state))])]),null!=t.row.publicNoticeTime?a("el-form-item",{attrs:{label:"公示信息"}},[a("span",[e._v("已经公示 "+e._s(t.row.publicNoticeTime)+" 天")])]):e._e(),a("el-form-item",{attrs:{label:"更新时间"}},[a("span",[e._v(e._s(t.row.gmtUpdate))])])],1)]}}],null,!1,1304536962)}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"projectName",label:"合同名称"}}),a("el-table-column",{attrs:{prop:"projectCode",label:"合同编号",width:"120"}}),a("el-table-column",{attrs:{prop:"paName",label:"受让方单位"}}),"已转换"==e.contract_status_type?a("el-table-column",{attrs:{prop:"completeTime",label:"完成时间",width:"180"}}):e._e()],1):e._e(),"公司列表"==e.table_type?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.CompanytableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"公司名称"}},[a("span",[e._v(e._s(t.row.companyName))])]),a("el-form-item",{attrs:{label:"公司联系人姓名"}},[a("span",[e._v(e._s(t.row.companyContactPerson))])]),a("el-form-item",{attrs:{label:"公司联系人电话"}},[a("span",[e._v(e._s(t.row.companyContactPhone))])]),a("el-form-item",{attrs:{label:"公司法定代表人"}},[a("span",[e._v(e._s(t.row.companyRepresentative))])]),a("el-form-item",{attrs:{label:"公司注册地址"}},[a("span",[e._v(e._s(t.row.companyAddress))])]),a("el-form-item",{attrs:{label:"公司通讯地址"}},[a("span",[e._v(e._s(t.row.companyMailingAddress))])]),a("el-form-item",{attrs:{label:"公司联系邮箱"}},[a("span",[e._v(e._s(t.row.companyContactEmail))])]),a("el-form-item",{attrs:{label:"邮编"}},[a("span",[e._v(e._s(t.row.companyPostalCode))])]),a("el-form-item",{attrs:{label:"纳税人识别号"}},[a("span",[e._v(e._s(t.row.taxpayerCode))])])],1)]}}],null,!1,2509208018)}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"companyName",label:"公司名称"}}),a("el-table-column",{attrs:{prop:"companyContactPerson",label:"公司联系人姓名"}}),a("el-table-column",{attrs:{prop:"companyContactPhone",label:"公司联系人电话"}}),a("el-table-column",{attrs:{prop:"companyRepresentative",label:"公司法定代表人"}})],1):e._e(),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"dialogStyle",attrs:{title:"导出Excel",visible:e.download_excel_Dialog,width:"55%"},on:{"update:visible":function(t){e.download_excel_Dialog=t}}},[a("h2",[e._v("选择需要导出的字段")]),"专利列表"==e.table_type?a("div",{staticClass:"column_checkbox"},e._l(e.columnList,(function(t){return a("el-checkbox-group",{key:t.index,model:{value:e.download_patentList,callback:function(t){e.download_patentList=t},expression:"download_patentList"}},[a("el-checkbox",{attrs:{label:t.columnName,border:"",size:"small"}},[e._v(" "+e._s(t.columnNameCN)+" ")])],1)})),1):e._e(),"合同列表"==e.table_type?a("div",{staticClass:"column_checkbox"},e._l(e.columnList,(function(t){return a("el-checkbox-group",{key:t.index,model:{value:e.download_contractList,callback:function(t){e.download_contractList=t},expression:"download_contractList"}},[a("el-checkbox",{attrs:{label:t.columnName,border:"",size:"small"}},[e._v(" "+e._s(t.columnNameCN)+" ")])],1)})),1):e._e(),"公司列表"==e.table_type?a("div",{staticClass:"column_checkbox"},e._l(e.columnList,(function(t){return a("el-checkbox-group",{key:t.index,model:{value:e.download_companyList,callback:function(t){e.download_companyList=t},expression:"download_companyList"}},[a("el-checkbox",{attrs:{label:t.columnName,border:"",size:"small"}},[e._v(" "+e._s(t.columnNameCN)+" ")])],1)})),1):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.download_excel_Dialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.download_excel}},[e._v("确 定")])],1)])],1)},o=[],n=a("1da1"),s=(a("ac1f"),a("1276"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),{data:function(){return{table_type:"专利列表",patents_type:"已授权",patents_status_type:"全部专利",contract_type:"全部",contract_status_type:"全部",PatentstableData:[],ContractstableData:[],CompanytableData:[],loading:!0,total:0,currentPage:1,Page_url:"",SearchType_prepend:"查询字段",SearchType:0,SearchText:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},datevalue:[],price_opreate_Dialog:!1,price_opreate_Data:[],columnList:[],download_excel_Dialog:!1,download_patentList:[],download_contractList:[],download_companyList:[],codeBegin:"",codeEnd:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,a.PatentstableData=[],a.currentPage=1,a.table_type="专利列表",a.patents_type="已授权",a.patents_status_type="全部专利",a.SearchType_prepend="查询字段",a.SearchText="",console.log(e.$store.state),r="/export/getPatentByCondition?currPage=1&size=20&search=0",t.t0=a.patents_type,t.next="已授权"===t.t0?13:"未授权"===t.t0?15:17;break;case 13:return r+="&authorized=true",t.abrupt("break",19);case 15:return r+="&authorized=false",t.abrupt("break",19);case 17:return r+="&authorized=true",t.abrupt("break",19);case 19:t.t1=a.patents_status_type,t.next="全部专利"===t.t1?22:"未转换"===t.t1?24:"正在转换"===t.t1?26:"已完成转换"===t.t1?28:30;break;case 22:return r+="&patentState=0",t.abrupt("break",30);case 24:return r+="&patentState=1",t.abrupt("break",30);case 26:return r+="&patentState=2",t.abrupt("break",30);case 28:return r+="&patentState=3",t.abrupt("break",30);case 30:return a.Page_url=r,t.next=33,a.getData(r,"patent");case 33:case"end":return t.stop()}}),t)})))()},getData:function(e,t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=a,"patent"!=t){r.next=7;break}return o.PatentstableData=[],r.next=5,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var r={};r.index=t+1,r.wid=e.data.data.records[t].wid,r.zlapplyrq=e.data.data.records[t].zlapplyrq,r.zlsqrq=e.data.data.records[t].zlsqrq,r.sqbh=e.data.data.records[t].sqbh,r.sqggh=e.data.data.records[t].sqggh,r.zlmc=e.data.data.records[t].zlmc,r.zlh=e.data.data.records[t].zlh,r.zlqr=e.data.data.records[t].zlqr,r.gsdw=e.data.data.records[t].gsdw,r.priceIntention=null==e.data.data.records[t].priceIntention?"暂无":e.data.data.records[t].priceIntention,r.licencePriceIntention=null==e.data.data.records[t].licencePriceIntention?"暂无":e.data.data.records[t].licencePriceIntention,r.openLicencePriceIntention=null==e.data.data.records[t].openLicencePriceIntention?"不同意开放许可":e.data.data.records[t].openLicencePriceIntention,r.pzrq=e.data.data.records[t].pzrq,r.zldlr=e.data.data.records[t].zldlr,r.zldyzzgh=e.data.data.records[t].zldyzzgh,r.zldyzzxm=e.data.data.records[t].zldyzzxm,r.zlh=e.data.data.records[t].zlh,r.zlmc=e.data.data.records[t].zlmc,r.cymd=e.data.data.records[t].cymd,r.cygh=e.data.data.records[t].cygh,r.transferApplicationFormId=e.data.data.records[t].transferApplicationFormId,r.gmtUpdate=e.data.data.records[t].gmtUpdate,r.completeTime=e.data.data.records[t].completeTime,null==e.data.data.records[t].transferProcessId?r.state="未转换":(r.transferProcessId=e.data.data.records[t].transferProcessId,e.data.data.records[t].isWithdraw?r.state="审批表已撤回":e.data.data.records[t].isZldyzzConfirm?e.data.data.records[t].isZldyzzApproval?e.data.data.records[t].isDepartmentConfirm?e.data.data.records[t].isDepartmentApproval?e.data.data.records[t].isComplete?r.state="已转换":e.data.data.records[t].isCxyConfirm?e.data.data.records[t].isCxyApproval?null==e.data.data.records[t].contractInfoId?r.state="等待产学研创建合同":e.data.data.records[t].isPublicNotice?o.TimeDiffer(e.data.data.records[t].publicNoticeTime)?null==e.data.data.records[t].voucherId?r.state="等待上传到款凭证":null==e.data.data.records[t].checklistId?r.state="等待上传认定清单（备案）":null==e.data.data.records[t].accountingInfoId?r.state="等待生成入账通知单":null==e.data.data.records[t].invoiceId?r.state="等待财务处上传发票":e.data.data.records[t].isComplete||(r.state="等待流程结束"):r.state="正在公示中":r.state="等待公示":r.state="产学研未通过":r.state="等待产学研审批":r.state="归属单位未通过":r.state="等待上传所属部门意见":r.state="第一作者未通过":r.state="等待第一作者确认"),o.PatentstableData.push(r)}a.$message({message:"数据已更新！",type:"success"})}else a.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,a.$message({message:"出错了！",type:"error"})}));case 5:r.next=17;break;case 7:if("contract"!=t){r.next=13;break}return o.ContractstableData=[],r.next=11,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var r={};r.index=t+1,r.contractInfoId=e.data.data.records[t].contractInfoId,r.gmtUpdate=e.data.data.records[t].gmtUpdate,r.completeTime=e.data.data.records[t].completeTime,r.invoicingEnterprise=e.data.data.records[t].invoicingEnterprise,r.paName=e.data.data.records[t].paName,r.projectCode=e.data.data.records[t].projectCode,r.projectName=e.data.data.records[t].projectName,r.publicNoticeTime=e.data.data.records[t].isPublicNotice?r.publicNoticeTime=o.TimeDiffer(e.data.data.records[t].publicNoticeTime):null,e.data.data.records[t].isPublicNotice?null==e.data.data.records[t].contractFileId?r.state="等待上传合同":null==e.data.data.records[t].voucherId?r.state="等待上传到款凭证":null==e.data.data.records[t].checklistId?r.state="等待上传认定清单（备案）":null==e.data.data.records[t].accountingInfoId?r.state="等待生成入账通知单":null==e.data.data.records[t].invoiceId?r.state="等待财务处上传发票":e.data.data.records[t].isComplete?r.state="流程已结束":r.state="等待流程结束":r.state="等待公示",o.ContractstableData.push(r)}a.$message({message:"数据已更新！",type:"success"})}else a.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,a.$message({message:"出错了！",type:"error"})}));case 11:r.next=17;break;case 13:if("company"!=t){r.next=17;break}return o.CompanytableData=[],r.next=17,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var r={};r.index=t+1,r.companyAddress=e.data.data.records[t].companyAddress,r.companyContactEmail=e.data.data.records[t].companyContactEmail,r.companyContactPerson=e.data.data.records[t].companyContactPerson,r.companyContactPhone=e.data.data.records[t].companyContactPhone,r.companyId=e.data.data.records[t].companyId,r.companyMailingAddress=e.data.data.records[t].companyMailingAddress,r.companyName=e.data.data.records[t].companyName,r.companyPostalCode=e.data.data.records[t].companyPostalCode,r.companyRepresentative=e.data.data.records[t].companyRepresentative,r.taxpayerCode=e.data.data.records[t].taxpayerCode,o.CompanytableData.push(r)}a.$message({message:"数据已更新！",type:"success"})}else a.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,a.$message({message:"出错了！",type:"error"})}));case 17:case"end":return r.stop()}}),r)})))()},handleCurrentPage:function(e){var t=this;t.loading=!0,console.log(t.Page_url);var a=t.Page_url.split("currPage")[0]+"currPage="+e+"&size"+t.Page_url.split("size")[1];switch(console.log(a),t.PatentstableData=[],t.currentPage=e,this.table_type){case"专利列表":t.getData(a,"patent");break;case"合同列表":t.getData(a,"contract");break;default:break}},table_type_change:function(e){console.log(e);var t=this;t.loading=!0,t.SearchType_prepend="查询字段",t.SearchText="";var a="";switch(e){case"专利列表":t.patents_type="已授权",t.patents_status_type="全部专利",a="/export/getPatentByCondition?currPage=1&size=20&authorized=true&search=0&patentState=0",t.Page_url=a,t.getData(a,"patent");break;case"合同列表":t.contract_type="全部",t.contract_status_type="全部",a="/export/getContractByCondition?currPage=1&size=20&contractType=0&search=0&patentState=0",t.Page_url=a,t.getData(a,"contract");break;case"公司列表":a="/export/getCompanyByCondition?currPage=1&size=20&search=0",t.Page_url=a,t.getData(a,"company");break;default:break}},patents_type_change:function(e){console.log(e);var t=this;t.loading=!0,t.PatentstableData=[],t.SearchType_prepend="查询字段",t.SearchText="";var a="/export/getPatentByCondition?currPage=1&size=20&search=0";switch(t.patents_type){case"已授权":a+="&authorized=true";break;case"未授权":a+="&authorized=false";break;default:a+="&authorized=true";break}switch(t.patents_status_type){case"全部专利":a+="&patentState=0";break;case"未转换":a+="&patentState=1";break;case"正在转换":a+="&patentState=2";break;case"已完成转换":a+="&patentState=3";break;default:a+="&patentState=0";break}t.Page_url=a,t.getData(a,"patent")},contract_type_change:function(){var e=this;e.loading=!0,e.ContractstableData=[],e.SearchType_prepend="查询字段",e.SearchText="";var t="/export/getContractByCondition?currPage=1&size=20&search=0";switch(e.contract_type){case"全部":t+="&contractType=0";break;case"普通实施许可":t+="&contractType=1";break;case"拍他许可":t+="&contractType=2";break;case"独占许可":t+="&contractType=3";break;case"转让":t+="&contractType=4";break;default:t+="&contractType=0";break}switch(e.contract_status_type){case"全部":t+="&patentState=0";break;case"正在转换":t+="&patentState=1";break;case"已转换":t+="&patentState=2";break;default:t+="&patentState=0";break}console.log(t),e.Page_url=t,e.getData(t,"contract")},handleDropdown:function(e){console.log(e);var t=this;switch(t.SearchType_prepend=e,e){case"专利名称":t.SearchType=1;break;case"专利第一作者":t.SearchType=2;break;case"成员名单":t.SearchType=3;break;case"所属学院":t.SearchType=4;break;case"合同编号":t.SearchType=1;break;case"合同名称":t.SearchType=2;break;case"受让方单位":t.SearchType=3;break;case"公司名称":t.SearchType=1;break;case"注册地址":t.SearchType=2;break;case"法定代表人":t.SearchType=3;break;case"通讯地址":t.SearchType=4;break;case"联系人姓名":t.SearchType=5;break;case"纳税人识别号":t.SearchType=6;break;default:break}},search:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,o,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,console.log(a.SearchType_prepend,a.SearchText),"查询字段"==a.SearchType_prepend||""!=a.SearchText){t.next=6;break}e.$message({message:"请填写查询内容！",type:"warning"}),t.next=155;break;case 6:if("查询字段"!=a.SearchType_prepend||""==a.SearchText){t.next=10;break}e.$message({message:"请填写查询字段！",type:"warning"}),t.next=155;break;case 10:if(r="",o="",a.currentPage=1,a.loading=!0,null!=a.datevalue&&""!=a.datevalue&&(console.log(a.datevalue),o="&timeBegin="+a.datevalue[0]+"&timeEnd="+a.datevalue[1]),"查询字段"!=a.SearchType_prepend||""!=a.SearchText){t.next=86;break}if("专利列表"!=a.table_type){t.next=47;break}a.PatentstableData=[],r="/export/getPatentByCondition?currPage=1&size=20&search=0",t.t0=a.patents_type,t.next="已授权"===t.t0?22:"未授权"===t.t0?24:26;break;case 22:return r+="&authorized=true",t.abrupt("break",28);case 24:return r+="&authorized=false",t.abrupt("break",28);case 26:return r+="&authorized=true",t.abrupt("break",28);case 28:t.t1=a.patents_status_type,t.next="全部专利"===t.t1?31:"未转换"===t.t1?33:"正在转换"===t.t1?35:"已转换"===t.t1?37:39;break;case 31:return r+="&patentState=0",t.abrupt("break",41);case 33:return r+="&patentState=1",t.abrupt("break",41);case 35:return r+="&patentState=2",t.abrupt("break",41);case 37:return r+="&patentState=3",t.abrupt("break",41);case 39:return r+="&patentState=0",t.abrupt("break",41);case 41:r+=o,console.log(r),a.Page_url=r,a.getData(r,"patent"),t.next=84;break;case 47:if("合同列表"!=a.table_type){t.next=83;break}a.ContractstableData=[],r="/export/getContractByCondition?currPage=1&size=20&search=0",t.t2=a.contract_type,t.next="全部"===t.t2?53:"普通实施许可"===t.t2?55:"拍他许可"===t.t2?57:"独占许可"===t.t2?59:"转让"===t.t2?61:63;break;case 53:return r+="&contractType=0",t.abrupt("break",65);case 55:return r+="&contractType=1",t.abrupt("break",65);case 57:return r+="&contractType=2",t.abrupt("break",65);case 59:return r+="&contractType=3",t.abrupt("break",65);case 61:return r+="&contractType=4",t.abrupt("break",65);case 63:return r+="&contractType=0",t.abrupt("break",65);case 65:t.t3=a.contract_status_type,t.next="全部"===t.t3?68:"正在转换"===t.t3?70:"已转换"===t.t3?72:74;break;case 68:return r+="&patentState=0",t.abrupt("break",76);case 70:return r+="&patentState=1",t.abrupt("break",76);case 72:return r+="&patentState=2",t.abrupt("break",76);case 74:return r+="&patentState=0",t.abrupt("break",76);case 76:""!=a.codeBegin&&""!=a.codeEnd&&(n="&codeBegin="+a.codeBegin+"&codeEnd="+a.codeEnd,r+=n),r+=o,console.log(r),a.Page_url=r,a.getData(r,"contract"),t.next=84;break;case 83:"公司列表"==a.table_type&&(a.CompanytableData=[],r="/export/getCompanyByCondition?currPage=1&size=20&search=0",r+=o,console.log(r),a.Page_url=r,a.getData(r,"company"));case 84:t.next=155;break;case 86:if("查询字段"==a.SearchType_prepend||""==a.SearchText){t.next=155;break}if("专利列表"!=a.table_type){t.next=118;break}a.PatentstableData=[],r="/export/getPatentByCondition?currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.t4=a.patents_type,t.next="已授权"===t.t4?93:"未授权"===t.t4?95:97;break;case 93:return r+="&authorized=true",t.abrupt("break",99);case 95:return r+="&authorized=false",t.abrupt("break",99);case 97:return r+="&authorized=true",t.abrupt("break",99);case 99:t.t5=a.patents_status_type,t.next="全部专利"===t.t5?102:"未转换"===t.t5?104:"正在转换"===t.t5?106:"已转换"===t.t5?108:110;break;case 102:return r+="&patentState=0",t.abrupt("break",112);case 104:return r+="&patentState=1",t.abrupt("break",112);case 106:return r+="&patentState=2",t.abrupt("break",112);case 108:return r+="&patentState=3",t.abrupt("break",112);case 110:return r+="&patentState=0",t.abrupt("break",112);case 112:r+=o,console.log(r),a.Page_url=r,a.getData(r,"patent"),t.next=155;break;case 118:if("合同列表"!=a.table_type){t.next=154;break}a.ContractstableData=[],r="/export/getContractByCondition?currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.t6=a.contract_type,t.next="全部"===t.t6?124:"普通实施许可"===t.t6?126:"拍他许可"===t.t6?128:"独占许可"===t.t6?130:"转让"===t.t6?132:134;break;case 124:return r+="&contractType=0",t.abrupt("break",136);case 126:return r+="&contractType=1",t.abrupt("break",136);case 128:return r+="&contractType=2",t.abrupt("break",136);case 130:return r+="&contractType=3",t.abrupt("break",136);case 132:return r+="&contractType=4",t.abrupt("break",136);case 134:return r+="&contractType=0",t.abrupt("break",136);case 136:t.t7=a.contract_status_type,t.next="全部"===t.t7?139:"正在转换"===t.t7?141:"已转换"===t.t7?143:145;break;case 139:return r+="&patentState=0",t.abrupt("break",147);case 141:return r+="&patentState=1",t.abrupt("break",147);case 143:return r+="&patentState=2",t.abrupt("break",147);case 145:return r+="&patentState=0",t.abrupt("break",147);case 147:""!=a.codeBegin&&""!=a.codeEnd&&(s="&codeBegin="+a.codeBegin+"&codeEnd="+a.codeEnd,r+=s),r+=o,console.log(r),a.Page_url=r,a.getData(r,"contract"),t.next=155;break;case 154:"公司列表"==a.table_type&&(a.CompanytableData=[],r="/export/getCompanyByCondition?currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,r+=o,console.log(r),a.Page_url=r,a.getData(r,"company"));case 155:case"end":return t.stop()}}),t)})))()},download_excel_Dialog_open:function(){var e=this,t=this,a="";switch(t.columnList=[],t.table_type){case"专利列表":a="/export/getPatentColumnMap";break;case"合同列表":a="/export/getContractColumnMap";break;case"公司列表":a="/export/getCompanyColumnMap";break}t.request(a,{},"GET",{}).then((function(a){if(console.log(a),"success"==a.data.status){console.log(a.data);for(var r=0;r<a.data.data.length;r++){var o={};o.index=a.data.data[r].index,o.columnName=a.data.data[r].columnName,o.columnNameCN=a.data.data[r].columnNameCN,t.columnList.push(o)}t.download_excel_Dialog=!0}else e.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))},download_excel:function(){var e=this,t=this;console.log(t.datevalue[0]);var a={};switch(t.table_type){case"专利列表":if(0==t.download_patentList.length)t.$message.warning("请选择需要导出的列！");else{a={authorized:"已授权"==t.patents_type,column:[],condition:t.SearchText,patentState:0,search:t.SearchType};for(var r=0;r<t.download_patentList.length;r++)a.column.push(t.download_patentList[r]);switch(t.patents_status_type){case"全部专利":a.patentState=0;break;case"未转换":a.patentState=1;break;case"正在转换":a.patentState=2;break;case"已转换":a.patentState=3;break}null!=t.datevalue&&""!=t.datevalue&&(a.timeBegin=t.datevalue[0],a.timeEnd=t.datevalue[1]),t.request("/export/exportPatentByCondition",a,"POST",{},"blob").then((function(a){if(console.log(a),void 0!=a.headers["content-disposition"]){e.$notify({title:"成功",message:"准备开始导出！",type:"success"}),t.download_excel_Dialog=!1;var r=decodeURI(a.headers["content-disposition"].split("fileName=")[1])+".xls";try{var o=new Blob([a.data],{type:"application/force-download"}),n=URL.createObjectURL(o),s=document.createElement("a");s.href=n,s.setAttribute("download",r),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(c){console.log(c),e.$message({message:"数据请求失败！",type:"error"})}}else e.$message({message:"文件可能丢失了！",type:"error"})})).catch((function(a){console.log(a),t.loading=!1,e.$message({message:"出错了！",type:"error"})}))}break;case"合同列表":if(0==t.download_contractList.length)t.$message.warning("请选择需要导出的列！");else{a={column:[],condition:t.SearchText,search:t.SearchType,contractState:0,contractType:0};for(var o=0;o<t.download_contractList.length;o++)a.column.push(t.download_contractList[o]);switch(t.contract_type){case"全部":a.contractType=0;break;case"普通实施许可":a.contractType=1;break;case"拍他许可":a.contractType=2;break;case"独占许可":a.contractType=3;break;case"转让":a.contractType=4;break}switch(t.contract_status_type){case"全部":a.contractState=0;break;case"正在转换":a.contractState=1;break;case"已转换":a.contractState=2;break}null!=t.datevalue&&""!=t.datevalue&&(a.timeBegin=t.datevalue[0],a.timeEnd=t.datevalue[1]),""!=t.codeBegin&&""!=t.codeEnd&&(a.codeBegin=t.codeBegin,a.codeEnd=t.codeEnd),console.log(a),t.request("/export/exportContractByCondition",a,"POST",{},"blob").then((function(a){if(console.log(a),void 0!=a.headers["content-disposition"]){e.$notify({title:"成功",message:"准备开始导出！",type:"success"}),t.download_excel_Dialog=!1;var r=decodeURI(a.headers["content-disposition"].split("fileName=")[1])+".xls";try{var o=new Blob([a.data],{type:"application/force-download"}),n=URL.createObjectURL(o),s=document.createElement("a");s.href=n,s.setAttribute("download",r),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(c){console.log(c),e.$message({message:"数据请求失败！",type:"error"})}}else e.$message({message:"文件可能丢失了！",type:"error"})})).catch((function(a){console.log(a),t.loading=!1,e.$message({message:"出错了！",type:"error"})}))}break;case"公司列表":if(0==t.download_companyList.length)t.$message.warning("请选择需要导出的列！");else{a={column:[],condition:t.SearchText,search:t.SearchType};for(var n=0;n<t.download_companyList.length;n++)a.column.push(t.download_companyList[n]);console.log(a),t.request("/export/exportCompanyByCondition",a,"POST",{},"blob").then((function(a){if(console.log(a),void 0!=a.headers["content-disposition"]){e.$notify({title:"成功",message:"准备开始导出！",type:"success"}),t.download_excel_Dialog=!1;var r=decodeURI(a.headers["content-disposition"].split("fileName=")[1])+".xls";try{var o=new Blob([a.data],{type:"application/force-download"}),n=URL.createObjectURL(o),s=document.createElement("a");s.href=n,s.setAttribute("download",r),document.body.appendChild(s),s.click(),document.body.removeChild(s)}catch(c){console.log(c),e.$message({message:"数据请求失败！",type:"error"})}}else e.$message({message:"文件可能丢失了！",type:"error"})})).catch((function(a){console.log(a),t.loading=!1,e.$message({message:"出错了！",type:"error"})}))}break;default:break}console.log(a)},TimeDiffer:function(e){var t=new Date,a=new Date(e),r=(t-a)/1e3,o=parseInt(r/86400);parseInt(r/3600),parseInt(r%3600/60),parseInt(r%60);return o}}}),c=s,l=(a("3090"),a("2877")),d=Object(l["a"])(c,r,o,!1,null,null,null);t["default"]=d.exports}}]);