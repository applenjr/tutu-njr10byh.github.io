(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4e8c1040"],{1437:function(t,e,i){"use strict";var n=i("c31d"),a=i("d282"),s=i("4598"),c=i("9884"),o=i("7744"),r=i("dfaf"),l=Object(a["a"])("collapse-item"),u=l[0],d=l[1],h=["title","icon","right-icon"];e["a"]=u({mixins:[Object(c["a"])("vanCollapse")],props:Object(n["a"])({},r["a"],{name:[Number,String],disabled:Boolean,isLink:{type:Boolean,default:!0}}),data:function(){return{show:null,inited:null}},computed:{currentName:function(){var t;return null!=(t=this.name)?t:this.index},expanded:function(){var t=this;if(!this.parent)return null;var e=this.parent,i=e.value,n=e.accordion;return n?i===this.currentName:i.some((function(e){return e===t.currentName}))}},created:function(){this.show=this.expanded,this.inited=this.expanded},watch:{expanded:function(t,e){var i=this;if(null!==e){t&&(this.show=!0,this.inited=!0);var n=t?this.$nextTick:s["b"];n((function(){var e=i.$refs,n=e.content,a=e.wrapper;if(n&&a){var c=n.offsetHeight;if(c){var o=c+"px";a.style.height=t?0:o,Object(s["a"])((function(){a.style.height=t?o:0}))}else i.onTransitionEnd()}}))}}},methods:{onClick:function(){this.disabled||this.toggle()},toggle:function(t){void 0===t&&(t=!this.expanded);var e=this.parent,i=this.currentName,n=e.accordion&&i===e.value,a=n?"":i;this.parent.switch(a,t)},onTransitionEnd:function(){this.expanded?this.$refs.wrapper.style.height="":this.show=!1},genTitle:function(){var t=this,e=this.$createElement,i=this.border,a=this.disabled,s=this.expanded,c=h.reduce((function(e,i){return t.slots(i)&&(e[i]=function(){return t.slots(i)}),e}),{});return this.slots("value")&&(c.default=function(){return t.slots("value")}),e(o["a"],{attrs:{role:"button",tabindex:a?-1:0,"aria-expanded":String(s)},class:d("title",{disabled:a,expanded:s,borderless:!i}),on:{click:this.onClick},scopedSlots:c,props:Object(n["a"])({},this.$props)})},genContent:function(){var t=this.$createElement;if(this.inited)return t("div",{directives:[{name:"show",value:this.show}],ref:"wrapper",class:d("wrapper"),on:{transitionend:this.onTransitionEnd}},[t("div",{ref:"content",class:d("content")},[this.slots()])])}},render:function(){var t=arguments[0];return t("div",{class:[d({border:this.index&&this.border})]},[this.genTitle(),this.genContent()])}})},"1d82":function(t,e,i){},"1f87":function(t,e,i){"use strict";i("68ef"),i("1d82")},2221:function(t,e,i){},"342a":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("1a04"),i("bff0")},4467:function(t,e,i){"use strict";i("68ef"),i("2221")},4598:function(t,e,i){"use strict";(function(t){i.d(e,"b",(function(){return r})),i.d(e,"a",(function(){return l}));var n=i("a142"),a=Date.now();function s(t){var e=Date.now(),i=Math.max(0,16-(e-a)),n=setTimeout(t,i);return a=e+i,n}var c=n["g"]?t:window,o=c.requestAnimationFrame||s;c.cancelAnimationFrame||c.clearTimeout;function r(t){return o.call(c,t)}function l(t){r((function(){r(t)}))}}).call(this,i("c8ba"))},"510b":function(t,e,i){"use strict";var n=i("d282"),a=i("9884"),s=Object(n["a"])("steps"),c=s[0],o=s[1];e["a"]=c({mixins:[Object(a["b"])("vanSteps")],props:{iconPrefix:String,finishIcon:String,activeColor:String,inactiveIcon:String,inactiveColor:String,active:{type:[Number,String],default:0},direction:{type:String,default:"horizontal"},activeIcon:{type:String,default:"checked"}},render:function(){var t=arguments[0];return t("div",{class:o([this.direction])},[t("div",{class:o("items")},[this.slots()])])}})},"5d17":function(t,e,i){"use strict";i("68ef")},"6ba1":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home_mobile_Container"},["教师"==this.$store.state.signed_authorize?i("div",{staticClass:"notice_teacher"},[t._m(0),i("div",{staticClass:"Notices"},[i("van-collapse",{model:{value:t.activeNames,callback:function(e){t.activeNames=e},expression:"activeNames"}},t._l(t.notices,(function(e){return i("van-collapse-item",{key:e.noticeId,attrs:{title:e.noticeTitle,name:e.noticeId}},[i("div",{staticClass:"notice_content"},[i("div",{staticClass:"content_detail"},[t._v(t._s(e.content))]),i("div",{staticClass:"content_time"},[i("div",{staticClass:"content_time_part1"},[t._v("最后更新：")]),i("div",{staticClass:"content_time_part2"},[t._v(t._s(e.updateTime))])])])])})),1)],1),i("div",{staticClass:"Page"},[i("van-pagination",{attrs:{"total-items":t.noticestotal,"items-per-page":5},on:{change:t.handleCurrentChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]):t._e(),"产学研"==this.$store.state.signed_authorize?i("div",{staticClass:"notice_company"},[i("div",{staticClass:"notices_head"},[i("div",{staticClass:"text"},[t._v("通知管理")]),i("div",{staticClass:"addButton"},[i("van-button",{attrs:{icon:"plus",type:"info"},on:{click:function(e){t.addDialog=!0}}},[t._v("新增")])],1)]),i("div",t._l(t.notices,(function(e){return i("van-swipe-cell",{key:e.index,scopedSlots:t._u([{key:"right",fn:function(){return[i("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(i){return t.DeleteNotice(e)}}})]},proxy:!0}],null,!0)},[i("van-cell",{attrs:{title:e.noticeTitle,"is-link":""},on:{click:function(i){return t.GetDetail(e)}}})],1)})),1),i("div",{staticClass:"Page"},[i("van-pagination",{attrs:{"total-items":t.noticestotal,"items-per-page":5},on:{change:t.handleCurrentChange},model:{value:t.currentPage,callback:function(e){t.currentPage=e},expression:"currentPage"}})],1)]):t._e(),t._m(1),i("div",{staticClass:"Steps"},[i("van-steps",{attrs:{direction:"vertical",active:0}},[i("van-step",[i("h3",[t._v("注意：使用域名访问该系统无法正常获取后台数据！！！")])]),i("van-step",[i("h3",[t._v(" 产学研新增修改、删除通知和查看价格意向，教师新增填写并修改价格意向 ")]),i("p",[t._v("2022-01-28 14:02")])]),i("van-step",[i("h3",[t._v("完成填写审批表流程")]),i("p",[t._v("2022-01-28 02:30")])]),i("van-step",[i("h3",[t._v("老师现可查看自己名下所有专利的转换情况")]),i("p",[t._v("2022-01-27 17:16")])]),i("van-step",[i("h3",[t._v("通知模块接入后台数据，更改权限对应的账号")]),i("p",[t._v("2022-01-27 00:59")])]),i("van-step",[i("h3",[t._v("移动端老师权限主页变更为通知中心，并加入通知栏")]),i("p",[t._v("2022-01-26 14:49")])]),i("van-step",[i("h3",[t._v("Web端老师权限主页变更为通知中心，并加入通知栏")]),i("p",[t._v("2022-01-26 01:49")])]),i("van-step",[i("h3",[t._v(" 优化了组件间传递参数的方式，现通过路由跳转传参，不再需要state中转 ")]),i("p",[t._v("2022-01-25 15:20")])]),i("van-step",[i("h3",[t._v("PC端审批表详情页加入进度条，方便实时查看进度")]),i("p",[t._v("2022-01-25 13:46")])]),i("van-step",[i("h3",[t._v("解决了退出登录后，登录页面不显示的问题")]),i("p",[t._v("2022-01-24 21:16")])]),i("van-step",[i("h3",[t._v(" 在页面刷新时，将state存入sessionStorage以防止state中数据被清空 ")]),i("p",[t._v("2022-01-24 16:30")])]),i("van-step",[i("h3",[t._v(" 解决了页面刷新后，导航栏功能可能显示异常的问题、引入进度条显示每日进度 ")]),i("p",[t._v("2022-01-24 00:40")])]),i("van-step",[i("h3",[t._v("对主页以及产学研权限进行了移动端适配")]),i("p",[t._v("2022-01-23 23:37")])]),i("van-step",[i("h3",[t._v("移动端初始登录页面、用户页面进行了重新设计")]),i("p",[t._v("2022-01-22 19:20")])]),i("van-step",[i("h3",[t._v("修复mobile与desktop切换显示异常的bug、完善老师权限移动端适配")]),i("p",[t._v("2022-01-21 21:53")])]),i("van-step",[i("h3",[t._v("引入Vant，对教师权限的专利列表进行移动端初适配")]),i("p",[t._v("2022-01-21 14:32")])]),i("van-step",[i("h3",[t._v("新增老师、产学研权限、更改title")]),i("p",[t._v("2022-01-20 17:29")])]),i("van-step",[i("h3",[t._v("新增老师权限的两个功能")]),i("p",[t._v("2022-01-20 13:16")])]),i("van-step",[i("h3",[t._v("支持教师和产学研以两种不同权限登录时，MenuBar展现相应的功能")]),i("p",[t._v("2022-01-19")])]),i("van-step",[i("h3",[t._v("清空该域名下前一个系统的相关配置，初始化提交")]),i("p",[t._v("2022-01-18")])])],1)],1),i("van-action-sheet",{attrs:{title:"新增通知","cancel-text":"取消","close-on-click-action":""},model:{value:t.addDialog,callback:function(e){t.addDialog=e},expression:"addDialog"}},[i("div",{staticClass:"field"},[i("van-field",{attrs:{label:"通知标题",placeholder:"请输入通知标题",size:"large"},model:{value:t.willadd_notice.noticeTitle,callback:function(e){t.$set(t.willadd_notice,"noticeTitle",e)},expression:"willadd_notice.noticeTitle"}}),i("van-field",{attrs:{label:"通知内容",placeholder:"请输入通知内容",size:"large"},model:{value:t.willadd_notice.content,callback:function(e){t.$set(t.willadd_notice,"content",e)},expression:"willadd_notice.content"}}),i("van-button",{staticStyle:{"margin-top":"10px","font-weight":"bold"},attrs:{size:"large",type:"info",icon:"passed"},on:{click:t.submitAdd}},[t._v("确认新增")])],1)])],1)},a=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"notices_head"},[i("div",{staticClass:"text"},[t._v("通知栏")])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"DailyTask"},[i("div",{staticClass:"text"},[t._v("每日进度")])])}],s=i("1da1"),c=i("ade3"),o=(i("be7f"),i("565f")),r=(i("2cbd"),i("ab2c")),l=(i("e7e5"),i("d399")),u=(i("e17f"),i("2241")),d=(i("66b9"),i("b650")),h=(i("4467"),i("c36e")),f=(i("c194"),i("7744")),v=(i("68ef"),i("b925"),i("d282")),p=i("b1d2"),g=Object(v["a"])("pagination"),m=g[0],b=g[1],_=g[2];function x(t,e,i){return{number:t,text:e,active:i}}var k,C=m({props:{prevText:String,nextText:String,forceEllipses:Boolean,mode:{type:String,default:"multi"},value:{type:Number,default:0},pageCount:{type:[Number,String],default:0},totalItems:{type:[Number,String],default:0},itemsPerPage:{type:[Number,String],default:10},showPageSize:{type:[Number,String],default:5}},computed:{count:function(){var t=this.pageCount||Math.ceil(this.totalItems/this.itemsPerPage);return Math.max(1,t)},pages:function(){var t=[],e=this.count,i=+this.showPageSize;if("multi"!==this.mode)return t;var n=1,a=e,s=i<e;s&&(n=Math.max(this.value-Math.floor(i/2),1),a=n+i-1,a>e&&(a=e,n=a-i+1));for(var c=n;c<=a;c++){var o=x(c,c,c===this.value);t.push(o)}if(s&&i>0&&this.forceEllipses){if(n>1){var r=x(n-1,"...",!1);t.unshift(r)}if(a<e){var l=x(a+1,"...",!1);t.push(l)}}return t}},watch:{value:{handler:function(t){this.select(t||this.value)},immediate:!0}},methods:{select:function(t,e){t=Math.min(this.count,Math.max(1,t)),this.value!==t&&(this.$emit("input",t),e&&this.$emit("change",t))}},render:function(){var t,e,i=this,n=arguments[0],a=this.value,s="multi"!==this.mode,c=function(t){return function(){i.select(t,!0)}};return n("ul",{class:b({simple:s})},[n("li",{class:[b("item",{disabled:1===a}),b("prev"),p["a"]],on:{click:c(a-1)}},[(null!=(t=this.slots("prev-text"))?t:this.prevText)||_("prev")]),this.pages.map((function(t){var e;return n("li",{class:[b("item",{active:t.active}),b("page"),p["a"]],on:{click:c(t.number)}},[null!=(e=i.slots("page",t))?e:t.text])})),s&&n("li",{class:b("page-desc")},[this.slots("pageDesc")||a+"/"+this.count]),n("li",{class:[b("item",{disabled:a===this.count}),b("next"),p["a"]],on:{click:c(a+1)}},[(null!=(e=this.slots("next-text"))?e:this.nextText)||_("next")])])}}),w=(i("342a"),i("1437")),y=(i("5d17"),i("f9bd")),O=(i("1f87"),i("510b")),S=(i("77f8"),i("dc0f")),j=(i("96cf"),i("b0c0"),{components:(k={},Object(c["a"])(k,S["a"].name,S["a"]),Object(c["a"])(k,O["a"].name,O["a"]),Object(c["a"])(k,y["a"].name,y["a"]),Object(c["a"])(k,w["a"].name,w["a"]),Object(c["a"])(k,C.name,C),Object(c["a"])(k,f["a"].name,f["a"]),Object(c["a"])(k,h["a"].name,h["a"]),Object(c["a"])(k,d["a"].name,d["a"]),Object(c["a"])(k,u["a"].name,u["a"]),Object(c["a"])(k,l["a"].name,l["a"]),Object(c["a"])(k,r["a"].name,r["a"]),Object(c["a"])(k,o["a"].name,o["a"]),k),data:function(){return{activeNames:["1"],notices:[],noticestotal:0,currentPage:1,addDialog:!1,willadd_notice:{noticeTitle:"",content:"",publishUser:""}}},created:function(){this.refresh()},methods:{refresh:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return i=t,n="/notice/getNoticePage?currPage=1&size=5",e.next=4,i.getNotices(n);case 4:a=0;case 5:if(!(a<i.notices.length)){e.next=11;break}return e.next=8,i.getNotices_detail(i.notices[a].noticeId,a);case 8:a++,e.next=5;break;case 11:case"end":return e.stop()}}),e)})))()},getNotices:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return n=e,n.notices=[],i.next=4,n.request(t,{},"GET",{}).then((function(t){console.log(t.data.data),n.noticestotal=t.data.data.total;for(var e=0;e<t.data.data.records.length;e++){var i={};i.noticeId=t.data.data.records[e].noticeId,i.createTime=t.data.data.records[e].createTime,i.updateTime=t.data.data.records[e].updateTime,i.noticeTitle=t.data.data.records[e].noticeTitle,i.publishUser=t.data.data.records[e].publishUser,i.content="",n.notices.push(i)}n.$message({message:"公告已更新",type:"success"})})).catch((function(){n.$message({message:"获取失败！",type:"error"})}));case 4:case"end":return i.stop()}}),i)})))()},getNotices_detail:function(t,e){var i=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a,s;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a=i,s="/notice/getNoticeById?noticeId="+t,n.next=4,a.request(s,{},"GET",{}).then((function(t){"success"==t.data.status?a.notices[e].content=t.data.data.content:"fail"==t.data.status&&(a.notices[e].content=t.data.data.errMsg)})).catch((function(){a.$message({message:"获取失败！",type:"error"})}));case 4:case"end":return n.stop()}}),n)})))()},handleCurrentChange:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function i(){var n,a,s;return regeneratorRuntime.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return console.log(t),n=e,a="/notice/getNoticePage?currPage="+t+"&size=5",i.next=5,n.getNotices(a);case 5:s=0;case 6:if(!(s<n.notices.length)){i.next=12;break}return i.next=9,n.getNotices_detail(n.notices[s].noticeId,s);case 9:s++,i.next=6;break;case 12:case"end":return i.stop()}}),i)})))()},GetDetail:function(t){console.log(t),this.$router.push({path:"/notice_detail",query:t})},submitAdd:function(){var t=this;return Object(s["a"])(regeneratorRuntime.mark((function e(){var i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return console.log(t.willadd_notice),i=t,i.willadd_notice.publishUser=t.$store.state.signed_username,n="/notice/addNotice",e.next=6,i.request(n,i.willadd_notice,"POST",{}).then((function(t){i.$message({message:"新增成功",type:"success"}),i.refresh(),i.addDialog=!1})).catch((function(t){console.log(t)}));case 6:case"end":return e.stop()}}),e)})))()},DeleteNotice:function(t){console.log(t),u["a"].confirm({title:"提示",message:"此操作将永久删除该通知, 是否确认?"}).then((function(){l["a"].fail("暂未开放")})).catch((function(){}))}}}),T=j,$=(i("92ce"),i("2877")),P=Object($["a"])(T,n,a,!1,null,null,null);e["default"]=P.exports},"77f8":function(t,e,i){"use strict";i("68ef"),i("9d70"),i("3743"),i("ae39")},"92ce":function(t,e,i){"use strict";i("9e30")},"9e30":function(t,e,i){},ae39:function(t,e,i){},b925:function(t,e,i){},bff0:function(t,e,i){},c36e:function(t,e,i){"use strict";var n=i("d282"),a=i("482d"),s=i("1325"),c=i("3875"),o=function(t){return{props:{closeOnClickOutside:{type:Boolean,default:!0}},data:function(){var e=this,i=function(i){e.closeOnClickOutside&&!e.$el.contains(i.target)&&e[t.method]()};return{clickOutsideHandler:i}},mounted:function(){Object(s["b"])(document,t.event,this.clickOutsideHandler)},beforeDestroy:function(){Object(s["a"])(document,t.event,this.clickOutsideHandler)}}},r=Object(n["a"])("swipe-cell"),l=r[0],u=r[1],d=.15;e["a"]=l({mixins:[c["a"],o({event:"touchstart",method:"onClick"})],props:{onClose:Function,disabled:Boolean,leftWidth:[Number,String],rightWidth:[Number,String],beforeClose:Function,stopPropagation:Boolean,name:{type:[Number,String],default:""}},data:function(){return{offset:0,dragging:!1}},computed:{computedLeftWidth:function(){return+this.leftWidth||this.getWidthByRef("left")},computedRightWidth:function(){return+this.rightWidth||this.getWidthByRef("right")}},mounted:function(){this.bindTouchEvent(this.$el)},methods:{getWidthByRef:function(t){if(this.$refs[t]){var e=this.$refs[t].getBoundingClientRect();return e.width}return 0},open:function(t){var e="left"===t?this.computedLeftWidth:-this.computedRightWidth;this.opened=!0,this.offset=e,this.$emit("open",{position:t,name:this.name,detail:this.name})},close:function(t){this.offset=0,this.opened&&(this.opened=!1,this.$emit("close",{position:t,name:this.name}))},onTouchStart:function(t){this.disabled||(this.startOffset=this.offset,this.touchStart(t))},onTouchMove:function(t){if(!this.disabled&&(this.touchMove(t),"horizontal"===this.direction)){this.dragging=!0,this.lockClick=!0;var e=!this.opened||this.deltaX*this.startOffset<0;e&&Object(s["c"])(t,this.stopPropagation),this.offset=Object(a["b"])(this.deltaX+this.startOffset,-this.computedRightWidth,this.computedLeftWidth)}},onTouchEnd:function(){var t=this;this.disabled||this.dragging&&(this.toggle(this.offset>0?"left":"right"),this.dragging=!1,setTimeout((function(){t.lockClick=!1}),0))},toggle:function(t){var e=Math.abs(this.offset),i=this.opened?1-d:d,n=this.computedLeftWidth,a=this.computedRightWidth;a&&"right"===t&&e>a*i?this.open("right"):n&&"left"===t&&e>n*i?this.open("left"):this.close()},onClick:function(t){void 0===t&&(t="outside"),this.$emit("click",t),this.opened&&!this.lockClick&&(this.beforeClose?this.beforeClose({position:t,name:this.name,instance:this}):this.onClose?this.onClose(t,this,{name:this.name}):this.close(t))},getClickHandler:function(t,e){var i=this;return function(n){e&&n.stopPropagation(),i.onClick(t)}},genLeftPart:function(){var t=this.$createElement,e=this.slots("left");if(e)return t("div",{ref:"left",class:u("left"),on:{click:this.getClickHandler("left",!0)}},[e])},genRightPart:function(){var t=this.$createElement,e=this.slots("right");if(e)return t("div",{ref:"right",class:u("right"),on:{click:this.getClickHandler("right",!0)}},[e])}},render:function(){var t=arguments[0],e={transform:"translate3d("+this.offset+"px, 0, 0)",transitionDuration:this.dragging?"0s":".6s"};return t("div",{class:u(),on:{click:this.getClickHandler("cell")}},[t("div",{class:u("wrapper"),style:e},[this.genLeftPart(),this.slots(),this.genRightPart()])])}})},dc0f:function(t,e,i){"use strict";var n=i("d282"),a=i("b1d2"),s=i("9884"),c=i("ad06"),o=Object(n["a"])("step"),r=o[0],l=o[1];e["a"]=r({mixins:[Object(s["a"])("vanSteps")],computed:{status:function(){return this.index<this.parent.active?"finish":this.index===+this.parent.active?"process":void 0},active:function(){return"process"===this.status},lineStyle:function(){return"finish"===this.status?{background:this.parent.activeColor}:{background:this.parent.inactiveColor}},titleStyle:function(){return this.active?{color:this.parent.activeColor}:this.status?void 0:{color:this.parent.inactiveColor}}},methods:{genCircle:function(){var t=this.$createElement,e=this.parent,i=e.activeIcon,n=e.iconPrefix,a=e.activeColor,s=e.finishIcon,o=e.inactiveIcon;if(this.active)return this.slots("active-icon")||t(c["a"],{class:l("icon","active"),attrs:{name:i,color:a,classPrefix:n}});var r=this.slots("finish-icon");if("finish"===this.status&&(s||r))return r||t(c["a"],{class:l("icon","finish"),attrs:{name:s,color:a,classPrefix:n}});var u=this.slots("inactive-icon");return o||u?u||t(c["a"],{class:l("icon"),attrs:{name:o,classPrefix:n}}):t("i",{class:l("circle"),style:this.lineStyle})},onClickStep:function(){this.parent.$emit("click-step",this.index)}},render:function(){var t,e=arguments[0],i=this.status,n=this.active,s=this.parent.direction;return e("div",{class:[a["a"],l([s,(t={},t[i]=i,t)])]},[e("div",{class:l("title",{active:n}),style:this.titleStyle,on:{click:this.onClickStep}},[this.slots()]),e("div",{class:l("circle-container"),on:{click:this.onClickStep}},[this.genCircle()]),e("div",{class:l("line"),style:this.lineStyle})])}})},f9bd:function(t,e,i){"use strict";var n=i("d282"),a=i("9884"),s=i("b1d2"),c=Object(n["a"])("collapse"),o=c[0],r=c[1];e["a"]=o({mixins:[Object(a["b"])("vanCollapse")],props:{accordion:Boolean,value:[String,Number,Array],border:{type:Boolean,default:!0}},methods:{switch:function(t,e){this.accordion||(t=e?this.value.concat(t):this.value.filter((function(e){return e!==t}))),this.$emit("change",t),this.$emit("input",t)}},render:function(){var t,e=arguments[0];return e("div",{class:[r(),(t={},t[s["e"]]=this.border,t)]},[this.slots()])}})}}]);