(function(t){function e(e){for(var i,l,n=e[0],r=e[1],c=e[2],m=0,u=[];m<n.length;m++)l=n[m],Object.prototype.hasOwnProperty.call(s,l)&&s[l]&&u.push(s[l][0]),s[l]=0;for(i in r)Object.prototype.hasOwnProperty.call(r,i)&&(t[i]=r[i]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),a()}function a(){for(var t,e=0;e<o.length;e++){for(var a=o[e],i=!0,n=1;n<a.length;n++){var r=a[n];0!==s[r]&&(i=!1)}i&&(o.splice(e--,1),t=l(l.s=a[0]))}return t}var i={},s={app:0},o=[];function l(e){if(i[e])return i[e].exports;var a=i[e]={i:e,l:!1,exports:{}};return t[e].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=t,l.c=i,l.d=function(t,e,a){l.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:a})},l.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},l.t=function(t,e){if(1&e&&(t=l(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)l.d(a,i,function(e){return t[e]}.bind(null,i));return a},l.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return l.d(e,"a",e),e},l.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},l.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],r=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=r;o.push([0,"chunk-vendors"]),a()})({0:function(t,e,a){t.exports=a("56d7")},"0efd":function(t,e,a){"use strict";var i=a("cd1f"),s=a.n(i);s.a},"4ba2":function(t,e,a){},5436:function(t,e,a){"use strict";var i=a("738c"),s=a.n(i);s.a},"56d7":function(t,e,a){"use strict";a.r(e);a("e623"),a("e379"),a("5dc8"),a("37e1");var i=a("2b0e"),s=a("8c4f"),o=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("router-view")},l=[],n={},r=n,c=a("2877"),d=Object(c["a"])(r,o,l,!1,null,null,null),m=d.exports,u=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"wrapper",class:{"nav-open":t.$sidebar.showSidebar}},[a("notifications"),a("side-bar",{attrs:{"sidebar-item-color":t.sidebarBackground,"sidebar-background-image":t.sidebarBackgroundImage}},[a("mobile-menu",{attrs:{slot:"content"},slot:"content"}),a("sidebar-link",{attrs:{to:"/team"}},[a("md-icon",[t._v("people")]),a("p",[t._v("Team Managment")])],1),a("sidebar-link",{attrs:{to:"/employee"}},[a("md-icon",[t._v("person")]),a("p",[t._v("Employee Managment")])],1)],1),a("div",{staticClass:"main-panel"},[a("top-navbar"),a("fixed-plugin",{attrs:{color:t.sidebarBackground,image:t.sidebarBackgroundImage},on:{"update:color":function(e){t.sidebarBackground=e},"update:image":function(e){t.sidebarBackgroundImage=e}}}),a("dashboard-content"),t.$route.meta.hideFooter?t._e():a("content-footer")],1)],1)},p=[],f=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("md-toolbar",{staticClass:"md-transparent",attrs:{"md-elevation":"0"}},[a("div",{staticClass:"md-toolbar-row"},[a("div",{staticClass:"md-toolbar-section-start"},[a("h3",{staticClass:"md-title"},[t._v(t._s(t.$route.name))])]),a("div",{staticClass:"md-toolbar-section-end"},[a("md-button",{staticClass:"md-just-icon md-simple md-toolbar-toggle",class:{toggled:t.$sidebar.showSidebar},on:{click:t.toggleSidebar}},[a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"}),a("span",{staticClass:"icon-bar"})]),a("div",{staticClass:"md-collapse"},[a("div",{staticClass:"md-autocomplete"},[a("md-autocomplete",{staticClass:"search",attrs:{"md-options":t.employees},model:{value:t.selectedEmployee,callback:function(e){t.selectedEmployee=e},expression:"selectedEmployee"}},[a("label",[t._v("Search...")])])],1),a("md-list",[a("md-list-item",{attrs:{href:"#/"}},[a("i",{staticClass:"material-icons"},[t._v("dashboard")]),a("p",{staticClass:"hidden-lg hidden-md"},[t._v("Dashboard")])]),a("li",{staticClass:"md-list-item"},[a("a",{staticClass:"md-list-item-router md-list-item-container md-button-clean dropdown",attrs:{href:"#/notifications"}},[a("div",{staticClass:"md-list-item-content"},[a("drop-down",[a("md-button",{staticClass:"md-button md-just-icon md-simple",attrs:{slot:"title","data-toggle":"dropdown"},slot:"title"},[a("md-icon",[t._v("notifications")]),a("span",{staticClass:"notification"},[t._v("5")]),a("p",{staticClass:"hidden-lg hidden-md"},[t._v("Notifications")])],1),a("ul",{staticClass:"dropdown-menu dropdown-menu-right"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Mike John responded to your email")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("You have 5 new tasks")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("You're now friend with Andrew")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Another Notification")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Another One")])])])],1)],1)])]),a("md-list-item",{attrs:{href:"#/user"}},[a("i",{staticClass:"material-icons"},[t._v("person")]),a("p",{staticClass:"hidden-lg hidden-md"},[t._v("Profile")])])],1)],1)],1)])])},v=[],h={data:function(){return{selectedEmployee:null,employees:["Jim Halpert","Dwight Schrute","Michael Scott","Pam Beesly","Angela Martin","Kelly Kapoor","Ryan Howard","Kevin Malone"]}},methods:{toggleSidebar:function(){this.$sidebar.displaySidebar(!this.$sidebar.showSidebar)}}},b=h,g=Object(c["a"])(b,f,v,!1,null,null,null),y=g.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},C=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("footer",{staticClass:"footer"},[a("div",{staticClass:"container"},[a("nav",[a("ul",[a("li",[a("a",{attrs:{href:"http://blog.creative-tim.com"}},[t._v(" Blog ")])]),a("li",[a("a",{attrs:{href:"https://www.creative-tim.com/license"}},[t._v(" Licenses ")])])])])])])}],w={},k=w,x=Object(c["a"])(k,_,C,!1,null,null,null),j=x.exports,z=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("transition",{attrs:{name:"fade",mode:"out-in"}},[a("router-view")],1)},D=[],S={},$=S,E=(a("5436"),Object(c["a"])($,z,D,!1,null,null,null)),N=E.exports,O=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ul",{staticClass:"nav nav-mobile-menu"},[a("li",[a("md-field",[a("label",[t._v("Search")]),a("md-input",{attrs:{type:"text"},model:{value:t.search,callback:function(e){t.search=e},expression:"search"}})],1)],1),t._m(0),a("li",[a("drop-down",[a("a",{staticClass:"dropdown-toggle",attrs:{slot:"title","data-toggle":"dropdown"},slot:"title"},[a("i",{staticClass:"material-icons"},[t._v("notifications")]),a("span",{staticClass:"notification"},[t._v("5")]),a("p",[t._v("Notifications")])]),a("ul",{staticClass:"dropdown-menu dropdown-menu-right"},[a("li",[a("a",{attrs:{href:"#"}},[t._v("Mike John responded to your email")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("You have 5 new tasks")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("You're now friend with Andrew")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Another Notification")])]),a("li",[a("a",{attrs:{href:"#"}},[t._v("Another One")])])])])],1),t._m(1)])},A=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"material-icons"},[t._v("dashboard")]),a("p",[t._v("Dashboard")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",[a("a",{staticClass:"dropdown-toggle",attrs:{href:"#","data-toggle":"dropdown"}},[a("i",{staticClass:"material-icons"},[t._v("person")]),a("p",[t._v("Profile")])])])}],I={data:function(){return{search:null,selectedEmployee:null,employees:["Jim Halpert","Dwight Schrute","Michael Scott","Pam Beesly","Angela Martin","Kelly Kapoor","Ryan Howard","Kevin Malone"]}}},T=I,B=Object(c["a"])(T,O,A,!1,null,null,null),M=B.exports,V=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],staticClass:"fixed-plugin"},[a("div",{staticClass:"dropdown show-dropdown",class:{show:t.isOpen}},[a("a",{attrs:{"data-toggle":"dropdown"}},[a("i",{staticClass:"fa fa-cog fa-2x",on:{click:t.toggleDropDown}})]),a("ul",{staticClass:"dropdown-menu",class:{show:t.isOpen}},[a("li",{staticClass:"header-title"},[t._v("Sidebar Filters")]),a("li",{staticClass:"adjustments-line text-center"},t._l(t.sidebarColors,(function(e){return a("span",{key:e.color,staticClass:"badge filter",class:["badge-"+e.color,{active:e.active}],attrs:{"data-color":e.color},on:{click:function(a){return t.changeSidebarBackground(e)}}})})),0),a("li",{staticClass:"header-title"},[t._v("Images")]),t._l(t.sidebarImages,(function(e){return a("li",{key:e.image,class:{active:e.active},on:{click:function(a){return t.changeSidebarImage(e)}}},[a("a",{staticClass:"img-holder switch-trigger"},[a("img",{attrs:{src:e.image,alt:""}})])])})),a("li",{staticClass:"button-container"},[a("div",{},[a("md-button",{staticClass:"md-success md-block",attrs:{href:t.freeUrl,target:"_blank"}},[t._v("Free Download")])],1)]),a("li",{staticClass:"button-container"},[a("div",{},[a("md-button",{staticClass:"md-block md-primary",attrs:{href:t.documentationLink,target:"_blank"}},[t._v("Documentation")])],1)]),a("li",{staticClass:"header-title d-flex justify-content-center"},[t._v(" Thank you for sharing! ")]),a("li",{staticClass:"button-container"},[a("social-sharing",{attrs:{url:t.shareUrl,title:"Vue Material Dashboard - Admin Template for Vue.js",hashtags:"vuejs, dashboard, vuematerial","twitter-user":"creativetim"},inlineTemplate:{render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"centered-buttons"},[a("network",{staticClass:"md-button md-round md-just-icon md-facebook",attrs:{network:"facebook"}},[a("i",{staticClass:"fab fa-facebook-f"})]),a("network",{staticClass:"md-button md-round md-just-icon md-twitter",attrs:{network:"twitter"}},[a("i",{staticClass:"fab fa-twitter"})])],1)},staticRenderFns:[]}})],1),a("li",{staticClass:"github-buttons"},[a("gh-btns-star",{attrs:{slug:"creativetimofficial/vue-material-dashboard","show-count":""}})],1)],2)])])},P=[],L=(a("4160"),a("159b"),a("5299")),H=a.n(L),U=a("f676");a("3a06");i["default"].use(H.a),i["default"].use(U["a"],{useCache:!0});var F={data:function(){return{documentationLink:"https://creativetimofficial.github.io/vue-material-dashboard/documentation",shareUrl:"https://www.creative-tim.com/product/vue-material-dashboard",buyUrl:"",freeUrl:"https://www.creative-tim.com/product/vue-material-dashboard",isOpen:!1,sidebarColors:[{color:"purple",active:!1},{color:"blue",active:!1},{color:"green",active:!0},{color:"orange",active:!1},{color:"red",active:!1}],sidebarImages:[{image:a("7d6d"),active:!1},{image:a("9524"),active:!0},{image:a("aeef"),active:!1},{image:a("eb9e"),active:!1}]}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1},toggleList:function(t,e){t.forEach((function(t){t.active=!1})),e.active=!0},updateValue:function(t,e){console.log(t),this.$emit("update:".concat(t),e)},changeSidebarBackground:function(t){this.$emit("update:color",t.color),this.toggleList(this.sidebarColors,t)},changeSidebarImage:function(t){this.$emit("update:image",t.image),this.toggleList(this.sidebarImages,t)}}},J=F,K=(a("dac3"),a("269a")),Y=a.n(K),R=a("a293"),Z=Object(c["a"])(J,V,P,!1,null,null,null),W=Z.exports;Y()(Z,{ClickOutside:R["a"]});var q={components:{TopNavbar:y,DashboardContent:N,ContentFooter:j,MobileMenu:M,FixedPlugin:W},data:function(){return{sidebarBackground:"green",sidebarBackgroundImage:a("9524")}}},G=q,Q=Object(c["a"])(G,u,p,!1,null,null,null),X=Q.exports,tt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",[a("md-card",{staticClass:"md-card-profile"},[a("div",{staticClass:"md-card-avatar"},[a("img",{staticClass:"img",attrs:{src:t.cardUserImage}})]),a("md-card-content",[a("h6",{staticClass:"category text-gray"},[t._v("CEO / Co-Founder")]),a("h4",{staticClass:"card-title"},[t._v("Alec Thompson")]),a("p",{staticClass:"card-description"},[t._v(" Don't be scared of the truth because we need to restart the human foundation in truth And I love you like Kanye loves Kanye I love Rick Owens’ bed design but the back is... ")]),a("md-button",{staticClass:"md-round md-success",attrs:{to:"/employeeLogin"}},[t._v("Login Employee")])],1)],1)],1)},et=[],at={name:"user-card",props:{cardUserImage:{type:String,default:a("a180")}},data:function(){return{}}},it=at,st=a("6544"),ot=a.n(st),lt=a("a523"),nt=Object(c["a"])(it,tt,et,!1,null,null,null),rt=nt.exports;ot()(nt,{VContainer:lt["a"]});var ct=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("div",{staticClass:"content"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"},[a("v-row",[a("v-col",{attrs:{lg:"12"}},[a("h3",[t._v("Team Dashboard")]),a("v-btn",{staticClass:"success",attrs:{href:"/team/add"}},[t._v("Add item")])],1)],1),a("v-row",[a("v-col",{attrs:{lg:"12"}},[a("md-card",[a("md-card-header",{attrs:{"data-background-color":"green"}},[a("h4",{staticClass:"title"},[t._v("All Teams ")]),a("p",{staticClass:"category"},[t._v("Here is all teams of our company")])]),a("md-card-content",[a("md-table",{attrs:{"table-header-color":t.tableHeaderColor},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var i=e.item;return a("md-table-row",{},[a("md-table-cell",{attrs:{"md-label":"Team Name"}},[t._v(t._s(i.name))]),a("md-table-cell",{attrs:{"md-label":"Manager Name"}},[t._v(t._s(i.manager))]),a("md-table-cell",{attrs:{"md-label":"Deatils"}},[a("v-btn",{staticClass:"primary",attrs:{href:"/team/detail/"+i._id}},[t._v(" More details ")])],1)],1)}}]),model:{value:t.users,callback:function(e){t.users=e},expression:"users"}})],1)],1)],1)],1)],1)])])])],1)},dt=[],mt=a("bc3a"),ut=a.n(mt),pt=a("e22e"),ft=a.n(pt),vt={mounted:function(){var t=this;ut.a.get(ft.a.url+"/team/viewAll").then((function(e){console.log(e),t.users=e.data.data}))["catch"]((function(t){console.log(t)}))},data:function(){return{users:""}}},ht=vt,bt=a("7496"),gt=a("8336"),yt=a("62ad"),_t=a("0fd9b"),Ct=Object(c["a"])(ht,ct,dt,!1,null,null,null),wt=Ct.exports;ot()(Ct,{VApp:bt["a"],VBtn:gt["a"],VCol:yt["a"],VContainer:lt["a"],VRow:_t["a"]});var kt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("form",[a("md-card",[a("md-card-header",{attrs:{"data-background-color":t.dataBackgroundColor}},[a("h4",{staticClass:"title"},[t._v("Update Team")]),a("p",{staticClass:"category"},[t._v("Enter Team Updates here")])]),a("md-card-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Team Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Manager Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.manager,callback:function(e){t.manager=e},expression:"manager"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Project Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.project,callback:function(e){t.project=e},expression:"project"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},t._l(t.employees,(function(e,i){return a("v-col",{key:i},[a("v-select",{attrs:{items:t.items,"item-text":"firstName","item-value":"_id",attach:"",chips:"",label:"Select Employee",multiple:"",outlined:""},model:{value:e.employee,callback:function(a){t.$set(e,"employee",a)},expression:"employee.employee"}})],1)})),1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},[a("md-button",{staticStyle:{cursor:"pointer"},on:{click:t.submit}},[t._v("Upload Details")])],1)])]),a("md-card",[a("md-card-header",{staticClass:"red"},[a("h4",{staticClass:"title"},[t._v("Delete Team")]),a("p",{staticClass:"category"},[t._v("Danger Zone")])]),a("md-card-content",[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},[a("md-button",{staticClass:"red",on:{click:t.deleteTeam}},[t._v("Delete Team")])],1)])],1)],1)],1)])],1)},xt=[],jt=(a("b0c0"),{mounted:function(){var t=this,e=this.$route.params.teamId;ut.a.get(ft.a.url+"/team/view/"+e).then((function(e){t.manager=e.data.data[0].manager,t.name=e.data.data[0].name,t.employees=e.data.data[0].employee,t.project=e.data.data[0].project}))["catch"]((function(t){console.log(t)})),ut.a.get(ft.a.url+"/employee/viewAll").then((function(e){console.log(e.data.data),t.items=e.data.data}))["catch"]((function(t){console.log(t)}))},name:"edit-profile-form",props:{dataBackgroundColor:{type:String,default:""}},data:function(){return{manager:"",items:"",teamId:"",name:"",project:"",employees:[{employee:""}]}},methods:{submit:function(){var t=this,e=this.$route.params.teamId;ut.a.put(ft.a.url+"/team/update/"+e,{name:this.name,manager:this.manager,project:this.project,employee:this.employees}).then((function(e){t.$router.push({path:"/team"})}))["catch"]((function(t){console.log(t)}))},deleteTeam:function(){var t=this,e=this.$route.params.teamId;ut.a["delete"](ft.a.url+"/team/delete/"+e).then((function(e){t.$router.push({path:"/team"})}))["catch"]((function(t){console.log(t)}))}}}),zt=jt,Dt=a("b974"),St=Object(c["a"])(zt,kt,xt,!1,null,null,null),$t=St.exports;ot()(St,{VApp:bt["a"],VCol:yt["a"],VContainer:lt["a"],VSelect:Dt["a"]});var Et=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("form",[a("md-card",[a("md-card-header",{attrs:{"data-background-color":t.dataBackgroundColor}},[a("h4",{staticClass:"title"},[t._v("Add New Team")]),a("p",{staticClass:"category"},[t._v("Enter Your New Team Detalis Here")])]),a("md-card-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Team Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Manager Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.manager,callback:function(e){t.manager=e},expression:"manager"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Project Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.project,callback:function(e){t.project=e},expression:"project"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},t._l(t.employees,(function(e,i){return a("v-col",{key:i},[a("v-select",{attrs:{items:t.items,"item-text":"firstName","item-value":"_id",attach:"",chips:"",label:"Select Employee",multiple:"",outlined:""},model:{value:e.employee,callback:function(a){t.$set(e,"employee",a)},expression:"employee.employee"}})],1)})),1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},[a("md-button",{staticStyle:{cursor:"pointer"},on:{click:t.submit}},[t._v("Upload Details")])],1)])])],1)],1)])],1)},Nt=[],Ot={mounted:function(){var t=this;ut.a.get(ft.a.url+"/employee/viewAll").then((function(e){console.log(e.data.data),t.items=e.data.data}))["catch"]((function(t){console.log(t)}))},name:"edit-profile-form",props:{dataBackgroundColor:{type:String,default:""}},data:function(){return{value:"",items:"",manager:"",name:"",project:"",employees:[{employee:""}]}},methods:{submit:function(){var t=this;ut.a.post(ft.a.url+"/team/create",{name:this.name,manager:this.manager,project:this.project,employee:this.employees}).then((function(e){t.$router.push({path:"/team"})}))["catch"]((function(t){console.log(t)}))}}},At=Ot,It=Object(c["a"])(At,Et,Nt,!1,null,null,null),Tt=It.exports;ot()(It,{VApp:bt["a"],VCol:yt["a"],VContainer:lt["a"],VSelect:Dt["a"]});var Bt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("div",{staticClass:"content"},[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-medium-size-100 md-xsmall-size-100 md-size-100"},[a("v-row",[a("v-col",{attrs:{lg:"12"}},[a("h3",[t._v("Employee Dashboard")]),a("v-btn",{staticClass:"success",attrs:{href:"/employee/add"}},[t._v("Add New Employee")])],1)],1),a("v-row",[a("v-col",{attrs:{lg:"12"}},[a("md-card",[a("md-card-header",{attrs:{"data-background-color":"green"}},[a("h4",{staticClass:"title"},[t._v("All Employees")]),a("p",{staticClass:"category"},[t._v("Here is all Employees of our company")])]),a("md-card-content",[a("md-table",{attrs:{"table-header-color":t.tableHeaderColor},scopedSlots:t._u([{key:"md-table-row",fn:function(e){var i=e.item;return a("md-table-row",{},[a("md-table-cell",{attrs:{"md-label":"Emp Name"}},[t._v(t._s(i.firstName))]),a("md-table-cell",{attrs:{"md-label":"Position"}},[t._v(t._s(i.role))]),a("md-table-cell",{attrs:{"md-label":"Mobile No"}},[t._v(t._s(i.mobileNo))]),a("md-table-cell",{attrs:{"md-label":"Deatils"}},[a("v-btn",{staticClass:"primary",attrs:{href:"/employee/detail/"+i._id}},[t._v(" More details ")])],1),a("md-table-cell",{attrs:{"md-label":"Status"}},[i.status?a("v-btn",{staticClass:"primary"},[t._v(" "+t._s(i.status)+" ")]):a("v-btn",{staticClass:"red white--text"},[t._v(" Unavailable ")])],1)],1)}}]),model:{value:t.users,callback:function(e){t.users=e},expression:"users"}})],1)],1)],1)],1)],1)])])])],1)},Mt=[],Vt={mounted:function(){var t=this;ut.a.get(ft.a.url+"/employee/viewall").then((function(e){t.users=e.data.data}))["catch"]((function(t){console.log(t)}))},data:function(){return{users:""}}},Pt=Vt,Lt=Object(c["a"])(Pt,Bt,Mt,!1,null,null,null),Ht=Lt.exports;ot()(Lt,{VApp:bt["a"],VBtn:gt["a"],VCol:yt["a"],VContainer:lt["a"],VRow:_t["a"]});var Ut=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("form",[a("md-card",[a("md-card-header",{attrs:{"data-background-color":t.dataBackgroundColor}},[a("h4",{staticClass:"title"},[t._v("Add New Employee")]),a("p",{staticClass:"category"},[t._v("Enter Your New Employee Details Here")])]),a("md-card-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("First Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.fname,callback:function(e){t.fname=e},expression:"fname"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Last Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.lname,callback:function(e){t.lname=e},expression:"lname"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Position")]),a("md-input",{attrs:{type:"text"},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Join Date")]),a("md-input",{attrs:{type:"date"},model:{value:t.joinDate,callback:function(e){t.joinDate=e},expression:"joinDate"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Mobile No")]),a("md-input",{attrs:{type:"number"},model:{value:t.mobileNo,callback:function(e){t.mobileNo=e},expression:"mobileNo"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Email")]),a("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},[a("md-button",{staticStyle:{cursor:"pointer"},on:{click:t.submit}},[t._v("Upload Details")])],1)])])],1)],1)])],1)},Ft=[],Jt={name:"edit-profile-form",props:{dataBackgroundColor:{type:String,default:""}},data:function(){return{fname:"",lname:"",role:"",joinDate:"",mobileNo:"",email:"",password:""}},methods:{submit:function(){var t=this;ut.a.post(ft.a.url+"/employee/create",{firstName:this.fname,lastName:this.lname,role:this.role,mobileNo:this.mobileNo,joinDate:this.joinDate,email:this.email,password:this.password}).then((function(e){t.$router.push({path:"/employee"})}))["catch"]((function(t){console.log(t)}))}}},Kt=Jt,Yt=Object(c["a"])(Kt,Ut,Ft,!1,null,null,null),Rt=Yt.exports;ot()(Yt,{VApp:bt["a"],VContainer:lt["a"]});var Zt=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("form",[a("md-card",[a("md-card-header",{attrs:{"data-background-color":t.dataBackgroundColor}},[a("h4",{staticClass:"title"},[t._v("Update Employee")]),a("p",{staticClass:"category"},[t._v("Enter Your Employee updates Here")])]),a("md-card-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("First Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.fname,callback:function(e){t.fname=e},expression:"fname"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Last Name")]),a("md-input",{attrs:{type:"text"},model:{value:t.lname,callback:function(e){t.lname=e},expression:"lname"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Position")]),a("md-input",{attrs:{type:"text"},model:{value:t.role,callback:function(e){t.role=e},expression:"role"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Join Date")]),a("md-input",{attrs:{type:"date"},model:{value:t.joinDate,callback:function(e){t.joinDate=e},expression:"joinDate"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Mobile No")]),a("md-input",{attrs:{type:"number"},model:{value:t.mobileNo,callback:function(e){t.mobileNo=e},expression:"mobileNo"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Email")]),a("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-50"},[a("md-field",[a("label",[t._v("Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},[a("md-button",{staticStyle:{cursor:"pointer"},on:{click:t.submit}},[t._v("Update Details")])],1)])]),a("md-card",[a("md-card-header",{staticClass:"red"},[a("h4",{staticClass:"title"},[t._v("Delete Team")]),a("p",{staticClass:"category"},[t._v("Danger Zone")])]),a("md-card-content",[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-100"},[a("md-button",{staticClass:"red",on:{click:t.deleteEmp}},[t._v("Delete Employee")])],1)])],1)],1)],1)])],1)},Wt=[],qt={mounted:function(){var t=this,e=this.$route.params.empId;ut.a.get(ft.a.url+"/employee/view/"+e).then((function(e){t.fname=e.data.data[0].firstName,t.lname=e.data.data[0].lastName,t.role=e.data.data[0].role,t.joinDate=e.data.data[0].joinDate,t.email=e.data.data[0].email,t.password=e.data.data[0].password,t.mobileNo=e.data.data[0].mobileNo}))["catch"]((function(t){console.log(t)}))},name:"edit-profile-form",props:{dataBackgroundColor:{type:String,default:""}},data:function(){return{fname:"",lname:"",role:"",joinDate:"",mobileNo:"",email:"",password:""}},methods:{submit:function(){var t=this,e=this.$route.params.empId;alert("click submit"),ut.a.put(ft.a.url+"/employee/update/"+e,{firstName:this.fname,lastName:this.lname,role:this.role,mobileNo:this.mobileNo,joinDate:this.joinDate,email:this.email,password:this.password}).then((function(e){t.$router.push({path:"/employee"})}))["catch"]((function(t){console.log(t)}))},deleteEmp:function(){var t=this,e=this.$route.params.empId;ut.a["delete"](ft.a.url+"/employee/delete/"+e).then((function(e){t.$router.push({path:"/employee"})}))["catch"]((function(t){console.log(t)}))}}},Gt=qt,Qt=Object(c["a"])(Gt,Zt,Wt,!1,null,null,null),Xt=Qt.exports;ot()(Qt,{VApp:bt["a"],VContainer:lt["a"]});var te=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-app",[a("v-container",[a("form",[a("md-card",[a("md-card-header",{attrs:{"data-background-color":t.dataBackgroundColor}},[a("h4",{staticClass:"title"},[t._v("Welcome Employee")]),a("p",{staticClass:"category"},[t._v("Enter Your Detalis Here")])]),a("md-card-content",[a("div",{staticClass:"md-layout"},[a("div",{staticClass:"md-layout-item md-small-size-100 md-size-33"},[a("md-field",[a("label",[t._v("Email ID")]),a("md-input",{attrs:{type:"email"},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-33"},[a("md-field",[a("label",[t._v("Password")]),a("md-input",{attrs:{type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1)],1),a("div",{staticClass:"md-layout-item md-small-size-100 md-size-33"},[a("md-button",{staticClass:"md-primary",on:{click:t.submit}},[t._v("Login")])],1)])])],1)],1)])],1)},ee=[],ae={name:"edit-profile-form",props:{dataBackgroundColor:{type:String,default:""}},data:function(){return{email:"",password:""}},methods:{submit:function(){var t=this;ut.a.post(ft.a.url+"/employee/login",{email:this.email,password:this.password}).then((function(e){0==e.data.flag?t.$router.push({path:"/employee"}):t.$router.push({path:"/team"})}))["catch"]((function(t){console.log(t)}))}}},ie=ae,se=Object(c["a"])(ie,te,ee,!1,null,null,null),oe=se.exports;ot()(se,{VApp:bt["a"],VContainer:lt["a"]});var le=[{path:"/",component:X,redirect:"/welcome",children:[{path:"/welcome",name:"index",component:rt},{path:"/employeeLogin",name:"Employee Login",component:oe},{path:"/team",name:"Teams",component:wt},{path:"/team/detail/:teamId",name:"Team Details",component:$t},{path:"/team/add",name:"Add Team",component:Tt},,{path:"/employee",name:"All Employees",component:Ht},{path:"/employee/add",name:"Add Employee",component:Rt},{path:"/employee/detail/:empId",name:"Employee Details",component:Xt}]}],ne=le,re=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{directives:[{name:"click-outside",rawName:"v-click-outside",value:t.closeDropDown,expression:"closeDropDown"}],staticClass:"dropdown",class:{open:t.isOpen},on:{click:t.toggleDropDown}},[t._t("title",[a("a",{staticClass:"dropdown-toggle",attrs:{"data-toggle":"dropdown",href:"javascript:void(0)"}},[a("i",{class:t.icon}),a("p",{staticClass:"notification"},[t._v(" "+t._s(t.title)+" "),a("b",{staticClass:"caret"})])])]),t._t("default")],2)},ce=[],de={name:"drop-down",props:{title:String,icon:String},data:function(){return{isOpen:!1}},methods:{toggleDropDown:function(){this.isOpen=!this.isOpen},closeDropDown:function(){this.isOpen=!1}}},me=de,ue=Object(c["a"])(me,re,ce,!1,null,null,null),pe=ue.exports;Y()(ue,{ClickOutside:R["a"]});var fe={install:function(t){t.component("drop-down",pe)}},ve=fe,he=a("c7db"),be={install:function(t){t.directive("click-outside",he["directive"])}},ge=be,ye=(a("c740"),a("277d"),a("a434"),a("0d03"),a("7a82"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"notifications"},[a("transition-group",{attrs:{name:"list"}},t._l(t.notifications,(function(e){return a("notification",{key:e.timestamp.getTime(),attrs:{message:e.message,icon:e.icon,type:e.type,timestamp:e.timestamp,"vertical-align":e.verticalAlign,"horizontal-align":e.horizontalAlign},on:{"on-close":t.removeNotification}})})),1)],1)}),_e=[],Ce=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"alert open alert-with-icon",class:[t.verticalAlign,t.horizontalAlign,t.alertType],style:t.customPosition,attrs:{"data-notify":"container",role:"alert","data-notify-position":"top-center"},on:{click:function(e){return t.close()}}},[a("button",{staticClass:"close",attrs:{type:"button","aria-hidden":"true","data-notify":"dismiss"},on:{click:t.close}},[t._v(" × ")]),a("i",{staticClass:"material-icons",attrs:{"data-notify":"icon"}},[t._v(t._s(t.icon))]),a("span",{attrs:{"data-notify":"message"},domProps:{innerHTML:t._s(t.message)}})])},we=[],ke=(a("4de4"),a("a9e3"),a("4795"),{name:"notification",props:{message:String,icon:String,verticalAlign:{type:String,default:"top"},horizontalAlign:{type:String,default:"center"},type:{type:String,default:"info"},timeout:{type:Number,default:2500},timestamp:{type:Date,default:function(){return new Date}}},data:function(){return{elmHeight:0}},computed:{hasIcon:function(){return this.icon&&this.icon.length>0},alertType:function(){return"alert-".concat(this.type)},customPosition:function(){var t=this,e=20,a=this.elmHeight+10,i=this.$notifications.state.filter((function(e){return e.horizontalAlign===t.horizontalAlign&&e.verticalAlign===t.verticalAlign&&e.timestamp<=t.timestamp})).length,s=(i-1)*a+e,o={};return"top"===this.verticalAlign?o.top="".concat(s,"px"):o.bottom="".concat(s,"px"),o}},methods:{close:function(){this.$emit("on-close",this.timestamp)}},mounted:function(){this.elmHeight=this.$el.clientHeight,this.timeout&&setTimeout(this.close,this.timeout)}}),xe=ke,je=(a("7b35"),Object(c["a"])(xe,Ce,we,!1,null,"3b98be06",null)),ze=je.exports,De={components:{Notification:ze},data:function(){return{notifications:this.$notifications.state}},methods:{removeNotification:function(t){this.$notifications.removeNotification(t)}}},Se=De,$e=(a("6ae5"),Object(c["a"])(Se,ye,_e,!1,null,null,null)),Ee=$e.exports,Ne={state:[],removeNotification:function(t){var e=this.state.findIndex((function(e){return e.timestamp===t}));-1!==e&&this.state.splice(e,1)},addNotification:function(t){t.timestamp=new Date,t.timestamp.setMilliseconds(t.timestamp.getMilliseconds()+this.state.length),this.state.push(t)},notify:function(t){var e=this;Array.isArray(t)?t.forEach((function(t){e.addNotification(t)})):this.addNotification(t)}},Oe={install:function(t){t.mixin({data:function(){return{notificationStore:Ne}},methods:{notify:function(t){this.notificationStore.notify(t)}}}),Object.defineProperty(t.prototype,"$notify",{get:function(){return this.$root.notify}}),Object.defineProperty(t.prototype,"$notifications",{get:function(){return this.$root.notificationStore}}),t.component("Notifications",Ee)}},Ae=Oe,Ie=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"sidebar",style:t.sidebarStyle,attrs:{"data-color":t.sidebarItemColor,"data-image":t.sidebarBackgroundImage}},[a("div",{staticClass:"logo"},[a("a",{staticClass:"simple-text logo-mini",attrs:{href:"#"}},[a("div",{staticClass:"logo-img"},[a("img",{attrs:{src:t.imgLogo,alt:""}})])]),a("a",{staticClass:"simple-text logo-normal",attrs:{href:"https://www.creative-tim.com/product/vue-material-dashboard",target:"_blank"}},[t._v(" "+t._s(t.title)+" ")])]),a("div",{staticClass:"sidebar-wrapper"},[t._t("content"),a("md-list",{staticClass:"nav"},[t._t("default",t._l(t.sidebarLinks,(function(t,e){return a("sidebar-link",{key:t.name+e,attrs:{to:t.path,link:t}})})))],2)],2)])},Te=[],Be=(a("c975"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("li",{staticClass:"md-list-item"},[a("router-link",t._b({staticClass:"md-list-item-router md-list-item-container md-button-clean",on:{click:t.hideSidebar}},"router-link",t.$attrs,!1),[a("div",{staticClass:"md-list-item-content md-ripple"},[t._t("default",[a("md-icon",[t._v(t._s(t.link.icon))]),a("p",[t._v(t._s(t.link.name))])])],2)])],1)}),Me=[],Ve={inject:{autoClose:{default:!0}},props:{link:{type:[String,Object],default:function(){return{name:"",path:"",icon:""}}},tag:{type:String,default:"router-link"}},methods:{hideSidebar:function(){this.autoClose&&this.$sidebar&&!0===this.$sidebar.showSidebar&&this.$sidebar.displaySidebar(!1)}}},Pe=Ve,Le=Object(c["a"])(Pe,Be,Me,!1,null,null,null),He=Le.exports,Ue={components:{SidebarLink:He},props:{title:{type:String,default:"Vue MD"},sidebarBackgroundImage:{type:String,default:a("9524")},imgLogo:{type:String,default:a("fdbce")},sidebarItemColor:{type:String,default:"green",validator:function(t){var e=["","purple","blue","green","orange","red"];return-1!==e.indexOf(t)}},sidebarLinks:{type:Array,default:function(){return[]}},autoClose:{type:Boolean,default:!0}},provide:function(){return{autoClose:this.autoClose}},computed:{sidebarStyle:function(){return{backgroundImage:"url(".concat(this.sidebarBackgroundImage,")")}}}},Fe=Ue,Je=(a("0efd"),Object(c["a"])(Fe,Ie,Te,!1,null,null,null)),Ke=Je.exports,Ye={showSidebar:!1,displaySidebar:function(t){this.showSidebar=t}},Re={install:function(t){t.mixin({data:function(){return{sidebarStore:Ye}}}),Object.defineProperty(t.prototype,"$sidebar",{get:function(){return this.$root.sidebarStore}}),t.component("side-bar",Ke),t.component("sidebar-link",He)}},Ze=Re,We=a("43f9"),qe=a.n(We),Ge=(a("43f4"),a("9e17"),a("54ba"),{install:function(t){t.use(Ze),t.use(qe.a)}}),Qe=a("ba48"),Xe=a.n(Qe),ta=a("f309");i["default"].use(ta["a"]);var ea=new ta["a"]({}),aa=new s["a"]({mode:"history",routes:ne,linkExactActiveClass:"nav-item active"});i["default"].prototype.$Chartist=Xe.a,i["default"].use(s["a"]),i["default"].use(Ge),i["default"].use(ve),i["default"].use(ge),i["default"].use(Ae),new i["default"]({el:"#app",render:function(t){return t(m)},router:aa,vuetify:ea,data:{Chartist:Xe.a}})},"6ae5":function(t,e,a){"use strict";var i=a("b5b2"),s=a.n(i);s.a},"738c":function(t,e,a){},"7b35":function(t,e,a){"use strict";var i=a("4ba2"),s=a.n(i);s.a},"7d6d":function(t,e,a){t.exports=a.p+"img/sidebar-1.23832d31.jpg"},9524:function(t,e,a){t.exports=a.p+"img/sidebar-2.32103624.jpg"},"9e17":function(t,e,a){},a180:function(t,e,a){t.exports=a.p+"img/marc.aba54d65.jpg"},aeef:function(t,e,a){t.exports=a.p+"img/sidebar-3.3a54f533.jpg"},b51f:function(t,e,a){},b5b2:function(t,e,a){},cd1f:function(t,e,a){},dac3:function(t,e,a){"use strict";var i=a("b51f"),s=a.n(i);s.a},e22e:function(t,e){t.exports={url:"http://localhost:5001"}},eb9e:function(t,e,a){t.exports=a.p+"img/sidebar-4.3b7e38ed.jpg"},fdbce:function(t,e,a){t.exports=a.p+"img/vue-logo.c2a605fb.png"}});
//# sourceMappingURL=app.a8e61f57.js.map