import{$ as d,d as I,d0 as S,d3 as u,d1 as l}from"./index.7ded6657.js";import{getNumLayersAndTables as m,preprocessFSItemData as g,getFirstLayerOrTableId as T,getSubtypeGroupLayerIds as v}from"./layersLoader.5f16ad34.js";import{t as i}from"./fetchService.4cf5a250.js";import"./jsonContext.c9a594ac.js";async function B(e){!e.portalItem||e.portalItem instanceof d||(e={...e,portalItem:new d(e.portalItem)});const a=await $(e.portalItem);return new a.constructor({portalItem:e.portalItem,...a.properties})}async function $(e){return await e.load(),G(await F(e))}async function F(e){switch(e.type){case"Map Service":return M(e);case"Feature Service":return h(e);case"Feature Collection":return C(e);case"Scene Service":return b(e);case"Image Service":return V(e);case"Stream Service":return j();case"Vector Tile Service":return W();case"GeoJson":return D();case"CSV":return K();case"KML":return O();case"WFS":return k();case"WMTS":return A();case"WMS":return x();case"Feed":return J();default:throw new I("portal:unknown-item-type","Unknown item type '${type}'",{type:e.type})}}async function G(e){const a=S[e.className];return{constructor:await a(),properties:e.properties}}async function M(e){return await E(e)?{className:"TileLayer"}:{className:"MapImageLayer"}}async function h(e){if(u(e,"Oriented Imagery Layer"))return R(e);const a=await N(e);if(typeof a=="object"){const r={};return a.id!=null&&(r.layerId=a.id),{className:a.className||"FeatureLayer",properties:r}}return{className:"GroupLayer"}}async function b(e){var r,t;const a=await N(e);if(typeof a=="object"){const s={};let c;if(a.id!=null?(s.layerId=a.id,c=`${e.url}/layers/${a.id}`):c=e.url,(r=e.typeKeywords)==null?void 0:r.length){for(const o of Object.keys(l))if(e.typeKeywords.includes(o))return{className:l[o]}}const n=await i(c);return{className:l[n==null?void 0:n.layerType]||"SceneLayer",properties:s}}return a===!1?((t=await i(e.url))==null?void 0:t.layerType)==="Voxel"?{className:"VoxelLayer"}:{className:"GroupLayer"}:{className:"GroupLayer"}}async function C(e){await e.load();const a=u(e,"Map Notes"),r=u(e,"Markup");if(a||r)return{className:"MapNotesLayer"};if(u(e,"Route Layer"))return{className:"RouteLayer"};const t=await e.fetchData();return m(t)===1?{className:"FeatureLayer"}:{className:"GroupLayer"}}async function V(e){var n,o,p,f,L;await e.load();const a=(o=(n=e.typeKeywords)==null?void 0:n.map(w=>w.toLowerCase()))!=null?o:[];if(a.includes("elevation 3d layer"))return{className:"ElevationLayer"};if(a.includes("tiled imagery"))return{className:"ImageryTileLayer"};const r=(p=await e.fetchData())==null?void 0:p.layerType;if(r==="ArcGISTiledImageServiceLayer")return{className:"ImageryTileLayer"};if(r==="ArcGISImageServiceLayer")return{className:"ImageryLayer"};const t=await i(e.url),s=(f=t.cacheType)==null?void 0:f.toLowerCase(),c=(L=t.capabilities)==null?void 0:L.toLowerCase().includes("tilesonly");return s==="map"||c?{className:"ImageryTileLayer"}:{className:"ImageryLayer"}}function j(){return{className:"StreamLayer"}}function W(){return{className:"VectorTileLayer"}}function D(){return{className:"GeoJSONLayer"}}function K(){return{className:"CSVLayer"}}function O(){return{className:"KMLLayer"}}function k(){return{className:"WFSLayer"}}function x(){return{className:"WMSLayer"}}function A(){return{className:"WMTSLayer"}}function J(){return{className:"StreamLayer"}}async function R(e){await e.load();const a=await e.fetchData();return a.coverage?{className:"GroupLayer"}:{className:"OrientedImageryLayer",properties:a}}async function E(e){return(await i(e.url)).tileInfo}async function N(e){const a=e.url;if(!a||a.match(/\/\d+$/))return{};await e.load();const r=await e.fetchData();if(e.type==="Feature Service"){const t=y(await g(r,a));if(typeof t=="object"){const s=v(r);t.className=t.id!=null&&s.includes(t.id)?"SubtypeGroupLayer":"FeatureLayer"}return t}return m(r)>0?y(r):y(await i(a))}function y(e){return m(e)===1&&{id:T(e)}}export{B as fromItem,F as selectLayerClassPath};