(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-17259d41"],{"0e19":function(e,t,a){"use strict";a("6700")},4106:function(e,t,a){},4355:function(e,t,a){"use strict";a("4106")},4607:function(e,t,a){},"464c":function(e,t,a){"use strict";a("8a71")},"5e1f":function(e,t,a){"use strict";a("4607")},6700:function(e,t,a){},"685e":function(e,t,a){e.exports=a.p+"static/img/headerImage.baefd97f.png"},"6f73":function(e,t,a){"use strict";a.r(t);var s,i,o,n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"page-layout"},[a("div",{staticClass:"page-header-wrapper"},[a("PageHeader")],1),a("router-view",{staticClass:"sub-page"})],1)},r=[],l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"components-page-header"},[a("div",{staticClass:"page-header-inner",class:{"layout-container":!e.fullWidth,fullWidth:e.fullWidth}},[a("div",{staticClass:"inline-block logo-wrapper"},[a("span",[e._v("C317DataUI")]),e._t("left-slot")],2),a("div",{staticClass:"header-center-wrapper"},[e._t("default")],2),a("div",{staticClass:"user-wrapper"},[e._t("right-slot"),a("userHeadBtn")],2)])])},c=[],u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-head-btn-components"},[e.isLogined?a("el-dropdown",[a("div",{staticClass:"inline-block"},[a("div",{staticClass:"user-head-btn-img"},[a("img",{attrs:{src:e.userData.avatar||e.userHeadImage,alt:""}})]),a("span",{staticClass:"user-head-btn-name",staticStyle:{color:"white"}},[e._v(e._s(e.userData.name))])]),e.isLogined?a("el-dropdown-menu",[a("el-dropdown-item",[a("userInfo",{attrs:{userData:e.userData,showEdit:!0}},[a("i",{staticClass:"el-icon-user"}),e._v(" 个人资料\n        ")])],1),a("el-dropdown-item",[a("resetPassword",[a("i",{staticClass:"el-icon-edit"}),e._v(" 修改密码\n        ")])],1),a("el-dropdown-item",[a("div",{on:{click:e.doLogout}},[a("i",{staticClass:"el-icon-switch-button"}),e._v(" 退出登录\n        ")])])],1):e._e()],1):a("div",{staticClass:"inline-block"},[a("span",{staticClass:"login-btn",on:{click:e.goLogin}},[e._v("登录/注册")])])],1)},d=[],m=a("ade3"),p=(a("7f7f"),a("5c96")),f=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"change-password inline-block"},[a("div",{staticClass:"inline-block",on:{click:e.show}},[e._t("default")],2),e.dialogleVisible?a("el-dialog",{staticClass:"page-dialog-wrapper",attrs:{title:"修改密码",width:"480px",visible:e.dialogleVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogleVisible=t},close:e.closePop}},[a("el-form",{ref:"ruleForm",attrs:{model:e.form,"label-width":"110px",rules:e.rules}},[a("el-form-item",{attrs:{label:"输入旧密码：",prop:"oldPassword"}},[a("el-input",{attrs:{placeholder:"请输入旧密码",type:"password"},model:{value:e.form.oldPassword,callback:function(t){e.$set(e.form,"oldPassword",t)},expression:"form.oldPassword"}})],1),a("el-form-item",{attrs:{label:"输入新密码：",prop:"newPass"}},[a("el-input",{attrs:{placeholder:"最少输入6位数字/字母，不可输入特殊字符",type:"password"},model:{value:e.form.newPass,callback:function(t){e.$set(e.form,"newPass",t)},expression:"form.newPass"}})],1),a("el-form-item",{attrs:{label:"确认新密码：",prop:"newPassword"}},[a("el-input",{attrs:{placeholder:"最少输入6位数字/字母，不可输入特殊字符",type:"password"},model:{value:e.form.newPassword,callback:function(t){e.$set(e.form,"newPassword",t)},expression:"form.newPassword"}})],1)],1),a("span",{staticClass:"dialog-footer",attrs:{slot:"footer"},slot:"footer"},[a("el-button",{on:{click:e.closePop}},[e._v("取消")]),a("el-button",{attrs:{type:"primary",loading:e.loading},on:{click:e.savePassword}},[e._v("提交")])],1)],1):e._e()],1)},g=[],b=a("8dd0"),h={components:(s={},Object(m["a"])(s,p["Form"].name,p["Form"]),Object(m["a"])(s,p["FormItem"].name,p["FormItem"]),Object(m["a"])(s,p["Dialog"].name,p["Dialog"]),Object(m["a"])(s,p["Button"].name,p["Button"]),Object(m["a"])(s,p["Input"].name,p["Input"]),s),data:function(){var e=this,t=function(t,a,s){""===a?s(new Error("请再次输入密码")):a!==e.form.newPass?s(new Error("两次输入密码不一致!")):s()};return{loading:!1,dialogleVisible:!1,form:{newPass:"",oldPassword:"",newPassword:""},rules:{oldPassword:[{required:!0,message:"请输入旧密码",trigger:"blur"},{required:!0,pattern:/^[A-Za-z0-9]\w{5,15}$/,message:"输入6-16位数字或字母，不可输入特殊字符",trigger:"blur"}],newPass:[{required:!0,message:"请输入新密码",trigger:"blur"},{required:!0,pattern:/^[A-Za-z0-9]\w{5,15}$/,message:"输入6-16位数字或字母，不可输入特殊字符",trigger:"blur"}],newPassword:[{required:!0,validator:t,trigger:"blur"}]}}},methods:{show:function(){this.dialogleVisible=!0},savePassword:function(){var e=this;this.$refs["ruleForm"].validate((function(t){if(!t)return!1;e.loading=!0,e.$API.updateUserPass({oldPass:e.form.oldPassword,newPass:e.form.newPass}).then((function(){e.loading=!1,e.$alert("已修改密码，请重新登录","提示",{confirmButtonText:"确定",showClose:!1,closeOnClickModal:!1,closeOnPressEscape:!1,center:!0}).then((function(){b["a"].doLogout()}))})).catch((function(){e.loading=!1}))}))},closePop:function(){this.dialogleVisible=!1,this.$emit("close")}}},w=h,v=(a("464c"),a("2877")),_=Object(v["a"])(w,f,g,!1,null,null,null),P=_.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"user-info-plane-dialog inline-block"},[a("div",{staticClass:"inline-block",on:{click:e.show}},[e._t("default")],2),e.dialogleVisible?a("el-dialog",{staticClass:"page-dialog-wrapper",attrs:{title:"",width:"400px",visible:e.dialogleVisible,"append-to-body":""},on:{"update:visible":function(t){e.dialogleVisible=t},close:e.closePop}},[a("div",{staticClass:"user-info-plane"},[a("div",{staticClass:"user-image-wrapper"},[a("div",{staticClass:"user-image-inner"},[a("img",{attrs:{src:e.userHeadImage}}),e.showEdit?a("div",{staticClass:"user-image-upload"},[a("el-tooltip",{staticClass:"item",attrs:{effect:"dark",content:"点击头像更换 (只支持jpg、png格式且大小不超过200kb的图片)"}},[a("el-upload",{staticClass:"user-image-upload-input",attrs:{action:"/","before-upload":e.beforeUploadUserHeadImage,accept:"image/gif, image/jpeg, image/png, image/bmp","show-file-list":!1}},[a("i",{staticClass:"el-icon-upload"})])],1)],1):e._e()])]),a("el-form",{attrs:{"label-width":"100px"}},[a("el-form-item",{attrs:{label:"昵称："}},[e.editName?a("div",{staticClass:"edit-name-wrapper"},[a("div",{staticClass:"edit-name-input"},[a("el-input",{model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),a("el-button",{attrs:{size:"mini",icon:"el-icon-close",circle:""},on:{click:function(t){return e.showEditName(!1)}}}),a("el-button",{attrs:{type:"success",size:"mini",icon:"el-icon-check",circle:""},on:{click:e.saveNickName}})],1):a("div",[a("span",{staticClass:"inline-block marginR20"},[e._v(e._s(e.userData.name))]),e.showEdit?a("el-button",{attrs:{size:"mini",icon:"el-icon-edit",circle:""},on:{click:function(t){return e.showEditName(!0)}}}):e._e()],1)]),a("el-form-item",{attrs:{label:"用户名："}},[a("div",[e._v(e._s(e.userData.username))])]),a("el-form-item",{attrs:{label:"邮箱："}},[a("div",[e._v(e._s(e.userData.email))])]),a("el-form-item",{attrs:{label:"注册时间："}},[a("div",[e._v(e._s(e.$moment(e.userData.created).format("YYYY-MM-DD hh:mm:ss")))])])],1)],1)]):e._e()],1)},k=[],D={components:(i={},Object(m["a"])(i,p["Form"].name,p["Form"]),Object(m["a"])(i,p["FormItem"].name,p["FormItem"]),Object(m["a"])(i,p["Dialog"].name,p["Dialog"]),Object(m["a"])(i,p["Button"].name,p["Button"]),Object(m["a"])(i,p["Input"].name,p["Input"]),Object(m["a"])(i,p["Upload"].name,p["Upload"]),Object(m["a"])(i,p["Tooltip"].name,p["Tooltip"]),i),props:{userData:{type:Object,default:function(){return{}}},showEdit:{type:Boolean,default:!1}},data:function(){return{loading:!1,dialogleVisible:!1,editName:!1,name:"",userHeadImage:a("685e")}},created:function(){this.userHeadImage=this.userData.avatar||this.userHeadImage,this.name=this.userData.name},methods:{show:function(){this.dialogleVisible=!0},saveAvatar:function(e){var t=this,a=new FormData;a.append("file",e),this.$API.updateUserAvatar(a).then((function(e){t.$store.commit("UPDATE_USER_INFO",e.body)}))},closePop:function(){this.dialogleVisible=!1,this.$emit("close")},showEditName:function(e){this.name=this.userData.name,this.editName=!!e},saveNickName:function(){var e=this;this.$API.updateNickName({name:this.name}).then((function(t){e.$store.commit("UPDATE_USER_INFO",t.body),e.showEditName(!1)}))},beforeUploadUserHeadImage:function(e){if(!(e.size>204800))return this.saveAvatar(e),!1;this.$message.error("上传图片不能超过200kb！")}},watch:{userData:function(e){this.userHeadImage=e.avatar||this.userHeadImage,this.name=e.name}}},I=D,O=(a("ad85"),Object(v["a"])(I,C,k,!1,null,"9f20557a",null)),j=O.exports,$={name:"user-head-btn",components:(o={},Object(m["a"])(o,p["Button"].name,p["Button"]),Object(m["a"])(o,p["Dropdown"].name,p["Dropdown"]),Object(m["a"])(o,p["DropdownMenu"].name,p["DropdownMenu"]),Object(m["a"])(o,p["DropdownItem"].name,p["DropdownItem"]),Object(m["a"])(o,"resetPassword",P),Object(m["a"])(o,"userInfo",j),o),data:function(){return{userHeadImage:a("685e")}},computed:{isLogined:function(){return this.$store.state.user.access_token},userData:function(){return this.$store.state.user.userInfo||{}}},methods:{doLogout:function(){b["a"].doLogout()},goLogin:function(){b["a"].goLogin()}}},E=$,y=(a("4355"),Object(v["a"])(E,u,d,!1,null,"8cf9416a",null)),H=y.exports,x={props:{fullWidth:Boolean},components:{userHeadBtn:H},methods:{goHome:function(){this.$store.state.user.access_token,this.$router.push({name:"Home"})}}},N=x,F=(a("5e1f"),Object(v["a"])(N,l,c,!1,null,"9a4f68bc",null)),U=F.exports,V={components:{PageHeader:U}},B=V,A=(a("0e19"),Object(v["a"])(B,n,r,!1,null,"7001321c",null));t["default"]=A.exports},"7f7f":function(e,t,a){var s=a("86cc").f,i=Function.prototype,o=/^\s*function ([^ (]*)/,n="name";n in i||a("9e1e")&&s(i,n,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(e){return""}}})},"8a71":function(e,t,a){},ad85:function(e,t,a){"use strict";a("f32a")},f32a:function(e,t,a){}}]);
//# sourceMappingURL=chunk-17259d41.bf0da481.js.map