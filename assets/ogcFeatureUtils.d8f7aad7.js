import{O as E,t as y,d as g,U as j,g_ as B,dz as Q,f as T,g$ as U,aZ as V,r as k,D as H,h0 as X,h1 as G,h2 as Y,h3 as ee}from"./index.f0143bd6.js";import{T as te,L as ne,I as ie}from"./geojson.1c3ff5a0.js";import{o as ae}from"./clientSideDefaults.c93b26c1.js";const $=E.getLogger("esri.layers.graphics.sources.ogcfeature"),R="http://www.opengis.net/def/crs/",pe=`${R}OGC/1.3/CRS84`;async function ge(e,n,t={},i=5){const{links:r}=e,l=f(r,"items","application/geo+json")||f(r,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(l))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{data:c}=await j(l.href,{signal:t.signal,query:{limit:i,...t.customParameters,token:t.apiKey},headers:{accept:"application/geo+json"}});await te(c);const s=ne(c,{geometryType:n.geometryType}),u=n.fields||s.fields||[],x=n.hasZ!=null?n.hasZ:s.hasZ,F=s.geometryType,m=n.objectIdField||s.objectIdFieldName||"OBJECTID";let o=n.timeInfo;const w=u.find(({name:a})=>a===m);if(w)w.editable=!1,w.nullable=!1;else{if(!s.objectIdFieldType)throw new g("ogc-feature-layer:missing-feature-id","Collection geojson require a feature id as a unique identifier");u.unshift({name:m,alias:m,type:s.objectIdFieldType==="number"?"esriFieldTypeOID":"esriFieldTypeString",editable:!1,nullable:!1})}if(m!==s.objectIdFieldName){const a=u.find(({name:d})=>d===s.objectIdFieldName);a&&(a.type="esriFieldTypeInteger")}u===s.fields&&s.unknownFields.length>0&&$.warn({name:"ogc-feature-layer:unknown-field-types",message:"Some fields types couldn't be inferred from the features and were dropped",details:{unknownFields:s.unknownFields}});for(const a of u){if(a.name==null&&(a.name=a.alias),a.alias==null&&(a.alias=a.name),a.type!=="esriFieldTypeOID"&&a.type!=="esriFieldTypeGlobalID"&&(a.editable=a.editable==null||!!a.editable,a.nullable=a.nullable==null||!!a.nullable),!a.name)throw new g("ogc-feature-layer:invalid-field-name","field name is missing",{field:a});if(!B.jsonValues.includes(a.type))throw new g("ogc-feature-layer:invalid-field-type",`invalid type for field "${a.name}"`,{field:a})}if(o){const a=new Q(u);if(o.startTimeField){const d=a.get(o.startTimeField);d?(o.startTimeField=d.name,d.type="esriFieldTypeDate"):o.startTimeField=null}if(o.endTimeField){const d=a.get(o.endTimeField);d?(o.endTimeField=d.name,d.type="esriFieldTypeDate"):o.endTimeField=null}if(o.trackIdField){const d=a.get(o.trackIdField);d?o.trackIdField=d.name:(o.trackIdField=null,$.warn({name:"ogc-feature-layer:invalid-timeInfo-trackIdField",message:"trackIdField is missing",details:{timeInfo:o}}))}o.startTimeField||o.endTimeField||($.warn({name:"ogc-feature-layer:invalid-timeInfo",message:"startTimeField and endTimeField are missing",details:{timeInfo:o}}),o=null)}return{drawingInfo:F?ae(F):null,extent:de(e),geometryType:F,fields:u,hasZ:!!x,objectIdField:m,timeInfo:o}}async function ye(e,n={}){const{links:t}=e,i=f(t,"data","application/json")||f(t,"http://www.opengis.net/def/rel/ogc/1.0/data","application/json");if(y(i))throw new g("ogc-feature-layer:missing-collections-page","Missing collections url");const{apiKey:r,customParameters:l,signal:c}=n,{data:s}=await j(i.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function we(e,n={}){const{links:t}=e,i=f(t,"conformance","application/json")||f(t,"http://www.opengis.net/def/rel/ogc/1.0/conformance","application/json");if(y(i))throw new g("ogc-feature-layer:missing-conformance-page","Missing conformance url");const{apiKey:r,customParameters:l,signal:c}=n,{data:s}=await j(i.href,{signal:c,headers:{accept:"application/json"},query:{...l,token:r}});return s}async function he(e,n={}){const{apiKey:t,customParameters:i,signal:r}=n,{data:l}=await j(e,{signal:r,headers:{accept:"application/json"},query:{...i,token:t}});return l}async function be(e,n={}){const t="application/vnd.oai.openapi+json;version=3.0",i=f(e.links,"service-desc",t);if(y(i))return $.warn("ogc-feature-layer:missing-openapi-page","The OGC API-Features server does not have an OpenAPI page."),null;const{apiKey:r,customParameters:l,signal:c}=n,{data:s}=await j(i.href,{signal:c,headers:{accept:t},query:{...l,token:r}});return s}function Fe(e){var r;const n=(r=/^http:\/\/www\.opengis.net\/def\/crs\/(?<authority>.*)\/(?<version>.*)\/(?<code>.*)$/i.exec(e))==null?void 0:r.groups;if(!n)return null;const{authority:t,code:i}=n;switch(t.toLowerCase()){case"ogc":switch(i.toLowerCase()){case"crs27":return T.GCS_NAD_1927.wkid;case"crs83":return 4269;case"crs84":case"crs84h":return T.WGS84.wkid;default:return null}case"esri":case"epsg":{const l=Number.parseInt(i,10);return Number.isNaN(l)?null:l}default:return null}}async function Ie(e,n,t){const i=await se(e,n,t);return U(i)}async function se(e,n,t){const{collection:i,layerDefinition:r,maxRecordCount:l,queryParameters:{apiKey:c,customParameters:s},spatialReference:u,supportedCrs:x}=e,{links:F}=i,m=f(F,"items","application/geo+json")||f(F,"http://www.opengis.net/def/rel/ogc/1.0/items","application/geo+json");if(y(m))throw new g("ogc-feature-layer:missing-items-page","Missing items url");const{geometry:o,num:w,start:a,timeExtent:d,where:P}=n;if(n.objectIds)throw new g("ogc-feature-layer:query-by-objectids-not-supported","Queries with objectids are not supported");const Z=T.fromJSON(u),I=V(n.outSpatialReference,Z),S=I.isWGS84?null:D(I,x),K=ce(o,x),L=oe(d),J=le(P),z=w!=null?w:a!=null&&a!==void 0?10:l,{data:h}=await j(m.href,{...t,query:{...s,...K,crs:S,datetime:L,query:J,limit:z,startindex:a,token:c},headers:{accept:"application/geo+json"}});let v=!1;h.links&&(v=!!h.links.find(O=>O.rel==="next")),!v&&Number.isInteger(h.numberMatched)&&Number.isInteger(h.numberReturned)&&(v=h.numberReturned<h.numberMatched);const{fields:A,geometryType:N,hasZ:q,objectIdField:C}=r,M=ie(h,{geometryType:N,hasZ:q,objectIdField:C});if(!S&&I.isWebMercator){for(const b of M)if(k(b.geometry)&&N!=null){const O=H(b.geometry,N,q,!1);O.spatialReference=T.WGS84,b.geometry=X(G(O,I))}}for(const b of M)b.objectId=b.attributes[C];const _=S||!S&&I.isWebMercator?I.toJSON():Y,p=new ee;return p.exceededTransferLimit=v,p.features=M,p.fields=A,p.geometryType=N,p.hasZ=q,p.objectIdFieldName=C,p.spatialReference=_,p}function re(e){return k(e)&&e.type==="extent"}function D(e,n){var l,c,s;const{isWebMercator:t,wkid:i}=e;if(!i)return null;const r=t?(s=(c=(l=n[3857])!=null?l:n[102100])!=null?c:n[102113])!=null?s:n[900913]:n[e.wkid];return r?`${R}${r}`:null}function W(e){if(y(e))return"";const{xmin:n,ymin:t,xmax:i,ymax:r}=e;return`${n},${t},${i},${r}`}function oe(e){if(y(e))return null;const{start:n,end:t}=e;return`${k(n)?n.toISOString():".."}/${k(t)?t.toISOString():".."}`}function le(e){return y(e)||!e||e==="1=1"?null:e}function ce(e,n){if(!re(e))return null;const{spatialReference:t}=e;if(!t||t.isWGS84)return{bbox:W(e)};const i=D(t,n);return k(i)?{bbox:W(e),"bbox-crs":i}:t.isWebMercator?{bbox:W(G(e,T.WGS84))}:null}function de(e){var s;const n=(s=e.extent)==null?void 0:s.spatial;if(!n)return null;const t=n.bbox[0],i=t.length===4,r=t[0],l=t[1],c=i?void 0:t[2];return{xmin:r,ymin:l,xmax:i?t[2]:t[3],ymax:i?t[3]:t[4],zmin:c,zmax:i?void 0:t[5],spatialReference:T.WGS84.toJSON()}}function f(e,n,t){return e.find(i=>i.rel===n&&i.type===t)||e.find(i=>i.rel===n&&!i.type)}export{pe as F,ge as I,Ie as N,be as S,ye as T,R as j,we as k,se as q,Fe as v,he as x};