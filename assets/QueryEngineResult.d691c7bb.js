import{lH as Me,lI as Ne,bB as C,k_ as ye,gO as K,lJ as xe,r as q,gL as Ce,lE as k,s as qe,aM as W,t as G,lK as Ge,lL as H,lM as Pe,lN as X,gS as _e,d9 as Oe,v as Ze,gT as je,gU as Le,bH as Be,k9 as Ue,lO as Qe,h2 as ne,_ as Fe,lP as Y,lQ as ke,lR as He,lS as Xe,lT as re,d as A,lU as Ye,lV as Je,lW as le,lX as oe,lY as Ke,lZ as We,l_ as et,bL as tt}from"./index.f0143bd6.js";import{f as it}from"./WhereClause.48310df0.js";import{c as L,D as st,m as at,f as ue,d as ce,T as nt,y as rt,x as lt,z as ot,S as ut,M as ct,v as dt,p as ht}from"./utils.ecbb20c7.js";import{t as Ie}from"./json.5152e73f.js";const B=[0,0];function Se(a,t){if(!t)return null;if("x"in t){const e={x:0,y:0};return[e.x,e.y]=a(t.x,t.y,B),t.z!=null&&(e.z=t.z),t.m!=null&&(e.m=t.m),e}if("xmin"in t){const e={xmin:0,ymin:0,xmax:0,ymax:0};return[e.xmin,e.ymin]=a(t.xmin,t.ymin,B),[e.xmax,e.ymax]=a(t.xmax,t.ymax,B),t.hasZ&&(e.zmin=t.zmin,e.zmax=t.zmax,e.hasZ=!0),t.hasM&&(e.mmin=t.mmin,e.mmax=t.mmax,e.hasM=!0),e}return"rings"in t?{rings:de(t.rings,a),hasM:t.hasM,hasZ:t.hasZ}:"paths"in t?{paths:de(t.paths,a),hasM:t.hasM,hasZ:t.hasZ}:"points"in t?{points:Ve(t.points,a),hasM:t.hasM,hasZ:t.hasZ}:null}function de(a,t){const e=[];for(const i of a)e.push(Ve(i,t));return e}function Ve(a,t){const e=[];for(const i of a){const s=t(i[0],i[1],[0,0]);e.push(s),i.length>2&&s.push(i[2]),i.length>3&&s.push(i[3])}return e}async function Te(a,t){if(!a||!t)return;const e=Array.isArray(a)?a.map(i=>q(i.geometry)?i.geometry.spatialReference:null).filter(q):[a];await Ce(e.map(i=>({source:i,dest:t})))}const ve=Se.bind(null,Me),we=Se.bind(null,Ne);function Z(a,t,e,i){if(!a||(e||(e=t,t=a.spatialReference),!k(t)||!k(e)||C(t,e)))return a;if(ye(t,e)){const s=K(e)?ve(a):we(a);return s.spatialReference=e,s}return xe(Ie,[a],t,e,null,i)[0]}class ft{constructor(){this._jobs=[],this._timer=null,this._process=this._process.bind(this)}async push(t,e,i){if(!t||!t.length||!e||!i||C(e,i))return t;const s={geometries:t,inSpatialReference:e,outSpatialReference:i,resolve:null};return this._jobs.push(s),new Promise(n=>{s.resolve=n,this._timer===null&&(this._timer=setTimeout(this._process,10))})}_process(){this._timer=null;const t=this._jobs.shift();if(!t)return;const{geometries:e,inSpatialReference:i,outSpatialReference:s,resolve:n}=t;ye(i,s)?K(s)?n(e.map(ve)):n(e.map(we)):n(xe(Ie,e,i,s,null,null)),this._jobs.length>0&&(this._timer=setTimeout(this._process,10))}}const mt=new ft;function Dt(a,t,e){return mt.push(a,t,e)}const gt=new qe({esriSRUnit_Meter:"meters",esriSRUnit_Kilometer:"kilometers",esriSRUnit_Foot:"feet",esriSRUnit_StatuteMile:"miles",esriSRUnit_NauticalMile:"nautical-miles",esriSRUnit_USNauticalMile:"us-nautical-miles"}),he=Object.freeze({}),fe=new W,pt=new W,J=new W,b={esriGeometryPoint:Y,esriGeometryPolyline:ke,esriGeometryPolygon:He,esriGeometryMultipoint:Xe};function me(a,t,e,i=a.hasZ,s=a.hasM){if(G(t))return null;const n=a.hasZ&&i,l=a.hasM&&s;if(e){const r=H(J,t,a.hasZ,a.hasM,"esriGeometryPoint",e,i,s);return Y(r,n,l)}return Y(t,n,l)}function U(a,t,e,i,s,n,l=t,r=e){var d,m,h,f,x,S;const o=t&&l,u=e&&r,c=q(i)?"coords"in i?i:i.geometry:null;if(G(c))return null;if(s){let g=Ge(pt,c,t,e,a,s,l,r);return n&&(g=H(J,g,o,u,a,n)),(m=(d=b[a])==null?void 0:d.call(b,g,o,u))!=null?m:null}if(n){const g=H(J,c,t,e,a,n,l,r);return(f=(h=b[a])==null?void 0:h.call(b,g,o,u))!=null?f:null}return Pe(fe,c,t,e,l,r),(S=(x=b[a])==null?void 0:x.call(b,fe,o,u))!=null?S:null}async function zt(a,t,e){const{outFields:i,orderByFields:s,groupByFieldsForStatistics:n,outStatistics:l}=a;if(i)for(let r=0;r<i.length;r++)i[r]=i[r].trim();if(s)for(let r=0;r<s.length;r++)s[r]=s[r].trim();if(n)for(let r=0;r<n.length;r++)n[r]=n[r].trim();if(l)for(let r=0;r<l.length;r++)l[r].onStatisticField&&(l[r].onStatisticField=l[r].onStatisticField.trim());return a.geometry&&!a.outSR&&(a.outSR=a.geometry.spatialReference),yt(a,t,e)}async function yt(a,t,e){var n;if(!a)return null;let{where:i}=a;if(a.where=i=i&&i.trim(),(!i||/^1 *= *1$/.test(i)||t&&t===i)&&(a.where=null),!a.geometry)return a;let s=await _t(a);if(a.distance=0,a.units=null,a.spatialRel==="esriSpatialRelEnvelopeIntersects"){const{spatialReference:l}=a.geometry;s=X(s),s.spatialReference=l}if(s){await Te(s.spatialReference,e),s=xt(s,e);const l=(await Oe(Ze(s)))[0];if(G(l))throw he;const r="quantizationParameters"in a&&((n=a.quantizationParameters)==null?void 0:n.tolerance)||"maxAllowableOffset"in a&&a.maxAllowableOffset||0,o=r&&be(s,e)?{densificationStep:8*r}:void 0,u=l.toJSON(),c=await Z(u,u.spatialReference,e,o);if(!c)throw he;c.spatialReference=e,a.geometry=c}return a}function be(a,t){if(!a)return!1;const e=a.spatialReference;return(_e(a)||je(a)||Le(a))&&!C(e,t)&&!Be(e,t)}function xt(a,t){const e=a.spatialReference;return be(a,t)&&_e(a)?{spatialReference:e,rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]}:a}async function _t(a){const{distance:t,units:e}=a,i=a.geometry;if(t==null||"vertexAttributes"in i)return i;const s=i.spatialReference,n=e?gt.fromJSON(e):Ue(s),l=s&&(Qe(s)||K(s))?i:await Te(s,ne).then(()=>Z(i,ne));return(await Ft())(l.spatialReference,l,t,n)}async function Ft(){return(await Fe(()=>import("./geometryEngineJSON.7ef32ff7.js"),["assets/geometryEngineJSON.7ef32ff7.js","assets/geometryEngineBase.871c2f6a.js","assets/geometryEngineJSON.7d40f72f.js","assets/json.5152e73f.js"])).geodesicBuffer}function Q(a){return a&&Re in a?JSON.parse(JSON.stringify(a,It)):a}const Re="_geVersion",It=(a,t)=>a!==Re?t:void 0;class St{constructor(t,e){this._cache=new re(t),this._invalidCache=new re(e)}get(t,e){const i=`${e.uid}:${t}`,s=this._cache.get(i);if(s)return s;if(this._invalidCache.get(i)!==void 0)return null;try{const n=it.create(t,e);return this._cache.put(i,n),n}catch{return this._invalidCache.put(i,null),null}}}const ee=new St(50,500),D="feature-store:unsupported-query",Ae=" as ",Vt=new Set(["esriFieldTypeOID","esriFieldTypeSmallInteger","esriFieldTypeInteger","esriFieldTypeSingle","esriFieldTypeDouble","esriFieldTypeLong","esriFieldTypeDate"]);function $t(a,t){if(!t)return!0;const e=ee.get(t,a);if(!e)throw new A(D,"invalid SQL expression",{where:t});if(!e.isStandardized)throw new A(D,"where clause is not standard",{where:t});return te(a,e.fieldNames,"where clause contains missing fields"),!0}function Et(a,t,e){if(!t)return!0;const i=ee.get(t,a);if(!i)throw new A(D,"invalid SQL expression",{having:t});if(!i.isAggregate)throw new A(D,"having does not contain a valid aggregate function",{having:t});const s=i.fieldNames;if(te(a,s,"having contains missing fields"),!i.getExpressions().every(n=>{var u;const{aggregateType:l,field:r}=n,o=(u=a.get(r))==null?void 0:u.name;return e.some(c=>{var f;const{onStatisticField:d,statisticType:m}=c;return((f=a.get(d))==null?void 0:f.name)===o&&m.toLowerCase().trim()===l})}))throw new A(D,"expressions in having should also exist in outStatistics",{having:t});return!0}function N(a,t){return a?ee.get(a,t):null}function te(a,t,e,i=!0){const s=[];for(const n of t)if(n!=="*"&&!a.has(n))if(i){const l=De(n);try{const r=N(l,a);if(!r)throw new A(D,"invalid SQL expression",{where:l});if(!r.isStandardized)throw new A(D,"expression is not standard",{clause:r});te(a,r.fieldNames,"expression contains missing fields")}catch(r){const o=r&&r.details;if(o&&(o.clause||o.where))throw r;o&&o.missingFields?s.push(...o.missingFields):s.push(n)}}else s.push(n);if(s.length)throw new A(D,e,{missingFields:s})}function De(a){return a.split(Ae)[0]}function Tt(a){return a.split(Ae)[1]}function Mt(a,t){const e=t.get(a);return!!e&&!Vt.has(e.type)}class O{constructor(t,e,i){var n;this._fieldDataCache=new Map,this._returnDistinctMap=new Map,this.returnDistinctValues=(n=t.returnDistinctValues)!=null?n:!1,this.fieldsIndex=i,this.featureAdapter=e;const s=t.outFields;if(s&&!s.includes("*")){this.outFields=s;let l=0;for(const r of s){const o=De(r),u=this.fieldsIndex.get(o),c=u?null:N(o,i),d=u?u.name:Tt(r)||"FIELD_EXP_"+l++;this._fieldDataCache.set(r,{alias:d,clause:c})}}}countDistinctValues(t){return this.returnDistinctValues?(t.forEach(e=>this.getAttributes(e)),this._returnDistinctMap.size):t.length}getAttributes(t){const e=this._processAttributesForOutFields(t);return this._processAttributesForDistinctValues(e)}getFieldValue(t,e,i){var l;const s=i?i.name:e;let n=null;return this._fieldDataCache.has(s)?n=(l=this._fieldDataCache.get(s))==null?void 0:l.clause:i||(n=N(e,this.fieldsIndex),this._fieldDataCache.set(s,{alias:s,clause:n})),i?this.featureAdapter.getAttribute(t,s):n==null?void 0:n.calculateValue(t,this.featureAdapter)}getDataValue(t,e){const i=e.normalizationType,s=e.normalizationTotal;let n=e.field&&this.getFieldValue(t,e.field,this.fieldsIndex.get(e.field));if(e.field2&&(n=`${L(n)}${e.fieldDelimiter}${L(this.getFieldValue(t,e.field2,this.fieldsIndex.get(e.field2)))}`,e.field3&&(n=`${n}${e.fieldDelimiter}${L(this.getFieldValue(t,e.field3,this.fieldsIndex.get(e.field3)))}`)),i&&Number.isFinite(n)){const l=i==="field"&&e.normalizationField?this.getFieldValue(t,e.normalizationField,this.fieldsIndex.get(e.normalizationField)):null;n=st(n,i,l,s)}return n}getExpressionValue(t,e,i,s){const n={attributes:this.featureAdapter.getAttributes(t),layer:{fields:this.fieldsIndex.fields}},l=s.createExecContext(n,i);return s.executeFunction(e,l)}getExpressionValues(t,e,i,s){const n={fields:this.fieldsIndex.fields};return t.map(l=>{const r={attributes:this.featureAdapter.getAttributes(l),layer:n},o=s.createExecContext(r,i);return s.executeFunction(e,o)})}validateItem(t,e){var i,s,n;return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:N(e,this.fieldsIndex)}),(n=(s=(i=this._fieldDataCache.get(e))==null?void 0:i.clause)==null?void 0:s.testFeature(t,this.featureAdapter))!=null?n:!1}validateItems(t,e){var i,s,n;return this._fieldDataCache.has(e)||this._fieldDataCache.set(e,{alias:e,clause:N(e,this.fieldsIndex)}),(n=(s=(i=this._fieldDataCache.get(e))==null?void 0:i.clause)==null?void 0:s.testSet(t,this.featureAdapter))!=null?n:!1}_processAttributesForOutFields(t){const e=this.outFields;if(!e||!e.length)return this.featureAdapter.getAttributes(t);const i={};for(const s of e){const{alias:n,clause:l}=this._fieldDataCache.get(s);i[n]=l?l.calculateValue(t,this.featureAdapter):this.featureAdapter.getAttribute(t,n)}return i}_processAttributesForDistinctValues(t){if(G(t)||!this.returnDistinctValues)return t;const e=this.outFields,i=[];if(e)for(const l of e){const{alias:r}=this._fieldDataCache.get(l);i.push(t[r])}else for(const l in t)i.push(t[l]);const s=`${(e||["*"]).join(",")}=${i.join(",")}`;let n=this._returnDistinctMap.get(s)||0;return this._returnDistinctMap.set(s,++n),n>1?null:t}}class Nt{constructor(t,e,i){this.items=t,this.query=e,this.geometryType=i.geometryType,this.hasM=i.hasM,this.hasZ=i.hasZ,this.fieldsIndex=i.fieldsIndex,this.objectIdField=i.objectIdField,this.spatialReference=i.spatialReference,this.featureAdapter=i.featureAdapter}get size(){return this.items.length}createQueryResponseForCount(){const t=new O(this.query,this.featureAdapter,this.fieldsIndex);if(!this.query.outStatistics)return t.countDistinctValues(this.items);const{groupByFieldsForStatistics:e,having:i,outStatistics:s}=this.query;if(!(e==null?void 0:e.length))return 1;const l=new Map,r=new Map,o=new Set;for(const u of s){const{statisticType:c}=u,d=c!=="exceedslimit"?u.onStatisticField:void 0;if(!r.has(d)){const h=[];for(const f of e){const x=this._getAttributeValues(t,f,l);h.push(x)}r.set(d,this._calculateUniqueValues(h,t.returnDistinctValues))}const m=r.get(d);for(const h in m){const{data:f,items:x}=m[h],S=f.join(",");i&&!t.validateItems(x,i)||o.add(S)}}return o.size}async createQueryResponse(){let t;if(this.query.outStatistics?t=this.query.outStatistics.some(e=>e.statisticType==="exceedslimit")?this._createExceedsLimitQueryResponse(this.query):await this._createStatisticsQueryResponse(this.query):t=this._createFeatureQueryResponse(this.query),this.query.returnQueryGeometry){const e=this.query.geometry;k(this.query.outSR)&&!C(e.spatialReference,this.query.outSR)?t.queryGeometry=Q({spatialReference:this.query.outSR,...Z(e,e.spatialReference,this.query.outSR)}):t.queryGeometry=Q({spatialReference:this.query.outSR,...e})}return t}createSnappingResponse(t,e){const i=this.featureAdapter,s=ge(this.hasZ,this.hasM),{point:n,mode:l}=t,r=typeof t.distance=="number"?t.distance:t.distance.x,o=typeof t.distance=="number"?t.distance:t.distance.y,u={candidates:[]},c=this.geometryType==="esriGeometryPolygon",d=this._getPointCreator(l,this.spatialReference,e),m=new pe(null,0),h=new pe(null,0),f={x:0,y:0,z:0};for(const x of this.items){const S=i.getGeometry(x);if(G(S))continue;const{coords:g,lengths:V}=S;if(m.coords=g,h.coords=g,t.types&j.EDGE){let F=0;for(let I=0;I<V.length;I++){const _=V[I];for(let p=0;p<_;p++,F+=s){const y=m;if(y.coordsIndex=F,p!==_-1){const T=h;T.coordsIndex=F+s;const E=f;vt(f,n,y,T);const v=(n.x-E.x)/r,w=(n.y-E.y)/o,z=v*v+w*w;z<=1&&u.candidates.push(Ye(i.getObjectId(x),d(E),Math.sqrt(z),d(y),d(T)))}}}}if(t.types&j.VERTEX){const F=c?g.length-s:g.length;for(let I=0;I<F;I+=s){const _=m;_.coordsIndex=I;const p=(n.x-_.x)/r,y=(n.y-_.y)/o,T=p*p+y*y;T<=1&&u.candidates.push(Je(i.getObjectId(x),d(_),Math.sqrt(T)))}}}return u.candidates.sort((x,S)=>x.distance-S.distance),u}_getPointCreator(t,e,i){const s=q(i)&&!C(e,i)?r=>Z(r,e,i):r=>r,{hasZ:n}=this,l=0;return t==="3d"?n?({x:r,y:o,z:u})=>s({x:r,y:o,z:u}):({x:r,y:o})=>s({x:r,y:o,z:l}):({x:r,y:o})=>s({x:r,y:o})}async createSummaryStatisticsResponse(t){const{field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:l,minValue:r,maxValue:o,scale:u}=t,c=this.fieldsIndex.isDateField(e),d=await this._getDataValues({field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:l,scale:u}),m=at({normalizationType:n,normalizationField:s,minValue:r,maxValue:o}),h=this.fieldsIndex.get(e),f={value:.5,fieldType:h==null?void 0:h.type},x=le(h)?ue({values:d,supportsNullCount:m,percentileParams:f}):ce({values:d,minValue:r,maxValue:o,useSampleStdDev:!n,supportsNullCount:m,percentileParams:f});return nt(x,c)}async createUniqueValuesResponse(t){const{field:e,valueExpression:i,domains:s,returnAllCodedValues:n,scale:l}=t,r=await this._getDataValues({field:e,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,valueExpression:i,scale:l}),o=rt(r);return lt(o,s,n,t.fieldDelimiter)}async createClassBreaksResponse(t){const{field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:l,classificationMethod:r,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:d,scale:m}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:l,scale:m}),f=ot(h,{field:e,normalizationField:s,normalizationType:n,normalizationTotal:l,classificationMethod:r,standardDeviationInterval:o,minValue:u,maxValue:c,numClasses:d});return ut(f,r)}async createHistogramResponse(t){const{field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:l,classificationMethod:r,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:d,scale:m}=t,h=await this._getDataValues({field:e,valueExpression:i,normalizationField:s,normalizationType:n,normalizationTotal:l,scale:m});return ct(h,{field:e,normalizationField:s,normalizationType:n,normalizationTotal:l,classificationMethod:r,standardDeviationInterval:o,minValue:u,maxValue:c,numBins:d})}_sortFeatures(t,e,i){if(t.length>1&&e&&e.length)for(const s of e.reverse()){const n=s.split(" "),l=n[0],r=this.fieldsIndex.get(l),o=!!n[1]&&n[1].toLowerCase()==="desc",u=dt(r==null?void 0:r.type,o);t.sort((c,d)=>{const m=i(c,l,r),h=i(d,l,r);return u(m,h)})}}_createFeatureQueryResponse(t){const e=this.items,{geometryType:i,hasM:s,hasZ:n,objectIdField:l,spatialReference:r}=this,{outFields:o,outSR:u,quantizationParameters:c,resultRecordCount:d,resultOffset:m,returnZ:h,returnM:f}=t,x=d!=null&&e.length>(m||0)+d,S=o&&(o.includes("*")?[...this.fieldsIndex.fields]:o.map(g=>this.fieldsIndex.get(g)));return{exceededTransferLimit:x,features:this._createFeatures(t,e),fields:S,geometryType:i,hasM:s&&f,hasZ:n&&h,objectIdFieldName:l,spatialReference:Q(u||r),transform:c&&oe(c)||null}}_createFeatures(t,e){var _;const i=new O(t,this.featureAdapter,this.fieldsIndex),{hasM:s,hasZ:n}=this,{orderByFields:l,quantizationParameters:r,returnGeometry:o,returnCentroid:u,maxAllowableOffset:c,resultOffset:d,resultRecordCount:m,returnZ:h=!1,returnM:f=!1}=t,x=n&&h,S=s&&f;let g=[],V=0;const F=[...e];if(this._sortFeatures(F,l,(p,y,T)=>i.getFieldValue(p,y,T)),o||u){const p=(_=oe(r))!=null?_:void 0;if(o&&!u)for(const y of F)g[V++]={attributes:i.getAttributes(y),geometry:U(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(y),c,p,x,S)};else if(!o&&u)for(const y of F)g[V++]={attributes:i.getAttributes(y),centroid:me(this,this.featureAdapter.getCentroid(y,this),p)};else for(const y of F)g[V++]={attributes:i.getAttributes(y),centroid:me(this,this.featureAdapter.getCentroid(y,this),p),geometry:U(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(y),c,p,x,S)}}else for(const p of F){const y=i.getAttributes(p);y&&(g[V++]={attributes:y})}const I=d||0;if(m!=null){const p=I+m;g=g.slice(I,Math.min(g.length,p))}return g}_createExceedsLimitQueryResponse(t){var l;let e=!1,i=Number.POSITIVE_INFINITY,s=Number.POSITIVE_INFINITY,n=Number.POSITIVE_INFINITY;for(const r of(l=t.outStatistics)!=null?l:[])if(r.statisticType==="exceedslimit"){i=r.maxPointCount!=null?r.maxPointCount:Number.POSITIVE_INFINITY,s=r.maxRecordCount!=null?r.maxRecordCount:Number.POSITIVE_INFINITY,n=r.maxVertexCount!=null?r.maxVertexCount:Number.POSITIVE_INFINITY;break}if(this.geometryType==="esriGeometryPoint")e=this.items.length>i;else if(this.items.length>s)e=!0;else{const r=ge(this.hasZ,this.hasM),o=this.featureAdapter;e=this.items.reduce((u,c)=>{const d=o.getGeometry(c);return u+(q(d)&&d.coords.length||0)},0)/r>n}return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(e)}}]}}async _createStatisticsQueryResponse(t){const e={attributes:{}},i=[],s=new Map,n=new Map,l=new Map,r=new Map,o=new O(t,this.featureAdapter,this.fieldsIndex),u=t.outStatistics,{groupByFieldsForStatistics:c,having:d,orderByFields:m}=t,h=c&&c.length,f=!!h,x=f?c[0]:null,S=f&&!this.fieldsIndex.get(x);for(const V of u!=null?u:[]){const{outStatisticFieldName:F,statisticType:I}=V,_=V,p=I!=="exceedslimit"?V.onStatisticField:void 0,y=I==="percentile_disc"||I==="percentile_cont",T=I==="EnvelopeAggregate"||I==="CentroidAggregate"||I==="ConvexHullAggregate",E=f&&h===1&&(p===x||S)&&I==="count";if(f){if(!l.has(p)){const w=[];for(const z of c){const P=this._getAttributeValues(o,z,s);w.push(P)}l.set(p,this._calculateUniqueValues(w,!T&&o.returnDistinctValues))}const v=l.get(p);for(const w in v){const{count:z,data:P,items:ie,itemPositions:ze}=v[w],se=P.join(",");if(!d||o.validateItems(ie,d)){const $=r.get(se)||{attributes:{}};if(T){$.aggregateGeometries||($.aggregateGeometries={});const{aggregateGeometries:R,outStatisticFieldName:M}=await this._getAggregateGeometry(_,ie);$.aggregateGeometries[M]=R}else{let R=null;if(E)R=z;else{const M=this._getAttributeValues(o,p,s),ae=ze.map(Ee=>M[Ee]);R=y&&"statisticParameters"in _?this._getPercentileValue(_,ae):this._getStatisticValue(_,ae,null,o.returnDistinctValues)}$.attributes[F]=R}let $e=0;c.forEach((R,M)=>$.attributes[this.fieldsIndex.get(R)?R:"EXPR_"+ ++$e]=P[M]),r.set(se,$)}}}else if(T){e.aggregateGeometries||(e.aggregateGeometries={});const{aggregateGeometries:v,outStatisticFieldName:w}=await this._getAggregateGeometry(_,this.items);e.aggregateGeometries[w]=v}else{const v=this._getAttributeValues(o,p,s);e.attributes[F]=y&&"statisticParameters"in _?this._getPercentileValue(_,v):this._getStatisticValue(_,v,n,o.returnDistinctValues)}i.push({name:F,alias:F,type:"esriFieldTypeDouble"})}const g=f?Array.from(r.values()):[e];return this._sortFeatures(g,m,(V,F)=>V.attributes[F]),{fields:i,features:g}}async _getAggregateGeometry(t,e){const i=await Fe(()=>import("./geometryEngineJSON.7ef32ff7.js"),["assets/geometryEngineJSON.7ef32ff7.js","assets/geometryEngineBase.871c2f6a.js","assets/geometryEngineJSON.7d40f72f.js","assets/json.5152e73f.js"]),{statisticType:s,outStatisticFieldName:n}=t,{featureAdapter:l,spatialReference:r,geometryType:o,hasZ:u,hasM:c}=this,d=e.map(f=>U(o,u,c,l.getGeometry(f))),m=i.convexHull(r,d,!0)[0],h={aggregateGeometries:null,outStatisticFieldName:null};if(s==="EnvelopeAggregate"){const f=m?Ke(m):X(i.union(r,d));h.aggregateGeometries={...f,spatialReference:r},h.outStatisticFieldName=n||"extent"}else if(s==="CentroidAggregate"){const f=m?We(m):et(X(i.union(r,d)));h.aggregateGeometries={x:f[0],y:f[1],spatialReference:r},h.outStatisticFieldName=n||"centroid"}else s==="ConvexHullAggregate"&&(h.aggregateGeometries=m,h.outStatisticFieldName=n||"convexHull");return h}_getStatisticValue(t,e,i,s){const{onStatisticField:n,statisticType:l}=t;let r=null;return r=i!=null&&i.has(n)?i.get(n):le(this.fieldsIndex.get(n))?ue({values:e,returnDistinct:s}):ce({values:s?[...new Set(e)]:e,minValue:null,maxValue:null,useSampleStdDev:!0}),i&&i.set(n,r),r[l==="var"?"variance":l]}_getPercentileValue(t,e){const{onStatisticField:i,statisticParameters:s,statisticType:n}=t,{value:l,orderBy:r}=s,o=this.fieldsIndex.get(i);return ht(e,{value:l,orderBy:r,fieldType:o==null?void 0:o.type,isDiscrete:n==="percentile_disc"})}_getAttributeValues(t,e,i){if(i.has(e))return i.get(e);const s=this.fieldsIndex.get(e),n=this.items.map(l=>t.getFieldValue(l,e,s));return i.set(e,n),n}_getAttributeDataValues(t,e){return this.items.map(i=>t.getDataValue(i,{field:e.field,field2:e.field2,field3:e.field3,fieldDelimiter:e.fieldDelimiter,normalizationField:e.normalizationField,normalizationType:e.normalizationType,normalizationTotal:e.normalizationTotal}))}async _getAttributeExpressionValues(t,e,i){const{arcadeUtils:s}=await tt(),n=s.createFunction(e),l=i&&s.getViewInfo(i);return t.getExpressionValues(this.items,n,l,s)}_calculateUniqueValues(t,e){const i={},s=this.items,n=s.length;for(let l=0;l<n;l++){const r=s[l],o=[];for(const c of t)o.push(c[l]);const u=o.join(",");i[u]==null?i[u]={count:1,data:o,items:[r],itemPositions:[l]}:(e||i[u].count++,i[u].items.push(r),i[u].itemPositions.push(l))}return i}async _getDataValues(t){const e=new O(this.query,this.featureAdapter,this.fieldsIndex),{valueExpression:i,field:s,normalizationField:n,normalizationType:l,normalizationTotal:r,scale:o}=t,u=i?{viewingMode:"map",scale:o,spatialReference:this.query.outSR||this.spatialReference}:null;return i?this._getAttributeExpressionValues(e,i,u):this._getAttributeDataValues(e,{field:s,field2:t.field2,field3:t.field3,fieldDelimiter:t.fieldDelimiter,normalizationField:n,normalizationType:l,normalizationTotal:r})}}function vt(a,t,e,i){const s=i.x-e.x,n=i.y-e.y,l=s*s+n*n,r=(t.x-e.x)*s+(t.y-e.y)*n,o=Math.min(1,Math.max(0,r/l));a.x=e.x+s*o,a.y=e.y+n*o}function ge(a,t){return a?t?4:3:t?3:2}var j;(function(a){a[a.NONE=0]="NONE",a[a.EDGE=1]="EDGE",a[a.VERTEX=2]="VERTEX"})(j||(j={}));class pe{constructor(t,e){this.coords=t,this.coordsIndex=e}get x(){return this.coords[this.coordsIndex]}get y(){return this.coords[this.coordsIndex+1]}get z(){return this.coords[this.coordsIndex+2]}}export{Nt as A,j as D,Q as E,he as F,yt as J,Dt as M,Et as a,Mt as b,te as c,Te as f,Z as g,N as l,$t as o,U as v,zt as z};