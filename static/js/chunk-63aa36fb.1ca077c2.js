(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-63aa36fb"],{"6ba1":function(e,t,a){"use strict";a.r(t);var n,s=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home_mobile_Container"},["教师"==this.$store.state.signed_authorize?a("div",{staticClass:"notice_teacher"},[e._m(0),a("div",{staticClass:"Notices"},[a("van-collapse",{model:{value:e.activeNames,callback:function(t){e.activeNames=t},expression:"activeNames"}},e._l(e.notices,(function(t){return a("van-collapse-item",{key:t.noticeId,attrs:{title:t.noticeTitle,name:t.noticeId}},[a("div",{staticClass:"notice_content"},[a("div",{staticClass:"content_detail"},[e._v(e._s(t.content))]),a("div",{staticClass:"content_time"},[a("div",{staticClass:"content_time_part1"},[e._v("最后更新：")]),a("div",{staticClass:"content_time_part2"},[e._v(e._s(t.updateTime))])])])])})),1)],1),a("div",{staticClass:"Page"},[a("van-pagination",{attrs:{"total-items":e.noticestotal,"items-per-page":5},on:{change:e.handleCurrentChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)]):e._e(),"产学研"==this.$store.state.signed_authorize?a("div",{staticClass:"notice_company"},[a("div",{staticClass:"notices_head"},[a("div",{staticClass:"text"},[e._v("通知管理")]),a("div",{staticClass:"addButton"},[a("van-button",{attrs:{icon:"plus",type:"info"},on:{click:function(t){e.addDialog=!0}}},[e._v(" 新增 ")])],1)]),a("div",e._l(e.notices,(function(t){return a("van-swipe-cell",{key:t.index,scopedSlots:e._u([{key:"right",fn:function(){return[a("van-button",{attrs:{square:"",type:"warning",text:"修改"},on:{click:function(a){return e.FixNotice(t)}}}),a("van-button",{attrs:{square:"",type:"danger",text:"删除"},on:{click:function(a){return e.DeleteNotice(t)}}})]},proxy:!0}],null,!0)},[a("van-cell",{attrs:{title:t.noticeTitle,"is-link":""},on:{click:function(a){return e.GetDetail(t)}}})],1)})),1),a("div",{staticClass:"Page"},[a("van-pagination",{attrs:{"total-items":e.noticestotal,"items-per-page":5},on:{change:e.handleCurrentChange},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)]):e._e(),e._m(1),a("div",{staticClass:"Steps"},[a("van-steps",{attrs:{direction:"vertical",active:0}},[a("van-step",[a("h3",[e._v("注意：使用域名访问该系统无法正常获取后台数据！！！")])]),a("van-step",[a("h3",[e._v("产学研权限数据中心成功获取数据")]),a("p",[e._v("2022-02-26 01:06")])]),a("van-step",[a("h3",[e._v("产学研权限发布通知公告可以携带附件")]),a("p",[e._v("2022-02-22 21:45")])]),a("van-step",[a("h3",[e._v(" 老师权限专利列表页面将默认展示专利数修改为20个，并加入动态调整 ")]),a("p",[e._v("2022-02-16 15:56")])]),a("van-step",[a("h3",[e._v("Web端、移动端基本流程完成")]),a("p",[e._v("2022-02-15 14:56")])]),a("van-step",[a("h3",[e._v("移动端部分页面加入检索")]),a("p",[e._v("2022-02-15 14:25")])]),a("van-step",[a("h3",[e._v("产学研权限部分页面支持检索")]),a("p",[e._v("2022-02-15 11:01")])]),a("van-step",[a("h3",[e._v(" 教师权限新增查看未通过的专利、正在转换的专利、已完成转换的专利 ")]),a("p",[e._v("2022-02-15 10:35")])]),a("van-step",[a("h3",[e._v("专利在撤回后，或产学研不通过后，支持删除进程")]),a("p",[e._v("2022-02-15 01:12")])]),a("van-step",[a("h3",[e._v("修复了一些错误")]),a("p",[e._v("2022-02-14 18:21")])]),a("van-step",[a("h3",[e._v("移动端所有基本流程完成")]),a("p",[e._v("2022-02-14 17:40")])]),a("van-step",[a("h3",[e._v("正在处理的专利页面用icon代替按钮，可节省页面空间")]),a("p",[e._v("2022-02-13 23:40")])]),a("van-step",[a("h3",[e._v("移动端产学研权限开通部分功能")]),a("p",[e._v("2022-02-13 17:35")])]),a("van-step",[a("h3",[e._v("Web端所有基本流程完成")]),a("p",[e._v("2022-02-13 15:18")])]),a("van-step",[a("h3",[e._v("Web端产学研权限流程基本完成")]),a("p",[e._v("2022-02-13 04:42")])]),a("van-step",[a("h3",[e._v("Web端产学研权限在等待公示时加入已开始公示")]),a("p",[e._v("2022-02-12 18:32")])]),a("van-step",[a("h3",[e._v("Web端产学研权限可在等待公示时生成公示页面，并支持公示内容复制")]),a("p",[e._v("2022-02-12 17:42")])]),a("van-step",[a("h3",[e._v(" Web端老师权限可在等待第一作者确认时撤回审批表，撤回后可修改、删除审批表，并支持重新提交 ")]),a("p",[e._v("2022-02-12 00:52")])]),a("van-step",[a("h3",[e._v("移动端产学研Menubar增加了两个功能（已隐藏，暂未开放）")]),a("p",[e._v("2022-02-11 01:45")])]),a("van-step",[a("h3",[e._v("移动端产学研支持查看审批表，并可决定是否通过产学研审批")]),a("p",[e._v("2022-02-11 01:38")])]),a("van-step",[a("h3",[e._v("产学研Menubar增加了两个功能（暂未开放）")]),a("p",[e._v("2022-02-10 20:05")])]),a("van-step",[a("h3",[e._v("产学研现可查看审批表，并决定是否通过审批")]),a("p",[e._v("2022-02-10 19:32")])]),a("van-step",[a("h3",[e._v("更换移动端消息提示UI")]),a("p",[e._v("2022-02-10 16:30")])]),a("van-step",[a("h3",[e._v("移动端填写审批表（移动端仅支持保存）现已开放")]),a("p",[e._v("2022-02-10 15:53")])]),a("van-step",[a("h3",[e._v("修复了移动端填写审批表的一些错误")]),a("p",[e._v("2022-02-09 23:51")])]),a("van-step",[a("h3",[e._v("移动端填写审批表增加保存功能")]),a("p",[e._v("2022-02-08 13:48")])]),a("van-step",[a("h3",[e._v("移动端修复填写审批表的某些功能异常问题")]),a("p",[e._v("2022-02-07 12:54")])]),a("van-step",[a("h3",[e._v("移动端完善填写审批表的功能")]),a("p",[e._v("2022-02-06 23:24")])]),a("van-step",[a("h3",[e._v("移动端加入填写审批表路由，将支持在移动端填写审批表")]),a("p",[e._v("2022-02-05 13:30")])]),a("van-step",[a("h3",[e._v("Web端审批表详情页加入专利进度条，更改提交审批表逻辑")]),a("p",[e._v("2022-02-04 20:16")])]),a("van-step",[a("h3",[e._v("修复已知bug")]),a("p",[e._v("2022-02-03 22:07")])]),a("van-step",[a("h3",[e._v("老师权限移动端支持填写和更新价格意向")]),a("p",[e._v("2022-02-02 01:44")])]),a("van-step",[a("h3",[e._v("老师权限移动端适配专利列表和查看专利详情")]),a("p",[e._v("2022-02-01 23:31")])]),a("van-step",[a("h3",[e._v("除夕放假，新年快乐！")]),a("p",[e._v("2022-01-31 00:00")])]),a("van-step",[a("h3",[e._v("老师权限开放待确认专利")]),a("p",[e._v("2022-01-30 18:23")])]),a("van-step",[a("h3",[e._v("产学研权限移动端新增修改、删除通知，优化请求错误时的通知")]),a("p",[e._v("2022-01-29 21:26")])]),a("van-step",[a("h3",[e._v(" 产学研权限Web端新增修改、删除通知和查看价格意向，教师新增填写并修改价格意向 ")]),a("p",[e._v("2022-01-28 14:02")])]),a("van-step",[a("h3",[e._v("Web端完成填写审批表流程")]),a("p",[e._v("2022-01-28 02:30")])]),a("van-step",[a("h3",[e._v("老师权限现可查看自己名下所有专利的转换情况")]),a("p",[e._v("2022-01-27 17:16")])]),a("van-step",[a("h3",[e._v("通知模块接入后台数据，更改权限对应的账号")]),a("p",[e._v("2022-01-27 00:59")])]),a("van-step",[a("h3",[e._v("移动端老师权限主页变更为通知中心，并加入通知栏")]),a("p",[e._v("2022-01-26 14:49")])]),a("van-step",[a("h3",[e._v("Web端老师权限主页变更为通知中心，并加入通知栏")]),a("p",[e._v("2022-01-26 01:49")])]),a("van-step",[a("h3",[e._v(" 优化了组件间传递参数的方式，现通过路由跳转传参，不再需要state中转 ")]),a("p",[e._v("2022-01-25 15:20")])]),a("van-step",[a("h3",[e._v("PC端审批表详情页加入进度条，方便实时查看进度")]),a("p",[e._v("2022-01-25 13:46")])]),a("van-step",[a("h3",[e._v("解决了退出登录后，登录页面不显示的问题")]),a("p",[e._v("2022-01-24 21:16")])]),a("van-step",[a("h3",[e._v(" 在页面刷新时，将state存入sessionStorage以防止state中数据被清空 ")]),a("p",[e._v("2022-01-24 16:30")])]),a("van-step",[a("h3",[e._v(" 解决了页面刷新后，导航栏功能可能显示异常的问题、引入进度条显示每日进度 ")]),a("p",[e._v("2022-01-24 00:40")])]),a("van-step",[a("h3",[e._v("对主页以及产学研权限进行了移动端适配")]),a("p",[e._v("2022-01-23 23:37")])]),a("van-step",[a("h3",[e._v("移动端初始登录页面、用户页面进行了重新设计")]),a("p",[e._v("2022-01-22 19:20")])]),a("van-step",[a("h3",[e._v("修复mobile与desktop切换显示异常的bug、完善老师权限移动端适配")]),a("p",[e._v("2022-01-21 21:53")])]),a("van-step",[a("h3",[e._v("引入Vant，对教师权限的专利列表进行移动端初适配")]),a("p",[e._v("2022-01-21 14:32")])]),a("van-step",[a("h3",[e._v("新增老师、产学研权限、更改title")]),a("p",[e._v("2022-01-20 17:29")])]),a("van-step",[a("h3",[e._v("新增老师权限的两个功能")]),a("p",[e._v("2022-01-20 13:16")])]),a("van-step",[a("h3",[e._v("支持教师和产学研以两种不同权限登录时，MenuBar展现相应的功能")]),a("p",[e._v("2022-01-19")])]),a("van-step",[a("h3",[e._v("清空该域名下前一个系统的相关配置，初始化提交")]),a("p",[e._v("2022-01-18")])])],1)],1),a("van-action-sheet",{attrs:{title:"新增通知","cancel-text":"取消","close-on-click-action":""},model:{value:e.addDialog,callback:function(t){e.addDialog=t},expression:"addDialog"}},[a("div",{staticClass:"field"},[a("van-field",{attrs:{label:"通知标题",rows:"1",autosize:"",type:"textarea",placeholder:"请输入通知标题",size:"large"},model:{value:e.willadd_notice.noticeTitle,callback:function(t){e.$set(e.willadd_notice,"noticeTitle",t)},expression:"willadd_notice.noticeTitle"}}),a("van-field",{attrs:{rows:"1",autosize:"",label:"通知内容",type:"textarea",placeholder:"请输入通知内容",size:"large"},model:{value:e.willadd_notice.content,callback:function(t){e.$set(e.willadd_notice,"content",t)},expression:"willadd_notice.content"}}),a("van-button",{staticStyle:{"margin-top":"10px","font-weight":"bold"},attrs:{size:"large",type:"info",icon:"passed"},on:{click:e.submitAdd}},[e._v("确认新增")])],1)]),a("van-action-sheet",{attrs:{title:"修改通知","cancel-text":"取消","close-on-click-action":""},model:{value:e.FixDialog,callback:function(t){e.FixDialog=t},expression:"FixDialog"}},[a("div",{staticClass:"field"},[a("van-field",{attrs:{label:"通知标题",rows:"1",autosize:"",type:"textarea",placeholder:"请输入通知标题",size:"large"},model:{value:e.willfix_notice.noticeTitle,callback:function(t){e.$set(e.willfix_notice,"noticeTitle",t)},expression:"willfix_notice.noticeTitle"}}),a("van-field",{attrs:{rows:"1",autosize:"",label:"通知内容",type:"textarea",placeholder:"请输入通知内容",size:"large"},model:{value:e.willfix_notice.content,callback:function(t){e.$set(e.willfix_notice,"content",t)},expression:"willfix_notice.content"}}),a("van-button",{staticStyle:{"margin-top":"10px","font-weight":"bold"},attrs:{size:"large",type:"info",icon:"passed"},on:{click:e.submitFix}},[e._v("确认修改")])],1)])],1)},i=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"notices_head"},[a("div",{staticClass:"text"},[e._v("通知栏")])])},function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"DailyTask"},[a("div",{staticClass:"text"},[e._v("每日进度")])])}],c=a("1da1"),o=a("ade3"),r=(a("9a83"),a("f564")),l=(a("be7f"),a("565f")),v=(a("2cbd"),a("ab2c")),p=(a("e7e5"),a("d399")),u=(a("e17f"),a("2241")),d=(a("66b9"),a("b650")),_=(a("4467"),a("c36e")),h=(a("c194"),a("7744")),g=(a("6a39"),a("f240")),f=(a("342a"),a("1437")),b=(a("5d17"),a("f9bd")),m=(a("1f87"),a("510b")),x=(a("77f8"),a("dc0f")),w=(a("96cf"),a("b0c0"),{components:(n={},Object(o["a"])(n,x["a"].name,x["a"]),Object(o["a"])(n,m["a"].name,m["a"]),Object(o["a"])(n,b["a"].name,b["a"]),Object(o["a"])(n,f["a"].name,f["a"]),Object(o["a"])(n,g["a"].name,g["a"]),Object(o["a"])(n,h["a"].name,h["a"]),Object(o["a"])(n,_["a"].name,_["a"]),Object(o["a"])(n,d["a"].name,d["a"]),Object(o["a"])(n,u["a"].name,u["a"]),Object(o["a"])(n,p["a"].name,p["a"]),Object(o["a"])(n,v["a"].name,v["a"]),Object(o["a"])(n,l["a"].name,l["a"]),Object(o["a"])(n,r["a"].name,r["a"]),n),data:function(){return{activeNames:["1"],notices:[],noticestotal:0,currentPage:1,addDialog:!1,willadd_notice:{noticeTitle:"",content:"",publishUser:""},FixDialog:!1,willfix_notice:{noticeId:"",noticeTitle:"",content:""}}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n="/notice/getNoticePage?currPage=1&size=5",t.next=4,a.getNotices(n);case 4:s=0;case 5:if(!(s<a.notices.length)){t.next=11;break}return t.next=8,a.getNotices_detail(a.notices[s].noticeId,s);case 8:s++,t.next=5;break;case 11:case"end":return t.stop()}}),t)})))()},getNotices:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return n=t,n.notices=[],a.next=4,n.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){n.noticestotal=e.data.data.total;for(var t=0;t<e.data.data.records.length;t++){var a={};a.noticeId=e.data.data.records[t].noticeId,a.createTime=e.data.data.records[t].createTime,a.updateTime=e.data.data.records[t].updateTime,a.noticeTitle=e.data.data.records[t].noticeTitle,a.publishUser=e.data.data.records[t].publishUser,a.content="",n.notices.push(a)}Object(r["a"])({type:"success",message:"公告已更新！"})}else Object(r["a"])({type:"danger",message:"数据获取失败！"})})).catch((function(){Object(r["a"])({type:"danger",message:"出错啦！"})}));case 4:case"end":return a.stop()}}),a)})))()},getNotices_detail:function(e,t){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function n(){var s,i;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return s=a,i="/notice/getNoticeById?noticeId="+e,n.next=4,s.request(i,{},"GET",{}).then((function(e){"success"==e.data.status?s.notices[t].content=e.data.data.content:"fail"==e.data.status&&(s.notices[t].content=e.data.data.errMsg)})).catch((function(){Object(r["a"])({type:"danger",message:"获取失败！"})}));case 4:case"end":return n.stop()}}),n)})))()},handleCurrentChange:function(e){var t=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var n,s,i;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return console.log(e),n=t,s="/notice/getNoticePage?currPage="+e+"&size=5",a.next=5,n.getNotices(s);case 5:i=0;case 6:if(!(i<n.notices.length)){a.next=12;break}return a.next=9,n.getNotices_detail(n.notices[i].noticeId,i);case 9:i++,a.next=6;break;case 12:case"end":return a.stop()}}),a)})))()},GetDetail:function(e){console.log(e),this.$router.push({path:"/notice_detail",query:e})},submitAdd:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return console.log(e.willadd_notice),a=e,a.willadd_notice.publishUser=e.$store.state.signed_username,n="/notice/addNotice",t.next=6,a.request(n,a.willadd_notice,"POST",{}).then((function(e){"success"==e.data.status?(Object(r["a"])({type:"success",message:"新增成功！"}),a.refresh(),a.addDialog=!1):"fail"==e.data.status&&Object(r["a"])({type:"danger",message:"新增失败！"})})).catch((function(e){console.log(e),Object(r["a"])({type:"danger",message:"出错了！"})}));case 6:case"end":return t.stop()}}),t)})))()},FixNotice:function(e){console.log(e),this.willfix_notice.noticeId=e.noticeId,this.willfix_notice.noticeTitle=e.noticeTitle,this.willfix_notice.content=e.content,this.FixDialog=!0},submitFix:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var a,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e,n="/notice/updateNotice",t.next=4,a.request(n,a.willfix_notice,"POST",{}).then((function(e){console.log(e),"fail"==e.data.status?Object(r["a"])({type:"danger",message:"修改失败！"}):"success"==e.data.status&&(Object(r["a"])({type:"success",message:"修改成功！"}),a.refresh(),a.FixDialog=!1)})).catch((function(e){console.log(e),Object(r["a"])({type:"danger",message:"出错了！"})}));case 4:a.FixNoticeVisible=!1;case 5:case"end":return t.stop()}}),t)})))()},DeleteNotice:function(e){var t=this;console.log(e),u["a"].confirm({title:"删除通知",message:"此操作将永久删除该通知, 是否继续?"}).then((function(){var a="/notice/deleteNoticeById?noticeId="+e.noticeId;t.request(a,{},"GET",{}).then((function(e){console.log(e),"fail"==e.data.status?Object(r["a"])({type:"danger",message:"删除失败！"}):"success"==e.data.status&&(Object(r["a"])({type:"success",message:"删除成功！"}),t.refresh())})).catch((function(e){console.log(e),Object(r["a"])({type:"danger",message:"出错了！"})}))})).catch((function(){Object(r["a"])({type:"warning",message:"已取消删除！"})}))}}}),k=w,O=(a("92ce"),a("2877")),j=Object(O["a"])(k,s,i,!1,null,null,null);t["default"]=j.exports},"92ce":function(e,t,a){"use strict";a("9e30")},"9e30":function(e,t,a){}}]);