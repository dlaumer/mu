import{e as i,y as s,a as y,ah as _,kM as S,jF as f,b3 as m,bk as k,iM as b,uG as C,t as g,mj as w,d_ as L,cK as H,G as E,aR as O,r as I}from"./index.7ded6657.js";import{r as R,l as V}from"./DimensionAnalysisView3D.f0edde23.js";import{r as $}from"./VertexSnappingCandidate.9d42f786.js";import"./LineVisualElement.cfaeccb8.js";import"./LengthDimension.c61a9f17.js";import"./Segment.3a362580.js";import"./elevationInfoUtils.ac2dd8c6.js";import"./analysisViewUtils.3f043650.js";import"./ImageMaterial.e25a9925.js";import"./Factory.a0fb68b0.js";import"./RightAngleQuadVisualElement.77753713.js";import"./VisualElementResources.8a9e633b.js";import"./PointVisualElement.0a37d715.js";import"./EditGeometryOperations.2091de8b.js";import"./QueryEngineResult.46a6d788.js";import"./WhereClause.33e9fafd.js";import"./executionError.c4c51b90.js";import"./utils.39cf51dd.js";import"./generateRendererUtils.663fbe5d.js";import"./json.5152e73f.js";import"./dehydratedFeatureComparison.3f46d56c.js";import"./RenderTexture.c625b537.js";let d=class extends _{constructor(e){super(e),this.availability=0,this._ids=new Set}destroy(){this._workerHandle.destroy(),this._workerHandle=null}initialize(){this._workerHandle=new j(this.schedule,{fetchAllEdgeLocations:(e,t)=>this._fetchAllEdgeLocations(e,t)})}async fetchCandidates(e,t){const r=e.coordinateHelper,{point:o}=e,a=P;this.renderCoordsHelper.toRenderCoords(o,r.spatialReference,a);const p=e.distance,c=typeof p=="number"?p:p.distance,h=await this._workerHandle.invoke({bounds:S(a[0],a[1],a[2],c),types:e.types},t);return h.candidates.sort((u,v)=>u.distance-v.distance),h.candidates.map(u=>this._convertCandidate(r,u))}async add(e,t){this._ids.add(e.id),await this._workerHandle.invokeMethod("add",e,t)}async remove(e,t){this._ids.delete(e.id),await this._workerHandle.invokeMethod("remove",e,t)}_convertCandidate(e,t){switch(t.type){case"edge":return new R({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),edgeStart:this._convertRenderCoordinate(e,t.start),edgeEnd:this._convertRenderCoordinate(e,t.end),isDraped:!1});case"vertex":return new $({objectId:t.objectId,targetPoint:this._convertRenderCoordinate(e,t.target),isDraped:!1})}}_convertRenderCoordinate({spatialReference:e},t){const r=m();return this.renderCoordsHelper.fromRenderCoords(t,r,e),V(r)}async _fetchAllEdgeLocations(e,t){const r=[],o=[];for(const{id:a,uid:p}of e.components)this._ids.has(a)&&r.push((async()=>{const c=await this.fetchEdgeLocations(a,t.signal),h=c.locations.buffer;return o.push(h),{id:a,uid:p,objectIds:c.objectIds,locations:h,origin:c.origin,type:c.type}})());return{result:{components:(await Promise.all(r)).filter(({id:a})=>this._ids.has(a))},transferList:o}}};i([s({constructOnly:!0})],d.prototype,"renderCoordsHelper",void 0),i([s({constructOnly:!0})],d.prototype,"fetchEdgeLocations",void 0),i([s({constructOnly:!0})],d.prototype,"schedule",void 0),i([s({readOnly:!0})],d.prototype,"availability",void 0),d=i([y("esri.views.interactive.snapping.featureSources.sceneLayerSource.SceneLayerSnappingSourceWorker")],d);class j extends f{constructor(t,r){super("SceneLayerSnappingSourceWorker","fetchCandidates",{},t,{strategy:"dedicated",client:r})}}const P=m();let n=class extends _{get updating(){return this.updatingHandles.updating}constructor(e){super(e),this.availability=1,this._abortController=new AbortController}destroy(){this._tracker=k(this._tracker),this._abortController=b(this._abortController)}initialize(){const{view:e}=this,t=e.resourceController;this._edgeWorker=new C(r=>t.immediate.schedule(r)),this._workerHandle=new d({renderCoordsHelper:this.view.renderCoordsHelper,schedule:r=>t.immediate.schedule(r),fetchEdgeLocations:async(r,o)=>{if(g(this._tracker))throw new Error("tracker-not-initialized");return this._tracker.fetchEdgeLocations(r,this._edgeWorker,o)}}),this.updatingHandles.addPromise(this._setupLayerView()),this.handles.add([w(this._workerHandle),w(this._edgeWorker)])}async fetchCandidates(e,t){return this._workerHandle.fetchCandidates(e,t)}refresh(){}async _setupLayerView(){if(this.destroyed)return;const e=L(this._abortController,r=>r.signal),t=await this.getLayerView();g(t)||H(e)||(this._tracker=t.trackSnappingSources({add:(r,o)=>{this.updatingHandles.addPromise(this._workerHandle.add({id:r,bounds:o},e))},remove:r=>{this.updatingHandles.addPromise(this._workerHandle.remove({id:r},e))}}))}};i([s({constructOnly:!0})],n.prototype,"getLayerView",void 0),i([s({constructOnly:!0})],n.prototype,"view",void 0),i([s({readOnly:!0})],n.prototype,"updating",null),i([s({readOnly:!0})],n.prototype,"availability",void 0),n=i([y("esri.views.interactive.snapping.featureSources.I3SSnappingSource")],n);let l=class extends E{get updating(){return this._i3sSources.some(e=>e.updating)}constructor(e){super(e),this.availability=1,this._i3sSources=[]}destroy(){this._i3sSources.forEach(e=>e.destroy()),this._i3sSources.length=0}initialize(){const{view:e}=this,t=this.layerSource.layer;this._i3sSources=t.type==="building-scene"?this._getBuildingSceneI3SSources(e,t):[this._getSceneLayerI3SSource(e,t)]}async fetchCandidates(e,t){const r=await Promise.all(this._i3sSources.map(o=>o.fetchCandidates(e,t)));return O(t),r.flat()}refresh(){this._i3sSources.forEach(e=>e.refresh())}_getBuildingSceneI3SSources(e,t){return t.allSublayers.toArray().map(r=>r.type==="building-component"?new n({getLayerView:async()=>(await e.whenLayerView(t)).whenSublayerView(r),view:e}):null).filter(I)}_getSceneLayerI3SSource(e,t){return new n({getLayerView:async()=>{const r=await e.whenLayerView(t);return r.type==="scene-layer-graphics-3d"?void 0:r},view:e})}};i([s({constructOnly:!0})],l.prototype,"layerSource",void 0),i([s({constructOnly:!0})],l.prototype,"view",void 0),i([s({readOnly:!0})],l.prototype,"updating",null),i([s({readOnly:!0})],l.prototype,"availability",void 0),l=i([y("esri.views.interactive.snapping.featureSources.SceneLayerSnappingSource")],l);export{l as SceneLayerSnappingSource};