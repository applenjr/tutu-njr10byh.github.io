(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-7b8c315a"],{1276:function(e,t,r){"use strict";var a=r("d784"),n=r("44e7"),s=r("825a"),i=r("1d80"),l=r("4840"),c=r("8aa5"),o=r("50c4"),u=r("14c3"),d=r("9263"),p=r("d039"),f=[].push,g=Math.min,h=4294967295,m=!p((function(){return!RegExp(h,"y")}));a("split",2,(function(e,t,r){var a;return a="c"=="abbc".split(/(b)*/)[1]||4!="test".split(/(?:)/,-1).length||2!="ab".split(/(?:ab)*/).length||4!=".".split(/(.?)(.?)/).length||".".split(/()()/).length>1||"".split(/.?/).length?function(e,r){var a=String(i(this)),s=void 0===r?h:r>>>0;if(0===s)return[];if(void 0===e)return[a];if(!n(e))return t.call(a,e,s);var l,c,o,u=[],p=(e.ignoreCase?"i":"")+(e.multiline?"m":"")+(e.unicode?"u":"")+(e.sticky?"y":""),g=0,m=new RegExp(e.source,p+"g");while(l=d.call(m,a)){if(c=m.lastIndex,c>g&&(u.push(a.slice(g,l.index)),l.length>1&&l.index<a.length&&f.apply(u,l.slice(1)),o=l[0].length,g=c,u.length>=s))break;m.lastIndex===l.index&&m.lastIndex++}return g===a.length?!o&&m.test("")||u.push(""):u.push(a.slice(g)),u.length>s?u.slice(0,s):u}:"0".split(void 0,0).length?function(e,r){return void 0===e&&0===r?[]:t.call(this,e,r)}:t,[function(t,r){var n=i(this),s=void 0==t?void 0:t[e];return void 0!==s?s.call(t,n,r):a.call(String(n),t,r)},function(e,n){var i=r(a,e,this,n,a!==t);if(i.done)return i.value;var d=s(e),p=String(this),f=l(d,RegExp),b=d.unicode,v=(d.ignoreCase?"i":"")+(d.multiline?"m":"")+(d.unicode?"u":"")+(m?"y":"g"),x=new f(m?d:"^(?:"+d.source+")",v),w=void 0===n?h:n>>>0;if(0===w)return[];if(0===p.length)return null===u(x,p)?[p]:[];var P=0,_=0,z=[];while(_<p.length){x.lastIndex=m?_:0;var y,E=u(x,m?p:p.slice(_));if(null===E||(y=g(o(x.lastIndex+(m?0:_)),p.length))===P)_=c(p,_,b);else{if(z.push(p.slice(P,_)),z.length===w)return z;for(var T=1;T<=E.length-1;T++)if(z.push(E[T]),z.length===w)return z;_=P=y}}return z.push(p.slice(P)),z}]}),!m)},"14c3":function(e,t,r){var a=r("c6b6"),n=r("9263");e.exports=function(e,t){var r=e.exec;if("function"===typeof r){var s=r.call(e,t);if("object"!==typeof s)throw TypeError("RegExp exec method returned something other than an Object or null");return s}if("RegExp"!==a(e))throw TypeError("RegExp#exec called on incompatible receiver");return n.call(e,t)}},"5bab":function(e,t,r){},"63b3":function(e,t,r){"use strict";r("5bab")},"8aa5":function(e,t,r){"use strict";var a=r("6547").charAt;e.exports=function(e,t,r){return t+(r?a(e,t).length:1)}},9263:function(e,t,r){"use strict";var a=r("ad6d"),n=r("9f7f"),s=RegExp.prototype.exec,i=String.prototype.replace,l=s,c=function(){var e=/a/,t=/b*/g;return s.call(e,"a"),s.call(t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),o=n.UNSUPPORTED_Y||n.BROKEN_CARET,u=void 0!==/()??/.exec("")[1],d=c||u||o;d&&(l=function(e){var t,r,n,l,d=this,p=o&&d.sticky,f=a.call(d),g=d.source,h=0,m=e;return p&&(f=f.replace("y",""),-1===f.indexOf("g")&&(f+="g"),m=String(e).slice(d.lastIndex),d.lastIndex>0&&(!d.multiline||d.multiline&&"\n"!==e[d.lastIndex-1])&&(g="(?: "+g+")",m=" "+m,h++),r=new RegExp("^(?:"+g+")",f)),u&&(r=new RegExp("^"+g+"$(?!\\s)",f)),c&&(t=d.lastIndex),n=s.call(p?r:d,m),p?n?(n.input=n.input.slice(h),n[0]=n[0].slice(h),n.index=d.lastIndex,d.lastIndex+=n[0].length):d.lastIndex=0:c&&n&&(d.lastIndex=d.global?n.index+n[0].length:t),u&&n&&n.length>1&&i.call(n[0],r,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(n[l]=void 0)})),n}),e.exports=l},"9f7f":function(e,t,r){"use strict";var a=r("d039");function n(e,t){return RegExp(e,t)}t.UNSUPPORTED_Y=a((function(){var e=n("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=a((function(){var e=n("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},ac1f:function(e,t,r){"use strict";var a=r("23e7"),n=r("9263");a({target:"RegExp",proto:!0,forced:/./.exec!==n},{exec:n})},ad6d:function(e,t,r){"use strict";var a=r("825a");e.exports=function(){var e=a(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,r){"use strict";r("ac1f");var a=r("6eeb"),n=r("d039"),s=r("b622"),i=r("9263"),l=r("9112"),c=s("species"),o=!n((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")})),u=function(){return"$0"==="a".replace(/./,"$0")}(),d=s("replace"),p=function(){return!!/./[d]&&""===/./[d]("a","$0")}(),f=!n((function(){var e=/(?:)/,t=e.exec;e.exec=function(){return t.apply(this,arguments)};var r="ab".split(e);return 2!==r.length||"a"!==r[0]||"b"!==r[1]}));e.exports=function(e,t,r,d){var g=s(e),h=!n((function(){var t={};return t[g]=function(){return 7},7!=""[e](t)})),m=h&&!n((function(){var t=!1,r=/a/;return"split"===e&&(r={},r.constructor={},r.constructor[c]=function(){return r},r.flags="",r[g]=/./[g]),r.exec=function(){return t=!0,null},r[g](""),!t}));if(!h||!m||"replace"===e&&(!o||!u||p)||"split"===e&&!f){var b=/./[g],v=r(g,""[e],(function(e,t,r,a,n){return t.exec===i?h&&!n?{done:!0,value:b.call(t,r,a)}:{done:!0,value:e.call(r,t,a)}:{done:!1}}),{REPLACE_KEEPS_$0:u,REGEXP_REPLACE_SUBSTITUTES_UNDEFINED_CAPTURE:p}),x=v[0],w=v[1];a(String.prototype,e,x),a(RegExp.prototype,g,2==t?function(e,t){return w.call(e,this,t)}:function(e){return w.call(e,this)})}d&&l(RegExp.prototype[g],"sham",!0)}},fb5f:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"Patents_Container"},[r("div",{staticClass:"head-btn"},[r("div",{staticClass:"Search"},[r("el-dropdown",{staticClass:"Dropdown",on:{command:e.handleDropdown}},[r("el-button",{attrs:{type:"primary"}},[e._v(" 查询字段"),r("i",{staticClass:"el-icon-arrow-down el-icon--right"})]),r("el-dropdown-menu",{attrs:{slot:"dropdown"},slot:"dropdown"},[r("el-dropdown-item",{attrs:{command:"专利名称"}},[e._v("专利名称")]),r("el-dropdown-item",{attrs:{command:"授权编号"}},[e._v("授权编号")])],1)],1),r("el-input",{attrs:{placeholder:"请输入需要查询的内容"},model:{value:e.SearchText,callback:function(t){e.SearchText=t},expression:"SearchText"}},[r("template",{slot:"prepend"},[e._v(e._s(e.SearchType))])],2),r("el-button",{attrs:{icon:"el-icon-search"},on:{click:e.search}},[e._v("搜索")])],1),r("div",{staticClass:"newin_refresh"},[r("div",{staticClass:"refresh"},[r("el-button",{attrs:{icon:"el-icon-refresh"},on:{click:e.refresh}},[e._v("刷新列表")])],1)])]),r("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{id:"outTable",data:e.tableData,"tooltip-effect":"dark",stripe:""}},[r("el-table-column",{attrs:{type:"expand"},scopedSlots:e._u([{key:"default",fn:function(t){return[r("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[r("el-form-item",{attrs:{label:"专利号"}},[r("span",[e._v(e._s(t.row.zlh))])]),r("el-form-item",{attrs:{label:"专利名称"}},[r("span",[e._v(e._s(t.row.zlmc))])]),r("el-form-item",{attrs:{label:"授权编号"}},[r("span",[e._v(e._s(t.row.sqbh))])]),r("el-form-item",{attrs:{label:"归属单位"}},[r("span",[e._v(e._s(t.row.gsdw))])]),r("el-form-item",{attrs:{label:"所有权人"}},[r("span",[e._v(e._s(t.row.zlqr))])]),r("el-form-item",{attrs:{label:"批准日期"}},[r("span",[e._v(e._s(t.row.pzrq))])]),r("el-form-item",{attrs:{label:"转换状态"}},[r("span",[e._v(e._s(t.row.state))])]),r("el-form-item",{attrs:{label:"专利代理人"}},[r("span",[e._v(e._s(t.row.zldlr))])]),r("el-form-item",{attrs:{label:"专利第一作者姓名"}},[r("span",[e._v(e._s(t.row.zldyzzxm))])]),r("el-form-item",{attrs:{label:"专利第一作者工号"}},[r("span",[e._v(e._s(t.row.zldyzzgh))])]),r("el-form-item",{attrs:{label:"最后更新日期"}},[r("span",[e._v(e._s(t.row.zhgxsj))])])],1)]}}])}),r("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),r("el-table-column",{attrs:{prop:"zlmc",label:"专利名称"}}),r("el-table-column",{attrs:{prop:"sqbh",label:"授权编号",width:"160"}}),r("el-table-column",{attrs:{prop:"state",label:"转换状态",width:"280"}}),r("el-table-column",{attrs:{prop:"zhgxsj",label:"最后更新时间",width:"180"}}),r("el-table-column",{attrs:{prop:"setting",label:"操作",width:"230"},scopedSlots:e._u([{key:"default",fn:function(t){return["未转换"==t.row.state?r("el-button",{attrs:{icon:"el-icon-coin"},on:{click:function(r){return e.FillingPrice(t.row)}}},[e._v("价格意向")]):e._e(),"未转换"==t.row.state?r("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(r){return e.handleExam(t.row)}}},[e._v("填写审批")]):e._e(),"未转换"!=t.row.state&&"已转换"!=t.row.state?r("el-button",{attrs:{icon:"el-icon-document"},on:{click:function(r){return e.getPatent(t.row)}}},[e._v("查看审批表")]):e._e()]}}])})],1),r("div",{staticClass:"PagesCurb"},[r("el-pagination",{staticClass:"pages",attrs:{currentPage:e.currentPage,"page-size":10,layout:"total, prev, pager, next",total:e.total},on:{"current-change":e.handleCurrentPage}})],1),r("el-dialog",{staticClass:"Price_Dialog",attrs:{title:"价格意向",visible:e.PriceVisible,width:"30%"},on:{"update:visible":function(t){e.PriceVisible=t}}},[r("div",{staticClass:"price_expect"},[r("el-input",{attrs:{type:"number",placeholder:"请填写价格意向（单位：万元）"},model:{value:e.price,callback:function(t){e.price=t},expression:"price"}})],1),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(t){e.PriceVisible=!1}}},[e._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(t){return e.ConfirmPrice()}}},[e._v("确 认")])],1)])],1)},n=[],s=r("1da1"),i=(r("96cf"),r("b0c0"),r("ac1f"),r("1276"),{data:function(){return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,tableData:[],total:0,currentPage:1,Page_url:"",SearchType:"查询字段",SearchText:"",PriceVisible:!1,price:"",price_wid:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,r.tableData=[],r.currentPage=1,r.SearchType="查询字段",r.SearchText="",console.log(e.$store.state),a="/patent/getMyPatentPage?currPage="+r.currentPage+"&size=10&zldyzzgh="+r.id+"&zldyzzxm="+r.name,r.Page_url=a,t.next=10,r.getUserPatent(a);case 10:case"end":return t.stop()}}),t)})))()},getUserPatent:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,r.next=3,a.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){a.total=e.data.data.total;for(var r=0;r<e.data.data.records.length;r++){var n={};n.index=r+1,n.wid=e.data.data.records[r].wid,n.sqbh=e.data.data.records[r].sqbh,n.zlmc=e.data.data.records[r].zlmc,n.zlh=e.data.data.records[r].zlh,n.zlqr=e.data.data.records[r].zlqr,n.gsdw=e.data.data.records[r].gsdw,n.zhgxsj=e.data.data.records[r].zhgxsj,n.pzrq=null==e.data.data.records[r].pzrq?"":a.TimeTransfer(e.data.data.records[r].pzrq),n.zldlr=e.data.data.records[r].zldlr,n.zldyzzgh=e.data.data.records[r].zldyzzgh,n.zldyzzxm=e.data.data.records[r].zldyzzxm,n.zlh=e.data.data.records[r].zlh,n.zlmc=e.data.data.records[r].zlmc,null==e.data.data.records[r].transferProcess?n.state="未转换":e.data.data.records[r].transferProcess.isZldyzzConfirm?e.data.data.records[r].transferProcess.isDepartmentConfirm?e.data.data.records[r].transferProcess.isCxyConfirm?e.data.data.records[r].transferProcess.isPublicNotice?a.TimeDiffer(e.data.data.records[r].transferProcess.publicNoticeTime)?null==e.data.data.records[r].transferProcess.contractId?n.state="正在转换：等待上传合同":e.data.data.records[r].transferProcess.isContractSendBack&&null!=e.data.data.records[r].transferProcess.voucherId?null==e.data.data.records[r].transferProcess.checklistId?n.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[r].transferProcess.invoiceId?n.state="正在转换：等待上传发票":n.state="已转换":n.state="正在转换：等待合同寄回和上传到款凭证":n.state="正在转换：正在公示中":n.state="正在转换：等待公示":n.state="正在转换：等待产学研审批":n.state="正在转换：等待所属单位审批":n.state="正在转换：等待第一作者确认",a.tableData.push(n)}t.$message({message:"数据已更新",type:"success"})}else t.$message({message:"数据请求失败",type:"error"})})).catch((function(){t.$message({message:"出错了！",type:"error"})}));case 3:case"end":return r.stop()}}),r)})))()},handleCurrentPage:function(e){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function r(){var a,n;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return a=t,console.log(a.Page_url),n=a.Page_url.split("currPage")[0]+"currPage="+e+"&size"+a.Page_url.split("size")[1],console.log(n),a.tableData=[],a.currentPage=e,r.next=8,a.getUserPatent(n);case 8:case"end":return r.stop()}}),r)})))()},TimeTransfer:function(e){var t=new Date(e),r=t.getFullYear(),a=t.getMonth()+1,n=t.getDate(),s=t.getHours(),i=t.getMinutes(),l=t.getSeconds(),c=r+"-";return a<10&&(c+="0"),c+=a+"-",n<10&&(c+="0"),c+=n+" ",s<10&&(c+="0"),c+=s+":",i<10&&(c+="0"),c+=i+":",l<10&&(c+="0"),c+=l,c},TimeDiffer:function(e){var t=this.TimeTransfer(e),r=new Date,a=new Date(t),n=(r-a)/1e3,s=parseInt(n/86400);parseInt(n/3600),parseInt(n%3600/60),parseInt(n%60);return s>15},handleDropdown:function(e){var t=this;t.SearchType=e},search:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:r=e,a="",r.tableData=[],r.currentPage=1,t.t0=r.SearchType,t.next="专利名称"===t.t0?7:"授权编号"===t.t0?10:13;break;case 7:return a="/patent/getPatentPageByZLMC?currPage="+r.currentPage+"&size=10&zldyzzgh="+r.id+"&zldyzzxm="+r.name+"&zlmc="+r.SearchText,r.Page_url=a,t.abrupt("break",14);case 10:return a="/patent/getPatentPageBySQBH?currPage="+r.currentPage+"&size=10&sqbh="+r.SearchText+"&zldyzzgh="+r.id+"&zldyzzxm="+r.name,r.Page_url=a,t.abrupt("break",14);case 13:return t.abrupt("break",14);case 14:console.log(a),r.getUserPatent(a);case 16:case"end":return t.stop()}}),t)})))()},FillingPrice:function(e){console.log(e),this.PriceVisible=!0,this.price_wid=e.wid},ConfirmPrice:function(){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function t(){var r,a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e,console.log(r.price_wid),console.log(r.price),a={priceIntention:r.price,wid:r.price_wid},n="/intention/getPriceIntentionByWid?wid="+r.price_wid,t.next=7,r.request(n,{},"GET",{}).then((function(t){console.log(t),"success"==t.data.status?r.request("/intention/updatePriceIntention",a,"POST",{}).then((function(t){console.log(t),"fail"==t.data.status?e.$message({type:"error",message:"更新失败！"}):"success"==t.data.status&&(e.$message({type:"success",message:"更新成功！"}),e.PriceVisible=!1)})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})})):"fail"==t.data.status&&r.request("/intention/addPriceIntention",a,"POST",{}).then((function(t){console.log(t),"fail"==t.data.status?e.$message({type:"error",message:"提交失败！"}):"success"==t.data.status&&(e.$message({type:"success",message:"提交成功！"}),e.PriceVisible=!1)})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))})).catch((function(e){}));case 7:case"end":return t.stop()}}),t)})))()},handleExam:function(e){console.log(e),this.$router.push({path:"/filling_exam",query:e})},getPatent:function(e){console.log(e),this.$router.push({path:"/patent_detail_pc",query:e})}}}),l=i,c=(r("63b3"),r("2877")),o=Object(c["a"])(l,a,n,!1,null,null,null);t["default"]=o.exports}}]);