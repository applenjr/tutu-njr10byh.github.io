(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b8c315a"],{1276:function(e,t,a){"use strict";var r=a("d784"),s=a("44e7"),n=a("825a"),o=a("1d80"),c=a("4840"),i=a("8aa5"),l=a("50c4"),d=a("14c3"),u=a("9263"),p=a("d039"),g=[].push,f=Math.min,m=4294967295,h=!p((function(){return!RegExp(m,"y")}));r("split",2,(function(e,t,a){var r;return r="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,a){var r=String(o(this)),n=void 0===a?m:a>>>0;if(0===n)return[];if(void 0===e)return[r];if(!s(e))return t.call(r,e,n);var c,i,l,d=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),f=0,h=new RegExp(e.source,p+"g");while(c=u.call(h,r)){if(i=h.lastIndex,i>f&&(d.push(r.slice(f,c.index)),c.length>1&&c.index<r.length&&g.apply(d,c.slice(1)),l=c[0].length,f=i,d.length>=n))break;h.lastIndex===c.index&&h.lastIndex++}return f===r.length?!l&&h.test("")||d.push(""):d.push(r.slice(f)),d.length>n?d.slice(0,n):d}:"0".split(void 0,0).length?function(e,a){return void 0===e&&0===a?[]:t.call(this,e,a)}:t,[function(t,a){var s=o(this),n=void 0==t?void 0:t[e];return void 0!==n?n.call(t,s,a):r.call(String(s),t,a)},function(e,s){var o=a(r,e,this,s,r!==t);if(o.done)return o.value;var u=n(e),p=String(this),g=c(u,RegExp),b=u.unicode,v=(u.ignoreCase?"i":"")+(u.multiline?"m":"")+(u.unicode?"u":"")+(h?"y":"g"),x=new g(h?u:"^(?:"+u.source+")",v),P=void 0===s?m:s>>>0;if(0===P)return[];if(0===p.length)return null===d(x,p)?[p]:[];var w=0,_=0,y=[];while(_<p.length){x.lastIndex=h?_:0;var z,$=d(x,h?p:p.slice(_));if(null===$||(z=f(l(x.lastIndex+(h?0:_)),p.length))===w)_=i(p,_,b);else{if(y.push(p.slice(w,_)),y.length===P)return y;for(var k=1;k<=$.length-1;k++)if(y.push($[k]),y.length===P)return y;_=w=z}}return y.push(p.slice(w)),y}]}),!h)},"14c3":function(e,t,a){var r=a("c6b6"),s=a("9263");e.exports=function(e,t){var a=e.exec;if("function"===typeof a){var n=a.call(e,t);if("object"!==typeof n)throw TypeError("RegExp exec method returned something other than an Object or null");return n}if("RegExp"!==r(e))throw TypeError("RegExp#exec called on incompatible receiver");return s.call(e,t)}},"5bab":function(e,t,a){},"63b3":function(e,t,a){"use strict";a("5bab")},"8aa5":function(e,t,a){"use strict";var r=a("6547").charAt;e.exports=function(e,t,a){return t+(a?r(e,t).length:1)}},9263:function(e,t,a){"use strict";var r=a("ad6d"),s=a("9f7f"),n=RegExp.prototype.exec,o=String.prototype.replace,c=n,i=function(){var e=/a/,t=/b*/g;return n.call(e,"a"),n.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),l=s.UNSUPPORTED_Y||s.BROKEN_CARET,d=void 0!==/()??/.exec("")[1],u=i||d||l;u&&(c=function(e){var t,a,s,c,u=this,p=l&&u.sticky,g=r.call(u),f=u.source,m=0,h=e;return p&&(g=g.replace("y",""),-1===g.indexOf("g")&&(g+="g"),h=String(e).slice(u.lastIndex),u.lastIndex>0&&(!u.multiline||u.multiline&&"\n"!==e[u.lastIndex-1])&&(f="(?: "+f+")",h=" "+h,m++),a=new RegExp("^(?:"+f+")",g)),d&&(a=new RegExp("^"+f+"$(?!\\s)",g)),i&&(t=u.lastIndex),s=n.call(p?a:u,h),p?s?(s.input=s.input.slice(m),s[0]=s[0].slice(m),s.index=u.lastIndex,u.lastIndex+=s[0].length):u.lastIndex=0:i&&s&&(u.lastIndex=u.global?s.index+s[0].length:t),d&&s&&s.length>1&&o.call(s[0],a,(function(){for(c=1;c<arguments.length-2;c++)void 0===arguments[c]&&(s[c]=void 0)})),s}),e.exports=c},"9f7f":function(e,t,a){"use strict";var r=a("d039");function s(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,a){"use strict";var r=a("23e7"),s=a("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==s},{exec:s})},ad6d:function(e,t,a){"use strict";var r=a("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,a){"use strict";a("ac1f");var r=a("6eeb"),s=a("d039"),n=a("b622"),o=a("9263"),c=a("9112"),i=n("species"),l=!s((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),d=function(){return"$0"==="a".replace(/./,"$0")}(),u=n("replace"),p=function(){return!!/./[u]&&""===/./[u]("a","$0")}(),g=!s((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var a="ab".split(e);return 2!==a.length||"a"!==a[0]||"b"!==a[1]}));e.exports=function(e,t,a,u){var f=n(e),m=!s((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),h=m&&!s((function(){var t=!1,a=/a/;return"split"===e&&(a={},a.constructor={},a.constructor[i]=function(){return a},a.flags="",a[f]=/./[f]),a.exec=function(){return t=!0,null},a[f](""),!t}));if(!m||!h||"replace"===e&&(!l||!d||p)||"split"===e&&!g){var b=/./[f],v=a(f,""[e],(function(e,t,a,r,s){return t.exec===o?m&&!s?{done:!0,value:b.call(t,a,r)}:{done:!0,value:e.call(a,t,r)}:{done:!1}}),{REPLACE_KEEPS_$0:d,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=v[0],P=v[1];r(String.prototype,e,x),r(RegExp.prototype,f,2==t?function(e,t){return P.call(e,this,t)}:function(e){return P.call(e,this)})}u&&c(RegExp.prototype[f],"sham",!0)}},fb5f:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"Patents_Container"},[a("div",{staticClass:"head-btn"},[a("div",{staticClass:"Search"},[a("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[a("el-button",{attrs:{type:"primary"}},[e._v(" 查询字段"),a("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),a("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[a("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),a("el-dropdown-item",{attrs:{command:"授权编号"}},[e._v("授权编号")])],1)],1),a("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}},[a("template",{slot:"prepend"},[e._v(e._s(e.SearchType))])],2),a("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1),a("div",{staticClass:"newin_refresh"},[a("div",{staticClass:"refresh"},[a("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表")])],1)])]),a("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[a("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[a("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[a("el-form-item",{attrs:{label:"专利号"}},[a("span",[e._v(e._s(t.row.zlh))])]),a("el-form-item",{attrs:{label:"专利名称"}},[a("span",[e._v(e._s(t.row.zlmc))])]),a("el-form-item",{attrs:{label:"授权编号"}},[a("span",[e._v(e._s(t.row.sqbh))])]),a("el-form-item",{attrs:{label:"归属单位"}},[a("span",[e._v(e._s(t.row.gsdw))])]),a("el-form-item",{attrs:{label:"所有权人"}},[a("span",[e._v(e._s(t.row.zlqr))])]),a("el-form-item",{attrs:{label:"立项编号"}},[a("span",[e._v(e._s(t.row.projectCode))])]),a("el-form-item",{attrs:{label:"批准日期"}},[a("span",[e._v(e._s(t.row.pzrq))])]),a("el-form-item",{attrs:{label:"转换状态"}},[a("span",[e._v(e._s(t.row.state))])]),a("el-form-item",{attrs:{label:"专利代理人"}},[a("span",[e._v(e._s(t.row.zldlr))])]),a("el-form-item",{attrs:{label:"专利第一作者姓名"}},[a("span",[e._v(e._s(t.row.zldyzzxm))])]),a("el-form-item",{attrs:{label:"专利第一作者工号"}},[a("span",[e._v(e._s(t.row.zldyzzgh))])]),a("el-form-item",{attrs:{label:"最后更新日期"}},[a("span",[e._v(e._s(t.row.zhgxsj))])])],1)]}}])}),a("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),a("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),a("el-table-column",{attrs:{prop:"sqbh",label:"授权编号",width:"160"}}),a("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),a("el-table-column",{attrs:{prop:"zhgxsj",label:"最后更新时间",width:"180"}}),a("el-table-column",{attrs:{prop:"setting",label:"操作"},scopedSlots:e._u([{key:"default",fn:function(t){return["未转换"==t.row.state?a("el-button",{attrs:{icon:"el-icon-coin"},on:{click:function(a){return e.FillingPrice(t.row)}}},[e._v("价格意向")]):e._e(),"未转换"==t.row.state?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.handleExam(t.row)}}},[e._v("填写审批")]):e._e(),"未转换"!=t.row.state&&"已转换"!=t.row.state&&"产学研未通过"!=t.row.state&&"审批表已撤回"!=t.row.state?a("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(a){return e.getPatent(t.row)}}},[e._v("查看审批表")]):e._e(),"正在转换：等待第一作者确认"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-delete"},on:{click:function(a){return e.withDraw(t.row)}}},[e._v("撤回 ")]):e._e(),["产学研未通过","审批表已撤回"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(a){return e.editPatent(t.row)}}},[e._v("修改审批表")]):e._e(),"审批表已撤回"==t.row.state?a("el-button",{attrs:{icon:"el-icon-document-checked"},on:{click:function(a){return e.resubmit(t.row)}}},[e._v("重新提交 ")]):e._e(),["产学研未通过","审批表已撤回"].includes(t.row.state)?a("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(a){return e.deletePatent(t.row)}}},[e._v("删除 ")]):e._e(),"产学研未通过"==t.row.state?a("el-button",{attrs:{icon:"el-icon-mouse"},on:{click:function(a){return e.getFailedReason(t.row)}}},[e._v("查看原因")]):e._e()]}}])})],1),a("div",{staticClass:"PagesCurb"},[a("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),a("el-dialog",{staticClass:"Price_Dialog",attrs:{title:"价格意向",visible:e.PriceVisible,width:"30%"},on:{"update:visible":function(t){e.PriceVisible=t}}},[a("div",{staticClass:"price_expect"},[a("el-input",{attrs:{type:"number",placeholder:"请填写价格意向（单位：万元）"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:function(t){e.PriceVisible=!1}}},[e._v("取 消")]),a("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ConfirmPrice()}}},[e._v("确 认")])],1)]),a("el-dialog",{attrs:{title:"未通过原因",visible:e.dispassDialog,width:"60%"},on:{"update:visible":function(t){e.dispassDialog=t}}},[a("el-table",{attrs:{data:e.dispassData}},[a("el-table-column",{attrs:{prop:"operatorName",label:"姓名"}}),a("el-table-column",{attrs:{prop:"operatorGh",label:"工号"}}),a("el-table-column",{attrs:{prop:"operatorDepartment",label:"工作单位"}}),a("el-table-column",{attrs:{prop:"remarks",label:"未通过原因"}}),a("el-table-column",{attrs:{prop:"gmtCreate",label:"操作时间",width:"180"}})],1)],1)],1)},s=[],n=a("1da1"),o=(a("96cf"),a("b0c0"),a("ac1f"),a("1276"),{data:function(){return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,tableData:[],total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:"",PriceVisible:!1,price:"",price_wid:"",dispassDialog:!1,dispassData:[{operatorName:"",operatorGh:"",operatorDepartment:"",remarks:"",gmtCreate:""}]}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,a.tableData=[],a.currentPage=1,a.SearchType="查询字段",a.SearchText="",console.log(e.$store.state),r="/patent/getMyPatentPage?currPage="+a.currentPage+"&size=10&zldyzzgh="+a.id+"&zldyzzxm="+a.name,a.Page_url=r,t.next=10,a.getUserPatent(r);case 10:case"end":return t.stop()}}),t)})))()},getUserPatent:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,a.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var s={};s.index=a+1,s.wid=e.data.data.records[a].wid,s.sqbh=e.data.data.records[a].sqbh,s.zlmc=e.data.data.records[a].zlmc,s.zlh=e.data.data.records[a].zlh,s.zlqr=e.data.data.records[a].zlqr,s.gsdw=e.data.data.records[a].gsdw,s.zhgxsj=null==e.data.data.records[a].transferProcess?e.data.data.records[a].zhgxsj:e.data.data.records[a].transferProcess.gmtUpdate,s.pzrq=e.data.data.records[a].pzrq,s.zldlr=e.data.data.records[a].zldlr,s.zldyzzgh=e.data.data.records[a].zldyzzgh,s.zldyzzxm=e.data.data.records[a].zldyzzxm,s.zlh=e.data.data.records[a].zlh,s.zlmc=e.data.data.records[a].zlmc,null==e.data.data.records[a].transferProcess?s.gmtUpdate=null:s.gmtUpdate=e.data.data.records[a].transferProcess.gmtUpdate,null==e.data.data.records[a].transferProcess?s.state="未转换":(s.transferProcessId=e.data.data.records[a].transferProcess.transferProcessId,e.data.data.records[a].transferProcess.isWithdraw?s.state="审批表已撤回":e.data.data.records[a].transferProcess.isZldyzzConfirm?e.data.data.records[a].transferProcess.isZldyzzApproval?e.data.data.records[a].transferProcess.isDepartmentConfirm?e.data.data.records[a].transferProcess.isDepartmentApproval?e.data.data.records[a].transferProcess.isComplete?(s.state="已转换",s.projectCode=e.data.data.records[a].transferProcess.projectCode):e.data.data.records[a].transferProcess.isCxyConfirm?e.data.data.records[a].transferProcess.isCxyApproval?(s.projectCode=e.data.data.records[a].transferProcess.projectCode,e.data.data.records[a].transferProcess.isPublicNotice?r.TimeDiffer(e.data.data.records[a].transferProcess.publicNoticeTime)?null==e.data.data.records[a].transferProcess.contractId?s.state="正在转换：等待上传合同":e.data.data.records[a].transferProcess.isContractSendBack&&null!=e.data.data.records[a].transferProcess.voucherId?null==e.data.data.records[a].transferProcess.checklistId?s.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[a].transferProcess.invoiceId?s.state="正在转换：等待上传发票":e.data.data.records[a].transferProcess.isComplete||(s.state="等待流程结束"):s.state="正在转换：等待合同寄回和上传到款凭证":s.state="正在转换：正在公示中":s.state="正在转换：等待公示"):s.state="产学研未通过":s.state="正在转换：等待产学研审批":s.state="归属单位未通过":s.state="正在转换：等待归属单位审批":s.state="第一作者未通过":s.state="正在转换：等待第一作者确认"),r.tableData.push(s)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return a.stop()}}),a)})))()},handleCurrentPage:function(e){var t=this;return Object(n["a"])(regeneratorRuntime.mark((function a(){var r,s;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return r=t,console.log(r.Page_url),s=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(s),r.tableData=[],r.currentPage=e,a.next=8,r.getUserPatent(s);case 8:case"end":return a.stop()}}),a)})))()},TimeTransfer:function(e){var t=new Date(e),a=t.getFullYear(),r=t.getMonth()+1,s=t.getDate(),n=t.getHours(),o=t.getMinutes(),c=t.getSeconds(),i=a+"-";return r<10&&(i+="0"),i+=r+"-",s<10&&(i+="0"),i+=s+" ",n<10&&(i+="0"),i+=n+":",o<10&&(i+="0"),i+=o+":",c<10&&(i+="0"),i+=c,i},TimeDiffer:function(e){var t=this.TimeTransfer(e),a=new Date,r=new Date(t),s=(a-r)/1e3,n=parseInt(s/86400);parseInt(s/3600),parseInt(s%3600/60),parseInt(s%60);return!0},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(a=e,"查询字段"!=a.SearchType){t.next=5;break}e.$message({message:"请填写查询字段！",type:"warning"}),t.next=23;break;case 5:if(""!=a.SearchText){t.next=9;break}e.$message({message:"请填写查询内容！",type:"warning"}),t.next=23;break;case 9:r="",a.tableData=[],a.currentPage=1,t.t0=a.SearchType,t.next="专利名称"===t.t0?15:"授权编号"===t.t0?18:21;break;case 15:return r="/patent/getPatentPageByZLMC?currPage="+a.currentPage+"&size=10&zldyzzgh="+a.id+"&zldyzzxm="+a.name+"&zlmc="+a.SearchText,a.Page_url=r,t.abrupt("break",22);case 18:return r="/patent/getPatentPageBySQBH?currPage="+a.currentPage+"&size=10&sqbh="+a.SearchText+"&zldyzzgh="+a.id+"&zldyzzxm="+a.name,a.Page_url=r,t.abrupt("break",22);case 21:return t.abrupt("break",22);case 22:a.getUserPatent(r);case 23:case"end":return t.stop()}}),t)})))()},FillingPrice:function(e){console.log(e),this.PriceVisible=!0,this.price_wid=e.wid},ConfirmPrice:function(){var e=this;return Object(n["a"])(regeneratorRuntime.mark((function t(){var a,r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,console.log(a.price_wid),console.log(a.price),r={priceIntention:a.price,wid:a.price_wid},s="/intention/getPriceIntentionByWid?wid="+a.price_wid,t.next=7,a.request(s,{},"GET",{}).then((function(t){console.log(t),"success"==t.data.status?a.request("/intention/updatePriceIntention",r,"POST",{}).then((function(t){console.log(t),"fail"==t.data.status?e.$message({type:"error",message:"更新失败！"}):"success"==t.data.status&&(e.$message({type:"success",message:"更新成功！"}),e.PriceVisible=!1)})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})})):"fail"==t.data.status&&a.request("/intention/addPriceIntention",r,"POST",{}).then((function(t){console.log(t),"fail"==t.data.status?e.$message({type:"error",message:"提交失败！"}):"success"==t.data.status&&(e.$message({type:"success",message:"提交成功！"}),e.PriceVisible=!1)})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))})).catch((function(e){}));case 7:case"end":return t.stop()}}),t)})))()},handleExam:function(e){console.log(e),this.$router.push({path:"/filling_exam",query:e})},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:e})},withDraw:function(e){var t=this;console.log(e);var a=this;this.$confirm("确定撤回吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var r={};r.operatorName=a.$store.state.signed_username,r.operatorGh=a.$store.state.signed_id,r.operatorDepartment=a.$store.state.signed_department,r.remarks="",r.transferProcessId=e.transferProcessId,console.log(r),a.request("/process/withdrawProcessById",r,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"撤回成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"取消撤回！"})}))},editPatent:function(e){console.log(e),this.$router.push({path:"/filling_exam",query:e})},deletePatent:function(e){var t=this,a=this;console.log(e),this.$confirm("确定要删除吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"warning"}).then((function(){var r={};r.operatorName=a.$store.state.signed_username,r.operatorGh=a.$store.state.signed_id,r.operatorDepartment=a.$store.state.signed_department,r.remarks="",r.transferProcessId=e.transferProcessId,console.log(r),a.request("/process/deleteProcessById",r,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"删除成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(){t.$message({type:"info",message:"已取消删除"})}))},resubmit:function(e){var t=this;console.log(e);var a=this;this.$confirm("确定重新提交吗？","提示",{confirmButtonText:"确定",cancelButtonText:"取消"}).then((function(){var r={};r.operatorName=a.$store.state.signed_username,r.operatorGh=a.$store.state.signed_id,r.operatorDepartment=a.$store.state.signed_department,r.remarks="",r.transferProcessId=e.transferProcessId,console.log(r),a.request("/process/cancelWithdrawalProcessById",r,"POST",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"提交成功！"}),a.refresh()):t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))})).catch((function(e){console.log(e),t.$message({type:"info",message:"取消撤回！"})}))},getFailedReason:function(e){var t=this,a=this;console.log(e);var r="/process/getCXYNotApprovalReason?transferProcessId="+e.transferProcessId;a.request(r,{},"GET",{}).then((function(e){console.log(e.data),"success"==e.data.status?(t.$message({type:"success",message:"获取成功！"}),a.dispassData[0].operatorName=e.data.data.operatorName,a.dispassData[0].operatorGh=e.data.data.operatorGh,a.dispassData[0].operatorDepartment=e.data.data.operatorDepartment,a.dispassData[0].remarks=e.data.data.remarks,a.dispassData[0].gmtCreate=e.data.data.gmtCreate,a.dispassDialog=!0):t.$message({type:"error",message:e.data.data.errMsg})})).catch((function(e){t.$message({type:"error",message:"出错了！"})}))}}}),c=o,i=(a("63b3"),a("2877")),l=Object(i["a"])(c,r,s,!1,null,null,null);t["default"]=l.exports}}]);