(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-039ee87c"],{"0997":function(e,a,t){},"25b0":function(e,a,t){"use strict";t.r(a);var r,s=function(){var e=this,a=e.$createElement,t=e._self._c||a;return t("div",{staticClass:"patents_mobile_Container"},[t("div",{staticClass:"Search"},[t("div",{staticClass:"Search_field"},[t("van-field",{attrs:{center:"",clearable:"",label:"专利名称",placeholder:"请输入要查询的专利名称"},scopedSlots:e._u([{key:"button",fn:function(){return[t("van-button",{attrs:{size:"small",type:"info"},on:{click:e.search}},[e._v("搜 索")])]},proxy:!0}]),model:{value:e.SearchText,callback:function(a){e.SearchText=a},expression:"SearchText"}})],1)]),t("div",{staticClass:"Patents"},e._l(e.patents,(function(a){return t("van-cell",{key:a.index,attrs:{title:a.zlmc,"is-link":""},on:{click:function(t){return e.GetDetail(a)}}})})),1),t("div",{staticClass:"Page"},[t("van-pagination",{attrs:{"total-items":e.total,"items-per-page":10,"force-ellipses":""},on:{change:e.handleCurrentChange},model:{value:e.currentPage,callback:function(a){e.currentPage=a},expression:"currentPage"}})],1)])},n=[],c=t("1da1"),d=t("ade3"),o=(t("be7f"),t("565f")),i=(t("61ae"),t("d314")),l=(t("09d3"),t("2d6d")),u=(t("9a83"),t("f564")),f=(t("6a39"),t("f240")),g=(t("c194"),t("7744")),p=(t("66b9"),t("b650")),h=(t("96cf"),t("b0c0"),t("ac1f"),t("1276"),{components:(r={},Object(d["a"])(r,p["a"].name,p["a"]),Object(d["a"])(r,g["a"].name,g["a"]),Object(d["a"])(r,f["a"].name,f["a"]),Object(d["a"])(r,u["a"].name,u["a"]),Object(d["a"])(r,l["a"].name,l["a"]),Object(d["a"])(r,i["a"].name,i["a"]),Object(d["a"])(r,o["a"].name,o["a"]),r),data:function(){return{name:this.$store.state.signed_username,id:this.$store.state.signed_id,patents:[],total:0,currentPage:1,Page_url:"",SearchText:""}},created:function(){this.refresh()},methods:{refresh:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t=e,t.patents=[],t.currentPage=1,t.SearchText="",console.log(e.$store.state),r="/patent/getMyPatentPage?currPage="+t.currentPage+"&size=10&zldyzzgh="+t.id+"&zldyzzxm="+t.name,t.Page_url=r,a.next=9,t.getUserPatent(r);case 9:case"end":return a.stop()}}),a)})))()},getUserPatent:function(e){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=a,t.next=3,r.request(e,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){r.total=e.data.data.total;for(var a=0;a<e.data.data.records.length;a++){var t={};t.index=a+1,t.wid=e.data.data.records[a].wid,t.sqbh=e.data.data.records[a].sqbh,t.zlmc=e.data.data.records[a].zlmc,t.zlh=e.data.data.records[a].zlh,t.zlqr=e.data.data.records[a].zlqr,t.gsdw=e.data.data.records[a].gsdw,t.zhgxsj=null==e.data.data.records[a].transferProcess?e.data.data.records[a].zhgxsj:e.data.data.records[a].transferProcess.gmtUpdate,t.pzrq=e.data.data.records[a].pzrq,t.zldlr=e.data.data.records[a].zldlr,t.zldyzzgh=e.data.data.records[a].zldyzzgh,t.zldyzzxm=e.data.data.records[a].zldyzzxm,t.zlh=e.data.data.records[a].zlh,t.zlmc=e.data.data.records[a].zlmc,null==e.data.data.records[a].transferProcess?t.gmtUpdate=null:t.gmtUpdate=e.data.data.records[a].transferProcess.gmtUpdate,null==e.data.data.records[a].transferProcess?t.state="未转换":(t.transferProcessId=e.data.data.records[a].transferProcess.transferProcessId,e.data.data.records[a].transferProcess.isWithdraw?t.state="审批表已撤回":e.data.data.records[a].transferProcess.isZldyzzConfirm?e.data.data.records[a].transferProcess.isZldyzzApproval?e.data.data.records[a].transferProcess.isDepartmentConfirm?e.data.data.records[a].transferProcess.isDepartmentApproval?e.data.data.records[a].transferProcess.isComplete?(t.state="已转换",t.projectCode=e.data.data.records[a].transferProcess.projectCode):e.data.data.records[a].transferProcess.isCxyConfirm?e.data.data.records[a].transferProcess.isCxyApproval?(t.projectCode=e.data.data.records[a].transferProcess.projectCode,e.data.data.records[a].transferProcess.isPublicNotice?r.TimeDiffer(e.data.data.records[a].transferProcess.publicNoticeTime)?null==e.data.data.records[a].transferProcess.contractId?t.state="正在转换：等待上传合同":e.data.data.records[a].transferProcess.isContractSendBack&&null!=e.data.data.records[a].transferProcess.voucherId?null==e.data.data.records[a].transferProcess.checklistId?t.state="正在转换：等待上传认定清单（备案）":null==e.data.data.records[a].transferProcess.invoiceId?t.state="正在转换：等待上传发票":e.data.data.records[a].transferProcess.isComplete||(t.state="等待流程结束"):t.state="正在转换：等待合同寄回和上传到款凭证":t.state="正在转换：正在公示中":t.state="正在转换：等待公示"):t.state="产学研未通过":t.state="正在转换：等待产学研审批":t.state="归属单位未通过":t.state="正在转换：等待归属单位审批":t.state="第一作者未通过":t.state="正在转换：等待第一作者确认"),r.patents.push(t)}Object(u["a"])({type:"success",message:"数据已更新！"})}else Object(u["a"])({type:"success",message:"数据请求失败！"})})).catch((function(e){console.log(e),Object(u["a"])({type:"success",message:"出错了！"})}));case 3:case"end":return t.stop()}}),t)})))()},handleCurrentChange:function(e){var a=this;return Object(c["a"])(regeneratorRuntime.mark((function t(){var r,s;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=a,console.log(r.Page_url,e),s=r.Page_url.split("currPage")[0]+"currPage="+e+"&size"+r.Page_url.split("size")[1],console.log(s),r.patents=[],r.currentPage=e,t.next=8,r.getUserPatent(s);case 8:case"end":return t.stop()}}),t)})))()},TimeTransfer:function(e){var a=new Date(e),t=a.getFullYear(),r=a.getMonth()+1,s=a.getDate(),n=a.getHours(),c=a.getMinutes(),d=a.getSeconds(),o=t+"-";return r<10&&(o+="0"),o+=r+"-",s<10&&(o+="0"),o+=s+" ",n<10&&(o+="0"),o+=n+":",c<10&&(o+="0"),o+=c+":",d<10&&(o+="0"),o+=d,o},TimeDiffer:function(e){var a=this.TimeTransfer(e),t=new Date,r=new Date(a),s=(t-r)/1e3,n=parseInt(s/86400);parseInt(s/3600),parseInt(s%3600/60),parseInt(s%60);return n>15},search:function(){var e=this;return Object(c["a"])(regeneratorRuntime.mark((function a(){var t,r;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:t=e,""==t.SearchText?Object(u["a"])({type:"warning",message:"请填写查询内容！"}):(r="",t.patents=[],t.currentPage=1,r="/patent/getPatentPageByZLMC?currPage="+t.currentPage+"&size=10&zldyzzgh="+t.id+"&zldyzzxm="+t.name+"&zlmc="+t.SearchText,t.Page_url=r,t.getUserPatent(r));case 2:case"end":return a.stop()}}),a)})))()},GetDetail:function(e){console.log(e),this.$router.push({path:"/patent_detail",query:e})}}}),m=h,P=(t("7521"),t("2877")),z=Object(P["a"])(m,s,n,!1,null,null,null);a["default"]=z.exports},7521:function(e,a,t){"use strict";t("0997")}}]);