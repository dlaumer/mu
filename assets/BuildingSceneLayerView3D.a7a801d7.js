import{e as l,y as a,a as v,dv as P,eN as G,af as $,aJ as j,ec as N,t as p,ea as U,jF as B,G as O,a6 as E,r as o,O as g,es as w,dK as x,j as _,jG as W,d as V,z as S,bj as k,jH as z,at as C,iV as D,am as I,au as R,al as H,jI as T,jJ as X,cR as J,hw as K,iJ as Y}from"./index.857de027.js";import"./BuildingGroupSublayer.166b4dc1.js";import{f as Z}from"./WhereClause.4d85e6be.js";import"./BuildingComponentSublayer.95fbc04e.js";import{v as ee,l as te,I as re}from"./I3SMeshView3D.8a487034.js";import{P as M,h as ie,l as se,n as ne}from"./I3SQueryFeatureStore.d1ffe097.js";import{o as le,h as ae,b as oe}from"./I3SUtil.d364226c.js";import{t as ue}from"./DefinitionExpressionSceneLayerView.94a7c03f.js";import{d as de,s as L}from"./popupUtils.0eec96b0.js";import{n as pe}from"./LayerView3D.c9248c2c.js";import{u as he}from"./LayerView.b127f210.js";import"./executionError.c4c51b90.js";import"./capabilities.26cf9b42.js";import"./I3SIndexInfo.8351fb6e.js";import"./I3SLayerDefinitions.f6c2c198.js";import"./I3SOverrides.b9d87522.js";import"./I3SNode.bfa9e398.js";import"./I3SBinaryReader.dcf3112b.js";import"./RenderTexture.66a52be4.js";import"./FeatureLayerView3D.456c5f31.js";import"./FeatureLayerViewBase3D.5091cfe6.js";import"./FeatureLikeLayerView3D.bd6a90f7.js";import"./dehydratedFeatureComparison.b15d701a.js";import"./queryForSymbologySnapping.54b3dae8.js";import"./elevationInfoUtils.67b525ab.js";import"./hash.079e8d2d.js";import"./Graphics3DObjectStates.eafedaa3.js";import"./rendererConversion.a8737a2e.js";import"./optimizedFeatureQueryEngineAdapter.247c3c43.js";import"./centroid.8ac6ff2c.js";import"./PooledRBush.30baa809.js";import"./quickselect.2c5f2780.js";import"./floorFilterUtils.4de71259.js";import"./QueryEngine.c84357d1.js";import"./QueryEngineResult.8352d785.js";import"./utils.8121c2eb.js";import"./generateRendererUtils.3e1900a2.js";import"./json.5152e73f.js";import"./QueryEngineCapabilities.ea616409.js";import"./FeatureStore.117edf50.js";import"./BoundsStore.3ead1fa2.js";import"./projectExtentUtils.0abbe687.js";import"./EventedSet.f2527452.js";import"./RefreshableLayerView.24e8f47e.js";import"./SceneModification.ea0877e6.js";import"./persistable.e4a40aea.js";import"./multiOriginJSONSupportUtils.6105c957.js";import"./resourceExtension.9c54c30f.js";import"./SceneLayerWorker.da0fae68.js";const Q=(e,t)=>{let r=class extends P(G($(j.EventedMixin(e)))){constructor(i){super(i),this.sublayer=null,this.parent=null,this.view=null}initialize(){}get suspended(){return!this.canResume()}get updating(){return!this.suspended&&this.isUpdating()}get visible(){var i;return!!((i=this.sublayer)!=null&&i.visible)}set visible(i){this._overrideIfSome("visible",i)}get fullOpacity(){const i=s=>s!=null?s:1;return i(this.get("sublayer.opacity"))*i(this.get("parent.fullOpacity"))}canResume(){var i,s;return!((i=this.parent)!=null&&i.suspended)&&((s=this.view)==null?void 0:s.ready)&&this.visible||!1}isUpdating(){return!1}};return l([a()],r.prototype,"sublayer",void 0),l([a()],r.prototype,"parent",void 0),l([a({readOnly:!0})],r.prototype,"suspended",null),l([a({type:Boolean,readOnly:!0})],r.prototype,"updating",null),l([a()],r.prototype,"view",void 0),l([a()],r.prototype,"visible",null),l([a()],r.prototype,"fullOpacity",null),r=l([v("esri.views.3d.layers.BuildingSublayerView3D")],r),r};var h;(function(e){e[e.Solid=0]="Solid",e[e.WireFrame=1]="WireFrame",e[e.XRay=2]="XRay"})(h||(h={}));const A=.15,ye=.5*A;function ce(e){switch(e.filterMode.type){case"solid":return{mode:h.Solid};case"wire-frame":return{mode:h.WireFrame,edgeMaterial:N(e.filterMode.edges,{})};case"x-ray":return{mode:h.XRay}}}function q(e,t){if(p(t))return e.color[3]=0,e.edgeMaterial=null,void(e.pickable=!1);switch(t.mode){case h.Solid:return;case h.WireFrame:return e.color[3]=0,e.edgeMaterial=t.edgeMaterial,void(e.pickable=!1);case h.XRay:return e.color[0]=1,e.color[1]=1,e.color[2]=1,e.color[3]*=A,e.colorMixMode=U.Replace,e.castShadows=!1,e.pickable=!1,void(e.edgeMaterial=ge(e.edgeMaterial))}}function ge(e){return p(e)?null:(m.lastMaterial!==e&&(m.cachedMaterial=fe(e),m.lastMaterial=e),m.cachedMaterial)}function fe(e){const t=B(e.color);return t[3]*=ye,{...e,color:t}}const m={cachedMaterial:null,lastMaterial:null};class b extends O{constructor(){super(...arguments),this.sublayer=null}get updating(){return!1}get suspended(){return!1}get availableFields(){return[]}get filter(){return null}set filter(t){throw new Error("Not implemented")}queryFeatures(t,r){throw new Error("Not implemented")}queryObjectIds(t,r){throw new Error("Not implemented")}queryFeatureCount(t,r){throw new Error("Not implemented")}createQuery(){throw new Error("Not implemented")}queryExtent(t,r){throw new Error("Not implemented")}highlight(t){throw new Error("Not implemented")}}l([a()],b.prototype,"sublayer",void 0),l([a()],b.prototype,"availableFields",null),l([a()],b.prototype,"filter",null);let u=class extends ue(ee(Q(b))){constructor(){super(...arguments),this.type="building-component-sublayer-3d",this.layerView=null,this._elevationContext="scene",this._isIntegratedMesh=!1,this._supportsLabeling=!1,this.requiredFields=[],this.progressiveLoadFactor=1,this._queryEngine=null}get i3slayer(){return this.sublayer}get layerUid(){return this.sublayer.layer.uid}get sublayerUid(){return this.sublayer.uid}get layerId(){return this.sublayer.layer.id}get sublayerId(){return this.sublayer.id}get layerPopupEnabled(){return this.sublayer.popupEnabled}initialize(){this.updatingHandles.add(()=>[this.sublayer.renderer,this.definitionExpressionFields,this.filterExpressionFields],()=>this._updateRequiredFields()),this.updatingHandles.add(()=>this.sublayer.renderer,t=>this._rendererChange(t),E);const e=()=>this._filterChange();this.updatingHandles.add(()=>this.parsedDefinitionExpression,e),this.updatingHandles.add(()=>o(this._filter)?this._filter.sortedObjectIds:null,e),this.updatingHandles.add(()=>o(this._filter)?this._filter.parsedWhereClause:null,e),this.updatingHandles.add(()=>[o(this._filter)?this._filter.parsedGeometry:null,o(this.filter)?this.filter.spatialRelationship:null],()=>this._geometryFilterChange()),this.updatingHandles.add(()=>this.parsedFilterExpressions,()=>this._updateSymbologyOverride(),E),this.addResolvingPromise(this._updateRequiredFields())}get lodFactor(){return this.view.qualitySettings.sceneService.object.lodFactor}get parsedFilterExpressions(){return this.sublayer.modelName!=="Overview"&&this.layerView?this.layerView.filterExpressions.map(([e,t])=>{let r;try{r=Z.create(e,this.sublayer.fieldsIndex)}catch(n){return g.getLogger(this.declaredClass).error("Failed to parse filterExpression: "+n),null}if(!r.isStandardized)return g.getLogger(this.declaredClass).error("filterExpression is using non standard function"),null;const i=[],s=r.fieldNames;return le(s,this.sublayer.fields,{missingFields:i}),i.length>0?(g.getLogger(this.declaredClass).error(`filterExpression references unknown fields: ${i.join(", ")}`),null):[r,t]}).filter(e=>e!=null):[]}get filter(){return o(this._filter)?this._filter.viewFilter:null}set filter(e){!p(e)&&M.checkSupport(e)?o(this._filter)?this._filter.viewFilter=e:this._filter=new M({viewFilter:e,layerFieldsIndex:this.sublayer.fieldsIndex,loadAsyncModule:t=>this._loadAsyncModule(t),addSqlFilter:(t,r)=>this.addSqlFilter(t,r,this.logError)}):this._filter=null}isUpdating(){return super.isUpdating()||o(this._filter)&&this._filter.updating}_updateSymbologyOverride(){const e=this.parsedFilterExpressions;e.length>0?this._setSymbologyOverride((t,r)=>{for(const[i,s]of e)try{if(i.testFeature(t))return q(r,s)}catch(n){this.logError(n)}return q(r,null)},this.filterExpressionFields):this._setSymbologyOverride(null,null)}get filterExpressionFields(){return w(this.sublayer.fieldsIndex,this.parsedFilterExpressions.reduce((e,[t])=>e.concat(t.fieldNames),new Array))}get availableFields(){const e=this.sublayer,t=e.fieldsIndex;let r=this.requiredFields;if(e.outFields||e.layer.outFields){const i=[...e.outFields||[],...e.layer.outFields||[]];r=[...x(t,i),...r]}return w(t,r)}_createLayerGraphic(e){const t=new _(null,null,e);return t.layer=this.sublayer.layer,t.sourceLayer=this.sublayer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}async fetchPopupFeatures(e,t){const r=this._validateFetchPopupFeatures(t);if(r)throw r;if(p(t)||!t.clientGraphics||t.clientGraphics.length===0)return[];const i=[],s=[],n=o(this.sublayer.associatedLayer)?await this.sublayer.associatedLayer.load():this.sublayer,y=x(this.sublayer.fieldsIndex,await de(n,L(this.sublayer,t))),f=new Set;for(const c of t.clientGraphics)W(y,c,f)?s.push(c):i.push(c);return s.length===0?i:(o(this.sublayer.associatedLayer)&&await this.sublayer.associatedLayer.load().catch(()=>g.getLogger(this.declaredClass).warn("Failed to load associated feature layer. Displaying popup attributes from cached attributes.")),this.whenGraphicAttributes(s,Array.from(f)).catch(()=>s).then(c=>i.concat(c)))}async _updateRequiredFields(){const e=w(this.sublayer.fieldsIndex,[...this.sublayer.renderer?await this.sublayer.renderer.getRequiredFields(this.sublayer.fieldsIndex):[],...this.definitionExpressionFields||[],...this.filterExpressionFields||[]]);this._set("requiredFields",e)}_validateFetchPopupFeatures(e){const{sublayer:t}=this,{popupEnabled:r}=t;return r?L(t,e)?void 0:new V("buildingscenelayerview3d:fetchPopupFeatures","Layer does not define a popup template",{sublayer:t}):new V("buildingscenelayerview3d:fetchPopupFeatures","Popups are disabled",{sublayer:t})}getFilters(){const e=super.getFilters();return this.addSqlFilter(e,this.parsedDefinitionExpression,this.logError),o(this._filter)&&this._filter.addFilters(e,this.view,this._controller.crsIndex,this._collection),e}createQuery(){const e={outFields:["*"],returnGeometry:!1,outSpatialReference:this.view.spatialReference};return o(this.filter)?this.filter.createQuery(e):new S(e)}queryExtent(e,t){return this._ensureQueryEngine().executeQueryForExtent(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatureCount(e,t){return this._ensureQueryEngine().executeQueryForCount(this._ensureQuery(e),t==null?void 0:t.signal)}queryFeatures(e,t){return this._ensureQueryEngine().executeQuery(this._ensureQuery(e),t==null?void 0:t.signal).then(r=>{if(!(r!=null&&r.features))return r;const i=this.sublayer,s=i.layer;for(const n of r.features)n.layer=s,n.sourceLayer=i;return r})}queryObjectIds(e,t){return this._ensureQueryEngine().executeQueryForIds(this._ensureQuery(e),t==null?void 0:t.signal)}_ensureQueryEngine(){return p(this._queryEngine)&&(this._queryEngine=this._createQueryEngine()),this._queryEngine}_createQueryEngine(){const e=te(this.view.spatialReference,this.view.renderSpatialReference,this._collection);return new ie({layerView:this,priority:k.FEATURE_QUERY_ENGINE,spatialIndex:new se({featureAdapter:new ne({objectIdField:this.sublayer.objectIdField,attributeStorageInfo:this.sublayer.attributeStorageInfo,getFeatureExtent:e}),forAllFeatures:(t,r)=>this._forAllFeatures((i,s,n)=>t({id:i,index:s,meta:n}),r,re.ALL_IN_CLIPPING_AREA),getFeatureExtent:e,sourceSpatialReference:ae(this.sublayer),viewSpatialReference:this.view.spatialReference})})}_ensureQuery(e){return this._addDefinitionExpressionToQuery(p(e)?this.createQuery():S.from(e))}};l([a()],u.prototype,"i3slayer",null),l([a()],u.prototype,"layerView",void 0),l([a()],u.prototype,"lodFactor",null),l([a({readOnly:!0})],u.prototype,"parsedFilterExpressions",null),l([a({type:z})],u.prototype,"filter",null),l([a()],u.prototype,"_filter",void 0),l([a({type:[String],readOnly:!0})],u.prototype,"filterExpressionFields",null),l([a({type:[String],readOnly:!0})],u.prototype,"requiredFields",void 0),l([a({type:[String],readOnly:!0})],u.prototype,"availableFields",null),u=l([v("esri.views.3d.layers.BuildingComponentSublayerView3D")],u);const me=u;class F extends he{constructor(t){super(t),this.layer=null,this.sublayerViews=null}highlight(t){throw new Error("Not implemented")}}l([a()],F.prototype,"layer",void 0),l([a()],F.prototype,"sublayerViews",void 0);const be=Q(O);let d=class extends pe(F){constructor(e){super(e),this.type="building-scene-3d",this.sublayerViews=new C,this._abortController=new AbortController,this._loadingComponents=0,this._pendingWhenSublayerViews=new Map}get filterExpression(){var i;const e=this.layer.activeFilterId,t=e!=null?this.layer.filters.find(s=>s.id===e):null,r=t!=null?(i=t.filterBlocks)==null?void 0:i.find(s=>s.filterMode.type==="solid"):null;return r?r.filterExpression:null}get filterExpressions(){const e=this.layer.activeFilterId,t=e!=null?this.layer.filters.find(r=>r.id===e):null;return t&&t.filterBlocks?t.filterBlocks.toArray().map(r=>{var i;return[(i=r.filterExpression)!=null?i:"",ce(r)]}):[]}get updatingProgressValue(){const e=this.sublayerViews,t=this._loadingComponents+(e?e.length:0);return e.reduce((r,i)=>r+i.updatingProgress,0)/t}isUpdating(){return this._loadingComponents>0||this.sublayerViews&&this.sublayerViews.some(e=>e.updating)}initialize(){oe(this.layer.spatialReference,this.view.spatialReference,this.view.viewingMode),this._initializeSubLayerViews(this.layer.sublayers,this)}destroy(){this.sublayerViews&&(this.sublayerViews.forEach(e=>e.destroy()),this.sublayerViews=null),this._abortController=D(this._abortController)}_initializeSubLayerViews(e,t){const r=this,i=this.view;e.forEach(s=>{if(!s.isEmpty)if(s.type==="building-group"){const n=new be({sublayer:s,view:i,parent:t});this._initializeSubLayerViews(s.sublayers,n)}else s.geometryType==="mesh"&&(this._loadingComponents++,s.load({signal:this._abortController.signal}).then(()=>{const n=new me({sublayer:s,layerView:r,view:i,parent:t});this.sublayerViews.push(n);const y=this._pendingWhenSublayerViews.get(s);if(y){for(const f of y)f.resolve(n);this._pendingWhenSublayerViews.delete(s)}this.handles.add([I(()=>n.updating,()=>this.notifyChange("updating"),R),I(()=>n.updatingProgress,()=>this.notifyChange("updatingProgressValue"),R)])}).catch(n=>{H(n)||g.getLogger(this.declaredClass).error(`Error while creating view for sublayer ${s.id}
Layer: ${this.layer.url}
`,n)}).then(()=>{this._loadingComponents--,this.notifyChange("updating"),this.notifyChange("updatingProgressValue")}))})}getGraphicFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getGraphicFromIntersectorTarget(e);return null}async fetchPopupFeatures(e,t){if(p(t)||!t.clientGraphics||t.clientGraphics.length===0)return[];const r=T(t.clientGraphics,s=>s.sourceLayer),i=[];for(const[s,n]of r){const y=this._findComponent(s);o(y)&&i.push(y.fetchPopupFeatures(e,{...t,clientGraphics:n}))}return X(i).then(s=>s.flat())}whenGraphicBounds(e){const t=this._findComponent(e.sourceLayer);return p(t)?Promise.reject():t.whenGraphicBounds(e)}getAABBFromIntersectorTarget(e){for(const t of this.sublayerViews.items)if(t.sublayer.uid===e.sublayerUid)return t.getAABBFromIntersectorTarget(e);return null}async whenSublayerView(e){const t=this._findComponent(e);if(o(t))return t;const r=this._pendingWhenSublayerViews.get(e),i=J();return r?r.push(i):this._pendingWhenSublayerViews.set(e,[i]),i.promise}_findComponent(e){return this.sublayerViews.find(t=>e===t.sublayer)}highlight(e){e instanceof _?e=[e]:e instanceof C&&(e=e.toArray());const t=[];if(Array.isArray(e)&&e.length>0&&e[0]instanceof _){const r=e,i=new Map;for(const s of r){let n=i.get(s.sourceLayer);n==null&&(n=[],i.set(s.sourceLayer,n)),n.push(s)}this.sublayerViews.forEach(s=>{const n=i.get(s.sublayer);n&&t.push(s.highlight(n))})}return K(t)}getUsedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.getUsedMemory(),0)}getUnloadedMemory(){return this.sublayerViews.reduce((e,t)=>e+t.getUnloadedMemory(),0)}ignoresMemoryFactor(){return!1}};l([a()],d.prototype,"sublayerViews",void 0),l([a({readOnly:!0})],d.prototype,"filterExpression",null),l([a({readOnly:!0})],d.prototype,"filterExpressions",null),l([a(Y)],d.prototype,"updatingProgress",void 0),l([a({readOnly:!0,dependsOn:[]})],d.prototype,"updatingProgressValue",null),d=l([v("esri.views.3d.layers.BuildingSceneLayerView3D")],d);const ct=d;export{ct as default};