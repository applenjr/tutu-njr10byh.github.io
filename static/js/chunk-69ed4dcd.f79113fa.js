(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69ed4dcd"],{2136:function(e,t,a){},3090:function(e,t,a){"use strict";a("2136")},"414a":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Data_Center_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Type"},[a("div",[a("el-radio-group",{on:{change:e.table_type_change},model:{value:e.table_type,callback:function(t){e.table_type=t},expression:"table_type"}},[a("el-radio-button",{attrs:{label:"专利列表"}}),a("el-radio-button",{attrs:{label:"合同列表"}})],1),"专利列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-left":"10px"},on:{change:e.patents_type_change},model:{value:e.patents_type,callback:function(t){e.patents_type=t},expression:"patents_type"}},[a("el-radio-button",{attrs:{label:"已授权"}}),a("el-radio-button",{attrs:{label:"未授权"}})],1):e._e(),"合同列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-left":"10px"},on:{change:e.contract_type_change},model:{value:e.contract_status_type,callback:function(t){e.contract_status_type=t},expression:"contract_status_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1):e._e()],1),"专利列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-top":"10px"},on:{change:e.patents_type_change},model:{value:e.patents_status_type,callback:function(t){e.patents_status_type=t},expression:"patents_status_type"}},[a("el-radio-button",{attrs:{label:"全部专利"}}),a("el-radio-button",{attrs:{label:"等待审批"}}),a("el-radio-button",{attrs:{label:"正在转换"}}),a("el-radio-button",{attrs:{label:"已转换"}})],1):e._e(),"合同列表"==e.table_type?a("el-radio-group",{staticStyle:{"margin-top":"10px"},on:{change:e.contract_type_change},model:{value:e.contract_type,callback:function(t){e.contract_type=t},expression:"contract_type"}},[a("el-radio-button",{attrs:{label:"全部"}}),a("el-radio-button",{attrs:{label:"普通实施许可"}}),a("el-radio-button",{attrs:{label:"拍他许可"}}),a("el-radio-button",{attrs:{label:"独占许可"}}),a("el-radio-button",{attrs:{label:"转让"}})],1):e._e()],1),"合同列表"==e.table_type?a("div",{staticClass:"contractCode"},[a("div",[e._v("合同编号区间")]),a("el-input",{model:{value:e.codeBegin,callback:function(t){e.codeBegin=t},expression:"codeBegin"}}),a("span",[e._v(" —— ")]),a("el-input",{model:{value:e.codeEnd,callback:function(t){e.codeEnd=t},expression:"codeEnd"}})],1):e._e(),a("div",{staticClass:"Search"},[a("div",{staticClass:"input_button"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" "+e._s(e.SearchType_prepend)+" "),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),"专利列表"==e.table_type?a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"专利第一作者"}},[e._v(" 专利第一作者 ")]),a("el-dropdown-item",{attrs:{command:"成员名单"}},[e._v("成员名单")]),a("el-dropdown-item",{attrs:{command:"所属学院"}},[e._v("所属学院")])],1):e._e(),"合同列表"==e.table_type?a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"合同名称"}},[e._v("合同名称")]),a("el-dropdown-item",{attrs:{command:"合同编号"}},[e._v("合同编号")]),a("el-dropdown-item",{attrs:{command:"受让方单位"}},[e._v("受让方单位")])],1):e._e()],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}}),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1),a("div",{staticClass:"download_button"},[a("el-date-picker",{attrs:{type:"daterange",align:"right","unlink-panels":"","range-separator":"至","start-placeholder":"开始日期","end-placeholder":"结束日期","picker-options":e.pickerOptions,format:"yyyy-MM-dd","value-format":"yyyy-MM-dd"},model:{value:e.datevalue,callback:function(t){e.datevalue=t},expression:"datevalue"}}),a("el-button",{attrs:{icon:"el-icon-download"},on:{click:function(t){e.download_excel_Dialog=!0}}},[e._v(" 导出Excel ")])],1)])]),"专利列表"==e.table_type?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.PatentstableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"zldyzzxm",label:"第一作者",width:"120"}}),a("el-table-column",{attrs:{prop:"cymd",label:"成员名单"}}),a("el-table-column",{attrs:{prop:"gsdw",label:"所属学院"}}),"已转换"==e.patents_status_type?a("el-table-column",{attrs:{prop:"completeTime",label:"完成时间",width:"180"}}):e._e()],1):e._e(),"合同列表"==e.table_type?a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.ContractstableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"projectName",label:"合同名称"}}),a("el-table-column",{attrs:{prop:"projectCode",label:"合同编号",width:"120"}}),a("el-table-column",{attrs:{prop:"paName",label:"受让方单位"}}),"已完成"==e.contract_status_type?a("el-table-column",{attrs:{prop:"completeTime",label:"完成时间",width:"180"}}):e._e()],1):e._e(),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"dialogStyle",attrs:{title:"导出Excel",visible:e.download_excel_Dialog,width:"55%"},on:{"update:visible":function(t){e.download_excel_Dialog=t}}},[a("h2",[e._v("选择需要导出的字段")]),"专利列表"==e.table_type?a("el-checkbox-group",{model:{value:e.download_patentList,callback:function(t){e.download_patentList=t},expression:"download_patentList"}},[a("el-checkbox",{attrs:{label:"fzyDepartment",border:"",size:"small"}},[e._v("专利负责人单位")]),a("el-checkbox",{attrs:{label:"cymd",border:"",size:"small"}},[e._v(" 发明人 ")]),a("el-checkbox",{attrs:{label:"fzyName",border:"",size:"small"}},[e._v(" 专利负责人 ")]),a("el-checkbox",{attrs:{label:"zldyzzxm",border:"",size:"small"}},[e._v(" 第一发明人 ")]),a("el-checkbox",{attrs:{label:"gsdw",border:"",size:"small"}},[e._v(" 归属单位 ")]),a("el-checkbox",{attrs:{label:"zlapplyrq",border:"",size:"small"}},[e._v(" 专利申请日期 ")]),a("el-checkbox",{attrs:{label:"fzyGh",border:"",size:"small"}},[e._v(" 专利负责人工号 ")]),a("el-checkbox",{attrs:{label:"zlmc",border:"",size:"small"}},[e._v(" 专利名称 ")]),a("el-checkbox",{attrs:{label:"patentPrice",border:"",size:"small"}},[e._v(" 专利金额 ")]),a("el-checkbox",{attrs:{label:"zlh",border:"",size:"small"}},[e._v(" 专利号 ")]),a("el-checkbox",{attrs:{label:"zlsqrq",border:"",size:"small"}},[e._v(" 专利授权日期 ")]),a("el-checkbox",{attrs:{label:"bz",border:"",size:"small"}},[e._v(" 备注 ")]),a("el-checkbox",{attrs:{label:"cygh",border:"",size:"small"}},[e._v(" 发明人工号 ")]),a("el-checkbox",{attrs:{label:"patentInfoId",border:"",size:"small"}},[e._v(" 专利id ")]),a("el-checkbox",{attrs:{label:"zldyzzgh",border:"",size:"small"}},[e._v(" 第一发明人工号 ")])],1):e._e(),"合同列表"==e.table_type?a("el-checkbox-group",{model:{value:e.download_contractList,callback:function(t){e.download_contractList=t},expression:"download_contractList"}},[a("el-checkbox",{attrs:{label:"paMailingAddress",border:"",size:"small"}},[e._v("受让方通讯地址")]),a("el-checkbox",{attrs:{label:"contractSigningDate",border:"",size:"small"}},[e._v(" 合同签订时间 ")]),a("el-checkbox",{attrs:{label:"paName",border:"",size:"small"}},[e._v(" 受让方 ")]),a("el-checkbox",{attrs:{label:"paContactPerson",border:"",size:"small"}},[e._v(" 受让方联系人姓名 ")]),a("el-checkbox",{attrs:{label:"patentNum",border:"",size:"small"}},[e._v(" 包含专利数 ")]),a("el-checkbox",{attrs:{label:"paAddress",border:"",size:"small"}},[e._v(" 受让方注册地址 ")]),a("el-checkbox",{attrs:{label:"totalTransferAmount",border:"",size:"small"}},[e._v(" 受让方联系人电话 ")]),a("el-checkbox",{attrs:{label:"projectCode",border:"",size:"small"}},[e._v(" 合同编号 ")]),a("el-checkbox",{attrs:{label:"paRepresentative",border:"",size:"small"}},[e._v(" 受让方法定代表人 ")]),a("el-checkbox",{attrs:{label:"paPostalCode",border:"",size:"small"}},[e._v(" 受让方邮编 ")]),a("el-checkbox",{attrs:{label:"invoicingEnterprise",border:"",size:"small"}},[e._v(" 开票企业名 ")]),a("el-checkbox",{attrs:{label:"projectName",border:"",size:"small"}},[e._v(" 合同名 ")]),a("el-checkbox",{attrs:{label:"paContactEmail",border:"",size:"small"}},[e._v(" 受让方联系邮箱 ")]),a("el-checkbox",{attrs:{label:"taxpayerCode",border:"",size:"small"}},[e._v(" 纳税人识别号 ")])],1):e._e(),"公司列表"==e.table_type?a("el-checkbox-group",{model:{value:e.download_companyList,callback:function(t){e.download_companyList=t},expression:"download_companyList"}},[a("el-checkbox",{attrs:{label:"companyId",border:"",size:"small"}},[e._v("公司id")]),a("el-checkbox",{attrs:{label:"companyRepresentative",border:"",size:"small"}},[e._v(" 法定代表人 ")]),a("el-checkbox",{attrs:{label:"companyMailingAddress",border:"",size:"small"}},[e._v(" 通讯地址 ")]),a("el-checkbox",{attrs:{label:"companyContactEmail",border:"",size:"small"}},[e._v(" 联系邮箱 ")]),a("el-checkbox",{attrs:{label:"companyAddress",border:"",size:"small"}},[e._v(" 注册地址 ")]),a("el-checkbox",{attrs:{label:"companyName",border:"",size:"small"}},[e._v(" 公司名 ")]),a("el-checkbox",{attrs:{label:"companyContactPerson",border:"",size:"small"}},[e._v(" 联系人姓名 ")]),a("el-checkbox",{attrs:{label:"companyPostalCode",border:"",size:"small"}},[e._v(" 邮编 ")]),a("el-checkbox",{attrs:{label:"companyContactPhone",border:"",size:"small"}},[e._v(" 联系人电话 ")]),a("el-checkbox",{attrs:{label:"taxpayerCode",border:"",size:"small"}},[e._v(" 纳税人识别号 ")])],1):e._e(),a("div",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.download_excel_Dialog=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:e.download_excel}},[e._v("确 定")])],1)],1)],1)},o=[],n=a("1da1"),c=(a("ac1f"),a("1276"),a("d3b7"),a("3ca3"),a("ddb0"),a("2b3d"),a("96cf"),{data:function(){return{table_type:"专利列表",patents_type:"已授权",patents_status_type:"全部",contract_type:"全部",contract_status_type:"全部",PatentstableData:[],ContractstableData:[],loading:!0,total:0,currentPage:1,Page_url:"",SearchType_prepend:"查询字段",SearchType:0,SearchText:"",pickerOptions:{shortcuts:[{text:"最近一周",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-6048e5),e.$emit("pick",[a,t])}},{text:"最近一个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-2592e6),e.$emit("pick",[a,t])}},{text:"最近三个月",onClick:function(e){var t=new Date,a=new Date;a.setTime(a.getTime()-7776e6),e.$emit("pick",[a,t])}}]},datevalue:[],price_opreate_Dialog:!1,price_opreate_Data:[],download_excel_Dialog:!1,download_patentList:[],download_contractList:[],download_companyList:[],codeBegin:"",codeEnd:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:a=e,a.PatentstableData=[],a.currentPage=1,a.table_type="专利列表",a.patents_type="已授权",a.patents_status_type="全部专利",a.SearchType_prepend="查询字段",a.SearchText="",console.log(e.$store.state),r="/export/getPatentByCondition?currPage=1&size=20&search=0",t.t0=a.patents_type,t.next="已授权"===t.t0?13:"未授权"===t.t0?15:17;break;case 13:return r+="&authorized=true",t.abrupt("break",19);case 15:return r+="&authorized=false",t.abrupt("break",19);case 17:return r+="&authorized=true",t.abrupt("break",19);case 19:t.t1=a.patents_status_type,t.next="全部专利"===t.t1?22:"等待审批"===t.t1?24:"正在转换"===t.t1?26:"已转换"===t.t1?28:30;break;case 22:return r+="&patentState=0",t.abrupt("break",32);case 24:return r+="&patentState=1",t.abrupt("break",32);case 26:return r+="&patentState=2",t.abrupt("break",32);case 28:return r+="&patentState=3",t.abrupt("break",32);case 30:return r+="&patentState=0",t.abrupt("break",32);case 32:return a.Page_url=r,t.next=35,a.getData(r,"patent");case 35:case"end":return t.stop()}}),t)})))()},getData:function(e,t){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function r(){var o;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:if(o=a,"patent"!=t){r.next=7;break}return o.PatentstableData=[],r.next=5,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var r={};r.index=t+1,r.zlmc=e.data.data.records[t].zlmc,r.zldyzzxm=e.data.data.records[t].zldyzzxm,r.cymd=e.data.data.records[t].cymd,r.gsdw=e.data.data.records[t].gsdw,r.completeTime=e.data.data.records[t].completeTime,r.wid=e.data.data.records[t].wid,o.PatentstableData.push(r)}a.$message({message:"数据已更新！",type:"success"})}else a.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,a.$message({message:"出错了！",type:"error"})}));case 5:r.next=11;break;case 7:if("contract"!=t){r.next=11;break}return o.ContractstableData=[],r.next=11,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var r={};r.index=t+1,r.paName=e.data.data.records[t].paName,r.projectCode=e.data.data.records[t].projectCode,r.projectName=e.data.data.records[t].projectName,r.completeTime=e.data.data.records[t].completeTime,o.ContractstableData.push(r)}a.$message({message:"数据已更新！",type:"success"})}else a.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,a.$message({message:"出错了！",type:"error"})}));case 11:case"end":return r.stop()}}),r)})))()},handleCurrentPage:function(e){var t=this;t.loading=!0,console.log(t.Page_url);var a=t.Page_url.split("currPage")[0]+"currPage="+e+"&size"+t.Page_url.split("size")[1];switch(console.log(a),t.PatentstableData=[],t.currentPage=e,this.table_type){case"专利列表":t.getData(a,"patent");break;case"合同列表":t.getData(a,"contract");break;default:break}},table_type_change:function(e){console.log(e);var t=this;t.loading=!0,t.PatentstableData=[],t.SearchType_prepend="查询字段",t.SearchText="";var a="";switch(e){case"专利列表":t.patents_type="已授权",t.patents_status_type="全部专利",a="/export/getPatentByCondition?currPage=1&size=20&authorized=true&search=0&patentState=0",t.Page_url=a,t.getData(a,"patent");break;case"合同列表":t.contract_type="全部",t.contract_status_type="全部",a="/export/getContractByCondition?currPage=1&size=20&contractType=0&search=0&patentState=0",t.Page_url=a,t.getData(a,"contract");break;default:break}},patents_type_change:function(e){console.log(e);var t=this;t.loading=!0,t.PatentstableData=[],t.SearchType_prepend="查询字段",t.SearchText="";var a="/export/getPatentByCondition?currPage=1&size=20&search=0";switch(t.patents_type){case"已授权":a+="&authorized=true";break;case"未授权":a+="&authorized=false";break;default:a+="&authorized=true";break}switch(t.patents_status_type){case"全部专利":a+="&patentState=0";break;case"等待审批":a+="&patentState=1";break;case"正在转换":a+="&patentState=2";break;case"已转换":a+="&patentState=3";break;default:a+="&patentState=0";break}t.Page_url=a,t.getData(a,"patent")},contract_type_change:function(){var e=this;e.loading=!0,e.ContractstableData=[],e.SearchType_prepend="查询字段",e.SearchText="";var t="/export/getContractByCondition?currPage=1&size=20&search=0";switch(e.contract_type){case"全部":t+="&contractType=0";break;case"普通实施许可":t+="&contractType=1";break;case"拍他许可":t+="&contractType=2";break;case"独占许可":t+="&contractType=3";break;case"转让":t+="&contractType=4";break;default:t+="&contractType=0";break}switch(e.contract_status_type){case"全部":t+="&patentState=0";break;case"正在转换":t+="&patentState=1";break;case"已转换":t+="&patentState=2";break;default:t+="&patentState=0";break}console.log(t),e.Page_url=t,e.getData(t,"contract")},handleDropdown:function(e){console.log(e);var t=this;switch(t.SearchType_prepend=e,e){case"专利名称":t.SearchType=1;break;case"专利第一作者":t.SearchType=2;break;case"成员名单":t.SearchType=3;break;case"所属学院":t.SearchType=4;break;case"合同编号":t.SearchType=1;break;case"合同名称":t.SearchType=2;break;case"受让方单位":t.SearchType=3;break;default:break}},search:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,o,n,c;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,console.log(a.SearchType_prepend,a.SearchText),"查询字段"==a.SearchType_prepend||""!=a.SearchText){t.next=6;break}e.$message({message:"请填写查询内容！",type:"warning"}),t.next=149;break;case 6:if("查询字段"!=a.SearchType_prepend||""==a.SearchText){t.next=10;break}e.$message({message:"请填写查询字段！",type:"warning"}),t.next=149;break;case 10:if(r="",o="",a.currentPage=1,a.loading=!0,null!=a.datevalue&&""!=a.datevalue&&(console.log(a.datevalue),o="&timeBegin="+a.datevalue[0]+"&timeEnd="+a.datevalue[1]),"查询字段"!=a.SearchType_prepend||""!=a.SearchText){t.next=83;break}if("专利列表"!=a.table_type){t.next=47;break}a.PatentstableData=[],r="/export/getPatentByCondition?currPage=1&size=20&search=0",t.t0=a.patents_type,t.next="已授权"===t.t0?22:"未授权"===t.t0?24:26;break;case 22:return r+="&authorized=true",t.abrupt("break",28);case 24:return r+="&authorized=false",t.abrupt("break",28);case 26:return r+="&authorized=true",t.abrupt("break",28);case 28:t.t1=a.patents_status_type,t.next="全部专利"===t.t1?31:"等待审批"===t.t1?33:"正在转换"===t.t1?35:"已转换"===t.t1?37:39;break;case 31:return r+="&patentState=0",t.abrupt("break",41);case 33:return r+="&patentState=1",t.abrupt("break",41);case 35:return r+="&patentState=2",t.abrupt("break",41);case 37:return r+="&patentState=3",t.abrupt("break",41);case 39:return r+="&patentState=0",t.abrupt("break",41);case 41:r+=o,console.log(r),a.Page_url=r,a.getData(r,"patent"),t.next=81;break;case 47:if("合同列表"!=a.table_type){t.next=81;break}a.ContractstableData=[],r="/export/getContractByCondition?currPage=1&size=20&search=0",t.t2=a.contract_type,t.next="全部"===t.t2?53:"普通实施许可"===t.t2?55:"拍他许可"===t.t2?57:"独占许可"===t.t2?59:"转让"===t.t2?61:63;break;case 53:return r+="&contractType=0",t.abrupt("break",65);case 55:return r+="&contractType=1",t.abrupt("break",65);case 57:return r+="&contractType=2",t.abrupt("break",65);case 59:return r+="&contractType=3",t.abrupt("break",65);case 61:return r+="&contractType=4",t.abrupt("break",65);case 63:return r+="&contractType=0",t.abrupt("break",65);case 65:t.t3=a.contract_status_type,t.next="全部"===t.t3?68:"正在转换"===t.t3?70:"已转换"===t.t3?72:74;break;case 68:return r+="&patentState=0",t.abrupt("break",76);case 70:return r+="&patentState=1",t.abrupt("break",76);case 72:return r+="&patentState=2",t.abrupt("break",76);case 74:return r+="&patentState=0",t.abrupt("break",76);case 76:""!=a.codeBegin&&""!=a.codeEnd&&(n="&codeBegin="+a.codeBegin+"&codeEnd="+a.codeEnd,r+=n),r+=o,console.log(r),a.Page_url=r,a.getData(r,"contract");case 81:t.next=149;break;case 83:if("查询字段"==a.SearchType_prepend||""==a.SearchText){t.next=149;break}if("专利列表"!=a.table_type){t.next=115;break}a.PatentstableData=[],r="/export/getPatentByCondition?currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.t4=a.patents_type,t.next="已授权"===t.t4?90:"未授权"===t.t4?92:94;break;case 90:return r+="&authorized=true",t.abrupt("break",96);case 92:return r+="&authorized=false",t.abrupt("break",96);case 94:return r+="&authorized=true",t.abrupt("break",96);case 96:t.t5=a.patents_status_type,t.next="全部专利"===t.t5?99:"等待审批"===t.t5?101:"正在转换"===t.t5?103:"已转换"===t.t5?105:107;break;case 99:return r+="&patentState=0",t.abrupt("break",109);case 101:return r+="&patentState=1",t.abrupt("break",109);case 103:return r+="&patentState=2",t.abrupt("break",109);case 105:return r+="&patentState=3",t.abrupt("break",109);case 107:return r+="&patentState=0",t.abrupt("break",109);case 109:r+=o,console.log(r),a.Page_url=r,a.getData(r,"patent"),t.next=149;break;case 115:if("合同列表"!=a.table_type){t.next=149;break}a.ContractstableData=[],r="/export/getContractByCondition?currPage=1&size=20&search="+a.SearchType+"&condition="+a.SearchText,t.t6=a.contract_type,t.next="全部"===t.t6?121:"普通实施许可"===t.t6?123:"拍他许可"===t.t6?125:"独占许可"===t.t6?127:"转让"===t.t6?129:131;break;case 121:return r+="&contractType=0",t.abrupt("break",133);case 123:return r+="&contractType=1",t.abrupt("break",133);case 125:return r+="&contractType=2",t.abrupt("break",133);case 127:return r+="&contractType=3",t.abrupt("break",133);case 129:return r+="&contractType=4",t.abrupt("break",133);case 131:return r+="&contractType=0",t.abrupt("break",133);case 133:t.t7=a.contract_status_type,t.next="全部"===t.t7?136:"正在转换"===t.t7?138:"已转换"===t.t7?140:142;break;case 136:return r+="&patentState=0",t.abrupt("break",144);case 138:return r+="&patentState=1",t.abrupt("break",144);case 140:return r+="&patentState=2",t.abrupt("break",144);case 142:return r+="&patentState=0",t.abrupt("break",144);case 144:""!=a.codeBegin&&""!=a.codeEnd&&(c="&codeBegin="+a.codeBegin+"&codeEnd="+a.codeEnd,r+=c),r+=o,console.log(r),a.Page_url=r,a.getData(r,"contract");case 149:case"end":return t.stop()}}),t)})))()},download_excel:function(){var e=this,t=this;console.log(t.datevalue[0]);var a={};switch(t.table_type){case"专利列表":if(0==t.download_patentList.length)t.$message.warning("请选择需要导出的列！");else{a={authorized:"已授权"==t.patents_type,column:[],condition:t.SearchText,patentState:0,search:t.SearchType};for(var r=0;r<t.download_patentList.length;r++)a.column.push(t.download_patentList[r]);switch(t.patents_status_type){case"全部专利":a.patentState=0;break;case"等待审批":a.patentState=1;break;case"正在转换":a.patentState=2;break;case"已转换":a.patentState=3;break}null!=t.datevalue&&""!=t.datevalue&&(a.timeBegin=t.datevalue[0],a.timeEnd=t.datevalue[1]),t.request("/export/exportPatentByCondition",a,"POST",{},"blob").then((function(a){if(console.log(a),void 0!=a.headers["content-disposition"]){e.$notify({title:"成功",message:"准备开始导出！",type:"success"}),t.download_excel_Dialog=!1;var r=decodeURI(a.headers["content-disposition"].split("fileName=")[1])+".xls";try{var o=new Blob([a.data],{type:"application/force-download"}),n=URL.createObjectURL(o),c=document.createElement("a");c.href=n,c.setAttribute("download",r),document.body.appendChild(c),c.click(),document.body.removeChild(c)}catch(l){console.log(l),e.$message({message:"数据请求失败！",type:"error"})}}else e.$message({message:"文件可能丢失了！",type:"error"})})).catch((function(a){console.log(a),t.loading=!1,e.$message({message:"出错了！",type:"error"})}))}break;case"合同列表":if(0==t.download_contractList.length)t.$message.warning("请选择需要导出的列！");else{a={column:[],condition:t.SearchText,search:t.SearchType,contractState:0,contractType:0};for(var o=0;o<t.download_contractList.length;o++)a.column.push(t.download_contractList[o]);switch(t.contract_type){case"全部":a.contractType=0;break;case"普通实施许可":a.contractType=1;break;case"拍他许可":a.contractType=2;break;case"独占许可":a.contractType=3;break;case"转让":a.contractType=4;break}switch(t.contract_status_type){case"全部":a.contractState=0;break;case"正在转换":a.contractState=1;break;case"已转换":a.contractState=2;break}null!=t.datevalue&&""!=t.datevalue&&(a.timeBegin=t.datevalue[0],a.timeEnd=t.datevalue[1]),""!=t.codeBegin&&""!=t.codeEnd&&(a.codeBegin=t.codeBegin,a.codeEnd=t.codeEnd),console.log(a),t.request("/export/exportContractByCondition",a,"POST",{},"blob").then((function(a){if(console.log(a),void 0!=a.headers["content-disposition"]){e.$notify({title:"成功",message:"准备开始导出！",type:"success"}),t.download_excel_Dialog=!1;var r=decodeURI(a.headers["content-disposition"].split("fileName=")[1])+".xls";try{var o=new Blob([a.data],{type:"application/force-download"}),n=URL.createObjectURL(o),c=document.createElement("a");c.href=n,c.setAttribute("download",r),document.body.appendChild(c),c.click(),document.body.removeChild(c)}catch(l){console.log(l),e.$message({message:"数据请求失败！",type:"error"})}}else e.$message({message:"文件可能丢失了！",type:"error"})})).catch((function(a){console.log(a),t.loading=!1,e.$message({message:"出错了！",type:"error"})}))}break;case"公司列表":0==t.download_companyList.length&&t.$message.warning("请选择需要导出的列！");break;default:break}console.log(a)}}}),l=c,s=(a("3090"),a("2877")),d=Object(s["a"])(l,r,o,!1,null,null,null);t["default"]=d.exports}}]);