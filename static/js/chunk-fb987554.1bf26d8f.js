(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-fb987554"],{2017:function(t,e,r){"use strict";r("cafe")},"3c35":function(t,e){(function(e){t.exports=e}).call(this,{})},8237:function(module,exports,__webpack_require__){(function(process,global){var __WEBPACK_AMD_DEFINE_RESULT__;
/**
 * [js-md5]{@link https://github.com/emn178/js-md5}
 *
 * @namespace md5
 * @version 0.7.3
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2014-2017
 * @license MIT
 */(function(){"use strict";var ERROR="input is invalid type",WINDOW="object"===typeof window,root=WINDOW?window:{};root.JS_MD5_NO_WINDOW&&(WINDOW=!1);var WEB_WORKER=!WINDOW&&"object"===typeof self,NODE_JS=!root.JS_MD5_NO_NODE_JS&&"object"===typeof process&&process.versions&&process.versions.node;NODE_JS?root=global:WEB_WORKER&&(root=self);var COMMON_JS=!root.JS_MD5_NO_COMMON_JS&&"object"===typeof module&&module.exports,AMD=__webpack_require__("3c35"),ARRAY_BUFFER=!root.JS_MD5_NO_ARRAY_BUFFER&&"undefined"!==typeof ArrayBuffer,HEX_CHARS="0123456789abcdef".split(""),EXTRA=[128,32768,8388608,-2147483648],SHIFT=[0,8,16,24],OUTPUT_TYPES=["hex","array","digest","buffer","arrayBuffer","base64"],BASE64_ENCODE_CHAR="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".split(""),blocks=[],buffer8;if(ARRAY_BUFFER){var buffer=new ArrayBuffer(68);buffer8=new Uint8Array(buffer),blocks=new Uint32Array(buffer)}!root.JS_MD5_NO_NODE_JS&&Array.isArray||(Array.isArray=function(t){return"[object Array]"===Object.prototype.toString.call(t)}),!ARRAY_BUFFER||!root.JS_MD5_NO_ARRAY_BUFFER_IS_VIEW&&ArrayBuffer.isView||(ArrayBuffer.isView=function(t){return"object"===typeof t&&t.buffer&&t.buffer.constructor===ArrayBuffer});var createOutputMethod=function(t){return function(e){return new Md5(!0).update(e)[t]()}},createMethod=function(){var t=createOutputMethod("hex");NODE_JS&&(t=nodeWrap(t)),t.create=function(){return new Md5},t.update=function(e){return t.create().update(e)};for(var e=0;e<OUTPUT_TYPES.length;++e){var r=OUTPUT_TYPES[e];t[r]=createOutputMethod(r)}return t},nodeWrap=function(method){var crypto=eval("require('crypto')"),Buffer=eval("require('buffer').Buffer"),nodeMethod=function(t){if("string"===typeof t)return crypto.createHash("md5").update(t,"utf8").digest("hex");if(null===t||void 0===t)throw ERROR;return t.constructor===ArrayBuffer&&(t=new Uint8Array(t)),Array.isArray(t)||ArrayBuffer.isView(t)||t.constructor===Buffer?crypto.createHash("md5").update(new Buffer(t)).digest("hex"):method(t)};return nodeMethod};function Md5(t){if(t)blocks[0]=blocks[16]=blocks[1]=blocks[2]=blocks[3]=blocks[4]=blocks[5]=blocks[6]=blocks[7]=blocks[8]=blocks[9]=blocks[10]=blocks[11]=blocks[12]=blocks[13]=blocks[14]=blocks[15]=0,this.blocks=blocks,this.buffer8=buffer8;else if(ARRAY_BUFFER){var e=new ArrayBuffer(68);this.buffer8=new Uint8Array(e),this.blocks=new Uint32Array(e)}else this.blocks=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];this.h0=this.h1=this.h2=this.h3=this.start=this.bytes=this.hBytes=0,this.finalized=this.hashed=!1,this.first=!0}Md5.prototype.update=function(t){if(!this.finalized){var e,r=typeof t;if("string"!==r){if("object"!==r)throw ERROR;if(null===t)throw ERROR;if(ARRAY_BUFFER&&t.constructor===ArrayBuffer)t=new Uint8Array(t);else if(!Array.isArray(t)&&(!ARRAY_BUFFER||!ArrayBuffer.isView(t)))throw ERROR;e=!0}var s,o,a=0,i=t.length,n=this.blocks,c=this.buffer8;while(a<i){if(this.hashed&&(this.hashed=!1,n[0]=n[16],n[16]=n[1]=n[2]=n[3]=n[4]=n[5]=n[6]=n[7]=n[8]=n[9]=n[10]=n[11]=n[12]=n[13]=n[14]=n[15]=0),e)if(ARRAY_BUFFER)for(o=this.start;a<i&&o<64;++a)c[o++]=t[a];else for(o=this.start;a<i&&o<64;++a)n[o>>2]|=t[a]<<SHIFT[3&o++];else if(ARRAY_BUFFER)for(o=this.start;a<i&&o<64;++a)s=t.charCodeAt(a),s<128?c[o++]=s:s<2048?(c[o++]=192|s>>6,c[o++]=128|63&s):s<55296||s>=57344?(c[o++]=224|s>>12,c[o++]=128|s>>6&63,c[o++]=128|63&s):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++a)),c[o++]=240|s>>18,c[o++]=128|s>>12&63,c[o++]=128|s>>6&63,c[o++]=128|63&s);else for(o=this.start;a<i&&o<64;++a)s=t.charCodeAt(a),s<128?n[o>>2]|=s<<SHIFT[3&o++]:s<2048?(n[o>>2]|=(192|s>>6)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):s<55296||s>=57344?(n[o>>2]|=(224|s>>12)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]):(s=65536+((1023&s)<<10|1023&t.charCodeAt(++a)),n[o>>2]|=(240|s>>18)<<SHIFT[3&o++],n[o>>2]|=(128|s>>12&63)<<SHIFT[3&o++],n[o>>2]|=(128|s>>6&63)<<SHIFT[3&o++],n[o>>2]|=(128|63&s)<<SHIFT[3&o++]);this.lastByteIndex=o,this.bytes+=o-this.start,o>=64?(this.start=o-64,this.hash(),this.hashed=!0):this.start=o}return this.bytes>4294967295&&(this.hBytes+=this.bytes/4294967296<<0,this.bytes=this.bytes%4294967296),this}},Md5.prototype.finalize=function(){if(!this.finalized){this.finalized=!0;var t=this.blocks,e=this.lastByteIndex;t[e>>2]|=EXTRA[3&e],e>=56&&(this.hashed||this.hash(),t[0]=t[16],t[16]=t[1]=t[2]=t[3]=t[4]=t[5]=t[6]=t[7]=t[8]=t[9]=t[10]=t[11]=t[12]=t[13]=t[14]=t[15]=0),t[14]=this.bytes<<3,t[15]=this.hBytes<<3|this.bytes>>>29,this.hash()}},Md5.prototype.hash=function(){var t,e,r,s,o,a,i=this.blocks;this.first?(t=i[0]-680876937,t=(t<<7|t>>>25)-271733879<<0,s=(-1732584194^2004318071&t)+i[1]-117830708,s=(s<<12|s>>>20)+t<<0,r=(-271733879^s&(-271733879^t))+i[2]-1126478375,r=(r<<17|r>>>15)+s<<0,e=(t^r&(s^t))+i[3]-1316259209,e=(e<<22|e>>>10)+r<<0):(t=this.h0,e=this.h1,r=this.h2,s=this.h3,t+=(s^e&(r^s))+i[0]-680876936,t=(t<<7|t>>>25)+e<<0,s+=(r^t&(e^r))+i[1]-389564586,s=(s<<12|s>>>20)+t<<0,r+=(e^s&(t^e))+i[2]+606105819,r=(r<<17|r>>>15)+s<<0,e+=(t^r&(s^t))+i[3]-1044525330,e=(e<<22|e>>>10)+r<<0),t+=(s^e&(r^s))+i[4]-176418897,t=(t<<7|t>>>25)+e<<0,s+=(r^t&(e^r))+i[5]+1200080426,s=(s<<12|s>>>20)+t<<0,r+=(e^s&(t^e))+i[6]-1473231341,r=(r<<17|r>>>15)+s<<0,e+=(t^r&(s^t))+i[7]-45705983,e=(e<<22|e>>>10)+r<<0,t+=(s^e&(r^s))+i[8]+1770035416,t=(t<<7|t>>>25)+e<<0,s+=(r^t&(e^r))+i[9]-1958414417,s=(s<<12|s>>>20)+t<<0,r+=(e^s&(t^e))+i[10]-42063,r=(r<<17|r>>>15)+s<<0,e+=(t^r&(s^t))+i[11]-1990404162,e=(e<<22|e>>>10)+r<<0,t+=(s^e&(r^s))+i[12]+1804603682,t=(t<<7|t>>>25)+e<<0,s+=(r^t&(e^r))+i[13]-40341101,s=(s<<12|s>>>20)+t<<0,r+=(e^s&(t^e))+i[14]-1502002290,r=(r<<17|r>>>15)+s<<0,e+=(t^r&(s^t))+i[15]+1236535329,e=(e<<22|e>>>10)+r<<0,t+=(r^s&(e^r))+i[1]-165796510,t=(t<<5|t>>>27)+e<<0,s+=(e^r&(t^e))+i[6]-1069501632,s=(s<<9|s>>>23)+t<<0,r+=(t^e&(s^t))+i[11]+643717713,r=(r<<14|r>>>18)+s<<0,e+=(s^t&(r^s))+i[0]-373897302,e=(e<<20|e>>>12)+r<<0,t+=(r^s&(e^r))+i[5]-701558691,t=(t<<5|t>>>27)+e<<0,s+=(e^r&(t^e))+i[10]+38016083,s=(s<<9|s>>>23)+t<<0,r+=(t^e&(s^t))+i[15]-660478335,r=(r<<14|r>>>18)+s<<0,e+=(s^t&(r^s))+i[4]-405537848,e=(e<<20|e>>>12)+r<<0,t+=(r^s&(e^r))+i[9]+568446438,t=(t<<5|t>>>27)+e<<0,s+=(e^r&(t^e))+i[14]-1019803690,s=(s<<9|s>>>23)+t<<0,r+=(t^e&(s^t))+i[3]-187363961,r=(r<<14|r>>>18)+s<<0,e+=(s^t&(r^s))+i[8]+1163531501,e=(e<<20|e>>>12)+r<<0,t+=(r^s&(e^r))+i[13]-1444681467,t=(t<<5|t>>>27)+e<<0,s+=(e^r&(t^e))+i[2]-51403784,s=(s<<9|s>>>23)+t<<0,r+=(t^e&(s^t))+i[7]+1735328473,r=(r<<14|r>>>18)+s<<0,e+=(s^t&(r^s))+i[12]-1926607734,e=(e<<20|e>>>12)+r<<0,o=e^r,t+=(o^s)+i[5]-378558,t=(t<<4|t>>>28)+e<<0,s+=(o^t)+i[8]-2022574463,s=(s<<11|s>>>21)+t<<0,a=s^t,r+=(a^e)+i[11]+1839030562,r=(r<<16|r>>>16)+s<<0,e+=(a^r)+i[14]-35309556,e=(e<<23|e>>>9)+r<<0,o=e^r,t+=(o^s)+i[1]-1530992060,t=(t<<4|t>>>28)+e<<0,s+=(o^t)+i[4]+1272893353,s=(s<<11|s>>>21)+t<<0,a=s^t,r+=(a^e)+i[7]-155497632,r=(r<<16|r>>>16)+s<<0,e+=(a^r)+i[10]-1094730640,e=(e<<23|e>>>9)+r<<0,o=e^r,t+=(o^s)+i[13]+681279174,t=(t<<4|t>>>28)+e<<0,s+=(o^t)+i[0]-358537222,s=(s<<11|s>>>21)+t<<0,a=s^t,r+=(a^e)+i[3]-722521979,r=(r<<16|r>>>16)+s<<0,e+=(a^r)+i[6]+76029189,e=(e<<23|e>>>9)+r<<0,o=e^r,t+=(o^s)+i[9]-640364487,t=(t<<4|t>>>28)+e<<0,s+=(o^t)+i[12]-421815835,s=(s<<11|s>>>21)+t<<0,a=s^t,r+=(a^e)+i[15]+530742520,r=(r<<16|r>>>16)+s<<0,e+=(a^r)+i[2]-995338651,e=(e<<23|e>>>9)+r<<0,t+=(r^(e|~s))+i[0]-198630844,t=(t<<6|t>>>26)+e<<0,s+=(e^(t|~r))+i[7]+1126891415,s=(s<<10|s>>>22)+t<<0,r+=(t^(s|~e))+i[14]-1416354905,r=(r<<15|r>>>17)+s<<0,e+=(s^(r|~t))+i[5]-57434055,e=(e<<21|e>>>11)+r<<0,t+=(r^(e|~s))+i[12]+1700485571,t=(t<<6|t>>>26)+e<<0,s+=(e^(t|~r))+i[3]-1894986606,s=(s<<10|s>>>22)+t<<0,r+=(t^(s|~e))+i[10]-1051523,r=(r<<15|r>>>17)+s<<0,e+=(s^(r|~t))+i[1]-2054922799,e=(e<<21|e>>>11)+r<<0,t+=(r^(e|~s))+i[8]+1873313359,t=(t<<6|t>>>26)+e<<0,s+=(e^(t|~r))+i[15]-30611744,s=(s<<10|s>>>22)+t<<0,r+=(t^(s|~e))+i[6]-1560198380,r=(r<<15|r>>>17)+s<<0,e+=(s^(r|~t))+i[13]+1309151649,e=(e<<21|e>>>11)+r<<0,t+=(r^(e|~s))+i[4]-145523070,t=(t<<6|t>>>26)+e<<0,s+=(e^(t|~r))+i[11]-1120210379,s=(s<<10|s>>>22)+t<<0,r+=(t^(s|~e))+i[2]+718787259,r=(r<<15|r>>>17)+s<<0,e+=(s^(r|~t))+i[9]-343485551,e=(e<<21|e>>>11)+r<<0,this.first?(this.h0=t+1732584193<<0,this.h1=e-271733879<<0,this.h2=r-1732584194<<0,this.h3=s+271733878<<0,this.first=!1):(this.h0=this.h0+t<<0,this.h1=this.h1+e<<0,this.h2=this.h2+r<<0,this.h3=this.h3+s<<0)},Md5.prototype.hex=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3;return HEX_CHARS[t>>4&15]+HEX_CHARS[15&t]+HEX_CHARS[t>>12&15]+HEX_CHARS[t>>8&15]+HEX_CHARS[t>>20&15]+HEX_CHARS[t>>16&15]+HEX_CHARS[t>>28&15]+HEX_CHARS[t>>24&15]+HEX_CHARS[e>>4&15]+HEX_CHARS[15&e]+HEX_CHARS[e>>12&15]+HEX_CHARS[e>>8&15]+HEX_CHARS[e>>20&15]+HEX_CHARS[e>>16&15]+HEX_CHARS[e>>28&15]+HEX_CHARS[e>>24&15]+HEX_CHARS[r>>4&15]+HEX_CHARS[15&r]+HEX_CHARS[r>>12&15]+HEX_CHARS[r>>8&15]+HEX_CHARS[r>>20&15]+HEX_CHARS[r>>16&15]+HEX_CHARS[r>>28&15]+HEX_CHARS[r>>24&15]+HEX_CHARS[s>>4&15]+HEX_CHARS[15&s]+HEX_CHARS[s>>12&15]+HEX_CHARS[s>>8&15]+HEX_CHARS[s>>20&15]+HEX_CHARS[s>>16&15]+HEX_CHARS[s>>28&15]+HEX_CHARS[s>>24&15]},Md5.prototype.toString=Md5.prototype.hex,Md5.prototype.digest=function(){this.finalize();var t=this.h0,e=this.h1,r=this.h2,s=this.h3;return[255&t,t>>8&255,t>>16&255,t>>24&255,255&e,e>>8&255,e>>16&255,e>>24&255,255&r,r>>8&255,r>>16&255,r>>24&255,255&s,s>>8&255,s>>16&255,s>>24&255]},Md5.prototype.array=Md5.prototype.digest,Md5.prototype.arrayBuffer=function(){this.finalize();var t=new ArrayBuffer(16),e=new Uint32Array(t);return e[0]=this.h0,e[1]=this.h1,e[2]=this.h2,e[3]=this.h3,t},Md5.prototype.buffer=Md5.prototype.arrayBuffer,Md5.prototype.base64=function(){for(var t,e,r,s="",o=this.array(),a=0;a<15;)t=o[a++],e=o[a++],r=o[a++],s+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[63&(t<<4|e>>>4)]+BASE64_ENCODE_CHAR[63&(e<<2|r>>>6)]+BASE64_ENCODE_CHAR[63&r];return t=o[a],s+=BASE64_ENCODE_CHAR[t>>>2]+BASE64_ENCODE_CHAR[t<<4&63]+"==",s};var exports=createMethod();COMMON_JS?module.exports=exports:(root.md5=exports,AMD&&(__WEBPACK_AMD_DEFINE_RESULT__=function(){return exports}.call(exports,__webpack_require__,exports,module),void 0===__WEBPACK_AMD_DEFINE_RESULT__||(module.exports=__WEBPACK_AMD_DEFINE_RESULT__)))})()}).call(this,__webpack_require__("4362"),__webpack_require__("c8ba"))},"95c7":function(t,e,r){},"9ed6":function(t,e,r){"use strict";r.r(e);var s=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"Login_Container"},[r("div",{staticClass:"login_container_desktop"},[r("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:t.loginForm,rules:t.loginRules,"auto-complete":"on","label-position":"left"}},[r("div",{staticClass:"title-container"},[r("h1",{staticClass:"title"},[t._v("南京邮电大学专利转让系统")])]),r("el-form-item",{attrs:{prop:"userName"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"user"}})],1),r("el-input",{ref:"userName",staticClass:"Sign_input",attrs:{placeholder:"请输入工号",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:t.loginForm.userName,callback:function(e){t.$set(t.loginForm,"userName",e)},expression:"loginForm.userName"}})],1),r("el-form-item",{attrs:{prop:"passWord"}},[r("span",{staticClass:"svg-container"},[r("svg-icon",{attrs:{"icon-class":"password"}})],1),r("el-input",{key:t.passwordType,ref:"password",staticClass:"Sign_input",attrs:{type:t.passwordType,placeholder:"请输入密码",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.handleLogin(e)}},model:{value:t.loginForm.passWord,callback:function(e){t.$set(t.loginForm,"passWord",e)},expression:"loginForm.passWord"}}),r("span",{staticClass:"show-pwd",on:{click:t.showPwd}},[r("svg-icon",{attrs:{"icon-class":"password"===t.passwordType?"eye":"eye-open"}})],1)],1),r("div",{staticClass:"login"},[r("el-button",{staticClass:"loginbutton",attrs:{loading:t.loading},on:{click:t.handleLogin}},[t._v(" 登录 ")])],1)],1)],1),r("el-dialog",{attrs:{title:"提示",visible:t.sliderDialog,width:"30%"},on:{"update:visible":function(e){t.sliderDialog=e}}},[r("div",{attrs:{id:"captcha"}}),r("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[r("el-button",{on:{click:function(e){t.sliderDialog=!1}}},[t._v("取 消")]),r("el-button",{attrs:{type:"primary"},on:{click:function(e){t.sliderDialog=!1}}},[t._v("确 定")])],1)])],1)},o=[],a=r("1da1"),i=r("5530"),n=(r("96cf"),r("2f62")),c=r("8237"),l=r.n(c),u={name:"Login",data:function(){var t=function(t,e,r){""==e?r(new Error("请填写工号！")):r()},e=function(t,e,r){0==e.length?r(new Error("请填写密码！")):r()};return{loginForm:{userName:"",passWord:""},loginRules:{userName:[{required:!0,trigger:"blur",validator:t}],passWord:[{required:!0,trigger:"blur",validator:e}]},loading:!1,passwordType:"password",sliderDialog:!1}},methods:Object(i["a"])(Object(i["a"])({},Object(n["c"])(["get_id","get_username","get_department","get_email","get_autorize","get_menuBarStyle"])),{},{showPwd:function(){var t=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){t.$refs.password.focus()}))},handleLogin:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var r,s,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:r=t,""!=t.loginForm.userName&&""!=t.loginForm.passWord?(s="2040642949",o=new TencentCaptcha(s,(function(t){if(console.log(t),0==t.ret){console.log(t,"腾讯云验证码"),r.loading=!0;var e={};e.username=r.loginForm.userName,e.password=l()(r.loginForm.passWord),r.request("/authorize/loginByPassword",e,"POST",{}).then((function(t){if(console.log(t.data),r.loading=!1,"success"==t.data.status)switch(r.get_id(t.data.data.userGh),r.get_username(t.data.data.userName),r.get_autorize(t.data.data.role),r.get_department(t.data.data.userDepartment),r.$message.success("Welcome，"+t.data.data.userName+"！"),t.data.data.role){case"superadmin":r.get_menuBarStyle({menuBar_color:"#4c6237",text_color:"#d4e1c6",active_text_color:"#a5fd42"}),r.$router.push({path:"/contract"});break;case"admin":r.get_menuBarStyle({menuBar_color:"#796841",text_color:"#e8dcbd",active_text_color:"#ffd500"}),r.$router.push({path:"/contract"});break;case"teacher":r.get_menuBarStyle({menuBar_color:"#304156",text_color:"#bfcbd9",active_text_color:"#409EFF"}),r.$router.push({path:"/patents"});break;case"finance":r.get_menuBarStyle({menuBar_color:"#4c6237",text_color:"#d4e1c6",active_text_color:"#a5fd42"}),r.$router.push({path:"/contract_invoice"});break;case"root":r.get_menuBarStyle({menuBar_color:"#304156",text_color:"#bfcbd9",active_text_color:"#409EFF"}),sessionStorage.setItem("state",JSON.stringify(r.$store.state)),r.$router.push({path:"/patents"});break;default:break}else r.$message.error(t.data.data.errMsg)})).catch((function(t){console.log(t),r.loading=!1}))}})),o.langFun(),o.show()):(r.loading=!1,r.$message.warning("请填写姓名或工号！"));case 2:case"end":return e.stop()}}),e)})))()}})},h=u,_=(r("2017"),r("a22d"),r("2877")),f=Object(_["a"])(h,s,o,!1,null,"30b02cde",null);e["default"]=f.exports},a22d:function(t,e,r){"use strict";r("95c7")},cafe:function(t,e,r){}}]);