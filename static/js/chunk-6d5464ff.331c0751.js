(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6d5464ff"],{2017:function(e,t,o){"use strict";o("cafe")},"49b2":function(e,t,o){"use strict";o("6be8")},"4d26":function(e,t,o){e.exports=o.p+"static/img/NJUPT.e827660f.png"},"4f85":function(e,t,o){},"6be8":function(e,t,o){},"872c":function(e,t,o){},"9a83":function(e,t,o){"use strict";o("68ef"),o("a71a"),o("9d70"),o("3743"),o("4d75"),o("872c")},"9ed6":function(e,t,o){"use strict";o.r(t);var s,n=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"Login_Container"},["desktop"==this.$store.state.app.device?o("div",{staticClass:"login_container_desktop"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"title-container"},[o("h1",{staticClass:"title"},[e._v("南京邮电大学专利转让系统")])]),o("el-form-item",{attrs:{prop:"userName"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"user"}})],1),o("el-input",{ref:"userName",staticClass:"Sign_input",attrs:{placeholder:"请输入姓名",name:"userName",type:"text",tabindex:"1","auto-complete":"on"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1),o("el-form-item",{attrs:{prop:"passWord"}},[o("span",{staticClass:"svg-container"},[o("svg-icon",{attrs:{"icon-class":"password"}})],1),o("el-input",{key:e.passwordType,ref:"password",staticClass:"Sign_input",attrs:{type:e.passwordType,placeholder:"请输入工号",name:"password",tabindex:"2","auto-complete":"on"},nativeOn:{keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.handleLogin(t)}},model:{value:e.loginForm.passWord,callback:function(t){e.$set(e.loginForm,"passWord",t)},expression:"loginForm.passWord"}}),o("span",{staticClass:"show-pwd",on:{click:e.showPwd}},[o("svg-icon",{attrs:{"icon-class":"password"===e.passwordType?"eye":"eye-open"}})],1)],1),o("div",{staticClass:"login_register"},[o("el-button",{staticClass:"loginbutton",attrs:{loading:e.loading},on:{click:e.handleLogin}},[e._v(" 登录 ")]),o("el-button",{staticClass:"register"},[e._v(" 注册 ")])],1)],1)],1):e._e(),"mobile"==this.$store.state.app.device?o("div",{staticClass:"mobile_login_container"},[e._m(0),o("div",{staticClass:"box"},[e._m(1),o("div",{staticClass:"user"},[o("el-form",{ref:"loginForm",staticClass:"login-form",attrs:{model:e.loginForm,rules:e.loginRules,"auto-complete":"on","label-position":"left"}},[o("div",{staticClass:"username"},[o("el-form-item",{attrs:{prop:"userName"}},[o("el-input",{attrs:{placeholder:"请输入姓名","prefix-icon":"el-icon-s-custom"},model:{value:e.loginForm.userName,callback:function(t){e.$set(e.loginForm,"userName",t)},expression:"loginForm.userName"}})],1)],1),o("div",{staticClass:"password"},[o("el-form-item",{attrs:{prop:"passWord"}},[o("el-input",{attrs:{placeholder:"请输入工号","prefix-icon":"el-icon-lock"},model:{value:e.loginForm.passWord,callback:function(t){e.$set(e.loginForm,"passWord",t)},expression:"loginForm.passWord"}})],1)],1),o("div",{staticClass:"LoginButton"},[o("el-button",{attrs:{type:"primary"},on:{click:e.handleLogin}},[e._v("登录")]),o("el-button",{on:{click:e.registe}},[e._v("注册")])],1)])],1)])]):e._e()])},a=[function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"text"},[o("p",[e._v("专利转让系统")])])},function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"njuptlogo"},[s("img",{attrs:{src:o("4d26"),alt:"NJUPT",width:"180px",height:"180px"}})])}],i=o("1da1"),r=o("5530"),l=o("ade3"),c=(o("e7e5"),o("d399")),u=(o("9a83"),o("f564")),p=(o("96cf"),o("b0c0"),o("2f62")),d={name:"Login",components:(s={},Object(l["a"])(s,u["a"].name,u["a"]),Object(l["a"])(s,c["a"].name,c["a"]),s),mounted:function(){console.log(this.$store.state.app.device)},data:function(){var e=function(e,t,o){""==t?o(new Error("请填写姓名！")):o()},t=function(e,t,o){0==t.length?o(new Error("请填写工号！")):o()};return{loginForm:{userName:"",passWord:""},loginRules:{userName:[{required:!0,trigger:"blur",validator:e}],passWord:[{required:!0,trigger:"blur",validator:t}]},loading:!1,passwordType:"password"}},methods:Object(r["a"])(Object(r["a"])({},Object(p["c"])(["get_id","get_username","get_department","get_autorize"])),{},{showPwd:function(){var e=this;"password"===this.passwordType?this.passwordType="":this.passwordType="password",this.$nextTick((function(){e.$refs.password.focus()}))},handleLogin:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var o;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:""!=e.loginForm.userName&&""!=e.loginForm.passWord?(o=e,"徐小龙"==e.loginForm.userName&&"20020056"==e.loginForm.passWord?(e.get_id("20020056"),e.get_username("徐小龙"),e.get_department("南京邮电大学"),e.get_autorize("教师"),sessionStorage.setItem("state",JSON.stringify(e.$store.state)),Object(u["a"])({type:"success",message:"登录成功，Welcome！"}),"desktop"==e.$store.state.app.device?o.$router.push({path:"/home"}):"mobile"==e.$store.state.app.device?o.$router.push({path:"/home_mobile"}):o.$router.push({path:"/404"})):"包宇豪"==e.loginForm.userName&&"B18030316"==e.loginForm.passWord?(e.get_id("B18030316"),e.get_username("包宇豪"),e.get_autorize("产学研"),sessionStorage.setItem("state",JSON.stringify(e.$store.state)),Object(u["a"])({type:"success",message:"登录成功，Welcome！"}),"desktop"==e.$store.state.app.device?o.$router.push({path:"/home"}):"mobile"==e.$store.state.app.device?o.$router.push({path:"/home_mobile"}):o.$router.push({path:"/404"})):Object(u["a"])({type:"danger",message:"姓名或工号不正确！"})):Object(u["a"])({type:"warning",message:"请填写姓名或工号！"});case 1:case"end":return t.stop()}}),t)})))()},registe:function(){c["a"].fail("暂未开放！")}})},m=d,f=(o("2017"),o("f1be"),o("49b2"),o("2877")),g=Object(f["a"])(m,n,a,!1,null,"74c64b5a",null);t["default"]=g.exports},cafe:function(e,t,o){},e41f:function(e,t,o){"use strict";var s=o("d282"),n=o("a142"),a=o("6605"),i=o("ad06"),r=Object(s["a"])("popup"),l=r[0],c=r[1];t["a"]=l({mixins:[Object(a["a"])()],props:{round:Boolean,duration:[Number,String],closeable:Boolean,transition:String,safeAreaInsetBottom:Boolean,closeIcon:{type:String,default:"cross"},closeIconPosition:{type:String,default:"top-right"},position:{type:String,default:"center"},overlay:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0}},beforeCreate:function(){var e=this,t=function(t){return function(o){return e.$emit(t,o)}};this.onClick=t("click"),this.onOpened=t("opened"),this.onClosed=t("closed")},methods:{onClickCloseIcon:function(e){this.$emit("click-close-icon",e),this.close()}},render:function(){var e,t=arguments[0];if(this.shouldRender){var o=this.round,s=this.position,a=this.duration,r="center"===s,l=this.transition||(r?"van-fade":"van-popup-slide-"+s),u={};if(Object(n["c"])(a)){var p=r?"animationDuration":"transitionDuration";u[p]=a+"s"}return t("transition",{attrs:{appear:this.transitionAppear,name:l},on:{afterEnter:this.onOpened,afterLeave:this.onClosed}},[t("div",{directives:[{name:"show",value:this.value}],style:u,class:c((e={round:o},e[s]=s,e["safe-area-inset-bottom"]=this.safeAreaInsetBottom,e)),on:{click:this.onClick}},[this.slots(),this.closeable&&t(i["a"],{attrs:{role:"button",tabindex:"0",name:this.closeIcon},class:c("close-icon",this.closeIconPosition),on:{click:this.onClickCloseIcon}})])])}}})},f1be:function(e,t,o){"use strict";o("4f85")},f564:function(e,t,o){"use strict";var s=o("c31d"),n=o("2b0e"),a=o("2638"),i=o.n(a),r=o("d282"),l=o("ba31"),c=o("6605"),u=o("e41f"),p=Object(r["a"])("notify"),d=p[0],m=p[1];function f(e,t,o,s){var n={color:t.color,background:t.background};return e(u["a"],i()([{attrs:{value:t.value,position:"top",overlay:!1,duration:.2,lockScroll:!1},style:n,class:[m([t.type]),t.className]},Object(l["b"])(s,!0)]),[(null==o.default?void 0:o.default())||t.message])}f.props=Object(s["a"])({},c["b"],{color:String,message:[Number,String],duration:[Number,String],className:null,background:String,getContainer:[String,Function],type:{type:String,default:"danger"}});var g,h,b=d(f),v=o("a142");function k(e){return Object(v["e"])(e)?e:{message:e}}function y(e){if(!v["g"])return h||(h=Object(l["c"])(b,{on:{click:function(e){h.onClick&&h.onClick(e)},close:function(){h.onClose&&h.onClose()},opened:function(){h.onOpened&&h.onOpened()}}})),e=Object(s["a"])({},y.currentOptions,k(e)),Object(s["a"])(h,e),clearTimeout(g),e.duration&&e.duration>0&&(g=setTimeout(y.clear,e.duration)),h}function C(){return{type:"danger",value:!0,message:"",color:void 0,background:void 0,duration:3e3,className:"",onClose:null,onClick:null,onOpened:null}}y.clear=function(){h&&(h.value=!1)},y.currentOptions=C(),y.setDefaultOptions=function(e){Object(s["a"])(y.currentOptions,e)},y.resetDefaultOptions=function(){y.currentOptions=C()},y.install=function(){n["default"].use(b)},y.Component=b,n["default"].prototype.$notify=y;t["a"]=y}}]);