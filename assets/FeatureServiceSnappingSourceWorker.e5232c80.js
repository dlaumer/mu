import{e as o,y as l,a as b,G as B,bP as k,hW as w,kI as R,t as _,gM as A,eh as x,ah as G,r as h,ol as Z,an as J,g as Q,u as W,z as T,w as X,dr as Y,O as K,av as ee,b as te,F as se,qZ as ie,q_ as re,m1 as ne,q$ as ae,gs as oe,eF as le,lo as ue,mh as he,M as ce,df as S,lp as P,bW as L,db as de,aJ as pe,bp as H,a5 as fe,a4 as D,aR as g,f as N,dC as _e,am as $,bs as ge}from"./index.f0143bd6.js";import{g as ye}from"./FeatureStore.368a7cb3.js";import{e as me}from"./QueryEngine.5f539ff5.js";import{r as U,a as M,n as z}from"./symbologySnappingCandidates.75390873.js";import{o as Ee}from"./BoundsStore.d65199ec.js";import"./optimizedFeatureQueryEngineAdapter.80f55770.js";import"./centroid.869e75fe.js";import"./QueryEngineResult.d691c7bb.js";import"./WhereClause.48310df0.js";import"./executionError.c4c51b90.js";import"./utils.ecbb20c7.js";import"./generateRendererUtils.fcfe376e.js";import"./json.5152e73f.js";import"./QueryEngineCapabilities.ea616409.js";import"./PooledRBush.3515f326.js";import"./quickselect.2c5f2780.js";let v=class extends B{constructor(){super(...arguments),this.updating=!1,this._pending=[]}push(e,t){this._pending.push({promise:e,callback:t}),this._pending.length===1&&this._process()}_process(){if(!this._pending.length)return void(this.updating=!1);this.updating=!0;const e=this._pending[0];e.promise.then(t=>e.callback(t)).catch(()=>{}).then(()=>{this._pending.shift(),this._process()})}};o([l()],v.prototype,"updating",void 0),v=o([b("esri.core.AsyncSequence")],v);class Fe{constructor(t,s){this.data=t,this.resolution=s,this.state={type:a.CREATED},this.alive=!0}process(t){switch(this.state.type){case a.CREATED:return this.state=this._gotoFetchCount(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_COUNT:break;case a.FETCHED_COUNT:return this.state=this._gotoFetchFeatures(this.state,t),this.state.task.promise.then(t.resume,t.resume);case a.FETCH_FEATURES:break;case a.FETCHED_FEATURES:this.state=this._goToDone(this.state,t);case a.DONE:}return null}get debugInfo(){return{data:this.data,featureCount:this._featureCount,state:this._stateToString}}get _featureCount(){switch(this.state.type){case a.CREATED:case a.FETCH_COUNT:return 0;case a.FETCHED_COUNT:return this.state.featureCount;case a.FETCH_FEATURES:return this.state.previous.featureCount;case a.FETCHED_FEATURES:return this.state.features.length;case a.DONE:return this.state.previous.features.length}}get _stateToString(){switch(this.state.type){case a.CREATED:return"created";case a.FETCH_COUNT:return"fetch-count";case a.FETCHED_COUNT:return"fetched-count";case a.FETCH_FEATURES:return"fetch-features";case a.FETCHED_FEATURES:return"fetched-features";case a.DONE:return"done"}}_gotoFetchCount(t,s){return{type:a.FETCH_COUNT,previous:t,task:w(async i=>{const r=await R(s.fetchCount(this,i));this.state.type===a.FETCH_COUNT&&(this.state=this._gotoFetchedCount(this.state,r.ok?r.value:1/0))})}}_gotoFetchedCount(t,s){return{type:a.FETCHED_COUNT,featureCount:s,previous:t}}_gotoFetchFeatures(t,s){return{type:a.FETCH_FEATURES,previous:t,task:w(async i=>{const r=await R(s.fetchFeatures(this,t.featureCount,i));this.state.type===a.FETCH_FEATURES&&(this.state=this._gotoFetchedFeatures(this.state,r.ok?r.value:[]))})}}_gotoFetchedFeatures(t,s){return{type:a.FETCHED_FEATURES,previous:t,features:s}}_goToDone(t,s){return s.finish(this,t.features),{type:a.DONE,previous:t}}reset(){const t=this.state;switch(this.state={type:a.CREATED},t.type){case a.CREATED:case a.FETCHED_COUNT:case a.FETCHED_FEATURES:case a.DONE:break;case a.FETCH_COUNT:case a.FETCH_FEATURES:t.task.abort()}}intersects(t){return!(!_(t)&&this.data.extent)||(A(t,j),x(this.data.extent,j))}}var a;(function(e){e[e.CREATED=0]="CREATED",e[e.FETCH_COUNT=1]="FETCH_COUNT",e[e.FETCHED_COUNT=2]="FETCHED_COUNT",e[e.FETCH_FEATURES=3]="FETCH_FEATURES",e[e.FETCHED_FEATURES=4]="FETCHED_FEATURES",e[e.DONE=5]="DONE"})(a||(a={}));const j=k();let c=class extends G{get _minimumVerticesPerFeature(){var e;switch((e=this.store)==null?void 0:e.featureStore.geometryType){case"esriGeometryPoint":case"esriGeometryMultipoint":return 1;case"esriGeometryPolygon":return 4;case"esriGeometryPolyline":return 2}}set filter(e){const t=this._get("filter"),s=this._filterProperties(e);JSON.stringify(t)!==JSON.stringify(s)&&this._set("filter",s)}set customParameters(e){const t=this._get("customParameters");JSON.stringify(t)!==JSON.stringify(e)&&this._set("customParameters",e)}get _configuration(){return{filter:this.filter,customParameters:this.customParameters,tileInfo:this.tileInfo,tileSize:this.tileSize}}set tileInfo(e){const t=this._get("tileInfo");t!==e&&(h(e)&&h(t)&&JSON.stringify(e)===JSON.stringify(t)||(this._set("tileInfo",e),this.store.tileInfo=e))}set tileSize(e){this._get("tileSize")!==e&&this._set("tileSize",e)}get updating(){return this.updatingExcludingEdits||this._pendingEdits.updating}get updatingExcludingEdits(){return this.updatingHandles.updating}get hasZ(){return this.store.featureStore.hasZ}constructor(e){super(e),this.tilesOfInterest=[],this.availability=0,this._pendingTiles=new Map,this._pendingEdits=new v,this._pendingEditsAbortController=new AbortController}initialize(){this._initializeFetchExtent(),this.updatingHandles.add(()=>this._configuration,()=>this.refresh()),this.updatingHandles.add(()=>this.tilesOfInterest,(e,t)=>{Z(e,t,({id:s},{id:i})=>s===i)||this._process()},J)}destroy(){this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._pendingTiles.clear(),this.store.destroy(),this.tilesOfInterest.length=0,this._pendingEditsAbortController.abort(),this._pendingEditsAbortController=null}refresh(){this.store.refresh(),this._pendingTiles.forEach(e=>this._deletePendingTile(e)),this._process()}applyEdits(e){this._pendingEdits.push(e,async t=>{if(t.addedFeatures.length===0&&t.updatedFeatures.length===0&&t.deletedFeatures.length===0)return;for(const[,i]of this._pendingTiles)i.reset();const s={...t,deletedFeatures:t.deletedFeatures.map(({objectId:i,globalId:r})=>i&&i!==-1?i:this._lookupObjectIdByGlobalId(r))};await this.updatingHandles.addPromise(this.store.processEdits(s,(i,r)=>this._queryFeaturesById(i,r),this._pendingEditsAbortController.signal)),this._processPendingTiles()})}_initializeFetchExtent(){if(!this.capabilities.query.supportsExtent||!Q(this.url))return;const e=w(async t=>{var s;try{const i=await W(this.url,new T({where:"1=1",outSpatialReference:this.spatialReference,cacheHint:!!this.capabilities.query.supportsCacheHint||void 0}),{query:this._configuration.customParameters,signal:t});this.store.extent=X.fromJSON((s=i.data)==null?void 0:s.extent)}catch(i){Y(i),K.getLogger(this.declaredClass).warn("Failed to fetch data extent",i)}});this.updatingHandles.addPromise(e.promise.then(()=>this._process())),this.handles.add(ee(()=>e.abort()))}get debugInfo(){return{numberOfFeatures:this.store.featureStore.numFeatures,tilesOfInterest:this.tilesOfInterest,pendingTiles:Array.from(this._pendingTiles.values()).map(e=>e.debugInfo),storedTiles:this.store.debugInfo}}_process(){this._markTilesNotAlive(),this._createPendingTiles(),this._deletePendingTiles(),this._processPendingTiles()}_markTilesNotAlive(){for(const[,e]of this._pendingTiles)e.alive=!1}_createPendingTiles(){const e=this._collectMissingTilesInfo();if(this._setAvailability(_(e)?1:e.coveredArea/e.fullArea),!_(e))for(const{data:t,resolution:s}of e.missingTiles){const i=this._pendingTiles.get(t.id);i?(i.resolution=s,i.alive=!0):this._createPendingTile(t,s)}}_collectMissingTilesInfo(){let e=null;for(let t=this.tilesOfInterest.length-1;t>=0;t--){const s=this.tilesOfInterest[t],i=this.store.process(s,(r,n)=>this._verifyTileComplexity(r,n));_(e)?e=i:e.prepend(i)}return e}_deletePendingTiles(){for(const[,e]of this._pendingTiles)e.alive||this._deletePendingTile(e)}_processPendingTiles(){const e={fetchCount:(t,s)=>this._fetchCount(t,s),fetchFeatures:(t,s,i)=>this._fetchFeatures(t,s,i),finish:(t,s)=>this._finishPendingTile(t,s),resume:()=>this._processPendingTiles()};if(this._ensureFetchAllCounts(e))for(const[,t]of this._pendingTiles)this._verifyTileComplexity(this.store.getFeatureCount(t.data),t.resolution)&&this.updatingHandles.addPromise(t.process(e))}_verifyTileComplexity(e,t){return this._verifyVertexComplexity(e)&&this._verifyFeatureDensity(e,t)}_verifyVertexComplexity(e){return e*this._minimumVerticesPerFeature<Te}_verifyFeatureDensity(e,t){if(_(this.tileInfo))return!1;const s=this.tileSize*t;return e*(ve/(s*s))<Se}_ensureFetchAllCounts(e){let t=!0;for(const[,s]of this._pendingTiles)s.state.type<a.FETCHED_COUNT&&this.updatingHandles.addPromise(s.process(e)),s.state.type<=a.FETCH_COUNT&&(t=!1);return t}_finishPendingTile(e,t){this.store.add(e.data,t),this._deletePendingTile(e),this._updateAvailability()}_updateAvailability(){const e=this._collectMissingTilesInfo();this._setAvailability(_(e)?1:e.coveredArea/e.fullArea)}_setAvailability(e){this._set("availability",e)}_createPendingTile(e,t){const s=new Fe(e,t);return this._pendingTiles.set(e.id,s),s}_deletePendingTile(e){e.reset(),this._pendingTiles.delete(e.data.id)}async _fetchCount(e,t){return this.store.fetchCount(e.data,this.url,this._createCountQuery(e),{query:this.customParameters,timeout:I,signal:t})}async _fetchFeatures(e,t,s){let i=0;const r=[];let n=0,u=t;for(;;){const f=this._createFeaturesQuery(e),p=this._setPagingParameters(f,i,u),{features:d,exceededTransferLimit:y}=await this._queryFeatures(f,s);p&&(i+=te(f.num)),n+=d.length;for(const V of d)r.push(V);if(u=t-n,!p||!y||u<=0)return r}}_filterProperties(e){return _(e)?{where:"1=1",gdbVersion:void 0,timeExtent:void 0}:{where:e.where||"1=1",timeExtent:e.timeExtent,gdbVersion:e.gdbVersion}}_lookupObjectIdByGlobalId(e){const t=this.globalIdField,s=this.objectIdField;if(_(t))throw new Error("Expected globalIdField to be defined");let i=null;if(this.store.featureStore.forEach(r=>{var n;e===r.attributes[t]&&(i=(n=r.objectId)!=null?n:r.attributes[s])}),_(i))throw new Error(`Expected to find a feature with globalId ${e}`);return i}_queryFeaturesById(e,t){const s=this._createFeaturesQuery();return s.objectIds=e,this._queryFeatures(s,t)}_queryFeatures(e,t){return this.capabilities.query.supportsFormatPBF?this._queryFeaturesPBF(e,t):this._queryFeaturesJSON(e,t)}async _queryFeaturesPBF(e,t){const{sourceSpatialReference:s}=this,{data:i}=await se(this.url,e,new ie({sourceSpatialReference:s}),{query:this._configuration.customParameters,timeout:I,signal:t});return re(i)}async _queryFeaturesJSON(e,t){const{sourceSpatialReference:s}=this,{data:i}=await ne(this.url,e,s,{query:this._configuration.customParameters,timeout:I,signal:t});return ae(i,this.objectIdField)}_createCountQuery(e){const t=this._createBaseQuery(e);return this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0),t}_createFeaturesQuery(e=null){const t=this._createBaseQuery(e);return t.outFields=this.globalIdField?[this.globalIdField,this.objectIdField]:[this.objectIdField],t.returnGeometry=!0,h(e)&&(this.capabilities.query.supportsResultType?t.resultType="tile":this.capabilities.query.supportsCacheHint&&(t.cacheHint=!0)),t}_createBaseQuery(e){const t=new T({returnZ:this.hasZ,returnM:!1,geometry:h(this.tileInfo)&&h(e)?oe(e.data.extent,this.tileInfo.spatialReference):void 0}),s=this._configuration.filter;return h(s)&&(t.where=s.where,t.gdbVersion=s.gdbVersion,t.timeExtent=s.timeExtent),t.outSpatialReference=this.spatialReference,t}_setPagingParameters(e,t,s){if(!this.capabilities.query.supportsPagination)return!1;const{supportsMaxRecordCountFactor:i,supportsCacheHint:r,tileMaxRecordCount:n,maxRecordCount:u,supportsResultType:f}=this.capabilities.query,p=i?T.MAX_MAX_RECORD_COUNT_FACTOR:1,d=p*((f||r)&&n?n:u||Ce);return e.start=t,i?(e.maxRecordCountFactor=Math.min(p,Math.ceil(s/d)),e.num=Math.min(s,e.maxRecordCountFactor*d)):e.num=Math.min(s,d),!0}};o([l({constructOnly:!0})],c.prototype,"url",void 0),o([l({constructOnly:!0})],c.prototype,"objectIdField",void 0),o([l({constructOnly:!0})],c.prototype,"globalIdField",void 0),o([l({constructOnly:!0})],c.prototype,"capabilities",void 0),o([l({constructOnly:!0})],c.prototype,"sourceSpatialReference",void 0),o([l({constructOnly:!0})],c.prototype,"spatialReference",void 0),o([l({constructOnly:!0})],c.prototype,"store",void 0),o([l({readOnly:!0})],c.prototype,"_minimumVerticesPerFeature",null),o([l()],c.prototype,"filter",null),o([l()],c.prototype,"customParameters",null),o([l({readOnly:!0})],c.prototype,"_configuration",null),o([l()],c.prototype,"tileInfo",null),o([l()],c.prototype,"tileSize",null),o([l()],c.prototype,"tilesOfInterest",void 0),o([l({readOnly:!0})],c.prototype,"updating",null),o([l({readOnly:!0})],c.prototype,"updatingExcludingEdits",null),o([l({readOnly:!0})],c.prototype,"availability",void 0),o([l()],c.prototype,"hasZ",null),c=o([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTiledFetcher")],c);const Ce=2e3,I=6e5,Te=1e6,ve=25,Se=1;class be{constructor(){this._store=new Map,this._byteSize=0}set(t,s){this.delete(t),this._store.set(t,s),this._byteSize+=s.byteSize}delete(t){const s=this._store.get(t);return!!this._store.delete(t)&&(s!=null&&(this._byteSize-=s.byteSize),!0)}get(t){return this._used(t),this._store.get(t)}has(t){return this._used(t),this._store.has(t)}clear(){this._store.clear()}applyByteSizeLimit(t,s){for(const[i,r]of this._store){if(this._byteSize<=t)break;this.delete(i),s(r)}}values(){return this._store.values()}[Symbol.iterator](){return this._store[Symbol.iterator]()}_used(t){const s=this._store.get(t);s&&(this._store.delete(t),this._store.set(t,s))}}let F=class extends B{constructor(e){super(e),this.tileInfo=null,this.extent=null,this.maximumByteSize=10*le.MEGABYTES,this._tileBounds=new Ee,this._tiles=new be,this._refCounts=new Map,this._tileFeatureCounts=new Map,this._tmpBoundingRect=k()}add(e,t){const s=[];for(const i of t)this._referenceFeature(i.objectId)===E.ADDED&&s.push(i);this._addTileStorage(e,new Set(t.map(i=>i.objectId)),Ie(t)),this.featureStore.addMany(s),this._tiles.applyByteSizeLimit(this.maximumByteSize,i=>this._removeTileStorage(i))}destroy(){this.clear(),this._tileFeatureCounts.clear()}clear(){this.featureStore.clear(),this._tileBounds.clear(),this._tiles.clear(),this._refCounts.clear()}refresh(){this.clear(),this._tileFeatureCounts.clear()}processEdits(e,t,s){return this._processEditsDelete(e.deletedFeatures.concat(e.updatedFeatures)),this._processEditsRefetch(e.addedFeatures.concat(e.updatedFeatures),t,s)}_addTileStorage(e,t,s){const i=e.id;this._tiles.set(i,new Ae(e,t,s)),this._tileBounds.set(i,e.extent),this._tileFeatureCounts.set(i,t.size)}_remove({id:e}){const t=this._tiles.get(e);t&&this._removeTileStorage(t)}_removeTileStorage(e){const t=[];for(const i of e.objectIds)this._unreferenceFeature(i)===E.REMOVED&&t.push(i);this.featureStore.removeManyById(t);const s=e.data.id;this._tiles.delete(s),this._tileBounds.delete(s)}_processEditsDelete(e){this.featureStore.removeManyById(e);for(const[,t]of this._tiles){for(const s of e)t.objectIds.delete(s);this._tileFeatureCounts.set(t.data.id,t.objectIds.size)}for(const t of e)this._refCounts.delete(t)}async _processEditsRefetch(e,t,s){const i=(await t(e,s)).features,{hasZ:r,hasM:n}=this.featureStore;for(const u of i){const f=he(this._tmpBoundingRect,u.geometry,r,n);_(f)||this._tileBounds.forEachInBounds(f,p=>{const d=this._tiles.get(p);this.featureStore.add(u);const y=u.objectId;d.objectIds.has(y)||(d.objectIds.add(y),this._referenceFeature(y),this._tileFeatureCounts.set(d.data.id,d.objectIds.size))})}}process(e,t=()=>!0){if(_(this.tileInfo)||!e.extent||h(this.extent)&&!x(A(this.extent,this._tmpBoundingRect),e.extent))return new O(e);if(this._tiles.has(e.id))return new O(e);const s=this._createTileTree(e,this.tileInfo);return this._simplify(s,t,null,0,1),this._collectMissingTiles(e,s,this.tileInfo)}get debugInfo(){return Array.from(this._tiles.values()).map(({data:e})=>({data:e,featureCount:this._tileFeatureCounts.get(e.id)||0}))}getFeatureCount(e){var t;return(t=this._tileFeatureCounts.get(e.id))!=null?t:0}async fetchCount(e,t,s,i){const r=this._tileFeatureCounts.get(e.id);if(r!=null)return r;const n=await ce(t,s,i);return this._tileFeatureCounts.set(e.id,n.data.count),n.data.count}_createTileTree(e,t){const s=new q(e.level,e.row,e.col);return t.updateTileInfo(s,S.ExtrapolateOptions.POWER_OF_TWO),this._tileBounds.forEachInBounds(e.extent,i=>{var n;const r=(n=this._tiles.get(i))==null?void 0:n.data;r&&this._tilesAreRelated(e,r)&&this._populateChildren(s,r,t,this._tileFeatureCounts.get(r.id)||0)}),s}_tilesAreRelated(e,t){if(!e||!t)return!1;if(e.level===t.level)return e.row===t.row&&e.col===t.col;const s=e.level<t.level,i=s?e:t,r=s?t:e,n=1<<r.level-i.level;return Math.floor(r.row/n)===i.row&&Math.floor(r.col/n)===i.col}_populateChildren(e,t,s,i){const r=t.level-e.level-1;if(r<0)return void(e.isLeaf=!0);const n=t.row>>r,u=t.col>>r,f=e.row<<1,p=u-(e.col<<1)+(n-f<<1),d=e.children[p];if(h(d))this._populateChildren(d,t,s,i);else{const y=new q(e.level+1,n,u);s.updateTileInfo(y,S.ExtrapolateOptions.POWER_OF_TWO),e.children[p]=y,this._populateChildren(y,t,s,i)}}_simplify(e,t,s,i,r){const n=r*r;if(e.isLeaf)return t(this.getFeatureCount(e),r)?0:(this._remove(e),h(s)&&(s.children[i]=null),n);const u=r/2,f=u*u;let p=0;for(let d=0;d<e.children.length;d++){const y=e.children[d];p+=h(y)?this._simplify(y,t,e,d,u):f}return p===0?this._mergeChildren(e):1-p/n<Re&&(this._purge(e),h(s)&&(s.children[i]=null),p=n),p}_mergeChildren(e){const t=new Set;let s=0;this._forEachLeaf(e,i=>{const r=this._tiles.get(i.id);if(r){s+=r.byteSize;for(const n of r.objectIds)t.has(n)||(t.add(n),this._referenceFeature(n));this._remove(i)}}),this._addTileStorage(e,t,s),e.isLeaf=!0,e.children[0]=e.children[1]=e.children[2]=e.children[3]=null,this._tileFeatureCounts.set(e.id,t.size)}_forEachLeaf(e,t){for(const s of e.children)_(s)||(s.isLeaf?t(s):this._forEachLeaf(s,t))}_purge(e){if(!_(e))if(e.isLeaf)this._remove(e);else for(let t=0;t<e.children.length;t++){const s=e.children[t];this._purge(s),e.children[t]=null}}_collectMissingTiles(e,t,s){const i=new xe(s,e,this.extent);return this._collectMissingTilesRecurse(t,i,1),i.info}_collectMissingTilesRecurse(e,t,s){if(e.isLeaf)return;if(!e.hasChildren)return void t.addMissing(e.level,e.row,e.col,s);const i=s/2;for(let r=0;r<e.children.length;r++){const n=e.children[r];_(n)?t.addMissing(e.level+1,(e.row<<1)+((2&r)>>1),(e.col<<1)+(1&r),i):this._collectMissingTilesRecurse(n,t,i)}}_referenceFeature(e){const t=(this._refCounts.get(e)||0)+1;return this._refCounts.set(e,t),t===1?E.ADDED:E.UNCHANGED}_unreferenceFeature(e){const t=(this._refCounts.get(e)||0)-1;return t===0?(this._refCounts.delete(e),E.REMOVED):(t>0&&this._refCounts.set(e,t),E.UNCHANGED)}get test(){return{tiles:Array.from(this._tiles.values()).map(e=>`${e.data.id}:[${Array.from(e.objectIds)}]`),featureReferences:Array.from(this._refCounts.keys()).map(e=>`${e}:${this._refCounts.get(e)}`)}}};function Ie(e){return e.reduce((t,s)=>t+we(s),0)}function we(e){return 32+Oe(e.geometry)+ue(e.attributes)}function Oe(e){if(_(e))return 0;const t=P(e.lengths,4);return 32+P(e.coords,8)+t}o([l({constructOnly:!0})],F.prototype,"featureStore",void 0),o([l()],F.prototype,"tileInfo",void 0),o([l()],F.prototype,"extent",void 0),o([l()],F.prototype,"maximumByteSize",void 0),F=o([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceTileStore")],F);class Ae{constructor(t,s,i){this.data=t,this.objectIds=s,this.byteSize=i}}class q{constructor(t,s,i){this.level=t,this.row=s,this.col=i,this.isLeaf=!1,this.extent=null,this.children=[null,null,null,null]}get hasChildren(){return!this.isLeaf&&(h(this.children[0])||h(this.children[1])||h(this.children[2])||h(this.children[3]))}}class O{constructor(t,s=[]){this.missingTiles=s,this.fullArea=0,this.coveredArea=0,this.fullArea=L(t.extent),this.coveredArea=this.fullArea}prepend(t){this.missingTiles=t.missingTiles.concat(this.missingTiles),this.coveredArea+=t.coveredArea,this.fullArea+=t.fullArea}}class xe{constructor(t,s,i){this._tileInfo=t,this._extent=null,this.info=new O(s),h(i)&&(this._extent=A(i))}addMissing(t,s,i,r){const n=new de(null,t,s,i);this._tileInfo.updateTileInfo(n,S.ExtrapolateOptions.POWER_OF_TWO),_(n.extent)||h(this._extent)&&!x(this._extent,n.extent)||(this.info.missingTiles.push({data:n,resolution:r}),this.info.coveredArea-=L(n.extent))}}const Re=.18751;var E;(function(e){e[e.ADDED=0]="ADDED",e[e.REMOVED=1]="REMOVED",e[e.UNCHANGED=2]="UNCHANGED"})(E||(E={}));let C=class extends pe.EventedAccessor{constructor(){super(...arguments),this._isInitializing=!0,this.remoteClient=null,this._whenSetup=H(),this._elevationAligner=U(),this._elevationFilter=M(),this._symbologyCandidatesFetcher=z(),this._handles=new fe,this._updatingHandles=new D,this._editsUpdatingHandles=new D,this._pendingApplyEdits=new Map,this._alignPointsInFeatures=async(e,t)=>{const s={points:e},i=await this.remoteClient.invoke("alignElevation",s,{signal:t});return g(t),i},this._getSymbologyCandidates=async(e,t)=>{const s={candidates:e,spatialReference:this._spatialReference.toJSON()},i=await this.remoteClient.invoke("getSymbologyCandidates",s,{signal:t});return g(t),i}}get updating(){return this.updatingExcludingEdits||this._editsUpdatingHandles.updating||this._featureFetcher.updating}get updatingExcludingEdits(){return this._featureFetcher.updatingExcludingEdits||this._isInitializing||this._updatingHandles.updating}destroy(){var e,t,s,i;(e=this._featureFetcher)==null||e.destroy(),(t=this._queryEngine)==null||t.destroy(),(s=this._featureStore)==null||s.clear(),(i=this._handles)==null||i.destroy()}async setup(e){if(this.destroyed)return{result:{}};const{geometryType:t,objectIdField:s,timeInfo:i,fields:r}=e.serviceInfo,{hasZ:n}=e,u=N.fromJSON(e.spatialReference);this._spatialReference=u,this._featureStore=new ye({...e.serviceInfo,hasZ:n,hasM:!1}),this._queryEngine=new me({spatialReference:e.spatialReference,featureStore:this._featureStore,geometryType:t,fields:r,hasZ:n,hasM:!1,objectIdField:s,timeInfo:i}),this._featureFetcher=new c({store:new F({featureStore:this._featureStore}),url:e.serviceInfo.url,objectIdField:e.serviceInfo.objectIdField,globalIdField:e.serviceInfo.globalIdField,capabilities:e.serviceInfo.capabilities,spatialReference:u,sourceSpatialReference:N.fromJSON(e.serviceInfo.spatialReference)});const f=e.configuration.viewType==="3d";return this._elevationAligner=U(f,{elevationInfo:h(e.elevationInfo)?_e.fromJSON(e.elevationInfo):null,alignPointsInFeatures:this._alignPointsInFeatures,spatialReference:u}),this._elevationFilter=M(f),this._handles.add([$(()=>this._featureFetcher.availability,p=>this.emit("notify-availability",{availability:p}),J),$(()=>this.updating,()=>this._notifyUpdating())]),this._whenSetup.resolve(),this._isInitializing=!1,this.configure(e.configuration)}async configure(e){return await this._updatingHandles.addPromise(this._whenSetup.promise),this._updateFeatureFetcherConfiguration(e),{result:{}}}async fetchCandidates(e,t){await this._whenSetup.promise,g(t);const s=Pe(e),i=h(t)?t.signal:null,r=await this._queryEngine.executeQueryForSnapping(s,i);g(i);const n=await this._elevationAligner.alignCandidates(r.candidates,i);g(i);const u=await this._symbologyCandidatesFetcher.fetch(n,i);g(i);const f=u.length===0?n:n.concat(u);return{result:{candidates:this._elevationFilter.filter(s,f)}}}async updateTiles(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),this._featureFetcher.tileSize=e.tileSize,this._featureFetcher.tilesOfInterest=e.tiles,this._featureFetcher.tileInfo=h(e.tileInfo)?S.fromJSON(e.tileInfo):null,m}async refresh(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),this._featureFetcher.refresh(),m}async whenNotUpdating(e,t){return await this._updatingHandles.addPromise(this._whenSetup.promise),g(t),await ge(()=>!this.updatingExcludingEdits,t),g(t),m}async getDebugInfo(e,t){return g(t),{result:this._featureFetcher.debugInfo}}async beginApplyEdits(e,t){this._updatingHandles.addPromise(this._whenSetup.promise),g(t);const s=H();return this._pendingApplyEdits.set(e.id,s),this._featureFetcher.applyEdits(s.promise),this._editsUpdatingHandles.addPromise(s.promise),m}async endApplyEdits(e,t){const s=this._pendingApplyEdits.get(e.id);return s&&s.resolve(e.edits),g(t),m}async notifyElevationSourceChange(e,t){return this._elevationAligner.notifyElevationSourceChange(),m}async notifySymbologyChange(e,t){return this._symbologyCandidatesFetcher.notifySymbologyChange(),m}async setSymbologySnappingSupported(e){return this._symbologyCandidatesFetcher=z(e,this._getSymbologyCandidates),m}_updateFeatureFetcherConfiguration(e){this._featureFetcher.filter=h(e.filter)?T.fromJSON(e.filter):null,this._featureFetcher.customParameters=e.customParameters}_notifyUpdating(){this.emit("notify-updating",{updating:this.updating})}};o([l({readOnly:!0})],C.prototype,"updating",null),o([l({readOnly:!0})],C.prototype,"updatingExcludingEdits",null),o([l()],C.prototype,"_isInitializing",void 0),C=o([b("esri.views.interactive.snapping.featureSources.featureServiceSource.FeatureServiceSnappingSourceWorker")],C);const Qe=C;function Pe(e){return{point:e.point,mode:e.mode,distance:e.distance,types:e.types,query:h(e.filter)?e.filter:{where:"1=1"}}}const m={result:{}};export{Qe as default};