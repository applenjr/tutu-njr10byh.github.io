(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-28e539ce"],{1276:function(t,a,e){"use strict";var l=e("d784"),r=e("44e7"),s=e("825a"),i=e("1d80"),n=e("4840"),c=e("8aa5"),o=e("50c4"),d=e("14c3"),p=e("9263"),_=e("d039"),u=[].push,m=Math.min,v=4294967295,f=!_((function(){return!RegExp(v,"y")}));l("split",2,(function(t,a,e){var l;return l="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,e){var l=String(i(this)),s=void 0===e?v:e>>>0;if(0===s)return[];if(void 0===t)return[l];if(!r(t))return a.call(l,t,s);var n,c,o,d=[],_=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),m=0,f=new RegExp(t.source,_+"g");while(n=p.call(f,l)){if(c=f.lastIndex,c>m&&(d.push(l.slice(m,n.index)),n.length>1&&n.index<l.length&&u.apply(d,n.slice(1)),o=n[0].length,m=c,d.length>=s))break;f.lastIndex===n.index&&f.lastIndex++}return m===l.length?!o&&f.test("")||d.push(""):d.push(l.slice(m)),d.length>s?d.slice(0,s):d}:"0".split(void 0,0).length?function(t,e){return void 0===t&&0===e?[]:a.call(this,t,e)}:a,[function(a,e){var r=i(this),s=void 0==a?void 0:a[t];return void 0!==s?s.call(a,r,e):l.call(String(r),a,e)},function(t,r){var i=e(l,t,this,r,l!==a);if(i.done)return i.value;var p=s(t),_=String(this),u=n(p,RegExp),h=p.unicode,g=(p.ignoreCase?"i":"")+(p.multiline?"m":"")+(p.unicode?"u":"")+(f?"y":"g"),y=new u(f?p:"^(?:"+p.source+")",g),C=void 0===r?v:r>>>0;if(0===C)return[];if(0===_.length)return null===d(y,_)?[_]:[];var F=0,b=0,x=[];while(b<_.length){y.lastIndex=f?b:0;var w,A=d(y,f?_:_.slice(b));if(null===A||(w=m(o(y.lastIndex+(f?0:b)),_.length))===F)b=c(_,b,h);else{if(x.push(_.slice(F,b)),x.length===C)return x;for(var P=1;P<=A.length-1;P++)if(x.push(A[P]),x.length===C)return x;b=F=w}}return x.push(_.slice(F)),x}]}),!f)},"14c3":function(t,a,e){var l=e("c6b6"),r=e("9263");t.exports=function(t,a){var e=t.exec;if("function"===typeof e){var s=e.call(t,a);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==l(t))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(t,a)}},"6b6e":function(t,a,e){"use strict";e.r(a);var l=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{directives:[{name:"loading",rawName:"v-loading.fullscreen.lock",value:t.fullscreenLoading,expression:"fullscreenLoading",modifiers:{fullscreen:!0,lock:!0}}],staticClass:"patent_detail_pc_Container"},[e("div",{staticClass:"application_title"},[t._v(" 南京邮电大学科技成果转化审批表（许可和转让） ")]),e("div",{staticClass:"application_table"},[e("div",{staticClass:"cell_1"},[e("div",{staticClass:"cell_1_part_1"},[t._v("成果名称")]),e("div",{staticClass:"cell_1_part_2 cell_part_display"},[t._v(" "+t._s(t.patent_info.zlmc)+" ")])]),e("div",{staticClass:"cell_2"},[e("div",{staticClass:"cell_2_part_1 cell_part_display"},[t._v("所有权人")]),e("div",{staticClass:"cell_2_part_2 cell_part_display"},[t._v(" "+t._s(t.patent_info.zlqr)+" ")])]),e("div",{staticClass:"cell_3"},[e("div",{staticClass:"cell_3_part_1"},[t._v("成果完成人")]),e("div",{staticClass:"cell_3_part_2 cell_part_display"},[t._v(" "+t._s(t.patent_info.cymd)+" ")])]),e("div",{staticClass:"cell_4"},[e("div",{staticClass:"cell_4_part_1"},[t._v("团队负责人")]),e("div",{staticClass:"cell_4_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.fzyName)+" ")]),e("div",{staticClass:"cell_4_part_3 cell_part_display"},[t._v("所在单位")]),e("div",{staticClass:"cell_4_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.fzyDepartment)+" ")]),e("div",{staticClass:"cell_4_part_5 cell_part_display"},[t._v("联系电话")]),e("div",{staticClass:"cell_4_part_6 cell_part_display"},[t._v(" "+t._s(t.ruleForm.fzyPhone)+" ")])]),e("div",{staticClass:"cell_5"},[e("div",{staticClass:"cell_5_part_1"},[t._v("转化方式")]),e("div",{staticClass:"cell_5_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.contractType)+" ")])]),"专利权转让"!=t.ruleForm.contractType?e("div",{staticClass:"cell_5"},[e("div",{staticClass:"cell_5_part_1"},[t._v("许可年限")]),e("div",{staticClass:"cell_5_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.contractValidateBegin)+" 至 "+t._s(t.ruleForm.contractValidateEnd)+" ")])]):t._e(),e("div",{staticClass:"cell_6"},[e("div",{staticClass:"cell_6_part_1"},[t._v("受让方单位")]),e("div",{staticClass:"cell_6_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paName)+" ")]),e("div",{staticClass:"cell_6_part_3 cell_part_display"},[t._v("受让方联系人")]),e("div",{staticClass:"cell_6_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paContactPerson)+" ")]),e("div",{staticClass:"cell_6_part_5 cell_part_display"},[t._v("联系电话")]),e("div",{staticClass:"cell_6_part_6 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paContactPhone)+" ")])]),e("div",{staticClass:"cell_7"},[e("div",{staticClass:"cell_7_part_1"},[t._v("受让方法定代表人")]),e("div",{staticClass:"cell_7_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paRepresentative)+" ")]),e("div",{staticClass:"cell_7_part_3 cell_part_display"},[t._v("纳税人识别号")]),e("div",{staticClass:"cell_7_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.taxpayerCode)+" ")]),e("div",{staticClass:"cell_7_part_5 cell_part_display"},[t._v("受让方邮编")]),e("div",{staticClass:"cell_7_part_6 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paPostalCode)+" ")])]),e("div",{staticClass:"cell_8"},[e("div",{staticClass:"cell_8_part_1"},[t._v("受让方注册地址")]),e("div",{staticClass:"cell_8_part_2 cell_part_display",staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(t.ruleForm.paAddress)+" ")])]),e("div",{staticClass:"cell_9"},[e("div",{staticClass:"cell_9_part_1"},[t._v("受让方通讯地址")]),e("div",{staticClass:"cell_9_part_2 cell_part_display",staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(t.ruleForm.paMailingAddress)+" ")])]),e("div",{staticClass:"cell_10"},[e("div",{staticClass:"cell_10_part_1"},[t._v("受让方邮箱")]),e("div",{staticClass:"cell_10_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paContactEmail)+" ")]),e("div",{staticClass:"cell_10_part_3 cell_part_display"},[t._v("行政区划")]),e("div",{staticClass:"cell_10_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paProvince)+" / "+t._s(t.ruleForm.paCity)+" / "+t._s(t.ruleForm.paDistrict)+" ")])]),e("div",{staticClass:"cell_10"},[e("div",{staticClass:"cell_10_part_1"},[t._v("受让方领域")]),e("div",{staticClass:"cell_10_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.paField)+" ")]),e("div",{staticClass:"cell_10_part_3 cell_part_display"},[t._v("是否有服务方")]),e("div",{staticClass:"cell_10_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.hasAgency)+" ")])]),"有"==t.ruleForm.hasAgency?e("div",{staticClass:"cell_14"},[e("div",{staticClass:"cell_14_part_1"},[t._v("中介名称")]),e("div",{staticClass:"cell_14_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.pcName)+" ")]),e("div",{staticClass:"cell_14_part_3 cell_part_display"},[t._v("中介联系人")]),e("div",{staticClass:"cell_14_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.pcContactPerson)+" ")]),e("div",{staticClass:"cell_14_part_5 cell_part_display"},[t._v("中介联系电话")]),e("div",{staticClass:"cell_14_part_6 cell_part_display"},[t._v(" "+t._s(t.ruleForm.pcContactPhone)+" ")])]):t._e(),"有"==t.ruleForm.hasAgency?e("div",{staticClass:"cell_15"},[e("div",{staticClass:"cell_15_part_1"},[t._v("中介法定代表人")]),e("div",{staticClass:"cell_15_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.pcRepresentative)+" ")]),e("div",{staticClass:"cell_15_part_3 cell_part_display"},[t._v("中介邮箱")]),e("div",{staticClass:"cell_15_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.pcContactEmail)+" ")])]):t._e(),"有"==t.ruleForm.hasAgency?e("div",{staticClass:"cell_16"},[e("div",{staticClass:"cell_16_part_1"},[t._v("中介住所地")]),e("div",{staticClass:"cell_16_part_2 cell_part_display",staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(t.ruleForm.pcAddress)+" ")])]):t._e(),"有"==t.ruleForm.hasAgency?e("div",{staticClass:"cell_17"},[e("div",{staticClass:"cell_17_part_1"},[t._v("中介通讯地址")]),e("div",{staticClass:"cell_17_part_2 cell_part_display",staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(t.ruleForm.pcMailingAddress)+" ")])]):t._e(),"有"==t.ruleForm.hasAgency?e("div",{staticClass:"cell_18"},[e("div",{staticClass:"cell_18_part_1"},[t._v("中介银行")]),e("div",{staticClass:"cell_18_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.pcBankName)+" ")]),e("div",{staticClass:"cell_18_part_3 cell_part_display"},[t._v("中介银行账号")]),e("div",{staticClass:"cell_18_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.pcBankAccount)+" ")])]):t._e(),"有"==t.ruleForm.hasAgency?e("div",{staticClass:"cell_19"},[e("div",{staticClass:"cell_19_part_1"},[t._v("中介银行地址")]),e("div",{staticClass:"cell_19_part_2 cell_part_display",staticStyle:{"font-size":"17px"}},[t._v(" "+t._s(t.ruleForm.pcBankAddress)+" ")])]):t._e(),e("div",{staticClass:"cell_11"},[e("div",{staticClass:"cell_11_part_1"},[t._v("是否存在关联关系说明")]),e("div",{staticClass:"cell_11_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.associationRelationship)+" ")])]),e("div",{staticClass:"cell_12"},[e("div",{staticClass:"cell_12_part_1"},[t._v("定价方式")]),"评估作价"!=t.ruleForm.pricingMethod?e("div",{staticClass:"cell_12_part_2_false cell_part_display"},[t._v(" "+t._s(t.ruleForm.pricingMethod)+" ")]):e("div",{staticClass:"cell_12_part_2_true cell_part_display"},[t._v(" "+t._s(t.ruleForm.pricingMethod)+" ")]),"评估作价"==t.ruleForm.pricingMethod?e("div",{staticClass:"cell_12_part_3 cell_part_display"},[t._v(" 评估公司 ")]):t._e(),"评估作价"==t.ruleForm.pricingMethod?e("div",{staticClass:"cell_12_part_4 cell_part_display"},[t._v(" "+t._s(t.ruleForm.evaluationCompany)+" ")]):t._e()]),e("div",{staticClass:"cell_13"},[e("div",{staticClass:"cell_13_part_1"},[t._v("价格（万元）")]),e("div",{staticClass:"cell_13_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.patentPrice)+" 万元 ")]),e("div",{staticClass:"cell_13_part_3 cell_part_display"},[t._v("净收益(万元)："+t._s(t.ruleForm.distributionResult))]),e("div",{staticClass:"cell_13_part_4 cell_part_display"},[t._v("收益分配方式")]),e("div",{staticClass:"cell_13_part_5 cell_part_display"},[t._v(" "+t._s(t.ruleForm.drawMoneyMethod)+" ")])]),"现金奖励"==t.ruleForm.drawMoneyMethod?e("div",{staticClass:"cell_9"},[e("div",{staticClass:"cell_9_part_1"},[t._v("专利证书编号")]),e("div",{staticClass:"cell_9_part_2 cell_part_display"},[t._v(" "+t._s(t.ruleForm.certificateNumber)+" ")])]):t._e(),"现金奖励"==t.ruleForm.drawMoneyMethod?e("div",{staticClass:"cell_13_expand"},[e("div",{staticClass:"cell_13_1"},[e("p",[t._v("奖励人员信息")]),t.fixing?t._e():e("el-button",{attrs:{type:"warning",circle:"",icon:"el-icon-edit-outline"},on:{click:function(a){t.fixing=!0}}}),t.fixing?e("el-button",{attrs:{type:"primary",circle:"",icon:"el-icon-plus"},on:{click:t.addPerson}}):t._e(),t.fixing?e("el-button",{attrs:{type:"success",circle:"",icon:"el-icon-check"},on:{click:t.confirmDistribution}}):t._e()],1),e("div",{staticClass:"cell_13_2"},[t.fixing?e("el-table",{staticClass:"money_table",attrs:{data:t.money_tableData,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"index",label:"序号",width:"55"}}),e("el-table-column",{attrs:{label:"姓名"},scopedSlots:t._u([{key:"default",fn:function(a){return[["root","superadmin","admin"].includes(t.authorize)?e("el-autocomplete",{attrs:{"fetch-suggestions":t.recipientSearch,placeholder:"请输入姓名"},model:{value:a.row.recipientName,callback:function(e){t.$set(a.row,"recipientName",e)},expression:"scope.row.recipientName"}}):e("el-select",{attrs:{filterable:"",placeholder:"请选择"},model:{value:a.row.recipientName,callback:function(e){t.$set(a.row,"recipientName",e)},expression:"scope.row.recipientName"}},t._l(t.name_options,(function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),1)]}}],null,!1,699986372)}),e("el-table-column",{attrs:{label:"工号"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-input",{attrs:{placeholder:"工号"},model:{value:a.row.recipientGh,callback:function(e){t.$set(a.row,"recipientGh",e)},expression:"scope.row.recipientGh"}})]}}],null,!1,212131782)}),e("el-table-column",{attrs:{label:"学院"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-input",{attrs:{placeholder:"学院"},model:{value:a.row.recipientDepartment,callback:function(e){t.$set(a.row,"recipientDepartment",e)},expression:"scope.row.recipientDepartment"}})]}}],null,!1,371039611)}),e("el-table-column",{attrs:{label:"身份证号",width:"200"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-input",{attrs:{placeholder:"身份证号"},model:{value:a.row.idCard,callback:function(e){t.$set(a.row,"idCard",e)},expression:"scope.row.idCard"}})]}}],null,!1,4068289305)}),e("el-table-column",{attrs:{label:"分配金额(万元)"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-input",{attrs:{type:"number",placeholder:"分配金额(万元)"},model:{value:a.row.amount,callback:function(e){t.$set(a.row,"amount",e)},expression:"scope.row.amount"}})]}}],null,!1,1521921059)}),e("el-table-column",{attrs:{label:"操作",width:"55"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-button",{attrs:{type:"text",size:"medium"},on:{click:function(e){return t.deletePerson(a.$index)}}},[e("i",{staticClass:"el-icon-delete",attrs:{"aria-hidden":"true"}})])]}}],null,!1,1157551202)})],1):e("el-table",{staticClass:"money_table",attrs:{data:t.money_tableData,border:"",stripe:""}},[e("el-table-column",{attrs:{prop:"index",label:"序号",width:"55"}}),e("el-table-column",{attrs:{label:"姓名",prop:"recipientName"}}),e("el-table-column",{attrs:{label:"工号",prop:"recipientGh"}}),e("el-table-column",{attrs:{label:"学院",prop:"recipientDepartment"}}),e("el-table-column",{attrs:{label:"身份证号",prop:"idCard",width:"200"}}),e("el-table-column",{attrs:{label:"分配金额(万元)",prop:"amount"}})],1)],1)]):t._e(),t._m(0),0!=t.OAimg.length?e("div",{staticClass:"cell_oaImg"},[e("div",[t._v("学院意见：")]),e("div",{staticClass:"oaImg"},[e("el-image",{attrs:{src:t.OAimg[0],"preview-src-list":t.OAimg}})],1)]):t._e()]),"examing_opreate"==t.patent.type?e("div",{staticClass:"bottom_buttons"},[e("el-button",{on:{click:t.Pass}},[t._v("通 过")]),e("el-button",{on:{click:t.Failed}},[t._v("不通过")])],1):t._e()])},r=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"cell_advice"},[e("div",{staticClass:"cell_advice_top"},[e("span",[t._v(" 成果完成人意见：")]),e("p",[t._v(" 团队负责人承诺，该专利转换 "),e("b",[e("i",[t._v("已经经全体发明人同意")])]),t._v(" ， 确认该项成果相关信息属实。该项成果转化对我校已签署的合同不会带来任何法律纠纷，对本研究组以后的技术研发、成果申报和推广应用不会产生任何不良影响。如存在关联关系，承诺与关联方的交易符合国家法律法规和学校各项管理规定，保证不从事不公正的关联交易，不损害国家和学校利益。 ")])])])}],s=e("1da1"),i=(e("96cf"),e("ac1f"),e("1276"),e("caad"),e("a434"),e("4de4"),{data:function(){return{authorize:this.$store.state.signed_authorize,patent:this.$route.query,fullscreenLoading:!0,ruleForm:{wid:this.$route.query.wid,transferApplicationFormId:"",certificateNumber:"",hasAgency:"",fzyName:this.$store.state.signed_username,fzyDepartment:this.$store.state.signed_department,fzyPhone:"",fzyGh:this.$store.state.signed_id,contractType:"",contractValidateBegin:null,contractValidateEnd:null,paName:"",paRepresentative:"",paContactPerson:"",paContactPhone:"",paContactEmail:"",paPostalCode:"",paAddress:"",paMailingAddress:"",paField:"",paProvince:"",paProvinceCode:"",paCity:"",paCityCode:"",paDistrict:"",paDistrictCode:"",taxpayerCode:"",associationRelationship:"",pricingMethod:"",evaluationCompany:"",patentPrice:0,distributionResult:"",drawMoneyMethod:"",distributionList:[],pcName:"",pcRepresentative:"",pcContactPerson:"",pcContactPhone:"",pcContactEmail:"",pcAddress:"",pcMailingAddress:"",pcBankName:"",pcBankAccount:"",pcBankAddress:""},contractValidate:"",OAimg:[],patent_info:{zlmc:"",zlqr:"",zldyzzxm:"",pzrq:"",cymd:""},money_tableData:[],fixing:!1,name_options:[],selectname_loading:!1}},created:function(){this.refresh()},methods:{refresh:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function a(){var e,l,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return e=t,console.log(e.patent),l="/application/getPatentInfoByWid?wid="+e.patent.wid,a.next=5,e.request(l,{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){e.patent_info.zlmc=a.data.data.zlmc,e.patent_info.zlqr=a.data.data.zlqr,e.patent_info.zldyzzxm=a.data.data.zldyzzxm,e.patent_info.pzrq=a.data.data.pzrq;var l=[];l=a.data.data.cymd.split(",");for(var r=0;r<l.length-1;r++)e.patent_info.cymd=e.patent_info.cymd+l[r]+"，";e.patent_info.cymd+=l[l.length-1],console.log(a.data.data.cymd.split(","));for(var s=0;s<a.data.data.cymd.split(",").length;s++){var i={};i.value=a.data.data.cymd.split(",")[s],i.label=a.data.data.cymd.split(",")[s],e.name_options.push(i)}}else"数据不存在"!=a.data.data.errMsg&&t.$message.warning(a.data.data.errMsg)})).catch((function(a){console.log(a),t.$message.error("出错了！")}));case 5:r="/application/getTransferApplicationFormByWID?wid="+e.patent.wid,e.request(r,{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){if(null!=a.data.data){switch(e.ruleForm.transferApplicationFormId=a.data.data.transferApplicationFormId,e.ruleForm.certificateNumber=a.data.data.certificateNumber,e.ruleForm.fzyName=a.data.data.fzyName,e.ruleForm.fzyDepartment=a.data.data.fzyDepartment,e.ruleForm.fzyPhone=a.data.data.fzyPhone,e.ruleForm.fzyGh=a.data.data.fzyGh,e.ruleForm.contractType=a.data.data.contractType,["普通实施许可","排他许可","独占许可"].includes(e.ruleForm.contractType)&&(e.ruleForm.contractValidateBegin=a.data.data.contractValidateBegin.split(" ")[0],e.ruleForm.contractValidateEnd=a.data.data.contractValidateEnd.split(" ")[0]),e.ruleForm.paName=a.data.data.paName,e.ruleForm.paRepresentative=a.data.data.paRepresentative,e.ruleForm.paContactPerson=a.data.data.paContactPerson,e.ruleForm.paContactPhone=a.data.data.paContactPhone,e.ruleForm.paContactEmail=a.data.data.paContactEmail,e.ruleForm.paPostalCode=a.data.data.paPostalCode,e.ruleForm.paAddress=a.data.data.paAddress,e.ruleForm.paMailingAddress=a.data.data.paMailingAddress,e.ruleForm.paField=a.data.data.paField,e.ruleForm.paProvince=a.data.data.paProvince,e.ruleForm.paProvinceCode=a.data.data.paProvinceCode,e.ruleForm.paCity=a.data.data.paCity,e.ruleForm.paCityCode=a.data.data.paCityCode,e.ruleForm.paDistrict=a.data.data.paDistrict,e.ruleForm.paDistrictCode=a.data.data.paDistrictCode,e.ruleForm.taxpayerCode=a.data.data.taxpayerCode,a.data.data.associationRelationship){case 0:e.ruleForm.associationRelationship="无关联关系";break;case 1:e.ruleForm.associationRelationship="与受让方的自然人有亲属关系（包括配偶关系、直系血亲关系、三代以内旁系血亲关系或者姻亲关系）";break;case 2:e.ruleForm.associationRelationship="本人或亲属在受让方任职或兼职";break;case 3:e.ruleForm.associationRelationship="本人或亲属（直接或间接、单独或联合）在受让方持有股份，未控股";break;case 4:e.ruleForm.associationRelationship="本人或亲属（直接或间接、单独或联合）在受让方持有股份，并控股";break;case 5:e.ruleForm.associationRelationship="本人或亲属通过协议等形式对受让方实施控制或施加重大影响";break;case 6:e.ruleForm.associationRelationship="其他可能影响交易公正性的关系";break;default:e.ruleForm.associationRelationship="暂无";break}if(e.ruleForm.pricingMethod=a.data.data.pricingMethod,e.ruleForm.evaluationCompany=a.data.data.evaluationCompany,e.ruleForm.patentPrice=parseInt(a.data.data.patentPrice),e.ruleForm.drawMoneyMethod=a.data.data.drawMoneyMethod,"现金奖励"==a.data.data.drawMoneyMethod&&0!=a.data.data.distributionList)for(var l=0;l<a.data.data.distributionList.length;l++){var r={};r.index=l+1,r.amount=a.data.data.distributionList[l].amount,r.idCard=a.data.data.distributionList[l].idCard,r.recipientDepartment=a.data.data.distributionList[l].recipientDepartment,r.recipientGh=a.data.data.distributionList[l].recipientGh,r.recipientName=a.data.data.distributionList[l].recipientName,e.money_tableData.push(r)}e.ruleForm.hasAgency=a.data.data.hasAgency?"有":"无",a.data.data.hasAgency&&(e.ruleForm.pcName=a.data.data.pcName,e.ruleForm.pcRepresentative=a.data.data.pcRepresentative,e.ruleForm.pcContactPerson=a.data.data.pcContactPerson,e.ruleForm.pcContactPhone=a.data.data.pcContactPhone,e.ruleForm.pcContactEmail=a.data.data.pcContactEmail,e.ruleForm.pcAddress=a.data.data.pcAddress,e.ruleForm.pcMailingAddress=a.data.data.pcMailingAddress,e.ruleForm.pcBankName=a.data.data.pcBankName,e.ruleForm.pcBankAccount=a.data.data.pcBankAccount,e.ruleForm.pcBankAddress=a.data.data.pcBankAddress),e.ruleForm.distributionResult=t.getDistributionResult(e.ruleForm.patentPrice)}var s="/file/getOAResultFileName?transferApplicationFormId="+a.data.data.transferApplicationFormId;console.log(s),e.request(s,{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){var l="http://cgzh.njupt.edu.cn/oa/"+a.data.data;e.OAimg.push(l)}else"所属部门审批结果未上传"!=a.data.data.errMsg&&t.$message.error(a.data.data.errMsg)})).catch((function(a){console.log(a),t.$message.error("出错了！")})),t.fullscreenLoading=!1}else t.$message.error(a.data.data.errMsg)})).catch((function(a){console.log(a),t.$message.error("出错了！")}));case 7:case"end":return a.stop()}}),a)})))()},TimeTransfer:function(t){var a=new Date(t),e=a.getFullYear(),l=a.getMonth()+1,r=a.getDate(),s=a.getHours(),i=a.getMinutes(),n=a.getSeconds(),c=e+"-";return l<10&&(c+="0"),c+=l+"-",r<10&&(c+="0"),c+=r+" ",s<10&&(c+="0"),c+=s+":",i<10&&(c+="0"),c+=i+":",n<10&&(c+="0"),c+=n,c},TimeDiffer:function(t){var a=this.TimeTransfer(t),e=new Date,l=new Date(a),r=(e-l)/1e3;parseInt(r/86400);return!0},Pass:function(){var t=this,a=this;this.$confirm("确认通过吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var e="/process/approvalTransferApplication?transferApplicationFormId="+a.ruleForm.transferApplicationFormId;a.request(e,{},"GET",{}).then((function(a){console.log(a),"success"==a.data.status?(t.$message.success("已通过，正在跳转至审批表列表...."),setTimeout((function(){"专利权转让"==t.ruleForm.contractType?t.$router.push({path:"/examing_transfer"}):t.$router.push({path:"/examing_licence"})}),2e3)):t.$message.error(a.data.data.errMsg)})).catch((function(a){console.log(a),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！")}))},Failed:function(){var t=this,a=this;this.$prompt("请填写拒绝原因","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(e){if(console.log(e.value),null==e.value||""==e.value)t.$message({type:"warning",message:"拒绝原因不能为空！"});else{var l="/process/notApprovalTransferApplication?remarks="+e.value+"&transferApplicationFormId="+a.ruleForm.transferApplicationFormId;a.request(l,{},"GET",{}).then((function(a){console.log(a.data),"success"==a.data.status?(t.$message({type:"success",message:"已拒绝，正在跳转至审批表列表...."}),setTimeout((function(){t.$router.push({path:"/examing"})}),2e3)):t.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(a){console.log(a),t.$message({message:"出错了！",type:"error"})}))}})).catch((function(a){console.log(a),t.$message({type:"info",message:"已取消！"})}))},getDistributionResult:function(){var t=this;console.log(this.ruleForm.wid),console.log(this.ruleForm.hasAgency),console.log(this.ruleForm.patentPrice);var a="";switch(this.ruleForm.hasAgency){case"有":a="/distribution/getDistributionResult?hasAgency=true&price="+this.ruleForm.patentPrice+"&wid="+this.ruleForm.wid;break;case"无":a="/distribution/getDistributionResult?hasAgency=false&price="+this.ruleForm.patentPrice+"&wid="+this.ruleForm.wid;break}this.request(a,{},"GET",{}).then((function(a){console.log(a.data),"success"==a.data.status?t.ruleForm.distributionResult=a.data.data.cgwcrPrice:t.$message.error(a.data.data.errMsg)})).catch((function(a){console.log(a),t.$message.error("出错了！")}))},addPerson:function(){this.money_tableData.push({index:this.money_tableData.length+1})},deletePerson:function(t){console.log(t),console.log(this.money_tableData.length),this.money_tableData.splice(t,1);for(var a=t;a<this.money_tableData.length;a++)this.money_tableData[a].index--},recipientSearch:function(t,a){var e=t?this.name_options.filter(this.createFilter(t)):this.name_options;a(e)},createFilter:function(t){return function(a){return 0===a.value.toLowerCase().indexOf(t.toLowerCase())}},confirmDistribution:function(){var t=this,a=!1;if(this.money_tableData.length>0){for(var e=0,l=0;l<this.money_tableData.length;l++)e+=parseInt(this.money_tableData[l].amount);console.log(e,this.ruleForm.patentPrice),e!=this.ruleForm.patentPrice?this.$message.warning("收益分配金额总和应等于价格！"):a=!0}else a=!0;if(a){var r={};r.distributionList=this.money_tableData,r.transferApplicationFormId=this.ruleForm.transferApplicationFormId,console.log(r),this.$confirm("确认修改吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.fullscreenLoading=!0,t.request("/application/updateDistributionScheme",r,"POST").then((function(a){console.log(a.data),t.fullscreenLoading=!1,"success"==a.data.status?(t.$notify.success({title:"成功",content:"修改成功，请稍后！",duration:1e3}),setTimeout((function(){window.location.reload()}),1e3)):(t.$message.error(a.data.data.errMsg),setTimeout((function(){window.location.reload()}),2e3))})).catch((function(a){t.fullscreenLoading=!1,console.log(a),t.$message.error("出错了！")}))})).catch((function(){t.$message.info("已取消操作！")}))}}}}),n=i,c=(e("7ff3"),e("2877")),o=Object(c["a"])(n,l,r,!1,null,null,null);a["default"]=o.exports},"7ff3":function(t,a,e){"use strict";e("e4a3")},"8aa5":function(t,a,e){"use strict";var l=e("6547").charAt;t.exports=function(t,a,e){return a+(e?l(t,a).length:1)}},9263:function(t,a,e){"use strict";var l=e("ad6d"),r=e("9f7f"),s=RegExp.prototype.exec,i=String.prototype.replace,n=s,c=function(){var t=/a/,a=/b*/g;return s.call(t,"a"),s.call(a,"a"),0!==t.lastIndex||0!==a.lastIndex}(),o=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],p=c||d||o;p&&(n=function(t){var a,e,r,n,p=this,_=o&&p.sticky,u=l.call(p),m=p.source,v=0,f=t;return _&&(u=u.replace("y",""),-1===u.indexOf("g")&&(u+="g"),f=String(t).slice(p.lastIndex),p.lastIndex>0&&(!p.multiline||p.multiline&&"\n"!==t[p.lastIndex-1])&&(m="(?: "+m+")",f=" "+f,v++),e=new RegExp("^(?:"+m+")",u)),d&&(e=new RegExp("^"+m+"$(?!\\s)",u)),c&&(a=p.lastIndex),r=s.call(_?e:p,f),_?r?(r.input=r.input.slice(v),r[0]=r[0].slice(v),r.index=p.lastIndex,p.lastIndex+=r[0].length):p.lastIndex=0:c&&r&&(p.lastIndex=p.global?r.index+r[0].length:a),d&&r&&r.length>1&&i.call(r[0],e,(function(){for(n=1;n<arguments.length-2;n++)void 0===arguments[n]&&(r[n]=void 0)})),r}),t.exports=n},"9f7f":function(t,a,e){"use strict";var l=e("d039");function r(t,a){return RegExp(t,a)}a.UNSUPPORTED_Y=l((function(){var t=r("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),a.BROKEN_CARET=l((function(){var t=r("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a434:function(t,a,e){"use strict";var l=e("23e7"),r=e("23cb"),s=e("a691"),i=e("50c4"),n=e("7b0b"),c=e("65f0"),o=e("8418"),d=e("1dde"),p=e("ae40"),_=d("splice"),u=p("splice",{ACCESSORS:!0,0:0,1:2}),m=Math.max,v=Math.min,f=9007199254740991,h="Maximum allowed length exceeded";l({target:"Array",proto:!0,forced:!_||!u},{splice:function(t,a){var e,l,d,p,_,u,g=n(this),y=i(g.length),C=r(t,y),F=arguments.length;if(0===F?e=l=0:1===F?(e=0,l=y-C):(e=F-2,l=v(m(s(a),0),y-C)),y+e-l>f)throw TypeError(h);for(d=c(g,l),p=0;p<l;p++)_=C+p,_ in g&&o(d,p,g[_]);if(d.length=l,e<l){for(p=C;p<y-l;p++)_=p+l,u=p+e,_ in g?g[u]=g[_]:delete g[u];for(p=y;p>y-l+e;p--)delete g[p-1]}else if(e>l)for(p=y-l;p>C;p--)_=p+l-1,u=p+e-1,_ in g?g[u]=g[_]:delete g[u];for(p=0;p<e;p++)g[p+C]=arguments[p+2];return g.length=y-l+e,d}})},ac1f:function(t,a,e){"use strict";var l=e("23e7"),r=e("9263");l({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(t,a,e){"use strict";var l=e("825a");t.exports=function(){var t=l(this),a="";return t.global&&(a+="g"),t.ignoreCase&&(a+="i"),t.multiline&&(a+="m"),t.dotAll&&(a+="s"),t.unicode&&(a+="u"),t.sticky&&(a+="y"),a}},d784:function(t,a,e){"use strict";e("ac1f");var l=e("6eeb"),r=e("d039"),s=e("b622"),i=e("9263"),n=e("9112"),c=s("species"),o=!r((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),p=s("replace"),_=function(){return!!/./[p]&&""===/./[p]("a","$0")}(),u=!r((function(){var t=/(?:)/,a=t.exec;t.exec=function(){return a.apply(this,arguments)};var e="ab".split(t);return 2!==e.length||"a"!==e[0]||"b"!==e[1]}));t.exports=function(t,a,e,p){var m=s(t),v=!r((function(){var a={};return a[m]=function(){return 7},7!=""[t](a)})),f=v&&!r((function(){var a=!1,e=/a/;return"split"===t&&(e={},e.constructor={},e.constructor[c]=function(){return e},e.flags="",e[m]=/./[m]),e.exec=function(){return a=!0,null},e[m](""),!a}));if(!v||!f||"replace"===t&&(!o||!d||_)||"split"===t&&!u){var h=/./[m],g=e(m,""[t],(function(t,a,e,l,r){return a.exec===i?v&&!r?{done:!0,value:h.call(a,e,l)}:{done:!0,value:t.call(e,a,l)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:_}),y=g[0],C=g[1];l(String.prototype,t,y),l(RegExp.prototype,m,2==a?function(t,a){return C.call(t,this,a)}:function(t){return C.call(t,this)})}p&&n(RegExp.prototype[m],"sham",!0)}},e4a3:function(t,a,e){}}]);