import{aN as C,aM as J,d as P,h4 as k,h5 as v}from"./index.f0143bd6.js";const x={LineString:"esriGeometryPolyline",MultiLineString:"esriGeometryPolyline",MultiPoint:"esriGeometryMultipoint",Point:"esriGeometryPoint",Polygon:"esriGeometryPolygon",MultiPolygon:"esriGeometryPolygon"};function b(n){return x[n]}function*T(n){switch(n.type){case"Feature":yield n;break;case"FeatureCollection":for(const t of n.features)t&&(yield t)}}function*A(n){if(n)switch(n.type){case"Point":yield n.coordinates;break;case"LineString":case"MultiPoint":yield*n.coordinates;break;case"MultiLineString":case"Polygon":for(const t of n.coordinates)yield*t;break;case"MultiPolygon":for(const t of n.coordinates)for(const o of t)yield*o}}function*D(n,t={}){const{geometryType:o,objectIdField:e}=t;for(const r of n){const{geometry:c,properties:d,id:i}=r;if(c&&b(c.type)!==o)continue;const l=d||{};let s;e&&(s=l[e],i==null||s||(l[e]=s=i)),yield new C(c?H(new J,c,t):null,l,null,s!=null?s:void 0)}}function E(n){for(const t of n)if(t.length>2)return!0;return!1}function R(n){return!L(n)}function Z(n){return L(n)}function L(n){let t=0;for(let o=0;o<n.length;o++){const e=n[o],r=n[(o+1)%n.length];t+=e[0]*r[1]-r[0]*e[1]}return t<=0}function O(n){const t=n[0],o=n[n.length-1];return t[0]===o[0]&&t[1]===o[1]&&t[2]===o[2]||n.push(t),n}function H(n,t,o){switch(t.type){case"LineString":return q(n,t,o);case"MultiLineString":return z(n,t,o);case"MultiPoint":return B(n,t,o);case"MultiPolygon":return K(n,t,o);case"Point":return Q(n,t,o);case"Polygon":return U(n,t,o)}}function q(n,t,o){return g(n,t.coordinates,o),n}function z(n,t,o){for(const e of t.coordinates)g(n,e,o);return n}function B(n,t,o){return g(n,t.coordinates,o),n}function K(n,t,o){for(const e of t.coordinates){I(n,e[0],o);for(let r=1;r<e.length;r++)N(n,e[r],o)}return n}function Q(n,t,o){return S(n,t.coordinates,o),n}function U(n,t,o){const e=t.coordinates;I(n,e[0],o);for(let r=1;r<e.length;r++)N(n,e[r],o);return n}function I(n,t,o){const e=O(t);R(e)?$(n,e,o):g(n,e,o)}function N(n,t,o){const e=O(t);Z(e)?$(n,e,o):g(n,e,o)}function g(n,t,o){for(const e of t)S(n,e,o);n.lengths.push(t.length)}function $(n,t,o){for(let e=t.length-1;e>=0;e--)S(n,t[e],o);n.lengths.push(t.length)}function S(n,t,o){const[e,r,c]=t;n.coords.push(e,r),o.hasZ&&n.coords.push(c||0)}function V(n){switch(typeof n){case"string":return"esriFieldTypeString";case"number":return"esriFieldTypeDouble";default:return"unknown"}}function X(n){if(!n)throw new P("geojson-layer:empty","GeoJSON data is empty");if(n.type!=="Feature"&&n.type!=="FeatureCollection")throw new P("geojson-layer:unsupported-geojson-object","missing or not supported GeoJSON object type",{data:n});const{crs:t}=n;if(!t)return;const o=typeof t=="string"?t:t.type==="name"?t.properties.name:t.type==="EPSG"?t.properties.code:null,e=new RegExp(".*(CRS84H?|4326)$","i");if(!o||!e.test(o))throw new P("geojson-layer:unsupported-crs","unsupported GeoJSON 'crs' member",{crs:t})}function Y(n,t={}){var F;const o=[],e=new Set,r=new Set;let c,d=!1,i=null,l=!1,{geometryType:s=null}=t,m=!1;for(const p of T(n)){const{geometry:h,properties:u,id:a}=p;if((!h||(s||(s=b(h.type)),b(h.type)===s))&&(d||(d=E(A(h))),l||(l=a!=null,l&&(c=typeof a,u&&(i=Object.keys(u).filter(y=>u[y]===a)))),u&&i&&l&&a!=null&&(i.length>1?i=i.filter(y=>u[y]===a):i.length===1&&(i=u[i[0]]===a?i:[])),!m&&u)){let y=!0;for(const f in u){if(e.has(f))continue;const M=u[f];if(M==null){y=!1,r.add(f);continue}const j=V(M);if(j==="unknown"){r.add(f);continue}r.delete(f),e.add(f);const G=k(f);G&&o.push({name:G,alias:f,type:j})}m=y}}const w=(F=k((i==null?void 0:i.length)===1&&i[0]||null))!=null?F:void 0;if(w){for(const p of o)if(p.name===w&&v(p)){p.type="esriFieldTypeOID";break}}return{fields:o,geometryType:s,hasZ:d,objectIdFieldName:w,objectIdFieldType:c,unknownFields:Array.from(r)}}function _(n,t){return Array.from(D(T(n),t))}export{_ as I,Y as L,X as T,b as s};