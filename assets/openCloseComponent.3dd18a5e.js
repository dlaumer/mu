import{ct as Wt,_ as Ht,cp as It,cu as _t}from"./index.860f6be5.js";import{d as $t}from"./debounce.aad9914a.js";function E(t){return t.split("-")[1]}function st(t){return t==="y"?"height":"width"}function k(t){return t.split("-")[0]}function X(t){return["top","bottom"].includes(k(t))?"x":"y"}function ut(t,e,o){let{reference:n,floating:i}=t;const s=n.x+n.width/2-i.width/2,r=n.y+n.height/2-i.height/2,c=X(e),l=st(c),f=n[l]/2-i[l]/2,m=k(e),a=c==="x";let u;switch(m){case"top":u={x:s,y:n.y-i.height};break;case"bottom":u={x:s,y:n.y+n.height};break;case"right":u={x:n.x+n.width,y:r};break;case"left":u={x:n.x-i.width,y:r};break;default:u={x:n.x,y:n.y}}switch(E(e)){case"start":u[c]-=f*(o&&a?-1:1);break;case"end":u[c]+=f*(o&&a?-1:1);break}return u}const Ut=async(t,e,o)=>{const{placement:n="bottom",strategy:i="absolute",middleware:s=[],platform:r}=o,c=s.filter(Boolean),l=await(r.isRTL==null?void 0:r.isRTL(e));let f=await r.getElementRects({reference:t,floating:e,strategy:i}),{x:m,y:a}=ut(f,n,l),u=n,g={},d=0;for(let w=0;w<c.length;w++){const{name:v,fn:p}=c[w],{x:h,y:x,data:b,reset:y}=await p({x:m,y:a,initialPlacement:n,placement:u,strategy:i,middlewareData:g,rects:f,platform:r,elements:{reference:t,floating:e}});if(m=h!=null?h:m,a=x!=null?x:a,g={...g,[v]:{...g[v],...b}},y&&d<=50){d++,typeof y=="object"&&(y.placement&&(u=y.placement),y.rects&&(f=y.rects===!0?await r.getElementRects({reference:t,floating:e,strategy:i}):y.rects),{x:m,y:a}=ut(f,u,l)),w=-1;continue}}return{x:m,y:a,placement:u,strategy:i,middlewareData:g}};function jt(t){return{top:0,right:0,bottom:0,left:0,...t}}function Ot(t){return typeof t!="number"?jt(t):{top:t,right:t,bottom:t,left:t}}function et(t){return{...t,top:t.y,left:t.x,right:t.x+t.width,bottom:t.y+t.height}}async function j(t,e){var o;e===void 0&&(e={});const{x:n,y:i,platform:s,rects:r,elements:c,strategy:l}=t,{boundary:f="clippingAncestors",rootBoundary:m="viewport",elementContext:a="floating",altBoundary:u=!1,padding:g=0}=e,d=Ot(g),v=c[u?a==="floating"?"reference":"floating":a],p=et(await s.getClippingRect({element:(o=await(s.isElement==null?void 0:s.isElement(v)))==null||o?v:v.contextElement||await(s.getDocumentElement==null?void 0:s.getDocumentElement(c.floating)),boundary:f,rootBoundary:m,strategy:l})),h=a==="floating"?{...r.floating,x:n,y:i}:r.reference,x=await(s.getOffsetParent==null?void 0:s.getOffsetParent(c.floating)),b=await(s.isElement==null?void 0:s.isElement(x))?await(s.getScale==null?void 0:s.getScale(x))||{x:1,y:1}:{x:1,y:1},y=et(s.convertOffsetParentRelativeRectToViewportRelativeRect?await s.convertOffsetParentRelativeRectToViewportRelativeRect({rect:h,offsetParent:x,strategy:l}):h);return{top:(p.top-y.top+d.top)/b.y,bottom:(y.bottom-p.bottom+d.bottom)/b.y,left:(p.left-y.left+d.left)/b.x,right:(y.right-p.right+d.right)/b.x}}const zt=Math.min,Xt=Math.max;function nt(t,e,o){return Xt(t,zt(e,o))}const Yt=t=>({name:"arrow",options:t,async fn(e){const{element:o,padding:n=0}=t||{},{x:i,y:s,placement:r,rects:c,platform:l}=e;if(o==null)return{};const f=Ot(n),m={x:i,y:s},a=X(r),u=st(a),g=await l.getDimensions(o),d=a==="y"?"top":"left",w=a==="y"?"bottom":"right",v=c.reference[u]+c.reference[a]-m[a]-c.floating[u],p=m[a]-c.reference[a],h=await(l.getOffsetParent==null?void 0:l.getOffsetParent(o));let x=h?a==="y"?h.clientHeight||0:h.clientWidth||0:0;x===0&&(x=c.floating[u]);const b=v/2-p/2,y=f[d],O=x-g[u]-f[w],C=x/2-g[u]/2+b,F=nt(y,C,O),M=E(r)!=null&&C!=F&&c.reference[u]/2-(C<y?f[d]:f[w])-g[u]/2<0?C<y?y-C:O-C:0;return{[a]:m[a]-M,data:{[a]:F,centerOffset:C-F}}}}),Pt=["top","right","bottom","left"],dt=Pt.reduce((t,e)=>t.concat(e,e+"-start",e+"-end"),[]),Gt={left:"right",right:"left",bottom:"top",top:"bottom"};function K(t){return t.replace(/left|right|bottom|top/g,e=>Gt[e])}function Rt(t,e,o){o===void 0&&(o=!1);const n=E(t),i=X(t),s=st(i);let r=i==="x"?n===(o?"end":"start")?"right":"left":n==="start"?"bottom":"top";return e.reference[s]>e.floating[s]&&(r=K(r)),{main:r,cross:K(r)}}const qt={start:"end",end:"start"};function J(t){return t.replace(/start|end/g,e=>qt[e])}function Kt(t,e,o){return(t?[...o.filter(i=>E(i)===t),...o.filter(i=>E(i)!==t)]:o.filter(i=>k(i)===i)).filter(i=>t?E(i)===t||(e?J(i)!==i:!1):!0)}const Jt=function(t){return t===void 0&&(t={}),{name:"autoPlacement",options:t,async fn(e){var o,n,i;const{rects:s,middlewareData:r,placement:c,platform:l,elements:f}=e,{crossAxis:m=!1,alignment:a,allowedPlacements:u=dt,autoAlignment:g=!0,...d}=t,w=a!==void 0||u===dt?Kt(a||null,g,u):u,v=await j(e,d),p=((o=r.autoPlacement)==null?void 0:o.index)||0,h=w[p];if(h==null)return{};const{main:x,cross:b}=Rt(h,s,await(l.isRTL==null?void 0:l.isRTL(f.floating)));if(c!==h)return{reset:{placement:w[0]}};const y=[v[k(h)],v[x],v[b]],O=[...((n=r.autoPlacement)==null?void 0:n.overflows)||[],{placement:h,overflows:y}],C=w[p+1];if(C)return{data:{index:p+1,overflows:O},reset:{placement:C}};const F=O.map(A=>{const T=E(A.placement);return[A.placement,T&&m?A.overflows.slice(0,2).reduce((V,B)=>V+B,0):A.overflows[0],A.overflows]}).sort((A,T)=>A[1]-T[1]),M=((i=F.filter(A=>A[2].slice(0,E(A[0])?2:3).every(T=>T<=0))[0])==null?void 0:i[0])||F[0][0];return M!==c?{data:{index:p+1,overflows:O},reset:{placement:M}}:{}}}};function Qt(t){const e=K(t);return[J(t),e,J(e)]}function Zt(t,e,o){const n=["left","right"],i=["right","left"],s=["top","bottom"],r=["bottom","top"];switch(t){case"top":case"bottom":return o?e?i:n:e?n:i;case"left":case"right":return e?s:r;default:return[]}}function te(t,e,o,n){const i=E(t);let s=Zt(k(t),o==="start",n);return i&&(s=s.map(r=>r+"-"+i),e&&(s=s.concat(s.map(J)))),s}const mt=function(t){return t===void 0&&(t={}),{name:"flip",options:t,async fn(e){var o;const{placement:n,middlewareData:i,rects:s,initialPlacement:r,platform:c,elements:l}=e,{mainAxis:f=!0,crossAxis:m=!0,fallbackPlacements:a,fallbackStrategy:u="bestFit",fallbackAxisSideDirection:g="none",flipAlignment:d=!0,...w}=t,v=k(n),p=k(r)===r,h=await(c.isRTL==null?void 0:c.isRTL(l.floating)),x=a||(p||!d?[K(r)]:Qt(r));!a&&g!=="none"&&x.push(...te(r,d,g,h));const b=[r,...x],y=await j(e,w),O=[];let C=((o=i.flip)==null?void 0:o.overflows)||[];if(f&&O.push(y[v]),m){const{main:A,cross:T}=Rt(n,s,h);O.push(y[A],y[T])}if(C=[...C,{placement:n,overflows:O}],!O.every(A=>A<=0)){var F,Y;const A=(((F=i.flip)==null?void 0:F.index)||0)+1,T=b[A];if(T)return{data:{index:A,overflows:C},reset:{placement:T}};let V=(Y=C.filter(B=>B.overflows[0]<=0).sort((B,H)=>B.overflows[1]-H.overflows[1])[0])==null?void 0:Y.placement;if(!V)switch(u){case"bestFit":{var M;const B=(M=C.map(H=>[H.placement,H.overflows.filter(_=>_>0).reduce((_,Vt)=>_+Vt,0)]).sort((H,_)=>H[1]-_[1])[0])==null?void 0:M[0];B&&(V=B);break}case"initialPlacement":V=r;break}if(n!==V)return{reset:{placement:V}}}return{}}}};function gt(t,e){return{top:t.top-e.height,right:t.right-e.width,bottom:t.bottom-e.height,left:t.left-e.width}}function pt(t){return Pt.some(e=>t[e]>=0)}const ee=function(t){return t===void 0&&(t={}),{name:"hide",options:t,async fn(e){const{strategy:o="referenceHidden",...n}=t,{rects:i}=e;switch(o){case"referenceHidden":{const s=await j(e,{...n,elementContext:"reference"}),r=gt(s,i.reference);return{data:{referenceHiddenOffsets:r,referenceHidden:pt(r)}}}case"escaped":{const s=await j(e,{...n,altBoundary:!0}),r=gt(s,i.floating);return{data:{escapedOffsets:r,escaped:pt(r)}}}default:return{}}}}};async function ne(t,e){const{placement:o,platform:n,elements:i}=t,s=await(n.isRTL==null?void 0:n.isRTL(i.floating)),r=k(o),c=E(o),l=X(o)==="x",f=["left","top"].includes(r)?-1:1,m=s&&l?-1:1,a=typeof e=="function"?e(t):e;let{mainAxis:u,crossAxis:g,alignmentAxis:d}=typeof a=="number"?{mainAxis:a,crossAxis:0,alignmentAxis:null}:{mainAxis:0,crossAxis:0,alignmentAxis:null,...a};return c&&typeof d=="number"&&(g=c==="end"?d*-1:d),l?{x:g*m,y:u*f}:{x:u*f,y:g*m}}const oe=function(t){return t===void 0&&(t=0),{name:"offset",options:t,async fn(e){const{x:o,y:n}=e,i=await ne(e,t);return{x:o+i.x,y:n+i.y,data:i}}}};function ie(t){return t==="x"?"y":"x"}const se=function(t){return t===void 0&&(t={}),{name:"shift",options:t,async fn(e){const{x:o,y:n,placement:i}=e,{mainAxis:s=!0,crossAxis:r=!1,limiter:c={fn:v=>{let{x:p,y:h}=v;return{x:p,y:h}}},...l}=t,f={x:o,y:n},m=await j(e,l),a=X(k(i)),u=ie(a);let g=f[a],d=f[u];if(s){const v=a==="y"?"top":"left",p=a==="y"?"bottom":"right",h=g+m[v],x=g-m[p];g=nt(h,g,x)}if(r){const v=u==="y"?"top":"left",p=u==="y"?"bottom":"right",h=d+m[v],x=d-m[p];d=nt(h,d,x)}const w=c.fn({...e,[a]:g,[u]:d});return{...w,data:{x:w.x-o,y:w.y-n}}}}};function P(t){var e;return((e=t.ownerDocument)==null?void 0:e.defaultView)||window}function L(t){return P(t).getComputedStyle(t)}const ht=Math.min,$=Math.max,Q=Math.round;function Tt(t){const e=L(t);let o=parseFloat(e.width),n=parseFloat(e.height);const i=t.offsetWidth,s=t.offsetHeight,r=Q(o)!==i||Q(n)!==s;return r&&(o=i,n=s),{width:o,height:n,fallback:r}}function D(t){return Lt(t)?(t.nodeName||"").toLowerCase():""}let G;function Et(){if(G)return G;const t=navigator.userAgentData;return t&&Array.isArray(t.brands)?(G=t.brands.map(e=>e.brand+"/"+e.version).join(" "),G):navigator.userAgent}function S(t){return t instanceof P(t).HTMLElement}function R(t){return t instanceof P(t).Element}function Lt(t){return t instanceof P(t).Node}function wt(t){if(typeof ShadowRoot=="undefined")return!1;const e=P(t).ShadowRoot;return t instanceof e||t instanceof ShadowRoot}function Z(t){const{overflow:e,overflowX:o,overflowY:n,display:i}=L(t);return/auto|scroll|overlay|hidden|clip/.test(e+n+o)&&!["inline","contents"].includes(i)}function re(t){return["table","td","th"].includes(D(t))}function rt(t){const e=/firefox/i.test(Et()),o=L(t),n=o.backdropFilter||o.WebkitBackdropFilter;return o.transform!=="none"||o.perspective!=="none"||(n?n!=="none":!1)||e&&o.willChange==="filter"||e&&(o.filter?o.filter!=="none":!1)||["transform","perspective"].some(i=>o.willChange.includes(i))||["paint","layout","strict","content"].some(i=>{const s=o.contain;return s!=null?s.includes(i):!1})}function ct(){return/^((?!chrome|android).)*safari/i.test(Et())}function lt(t){return["html","body","#document"].includes(D(t))}function St(t){return R(t)?t:t.contextElement}const Ft={x:1,y:1};function I(t){const e=St(t);if(!S(e))return Ft;const o=e.getBoundingClientRect(),{width:n,height:i,fallback:s}=Tt(e);let r=(s?Q(o.width):o.width)/n,c=(s?Q(o.height):o.height)/i;return(!r||!Number.isFinite(r))&&(r=1),(!c||!Number.isFinite(c))&&(c=1),{x:r,y:c}}function W(t,e,o,n){var i,s;e===void 0&&(e=!1),o===void 0&&(o=!1);const r=t.getBoundingClientRect(),c=St(t);let l=Ft;e&&(n?R(n)&&(l=I(n)):l=I(t));const f=c?P(c):window,m=ct()&&o;let a=(r.left+(m&&((i=f.visualViewport)==null?void 0:i.offsetLeft)||0))/l.x,u=(r.top+(m&&((s=f.visualViewport)==null?void 0:s.offsetTop)||0))/l.y,g=r.width/l.x,d=r.height/l.y;if(c){const w=P(c),v=n&&R(n)?P(n):n;let p=w.frameElement;for(;p&&n&&v!==w;){const h=I(p),x=p.getBoundingClientRect(),b=getComputedStyle(p);x.x+=(p.clientLeft+parseFloat(b.paddingLeft))*h.x,x.y+=(p.clientTop+parseFloat(b.paddingTop))*h.y,a*=h.x,u*=h.y,g*=h.x,d*=h.y,a+=x.x,u+=x.y,p=P(p).frameElement}}return{width:g,height:d,top:u,right:a+g,bottom:u+d,left:a,x:a,y:u}}function N(t){return((Lt(t)?t.ownerDocument:t.document)||window.document).documentElement}function tt(t){return R(t)?{scrollLeft:t.scrollLeft,scrollTop:t.scrollTop}:{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function ce(t){let{rect:e,offsetParent:o,strategy:n}=t;const i=S(o),s=N(o);if(o===s)return e;let r={scrollLeft:0,scrollTop:0},c={x:1,y:1};const l={x:0,y:0};if((i||!i&&n!=="fixed")&&((D(o)!=="body"||Z(s))&&(r=tt(o)),S(o))){const f=W(o);c=I(o),l.x=f.x+o.clientLeft,l.y=f.y+o.clientTop}return{width:e.width*c.x,height:e.height*c.y,x:e.x*c.x-r.scrollLeft*c.x+l.x,y:e.y*c.y-r.scrollTop*c.y+l.y}}function kt(t){return W(N(t)).left+tt(t).scrollLeft}function le(t){const e=N(t),o=tt(t),n=t.ownerDocument.body,i=$(e.scrollWidth,e.clientWidth,n.scrollWidth,n.clientWidth),s=$(e.scrollHeight,e.clientHeight,n.scrollHeight,n.clientHeight);let r=-o.scrollLeft+kt(t);const c=-o.scrollTop;return L(n).direction==="rtl"&&(r+=$(e.clientWidth,n.clientWidth)-i),{width:i,height:s,x:r,y:c}}function z(t){if(D(t)==="html")return t;const e=t.assignedSlot||t.parentNode||wt(t)&&t.host||N(t);return wt(e)?e.host:e}function Bt(t){const e=z(t);return lt(e)?e.ownerDocument.body:S(e)&&Z(e)?e:Bt(e)}function U(t,e){var o;e===void 0&&(e=[]);const n=Bt(t),i=n===((o=t.ownerDocument)==null?void 0:o.body),s=P(n);return i?e.concat(s,s.visualViewport||[],Z(n)?n:[]):e.concat(n,U(n))}function ae(t,e){const o=P(t),n=N(t),i=o.visualViewport;let s=n.clientWidth,r=n.clientHeight,c=0,l=0;if(i){s=i.width,r=i.height;const f=ct();(!f||f&&e==="fixed")&&(c=i.offsetLeft,l=i.offsetTop)}return{width:s,height:r,x:c,y:l}}function fe(t,e){const o=W(t,!0,e==="fixed"),n=o.top+t.clientTop,i=o.left+t.clientLeft,s=S(t)?I(t):{x:1,y:1},r=t.clientWidth*s.x,c=t.clientHeight*s.y,l=i*s.x,f=n*s.y;return{width:r,height:c,x:l,y:f}}function xt(t,e,o){let n;if(e==="viewport")n=ae(t,o);else if(e==="document")n=le(N(t));else if(R(e))n=fe(e,o);else{const r={...e};if(ct()){var i,s;const c=P(t);r.x-=((i=c.visualViewport)==null?void 0:i.offsetLeft)||0,r.y-=((s=c.visualViewport)==null?void 0:s.offsetTop)||0}n=r}return et(n)}function ue(t,e){const o=e.get(t);if(o)return o;let n=U(t).filter(c=>R(c)&&D(c)!=="body"),i=null;const s=L(t).position==="fixed";let r=s?z(t):t;for(;R(r)&&!lt(r);){const c=L(r),l=rt(r);c.position==="fixed"?i=null:(s?!l&&!i:!l&&c.position==="static"&&!!i&&["absolute","fixed"].includes(i.position))?n=n.filter(a=>a!==r):i=c,r=z(r)}return e.set(t,n),n}function de(t){let{element:e,boundary:o,rootBoundary:n,strategy:i}=t;const r=[...o==="clippingAncestors"?ue(e,this._c):[].concat(o),n],c=r[0],l=r.reduce((f,m)=>{const a=xt(e,m,i);return f.top=$(a.top,f.top),f.right=ht(a.right,f.right),f.bottom=ht(a.bottom,f.bottom),f.left=$(a.left,f.left),f},xt(e,c,i));return{width:l.right-l.left,height:l.bottom-l.top,x:l.left,y:l.top}}function me(t){return S(t)?Tt(t):t.getBoundingClientRect()}function yt(t,e){return!S(t)||L(t).position==="fixed"?null:e?e(t):t.offsetParent}function ge(t){let e=z(t);for(;S(e)&&!lt(e);){if(rt(e))return e;e=z(e)}return null}function vt(t,e){const o=P(t);let n=yt(t,e);for(;n&&re(n)&&L(n).position==="static";)n=yt(n,e);return n&&(D(n)==="html"||D(n)==="body"&&L(n).position==="static"&&!rt(n))?o:n||ge(t)||o}function pe(t,e,o){const n=S(e),i=N(e),s=W(t,!0,o==="fixed",e);let r={scrollLeft:0,scrollTop:0};const c={x:0,y:0};if(n||!n&&o!=="fixed")if((D(e)!=="body"||Z(i))&&(r=tt(e)),S(e)){const l=W(e,!0);c.x=l.x+e.clientLeft,c.y=l.y+e.clientTop}else i&&(c.x=kt(i));return{x:s.left+r.scrollLeft-c.x,y:s.top+r.scrollTop-c.y,width:s.width,height:s.height}}const ot={getClippingRect:de,convertOffsetParentRelativeRectToViewportRelativeRect:ce,isElement:R,getDimensions:me,getOffsetParent:vt,getDocumentElement:N,getScale:I,async getElementRects(t){let{reference:e,floating:o,strategy:n}=t;const i=this.getOffsetParent||vt,s=this.getDimensions;return{reference:pe(e,await i(o),n),floating:{x:0,y:0,...await s(o)}}},getClientRects:t=>Array.from(t.getClientRects()),isRTL:t=>L(t).direction==="rtl"};function he(t,e,o,n){n===void 0&&(n={});const{ancestorScroll:i=!0,ancestorResize:s=!0,elementResize:r=!0,animationFrame:c=!1}=n,l=i&&!c,f=l||s?[...R(t)?U(t):t.contextElement?U(t.contextElement):[],...U(e)]:[];f.forEach(d=>{l&&d.addEventListener("scroll",o,{passive:!0}),s&&d.addEventListener("resize",o)});let m=null;if(r){let d=!0;m=new ResizeObserver(()=>{d||o(),d=!1}),R(t)&&!c&&m.observe(t),!R(t)&&t.contextElement&&!c&&m.observe(t.contextElement),m.observe(e)}let a,u=c?W(t):null;c&&g();function g(){const d=W(t);u&&(d.x!==u.x||d.y!==u.y||d.width!==u.width||d.height!==u.height)&&o(),u=d,a=requestAnimationFrame(g)}return o(),()=>{var d;f.forEach(w=>{l&&w.removeEventListener("scroll",o),s&&w.removeEventListener("resize",o)}),(d=m)==null||d.disconnect(),m=null,c&&cancelAnimationFrame(a)}}const we=(t,e,o)=>{const n=new Map,i={platform:ot,...o},s={...i.platform,_c:n};return Ut(t,e,{...i,platform:s})},xe=globalThis.calciteComponentsConfig,ye={floatingUINonChromiumPositioningFix:!0,...xe},ve=be();async function be(){function t(){return navigator.userAgentData}function e(){const n=t();return n!=null&&n.brands?n.brands.map(({brand:i,version:s})=>`${i}/${s}`).join(" "):navigator.userAgent}function o(){const n=t();return n!=null&&n.brands?!!n.brands.find(({brand:i,version:s})=>(i==="Google Chrome"||i==="Chromium")&&Number(s)>=109):!!navigator.userAgent.split(" ").find(i=>{const[s,r]=i.split("/");return s==="Chrome"&&parseInt(r)>=109})}if(Wt.isBrowser&&ye.floatingUINonChromiumPositioningFix&&(/firefox|safari/i.test(e())||o())){const{offsetParent:n}=await Ht(()=>import("./utils4.c8b9a271.js"),[]),i=ot.getOffsetParent;ot.getOffsetParent=s=>i(s,n)}}const Dt="data-placement",bt=100,At=["top","bottom","right","left","top-start","top-end","bottom-start","bottom-end","right-start","right-end","left-start","left-end"],Ae={animation:"calcite-floating-ui-anim",animationActive:"calcite-floating-ui-anim--active"};function Ce({placement:t,flipDisabled:e,flipPlacements:o,offsetDistance:n,offsetSkidding:i,arrowEl:s,type:r}){const c=[se(),ee()];if(r==="menu")return[...c,mt({fallbackPlacements:o||["top-start","top","top-end","bottom-start","bottom","bottom-end"]})];if(r==="popover"||r==="tooltip"){const l=[...c,oe({mainAxis:typeof n=="number"?n:0,crossAxis:typeof i=="number"?i:0})];return t==="auto"||t==="auto-start"||t==="auto-end"?l.push(Jt({alignment:t==="auto-start"?"start":t==="auto-end"?"end":null})):e||l.push(mt(o?{fallbackPlacements:o}:{})),s&&l.push(Yt({element:s})),l}return[]}function Be(t,e){const o=t.filter(n=>At.includes(n));return o.length!==t.length&&console.warn(`${e.tagName}: Invalid value found in: flipPlacements. Try any of these: ${At.map(n=>`"${n}"`).join(", ").trim()}`,{el:e}),o}function Oe(t,e){const o=["left","right"];return _t(t)==="rtl"&&o.reverse(),e.replace(/leading/gi,o[0]).replace(/trailing/gi,o[1])}async function De(t,e,o=!1){if(!!t.open)return o?Pe(e):Nt(e)}const Pe=$t(Nt,bt,{leading:!0,maxWait:bt});async function Nt({referenceEl:t,floatingEl:e,overlayPositioning:o="absolute",placement:n,flipDisabled:i,flipPlacements:s,offsetDistance:r,offsetSkidding:c,includeArrow:l=!1,arrowEl:f,type:m}){var b;if(!t||!e||l&&!f)return null;await ve;const{x:a,y:u,placement:g,strategy:d,middlewareData:w}=await we(t,e,{strategy:o,placement:n==="auto"||n==="auto-start"||n==="auto-end"?void 0:Oe(e,n),middleware:Ce({placement:n,flipDisabled:i,flipPlacements:s,offsetDistance:r,offsetSkidding:c,arrowEl:f,type:m})});if(w!=null&&w.arrow){const{x:y,y:O}=w.arrow;Object.assign(f.style,{left:y!=null?`${y}px`:"",top:O!=null?`${O}px`:""})}const p=((b=w==null?void 0:w.hide)==null?void 0:b.referenceHidden)?"hidden":null,h=p?"none":null;e.setAttribute(Dt,g);const x=`translate(${Math.round(a)}px,${Math.round(u)}px)`;Object.assign(e.style,{visibility:p,pointerEvents:h,position:d,top:"0",left:"0",transform:x})}const it=new WeakMap;function Ne(t,e,o){if(!o||!e)return;Re(t,e,o);const n=t.overlayPositioning;Object.assign(o.style,{visibility:"hidden",pointerEvents:"none",position:n}),n==="absolute"&&Mt(o);const i=he;it.set(t,i(e,o,()=>t.reposition()))}function Re(t,e,o){if(!o||!e)return;at(o).removeEventListener("transitionend",ft);const n=it.get(t);n&&n(),it.delete(t)}const Ct=4,Me=Math.ceil(Math.hypot(Ct,Ct));function Ve(t){!t||t.style.position!=="absolute"||at(t).addEventListener("transitionend",ft)}function at(t){return t.shadowRoot||t}function ft(t){const e=t.target;if(t.propertyName==="opacity"&&e.classList.contains(Ae.animation)){const o=Te(e);Mt(o),at(o).removeEventListener("transitionend",ft)}}function Mt(t){t.style.transform="",t.style.top="0",t.style.left="0"}function Te(t){return It(t,`[${Dt}]`)}/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const q=new WeakMap;function Ee(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onBeforeOpen():this.onBeforeClose())}function Le(t){t.propertyName===this.openTransitionProp&&t.target===this.transitionEl&&(this.open?this.onOpen():this.onClose())}function We(t){if(Se(t),t.transitionEl){const e=Ee.bind(t),o=Le.bind(t);q.set(t,[t.transitionEl,e,o]),t.transitionEl.addEventListener("transitionstart",e),t.transitionEl.addEventListener("transitionend",o)}}function Se(t){if(!q.has(t))return;const[e,o,n]=q.get(t);e.removeEventListener("transitionstart",o),e.removeEventListener("transitionend",n),q.delete(t)}export{Ae as F,Ne as a,Re as b,We as c,Me as d,Se as e,Be as f,De as r,Ve as u};
