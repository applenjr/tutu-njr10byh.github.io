(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0c02e0"],{"414a":function(t,e,a){"use strict";a.r(e);var r=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"data_center_Container"})},o=[],c={data:function(){return{months:[{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0},{totalContractPrice:0}]}},created:function(){this.refresh()},methods:{refresh:function(){var t=this,e=new Date;console.log(e.getFullYear());var a="/report/getMonthlyConversionAmount?year="+e.getFullYear();t.request(a,{},"GET",{}).then((function(e){if(console.log(e.data),"success"==e.data.status){for(var a=0;a<12;a++)for(var r=0;r<e.data.data[a].length;r++)t.months[a].totalContractPrice+=e.data.data[a][r].totalContractPrice;t.$message({message:"数据已更新！",type:"success"})}else t.$message({message:e.data.data.errMsg,type:"error"})})).catch((function(e){console.log(e),t.$message({message:"出错了！",type:"error"})}))}}},n=c,s=a("2877"),l=Object(s["a"])(n,r,o,!1,null,null,null);e["default"]=l.exports}}]);