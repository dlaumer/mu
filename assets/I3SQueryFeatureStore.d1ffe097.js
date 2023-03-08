import{O as he,e as u,y as p,jH as fe,a as X,aI as P,G as Z,bs as ge,b as me,r as h,_ as Ee,t as m,kh as we,ka as J,ki as Se,ha as U,f as z,fQ as _e,fR as H,kj as be,kk as ve,c3 as Fe,bX as Ie,c2 as Re,f8 as xe,gX as Oe,ic as je,kl as $e,gC as N,bv as T,bu as D,bt as K,z as ke,a5 as Qe,a7 as Y,w as Me,d as ee,I as Ce,jZ as Ge,aM as W,bP as Ne,aJ as Te,eq as De,a$ as Ae,km as Je}from"./index.857de027.js";import{a as M,n as te,u as re}from"./DefinitionExpressionSceneLayerView.94a7c03f.js";import{f as Pe}from"./WhereClause.4d85e6be.js";import{Y as Le,X as Ve,m as ne}from"./I3SUtil.d364226c.js";import{e as Be}from"./QueryEngine.c84357d1.js";import{e as Ke}from"./centroid.8ac6ff2c.js";import{L as G}from"./I3SMeshView3D.8a487034.js";const ae="esri.views.3d.layers.i3s.I3SMeshViewFilter",k=he.getLogger(ae);let g=class extends Z{constructor(e){super(e),this._projectionEngineLoaded=!1}initialize(){ge(()=>{var e;return((e=me(this.viewFilter))==null?void 0:e.geometry)||h(this.layerFilter)}).then(()=>this.loadAsyncModule(Ee(()=>import("./geometryEngine.138bdc9f.js"),["assets/geometryEngine.138bdc9f.js","assets/geometryEngineBase.871c2f6a.js","assets/hydrated.eb0a9ff7.js","assets/index.857de027.js","assets/index.3f2fc127.css"]).then(e=>{this.destroyed||(this._geometryEngine=e)})))}get sortedObjectIds(){if(m(this.viewFilter)||m(this.viewFilter.objectIds))return null;const e=we(this.viewFilter.objectIds);return e.sort(),e}get parsedWhereClause(){const e=h(this.viewFilter)?this.viewFilter.where:null;if(m(e)||!e)return null;try{return Pe.create(e,this.layerFieldsIndex)}catch(t){k.error(`Failed to parse filter where clause: ${t}`)}return null}addFilters(e,t,r,i){const n=this.sortedObjectIds;h(n)&&e.push(a=>Le(n,!0,a)),this.addSqlFilter(e,this.parsedWhereClause);const s=M(this._layerMaskGeometries),o=this._geometryEngine;if(h(s)&&h(this.layerFilter)&&h(o)){const a=this.layerFilter.spatialRelationship;e.push((l,f)=>ie(o,l,f,i,t,r,s,a))}const c=M(this._viewMaskGeometries);if(h(c)&&h(this.viewFilter)&&h(o)){const a=this.viewFilter.spatialRelationship;e.push((l,f)=>ie(o,l,f,i,t,r,c,a))}}isMBSGeometryVisible(e,t,r){const i=M(this._layerMaskGeometries),n=this._geometryEngine;if(h(i)&&h(this.layerFilter)&&h(n)){const o=this.layerFilter.spatialRelationship,c=i[0].spatialReference||t;return J(e,r,C,c)?se(n,C,i,c,o):(k.warnOnce("SceneLayer.mask geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}const s=M(this._viewMaskGeometries);if(h(s)&&h(this.viewFilter)&&h(n)){const o=this.viewFilter.spatialRelationship,c=s[0].spatialReference||t;return J(e,r,C,c)?se(n,C,s,c,o):(k.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter for MBS"),!0)}return!0}get parsedGeometry(){const e=M(this._viewMaskGeometries),t=M(this._layerMaskGeometries);return m(e)||m(t)?e||t:t.concat(e)}get _layerMaskGeometries(){const e=this.layerFilter;return m(e)?null:m(this._geometryEngine)?te:e.spatialRelationship==="disjoint"?e.geometries.map(t=>({type:"polygon",rings:t.rings,spatialReference:t.spatialReference,cache:{}})):[e.geometries.reduce((t,r)=>(t.rings=[...t.rings,...r.rings],t),{type:"polygon",rings:[],spatialReference:e.geometries[0].spatialReference,cache:{}})]}get _viewMaskGeometries(){if(m(this.viewFilter))return null;const{geometry:e}=this.viewFilter;if(m(e))return null;if(m(this.viewFilter)||m(this._geometryEngine))return te;const{distance:t,units:r}=this.viewFilter,i=this.viewFilter.spatialRelationship,n=e.type==="mesh"?e.extent:e;if(m(t)||t===0)return A(this._geometryEngine,n,i);const s=r||Se(n.spatialReference);if(n.spatialReference.isWGS84){const a=this._geometryEngine.geodesicBuffer(n,t,s);return A(this._geometryEngine,a,i)}const o=U(n,z.WGS84);if(h(o)){const a=U(this._geometryEngine.geodesicBuffer(o,t,s),n.spatialReference);return A(this._geometryEngine,a,i)}if(!this._projectionEngineLoaded&&(this.loadAsyncModule(_e().then(()=>this._projectionEngineLoaded=!0)),!this._projectionEngineLoaded))return null;let c=null;try{c=H(n,z.WGS84)}catch{}if(c)try{c=H(this._geometryEngine.geodesicBuffer(c,t,s),n.spatialReference)}catch{c=null}return c||k.error(`Filter by geodesic buffer (distance) unsupported, failed to project input geometry (${n.spatialReference.wkid}) to WGS84.`),A(this._geometryEngine,c,i)}get updating(){return re(this._layerMaskGeometries)||re(this._viewMaskGeometries)}static checkSupport(e){return!m(e)&&(e.timeExtent?(k.warn("Filters with a timeExtent are not supported for mesh scene layers"),!1):!!We(e.spatialRelationship)||(k.warn(`Filters with spatialRelationship other than ${ce.join(", ")} are not supported for mesh scene layers`),!1))}};u([p()],g.prototype,"layerFilter",void 0),u([p({type:fe})],g.prototype,"viewFilter",void 0),u([p()],g.prototype,"layerFieldsIndex",void 0),u([p()],g.prototype,"loadAsyncModule",void 0),u([p()],g.prototype,"addSqlFilter",void 0),u([p({readOnly:!0})],g.prototype,"sortedObjectIds",null),u([p({readOnly:!0})],g.prototype,"parsedWhereClause",null),u([p({readOnly:!0})],g.prototype,"parsedGeometry",null),u([p({readOnly:!0})],g.prototype,"_layerMaskGeometries",null),u([p({readOnly:!0})],g.prototype,"_viewMaskGeometries",null),u([p()],g.prototype,"updating",null),u([p()],g.prototype,"_projectionEngineLoaded",void 0),u([p()],g.prototype,"_geometryEngine",void 0),g=u([X(ae)],g);const ce=(e=>e)(["contains","intersects","disjoint"]);function We(e){return e!=null&&ce.includes(e)}var y;function A(e,t,r){if(m(t))return null;if(r==="disjoint"&&t.type==="polygon"){const i=t.rings.length,n=t.spatialReference,s=new Array(i);for(let a=0;a<i;++a){const l=be(1/0,1/0,-1/0,-1/0);ve(l,t.rings[a]),s[a]={type:"polygon",rings:[t.rings[a]],spatialReference:n,cache:{},aabr:l}}s.sort((a,l)=>a.aabr[0]-l.aabr[0]);const o=new Set,c=new Fe;for(let a=0;a<s.length;++a){const l=s[a],f=l.aabr[0];o.forEach(d=>{if(f>=d.aabr[2])return void o.delete(d);if(l.aabr[1]>d.aabr[3]||l.aabr[3]<d.aabr[1]||!e.intersects(l,d))return;l.rings=l.rings.concat(d.rings),Ie(l.aabr,d.aabr,l.aabr),l.cache={},o.delete(d);const w=Re(s,d,s.length,c);s.splice(w,1)}),o.add(l)}for(const a of s)a.aabr=void 0;return s}return[t]}function se(e,t,r,i,n){const s=le(e,t,i);return r.every(o=>ue(e,o,s,n)!==y.DISCARD)}function ie(e,t,r,i,n,s,o,c){const a=o[0].spatialReference||n.spatialReference;if(!J(r.node.mbs,s,C,a))return void k.warnOnce("SceneLayerView.filter.geometry is using unsupported SpatialReference, skipping geometry filter");const l=le(e,C,a),f=qe(c,n,a,i,r.objectHandle);for(const d of o){if(t.length===0)return;switch(ue(e,d,l,c)){case y.DISCARD:return void(t.length=0);case y.KEEP:continue}Ve(t,r.featureIds,w=>Xe(e,d,w,f))}}(function(e){e[e.KEEP=0]="KEEP",e[e.DISCARD=1]="DISCARD",e[e.TEST=2]="TEST"})(y||(y={}));const C=[0,0,0,0];function qe(e,t,r,i,n){const s=t.renderSpatialReference,o=new Map,c={type:"polygon",rings:[[[0,0,0],[0,0,0],[0,0,0],[0,0,0]]],spatialReference:r};c.rings[0][3]=c.rings[0][0];const a={indices:null,data:null,stride:0,startIndex:0,endIndex:0};let l,f;switch(e){case"intersects":l=(d,w,F)=>d.intersects(w,F)?y.KEEP:y.TEST,f=q;break;case"contains":l=(d,w,F)=>d.contains(w,F)?y.TEST:y.DISCARD,f=q;break;default:l=(d,w,F)=>d.disjoint(w,F)?y.TEST:y.DISCARD,f=pe}return{collection:i,object:n,type:e,maskSR:r,renderSR:s,aabbCache:o,triangle:c,positions:a,triangleTest:l,geometryTest:f}}function le(e,t,r){const i={type:"point",x:t[0],y:t[1],hasZ:!1,hasM:!1,spatialReference:r},n=!xe(r)&&!Oe(r),s=Number.isNaN(t[3])?0:je(t[3],0,2*$e.radius),o=n?e.buffer(i,s,1):e.geodesicBuffer(i,s,1);return o.type="polygon",o}function ue(e,t,r,i){switch(i){case"intersects":case"contains":return q(e,t,r);case"disjoint":return pe(e,t,r)}}function q(e,t,r){return e.intersects(t,r)?e.contains(t,r)?y.KEEP:y.TEST:y.DISCARD}function pe(e,t,r){return e.intersects(t,r)?e.contains(t,r)?y.DISCARD:y.TEST:y.KEEP}function Xe(e,t,r,i){const{collection:n,object:s,renderSR:o,maskSR:c,geometryTest:a,aabbCache:l}=i;let f=l.get(r);if(!f){const I=n.getObjectTransform(s);n.getComponentAabb(s,r,v);const S=[[v[0],v[1],0],[v[0],v[4],0],[v[3],v[4],0],[v[3],v[1],0]];for(let E=0;E<4;++E)N(S[E],S[E],I.rotationScale),T(S[E],S[E],I.position),D(S[E],o,S[E],c);f={type:"polygon",rings:[S],spatialReference:c,cache:{}},f.rings[0][4]=f.rings[0][0],l.set(r,f)}switch(a(e,t,f)){case y.DISCARD:return!1;case y.KEEP:return!0}const{triangle:d,triangleTest:w,positions:F}=i,x=d.rings[0][0],O=d.rings[0][1],j=d.rings[0][2],Q=n.getObjectTransform(s);n.getComponentPositions(s,r,F);const{indices:L,data:b,stride:V,startIndex:de,endIndex:ye}=F;for(let I=de;I<ye;I+=3){const S=V*L[I+0],E=V*L[I+1],B=V*L[I+2];switch(K(x,b[S+0],b[S+1],b[S+2]),K(O,b[E+0],b[E+1],b[E+2]),K(j,b[B+0],b[B+1],b[B+2]),N(x,x,Q.rotationScale),N(O,O,Q.rotationScale),N(j,j,Q.rotationScale),T(x,x,Q.position),T(O,O,Q.position),T(j,j,Q.position),D(x,o,x,c),D(O,o,O,c),D(j,o,j,c),w(e,t,d)){case y.DISCARD:return!1;case y.KEEP:return!0}}return i.type!=="intersects"}const v=P(),Ze=Be;let R=class extends Z{get spatialReference(){return this.layerView.view.spatialReference}get layer(){return this.layerView.i3slayer}get defaultQueryJSON(){return new ke({outSpatialReference:this.spatialReference}).toJSON()}get _dataQueryEngine(){return this._ensureDataQueryEngine()}constructor(e){super(e),this._handles=new Qe}initialize(){this._handles.add(this.layerView.on("visible-geometry-changed",()=>this.spatialIndex.events.emit("changed")))}destroy(){this._dataQueryEngineInstance=Y(this._dataQueryEngineInstance),this._handles=Y(this._handles),this._set("layerView",null)}async executeQueryForCount(e,t){return this._dataQueryEngine.executeQueryForCount(this._ensureQueryJSON(e),t)}async executeQueryForExtent(e,t){const{count:r,extent:i}=await this._dataQueryEngine.executeQueryForExtent(this._ensureQueryJSON(e),t);return{count:r,extent:Me.fromJSON(i)}}async executeQueryForIds(e,t){return this._dataQueryEngine.executeQueryForIds(this._ensureQueryJSON(e),t)}async executeQuery(e,t){const r=this._ensureQueryJSON(e);if(r.returnGeometry)throw new ee("feature-store:unsupported-query","returnGeometry is not yet supported for mesh scene layer queries");if(r.returnCentroid)throw new ee("feature-store:unsupported-query","returnCentroid is not yet supported for mesh scene layer queries");const i=await this._dataQueryEngine.executeQuery(r,t),n=Ce.fromJSON(i);return n.features.forEach(s=>{s.geometry=null}),n}_ensureQueryJSON(e){return m(e)?this.defaultQueryJSON:e.toJSON()}_ensureDataQueryEngine(){var c,a;if(this._dataQueryEngineInstance)return this._dataQueryEngineInstance;const e=this.layer.objectIdField||Ge,t="esriGeometryPolygon",r=(a=(c=this.layer.fields)==null?void 0:c.map(l=>l.toJSON()))!=null?a:[],i=this.layerView.view.resourceController.scheduler,n=this.spatialReference.toJSON(),s=this.priority,o=this.spatialIndex;return this._dataQueryEngineInstance=new Ze({hasZ:!0,hasM:!1,geometryType:t,fields:r,timeInfo:null,spatialReference:n,objectIdField:e,featureStore:o,scheduler:i,priority:s}),this._dataQueryEngineInstance}};u([p({constructOnly:!0})],R.prototype,"layerView",void 0),u([p({constructOnly:!0})],R.prototype,"priority",void 0),u([p({constructOnly:!0})],R.prototype,"spatialIndex",void 0),u([p()],R.prototype,"spatialReference",null),u([p()],R.prototype,"layer",null),u([p()],R.prototype,"defaultQueryJSON",null),R=u([X("esri.views.3d.layers.i3s.I3SQueryEngine")],R);class ot{constructor(t){this._objectIdField=t.objectIdField,this._getFeatureExtent=t.getFeatureExtent}getObjectId(t){return t.id}getAttributes(t){const{meta:r,index:i}=t,n={};this._objectIdField&&(n[this._objectIdField]=t.id);const s=h(r.attributeInfo)&&r.attributeInfo.attributeData;if(h(s))for(const o of Object.keys(s))n[o]=ne(s[o],i);return n}getAttribute(t,r){if(r===this._objectIdField)return t.id;const{meta:i,index:n}=t,s=h(i.attributeInfo)&&i.attributeInfo.attributeData;return h(s)?ne(s[r],n):null}getGeometry(t){if(t.geometry)return t.geometry;const[r,i,n,s,o]=this._getFeatureExtent(t,oe);return new W([5],[r,i,n,s,i,n,s,o,n,r,o,n,r,i,n])}getCentroid(t,r){if(t.geometry)return Ke(new W,t.geometry,r.hasZ,r.hasM);const[i,n,s,o,c,a]=this._getFeatureExtent(t,oe);return new W([0],[(i+o)/2,(n+c)/2,(s+a)/2])}cloneWithGeometry(t,r){const{id:i,index:n,meta:s}=t;return{id:i,index:n,meta:s,geometry:r}}}const oe=P(),Ue=P();let $=class extends Z{constructor(e){super(e),this.events=new Te}forEach(e){this.forAllFeatures(t=>(e(t),G.CONTINUE))}forEachBounds(e,t){const r=this.getFeatureExtent;for(const i of e)t(r(i,Ue))}forEachInBounds(e,t){this.forAllFeatures(r=>{const i=this.getFeatureExtent(r,ze);return De(e,Ae(i,He))&&t(r),G.CONTINUE},r=>{if(J(r.node.mbs,this.sourceSpatialReference,_,this.viewSpatialReference),_[0]>=e[0]&&_[2]<=e[2]&&_[1]>=e[1]&&_[3]<=e[3])return G.CONTINUE;const i=Math.max(e[0],Math.min(_[0],e[2])),n=Math.max(e[1],Math.min(_[1],e[3])),s=_[0]-i,o=_[1]-n;return s*s+o*o<=_[3]*_[3]?G.CONTINUE:G.SKIP})}};u([p({constructOnly:!0})],$.prototype,"featureAdapter",void 0),u([p({constructOnly:!0})],$.prototype,"forAllFeatures",void 0),u([p({constructOnly:!0})],$.prototype,"getFeatureExtent",void 0),u([p({constructOnly:!0})],$.prototype,"sourceSpatialReference",void 0),u([p({constructOnly:!0})],$.prototype,"viewSpatialReference",void 0),$=u([X("esri.views.3d.layers.i3s.I3SQueryFeatureStore")],$);const _=Je(),ze=P(),He=Ne();export{g as P,R as h,$ as l,ot as n};