(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-21c81dcf"],{"0ffc":function(t,e,n){},"1d82":function(t,e,n){},"1f87":function(t,e,n){"use strict";n("68ef"),n("1d82")},"25f0":function(t,e,n){"use strict";var i=n("6eeb"),a=n("825a"),s=n("d039"),c=n("ad6d"),o="toString",r=RegExp.prototype,l=r[o],u=s((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=o;(u||d)&&i(RegExp.prototype,o,(function(){var t=a(this),e=String(t.source),n=t.flags,i=String(void 0===n&&t instanceof RegExp&&!("flags"in r)?c.call(t):n);return"/"+e+"/"+i}),{unsafe:!0})},"510b":function(t,e,n){"use strict";var i=n("d282"),a=n("9884"),s=Object(i["a"])("steps"),c=s[0],o=s[1];e["a"]=c({mixins:[Object(a["b"])("vanSteps")],props:{iconPrefix:String,finishIcon:String,activeColor:String,inactiveIcon:String,inactiveColor:String,active:{type:[Number,String],default:0},direction:{type:String,default:"horizontal"},activeIcon:{type:String,default:"checked"}},render:function(){var t=arguments[0];return t("div",{class:o([this.direction])},[t("div",{class:o("items")},[this.slots()])])}})},7252:function(t,e,n){"use strict";n("0ffc")},"77f8":function(t,e,n){"use strict";n("68ef"),n("9d70"),n("3743"),n("ae39")},"7abe":function(t,e,n){"use strict";n.r(e);var i,a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home_pc_Container"},["教师"==this.$store.state.signed_authorize?n("div",{staticClass:"notice_teacher"},[t._m(0),n("div",{staticClass:"Notices"},[n("el-collapse",t._l(t.notices,(function(e){return n("el-collapse-item",{key:e.noticeId,attrs:{title:e.noticeTitle,name:e.noticeId}},[n("div",{staticClass:"notice_content"},[n("div",{staticClass:"content_detail"},[t._v(t._s(e.content))]),n("div",{staticClass:"content_time"},[t._v("最后更新："+t._s(e.updateTime))])])])})),1)],1),n("div",{staticClass:"Page"},[n("el-pagination",{attrs:{"current-page":t.current_page,"page-size":5,layout:"total, prev, pager, next",total:t.noticetotal},on:{"current-change":t.handleCurrentChange}})],1)]):t._e(),"产学研"==this.$store.state.signed_authorize?n("div",{staticClass:"notice_company"},[n("div",{staticClass:"notices_head"},[n("div",{staticClass:"text"},[t._v("通知管理")]),n("div",{staticClass:"buttons"},[n("el-button",{attrs:{icon:"el-icon-plus"},on:{click:t.AddNotice}},[t._v(" 新增通知 ")])],1)]),n("div",{staticClass:"notices_table"},[n("el-table",{ref:"multipleTable",staticClass:"tablestyle",staticStyle:{width:"100%"},attrs:{data:t.notices,"tooltip-effect":"dark",stripe:""}},[n("el-table-column",{attrs:{type:"expand"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-form",{staticClass:"demo-table-expand",attrs:{"label-position":"left",inline:""}},[n("el-form-item",[n("div",{staticClass:"content_detail"},[n("span",[t._v(t._s(e.row.content))])])])],1)]}}],null,!1,468862246)}),n("el-table-column",{attrs:{prop:"index",label:"序号",width:"70"}}),n("el-table-column",{attrs:{prop:"noticeTitle",label:"通知标题"}}),n("el-table-column",{attrs:{prop:"publishUser",label:"发布人"}}),n("el-table-column",{attrs:{prop:"createTime",label:"创建时间"}}),n("el-table-column",{attrs:{prop:"updateTime",label:"最后更新时间"}}),n("el-table-column",{attrs:{prop:"setting",label:"操作",width:"180"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("el-button",{attrs:{icon:"el-icon-edit-outline"},on:{click:function(n){return t.FixNotice(e.row)}}},[t._v(" 修改 ")]),n("el-button",{attrs:{icon:"el-icon-delete"},on:{click:function(n){return t.DeleteNotice(e.row)}}},[t._v(" 删除 ")])]}}],null,!1,1502816033)})],1)],1),n("div",{staticClass:"Page"},[n("el-pagination",{attrs:{"current-page":t.current_page,"page-size":5,layout:"total, prev, pager, next",total:t.noticetotal},on:{"current-change":t.handleCurrentChange}})],1)]):t._e(),t._m(1),n("div",{staticClass:"Steps"},[n("van-steps",{attrs:{direction:"vertical",active:0}},[n("van-step",[n("h3",[t._v("注意：使用域名访问该系统无法正常获取后台数据！！！")])]),n("van-step",[n("h3",[t._v("老师权限移动端适配专利列表和查看专利详情")]),n("p",[t._v("2022-02-01 23:31")])]),n("van-step",[n("h3",[t._v("除夕放假，新年快乐！")]),n("p",[t._v("2022-01-31 00:00")])]),n("van-step",[n("h3",[t._v("老师权限开放待确认专利")]),n("p",[t._v("2022-01-30 18:23")])]),n("van-step",[n("h3",[t._v("产学研权限移动端新增修改、删除通知，优化请求错误时的通知")]),n("p",[t._v("2022-01-29 21:26")])]),n("van-step",[n("h3",[t._v(" 产学研权限Web端新增修改、删除通知和查看价格意向，教师新增填写并修改价格意向 ")]),n("p",[t._v("2022-01-28 14:02")])]),n("van-step",[n("h3",[t._v("Web端老师权限完成填写审批表流程")]),n("p",[t._v("2022-01-28 02:30")])]),n("van-step",[n("h3",[t._v("老师现可查看自己名下所有专利的转换情况")]),n("p",[t._v("2022-01-27 17:16")])]),n("van-step",[n("h3",[t._v("通知模块接入后台数据，更改权限对应的账号")]),n("p",[t._v("2022-01-27 00:59")])]),n("van-step",[n("h3",[t._v("Web端老师权限主页变更为通知中心，并加入通知栏")]),n("p",[t._v("2022-01-26 01:49")])]),n("van-step",[n("h3",[t._v(" 优化了组件间传递参数的方式，现通过路由跳转传参，不再需要state中转 ")]),n("p",[t._v("2022-01-25 15:20")])]),n("van-step",[n("h3",[t._v("PC端审批表详情页加入进度条，方便实时查看进度")]),n("p",[t._v("2022-01-25 13:46")])]),n("van-step",[n("h3",[t._v("解决了退出登录后，登录页面不显示的问题")]),n("p",[t._v("2022-01-24 21:16")])]),n("van-step",[n("h3",[t._v(" 在页面刷新时，将state存入sessionStorage以防止state中数据被清空 ")]),n("p",[t._v("2022-01-24 16:30")])]),n("van-step",[n("h3",[t._v(" 解决了页面刷新后，导航栏功能可能显示异常的问题、引入进度条显示每日进度 ")]),n("p",[t._v("2022-01-24 00:40")])]),n("van-step",[n("h3",[t._v("对主页以及产学研权限进行了移动端适配")]),n("p",[t._v("2022-01-23 23:37")])]),n("van-step",[n("h3",[t._v("移动端初始登录页面、用户页面进行了重新设计")]),n("p",[t._v("2022-01-22 19:20")])]),n("van-step",[n("h3",[t._v("修复mobile与desktop切换显示异常的bug、完善老师权限移动端适配")]),n("p",[t._v("2022-01-21 21:53")])]),n("van-step",[n("h3",[t._v("引入Vant，对教师权限的专利列表进行移动端初适配")]),n("p",[t._v("2022-01-21 14:32")])]),n("van-step",[n("h3",[t._v("新增老师、产学研权限、更改title")]),n("p",[t._v("2022-01-20 17:29")])]),n("van-step",[n("h3",[t._v("新增老师权限的两个功能")]),n("p",[t._v("2022-01-20 13:16")])]),n("van-step",[n("h3",[t._v("支持教师和产学研以两种不同权限登录时，MenuBar展现相应的功能")]),n("p",[t._v("2022-01-19 18:02")])]),n("van-step",[n("h3",[t._v("清空该域名下前一个系统的相关配置，初始化提交")]),n("p",[t._v("2022-01-18 21:23")])])],1)],1),n("el-dialog",{staticClass:"AddNotice_Dialog",attrs:{title:"新增通知",visible:t.AddNoticeVisible,width:"30%"},on:{"update:visible":function(e){t.AddNoticeVisible=e}}},[n("div",{staticClass:"notice_title"},[n("span",[t._v("通知标题：")]),n("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入通知标题"},model:{value:t.willadd_notice.noticeTitle,callback:function(e){t.$set(t.willadd_notice,"noticeTitle",e)},expression:"willadd_notice.noticeTitle"}})],1),n("div",{staticClass:"notice_content"},[n("span",[t._v("通知内容：")]),n("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入通知内容",type:"textarea",rows:4},model:{value:t.willadd_notice.content,callback:function(e){t.$set(t.willadd_notice,"content",e)},expression:"willadd_notice.content"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.AddNoticeVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.AddConfirm()}}},[t._v("新 增")])],1)]),n("el-dialog",{staticClass:"FixNotice_Dialog",attrs:{title:"修改通知",visible:t.FixNoticeVisible,width:"30%"},on:{"update:visible":function(e){t.FixNoticeVisible=e}}},[n("div",{staticClass:"notice_title"},[n("span",[t._v("通知标题：")]),n("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入通知标题"},model:{value:t.willfix_notice.noticeTitle,callback:function(e){t.$set(t.willfix_notice,"noticeTitle",e)},expression:"willfix_notice.noticeTitle"}})],1),n("div",{staticClass:"notice_content"},[n("span",[t._v("通知内容：")]),n("el-input",{staticStyle:{"margin-top":"5px"},attrs:{placeholder:"请输入通知内容",type:"textarea",rows:4},model:{value:t.willfix_notice.content,callback:function(e){t.$set(t.willfix_notice,"content",e)},expression:"willfix_notice.content"}})],1),n("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[n("el-button",{on:{click:function(e){t.FixNoticeVisible=!1}}},[t._v("取 消")]),n("el-button",{attrs:{type:"primary"},on:{click:function(e){return t.FixConfirm()}}},[t._v("修 改")])],1)])],1)},s=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"notices_head"},[n("div",{staticClass:"text"},[t._v("通知栏")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"DailyTask"},[n("div",{staticClass:"text"},[t._v("每日进度")])])}],c=n("1da1"),o=n("ade3"),r=(n("1f87"),n("510b")),l=(n("77f8"),n("dc0f")),u=(n("96cf"),n("b0c0"),n("d3b7"),n("25f0"),{components:(i={},Object(o["a"])(i,l["a"].name,l["a"]),Object(o["a"])(i,r["a"].name,r["a"]),i),data:function(){return{notices:[],noticetotal:0,current_page:1,AddNoticeVisible:!1,willadd_notice:{noticeTitle:"",content:"",publishUser:""},FixNoticeVisible:!1,willfix_notice:{noticeId:"",noticeTitle:"",content:""}}},created:function(){this.refresh()},methods:{refresh:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,i,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,i="/notice/getNoticePage?currPage=1&size=5",e.next=4,n.getNotices(i);case 4:a=0;case 5:if(!(a<n.notices.length)){e.next=11;break}return e.next=8,n.getNotices_detail(n.notices[a].noticeId,a);case 8:a++,e.next=5;break;case 11:case"end":return e.stop()}}),e)})))()},getNotices:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return i=e,i.notices=[],n.next=4,i.request(t,{},"GET",{}).then((function(t){console.log(t.data),i.noticetotal=t.data.data.total;for(var e=0;e<t.data.data.records.length;e++){var n={};n.index=e+1,n.noticeId=t.data.data.records[e].noticeId.toString(),n.createTime=t.data.data.records[e].createTime,n.updateTime=t.data.data.records[e].updateTime,n.noticeTitle=t.data.data.records[e].noticeTitle,n.publishUser=t.data.data.records[e].publishUser,n.content="",console.log(n),i.notices.push(n)}i.$message({message:"通知公告已更新",type:"success"})})).catch((function(){i.$message({message:"获取失败！",type:"error"})}));case 4:case"end":return n.stop()}}),n)})))()},getNotices_detail:function(t,e){var n=this;return Object(c["a"])(regeneratorRuntime.mark((function i(){var a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a=n,s="/notice/getNoticeById?noticeId="+t,i.next=4,a.request(s,{},"GET",{}).then((function(t){"success"==t.data.status?a.notices[e].content=t.data.data.content:"fail"==t.data.status&&(a.notices[e].content=t.data.data.errMsg)})).catch((function(){a.$message({message:"获取失败！",type:"error"})}));case 4:case"end":return i.stop()}}),i)})))()},handleCurrentChange:function(t){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var i,a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return console.log(t),i=e,a="/notice/getNoticePage?currPage="+t+"&size=5",n.next=5,i.getNotices(a);case 5:s=0;case 6:if(!(s<i.notices.length)){n.next=12;break}return n.next=9,i.getNotices_detail(i.notices[s].noticeId,s);case 9:s++,n.next=6;break;case 12:case"end":return n.stop()}}),n)})))()},AddNotice:function(){var t=this;t.AddNoticeVisible=!0},AddConfirm:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,n.willadd_notice.publishUser=t.$store.state.signed_username,i="/notice/addNotice",e.next=5,n.request(i,n.willadd_notice,"POST",{}).then((function(e){console.log(e),"fail"==e.data.status?t.$message({type:"error",message:"新增失败！"}):"success"==e.data.status&&(n.$message({message:"新增成功",type:"success"}),n.refresh())})).catch((function(e){console.log(e),t.$message({type:"error",message:"出错了！"})}));case 5:n.AddNoticeVisible=!1;case 6:case"end":return e.stop()}}),e)})))()},FixNotice:function(t){var e=this;console.log(t),e.willfix_notice.noticeId=t.noticeId;var n="/notice/getNoticeById?noticeId="+t.noticeId;e.request(n,{},"GET",{}).then((function(t){console.log(t),e.willfix_notice.noticeTitle=t.data.data.noticeTitle,e.willfix_notice.content=t.data.data.content})).catch((function(t){console.log(t)})),e.FixNoticeVisible=!0},FixConfirm:function(){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function e(){var n,i;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return n=t,i="/notice/updateNotice",e.next=4,n.request(i,n.willfix_notice,"POST",{}).then((function(e){console.log(e),"fail"==e.data.status?t.$message({type:"error",message:"修改失败！"}):"success"==e.data.status&&(n.$message({message:"修改成功",type:"success"}),n.refresh())})).catch((function(e){console.log(e),t.$message({type:"error",message:"出错了！"})}));case 4:n.FixNoticeVisible=!1;case 5:case"end":return e.stop()}}),e)})))()},DeleteNotice:function(t){var e=this,n=this;console.log(t),this.$confirm("此操作将永久删除该通知, 是否继续?","提示",{confirmButtonText:"确定",cancelButtonText:"取消",type:"error"}).then((function(){var i="/notice/deleteNoticeById?noticeId="+t.noticeId;n.request(i,{},"GET",{}).then((function(t){console.log(t),"fail"==t.data.status?e.$message({type:"error",message:"删除失败！"}):"success"==t.data.status&&(n.$message({message:"删除成功",type:"success"}),n.refresh())})).catch((function(t){console.log(t),e.$message({type:"error",message:"出错了！"})}))})).catch((function(){e.$message({type:"info",message:"已取消删除"})}))}}}),d=u,p=(n("7252"),n("2877")),v=Object(p["a"])(d,a,s,!1,null,null,null);e["default"]=v.exports},9884:function(t,e,n){"use strict";function i(t){var e=[];function n(t){t.forEach((function(t){e.push(t),t.componentInstance&&n(t.componentInstance.$children.map((function(t){return t.$vnode}))),t.children&&n(t.children)}))}return n(t),e}function a(t,e){var n=e.$vnode.componentOptions;if(n&&n.children){var a=i(n.children);t.sort((function(t,e){return a.indexOf(t.$vnode)-a.indexOf(e.$vnode)}))}}function s(t,e){var n,i;void 0===e&&(e={});var s=e.indexKey||"index";return{inject:(n={},n[t]={default:null},n),computed:(i={parent:function(){return this.disableBindRelation?null:this[t]}},i[s]=function(){return this.bindRelation(),this.parent?this.parent.children.indexOf(this):null},i),watch:{disableBindRelation:function(t){t||this.bindRelation()}},mounted:function(){this.bindRelation()},beforeDestroy:function(){var t=this;this.parent&&(this.parent.children=this.parent.children.filter((function(e){return e!==t})))},methods:{bindRelation:function(){if(this.parent&&-1===this.parent.children.indexOf(this)){var t=[].concat(this.parent.children,[this]);a(t,this.parent),this.parent.children=t}}}}}function c(t){return{provide:function(){var e;return e={},e[t]=this,e},data:function(){return{children:[]}}}}n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return c}))},ad6d:function(t,e,n){"use strict";var i=n("825a");t.exports=function(){var t=i(this),e="";return t.global&&(e+="g"),t.ignoreCase&&(e+="i"),t.multiline&&(e+="m"),t.dotAll&&(e+="s"),t.unicode&&(e+="u"),t.sticky&&(e+="y"),e}},ae39:function(t,e,n){},dc0f:function(t,e,n){"use strict";var i=n("d282"),a=n("b1d2"),s=n("9884"),c=n("ad06"),o=Object(i["a"])("step"),r=o[0],l=o[1];e["a"]=r({mixins:[Object(s["a"])("vanSteps")],computed:{status:function(){return this.index<this.parent.active?"finish":this.index===+this.parent.active?"process":void 0},active:function(){return"process"===this.status},lineStyle:function(){return"finish"===this.status?{background:this.parent.activeColor}:{background:this.parent.inactiveColor}},titleStyle:function(){return this.active?{color:this.parent.activeColor}:this.status?void 0:{color:this.parent.inactiveColor}}},methods:{genCircle:function(){var t=this.$createElement,e=this.parent,n=e.activeIcon,i=e.iconPrefix,a=e.activeColor,s=e.finishIcon,o=e.inactiveIcon;if(this.active)return this.slots("active-icon")||t(c["a"],{class:l("icon","active"),attrs:{name:n,color:a,classPrefix:i}});var r=this.slots("finish-icon");if("finish"===this.status&&(s||r))return r||t(c["a"],{class:l("icon","finish"),attrs:{name:s,color:a,classPrefix:i}});var u=this.slots("inactive-icon");return o||u?u||t(c["a"],{class:l("icon"),attrs:{name:o,classPrefix:i}}):t("i",{class:l("circle"),style:this.lineStyle})},onClickStep:function(){this.parent.$emit("click-step",this.index)}},render:function(){var t,e=arguments[0],n=this.status,i=this.active,s=this.parent.direction;return e("div",{class:[a["a"],l([s,(t={},t[n]=n,t)])]},[e("div",{class:l("title",{active:i}),style:this.titleStyle,on:{click:this.onClickStep}},[this.slots()]),e("div",{class:l("circle-container"),on:{click:this.onClickStep}},[this.genCircle()]),e("div",{class:l("line"),style:this.lineStyle})])}})}}]);