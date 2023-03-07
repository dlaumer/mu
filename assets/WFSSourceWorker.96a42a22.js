import{aR as p,bB as l,hb as u,r as g,h9 as _,D as d,dI as f,b as w,d as h,i3 as E,al as q,O as F}from"./index.860f6be5.js";import{g as x}from"./FeatureStore.d784130d.js";import{g as S,f as T}from"./QueryEngineResult.6fa14b32.js";import{e as b}from"./QueryEngine.a98bf7de.js";import{T as I,I as j}from"./geojson.da697d14.js";import{m as C}from"./sourceUtils.1b624037.js";import{K as P}from"./wfsUtils.1521c588.js";import"./BoundsStore.9b2b5aa5.js";import"./PooledRBush.1e3b3a37.js";import"./quickselect.2c5f2780.js";import"./optimizedFeatureQueryEngineAdapter.116c262c.js";import"./centroid.72dc0856.js";import"./WhereClause.cf03b384.js";import"./executionError.c4c51b90.js";import"./utils.65890d90.js";import"./generateRendererUtils.6e89c565.js";import"./json.5152e73f.js";import"./QueryEngineCapabilities.ea616409.js";import"./xmlUtils.e4562140.js";class V{constructor(){this._queryEngine=null,this._customParameters=null,this._snapshotFeatures=async e=>{var i;const{objectIdField:t}=this._queryEngine,s=await P((i=this._getFeatureUrl)!=null?i:"",this._featureType.typeName,this._getFeatureOutputFormat,{customParameters:this._customParameters,dateFields:this._queryEngine.fieldsIndex.dateFields.map(r=>r.name),signal:e});await I(s),p(e);const a=j(s,{geometryType:this._queryEngine.geometryType,hasZ:!1,objectIdField:t});if(!l(this._queryEngine.spatialReference,u))for(const r of a)g(r.geometry)&&(r.geometry=_(S(d(r.geometry,this._queryEngine.geometryType,!1,!1),u,this._queryEngine.spatialReference)));let n=1;for(const r of a){const o={};C(this._fieldsIndex,o,r.attributes,!0),r.attributes=o,r.attributes[t]==null&&(r.objectId=r.attributes[t]=n++)}return a}}destroy(){var e;(e=this._queryEngine)==null||e.destroy(),this._queryEngine=null}async load(e,t){const{getFeatureUrl:s,getFeatureOutputFormat:a,spatialReference:n,fields:i,geometryType:r,featureType:o,objectIdField:y,customParameters:m}=e;this._featureType=o,this._customParameters=m,this._getFeatureUrl=s,this._getFeatureOutputFormat=a,this._fieldsIndex=new f(i),await this._checkProjection(n),p(t),this._queryEngine=new b({fields:i,geometryType:r,hasM:!1,hasZ:!1,objectIdField:y,spatialReference:n,timeInfo:null,featureStore:new x({geometryType:r,hasM:!1,hasZ:!1})});const c=await this._snapshotFeatures(w(t.signal));return this._queryEngine.featureStore.addMany(c),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async applyEdits(){throw new h("wfs-source:editing-not-supported","applyEdits() is not supported on WFSLayer")}async queryFeatures(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQuery(e,t.signal)}async queryFeatureCount(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForCount(e,t.signal)}async queryObjectIds(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForIds(e,t.signal)}async queryExtent(e={},t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForExtent(e,t.signal)}async querySnapping(e,t={}){return await this._waitSnapshotComplete(),this._queryEngine.executeQueryForSnapping(e,t.signal)}async refresh(e){var t;return this._customParameters=e,(t=this._snapshotTask)==null||t.abort(),this._snapshotTask=E(this._snapshotFeatures),this._snapshotTask.promise.then(s=>{this._queryEngine.featureStore.clear(),s&&this._queryEngine.featureStore.addMany(s)},s=>{this._queryEngine.featureStore.clear(),q(s)||F.getLogger("esri.layers.WFSLayer").error(new h("wfs-layer:getfeature-error","An error occurred during the GetFeature request",{error:s}))}),await this._waitSnapshotComplete(),{extent:(await this._queryEngine.fetchRecomputedExtents()).fullExtent}}async _waitSnapshotComplete(){if(this._snapshotTask&&!this._snapshotTask.finished){try{await this._snapshotTask.promise}catch{}return this._waitSnapshotComplete()}}async _checkProjection(e){try{await T(u,e)}catch{throw new h("unsupported-projection","Projection not supported",{spatialReference:e})}}}export{V as default};
