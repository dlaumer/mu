import{_ as P,r as f,a0 as T,t as w,d as g,c_ as C,c$ as F,L as _,d0 as N,d1 as h}from"./index.7ded6657.js";import{t as d,r as E}from"./fetchService.4cf5a250.js";const J={FeatureLayer:!0,SceneLayer:!0};async function A(r){var t;const l=(t=r.properties)==null?void 0:t.customParameters,e=await V(r.url,l),a={...r.properties,url:r.url};if(!e.sublayerIds)return e.layerOrTableId!=null&&(a.layerId=e.layerOrTableId,a.sourceJSON=e.sourceJSON),new e.Constructor(a);const s=new(await P(()=>import("./index.7ded6657.js").then(function(o){return o.vE}),["assets/index.7ded6657.js","assets/index.574508c2.css"])).default({title:e.parsedUrl.title});return U(s,e,a),s}function O(r,l){return r?r.find(e=>e.id===l):null}function U(r,l,e){function a(s,t){const o={...e,layerId:s,sublayerTitleMode:"service-name"};return f(t)&&(o.sourceJSON=t),new l.Constructor(o)}l.sublayerIds.forEach(s=>{const t=a(s,O(l.sublayerInfos,s));r.add(t)}),l.tableIds.forEach(s=>{const t=a(s,O(l.tableInfos,s));r.tables.add(t)})}async function V(r,l){var m,p,I,b,S,v;let e=T(r);if(w(e)&&(e=await x(r,l)),w(e))throw new g("arcgis-layers:url-mismatch","The url '${url}' is not a valid arcgis resource",{url:r});const{serverType:a,sublayer:s}=e;let t;const o={FeatureServer:"FeatureLayer",StreamServer:"StreamLayer",VectorTileServer:"VectorTileLayer"};switch(a){case"MapServer":s!=null?t="FeatureLayer":t=await R(r,l)?"TileLayer":"MapImageLayer";break;case"ImageServer":{const n=await d(r,{customParameters:l}),{tileInfo:i,cacheType:y}=n;t=i?((m=i==null?void 0:i.format)==null?void 0:m.toUpperCase())!=="LERC"||y&&y.toLowerCase()!=="elevation"?"ImageryTileLayer":"ElevationLayer":"ImageryLayer";break}case"SceneServer":{const n=await d(e.url.path,{customParameters:l});if(t="SceneLayer",n){const i=n==null?void 0:n.layers;if((n==null?void 0:n.layerType)==="Voxel")t="VoxelLayer";else if(i!=null&&i.length){const y=(p=i[0])==null?void 0:p.layerType;y!=null&&h[y]!=null&&(t=h[y])}}break}default:t=o[a]}const u=a==="FeatureServer",c={parsedUrl:e,Constructor:null,layerOrTableId:u?s:void 0,sublayerIds:null,tableIds:null};if(J[t]&&s==null){const n=await M(r,a,l);u&&(c.sublayerInfos=n.layerInfos,c.tableInfos=n.tableInfos),n.layerIds.length+n.tableIds.length!==1?(c.sublayerIds=n.layerIds,c.tableIds=n.tableIds):u&&(c.layerOrTableId=(I=n.layerIds[0])!=null?I:n.tableIds[0],c.sourceJSON=(v=(b=n.layerInfos)==null?void 0:b[0])!=null?v:(S=n.tableInfos)==null?void 0:S[0])}return c.Constructor=await k(t),c}async function x(r,l){var u,c;const e=await d(r,{customParameters:l});let a=null,s=null;const t=e.type;if(t==="Feature Layer"||t==="Table"?(a="FeatureServer",s=(u=e.id)!=null?u:null):t==="indexedVector"?a="VectorTileServer":e.hasOwnProperty("mapName")?a="MapServer":e.hasOwnProperty("bandCount")&&e.hasOwnProperty("pixelSizeX")?a="ImageServer":e.hasOwnProperty("maxRecordCount")&&e.hasOwnProperty("allowGeometryUpdates")?a="FeatureServer":e.hasOwnProperty("streamUrls")?a="StreamServer":L(e)?(a="SceneServer",s=e.id):e.hasOwnProperty("layers")&&L((c=e.layers)==null?void 0:c[0])&&(a="SceneServer"),!a)return null;const o=s!=null?C(r):null;return{title:f(o)&&e.name||F(r),serverType:a,sublayer:s,url:{path:f(o)?o.serviceUrl:_(r).path}}}function L(r){return r!=null&&r.hasOwnProperty("store")&&r.hasOwnProperty("id")&&typeof r.id=="number"}async function M(r,l,e){let a,s=!1;if(l==="FeatureServer"){const u=await E(r,{customParameters:e});s=!!u.layersJSON,a=u.layersJSON||u.serviceJSON}else a=await d(r,{customParameters:e});const t=a==null?void 0:a.layers,o=a==null?void 0:a.tables;return{layerIds:(t==null?void 0:t.map(u=>u.id).reverse())||[],tableIds:(o==null?void 0:o.map(u=>u.id).reverse())||[],layerInfos:s?t:[],tableInfos:s?o:[]}}async function k(r){return(0,N[r])()}async function R(r,l){return(await d(r,{customParameters:l})).tileInfo}export{A as fromUrl};