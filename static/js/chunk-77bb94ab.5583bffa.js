(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-77bb94ab"],{1148:function(e,t,a){"use strict";var r=a("a691"),o=a("1d80");e.exports="".repeat||function(e){var t=String(o(this)),a="",l=r(e);if(l<0||l==1/0)throw RangeError("Wrong number of repetitions");for(;l>0;(l>>>=1)&&(t+=t))1&l&&(a+=t);return a}},"408a":function(e,t,a){var r=a("c6b6");e.exports=function(e){if("number"!=typeof e&&"Number"!=r(e))throw TypeError("Incorrect invocation");return+e}},"523b":function(e,t,a){"use strict";a("e951")},"61f4":function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"filling_exam_Container"},[a("el-form",{ref:"ruleForm",staticClass:"ruleForm",attrs:{model:e.ruleForm,"label-position":"left","label-width":"180px"}},[a("el-form-item",{attrs:{label:"成果名称"}},[e._v(" "+e._s(e.patent.zlmc)+" ")]),a("el-form-item",{attrs:{label:"所有权人"}},[e._v(" "+e._s(e.patent.zlqr)+" ")]),a("el-form-item",{attrs:{label:"成果完成人"}},[e._v(" "+e._s(e.patent.zldyzzxm)+" ")]),a("el-form-item",{attrs:{label:"专利授权日"}},[e._v(" "+e._s(e.patent.pzrq.split(" ")[0])+" ")]),a("el-form-item",{attrs:{label:"团队负责人"}},[e._v(" "+e._s(e.ruleForm.fzyName)+" ")]),a("el-form-item",{attrs:{label:"团队负责人所在单位"}},[e._v(" "+e._s(e.ruleForm.fzyDepartment)+" ")]),a("el-form-item",{attrs:{label:"团队负责人联系方式"}},[e._v(" "+e._s(e.ruleForm.fzyPhone)+" ")]),a("el-form-item",{attrs:{label:"合同签订日期"}},[e._v(" "+e._s(e.ruleForm.contractSigningDate)+" ")]),a("el-form-item",{attrs:{label:"转让方式",prop:"transferMode"}},[a("el-radio-group",{model:{value:e.ruleForm.transferMode,callback:function(t){e.$set(e.ruleForm,"transferMode",t)},expression:"ruleForm.transferMode"}},[a("el-radio",{attrs:{label:"普通许可"}}),a("el-radio",{attrs:{label:"排他许可"}}),a("el-radio",{attrs:{label:"独占许可"}}),a("el-radio",{attrs:{label:"转让（申请权或专利权）"}})],1)],1),a("el-form-item",{attrs:{label:"受让方单位名称",prop:"transfereeName"}},[a("el-input",{attrs:{placeholder:"请填写受让方单位名称"},model:{value:e.ruleForm.transfereeName,callback:function(t){e.$set(e.ruleForm,"transfereeName",t)},expression:"ruleForm.transfereeName"}})],1),a("el-form-item",{attrs:{label:"受让方法人姓名",prop:"transfereeDelegate"}},[a("el-input",{attrs:{placeholder:"请填写受让方法人姓名"},model:{value:e.ruleForm.transfereeDelegate,callback:function(t){e.$set(e.ruleForm,"transfereeDelegate",t)},expression:"ruleForm.transfereeDelegate"}})],1),a("el-form-item",{attrs:{label:"受让方法人联系方式",prop:"transfereeDelegatePhone"}},[a("el-input",{attrs:{placeholder:"请填写受让方法人联系方式"},model:{value:e.ruleForm.transfereeDelegatePhone,callback:function(t){e.$set(e.ruleForm,"transfereeDelegatePhone",t)},expression:"ruleForm.transfereeDelegatePhone"}})],1),a("el-form-item",{attrs:{label:"是否存在关联关系说明",prop:"ifrelation"}},[a("el-radio-group",{on:{change:e.relation},model:{value:e.ruleForm.ifrelation,callback:function(t){e.$set(e.ruleForm,"ifrelation",t)},expression:"ruleForm.ifrelation"}},[a("el-radio",{attrs:{label:"有"}}),a("el-radio",{attrs:{label:"无"}})],1)],1),"有"==e.ruleForm.ifrelation?a("el-form-item",{attrs:{label:"关系说明",prop:"associationRelationship"}},[a("el-radio-group",{model:{value:e.ruleForm.associationRelationship,callback:function(t){e.$set(e.ruleForm,"associationRelationship",t)},expression:"ruleForm.associationRelationship"}},[a("el-radio",{attrs:{label:"与受让方的自然人有亲属关系（包括配偶关系、直系血亲关系、三代以内旁系血亲关系或者姻亲关系）"}}),a("br"),a("el-radio",{attrs:{label:"本人或亲属在受让方任职或兼职"}}),a("br"),a("el-radio",{attrs:{label:"本人或亲属（直接或间接、单独或联合）在受让方持有股份，未控股"}}),a("br"),a("el-radio",{attrs:{label:"本人或亲属（直接或间接、单独或联合）在受让方持有股份，并控股"}}),a("br"),a("el-radio",{attrs:{label:"本人或亲属通过协议等形式对受让方实施控制或施加重大影响"}}),a("br"),a("el-radio",{attrs:{label:"其他可能影响交易公正性的关系"}})],1)],1):e._e(),a("el-form-item",{attrs:{label:"选择定价方式",prop:"pricingMethod"}},[a("el-radio-group",{attrs:{disabled:"有"==e.ruleForm.ifrelation},on:{change:e.pricing_method},model:{value:e.ruleForm.pricingMethod,callback:function(t){e.$set(e.ruleForm,"pricingMethod",t)},expression:"ruleForm.pricingMethod"}},[a("el-radio",{attrs:{label:"协议定价"}}),a("el-radio",{attrs:{label:"评估作价"}}),a("el-radio",{attrs:{label:"挂牌交易"}}),a("el-radio",{attrs:{label:"拍卖"}})],1)],1),"评估作价"==e.ruleForm.pricingMethod?a("el-form-item",{attrs:{label:"评估公司",prop:"evaluationCompany"}},[a("el-input",{attrs:{placeholder:"请填写评估公司"},model:{value:e.ruleForm.evaluationCompany,callback:function(t){e.$set(e.ruleForm,"evaluationCompany",t)},expression:"ruleForm.evaluationCompany"}})],1):e._e(),"协议定价"==e.ruleForm.pricingMethod?a("el-form-item",{attrs:{label:"协议定价价格形成过程",prop:"formationProcess"}},[a("el-radio-group",{model:{value:e.ruleForm.formationProcess,callback:function(t){e.$set(e.ruleForm,"formationProcess",t)},expression:"ruleForm.formationProcess"}},[a("el-radio",{attrs:{label:"参考前期成本投入，与受让方协商形成"}}),a("br"),a("el-radio",{attrs:{label:"参考未来收益预期，与受让方协商形成"}}),a("br"),a("el-radio",{attrs:{label:"综合参考前期成本投入与未来收益预期，与受让方协商形成"}}),a("br"),a("el-radio",{attrs:{label:"其他"}}),"其他"==e.ruleForm.formationProcess?a("el-input",{staticStyle:{"margin-top":"8px"},attrs:{placeholder:"其他情况请注明"},model:{value:e.ruleForm.additionalInstruction,callback:function(t){e.$set(e.ruleForm,"additionalInstruction",t)},expression:"ruleForm.additionalInstruction"}}):e._e()],1)],1):e._e(),a("el-form-item",{attrs:{label:"有无中介"}},[a("el-radio-group",{model:{value:e.ruleForm.ifagency,callback:function(t){e.$set(e.ruleForm,"ifagency",t)},expression:"ruleForm.ifagency"}},[a("el-radio",{attrs:{label:"有"}}),a("el-radio",{attrs:{label:"无"}})],1)],1),"有"==e.ruleForm.ifagency?a("el-form-item",{attrs:{label:"中介"}},[a("el-input",{attrs:{placeholder:"请填写中介名称"},model:{value:e.ruleForm.agency,callback:function(t){e.$set(e.ruleForm,"agency",t)},expression:"ruleForm.agency"}})],1):e._e(),"协议定价"==e.ruleForm.pricingMethod?a("el-form-item",{attrs:{label:"拟交易价格（万元）"}},[a("el-input",{attrs:{type:"number",placeholder:"拟交易价格（万元）"},model:{value:e.ruleForm.pricingMethodPrice,callback:function(t){e.$set(e.ruleForm,"pricingMethodPrice",t)},expression:"ruleForm.pricingMethodPrice"}})],1):e._e(),"评估作价"==e.ruleForm.pricingMethod?a("el-form-item",{attrs:{label:"评估费（万元）"}},[a("el-input",{attrs:{type:"number",placeholder:"评估费（单位：万元）"},model:{value:e.ruleForm.pricingMethodPrice,callback:function(t){e.$set(e.ruleForm,"pricingMethodPrice",t)},expression:"ruleForm.pricingMethodPrice"}})],1):e._e(),"挂牌交易"==e.ruleForm.pricingMethod?a("el-form-item",{attrs:{label:"挂牌交易价格（万元）"}},[a("el-input",{attrs:{type:"number",placeholder:"挂牌成交价格（单位：万元）"},model:{value:e.ruleForm.pricingMethodPrice,callback:function(t){e.$set(e.ruleForm,"pricingMethodPrice",t)},expression:"ruleForm.pricingMethodPrice"}})],1):e._e(),"拍卖"==e.ruleForm.pricingMethod?a("el-form-item",{attrs:{label:"拍卖价格（万元）"}},[a("el-input",{attrs:{type:"number",placeholder:"拍卖价格（单位：万元）"},model:{value:e.ruleForm.pricingMethodPrice,callback:function(t){e.$set(e.ruleForm,"pricingMethodPrice",t)},expression:"ruleForm.pricingMethodPrice"}})],1):e._e(),a("el-form-item",{attrs:{label:"合同总价（万元）",prop:"evaluation"}},[a("el-input",{attrs:{placeholder:"请填写合同总价（单位：万元）",type:"number"},model:{value:e.ruleForm.totalContractPrice,callback:function(t){e.$set(e.ruleForm,"totalContractPrice",t)},expression:"ruleForm.totalContractPrice"}})],1),a("el-form-item",{attrs:{label:"资金去向",prop:"money_go"}},[a("el-radio-group",{model:{value:e.ruleForm.money_go,callback:function(t){e.$set(e.ruleForm,"money_go",t)},expression:"ruleForm.money_go"}},[a("el-radio",{attrs:{label:"横向基金"}}),a("el-radio",{attrs:{label:"现金奖励"}})],1)],1),a("el-form-item",{staticClass:"buttons"},[a("el-button",{on:{click:e.back}},[e._v("返回")]),"产学研未通过"!=e.patent.state?a("el-button",{attrs:{type:"primary"},on:{click:e.save_Form}},[e._v(" 保存审批 ")]):e._e(),"产学研未通过"==e.patent.state?a("el-button",{attrs:{type:"primary"},on:{click:e.save_Form}},[e._v(" 重新提交 ")]):e._e(),"产学研未通过"!=e.patent.state?a("el-button",{attrs:{type:"success",disabled:e.submitDisabled},on:{click:function(t){return e.submitForm("ruleForm","submit")}}},[e._v(" 提交审批 ")]):e._e(),a("el-button",{attrs:{type:"danger"},on:{click:function(t){return e.resetForm("ruleForm")}}},[e._v("重置")])],1)],1)],1)},o=[],l=(a("a434"),a("b680"),{data:function(){return{patent:this.$route.query,ruleForm:{fzyName:this.$store.state.signed_username,fzyDepartment:this.$store.state.signed_department,fzyPhone:this.$store.state.signed_email,transferMode:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",ifrelation:"",associationRelationship:"",pricingMethod:"协议定价",pricingMethodPrice:0,evaluationCompany:"",formationProcess:"参考前期成本投入，与受让方协商形成",additionalInstruction:"",contractSigningDate:(new Date).getFullYear()+((new Date).getMonth()+1<10?"-0":"-")+((new Date).getMonth()+1)+"-"+(new Date).getDate(),ifagency:"",agency:"",totalContractPrice:0},willpost_save:{fzyName:"",fzyDepartment:"",fzyPhone:"",transferMode:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",associationRelationship:"",pricingMethod:"协议定价",pricingMethodPrice:0,evaluationCompany:"",formationProcess:"参考前期成本投入，与受让方协商形成",additionalInstruction:"",contractSigningDate:"",agency:"",totalContractPrice:0,wid:"",transferApplicationFormId:null},willpost_submit:{fzyName:"",fzyDepartment:"",fzyPhone:"",transferMode:"",transfereeDelegate:"",transfereeName:"",transfereeDelegatePhone:"",associationRelationship:"",pricingMethod:"协议定价",pricingMethodPrice:0,evaluationCompany:"",formationProcess:"参考前期成本投入，与受让方协商形成",additionalInstruction:"",contractSigningDate:"",agency:"",totalContractPrice:0,wid:"",transferApplicationFormId:null,processCreatorName:this.$store.state.signed_username,processCreatorGh:this.$store.state.signed_id,processCreatorDepartment:this.$store.state.signed_department},tableData:[{fp:"成果完成人",fpbl:"",fpje:""},{fp:"学校",fpbl:"",fpje:""},{fp:"中介",fpbl:"",fpje:""},{fp:"净收益合计",fpbl:"100%",fpje:""}],submitDisabled:!1}},created:function(){var e=this;console.log(e.patent),console.log(this.$store.state);var t="/application/getTransferApplicationFormSaveByWID?wid="+e.patent.wid;e.request(t,{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status&&(e.ruleForm.fzyName=t.data.data.fzyName,e.ruleForm.fzyDepartment=t.data.data.fzyDepartment,e.ruleForm.fzyPhone=t.data.data.fzyPhone,e.ruleForm.transferMode=t.data.data.transferMode,e.ruleForm.transfereeDelegate=t.data.data.transfereeDelegate,e.ruleForm.transfereeName=t.data.data.transfereeName,e.ruleForm.transfereeDelegatePhone=t.data.data.transfereeDelegatePhone,"无关联关系"==t.data.data.associationRelationship?(e.ruleForm.ifrelation="无",e.ruleForm.pricingMethod=t.data.data.pricingMethod):(e.ruleForm.ifrelation="有",e.ruleForm.pricingMethod="评估作价"),e.ruleForm.associationRelationship=t.data.data.associationRelationship,e.ruleForm.pricingMethodPrice=t.data.data.pricingMethodPrice,e.ruleForm.evaluationCompany=t.data.data.evaluationCompany,e.ruleForm.formationProcess=t.data.data.formationProcess,e.ruleForm.additionalInstruction=t.data.data.additionalInstruction,e.ruleForm.contractSigningDate=t.data.data.contractSigningDate,"无"==t.data.data.agency?e.ruleForm.ifagency="无":e.ruleForm.ifagency="有",e.ruleForm.agency=t.data.data.agency,e.ruleForm.totalContractPrice=t.data.data.totalContractPrice,e.willpost_save.transferApplicationFormId=t.data.data.transferApplicationFormId,e.willpost_submit.transferApplicationFormId=t.data.data.transferApplicationFormId)}))},methods:{relation:function(e){this.ruleForm.pricingMethod="有"==e?"评估作价":"协议定价"},pricing_method:function(){this.ruleForm.assessmentFee=0,this.ruleForm.auctionCommission=0,this.ruleForm.tax=0},back:function(){this.$router.push({path:"/patents"})},save_Form:function(){var e=this,t=this;t.willpost_save.fzyName=t.ruleForm.fzyName,t.willpost_save.fzyDepartment=t.ruleForm.fzyDepartment,t.willpost_save.fzyPhone=t.ruleForm.fzyPhone,t.willpost_save.transferMode=t.ruleForm.transferMode,t.willpost_save.transfereeDelegate=t.ruleForm.transfereeDelegate,t.willpost_save.transfereeName=t.ruleForm.transfereeName,t.willpost_save.transfereeDelegatePhone=t.ruleForm.transfereeDelegatePhone,"有"==t.ruleForm.ifrelation?(t.willpost_save.associationRelationship=t.ruleForm.associationRelationship,t.willpost_save.pricingMethod="评估作价"):"无"==t.ruleForm.ifrelation&&(t.willpost_save.associationRelationship="无关联关系",t.willpost_save.pricingMethod=t.ruleForm.pricingMethod),t.willpost_save.pricingMethodPrice=t.ruleForm.pricingMethodPrice,t.willpost_save.evaluationCompany=t.ruleForm.evaluationCompany,t.willpost_save.formationProcess=t.ruleForm.formationProcess,t.willpost_save.additionalInstruction=t.ruleForm.additionalInstruction,t.willpost_save.contractSigningDate=t.ruleForm.contractSigningDate,t.willpost_save.agency=t.ruleForm.agency,"有"==t.ruleForm.ifagency?t.willpost_save.agency=t.ruleForm.agency:"无"==t.ruleForm.ifagency&&(t.willpost_save.agency="无"),t.willpost_save.totalContractPrice=t.ruleForm.totalContractPrice,t.willpost_save.wid=t.patent.wid,console.log(t.willpost_save),t.request("/application/saveTransferApplicationForm",t.willpost_save,"POST",{}).then((function(t){console.log(t),"success"==t.data.status?(e.$message({type:"success",message:"保存成功，即将跳转至专利列表！"}),setTimeout((function(){e.$router.push({path:"/patents"})}),1200)):e.$message({type:"error",message:t.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))},submitForm:function(){var e=this,t=this;t.willpost_submit.fzyName=t.ruleForm.fzyName,t.willpost_submit.fzyDepartment=t.ruleForm.fzyDepartment,t.willpost_submit.fzyPhone=t.ruleForm.fzyPhone,t.willpost_submit.transferMode=t.ruleForm.transferMode,t.willpost_submit.transfereeDelegate=t.ruleForm.transfereeDelegate,t.willpost_submit.transfereeName=t.ruleForm.transfereeName,t.willpost_submit.transfereeDelegatePhone=t.ruleForm.transfereeDelegatePhone,"有"==t.ruleForm.ifrelation?(t.willpost_submit.associationRelationship=t.ruleForm.associationRelationship,t.willpost_submit.pricingMethod="评估作价"):"无"==t.ruleForm.ifrelation&&(t.willpost_submit.associationRelationship="无关联关系",t.willpost_submit.pricingMethod=t.ruleForm.pricingMethod),t.willpost_submit.pricingMethodPrice=t.ruleForm.pricingMethodPrice,t.willpost_submit.evaluationCompany=t.ruleForm.evaluationCompany,t.willpost_submit.formationProcess=t.ruleForm.formationProcess,t.willpost_submit.additionalInstruction=t.ruleForm.additionalInstruction,t.willpost_submit.contractSigningDate=t.ruleForm.contractSigningDate,t.willpost_submit.agency=t.ruleForm.agency,"有"==t.ruleForm.ifagency?t.willpost_submit.agency=t.ruleForm.agency:"无"==t.ruleForm.ifagency&&(t.willpost_submit.agency="无"),t.willpost_submit.totalContractPrice=t.ruleForm.totalContractPrice,t.willpost_submit.wid=t.patent.wid,console.log(t.willpost_submit),this.$confirm("确认提交吗?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){t.request("/application/submitTransferApplicationForm",t.willpost_submit,"POST",{}).then((function(a){console.log(a.data),"success"==a.data.status?(t.submitDisabled=!0,e.$message({type:"success",message:"提交成功，即将跳转至专利列表！"}),setTimeout((function(){e.$router.push({path:"/patents"})}),1200)):e.$message({type:"error",message:a.data.data.errMsg})})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))})).catch((function(){e.$message({type:"info",message:"已取消！"})}))},resetForm:function(e){this.$refs[e].resetFields()},removeDistributionList:function(e){var t=this.distributionLists.indexOf(e);-1!==t&&this.distributionLists.splice(t,1)},addDistributionList:function(){this.distributionLists.push({amount:"",recipientDepartment:"",recipientGh:"",recipientName:""})},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,o=t.getDate(),l=t.getHours(),i=t.getMinutes(),n=t.getSeconds(),s=a+"-";return r<10&&(s+="0"),s+=r+"-",o<10&&(s+="0"),s+=o+" ",l<10&&(s+="0"),s+=l+":",i<10&&(s+="0"),s+=i+":",n<10&&(s+="0"),s+=n,s},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),o=(a-r)/1e3,l=parseInt(o/86400);return l<1095},distribution:function(){var e=this,t=e.ruleForm.evaluation-e.ruleForm.assessmentFee-e.ruleForm.auctionCommission-e.ruleForm.tax;if(console.log(e.ruleForm),console.log(t),e.tableData[3].fpje=t,console.log(e.TimeDiffer(e.patent.pzrq)),e.TimeDiffer(e.patent.pzrq))switch(!0){case t>=50:console.log(t),e.tableData[0].fpbl="90%",e.tableData[0].fpje=(.9*t).toFixed(2),e.tableData[1].fpbl="5%",e.tableData[1].fpje=(.05*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t>10&&t<50:e.tableData[0].fpbl="85%",e.tableData[0].fpje=(.85*t).toFixed(2),e.tableData[1].fpbl="10%",e.tableData[1].fpje=(.1*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t<=10:e.tableData[0].fpbl="80%",e.tableData[0].fpje=(.8*t).toFixed(2),e.tableData[1].fpbl="15%",e.tableData[1].fpje=(.15*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;default:break}else switch(!0){case t>=50:console.log(t),e.tableData[0].fpbl="80%",e.tableData[0].fpje=(.8*t).toFixed(2),e.tableData[1].fpbl="15%",e.tableData[1].fpje=(.15*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t>10&&t<50:e.tableData[0].fpbl="75%",e.tableData[0].fpje=(.75*t).toFixed(2),e.tableData[1].fpbl="20%",e.tableData[1].fpje=(.2*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;case t<=10:e.tableData[0].fpbl="70%",e.tableData[0].fpje=(.7*t).toFixed(2),e.tableData[1].fpbl="25%",e.tableData[1].fpje=(.25*t).toFixed(2),e.tableData[2].fpbl="5%",e.tableData[2].fpje=(.05*t).toFixed(2);break;default:break}}}}),i=l,n=(a("523b"),a("2877")),s=Object(n["a"])(i,r,o,!1,null,null,null);t["default"]=s.exports},a434:function(e,t,a){"use strict";var r=a("23e7"),o=a("23cb"),l=a("a691"),i=a("50c4"),n=a("7b0b"),s=a("65f0"),c=a("8418"),m=a("1dde"),u=a("ae40"),p=m("splice"),f=u("splice",{ACCESSORS:!0,0:0,1:2}),d=Math.max,b=Math.min,g=9007199254740991,F="Maximum allowed length exceeded";r({target:"Array",proto:!0,forced:!p||!f},{splice:function(e,t){var a,r,m,u,p,f,h=n(this),y=i(h.length),D=o(e,y),_=arguments.length;if(0===_?a=r=0:1===_?(a=0,r=y-D):(a=_-2,r=b(d(l(t),0),y-D)),y+a-r>g)throw TypeError(F);for(m=s(h,r),u=0;u<r;u++)p=D+u,p in h&&c(m,u,h[p]);if(m.length=r,a<r){for(u=D;u<y-r;u++)p=u+r,f=u+a,p in h?h[f]=h[p]:delete h[f];for(u=y;u>y-r+a;u--)delete h[u-1]}else if(a>r)for(u=y-r;u>D;u--)p=u+r-1,f=u+a-1,p in h?h[f]=h[p]:delete h[f];for(u=0;u<a;u++)h[u+D]=arguments[u+2];return h.length=y-r+a,m}})},b680:function(e,t,a){"use strict";var r=a("23e7"),o=a("a691"),l=a("408a"),i=a("1148"),n=a("d039"),s=1..toFixed,c=Math.floor,m=function(e,t,a){return 0===t?a:t%2===1?m(e,t-1,a*e):m(e*e,t/2,a)},u=function(e){var t=0,a=e;while(a>=4096)t+=12,a/=4096;while(a>=2)t+=1,a/=2;return t},p=s&&("0.000"!==8e-5.toFixed(3)||"1"!==.9.toFixed(0)||"1.25"!==1.255.toFixed(2)||"1000000000000000128"!==(0xde0b6b3a7640080).toFixed(0))||!n((function(){s.call({})}));r({target:"Number",proto:!0,forced:p},{toFixed:function(e){var t,a,r,n,s=l(this),p=o(e),f=[0,0,0,0,0,0],d="",b="0",g=function(e,t){var a=-1,r=t;while(++a<6)r+=e*f[a],f[a]=r%1e7,r=c(r/1e7)},F=function(e){var t=6,a=0;while(--t>=0)a+=f[t],f[t]=c(a/e),a=a%e*1e7},h=function(){var e=6,t="";while(--e>=0)if(""!==t||0===e||0!==f[e]){var a=String(f[e]);t=""===t?a:t+i.call("0",7-a.length)+a}return t};if(p<0||p>20)throw RangeError("Incorrect fraction digits");if(s!=s)return"NaN";if(s<=-1e21||s>=1e21)return String(s);if(s<0&&(d="-",s=-s),s>1e-21)if(t=u(s*m(2,69,1))-69,a=t<0?s*m(2,-t,1):s/m(2,t,1),a*=4503599627370496,t=52-t,t>0){g(0,a),r=p;while(r>=7)g(1e7,0),r-=7;g(m(10,r,1),0),r=t-1;while(r>=23)F(1<<23),r-=23;F(1<<r),g(1,1),F(2),b=h()}else g(0,a),g(1<<-t,0),b=h()+i.call("0",p);return p>0?(n=b.length,b=d+(n<=p?"0."+i.call("0",p-n)+b:b.slice(0,n-p)+"."+b.slice(n-p))):b=d+b,b}})},e951:function(e,t,a){}}]);