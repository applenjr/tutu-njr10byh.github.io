(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-512ac97a"],{1148:function(e,t,a){"use strict";var r=a("a691"),o=a("1d80");e.exports="".repeat||function(e){var t=String(o(this)),a="",l=r(e);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(a+=t);return a}},1998:function(e,t,a){e.exports=a.p+"static/img/comments.dd60f7d0.png"},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"523b":function(e,t,a){"use strict";a("e951")},"61f4":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"filling_exam_Container"},[r("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{model:e.ruleForm,rules:e.rules,"label-position":"left","label-width":"180px"}},[r("el-form-item",{attrs:{label:"成果名称"}},[e._v(" "+e._s(e.patent.zlmc)+" ")]),r("el-form-item",{attrs:{label:"所有权人"}},[e._v(" "+e._s(e.patent.zlqr)+" ")]),r("el-form-item",{attrs:{label:"成果完成人"}},[e._v(" "+e._s(e.patent.zldyzzxm)+" ")]),r("el-form-item",{attrs:{label:"专利授权日"}},[e._v(" "+e._s(e.patent.pzrq)+" ")]),r("el-form-item",{attrs:{label:"团队负责人",prop:"fzyName"}},[r("el-input",{attrs:{placeholder:"请填写团队负责人"},model:{value:e.ruleForm.fzyName,callback:function(t){e.$set(e.ruleForm,"fzyName",t)},expression:"ruleForm.fzyName"}})],1),r("el-form-item",{attrs:{label:"团队负责人所在单位",prop:"fzyDepartment"}},[r("el-input",{attrs:{placeholder:"请填写团队负责人所在单位"},model:{value:e.ruleForm.fzyDepartment,callback:function(t){e.$set(e.ruleForm,"fzyDepartment",t)},expression:"ruleForm.fzyDepartment"}})],1),r("el-form-item",{attrs:{label:"团队负责人联系方式",prop:"fzyPhone"}},[r("el-input",{attrs:{placeholder:"请填写团队负责人联系方式"},model:{value:e.ruleForm.fzyPhone,callback:function(t){e.$set(e.ruleForm,"fzyPhone",t)},expression:"ruleForm.fzyPhone"}})],1),r("el-form-item",{attrs:{label:"转让方式",prop:"transferMode"}},[r("el-radio-group",{model:{value:e.ruleForm.transferMode,callback:function(t){e.$set(e.ruleForm,"transferMode",t)},expression:"ruleForm.transferMode"}},[r("el-radio",{attrs:{label:"普通许可"}}),r("el-radio",{attrs:{label:"排他许可"}}),r("el-radio",{attrs:{label:"独占许可"}}),r("el-radio",{attrs:{label:"权利转让（申请权或专利权）"}})],1)],1),r("el-form-item",{attrs:{label:"受让方单位名称",prop:"transfereeName"}},[r("el-input",{attrs:{placeholder:"请填写受让方单位名称"},model:{value:e.ruleForm.transfereeName,callback:function(t){e.$set(e.ruleForm,"transfereeName",t)},expression:"ruleForm.transfereeName"}})],1),r("el-form-item",{attrs:{label:"受让方代表人姓名",prop:"transfereeDelegate"}},[r("el-input",{attrs:{placeholder:"请填写受让方代表人姓名"},model:{value:e.ruleForm.transfereeDelegate,callback:function(t){e.$set(e.ruleForm,"transfereeDelegate",t)},expression:"ruleForm.transfereeDelegate"}})],1),r("el-form-item",{attrs:{label:"受让方代表人联系方式",prop:"transfereeDelegatePhone"}},[r("el-input",{attrs:{placeholder:"请填写受让方代表人联系方式"},model:{value:e.ruleForm.transfereeDelegatePhone,callback:function(t){e.$set(e.ruleForm,"transfereeDelegatePhone",t)},expression:"ruleForm.transfereeDelegatePhone"}})],1),r("el-form-item",{attrs:{label:"是否存在关联关系说明",prop:"ifrelation"}},[r("el-radio-group",{model:{value:e.ruleForm.ifrelation,callback:function(t){e.$set(e.ruleForm,"ifrelation",t)},expression:"ruleForm.ifrelation"}},[r("el-radio",{attrs:{label:"有"}}),r("el-radio",{attrs:{label:"无"}})],1)],1),"有"==e.ruleForm.ifrelation?r("el-form-item",{attrs:{label:"关系说明",prop:"associationRelationship"}},[r("el-radio-group",{model:{value:e.ruleForm.associationRelationship,callback:function(t){e.$set(e.ruleForm,"associationRelationship",t)},expression:"ruleForm.associationRelationship"}},[r("el-radio",{attrs:{label:"与受让方的自然人有亲属关系（包括配偶关系、直系血亲关系、三代以内旁系血亲关系或者姻亲关系）"}}),r("br"),r("el-radio",{attrs:{label:"本人或亲属在受让方任职或兼职"}}),r("br"),r("el-radio",{attrs:{label:"本人或亲属（直接或间接、单独或联合）在受让方持有股份，未控股"}}),r("br"),r("el-radio",{attrs:{label:"本人或亲属（直接或间接、单独或联合）在受让方持有股份，并控股"}}),r("br"),r("el-radio",{attrs:{label:"本人或亲属通过协议等形式对受让方实施控制或施加重大影响"}}),r("br"),r("el-radio",{attrs:{label:"其他可能影响交易公正性的关系"}})],1)],1):e._e(),r("el-form-item",{attrs:{label:"选择定价方式",prop:"pricingMethod"}},[r("el-radio-group",{model:{value:e.ruleForm.pricingMethod,callback:function(t){e.$set(e.ruleForm,"pricingMethod",t)},expression:"ruleForm.pricingMethod"}},[r("el-radio",{attrs:{label:"协议定价"}}),r("el-radio",{attrs:{label:"评估作价"}}),r("el-radio",{attrs:{label:"挂牌交易"}}),r("el-radio",{attrs:{label:"拍卖"}}),"评估作价"==e.ruleForm.pricingMethod?r("el-input",{staticStyle:{"margin-top":"8px"},attrs:{placeholder:"请填写评估公司"},model:{value:e.ruleForm.evaluationCompany,callback:function(t){e.$set(e.ruleForm,"evaluationCompany",t)},expression:"ruleForm.evaluationCompany"}}):e._e()],1)],1),r("el-form-item",{attrs:{label:"定价估价",prop:"evaluation"}},[r("el-input",{attrs:{placeholder:"请填写定价估价（单位：万元）",type:"number"},model:{value:e.ruleForm.evaluation,callback:function(t){e.$set(e.ruleForm,"evaluation",t)},expression:"ruleForm.evaluation"}})],1),"协议定价"==e.ruleForm.pricingMethod?r("el-form-item",{attrs:{label:"协议定价价格形成过程",prop:"formationProcess"}},[r("el-radio-group",{model:{value:e.ruleForm.formationProcess,callback:function(t){e.$set(e.ruleForm,"formationProcess",t)},expression:"ruleForm.formationProcess"}},[r("el-radio",{attrs:{label:"参考前期成本投入，与受让方协商形成"}}),r("br"),r("el-radio",{attrs:{label:"参考未来收益预期，与受让方协商形成"}}),r("br"),r("el-radio",{attrs:{label:"综合参考前期成本投入与未来收益预期，与受让方协商形成"}}),r("br"),r("el-radio",{attrs:{label:"其他"}}),"其他"==e.ruleForm.formationProcess?r("el-input",{staticStyle:{"margin-top":"8px"},attrs:{placeholder:"其他情况请注明"},model:{value:e.ruleForm.additionalInstruction,callback:function(t){e.$set(e.ruleForm,"additionalInstruction",t)},expression:"ruleForm.additionalInstruction"}}):e._e()],1)],1):e._e(),r("el-form-item",{attrs:{label:"合同签订日期",prop:"contractSigningDate"}},[r("el-date-picker",{attrs:{type:"date",placeholder:"选择合同签订日期","value-format":"yyyy-MM-dd"},model:{value:e.ruleForm.contractSigningDate,callback:function(t){e.$set(e.ruleForm,"contractSigningDate",t)},expression:"ruleForm.contractSigningDate"}})],1),r("el-form-item",{attrs:{label:"有无中介",prop:"agency"}},[r("el-input",{attrs:{placeholder:"有，填写中介名称；无，填写无"},model:{value:e.ruleForm.agency,callback:function(t){e.$set(e.ruleForm,"agency",t)},expression:"ruleForm.agency"}})],1),r("el-form-item",{attrs:{label:"评估费",prop:"assessmentFee"}},[r("el-input",{attrs:{type:"number",placeholder:"评估费，没有填0（单位：万元）"},model:{value:e.ruleForm.assessmentFee,callback:function(t){e.$set(e.ruleForm,"assessmentFee",t)},expression:"ruleForm.assessmentFee"}})],1),r("el-form-item",{attrs:{label:"拍卖佣金",prop:"auctionCommission"}},[r("el-input",{attrs:{type:"number",placeholder:"拍卖佣金，没有填0（单位：万元）"},model:{value:e.ruleForm.auctionCommission,callback:function(t){e.$set(e.ruleForm,"auctionCommission",t)},expression:"ruleForm.auctionCommission"}})],1),r("el-form-item",{attrs:{label:"税金",prop:"tax"}},[r("el-input",{attrs:{type:"number",placeholder:"税金（普票和专票均为3%），没有填0（单位：万元）"},model:{value:e.ruleForm.tax,callback:function(t){e.$set(e.ruleForm,"tax",t)},expression:"ruleForm.tax"}})],1),r("el-form-item",{attrs:{label:"合同总价",prop:"totalContractPrice"}},[r("el-input",{attrs:{type:"number",placeholder:"合同总价（单位：万元）"},model:{value:e.ruleForm.totalContractPrice,callback:function(t){e.$set(e.ruleForm,"totalContractPrice",t)},expression:"ruleForm.totalContractPrice"}})],1),r("el-form-item",{attrs:{label:"净收益合计"}},[e._v(" "+e._s(e.ruleForm.totalContractPrice-e.ruleForm.assessmentFee-e.ruleForm.auctionCommission-e.ruleForm.tax)+" 万元 "),r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"primary"},on:{click:function(t){return e.distribution()}}},[e._v(" 计算收益分配 ")])],1),r("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[r("el-table-column",{attrs:{prop:"fp",label:""}}),r("el-table-column",{attrs:{prop:"fpbl",label:"分配比例"}}),r("el-table-column",{attrs:{prop:"fpje",label:"分配金额（万元）"}})],1),e._l(e.distributionLists,(function(t,a){return r("el-form-item",{key:t.key,staticStyle:{"margin-top":"20px"},attrs:{label:"收益分配方案"+(a+1)}},[r("el-input",{staticStyle:{width:"20%"},attrs:{placeholder:"姓名"},model:{value:t.recipientName,callback:function(a){e.$set(t,"recipientName",a)},expression:"distributionLists.recipientName"}}),r("el-input",{staticStyle:{width:"20%","margin-left":"10px"},attrs:{placeholder:"工号"},model:{value:t.recipientGh,callback:function(a){e.$set(t,"recipientGh",a)},expression:"distributionLists.recipientGh"}}),r("el-input",{staticStyle:{width:"20%","margin-left":"10px"},attrs:{placeholder:"单位"},model:{value:t.recipientDepartment,callback:function(a){e.$set(t,"recipientDepartment",a)},expression:"distributionLists.recipientDepartment"}}),r("el-input",{staticStyle:{width:"20%","margin-left":"10px"},attrs:{type:"number",placeholder:"金额（单位：万元）"},model:{value:t.amount,callback:function(a){e.$set(t,"amount",a)},expression:"distributionLists.amount"}}),r("el-button",{staticStyle:{"margin-left":"10px"},attrs:{type:"danger"},on:{click:function(a){return a.preventDefault(),e.removeDistributionList(t)}}},[e._v("删除")])],1)})),r("el-form-item",[r("el-button",{staticStyle:{"margin-top":"10px"},attrs:{type:"primary"},on:{click:e.addDistributionList}},[e._v("新增收益分配方案")])],1),r("div",{staticClass:"comments"},[r("img",{attrs:{src:a("1998"),alt:""}})]),r("el-form-item",{staticClass:"buttons"},[r("el-button",{on:{click:e.back}},[e._v("返回")]),"产学研未通过"!=e.patent.state?r("el-button",{attrs:{type:"primary"},on:{click:e.save_Form}},[e._v(" 保存审批 ")]):e._e(),"产学研未通过"==e.patent.state?r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.submitForm("ruleForm","protect")}}},[e._v(" 重新提交 ")]):e._e(),"产学研未通过"!=e.patent.state?r("el-button",{attrs:{type:"success",disabled:e.submitDisabled},on:{click:function(t){return e.submitForm("ruleForm","submit")}}},[e._v(" 提交审批 ")]):e._e(),r("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],2)],1)},o=[],l=(a("a434"),a("b680"),{data:function(){return{patent:this.$route.query,ruleForm:{fzyName:"",fzyDepartment:"",fzyPhone:"",transferMode:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",ifrelation:"",associationRelationship:"",pricingMethod:"协议定价",evaluationCompany:"",evaluation:"",formationProcess:"参考前期成本投入，与受让方协商形成",additionalInstruction:"",contractSigningDate:"",agency:"",assessmentFee:"",auctionCommission:"",tax:"",totalContractPrice:""},rules:{fzyName:[{required:!0,message:"请填写负责人姓名",trigger:"blur"}],fzyDepartment:[{required:!0,message:"请填写负责人单位",trigger:"blur"}],fzyPhone:[{required:!0,message:"请填写负责人联系方式",trigger:"blur"}],transferMode:[{required:!0,message:"请选择转化方式",trigger:"change"}],transfereeDelegate:[{required:!0,message:"请填写受让方代表人姓名",trigger:"blur"}],transfereeName:[{required:!0,message:"请填写受让方单位名称",trigger:"blur"}],transfereeDelegatePhone:[{required:!0,message:"请填写受让方代表人联系方式",trigger:"blur"}],ifrelation:[{required:!0,message:"请选择有无关联关系说明",trigger:"change"}],pricingMethod:[{required:!0,message:"请选择定价方式",trigger:"change"}],evaluation:[{required:!0,message:"请填写估价",trigger:"blur"}],formationProcess:[{required:!0,message:"请选择协议定价价格形成过程",trigger:"change"}],agency:[{required:!0,message:"请填写中介",trigger:"blur"}],assessmentFee:[{required:!0,message:"请填写评估费",trigger:"blur"}],auctionCommission:[{required:!0,message:"请填写拍卖佣金",trigger:"blur"}],tax:[{required:!0,message:"请填写税金",trigger:"blur"}],totalContractPrice:[{required:!0,message:"请填写合同总价",trigger:"blur"}],contractSigningDate:[{required:!0,message:"请选择日期",trigger:"change"}]},willpost:{fzyName:"",fzyDepartment:"",fzyPhone:"",transferMode:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",associationRelationship:"",pricingMethod:"协议定价",evaluationCompany:"",evaluation:"",formationProcess:"参考前期成本投入，与受让方协商形成",additionalInstruction:"",contractSigningDate:"",agency:"",assessmentFee:"",auctionCommission:"",tax:"",totalContractPrice:"",distributionList:null,wid:"",transferApplicationFormId:null},distributionLists:[{recipientName:"",recipientGh:"",recipientDepartment:"",amount:""}],tableData:[{fp:"成果完成人",fpbl:"",fpje:""},{fp:"学校",fpbl:"",fpje:""},{fp:"中介",fpbl:"",fpje:""},{fp:"净收益合计",fpbl:"100%",fpje:""}],submitDisabled:!1}},created:function(){var e=this;console.log(e.patent);var t="/application/getTransferApplicationFormByWID?wid="+e.patent.wid;e.request(t,{},"GET",{}).then((function(t){console.log(t),null!=t.data.data&&(e.ruleForm.fzyName=t.data.data.fzyName,e.ruleForm.fzyDepartment=t.data.data.fzyDepartment,e.ruleForm.fzyPhone=t.data.data.fzyPhone,e.ruleForm.transferMode=t.data.data.transferMode,e.ruleForm.transfereeDelegate=t.data.data.transfereeDelegate,e.ruleForm.transfereeName=t.data.data.transfereeName,e.ruleForm.transfereeDelegatePhone=t.data.data.transfereeDelegatePhone,"无关联关系"==t.data.data.associationRelationship?e.ruleForm.ifrelation="无":e.ruleForm.ifrelation="有",e.ruleForm.associationRelationship=t.data.data.associationRelationship,e.ruleForm.pricingMethod=t.data.data.pricingMethod,e.ruleForm.evaluationCompany=t.data.data.evaluationCompany,e.ruleForm.evaluation=t.data.data.evaluation,e.ruleForm.formationProcess=t.data.data.formationProcess,e.ruleForm.additionalInstruction=t.data.data.additionalInstruction,e.ruleForm.contractSigningDate=t.data.data.contractSigningDate,e.ruleForm.agency=t.data.data.agency,e.ruleForm.assessmentFee=t.data.data.assessmentFee,e.ruleForm.auctionCommission=t.data.data.auctionCommission,e.ruleForm.tax=t.data.data.tax,e.ruleForm.totalContractPrice=t.data.data.totalContractPrice,e.distributionLists=t.data.data.distributionList,e.willpost.transferApplicationFormId=t.data.data.transferApplicationFormId)}))},methods:{back:function(){this.$router.push({path:"/patents"})},save_Form:function(){var e=this,t=this;t.willpost.fzyName=t.ruleForm.fzyName,t.willpost.fzyDepartment=t.ruleForm.fzyDepartment,t.willpost.fzyPhone=t.ruleForm.fzyPhone,t.willpost.transferMode=t.ruleForm.transferMode,t.willpost.transfereeDelegate=t.ruleForm.transfereeDelegate,t.willpost.transfereeName=t.ruleForm.transfereeName,t.willpost.transfereeDelegatePhone=t.ruleForm.transfereeDelegatePhone,"有"==t.ruleForm.ifrelation?t.willpost.associationRelationship=t.ruleForm.associationRelationship:"无"==t.ruleForm.ifrelation&&(t.willpost.associationRelationship="无关联关系"),t.willpost.pricingMethod=t.ruleForm.pricingMethod,t.willpost.evaluationCompany=t.ruleForm.evaluationCompany,t.willpost.evaluation=t.ruleForm.evaluation,t.willpost.formationProcess=t.ruleForm.formationProcess,t.willpost.additionalInstruction=t.ruleForm.additionalInstruction,t.willpost.contractSigningDate=t.ruleForm.contractSigningDate,t.willpost.agency=t.ruleForm.agency,t.willpost.assessmentFee=t.ruleForm.assessmentFee,t.willpost.auctionCommission=t.ruleForm.auctionCommission,t.willpost.tax=t.ruleForm.tax,t.willpost.totalContractPrice=t.ruleForm.totalContractPrice,t.willpost.wid=t.patent.wid,console.log(t.distributionLists),1!=t.distributionLists.length||""!=t.distributionLists[0].recipientName&&""!=t.distributionLists[0].recipientGh&&""!=t.distributionLists[0].recipientDepartment&&""!=t.distributionLists[0].amount?(0==t.distributionLists.length?t.willpost.distributionList=null:t.willpost.distributionList=t.distributionLists,console.log(t.willpost),t.request("/application/saveTransferApplicationForm",t.willpost,"POST",{}).then((function(t){console.log(t),"success"==t.data.status?e.$message({type:"success",message:"保存成功！"}):e.$message({type:"error",message:t.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))):this.$message({type:"warning",message:"请将收入分配方案填写完整，如果没有，请删除！"})},submitForm:function(e){var t=this,a=this;this.$refs[e].validate((function(e){e?(a.willpost.fzyName=a.ruleForm.fzyName,a.willpost.fzyDepartment=a.ruleForm.fzyDepartment,a.willpost.fzyPhone=a.ruleForm.fzyPhone,a.willpost.transferMode=a.ruleForm.transferMode,a.willpost.transfereeDelegate=a.ruleForm.transfereeDelegate,a.willpost.transfereeName=a.ruleForm.transfereeName,a.willpost.transfereeDelegatePhone=a.ruleForm.transfereeDelegatePhone,"有"==a.ruleForm.ifrelation?a.willpost.associationRelationship=a.ruleForm.associationRelationship:"无"==a.ruleForm.ifrelation&&(a.willpost.associationRelationship="无关联关系"),a.willpost.pricingMethod=a.ruleForm.pricingMethod,a.willpost.evaluationCompany=a.ruleForm.evaluationCompany,a.willpost.evaluation=a.ruleForm.evaluation,a.willpost.formationProcess=a.ruleForm.formationProcess,a.willpost.additionalInstruction=a.ruleForm.additionalInstruction,a.willpost.contractSigningDate=a.ruleForm.contractSigningDate,a.willpost.agency=a.ruleForm.agency,a.willpost.assessmentFee=a.ruleForm.assessmentFee,a.willpost.auctionCommission=a.ruleForm.auctionCommission,a.willpost.tax=a.ruleForm.tax,a.willpost.totalContractPrice=a.ruleForm.totalContractPrice,a.willpost.distributionList=a.distributionLists,a.willpost.wid=a.patent.wid,console.log(a.willpost),console.log(a.willpost),t.$confirm("确认提交吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){a.request("/application/saveTransferApplicationForm",a.willpost,"POST",{}).then((function(e){if(console.log(e),"fail"==e.data.status)t.$message({message:e.data.data.errMsg,type:"error"});else if("success"==e.data.status){t.$message({type:"success",message:"保存成功，等待提交！"});var r="/application/submitTransferApplicationForm?processCreatorDepartment="+a.$store.state.signed_department+"&processCreatorGh="+a.$store.state.signed_id+"&processCreatorName="+a.$store.state.signed_username+"&transferApplicationFormId="+e.data.data.transferApplicationFormId;a.request(r,{},"GET",{}).then((function(e){console.log(e),"fail"==e.data.status?t.$message({type:"error",message:e.data.data.errMsg}):"success"==e.data.status&&(a.submitDisabled=!0,t.$message({type:"success",message:"提交成功，即将跳转至专利列表！"}),setTimeout((function(){t.$router.push({path:"/patents"})}),1200))})).catch((function(e){console.log(e),t.$message({type:"error",message:"出错了！"})}))}})).catch((function(e){console.log(e),t.$message({type:"error",message:"出错了！"})}))})).catch((function(){t.$message({type:"info",message:"已取消！"})}))):t.$message({type:"error",message:"请将表单填写完整！"})}))},resetForm:function(e){this.$refs[e].resetFields()},removeDistributionList:function(e){var t=this.distributionLists.indexOf(e);-1!==t&&this.distributionLists.splice(t,1)},addDistributionList:function(){this.distributionLists.push({amount:"",recipientDepartment:"",recipientGh:"",recipientName:""})},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),l=t.getHours(),i=t.getMinutes(),s=t.getSeconds(),n=a+"-";return r<10&&(n+="0"),n+=r+"-",o<10&&(n+="0"),n+=o+" ",l<10&&(n+="0"),n+=l+":",i<10&&(n+="0"),n+=i+":",s<10&&(n+="0"),n+=s,n},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),o=(a-r)/1e3,l=parseInt(o/86400);return l<1095},distribution:function(){var e=this,t=e.ruleForm.totalContractPrice-e.ruleForm.assessmentFee-e.ruleForm.auctionCommission-e.ruleForm.tax;if(console.log(e.ruleForm),console.log(t),e.tableData[3].fpje=t,console.log(e.TimeDiffer(e.patent.pzrq)),e.TimeDiffer(e.patent.pzrq))switch(!0){case t>=50:console.log(t),e.tableData[0].fpbl="90%",e.tableData[0].fpje=(.9*t).toFixed(2),e.tableData[1].fpbl="5%",e.tableData[1].fpje=(.05*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t>10&&t<50:e.tableData[0].fpbl="85%",e.tableData[0].fpje=(.85*t).toFixed(2),e.tableData[1].fpbl="10%",e.tableData[1].fpje=(.1*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t<=10:e.tableData[0].fpbl="80%",e.tableData[0].fpje=(.8*t).toFixed(2),e.tableData[1].fpbl="15%",e.tableData[1].fpje=(.15*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;default:break}else switch(!0){case t>=50:console.log(t),e.tableData[0].fpbl="80%",e.tableData[0].fpje=(.8*t).toFixed(2),e.tableData[1].fpbl="15%",e.tableData[1].fpje=(.15*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t>10&&t<50:e.tableData[0].fpbl="75%",e.tableData[0].fpje=(.75*t).toFixed(2),e.tableData[1].fpbl="20%",e.tableData[1].fpje=(.2*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t<=10:e.tableData[0].fpbl="70%",e.tableData[0].fpje=(.7*t).toFixed(2),e.tableData[1].fpbl="25%",e.tableData[1].fpje=(.25*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;default:break}}}}),i=l,s=(a("523b"),a("2877")),n=Object(s["a"])(i,r,o,!1,null,null,null);t["default"]=n.exports},a434:function(e,t,a){"use strict";var r=a("23e7"),o=a("23cb"),l=a("a691"),i=a("50c4"),s=a("7b0b"),n=a("65f0"),u=a("8418"),m=a("1dde"),c=a("ae40"),p=m("splice"),f=c("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,b=Math.min,g=9007199254740991,F="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var a,r,m,c,p,f,h=s(this),y=i(h.length),D=o(e,y),v=arguments.length;if(0===v?a=r=0:1===v?(a=0,r=y-D):(a=v-2,r=b(d(l(t),0),y-D)),y+a-r>g)throw TypeError(F);for(m=n(h,r),c=0;c<r;c++)p=D+c,p in h&&u(m,c,h[p]);if(m.length=r,a<r){for(c=D;c<y-r;c++)p=c+r,f=c+a,p in h?h[f]=h[p]:delete h[f];for(c=y;c>y-r+a;c--)delete h[c-1]}else if(a>r)for(c=y-r;c>D;c--)p=c+r-1,f=c+a-1,p in h?h[f]=h[p]:delete h[f];for(c=0;c<a;c++)h[c+D]=arguments[c+2];return h.length=y-r+a,m}})},b680:function(e,t,a){"use strict";var r=a("23e7"),o=a("a691"),l=a("408a"),i=a("1148"),s=a("d039"),n=1..toFixed,u=Math.floor,m=function(e,t,a){return 0===t?a:t%2===1?m(e,t-1,a*e):m(e*e,t/2,a)},c=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},p=n&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!s((function(){n.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,a,r,s,n=l(this),p=o(e),f=[0,0,0,0,0,0],d="",b="0",g=function(e,t){var a=-1,r=t;while(++a<6)r+=e*f[a],f[a]=r%1e7,r=u(r/1e7)},F=function(e){var t=6,a=0;while(--t>=0)a+=f[t],f[t]=u(a/e),a=a%e*1e7},h=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var a=String(f[e]);t=""===t?a:t+i.call("0",7-a.length)+a}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(n!=n)return"NaN";if(n<=-1e21||n>=1e21)return String(n);if(n<0&&(d="-",n=-n),n>1e-21)if(t=c(n*m(2,69,1))-69,a=t<0?n*m(2,-t,1):n/m(2,t,1),a*=4503599627370496,t=52-t,t>0){g(0,a),r=p;while(r>=7)g(1e7,0),r-=7;g(m(10,r,1),0),r=t-1;while(r>=23)F(1<<23),r-=23;F(1<<r),g(1,1),F(2),b=h()}else g(0,a),g(1<<-t,0),b=h()+i.call("0",p);return p>0?(s=b.length,b=d+(s<=p?"0."+i.call("0",p-s)+b:b.slice(0,s-p)+"."+b.slice(s-p))):b=d+b,b}})},e951:function(e,t,a){}}]);