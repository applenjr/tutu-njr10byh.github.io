(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69ed4dcd"],{2136:function(t,e,a){},3090:function(t,e,a){"use strict";a("2136")},"414a":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[["root","superadmin","admin"].includes(this.$store.state.signed_authorize)?a("div",{staticClass:"Data_Center_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("div",[a("el-radio-group",{on:{change:t.table_type_change},model:{value:t.table_type,callback:function(e){t.table_type=e},expression:"table_type"}},[a("el-radio-button",{attrs:{label:"专利列表"}}),a("el-radio-button",{attrs:{label:"合同列表"}})],1),"专利列表"==t.table_type?a("el-radio-group",{staticStyle:{"margin-left":"27px"},on:{change:t.patents_type_change},model:{value:t.patents_type,callback:function(e){t.patents_type=e},expression:"patents_type"}},[a("el-radio-button",{attrs:{label:"已授权"}}),a("el-radio-button",{attrs:{label:"未授权"}})],1):t._e(),"合同列表"==t.table_type?a("el-radio-group",{staticStyle:{"margin-left":"13px"},on:{change:t.contract_type_change},model:{value:t.contract_status_type,callback:function(e){t.contract_status_type=e},expression:"contract_status_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1):t._e()],1),"专利列表"==t.table_type?a("el-radio-group",{staticStyle:{"margin-top":"10px"},on:{change:t.patents_type_change},model:{value:t.patents_status_type,callback:function(e){t.patents_status_type=e},expression:"patents_status_type"}},[a("el-radio-button",{attrs:{label:"全部专利"}}),a("el-radio-button",{attrs:{label:"未转换"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已完成转换"}})],1):t._e(),"合同列表"==t.table_type?a("el-radio-group",{staticStyle:{"margin-top":"10px"},on:{change:t.contract_type_change},model:{value:t.contract_type,callback:function(e){t.contract_type=e},expression:"contract_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"普通实施许可"}}),a("el-radio-button",{attrs:{label:"排他许可"}}),a("el-radio-button",{attrs:{label:"独占许可"}}),a("el-radio-button",{attrs:{label:"转让"}})],1):t._e()],1),a("div",{staticClass:"Search"},[a("el-button",{attrs:{icon:"el-icon-download"},on:{click:t.download_excel_Dialog_open}},[t._v(" 导出Excel ")]),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:t.search}},[t._v("搜索")])],1)]),a("div",{staticClass:"head-input"},["专利列表"==t.table_type?a("div",{staticClass:"patent_part"},[a("el-input",{attrs:{placeholder:"专利名称"},model:{value:t.patent_search.searchCondition.zlmc,callback:function(e){t.$set(t.patent_search.searchCondition,"zlmc",e)},expression:"patent_search.searchCondition.zlmc"}}),a("el-input",{attrs:{placeholder:"专利发明人"},model:{value:t.patent_search.searchCondition.cymd,callback:function(e){t.$set(t.patent_search.searchCondition,"cymd",e)},expression:"patent_search.searchCondition.cymd"}}),a("el-input",{attrs:{placeholder:"专利发明人工号"},model:{value:t.patent_search.searchCondition.cygh,callback:function(e){t.$set(t.patent_search.searchCondition,"cygh",e)},expression:"patent_search.searchCondition.cygh"}}),a("el-input",{attrs:{placeholder:"专利第一作者"},model:{value:t.patent_search.searchCondition.zldyzzxm,callback:function(e){t.$set(t.patent_search.searchCondition,"zldyzzxm",e)},expression:"patent_search.searchCondition.zldyzzxm"}}),a("el-input",{attrs:{placeholder:"专利第一作者工号"},model:{value:t.patent_search.searchCondition.zldyzzgh,callback:function(e){t.$set(t.patent_search.searchCondition,"zldyzzgh",e)},expression:"patent_search.searchCondition.zldyzzgh"}}),a("el-input",{attrs:{placeholder:"归属单位"},model:{value:t.patent_search.searchCondition.gsdw,callback:function(e){t.$set(t.patent_search.searchCondition,"gsdw",e)},expression:"patent_search.searchCondition.gsdw"}}),a("el-input",{attrs:{placeholder:"负责人姓名"},model:{value:t.patent_search.searchCondition.fzyName,callback:function(e){t.$set(t.patent_search.searchCondition,"fzyName",e)},expression:"patent_search.searchCondition.fzyName"}}),a("el-input",{attrs:{placeholder:"负责人工号"},model:{value:t.patent_search.searchCondition.fzyGh,callback:function(e){t.$set(t.patent_search.searchCondition,"fzyGh",e)},expression:"patent_search.searchCondition.fzyGh"}}),a("el-input",{attrs:{placeholder:"负责人电话"},model:{value:t.patent_search.searchCondition.fzyPhone,callback:function(e){t.$set(t.patent_search.searchCondition,"fzyPhone",e)},expression:"patent_search.searchCondition.fzyPhone"}}),a("el-input",{attrs:{placeholder:"负责人单位"},model:{value:t.patent_search.searchCondition.fzyDepartment,callback:function(e){t.$set(t.patent_search.searchCondition,"fzyDepartment",e)},expression:"patent_search.searchCondition.fzyDepartment"}}),a("el-input",{attrs:{placeholder:"价格区间 起"},model:{value:t.patent_search.searchCondition.patentPriceBegin,callback:function(e){t.$set(t.patent_search.searchCondition,"patentPriceBegin",e)},expression:"patent_search.searchCondition.patentPriceBegin"}}),a("el-input",{attrs:{placeholder:"价格区间 止"},model:{value:t.patent_search.searchCondition.patentPriceEnd,callback:function(e){t.$set(t.patent_search.searchCondition,"patentPriceEnd",e)},expression:"patent_search.searchCondition.patentPriceEnd"}}),a("div",{staticStyle:{width:"24.2%",margin:"5px"}},[["专利列表"].includes(t.table_type)?a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"专利申请时间 起","end-placeholder":"专利申请时间 止","picker-options":t.pickerOptions,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.datevalue,callback:function(e){t.datevalue=e},expression:"datevalue"}}):t._e()],1),a("div",{staticStyle:{width:"24.2%",margin:"5px"}},[["专利列表"].includes(t.table_type)?a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"专利授权时间 起","end-placeholder":"专利授权时间 止","picker-options":t.pickerOptions,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.datevalue,callback:function(e){t.datevalue=e},expression:"datevalue"}}):t._e()],1),a("div",{staticStyle:{width:"24.2%",margin:"5px"}},[["专利列表"].includes(t.table_type)?a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"转换完成时间 起","end-placeholder":"转换完成时间 止","picker-options":t.pickerOptions,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:t.datevalue,callback:function(e){t.datevalue=e},expression:"datevalue"}}):t._e()],1),a("div",{staticStyle:{width:"24.2%"}},[a("el-cascader",{staticClass:"cascader",attrs:{options:t.options,placeholder:"请选择行政区划"},on:{change:t.regionChange},model:{value:t.selectedregion,callback:function(e){t.selectedregion=e},expression:"selectedregion"}})],1)],1):"合同列表"==t.table_type?a("div",{staticClass:"contract_part"},[a("el-input",{attrs:{placeholder:"合同名称"},model:{value:t.contract_search.searchCondition.projectName,callback:function(e){t.$set(t.contract_search.searchCondition,"projectName",e)},expression:"contract_search.searchCondition.projectName"}}),a("el-input",{attrs:{placeholder:"受让方名称"},model:{value:t.contract_search.searchCondition.paName,callback:function(e){t.$set(t.contract_search.searchCondition,"paName",e)},expression:"contract_search.searchCondition.paName"}}),a("el-input",{attrs:{placeholder:"合同编号-起"},model:{value:t.contract_search.searchCondition.codeBegin,callback:function(e){t.$set(t.contract_search.searchCondition,"codeBegin",e)},expression:"contract_search.searchCondition.codeBegin"}}),a("el-input",{attrs:{placeholder:"合同编号-止"},model:{value:t.contract_search.searchCondition.codeEnd,callback:function(e){t.$set(t.contract_search.searchCondition,"codeEnd",e)},expression:"contract_search.searchCondition.codeEnd"}}),a("el-input",{attrs:{placeholder:"价格区间-起"},model:{value:t.contract_search.searchCondition.amountBegin,callback:function(e){t.$set(t.contract_search.searchCondition,"amountBegin",e)},expression:"contract_search.searchCondition.amountBegin"}}),a("el-input",{attrs:{placeholder:"价格区间-止"},model:{value:t.contract_search.searchCondition.amountEnd,callback:function(e){t.$set(t.contract_search.searchCondition,"amountEnd",e)},expression:"contract_search.searchCondition.amountEnd"}})],1):t._e()]),"专利列表"==t.table_type?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:t.PatentstableData,"tooltip-effect":"dark",border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[t._v(t._s(e.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[t._v(t._s(e.row.zlmc))])]),a("el-form-item",{attrs:{label:"成员名单"}},[a("span",[t._v(t._s(e.row.cymd))])]),a("el-form-item",{attrs:{label:"成员工号"}},[a("span",[t._v(t._s(e.row.cygh))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[t._v(t._s(e.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[t._v(t._s(e.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"申请日期"}},[a("span",[t._v(t._s(e.row.zlapplyrq))])]),a("el-form-item",{attrs:{label:"授权日期"}},[a("span",[t._v(t._s(e.row.zlsqrq))])]),a("el-form-item",{attrs:{label:"转让价格意向（万元）"}},[a("span",[t._v(t._s(e.row.priceIntention))])]),a("el-form-item",{attrs:{label:"许可价格意向（万元）"}},[a("span",[t._v(t._s(e.row.licencePriceIntention))])]),a("el-form-item",{attrs:{label:"开放许可价格意向（万元）"}},[a("span",[t._v(t._s(e.row.openLicencePriceIntention))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[t._v(t._s(e.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[t._v(t._s(e.row.zlqr))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[t._v(t._s(e.row.zldlr))])]),a("el-form-item",{attrs:{label:"最后更新日期"}},[a("span",[t._v(t._s(e.row.gmtUpdate))])])],1)]}}],null,!1,4157072081)}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"zldyzzxm",label:"第一作者",width:"120"}}),a("el-table-column",{attrs:{prop:"cymd",label:"成员名单"}}),a("el-table-column",{attrs:{prop:"gsdw",label:"所属学院"}}),"已完成转换"==t.patents_status_type?a("el-table-column",{attrs:{prop:"completeTime",label:"完成时间",width:"180"}}):t._e()],1):t._e(),"合同列表"==t.table_type?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:t.ContractstableData,"tooltip-effect":"dark",border:"",stripe:""}},[a("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:t._u([{key:"default",fn:function(e){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"合同名称"}},[a("span",[t._v(t._s(e.row.projectName))])]),a("el-form-item",{attrs:{label:"合同编号"}},[a("span",[t._v(t._s(e.row.projectCode))])]),a("el-form-item",{attrs:{label:"受让方"}},[a("span",[t._v(t._s(e.row.paName))])]),a("el-form-item",{attrs:{label:"转让总金额"}},[a("span",[t._v(t._s(e.row.totalTransferAmount)+" 万元")])]),null!=e.row.publicNoticeTime?a("el-form-item",{attrs:{label:"公示信息"}},[a("span",[t._v("已经公示 "+t._s(e.row.publicNoticeTime)+" 天")])]):t._e(),a("el-form-item",{attrs:{label:"更新时间"}},[a("span",[t._v(t._s(e.row.gmtUpdate))])])],1)]}}],null,!1,303815577)}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"projectName",label:"合同名称"}}),a("el-table-column",{attrs:{prop:"projectCode",label:"合同编号",width:"120"}}),a("el-table-column",{attrs:{prop:"paName",label:"受让方单位"}}),"已转换"==t.contract_status_type?a("el-table-column",{attrs:{prop:"completeTime",label:"完成时间",width:"180"}}):t._e()],1):t._e(),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:t.currentPage,"page-size":20,layout:"total, prev, pager, next",total:t.total},on:{"current-change":t.handleCurrentPage}})],1),a("el-dialog",{staticClass:"dialogStyle",attrs:{title:"导出Excel",visible:t.download_excel_Dialog,width:"55%"},on:{"update:visible":function(e){t.download_excel_Dialog=e}}},[a("h2",[t._v("选择需要导出的字段")]),"专利列表"==t.table_type?a("div",{staticClass:"column_checkbox"},t._l(t.columnList,(function(e){return a("el-checkbox-group",{key:e.index,model:{value:t.download_patentList,callback:function(e){t.download_patentList=e},expression:"download_patentList"}},[a("el-checkbox",{attrs:{label:e.columnName,border:"",size:"small"}},[t._v(" "+t._s(e.columnNameCN)+" ")])],1)})),1):t._e(),"合同列表"==t.table_type?a("div",{staticClass:"column_checkbox"},t._l(t.columnList,(function(e){return a("el-checkbox-group",{key:e.index,model:{value:t.download_contractList,callback:function(e){t.download_contractList=e},expression:"download_contractList"}},[a("el-checkbox",{attrs:{label:e.columnName,border:"",size:"small"}},[t._v(" "+t._s(e.columnNameCN)+" ")])],1)})),1):t._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(e){t.download_excel_Dialog=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:t.download_excel}},[t._v("确 定")])],1)])],1):a("div",[a("el-empty",{attrs:{description:"无权限"}},[a("t-button",{attrs:{theme:"primary",size:"large"},on:{click:t.RoleLow_back}},[t._v(" 返回 ")])],1)],1)])},c=[],r=a("1da1"),o=(a("96cf"),a("caad"),a("ac1f"),a("1276"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("ef6c")),s=a("5f87"),i={data:function(){return{table_type:"专利列表",patents_type:"已授权",patents_status_type:"全部专利",contract_type:"全部",contract_status_type:"全部",PatentstableData:[],ContractstableData:[],loading:!0,total:0,currentPage:1,Page_url:"",patent_search:{currPage:1,size:20,searchCondition:{authorized:!0,patentState:0,zlmc:"",cymd:"",cygh:"",zldyzzxm:"",zldyzzgh:"",gsdw:"",fzyName:"",fzyGh:"",fzyPhone:"",fzyDepartment:"",paProvince:"",paCity:"",paDistrict:"",patentPriceBegin:"",patentPriceEnd:"",completeTimeBegin:"",completeTimeEnd:"",timeBegin:"",timeEnd:"",zlsqrqBegin:"",zlsqrqEnd:""}},contract_search:{currPage:1,size:20,searchCondition:{contractState:0,contractType:0,hasAgency:null,hasAssociation:null,paName:"",pbContactPerson:"",pcName:"",projectName:"",paProvince:"",paCity:"",paDistrict:"",codeBegin:"",codeEnd:"",amountBegin:"",amountEnd:"",completeTimeBegin:"",completeTimeEnd:"",timeBegin:"",timeEnd:""}},pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-6048e5),t.$emit("pick",[a,e])}},{text:"最近一个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-2592e6),t.$emit("pick",[a,e])}},{text:"最近三个月",onClick:function(t){var e=new Date,a=new Date;a.setTime(a.getTime()-7776e6),t.$emit("pick",[a,e])}}]},datevalue:[],options:o["regionData"],selectedregion:[],columnList:[],download_excel_Dialog:!1,download_patentList:[],download_contractList:[],codeBegin:"",codeEnd:""}},mounted:function(){Object(s["a"])()},created:function(){var t=this;setTimeout((function(){console.log(t.$store.state.signed_authorize),["root","superadmin","admin"].includes(t.$store.state.signed_authorize)?t.refresh():t.$message.warning("权限不足！")}),300)},methods:{RoleLow_back:function(){window.history.back()},refresh:function(){var t=this;switch(t.PatentstableData=[],t.currentPage=1,t.table_type="专利列表",t.patents_type="已授权",t.patents_status_type="全部专利",console.log(this.$store.state),t.patents_type){case"已授权":t.patent_search.searchCondition.authorized=!0;break;case"未授权":t.patent_search.searchCondition.authorized=!1;break}switch(t.patents_status_type){case"全部专利":t.patent_search.searchCondition.patentState=0;break;case"未转换":t.patent_search.searchCondition.patentState=1;break;case"正在转换":t.patent_search.searchCondition.patentState=2;break;case"已完成转换":t.patent_search.searchCondition.patentState=3;break}t.getData("patent")},getData:function(t){var e=this;return Object(r["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(n=e,"patent"!=t){a.next=7;break}return n.PatentstableData=[],a.next=5,n.request("/export/getPatentByCondition",n.patent_search,"POST",{}).then((function(t){if(console.log(t.data),n.loading=!1,"success"==t.data.status){n.total=t.data.data.total;for(var a=0;a<t.data.data.records.length;a++){var c={};c.index=a+1,c.wid=t.data.data.records[a].wid,c.zlapplyrq=t.data.data.records[a].zlapplyrq,c.zlsqrq=t.data.data.records[a].zlsqrq,c.sqbh=t.data.data.records[a].sqbh,c.sqggh=t.data.data.records[a].sqggh,c.zlmc=t.data.data.records[a].zlmc,c.zlh=t.data.data.records[a].zlh,c.zlqr=t.data.data.records[a].zlqr,c.gsdw=t.data.data.records[a].gsdw,c.priceIntention=null==t.data.data.records[a].priceIntention?"暂无":t.data.data.records[a].priceIntention,c.licencePriceIntention=null==t.data.data.records[a].licencePriceIntention?"暂无":t.data.data.records[a].licencePriceIntention,c.openLicencePriceIntention=null==t.data.data.records[a].openLicencePriceIntention?"不同意开放许可":t.data.data.records[a].openLicencePriceIntention,c.pzrq=t.data.data.records[a].pzrq,c.zldlr=t.data.data.records[a].zldlr,c.zldyzzgh=t.data.data.records[a].zldyzzgh,c.zldyzzxm=t.data.data.records[a].zldyzzxm,c.zlh=t.data.data.records[a].zlh,c.zlmc=t.data.data.records[a].zlmc,c.cymd=t.data.data.records[a].cymd,c.cygh=t.data.data.records[a].cygh,c.transferApplicationFormId=t.data.data.records[a].transferApplicationFormId,c.gmtUpdate=t.data.data.records[a].gmtUpdate,c.completeTime=t.data.data.records[a].completeTime,null==t.data.data.records[a].transferProcessId?c.state="未转换":(c.transferProcessId=t.data.data.records[a].transferProcessId,t.data.data.records[a].isWithdraw?c.state="审批表已撤回":t.data.data.records[a].isZldyzzConfirm?t.data.data.records[a].isZldyzzApproval?t.data.data.records[a].isDepartmentConfirm?t.data.data.records[a].isDepartmentApproval?t.data.data.records[a].isComplete?c.state="已转换":t.data.data.records[a].isCxyConfirm?t.data.data.records[a].isCxyApproval?null==t.data.data.records[a].contractInfoId?c.state="等待产学研创建合同":t.data.data.records[a].isPublicNotice?n.TimeDiffer(t.data.data.records[a].publicNoticeTime)?null==t.data.data.records[a].voucherId?c.state="等待上传到款凭证":null==t.data.data.records[a].checklistId?c.state="等待上传认定清单（备案）":null==t.data.data.records[a].accountingInfoId?c.state="等待生成入账通知单":null==t.data.data.records[a].invoiceId?c.state="等待上传发票":t.data.data.records[a].isComplete||(c.state="等待流程结束"):c.state="正在公示中":c.state="等待公示":c.state="产学研未通过":c.state="等待产学研审批":c.state="归属单位未通过":c.state="等待上传学院意见":c.state="第一作者未通过":c.state="等待第一作者确认"),n.PatentstableData.push(c)}e.$message.success("数据已更新！")}else e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),n.loading=!1,e.$message.error("出错了！")}));case 5:a.next=11;break;case 7:if("contract"!=t){a.next=11;break}return n.ContractstableData=[],a.next=11,n.request("/export/getContractByCondition",n.contract_search,"POST",{}).then((function(t){if(console.log(t.data),n.loading=!1,"success"==t.data.status){n.total=t.data.data.total;for(var a=0;a<t.data.data.records.length;a++){var c={};c.index=a+1,c.contractInfoId=t.data.data.records[a].contractInfoId,c.gmtUpdate=t.data.data.records[a].gmtUpdate,c.completeTime=t.data.data.records[a].completeTime,c.invoicingEnterprise=t.data.data.records[a].invoicingEnterprise,c.paName=t.data.data.records[a].paName,c.projectCode=t.data.data.records[a].projectCode,c.projectName=t.data.data.records[a].projectName,c.publicNoticeTime=t.data.data.records[a].isPublicNotice?c.publicNoticeTime=n.TimeDiffer(t.data.data.records[a].publicNoticeTime):null,t.data.data.records[a].isPublicNotice?null==t.data.data.records[a].contractFileId?c.state="等待上传合同":null==t.data.data.records[a].voucherId?c.state="等待上传到款凭证":null==t.data.data.records[a].checklistId?c.state="等待上传认定清单（备案）":null==t.data.data.records[a].accountingInfoId?c.state="等待生成入账通知单":null==t.data.data.records[a].invoiceId?c.state="等待上传发票":t.data.data.records[a].isComplete?c.state="流程已结束":c.state="等待流程结束":c.state="等待公示",n.ContractstableData.push(c)}e.$message.success("数据已更新！")}else e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),n.loading=!1,e.$message.error("出错了！")}));case 11:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(t){var e=this;switch(this.loading=!0,this.PatentstableData=[],this.ContractstableData=[],this.currentPage=t,this.table_type){case"专利列表":e.patent_search.currPage=t,e.getData("patent");break;case"合同列表":e.contract_search.currPage=t,e.getData("contract");break;default:break}},searchCondition_init:function(t){var e=this;switch(t){case"专利列表":e.patent_search.searchCondition.zlmc="",e.patent_search.searchCondition.cymd="",e.patent_search.searchCondition.cygh="",e.patent_search.searchCondition.zldyzzxm="",e.patent_search.searchCondition.zldyzzgh="",e.patent_search.searchCondition.gsdw="",e.patent_search.searchCondition.fzyName="",e.patent_search.searchCondition.fzyGh="",e.patent_search.searchCondition.fzyPhone="",e.patent_search.searchCondition.fzyDepartment="",e.patent_search.searchCondition.paProvince="",e.patent_search.searchCondition.paCity="",e.patent_search.searchCondition.paDistrict="",e.patent_search.searchCondition.patentPriceBegin="",e.patent_search.searchCondition.patentPriceEnd="",e.patent_search.searchCondition.completeTimeBegin="",e.patent_search.searchCondition.completeTimeEnd="",e.patent_search.searchCondition.timeBegin="",e.patent_search.searchCondition.timeEnd="",e.patent_search.searchCondition.zlsqrqBegin="",e.patent_search.searchCondition.zlsqrqEnd="";break;case"合同列表":e.contract_search.searchCondition.hasAgency=null,e.contract_search.searchCondition.hasAssociation=null,e.contract_search.searchCondition.paName="",e.contract_search.searchCondition.pbContactPerson="",e.contract_search.searchCondition.pcName="",e.contract_search.searchCondition.projectName="",e.contract_search.searchCondition.paProvince="",e.contract_search.searchCondition.paCity="",e.contract_search.searchCondition.paDistrict="",e.contract_search.searchCondition.codeBegin="",e.contract_search.searchCondition.codeEnd="",e.contract_search.searchCondition.amountBegin="",e.contract_search.searchCondition.amountEnd="",e.contract_search.searchCondition.completeTimeBegin="",e.contract_search.searchCondition.completeTimeEnd="",e.contract_search.searchCondition.timeBegin="",e.contract_search.searchCondition.timeEnd="";break;default:break}},table_type_change:function(t){console.log(t);var e=this;e.loading=!0;switch(t){case"专利列表":switch(e.patents_type="已授权",e.patents_status_type="全部专利",e.patents_type){case"已授权":e.patent_search.searchCondition.authorized=!0;break;case"未授权":e.patent_search.searchCondition.authorized=!1;break}switch(e.patents_status_type){case"全部专利":e.patent_search.searchCondition.patentState=0;break;case"未转换":e.patent_search.searchCondition.patentState=1;break;case"正在转换":e.patent_search.searchCondition.patentState=2;break;case"已完成转换":e.patent_search.searchCondition.patentState=3;break}this.searchCondition_init("专利列表"),e.getData("patent");break;case"合同列表":switch(e.contract_type="全部",e.contract_status_type="全部",e.contract_type){case"全部":e.contract_search.searchCondition.contractType=0;break;case"普通实施许可":e.contract_search.searchCondition.contractType=1;break;case"排他许可":e.contract_search.searchCondition.contractType=2;break;case"独占许可":e.contract_search.searchCondition.contractType=3;break;case"转让":e.contract_search.searchCondition.contractType=4;break;default:e.contract_search.searchCondition.contractType=0;break}switch(e.contract_status_type){case"全部":e.contract_search.searchCondition.contractState=0;break;case"正在转换":e.contract_search.searchCondition.contractState=1;break;case"已转换":e.contract_search.searchCondition.contractState=2;break;default:e.contract_search.searchCondition.contractState=0;break}this.searchCondition_init("合同列表"),e.getData("contract");break}},patents_type_change:function(t){console.log(t);var e=this;switch(e.loading=!0,e.PatentstableData=[],e.patents_type){case"已授权":e.patent_search.searchCondition.authorized=!0;break;case"未授权":e.patent_search.searchCondition.authorized=!1;break}switch(e.patents_status_type){case"全部专利":e.patent_search.searchCondition.patentState=0;break;case"未转换":e.patent_search.searchCondition.patentState=1;break;case"正在转换":e.patent_search.searchCondition.patentState=2;break;case"已完成转换":e.patent_search.searchCondition.patentState=3;break}e.getData("patent")},contract_type_change:function(){var t=this;switch(t.loading=!0,t.ContractstableData=[],t.contract_type){case"全部":t.contract_search.searchCondition.contractType=0;break;case"普通实施许可":t.contract_search.searchCondition.contractType=1;break;case"排他许可":t.contract_search.searchCondition.contractType=2;break;case"独占许可":t.contract_search.searchCondition.contractType=3;break;case"转让":t.contract_search.searchCondition.contractType=4;break;default:t.contract_search.searchCondition.contractType=0;break}switch(t.contract_status_type){case"全部":t.contract_search.searchCondition.contractState=0;break;case"正在转换":t.contract_search.searchCondition.contractState=1;break;case"已转换":t.contract_search.searchCondition.contractState=2;break;default:t.contract_search.searchCondition.contractState=0;break}t.getData("contract")},regionChange:function(t){this.company_search.province=o["CodeToText"][t[0]],this.company_search.city=o["CodeToText"][t[1]],this.company_search.district=o["CodeToText"][t[2]]},search:function(){var t=this;return Object(r["a"])(regeneratorRuntime.mark((function e(){var a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:a=t,"","",e.t0=t.table_type,e.next="专利列表"===e.t0?6:"合同列表"===e.t0?28:57;break;case 6:"/export/getPatentByCondition?currPage=1&size=20",e.t1=a.patents_type,e.next="已授权"===e.t1?10:"未授权"===e.t1?12:14;break;case 10:return a.patent_search.searchCondition.authorized=!0,e.abrupt("break",14);case 12:return a.patent_search.searchCondition.authorized=!1,e.abrupt("break",14);case 14:e.t2=a.patents_status_type,e.next="全部专利"===e.t2?17:"未转换"===e.t2?19:"正在转换"===e.t2?21:"已完成转换"===e.t2?23:25;break;case 17:return a.patent_search.searchCondition.patentState=0,e.abrupt("break",25);case 19:return a.patent_search.searchCondition.patentState=1,e.abrupt("break",25);case 21:return a.patent_search.searchCondition.patentState=2,e.abrupt("break",25);case 23:return a.patent_search.searchCondition.patentState=3,e.abrupt("break",25);case 25:return null!=a.datevalue&&""!=a.datevalue&&(console.log(a.datevalue),a.patent_search.searchCondition.timeBegin=a.datevalue[0],a.patent_search.searchCondition.timeEnd=a.datevalue[1]),a.getData("patent"),e.abrupt("break",57);case 28:e.t3=a.contract_type,e.next="全部"===e.t3?31:"普通实施许可"===e.t3?33:"排他许可"===e.t3?35:"独占许可"===e.t3?37:"转让"===e.t3?39:41;break;case 31:return a.contract_search.searchCondition.contractType=0,e.abrupt("break",43);case 33:return a.contract_search.searchCondition.contractType=1,e.abrupt("break",43);case 35:return a.contract_search.searchCondition.contractType=2,e.abrupt("break",43);case 37:return a.contract_search.searchCondition.contractType=3,e.abrupt("break",43);case 39:return a.contract_search.searchCondition.contractType=4,e.abrupt("break",43);case 41:return a.contract_search.searchCondition.contractType=0,e.abrupt("break",43);case 43:e.t4=a.contract_status_type,e.next="全部"===e.t4?46:"正在转换"===e.t4?48:"已转换"===e.t4?50:52;break;case 46:return a.contract_search.searchCondition.contractState=0,e.abrupt("break",54);case 48:return a.contract_search.searchCondition.contractState=1,e.abrupt("break",54);case 50:return a.contract_search.searchCondition.contractState=2,e.abrupt("break",54);case 52:return a.contract_search.searchCondition.contractState=0,e.abrupt("break",54);case 54:return null!=a.datevalue&&""!=a.datevalue&&(console.log(a.datevalue),a.contract_search.searchCondition.timeBegin=a.datevalue[0],a.contract_search.searchCondition.timeEnd=a.datevalue[1]),a.getData("contract"),e.abrupt("break",57);case 57:case"end":return e.stop()}}),e)})))()},download_excel_Dialog_open:function(){var t=this,e=this,a="";switch(e.columnList=[],e.table_type){case"专利列表":a="/export/getPatentColumnMap";break;case"合同列表":a="/export/getContractColumnMap";break}e.request(a,{},"GET",{}).then((function(a){if(console.log(a),"success"==a.data.status){console.log(a.data);for(var n=0;n<a.data.data.length;n++){var c={};c.index=a.data.data[n].index,c.columnName=a.data.data[n].columnName,c.columnNameCN=a.data.data[n].columnNameCN,e.columnList.push(c)}e.download_excel_Dialog=!0}else t.$message.error(a.data.data.errMsg)})).catch((function(e){console.log(e),t.$message.error("出错了！")}))},download_excel:function(){var t=this,e=this;console.log(e.datevalue[0]);var a={};switch(e.table_type){case"专利列表":if(0==e.download_patentList.length)e.$message.warning("请选择需要导出的列！");else{a={authorized:"已授权"==e.patents_type,column:[],patentState:0,cymd:this.patent_search.cymd,gsdw:this.patent_search.gsdw,timeBegin:"",timeEnd:"",zldyzzxm:this.patent_search.zldyzzxm,zlmc:this.patent_search.zlmc};for(var n=0;n<e.download_patentList.length;n++)a.column.push(e.download_patentList[n]);switch(e.patents_status_type){case"全部专利":a.patentState=0;break;case"未转换":a.patentState=1;break;case"正在转换":a.patentState=2;break;case"已转换":a.patentState=3;break}null!=e.datevalue&&""!=e.datevalue&&(a.timeBegin=e.datevalue[0],a.timeEnd=e.datevalue[1]),e.request("/export/exportPatentByCondition",a,"POST",{},"blob").then((function(a){if(console.log(a),void 0!=a.headers["content-disposition"]){t.$notify.success({title:"成功",content:"准备开始导出！"}),e.download_excel_Dialog=!1;var n=decodeURI(a.headers["content-disposition"].split("fileName=")[1])+".xls";try{var c=new Blob([a.data],{type:"application/force-download"}),r=URL.createObjectURL(c),o=document.createElement("a");o.href=r,o.setAttribute("download",n),document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(s){console.log(s),t.$message.error("数据请求失败！")}}else t.$message.error("文件可能丢失了！")})).catch((function(a){console.log(a),e.loading=!1,t.$message.error("出错了！")}))}break;case"合同列表":if(0==e.download_contractList.length)e.$message.warning("请选择需要导出的列！");else{a={amountBegin:this.contract_search.amountBegin,amountEnd:this.contract_search.amountEnd,codeBegin:this.contract_search.codeBegin,codeEnd:this.contract_search.codeEnd,column:[],contractState:0,contractType:0,paName:this.contract_search.paName,projectName:this.contract_search.projectName,timeBegin:"",timeEnd:""};for(var c=0;c<e.download_contractList.length;c++)a.column.push(e.download_contractList[c]);switch(e.contract_type){case"全部":a.contractType=0;break;case"普通实施许可":a.contractType=1;break;case"排他许可":a.contractType=2;break;case"独占许可":a.contractType=3;break;case"转让":a.contractType=4;break}switch(e.contract_status_type){case"全部":a.contractState=0;break;case"正在转换":a.contractState=1;break;case"已转换":a.contractState=2;break}null!=e.datevalue&&""!=e.datevalue&&(a.timeBegin=e.datevalue[0],a.timeEnd=e.datevalue[1]),console.log(a),e.request("/export/exportContractByCondition",a,"POST",{},"blob").then((function(a){if(console.log(a),void 0!=a.headers["content-disposition"]){t.$notify.success({title:"成功",content:"准备开始导出！"}),e.download_excel_Dialog=!1;var n=decodeURI(a.headers["content-disposition"].split("fileName=")[1])+".xls";try{var c=new Blob([a.data],{type:"application/force-download"}),r=URL.createObjectURL(c),o=document.createElement("a");o.href=r,o.setAttribute("download",n),document.body.appendChild(o),o.click(),document.body.removeChild(o)}catch(s){console.log(s),t.$message.error("数据请求失败！")}}else t.$message.error("文件可能丢失了！")})).catch((function(a){console.log(a),e.loading=!1,t.$message.error("出错了！")}))}break}console.log(a)},TimeDiffer:function(t){var e=new Date,a=new Date(t),n=(e-a)/1e3,c=parseInt(n/86400);return c}}},l=i,d=(a("3090"),a("2877")),p=Object(d["a"])(l,n,c,!1,null,null,null);e["default"]=p.exports}}]);