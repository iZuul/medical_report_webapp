(function(e){function t(t){for(var a,i,s=t[0],c=t[1],u=t[2],l=0,d=[];l<s.length;l++)i=s[l],Object.prototype.hasOwnProperty.call(o,i)&&o[i]&&d.push(o[i][0]),o[i]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(e[a]=c[a]);p&&p(t);while(d.length)d.shift()();return r.push.apply(r,u||[]),n()}function n(){for(var e,t=0;t<r.length;t++){for(var n=r[t],a=!0,i=1;i<n.length;i++){var s=n[i];0!==o[s]&&(a=!1)}a&&(r.splice(t--,1),e=c(c.s=n[0]))}return e}var a={},i={app:0},o={app:0},r=[];function s(e){return c.p+"js/"+({}[e]||e)+"."+{"chunk-03908de2":"dc5513cb","chunk-9528f846":"9af3d2e8","chunk-11381d74":"ed2868f6","chunk-2d0d63f1":"1c293668","chunk-708e1a58":"9196ff69","chunk-9e656564":"0348e4e6","chunk-e71b52fa":"dd593094"}[e]+".js"}function c(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.e=function(e){var t=[],n={"chunk-9528f846":1,"chunk-11381d74":1,"chunk-708e1a58":1,"chunk-9e656564":1,"chunk-e71b52fa":1};i[e]?t.push(i[e]):0!==i[e]&&n[e]&&t.push(i[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-03908de2":"31d6cfe0","chunk-9528f846":"ac8a92cd","chunk-11381d74":"d13ed0d4","chunk-2d0d63f1":"31d6cfe0","chunk-708e1a58":"89c571ca","chunk-9e656564":"35b28877","chunk-e71b52fa":"8d3b77ea"}[e]+".css",o=c.p+a,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var u=r[s],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var d=document.getElementsByTagName("style");for(s=0;s<d.length;s++){u=d[s],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var p=document.createElement("link");p.rel="stylesheet",p.type="text/css",p.onload=t,p.onerror=function(t){var a=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=a,delete i[e],p.parentNode.removeChild(p),n(r)},p.href=o;var f=document.getElementsByTagName("head")[0];f.appendChild(p)})).then((function(){i[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var r=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=r);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,c.nc&&l.setAttribute("nonce",c.nc),l.src=s(e);var d=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(p);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),i=t&&t.target&&t.target.src;d.message="Loading chunk "+e+" failed.\n("+a+": "+i+")",d.name="ChunkLoadError",d.type=a,d.request=i,n[1](d)}o[e]=void 0}};var p=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},c.m=e,c.c=a,c.d=function(e,t,n){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)c.d(n,a,function(t){return e[t]}.bind(null,a));return n},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="/",c.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var d=0;d<u.length;d++)t(u[d]);var p=l;r.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},4617:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("7db0"),n("4160"),n("a630"),n("d81d"),n("26e9"),n("fb6a"),n("b64b"),n("3ca3"),n("159b"),n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-app",[n("router-view")],1)},o=[],r={name:"App",components:{},created:function(){}},s=r,c=n("2877"),u=n("6544"),l=n.n(u),d=n("7496"),p=Object(c["a"])(s,i,o,!1,null,null,null),f=p.exports;l()(p,{VApp:d["a"]});n("d3b7");var m=n("8c4f"),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-content",[n("v-container",{attrs:{fluid:""}},[n("v-row",[n("v-col",{attrs:{cols:"12"}},[n("v-row",{staticClass:"center-page",attrs:{align:"center",justify:"center"}},[n("v-card",{attrs:{tile:""}},[n("v-card-title",{staticClass:"div-center"},[e._v("Login")]),n("v-form",{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[n("v-text-field",{staticClass:"px-10",attrs:{type:"email",label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),n("v-text-field",{staticClass:"px-10",attrs:{"append-icon":e.password_show?"mdi-eye":"mdi-eye-off",rules:[e.rules.required,e.rules.min],type:e.password_show?"text":"password",name:"katasandi",label:"Katasandi",hint:"Minimal 6 karakter",counter:""},on:{"click:append":function(t){e.password_show=!e.password_show},keyup:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.onSignIn(t)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),n("v-row",{attrs:{justify:"center",align:"center"}},[n("v-col",{staticClass:"text-center px-10",attrs:{cols:"12"}},[n("v-btn",{attrs:{rounded:"",block:"",color:"primary"},on:{click:e.onSignIn}},[e._v("Masuk")])],1)],1)],1)],1)],1)],1)],1)],1)],1)},g=[],b=(n("a4d3"),n("4de4"),n("e439"),n("dbb4"),n("2fa7")),v=n("2f62");function k(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?k(n,!0).forEach((function(t){Object(b["a"])(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):k(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var _={name:"login",data:function(){return{valid:"",email:"",password:"",password_show:!1,rules:{required:function(e){return!!e||"Perlu diisi."},min:function(e){return e.length>=6||"Minimal 6 karakter"},emailMatch:function(){return"The email and password you entered don't match"}}}},computed:y({},Object(v["b"])("users",{getUser:"getUser"}),{user:function(){return this.getUser}}),watch:{user:function(e){null!==e&&void 0!==e&&this.$router.push("/dashboard")}},methods:{onSignIn:function(){this.$store.dispatch("users/signInUser",{email:this.email,password:this.password})}}},w=_,P=(n("d6db"),n("8336")),I=n("b0af"),O=n("99d9"),j=n("62ad"),S=n("a523"),D=n("a75b"),E=n("4bd4"),x=n("0fd9"),L=n("8654"),A=Object(c["a"])(w,h,g,!1,null,null,null),C=A.exports;l()(A,{VBtn:P["a"],VCard:I["a"],VCardTitle:O["d"],VCol:j["a"],VContainer:S["a"],VContent:D["a"],VForm:E["a"],VRow:x["a"],VTextField:L["a"]});var R=n("bfa9"),T=(n("a78e"),n("59ca")),U={apiKey:"AIzaSyAXYxmw48d8cBMdocZOqQjfGozFYFpxxpw",authDomain:"medical-report-webapp.firebaseapp.com",databaseURL:"https://medical-report-webapp.firebaseio.com",projectId:"medical-report-webapp",storageBucket:"medical-report-webapp.appspot.com",messagingSenderId:"297279313896",appId:"1:297279313896:web:a393efa80c97b53082f65d",measurementId:"G-RV7H3TJ56J"},B=U,M=(n("e71f"),n("ea7b"),{apiKey:B.apiKey,authDomain:B.authDomain,databaseURL:B.databaseURL,projectId:B.projectId,storageBucket:B.storageBucket,messagingSenderId:B.messagingSenderId,appId:B.appId,measurementId:B.measurementId}),V=T["initializeApp"](M),N=V.auth(),q=V.firestore(),W={user:null,isLogin:!1,userState:null},z={getIsLogin:function(e){return e.isLogin},getUser:function(e){if(e.isLogin)return e.user}},F={setIsLogin:function(e,t){e.isLogin=t},setUser:function(e,t){e.user=t}},J={signUpUser:function(e,t){var n=e.commit;N.createUserWithEmailAndPassword(t.email,t.password).then((function(e){var a={id:e.user.uid,username:t.email,email:t.email};n("setUser",a)})).catch((function(e){console.log(e)}))},signInUser:function(e,t){var n=e.commit;N.signInWithEmailAndPassword(t.email,t.password).then((function(e){var t={id:e.user.uid,username:e.user.displayName||e.user.email,email:e.user.email};console.log(t),console.log(e),n("setUser",t),n("setIsLogin","signIn"==e.operationType)})).catch((function(e){console.log(e)}))},signOut:function(e,t){var n=e.commit;n("setUser",null),n("setIsLogin",t.isLogin),localStorage.clear()},editUser:function(e,t){var n=e.commit,a=N.currentUser;console.log(a),null!=a&&a.updateProfile({id:t.id,displayName:t.username,email:t.email}).then((function(){n("setUser",t)})).catch((function(e){console.log(e)}))}},K={namespaced:!0,state:W,getters:z,mutations:F,actions:J};n("c740"),n("a434"),n("0d03"),n("b0c0"),n("a15b");function $(e){var t=new Date(e),n=("0"+(t.getMonth()+1)).slice(-2),a=("0"+t.getDate()).slice(-2);return[t.getFullYear(),n,a].join("-")}function H(e){var t=new Date(e),n=t.getHours()+":"+t.getMinutes()+":"+t.getSeconds();return n}var Y={pasients_selected:[],pasients:[],pasientByID:{},total_pasients:null},G={pasients:function(e){var t=e.pasients.filter((function(e){return void 0!==e.name}));if(t)return e.pasients},getTotalPasients:function(e){return e.total_pasients},getPasientByID:function(e){return e.pasientByID}},Q={addPasient:function(e,t){e.pasients.push({name:t.name,address:t.address,latest_checkup:t.latest_checkup})},updatePasient:function(e,t){e.pasients.find((function(e){e.id==t.id_pasient&&(e.name=t.name,e.age=t.age,e.address=t.address)}))},deletePasient:function(e,t){e.pasients.splice(t,1)},deletePasientsSelected:function(e,t){for(var n=0;n<t.length;n++){var a=e.pasients.findIndex(t.id_selects[n]);e.pasients.splice(a,1)}},setListPasients:function(e,t){e.pasients=t},setTotalPasients:function(e,t){e.total_pasients=t},setPasientByID:function(e,t){e.pasientByID=t}},X={retrievePasients:function(e,t){var n=[];q.collection("pasients").where("dibuat_oleh","==",t).orderBy("tanggal_periksa_terakhir","desc").get().then((function(t){t.forEach((function(e){if(void 0!==e){var t={id:e.id,name:e.data().nama,age:e.data().umur,address:e.data().alamat,latest_checkup:$(new Date(1e3*e.data().tanggal_periksa_terakhir.seconds)),latest_checkup_time:H(1e3*e.data().tanggal_periksa_terakhir.seconds)};n.push(t)}})),e.commit("setListPasients",n),console.log(n)})).catch((function(e){console.log("error : ",e)}))},retrievePasientByID:function(e,t){q.collection("pasients").doc(t).get().then((function(t){var n={name:t.data().nama,age:t.data().umur,address:t.data().alamat,latest_checkup:$(new Date(1e3*t.data().tanggal_periksa_terakhir.seconds))};console.log(t.data()),e.commit("setPasientByID",n)})).catch((function(e){console.log(e)}))},retrieveTotalPasients:function(e,t){q.collection("pasients").where("dibuat_oleh","==",t).get().then((function(t){console.log(t.size),e.commit("setTotalPasients",t.size)})).catch((function(e){console.log(e)}))},addPasient:function(e,t){var n=JSON.parse(localStorage.getItem("store")),a={nama:t.name,umur:t.age,alamat:t.address,tanggal_periksa_terakhir:new Date,tangga_buat:new Date,dibuat_oleh:n.users.user.email};q.collection("pasients").add(a).then((function(t){e.commit("addPasient",{id:t.id,data:a})})).catch((function(e){console.log("error :",e)}))},updatePasient:function(e,t){q.collection("pasients").doc(t.id_pasient).update({nama:t.name,umur:t.age,alamat:t.address}).then((function(n){e.commit("updatePasient",t)})).catch((function(e){console.log(e)}))},deletePasient:function(e,t){q.collection("pasients").doc(t.id_pasient).delete().then((function(){e.commit("deletePasient",t.index)})).catch((function(e){console.log("error :",e)}))},deleteSelected:function(e,t){if(t.length&&t.length>0)for(var n=0;n<t.length;n++)q.collection("pasients").doc(t.id_selects[n]).delete().then((function(){e.commit("deletePasientsSelected",t)})).catch((function(e){console.log(e)}))}},Z={namespaced:!0,state:Y,getters:G,mutations:Q,actions:X},ee={recap:[],recaps_pasient:[],pasient_id:"",recaps_by_id:{}},te={getRecapsPasient:function(e){return e.recaps_pasient},getPasientId:function(e){return e.pasient_id}},ne={addRecap:function(e,t){e.recaps_pasient.push({diagnosa:t.recap.diagnosa,therapy:t.recap.therapy})},setRecapsPasient:function(e,t){e.recaps_pasient=t},setPasientId:function(e,t){e.pasient_id=t},updateRecap:function(e,t){e.recaps_pasient.find((function(e){e.id==t.id_recap&&(e.diagnosa=t.diagnosa,e.therapy=t.therapy)}))},deleteRecap:function(e,t){e.recaps_pasient.splice(t,1)}},ae={retrieveRecapsPasient:function(e,t){q.collection("pasients").doc(t).collection("data_medis").orderBy("tanggal_periksa","desc").get().then((function(n){var a=[];n.forEach((function(e){var n={id:e.id,diagnosa:e.data().diagnosa,date_checkup:$(new Date(1e3*e.data().tanggal_periksa.seconds)),time_checkup:H(1e3*e.data().tanggal_periksa.seconds),therapy:e.data().terapi};a.push(n),console.log(n),q.collection("pasients").doc(t).update({latest_checkup:$(new Date(1e3*e.data().tanggal_periksa.seconds)),latest_checkup_time:H(1e3*e.data().tanggal_periksa.seconds)})})),e.commit("setRecapsPasient",a)})).catch((function(e){console.log(e)}))},addRecap:function(e,t){var n=t.id_pasient,a={tanggal_periksa:new Date,diagnosa:t.recap.diagnosa,terapi:t.recap.therapy};console.log(n),console.log(a),q.collection("pasients").doc(n).collection("data_medis").add(a).then((function(t){e.commit("addRecap",{id:t.id,data:a})})).catch((function(e){return[console.log("error : ",e)]}))},updateRecap:function(e,t){q.collection("pasients").doc(t.id_pasient).collection("data_medis").doc(t.id_recap).update({diagnosa:t.diagnosa,terapi:t.therapy}).then((function(n){e.commit("updateRecap",t)})).catch((function(e){console.log(e)}))},deleteRecap:function(e,t){q.collection("pasients").doc(t.id_pasient).collection("data_medis").doc(t.id_recap).delete().then((function(){e.commit("deleteRecap",t.index)})).catch((function(e){console.log("error :",e)}))},emptyCacheRecaps:function(e){e.commit("setRecapsPasient",[])}},ie={namespaced:!0,state:ee,getters:te,mutations:ne,actions:ae};a["a"].use(v["a"]);var oe=new R["a"]({key:"store",storage:window.localStorage,modules:["users"]}),re=new v["a"].Store({state:{},mutations:{},actions:{},modules:{pasients:Z,users:K,recaps:ie},plugins:[oe.plugin],strict:!1});a["a"].use(m["a"]);var se=function(e,t,n){try{0==re.getters["users/getIsLogin"]?n("/"):n()}catch(a){console.log(a)}},ce=function(e,t,n){try{!0===re.state.users.isLogin?(n({name:"dashboard"}),console.log("terautentikasi")):(n(),console.log("tidak terautnetikasi"))}catch(a){console.log(a)}},ue=[{path:"*",component:function(){return n.e("chunk-03908de2").then(n.bind(null,"9703"))}},{path:"/",name:"base",redirect:{name:"login"}},{path:"/login",name:"login",component:C,meta:{title:"Login - Medical WebApp"},beforeEnter:ce},{path:"/dashboard",name:"dashboard",beforeEnter:se,component:function(){return Promise.all([n.e("chunk-9528f846"),n.e("chunk-2d0d63f1")]).then(n.bind(null,"7277"))},meta:{title:"Dashboard - Medical WebApp"}},{path:"/profile-settings",name:"profile-settings",beforeEnter:se,component:function(){return Promise.all([n.e("chunk-9528f846"),n.e("chunk-11381d74")]).then(n.bind(null,"e7d7"))},meta:{title:"Pengaturan - Medical WebApp"}},{path:"/pasients",name:"pasients",beforeEnter:se,component:function(){return Promise.all([n.e("chunk-9528f846"),n.e("chunk-708e1a58"),n.e("chunk-e71b52fa")]).then(n.bind(null,"77eb"))},meta:{title:"Pasien - Medical WebApp"}},{path:"/pasients/detail-pasient/:id",name:"detail-pasients",pros:!0,beforeEnter:se,component:function(){return Promise.all([n.e("chunk-9528f846"),n.e("chunk-708e1a58"),n.e("chunk-9e656564")]).then(n.bind(null,"d831"))},meta:{title:"Detail Pasien - Medical WebApp"}}],le=new m["a"]({mode:"history",base:"/",routes:ue}),de=le,pe=(n("5363"),n("f309"));a["a"].use(pe["a"]);var fe=new pe["a"]({icons:{iconfont:"mdi"}});a["a"].config.productionTip=!1,de.beforeEach((function(e,t,n){var a=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.title})),i=e.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));t.matched.slice().reverse().find((function(e){return e.meta&&e.meta.metaTags}));if(a&&(document.title=a.meta.title),Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map((function(e){return e.parentNode.removeChild(e)})),!i)return n();i.meta.metaTags.map((function(e){var t=document.createElement("meta");return Object.keys(e).forEach((function(n){t.setAttribute(n,e[n])})),t.setAttribute("data-vue-router-controlled",""),t})).forEach((function(e){return document.head.appendChild(e)})),n()})),new a["a"]({router:de,store:re,vuetify:fe,render:function(e){return e(f)}}).$mount("#app")},d6db:function(e,t,n){"use strict";var a=n("4617"),i=n.n(a);i.a}});
//# sourceMappingURL=app.8c158608.js.map