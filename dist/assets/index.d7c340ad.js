var e=Object.defineProperty,t=Object.getOwnPropertySymbols,r=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,n=(t,r,o)=>r in t?e(t,r,{enumerable:!0,configurable:!0,writable:!0,value:o}):t[r]=o;import{c as s,a,b as i,m as l,d as c,r as u,o as m,e as p,f}from"./vendor.c394a280.js";!function(){const e=document.createElement("link").relList;if(!(e&&e.supports&&e.supports("modulepreload"))){for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver((e=>{for(const r of e)if("childList"===r.type)for(const e of r.addedNodes)"LINK"===e.tagName&&"modulepreload"===e.rel&&t(e)})).observe(document,{childList:!0,subtree:!0})}function t(e){if(e.ep)return;e.ep=!0;const t=function(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),"use-credentials"===e.crossorigin?t.credentials="include":"anonymous"===e.crossorigin?t.credentials="omit":t.credentials="same-origin",t}(e);fetch(e.href,t)}}();const d=s(),h={},E=function(e,t){return t&&0!==t.length?Promise.all(t.map((e=>{if((e=`./${e}`)in h)return;h[e]=!0;const t=e.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${e}"]${r}`))return;const o=document.createElement("link");return o.rel=t?"stylesheet":"modulepreload",t||(o.as="script",o.crossOrigin=""),o.href=e,document.head.appendChild(o),t?new Promise(((e,t)=>{o.addEventListener("load",e),o.addEventListener("error",t)})):void 0}))).then((()=>e())):e()};var g={name:"首页",meta:{icon:"iconfont-xxx"},path:"/home",component:()=>E((()=>import("./home.27f68a5f.js")),["assets/home.27f68a5f.js","assets/home.92af6d2a.css","assets/vendor.c394a280.js"])};const y={"./modules/1_home.ts":Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:g})},_=[];Object.keys(y).forEach((e=>{y[e].default&&_.push(y[e].default)}));const b=[{path:"/",exact:!0,redirect:"/home"},{path:"/login",name:"登录",component:()=>E((()=>import("./login.74bae614.js")),["assets/login.74bae614.js","assets/login.20671dbc.css","assets/vendor.c394a280.js"])},{path:"/:pathMatch(.*)*",name:"NotFound",component:()=>E((()=>import("./404.836f08ce.js")),["assets/404.836f08ce.js","assets/vendor.c394a280.js"])}],v=a({history:i(),routes:_.concat(b)});let O=new l;function P(e){return O.get(e)}function N(e,t){ElementPlus.ElNotification({title:e,message:t,type:"success"})}function j(e,t){ElementPlus.ElNotification({title:e,message:t,type:"error"})}const S="USERNAME",A=c("users",{state:()=>({users:[],username:P("USERNAME")}),actions:{updateUsers(e){this.users=e},login(e,t){var r,o;r="USERNAME",o=e,O.set(r,o),this.username=e,this.users=t},logout(){var e;e="USERNAME",O.remove(e),this.username="",N("提示","退出登陆成功！"),v.replace("/login")}}}),L=()=>A(d);v.beforeEach(((e,s,a)=>{let i=P("USERNAME");"/home"==e.path?null!=i?a():v.replace("/login"):"/login"==e.path&&null!=i?a(((e,s)=>{for(var a in s||(s={}))r.call(s,a)&&n(e,a,s[a]);if(t)for(var a of t(s))o.call(s,a)&&n(e,a,s[a]);return e})({},s)):a()}));var M=(e,t)=>{const r=e.__vccOpts||e;for(const[o,n]of t)r[o]=n;return r};f(M({},[["render",function(e,t){const r=u("router-view");return m(),p(r)}]])).use(d).use(v).use(ElementPlus).mount("#app");export{S as U,M as _,j as e,P as g,v as r,N as s,L as u};