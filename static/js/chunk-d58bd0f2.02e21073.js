(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-d58bd0f2"],{1276:function(t,e,a){"use strict";var n=a("d784"),o=a("44e7"),s=a("825a"),i=a("1d80"),r=a("4840"),c=a("8aa5"),l=a("50c4"),p=a("14c3"),d=a("9263"),v=a("d039"),_=[].push,u=Math.min,m=4294967295,f=!v((function(){return!RegExp(m,"y")}));n("split",2,(function(t,e,a){var n;return n="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(t,a){var n=String(i(this)),s=void 0===a?m:a>>>0;if(0===s)return[];if(void 0===t)return[n];if(!o(t))return e.call(n,t,s);var r,c,l,p=[],v=(t.ignoreCase?"i":"")+(t.multiline?"m":"")+(t.unicode?"u":"")+(t.sticky?"y":""),u=0,f=new RegExp(t.source,v+"g");while(r=d.call(f,n)){if(c=f.lastIndex,c>u&&(p.push(n.slice(u,r.index)),r.length>1&&r.index<n.length&&_.apply(p,r.slice(1)),l=r[0].length,u=c,p.length>=s))break;f.lastIndex===r.index&&f.lastIndex++}return u===n.length?!l&&f.test("")||p.push(""):p.push(n.slice(u)),p.length>s?p.slice(0,s):p}:"0".split(void 0,0).length?function(t,a){return void 0===t&&0===a?[]:e.call(this,t,a)}:e,[function(e,a){var o=i(this),s=void 0==e?void 0:e[t];return void 0!==s?s.call(e,o,a):n.call(String(o),e,a)},function(t,o){var i=a(n,t,this,o,n!==e);if(i.done)return i.value;var d=s(t),v=String(this),_=r(d,RegExp),g=d.unicode,h=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(f?"y":"g"),b=new _(f?d:"^(?:"+d.source+")",h),x=void 0===o?m:o>>>0;if(0===x)return[];if(0===v.length)return null===p(b,v)?[v]:[];var y=0,C=0,I=[];while(C<v.length){b.lastIndex=f?C:0;var w,S=p(b,f?v:v.slice(C));if(null===S||(w=u(l(b.lastIndex+(f?0:C)),v.length))===y)C=c(v,C,g);else{if(I.push(v.slice(y,C)),I.length===x)return I;for(var E=1;E<=S.length-1;E++)if(I.push(S[E]),I.length===x)return I;C=y=w}}return I.push(v.slice(y)),I}]}),!f)},"14c3":function(t,e,a){var n=a("c6b6"),o=a("9263");t.exports=function(t,e){var a=t.exec;if("function"===typeof a){var s=a.call(t,e);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==n(t))throw TypeError("RegExp#exec called on incompatible receiver");return o.call(t,e)}},"4c60":function(t,e,a){"use strict";a("a47d")},"7e24":function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"filling_contract_Container"},[a("div",{staticClass:"word page1"},[t._m(0),a("div",{staticClass:"contrac_title"},[t._v("技术转让（专利权）合同")]),a("div",{staticClass:"project_info"},[a("div",{staticClass:"project"},[t._v(" 项目名称："),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.projectName,expression:"contractInfo.projectName"}],staticStyle:{width:"340px"},attrs:{type:"text"},domProps:{value:t.contractInfo.projectName},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"projectName",e.target.value)}}})]),a("div",{staticClass:"project"},[t._v(" 受让方（甲方）："),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paName,expression:"contractInfo.paName"}],staticStyle:{width:"270px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paName},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paName",e.target.value)}}})]),t._m(1)]),a("div",{staticClass:"signed_info"},[t._m(2),a("div",{staticClass:"signed"},[t._v(" 签订时间： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.contractSigningDate,expression:"contractInfo.contractSigningDate"}],staticStyle:{width:"335px"},attrs:{type:"text"},domProps:{value:t.contractInfo.contractSigningDate},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"contractSigningDate",e.target.value)}}})]),a("div",{staticClass:"signed"},[t._v("有效时间：")])]),a("div",{staticClass:"bottom_info"},[t._v("中华人民共和国科学技术部印制")])]),t._m(3),a("div",{staticClass:"word page3"},[a("div",{staticClass:"page3_title"},[t._v("技术转让（专利权）合同")]),a("div",{staticClass:"page3_part1"},[a("div",{staticClass:"page3_blank"},[t._v(" 受让方（甲方）："),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paName,expression:"contractInfo.paName"}],staticStyle:{width:"533px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paName},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paName",e.target.value)}}})]),a("div",{staticClass:"page3_blank"},[t._v(" 公司注册地址："),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paAddress,expression:"contractInfo.paAddress"}],staticStyle:{width:"553px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paAddress},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paAddress",e.target.value)}}})]),a("div",{staticClass:"page3_blank_two"},[a("div",{staticClass:"page3_blank"},[t._v(" 法定代表人： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paRepresentative,expression:"contractInfo.paRepresentative"}],staticStyle:{width:"200px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paRepresentative},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paRepresentative",e.target.value)}}})]),a("div",{staticClass:"page3_blank"},[t._v(" 项目联系人： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactPerson,expression:"contractInfo.paContactPerson"}],staticStyle:{width:"200px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paContactPerson},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paContactPerson",e.target.value)}}})])]),a("div",{staticClass:"page3_blank_two page3_blank_two_part2"},[a("div",{staticClass:"page3_blank"},[t._v(" 电 话："),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactPhone,expression:"contractInfo.paContactPhone"}],staticStyle:{width:"260px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paContactPhone},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paContactPhone",e.target.value)}}})]),a("div",{staticClass:"page3_blank"},[t._v(" 电子信箱："),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactEmail,expression:"contractInfo.paContactEmail"}],attrs:{type:"text"},domProps:{value:t.contractInfo.paContactEmail},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paContactEmail",e.target.value)}}})])]),a("div",{staticClass:"page3_blank address"},[t._v(" 通讯地址："),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paMailingAddress,expression:"contractInfo.paMailingAddress"}],staticStyle:{width:"593px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paMailingAddress},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paMailingAddress",e.target.value)}}})])]),t._m(4)]),a("div",{staticClass:"word page4"},[a("div",{staticClass:"page4_top_info"},[t._v(" 本合同乙方将其拥有的 "),a("span",[t._v(" "+t._s(t.patents_name))]),t._v(" 的专利权转让甲方，甲方受让并支付相应的转让价款。双方经过平等协商，在真实、充分地表达各自意愿的基础上，根据《中华人民共和国民法典》的规定，达成如下协议，并由双方共同恪守。 ")]),a("div",{staticClass:"page4_step step1"},[a("div",[a("span",[t._v("第一条：")]),t._v("本合同转让的专利权： "),a("el-button",{attrs:{icon:"el-icon-plus"},on:{click:t.choose_Patant}},[t._v("选择专利 ")])],1),a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],ref:"multipleTable",staticClass:"tablestyle",attrs:{id:"outTable",data:t.patent_Data,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称",width:"150"}}),a("el-table-column",{attrs:{prop:"zlh",label:"专利号"}}),a("el-table-column",{attrs:{prop:"pzrq",label:"授权日期"}}),a("el-table-column",{attrs:{prop:"zldyzzxm",label:"发明人"}}),a("el-table-column",{attrs:{prop:"patentPrice",label:"转让价格（万元）",width:"150"}})],1)],1),a("div",{staticClass:"page4_step step2"},[t._m(5),a("p",[t._v(" 1．乙方实施本项专利权的状况 ( 时间、地点、方式和规模 )： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.pbImplPatentRight,expression:"contractInfo.pbImplPatentRight"}],attrs:{type:"text",placeholder:"若没有，填“无”"},domProps:{value:t.contractInfo.pbImplPatentRight},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"pbImplPatentRight",e.target.value)}}})]),a("p",[t._v(" 2．乙方许可他人使用本项专利权的状况（时间、地点、方式和规模）： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.pbLicensedPatentRight,expression:"contractInfo.pbLicensedPatentRight"}],attrs:{type:"text",placeholder:"若没有，填“无”"},domProps:{value:t.contractInfo.pbLicensedPatentRight},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"pbLicensedPatentRight",e.target.value)}}})]),t._m(6)]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),a("div",{staticClass:"page4_step step11"},[a("div",[a("span",[t._v("第十一条：")]),t._v(" 甲方向乙方支付该项专利权转让的价款及支付方式如下： "),a("p",[t._v(" 1. 专利权的转让价款总额为： "),a("span",{staticStyle:{background:"yellow"}},[t._v(" "+t._s(t.contractInfo.totalTransferAmount)+" ")]),t._v(" 万元整。其中，技术秘密转让价款为 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 人民币零圆整 ")]),t._v(" 。 ")]),a("p",[t._v(" 2. 专利权的转让价款由甲方 "),a("el-radio-group",{staticStyle:{"text-indent":"0"},attrs:{size:"medium"},model:{value:t.contractInfo.paymentMethod,callback:function(e){t.$set(t.contractInfo,"paymentMethod",e)},expression:"contractInfo.paymentMethod"}},[a("el-radio-button",{attrs:{label:"一次"}}),a("el-radio-button",{attrs:{label:"分期"}}),a("el-radio-button",{attrs:{label:"提成"}})],1),t._v(" （一次、分期或提成）支付乙方。 ")],1),a("p",[t._v("具体支付方式和时间如下：")]),t._m(15),t._m(16),a("p",[t._v(" （3） "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 转账时注明 "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.projectName,expression:"contractInfo.projectName"}],attrs:{type:"text"},domProps:{value:t.contractInfo.projectName},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"projectName",e.target.value)}}}),t._v(" 专利转让费 ")])]),a("p",[t._v("乙方开户银行名称、账户和帐号为：")]),t._m(17),t._m(18),t._m(19),a("br"),a("p",[t._v("甲方开票信息：")]),a("p",[t._v(" 企业名称： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.invoicingEnterprise,expression:"contractInfo.invoicingEnterprise"}],staticStyle:{width:"240px"},attrs:{type:"text"},domProps:{value:t.contractInfo.invoicingEnterprise},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"invoicingEnterprise",e.target.value)}}})]),a("p",[t._v(" 纳税人识别号： "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.taxpayerCode,expression:"contractInfo.taxpayerCode"}],staticStyle:{width:"200px"},attrs:{type:"text"},domProps:{value:t.contractInfo.taxpayerCode},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"taxpayerCode",e.target.value)}}})]),a("p",[t._v(" 3. 双方确定，甲方以实施研究开发成果所产生的利益提成支付乙方的研究开发经费和报酬的，乙方有权以 无 方式查阅甲方有关的会计账目。 ")]),a("p",[t._v(" 4. 双方确定，在专利转让过程中产生的手续费以及转让后产生维护费等费用均由甲方承担。 ")])])]),t._m(20),t._m(21),t._m(22),a("div",{staticClass:"page4_step step15"},[a("div",[a("span",[t._v("第十五条：")]),t._v(" 双方确定，在本合同有效期内，甲方指定 "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactPerson,expression:"contractInfo.paContactPerson"}],staticStyle:{width:"100px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paContactPerson},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"paContactPerson",e.target.value)}}}),t._v(" 为甲方项目联系人，乙方指定 "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.pbContactPerson,expression:"contractInfo.pbContactPerson"}],staticStyle:{width:"100px"},attrs:{type:"text"},domProps:{value:t.contractInfo.pbContactPerson},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"pbContactPerson",e.target.value)}}}),t._v(" 为乙方项目联系人。项目联系人承担以下责任： "),t._m(23),t._m(24),a("p",[t._v(" 一方变更项目联系人的，应当及时通知另一方。未及时通知并影响本合同履行或造成损失的，应承担相应的责任。 ")])])]),t._m(25),a("div",{staticClass:"page4_step step17"},[a("div",[a("span",[t._v("第十七条：")]),t._v(" 双方因履行本合同而发生的争议，应协商、调解解决。协商、调解不成的，确定按以下第 "),a("el-radio-group",{staticStyle:{"text-indent":"0"},attrs:{size:"medium"},model:{value:t.contractInfo.disputeSettlementMethod,callback:function(e){t.$set(t.contractInfo,"disputeSettlementMethod",e)},expression:"contractInfo.disputeSettlementMethod"}},[a("el-radio-button",{attrs:{label:"1"}}),a("el-radio-button",{attrs:{label:"2"}})],1),t._v(" 种方式处理： "),a("p",[t._v(" 1. 提交 "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.arbitrationCommission,expression:"contractInfo.arbitrationCommission"}],attrs:{type:"text",disabled:2==t.contractInfo.disputeSettlementMethod,placeholder:"仲裁委员会名称"},domProps:{value:t.contractInfo.arbitrationCommission},on:{input:function(e){e.target.composing||t.$set(t.contractInfo,"arbitrationCommission",e.target.value)}}}),t._v("仲裁委员会仲裁； ")]),t._m(26)],1)]),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),a("br"),a("div",{staticClass:"page4_step"},[t._v("以下为盖章页。")])]),t._m(32),a("div",{staticClass:"bottom_buttons"},[a("el-button",{on:{click:t.back}},[t._v("返 回")]),a("el-button",{attrs:{type:"primary",disabled:""},on:{click:t.preview}},[t._v("预览合同")]),a("el-button",{attrs:{type:"success"},on:{click:t.create}},[t._v("创建合同")])],1),a("el-dialog",{attrs:{title:"选择专利",visible:t.choose_Dialog,width:"60%"},on:{"update:visible":function(e){t.choose_Dialog=e}}},[a("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.choose_loading,expression:"choose_loading"}],attrs:{data:t.choose_Data},on:{"selection-change":t.handleSelectionChange}},[a("el-table-column",{attrs:{type:"selection",width:"55"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"zldyzzxm",label:"作者",width:"150"}}),a("el-table-column",{attrs:{prop:"contractSigningDate",label:"合同签订日期",width:"180"}})],1),a("span",{attrs:{slot:"footer"},slot:"footer"},[a("div",{staticClass:"dialog_footer"},[a("div",{staticClass:"buttons"},[a("el-button",{on:{click:function(e){t.choose_Dialog=!1}}},[t._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.confirm_choose()}}},[t._v("确 定 ")])],1)])])],1)],1)},o=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"contrac_number"},[a("span",[t._v("合同编号：")]),t._v(" 暂无 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"project"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 让与方（乙方）： "),a("div",{staticStyle:{width:"270px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 南京邮电大学 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signed"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 签订地点： "),a("div",{staticStyle:{width:"340px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 中国南京 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"word page2"},[a("div",{staticClass:"filling_explain"},[t._v("填 写 说 明")]),a("div",{staticClass:"explain"},[a("p",[t._v(" 一、本合同为中华人民共和国科学技术部印制的技术转让（专利权）合同示范文本，各技术合同认定登记机构可推介技术合同当事人参照使用。 ")]),a("p",[t._v(" 二、本合同书适用于一方当事人（让与方、原专利权人）将其发明创造专利权永久转让受让方，受让方支付约定价款而订立的合同。 ")]),a("p",[t._v(" 三、签约一方为多个当事人的，可按各自在合同关系中的作用等，在“委托方”、“受托方”项下（增页）分别排列为共同受让人或共同让与人。 ")]),a("p",[t._v(" 四、本合同书未尽事项，可由当事人附页另行约定，并作为本合同的组成部分。 ")]),a("p",[t._v(" 五、当事人使用本合同书时约定无需填写的条款，应在该条款处注明“无”等字样。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page3_part2"},[a("div",{staticClass:"page3_blank"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 让与方（乙方）： "),a("div",{staticStyle:{width:"533px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 南京邮电大学 ")])])]),a("div",{staticClass:"page3_blank address"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 住 所 地： "),a("div",{staticStyle:{width:"603px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 江苏省南京市亚东新城区文苑路9号 ")])])]),a("div",{staticClass:"page3_blank_two"},[a("div",{staticClass:"page3_blank"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 法定代表人： "),a("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 叶美兰 ")])])]),a("div",{staticClass:"page3_blank"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 项目联系人： "),a("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 魏昕 ")])])])]),a("div",{staticClass:"page3_blank_two page3_blank_two_part2"},[a("div",{staticClass:"page3_blank"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 电 话： "),a("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 025-85866885 ")])])]),a("div",{staticClass:"page3_blank"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 电子信箱： "),a("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" jszy@njupt.edu.cn ")])])])]),a("div",{staticClass:"page3_blank address"},[a("div",{staticStyle:{display:"flex"}},[t._v(" 通讯地址： "),a("div",{staticStyle:{width:"594px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 江苏省南京市亚东新城区文苑路9号南邮行政北楼402室 ")])])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("span",[t._v("第二条：")]),t._v(" 乙方在本合同签署前实施或许可本项专利权的状况如下： ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 3．本合同生效后，乙方有义务在 "),a("span",[t._v("十")]),t._v(" 日内将本项专利权转让的状况告知被许可使用本发明创造的当事人。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step3"},[a("div",[a("span",[t._v("第三条：")]),t._v(" 甲方应在本合同生效后，保证原专利实施许可合同的履行。乙方在原专利实施许可合同中享有的权利和义务，自本合同生效之日起，由甲方承受。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step4"},[a("div",[a("span",[t._v("第四条：")]),t._v(" 本合同生效后乙方继续实施本项专利的，按以下约定办："),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无")]),t._v("。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step5"},[a("div",[a("span",[t._v("第五条：")]),t._v(" 为保证甲方有效拥有本项专利权，乙方应向甲方提交以下技术资料： ")]),a("p",[t._v("1. "),a("span",[t._v("专利授权证书及其他文档等相关资料")]),t._v("；")]),a("p",[t._v("2. "),a("span",[t._v("无")]),t._v("；")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step6"},[a("div",[a("span",[t._v("第六条：")]),t._v(" 乙方向甲方提交技术资料的时间、地点、方式如下： ")]),a("p",[t._v("1. 提交时间："),a("span",[t._v("签订合同之日起十五日内")]),t._v("；")]),a("p",[t._v("2. 提交地点："),a("span",[t._v("南京邮电大学")]),t._v("；")]),a("p",[t._v("3. 提交方式："),a("span",[t._v("邮寄纸质版和电子版各一份")]),t._v("；")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step7"},[a("div",[a("span",[t._v("第七条：")]),t._v(" 本合同签署后，由 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲 ")]),t._v(" 方负责在 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 十五 ")]),t._v(" 日内办理专利权转让登记事宜。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step8"},[a("div",[a("span",[t._v("第八条：")]),t._v(" 为保证甲方有效拥有本项专利，乙方向甲方转让与实施本项专利权有关的技术秘密： ")]),a("p",[t._v("1. 技术秘密的内容："),a("span",[t._v("参照发明专利的权利要求书")]),t._v("；")]),a("p",[t._v("2. 技术秘密的实施要求："),a("span",[t._v("参照发明专利的说明书")]),t._v("；")]),a("p",[t._v(" 3. 技术秘密的保密范围和期限："),a("span",[t._v("发明专利的设计原理、实施要求等涉及发明专利的内容。服务期限为合同签订之日起十年内")]),t._v("； ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step9"},[a("div",[a("span",[t._v("第九条：")]),t._v(" 乙方应当保证其专利权转让不侵犯任何第三人的合法权益。如发生第三人指控甲方侵权的，乙方应当 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 提供其技术发明过程以协助甲方证明其拥有的专利权利 ")]),t._v(" 。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step10"},[a("div",[a("span",[t._v("第十条：")]),t._v(" 乙方对本合同生效后专利权被宣告无效，不承担法律责任。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" （1） "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 根据《南京邮电大学科技成果转化管理办法》的相关规定，专利转让费转入南京邮电大学账户； ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" （2） "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲方将在合同签订后的七日内将专利转让费转入乙方指定账户；没有及时转入专利转让费的，每超期一日应加罚转让费的10%； ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 收款账户名称： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 南京邮电大学 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 收款账号： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 478058217116 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 开户行： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 中国银行南京云锦路支行 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step12"},[a("div",[a("span",[t._v("第十二条：")]),t._v(" 双方确定，在本合同履行中，任何一方不得以下列方式限制另一方的技术竞争和技术发展： "),a("p",[t._v(" 1. "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲方在其它专利所有人那里取得的与本合同专利人所拥有的专利无关的专利实施许可的 ")]),t._v(" 。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step13"},[a("div",[a("span",[t._v("第十三条：")]),t._v(" 双方确定： "),a("p",[t._v(" 1. 甲方有权利用乙方转让专利权涉及的发明创造进行后续改进。由此产生的具有实质性或创造性技术进步特征的新的技术成果，归 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲方 ")]),t._v(" （甲方、双方）方所有。具体相关利益的分配办法如下： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),a("p",[t._v(" 2. 乙方有权在已交付甲方该项专利权后，对该项专利权涉及的发明创造进行后续改进。由此产生的具有实质性或创造性技术进步特征的新的技术成果，归 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 乙方 ")]),t._v(" （乙方、双方）方所有。具体相关利益的分配办法如下： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step14"},[a("div",[a("span",[t._v("第十四条：")]),t._v(" 双方确定，按以下约定承担各自的违约责任： "),a("p",[t._v(" 1．如甲方没有按时按合同支付转让费，乙方有权终止合同而不需甲方同意并将本专利权转回乙方。 ")]),a("p",[t._v(" 2．乙方如在甲方支付转让费后没有及时转让专利，应将转让费100%返还甲方。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 1． "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 交接合同注明的专利技术资料 ")]),t._v(" 。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 2． "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 完成专利权的转让费用的支付 ")]),t._v(" 。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step16"},[a("div",[a("span",[t._v("第十六条：")]),t._v(" 双方确定，出现下列情形，致使本合同的履行成为不必要或不可能的，可以解除本合同： "),a("p",[t._v(" 1． "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 因发生不可抗力 ")]),t._v(" ； ")]),a("p",[t._v(" 2． "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 由于政府和国家政策造成专利或者专利产品无法继续进行研制、申请和销售的，双方的损失，双方自行承担 ")]),t._v(" 。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",[t._v(" 2. 依法向 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 乙方所在地 ")]),t._v(" 人民法院起诉。 ")])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step18"},[a("div",[a("span",[t._v("第十八条：")]),t._v(" 双方确定：本合同及相关附件中所涉及的有关名词和技术术语，其定义和解释如下： "),a("p",[t._v(" 1． "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 本合同中所有的费用和金额都是以人民币结算，结算单位为人民币的元 ")]),t._v(" 。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step19"},[a("div",[a("span",[t._v("第十九条：")]),t._v(" 与履行本合同有关的下列技术文件，经双方确认后， "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 为本合同的组成部分： "),a("p",[t._v(" 1．技术背景资料： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),a("p",[t._v(" 2．可行性论证报告： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),a("p",[t._v(" 3．技术评价报告： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),a("p",[t._v(" 4．技术标准和规范： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),a("p",[t._v(" 5．原始设计和工艺文件： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),a("p",[t._v(" 6．其他： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step20"},[a("div",[a("span",[t._v("第二十条：")]),t._v(" 双方约定本合同其他相关事项为： "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step21"},[a("div",[a("span",[t._v("第二十一条：")]),t._v(" 本合同一式 "),a("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 贰 ")]),t._v(" 份，具有同等法律效力。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_step step22"},[a("div",[a("span",[t._v("第二十二条：")]),t._v(" 本合同自签订之日起生效。 ")])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"word page5"},[a("div",{staticClass:"page5_part1"},[t._v("甲方：（盖章）")]),a("div",{staticClass:"page5_part2"},[t._v("法定代表人／委托代理人：（签名）")]),a("div",{staticClass:"page5_part3"},[t._v("年 月 日")]),a("div",{staticClass:"page5_part1 page5_Yi"},[t._v("乙方：（盖章）")]),a("div",{staticClass:"page5_part2"},[t._v("法定代表人／委托代理人：（签名）")]),a("div",{staticClass:"page5_part3"},[t._v("年 月 日")])])}],s=(a("ac1f"),a("1276"),{data:function(){return{contractInfo:{arbitrationCommission:"无",contractSigningDate:"",disputeSettlementMethod:"1",invoicingEnterprise:"",paAddress:"",paContactEmail:"",paContactPerson:"",paContactPhone:"",paMailingAddress:"",paName:"",paRepresentative:"",paymentMethod:"一次",pbContactPerson:"",pbImplPatentRight:"无",pbLicensedPatentRight:"无",projectName:"",taxpayerCode:"",totalTransferAmount:0,widList:[]},paymentMethod_options:[{value:"一次",label:"一次"},{value:"分期",label:"分期"},{value:"提成",label:"提成"}],patents_name:"",table_loading:!1,patent_Data:[],choose_Dialog:!1,choose_Data:[],choose_loading:!0,choosed_patents:[]}},created:function(){},methods:{TimeTransfer:function(t){var e=new Date(t),a=e.getFullYear(),n=e.getMonth()+1,o=e.getDate(),s=e.getHours(),i=e.getMinutes(),r=e.getSeconds(),c=a+"-";return n<10&&(c+="0"),c+=n+"-",o<10&&(c+="0"),c+=o+" ",s<10&&(c+="0"),c+=s+":",i<10&&(c+="0"),c+=i+":",r<10&&(c+="0"),c+=r,c},choose_Patant:function(){var t=this;t.choose_Dialog=!0,t.choose_Data=[],t.request("/contract/getPatentListForContractAdd",{},"GET",{}).then((function(e){if(console.log(e.data),t.choose_loading=!1,"success"==e.data.status){for(var a=0;a<e.data.data.length;a++){var n={};n.contractSigningDate=t.TimeTransfer(e.data.data[a].contractSigningDate),n.wid=e.data.data[a].wid,n.zldyzzxm=e.data.data[a].zldyzzxm,n.zlmc=e.data.data[a].zlmc,t.choose_Data.push(n)}t.$message({message:"列表已更新！",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))},handleSelectionChange:function(t){this.choosed_patents=t},confirm_choose:function(){var t=this;if(console.log(this.choosed_patents),0==this.choosed_patents.length)this.$message({message:"请选择至少一个专利！",type:"warning"});else{this.table_loading=!0;var e="/contract/getPatentApplicationInfo?widList="+this.choosed_patents[0];if(this.choosed_patents.length>1)for(var a=1;a<this.choosed_patents.length;a++)e=e+"&widList="+this.choosed_patents[a];console.log(e),this.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),t.table_loading=!1,"success"==e.data.status){t.contractInfo.contractSigningDate=t.TimeTransfer(e.data.data[0].contractSigningDate).split(" ")[0],t.contractInfo.paName=e.data.data[0].transfereeName,t.contractInfo.invoicingEnterprise=e.data.data[0].transfereeName,t.contractInfo.paContactPerson=e.data.data[0].transfereeDelegate,t.contractInfo.paContactPhone=e.data.data[0].transfereeDelegatePhone,t.contractInfo.pbContactPerson=e.data.data[0].fzyName,e.data.data.length>1?t.patents_name=e.data.data[0].zlmc+"等":t.patents_name=e.data.data[0].zlmc;for(var a=0;a<e.data.data.length;a++){var n={};n.index=a+1,n.zlmc=e.data.data[a].zlmc,n.zlh=e.data.data[a].zlh,n.pzrq=e.data.data[a].pzrq,n.zldyzzxm=e.data.data[a].zldyzzxm,n.patentPrice=e.data.data[a].patentPrice,t.contractInfo.totalTransferAmount+=e.data.data[a].patentPrice,t.patent_Data.push(n)}}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.table_loading=!1,t.$message({message:"出错了！",type:"error"})}))}},back:function(){this.$router.push({path:"/create_contract"})},preview:function(){console.log(this.contractInfo),that.$router.push({path:"/contract_detail",query:this.contractInfo})},create:function(){console.log(this.contractInfo);var t=this;t.request("/contract/addContract",this.contractInfo,"POST",{}).then((function(e){"success"==e.data.status?(t.$message({message:"创建成功，即将跳转至合同列表！",type:"success"}),setTimeout((function(){t.$router.push({path:"/contract"})}),1200)):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}}}),i=s,r=(a("4c60"),a("2877")),c=Object(r["a"])(i,n,o,!1,null,null,null);e["default"]=c.exports},"8aa5":function(t,e,a){"use strict";var n=a("6547").charAt;t.exports=function(t,e,a){return e+(a?n(t,e).length:1)}},9263:function(t,e,a){"use strict";var n=a("ad6d"),o=a("9f7f"),s=RegExp.prototype.exec,i=String.prototype.replace,r=s,c=function(){var t=/a/,e=/b*/g;return s.call(t,"a"),s.call(e,"a"),0!==t.lastIndex||0!==e.lastIndex}(),l=o.UNSUPPORTED_Y||o.BROKEN_CARET,p=void 0!==/()??/.exec("")[1],d=c||p||l;d&&(r=function(t){var e,a,o,r,d=this,v=l&&d.sticky,_=n.call(d),u=d.source,m=0,f=t;return v&&(_=_.replace("y",""),-1===_.indexOf("g")&&(_+="g"),f=String(t).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==t[d.lastIndex-1])&&(u="(?: "+u+")",f=" "+f,m++),a=new RegExp("^(?:"+u+")",_)),p&&(a=new RegExp("^"+u+"$(?!\\s)",_)),c&&(e=d.lastIndex),o=s.call(v?a:d,f),v?o?(o.input=o.input.slice(m),o[0]=o[0].slice(m),o.index=d.lastIndex,d.lastIndex+=o[0].length):d.lastIndex=0:c&&o&&(d.lastIndex=d.global?o.index+o[0].length:e),p&&o&&o.length>1&&i.call(o[0],a,(function(){for(r=1;r<arguments.length-2;r++)void 0===arguments[r]&&(o[r]=void 0)})),o}),t.exports=r},"9f7f":function(t,e,a){"use strict";var n=a("d039");function o(t,e){return RegExp(t,e)}e.UNSUPPORTED_Y=n((function(){var t=o("a","y");return t.lastIndex=2,null!=t.exec("abcd")})),e.BROKEN_CARET=n((function(){var t=o("^r","gy");return t.lastIndex=2,null!=t.exec("str")}))},a47d:function(t,e,a){},ac1f:function(t,e,a){"use strict";var n=a("23e7"),o=a("9263");n({target:"RegExp",proto:!0,forced:/./.exec!==o},{exec:o})},ad6d:function(t,e,a){"use strict";var n=a("825a");t.exports=function(){var t=n(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},d784:function(t,e,a){"use strict";a("ac1f");var n=a("6eeb"),o=a("d039"),s=a("b622"),i=a("9263"),r=a("9112"),c=s("species"),l=!o((function(){var t=/./;return t.exec=function(){var t=[];return t.groups={a:"7"},t},"7"!=="".replace(t,"$<a>")})),p=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),v=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),_=!o((function(){var t=/(?:)/,e=t.exec;t.exec=function(){return e.apply(this,arguments)};var a="ab".split(t);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));t.exports=function(t,e,a,d){var u=s(t),m=!o((function(){var e={};return e[u]=function(){return 7},7!=""[t](e)})),f=m&&!o((function(){var e=!1,a=/a/;return"split"===t&&(a={},a.constructor={},a.constructor[c]=function(){return a},a.flags="",a[u]=/./[u]),a.exec=function(){return e=!0,null},a[u](""),!e}));if(!m||!f||"replace"===t&&(!l||!p||v)||"split"===t&&!_){var g=/./[u],h=a(u,""[t],(function(t,e,a,n,o){return e.exec===i?m&&!o?{done:!0,value:g.call(e,a,n)}:{done:!0,value:t.call(a,e,n)}:{done:!1}}),{REPLACE_KEEPS_$0:p,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:v}),b=h[0],x=h[1];n(String.prototype,t,b),n(RegExp.prototype,u,2==e?function(t,e){return x.call(t,this,e)}:function(t){return x.call(t,this)})}d&&r(RegExp.prototype[u],"sham",!0)}}}]);