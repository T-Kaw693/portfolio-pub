(function(){"use strict";var e={6283:function(e,t,o){var s=o(144),a=function(){var e=this,t=e._self._c;return t("div",{attrs:{id:"app"}},[t("nav"),t("router-view")],1)},n=[],r={},i=r,l=o(1001),c=(0,l.Z)(i,a,n,!1,null,null,null),u=c.exports,d=o(154);s.ZP.use(d.Z);var m=new d.Z({icons:{iconfont:"mdi"}}),h=o(8345),p=o(3726),f=o(3625),g=o(9396),v=o(3381),b=o(5255),y=o(7024),Z=o(1819),_=o(9088),k=o(3102),w=o(7894),x=o(2515),C=o(3845),S=function(){var e=this,t=e._self._c;return t(p.Z,{attrs:{id:"inspire"}},[t("AppSidebar"),t(f.Z,{attrs:{app:"","shrink-on-scroll":""}},[t(C.qW,[e._v("ルーム一覧")]),t("CreateRoom"),t(x.Z),t(v.Z,{attrs:{icon:""}},[t(_.Z,[e._v("mdi-dots-vertical")])],1)],1),t(k.Z,[t(Z.Z,[t(w.Z,e._l(e.rooms,(function(o){return t(y.Z,{key:o.id,attrs:{cols:"4"}},[t(g.Z,{staticClass:"mb-4",attrs:{color:"grey darken-1",size:"64"}},[o.thumbnailUrl?e._e():t("img",{attrs:{src:"https://cdn.vuetifyjs.com/images/john.jpg",alt:"John"}}),o.thumbnailUrl?t("img",{attrs:{src:o.thumbnailUrl,alt:"John"}}):e._e()]),t(b.EB,{staticClass:"center"},[e._v(" "+e._s(o.name)+" ")]),t(b.h7,{staticClass:"no-flex"},[t(v.Z,{attrs:{text:"",color:"primary",to:{path:"chat",query:{room_id:o.id}}}},[e._v("Enter Room")]),t(v.Z,{attrs:{text:"",color:"error"},on:{click:function(t){return e.deleteRoom(o.id)}}},[e._v("Delete Room")])],1)],1)})),1)],1)],1)],1)},A=[],I=o(7690),R=o(7970),E=o(1667),U=o(6090),O=o(3560),N=o(8320),j=o(5439),L=function(){var e=this,t=e._self._c;return t(N.Z,{attrs:{app:""},model:{value:e.drawer,callback:function(t){e.drawer=t},expression:"drawer"}},[t(j.Z,{staticClass:"pa-4",attrs:{color:"grey lighten-4"}},[t(g.Z,{attrs:{color:"indigo"}},[t("input",{ref:"fileInput",staticStyle:{display:"none"},attrs:{type:"file",accept:"image/jpeg, image/jpg, image/png"},on:{change:e.updateIcon}}),e.photoUrl?e._e():t(_.Z,{attrs:{dark:""},on:{click:e.changeIcon}},[e._v(" mdi-account-circle ")]),e.photoUrl?t("img",{attrs:{src:e.photoUrl,alt:""},on:{click:e.changeIcon}}):e._e()],1),t("div",{staticClass:"username"},[e._v(e._s(e.auth&&e.auth.displayName))])],1),t(I.Z),t(R.Z,[e._l(e.links,(function([o,s,a]){return t(E.Z,{key:o,attrs:{to:a,link:""}},[t(O.Z,[t(_.Z,[e._v(e._s(o))])],1),t(U.km,[t(U.V9,[e._v(e._s(s))])],1)],1)})),t(E.Z,{on:{click:e.logout}},[t(O.Z,[t(_.Z,{attrs:{color:"blue"}},[e._v(" mdi-logout ")])],1),t(U.km,[t(U.V9,[e._v("ログアウト")])],1)],1)],2)],1)},P=[],q=(o(7658),o(4866));o(9418),o(2394),o(8542);const T={apiKey:"AIzaSyAFhs9AxtveoMEOGAFEYm3VokDcHV8WuzA",authDomain:"vue-chat-456fb.firebaseapp.com",projectId:"vue-chat-456fb",storageBucket:"vue-chat-456fb.appspot.com",messagingSenderId:"118397559340",appId:"1:118397559340:web:3e4cef9e5cfa2a6ab16789"};q.Z.initializeApp(T);var M=q.Z,$={mounted(){this.auth=JSON.parse(sessionStorage.getItem("user")),this.photoUrl=this.auth.photoURL},data:()=>({drawer:null,links:[["mdi-inbox-arrow-down","メイン","/"],["mdi-send","アバウト","/about"]],auth:null,photoUrl:""}),methods:{logout(){M.auth().signOut().then((()=>{localStorage.message="ログアウトに成功しました",this.$router.push("/login")})).catch((e=>{console.log(e)}))},changeIcon(){this.$refs.fileInput.click()},updateIcon(){console.log("updateicon call");const e=this.getAuth();e||(sessionStorage.removeItem("user"),this.$router.push("/login"));const t=this.$refs.fileInput.files[0],o=`user/${t.name}`;console.log(t),M.storage().ref().child(o).put(t).then((async e=>{console.log("snapshot",e);const t=await e.ref.getDownloadURL();console.log("photoUrl",t),M.auth().onAuthStateChanged((e=>{e&&(e.updateProfile({photoURL:t}),this.auth.photoURL=t,sessionStorage.setItem("user",JSON.stringify(this.auth)),this.photoUrl=t)}))}))},getAuth(){return M.auth().onAuthStateChanged((e=>e))}}},B=$,V=(0,l.Z)(B,L,P,!1,null,null,null),D=V.exports,F=o(3816),J=o(7178),z=o(3143),W=o(2070),K=function(){var e=this,t=e._self._c;return t(w.Z,{attrs:{justify:"center"}},[t(J.Z,{attrs:{persistent:"","max-width":"600px"},scopedSlots:e._u([{key:"activator",fn:function({on:o,attrs:s}){return[t(v.Z,e._g(e._b({attrs:{color:"primary",dark:""}},"v-btn",s,!1),o),[e._v(" Create Room ")])]}}]),model:{value:e.dialog,callback:function(t){e.dialog=t},expression:"dialog"}},[t(F.Z,[t(b.EB,[t("span",{staticClass:"text-h5"},[e._v("New Room")])]),t(b.ZB,[t(Z.Z,[t(w.Z,[t(y.Z,{attrs:{cols:"12"}},[t(W.Z,{attrs:{label:"Room Name*",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}})],1),t(y.Z,{attrs:{cols:"12"}},[t(z.Z,{attrs:{"truncate-length":"15",accept:"image/*"},model:{value:e.file,callback:function(t){e.file=t},expression:"file"}})],1)],1)],1),t("small",[e._v("*indicates required field")])],1),t(b.h7,[t(x.Z),t(v.Z,{attrs:{color:"blue darken-1",text:""},on:{click:function(t){e.dialog=!1}}},[e._v(" Close ")]),t(v.Z,{attrs:{color:"blue darken-1",text:""},on:{click:e.onSubmit}},[e._v(" Save ")])],1)],1)],1)],1)},H=[],Q={data(){return{rooms:[]}},methods:{async getRooms(){this.rooms=[];const e=M.firestore().collection("rooms"),t=await e.get();t.docs.map((e=>{const t={...e.data()};t.id=e.id,this.rooms.push(t)}))}}},G={mixins:[Q],data:()=>({dialog:!1,name:"",file:null,rooms:[]}),methods:{async onSubmit(){console.log("onSubmit calls",this.name,this.file);let e="";if(this.file){const t=`room/${this.file.name}`;await M.storage().ref().child(t).put(this.file).then((async t=>{e=await t.ref.getDownloadURL(),console.log("thumbnailUrl",e)}))}const t=M.firestore().collection("rooms");await t.add({name:this.name,thumbnailUrl:e,createAt:M.firestore.Timestamp.now()}).then((e=>{console.log("success to create room",e),this.dialog=!1;const t=e.id;this.$router.push(`/chat?room_id=${t}`)}))}}},Y=G,X=(0,l.Z)(Y,K,H,!1,null,null,null),ee=X.exports,te={mixins:[Q],components:{AppSidebar:D,CreateRoom:ee},data:()=>({rooms:[]}),mounted(){this.getRooms()},methods:{async deleteRoom(e){const t=window.confirm("本当に削除しますか？");if(t){const t=M.firestore().collection("rooms").doc(e);await t.delete(),this.rooms=this.rooms.filter((t=>t.id!==e))}}}},oe=te,se=(0,l.Z)(oe,S,A,!1,null,null,null),ae=se.exports,ne=o(1584),re=o(8208),ie=o(2912),le=o(2379),ce=function(){var e=this,t=e._self._c;return t(p.Z,{attrs:{id:"inspire"}},[t("AppSidebar"),t(k.Z,[t(Z.Z,{staticClass:"py-8 px-6",attrs:{fluid:""}},[t("h1",[e._v(e._s(e.room?e.room.name:""))]),t(w.Z,e._l(e.cards,(function(o){return t(y.Z,{key:o,attrs:{cols:"12"}},[t(F.Z,[t(ie.Z,[e._v(e._s(o))]),t(R.Z,{attrs:{"two-line":""}},[0===e.messages.length?[t(E.Z,[e._v("メッセージを始めよう！")])]:e._l(e.messages,(function(o,s){return[t(E.Z,{key:s},[t(re.Z,{attrs:{color:"grey darken-1"}},[t(ne.Z,{attrs:{src:o.photoURL}})],1),t(U.km,{staticClass:"rel"},[t(U.oZ,{staticClass:"message"},[t("span",[e._v(e._s(new Date(o.createdAt.toDate()).toLocaleString()))]),t("br"),t("span",{staticClass:"message__txt"},[e._v(e._s(o.message))])]),t(v.Z,{staticClass:"abs-i",attrs:{icon:""},on:{click:function(t){return e.deleteMessage(o.id)}}},[t(_.Z,[e._v("mdi-delete")])],1)],1)],1),6!==s?t(I.Z,{key:`divider-${s}`,attrs:{inset:""}}):e._e()]}))],2)],1)],1)})),1)],1),t(le.Z,{staticClass:"mx-2",attrs:{"append-icon":"mdi-comment",label:"メッセージを送信する",rows:"3","auto-grow":""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:t.shiftKey?e.submit.apply(null,arguments):null}},model:{value:e.body,callback:function(t){e.body=t},expression:"body"}}),t(v.Z,{staticClass:"me-4",attrs:{type:"submit",disabled:e.invalid},on:{click:e.submit}},[e._v(" submit ")]),t(v.Z,{on:{click:e.clear}},[e._v(" clear ")])],1)],1)},ue=[],de={async created(){this.roomId=this.$route.query.room_id,console.log("roomId",this.roomId);const e=M.firestore().collection("rooms").doc(this.roomId),t=await e.get();t.exists||await this.$router.push("/"),this.room=t.data(),console.log("room",this.room)},mounted(){this.auth=JSON.parse(sessionStorage.getItem("user")),console.log(this.auth);const e=M.firestore().collection("rooms").doc(this.roomId);e.collection("messages").orderBy("createdAt","asc").onSnapshot((e=>{e.docChanges().forEach((e=>{const t=e.doc.data();t.id=e.doc.id,console.log("new message",t),this.messages.push(t)}))}))},data:()=>({messages:[],body:"",roomId:"",room:null,cards:["Today"],drawer:null,links:[["mdi-inbox-arrow-down","Inbox"],["mdi-send","Send"],["mdi-delete","Trash"],["mdi-alert-octagon","Spam"]],auth:null}),computed:{invalid(){return console.log("invalid call"),!this.body}},methods:{clear(){console.log("clear call"),this.body=""},submit(){const e=M.firestore().collection("rooms").doc(this.roomId);e.collection("messages").add({message:this.body,name:this.auth.displayName,photoURL:this.auth.photoURL,createdAt:M.firestore.Timestamp.now()}).then((e=>{console.log("success",e),this.body=""})).catch((e=>{console.log("fail",e),alert("メッセージの送信に失敗")}))},deleteMessage(e){const t=M.firestore().collection("rooms").doc(this.roomId);t.collection("messages").doc(e).delete().then((()=>{console.log("Message deleted successfully"),this.messages=this.messages.filter((t=>t.id!==e))})).catch((e=>{console.log("Failed to delete message",e),alert("メッセージの削除に失敗")}))}},components:{AppSidebar:D}},me=de,he=(0,l.Z)(me,ce,ue,!1,null,null,null),pe=he.exports,fe=o(9759),ge=o(3240),ve=function(){var e=this,t=e._self._c;return t(p.Z,[t("div",{staticClass:"loginbox"},[t(F.Z,{staticClass:"loginform"},[t(b.EB,{staticClass:"logintitle"},[e._v("Login")]),t(b.Qq,[e._v("ユーザー情報をご入力ください")]),t(v.Z,{attrs:{text:"",color:"light-blue",to:"signup"}},[e._v("新規登録はこちら")]),t(ge.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(W.Z,{attrs:{rules:e.emailRules,label:"E-mail",required:""},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(W.Z,{attrs:{type:"password",label:"password"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.submit.apply(null,arguments)}},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t(v.Z,{staticClass:"loginbtn",attrs:{color:"success",disabled:e.isValid},on:{click:e.submit}},[e._v(" login ")]),t(v.Z,[e._v(" clear ")]),e.message?t(fe.Z,{staticClass:"successmessage",attrs:{dense:"",text:"",type:"success"}},[e._v(" "+e._s(e.message)+" ")]):e._e(),e.errorMessage?t(fe.Z,{staticClass:"errormessage",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e()],1)],1)],1)])},be=[],ye={data:()=>({valid:!1,firstname:"",lastname:"",nameRules:[e=>!!e||"Name is requred.",e=>e?.length<=10||"Name must be less than 10 characters."],email:"",emailRules:[e=>!!e||"メールアドレスを入力",e=>!!/.+@.+\..+/.test(e)||"不正な値です。"],password:"",message:"",errorMessage:""}),mounted(){localStorage.message&&(this.message=localStorage.message,localStorage.message="")},computed:{isValid(){return console.log("isValid",this.valid),!this.valid}},methods:{submit(){console.log("submit call"),M.auth().signInWithEmailAndPassword(this.email,this.password).then((e=>{console.log("success"),console.log("user",e.user);const t={displayName:e.user.displayName,email:e.user.email,uid:e.user.uid,refreshToken:e.user.refreshToken,photoURL:e.user.photoURL};sessionStorage.setItem("user",JSON.stringify(t)),this.$router.push("/")})).catch((e=>{console.log("fail",e),this.errorMessage="ログインに失敗しました"}))}}},Ze=ye,_e=(0,l.Z)(Ze,ve,be,!1,null,null,null),ke=_e.exports,we=function(){var e=this,t=e._self._c;return t(p.Z,[t("div",{staticClass:"loginbox"},[t(F.Z,{staticClass:"loginform"},[t(b.EB,{staticClass:"logintitle"},[e._v("Signup")]),t(b.Qq,[e._v("ユーザー情報をご入力ください")]),t(v.Z,{attrs:{text:"",color:"light-blue",to:"login"}},[e._v("ログイン画面ははこちら")]),t(ge.Z,{ref:"form",attrs:{"lazy-validation":""},model:{value:e.valid,callback:function(t){e.valid=t},expression:"valid"}},[t(W.Z,{attrs:{rules:e.nameRules,label:"Username",required:""},model:{value:e.name,callback:function(t){e.name=t},expression:"name"}}),t(W.Z,{attrs:{rules:e.emailRules,label:"E-mail",required:""},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}),t(W.Z,{attrs:{type:"password",label:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}}),t(v.Z,{staticClass:"loginbtn",attrs:{color:"success",disabled:e.isValid},on:{click:e.submit}},[e._v(" Signup ")]),t(v.Z,[e._v(" clear ")]),e.errorMessage?t(fe.Z,{staticClass:"errormessage",attrs:{dense:"",outlined:"",type:"error"}},[e._v(" "+e._s(e.errorMessage)+" ")]):e._e()],1)],1)],1)])},xe=[],Ce={data:()=>({valid:!1,name:"",nameRules:[e=>!!e||"名前を入力してください",e=>e?.length<=10||"名前は１０文字以内で入力してください"],email:"",emailRules:[e=>!!e||"メールアドレスを入力",e=>!!/.+@.+\..+/.test(e)||"不正"],password:"",errorMassage:""}),computed:{isValid(){return console.log("isValid",this.valid),!this.valid}},methods:{submit(){console.log("submit call"),M.auth().createUserWithEmailAndPassword(this.email,this.password).then((async e=>{console.log("success",e),await e.user.updateProfile({displayName:this.name}),console.log("updateuser",e.user),localStorage.message="新規作成に成功しました",this.$router.push("/login")})).catch((e=>{console.log("fail",e),this.errorMessage="ユーザーの新規登録に失敗しました"}))}}},Se=Ce,Ae=(0,l.Z)(Se,we,xe,!1,null,null,null),Ie=Ae.exports;s.ZP.use(h.ZP);const Re=[{path:"/",name:"RoomList",component:ae,meta:{requiresAuth:!0}},{path:"/about",name:"about",component:()=>o.e(443).then(o.bind(o,3187))},{path:"/chat",name:"ChatBoard",component:pe},{path:"/login",name:"UserLogin",component:ke},{path:"/signup",name:"UserSignup",component:Ie}],Ee=new h.ZP({mode:"history",base:"/portofoio-pub/",routes:Re});Ee.beforeEach(((e,t,o)=>{const s=e.matched.some((e=>e.meta.requiresAuth));if(s){const t=sessionStorage.getItem("user");console.log(JSON.parse(t)),t?o():o({path:"/login",query:{redirect:e.fullPath}})}else o()}));var Ue=Ee;s.ZP.config.productionTip=!1,new s.ZP({vuetify:m,router:Ue,render:e=>e(u)}).$mount("#app")}},t={};function o(s){var a=t[s];if(void 0!==a)return a.exports;var n=t[s]={exports:{}};return e[s](n,n.exports,o),n.exports}o.m=e,function(){var e=[];o.O=function(t,s,a,n){if(!s){var r=1/0;for(u=0;u<e.length;u++){s=e[u][0],a=e[u][1],n=e[u][2];for(var i=!0,l=0;l<s.length;l++)(!1&n||r>=n)&&Object.keys(o.O).every((function(e){return o.O[e](s[l])}))?s.splice(l--,1):(i=!1,n<r&&(r=n));if(i){e.splice(u--,1);var c=a();void 0!==c&&(t=c)}}return t}n=n||0;for(var u=e.length;u>0&&e[u-1][2]>n;u--)e[u]=e[u-1];e[u]=[s,a,n]}}(),function(){o.d=function(e,t){for(var s in t)o.o(t,s)&&!o.o(e,s)&&Object.defineProperty(e,s,{enumerable:!0,get:t[s]})}}(),function(){o.f={},o.e=function(e){return Promise.all(Object.keys(o.f).reduce((function(t,s){return o.f[s](e,t),t}),[]))}}(),function(){o.u=function(e){return"js/about.4063c33f.js"}}(),function(){o.miniCssF=function(e){return"css/about.86ba620d.css"}}(),function(){o.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){var e={},t="vue-chat:";o.l=function(s,a,n,r){if(e[s])e[s].push(a);else{var i,l;if(void 0!==n)for(var c=document.getElementsByTagName("script"),u=0;u<c.length;u++){var d=c[u];if(d.getAttribute("src")==s||d.getAttribute("data-webpack")==t+n){i=d;break}}i||(l=!0,i=document.createElement("script"),i.charset="utf-8",i.timeout=120,o.nc&&i.setAttribute("nonce",o.nc),i.setAttribute("data-webpack",t+n),i.src=s),e[s]=[a];var m=function(t,o){i.onerror=i.onload=null,clearTimeout(h);var a=e[s];if(delete e[s],i.parentNode&&i.parentNode.removeChild(i),a&&a.forEach((function(e){return e(o)})),t)return t(o)},h=setTimeout(m.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=m.bind(null,i.onerror),i.onload=m.bind(null,i.onload),l&&document.head.appendChild(i)}}}(),function(){o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){o.p="/portofoio-pub/"}(),function(){if("undefined"!==typeof document){var e=function(e,t,o,s,a){var n=document.createElement("link");n.rel="stylesheet",n.type="text/css";var r=function(o){if(n.onerror=n.onload=null,"load"===o.type)s();else{var r=o&&("load"===o.type?"missing":o.type),i=o&&o.target&&o.target.href||t,l=new Error("Loading CSS chunk "+e+" failed.\n("+i+")");l.code="CSS_CHUNK_LOAD_FAILED",l.type=r,l.request=i,n.parentNode&&n.parentNode.removeChild(n),a(l)}};return n.onerror=n.onload=r,n.href=t,o?o.parentNode.insertBefore(n,o.nextSibling):document.head.appendChild(n),n},t=function(e,t){for(var o=document.getElementsByTagName("link"),s=0;s<o.length;s++){var a=o[s],n=a.getAttribute("data-href")||a.getAttribute("href");if("stylesheet"===a.rel&&(n===e||n===t))return a}var r=document.getElementsByTagName("style");for(s=0;s<r.length;s++){a=r[s],n=a.getAttribute("data-href");if(n===e||n===t)return a}},s=function(s){return new Promise((function(a,n){var r=o.miniCssF(s),i=o.p+r;if(t(r,i))return a();e(s,i,null,a,n)}))},a={143:0};o.f.miniCss=function(e,t){var o={443:1};a[e]?t.push(a[e]):0!==a[e]&&o[e]&&t.push(a[e]=s(e).then((function(){a[e]=0}),(function(t){throw delete a[e],t})))}}}(),function(){var e={143:0};o.f.j=function(t,s){var a=o.o(e,t)?e[t]:void 0;if(0!==a)if(a)s.push(a[2]);else{var n=new Promise((function(o,s){a=e[t]=[o,s]}));s.push(a[2]=n);var r=o.p+o.u(t),i=new Error,l=function(s){if(o.o(e,t)&&(a=e[t],0!==a&&(e[t]=void 0),a)){var n=s&&("load"===s.type?"missing":s.type),r=s&&s.target&&s.target.src;i.message="Loading chunk "+t+" failed.\n("+n+": "+r+")",i.name="ChunkLoadError",i.type=n,i.request=r,a[1](i)}};o.l(r,l,"chunk-"+t,t)}},o.O.j=function(t){return 0===e[t]};var t=function(t,s){var a,n,r=s[0],i=s[1],l=s[2],c=0;if(r.some((function(t){return 0!==e[t]}))){for(a in i)o.o(i,a)&&(o.m[a]=i[a]);if(l)var u=l(o)}for(t&&t(s);c<r.length;c++)n=r[c],o.o(e,n)&&e[n]&&e[n][0](),e[n]=0;return o.O(u)},s=self["webpackChunkvue_chat"]=self["webpackChunkvue_chat"]||[];s.forEach(t.bind(null,0)),s.push=t.bind(null,s.push.bind(s))}();var s=o.O(void 0,[998],(function(){return o(6283)}));s=o.O(s)})();
//# sourceMappingURL=app.fe137e81.js.map