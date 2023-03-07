import{t as i,d as c,b5 as u,c0 as d,r as p}from"./index.7ded6657.js";function y(e){return i(e)||e.type==="simple"||e.type==="unique-value"||e.type==="class-breaks"||e.type==="dictionary"||e.type==="heatmap"}function v(e,r){if(i(e))return null;if(!y(e))return new c("renderer-conversion-3d:unsupported-renderer",`Unsupported renderer of type '${e.type||e.declaredClass}'`,{renderer:e});switch(e.type){case"simple":return f(e);case"unique-value":return m(e,r);case"class-breaks":return b(e);case"dictionary":case"heatmap":return null}return null}function a(e,r){if(!r)return null;let t;if(t=Array.isArray(r)?r:[r],t.length>0){const s=t.map(n=>n.details.symbol.type||n.details.symbol.declaredClass).filter(n=>!!n);s.sort();const o=[];return s.forEach((n,l)=>{l!==0&&n===s[l-1]||o.push(n)}),new c("renderer-conversion-3d:unsupported-symbols",`Renderer contains symbols (${o.join(", ")}) which are not supported in 3D`,{renderer:e,symbolErrors:t})}return null}function f(e){return a(e,u(e.symbol).error)}function m(e,r){var n;const t={...d,...r},s=(n=e.uniqueValueInfos)==null?void 0:n.map(l=>u(l.symbol,t).error).filter(p),o=u(e.defaultSymbol,t);return o.error&&(s==null||s.unshift(o.error)),a(e,s)}function b(e){const r=e.classBreakInfos.map(s=>u(s.symbol).error).filter(p),t=u(e.defaultSymbol);return t.error&&r.unshift(t.error),a(e,r)}export{y as s,v as u};
