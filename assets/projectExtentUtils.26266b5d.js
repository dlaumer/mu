import{r as n,t as a,h1 as i,iU as u}from"./index.f0143bd6.js";function f(r){const t=r.view.spatialReference,e=r.layer.fullExtent,l=n(e)&&e.spatialReference;if(a(e)||!l)return Promise.resolve(null);if(l.equals(t))return Promise.resolve(e.clone());const s=i(e,t);return n(s)?Promise.resolve(s):r.view.state.isLocal?u(e,t,r.layer.portalItem).then(o=>!r.destroyed&&o?o:null).catch(()=>null):Promise.resolve(null)}export{f as l};