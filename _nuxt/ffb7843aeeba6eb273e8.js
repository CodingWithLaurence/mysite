(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{120:function(t,e,n){var r={"./test.js":121};function o(t){var e=a(t);return n(e)}function a(t){var e=r[t];if(!(e+1)){var n=new Error("Cannot find module '"+t+"'");throw n.code="MODULE_NOT_FOUND",n}return e}o.keys=function(){return Object.keys(r)},o.resolve=a,t.exports=o,o.id=120},121:function(t,e,n){"use strict";n.r(e),e.default=function(t){var e=t.route;alert("Page changed"),e.fullPath}},123:function(t,e,n){"use strict";var r=n(37);n.n(r).a},124:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"",""])},135:function(t,e,n){"use strict";var r=n(38);n.n(r).a},136:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\n.nuxt-progress{position:fixed;top:0;left:0;right:0;height:2px;width:0;transition:width .2s,opacity .4s;opacity:1;background-color:#efc14e;z-index:999999\n}",""])},137:function(t,e,n){var r=n(138);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("71c1e385",r,!1,{sourceMap:!1})},138:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"*,body,html{margin:0;padding:0;box-sizing:border-box;text-align:center;font-family:skolar-1,skolar-2,Georgia,Times New Roman,serif}.page-enter-active,.page-leave-active{transition:opacity .5s}.page-enter,.page-leave-to{opacity:0}",""])},139:function(t,e,n){"use strict";var r=n(39);n.n(r).a},140:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\nnav[data-v-2af67281]{display:flex;justify-content:center;align-items:center\n}\nul[data-v-2af67281]{list-style:none;display:inline-flex;padding-top:2%\n}\nli[data-v-2af67281]{margin:10px 15px;font-size:2rem\n}\na[data-v-2af67281]{font-size:2em;padding-right:15px;color:darken(#666,10)\n}\na[data-v-2af67281]:hover{text-decoration:none;cursor:pointer\n}\n.nav-link.nuxt-link-exact-active[data-v-2af67281],a[data-v-2af67281]:hover{border-bottom:2px solid #04a487\n}\nli a[data-v-2af67281]{text-decoration:none\n}",""])},141:function(t,e,n){"use strict";var r=n(40);n.n(r).a},142:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"",""])},143:function(t,e,n){"use strict";var r=n(41);n.n(r).a},144:function(t,e,n){(t.exports=n(17)(!1)).push([t.i,"\nhtml{font-family:Roboto,sans-serif\n}\nh2{font-size:3rem;padding-top:3%;color:#444\n}\nspan{margin-right:8%;color:gold\n}\na{text-decoration:none\n}\n#name{font-size:4rem\n}",""])},163:function(t,e,n){"use strict";n.r(e);n(58),n(48),n(49);var r=n(22),o=n.n(r),a=(n(35),n(52),n(100),n(4)),i=n.n(a),s=(n(69),n(29),n(53),n(70),n(105),n(117),n(0)),u=(n(78),n(120)),c=u.keys();function l(t){var e=u(t);return e.default?e.default:e}var f={},p=!0,h=!1,d=void 0;try{for(var v,m=c[Symbol.iterator]();!(p=(v=m.next()).done);p=!0){var x=v.value;f[x.replace(/^\.\//,"").replace(/\.(mjs|js)$/,"")]=l(x)}}catch(t){h=!0,d=t}finally{try{p||null==m.return||m.return()}finally{if(h)throw d}}var y=f,g=n(23),b=n.n(g),_=n(85),w=n.n(_),k=n(57),C=function(){return n.e(1).then(n.bind(null,186)).then(function(t){return t.default||t})},$=function(){return n.e(2).then(n.bind(null,187)).then(function(t){return t.default||t})},R=function(){return n.e(3).then(n.bind(null,185)).then(function(t){return t.default||t})},E=function(){return n.e(4).then(n.bind(null,184)).then(function(t){return t.default||t})},j=function(){return n.e(5).then(n.bind(null,183)).then(function(t){return t.default||t})},S=function(){return n.e(6).then(n.bind(null,182)).then(function(t){return t.default||t})};s.default.use(k.a),window.history.scrollRestoration="manual";var A=function(t,e,n){var r=!1;return t.matched.length<2?r={x:0,y:0}:t.matched.some(function(t){return t.components.default.options.scrollToTop})&&(r={x:0,y:0}),n&&(r=n),new Promise(function(e){window.$nuxt.$once("triggerScroll",function(){if(t.hash){var n=t.hash;void 0!==window.CSS&&void 0!==window.CSS.escape&&(n="#"+window.CSS.escape(n.substr(1)));try{document.querySelector(n)&&(r={selector:n})}catch(t){console.warn("Failed to save scroll position. Please add CSS.escape() polyfill (https://github.com/mathiasbynens/CSS.escape).")}}e(r)})})};var T=n(86),O=n.n(T).a,q={name:"nuxt-child",functional:!0,props:["keepAlive"],render:function(t,e){var n=e.parent,r=e.data,o=e.props;r.nuxtChild=!0;for(var a=n,i=n.$nuxt.nuxt.transitions,s=n.$nuxt.nuxt.defaultTransition,u=0;n;)n.$vnode&&n.$vnode.data.nuxtChild&&u++,n=n.$parent;r.nuxtChildDepth=u;var c=i[u]||s,l={};N.forEach(function(t){void 0!==c[t]&&(l[t]=c[t])});var f={};P.forEach(function(t){"function"==typeof c[t]&&(f[t]=c[t].bind(a))});var p=f.beforeEnter;f.beforeEnter=function(t){if(window.$nuxt.$nextTick(function(){window.$nuxt.$emit("triggerScroll")}),p)return p.call(a,t)};var h=[t("router-view",r)];return void 0!==o.keepAlive&&(h=[t("keep-alive",h)]),t("transition",{props:l,on:f},h)}},N=["name","mode","appear","css","type","duration","enterClass","leaveClass","appearClass","enterActiveClass","enterActiveClass","leaveActiveClass","appearActiveClass","enterToClass","leaveToClass","appearToClass"],P=["beforeEnter","enter","afterEnter","enterCancelled","beforeLeave","leave","afterLeave","leaveCancelled","beforeAppear","appear","afterAppear","appearCancelled"],L={name:"nuxt-link",functional:!0,render:function(t,e){return t("router-link",e.data,e.children)}},M=function(){var t=this.$createElement;return(this._self._c||t)("h1",[this._v("An error has occured")])};M._withStripped=!0;var D={},U=(n(123),n(7)),I=Object(U.a)(D,M,[],!1,null,null,null);I.options.__file="error.vue";var H=I.exports,z=(n(125),n(126),n(128),n(130),n(131),n(134),function(){return{}});function J(t,e){var n=t.options.data||z;!e&&t.options.hasAsyncData||(t.options.hasAsyncData=!0,t.options.data=function(){var r=n.call(this);return this.$ssrContext&&(e=this.$ssrContext.asyncData[t.cid]),b()({},r,e)},t._Ctor&&t._Ctor.options&&(t._Ctor.options.data=t.options.data))}function K(t){return t.options&&t._Ctor===t?t:(t.options?(t._Ctor=t,t.extendOptions=t.options):(t=s.default.extend(t))._Ctor=t,!t.options.name&&t.options.__file&&(t.options.name=t.options.__file),t)}function Q(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).map(function(r){return e&&e.push(n),t.components[r]})}))}function F(t,e){return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.components).reduce(function(r,o){return t.components[o]?r.push(e(t.components[o],t.instances[o],t,o,n)):delete t.components[o],r},[])}))}function B(t){return Promise.all(F(t,function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return t.abrupt("return",r.components[o]=K(e));case 5:case"end":return t.stop()}},t,this)}));return function(e,n,r,o){return t.apply(this,arguments)}}()))}function V(t){return X.apply(this,arguments)}function X(){return(X=i()(regeneratorRuntime.mark(function t(e){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,B(e);case 2:return t.abrupt("return",b()({},e,{meta:Q(e).map(function(t){return t.options.meta||{}})}));case 3:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function G(t,e){return W.apply(this,arguments)}function W(){return(W=i()(regeneratorRuntime.mark(function t(e,n){return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(n.to?n.to:n.route,e.context||(e.context={isStatic:!0,isDev:!1,isHMR:!1,app:e,payload:n.payload,error:n.error,base:"/",env:{}},n.req&&(e.context.req=n.req),n.res&&(e.context.res=n.res),e.context.redirect=function(t,n,r){if(t){e.context._redirected=!0;var a=o()(n);if("number"==typeof t||"undefined"!==a&&"object"!==a||(r=n||{},n=t,a=o()(n),t=302),"object"===a&&(n=e.router.resolve(n).href),!/(^[.]{1,2}\/)|(^\/(?!\/))/.test(n))throw n=it(n,r),window.location.replace(n),new Error("ERR_REDIRECT");e.context.next({path:n,query:r,status:t})}},e.context.nuxtState=window.__NUXT__),e.context.next=n.next,e.context._redirected=!1,e.context._errored=!1,e.context.isHMR=!!n.isHMR,!n.route){t.next=10;break}return t.next=9,V(n.route);case 9:e.context.route=t.sent;case 10:if(e.context.params=e.context.route.params||{},e.context.query=e.context.route.query||{},!n.from){t.next=16;break}return t.next=15,V(n.from);case 15:e.context.from=t.sent;case 16:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}function Y(t,e){var n;return(n=2===t.length?new Promise(function(n){t(e,function(t,r){t&&e.error(t),n(r=r||{})})}):t(e))&&(n instanceof Promise||"function"==typeof n.then)||(n=Promise.resolve(n)),n}function Z(t,e){var n=window.location.pathname;return"hash"===e?window.location.hash.replace(/^#\//,""):(t&&0===n.indexOf(t)&&(n=n.slice(t.length)),(n||"/")+window.location.search+window.location.hash)}function tt(t,e){return function(t){for(var e=new Array(t.length),n=0;n<t.length;n++)"object"===o()(t[n])&&(e[n]=new RegExp("^(?:"+t[n].pattern+")$"));return function(n,r){for(var o="",a=n||{},i=r||{},s=i.pretty?rt:encodeURIComponent,u=0;u<t.length;u++){var c=t[u];if("string"!=typeof c){var l,f=a[c.name];if(null==f){if(c.optional){c.partial&&(o+=c.prefix);continue}throw new TypeError('Expected "'+c.name+'" to be defined')}if(Array.isArray(f)){if(!c.repeat)throw new TypeError('Expected "'+c.name+'" to not repeat, but received `'+JSON.stringify(f)+"`");if(0===f.length){if(c.optional)continue;throw new TypeError('Expected "'+c.name+'" to not be empty')}for(var p=0;p<f.length;p++){if(l=s(f[p]),!e[u].test(l))throw new TypeError('Expected all "'+c.name+'" to match "'+c.pattern+'", but received `'+JSON.stringify(l)+"`");o+=(0===p?c.prefix:c.delimiter)+l}}else{if(l=c.asterisk?encodeURI(f).replace(/[?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()}):s(f),!e[u].test(l))throw new TypeError('Expected "'+c.name+'" to match "'+c.pattern+'", but received "'+l+'"');o+=c.prefix+l}}else o+=c}return o}}(function(t,e){var n,r=[],o=0,a=0,i="",s=e&&e.delimiter||"/";for(;null!=(n=nt.exec(t));){var u=n[0],c=n[1],l=n.index;if(i+=t.slice(a,l),a=l+u.length,c)i+=c[1];else{var f=t[a],p=n[2],h=n[3],d=n[4],v=n[5],m=n[6],x=n[7];i&&(r.push(i),i="");var y=null!=p&&null!=f&&f!==p,g="+"===m||"*"===m,b="?"===m||"*"===m,_=n[2]||s,w=d||v;r.push({name:h||o++,prefix:p||"",delimiter:_,optional:b,repeat:g,partial:y,asterisk:!!x,pattern:w?at(w):x?".*":"[^"+ot(_)+"]+?"})}}a<t.length&&(i+=t.substr(a));i&&r.push(i);return r}(t,e))}function et(t,e){var n={},r=b()({},t,e);for(var o in r)String(t[o])!==String(e[o])&&(n[o]=!0);return n}window._nuxtReadyCbs=[],window.onNuxtReady=function(t){window._nuxtReadyCbs.push(t)};var nt=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function rt(t){return encodeURI(t).replace(/[\/?#]/g,function(t){return"%"+t.charCodeAt(0).toString(16).toUpperCase()})}function ot(t){return t.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function at(t){return t.replace(/([=!:$\/()])/g,"\\$1")}function it(t,e){var n,r=t.indexOf("://");-1!==r?(n=t.substring(0,r),t=t.substring(r+3)):0===t.indexOf("//")&&(t=t.substring(2));var o,a=t.split("/"),i=(n?n+"://":"//")+a.shift(),s=a.filter(Boolean).join("/");return 2===(a=s.split("#")).length&&(s=a[0],o=a[1]),i+=s?"/"+s:"",e&&"{}"!==JSON.stringify(e)&&(i+=(2===t.split("?").length?"&":"?")+function(t){return Object.keys(t).sort().map(function(e){var n=t[e];return null==n?"":Array.isArray(n)?n.slice().map(function(t){return[e,"=",t].join("")}).join("&"):e+"="+n}).filter(Boolean).join("&")}(e)),i+=o?"#"+o:""}var st={name:"nuxt",props:["nuxtChildKey","keepAlive"],render:function(t){return this.nuxt.err?t("nuxt-error",{props:{error:this.nuxt.err}}):t("nuxt-child",{key:this.routerViewKey,props:this.$props})},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$root.$options.nuxt)},computed:{routerViewKey:function(){if(void 0!==this.nuxtChildKey||this.$route.matched.length>1)return this.nuxtChildKey||tt(this.$route.matched[0].path)(this.$route.params);var t=this.$route.matched[0]&&this.$route.matched[0].components.default;return t&&t.options&&t.options.key?"function"==typeof t.options.key?t.options.key(this.$route):t.options.key:this.$route.path}},components:{NuxtChild:q,NuxtError:H}},ut=function(){var t=this.$createElement;return(this._self._c||t)("div",{staticClass:"nuxt-progress",style:{width:this.percent+"%",height:this.height,"background-color":this.canSuccess?this.color:this.failedColor,opacity:this.show?1:0}})};ut._withStripped=!0;var ct={name:"nuxt-loading",data:function(){return{percent:0,show:!1,canSuccess:!0,throttle:200,duration:5e3,height:"2px",color:"#fff",failedColor:"red"}},methods:{start:function(){var t=this;return this.canSuccess=!0,this._throttle&&clearTimeout(this._throttle),this._timer&&(clearInterval(this._timer),this._timer=null,this.percent=0),this._throttle=setTimeout(function(){t.show=!0,t._cut=1e4/Math.floor(t.duration),t._timer=setInterval(function(){t.increase(t._cut*Math.random()),t.percent>95&&t.finish()},100)},this.throttle),this},set:function(t){return this.show=!0,this.canSuccess=!0,this.percent=Math.floor(t),this},get:function(){return Math.floor(this.percent)},increase:function(t){return this.percent=this.percent+Math.floor(t),this},decrease:function(t){return this.percent=this.percent-Math.floor(t),this},finish:function(){return this.percent=100,this.hide(),this},pause:function(){return clearInterval(this._timer),this},hide:function(){var t=this;return clearInterval(this._timer),this._timer=null,clearTimeout(this._throttle),this._throttle=null,setTimeout(function(){t.show=!1,s.default.nextTick(function(){setTimeout(function(){t.percent=0},200)})},500),this},fail:function(){return this.canSuccess=!1,this}}},lt=(n(135),Object(U.a)(ct,ut,[],!1,null,null,null));lt.options.__file="nuxt-loading.vue";var ft=lt.exports,pt=(n(137),function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("nuxt-link",{attrs:{to:"/"}},[e("h1",[this._v("Laurence "),e("br"),e("span",[this._v("Hall")])])]),this._v(" "),e("Nav")],1)});pt._withStripped=!0;var ht=function(){var t=this.$createElement;this._self._c;return this._m(0)};ht._withStripped=!0;var dt={},vt=(n(139),Object(U.a)(dt,ht,[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{},[e("nav",[e("ul",[e("a",{attrs:{href:"/"}},[this._v("Home")]),this._v(" "),e("a",{attrs:{href:"/skills"}},[this._v("Skills")]),this._v(" "),e("a",{attrs:{href:"/contact"}},[this._v("Contact")])])])])}],!1,null,"2af67281",null));vt.options.__file="Nav.vue";var mt=vt.exports,xt={components:{Nav:mt},layout:"default"},yt=(n(141),Object(U.a)(xt,pt,[],!1,null,null,null));yt.options.__file="blog.vue";var gt=yt.exports,bt=function(){var t=this.$createElement,e=this._self._c||t;return e("v-app",{attrs:{light:""}},[e("nuxt-link",{attrs:{to:"/"}},[e("h1",{attrs:{id:"name"}},[this._v("Laurence"),e("br"),e("span",[this._v("Hall")])])]),this._v(" "),e("Nav"),this._v(" "),e("nuxt")],1)};bt._withStripped=!0;var _t={components:{Nav:mt}},wt=(n(143),Object(U.a)(_t,bt,[],!1,null,null,null));wt.options.__file="default.vue";for(var kt={_blog:gt,_default:wt.exports},Ct={head:{title:"nuxt-testing",meta:[{charset:"utf-8"},{name:"viewport",content:"width=device-width, initial-scale=1"},{hid:"description",name:"description",content:"My cat&#39;s meow Nuxt.js project"}],link:[{rel:"icon",type:"image/x-icon",href:"/favicon.ico"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons"},{rel:"stylesheet",href:"https://fonts.googleapis.com/css?family=Roboto"}],style:[],script:[]},render:function(t,e){var n=t("nuxt-loading",{ref:"loading"}),r=t(this.layout||"nuxt"),o=t("div",{domProps:{id:"__layout"},key:this.layoutName},[r]),a=t("transition",{props:{name:"layout",mode:"out-in"}},[o]);return t("div",{domProps:{id:"__nuxt"}},[n,a])},data:function(){return{layout:null,layoutName:""}},beforeCreate:function(){s.default.util.defineReactive(this,"nuxt",this.$options.nuxt)},created:function(){s.default.prototype.$nuxt=this,"undefined"!=typeof window&&(window.$nuxt=this),this.error=this.nuxt.error},mounted:function(){this.$loading=this.$refs.loading},watch:{"nuxt.err":"errorChanged"},methods:{errorChanged:function(){this.nuxt.err&&this.$loading&&(this.$loading.fail&&this.$loading.fail(),this.$loading.finish&&this.$loading.finish())},setLayout:function(t){return t&&kt["_"+t]||(t="default"),this.layoutName=t,this.layout=kt["_"+t],this.layout},loadLayout:function(t){return t&&kt["_"+t]||(t="default"),Promise.resolve(kt["_"+t])}},components:{NuxtLoading:ft}},$t=n(87),Rt=n.n($t),Et={setHeader:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=!0,o=!1,a=void 0;try{for(var i,s=(Array.isArray(n)?n:[n])[Symbol.iterator]();!(r=(i=s.next()).done);r=!0){var u=i.value;if(!e)return void delete this.defaults.headers[u][t];this.defaults.headers[u][t]=e}}catch(t){o=!0,a=t}finally{try{r||null==s.return||s.return()}finally{if(o)throw a}}},setToken:function(t,e){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"common",r=t?(e?e+" ":"")+t:null;this.setHeader("Authorization",r,n)},onRequest:function(t){this.interceptors.request.use(function(e){return t(e)||e})},onResponse:function(t){this.interceptors.response.use(function(e){return t(e)||e})},onRequestError:function(t){this.interceptors.request.use(void 0,function(e){return t(e)||Promise.reject(e)})},onResponseError:function(t){this.interceptors.response.use(void 0,function(e){return t(e)||Promise.reject(e)})},onError:function(t){this.onRequestError(t),this.onResponseError(t)}},jt=["request","delete","get","head","options","post","put","patch"],St=function(){var t=jt[At];Et["$"+t]=function(){return this[t].apply(this,arguments).then(function(t){return t&&t.data})}},At=0;At<jt.length;At++)St();var Tt=function(t,e){var n={baseURL:"http://localhost:3000/",headers:{common:{Accept:"application/json, text/plain, */*"},delete:{},get:{},head:{},post:{},put:{},patch:{}}};n.headers.common=t.req&&t.req.headers?Object.assign({},t.req.headers):{},delete n.headers.common.accept,delete n.headers.common.host;var r=Rt.a.create(n);!function(t){for(var e in Et)t[e]=Et[e].bind(t)}(r),function(t,e){var n={finish:function(){},start:function(){},fail:function(){},set:function(){}},r=function(){return window.$nuxt&&window.$nuxt.$loading&&window.$nuxt.$loading.set?window.$nuxt.$loading:n},o=0;t.onRequest(function(t){t&&!1===t.progress||o++}),t.onResponse(function(t){t&&t.config&&!1===t.config.progress||--o<=0&&(o=0,r().finish())}),t.onError(function(t){t&&t.config&&!1===t.config.progress||(o--,r().fail(),r().finish())});var a=function(t){if(o){var e=100*t.loaded/(t.total*o);r().set(Math.min(100,e))}};t.defaults.onUploadProgress=a,t.defaults.onDownloadProgress=a}(r),t.$axios=r,e("axios",r)},Ot=n(88),qt=n.n(Ot),Nt=n(16),Pt=n.n(Nt);s.default.use(qt.a,{theme:{primary:"#121212",accent:Pt.a.grey.darken3,secondary:Pt.a.amber.darken3,info:Pt.a.teal.lighten1,warning:Pt.a.amber.base,error:Pt.a.deepOrange.accent4,success:Pt.a.green.accent3}}),s.default.component(O.name,O),s.default.component(q.name,q),s.default.component(L.name,L),s.default.component(st.name,st),s.default.use(w.a,{keyName:"head",attribute:"data-n-head",ssrAttribute:"data-n-head-ssr",tagIDKeyName:"hid"});var Lt={name:"page",mode:"out-in",appear:!1,appearClass:"appear",appearActiveClass:"appear-active",appearToClass:"appear-to"};function Mt(){return(Mt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a,i,u;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,new k.a({mode:"history",base:"/",linkActiveClass:"nuxt-link-active",linkExactActiveClass:"nuxt-link-exact-active",scrollBehavior:A,routes:[{path:"/skills",component:C,name:"skills"},{path:"/posts",component:$,name:"posts"},{path:"/contact",component:R,name:"contact"},{path:"/projects",component:E,name:"projects"},{path:"/posts/:id",component:j,name:"posts-id"},{path:"/",component:S,name:"index"}],fallback:!1});case 2:return n=t.sent,r=b()({router:n,nuxt:{defaultTransition:Lt,transitions:[Lt],setTransitions:function(t){return Array.isArray(t)||(t=[t]),t=t.map(function(t){return t=t?"string"==typeof t?Object.assign({},Lt,{name:t}):Object.assign({},Lt,t):Lt}),this.$options.nuxt.transitions=t,t},err:null,dateErr:null,error:function(t){t=t||null,r.context._errored=!!t,"string"==typeof t&&(t={statusCode:500,message:t});var n=this.nuxt||this.$options.nuxt;return n.dateErr=Date.now(),n.err=t,e&&(e.nuxt.error=t),t}}},Ct),o=e?e.next:function(t){return r.router.push(t)},e?a=n.resolve(e.url).route:(i=Z(n.options.base),a=n.resolve(i).route),t.next=8,G(r,{route:a,next:o,error:r.nuxt.error.bind(r),payload:e?e.payload:void 0,req:e?e.req:void 0,res:e?e.res:void 0,beforeRenderFns:e?e.beforeRenderFns:void 0});case 8:if(u=function(t,e){if(!t)throw new Error("inject(key, value) has no key provided");if(!e)throw new Error("inject(key, value) has no value provided");r[t="$"+t]=e;var n="__nuxt_"+t+"_installed__";s.default[n]||(s.default[n]=!0,s.default.use(function(){s.default.prototype.hasOwnProperty(t)||Object.defineProperty(s.default.prototype,t,{get:function(){return this.$root.$options[t]}})}))},"function"!=typeof Tt){t.next=12;break}return t.next=12,Tt(r.context,u);case 12:t.next=15;break;case 15:t.next=18;break;case 18:return t.abrupt("return",{app:r,router:n});case 19:case"end":return t.stop()}},t,this)}))).apply(this,arguments)}var Dt,Ut,It=[],Ht=window.__NUXT__||{};function zt(t,e,n){var r=function(t){var r=function(t,e){if(!t||!t.options||!t.options[e])return{};var n=t.options[e];if("function"==typeof n){for(var r=arguments.length,o=new Array(r>2?r-2:0),a=2;a<r;a++)o[a-2]=arguments[a];return n.apply(void 0,o)}return n}(t,"transition",e,n)||{};return"string"==typeof r?{name:r}:r};return t.map(function(t){var e=Object.assign({},r(t));if(n&&n.matched.length&&n.matched[0].components.default){var o=r(n.matched[0].components.default);Object.keys(o).filter(function(t){return o[t]&&-1!==t.toLowerCase().indexOf("leave")}).forEach(function(t){e[t]=o[t]})}return e})}function Jt(t,e,n){return Kt.apply(this,arguments)}function Kt(){return(Kt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this._pathChanged=!!Dt.nuxt.err||n.path!==e.path,this._queryChanged=JSON.stringify(e.query)!==JSON.stringify(n.query),this._diffQuery=this._queryChanged?et(e.query,n.query):[],this._pathChanged&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),t.prev=4,t.next=7,B(e);case 7:o=t.sent,!this._pathChanged&&this._queryChanged&&o.some(function(t){var e=t.options.watchQuery;return!0===e||!!Array.isArray(e)&&e.some(function(t){return i._diffQuery[t]})})&&this.$loading.start&&!this.$loading.manual&&this.$loading.start(),r(),t.next=19;break;case 12:t.prev=12,t.t0=t.catch(4),t.t0=t.t0||{},a=t.t0.statusCode||t.t0.status||t.t0.response&&t.t0.response.status||500,this.error({statusCode:a,message:t.t0.message}),this.$nuxt.$emit("routeChanged",e,n,t.t0),r(!1);case 19:case"end":return t.stop()}},t,this,[[4,12]])}))).apply(this,arguments)}function Qt(t,e){return Ht.serverRendered&&e&&J(t,e),t._Ctor=t,t}function Ft(t,e,n){var r=this,o=[],a=!1;if(void 0!==n&&(o=[],n.middleware&&(o=o.concat(n.middleware)),t.forEach(function(t){t.options.middleware&&(o=o.concat(t.options.middleware))})),o=o.map(function(t){return"function"==typeof t?t:("function"!=typeof y[t]&&(a=!0,r.error({statusCode:500,message:"Unknown middleware "+t})),y[t])}),!a)return function t(e,n){return!e.length||n._redirected||n._errored?Promise.resolve():Y(e[0],n).then(function(){return t(e.slice(1),n)})}(o,e)}function Bt(t,e,n){return Vt.apply(this,arguments)}function Vt(){return(Vt=i()(regeneratorRuntime.mark(function t(e,n,r){var o,a,i,u,c,l,f,p,h,d,v,m,x,y,g,b,_=this;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(!1!==this._pathChanged||!1!==this._queryChanged){t.next=2;break}return t.abrupt("return",r());case 2:return It=e===n?[]:Q(n,o=[]).map(function(t,e){return tt(n.matched[o[e]].path)(n.params)}),a=!1,i=function(t){n.path===t.path&&_.$loading.finish&&_.$loading.finish(),n.path!==t.path&&_.$loading.pause&&_.$loading.pause(),a||(a=!0,r(t))},t.next=7,G(Dt,{route:e,from:n,next:i.bind(this)});case 7:if(this._dateLastError=Dt.nuxt.dateErr,this._hadError=!!Dt.nuxt.err,(c=Q(e,u=[])).length){t.next=25;break}return t.next=14,Ft.call(this,c,Dt.context);case 14:if(!a){t.next=16;break}return t.abrupt("return");case 16:return t.next=18,this.loadLayout("function"==typeof H.layout?H.layout(Dt.context):H.layout);case 18:return l=t.sent,t.next=21,Ft.call(this,c,Dt.context,l);case 21:if(!a){t.next=23;break}return t.abrupt("return");case 23:return Dt.context.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 25:return c.forEach(function(t){t._Ctor&&t._Ctor.options&&(t.options.asyncData=t._Ctor.options.asyncData,t.options.fetch=t._Ctor.options.fetch)}),this.setTransitions(zt(c,e,n)),t.prev=27,t.next=30,Ft.call(this,c,Dt.context);case 30:if(!a){t.next=32;break}return t.abrupt("return");case 32:if(!Dt.context._errored){t.next=34;break}return t.abrupt("return",r());case 34:return"function"==typeof(f=c[0].options.layout)&&(f=f(Dt.context)),t.next=38,this.loadLayout(f);case 38:return f=t.sent,t.next=41,Ft.call(this,c,Dt.context,f);case 41:if(!a){t.next=43;break}return t.abrupt("return");case 43:if(!Dt.context._errored){t.next=45;break}return t.abrupt("return",r());case 45:p=!0,t.prev=46,h=!0,d=!1,v=void 0,t.prev=50,m=c[Symbol.iterator]();case 52:if(h=(x=m.next()).done){t.next=64;break}if("function"==typeof(y=x.value).options.validate){t.next=56;break}return t.abrupt("continue",61);case 56:return t.next=58,y.options.validate(Dt.context);case 58:if(p=t.sent){t.next=61;break}return t.abrupt("break",64);case 61:h=!0,t.next=52;break;case 64:t.next=70;break;case 66:t.prev=66,t.t0=t.catch(50),d=!0,v=t.t0;case 70:t.prev=70,t.prev=71,h||null==m.return||m.return();case 73:if(t.prev=73,!d){t.next=76;break}throw v;case 76:return t.finish(73);case 77:return t.finish(70);case 78:t.next=84;break;case 80:return t.prev=80,t.t1=t.catch(46),this.error({statusCode:t.t1.statusCode||"500",message:t.t1.message}),t.abrupt("return",r());case 84:if(p){t.next=87;break}return this.error({statusCode:404,message:"This page could not be found"}),t.abrupt("return",r());case 87:return t.next=89,Promise.all(c.map(function(t,n){if(t._path=tt(e.matched[u[n]].path)(e.params),t._dataRefresh=!1,_._pathChanged&&_._queryChanged||t._path!==It[n])t._dataRefresh=!0;else if(!_._pathChanged&&_._queryChanged){var r=t.options.watchQuery;!0===r?t._dataRefresh=!0:Array.isArray(r)&&(t._dataRefresh=r.some(function(t){return _._diffQuery[t]}))}if(!_._hadError&&_._isMounted&&!t._dataRefresh)return Promise.resolve();var o=[],a=t.options.asyncData&&"function"==typeof t.options.asyncData,i=!!t.options.fetch,s=a&&i?30:45;if(a){var c=Y(t.options.asyncData,Dt.context).then(function(e){J(t,e),_.$loading.increase&&_.$loading.increase(s)});o.push(c)}if(_.$loading.manual=!1===t.options.loading,i){var l=t.options.fetch(Dt.context);l&&(l instanceof Promise||"function"==typeof l.then)||(l=Promise.resolve(l)),l.then(function(t){_.$loading.increase&&_.$loading.increase(s)}),o.push(l)}return Promise.all(o)}));case 89:a||(this.$loading.finish&&!this.$loading.manual&&this.$loading.finish(),r()),t.next=111;break;case 92:if(t.prev=92,t.t2=t.catch(27),t.t2){t.next=98;break}t.t2={},t.next=100;break;case 98:if("ERR_REDIRECT"!==t.t2.message){t.next=100;break}return t.abrupt("return",this.$nuxt.$emit("routeChanged",e,n,t.t2));case 100:return It=[],g=t.t2.response&&t.t2.response.status,t.t2.statusCode=t.t2.statusCode||t.t2.status||g||500,w=t.t2,s.default.config.errorHandler&&s.default.config.errorHandler(w),"function"==typeof(b=H.layout)&&(b=b(Dt.context)),t.next=108,this.loadLayout(b);case 108:this.error(t.t2),this.$nuxt.$emit("routeChanged",e,n,t.t2),r(!1);case 111:case"end":return t.stop()}var w},t,this,[[27,92],[46,80],[50,66,70,78],[71,,73,77]])}))).apply(this,arguments)}function Xt(t,e){F(t,function(t,e,n,r){return"object"!==o()(t)||t.options||((t=s.default.extend(t))._Ctor=t,n.components[r]=t),t})}function Gt(t){this._hadError&&this._dateLastError===this.$options.nuxt.dateErr&&this.error();var e=this.$options.nuxt.err?H.layout:t.matched[0].components.default.options.layout;"function"==typeof e&&(e=e(Dt.context)),this.setLayout(e)}function Wt(t,e){var n=this;!1===this._pathChanged&&!1===this._queryChanged||s.default.nextTick(function(){var e=[],r=function(t){var e=arguments.length>1&&void 0!==arguments[1]&&arguments[1];return Array.prototype.concat.apply([],t.matched.map(function(t,n){return Object.keys(t.instances).map(function(r){return e&&e.push(n),t.instances[r]})}))}(t,e),o=Q(t,e);r.forEach(function(t,e){if(t&&t.constructor._dataRefresh&&o[e]===t.constructor&&"function"==typeof t.constructor.options.data){var n=t.constructor.options.data.call(t);for(var r in n)s.default.set(t.$data,r,n[r])}}),Gt.call(n,t)})}function Yt(t){window._nuxtReadyCbs.forEach(function(e){"function"==typeof e&&e(t)}),"function"==typeof window._onNuxtLoaded&&window._onNuxtLoaded(t),Ut.afterEach(function(e,n){s.default.nextTick(function(){return t.$nuxt.$emit("routeChanged",e,n)})})}function Zt(){return(Zt=i()(regeneratorRuntime.mark(function t(e){var n,r,o,a;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return Dt=e.app,Ut=e.router,t.next=4,Promise.all((void 0,c=Z((u=Ut).options.base,u.options.mode),F(u.match(c),function(){var t=i()(regeneratorRuntime.mark(function t(e,n,r,o,a){var i;return regeneratorRuntime.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if("function"!=typeof e||e.options){t.next=4;break}return t.next=3,e();case 3:e=t.sent;case 4:return i=Qt(K(e),Ht.data?Ht.data[a]:null),r.components[o]=i,t.abrupt("return",i);case 7:case"end":return t.stop()}},t,this)}));return function(e,n,r,o,a){return t.apply(this,arguments)}}())));case 4:return n=t.sent,r=new s.default(Dt),o=Ht.layout||"default",t.next=9,r.loadLayout(o);case 9:if(r.setLayout(o),a=function(){r.$mount("#__nuxt"),s.default.nextTick(function(){Yt(r)})},r.setTransitions=r.$options.nuxt.setTransitions.bind(r),n.length&&(r.setTransitions(zt(n,Ut.currentRoute)),It=Ut.currentRoute.matched.map(function(t){return tt(t.path)(Ut.currentRoute.params)})),r.$loading={},Ht.error&&r.error(Ht.error),Ut.beforeEach(Jt.bind(r)),Ut.beforeEach(Bt.bind(r)),Ut.afterEach(Xt),Ut.afterEach(Wt.bind(r)),!Ht.serverRendered){t.next=22;break}return a(),t.abrupt("return");case 22:Bt.call(r,Ut.currentRoute,Ut.currentRoute,function(t){if(!t)return Xt(Ut.currentRoute,Ut.currentRoute),Gt.call(r,Ut.currentRoute),void a();Ut.push(t,function(){return a()},function(t){if(!t)return a();console.error(t)})});case 23:case"end":return t.stop()}var u,c},t,this)}))).apply(this,arguments)}Object.assign(s.default.config,{silent:!0,performance:!1}),function(t){return Mt.apply(this,arguments)}().then(function(t){return Zt.apply(this,arguments)}).catch(function(t){console.error("[nuxt] Error while initializing app",t)})},37:function(t,e,n){var r=n(124);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("7b337a42",r,!1,{sourceMap:!1})},38:function(t,e,n){var r=n(136);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("fd547dac",r,!1,{sourceMap:!1})},39:function(t,e,n){var r=n(140);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("87d76798",r,!1,{sourceMap:!1})},40:function(t,e,n){var r=n(142);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("facb3b1a",r,!1,{sourceMap:!1})},41:function(t,e,n){var r=n(144);"string"==typeof r&&(r=[[t.i,r,""]]),r.locals&&(t.exports=r.locals);(0,n(18).default)("371b8fbf",r,!1,{sourceMap:!1})},89:function(t,e,n){t.exports=n(163)}},[[89,9,7,8]]]);