(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4ec3efa0"],{"4c60":function(t,a,e){"use strict";e("a47d")},"7e24":function(t,a,e){"use strict";e.r(a);var o=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"filling_contract_Container"},[e("div",{staticClass:"ToBottom",attrs:{id:"to_Bottom"}},[e("el-button",{attrs:{type:"primary",icon:"el-icon-arrow-down",circle:""},on:{click:t.toBottom}})],1),e("div",{staticClass:"word page1"},[e("div",{staticClass:"contrac_number"},[e("span",[t._v("合同编号："+t._s(t.projectCode))])]),e("div",{staticClass:"contrac_title"},[t._v("技术转让（专利权）合同")]),e("div",{staticClass:"project_info"},[e("div",{staticClass:"project"},[t._v(" 项目名称： "),e("el-input",{staticClass:"textarea",staticStyle:{width:"340px"},attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"100","show-word-limit":""},model:{value:t.contractInfo.projectName,callback:function(a){t.$set(t.contractInfo,"projectName",a)},expression:"contractInfo.projectName"}})],1),e("div",{staticClass:"project"},[t._v(" 受让方（甲方）： "),e("el-input",{staticClass:"textarea",staticStyle:{width:"270px"},attrs:{type:"textarea",placeholder:"请输入内容",maxlength:"100","show-word-limit":""},model:{value:t.contractInfo.paName,callback:function(a){t.$set(t.contractInfo,"paName",a)},expression:"contractInfo.paName"}})],1),t._m(0)]),e("div",{staticClass:"signed_info"},[t._m(1),e("div",{staticClass:"signed"},[t._v(" 签订时间： "),e("el-date-picker",{staticStyle:{width:"335px"},attrs:{type:"date",placeholder:"选择签订时间",format:"yyyy年MM月dd日","value-format":"yyyy-MM-dd"},model:{value:t.contractInfo.contractSigningDate,callback:function(a){t.$set(t.contractInfo,"contractSigningDate",a)},expression:"contractInfo.contractSigningDate"}})],1),e("div",{staticClass:"signed"},[t._v(" 有效时间："+t._s(t.contractInfo.contractValidateBegin.split("-")[0]+"年"+t.contractInfo.contractValidateBegin.split("-")[1]+"月"+t.contractInfo.contractValidateBegin.split("-")[2]+"日")+" - "+t._s(t.contractInfo.contractValidateEnd.split("-")[0]+"年"+t.contractInfo.contractValidateEnd.split("-")[1]+"月"+t.contractInfo.contractValidateEnd.split("-")[2]+"日")+" ")])]),e("div",{staticClass:"bottom_info"},[t._v("中华人民共和国科学技术部印制")])]),t._m(2),e("div",{staticClass:"word page3"},[e("div",{staticClass:"page3_title"},[t._v("技术转让（专利权）合同")]),e("div",{staticClass:"page3_part1"},[e("div",{staticClass:"page3_blank_two page3_blank_two_part2"},[e("div",{staticClass:"page3_blank"},[t._v(" 受让方（甲方）： "),e("el-autocomplete",{staticStyle:{width:"200px"},attrs:{"fetch-suggestions":t.querySearchAsync},on:{select:t.selectDepartment},model:{value:t.contractInfo.paName,callback:function(a){t.$set(t.contractInfo,"paName",a)},expression:"contractInfo.paName"}})],1),e("div",{staticClass:"page3_blank"},[t._v(" 邮编："),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paPostalCode,expression:"contractInfo.paPostalCode"}],staticStyle:{width:"200px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paPostalCode},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paPostalCode",a.target.value)}}})])]),e("div",{staticClass:"page3_blank"},[t._v(" 公司注册地址："),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paAddress,expression:"contractInfo.paAddress"}],staticStyle:{width:"553px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paAddress},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paAddress",a.target.value)}}})]),e("div",{staticClass:"page3_blank_two"},[e("div",{staticClass:"page3_blank"},[t._v(" 法定代表人： "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paRepresentative,expression:"contractInfo.paRepresentative"}],staticStyle:{width:"200px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paRepresentative},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paRepresentative",a.target.value)}}})]),e("div",{staticClass:"page3_blank"},[t._v(" 项目联系人： "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactPerson,expression:"contractInfo.paContactPerson"}],staticStyle:{width:"200px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paContactPerson},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paContactPerson",a.target.value)}}})])]),e("div",{staticClass:"page3_blank_two page3_blank_two_part2"},[e("div",{staticClass:"page3_blank"},[t._v(" 电 话："),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactPhone,expression:"contractInfo.paContactPhone"}],staticStyle:{width:"260px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paContactPhone},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paContactPhone",a.target.value)}}})]),e("div",{staticClass:"page3_blank"},[t._v(" 电子信箱："),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactEmail,expression:"contractInfo.paContactEmail"}],attrs:{type:"text"},domProps:{value:t.contractInfo.paContactEmail},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paContactEmail",a.target.value)}}})])]),e("div",{staticClass:"page3_blank address"},[t._v(" 行政区划： "),e("el-cascader",{attrs:{size:"large",options:t.options},on:{change:t.regionChange},model:{value:t.selectedregion,callback:function(a){t.selectedregion=a},expression:"selectedregion"}})],1),e("div",{staticClass:"page3_blank address"},[t._v(" 详细地址： "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paMailingAddress,expression:"contractInfo.paMailingAddress"}],staticStyle:{width:"593px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paMailingAddress},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paMailingAddress",a.target.value)}}})])]),t._m(3)]),e("div",{staticClass:"word page4"},[e("div",{staticClass:"page4_top_info"},[t._v(" 本合同乙方将其拥有的 "),e("span",[t._v(" "+t._s(t.patents_name))]),t._v(" 的专利权转让甲方，甲方受让并支付相应的转让价款。双方经过平等协商，在真实、充分地表达各自意愿的基础上，根据《中华人民共和国民法典》的规定，达成如下协议，并由双方共同恪守。 ")]),e("div",{staticClass:"page4_step step1"},[t._m(4),e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.table_loading,expression:"table_loading"}],ref:"multipleTable",staticClass:"tablestyle",attrs:{id:"outTable",data:t.patent_Data,"tooltip-effect":"dark",stripe:""}},[e("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),e("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),e("el-table-column",{attrs:{prop:"zlh",label:"专利号",width:"150"}}),e("el-table-column",{attrs:{prop:"cymd",label:"发明人",width:"100"}}),e("el-table-column",{attrs:{prop:"patentPrice",label:"转让价格",width:"100"}})],1)],1),e("div",{staticClass:"page4_step step2"},[t._m(5),e("p",[t._v(" 1．乙方实施本项专利权的状况 ( 时间、地点、方式和规模 )： "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.pbImplPatentRight,expression:"contractInfo.pbImplPatentRight"}],attrs:{type:"text",placeholder:"若没有，填“无”"},domProps:{value:t.contractInfo.pbImplPatentRight},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"pbImplPatentRight",a.target.value)}}})]),e("p",[t._v(" 2．乙方许可他人使用本项专利权的状况（时间、地点、方式和规模）： "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.pbLicensedPatentRight,expression:"contractInfo.pbLicensedPatentRight"}],attrs:{type:"text",placeholder:"若没有，填“无”"},domProps:{value:t.contractInfo.pbLicensedPatentRight},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"pbLicensedPatentRight",a.target.value)}}})]),t._m(6)]),t._m(7),t._m(8),t._m(9),t._m(10),t._m(11),t._m(12),t._m(13),t._m(14),e("div",{staticClass:"page4_step step11"},[e("div",[e("span",[t._v("第十一条：")]),t._v(" 甲方向乙方支付该项专利权转让的价款及支付方式如下： "),e("p",[t._v(" 1. 专利权的转让价款总额为： "),e("span",{staticStyle:{background:"yellow"}},[t._v(" "+t._s(t.contractInfo.totalTransferAmount)+" ")]),t._v(" 万元整。其中，技术秘密转让价款为 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 人民币"),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.secretTransferAmount,expression:"contractInfo.secretTransferAmount"}],staticStyle:{width:"200px"},attrs:{type:"number",placeholder:"请输入数字"},domProps:{value:t.contractInfo.secretTransferAmount},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"secretTransferAmount",a.target.value)}}}),t._v("万元整 ")]),t._v(" 。 ")]),e("p",[t._v(" 2. 专利权的转让价款由甲方 "),e("el-dropdown",{on:{command:t.dropdownCommand}},[e("span",{staticStyle:{cursor:"pointer"}},[t._v(" "+t._s(t.contractInfo.paymentMethod)+" "),e("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),e("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[e("el-dropdown-item",{attrs:{command:"一次"}},[t._v("一次")]),e("el-dropdown-item",{attrs:{command:"分期"}},[t._v("分期")]),e("el-dropdown-item",{attrs:{command:"提成"}},[t._v("提成")])],1)],1),t._v(" （一次、分期或提成）支付乙方。 ")],1),e("p",[t._v("具体支付方式和时间如下：")]),t._m(15),t._m(16),e("p",[t._v(" （3） "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 转账时注明 "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.transferPriceNoteName,expression:"contractInfo.transferPriceNoteName"}],staticStyle:{width:"150px"},attrs:{type:"text"},domProps:{value:t.contractInfo.transferPriceNoteName},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"transferPriceNoteName",a.target.value)}}}),e("b",[t._v("老师")]),t._v("专利转让费 ")])]),e("p",[t._v("乙方开户银行名称、账户和帐号为：")]),t._m(17),t._m(18),t._m(19),e("br"),e("p",[t._v("甲方开票信息：")]),e("p",[t._v(" 企业名称： "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.invoicingEnterprise,expression:"contractInfo.invoicingEnterprise"}],staticStyle:{width:"240px"},attrs:{type:"text"},domProps:{value:t.contractInfo.invoicingEnterprise},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"invoicingEnterprise",a.target.value)}}})]),e("p",[t._v(" 纳税人识别号： "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.taxpayerCode,expression:"contractInfo.taxpayerCode"}],staticStyle:{width:"200px"},attrs:{type:"text"},domProps:{value:t.contractInfo.taxpayerCode},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"taxpayerCode",a.target.value)}}})]),e("p",[t._v(" 3. 双方确定，甲方以实施研究开发成果所产生的利益提成支付乙方的研究开发经费和报酬的，乙方有权以 无 方式查阅甲方有关的会计账目。 ")]),e("p",[t._v(" 4. 双方确定，在专利转让过程中产生的手续费以及转让后产生维护费等费用均由甲方承担。 ")])])]),t._m(20),t._m(21),t._m(22),e("div",{staticClass:"page4_step step15"},[e("div",[e("span",[t._v("第十五条：")]),t._v(" 双方确定，在本合同有效期内，甲方指定 "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.paContactPerson,expression:"contractInfo.paContactPerson"}],staticStyle:{width:"100px"},attrs:{type:"text"},domProps:{value:t.contractInfo.paContactPerson},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"paContactPerson",a.target.value)}}}),t._v(" 为甲方项目联系人，乙方指定 "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.pbContactPerson,expression:"contractInfo.pbContactPerson"}],staticStyle:{width:"100px"},attrs:{type:"text"},domProps:{value:t.contractInfo.pbContactPerson},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"pbContactPerson",a.target.value)}}}),t._v(" 为乙方项目联系人。项目联系人承担以下责任： "),t._m(23),t._m(24),e("p",[t._v(" 一方变更项目联系人的，应当及时通知另一方。未及时通知并影响本合同履行或造成损失的，应承担相应的责任。 ")])])]),t._m(25),e("div",{staticClass:"page4_step step17"},[e("div",[e("span",[t._v("第十七条：")]),t._v(" 双方因履行本合同而发生的争议，应协商、调解解决。协商、调解不成的，确定按以下第 "),e("el-radio-group",{staticStyle:{"text-indent":"0"},attrs:{size:"medium"},model:{value:t.contractInfo.disputeSettlementMethod,callback:function(a){t.$set(t.contractInfo,"disputeSettlementMethod",a)},expression:"contractInfo.disputeSettlementMethod"}},[e("el-radio-button",{attrs:{label:"1"}}),e("el-radio-button",{attrs:{label:"2"}})],1),t._v(" 种方式处理： "),e("p",[t._v(" 1. 提交 "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.contractInfo.arbitrationCommission,expression:"contractInfo.arbitrationCommission"}],attrs:{type:"text",disabled:2==t.contractInfo.disputeSettlementMethod,placeholder:"仲裁委员会名称"},domProps:{value:t.contractInfo.arbitrationCommission},on:{input:function(a){a.target.composing||t.$set(t.contractInfo,"arbitrationCommission",a.target.value)}}}),t._v("仲裁委员会仲裁； ")]),t._m(26)],1)]),t._m(27),t._m(28),t._m(29),t._m(30),t._m(31),e("br"),e("div",{staticClass:"page4_step"},[t._v("以下为盖章页。")])]),e("div",{staticClass:"word page5"},[e("div",{staticClass:"page5_part1"},[t._v("甲方：（盖章）")]),e("div",{staticClass:"page5_part2"},[t._v("法定代表人／委托代理人：（签名）")]),""!=t.contractInfo.contractSigningDate?e("div",{staticClass:"page5_part3"},[t._v(" "+t._s(t.contractInfo.contractSigningDate.split("-")[0]+"年"+t.contractInfo.contractSigningDate.split("-")[1]+"月"+t.contractInfo.contractSigningDate.split("-")[2]+"日")+" ")]):e("div",{staticClass:"page5_part3"},[t._v("年 月 日")]),e("div",{staticClass:"page5_part1 page5_Yi"},[t._v("乙方：（盖章）")]),e("div",{staticClass:"page5_part2"},[t._v("法定代表人／委托代理人：（签名）")]),""!=t.contractInfo.contractSigningDate?e("div",{staticClass:"page5_part3"},[t._v(" "+t._s(t.contractInfo.contractSigningDate.split("-")[0]+"年"+t.contractInfo.contractSigningDate.split("-")[1]+"月"+t.contractInfo.contractSigningDate.split("-")[2]+"日")+" ")]):e("div",{staticClass:"page5_part3"},[t._v("年 月 日")])]),e("div",{staticClass:"bottom_buttons"},[e("el-button",{on:{click:t.back}},[t._v("返 回")]),"filling"==this.$route.query.type?e("el-button",{attrs:{type:"success"},on:{click:t.create_contract}},[t._v("创建合同 ")]):t._e(),"edit"==this.$route.query.type?e("el-button",{attrs:{type:"success"},on:{click:t.edit}},[t._v("修改合同 ")]):t._e()],1),e("el-dialog",{attrs:{title:"修改专利",visible:t.choose_Dialog,width:"60%"},on:{"update:visible":function(a){t.choose_Dialog=a}}},[e("el-table",{directives:[{name:"loading",rawName:"v-loading",value:t.choose_loading,expression:"choose_loading"}],attrs:{data:t.choose_Data},on:{"selection-change":t.handleSelectionChange}},[e("el-table-column",{attrs:{type:"selection",width:"55"}}),e("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),e("el-table-column",{attrs:{prop:"zlh",label:"专利号",width:"150"}}),e("el-table-column",{attrs:{prop:"zldyzzxm",label:"作者",width:"150"}}),e("el-table-column",{attrs:{fixed:"right",label:"操作",width:"80"},scopedSlots:t._u([{key:"default",fn:function(a){return[e("el-radio",{attrs:{label:a.row.wid},model:{value:t.top_patent,callback:function(a){t.top_patent=a},expression:"top_patent"}},[t._v("置顶")])]}}])})],1),e("span",{attrs:{slot:"footer"},slot:"footer"},[e("div",{staticClass:"dialog_footer"},[e("div",{staticClass:"buttons"},[e("el-button",{on:{click:function(a){t.choose_Dialog=!1}}},[t._v("取 消")]),e("el-button",{attrs:{type:"primary"},on:{click:function(a){return t.confirm_choose()}}},[t._v("确 定 ")])],1)])])],1)],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"project"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 让与方（乙方）： "),e("div",{staticStyle:{width:"270px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 南京邮电大学 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"signed"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 签订地点： "),e("div",{staticStyle:{width:"340px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 中国南京 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"word page2"},[e("div",{staticClass:"filling_explain"},[t._v("填 写 说 明")]),e("div",{staticClass:"explain"},[e("p",[t._v(" 一、本合同为中华人民共和国科学技术部印制的技术转让（专利权）合同示范文本，各技术合同认定登记机构可推介技术合同当事人参照使用。 ")]),e("p",[t._v(" 二、本合同书适用于一方当事人（让与方、原专利权人）将其发明创造专利权永久转让受让方，受让方支付约定价款而订立的合同。 ")]),e("p",[t._v(" 三、签约一方为多个当事人的，可按各自在合同关系中的作用等，在“委托方”、“受托方”项下（增页）分别排列为共同受让人或共同让与人。 ")]),e("p",[t._v(" 四、本合同书未尽事项，可由当事人附页另行约定，并作为本合同的组成部分。 ")]),e("p",[t._v(" 五、当事人使用本合同书时约定无需填写的条款，应在该条款处注明“无”等字样。 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page3_part2"},[e("div",{staticClass:"page3_blank"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 让与方（乙方）： "),e("div",{staticStyle:{width:"533px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 南京邮电大学 ")])])]),e("div",{staticClass:"page3_blank address"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 住 所 地： "),e("div",{staticStyle:{width:"603px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 江苏省南京市亚东新城区文苑路9号 ")])])]),e("div",{staticClass:"page3_blank_two"},[e("div",{staticClass:"page3_blank"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 法定代表人： "),e("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 叶美兰 ")])])]),e("div",{staticClass:"page3_blank"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 项目联系人： "),e("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 陈鹏宇 ")])])])]),e("div",{staticClass:"page3_blank_two page3_blank_two_part2"},[e("div",{staticClass:"page3_blank"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 电 话： "),e("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 025-85866885 ")])])]),e("div",{staticClass:"page3_blank"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 电子信箱： "),e("div",{staticStyle:{width:"200px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" jszy@njupt.edu.cn ")])])])]),e("div",{staticClass:"page3_blank address"},[e("div",{staticStyle:{display:"flex"}},[t._v(" 通讯地址： "),e("div",{staticStyle:{width:"594px","border-bottom":"1px solid black","text-align":"center"}},[t._v(" 江苏省南京市亚东新城区文苑路9号南邮行政北楼402室 ")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",[t._v("第一条：")]),t._v("本合同转让的专利权： ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("span",[t._v("第二条：")]),t._v(" 乙方在本合同签署前实施或许可本项专利权的状况如下： ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" 3．本合同生效后，乙方有义务在 "),e("span",[t._v("十")]),t._v(" 日内将本项专利权转让的状况告知被许可使用本发明创造的当事人。 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step3"},[e("div",[e("span",[t._v("第三条：")]),t._v(" 甲方应在本合同生效后，保证原专利实施许可合同的履行。乙方在原专利实施许可合同中享有的权利和义务，自本合同生效之日起，由甲方承受。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step4"},[e("div",[e("span",[t._v("第四条：")]),t._v(" 本合同生效后乙方继续实施本项专利的，按以下约定办："),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无")]),t._v("。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step5"},[e("div",[e("span",[t._v("第五条：")]),t._v(" 为保证甲方有效拥有本项专利权，乙方应向甲方提交以下技术资料： ")]),e("p",[t._v("1. "),e("span",[t._v("专利授权证书及其他文档等相关资料")]),t._v("；")]),e("p",[t._v("2. "),e("span",[t._v("无")]),t._v("；")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step6"},[e("div",[e("span",[t._v("第六条：")]),t._v(" 乙方向甲方提交技术资料的时间、地点、方式如下： ")]),e("p",[t._v("1. 提交时间："),e("span",[t._v("签订合同之日起十五日内")]),t._v("；")]),e("p",[t._v("2. 提交地点："),e("span",[t._v("南京邮电大学")]),t._v("；")]),e("p",[t._v("3. 提交方式："),e("span",[t._v("邮寄纸质版和电子版各一份")]),t._v("；")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step7"},[e("div",[e("span",[t._v("第七条：")]),t._v(" 本合同签署后，由 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲 ")]),t._v(" 方负责在 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 十五 ")]),t._v(" 日内办理专利权转让登记事宜。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step8"},[e("div",[e("span",[t._v("第八条：")]),t._v(" 为保证甲方有效拥有本项专利，乙方向甲方转让与实施本项专利权有关的技术秘密： ")]),e("p",[t._v("1. 技术秘密的内容："),e("span",[t._v("参照发明专利的权利要求书")]),t._v("；")]),e("p",[t._v("2. 技术秘密的实施要求："),e("span",[t._v("参照发明专利的说明书")]),t._v("；")]),e("p",[t._v(" 3. 技术秘密的保密范围和期限："),e("span",[t._v("发明专利的设计原理、实施要求等涉及发明专利的内容。服务期限为合同签订之日起十年内")]),t._v("； ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step9"},[e("div",[e("span",[t._v("第九条：")]),t._v(" 乙方应当保证其专利权转让不侵犯任何第三人的合法权益。如发生第三人指控甲方侵权的，乙方应当 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 提供其技术发明过程以协助甲方证明其拥有的专利权利 ")]),t._v(" 。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step10"},[e("div",[e("span",[t._v("第十条：")]),t._v(" 乙方对本合同生效后专利权被宣告无效，不承担法律责任。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" （1） "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 根据《南京邮电大学科技成果转化管理办法》的相关规定，专利转让费转入南京邮电大学账户； ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" （2） "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲方将在合同签订后的七日内将专利转让费转入乙方指定账户；没有及时转入专利转让费的，每超期一日应加罚转让费的10%； ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" 收款账户名称： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 南京邮电大学 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" 收款账号： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 478058217116 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" 开户行： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 中国银行南京云锦路支行 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step12"},[e("div",[e("span",[t._v("第十二条：")]),t._v(" 双方确定，在本合同履行中，任何一方不得以下列方式限制另一方的技术竞争和技术发展： "),e("p",[t._v(" 1. "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲方在其它专利所有人那里取得的与本合同专利人所拥有的专利无关的专利实施许可的 ")]),t._v(" 。 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step13"},[e("div",[e("span",[t._v("第十三条：")]),t._v(" 双方确定： "),e("p",[t._v(" 1. 甲方有权利用乙方转让专利权涉及的发明创造进行后续改进。由此产生的具有实质性或创造性技术进步特征的新的技术成果，归 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 甲方 ")]),t._v(" （甲方、双方）方所有。具体相关利益的分配办法如下： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),e("p",[t._v(" 2. 乙方有权在已交付甲方该项专利权后，对该项专利权涉及的发明创造进行后续改进。由此产生的具有实质性或创造性技术进步特征的新的技术成果，归 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 乙方 ")]),t._v(" （乙方、双方）方所有。具体相关利益的分配办法如下： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step14"},[e("div",[e("span",[t._v("第十四条：")]),t._v(" 双方确定，按以下约定承担各自的违约责任： "),e("p",[t._v(" 1．如甲方没有按时按合同支付转让费，乙方有权终止合同而不需甲方同意并将本专利权转回乙方。 ")]),e("p",[t._v(" 2．乙方如在甲方支付转让费后没有及时转让专利，应将转让费100%返还甲方。 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" 1． "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 交接合同注明的专利技术资料 ")]),t._v(" 。 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" 2． "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 完成专利权的转让费用的支付 ")]),t._v(" 。 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step16"},[e("div",[e("span",[t._v("第十六条：")]),t._v(" 双方确定，出现下列情形，致使本合同的履行成为不必要或不可能的，可以解除本合同： "),e("p",[t._v(" 1． "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 因发生不可抗力 ")]),t._v(" ； ")]),e("p",[t._v(" 2． "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 由于政府和国家政策造成专利或者专利产品无法继续进行研制、申请和销售的，双方的损失，双方自行承担 ")]),t._v(" 。 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("p",[t._v(" 2. 依法向 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 乙方所在地 ")]),t._v(" 人民法院起诉。 ")])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step18"},[e("div",[e("span",[t._v("第十八条：")]),t._v(" 双方确定：本合同及相关附件中所涉及的有关名词和技术术语，其定义和解释如下： "),e("p",[t._v(" 1． "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 本合同中所有的费用和金额都是以人民币结算，结算单位为人民币的元 ")]),t._v(" 。 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step19"},[e("div",[e("span",[t._v("第十九条：")]),t._v(" 与履行本合同有关的下列技术文件，经双方确认后， "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 为本合同的组成部分： "),e("p",[t._v(" 1．技术背景资料： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),e("p",[t._v(" 2．可行性论证报告： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),e("p",[t._v(" 3．技术评价报告： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),e("p",[t._v(" 4．技术标准和规范： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),e("p",[t._v(" 5．原始设计和工艺文件： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")]),e("p",[t._v(" 6．其他： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step20"},[e("div",[e("span",[t._v("第二十条：")]),t._v(" 双方约定本合同其他相关事项为： "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 无 ")]),t._v(" 。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step21"},[e("div",[e("span",[t._v("第二十一条：")]),t._v(" 本合同一式 "),e("span",{staticStyle:{"font-weight":"normal","border-bottom":"1px solid black"}},[t._v(" 贰 ")]),t._v(" 份，具有同等法律效力。 ")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"page4_step step22"},[e("div",[e("span",[t._v("第二十二条：")]),t._v(" 本合同自签订之日起生效。 ")])])}],s=(e("ac1f"),e("1276"),e("ef6c")),c={data:function(){return{scrollTop:0,options:s["regionData"],selectedregion:["110000","110100","110101"],projectCode:"",contractInfo:{arbitrationCommission:"无",contractSigningDate:"",contractValidateBegin:"",contractValidateEnd:"",disputeSettlementMethod:"2",invoicingEnterprise:"",paAddress:"",paContactEmail:"",paContactPerson:"",paContactPhone:"",paMailingAddress:"",paProvinceCode:"",paCityCode:"",paDistrictCode:"",paProvince:"",paCity:"",paDistrict:"",paName:"",paPostalCode:"",paRepresentative:"",paymentMethod:"一次",pbContactPerson:"陈鹏宇",pbImplPatentRight:"无",pbLicensedPatentRight:"无",projectName:"",secretTransferAmount:0,taxpayerCode:"",totalTransferAmount:0,transferPriceNoteName:"",widList:[]},patents_name:"",table_loading:!1,patent_Data:[],choose_loading:!0,choose_Dialog:!1,choose_Data:[],choosed_patents:[],widList:[],top_patent:""}},created:function(){var t=this;if(console.log(this.$route.query),"edit"==this.$route.query.type){var a="/contract/getContractById?contractInfoId="+this.$route.query.contractInfoId;this.request(a,{},"GET",{}).then((function(a){if(console.log(a.data),t.table_loading=!1,"success"==a.data.status){t.contractInfo.arbitrationCommission=a.data.data.arbitrationCommission,t.contractInfo.contractInfoId=a.data.data.contractInfoId,t.contractInfo.contractSigningDate=a.data.data.contractSigningDate,t.contractInfo.contractValidateBegin=a.data.data.contractValidateBegin,t.contractInfo.contractValidateEnd=a.data.data.contractValidateEnd,t.contractInfo.disputeSettlementMethod=a.data.data.disputeSettlementMethod,t.contractInfo.invoicingEnterprise=a.data.data.invoicingEnterprise,t.contractInfo.paAddress=a.data.data.paAddress,t.contractInfo.paContactEmail=a.data.data.paContactEmail,t.contractInfo.paContactPerson=a.data.data.paContactPerson,t.contractInfo.paContactPhone=a.data.data.paContactPhone,t.contractInfo.paMailingAddress=a.data.data.paMailingAddress,t.contractInfo.paName=a.data.data.paName,t.contractInfo.paPostalCode=a.data.data.paPostalCode,t.selectedregion[0]=a.data.data.paProvinceCode,t.selectedregion[1]=a.data.data.paCityCode,t.selectedregion[2]=a.data.data.paDistrictCode,console.log(t.selectedregion),t.contractInfo.paRepresentative=a.data.data.paRepresentative,t.contractInfo.paymentMethod=a.data.data.paymentMethod,t.contractInfo.pbContactPerson=a.data.data.pbContactPerson,t.contractInfo.pbImplPatentRight=a.data.data.pbImplPatentRight,t.contractInfo.pbLicensedPatentRight=a.data.data.pbLicensedPatentRight,t.projectCode=a.data.data.projectCode,t.contractInfo.projectName=a.data.data.projectName,t.contractInfo.secretTransferAmount=a.data.data.secretTransferAmount,t.contractInfo.taxpayerCode=a.data.data.taxpayerCode,t.contractInfo.totalTransferAmount=a.data.data.totalTransferAmount,t.contractInfo.transferPriceNoteName=a.data.data.transferPriceNoteName,a.data.data.patentInfo.length>1?t.patents_name=a.data.data.patentInfo[0].zlmc+"等 "+a.data.data.patentInfo.length+" 件专利":t.patents_name=a.data.data.patentInfo[0].zlmc,t.contractInfo.widList=[];for(var e=0;e<a.data.data.patentInfo.length;e++){var o={};o.index=e+1,o.wid=a.data.data.patentInfo[e].wid,o.zlmc=a.data.data.patentInfo[e].zlmc,o.zldyzzxm=a.data.data.patentInfo[e].zldyzzxm,o.zlh=a.data.data.patentInfo[e].zlh,o.cymd=a.data.data.patentInfo[e].cymd,o.patentPrice=a.data.data.patentInfo[e].patentPrice+" 万元",t.patent_Data.push(o),t.contractInfo.widList.push(a.data.data.patentInfo[e].wid)}t.$message.success("合同加载完成！"),t.fullscreenLoading=!1}else t.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(a){console.log(a),t.table_loading=!1,t.$message({message:"出错了！",type:"error"})}))}else if("filling"==this.$route.query.type){var e=this;e.contractInfo.widList=this.$route.query.widList;var o="/contract/getPatentApplicationInfo?widList="+this.$route.query.widList[0];if(this.$route.query.widList.length>1)for(var n=1;n<this.$route.query.widList.length;n++)o=o+"&widList="+this.$route.query.widList[n];e.request(o,{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){e.contractInfo.paName=a.data.data[0].transfereeName,e.contractInfo.paContactPerson=a.data.data[0].transfereeDelegate,e.contractInfo.paContactPhone=a.data.data[0].transfereeDelegatePhone,e.contractInfo.invoicingEnterprise=a.data.data[0].transfereeName,e.contractInfo.contractValidateBegin=e.TimeTransfer(new Date).split(" ")[0],e.contractInfo.contractValidateEnd=parseInt(e.contractInfo.contractValidateBegin.split("-")[0])+1+"-"+e.contractInfo.contractValidateBegin.split("-")[1]+"-"+e.contractInfo.contractValidateBegin.split("-")[2];for(var o=0,n=0;n<a.data.data.length;n++){var s={};s.index=n+1,s.wid=a.data.data[n].wid,s.cymd=a.data.data[n].cymd,s.zlmc=a.data.data[n].zlmc,s.zldyzzxm=a.data.data[n].zldyzzxm,s.zlh=a.data.data[n].zlh,s.patentPrice=a.data.data[n].patentPrice+" 万元",o+=a.data.data[n].patentPrice,e.patent_Data.push(s)}e.patent_Data.length>1?e.contractInfo.projectName=e.patent_Data[0].zlmc+"等 "+e.patent_Data.length+" 件专利":e.contractInfo.projectName=e.patent_Data[0].zlmc,e.contractInfo.transferPriceNoteName=e.patent_Data[0].zldyzzxm,t.contractInfo.totalTransferAmount=o,e.patents_name=e.patent_Data[0].zlmc,e.patent_Data.length>1&&(e.patents_name+="等 "+e.patent_Data.length+" 件专利")}else t.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(a){console.log(a),t.$message({message:"出错了！",type:"error"})}))}},mounted:function(){window.addEventListener("scroll",this.handleScroll),console.log(this.selectedregion)},destroyed:function(){document.removeEventListener("scroll",this.handleScroll)},methods:{handleScroll:function(){var t=this,a=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop;t.scrollTop=a,Math.abs(a+document.body.clientHeight-document.body.scrollHeight)>1?document.getElementById("to_Bottom").style.display="block":document.getElementById("to_Bottom").style.display="none"},toBottom:function(){var t=this,a=setInterval((function(){var e=Math.floor((document.body.scrollHeight-t.scrollTop-document.body.clientHeight)/10);document.documentElement.scrollTop=document.body.scrollTop=t.scrollTop+e,document.body.scrollHeight-t.scrollTop-document.body.clientHeight<10&&(document.documentElement.scrollTop=document.body.scrollTop=document.body.scrollHeight,clearInterval(a))}),10)},querySearchAsync:function(t,a){var e=this,o=this;o.departmantOptions=[];var n="/company/searchCompanyByName?companyName="+t;o.request(n,{},"GET",{}).then((function(n){if(console.log(n.data),n.data.status="success")if(0==n.data.data.length)e.contractInfo.paName=t,e.contractInfo.paPostalCode="",e.contractInfo.paAddress="",e.contractInfo.paRepresentative="",e.contractInfo.paContactPerson="",e.contractInfo.paContactPhone="",e.contractInfo.paContactEmail="",e.contractInfo.paMailingAddress="",e.contractInfo.taxpayerCode="";else{for(var s=0;s<n.data.data.length;s++){var c={};c.value=n.data.data[s].companyName,c.paPostalCode=n.data.data[s].companyPostalCode,c.paAddress=n.data.data[s].companyAddress,c.paRepresentative=n.data.data[s].companyRepresentative,c.paContactPerson=n.data.data[s].companyContactPerson,c.paContactPhone=n.data.data[s].companyContactPhone,c.paContactEmail=n.data.data[s].companyContactEmail,c.paMailingAddress=n.data.data[s].companyMailingAddress,c.taxpayerCode=n.data.data[s].taxpayerCode,o.departmantOptions.push(c)}a(o.departmantOptions)}else e.$message({message:n.data.data.errMsg,type:"warning"})})).catch((function(t){console.log(t),e.$message({message:"出错了！",type:"error"})}))},selectDepartment:function(t){console.log(t),this.contractInfo.paName=t.value,this.contractInfo.paPostalCode=t.paPostalCode,this.contractInfo.paAddress=t.paAddress,this.contractInfo.paRepresentative=t.paRepresentative,this.contractInfo.paContactPerson=t.paContactPerson,this.contractInfo.paContactPhone=t.paContactPhone,this.contractInfo.paContactEmail=t.paContactEmail,this.contractInfo.paMailingAddress=t.paMailingAddress,this.contractInfo.taxpayerCode=t.taxpayerCode},regionChange:function(t){this.contractInfo.paProvinceCode=t[0],this.contractInfo.paCityCode=t[1],this.contractInfo.paDistrictCode=t[2],this.contractInfo.paProvince=s["CodeToText"][t[0]],this.contractInfo.paCity=s["CodeToText"][t[1]],this.contractInfo.paDistrict=s["CodeToText"][t[2]],console.log(this.selectedregion)},TimeTransfer:function(t){var a=new Date(t),e=a.getFullYear(),o=a.getMonth()+1,n=a.getDate(),s=a.getHours(),c=a.getMinutes(),i=a.getSeconds(),r=e+"-";return o<10&&(r+="0"),r+=o+"-",n<10&&(r+="0"),r+=n+" ",s<10&&(r+="0"),r+=s+":",c<10&&(r+="0"),r+=c+":",i<10&&(r+="0"),r+=i,r},choose_Patant:function(){var t=this;t.choose_Dialog=!0,t.choose_Data=[],t.choose_loading=!0,t.request("/contract/getPatentListForContractAdd",{},"GET",{}).then((function(a){if(console.log(a.data),t.choose_loading=!1,"success"==a.data.status){for(var e=0;e<a.data.data.length;e++){var o={};o.zlh=a.data.data[e].zlh,o.wid=a.data.data[e].wid,o.zldyzzxm=a.data.data[e].zldyzzxm,o.zlmc=a.data.data[e].zlmc,t.choose_Data.push(o)}t.$message({message:"列表已更新！",type:"success"})}else t.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(a){console.log(a),t.$message({message:"出错了！",type:"error"})}))},handleSelectionChange:function(t){this.choosed_patents=t},confirm_choose:function(){var t=this;if(console.log(this.choosed_patents),console.log(this.top_patent),0==this.choosed_patents.length)this.$message({message:"请选择至少一个专利！",type:"warning"});else{if(t.contractInfo.widList=[],t.patent_Data=[],t.table_loading=!0,""!=this.top_patent){t.contractInfo.widList.push(this.top_patent);for(var a=0;a<this.choosed_patents.length;a++)this.choosed_patents[a].wid!=this.top_patent&&t.contractInfo.widList.push(this.choosed_patents[a].wid)}else for(var e=0;e<this.choosed_patents.length;e++)t.contractInfo.widList.push(this.choosed_patents[e].wid);var o="/contract/getPatentApplicationInfo?widList="+t.contractInfo.widList[0];if(t.contractInfo.widList.length>1)for(var n=1;n<t.contractInfo.widList.length;n++)o=o+"&widList="+t.contractInfo.widList[n];t.request(o,{},"GET",{}).then((function(a){if(console.log(a.data),"success"==a.data.status){for(var e=0;e<a.data.data.length;e++){var o={};o.index=e+1,o.wid=a.data.data[e].wid,o.zlmc=a.data.data[e].zlmc,o.zlh=a.data.data[e].zlh,o.zldyzzxm=a.data.data[e].zldyzzxm,o.patentPrice=a.data.data[e].patentPrice+" 万元",t.patent_Data.push(o)}t.table_loading=!1,t.contractInfo.projectName=t.patent_Data[0].zlmc,t.patents_name=t.patent_Data[0].zlmc,t.patent_Data.length>1&&(t.patents_name+="等 "+t.patent_Data.length+" 件专利")}else t.$message({message:a.data.data.errMsg,type:"error"});t.choose_Dialog=!1})).catch((function(a){console.log(a),t.$message({message:"出错了！",type:"error"})}))}},dropdownCommand:function(t){console.log(t),this.contractInfo.paymentMethod=t},back:function(){this.$router.push({path:"/contract"})},preview:function(){console.log(this.contractInfo),that.$router.push({path:"/contract_detail",query:this.contractInfo})},create_contract:function(){console.log(this.contractInfo);var t=this;t.request("/contract/addContract",this.contractInfo,"POST",{}).then((function(a){"success"==a.data.status?(t.$message({message:"创建成功，即将跳转至合同列表！",type:"success"}),setTimeout((function(){t.$router.push({path:"/contract"})}),1200)):t.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(a){console.log(a),t.$message({message:"出错了！",type:"error"})}))},edit:function(){console.log(this.patent_Data),console.log(this.contractInfo);var t=this;t.request("/contract/updateContract",this.contractInfo,"POST",{}).then((function(a){"success"==a.data.status?(t.$message({message:"更新成功，即将跳转至合同列表！",type:"success"}),setTimeout((function(){t.$router.push({path:"/contract"})}),1200)):t.$message({message:a.data.data.errMsg,type:"error"})})).catch((function(a){console.log(a),t.$message({message:"出错了！",type:"error"})}))}}},i=c,r=(e("4c60"),e("2877")),l=Object(r["a"])(i,o,n,!1,null,null,null);a["default"]=l.exports},a47d:function(t,a,e){}}]);