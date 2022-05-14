var Fe=Object.defineProperty,Oe=Object.defineProperties;var Ve=Object.getOwnPropertyDescriptors;var ee=Object.getOwnPropertySymbols;var Me=Object.prototype.hasOwnProperty,De=Object.prototype.propertyIsEnumerable;var te=(e,t,n)=>t in e?Fe(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,y=(e,t)=>{for(var n in t||(t={}))Me.call(t,n)&&te(e,n,t[n]);if(ee)for(var n of ee(t))De.call(t,n)&&te(e,n,t[n]);return e},$=(e,t)=>Oe(e,Ve(t));import{_ as je,T as He,P as ne,g as Ke,e as Ze}from"./examples.16142f7f.js";import{P as qe}from"./ParticleStore.d22eb63b.js";import{g as Re,d as Ue,r as P,u as g,w as We,e as Ge,f as C,b as v,c as h,h as _,i as O,j as oe,k as Je,l as D,m as Qe,n as Ye,p as w,q as we,s as Xe,t as et,v as tt,x as nt,y as S,z as F,T as he,A as Z,B as q,C as X,D as $e,E as ot,F as st,o as be,G as se,H as N,I as x,J as lt,K as k,L as le,M as re,N as rt,O as it,P as R,Q as ie}from"./index.ca25bdc0.js";function at(e){for(var t=-1,n=e==null?0:e.length,o={};++t<n;){var s=e[t];o[s[0]]=s[1]}return o}function Ce(e){return Re()?(Ue(e),!0):!1}const E=typeof window!="undefined",ct=e=>typeof e=="number",ut=e=>typeof e=="string",j=()=>{};function dt(e,t,n={}){const{immediate:o=!0}=n,s=P(!1);let l=null;function d(){l&&(clearTimeout(l),l=null)}function f(){s.value=!1,d()}function a(...c){d(),s.value=!0,l=setTimeout(()=>{s.value=!1,l=null,e(...c)},g(t))}return o&&(s.value=!0,E&&a()),Ce(f),{isPending:s,start:a,stop:f}}function ft(e){var t;const n=g(e);return(t=n==null?void 0:n.$el)!=null?t:n}const pt=E?window:void 0;function mt(...e){let t,n,o,s;if(ut(e[0])?([n,o,s]=e,t=pt):[t,n,o,s]=e,!t)return j;let l=j;const d=We(()=>ft(t),a=>{l(),a&&(a.addEventListener(n,o,s),l=()=>{a.removeEventListener(n,o,s),l=j})},{immediate:!0,flush:"post"}),f=()=>{d(),l()};return Ce(f),f}const U=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{},W="__vueuse_ssr_handlers__";U[W]=U[W]||{};U[W];var ae,ce;E&&(window==null?void 0:window.navigator)&&((ae=window==null?void 0:window.navigator)==null?void 0:ae.platform)&&/iP(ad|hone|od)/.test((ce=window==null?void 0:window.navigator)==null?void 0:ce.platform);const vt=e=>e===void 0,ue=e=>typeof Element=="undefined"?!1:e instanceof Element,xe=(e="")=>e.split(" ").filter(t=>!!t.trim()),de=(e,t)=>{!e||!t.trim()||e.classList.add(...xe(t))},V=(e,t)=>{!e||!t.trim()||e.classList.remove(...xe(t))},T=(e,t)=>{var n;if(!E||!e||!t)return"";Ge(t);try{const o=e.style[t];if(o)return o;const s=(n=document.defaultView)==null?void 0:n.getComputedStyle(e,"");return s?s[t]:""}catch{return e.style[t]}};var A=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const gt=C({name:"CircleCloseFilled"}),_t={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},yt=_("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 393.664L407.936 353.6a38.4 38.4 0 1 0-54.336 54.336L457.664 512 353.6 616.064a38.4 38.4 0 1 0 54.336 54.336L512 566.336 616.064 670.4a38.4 38.4 0 1 0 54.336-54.336L566.336 512 670.4 407.936a38.4 38.4 0 1 0-54.336-54.336L512 457.664z"},null,-1),wt=[yt];function ht(e,t,n,o,s,l){return v(),h("svg",_t,wt)}var Le=A(gt,[["render",ht]]);const $t=C({name:"Close"}),bt={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Ct=_("path",{fill:"currentColor",d:"M764.288 214.592 512 466.88 259.712 214.592a31.936 31.936 0 0 0-45.12 45.12L466.752 512 214.528 764.224a31.936 31.936 0 1 0 45.12 45.184L512 557.184l252.288 252.288a31.936 31.936 0 0 0 45.12-45.12L557.12 512.064l252.288-252.352a31.936 31.936 0 1 0-45.12-45.184z"},null,-1),xt=[Ct];function Lt(e,t,n,o,s,l){return v(),h("svg",bt,xt)}var Pt=A($t,[["render",Lt]]);const Et=C({name:"InfoFilled"}),St={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Tt=_("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896.064A448 448 0 0 1 512 64zm67.2 275.072c33.28 0 60.288-23.104 60.288-57.344s-27.072-57.344-60.288-57.344c-33.28 0-60.16 23.104-60.16 57.344s26.88 57.344 60.16 57.344zM590.912 699.2c0-6.848 2.368-24.64 1.024-34.752l-52.608 60.544c-10.88 11.456-24.512 19.392-30.912 17.28a12.992 12.992 0 0 1-8.256-14.72l87.68-276.992c7.168-35.136-12.544-67.2-54.336-71.296-44.096 0-108.992 44.736-148.48 101.504 0 6.784-1.28 23.68.064 33.792l52.544-60.608c10.88-11.328 23.552-19.328 29.952-17.152a12.8 12.8 0 0 1 7.808 16.128L388.48 728.576c-10.048 32.256 8.96 63.872 55.04 71.04 67.84 0 107.904-43.648 147.456-100.416z"},null,-1),It=[Tt];function zt(e,t,n,o,s,l){return v(),h("svg",St,It)}var Pe=A(Et,[["render",zt]]);const At=C({name:"SuccessFilled"}),Nt={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},kt=_("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm-55.808 536.384-99.52-99.584a38.4 38.4 0 1 0-54.336 54.336l126.72 126.72a38.272 38.272 0 0 0 54.336 0l262.4-262.464a38.4 38.4 0 1 0-54.272-54.336L456.192 600.384z"},null,-1),Bt=[kt];function Ft(e,t,n,o,s,l){return v(),h("svg",Nt,Bt)}var Ee=A(At,[["render",Ft]]);const Ot=C({name:"WarningFilled"}),Vt={viewBox:"0 0 1024 1024",xmlns:"http://www.w3.org/2000/svg"},Mt=_("path",{fill:"currentColor",d:"M512 64a448 448 0 1 1 0 896 448 448 0 0 1 0-896zm0 192a58.432 58.432 0 0 0-58.24 63.744l23.36 256.384a35.072 35.072 0 0 0 69.76 0l23.296-256.384A58.432 58.432 0 0 0 512 256zm0 512a51.2 51.2 0 1 0 0-102.4 51.2 51.2 0 0 0 0 102.4z"},null,-1),Dt=[Mt];function jt(e,t,n,o,s,l){return v(),h("svg",Vt,Dt)}var Se=A(Ot,[["render",jt]]);const G=Symbol(),fe="__elPropsReservedKey";function Ht(e,t){if(!O(e)||!!e[fe])return e;const{values:n,required:o,default:s,type:l,validator:d}=e,f=n||d?c=>{let u=!1,r=[];if(n&&(r=Array.from(n),oe(e,"default")&&r.push(s),u||(u=r.includes(c))),d&&(u||(u=d(c))),!u&&r.length>0){const i=[...new Set(r)].map(p=>JSON.stringify(p)).join(", ");Je(`Invalid prop: validation failed${t?` for prop "${t}"`:""}. Expected one of [${i}], got value ${JSON.stringify(c)}.`)}return u}:void 0,a={type:O(l)&&Object.getOwnPropertySymbols(l).includes(G)?l[G]:l,required:!!o,validator:f,[fe]:!0};return oe(e,"default")&&(a.default=s),a}const Te=e=>at(Object.entries(e).map(([t,n])=>[t,Ht(n,t)])),z=e=>({[G]:e}),Kt={Close:Pt,SuccessFilled:Ee,InfoFilled:Pe,WarningFilled:Se,CircleCloseFilled:Le},pe={success:Ee,warning:Se,error:Le,info:Pe},Zt=(e,t)=>{if(e.install=n=>{for(const o of[e,...Object.values(t!=null?t:{})])n.component(o.name,o)},t)for(const[n,o]of Object.entries(t))e[n]=o;return e},qt=(e,t)=>(e.install=n=>{e._context=n._context,n.config.globalProperties[t]=e},e);function Rt(e,t="px"){if(!e)return"";if(D(e))return e;if(ct(e))return`${e}${t}`}const H={tab:"Tab",enter:"Enter",space:"Space",left:"ArrowLeft",up:"ArrowUp",right:"ArrowRight",down:"ArrowDown",esc:"Escape",delete:"Delete",backspace:"Backspace",numpadEnter:"NumpadEnter",pageUp:"PageUp",pageDown:"PageDown",home:"Home",end:"End"},Ut=Symbol(),me=P();function Ie(e,t=void 0){const n=Qe()?Ye(Ut,me):me;return e?w(()=>{var o,s;return(s=(o=n.value)==null?void 0:o[e])!=null?s:t}):n}const Wt="el",Gt="is-",b=(e,t,n,o,s)=>{let l=`${e}-${t}`;return n&&(l+=`-${n}`),o&&(l+=`__${o}`),s&&(l+=`--${s}`),l},ze=e=>{const t=Ie("namespace"),n=w(()=>t.value||Wt);return{namespace:n,b:(r="")=>b(g(n),e,r,"",""),e:r=>r?b(g(n),e,"",r,""):"",m:r=>r?b(g(n),e,"","",r):"",be:(r,i)=>r&&i?b(g(n),e,r,i,""):"",em:(r,i)=>r&&i?b(g(n),e,"",r,i):"",bm:(r,i)=>r&&i?b(g(n),e,r,"",i):"",bem:(r,i,p)=>r&&i&&p?b(g(n),e,r,i,p):"",is:(r,...i)=>{const p=i.length>=1?i[0]:!0;return r&&p?`${Gt}${r}`:""}}},ve=P(0),Ae=()=>{const e=Ie("zIndex",2e3),t=w(()=>e.value+ve.value);return{initialZIndex:e,currentZIndex:t,nextZIndex:()=>(ve.value++,t.value)}};var Ne=(e,t)=>{const n=e.__vccOpts||e;for(const[o,s]of t)n[o]=s;return n};const Jt=Te({size:{type:z([Number,String])},color:{type:String}}),Qt={name:"ElIcon",inheritAttrs:!1},Yt=C($(y({},Qt),{props:Jt,setup(e){const t=e,n=ze("icon"),o=w(()=>!t.size&&!t.color?{}:{fontSize:vt(t.size)?void 0:Rt(t.size),"--color":t.color});return(s,l)=>(v(),h("i",Xe({class:g(n).b(),style:g(o)},s.$attrs),[we(s.$slots,"default")],16))}}));var Xt=Ne(Yt,[["__file","/home/runner/work/element-plus/element-plus/packages/components/icon/src/icon.vue"]]);const en=Zt(Xt);function tn(e){let t;const n=P(!1),o=tt($(y({},e),{originalPosition:"",originalOverflow:"",visible:!1}));function s(i){o.text=i}function l(){const i=o.parent;if(!i.vLoadingAddClassList){let p=i.getAttribute("loading-number");p=Number.parseInt(p)-1,p?i.setAttribute("loading-number",p.toString()):(V(i,"el-loading-parent--relative"),i.removeAttribute("loading-number")),V(i,"el-loading-parent--hidden")}d(),u.unmount()}function d(){var i,p;(p=(i=r.$el)==null?void 0:i.parentNode)==null||p.removeChild(r.$el)}function f(){var i;if(e.beforeClose&&!e.beforeClose())return;const p=o.parent;p.vLoadingAddClassList=void 0,n.value=!0,clearTimeout(t),t=window.setTimeout(()=>{n.value&&(n.value=!1,l())},400),o.visible=!1,(i=e.closed)==null||i.call(e)}function a(){!n.value||(n.value=!1,l())}const u=nt({name:"ElLoading",setup(){return()=>{const i=o.spinner||o.svg,p=S("svg",y({class:"circular",viewBox:o.svgViewBox?o.svgViewBox:"25 25 50 50"},i?{innerHTML:i}:{}),[S("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none"})]),Be=o.text?S("p",{class:"el-loading-text"},[o.text]):void 0;return S(he,{name:"el-loading-fade",onAfterLeave:a},{default:F(()=>[Z(X("div",{style:{backgroundColor:o.background||""},class:["el-loading-mask",o.customClass,o.fullscreen?"is-fullscreen":""]},[S("div",{class:"el-loading-spinner"},[p,Be])]),[[q,o.visible]])])})}}}),r=u.mount(document.createElement("div"));return $(y({},et(o)),{setText:s,remvoeElLoadingChild:d,close:f,handleAfterLeave:a,vm:r,get $el(){return r.$el}})}let B;const J=function(e={}){if(!E)return;const t=nn(e);if(t.fullscreen&&B)return B;const n=tn($(y({},t),{closed:()=>{var s;(s=t.closed)==null||s.call(t),t.fullscreen&&(B=void 0)}}));on(t,t.parent,n),ge(t,t.parent,n),t.parent.vLoadingAddClassList=()=>ge(t,t.parent,n);let o=t.parent.getAttribute("loading-number");return o?o=`${Number.parseInt(o)+1}`:o="1",t.parent.setAttribute("loading-number",o),t.parent.appendChild(n.$el),$e(()=>n.visible.value=t.visible),t.fullscreen&&(B=n),n},nn=e=>{var t,n,o,s;let l;return D(e.target)?l=(t=document.querySelector(e.target))!=null?t:document.body:l=e.target||document.body,{parent:l===document.body||e.body?document.body:l,background:e.background||"",svg:e.svg||"",svgViewBox:e.svgViewBox||"",spinner:e.spinner||!1,text:e.text||"",fullscreen:l===document.body&&((n=e.fullscreen)!=null?n:!0),lock:(o=e.lock)!=null?o:!1,customClass:e.customClass||"",visible:(s=e.visible)!=null?s:!0,target:l}},on=async(e,t,n)=>{const{nextZIndex:o}=Ae(),s={};if(e.fullscreen)n.originalPosition.value=T(document.body,"position"),n.originalOverflow.value=T(document.body,"overflow"),s.zIndex=o();else if(e.parent===document.body){n.originalPosition.value=T(document.body,"position"),await $e();for(const l of["top","left"]){const d=l==="top"?"scrollTop":"scrollLeft";s[l]=`${e.target.getBoundingClientRect()[l]+document.body[d]+document.documentElement[d]-Number.parseInt(T(document.body,`margin-${l}`),10)}px`}for(const l of["height","width"])s[l]=`${e.target.getBoundingClientRect()[l]}px`}else n.originalPosition.value=T(t,"position");for(const[l,d]of Object.entries(s))n.$el.style[l]=d},ge=(e,t,n)=>{n.originalPosition.value!=="absolute"&&n.originalPosition.value!=="fixed"?de(t,"el-loading-parent--relative"):V(t,"el-loading-parent--relative"),e.fullscreen&&e.lock?de(t,"el-loading-parent--hidden"):V(t,"el-loading-parent--hidden")},Q=Symbol("ElLoading"),_e=(e,t)=>{var n,o,s,l;const d=t.instance,f=i=>O(t.value)?t.value[i]:void 0,a=i=>{const p=D(i)&&(d==null?void 0:d[i])||i;return p&&P(p)},c=i=>a(f(i)||e.getAttribute(`element-loading-${ot(i)}`)),u=(n=f("fullscreen"))!=null?n:t.modifiers.fullscreen,r={text:c("text"),svg:c("svg"),svgViewBox:c("svgViewBox"),spinner:c("spinner"),background:c("background"),customClass:c("customClass"),fullscreen:u,target:(o=f("target"))!=null?o:u?void 0:e,body:(s=f("body"))!=null?s:t.modifiers.body,lock:(l=f("lock"))!=null?l:t.modifiers.lock};e[Q]={options:r,instance:J(r)}},sn=(e,t)=>{for(const n of Object.keys(t))st(t[n])&&(t[n].value=e[n])},ye={mounted(e,t){t.value&&_e(e,t)},updated(e,t){const n=e[Q];t.oldValue!==t.value&&(t.value&&!t.oldValue?_e(e,t):t.value&&t.oldValue?O(t.value)&&sn(t.value,n.options):n==null||n.instance.close())},unmounted(e){var t;(t=e[Q])==null||t.instance.close()}},ln={install(e){e.directive("loading",ye),e.config.globalProperties.$loading=J},directive:ye,service:J},ke=["success","info","warning","error"],rn=Te({customClass:{type:String,default:""},dangerouslyUseHTMLString:{type:Boolean,default:!1},duration:{type:Number,default:4500},icon:{type:z([String,Object]),default:""},id:{type:String,default:""},message:{type:z([String,Object]),default:""},offset:{type:Number,default:0},onClick:{type:z(Function),default:()=>{}},onClose:{type:z(Function),required:!0},position:{type:String,values:["top-right","top-left","bottom-right","bottom-left"],default:"top-right"},showClose:{type:Boolean,default:!0},title:{type:String,default:""},type:{type:String,values:[...ke,""],default:""},zIndex:{type:Number,default:0}}),an={destroy:()=>!0},cn=C({name:"ElNotification",components:y({ElIcon:en},Kt),props:rn,emits:an,setup(e){const t=ze("notification"),n=P(!1);let o;const s=w(()=>{const p=e.type;return p&&pe[e.type]?t.m(p):""}),l=w(()=>pe[e.type]||e.icon||""),d=w(()=>e.position.endsWith("right")?"right":"left"),f=w(()=>e.position.startsWith("top")?"top":"bottom"),a=w(()=>({[f.value]:`${e.offset}px`,zIndex:e.zIndex}));function c(){e.duration>0&&({stop:o}=dt(()=>{n.value&&r()},e.duration))}function u(){o==null||o()}function r(){n.value=!1}function i({code:p}){p===H.delete||p===H.backspace?u():p===H.esc?n.value&&r():c()}return be(()=>{c(),n.value=!0}),mt(document,"keydown",i),{ns:t,horizontalClass:d,typeClass:s,iconComponent:l,positionStyle:a,visible:n,close:r,clearTimer:u,startTimer:c}}}),un=["id"],dn=["textContent"],fn={key:0},pn=["innerHTML"];function mn(e,t,n,o,s,l){const d=se("el-icon"),f=se("close");return v(),N(he,{name:e.ns.b("fade"),onBeforeLeave:e.onClose,onAfterLeave:t[3]||(t[3]=a=>e.$emit("destroy"))},{default:F(()=>[Z(_("div",{id:e.id,class:x([e.ns.b(),e.customClass,e.horizontalClass]),style:re(e.positionStyle),role:"alert",onMouseenter:t[0]||(t[0]=(...a)=>e.clearTimer&&e.clearTimer(...a)),onMouseleave:t[1]||(t[1]=(...a)=>e.startTimer&&e.startTimer(...a)),onClick:t[2]||(t[2]=(...a)=>e.onClick&&e.onClick(...a))},[e.iconComponent?(v(),N(d,{key:0,class:x([e.ns.e("icon"),e.typeClass])},{default:F(()=>[(v(),N(lt(e.iconComponent)))]),_:1},8,["class"])):k("v-if",!0),_("div",{class:x(e.ns.e("group"))},[_("h2",{class:x(e.ns.e("title")),textContent:le(e.title)},null,10,dn),Z(_("div",{class:x(e.ns.e("content")),style:re(e.title?void 0:{margin:0})},[we(e.$slots,"default",{},()=>[e.dangerouslyUseHTMLString?(v(),h(it,{key:1},[k(" Caution here, message could've been compromized, nerver use user's input as message "),k(" eslint-disable-next-line "),_("p",{innerHTML:e.message},null,8,pn)],2112)):(v(),h("p",fn,le(e.message),1))])],6),[[q,e.message]]),e.showClose?(v(),N(d,{key:0,class:x(e.ns.e("closeBtn")),onClick:rt(e.close,["stop"])},{default:F(()=>[X(f)]),_:1},8,["class","onClick"])):k("v-if",!0)],2)],46,un),[[q,e.visible]])]),_:3},8,["name","onBeforeLeave"])}var vn=Ne(cn,[["render",mn],["__file","/home/runner/work/element-plus/element-plus/packages/components/notification/src/notification.vue"]]);const M={"top-left":[],"top-right":[],"bottom-left":[],"bottom-right":[]},Y=16;let gn=1;const L=function(e={},t=null){if(!E)return{close:()=>{}};(typeof e=="string"||R(e))&&(e={message:e});const n=e.position||"top-right";let o=e.offset||0;M[n].forEach(({vm:r})=>{var i;o+=(((i=r.el)==null?void 0:i.offsetHeight)||0)+Y}),o+=Y;const{nextZIndex:s}=Ae(),l=`notification_${gn++}`,d=e.onClose,f=$(y({zIndex:s(),offset:o},e),{id:l,onClose:()=>{_n(l,n,d)}});let a=document.body;ue(e.appendTo)?a=e.appendTo:D(e.appendTo)&&(a=document.querySelector(e.appendTo)),ue(a)||(a=document.body);const c=document.createElement("div"),u=X(vn,f,R(f.message)?{default:()=>f.message}:null);return u.appContext=t!=null?t:L._context,u.props.onDestroy=()=>{ie(null,c)},ie(u,c),M[n].push({vm:u}),a.appendChild(c.firstElementChild),{close:()=>{u.component.proxy.visible=!1}}};ke.forEach(e=>{L[e]=(t={})=>((typeof t=="string"||R(t))&&(t={message:t}),L($(y({},t),{type:e})))});function _n(e,t,n){const o=M[t],s=o.findIndex(({vm:c})=>{var u;return((u=c.component)==null?void 0:u.props.id)===e});if(s===-1)return;const{vm:l}=o[s];if(!l)return;n==null||n(l);const d=l.el.offsetHeight,f=t.split("-")[0];o.splice(s,1);const a=o.length;if(!(a<1))for(let c=s;c<a;c++){const{el:u,component:r}=o[c].vm,i=Number.parseInt(u.style[f],10)-d-Y;r.props.offset=i}}function yn(){for(const e of Object.values(M))e.forEach(({vm:t})=>{t.component.proxy.visible=!1})}L.closeAll=yn;L._context=null;const wn=qt(L,"$notify");let I,m,K;const hn={setup(){be(()=>{K=ln.service({fullscreen:!0}),window.loading=K,I=new He("editor"),I.camera.position.set(20,20,0),n(),I.wireframePlane(50),e(),f(),K.close()});const e=()=>{window.addEventListener("resize",t,!1)},t=()=>{I.renderResize()},n=()=>{m=new qe,m.showPanel(),m.setParent(I.scene),m.nameFolder="\u7C92\u5B50\u52A8\u753B\u7BA1\u7406\u5668";const a=m.gui.addFolder("\u5185\u7F6E\u9ED8\u8BA4\u6848\u4F8B"),c={exams:null,examArr:[null],addParts:s};for(let u in Ze)c.examArr.push(u);a.add(c,"exams",c.examArr).name("\u5185\u7F6E\u6848\u4F8B").onChange(u=>{const r=new ne(Ke(u));console.log(u),m.addParticle(r),m.addPanelList(m.gui,r),l(`\u{1F389}\u606D\u559C\u4F60\uFF0C\u521B\u5EFA${r.name}\u6548\u679C\u6210\u529F`)}),a.add(c,"addParts").name("\u6DFB\u52A0\u7C92\u5B50")};let o=0;const s=()=>{let a=+prompt("\u8BF7\u8F93\u5165\u521B\u5EFA\u7C92\u5B50\u7684\u7C92\u5B50\u6570\uFF08\u4F8B\uFF1A100\uFF09");if(a!=null&&a!=""&&typeof a=="number"){const c=prompt("\u8BF7\u8F93\u5165\u7C92\u5B50\u52A8\u753B\u7684\u540D\u79F0\uFF08\u7559\u7A7A\u5219\u4E3A\u9ED8\u8BA4\u540D\u5B57\uFF09");let u;c!=null&&c!=""?u=c:(u=`\u7C92\u5B50\u52A8\u753B${o}`,o++);const r=new ne({pointSec:a,name:u,size:1});m.addParticle(r),m.addPanelList(m.gui,r),l(`\u{1F389}\u606D\u559C\u4F60\uFF0C\u521B\u5EFA${r.name}\u6548\u679C\u6210\u529F,\u8BF7\u5C3D\u60C5\u8C03\u8BD5\u5427`)}else l("sorry\u7C92\u5B50\u521B\u5EFA\u5931\u8D25\u4E86\uFF0C\u8BF7\u70B9\u51FB\u8F93\u5165\u7C92\u5B50\u6570\u91CF\u91CD\u65B0\u521B\u5EFA","error")},l=(a,c="success")=>{wn({title:c,message:a,type:c,position:"bottom-right"})};let d=new Date;const f=()=>{const a=new Date,c=(a-d)/1e3;m&&m.update(c),d=a,requestAnimationFrame(f)}}},$n={id:"editor"};function bn(e,t,n,o,s,l){return v(),h("div",$n)}var En=je(hn,[["render",bn],["__scopeId","data-v-82fe2112"]]);export{En as default};
