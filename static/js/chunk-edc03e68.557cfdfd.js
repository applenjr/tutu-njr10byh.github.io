(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-edc03e68"],{1148:function(e,t,n){"use strict";var a=n("a691"),r=n("1d80");e.exports="".repeat||function(e){var t=String(r(this)),n="",o=a(e);if(o<0||o==1/0)throw RangeError("Wrong number of repetitions");for(;o>0;(o>>>=1)&&(t+=t))1&o&&(n+=t);return n}},"14c3":function(e,t,n){var a=n("c6b6"),r=n("9263");e.exports=function(e,t){var n=e.exec;if("function"===typeof n){var o=n.call(e,t);if("object"!==typeof o)throw TypeError("RegExp exec method returned something other than an Object or null");return o}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return r.call(e,t)}},"1cb3":function(e,t,n){"use strict";n("76a5")},"38cf":function(e,t,n){var a=n("23e7"),r=n("1148");a({target:"String",proto:!0},{repeat:r})},5319:function(e,t,n){"use strict";var a=n("d784"),r=n("825a"),o=n("7b0b"),s=n("50c4"),i=n("a691"),c=n("1d80"),l=n("8aa5"),d=n("14c3"),u=Math.max,f=Math.min,_=Math.floor,p=/\$([$&'`]|\d\d?|<[^>]*>)/g,h=/\$([$&'`]|\d\d?)/g,m=function(e){return void 0===e?e:String(e)};a("replace",2,(function(e,t,n,a){var v=a.REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE,b=a.REPLACE_KEEPS_$0,g=v?"$":"$0";return[function(n,a){var r=c(this),o=void 0==n?void 0:n[e];return void 0!==o?o.call(n,r,a):t.call(String(r),n,a)},function(e,a){if(!v&&b||"string"===typeof a&&-1===a.indexOf(g)){var o=n(t,e,this,a);if(o.done)return o.value}var c=r(e),_=String(this),p="function"===typeof a;p||(a=String(a));var h=c.global;if(h){var P=c.unicode;c.lastIndex=0}var C=[];while(1){var I=d(c,_);if(null===I)break;if(C.push(I),!h)break;var k=String(I[0]);""===k&&(c.lastIndex=l(_,s(c.lastIndex),P))}for(var $="",F=0,A=0;A<C.length;A++){I=C[A];for(var E=String(I[0]),y=u(f(i(I.index),_.length),0),w=[],R=1;R<I.length;R++)w.push(m(I[R]));var S=I.groups;if(p){var M=[E].concat(w,y,_);void 0!==S&&M.push(S);var T=String(a.apply(void 0,M))}else T=x(E,_,y,w,S,a);y>=F&&($+=_.slice(F,y)+T,F=y+E.length)}return $+_.slice(F)}];function x(e,n,a,r,s,i){var c=a+e.length,l=r.length,d=h;return void 0!==s&&(s=o(s),d=p),t.call(i,d,(function(t,o){var i;switch(o.charAt(0)){case"$":return"$";case"&":return e;case"`":return n.slice(0,a);case"'":return n.slice(c);case"<":i=s[o.slice(1,-1)];break;default:var d=+o;if(0===d)return t;if(d>l){var u=_(d/10);return 0===u?t:u<=l?void 0===r[u-1]?o.charAt(1):r[u-1]+o.charAt(1):t}i=r[d-1]}return void 0===i?"":i}))}}))},"76a5":function(e,t,n){},"8aa5":function(e,t,n){"use strict";var a=n("6547").charAt;e.exports=function(e,t,n){return t+(n?a(e,t).length:1)}},9263:function(e,t,n){"use strict";var a=n("ad6d"),r=n("9f7f"),o=RegExp.prototype.exec,s=String.prototype.replace,i=o,c=function(){var e=/a/,t=/b*/g;return o.call(e,"a"),o.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=r.UNSUPPORTED_Y||r.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=c||d||l;u&&(i=function(e){var t,n,r,i,u=this,f=l&&u.sticky,_=a.call(u),p=u.source,h=0,m=e;return f&&(_=_.replace("y",""),-1===_.indexOf("g")&&(_+="g"),m=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(p="(?: "+p+")",m=" "+m,h++),n=new RegExp("^(?:"+p+")",_)),d&&(n=new RegExp("^"+p+"$(?!\\s)",_)),c&&(t=u.lastIndex),r=o.call(f?n:u,m),f?r?(r.input=r.input.slice(h),r[0]=r[0].slice(h),r.index=u.lastIndex,u.lastIndex+=r[0].length):u.lastIndex=0:c&&r&&(u.lastIndex=u.global?r.index+r[0].length:t),d&&r&&r.length>1&&s.call(r[0],n,(function(){for(i=1;i<arguments.length-2;i++)void 0===arguments[i]&&(r[i]=void 0)})),r}),e.exports=i},"9f7f":function(e,t,n){"use strict";var a=n("d039");function r(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=r("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=r("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,n){"use strict";var a=n("23e7"),r=n("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==r},{exec:r})},ad6d:function(e,t,n){"use strict";var a=n("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},bc80:function(e,t,n){e.exports=n.p+"static/img/ava.edde3cb7.jpg"},d784:function(e,t,n){"use strict";n("ac1f");var a=n("6eeb"),r=n("d039"),o=n("b622"),s=n("9263"),i=n("9112"),c=o("species"),l=!r((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=o("replace"),f=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),_=!r((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var n="ab".split(e);return 2!==n.length||"a"!==n[0]||"b"!==n[1]}));e.exports=function(e,t,n,u){var p=o(e),h=!r((function(){var t={};return t[p]=function(){return 7},7!=""[e](t)})),m=h&&!r((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[p]=/./[p]),n.exec=function(){return t=!0,null},n[p](""),!t}));if(!h||!m||"replace"===e&&(!l||!d||f)||"split"===e&&!_){var v=/./[p],b=n(p,""[e],(function(e,t,n,a,r){return t.exec===s?h&&!r?{done:!0,value:v.call(t,n,a)}:{done:!0,value:e.call(n,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:f}),g=b[0],x=b[1];a(String.prototype,e,g),a(RegExp.prototype,p,2==t?function(e,t){return x.call(e,this,t)}:function(e){return x.call(e,this)})}u&&i(RegExp.prototype[p],"sham",!0)}},e382:function(e,t,n){"use strict";n.r(t);var a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"UserInfo"},[n("div",{staticClass:"Left"},[n("div",{staticClass:"MainInfo"},[e._m(0),n("div",{staticClass:"username"},[e._v(e._s(e.userinfo.username))]),n("div",{staticClass:"authorize"},[e._v(e._s(e.userinfo.authorize))])])]),n("div",{staticClass:"Right"},[n("div",{staticClass:"right_box"},[e._m(1),n("div",{staticClass:"InfoDetail"},[n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("姓名")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.userinfo.username))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("工号 / 学号")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.userinfo.number))])])]),n("div",{staticClass:"Part",on:{click:function(t){e.LinkPhoneVisible=!0}}},[n("div",{staticClass:"Info_Menu"},[e._v("联系方式")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.userinfo.userPhone))])])]),["root","admin","superadmin"].includes(this.$store.state.signed_authorize)?n("div",{staticClass:"Part",on:{click:function(t){e.editInfoVisible=!0}}},[n("div",{staticClass:"Info_Menu"},[e._v("身份证号")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.userinfo.userIdCard))])])]):e._e(),n("div",{staticClass:"Part",on:{click:function(t){e.editInfoVisible=!0}}},[n("div",{staticClass:"Info_Menu"},[e._v("电子邮箱")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.userinfo.userEmail))])])]),["root","superadmin","admin"].includes(this.$store.state.signed_authorize)?n("div",{staticClass:"Part Manage",on:{click:e.change_distribution}},[n("div",{staticClass:"Info_Menu"},[e._v("调整收益分配比例")])]):e._e()])]),["root","superadmin","admin"].includes(this.$store.state.signed_authorize)?n("t-divider",{staticStyle:{padding:"10px 30px"},attrs:{align:"center"}},[n("t-icon",{attrs:{name:"tools"}})],1):e._e(),["root","superadmin","admin"].includes(this.$store.state.signed_authorize)?n("div",{staticClass:"right_box"},[n("div",{staticClass:"title"},[n("div",{staticClass:"top"},[e._v(" 信息维护（合同乙方） "),n("t-button",{attrs:{variant:"outline",theme:"warning"},on:{click:function(t){e.fixContractInfoVisible=!0}}},[n("t-icon",{attrs:{name:"edit"}}),e._v(" 修改信息 ")],1)],1),n("div",{staticClass:"below"},[e._v("你可以在这里对常用信息进行更新维护")])]),n("div",{staticClass:"InfoDetail"},[n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("法定代表人")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbRepresentative))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("电话")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbTel))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("邮箱")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbEmail))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("通讯地址")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbMailingAddress))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("地址")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbAddress))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("开户银行")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbBankName))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("银行账户名称")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbBankAccountName))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("银行账户")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.contractPbBankAccount))])])]),n("div",{staticClass:"Part"},[n("div",{staticClass:"Info_Menu"},[e._v("现金奖励公示联系地址")]),n("div",{staticClass:"Info_Answer"},[n("span",[e._v(e._s(e.fix_ruleForm.cashRewardContactAddress))])])])])]):e._e(),["root","superadmin"].includes(this.$store.state.signed_authorize)?n("t-divider",{staticStyle:{padding:"10px 30px"},attrs:{align:"center"}},[e._v(" 超级管理员 ")]):e._e(),["root","superadmin"].includes(this.$store.state.signed_authorize)?n("div",{staticClass:"right_box"},[e._m(2),n("div",{staticClass:"InfoDetail"},[n("div",{staticClass:"Part Manage",on:{click:e.manager}},[n("div",{staticClass:"Info_Menu"},[e._v("人员管理")])]),n("div",{staticClass:"Part Manage",on:{click:e.opreate_history}},[n("div",{staticClass:"Info_Menu"},[e._v("操作记录")])])])]):e._e()],1),n("el-dialog",{attrs:{title:"绑定手机号",visible:e.LinkPhoneVisible,"modal-append-to-body":!1,width:"350px"},on:{"update:visible":function(t){e.LinkPhoneVisible=t}}},[n("el-form",{ref:"phone_ruleForm",attrs:{model:e.phone_code,rules:e.phone_rules}},[""==e.userinfo.userPhone||null==e.userinfo.userPhone?n("el-form-item",{attrs:{label:"绑定手机号"}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入手机号",type:"number"},model:{value:e.phone_code.phone,callback:function(t){e.$set(e.phone_code,"phone",t)},expression:"phone_code.phone"}}),n("el-input",{staticClass:"input-with-select",staticStyle:{"margin-top":"10px"},attrs:{placeholder:"请输入验证码"},model:{value:e.phone_code.code,callback:function(t){e.$set(e.phone_code,"code",t)},expression:"phone_code.code"}},[e.send_code?n("el-button",{attrs:{slot:"append",disabled:""},slot:"append"},[e._v(e._s(e.send_code_second)+"秒之后重新获取")]):n("el-button",{attrs:{slot:"append",loading:e.button_loading},on:{click:e.send_code_addPhone},slot:"append"},[e._v("获取验证码 ")])],1)],1):e._e(),""==e.userinfo.userPhone||null==e.userinfo.userPhone&&!e.verify_phone?n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("t-button",{staticStyle:{"margin-right":"10px"},attrs:{theme:"default"},on:{click:function(t){e.LinkPhoneVisible=!1}}},[e._v("取 消 ")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(t){return e.confirm_code("add")}}},[e._v(" 确 认 ")])],1):e._e(),""==e.userinfo.userPhone||null==e.userinfo.userPhone||e.verify_phone?e._e():n("el-form-item",{attrs:{label:"修改绑定手机号"}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入验证码"},model:{value:e.phone_code.code,callback:function(t){e.$set(e.phone_code,"code",t)},expression:"phone_code.code"}},[e.send_code?n("el-button",{attrs:{slot:"append",disabled:""},slot:"append"},[e._v(e._s(e.send_code_second)+"秒之后重新获取")]):n("el-button",{attrs:{slot:"append"},on:{click:e.send_code_fixPhone},slot:"append"},[e._v("获取验证码")])],1)],1),""==e.userinfo.userPhone||null==e.userinfo.userPhone||e.verify_phone?e._e():n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("t-button",{staticStyle:{"margin-right":"10px"},attrs:{theme:"default"},on:{click:function(t){e.LinkPhoneVisible=!1}}},[e._v("取 消 ")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(t){return e.confirm_code("verify")}}},[e._v(" 确 认 ")])],1),""!=e.userinfo.userPhone&&null!=e.userinfo.userPhone&&e.verify_phone?n("el-form-item",{attrs:{label:"绑定新的手机号"}},[n("el-input",{staticClass:"input-with-select",attrs:{placeholder:"请输入手机号",type:"number"},model:{value:e.phone_code.phone,callback:function(t){e.$set(e.phone_code,"phone",t)},expression:"phone_code.phone"}}),n("el-input",{staticClass:"input-with-select",staticStyle:{"margin-top":"10px"},attrs:{placeholder:"请输入验证码"},model:{value:e.phone_code.code,callback:function(t){e.$set(e.phone_code,"code",t)},expression:"phone_code.code"}},[e.send_code?n("el-button",{attrs:{slot:"append",disabled:""},slot:"append"},[e._v(e._s(e.send_code_second)+"秒之后重新获取")]):n("el-button",{attrs:{slot:"append",loading:e.button_loading},on:{click:e.send_code_addPhone},slot:"append"},[e._v(" 获取验证码 ")])],1)],1):e._e(),""!=e.userinfo.userPhone&&null!=e.userinfo.userPhone&&e.verify_phone?n("div",{staticStyle:{display:"flex","justify-content":"flex-end"}},[n("t-button",{staticStyle:{"margin-right":"10px"},attrs:{theme:"default"},on:{click:function(t){e.LinkPhoneVisible=!1}}},[e._v(" 取 消 ")]),n("t-button",{attrs:{theme:"primary"},on:{click:function(t){return e.confirm_code("fix")}}},[e._v(" 确 认 ")])],1):e._e()],1)],1),n("el-dialog",{attrs:{title:"修改信息",visible:e.editInfoVisible,width:"35%","modal-append-to-body":!1},on:{"update:visible":function(t){e.editInfoVisible=t}}},[n("el-form",{ref:"info_ruleForm",attrs:{model:e.info_ruleForm,rules:e.info_rules}},[["root","superadmin","admin"].includes(this.$store.state.signed_authorize)?n("el-form-item",{attrs:{label:"身份证号",prop:"userIdCard"}},[n("el-input",{model:{value:e.info_ruleForm.userIdCard,callback:function(t){e.$set(e.info_ruleForm,"userIdCard",t)},expression:"info_ruleForm.userIdCard"}})],1):e._e(),n("el-form-item",{attrs:{label:"电子邮箱",prop:"userEmail"}},[n("el-input",{model:{value:e.info_ruleForm.userEmail,callback:function(t){e.$set(e.info_ruleForm,"userEmail",t)},expression:"info_ruleForm.userEmail"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("t-button",{staticStyle:{"margin-right":"10px"},attrs:{theme:"default",size:"large"},on:{click:function(t){e.editInfoVisible=!1}}},[e._v("取 消")]),n("t-button",{attrs:{theme:"primary",size:"large"},on:{click:function(t){return e.ConfirmChange("info_ruleForm")}}},[e._v(" 确 认 ")])],1)],1),n("el-dialog",{attrs:{title:"信息维护",visible:e.fixContractInfoVisible,width:"800px","modal-append-to-body":!1},on:{"update:visible":function(t){e.fixContractInfoVisible=t}}},[n("el-form",{ref:"fix_ruleForm",attrs:{model:e.fix_ruleForm,rules:e.fix_rules,inline:""}},[n("el-form-item",{attrs:{label:"法定代表人"}},[n("el-input",{staticStyle:{width:"150px"},model:{value:e.fix_ruleForm.contractPbRepresentative,callback:function(t){e.$set(e.fix_ruleForm,"contractPbRepresentative",t)},expression:"fix_ruleForm.contractPbRepresentative"}})],1),n("el-form-item",{attrs:{label:"电话",prop:"contractPbTel"}},[n("el-input",{staticStyle:{width:"150px"},model:{value:e.fix_ruleForm.contractPbTel,callback:function(t){e.$set(e.fix_ruleForm,"contractPbTel",t)},expression:"fix_ruleForm.contractPbTel"}})],1),n("el-form-item",{attrs:{label:"邮箱",prop:"contractPbEmail"}},[n("el-input",{staticStyle:{width:"240px"},model:{value:e.fix_ruleForm.contractPbEmail,callback:function(t){e.$set(e.fix_ruleForm,"contractPbEmail",t)},expression:"fix_ruleForm.contractPbEmail"}})],1),n("el-form-item",{attrs:{label:"通讯地址"}},[n("el-input",{staticStyle:{width:"674px"},model:{value:e.fix_ruleForm.contractPbMailingAddress,callback:function(t){e.$set(e.fix_ruleForm,"contractPbMailingAddress",t)},expression:"fix_ruleForm.contractPbMailingAddress"}})],1),n("el-form-item",{attrs:{label:"地址"}},[n("el-input",{staticStyle:{width:"703px"},model:{value:e.fix_ruleForm.contractPbAddress,callback:function(t){e.$set(e.fix_ruleForm,"contractPbAddress",t)},expression:"fix_ruleForm.contractPbAddress"}})],1),n("el-form-item",{attrs:{label:"开户银行"}},[n("el-input",{staticStyle:{width:"192px"},model:{value:e.fix_ruleForm.contractPbBankName,callback:function(t){e.$set(e.fix_ruleForm,"contractPbBankName",t)},expression:"fix_ruleForm.contractPbBankName"}})],1),n("el-form-item",{attrs:{label:"银行账户名称"}},[n("el-input",{staticStyle:{width:"150px"},model:{value:e.fix_ruleForm.contractPbBankAccountName,callback:function(t){e.$set(e.fix_ruleForm,"contractPbBankAccountName",t)},expression:"fix_ruleForm.contractPbBankAccountName"}})],1),n("el-form-item",{attrs:{label:"银行账户"}},[n("el-input",{staticStyle:{width:"150px"},model:{value:e.fix_ruleForm.contractPbBankAccount,callback:function(t){e.$set(e.fix_ruleForm,"contractPbBankAccount",t)},expression:"fix_ruleForm.contractPbBankAccount"}})],1),n("el-form-item",{attrs:{label:"现金奖励公示联系地址"}},[n("el-input",{staticStyle:{width:"593px"},model:{value:e.fix_ruleForm.cashRewardContactAddress,callback:function(t){e.$set(e.fix_ruleForm,"cashRewardContactAddress",t)},expression:"fix_ruleForm.cashRewardContactAddress"}})],1)],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("t-button",{staticStyle:{"margin-right":"10px"},attrs:{theme:"default",size:"large"},on:{click:function(t){e.fixContractInfoVisible=!1}}},[e._v("取 消")]),n("t-button",{attrs:{theme:"primary",size:"large"},on:{click:function(t){return e.ConfirmChange("fix_ruleForm")}}},[e._v(" 确 认 ")])],1)],1)],1)},r=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Ava"},[a("img",{attrs:{src:n("bc80"),alt:""}})])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"top"},[e._v(" 用户信息 ")]),n("div",{staticClass:"below"},[e._v(" 你的个人信息，其中包括可以联系到您的电话号码和电子邮件地址 ")])])},function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"title"},[n("div",{staticClass:"top"},[e._v("管理")]),n("div",{staticClass:"below"},[e._v("您是尊贵的管理员，可以在这里查看您的员工信息以及员工的操作记录")])])}],o=n("1da1"),s=(n("96cf"),n("caad"),n("ac1f"),n("5319"),n("fb6a"),n("38cf"),n("2f62"),n("61f7")),i=n("5f87"),c={mounted:function(){Object(i["a"])()},created:function(){this.refresh()},data:function(){return{userinfo:{username:this.$store.state.signed_username,authorize:"",number:this.$store.state.signed_id,userPhone:"",userIdCard:"",userEmail:""},editInfoVisible:!1,LinkPhoneVisible:!1,send_code:!1,send_code_second:"",phone_code:{phone:"",code:""},code_timer:null,verify_phone:!1,button_loading:!1,phone_rules:{phone:[{required:!0,validator:s["d"],trigger:"blur"}]},info_ruleForm:{userIdCard:"",userPhone:"",userEmail:""},info_rules:{userPhone:[{required:!0,validator:s["d"],trigger:"blur"}],userIdCard:[{required:!0,validator:s["c"],trigger:"blur"}],userEmail:[{required:!0,validator:s["b"],trigger:"blur"}]},commonInfo:{cashRewardContactAddress:"",contractPbAddress:"",contractPbBankAccount:"",contractPbBankAccountName:"",contractPbBankName:"",contractPbEmail:"",contractPbMailingAddress:"",contractPbRepresentative:"",contractPbTel:""},fixContractInfoVisible:!1,fix_ruleForm:{cashRewardContactAddress:"",contractPbAddress:"",contractPbBankAccount:"",contractPbBankAccountName:"",contractPbBankName:"",contractPbEmail:"",contractPbMailingAddress:"",contractPbRepresentative:"",contractPbTel:""},fix_rules:{contractPbTel:[{required:!0,validator:s["d"],trigger:"blur"}],contractPbEmail:[{required:!0,validator:s["b"],trigger:"blur"}]}}},methods:{refresh:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:console.log(e.$store.state.signed_authorize),t.t0=e.$store.state.signed_authorize,t.next="teacher"===t.t0?4:"superadmin"===t.t0?6:"admin"===t.t0?8:"finance"===t.t0?10:"root"===t.t0?12:14;break;case 4:return e.userinfo.authorize="教师",t.abrupt("break",14);case 6:return e.userinfo.authorize="产学研超级管理员",t.abrupt("break",14);case 8:return e.userinfo.authorize="产学研",t.abrupt("break",14);case 10:return e.userinfo.authorize="财务处",t.abrupt("break",14);case 12:return e.userinfo.authorize="Root",t.abrupt("break",14);case 14:return t.next=16,e.request("/user/getUserContactInfo",{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.userinfo.userPhone=t.data.data.userPhone,console.log(e.userinfo.authorize),["Root","产学研超级管理员","产学研"].includes(e.userinfo.authorize)&&(e.userinfo.userIdCard=t.data.data.userIdCard.replace(t.data.data.userIdCard.slice(4,14),"*".repeat(10))),e.userinfo.userEmail=t.data.data.userEmail,e.info_ruleForm.userPhone=t.data.data.userPhone,e.info_ruleForm.userIdCard=t.data.data.userIdCard,e.info_ruleForm.userEmail=t.data.data.userEmail):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.loading=!1,e.$message.error("出错了！")}));case 16:if(!["root","superadmin","admin"].includes(e.$store.state.signed_authorize)){t.next=19;break}return t.next=19,e.request("/basicInfo/getBasicInfo",{},"GET",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.commonInfo.cashRewardContactAddress=t.data.data.cashRewardContactAddress,e.commonInfo.contractPbAddress=t.data.data.contractPbAddress,e.commonInfo.contractPbBankAccount=t.data.data.contractPbBankAccount,e.commonInfo.contractPbBankAccountName=t.data.data.contractPbBankAccountName,e.commonInfo.contractPbBankName=t.data.data.contractPbBankName,e.commonInfo.contractPbEmail=t.data.data.contractPbEmail,e.commonInfo.contractPbMailingAddress=t.data.data.contractPbMailingAddress,e.commonInfo.contractPbRepresentative=t.data.data.contractPbRepresentative,e.commonInfo.contractPbTel=t.data.data.contractPbTel,e.fix_ruleForm.cashRewardContactAddress=t.data.data.cashRewardContactAddress,e.fix_ruleForm.contractPbAddress=t.data.data.contractPbAddress,e.fix_ruleForm.contractPbBankAccount=t.data.data.contractPbBankAccount,e.fix_ruleForm.contractPbBankAccountName=t.data.data.contractPbBankAccountName,e.fix_ruleForm.contractPbBankName=t.data.data.contractPbBankName,e.fix_ruleForm.contractPbEmail=t.data.data.contractPbEmail,e.fix_ruleForm.contractPbMailingAddress=t.data.data.contractPbMailingAddress,e.fix_ruleForm.contractPbRepresentative=t.data.data.contractPbRepresentative,e.fix_ruleForm.contractPbTel=t.data.data.contractPbTel):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.loading=!1,e.$message.error("出错了！")}));case 19:case"end":return t.stop()}}),t)})))()},change_distribution:function(){this.$router.push({path:"/change_distribution"})},manager:function(){this.$router.push({path:"/userlist"})},opreate_history:function(){this.$router.push({path:"/opreate_log"})},send_code_addPhone:function(){var e=this,t=/^((13[0-9])|(14[5-9])|(15([0-3]|[5-9]))|(16[6-7])|(17[1-8])|(18[0-9])|(19[1|3])|(19[5|6])|(19[8|9]))\d{8}$/;if([void 0,null,""].includes(this.phone_code.phone))this.$message.warning("请输入手机号");else if(t.test(this.phone_code.phone)){var n="/user/sendCodeMsg?phone="+this.phone_code.phone;this.request(n,{},"GET",{}).then((function(t){console.log(t.data),e.button_loading=!1,"success"==t.data.status?(e.button_loading=!1,e.$message.success("验证码已发送，请注意查收！"),e.send_code=!0,e.send_code_second=60,e.code_timer=setInterval((function(){0==e.send_code_second?(clearInterval(e.code_timer),e.send_code=!1):e.send_code_second--}),1e3)):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.button_loading=!1,e.$message.error("出错了！")}))}else this.$message.warning("请输入正确的11位手机号码")},send_code_fixPhone:function(){var e=this,t=this;this.verify_phone=!1,console.log(this.userinfo);var n="/user/sendCodeMsg?phone="+this.userinfo.userPhone;this.request(n,{},"GET",{}).then((function(n){console.log(n.data),"success"==n.data.status?(e.send_code=!0,e.send_code_second=60,e.code_timer=setInterval((function(){0==e.send_code_second?(clearInterval(e.code_timer),e.send_code=!1):e.send_code_second--}),1e3),e.$message.success("验证码已发送，请注意查收！")):(t.send_code=!1,e.$message.error(n.data.data.errMsg))})).catch((function(n){console.log(n),t.send_code=!1,e.$message.error("出错了！")}))},confirm_code:function(e){var t=this,n=this;if(""==n.phone_code.code||null==n.phone_code.code)this.$message.warning("请填写验证码！");else switch(e){case"add":console.log(this.phone_code),this.request("/user/addPhone",n.phone_code,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(n.$message.success("绑定手机成功！"),n.LinkPhoneVisible=!1,n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",clearInterval(n.code_timer),t.refresh()):(n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",n.$message.error(e.data.data.errMsg))})).catch((function(e){console.log(e),n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",n.$message.error("出错了！")}));break;case"verify":n.phone_code.phone=n.userinfo.userPhone,n.verify_phone=!1,this.request("/user/verifyPhone",n.phone_code,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(n.$message.success("验证成功！"),n.verify_phone=!0,n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",clearInterval(n.code_timer)):(n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",n.$message.error(e.data.data.errMsg))})).catch((function(e){console.log(e),n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",n.$message.error("出错了！")}));break;case"fix":n.verify_phone=!1,this.request("/user/updatePhone",n.phone_code,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(n.$message.success("修改绑定手机成功！"),n.LinkPhoneVisible=!1,n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",clearInterval(n.code_timer),t.refresh()):(n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",n.$message.error(e.data.data.errMsg))})).catch((function(e){console.log(e),n.send_code=!1,n.phone_code.phone="",n.phone_code.code="",n.$message.error("出错了！")}));break}},ConfirmChange:function(e){var t=this;this.$refs[e].validate((function(n){if(n)switch(console.log(e),e){case"info_ruleForm":t.ConfirmInfo();break;case"fix_ruleForm":t.ConfirmFix();break}}))},ConfirmInfo:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n,a,r,o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n=!1,""==e.info_ruleForm.userPhone||null==e.info_ruleForm.userPhone){t.next=7;break}return a={},a.type=1,a.value=e.info_ruleForm.userPhone,t.next=7,e.request("/user/updateUserInfo",a,"POST",{}).then((function(t){console.log(t.data),"success"==t.data.status?n=!0:e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.loading=!1,e.$message.error("出错了！")}));case 7:if(""==e.info_ruleForm.userEmail||null==e.info_ruleForm.userEmail){t.next=13;break}return r={},r.type=2,r.value=e.info_ruleForm.userEmail,t.next=13,e.request("/user/updateUserInfo",r,"POST",{}).then((function(t){console.log(t.data),"success"==t.data.status?n=!0:e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.loading=!1,e.$message.error("出错了！")}));case 13:if(""==e.info_ruleForm.userIdCard||null==e.info_ruleForm.userIdCard){t.next=19;break}return o={},o.type=3,o.value=e.info_ruleForm.userIdCard,t.next=19,e.request("/user/updateUserInfo",o,"POST",{}).then((function(t){console.log(t.data),"success"==t.data.status?n=!0:e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.loading=!1,e.$message.error("出错了！")}));case 19:n&&e.$message.success("修改成功！"),e.refresh(),e.editInfoVisible=!1;case 22:case"end":return t.stop()}}),t)})))()},ConfirmFix:function(){var e=this;this.request("/basicInfo/updateBasicInfo",this.fix_ruleForm,"POST",{}).then((function(t){console.log(t.data),"success"==t.data.status?(e.$message.success("更新成功！"),e.fixContractInfoVisible=!1):e.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),e.$message.error("出错了！")}))}}},l=c,d=(n("1cb3"),n("2877")),u=Object(d["a"])(l,a,r,!1,null,null,null);t["default"]=u.exports}}]);