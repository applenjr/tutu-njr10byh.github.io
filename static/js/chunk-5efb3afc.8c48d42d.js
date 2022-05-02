(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5efb3afc"],{b3e0:function(e,a,t){"use strict";t.r(a);var o=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"Company_Container"},[t("div",{staticClass:"head-btn"},[t("div",{staticClass:"Search"},[t("el-input",{attrs:{placeholder:"请输入公司名称"},model:{value:e.SearchText,callback:function(a){e.SearchText=a},expression:"SearchText"}},[t("el-button",{attrs:{slot:"append",icon:"el-icon-search"},on:{click:e.search},slot:"append"},[e._v(" 搜索 ")])],1)],1),t("div",{staticClass:"newin_refresh"},[t("div",{staticClass:"refresh"},[t("el-button",{attrs:{icon:"el-icon-plus"},on:{click:function(a){e.plusCompany_dialog=!0}}},[e._v(" 添加公司 ")]),t("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v(" 刷新列表 ")])],1)])]),t("el-table",{directives:[{name:"loading",rawName:"v-loading",value:e.loading,expression:"loading"}],ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[t("el-table-column",{attrs:{type:"expand",label:"详情",width:"55"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[t("el-form-item",{attrs:{label:"公司名称"}},[t("span",[e._v(e._s(a.row.companyName))])]),t("el-form-item",{attrs:{label:"法定代表人"}},[t("span",[e._v(e._s(a.row.companyRepresentative))])]),t("el-form-item",{attrs:{label:"联系人姓名"}},[t("span",[e._v(e._s(a.row.companyContactPerson))])]),t("el-form-item",{attrs:{label:"联系人电话"}},[t("span",[e._v(e._s(a.row.companyContactPhone))])]),t("el-form-item",{attrs:{label:"联系邮箱"}},[t("span",[e._v(e._s(a.row.companyContactEmail))])]),t("el-form-item",{attrs:{label:"邮编"}},[t("span",[e._v(e._s(a.row.companyPostalCode))])]),t("el-form-item",{attrs:{label:"注册地址"}},[t("span",[e._v(e._s(a.row.companyAddress))])]),t("el-form-item",{attrs:{label:"通讯地址"}},[t("span",[e._v(e._s(a.row.companyMailingAddress))])]),t("el-form-item",{attrs:{label:"纳税人识别号"}},[t("span",[e._v(e._s(a.row.taxpayerCode))])]),t("el-form-item",{attrs:{label:"省"}},[t("span",[e._v(e._s(a.row.province))])]),t("el-form-item",{attrs:{label:"市"}},[t("span",[e._v(e._s(a.row.city))])]),t("el-form-item",{attrs:{label:"区"}},[t("span",[e._v(e._s(a.row.district))])])],1)]}}])}),t("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),t("el-table-column",{attrs:{prop:"companyName",label:"公司名称"}}),t("el-table-column",{attrs:{prop:"companyRepresentative",label:"法定代表人",width:"180"}}),t("el-table-column",{attrs:{prop:"companyContactPerson",label:"联系人姓名",width:"180"}}),t("el-table-column",{attrs:{prop:"setting",label:"操作",width:"200"},scopedSlots:e._u([{key:"default",fn:function(a){return[t("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(t){return e.fixCompany(a.$index)}}},[e._v(" 修改 ")]),t("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(t){return e.deleteCompany(a.row)}}},[e._v(" 删除 ")])]}}])})],1),t("div",{staticClass:"PagesCurb"},[t("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":20,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),t("el-dialog",{attrs:{title:"新增公司信息",visible:e.plusCompany_dialog},on:{"update:visible":function(a){e.plusCompany_dialog=a}}},[t("el-form",{ref:"plus_ruleForm",attrs:{model:e.plus_ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[t("el-input",{model:{value:e.plus_ruleForm.companyName,callback:function(a){e.$set(e.plus_ruleForm,"companyName",a)},expression:"plus_ruleForm.companyName"}})],1),t("el-form-item",{attrs:{label:"法定代表人",prop:"companyRepresentative"}},[t("el-input",{model:{value:e.plus_ruleForm.companyRepresentative,callback:function(a){e.$set(e.plus_ruleForm,"companyRepresentative",a)},expression:"plus_ruleForm.companyRepresentative"}})],1),t("el-form-item",{attrs:{label:"联系人姓名",prop:"companyContactPerson"}},[t("el-input",{model:{value:e.plus_ruleForm.companyContactPerson,callback:function(a){e.$set(e.plus_ruleForm,"companyContactPerson",a)},expression:"plus_ruleForm.companyContactPerson"}})],1),t("el-form-item",{attrs:{label:"联系人电话",prop:"companyContactPhone"}},[t("el-input",{attrs:{type:"number"},model:{value:e.plus_ruleForm.companyContactPhone,callback:function(a){e.$set(e.plus_ruleForm,"companyContactPhone",a)},expression:"plus_ruleForm.companyContactPhone"}})],1),t("el-form-item",{attrs:{label:"公司邮箱",prop:"companyContactEmail"}},[t("el-input",{model:{value:e.plus_ruleForm.companyContactEmail,callback:function(a){e.$set(e.plus_ruleForm,"companyContactEmail",a)},expression:"plus_ruleForm.companyContactEmail"}})],1),t("el-form-item",{attrs:{label:"公司邮编",prop:"companyPostalCode"}},[t("el-input",{model:{value:e.plus_ruleForm.companyPostalCode,callback:function(a){e.$set(e.plus_ruleForm,"companyPostalCode",a)},expression:"plus_ruleForm.companyPostalCode"}})],1),t("el-form-item",{attrs:{label:"公司注册地址",prop:"companyAddress"}},[t("el-input",{model:{value:e.plus_ruleForm.companyAddress,callback:function(a){e.$set(e.plus_ruleForm,"companyAddress",a)},expression:"plus_ruleForm.companyAddress"}})],1),t("el-form-item",{attrs:{label:"公司通讯地址",prop:"companyMailingAddress"}},[t("el-input",{model:{value:e.plus_ruleForm.companyMailingAddress,callback:function(a){e.$set(e.plus_ruleForm,"companyMailingAddress",a)},expression:"plus_ruleForm.companyMailingAddress"}})],1),t("el-form-item",{attrs:{label:"纳税人识别号",prop:"taxpayerCode"}},[t("el-input",{model:{value:e.plus_ruleForm.taxpayerCode,callback:function(a){e.$set(e.plus_ruleForm,"taxpayerCode",a)},expression:"plus_ruleForm.taxpayerCode"}})],1),t("el-form-item",{attrs:{label:"行政区划",prop:"province"}},[t("el-cascader",{staticStyle:{width:"100%"},attrs:{size:"large",options:e.options},on:{change:e.plus_regionChange},model:{value:e.plus_selectedregion,callback:function(a){e.plus_selectedregion=a},expression:"plus_selectedregion"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.plusCompany_dialog=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.plus_submitForm("plus_ruleForm")}}},[e._v(" 新 增 ")])],1)],1),t("el-dialog",{attrs:{title:"修改公司信息",visible:e.fixCompany_dialog},on:{"update:visible":function(a){e.fixCompany_dialog=a}}},[t("el-form",{ref:"fix_ruleForm",attrs:{model:e.fix_ruleForm,rules:e.rules,"label-width":"120px"}},[t("el-form-item",{attrs:{label:"公司名称",prop:"companyName"}},[t("el-input",{model:{value:e.fix_ruleForm.companyName,callback:function(a){e.$set(e.fix_ruleForm,"companyName",a)},expression:"fix_ruleForm.companyName"}})],1),t("el-form-item",{attrs:{label:"法定代表人",prop:"companyRepresentative"}},[t("el-input",{model:{value:e.fix_ruleForm.companyRepresentative,callback:function(a){e.$set(e.fix_ruleForm,"companyRepresentative",a)},expression:"fix_ruleForm.companyRepresentative"}})],1),t("el-form-item",{attrs:{label:"联系人姓名",prop:"companyContactPerson"}},[t("el-input",{model:{value:e.fix_ruleForm.companyContactPerson,callback:function(a){e.$set(e.fix_ruleForm,"companyContactPerson",a)},expression:"fix_ruleForm.companyContactPerson"}})],1),t("el-form-item",{attrs:{label:"联系人电话",prop:"companyContactPhone"}},[t("el-input",{attrs:{type:"number"},model:{value:e.fix_ruleForm.companyContactPhone,callback:function(a){e.$set(e.fix_ruleForm,"companyContactPhone",a)},expression:"fix_ruleForm.companyContactPhone"}})],1),t("el-form-item",{attrs:{label:"公司邮箱",prop:"companyContactEmail"}},[t("el-input",{model:{value:e.fix_ruleForm.companyContactEmail,callback:function(a){e.$set(e.fix_ruleForm,"companyContactEmail",a)},expression:"fix_ruleForm.companyContactEmail"}})],1),t("el-form-item",{attrs:{label:"公司邮编",prop:"companyPostalCode"}},[t("el-input",{model:{value:e.fix_ruleForm.companyPostalCode,callback:function(a){e.$set(e.fix_ruleForm,"companyPostalCode",a)},expression:"fix_ruleForm.companyPostalCode"}})],1),t("el-form-item",{attrs:{label:"公司注册地址",prop:"companyAddress"}},[t("el-input",{model:{value:e.fix_ruleForm.companyAddress,callback:function(a){e.$set(e.fix_ruleForm,"companyAddress",a)},expression:"fix_ruleForm.companyAddress"}})],1),t("el-form-item",{attrs:{label:"公司通讯地址",prop:"companyMailingAddress"}},[t("el-input",{model:{value:e.fix_ruleForm.companyMailingAddress,callback:function(a){e.$set(e.fix_ruleForm,"companyMailingAddress",a)},expression:"fix_ruleForm.companyMailingAddress"}})],1),t("el-form-item",{attrs:{label:"纳税人识别号",prop:"taxpayerCode"}},[t("el-input",{model:{value:e.fix_ruleForm.taxpayerCode,callback:function(a){e.$set(e.fix_ruleForm,"taxpayerCode",a)},expression:"fix_ruleForm.taxpayerCode"}})],1),t("el-form-item",{attrs:{label:"行政区划",prop:"province"}},[t("el-cascader",{staticStyle:{width:"100%"},attrs:{size:"large",options:e.options},on:{change:e.fix_regionChange},model:{value:e.fix_selectedregion,callback:function(a){e.fix_selectedregion=a},expression:"fix_selectedregion"}})],1)],1),t("div",{attrs:{slot:"footer"},slot:"footer"},[t("el-button",{on:{click:function(a){e.fixCompany_dialog=!1}}},[e._v("取 消")]),t("el-button",{attrs:{type:"primary"},on:{click:function(a){return e.fix_submitForm("fix_ruleForm")}}},[e._v(" 修 改 ")])],1)],1)],1)},r=[],n=t("1da1"),l=(t("ac1f"),t("1276"),t("96cf"),t("ef6c")),s=t("61f7"),i={data:function(){return{tableData:[],loading:!0,total:0,currentPage:1,Page_url:"",SearchText:"",plusCompany_dialog:!1,plus_ruleForm:{companyName:"",companyRepresentative:"",companyContactPerson:"",companyContactPhone:"",companyContactEmail:"",companyPostalCode:"",companyAddress:"",companyMailingAddress:"",taxpayerCode:"",province:"",city:"",district:"",provinceCode:"",cityCode:"",districtCode:""},fixCompany_dialog:!1,fix_ruleForm:{companyId:"",companyName:"",companyRepresentative:"",companyContactPerson:"",companyContactPhone:"",companyContactEmail:"",companyPostalCode:"",companyAddress:"",companyMailingAddress:"",taxpayerCode:"",province:"",city:"",district:"",provinceCode:"",cityCode:"",districtCode:""},rules:{companyName:[{required:!0,message:"请填写公司名称",trigger:"blur"}],companyRepresentative:[{required:!0,message:"请填写法定代表人",trigger:"blur"}],companyContactPerson:[{required:!0,message:"请填写联系人姓名",trigger:"blur"}],companyContactPhone:[{required:!0,validator:s["c"],trigger:"blur"}],companyContactEmail:[{required:!0,validator:s["b"],trigger:"blur"}],companyPostalCode:[{required:!0,validator:s["d"],trigger:"blur"}],companyAddress:[{required:!0,message:"请填写公司注册地址",trigger:"blur"}],companyMailingAddress:[{required:!0,message:"请填写公司通讯地址",trigger:"blur"}],taxpayerCode:[{required:!0,message:"请填写纳税人识别号",trigger:"blur"}],province:[{required:!0,message:"请选择行政区划",trigger:"change"}]},options:l["regionData"],fix_selectedregion:[],plus_selectedregion:[]}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var t,o;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e,t.loading=!0,t.tableData=[],t.currentPage=1,t.SearchText="",console.log(e.$store.state),o="/company/getCompanyPage?currPage="+t.currentPage+"&size=20",t.Page_url=o,a.next=10,t.get_Company(o);case 10:case"end":return a.stop()}}),a)})))()},get_Company:function(e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=a,t.next=3,o.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),o.loading=!1,"success"==e.data.status){o.total=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var r={};r.index=t+1,r.companyId=e.data.data.records[t].companyId,r.companyName=e.data.data.records[t].companyName,r.companyRepresentative=e.data.data.records[t].companyRepresentative,r.companyContactPerson=e.data.data.records[t].companyContactPerson,r.companyContactPhone=e.data.data.records[t].companyContactPhone,r.companyContactEmail=e.data.data.records[t].companyContactEmail,r.companyPostalCode=e.data.data.records[t].companyPostalCode,r.companyAddress=e.data.data.records[t].companyAddress,r.companyMailingAddress=e.data.data.records[t].companyMailingAddress,r.taxpayerCode=e.data.data.records[t].taxpayerCode,r.province=e.data.data.records[t].province,r.city=e.data.data.records[t].city,r.district=e.data.data.records[t].district,r.provinceCode=e.data.data.records[t].provinceCode,r.cityCode=e.data.data.records[t].cityCode,r.districtCode=e.data.data.records[t].districtCode,o.tableData.push(r)}a.$message({message:"数据已更新！",type:"success"})}else a.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),o.loading=!1,a.$message({message:"出错了！",type:"error"})}));case 3:case"end":return t.stop()}}),t)})))()},handleCurrentPage:function(e){var a=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var o,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return o=a,o.loading=!0,console.log(o.Page_url),r=o.Page_url.split("currPage")[0]+"currPage="+e+"&size"+o.Page_url.split("size")[1],console.log(r),o.tableData=[],o.currentPage=e,t.next=9,o.get_Company(r);case 9:case"end":return t.stop()}}),t)})))()},search:function(){var e=this,a=this;a.loading=!0,a.tableData=[],console.log(a.SearchText);var t="/company/searchCompanyByName?companyName="+a.SearchText;a.request(t,{},"GET",{}).then((function(t){if(console.log(t),a.loading=!1,"success"==t.data.status){for(var o=0;o<t.data.data.length;o++){var r={};r.index=o+1,r.companyId=t.data.data[o].companyId,r.companyName=t.data.data[o].companyName,r.companyRepresentative=t.data.data[o].companyRepresentative,r.companyContactPerson=t.data.data[o].companyContactPerson,r.companyContactPhone=t.data.data[o].companyContactPhone,r.companyContactEmail=t.data.data[o].companyContactEmail,r.companyPostalCode=t.data.data[o].companyPostalCode,r.companyAddress=t.data.data[o].companyAddress,r.companyMailingAddress=t.data.data[o].companyMailingAddress,r.taxpayerCode=t.data.data[o].taxpayerCode,r.province=t.data.data[o].province,r.city=t.data.data[o].city,r.district=t.data.data[o].district,r.provinceCode=t.data.data.records[o].provinceCode,r.cityCode=t.data.data.records[o].cityCode,r.districtCode=t.data.data.records[o].districtCode,a.tableData.push(r)}e.$notify.success({title:"成功",message:"查找成功！"})}else e.$notify.error({title:"错误",message:t.data.data.errMsg})})).catch((function(t){console.log(t),a.loading=!1,e.$message({message:"出错了！",type:"error"})}))},plus_regionChange:function(e){this.plus_ruleForm.province=l["CodeToText"][e[0]],this.plus_ruleForm.city=l["CodeToText"][e[1]],this.plus_ruleForm.district=l["CodeToText"][e[2]],this.plus_ruleForm.provinceCode=e[0],this.plus_ruleForm.cityCode=e[1],this.plus_ruleForm.districtCode=e[2]},plus_submitForm:function(e){var a=this,t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(a.plus_ruleForm),t.request("/company/addCompany",t.plus_ruleForm,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(a.$notify.success({title:"成功",message:"新增成功！"}),t.plusCompany_dialog=!1,t.refresh()):a.$notify.error({title:"错误",message:e.data.data.errMsg})})).catch((function(e){console.log(e),t.loading=!1,a.$message({message:"出错了！",type:"error"})}))}))},fixCompany:function(e){var a=this;a.fix_selectedregion=[],console.log(a.tableData[e]),a.fixCompany_dialog=!0,a.fix_ruleForm.companyId=a.tableData[e].companyId,a.fix_ruleForm.companyName=a.tableData[e].companyName,a.fix_ruleForm.companyRepresentative=a.tableData[e].companyRepresentative,a.fix_ruleForm.companyContactPerson=a.tableData[e].companyContactPerson,a.fix_ruleForm.companyContactPhone=a.tableData[e].companyContactPhone,a.fix_ruleForm.companyContactEmail=a.tableData[e].companyContactEmail,a.fix_ruleForm.companyAddress=a.tableData[e].companyAddress,a.fix_ruleForm.companyMailingAddress=a.tableData[e].companyMailingAddress,a.fix_ruleForm.companyPostalCode=a.tableData[e].companyPostalCode,a.fix_ruleForm.taxpayerCode=a.tableData[e].taxpayerCode,null!=a.tableData[e].province&&(a.fix_selectedregion.push(l["TextToCode"][a.tableData[e].province].code),a.fix_selectedregion.push(l["TextToCode"][a.tableData[e].province][a.tableData[e].city].code),a.fix_selectedregion.push(l["TextToCode"][a.tableData[e].province][a.tableData[e].city][a.tableData[e].district].code))},fix_regionChange:function(e){this.fix_ruleForm.province=l["CodeToText"][e[0]],this.fix_ruleForm.city=l["CodeToText"][e[1]],this.fix_ruleForm.district=l["CodeToText"][e[2]],this.fix_ruleForm.provinceCode=e[0],this.fix_ruleForm.cityCode=e[1],this.fix_ruleForm.districtCode=e[2]},fix_submitForm:function(e){var a=this,t=this;this.$refs[e].validate((function(e){if(!e)return console.log("error submit!!"),!1;console.log(a.fix_ruleForm),t.request("/company/updateCompany",t.fix_ruleForm,"POST",{}).then((function(e){console.log(e),"success"==e.data.status?(a.$notify.success({title:"成功",message:"修改成功！"}),t.fixCompany_dialog=!1,t.refresh()):a.$notify.error({title:"错误",message:e.data.data.errMsg})})).catch((function(e){console.log(e),t.loading=!1,a.$message({message:"出错了！",type:"error"})}))}))},deleteCompany:function(e){var a=this,t=this;console.log(e),this.$confirm("此操作将永久删除该公司, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var o="/company/deleteCompany?distributionProportionId="+e.companyId;t.request(o,{},"GET",{}).then((function(e){console.log(e),"success"==e.data.status?(a.$notify.success({title:"成功",message:"删除成功！"}),t.refresh()):a.$notify.error({title:"错误",message:e.data.data.errMsg})})).catch((function(e){console.log(e),a.$message({message:"出错了！",type:"error"})}))})).catch((function(){a.$notify.info({title:"提示",message:"已取消删除"})}))}}},c=i,m=(t("b94e"),t("2877")),p=Object(m["a"])(c,o,r,!1,null,null,null);a["default"]=p.exports},b94e:function(e,a,t){"use strict";t("c17f")},c17f:function(e,a,t){}}]);