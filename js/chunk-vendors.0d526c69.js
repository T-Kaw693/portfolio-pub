(self["webpackChunkvue_chat"]=self["webpackChunkvue_chat"]||[]).push([[998],{4444:function(e,t,n){"use strict";n.d(t,{BH:function(){return b},G6:function(){return x},L:function(){return c},LL:function(){return R},Pz:function(){return y},Sg:function(){return w},UG:function(){return S},ZB:function(){return l},ZR:function(){return D},aH:function(){return v},b$:function(){return k},eu:function(){return O},hl:function(){return A},jU:function(){return T},m9:function(){return Z},ne:function(){return z},pd:function(){return j},r3:function(){return $},ru:function(){return E},tV:function(){return u},uI:function(){return I},vZ:function(){return V},w1:function(){return C},xO:function(){return B},xb:function(){return M},z$:function(){return _},zd:function(){return U}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=function(e){const t=[];let n=0;for(let i=0;i<e.length;i++){let r=e.charCodeAt(i);r<128?t[n++]=r:r<2048?(t[n++]=r>>6|192,t[n++]=63&r|128):55296===(64512&r)&&i+1<e.length&&56320===(64512&e.charCodeAt(i+1))?(r=65536+((1023&r)<<10)+(1023&e.charCodeAt(++i)),t[n++]=r>>18|240,t[n++]=r>>12&63|128,t[n++]=r>>6&63|128,t[n++]=63&r|128):(t[n++]=r>>12|224,t[n++]=r>>6&63|128,t[n++]=63&r|128)}return t},r=function(e){const t=[];let n=0,i=0;while(n<e.length){const r=e[n++];if(r<128)t[i++]=String.fromCharCode(r);else if(r>191&&r<224){const s=e[n++];t[i++]=String.fromCharCode((31&r)<<6|63&s)}else if(r>239&&r<365){const s=e[n++],o=e[n++],a=e[n++],c=((7&r)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[i++]=String.fromCharCode(55296+(c>>10)),t[i++]=String.fromCharCode(56320+(1023&c))}else{const s=e[n++],o=e[n++];t[i++]=String.fromCharCode((15&r)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let r=0;r<e.length;r+=3){const t=e[r],s=r+1<e.length,o=s?e[r+1]:0,a=r+2<e.length,c=a?e[r+2]:0,u=t>>2,l=(3&t)<<4|o>>4;let h=(15&o)<<2|c>>6,d=63&c;a||(d=64,s||(h=64)),i.push(n[u],n[l],n[h],n[d])}return i.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(i(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):r(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let r=0;r<e.length;){const t=n[e.charAt(r++)],s=r<e.length,a=s?n[e.charAt(r)]:0;++r;const c=r<e.length,u=c?n[e.charAt(r)]:64;++r;const l=r<e.length,h=l?n[e.charAt(r)]:64;if(++r,null==t||null==a||null==u||null==h)throw new o;const d=t<<2|a>>4;if(i.push(d),64!==u){const e=a<<4&240|u>>2;if(i.push(e),64!==h){const e=u<<6&192|h;i.push(e)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const a=function(e){const t=i(e);return s.encodeByteArray(t,!0)},c=function(e){return a(e).replace(/\./g,"")},u=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};function l(e,t){if(!(t instanceof Object))return t;switch(t.constructor){case Date:const n=t;return new Date(n.getTime());case Object:void 0===e&&(e={});break;case Array:e=[];break;default:return t}for(const n in t)t.hasOwnProperty(n)&&h(n)&&(e[n]=l(e[n],t[n]));return e}function h(e){return"__proto__"!==e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function d(){if("undefined"!==typeof self)return self;if("undefined"!==typeof window)return window;if("undefined"!==typeof n.g)return n.g;throw new Error("Unable to locate global object.")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const f=()=>d().__FIREBASE_DEFAULTS__,p=()=>{if("undefined"===typeof process)return;const e={NODE_ENV:"production",BASE_URL:"/portofoio-pub/"}.__FIREBASE_DEFAULTS__;return e?JSON.parse(e):void 0},m=()=>{if("undefined"===typeof document)return;let e;try{e=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch(n){return}const t=e&&u(e[1]);return t&&JSON.parse(t)},g=()=>{try{return f()||p()||m()}catch(e){return void console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${e}`)}},v=()=>{var e;return null===(e=g())||void 0===e?void 0:e.config},y=e=>{var t;return null===(t=g())||void 0===t?void 0:t[`_${e}`]};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class b{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function w(e,t){if(e.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const n={alg:"none",type:"JWT"},i=t||"demo-project",r=e.iat||0,s=e.sub||e.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:r,exp:r+3600,auth_time:r,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},e),a="";return[c(JSON.stringify(n)),c(JSON.stringify(o)),a].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function I(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(_())}function S(){var e;const t=null===(e=g())||void 0===e?void 0:e.forceEnvironment;if("node"===t)return!0;if("browser"===t)return!1;try{return"[object process]"===Object.prototype.toString.call(n.g.process)}catch(i){return!1}}function T(){return"object"===typeof self&&self.self===self}function E(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function k(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function C(){const e=_();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function x(){return!S()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}function A(){try{return"object"===typeof indexedDB}catch(e){return!1}}function O(){return new Promise(((e,t)=>{try{let n=!0;const i="validate-browser-context-for-indexeddb-analytics-module",r=self.indexedDB.open(i);r.onsuccess=()=>{r.result.close(),n||self.indexedDB.deleteDatabase(i),e(!0)},r.onupgradeneeded=()=>{n=!1},r.onerror=()=>{var e;t((null===(e=r.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const N="FirebaseError";class D extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=N,Object.setPrototypeOf(this,D.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,R.prototype.create)}}class R{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},i=`${this.service}/${e}`,r=this.errors[e],s=r?L(r,n):"Error",o=`${this.serviceName}: ${s} (${i}).`,a=new D(i,o,n);return a}}function L(e,t){return e.replace(P,((e,n)=>{const i=t[n];return null!=i?String(i):`<${n}?>`}))}const P=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function $(e,t){return Object.prototype.hasOwnProperty.call(e,t)}function M(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function V(e,t){if(e===t)return!0;const n=Object.keys(e),i=Object.keys(t);for(const r of n){if(!i.includes(r))return!1;const n=e[r],s=t[r];if(F(n)&&F(s)){if(!V(n,s))return!1}else if(n!==s)return!1}for(const r of i)if(!n.includes(r))return!1;return!0}function F(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function B(e){const t=[];for(const[n,i]of Object.entries(e))Array.isArray(i)?i.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(i));return t.length?"&"+t.join("&"):""}function U(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,i]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(i)}})),t}function j(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function z(e,t){const n=new q(e,t);return n.subscribe.bind(n)}class q{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let i;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");i=H(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===i.next&&(i.next=G),void 0===i.error&&(i.error=G),void 0===i.complete&&(i.complete=G);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch(e){}})),this.observers.push(i),r}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function H(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function G(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(e){return e&&e._delegate?e._delegate:e}},1001:function(e,t,n){"use strict";function i(e,t,n,i,r,s,o,a){var c,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=n,u._compiled=!0),i&&(u.functional=!0),s&&(u._scopeId="data-v-"+s),o?(c=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=c):r&&(c=a?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),c)if(u.functional){u._injectStyles=c;var l=u.render;u.render=function(e,t){return c.call(t),l(e,t)}}else{var h=u.beforeCreate;u.beforeCreate=h?[].concat(h,c):[c]}return{exports:e,options:u}}n.d(t,{Z:function(){return i}})},9662:function(e,t,n){var i=n(614),r=n(6330),s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not a function")}},9670:function(e,t,n){var i=n(111),r=String,s=TypeError;e.exports=function(e){if(i(e))return e;throw s(r(e)+" is not an object")}},1318:function(e,t,n){var i=n(5656),r=n(1400),s=n(6244),o=function(e){return function(t,n,o){var a,c=i(t),u=s(c),l=r(o,u);if(e&&n!=n){while(u>l)if(a=c[l++],a!=a)return!0}else for(;u>l;l++)if((e||l in c)&&c[l]===n)return e||l||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},3658:function(e,t,n){"use strict";var i=n(9781),r=n(3157),s=TypeError,o=Object.getOwnPropertyDescriptor,a=i&&!function(){if(void 0!==this)return!0;try{Object.defineProperty([],"length",{writable:!1}).length=1}catch(e){return e instanceof TypeError}}();e.exports=a?function(e,t){if(r(e)&&!o(e,"length").writable)throw s("Cannot set read only .length");return e.length=t}:function(e,t){return e.length=t}},4326:function(e,t,n){var i=n(1702),r=i({}.toString),s=i("".slice);e.exports=function(e){return s(r(e),8,-1)}},9920:function(e,t,n){var i=n(2597),r=n(3887),s=n(1236),o=n(3070);e.exports=function(e,t,n){for(var a=r(t),c=o.f,u=s.f,l=0;l<a.length;l++){var h=a[l];i(e,h)||n&&i(n,h)||c(e,h,u(t,h))}}},8880:function(e,t,n){var i=n(9781),r=n(3070),s=n(9114);e.exports=i?function(e,t,n){return r.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},9114:function(e){e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},8052:function(e,t,n){var i=n(614),r=n(3070),s=n(6339),o=n(3072);e.exports=function(e,t,n,a){a||(a={});var c=a.enumerable,u=void 0!==a.name?a.name:t;if(i(n)&&s(n,u,a),a.global)c?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(c=!0):delete e[t]}catch(l){}c?e[t]=n:r.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},3072:function(e,t,n){var i=n(7854),r=Object.defineProperty;e.exports=function(e,t){try{r(i,e,{value:t,configurable:!0,writable:!0})}catch(n){i[e]=t}return t}},9781:function(e,t,n){var i=n(7293);e.exports=!i((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},4154:function(e){var t="object"==typeof document&&document.all,n="undefined"==typeof t&&void 0!==t;e.exports={all:t,IS_HTMLDDA:n}},317:function(e,t,n){var i=n(7854),r=n(111),s=i.document,o=r(s)&&r(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},7207:function(e){var t=TypeError,n=9007199254740991;e.exports=function(e){if(e>n)throw t("Maximum allowed index exceeded");return e}},8113:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},7392:function(e,t,n){var i,r,s=n(7854),o=n(8113),a=s.process,c=s.Deno,u=a&&a.versions||c&&c.version,l=u&&u.v8;l&&(i=l.split("."),r=i[0]>0&&i[0]<4?1:+(i[0]+i[1])),!r&&o&&(i=o.match(/Edge\/(\d+)/),(!i||i[1]>=74)&&(i=o.match(/Chrome\/(\d+)/),i&&(r=+i[1]))),e.exports=r},748:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},2109:function(e,t,n){var i=n(7854),r=n(1236).f,s=n(8880),o=n(8052),a=n(3072),c=n(9920),u=n(4705);e.exports=function(e,t){var n,l,h,d,f,p,m=e.target,g=e.global,v=e.stat;if(l=g?i:v?i[m]||a(m,{}):(i[m]||{}).prototype,l)for(h in t){if(f=t[h],e.dontCallGetSet?(p=r(l,h),d=p&&p.value):d=l[h],n=u(g?h:m+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;c(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(l,h,f,e)}}},7293:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},4374:function(e,t,n){var i=n(7293);e.exports=!i((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},6916:function(e,t,n){var i=n(4374),r=Function.prototype.call;e.exports=i?r.bind(r):function(){return r.apply(r,arguments)}},6530:function(e,t,n){var i=n(9781),r=n(2597),s=Function.prototype,o=i&&Object.getOwnPropertyDescriptor,a=r(s,"name"),c=a&&"something"===function(){}.name,u=a&&(!i||i&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:c,CONFIGURABLE:u}},1702:function(e,t,n){var i=n(4374),r=Function.prototype,s=r.call,o=i&&r.bind.bind(s,s);e.exports=i?o:function(e){return function(){return s.apply(e,arguments)}}},5005:function(e,t,n){var i=n(7854),r=n(614),s=function(e){return r(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(i[e]):i[e]&&i[e][t]}},8173:function(e,t,n){var i=n(9662),r=n(8554);e.exports=function(e,t){var n=e[t];return r(n)?void 0:i(n)}},7854:function(e,t,n){var i=function(e){return e&&e.Math==Math&&e};e.exports=i("object"==typeof globalThis&&globalThis)||i("object"==typeof window&&window)||i("object"==typeof self&&self)||i("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},2597:function(e,t,n){var i=n(1702),r=n(7908),s=i({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(r(e),t)}},3501:function(e){e.exports={}},4664:function(e,t,n){var i=n(9781),r=n(7293),s=n(317);e.exports=!i&&!r((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8361:function(e,t,n){var i=n(1702),r=n(7293),s=n(4326),o=Object,a=i("".split);e.exports=r((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},2788:function(e,t,n){var i=n(1702),r=n(614),s=n(5465),o=i(Function.toString);r(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},9909:function(e,t,n){var i,r,s,o=n(4811),a=n(7854),c=n(111),u=n(8880),l=n(2597),h=n(5465),d=n(6200),f=n(3501),p="Object already initialized",m=a.TypeError,g=a.WeakMap,v=function(e){return s(e)?r(e):i(e,{})},y=function(e){return function(t){var n;if(!c(t)||(n=r(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||h.state){var b=h.state||(h.state=new g);b.get=b.get,b.has=b.has,b.set=b.set,i=function(e,t){if(b.has(e))throw m(p);return t.facade=e,b.set(e,t),t},r=function(e){return b.get(e)||{}},s=function(e){return b.has(e)}}else{var w=d("state");f[w]=!0,i=function(e,t){if(l(e,w))throw m(p);return t.facade=e,u(e,w,t),t},r=function(e){return l(e,w)?e[w]:{}},s=function(e){return l(e,w)}}e.exports={set:i,get:r,has:s,enforce:v,getterFor:y}},3157:function(e,t,n){var i=n(4326);e.exports=Array.isArray||function(e){return"Array"==i(e)}},614:function(e,t,n){var i=n(4154),r=i.all;e.exports=i.IS_HTMLDDA?function(e){return"function"==typeof e||e===r}:function(e){return"function"==typeof e}},4705:function(e,t,n){var i=n(7293),r=n(614),s=/#|\.prototype\./,o=function(e,t){var n=c[a(e)];return n==l||n!=u&&(r(t)?i(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},c=o.data={},u=o.NATIVE="N",l=o.POLYFILL="P";e.exports=o},8554:function(e){e.exports=function(e){return null===e||void 0===e}},111:function(e,t,n){var i=n(614),r=n(4154),s=r.all;e.exports=r.IS_HTMLDDA?function(e){return"object"==typeof e?null!==e:i(e)||e===s}:function(e){return"object"==typeof e?null!==e:i(e)}},1913:function(e){e.exports=!1},2190:function(e,t,n){var i=n(5005),r=n(614),s=n(7976),o=n(3307),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return r(t)&&s(t.prototype,a(e))}},6244:function(e,t,n){var i=n(7466);e.exports=function(e){return i(e.length)}},6339:function(e,t,n){var i=n(1702),r=n(7293),s=n(614),o=n(2597),a=n(9781),c=n(6530).CONFIGURABLE,u=n(2788),l=n(9909),h=l.enforce,d=l.get,f=String,p=Object.defineProperty,m=i("".slice),g=i("".replace),v=i([].join),y=a&&!r((function(){return 8!==p((function(){}),"length",{value:8}).length})),b=String(String).split("String"),w=e.exports=function(e,t,n){"Symbol("===m(f(t),0,7)&&(t="["+g(f(t),/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!o(e,"name")||c&&e.name!==t)&&(a?p(e,"name",{value:t,configurable:!0}):e.name=t),y&&n&&o(n,"arity")&&e.length!==n.arity&&p(e,"length",{value:n.arity});try{n&&o(n,"constructor")&&n.constructor?a&&p(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(r){}var i=h(e);return o(i,"source")||(i.source=v(b,"string"==typeof t?t:"")),e};Function.prototype.toString=w((function(){return s(this)&&d(this).source||u(this)}),"toString")},4758:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var i=+e;return(i>0?n:t)(i)}},3070:function(e,t,n){var i=n(9781),r=n(4664),s=n(3353),o=n(9670),a=n(4948),c=TypeError,u=Object.defineProperty,l=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=i?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var i=l(e,t);i&&i[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:i[d],enumerable:h in n?n[h]:i[h],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(o(e),t=a(t),o(n),r)try{return u(e,t,n)}catch(i){}if("get"in n||"set"in n)throw c("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},1236:function(e,t,n){var i=n(9781),r=n(6916),s=n(5296),o=n(9114),a=n(5656),c=n(4948),u=n(2597),l=n(4664),h=Object.getOwnPropertyDescriptor;t.f=i?h:function(e,t){if(e=a(e),t=c(t),l)try{return h(e,t)}catch(n){}if(u(e,t))return o(!r(s.f,e,t),e[t])}},8006:function(e,t,n){var i=n(6324),r=n(748),s=r.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return i(e,s)}},5181:function(e,t){t.f=Object.getOwnPropertySymbols},7976:function(e,t,n){var i=n(1702);e.exports=i({}.isPrototypeOf)},6324:function(e,t,n){var i=n(1702),r=n(2597),s=n(5656),o=n(1318).indexOf,a=n(3501),c=i([].push);e.exports=function(e,t){var n,i=s(e),u=0,l=[];for(n in i)!r(a,n)&&r(i,n)&&c(l,n);while(t.length>u)r(i,n=t[u++])&&(~o(l,n)||c(l,n));return l}},5296:function(e,t){"use strict";var n={}.propertyIsEnumerable,i=Object.getOwnPropertyDescriptor,r=i&&!n.call({1:2},1);t.f=r?function(e){var t=i(this,e);return!!t&&t.enumerable}:n},2140:function(e,t,n){var i=n(6916),r=n(614),s=n(111),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&r(n=e.toString)&&!s(a=i(n,e)))return a;if(r(n=e.valueOf)&&!s(a=i(n,e)))return a;if("string"!==t&&r(n=e.toString)&&!s(a=i(n,e)))return a;throw o("Can't convert object to primitive value")}},3887:function(e,t,n){var i=n(5005),r=n(1702),s=n(8006),o=n(5181),a=n(9670),c=r([].concat);e.exports=i("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?c(t,n(e)):t}},4488:function(e,t,n){var i=n(8554),r=TypeError;e.exports=function(e){if(i(e))throw r("Can't call method on "+e);return e}},6200:function(e,t,n){var i=n(2309),r=n(9711),s=i("keys");e.exports=function(e){return s[e]||(s[e]=r(e))}},5465:function(e,t,n){var i=n(7854),r=n(3072),s="__core-js_shared__",o=i[s]||r(s,{});e.exports=o},2309:function(e,t,n){var i=n(1913),r=n(5465);(e.exports=function(e,t){return r[e]||(r[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.29.1",mode:i?"pure":"global",copyright:"© 2014-2023 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.29.1/LICENSE",source:"https://github.com/zloirock/core-js"})},6293:function(e,t,n){var i=n(7392),r=n(7293);e.exports=!!Object.getOwnPropertySymbols&&!r((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&i&&i<41}))},1400:function(e,t,n){var i=n(9303),r=Math.max,s=Math.min;e.exports=function(e,t){var n=i(e);return n<0?r(n+t,0):s(n,t)}},5656:function(e,t,n){var i=n(8361),r=n(4488);e.exports=function(e){return i(r(e))}},9303:function(e,t,n){var i=n(4758);e.exports=function(e){var t=+e;return t!==t||0===t?0:i(t)}},7466:function(e,t,n){var i=n(9303),r=Math.min;e.exports=function(e){return e>0?r(i(e),9007199254740991):0}},7908:function(e,t,n){var i=n(4488),r=Object;e.exports=function(e){return r(i(e))}},7593:function(e,t,n){var i=n(6916),r=n(111),s=n(2190),o=n(8173),a=n(2140),c=n(5112),u=TypeError,l=c("toPrimitive");e.exports=function(e,t){if(!r(e)||s(e))return e;var n,c=o(e,l);if(c){if(void 0===t&&(t="default"),n=i(c,e,t),!r(n)||s(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},4948:function(e,t,n){var i=n(7593),r=n(2190);e.exports=function(e){var t=i(e,"string");return r(t)?t:t+""}},6330:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},9711:function(e,t,n){var i=n(1702),r=0,s=Math.random(),o=i(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++r+s,36)}},3307:function(e,t,n){var i=n(6293);e.exports=i&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},3353:function(e,t,n){var i=n(9781),r=n(7293);e.exports=i&&r((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},4811:function(e,t,n){var i=n(7854),r=n(614),s=i.WeakMap;e.exports=r(s)&&/native code/.test(String(s))},5112:function(e,t,n){var i=n(7854),r=n(2309),s=n(2597),o=n(9711),a=n(6293),c=n(3307),u=i.Symbol,l=r("wks"),h=c?u["for"]||u:u&&u.withoutSetter||o;e.exports=function(e){return s(l,e)||(l[e]=a&&s(u,e)?u[e]:h("Symbol."+e)),l[e]}},7658:function(e,t,n){"use strict";var i=n(2109),r=n(7908),s=n(6244),o=n(3658),a=n(7207),c=n(7293),u=c((function(){return 4294967297!==[].push.call({length:4294967296},1)})),l=function(){try{Object.defineProperty([],"length",{writable:!1}).push()}catch(e){return e instanceof TypeError}},h=u||!l();i({target:"Array",proto:!0,arity:1,forced:h},{push:function(e){var t=r(this),n=s(t),i=arguments.length;a(n+i);for(var c=0;c<i;c++)t[n]=arguments[c],n++;return o(t,n),n}})},1884:function(){},9027:function(){},8345:function(e,t,n){"use strict";function i(e,t){for(var n in t)e[n]=t[n];return e}n.d(t,{ZP:function(){return It}});var r=/[!'()*]/g,s=function(e){return"%"+e.charCodeAt(0).toString(16)},o=/%2C/g,a=function(e){return encodeURIComponent(e).replace(r,s).replace(o,",")};function c(e){try{return decodeURIComponent(e)}catch(t){0}return e}function u(e,t,n){void 0===t&&(t={});var i,r=n||h;try{i=r(e||"")}catch(a){i={}}for(var s in t){var o=t[s];i[s]=Array.isArray(o)?o.map(l):l(o)}return i}var l=function(e){return null==e||"object"===typeof e?e:String(e)};function h(e){var t={};return e=e.trim().replace(/^(\?|#|&)/,""),e?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),i=c(n.shift()),r=n.length>0?c(n.join("=")):null;void 0===t[i]?t[i]=r:Array.isArray(t[i])?t[i].push(r):t[i]=[t[i],r]})),t):t}function d(e){var t=e?Object.keys(e).map((function(t){var n=e[t];if(void 0===n)return"";if(null===n)return a(t);if(Array.isArray(n)){var i=[];return n.forEach((function(e){void 0!==e&&(null===e?i.push(a(t)):i.push(a(t)+"="+a(e)))})),i.join("&")}return a(t)+"="+a(n)})).filter((function(e){return e.length>0})).join("&"):null;return t?"?"+t:""}var f=/\/?$/;function p(e,t,n,i){var r=i&&i.options.stringifyQuery,s=t.query||{};try{s=m(s)}catch(a){}var o={name:t.name||e&&e.name,meta:e&&e.meta||{},path:t.path||"/",hash:t.hash||"",query:s,params:t.params||{},fullPath:y(t,r),matched:e?v(e):[]};return n&&(o.redirectedFrom=y(n,r)),Object.freeze(o)}function m(e){if(Array.isArray(e))return e.map(m);if(e&&"object"===typeof e){var t={};for(var n in e)t[n]=m(e[n]);return t}return e}var g=p(null,{path:"/"});function v(e){var t=[];while(e)t.unshift(e),e=e.parent;return t}function y(e,t){var n=e.path,i=e.query;void 0===i&&(i={});var r=e.hash;void 0===r&&(r="");var s=t||d;return(n||"/")+s(i)+r}function b(e,t,n){return t===g?e===t:!!t&&(e.path&&t.path?e.path.replace(f,"")===t.path.replace(f,"")&&(n||e.hash===t.hash&&w(e.query,t.query)):!(!e.name||!t.name)&&(e.name===t.name&&(n||e.hash===t.hash&&w(e.query,t.query)&&w(e.params,t.params))))}function w(e,t){if(void 0===e&&(e={}),void 0===t&&(t={}),!e||!t)return e===t;var n=Object.keys(e).sort(),i=Object.keys(t).sort();return n.length===i.length&&n.every((function(n,r){var s=e[n],o=i[r];if(o!==n)return!1;var a=t[n];return null==s||null==a?s===a:"object"===typeof s&&"object"===typeof a?w(s,a):String(s)===String(a)}))}function _(e,t){return 0===e.path.replace(f,"/").indexOf(t.path.replace(f,"/"))&&(!t.hash||e.hash===t.hash)&&I(e.query,t.query)}function I(e,t){for(var n in t)if(!(n in e))return!1;return!0}function S(e){for(var t=0;t<e.matched.length;t++){var n=e.matched[t];for(var i in n.instances){var r=n.instances[i],s=n.enteredCbs[i];if(r&&s){delete n.enteredCbs[i];for(var o=0;o<s.length;o++)r._isBeingDestroyed||s[o](r)}}}}var T={name:"RouterView",functional:!0,props:{name:{type:String,default:"default"}},render:function(e,t){var n=t.props,r=t.children,s=t.parent,o=t.data;o.routerView=!0;var a=s.$createElement,c=n.name,u=s.$route,l=s._routerViewCache||(s._routerViewCache={}),h=0,d=!1;while(s&&s._routerRoot!==s){var f=s.$vnode?s.$vnode.data:{};f.routerView&&h++,f.keepAlive&&s._directInactive&&s._inactive&&(d=!0),s=s.$parent}if(o.routerViewDepth=h,d){var p=l[c],m=p&&p.component;return m?(p.configProps&&E(m,o,p.route,p.configProps),a(m,o,r)):a()}var g=u.matched[h],v=g&&g.components[c];if(!g||!v)return l[c]=null,a();l[c]={component:v},o.registerRouteInstance=function(e,t){var n=g.instances[c];(t&&n!==e||!t&&n===e)&&(g.instances[c]=t)},(o.hook||(o.hook={})).prepatch=function(e,t){g.instances[c]=t.componentInstance},o.hook.init=function(e){e.data.keepAlive&&e.componentInstance&&e.componentInstance!==g.instances[c]&&(g.instances[c]=e.componentInstance),S(u)};var y=g.props&&g.props[c];return y&&(i(l[c],{route:u,configProps:y}),E(v,o,u,y)),a(v,o,r)}};function E(e,t,n,r){var s=t.props=k(n,r);if(s){s=t.props=i({},s);var o=t.attrs=t.attrs||{};for(var a in s)e.props&&a in e.props||(o[a]=s[a],delete s[a])}}function k(e,t){switch(typeof t){case"undefined":return;case"object":return t;case"function":return t(e);case"boolean":return t?e.params:void 0;default:0}}function C(e,t,n){var i=e.charAt(0);if("/"===i)return e;if("?"===i||"#"===i)return t+e;var r=t.split("/");n&&r[r.length-1]||r.pop();for(var s=e.replace(/^\//,"").split("/"),o=0;o<s.length;o++){var a=s[o];".."===a?r.pop():"."!==a&&r.push(a)}return""!==r[0]&&r.unshift(""),r.join("/")}function x(e){var t="",n="",i=e.indexOf("#");i>=0&&(t=e.slice(i),e=e.slice(0,i));var r=e.indexOf("?");return r>=0&&(n=e.slice(r+1),e=e.slice(0,r)),{path:e,query:n,hash:t}}function A(e){return e.replace(/\/(?:\s*\/)+/g,"/")}var O=Array.isArray||function(e){return"[object Array]"==Object.prototype.toString.call(e)},N=Q,D=M,R=V,L=U,P=W,$=new RegExp(["(\\\\.)","([\\/.])?(?:(?:\\:(\\w+)(?:\\(((?:\\\\.|[^\\\\()])+)\\))?|\\(((?:\\\\.|[^\\\\()])+)\\))([+*?])?|(\\*))"].join("|"),"g");function M(e,t){var n,i=[],r=0,s=0,o="",a=t&&t.delimiter||"/";while(null!=(n=$.exec(e))){var c=n[0],u=n[1],l=n.index;if(o+=e.slice(s,l),s=l+c.length,u)o+=u[1];else{var h=e[s],d=n[2],f=n[3],p=n[4],m=n[5],g=n[6],v=n[7];o&&(i.push(o),o="");var y=null!=d&&null!=h&&h!==d,b="+"===g||"*"===g,w="?"===g||"*"===g,_=n[2]||a,I=p||m;i.push({name:f||r++,prefix:d||"",delimiter:_,optional:w,repeat:b,partial:y,asterisk:!!v,pattern:I?z(I):v?".*":"[^"+j(_)+"]+?"})}}return s<e.length&&(o+=e.substr(s)),o&&i.push(o),i}function V(e,t){return U(M(e,t),t)}function F(e){return encodeURI(e).replace(/[\/?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function B(e){return encodeURI(e).replace(/[?#]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}function U(e,t){for(var n=new Array(e.length),i=0;i<e.length;i++)"object"===typeof e[i]&&(n[i]=new RegExp("^(?:"+e[i].pattern+")$",H(t)));return function(t,i){for(var r="",s=t||{},o=i||{},a=o.pretty?F:encodeURIComponent,c=0;c<e.length;c++){var u=e[c];if("string"!==typeof u){var l,h=s[u.name];if(null==h){if(u.optional){u.partial&&(r+=u.prefix);continue}throw new TypeError('Expected "'+u.name+'" to be defined')}if(O(h)){if(!u.repeat)throw new TypeError('Expected "'+u.name+'" to not repeat, but received `'+JSON.stringify(h)+"`");if(0===h.length){if(u.optional)continue;throw new TypeError('Expected "'+u.name+'" to not be empty')}for(var d=0;d<h.length;d++){if(l=a(h[d]),!n[c].test(l))throw new TypeError('Expected all "'+u.name+'" to match "'+u.pattern+'", but received `'+JSON.stringify(l)+"`");r+=(0===d?u.prefix:u.delimiter)+l}}else{if(l=u.asterisk?B(h):a(h),!n[c].test(l))throw new TypeError('Expected "'+u.name+'" to match "'+u.pattern+'", but received "'+l+'"');r+=u.prefix+l}}else r+=u}return r}}function j(e){return e.replace(/([.+*?=^!:${}()[\]|\/\\])/g,"\\$1")}function z(e){return e.replace(/([=!:$\/()])/g,"\\$1")}function q(e,t){return e.keys=t,e}function H(e){return e&&e.sensitive?"":"i"}function G(e,t){var n=e.source.match(/\((?!\?)/g);if(n)for(var i=0;i<n.length;i++)t.push({name:i,prefix:null,delimiter:null,optional:!1,repeat:!1,partial:!1,asterisk:!1,pattern:null});return q(e,t)}function Z(e,t,n){for(var i=[],r=0;r<e.length;r++)i.push(Q(e[r],t,n).source);var s=new RegExp("(?:"+i.join("|")+")",H(n));return q(s,t)}function K(e,t,n){return W(M(e,n),t,n)}function W(e,t,n){O(t)||(n=t||n,t=[]),n=n||{};for(var i=n.strict,r=!1!==n.end,s="",o=0;o<e.length;o++){var a=e[o];if("string"===typeof a)s+=j(a);else{var c=j(a.prefix),u="(?:"+a.pattern+")";t.push(a),a.repeat&&(u+="(?:"+c+u+")*"),u=a.optional?a.partial?c+"("+u+")?":"(?:"+c+"("+u+"))?":c+"("+u+")",s+=u}}var l=j(n.delimiter||"/"),h=s.slice(-l.length)===l;return i||(s=(h?s.slice(0,-l.length):s)+"(?:"+l+"(?=$))?"),s+=r?"$":i&&h?"":"(?="+l+"|$)",q(new RegExp("^"+s,H(n)),t)}function Q(e,t,n){return O(t)||(n=t||n,t=[]),n=n||{},e instanceof RegExp?G(e,t):O(e)?Z(e,t,n):K(e,t,n)}N.parse=D,N.compile=R,N.tokensToFunction=L,N.tokensToRegExp=P;var Y=Object.create(null);function X(e,t,n){t=t||{};try{var i=Y[e]||(Y[e]=N.compile(e));return"string"===typeof t.pathMatch&&(t[0]=t.pathMatch),i(t,{pretty:!0})}catch(r){return""}finally{delete t[0]}}function J(e,t,n,r){var s="string"===typeof e?{path:e}:e;if(s._normalized)return s;if(s.name){s=i({},e);var o=s.params;return o&&"object"===typeof o&&(s.params=i({},o)),s}if(!s.path&&s.params&&t){s=i({},s),s._normalized=!0;var a=i(i({},t.params),s.params);if(t.name)s.name=t.name,s.params=a;else if(t.matched.length){var c=t.matched[t.matched.length-1].path;s.path=X(c,a,"path "+t.path)}else 0;return s}var l=x(s.path||""),h=t&&t.path||"/",d=l.path?C(l.path,h,n||s.append):h,f=u(l.query,s.query,r&&r.options.parseQuery),p=s.hash||l.hash;return p&&"#"!==p.charAt(0)&&(p="#"+p),{_normalized:!0,path:d,query:f,hash:p}}var ee,te=[String,Object],ne=[String,Array],ie=function(){},re={name:"RouterLink",props:{to:{type:te,required:!0},tag:{type:String,default:"a"},custom:Boolean,exact:Boolean,exactPath:Boolean,append:Boolean,replace:Boolean,activeClass:String,exactActiveClass:String,ariaCurrentValue:{type:String,default:"page"},event:{type:ne,default:"click"}},render:function(e){var t=this,n=this.$router,r=this.$route,s=n.resolve(this.to,r,this.append),o=s.location,a=s.route,c=s.href,u={},l=n.options.linkActiveClass,h=n.options.linkExactActiveClass,d=null==l?"router-link-active":l,f=null==h?"router-link-exact-active":h,m=null==this.activeClass?d:this.activeClass,g=null==this.exactActiveClass?f:this.exactActiveClass,v=a.redirectedFrom?p(null,J(a.redirectedFrom),null,n):a;u[g]=b(r,v,this.exactPath),u[m]=this.exact||this.exactPath?u[g]:_(r,v);var y=u[g]?this.ariaCurrentValue:null,w=function(e){se(e)&&(t.replace?n.replace(o,ie):n.push(o,ie))},I={click:se};Array.isArray(this.event)?this.event.forEach((function(e){I[e]=w})):I[this.event]=w;var S={class:u},T=!this.$scopedSlots.$hasNormal&&this.$scopedSlots.default&&this.$scopedSlots.default({href:c,route:a,navigate:w,isActive:u[m],isExactActive:u[g]});if(T){if(1===T.length)return T[0];if(T.length>1||!T.length)return 0===T.length?e():e("span",{},T)}if("a"===this.tag)S.on=I,S.attrs={href:c,"aria-current":y};else{var E=oe(this.$slots.default);if(E){E.isStatic=!1;var k=E.data=i({},E.data);for(var C in k.on=k.on||{},k.on){var x=k.on[C];C in I&&(k.on[C]=Array.isArray(x)?x:[x])}for(var A in I)A in k.on?k.on[A].push(I[A]):k.on[A]=w;var O=E.data.attrs=i({},E.data.attrs);O.href=c,O["aria-current"]=y}else S.on=I}return e(this.tag,S,this.$slots.default)}};function se(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){var t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function oe(e){if(e)for(var t,n=0;n<e.length;n++){if(t=e[n],"a"===t.tag)return t;if(t.children&&(t=oe(t.children)))return t}}function ae(e){if(!ae.installed||ee!==e){ae.installed=!0,ee=e;var t=function(e){return void 0!==e},n=function(e,n){var i=e.$options._parentVnode;t(i)&&t(i=i.data)&&t(i=i.registerRouteInstance)&&i(e,n)};e.mixin({beforeCreate:function(){t(this.$options.router)?(this._routerRoot=this,this._router=this.$options.router,this._router.init(this),e.util.defineReactive(this,"_route",this._router.history.current)):this._routerRoot=this.$parent&&this.$parent._routerRoot||this,n(this,this)},destroyed:function(){n(this)}}),Object.defineProperty(e.prototype,"$router",{get:function(){return this._routerRoot._router}}),Object.defineProperty(e.prototype,"$route",{get:function(){return this._routerRoot._route}}),e.component("RouterView",T),e.component("RouterLink",re);var i=e.config.optionMergeStrategies;i.beforeRouteEnter=i.beforeRouteLeave=i.beforeRouteUpdate=i.created}}var ce="undefined"!==typeof window;function ue(e,t,n,i,r){var s=t||[],o=n||Object.create(null),a=i||Object.create(null);e.forEach((function(e){le(s,o,a,e,r)}));for(var c=0,u=s.length;c<u;c++)"*"===s[c]&&(s.push(s.splice(c,1)[0]),u--,c--);return{pathList:s,pathMap:o,nameMap:a}}function le(e,t,n,i,r,s){var o=i.path,a=i.name;var c=i.pathToRegexpOptions||{},u=de(o,r,c.strict);"boolean"===typeof i.caseSensitive&&(c.sensitive=i.caseSensitive);var l={path:u,regex:he(u,c),components:i.components||{default:i.component},alias:i.alias?"string"===typeof i.alias?[i.alias]:i.alias:[],instances:{},enteredCbs:{},name:a,parent:r,matchAs:s,redirect:i.redirect,beforeEnter:i.beforeEnter,meta:i.meta||{},props:null==i.props?{}:i.components?i.props:{default:i.props}};if(i.children&&i.children.forEach((function(i){var r=s?A(s+"/"+i.path):void 0;le(e,t,n,i,l,r)})),t[l.path]||(e.push(l.path),t[l.path]=l),void 0!==i.alias)for(var h=Array.isArray(i.alias)?i.alias:[i.alias],d=0;d<h.length;++d){var f=h[d];0;var p={path:f,children:i.children};le(e,t,n,p,r,l.path||"/")}a&&(n[a]||(n[a]=l))}function he(e,t){var n=N(e,[],t);return n}function de(e,t,n){return n||(e=e.replace(/\/$/,"")),"/"===e[0]||null==t?e:A(t.path+"/"+e)}function fe(e,t){var n=ue(e),i=n.pathList,r=n.pathMap,s=n.nameMap;function o(e){ue(e,i,r,s)}function a(e,t){var n="object"!==typeof e?s[e]:void 0;ue([t||e],i,r,s,n),n&&n.alias.length&&ue(n.alias.map((function(e){return{path:e,children:[t]}})),i,r,s,n)}function c(){return i.map((function(e){return r[e]}))}function u(e,n,o){var a=J(e,n,!1,t),c=a.name;if(c){var u=s[c];if(!u)return d(null,a);var l=u.regex.keys.filter((function(e){return!e.optional})).map((function(e){return e.name}));if("object"!==typeof a.params&&(a.params={}),n&&"object"===typeof n.params)for(var h in n.params)!(h in a.params)&&l.indexOf(h)>-1&&(a.params[h]=n.params[h]);return a.path=X(u.path,a.params,'named route "'+c+'"'),d(u,a,o)}if(a.path){a.params={};for(var f=0;f<i.length;f++){var p=i[f],m=r[p];if(pe(m.regex,a.path,a.params))return d(m,a,o)}}return d(null,a)}function l(e,n){var i=e.redirect,r="function"===typeof i?i(p(e,n,null,t)):i;if("string"===typeof r&&(r={path:r}),!r||"object"!==typeof r)return d(null,n);var o=r,a=o.name,c=o.path,l=n.query,h=n.hash,f=n.params;if(l=o.hasOwnProperty("query")?o.query:l,h=o.hasOwnProperty("hash")?o.hash:h,f=o.hasOwnProperty("params")?o.params:f,a){s[a];return u({_normalized:!0,name:a,query:l,hash:h,params:f},void 0,n)}if(c){var m=me(c,e),g=X(m,f,'redirect route with path "'+m+'"');return u({_normalized:!0,path:g,query:l,hash:h},void 0,n)}return d(null,n)}function h(e,t,n){var i=X(n,t.params,'aliased route with path "'+n+'"'),r=u({_normalized:!0,path:i});if(r){var s=r.matched,o=s[s.length-1];return t.params=r.params,d(o,t)}return d(null,t)}function d(e,n,i){return e&&e.redirect?l(e,i||n):e&&e.matchAs?h(e,n,e.matchAs):p(e,n,i,t)}return{match:u,addRoute:a,getRoutes:c,addRoutes:o}}function pe(e,t,n){var i=t.match(e);if(!i)return!1;if(!n)return!0;for(var r=1,s=i.length;r<s;++r){var o=e.keys[r-1];o&&(n[o.name||"pathMatch"]="string"===typeof i[r]?c(i[r]):i[r])}return!0}function me(e,t){return C(e,t.parent?t.parent.path:"/",!0)}var ge=ce&&window.performance&&window.performance.now?window.performance:Date;function ve(){return ge.now().toFixed(3)}var ye=ve();function be(){return ye}function we(e){return ye=e}var _e=Object.create(null);function Ie(){"scrollRestoration"in window.history&&(window.history.scrollRestoration="manual");var e=window.location.protocol+"//"+window.location.host,t=window.location.href.replace(e,""),n=i({},window.history.state);return n.key=be(),window.history.replaceState(n,"",t),window.addEventListener("popstate",Ee),function(){window.removeEventListener("popstate",Ee)}}function Se(e,t,n,i){if(e.app){var r=e.options.scrollBehavior;r&&e.app.$nextTick((function(){var s=ke(),o=r.call(e,t,n,i?s:null);o&&("function"===typeof o.then?o.then((function(e){Re(e,s)})).catch((function(e){0})):Re(o,s))}))}}function Te(){var e=be();e&&(_e[e]={x:window.pageXOffset,y:window.pageYOffset})}function Ee(e){Te(),e.state&&e.state.key&&we(e.state.key)}function ke(){var e=be();if(e)return _e[e]}function Ce(e,t){var n=document.documentElement,i=n.getBoundingClientRect(),r=e.getBoundingClientRect();return{x:r.left-i.left-t.x,y:r.top-i.top-t.y}}function xe(e){return Ne(e.x)||Ne(e.y)}function Ae(e){return{x:Ne(e.x)?e.x:window.pageXOffset,y:Ne(e.y)?e.y:window.pageYOffset}}function Oe(e){return{x:Ne(e.x)?e.x:0,y:Ne(e.y)?e.y:0}}function Ne(e){return"number"===typeof e}var De=/^#\d/;function Re(e,t){var n="object"===typeof e;if(n&&"string"===typeof e.selector){var i=De.test(e.selector)?document.getElementById(e.selector.slice(1)):document.querySelector(e.selector);if(i){var r=e.offset&&"object"===typeof e.offset?e.offset:{};r=Oe(r),t=Ce(i,r)}else xe(e)&&(t=Ae(e))}else n&&xe(e)&&(t=Ae(e));t&&("scrollBehavior"in document.documentElement.style?window.scrollTo({left:t.x,top:t.y,behavior:e.behavior}):window.scrollTo(t.x,t.y))}var Le=ce&&function(){var e=window.navigator.userAgent;return(-1===e.indexOf("Android 2.")&&-1===e.indexOf("Android 4.0")||-1===e.indexOf("Mobile Safari")||-1!==e.indexOf("Chrome")||-1!==e.indexOf("Windows Phone"))&&(window.history&&"function"===typeof window.history.pushState)}();function Pe(e,t){Te();var n=window.history;try{if(t){var r=i({},n.state);r.key=be(),n.replaceState(r,"",e)}else n.pushState({key:we(ve())},"",e)}catch(s){window.location[t?"replace":"assign"](e)}}function $e(e){Pe(e,!0)}var Me={redirected:2,aborted:4,cancelled:8,duplicated:16};function Ve(e,t){return je(e,t,Me.redirected,'Redirected when going from "'+e.fullPath+'" to "'+qe(t)+'" via a navigation guard.')}function Fe(e,t){var n=je(e,t,Me.duplicated,'Avoided redundant navigation to current location: "'+e.fullPath+'".');return n.name="NavigationDuplicated",n}function Be(e,t){return je(e,t,Me.cancelled,'Navigation cancelled from "'+e.fullPath+'" to "'+t.fullPath+'" with a new navigation.')}function Ue(e,t){return je(e,t,Me.aborted,'Navigation aborted from "'+e.fullPath+'" to "'+t.fullPath+'" via a navigation guard.')}function je(e,t,n,i){var r=new Error(i);return r._isRouter=!0,r.from=e,r.to=t,r.type=n,r}var ze=["params","query","hash"];function qe(e){if("string"===typeof e)return e;if("path"in e)return e.path;var t={};return ze.forEach((function(n){n in e&&(t[n]=e[n])})),JSON.stringify(t,null,2)}function He(e){return Object.prototype.toString.call(e).indexOf("Error")>-1}function Ge(e,t){return He(e)&&e._isRouter&&(null==t||e.type===t)}function Ze(e,t,n){var i=function(r){r>=e.length?n():e[r]?t(e[r],(function(){i(r+1)})):i(r+1)};i(0)}function Ke(e){return function(t,n,i){var r=!1,s=0,o=null;We(e,(function(e,t,n,a){if("function"===typeof e&&void 0===e.cid){r=!0,s++;var c,u=Je((function(t){Xe(t)&&(t=t.default),e.resolved="function"===typeof t?t:ee.extend(t),n.components[a]=t,s--,s<=0&&i()})),l=Je((function(e){var t="Failed to resolve async component "+a+": "+e;o||(o=He(e)?e:new Error(t),i(o))}));try{c=e(u,l)}catch(d){l(d)}if(c)if("function"===typeof c.then)c.then(u,l);else{var h=c.component;h&&"function"===typeof h.then&&h.then(u,l)}}})),r||i()}}function We(e,t){return Qe(e.map((function(e){return Object.keys(e.components).map((function(n){return t(e.components[n],e.instances[n],e,n)}))})))}function Qe(e){return Array.prototype.concat.apply([],e)}var Ye="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag;function Xe(e){return e.__esModule||Ye&&"Module"===e[Symbol.toStringTag]}function Je(e){var t=!1;return function(){var n=[],i=arguments.length;while(i--)n[i]=arguments[i];if(!t)return t=!0,e.apply(this,n)}}var et=function(e,t){this.router=e,this.base=tt(t),this.current=g,this.pending=null,this.ready=!1,this.readyCbs=[],this.readyErrorCbs=[],this.errorCbs=[],this.listeners=[]};function tt(e){if(!e)if(ce){var t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^https?:\/\/[^\/]+/,"")}else e="/";return"/"!==e.charAt(0)&&(e="/"+e),e.replace(/\/$/,"")}function nt(e,t){var n,i=Math.max(e.length,t.length);for(n=0;n<i;n++)if(e[n]!==t[n])break;return{updated:t.slice(0,n),activated:t.slice(n),deactivated:e.slice(n)}}function it(e,t,n,i){var r=We(e,(function(e,i,r,s){var o=rt(e,t);if(o)return Array.isArray(o)?o.map((function(e){return n(e,i,r,s)})):n(o,i,r,s)}));return Qe(i?r.reverse():r)}function rt(e,t){return"function"!==typeof e&&(e=ee.extend(e)),e.options[t]}function st(e){return it(e,"beforeRouteLeave",at,!0)}function ot(e){return it(e,"beforeRouteUpdate",at)}function at(e,t){if(t)return function(){return e.apply(t,arguments)}}function ct(e){return it(e,"beforeRouteEnter",(function(e,t,n,i){return ut(e,n,i)}))}function ut(e,t,n){return function(i,r,s){return e(i,r,(function(e){"function"===typeof e&&(t.enteredCbs[n]||(t.enteredCbs[n]=[]),t.enteredCbs[n].push(e)),s(e)}))}}et.prototype.listen=function(e){this.cb=e},et.prototype.onReady=function(e,t){this.ready?e():(this.readyCbs.push(e),t&&this.readyErrorCbs.push(t))},et.prototype.onError=function(e){this.errorCbs.push(e)},et.prototype.transitionTo=function(e,t,n){var i,r=this;try{i=this.router.match(e,this.current)}catch(o){throw this.errorCbs.forEach((function(e){e(o)})),o}var s=this.current;this.confirmTransition(i,(function(){r.updateRoute(i),t&&t(i),r.ensureURL(),r.router.afterHooks.forEach((function(e){e&&e(i,s)})),r.ready||(r.ready=!0,r.readyCbs.forEach((function(e){e(i)})))}),(function(e){n&&n(e),e&&!r.ready&&(Ge(e,Me.redirected)&&s===g||(r.ready=!0,r.readyErrorCbs.forEach((function(t){t(e)}))))}))},et.prototype.confirmTransition=function(e,t,n){var i=this,r=this.current;this.pending=e;var s=function(e){!Ge(e)&&He(e)&&(i.errorCbs.length?i.errorCbs.forEach((function(t){t(e)})):console.error(e)),n&&n(e)},o=e.matched.length-1,a=r.matched.length-1;if(b(e,r)&&o===a&&e.matched[o]===r.matched[a])return this.ensureURL(),e.hash&&Se(this.router,r,e,!1),s(Fe(r,e));var c=nt(this.current.matched,e.matched),u=c.updated,l=c.deactivated,h=c.activated,d=[].concat(st(l),this.router.beforeHooks,ot(u),h.map((function(e){return e.beforeEnter})),Ke(h)),f=function(t,n){if(i.pending!==e)return s(Be(r,e));try{t(e,r,(function(t){!1===t?(i.ensureURL(!0),s(Ue(r,e))):He(t)?(i.ensureURL(!0),s(t)):"string"===typeof t||"object"===typeof t&&("string"===typeof t.path||"string"===typeof t.name)?(s(Ve(r,e)),"object"===typeof t&&t.replace?i.replace(t):i.push(t)):n(t)}))}catch(o){s(o)}};Ze(d,f,(function(){var n=ct(h),o=n.concat(i.router.resolveHooks);Ze(o,f,(function(){if(i.pending!==e)return s(Be(r,e));i.pending=null,t(e),i.router.app&&i.router.app.$nextTick((function(){S(e)}))}))}))},et.prototype.updateRoute=function(e){this.current=e,this.cb&&this.cb(e)},et.prototype.setupListeners=function(){},et.prototype.teardown=function(){this.listeners.forEach((function(e){e()})),this.listeners=[],this.current=g,this.pending=null};var lt=function(e){function t(t,n){e.call(this,t,n),this._startLocation=ht(this.base)}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,i=Le&&n;i&&this.listeners.push(Ie());var r=function(){var n=e.current,r=ht(e.base);e.current===g&&r===e._startLocation||e.transitionTo(r,(function(e){i&&Se(t,e,n,!0)}))};window.addEventListener("popstate",r),this.listeners.push((function(){window.removeEventListener("popstate",r)}))}},t.prototype.go=function(e){window.history.go(e)},t.prototype.push=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){Pe(A(i.base+e.fullPath)),Se(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){$e(A(i.base+e.fullPath)),Se(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.ensureURL=function(e){if(ht(this.base)!==this.current.fullPath){var t=A(this.base+this.current.fullPath);e?Pe(t):$e(t)}},t.prototype.getCurrentLocation=function(){return ht(this.base)},t}(et);function ht(e){var t=window.location.pathname,n=t.toLowerCase(),i=e.toLowerCase();return!e||n!==i&&0!==n.indexOf(A(i+"/"))||(t=t.slice(e.length)),(t||"/")+window.location.search+window.location.hash}var dt=function(e){function t(t,n,i){e.call(this,t,n),i&&ft(this.base)||pt()}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.setupListeners=function(){var e=this;if(!(this.listeners.length>0)){var t=this.router,n=t.options.scrollBehavior,i=Le&&n;i&&this.listeners.push(Ie());var r=function(){var t=e.current;pt()&&e.transitionTo(mt(),(function(n){i&&Se(e.router,n,t,!0),Le||yt(n.fullPath)}))},s=Le?"popstate":"hashchange";window.addEventListener(s,r),this.listeners.push((function(){window.removeEventListener(s,r)}))}},t.prototype.push=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){vt(e.fullPath),Se(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this,r=this,s=r.current;this.transitionTo(e,(function(e){yt(e.fullPath),Se(i.router,e,s,!1),t&&t(e)}),n)},t.prototype.go=function(e){window.history.go(e)},t.prototype.ensureURL=function(e){var t=this.current.fullPath;mt()!==t&&(e?vt(t):yt(t))},t.prototype.getCurrentLocation=function(){return mt()},t}(et);function ft(e){var t=ht(e);if(!/^\/#/.test(t))return window.location.replace(A(e+"/#"+t)),!0}function pt(){var e=mt();return"/"===e.charAt(0)||(yt("/"+e),!1)}function mt(){var e=window.location.href,t=e.indexOf("#");return t<0?"":(e=e.slice(t+1),e)}function gt(e){var t=window.location.href,n=t.indexOf("#"),i=n>=0?t.slice(0,n):t;return i+"#"+e}function vt(e){Le?Pe(gt(e)):window.location.hash=e}function yt(e){Le?$e(gt(e)):window.location.replace(gt(e))}var bt=function(e){function t(t,n){e.call(this,t,n),this.stack=[],this.index=-1}return e&&(t.__proto__=e),t.prototype=Object.create(e&&e.prototype),t.prototype.constructor=t,t.prototype.push=function(e,t,n){var i=this;this.transitionTo(e,(function(e){i.stack=i.stack.slice(0,i.index+1).concat(e),i.index++,t&&t(e)}),n)},t.prototype.replace=function(e,t,n){var i=this;this.transitionTo(e,(function(e){i.stack=i.stack.slice(0,i.index).concat(e),t&&t(e)}),n)},t.prototype.go=function(e){var t=this,n=this.index+e;if(!(n<0||n>=this.stack.length)){var i=this.stack[n];this.confirmTransition(i,(function(){var e=t.current;t.index=n,t.updateRoute(i),t.router.afterHooks.forEach((function(t){t&&t(i,e)}))}),(function(e){Ge(e,Me.duplicated)&&(t.index=n)}))}},t.prototype.getCurrentLocation=function(){var e=this.stack[this.stack.length-1];return e?e.fullPath:"/"},t.prototype.ensureURL=function(){},t}(et),wt=function(e){void 0===e&&(e={}),this.app=null,this.apps=[],this.options=e,this.beforeHooks=[],this.resolveHooks=[],this.afterHooks=[],this.matcher=fe(e.routes||[],this);var t=e.mode||"hash";switch(this.fallback="history"===t&&!Le&&!1!==e.fallback,this.fallback&&(t="hash"),ce||(t="abstract"),this.mode=t,t){case"history":this.history=new lt(this,e.base);break;case"hash":this.history=new dt(this,e.base,this.fallback);break;case"abstract":this.history=new bt(this,e.base);break;default:0}},_t={currentRoute:{configurable:!0}};wt.prototype.match=function(e,t,n){return this.matcher.match(e,t,n)},_t.currentRoute.get=function(){return this.history&&this.history.current},wt.prototype.init=function(e){var t=this;if(this.apps.push(e),e.$once("hook:destroyed",(function(){var n=t.apps.indexOf(e);n>-1&&t.apps.splice(n,1),t.app===e&&(t.app=t.apps[0]||null),t.app||t.history.teardown()})),!this.app){this.app=e;var n=this.history;if(n instanceof lt||n instanceof dt){var i=function(e){var i=n.current,r=t.options.scrollBehavior,s=Le&&r;s&&"fullPath"in e&&Se(t,e,i,!1)},r=function(e){n.setupListeners(),i(e)};n.transitionTo(n.getCurrentLocation(),r,r)}n.listen((function(e){t.apps.forEach((function(t){t._route=e}))}))}},wt.prototype.beforeEach=function(e){return St(this.beforeHooks,e)},wt.prototype.beforeResolve=function(e){return St(this.resolveHooks,e)},wt.prototype.afterEach=function(e){return St(this.afterHooks,e)},wt.prototype.onReady=function(e,t){this.history.onReady(e,t)},wt.prototype.onError=function(e){this.history.onError(e)},wt.prototype.push=function(e,t,n){var i=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){i.history.push(e,t,n)}));this.history.push(e,t,n)},wt.prototype.replace=function(e,t,n){var i=this;if(!t&&!n&&"undefined"!==typeof Promise)return new Promise((function(t,n){i.history.replace(e,t,n)}));this.history.replace(e,t,n)},wt.prototype.go=function(e){this.history.go(e)},wt.prototype.back=function(){this.go(-1)},wt.prototype.forward=function(){this.go(1)},wt.prototype.getMatchedComponents=function(e){var t=e?e.matched?e:this.resolve(e).route:this.currentRoute;return t?[].concat.apply([],t.matched.map((function(e){return Object.keys(e.components).map((function(t){return e.components[t]}))}))):[]},wt.prototype.resolve=function(e,t,n){t=t||this.history.current;var i=J(e,t,n,this),r=this.match(i,t),s=r.redirectedFrom||r.fullPath,o=this.history.base,a=Tt(o,s,this.mode);return{location:i,route:r,href:a,normalizedTo:i,resolved:r}},wt.prototype.getRoutes=function(){return this.matcher.getRoutes()},wt.prototype.addRoute=function(e,t){this.matcher.addRoute(e,t),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},wt.prototype.addRoutes=function(e){this.matcher.addRoutes(e),this.history.current!==g&&this.history.transitionTo(this.history.getCurrentLocation())},Object.defineProperties(wt.prototype,_t);var It=wt;function St(e,t){return e.push(t),function(){var n=e.indexOf(t);n>-1&&e.splice(n,1)}}function Tt(e,t,n){var i="hash"===n?"#"+t:t;return e?A(e+"/"+i):i}wt.install=ae,wt.version="3.6.5",wt.isNavigationFailure=Ge,wt.NavigationFailureType=Me,wt.START_LOCATION=g,ce&&window.Vue&&window.Vue.use(wt)},144:function(e,t,n){"use strict";n.d(t,{ZP:function(){return Qi}});
/*!
 * Vue.js v2.7.14
 * (c) 2014-2022 Evan You
 * Released under the MIT License.
 */
var i=Object.freeze({}),r=Array.isArray;function s(e){return void 0===e||null===e}function o(e){return void 0!==e&&null!==e}function a(e){return!0===e}function c(e){return!1===e}function u(e){return"string"===typeof e||"number"===typeof e||"symbol"===typeof e||"boolean"===typeof e}function l(e){return"function"===typeof e}function h(e){return null!==e&&"object"===typeof e}var d=Object.prototype.toString;function f(e){return"[object Object]"===d.call(e)}function p(e){return"[object RegExp]"===d.call(e)}function m(e){var t=parseFloat(String(e));return t>=0&&Math.floor(t)===t&&isFinite(e)}function g(e){return o(e)&&"function"===typeof e.then&&"function"===typeof e.catch}function v(e){return null==e?"":Array.isArray(e)||f(e)&&e.toString===d?JSON.stringify(e,null,2):String(e)}function y(e){var t=parseFloat(e);return isNaN(t)?e:t}function b(e,t){for(var n=Object.create(null),i=e.split(","),r=0;r<i.length;r++)n[i[r]]=!0;return t?function(e){return n[e.toLowerCase()]}:function(e){return n[e]}}b("slot,component",!0);var w=b("key,ref,slot,slot-scope,is");function _(e,t){var n=e.length;if(n){if(t===e[n-1])return void(e.length=n-1);var i=e.indexOf(t);if(i>-1)return e.splice(i,1)}}var I=Object.prototype.hasOwnProperty;function S(e,t){return I.call(e,t)}function T(e){var t=Object.create(null);return function(n){var i=t[n];return i||(t[n]=e(n))}}var E=/-(\w)/g,k=T((function(e){return e.replace(E,(function(e,t){return t?t.toUpperCase():""}))})),C=T((function(e){return e.charAt(0).toUpperCase()+e.slice(1)})),x=/\B([A-Z])/g,A=T((function(e){return e.replace(x,"-$1").toLowerCase()}));function O(e,t){function n(n){var i=arguments.length;return i?i>1?e.apply(t,arguments):e.call(t,n):e.call(t)}return n._length=e.length,n}function N(e,t){return e.bind(t)}var D=Function.prototype.bind?N:O;function R(e,t){t=t||0;var n=e.length-t,i=new Array(n);while(n--)i[n]=e[n+t];return i}function L(e,t){for(var n in t)e[n]=t[n];return e}function P(e){for(var t={},n=0;n<e.length;n++)e[n]&&L(t,e[n]);return t}function $(e,t,n){}var M=function(e,t,n){return!1},V=function(e){return e};function F(e,t){if(e===t)return!0;var n=h(e),i=h(t);if(!n||!i)return!n&&!i&&String(e)===String(t);try{var r=Array.isArray(e),s=Array.isArray(t);if(r&&s)return e.length===t.length&&e.every((function(e,n){return F(e,t[n])}));if(e instanceof Date&&t instanceof Date)return e.getTime()===t.getTime();if(r||s)return!1;var o=Object.keys(e),a=Object.keys(t);return o.length===a.length&&o.every((function(n){return F(e[n],t[n])}))}catch(c){return!1}}function B(e,t){for(var n=0;n<e.length;n++)if(F(e[n],t))return n;return-1}function U(e){var t=!1;return function(){t||(t=!0,e.apply(this,arguments))}}function j(e,t){return e===t?0===e&&1/e!==1/t:e===e||t===t}var z="data-server-rendered",q=["component","directive","filter"],H=["beforeCreate","created","beforeMount","mounted","beforeUpdate","updated","beforeDestroy","destroyed","activated","deactivated","errorCaptured","serverPrefetch","renderTracked","renderTriggered"],G={optionMergeStrategies:Object.create(null),silent:!1,productionTip:!1,devtools:!1,performance:!1,errorHandler:null,warnHandler:null,ignoredElements:[],keyCodes:Object.create(null),isReservedTag:M,isReservedAttr:M,isUnknownElement:M,getTagNamespace:$,parsePlatformTagName:V,mustUseProp:M,async:!0,_lifecycleHooks:H},Z=/a-zA-Z\u00B7\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u037D\u037F-\u1FFF\u200C-\u200D\u203F-\u2040\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD/;function K(e){var t=(e+"").charCodeAt(0);return 36===t||95===t}function W(e,t,n,i){Object.defineProperty(e,t,{value:n,enumerable:!!i,writable:!0,configurable:!0})}var Q=new RegExp("[^".concat(Z.source,".$_\\d]"));function Y(e){if(!Q.test(e)){var t=e.split(".");return function(e){for(var n=0;n<t.length;n++){if(!e)return;e=e[t[n]]}return e}}}var X="__proto__"in{},J="undefined"!==typeof window,ee=J&&window.navigator.userAgent.toLowerCase(),te=ee&&/msie|trident/.test(ee),ne=ee&&ee.indexOf("msie 9.0")>0,ie=ee&&ee.indexOf("edge/")>0;ee&&ee.indexOf("android");var re=ee&&/iphone|ipad|ipod|ios/.test(ee);ee&&/chrome\/\d+/.test(ee),ee&&/phantomjs/.test(ee);var se,oe=ee&&ee.match(/firefox\/(\d+)/),ae={}.watch,ce=!1;if(J)try{var ue={};Object.defineProperty(ue,"passive",{get:function(){ce=!0}}),window.addEventListener("test-passive",null,ue)}catch(Yo){}var le=function(){return void 0===se&&(se=!J&&"undefined"!==typeof n.g&&(n.g["process"]&&"server"===n.g["process"].env.VUE_ENV)),se},he=J&&window.__VUE_DEVTOOLS_GLOBAL_HOOK__;function de(e){return"function"===typeof e&&/native code/.test(e.toString())}var fe,pe="undefined"!==typeof Symbol&&de(Symbol)&&"undefined"!==typeof Reflect&&de(Reflect.ownKeys);fe="undefined"!==typeof Set&&de(Set)?Set:function(){function e(){this.set=Object.create(null)}return e.prototype.has=function(e){return!0===this.set[e]},e.prototype.add=function(e){this.set[e]=!0},e.prototype.clear=function(){this.set=Object.create(null)},e}();var me=null;function ge(e){void 0===e&&(e=null),e||me&&me._scope.off(),me=e,e&&e._scope.on()}var ve=function(){function e(e,t,n,i,r,s,o,a){this.tag=e,this.data=t,this.children=n,this.text=i,this.elm=r,this.ns=void 0,this.context=s,this.fnContext=void 0,this.fnOptions=void 0,this.fnScopeId=void 0,this.key=t&&t.key,this.componentOptions=o,this.componentInstance=void 0,this.parent=void 0,this.raw=!1,this.isStatic=!1,this.isRootInsert=!0,this.isComment=!1,this.isCloned=!1,this.isOnce=!1,this.asyncFactory=a,this.asyncMeta=void 0,this.isAsyncPlaceholder=!1}return Object.defineProperty(e.prototype,"child",{get:function(){return this.componentInstance},enumerable:!1,configurable:!0}),e}(),ye=function(e){void 0===e&&(e="");var t=new ve;return t.text=e,t.isComment=!0,t};function be(e){return new ve(void 0,void 0,void 0,String(e))}function we(e){var t=new ve(e.tag,e.data,e.children&&e.children.slice(),e.text,e.elm,e.context,e.componentOptions,e.asyncFactory);return t.ns=e.ns,t.isStatic=e.isStatic,t.key=e.key,t.isComment=e.isComment,t.fnContext=e.fnContext,t.fnOptions=e.fnOptions,t.fnScopeId=e.fnScopeId,t.asyncMeta=e.asyncMeta,t.isCloned=!0,t}var _e=0,Ie=[],Se=function(){for(var e=0;e<Ie.length;e++){var t=Ie[e];t.subs=t.subs.filter((function(e){return e})),t._pending=!1}Ie.length=0},Te=function(){function e(){this._pending=!1,this.id=_e++,this.subs=[]}return e.prototype.addSub=function(e){this.subs.push(e)},e.prototype.removeSub=function(e){this.subs[this.subs.indexOf(e)]=null,this._pending||(this._pending=!0,Ie.push(this))},e.prototype.depend=function(t){e.target&&e.target.addDep(this)},e.prototype.notify=function(e){var t=this.subs.filter((function(e){return e}));for(var n=0,i=t.length;n<i;n++){var r=t[n];0,r.update()}},e}();Te.target=null;var Ee=[];function ke(e){Ee.push(e),Te.target=e}function Ce(){Ee.pop(),Te.target=Ee[Ee.length-1]}var xe=Array.prototype,Ae=Object.create(xe),Oe=["push","pop","shift","unshift","splice","sort","reverse"];Oe.forEach((function(e){var t=xe[e];W(Ae,e,(function(){for(var n=[],i=0;i<arguments.length;i++)n[i]=arguments[i];var r,s=t.apply(this,n),o=this.__ob__;switch(e){case"push":case"unshift":r=n;break;case"splice":r=n.slice(2);break}return r&&o.observeArray(r),o.dep.notify(),s}))}));var Ne=Object.getOwnPropertyNames(Ae),De={},Re=!0;function Le(e){Re=e}var Pe={notify:$,depend:$,addSub:$,removeSub:$},$e=function(){function e(e,t,n){if(void 0===t&&(t=!1),void 0===n&&(n=!1),this.value=e,this.shallow=t,this.mock=n,this.dep=n?Pe:new Te,this.vmCount=0,W(e,"__ob__",this),r(e)){if(!n)if(X)e.__proto__=Ae;else for(var i=0,s=Ne.length;i<s;i++){var o=Ne[i];W(e,o,Ae[o])}t||this.observeArray(e)}else{var a=Object.keys(e);for(i=0;i<a.length;i++){o=a[i];Ve(e,o,De,void 0,t,n)}}}return e.prototype.observeArray=function(e){for(var t=0,n=e.length;t<n;t++)Me(e[t],!1,this.mock)},e}();function Me(e,t,n){return e&&S(e,"__ob__")&&e.__ob__ instanceof $e?e.__ob__:!Re||!n&&le()||!r(e)&&!f(e)||!Object.isExtensible(e)||e.__v_skip||He(e)||e instanceof ve?void 0:new $e(e,t,n)}function Ve(e,t,n,i,s,o){var a=new Te,c=Object.getOwnPropertyDescriptor(e,t);if(!c||!1!==c.configurable){var u=c&&c.get,l=c&&c.set;u&&!l||n!==De&&2!==arguments.length||(n=e[t]);var h=!s&&Me(n,!1,o);return Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){var t=u?u.call(e):n;return Te.target&&(a.depend(),h&&(h.dep.depend(),r(t)&&Ue(t))),He(t)&&!s?t.value:t},set:function(t){var i=u?u.call(e):n;if(j(i,t)){if(l)l.call(e,t);else{if(u)return;if(!s&&He(i)&&!He(t))return void(i.value=t);n=t}h=!s&&Me(t,!1,o),a.notify()}}}),a}}function Fe(e,t,n){if(!qe(e)){var i=e.__ob__;return r(e)&&m(t)?(e.length=Math.max(e.length,t),e.splice(t,1,n),i&&!i.shallow&&i.mock&&Me(n,!1,!0),n):t in e&&!(t in Object.prototype)?(e[t]=n,n):e._isVue||i&&i.vmCount?n:i?(Ve(i.value,t,n,void 0,i.shallow,i.mock),i.dep.notify(),n):(e[t]=n,n)}}function Be(e,t){if(r(e)&&m(t))e.splice(t,1);else{var n=e.__ob__;e._isVue||n&&n.vmCount||qe(e)||S(e,t)&&(delete e[t],n&&n.dep.notify())}}function Ue(e){for(var t=void 0,n=0,i=e.length;n<i;n++)t=e[n],t&&t.__ob__&&t.__ob__.dep.depend(),r(t)&&Ue(t)}function je(e){return ze(e,!0),W(e,"__v_isShallow",!0),e}function ze(e,t){if(!qe(e)){Me(e,t,le());0}}function qe(e){return!(!e||!e.__v_isReadonly)}function He(e){return!(!e||!0!==e.__v_isRef)}function Ge(e,t,n){Object.defineProperty(e,n,{enumerable:!0,configurable:!0,get:function(){var e=t[n];if(He(e))return e.value;var i=e&&e.__ob__;return i&&i.dep.depend(),e},set:function(e){var i=t[n];He(i)&&!He(e)?i.value=e:t[n]=e}})}var Ze="watcher";"".concat(Ze," callback"),"".concat(Ze," getter"),"".concat(Ze," cleanup");var Ke;var We=function(){function e(e){void 0===e&&(e=!1),this.detached=e,this.active=!0,this.effects=[],this.cleanups=[],this.parent=Ke,!e&&Ke&&(this.index=(Ke.scopes||(Ke.scopes=[])).push(this)-1)}return e.prototype.run=function(e){if(this.active){var t=Ke;try{return Ke=this,e()}finally{Ke=t}}else 0},e.prototype.on=function(){Ke=this},e.prototype.off=function(){Ke=this.parent},e.prototype.stop=function(e){if(this.active){var t=void 0,n=void 0;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].teardown();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(!this.detached&&this.parent&&!e){var i=this.parent.scopes.pop();i&&i!==this&&(this.parent.scopes[this.index]=i,i.index=this.index)}this.parent=void 0,this.active=!1}},e}();function Qe(e,t){void 0===t&&(t=Ke),t&&t.active&&t.effects.push(e)}function Ye(e){var t=e._provided,n=e.$parent&&e.$parent._provided;return n===t?e._provided=Object.create(n):t}var Xe=T((function(e){var t="&"===e.charAt(0);e=t?e.slice(1):e;var n="~"===e.charAt(0);e=n?e.slice(1):e;var i="!"===e.charAt(0);return e=i?e.slice(1):e,{name:e,once:n,capture:i,passive:t}}));function Je(e,t){function n(){var e=n.fns;if(!r(e))return Wt(e,null,arguments,t,"v-on handler");for(var i=e.slice(),s=0;s<i.length;s++)Wt(i[s],null,arguments,t,"v-on handler")}return n.fns=e,n}function et(e,t,n,i,r,o){var c,u,l,h;for(c in e)u=e[c],l=t[c],h=Xe(c),s(u)||(s(l)?(s(u.fns)&&(u=e[c]=Je(u,o)),a(h.once)&&(u=e[c]=r(h.name,u,h.capture)),n(h.name,u,h.capture,h.passive,h.params)):u!==l&&(l.fns=u,e[c]=l));for(c in t)s(e[c])&&(h=Xe(c),i(h.name,t[c],h.capture))}function tt(e,t,n){var i;e instanceof ve&&(e=e.data.hook||(e.data.hook={}));var r=e[t];function c(){n.apply(this,arguments),_(i.fns,c)}s(r)?i=Je([c]):o(r.fns)&&a(r.merged)?(i=r,i.fns.push(c)):i=Je([r,c]),i.merged=!0,e[t]=i}function nt(e,t,n){var i=t.options.props;if(!s(i)){var r={},a=e.attrs,c=e.props;if(o(a)||o(c))for(var u in i){var l=A(u);it(r,c,u,l,!0)||it(r,a,u,l,!1)}return r}}function it(e,t,n,i,r){if(o(t)){if(S(t,n))return e[n]=t[n],r||delete t[n],!0;if(S(t,i))return e[n]=t[i],r||delete t[i],!0}return!1}function rt(e){for(var t=0;t<e.length;t++)if(r(e[t]))return Array.prototype.concat.apply([],e);return e}function st(e){return u(e)?[be(e)]:r(e)?at(e):void 0}function ot(e){return o(e)&&o(e.text)&&c(e.isComment)}function at(e,t){var n,i,c,l,h=[];for(n=0;n<e.length;n++)i=e[n],s(i)||"boolean"===typeof i||(c=h.length-1,l=h[c],r(i)?i.length>0&&(i=at(i,"".concat(t||"","_").concat(n)),ot(i[0])&&ot(l)&&(h[c]=be(l.text+i[0].text),i.shift()),h.push.apply(h,i)):u(i)?ot(l)?h[c]=be(l.text+i):""!==i&&h.push(be(i)):ot(i)&&ot(l)?h[c]=be(l.text+i.text):(a(e._isVList)&&o(i.tag)&&s(i.key)&&o(t)&&(i.key="__vlist".concat(t,"_").concat(n,"__")),h.push(i)));return h}function ct(e,t){var n,i,s,a,c=null;if(r(e)||"string"===typeof e)for(c=new Array(e.length),n=0,i=e.length;n<i;n++)c[n]=t(e[n],n);else if("number"===typeof e)for(c=new Array(e),n=0;n<e;n++)c[n]=t(n+1,n);else if(h(e))if(pe&&e[Symbol.iterator]){c=[];var u=e[Symbol.iterator](),l=u.next();while(!l.done)c.push(t(l.value,c.length)),l=u.next()}else for(s=Object.keys(e),c=new Array(s.length),n=0,i=s.length;n<i;n++)a=s[n],c[n]=t(e[a],a,n);return o(c)||(c=[]),c._isVList=!0,c}function ut(e,t,n,i){var r,s=this.$scopedSlots[e];s?(n=n||{},i&&(n=L(L({},i),n)),r=s(n)||(l(t)?t():t)):r=this.$slots[e]||(l(t)?t():t);var o=n&&n.slot;return o?this.$createElement("template",{slot:o},r):r}function lt(e){return Si(this.$options,"filters",e,!0)||V}function ht(e,t){return r(e)?-1===e.indexOf(t):e!==t}function dt(e,t,n,i,r){var s=G.keyCodes[t]||n;return r&&i&&!G.keyCodes[t]?ht(r,i):s?ht(s,e):i?A(i)!==t:void 0===e}function ft(e,t,n,i,s){if(n)if(h(n)){r(n)&&(n=P(n));var o=void 0,a=function(r){if("class"===r||"style"===r||w(r))o=e;else{var a=e.attrs&&e.attrs.type;o=i||G.mustUseProp(t,a,r)?e.domProps||(e.domProps={}):e.attrs||(e.attrs={})}var c=k(r),u=A(r);if(!(c in o)&&!(u in o)&&(o[r]=n[r],s)){var l=e.on||(e.on={});l["update:".concat(r)]=function(e){n[r]=e}}};for(var c in n)a(c)}else;return e}function pt(e,t){var n=this._staticTrees||(this._staticTrees=[]),i=n[e];return i&&!t||(i=n[e]=this.$options.staticRenderFns[e].call(this._renderProxy,this._c,this),gt(i,"__static__".concat(e),!1)),i}function mt(e,t,n){return gt(e,"__once__".concat(t).concat(n?"_".concat(n):""),!0),e}function gt(e,t,n){if(r(e))for(var i=0;i<e.length;i++)e[i]&&"string"!==typeof e[i]&&vt(e[i],"".concat(t,"_").concat(i),n);else vt(e,t,n)}function vt(e,t,n){e.isStatic=!0,e.key=t,e.isOnce=n}function yt(e,t){if(t)if(f(t)){var n=e.on=e.on?L({},e.on):{};for(var i in t){var r=n[i],s=t[i];n[i]=r?[].concat(r,s):s}}else;return e}function bt(e,t,n,i){t=t||{$stable:!n};for(var s=0;s<e.length;s++){var o=e[s];r(o)?bt(o,t,n):o&&(o.proxy&&(o.fn.proxy=!0),t[o.key]=o.fn)}return i&&(t.$key=i),t}function wt(e,t){for(var n=0;n<t.length;n+=2){var i=t[n];"string"===typeof i&&i&&(e[t[n]]=t[n+1])}return e}function _t(e,t){return"string"===typeof e?t+e:e}function It(e){e._o=mt,e._n=y,e._s=v,e._l=ct,e._t=ut,e._q=F,e._i=B,e._m=pt,e._f=lt,e._k=dt,e._b=ft,e._v=be,e._e=ye,e._u=bt,e._g=yt,e._d=wt,e._p=_t}function St(e,t){if(!e||!e.length)return{};for(var n={},i=0,r=e.length;i<r;i++){var s=e[i],o=s.data;if(o&&o.attrs&&o.attrs.slot&&delete o.attrs.slot,s.context!==t&&s.fnContext!==t||!o||null==o.slot)(n.default||(n.default=[])).push(s);else{var a=o.slot,c=n[a]||(n[a]=[]);"template"===s.tag?c.push.apply(c,s.children||[]):c.push(s)}}for(var u in n)n[u].every(Tt)&&delete n[u];return n}function Tt(e){return e.isComment&&!e.asyncFactory||" "===e.text}function Et(e){return e.isComment&&e.asyncFactory}function kt(e,t,n,r){var s,o=Object.keys(n).length>0,a=t?!!t.$stable:!o,c=t&&t.$key;if(t){if(t._normalized)return t._normalized;if(a&&r&&r!==i&&c===r.$key&&!o&&!r.$hasNormal)return r;for(var u in s={},t)t[u]&&"$"!==u[0]&&(s[u]=Ct(e,n,u,t[u]))}else s={};for(var l in n)l in s||(s[l]=xt(n,l));return t&&Object.isExtensible(t)&&(t._normalized=s),W(s,"$stable",a),W(s,"$key",c),W(s,"$hasNormal",o),s}function Ct(e,t,n,i){var s=function(){var t=me;ge(e);var n=arguments.length?i.apply(null,arguments):i({});n=n&&"object"===typeof n&&!r(n)?[n]:st(n);var s=n&&n[0];return ge(t),n&&(!s||1===n.length&&s.isComment&&!Et(s))?void 0:n};return i.proxy&&Object.defineProperty(t,n,{get:s,enumerable:!0,configurable:!0}),s}function xt(e,t){return function(){return e[t]}}function At(e){var t=e.$options,n=t.setup;if(n){var i=e._setupContext=Ot(e);ge(e),ke();var r=Wt(n,null,[e._props||je({}),i],e,"setup");if(Ce(),ge(),l(r))t.render=r;else if(h(r))if(e._setupState=r,r.__sfc){var s=e._setupProxy={};for(var o in r)"__sfc"!==o&&Ge(s,r,o)}else for(var o in r)K(o)||Ge(e,r,o);else 0}}function Ot(e){return{get attrs(){if(!e._attrsProxy){var t=e._attrsProxy={};W(t,"_v_attr_proxy",!0),Nt(t,e.$attrs,i,e,"$attrs")}return e._attrsProxy},get listeners(){if(!e._listenersProxy){var t=e._listenersProxy={};Nt(t,e.$listeners,i,e,"$listeners")}return e._listenersProxy},get slots(){return Rt(e)},emit:D(e.$emit,e),expose:function(t){t&&Object.keys(t).forEach((function(n){return Ge(e,t,n)}))}}}function Nt(e,t,n,i,r){var s=!1;for(var o in t)o in e?t[o]!==n[o]&&(s=!0):(s=!0,Dt(e,o,i,r));for(var o in e)o in t||(s=!0,delete e[o]);return s}function Dt(e,t,n,i){Object.defineProperty(e,t,{enumerable:!0,configurable:!0,get:function(){return n[i][t]}})}function Rt(e){return e._slotsProxy||Lt(e._slotsProxy={},e.$scopedSlots),e._slotsProxy}function Lt(e,t){for(var n in t)e[n]=t[n];for(var n in e)n in t||delete e[n]}function Pt(e){e._vnode=null,e._staticTrees=null;var t=e.$options,n=e.$vnode=t._parentVnode,r=n&&n.context;e.$slots=St(t._renderChildren,r),e.$scopedSlots=n?kt(e.$parent,n.data.scopedSlots,e.$slots):i,e._c=function(t,n,i,r){return qt(e,t,n,i,r,!1)},e.$createElement=function(t,n,i,r){return qt(e,t,n,i,r,!0)};var s=n&&n.data;Ve(e,"$attrs",s&&s.attrs||i,null,!0),Ve(e,"$listeners",t._parentListeners||i,null,!0)}var $t=null;function Mt(e){It(e.prototype),e.prototype.$nextTick=function(e){return cn(e,this)},e.prototype._render=function(){var e,t=this,n=t.$options,i=n.render,s=n._parentVnode;s&&t._isMounted&&(t.$scopedSlots=kt(t.$parent,s.data.scopedSlots,t.$slots,t.$scopedSlots),t._slotsProxy&&Lt(t._slotsProxy,t.$scopedSlots)),t.$vnode=s;try{ge(t),$t=t,e=i.call(t._renderProxy,t.$createElement)}catch(Yo){Kt(Yo,t,"render"),e=t._vnode}finally{$t=null,ge()}return r(e)&&1===e.length&&(e=e[0]),e instanceof ve||(e=ye()),e.parent=s,e}}function Vt(e,t){return(e.__esModule||pe&&"Module"===e[Symbol.toStringTag])&&(e=e.default),h(e)?t.extend(e):e}function Ft(e,t,n,i,r){var s=ye();return s.asyncFactory=e,s.asyncMeta={data:t,context:n,children:i,tag:r},s}function Bt(e,t){if(a(e.error)&&o(e.errorComp))return e.errorComp;if(o(e.resolved))return e.resolved;var n=$t;if(n&&o(e.owners)&&-1===e.owners.indexOf(n)&&e.owners.push(n),a(e.loading)&&o(e.loadingComp))return e.loadingComp;if(n&&!o(e.owners)){var i=e.owners=[n],r=!0,c=null,u=null;n.$on("hook:destroyed",(function(){return _(i,n)}));var l=function(e){for(var t=0,n=i.length;t<n;t++)i[t].$forceUpdate();e&&(i.length=0,null!==c&&(clearTimeout(c),c=null),null!==u&&(clearTimeout(u),u=null))},d=U((function(n){e.resolved=Vt(n,t),r?i.length=0:l(!0)})),f=U((function(t){o(e.errorComp)&&(e.error=!0,l(!0))})),p=e(d,f);return h(p)&&(g(p)?s(e.resolved)&&p.then(d,f):g(p.component)&&(p.component.then(d,f),o(p.error)&&(e.errorComp=Vt(p.error,t)),o(p.loading)&&(e.loadingComp=Vt(p.loading,t),0===p.delay?e.loading=!0:c=setTimeout((function(){c=null,s(e.resolved)&&s(e.error)&&(e.loading=!0,l(!1))}),p.delay||200)),o(p.timeout)&&(u=setTimeout((function(){u=null,s(e.resolved)&&f(null)}),p.timeout)))),r=!1,e.loading?e.loadingComp:e.resolved}}function Ut(e){if(r(e))for(var t=0;t<e.length;t++){var n=e[t];if(o(n)&&(o(n.componentOptions)||Et(n)))return n}}var jt=1,zt=2;function qt(e,t,n,i,s,o){return(r(n)||u(n))&&(s=i,i=n,n=void 0),a(o)&&(s=zt),Ht(e,t,n,i,s)}function Ht(e,t,n,i,s){if(o(n)&&o(n.__ob__))return ye();if(o(n)&&o(n.is)&&(t=n.is),!t)return ye();var a,c;if(r(i)&&l(i[0])&&(n=n||{},n.scopedSlots={default:i[0]},i.length=0),s===zt?i=st(i):s===jt&&(i=rt(i)),"string"===typeof t){var u=void 0;c=e.$vnode&&e.$vnode.ns||G.getTagNamespace(t),a=G.isReservedTag(t)?new ve(G.parsePlatformTagName(t),n,i,void 0,void 0,e):n&&n.pre||!o(u=Si(e.$options,"components",t))?new ve(t,n,i,void 0,void 0,e):oi(u,n,e,i,t)}else a=oi(t,n,e,i);return r(a)?a:o(a)?(o(c)&&Gt(a,c),o(n)&&Zt(n),a):ye()}function Gt(e,t,n){if(e.ns=t,"foreignObject"===e.tag&&(t=void 0,n=!0),o(e.children))for(var i=0,r=e.children.length;i<r;i++){var c=e.children[i];o(c.tag)&&(s(c.ns)||a(n)&&"svg"!==c.tag)&&Gt(c,t,n)}}function Zt(e){h(e.style)&&fn(e.style),h(e.class)&&fn(e.class)}function Kt(e,t,n){ke();try{if(t){var i=t;while(i=i.$parent){var r=i.$options.errorCaptured;if(r)for(var s=0;s<r.length;s++)try{var o=!1===r[s].call(i,e,t,n);if(o)return}catch(Yo){Qt(Yo,i,"errorCaptured hook")}}}Qt(e,t,n)}finally{Ce()}}function Wt(e,t,n,i,r){var s;try{s=n?e.apply(t,n):e.call(t),s&&!s._isVue&&g(s)&&!s._handled&&(s.catch((function(e){return Kt(e,i,r+" (Promise/async)")})),s._handled=!0)}catch(Yo){Kt(Yo,i,r)}return s}function Qt(e,t,n){if(G.errorHandler)try{return G.errorHandler.call(null,e,t,n)}catch(Yo){Yo!==e&&Yt(Yo,null,"config.errorHandler")}Yt(e,t,n)}function Yt(e,t,n){if(!J||"undefined"===typeof console)throw e;console.error(e)}var Xt,Jt=!1,en=[],tn=!1;function nn(){tn=!1;var e=en.slice(0);en.length=0;for(var t=0;t<e.length;t++)e[t]()}if("undefined"!==typeof Promise&&de(Promise)){var rn=Promise.resolve();Xt=function(){rn.then(nn),re&&setTimeout($)},Jt=!0}else if(te||"undefined"===typeof MutationObserver||!de(MutationObserver)&&"[object MutationObserverConstructor]"!==MutationObserver.toString())Xt="undefined"!==typeof setImmediate&&de(setImmediate)?function(){setImmediate(nn)}:function(){setTimeout(nn,0)};else{var sn=1,on=new MutationObserver(nn),an=document.createTextNode(String(sn));on.observe(an,{characterData:!0}),Xt=function(){sn=(sn+1)%2,an.data=String(sn)},Jt=!0}function cn(e,t){var n;if(en.push((function(){if(e)try{e.call(t)}catch(Yo){Kt(Yo,t,"nextTick")}else n&&n(t)})),tn||(tn=!0,Xt()),!e&&"undefined"!==typeof Promise)return new Promise((function(e){n=e}))}function un(e){return function(t,n){if(void 0===n&&(n=me),n)return ln(n,e,t)}}function ln(e,t,n){var i=e.$options;i[t]=mi(i[t],n)}un("beforeMount"),un("mounted"),un("beforeUpdate"),un("updated"),un("beforeDestroy"),un("destroyed"),un("activated"),un("deactivated"),un("serverPrefetch"),un("renderTracked"),un("renderTriggered"),un("errorCaptured");var hn="2.7.14";var dn=new fe;function fn(e){return pn(e,dn),dn.clear(),e}function pn(e,t){var n,i,s=r(e);if(!(!s&&!h(e)||e.__v_skip||Object.isFrozen(e)||e instanceof ve)){if(e.__ob__){var o=e.__ob__.dep.id;if(t.has(o))return;t.add(o)}if(s){n=e.length;while(n--)pn(e[n],t)}else if(He(e))pn(e.value,t);else{i=Object.keys(e),n=i.length;while(n--)pn(e[i[n]],t)}}}var mn,gn=0,vn=function(){function e(e,t,n,i,r){Qe(this,Ke&&!Ke._vm?Ke:e?e._scope:void 0),(this.vm=e)&&r&&(e._watcher=this),i?(this.deep=!!i.deep,this.user=!!i.user,this.lazy=!!i.lazy,this.sync=!!i.sync,this.before=i.before):this.deep=this.user=this.lazy=this.sync=!1,this.cb=n,this.id=++gn,this.active=!0,this.post=!1,this.dirty=this.lazy,this.deps=[],this.newDeps=[],this.depIds=new fe,this.newDepIds=new fe,this.expression="",l(t)?this.getter=t:(this.getter=Y(t),this.getter||(this.getter=$)),this.value=this.lazy?void 0:this.get()}return e.prototype.get=function(){var e;ke(this);var t=this.vm;try{e=this.getter.call(t,t)}catch(Yo){if(!this.user)throw Yo;Kt(Yo,t,'getter for watcher "'.concat(this.expression,'"'))}finally{this.deep&&fn(e),Ce(),this.cleanupDeps()}return e},e.prototype.addDep=function(e){var t=e.id;this.newDepIds.has(t)||(this.newDepIds.add(t),this.newDeps.push(e),this.depIds.has(t)||e.addSub(this))},e.prototype.cleanupDeps=function(){var e=this.deps.length;while(e--){var t=this.deps[e];this.newDepIds.has(t.id)||t.removeSub(this)}var n=this.depIds;this.depIds=this.newDepIds,this.newDepIds=n,this.newDepIds.clear(),n=this.deps,this.deps=this.newDeps,this.newDeps=n,this.newDeps.length=0},e.prototype.update=function(){this.lazy?this.dirty=!0:this.sync?this.run():Wn(this)},e.prototype.run=function(){if(this.active){var e=this.get();if(e!==this.value||h(e)||this.deep){var t=this.value;if(this.value=e,this.user){var n='callback for watcher "'.concat(this.expression,'"');Wt(this.cb,this.vm,[e,t],this.vm,n)}else this.cb.call(this.vm,e,t)}}},e.prototype.evaluate=function(){this.value=this.get(),this.dirty=!1},e.prototype.depend=function(){var e=this.deps.length;while(e--)this.deps[e].depend()},e.prototype.teardown=function(){if(this.vm&&!this.vm._isBeingDestroyed&&_(this.vm._scope.effects,this),this.active){var e=this.deps.length;while(e--)this.deps[e].removeSub(this);this.active=!1,this.onStop&&this.onStop()}},e}();function yn(e){e._events=Object.create(null),e._hasHookEvent=!1;var t=e.$options._parentListeners;t&&In(e,t)}function bn(e,t){mn.$on(e,t)}function wn(e,t){mn.$off(e,t)}function _n(e,t){var n=mn;return function i(){var r=t.apply(null,arguments);null!==r&&n.$off(e,i)}}function In(e,t,n){mn=e,et(t,n||{},bn,wn,_n,e),mn=void 0}function Sn(e){var t=/^hook:/;e.prototype.$on=function(e,n){var i=this;if(r(e))for(var s=0,o=e.length;s<o;s++)i.$on(e[s],n);else(i._events[e]||(i._events[e]=[])).push(n),t.test(e)&&(i._hasHookEvent=!0);return i},e.prototype.$once=function(e,t){var n=this;function i(){n.$off(e,i),t.apply(n,arguments)}return i.fn=t,n.$on(e,i),n},e.prototype.$off=function(e,t){var n=this;if(!arguments.length)return n._events=Object.create(null),n;if(r(e)){for(var i=0,s=e.length;i<s;i++)n.$off(e[i],t);return n}var o,a=n._events[e];if(!a)return n;if(!t)return n._events[e]=null,n;var c=a.length;while(c--)if(o=a[c],o===t||o.fn===t){a.splice(c,1);break}return n},e.prototype.$emit=function(e){var t=this,n=t._events[e];if(n){n=n.length>1?R(n):n;for(var i=R(arguments,1),r='event handler for "'.concat(e,'"'),s=0,o=n.length;s<o;s++)Wt(n[s],t,i,t,r)}return t}}var Tn=null;function En(e){var t=Tn;return Tn=e,function(){Tn=t}}function kn(e){var t=e.$options,n=t.parent;if(n&&!t.abstract){while(n.$options.abstract&&n.$parent)n=n.$parent;n.$children.push(e)}e.$parent=n,e.$root=n?n.$root:e,e.$children=[],e.$refs={},e._provided=n?n._provided:Object.create(null),e._watcher=null,e._inactive=null,e._directInactive=!1,e._isMounted=!1,e._isDestroyed=!1,e._isBeingDestroyed=!1}function Cn(e){e.prototype._update=function(e,t){var n=this,i=n.$el,r=n._vnode,s=En(n);n._vnode=e,n.$el=r?n.__patch__(r,e):n.__patch__(n.$el,e,t,!1),s(),i&&(i.__vue__=null),n.$el&&(n.$el.__vue__=n);var o=n;while(o&&o.$vnode&&o.$parent&&o.$vnode===o.$parent._vnode)o.$parent.$el=o.$el,o=o.$parent},e.prototype.$forceUpdate=function(){var e=this;e._watcher&&e._watcher.update()},e.prototype.$destroy=function(){var e=this;if(!e._isBeingDestroyed){Rn(e,"beforeDestroy"),e._isBeingDestroyed=!0;var t=e.$parent;!t||t._isBeingDestroyed||e.$options.abstract||_(t.$children,e),e._scope.stop(),e._data.__ob__&&e._data.__ob__.vmCount--,e._isDestroyed=!0,e.__patch__(e._vnode,null),Rn(e,"destroyed"),e.$off(),e.$el&&(e.$el.__vue__=null),e.$vnode&&(e.$vnode.parent=null)}}}function xn(e,t,n){var i;e.$el=t,e.$options.render||(e.$options.render=ye),Rn(e,"beforeMount"),i=function(){e._update(e._render(),n)};var r={before:function(){e._isMounted&&!e._isDestroyed&&Rn(e,"beforeUpdate")}};new vn(e,i,$,r,!0),n=!1;var s=e._preWatchers;if(s)for(var o=0;o<s.length;o++)s[o].run();return null==e.$vnode&&(e._isMounted=!0,Rn(e,"mounted")),e}function An(e,t,n,r,s){var o=r.data.scopedSlots,a=e.$scopedSlots,c=!!(o&&!o.$stable||a!==i&&!a.$stable||o&&e.$scopedSlots.$key!==o.$key||!o&&e.$scopedSlots.$key),u=!!(s||e.$options._renderChildren||c),l=e.$vnode;e.$options._parentVnode=r,e.$vnode=r,e._vnode&&(e._vnode.parent=r),e.$options._renderChildren=s;var h=r.data.attrs||i;e._attrsProxy&&Nt(e._attrsProxy,h,l.data&&l.data.attrs||i,e,"$attrs")&&(u=!0),e.$attrs=h,n=n||i;var d=e.$options._parentListeners;if(e._listenersProxy&&Nt(e._listenersProxy,n,d||i,e,"$listeners"),e.$listeners=e.$options._parentListeners=n,In(e,n,d),t&&e.$options.props){Le(!1);for(var f=e._props,p=e.$options._propKeys||[],m=0;m<p.length;m++){var g=p[m],v=e.$options.props;f[g]=Ti(g,v,t,e)}Le(!0),e.$options.propsData=t}u&&(e.$slots=St(s,r.context),e.$forceUpdate())}function On(e){while(e&&(e=e.$parent))if(e._inactive)return!0;return!1}function Nn(e,t){if(t){if(e._directInactive=!1,On(e))return}else if(e._directInactive)return;if(e._inactive||null===e._inactive){e._inactive=!1;for(var n=0;n<e.$children.length;n++)Nn(e.$children[n]);Rn(e,"activated")}}function Dn(e,t){if((!t||(e._directInactive=!0,!On(e)))&&!e._inactive){e._inactive=!0;for(var n=0;n<e.$children.length;n++)Dn(e.$children[n]);Rn(e,"deactivated")}}function Rn(e,t,n,i){void 0===i&&(i=!0),ke();var r=me;i&&ge(e);var s=e.$options[t],o="".concat(t," hook");if(s)for(var a=0,c=s.length;a<c;a++)Wt(s[a],e,n||null,e,o);e._hasHookEvent&&e.$emit("hook:"+t),i&&ge(r),Ce()}var Ln=[],Pn=[],$n={},Mn=!1,Vn=!1,Fn=0;function Bn(){Fn=Ln.length=Pn.length=0,$n={},Mn=Vn=!1}var Un=0,jn=Date.now;if(J&&!te){var zn=window.performance;zn&&"function"===typeof zn.now&&jn()>document.createEvent("Event").timeStamp&&(jn=function(){return zn.now()})}var qn=function(e,t){if(e.post){if(!t.post)return 1}else if(t.post)return-1;return e.id-t.id};function Hn(){var e,t;for(Un=jn(),Vn=!0,Ln.sort(qn),Fn=0;Fn<Ln.length;Fn++)e=Ln[Fn],e.before&&e.before(),t=e.id,$n[t]=null,e.run();var n=Pn.slice(),i=Ln.slice();Bn(),Kn(n),Gn(i),Se(),he&&G.devtools&&he.emit("flush")}function Gn(e){var t=e.length;while(t--){var n=e[t],i=n.vm;i&&i._watcher===n&&i._isMounted&&!i._isDestroyed&&Rn(i,"updated")}}function Zn(e){e._inactive=!1,Pn.push(e)}function Kn(e){for(var t=0;t<e.length;t++)e[t]._inactive=!0,Nn(e[t],!0)}function Wn(e){var t=e.id;if(null==$n[t]&&(e!==Te.target||!e.noRecurse)){if($n[t]=!0,Vn){var n=Ln.length-1;while(n>Fn&&Ln[n].id>e.id)n--;Ln.splice(n+1,0,e)}else Ln.push(e);Mn||(Mn=!0,cn(Hn))}}function Qn(e){var t=e.$options.provide;if(t){var n=l(t)?t.call(e):t;if(!h(n))return;for(var i=Ye(e),r=pe?Reflect.ownKeys(n):Object.keys(n),s=0;s<r.length;s++){var o=r[s];Object.defineProperty(i,o,Object.getOwnPropertyDescriptor(n,o))}}}function Yn(e){var t=Xn(e.$options.inject,e);t&&(Le(!1),Object.keys(t).forEach((function(n){Ve(e,n,t[n])})),Le(!0))}function Xn(e,t){if(e){for(var n=Object.create(null),i=pe?Reflect.ownKeys(e):Object.keys(e),r=0;r<i.length;r++){var s=i[r];if("__ob__"!==s){var o=e[s].from;if(o in t._provided)n[s]=t._provided[o];else if("default"in e[s]){var a=e[s].default;n[s]=l(a)?a.call(t):a}else 0}}return n}}function Jn(e,t,n,s,o){var c,u=this,l=o.options;S(s,"_uid")?(c=Object.create(s),c._original=s):(c=s,s=s._original);var h=a(l._compiled),d=!h;this.data=e,this.props=t,this.children=n,this.parent=s,this.listeners=e.on||i,this.injections=Xn(l.inject,s),this.slots=function(){return u.$slots||kt(s,e.scopedSlots,u.$slots=St(n,s)),u.$slots},Object.defineProperty(this,"scopedSlots",{enumerable:!0,get:function(){return kt(s,e.scopedSlots,this.slots())}}),h&&(this.$options=l,this.$slots=this.slots(),this.$scopedSlots=kt(s,e.scopedSlots,this.$slots)),l._scopeId?this._c=function(e,t,n,i){var o=qt(c,e,t,n,i,d);return o&&!r(o)&&(o.fnScopeId=l._scopeId,o.fnContext=s),o}:this._c=function(e,t,n,i){return qt(c,e,t,n,i,d)}}function ei(e,t,n,s,a){var c=e.options,u={},l=c.props;if(o(l))for(var h in l)u[h]=Ti(h,l,t||i);else o(n.attrs)&&ni(u,n.attrs),o(n.props)&&ni(u,n.props);var d=new Jn(n,u,a,s,e),f=c.render.call(null,d._c,d);if(f instanceof ve)return ti(f,n,d.parent,c,d);if(r(f)){for(var p=st(f)||[],m=new Array(p.length),g=0;g<p.length;g++)m[g]=ti(p[g],n,d.parent,c,d);return m}}function ti(e,t,n,i,r){var s=we(e);return s.fnContext=n,s.fnOptions=i,t.slot&&((s.data||(s.data={})).slot=t.slot),s}function ni(e,t){for(var n in t)e[k(n)]=t[n]}function ii(e){return e.name||e.__name||e._componentTag}It(Jn.prototype);var ri={init:function(e,t){if(e.componentInstance&&!e.componentInstance._isDestroyed&&e.data.keepAlive){var n=e;ri.prepatch(n,n)}else{var i=e.componentInstance=ai(e,Tn);i.$mount(t?e.elm:void 0,t)}},prepatch:function(e,t){var n=t.componentOptions,i=t.componentInstance=e.componentInstance;An(i,n.propsData,n.listeners,t,n.children)},insert:function(e){var t=e.context,n=e.componentInstance;n._isMounted||(n._isMounted=!0,Rn(n,"mounted")),e.data.keepAlive&&(t._isMounted?Zn(n):Nn(n,!0))},destroy:function(e){var t=e.componentInstance;t._isDestroyed||(e.data.keepAlive?Dn(t,!0):t.$destroy())}},si=Object.keys(ri);function oi(e,t,n,i,r){if(!s(e)){var c=n.$options._base;if(h(e)&&(e=c.extend(e)),"function"===typeof e){var u;if(s(e.cid)&&(u=e,e=Bt(u,c),void 0===e))return Ft(u,t,n,i,r);t=t||{},Ki(e),o(t.model)&&li(e.options,t);var l=nt(t,e,r);if(a(e.options.functional))return ei(e,l,t,n,i);var d=t.on;if(t.on=t.nativeOn,a(e.options.abstract)){var f=t.slot;t={},f&&(t.slot=f)}ci(t);var p=ii(e.options)||r,m=new ve("vue-component-".concat(e.cid).concat(p?"-".concat(p):""),t,void 0,void 0,void 0,n,{Ctor:e,propsData:l,listeners:d,tag:r,children:i},u);return m}}}function ai(e,t){var n={_isComponent:!0,_parentVnode:e,parent:t},i=e.data.inlineTemplate;return o(i)&&(n.render=i.render,n.staticRenderFns=i.staticRenderFns),new e.componentOptions.Ctor(n)}function ci(e){for(var t=e.hook||(e.hook={}),n=0;n<si.length;n++){var i=si[n],r=t[i],s=ri[i];r===s||r&&r._merged||(t[i]=r?ui(s,r):s)}}function ui(e,t){var n=function(n,i){e(n,i),t(n,i)};return n._merged=!0,n}function li(e,t){var n=e.model&&e.model.prop||"value",i=e.model&&e.model.event||"input";(t.attrs||(t.attrs={}))[n]=t.model.value;var s=t.on||(t.on={}),a=s[i],c=t.model.callback;o(a)?(r(a)?-1===a.indexOf(c):a!==c)&&(s[i]=[c].concat(a)):s[i]=c}var hi=$,di=G.optionMergeStrategies;function fi(e,t,n){if(void 0===n&&(n=!0),!t)return e;for(var i,r,s,o=pe?Reflect.ownKeys(t):Object.keys(t),a=0;a<o.length;a++)i=o[a],"__ob__"!==i&&(r=e[i],s=t[i],n&&S(e,i)?r!==s&&f(r)&&f(s)&&fi(r,s):Fe(e,i,s));return e}function pi(e,t,n){return n?function(){var i=l(t)?t.call(n,n):t,r=l(e)?e.call(n,n):e;return i?fi(i,r):r}:t?e?function(){return fi(l(t)?t.call(this,this):t,l(e)?e.call(this,this):e)}:t:e}function mi(e,t){var n=t?e?e.concat(t):r(t)?t:[t]:e;return n?gi(n):n}function gi(e){for(var t=[],n=0;n<e.length;n++)-1===t.indexOf(e[n])&&t.push(e[n]);return t}function vi(e,t,n,i){var r=Object.create(e||null);return t?L(r,t):r}di.data=function(e,t,n){return n?pi(e,t,n):t&&"function"!==typeof t?e:pi(e,t)},H.forEach((function(e){di[e]=mi})),q.forEach((function(e){di[e+"s"]=vi})),di.watch=function(e,t,n,i){if(e===ae&&(e=void 0),t===ae&&(t=void 0),!t)return Object.create(e||null);if(!e)return t;var s={};for(var o in L(s,e),t){var a=s[o],c=t[o];a&&!r(a)&&(a=[a]),s[o]=a?a.concat(c):r(c)?c:[c]}return s},di.props=di.methods=di.inject=di.computed=function(e,t,n,i){if(!e)return t;var r=Object.create(null);return L(r,e),t&&L(r,t),r},di.provide=function(e,t){return e?function(){var n=Object.create(null);return fi(n,l(e)?e.call(this):e),t&&fi(n,l(t)?t.call(this):t,!1),n}:t};var yi=function(e,t){return void 0===t?e:t};function bi(e,t){var n=e.props;if(n){var i,s,o,a={};if(r(n)){i=n.length;while(i--)s=n[i],"string"===typeof s&&(o=k(s),a[o]={type:null})}else if(f(n))for(var c in n)s=n[c],o=k(c),a[o]=f(s)?s:{type:s};else 0;e.props=a}}function wi(e,t){var n=e.inject;if(n){var i=e.inject={};if(r(n))for(var s=0;s<n.length;s++)i[n[s]]={from:n[s]};else if(f(n))for(var o in n){var a=n[o];i[o]=f(a)?L({from:o},a):{from:a}}else 0}}function _i(e){var t=e.directives;if(t)for(var n in t){var i=t[n];l(i)&&(t[n]={bind:i,update:i})}}function Ii(e,t,n){if(l(t)&&(t=t.options),bi(t,n),wi(t,n),_i(t),!t._base&&(t.extends&&(e=Ii(e,t.extends,n)),t.mixins))for(var i=0,r=t.mixins.length;i<r;i++)e=Ii(e,t.mixins[i],n);var s,o={};for(s in e)a(s);for(s in t)S(e,s)||a(s);function a(i){var r=di[i]||yi;o[i]=r(e[i],t[i],n,i)}return o}function Si(e,t,n,i){if("string"===typeof n){var r=e[t];if(S(r,n))return r[n];var s=k(n);if(S(r,s))return r[s];var o=C(s);if(S(r,o))return r[o];var a=r[n]||r[s]||r[o];return a}}function Ti(e,t,n,i){var r=t[e],s=!S(n,e),o=n[e],a=Ai(Boolean,r.type);if(a>-1)if(s&&!S(r,"default"))o=!1;else if(""===o||o===A(e)){var c=Ai(String,r.type);(c<0||a<c)&&(o=!0)}if(void 0===o){o=Ei(i,r,e);var u=Re;Le(!0),Me(o),Le(u)}return o}function Ei(e,t,n){if(S(t,"default")){var i=t.default;return e&&e.$options.propsData&&void 0===e.$options.propsData[n]&&void 0!==e._props[n]?e._props[n]:l(i)&&"Function"!==Ci(t.type)?i.call(e):i}}var ki=/^\s*function (\w+)/;function Ci(e){var t=e&&e.toString().match(ki);return t?t[1]:""}function xi(e,t){return Ci(e)===Ci(t)}function Ai(e,t){if(!r(t))return xi(t,e)?0:-1;for(var n=0,i=t.length;n<i;n++)if(xi(t[n],e))return n;return-1}var Oi={enumerable:!0,configurable:!0,get:$,set:$};function Ni(e,t,n){Oi.get=function(){return this[t][n]},Oi.set=function(e){this[t][n]=e},Object.defineProperty(e,n,Oi)}function Di(e){var t=e.$options;if(t.props&&Ri(e,t.props),At(e),t.methods&&Ui(e,t.methods),t.data)Li(e);else{var n=Me(e._data={});n&&n.vmCount++}t.computed&&Mi(e,t.computed),t.watch&&t.watch!==ae&&ji(e,t.watch)}function Ri(e,t){var n=e.$options.propsData||{},i=e._props=je({}),r=e.$options._propKeys=[],s=!e.$parent;s||Le(!1);var o=function(s){r.push(s);var o=Ti(s,t,n,e);Ve(i,s,o),s in e||Ni(e,"_props",s)};for(var a in t)o(a);Le(!0)}function Li(e){var t=e.$options.data;t=e._data=l(t)?Pi(t,e):t||{},f(t)||(t={});var n=Object.keys(t),i=e.$options.props,r=(e.$options.methods,n.length);while(r--){var s=n[r];0,i&&S(i,s)||K(s)||Ni(e,"_data",s)}var o=Me(t);o&&o.vmCount++}function Pi(e,t){ke();try{return e.call(t,t)}catch(Yo){return Kt(Yo,t,"data()"),{}}finally{Ce()}}var $i={lazy:!0};function Mi(e,t){var n=e._computedWatchers=Object.create(null),i=le();for(var r in t){var s=t[r],o=l(s)?s:s.get;0,i||(n[r]=new vn(e,o||$,$,$i)),r in e||Vi(e,r,s)}}function Vi(e,t,n){var i=!le();l(n)?(Oi.get=i?Fi(t):Bi(n),Oi.set=$):(Oi.get=n.get?i&&!1!==n.cache?Fi(t):Bi(n.get):$,Oi.set=n.set||$),Object.defineProperty(e,t,Oi)}function Fi(e){return function(){var t=this._computedWatchers&&this._computedWatchers[e];if(t)return t.dirty&&t.evaluate(),Te.target&&t.depend(),t.value}}function Bi(e){return function(){return e.call(this,this)}}function Ui(e,t){e.$options.props;for(var n in t)e[n]="function"!==typeof t[n]?$:D(t[n],e)}function ji(e,t){for(var n in t){var i=t[n];if(r(i))for(var s=0;s<i.length;s++)zi(e,n,i[s]);else zi(e,n,i)}}function zi(e,t,n,i){return f(n)&&(i=n,n=n.handler),"string"===typeof n&&(n=e[n]),e.$watch(t,n,i)}function qi(e){var t={get:function(){return this._data}},n={get:function(){return this._props}};Object.defineProperty(e.prototype,"$data",t),Object.defineProperty(e.prototype,"$props",n),e.prototype.$set=Fe,e.prototype.$delete=Be,e.prototype.$watch=function(e,t,n){var i=this;if(f(t))return zi(i,e,t,n);n=n||{},n.user=!0;var r=new vn(i,e,t,n);if(n.immediate){var s='callback for immediate watcher "'.concat(r.expression,'"');ke(),Wt(t,i,[r.value],i,s),Ce()}return function(){r.teardown()}}}var Hi=0;function Gi(e){e.prototype._init=function(e){var t=this;t._uid=Hi++,t._isVue=!0,t.__v_skip=!0,t._scope=new We(!0),t._scope._vm=!0,e&&e._isComponent?Zi(t,e):t.$options=Ii(Ki(t.constructor),e||{},t),t._renderProxy=t,t._self=t,kn(t),yn(t),Pt(t),Rn(t,"beforeCreate",void 0,!1),Yn(t),Di(t),Qn(t),Rn(t,"created"),t.$options.el&&t.$mount(t.$options.el)}}function Zi(e,t){var n=e.$options=Object.create(e.constructor.options),i=t._parentVnode;n.parent=t.parent,n._parentVnode=i;var r=i.componentOptions;n.propsData=r.propsData,n._parentListeners=r.listeners,n._renderChildren=r.children,n._componentTag=r.tag,t.render&&(n.render=t.render,n.staticRenderFns=t.staticRenderFns)}function Ki(e){var t=e.options;if(e.super){var n=Ki(e.super),i=e.superOptions;if(n!==i){e.superOptions=n;var r=Wi(e);r&&L(e.extendOptions,r),t=e.options=Ii(n,e.extendOptions),t.name&&(t.components[t.name]=e)}}return t}function Wi(e){var t,n=e.options,i=e.sealedOptions;for(var r in n)n[r]!==i[r]&&(t||(t={}),t[r]=n[r]);return t}function Qi(e){this._init(e)}function Yi(e){e.use=function(e){var t=this._installedPlugins||(this._installedPlugins=[]);if(t.indexOf(e)>-1)return this;var n=R(arguments,1);return n.unshift(this),l(e.install)?e.install.apply(e,n):l(e)&&e.apply(null,n),t.push(e),this}}function Xi(e){e.mixin=function(e){return this.options=Ii(this.options,e),this}}function Ji(e){e.cid=0;var t=1;e.extend=function(e){e=e||{};var n=this,i=n.cid,r=e._Ctor||(e._Ctor={});if(r[i])return r[i];var s=ii(e)||ii(n.options);var o=function(e){this._init(e)};return o.prototype=Object.create(n.prototype),o.prototype.constructor=o,o.cid=t++,o.options=Ii(n.options,e),o["super"]=n,o.options.props&&er(o),o.options.computed&&tr(o),o.extend=n.extend,o.mixin=n.mixin,o.use=n.use,q.forEach((function(e){o[e]=n[e]})),s&&(o.options.components[s]=o),o.superOptions=n.options,o.extendOptions=e,o.sealedOptions=L({},o.options),r[i]=o,o}}function er(e){var t=e.options.props;for(var n in t)Ni(e.prototype,"_props",n)}function tr(e){var t=e.options.computed;for(var n in t)Vi(e.prototype,n,t[n])}function nr(e){q.forEach((function(t){e[t]=function(e,n){return n?("component"===t&&f(n)&&(n.name=n.name||e,n=this.options._base.extend(n)),"directive"===t&&l(n)&&(n={bind:n,update:n}),this.options[t+"s"][e]=n,n):this.options[t+"s"][e]}}))}function ir(e){return e&&(ii(e.Ctor.options)||e.tag)}function rr(e,t){return r(e)?e.indexOf(t)>-1:"string"===typeof e?e.split(",").indexOf(t)>-1:!!p(e)&&e.test(t)}function sr(e,t){var n=e.cache,i=e.keys,r=e._vnode;for(var s in n){var o=n[s];if(o){var a=o.name;a&&!t(a)&&or(n,s,i,r)}}}function or(e,t,n,i){var r=e[t];!r||i&&r.tag===i.tag||r.componentInstance.$destroy(),e[t]=null,_(n,t)}Gi(Qi),qi(Qi),Sn(Qi),Cn(Qi),Mt(Qi);var ar=[String,RegExp,Array],cr={name:"keep-alive",abstract:!0,props:{include:ar,exclude:ar,max:[String,Number]},methods:{cacheVNode:function(){var e=this,t=e.cache,n=e.keys,i=e.vnodeToCache,r=e.keyToCache;if(i){var s=i.tag,o=i.componentInstance,a=i.componentOptions;t[r]={name:ir(a),tag:s,componentInstance:o},n.push(r),this.max&&n.length>parseInt(this.max)&&or(t,n[0],n,this._vnode),this.vnodeToCache=null}}},created:function(){this.cache=Object.create(null),this.keys=[]},destroyed:function(){for(var e in this.cache)or(this.cache,e,this.keys)},mounted:function(){var e=this;this.cacheVNode(),this.$watch("include",(function(t){sr(e,(function(e){return rr(t,e)}))})),this.$watch("exclude",(function(t){sr(e,(function(e){return!rr(t,e)}))}))},updated:function(){this.cacheVNode()},render:function(){var e=this.$slots.default,t=Ut(e),n=t&&t.componentOptions;if(n){var i=ir(n),r=this,s=r.include,o=r.exclude;if(s&&(!i||!rr(s,i))||o&&i&&rr(o,i))return t;var a=this,c=a.cache,u=a.keys,l=null==t.key?n.Ctor.cid+(n.tag?"::".concat(n.tag):""):t.key;c[l]?(t.componentInstance=c[l].componentInstance,_(u,l),u.push(l)):(this.vnodeToCache=t,this.keyToCache=l),t.data.keepAlive=!0}return t||e&&e[0]}},ur={KeepAlive:cr};function lr(e){var t={get:function(){return G}};Object.defineProperty(e,"config",t),e.util={warn:hi,extend:L,mergeOptions:Ii,defineReactive:Ve},e.set=Fe,e.delete=Be,e.nextTick=cn,e.observable=function(e){return Me(e),e},e.options=Object.create(null),q.forEach((function(t){e.options[t+"s"]=Object.create(null)})),e.options._base=e,L(e.options.components,ur),Yi(e),Xi(e),Ji(e),nr(e)}lr(Qi),Object.defineProperty(Qi.prototype,"$isServer",{get:le}),Object.defineProperty(Qi.prototype,"$ssrContext",{get:function(){return this.$vnode&&this.$vnode.ssrContext}}),Object.defineProperty(Qi,"FunctionalRenderContext",{value:Jn}),Qi.version=hn;var hr=b("style,class"),dr=b("input,textarea,option,select,progress"),fr=function(e,t,n){return"value"===n&&dr(e)&&"button"!==t||"selected"===n&&"option"===e||"checked"===n&&"input"===e||"muted"===n&&"video"===e},pr=b("contenteditable,draggable,spellcheck"),mr=b("events,caret,typing,plaintext-only"),gr=function(e,t){return _r(t)||"false"===t?"false":"contenteditable"===e&&mr(t)?t:"true"},vr=b("allowfullscreen,async,autofocus,autoplay,checked,compact,controls,declare,default,defaultchecked,defaultmuted,defaultselected,defer,disabled,enabled,formnovalidate,hidden,indeterminate,inert,ismap,itemscope,loop,multiple,muted,nohref,noresize,noshade,novalidate,nowrap,open,pauseonexit,readonly,required,reversed,scoped,seamless,selected,sortable,truespeed,typemustmatch,visible"),yr="http://www.w3.org/1999/xlink",br=function(e){return":"===e.charAt(5)&&"xlink"===e.slice(0,5)},wr=function(e){return br(e)?e.slice(6,e.length):""},_r=function(e){return null==e||!1===e};function Ir(e){var t=e.data,n=e,i=e;while(o(i.componentInstance))i=i.componentInstance._vnode,i&&i.data&&(t=Sr(i.data,t));while(o(n=n.parent))n&&n.data&&(t=Sr(t,n.data));return Tr(t.staticClass,t.class)}function Sr(e,t){return{staticClass:Er(e.staticClass,t.staticClass),class:o(e.class)?[e.class,t.class]:t.class}}function Tr(e,t){return o(e)||o(t)?Er(e,kr(t)):""}function Er(e,t){return e?t?e+" "+t:e:t||""}function kr(e){return Array.isArray(e)?Cr(e):h(e)?xr(e):"string"===typeof e?e:""}function Cr(e){for(var t,n="",i=0,r=e.length;i<r;i++)o(t=kr(e[i]))&&""!==t&&(n&&(n+=" "),n+=t);return n}function xr(e){var t="";for(var n in e)e[n]&&(t&&(t+=" "),t+=n);return t}var Ar={svg:"http://www.w3.org/2000/svg",math:"http://www.w3.org/1998/Math/MathML"},Or=b("html,body,base,head,link,meta,style,title,address,article,aside,footer,header,h1,h2,h3,h4,h5,h6,hgroup,nav,section,div,dd,dl,dt,figcaption,figure,picture,hr,img,li,main,ol,p,pre,ul,a,b,abbr,bdi,bdo,br,cite,code,data,dfn,em,i,kbd,mark,q,rp,rt,rtc,ruby,s,samp,small,span,strong,sub,sup,time,u,var,wbr,area,audio,map,track,video,embed,object,param,source,canvas,script,noscript,del,ins,caption,col,colgroup,table,thead,tbody,td,th,tr,button,datalist,fieldset,form,input,label,legend,meter,optgroup,option,output,progress,select,textarea,details,dialog,menu,menuitem,summary,content,element,shadow,template,blockquote,iframe,tfoot"),Nr=b("svg,animate,circle,clippath,cursor,defs,desc,ellipse,filter,font-face,foreignobject,g,glyph,image,line,marker,mask,missing-glyph,path,pattern,polygon,polyline,rect,switch,symbol,text,textpath,tspan,use,view",!0),Dr=function(e){return Or(e)||Nr(e)};function Rr(e){return Nr(e)?"svg":"math"===e?"math":void 0}var Lr=Object.create(null);function Pr(e){if(!J)return!0;if(Dr(e))return!1;if(e=e.toLowerCase(),null!=Lr[e])return Lr[e];var t=document.createElement(e);return e.indexOf("-")>-1?Lr[e]=t.constructor===window.HTMLUnknownElement||t.constructor===window.HTMLElement:Lr[e]=/HTMLUnknownElement/.test(t.toString())}var $r=b("text,number,password,search,email,tel,url");function Mr(e){if("string"===typeof e){var t=document.querySelector(e);return t||document.createElement("div")}return e}function Vr(e,t){var n=document.createElement(e);return"select"!==e||t.data&&t.data.attrs&&void 0!==t.data.attrs.multiple&&n.setAttribute("multiple","multiple"),n}function Fr(e,t){return document.createElementNS(Ar[e],t)}function Br(e){return document.createTextNode(e)}function Ur(e){return document.createComment(e)}function jr(e,t,n){e.insertBefore(t,n)}function zr(e,t){e.removeChild(t)}function qr(e,t){e.appendChild(t)}function Hr(e){return e.parentNode}function Gr(e){return e.nextSibling}function Zr(e){return e.tagName}function Kr(e,t){e.textContent=t}function Wr(e,t){e.setAttribute(t,"")}var Qr=Object.freeze({__proto__:null,createElement:Vr,createElementNS:Fr,createTextNode:Br,createComment:Ur,insertBefore:jr,removeChild:zr,appendChild:qr,parentNode:Hr,nextSibling:Gr,tagName:Zr,setTextContent:Kr,setStyleScope:Wr}),Yr={create:function(e,t){Xr(t)},update:function(e,t){e.data.ref!==t.data.ref&&(Xr(e,!0),Xr(t))},destroy:function(e){Xr(e,!0)}};function Xr(e,t){var n=e.data.ref;if(o(n)){var i=e.context,s=e.componentInstance||e.elm,a=t?null:s,c=t?void 0:s;if(l(n))Wt(n,i,[a],i,"template ref function");else{var u=e.data.refInFor,h="string"===typeof n||"number"===typeof n,d=He(n),f=i.$refs;if(h||d)if(u){var p=h?f[n]:n.value;t?r(p)&&_(p,s):r(p)?p.includes(s)||p.push(s):h?(f[n]=[s],Jr(i,n,f[n])):n.value=[s]}else if(h){if(t&&f[n]!==s)return;f[n]=c,Jr(i,n,a)}else if(d){if(t&&n.value!==s)return;n.value=a}else 0}}}function Jr(e,t,n){var i=e._setupState;i&&S(i,t)&&(He(i[t])?i[t].value=n:i[t]=n)}var es=new ve("",{},[]),ts=["create","activate","update","remove","destroy"];function ns(e,t){return e.key===t.key&&e.asyncFactory===t.asyncFactory&&(e.tag===t.tag&&e.isComment===t.isComment&&o(e.data)===o(t.data)&&is(e,t)||a(e.isAsyncPlaceholder)&&s(t.asyncFactory.error))}function is(e,t){if("input"!==e.tag)return!0;var n,i=o(n=e.data)&&o(n=n.attrs)&&n.type,r=o(n=t.data)&&o(n=n.attrs)&&n.type;return i===r||$r(i)&&$r(r)}function rs(e,t,n){var i,r,s={};for(i=t;i<=n;++i)r=e[i].key,o(r)&&(s[r]=i);return s}function ss(e){var t,n,i={},c=e.modules,l=e.nodeOps;for(t=0;t<ts.length;++t)for(i[ts[t]]=[],n=0;n<c.length;++n)o(c[n][ts[t]])&&i[ts[t]].push(c[n][ts[t]]);function h(e){return new ve(l.tagName(e).toLowerCase(),{},[],void 0,e)}function d(e,t){function n(){0===--n.listeners&&f(e)}return n.listeners=t,n}function f(e){var t=l.parentNode(e);o(t)&&l.removeChild(t,e)}function p(e,t,n,i,r,s,c){if(o(e.elm)&&o(s)&&(e=s[c]=we(e)),e.isRootInsert=!r,!m(e,t,n,i)){var u=e.data,h=e.children,d=e.tag;o(d)?(e.elm=e.ns?l.createElementNS(e.ns,d):l.createElement(d,e),S(e),w(e,h,t),o(u)&&I(e,t),y(n,e.elm,i)):a(e.isComment)?(e.elm=l.createComment(e.text),y(n,e.elm,i)):(e.elm=l.createTextNode(e.text),y(n,e.elm,i))}}function m(e,t,n,i){var r=e.data;if(o(r)){var s=o(e.componentInstance)&&r.keepAlive;if(o(r=r.hook)&&o(r=r.init)&&r(e,!1),o(e.componentInstance))return g(e,t),y(n,e.elm,i),a(s)&&v(e,t,n,i),!0}}function g(e,t){o(e.data.pendingInsert)&&(t.push.apply(t,e.data.pendingInsert),e.data.pendingInsert=null),e.elm=e.componentInstance.$el,_(e)?(I(e,t),S(e)):(Xr(e),t.push(e))}function v(e,t,n,r){var s,a=e;while(a.componentInstance)if(a=a.componentInstance._vnode,o(s=a.data)&&o(s=s.transition)){for(s=0;s<i.activate.length;++s)i.activate[s](es,a);t.push(a);break}y(n,e.elm,r)}function y(e,t,n){o(e)&&(o(n)?l.parentNode(n)===e&&l.insertBefore(e,t,n):l.appendChild(e,t))}function w(e,t,n){if(r(t)){0;for(var i=0;i<t.length;++i)p(t[i],n,e.elm,null,!0,t,i)}else u(e.text)&&l.appendChild(e.elm,l.createTextNode(String(e.text)))}function _(e){while(e.componentInstance)e=e.componentInstance._vnode;return o(e.tag)}function I(e,n){for(var r=0;r<i.create.length;++r)i.create[r](es,e);t=e.data.hook,o(t)&&(o(t.create)&&t.create(es,e),o(t.insert)&&n.push(e))}function S(e){var t;if(o(t=e.fnScopeId))l.setStyleScope(e.elm,t);else{var n=e;while(n)o(t=n.context)&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t),n=n.parent}o(t=Tn)&&t!==e.context&&t!==e.fnContext&&o(t=t.$options._scopeId)&&l.setStyleScope(e.elm,t)}function T(e,t,n,i,r,s){for(;i<=r;++i)p(n[i],s,e,t,!1,n,i)}function E(e){var t,n,r=e.data;if(o(r))for(o(t=r.hook)&&o(t=t.destroy)&&t(e),t=0;t<i.destroy.length;++t)i.destroy[t](e);if(o(t=e.children))for(n=0;n<e.children.length;++n)E(e.children[n])}function k(e,t,n){for(;t<=n;++t){var i=e[t];o(i)&&(o(i.tag)?(C(i),E(i)):f(i.elm))}}function C(e,t){if(o(t)||o(e.data)){var n,r=i.remove.length+1;for(o(t)?t.listeners+=r:t=d(e.elm,r),o(n=e.componentInstance)&&o(n=n._vnode)&&o(n.data)&&C(n,t),n=0;n<i.remove.length;++n)i.remove[n](e,t);o(n=e.data.hook)&&o(n=n.remove)?n(e,t):t()}else f(e.elm)}function x(e,t,n,i,r){var a,c,u,h,d=0,f=0,m=t.length-1,g=t[0],v=t[m],y=n.length-1,b=n[0],w=n[y],_=!r;while(d<=m&&f<=y)s(g)?g=t[++d]:s(v)?v=t[--m]:ns(g,b)?(O(g,b,i,n,f),g=t[++d],b=n[++f]):ns(v,w)?(O(v,w,i,n,y),v=t[--m],w=n[--y]):ns(g,w)?(O(g,w,i,n,y),_&&l.insertBefore(e,g.elm,l.nextSibling(v.elm)),g=t[++d],w=n[--y]):ns(v,b)?(O(v,b,i,n,f),_&&l.insertBefore(e,v.elm,g.elm),v=t[--m],b=n[++f]):(s(a)&&(a=rs(t,d,m)),c=o(b.key)?a[b.key]:A(b,t,d,m),s(c)?p(b,i,e,g.elm,!1,n,f):(u=t[c],ns(u,b)?(O(u,b,i,n,f),t[c]=void 0,_&&l.insertBefore(e,u.elm,g.elm)):p(b,i,e,g.elm,!1,n,f)),b=n[++f]);d>m?(h=s(n[y+1])?null:n[y+1].elm,T(e,h,n,f,y,i)):f>y&&k(t,d,m)}function A(e,t,n,i){for(var r=n;r<i;r++){var s=t[r];if(o(s)&&ns(e,s))return r}}function O(e,t,n,r,c,u){if(e!==t){o(t.elm)&&o(r)&&(t=r[c]=we(t));var h=t.elm=e.elm;if(a(e.isAsyncPlaceholder))o(t.asyncFactory.resolved)?R(e.elm,t,n):t.isAsyncPlaceholder=!0;else if(a(t.isStatic)&&a(e.isStatic)&&t.key===e.key&&(a(t.isCloned)||a(t.isOnce)))t.componentInstance=e.componentInstance;else{var d,f=t.data;o(f)&&o(d=f.hook)&&o(d=d.prepatch)&&d(e,t);var p=e.children,m=t.children;if(o(f)&&_(t)){for(d=0;d<i.update.length;++d)i.update[d](e,t);o(d=f.hook)&&o(d=d.update)&&d(e,t)}s(t.text)?o(p)&&o(m)?p!==m&&x(h,p,m,n,u):o(m)?(o(e.text)&&l.setTextContent(h,""),T(h,null,m,0,m.length-1,n)):o(p)?k(p,0,p.length-1):o(e.text)&&l.setTextContent(h,""):e.text!==t.text&&l.setTextContent(h,t.text),o(f)&&o(d=f.hook)&&o(d=d.postpatch)&&d(e,t)}}}function N(e,t,n){if(a(n)&&o(e.parent))e.parent.data.pendingInsert=t;else for(var i=0;i<t.length;++i)t[i].data.hook.insert(t[i])}var D=b("attrs,class,staticClass,staticStyle,key");function R(e,t,n,i){var r,s=t.tag,c=t.data,u=t.children;if(i=i||c&&c.pre,t.elm=e,a(t.isComment)&&o(t.asyncFactory))return t.isAsyncPlaceholder=!0,!0;if(o(c)&&(o(r=c.hook)&&o(r=r.init)&&r(t,!0),o(r=t.componentInstance)))return g(t,n),!0;if(o(s)){if(o(u))if(e.hasChildNodes())if(o(r=c)&&o(r=r.domProps)&&o(r=r.innerHTML)){if(r!==e.innerHTML)return!1}else{for(var l=!0,h=e.firstChild,d=0;d<u.length;d++){if(!h||!R(h,u[d],n,i)){l=!1;break}h=h.nextSibling}if(!l||h)return!1}else w(t,u,n);if(o(c)){var f=!1;for(var p in c)if(!D(p)){f=!0,I(t,n);break}!f&&c["class"]&&fn(c["class"])}}else e.data!==t.text&&(e.data=t.text);return!0}return function(e,t,n,r){if(!s(t)){var c=!1,u=[];if(s(e))c=!0,p(t,u);else{var d=o(e.nodeType);if(!d&&ns(e,t))O(e,t,u,null,null,r);else{if(d){if(1===e.nodeType&&e.hasAttribute(z)&&(e.removeAttribute(z),n=!0),a(n)&&R(e,t,u))return N(t,u,!0),e;e=h(e)}var f=e.elm,m=l.parentNode(f);if(p(t,u,f._leaveCb?null:m,l.nextSibling(f)),o(t.parent)){var g=t.parent,v=_(t);while(g){for(var y=0;y<i.destroy.length;++y)i.destroy[y](g);if(g.elm=t.elm,v){for(var b=0;b<i.create.length;++b)i.create[b](es,g);var w=g.data.hook.insert;if(w.merged)for(var I=1;I<w.fns.length;I++)w.fns[I]()}else Xr(g);g=g.parent}}o(m)?k([e],0,0):o(e.tag)&&E(e)}}return N(t,u,c),t.elm}o(e)&&E(e)}}var os={create:as,update:as,destroy:function(e){as(e,es)}};function as(e,t){(e.data.directives||t.data.directives)&&cs(e,t)}function cs(e,t){var n,i,r,s=e===es,o=t===es,a=ls(e.data.directives,e.context),c=ls(t.data.directives,t.context),u=[],l=[];for(n in c)i=a[n],r=c[n],i?(r.oldValue=i.value,r.oldArg=i.arg,ds(r,"update",t,e),r.def&&r.def.componentUpdated&&l.push(r)):(ds(r,"bind",t,e),r.def&&r.def.inserted&&u.push(r));if(u.length){var h=function(){for(var n=0;n<u.length;n++)ds(u[n],"inserted",t,e)};s?tt(t,"insert",h):h()}if(l.length&&tt(t,"postpatch",(function(){for(var n=0;n<l.length;n++)ds(l[n],"componentUpdated",t,e)})),!s)for(n in a)c[n]||ds(a[n],"unbind",e,e,o)}var us=Object.create(null);function ls(e,t){var n,i,r=Object.create(null);if(!e)return r;for(n=0;n<e.length;n++){if(i=e[n],i.modifiers||(i.modifiers=us),r[hs(i)]=i,t._setupState&&t._setupState.__sfc){var s=i.def||Si(t,"_setupState","v-"+i.name);i.def="function"===typeof s?{bind:s,update:s}:s}i.def=i.def||Si(t.$options,"directives",i.name,!0)}return r}function hs(e){return e.rawName||"".concat(e.name,".").concat(Object.keys(e.modifiers||{}).join("."))}function ds(e,t,n,i,r){var s=e.def&&e.def[t];if(s)try{s(n.elm,e,n,i,r)}catch(Yo){Kt(Yo,n.context,"directive ".concat(e.name," ").concat(t," hook"))}}var fs=[Yr,os];function ps(e,t){var n=t.componentOptions;if((!o(n)||!1!==n.Ctor.options.inheritAttrs)&&(!s(e.data.attrs)||!s(t.data.attrs))){var i,r,c,u=t.elm,l=e.data.attrs||{},h=t.data.attrs||{};for(i in(o(h.__ob__)||a(h._v_attr_proxy))&&(h=t.data.attrs=L({},h)),h)r=h[i],c=l[i],c!==r&&ms(u,i,r,t.data.pre);for(i in(te||ie)&&h.value!==l.value&&ms(u,"value",h.value),l)s(h[i])&&(br(i)?u.removeAttributeNS(yr,wr(i)):pr(i)||u.removeAttribute(i))}}function ms(e,t,n,i){i||e.tagName.indexOf("-")>-1?gs(e,t,n):vr(t)?_r(n)?e.removeAttribute(t):(n="allowfullscreen"===t&&"EMBED"===e.tagName?"true":t,e.setAttribute(t,n)):pr(t)?e.setAttribute(t,gr(t,n)):br(t)?_r(n)?e.removeAttributeNS(yr,wr(t)):e.setAttributeNS(yr,t,n):gs(e,t,n)}function gs(e,t,n){if(_r(n))e.removeAttribute(t);else{if(te&&!ne&&"TEXTAREA"===e.tagName&&"placeholder"===t&&""!==n&&!e.__ieph){var i=function(t){t.stopImmediatePropagation(),e.removeEventListener("input",i)};e.addEventListener("input",i),e.__ieph=!0}e.setAttribute(t,n)}}var vs={create:ps,update:ps};function ys(e,t){var n=t.elm,i=t.data,r=e.data;if(!(s(i.staticClass)&&s(i.class)&&(s(r)||s(r.staticClass)&&s(r.class)))){var a=Ir(t),c=n._transitionClasses;o(c)&&(a=Er(a,kr(c))),a!==n._prevClass&&(n.setAttribute("class",a),n._prevClass=a)}}var bs,ws={create:ys,update:ys},_s="__r",Is="__c";function Ss(e){if(o(e[_s])){var t=te?"change":"input";e[t]=[].concat(e[_s],e[t]||[]),delete e[_s]}o(e[Is])&&(e.change=[].concat(e[Is],e.change||[]),delete e[Is])}function Ts(e,t,n){var i=bs;return function r(){var s=t.apply(null,arguments);null!==s&&Cs(e,r,n,i)}}var Es=Jt&&!(oe&&Number(oe[1])<=53);function ks(e,t,n,i){if(Es){var r=Un,s=t;t=s._wrapper=function(e){if(e.target===e.currentTarget||e.timeStamp>=r||e.timeStamp<=0||e.target.ownerDocument!==document)return s.apply(this,arguments)}}bs.addEventListener(e,t,ce?{capture:n,passive:i}:n)}function Cs(e,t,n,i){(i||bs).removeEventListener(e,t._wrapper||t,n)}function xs(e,t){if(!s(e.data.on)||!s(t.data.on)){var n=t.data.on||{},i=e.data.on||{};bs=t.elm||e.elm,Ss(n),et(n,i,ks,Cs,Ts,t.context),bs=void 0}}var As,Os={create:xs,update:xs,destroy:function(e){return xs(e,es)}};function Ns(e,t){if(!s(e.data.domProps)||!s(t.data.domProps)){var n,i,r=t.elm,c=e.data.domProps||{},u=t.data.domProps||{};for(n in(o(u.__ob__)||a(u._v_attr_proxy))&&(u=t.data.domProps=L({},u)),c)n in u||(r[n]="");for(n in u){if(i=u[n],"textContent"===n||"innerHTML"===n){if(t.children&&(t.children.length=0),i===c[n])continue;1===r.childNodes.length&&r.removeChild(r.childNodes[0])}if("value"===n&&"PROGRESS"!==r.tagName){r._value=i;var l=s(i)?"":String(i);Ds(r,l)&&(r.value=l)}else if("innerHTML"===n&&Nr(r.tagName)&&s(r.innerHTML)){As=As||document.createElement("div"),As.innerHTML="<svg>".concat(i,"</svg>");var h=As.firstChild;while(r.firstChild)r.removeChild(r.firstChild);while(h.firstChild)r.appendChild(h.firstChild)}else if(i!==c[n])try{r[n]=i}catch(Yo){}}}}function Ds(e,t){return!e.composing&&("OPTION"===e.tagName||Rs(e,t)||Ls(e,t))}function Rs(e,t){var n=!0;try{n=document.activeElement!==e}catch(Yo){}return n&&e.value!==t}function Ls(e,t){var n=e.value,i=e._vModifiers;if(o(i)){if(i.number)return y(n)!==y(t);if(i.trim)return n.trim()!==t.trim()}return n!==t}var Ps={create:Ns,update:Ns},$s=T((function(e){var t={},n=/;(?![^(]*\))/g,i=/:(.+)/;return e.split(n).forEach((function(e){if(e){var n=e.split(i);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}));function Ms(e){var t=Vs(e.style);return e.staticStyle?L(e.staticStyle,t):t}function Vs(e){return Array.isArray(e)?P(e):"string"===typeof e?$s(e):e}function Fs(e,t){var n,i={};if(t){var r=e;while(r.componentInstance)r=r.componentInstance._vnode,r&&r.data&&(n=Ms(r.data))&&L(i,n)}(n=Ms(e.data))&&L(i,n);var s=e;while(s=s.parent)s.data&&(n=Ms(s.data))&&L(i,n);return i}var Bs,Us=/^--/,js=/\s*!important$/,zs=function(e,t,n){if(Us.test(t))e.style.setProperty(t,n);else if(js.test(n))e.style.setProperty(A(t),n.replace(js,""),"important");else{var i=Hs(t);if(Array.isArray(n))for(var r=0,s=n.length;r<s;r++)e.style[i]=n[r];else e.style[i]=n}},qs=["Webkit","Moz","ms"],Hs=T((function(e){if(Bs=Bs||document.createElement("div").style,e=k(e),"filter"!==e&&e in Bs)return e;for(var t=e.charAt(0).toUpperCase()+e.slice(1),n=0;n<qs.length;n++){var i=qs[n]+t;if(i in Bs)return i}}));function Gs(e,t){var n=t.data,i=e.data;if(!(s(n.staticStyle)&&s(n.style)&&s(i.staticStyle)&&s(i.style))){var r,a,c=t.elm,u=i.staticStyle,l=i.normalizedStyle||i.style||{},h=u||l,d=Vs(t.data.style)||{};t.data.normalizedStyle=o(d.__ob__)?L({},d):d;var f=Fs(t,!0);for(a in h)s(f[a])&&zs(c,a,"");for(a in f)r=f[a],r!==h[a]&&zs(c,a,null==r?"":r)}}var Zs={create:Gs,update:Gs},Ks=/\s+/;function Ws(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ks).forEach((function(t){return e.classList.add(t)})):e.classList.add(t);else{var n=" ".concat(e.getAttribute("class")||""," ");n.indexOf(" "+t+" ")<0&&e.setAttribute("class",(n+t).trim())}}function Qs(e,t){if(t&&(t=t.trim()))if(e.classList)t.indexOf(" ")>-1?t.split(Ks).forEach((function(t){return e.classList.remove(t)})):e.classList.remove(t),e.classList.length||e.removeAttribute("class");else{var n=" ".concat(e.getAttribute("class")||""," "),i=" "+t+" ";while(n.indexOf(i)>=0)n=n.replace(i," ");n=n.trim(),n?e.setAttribute("class",n):e.removeAttribute("class")}}function Ys(e){if(e){if("object"===typeof e){var t={};return!1!==e.css&&L(t,Xs(e.name||"v")),L(t,e),t}return"string"===typeof e?Xs(e):void 0}}var Xs=T((function(e){return{enterClass:"".concat(e,"-enter"),enterToClass:"".concat(e,"-enter-to"),enterActiveClass:"".concat(e,"-enter-active"),leaveClass:"".concat(e,"-leave"),leaveToClass:"".concat(e,"-leave-to"),leaveActiveClass:"".concat(e,"-leave-active")}})),Js=J&&!ne,eo="transition",to="animation",no="transition",io="transitionend",ro="animation",so="animationend";Js&&(void 0===window.ontransitionend&&void 0!==window.onwebkittransitionend&&(no="WebkitTransition",io="webkitTransitionEnd"),void 0===window.onanimationend&&void 0!==window.onwebkitanimationend&&(ro="WebkitAnimation",so="webkitAnimationEnd"));var oo=J?window.requestAnimationFrame?window.requestAnimationFrame.bind(window):setTimeout:function(e){return e()};function ao(e){oo((function(){oo(e)}))}function co(e,t){var n=e._transitionClasses||(e._transitionClasses=[]);n.indexOf(t)<0&&(n.push(t),Ws(e,t))}function uo(e,t){e._transitionClasses&&_(e._transitionClasses,t),Qs(e,t)}function lo(e,t,n){var i=fo(e,t),r=i.type,s=i.timeout,o=i.propCount;if(!r)return n();var a=r===eo?io:so,c=0,u=function(){e.removeEventListener(a,l),n()},l=function(t){t.target===e&&++c>=o&&u()};setTimeout((function(){c<o&&u()}),s+1),e.addEventListener(a,l)}var ho=/\b(transform|all)(,|$)/;function fo(e,t){var n,i=window.getComputedStyle(e),r=(i[no+"Delay"]||"").split(", "),s=(i[no+"Duration"]||"").split(", "),o=po(r,s),a=(i[ro+"Delay"]||"").split(", "),c=(i[ro+"Duration"]||"").split(", "),u=po(a,c),l=0,h=0;t===eo?o>0&&(n=eo,l=o,h=s.length):t===to?u>0&&(n=to,l=u,h=c.length):(l=Math.max(o,u),n=l>0?o>u?eo:to:null,h=n?n===eo?s.length:c.length:0);var d=n===eo&&ho.test(i[no+"Property"]);return{type:n,timeout:l,propCount:h,hasTransform:d}}function po(e,t){while(e.length<t.length)e=e.concat(e);return Math.max.apply(null,t.map((function(t,n){return mo(t)+mo(e[n])})))}function mo(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function go(e,t){var n=e.elm;o(n._leaveCb)&&(n._leaveCb.cancelled=!0,n._leaveCb());var i=Ys(e.data.transition);if(!s(i)&&!o(n._enterCb)&&1===n.nodeType){var r=i.css,a=i.type,c=i.enterClass,u=i.enterToClass,d=i.enterActiveClass,f=i.appearClass,p=i.appearToClass,m=i.appearActiveClass,g=i.beforeEnter,v=i.enter,b=i.afterEnter,w=i.enterCancelled,_=i.beforeAppear,I=i.appear,S=i.afterAppear,T=i.appearCancelled,E=i.duration,k=Tn,C=Tn.$vnode;while(C&&C.parent)k=C.context,C=C.parent;var x=!k._isMounted||!e.isRootInsert;if(!x||I||""===I){var A=x&&f?f:c,O=x&&m?m:d,N=x&&p?p:u,D=x&&_||g,R=x&&l(I)?I:v,L=x&&S||b,P=x&&T||w,$=y(h(E)?E.enter:E);0;var M=!1!==r&&!ne,V=bo(R),F=n._enterCb=U((function(){M&&(uo(n,N),uo(n,O)),F.cancelled?(M&&uo(n,A),P&&P(n)):L&&L(n),n._enterCb=null}));e.data.show||tt(e,"insert",(function(){var t=n.parentNode,i=t&&t._pending&&t._pending[e.key];i&&i.tag===e.tag&&i.elm._leaveCb&&i.elm._leaveCb(),R&&R(n,F)})),D&&D(n),M&&(co(n,A),co(n,O),ao((function(){uo(n,A),F.cancelled||(co(n,N),V||(yo($)?setTimeout(F,$):lo(n,a,F)))}))),e.data.show&&(t&&t(),R&&R(n,F)),M||V||F()}}}function vo(e,t){var n=e.elm;o(n._enterCb)&&(n._enterCb.cancelled=!0,n._enterCb());var i=Ys(e.data.transition);if(s(i)||1!==n.nodeType)return t();if(!o(n._leaveCb)){var r=i.css,a=i.type,c=i.leaveClass,u=i.leaveToClass,l=i.leaveActiveClass,d=i.beforeLeave,f=i.leave,p=i.afterLeave,m=i.leaveCancelled,g=i.delayLeave,v=i.duration,b=!1!==r&&!ne,w=bo(f),_=y(h(v)?v.leave:v);0;var I=n._leaveCb=U((function(){n.parentNode&&n.parentNode._pending&&(n.parentNode._pending[e.key]=null),b&&(uo(n,u),uo(n,l)),I.cancelled?(b&&uo(n,c),m&&m(n)):(t(),p&&p(n)),n._leaveCb=null}));g?g(S):S()}function S(){I.cancelled||(!e.data.show&&n.parentNode&&((n.parentNode._pending||(n.parentNode._pending={}))[e.key]=e),d&&d(n),b&&(co(n,c),co(n,l),ao((function(){uo(n,c),I.cancelled||(co(n,u),w||(yo(_)?setTimeout(I,_):lo(n,a,I)))}))),f&&f(n,I),b||w||I())}}function yo(e){return"number"===typeof e&&!isNaN(e)}function bo(e){if(s(e))return!1;var t=e.fns;return o(t)?bo(Array.isArray(t)?t[0]:t):(e._length||e.length)>1}function wo(e,t){!0!==t.data.show&&go(t)}var _o=J?{create:wo,activate:wo,remove:function(e,t){!0!==e.data.show?vo(e,t):t()}}:{},Io=[vs,ws,Os,Ps,Zs,_o],So=Io.concat(fs),To=ss({nodeOps:Qr,modules:So});ne&&document.addEventListener("selectionchange",(function(){var e=document.activeElement;e&&e.vmodel&&Do(e,"input")}));var Eo={inserted:function(e,t,n,i){"select"===n.tag?(i.elm&&!i.elm._vOptions?tt(n,"postpatch",(function(){Eo.componentUpdated(e,t,n)})):ko(e,t,n.context),e._vOptions=[].map.call(e.options,Ao)):("textarea"===n.tag||$r(e.type))&&(e._vModifiers=t.modifiers,t.modifiers.lazy||(e.addEventListener("compositionstart",Oo),e.addEventListener("compositionend",No),e.addEventListener("change",No),ne&&(e.vmodel=!0)))},componentUpdated:function(e,t,n){if("select"===n.tag){ko(e,t,n.context);var i=e._vOptions,r=e._vOptions=[].map.call(e.options,Ao);if(r.some((function(e,t){return!F(e,i[t])}))){var s=e.multiple?t.value.some((function(e){return xo(e,r)})):t.value!==t.oldValue&&xo(t.value,r);s&&Do(e,"change")}}}};function ko(e,t,n){Co(e,t,n),(te||ie)&&setTimeout((function(){Co(e,t,n)}),0)}function Co(e,t,n){var i=t.value,r=e.multiple;if(!r||Array.isArray(i)){for(var s,o,a=0,c=e.options.length;a<c;a++)if(o=e.options[a],r)s=B(i,Ao(o))>-1,o.selected!==s&&(o.selected=s);else if(F(Ao(o),i))return void(e.selectedIndex!==a&&(e.selectedIndex=a));r||(e.selectedIndex=-1)}}function xo(e,t){return t.every((function(t){return!F(t,e)}))}function Ao(e){return"_value"in e?e._value:e.value}function Oo(e){e.target.composing=!0}function No(e){e.target.composing&&(e.target.composing=!1,Do(e.target,"input"))}function Do(e,t){var n=document.createEvent("HTMLEvents");n.initEvent(t,!0,!0),e.dispatchEvent(n)}function Ro(e){return!e.componentInstance||e.data&&e.data.transition?e:Ro(e.componentInstance._vnode)}var Lo={bind:function(e,t,n){var i=t.value;n=Ro(n);var r=n.data&&n.data.transition,s=e.__vOriginalDisplay="none"===e.style.display?"":e.style.display;i&&r?(n.data.show=!0,go(n,(function(){e.style.display=s}))):e.style.display=i?s:"none"},update:function(e,t,n){var i=t.value,r=t.oldValue;if(!i!==!r){n=Ro(n);var s=n.data&&n.data.transition;s?(n.data.show=!0,i?go(n,(function(){e.style.display=e.__vOriginalDisplay})):vo(n,(function(){e.style.display="none"}))):e.style.display=i?e.__vOriginalDisplay:"none"}},unbind:function(e,t,n,i,r){r||(e.style.display=e.__vOriginalDisplay)}},Po={model:Eo,show:Lo},$o={name:String,appear:Boolean,css:Boolean,mode:String,type:String,enterClass:String,leaveClass:String,enterToClass:String,leaveToClass:String,enterActiveClass:String,leaveActiveClass:String,appearClass:String,appearActiveClass:String,appearToClass:String,duration:[Number,String,Object]};function Mo(e){var t=e&&e.componentOptions;return t&&t.Ctor.options.abstract?Mo(Ut(t.children)):e}function Vo(e){var t={},n=e.$options;for(var i in n.propsData)t[i]=e[i];var r=n._parentListeners;for(var i in r)t[k(i)]=r[i];return t}function Fo(e,t){if(/\d-keep-alive$/.test(t.tag))return e("keep-alive",{props:t.componentOptions.propsData})}function Bo(e){while(e=e.parent)if(e.data.transition)return!0}function Uo(e,t){return t.key===e.key&&t.tag===e.tag}var jo=function(e){return e.tag||Et(e)},zo=function(e){return"show"===e.name},qo={name:"transition",props:$o,abstract:!0,render:function(e){var t=this,n=this.$slots.default;if(n&&(n=n.filter(jo),n.length)){0;var i=this.mode;0;var r=n[0];if(Bo(this.$vnode))return r;var s=Mo(r);if(!s)return r;if(this._leaving)return Fo(e,r);var o="__transition-".concat(this._uid,"-");s.key=null==s.key?s.isComment?o+"comment":o+s.tag:u(s.key)?0===String(s.key).indexOf(o)?s.key:o+s.key:s.key;var a=(s.data||(s.data={})).transition=Vo(this),c=this._vnode,l=Mo(c);if(s.data.directives&&s.data.directives.some(zo)&&(s.data.show=!0),l&&l.data&&!Uo(s,l)&&!Et(l)&&(!l.componentInstance||!l.componentInstance._vnode.isComment)){var h=l.data.transition=L({},a);if("out-in"===i)return this._leaving=!0,tt(h,"afterLeave",(function(){t._leaving=!1,t.$forceUpdate()})),Fo(e,r);if("in-out"===i){if(Et(s))return c;var d,f=function(){d()};tt(a,"afterEnter",f),tt(a,"enterCancelled",f),tt(h,"delayLeave",(function(e){d=e}))}}return r}}},Ho=L({tag:String,moveClass:String},$o);delete Ho.mode;var Go={props:Ho,beforeMount:function(){var e=this,t=this._update;this._update=function(n,i){var r=En(e);e.__patch__(e._vnode,e.kept,!1,!0),e._vnode=e.kept,r(),t.call(e,n,i)}},render:function(e){for(var t=this.tag||this.$vnode.data.tag||"span",n=Object.create(null),i=this.prevChildren=this.children,r=this.$slots.default||[],s=this.children=[],o=Vo(this),a=0;a<r.length;a++){var c=r[a];if(c.tag)if(null!=c.key&&0!==String(c.key).indexOf("__vlist"))s.push(c),n[c.key]=c,(c.data||(c.data={})).transition=o;else;}if(i){var u=[],l=[];for(a=0;a<i.length;a++){c=i[a];c.data.transition=o,c.data.pos=c.elm.getBoundingClientRect(),n[c.key]?u.push(c):l.push(c)}this.kept=e(t,null,u),this.removed=l}return e(t,null,s)},updated:function(){var e=this.prevChildren,t=this.moveClass||(this.name||"v")+"-move";e.length&&this.hasMove(e[0].elm,t)&&(e.forEach(Zo),e.forEach(Ko),e.forEach(Wo),this._reflow=document.body.offsetHeight,e.forEach((function(e){if(e.data.moved){var n=e.elm,i=n.style;co(n,t),i.transform=i.WebkitTransform=i.transitionDuration="",n.addEventListener(io,n._moveCb=function e(i){i&&i.target!==n||i&&!/transform$/.test(i.propertyName)||(n.removeEventListener(io,e),n._moveCb=null,uo(n,t))})}})))},methods:{hasMove:function(e,t){if(!Js)return!1;if(this._hasMove)return this._hasMove;var n=e.cloneNode();e._transitionClasses&&e._transitionClasses.forEach((function(e){Qs(n,e)})),Ws(n,t),n.style.display="none",this.$el.appendChild(n);var i=fo(n);return this.$el.removeChild(n),this._hasMove=i.hasTransform}}};function Zo(e){e.elm._moveCb&&e.elm._moveCb(),e.elm._enterCb&&e.elm._enterCb()}function Ko(e){e.data.newPos=e.elm.getBoundingClientRect()}function Wo(e){var t=e.data.pos,n=e.data.newPos,i=t.left-n.left,r=t.top-n.top;if(i||r){e.data.moved=!0;var s=e.elm.style;s.transform=s.WebkitTransform="translate(".concat(i,"px,").concat(r,"px)"),s.transitionDuration="0s"}}var Qo={Transition:qo,TransitionGroup:Go};Qi.config.mustUseProp=fr,Qi.config.isReservedTag=Dr,Qi.config.isReservedAttr=hr,Qi.config.getTagNamespace=Rr,Qi.config.isUnknownElement=Pr,L(Qi.options.directives,Po),L(Qi.options.components,Qo),Qi.prototype.__patch__=J?To:$,Qi.prototype.$mount=function(e,t){return e=e&&J?Mr(e):void 0,xn(this,e,t)},J&&setTimeout((function(){G.devtools&&he&&he.emit("init",Qi)}),0)},9759:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(9744),r=n(3381),s=r.Z,o=n(9524),a=n(4552),c=n(2066),u=n(144),l=u.ZP.extend({name:"transitionable",props:{mode:String,origin:String,transition:String}}),h=n(5530),d=n(8219),f=(0,h.Z)(i.Z,a.Z,l).extend({name:"v-alert",props:{border:{type:String,validator(e){return["top","right","bottom","left"].includes(e)}},closeLabel:{type:String,default:"$vuetify.close"},coloredBorder:Boolean,dense:Boolean,dismissible:Boolean,closeIcon:{type:String,default:"$cancel"},icon:{default:"",type:[Boolean,String],validator(e){return"string"===typeof e||!1===e}},outlined:Boolean,prominent:Boolean,text:Boolean,type:{type:String,validator(e){return["info","error","success","warning"].includes(e)}},value:{type:Boolean,default:!0}},computed:{__cachedBorder(){if(!this.border)return null;let e={staticClass:"v-alert__border",class:{[`v-alert__border--${this.border}`]:!0}};return this.coloredBorder&&(e=this.setBackgroundColor(this.computedColor,e),e.class["v-alert__border--has-color"]=!0),this.$createElement("div",e)},__cachedDismissible(){if(!this.dismissible)return null;const e=this.iconColor;return this.$createElement(s,{staticClass:"v-alert__dismissible",props:{color:e,icon:!0,small:!0},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:()=>this.isActive=!1}},[this.$createElement(o.Z,{props:{color:e}},this.closeIcon)])},__cachedIcon(){return this.computedIcon?this.$createElement(o.Z,{staticClass:"v-alert__icon",props:{color:this.iconColor}},this.computedIcon):null},classes(){const e={...i.Z.options.computed.classes.call(this),"v-alert--border":Boolean(this.border),"v-alert--dense":this.dense,"v-alert--outlined":this.outlined,"v-alert--prominent":this.prominent,"v-alert--text":this.text};return this.border&&(e[`v-alert--border-${this.border}`]=!0),e},computedColor(){return this.color||this.type},computedIcon(){return!1!==this.icon&&("string"===typeof this.icon&&this.icon?this.icon:!!["error","info","success","warning"].includes(this.type)&&`$${this.type}`)},hasColoredIcon(){return this.hasText||Boolean(this.border)&&this.coloredBorder},hasText(){return this.text||this.outlined},iconColor(){return this.hasColoredIcon?this.computedColor:void 0},isDark(){return!(!this.type||this.coloredBorder||this.outlined)||c.Z.options.computed.isDark.call(this)}},created(){this.$attrs.hasOwnProperty("outline")&&(0,d.fK)("outline","outlined",this)},methods:{genWrapper(){const e=[this.$slots.prepend||this.__cachedIcon,this.genContent(),this.__cachedBorder,this.$slots.append,this.$scopedSlots.close?this.$scopedSlots.close({toggle:this.toggle}):this.__cachedDismissible],t={staticClass:"v-alert__wrapper"};return this.$createElement("div",t,e)},genContent(){return this.$createElement("div",{staticClass:"v-alert__content"},this.$slots.default)},genAlert(){let e={staticClass:"v-alert",attrs:{role:"alert"},on:this.listeners$,class:this.classes,style:this.styles,directives:[{name:"show",value:this.isActive}]};if(!this.coloredBorder){const t=this.hasText?this.setTextColor:this.setBackgroundColor;e=t(this.computedColor,e)}return this.$createElement("div",e,[this.genWrapper()])},toggle(){this.isActive=!this.isActive}},render(e){const t=this.genAlert();return this.transition?e("transition",{props:{name:this.transition,origin:this.origin,mode:this.mode}},[t]):t}})},3726:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(2066),r=n(5530),s=(0,r.Z)(i.Z).extend({name:"v-app",props:{dark:{type:Boolean,default:void 0},id:{type:String,default:"app"},light:{type:Boolean,default:void 0}},computed:{isDark(){return this.$vuetify.theme.dark}},beforeCreate(){if(!this.$vuetify||this.$vuetify===this.$root)throw new Error("Vuetify is not properly initialized, see https://vuetifyjs.com/getting-started/quick-start#bootstrapping-the-vuetify-object")},render(e){const t=e("div",{staticClass:"v-application--wrap"},this.$slots.default);return e("div",{staticClass:"v-application",class:{"v-application--is-rtl":this.$vuetify.rtl,"v-application--is-ltr":!this.$vuetify.rtl,...this.themeClasses},attrs:{"data-app":!0},domProps:{id:this.id}},[t])}})},3625:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(2732);function r(e,t,n){const{self:i=!1}=t.modifiers||{},r=t.value,s="object"===typeof r&&r.options||{passive:!0},o="function"===typeof r||"handleEvent"in r?r:r.handler,a=i?e:t.arg?document.querySelector(t.arg):window;a&&(a.addEventListener("scroll",o,s),e._onScroll=Object(e._onScroll),e._onScroll[n.context._uid]={handler:o,options:s,target:i?void 0:a})}function s(e,t,n){var i;if(!(null===(i=e._onScroll)||void 0===i?void 0:i[n.context._uid]))return;const{handler:r,options:s,target:o=e}=e._onScroll[n.context._uid];o.removeEventListener("scroll",r,s),delete e._onScroll[n.context._uid]}const o={inserted:r,unbind:s};var a=o,c=n(2404),u=n(8219),l=n(144),h=l.ZP.extend({name:"scrollable",directives:{Scroll:o},props:{scrollTarget:String,scrollThreshold:[String,Number]},data:()=>({currentScroll:0,currentThreshold:0,isActive:!1,isScrollingUp:!1,previousScroll:0,savedScroll:0,target:null}),computed:{canScroll(){return"undefined"!==typeof window},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):300}},watch:{isScrollingUp(){this.savedScroll=this.savedScroll||this.currentScroll},isActive(){this.savedScroll=0}},mounted(){this.scrollTarget&&(this.target=document.querySelector(this.scrollTarget),this.target||(0,u.Kd)(`Unable to locate element with identifier ${this.scrollTarget}`,this))},methods:{onScroll(){this.canScroll&&(this.previousScroll=this.currentScroll,this.currentScroll=this.target?this.target.scrollTop:window.pageYOffset,this.isScrollingUp=this.currentScroll<this.previousScroll,this.currentThreshold=Math.abs(this.currentScroll-this.computedScrollThreshold),this.$nextTick((()=>{Math.abs(this.currentScroll-this.savedScroll)>this.computedScrollThreshold&&this.thresholdMet()})))},thresholdMet(){}}}),d=n(8191),f=n(4552),p=n(8131),m=n(5530);const g=(0,m.Z)(i.Z,h,d.Z,f.Z,(0,c.Z)("top",["clippedLeft","clippedRight","computedHeight","invertedScroll","isExtended","isProminent","value"]));var v=g.extend({name:"v-app-bar",directives:{Scroll:a},provide(){return{VAppBar:this}},props:{clippedLeft:Boolean,clippedRight:Boolean,collapseOnScroll:Boolean,elevateOnScroll:Boolean,fadeImgOnScroll:Boolean,hideOnScroll:Boolean,invertedScroll:Boolean,scrollOffScreen:Boolean,shrinkOnScroll:Boolean,value:{type:Boolean,default:!0}},data(){return{isActive:this.value}},computed:{applicationProperty(){return this.bottom?"bottom":"top"},canScroll(){return h.options.computed.canScroll.call(this)&&(this.invertedScroll||this.elevateOnScroll||this.hideOnScroll||this.collapseOnScroll||this.isBooted||!this.value)},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar--collapse":this.collapse||this.collapseOnScroll,"v-app-bar":!0,"v-app-bar--clipped":this.clippedLeft||this.clippedRight,"v-app-bar--fade-img-on-scroll":this.fadeImgOnScroll,"v-app-bar--elevate-on-scroll":this.elevateOnScroll,"v-app-bar--fixed":!this.absolute&&(this.app||this.fixed),"v-app-bar--hide-shadow":this.hideShadow,"v-app-bar--is-scrolled":this.currentScroll>0,"v-app-bar--shrink-on-scroll":this.shrinkOnScroll}},scrollRatio(){const e=this.computedScrollThreshold;return Math.max((e-this.currentScroll)/e,0)},computedContentHeight(){if(!this.shrinkOnScroll)return i.Z.options.computed.computedContentHeight.call(this);const e=this.dense?48:56,t=this.computedOriginalHeight;return e+(t-e)*this.scrollRatio},computedFontSize(){if(!this.isProminent)return;const e=1.25,t=1.5;return e+(t-e)*this.scrollRatio},computedLeft(){return!this.app||this.clippedLeft?0:this.$vuetify.application.left},computedMarginTop(){return this.app?this.$vuetify.application.bar:0},computedOpacity(){if(this.fadeImgOnScroll)return this.scrollRatio},computedOriginalHeight(){let e=i.Z.options.computed.computedContentHeight.call(this);return this.isExtended&&(e+=parseInt(this.extensionHeight)),e},computedRight(){return!this.app||this.clippedRight?0:this.$vuetify.application.right},computedScrollThreshold(){return this.scrollThreshold?Number(this.scrollThreshold):this.computedOriginalHeight-(this.dense?48:56)},computedTransform(){if(!this.canScroll||this.elevateOnScroll&&0===this.currentScroll&&this.isActive)return 0;if(this.isActive)return 0;const e=this.scrollOffScreen?this.computedHeight:this.computedContentHeight;return this.bottom?e:-e},hideShadow(){return this.elevateOnScroll&&this.isExtended?this.currentScroll<this.computedScrollThreshold:this.elevateOnScroll?0===this.currentScroll||this.computedTransform<0:(!this.isExtended||this.scrollOffScreen)&&0!==this.computedTransform},isCollapsed(){return this.collapseOnScroll?this.currentScroll>0:i.Z.options.computed.isCollapsed.call(this)},isProminent(){return i.Z.options.computed.isProminent.call(this)||this.shrinkOnScroll},styles(){return{...i.Z.options.computed.styles.call(this),fontSize:(0,p.kb)(this.computedFontSize,"rem"),marginTop:(0,p.kb)(this.computedMarginTop),transform:`translateY(${(0,p.kb)(this.computedTransform)})`,left:(0,p.kb)(this.computedLeft),right:(0,p.kb)(this.computedRight)}}},watch:{canScroll:"onScroll",computedTransform(){this.canScroll&&(this.clippedLeft||this.clippedRight)&&this.callUpdate()},invertedScroll(e){this.isActive=!e||0!==this.currentScroll},hideOnScroll(e){this.isActive=!e||this.currentScroll<this.computedScrollThreshold}},created(){this.invertedScroll&&(this.isActive=!1)},methods:{genBackground(){const e=i.Z.options.methods.genBackground.call(this);return e.data=this._b(e.data||{},e.tag,{style:{opacity:this.computedOpacity}}),e},updateApplication(){return this.invertedScroll?0:this.computedHeight+this.computedTransform},thresholdMet(){this.invertedScroll?this.isActive=this.currentScroll>this.computedScrollThreshold:(this.hideOnScroll&&(this.isActive=this.isScrollingUp||this.currentScroll<this.computedScrollThreshold),this.currentThreshold<this.computedScrollThreshold||(this.savedScroll=this.currentScroll))}},render(e){const t=i.Z.options.render.call(this,e);return t.data=t.data||{},this.canScroll&&(t.data.directives=t.data.directives||[],t.data.directives.push({arg:this.scrollTarget,name:"scroll",value:this.onScroll})),t}})},9396:function(e,t,n){"use strict";n.d(t,{Z:function(){return c}});var i=n(5836),r=n(9548),s=n(5357),o=n(8131),a=n(5530),c=(0,a.Z)(i.Z,r.Z,s.Z).extend({name:"v-avatar",props:{left:Boolean,right:Boolean,size:{type:[Number,String],default:48}},computed:{classes(){return{"v-avatar--left":this.left,"v-avatar--right":this.right,...this.roundedClasses}},styles(){return{height:(0,o.kb)(this.size),minWidth:(0,o.kb)(this.size),width:(0,o.kb)(this.size),...this.measurableStyles}}},render(e){const t={staticClass:"v-avatar",class:this.classes,style:this.styles,on:this.$listeners};return e("div",this.setBackgroundColor(this.color,t),this.$slots.default)}})},3381:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(9744),r=n(7006),s=n(5836),o=n(8131),a=s.Z.extend({name:"v-progress-circular",directives:{intersect:r.Z},props:{button:Boolean,indeterminate:Boolean,rotate:{type:[Number,String],default:0},size:{type:[Number,String],default:32},width:{type:[Number,String],default:4},value:{type:[Number,String],default:0}},data:()=>({radius:20,isVisible:!0}),computed:{calculatedSize(){return Number(this.size)+(this.button?8:0)},circumference(){return 2*Math.PI*this.radius},classes(){return{"v-progress-circular--visible":this.isVisible,"v-progress-circular--indeterminate":this.indeterminate,"v-progress-circular--button":this.button}},normalizedValue(){return this.value<0?0:this.value>100?100:parseFloat(this.value)},strokeDashArray(){return Math.round(1e3*this.circumference)/1e3},strokeDashOffset(){return(100-this.normalizedValue)/100*this.circumference+"px"},strokeWidth(){return Number(this.width)/+this.size*this.viewBoxSize*2},styles(){return{height:(0,o.kb)(this.calculatedSize),width:(0,o.kb)(this.calculatedSize)}},svgStyles(){return{transform:`rotate(${Number(this.rotate)}deg)`}},viewBoxSize(){return this.radius/(1-Number(this.width)/+this.size)}},methods:{genCircle(e,t){return this.$createElement("circle",{class:`v-progress-circular__${e}`,attrs:{fill:"transparent",cx:2*this.viewBoxSize,cy:2*this.viewBoxSize,r:this.radius,"stroke-width":this.strokeWidth,"stroke-dasharray":this.strokeDashArray,"stroke-dashoffset":t}})},genSvg(){const e=[this.indeterminate||this.genCircle("underlay",0),this.genCircle("overlay",this.strokeDashOffset)];return this.$createElement("svg",{style:this.svgStyles,attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:`${this.viewBoxSize} ${this.viewBoxSize} ${2*this.viewBoxSize} ${2*this.viewBoxSize}`}},e)},genInfo(){return this.$createElement("div",{staticClass:"v-progress-circular__info"},this.$slots.default)},onObserve(e,t,n){this.isVisible=n}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-progress-circular",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:this.styles,on:this.$listeners}),[this.genSvg(),this.genInfo()])}}),c=a,u=n(1302),l=n(4552),h=n(8427),d=n(8747),f=n(9367),p=n(2412),m=n(5530),g=n(8219);const v=(0,m.Z)(i.Z,f.Z,d.Z,p.Z,(0,u.d)("btnToggle"),(0,l.d)("inputValue"));var y=v.extend().extend({name:"v-btn",props:{activeClass:{type:String,default(){return this.btnToggle?this.btnToggle.activeClass:""}},block:Boolean,depressed:Boolean,fab:Boolean,icon:Boolean,loading:Boolean,outlined:Boolean,plain:Boolean,retainFocusOnClick:Boolean,rounded:Boolean,tag:{type:String,default:"button"},text:Boolean,tile:Boolean,type:{type:String,default:"button"},value:null},data:()=>({proxyClass:"v-btn--active"}),computed:{classes(){return{"v-btn":!0,...f.Z.options.computed.classes.call(this),"v-btn--absolute":this.absolute,"v-btn--block":this.block,"v-btn--bottom":this.bottom,"v-btn--disabled":this.disabled,"v-btn--is-elevated":this.isElevated,"v-btn--fab":this.fab,"v-btn--fixed":this.fixed,"v-btn--has-bg":this.hasBg,"v-btn--icon":this.icon,"v-btn--left":this.left,"v-btn--loading":this.loading,"v-btn--outlined":this.outlined,"v-btn--plain":this.plain,"v-btn--right":this.right,"v-btn--round":this.isRound,"v-btn--rounded":this.rounded,"v-btn--router":this.to,"v-btn--text":this.text,"v-btn--tile":this.tile,"v-btn--top":this.top,...this.themeClasses,...this.groupClasses,...this.elevationClasses,...this.sizeableClasses}},computedElevation(){if(!this.disabled)return h.Z.options.computed.computedElevation.call(this)},computedRipple(){var e;const t=!this.icon&&!this.fab||{circle:!0};return!this.disabled&&(null!==(e=this.ripple)&&void 0!==e?e:t)},hasBg(){return!this.text&&!this.plain&&!this.outlined&&!this.icon},isElevated(){return Boolean(!this.icon&&!this.text&&!this.outlined&&!this.depressed&&!this.disabled&&!this.plain&&(null==this.elevation||Number(this.elevation)>0))},isRound(){return Boolean(this.icon||this.fab)},styles(){return{...this.measurableStyles}}},created(){const e=[["flat","text"],["outline","outlined"],["round","rounded"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,g.fK)(e,t,this)}))},methods:{click(e){!this.retainFocusOnClick&&!this.fab&&e.detail&&this.$el.blur(),this.$emit("click",e),this.btnToggle&&this.toggle()},genContent(){return this.$createElement("span",{staticClass:"v-btn__content"},this.$slots.default)},genLoader(){return this.$createElement("span",{class:"v-btn__loader"},this.$slots.loader||[this.$createElement(c,{props:{indeterminate:!0,size:23,width:2}})])}},render(e){const t=[this.genContent(),this.loading&&this.genLoader()],{tag:n,data:i}=this.generateRouteLink(),r=this.hasBg?this.setBackgroundColor:this.setTextColor;return"button"===n&&(i.attrs.type=this.type,i.attrs.disabled=this.disabled),i.attrs.value=["string","number"].includes(typeof this.value)?this.value:JSON.stringify(this.value),e(n,this.disabled?i:r(this.color,i),t)}})},3816:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(9744),r=n(9799),s=n(9367),o=n(5530),a=(0,o.Z)(r.Z,s.Z,i.Z).extend({name:"v-card",props:{flat:Boolean,hover:Boolean,img:String,link:Boolean,loaderHeight:{type:[Number,String],default:4},raised:Boolean},computed:{classes(){return{"v-card":!0,...s.Z.options.computed.classes.call(this),"v-card--flat":this.flat,"v-card--hover":this.hover,"v-card--link":this.isClickable,"v-card--loading":this.loading,"v-card--disabled":this.disabled,"v-card--raised":this.raised,...i.Z.options.computed.classes.call(this)}},styles(){const e={...i.Z.options.computed.styles.call(this)};return this.img&&(e.background=`url("${this.img}") center center / cover no-repeat`),e}},methods:{genProgress(){const e=r.Z.options.methods.genProgress.call(this);return e?this.$createElement("div",{staticClass:"v-card__progress",key:"progress"},[e]):null}},render(e){const{tag:t,data:n}=this.generateRouteLink();return n.style=this.styles,this.isClickable&&(n.attrs=n.attrs||{},n.attrs.tabindex=0),e(t,this.setBackgroundColor(this.color,n),[this.genProgress(),this.$slots.default])}})},5255:function(e,t,n){"use strict";n.d(t,{EB:function(){return c},Qq:function(){return o},ZB:function(){return a},h7:function(){return s}});var i=n(3816),r=n(8131);const s=(0,r.Ji)("v-card__actions"),o=(0,r.Ji)("v-card__subtitle"),a=(0,r.Ji)("v-card__text"),c=(0,r.Ji)("v-card__title");i.Z},7178:function(e,t,n){"use strict";n.d(t,{Z:function(){return S}});var i=n(2066),r=i.Z.extend({name:"v-theme-provider",props:{root:Boolean},computed:{isDark(){return this.root?this.rootIsDark:i.Z.options.computed.isDark.call(this)}},render(){return this.$slots.default&&this.$slots.default.find((e=>!e.isComment&&" "!==e.text))}}),s=n(144),o=s.ZP.extend().extend({name:"delayable",props:{openDelay:{type:[Number,String],default:0},closeDelay:{type:[Number,String],default:0}},data:()=>({openTimeout:void 0,closeTimeout:void 0}),methods:{clearDelay(){clearTimeout(this.openTimeout),clearTimeout(this.closeTimeout)},runDelay(e,t){this.clearDelay();const n=parseInt(this[`${e}Delay`],10);this[`${e}Timeout`]=setTimeout(t||(()=>{this.isActive={open:!0,close:!1}[e]}),n)}}}),a=n(4552),c=n(5530),u=n(8131),l=n(8219);const h=(0,c.Z)(o,a.Z);var d=h.extend({name:"activatable",props:{activator:{default:null,validator:e=>["string","object"].includes(typeof e)},disabled:Boolean,internalActivator:Boolean,openOnClick:{type:Boolean,default:!0},openOnHover:Boolean,openOnFocus:Boolean},data:()=>({activatorElement:null,activatorNode:[],events:["click","mouseenter","mouseleave","focus"],listeners:{}}),watch:{activator:"resetActivator",openOnFocus:"resetActivator",openOnHover:"resetActivator"},mounted(){const e=(0,u.sp)(this,"activator",!0);e&&["v-slot","normal"].includes(e)&&(0,l.N6)('The activator slot must be bound, try \'<template v-slot:activator="{ on }"><v-btn v-on="on">\'',this),this.addActivatorEvents()},beforeDestroy(){this.removeActivatorEvents()},methods:{addActivatorEvents(){if(!this.activator||this.disabled||!this.getActivator())return;this.listeners=this.genActivatorListeners();const e=Object.keys(this.listeners);for(const t of e)this.getActivator().addEventListener(t,this.listeners[t])},genActivator(){const e=(0,u.z9)(this,"activator",Object.assign(this.getValueProxy(),{on:this.genActivatorListeners(),attrs:this.genActivatorAttributes()}))||[];return this.activatorNode=e,e},genActivatorAttributes(){return{role:this.openOnClick&&!this.openOnHover?"button":void 0,"aria-haspopup":!0,"aria-expanded":String(this.isActive)}},genActivatorListeners(){if(this.disabled)return{};const e={};return this.openOnHover?(e.mouseenter=e=>{this.getActivator(e),this.runDelay("open")},e.mouseleave=e=>{this.getActivator(e),this.runDelay("close")}):this.openOnClick&&(e.click=e=>{const t=this.getActivator(e);t&&t.focus(),e.stopPropagation(),this.isActive=!this.isActive}),this.openOnFocus&&(e.focus=e=>{this.getActivator(e),e.stopPropagation(),this.isActive=!this.isActive}),e},getActivator(e){if(this.activatorElement)return this.activatorElement;let t=null;if(this.activator){const e=this.internalActivator?this.$el:document;t="string"===typeof this.activator?e.querySelector(this.activator):this.activator.$el?this.activator.$el:this.activator}else if(1===this.activatorNode.length||this.activatorNode.length&&!e){const e=this.activatorNode[0].componentInstance;t=e&&e.$options.mixins&&e.$options.mixins.some((e=>e.options&&["activatable","menuable"].includes(e.options.name)))?e.getActivator():this.activatorNode[0].elm}else e&&(t=e.currentTarget||e.target);return this.activatorElement=(null===t||void 0===t?void 0:t.nodeType)===Node.ELEMENT_NODE?t:null,this.activatorElement},getContentSlot(){return(0,u.z9)(this,"default",this.getValueProxy(),!0)},getValueProxy(){const e=this;return{get value(){return e.isActive},set value(t){e.isActive=t}}},removeActivatorEvents(){if(!this.activator||!this.activatorElement)return;const e=Object.keys(this.listeners);for(const t of e)this.activatorElement.removeEventListener(t,this.listeners[t]);this.listeners={}},resetActivator(){this.removeActivatorEvents(),this.activatorElement=null,this.getActivator(),this.addActivatorEvents()}}}),f=n(4665),p=n(6986);function m(e){const t=typeof e;return"boolean"===t||"string"===t||e.nodeType===Node.ELEMENT_NODE}function g(e){e.forEach((e=>{e.elm&&e.elm.parentNode&&e.elm.parentNode.removeChild(e.elm)}))}var v=(0,c.Z)(p.Z).extend({name:"detachable",props:{attach:{default:!1,validator:m},contentClass:{type:String,default:""}},data:()=>({activatorNode:null,hasDetached:!1}),watch:{attach(){this.hasDetached=!1,this.initDetach()},hasContent(){this.$nextTick(this.initDetach)}},beforeMount(){this.$nextTick((()=>{if(this.activatorNode){const e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];e.forEach((e=>{if(!e.elm)return;if(!this.$el.parentNode)return;const t=this.$el===this.$el.parentNode.firstChild?this.$el:this.$el.nextSibling;this.$el.parentNode.insertBefore(e.elm,t)}))}}))},mounted(){this.hasContent&&this.initDetach()},deactivated(){this.isActive=!1},beforeDestroy(){this.$refs.content&&this.$refs.content.parentNode&&this.$refs.content.parentNode.removeChild(this.$refs.content)},destroyed(){if(this.activatorNode){const e=Array.isArray(this.activatorNode)?this.activatorNode:[this.activatorNode];if(this.$el.isConnected){const t=new MutationObserver((n=>{n.some((e=>Array.from(e.removedNodes).includes(this.$el)))&&(t.disconnect(),g(e))}));t.observe(this.$el.parentNode,{subtree:!1,childList:!0})}else g(e)}},methods:{getScopeIdAttrs(){const e=(0,u.vO)(this.$vnode,"context.$options._scopeId");return e&&{[e]:""}},initDetach(){if(this._isDestroyed||!this.$refs.content||this.hasDetached||""===this.attach||!0===this.attach||"attach"===this.attach)return;let e;e=!1===this.attach?document.querySelector("[data-app]"):"string"===typeof this.attach?document.querySelector(this.attach):this.attach,e?(e.appendChild(this.$refs.content),this.hasDetached=!0):(0,l.Kd)(`Unable to locate target ${this.attach||"[data-app]"}`,this)}}}),y=n(8605),b=s.ZP.extend({name:"returnable",props:{returnValue:null},data:()=>({isActive:!1,originalValue:null}),watch:{isActive(e){e?this.originalValue=this.returnValue:this.$emit("update:return-value",this.originalValue)}},methods:{save(e){this.originalValue=e,setTimeout((()=>{this.isActive=!1}))}}}),w=s.ZP.extend().extend({name:"stackable",data(){return{stackElement:null,stackExclude:null,stackMinZIndex:0,isActive:!1}},computed:{activeZIndex(){if("undefined"===typeof window)return 0;const e=this.stackElement||this.$refs.content,t=this.isActive?this.getMaxZIndex(this.stackExclude||[e])+2:(0,u.KK)(e);return null==t?t:parseInt(t)}},methods:{getMaxZIndex(e=[]){const t=this.$el,n=[this.stackMinZIndex,(0,u.KK)(t)],i=[...document.getElementsByClassName("v-menu__content--active"),...document.getElementsByClassName("v-dialog__content--active")];for(let r=0;r<i.length;r++)e.includes(i[r])||n.push((0,u.KK)(i[r]));return Math.max(...n)}}}),_=n(3664);const I=(0,c.Z)(f.Z,v,y.Z,b,w,d);var S=I.extend({name:"v-dialog",directives:{ClickOutside:_.Z},props:{dark:Boolean,disabled:Boolean,fullscreen:Boolean,light:Boolean,maxWidth:[String,Number],noClickAnimation:Boolean,origin:{type:String,default:"center center"},persistent:Boolean,retainFocus:{type:Boolean,default:!0},scrollable:Boolean,transition:{type:[String,Boolean],default:"dialog-transition"},width:[String,Number]},data(){return{activatedBy:null,animate:!1,animateTimeout:-1,stackMinZIndex:200,previousActiveElement:null}},computed:{classes(){return{[`v-dialog ${this.contentClass}`.trim()]:!0,"v-dialog--active":this.isActive,"v-dialog--persistent":this.persistent,"v-dialog--fullscreen":this.fullscreen,"v-dialog--scrollable":this.scrollable,"v-dialog--animated":this.animate}},contentClasses(){return{"v-dialog__content":!0,"v-dialog__content--active":this.isActive}},hasActivator(){return Boolean(!!this.$slots.activator||!!this.$scopedSlots.activator)}},watch:{isActive(e){var t;e?(this.show(),this.hideScroll()):(this.removeOverlay(),this.unbind(),null===(t=this.previousActiveElement)||void 0===t||t.focus())},fullscreen(e){this.isActive&&(e?(this.hideScroll(),this.removeOverlay(!1)):(this.showScroll(),this.genOverlay()))}},created(){this.$attrs.hasOwnProperty("full-width")&&(0,l.Jk)("full-width",this)},beforeMount(){this.$nextTick((()=>{this.isBooted=this.isActive,this.isActive&&this.show()}))},beforeDestroy(){"undefined"!==typeof window&&this.unbind()},methods:{animateClick(){this.animate=!1,this.$nextTick((()=>{this.animate=!0,window.clearTimeout(this.animateTimeout),this.animateTimeout=window.setTimeout((()=>this.animate=!1),150)}))},closeConditional(e){const t=e.target;return!(this._isDestroyed||!this.isActive||this.$refs.content.contains(t)||this.overlay&&t&&!this.overlay.$el.contains(t))&&this.activeZIndex>=this.getMaxZIndex()},hideScroll(){this.fullscreen?document.documentElement.classList.add("overflow-y-hidden"):y.Z.options.methods.hideScroll.call(this)},show(){!this.fullscreen&&!this.hideOverlay&&this.genOverlay(),this.$nextTick((()=>{this.$nextTick((()=>{var e,t;(null===(e=this.$refs.dialog)||void 0===e?void 0:e.contains(document.activeElement))||(this.previousActiveElement=document.activeElement,null===(t=this.$refs.dialog)||void 0===t||t.focus()),this.bind()}))}))},bind(){window.addEventListener("focusin",this.onFocusin)},unbind(){window.removeEventListener("focusin",this.onFocusin)},onClickOutside(e){this.$emit("click:outside",e),this.persistent?this.noClickAnimation||this.animateClick():this.isActive=!1},onKeydown(e){if(e.keyCode===u.Do.esc&&!this.getOpenDependents().length)if(this.persistent)this.noClickAnimation||this.animateClick();else{this.isActive=!1;const e=this.getActivator();this.$nextTick((()=>e&&e.focus()))}this.$emit("keydown",e)},onFocusin(e){if(!e||!this.retainFocus)return;const t=e.target;if(t&&this.$refs.dialog&&![document,this.$refs.dialog].includes(t)&&!this.$refs.dialog.contains(t)&&this.activeZIndex>=this.getMaxZIndex()&&!this.getOpenDependentElements().some((e=>e.contains(t)))){const e=this.$refs.dialog.querySelectorAll('button, [href], input:not([type="hidden"]), select, textarea, [tabindex]:not([tabindex="-1"])'),t=[...e].find((e=>!e.hasAttribute("disabled")&&!e.matches('[tabindex="-1"]')));t&&t.focus()}},genContent(){return this.showLazyContent((()=>[this.$createElement(r,{props:{root:!0,light:this.light,dark:this.dark}},[this.$createElement("div",{class:this.contentClasses,attrs:{role:"dialog","aria-modal":this.hideOverlay?void 0:"true",...this.getScopeIdAttrs()},on:{keydown:this.onKeydown},style:{zIndex:this.activeZIndex},ref:"content"},[this.genTransition()])])]))},genTransition(){const e=this.genInnerContent();return this.transition?this.$createElement("transition",{props:{name:this.transition,origin:this.origin,appear:!0}},[e]):e},genInnerContent(){const e={class:this.classes,attrs:{tabindex:this.isActive?0:void 0},ref:"dialog",directives:[{name:"click-outside",value:{handler:this.onClickOutside,closeConditional:this.closeConditional,include:this.getOpenDependentElements}},{name:"show",value:this.isActive}],style:{transformOrigin:this.origin}};return this.fullscreen||(e.style={...e.style,maxWidth:(0,u.kb)(this.maxWidth),width:(0,u.kb)(this.width)}),this.$createElement("div",e,this.getContentSlot())}},render(e){return e("div",{staticClass:"v-dialog__container",class:{"v-dialog__container--attached":""===this.attach||!0===this.attach||"attach"===this.attach}},[this.genActivator(),this.genContent()])}})},7690:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(2066),r=i.Z.extend({name:"v-divider",props:{inset:Boolean,vertical:Boolean},render(e){let t;return this.$attrs.role&&"separator"!==this.$attrs.role||(t=this.vertical?"vertical":"horizontal"),e("hr",{class:{"v-divider":!0,"v-divider--inset":this.inset,"v-divider--vertical":this.vertical,...this.themeClasses},attrs:{role:"separator","aria-orientation":t,...this.$attrs},on:this.$listeners})}})},3143:function(e,t,n){"use strict";n.d(t,{Z:function(){return y}});var i=n(2070),r=i.Z,s=n(5530),o=n(6930),a=n(9524),c=n(5836),u=n(1302),l=n(2066),h=n(4552),d=n(9367),f=n(2412),p=n(8219),m=(0,s.Z)(c.Z,f.Z,d.Z,l.Z,(0,u.d)("chipGroup"),(0,h.d)("inputValue")).extend({name:"v-chip",props:{active:{type:Boolean,default:!0},activeClass:{type:String,default(){return this.chipGroup?this.chipGroup.activeClass:""}},close:Boolean,closeIcon:{type:String,default:"$delete"},closeLabel:{type:String,default:"$vuetify.close"},disabled:Boolean,draggable:Boolean,filter:Boolean,filterIcon:{type:String,default:"$complete"},label:Boolean,link:Boolean,outlined:Boolean,pill:Boolean,tag:{type:String,default:"span"},textColor:String,value:null},data:()=>({proxyClass:"v-chip--active"}),computed:{classes(){return{"v-chip":!0,...d.Z.options.computed.classes.call(this),"v-chip--clickable":this.isClickable,"v-chip--disabled":this.disabled,"v-chip--draggable":this.draggable,"v-chip--label":this.label,"v-chip--link":this.isLink,"v-chip--no-color":!this.color,"v-chip--outlined":this.outlined,"v-chip--pill":this.pill,"v-chip--removable":this.hasClose,...this.themeClasses,...this.sizeableClasses,...this.groupClasses}},hasClose(){return Boolean(this.close)},isClickable(){return Boolean(d.Z.options.computed.isClickable.call(this)||this.chipGroup)}},created(){const e=[["outline","outlined"],["selected","input-value"],["value","active"],["@input","@active.sync"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,p.fK)(e,t,this)}))},methods:{click(e){this.$emit("click",e),this.chipGroup&&this.toggle()},genFilter(){const e=[];return this.isActive&&e.push(this.$createElement(a.Z,{staticClass:"v-chip__filter",props:{left:!0}},this.filterIcon)),this.$createElement(o.Zq,e)},genClose(){return this.$createElement(a.Z,{staticClass:"v-chip__close",props:{right:!0,size:18},attrs:{"aria-label":this.$vuetify.lang.t(this.closeLabel)},on:{click:e=>{e.stopPropagation(),e.preventDefault(),this.$emit("click:close"),this.$emit("update:active",!1)}}},this.closeIcon)},genContent(){return this.$createElement("span",{staticClass:"v-chip__content"},[this.filter&&this.genFilter(),this.$slots.default,this.hasClose&&this.genClose()])}},render(e){const t=[this.genContent()];let{tag:n,data:i}=this.generateRouteLink();i.attrs={...i.attrs,draggable:this.draggable?"true":void 0,tabindex:this.chipGroup&&!this.disabled?0:i.attrs.tabindex},i.directives.push({name:"show",value:this.active}),i=this.setBackgroundColor(this.color,i);const r=this.textColor||this.outlined&&this.color;return e(n,this.setTextColor(r,i),t)}}),g=n(8131),v=n(7559),y=r.extend({name:"v-file-input",model:{prop:"value",event:"change"},props:{chips:Boolean,clearable:{type:Boolean,default:!0},counterSizeString:{type:String,default:"$vuetify.fileInput.counterSize"},counterString:{type:String,default:"$vuetify.fileInput.counter"},hideInput:Boolean,multiple:Boolean,placeholder:String,prependIcon:{type:String,default:"$file"},readonly:{type:Boolean,default:!1},showSize:{type:[Boolean,Number],default:!1,validator:e=>"boolean"===typeof e||[1e3,1024].includes(e)},smallChips:Boolean,truncateLength:{type:[Number,String],default:22},type:{type:String,default:"file"},value:{default:void 0,validator:e=>(0,g.TI)(e).every((e=>null!=e&&"object"===typeof e))}},computed:{classes(){return{...r.options.computed.classes.call(this),"v-file-input":!0}},computedCounterValue(){const e=this.multiple&&this.lazyValue?this.lazyValue.length:this.lazyValue instanceof File?1:0;if(!this.showSize)return this.$vuetify.lang.t(this.counterString,e);const t=this.internalArrayValue.reduce(((e,{size:t=0})=>e+t),0);return this.$vuetify.lang.t(this.counterSizeString,e,(0,g.XE)(t,1024===this.base))},internalArrayValue(){return(0,g.TI)(this.internalValue)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("change",this.lazyValue)}},isDirty(){return this.internalArrayValue.length>0},isLabelActive(){return this.isDirty},text(){return this.isDirty||!this.persistentPlaceholder&&!this.isFocused&&this.hasLabel?this.internalArrayValue.map((e=>{const{name:t="",size:n=0}=e,i=this.truncateText(t);return this.showSize?`${i} (${(0,g.XE)(n,1024===this.base)})`:i})):[this.placeholder]},base(){return"boolean"!==typeof this.showSize?this.showSize:void 0},hasChips(){return this.chips||this.smallChips}},watch:{readonly:{handler(e){!0===e&&(0,p.N6)("readonly is not supported on <v-file-input>",this)},immediate:!0},value(e){const t=this.multiple?e:e?[e]:[];(0,g.vZ)(t,this.$refs.input.files)||(this.$refs.input.value="")}},methods:{clearableCallback(){this.internalValue=this.multiple?[]:null,this.$refs.input.value=""},genChips(){return this.isDirty?this.text.map(((e,t)=>this.$createElement(m,{props:{small:this.smallChips},on:{"click:close":()=>{const e=this.internalValue;e.splice(t,1),this.internalValue=e}}},[e]))):[]},genControl(){const e=r.options.methods.genControl.call(this);return this.hideInput&&(e.data.style=(0,v.y0)(e.data.style,{display:"none"})),e},genInput(){const e=r.options.methods.genInput.call(this);return e.data.attrs.multiple=this.multiple,delete e.data.domProps.value,delete e.data.on.input,e.data.on.change=this.onInput,[this.genSelections(),e]},genPrependSlot(){if(!this.prependIcon)return null;const e=this.genIcon("prepend",(()=>{this.$refs.input.click()}));return this.genSlot("prepend","outer",[e])},genSelectionText(){const e=this.text.length;return e<2?this.text:this.showSize&&!this.counter?[this.computedCounterValue]:[this.$vuetify.lang.t(this.counterString,e)]},genSelections(){const e=[];return this.isDirty&&this.$scopedSlots.selection?this.internalArrayValue.forEach(((t,n)=>{this.$scopedSlots.selection&&e.push(this.$scopedSlots.selection({text:this.text[n],file:t,index:n}))})):e.push(this.hasChips&&this.isDirty?this.genChips():this.genSelectionText()),this.$createElement("div",{staticClass:"v-file-input__text",class:{"v-file-input__text--placeholder":this.placeholder&&!this.isDirty,"v-file-input__text--chips":this.hasChips&&!this.$scopedSlots.selection}},e)},genTextFieldSlot(){const e=r.options.methods.genTextFieldSlot.call(this);return e.data.on={...e.data.on||{},click:e=>{e.target&&"LABEL"===e.target.nodeName||this.$refs.input.click()}},e},onInput(e){const t=[...e.target.files||[]];this.internalValue=this.multiple?t:t[0],this.initialValue=this.internalValue},onKeyDown(e){this.$emit("keydown",e)},truncateText(e){if(e.length<Number(this.truncateLength))return e;const t=Math.floor((Number(this.truncateLength)-1)/2);return`${e.slice(0,t)}…${e.slice(e.length-t)}`}}})},3240:function(e,t,n){"use strict";var i=n(5530),r=n(6141),s=n(950);t["Z"]=(0,i.Z)(r.Z,(0,s.J)("form")).extend({name:"v-form",provide(){return{form:this}},inheritAttrs:!1,props:{disabled:Boolean,lazyValidation:Boolean,readonly:Boolean,value:Boolean},data:()=>({inputs:[],watchers:[],errorBag:{}}),watch:{errorBag:{handler(e){const t=Object.values(e).includes(!0);this.$emit("input",!t)},deep:!0,immediate:!0}},methods:{watchInput(e){const t=e=>e.$watch("hasError",(t=>{this.$set(this.errorBag,e._uid,t)}),{immediate:!0}),n={_uid:e._uid,valid:()=>{},shouldValidate:()=>{}};return this.lazyValidation?n.shouldValidate=e.$watch("shouldValidate",(i=>{i&&(this.errorBag.hasOwnProperty(e._uid)||(n.valid=t(e)))})):n.valid=t(e),n},validate(){return 0===this.inputs.filter((e=>!e.validate(!0))).length},reset(){this.inputs.forEach((e=>e.reset())),this.resetErrorBag()},resetErrorBag(){this.lazyValidation&&setTimeout((()=>{this.errorBag={}}),0)},resetValidation(){this.inputs.forEach((e=>e.resetValidation())),this.resetErrorBag()},register(e){this.inputs.push(e),this.watchers.push(this.watchInput(e))},unregister(e){const t=this.inputs.find((t=>t._uid===e._uid));if(!t)return;const n=this.watchers.find((e=>e._uid===t._uid));n&&(n.valid(),n.shouldValidate()),this.watchers=this.watchers.filter((e=>e._uid!==t._uid)),this.inputs=this.inputs.filter((e=>e._uid!==t._uid)),this.$delete(this.errorBag,t._uid)}},render(e){return e("form",{staticClass:"v-form",attrs:{novalidate:!0,...this.attrs$},on:{submit:e=>this.$emit("submit",e)}},this.$slots.default)}})},7024:function(e,t,n){"use strict";n(1884);var i=n(144),r=n(7559),s=n(8131);const o=["sm","md","lg","xl"],a=(()=>o.reduce(((e,t)=>(e[t]={type:[Boolean,String,Number],default:!1},e)),{}))(),c=(()=>o.reduce(((e,t)=>(e["offset"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),u=(()=>o.reduce(((e,t)=>(e["order"+(0,s.jC)(t)]={type:[String,Number],default:null},e)),{}))(),l={col:Object.keys(a),offset:Object.keys(c),order:Object.keys(u)};function h(e,t,n){let i=e;if(null!=n&&!1!==n){if(t){const n=t.replace(e,"");i+=`-${n}`}return"col"!==e||""!==n&&!0!==n?(i+=`-${n}`,i.toLowerCase()):i.toLowerCase()}}const d=new Map;t["Z"]=i.ZP.extend({name:"v-col",functional:!0,props:{cols:{type:[Boolean,String,Number],default:!1},...a,offset:{type:[String,Number],default:null},...c,order:{type:[String,Number],default:null},...u,alignSelf:{type:String,default:null,validator:e=>["auto","start","end","center","baseline","stretch"].includes(e)},tag:{type:String,default:"div"}},render(e,{props:t,data:n,children:i,parent:s}){let o="";for(const r in t)o+=String(t[r]);let a=d.get(o);if(!a){let e;for(e in a=[],l)l[e].forEach((n=>{const i=t[n],r=h(e,n,i);r&&a.push(r)}));const n=a.some((e=>e.startsWith("col-")));a.push({col:!n||!t.cols,[`col-${t.cols}`]:t.cols,[`offset-${t.offset}`]:t.offset,[`order-${t.order}`]:t.order,[`align-self-${t.alignSelf}`]:t.alignSelf}),d.set(o,a)}return e(t.tag,(0,r.ZP)(n,{class:a}),i)}})},1819:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});n(9027),n(1884);var i=n(144);function r(e){return i.ZP.extend({name:`v-${e}`,functional:!0,props:{id:String,tag:{type:String,default:"div"}},render(t,{props:n,data:i,children:r}){i.staticClass=`${e} ${i.staticClass||""}`.trim();const{attrs:s}=i;if(s){i.attrs={};const e=Object.keys(s).filter((e=>{if("slot"===e)return!1;const t=s[e];return e.startsWith("data-")?(i.attrs[e]=t,!1):t||"string"===typeof t}));e.length&&(i.staticClass+=` ${e.join(" ")}`)}return n.id&&(i.domProps=i.domProps||{},i.domProps.id=n.id),t(n.tag,i,r)}})}var s=n(7559),o=r("container").extend({name:"v-container",functional:!0,props:{id:String,tag:{type:String,default:"div"},fluid:{type:Boolean,default:!1}},render(e,{props:t,data:n,children:i}){let r;const{attrs:o}=n;return o&&(n.attrs={},r=Object.keys(o).filter((e=>{if("slot"===e)return!1;const t=o[e];return e.startsWith("data-")?(n.attrs[e]=t,!1):t||"string"===typeof t}))),t.id&&(n.domProps=n.domProps||{},n.domProps.id=t.id),e(t.tag,(0,s.ZP)(n,{staticClass:"container",class:Array({"container--fluid":t.fluid}).concat(r||[])}),i)}})},7894:function(e,t,n){"use strict";n(1884);var i=n(144),r=n(7559),s=n(8131);const o=["sm","md","lg","xl"],a=["start","end","center"];function c(e,t){return o.reduce(((n,i)=>(n[e+(0,s.jC)(i)]=t(),n)),{})}const u=e=>[...a,"baseline","stretch"].includes(e),l=c("align",(()=>({type:String,default:null,validator:u}))),h=e=>[...a,"space-between","space-around"].includes(e),d=c("justify",(()=>({type:String,default:null,validator:h}))),f=e=>[...a,"space-between","space-around","stretch"].includes(e),p=c("alignContent",(()=>({type:String,default:null,validator:f}))),m={align:Object.keys(l),justify:Object.keys(d),alignContent:Object.keys(p)},g={align:"align",justify:"justify",alignContent:"align-content"};function v(e,t,n){let i=g[e];if(null!=n){if(t){const n=t.replace(e,"");i+=`-${n}`}return i+=`-${n}`,i.toLowerCase()}}const y=new Map;t["Z"]=i.ZP.extend({name:"v-row",functional:!0,props:{tag:{type:String,default:"div"},dense:Boolean,noGutters:Boolean,align:{type:String,default:null,validator:u},...l,justify:{type:String,default:null,validator:h},...d,alignContent:{type:String,default:null,validator:f},...p},render(e,{props:t,data:n,children:i}){let s="";for(const r in t)s+=String(t[r]);let o=y.get(s);if(!o){let e;for(e in o=[],m)m[e].forEach((n=>{const i=t[n],r=v(e,n,i);r&&o.push(r)}));o.push({"no-gutters":t.noGutters,"row--dense":t.dense,[`align-${t.align}`]:t.align,[`justify-${t.justify}`]:t.justify,[`align-content-${t.alignContent}`]:t.alignContent}),y.set(s,o)}return e(t.tag,(0,r.ZP)(n,{staticClass:"row",class:o}),i)}})},2515:function(e,t,n){"use strict";n(9027);var i=n(8131);t["Z"]=(0,i.Ji)("spacer","div","v-spacer")},9088:function(e,t,n){"use strict";n.d(t,{Z:function(){return p}});var i,r=n(6141),s=n(5836),o=n(2412),a=n(2066),c=n(8131),u=n(144),l=n(5530);function h(e){return["fas","far","fal","fab","fad","fak"].some((t=>e.includes(t)))}function d(e){return/^[mzlhvcsqta]\s*[-+.0-9][^mlhvzcsqta]+/i.test(e)&&/[\dz]$/i.test(e)&&e.length>4}(function(e){e["xSmall"]="12px",e["small"]="16px",e["default"]="24px",e["medium"]="28px",e["large"]="36px",e["xLarge"]="40px"})(i||(i={}));const f=(0,l.Z)(r.Z,s.Z,o.Z,a.Z).extend({name:"v-icon",props:{dense:Boolean,disabled:Boolean,left:Boolean,right:Boolean,size:[Number,String],tag:{type:String,required:!1,default:"i"}},computed:{medium(){return!1},hasClickListener(){return Boolean(this.listeners$.click||this.listeners$["!click"])}},methods:{getIcon(){let e="";return this.$slots.default&&(e=this.$slots.default[0].text.trim()),(0,c.RB)(this,e)},getSize(){const e={xSmall:this.xSmall,small:this.small,medium:this.medium,large:this.large,xLarge:this.xLarge},t=(0,c.XP)(e).find((t=>e[t]));return t&&i[t]||(0,c.kb)(this.size)},getDefaultData(){return{staticClass:"v-icon notranslate",class:{"v-icon--disabled":this.disabled,"v-icon--left":this.left,"v-icon--link":this.hasClickListener,"v-icon--right":this.right,"v-icon--dense":this.dense},attrs:{"aria-hidden":!this.hasClickListener,disabled:this.hasClickListener&&this.disabled,type:this.hasClickListener?"button":void 0,...this.attrs$},on:this.listeners$}},getSvgWrapperData(){const e=this.getSize(),t={...this.getDefaultData(),style:e?{fontSize:e,height:e,width:e}:void 0};return this.applyColors(t),t},applyColors(e){e.class={...e.class,...this.themeClasses},this.setTextColor(this.color,e)},renderFontIcon(e,t){const n=[],i=this.getDefaultData();let r="material-icons";const s=e.indexOf("-"),o=s<=-1;o?n.push(e):(r=e.slice(0,s),h(r)&&(r="")),i.class[r]=!0,i.class[e]=!o;const a=this.getSize();return a&&(i.style={fontSize:a}),this.applyColors(i),t(this.hasClickListener?"button":this.tag,i,n)},renderSvgIcon(e,t){const n={class:"v-icon__svg",attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",role:"img","aria-hidden":!0}},i=this.getSize();return i&&(n.style={fontSize:i,height:i,width:i}),t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t("svg",n,[t("path",{attrs:{d:e}})])])},renderSvgIconComponent(e,t){const n={class:{"v-icon__component":!0}},i=this.getSize();i&&(n.style={fontSize:i,height:i,width:i}),this.applyColors(n);const r=e.component;return n.props=e.props,n.nativeOn=n.on,t(this.hasClickListener?"button":"span",this.getSvgWrapperData(),[t(r,n)])}},render(e){const t=this.getIcon();return"string"===typeof t?d(t)?this.renderSvgIcon(t,e):this.renderFontIcon(t,e):this.renderSvgIconComponent(t,e)}});var p=u.ZP.extend({name:"v-icon",$_wrapperFor:f,functional:!0,render(e,{data:t,children:n}){let i="";return t.domProps&&(i=t.domProps.textContent||t.domProps.innerHTML||i,delete t.domProps.textContent,delete t.domProps.innerHTML),e(f,t,i?[i]:n)}})},9524:function(e,t,n){"use strict";var i=n(9088);t["Z"]=i.Z},1584:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(7006),r=n(9548),s=n(5530),o=n(8131),a=(0,s.Z)(r.Z).extend({name:"v-responsive",props:{aspectRatio:[String,Number],contentClass:String},computed:{computedAspectRatio(){return Number(this.aspectRatio)},aspectStyle(){return this.computedAspectRatio?{paddingBottom:1/this.computedAspectRatio*100+"%"}:void 0},__cachedSizer(){return this.aspectStyle?this.$createElement("div",{style:this.aspectStyle,staticClass:"v-responsive__sizer"}):[]}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-responsive__content",class:this.contentClass},(0,o.z9)(this))}},render(e){return e("div",{staticClass:"v-responsive",style:this.measurableStyles,on:this.$listeners},[this.__cachedSizer,this.genContent()])}}),c=a,u=n(2066),l=n(7559),h=n(8219);const d="undefined"!==typeof window&&"IntersectionObserver"in window;var f=(0,s.Z)(c,u.Z).extend({name:"v-img",directives:{intersect:i.Z},props:{alt:String,contain:Boolean,eager:Boolean,gradient:String,lazySrc:String,options:{type:Object,default:()=>({root:void 0,rootMargin:void 0,threshold:void 0})},position:{type:String,default:"center center"},sizes:String,src:{type:[String,Object],default:""},srcset:String,transition:{type:[Boolean,String],default:"fade-transition"}},data(){return{currentSrc:"",image:null,isLoading:!0,calculatedAspectRatio:void 0,naturalWidth:void 0,hasError:!1}},computed:{computedAspectRatio(){return Number(this.normalisedSrc.aspect||this.calculatedAspectRatio)},normalisedSrc(){return this.src&&"object"===typeof this.src?{src:this.src.src,srcset:this.srcset||this.src.srcset,lazySrc:this.lazySrc||this.src.lazySrc,aspect:Number(this.aspectRatio||this.src.aspect)}:{src:this.src,srcset:this.srcset,lazySrc:this.lazySrc,aspect:Number(this.aspectRatio||0)}},__cachedImage(){if(!(this.normalisedSrc.src||this.normalisedSrc.lazySrc||this.gradient))return[];const e=[],t=this.isLoading?this.normalisedSrc.lazySrc:this.currentSrc;this.gradient&&e.push(`linear-gradient(${this.gradient})`),t&&e.push(`url("${t}")`);const n=this.$createElement("div",{staticClass:"v-image__image",class:{"v-image__image--preload":this.isLoading,"v-image__image--contain":this.contain,"v-image__image--cover":!this.contain},style:{backgroundImage:e.join(", "),backgroundPosition:this.position},key:+this.isLoading});return this.transition?this.$createElement("transition",{attrs:{name:this.transition,mode:"in-out"}},[n]):n}},watch:{src(){this.isLoading?this.loadImage():this.init(void 0,void 0,!0)},"$vuetify.breakpoint.width":"getSrc"},mounted(){this.init()},methods:{init(e,t,n){if(!d||n||this.eager){if(this.normalisedSrc.lazySrc){const e=new Image;e.src=this.normalisedSrc.lazySrc,this.pollForSize(e,null)}this.normalisedSrc.src&&this.loadImage()}},onLoad(){this.getSrc(),this.isLoading=!1,this.$emit("load",this.src),this.image&&(this.normalisedSrc.src.endsWith(".svg")||this.normalisedSrc.src.startsWith("data:image/svg+xml"))&&(this.image.naturalHeight&&this.image.naturalWidth?(this.naturalWidth=this.image.naturalWidth,this.calculatedAspectRatio=this.image.naturalWidth/this.image.naturalHeight):this.calculatedAspectRatio=1)},onError(){this.hasError=!0,this.$emit("error",this.src)},getSrc(){this.image&&(this.currentSrc=this.image.currentSrc||this.image.src)},loadImage(){const e=new Image;this.image=e,e.onload=()=>{e.decode?e.decode().catch((e=>{(0,h.Kd)(`Failed to decode image, trying to render anyway\n\nsrc: ${this.normalisedSrc.src}`+(e.message?`\nOriginal error: ${e.message}`:""),this)})).then(this.onLoad):this.onLoad()},e.onerror=this.onError,this.hasError=!1,this.sizes&&(e.sizes=this.sizes),this.normalisedSrc.srcset&&(e.srcset=this.normalisedSrc.srcset),e.src=this.normalisedSrc.src,this.$emit("loadstart",this.normalisedSrc.src),this.aspectRatio||this.pollForSize(e),this.getSrc()},pollForSize(e,t=100){const n=()=>{const{naturalHeight:i,naturalWidth:r}=e;i||r?(this.naturalWidth=r,this.calculatedAspectRatio=r/i):e.complete||!this.isLoading||this.hasError||null==t||setTimeout(n,t)};n()},genContent(){const e=c.options.methods.genContent.call(this);return this.naturalWidth&&this._b(e.data,"div",{style:{width:`${this.naturalWidth}px`}}),e},__genPlaceholder(){const e=(0,o.z9)(this,"placeholder");if(e){const t=this.isLoading?[this.$createElement("div",{staticClass:"v-image__placeholder"},e)]:[];return this.transition?this.$createElement("transition",{props:{appear:!0,name:this.transition}},t):t[0]}}},render(e){const t=c.options.render.call(this,e),n=(0,l.ZP)(t.data,{staticClass:"v-image",attrs:{"aria-label":this.alt,role:this.alt?"img":void 0},class:this.themeClasses,directives:d?[{name:"intersect",modifiers:{once:!0},value:{handler:this.init,options:this.options}}]:void 0});return t.children=[this.__cachedSizer,this.__cachedImage,this.__genPlaceholder(),this.genContent()],e(t.tag,n,t.children)}})},7970:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(5439),r=i.Z.extend().extend({name:"v-list",provide(){return{isInList:!0,list:this}},inject:{isInMenu:{default:!1},isInNav:{default:!1}},props:{dense:Boolean,disabled:Boolean,expand:Boolean,flat:Boolean,nav:Boolean,rounded:Boolean,subheader:Boolean,threeLine:Boolean,twoLine:Boolean},data:()=>({groups:[]}),computed:{classes(){return{...i.Z.options.computed.classes.call(this),"v-list--dense":this.dense,"v-list--disabled":this.disabled,"v-list--flat":this.flat,"v-list--nav":this.nav,"v-list--rounded":this.rounded,"v-list--subheader":this.subheader,"v-list--two-line":this.twoLine,"v-list--three-line":this.threeLine}}},methods:{register(e){this.groups.push(e)},unregister(e){const t=this.groups.findIndex((t=>t._uid===e._uid));t>-1&&this.groups.splice(t,1)},listClick(e){if(!this.expand)for(const t of this.groups)t.toggle(e)}},render(e){const t={staticClass:"v-list",class:this.classes,style:this.styles,attrs:{role:this.isInNav||this.isInMenu?void 0:"list",...this.attrs$}};return e(this.tag,this.setBackgroundColor(this.color,t),[this.$slots.default])}})},1667:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var i=n(5836),r=n(9367),s=n(1302),o=n(2066),a=n(4552),c=n(293),u=n(8131),l=n(8219),h=n(5530);const d=(0,h.Z)(i.Z,r.Z,o.Z,(0,s.d)("listItemGroup"),(0,a.d)("inputValue"));var f=d.extend().extend({name:"v-list-item",directives:{Ripple:c.Z},inject:{isInGroup:{default:!1},isInList:{default:!1},isInMenu:{default:!1},isInNav:{default:!1}},inheritAttrs:!1,props:{activeClass:{type:String,default(){return this.listItemGroup?this.listItemGroup.activeClass:""}},dense:Boolean,inactive:Boolean,link:Boolean,selectable:{type:Boolean},tag:{type:String,default:"div"},threeLine:Boolean,twoLine:Boolean,value:null},data:()=>({proxyClass:"v-list-item--active"}),computed:{classes(){return{"v-list-item":!0,...r.Z.options.computed.classes.call(this),"v-list-item--dense":this.dense,"v-list-item--disabled":this.disabled,"v-list-item--link":this.isClickable&&!this.inactive,"v-list-item--selectable":this.selectable,"v-list-item--three-line":this.threeLine,"v-list-item--two-line":this.twoLine,...this.themeClasses}},isClickable(){return Boolean(r.Z.options.computed.isClickable.call(this)||this.listItemGroup)}},created(){this.$attrs.hasOwnProperty("avatar")&&(0,l.Jk)("avatar",this)},methods:{click(e){e.detail&&this.$el.blur(),this.$emit("click",e),this.to||this.toggle()},genAttrs(){const e={"aria-disabled":!!this.disabled||void 0,tabindex:this.isClickable&&!this.disabled?0:-1,...this.$attrs};return this.$attrs.hasOwnProperty("role")||this.isInNav||(this.isInGroup?(e.role="option",e["aria-selected"]=String(this.isActive)):this.isInMenu?(e.role=this.isClickable?"menuitem":void 0,e.id=e.id||`list-item-${this._uid}`):this.isInList&&(e.role="listitem")),e},toggle(){this.to&&void 0===this.inputValue&&(this.isActive=!this.isActive),this.$emit("change")}},render(e){let{tag:t,data:n}=this.generateRouteLink();n.attrs={...n.attrs,...this.genAttrs()},n[this.to?"nativeOn":"on"]={...n[this.to?"nativeOn":"on"],keydown:e=>{this.disabled||(e.keyCode===u.Do.enter&&this.click(e),this.$emit("keydown",e))}},this.inactive&&(t="div"),this.inactive&&this.to&&(n.on=n.nativeOn,delete n.nativeOn);const i=this.$scopedSlots.default?this.$scopedSlots.default({active:this.isActive,toggle:this.toggle}):this.$slots.default;return e(t,this.isActive?this.setTextColor(this.color,n):n,i)}})},8208:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(9396),r=i.Z,s=r.extend({name:"v-list-item-avatar",props:{horizontal:Boolean,size:{type:[Number,String],default:40}},computed:{classes(){return{"v-list-item__avatar--horizontal":this.horizontal,...r.options.computed.classes.call(this),"v-avatar--tile":this.tile||this.horizontal}}},render(e){const t=r.options.render.call(this,e);return t.data=t.data||{},t.data.staticClass+=" v-list-item__avatar",t}})},3560:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.ZP.extend({name:"v-list-item-icon",functional:!0,render(e,{data:t,children:n}){return t.staticClass=`v-list-item__icon ${t.staticClass||""}`.trim(),e("div",t,n)}})},6090:function(e,t,n){"use strict";n.d(t,{km:function(){return x},oZ:function(){return O},V9:function(){return A}});var i=n(8131),r=n(7970),s=n(9524),o=n(1667),a=n(3560),c=n(6141),u=n(6986),l=n(5836),h=n(4552),d=n(950),f=n(293),p=n(6930),m=n(5530);const g=(0,m.Z)(c.Z,u.Z,l.Z,(0,d.f)("list"),h.Z);var v=g.extend().extend({name:"v-list-group",directives:{ripple:f.Z},props:{activeClass:{type:String,default:""},appendIcon:{type:String,default:"$expand"},color:{type:String,default:"primary"},disabled:Boolean,group:[String,RegExp],noAction:Boolean,prependIcon:String,ripple:{type:[Boolean,Object],default:!0},subGroup:Boolean},computed:{classes(){return{"v-list-group--active":this.isActive,"v-list-group--disabled":this.disabled,"v-list-group--no-action":this.noAction,"v-list-group--sub-group":this.subGroup}}},watch:{isActive(e){!this.subGroup&&e&&this.list&&this.list.listClick(this._uid)},$route:"onRouteChange"},created(){this.list&&this.list.register(this),this.group&&this.$route&&null==this.value&&(this.isActive=this.matchRoute(this.$route.path))},beforeDestroy(){this.list&&this.list.unregister(this)},methods:{click(e){this.disabled||(this.isBooted=!0,this.$emit("click",e),this.$nextTick((()=>this.isActive=!this.isActive)))},genIcon(e){return this.$createElement(s.Z,e)},genAppendIcon(){const e=!this.subGroup&&this.appendIcon;return e||this.$slots.appendIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__append-icon"},[this.$slots.appendIcon||this.genIcon(e)]):null},genHeader(){return this.$createElement(o.Z,{staticClass:"v-list-group__header",attrs:{"aria-expanded":String(this.isActive),role:"button"},class:{[this.activeClass]:this.isActive},props:{inputValue:this.isActive},directives:[{name:"ripple",value:this.ripple}],on:{...this.listeners$,click:this.click}},[this.genPrependIcon(),this.$slots.activator,this.genAppendIcon()])},genItems(){return this.showLazyContent((()=>[this.$createElement("div",{staticClass:"v-list-group__items",directives:[{name:"show",value:this.isActive}]},(0,i.z9)(this))]))},genPrependIcon(){const e=this.subGroup&&null==this.prependIcon?"$subgroup":this.prependIcon;return e||this.$slots.prependIcon?this.$createElement(a.Z,{staticClass:"v-list-group__header__prepend-icon"},[this.$slots.prependIcon||this.genIcon(e)]):null},onRouteChange(e){if(!this.group)return;const t=this.matchRoute(e.path);t&&this.isActive!==t&&this.list&&this.list.listClick(this._uid),this.isActive=t},toggle(e){const t=this._uid===e;t&&(this.isBooted=!0),this.$nextTick((()=>this.isActive=t))},matchRoute(e){return null!==e.match(this.group)}},render(e){return e("div",this.setTextColor(this.isActive&&this.color,{staticClass:"v-list-group",class:this.classes}),[this.genHeader(),e(p.Fx,this.genItems())])}}),y=n(144),b=y.ZP.extend({name:"comparable",props:{valueComparator:{type:Function,default:i.vZ}}}),w=n(7779),_=n(2066),I=n(8219);const S=(0,m.Z)(b,w.Z,_.Z).extend({name:"base-item-group",props:{activeClass:{type:String,default:"v-item--active"},mandatory:Boolean,max:{type:[Number,String],default:null},multiple:Boolean,tag:{type:String,default:"div"}},data(){return{internalLazyValue:void 0!==this.value?this.value:this.multiple?[]:void 0,items:[]}},computed:{classes(){return{"v-item-group":!0,...this.themeClasses}},selectedIndex(){return this.selectedItem&&this.items.indexOf(this.selectedItem)||-1},selectedItem(){if(!this.multiple)return this.selectedItems[0]},selectedItems(){return this.items.filter(((e,t)=>this.toggleMethod(this.getValue(e,t))))},selectedValues(){return null==this.internalValue?[]:Array.isArray(this.internalValue)?this.internalValue:[this.internalValue]},toggleMethod(){if(!this.multiple)return e=>this.valueComparator(this.internalValue,e);const e=this.internalValue;return Array.isArray(e)?t=>e.some((e=>this.valueComparator(e,t))):()=>!1}},watch:{internalValue:"updateItemsState",items:"updateItemsState"},created(){this.multiple&&!Array.isArray(this.internalValue)&&(0,I.Kd)("Model must be bound to an array if the multiple property is true.",this)},methods:{genData(){return{class:this.classes}},getValue(e,t){return void 0===e.value?t:e.value},onClick(e){this.updateInternalValue(this.getValue(e,this.items.indexOf(e)))},register(e){const t=this.items.push(e)-1;e.$on("change",(()=>this.onClick(e))),this.mandatory&&!this.selectedValues.length&&this.updateMandatory(),this.updateItem(e,t)},unregister(e){if(this._isDestroyed)return;const t=this.items.indexOf(e),n=this.getValue(e,t);this.items.splice(t,1);const i=this.selectedValues.indexOf(n);if(!(i<0)){if(!this.mandatory)return this.updateInternalValue(n);this.multiple&&Array.isArray(this.internalValue)?this.internalValue=this.internalValue.filter((e=>e!==n)):this.internalValue=void 0,this.selectedItems.length||this.updateMandatory(!0)}},updateItem(e,t){const n=this.getValue(e,t);e.isActive=this.toggleMethod(n)},updateItemsState(){this.$nextTick((()=>{if(this.mandatory&&!this.selectedItems.length)return this.updateMandatory();this.items.forEach(this.updateItem)}))},updateInternalValue(e){this.multiple?this.updateMultiple(e):this.updateSingle(e)},updateMandatory(e){if(!this.items.length)return;const t=this.items.slice();e&&t.reverse();const n=t.find((e=>!e.disabled));if(!n)return;const i=this.items.indexOf(n);this.updateInternalValue(this.getValue(n,i))},updateMultiple(e){const t=Array.isArray(this.internalValue)?this.internalValue:[],n=t.slice(),i=n.findIndex((t=>this.valueComparator(t,e)));this.mandatory&&i>-1&&n.length-1<1||null!=this.max&&i<0&&n.length+1>this.max||(i>-1?n.splice(i,1):n.push(e),this.internalValue=n)},updateSingle(e){const t=this.valueComparator(this.internalValue,e);this.mandatory&&t||(this.internalValue=t?void 0:e)}},render(e){return e(this.tag,this.genData(),this.$slots.default)}});S.extend({name:"v-item-group",provide(){return{itemGroup:this}}});var T=(0,m.Z)(S,l.Z).extend({name:"v-list-item-group",provide(){return{isInGroup:!0,listItemGroup:this}},computed:{classes(){return{...S.options.computed.classes.call(this),"v-list-item-group":!0}}},methods:{genData(){return this.setTextColor(this.color,{...S.options.methods.genData.call(this),attrs:{role:"listbox"}})}}}),E=y.ZP.extend({name:"v-list-item-action",functional:!0,render(e,{data:t,children:n=[]}){t.staticClass=t.staticClass?`v-list-item__action ${t.staticClass}`:"v-list-item__action";const i=n.filter((e=>!1===e.isComment&&" "!==e.text));return i.length>1&&(t.staticClass+=" v-list-item__action--stack"),e("div",t,n)}}),k=n(8208);const C=(0,i.Ji)("v-list-item__action-text","span"),x=(0,i.Ji)("v-list-item__content","div"),A=(0,i.Ji)("v-list-item__title","div"),O=(0,i.Ji)("v-list-item__subtitle","div");r.Z,o.Z,k.Z,a.Z},3102:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(8191),r=i.Z.extend({name:"v-main",props:{tag:{type:String,default:"main"}},computed:{styles(){const{bar:e,top:t,right:n,footer:i,insetFooter:r,bottom:s,left:o}=this.$vuetify.application;return{paddingTop:`${t+e}px`,paddingRight:`${n}px`,paddingBottom:`${i+r+s}px`,paddingLeft:`${o}px`}}},render(e){const t={staticClass:"v-main",style:this.styles,ref:"main"};return e(this.tag,t,[e("div",{staticClass:"v-main__wrap"},this.$slots.default)])}})},8320:function(e,t,n){"use strict";n.d(t,{Z:function(){return C}});var i=n(1584),r=n(2404),s=n(5836),o=n(4665),a=n(8219),c=n(144),u=c.ZP.extend({name:"mobile",props:{mobileBreakpoint:{type:[Number,String],default(){return this.$vuetify?this.$vuetify.breakpoint.mobileBreakpoint:void 0},validator:e=>!isNaN(Number(e))||["xs","sm","md","lg","xl"].includes(String(e))}},computed:{isMobile(){const{mobile:e,width:t,name:n,mobileBreakpoint:i}=this.$vuetify.breakpoint;if(i===this.mobileBreakpoint)return e;const r=parseInt(this.mobileBreakpoint,10),s=!isNaN(r);return s?t<r:n===this.mobileBreakpoint}},created(){this.$attrs.hasOwnProperty("mobile-break-point")&&(0,a.Rn)("mobile-break-point","mobile-breakpoint",this)}}),l=n(8605),h=n(8191),d=n(2066),f=n(3664),p=n(161),m=n(8131);const g=e=>{const{touchstartX:t,touchendX:n,touchstartY:i,touchendY:r}=e,s=.5,o=16;e.offsetX=n-t,e.offsetY=r-i,Math.abs(e.offsetY)<s*Math.abs(e.offsetX)&&(e.left&&n<t-o&&e.left(e),e.right&&n>t+o&&e.right(e)),Math.abs(e.offsetX)<s*Math.abs(e.offsetY)&&(e.up&&r<i-o&&e.up(e),e.down&&r>i+o&&e.down(e))};function v(e,t){const n=e.changedTouches[0];t.touchstartX=n.clientX,t.touchstartY=n.clientY,t.start&&t.start(Object.assign(e,t))}function y(e,t){const n=e.changedTouches[0];t.touchendX=n.clientX,t.touchendY=n.clientY,t.end&&t.end(Object.assign(e,t)),g(t)}function b(e,t){const n=e.changedTouches[0];t.touchmoveX=n.clientX,t.touchmoveY=n.clientY,t.move&&t.move(Object.assign(e,t))}function w(e){const t={touchstartX:0,touchstartY:0,touchendX:0,touchendY:0,touchmoveX:0,touchmoveY:0,offsetX:0,offsetY:0,left:e.left,right:e.right,up:e.up,down:e.down,start:e.start,move:e.move,end:e.end};return{touchstart:e=>v(e,t),touchend:e=>y(e,t),touchmove:e=>b(e,t)}}function _(e,t,n){const i=t.value,r=i.parent?e.parentElement:e,s=i.options||{passive:!0};if(!r)return;const o=w(t.value);r._touchHandlers=Object(r._touchHandlers),r._touchHandlers[n.context._uid]=o,(0,m.XP)(o).forEach((e=>{r.addEventListener(e,o[e],s)}))}function I(e,t,n){const i=t.value.parent?e.parentElement:e;if(!i||!i._touchHandlers)return;const r=i._touchHandlers[n.context._uid];(0,m.XP)(r).forEach((e=>{i.removeEventListener(e,r[e])})),delete i._touchHandlers[n.context._uid]}const S={inserted:_,unbind:I};var T=S,E=n(5530);const k=(0,E.Z)((0,r.Z)("left",["isActive","isMobile","miniVariant","expandOnHover","permanent","right","temporary","width"]),s.Z,o.Z,u,l.Z,h.Z,d.Z);var C=k.extend({name:"v-navigation-drawer",directives:{ClickOutside:f.Z,Resize:p.Z,Touch:T},provide(){return{isInNav:"nav"===this.tag}},props:{bottom:Boolean,clipped:Boolean,disableResizeWatcher:Boolean,disableRouteWatcher:Boolean,expandOnHover:Boolean,floating:Boolean,height:{type:[Number,String],default(){return this.app?"100vh":"100%"}},miniVariant:Boolean,miniVariantWidth:{type:[Number,String],default:56},permanent:Boolean,right:Boolean,src:{type:[String,Object],default:""},stateless:Boolean,tag:{type:String,default(){return this.app?"nav":"aside"}},temporary:Boolean,touchless:Boolean,width:{type:[Number,String],default:256},value:null},data:()=>({isMouseover:!1,touchArea:{left:0,right:0},stackMinZIndex:6}),computed:{applicationProperty(){return this.right?"right":"left"},classes(){return{"v-navigation-drawer":!0,"v-navigation-drawer--absolute":this.absolute,"v-navigation-drawer--bottom":this.bottom,"v-navigation-drawer--clipped":this.clipped,"v-navigation-drawer--close":!this.isActive,"v-navigation-drawer--fixed":!this.absolute&&(this.app||this.fixed),"v-navigation-drawer--floating":this.floating,"v-navigation-drawer--is-mobile":this.isMobile,"v-navigation-drawer--is-mouseover":this.isMouseover,"v-navigation-drawer--mini-variant":this.isMiniVariant,"v-navigation-drawer--custom-mini-variant":56!==Number(this.miniVariantWidth),"v-navigation-drawer--open":this.isActive,"v-navigation-drawer--open-on-hover":this.expandOnHover,"v-navigation-drawer--right":this.right,"v-navigation-drawer--temporary":this.temporary,...this.themeClasses}},computedMaxHeight(){if(!this.hasApp)return null;const e=this.$vuetify.application.bottom+this.$vuetify.application.footer+this.$vuetify.application.bar;return this.clipped?e+this.$vuetify.application.top:e},computedTop(){if(!this.hasApp)return 0;let e=this.$vuetify.application.bar;return e+=this.clipped?this.$vuetify.application.top:0,e},computedTransform(){return this.isActive?0:this.isBottom||this.right?100:-100},computedWidth(){return this.isMiniVariant?this.miniVariantWidth:this.width},hasApp(){return this.app&&!this.isMobile&&!this.temporary},isBottom(){return this.bottom&&this.isMobile},isMiniVariant(){return!this.expandOnHover&&this.miniVariant||this.expandOnHover&&!this.isMouseover},isMobile(){return!this.stateless&&!this.permanent&&u.options.computed.isMobile.call(this)},reactsToClick(){return!this.stateless&&!this.permanent&&(this.isMobile||this.temporary)},reactsToMobile(){return this.app&&!this.disableResizeWatcher&&!this.permanent&&!this.stateless&&!this.temporary},reactsToResize(){return!this.disableResizeWatcher&&!this.stateless},reactsToRoute(){return!this.disableRouteWatcher&&!this.stateless&&(this.temporary||this.isMobile)},showOverlay(){return!this.hideOverlay&&this.isActive&&(this.isMobile||this.temporary)},styles(){const e=this.isBottom?"translateY":"translateX";return{height:(0,m.kb)(this.height),top:this.isBottom?"auto":(0,m.kb)(this.computedTop),maxHeight:null!=this.computedMaxHeight?`calc(100% - ${(0,m.kb)(this.computedMaxHeight)})`:void 0,transform:`${e}(${(0,m.kb)(this.computedTransform,"%")})`,width:(0,m.kb)(this.computedWidth)}}},watch:{$route:"onRouteChange",isActive(e){this.$emit("input",e)},isMobile(e,t){!e&&this.isActive&&!this.temporary&&this.removeOverlay(),null!=t&&this.reactsToResize&&this.reactsToMobile&&(this.isActive=!e)},permanent(e){e&&(this.isActive=!0)},showOverlay(e){e?this.genOverlay():this.removeOverlay()},value(e){this.permanent||(null!=e?e!==this.isActive&&(this.isActive=e):this.init())},expandOnHover:"updateMiniVariant",isMouseover(e){this.updateMiniVariant(!e)}},beforeMount(){this.init()},methods:{calculateTouchArea(){const e=this.$el.parentNode;if(!e)return;const t=e.getBoundingClientRect();this.touchArea={left:t.left+50,right:t.right-50}},closeConditional(){return this.isActive&&!this._isDestroyed&&this.reactsToClick},genAppend(){return this.genPosition("append")},genBackground(){const e={height:"100%",width:"100%",src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img(e):this.$createElement(i.Z,{props:e});return this.$createElement("div",{staticClass:"v-navigation-drawer__image"},[t])},genDirectives(){const e=[{name:"click-outside",value:{handler:()=>{this.isActive=!1},closeConditional:this.closeConditional,include:this.getOpenDependentElements}}];return this.touchless||this.stateless||e.push({name:"touch",value:{parent:!0,left:this.swipeLeft,right:this.swipeRight}}),e},genListeners(){const e={mouseenter:()=>this.isMouseover=!0,mouseleave:()=>this.isMouseover=!1,transitionend:e=>{if(e.target!==e.currentTarget)return;this.$emit("transitionend",e);const t=document.createEvent("UIEvents");t.initUIEvent("resize",!0,!1,window,0),window.dispatchEvent(t)}};return this.miniVariant&&(e.click=()=>this.$emit("update:mini-variant",!1)),e},genPosition(e){const t=(0,m.z9)(this,e);return t?this.$createElement("div",{staticClass:`v-navigation-drawer__${e}`},t):t},genPrepend(){return this.genPosition("prepend")},genContent(){return this.$createElement("div",{staticClass:"v-navigation-drawer__content"},this.$slots.default)},genBorder(){return this.$createElement("div",{staticClass:"v-navigation-drawer__border"})},init(){this.permanent?this.isActive=!0:this.stateless||null!=this.value?this.isActive=this.value:this.temporary||(this.isActive=!this.isMobile)},onRouteChange(){this.reactsToRoute&&this.closeConditional()&&(this.isActive=!1)},swipeLeft(e){this.isActive&&this.right||(this.calculateTouchArea(),Math.abs(e.touchendX-e.touchstartX)<100||(this.right&&e.touchstartX>=this.touchArea.right?this.isActive=!0:!this.right&&this.isActive&&(this.isActive=!1)))},swipeRight(e){this.isActive&&!this.right||(this.calculateTouchArea(),Math.abs(e.touchendX-e.touchstartX)<100||(!this.right&&e.touchstartX<=this.touchArea.left?this.isActive=!0:this.right&&this.isActive&&(this.isActive=!1)))},updateApplication(){if(!this.isActive||this.isMobile||this.temporary||!this.$el)return 0;const e=Number(this.miniVariant?this.miniVariantWidth:this.width);return isNaN(e)?this.$el.clientWidth:e},updateMiniVariant(e){this.expandOnHover&&this.miniVariant!==e&&this.$emit("update:mini-variant",e)}},render(e){const t=[this.genPrepend(),this.genContent(),this.genAppend(),this.genBorder()];return(this.src||(0,m.z9)(this,"img"))&&t.unshift(this.genBackground()),e(this.tag,this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,directives:this.genDirectives(),on:this.genListeners()}),t)}})},5439:function(e,t,n){"use strict";n.d(t,{Z:function(){return l}});var i=n(6141),r=n(5836),s=n(8427),o=n(9548),a=n(5357),c=n(2066),u=n(5530),l=(0,u.Z)(i.Z,r.Z,s.Z,o.Z,a.Z,c.Z).extend({name:"v-sheet",props:{outlined:Boolean,shaped:Boolean,tag:{type:String,default:"div"}},computed:{classes(){return{"v-sheet":!0,"v-sheet--outlined":this.outlined,"v-sheet--shaped":this.shaped,...this.themeClasses,...this.elevationClasses,...this.roundedClasses}},styles(){return this.measurableStyles}},render(e){const t={class:this.classes,style:this.styles,on:this.listeners$};return e(this.tag,this.setBackgroundColor(this.color,t),this.$slots.default)}})},9744:function(e,t,n){"use strict";var i=n(5439);t["Z"]=i.Z},2912:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(2066),r=n(5530),s=(0,r.Z)(i.Z).extend({name:"v-subheader",props:{inset:Boolean},render(e){return e("div",{staticClass:"v-subheader",class:{"v-subheader--inset":this.inset,...this.themeClasses},attrs:this.$attrs,on:this.$listeners},this.$slots.default)}})},2070:function(e,t,n){"use strict";n.d(t,{Z:function(){return D}});var i=n(9524),r=n(5836),s=n(2066),o=n(5530),a=n(8131),c=(0,o.Z)(s.Z).extend({name:"v-label",functional:!0,props:{absolute:Boolean,color:{type:String,default:"primary"},disabled:Boolean,focused:Boolean,for:String,left:{type:[Number,String],default:0},right:{type:[Number,String],default:"auto"},value:Boolean},render(e,t){const{children:n,listeners:i,props:o}=t,c={staticClass:"v-label",class:{"v-label--active":o.value,"v-label--is-disabled":o.disabled,...(0,s.X)(t)},attrs:{for:o.for,"aria-hidden":!o.for},on:i,style:{left:(0,a.kb)(o.left),right:(0,a.kb)(o.right),position:o.absolute?"absolute":"relative"},ref:"label"};return e("label",r.Z.options.methods.setTextColor(o.focused&&o.color,c),n)}}),u=c,l=(0,o.Z)(r.Z,s.Z).extend({name:"v-messages",props:{value:{type:Array,default:()=>[]}},methods:{genChildren(){return this.$createElement("transition-group",{staticClass:"v-messages__wrapper",attrs:{name:"message-transition",tag:"div"}},this.value.map(this.genMessage))},genMessage(e,t){return this.$createElement("div",{staticClass:"v-messages__message",key:t},(0,a.z9)(this,"default",{message:e,key:t})||[e])}},render(e){return e("div",this.setTextColor(this.color,{staticClass:"v-messages",class:this.themeClasses}),[this.genChildren()])}}),h=l,d=n(6141),f=n(950),p=n(8219);const m=(0,o.Z)(r.Z,(0,f.f)("form"),s.Z);var g=m.extend({name:"validatable",props:{disabled:Boolean,error:Boolean,errorCount:{type:[Number,String],default:1},errorMessages:{type:[String,Array],default:()=>[]},messages:{type:[String,Array],default:()=>[]},readonly:Boolean,rules:{type:Array,default:()=>[]},success:Boolean,successMessages:{type:[String,Array],default:()=>[]},validateOnBlur:Boolean,value:{required:!1}},data(){return{errorBucket:[],hasColor:!1,hasFocused:!1,hasInput:!1,isFocused:!1,isResetting:!1,lazyValue:this.value,valid:!1}},computed:{computedColor(){if(!this.isDisabled)return this.color?this.color:this.isDark&&!this.appIsDark?"white":"primary"},hasError(){return this.internalErrorMessages.length>0||this.errorBucket.length>0||this.error},hasSuccess(){return this.internalSuccessMessages.length>0||this.success},externalError(){return this.internalErrorMessages.length>0||this.error},hasMessages(){return this.validationTarget.length>0},hasState(){return!this.isDisabled&&(this.hasSuccess||this.shouldValidate&&this.hasError)},internalErrorMessages(){return this.genInternalMessages(this.errorMessages)},internalMessages(){return this.genInternalMessages(this.messages)},internalSuccessMessages(){return this.genInternalMessages(this.successMessages)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",e)}},isDisabled(){return this.disabled||!!this.form&&this.form.disabled},isInteractive(){return!this.isDisabled&&!this.isReadonly},isReadonly(){return this.readonly||!!this.form&&this.form.readonly},shouldValidate(){return!!this.externalError||!this.isResetting&&(this.validateOnBlur?this.hasFocused&&!this.isFocused:this.hasInput||this.hasFocused)},validations(){return this.validationTarget.slice(0,Number(this.errorCount))},validationState(){if(!this.isDisabled)return this.hasError&&this.shouldValidate?"error":this.hasSuccess?"success":this.hasColor?this.computedColor:void 0},validationTarget(){return this.internalErrorMessages.length>0?this.internalErrorMessages:this.successMessages&&this.successMessages.length>0?this.internalSuccessMessages:this.messages&&this.messages.length>0?this.internalMessages:this.shouldValidate?this.errorBucket:[]}},watch:{rules:{handler(e,t){(0,a.vZ)(e,t)||this.validate()},deep:!0},internalValue(){this.hasInput=!0,this.validateOnBlur||this.$nextTick(this.validate)},isFocused(e){e||this.isDisabled||(this.hasFocused=!0,this.validateOnBlur&&this.$nextTick(this.validate))},isResetting(){setTimeout((()=>{this.hasInput=!1,this.hasFocused=!1,this.isResetting=!1,this.validate()}),0)},hasError(e){this.shouldValidate&&this.$emit("update:error",e)},value(e){this.lazyValue=e}},beforeMount(){this.validate()},created(){this.form&&this.form.register(this)},beforeDestroy(){this.form&&this.form.unregister(this)},methods:{genInternalMessages(e){return e?Array.isArray(e)?e:[e]:[]},reset(){this.isResetting=!0,this.internalValue=Array.isArray(this.internalValue)?[]:null},resetValidation(){this.isResetting=!0},validate(e=!1,t){const n=[];t=t||this.internalValue,e&&(this.hasInput=this.hasFocused=!0);for(let i=0;i<this.rules.length;i++){const e=this.rules[i],r="function"===typeof e?e(t):e;!1===r||"string"===typeof r?n.push(r||""):"boolean"!==typeof r&&(0,p.N6)(`Rules should return a string or boolean, received '${typeof r}' instead`,this)}return this.errorBucket=n,this.valid=0===n.length,this.valid}}}),v=n(7559);const y=(0,o.Z)(d.Z,g);var b=y.extend().extend({name:"v-input",inheritAttrs:!1,props:{appendIcon:String,backgroundColor:{type:String,default:""},dense:Boolean,height:[Number,String],hideDetails:[Boolean,String],hideSpinButtons:Boolean,hint:String,id:String,label:String,loading:Boolean,persistentHint:Boolean,prependIcon:String,value:null},data(){return{lazyValue:this.value,hasMouseDown:!1}},computed:{classes(){return{"v-input--has-state":this.hasState,"v-input--hide-details":!this.showDetails,"v-input--is-label-active":this.isLabelActive,"v-input--is-dirty":this.isDirty,"v-input--is-disabled":this.isDisabled,"v-input--is-focused":this.isFocused,"v-input--is-loading":!1!==this.loading&&null!=this.loading,"v-input--is-readonly":this.isReadonly,"v-input--dense":this.dense,"v-input--hide-spin-buttons":this.hideSpinButtons,...this.themeClasses}},computedId(){return this.id||`input-${this._uid}`},hasDetails(){return this.messagesToDisplay.length>0},hasHint(){return!this.hasMessages&&!!this.hint&&(this.persistentHint||this.isFocused)},hasLabel(){return!(!this.$slots.label&&!this.label)},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit(this.$_modelEvent,e)}},isDirty(){return!!this.lazyValue},isLabelActive(){return this.isDirty},messagesToDisplay(){return this.hasHint?[this.hint]:this.hasMessages?this.validations.map((e=>{if("string"===typeof e)return e;const t=e(this.internalValue);return"string"===typeof t?t:""})).filter((e=>""!==e)):[]},showDetails(){return!1===this.hideDetails||"auto"===this.hideDetails&&this.hasDetails}},watch:{value(e){this.lazyValue=e}},beforeCreate(){this.$_modelEvent=this.$options.model&&this.$options.model.event||"input"},methods:{genContent(){return[this.genPrependSlot(),this.genControl(),this.genAppendSlot()]},genControl(){return this.$createElement("div",{staticClass:"v-input__control",attrs:{title:this.attrs$.title}},[this.genInputSlot(),this.genMessages()])},genDefaultSlot(){return[this.genLabel(),this.$slots.default]},genIcon(e,t,n={}){const r=this[`${e}Icon`],s=`click:${(0,a.GL)(e)}`,o=!(!this.listeners$[s]&&!t),c=(0,v.ZP)({attrs:{"aria-label":o?(0,a.GL)(e).split("-")[0]+" icon":void 0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,light:this.light,tabindex:"clear"===e?-1:void 0},on:o?{click:e=>{e.preventDefault(),e.stopPropagation(),this.$emit(s,e),t&&t(e)},mouseup:e=>{e.preventDefault(),e.stopPropagation()}}:void 0},n);return this.$createElement("div",{staticClass:"v-input__icon",class:e?`v-input__icon--${(0,a.GL)(e)}`:void 0},[this.$createElement(i.Z,c,r)])},genInputSlot(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor,{staticClass:"v-input__slot",style:{height:(0,a.kb)(this.height)},on:{click:this.onClick,mousedown:this.onMouseDown,mouseup:this.onMouseUp},ref:"input-slot"}),[this.genDefaultSlot()])},genLabel(){return this.hasLabel?this.$createElement(u,{props:{color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:this.hasState,for:this.computedId,light:this.light}},this.$slots.label||this.label):null},genMessages(){return this.showDetails?this.$createElement(h,{props:{color:this.hasHint?"":this.validationState,dark:this.dark,light:this.light,value:this.messagesToDisplay},attrs:{role:this.hasMessages?"alert":null},scopedSlots:{default:e=>(0,a.z9)(this,"message",e)}}):null},genSlot(e,t,n){if(!n.length)return null;const i=`${e}-${t}`;return this.$createElement("div",{staticClass:`v-input__${i}`,ref:i},n)},genPrependSlot(){const e=[];return this.$slots.prepend?e.push(this.$slots.prepend):this.prependIcon&&e.push(this.genIcon("prepend")),this.genSlot("prepend","outer",e)},genAppendSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","outer",e)},onClick(e){this.$emit("click",e)},onMouseDown(e){this.hasMouseDown=!0,this.$emit("mousedown",e)},onMouseUp(e){this.hasMouseDown=!1,this.$emit("mouseup",e)}},render(e){return e("div",this.setTextColor(this.validationState,{staticClass:"v-input",class:this.classes}),this.genContent())}}),w=b,_=(0,o.Z)(s.Z).extend({name:"v-counter",functional:!0,props:{value:{type:[Number,String],default:""},max:[Number,String]},render(e,t){const{props:n}=t,i=parseInt(n.max,10),r=parseInt(n.value,10),o=i?`${r} / ${i}`:String(n.value),a=i&&r>i;return e("div",{staticClass:"v-counter",class:{"error--text":a,...(0,s.X)(t)}},o)}}),I=_,S=n(7006),T=n(144);function E(e){return T.ZP.extend({name:"intersectable",data:()=>({isIntersecting:!1}),mounted(){S.Z.inserted(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},destroyed(){S.Z.unbind(this.$el,{name:"intersect",value:this.onObserve},this.$vnode)},methods:{onObserve(t,n,i){if(this.isIntersecting=i,i)for(let r=0,s=e.onVisible.length;r<s;r++){const t=this[e.onVisible[r]];"function"!==typeof t?(0,p.Kd)(e.onVisible[r]+" method is not available on the instance but referenced in intersectable mixin options"):t()}}}})}var k=n(9799),C=n(161),x=n(293),A=n(3118);const O=(0,o.Z)(w,E({onVisible:["onResize","tryAutofocus"]}),k.Z),N=["color","file","time","date","datetime-local","week","month"];var D=O.extend().extend({name:"v-text-field",directives:{resize:C.Z,ripple:x.Z},inheritAttrs:!1,props:{appendOuterIcon:String,autofocus:Boolean,clearable:Boolean,clearIcon:{type:String,default:"$clear"},counter:[Boolean,Number,String],counterValue:Function,filled:Boolean,flat:Boolean,fullWidth:Boolean,label:String,outlined:Boolean,placeholder:String,prefix:String,prependInnerIcon:String,persistentPlaceholder:Boolean,reverse:Boolean,rounded:Boolean,shaped:Boolean,singleLine:Boolean,solo:Boolean,soloInverted:Boolean,suffix:String,type:{type:String,default:"text"}},data:()=>({badInput:!1,labelWidth:0,prefixWidth:0,prependWidth:0,initialValue:null,isBooted:!1,isClearing:!1}),computed:{classes(){return{...w.options.computed.classes.call(this),"v-text-field":!0,"v-text-field--full-width":this.fullWidth,"v-text-field--prefix":this.prefix,"v-text-field--single-line":this.isSingle,"v-text-field--solo":this.isSolo,"v-text-field--solo-inverted":this.soloInverted,"v-text-field--solo-flat":this.flat,"v-text-field--filled":this.filled,"v-text-field--is-booted":this.isBooted,"v-text-field--enclosed":this.isEnclosed,"v-text-field--reverse":this.reverse,"v-text-field--outlined":this.outlined,"v-text-field--placeholder":this.placeholder,"v-text-field--rounded":this.rounded,"v-text-field--shaped":this.shaped}},computedColor(){const e=g.options.computed.computedColor.call(this);return this.soloInverted&&this.isFocused?this.color||"primary":e},computedCounterValue(){return"function"===typeof this.counterValue?this.counterValue(this.internalValue):[...(this.internalValue||"").toString()].length},hasCounter(){return!1!==this.counter&&null!=this.counter},hasDetails(){return w.options.computed.hasDetails.call(this)||this.hasCounter},internalValue:{get(){return this.lazyValue},set(e){this.lazyValue=e,this.$emit("input",this.lazyValue)}},isDirty(){var e;return(null===(e=this.lazyValue)||void 0===e?void 0:e.toString().length)>0||this.badInput},isEnclosed(){return this.filled||this.isSolo||this.outlined},isLabelActive(){return this.isDirty||N.includes(this.type)},isSingle(){return this.isSolo||this.singleLine||this.fullWidth||this.filled&&!this.hasLabel},isSolo(){return this.solo||this.soloInverted},labelPosition(){let e=this.prefix&&!this.labelValue?this.prefixWidth:0;return this.labelValue&&this.prependWidth&&(e-=this.prependWidth),this.$vuetify.rtl===this.reverse?{left:e,right:"auto"}:{left:"auto",right:e}},showLabel(){return this.hasLabel&&!(this.isSingle&&this.labelValue)},labelValue(){return this.isFocused||this.isLabelActive||this.persistentPlaceholder}},watch:{outlined:"setLabelWidth",label(){this.$nextTick(this.setLabelWidth)},prefix(){this.$nextTick(this.setPrefixWidth)},isFocused:"updateValue",value(e){this.lazyValue=e}},created(){this.$attrs.hasOwnProperty("box")&&(0,p.fK)("box","filled",this),this.$attrs.hasOwnProperty("browser-autocomplete")&&(0,p.fK)("browser-autocomplete","autocomplete",this),this.shaped&&!(this.filled||this.outlined||this.isSolo)&&(0,p.Kd)("shaped should be used with either filled or outlined",this)},mounted(){this.$watch((()=>this.labelValue),this.setLabelWidth),this.autofocus&&this.tryAutofocus(),requestAnimationFrame((()=>{this.isBooted=!0,requestAnimationFrame((()=>{this.isIntersecting||this.onResize()}))}))},methods:{focus(){this.onFocus()},blur(e){window.requestAnimationFrame((()=>{this.$refs.input&&this.$refs.input.blur()}))},clearableCallback(){this.$refs.input&&this.$refs.input.focus(),this.$nextTick((()=>this.internalValue=null))},genAppendSlot(){const e=[];return this.$slots["append-outer"]?e.push(this.$slots["append-outer"]):this.appendOuterIcon&&e.push(this.genIcon("appendOuter")),this.genSlot("append","outer",e)},genPrependInnerSlot(){const e=[];return this.$slots["prepend-inner"]?e.push(this.$slots["prepend-inner"]):this.prependInnerIcon&&e.push(this.genIcon("prependInner")),this.genSlot("prepend","inner",e)},genIconSlot(){const e=[];return this.$slots.append?e.push(this.$slots.append):this.appendIcon&&e.push(this.genIcon("append")),this.genSlot("append","inner",e)},genInputSlot(){const e=w.options.methods.genInputSlot.call(this),t=this.genPrependInnerSlot();return t&&(e.children=e.children||[],e.children.unshift(t)),e},genClearIcon(){return this.clearable?this.isDirty?this.genSlot("append","inner",[this.genIcon("clear",this.clearableCallback)]):this.genSlot("append","inner",[this.$createElement("div")]):null},genCounter(){var e,t,n;if(!this.hasCounter)return null;const i=!0===this.counter?this.attrs$.maxlength:this.counter,r={dark:this.dark,light:this.light,max:i,value:this.computedCounterValue};return null!==(n=null===(t=(e=this.$scopedSlots).counter)||void 0===t?void 0:t.call(e,{props:r}))&&void 0!==n?n:this.$createElement(I,{props:r})},genControl(){return w.options.methods.genControl.call(this)},genDefaultSlot(){return[this.genFieldset(),this.genTextFieldSlot(),this.genClearIcon(),this.genIconSlot(),this.genProgress()]},genFieldset(){return this.outlined?this.$createElement("fieldset",{attrs:{"aria-hidden":!0}},[this.genLegend()]):null},genLabel(){if(!this.showLabel)return null;const e={props:{absolute:!0,color:this.validationState,dark:this.dark,disabled:this.isDisabled,focused:!this.isSingle&&(this.isFocused||!!this.validationState),for:this.computedId,left:this.labelPosition.left,light:this.light,right:this.labelPosition.right,value:this.labelValue}};return this.$createElement(u,e,this.$slots.label||this.label)},genLegend(){const e=this.singleLine||!this.labelValue&&!this.isDirty?0:this.labelWidth,t=this.$createElement("span",{domProps:{innerHTML:"&#8203;"},staticClass:"notranslate"});return this.$createElement("legend",{style:{width:this.isSingle?void 0:(0,a.kb)(e)}},[t])},genInput(){const e=Object.assign({},this.listeners$);delete e.change;const{title:t,...n}=this.attrs$;return this.$createElement("input",{style:{},domProps:{value:"number"===this.type&&Object.is(this.lazyValue,-0)?"-0":this.lazyValue},attrs:{...n,autofocus:this.autofocus,disabled:this.isDisabled,id:this.computedId,placeholder:this.persistentPlaceholder||this.isFocused||!this.hasLabel?this.placeholder:void 0,readonly:this.isReadonly,type:this.type},on:Object.assign(e,{blur:this.onBlur,input:this.onInput,focus:this.onFocus,keydown:this.onKeyDown}),ref:"input",directives:[{name:"resize",modifiers:{quiet:!0},value:this.onResize}]})},genMessages(){if(!this.showDetails)return null;const e=w.options.methods.genMessages.call(this),t=this.genCounter();return this.$createElement("div",{staticClass:"v-text-field__details"},[e,t])},genTextFieldSlot(){return this.$createElement("div",{staticClass:"v-text-field__slot"},[this.genLabel(),this.prefix?this.genAffix("prefix"):null,this.genInput(),this.suffix?this.genAffix("suffix"):null])},genAffix(e){return this.$createElement("div",{class:`v-text-field__${e}`,ref:e},this[e])},onBlur(e){this.isFocused=!1,e&&this.$nextTick((()=>this.$emit("blur",e)))},onClick(){this.isFocused||this.isDisabled||!this.$refs.input||this.$refs.input.focus()},onFocus(e){if(!this.$refs.input)return;const t=(0,A.e)(this.$el);return t?t.activeElement!==this.$refs.input?this.$refs.input.focus():void(this.isFocused||(this.isFocused=!0,e&&this.$emit("focus",e))):void 0},onInput(e){const t=e.target;this.internalValue=t.value,this.badInput=t.validity&&t.validity.badInput},onKeyDown(e){e.keyCode===a.Do.enter&&this.lazyValue!==this.initialValue&&(this.initialValue=this.lazyValue,this.$emit("change",this.initialValue)),this.$emit("keydown",e)},onMouseDown(e){e.target!==this.$refs.input&&(e.preventDefault(),e.stopPropagation()),w.options.methods.onMouseDown.call(this,e)},onMouseUp(e){this.hasMouseDown&&this.focus(),w.options.methods.onMouseUp.call(this,e)},setLabelWidth(){this.outlined&&(this.labelWidth=this.$refs.label?Math.min(.75*this.$refs.label.scrollWidth+6,this.$el.offsetWidth-24):0)},setPrefixWidth(){this.$refs.prefix&&(this.prefixWidth=this.$refs.prefix.offsetWidth)},setPrependWidth(){this.outlined&&this.$refs["prepend-inner"]&&(this.prependWidth=this.$refs["prepend-inner"].offsetWidth)},tryAutofocus(){if(!this.autofocus||"undefined"===typeof document||!this.$refs.input)return!1;const e=(0,A.e)(this.$el);return!(!e||e.activeElement===this.$refs.input)&&(this.$refs.input.focus(),!0)},updateValue(e){this.hasColor=e,e?this.initialValue=this.lazyValue:this.initialValue!==this.lazyValue&&this.$emit("change",this.lazyValue)},onResize(){this.setLabelWidth(),this.setPrefixWidth(),this.setPrependWidth()}}})},2379:function(e,t,n){"use strict";n.d(t,{Z:function(){return o}});var i=n(2070),r=n(5530);const s=(0,r.Z)(i.Z);var o=s.extend({name:"v-textarea",props:{autoGrow:Boolean,noResize:Boolean,rowHeight:{type:[Number,String],default:24,validator:e=>!isNaN(parseFloat(e))},rows:{type:[Number,String],default:5,validator:e=>!isNaN(parseInt(e,10))}},computed:{classes(){return{"v-textarea":!0,"v-textarea--auto-grow":this.autoGrow,"v-textarea--no-resize":this.noResizeHandle,...i.Z.options.computed.classes.call(this)}},noResizeHandle(){return this.noResize||this.autoGrow}},watch:{autoGrow(e){this.$nextTick((()=>{var t;e?this.calculateInputHeight():null===(t=this.$refs.input)||void 0===t||t.style.removeProperty("height")}))},lazyValue(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)},rowHeight(){this.autoGrow&&this.$nextTick(this.calculateInputHeight)}},mounted(){setTimeout((()=>{this.autoGrow&&this.calculateInputHeight()}),0)},methods:{calculateInputHeight(){const e=this.$refs.input;if(!e)return;e.style.height="0";const t=e.scrollHeight,n=parseInt(this.rows,10)*parseFloat(this.rowHeight);e.style.height=Math.max(n,t)+"px"},genInput(){const e=i.Z.options.methods.genInput.call(this);return e.tag="textarea",delete e.data.attrs.type,e.data.attrs.rows=this.rows,e},onInput(e){i.Z.options.methods.onInput.call(this,e),this.autoGrow&&this.calculateInputHeight()},onKeyDown(e){this.isFocused&&13===e.keyCode&&e.stopPropagation(),this.$emit("keydown",e)}}})},2732:function(e,t,n){"use strict";n.d(t,{Z:function(){return a}});var i=n(5439),r=n(1584),s=n(8131),o=n(8219),a=i.Z.extend({name:"v-toolbar",props:{absolute:Boolean,bottom:Boolean,collapse:Boolean,dense:Boolean,extended:Boolean,extensionHeight:{default:48,type:[Number,String]},flat:Boolean,floating:Boolean,prominent:Boolean,short:Boolean,src:{type:[String,Object],default:""},tag:{type:String,default:"header"}},data:()=>({isExtended:!1}),computed:{computedHeight(){const e=this.computedContentHeight;if(!this.isExtended)return e;const t=parseInt(this.extensionHeight);return this.isCollapsed?e:e+(isNaN(t)?0:t)},computedContentHeight(){return this.height?parseInt(this.height):this.isProminent&&this.dense?96:this.isProminent&&this.short?112:this.isProminent?128:this.dense?48:this.short||this.$vuetify.breakpoint.smAndDown?56:64},classes(){return{...i.Z.options.computed.classes.call(this),"v-toolbar":!0,"v-toolbar--absolute":this.absolute,"v-toolbar--bottom":this.bottom,"v-toolbar--collapse":this.collapse,"v-toolbar--collapsed":this.isCollapsed,"v-toolbar--dense":this.dense,"v-toolbar--extended":this.isExtended,"v-toolbar--flat":this.flat,"v-toolbar--floating":this.floating,"v-toolbar--prominent":this.isProminent}},isCollapsed(){return this.collapse},isProminent(){return this.prominent},styles(){return{...this.measurableStyles,height:(0,s.kb)(this.computedHeight)}}},created(){const e=[["app","<v-app-bar app>"],["manual-scroll",'<v-app-bar :value="false">'],["clipped-left","<v-app-bar clipped-left>"],["clipped-right","<v-app-bar clipped-right>"],["inverted-scroll","<v-app-bar inverted-scroll>"],["scroll-off-screen","<v-app-bar scroll-off-screen>"],["scroll-target","<v-app-bar scroll-target>"],["scroll-threshold","<v-app-bar scroll-threshold>"],["card","<v-app-bar flat>"]];e.forEach((([e,t])=>{this.$attrs.hasOwnProperty(e)&&(0,o.fK)(e,t,this)}))},methods:{genBackground(){const e={height:(0,s.kb)(this.computedHeight),src:this.src},t=this.$scopedSlots.img?this.$scopedSlots.img({props:e}):this.$createElement(r.Z,{props:e});return this.$createElement("div",{staticClass:"v-toolbar__image"},[t])},genContent(){return this.$createElement("div",{staticClass:"v-toolbar__content",style:{height:(0,s.kb)(this.computedContentHeight)}},(0,s.z9)(this))},genExtension(){return this.$createElement("div",{staticClass:"v-toolbar__extension",style:{height:(0,s.kb)(this.extensionHeight)}},(0,s.z9)(this,"extension"))}},render(e){this.isExtended=this.extended||!!this.$scopedSlots.extension;const t=[this.genContent()],n=this.setBackgroundColor(this.color,{class:this.classes,style:this.styles,on:this.$listeners});return this.isExtended&&t.push(this.genExtension()),(this.src||this.$scopedSlots.img)&&t.unshift(this.genBackground()),e(this.tag,n,t)}})},3845:function(e,t,n){"use strict";n.d(t,{qW:function(){return s}});var i=n(2732),r=n(8131);const s=(0,r.Ji)("v-toolbar__title"),o=(0,r.Ji)("v-toolbar__items");i.Z},6930:function(e,t,n){"use strict";n.d(t,{Fx:function(){return h},Zq:function(){return d},Z5:function(){return u},Qn:function(){return l}});var i=n(7559);function r(e=[],...t){return Array().concat(e,...t)}function s(e,t="top center 0",n){return{name:e,functional:!0,props:{group:{type:Boolean,default:!1},hideOnLeave:{type:Boolean,default:!1},leaveAbsolute:{type:Boolean,default:!1},mode:{type:String,default:n},origin:{type:String,default:t}},render(t,n){const s="transition"+(n.props.group?"-group":""),o={props:{name:e,mode:n.props.mode},on:{beforeEnter(e){e.style.transformOrigin=n.props.origin,e.style.webkitTransformOrigin=n.props.origin}}};return n.props.leaveAbsolute&&(o.on.leave=r(o.on.leave,(e=>{const{offsetTop:t,offsetLeft:n,offsetWidth:i,offsetHeight:r}=e;e._transitionInitialStyles={position:e.style.position,top:e.style.top,left:e.style.left,width:e.style.width,height:e.style.height},e.style.position="absolute",e.style.top=t+"px",e.style.left=n+"px",e.style.width=i+"px",e.style.height=r+"px"})),o.on.afterLeave=r(o.on.afterLeave,(e=>{if(e&&e._transitionInitialStyles){const{position:t,top:n,left:i,width:r,height:s}=e._transitionInitialStyles;delete e._transitionInitialStyles,e.style.position=t||"",e.style.top=n||"",e.style.left=i||"",e.style.width=r||"",e.style.height=s||""}}))),n.props.hideOnLeave&&(o.on.leave=r(o.on.leave,(e=>{e.style.setProperty("display","none","important")}))),t(s,(0,i.ZP)(n.data,o),n.children)}}}function o(e,t,n="in-out"){return{name:e,functional:!0,props:{mode:{type:String,default:n}},render(n,r){return n("transition",(0,i.ZP)(r.data,{props:{name:e},on:t}),r.children)}}}var a=n(8131);function c(e="",t=!1){const n=t?"width":"height",i=`offset${(0,a.jC)(n)}`;return{beforeEnter(e){e._parent=e.parentNode,e._initialStyle={transition:e.style.transition,overflow:e.style.overflow,[n]:e.style[n]}},enter(t){const r=t._initialStyle;t.style.setProperty("transition","none","important"),t.style.overflow="hidden";const s=`${t[i]}px`;t.style[n]="0",t.offsetHeight,t.style.transition=r.transition,e&&t._parent&&t._parent.classList.add(e),requestAnimationFrame((()=>{t.style[n]=s}))},afterEnter:s,enterCancelled:s,leave(e){e._initialStyle={transition:"",overflow:e.style.overflow,[n]:e.style[n]},e.style.overflow="hidden",e.style[n]=`${e[i]}px`,e.offsetHeight,requestAnimationFrame((()=>e.style[n]="0"))},afterLeave:r,leaveCancelled:r};function r(t){e&&t._parent&&t._parent.classList.remove(e),s(t)}function s(e){const t=e._initialStyle[n];e.style.overflow=e._initialStyle.overflow,null!=t&&(e.style[n]=t),delete e._initialStyle}}s("carousel-transition"),s("carousel-reverse-transition"),s("tab-transition"),s("tab-reverse-transition"),s("menu-transition"),s("fab-transition","center center","out-in"),s("dialog-transition"),s("dialog-bottom-transition"),s("dialog-top-transition");const u=s("fade-transition"),l=(s("scale-transition"),s("scroll-x-transition"),s("scroll-x-reverse-transition"),s("scroll-y-transition"),s("scroll-y-reverse-transition"),s("slide-x-transition")),h=(s("slide-x-reverse-transition"),s("slide-y-transition"),s("slide-y-reverse-transition"),o("expand-transition",c())),d=o("expand-x-transition",c("",!0))},3664:function(e,t,n){"use strict";var i=n(3118);function r(){return!0}function s(e,t,n){if(!e||!1===o(e,n))return!1;const r=(0,i.e)(t);if("undefined"!==typeof ShadowRoot&&r instanceof ShadowRoot&&r.host===e.target)return!1;const s=("object"===typeof n.value&&n.value.include||(()=>[]))();return s.push(t),!s.some((t=>t.contains(e.target)))}function o(e,t){const n="object"===typeof t.value&&t.value.closeConditional||r;return n(e)}function a(e,t,n){const i="function"===typeof n.value?n.value:n.value.handler;t._clickOutside.lastMousedownWasOutside&&s(e,t,n)&&setTimeout((()=>{o(e,n)&&i&&i(e)}),0)}function c(e,t){const n=(0,i.e)(e);t(document),"undefined"!==typeof ShadowRoot&&n instanceof ShadowRoot&&t(n)}const u={inserted(e,t,n){const i=n=>a(n,e,t),r=n=>{e._clickOutside.lastMousedownWasOutside=s(n,e,t)};c(e,(e=>{e.addEventListener("click",i,!0),e.addEventListener("mousedown",r,!0)})),e._clickOutside||(e._clickOutside={lastMousedownWasOutside:!0}),e._clickOutside[n.context._uid]={onClick:i,onMousedown:r}},unbind(e,t,n){e._clickOutside&&(c(e,(t=>{var i;if(!t||!(null===(i=e._clickOutside)||void 0===i?void 0:i[n.context._uid]))return;const{onClick:r,onMousedown:s}=e._clickOutside[n.context._uid];t.removeEventListener("click",r,!0),t.removeEventListener("mousedown",s,!0)})),delete e._clickOutside[n.context._uid])}};t["Z"]=u},7006:function(e,t,n){"use strict";function i(e,t,n){if("undefined"===typeof window||!("IntersectionObserver"in window))return;const i=t.modifiers||{},s=t.value,{handler:o,options:a}="object"===typeof s?s:{handler:s,options:{}},c=new IntersectionObserver(((s=[],a)=>{var c;const u=null===(c=e._observe)||void 0===c?void 0:c[n.context._uid];if(!u)return;const l=s.some((e=>e.isIntersecting));!o||i.quiet&&!u.init||i.once&&!l&&!u.init||o(s,a,l),l&&i.once?r(e,t,n):u.init=!0}),a);e._observe=Object(e._observe),e._observe[n.context._uid]={init:!1,observer:c},c.observe(e)}function r(e,t,n){var i;const r=null===(i=e._observe)||void 0===i?void 0:i[n.context._uid];r&&(r.observer.unobserve(e),delete e._observe[n.context._uid])}const s={inserted:i,unbind:r};t["Z"]=s},161:function(e,t,n){"use strict";function i(e,t,n){const i=t.value,r=t.options||{passive:!0};window.addEventListener("resize",i,r),e._onResize=Object(e._onResize),e._onResize[n.context._uid]={callback:i,options:r},t.modifiers&&t.modifiers.quiet||i()}function r(e,t,n){var i;if(!(null===(i=e._onResize)||void 0===i?void 0:i[n.context._uid]))return;const{callback:r,options:s}=e._onResize[n.context._uid];window.removeEventListener("resize",r,s),delete e._onResize[n.context._uid]}const s={inserted:i,unbind:r};t["Z"]=s},293:function(e,t,n){"use strict";n.d(t,{Z:function(){return T}});var i=n(8131);const r=80;function s(e,t){e.style.transform=t,e.style.webkitTransform=t}function o(e){return"TouchEvent"===e.constructor.name}function a(e){return"KeyboardEvent"===e.constructor.name}const c=(e,t,n={})=>{let i=0,r=0;if(!a(e)){const n=t.getBoundingClientRect(),s=o(e)?e.touches[e.touches.length-1]:e;i=s.clientX-n.left,r=s.clientY-n.top}let s=0,c=.3;t._ripple&&t._ripple.circle?(c=.15,s=t.clientWidth/2,s=n.center?s:s+Math.sqrt((i-s)**2+(r-s)**2)/4):s=Math.sqrt(t.clientWidth**2+t.clientHeight**2)/2;const u=(t.clientWidth-2*s)/2+"px",l=(t.clientHeight-2*s)/2+"px",h=n.center?u:i-s+"px",d=n.center?l:r-s+"px";return{radius:s,scale:c,x:h,y:d,centerX:u,centerY:l}},u={show(e,t,n={}){if(!t._ripple||!t._ripple.enabled)return;const i=document.createElement("span"),r=document.createElement("span");i.appendChild(r),i.className="v-ripple__container",n.class&&(i.className+=` ${n.class}`);const{radius:o,scale:a,x:u,y:l,centerX:h,centerY:d}=c(e,t,n),f=2*o+"px";r.className="v-ripple__animation",r.style.width=f,r.style.height=f,t.appendChild(i);const p=window.getComputedStyle(t);p&&"static"===p.position&&(t.style.position="relative",t.dataset.previousPosition="static"),r.classList.add("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--visible"),s(r,`translate(${u}, ${l}) scale3d(${a},${a},${a})`),r.dataset.activated=String(performance.now()),setTimeout((()=>{r.classList.remove("v-ripple__animation--enter"),r.classList.add("v-ripple__animation--in"),s(r,`translate(${h}, ${d}) scale3d(1,1,1)`)}),0)},hide(e){if(!e||!e._ripple||!e._ripple.enabled)return;const t=e.getElementsByClassName("v-ripple__animation");if(0===t.length)return;const n=t[t.length-1];if(n.dataset.isHiding)return;n.dataset.isHiding="true";const i=performance.now()-Number(n.dataset.activated),r=Math.max(250-i,0);setTimeout((()=>{n.classList.remove("v-ripple__animation--in"),n.classList.add("v-ripple__animation--out"),setTimeout((()=>{var t;const i=e.getElementsByClassName("v-ripple__animation");1===i.length&&e.dataset.previousPosition&&(e.style.position=e.dataset.previousPosition,delete e.dataset.previousPosition),(null===(t=n.parentNode)||void 0===t?void 0:t.parentNode)===e&&e.removeChild(n.parentNode)}),300)}),r)}};function l(e){return"undefined"===typeof e||!!e}function h(e){const t={},n=e.currentTarget;if(n&&n._ripple&&!n._ripple.touched&&!e.rippleStop){if(e.rippleStop=!0,o(e))n._ripple.touched=!0,n._ripple.isTouch=!0;else if(n._ripple.isTouch)return;if(t.center=n._ripple.centered||a(e),n._ripple.class&&(t.class=n._ripple.class),o(e)){if(n._ripple.showTimerCommit)return;n._ripple.showTimerCommit=()=>{u.show(e,n,t)},n._ripple.showTimer=window.setTimeout((()=>{n&&n._ripple&&n._ripple.showTimerCommit&&(n._ripple.showTimerCommit(),n._ripple.showTimerCommit=null)}),r)}else u.show(e,n,t)}}function d(e){const t=e.currentTarget;if(t&&t._ripple){if(window.clearTimeout(t._ripple.showTimer),"touchend"===e.type&&t._ripple.showTimerCommit)return t._ripple.showTimerCommit(),t._ripple.showTimerCommit=null,void(t._ripple.showTimer=setTimeout((()=>{d(e)})));window.setTimeout((()=>{t._ripple&&(t._ripple.touched=!1)})),u.hide(t)}}function f(e){const t=e.currentTarget;t&&t._ripple&&(t._ripple.showTimerCommit&&(t._ripple.showTimerCommit=null),window.clearTimeout(t._ripple.showTimer))}let p=!1;function m(e){p||e.keyCode!==i.Do.enter&&e.keyCode!==i.Do.space||(p=!0,h(e))}function g(e){p=!1,d(e)}function v(e){!0===p&&(p=!1,d(e))}function y(e,t,n){const i=l(t.value);i||u.hide(e),e._ripple=e._ripple||{},e._ripple.enabled=i;const r=t.value||{};r.center&&(e._ripple.centered=!0),r.class&&(e._ripple.class=t.value.class),r.circle&&(e._ripple.circle=r.circle),i&&!n?(e.addEventListener("touchstart",h,{passive:!0}),e.addEventListener("touchend",d,{passive:!0}),e.addEventListener("touchmove",f,{passive:!0}),e.addEventListener("touchcancel",d),e.addEventListener("mousedown",h),e.addEventListener("mouseup",d),e.addEventListener("mouseleave",d),e.addEventListener("keydown",m),e.addEventListener("keyup",g),e.addEventListener("blur",v),e.addEventListener("dragstart",d,{passive:!0})):!i&&n&&b(e)}function b(e){e.removeEventListener("mousedown",h),e.removeEventListener("touchstart",h),e.removeEventListener("touchend",d),e.removeEventListener("touchmove",f),e.removeEventListener("touchcancel",d),e.removeEventListener("mouseup",d),e.removeEventListener("mouseleave",d),e.removeEventListener("keydown",m),e.removeEventListener("keyup",g),e.removeEventListener("dragstart",d),e.removeEventListener("blur",v)}function w(e,t,n){y(e,t,!1)}function _(e){delete e._ripple,b(e)}function I(e,t){if(t.value===t.oldValue)return;const n=l(t.oldValue);y(e,t,n)}const S={bind:w,unbind:_,update:I};var T=S},154:function(e,t,n){"use strict";n.d(t,{Z:function(){return be}});var i={};n.r(i),n.d(i,{easeInCubic:function(){return y},easeInOutCubic:function(){return w},easeInOutQuad:function(){return v},easeInOutQuart:function(){return S},easeInOutQuint:function(){return k},easeInQuad:function(){return m},easeInQuart:function(){return _},easeInQuint:function(){return T},easeOutCubic:function(){return b},easeOutQuad:function(){return g},easeOutQuart:function(){return I},easeOutQuint:function(){return E},linear:function(){return p}});var r=n(144),s=n(8219);function o(e,t={}){if(o.installed)return;o.installed=!0,r.ZP!==e&&(0,s.N6)("Multiple instances of Vue detected\nSee https://github.com/vuetifyjs/vuetify/issues/4068\n\nIf you're seeing \"$attrs is readonly\", it's caused by this");const n=t.components||{},i=t.directives||{};for(const r in i){const t=i[r];e.directive(r,t)}(function t(n){if(n){for(const i in n){const r=n[i];r&&!t(r.$_vuetify_subcomponents)&&e.component(i,r)}return!0}return!1})(n),e.$_vuetify_installed||(e.$_vuetify_installed=!0,e.mixin({beforeCreate(){const t=this.$options;t.vuetify?(t.vuetify.init(this,this.$ssrContext),this.$vuetify=e.observable(t.vuetify.framework)):this.$vuetify=t.parent&&t.parent.$vuetify||this},beforeMount(){this.$options.vuetify&&this.$el&&this.$el.hasAttribute("data-server-rendered")&&(this.$vuetify.isHydrating=!0,this.$vuetify.breakpoint.update(!0))},mounted(){this.$options.vuetify&&this.$vuetify.isHydrating&&(this.$vuetify.isHydrating=!1,this.$vuetify.breakpoint.update())}}))}var a={badge:"Badge",close:"Close",dataIterator:{noResultsText:"No matching records found",loadingText:"Loading items..."},dataTable:{itemsPerPageText:"Rows per page:",ariaLabel:{sortDescending:"Sorted descending.",sortAscending:"Sorted ascending.",sortNone:"Not sorted.",activateNone:"Activate to remove sorting.",activateDescending:"Activate to sort descending.",activateAscending:"Activate to sort ascending."},sortBy:"Sort by"},dataFooter:{itemsPerPageText:"Items per page:",itemsPerPageAll:"All",nextPage:"Next page",prevPage:"Previous page",firstPage:"First page",lastPage:"Last page",pageText:"{0}-{1} of {2}"},datePicker:{itemsSelected:"{0} selected",nextMonthAriaLabel:"Next month",nextYearAriaLabel:"Next year",prevMonthAriaLabel:"Previous month",prevYearAriaLabel:"Previous year"},noDataText:"No data available",carousel:{prev:"Previous visual",next:"Next visual",ariaLabel:{delimiter:"Carousel slide {0} of {1}"}},calendar:{moreEvents:"{0} more"},fileInput:{counter:"{0} files",counterSize:"{0} files ({1} in total)"},timePicker:{am:"AM",pm:"PM"},pagination:{ariaLabel:{wrapper:"Pagination Navigation",next:"Next page",previous:"Previous page",page:"Goto Page {0}",currentPage:"Current Page, Page {0}"}},rating:{ariaLabel:{icon:"Rating {0} of {1}"}}};const c={breakpoint:{mobileBreakpoint:1264,scrollBarWidth:16,thresholds:{xs:600,sm:960,md:1280,lg:1920}},icons:{iconfont:"mdi",values:{}},lang:{current:"en",locales:{en:a},t:void 0},rtl:!1,theme:{dark:!1,default:"light",disable:!1,options:{cspNonce:void 0,customProperties:void 0,minifyTheme:void 0,themeCache:void 0,variations:!0},themes:{light:{primary:"#1976D2",secondary:"#424242",accent:"#82B1FF",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"},dark:{primary:"#2196F3",secondary:"#424242",accent:"#FF4081",error:"#FF5252",info:"#2196F3",success:"#4CAF50",warning:"#FB8C00"}}}};var u=n(8131);class l{constructor(){this.framework={}}init(e,t){}}class h extends l{constructor(e,t){super();const n=(0,u.Ee)({},c),{userPreset:i}=t,{preset:r={},...o}=i;null!=r.preset&&(0,s.Kd)("Global presets do not support the **preset** option, it can be safely omitted"),t.preset=(0,u.Ee)((0,u.Ee)(n,r),o)}}h.property="presets";class d extends l{constructor(){super(...arguments),this.bar=0,this.top=0,this.left=0,this.insetFooter=0,this.right=0,this.bottom=0,this.footer=0,this.application={bar:{},top:{},left:{},insetFooter:{},right:{},bottom:{},footer:{}}}register(e,t,n){this.application[t][e]=n,this.update(t)}unregister(e,t){null!=this.application[t][e]&&(delete this.application[t][e],this.update(t))}update(e){this[e]=Object.values(this.application[e]).reduce(((e,t)=>e+t),0)}}d.property="application";class f extends l{constructor(e){super(),this.xs=!1,this.sm=!1,this.md=!1,this.lg=!1,this.xl=!1,this.xsOnly=!1,this.smOnly=!1,this.smAndDown=!1,this.smAndUp=!1,this.mdOnly=!1,this.mdAndDown=!1,this.mdAndUp=!1,this.lgOnly=!1,this.lgAndDown=!1,this.lgAndUp=!1,this.xlOnly=!1,this.name="xs",this.height=0,this.width=0,this.mobile=!0,this.resizeTimeout=0;const{mobileBreakpoint:t,scrollBarWidth:n,thresholds:i}=e[f.property];this.mobileBreakpoint=t,this.scrollBarWidth=n,this.thresholds=i}init(){this.update(),"undefined"!==typeof window&&window.addEventListener("resize",this.onResize.bind(this),{passive:!0})}update(e=!1){const t=e?0:this.getClientHeight(),n=e?0:this.getClientWidth(),i=n<this.thresholds.xs,r=n<this.thresholds.sm&&!i,s=n<this.thresholds.md-this.scrollBarWidth&&!(r||i),o=n<this.thresholds.lg-this.scrollBarWidth&&!(s||r||i),a=n>=this.thresholds.lg-this.scrollBarWidth;switch(this.height=t,this.width=n,this.xs=i,this.sm=r,this.md=s,this.lg=o,this.xl=a,this.xsOnly=i,this.smOnly=r,this.smAndDown=(i||r)&&!(s||o||a),this.smAndUp=!i&&(r||s||o||a),this.mdOnly=s,this.mdAndDown=(i||r||s)&&!(o||a),this.mdAndUp=!(i||r)&&(s||o||a),this.lgOnly=o,this.lgAndDown=(i||r||s||o)&&!a,this.lgAndUp=!(i||r||s)&&(o||a),this.xlOnly=a,!0){case i:this.name="xs";break;case r:this.name="sm";break;case s:this.name="md";break;case o:this.name="lg";break;default:this.name="xl";break}if("number"===typeof this.mobileBreakpoint)return void(this.mobile=n<parseInt(this.mobileBreakpoint,10));const c={xs:0,sm:1,md:2,lg:3,xl:4},u=c[this.name],l=c[this.mobileBreakpoint];this.mobile=u<=l}onResize(){clearTimeout(this.resizeTimeout),this.resizeTimeout=window.setTimeout(this.update.bind(this),200)}getClientWidth(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientWidth,window.innerWidth||0)}getClientHeight(){return"undefined"===typeof document?0:Math.max(document.documentElement.clientHeight,window.innerHeight||0)}}f.property="breakpoint";const p=e=>e,m=e=>e**2,g=e=>e*(2-e),v=e=>e<.5?2*e**2:(4-2*e)*e-1,y=e=>e**3,b=e=>--e**3+1,w=e=>e<.5?4*e**3:(e-1)*(2*e-2)*(2*e-2)+1,_=e=>e**4,I=e=>1- --e**4,S=e=>e<.5?8*e*e*e*e:1-8*--e*e*e*e,T=e=>e**5,E=e=>1+--e**5,k=e=>e<.5?16*e**5:1+16*--e**5;function C(e){if("number"===typeof e)return e;let t=O(e);if(!t)throw"string"===typeof e?new Error(`Target element "${e}" not found.`):new TypeError(`Target must be a Number/Selector/HTMLElement/VueComponent, received ${A(e)} instead.`);let n=0;while(t)n+=t.offsetTop,t=t.offsetParent;return n}function x(e){const t=O(e);if(t)return t;throw"string"===typeof e?new Error(`Container element "${e}" not found.`):new TypeError(`Container must be a Selector/HTMLElement/VueComponent, received ${A(e)} instead.`)}function A(e){return null==e?e:e.constructor.name}function O(e){return"string"===typeof e?document.querySelector(e):e&&e._isVue?e.$el:e instanceof HTMLElement?e:null}function N(e,t={}){const n={container:document.scrollingElement||document.body||document.documentElement,duration:500,offset:0,easing:"easeInOutCubic",appOffset:!0,...t},r=x(n.container);if(n.appOffset&&N.framework.application){const e=r.classList.contains("v-navigation-drawer"),t=r.classList.contains("v-navigation-drawer--clipped"),{bar:i,top:s}=N.framework.application;n.offset+=i,e&&!t||(n.offset+=s)}const s=performance.now();let o;o="number"===typeof e?C(e)-n.offset:C(e)-C(r)-n.offset;const a=r.scrollTop;if(o===a)return Promise.resolve(o);const c="function"===typeof n.easing?n.easing:i[n.easing];if(!c)throw new TypeError(`Easing function "${n.easing}" not found.`);return new Promise((e=>requestAnimationFrame((function t(i){const u=i-s,l=Math.abs(n.duration?Math.min(u/n.duration,1):1);r.scrollTop=Math.floor(a+(o-a)*c(l));const h=r===document.body?document.documentElement.clientHeight:r.clientHeight,d=h+r.scrollTop>=r.scrollHeight;if(1===l||o>r.scrollTop&&d)return e(o);requestAnimationFrame(t)}))))}N.framework={},N.init=()=>{};class D extends l{constructor(){return super(),N}}D.property="goTo";const R={complete:"M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z",cancel:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",close:"M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z",delete:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",clear:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",success:"M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z",info:"M13,9H11V7H13M13,17H11V11H13M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2ZM13,9H11V7H13M13,17H11V11H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",warning:"M13,13H11V7H13M13,17H11V15H13M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2Z",error:"M12,2C17.53,2 22,6.47 22,12C22,17.53 17.53,22 12,22C6.47,22 2,17.53 2,12C2,6.47 6.47,2 12,2M15.59,7L12,10.59L8.41,7L7,8.41L10.59,12L7,15.59L8.41,17L12,13.41L15.59,17L17,15.59L13.41,12L17,8.41L15.59,7Z",prev:"M15.41,16.58L10.83,12L15.41,7.41L14,6L8,12L14,18L15.41,16.58Z",next:"M8.59,16.58L13.17,12L8.59,7.41L10,6L16,12L10,18L8.59,16.58Z",checkboxOn:"M10,17L5,12L6.41,10.58L10,14.17L17.59,6.58L19,8M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",checkboxOff:"M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3M19,5V19H5V5H19Z",checkboxIndeterminate:"M17,13H7V11H17M19,3H5C3.89,3 3,3.89 3,5V19C3,20.1 3.9,21 5,21H19C20.1,21 21,20.1 21,19V5C21,3.89 20.1,3 19,3Z",delimiter:"M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",sort:"M13,20H11V8L5.5,13.5L4.08,12.08L12,4.16L19.92,12.08L18.5,13.5L13,8V20Z",expand:"M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z",menu:"M3,6H21V8H3V6M3,11H21V13H3V11M3,16H21V18H3V16Z",subgroup:"M7,10L12,15L17,10H7Z",dropdown:"M7,10L12,15L17,10H7Z",radioOn:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2M12,7C9.24,7 7,9.24 7,12C7,14.76 9.24,17 12,17C14.76,17 17,14.76 17,12C17,9.24 14.76,7 12,7Z",radioOff:"M12,20C7.58,20 4,16.42 4,12C4,7.58 7.58,4 12,4C16.42,4 20,7.58 20,12C20,16.42 16.42,20 12,20M12,2C6.48,2 2,6.48 2,12C2,17.52 6.48,22 12,22C17.52,22 22,17.52 22,12C22,6.48 17.52,2 12,2Z",edit:"M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z",ratingEmpty:"M12,15.39L8.24,17.66L9.23,13.38L5.91,10.5L10.29,10.13L12,6.09L13.71,10.13L18.09,10.5L14.77,13.38L15.76,17.66M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",ratingFull:"M12,17.27L18.18,21L16.54,13.97L22,9.24L14.81,8.62L12,2L9.19,8.62L2,9.24L7.45,13.97L5.82,21L12,17.27Z",ratingHalf:"M12,15.4V6.1L13.71,10.13L18.09,10.5L14.77,13.39L15.76,17.67M22,9.24L14.81,8.63L12,2L9.19,8.63L2,9.24L7.45,13.97L5.82,21L12,17.27L18.18,21L16.54,13.97L22,9.24Z",loading:"M19,8L15,12H18C18,15.31 15.31,18 12,18C11,18 10.03,17.75 9.2,17.3L7.74,18.76C8.97,19.54 10.43,20 12,20C16.42,20 20,16.42 20,12H23M6,12C6,8.69 8.69,6 12,6C13,6 13.97,6.25 14.8,6.7L16.26,5.24C15.03,4.46 13.57,4 12,4C7.58,4 4,7.58 4,12H1L5,16L9,12",first:"M18.41,16.59L13.82,12L18.41,7.41L17,6L11,12L17,18L18.41,16.59M6,6H8V18H6V6Z",last:"M5.59,7.41L10.18,12L5.59,16.59L7,18L13,12L7,6L5.59,7.41M16,6H18V18H16V6Z",unfold:"M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z",file:"M16.5,6V17.5C16.5,19.71 14.71,21.5 12.5,21.5C10.29,21.5 8.5,19.71 8.5,17.5V5C8.5,3.62 9.62,2.5 11,2.5C12.38,2.5 13.5,3.62 13.5,5V15.5C13.5,16.05 13.05,16.5 12.5,16.5C11.95,16.5 11.5,16.05 11.5,15.5V6H10V15.5C10,16.88 11.12,18 12.5,18C13.88,18 15,16.88 15,15.5V5C15,2.79 13.21,1 11,1C8.79,1 7,2.79 7,5V17.5C7,20.54 9.46,23 12.5,23C15.54,23 18,20.54 18,17.5V6H16.5Z",plus:"M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z",minus:"M19,13H5V11H19V13Z"};var L=R;const P={complete:"check",cancel:"cancel",close:"close",delete:"cancel",clear:"clear",success:"check_circle",info:"info",warning:"priority_high",error:"warning",prev:"chevron_left",next:"chevron_right",checkboxOn:"check_box",checkboxOff:"check_box_outline_blank",checkboxIndeterminate:"indeterminate_check_box",delimiter:"fiber_manual_record",sort:"arrow_upward",expand:"keyboard_arrow_down",menu:"menu",subgroup:"arrow_drop_down",dropdown:"arrow_drop_down",radioOn:"radio_button_checked",radioOff:"radio_button_unchecked",edit:"edit",ratingEmpty:"star_border",ratingFull:"star",ratingHalf:"star_half",loading:"cached",first:"first_page",last:"last_page",unfold:"unfold_more",file:"attach_file",plus:"add",minus:"remove"};var $=P;const M={complete:"mdi-check",cancel:"mdi-close-circle",close:"mdi-close",delete:"mdi-close-circle",clear:"mdi-close",success:"mdi-check-circle",info:"mdi-information",warning:"mdi-exclamation",error:"mdi-alert",prev:"mdi-chevron-left",next:"mdi-chevron-right",checkboxOn:"mdi-checkbox-marked",checkboxOff:"mdi-checkbox-blank-outline",checkboxIndeterminate:"mdi-minus-box",delimiter:"mdi-circle",sort:"mdi-arrow-up",expand:"mdi-chevron-down",menu:"mdi-menu",subgroup:"mdi-menu-down",dropdown:"mdi-menu-down",radioOn:"mdi-radiobox-marked",radioOff:"mdi-radiobox-blank",edit:"mdi-pencil",ratingEmpty:"mdi-star-outline",ratingFull:"mdi-star",ratingHalf:"mdi-star-half-full",loading:"mdi-cached",first:"mdi-page-first",last:"mdi-page-last",unfold:"mdi-unfold-more-horizontal",file:"mdi-paperclip",plus:"mdi-plus",minus:"mdi-minus"};var V=M;const F={complete:"fas fa-check",cancel:"fas fa-times-circle",close:"fas fa-times",delete:"fas fa-times-circle",clear:"fas fa-times-circle",success:"fas fa-check-circle",info:"fas fa-info-circle",warning:"fas fa-exclamation",error:"fas fa-exclamation-triangle",prev:"fas fa-chevron-left",next:"fas fa-chevron-right",checkboxOn:"fas fa-check-square",checkboxOff:"far fa-square",checkboxIndeterminate:"fas fa-minus-square",delimiter:"fas fa-circle",sort:"fas fa-sort-up",expand:"fas fa-chevron-down",menu:"fas fa-bars",subgroup:"fas fa-caret-down",dropdown:"fas fa-caret-down",radioOn:"far fa-dot-circle",radioOff:"far fa-circle",edit:"fas fa-edit",ratingEmpty:"far fa-star",ratingFull:"fas fa-star",ratingHalf:"fas fa-star-half",loading:"fas fa-sync",first:"fas fa-step-backward",last:"fas fa-step-forward",unfold:"fas fa-arrows-alt-v",file:"fas fa-paperclip",plus:"fas fa-plus",minus:"fas fa-minus"};var B=F;const U={complete:"fa fa-check",cancel:"fa fa-times-circle",close:"fa fa-times",delete:"fa fa-times-circle",clear:"fa fa-times-circle",success:"fa fa-check-circle",info:"fa fa-info-circle",warning:"fa fa-exclamation",error:"fa fa-exclamation-triangle",prev:"fa fa-chevron-left",next:"fa fa-chevron-right",checkboxOn:"fa fa-check-square",checkboxOff:"fa fa-square-o",checkboxIndeterminate:"fa fa-minus-square",delimiter:"fa fa-circle",sort:"fa fa-sort-up",expand:"fa fa-chevron-down",menu:"fa fa-bars",subgroup:"fa fa-caret-down",dropdown:"fa fa-caret-down",radioOn:"fa fa-dot-circle-o",radioOff:"fa fa-circle-o",edit:"fa fa-pencil",ratingEmpty:"fa fa-star-o",ratingFull:"fa fa-star",ratingHalf:"fa fa-star-half-o",loading:"fa fa-refresh",first:"fa fa-step-backward",last:"fa fa-step-forward",unfold:"fa fa-angle-double-down",file:"fa fa-paperclip",plus:"fa fa-plus",minus:"fa fa-minus"};var j=U;function z(e,t){const n={};for(const i in t)n[i]={component:e,props:{icon:t[i].split(" fa-")}};return n}var q=z("font-awesome-icon",B),H=Object.freeze({mdiSvg:L,md:$,mdi:V,fa:B,fa4:j,faSvg:q});class G extends l{constructor(e){super();const{iconfont:t,values:n,component:i}=e[G.property];this.component=i,this.iconfont=t,this.values=(0,u.Ee)(H[t],n)}}G.property="icons";const Z="$vuetify.",K=Symbol("Lang fallback");function W(e,t,n=!1,i){const r=t.replace(Z,"");let o=(0,u.vO)(e,r,K);return o===K&&(n?((0,s.N6)(`Translation key "${r}" not found in fallback`),o=t):((0,s.Kd)(`Translation key "${r}" not found, falling back to default`),o=W(i,t,!0,i))),o}class Q extends l{constructor(e){super(),this.defaultLocale="en";const{current:t,locales:n,t:i}=e[Q.property];this.current=t,this.locales=n,this.translator=i||this.defaultTranslator}currentLocale(e){const t=this.locales[this.current],n=this.locales[this.defaultLocale];return W(t,e,!1,n)}t(e,...t){return e.startsWith(Z)?this.translator(e,...t):this.replace(e,t)}defaultTranslator(e,...t){return this.replace(this.currentLocale(e),t)}replace(e,t){return e.replace(/\{(\d+)\}/g,((e,n)=>String(t[+n])))}}Q.property="lang";var Y=n(4771);const X=[[3.2406,-1.5372,-.4986],[-.9689,1.8758,.0415],[.0557,-.204,1.057]],J=e=>e<=.0031308?12.92*e:1.055*e**(1/2.4)-.055,ee=[[.4124,.3576,.1805],[.2126,.7152,.0722],[.0193,.1192,.9505]],te=e=>e<=.04045?e/12.92:((e+.055)/1.055)**2.4;function ne(e){const t=Array(3),n=J,i=X;for(let r=0;r<3;++r)t[r]=Math.round(255*(0,u.uZ)(n(i[r][0]*e[0]+i[r][1]*e[1]+i[r][2]*e[2])));return(t[0]<<16)+(t[1]<<8)+(t[2]<<0)}function ie(e){const t=[0,0,0],n=te,i=ee,r=n((e>>16&255)/255),s=n((e>>8&255)/255),o=n((e>>0&255)/255);for(let a=0;a<3;++a)t[a]=i[a][0]*r+i[a][1]*s+i[a][2]*o;return t}const re=.20689655172413793,se=e=>e>re**3?Math.cbrt(e):e/(3*re**2)+4/29,oe=e=>e>re?e**3:3*re**2*(e-4/29);function ae(e){const t=se,n=t(e[1]);return[116*n-16,500*(t(e[0]/.95047)-n),200*(n-t(e[2]/1.08883))]}function ce(e){const t=oe,n=(e[0]+16)/116;return[.95047*t(n+e[1]/500),t(n),1.08883*t(n-e[2]/200)]}function ue(e,t=!1,n=!0){const{anchor:i,...r}=e,s=Object.keys(r),o={};for(let a=0;a<s.length;++a){const i=s[a],r=e[i];null!=r&&(n?t?("base"===i||i.startsWith("lighten")||i.startsWith("darken"))&&(o[i]=(0,Y.hq)(r)):o[i]="object"===typeof r?ue(r,!0,n):me(i,(0,Y.jx)(r)):o[i]={base:(0,Y.I4)((0,Y.jx)(r))})}return t||(o.anchor=i||o.base||o.primary.base),o}const le=(e,t)=>`\n.v-application .${e} {\n  background-color: ${t} !important;\n  border-color: ${t} !important;\n}\n.v-application .${e}--text {\n  color: ${t} !important;\n  caret-color: ${t} !important;\n}`,he=(e,t,n)=>{const[i,r]=t.split(/(\d)/,2);return`\n.v-application .${e}.${i}-${r} {\n  background-color: ${n} !important;\n  border-color: ${n} !important;\n}\n.v-application .${e}--text.text--${i}-${r} {\n  color: ${n} !important;\n  caret-color: ${n} !important;\n}`},de=(e,t="base")=>`--v-${e}-${t}`,fe=(e,t="base")=>`var(${de(e,t)})`;function pe(e,t=!1){const{anchor:n,...i}=e,r=Object.keys(i);if(!r.length)return"";let s="",o="";const a=t?fe("anchor"):n;o+=`.v-application a { color: ${a}; }`,t&&(s+=`  ${de("anchor")}: ${n};\n`);for(let c=0;c<r.length;++c){const n=r[c],i=e[n];o+=le(n,t?fe(n):i.base),t&&(s+=`  ${de(n)}: ${i.base};\n`);const a=(0,u.XP)(i);for(let e=0;e<a.length;++e){const r=a[e],c=i[r];"base"!==r&&(o+=he(n,r,t?fe(n,r):c),t&&(s+=`  ${de(n,r)}: ${c};\n`))}}return t&&(s=`:root {\n${s}}\n\n`),s+o}function me(e,t){const n={base:(0,Y.I4)(t)};for(let i=5;i>0;--i)n[`lighten${i}`]=(0,Y.I4)(ge(t,i));for(let i=1;i<=4;++i)n[`darken${i}`]=(0,Y.I4)(ve(t,i));return n}function ge(e,t){const n=ae(ie(e));return n[0]=n[0]+10*t,ne(ce(n))}function ve(e,t){const n=ae(ie(e));return n[0]=n[0]-10*t,ne(ce(n))}class ye extends l{constructor(e){super(),this.disabled=!1,this.isDark=null,this.unwatch=null,this.vueMeta=null;const{dark:t,disable:n,options:i,themes:r}=e[ye.property];this.dark=Boolean(t),this.defaults=this.themes=r,this.options=i,n?this.disabled=!0:this.themes={dark:this.fillVariant(r.dark,!0),light:this.fillVariant(r.light,!1)}}set css(e){this.vueMeta?this.isVueMeta23&&this.applyVueMeta23():this.checkOrCreateStyleElement()&&(this.styleEl.innerHTML=e)}set dark(e){const t=this.isDark;this.isDark=e,null!=t&&this.applyTheme()}get dark(){return Boolean(this.isDark)}applyTheme(){if(this.disabled)return this.clearCss();this.css=this.generatedStyles}clearCss(){this.css=""}init(e,t){this.disabled||(e.$meta?this.initVueMeta(e):t&&this.initSSR(t),this.initTheme(e))}setTheme(e,t){this.themes[e]=Object.assign(this.themes[e],t),this.applyTheme()}resetThemes(){this.themes.light=Object.assign({},this.defaults.light),this.themes.dark=Object.assign({},this.defaults.dark),this.applyTheme()}checkOrCreateStyleElement(){return this.styleEl=document.getElementById("vuetify-theme-stylesheet"),!!this.styleEl||(this.genStyleElement(),Boolean(this.styleEl))}fillVariant(e={},t){const n=this.themes[t?"dark":"light"];return Object.assign({},n,e)}genStyleElement(){"undefined"!==typeof document&&(this.styleEl=document.createElement("style"),this.styleEl.type="text/css",this.styleEl.id="vuetify-theme-stylesheet",this.options.cspNonce&&this.styleEl.setAttribute("nonce",this.options.cspNonce),document.head.appendChild(this.styleEl))}initVueMeta(e){if(this.vueMeta=e.$meta(),this.isVueMeta23)return void e.$nextTick((()=>{this.applyVueMeta23()}));const t="function"===typeof this.vueMeta.getOptions?this.vueMeta.getOptions().keyName:"metaInfo",n=e.$options[t]||{};e.$options[t]=()=>{n.style=n.style||[];const e=n.style.find((e=>"vuetify-theme-stylesheet"===e.id));return e?e.cssText=this.generatedStyles:n.style.push({cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:(this.options||{}).cspNonce}),n}}applyVueMeta23(){const{set:e}=this.vueMeta.addApp("vuetify");e({style:[{cssText:this.generatedStyles,type:"text/css",id:"vuetify-theme-stylesheet",nonce:this.options.cspNonce}]})}initSSR(e){const t=this.options.cspNonce?` nonce="${this.options.cspNonce}"`:"";e.head=e.head||"",e.head+=`<style type="text/css" id="vuetify-theme-stylesheet"${t}>${this.generatedStyles}</style>`}initTheme(e){"undefined"!==typeof document&&(this.unwatch&&(this.unwatch(),this.unwatch=null),e.$once("hook:created",(()=>{const t=r.ZP.observable({themes:this.themes});this.unwatch=e.$watch((()=>t.themes),(()=>this.applyTheme()),{deep:!0})})),this.applyTheme())}get currentTheme(){const e=this.dark?"dark":"light";return this.themes[e]}get generatedStyles(){const e=this.parsedTheme,t=this.options||{};let n;return null!=t.themeCache&&(n=t.themeCache.get(e),null!=n)||(n=pe(e,t.customProperties),null!=t.minifyTheme&&(n=t.minifyTheme(n)),null!=t.themeCache&&t.themeCache.set(e,n)),n}get parsedTheme(){return ue(this.currentTheme||{},void 0,(0,u.qw)(this.options,["variations"],!0))}get isVueMeta23(){return"function"===typeof this.vueMeta.addApp}}ye.property="theme";class be{constructor(e={}){this.framework={isHydrating:!1},this.installed=[],this.preset={},this.userPreset={},this.userPreset=e,this.use(h),this.use(d),this.use(f),this.use(D),this.use(G),this.use(Q),this.use(ye)}init(e,t){this.installed.forEach((n=>{const i=this.framework[n];i.framework=this.framework,i.init(e,t)})),this.framework.rtl=Boolean(this.preset.rtl)}use(e){const t=e.property;this.installed.includes(t)||(this.framework[t]=new e(this.preset,this),this.installed.push(t))}}be.install=o,be.installed=!1,be.version="2.6.14",be.config={silent:!1}},2404:function(e,t,n){"use strict";n.d(t,{Z:function(){return s}});var i=n(8747),r=n(5530);function s(e,t=[]){return(0,r.Z)((0,i.d)(["absolute","fixed"])).extend({name:"applicationable",props:{app:Boolean},computed:{applicationProperty(){return e}},watch:{app(e,t){t?this.removeApplication(!0):this.callUpdate()},applicationProperty(e,t){this.$vuetify.application.unregister(this._uid,t)}},activated(){this.callUpdate()},created(){for(let e=0,n=t.length;e<n;e++)this.$watch(t[e],this.callUpdate);this.callUpdate()},mounted(){this.callUpdate()},deactivated(){this.removeApplication()},destroyed(){this.removeApplication()},methods:{callUpdate(){this.app&&this.$vuetify.application.register(this._uid,this.applicationProperty,this.updateApplication())},removeApplication(e=!1){(e||this.app)&&this.$vuetify.application.unregister(this._uid,this.applicationProperty)},updateApplication:()=>0}})}},6141:function(e,t,n){"use strict";var i=n(144);function r(e){return function(t,n){for(const i in n)Object.prototype.hasOwnProperty.call(t,i)||this.$delete(this.$data[e],i);for(const i in t)this.$set(this.$data[e],i,t[i])}}t["Z"]=i.ZP.extend({data:()=>({attrs$:{},listeners$:{}}),created(){this.$watch("$attrs",r("attrs$"),{immediate:!0}),this.$watch("$listeners",r("listeners$"),{immediate:!0})}})},6986:function(e,t,n){"use strict";var i=n(8219),r=n(144);t["Z"]=r.ZP.extend().extend({name:"bootable",props:{eager:Boolean},data:()=>({isBooted:!1}),computed:{hasContent(){return this.isBooted||this.eager||this.isActive}},watch:{isActive(){this.isBooted=!0}},created(){"lazy"in this.$attrs&&(0,i.Jk)("lazy",this)},methods:{showLazyContent(e){return this.hasContent&&e?e():[this.$createElement()]}}})},5836:function(e,t,n){"use strict";var i=n(144),r=n(8219),s=n(4771);t["Z"]=i.ZP.extend({name:"colorable",props:{color:String},methods:{setBackgroundColor(e,t={}){return"string"===typeof t.style?((0,r.N6)("style must be an object",this),t):"string"===typeof t.class?((0,r.N6)("class must be an object",this),t):((0,s.NA)(e)?t.style={...t.style,"background-color":`${e}`,"border-color":`${e}`}:e&&(t.class={...t.class,[e]:!0}),t)},setTextColor(e,t={}){if("string"===typeof t.style)return(0,r.N6)("style must be an object",this),t;if("string"===typeof t.class)return(0,r.N6)("class must be an object",this),t;if((0,s.NA)(e))t.style={...t.style,color:`${e}`,"caret-color":`${e}`};else if(e){const[n,i]=e.toString().trim().split(" ",2);t.class={...t.class,[n+"--text"]:!0},i&&(t.class["text--"+i]=!0)}return t}}})},4665:function(e,t,n){"use strict";var i=n(5530);function r(e){const t=[];for(let n=0;n<e.length;n++){const i=e[n];i.isActive&&i.isDependent?t.push(i):t.push(...r(i.$children))}return t}t["Z"]=(0,i.Z)().extend({name:"dependent",data(){return{closeDependents:!0,isActive:!1,isDependent:!0}},watch:{isActive(e){if(e)return;const t=this.getOpenDependents();for(let n=0;n<t.length;n++)t[n].isActive=!1}},methods:{getOpenDependents(){return this.closeDependents?r(this.$children):[]},getOpenDependentElements(){const e=[],t=this.getOpenDependents();for(let n=0;n<t.length;n++)e.push(...t[n].getClickableDependentElements());return e},getClickableDependentElements(){const e=[this.$el];return this.$refs.content&&e.push(this.$refs.content),this.overlay&&e.push(this.overlay.$el),e.push(...this.getOpenDependentElements()),e}}})},8427:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.ZP.extend({name:"elevatable",props:{elevation:[Number,String]},computed:{computedElevation(){return this.elevation},elevationClasses(){const e=this.computedElevation;return null==e||isNaN(parseInt(e))?{}:{[`elevation-${this.elevation}`]:!0}}}})},1302:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var i=n(950);function r(e,t,n){return(0,i.f)(e,t,n).extend({name:"groupable",props:{activeClass:{type:String,default(){if(this[e])return this[e].activeClass}},disabled:Boolean},data(){return{isActive:!1}},computed:{groupClasses(){return this.activeClass?{[this.activeClass]:this.isActive}:{}}},created(){this[e]&&this[e].register(this)},beforeDestroy(){this[e]&&this[e].unregister(this)},methods:{toggle(){this.$emit("change")}}})}r("itemGroup")},9799:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var i=n(144),r=n(6930),s=n(7006),o=n(5836),a=n(8747),c=n(7779),u=n(2066),l=n(8131),h=n(5530);const d=(0,h.Z)(o.Z,(0,a.d)(["absolute","fixed","top","bottom"]),c.Z,u.Z);var f=d.extend({name:"v-progress-linear",directives:{intersect:s.Z},props:{active:{type:Boolean,default:!0},backgroundColor:{type:String,default:null},backgroundOpacity:{type:[Number,String],default:null},bufferValue:{type:[Number,String],default:100},color:{type:String,default:"primary"},height:{type:[Number,String],default:4},indeterminate:Boolean,query:Boolean,reverse:Boolean,rounded:Boolean,stream:Boolean,striped:Boolean,value:{type:[Number,String],default:0}},data(){return{internalLazyValue:this.value||0,isVisible:!0}},computed:{__cachedBackground(){return this.$createElement("div",this.setBackgroundColor(this.backgroundColor||this.color,{staticClass:"v-progress-linear__background",style:this.backgroundStyle}))},__cachedBar(){return this.$createElement(this.computedTransition,[this.__cachedBarType])},__cachedBarType(){return this.indeterminate?this.__cachedIndeterminate:this.__cachedDeterminate},__cachedBuffer(){return this.$createElement("div",{staticClass:"v-progress-linear__buffer",style:this.styles})},__cachedDeterminate(){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__determinate",style:{width:(0,l.kb)(this.normalizedValue,"%")}}))},__cachedIndeterminate(){return this.$createElement("div",{staticClass:"v-progress-linear__indeterminate",class:{"v-progress-linear__indeterminate--active":this.active}},[this.genProgressBar("long"),this.genProgressBar("short")])},__cachedStream(){return this.stream?this.$createElement("div",this.setTextColor(this.color,{staticClass:"v-progress-linear__stream",style:{width:(0,l.kb)(100-this.normalizedBuffer,"%")}})):null},backgroundStyle(){const e=null==this.backgroundOpacity?this.backgroundColor?1:.3:parseFloat(this.backgroundOpacity);return{opacity:e,[this.isReversed?"right":"left"]:(0,l.kb)(this.normalizedValue,"%"),width:(0,l.kb)(Math.max(0,this.normalizedBuffer-this.normalizedValue),"%")}},classes(){return{"v-progress-linear--absolute":this.absolute,"v-progress-linear--fixed":this.fixed,"v-progress-linear--query":this.query,"v-progress-linear--reactive":this.reactive,"v-progress-linear--reverse":this.isReversed,"v-progress-linear--rounded":this.rounded,"v-progress-linear--striped":this.striped,"v-progress-linear--visible":this.isVisible,...this.themeClasses}},computedTransition(){return this.indeterminate?r.Z5:r.Qn},isReversed(){return this.$vuetify.rtl!==this.reverse},normalizedBuffer(){return this.normalize(this.bufferValue)},normalizedValue(){return this.normalize(this.internalLazyValue)},reactive(){return Boolean(this.$listeners.change)},styles(){const e={};return this.active||(e.height=0),this.indeterminate||100===parseFloat(this.normalizedBuffer)||(e.width=(0,l.kb)(this.normalizedBuffer,"%")),e}},methods:{genContent(){const e=(0,l.z9)(this,"default",{value:this.internalLazyValue});return e?this.$createElement("div",{staticClass:"v-progress-linear__content"},e):null},genListeners(){const e=this.$listeners;return this.reactive&&(e.click=this.onClick),e},genProgressBar(e){return this.$createElement("div",this.setBackgroundColor(this.color,{staticClass:"v-progress-linear__indeterminate",class:{[e]:!0}}))},onClick(e){if(!this.reactive)return;const{width:t}=this.$el.getBoundingClientRect();this.internalValue=e.offsetX/t*100},onObserve(e,t,n){this.isVisible=n},normalize(e){return e<0?0:e>100?100:parseFloat(e)}},render(e){const t={staticClass:"v-progress-linear",attrs:{role:"progressbar","aria-valuemin":0,"aria-valuemax":this.normalizedBuffer,"aria-valuenow":this.indeterminate?void 0:this.normalizedValue},class:this.classes,directives:[{name:"intersect",value:this.onObserve}],style:{bottom:this.bottom?0:void 0,height:this.active?(0,l.kb)(this.height):0,top:this.top?0:void 0},on:this.genListeners()};return e("div",t,[this.__cachedStream,this.__cachedBackground,this.__cachedBuffer,this.__cachedBar,this.genContent()])}}),p=f,m=i.ZP.extend().extend({name:"loadable",props:{loading:{type:[Boolean,String],default:!1},loaderHeight:{type:[Number,String],default:2}},methods:{genProgress(){return!1===this.loading?null:this.$slots.progress||this.$createElement(p,{props:{absolute:!0,color:!0===this.loading||""===this.loading?this.color||"primary":this.loading,height:this.loaderHeight,indeterminate:!0}})}}})},9548:function(e,t,n){"use strict";var i=n(8131),r=n(144);t["Z"]=r.ZP.extend({name:"measurable",props:{height:[Number,String],maxHeight:[Number,String],maxWidth:[Number,String],minHeight:[Number,String],minWidth:[Number,String],width:[Number,String]},computed:{measurableStyles(){const e={},t=(0,i.kb)(this.height),n=(0,i.kb)(this.minHeight),r=(0,i.kb)(this.minWidth),s=(0,i.kb)(this.maxHeight),o=(0,i.kb)(this.maxWidth),a=(0,i.kb)(this.width);return t&&(e.height=t),n&&(e.minHeight=n),r&&(e.minWidth=r),s&&(e.maxHeight=s),o&&(e.maxWidth=o),a&&(e.width=a),e}}})},8605:function(e,t,n){"use strict";n.d(t,{Z:function(){return h}});var i=n(5836),r=n(2066),s=n(4552),o=n(5530),a=(0,o.Z)(i.Z,r.Z,s.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),c=a,u=n(8131),l=n(144),h=l.ZP.extend().extend({name:"overlayable",props:{hideOverlay:Boolean,overlayColor:String,overlayOpacity:[Number,String]},data(){return{animationFrame:0,overlay:null}},watch:{hideOverlay(e){this.isActive&&(e?this.removeOverlay():this.genOverlay())}},beforeDestroy(){this.removeOverlay()},methods:{createOverlay(){const e=new c({propsData:{absolute:this.absolute,value:!1,color:this.overlayColor,opacity:this.overlayOpacity}});e.$mount();const t=this.absolute?this.$el.parentNode:document.querySelector("[data-app]");t&&t.insertBefore(e.$el,t.firstChild),this.overlay=e},genOverlay(){if(this.hideScroll(),!this.hideOverlay)return this.overlay||this.createOverlay(),this.animationFrame=requestAnimationFrame((()=>{this.overlay&&(void 0!==this.activeZIndex?this.overlay.zIndex=String(this.activeZIndex-1):this.$el&&(this.overlay.zIndex=(0,u.KK)(this.$el)),this.overlay.value=!0)})),!0},removeOverlay(e=!0){this.overlay&&((0,u.qh)(this.overlay.$el,"transitionend",(()=>{this.overlay&&this.overlay.$el&&this.overlay.$el.parentNode&&!this.overlay.value&&!this.isActive&&(this.overlay.$el.parentNode.removeChild(this.overlay.$el),this.overlay.$destroy(),this.overlay=null)})),cancelAnimationFrame(this.animationFrame),this.overlay.value=!1),e&&this.showScroll()},scrollListener(e){if("key"in e){if(["INPUT","TEXTAREA","SELECT"].includes(e.target.tagName)||e.target.isContentEditable)return;const t=[u.Do.up,u.Do.pageup],n=[u.Do.down,u.Do.pagedown];if(t.includes(e.keyCode))e.deltaY=-1;else{if(!n.includes(e.keyCode))return;e.deltaY=1}}(e.target===this.overlay||"keydown"!==e.type&&e.target===document.body||this.checkPath(e))&&e.preventDefault()},hasScrollbar(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return!1;const t=window.getComputedStyle(e);return(["auto","scroll"].includes(t.overflowY)||"SELECT"===e.tagName)&&e.scrollHeight>e.clientHeight||["auto","scroll"].includes(t.overflowX)&&e.scrollWidth>e.clientWidth},shouldScroll(e,t){if(e.hasAttribute("data-app"))return!1;const n=t.shiftKey||t.deltaX?"x":"y",i="y"===n?t.deltaY:t.deltaX||t.deltaY;let r,s;"y"===n?(r=0===e.scrollTop,s=e.scrollTop+e.clientHeight===e.scrollHeight):(r=0===e.scrollLeft,s=e.scrollLeft+e.clientWidth===e.scrollWidth);const o=i<0,a=i>0;return!(r||!o)||(!(s||!a)||!(!r&&!s)&&this.shouldScroll(e.parentNode,t))},isInside(e,t){return e===t||null!==e&&e!==document.body&&this.isInside(e.parentNode,t)},checkPath(e){const t=(0,u.iZ)(e);if("keydown"===e.type&&t[0]===document.body){const t=this.$refs.dialog,n=window.getSelection().anchorNode;return!(t&&this.hasScrollbar(t)&&this.isInside(n,t))||!this.shouldScroll(t,e)}for(let n=0;n<t.length;n++){const i=t[n];if(i===document)return!0;if(i===document.documentElement)return!0;if(i===this.$refs.content)return!0;if(this.hasScrollbar(i))return!this.shouldScroll(i,e)}return!0},hideScroll(){this.$vuetify.breakpoint.smAndDown?document.documentElement.classList.add("overflow-y-hidden"):((0,u.lj)(window,"wheel",this.scrollListener,{passive:!1}),window.addEventListener("keydown",this.scrollListener))},showScroll(){document.documentElement.classList.remove("overflow-y-hidden"),window.removeEventListener("wheel",this.scrollListener),window.removeEventListener("keydown",this.scrollListener)}}})},8747:function(e,t,n){"use strict";n.d(t,{d:function(){return o}});var i=n(144),r=n(8131);const s={absolute:Boolean,bottom:Boolean,fixed:Boolean,left:Boolean,right:Boolean,top:Boolean};function o(e=[]){return i.ZP.extend({name:"positionable",props:e.length?(0,r.ji)(s,e):s})}t["Z"]=o()},7779:function(e,t,n){"use strict";var i=n(144);function r(e="value",t="change"){return i.ZP.extend({name:"proxyable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{internalLazyValue:this[e]}},computed:{internalValue:{get(){return this.internalLazyValue},set(e){e!==this.internalLazyValue&&(this.internalLazyValue=e,this.$emit(t,e))}}},watch:{[e](e){this.internalLazyValue=e}}})}const s=r();t["Z"]=s},950:function(e,t,n){"use strict";n.d(t,{J:function(){return a},f:function(){return o}});var i=n(144),r=n(8219);function s(e,t){return()=>(0,r.Kd)(`The ${e} component must be used inside a ${t}`)}function o(e,t,n){const r=t&&n?{register:s(t,n),unregister:s(t,n)}:null;return i.ZP.extend({name:"registrable-inject",inject:{[e]:{default:r}}})}function a(e,t=!1){return i.ZP.extend({name:"registrable-provide",provide(){return{[e]:t?this:{register:this.register,unregister:this.unregister}}}})}},5357:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.ZP.extend({name:"roundable",props:{rounded:[Boolean,String],tile:Boolean},computed:{roundedClasses(){const e=[],t="string"===typeof this.rounded?String(this.rounded):!0===this.rounded;if(this.tile)e.push("rounded-0");else if("string"===typeof t){const n=t.split(" ");for(const t of n)e.push(`rounded-${t}`)}else t&&e.push("rounded");return e.length>0?{[e.join(" ")]:!0}:{}}}})},9367:function(e,t,n){"use strict";var i=n(144),r=n(293),s=n(8131);t["Z"]=i.ZP.extend({name:"routable",directives:{Ripple:r.Z},props:{activeClass:String,append:Boolean,disabled:Boolean,exact:{type:Boolean,default:void 0},exactPath:Boolean,exactActiveClass:String,link:Boolean,href:[String,Object],to:[String,Object],nuxt:Boolean,replace:Boolean,ripple:{type:[Boolean,Object],default:null},tag:String,target:String},data:()=>({isActive:!1,proxyClass:""}),computed:{classes(){const e={};return this.to||(this.activeClass&&(e[this.activeClass]=this.isActive),this.proxyClass&&(e[this.proxyClass]=this.isActive)),e},computedRipple(){var e;return null!==(e=this.ripple)&&void 0!==e?e:!this.disabled&&this.isClickable},isClickable(){return!this.disabled&&Boolean(this.isLink||this.$listeners.click||this.$listeners["!click"]||this.$attrs.tabindex)},isLink(){return this.to||this.href||this.link},styles:()=>({})},watch:{$route:"onRouteChange"},mounted(){this.onRouteChange()},methods:{generateRouteLink(){let e,t=this.exact;const n={attrs:{tabindex:"tabindex"in this.$attrs?this.$attrs.tabindex:void 0},class:this.classes,style:this.styles,props:{},directives:[{name:"ripple",value:this.computedRipple}],[this.to?"nativeOn":"on"]:{...this.$listeners,..."click"in this?{click:this.click}:void 0},ref:"link"};if("undefined"===typeof this.exact&&(t="/"===this.to||this.to===Object(this.to)&&"/"===this.to.path),this.to){let i=this.activeClass,r=this.exactActiveClass||i;this.proxyClass&&(i=`${i} ${this.proxyClass}`.trim(),r=`${r} ${this.proxyClass}`.trim()),e=this.nuxt?"nuxt-link":"router-link",Object.assign(n.props,{to:this.to,exact:t,exactPath:this.exactPath,activeClass:i,exactActiveClass:r,append:this.append,replace:this.replace})}else e=(this.href?"a":this.tag)||"div","a"===e&&this.href&&(n.attrs.href=this.href);return this.target&&(n.attrs.target=this.target),{tag:e,data:n}},onRouteChange(){if(!this.to||!this.$refs.link||!this.$route)return;const e=`${this.activeClass||""} ${this.proxyClass||""}`.trim(),t=`${this.exactActiveClass||""} ${this.proxyClass||""}`.trim()||e,n="_vnode.data.class."+(this.exact?t:e);this.$nextTick((()=>{!(0,s.vO)(this.$refs.link,n)===this.isActive&&this.toggle()}))},toggle(){this.isActive=!this.isActive}}})},2412:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.ZP.extend({name:"sizeable",props:{large:Boolean,small:Boolean,xLarge:Boolean,xSmall:Boolean},computed:{medium(){return Boolean(!this.xSmall&&!this.small&&!this.large&&!this.xLarge)},sizeableClasses(){return{"v-size--x-small":this.xSmall,"v-size--small":this.small,"v-size--default":this.medium,"v-size--large":this.large,"v-size--x-large":this.xLarge}}}})},8191:function(e,t,n){"use strict";var i=n(144);t["Z"]=i.ZP.extend({name:"ssr-bootable",data:()=>({isBooted:!1}),mounted(){window.requestAnimationFrame((()=>{this.$el.setAttribute("data-booted","true"),this.isBooted=!0}))}})},2066:function(e,t,n){"use strict";n.d(t,{X:function(){return s}});var i=n(144);const r=i.ZP.extend().extend({name:"themeable",provide(){return{theme:this.themeableProvide}},inject:{theme:{default:{isDark:!1}}},props:{dark:{type:Boolean,default:null},light:{type:Boolean,default:null}},data(){return{themeableProvide:{isDark:!1}}},computed:{appIsDark(){return this.$vuetify.theme.dark||!1},isDark(){return!0===this.dark||!0!==this.light&&this.theme.isDark},themeClasses(){return{"theme--dark":this.isDark,"theme--light":!this.isDark}},rootIsDark(){return!0===this.dark||!0!==this.light&&this.appIsDark},rootThemeClasses(){return{"theme--dark":this.rootIsDark,"theme--light":!this.rootIsDark}}},watch:{isDark:{handler(e,t){e!==t&&(this.themeableProvide.isDark=this.isDark)},immediate:!0}}});function s(e){const t={...e.props,...e.injections},n=r.options.computed.isDark.call(t);return r.options.computed.themeClasses.call({isDark:n})}t["Z"]=r},4552:function(e,t,n){"use strict";n.d(t,{d:function(){return r}});var i=n(144);function r(e="value",t="input"){return i.ZP.extend({name:"toggleable",model:{prop:e,event:t},props:{[e]:{required:!1}},data(){return{isActive:!!this[e]}},watch:{[e](e){this.isActive=!!e},isActive(n){!!n!==this[e]&&this.$emit(t,n)}}})}const s=r();t["Z"]=s},4771:function(e,t,n){"use strict";n.d(t,{I4:function(){return o},NA:function(){return r},hq:function(){return a},jx:function(){return s}});var i=n(8219);function r(e){return!!e&&!!e.match(/^(#|var\(--|(rgb|hsl)a?\()/)}function s(e){let t;if("number"===typeof e)t=e;else{if("string"!==typeof e)throw new TypeError(`Colors can only be numbers or strings, recieved ${null==e?e:e.constructor.name} instead`);{let n="#"===e[0]?e.substring(1):e;3===n.length&&(n=n.split("").map((e=>e+e)).join("")),6!==n.length&&(0,i.Kd)(`'${e}' is not a valid rgb color`),t=parseInt(n,16)}}return t<0?((0,i.Kd)(`Colors cannot be negative: '${e}'`),t=0):(t>16777215||isNaN(t))&&((0,i.Kd)(`'${e}' is not a valid rgb color`),t=16777215),t}function o(e){let t=e.toString(16);return t.length<6&&(t="0".repeat(6-t.length)+t),"#"+t}function a(e){return o(s(e))}},8219:function(e,t,n){"use strict";n.d(t,{Jk:function(){return u},Kd:function(){return s},N6:function(){return o},Rn:function(){return a},fK:function(){return c}});var i=n(154);function r(e,t,n){if(!i.Z.config.silent){if(n&&(t={_isVue:!0,$parent:n,$options:t}),t){if(t.$_alreadyWarned=t.$_alreadyWarned||[],t.$_alreadyWarned.includes(e))return;t.$_alreadyWarned.push(e)}return`[Vuetify] ${e}`+(t?f(t):"")}}function s(e,t,n){const i=r(e,t,n);null!=i&&console.warn(i)}function o(e,t,n){const i=r(e,t,n);null!=i&&console.error(i)}function a(e,t,n,i){s(`[UPGRADE] '${e}' is deprecated, use '${t}' instead.`,n,i)}function c(e,t,n,i){o(`[BREAKING] '${e}' has been removed, use '${t}' instead. For more information, see the upgrade guide https://github.com/vuetifyjs/vuetify/releases/tag/v2.0.0#user-content-upgrade-guide`,n,i)}function u(e,t,n){s(`[REMOVED] '${e}' has been removed. You can safely omit it.`,t,n)}const l=/(?:^|[-_])(\w)/g,h=e=>e.replace(l,(e=>e.toUpperCase())).replace(/[-_]/g,"");function d(e,t){if(e.$root===e)return"<Root>";const n="function"===typeof e&&null!=e.cid?e.options:e._isVue?e.$options||e.constructor.options:e||{};let i=n.name||n._componentTag;const r=n.__file;if(!i&&r){const e=r.match(/([^/\\]+)\.vue$/);i=e&&e[1]}return(i?`<${h(i)}>`:"<Anonymous>")+(r&&!1!==t?` at ${r}`:"")}function f(e){if(e._isVue&&e.$parent){const t=[];let n=0;while(e){if(t.length>0){const i=t[t.length-1];if(i.constructor===e.constructor){n++,e=e.$parent;continue}n>0&&(t[t.length-1]=[i,n],n=0)}t.push(e),e=e.$parent}return"\n\nfound in\n\n"+t.map(((e,t)=>`${0===t?"---\x3e ":" ".repeat(5+2*t)}${Array.isArray(e)?`${d(e[0])}... (${e[1]} recursive calls)`:d(e)}`)).join("\n")}return`\n\n(found in ${d(e)})`}},3118:function(e,t,n){"use strict";function i(e){if("function"!==typeof e.getRootNode){while(e.parentNode)e=e.parentNode;return e!==document?null:document}const t=e.getRootNode();return t!==document&&t.getRootNode({composed:!0})!==document?null:t}n.d(t,{e:function(){return i}})},8131:function(e,t,n){"use strict";n.d(t,{Do:function(){return g},Ee:function(){return C},GL:function(){return p},Ji:function(){return r},KK:function(){return h},RB:function(){return v},TI:function(){return I},XE:function(){return k},XP:function(){return y},_A:function(){return w},iZ:function(){return x},jC:function(){return _},ji:function(){return d},kb:function(){return f},lj:function(){return a},qh:function(){return s},qw:function(){return c},sp:function(){return S},uZ:function(){return E},vO:function(){return l},vZ:function(){return u},z9:function(){return T}});var i=n(144);function r(e,t="div",n){return i.ZP.extend({name:n||e.replace(/__/g,"-"),functional:!0,props:{tag:{type:String,default:t}},render(t,{data:n,props:i,children:r}){return n.staticClass=`${e} ${n.staticClass||""}`.trim(),t(i.tag,n,r)}})}function s(e,t,n,i=!1){const r=s=>{n(s),e.removeEventListener(t,r,i)};e.addEventListener(t,r,i)}let o=!1;try{if("undefined"!==typeof window){const e=Object.defineProperty({},"passive",{get:()=>{o=!0}});window.addEventListener("testListener",e,e),window.removeEventListener("testListener",e,e)}}catch(A){console.warn(A)}function a(e,t,n,i){e.addEventListener(t,n,!!o&&i)}function c(e,t,n){const i=t.length-1;if(i<0)return void 0===e?n:e;for(let r=0;r<i;r++){if(null==e)return n;e=e[t[r]]}return null==e||void 0===e[t[i]]?n:e[t[i]]}function u(e,t){if(e===t)return!0;if(e instanceof Date&&t instanceof Date&&e.getTime()!==t.getTime())return!1;if(e!==Object(e)||t!==Object(t))return!1;const n=Object.keys(e);return n.length===Object.keys(t).length&&n.every((n=>u(e[n],t[n])))}function l(e,t,n){return null!=e&&t&&"string"===typeof t?void 0!==e[t]?e[t]:(t=t.replace(/\[(\w+)\]/g,".$1"),t=t.replace(/^\./,""),c(e,t.split("."),n)):n}function h(e){if(!e||e.nodeType!==Node.ELEMENT_NODE)return 0;const t=+window.getComputedStyle(e).getPropertyValue("z-index");return t||h(e.parentNode)}function d(e,t){const n={};for(let i=0;i<t.length;i++){const r=t[i];"undefined"!==typeof e[r]&&(n[r]=e[r])}return n}function f(e,t="px"){return null==e||""===e?void 0:isNaN(+e)?String(e):`${Number(e)}${t}`}function p(e){return(e||"").replace(/([a-z])([A-Z])/g,"$1-$2").toLowerCase()}function m(e){return null!==e&&"object"===typeof e}const g=Object.freeze({enter:13,tab:9,delete:46,esc:27,space:32,up:38,down:40,left:37,right:39,end:35,home:36,del:46,backspace:8,insert:45,pageup:33,pagedown:34,shift:16});function v(e,t){const n=e.$vuetify.icons.component;if(t.startsWith("$")){const n=`$vuetify.icons.values.${t.split("$").pop().split(".").pop()}`,i=l(e,n,t);if("string"!==typeof i)return i;t=i}return null==n?t:{component:n,props:{icon:t}}}function y(e){return Object.keys(e)}const b=/-(\w)/g,w=e=>e.replace(b,((e,t)=>t?t.toUpperCase():""));function _(e){return e.charAt(0).toUpperCase()+e.slice(1)}function I(e){return null!=e?Array.isArray(e)?e:[e]:[]}function S(e,t,n){return e.$slots.hasOwnProperty(t)&&e.$scopedSlots.hasOwnProperty(t)&&e.$scopedSlots[t].name?n?"v-slot":"scoped":e.$slots.hasOwnProperty(t)?"normal":e.$scopedSlots.hasOwnProperty(t)?"scoped":void 0}function T(e,t="default",n,i=!1){return e.$scopedSlots.hasOwnProperty(t)?e.$scopedSlots[t](n instanceof Function?n():n):!e.$slots.hasOwnProperty(t)||n&&!i?void 0:e.$slots[t]}function E(e,t=0,n=1){return Math.max(t,Math.min(n,e))}function k(e,t=!1){const n=t?1024:1e3;if(e<n)return`${e} B`;const i=t?["Ki","Mi","Gi"]:["k","M","G"];let r=-1;while(Math.abs(e)>=n&&r<i.length-1)e/=n,++r;return`${e.toFixed(1)} ${i[r]}B`}function C(e={},t={}){for(const n in t){const i=e[n],r=t[n];m(i)&&m(r)?e[n]=C(i,r):e[n]=r}return e}function x(e){if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}return t}},7559:function(e,t,n){"use strict";n.d(t,{ZP:function(){return o},y0:function(){return a}});var i=n(8131);const r={styleList:/;(?![^(]*\))/g,styleProp:/:(.*)/};function s(e){const t={};for(const n of e.split(r.styleList)){let[e,s]=n.split(r.styleProp);e=e.trim(),e&&("string"===typeof s&&(s=s.trim()),t[(0,i._A)(e)]=s)}return t}function o(){const e={};let t,n=arguments.length;while(n--)for(t of Object.keys(arguments[n]))switch(t){case"class":case"directives":arguments[n][t]&&(e[t]=c(e[t],arguments[n][t]));break;case"style":arguments[n][t]&&(e[t]=a(e[t],arguments[n][t]));break;case"staticClass":if(!arguments[n][t])break;void 0===e[t]&&(e[t]=""),e[t]&&(e[t]+=" "),e[t]+=arguments[n][t].trim();break;case"on":case"nativeOn":arguments[n][t]&&(e[t]=u(e[t],arguments[n][t]));break;case"attrs":case"props":case"domProps":case"scopedSlots":case"staticStyle":case"hook":case"transition":if(!arguments[n][t])break;e[t]||(e[t]={}),e[t]={...arguments[n][t],...e[t]};break;default:e[t]||(e[t]=arguments[n][t])}return e}function a(e,t){return e?t?(e=(0,i.TI)("string"===typeof e?s(e):e),e.concat("string"===typeof t?s(t):t)):e:t}function c(e,t){return t?e&&e?(0,i.TI)(e).concat(t):t:e}function u(...e){if(!e[0])return e[1];if(!e[1])return e[0];const t={};for(let n=2;n--;){const i=e[n];for(const e in i)i[e]&&(t[e]?t[e]=[].concat(i[e],t[e]):t[e]=i[e])}return t}},5530:function(e,t,n){"use strict";n.d(t,{Z:function(){return r}});var i=n(144);function r(...e){return i.ZP.extend({mixins:e})}},8180:function(e,t,n){"use strict";n.d(t,{Z:function(){return v}});var i=n(4444),r=n(8463),s=n(5816),o=n(3333);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e,t){this._delegate=e,this.firebase=t,(0,s._addComponent)(e,new r.wA("app-compat",(()=>this),"PUBLIC")),this.container=e.container}get automaticDataCollectionEnabled(){return this._delegate.automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this._delegate.automaticDataCollectionEnabled=e}get name(){return this._delegate.name}get options(){return this._delegate.options}delete(){return new Promise((e=>{this._delegate.checkDestroyed(),e()})).then((()=>(this.firebase.INTERNAL.removeApp(this.name),(0,s.deleteApp)(this._delegate))))}_getService(e,t=s._DEFAULT_ENTRY_NAME){var n;this._delegate.checkDestroyed();const i=this._delegate.container.getProvider(e);return i.isInitialized()||"EXPLICIT"!==(null===(n=i.getComponent())||void 0===n?void 0:n.instantiationMode)||i.initialize(),i.getImmediate({identifier:t})}_removeServiceInstance(e,t=s._DEFAULT_ENTRY_NAME){this._delegate.container.getProvider(e).clearInstance(t)}_addComponent(e){(0,s._addComponent)(this._delegate,e)}_addOrOverwriteComponent(e){(0,s._addOrOverwriteComponent)(this._delegate,e)}toJSON(){return{name:this.name,automaticDataCollectionEnabled:this.automaticDataCollectionEnabled,options:this.options}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const c={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance."},u=new i.LL("app-compat","Firebase",c);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function l(e){const t={},n={__esModule:!0,initializeApp:a,app:o,registerVersion:s.registerVersion,setLogLevel:s.setLogLevel,onLog:s.onLog,apps:null,SDK_VERSION:s.SDK_VERSION,INTERNAL:{registerComponent:l,removeApp:r,useAsService:h,modularAPIs:s}};function r(e){delete t[e]}function o(e){if(e=e||s._DEFAULT_ENTRY_NAME,!(0,i.r3)(t,e))throw u.create("no-app",{appName:e});return t[e]}function a(r,o={}){const a=s.initializeApp(r,o);if((0,i.r3)(t,a.name))return t[a.name];const c=new e(a,n);return t[a.name]=c,c}function c(){return Object.keys(t).map((e=>t[e]))}function l(t){const r=t.name,a=r.replace("-compat","");if(s._registerComponent(t)&&"PUBLIC"===t.type){const s=(e=o())=>{if("function"!==typeof e[a])throw u.create("invalid-app-argument",{appName:r});return e[a]()};void 0!==t.serviceProps&&(0,i.ZB)(s,t.serviceProps),n[a]=s,e.prototype[a]=function(...e){const n=this._getService.bind(this,r);return n.apply(this,t.multipleInstances?e:[])}}return"PUBLIC"===t.type?n[a]:null}function h(e,t){if("serverAuth"===t)return null;const n=t;return n}return n["default"]=n,Object.defineProperty(n,"apps",{get:c}),o["App"]=e,n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function h(){const e=l(a);function t(t){(0,i.ZB)(e,t)}return e.INTERNAL=Object.assign(Object.assign({},e.INTERNAL),{createFirebaseNamespace:h,extendNamespace:t,createSubscribe:i.ne,ErrorFactory:i.LL,deepExtend:i.ZB}),e}const d=h(),f=new o.Yd("@firebase/app-compat"),p="@firebase/app-compat",m="0.2.7";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function g(e){(0,s.registerVersion)(p,m,e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */if((0,i.jU)()&&void 0!==self.firebase){f.warn("\n    Warning: Firebase is already defined in the global scope. Please make sure\n    Firebase library is only loaded once.\n  ");const e=self.firebase.SDK_VERSION;e&&e.indexOf("LITE")>=0&&f.warn("\n    Warning: You are trying to load Firebase while using Firebase Performance standalone script.\n    You should load Firebase Performance with this instance of Firebase to avoid loading duplicate code.\n    ")}const v=d;g()},5816:function(e,t,n){"use strict";n.r(t),n.d(t,{FirebaseError:function(){return s.ZR},SDK_VERSION:function(){return ye},_DEFAULT_ENTRY_NAME:function(){return se},_addComponent:function(){return ue},_addOrOverwriteComponent:function(){return le},_apps:function(){return ae},_clearComponents:function(){return pe},_components:function(){return ce},_getProvider:function(){return de},_registerComponent:function(){return he},_removeServiceInstance:function(){return fe},deleteApp:function(){return Ie},getApp:function(){return we},getApps:function(){return _e},initializeApp:function(){return be},onLog:function(){return Te},registerVersion:function(){return Se},setLogLevel:function(){return Ee}});var i=n(8463),r=n(3333),s=n(4444);const o=(e,t)=>t.some((t=>e instanceof t));let a,c;function u(){return a||(a=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function l(){return c||(c=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const h=new WeakMap,d=new WeakMap,f=new WeakMap,p=new WeakMap,m=new WeakMap;function g(e){const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{t(I(e.result)),i()},s=()=>{n(e.error),i()};e.addEventListener("success",r),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&h.set(t,e)})).catch((()=>{})),m.set(t,e),t}function v(e){if(d.has(e))return;const t=new Promise(((t,n)=>{const i=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{t(),i()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),i()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)}));d.set(e,t)}let y={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return d.get(e);if("objectStoreNames"===t)return e.objectStoreNames||f.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return I(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function b(e){y=e(y)}function w(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?l().includes(e)?function(...t){return e.apply(S(this),t),I(h.get(this))}:function(...t){return I(e.apply(S(this),t))}:function(t,...n){const i=e.call(S(this),t,...n);return f.set(i,t.sort?t.sort():[t]),I(i)}}function _(e){return"function"===typeof e?w(e):(e instanceof IDBTransaction&&v(e),o(e,u())?new Proxy(e,y):e)}function I(e){if(e instanceof IDBRequest)return g(e);if(p.has(e))return p.get(e);const t=_(e);return t!==e&&(p.set(e,t),m.set(t,e)),t}const S=e=>m.get(e);function T(e,t,{blocked:n,upgrade:i,blocking:r,terminated:s}={}){const o=indexedDB.open(e,t),a=I(o);return i&&o.addEventListener("upgradeneeded",(e=>{i(I(o.result),e.oldVersion,e.newVersion,I(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),r&&e.addEventListener("versionchange",(()=>r()))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],k=["put","add","delete","clear"],C=new Map;function x(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(C.get(t))return C.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,r=k.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!r&&!E.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,r?"readwrite":"readonly");let o=s.store;return i&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),r&&s.done]))[0]};return C.set(t,s),s}b((e=>({...e,get:(t,n,i)=>x(t,n)||e.get(t,n,i),has:(t,n)=>!!x(t,n)||e.has(t,n)})));
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class A{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(O(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function O(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const N="@firebase/app",D="0.9.7",R=new r.Yd("@firebase/app"),L="@firebase/app-compat",P="@firebase/analytics-compat",$="@firebase/analytics",M="@firebase/app-check-compat",V="@firebase/app-check",F="@firebase/auth",B="@firebase/auth-compat",U="@firebase/database",j="@firebase/database-compat",z="@firebase/functions",q="@firebase/functions-compat",H="@firebase/installations",G="@firebase/installations-compat",Z="@firebase/messaging",K="@firebase/messaging-compat",W="@firebase/performance",Q="@firebase/performance-compat",Y="@firebase/remote-config",X="@firebase/remote-config-compat",J="@firebase/storage",ee="@firebase/storage-compat",te="@firebase/firestore",ne="@firebase/firestore-compat",ie="firebase",re="9.19.1",se="[DEFAULT]",oe={[N]:"fire-core",[L]:"fire-core-compat",[$]:"fire-analytics",[P]:"fire-analytics-compat",[V]:"fire-app-check",[M]:"fire-app-check-compat",[F]:"fire-auth",[B]:"fire-auth-compat",[U]:"fire-rtdb",[j]:"fire-rtdb-compat",[z]:"fire-fn",[q]:"fire-fn-compat",[H]:"fire-iid",[G]:"fire-iid-compat",[Z]:"fire-fcm",[K]:"fire-fcm-compat",[W]:"fire-perf",[Q]:"fire-perf-compat",[Y]:"fire-rc",[X]:"fire-rc-compat",[J]:"fire-gcs",[ee]:"fire-gcs-compat",[te]:"fire-fst",[ne]:"fire-fst-compat","fire-js":"fire-js",[ie]:"fire-js-all"},ae=new Map,ce=new Map;function ue(e,t){try{e.container.addComponent(t)}catch(n){R.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function le(e,t){e.container.addOrOverwriteComponent(t)}function he(e){const t=e.name;if(ce.has(t))return R.debug(`There were multiple attempts to register component ${t}.`),!1;ce.set(t,e);for(const n of ae.values())ue(n,e);return!0}function de(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}function fe(e,t,n=se){de(e,t).clearInstance(n)}function pe(){ce.clear()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const me={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["no-options"]:"Need to provide options, when not being deployed to hosting via source.",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["idb-open"]:"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.",["idb-get"]:"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.",["idb-set"]:"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.",["idb-delete"]:"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},ge=new s.LL("app","Firebase",me);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ve{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new i.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw ge.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ye=re;function be(e,t={}){let n=e;if("object"!==typeof t){const e=t;t={name:e}}const r=Object.assign({name:se,automaticDataCollectionEnabled:!1},t),o=r.name;if("string"!==typeof o||!o)throw ge.create("bad-app-name",{appName:String(o)});if(n||(n=(0,s.aH)()),!n)throw ge.create("no-options");const a=ae.get(o);if(a){if((0,s.vZ)(n,a.options)&&(0,s.vZ)(r,a.config))return a;throw ge.create("duplicate-app",{appName:o})}const c=new i.H0(o);for(const i of ce.values())c.addComponent(i);const u=new ve(n,r,c);return ae.set(o,u),u}function we(e=se){const t=ae.get(e);if(!t&&e===se)return be();if(!t)throw ge.create("no-app",{appName:e});return t}function _e(){return Array.from(ae.values())}async function Ie(e){const t=e.name;ae.has(t)&&(ae.delete(t),await Promise.all(e.container.getProviders().map((e=>e.delete()))),e.isDeleted=!0)}function Se(e,t,n){var r;let s=null!==(r=oe[e])&&void 0!==r?r:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void R.warn(e.join(" "))}he(new i.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}function Te(e,t){if(null!==e&&"function"!==typeof e)throw ge.create("invalid-log-argument");(0,r.Am)(e,t)}function Ee(e){(0,r.Ub)(e)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="firebase-heartbeat-database",Ce=1,xe="firebase-heartbeat-store";let Ae=null;function Oe(){return Ae||(Ae=T(ke,Ce,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(xe)}}}).catch((e=>{throw ge.create("idb-open",{originalErrorMessage:e.message})}))),Ae}async function Ne(e){try{const t=await Oe();return t.transaction(xe).objectStore(xe).get(Re(e))}catch(t){if(t instanceof s.ZR)R.warn(t.message);else{const e=ge.create("idb-get",{originalErrorMessage:null===t||void 0===t?void 0:t.message});R.warn(e.message)}}}async function De(e,t){try{const n=await Oe(),i=n.transaction(xe,"readwrite"),r=i.objectStore(xe);return await r.put(t,Re(e)),i.done}catch(n){if(n instanceof s.ZR)R.warn(n.message);else{const e=ge.create("idb-set",{originalErrorMessage:null===n||void 0===n?void 0:n.message});R.warn(e.message)}}}function Re(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Le=1024,Pe=2592e6;class $e{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Fe(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=Me();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=Pe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=Me(),{heartbeatsToSend:t,unsentEntries:n}=Ve(this._heartbeatsCache.heartbeats),i=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function Me(){const e=new Date;return e.toISOString().substring(0,10)}function Ve(e,t=Le){const n=[];let i=e.slice();for(const r of e){const e=n.find((e=>e.agent===r.agent));if(e){if(e.dates.push(r.date),Be(n)>t){e.dates.pop();break}}else if(n.push({agent:r.agent,dates:[r.date]}),Be(n)>t){n.pop();break}i=i.slice(1)}return{heartbeatsToSend:n,unsentEntries:i}}class Fe{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await Ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return De(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function Be(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(e){he(new i.wA("platform-logger",(e=>new A(e)),"PRIVATE")),he(new i.wA("heartbeat",(e=>new $e(e)),"PRIVATE")),Se(N,D,e),Se(N,D,"esm2017"),Se("fire-js","")}Ue("")},8463:function(e,t,n){"use strict";n.d(t,{H0:function(){return u},wA:function(){return r}});var i=n(4444);class r{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new i.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),i=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(i)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(r){if(i)return null;throw r}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(c(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:i});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[r,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(r);n===e&&s.resolve(i)}return i}onInit(e,t){var n;const i=this.normalizeInstanceIdentifier(t),r=null!==(n=this.onInitCallbacks.get(i))&&void 0!==n?n:new Set;r.add(e),this.onInitCallbacks.set(i,r);const s=this.instances.get(i);return s&&e(s,i),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const r of n)try{r(e,t)}catch(i){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(i){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function c(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class u{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},3333:function(e,t,n){"use strict";n.d(t,{Am:function(){return h},Ub:function(){return l},Yd:function(){return u},in:function(){return r}});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const i=[];var r;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(r||(r={}));const s={debug:r.DEBUG,verbose:r.VERBOSE,info:r.INFO,warn:r.WARN,error:r.ERROR,silent:r.SILENT},o=r.INFO,a={[r.DEBUG]:"log",[r.VERBOSE]:"log",[r.INFO]:"info",[r.WARN]:"warn",[r.ERROR]:"error"},c=(e,t,...n)=>{if(t<e.logLevel)return;const i=(new Date).toISOString(),r=a[t];if(!r)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[r](`[${i}]  ${e.name}:`,...n)};class u{constructor(e){this.name=e,this._logLevel=o,this._logHandler=c,this._userLogHandler=null,i.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in r))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,r.DEBUG,...e),this._logHandler(this,r.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,r.VERBOSE,...e),this._logHandler(this,r.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,r.INFO,...e),this._logHandler(this,r.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,r.WARN,...e),this._logHandler(this,r.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,r.ERROR,...e),this._logHandler(this,r.ERROR,...e)}}function l(e){i.forEach((t=>{t.setLogLevel(e)}))}function h(e,t){for(const n of i){let i=null;t&&t.level&&(i=s[t.level]),n.userLogHandler=null===e?null:(t,n,...s)=>{const o=s.map((e=>{if(null==e)return null;if("string"===typeof e)return e;if("number"===typeof e||"boolean"===typeof e)return e.toString();if(e instanceof Error)return e.message;try{return JSON.stringify(e)}catch(t){return null}})).filter((e=>e)).join(" ");n>=(null!==i&&void 0!==i?i:t.logLevel)&&e({level:r[n].toLowerCase(),message:o,args:s,type:t.name})}}}},4866:function(e,t,n){"use strict";n.d(t,{Z:function(){return i.Z}});var i=n(8180),r="firebase",s="9.19.1";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
i.Z.registerVersion(r,s,"app-compat")},2394:function(e,t,n){"use strict";var i=n(8180),r=n(4444),s=n(5816),o=n(3333);function a(e,t){var n={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&t.indexOf(i)<0&&(n[i]=e[i]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var r=0;for(i=Object.getOwnPropertySymbols(e);r<i.length;r++)t.indexOf(i[r])<0&&Object.prototype.propertyIsEnumerable.call(e,i[r])&&(n[i[r]]=e[i[r]])}return n}Object.create;Object.create;var c=n(8463);
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const u={FACEBOOK:"facebook.com",GITHUB:"github.com",GOOGLE:"google.com",PASSWORD:"password",PHONE:"phone",TWITTER:"twitter.com"},l={EMAIL_SIGNIN:"EMAIL_SIGNIN",PASSWORD_RESET:"PASSWORD_RESET",RECOVER_EMAIL:"RECOVER_EMAIL",REVERT_SECOND_FACTOR_ADDITION:"REVERT_SECOND_FACTOR_ADDITION",VERIFY_AND_CHANGE_EMAIL:"VERIFY_AND_CHANGE_EMAIL",VERIFY_EMAIL:"VERIFY_EMAIL"};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function h(){return{["admin-restricted-operation"]:"This operation is restricted to administrators only.",["argument-error"]:"",["app-not-authorized"]:"This app, identified by the domain where it's hosted, is not authorized to use Firebase Authentication with the provided API key. Review your key configuration in the Google API console.",["app-not-installed"]:"The requested mobile application corresponding to the identifier (Android package name or iOS bundle ID) provided is not installed on this device.",["captcha-check-failed"]:"The reCAPTCHA response token provided is either invalid, expired, already used or the domain associated with it does not match the list of whitelisted domains.",["code-expired"]:"The SMS code has expired. Please re-send the verification code to try again.",["cordova-not-ready"]:"Cordova framework is not ready.",["cors-unsupported"]:"This browser is not supported.",["credential-already-in-use"]:"This credential is already associated with a different user account.",["custom-token-mismatch"]:"The custom token corresponds to a different audience.",["requires-recent-login"]:"This operation is sensitive and requires recent authentication. Log in again before retrying this request.",["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK.",["dynamic-link-not-activated"]:"Please activate Dynamic Links in the Firebase Console and agree to the terms and conditions.",["email-change-needs-verification"]:"Multi-factor users must always have a verified email.",["email-already-in-use"]:"The email address is already in use by another account.",["emulator-config-failed"]:'Auth instance has already been used to make a network call. Auth can no longer be configured to use the emulator. Try calling "connectAuthEmulator()" sooner.',["expired-action-code"]:"The action code has expired.",["cancelled-popup-request"]:"This operation has been cancelled due to another conflicting popup being opened.",["internal-error"]:"An internal AuthError has occurred.",["invalid-app-credential"]:"The phone verification request contains an invalid application verifier. The reCAPTCHA token response is either invalid or expired.",["invalid-app-id"]:"The mobile app identifier is not registed for the current project.",["invalid-user-token"]:"This user's credential isn't valid for this project. This can happen if the user's token has been tampered with, or if the user isn't for the project associated with this API key.",["invalid-auth-event"]:"An internal AuthError has occurred.",["invalid-verification-code"]:"The SMS verification code used to create the phone auth credential is invalid. Please resend the verification code sms and be sure to use the verification code provided by the user.",["invalid-continue-uri"]:"The continue URL provided in the request is invalid.",["invalid-cordova-configuration"]:"The following Cordova plugins must be installed to enable OAuth sign-in: cordova-plugin-buildinfo, cordova-universal-links-plugin, cordova-plugin-browsertab, cordova-plugin-inappbrowser and cordova-plugin-customurlscheme.",["invalid-custom-token"]:"The custom token format is incorrect. Please check the documentation.",["invalid-dynamic-link-domain"]:"The provided dynamic link domain is not configured or authorized for the current project.",["invalid-email"]:"The email address is badly formatted.",["invalid-emulator-scheme"]:"Emulator URL must start with a valid scheme (http:// or https://).",["invalid-api-key"]:"Your API key is invalid, please check you have copied it correctly.",["invalid-cert-hash"]:"The SHA-1 certificate hash provided is invalid.",["invalid-credential"]:"The supplied auth credential is malformed or has expired.",["invalid-message-payload"]:"The email template corresponding to this action contains invalid characters in its message. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-multi-factor-session"]:"The request does not contain a valid proof of first factor successful sign-in.",["invalid-oauth-provider"]:"EmailAuthProvider is not supported for this operation. This operation only supports OAuth providers.",["invalid-oauth-client-id"]:"The OAuth client ID provided is either invalid or does not match the specified API key.",["unauthorized-domain"]:"This domain is not authorized for OAuth operations for your Firebase project. Edit the list of authorized domains from the Firebase console.",["invalid-action-code"]:"The action code is invalid. This can happen if the code is malformed, expired, or has already been used.",["wrong-password"]:"The password is invalid or the user does not have a password.",["invalid-persistence-type"]:"The specified persistence type is invalid. It can only be local, session or none.",["invalid-phone-number"]:"The format of the phone number provided is incorrect. Please enter the phone number in a format that can be parsed into E.164 format. E.164 phone numbers are written in the format [+][country code][subscriber number including area code].",["invalid-provider-id"]:"The specified provider ID is invalid.",["invalid-recipient-email"]:"The email corresponding to this action failed to send as the provided recipient email address is invalid.",["invalid-sender"]:"The email template corresponding to this action contains an invalid sender email or name. Please fix by going to the Auth email templates section in the Firebase Console.",["invalid-verification-id"]:"The verification ID used to create the phone auth credential is invalid.",["invalid-tenant-id"]:"The Auth instance's tenant ID is invalid.",["login-blocked"]:"Login blocked by user-provided method: {$originalMessage}",["missing-android-pkg-name"]:"An Android Package Name must be provided if the Android App is required to be installed.",["auth-domain-config-required"]:"Be sure to include authDomain when calling firebase.initializeApp(), by following the instructions in the Firebase console.",["missing-app-credential"]:"The phone verification request is missing an application verifier assertion. A reCAPTCHA response token needs to be provided.",["missing-verification-code"]:"The phone auth credential was created with an empty SMS verification code.",["missing-continue-uri"]:"A continue URL must be provided in the request.",["missing-iframe-start"]:"An internal AuthError has occurred.",["missing-ios-bundle-id"]:"An iOS Bundle ID must be provided if an App Store ID is provided.",["missing-or-invalid-nonce"]:"The request does not contain a valid nonce. This can occur if the SHA-256 hash of the provided raw nonce does not match the hashed nonce in the ID token payload.",["missing-password"]:"A non-empty password must be provided",["missing-multi-factor-info"]:"No second factor identifier is provided.",["missing-multi-factor-session"]:"The request is missing proof of first factor successful sign-in.",["missing-phone-number"]:"To send verification codes, provide a phone number for the recipient.",["missing-verification-id"]:"The phone auth credential was created with an empty verification ID.",["app-deleted"]:"This instance of FirebaseApp has been deleted.",["multi-factor-info-not-found"]:"The user does not have a second factor matching the identifier provided.",["multi-factor-auth-required"]:"Proof of ownership of a second factor is required to complete sign-in.",["account-exists-with-different-credential"]:"An account already exists with the same email address but different sign-in credentials. Sign in using a provider associated with this email address.",["network-request-failed"]:"A network AuthError (such as timeout, interrupted connection or unreachable host) has occurred.",["no-auth-event"]:"An internal AuthError has occurred.",["no-such-provider"]:"User was not linked to an account with the given provider.",["null-user"]:"A null user object was provided as the argument for an operation which requires a non-null user object.",["operation-not-allowed"]:"The given sign-in provider is disabled for this Firebase project. Enable it in the Firebase console, under the sign-in method tab of the Auth section.",["operation-not-supported-in-this-environment"]:'This operation is not supported in the environment this application is running on. "location.protocol" must be http, https or chrome-extension and web storage must be enabled.',["popup-blocked"]:"Unable to establish a connection with the popup. It may have been blocked by the browser.",["popup-closed-by-user"]:"The popup has been closed by the user before finalizing the operation.",["provider-already-linked"]:"User can only be linked to one identity for the given provider.",["quota-exceeded"]:"The project's quota for this operation has been exceeded.",["redirect-cancelled-by-user"]:"The redirect operation has been cancelled by the user before finalizing.",["redirect-operation-pending"]:"A redirect sign-in operation is already pending.",["rejected-credential"]:"The request contains malformed or mismatching credentials.",["second-factor-already-in-use"]:"The second factor is already enrolled on this account.",["maximum-second-factor-count-exceeded"]:"The maximum allowed number of second factors on a user has been exceeded.",["tenant-id-mismatch"]:"The provided tenant ID does not match the Auth instance's tenant ID",["timeout"]:"The operation has timed out.",["user-token-expired"]:"The user's credential is no longer valid. The user must sign in again.",["too-many-requests"]:"We have blocked all requests from this device due to unusual activity. Try again later.",["unauthorized-continue-uri"]:"The domain of the continue URL is not whitelisted.  Please whitelist the domain in the Firebase console.",["unsupported-first-factor"]:"Enrolling a second factor or signing in with a multi-factor account requires sign-in with a supported first factor.",["unsupported-persistence-type"]:"The current environment does not support the specified persistence type.",["unsupported-tenant-operation"]:"This operation is not supported in a multi-tenant context.",["unverified-email"]:"The operation requires a verified email.",["user-cancelled"]:"The user did not grant your application the permissions it requested.",["user-not-found"]:"There is no user record corresponding to this identifier. The user may have been deleted.",["user-disabled"]:"The user account has been disabled by an administrator.",["user-mismatch"]:"The supplied credentials do not correspond to the previously signed in user.",["user-signed-out"]:"",["weak-password"]:"The password must be 6 characters long or more.",["web-storage-unsupported"]:"This browser is not supported or 3rd party cookies and data may be disabled.",["already-initialized"]:"initializeAuth() has already been called with different options. To avoid this error, call initializeAuth() with the same options as when it was originally called, or call getAuth() to return the already initialized instance."}}function d(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const f=h,p=d,m=new r.LL("auth","Firebase",d()),g=new o.Yd("@firebase/auth");function v(e,...t){g.logLevel<=o["in"].ERROR&&g.error(`Auth (${s.SDK_VERSION}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function y(e,...t){throw I(e,...t)}function b(e,...t){return I(e,...t)}function w(e,t,n){const i=Object.assign(Object.assign({},p()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function _(e,t,n){const i=n;if(!(t instanceof i))throw i.name!==t.constructor.name&&y(e,"argument-error"),w(e,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function I(e,...t){if("string"!==typeof e){const n=t[0],i=[...t.slice(1)];return i[0]&&(i[0].appName=e.name),e._errorFactory.create(n,...i)}return m.create(e,...t)}function S(e,t,...n){if(!e)throw I(t,...n)}function T(e){const t="INTERNAL ASSERTION FAILED: "+e;throw v(t),new Error(t)}function E(e,t){e||T(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const k=new Map;function C(e){E(e instanceof Function,"Expected a class definition");let t=k.get(e);return t?(E(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,k.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function x(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],i=(Array.isArray(n)?n:[n]).map(C);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(i,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function O(){return"http:"===N()||"https:"===N()}function N(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(O()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function R(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L{constructor(e,t){this.shortDelay=e,this.longDelay=t,E(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return D()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){E(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ${static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void T("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void T("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void T("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const M={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"missing-password",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},V=new L(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function F(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function B(e,t,n,i,s={}){return U(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),c=await e._getAdditionalHeaders();return c["Content-Type"]="application/json",e.languageCode&&(c["X-Firebase-Locale"]=e.languageCode),$.fetch()(z(e,e.config.apiHost,n,a),Object.assign({method:t,headers:c,referrerPolicy:"no-referrer"},s))}))}async function U(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},M),t);try{const t=new q(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw H(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw H(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw H(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw H(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw w(e,a,o);y(e,a)}}catch(s){if(s instanceof r.ZR)throw s;y(e,"network-request-failed",{message:String(s)})}}async function j(e,t,n,i,r={}){const s=await B(e,t,n,i,r);return"mfaPendingCredential"in s&&y(e,"multi-factor-auth-required",{_serverResponse:s}),s}function z(e,t,n,i){const r=`${t}${n}?${i}`;return e.config.emulator?P(e.config,r):`${e.config.apiScheme}://${r}`}class q{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(b(this.auth,"network-request-failed"))),V.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function H(e,t,n){const i={appName:e.name};n.email&&(i.email=n.email),n.phoneNumber&&(i.phoneNumber=n.phoneNumber);const r=b(e,t,i);return r.customData._tokenResponse=n,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t){return B(e,"POST","/v1/accounts:delete",t)}async function Z(e,t){return B(e,"POST","/v1/accounts:update",t)}async function K(e,t){return B(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function W(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=X(i);S(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:W(Y(s.auth_time)),issuedAtTime:W(Y(s.iat)),expirationTime:W(Y(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function Y(e){return 1e3*Number(e)}function X(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return v("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(v("Failed to decode base64 JWT payload"),null)}catch(s){return v("Caught error parsing JWT payload as JSON",null===s||void 0===s?void 0:s.toString()),null}}function J(e){const t=X(e);return S(t,"internal-error"),S("undefined"!==typeof t.exp,"internal-error"),S("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ee(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&te(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function te({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===(null===e||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=W(this.lastLoginAt),this.creationTime=W(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function re(e){var t;const n=e.auth,i=await e.getIdToken(),r=await ee(e,K(n,{idToken:i}));S(null===r||void 0===r?void 0:r.users.length,n,"internal-error");const s=r.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?ae(s.providerUserInfo):[],a=oe(e.providerData,o),c=e.isAnonymous,u=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),l=!!c&&u,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new ie(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(e,h)}async function se(e){const t=(0,r.m9)(e);await re(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function oe(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function ae(e){return e.map((e=>{var{providerId:t}=e,n=a(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ce(e,t){const n=await U(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=z(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",$.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ue{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){S(e.idToken,"internal-error"),S("undefined"!==typeof e.idToken,"internal-error"),S("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):J(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return S(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:i,expiresIn:r}=await ce(e,t);this.updateTokensAndExpiration(n,i,Number(r))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:i,expirationTime:r}=t,s=new ue;return n&&(S("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),i&&(S("string"===typeof i,"internal-error",{appName:e}),s.accessToken=i),r&&(S("number"===typeof r,"internal-error",{appName:e}),s.expirationTime=r),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ue,this.toJSON())}_performRefresh(){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t){S("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class he{constructor(e){var{uid:t,auth:n,stsTokenManager:i}=e,r=a(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new ne(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new ie(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await ee(this,this.stsTokenManager.getToken(this.auth,e));return S(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return Q(this,e)}reload(){return se(this)}_assign(e){this!==e&&(S(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){S(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await re(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await ee(this,G(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,i,r,s,o,a,c,u;const l=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(i=t.email)&&void 0!==i?i:void 0,d=null!==(r=t.phoneNumber)&&void 0!==r?r:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,m=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,g=null!==(c=t.createdAt)&&void 0!==c?c:void 0,v=null!==(u=t.lastLoginAt)&&void 0!==u?u:void 0,{uid:y,emailVerified:b,isAnonymous:w,providerData:_,stsTokenManager:I}=t;S(y&&I,e,"internal-error");const T=ue.fromJSON(this.name,I);S("string"===typeof y,e,"internal-error"),le(l,e.name),le(h,e.name),S("boolean"===typeof b,e,"internal-error"),S("boolean"===typeof w,e,"internal-error"),le(d,e.name),le(f,e.name),le(p,e.name),le(m,e.name),le(g,e.name),le(v,e.name);const E=new he({uid:y,auth:e,email:h,emailVerified:b,displayName:l,isAnonymous:w,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:g,lastLoginAt:v});return _&&Array.isArray(_)&&(E.providerData=_.map((e=>Object.assign({},e)))),m&&(E._redirectEventId=m),E}static async _fromIdTokenResponse(e,t,n=!1){const i=new ue;i.updateFromServerResponse(t);const r=new he({uid:t.localId,auth:e,stsTokenManager:i,isAnonymous:n});return await re(r),r}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}de.type="NONE";const fe=de;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(e,t,n){return`firebase:${e}:${t}:${n}`}class me{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:i,name:r}=this.auth;this.fullUserKey=pe(this.userKey,i.apiKey,r),this.fullPersistenceKey=pe("persistence",i.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new me(C(fe),e,n);const i=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let r=i[0]||C(fe);const s=pe(n,e.config.apiKey,e.name);let o=null;for(const u of t)try{const t=await u._get(s);if(t){const n=he._fromJSON(e,t);u!==r&&(o=n),r=u;break}}catch(c){}const a=i.filter((e=>e._shouldAllowMigration));return r._shouldAllowMigration&&a.length?(r=a[0],o&&await r._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==r)try{await e._remove(s)}catch(c){}}))),new me(r,e,n)):new me(r,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ge(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(we(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(ve(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Ie(t))return"Blackberry";if(Se(t))return"Webos";if(ye(t))return"Safari";if((t.includes("chrome/")||be(t))&&!t.includes("edge/"))return"Chrome";if(_e(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function ve(e=(0,r.z$)()){return/firefox\//i.test(e)}function ye(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function be(e=(0,r.z$)()){return/crios\//i.test(e)}function we(e=(0,r.z$)()){return/iemobile/i.test(e)}function _e(e=(0,r.z$)()){return/android/i.test(e)}function Ie(e=(0,r.z$)()){return/blackberry/i.test(e)}function Se(e=(0,r.z$)()){return/webos/i.test(e)}function Te(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function Ee(e=(0,r.z$)()){return/(iPad|iPhone|iPod).*OS 7_\d/i.test(e)||/(iPad|iPhone|iPod).*OS 8_\d/i.test(e)}function ke(e=(0,r.z$)()){var t;return Te(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function Ce(){return(0,r.w1)()&&10===document.documentMode}function xe(e=(0,r.z$)()){return Te(e)||_e(e)||Se(e)||Ie(e)||/windows phone/i.test(e)||we(e)}function Ae(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Oe(e,t=[]){let n;switch(e){case"Browser":n=ge((0,r.z$)());break;case"Worker":n=`${ge((0,r.z$)())}-${e}`;break;default:n=e}const i=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${s.SDK_VERSION}/${i}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,i)=>{try{const i=e(t);n(i)}catch(r){i(r)}}));n.onAbort=t,this.queue.push(n);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const n of this.queue)await n(e),n.onAbort&&t.push(n.onAbort)}catch(n){t.reverse();for(const e of t)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===n||void 0===n?void 0:n.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Le(this),this.idTokenSubscription=new Le(this),this.beforeStateQueue=new Ne(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=m,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=C(t)),this._initializationPromise=this.queue((async()=>{var n,i;if(!this._deleted&&(this.persistenceManager=await me.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(r){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(i=this.currentUser)||void 0===i?void 0:i.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let i=n,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===i||void 0===i?void 0:i._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(i=o.user,r=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(i)}catch(s){i=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return S(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await re(e)}catch(t){if("auth/network-request-failed"!==(null===t||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=R()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&S(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&S(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(C(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&C(e)||this._popupRedirectResolver;S(t,this,"argument-error"),this.redirectPersistenceManager=await me.create(this,[C(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,i){if(this._deleted)return()=>{};const r="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return S(s,this,"internal-error"),s.then((()=>r(this.currentUser))),"function"===typeof t?e.addObserver(t,n,i):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return S(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Oe(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Re(e){return(0,r.m9)(e)}class Le{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return S(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}function Pe(e,t,n){const i=Re(e);S(i._canInitEmulator,i,"emulator-config-failed"),S(/^https?:\/\//.test(t),i,"invalid-emulator-scheme");const r=!!(null===n||void 0===n?void 0:n.disableWarnings),s=$e(t),{host:o,port:a}=Me(t),c=null===a?"":`:${a}`;i.config.emulator={url:`${s}//${o}${c}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:r})}),r||Fe()}function $e(e){const t=e.indexOf(":");return t<0?"":e.substr(0,t+1)}function Me(e){const t=$e(e),n=/(\/\/)?([^?#/]+)/.exec(e.substr(t.length));if(!n)return{host:"",port:null};const i=n[2].split("@").pop()||"",r=/^(\[[^\]]+\])(:|$)/.exec(i);if(r){const e=r[1];return{host:e,port:Ve(i.substr(e.length+1))}}{const[e,t]=i.split(":");return{host:e,port:Ve(t)}}}function Ve(e){if(!e)return null;const t=Number(e);return isNaN(t)?null:t}function Fe(){function e(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}"undefined"!==typeof console&&"function"===typeof console.info&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),"undefined"!==typeof window&&"undefined"!==typeof document&&("loading"===document.readyState?window.addEventListener("DOMContentLoaded",e):e())}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Be{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return T("not implemented")}_getIdTokenResponse(e){return T("not implemented")}_linkToIdToken(e,t){return T("not implemented")}_getReauthenticationResolver(e){return T("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ue(e,t){return B(e,"POST","/v1/accounts:resetPassword",F(e,t))}async function je(e,t){return B(e,"POST","/v1/accounts:update",t)}async function ze(e,t){return B(e,"POST","/v1/accounts:update",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qe(e,t){return j(e,"POST","/v1/accounts:signInWithPassword",F(e,t))}async function He(e,t){return B(e,"POST","/v1/accounts:sendOobCode",F(e,t))}async function Ge(e,t){return He(e,t)}async function Ze(e,t){return He(e,t)}async function Ke(e,t){return He(e,t)}async function We(e,t){return He(e,t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Qe(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}async function Ye(e,t){return j(e,"POST","/v1/accounts:signInWithEmailLink",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xe extends Be{constructor(e,t,n,i=null){super("password",n),this._email=e,this._password=t,this._tenantId=i}static _fromEmailAndPassword(e,t){return new Xe(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Xe(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return qe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Qe(e,{email:this._email,oobCode:this._password});default:y(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return je(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ye(e,{idToken:t,email:this._email,oobCode:this._password});default:y(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Je(e,t){return j(e,"POST","/v1/accounts:signInWithIdp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const et="http://localhost";class tt extends Be{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new tt(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):y("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i}=t,r=a(t,["providerId","signInMethod"]);if(!n||!i)return null;const s=new tt(n,i);return s.idToken=r.idToken||void 0,s.accessToken=r.accessToken||void 0,s.secret=r.secret,s.nonce=r.nonce,s.pendingToken=r.pendingToken||null,s}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}buildRequest(){const e={requestUri:et,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function nt(e,t){return B(e,"POST","/v1/accounts:sendVerificationCode",F(e,t))}async function it(e,t){return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t))}async function rt(e,t){const n=await j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,t));if(n.temporaryProof)throw H(e,"account-exists-with-different-credential",n);return n}const st={["USER_NOT_FOUND"]:"user-not-found"};async function ot(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return j(e,"POST","/v1/accounts:signInWithPhoneNumber",F(e,n),st)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at extends Be{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new at({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new at({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return it(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return rt(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return ot(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:i}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:i}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}=e;return n||t||i||r?new at({verificationId:t,verificationCode:n,phoneNumber:i,temporaryProof:r}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ct(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ut(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class lt{constructor(e){var t,n,i,s,o,a;const c=(0,r.zd)((0,r.pd)(e)),u=null!==(t=c["apiKey"])&&void 0!==t?t:null,l=null!==(n=c["oobCode"])&&void 0!==n?n:null,h=ct(null!==(i=c["mode"])&&void 0!==i?i:null);S(u&&l&&h,"argument-error"),this.apiKey=u,this.operation=h,this.code=l,this.continueUrl=null!==(s=c["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=c["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=c["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ut(e);try{return new lt(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ht{constructor(){this.providerId=ht.PROVIDER_ID}static credential(e,t){return Xe._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=lt.parseLink(t);return S(n,"argument-error"),Xe._fromEmailAndCode(e,n.code,n.tenantId)}}ht.PROVIDER_ID="password",ht.EMAIL_PASSWORD_SIGN_IN_METHOD="password",ht.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft extends dt{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}class pt extends ft{static credentialFromJSON(e){const t="string"===typeof e?JSON.parse(e):e;return S("providerId"in t&&"signInMethod"in t,"argument-error"),tt._fromParams(t)}credential(e){return this._credential(Object.assign(Object.assign({},e),{nonce:e.rawNonce}))}_credential(e){return S(e.idToken||e.accessToken,"argument-error"),tt._fromParams(Object.assign(Object.assign({},e),{providerId:this.providerId,signInMethod:this.providerId}))}static credentialFromResult(e){return pt.oauthCredentialFromTaggedObject(e)}static credentialFromError(e){return pt.oauthCredentialFromTaggedObject(e.customData||{})}static oauthCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n,oauthTokenSecret:i,pendingToken:r,nonce:s,providerId:o}=e;if(!n&&!i&&!t&&!r)return null;if(!o)return null;try{return new pt(o)._credential({idToken:t,accessToken:n,nonce:s,pendingToken:r})}catch(a){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt extends ft{constructor(){super("facebook.com")}static credential(e){return tt._fromParams({providerId:mt.PROVIDER_ID,signInMethod:mt.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return mt.credentialFromTaggedObject(e)}static credentialFromError(e){return mt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return mt.credential(e.oauthAccessToken)}catch(t){return null}}}mt.FACEBOOK_SIGN_IN_METHOD="facebook.com",mt.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class gt extends ft{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return tt._fromParams({providerId:gt.PROVIDER_ID,signInMethod:gt.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return gt.credentialFromTaggedObject(e)}static credentialFromError(e){return gt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return gt.credential(t,n)}catch(i){return null}}}gt.GOOGLE_SIGN_IN_METHOD="google.com",gt.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class vt extends ft{constructor(){super("github.com")}static credential(e){return tt._fromParams({providerId:vt.PROVIDER_ID,signInMethod:vt.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return vt.credentialFromTaggedObject(e)}static credentialFromError(e){return vt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return vt.credential(e.oauthAccessToken)}catch(t){return null}}}vt.GITHUB_SIGN_IN_METHOD="github.com",vt.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const yt="http://localhost";class bt extends Be{constructor(e,t){super(e,e),this.pendingToken=t}_getIdTokenResponse(e){const t=this.buildRequest();return Je(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Je(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Je(e,t)}toJSON(){return{signInMethod:this.signInMethod,providerId:this.providerId,pendingToken:this.pendingToken}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:i,pendingToken:r}=t;return n&&i&&r&&n===i?new bt(n,r):null}static _create(e,t){return new bt(e,t)}buildRequest(){return{requestUri:yt,returnSecureToken:!0,pendingToken:this.pendingToken}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt="saml.";class _t extends dt{constructor(e){S(e.startsWith(wt),"argument-error"),super(e)}static credentialFromResult(e){return _t.samlCredentialFromTaggedObject(e)}static credentialFromError(e){return _t.samlCredentialFromTaggedObject(e.customData||{})}static credentialFromJSON(e){const t=bt.fromJSON(e);return S(t,"argument-error"),t}static samlCredentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{pendingToken:t,providerId:n}=e;if(!t||!n)return null;try{return bt._create(n,t)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class It extends ft{constructor(){super("twitter.com")}static credential(e,t){return tt._fromParams({providerId:It.PROVIDER_ID,signInMethod:It.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return It.credentialFromTaggedObject(e)}static credentialFromError(e){return It.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return It.credential(t,n)}catch(i){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function St(e,t){return j(e,"POST","/v1/accounts:signUp",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */It.TWITTER_SIGN_IN_METHOD="twitter.com",It.PROVIDER_ID="twitter.com";class Tt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,i=!1){const r=await he._fromIdTokenResponse(e,n,i),s=Et(n),o=new Tt({user:r,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const i=Et(n);return new Tt({user:e,providerId:i,_tokenResponse:n,operationType:t})}}function Et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){var t;const n=Re(e);if(await n._initializationPromise,null===(t=n.currentUser)||void 0===t?void 0:t.isAnonymous)return new Tt({user:n.currentUser,providerId:null,operationType:"signIn"});const i=await St(n,{returnSecureToken:!0}),r=await Tt._fromIdTokenResponse(n,"signIn",i,!0);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct extends r.ZR{constructor(e,t,n,i){var r;super(t.code,t.message),this.operationType=n,this.user=i,Object.setPrototypeOf(this,Ct.prototype),this.customData={appName:e.name,tenantId:null!==(r=e.tenantId)&&void 0!==r?r:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,i){return new Ct(e,t,n,i)}}function xt(e,t,n,i){const r="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return r.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw Ct._fromErrorAndOperation(e,n,t,i);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function At(e){return new Set(e.map((({providerId:e})=>e)).filter((e=>!!e)))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ot(e,t){const n=(0,r.m9)(e);await Dt(!0,n,t);const{providerUserInfo:i}=await Z(n.auth,{idToken:await n.getIdToken(),deleteProvider:[t]}),s=At(i||[]);return n.providerData=n.providerData.filter((e=>s.has(e.providerId))),s.has("phone")||(n.phoneNumber=null),await n.auth._persistUserIfCurrent(n),n}async function Nt(e,t,n=!1){const i=await ee(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Tt._forOperation(e,"link",i)}async function Dt(e,t,n){await re(t);const i=At(t.providerData),r=!1===e?"provider-already-linked":"no-such-provider";S(i.has(n)===e,t.auth,r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(e,t,n=!1){const{auth:i}=e,r="reauthenticate";try{const s=await ee(e,xt(i,r,t,e),n);S(s.idToken,i,"internal-error");const o=X(s.idToken);S(o,i,"internal-error");const{sub:a}=o;return S(e.uid===a,i,"user-mismatch"),Tt._forOperation(e,r,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&y(i,"user-mismatch"),s}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Lt(e,t,n=!1){const i="signIn",r=await xt(e,i,t),s=await Tt._fromIdTokenResponse(e,i,r);return n||await e._updateCurrentUser(s.user),s}async function Pt(e,t){return Lt(Re(e),t)}async function $t(e,t){const n=(0,r.m9)(e);return await Dt(!1,n,t.providerId),Nt(n,t)}async function Mt(e,t){return Rt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Vt(e,t){return j(e,"POST","/v1/accounts:signInWithCustomToken",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ft(e,t){const n=Re(e),i=await Vt(n,{token:t,returnSecureToken:!0}),r=await Tt._fromIdTokenResponse(n,"signIn",i);return await n._updateCurrentUser(r.user),r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bt{constructor(e,t){this.factorId=e,this.uid=t.mfaEnrollmentId,this.enrollmentTime=new Date(t.enrolledAt).toUTCString(),this.displayName=t.displayName}static _fromServerResponse(e,t){return"phoneInfo"in t?Ut._fromServerResponse(e,t):"totpInfo"in t?jt._fromServerResponse(e,t):y(e,"internal-error")}}class Ut extends Bt{constructor(e){super("phone",e),this.phoneNumber=e.phoneInfo}static _fromServerResponse(e,t){return new Ut(t)}}class jt extends Bt{constructor(e){super("totp",e)}static _fromServerResponse(e,t){return new jt(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t,n){var i;S((null===(i=n.url)||void 0===i?void 0:i.length)>0,e,"invalid-continue-uri"),S("undefined"===typeof n.dynamicLinkDomain||n.dynamicLinkDomain.length>0,e,"invalid-dynamic-link-domain"),t.continueUrl=n.url,t.dynamicLinkDomain=n.dynamicLinkDomain,t.canHandleCodeInApp=n.handleCodeInApp,n.iOS&&(S(n.iOS.bundleId.length>0,e,"missing-ios-bundle-id"),t.iOSBundleId=n.iOS.bundleId),n.android&&(S(n.android.packageName.length>0,e,"missing-android-pkg-name"),t.androidInstallApp=n.android.installApp,t.androidMinimumVersionCode=n.android.minimumVersion,t.androidPackageName=n.android.packageName)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qt(e,t,n){const i=(0,r.m9)(e),s={requestType:"PASSWORD_RESET",email:t};n&&zt(i,s,n),await Ze(i,s)}async function Ht(e,t,n){await Ue((0,r.m9)(e),{oobCode:t,newPassword:n})}async function Gt(e,t){await ze((0,r.m9)(e),{oobCode:t})}async function Zt(e,t){const n=(0,r.m9)(e),i=await Ue(n,{oobCode:t}),s=i.requestType;switch(S(s,n,"internal-error"),s){case"EMAIL_SIGNIN":break;case"VERIFY_AND_CHANGE_EMAIL":S(i.newEmail,n,"internal-error");break;case"REVERT_SECOND_FACTOR_ADDITION":S(i.mfaInfo,n,"internal-error");default:S(i.email,n,"internal-error")}let o=null;return i.mfaInfo&&(o=Bt._fromServerResponse(Re(n),i.mfaInfo)),{data:{email:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.newEmail:i.email)||null,previousEmail:("VERIFY_AND_CHANGE_EMAIL"===i.requestType?i.email:i.newEmail)||null,multiFactorInfo:o},operation:s}}async function Kt(e,t){const{data:n}=await Zt((0,r.m9)(e),t);return n.email}async function Wt(e,t,n){const i=Re(e),r=await St(i,{returnSecureToken:!0,email:t,password:n}),s=await Tt._fromIdTokenResponse(i,"signIn",r);return await i._updateCurrentUser(s.user),s}function Qt(e,t,n){return Pt((0,r.m9)(e),ht.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yt(e,t,n){const i=(0,r.m9)(e),s={requestType:"EMAIL_SIGNIN",email:t};S(n.handleCodeInApp,i,"argument-error"),n&&zt(i,s,n),await Ke(i,s)}function Xt(e,t){const n=lt.parseLink(t);return"EMAIL_SIGNIN"===(null===n||void 0===n?void 0:n.operation)}async function Jt(e,t,n){const i=(0,r.m9)(e),s=ht.credentialWithLink(t,n||A());return S(s._tenantId===(i.tenantId||null),i,"tenant-id-mismatch"),Pt(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function en(e,t){return B(e,"POST","/v1/accounts:createAuthUri",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function tn(e,t){const n=O()?A():"http://localhost",i={identifier:t,continueUri:n},{signinMethods:s}=await en((0,r.m9)(e),i);return s||[]}async function nn(e,t){const n=(0,r.m9)(e),i=await e.getIdToken(),s={requestType:"VERIFY_EMAIL",idToken:i};t&&zt(n.auth,s,t);const{email:o}=await Ge(n.auth,s);o!==e.email&&await e.reload()}async function rn(e,t,n){const i=(0,r.m9)(e),s=await e.getIdToken(),o={requestType:"VERIFY_AND_CHANGE_EMAIL",idToken:s,newEmail:t};n&&zt(i.auth,o,n);const{email:a}=await We(i.auth,o);a!==e.email&&await e.reload()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function sn(e,t){return B(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function on(e,{displayName:t,photoURL:n}){if(void 0===t&&void 0===n)return;const i=(0,r.m9)(e),s=await i.getIdToken(),o={idToken:s,displayName:t,photoUrl:n,returnSecureToken:!0},a=await ee(i,sn(i.auth,o));i.displayName=a.displayName||null,i.photoURL=a.photoUrl||null;const c=i.providerData.find((({providerId:e})=>"password"===e));c&&(c.displayName=i.displayName,c.photoURL=i.photoURL),await i._updateTokensIfNecessary(a)}function an(e,t){return un((0,r.m9)(e),t,null)}function cn(e,t){return un((0,r.m9)(e),null,t)}async function un(e,t,n){const{auth:i}=e,r=await e.getIdToken(),s={idToken:r,returnSecureToken:!0};t&&(s.email=t),n&&(s.password=n);const o=await ee(e,je(i,s));await e._updateTokensIfNecessary(o,!0)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ln(e){var t,n;if(!e)return null;const{providerId:i}=e,r=e.rawUserInfo?JSON.parse(e.rawUserInfo):{},s=e.isNewUser||"identitytoolkit#SignupNewUserResponse"===e.kind;if(!i&&(null===e||void 0===e?void 0:e.idToken)){const i=null===(n=null===(t=X(e.idToken))||void 0===t?void 0:t.firebase)||void 0===n?void 0:n["sign_in_provider"];if(i){const e="anonymous"!==i&&"custom"!==i?i:null;return new hn(s,e)}}if(!i)return null;switch(i){case"facebook.com":return new fn(s,r);case"github.com":return new pn(s,r);case"google.com":return new mn(s,r);case"twitter.com":return new gn(s,r,e.screenName||null);case"custom":case"anonymous":return new hn(s,null);default:return new hn(s,i,r)}}class hn{constructor(e,t,n={}){this.isNewUser=e,this.providerId=t,this.profile=n}}class dn extends hn{constructor(e,t,n,i){super(e,t,n),this.username=i}}class fn extends hn{constructor(e,t){super(e,"facebook.com",t)}}class pn extends dn{constructor(e,t){super(e,"github.com",t,"string"===typeof(null===t||void 0===t?void 0:t.login)?null===t||void 0===t?void 0:t.login:null)}}class mn extends hn{constructor(e,t){super(e,"google.com",t)}}class gn extends dn{constructor(e,t,n){super(e,"twitter.com",t,n)}}function vn(e){const{user:t,_tokenResponse:n}=e;return t.isAnonymous&&!n?{providerId:null,isNewUser:!1,profile:null}:ln(n)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yn{constructor(e,t,n){this.type=e,this.credential=t,this.auth=n}static _fromIdtoken(e,t){return new yn("enroll",e,t)}static _fromMfaPendingCredential(e){return new yn("signin",e)}toJSON(){const e="enroll"===this.type?"idToken":"pendingCredential";return{multiFactorSession:{[e]:this.credential}}}static fromJSON(e){var t,n;if(null===e||void 0===e?void 0:e.multiFactorSession){if(null===(t=e.multiFactorSession)||void 0===t?void 0:t.pendingCredential)return yn._fromMfaPendingCredential(e.multiFactorSession.pendingCredential);if(null===(n=e.multiFactorSession)||void 0===n?void 0:n.idToken)return yn._fromIdtoken(e.multiFactorSession.idToken)}return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bn{constructor(e,t,n){this.session=e,this.hints=t,this.signInResolver=n}static _fromError(e,t){const n=Re(e),i=t.customData._serverResponse,r=(i.mfaInfo||[]).map((e=>Bt._fromServerResponse(n,e)));S(i.mfaPendingCredential,n,"internal-error");const s=yn._fromMfaPendingCredential(i.mfaPendingCredential);return new bn(s,r,(async e=>{const r=await e._process(n,s);delete i.mfaInfo,delete i.mfaPendingCredential;const o=Object.assign(Object.assign({},i),{idToken:r.idToken,refreshToken:r.refreshToken});switch(t.operationType){case"signIn":const e=await Tt._fromIdTokenResponse(n,t.operationType,o);return await n._updateCurrentUser(e.user),e;case"reauthenticate":return S(t.user,n,"internal-error"),Tt._forOperation(t.user,t.operationType,o);default:y(n,"internal-error")}}))}async resolveSignIn(e){const t=e;return this.signInResolver(t)}}function wn(e,t){var n;const i=(0,r.m9)(e),s=t;return S(t.customData.operationType,i,"argument-error"),S(null===(n=s.customData._serverResponse)||void 0===n?void 0:n.mfaPendingCredential,i,"argument-error"),bn._fromError(i,s)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _n(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function In(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function Sn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:start",F(e,t))}function Tn(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:finalize",F(e,t))}function En(e,t){return B(e,"POST","/v2/accounts/mfaEnrollment:withdraw",F(e,t))}class kn{constructor(e){this.user=e,this.enrolledFactors=[],e._onReload((t=>{t.mfaInfo&&(this.enrolledFactors=t.mfaInfo.map((t=>Bt._fromServerResponse(e.auth,t))))}))}static _fromUser(e){return new kn(e)}async getSession(){return yn._fromIdtoken(await this.user.getIdToken(),this.user.auth)}async enroll(e,t){const n=e,i=await this.getSession(),r=await ee(this.user,n._process(this.user.auth,i,t));return await this.user._updateTokensIfNecessary(r),this.user.reload()}async unenroll(e){const t="string"===typeof e?e:e.uid,n=await this.user.getIdToken();try{const e=await ee(this.user,En(this.user.auth,{idToken:n,mfaEnrollmentId:t}));this.enrolledFactors=this.enrolledFactors.filter((({uid:e})=>e!==t)),await this.user._updateTokensIfNecessary(e),await this.user.reload()}catch(i){throw i}}}const Cn=new WeakMap;function xn(e){const t=(0,r.m9)(e);return Cn.has(t)||Cn.set(t,kn._fromUser(t)),Cn.get(t)}const An="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class On{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(An,"1"),this.storage.removeItem(An),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nn(){const e=(0,r.z$)();return ye(e)||Te(e)}const Dn=1e3,Rn=10;class Ln extends On{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Nn()&&Ae(),this.fallbackToPolling=xe(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),i=this.localCache[t];n!==i&&e(t,i,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const i=this.storage.getItem(n);if(e.newValue!==i)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const i=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},r=this.storage.getItem(n);Ce()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Rn):i()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),Dn)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ln.type="LOCAL";const Pn=Ln;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $n extends On{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}$n.type="SESSION";const Mn=$n;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vn(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new Fn(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:i,data:r}=t.data,s=this.handlersMap[i];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:i});const o=Array.from(s).map((async e=>e(t.origin,r))),a=await Vn(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:i,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Bn(e="",t=10){let n="";for(let i=0;i<t;i++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Fn.receivers=[];class Un{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const i="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let r,s;return new Promise(((o,a)=>{const c=Bn("",20);i.port1.start();const u=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:i,onMessage(e){const t=e;if(t.data.eventId===c)switch(t.data.status){case"ack":clearTimeout(u),r=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(r),o(t.data.response);break;default:clearTimeout(u),clearTimeout(r),a(new Error("invalid_response"));break}}},this.handlers.add(s),i.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[i.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jn(){return window}function zn(e){jn().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qn(){return"undefined"!==typeof jn()["WorkerGlobalScope"]&&"function"===typeof jn()["importScripts"]}async function Hn(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Gn(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Zn(){return qn()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn="firebaseLocalStorageDb",Wn=1,Qn="firebaseLocalStorage",Yn="fbase_key";class Xn{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Jn(e,t){return e.transaction([Qn],t?"readwrite":"readonly").objectStore(Qn)}function ei(){const e=indexedDB.deleteDatabase(Kn);return new Xn(e).toPromise()}function ti(){const e=indexedDB.open(Kn,Wn);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Qn,{keyPath:Yn})}catch(i){n(i)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Qn)?t(n):(n.close(),await ei(),t(await ti()))}))}))}async function ni(e,t,n){const i=Jn(e,!0).put({[Yn]:t,value:n});return new Xn(i).toPromise()}async function ii(e,t){const n=Jn(e,!1).get(t),i=await new Xn(n).toPromise();return void 0===i?null:i.value}function ri(e,t){const n=Jn(e,!0).delete(t);return new Xn(n).toPromise()}const si=800,oi=3;class ai{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await ti()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>oi)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qn()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Fn._getInstance(Zn()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await Hn(),!this.activeServiceWorker)return;this.sender=new Un(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Gn()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await ti();return await ni(e,An,"1"),await ri(e,An),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>ni(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>ii(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>ri(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Jn(e,!1).getAll();return new Xn(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:i,value:r}of e)n.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(r)&&(this.notifyListeners(i,r),t.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!n.has(i)&&(this.notifyListeners(i,null),t.push(i));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const i of Array.from(n))i(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),si)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}ai.type="LOCAL";const ci=ai;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ui(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:start",F(e,t))}function li(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}function hi(e,t){return B(e,"POST","/v2/accounts/mfaSignIn:finalize",F(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function di(e){return(await B(e,"GET","/v1/recaptchaParams")).recaptchaSiteKey||""}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fi(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function pi(e){return new Promise(((t,n)=>{const i=document.createElement("script");i.setAttribute("src",e),i.onload=t,i.onerror=e=>{const t=b("internal-error");t.customData=e,n(t)},i.type="text/javascript",i.charset="UTF-8",fi().appendChild(i)}))}function mi(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gi=500,vi=6e4,yi=1e12;class bi{constructor(e){this.auth=e,this.counter=yi,this._widgets=new Map}render(e,t){const n=this.counter;return this._widgets.set(n,new wi(e,this.auth.name,t||{})),this.counter++,n}reset(e){var t;const n=e||yi;null===(t=this._widgets.get(n))||void 0===t||t.delete(),this._widgets.delete(n)}getResponse(e){var t;const n=e||yi;return(null===(t=this._widgets.get(n))||void 0===t?void 0:t.getResponse())||""}async execute(e){var t;const n=e||yi;return null===(t=this._widgets.get(n))||void 0===t||t.execute(),""}}class wi{constructor(e,t,n){this.params=n,this.timerId=null,this.deleted=!1,this.responseToken=null,this.clickHandler=()=>{this.execute()};const i="string"===typeof e?document.getElementById(e):e;S(i,"argument-error",{appName:t}),this.container=i,this.isVisible="invisible"!==this.params.size,this.isVisible?this.execute():this.container.addEventListener("click",this.clickHandler)}getResponse(){return this.checkIfDeleted(),this.responseToken}delete(){this.checkIfDeleted(),this.deleted=!0,this.timerId&&(clearTimeout(this.timerId),this.timerId=null),this.container.removeEventListener("click",this.clickHandler)}execute(){this.checkIfDeleted(),this.timerId||(this.timerId=window.setTimeout((()=>{this.responseToken=_i(50);const{callback:e,"expired-callback":t}=this.params;if(e)try{e(this.responseToken)}catch(n){}this.timerId=window.setTimeout((()=>{if(this.timerId=null,this.responseToken=null,t)try{t()}catch(n){}this.isVisible&&this.execute()}),vi)}),gi))}checkIfDeleted(){if(this.deleted)throw new Error("reCAPTCHA mock was already deleted!")}}function _i(e){const t=[],n="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let i=0;i<e;i++)t.push(n.charAt(Math.floor(Math.random()*n.length)));return t.join("")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ii=mi("rcb"),Si=new L(3e4,6e4),Ti="https://www.google.com/recaptcha/api.js?";class Ei{constructor(){var e;this.hostLanguage="",this.counter=0,this.librarySeparatelyLoaded=!!(null===(e=jn().grecaptcha)||void 0===e?void 0:e.render)}load(e,t=""){return S(ki(t),e,"argument-error"),this.shouldResolveImmediately(t)?Promise.resolve(jn().grecaptcha):new Promise(((n,i)=>{const s=jn().setTimeout((()=>{i(b(e,"network-request-failed"))}),Si.get());jn()[Ii]=()=>{jn().clearTimeout(s),delete jn()[Ii];const r=jn().grecaptcha;if(!r)return void i(b(e,"internal-error"));const o=r.render;r.render=(e,t)=>{const n=o(e,t);return this.counter++,n},this.hostLanguage=t,n(r)};const o=`${Ti}?${(0,r.xO)({onload:Ii,render:"explicit",hl:t})}`;pi(o).catch((()=>{clearTimeout(s),i(b(e,"internal-error"))}))}))}clearedOneInstance(){this.counter--}shouldResolveImmediately(e){var t;return!!(null===(t=jn().grecaptcha)||void 0===t?void 0:t.render)&&(e===this.hostLanguage||this.counter>0||this.librarySeparatelyLoaded)}}function ki(e){return e.length<=6&&/^\s*[a-zA-Z0-9\-]*\s*$/.test(e)}class Ci{async load(e){return new bi(e)}clearedOneInstance(){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xi="recaptcha",Ai={theme:"light",type:"image"};class Oi{constructor(e,t=Object.assign({},Ai),n){this.parameters=t,this.type=xi,this.destroyed=!1,this.widgetId=null,this.tokenChangeListeners=new Set,this.renderPromise=null,this.recaptcha=null,this.auth=Re(n),this.isInvisible="invisible"===this.parameters.size,S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment");const i="string"===typeof e?document.getElementById(e):e;S(i,this.auth,"argument-error"),this.container=i,this.parameters.callback=this.makeTokenCallback(this.parameters.callback),this._recaptchaLoader=this.auth.settings.appVerificationDisabledForTesting?new Ci:new Ei,this.validateStartingState()}async verify(){this.assertNotDestroyed();const e=await this.render(),t=this.getAssertedRecaptcha(),n=t.getResponse(e);return n||new Promise((n=>{const i=e=>{e&&(this.tokenChangeListeners.delete(i),n(e))};this.tokenChangeListeners.add(i),this.isInvisible&&t.execute(e)}))}render(){try{this.assertNotDestroyed()}catch(e){return Promise.reject(e)}return this.renderPromise||(this.renderPromise=this.makeRenderPromise().catch((e=>{throw this.renderPromise=null,e}))),this.renderPromise}_reset(){this.assertNotDestroyed(),null!==this.widgetId&&this.getAssertedRecaptcha().reset(this.widgetId)}clear(){this.assertNotDestroyed(),this.destroyed=!0,this._recaptchaLoader.clearedOneInstance(),this.isInvisible||this.container.childNodes.forEach((e=>{this.container.removeChild(e)}))}validateStartingState(){S(!this.parameters.sitekey,this.auth,"argument-error"),S(this.isInvisible||!this.container.hasChildNodes(),this.auth,"argument-error"),S("undefined"!==typeof document,this.auth,"operation-not-supported-in-this-environment")}makeTokenCallback(e){return t=>{if(this.tokenChangeListeners.forEach((e=>e(t))),"function"===typeof e)e(t);else if("string"===typeof e){const n=jn()[e];"function"===typeof n&&n(t)}}}assertNotDestroyed(){S(!this.destroyed,this.auth,"internal-error")}async makeRenderPromise(){if(await this.init(),!this.widgetId){let e=this.container;if(!this.isInvisible){const t=document.createElement("div");e.appendChild(t),e=t}this.widgetId=this.getAssertedRecaptcha().render(e,this.parameters)}return this.widgetId}async init(){S(O()&&!qn(),this.auth,"internal-error"),await Ni(),this.recaptcha=await this._recaptchaLoader.load(this.auth,this.auth.languageCode||void 0);const e=await di(this.auth);S(e,this.auth,"internal-error"),this.parameters.sitekey=e}getAssertedRecaptcha(){return S(this.recaptcha,this.auth,"internal-error"),this.recaptcha}}function Ni(){let e=null;return new Promise((t=>{"complete"!==document.readyState?(e=()=>t(),window.addEventListener("load",e)):t()})).catch((t=>{throw e&&window.removeEventListener("load",e),t}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,t){this.verificationId=e,this.onConfirmation=t}confirm(e){const t=at._fromVerification(this.verificationId,e);return this.onConfirmation(t)}}async function Ri(e,t,n){const i=Re(e),s=await $i(i,t,(0,r.m9)(n));return new Di(s,(e=>Pt(i,e)))}async function Li(e,t,n){const i=(0,r.m9)(e);await Dt(!1,i,"phone");const s=await $i(i.auth,t,(0,r.m9)(n));return new Di(s,(e=>$t(i,e)))}async function Pi(e,t,n){const i=(0,r.m9)(e),s=await $i(i.auth,t,(0,r.m9)(n));return new Di(s,(e=>Mt(i,e)))}async function $i(e,t,n){var i;const r=await n.verify();try{let s;if(S("string"===typeof r,e,"argument-error"),S(n.type===xi,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){S("enroll"===t.type,e,"internal-error");const n=await _n(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:r}});return n.phoneSessionInfo.sessionInfo}{S("signin"===t.type,e,"internal-error");const n=(null===(i=s.multiFactorHint)||void 0===i?void 0:i.uid)||s.multiFactorUid;S(n,e,"missing-multi-factor-info");const o=await ui(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:r}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await nt(e,{phoneNumber:s.phoneNumber,recaptchaToken:r});return t}}finally{n._reset()}}async function Mi(e,t){await Nt((0,r.m9)(e),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vi{constructor(e){this.providerId=Vi.PROVIDER_ID,this.auth=Re(e)}verifyPhoneNumber(e,t){return $i(this.auth,e,(0,r.m9)(t))}static credential(e,t){return at._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Vi.credentialFromTaggedObject(t)}static credentialFromError(e){return Vi.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?at._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Fi(e,t){return t?C(t):(S(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Vi.PROVIDER_ID="phone",Vi.PHONE_SIGN_IN_METHOD="phone";class Bi extends Be{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Je(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Je(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Je(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Ui(e){return Lt(e.auth,new Bi(e),e.bypassAuthState)}function ji(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),Rt(n,new Bi(e),e.bypassAuthState)}async function zi(e){const{auth:t,user:n}=e;return S(n,t,"internal-error"),Nt(n,new Bi(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(e,t,n,i,r=!1){this.auth=e,this.resolver=n,this.user=i,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:i,tenantId:r,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:r||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Ui;case"linkViaPopup":case"linkViaRedirect":return zi;case"reauthViaPopup":case"reauthViaRedirect":return ji;default:y(this.auth,"internal-error")}}resolve(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){E(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi=new L(2e3,1e4);async function Gi(e,t,n){const i=Re(e);_(e,t,dt);const r=Fi(i,n),s=new Wi(i,"signInViaPopup",t,r);return s.executeNotNull()}async function Zi(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,dt);const s=Fi(i.auth,n),o=new Wi(i.auth,"reauthViaPopup",t,s,i);return o.executeNotNull()}async function Ki(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,dt);const s=Fi(i.auth,n),o=new Wi(i.auth,"linkViaPopup",t,s,i);return o.executeNotNull()}class Wi extends qi{constructor(e,t,n,i,r){super(e,t,i,r),this.provider=n,this.authWindow=null,this.pollId=null,Wi.currentPopupAction&&Wi.currentPopupAction.cancel(),Wi.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return S(e,this.auth,"internal-error"),e}async onExecution(){E(1===this.filter.length,"Popup operations only handle one event");const e=Bn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(b(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(b(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Wi.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(b(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,Hi.get())};e()}}Wi.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Qi="pendingRedirect",Yi=new Map;class Xi extends qi{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=Yi.get(this.auth._key());if(!e){try{const t=await Ji(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}Yi.set(this.auth._key(),e)}return this.bypassAuthState||Yi.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function Ji(e,t){const n=rr(t),i=ir(e);if(!await i._isAvailable())return!1;const r="true"===await i._get(n);return await i._remove(n),r}async function er(e,t){return ir(e)._set(rr(t),"true")}function tr(){Yi.clear()}function nr(e,t){Yi.set(e._key(),t)}function ir(e){return C(e._redirectPersistence)}function rr(e){return pe(Qi,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sr(e,t,n){return or(e,t,n)}async function or(e,t,n){const i=Re(e);_(e,t,dt),await i._initializationPromise;const r=Fi(i,n);return await er(r,i),r._openRedirect(i,t,"signInViaRedirect")}function ar(e,t,n){return cr(e,t,n)}async function cr(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,dt),await i.auth._initializationPromise;const s=Fi(i.auth,n);await er(s,i.auth);const o=await fr(i);return s._openRedirect(i.auth,t,"reauthViaRedirect",o)}function ur(e,t,n){return lr(e,t,n)}async function lr(e,t,n){const i=(0,r.m9)(e);_(i.auth,t,dt),await i.auth._initializationPromise;const s=Fi(i.auth,n);await Dt(!1,i,t.providerId),await er(s,i.auth);const o=await fr(i);return s._openRedirect(i.auth,t,"linkViaRedirect",o)}async function hr(e,t){return await Re(e)._initializationPromise,dr(e,t,!1)}async function dr(e,t,n=!1){const i=Re(e),r=Fi(i,t),s=new Xi(i,r,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,t)),o}async function fr(e){const t=Bn(`${e.uid}:::`);return e._redirectEventId=t,await e.auth._setRedirectUser(e),await e.auth._persistUserIfCurrent(e),t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pr=6e5;class mr{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!yr(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!vr(e)){const i=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(b(this.auth,i))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=pr&&this.cachedEventUids.clear(),this.cachedEventUids.has(gr(e))}saveEventToCache(e){this.cachedEventUids.add(gr(e)),this.lastProcessedEventTime=Date.now()}}function gr(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function vr({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function yr(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return vr(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function br(e,t={}){return B(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_r=/^https?/;async function Ir(e){if(e.config.emulator)return;const{authorizedDomains:t}=await br(e);for(const i of t)try{if(Sr(i))return}catch(n){}y(e,"unauthorized-domain")}function Sr(e){const t=A(),{protocol:n,hostname:i}=new URL(t);if(e.startsWith("chrome-extension://")){const r=new URL(e);return""===r.hostname&&""===i?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&r.hostname===i}if(!_r.test(n))return!1;if(wr.test(e))return i===e;const r=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+r+"|"+r+")$","i");return s.test(i)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tr=new L(3e4,6e4);function Er(){const e=jn().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function kr(e){return new Promise(((t,n)=>{var i,r,s;function o(){Er(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{Er(),n(b(e,"network-request-failed"))},timeout:Tr.get()})}if(null===(r=null===(i=jn().gapi)||void 0===i?void 0:i.iframes)||void 0===r?void 0:r.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=jn().gapi)||void 0===s?void 0:s.load)){const t=mi("iframefcb");return jn()[t]=()=>{gapi.load?o():n(b(e,"network-request-failed"))},pi(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Cr=null,e}))}let Cr=null;function xr(e){return Cr=Cr||kr(e),Cr}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ar=new L(5e3,15e3),Or="__/auth/iframe",Nr="emulator/auth/iframe",Dr={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Rr=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Lr(e){const t=e.config;S(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?P(t,Nr):`https://${e.config.authDomain}/${Or}`,i={apiKey:t.apiKey,appName:e.name,v:s.SDK_VERSION},o=Rr.get(e.config.apiHost);o&&(i.eid=o);const a=e._getFrameworks();return a.length&&(i.fw=a.join(",")),`${n}?${(0,r.xO)(i).slice(1)}`}async function Pr(e){const t=await xr(e),n=jn().gapi;return S(n,e,"internal-error"),t.open({where:document.body,url:Lr(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Dr,dontclear:!0},(t=>new Promise((async(n,i)=>{await t.restyle({setHideOnLeave:!1});const r=b(e,"network-request-failed"),s=jn().setTimeout((()=>{i(r)}),Ar.get());function o(){jn().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{i(r)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $r={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Mr=500,Vr=600,Fr="_blank",Br="http://localhost";class Ur{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function jr(e,t,n,i=Mr,s=Vr){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let c="";const u=Object.assign(Object.assign({},$r),{width:i.toString(),height:s.toString(),top:o,left:a}),l=(0,r.z$)().toLowerCase();n&&(c=be(l)?Fr:n),ve(l)&&(t=t||Br,u.scrollbars="yes");const h=Object.entries(u).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(ke(l)&&"_self"!==c)return zr(t||"",c),new Ur(null);const d=window.open(t||"",c,h);S(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Ur(d)}function zr(e,t){const n=document.createElement("a");n.href=e,n.target=t;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qr="__/auth/handler",Hr="emulator/auth/handler";function Gr(e,t,n,i,o,a){S(e.config.authDomain,e,"auth-domain-config-required"),S(e.config.apiKey,e,"invalid-api-key");const c={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:i,v:s.SDK_VERSION,eventId:o};if(t instanceof dt){t.setDefaultLanguage(e.languageCode),c.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(c.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))c[e]=t}if(t instanceof ft){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(c.scopes=e.join(","))}e.tenantId&&(c.tid=e.tenantId);const u=c;for(const r of Object.keys(u))void 0===u[r]&&delete u[r];return`${Zr(e)}?${(0,r.xO)(u).slice(1)}`}function Zr({config:e}){return e.emulator?P(e,Hr):`https://${e.authDomain}/${qr}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kr="webStorageSupport";class Wr{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Mn,this._completeRedirectFn=dr,this._overrideRedirectResult=nr}async _openPopup(e,t,n,i){var r;E(null===(r=this.eventManagers[e._key()])||void 0===r?void 0:r.manager,"_initialize() not called before _openPopup()");const s=Gr(e,t,n,A(),i);return jr(e,s,Bn())}async _openRedirect(e,t,n,i){return await this._originValidation(e),zn(Gr(e,t,n,A(),i)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(E(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Pr(e),n=new mr(e);return t.register("authEvent",(t=>{S(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const i=n.onEvent(t.authEvent);return{status:i?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Kr,{type:Kr},(n=>{var i;const r=null===(i=null===n||void 0===n?void 0:n[0])||void 0===i?void 0:i[Kr];void 0!==r&&t(!!r),y(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Ir(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return xe()||ye()||Te()}}const Qr=Wr;class Yr{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return T("unexpected MultiFactorSessionType")}}}class Xr extends Yr{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xr(e)}_finalizeEnroll(e,t,n){return In(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return li(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Jr{constructor(){}static assertion(e){return Xr._fromCredential(e)}}Jr.FACTOR_ID="phone";class es{static assertionForEnrollment(e,t){return ts._fromSecret(e,t)}static assertionForSignIn(e,t){return ts._fromEnrollmentId(e,t)}static async generateSecret(e){const t=e;S("undefined"!==typeof t.auth,"internal-error");const n=await Sn(t.auth,{idToken:t.credential,totpEnrollmentInfo:{}});return ns._fromStartTotpMfaEnrollmentResponse(n,t.auth)}}es.FACTOR_ID="totp";class ts extends Yr{constructor(e,t,n){super("totp"),this.otp=e,this.enrollmentId=t,this.secret=n}static _fromSecret(e,t){return new ts(t,void 0,e)}static _fromEnrollmentId(e,t){return new ts(t,e)}async _finalizeEnroll(e,t,n){return S("undefined"!==typeof this.secret,e,"argument-error"),Tn(e,{idToken:t,displayName:n,totpVerificationInfo:this.secret._makeTotpVerificationInfo(this.otp)})}async _finalizeSignIn(e,t){S(void 0!==this.enrollmentId&&void 0!==this.otp,e,"argument-error");const n={verificationCode:this.otp};return hi(e,{mfaPendingCredential:t,mfaEnrollmentId:this.enrollmentId,totpVerificationInfo:n})}}class ns{constructor(e,t,n,i,r,s,o){this.sessionInfo=s,this.auth=o,this.secretKey=e,this.hashingAlgorithm=t,this.codeLength=n,this.codeIntervalSeconds=i,this.enrollmentCompletionDeadline=r}static _fromStartTotpMfaEnrollmentResponse(e,t){return new ns(e.totpSessionInfo.sharedSecretKey,e.totpSessionInfo.hashingAlgorithm,e.totpSessionInfo.verificationCodeLength,e.totpSessionInfo.periodSec,new Date(e.totpSessionInfo.finalizeEnrollmentTime).toUTCString(),e.totpSessionInfo.sessionInfo,t)}_makeTotpVerificationInfo(e){return{sessionInfo:this.sessionInfo,verificationCode:e}}generateQrCodeUrl(e,t){var n;let i=!1;return(is(e)||is(t))&&(i=!0),i&&(is(e)&&(e=(null===(n=this.auth.currentUser)||void 0===n?void 0:n.email)||"unknownuser"),is(t)&&(t=this.auth.name)),`otpauth://totp/${t}:${e}?secret=${this.secretKey}&issuer=${t}&algorithm=${this.hashingAlgorithm}&digits=${this.codeLength}`}}function is(e){return"undefined"===typeof e||0===(null===e||void 0===e?void 0:e.length)}var rs="@firebase/auth",ss="0.22.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class os{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{e((null===t||void 0===t?void 0:t.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){S(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function as(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function cs(e){(0,s._registerComponent)(new c.wA("auth",((t,{options:n})=>{const i=t.getProvider("app").getImmediate(),r=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=i.options;return((t,i)=>{S(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),S(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const r={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Oe(e)},a=new De(t,i,r);return x(a,n),a})(i,r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const i=e.getProvider("auth-internal");i.initialize()}))),(0,s._registerComponent)(new c.wA("auth-internal",(e=>{const t=Re(e.getProvider("auth").getImmediate());return(e=>new os(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,s.registerVersion)(rs,ss,as(e)),(0,s.registerVersion)(rs,ss,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const us=300;(0,r.Pz)("authIdTokenMaxAge");
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ls(){return window}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */cs("Browser");const hs=2e3;async function ds(e,t,n){var i;const{BuildInfo:r}=ls();E(t.sessionId,"AuthEvent did not contain a session ID");const s=await vs(t.sessionId),o={};return Te()?o["ibi"]=r.packageName:_e()?o["apn"]=r.packageName:y(e,"operation-not-supported-in-this-environment"),r.displayName&&(o["appDisplayName"]=r.displayName),o["sessionId"]=s,Gr(e,n,t.type,void 0,null!==(i=t.eventId)&&void 0!==i?i:void 0,o)}async function fs(e){const{BuildInfo:t}=ls(),n={};Te()?n.iosBundleId=t.packageName:_e()?n.androidPackageName=t.packageName:y(e,"operation-not-supported-in-this-environment"),await br(e,n)}function ps(e){const{cordova:t}=ls();return new Promise((n=>{t.plugins.browsertab.isAvailable((i=>{let r=null;i?t.plugins.browsertab.openUrl(e):r=t.InAppBrowser.open(e,Ee()?"_blank":"_system","location=yes"),n(r)}))}))}async function ms(e,t,n){const{cordova:i}=ls();let r=()=>{};try{await new Promise(((s,o)=>{let a=null;function c(){var e;s();const t=null===(e=i.plugins.browsertab)||void 0===e?void 0:e.close;"function"===typeof t&&t(),"function"===typeof(null===n||void 0===n?void 0:n.close)&&n.close()}function u(){a||(a=window.setTimeout((()=>{o(b(e,"redirect-cancelled-by-user"))}),hs))}function l(){"visible"===(null===document||void 0===document?void 0:document.visibilityState)&&u()}t.addPassiveListener(c),document.addEventListener("resume",u,!1),_e()&&document.addEventListener("visibilitychange",l,!1),r=()=>{t.removePassiveListener(c),document.removeEventListener("resume",u,!1),document.removeEventListener("visibilitychange",l,!1),a&&window.clearTimeout(a)}}))}finally{r()}}function gs(e){var t,n,i,r,s,o,a,c,u,l;const h=ls();S("function"===typeof(null===(t=null===h||void 0===h?void 0:h.universalLinks)||void 0===t?void 0:t.subscribe),e,"invalid-cordova-configuration",{missingPlugin:"cordova-universal-links-plugin-fix"}),S("undefined"!==typeof(null===(n=null===h||void 0===h?void 0:h.BuildInfo)||void 0===n?void 0:n.packageName),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-buildInfo"}),S("function"===typeof(null===(s=null===(r=null===(i=null===h||void 0===h?void 0:h.cordova)||void 0===i?void 0:i.plugins)||void 0===r?void 0:r.browsertab)||void 0===s?void 0:s.openUrl),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(c=null===(a=null===(o=null===h||void 0===h?void 0:h.cordova)||void 0===o?void 0:o.plugins)||void 0===a?void 0:a.browsertab)||void 0===c?void 0:c.isAvailable),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-browsertab"}),S("function"===typeof(null===(l=null===(u=null===h||void 0===h?void 0:h.cordova)||void 0===u?void 0:u.InAppBrowser)||void 0===l?void 0:l.open),e,"invalid-cordova-configuration",{missingPlugin:"cordova-plugin-inappbrowser"})}async function vs(e){const t=ys(e),n=await crypto.subtle.digest("SHA-256",t),i=Array.from(new Uint8Array(n));return i.map((e=>e.toString(16).padStart(2,"0"))).join("")}function ys(e){if(E(/[0-9a-zA-Z]+/.test(e),"Can only convert alpha-numeric strings"),"undefined"!==typeof TextEncoder)return(new TextEncoder).encode(e);const t=new ArrayBuffer(e.length),n=new Uint8Array(t);for(let i=0;i<e.length;i++)n[i]=e.charCodeAt(i);return n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=20;class ws extends mr{constructor(){super(...arguments),this.passiveListeners=new Set,this.initPromise=new Promise((e=>{this.resolveInialized=e}))}addPassiveListener(e){this.passiveListeners.add(e)}removePassiveListener(e){this.passiveListeners.delete(e)}resetRedirect(){this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1}onEvent(e){return this.resolveInialized(),this.passiveListeners.forEach((t=>t(e))),super.onEvent(e)}async initialized(){await this.initPromise}}function _s(e,t,n=null){return{type:t,eventId:n,urlResponse:null,sessionId:Es(),postBody:null,tenantId:e.tenantId,error:b(e,"no-auth-event")}}function Is(e,t){return ks()._set(Cs(e),t)}async function Ss(e){const t=await ks()._get(Cs(e));return t&&await ks()._remove(Cs(e)),t}function Ts(e,t){var n,i;const r=As(t);if(r.includes("/__/auth/callback")){const t=Os(r),s=t["firebaseError"]?xs(decodeURIComponent(t["firebaseError"])):null,o=null===(i=null===(n=null===s||void 0===s?void 0:s["code"])||void 0===n?void 0:n.split("auth/"))||void 0===i?void 0:i[1],a=o?b(o):null;return a?{type:e.type,eventId:e.eventId,tenantId:e.tenantId,error:a,urlResponse:null,sessionId:null,postBody:null}:{type:e.type,eventId:e.eventId,tenantId:e.tenantId,sessionId:e.sessionId,urlResponse:r,postBody:null}}return null}function Es(){const e=[],t="1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";for(let n=0;n<bs;n++){const n=Math.floor(Math.random()*t.length);e.push(t.charAt(n))}return e.join("")}function ks(){return C(Pn)}function Cs(e){return pe("authEvent",e.config.apiKey,e.name)}function xs(e){try{return JSON.parse(e)}catch(t){return null}}function As(e){const t=Os(e),n=t["link"]?decodeURIComponent(t["link"]):void 0,i=Os(n)["link"],r=t["deep_link_id"]?decodeURIComponent(t["deep_link_id"]):void 0,s=Os(r)["link"];return s||r||i||n||e}function Os(e){if(!(null===e||void 0===e?void 0:e.includes("?")))return{};const[t,...n]=e.split("?");return(0,r.zd)(n.join("?"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ns=500;class Ds{constructor(){this._redirectPersistence=Mn,this._shouldInitProactively=!0,this.eventManagers=new Map,this.originValidationPromises={},this._completeRedirectFn=dr,this._overrideRedirectResult=nr}async _initialize(e){const t=e._key();let n=this.eventManagers.get(t);return n||(n=new ws(e),this.eventManagers.set(t,n),this.attachCallbackListeners(e,n)),n}_openPopup(e){y(e,"operation-not-supported-in-this-environment")}async _openRedirect(e,t,n,i){gs(e);const r=await this._initialize(e);await r.initialized(),r.resetRedirect(),tr(),await this._originValidation(e);const s=_s(e,n,i);await Is(e,s);const o=await ds(e,s,t),a=await ps(o);return ms(e,r,a)}_isIframeWebStorageSupported(e,t){throw new Error("Method not implemented.")}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=fs(e)),this.originValidationPromises[t]}attachCallbackListeners(e,t){const{universalLinks:n,handleOpenURL:i,BuildInfo:r}=ls(),s=setTimeout((async()=>{await Ss(e),t.onEvent(Ls())}),Ns),o=async n=>{clearTimeout(s);const i=await Ss(e);let r=null;i&&(null===n||void 0===n?void 0:n["url"])&&(r=Ts(i,n["url"])),t.onEvent(r||Ls())};"undefined"!==typeof n&&"function"===typeof n.subscribe&&n.subscribe(null,o);const a=i,c=`${r.packageName.toLowerCase()}://`;ls().handleOpenURL=async e=>{if(e.toLowerCase().startsWith(c)&&o({url:e}),"function"===typeof a)try{a(e)}catch(t){console.error(t)}}}}const Rs=Ds;function Ls(){return{type:"unknown",eventId:null,sessionId:null,urlResponse:null,postBody:null,tenantId:null,error:b("no-auth-event")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ps(e,t){Re(e)._logFramework(t)}var $s="@firebase/auth-compat",Ms="0.3.7";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vs=1e3;function Fs(){var e;return(null===(e=null===self||void 0===self?void 0:self.location)||void 0===e?void 0:e.protocol)||null}function Bs(){return"http:"===Fs()||"https:"===Fs()}function Us(e=(0,r.z$)()){return!("file:"!==Fs()&&"ionic:"!==Fs()&&"capacitor:"!==Fs()||!e.toLowerCase().match(/iphone|ipad|ipod|android/))}function js(){return(0,r.b$)()||(0,r.UG)()}function zs(){return(0,r.w1)()&&11===(null===document||void 0===document?void 0:document.documentMode)}function qs(e=(0,r.z$)()){return/Edge\/\d+/.test(e)}function Hs(e=(0,r.z$)()){return zs()||qs(e)}function Gs(){try{const e=self.localStorage,t=Bn();if(e)return e["setItem"](t,"1"),e["removeItem"](t),!Hs()||(0,r.hl)()}catch(e){return Zs()&&(0,r.hl)()}return!1}function Zs(){return"undefined"!==typeof n.g&&"WorkerGlobalScope"in n.g&&"importScripts"in n.g}function Ks(){return(Bs()||(0,r.ru)()||Us())&&!js()&&Gs()&&!Zs()}function Ws(){return Us()&&"undefined"!==typeof document}async function Qs(){return!!Ws()&&new Promise((e=>{const t=setTimeout((()=>{e(!1)}),Vs);document.addEventListener("deviceready",(()=>{clearTimeout(t),e(!0)}))}))}function Ys(){return"undefined"!==typeof window?window:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xs={LOCAL:"local",NONE:"none",SESSION:"session"},Js=S,eo="persistence";function to(e,t){Js(Object.values(Xs).includes(t),e,"invalid-persistence-type"),(0,r.b$)()?Js(t!==Xs.SESSION,e,"unsupported-persistence-type"):(0,r.UG)()?Js(t===Xs.NONE,e,"unsupported-persistence-type"):Zs()?Js(t===Xs.NONE||t===Xs.LOCAL&&(0,r.hl)(),e,"unsupported-persistence-type"):Js(t===Xs.NONE||Gs(),e,"unsupported-persistence-type")}async function no(e){await e._initializationPromise;const t=ro(),n=pe(eo,e.config.apiKey,e.name);t&&t.setItem(n,e._getPersistence())}function io(e,t){const n=ro();if(!n)return[];const i=pe(eo,e,t),r=n.getItem(i);switch(r){case Xs.NONE:return[fe];case Xs.LOCAL:return[ci,Mn];case Xs.SESSION:return[Mn];default:return[]}}function ro(){var e;try{return(null===(e=Ys())||void 0===e?void 0:e.sessionStorage)||null}catch(t){return null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const so=S;class oo{constructor(){this.browserResolver=C(Qr),this.cordovaResolver=C(Rs),this.underlyingResolver=null,this._redirectPersistence=Mn,this._completeRedirectFn=dr,this._overrideRedirectResult=nr}async _initialize(e){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._initialize(e)}async _openPopup(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openPopup(e,t,n,i)}async _openRedirect(e,t,n,i){return await this.selectUnderlyingResolver(),this.assertedUnderlyingResolver._openRedirect(e,t,n,i)}_isIframeWebStorageSupported(e,t){this.assertedUnderlyingResolver._isIframeWebStorageSupported(e,t)}_originValidation(e){return this.assertedUnderlyingResolver._originValidation(e)}get _shouldInitProactively(){return Ws()||this.browserResolver._shouldInitProactively}get assertedUnderlyingResolver(){return so(this.underlyingResolver,"internal-error"),this.underlyingResolver}async selectUnderlyingResolver(){if(this.underlyingResolver)return;const e=await Qs();this.underlyingResolver=e?this.cordovaResolver:this.browserResolver}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ao(e){return e.unwrap()}function co(e){return e.wrapped()}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uo(e){return ho(e)}function lo(e,t){var n;const i=null===(n=t.customData)||void 0===n?void 0:n._tokenResponse;if("auth/multi-factor-auth-required"===(null===t||void 0===t?void 0:t.code)){const n=t;n.resolver=new mo(e,wn(e,t))}else if(i){const e=ho(t),n=t;e&&(n.credential=e,n.tenantId=i.tenantId||void 0,n.email=i.email||void 0,n.phoneNumber=i.phoneNumber||void 0)}}function ho(e){const{_tokenResponse:t}=e instanceof r.ZR?e.customData:e;if(!t)return null;if(!(e instanceof r.ZR)&&"temporaryProof"in t&&"phoneNumber"in t)return Vi.credentialFromResult(e);const n=t.providerId;if(!n||n===u.PASSWORD)return null;let i;switch(n){case u.GOOGLE:i=gt;break;case u.FACEBOOK:i=mt;break;case u.GITHUB:i=vt;break;case u.TWITTER:i=It;break;default:const{oauthIdToken:e,oauthAccessToken:r,oauthTokenSecret:s,pendingToken:o,nonce:a}=t;return r||s||e||o?o?n.startsWith("saml.")?bt._create(n,o):tt._fromParams({providerId:n,signInMethod:n,pendingToken:o,idToken:e,accessToken:r}):new pt(n).credential({idToken:e,accessToken:r,rawNonce:a}):null}return e instanceof r.ZR?i.credentialFromError(e):i.credentialFromResult(e)}function fo(e,t){return t.catch((t=>{throw t instanceof r.ZR&&lo(e,t),t})).then((e=>{const t=e.operationType,n=e.user;return{operationType:t,credential:uo(e),additionalUserInfo:vn(e),user:go.getOrCreate(n)}}))}async function po(e,t){const n=await t;return{verificationId:n.verificationId,confirm:t=>fo(e,n.confirm(t))}}class mo{constructor(e,t){this.resolver=t,this.auth=co(e)}get session(){return this.resolver.session}get hints(){return this.resolver.hints}resolveSignIn(e){return fo(ao(this.auth),this.resolver.resolveSignIn(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class go{constructor(e){this._delegate=e,this.multiFactor=xn(e)}static getOrCreate(e){return go.USER_MAP.has(e)||go.USER_MAP.set(e,new go(e)),go.USER_MAP.get(e)}delete(){return this._delegate.delete()}reload(){return this._delegate.reload()}toJSON(){return this._delegate.toJSON()}getIdTokenResult(e){return this._delegate.getIdTokenResult(e)}getIdToken(e){return this._delegate.getIdToken(e)}linkAndRetrieveDataWithCredential(e){return this.linkWithCredential(e)}async linkWithCredential(e){return fo(this.auth,$t(this._delegate,e))}async linkWithPhoneNumber(e,t){return po(this.auth,Li(this._delegate,e,t))}async linkWithPopup(e){return fo(this.auth,Ki(this._delegate,e,oo))}async linkWithRedirect(e){return await no(Re(this.auth)),ur(this._delegate,e,oo)}reauthenticateAndRetrieveDataWithCredential(e){return this.reauthenticateWithCredential(e)}async reauthenticateWithCredential(e){return fo(this.auth,Mt(this._delegate,e))}reauthenticateWithPhoneNumber(e,t){return po(this.auth,Pi(this._delegate,e,t))}reauthenticateWithPopup(e){return fo(this.auth,Zi(this._delegate,e,oo))}async reauthenticateWithRedirect(e){return await no(Re(this.auth)),ar(this._delegate,e,oo)}sendEmailVerification(e){return nn(this._delegate,e)}async unlink(e){return await Ot(this._delegate,e),this}updateEmail(e){return an(this._delegate,e)}updatePassword(e){return cn(this._delegate,e)}updatePhoneNumber(e){return Mi(this._delegate,e)}updateProfile(e){return on(this._delegate,e)}verifyBeforeUpdateEmail(e,t){return rn(this._delegate,e,t)}get emailVerified(){return this._delegate.emailVerified}get isAnonymous(){return this._delegate.isAnonymous}get metadata(){return this._delegate.metadata}get phoneNumber(){return this._delegate.phoneNumber}get providerData(){return this._delegate.providerData}get refreshToken(){return this._delegate.refreshToken}get tenantId(){return this._delegate.tenantId}get displayName(){return this._delegate.displayName}get email(){return this._delegate.email}get photoURL(){return this._delegate.photoURL}get providerId(){return this._delegate.providerId}get uid(){return this._delegate.uid}get auth(){return this._delegate.auth}}go.USER_MAP=new WeakMap;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const vo=S;class yo{constructor(e,t){if(this.app=e,t.isInitialized())return this._delegate=t.getImmediate(),void this.linkUnderlyingAuth();const{apiKey:n}=e.options;vo(n,"invalid-api-key",{appName:e.name}),vo(n,"invalid-api-key",{appName:e.name});const i="undefined"!==typeof window?oo:void 0;this._delegate=t.initialize({options:{persistence:wo(n,e.name),popupRedirectResolver:i}}),this._delegate._updateErrorMap(f),this.linkUnderlyingAuth()}get emulatorConfig(){return this._delegate.emulatorConfig}get currentUser(){return this._delegate.currentUser?go.getOrCreate(this._delegate.currentUser):null}get languageCode(){return this._delegate.languageCode}set languageCode(e){this._delegate.languageCode=e}get settings(){return this._delegate.settings}get tenantId(){return this._delegate.tenantId}set tenantId(e){this._delegate.tenantId=e}useDeviceLanguage(){this._delegate.useDeviceLanguage()}signOut(){return this._delegate.signOut()}useEmulator(e,t){Pe(this._delegate,e,t)}applyActionCode(e){return Gt(this._delegate,e)}checkActionCode(e){return Zt(this._delegate,e)}confirmPasswordReset(e,t){return Ht(this._delegate,e,t)}async createUserWithEmailAndPassword(e,t){return fo(this._delegate,Wt(this._delegate,e,t))}fetchProvidersForEmail(e){return this.fetchSignInMethodsForEmail(e)}fetchSignInMethodsForEmail(e){return tn(this._delegate,e)}isSignInWithEmailLink(e){return Xt(this._delegate,e)}async getRedirectResult(){vo(Ks(),this._delegate,"operation-not-supported-in-this-environment");const e=await hr(this._delegate,oo);return e?fo(this._delegate,Promise.resolve(e)):{credential:null,user:null}}addFrameworkForLogging(e){Ps(this._delegate,e)}onAuthStateChanged(e,t,n){const{next:i,error:r,complete:s}=bo(e,t,n);return this._delegate.onAuthStateChanged(i,r,s)}onIdTokenChanged(e,t,n){const{next:i,error:r,complete:s}=bo(e,t,n);return this._delegate.onIdTokenChanged(i,r,s)}sendSignInLinkToEmail(e,t){return Yt(this._delegate,e,t)}sendPasswordResetEmail(e,t){return qt(this._delegate,e,t||void 0)}async setPersistence(e){let t;switch(to(this._delegate,e),e){case Xs.SESSION:t=Mn;break;case Xs.LOCAL:const e=await C(ci)._isAvailable();t=e?ci:Pn;break;case Xs.NONE:t=fe;break;default:return y("argument-error",{appName:this._delegate.name})}return this._delegate.setPersistence(t)}signInAndRetrieveDataWithCredential(e){return this.signInWithCredential(e)}signInAnonymously(){return fo(this._delegate,kt(this._delegate))}signInWithCredential(e){return fo(this._delegate,Pt(this._delegate,e))}signInWithCustomToken(e){return fo(this._delegate,Ft(this._delegate,e))}signInWithEmailAndPassword(e,t){return fo(this._delegate,Qt(this._delegate,e,t))}signInWithEmailLink(e,t){return fo(this._delegate,Jt(this._delegate,e,t))}signInWithPhoneNumber(e,t){return po(this._delegate,Ri(this._delegate,e,t))}async signInWithPopup(e){return vo(Ks(),this._delegate,"operation-not-supported-in-this-environment"),fo(this._delegate,Gi(this._delegate,e,oo))}async signInWithRedirect(e){return vo(Ks(),this._delegate,"operation-not-supported-in-this-environment"),await no(this._delegate),sr(this._delegate,e,oo)}updateCurrentUser(e){return this._delegate.updateCurrentUser(e)}verifyPasswordResetCode(e){return Kt(this._delegate,e)}unwrap(){return this._delegate}_delete(){return this._delegate._delete()}linkUnderlyingAuth(){this._delegate.wrapped=()=>this}}function bo(e,t,n){let i=e;"function"!==typeof e&&({next:i,error:t,complete:n}=e);const r=i,s=e=>r(e&&go.getOrCreate(e));return{next:s,error:t,complete:n}}function wo(e,t){const n=io(e,t);if("undefined"===typeof self||n.includes(ci)||n.push(ci),"undefined"!==typeof window)for(const i of[Pn,Mn])n.includes(i)||n.push(i);return n.includes(fe)||n.push(fe),n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */yo.Persistence=Xs;class _o{constructor(){this.providerId="phone",this._delegate=new Vi(ao(i.Z.auth()))}static credential(e,t){return Vi.credential(e,t)}verifyPhoneNumber(e,t){return this._delegate.verifyPhoneNumber(e,t)}unwrap(){return this._delegate}}_o.PHONE_SIGN_IN_METHOD=Vi.PHONE_SIGN_IN_METHOD,_o.PROVIDER_ID=Vi.PROVIDER_ID;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Io=S;class So{constructor(e,t,n=i.Z.app()){var r;Io(null===(r=n.options)||void 0===r?void 0:r.apiKey,"invalid-api-key",{appName:n.name}),this._delegate=new Oi(e,t,n.auth()),this.type=this._delegate.type}clear(){this._delegate.clear()}render(){return this._delegate.render()}verify(){return this._delegate.verify()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const To="auth-compat";function Eo(e){e.INTERNAL.registerComponent(new c.wA(To,(e=>{const t=e.getProvider("app-compat").getImmediate(),n=e.getProvider("auth");return new yo(t,n)}),"PUBLIC").setServiceProps({ActionCodeInfo:{Operation:{EMAIL_SIGNIN:l.EMAIL_SIGNIN,PASSWORD_RESET:l.PASSWORD_RESET,RECOVER_EMAIL:l.RECOVER_EMAIL,REVERT_SECOND_FACTOR_ADDITION:l.REVERT_SECOND_FACTOR_ADDITION,VERIFY_AND_CHANGE_EMAIL:l.VERIFY_AND_CHANGE_EMAIL,VERIFY_EMAIL:l.VERIFY_EMAIL}},EmailAuthProvider:ht,FacebookAuthProvider:mt,GithubAuthProvider:vt,GoogleAuthProvider:gt,OAuthProvider:pt,SAMLAuthProvider:_t,PhoneAuthProvider:_o,PhoneMultiFactorGenerator:Jr,RecaptchaVerifier:So,TwitterAuthProvider:It,Auth:yo,AuthCredential:Be,Error:r.ZR}).setInstantiationMode("LAZY").setMultipleInstances(!1)),e.registerVersion($s,Ms)}Eo(i.Z)},9418:function(e,t,n){"use strict";var i,r=n(8180),s=n(5816),o=n(8463),a=n(3333),c=n(4444),u="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},l={},h=h||{},d=u||self;function f(){}function p(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function m(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,v)&&e[v]||(e[v]=++y)}var v="closure_uid_"+(1e9*Math.random()>>>0),y=0;function b(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var i=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,i),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function _(e,t,n){return _=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?b:w,_.apply(null,arguments)}function I(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function S(e,t){function n(){}n.prototype=t.prototype,e.X=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Wb=function(e,n,i){for(var r=Array(arguments.length-2),s=2;s<arguments.length;s++)r[s-2]=arguments[s];return t.prototype[n].apply(e,r)}}function T(){this.s=this.s,this.o=this.o}var E=0;T.prototype.s=!1,T.prototype.na=function(){this.s||(this.s=!0,this.M(),0==E)||g(this)},T.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const k=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1};function C(e){const t=e.length;if(0<t){const n=Array(t);for(let i=0;i<t;i++)n[i]=e[i];return n}return[]}function x(e,t){for(let n=1;n<arguments.length;n++){const t=arguments[n];if(p(t)){const n=e.length||0,i=t.length||0;e.length=n+i;for(let r=0;r<i;r++)e[n+r]=t[r]}else e.push(t)}}function A(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}A.prototype.h=function(){this.defaultPrevented=!0};var O=function(){if(!d.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{d.addEventListener("test",f,t),d.removeEventListener("test",f,t)}catch(n){}return e}();function N(e){return/^[\s\xa0]*$/.test(e)}var D=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function R(e,t){return e<t?-1:e>t?1:0}function L(){var e=d.navigator;return e&&(e=e.userAgent)?e:""}function P(e){return-1!=L().indexOf(e)}function $(e){return $[" "](e),e}function M(e){var t=Q;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}$[" "]=f;var V,F=P("Opera"),B=P("Trident")||P("MSIE"),U=P("Edge"),j=U||B,z=P("Gecko")&&!(-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge"))&&!(P("Trident")||P("MSIE"))&&!P("Edge"),q=-1!=L().toLowerCase().indexOf("webkit")&&!P("Edge");function H(){var e=d.document;return e?e.documentMode:void 0}e:{var G="",Z=function(){var e=L();return z?/rv:([^\);]+)(\)|;)/.exec(e):U?/Edge\/([\d\.]+)/.exec(e):B?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):q?/WebKit\/(\S+)/.exec(e):F?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Z&&(G=Z?Z[1]:""),B){var K=H();if(null!=K&&K>parseFloat(G)){V=String(K);break e}}V=G}var W,Q={};function Y(){return M((function(){let e=0;const t=D(String(V)).split("."),n=D("9").split("."),i=Math.max(t.length,n.length);for(let o=0;0==e&&o<i;o++){var r=t[o]||"",s=n[o]||"";do{if(r=/(\d*)(\D*)(.*)/.exec(r)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==r[0].length&&0==s[0].length)break;e=R(0==r[1].length?0:parseInt(r[1],10),0==s[1].length?0:parseInt(s[1],10))||R(0==r[2].length,0==s[2].length)||R(r[2],s[2]),r=r[3],s=s[3]}while(0==e)}return 0<=e}))}if(d.document&&B){var X=H();W=X||(parseInt(V,10)||void 0)}else W=void 0;var J=W;function ee(e,t){if(A.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,i=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(z){e:{try{$(t.nodeName);var r=!0;break e}catch(s){}r=!1}r||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,i?(this.clientX=void 0!==i.clientX?i.clientX:i.pageX,this.clientY=void 0!==i.clientY?i.clientY:i.pageY,this.screenX=i.screenX||0,this.screenY=i.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:te[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&ee.X.h.call(this)}}S(ee,A);var te={2:"touch",3:"pen",4:"mouse"};ee.prototype.h=function(){ee.X.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ne="closure_listenable_"+(1e6*Math.random()|0),ie=0;function re(e,t,n,i,r){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!i,this.ha=r,this.key=++ie,this.ba=this.ea=!1}function se(e){e.ba=!0,e.listener=null,e.proxy=null,e.src=null,e.ha=null}function oe(e,t,n){for(const i in e)t.call(n,e[i],i,e)}function ae(e){const t={};for(const n in e)t[n]=e[n];return t}const ce="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ue(e,t){let n,i;for(let r=1;r<arguments.length;r++){for(n in i=arguments[r],i)e[n]=i[n];for(let t=0;t<ce.length;t++)n=ce[t],Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n])}}function le(e){this.src=e,this.g={},this.h=0}function he(e,t){var n=t.type;if(n in e.g){var i,r=e.g[n],s=k(r,t);(i=0<=s)&&Array.prototype.splice.call(r,s,1),i&&(se(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function de(e,t,n,i){for(var r=0;r<e.length;++r){var s=e[r];if(!s.ba&&s.listener==t&&s.capture==!!n&&s.ha==i)return r}return-1}le.prototype.add=function(e,t,n,i,r){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=de(e,t,i,r);return-1<o?(t=e[o],n||(t.ea=!1)):(t=new re(t,this.src,s,!!i,r),t.ea=n,e.push(t)),t};var fe="closure_lm_"+(1e6*Math.random()|0),pe={};function me(e,t,n,i,r){if(i&&i.once)return ye(e,t,n,i,r);if(Array.isArray(t)){for(var s=0;s<t.length;s++)me(e,t[s],n,i,r);return null}return n=Ee(n),e&&e[ne]?e.N(t,n,m(i)?!!i.capture:!!i,r):ge(e,t,n,!1,i,r)}function ge(e,t,n,i,r,s){if(!t)throw Error("Invalid event type");var o=m(r)?!!r.capture:!!r,a=Se(e);if(a||(e[fe]=a=new le(e)),n=a.add(t,n,i,o,s),n.proxy)return n;if(i=ve(),n.proxy=i,i.src=e,i.listener=n,e.addEventListener)O||(r=o),void 0===r&&(r=!1),e.addEventListener(t.toString(),i,r);else if(e.attachEvent)e.attachEvent(_e(t.toString()),i);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(i)}return n}function ve(){function e(n){return t.call(e.src,e.listener,n)}const t=Ie;return e}function ye(e,t,n,i,r){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ye(e,t[s],n,i,r);return null}return n=Ee(n),e&&e[ne]?e.O(t,n,m(i)?!!i.capture:!!i,r):ge(e,t,n,!0,i,r)}function be(e,t,n,i,r){if(Array.isArray(t))for(var s=0;s<t.length;s++)be(e,t[s],n,i,r);else i=m(i)?!!i.capture:!!i,n=Ee(n),e&&e[ne]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=de(s,n,i,r),-1<n&&(se(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Se(e))&&(t=e.g[t.toString()],e=-1,t&&(e=de(t,n,i,r)),(n=-1<e?t[e]:null)&&we(n))}function we(e){if("number"!==typeof e&&e&&!e.ba){var t=e.src;if(t&&t[ne])he(t.i,e);else{var n=e.type,i=e.proxy;t.removeEventListener?t.removeEventListener(n,i,e.capture):t.detachEvent?t.detachEvent(_e(n),i):t.addListener&&t.removeListener&&t.removeListener(i),(n=Se(t))?(he(n,e),0==n.h&&(n.src=null,t[fe]=null)):se(e)}}}function _e(e){return e in pe?pe[e]:pe[e]="on"+e}function Ie(e,t){if(e.ba)e=!0;else{t=new ee(t,this);var n=e.listener,i=e.ha||e.src;e.ea&&we(e),e=n.call(i,t)}return e}function Se(e){return e=e[fe],e instanceof le?e:null}var Te="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ee(e){return"function"===typeof e?e:(e[Te]||(e[Te]=function(t){return e.handleEvent(t)}),e[Te])}function ke(){T.call(this),this.i=new le(this),this.P=this,this.I=null}function Ce(e,t){var n,i=e.I;if(i)for(n=[];i;i=i.I)n.push(i);if(e=e.P,i=t.type||t,"string"===typeof t)t=new A(t,e);else if(t instanceof A)t.target=t.target||e;else{var r=t;t=new A(i,e),ue(t,r)}if(r=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];r=xe(o,i,!0,t)&&r}if(o=t.g=e,r=xe(o,i,!0,t)&&r,r=xe(o,i,!1,t)&&r,n)for(s=0;s<n.length;s++)o=t.g=n[s],r=xe(o,i,!1,t)&&r}function xe(e,t,n,i){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var r=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ba&&o.capture==n){var a=o.listener,c=o.ha||o.src;o.ea&&he(e.i,o),r=!1!==a.call(c,i)&&r}}return r&&!i.defaultPrevented}S(ke,T),ke.prototype[ne]=!0,ke.prototype.removeEventListener=function(e,t,n,i){be(this,e,t,n,i)},ke.prototype.M=function(){if(ke.X.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],i=0;i<n.length;i++)se(n[i]);delete t.g[e],t.h--}}this.I=null},ke.prototype.N=function(e,t,n,i){return this.i.add(String(e),t,!1,n,i)},ke.prototype.O=function(e,t,n,i){return this.i.add(String(e),t,!0,n,i)};var Ae=d.JSON.stringify;function Oe(){var e=Fe;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class Ne{constructor(){this.h=this.g=null}add(e,t){const n=Re.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var De,Re=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new Le),(e=>e.reset()));class Le{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Pe(e){d.setTimeout((()=>{throw e}),0)}function $e(e,t){De||Me(),Ve||(De(),Ve=!0),Fe.add(e,t)}function Me(){var e=d.Promise.resolve(void 0);De=function(){e.then(Be)}}var Ve=!1,Fe=new Ne;function Be(){for(var e;e=Oe();){try{e.h.call(e.g)}catch(n){Pe(n)}var t=Re;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Ve=!1}function Ue(e,t){ke.call(this),this.h=e||1,this.g=t||d,this.j=_(this.lb,this),this.l=Date.now()}function je(e){e.ca=!1,e.R&&(e.g.clearTimeout(e.R),e.R=null)}function ze(e,t,n){if("function"===typeof e)n&&(e=_(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=_(e.handleEvent,e)}return 2147483647<Number(t)?-1:d.setTimeout(e,t||0)}function qe(e){e.g=ze((()=>{e.g=null,e.i&&(e.i=!1,qe(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}S(Ue,ke),i=Ue.prototype,i.ca=!1,i.R=null,i.lb=function(){if(this.ca){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.R=this.g.setTimeout(this.j,this.h-e):(this.R&&(this.g.clearTimeout(this.R),this.R=null),Ce(this,"tick"),this.ca&&(je(this),this.start()))}},i.start=function(){this.ca=!0,this.R||(this.R=this.g.setTimeout(this.j,this.h),this.l=Date.now())},i.M=function(){Ue.X.M.call(this),je(this),delete this.g};class He extends T{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:qe(this)}M(){super.M(),this.g&&(d.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ge(e){T.call(this),this.h=e,this.g={}}S(Ge,T);var Ze=[];function Ke(e,t,n,i){Array.isArray(n)||(n&&(Ze[0]=n.toString()),n=Ze);for(var r=0;r<n.length;r++){var s=me(t,n[r],i||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function We(e){oe(e.g,(function(e,t){this.g.hasOwnProperty(t)&&we(e)}),e),e.g={}}function Qe(){this.g=!0}function Ye(e,t,n,i,r,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+i+") [attempt "+r+"]: "+t+"\n"+n+"\n"+o}))}function Xe(e,t,n,i,r,s,o){e.info((function(){return"XMLHTTP RESP ("+i+") [ attempt "+r+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function Je(e,t,n,i){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+tt(e,n)+(i?" "+i:"")}))}function et(e,t){e.info((function(){return"TIMEOUT: "+t}))}function tt(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var i=n[e];if(!(2>i.length)){var r=i[1];if(Array.isArray(r)&&!(1>r.length)){var s=r[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<r.length;o++)r[o]=""}}}return Ae(n)}catch(a){return t}}Ge.prototype.M=function(){Ge.X.M.call(this),We(this)},Ge.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},Qe.prototype.Aa=function(){this.g=!1},Qe.prototype.info=function(){};var nt={},it=null;function rt(){return it=it||new ke}function st(e){A.call(this,nt.Pa,e)}function ot(e){const t=rt();Ce(t,new st(t))}function at(e,t){A.call(this,nt.STAT_EVENT,e),this.stat=t}function ct(e){const t=rt();Ce(t,new at(t,e))}function ut(e,t){A.call(this,nt.Qa,e),this.size=t}function lt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return d.setTimeout((function(){e()}),t)}nt.Pa="serverreachability",S(st,A),nt.STAT_EVENT="statevent",S(at,A),nt.Qa="timingevent",S(ut,A);var ht={NO_ERROR:0,mb:1,zb:2,yb:3,tb:4,xb:5,Ab:6,Ma:7,TIMEOUT:8,Db:9},dt={rb:"complete",Nb:"success",Na:"error",Ma:"abort",Fb:"ready",Gb:"readystatechange",TIMEOUT:"timeout",Bb:"incrementaldata",Eb:"progress",ub:"downloadprogress",Vb:"uploadprogress"};function ft(){}function pt(e){return e.h||(e.h=e.i())}function mt(){}ft.prototype.h=null;var gt,vt={OPEN:"a",qb:"b",Na:"c",Cb:"d"};function yt(){A.call(this,"d")}function bt(){A.call(this,"c")}function wt(){}function _t(e,t,n,i){this.l=e,this.j=t,this.m=n,this.U=i||1,this.S=new Ge(this),this.O=St,e=j?125:void 0,this.T=new Ue(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.V=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.Y=-1,this.I=!1,this.N=0,this.L=null,this.$=this.J=this.Z=this.P=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}S(yt,A),S(bt,A),S(wt,ft),wt.prototype.g=function(){return new XMLHttpRequest},wt.prototype.i=function(){return{}},gt=new wt;var St=45e3,Tt={},Et={};function kt(e,t,n){e.K=1,e.v=Kt(zt(t)),e.s=n,e.P=!0,Ct(e,null)}function Ct(e,t){e.F=Date.now(),Nt(e),e.A=zt(e.v);var n=e.A,i=e.U;Array.isArray(i)||(i=[String(i)]),cn(n.i,"t",i),e.C=0,n=e.l.H,e.h=new It,e.g=di(e.l,n?t:null,!e.s),0<e.N&&(e.L=new He(_(e.La,e,e.g),e.N)),Ke(e.S,e.g,"readystatechange",e.ib),t=e.H?ae(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.da(e.A,e.u,e.s,t)):(e.u="GET",e.g.da(e.A,e.u,null,t)),ot(),Ye(e.j,e.u,e.A,e.m,e.U,e.s)}function xt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Da)}function At(e,t,n){let i,r=!0;for(;!e.I&&e.C<n.length;){if(i=Ot(e,n),i==Et){4==t&&(e.o=4,ct(14),r=!1),Je(e.j,e.m,null,"[Incomplete Response]");break}if(i==Tt){e.o=4,ct(15),Je(e.j,e.m,n,"[Invalid Chunk]"),r=!1;break}Je(e.j,e.m,i,null),$t(e,i)}xt(e)&&i!=Et&&i!=Tt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,ct(16),r=!1),e.i=e.i&&r,r?0<n.length&&!e.$&&(e.$=!0,t=e.l,t.g==e&&t.$&&!t.K&&(t.j.info("Great, no buffering proxy detected. Bytes received: "+n.length),ri(t),t.K=!0,ct(11))):(Je(e.j,e.m,n,"[Invalid Chunked Response]"),Pt(e),Lt(e))}function Ot(e,t){var n=e.C,i=t.indexOf("\n",n);return-1==i?Et:(n=Number(t.substring(n,i)),isNaN(n)?Tt:(i+=1,i+n>t.length?Et:(t=t.substr(i,n),e.C=i+n,t)))}function Nt(e){e.V=Date.now()+e.O,Dt(e,e.O)}function Dt(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=lt(_(e.gb,e),t)}function Rt(e){e.B&&(d.clearTimeout(e.B),e.B=null)}function Lt(e){0==e.l.G||e.I||ai(e.l,e)}function Pt(e){Rt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,je(e.T),We(e.S),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function $t(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||gn(n.h,e)))if(!e.J&&gn(n.h,e)&&3==n.G){try{var i=n.Fa.g.parse(t)}catch(u){i=null}if(Array.isArray(i)&&3==i.length){var r=i;if(0==r[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;oi(n),Wn(n)}ii(n),ct(18)}}else n.Ba=r[1],0<n.Ba-n.T&&37500>r[2]&&n.L&&0==n.A&&!n.v&&(n.v=lt(_(n.cb,n),6e3));if(1>=mn(n.h)&&n.ja){try{n.ja()}catch(u){}n.ja=void 0}}else ui(n,11)}else if((e.J||n.g==e)&&oi(n),!N(t))for(r=n.Fa.g.parse(t),t=0;t<r.length;t++){let u=r[t];if(n.T=u[0],u=u[1],2==n.G)if("c"==u[0]){n.I=u[1],n.ka=u[2];const t=u[3];null!=t&&(n.ma=t,n.j.info("VER="+n.ma));const r=u[4];null!=r&&(n.Ca=r,n.j.info("SVER="+n.Ca));const l=u[5];null!=l&&"number"===typeof l&&0<l&&(i=1.5*l,n.J=i,n.j.info("backChannelRequestTimeoutMs_="+i)),i=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=i.h;s.g||-1==e.indexOf("spdy")&&-1==e.indexOf("quic")&&-1==e.indexOf("h2")||(s.j=s.l,s.g=new Set,s.h&&(vn(s,s.h),s.h=null))}if(i.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(i.za=e,Zt(i.F,i.D,e))}}n.G=3,n.l&&n.l.xa(),n.$&&(n.P=Date.now()-e.F,n.j.info("Handshake RTT: "+n.P+"ms")),i=n;var o=e;if(i.sa=hi(i,i.H?i.ka:null,i.V),o.J){yn(i.h,o);var a=o,c=i.J;c&&a.setTimeout(c),a.B&&(Rt(a),Nt(a)),i.g=o}else ni(i);0<n.i.length&&Yn(n)}else"stop"!=u[0]&&"close"!=u[0]||ui(n,7);else 3==n.G&&("stop"==u[0]||"close"==u[0]?"stop"==u[0]?ui(n,7):Kn(n):"noop"!=u[0]&&n.l&&n.l.wa(u),n.A=0)}ot(4)}catch(u){}}function Mt(e){if(e.W&&"function"==typeof e.W)return e.W();if("undefined"!==typeof Map&&e instanceof Map||"undefined"!==typeof Set&&e instanceof Set)return Array.from(e.values());if("string"===typeof e)return e.split("");if(p(e)){for(var t=[],n=e.length,i=0;i<n;i++)t.push(e[i]);return t}for(i in t=[],n=0,e)t[n++]=e[i];return t}function Vt(e){if(e.oa&&"function"==typeof e.oa)return e.oa();if(!e.W||"function"!=typeof e.W){if("undefined"!==typeof Map&&e instanceof Map)return Array.from(e.keys());if(!("undefined"!==typeof Set&&e instanceof Set)){if(p(e)||"string"===typeof e){var t=[];e=e.length;for(var n=0;n<e;n++)t.push(n);return t}t=[],n=0;for(const i in e)t[n++]=i;return t}}}function Ft(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(p(e)||"string"===typeof e)Array.prototype.forEach.call(e,t,void 0);else for(var n=Vt(e),i=Mt(e),r=i.length,s=0;s<r;s++)t.call(void 0,i[s],n&&n[s],e)}i=_t.prototype,i.setTimeout=function(e){this.O=e},i.ib=function(e){e=e.target;const t=this.L;t&&3==jn(e)?t.l():this.La(e)},i.La=function(e){try{if(e==this.g)e:{const l=jn(this.g);var t=this.g.Ea();const h=this.g.aa();if(!(3>l)&&(3!=l||j||this.g&&(this.h.h||this.g.fa()||zn(this.g)))){this.I||4!=l||7==t||ot(8==t||0>=h?3:2),Rt(this);var n=this.g.aa();this.Y=n;t:if(xt(this)){var i=zn(this.g);e="";var r=i.length,s=4==jn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Pt(this),Lt(this);var o="";break t}this.h.i=new d.TextDecoder}for(t=0;t<r;t++)this.h.h=!0,e+=this.h.i.decode(i[t],{stream:s&&t==r-1});i.splice(0,r),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.fa();if(this.i=200==n,Xe(this.j,this.u,this.A,this.m,this.U,l,n),this.i){if(this.Z&&!this.J){t:{if(this.g){var a,c=this.g;if((a=c.g?c.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!N(a)){var u=a;break t}}u=null}if(!(n=u)){this.i=!1,this.o=3,ct(12),Pt(this),Lt(this);break e}Je(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,$t(this,n)}this.P?(At(this,l,o),j&&this.i&&3==l&&(Ke(this.S,this.T,"tick",this.hb),this.T.start())):(Je(this.j,this.m,o,null),$t(this,o)),4==l&&Pt(this),this.i&&!this.I&&(4==l?ai(this.l,this):(this.i=!1,Nt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,ct(12)):(this.o=0,ct(13)),Pt(this),Lt(this)}}}catch(l){}},i.hb=function(){if(this.g){var e=jn(this.g),t=this.g.fa();this.C<t.length&&(Rt(this),At(this,e,t),this.i&&4!=e&&Nt(this))}},i.cancel=function(){this.I=!0,Pt(this)},i.gb=function(){this.B=null;const e=Date.now();0<=e-this.V?(et(this.j,this.A),2!=this.K&&(ot(),ct(17)),Pt(this),this.o=2,Lt(this)):Dt(this,this.V-e)};var Bt=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Ut(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var i=e[n].indexOf("="),r=null;if(0<=i){var s=e[n].substring(0,i);r=e[n].substring(i+1)}else s=e[n];t(s,r?decodeURIComponent(r.replace(/\+/g," ")):"")}}}function jt(e,t){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,e instanceof jt){this.h=void 0!==t?t:e.h,qt(this,e.j),this.s=e.s,this.g=e.g,Ht(this,e.m),this.l=e.l,t=e.i;var n=new rn;n.i=t.i,t.g&&(n.g=new Map(t.g),n.h=t.h),Gt(this,n),this.o=e.o}else e&&(n=String(e).match(Bt))?(this.h=!!t,qt(this,n[1]||"",!0),this.s=Wt(n[2]||""),this.g=Wt(n[3]||"",!0),Ht(this,n[4]),this.l=Wt(n[5]||"",!0),Gt(this,n[6]||"",!0),this.o=Wt(n[7]||"")):(this.h=!!t,this.i=new rn(null,this.h))}function zt(e){return new jt(e)}function qt(e,t,n){e.j=n?Wt(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Ht(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Gt(e,t,n){t instanceof rn?(e.i=t,ln(e.i,e.h)):(n||(t=Qt(t,tn)),e.i=new rn(t,e.h))}function Zt(e,t,n){e.i.set(t,n)}function Kt(e){return Zt(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function Wt(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function Qt(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,Yt),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function Yt(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}jt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(Qt(t,Xt,!0),":");var n=this.g;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(Qt(t,Xt,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.g&&"/"!=n.charAt(0)&&e.push("/"),e.push(Qt(n,"/"==n.charAt(0)?en:Jt,!0))),(n=this.i.toString())&&e.push("?",n),(n=this.o)&&e.push("#",Qt(n,nn)),e.join("")};var Xt=/[#\/\?@]/g,Jt=/[#\?:]/g,en=/[#\?]/g,tn=/[#\?@]/g,nn=/#/g;function rn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function sn(e){e.g||(e.g=new Map,e.h=0,e.i&&Ut(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function on(e,t){sn(e),t=un(e,t),e.g.has(t)&&(e.i=null,e.h-=e.g.get(t).length,e.g.delete(t))}function an(e,t){return sn(e),t=un(e,t),e.g.has(t)}function cn(e,t,n){on(e,t),0<n.length&&(e.i=null,e.g.set(un(e,t),C(n)),e.h+=n.length)}function un(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function ln(e,t){t&&!e.j&&(sn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(on(this,t),cn(this,n,e))}),e)),e.j=t}i=rn.prototype,i.add=function(e,t){sn(this),this.i=null,e=un(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},i.forEach=function(e,t){sn(this),this.g.forEach((function(n,i){n.forEach((function(n){e.call(t,n,i,this)}),this)}),this)},i.oa=function(){sn(this);const e=Array.from(this.g.values()),t=Array.from(this.g.keys()),n=[];for(let i=0;i<t.length;i++){const r=e[i];for(let e=0;e<r.length;e++)n.push(t[i])}return n},i.W=function(e){sn(this);let t=[];if("string"===typeof e)an(this,e)&&(t=t.concat(this.g.get(un(this,e))));else{e=Array.from(this.g.values());for(let n=0;n<e.length;n++)t=t.concat(e[n])}return t},i.set=function(e,t){return sn(this),this.i=null,e=un(this,e),an(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},i.get=function(e,t){return e?(e=this.W(e),0<e.length?String(e[0]):t):t},i.toString=function(){if(this.i)return this.i;if(!this.g)return"";const e=[],t=Array.from(this.g.keys());for(var n=0;n<t.length;n++){var i=t[n];const s=encodeURIComponent(String(i)),o=this.W(i);for(i=0;i<o.length;i++){var r=s;""!==o[i]&&(r+="="+encodeURIComponent(String(o[i]))),e.push(r)}}return this.i=e.join("&")};var hn=class{constructor(e,t){this.h=e,this.g=t}};function dn(e){this.l=e||fn,d.PerformanceNavigationTiming?(e=d.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(d.g&&d.g.Ga&&d.g.Ga()&&d.g.Ga().$b),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var fn=10;function pn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function mn(e){return e.h?1:e.g?e.g.size:0}function gn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function vn(e,t){e.g?e.g.add(t):e.h=t}function yn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function bn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return C(e.i)}function wn(){}function _n(){this.g=new wn}function In(e,t,n){const i=n||"";try{Ft(e,(function(e,n){let r=e;m(e)&&(r=Ae(e)),t.push(i+n+"="+encodeURIComponent(r))}))}catch(r){throw t.push(i+"type="+encodeURIComponent("_badmap")),r}}function Sn(e,t){const n=new Qe;if(d.Image){const i=new Image;i.onload=I(Tn,n,i,"TestLoadImage: loaded",!0,t),i.onerror=I(Tn,n,i,"TestLoadImage: error",!1,t),i.onabort=I(Tn,n,i,"TestLoadImage: abort",!1,t),i.ontimeout=I(Tn,n,i,"TestLoadImage: timeout",!1,t),d.setTimeout((function(){i.ontimeout&&i.ontimeout()}),1e4),i.src=e}else t(!1)}function Tn(e,t,n,i,r){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,r(i)}catch(s){}}function En(e){this.l=e.ac||null,this.j=e.jb||!1}function kn(e,t){ke.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Cn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}dn.prototype.cancel=function(){if(this.i=bn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},wn.prototype.stringify=function(e){return d.JSON.stringify(e,void 0)},wn.prototype.parse=function(e){return d.JSON.parse(e,void 0)},S(En,ft),En.prototype.g=function(){return new kn(this.l,this.j)},En.prototype.i=function(e){return function(){return e}}({}),S(kn,ke);var Cn=0;function xn(e){e.j.read().then(e.Ta.bind(e)).catch(e.ga.bind(e))}function An(e){e.readyState=4,e.l=null,e.j=null,e.A=null,On(e)}function On(e){e.onreadystatechange&&e.onreadystatechange.call(e)}i=kn.prototype,i.open=function(e,t){if(this.readyState!=Cn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,On(this)},i.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||d).fetch(new Request(this.B,t)).then(this.Wa.bind(this),this.ga.bind(this))},i.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch((()=>{})),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,An(this)),this.readyState=Cn},i.Wa=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,On(this)),this.g&&(this.readyState=3,On(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ua.bind(this),this.ga.bind(this));else if("undefined"!==typeof d.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;xn(this)}else e.text().then(this.Va.bind(this),this.ga.bind(this))},i.Ta=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?An(this):On(this),3==this.readyState&&xn(this)}},i.Va=function(e){this.g&&(this.response=this.responseText=e,An(this))},i.Ua=function(e){this.g&&(this.response=e,An(this))},i.ga=function(){this.g&&An(this)},i.setRequestHeader=function(e,t){this.v.append(e,t)},i.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},i.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(kn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Nn=d.JSON.parse;function Dn(e){ke.call(this),this.headers=new Map,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Rn,this.K=this.L=!1}S(Dn,ke);var Rn="",Ln=/^https?$/i,Pn=["POST","PUT"];function $n(e){return B&&Y()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Mn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Vn(e),Bn(e)}function Vn(e){e.D||(e.D=!0,Ce(e,"complete"),Ce(e,"error"))}function Fn(e){if(e.h&&"undefined"!=typeof h&&(!e.C[1]||4!=jn(e)||2!=e.aa()))if(e.v&&4==jn(e))ze(e.Ha,0,e);else if(Ce(e,"readystatechange"),4==jn(e)){e.h=!1;try{const c=e.aa();e:switch(c){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var i;if(i=0===c){var r=String(e.H).match(Bt)[1]||null;if(!r&&d.self&&d.self.location){var s=d.self.location.protocol;r=s.substr(0,s.length-1)}i=!Ln.test(r?r.toLowerCase():"")}n=i}if(n)Ce(e,"complete"),Ce(e,"success");else{e.m=6;try{var o=2<jn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.aa()+"]",Vn(e)}}finally{Bn(e)}}}function Bn(e,t){if(e.g){Un(e);const i=e.g,r=e.C[0]?f:null;e.g=null,e.C=null,t||Ce(e,"ready");try{i.onreadystatechange=r}catch(n){}}}function Un(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(d.clearTimeout(e.A),e.A=null)}function jn(e){return e.g?e.g.readyState:0}function zn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Rn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(Ai){return null}}function qn(e){let t="";return oe(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function Hn(e,t,n){e:{for(i in n){var i=!1;break e}i=!0}i||(n=qn(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):Zt(e,t,n))}function Gn(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function Zn(e){this.Ca=0,this.i=[],this.j=new Qe,this.ka=this.sa=this.F=this.V=this.g=this.za=this.D=this.ia=this.o=this.S=this.s=null,this.ab=this.U=0,this.Za=Gn("failFast",!1,e),this.L=this.v=this.u=this.m=this.l=null,this.Y=!0,this.pa=this.Ba=this.T=-1,this.Z=this.A=this.C=0,this.Xa=Gn("baseRetryDelayMs",5e3,e),this.bb=Gn("retryDelaySeedMs",1e4,e),this.$a=Gn("forwardChannelMaxRetries",2,e),this.ta=Gn("forwardChannelRequestTimeoutMs",2e4,e),this.ra=e&&e.xmlHttpFactory||void 0,this.Da=e&&e.Zb||!1,this.J=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.I="",this.h=new dn(e&&e.concurrentRequestLimit),this.Fa=new _n,this.O=e&&e.fastHandshake||!1,this.N=e&&e.encodeInitMessageHeaders||!1,this.O&&this.N&&(this.N=!1),this.Ya=e&&e.Xb||!1,e&&e.Aa&&this.j.Aa(),e&&e.forceLongPolling&&(this.Y=!1),this.$=!this.O&&this.Y&&e&&e.detectBufferingProxy||!1,this.ja=void 0,this.P=0,this.K=!1,this.la=this.B=null}function Kn(e){if(Qn(e),3==e.G){var t=e.U++,n=zt(e.F);Zt(n,"SID",e.I),Zt(n,"RID",t),Zt(n,"TYPE","terminate"),ei(e,n),t=new _t(e,e.j,t,void 0),t.K=2,t.v=Kt(zt(n)),n=!1,d.navigator&&d.navigator.sendBeacon&&(n=d.navigator.sendBeacon(t.v.toString(),"")),!n&&d.Image&&((new Image).src=t.v,n=!0),n||(t.g=di(t.l,null),t.g.da(t.v)),t.F=Date.now(),Nt(t)}li(e)}function Wn(e){e.g&&(ri(e),e.g.cancel(),e.g=null)}function Qn(e){Wn(e),e.u&&(d.clearTimeout(e.u),e.u=null),oi(e),e.h.cancel(),e.m&&("number"===typeof e.m&&d.clearTimeout(e.m),e.m=null)}function Yn(e){pn(e.h)||e.m||(e.m=!0,$e(e.Ja,e),e.C=0)}function Xn(e,t){return!(mn(e.h)>=e.h.j-(e.m?1:0))&&(e.m?(e.i=t.D.concat(e.i),!0):!(1==e.G||2==e.G||e.C>=(e.Za?0:e.$a))&&(e.m=lt(_(e.Ja,e,t),ci(e,e.C)),e.C++,!0))}function Jn(e,t){var n;n=t?t.m:e.U++;const i=zt(e.F);Zt(i,"SID",e.I),Zt(i,"RID",n),Zt(i,"AID",e.T),ei(e,i),e.o&&e.s&&Hn(i,e.o,e.s),n=new _t(e,e.j,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.i=t.D.concat(e.i)),t=ti(e,n,1e3),n.setTimeout(Math.round(.5*e.ta)+Math.round(.5*e.ta*Math.random())),vn(e.h,n),kt(n,i,t)}function ei(e,t){e.ia&&oe(e.ia,(function(e,n){Zt(t,n,e)})),e.l&&Ft({},(function(e,n){Zt(t,n,e)}))}function ti(e,t,n){n=Math.min(e.i.length,n);var i=e.l?_(e.l.Ra,e.l,e):null;e:{var r=e.i;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=r[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=r[o].h;const a=r[o].g;if(n-=t,0>n)t=Math.max(0,r[o].h-100),s=!1;else try{In(a,e,"req"+n+"_")}catch(Ui){i&&i(a)}}if(s){i=e.join("&");break e}}}return e=e.i.splice(0,n),t.D=e,i}function ni(e){e.g||e.u||(e.Z=1,$e(e.Ia,e),e.A=0)}function ii(e){return!(e.g||e.u||3<=e.A)&&(e.Z++,e.u=lt(_(e.Ia,e),ci(e,e.A)),e.A++,!0)}function ri(e){null!=e.B&&(d.clearTimeout(e.B),e.B=null)}function si(e){e.g=new _t(e,e.j,"rpc",e.Z),null===e.o&&(e.g.H=e.s),e.g.N=0;var t=zt(e.sa);Zt(t,"RID","rpc"),Zt(t,"SID",e.I),Zt(t,"CI",e.L?"0":"1"),Zt(t,"AID",e.T),Zt(t,"TYPE","xmlhttp"),ei(e,t),e.o&&e.s&&Hn(t,e.o,e.s),e.J&&e.g.setTimeout(e.J);var n=e.g;e=e.ka,n.K=1,n.v=Kt(zt(t)),n.s=null,n.P=!0,Ct(n,e)}function oi(e){null!=e.v&&(d.clearTimeout(e.v),e.v=null)}function ai(e,t){var n=null;if(e.g==t){oi(e),ri(e),e.g=null;var i=2}else{if(!gn(e.h,t))return;n=t.D,yn(e.h,t),i=1}if(0!=e.G)if(e.pa=t.Y,t.i)if(1==i){n=t.s?t.s.length:0,t=Date.now()-t.F;var r=e.C;i=rt(),Ce(i,new ut(i,n)),Yn(e)}else ni(e);else if(r=t.o,3==r||0==r&&0<e.pa||!(1==i&&Xn(e,t)||2==i&&ii(e)))switch(n&&0<n.length&&(t=e.h,t.i=t.i.concat(n)),r){case 1:ui(e,5);break;case 4:ui(e,10);break;case 3:ui(e,6);break;default:ui(e,2)}}function ci(e,t){let n=e.Xa+Math.floor(Math.random()*e.bb);return e.l||(n*=2),n*t}function ui(e,t){if(e.j.info("Error code "+t),2==t){var n=null;e.l&&(n=null);var i=_(e.kb,e);n||(n=new jt("//www.google.com/images/cleardot.gif"),d.location&&"http"==d.location.protocol||qt(n,"https"),Kt(n)),Sn(n.toString(),i)}else ct(2);e.G=0,e.l&&e.l.va(t),li(e),Qn(e)}function li(e){if(e.G=0,e.la=[],e.l){const t=bn(e.h);0==t.length&&0==e.i.length||(x(e.la,t),x(e.la,e.i),e.h.i.length=0,C(e.i),e.i.length=0),e.l.ua()}}function hi(e,t,n){var i=n instanceof jt?zt(n):new jt(n,void 0);if(""!=i.g)t&&(i.g=t+"."+i.g),Ht(i,i.m);else{var r=d.location;i=r.protocol,t=t?t+"."+r.hostname:r.hostname,r=+r.port;var s=new jt(null,void 0);i&&qt(s,i),t&&(s.g=t),r&&Ht(s,r),n&&(s.l=n),i=s}return n=e.D,t=e.za,n&&t&&Zt(i,n,t),Zt(i,"VER",e.ma),ei(e,i),i}function di(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Da&&!e.ra?new Dn(new En({jb:!0})):new Dn(e.ra),t.Ka(e.H),t}function fi(){}function pi(){if(B&&!(10<=Number(J)))throw Error("Environmental error: no available transport.")}function mi(e,t){ke.call(this),this.g=new Zn(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.S=e,(e=t&&t.Yb)&&!N(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!N(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new yi(this)}function gi(e){yt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function vi(){bt.call(this),this.status=1}function yi(e){this.g=e}i=Dn.prototype,i.Ka=function(e){this.L=e},i.da=function(e,t,n,i){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():gt.g(),this.C=this.u?pt(this.u):pt(gt),this.g.onreadystatechange=_(this.Ha,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Mn(this,s)}if(e=n||"",n=new Map(this.headers),i)if(Object.getPrototypeOf(i)===Object.prototype)for(var r in i)n.set(r,i[r]);else{if("function"!==typeof i.keys||"function"!==typeof i.get)throw Error("Unknown input type for opt_headers: "+String(i));for(const e of i.keys())n.set(e,i.get(e))}i=Array.from(n.keys()).find((e=>"content-type"==e.toLowerCase())),r=d.FormData&&e instanceof d.FormData,!(0<=k(Pn,t))||i||r||n.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[o,a]of n)this.g.setRequestHeader(o,a);this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Un(this),0<this.B&&((this.K=$n(this.g))?(this.g.timeout=this.B,this.g.ontimeout=_(this.qa,this)):this.A=ze(this.qa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Mn(this,s)}},i.qa=function(){"undefined"!=typeof h&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Ce(this,"timeout"),this.abort(8))},i.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Ce(this,"complete"),Ce(this,"abort"),Bn(this))},i.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Bn(this,!0)),Dn.X.M.call(this)},i.Ha=function(){this.s||(this.F||this.v||this.l?Fn(this):this.fb())},i.fb=function(){Fn(this)},i.aa=function(){try{return 2<jn(this)?this.g.status:-1}catch(e){return-1}},i.fa=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},i.Sa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Nn(t)}},i.Ea=function(){return this.m},i.Oa=function(){return"string"===typeof this.j?this.j:String(this.j)},i=Zn.prototype,i.ma=8,i.G=1,i.Ja=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.U=Math.floor(1e5*Math.random()),e=this.U++;const r=new _t(this,this.j,e,void 0);let s=this.s;if(this.S&&(s?(s=ae(s),ue(s,this.S)):s=this.S),null!==this.o||this.N||(r.H=s,s=null),this.O)e:{for(var t=0,n=0;n<this.i.length;n++){var i=this.i[n];if(i="__data__"in i.g&&(i=i.g.__data__,"string"===typeof i)?i.length:void 0,void 0===i)break;if(t+=i,4096<t){t=n;break e}if(4096===t||n===this.i.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=ti(this,r,t),n=zt(this.F),Zt(n,"RID",e),Zt(n,"CVER",22),this.D&&Zt(n,"X-HTTP-Session-Id",this.D),ei(this,n),s&&(this.N?t="headers="+encodeURIComponent(String(qn(s)))+"&"+t:this.o&&Hn(n,this.o,s)),vn(this.h,r),this.Ya&&Zt(n,"TYPE","init"),this.O?(Zt(n,"$req",t),Zt(n,"SID","null"),r.Z=!0,kt(r,n,null)):kt(r,n,t),this.G=2}}else 3==this.G&&(e?Jn(this,e):0==this.i.length||pn(this.h)||Jn(this))},i.Ia=function(){if(this.u=null,si(this),this.$&&!(this.K||null==this.g||0>=this.P)){var e=2*this.P;this.j.info("BP detection timer enabled: "+e),this.B=lt(_(this.eb,this),e)}},i.eb=function(){this.B&&(this.B=null,this.j.info("BP detection timeout reached."),this.j.info("Buffering proxy detected and switch to long-polling!"),this.L=!1,this.K=!0,ct(10),Wn(this),si(this))},i.cb=function(){null!=this.v&&(this.v=null,Wn(this),ii(this),ct(19))},i.kb=function(e){e?(this.j.info("Successfully pinged google.com"),ct(2)):(this.j.info("Failed to ping google.com"),ct(1))},i=fi.prototype,i.xa=function(){},i.wa=function(){},i.va=function(){},i.ua=function(){},i.Ra=function(){},pi.prototype.g=function(e,t){return new mi(e,t)},S(mi,ke),mi.prototype.m=function(){this.g.l=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;ct(0),e.V=t,e.ia=n||{},e.L=e.Y,e.F=hi(e,null,e.V),Yn(e)},mi.prototype.close=function(){Kn(this.g)},mi.prototype.u=function(e){var t=this.g;if("string"===typeof e){var n={};n.__data__=e,e=n}else this.v&&(n={},n.__data__=Ae(e),e=n);t.i.push(new hn(t.ab++,e)),3==t.G&&Yn(t)},mi.prototype.M=function(){this.g.l=null,delete this.j,Kn(this.g),delete this.g,mi.X.M.call(this)},S(gi,yt),S(vi,bt),S(yi,fi),yi.prototype.xa=function(){Ce(this.g,"a")},yi.prototype.wa=function(e){Ce(this.g,new gi(e))},yi.prototype.va=function(e){Ce(this.g,new vi)},yi.prototype.ua=function(){Ce(this.g,"b")},pi.prototype.createWebChannel=pi.prototype.g,mi.prototype.send=mi.prototype.u,mi.prototype.open=mi.prototype.m,mi.prototype.close=mi.prototype.close,ht.NO_ERROR=0,ht.TIMEOUT=8,ht.HTTP_ERROR=6,dt.COMPLETE="complete",mt.EventType=vt,vt.OPEN="a",vt.CLOSE="b",vt.ERROR="c",vt.MESSAGE="d",ke.prototype.listen=ke.prototype.N,Dn.prototype.listenOnce=Dn.prototype.O,Dn.prototype.getLastError=Dn.prototype.Oa,Dn.prototype.getLastErrorCode=Dn.prototype.Ea,Dn.prototype.getStatus=Dn.prototype.aa,Dn.prototype.getResponseJson=Dn.prototype.Sa,Dn.prototype.getResponseText=Dn.prototype.fa,Dn.prototype.send=Dn.prototype.da,Dn.prototype.setWithCredentials=Dn.prototype.Ka;var bi=l.createWebChannelTransport=function(){return new pi},wi=l.getStatEventTarget=function(){return rt()},_i=l.ErrorCode=ht,Ii=l.EventType=dt,Si=l.Event=nt,Ti=l.Stat={sb:0,vb:1,wb:2,Pb:3,Ub:4,Rb:5,Sb:6,Qb:7,Ob:8,Tb:9,PROXY:10,NOPROXY:11,Mb:12,Ib:13,Jb:14,Hb:15,Kb:16,Lb:17,ob:18,nb:19,pb:20},Ei=l.FetchXmlHttpFactory=En,ki=l.WebChannel=mt,Ci=l.XhrIo=Dn;const xi="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ai.UNAUTHENTICATED=new Ai(null),Ai.GOOGLE_CREDENTIALS=new Ai("google-credentials-uid"),Ai.FIRST_PARTY=new Ai("first-party-uid"),Ai.MOCK_USER=new Ai("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Oi="9.19.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ni=new a.Yd("@firebase/firestore");function Di(){return Ni.logLevel}function Ri(e){Ni.setLogLevel(e)}function Li(e,...t){if(Ni.logLevel<=a["in"].DEBUG){const n=t.map(Mi);Ni.debug(`Firestore (${Oi}): ${e}`,...n)}}function Pi(e,...t){if(Ni.logLevel<=a["in"].ERROR){const n=t.map(Mi);Ni.error(`Firestore (${Oi}): ${e}`,...n)}}function $i(e,...t){if(Ni.logLevel<=a["in"].WARN){const n=t.map(Mi);Ni.warn(`Firestore (${Oi}): ${e}`,...n)}}function Mi(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(e="Unexpected state"){const t=`FIRESTORE (${Oi}) INTERNAL ASSERTION FAILED: `+e;throw Pi(t),new Error(t)}function Fi(e,t){e||Vi()}function Bi(e,t){e||Vi()}function Ui(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ji={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class zi extends c.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class Gi{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ai.UNAUTHENTICATED)))}shutdown(){}}class Zi{constructor(e){this.token=e,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(e,t){this.changeListener=t,e.enqueueRetryable((()=>t(this.token.user)))}shutdown(){this.changeListener=null}}class Ki{constructor(e){this.t=e,this.currentUser=Ai.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const i=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let r=new qi;this.o=()=>{this.i++,this.currentUser=this.u(),r.resolve(),r=new qi,e.enqueueRetryable((()=>i(this.currentUser)))};const s=()=>{const t=r;e.enqueueRetryable((async()=>{await t.promise,await i(this.currentUser)}))},o=e=>{Li("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(Li("FirebaseAuthCredentialsProvider","Auth not yet detected"),r.resolve(),r=new qi)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(Li("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Fi("string"==typeof t.accessToken),new Hi(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Fi(null===e||"string"==typeof e),new Ai(e)}}class Wi{constructor(e,t,n){this.h=e,this.l=t,this.m=n,this.type="FirstParty",this.user=Ai.FIRST_PARTY,this.g=new Map}p(){return this.m?this.m():null}get headers(){this.g.set("X-Goog-AuthUser",this.h);const e=this.p();return e&&this.g.set("Authorization",e),this.l&&this.g.set("X-Goog-Iam-Authorization-Token",this.l),this.g}}class Qi{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new Wi(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ai.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class Yi{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Xi{constructor(e){this.I=e,this.forceRefresh=!1,this.appCheck=null,this.T=null}start(e,t){const n=e=>{null!=e.error&&Li("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.T;return this.T=e.token,Li("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const i=e=>{Li("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.I.onInit((e=>i(e))),setTimeout((()=>{if(!this.appCheck){const e=this.I.getImmediate({optional:!0});e?i(e):Li("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Fi("string"==typeof e.token),this.T=e.token,new Yi(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Ji(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let i=0;i<e;i++)n[i]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const i=Ji(40);for(let r=0;r<i.length;++r)n.length<20&&i[r]<t&&(n+=e.charAt(i[r]%e.length))}return n}}function tr(e,t){return e<t?-1:e>t?1:0}function nr(e,t,n){return e.length===t.length&&e.every(((e,i)=>n(e,t[i])))}function ir(e){return e+"\0"}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rr{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new zi(ji.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new zi(ji.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new zi(ji.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new zi(ji.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return rr.fromMillis(Date.now())}static fromDate(e){return rr.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new rr(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?tr(this.nanoseconds,e.nanoseconds):tr(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.timestamp=e}static fromTimestamp(e){return new sr(e)}static min(){return new sr(new rr(0,0))}static max(){return new sr(new rr(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class or{constructor(e,t,n){void 0===t?t=0:t>e.length&&Vi(),void 0===n?n=e.length-t:n>e.length-t&&Vi(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===or.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof or?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let i=0;i<n;i++){const n=e.get(i),r=t.get(i);if(n<r)return-1;if(n>r)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class ar extends or{construct(e,t,n){return new ar(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new zi(ji.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new ar(t)}static emptyPath(){return new ar([])}}const cr=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class ur extends or{construct(e,t,n){return new ur(e,t,n)}static isValidIdentifier(e){return cr.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),ur.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new ur(["__name__"])}static fromServerFormat(e){const t=[];let n="",i=0;const r=()=>{if(0===n.length)throw new zi(ji.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;i<e.length;){const t=e[i];if("\\"===t){if(i+1===e.length)throw new zi(ji.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[i+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new zi(ji.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,i+=2}else"`"===t?(s=!s,i++):"."!==t||s?(n+=t,i++):(r(),i++)}if(r(),s)throw new zi(ji.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new ur(t)}static emptyPath(){return new ur([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(e){this.path=e}static fromPath(e){return new lr(ar.fromString(e))}static fromName(e){return new lr(ar.fromString(e).popFirst(5))}static empty(){return new lr(ar.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===ar.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return ar.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new lr(new ar(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(e,t,n,i){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=i}}function dr(e){return e.fields.find((e=>2===e.kind))}function fr(e){return e.fields.filter((e=>2!==e.kind))}hr.UNKNOWN_ID=-1;class pr{constructor(e,t){this.fieldPath=e,this.kind=t}}class mr{constructor(e,t){this.sequenceNumber=e,this.offset=t}static empty(){return new mr(0,yr.min())}}function gr(e,t){const n=e.toTimestamp().seconds,i=e.toTimestamp().nanoseconds+1,r=sr.fromTimestamp(1e9===i?new rr(n+1,0):new rr(n,i));return new yr(r,lr.empty(),t)}function vr(e){return new yr(e.readTime,e.key,-1)}class yr{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new yr(sr.min(),lr.empty(),-1)}static max(){return new yr(sr.max(),lr.empty(),-1)}}function br(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=lr.comparator(e.documentKey,t.documentKey),0!==n?n:tr(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wr="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class _r{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ir(e){if(e.code!==ji.FAILED_PRECONDITION||e.message!==wr)throw e;Li("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Vi(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Sr(((n,i)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,i)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,i)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Sr?t:Sr.resolve(t)}catch(e){return Sr.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Sr.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Sr.reject(t)}static resolve(e){return new Sr(((t,n)=>{t(e)}))}static reject(e){return new Sr(((t,n)=>{n(e)}))}static waitFor(e){return new Sr(((t,n)=>{let i=0,r=0,s=!1;e.forEach((e=>{++i,e.next((()=>{++r,s&&r===i&&t()}),(e=>n(e)))})),s=!0,r===i&&t()}))}static or(e){let t=Sr.resolve(!1);for(const n of e)t=t.next((e=>e?Sr.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,i)=>{n.push(t.call(this,e,i))})),this.waitFor(n)}static mapArray(e,t){return new Sr(((n,i)=>{const r=e.length,s=new Array(r);let o=0;for(let a=0;a<r;a++){const c=a;t(e[c]).next((e=>{s[c]=e,++o,o===r&&n(s)}),(e=>i(e)))}}))}static doWhile(e,t){return new Sr(((n,i)=>{const r=()=>{!0===e()?t().next((()=>{r()}),i):n()};r()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tr{constructor(e,t){this.action=e,this.transaction=t,this.aborted=!1,this.R=new qi,this.transaction.oncomplete=()=>{this.R.resolve()},this.transaction.onabort=()=>{t.error?this.R.reject(new Cr(e,t.error)):this.R.resolve()},this.transaction.onerror=t=>{const n=Dr(t.target.error);this.R.reject(new Cr(e,n))}}static open(e,t,n,i){try{return new Tr(t,e.transaction(i,n))}catch(e){throw new Cr(t,e)}}get v(){return this.R.promise}abort(e){e&&this.R.reject(e),this.aborted||(Li("SimpleDb","Aborting transaction:",e?e.message:"Client-initiated abort"),this.aborted=!0,this.transaction.abort())}P(){const e=this.transaction;this.aborted||"function"!=typeof e.commit||e.commit()}store(e){const t=this.transaction.objectStore(e);return new Ar(t)}}class Er{constructor(e,t,n){this.name=e,this.version=t,this.V=n,12.2===Er.S((0,c.z$)())&&Pi("Firestore persistence suffers from a bug in iOS 12.2 Safari that may cause your app to stop working. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.")}static delete(e){return Li("SimpleDb","Removing database:",e),Or(window.indexedDB.deleteDatabase(e)).toPromise()}static D(){if(!(0,c.hl)())return!1;if(Er.C())return!0;const e=(0,c.z$)(),t=Er.S(e),n=0<t&&t<10,i=Er.N(e),r=0<i&&i<4.5;return!(e.indexOf("MSIE ")>0||e.indexOf("Trident/")>0||e.indexOf("Edge/")>0||n||r)}static C(){var e;return"undefined"!=typeof process&&"YES"===(null===(e={NODE_ENV:"production",BASE_URL:"/portofoio-pub/"})||void 0===e?void 0:e.k)}static O(e,t){return e.store(t)}static S(e){const t=e.match(/i(?:phone|pad|pod) os ([\d_]+)/i),n=t?t[1].split("_").slice(0,2).join("."):"-1";return Number(n)}static N(e){const t=e.match(/Android ([\d.]+)/i),n=t?t[1].split(".").slice(0,2).join("."):"-1";return Number(n)}async $(e){return this.db||(Li("SimpleDb","Opening database:",this.name),this.db=await new Promise(((t,n)=>{const i=indexedDB.open(this.name,this.version);i.onsuccess=e=>{const n=e.target.result;t(n)},i.onblocked=()=>{n(new Cr(e,"Cannot upgrade IndexedDB schema while another tab is open. Close all tabs that access Firestore and reload this page to proceed."))},i.onerror=t=>{const i=t.target.error;"VersionError"===i.name?n(new zi(ji.FAILED_PRECONDITION,"A newer version of the Firestore SDK was previously used and so the persisted data is not compatible with the version of the SDK you are now using. The SDK will operate with persistence disabled. If you need persistence, please re-upgrade to a newer version of the SDK or else clear the persisted IndexedDB data for your app to start fresh.")):"InvalidStateError"===i.name?n(new zi(ji.FAILED_PRECONDITION,"Unable to open an IndexedDB connection. This could be due to running in a private browsing session on a browser whose private browsing sessions do not support IndexedDB: "+i)):n(new Cr(e,i))},i.onupgradeneeded=e=>{Li("SimpleDb",'Database "'+this.name+'" requires upgrade from version:',e.oldVersion);const t=e.target.result;this.V.M(t,i.transaction,e.oldVersion,this.version).next((()=>{Li("SimpleDb","Database upgrade to version "+this.version+" complete")}))}}))),this.F&&(this.db.onversionchange=e=>this.F(e)),this.db}B(e){this.F=e,this.db&&(this.db.onversionchange=t=>e(t))}async runTransaction(e,t,n,i){const r="readonly"===t;let s=0;for(;;){++s;try{this.db=await this.$(e);const t=Tr.open(this.db,e,r?"readonly":"readwrite",n),s=i(t).next((e=>(t.P(),e))).catch((e=>(t.abort(e),Sr.reject(e)))).toPromise();return s.catch((()=>{})),await t.v,s}catch(e){const t=e,n="FirebaseError"!==t.name&&s<3;if(Li("SimpleDb","Transaction failed with error:",t.message,"Retrying:",n),this.close(),!n)return Promise.reject(t)}}}close(){this.db&&this.db.close(),this.db=void 0}}class kr{constructor(e){this.L=e,this.q=!1,this.U=null}get isDone(){return this.q}get K(){return this.U}set cursor(e){this.L=e}done(){this.q=!0}G(e){this.U=e}delete(){return Or(this.L.delete())}}class Cr extends zi{constructor(e,t){super(ji.UNAVAILABLE,`IndexedDB transaction '${e}' failed: ${t}`),this.name="IndexedDbTransactionError"}}function xr(e){return"IndexedDbTransactionError"===e.name}class Ar{constructor(e){this.store=e}put(e,t){let n;return void 0!==t?(Li("SimpleDb","PUT",this.store.name,e,t),n=this.store.put(t,e)):(Li("SimpleDb","PUT",this.store.name,"<auto-key>",e),n=this.store.put(e)),Or(n)}add(e){return Li("SimpleDb","ADD",this.store.name,e,e),Or(this.store.add(e))}get(e){return Or(this.store.get(e)).next((t=>(void 0===t&&(t=null),Li("SimpleDb","GET",this.store.name,e,t),t)))}delete(e){return Li("SimpleDb","DELETE",this.store.name,e),Or(this.store.delete(e))}count(){return Li("SimpleDb","COUNT",this.store.name),Or(this.store.count())}j(e,t){const n=this.options(e,t);if(n.index||"function"!=typeof this.store.getAll){const e=this.cursor(n),t=[];return this.W(e,((e,n)=>{t.push(n)})).next((()=>t))}{const e=this.store.getAll(n.range);return new Sr(((t,n)=>{e.onerror=e=>{n(e.target.error)},e.onsuccess=e=>{t(e.target.result)}}))}}H(e,t){const n=this.store.getAll(e,null===t?void 0:t);return new Sr(((e,t)=>{n.onerror=e=>{t(e.target.error)},n.onsuccess=t=>{e(t.target.result)}}))}J(e,t){Li("SimpleDb","DELETE ALL",this.store.name);const n=this.options(e,t);n.Y=!1;const i=this.cursor(n);return this.W(i,((e,t,n)=>n.delete()))}Z(e,t){let n;t?n=e:(n={},t=e);const i=this.cursor(n);return this.W(i,t)}X(e){const t=this.cursor({});return new Sr(((n,i)=>{t.onerror=e=>{const t=Dr(e.target.error);i(t)},t.onsuccess=t=>{const i=t.target.result;i?e(i.primaryKey,i.value).next((e=>{e?i.continue():n()})):n()}}))}W(e,t){const n=[];return new Sr(((i,r)=>{e.onerror=e=>{r(e.target.error)},e.onsuccess=e=>{const r=e.target.result;if(!r)return void i();const s=new kr(r),o=t(r.primaryKey,r.value,s);if(o instanceof Sr){const e=o.catch((e=>(s.done(),Sr.reject(e))));n.push(e)}s.isDone?i():null===s.K?r.continue():r.continue(s.K)}})).next((()=>Sr.waitFor(n)))}options(e,t){let n;return void 0!==e&&("string"==typeof e?n=e:t=e),{index:n,range:t}}cursor(e){let t="next";if(e.reverse&&(t="prev"),e.index){const n=this.store.index(e.index);return e.Y?n.openKeyCursor(e.range,t):n.openCursor(e.range,t)}return this.store.openCursor(e.range,t)}}function Or(e){return new Sr(((t,n)=>{e.onsuccess=e=>{const n=e.target.result;t(n)},e.onerror=e=>{const t=Dr(e.target.error);n(t)}}))}let Nr=!1;function Dr(e){const t=Er.S((0,c.z$)());if(t>=12.2&&t<13){const t="An internal error was encountered in the Indexed Database server";if(e.message.indexOf(t)>=0){const e=new zi("internal",`IOS_INDEXEDDB_BUG1: IndexedDb has thrown '${t}'. This is likely due to an unavoidable bug in iOS. See https://stackoverflow.com/q/56496296/110915 for details and a potential workaround.`);return Nr||(Nr=!0,setTimeout((()=>{throw e}),0)),e}}return e}class Rr{constructor(e,t){this.asyncQueue=e,this.tt=t,this.task=null}start(){this.et(15e3)}stop(){this.task&&(this.task.cancel(),this.task=null)}get started(){return null!==this.task}et(e){Li("IndexBackiller",`Scheduled in ${e}ms`),this.task=this.asyncQueue.enqueueAfterDelay("index_backfill",e,(async()=>{this.task=null;try{Li("IndexBackiller",`Documents written: ${await this.tt.nt()}`)}catch(e){xr(e)?Li("IndexBackiller","Ignoring IndexedDB error during index backfill: ",e):await Ir(e)}await this.et(6e4)}))}}class Lr{constructor(e,t){this.localStore=e,this.persistence=t}async nt(e=50){return this.persistence.runTransaction("Backfill Indexes","readwrite-primary",(t=>this.st(t,e)))}st(e,t){const n=new Set;let i=t,r=!0;return Sr.doWhile((()=>!0===r&&i>0),(()=>this.localStore.indexManager.getNextCollectionGroupToUpdate(e).next((t=>{if(null!==t&&!n.has(t))return Li("IndexBackiller",`Processing collection: ${t}`),this.it(e,t,i).next((e=>{i-=e,n.add(t)}));r=!1})))).next((()=>t-i))}it(e,t,n){return this.localStore.indexManager.getMinOffsetFromCollectionGroup(e,t).next((i=>this.localStore.localDocuments.getNextDocuments(e,t,i,n).next((n=>{const r=n.changes;return this.localStore.indexManager.updateIndexEntries(e,r).next((()=>this.rt(i,n))).next((n=>(Li("IndexBackiller",`Updating offset: ${n}`),this.localStore.indexManager.updateCollectionGroup(e,t,n)))).next((()=>r.size))}))))}rt(e,t){let n=e;return t.changes.forEach(((e,t)=>{const i=vr(t);br(i,n)>0&&(n=i)})),new yr(n.readTime,n.documentKey,Math.max(t.batchId,e.largestBatchId))}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.ot(e),this.ut=e=>t.writeSequenceNumber(e))}ot(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.ut&&this.ut(e),e}}function $r(e){return null==e}function Mr(e){return 0===e&&1/e==-1/0}function Vr(e){return"number"==typeof e&&Number.isInteger(e)&&!Mr(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Fr(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ur(t)),t=Br(e.get(n),t);return Ur(t)}function Br(e,t){let n=t;const i=e.length;for(let r=0;r<i;r++){const t=e.charAt(r);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Ur(e){return e+""}function jr(e){const t=e.length;if(Fi(t>=2),2===t)return Fi(""===e.charAt(0)&&""===e.charAt(1)),ar.emptyPath();const n=t-2,i=[];let r="";for(let s=0;s<t;){const t=e.indexOf("",s);switch((t<0||t>n)&&Vi(),e.charAt(t+1)){case"":const n=e.substring(s,t);let o;0===r.length?o=n:(r+=n,o=r,r=""),i.push(o);break;case"":r+=e.substring(s,t),r+="\0";break;case"":r+=e.substring(s,t+1);break;default:Vi()}s=t+2}return new ar(i)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Pr.ct=-1;const zr=["userId","batchId"];
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qr(e,t){return[e,Fr(t)]}function Hr(e,t,n){return[e,Fr(t),n]}const Gr={},Zr=["prefixPath","collectionGroup","readTime","documentId"],Kr=["prefixPath","collectionGroup","documentId"],Wr=["collectionGroup","readTime","prefixPath","documentId"],Qr=["canonicalId","targetId"],Yr=["targetId","path"],Xr=["path","targetId"],Jr=["collectionId","parent"],es=["indexId","uid"],ts=["uid","sequenceNumber"],ns=["indexId","uid","arrayValue","directionalValue","orderedDocumentKey","documentKey"],is=["indexId","uid","orderedDocumentKey"],rs=["userId","collectionPath","documentId"],ss=["userId","collectionPath","largestBatchId"],os=["userId","collectionGroup","largestBatchId"],as=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],cs=[...as,"documentOverlays"],us=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],ls=us,hs=[...ls,"indexConfiguration","indexState","indexEntries"];
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ds extends _r{constructor(e,t){super(),this.at=e,this.currentSequenceNumber=t}}function fs(e,t){const n=Ui(e);return Er.O(n.at,t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ps(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function ms(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function gs(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vs{constructor(e,t){this.comparator=e,this.root=t||bs.EMPTY}insert(e,t){return new vs(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,bs.BLACK,null,null))}remove(e){return new vs(this.comparator,this.root.remove(e,this.comparator).copy(null,null,bs.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const i=this.comparator(e,n.key);if(0===i)return t+n.left.size;i<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new ys(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new ys(this.root,e,this.comparator,!1)}getReverseIterator(){return new ys(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new ys(this.root,e,this.comparator,!0)}}class ys{constructor(e,t,n,i){this.isReverse=i,this.nodeStack=[];let r=1;for(;!e.isEmpty();)if(r=t?n(e.key,t):1,t&&i&&(r*=-1),r<0)e=this.isReverse?e.left:e.right;else{if(0===r){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class bs{constructor(e,t,n,i,r){this.key=e,this.value=t,this.color=null!=n?n:bs.RED,this.left=null!=i?i:bs.EMPTY,this.right=null!=r?r:bs.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,i,r){return new bs(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=i?i:this.left,null!=r?r:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let i=this;const r=n(e,i.key);return i=r<0?i.copy(null,null,null,i.left.insert(e,t,n),null):0===r?i.copy(null,t,null,null,null):i.copy(null,null,null,null,i.right.insert(e,t,n)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bs.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,i=this;if(t(e,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),0===t(e,i.key)){if(i.right.isEmpty())return bs.EMPTY;n=i.right.min(),i=i.copy(n.key,n.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,bs.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,bs.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Vi();if(this.right.isRed())throw Vi();const e=this.left.check();if(e!==this.right.check())throw Vi();return e+(this.isRed()?0:1)}}bs.EMPTY=null,bs.RED=!0,bs.BLACK=!1,bs.EMPTY=new class{constructor(){this.size=0}get key(){throw Vi()}get value(){throw Vi()}get color(){throw Vi()}get left(){throw Vi()}get right(){throw Vi()}copy(e,t,n,i,r){return this}insert(e,t,n){return new bs(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ws{constructor(e){this.comparator=e,this.data=new vs(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const i=n.getNext();if(this.comparator(i.key,e[1])>=0)return;t(i.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new _s(this.data.getIterator())}getIteratorFrom(e){return new _s(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof ws))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(0!==this.comparator(e,i))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new ws(this.comparator);return t.data=e,t}}class _s{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}function Is(e){return e.hasNext()?e.getNext():void 0}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ss{constructor(e){this.fields=e,e.sort(ur.comparator)}static empty(){return new Ss([])}unionWith(e){let t=new ws(ur.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Ss(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return nr(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ts extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Es(){return"undefined"!=typeof atob}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ks{constructor(e){this.binaryString=e}static fromBase64String(e){const t=function(e){try{return atob(e)}catch(e){throw"undefined"!=typeof DOMException&&e instanceof DOMException?new Ts("Invalid base64 string: "+e):e}}(e);return new ks(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new ks(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return tr(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}ks.EMPTY_BYTE_STRING=new ks("");const Cs=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function xs(e){if(Fi(!!e),"string"==typeof e){let t=0;const n=Cs.exec(e);if(Fi(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const i=new Date(e);return{seconds:Math.floor(i.getTime()/1e3),nanos:t}}return{seconds:As(e.seconds),nanos:As(e.nanos)}}function As(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Os(e){return"string"==typeof e?ks.fromBase64String(e):ks.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ns(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ds(e){const t=e.mapValue.fields.__previous_value__;return Ns(t)?Ds(t):t}function Rs(e){const t=xs(e.mapValue.fields.__local_write_time__.timestampValue);return new rr(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls{constructor(e,t,n,i,r,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=i,this.ssl=r,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Ps{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Ps("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Ps&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s={mapValue:{fields:{__type__:{stringValue:"__max__"}}}},Ms={nullValue:"NULL_VALUE"};function Vs(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ns(e)?4:Xs(e)?9007199254740991:10:Vi()}function Fs(e,t){if(e===t)return!0;const n=Vs(e);if(n!==Vs(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Rs(e).isEqual(Rs(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=xs(e.timestampValue),i=xs(t.timestampValue);return n.seconds===i.seconds&&n.nanos===i.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Os(e.bytesValue).isEqual(Os(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return As(e.geoPointValue.latitude)===As(t.geoPointValue.latitude)&&As(e.geoPointValue.longitude)===As(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return As(e.integerValue)===As(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=As(e.doubleValue),i=As(t.doubleValue);return n===i?Mr(n)===Mr(i):isNaN(n)&&isNaN(i)}return!1}(e,t);case 9:return nr(e.arrayValue.values||[],t.arrayValue.values||[],Fs);case 10:return function(e,t){const n=e.mapValue.fields||{},i=t.mapValue.fields||{};if(ps(n)!==ps(i))return!1;for(const r in n)if(n.hasOwnProperty(r)&&(void 0===i[r]||!Fs(n[r],i[r])))return!1;return!0}(e,t);default:return Vi()}}function Bs(e,t){return void 0!==(e.values||[]).find((e=>Fs(e,t)))}function Us(e,t){if(e===t)return 0;const n=Vs(e),i=Vs(t);if(n!==i)return tr(n,i);switch(n){case 0:case 9007199254740991:return 0;case 1:return tr(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=As(e.integerValue||e.doubleValue),i=As(t.integerValue||t.doubleValue);return n<i?-1:n>i?1:n===i?0:isNaN(n)?isNaN(i)?0:-1:1}(e,t);case 3:return js(e.timestampValue,t.timestampValue);case 4:return js(Rs(e),Rs(t));case 5:return tr(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Os(e),i=Os(t);return n.compareTo(i)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),i=t.split("/");for(let r=0;r<n.length&&r<i.length;r++){const e=tr(n[r],i[r]);if(0!==e)return e}return tr(n.length,i.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=tr(As(e.latitude),As(t.latitude));return 0!==n?n:tr(As(e.longitude),As(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],i=t.values||[];for(let r=0;r<n.length&&r<i.length;++r){const e=Us(n[r],i[r]);if(e)return e}return tr(n.length,i.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===$s.mapValue&&t===$s.mapValue)return 0;if(e===$s.mapValue)return 1;if(t===$s.mapValue)return-1;const n=e.fields||{},i=Object.keys(n),r=t.fields||{},s=Object.keys(r);i.sort(),s.sort();for(let o=0;o<i.length&&o<s.length;++o){const e=tr(i[o],s[o]);if(0!==e)return e;const t=Us(n[i[o]],r[s[o]]);if(0!==t)return t}return tr(i.length,s.length)}(e.mapValue,t.mapValue);default:throw Vi()}}function js(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return tr(e,t);const n=xs(e),i=xs(t),r=tr(n.seconds,i.seconds);return 0!==r?r:tr(n.nanos,i.nanos)}function zs(e){return qs(e)}function qs(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=xs(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Os(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,lr.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const i of e.values||[])n?n=!1:t+=",",t+=qs(i);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",i=!0;for(const r of t)i?i=!1:n+=",",n+=`${r}:${qs(e.fields[r])}`;return n+"}"}(e.mapValue):Vi();var t,n}function Hs(e,t){return{referenceValue:`projects/${e.projectId}/databases/${e.database}/documents/${t.path.canonicalString()}`}}function Gs(e){return!!e&&"integerValue"in e}function Zs(e){return!!e&&"arrayValue"in e}function Ks(e){return!!e&&"nullValue"in e}function Ws(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Qs(e){return!!e&&"mapValue"in e}function Ys(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return ms(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ys(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ys(e.arrayValue.values[n]);return t}return Object.assign({},e)}function Xs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}function Js(e){return"nullValue"in e?Ms:"booleanValue"in e?{booleanValue:!1}:"integerValue"in e||"doubleValue"in e?{doubleValue:NaN}:"timestampValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"stringValue"in e?{stringValue:""}:"bytesValue"in e?{bytesValue:""}:"referenceValue"in e?Hs(Ps.empty(),lr.empty()):"geoPointValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"arrayValue"in e?{arrayValue:{}}:"mapValue"in e?{mapValue:{}}:Vi()}function eo(e){return"nullValue"in e?{booleanValue:!1}:"booleanValue"in e?{doubleValue:NaN}:"integerValue"in e||"doubleValue"in e?{timestampValue:{seconds:Number.MIN_SAFE_INTEGER}}:"timestampValue"in e?{stringValue:""}:"stringValue"in e?{bytesValue:""}:"bytesValue"in e?Hs(Ps.empty(),lr.empty()):"referenceValue"in e?{geoPointValue:{latitude:-90,longitude:-180}}:"geoPointValue"in e?{arrayValue:{}}:"arrayValue"in e?{mapValue:{}}:"mapValue"in e?$s:Vi()}function to(e,t){const n=Us(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?-1:!e.inclusive&&t.inclusive?1:0}function no(e,t){const n=Us(e.value,t.value);return 0!==n?n:e.inclusive&&!t.inclusive?1:!e.inclusive&&t.inclusive?-1:0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{constructor(e){this.value=e}static empty(){return new io({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Qs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ys(t)}setAll(e){let t=ur.emptyPath(),n={},i=[];e.forEach(((e,r)=>{if(!t.isImmediateParentOf(r)){const e=this.getFieldsMap(t);this.applyChanges(e,n,i),n={},i=[],t=r.popLast()}e?n[r.lastSegment()]=Ys(e):i.push(r.lastSegment())}));const r=this.getFieldsMap(t);this.applyChanges(r,n,i)}delete(e){const t=this.field(e.popLast());Qs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Fs(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let i=t.mapValue.fields[e.get(n)];Qs(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=i),t=i}return t.mapValue.fields}applyChanges(e,t,n){ms(t,((t,n)=>e[t]=n));for(const i of n)delete e[i]}clone(){return new io(Ys(this.value))}}function ro(e){const t=[];return ms(e.fields,((e,n)=>{const i=new ur([e]);if(Qs(n)){const e=ro(n.mapValue).fields;if(0===e.length)t.push(i);else for(const n of e)t.push(i.child(n))}else t.push(i)})),new Ss(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class so{constructor(e,t,n,i,r,s,o){this.key=e,this.documentType=t,this.version=n,this.readTime=i,this.createTime=r,this.data=s,this.documentState=o}static newInvalidDocument(e){return new so(e,0,sr.min(),sr.min(),sr.min(),io.empty(),0)}static newFoundDocument(e,t,n,i){return new so(e,1,t,sr.min(),n,i,0)}static newNoDocument(e,t){return new so(e,2,t,sr.min(),sr.min(),io.empty(),0)}static newUnknownDocument(e,t){return new so(e,3,t,sr.min(),sr.min(),io.empty(),2)}convertToFoundDocument(e,t){return!this.createTime.isEqual(sr.min())||2!==this.documentType&&0!==this.documentType||(this.createTime=e),this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=io.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=io.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=sr.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof so&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new so(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oo{constructor(e,t){this.position=e,this.inclusive=t}}function ao(e,t,n){let i=0;for(let r=0;r<e.position.length;r++){const s=t[r],o=e.position[r];if(i=s.field.isKeyField()?lr.comparator(lr.fromName(o.referenceValue),n.key):Us(o,n.data.field(s.field)),"desc"===s.dir&&(i*=-1),0!==i)break}return i}function co(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Fs(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class uo{constructor(e,t="asc"){this.field=e,this.dir=t}}function lo(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ho{}class fo extends ho{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.createKeyFieldInFilter(e,t,n):new So(e,t,n):"array-contains"===t?new Co(e,n):"in"===t?new xo(e,n):"not-in"===t?new Ao(e,n):"array-contains-any"===t?new Oo(e,n):new fo(e,t,n)}static createKeyFieldInFilter(e,t,n){return"in"===t?new To(e,n):new Eo(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.matchesComparison(Us(t,this.value)):null!==t&&Vs(this.value)===Vs(t)&&this.matchesComparison(Us(t,this.value))}matchesComparison(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Vi()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}getFirstInequalityField(){return this.isInequality()?this.field:null}}class po extends ho{constructor(e,t){super(),this.filters=e,this.op=t,this.ht=null}static create(e,t){return new po(e,t)}matches(e){return mo(this)?void 0===this.filters.find((t=>!t.matches(e))):void 0!==this.filters.find((t=>t.matches(e)))}getFlattenedFilters(){return null!==this.ht||(this.ht=this.filters.reduce(((e,t)=>e.concat(t.getFlattenedFilters())),[])),this.ht}getFilters(){return Object.assign([],this.filters)}getFirstInequalityField(){const e=this.lt((e=>e.isInequality()));return null!==e?e.field:null}lt(e){for(const t of this.getFlattenedFilters())if(e(t))return t;return null}}function mo(e){return"and"===e.op}function go(e){return"or"===e.op}function vo(e){return yo(e)&&mo(e)}function yo(e){for(const t of e.filters)if(t instanceof po)return!1;return!0}function bo(e){if(e instanceof fo)return e.field.canonicalString()+e.op.toString()+zs(e.value);if(vo(e))return e.filters.map((e=>bo(e))).join(",");{const t=e.filters.map((e=>bo(e))).join(",");return`${e.op}(${t})`}}function wo(e,t){return e instanceof fo?function(e,t){return t instanceof fo&&e.op===t.op&&e.field.isEqual(t.field)&&Fs(e.value,t.value)}(e,t):e instanceof po?function(e,t){return t instanceof po&&e.op===t.op&&e.filters.length===t.filters.length&&e.filters.reduce(((e,n,i)=>e&&wo(n,t.filters[i])),!0)}(e,t):void Vi()}function _o(e,t){const n=e.filters.concat(t);return po.create(n,e.op)}function Io(e){return e instanceof fo?function(e){return`${e.field.canonicalString()} ${e.op} ${zs(e.value)}`}(e):e instanceof po?function(e){return e.op.toString()+" {"+e.getFilters().map(Io).join(" ,")+"}"}(e):"Filter"}class So extends fo{constructor(e,t,n){super(e,t,n),this.key=lr.fromName(n.referenceValue)}matches(e){const t=lr.comparator(e.key,this.key);return this.matchesComparison(t)}}class To extends fo{constructor(e,t){super(e,"in",t),this.keys=ko("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Eo extends fo{constructor(e,t){super(e,"not-in",t),this.keys=ko("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ko(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>lr.fromName(e.referenceValue)))}class Co extends fo{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Zs(t)&&Bs(t.arrayValue,this.value)}}class xo extends fo{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Bs(this.value.arrayValue,t)}}class Ao extends fo{constructor(e,t){super(e,"not-in",t)}matches(e){if(Bs(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Bs(this.value.arrayValue,t)}}class Oo extends fo{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Zs(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Bs(this.value.arrayValue,e)))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class No{constructor(e,t=null,n=[],i=[],r=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=i,this.limit=r,this.startAt=s,this.endAt=o,this.ft=null}}function Do(e,t=null,n=[],i=[],r=null,s=null,o=null){return new No(e,t,n,i,r,s,o)}function Ro(e){const t=Ui(e);if(null===t.ft){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>bo(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),$r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>zs(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>zs(e))).join(",")),t.ft=e}return t.ft}function Lo(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let n=0;n<e.orderBy.length;n++)if(!lo(e.orderBy[n],t.orderBy[n]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let n=0;n<e.filters.length;n++)if(!wo(e.filters[n],t.filters[n]))return!1;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!co(e.startAt,t.startAt)&&co(e.endAt,t.endAt)}function Po(e){return lr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}function $o(e,t){return e.filters.filter((e=>e instanceof fo&&e.field.isEqual(t)))}function Mo(e,t,n){let i=Ms,r=!0;for(const s of $o(e,t)){let e=Ms,t=!0;switch(s.op){case"<":case"<=":e=Js(s.value);break;case"==":case"in":case">=":e=s.value;break;case">":e=s.value,t=!1;break;case"!=":case"not-in":e=Ms}to({value:i,inclusive:r},{value:e,inclusive:t})<0&&(i=e,r=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];to({value:i,inclusive:r},{value:e,inclusive:n.inclusive})<0&&(i=e,r=n.inclusive);break}return{value:i,inclusive:r}}function Vo(e,t,n){let i=$s,r=!0;for(const s of $o(e,t)){let e=$s,t=!0;switch(s.op){case">=":case">":e=eo(s.value),t=!1;break;case"==":case"in":case"<=":e=s.value;break;case"<":e=s.value,t=!1;break;case"!=":case"not-in":e=$s}no({value:i,inclusive:r},{value:e,inclusive:t})>0&&(i=e,r=t)}if(null!==n)for(let s=0;s<e.orderBy.length;++s)if(e.orderBy[s].field.isEqual(t)){const e=n.position[s];no({value:i,inclusive:r},{value:e,inclusive:n.inclusive})>0&&(i=e,r=n.inclusive);break}return{value:i,inclusive:r}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fo{constructor(e,t=null,n=[],i=[],r=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=i,this.limit=r,this.limitType=s,this.startAt=o,this.endAt=a,this.dt=null,this.wt=null,this.startAt,this.endAt}}function Bo(e,t,n,i,r,s,o,a){return new Fo(e,t,n,i,r,s,o,a)}function Uo(e){return new Fo(e)}function jo(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function zo(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function qo(e){for(const t of e.filters){const e=t.getFirstInequalityField();if(null!==e)return e}return null}function Ho(e){return null!==e.collectionGroup}function Go(e){const t=Ui(e);if(null===t.dt){t.dt=[];const e=qo(t),n=zo(t);if(null!==e&&null===n)e.isKeyField()||t.dt.push(new uo(e)),t.dt.push(new uo(ur.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.dt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.dt.push(new uo(ur.keyField(),e))}}}return t.dt}function Zo(e){const t=Ui(e);if(!t.wt)if("F"===t.limitType)t.wt=Do(t.path,t.collectionGroup,Go(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const r of Go(t)){const t="desc"===r.dir?"asc":"desc";e.push(new uo(r.field,t))}const n=t.endAt?new oo(t.endAt.position,t.endAt.inclusive):null,i=t.startAt?new oo(t.startAt.position,t.startAt.inclusive):null;t.wt=Do(t.path,t.collectionGroup,e,t.filters,t.limit,n,i)}return t.wt}function Ko(e,t){t.getFirstInequalityField(),qo(e);const n=e.filters.concat([t]);return new Fo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),n,e.limit,e.limitType,e.startAt,e.endAt)}function Wo(e,t,n){return new Fo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Qo(e,t){return Lo(Zo(e),Zo(t))&&e.limitType===t.limitType}function Yo(e){return`${Ro(Zo(e))}|lt:${e.limitType}`}function Xo(e){return`Query(target=${function(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>Io(e))).join(", ")}]`),$r(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>zs(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>zs(e))).join(",")),`Target(${t})`}(Zo(e))}; limitType=${e.limitType})`}function Jo(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):lr.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of Go(e))if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const i=ao(e,t,n);return e.inclusive?i<=0:i<0}(e.startAt,Go(e),t))&&!(e.endAt&&!function(e,t,n){const i=ao(e,t,n);return e.inclusive?i>=0:i>0}(e.endAt,Go(e),t))}(e,t)}function ea(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function ta(e){return(t,n)=>{let i=!1;for(const r of Go(e)){const e=na(r,t,n);if(0!==e)return e;i=i||r.field.isKeyField()}return 0}}function na(e,t,n){const i=e.field.isKeyField()?lr.comparator(t.key,n.key):function(e,t,n){const i=t.data.field(e),r=n.data.field(e);return null!==i&&null!==r?Us(i,r):Vi()}(e.field,t,n);switch(e.dir){case"asc":return i;case"desc":return-1*i;default:return Vi()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ia{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[i,r]of n)if(this.equalsFn(i,e))return r}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),i=this.inner[n];if(void 0===i)return this.inner[n]=[[e,t]],void this.innerSize++;for(let r=0;r<i.length;r++)if(this.equalsFn(i[r][0],e))return void(i[r]=[e,t]);i.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let i=0;i<n.length;i++)if(this.equalsFn(n[i][0],e))return 1===n.length?delete this.inner[t]:n.splice(i,1),this.innerSize--,!0;return!1}forEach(e){ms(this.inner,((t,n)=>{for(const[i,r]of n)e(i,r)}))}isEmpty(){return gs(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ra=new vs(lr.comparator);function sa(){return ra}const oa=new vs(lr.comparator);function aa(...e){let t=oa;for(const n of e)t=t.insert(n.key,n);return t}function ca(e){let t=oa;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function ua(){return ha()}function la(){return ha()}function ha(){return new ia((e=>e.toString()),((e,t)=>e.isEqual(t)))}const da=new vs(lr.comparator),fa=new ws(lr.comparator);function pa(...e){let t=fa;for(const n of e)t=t.add(n);return t}const ma=new ws(tr);function ga(){return ma}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function va(e,t){if(e.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Mr(t)?"-0":t}}function ya(e){return{integerValue:""+e}}function ba(e,t){return Vr(t)?ya(t):va(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(){this._=void 0}}function _a(e,t,n){return e instanceof Ta?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof Ea?ka(e,t):e instanceof Ca?xa(e,t):function(e,t){const n=Sa(e,t),i=Oa(n)+Oa(e._t);return Gs(n)&&Gs(e._t)?ya(i):va(e.serializer,i)}(e,t)}function Ia(e,t,n){return e instanceof Ea?ka(e,t):e instanceof Ca?xa(e,t):n}function Sa(e,t){return e instanceof Aa?Gs(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Ta extends wa{}class Ea extends wa{constructor(e){super(),this.elements=e}}function ka(e,t){const n=Na(t);for(const i of e.elements)n.some((e=>Fs(e,i)))||n.push(i);return{arrayValue:{values:n}}}class Ca extends wa{constructor(e){super(),this.elements=e}}function xa(e,t){let n=Na(t);for(const i of e.elements)n=n.filter((e=>!Fs(e,i)));return{arrayValue:{values:n}}}class Aa extends wa{constructor(e,t){super(),this.serializer=e,this._t=t}}function Oa(e){return As(e.integerValue||e.doubleValue)}function Na(e){return Zs(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Da{constructor(e,t){this.field=e,this.transform=t}}function Ra(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof Ea&&t instanceof Ea||e instanceof Ca&&t instanceof Ca?nr(e.elements,t.elements,Fs):e instanceof Aa&&t instanceof Aa?Fs(e._t,t._t):e instanceof Ta&&t instanceof Ta}(e.transform,t.transform)}class La{constructor(e,t){this.version=e,this.transformResults=t}}class Pa{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Pa}static exists(e){return new Pa(void 0,e)}static updateTime(e){return new Pa(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function $a(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class Ma{}function Va(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ka(e.key,Pa.none()):new za(e.key,e.data,Pa.none());{const n=e.data,i=io.empty();let r=new ws(ur.comparator);for(let e of t.fields)if(!r.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?i.delete(e):i.set(e,t),r=r.add(e)}return new qa(e.key,i,new Ss(r.toArray()),Pa.none())}}function Fa(e,t,n){e instanceof za?function(e,t,n){const i=e.value.clone(),r=Ga(e.fieldTransforms,t,n.transformResults);i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):e instanceof qa?function(e,t,n){if(!$a(e.precondition,t))return void t.convertToUnknownDocument(n.version);const i=Ga(e.fieldTransforms,t,n.transformResults),r=t.data;r.setAll(Ha(e)),r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function Ba(e,t,n,i){return e instanceof za?function(e,t,n,i){if(!$a(e.precondition,t))return n;const r=e.value.clone(),s=Za(e.fieldTransforms,i,t);return r.setAll(s),t.convertToFoundDocument(t.version,r).setHasLocalMutations(),null}(e,t,n,i):e instanceof qa?function(e,t,n,i){if(!$a(e.precondition,t))return n;const r=Za(e.fieldTransforms,i,t),s=t.data;return s.setAll(Ha(e)),s.setAll(r),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,i):function(e,t,n){return $a(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Ua(e,t){let n=null;for(const i of e.fieldTransforms){const e=t.data.field(i.field),r=Sa(i.transform,e||null);null!=r&&(null===n&&(n=io.empty()),n.set(i.field,r))}return n||null}function ja(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&nr(e,t,((e,t)=>Ra(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class za extends Ma{constructor(e,t,n,i=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class qa extends Ma{constructor(e,t,n,i,r=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=i,this.fieldTransforms=r,this.type=1}getFieldMask(){return this.fieldMask}}function Ha(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const i=e.data.field(n);t.set(n,i)}})),t}function Ga(e,t,n){const i=new Map;Fi(e.length===n.length);for(let r=0;r<n.length;r++){const s=e[r],o=s.transform,a=t.data.field(s.field);i.set(s.field,Ia(o,a,n[r]))}return i}function Za(e,t,n){const i=new Map;for(const r of e){const e=r.transform,s=n.data.field(r.field);i.set(r.field,_a(e,s,t))}return i}class Ka extends Ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Wa extends Ma{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,n,i){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=i}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let i=0;i<this.mutations.length;i++){const t=this.mutations[i];t.key.isEqual(e.key)&&Fa(t,e,n[i])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=Ba(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=Ba(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=la();return this.mutations.forEach((i=>{const r=e.get(i.key),s=r.overlayedDocument;let o=this.applyToLocalView(s,r.mutatedFields);o=t.has(i.key)?null:o;const a=Va(s,o);null!==a&&n.set(i.key,a),s.isValidDocument()||s.convertToNoDocument(sr.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),pa())}isEqual(e){return this.batchId===e.batchId&&nr(this.mutations,e.mutations,((e,t)=>ja(e,t)))&&nr(this.baseMutations,e.baseMutations,((e,t)=>ja(e,t)))}}class Ya{constructor(e,t,n,i){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=i}static from(e,t,n){Fi(e.mutations.length===n.length);let i=da;const r=e.mutations;for(let s=0;s<r.length;s++)i=i.insert(r[s].key,n[s].version);return new Ya(e,t,n,i)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xa{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ja{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ec,tc;function nc(e){switch(e){default:return Vi();case ji.CANCELLED:case ji.UNKNOWN:case ji.DEADLINE_EXCEEDED:case ji.RESOURCE_EXHAUSTED:case ji.INTERNAL:case ji.UNAVAILABLE:case ji.UNAUTHENTICATED:return!1;case ji.INVALID_ARGUMENT:case ji.NOT_FOUND:case ji.ALREADY_EXISTS:case ji.PERMISSION_DENIED:case ji.FAILED_PRECONDITION:case ji.ABORTED:case ji.OUT_OF_RANGE:case ji.UNIMPLEMENTED:case ji.DATA_LOSS:return!0}}function ic(e){if(void 0===e)return Pi("GRPC error has no .code"),ji.UNKNOWN;switch(e){case ec.OK:return ji.OK;case ec.CANCELLED:return ji.CANCELLED;case ec.UNKNOWN:return ji.UNKNOWN;case ec.DEADLINE_EXCEEDED:return ji.DEADLINE_EXCEEDED;case ec.RESOURCE_EXHAUSTED:return ji.RESOURCE_EXHAUSTED;case ec.INTERNAL:return ji.INTERNAL;case ec.UNAVAILABLE:return ji.UNAVAILABLE;case ec.UNAUTHENTICATED:return ji.UNAUTHENTICATED;case ec.INVALID_ARGUMENT:return ji.INVALID_ARGUMENT;case ec.NOT_FOUND:return ji.NOT_FOUND;case ec.ALREADY_EXISTS:return ji.ALREADY_EXISTS;case ec.PERMISSION_DENIED:return ji.PERMISSION_DENIED;case ec.FAILED_PRECONDITION:return ji.FAILED_PRECONDITION;case ec.ABORTED:return ji.ABORTED;case ec.OUT_OF_RANGE:return ji.OUT_OF_RANGE;case ec.UNIMPLEMENTED:return ji.UNIMPLEMENTED;case ec.DATA_LOSS:return ji.DATA_LOSS;default:return Vi()}}(tc=ec||(ec={}))[tc.OK=0]="OK",tc[tc.CANCELLED=1]="CANCELLED",tc[tc.UNKNOWN=2]="UNKNOWN",tc[tc.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",tc[tc.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",tc[tc.NOT_FOUND=5]="NOT_FOUND",tc[tc.ALREADY_EXISTS=6]="ALREADY_EXISTS",tc[tc.PERMISSION_DENIED=7]="PERMISSION_DENIED",tc[tc.UNAUTHENTICATED=16]="UNAUTHENTICATED",tc[tc.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",tc[tc.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",tc[tc.ABORTED=10]="ABORTED",tc[tc.OUT_OF_RANGE=11]="OUT_OF_RANGE",tc[tc.UNIMPLEMENTED=12]="UNIMPLEMENTED",tc[tc.INTERNAL=13]="INTERNAL",tc[tc.UNAVAILABLE=14]="UNAVAILABLE",tc[tc.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rc{constructor(){this.onExistenceFilterMismatchCallbacks=new Map}static get instance(){return sc}static getOrCreateInstance(){return null===sc&&(sc=new rc),sc}onExistenceFilterMismatch(e){const t=Symbol();return this.onExistenceFilterMismatchCallbacks.set(t,e),()=>this.onExistenceFilterMismatchCallbacks.delete(t)}notifyOnExistenceFilterMismatch(e){this.onExistenceFilterMismatchCallbacks.forEach((t=>t(e)))}}let sc=null;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oc{constructor(e,t,n,i,r){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=i,this.resolvedLimboDocuments=r}static createSynthesizedRemoteEventForCurrentChange(e,t,n){const i=new Map;return i.set(e,ac.createSynthesizedTargetChangeForCurrentChange(e,t,n)),new oc(sr.min(),i,ga(),sa(),pa())}}class ac{constructor(e,t,n,i,r){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=i,this.removedDocuments=r}static createSynthesizedTargetChangeForCurrentChange(e,t,n){return new ac(n,t,pa(),pa(),pa())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cc{constructor(e,t,n,i){this.It=e,this.removedTargetIds=t,this.key=n,this.Tt=i}}class uc{constructor(e,t){this.targetId=e,this.Et=t}}class lc{constructor(e,t,n=ks.EMPTY_BYTE_STRING,i=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=i}}class hc{constructor(){this.At=0,this.Rt=pc(),this.vt=ks.EMPTY_BYTE_STRING,this.bt=!1,this.Pt=!0}get current(){return this.bt}get resumeToken(){return this.vt}get Vt(){return 0!==this.At}get St(){return this.Pt}Dt(e){e.approximateByteSize()>0&&(this.Pt=!0,this.vt=e)}Ct(){let e=pa(),t=pa(),n=pa();return this.Rt.forEach(((i,r)=>{switch(r){case 0:e=e.add(i);break;case 2:t=t.add(i);break;case 1:n=n.add(i);break;default:Vi()}})),new ac(this.vt,this.bt,e,t,n)}xt(){this.Pt=!1,this.Rt=pc()}Nt(e,t){this.Pt=!0,this.Rt=this.Rt.insert(e,t)}kt(e){this.Pt=!0,this.Rt=this.Rt.remove(e)}Ot(){this.At+=1}$t(){this.At-=1}Mt(){this.Pt=!0,this.bt=!0}}class dc{constructor(e){this.Ft=e,this.Bt=new Map,this.Lt=sa(),this.qt=fc(),this.Ut=new ws(tr)}Kt(e){for(const t of e.It)e.Tt&&e.Tt.isFoundDocument()?this.Gt(t,e.Tt):this.Qt(t,e.key,e.Tt);for(const t of e.removedTargetIds)this.Qt(t,e.key,e.Tt)}zt(e){this.forEachTarget(e,(t=>{const n=this.jt(t);switch(e.state){case 0:this.Wt(t)&&n.Dt(e.resumeToken);break;case 1:n.$t(),n.Vt||n.xt(),n.Dt(e.resumeToken);break;case 2:n.$t(),n.Vt||this.removeTarget(t);break;case 3:this.Wt(t)&&(n.Mt(),n.Dt(e.resumeToken));break;case 4:this.Wt(t)&&(this.Ht(t),n.Dt(e.resumeToken));break;default:Vi()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Bt.forEach(((e,n)=>{this.Wt(n)&&t(n)}))}Jt(e){var t;const n=e.targetId,i=e.Et.count,r=this.Yt(n);if(r){const s=r.target;if(Po(s))if(0===i){const e=new lr(s.path);this.Qt(n,e,so.newNoDocument(e,sr.min()))}else Fi(1===i);else{const r=this.Zt(n);r!==i&&(this.Ht(n),this.Ut=this.Ut.add(n),null===(t=rc.instance)||void 0===t||t.notifyOnExistenceFilterMismatch({localCacheCount:r,existenceFilterCount:e.Et.count}))}}}Xt(e){const t=new Map;this.Bt.forEach(((n,i)=>{const r=this.Yt(i);if(r){if(n.current&&Po(r.target)){const t=new lr(r.target.path);null!==this.Lt.get(t)||this.te(i,t)||this.Qt(i,t,so.newNoDocument(t,e))}n.St&&(t.set(i,n.Ct()),n.xt())}}));let n=pa();this.qt.forEach(((e,t)=>{let i=!0;t.forEachWhile((e=>{const t=this.Yt(e);return!t||2===t.purpose||(i=!1,!1)})),i&&(n=n.add(e))})),this.Lt.forEach(((t,n)=>n.setReadTime(e)));const i=new oc(e,t,this.Ut,this.Lt,n);return this.Lt=sa(),this.qt=fc(),this.Ut=new ws(tr),i}Gt(e,t){if(!this.Wt(e))return;const n=this.te(e,t.key)?2:0;this.jt(e).Nt(t.key,n),this.Lt=this.Lt.insert(t.key,t),this.qt=this.qt.insert(t.key,this.ee(t.key).add(e))}Qt(e,t,n){if(!this.Wt(e))return;const i=this.jt(e);this.te(e,t)?i.Nt(t,1):i.kt(t),this.qt=this.qt.insert(t,this.ee(t).delete(e)),n&&(this.Lt=this.Lt.insert(t,n))}removeTarget(e){this.Bt.delete(e)}Zt(e){const t=this.jt(e).Ct();return this.Ft.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Ot(e){this.jt(e).Ot()}jt(e){let t=this.Bt.get(e);return t||(t=new hc,this.Bt.set(e,t)),t}ee(e){let t=this.qt.get(e);return t||(t=new ws(tr),this.qt=this.qt.insert(e,t)),t}Wt(e){const t=null!==this.Yt(e);return t||Li("WatchChangeAggregator","Detected inactive target",e),t}Yt(e){const t=this.Bt.get(e);return t&&t.Vt?null:this.Ft.ne(e)}Ht(e){this.Bt.set(e,new hc),this.Ft.getRemoteKeysForTarget(e).forEach((t=>{this.Qt(e,t,null)}))}te(e,t){return this.Ft.getRemoteKeysForTarget(e).has(t)}}function fc(){return new vs(lr.comparator)}function pc(){return new vs(lr.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mc=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),gc=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})(),vc=(()=>{const e={and:"AND",or:"OR"};return e})();class yc{constructor(e,t){this.databaseId=e,this.useProto3Json=t}}function bc(e,t){return e.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function wc(e,t){return e.useProto3Json?t.toBase64():t.toUint8Array()}function _c(e,t){return bc(e,t.toTimestamp())}function Ic(e){return Fi(!!e),sr.fromTimestamp(function(e){const t=xs(e);return new rr(t.seconds,t.nanos)}(e))}function Sc(e,t){return function(e){return new ar(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Tc(e){const t=ar.fromString(e);return Fi(Qc(t)),t}function Ec(e,t){return Sc(e.databaseId,t.path)}function kc(e,t){const n=Tc(t);if(n.get(1)!==e.databaseId.projectId)throw new zi(ji.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new zi(ji.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new lr(Oc(n))}function Cc(e,t){return Sc(e.databaseId,t)}function xc(e){const t=Tc(e);return 4===t.length?ar.emptyPath():Oc(t)}function Ac(e){return new ar(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function Oc(e){return Fi(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function Nc(e,t,n){return{name:Ec(e,t),fields:n.value.mapValue.fields}}function Dc(e,t,n){const i=kc(e,t.name),r=Ic(t.updateTime),s=t.createTime?Ic(t.createTime):sr.min(),o=new io({mapValue:{fields:t.fields}}),a=so.newFoundDocument(i,r,s,o);return n&&a.setHasCommittedMutations(),n?a.setHasCommittedMutations():a}function Rc(e,t){return"found"in t?function(e,t){Fi(!!t.found),t.found.name,t.found.updateTime;const n=kc(e,t.found.name),i=Ic(t.found.updateTime),r=t.found.createTime?Ic(t.found.createTime):sr.min(),s=new io({mapValue:{fields:t.found.fields}});return so.newFoundDocument(n,i,r,s)}(e,t):"missing"in t?function(e,t){Fi(!!t.missing),Fi(!!t.readTime);const n=kc(e,t.missing),i=Ic(t.readTime);return so.newNoDocument(n,i)}(e,t):Vi()}function Lc(e,t){let n;if("targetChange"in t){t.targetChange;const i=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Vi()}(t.targetChange.targetChangeType||"NO_CHANGE"),r=t.targetChange.targetIds||[],s=function(e,t){return e.useProto3Json?(Fi(void 0===t||"string"==typeof t),ks.fromBase64String(t||"")):(Fi(void 0===t||t instanceof Uint8Array),ks.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?ji.UNKNOWN:ic(e.code);return new zi(t,e.message||"")}(o);n=new lc(i,r,s,a||null)}else if("documentChange"in t){t.documentChange;const i=t.documentChange;i.document,i.document.name,i.document.updateTime;const r=kc(e,i.document.name),s=Ic(i.document.updateTime),o=i.document.createTime?Ic(i.document.createTime):sr.min(),a=new io({mapValue:{fields:i.document.fields}}),c=so.newFoundDocument(r,s,o,a),u=i.targetIds||[],l=i.removedTargetIds||[];n=new cc(u,l,c.key,c)}else if("documentDelete"in t){t.documentDelete;const i=t.documentDelete;i.document;const r=kc(e,i.document),s=i.readTime?Ic(i.readTime):sr.min(),o=so.newNoDocument(r,s),a=i.removedTargetIds||[];n=new cc([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const i=t.documentRemove;i.document;const r=kc(e,i.document),s=i.removedTargetIds||[];n=new cc([],s,r,null)}else{if(!("filter"in t))return Vi();{t.filter;const e=t.filter;e.targetId;const i=e.count||0,r=new Ja(i),s=e.targetId;n=new uc(s,r)}}return n}function Pc(e,t){let n;if(t instanceof za)n={update:Nc(e,t.key,t.value)};else if(t instanceof Ka)n={delete:Ec(e,t.key)};else if(t instanceof qa)n={update:Nc(e,t.key,t.data),updateMask:Wc(t.fieldMask)};else{if(!(t instanceof Wa))return Vi();n={verify:Ec(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Ta)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof Ea)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Ca)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Aa)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Vi()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:_c(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Vi()}(e,t.precondition)),n}function $c(e,t){const n=t.currentDocument?function(e){return void 0!==e.updateTime?Pa.updateTime(Ic(e.updateTime)):void 0!==e.exists?Pa.exists(e.exists):Pa.none()}(t.currentDocument):Pa.none(),i=t.updateTransforms?t.updateTransforms.map((t=>function(e,t){let n=null;if("setToServerValue"in t)Fi("REQUEST_TIME"===t.setToServerValue),n=new Ta;else if("appendMissingElements"in t){const e=t.appendMissingElements.values||[];n=new Ea(e)}else if("removeAllFromArray"in t){const e=t.removeAllFromArray.values||[];n=new Ca(e)}else"increment"in t?n=new Aa(e,t.increment):Vi();const i=ur.fromServerFormat(t.fieldPath);return new Da(i,n)}(e,t))):[];if(t.update){t.update.name;const r=kc(e,t.update.name),s=new io({mapValue:{fields:t.update.fields}});if(t.updateMask){const e=function(e){const t=e.fieldPaths||[];return new Ss(t.map((e=>ur.fromServerFormat(e))))}(t.updateMask);return new qa(r,s,e,n,i)}return new za(r,s,n,i)}if(t.delete){const i=kc(e,t.delete);return new Ka(i,n)}if(t.verify){const i=kc(e,t.verify);return new Wa(i,n)}return Vi()}function Mc(e,t){return e&&e.length>0?(Fi(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Ic(e.updateTime):Ic(t);return n.isEqual(sr.min())&&(n=Ic(t)),new La(n,e.transformResults||[])}(e,t)))):[]}function Vc(e,t){return{documents:[Cc(e,t.path)]}}function Fc(e,t){const n={structuredQuery:{}},i=t.path;null!==t.collectionGroup?(n.parent=Cc(e,i),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=Cc(e,i.popLast()),n.structuredQuery.from=[{collectionId:i.lastSegment()}]);const r=function(e){if(0!==e.length)return Kc(po.create(e,"and"))}(t.filters);r&&(n.structuredQuery.where=r);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Gc(e.field),direction:zc(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.useProto3Json||$r(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Bc(e){let t=xc(e.parent);const n=e.structuredQuery,i=n.from?n.from.length:0;let r=null;if(i>0){Fi(1===i);const e=n.from[0];e.allDescendants?r=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=function(e){const t=jc(e);return t instanceof po&&vo(t)?t.getFilters():[t]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new uo(Zc(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,$r(t)?null:t}(n.limit));let c=null;n.startAt&&(c=function(e){const t=!!e.before,n=e.values||[];return new oo(n,t)}(n.startAt));let u=null;return n.endAt&&(u=function(e){const t=!e.before,n=e.values||[];return new oo(n,t)}(n.endAt)),Bo(t,r,o,s,a,"F",c,u)}function Uc(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Vi()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function jc(e){return void 0!==e.unaryFilter?function(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Zc(e.unaryFilter.field);return fo.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Zc(e.unaryFilter.field);return fo.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const i=Zc(e.unaryFilter.field);return fo.create(i,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const r=Zc(e.unaryFilter.field);return fo.create(r,"!=",{nullValue:"NULL_VALUE"});default:return Vi()}}(e):void 0!==e.fieldFilter?function(e){return fo.create(Zc(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Vi()}}(e.fieldFilter.op),e.fieldFilter.value)}(e):void 0!==e.compositeFilter?function(e){return po.create(e.compositeFilter.filters.map((e=>jc(e))),function(e){switch(e){case"AND":return"and";case"OR":return"or";default:return Vi()}}(e.compositeFilter.op))}(e):Vi()}function zc(e){return mc[e]}function qc(e){return gc[e]}function Hc(e){return vc[e]}function Gc(e){return{fieldPath:e.canonicalString()}}function Zc(e){return ur.fromServerFormat(e.fieldPath)}function Kc(e){return e instanceof fo?function(e){if("=="===e.op){if(Ws(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NAN"}};if(Ks(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(Ws(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NOT_NAN"}};if(Ks(e.value))return{unaryFilter:{field:Gc(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Gc(e.field),op:qc(e.op),value:e.value}}}(e):e instanceof po?function(e){const t=e.getFilters().map((e=>Kc(e)));return 1===t.length?t[0]:{compositeFilter:{op:Hc(e.op),filters:t}}}(e):Vi()}function Wc(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Qc(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yc{constructor(e,t,n,i,r=sr.min(),s=sr.min(),o=ks.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=i,this.snapshotVersion=r,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Yc(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Yc(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Yc(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{constructor(e){this.se=e}}function Jc(e,t){let n;if(t.document)n=Dc(e.se,t.document,!!t.hasCommittedMutations);else if(t.noDocument){const e=lr.fromSegments(t.noDocument.path),i=iu(t.noDocument.readTime);n=so.newNoDocument(e,i),t.hasCommittedMutations&&n.setHasCommittedMutations()}else{if(!t.unknownDocument)return Vi();{const e=lr.fromSegments(t.unknownDocument.path),i=iu(t.unknownDocument.version);n=so.newUnknownDocument(e,i)}}return t.readTime&&n.setReadTime(function(e){const t=new rr(e[0],e[1]);return sr.fromTimestamp(t)}(t.readTime)),n}function eu(e,t){const n=t.key,i={prefixPath:n.getCollectionPath().popLast().toArray(),collectionGroup:n.collectionGroup,documentId:n.path.lastSegment(),readTime:tu(t.readTime),hasCommittedMutations:t.hasCommittedMutations};if(t.isFoundDocument())i.document=function(e,t){return{name:Ec(e,t.key),fields:t.data.value.mapValue.fields,updateTime:bc(e,t.version.toTimestamp()),createTime:bc(e,t.createTime.toTimestamp())}}(e.se,t);else if(t.isNoDocument())i.noDocument={path:n.path.toArray(),readTime:nu(t.version)};else{if(!t.isUnknownDocument())return Vi();i.unknownDocument={path:n.path.toArray(),version:nu(t.version)}}return i}function tu(e){const t=e.toTimestamp();return[t.seconds,t.nanoseconds]}function nu(e){const t=e.toTimestamp();return{seconds:t.seconds,nanoseconds:t.nanoseconds}}function iu(e){const t=new rr(e.seconds,e.nanoseconds);return sr.fromTimestamp(t)}function ru(e,t){const n=(t.baseMutations||[]).map((t=>$c(e.se,t)));for(let s=0;s<t.mutations.length-1;++s){const e=t.mutations[s];if(s+1<t.mutations.length&&void 0!==t.mutations[s+1].transform){const n=t.mutations[s+1];e.updateTransforms=n.transform.fieldTransforms,t.mutations.splice(s+1,1),++s}}const i=t.mutations.map((t=>$c(e.se,t))),r=rr.fromMillis(t.localWriteTimeMs);return new Qa(t.batchId,r,n,i)}function su(e){const t=iu(e.readTime),n=void 0!==e.lastLimboFreeSnapshotVersion?iu(e.lastLimboFreeSnapshotVersion):sr.min();let i;var r;return void 0!==e.query.documents?(Fi(1===(r=e.query).documents.length),i=Zo(Uo(xc(r.documents[0])))):i=function(e){return Zo(Bc(e))}(e.query),new Yc(i,e.targetId,0,e.lastListenSequenceNumber,t,n,ks.fromBase64String(e.resumeToken))}function ou(e,t){const n=nu(t.snapshotVersion),i=nu(t.lastLimboFreeSnapshotVersion);let r;r=Po(t.target)?Vc(e.se,t.target):Fc(e.se,t.target);const s=t.resumeToken.toBase64();return{targetId:t.targetId,canonicalId:Ro(t.target),readTime:n,resumeToken:s,lastListenSequenceNumber:t.sequenceNumber,lastLimboFreeSnapshotVersion:i,query:r}}function au(e){const t=Bc({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?Wo(t,t.limit,"L"):t}function cu(e,t){return new Xa(t.largestBatchId,$c(e.se,t.overlayMutation))}function uu(e,t){const n=t.path.lastSegment();return[e,Fr(t.path.popLast()),n]}function lu(e,t,n,i){return{indexId:e,uid:t.uid||"",sequenceNumber:n,readTime:nu(i.readTime),documentKey:Fr(i.documentKey.path),largestBatchId:i.largestBatchId}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hu{getBundleMetadata(e,t){return du(e).get(t).next((e=>{if(e)return{id:(t=e).bundleId,createTime:iu(t.createTime),version:t.version};var t}))}saveBundleMetadata(e,t){return du(e).put({bundleId:(n=t).id,createTime:nu(Ic(n.createTime)),version:n.version});var n}getNamedQuery(e,t){return fu(e).get(t).next((e=>{if(e)return{name:(t=e).name,query:au(t.bundledQuery),readTime:iu(t.readTime)};var t}))}saveNamedQuery(e,t){return fu(e).put(function(e){return{name:e.name,readTime:nu(Ic(e.readTime)),bundledQuery:e.bundledQuery}}(t))}}function du(e){return fs(e,"bundles")}function fu(e){return fs(e,"namedQueries")}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pu{constructor(e,t){this.serializer=e,this.userId=t}static ie(e,t){const n=t.uid||"";return new pu(e,n)}getOverlay(e,t){return mu(e).get(uu(this.userId,t)).next((e=>e?cu(this.serializer,e):null))}getOverlays(e,t){const n=ua();return Sr.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){const i=[];return n.forEach(((n,r)=>{const s=new Xa(t,r);i.push(this.re(e,s))})),Sr.waitFor(i)}removeOverlaysForBatchId(e,t,n){const i=new Set;t.forEach((e=>i.add(Fr(e.getCollectionPath()))));const r=[];return i.forEach((t=>{const i=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,n+1],!1,!0);r.push(mu(e).J("collectionPathOverlayIndex",i))})),Sr.waitFor(r)}getOverlaysForCollection(e,t,n){const i=ua(),r=Fr(t),s=IDBKeyRange.bound([this.userId,r,n],[this.userId,r,Number.POSITIVE_INFINITY],!0);return mu(e).j("collectionPathOverlayIndex",s).next((e=>{for(const t of e){const e=cu(this.serializer,t);i.set(e.getKey(),e)}return i}))}getOverlaysForCollectionGroup(e,t,n,i){const r=ua();let s;const o=IDBKeyRange.bound([this.userId,t,n],[this.userId,t,Number.POSITIVE_INFINITY],!0);return mu(e).Z({index:"collectionGroupOverlayIndex",range:o},((e,t,n)=>{const o=cu(this.serializer,t);r.size()<i||o.largestBatchId===s?(r.set(o.getKey(),o),s=o.largestBatchId):n.done()})).next((()=>r))}re(e,t){return mu(e).put(function(e,t,n){const[i,r,s]=uu(t,n.mutation.key);return{userId:t,collectionPath:r,documentId:s,collectionGroup:n.mutation.key.getCollectionGroup(),largestBatchId:n.largestBatchId,overlayMutation:Pc(e.se,n.mutation)}}(this.serializer,this.userId,t))}}function mu(e){return fs(e,"documentOverlays")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gu{constructor(){}oe(e,t){this.ue(e,t),t.ce()}ue(e,t){if("nullValue"in e)this.ae(t,5);else if("booleanValue"in e)this.ae(t,10),t.he(e.booleanValue?1:0);else if("integerValue"in e)this.ae(t,15),t.he(As(e.integerValue));else if("doubleValue"in e){const n=As(e.doubleValue);isNaN(n)?this.ae(t,13):(this.ae(t,15),Mr(n)?t.he(0):t.he(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ae(t,20),"string"==typeof n?t.le(n):(t.le(`${n.seconds||""}`),t.he(n.nanos||0))}else if("stringValue"in e)this.fe(e.stringValue,t),this.de(t);else if("bytesValue"in e)this.ae(t,30),t.we(Os(e.bytesValue)),this.de(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ae(t,45),t.he(n.latitude||0),t.he(n.longitude||0)}else"mapValue"in e?Xs(e)?this.ae(t,Number.MAX_SAFE_INTEGER):(this.me(e.mapValue,t),this.de(t)):"arrayValue"in e?(this.ge(e.arrayValue,t),this.de(t)):Vi()}fe(e,t){this.ae(t,25),this.ye(e,t)}ye(e,t){t.le(e)}me(e,t){const n=e.fields||{};this.ae(t,55);for(const i of Object.keys(n))this.fe(i,t),this.ue(n[i],t)}ge(e,t){const n=e.values||[];this.ae(t,50);for(const i of n)this.ue(i,t)}_e(e,t){this.ae(t,37),lr.fromName(e).path.forEach((e=>{this.ae(t,60),this.ye(e,t)}))}ae(e,t){e.he(t)}de(e){e.he(2)}}function vu(e){if(0===e)return 8;let t=0;return e>>4==0&&(t+=4,e<<=4),e>>6==0&&(t+=2,e<<=2),e>>7==0&&(t+=1),t}function yu(e){const t=64-function(e){let t=0;for(let n=0;n<8;++n){const i=vu(255&e[n]);if(t+=i,8!==i)break}return t}(e);return Math.ceil(t/8)}gu.pe=new gu;class bu{constructor(){this.buffer=new Uint8Array(1024),this.position=0}Ie(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Te(n.value),n=t.next();this.Ee()}Ae(e){const t=e[Symbol.iterator]();let n=t.next();for(;!n.done;)this.Re(n.value),n=t.next();this.ve()}be(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Te(e);else if(e<2048)this.Te(960|e>>>6),this.Te(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Te(480|e>>>12),this.Te(128|63&e>>>6),this.Te(128|63&e);else{const e=t.codePointAt(0);this.Te(240|e>>>18),this.Te(128|63&e>>>12),this.Te(128|63&e>>>6),this.Te(128|63&e)}}this.Ee()}Pe(e){for(const t of e){const e=t.charCodeAt(0);if(e<128)this.Re(e);else if(e<2048)this.Re(960|e>>>6),this.Re(128|63&e);else if(t<"\ud800"||"\udbff"<t)this.Re(480|e>>>12),this.Re(128|63&e>>>6),this.Re(128|63&e);else{const e=t.codePointAt(0);this.Re(240|e>>>18),this.Re(128|63&e>>>12),this.Re(128|63&e>>>6),this.Re(128|63&e)}}this.ve()}Ve(e){const t=this.Se(e),n=yu(t);this.De(1+n),this.buffer[this.position++]=255&n;for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=255&t[i]}Ce(e){const t=this.Se(e),n=yu(t);this.De(1+n),this.buffer[this.position++]=~(255&n);for(let i=t.length-n;i<t.length;++i)this.buffer[this.position++]=~(255&t[i])}xe(){this.Ne(255),this.Ne(255)}ke(){this.Oe(255),this.Oe(255)}reset(){this.position=0}seed(e){this.De(e.length),this.buffer.set(e,this.position),this.position+=e.length}$e(){return this.buffer.slice(0,this.position)}Se(e){const t=function(e){const t=new DataView(new ArrayBuffer(8));return t.setFloat64(0,e,!1),new Uint8Array(t.buffer)}(e),n=0!=(128&t[0]);t[0]^=n?255:128;for(let i=1;i<t.length;++i)t[i]^=n?255:0;return t}Te(e){const t=255&e;0===t?(this.Ne(0),this.Ne(255)):255===t?(this.Ne(255),this.Ne(0)):this.Ne(t)}Re(e){const t=255&e;0===t?(this.Oe(0),this.Oe(255)):255===t?(this.Oe(255),this.Oe(0)):this.Oe(e)}Ee(){this.Ne(0),this.Ne(1)}ve(){this.Oe(0),this.Oe(1)}Ne(e){this.De(1),this.buffer[this.position++]=e}Oe(e){this.De(1),this.buffer[this.position++]=~e}De(e){const t=e+this.position;if(t<=this.buffer.length)return;let n=2*this.buffer.length;n<t&&(n=t);const i=new Uint8Array(n);i.set(this.buffer),this.buffer=i}}class wu{constructor(e){this.Me=e}we(e){this.Me.Ie(e)}le(e){this.Me.be(e)}he(e){this.Me.Ve(e)}ce(){this.Me.xe()}}class _u{constructor(e){this.Me=e}we(e){this.Me.Ae(e)}le(e){this.Me.Pe(e)}he(e){this.Me.Ce(e)}ce(){this.Me.ke()}}class Iu{constructor(){this.Me=new bu,this.Fe=new wu(this.Me),this.Be=new _u(this.Me)}seed(e){this.Me.seed(e)}Le(e){return 0===e?this.Fe:this.Be}$e(){return this.Me.$e()}reset(){this.Me.reset()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Su{constructor(e,t,n,i){this.indexId=e,this.documentKey=t,this.arrayValue=n,this.directionalValue=i}qe(){const e=this.directionalValue.length,t=0===e||255===this.directionalValue[e-1]?e+1:e,n=new Uint8Array(t);return n.set(this.directionalValue,0),t!==e?n.set([0],this.directionalValue.length):++n[n.length-1],new Su(this.indexId,this.documentKey,this.arrayValue,n)}}function Tu(e,t){let n=e.indexId-t.indexId;return 0!==n?n:(n=Eu(e.arrayValue,t.arrayValue),0!==n?n:(n=Eu(e.directionalValue,t.directionalValue),0!==n?n:lr.comparator(e.documentKey,t.documentKey)))}function Eu(e,t){for(let n=0;n<e.length&&n<t.length;++n){const i=e[n]-t[n];if(0!==i)return i}return e.length-t.length}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ku{constructor(e){this.collectionId=null!=e.collectionGroup?e.collectionGroup:e.path.lastSegment(),this.Ue=e.orderBy,this.Ke=[];for(const t of e.filters){const e=t;e.isInequality()?this.Ge=e:this.Ke.push(e)}}Qe(e){Fi(e.collectionGroup===this.collectionId);const t=dr(e);if(void 0!==t&&!this.ze(t))return!1;const n=fr(e);let i=0,r=0;for(;i<n.length&&this.ze(n[i]);++i);if(i===n.length)return!0;if(void 0!==this.Ge){const e=n[i];if(!this.je(this.Ge,e)||!this.We(this.Ue[r++],e))return!1;++i}for(;i<n.length;++i){const e=n[i];if(r>=this.Ue.length||!this.We(this.Ue[r++],e))return!1}return!0}ze(e){for(const t of this.Ke)if(this.je(t,e))return!0;return!1}je(e,t){if(void 0===e||!e.field.isEqual(t.fieldPath))return!1;const n="array-contains"===e.op||"array-contains-any"===e.op;return 2===t.kind===n}We(e,t){return!!e.field.isEqual(t.fieldPath)&&(0===t.kind&&"asc"===e.dir||1===t.kind&&"desc"===e.dir)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Cu(e){var t,n;if(Fi(e instanceof fo||e instanceof po),e instanceof fo){if(e instanceof xo){const i=(null===(n=null===(t=e.value.arrayValue)||void 0===t?void 0:t.values)||void 0===n?void 0:n.map((t=>fo.create(e.field,"==",t))))||[];return po.create(i,"or")}return e}const i=e.filters.map((e=>Cu(e)));return po.create(i,e.op)}function xu(e){if(0===e.getFilters().length)return[];const t=Du(Cu(e));return Fi(Nu(t)),Au(t)||Ou(t)?[t]:t.getFilters()}function Au(e){return e instanceof fo}function Ou(e){return e instanceof po&&vo(e)}function Nu(e){return Au(e)||Ou(e)||function(e){if(e instanceof po&&go(e)){for(const t of e.getFilters())if(!Au(t)&&!Ou(t))return!1;return!0}return!1}(e)}function Du(e){if(Fi(e instanceof fo||e instanceof po),e instanceof fo)return e;if(1===e.filters.length)return Du(e.filters[0]);const t=e.filters.map((e=>Du(e)));let n=po.create(t,e.op);return n=Pu(n),Nu(n)?n:(Fi(n instanceof po),Fi(mo(n)),Fi(n.filters.length>1),n.filters.reduce(((e,t)=>Ru(e,t))))}function Ru(e,t){let n;return Fi(e instanceof fo||e instanceof po),Fi(t instanceof fo||t instanceof po),n=e instanceof fo?t instanceof fo?function(e,t){return po.create([e,t],"and")}(e,t):Lu(e,t):t instanceof fo?Lu(t,e):function(e,t){if(Fi(e.filters.length>0&&t.filters.length>0),mo(e)&&mo(t))return _o(e,t.getFilters());const n=go(e)?e:t,i=go(e)?t:e,r=n.filters.map((e=>Ru(e,i)));return po.create(r,"or")}(e,t),Pu(n)}function Lu(e,t){if(mo(t))return _o(t,e.getFilters());{const n=t.filters.map((t=>Ru(e,t)));return po.create(n,"or")}}function Pu(e){if(Fi(e instanceof fo||e instanceof po),e instanceof fo)return e;const t=e.getFilters();if(1===t.length)return Pu(t[0]);if(yo(e))return e;const n=t.map((e=>Pu(e))),i=[];return n.forEach((t=>{t instanceof fo?i.push(t):t instanceof po&&(t.op===e.op?i.push(...t.filters):i.push(t))})),1===i.length?i[0]:po.create(i,e.op)
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class $u{constructor(){this.He=new Mu}addToCollectionParentIndex(e,t){return this.He.add(t),Sr.resolve()}getCollectionParents(e,t){return Sr.resolve(this.He.getEntries(t))}addFieldIndex(e,t){return Sr.resolve()}deleteFieldIndex(e,t){return Sr.resolve()}getDocumentsMatchingTarget(e,t){return Sr.resolve(null)}getIndexType(e,t){return Sr.resolve(0)}getFieldIndexes(e,t){return Sr.resolve([])}getNextCollectionGroupToUpdate(e){return Sr.resolve(null)}getMinOffset(e,t){return Sr.resolve(yr.min())}getMinOffsetFromCollectionGroup(e,t){return Sr.resolve(yr.min())}updateCollectionGroup(e,t,n){return Sr.resolve()}updateIndexEntries(e,t){return Sr.resolve()}}class Mu{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t]||new ws(ar.comparator),r=!i.has(n);return this.index[t]=i.add(n),r}has(e){const t=e.lastSegment(),n=e.popLast(),i=this.index[t];return i&&i.has(n)}getEntries(e){return(this.index[e]||new ws(ar.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vu=new Uint8Array(0);class Fu{constructor(e,t){this.user=e,this.databaseId=t,this.Je=new Mu,this.Ye=new ia((e=>Ro(e)),((e,t)=>Lo(e,t))),this.uid=e.uid||""}addToCollectionParentIndex(e,t){if(!this.Je.has(t)){const n=t.lastSegment(),i=t.popLast();e.addOnCommittedListener((()=>{this.Je.add(t)}));const r={collectionId:n,parent:Fr(i)};return Bu(e).put(r)}return Sr.resolve()}getCollectionParents(e,t){const n=[],i=IDBKeyRange.bound([t,""],[ir(t),""],!1,!0);return Bu(e).j(i).next((e=>{for(const i of e){if(i.collectionId!==t)break;n.push(jr(i.parent))}return n}))}addFieldIndex(e,t){const n=ju(e),i=function(e){return{indexId:e.indexId,collectionGroup:e.collectionGroup,fields:e.fields.map((e=>[e.fieldPath.canonicalString(),e.kind]))}}(t);delete i.indexId;const r=n.add(i);if(t.indexState){const n=zu(e);return r.next((e=>{n.put(lu(e,this.user,t.indexState.sequenceNumber,t.indexState.offset))}))}return r.next()}deleteFieldIndex(e,t){const n=ju(e),i=zu(e),r=Uu(e);return n.delete(t.indexId).next((()=>i.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0)))).next((()=>r.delete(IDBKeyRange.bound([t.indexId],[t.indexId+1],!1,!0))))}getDocumentsMatchingTarget(e,t){const n=Uu(e);let i=!0;const r=new Map;return Sr.forEach(this.Ze(t),(t=>this.Xe(e,t).next((e=>{i&&(i=!!e),r.set(t,e)})))).next((()=>{if(i){let e=pa();const i=[];return Sr.forEach(r,((r,s)=>{var o;Li("IndexedDbIndexManager",`Using index ${o=r,`id=${o.indexId}|cg=${o.collectionGroup}|f=${o.fields.map((e=>`${e.fieldPath}:${e.kind}`)).join(",")}`} to execute ${Ro(t)}`);const a=function(e,t){const n=dr(t);if(void 0===n)return null;for(const i of $o(e,n.fieldPath))switch(i.op){case"array-contains-any":return i.value.arrayValue.values||[];case"array-contains":return[i.value]}return null}(s,r),c=function(e,t){const n=new Map;for(const i of fr(t))for(const t of $o(e,i.fieldPath))switch(t.op){case"==":case"in":n.set(i.fieldPath.canonicalString(),t.value);break;case"not-in":case"!=":return n.set(i.fieldPath.canonicalString(),t.value),Array.from(n.values())}return null}(s,r),u=function(e,t){const n=[];let i=!0;for(const r of fr(t)){const t=0===r.kind?Mo(e,r.fieldPath,e.startAt):Vo(e,r.fieldPath,e.startAt);n.push(t.value),i&&(i=t.inclusive)}return new oo(n,i)}(s,r),l=function(e,t){const n=[];let i=!0;for(const r of fr(t)){const t=0===r.kind?Vo(e,r.fieldPath,e.endAt):Mo(e,r.fieldPath,e.endAt);n.push(t.value),i&&(i=t.inclusive)}return new oo(n,i)}(s,r),h=this.tn(r,s,u),d=this.tn(r,s,l),f=this.en(r,s,c),p=this.nn(r.indexId,a,h,u.inclusive,d,l.inclusive,f);return Sr.forEach(p,(r=>n.H(r,t.limit).next((t=>{t.forEach((t=>{const n=lr.fromSegments(t.documentKey);e.has(n)||(e=e.add(n),i.push(n))}))}))))})).next((()=>i))}return Sr.resolve(null)}))}Ze(e){let t=this.Ye.get(e);return t||(t=0===e.filters.length?[e]:xu(po.create(e.filters,"and")).map((t=>Do(e.path,e.collectionGroup,e.orderBy,t.getFilters(),e.limit,e.startAt,e.endAt))),this.Ye.set(e,t),t)}nn(e,t,n,i,r,s,o){const a=(null!=t?t.length:1)*Math.max(n.length,r.length),c=a/(null!=t?t.length:1),u=[];for(let l=0;l<a;++l){const a=t?this.sn(t[l/c]):Vu,h=this.rn(e,a,n[l%c],i),d=this.on(e,a,r[l%c],s),f=o.map((t=>this.rn(e,a,t,!0)));u.push(...this.createRange(h,d,f))}return u}rn(e,t,n,i){const r=new Su(e,lr.empty(),t,n);return i?r:r.qe()}on(e,t,n,i){const r=new Su(e,lr.empty(),t,n);return i?r.qe():r}Xe(e,t){const n=new ku(t),i=null!=t.collectionGroup?t.collectionGroup:t.path.lastSegment();return this.getFieldIndexes(e,i).next((e=>{let t=null;for(const i of e)n.Qe(i)&&(!t||i.fields.length>t.fields.length)&&(t=i);return t}))}getIndexType(e,t){let n=2;const i=this.Ze(t);return Sr.forEach(i,(t=>this.Xe(e,t).next((e=>{e?0!==n&&e.fields.length<function(e){let t=new ws(ur.comparator),n=!1;for(const i of e.filters)for(const e of i.getFlattenedFilters())e.field.isKeyField()||("array-contains"===e.op||"array-contains-any"===e.op?n=!0:t=t.add(e.field));for(const i of e.orderBy)i.field.isKeyField()||(t=t.add(i.field));return t.size+(n?1:0)}(t)&&(n=1):n=0})))).next((()=>function(e){return null!==e.limit}(t)&&i.length>1&&2===n?1:n))}un(e,t){const n=new Iu;for(const i of fr(e)){const e=t.data.field(i.fieldPath);if(null==e)return null;const r=n.Le(i.kind);gu.pe.oe(e,r)}return n.$e()}sn(e){const t=new Iu;return gu.pe.oe(e,t.Le(0)),t.$e()}cn(e,t){const n=new Iu;return gu.pe.oe(Hs(this.databaseId,t),n.Le(function(e){const t=fr(e);return 0===t.length?0:t[t.length-1].kind}(e))),n.$e()}en(e,t,n){if(null===n)return[];let i=[];i.push(new Iu);let r=0;for(const s of fr(e)){const e=n[r++];for(const n of i)if(this.an(t,s.fieldPath)&&Zs(e))i=this.hn(i,s,e);else{const t=n.Le(s.kind);gu.pe.oe(e,t)}}return this.ln(i)}tn(e,t,n){return this.en(e,t,n.position)}ln(e){const t=[];for(let n=0;n<e.length;++n)t[n]=e[n].$e();return t}hn(e,t,n){const i=[...e],r=[];for(const s of n.arrayValue.values||[])for(const e of i){const n=new Iu;n.seed(e.$e()),gu.pe.oe(s,n.Le(t.kind)),r.push(n)}return r}an(e,t){return!!e.filters.find((e=>e instanceof fo&&e.field.isEqual(t)&&("in"===e.op||"not-in"===e.op)))}getFieldIndexes(e,t){const n=ju(e),i=zu(e);return(t?n.j("collectionGroupIndex",IDBKeyRange.bound(t,t)):n.j()).next((e=>{const t=[];return Sr.forEach(e,(e=>i.get([e.indexId,this.uid]).next((n=>{t.push(function(e,t){const n=t?new mr(t.sequenceNumber,new yr(iu(t.readTime),new lr(jr(t.documentKey)),t.largestBatchId)):mr.empty(),i=e.fields.map((([e,t])=>new pr(ur.fromServerFormat(e),t)));return new hr(e.indexId,e.collectionGroup,i,n)}(e,n))})))).next((()=>t))}))}getNextCollectionGroupToUpdate(e){return this.getFieldIndexes(e).next((e=>0===e.length?null:(e.sort(((e,t)=>{const n=e.indexState.sequenceNumber-t.indexState.sequenceNumber;return 0!==n?n:tr(e.collectionGroup,t.collectionGroup)})),e[0].collectionGroup)))}updateCollectionGroup(e,t,n){const i=ju(e),r=zu(e);return this.fn(e).next((e=>i.j("collectionGroupIndex",IDBKeyRange.bound(t,t)).next((t=>Sr.forEach(t,(t=>r.put(lu(t.indexId,this.user,e,n))))))))}updateIndexEntries(e,t){const n=new Map;return Sr.forEach(t,((t,i)=>{const r=n.get(t.collectionGroup);return(r?Sr.resolve(r):this.getFieldIndexes(e,t.collectionGroup)).next((r=>(n.set(t.collectionGroup,r),Sr.forEach(r,(n=>this.dn(e,t,n).next((t=>{const r=this.wn(i,n);return t.isEqual(r)?Sr.resolve():this._n(e,i,n,t,r)})))))))}))}mn(e,t,n,i){return Uu(e).put({indexId:i.indexId,uid:this.uid,arrayValue:i.arrayValue,directionalValue:i.directionalValue,orderedDocumentKey:this.cn(n,t.key),documentKey:t.key.path.toArray()})}gn(e,t,n,i){return Uu(e).delete([i.indexId,this.uid,i.arrayValue,i.directionalValue,this.cn(n,t.key),t.key.path.toArray()])}dn(e,t,n){const i=Uu(e);let r=new ws(Tu);return i.Z({index:"documentKeyIndex",range:IDBKeyRange.only([n.indexId,this.uid,this.cn(n,t)])},((e,i)=>{r=r.add(new Su(n.indexId,t,i.arrayValue,i.directionalValue))})).next((()=>r))}wn(e,t){let n=new ws(Tu);const i=this.un(t,e);if(null==i)return n;const r=dr(t);if(null!=r){const s=e.data.field(r.fieldPath);if(Zs(s))for(const r of s.arrayValue.values||[])n=n.add(new Su(t.indexId,e.key,this.sn(r),i))}else n=n.add(new Su(t.indexId,e.key,Vu,i));return n}_n(e,t,n,i,r){Li("IndexedDbIndexManager","Updating index entries for document '%s'",t.key);const s=[];return function(e,t,n,i,r){const s=e.getIterator(),o=t.getIterator();let a=Is(s),c=Is(o);for(;a||c;){let e=!1,t=!1;if(a&&c){const i=n(a,c);i<0?t=!0:i>0&&(e=!0)}else null!=a?t=!0:e=!0;e?(i(c),c=Is(o)):t?(r(a),a=Is(s)):(a=Is(s),c=Is(o))}}(i,r,Tu,(i=>{s.push(this.mn(e,t,n,i))}),(i=>{s.push(this.gn(e,t,n,i))})),Sr.waitFor(s)}fn(e){let t=1;return zu(e).Z({index:"sequenceNumberIndex",reverse:!0,range:IDBKeyRange.upperBound([this.uid,Number.MAX_SAFE_INTEGER])},((e,n,i)=>{i.done(),t=n.sequenceNumber+1})).next((()=>t))}createRange(e,t,n){n=n.sort(((e,t)=>Tu(e,t))).filter(((e,t,n)=>!t||0!==Tu(e,n[t-1])));const i=[];i.push(e);for(const s of n){const n=Tu(s,e),r=Tu(s,t);if(0===n)i[0]=e.qe();else if(n>0&&r<0)i.push(s),i.push(s.qe());else if(r>0)break}i.push(t);const r=[];for(let s=0;s<i.length;s+=2){if(this.yn(i[s],i[s+1]))return[];const e=[i[s].indexId,this.uid,i[s].arrayValue,i[s].directionalValue,Vu,[]],t=[i[s+1].indexId,this.uid,i[s+1].arrayValue,i[s+1].directionalValue,Vu,[]];r.push(IDBKeyRange.bound(e,t))}return r}yn(e,t){return Tu(e,t)>0}getMinOffsetFromCollectionGroup(e,t){return this.getFieldIndexes(e,t).next(qu)}getMinOffset(e,t){return Sr.mapArray(this.Ze(t),(t=>this.Xe(e,t).next((e=>e||Vi())))).next(qu)}}function Bu(e){return fs(e,"collectionParents")}function Uu(e){return fs(e,"indexEntries")}function ju(e){return fs(e,"indexConfiguration")}function zu(e){return fs(e,"indexState")}function qu(e){Fi(0!==e.length);let t=e[0].indexState.offset,n=t.largestBatchId;for(let i=1;i<e.length;i++){const r=e[i].indexState.offset;br(r,t)<0&&(t=r),n<r.largestBatchId&&(n=r.largestBatchId)}return new yr(t.readTime,t.documentKey,n)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hu={didRun:!1,sequenceNumbersCollected:0,targetsRemoved:0,documentsRemoved:0};class Gu{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Gu(e,Gu.DEFAULT_COLLECTION_PERCENTILE,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zu(e,t,n){const i=e.store("mutations"),r=e.store("documentMutations"),s=[],o=IDBKeyRange.only(n.batchId);let a=0;const c=i.Z({range:o},((e,t,n)=>(a++,n.delete())));s.push(c.next((()=>{Fi(1===a)})));const u=[];for(const l of n.mutations){const e=Hr(t,l.key.path,n.batchId);s.push(r.delete(e)),u.push(l.key)}return Sr.waitFor(s).next((()=>u))}function Ku(e){if(!e)return 0;let t;if(e.document)t=e.document;else if(e.unknownDocument)t=e.unknownDocument;else{if(!e.noDocument)throw Vi();t=e.noDocument}return JSON.stringify(t).length}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Gu.DEFAULT_COLLECTION_PERCENTILE=10,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Gu.DEFAULT=new Gu(41943040,Gu.DEFAULT_COLLECTION_PERCENTILE,Gu.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Gu.DISABLED=new Gu(-1,0,0);class Wu{constructor(e,t,n,i){this.userId=e,this.serializer=t,this.indexManager=n,this.referenceDelegate=i,this.pn={}}static ie(e,t,n,i){Fi(""!==e.uid);const r=e.isAuthenticated()?e.uid:"";return new Wu(r,t,n,i)}checkEmpty(e){let t=!0;const n=IDBKeyRange.bound([this.userId,Number.NEGATIVE_INFINITY],[this.userId,Number.POSITIVE_INFINITY]);return Yu(e).Z({index:"userMutationsIndex",range:n},((e,n,i)=>{t=!1,i.done()})).next((()=>t))}addMutationBatch(e,t,n,i){const r=Xu(e),s=Yu(e);return s.add({}).next((o=>{Fi("number"==typeof o);const a=new Qa(o,t,n,i),c=function(e,t,n){const i=n.baseMutations.map((t=>Pc(e.se,t))),r=n.mutations.map((t=>Pc(e.se,t)));return{userId:t,batchId:n.batchId,localWriteTimeMs:n.localWriteTime.toMillis(),baseMutations:i,mutations:r}}(this.serializer,this.userId,a),u=[];let l=new ws(((e,t)=>tr(e.canonicalString(),t.canonicalString())));for(const e of i){const t=Hr(this.userId,e.key.path,o);l=l.add(e.key.path.popLast()),u.push(s.put(c)),u.push(r.put(t,Gr))}return l.forEach((t=>{u.push(this.indexManager.addToCollectionParentIndex(e,t))})),e.addOnCommittedListener((()=>{this.pn[o]=a.keys()})),Sr.waitFor(u).next((()=>a))}))}lookupMutationBatch(e,t){return Yu(e).get(t).next((e=>e?(Fi(e.userId===this.userId),ru(this.serializer,e)):null))}In(e,t){return this.pn[t]?Sr.resolve(this.pn[t]):this.lookupMutationBatch(e,t).next((e=>{if(e){const n=e.keys();return this.pn[t]=n,n}return null}))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=IDBKeyRange.lowerBound([this.userId,n]);let r=null;return Yu(e).Z({index:"userMutationsIndex",range:i},((e,t,i)=>{t.userId===this.userId&&(Fi(t.batchId>=n),r=ru(this.serializer,t)),i.done()})).next((()=>r))}getHighestUnacknowledgedBatchId(e){const t=IDBKeyRange.upperBound([this.userId,Number.POSITIVE_INFINITY]);let n=-1;return Yu(e).Z({index:"userMutationsIndex",range:t,reverse:!0},((e,t,i)=>{n=t.batchId,i.done()})).next((()=>n))}getAllMutationBatches(e){const t=IDBKeyRange.bound([this.userId,-1],[this.userId,Number.POSITIVE_INFINITY]);return Yu(e).j("userMutationsIndex",t).next((e=>e.map((e=>ru(this.serializer,e)))))}getAllMutationBatchesAffectingDocumentKey(e,t){const n=qr(this.userId,t.path),i=IDBKeyRange.lowerBound(n),r=[];return Xu(e).Z({range:i},((n,i,s)=>{const[o,a,c]=n,u=jr(a);if(o===this.userId&&t.path.isEqual(u))return Yu(e).get(c).next((e=>{if(!e)throw Vi();Fi(e.userId===this.userId),r.push(ru(this.serializer,e))}));s.done()})).next((()=>r))}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ws(tr);const i=[];return t.forEach((t=>{const r=qr(this.userId,t.path),s=IDBKeyRange.lowerBound(r),o=Xu(e).Z({range:s},((e,i,r)=>{const[s,o,a]=e,c=jr(o);s===this.userId&&t.path.isEqual(c)?n=n.add(a):r.done()}));i.push(o)})),Sr.waitFor(i).next((()=>this.Tn(e,n)))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1,r=qr(this.userId,n),s=IDBKeyRange.lowerBound(r);let o=new ws(tr);return Xu(e).Z({range:s},((e,t,r)=>{const[s,a,c]=e,u=jr(a);s===this.userId&&n.isPrefixOf(u)?u.length===i&&(o=o.add(c)):r.done()})).next((()=>this.Tn(e,o)))}Tn(e,t){const n=[],i=[];return t.forEach((t=>{i.push(Yu(e).get(t).next((e=>{if(null===e)throw Vi();Fi(e.userId===this.userId),n.push(ru(this.serializer,e))})))})),Sr.waitFor(i).next((()=>n))}removeMutationBatch(e,t){return Zu(e.at,this.userId,t).next((n=>(e.addOnCommittedListener((()=>{this.En(t.batchId)})),Sr.forEach(n,(t=>this.referenceDelegate.markPotentiallyOrphaned(e,t))))))}En(e){delete this.pn[e]}performConsistencyCheck(e){return this.checkEmpty(e).next((t=>{if(!t)return Sr.resolve();const n=IDBKeyRange.lowerBound([this.userId]),i=[];return Xu(e).Z({range:n},((e,t,n)=>{if(e[0]===this.userId){const t=jr(e[1]);i.push(t)}else n.done()})).next((()=>{Fi(0===i.length)}))}))}containsKey(e,t){return Qu(e,this.userId,t)}An(e){return Ju(e).get(this.userId).next((e=>e||{userId:this.userId,lastAcknowledgedBatchId:-1,lastStreamToken:""}))}}function Qu(e,t,n){const i=qr(t,n.path),r=i[1],s=IDBKeyRange.lowerBound(i);let o=!1;return Xu(e).Z({range:s,Y:!0},((e,n,i)=>{const[s,a,c]=e;s===t&&a===r&&(o=!0),i.done()})).next((()=>o))}function Yu(e){return fs(e,"mutations")}function Xu(e){return fs(e,"documentMutations")}function Ju(e){return fs(e,"mutationQueues")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.Rn=e}next(){return this.Rn+=2,this.Rn}static vn(){return new el(0)}static bn(){return new el(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(e,t){this.referenceDelegate=e,this.serializer=t}allocateTargetId(e){return this.Pn(e).next((t=>{const n=new el(t.highestTargetId);return t.highestTargetId=n.next(),this.Vn(e,t).next((()=>t.highestTargetId))}))}getLastRemoteSnapshotVersion(e){return this.Pn(e).next((e=>sr.fromTimestamp(new rr(e.lastRemoteSnapshotVersion.seconds,e.lastRemoteSnapshotVersion.nanoseconds))))}getHighestSequenceNumber(e){return this.Pn(e).next((e=>e.highestListenSequenceNumber))}setTargetsMetadata(e,t,n){return this.Pn(e).next((i=>(i.highestListenSequenceNumber=t,n&&(i.lastRemoteSnapshotVersion=n.toTimestamp()),t>i.highestListenSequenceNumber&&(i.highestListenSequenceNumber=t),this.Vn(e,i))))}addTargetData(e,t){return this.Sn(e,t).next((()=>this.Pn(e).next((n=>(n.targetCount+=1,this.Dn(t,n),this.Vn(e,n))))))}updateTargetData(e,t){return this.Sn(e,t)}removeTargetData(e,t){return this.removeMatchingKeysForTargetId(e,t.targetId).next((()=>nl(e).delete(t.targetId))).next((()=>this.Pn(e))).next((t=>(Fi(t.targetCount>0),t.targetCount-=1,this.Vn(e,t))))}removeTargets(e,t,n){let i=0;const r=[];return nl(e).Z(((s,o)=>{const a=su(o);a.sequenceNumber<=t&&null===n.get(a.targetId)&&(i++,r.push(this.removeTargetData(e,a)))})).next((()=>Sr.waitFor(r))).next((()=>i))}forEachTarget(e,t){return nl(e).Z(((e,n)=>{const i=su(n);t(i)}))}Pn(e){return il(e).get("targetGlobalKey").next((e=>(Fi(null!==e),e)))}Vn(e,t){return il(e).put("targetGlobalKey",t)}Sn(e,t){return nl(e).put(ou(this.serializer,t))}Dn(e,t){let n=!1;return e.targetId>t.highestTargetId&&(t.highestTargetId=e.targetId,n=!0),e.sequenceNumber>t.highestListenSequenceNumber&&(t.highestListenSequenceNumber=e.sequenceNumber,n=!0),n}getTargetCount(e){return this.Pn(e).next((e=>e.targetCount))}getTargetData(e,t){const n=Ro(t),i=IDBKeyRange.bound([n,Number.NEGATIVE_INFINITY],[n,Number.POSITIVE_INFINITY]);let r=null;return nl(e).Z({range:i,index:"queryTargetsIndex"},((e,n,i)=>{const s=su(n);Lo(t,s.target)&&(r=s,i.done())})).next((()=>r))}addMatchingKeys(e,t,n){const i=[],r=rl(e);return t.forEach((t=>{const s=Fr(t.path);i.push(r.put({targetId:n,path:s})),i.push(this.referenceDelegate.addReference(e,n,t))})),Sr.waitFor(i)}removeMatchingKeys(e,t,n){const i=rl(e);return Sr.forEach(t,(t=>{const r=Fr(t.path);return Sr.waitFor([i.delete([n,r]),this.referenceDelegate.removeReference(e,n,t)])}))}removeMatchingKeysForTargetId(e,t){const n=rl(e),i=IDBKeyRange.bound([t],[t+1],!1,!0);return n.delete(i)}getMatchingKeysForTargetId(e,t){const n=IDBKeyRange.bound([t],[t+1],!1,!0),i=rl(e);let r=pa();return i.Z({range:n,Y:!0},((e,t,n)=>{const i=jr(e[1]),s=new lr(i);r=r.add(s)})).next((()=>r))}containsKey(e,t){const n=Fr(t.path),i=IDBKeyRange.bound([n],[ir(n)],!1,!0);let r=0;return rl(e).Z({index:"documentTargetsIndex",Y:!0,range:i},(([e,t],n,i)=>{0!==e&&(r++,i.done())})).next((()=>r>0))}ne(e,t){return nl(e).get(t).next((e=>e?su(e):null))}}function nl(e){return fs(e,"targets")}function il(e){return fs(e,"targetGlobal")}function rl(e){return fs(e,"targetDocuments")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sl([e,t],[n,i]){const r=tr(e,n);return 0===r?tr(t,i):r}class ol{constructor(e){this.Cn=e,this.buffer=new ws(sl),this.xn=0}Nn(){return++this.xn}kn(e){const t=[e,this.Nn()];if(this.buffer.size<this.Cn)this.buffer=this.buffer.add(t);else{const e=this.buffer.last();sl(t,e)<0&&(this.buffer=this.buffer.delete(e).add(t))}}get maxValue(){return this.buffer.last()[0]}}class al{constructor(e,t,n){this.garbageCollector=e,this.asyncQueue=t,this.localStore=n,this.On=null}start(){-1!==this.garbageCollector.params.cacheSizeCollectionThreshold&&this.$n(6e4)}stop(){this.On&&(this.On.cancel(),this.On=null)}get started(){return null!==this.On}$n(e){Li("LruGarbageCollector",`Garbage collection scheduled in ${e}ms`),this.On=this.asyncQueue.enqueueAfterDelay("lru_garbage_collection",e,(async()=>{this.On=null;try{await this.localStore.collectGarbage(this.garbageCollector)}catch(e){xr(e)?Li("LruGarbageCollector","Ignoring IndexedDB error during garbage collection: ",e):await Ir(e)}await this.$n(3e5)}))}}class cl{constructor(e,t){this.Mn=e,this.params=t}calculateTargetCount(e,t){return this.Mn.Fn(e).next((e=>Math.floor(t/100*e)))}nthSequenceNumber(e,t){if(0===t)return Sr.resolve(Pr.ct);const n=new ol(t);return this.Mn.forEachTarget(e,(e=>n.kn(e.sequenceNumber))).next((()=>this.Mn.Bn(e,(e=>n.kn(e))))).next((()=>n.maxValue))}removeTargets(e,t,n){return this.Mn.removeTargets(e,t,n)}removeOrphanedDocuments(e,t){return this.Mn.removeOrphanedDocuments(e,t)}collect(e,t){return-1===this.params.cacheSizeCollectionThreshold?(Li("LruGarbageCollector","Garbage collection skipped; disabled"),Sr.resolve(Hu)):this.getCacheSize(e).next((n=>n<this.params.cacheSizeCollectionThreshold?(Li("LruGarbageCollector",`Garbage collection skipped; Cache size ${n} is lower than threshold ${this.params.cacheSizeCollectionThreshold}`),Hu):this.Ln(e,t)))}getCacheSize(e){return this.Mn.getCacheSize(e)}Ln(e,t){let n,i,r,s,o,c,u;const l=Date.now();return this.calculateTargetCount(e,this.params.percentileToCollect).next((t=>(t>this.params.maximumSequenceNumbersToCollect?(Li("LruGarbageCollector",`Capping sequence numbers to collect down to the maximum of ${this.params.maximumSequenceNumbersToCollect} from ${t}`),i=this.params.maximumSequenceNumbersToCollect):i=t,s=Date.now(),this.nthSequenceNumber(e,i)))).next((i=>(n=i,o=Date.now(),this.removeTargets(e,n,t)))).next((t=>(r=t,c=Date.now(),this.removeOrphanedDocuments(e,n)))).next((e=>(u=Date.now(),Di()<=a["in"].DEBUG&&Li("LruGarbageCollector",`LRU Garbage Collection\n\tCounted targets in ${s-l}ms\n\tDetermined least recently used ${i} in `+(o-s)+"ms\n"+`\tRemoved ${r} targets in `+(c-o)+"ms\n"+`\tRemoved ${e} documents in `+(u-c)+"ms\n"+`Total Duration: ${u-l}ms`),Sr.resolve({didRun:!0,sequenceNumbersCollected:i,targetsRemoved:r,documentsRemoved:e}))))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ul{constructor(e,t){this.db=e,this.garbageCollector=function(e,t){return new cl(e,t)}(this,t)}Fn(e){const t=this.qn(e);return this.db.getTargetCache().getTargetCount(e).next((e=>t.next((t=>e+t))))}qn(e){let t=0;return this.Bn(e,(e=>{t++})).next((()=>t))}forEachTarget(e,t){return this.db.getTargetCache().forEachTarget(e,t)}Bn(e,t){return this.Un(e,((e,n)=>t(n)))}addReference(e,t,n){return ll(e,n)}removeReference(e,t,n){return ll(e,n)}removeTargets(e,t,n){return this.db.getTargetCache().removeTargets(e,t,n)}markPotentiallyOrphaned(e,t){return ll(e,t)}Kn(e,t){return function(e,t){let n=!1;return Ju(e).X((i=>Qu(e,i,t).next((e=>(e&&(n=!0),Sr.resolve(!e)))))).next((()=>n))}(e,t)}removeOrphanedDocuments(e,t){const n=this.db.getRemoteDocumentCache().newChangeBuffer(),i=[];let r=0;return this.Un(e,((s,o)=>{if(o<=t){const t=this.Kn(e,s).next((t=>{if(!t)return r++,n.getEntry(e,s).next((()=>(n.removeEntry(s,sr.min()),rl(e).delete([0,Fr(s.path)]))))}));i.push(t)}})).next((()=>Sr.waitFor(i))).next((()=>n.apply(e))).next((()=>r))}removeTarget(e,t){const n=t.withSequenceNumber(e.currentSequenceNumber);return this.db.getTargetCache().updateTargetData(e,n)}updateLimboDocument(e,t){return ll(e,t)}Un(e,t){const n=rl(e);let i,r=Pr.ct;return n.Z({index:"documentTargetsIndex"},(([e,n],{path:s,sequenceNumber:o})=>{0===e?(r!==Pr.ct&&t(new lr(jr(i)),r),r=o,i=s):r=Pr.ct})).next((()=>{r!==Pr.ct&&t(new lr(jr(i)),r)}))}getCacheSize(e){return this.db.getRemoteDocumentCache().getSize(e)}}function ll(e,t){return rl(e).put(function(e,t){return{targetId:0,path:Fr(e.path),sequenceNumber:t}}(t,e.currentSequenceNumber))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hl{constructor(){this.changes=new ia((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,so.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Sr.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(e){this.serializer=e}setIndexManager(e){this.indexManager=e}addEntry(e,t,n){return gl(e).put(n)}removeEntry(e,t,n){return gl(e).delete(function(e,t){const n=e.path.toArray();return[n.slice(0,n.length-2),n[n.length-2],tu(t),n[n.length-1]]}(t,n))}updateMetadata(e,t){return this.getMetadata(e).next((n=>(n.byteSize+=t,this.Gn(e,n))))}getEntry(e,t){let n=so.newInvalidDocument(t);return gl(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(vl(t))},((e,i)=>{n=this.Qn(t,i)})).next((()=>n))}zn(e,t){let n={size:0,document:so.newInvalidDocument(t)};return gl(e).Z({index:"documentKeyIndex",range:IDBKeyRange.only(vl(t))},((e,i)=>{n={document:this.Qn(t,i),size:Ku(i)}})).next((()=>n))}getEntries(e,t){let n=sa();return this.jn(e,t,((e,t)=>{const i=this.Qn(e,t);n=n.insert(e,i)})).next((()=>n))}Wn(e,t){let n=sa(),i=new vs(lr.comparator);return this.jn(e,t,((e,t)=>{const r=this.Qn(e,t);n=n.insert(e,r),i=i.insert(e,Ku(t))})).next((()=>({documents:n,Hn:i})))}jn(e,t,n){if(t.isEmpty())return Sr.resolve();let i=new ws(bl);t.forEach((e=>i=i.add(e)));const r=IDBKeyRange.bound(vl(i.first()),vl(i.last())),s=i.getIterator();let o=s.getNext();return gl(e).Z({index:"documentKeyIndex",range:r},((e,t,i)=>{const r=lr.fromSegments([...t.prefixPath,t.collectionGroup,t.documentId]);for(;o&&bl(o,r)<0;)n(o,null),o=s.getNext();o&&o.isEqual(r)&&(n(o,t),o=s.hasNext()?s.getNext():null),o?i.G(vl(o)):i.done()})).next((()=>{for(;o;)n(o,null),o=s.hasNext()?s.getNext():null}))}getDocumentsMatchingQuery(e,t,n,i){const r=t.path,s=[r.popLast().toArray(),r.lastSegment(),tu(n.readTime),n.documentKey.path.isEmpty()?"":n.documentKey.path.lastSegment()],o=[r.popLast().toArray(),r.lastSegment(),[Number.MAX_SAFE_INTEGER,Number.MAX_SAFE_INTEGER],""];return gl(e).j(IDBKeyRange.bound(s,o,!0)).next((e=>{let n=sa();for(const r of e){const e=this.Qn(lr.fromSegments(r.prefixPath.concat(r.collectionGroup,r.documentId)),r);e.isFoundDocument()&&(Jo(t,e)||i.has(e.key))&&(n=n.insert(e.key,e))}return n}))}getAllFromCollectionGroup(e,t,n,i){let r=sa();const s=yl(t,n),o=yl(t,yr.max());return gl(e).Z({index:"collectionGroupIndex",range:IDBKeyRange.bound(s,o,!0)},((e,t,n)=>{const s=this.Qn(lr.fromSegments(t.prefixPath.concat(t.collectionGroup,t.documentId)),t);r=r.insert(s.key,s),r.size===i&&n.done()})).next((()=>r))}newChangeBuffer(e){return new pl(this,!!e&&e.trackRemovals)}getSize(e){return this.getMetadata(e).next((e=>e.byteSize))}getMetadata(e){return ml(e).get("remoteDocumentGlobalKey").next((e=>(Fi(!!e),e)))}Gn(e,t){return ml(e).put("remoteDocumentGlobalKey",t)}Qn(e,t){if(t){const e=Jc(this.serializer,t);if(!e.isNoDocument()||!e.version.isEqual(sr.min()))return e}return so.newInvalidDocument(e)}}function fl(e){return new dl(e)}class pl extends hl{constructor(e,t){super(),this.Jn=e,this.trackRemovals=t,this.Yn=new ia((e=>e.toString()),((e,t)=>e.isEqual(t)))}applyChanges(e){const t=[];let n=0,i=new ws(((e,t)=>tr(e.canonicalString(),t.canonicalString())));return this.changes.forEach(((r,s)=>{const o=this.Yn.get(r);if(t.push(this.Jn.removeEntry(e,r,o.readTime)),s.isValidDocument()){const a=eu(this.Jn.serializer,s);i=i.add(r.path.popLast());const c=Ku(a);n+=c-o.size,t.push(this.Jn.addEntry(e,r,a))}else if(n-=o.size,this.trackRemovals){const n=eu(this.Jn.serializer,s.convertToNoDocument(sr.min()));t.push(this.Jn.addEntry(e,r,n))}})),i.forEach((n=>{t.push(this.Jn.indexManager.addToCollectionParentIndex(e,n))})),t.push(this.Jn.updateMetadata(e,n)),Sr.waitFor(t)}getFromCache(e,t){return this.Jn.zn(e,t).next((e=>(this.Yn.set(t,{size:e.size,readTime:e.document.readTime}),e.document)))}getAllFromCache(e,t){return this.Jn.Wn(e,t).next((({documents:e,Hn:t})=>(t.forEach(((t,n)=>{this.Yn.set(t,{size:n,readTime:e.get(t).readTime})})),e)))}}function ml(e){return fs(e,"remoteDocumentGlobal")}function gl(e){return fs(e,"remoteDocumentsV14")}function vl(e){const t=e.path.toArray();return[t.slice(0,t.length-2),t[t.length-2],t[t.length-1]]}function yl(e,t){const n=t.documentKey.path.toArray();return[e,tu(t.readTime),n.slice(0,n.length-2),n.length>0?n[n.length-1]:""]}function bl(e,t){const n=e.path.toArray(),i=t.path.toArray();let r=0;for(let s=0;s<n.length-2&&s<i.length-2;++s)if(r=tr(n[s],i[s]),r)return r;return r=tr(n.length,i.length),r||(r=tr(n[n.length-2],i[i.length-2]),r||tr(n[n.length-1],i[i.length-1]))
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class wl{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _l{constructor(e,t,n,i){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=i}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((i=>(n=i,this.remoteDocumentCache.getEntry(e,t)))).next((e=>(null!==n&&Ba(n.mutation,e,Ss.empty(),rr.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,pa()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=pa()){const i=ua();return this.populateOverlays(e,i,t).next((()=>this.computeViews(e,t,i,n).next((e=>{let t=aa();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=ua();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,pa())))}populateOverlays(e,t,n){const i=[];return n.forEach((e=>{t.has(e)||i.push(e)})),this.documentOverlayCache.getOverlays(e,i).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,i){let r=sa();const s=ha(),o=ha();return t.forEach(((e,t)=>{const o=n.get(t.key);i.has(t.key)&&(void 0===o||o.mutation instanceof qa)?r=r.insert(t.key,t):void 0!==o?(s.set(t.key,o.mutation.getFieldMask()),Ba(o.mutation,t,o.mutation.getFieldMask(),rr.now())):s.set(t.key,Ss.empty())})),this.recalculateAndSaveOverlays(e,r).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new wl(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=ha();let i=new vs(((e,t)=>e-t)),r=pa();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const r of e)r.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Ss.empty();o=r.applyToLocalView(s,o),n.set(e,o);const a=(i.get(r.batchId)||pa()).add(e);i=i.insert(r.batchId,a)}))})).next((()=>{const s=[],o=i.getReverseIterator();for(;o.hasNext();){const i=o.getNext(),a=i.key,c=i.value,u=la();c.forEach((e=>{if(!r.has(e)){const i=Va(t.get(e),n.get(e));null!==i&&u.set(e,i),r=r.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,u))}return Sr.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return lr.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Ho(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,i){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,i).next((r=>{const s=i-r.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,i-r.size):Sr.resolve(ua());let o=-1,a=r;return s.next((t=>Sr.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),r.get(t)?Sr.resolve():this.remoteDocumentCache.getEntry(e,t).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,r))).next((()=>this.computeViews(e,a,t,pa()))).next((e=>({batchId:o,changes:ca(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new lr(t)).next((e=>{let t=aa();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const i=t.collectionGroup;let r=aa();return this.indexManager.getCollectionParents(e,i).next((s=>Sr.forEach(s,(s=>{const o=function(e,t){return new Fo(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(i));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{r=r.insert(e,t)}))}))})).next((()=>r))))}getDocumentsMatchingCollectionQuery(e,t,n){let i;return this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId).next((r=>(i=r,this.remoteDocumentCache.getDocumentsMatchingQuery(e,t,n,i)))).next((e=>{i.forEach(((t,n)=>{const i=n.getKey();null===e.get(i)&&(e=e.insert(i,so.newInvalidDocument(i)))}));let n=aa();return e.forEach(((e,r)=>{const s=i.get(e);void 0!==s&&Ba(s.mutation,r,Ss.empty(),rr.now()),Jo(t,r)&&(n=n.insert(e,r))})),n}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{constructor(e){this.serializer=e,this.Zn=new Map,this.Xn=new Map}getBundleMetadata(e,t){return Sr.resolve(this.Zn.get(t))}saveBundleMetadata(e,t){var n;return this.Zn.set(t.id,{id:(n=t).id,version:n.version,createTime:Ic(n.createTime)}),Sr.resolve()}getNamedQuery(e,t){return Sr.resolve(this.Xn.get(t))}saveNamedQuery(e,t){return this.Xn.set(t.name,function(e){return{name:e.name,query:au(e.bundledQuery),readTime:Ic(e.readTime)}}(t)),Sr.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sl{constructor(){this.overlays=new vs(lr.comparator),this.ts=new Map}getOverlay(e,t){return Sr.resolve(this.overlays.get(t))}getOverlays(e,t){const n=ua();return Sr.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,i)=>{this.re(e,t,i)})),Sr.resolve()}removeOverlaysForBatchId(e,t,n){const i=this.ts.get(n);return void 0!==i&&(i.forEach((e=>this.overlays=this.overlays.remove(e))),this.ts.delete(n)),Sr.resolve()}getOverlaysForCollection(e,t,n){const i=ua(),r=t.length+1,s=new lr(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===r&&e.largestBatchId>n&&i.set(e.getKey(),e)}return Sr.resolve(i)}getOverlaysForCollectionGroup(e,t,n,i){let r=new vs(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=r.get(e.largestBatchId);null===t&&(t=ua(),r=r.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=ua(),a=r.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=i)break;return Sr.resolve(o)}re(e,t,n){const i=this.overlays.get(n.key);if(null!==i){const e=this.ts.get(i.largestBatchId).delete(n.key);this.ts.set(i.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new Xa(t,n));let r=this.ts.get(t);void 0===r&&(r=pa(),this.ts.set(t,r)),this.ts.set(t,r.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{constructor(){this.es=new ws(El.ns),this.ss=new ws(El.rs)}isEmpty(){return this.es.isEmpty()}addReference(e,t){const n=new El(e,t);this.es=this.es.add(n),this.ss=this.ss.add(n)}os(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.us(new El(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}hs(e){const t=new lr(new ar([])),n=new El(t,e),i=new El(t,e+1),r=[];return this.ss.forEachInRange([n,i],(e=>{this.us(e),r.push(e.key)})),r}ls(){this.es.forEach((e=>this.us(e)))}us(e){this.es=this.es.delete(e),this.ss=this.ss.delete(e)}fs(e){const t=new lr(new ar([])),n=new El(t,e),i=new El(t,e+1);let r=pa();return this.ss.forEachInRange([n,i],(e=>{r=r.add(e.key)})),r}containsKey(e){const t=new El(e,0),n=this.es.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class El{constructor(e,t){this.key=e,this.ds=t}static ns(e,t){return lr.comparator(e.key,t.key)||tr(e.ds,t.ds)}static rs(e,t){return tr(e.ds,t.ds)||lr.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kl{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.ws=1,this._s=new ws(El.ns)}checkEmpty(e){return Sr.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,i){const r=this.ws;this.ws++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Qa(r,t,n,i);this.mutationQueue.push(s);for(const o of i)this._s=this._s.add(new El(o.key,r)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Sr.resolve(s)}lookupMutationBatch(e,t){return Sr.resolve(this.gs(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,i=this.ys(n),r=i<0?0:i;return Sr.resolve(this.mutationQueue.length>r?this.mutationQueue[r]:null)}getHighestUnacknowledgedBatchId(){return Sr.resolve(0===this.mutationQueue.length?-1:this.ws-1)}getAllMutationBatches(e){return Sr.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new El(t,0),i=new El(t,Number.POSITIVE_INFINITY),r=[];return this._s.forEachInRange([n,i],(e=>{const t=this.gs(e.ds);r.push(t)})),Sr.resolve(r)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new ws(tr);return t.forEach((e=>{const t=new El(e,0),i=new El(e,Number.POSITIVE_INFINITY);this._s.forEachInRange([t,i],(e=>{n=n.add(e.ds)}))})),Sr.resolve(this.ps(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,i=n.length+1;let r=n;lr.isDocumentKey(r)||(r=r.child(""));const s=new El(new lr(r),0);let o=new ws(tr);return this._s.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===i&&(o=o.add(e.ds)),!0)}),s),Sr.resolve(this.ps(o))}ps(e){const t=[];return e.forEach((e=>{const n=this.gs(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Fi(0===this.Is(t.batchId,"removed")),this.mutationQueue.shift();let n=this._s;return Sr.forEach(t.mutations,(i=>{const r=new El(i.key,t.batchId);return n=n.delete(r),this.referenceDelegate.markPotentiallyOrphaned(e,i.key)})).next((()=>{this._s=n}))}En(e){}containsKey(e,t){const n=new El(t,0),i=this._s.firstAfterOrEqual(n);return Sr.resolve(t.isEqual(i&&i.key))}performConsistencyCheck(e){return this.mutationQueue.length,Sr.resolve()}Is(e,t){return this.ys(e)}ys(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}gs(e){const t=this.ys(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{constructor(e){this.Ts=e,this.docs=new vs(lr.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,i=this.docs.get(n),r=i?i.size:0,s=this.Ts(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-r,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Sr.resolve(n?n.document.mutableCopy():so.newInvalidDocument(t))}getEntries(e,t){let n=sa();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():so.newInvalidDocument(e))})),Sr.resolve(n)}getDocumentsMatchingQuery(e,t,n,i){let r=sa();const s=t.path,o=new lr(s.child("")),a=this.docs.getIteratorFrom(o);for(;a.hasNext();){const{key:e,value:{document:o}}=a.getNext();if(!s.isPrefixOf(e.path))break;e.path.length>s.length+1||br(vr(o),n)<=0||(i.has(o.key)||Jo(t,o))&&(r=r.insert(o.key,o.mutableCopy()))}return Sr.resolve(r)}getAllFromCollectionGroup(e,t,n,i){Vi()}Es(e,t){return Sr.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new xl(this)}getSize(e){return Sr.resolve(this.size)}}class xl extends hl{constructor(e){super(),this.Jn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,i)=>{i.isValidDocument()?t.push(this.Jn.addEntry(e,i)):this.Jn.removeEntry(n)})),Sr.waitFor(t)}getFromCache(e,t){return this.Jn.getEntry(e,t)}getAllFromCache(e,t){return this.Jn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(e){this.persistence=e,this.As=new ia((e=>Ro(e)),Lo),this.lastRemoteSnapshotVersion=sr.min(),this.highestTargetId=0,this.Rs=0,this.vs=new Tl,this.targetCount=0,this.bs=el.vn()}forEachTarget(e,t){return this.As.forEach(((e,n)=>t(n))),Sr.resolve()}getLastRemoteSnapshotVersion(e){return Sr.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Sr.resolve(this.Rs)}allocateTargetId(e){return this.highestTargetId=this.bs.next(),Sr.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Rs&&(this.Rs=t),Sr.resolve()}Sn(e){this.As.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.bs=new el(t),this.highestTargetId=t),e.sequenceNumber>this.Rs&&(this.Rs=e.sequenceNumber)}addTargetData(e,t){return this.Sn(t),this.targetCount+=1,Sr.resolve()}updateTargetData(e,t){return this.Sn(t),Sr.resolve()}removeTargetData(e,t){return this.As.delete(t.target),this.vs.hs(t.targetId),this.targetCount-=1,Sr.resolve()}removeTargets(e,t,n){let i=0;const r=[];return this.As.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.As.delete(s),r.push(this.removeMatchingKeysForTargetId(e,o.targetId)),i++)})),Sr.waitFor(r).next((()=>i))}getTargetCount(e){return Sr.resolve(this.targetCount)}getTargetData(e,t){const n=this.As.get(t)||null;return Sr.resolve(n)}addMatchingKeys(e,t,n){return this.vs.os(t,n),Sr.resolve()}removeMatchingKeys(e,t,n){this.vs.cs(t,n);const i=this.persistence.referenceDelegate,r=[];return i&&t.forEach((t=>{r.push(i.markPotentiallyOrphaned(e,t))})),Sr.waitFor(r)}removeMatchingKeysForTargetId(e,t){return this.vs.hs(t),Sr.resolve()}getMatchingKeysForTargetId(e,t){const n=this.vs.fs(t);return Sr.resolve(n)}containsKey(e,t){return Sr.resolve(this.vs.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(e,t){this.Ps={},this.overlays={},this.Vs=new Pr(0),this.Ss=!1,this.Ss=!0,this.referenceDelegate=e(this),this.Ds=new Al(this),this.indexManager=new $u,this.remoteDocumentCache=function(e){return new Cl(e)}((e=>this.referenceDelegate.Cs(e))),this.serializer=new Xc(t),this.xs=new Il(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.Ss=!1,Promise.resolve()}get started(){return this.Ss}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new Sl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.Ps[e.toKey()];return n||(n=new kl(t,this.referenceDelegate),this.Ps[e.toKey()]=n),n}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.xs}runTransaction(e,t,n){Li("MemoryPersistence","Starting transaction:",e);const i=new Nl(this.Vs.next());return this.referenceDelegate.Ns(),n(i).next((e=>this.referenceDelegate.ks(i).next((()=>e)))).toPromise().then((e=>(i.raiseOnCommittedEvent(),e)))}Os(e,t){return Sr.or(Object.values(this.Ps).map((n=>()=>n.containsKey(e,t))))}}class Nl extends _r{constructor(e){super(),this.currentSequenceNumber=e}}class Dl{constructor(e){this.persistence=e,this.$s=new Tl,this.Ms=null}static Fs(e){return new Dl(e)}get Bs(){if(this.Ms)return this.Ms;throw Vi()}addReference(e,t,n){return this.$s.addReference(n,t),this.Bs.delete(n.toString()),Sr.resolve()}removeReference(e,t,n){return this.$s.removeReference(n,t),this.Bs.add(n.toString()),Sr.resolve()}markPotentiallyOrphaned(e,t){return this.Bs.add(t.toString()),Sr.resolve()}removeTarget(e,t){this.$s.hs(t.targetId).forEach((e=>this.Bs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Bs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Ns(){this.Ms=new Set}ks(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Sr.forEach(this.Bs,(n=>{const i=lr.fromPath(n);return this.Ls(e,i).next((e=>{e||t.removeEntry(i,sr.min())}))})).next((()=>(this.Ms=null,t.apply(e))))}updateLimboDocument(e,t){return this.Ls(e,t).next((e=>{e?this.Bs.delete(t.toString()):this.Bs.add(t.toString())}))}Cs(e){return 0}Ls(e,t){return Sr.or([()=>Sr.resolve(this.$s.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Os(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.serializer=e}M(e,t,n,i){const r=new Tr("createOrUpgrade",t);n<1&&i>=1&&(function(e){e.createObjectStore("owner")}(e),function(e){e.createObjectStore("mutationQueues",{keyPath:"userId"}),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zr,{unique:!0}),e.createObjectStore("documentMutations")}(e),Ll(e),function(e){e.createObjectStore("remoteDocuments")}(e));let s=Sr.resolve();return n<3&&i>=3&&(0!==n&&(function(e){e.deleteObjectStore("targetDocuments"),e.deleteObjectStore("targets"),e.deleteObjectStore("targetGlobal")}(e),Ll(e)),s=s.next((()=>function(e){const t=e.store("targetGlobal"),n={highestTargetId:0,highestListenSequenceNumber:0,lastRemoteSnapshotVersion:sr.min().toTimestamp(),targetCount:0};return t.put("targetGlobalKey",n)}(r)))),n<4&&i>=4&&(0!==n&&(s=s.next((()=>function(e,t){return t.store("mutations").j().next((n=>{e.deleteObjectStore("mutations"),e.createObjectStore("mutations",{keyPath:"batchId",autoIncrement:!0}).createIndex("userMutationsIndex",zr,{unique:!0});const i=t.store("mutations"),r=n.map((e=>i.put(e)));return Sr.waitFor(r)}))}(e,r)))),s=s.next((()=>{!function(e){e.createObjectStore("clientMetadata",{keyPath:"clientId"})}(e)}))),n<5&&i>=5&&(s=s.next((()=>this.qs(r)))),n<6&&i>=6&&(s=s.next((()=>(function(e){e.createObjectStore("remoteDocumentGlobal")}(e),this.Us(r))))),n<7&&i>=7&&(s=s.next((()=>this.Ks(r)))),n<8&&i>=8&&(s=s.next((()=>this.Gs(e,r)))),n<9&&i>=9&&(s=s.next((()=>{!function(e){e.objectStoreNames.contains("remoteDocumentChanges")&&e.deleteObjectStore("remoteDocumentChanges")}(e)}))),n<10&&i>=10&&(s=s.next((()=>this.Qs(r)))),n<11&&i>=11&&(s=s.next((()=>{!function(e){e.createObjectStore("bundles",{keyPath:"bundleId"})}(e),function(e){e.createObjectStore("namedQueries",{keyPath:"name"})}(e)}))),n<12&&i>=12&&(s=s.next((()=>{!function(e){const t=e.createObjectStore("documentOverlays",{keyPath:rs});t.createIndex("collectionPathOverlayIndex",ss,{unique:!1}),t.createIndex("collectionGroupOverlayIndex",os,{unique:!1})}(e)}))),n<13&&i>=13&&(s=s.next((()=>function(e){const t=e.createObjectStore("remoteDocumentsV14",{keyPath:Zr});t.createIndex("documentKeyIndex",Kr),t.createIndex("collectionGroupIndex",Wr)}(e))).next((()=>this.zs(e,r))).next((()=>e.deleteObjectStore("remoteDocuments")))),n<14&&i>=14&&(s=s.next((()=>this.js(e,r)))),n<15&&i>=15&&(s=s.next((()=>function(e){e.createObjectStore("indexConfiguration",{keyPath:"indexId",autoIncrement:!0}).createIndex("collectionGroupIndex","collectionGroup",{unique:!1}),e.createObjectStore("indexState",{keyPath:es}).createIndex("sequenceNumberIndex",ts,{unique:!1}),e.createObjectStore("indexEntries",{keyPath:ns}).createIndex("documentKeyIndex",is,{unique:!1})}(e)))),s}Us(e){let t=0;return e.store("remoteDocuments").Z(((e,n)=>{t+=Ku(n)})).next((()=>{const n={byteSize:t};return e.store("remoteDocumentGlobal").put("remoteDocumentGlobalKey",n)}))}qs(e){const t=e.store("mutationQueues"),n=e.store("mutations");return t.j().next((t=>Sr.forEach(t,(t=>{const i=IDBKeyRange.bound([t.userId,-1],[t.userId,t.lastAcknowledgedBatchId]);return n.j("userMutationsIndex",i).next((n=>Sr.forEach(n,(n=>{Fi(n.userId===t.userId);const i=ru(this.serializer,n);return Zu(e,t.userId,i).next((()=>{}))}))))}))))}Ks(e){const t=e.store("targetDocuments"),n=e.store("remoteDocuments");return e.store("targetGlobal").get("targetGlobalKey").next((e=>{const i=[];return n.Z(((n,r)=>{const s=new ar(n),o=function(e){return[0,Fr(e)]}(s);i.push(t.get(o).next((n=>n?Sr.resolve():(n=>t.put({targetId:0,path:Fr(n),sequenceNumber:e.highestListenSequenceNumber}))(s))))})).next((()=>Sr.waitFor(i)))}))}Gs(e,t){e.createObjectStore("collectionParents",{keyPath:Jr});const n=t.store("collectionParents"),i=new Mu,r=e=>{if(i.add(e)){const t=e.lastSegment(),i=e.popLast();return n.put({collectionId:t,parent:Fr(i)})}};return t.store("remoteDocuments").Z({Y:!0},((e,t)=>{const n=new ar(e);return r(n.popLast())})).next((()=>t.store("documentMutations").Z({Y:!0},(([e,t,n],i)=>{const s=jr(t);return r(s.popLast())}))))}Qs(e){const t=e.store("targets");return t.Z(((e,n)=>{const i=su(n),r=ou(this.serializer,i);return t.put(r)}))}zs(e,t){const n=t.store("remoteDocuments"),i=[];return n.Z(((e,n)=>{const r=t.store("remoteDocumentsV14"),s=(o=n,o.document?new lr(ar.fromString(o.document.name).popFirst(5)):o.noDocument?lr.fromSegments(o.noDocument.path):o.unknownDocument?lr.fromSegments(o.unknownDocument.path):Vi()).path.toArray();var o;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const a={prefixPath:s.slice(0,s.length-2),collectionGroup:s[s.length-2],documentId:s[s.length-1],readTime:n.readTime||[0,0],unknownDocument:n.unknownDocument,noDocument:n.noDocument,document:n.document,hasCommittedMutations:!!n.hasCommittedMutations};i.push(r.put(a))})).next((()=>Sr.waitFor(i)))}js(e,t){const n=t.store("mutations"),i=fl(this.serializer),r=new Ol(Dl.Fs,this.serializer.se);return n.j().next((e=>{const n=new Map;return e.forEach((e=>{var t;let i=null!==(t=n.get(e.userId))&&void 0!==t?t:pa();ru(this.serializer,e).keys().forEach((e=>i=i.add(e))),n.set(e.userId,i)})),Sr.forEach(n,((e,n)=>{const s=new Ai(n),o=pu.ie(this.serializer,s),a=r.getIndexManager(s),c=Wu.ie(s,this.serializer,a,r.referenceDelegate);return new _l(i,c,o,a).recalculateAndSaveOverlaysForDocumentKeys(new ds(t,Pr.ct),e).next()}))}))}}function Ll(e){e.createObjectStore("targetDocuments",{keyPath:Yr}).createIndex("documentTargetsIndex",Xr,{unique:!0}),e.createObjectStore("targets",{keyPath:"targetId"}).createIndex("queryTargetsIndex",Qr,{unique:!0}),e.createObjectStore("targetGlobal")}const Pl="Failed to obtain exclusive access to the persistence layer. To allow shared access, multi-tab synchronization has to be enabled in all tabs. If you are using `experimentalForceOwningTab:true`, make sure that only one tab has persistence enabled at any given time.";class $l{constructor(e,t,n,i,r,s,o,a,c,u,l=15){if(this.allowTabSynchronization=e,this.persistenceKey=t,this.clientId=n,this.Ws=r,this.window=s,this.document=o,this.Hs=c,this.Js=u,this.Ys=l,this.Vs=null,this.Ss=!1,this.isPrimary=!1,this.networkEnabled=!0,this.Zs=null,this.inForeground=!1,this.Xs=null,this.ti=null,this.ei=Number.NEGATIVE_INFINITY,this.ni=e=>Promise.resolve(),!$l.D())throw new zi(ji.UNIMPLEMENTED,"This platform is either missing IndexedDB or is known to have an incomplete implementation. Offline persistence has been disabled.");this.referenceDelegate=new ul(this,i),this.si=t+"main",this.serializer=new Xc(a),this.ii=new Er(this.si,this.Ys,new Rl(this.serializer)),this.Ds=new tl(this.referenceDelegate,this.serializer),this.remoteDocumentCache=fl(this.serializer),this.xs=new hu,this.window&&this.window.localStorage?this.ri=this.window.localStorage:(this.ri=null,!1===u&&Pi("IndexedDbPersistence","LocalStorage is unavailable. As a result, persistence may not work reliably. In particular enablePersistence() could fail immediately after refreshing the page."))}start(){return this.oi().then((()=>{if(!this.isPrimary&&!this.allowTabSynchronization)throw new zi(ji.FAILED_PRECONDITION,Pl);return this.ui(),this.ci(),this.ai(),this.runTransaction("getHighestListenSequenceNumber","readonly",(e=>this.Ds.getHighestSequenceNumber(e)))})).then((e=>{this.Vs=new Pr(e,this.Hs)})).then((()=>{this.Ss=!0})).catch((e=>(this.ii&&this.ii.close(),Promise.reject(e))))}hi(e){return this.ni=async t=>{if(this.started)return e(t)},e(this.isPrimary)}setDatabaseDeletedListener(e){this.ii.B((async t=>{null===t.newVersion&&await e()}))}setNetworkEnabled(e){this.networkEnabled!==e&&(this.networkEnabled=e,this.Ws.enqueueAndForget((async()=>{this.started&&await this.oi()})))}oi(){return this.runTransaction("updateClientMetadataAndTryBecomePrimary","readwrite",(e=>Vl(e).put({clientId:this.clientId,updateTimeMs:Date.now(),networkEnabled:this.networkEnabled,inForeground:this.inForeground}).next((()=>{if(this.isPrimary)return this.li(e).next((e=>{e||(this.isPrimary=!1,this.Ws.enqueueRetryable((()=>this.ni(!1))))}))})).next((()=>this.fi(e))).next((t=>this.isPrimary&&!t?this.di(e).next((()=>!1)):!!t&&this.wi(e).next((()=>!0)))))).catch((e=>{if(xr(e))return Li("IndexedDbPersistence","Failed to extend owner lease: ",e),this.isPrimary;if(!this.allowTabSynchronization)throw e;return Li("IndexedDbPersistence","Releasing owner lease after error during lease refresh",e),!1})).then((e=>{this.isPrimary!==e&&this.Ws.enqueueRetryable((()=>this.ni(e))),this.isPrimary=e}))}li(e){return Ml(e).get("owner").next((e=>Sr.resolve(this._i(e))))}mi(e){return Vl(e).delete(this.clientId)}async gi(){if(this.isPrimary&&!this.yi(this.ei,18e5)){this.ei=Date.now();const e=await this.runTransaction("maybeGarbageCollectMultiClientState","readwrite-primary",(e=>{const t=fs(e,"clientMetadata");return t.j().next((e=>{const n=this.pi(e,18e5),i=e.filter((e=>-1===n.indexOf(e)));return Sr.forEach(i,(e=>t.delete(e.clientId))).next((()=>i))}))})).catch((()=>[]));if(this.ri)for(const t of e)this.ri.removeItem(this.Ii(t.clientId))}}ai(){this.ti=this.Ws.enqueueAfterDelay("client_metadata_refresh",4e3,(()=>this.oi().then((()=>this.gi())).then((()=>this.ai()))))}_i(e){return!!e&&e.ownerId===this.clientId}fi(e){return this.Js?Sr.resolve(!0):Ml(e).get("owner").next((t=>{if(null!==t&&this.yi(t.leaseTimestampMs,5e3)&&!this.Ti(t.ownerId)){if(this._i(t)&&this.networkEnabled)return!0;if(!this._i(t)){if(!t.allowTabSynchronization)throw new zi(ji.FAILED_PRECONDITION,Pl);return!1}}return!(!this.networkEnabled||!this.inForeground)||Vl(e).j().next((e=>void 0===this.pi(e,5e3).find((e=>{if(this.clientId!==e.clientId){const t=!this.networkEnabled&&e.networkEnabled,n=!this.inForeground&&e.inForeground,i=this.networkEnabled===e.networkEnabled;if(t||n&&i)return!0}return!1}))))})).next((e=>(this.isPrimary!==e&&Li("IndexedDbPersistence",`Client ${e?"is":"is not"} eligible for a primary lease.`),e)))}async shutdown(){this.Ss=!1,this.Ei(),this.ti&&(this.ti.cancel(),this.ti=null),this.Ai(),this.Ri(),await this.ii.runTransaction("shutdown","readwrite",["owner","clientMetadata"],(e=>{const t=new ds(e,Pr.ct);return this.di(t).next((()=>this.mi(t)))})),this.ii.close(),this.vi()}pi(e,t){return e.filter((e=>this.yi(e.updateTimeMs,t)&&!this.Ti(e.clientId)))}bi(){return this.runTransaction("getActiveClients","readonly",(e=>Vl(e).j().next((e=>this.pi(e,18e5).map((e=>e.clientId))))))}get started(){return this.Ss}getMutationQueue(e,t){return Wu.ie(e,this.serializer,t,this.referenceDelegate)}getTargetCache(){return this.Ds}getRemoteDocumentCache(){return this.remoteDocumentCache}getIndexManager(e){return new Fu(e,this.serializer.se.databaseId)}getDocumentOverlayCache(e){return pu.ie(this.serializer,e)}getBundleCache(){return this.xs}runTransaction(e,t,n){Li("IndexedDbPersistence","Starting transaction:",e);const i="readonly"===t?"readonly":"readwrite",r=15===(s=this.Ys)?hs:14===s?ls:13===s?us:12===s?cs:11===s?as:void Vi();var s;let o;return this.ii.runTransaction(e,i,r,(i=>(o=new ds(i,this.Vs?this.Vs.next():Pr.ct),"readwrite-primary"===t?this.li(o).next((e=>!!e||this.fi(o))).next((t=>{if(!t)throw Pi(`Failed to obtain primary lease for action '${e}'.`),this.isPrimary=!1,this.Ws.enqueueRetryable((()=>this.ni(!1))),new zi(ji.FAILED_PRECONDITION,wr);return n(o)})).next((e=>this.wi(o).next((()=>e)))):this.Pi(o).next((()=>n(o)))))).then((e=>(o.raiseOnCommittedEvent(),e)))}Pi(e){return Ml(e).get("owner").next((e=>{if(null!==e&&this.yi(e.leaseTimestampMs,5e3)&&!this.Ti(e.ownerId)&&!this._i(e)&&!(this.Js||this.allowTabSynchronization&&e.allowTabSynchronization))throw new zi(ji.FAILED_PRECONDITION,Pl)}))}wi(e){const t={ownerId:this.clientId,allowTabSynchronization:this.allowTabSynchronization,leaseTimestampMs:Date.now()};return Ml(e).put("owner",t)}static D(){return Er.D()}di(e){const t=Ml(e);return t.get("owner").next((e=>this._i(e)?(Li("IndexedDbPersistence","Releasing primary lease."),t.delete("owner")):Sr.resolve()))}yi(e,t){const n=Date.now();return!(e<n-t)&&(!(e>n)||(Pi(`Detected an update time that is in the future: ${e} > ${n}`),!1))}ui(){null!==this.document&&"function"==typeof this.document.addEventListener&&(this.Xs=()=>{this.Ws.enqueueAndForget((()=>(this.inForeground="visible"===this.document.visibilityState,this.oi())))},this.document.addEventListener("visibilitychange",this.Xs),this.inForeground="visible"===this.document.visibilityState)}Ai(){this.Xs&&(this.document.removeEventListener("visibilitychange",this.Xs),this.Xs=null)}ci(){var e;"function"==typeof(null===(e=this.window)||void 0===e?void 0:e.addEventListener)&&(this.Zs=()=>{this.Ei();const e=/(?:Version|Mobile)\/1[456]/;(0,c.G6)()&&(navigator.appVersion.match(e)||navigator.userAgent.match(e))&&this.Ws.enterRestrictedMode(!0),this.Ws.enqueueAndForget((()=>this.shutdown()))},this.window.addEventListener("pagehide",this.Zs))}Ri(){this.Zs&&(this.window.removeEventListener("pagehide",this.Zs),this.Zs=null)}Ti(e){var t;try{const n=null!==(null===(t=this.ri)||void 0===t?void 0:t.getItem(this.Ii(e)));return Li("IndexedDbPersistence",`Client '${e}' ${n?"is":"is not"} zombied in LocalStorage`),n}catch(e){return Pi("IndexedDbPersistence","Failed to get zombied client id.",e),!1}}Ei(){if(this.ri)try{this.ri.setItem(this.Ii(this.clientId),String(Date.now()))}catch(S){Pi("Failed to set zombie client id.",S)}}vi(){if(this.ri)try{this.ri.removeItem(this.Ii(this.clientId))}catch(S){}}Ii(e){return`firestore_zombie_${this.persistenceKey}_${e}`}}function Ml(e){return fs(e,"owner")}function Vl(e){return fs(e,"clientMetadata")}function Fl(e,t){let n=e.projectId;return e.isDefaultDatabase||(n+="."+e.database),"firestore/"+t+"/"+n+"/"
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Bl{constructor(e,t,n,i){this.targetId=e,this.fromCache=t,this.Vi=n,this.Si=i}static Di(e,t){let n=pa(),i=pa();for(const r of t.docChanges)switch(r.type){case 0:n=n.add(r.doc.key);break;case 1:i=i.add(r.doc.key)}return new Bl(e,t.fromCache,n,i)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul{constructor(){this.Ci=!1}initialize(e,t){this.xi=e,this.indexManager=t,this.Ci=!0}getDocumentsMatchingQuery(e,t,n,i){return this.Ni(e,t).next((r=>r||this.ki(e,t,i,n))).next((n=>n||this.Oi(e,t)))}Ni(e,t){if(jo(t))return Sr.resolve(null);let n=Zo(t);return this.indexManager.getIndexType(e,n).next((i=>0===i?null:(null!==t.limit&&1===i&&(t=Wo(t,null,"F"),n=Zo(t)),this.indexManager.getDocumentsMatchingTarget(e,n).next((i=>{const r=pa(...i);return this.xi.getDocuments(e,r).next((i=>this.indexManager.getMinOffset(e,n).next((n=>{const s=this.$i(t,i);return this.Mi(t,s,r,n.readTime)?this.Ni(e,Wo(t,null,"F")):this.Fi(e,s,t,n)}))))})))))}ki(e,t,n,i){return jo(t)||i.isEqual(sr.min())?this.Oi(e,t):this.xi.getDocuments(e,n).next((r=>{const s=this.$i(t,r);return this.Mi(t,s,n,i)?this.Oi(e,t):(Di()<=a["in"].DEBUG&&Li("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),Xo(t)),this.Fi(e,s,t,gr(i,-1)))}))}$i(e,t){let n=new ws(ta(e));return t.forEach(((t,i)=>{Jo(e,i)&&(n=n.add(i))})),n}Mi(e,t,n,i){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const r="F"===e.limitType?t.last():t.first();return!!r&&(r.hasPendingWrites||r.version.compareTo(i)>0)}Oi(e,t){return Di()<=a["in"].DEBUG&&Li("QueryEngine","Using full collection scan to execute query:",Xo(t)),this.xi.getDocumentsMatchingQuery(e,t,yr.min())}Fi(e,t,n,i){return this.xi.getDocumentsMatchingQuery(e,n,i).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jl{constructor(e,t,n,i){this.persistence=e,this.Bi=t,this.serializer=i,this.Li=new vs(tr),this.qi=new ia((e=>Ro(e)),Lo),this.Ui=new Map,this.Ki=e.getRemoteDocumentCache(),this.Ds=e.getTargetCache(),this.xs=e.getBundleCache(),this.Gi(n)}Gi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new _l(this.Ki,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ki.setIndexManager(this.indexManager),this.Bi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.Li)))}}function zl(e,t,n,i){return new jl(e,t,n,i)}async function ql(e,t){const n=Ui(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let i;return n.mutationQueue.getAllMutationBatches(e).next((r=>(i=r,n.Gi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const r=[],s=[];let o=pa();for(const e of i){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Qi:e,removedBatchIds:r,addedBatchIds:s})))}))}))}function Hl(e,t){const n=Ui(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const i=t.batch.keys(),r=n.Ki.newChangeBuffer({trackRemovals:!0});return function(e,t,n,i){const r=n.batch,s=r.keys();let o=Sr.resolve();return s.forEach((e=>{o=o.next((()=>i.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Fi(null!==s),t.version.compareTo(s)<0&&(r.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),i.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,r)))}(n,e,t,r).next((()=>r.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=pa();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,i)))}))}function Gl(e){const t=Ui(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Ds.getLastRemoteSnapshotVersion(e)))}function Zl(e,t){const n=Ui(e),i=t.snapshotVersion;let r=n.Li;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ki.newChangeBuffer({trackRemovals:!0});r=n.Li;const o=[];t.targetChanges.forEach(((s,a)=>{const c=r.get(a);if(!c)return;o.push(n.Ds.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Ds.addMatchingKeys(e,s.addedDocuments,a))));let u=c.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?u=u.withResumeToken(ks.EMPTY_BYTE_STRING,sr.min()).withLastLimboFreeSnapshotVersion(sr.min()):s.resumeToken.approximateByteSize()>0&&(u=u.withResumeToken(s.resumeToken,i)),r=r.insert(a,u),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(c,u,s)&&o.push(n.Ds.updateTargetData(e,u))}));let a=sa(),c=pa();if(t.documentUpdates.forEach((i=>{t.resolvedLimboDocuments.has(i)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,i))})),o.push(Kl(e,s,t.documentUpdates).next((e=>{a=e.zi,c=e.ji}))),!i.isEqual(sr.min())){const t=n.Ds.getLastRemoteSnapshotVersion(e).next((t=>n.Ds.setTargetsMetadata(e,e.currentSequenceNumber,i)));o.push(t)}return Sr.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,c))).next((()=>a))})).then((e=>(n.Li=r,e)))}function Kl(e,t,n){let i=pa(),r=pa();return n.forEach((e=>i=i.add(e))),t.getEntries(e,i).next((e=>{let i=sa();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(r=r.add(n)),s.isNoDocument()&&s.version.isEqual(sr.min())?(t.removeEntry(n,s.readTime),i=i.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),i=i.insert(n,s)):Li("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{zi:i,ji:r}}))}function Wl(e,t){const n=Ui(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function Ql(e,t){const n=Ui(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let i;return n.Ds.getTargetData(e,t).next((r=>r?(i=r,Sr.resolve(i)):n.Ds.allocateTargetId(e).next((r=>(i=new Yc(t,r,0,e.currentSequenceNumber),n.Ds.addTargetData(e,i).next((()=>i)))))))})).then((e=>{const i=n.Li.get(e.targetId);return(null===i||e.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(n.Li=n.Li.insert(e.targetId,e),n.qi.set(t,e.targetId)),e}))}async function Yl(e,t,n){const i=Ui(e),r=i.Li.get(t),s=n?"readwrite":"readwrite-primary";try{n||await i.persistence.runTransaction("Release target",s,(e=>i.persistence.referenceDelegate.removeTarget(e,r)))}catch(e){if(!xr(e))throw e;Li("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}i.Li=i.Li.remove(t),i.qi.delete(r.target)}function Xl(e,t,n){const i=Ui(e);let r=sr.min(),s=pa();return i.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const i=Ui(e),r=i.qi.get(n);return void 0!==r?Sr.resolve(i.Li.get(r)):i.Ds.getTargetData(t,n)}(i,e,Zo(t)).next((t=>{if(t)return r=t.lastLimboFreeSnapshotVersion,i.Ds.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>i.Bi.getDocumentsMatchingQuery(e,t,n?r:sr.min(),n?s:pa()))).next((e=>(th(i,ea(t),e),{documents:e,Wi:s})))))}function Jl(e,t){const n=Ui(e),i=Ui(n.Ds),r=n.Li.get(t);return r?Promise.resolve(r.target):n.persistence.runTransaction("Get target data","readonly",(e=>i.ne(e,t).next((e=>e?e.target:null))))}function eh(e,t){const n=Ui(e),i=n.Ui.get(t)||sr.min();return n.persistence.runTransaction("Get new document changes","readonly",(e=>n.Ki.getAllFromCollectionGroup(e,t,gr(i,-1),Number.MAX_SAFE_INTEGER))).then((e=>(th(n,t,e),e)))}function th(e,t,n){let i=e.Ui.get(t)||sr.min();n.forEach(((e,t)=>{t.readTime.compareTo(i)>0&&(i=t.readTime)})),e.Ui.set(t,i)}async function nh(e,t,n,i){const r=Ui(e);let s=pa(),o=sa();for(const u of n){const e=t.Hi(u.metadata.name);u.document&&(s=s.add(e));const n=t.Ji(u);n.setReadTime(t.Yi(u.metadata.readTime)),o=o.insert(e,n)}const a=r.Ki.newChangeBuffer({trackRemovals:!0}),c=await Ql(r,function(e){return Zo(Uo(ar.fromString(`__bundle__/docs/${e}`)))}(i));return r.persistence.runTransaction("Apply bundle documents","readwrite",(e=>Kl(e,a,o).next((t=>(a.apply(e),t))).next((t=>r.Ds.removeMatchingKeysForTargetId(e,c.targetId).next((()=>r.Ds.addMatchingKeys(e,s,c.targetId))).next((()=>r.localDocuments.getLocalViewOfDocuments(e,t.zi,t.ji))).next((()=>t.zi))))))}async function ih(e,t,n=pa()){const i=await Ql(e,Zo(au(t.bundledQuery))),r=Ui(e);return r.persistence.runTransaction("Save named query","readwrite",(e=>{const s=Ic(t.readTime);if(i.snapshotVersion.compareTo(s)>=0)return r.xs.saveNamedQuery(e,t);const o=i.withResumeToken(ks.EMPTY_BYTE_STRING,s);return r.Li=r.Li.insert(o.targetId,o),r.Ds.updateTargetData(e,o).next((()=>r.Ds.removeMatchingKeysForTargetId(e,i.targetId))).next((()=>r.Ds.addMatchingKeys(e,n,i.targetId))).next((()=>r.xs.saveNamedQuery(e,t)))}))}function rh(e,t){return`firestore_clients_${e}_${t}`}function sh(e,t,n){let i=`firestore_mutations_${e}_${n}`;return t.isAuthenticated()&&(i+=`_${t.uid}`),i}function oh(e,t){return`firestore_targets_${e}_${t}`}class ah{constructor(e,t,n,i){this.user=e,this.batchId=t,this.state=n,this.error=i}static Zi(e,t,n){const i=JSON.parse(n);let r,s="object"==typeof i&&-1!==["pending","acknowledged","rejected"].indexOf(i.state)&&(void 0===i.error||"object"==typeof i.error);return s&&i.error&&(s="string"==typeof i.error.message&&"string"==typeof i.error.code,s&&(r=new zi(i.error.code,i.error.message))),s?new ah(e,t,i.state,r):(Pi("SharedClientState",`Failed to parse mutation state for ID '${t}': ${n}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class ch{constructor(e,t,n){this.targetId=e,this.state=t,this.error=n}static Zi(e,t){const n=JSON.parse(t);let i,r="object"==typeof n&&-1!==["not-current","current","rejected"].indexOf(n.state)&&(void 0===n.error||"object"==typeof n.error);return r&&n.error&&(r="string"==typeof n.error.message&&"string"==typeof n.error.code,r&&(i=new zi(n.error.code,n.error.message))),r?new ch(e,n.state,i):(Pi("SharedClientState",`Failed to parse target state for ID '${e}': ${t}`),null)}Xi(){const e={state:this.state,updateTimeMs:Date.now()};return this.error&&(e.error={code:this.error.code,message:this.error.message}),JSON.stringify(e)}}class uh{constructor(e,t){this.clientId=e,this.activeTargetIds=t}static Zi(e,t){const n=JSON.parse(t);let i="object"==typeof n&&n.activeTargetIds instanceof Array,r=ga();for(let s=0;i&&s<n.activeTargetIds.length;++s)i=Vr(n.activeTargetIds[s]),r=r.add(n.activeTargetIds[s]);return i?new uh(e,r):(Pi("SharedClientState",`Failed to parse client data for instance '${e}': ${t}`),null)}}class lh{constructor(e,t){this.clientId=e,this.onlineState=t}static Zi(e){const t=JSON.parse(e);return"object"==typeof t&&-1!==["Unknown","Online","Offline"].indexOf(t.onlineState)&&"string"==typeof t.clientId?new lh(t.clientId,t.onlineState):(Pi("SharedClientState",`Failed to parse online state: ${e}`),null)}}class hh{constructor(){this.activeTargetIds=ga()}tr(e){this.activeTargetIds=this.activeTargetIds.add(e)}er(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Xi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class dh{constructor(e,t,n,i,r){this.window=e,this.Ws=t,this.persistenceKey=n,this.nr=i,this.syncEngine=null,this.onlineStateHandler=null,this.sequenceNumberHandler=null,this.sr=this.ir.bind(this),this.rr=new vs(tr),this.started=!1,this.ur=[];const s=n.replace(/[.*+?^${}()|[\]\\]/g,"\\$&");this.storage=this.window.localStorage,this.currentUser=r,this.cr=rh(this.persistenceKey,this.nr),this.ar=function(e){return`firestore_sequence_number_${e}`}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.persistenceKey),this.rr=this.rr.insert(this.nr,new hh),this.hr=new RegExp(`^firestore_clients_${s}_([^_]*)$`),this.lr=new RegExp(`^firestore_mutations_${s}_(\\d+)(?:_(.*))?$`),this.dr=new RegExp(`^firestore_targets_${s}_(\\d+)$`),this.wr=function(e){return`firestore_online_state_${e}`}(this.persistenceKey),this._r=function(e){return`firestore_bundle_loaded_v2_${e}`}(this.persistenceKey),this.window.addEventListener("storage",this.sr)}static D(e){return!(!e||!e.localStorage)}async start(){const e=await this.syncEngine.bi();for(const n of e){if(n===this.nr)continue;const e=this.getItem(rh(this.persistenceKey,n));if(e){const t=uh.Zi(n,e);t&&(this.rr=this.rr.insert(t.clientId,t))}}this.mr();const t=this.storage.getItem(this.wr);if(t){const e=this.gr(t);e&&this.yr(e)}for(const n of this.ur)this.ir(n);this.ur=[],this.window.addEventListener("pagehide",(()=>this.shutdown())),this.started=!0}writeSequenceNumber(e){this.setItem(this.ar,JSON.stringify(e))}getAllActiveQueryTargets(){return this.pr(this.rr)}isActiveQueryTarget(e){let t=!1;return this.rr.forEach(((n,i)=>{i.activeTargetIds.has(e)&&(t=!0)})),t}addPendingMutation(e){this.Ir(e,"pending")}updateMutationState(e,t,n){this.Ir(e,t,n),this.Tr(e)}addLocalQueryTarget(e){let t="not-current";if(this.isActiveQueryTarget(e)){const n=this.storage.getItem(oh(this.persistenceKey,e));if(n){const i=ch.Zi(e,n);i&&(t=i.state)}}return this.Er.tr(e),this.mr(),t}removeLocalQueryTarget(e){this.Er.er(e),this.mr()}isLocalQueryTarget(e){return this.Er.activeTargetIds.has(e)}clearQueryState(e){this.removeItem(oh(this.persistenceKey,e))}updateQueryState(e,t,n){this.Ar(e,t,n)}handleUserChange(e,t,n){t.forEach((e=>{this.Tr(e)})),this.currentUser=e,n.forEach((e=>{this.addPendingMutation(e)}))}setOnlineState(e){this.Rr(e)}notifyBundleLoaded(e){this.vr(e)}shutdown(){this.started&&(this.window.removeEventListener("storage",this.sr),this.removeItem(this.cr),this.started=!1)}getItem(e){const t=this.storage.getItem(e);return Li("SharedClientState","READ",e,t),t}setItem(e,t){Li("SharedClientState","SET",e,t),this.storage.setItem(e,t)}removeItem(e){Li("SharedClientState","REMOVE",e),this.storage.removeItem(e)}ir(e){const t=e;if(t.storageArea===this.storage){if(Li("SharedClientState","EVENT",t.key,t.newValue),t.key===this.cr)return void Pi("Received WebStorage notification for local change. Another client might have garbage-collected our state");this.Ws.enqueueRetryable((async()=>{if(this.started){if(null!==t.key)if(this.hr.test(t.key)){if(null==t.newValue){const e=this.br(t.key);return this.Pr(e,null)}{const e=this.Vr(t.key,t.newValue);if(e)return this.Pr(e.clientId,e)}}else if(this.lr.test(t.key)){if(null!==t.newValue){const e=this.Sr(t.key,t.newValue);if(e)return this.Dr(e)}}else if(this.dr.test(t.key)){if(null!==t.newValue){const e=this.Cr(t.key,t.newValue);if(e)return this.Nr(e)}}else if(t.key===this.wr){if(null!==t.newValue){const e=this.gr(t.newValue);if(e)return this.yr(e)}}else if(t.key===this.ar){const e=function(e){let t=Pr.ct;if(null!=e)try{const n=JSON.parse(e);Fi("number"==typeof n),t=n}catch(e){Pi("SharedClientState","Failed to read sequence number from WebStorage",e)}return t}(t.newValue);e!==Pr.ct&&this.sequenceNumberHandler(e)}else if(t.key===this._r){const e=this.kr(t.newValue);await Promise.all(e.map((e=>this.syncEngine.Or(e))))}}else this.ur.push(t)}))}}get Er(){return this.rr.get(this.nr)}mr(){this.setItem(this.cr,this.Er.Xi())}Ir(e,t,n){const i=new ah(this.currentUser,e,t,n),r=sh(this.persistenceKey,this.currentUser,e);this.setItem(r,i.Xi())}Tr(e){const t=sh(this.persistenceKey,this.currentUser,e);this.removeItem(t)}Rr(e){const t={clientId:this.nr,onlineState:e};this.storage.setItem(this.wr,JSON.stringify(t))}Ar(e,t,n){const i=oh(this.persistenceKey,e),r=new ch(e,t,n);this.setItem(i,r.Xi())}vr(e){const t=JSON.stringify(Array.from(e));this.setItem(this._r,t)}br(e){const t=this.hr.exec(e);return t?t[1]:null}Vr(e,t){const n=this.br(e);return uh.Zi(n,t)}Sr(e,t){const n=this.lr.exec(e),i=Number(n[1]),r=void 0!==n[2]?n[2]:null;return ah.Zi(new Ai(r),i,t)}Cr(e,t){const n=this.dr.exec(e),i=Number(n[1]);return ch.Zi(i,t)}gr(e){return lh.Zi(e)}kr(e){return JSON.parse(e)}async Dr(e){if(e.user.uid===this.currentUser.uid)return this.syncEngine.$r(e.batchId,e.state,e.error);Li("SharedClientState",`Ignoring mutation for non-active user ${e.user.uid}`)}Nr(e){return this.syncEngine.Mr(e.targetId,e.state,e.error)}Pr(e,t){const n=t?this.rr.insert(e,t):this.rr.remove(e),i=this.pr(this.rr),r=this.pr(n),s=[],o=[];return r.forEach((e=>{i.has(e)||s.push(e)})),i.forEach((e=>{r.has(e)||o.push(e)})),this.syncEngine.Fr(s,o).then((()=>{this.rr=n}))}yr(e){this.rr.get(e.clientId)&&this.onlineStateHandler(e.onlineState)}pr(e){let t=ga();return e.forEach(((e,n)=>{t=t.unionWith(n.activeTargetIds)})),t}}class fh{constructor(){this.Br=new hh,this.Lr={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Br.tr(e),this.Lr[e]||"not-current"}updateQueryState(e,t,n){this.Lr[e]=t}removeLocalQueryTarget(e){this.Br.er(e)}isLocalQueryTarget(e){return this.Br.activeTargetIds.has(e)}clearQueryState(e){delete this.Lr[e]}getAllActiveQueryTargets(){return this.Br.activeTargetIds}isActiveQueryTarget(e){return this.Br.activeTargetIds.has(e)}start(){return this.Br=new hh,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ph{qr(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(){this.Ur=()=>this.Kr(),this.Gr=()=>this.Qr(),this.zr=[],this.jr()}qr(e){this.zr.push(e)}shutdown(){window.removeEventListener("online",this.Ur),window.removeEventListener("offline",this.Gr)}jr(){window.addEventListener("online",this.Ur),window.addEventListener("offline",this.Gr)}Kr(){Li("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.zr)e(0)}Qr(){Li("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.zr)e(1)}static D(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let gh=null;function vh(){return null===gh?gh=268435456+Math.round(2147483648*Math.random()):gh++,"0x"+gh.toString(16)
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}const yh={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bh{constructor(e){this.Wr=e.Wr,this.Hr=e.Hr}Jr(e){this.Yr=e}Zr(e){this.Xr=e}onMessage(e){this.eo=e}close(){this.Hr()}send(e){this.Wr(e)}no(){this.Yr()}so(e){this.Xr(e)}io(e){this.eo(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wh="WebChannelConnection";class _h extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.ro=t+"://"+e.host,this.oo="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}get uo(){return!1}co(e,t,n,i,r){const s=vh(),o=this.ao(e,t);Li("RestConnection",`Sending RPC '${e}' ${s}:`,o,n);const a={};return this.ho(a,i,r),this.lo(e,o,a,n).then((t=>(Li("RestConnection",`Received RPC '${e}' ${s}: `,t),t)),(t=>{throw $i("RestConnection",`RPC '${e}' ${s} failed with error: `,t,"url: ",o,"request:",n),t}))}fo(e,t,n,i,r,s){return this.co(e,t,n,i,r)}ho(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Oi,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}ao(e,t){const n=yh[e];return`${this.ro}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}lo(e,t,n,i){const r=vh();return new Promise(((s,o)=>{const a=new Ci;a.setWithCredentials(!0),a.listenOnce(Ii.COMPLETE,(()=>{try{switch(a.getLastErrorCode()){case _i.NO_ERROR:const t=a.getResponseJson();Li(wh,`XHR for RPC '${e}' ${r} received:`,JSON.stringify(t)),s(t);break;case _i.TIMEOUT:Li(wh,`RPC '${e}' ${r} timed out`),o(new zi(ji.DEADLINE_EXCEEDED,"Request time out"));break;case _i.HTTP_ERROR:const n=a.getStatus();if(Li(wh,`RPC '${e}' ${r} failed with status:`,n,"response text:",a.getResponseText()),n>0){let e=a.getResponseJson();Array.isArray(e)&&(e=e[0]);const t=null==e?void 0:e.error;if(t&&t.status&&t.message){const e=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(ji).indexOf(t)>=0?t:ji.UNKNOWN}(t.status);o(new zi(e,t.message))}else o(new zi(ji.UNKNOWN,"Server responded with status "+a.getStatus()))}else o(new zi(ji.UNAVAILABLE,"Connection failed."));break;default:Vi()}}finally{Li(wh,`RPC '${e}' ${r} completed.`)}}));const c=JSON.stringify(i);Li(wh,`RPC '${e}' ${r} sending request:`,i),a.send(t,"POST",c,n,15)}))}wo(e,t,n){const i=vh(),r=[this.ro,"/","google.firestore.v1.Firestore","/",e,"/channel"],s=bi(),o=wi(),a={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(a.xmlHttpFactory=new Ei({})),this.ho(a.initMessageHeaders,t,n),a.encodeInitMessageHeaders=!0;const c=r.join("");Li(wh,`Creating RPC '${e}' stream ${i}: ${c}`,a);const u=s.createWebChannel(c,a);let l=!1,h=!1;const d=new bh({Wr:t=>{h?Li(wh,`Not sending because RPC '${e}' stream ${i} is closed:`,t):(l||(Li(wh,`Opening RPC '${e}' stream ${i} transport.`),u.open(),l=!0),Li(wh,`RPC '${e}' stream ${i} sending:`,t),u.send(t))},Hr:()=>u.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(u,ki.EventType.OPEN,(()=>{h||Li(wh,`RPC '${e}' stream ${i} transport opened.`)})),f(u,ki.EventType.CLOSE,(()=>{h||(h=!0,Li(wh,`RPC '${e}' stream ${i} transport closed`),d.so())})),f(u,ki.EventType.ERROR,(t=>{h||(h=!0,$i(wh,`RPC '${e}' stream ${i} transport errored:`,t),d.so(new zi(ji.UNAVAILABLE,"The operation could not be completed")))})),f(u,ki.EventType.MESSAGE,(t=>{var n;if(!h){const r=t.data[0];Fi(!!r);const s=r,o=s.error||(null===(n=s[0])||void 0===n?void 0:n.error);if(o){Li(wh,`RPC '${e}' stream ${i} received error:`,o);const t=o.status;let n=function(e){const t=ec[e];if(void 0!==t)return ic(t)}(t),r=o.message;void 0===n&&(n=ji.INTERNAL,r="Unknown error status: "+t+" with message "+o.message),h=!0,d.so(new zi(n,r)),u.close()}else Li(wh,`RPC '${e}' stream ${i} received:`,r),d.io(r)}})),f(o,Si.STAT_EVENT,(t=>{t.stat===Ti.PROXY?Li(wh,`RPC '${e}' stream ${i} detected buffering proxy`):t.stat===Ti.NOPROXY&&Li(wh,`RPC '${e}' stream ${i} detected no buffering proxy`)})),setTimeout((()=>{d.no()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ih(){return"undefined"!=typeof window?window:null}function Sh(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Th(e){return new yc(e,!0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Eh{constructor(e,t,n=1e3,i=1.5,r=6e4){this.Ws=e,this.timerId=t,this._o=n,this.mo=i,this.yo=r,this.po=0,this.Io=null,this.To=Date.now(),this.reset()}reset(){this.po=0}Eo(){this.po=this.yo}Ao(e){this.cancel();const t=Math.floor(this.po+this.Ro()),n=Math.max(0,Date.now()-this.To),i=Math.max(0,t-n);i>0&&Li("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.po} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Io=this.Ws.enqueueAfterDelay(this.timerId,i,(()=>(this.To=Date.now(),e()))),this.po*=this.mo,this.po<this._o&&(this.po=this._o),this.po>this.yo&&(this.po=this.yo)}vo(){null!==this.Io&&(this.Io.skipDelay(),this.Io=null)}cancel(){null!==this.Io&&(this.Io.cancel(),this.Io=null)}Ro(){return(Math.random()-.5)*this.po}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kh{constructor(e,t,n,i,r,s,o,a){this.Ws=e,this.bo=n,this.Po=i,this.connection=r,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Vo=0,this.So=null,this.Do=null,this.stream=null,this.Co=new Eh(e,t)}xo(){return 1===this.state||5===this.state||this.No()}No(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.ko()}async stop(){this.xo()&&await this.close(0)}Oo(){this.state=0,this.Co.reset()}$o(){this.No()&&null===this.So&&(this.So=this.Ws.enqueueAfterDelay(this.bo,6e4,(()=>this.Mo())))}Fo(e){this.Bo(),this.stream.send(e)}async Mo(){if(this.No())return this.close(0)}Bo(){this.So&&(this.So.cancel(),this.So=null)}Lo(){this.Do&&(this.Do.cancel(),this.Do=null)}async close(e,t){this.Bo(),this.Lo(),this.Co.cancel(),this.Vo++,4!==e?this.Co.reset():t&&t.code===ji.RESOURCE_EXHAUSTED?(Pi(t.toString()),Pi("Using maximum backoff delay to prevent overloading the backend."),this.Co.Eo()):t&&t.code===ji.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.qo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Zr(t)}qo(){}auth(){this.state=1;const e=this.Uo(this.Vo),t=this.Vo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Vo===t&&this.Ko(e,n)}),(t=>{e((()=>{const e=new zi(ji.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Go(e)}))}))}Ko(e,t){const n=this.Uo(this.Vo);this.stream=this.Qo(e,t),this.stream.Jr((()=>{n((()=>(this.state=2,this.Do=this.Ws.enqueueAfterDelay(this.Po,1e4,(()=>(this.No()&&(this.state=3),Promise.resolve()))),this.listener.Jr())))})),this.stream.Zr((e=>{n((()=>this.Go(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}ko(){this.state=5,this.Co.Ao((async()=>{this.state=0,this.start()}))}Go(e){return Li("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Uo(e){return t=>{this.Ws.enqueueAndForget((()=>this.Vo===e?t():(Li("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Ch extends kh{constructor(e,t,n,i,r,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r}Qo(e,t){return this.connection.wo("Listen",e,t)}onMessage(e){this.Co.reset();const t=Lc(this.serializer,e),n=function(e){if(!("targetChange"in e))return sr.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?sr.min():t.readTime?Ic(t.readTime):sr.min()}(e);return this.listener.zo(t,n)}jo(e){const t={};t.database=Ac(this.serializer),t.addTarget=function(e,t){let n;const i=t.target;return n=Po(i)?{documents:Vc(e,i)}:{query:Fc(e,i)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=wc(e,t.resumeToken):t.snapshotVersion.compareTo(sr.min())>0&&(n.readTime=bc(e,t.snapshotVersion.toTimestamp())),n}(this.serializer,e);const n=Uc(this.serializer,e);n&&(t.labels=n),this.Fo(t)}Wo(e){const t={};t.database=Ac(this.serializer),t.removeTarget=e,this.Fo(t)}}class xh extends kh{constructor(e,t,n,i,r,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,i,s),this.serializer=r,this.Ho=!1}get Jo(){return this.Ho}start(){this.Ho=!1,this.lastStreamToken=void 0,super.start()}qo(){this.Ho&&this.Yo([])}Qo(e,t){return this.connection.wo("Write",e,t)}onMessage(e){if(Fi(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Ho){this.Co.reset();const t=Mc(e.writeResults,e.commitTime),n=Ic(e.commitTime);return this.listener.Zo(n,t)}return Fi(!e.writeResults||0===e.writeResults.length),this.Ho=!0,this.listener.Xo()}tu(){const e={};e.database=Ac(this.serializer),this.Fo(e)}Yo(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Pc(this.serializer,e)))};this.Fo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ah extends class{}{constructor(e,t,n,i){super(),this.authCredentials=e,this.appCheckCredentials=t,this.connection=n,this.serializer=i,this.eu=!1}nu(){if(this.eu)throw new zi(ji.FAILED_PRECONDITION,"The client has already been terminated.")}co(e,t,n){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,r])=>this.connection.co(e,t,n,i,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ji.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zi(ji.UNKNOWN,e.toString())}))}fo(e,t,n,i){return this.nu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,s])=>this.connection.fo(e,t,n,r,s,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===ji.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new zi(ji.UNKNOWN,e.toString())}))}terminate(){this.eu=!0}}class Oh{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.su=0,this.iu=null,this.ru=!0}ou(){0===this.su&&(this.uu("Unknown"),this.iu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.iu=null,this.cu("Backend didn't respond within 10 seconds."),this.uu("Offline"),Promise.resolve()))))}au(e){"Online"===this.state?this.uu("Unknown"):(this.su++,this.su>=1&&(this.hu(),this.cu(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.uu("Offline")))}set(e){this.hu(),this.su=0,"Online"===e&&(this.ru=!1),this.uu(e)}uu(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}cu(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.ru?(Pi(t),this.ru=!1):Li("OnlineStateTracker",t)}hu(){null!==this.iu&&(this.iu.cancel(),this.iu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nh{constructor(e,t,n,i,r){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.lu=[],this.fu=new Map,this.du=new Set,this.wu=[],this._u=r,this._u.qr((e=>{n.enqueueAndForget((async()=>{Bh(this)&&(Li("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Ui(e);t.du.add(4),await Rh(t),t.mu.set("Unknown"),t.du.delete(4),await Dh(t)}(this))}))})),this.mu=new Oh(n,i)}}async function Dh(e){if(Bh(e))for(const t of e.wu)await t(!0)}async function Rh(e){for(const t of e.wu)await t(!1)}function Lh(e,t){const n=Ui(e);n.fu.has(t.targetId)||(n.fu.set(t.targetId,t),Fh(n)?Vh(n):rd(n).No()&&$h(n,t))}function Ph(e,t){const n=Ui(e),i=rd(n);n.fu.delete(t),i.No()&&Mh(n,t),0===n.fu.size&&(i.No()?i.$o():Bh(n)&&n.mu.set("Unknown"))}function $h(e,t){e.gu.Ot(t.targetId),rd(e).jo(t)}function Mh(e,t){e.gu.Ot(t),rd(e).Wo(t)}function Vh(e){e.gu=new dc({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),ne:t=>e.fu.get(t)||null}),rd(e).start(),e.mu.ou()}function Fh(e){return Bh(e)&&!rd(e).xo()&&e.fu.size>0}function Bh(e){return 0===Ui(e).du.size}function Uh(e){e.gu=void 0}async function jh(e){e.fu.forEach(((t,n)=>{$h(e,t)}))}async function zh(e,t){Uh(e),Fh(e)?(e.mu.au(t),Vh(e)):e.mu.set("Unknown")}async function qh(e,t,n){if(e.mu.set("Online"),t instanceof lc&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const i of t.targetIds)e.fu.has(i)&&(await e.remoteSyncer.rejectListen(i,n),e.fu.delete(i),e.gu.removeTarget(i))}(e,t)}catch(n){Li("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await Hh(e,n)}else if(t instanceof cc?e.gu.Kt(t):t instanceof uc?e.gu.Jt(t):e.gu.zt(t),!n.isEqual(sr.min()))try{const t=await Gl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.gu.Xt(t);return n.targetChanges.forEach(((n,i)=>{if(n.resumeToken.approximateByteSize()>0){const r=e.fu.get(i);r&&e.fu.set(i,r.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.fu.get(t);if(!n)return;e.fu.set(t,n.withResumeToken(ks.EMPTY_BYTE_STRING,n.snapshotVersion)),Mh(e,t);const i=new Yc(n.target,t,1,n.sequenceNumber);$h(e,i)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){Li("RemoteStore","Failed to raise snapshot:",t),await Hh(e,t)}}async function Hh(e,t,n){if(!xr(t))throw t;e.du.add(1),await Rh(e),e.mu.set("Offline"),n||(n=()=>Gl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{Li("RemoteStore","Retrying IndexedDB access"),await n(),e.du.delete(1),await Dh(e)}))}function Gh(e,t){return t().catch((n=>Hh(e,n,t)))}async function Zh(e){const t=Ui(e),n=sd(t);let i=t.lu.length>0?t.lu[t.lu.length-1].batchId:-1;for(;Kh(t);)try{const e=await Wl(t.localStore,i);if(null===e){0===t.lu.length&&n.$o();break}i=e.batchId,Wh(t,e)}catch(e){await Hh(t,e)}Qh(t)&&Yh(t)}function Kh(e){return Bh(e)&&e.lu.length<10}function Wh(e,t){e.lu.push(t);const n=sd(e);n.No()&&n.Jo&&n.Yo(t.mutations)}function Qh(e){return Bh(e)&&!sd(e).xo()&&e.lu.length>0}function Yh(e){sd(e).start()}async function Xh(e){sd(e).tu()}async function Jh(e){const t=sd(e);for(const n of e.lu)t.Yo(n.mutations)}async function ed(e,t,n){const i=e.lu.shift(),r=Ya.from(i,t,n);await Gh(e,(()=>e.remoteSyncer.applySuccessfulWrite(r))),await Zh(e)}async function td(e,t){t&&sd(e).Jo&&await async function(e,t){if(n=t.code,nc(n)&&n!==ji.ABORTED){const n=e.lu.shift();sd(e).Oo(),await Gh(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await Zh(e)}var n}(e,t),Qh(e)&&Yh(e)}async function nd(e,t){const n=Ui(e);n.asyncQueue.verifyOperationInProgress(),Li("RemoteStore","RemoteStore received new credentials");const i=Bh(n);n.du.add(3),await Rh(n),i&&n.mu.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.du.delete(3),await Dh(n)}async function id(e,t){const n=Ui(e);t?(n.du.delete(2),await Dh(n)):t||(n.du.add(2),await Rh(n),n.mu.set("Unknown"))}function rd(e){return e.yu||(e.yu=function(e,t,n){const i=Ui(e);return i.nu(),new Ch(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{Jr:jh.bind(null,e),Zr:zh.bind(null,e),zo:qh.bind(null,e)}),e.wu.push((async t=>{t?(e.yu.Oo(),Fh(e)?Vh(e):e.mu.set("Unknown")):(await e.yu.stop(),Uh(e))}))),e.yu}function sd(e){return e.pu||(e.pu=function(e,t,n){const i=Ui(e);return i.nu(),new xh(t,i.connection,i.authCredentials,i.appCheckCredentials,i.serializer,n)}(e.datastore,e.asyncQueue,{Jr:Xh.bind(null,e),Zr:td.bind(null,e),Xo:Jh.bind(null,e),Zo:ed.bind(null,e)}),e.wu.push((async t=>{t?(e.pu.Oo(),await Zh(e)):(await e.pu.stop(),e.lu.length>0&&(Li("RemoteStore",`Stopping write stream with ${e.lu.length} pending writes`),e.lu=[]))}))),e.pu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class od{constructor(e,t,n,i,r){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=i,this.removalCallback=r,this.deferred=new qi,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,i,r){const s=Date.now()+n,o=new od(e,t,s,i,r);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new zi(ji.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ad(e,t){if(Pi("AsyncQueue",`${t}: ${e}`),xr(e))return new zi(ji.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cd{constructor(e){this.comparator=e?(t,n)=>e(t,n)||lr.comparator(t.key,n.key):(e,t)=>lr.comparator(e.key,t.key),this.keyedMap=aa(),this.sortedSet=new vs(this.comparator)}static emptySet(e){return new cd(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof cd))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,i=n.getNext().key;if(!e.isEqual(i))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new cd;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ud{constructor(){this.Iu=new vs(lr.comparator)}track(e){const t=e.doc.key,n=this.Iu.get(t);n?0!==e.type&&3===n.type?this.Iu=this.Iu.insert(t,e):3===e.type&&1!==n.type?this.Iu=this.Iu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.Iu=this.Iu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.Iu=this.Iu.remove(t):1===e.type&&2===n.type?this.Iu=this.Iu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.Iu=this.Iu.insert(t,{type:2,doc:e.doc}):Vi():this.Iu=this.Iu.insert(t,e)}Tu(){const e=[];return this.Iu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class ld{constructor(e,t,n,i,r,s,o,a,c){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=i,this.mutatedKeys=r,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a,this.hasCachedResults=c}static fromInitialDocuments(e,t,n,i,r){const s=[];return t.forEach((e=>{s.push({type:0,doc:e})})),new ld(e,t,cd.emptySet(t),s,n,i,!0,!1,r)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.hasCachedResults===e.hasCachedResults&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Qo(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let i=0;i<t.length;i++)if(t[i].type!==n[i].type||!t[i].doc.isEqual(n[i].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hd{constructor(){this.Eu=void 0,this.listeners=[]}}class dd{constructor(){this.queries=new ia((e=>Yo(e)),Qo),this.onlineState="Unknown",this.Au=new Set}}async function fd(e,t){const n=Ui(e),i=t.query;let r=!1,s=n.queries.get(i);if(s||(r=!0,s=new hd),r)try{s.Eu=await n.onListen(i)}catch(e){const n=ad(e,`Initialization of query '${Xo(t.query)}' failed`);return void t.onError(n)}n.queries.set(i,s),s.listeners.push(t),t.Ru(n.onlineState),s.Eu&&t.vu(s.Eu)&&vd(n)}async function pd(e,t){const n=Ui(e),i=t.query;let r=!1;const s=n.queries.get(i);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),r=0===s.listeners.length)}if(r)return n.queries.delete(i),n.onUnlisten(i)}function md(e,t){const n=Ui(e);let i=!1;for(const r of t){const e=r.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.vu(r)&&(i=!0);t.Eu=r}}i&&vd(n)}function gd(e,t,n){const i=Ui(e),r=i.queries.get(t);if(r)for(const s of r.listeners)s.onError(n);i.queries.delete(t)}function vd(e){e.Au.forEach((e=>{e.next()}))}class yd{constructor(e,t,n){this.query=e,this.bu=t,this.Pu=!1,this.Vu=null,this.onlineState="Unknown",this.options=n||{}}vu(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new ld(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0,e.hasCachedResults)}let t=!1;return this.Pu?this.Su(e)&&(this.bu.next(e),t=!0):this.Du(e,this.onlineState)&&(this.Cu(e),t=!0),this.Vu=e,t}onError(e){this.bu.error(e)}Ru(e){this.onlineState=e;let t=!1;return this.Vu&&!this.Pu&&this.Du(this.Vu,e)&&(this.Cu(this.Vu),t=!0),t}Du(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.xu||!n)&&(!e.docs.isEmpty()||e.hasCachedResults||"Offline"===t)}Su(e){if(e.docChanges.length>0)return!0;const t=this.Vu&&this.Vu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Cu(e){e=ld.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache,e.hasCachedResults),this.Pu=!0,this.bu.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bd{constructor(e,t){this.Nu=e,this.byteLength=t}ku(){return"metadata"in this.Nu}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.serializer=e}Hi(e){return kc(this.serializer,e)}Ji(e){return e.metadata.exists?Dc(this.serializer,e.document,!1):so.newNoDocument(this.Hi(e.metadata.name),this.Yi(e.metadata.readTime))}Yi(e){return Ic(e)}}class _d{constructor(e,t,n){this.Ou=e,this.localStore=t,this.serializer=n,this.queries=[],this.documents=[],this.collectionGroups=new Set,this.progress=Id(e)}$u(e){this.progress.bytesLoaded+=e.byteLength;let t=this.progress.documentsLoaded;if(e.Nu.namedQuery)this.queries.push(e.Nu.namedQuery);else if(e.Nu.documentMetadata){this.documents.push({metadata:e.Nu.documentMetadata}),e.Nu.documentMetadata.exists||++t;const n=ar.fromString(e.Nu.documentMetadata.name);this.collectionGroups.add(n.get(n.length-2))}else e.Nu.document&&(this.documents[this.documents.length-1].document=e.Nu.document,++t);return t!==this.progress.documentsLoaded?(this.progress.documentsLoaded=t,Object.assign({},this.progress)):null}Mu(e){const t=new Map,n=new wd(this.serializer);for(const i of e)if(i.metadata.queries){const e=n.Hi(i.metadata.name);for(const n of i.metadata.queries){const i=(t.get(n)||pa()).add(e);t.set(n,i)}}return t}async complete(){const e=await nh(this.localStore,new wd(this.serializer),this.documents,this.Ou.id),t=this.Mu(this.documents);for(const n of this.queries)await ih(this.localStore,n,t.get(n.name));return this.progress.taskState="Success",{progress:this.progress,Fu:this.collectionGroups,Bu:e}}}function Id(e){return{taskState:"Running",documentsLoaded:0,bytesLoaded:0,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sd{constructor(e){this.key=e}}class Td{constructor(e){this.key=e}}class Ed{constructor(e,t){this.query=e,this.Lu=t,this.qu=null,this.hasCachedResults=!1,this.current=!1,this.Uu=pa(),this.mutatedKeys=pa(),this.Ku=ta(e),this.Gu=new cd(this.Ku)}get Qu(){return this.Lu}zu(e,t){const n=t?t.ju:new ud,i=t?t.Gu:this.Gu;let r=t?t.mutatedKeys:this.mutatedKeys,s=i,o=!1;const a="F"===this.query.limitType&&i.size===this.query.limit?i.last():null,c="L"===this.query.limitType&&i.size===this.query.limit?i.first():null;if(e.inorderTraversal(((e,t)=>{const u=i.get(e),l=Jo(this.query,t)?t:null,h=!!u&&this.mutatedKeys.has(u.key),d=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let f=!1;u&&l?u.data.isEqual(l.data)?h!==d&&(n.track({type:3,doc:l}),f=!0):this.Wu(u,l)||(n.track({type:2,doc:l}),f=!0,(a&&this.Ku(l,a)>0||c&&this.Ku(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),f=!0):u&&!l&&(n.track({type:1,doc:u}),f=!0,(a||c)&&(o=!0)),f&&(l?(s=s.add(l),r=d?r.add(e):r.delete(e)):(s=s.delete(e),r=r.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),r=r.delete(e.key),n.track({type:1,doc:e})}return{Gu:s,ju:n,Mi:o,mutatedKeys:r}}Wu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const i=this.Gu;this.Gu=e.Gu,this.mutatedKeys=e.mutatedKeys;const r=e.ju.Tu();r.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Vi()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Ku(e.doc,t.doc))),this.Hu(n);const s=t?this.Ju():[],o=0===this.Uu.size&&this.current?1:0,a=o!==this.qu;return this.qu=o,0!==r.length||a?{snapshot:new ld(this.query,e.Gu,i,r,e.mutatedKeys,0===o,a,!1,!!n&&n.resumeToken.approximateByteSize()>0),Yu:s}:{Yu:s}}Ru(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Gu:this.Gu,ju:new ud,mutatedKeys:this.mutatedKeys,Mi:!1},!1)):{Yu:[]}}Zu(e){return!this.Lu.has(e)&&!!this.Gu.has(e)&&!this.Gu.get(e).hasLocalMutations}Hu(e){e&&(e.addedDocuments.forEach((e=>this.Lu=this.Lu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Lu=this.Lu.delete(e))),this.current=e.current)}Ju(){if(!this.current)return[];const e=this.Uu;this.Uu=pa(),this.Gu.forEach((e=>{this.Zu(e.key)&&(this.Uu=this.Uu.add(e.key))}));const t=[];return e.forEach((e=>{this.Uu.has(e)||t.push(new Td(e))})),this.Uu.forEach((n=>{e.has(n)||t.push(new Sd(n))})),t}Xu(e){this.Lu=e.Wi,this.Uu=pa();const t=this.zu(e.documents);return this.applyChanges(t,!0)}tc(){return ld.fromInitialDocuments(this.query,this.Gu,this.mutatedKeys,0===this.qu,this.hasCachedResults)}}class kd{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Cd{constructor(e){this.key=e,this.ec=!1}}class xd{constructor(e,t,n,i,r,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=i,this.currentUser=r,this.maxConcurrentLimboResolutions=s,this.nc={},this.sc=new ia((e=>Yo(e)),Qo),this.ic=new Map,this.rc=new Set,this.oc=new vs(lr.comparator),this.uc=new Map,this.cc=new Tl,this.ac={},this.hc=new Map,this.lc=el.bn(),this.onlineState="Unknown",this.fc=void 0}get isPrimaryClient(){return!0===this.fc}}async function Ad(e,t){const n=sf(e);let i,r;const s=n.sc.get(t);if(s)i=s.targetId,n.sharedClientState.addLocalQueryTarget(i),r=s.view.tc();else{const e=await Ql(n.localStore,Zo(t));n.isPrimaryClient&&Lh(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);i=e.targetId,r=await Od(n,t,i,"current"===s,e.resumeToken)}return r}async function Od(e,t,n,i,r){e.dc=(t,n,i)=>async function(e,t,n,i){let r=t.view.zu(n);r.Mi&&(r=await Xl(e.localStore,t.query,!1).then((({documents:e})=>t.view.zu(e,r))));const s=i&&i.targetChanges.get(t.targetId),o=t.view.applyChanges(r,e.isPrimaryClient,s);return zd(e,t.targetId,o.Yu),o.snapshot}(e,t,n,i);const s=await Xl(e.localStore,t,!0),o=new Ed(t,s.Wi),a=o.zu(s.documents),c=ac.createSynthesizedTargetChangeForCurrentChange(n,i&&"Offline"!==e.onlineState,r),u=o.applyChanges(a,e.isPrimaryClient,c);zd(e,n,u.Yu);const l=new kd(t,n,o);return e.sc.set(t,l),e.ic.has(n)?e.ic.get(n).push(t):e.ic.set(n,[t]),u.snapshot}async function Nd(e,t){const n=Ui(e),i=n.sc.get(t),r=n.ic.get(i.targetId);if(r.length>1)return n.ic.set(i.targetId,r.filter((e=>!Qo(e,t)))),void n.sc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(i.targetId),n.sharedClientState.isActiveQueryTarget(i.targetId)||await Yl(n.localStore,i.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(i.targetId),Ph(n.remoteStore,i.targetId),Ud(n,i.targetId)})).catch(Ir)):(Ud(n,i.targetId),await Yl(n.localStore,i.targetId,!0))}async function Dd(e,t,n){const i=of(e);try{const e=await function(e,t){const n=Ui(e),i=rr.now(),r=t.reduce(((e,t)=>e.add(t.key)),pa());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=sa(),c=pa();return n.Ki.getEntries(e,r).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(c=c.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((r=>{s=r;const o=[];for(const e of t){const t=Ua(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new qa(e.key,t,ro(t.value.mapValue),Pa.exists(!0)))}return n.mutationQueue.addMutationBatch(e,i,o,t)})).next((t=>{o=t;const i=t.applyToLocalDocumentSet(s,c);return n.documentOverlayCache.saveOverlays(e,t.batchId,i)}))})).then((()=>({batchId:o.batchId,changes:ca(s)})))}(i.localStore,t);i.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let i=e.ac[e.currentUser.toKey()];i||(i=new vs(tr)),i=i.insert(t,n),e.ac[e.currentUser.toKey()]=i}(i,e.batchId,n),await Gd(i,e.changes),await Zh(i.remoteStore)}catch(e){const t=ad(e,"Failed to persist write");n.reject(t)}}async function Rd(e,t){const n=Ui(e);try{const e=await Zl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const i=n.uc.get(t);i&&(Fi(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?i.ec=!0:e.modifiedDocuments.size>0?Fi(i.ec):e.removedDocuments.size>0&&(Fi(i.ec),i.ec=!1))})),await Gd(n,e,t)}catch(e){await Ir(e)}}function Ld(e,t,n){const i=Ui(e);if(i.isPrimaryClient&&0===n||!i.isPrimaryClient&&1===n){const e=[];i.sc.forEach(((n,i)=>{const r=i.view.Ru(t);r.snapshot&&e.push(r.snapshot)})),function(e,t){const n=Ui(e);n.onlineState=t;let i=!1;n.queries.forEach(((e,n)=>{for(const r of n.listeners)r.Ru(t)&&(i=!0)})),i&&vd(n)}(i.eventManager,t),e.length&&i.nc.zo(e),i.onlineState=t,i.isPrimaryClient&&i.sharedClientState.setOnlineState(t)}}async function Pd(e,t,n){const i=Ui(e);i.sharedClientState.updateQueryState(t,"rejected",n);const r=i.uc.get(t),s=r&&r.key;if(s){let e=new vs(lr.comparator);e=e.insert(s,so.newNoDocument(s,sr.min()));const n=pa().add(s),r=new oc(sr.min(),new Map,new ws(tr),e,n);await Rd(i,r),i.oc=i.oc.remove(s),i.uc.delete(t),Hd(i)}else await Yl(i.localStore,t,!1).then((()=>Ud(i,t,n))).catch(Ir)}async function $d(e,t){const n=Ui(e),i=t.batch.batchId;try{const e=await Hl(n.localStore,t);Bd(n,i,null),Fd(n,i),n.sharedClientState.updateMutationState(i,"acknowledged"),await Gd(n,e)}catch(e){await Ir(e)}}async function Md(e,t,n){const i=Ui(e);try{const e=await function(e,t){const n=Ui(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let i;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Fi(null!==t),i=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,i,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,i))).next((()=>n.localDocuments.getDocuments(e,i)))}))}(i.localStore,t);Bd(i,t,n),Fd(i,t),i.sharedClientState.updateMutationState(t,"rejected",n),await Gd(i,e)}catch(n){await Ir(n)}}async function Vd(e,t){const n=Ui(e);Bh(n.remoteStore)||Li("SyncEngine","The network is disabled. The task returned by 'awaitPendingWrites()' will not complete until the network is enabled.");try{const e=await function(e){const t=Ui(e);return t.persistence.runTransaction("Get highest unacknowledged batch id","readonly",(e=>t.mutationQueue.getHighestUnacknowledgedBatchId(e)))}(n.localStore);if(-1===e)return void t.resolve();const i=n.hc.get(e)||[];i.push(t),n.hc.set(e,i)}catch(e){const n=ad(e,"Initialization of waitForPendingWrites() operation failed");t.reject(n)}}function Fd(e,t){(e.hc.get(t)||[]).forEach((e=>{e.resolve()})),e.hc.delete(t)}function Bd(e,t,n){const i=Ui(e);let r=i.ac[i.currentUser.toKey()];if(r){const e=r.get(t);e&&(n?e.reject(n):e.resolve(),r=r.remove(t)),i.ac[i.currentUser.toKey()]=r}}function Ud(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const i of e.ic.get(t))e.sc.delete(i),n&&e.nc.wc(i,n);e.ic.delete(t),e.isPrimaryClient&&e.cc.hs(t).forEach((t=>{e.cc.containsKey(t)||jd(e,t)}))}function jd(e,t){e.rc.delete(t.path.canonicalString());const n=e.oc.get(t);null!==n&&(Ph(e.remoteStore,n),e.oc=e.oc.remove(t),e.uc.delete(n),Hd(e))}function zd(e,t,n){for(const i of n)i instanceof Sd?(e.cc.addReference(i.key,t),qd(e,i)):i instanceof Td?(Li("SyncEngine","Document no longer in limbo: "+i.key),e.cc.removeReference(i.key,t),e.cc.containsKey(i.key)||jd(e,i.key)):Vi()}function qd(e,t){const n=t.key,i=n.path.canonicalString();e.oc.get(n)||e.rc.has(i)||(Li("SyncEngine","New document in limbo: "+n),e.rc.add(i),Hd(e))}function Hd(e){for(;e.rc.size>0&&e.oc.size<e.maxConcurrentLimboResolutions;){const t=e.rc.values().next().value;e.rc.delete(t);const n=new lr(ar.fromString(t)),i=e.lc.next();e.uc.set(i,new Cd(n)),e.oc=e.oc.insert(n,i),Lh(e.remoteStore,new Yc(Zo(Uo(n.path)),i,2,Pr.ct))}}async function Gd(e,t,n){const i=Ui(e),r=[],s=[],o=[];i.sc.isEmpty()||(i.sc.forEach(((e,a)=>{o.push(i.dc(a,t,n).then((e=>{if((e||n)&&i.isPrimaryClient&&i.sharedClientState.updateQueryState(a.targetId,(null==e?void 0:e.fromCache)?"not-current":"current"),e){r.push(e);const t=Bl.Di(a.targetId,e);s.push(t)}})))})),await Promise.all(o),i.nc.zo(r),await async function(e,t){const n=Ui(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Sr.forEach(t,(t=>Sr.forEach(t.Vi,(i=>n.persistence.referenceDelegate.addReference(e,t.targetId,i))).next((()=>Sr.forEach(t.Si,(i=>n.persistence.referenceDelegate.removeReference(e,t.targetId,i)))))))))}catch(e){if(!xr(e))throw e;Li("LocalStore","Failed to update sequence numbers: "+e)}for(const i of t){const e=i.targetId;if(!i.fromCache){const t=n.Li.get(e),i=t.snapshotVersion,r=t.withLastLimboFreeSnapshotVersion(i);n.Li=n.Li.insert(e,r)}}}(i.localStore,s))}async function Zd(e,t){const n=Ui(e);if(!n.currentUser.isEqual(t)){Li("SyncEngine","User change. New user:",t.toKey());const e=await ql(n.localStore,t);n.currentUser=t,function(e,t){e.hc.forEach((e=>{e.forEach((e=>{e.reject(new zi(ji.CANCELLED,t))}))})),e.hc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Gd(n,e.Qi)}}function Kd(e,t){const n=Ui(e),i=n.uc.get(t);if(i&&i.ec)return pa().add(i.key);{let e=pa();const i=n.ic.get(t);if(!i)return e;for(const t of i){const i=n.sc.get(t);e=e.unionWith(i.view.Qu)}return e}}async function Wd(e,t){const n=Ui(e),i=await Xl(n.localStore,t.query,!0),r=t.view.Xu(i);return n.isPrimaryClient&&zd(n,t.targetId,r.Yu),r}async function Qd(e,t){const n=Ui(e);return eh(n.localStore,t).then((e=>Gd(n,e)))}async function Yd(e,t,n,i){const r=Ui(e),s=await function(e,t){const n=Ui(e),i=Ui(n.mutationQueue);return n.persistence.runTransaction("Lookup mutation documents","readonly",(e=>i.In(e,t).next((t=>t?n.localDocuments.getDocuments(e,t):Sr.resolve(null)))))}(r.localStore,t);null!==s?("pending"===n?await Zh(r.remoteStore):"acknowledged"===n||"rejected"===n?(Bd(r,t,i||null),Fd(r,t),function(e,t){Ui(Ui(e).mutationQueue).En(t)}(r.localStore,t)):Vi(),await Gd(r,s)):Li("SyncEngine","Cannot apply mutation batch with id: "+t)}async function Xd(e,t){const n=Ui(e);if(sf(n),of(n),!0===t&&!0!==n.fc){const e=n.sharedClientState.getAllActiveQueryTargets(),t=await Jd(n,e.toArray());n.fc=!0,await id(n.remoteStore,!0);for(const i of t)Lh(n.remoteStore,i)}else if(!1===t&&!1!==n.fc){const e=[];let t=Promise.resolve();n.ic.forEach(((i,r)=>{n.sharedClientState.isLocalQueryTarget(r)?e.push(r):t=t.then((()=>(Ud(n,r),Yl(n.localStore,r,!0)))),Ph(n.remoteStore,r)})),await t,await Jd(n,e),function(e){const t=Ui(e);t.uc.forEach(((e,n)=>{Ph(t.remoteStore,n)})),t.cc.ls(),t.uc=new Map,t.oc=new vs(lr.comparator)}(n),n.fc=!1,await id(n.remoteStore,!1)}}async function Jd(e,t,n){const i=Ui(e),r=[],s=[];for(const o of t){let e;const t=i.ic.get(o);if(t&&0!==t.length){e=await Ql(i.localStore,Zo(t[0]));for(const e of t){const t=i.sc.get(e),n=await Wd(i,t);n.snapshot&&s.push(n.snapshot)}}else{const t=await Jl(i.localStore,o);e=await Ql(i.localStore,t),await Od(i,ef(t),o,!1,e.resumeToken)}r.push(e)}return i.nc.zo(s),r}function ef(e){return Bo(e.path,e.collectionGroup,e.orderBy,e.filters,e.limit,"F",e.startAt,e.endAt)}function tf(e){const t=Ui(e);return Ui(Ui(t.localStore).persistence).bi()}async function nf(e,t,n,i){const r=Ui(e);if(r.fc)return void Li("SyncEngine","Ignoring unexpected query state notification.");const s=r.ic.get(t);if(s&&s.length>0)switch(n){case"current":case"not-current":{const e=await eh(r.localStore,ea(s[0])),i=oc.createSynthesizedRemoteEventForCurrentChange(t,"current"===n,ks.EMPTY_BYTE_STRING);await Gd(r,e,i);break}case"rejected":await Yl(r.localStore,t,!0),Ud(r,t,i);break;default:Vi()}}async function rf(e,t,n){const i=sf(e);if(i.fc){for(const e of t){if(i.ic.has(e)){Li("SyncEngine","Adding an already active target "+e);continue}const t=await Jl(i.localStore,e),n=await Ql(i.localStore,t);await Od(i,ef(t),n.targetId,!1,n.resumeToken),Lh(i.remoteStore,n)}for(const e of n)i.ic.has(e)&&await Yl(i.localStore,e,!1).then((()=>{Ph(i.remoteStore,e),Ud(i,e)})).catch(Ir)}}function sf(e){const t=Ui(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Rd.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Kd.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Pd.bind(null,t),t.nc.zo=md.bind(null,t.eventManager),t.nc.wc=gd.bind(null,t.eventManager),t}function of(e){const t=Ui(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=$d.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Md.bind(null,t),t}function af(e,t,n){const i=Ui(e);(async function(e,t,n){try{const i=await t.getMetadata();if(await function(e,t){const n=Ui(e),i=Ic(t.createTime);return n.persistence.runTransaction("hasNewerBundle","readonly",(e=>n.xs.getBundleMetadata(e,t.id))).then((e=>!!e&&e.createTime.compareTo(i)>=0))}(e.localStore,i))return await t.close(),n._completeWith(function(e){return{taskState:"Success",documentsLoaded:e.totalDocuments,bytesLoaded:e.totalBytes,totalDocuments:e.totalDocuments,totalBytes:e.totalBytes}}(i)),Promise.resolve(new Set);n._updateProgress(Id(i));const r=new _d(i,e.localStore,t.serializer);let s=await t._c();for(;s;){const e=await r.$u(s);e&&n._updateProgress(e),s=await t._c()}const o=await r.complete();return await Gd(e,o.Bu,void 0),await function(e,t){const n=Ui(e);return n.persistence.runTransaction("Save bundle","readwrite",(e=>n.xs.saveBundleMetadata(e,t)))}(e.localStore,i),n._completeWith(o.progress),Promise.resolve(o.Fu)}catch(e){return $i("SyncEngine",`Loading bundle failed with ${e}`),n._failWith(e),Promise.resolve(new Set)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */)(i,t,n).then((e=>{i.sharedClientState.notifyBundleLoaded(e)}))}class cf{constructor(){this.synchronizeTabs=!1}async initialize(e){this.serializer=Th(e.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(e),this.persistence=this.createPersistence(e),await this.persistence.start(),this.localStore=this.createLocalStore(e),this.gcScheduler=this.createGarbageCollectionScheduler(e,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(e,this.localStore)}createGarbageCollectionScheduler(e,t){return null}createIndexBackfillerScheduler(e,t){return null}createLocalStore(e){return zl(this.persistence,new Ul,e.initialUser,this.serializer)}createPersistence(e){return new Ol(Dl.Fs,this.serializer)}createSharedClientState(e){return new fh}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class uf extends cf{constructor(e,t,n){super(),this.mc=e,this.cacheSizeBytes=t,this.forceOwnership=n,this.synchronizeTabs=!1}async initialize(e){await super.initialize(e),await this.mc.initialize(this,e),await of(this.mc.syncEngine),await Zh(this.mc.remoteStore),await this.persistence.hi((()=>(this.gcScheduler&&!this.gcScheduler.started&&this.gcScheduler.start(),this.indexBackfillerScheduler&&!this.indexBackfillerScheduler.started&&this.indexBackfillerScheduler.start(),Promise.resolve())))}createLocalStore(e){return zl(this.persistence,new Ul,e.initialUser,this.serializer)}createGarbageCollectionScheduler(e,t){const n=this.persistence.referenceDelegate.garbageCollector;return new al(n,e.asyncQueue,t)}createIndexBackfillerScheduler(e,t){const n=new Lr(t,this.persistence);return new Rr(e.asyncQueue,n)}createPersistence(e){const t=Fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey),n=void 0!==this.cacheSizeBytes?Gu.withCacheSize(this.cacheSizeBytes):Gu.DEFAULT;return new $l(this.synchronizeTabs,t,e.clientId,n,e.asyncQueue,Ih(),Sh(),this.serializer,this.sharedClientState,!!this.forceOwnership)}createSharedClientState(e){return new fh}}class lf extends uf{constructor(e,t){super(e,t,!1),this.mc=e,this.cacheSizeBytes=t,this.synchronizeTabs=!0}async initialize(e){await super.initialize(e);const t=this.mc.syncEngine;this.sharedClientState instanceof dh&&(this.sharedClientState.syncEngine={$r:Yd.bind(null,t),Mr:nf.bind(null,t),Fr:rf.bind(null,t),bi:tf.bind(null,t),Or:Qd.bind(null,t)},await this.sharedClientState.start()),await this.persistence.hi((async e=>{await Xd(this.mc.syncEngine,e),this.gcScheduler&&(e&&!this.gcScheduler.started?this.gcScheduler.start():e||this.gcScheduler.stop()),this.indexBackfillerScheduler&&(e&&!this.indexBackfillerScheduler.started?this.indexBackfillerScheduler.start():e||this.indexBackfillerScheduler.stop())}))}createSharedClientState(e){const t=Ih();if(!dh.D(t))throw new zi(ji.UNIMPLEMENTED,"IndexedDB persistence is only available on platforms that support LocalStorage.");const n=Fl(e.databaseInfo.databaseId,e.databaseInfo.persistenceKey);return new dh(t,e.asyncQueue,n,e.clientId,e.initialUser)}}class hf{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Ld(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Zd.bind(null,this.syncEngine),await id(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new dd}createDatastore(e){const t=Th(e.databaseInfo.databaseId),n=(i=e.databaseInfo,new _h(i));var i;return function(e,t,n,i){return new Ah(e,t,n,i)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,i=e.asyncQueue,r=e=>Ld(this.syncEngine,e,0),s=mh.D()?new mh:new ph,new Nh(t,n,i,r,s);var t,n,i,r,s}createSyncEngine(e,t){return function(e,t,n,i,r,s,o){const a=new xd(e,t,n,i,r,s);return o&&(a.fc=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Ui(e);Li("RemoteStore","RemoteStore shutting down."),t.du.add(5),await Rh(t),t._u.shutdown(),t.mu.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function df(e,t=10240){let n=0;return{async read(){if(n<e.byteLength){const i={value:e.slice(n,n+t),done:!1};return n+=t,i}return{done:!0}},async cancel(){},releaseLock(){},closed:Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ff{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.gc(this.observer.next,e)}error(e){this.observer.error?this.gc(this.observer.error,e):Pi("Uncaught Error in snapshot listener:",e.toString())}yc(){this.muted=!0}gc(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pf{constructor(e,t){this.Ic=e,this.serializer=t,this.metadata=new qi,this.buffer=new Uint8Array,this.Tc=new TextDecoder("utf-8"),this.Ec().then((e=>{e&&e.ku()?this.metadata.resolve(e.Nu.metadata):this.metadata.reject(new Error(`The first element of the bundle is not a metadata, it is\n             ${JSON.stringify(null==e?void 0:e.Nu)}`))}),(e=>this.metadata.reject(e)))}close(){return this.Ic.cancel()}async getMetadata(){return this.metadata.promise}async _c(){return await this.getMetadata(),this.Ec()}async Ec(){const e=await this.Ac();if(null===e)return null;const t=this.Tc.decode(e),n=Number(t);isNaN(n)&&this.Rc(`length string (${t}) is not valid number`);const i=await this.vc(n);return new bd(JSON.parse(i),e.length+n)}bc(){return this.buffer.findIndex((e=>e==="{".charCodeAt(0)))}async Ac(){for(;this.bc()<0;)if(await this.Pc())break;if(0===this.buffer.length)return null;const e=this.bc();e<0&&this.Rc("Reached the end of bundle when a length string is expected.");const t=this.buffer.slice(0,e);return this.buffer=this.buffer.slice(e),t}async vc(e){for(;this.buffer.length<e;)await this.Pc()&&this.Rc("Reached the end of bundle when more is expected.");const t=this.Tc.decode(this.buffer.slice(0,e));return this.buffer=this.buffer.slice(e),t}Rc(e){throw this.Ic.cancel(),new Error(`Invalid bundle format: ${e}`)}async Pc(){const e=await this.Ic.read();if(!e.done){const t=new Uint8Array(this.buffer.length+e.value.length);t.set(this.buffer),t.set(e.value,this.buffer.length),this.buffer=t}return e.done}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(e){this.datastore=e,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(e){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new zi(ji.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const t=await async function(e,t){const n=Ui(e),i=Ac(n.serializer)+"/documents",r={documents:t.map((e=>Ec(n.serializer,e)))},s=await n.fo("BatchGetDocuments",i,r,t.length),o=new Map;s.forEach((e=>{const t=Rc(n.serializer,e);o.set(t.key.toString(),t)}));const a=[];return t.forEach((e=>{const t=o.get(e.toString());Fi(!!t),a.push(t)})),a}(this.datastore,e);return t.forEach((e=>this.recordVersion(e))),t}set(e,t){this.write(t.toMutation(e,this.precondition(e))),this.writtenDocs.add(e.toString())}update(e,t){try{this.write(t.toMutation(e,this.preconditionForUpdate(e)))}catch(e){this.lastWriteError=e}this.writtenDocs.add(e.toString())}delete(e){this.write(new Ka(e,this.precondition(e))),this.writtenDocs.add(e.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const e=this.readVersions;this.mutations.forEach((t=>{e.delete(t.key.toString())})),e.forEach(((e,t)=>{const n=lr.fromPath(t);this.mutations.push(new Wa(n,this.precondition(n)))})),await async function(e,t){const n=Ui(e),i=Ac(n.serializer)+"/documents",r={writes:t.map((e=>Pc(n.serializer,e)))};await n.co("Commit",i,r)}(this.datastore,this.mutations),this.committed=!0}recordVersion(e){let t;if(e.isFoundDocument())t=e.version;else{if(!e.isNoDocument())throw Vi();t=sr.min()}const n=this.readVersions.get(e.key.toString());if(n){if(!t.isEqual(n))throw new zi(ji.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(e.key.toString(),t)}precondition(e){const t=this.readVersions.get(e.toString());return!this.writtenDocs.has(e.toString())&&t?t.isEqual(sr.min())?Pa.exists(!1):Pa.updateTime(t):Pa.none()}preconditionForUpdate(e){const t=this.readVersions.get(e.toString());if(!this.writtenDocs.has(e.toString())&&t){if(t.isEqual(sr.min()))throw new zi(ji.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Pa.updateTime(t)}return Pa.exists(!0)}write(e){this.ensureCommitNotCalled(),this.mutations.push(e)}ensureCommitNotCalled(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gf{constructor(e,t,n,i,r){this.asyncQueue=e,this.datastore=t,this.options=n,this.updateFunction=i,this.deferred=r,this.Vc=n.maxAttempts,this.Co=new Eh(this.asyncQueue,"transaction_retry")}run(){this.Vc-=1,this.Sc()}Sc(){this.Co.Ao((async()=>{const e=new mf(this.datastore),t=this.Dc(e);t&&t.then((t=>{this.asyncQueue.enqueueAndForget((()=>e.commit().then((()=>{this.deferred.resolve(t)})).catch((e=>{this.Cc(e)}))))})).catch((e=>{this.Cc(e)}))}))}Dc(e){try{const t=this.updateFunction(e);return!$r(t)&&t.catch&&t.then?t:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}Cc(e){this.Vc>0&&this.xc(e)?(this.Vc-=1,this.asyncQueue.enqueueAndForget((()=>(this.Sc(),Promise.resolve())))):this.deferred.reject(e)}xc(e){if("FirebaseError"===e.name){const t=e.code;return"aborted"===t||"failed-precondition"===t||"already-exists"===t||!nc(t)}return!1}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vf{constructor(e,t,n,i){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=i,this.user=Ai.UNAUTHENTICATED,this.clientId=er.A(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{Li("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(Li("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new zi(ji.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new qi;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=ad(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function yf(e,t){e.asyncQueue.verifyOperationInProgress(),Li("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let i=n.initialUser;e.setCredentialChangeListener((async e=>{i.isEqual(e)||(await ql(t.localStore,e),i=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e._offlineComponents=t}async function bf(e,t){e.asyncQueue.verifyOperationInProgress();const n=await _f(e);Li("FirestoreClient","Initializing OnlineComponentProvider");const i=await e.getConfiguration();await t.initialize(n,i),e.setCredentialChangeListener((e=>nd(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>nd(t.remoteStore,n))),e._onlineComponents=t}function wf(e){return"FirebaseError"===e.name?e.code===ji.FAILED_PRECONDITION||e.code===ji.UNIMPLEMENTED:!("undefined"!=typeof DOMException&&e instanceof DOMException)||22===e.code||20===e.code||11===e.code}async function _f(e){if(!e._offlineComponents)if(e._uninitializedComponentsProvider){Li("FirestoreClient","Using user provided OfflineComponentProvider");try{await yf(e,e._uninitializedComponentsProvider._offline)}catch(t){const n=t;if(!wf(n))throw n;$i("Error using user provided cache. Falling back to memory cache: "+n),await yf(e,new cf)}}else Li("FirestoreClient","Using default OfflineComponentProvider"),await yf(e,new cf);return e._offlineComponents}async function If(e){return e._onlineComponents||(e._uninitializedComponentsProvider?(Li("FirestoreClient","Using user provided OnlineComponentProvider"),await bf(e,e._uninitializedComponentsProvider._online)):(Li("FirestoreClient","Using default OnlineComponentProvider"),await bf(e,new hf))),e._onlineComponents}function Sf(e){return _f(e).then((e=>e.persistence))}function Tf(e){return _f(e).then((e=>e.localStore))}function Ef(e){return If(e).then((e=>e.remoteStore))}function kf(e){return If(e).then((e=>e.syncEngine))}function Cf(e){return If(e).then((e=>e.datastore))}async function xf(e){const t=await If(e),n=t.eventManager;return n.onListen=Ad.bind(null,t.syncEngine),n.onUnlisten=Nd.bind(null,t.syncEngine),n}function Af(e){return e.asyncQueue.enqueue((async()=>{const t=await Sf(e),n=await Ef(e);return t.setNetworkEnabled(!0),function(e){const t=Ui(e);return t.du.delete(0),Dh(t)}(n)}))}function Of(e){return e.asyncQueue.enqueue((async()=>{const t=await Sf(e),n=await Ef(e);return t.setNetworkEnabled(!1),async function(e){const t=Ui(e);t.du.add(0),await Rh(t),t.mu.set("Offline")}(n)}))}function Nf(e,t){const n=new qi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await function(e,t){const n=Ui(e);return n.persistence.runTransaction("read document","readonly",(e=>n.localDocuments.getDocument(e,t)))}(e,t);i.isFoundDocument()?n.resolve(i):i.isNoDocument()?n.resolve(null):n.reject(new zi(ji.UNAVAILABLE,"Failed to get document from cache. (However, this document may exist on the server. Run again without setting 'source' in the GetOptions to attempt to retrieve the document from the server.)"))}catch(e){const i=ad(e,`Failed to get document '${t} from cache`);n.reject(i)}}(await Tf(e),t,n))),n.promise}function Df(e,t,n={}){const i=new qi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new ff({next:s=>{t.enqueueAndForget((()=>pd(e,o)));const a=s.docs.has(n);!a&&s.fromCache?r.reject(new zi(ji.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&i&&"server"===i.source?r.reject(new zi(ji.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):r.resolve(s)},error:e=>r.reject(e)}),o=new yd(Uo(n.path),s,{includeMetadataChanges:!0,xu:!0});return fd(e,o)}(await xf(e),e.asyncQueue,t,n,i))),i.promise}function Rf(e,t){const n=new qi;return e.asyncQueue.enqueueAndForget((async()=>async function(e,t,n){try{const i=await Xl(e,t,!0),r=new Ed(t,i.Wi),s=r.zu(i.documents),o=r.applyChanges(s,!1);n.resolve(o.snapshot)}catch(e){const i=ad(e,`Failed to execute query '${t} against cache`);n.reject(i)}}(await Tf(e),t,n))),n.promise}function Lf(e,t,n={}){const i=new qi;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,i,r){const s=new ff({next:n=>{t.enqueueAndForget((()=>pd(e,o))),n.fromCache&&"server"===i.source?r.reject(new zi(ji.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):r.resolve(n)},error:e=>r.reject(e)}),o=new yd(n,s,{includeMetadataChanges:!0,xu:!0});return fd(e,o)}(await xf(e),e.asyncQueue,t,n,i))),i.promise}function Pf(e,t){const n=new ff(t);return e.asyncQueue.enqueueAndForget((async()=>function(e,t){Ui(e).Au.add(t),t.next()}(await xf(e),n))),()=>{n.yc(),e.asyncQueue.enqueueAndForget((async()=>function(e,t){Ui(e).Au.delete(t)}(await xf(e),n)))}}function $f(e,t,n,i){const r=function(e,t){let n;return n="string"==typeof e?(new TextEncoder).encode(e):e,function(e,t){return new pf(e,t)}(function(e,t){if(e instanceof Uint8Array)return df(e,t);if(e instanceof ArrayBuffer)return df(new Uint8Array(e),t);if(e instanceof ReadableStream)return e.getReader();throw new Error("Source of `toByteStreamReader` has to be a ArrayBuffer or ReadableStream")}
/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n),t)}(n,Th(t));e.asyncQueue.enqueueAndForget((async()=>{af(await kf(e),r,i)}))}function Mf(e,t){return e.asyncQueue.enqueue((async()=>function(e,t){const n=Ui(e);return n.persistence.runTransaction("Get named query","readonly",(e=>n.xs.getNamedQuery(e,t)))}(await Tf(e),t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Vf=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ff(e,t,n){if(!n)throw new zi(ji.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function Bf(e,t,n,i){if(!0===t&&!0===i)throw new zi(ji.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function Uf(e){if(!lr.isDocumentKey(e))throw new zi(ji.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function jf(e){if(lr.isDocumentKey(e))throw new zi(ji.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function zf(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Vi()}function qf(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new zi(ji.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=zf(e);throw new zi(ji.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}function Hf(e,t){if(t<=0)throw new zi(ji.INVALID_ARGUMENT,`Function ${e}() requires a positive number, but it was: ${t}.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gf{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new zi(ji.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,this.cache=e.localCache,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new zi(ji.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,Bf("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zf{constructor(e,t,n,i){this._authCredentials=e,this._appCheckCredentials=t,this._databaseId=n,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Gf({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new zi(ji.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new zi(ji.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Gf(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new Gi;switch(e.type){case"firstParty":return new Qi(e.sessionIndex||"0",e.iamToken||null,e.authTokenFactory||null);case"provider":return e.client;default:throw new zi(ji.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=Vf.get(e);t&&(Li("ComponentProvider","Removing Datastore"),Vf.delete(e),t.terminate())}(this),Promise.resolve()}}function Kf(e,t,n,i={}){var r;const s=(e=qf(e,Zf))._getSettings();if("firestore.googleapis.com"!==s.host&&s.host!==t&&$i("Host has been set in both settings() and useEmulator(), emulator host will be used"),e._setSettings(Object.assign(Object.assign({},s),{host:`${t}:${n}`,ssl:!1})),i.mockUserToken){let t,n;if("string"==typeof i.mockUserToken)t=i.mockUserToken,n=Ai.MOCK_USER;else{t=(0,c.Sg)(i.mockUserToken,null===(r=e._app)||void 0===r?void 0:r.options.projectId);const s=i.mockUserToken.sub||i.mockUserToken.user_id;if(!s)throw new zi(ji.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");n=new Ai(s)}e._authCredentials=new Zi(new Hi(t,n))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wf{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Yf(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Wf(this.firestore,e,this._key)}}class Qf{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Qf(this.firestore,e,this._query)}}class Yf extends Qf{constructor(e,t,n){super(e,t,Uo(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Wf(this.firestore,null,new lr(e))}withConverter(e){return new Yf(this.firestore,e,this._path)}}function Xf(e,t,...n){if(e=(0,c.m9)(e),Ff("collection","path",t),e instanceof Zf){const i=ar.fromString(t,...n);return jf(i),new Yf(e,null,i)}{if(!(e instanceof Wf||e instanceof Yf))throw new zi(ji.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ar.fromString(t,...n));return jf(i),new Yf(e.firestore,null,i)}}function Jf(e,t){if(e=qf(e,Zf),Ff("collectionGroup","collection id",t),t.indexOf("/")>=0)throw new zi(ji.INVALID_ARGUMENT,`Invalid collection ID '${t}' passed to function collectionGroup(). Collection IDs must not contain '/'.`);return new Qf(e,null,function(e){return new Fo(ar.emptyPath(),e)}(t))}function ep(e,t,...n){if(e=(0,c.m9)(e),1===arguments.length&&(t=er.A()),Ff("doc","path",t),e instanceof Zf){const i=ar.fromString(t,...n);return Uf(i),new Wf(e,null,new lr(i))}{if(!(e instanceof Wf||e instanceof Yf))throw new zi(ji.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const i=e._path.child(ar.fromString(t,...n));return Uf(i),new Wf(e.firestore,e instanceof Yf?e.converter:null,new lr(i))}}function tp(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),(e instanceof Wf||e instanceof Yf)&&(t instanceof Wf||t instanceof Yf)&&e.firestore===t.firestore&&e.path===t.path&&e.converter===t.converter}function np(e,t){return e=(0,c.m9)(e),t=(0,c.m9)(t),e instanceof Qf&&t instanceof Qf&&e.firestore===t.firestore&&Qo(e._query,t._query)&&e.converter===t.converter
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ip{constructor(){this.Nc=Promise.resolve(),this.kc=[],this.Oc=!1,this.$c=[],this.Mc=null,this.Fc=!1,this.Bc=!1,this.Lc=[],this.Co=new Eh(this,"async_queue_retry"),this.qc=()=>{const e=Sh();e&&Li("AsyncQueue","Visibility state changed to "+e.visibilityState),this.Co.vo()};const e=Sh();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.qc)}get isShuttingDown(){return this.Oc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Uc(),this.Kc(e)}enterRestrictedMode(e){if(!this.Oc){this.Oc=!0,this.Bc=e||!1;const t=Sh();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.qc)}}enqueue(e){if(this.Uc(),this.Oc)return new Promise((()=>{}));const t=new qi;return this.Kc((()=>this.Oc&&this.Bc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.kc.push(e),this.Gc())))}async Gc(){if(0!==this.kc.length){try{await this.kc[0](),this.kc.shift(),this.Co.reset()}catch(S){if(!xr(S))throw S;Li("AsyncQueue","Operation failed with retryable error: "+S)}this.kc.length>0&&this.Co.Ao((()=>this.Gc()))}}Kc(e){const t=this.Nc.then((()=>(this.Fc=!0,e().catch((e=>{this.Mc=e,this.Fc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Pi("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Fc=!1,e))))));return this.Nc=t,t}enqueueAfterDelay(e,t,n){this.Uc(),this.Lc.indexOf(e)>-1&&(t=0);const i=od.createAndSchedule(this,e,t,n,(e=>this.Qc(e)));return this.$c.push(i),i}Uc(){this.Mc&&Vi()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Nc,await e}while(e!==this.Nc)}jc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Wc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Hc(e){this.Lc.push(e)}Qc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}function rp(e){return function(e,t){if("object"!=typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"==typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e,["next","error","complete"])}class sp{constructor(){this._progressObserver={},this._taskCompletionResolver=new qi,this._lastProgress={taskState:"Running",totalBytes:0,totalDocuments:0,bytesLoaded:0,documentsLoaded:0}}onProgress(e,t,n){this._progressObserver={next:e,error:t,complete:n}}catch(e){return this._taskCompletionResolver.promise.catch(e)}then(e,t){return this._taskCompletionResolver.promise.then(e,t)}_completeWith(e){this._updateProgress(e),this._progressObserver.complete&&this._progressObserver.complete(),this._taskCompletionResolver.resolve(e)}_failWith(e){this._lastProgress.taskState="Error",this._progressObserver.next&&this._progressObserver.next(this._lastProgress),this._progressObserver.error&&this._progressObserver.error(e),this._taskCompletionResolver.reject(e)}_updateProgress(e){this._lastProgress=e,this._progressObserver.next&&this._progressObserver.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const op=-1;class ap extends Zf{constructor(e,t,n,i){super(e,t,n,i),this.type="firestore",this._queue=new ip,this._persistenceKey=(null==i?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||up(this),this._firestoreClient.terminate()}}function cp(e){return e._firestoreClient||up(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function up(e){var t,n,i;const r=e._freezeSettings(),s=function(e,t,n,i){return new Ls(e,t,n,i.host,i.ssl,i.experimentalForceLongPolling,i.experimentalAutoDetectLongPolling,i.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,r);e._firestoreClient=new vf(e._authCredentials,e._appCheckCredentials,e._queue,s),(null===(n=r.cache)||void 0===n?void 0:n._offlineComponentProvider)&&(null===(i=r.cache)||void 0===i?void 0:i._onlineComponentProvider)&&(e._firestoreClient._uninitializedComponentsProvider={_offlineKind:r.cache.kind,_offline:r.cache._offlineComponentProvider,_online:r.cache._onlineComponentProvider})}function lp(e,t){bp(e=qf(e,ap));const n=cp(e);if(n._uninitializedComponentsProvider)throw new zi(ji.FAILED_PRECONDITION,"SDK cache is already specified.");$i("enableIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const i=e._freezeSettings(),r=new hf;return dp(n,r,new uf(r,i.cacheSizeBytes,null==t?void 0:t.forceOwnership))}function hp(e){bp(e=qf(e,ap));const t=cp(e);if(t._uninitializedComponentsProvider)throw new zi(ji.FAILED_PRECONDITION,"SDK cache is already specified.");$i("enableMultiTabIndexedDbPersistence() will be deprecated in the future, you can use `FirestoreSettings.cache` instead.");const n=e._freezeSettings(),i=new hf;return dp(t,i,new lf(i,n.cacheSizeBytes))}function dp(e,t,n){const i=new qi;return e.asyncQueue.enqueue((async()=>{try{await yf(e,n),await bf(e,t),i.resolve()}catch(e){const n=e;if(!wf(n))throw n;$i("Error enabling indexeddb cache. Falling back to memory cache: "+n),i.reject(n)}})).then((()=>i.promise))}function fp(e){if(e._initialized&&!e._terminated)throw new zi(ji.FAILED_PRECONDITION,"Persistence can only be cleared before a Firestore instance is initialized or after it is terminated.");const t=new qi;return e._queue.enqueueAndForgetEvenWhileRestricted((async()=>{try{await async function(e){if(!Er.D())return Promise.resolve();const t=e+"main";await Er.delete(t)}(Fl(e._databaseId,e._persistenceKey)),t.resolve()}catch(e){t.reject(e)}})),t.promise}function pp(e){return function(e){const t=new qi;return e.asyncQueue.enqueueAndForget((async()=>Vd(await kf(e),t))),t.promise}(cp(e=qf(e,ap)))}function mp(e){return Af(cp(e=qf(e,ap)))}function gp(e){return Of(cp(e=qf(e,ap)))}function vp(e,t){const n=cp(e=qf(e,ap)),i=new sp;return $f(n,e._databaseId,t,i),i}function yp(e,t){return Mf(cp(e=qf(e,ap)),t).then((t=>t?new Qf(e,null,t.query):null))}function bp(e){if(e._initialized||e._terminated)throw new zi(ji.FAILED_PRECONDITION,"Firestore has already been started and persistence can no longer be enabled. You can only enable persistence before calling any other methods on a Firestore object.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class wp{constructor(e){this._byteString=e}static fromBase64String(e){try{return new wp(ks.fromBase64String(e))}catch(e){throw new zi(ji.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new wp(ks.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _p{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new zi(ji.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new ur(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ip{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sp{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new zi(ji.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new zi(ji.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return tr(this._lat,e._lat)||tr(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Tp=/^__.*__$/;class Ep{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new qa(e,this.data,this.fieldMask,t,this.fieldTransforms):new za(e,this.data,t,this.fieldTransforms)}}class kp{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return new qa(e,this.data,this.fieldMask,t,this.fieldTransforms)}}function Cp(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Vi()}}class xp{constructor(e,t,n,i,r,s){this.settings=e,this.databaseId=t,this.serializer=n,this.ignoreUndefinedProperties=i,void 0===r&&this.Jc(),this.fieldTransforms=r||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Yc(){return this.settings.Yc}Zc(e){return new xp(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Xc(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Zc({path:n,ta:!1});return i.ea(e),i}na(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),i=this.Zc({path:n,ta:!1});return i.Jc(),i}sa(e){return this.Zc({path:void 0,ta:!0})}ia(e){return Kp(e,this.settings.methodName,this.settings.ra||!1,this.path,this.settings.oa)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Jc(){if(this.path)for(let e=0;e<this.path.length;e++)this.ea(this.path.get(e))}ea(e){if(0===e.length)throw this.ia("Document fields must not be empty");if(Cp(this.Yc)&&Tp.test(e))throw this.ia('Document fields cannot begin and end with "__"')}}class Ap{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.serializer=n||Th(e)}ua(e,t,n,i=!1){return new xp({Yc:e,methodName:t,oa:n,path:ur.emptyPath(),ta:!1,ra:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Op(e){const t=e._freezeSettings(),n=Th(e._databaseId);return new Ap(e._databaseId,!!t.ignoreUndefinedProperties,n)}function Np(e,t,n,i,r,s={}){const o=e.ua(s.merge||s.mergeFields?2:0,t,n,r);qp("Data must be an object, but it was:",o,i);const a=jp(i,o);let c,u;if(s.merge)c=new Ss(o.fieldMask),u=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const i of s.mergeFields){const r=Hp(t,i,n);if(!o.contains(r))throw new zi(ji.INVALID_ARGUMENT,`Field '${r}' is specified in your field mask but missing from your input data.`);Wp(e,r)||e.push(r)}c=new Ss(e),u=o.fieldTransforms.filter((e=>c.covers(e.field)))}else c=null,u=o.fieldTransforms;return new Ep(new io(a),c,u)}class Dp extends Ip{_toFieldTransform(e){if(2!==e.Yc)throw 1===e.Yc?e.ia(`${this._methodName}() can only appear at the top level of your update data`):e.ia(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return e.fieldMask.push(e.path),null}isEqual(e){return e instanceof Dp}}function Rp(e,t,n){return new xp({Yc:3,oa:t.settings.oa,methodName:e._methodName,ta:n},t.databaseId,t.serializer,t.ignoreUndefinedProperties)}class Lp extends Ip{_toFieldTransform(e){return new Da(e.path,new Ta)}isEqual(e){return e instanceof Lp}}class Pp extends Ip{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Rp(this,e,!0),n=this.ca.map((e=>Up(e,t))),i=new Ea(n);return new Da(e.path,i)}isEqual(e){return this===e}}class $p extends Ip{constructor(e,t){super(e),this.ca=t}_toFieldTransform(e){const t=Rp(this,e,!0),n=this.ca.map((e=>Up(e,t))),i=new Ca(n);return new Da(e.path,i)}isEqual(e){return this===e}}class Mp extends Ip{constructor(e,t){super(e),this.aa=t}_toFieldTransform(e){const t=new Aa(e.serializer,ba(e.serializer,this.aa));return new Da(e.path,t)}isEqual(e){return this===e}}function Vp(e,t,n,i){const r=e.ua(1,t,n);qp("Data must be an object, but it was:",r,i);const s=[],o=io.empty();ms(i,((e,i)=>{const a=Zp(t,e,n);i=(0,c.m9)(i);const u=r.na(a);if(i instanceof Dp)s.push(a);else{const e=Up(i,u);null!=e&&(s.push(a),o.set(a,e))}}));const a=new Ss(s);return new kp(o,a,r.fieldTransforms)}function Fp(e,t,n,i,r,s){const o=e.ua(1,t,n),a=[Hp(t,i,n)],u=[r];if(s.length%2!=0)throw new zi(ji.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let c=0;c<s.length;c+=2)a.push(Hp(t,s[c])),u.push(s[c+1]);const l=[],h=io.empty();for(let f=a.length-1;f>=0;--f)if(!Wp(l,a[f])){const e=a[f];let t=u[f];t=(0,c.m9)(t);const n=o.na(e);if(t instanceof Dp)l.push(e);else{const i=Up(t,n);null!=i&&(l.push(e),h.set(e,i))}}const d=new Ss(l);return new kp(h,d,o.fieldTransforms)}function Bp(e,t,n,i=!1){return Up(n,e.ua(i?4:3,t))}function Up(e,t){if(zp(e=(0,c.m9)(e)))return qp("Unsupported field value:",t,e),jp(e,t);if(e instanceof Ip)return function(e,t){if(!Cp(t.Yc))throw t.ia(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.ia(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.ta&&4!==t.Yc)throw t.ia("Nested arrays are not supported");return function(e,t){const n=[];let i=0;for(const r of e){let e=Up(r,t.sa(i));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),i++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,c.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return ba(t.serializer,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=rr.fromDate(e);return{timestampValue:bc(t.serializer,n)}}if(e instanceof rr){const n=new rr(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:bc(t.serializer,n)}}if(e instanceof Sp)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof wp)return{bytesValue:wc(t.serializer,e._byteString)};if(e instanceof Wf){const n=t.databaseId,i=e.firestore._databaseId;if(!i.isEqual(n))throw t.ia(`Document reference is for database ${i.projectId}/${i.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Sc(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.ia(`Unsupported field value: ${zf(e)}`)}(e,t)}function jp(e,t){const n={};return gs(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):ms(e,((e,i)=>{const r=Up(i,t.Xc(e));null!=r&&(n[e]=r)})),{mapValue:{fields:n}}}function zp(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof rr||e instanceof Sp||e instanceof wp||e instanceof Wf||e instanceof Ip)}function qp(e,t,n){if(!zp(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const i=zf(n);throw"an object"===i?t.ia(e+" a custom object"):t.ia(e+" "+i)}}function Hp(e,t,n){if((t=(0,c.m9)(t))instanceof _p)return t._internalPath;if("string"==typeof t)return Zp(e,t);throw Kp("Field path arguments must be of type string or ",e,!1,void 0,n)}const Gp=new RegExp("[~\\*/\\[\\]]");function Zp(e,t,n){if(t.search(Gp)>=0)throw Kp(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new _p(...t.split("."))._internalPath}catch(i){throw Kp(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Kp(e,t,n,i,r){const s=i&&!i.isEmpty(),o=void 0!==r;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=` in field ${i}`),o&&(c+=` in document ${r}`),c+=")"),new zi(ji.INVALID_ARGUMENT,a+e+c)}function Wp(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qp{constructor(e,t,n,i,r){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=i,this._converter=r}get id(){return this._key.path.lastSegment()}get ref(){return new Wf(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Yp(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(Xp("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Yp extends Qp{data(){return super.data()}}function Xp(e,t){return"string"==typeof t?Zp(e,t):t instanceof _p?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jp(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new zi(ji.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class em{}class tm extends em{}function nm(e,t,...n){let i=[];t instanceof em&&i.push(t),i=i.concat(n),function(e){const t=e.filter((e=>e instanceof sm)).length,n=e.filter((e=>e instanceof im)).length;if(t>1||t>0&&n>0)throw new zi(ji.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(i);for(const r of i)e=r._apply(e);return e}class im extends tm{constructor(e,t,n){super(),this._field=e,this._op=t,this._value=n,this.type="where"}static _create(e,t,n){return new im(e,t,n)}_apply(e){const t=this._parse(e);return wm(e._query,t),new Qf(e.firestore,e.converter,Ko(e._query,t))}_parse(e){const t=Op(e.firestore),n=function(e,t,n,i,r,s,o){let a;if(r.isKeyField()){if("array-contains"===s||"array-contains-any"===s)throw new zi(ji.INVALID_ARGUMENT,`Invalid Query. You can't perform '${s}' queries on documentId().`);if("in"===s||"not-in"===s){bm(o,s);const t=[];for(const n of o)t.push(ym(i,e,n));a={arrayValue:{values:t}}}else a=ym(i,e,o)}else"in"!==s&&"not-in"!==s&&"array-contains-any"!==s||bm(o,s),a=Bp(n,t,o,"in"===s||"not-in"===s);return fo.create(r,s,a)}(e._query,"where",t,e.firestore._databaseId,this._field,this._op,this._value);return n}}function rm(e,t,n){const i=t,r=Xp("where",e);return im._create(r,i,n)}class sm extends em{constructor(e,t){super(),this.type=e,this._queryConstraints=t}static _create(e,t){return new sm(e,t)}_parse(e){const t=this._queryConstraints.map((t=>t._parse(e))).filter((e=>e.getFilters().length>0));return 1===t.length?t[0]:po.create(t,this._getOperator())}_apply(e){const t=this._parse(e);return 0===t.getFilters().length?e:(function(e,t){let n=e;const i=t.getFlattenedFilters();for(const r of i)wm(n,r),n=Ko(n,r)}(e._query,t),new Qf(e.firestore,e.converter,Ko(e._query,t)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return"and"===this.type?"and":"or"}}class om extends tm{constructor(e,t){super(),this._field=e,this._direction=t,this.type="orderBy"}static _create(e,t){return new om(e,t)}_apply(e){const t=function(e,t,n){if(null!==e.startAt)throw new zi(ji.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==e.endAt)throw new zi(ji.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const i=new uo(t,n);return function(e,t){if(null===zo(e)){const n=qo(e);null!==n&&_m(e,n,t.field)}}(e,i),i}(e._query,this._field,this._direction);return new Qf(e.firestore,e.converter,function(e,t){const n=e.explicitOrderBy.concat([t]);return new Fo(e.path,e.collectionGroup,n,e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(e._query,t))}}function am(e,t="asc"){const n=t,i=Xp("orderBy",e);return om._create(i,n)}class cm extends tm{constructor(e,t,n){super(),this.type=e,this._limit=t,this._limitType=n}static _create(e,t,n){return new cm(e,t,n)}_apply(e){return new Qf(e.firestore,e.converter,Wo(e._query,this._limit,this._limitType))}}function um(e){return Hf("limit",e),cm._create("limit",e,"F")}function lm(e){return Hf("limitToLast",e),cm._create("limitToLast",e,"L")}class hm extends tm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new hm(e,t,n)}_apply(e){const t=vm(e,this.type,this._docOrFields,this._inclusive);return new Qf(e.firestore,e.converter,function(e,t){return new Fo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,t,e.endAt)}(e._query,t))}}function dm(...e){return hm._create("startAt",e,!0)}function fm(...e){return hm._create("startAfter",e,!1)}class pm extends tm{constructor(e,t,n){super(),this.type=e,this._docOrFields=t,this._inclusive=n}static _create(e,t,n){return new pm(e,t,n)}_apply(e){const t=vm(e,this.type,this._docOrFields,this._inclusive);return new Qf(e.firestore,e.converter,function(e,t){return new Fo(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,t)}(e._query,t))}}function mm(...e){return pm._create("endBefore",e,!1)}function gm(...e){return pm._create("endAt",e,!0)}function vm(e,t,n,i){if(n[0]=(0,c.m9)(n[0]),n[0]instanceof Qp)return function(e,t,n,i,r){if(!i)throw new zi(ji.NOT_FOUND,`Can't use a DocumentSnapshot that doesn't exist for ${n}().`);const s=[];for(const o of Go(e))if(o.field.isKeyField())s.push(Hs(t,i.key));else{const e=i.data.field(o.field);if(Ns(e))throw new zi(ji.INVALID_ARGUMENT,'Invalid query. You are trying to start or end a query using a document for which the field "'+o.field+'" is an uncommitted server timestamp. (Since the value of this field is unknown, you cannot start/end a query with it.)');if(null===e){const e=o.field.canonicalString();throw new zi(ji.INVALID_ARGUMENT,`Invalid query. You are trying to start or end a query using a document for which the field '${e}' (used as the orderBy) does not exist.`)}s.push(e)}return new oo(s,r)}(e._query,e.firestore._databaseId,t,n[0]._document,i);{const r=Op(e.firestore);return function(e,t,n,i,r,s){const o=e.explicitOrderBy;if(r.length>o.length)throw new zi(ji.INVALID_ARGUMENT,`Too many arguments provided to ${i}(). The number of arguments must be less than or equal to the number of orderBy() clauses`);const a=[];for(let c=0;c<r.length;c++){const s=r[c];if(o[c].field.isKeyField()){if("string"!=typeof s)throw new zi(ji.INVALID_ARGUMENT,`Invalid query. Expected a string for document ID in ${i}(), but got a ${typeof s}`);if(!Ho(e)&&-1!==s.indexOf("/"))throw new zi(ji.INVALID_ARGUMENT,`Invalid query. When querying a collection and ordering by documentId(), the value passed to ${i}() must be a plain document ID, but '${s}' contains a slash.`);const n=e.path.child(ar.fromString(s));if(!lr.isDocumentKey(n))throw new zi(ji.INVALID_ARGUMENT,`Invalid query. When querying a collection group and ordering by documentId(), the value passed to ${i}() must result in a valid document path, but '${n}' is not because it contains an odd number of segments.`);const r=new lr(n);a.push(Hs(t,r))}else{const e=Bp(n,i,s);a.push(e)}}return new oo(a,s)}(e._query,e.firestore._databaseId,r,t,n,i)}}function ym(e,t,n){if("string"==typeof(n=(0,c.m9)(n))){if(""===n)throw new zi(ji.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!Ho(t)&&-1!==n.indexOf("/"))throw new zi(ji.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${n}' contains a '/' character.`);const i=t.path.child(ar.fromString(n));if(!lr.isDocumentKey(i))throw new zi(ji.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${i}' is not because it has an odd number of segments (${i.length}).`);return Hs(e,new lr(i))}if(n instanceof Wf)return Hs(e,n._key);throw new zi(ji.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${zf(n)}.`)}function bm(e,t){if(!Array.isArray(e)||0===e.length)throw new zi(ji.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function wm(e,t){if(t.isInequality()){const n=qo(e),i=t.field;if(null!==n&&!n.isEqual(i))throw new zi(ji.INVALID_ARGUMENT,`Invalid query. All where filters with an inequality (<, <=, !=, not-in, >, or >=) must be on the same field. But you have inequality filters on '${n.toString()}' and '${i.toString()}'`);const r=zo(e);null!==r&&_m(e,i,r)}const n=function(e,t){for(const n of e)for(const e of n.getFlattenedFilters())if(t.indexOf(e.op)>=0)return e.op;return null}(e.filters,function(e){switch(e){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(null!==n)throw n===t.op?new zi(ji.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new zi(ji.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${n.toString()}' filters.`)}function _m(e,t,n){if(!n.isEqual(t))throw new zi(ji.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${t.toString()}' and so you must also use '${t.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}class Im{convertValue(e,t="none"){switch(Vs(e)){case 0:return null;case 1:return e.booleanValue;case 2:return As(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Os(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Vi()}}convertObject(e,t){const n={};return ms(e.fields,((e,i)=>{n[e]=this.convertValue(i,t)})),n}convertGeoPoint(e){return new Sp(As(e.latitude),As(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ds(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Rs(e));default:return null}}convertTimestamp(e){const t=xs(e);return new rr(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=ar.fromString(e);Fi(Qc(n));const i=new Ps(n.get(1),n.get(3)),r=new lr(n.popFirst(5));return i.isEqual(t)||Pi(`Document ${r} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),r}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(e,t,n){let i;return i=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,i}class Tm extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new wp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wf(this.firestore,null,t)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Em{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class km extends Qp{constructor(e,t,n,i,r,s){super(e,t,n,i,s),this._firestore=e,this._firestoreImpl=e,this.metadata=r}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new Cm(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(Xp("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class Cm extends km{data(e={}){return super.data(e)}}class xm{constructor(e,t,n,i){this._firestore=e,this._userDataWriter=t,this._snapshot=i,this.metadata=new Em(i.hasPendingWrites,i.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new Cm(this._firestore,this._userDataWriter,n.key,n,new Em(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new zi(ji.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>{const i=new Cm(e._firestore,e._userDataWriter,n.doc.key,n.doc,new Em(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter);return n.doc,{type:"added",doc:i,oldIndex:-1,newIndex:t++}}))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const i=new Cm(e._firestore,e._userDataWriter,t.doc.key,t.doc,new Em(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let r=-1,s=-1;return 0!==t.type&&(r=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:Am(t.type),doc:i,oldIndex:r,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function Am(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Vi()}}function Om(e,t){return e instanceof km&&t instanceof km?e._firestore===t._firestore&&e._key.isEqual(t._key)&&(null===e._document?null===t._document:e._document.isEqual(t._document))&&e._converter===t._converter:e instanceof xm&&t instanceof xm&&e._firestore===t._firestore&&np(e.query,t.query)&&e.metadata.isEqual(t.metadata)&&e._snapshot.isEqual(t._snapshot)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nm(e){e=qf(e,Wf);const t=qf(e.firestore,ap);return Df(cp(t),e._key).then((n=>Hm(t,e,n)))}class Dm extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new wp(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Wf(this.firestore,null,t)}}function Rm(e){e=qf(e,Wf);const t=qf(e.firestore,ap),n=cp(t),i=new Dm(t);return Nf(n,e._key).then((n=>new km(t,i,e._key,n,new Em(null!==n&&n.hasLocalMutations,!0),e.converter)))}function Lm(e){e=qf(e,Wf);const t=qf(e.firestore,ap);return Df(cp(t),e._key,{source:"server"}).then((n=>Hm(t,e,n)))}function Pm(e){e=qf(e,Qf);const t=qf(e.firestore,ap),n=cp(t),i=new Dm(t);return Jp(e._query),Lf(n,e._query).then((n=>new xm(t,i,e,n)))}function $m(e){e=qf(e,Qf);const t=qf(e.firestore,ap),n=cp(t),i=new Dm(t);return Rf(n,e._query).then((n=>new xm(t,i,e,n)))}function Mm(e){e=qf(e,Qf);const t=qf(e.firestore,ap),n=cp(t),i=new Dm(t);return Lf(n,e._query,{source:"server"}).then((n=>new xm(t,i,e,n)))}function Vm(e,t,n){e=qf(e,Wf);const i=qf(e.firestore,ap),r=Sm(e.converter,t,n);return qm(i,[Np(Op(i),"setDoc",e._key,r,null!==e.converter,n).toMutation(e._key,Pa.none())])}function Fm(e,t,n,...i){e=qf(e,Wf);const r=qf(e.firestore,ap),s=Op(r);let o;return o="string"==typeof(t=(0,c.m9)(t))||t instanceof _p?Fp(s,"updateDoc",e._key,t,n,i):Vp(s,"updateDoc",e._key,t),qm(r,[o.toMutation(e._key,Pa.exists(!0))])}function Bm(e){return qm(qf(e.firestore,ap),[new Ka(e._key,Pa.none())])}function Um(e,t){const n=qf(e.firestore,ap),i=ep(e),r=Sm(e.converter,t);return qm(n,[Np(Op(e.firestore),"addDoc",i._key,r,null!==e.converter,{}).toMutation(i._key,Pa.exists(!1))]).then((()=>i))}function jm(e,...t){var n,i,r;e=(0,c.m9)(e);let s={includeMetadataChanges:!1},o=0;"object"!=typeof t[o]||rp(t[o])||(s=t[o],o++);const a={includeMetadataChanges:s.includeMetadataChanges};if(rp(t[o])){const e=t[o];t[o]=null===(n=e.next)||void 0===n?void 0:n.bind(e),t[o+1]=null===(i=e.error)||void 0===i?void 0:i.bind(e),t[o+2]=null===(r=e.complete)||void 0===r?void 0:r.bind(e)}let u,l,h;if(e instanceof Wf)l=qf(e.firestore,ap),h=Uo(e._key.path),u={next:n=>{t[o]&&t[o](Hm(l,e,n))},error:t[o+1],complete:t[o+2]};else{const n=qf(e,Qf);l=qf(n.firestore,ap),h=n._query;const i=new Dm(l);u={next:e=>{t[o]&&t[o](new xm(l,i,n,e))},error:t[o+1],complete:t[o+2]},Jp(e._query)}return function(e,t,n,i){const r=new ff(i),s=new yd(t,r,n);return e.asyncQueue.enqueueAndForget((async()=>fd(await xf(e),s))),()=>{r.yc(),e.asyncQueue.enqueueAndForget((async()=>pd(await xf(e),s)))}}(cp(l),h,a,u)}function zm(e,t){return Pf(cp(e=qf(e,ap)),rp(t)?t:{next:t})}function qm(e,t){return function(e,t){const n=new qi;return e.asyncQueue.enqueueAndForget((async()=>Dd(await kf(e),t,n))),n.promise}(cp(e),t)}function Hm(e,t,n){const i=n.docs.get(t._key),r=new Dm(e);return new km(e,r,t._key,i,new Em(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Gm={maxAttempts:5};
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zm{constructor(e,t){this._firestore=e,this._commitHandler=t,this._mutations=[],this._committed=!1,this._dataReader=Op(e)}set(e,t,n){this._verifyNotCommitted();const i=Km(e,this._firestore),r=Sm(i.converter,t,n),s=Np(this._dataReader,"WriteBatch.set",i._key,r,null!==i.converter,n);return this._mutations.push(s.toMutation(i._key,Pa.none())),this}update(e,t,n,...i){this._verifyNotCommitted();const r=Km(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof _p?Fp(this._dataReader,"WriteBatch.update",r._key,t,n,i):Vp(this._dataReader,"WriteBatch.update",r._key,t),this._mutations.push(s.toMutation(r._key,Pa.exists(!0))),this}delete(e){this._verifyNotCommitted();const t=Km(e,this._firestore);return this._mutations=this._mutations.concat(new Ka(t._key,Pa.none())),this}commit(){return this._verifyNotCommitted(),this._committed=!0,this._mutations.length>0?this._commitHandler(this._mutations):Promise.resolve()}_verifyNotCommitted(){if(this._committed)throw new zi(ji.FAILED_PRECONDITION,"A write batch can no longer be used after commit() has been called.")}}function Km(e,t){if((e=(0,c.m9)(e)).firestore!==t)throw new zi(ji.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wm extends class{constructor(e,t){this._firestore=e,this._transaction=t,this._dataReader=Op(e)}get(e){const t=Km(e,this._firestore),n=new Tm(this._firestore);return this._transaction.lookup([t._key]).then((e=>{if(!e||1!==e.length)return Vi();const i=e[0];if(i.isFoundDocument())return new Qp(this._firestore,n,i.key,i,t.converter);if(i.isNoDocument())return new Qp(this._firestore,n,t._key,null,t.converter);throw Vi()}))}set(e,t,n){const i=Km(e,this._firestore),r=Sm(i.converter,t,n),s=Np(this._dataReader,"Transaction.set",i._key,r,null!==i.converter,n);return this._transaction.set(i._key,s),this}update(e,t,n,...i){const r=Km(e,this._firestore);let s;return s="string"==typeof(t=(0,c.m9)(t))||t instanceof _p?Fp(this._dataReader,"Transaction.update",r._key,t,n,i):Vp(this._dataReader,"Transaction.update",r._key,t),this._transaction.update(r._key,s),this}delete(e){const t=Km(e,this._firestore);return this._transaction.delete(t._key),this}}{constructor(e,t){super(e,t),this._firestore=e}get(e){const t=Km(e,this._firestore),n=new Dm(this._firestore);return super.get(e).then((e=>new km(this._firestore,n,t._key,e._document,new Em(!1,!1),t.converter)))}}function Qm(e,t,n){e=qf(e,ap);const i=Object.assign(Object.assign({},Gm),n);return function(e){if(e.maxAttempts<1)throw new zi(ji.INVALID_ARGUMENT,"Max attempts must be at least 1")}(i),function(e,t,n){const i=new qi;return e.asyncQueue.enqueueAndForget((async()=>{const r=await Cf(e);new gf(e.asyncQueue,r,n,t,i).run()})),i.promise}(cp(e),(n=>t(new Wm(e,n))),i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ym(){return new Dp("deleteField")}function Xm(){return new Lp("serverTimestamp")}function Jm(...e){return new Pp("arrayUnion",e)}function eg(...e){return new $p("arrayRemove",e)}function tg(e){return new Mp("increment",e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Oi=e}(s.SDK_VERSION),(0,s._registerComponent)(new o.wA("firestore",((e,{instanceIdentifier:n,options:i})=>{const r=e.getProvider("app").getImmediate(),s=new ap(new Ki(e.getProvider("auth-internal")),new Xi(e.getProvider("app-check-internal")),function(e,t){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new zi(ji.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Ps(e.options.projectId,t)}(r,n),r);return i=Object.assign({useFetchStreams:t},i),s._setSettings(i),s}),"PUBLIC").setMultipleInstances(!0)),(0,s.registerVersion)(xi,"3.10.0",e),(0,s.registerVersion)(xi,"3.10.0","esm2017")}();const ng="@firebase/firestore-compat",ig="0.3.6";
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function rg(e,t){if(void 0===t)return{merge:!1};if(void 0!==t.mergeFields&&void 0!==t.merge)throw new zi("invalid-argument",`Invalid options passed to function ${e}(): You cannot specify both "merge" and "mergeFields".`);return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sg(){if("undefined"===typeof Uint8Array)throw new zi("unimplemented","Uint8Arrays are not available in this environment.")}function og(){if(!Es())throw new zi("unimplemented","Blobs are unavailable in Firestore in this environment.")}class ag{constructor(e){this._delegate=e}static fromBase64String(e){return og(),new ag(wp.fromBase64String(e))}static fromUint8Array(e){return sg(),new ag(wp.fromUint8Array(e))}toBase64(){return og(),this._delegate.toBase64()}toUint8Array(){return sg(),this._delegate.toUint8Array()}isEqual(e){return this._delegate.isEqual(e._delegate)}toString(){return"Blob(base64: "+this.toBase64()+")"}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cg(e){return ug(e,["next","error","complete"])}function ug(e,t){if("object"!==typeof e||null===e)return!1;const n=e;for(const i of t)if(i in n&&"function"===typeof n[i])return!0;return!1}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lg{enableIndexedDbPersistence(e,t){return lp(e._delegate,{forceOwnership:t})}enableMultiTabIndexedDbPersistence(e){return hp(e._delegate)}clearIndexedDbPersistence(e){return fp(e._delegate)}}class hg{constructor(e,t,n){this._delegate=t,this._persistenceProvider=n,this.INTERNAL={delete:()=>this.terminate()},e instanceof Ps||(this._appCompat=e)}get _databaseId(){return this._delegate._databaseId}settings(e){const t=this._delegate._getSettings();e.merge||t.host===e.host||$i("You are overriding the original host. If you did not intend to override your settings, use {merge: true}."),e.merge&&(e=Object.assign(Object.assign({},t),e),delete e.merge),this._delegate._setSettings(e)}useEmulator(e,t,n={}){Kf(this._delegate,e,t,n)}enableNetwork(){return mp(this._delegate)}disableNetwork(){return gp(this._delegate)}enablePersistence(e){let t=!1,n=!1;return e&&(t=!!e.synchronizeTabs,n=!!e.experimentalForceOwningTab,Bf("synchronizeTabs",t,"experimentalForceOwningTab",n)),t?this._persistenceProvider.enableMultiTabIndexedDbPersistence(this):this._persistenceProvider.enableIndexedDbPersistence(this,n)}clearPersistence(){return this._persistenceProvider.clearIndexedDbPersistence(this)}terminate(){return this._appCompat&&(this._appCompat._removeServiceInstance("firestore-compat"),this._appCompat._removeServiceInstance("firestore")),this._delegate._delete()}waitForPendingWrites(){return pp(this._delegate)}onSnapshotsInSync(e){return zm(this._delegate,e)}get app(){if(!this._appCompat)throw new zi("failed-precondition","Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._appCompat}collection(e){try{return new kg(this,Xf(this._delegate,e))}catch(t){throw yg(t,"collection()","Firestore.collection()")}}doc(e){try{return new vg(this,ep(this._delegate,e))}catch(t){throw yg(t,"doc()","Firestore.doc()")}}collectionGroup(e){try{return new Sg(this,Jf(this._delegate,e))}catch(t){throw yg(t,"collectionGroup()","Firestore.collectionGroup()")}}runTransaction(e){return Qm(this._delegate,(t=>e(new pg(this,t))))}batch(){return cp(this._delegate),new mg(new Zm(this._delegate,(e=>qm(this._delegate,e))))}loadBundle(e){return vp(this._delegate,e)}namedQuery(e){return yp(this._delegate,e).then((e=>e?new Sg(this,e):null))}}class dg extends Im{constructor(e){super(),this.firestore=e}convertBytes(e){return new ag(new wp(e))}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return vg.forKey(t,this.firestore,null)}}function fg(e){Ri(e)}class pg{constructor(e,t){this._firestore=e,this._delegate=t,this._userDataWriter=new dg(e)}get(e){const t=Cg(e);return this._delegate.get(t).then((e=>new _g(this._firestore,new km(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,t.converter))))}set(e,t,n){const i=Cg(e);return n?(rg("Transaction.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=Cg(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=Cg(e);return this._delegate.delete(t),this}}class mg{constructor(e){this._delegate=e}set(e,t,n){const i=Cg(e);return n?(rg("WriteBatch.set",n),this._delegate.set(i,t,n)):this._delegate.set(i,t),this}update(e,t,n,...i){const r=Cg(e);return 2===arguments.length?this._delegate.update(r,t):this._delegate.update(r,t,n,...i),this}delete(e){const t=Cg(e);return this._delegate.delete(t),this}commit(){return this._delegate.commit()}}class gg{constructor(e,t,n){this._firestore=e,this._userDataWriter=t,this._delegate=n}fromFirestore(e,t){const n=new Cm(this._firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,null);return this._delegate.fromFirestore(new Ig(this._firestore,n),null!==t&&void 0!==t?t:{})}toFirestore(e,t){return t?this._delegate.toFirestore(e,t):this._delegate.toFirestore(e)}static getInstance(e,t){const n=gg.INSTANCES;let i=n.get(e);i||(i=new WeakMap,n.set(e,i));let r=i.get(t);return r||(r=new gg(e,new dg(e),t),i.set(t,r)),r}}gg.INSTANCES=new WeakMap;class vg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new dg(e)}static forPath(e,t,n){if(e.length%2!==0)throw new zi("invalid-argument",`Invalid document reference. Document references must have an even number of segments, but ${e.canonicalString()} has ${e.length}`);return new vg(t,new Wf(t._delegate,n,new lr(e)))}static forKey(e,t,n){return new vg(t,new Wf(t._delegate,n,e))}get id(){return this._delegate.id}get parent(){return new kg(this.firestore,this._delegate.parent)}get path(){return this._delegate.path}collection(e){try{return new kg(this.firestore,Xf(this._delegate,e))}catch(t){throw yg(t,"collection()","DocumentReference.collection()")}}isEqual(e){return e=(0,c.m9)(e),e instanceof Wf&&tp(this._delegate,e)}set(e,t){t=rg("DocumentReference.set",t);try{return t?Vm(this._delegate,e,t):Vm(this._delegate,e)}catch(n){throw yg(n,"setDoc()","DocumentReference.set()")}}update(e,t,...n){try{return 1===arguments.length?Fm(this._delegate,e):Fm(this._delegate,e,t,...n)}catch(i){throw yg(i,"updateDoc()","DocumentReference.update()")}}delete(){return Bm(this._delegate)}onSnapshot(...e){const t=bg(e),n=wg(e,(e=>new _g(this.firestore,new km(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))));return jm(this._delegate,t,n)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?Rm(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Lm(this._delegate):Nm(this._delegate),t.then((e=>new _g(this.firestore,new km(this.firestore._delegate,this._userDataWriter,e._key,e._document,e.metadata,this._delegate.converter))))}withConverter(e){return new vg(this.firestore,e?this._delegate.withConverter(gg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function yg(e,t,n){return e.message=e.message.replace(t,n),e}function bg(e){for(const t of e)if("object"===typeof t&&!cg(t))return t;return{}}function wg(e,t){var n,i;let r;return r=cg(e[0])?e[0]:cg(e[1])?e[1]:"function"===typeof e[0]?{next:e[0],error:e[1],complete:e[2]}:{next:e[1],error:e[2],complete:e[3]},{next:e=>{r.next&&r.next(t(e))},error:null===(n=r.error)||void 0===n?void 0:n.bind(r),complete:null===(i=r.complete)||void 0===i?void 0:i.bind(r)}}class _g{constructor(e,t){this._firestore=e,this._delegate=t}get ref(){return new vg(this._firestore,this._delegate.ref)}get id(){return this._delegate.id}get metadata(){return this._delegate.metadata}get exists(){return this._delegate.exists()}data(e){return this._delegate.data(e)}get(e,t){return this._delegate.get(e,t)}isEqual(e){return Om(this._delegate,e._delegate)}}class Ig extends _g{data(e){const t=this._delegate.data(e);return Bi(void 0!==t,"Document in a QueryDocumentSnapshot should exist"),t}}class Sg{constructor(e,t){this.firestore=e,this._delegate=t,this._userDataWriter=new dg(e)}where(e,t,n){try{return new Sg(this.firestore,nm(this._delegate,rm(e,t,n)))}catch(i){throw yg(i,/(orderBy|where)\(\)/,"Query.$1()")}}orderBy(e,t){try{return new Sg(this.firestore,nm(this._delegate,am(e,t)))}catch(n){throw yg(n,/(orderBy|where)\(\)/,"Query.$1()")}}limit(e){try{return new Sg(this.firestore,nm(this._delegate,um(e)))}catch(t){throw yg(t,"limit()","Query.limit()")}}limitToLast(e){try{return new Sg(this.firestore,nm(this._delegate,lm(e)))}catch(t){throw yg(t,"limitToLast()","Query.limitToLast()")}}startAt(...e){try{return new Sg(this.firestore,nm(this._delegate,dm(...e)))}catch(t){throw yg(t,"startAt()","Query.startAt()")}}startAfter(...e){try{return new Sg(this.firestore,nm(this._delegate,fm(...e)))}catch(t){throw yg(t,"startAfter()","Query.startAfter()")}}endBefore(...e){try{return new Sg(this.firestore,nm(this._delegate,mm(...e)))}catch(t){throw yg(t,"endBefore()","Query.endBefore()")}}endAt(...e){try{return new Sg(this.firestore,nm(this._delegate,gm(...e)))}catch(t){throw yg(t,"endAt()","Query.endAt()")}}isEqual(e){return np(this._delegate,e._delegate)}get(e){let t;return t="cache"===(null===e||void 0===e?void 0:e.source)?$m(this._delegate):"server"===(null===e||void 0===e?void 0:e.source)?Mm(this._delegate):Pm(this._delegate),t.then((e=>new Eg(this.firestore,new xm(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))))}onSnapshot(...e){const t=bg(e),n=wg(e,(e=>new Eg(this.firestore,new xm(this.firestore._delegate,this._userDataWriter,this._delegate,e._snapshot))));return jm(this._delegate,t,n)}withConverter(e){return new Sg(this.firestore,e?this._delegate.withConverter(gg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}class Tg{constructor(e,t){this._firestore=e,this._delegate=t}get type(){return this._delegate.type}get doc(){return new Ig(this._firestore,this._delegate.doc)}get oldIndex(){return this._delegate.oldIndex}get newIndex(){return this._delegate.newIndex}}class Eg{constructor(e,t){this._firestore=e,this._delegate=t}get query(){return new Sg(this._firestore,this._delegate.query)}get metadata(){return this._delegate.metadata}get size(){return this._delegate.size}get empty(){return this._delegate.empty}get docs(){return this._delegate.docs.map((e=>new Ig(this._firestore,e)))}docChanges(e){return this._delegate.docChanges(e).map((e=>new Tg(this._firestore,e)))}forEach(e,t){this._delegate.forEach((n=>{e.call(t,new Ig(this._firestore,n))}))}isEqual(e){return Om(this._delegate,e._delegate)}}class kg extends Sg{constructor(e,t){super(e,t),this.firestore=e,this._delegate=t}get id(){return this._delegate.id}get path(){return this._delegate.path}get parent(){const e=this._delegate.parent;return e?new vg(this.firestore,e):null}doc(e){try{return new vg(this.firestore,void 0===e?ep(this._delegate):ep(this._delegate,e))}catch(t){throw yg(t,"doc()","CollectionReference.doc()")}}add(e){return Um(this._delegate,e).then((e=>new vg(this.firestore,e)))}isEqual(e){return tp(this._delegate,e._delegate)}withConverter(e){return new kg(this.firestore,e?this._delegate.withConverter(gg.getInstance(this.firestore,e)):this._delegate.withConverter(null))}}function Cg(e){return qf(e,Wf)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xg{constructor(...e){this._delegate=new _p(...e)}static documentId(){return new xg(ur.keyField().canonicalString())}isEqual(e){return e=(0,c.m9)(e),e instanceof _p&&this._delegate._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ag{constructor(e){this._delegate=e}static serverTimestamp(){const e=Xm();return e._methodName="FieldValue.serverTimestamp",new Ag(e)}static delete(){const e=Ym();return e._methodName="FieldValue.delete",new Ag(e)}static arrayUnion(...e){const t=Jm(...e);return t._methodName="FieldValue.arrayUnion",new Ag(t)}static arrayRemove(...e){const t=eg(...e);return t._methodName="FieldValue.arrayRemove",new Ag(t)}static increment(e){const t=tg(e);return t._methodName="FieldValue.increment",new Ag(t)}isEqual(e){return this._delegate.isEqual(e._delegate)}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Og={Firestore:hg,GeoPoint:Sp,Timestamp:rr,Blob:ag,Transaction:pg,WriteBatch:mg,DocumentReference:vg,DocumentSnapshot:_g,Query:Sg,QueryDocumentSnapshot:Ig,QuerySnapshot:Eg,CollectionReference:kg,FieldPath:xg,FieldValue:Ag,setLogLevel:fg,CACHE_SIZE_UNLIMITED:op};function Ng(e,t){e.INTERNAL.registerComponent(new o.wA("firestore-compat",(e=>{const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("firestore").getImmediate();return t(n,i)}),"PUBLIC").setServiceProps(Object.assign({},Og)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dg(e){Ng(e,((e,t)=>new hg(e,t,new lg))),e.registerVersion(ng,ig)}Dg(r.Z)},8542:function(e,t,n){"use strict";var i=n(8180),r=n(5816),s=n(4444),o=n(8463);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const a="firebasestorage.googleapis.com",c="storageBucket",u=12e4,l=6e5,h=1e3;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class d extends s.ZR{constructor(e,t,n=0){super(m(e),`Firebase Storage: ${t} (${m(e)})`),this.status_=n,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,d.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return m(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}var f,p;function m(e){return"storage/"+e}function g(){const e="An unknown error occurred, please check the error payload for server response.";return new d(f.UNKNOWN,e)}function v(e){return new d(f.OBJECT_NOT_FOUND,"Object '"+e+"' does not exist.")}function y(e){return new d(f.QUOTA_EXCEEDED,"Quota for bucket '"+e+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function b(){const e="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new d(f.UNAUTHENTICATED,e)}function w(){return new d(f.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function _(e){return new d(f.UNAUTHORIZED,"User does not have permission to access '"+e+"'.")}function I(){return new d(f.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function S(){return new d(f.CANCELED,"User canceled the upload/download.")}function T(e){return new d(f.INVALID_URL,"Invalid URL '"+e+"'.")}function E(e){return new d(f.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+e+"'.")}function k(){return new d(f.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+c+"' property when initializing the app?")}function C(){return new d(f.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function x(){return new d(f.SERVER_FILE_WRONG_SIZE,"Server recorded incorrect upload file size, please retry the upload.")}function A(){return new d(f.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function O(e){return new d(f.UNSUPPORTED_ENVIRONMENT,`${e} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function N(e){return new d(f.INVALID_ARGUMENT,e)}function D(){return new d(f.APP_DELETED,"The Firebase app was deleted.")}function R(e){return new d(f.INVALID_ROOT_OPERATION,"The operation '"+e+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function L(e,t){return new d(f.INVALID_FORMAT,"String does not match format '"+e+"': "+t)}function P(e){throw new d(f.INTERNAL_ERROR,"Internal error: "+e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e["UNKNOWN"]="unknown",e["OBJECT_NOT_FOUND"]="object-not-found",e["BUCKET_NOT_FOUND"]="bucket-not-found",e["PROJECT_NOT_FOUND"]="project-not-found",e["QUOTA_EXCEEDED"]="quota-exceeded",e["UNAUTHENTICATED"]="unauthenticated",e["UNAUTHORIZED"]="unauthorized",e["UNAUTHORIZED_APP"]="unauthorized-app",e["RETRY_LIMIT_EXCEEDED"]="retry-limit-exceeded",e["INVALID_CHECKSUM"]="invalid-checksum",e["CANCELED"]="canceled",e["INVALID_EVENT_NAME"]="invalid-event-name",e["INVALID_URL"]="invalid-url",e["INVALID_DEFAULT_BUCKET"]="invalid-default-bucket",e["NO_DEFAULT_BUCKET"]="no-default-bucket",e["CANNOT_SLICE_BLOB"]="cannot-slice-blob",e["SERVER_FILE_WRONG_SIZE"]="server-file-wrong-size",e["NO_DOWNLOAD_URL"]="no-download-url",e["INVALID_ARGUMENT"]="invalid-argument",e["INVALID_ARGUMENT_COUNT"]="invalid-argument-count",e["APP_DELETED"]="app-deleted",e["INVALID_ROOT_OPERATION"]="invalid-root-operation",e["INVALID_FORMAT"]="invalid-format",e["INTERNAL_ERROR"]="internal-error",e["UNSUPPORTED_ENVIRONMENT"]="unsupported-environment"})(f||(f={}));class ${constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let n;try{n=$.makeFromUrl(e,t)}catch(i){return new $(e,"")}if(""===n.path)return n;throw E(e)}static makeFromUrl(e,t){let n=null;const i="([A-Za-z0-9.\\-_]+)";function r(e){"/"===e.path.charAt(e.path.length-1)&&(e.path_=e.path_.slice(0,-1))}const s="(/(.*))?$",o=new RegExp("^gs://"+i+s,"i"),c={bucket:1,path:3};function u(e){e.path_=decodeURIComponent(e.path)}const l="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${l}/b/${i}/o${d}`,"i"),p={bucket:1,path:3},m=t===a?"(?:storage.googleapis.com|storage.cloud.google.com)":t,g="([^?#]*)",v=new RegExp(`^https?://${m}/${i}/${g}`,"i"),y={bucket:1,path:2},b=[{regex:o,indices:c,postModify:r},{regex:f,indices:p,postModify:u},{regex:v,indices:y,postModify:u}];for(let a=0;a<b.length;a++){const t=b[a],i=t.regex.exec(e);if(i){const e=i[t.indices.bucket];let r=i[t.indices.path];r||(r=""),n=new $(e,r),t.postModify(n);break}}if(null==n)throw T(e);return n}}class M{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(e,t,n){let i=1,r=null,s=null,o=!1,a=0;function c(){return 2===a}let u=!1;function l(...e){u||(u=!0,t.apply(null,e))}function h(t){r=setTimeout((()=>{r=null,e(f,c())}),t)}function d(){s&&clearTimeout(s)}function f(e,...t){if(u)return void d();if(e)return d(),void l.call(null,e,...t);const n=c()||o;if(n)return d(),void l.call(null,e,...t);let r;i<64&&(i*=2),1===a?(a=2,r=0):r=1e3*(i+Math.random()),h(r)}let p=!1;function m(e){p||(p=!0,d(),u||(null!==r?(e||(a=2),clearTimeout(r),h(0)):e||(a=1)))}return h(0),s=setTimeout((()=>{o=!0,m(!0)}),n),m}function F(e){e(!1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function B(e){return void 0!==e}function U(e){return"function"===typeof e}function j(e){return"object"===typeof e&&!Array.isArray(e)}function z(e){return"string"===typeof e||e instanceof String}function q(e){return H()&&e instanceof Blob}function H(){return"undefined"!==typeof Blob&&!(0,s.UG)()}function G(e,t,n,i){if(i<t)throw N(`Invalid value for '${e}'. Expected ${t} or greater.`);if(i>n)throw N(`Invalid value for '${e}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Z(e,t,n){let i=t;return null==n&&(i=`https://${t}`),`${n}://${i}/v0${e}`}function K(e){const t=encodeURIComponent;let n="?";for(const i in e)if(e.hasOwnProperty(i)){const r=t(i)+"="+t(e[i]);n=n+r+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function W(e,t){const n=e>=500&&e<600,i=[408,429],r=-1!==i.indexOf(e),s=-1!==t.indexOf(e);return n||r||s}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(function(e){e[e["NO_ERROR"]=0]="NO_ERROR",e[e["NETWORK_ERROR"]=1]="NETWORK_ERROR",e[e["ABORT"]=2]="ABORT"})(p||(p={}));class Q{constructor(e,t,n,i,r,s,o,a,c,u,l,h=!0){this.url_=e,this.method_=t,this.headers_=n,this.body_=i,this.successCodes_=r,this.additionalRetryCodes_=s,this.callback_=o,this.errorCallback_=a,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=l,this.retry=h,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise(((e,t)=>{this.resolve_=e,this.reject_=t,this.start_()}))}start_(){const e=(e,t)=>{if(t)return void e(!1,new Y(!1,null,!0));const n=this.connectionFactory_();this.pendingConnection_=n;const i=e=>{const t=e.loaded,n=e.lengthComputable?e.total:-1;null!==this.progressCallback_&&this.progressCallback_(t,n)};null!==this.progressCallback_&&n.addUploadProgressListener(i),n.send(this.url_,this.method_,this.body_,this.headers_).then((()=>{null!==this.progressCallback_&&n.removeUploadProgressListener(i),this.pendingConnection_=null;const t=n.getErrorCode()===p.NO_ERROR,r=n.getStatus();if(!t||W(r,this.additionalRetryCodes_)&&this.retry){const t=n.getErrorCode()===p.ABORT;return void e(!1,new Y(!1,null,t))}const s=-1!==this.successCodes_.indexOf(r);e(!0,new Y(s,n))}))},t=(e,t)=>{const n=this.resolve_,i=this.reject_,r=t.connection;if(t.wasSuccessCode)try{const e=this.callback_(r,r.getResponse());B(e)?n(e):n()}catch(s){i(s)}else if(null!==r){const e=g();e.serverResponse=r.getErrorText(),this.errorCallback_?i(this.errorCallback_(r,e)):i(e)}else if(t.canceled){const e=this.appDelete_?D():S();i(e)}else{const e=I();i(e)}};this.canceled_?t(!1,new Y(!1,null,!0)):this.backoffId_=V(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,null!==this.backoffId_&&F(this.backoffId_),null!==this.pendingConnection_&&this.pendingConnection_.abort()}}class Y{constructor(e,t,n){this.wasSuccessCode=e,this.connection=t,this.canceled=!!n}}function X(e,t){null!==t&&t.length>0&&(e["Authorization"]="Firebase "+t)}function J(e,t){e["X-Firebase-Storage-Version"]="webjs/"+(null!==t&&void 0!==t?t:"AppManager")}function ee(e,t){t&&(e["X-Firebase-GMPID"]=t)}function te(e,t){null!==t&&(e["X-Firebase-AppCheck"]=t)}function ne(e,t,n,i,r,s,o=!0){const a=K(e.urlParams),c=e.url+a,u=Object.assign({},e.headers);return ee(u,t),X(u,n),J(u,s),te(u,i),new Q(c,e.method,u,e.body,e.successCodes,e.additionalRetryCodes,e.handler,e.errorHandler,e.timeout,e.progressCallback,r,o)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(){return"undefined"!==typeof BlobBuilder?BlobBuilder:"undefined"!==typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function re(...e){const t=ie();if(void 0!==t){const n=new t;for(let t=0;t<e.length;t++)n.append(e[t]);return n.getBlob()}if(H())return new Blob(e);throw new d(f.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}function se(e,t,n){return e.webkitSlice?e.webkitSlice(t,n):e.mozSlice?e.mozSlice(t,n):e.slice?e.slice(t,n):null}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function oe(e){if("undefined"===typeof atob)throw O("base-64");return atob(e)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ae={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class ce{constructor(e,t){this.data=e,this.contentType=t||null}}function ue(e,t){switch(e){case ae.RAW:return new ce(le(t));case ae.BASE64:case ae.BASE64URL:return new ce(de(e,t));case ae.DATA_URL:return new ce(pe(t),me(t))}throw g()}function le(e){const t=[];for(let n=0;n<e.length;n++){let i=e.charCodeAt(n);if(i<=127)t.push(i);else if(i<=2047)t.push(192|i>>6,128|63&i);else if(55296===(64512&i)){const r=n<e.length-1&&56320===(64512&e.charCodeAt(n+1));if(r){const r=i,s=e.charCodeAt(++n);i=65536|(1023&r)<<10|1023&s,t.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|63&i)}else t.push(239,191,189)}else 56320===(64512&i)?t.push(239,191,189):t.push(224|i>>12,128|i>>6&63,128|63&i)}return new Uint8Array(t)}function he(e){let t;try{t=decodeURIComponent(e)}catch(n){throw L(ae.DATA_URL,"Malformed data URL.")}return le(t)}function de(e,t){switch(e){case ae.BASE64:{const n=-1!==t.indexOf("-"),i=-1!==t.indexOf("_");if(n||i){const t=n?"-":"_";throw L(e,"Invalid character '"+t+"' found: is it base64url encoded?")}break}case ae.BASE64URL:{const n=-1!==t.indexOf("+"),i=-1!==t.indexOf("/");if(n||i){const t=n?"+":"/";throw L(e,"Invalid character '"+t+"' found: is it base64 encoded?")}t=t.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=oe(t)}catch(r){if(r.message.includes("polyfill"))throw r;throw L(e,"Invalid character found")}const i=new Uint8Array(n.length);for(let s=0;s<n.length;s++)i[s]=n.charCodeAt(s);return i}class fe{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(null===t)throw L(ae.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=t[1]||null;null!=n&&(this.base64=ge(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=e.substring(e.indexOf(",")+1)}}function pe(e){const t=new fe(e);return t.base64?de(ae.BASE64,t.rest):he(t.rest)}function me(e){const t=new fe(e);return t.contentType}function ge(e,t){const n=e.length>=t.length;return!!n&&e.substring(e.length-t.length)===t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ve{constructor(e,t){let n=0,i="";q(e)?(this.data_=e,n=e.size,i=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),n=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),n=e.length),this.size_=n,this.type_=i}size(){return this.size_}type(){return this.type_}slice(e,t){if(q(this.data_)){const n=this.data_,i=se(n,e,t);return null===i?null:new ve(i)}{const n=new Uint8Array(this.data_.buffer,e,t-e);return new ve(n,!0)}}static getBlob(...e){if(H()){const t=e.map((e=>e instanceof ve?e.data_:e));return new ve(re.apply(null,t))}{const t=e.map((e=>z(e)?ue(ae.RAW,e).data:e.data_));let n=0;t.forEach((e=>{n+=e.byteLength}));const i=new Uint8Array(n);let r=0;return t.forEach((e=>{for(let t=0;t<e.length;t++)i[r++]=e[t]})),new ve(i,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){let t;try{t=JSON.parse(e)}catch(n){return null}return j(t)?t:null}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function be(e){if(0===e.length)return null;const t=e.lastIndexOf("/");if(-1===t)return"";const n=e.slice(0,t);return n}function we(e,t){const n=t.split("/").filter((e=>e.length>0)).join("/");return 0===e.length?n:e+"/"+n}function _e(e){const t=e.lastIndexOf("/",e.length-2);return-1===t?e:e.slice(t+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ie(e,t){return t}class Se{constructor(e,t,n,i){this.server=e,this.local=t||e,this.writable=!!n,this.xform=i||Ie}}let Te=null;function Ee(e){return!z(e)||e.length<2?e:_e(e)}function ke(){if(Te)return Te;const e=[];function t(e,t){return Ee(t)}e.push(new Se("bucket")),e.push(new Se("generation")),e.push(new Se("metageneration")),e.push(new Se("name","fullPath",!0));const n=new Se("name");function i(e,t){return void 0!==t?Number(t):t}n.xform=t,e.push(n);const r=new Se("size");return r.xform=i,e.push(r),e.push(new Se("timeCreated")),e.push(new Se("updated")),e.push(new Se("md5Hash",null,!0)),e.push(new Se("cacheControl",null,!0)),e.push(new Se("contentDisposition",null,!0)),e.push(new Se("contentEncoding",null,!0)),e.push(new Se("contentLanguage",null,!0)),e.push(new Se("contentType",null,!0)),e.push(new Se("metadata","customMetadata",!0)),Te=e,Te}function Ce(e,t){function n(){const n=e["bucket"],i=e["fullPath"],r=new $(n,i);return t._makeStorageReference(r)}Object.defineProperty(e,"ref",{get:n})}function xe(e,t,n){const i={type:"file"},r=n.length;for(let s=0;s<r;s++){const e=n[s];i[e.local]=e.xform(i,t[e.server])}return Ce(i,e),i}function Ae(e,t,n){const i=ye(t);if(null===i)return null;const r=i;return xe(e,r,n)}function Oe(e,t,n,i){const r=ye(t);if(null===r)return null;if(!z(r["downloadTokens"]))return null;const s=r["downloadTokens"];if(0===s.length)return null;const o=encodeURIComponent,a=s.split(","),c=a.map((t=>{const r=e["bucket"],s=e["fullPath"],a="/b/"+o(r)+"/o/"+o(s),c=Z(a,n,i),u=K({alt:"media",token:t});return c+u}));return c[0]}function Ne(e,t){const n={},i=t.length;for(let r=0;r<i;r++){const i=t[r];i.writable&&(n[i.server]=e[i.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="prefixes",Re="items";function Le(e,t,n){const i={prefixes:[],items:[],nextPageToken:n["nextPageToken"]};if(n[De])for(const r of n[De]){const n=r.replace(/\/$/,""),s=e._makeStorageReference(new $(t,n));i.prefixes.push(s)}if(n[Re])for(const r of n[Re]){const n=e._makeStorageReference(new $(t,r["name"]));i.items.push(n)}return i}function Pe(e,t,n){const i=ye(n);if(null===i)return null;const r=i;return Le(e,t,r)}class $e{constructor(e,t,n,i){this.url=e,this.method=t,this.handler=n,this.timeout=i,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Me(e){if(!e)throw g()}function Ve(e,t){function n(n,i){const r=Ae(e,i,t);return Me(null!==r),r}return n}function Fe(e,t){function n(n,i){const r=Pe(e,t,i);return Me(null!==r),r}return n}function Be(e,t){function n(n,i){const r=Ae(e,i,t);return Me(null!==r),Oe(r,i,e.host,e._protocol)}return n}function Ue(e){function t(t,n){let i;return i=401===t.getStatus()?t.getErrorText().includes("Firebase App Check token is invalid")?w():b():402===t.getStatus()?y(e.bucket):403===t.getStatus()?_(e.path):n,i.status=t.getStatus(),i.serverResponse=n.serverResponse,i}return t}function je(e){const t=Ue(e);function n(n,i){let r=t(n,i);return 404===n.getStatus()&&(r=v(e.path)),r.serverResponse=i.serverResponse,r}return n}function ze(e,t,n){const i=t.fullServerUrl(),r=Z(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new $e(r,s,Ve(e,n),o);return a.errorHandler=je(t),a}function qe(e,t,n,i,r){const s={};t.isRoot?s["prefix"]="":s["prefix"]=t.path+"/",n&&n.length>0&&(s["delimiter"]=n),i&&(s["pageToken"]=i),r&&(s["maxResults"]=r);const o=t.bucketOnlyServerUrl(),a=Z(o,e.host,e._protocol),c="GET",u=e.maxOperationRetryTime,l=new $e(a,c,Fe(e,t.bucket),u);return l.urlParams=s,l.errorHandler=Ue(t),l}function He(e,t,n){const i=t.fullServerUrl(),r=Z(i,e.host,e._protocol),s="GET",o=e.maxOperationRetryTime,a=new $e(r,s,Be(e,n),o);return a.errorHandler=je(t),a}function Ge(e,t,n,i){const r=t.fullServerUrl(),s=Z(r,e.host,e._protocol),o="PATCH",a=Ne(n,i),c={"Content-Type":"application/json; charset=utf-8"},u=e.maxOperationRetryTime,l=new $e(s,o,Ve(e,i),u);return l.headers=c,l.body=a,l.errorHandler=je(t),l}function Ze(e,t){const n=t.fullServerUrl(),i=Z(n,e.host,e._protocol),r="DELETE",s=e.maxOperationRetryTime;function o(e,t){}const a=new $e(i,r,o,s);return a.successCodes=[200,204],a.errorHandler=je(t),a}function Ke(e,t){return e&&e["contentType"]||t&&t.type()||"application/octet-stream"}function We(e,t,n){const i=Object.assign({},n);return i["fullPath"]=e.path,i["size"]=t.size(),i["contentType"]||(i["contentType"]=Ke(null,t)),i}function Qe(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let e="";for(let t=0;t<2;t++)e+=Math.random().toString().slice(2);return e}const c=a();o["Content-Type"]="multipart/related; boundary="+c;const u=We(t,i,r),l=Ne(u,n),h="--"+c+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+l+"\r\n--"+c+"\r\nContent-Type: "+u["contentType"]+"\r\n\r\n",d="\r\n--"+c+"--",f=ve.getBlob(h,i,d);if(null===f)throw C();const p={name:u["fullPath"]},m=Z(s,e.host,e._protocol),g="POST",v=e.maxUploadRetryTime,y=new $e(m,g,Ve(e,n),v);return y.urlParams=p,y.headers=o,y.body=f.uploadData(),y.errorHandler=Ue(t),y}class Ye{constructor(e,t,n,i){this.current=e,this.total=t,this.finalized=!!n,this.metadata=i||null}}function Xe(e,t){let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Status")}catch(r){Me(!1)}const i=t||["active"];return Me(!!n&&-1!==i.indexOf(n)),n}function Je(e,t,n,i,r){const s=t.bucketOnlyServerUrl(),o=We(t,i,r),a={name:o["fullPath"]},c=Z(s,e.host,e._protocol),u="POST",l={"X-Goog-Upload-Protocol":"resumable","X-Goog-Upload-Command":"start","X-Goog-Upload-Header-Content-Length":`${i.size()}`,"X-Goog-Upload-Header-Content-Type":o["contentType"],"Content-Type":"application/json; charset=utf-8"},h=Ne(o,n),d=e.maxUploadRetryTime;function f(e){let t;Xe(e);try{t=e.getResponseHeader("X-Goog-Upload-URL")}catch(n){Me(!1)}return Me(z(t)),t}const p=new $e(c,u,f,d);return p.urlParams=a,p.headers=l,p.body=h,p.errorHandler=Ue(t),p}function et(e,t,n,i){const r={"X-Goog-Upload-Command":"query"};function s(e){const t=Xe(e,["active","final"]);let n=null;try{n=e.getResponseHeader("X-Goog-Upload-Size-Received")}catch(s){Me(!1)}n||Me(!1);const r=Number(n);return Me(!isNaN(r)),new Ye(r,i.size(),"final"===t)}const o="POST",a=e.maxUploadRetryTime,c=new $e(n,o,s,a);return c.headers=r,c.errorHandler=Ue(t),c}const tt=262144;function nt(e,t,n,i,r,s,o,a){const c=new Ye(0,0);if(o?(c.current=o.current,c.total=o.total):(c.current=0,c.total=i.size()),i.size()!==c.total)throw x();const u=c.total-c.current;let l=u;r>0&&(l=Math.min(l,r));const h=c.current,d=h+l;let f="";f=0===l?"finalize":u===l?"upload, finalize":"upload";const p={"X-Goog-Upload-Command":f,"X-Goog-Upload-Offset":`${c.current}`},m=i.slice(h,d);if(null===m)throw C();function g(e,n){const r=Xe(e,["active","final"]),o=c.current+l,a=i.size();let u;return u="final"===r?Ve(t,s)(e,n):null,new Ye(o,a,"final"===r,u)}const v="POST",y=t.maxUploadRetryTime,b=new $e(n,v,g,y);return b.headers=p,b.body=m.uploadData(),b.progressCallback=a||null,b.errorHandler=Ue(e),b}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const it={STATE_CHANGED:"state_changed"},rt={RUNNING:"running",PAUSED:"paused",SUCCESS:"success",CANCELED:"canceled",ERROR:"error"};function st(e){switch(e){case"running":case"pausing":case"canceling":return rt.RUNNING;case"paused":return rt.PAUSED;case"success":return rt.SUCCESS;case"canceled":return rt.CANCELED;case"error":return rt.ERROR;default:return rt.ERROR}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ot{constructor(e,t,n){const i=U(e)||null!=t||null!=n;if(i)this.next=e,this.error=null!==t&&void 0!==t?t:void 0,this.complete=null!==n&&void 0!==n?n:void 0;else{const t=e;this.next=t.next,this.error=t.error,this.complete=t.complete}}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return(...t)=>{Promise.resolve().then((()=>e(...t)))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ct=null;class ut{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=p.NO_ERROR,this.sendPromise_=new Promise((e=>{this.xhr_.addEventListener("abort",(()=>{this.errorCode_=p.ABORT,e()})),this.xhr_.addEventListener("error",(()=>{this.errorCode_=p.NETWORK_ERROR,e()})),this.xhr_.addEventListener("load",(()=>{e()}))}))}send(e,t,n,i){if(this.sent_)throw P("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),void 0!==i)for(const r in i)i.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,i[r].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw P("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw P("cannot .getStatus() before sending");try{return this.xhr_.status}catch(e){return-1}}getResponse(){if(!this.sent_)throw P("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw P("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",e)}}class lt extends ut{initXhr(){this.xhr_.responseType="text"}}function ht(){return ct?ct():new lt}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class dt{constructor(e,t,n=null){this._transferred=0,this._needToFetchStatus=!1,this._needToFetchMetadata=!1,this._observers=[],this._error=void 0,this._uploadUrl=void 0,this._request=void 0,this._chunkMultiplier=1,this._resolve=void 0,this._reject=void 0,this._ref=e,this._blob=t,this._metadata=n,this._mappings=ke(),this._resumable=this._shouldDoResumable(this._blob),this._state="running",this._errorHandler=e=>{if(this._request=void 0,this._chunkMultiplier=1,e._codeEquals(f.CANCELED))this._needToFetchStatus=!0,this.completeTransitions_();else{const t=this.isExponentialBackoffExpired();if(W(e.status,[])){if(!t)return this.sleepTime=Math.max(2*this.sleepTime,h),this._needToFetchStatus=!0,void this.completeTransitions_();e=I()}this._error=e,this._transition("error")}},this._metadataErrorHandler=e=>{this._request=void 0,e._codeEquals(f.CANCELED)?this.completeTransitions_():(this._error=e,this._transition("error"))},this.sleepTime=0,this.maxSleepTime=this._ref.storage.maxUploadRetryTime,this._promise=new Promise(((e,t)=>{this._resolve=e,this._reject=t,this._start()})),this._promise.then(null,(()=>{}))}isExponentialBackoffExpired(){return this.sleepTime>this.maxSleepTime}_makeProgressCallback(){const e=this._transferred;return t=>this._updateProgress(e+t)}_shouldDoResumable(e){return e.size()>262144}_start(){"running"===this._state&&void 0===this._request&&(this._resumable?void 0===this._uploadUrl?this._createResumable():this._needToFetchStatus?this._fetchStatus():this._needToFetchMetadata?this._fetchMetadata():this.pendingTimeout=setTimeout((()=>{this.pendingTimeout=void 0,this._continueUpload()}),this.sleepTime):this._oneShotUpload())}_resolveToken(e){Promise.all([this._ref.storage._getAuthToken(),this._ref.storage._getAppCheckToken()]).then((([t,n])=>{switch(this._state){case"running":e(t,n);break;case"canceling":this._transition("canceled");break;case"pausing":this._transition("paused");break}}))}_createResumable(){this._resolveToken(((e,t)=>{const n=Je(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ht,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._uploadUrl=e,this._needToFetchStatus=!1,this.completeTransitions_()}),this._errorHandler)}))}_fetchStatus(){const e=this._uploadUrl;this._resolveToken(((t,n)=>{const i=et(this._ref.storage,this._ref._location,e,this._blob),r=this._ref.storage._makeRequest(i,ht,t,n);this._request=r,r.getPromise().then((e=>{this._request=void 0,this._updateProgress(e.current),this._needToFetchStatus=!1,e.finalized&&(this._needToFetchMetadata=!0),this.completeTransitions_()}),this._errorHandler)}))}_continueUpload(){const e=tt*this._chunkMultiplier,t=new Ye(this._transferred,this._blob.size()),n=this._uploadUrl;this._resolveToken(((i,r)=>{let s;try{s=nt(this._ref._location,this._ref.storage,n,this._blob,e,this._mappings,t,this._makeProgressCallback())}catch(a){return this._error=a,void this._transition("error")}const o=this._ref.storage._makeRequest(s,ht,i,r,!1);this._request=o,o.getPromise().then((e=>{this._increaseMultiplier(),this._request=void 0,this._updateProgress(e.current),e.finalized?(this._metadata=e.metadata,this._transition("success")):this.completeTransitions_()}),this._errorHandler)}))}_increaseMultiplier(){const e=tt*this._chunkMultiplier;2*e<33554432&&(this._chunkMultiplier*=2)}_fetchMetadata(){this._resolveToken(((e,t)=>{const n=ze(this._ref.storage,this._ref._location,this._mappings),i=this._ref.storage._makeRequest(n,ht,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._transition("success")}),this._metadataErrorHandler)}))}_oneShotUpload(){this._resolveToken(((e,t)=>{const n=Qe(this._ref.storage,this._ref._location,this._mappings,this._blob,this._metadata),i=this._ref.storage._makeRequest(n,ht,e,t);this._request=i,i.getPromise().then((e=>{this._request=void 0,this._metadata=e,this._updateProgress(this._blob.size()),this._transition("success")}),this._errorHandler)}))}_updateProgress(e){const t=this._transferred;this._transferred=e,this._transferred!==t&&this._notifyObservers()}_transition(e){if(this._state!==e)switch(e){case"canceling":case"pausing":this._state=e,void 0!==this._request?this._request.cancel():this.pendingTimeout&&(clearTimeout(this.pendingTimeout),this.pendingTimeout=void 0,this.completeTransitions_());break;case"running":const t="paused"===this._state;this._state=e,t&&(this._notifyObservers(),this._start());break;case"paused":this._state=e,this._notifyObservers();break;case"canceled":this._error=S(),this._state=e,this._notifyObservers();break;case"error":this._state=e,this._notifyObservers();break;case"success":this._state=e,this._notifyObservers();break}}completeTransitions_(){switch(this._state){case"pausing":this._transition("paused");break;case"canceling":this._transition("canceled");break;case"running":this._start();break}}get snapshot(){const e=st(this._state);return{bytesTransferred:this._transferred,totalBytes:this._blob.size(),state:e,metadata:this._metadata,task:this,ref:this._ref}}on(e,t,n,i){const r=new ot(t||void 0,n||void 0,i||void 0);return this._addObserver(r),()=>{this._removeObserver(r)}}then(e,t){return this._promise.then(e,t)}catch(e){return this.then(null,e)}_addObserver(e){this._observers.push(e),this._notifyObserver(e)}_removeObserver(e){const t=this._observers.indexOf(e);-1!==t&&this._observers.splice(t,1)}_notifyObservers(){this._finishPromise();const e=this._observers.slice();e.forEach((e=>{this._notifyObserver(e)}))}_finishPromise(){if(void 0!==this._resolve){let e=!0;switch(st(this._state)){case rt.SUCCESS:at(this._resolve.bind(null,this.snapshot))();break;case rt.CANCELED:case rt.ERROR:const t=this._reject;at(t.bind(null,this._error))();break;default:e=!1;break}e&&(this._resolve=void 0,this._reject=void 0)}}_notifyObserver(e){const t=st(this._state);switch(t){case rt.RUNNING:case rt.PAUSED:e.next&&at(e.next.bind(e,this.snapshot))();break;case rt.SUCCESS:e.complete&&at(e.complete.bind(e))();break;case rt.CANCELED:case rt.ERROR:e.error&&at(e.error.bind(e,this._error))();break;default:e.error&&at(e.error.bind(e,this._error))()}}resume(){const e="paused"===this._state||"pausing"===this._state;return e&&this._transition("running"),e}pause(){const e="running"===this._state;return e&&this._transition("pausing"),e}cancel(){const e="running"===this._state||"pausing"===this._state;return e&&this._transition("canceling"),e}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t){this._service=e,this._location=t instanceof $?t:$.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new ft(e,t)}get root(){const e=new $(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return _e(this._location.path)}get storage(){return this._service}get parent(){const e=be(this._location.path);if(null===e)return null;const t=new $(this._location.bucket,e);return new ft(this._service,t)}_throwIfRoot(e){if(""===this._location.path)throw R(e)}}function pt(e,t,n){return e._throwIfRoot("uploadBytesResumable"),new dt(e,new ve(t),n)}function mt(e){const t={prefixes:[],items:[]};return gt(e,t).then((()=>t))}async function gt(e,t,n){const i={pageToken:n},r=await vt(e,i);t.prefixes.push(...r.prefixes),t.items.push(...r.items),null!=r.nextPageToken&&await gt(e,t,r.nextPageToken)}function vt(e,t){null!=t&&"number"===typeof t.maxResults&&G("options.maxResults",1,1e3,t.maxResults);const n=t||{},i=qe(e.storage,e._location,"/",n.pageToken,n.maxResults);return e.storage.makeRequestWithTokens(i,ht)}function yt(e){e._throwIfRoot("getMetadata");const t=ze(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,ht)}function bt(e,t){e._throwIfRoot("updateMetadata");const n=Ge(e.storage,e._location,t,ke());return e.storage.makeRequestWithTokens(n,ht)}function wt(e){e._throwIfRoot("getDownloadURL");const t=He(e.storage,e._location,ke());return e.storage.makeRequestWithTokens(t,ht).then((e=>{if(null===e)throw A();return e}))}function _t(e){e._throwIfRoot("deleteObject");const t=Ze(e.storage,e._location);return e.storage.makeRequestWithTokens(t,ht)}function It(e,t){const n=we(e._location.path,t),i=new $(e._location.bucket,n);return new ft(e.storage,i)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(e){return/^[A-Za-z]+:\/\//.test(e)}function Tt(e,t){return new ft(e,t)}function Et(e,t){if(e instanceof At){const n=e;if(null==n._bucket)throw k();const i=new ft(n,n._bucket);return null!=t?Et(i,t):i}return void 0!==t?It(e,t):e}function kt(e,t){if(t&&St(t)){if(e instanceof At)return Tt(e,t);throw N("To use ref(service, url), the first argument must be a Storage instance.")}return Et(e,t)}function Ct(e,t){const n=null===t||void 0===t?void 0:t[c];return null==n?null:$.makeFromBucketSpec(n,e)}function xt(e,t,n,i={}){e.host=`${t}:${n}`,e._protocol="http";const{mockUserToken:r}=i;r&&(e._overrideAuthToken="string"===typeof r?r:(0,s.Sg)(r,e.app.options.projectId))}class At{constructor(e,t,n,i,r){this.app=e,this._authProvider=t,this._appCheckProvider=n,this._url=i,this._firebaseVersion=r,this._bucket=null,this._host=a,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=u,this._maxUploadRetryTime=l,this._requests=new Set,this._bucket=null!=i?$.makeFromBucketSpec(i,this._host):Ct(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,null!=this._url?this._bucket=$.makeFromBucketSpec(this._url,e):this._bucket=Ct(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){G("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(null!==t)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();return t.token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach((e=>e.cancel())),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new ft(this,e)}_makeRequest(e,t,n,i,r=!0){if(this._deleted)return new M(D());{const s=ne(e,this._appId,n,i,t,this._firebaseVersion,r);return this._requests.add(s),s.getPromise().then((()=>this._requests.delete(s)),(()=>this._requests.delete(s))),s}}async makeRequestWithTokens(e,t){const[n,i]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,n,i).getPromise()}}const Ot="@firebase/storage",Nt="0.11.2",Dt="storage";function Rt(e,t,n){return e=(0,s.m9)(e),pt(e,t,n)}function Lt(e){return e=(0,s.m9)(e),yt(e)}function Pt(e,t){return e=(0,s.m9)(e),bt(e,t)}function $t(e,t){return e=(0,s.m9)(e),vt(e,t)}function Mt(e){return e=(0,s.m9)(e),mt(e)}function Vt(e){return e=(0,s.m9)(e),wt(e)}function Ft(e){return e=(0,s.m9)(e),_t(e)}function Bt(e,t){return e=(0,s.m9)(e),kt(e,t)}function Ut(e,t){return It(e,t)}function jt(e,t,n,i={}){xt(e,t,n,i)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,{instanceIdentifier:t}){const n=e.getProvider("app").getImmediate(),i=e.getProvider("auth-internal"),s=e.getProvider("app-check-internal");return new At(n,i,s,t,r.SDK_VERSION)}function qt(){(0,r._registerComponent)(new o.wA(Dt,zt,"PUBLIC").setMultipleInstances(!0)),(0,r.registerVersion)(Ot,Nt,""),(0,r.registerVersion)(Ot,Nt,"esm2017")}qt();
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ht{constructor(e,t,n){this._delegate=e,this.task=t,this.ref=n}get bytesTransferred(){return this._delegate.bytesTransferred}get metadata(){return this._delegate.metadata}get state(){return this._delegate.state}get totalBytes(){return this._delegate.totalBytes}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(e,t){this._delegate=e,this._ref=t,this.cancel=this._delegate.cancel.bind(this._delegate),this.catch=this._delegate.catch.bind(this._delegate),this.pause=this._delegate.pause.bind(this._delegate),this.resume=this._delegate.resume.bind(this._delegate)}get snapshot(){return new Ht(this._delegate.snapshot,this,this._ref)}then(e,t){return this._delegate.then((t=>{if(e)return e(new Ht(t,this,this._ref))}),t)}on(e,t,n,i){let r;return t&&(r="function"===typeof t?e=>t(new Ht(e,this,this._ref)):{next:t.next?e=>t.next(new Ht(e,this,this._ref)):void 0,complete:t.complete||void 0,error:t.error||void 0}),this._delegate.on(e,r,n||void 0,i||void 0)}}class Zt{constructor(e,t){this._delegate=e,this._service=t}get prefixes(){return this._delegate.prefixes.map((e=>new Kt(e,this._service)))}get items(){return this._delegate.items.map((e=>new Kt(e,this._service)))}get nextPageToken(){return this._delegate.nextPageToken||null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(e,t){this._delegate=e,this.storage=t}get name(){return this._delegate.name}get bucket(){return this._delegate.bucket}get fullPath(){return this._delegate.fullPath}toString(){return this._delegate.toString()}child(e){const t=Ut(this._delegate,e);return new Kt(t,this.storage)}get root(){return new Kt(this._delegate.root,this.storage)}get parent(){const e=this._delegate.parent;return null==e?null:new Kt(e,this.storage)}put(e,t){return this._throwIfRoot("put"),new Gt(Rt(this._delegate,e,t),this)}putString(e,t=ae.RAW,n){this._throwIfRoot("putString");const i=ue(t,e),r=Object.assign({},n);return null==r["contentType"]&&null!=i.contentType&&(r["contentType"]=i.contentType),new Gt(new dt(this._delegate,new ve(i.data,!0),r),this)}listAll(){return Mt(this._delegate).then((e=>new Zt(e,this.storage)))}list(e){return $t(this._delegate,e||void 0).then((e=>new Zt(e,this.storage)))}getMetadata(){return Lt(this._delegate)}updateMetadata(e){return Pt(this._delegate,e)}getDownloadURL(){return Vt(this._delegate)}delete(){return this._throwIfRoot("delete"),Ft(this._delegate)}_throwIfRoot(e){if(""===this._delegate._location.path)throw R(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wt{constructor(e,t){this.app=e,this._delegate=t}get maxOperationRetryTime(){return this._delegate.maxOperationRetryTime}get maxUploadRetryTime(){return this._delegate.maxUploadRetryTime}ref(e){if(Qt(e))throw N("ref() expected a child path but got a URL, use refFromURL instead.");return new Kt(Bt(this._delegate,e),this)}refFromURL(e){if(!Qt(e))throw N("refFromURL() expected a full URL but got a child path, use ref() instead.");try{$.makeFromUrl(e,this._delegate.host)}catch(t){throw N("refFromUrl() expected a valid full URL but got an invalid one.")}return new Kt(Bt(this._delegate,e),this)}setMaxUploadRetryTime(e){this._delegate.maxUploadRetryTime=e}setMaxOperationRetryTime(e){this._delegate.maxOperationRetryTime=e}useEmulator(e,t,n={}){jt(this._delegate,e,t,n)}}function Qt(e){return/^[A-Za-z]+:\/\//.test(e)}const Yt="@firebase/storage-compat",Xt="0.3.2",Jt="storage-compat";function en(e,{instanceIdentifier:t}){const n=e.getProvider("app-compat").getImmediate(),i=e.getProvider("storage").getImmediate({identifier:t}),r=new Wt(n,i);return r}function tn(e){const t={TaskState:rt,TaskEvent:it,StringFormat:ae,Storage:Wt,Reference:Kt};e.INTERNAL.registerComponent(new o.wA(Jt,en,"PUBLIC").setServiceProps(t).setMultipleInstances(!0)),e.registerVersion(Yt,Xt)}tn(i.Z)}}]);
//# sourceMappingURL=chunk-vendors.0d526c69.js.map