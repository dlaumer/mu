import{a6 as u,bg as c,a7 as m,dz as y,r as g,at as d,am as h,b as f,aj as b,e as o,y as a,a as v}from"./index.857de027.js";import{d as O,h as I,O as _,g as w,f as V,j as G,e as S}from"./Stop.84eaed0b.js";import{n as C}from"./LayerView3D.c9248c2c.js";import{A as $}from"./GraphicsProcessor.6f1c4eb3.js";import{l as j}from"./projectExtentUtils.0abbe687.js";import{r as P}from"./EventedSet.f2527452.js";import{u as R}from"./LayerView.b127f210.js";import"./Graphics3DObjectStates.eafedaa3.js";import"./rendererConversion.a8737a2e.js";import"./optimizedFeatureQueryEngineAdapter.247c3c43.js";import"./centroid.8ac6ff2c.js";import"./PooledRBush.30baa809.js";import"./quickselect.2c5f2780.js";function D(e){return e instanceof O||e instanceof I||e instanceof _||e instanceof w||e instanceof V||e instanceof G||e instanceof S}let i=class extends C(R){constructor(){super(...arguments),this.type="route-3d",this.loadedGraphics=new P,this._byObjectID=new Map,this.slicePlaneEnabled=!1,this.fullExtentInLocalViewSpatialReference=null}initialize(){this._set("processor",new $({owner:this,scaleVisibilityEnabled:!0,frustumVisibilityEnabled:!0})),this.addResolvingPromise(this.processor.initializePromise),this.updatingHandles.addOnCollectionChange(()=>this._routeItems,e=>this._routeItemsChanged(e),u),this.addResolvingPromise(j(this).then(e=>this.fullExtentInLocalViewSpatialReference=e)),this.handles.add(c(()=>{var e,t;return(t=(e=this.view)==null?void 0:e.basemapTerrain)==null?void 0:t.ready},()=>()=>this.notifyChange("updating"),{once:!0}))}destroy(){var e;this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("processor",m(this.processor)),(e=this._get("_routeItems"))==null||e.destroy()}get _routeItems(){return new y({getCollections:()=>[this.layer.pointBarriers,this.layer.polygonBarriers,this.layer.polylineBarriers,this.layer.stops,this.layer.directionLines,this.layer.directionPoints,g(this.layer.routeInfo)?new d([this.layer.routeInfo]):null]})}_routeItemsChanged(e){if(e.removed.length){this.loadedGraphics.removeMany(e.removed.map(t=>{const s=this._byObjectID.get(t);return this._byObjectID.delete(t),s}));for(const t of e.removed)this.handles.remove(t)}if(e.added.length){this.loadedGraphics.addMany(e.added.map(t=>{const s=t.toGraphic();return this._byObjectID.set(t,s),s}));for(const t of e.added)this.handles.add([h(()=>t.geometry,(s,r)=>{this._updateGraphic(t,"geometry",s,r)}),h(()=>t.symbol,(s,r)=>{this._updateGraphic(t,"symbol",s,r)})],t)}}get legendEnabled(){var e;return this.canResume()&&!((e=this.processor)!=null&&e.frustumVisibilitySuspended)}getSuspendInfo(){var t,s,r,n;const e=super.getSuspendInfo();return e.outsideScaleRange=(s=(t=this.processor)==null?void 0:t.scaleVisibilitySuspended)!=null?s:!1,e.outsideOfView=(n=(r=this.processor)==null?void 0:r.frustumVisibilitySuspended)!=null?n:!1,e}async fetchPopupFeatures(e,t){var s,r;return(r=(s=f(t))==null?void 0:s.clientGraphics)!=null?r:[]}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}computeAttachmentOrigin(e,t){var s;return(s=this.processor)==null?void 0:s.computeAttachmentOrigin(e,t)}getSymbolLayerSize(e,t){return this.processor.getSymbolLayerSize(e,t)}async queryGraphics(){return new d(this.loadedGraphics.toArray())}maskOccludee(e){return this.processor.maskOccludee(e)}highlight(e){return D(e)&&(e=this._byObjectID.get(e)),this.processor.highlight(e)}get updatePolicy(){var e;return((e=this.processor)==null?void 0:e.graphicsCore.effectiveUpdatePolicy)||b.SYNC}canResume(){var e;return super.canResume()&&!((e=this.processor)!=null&&e.scaleVisibilitySuspended)}isUpdating(){var e,t,s;return!(!((e=this.processor)!=null&&e.updating)&&((s=(t=this.view)==null?void 0:t.basemapTerrain)==null?void 0:s.ready))}get performanceInfo(){var e,t,s;return{displayedNumberOfFeatures:this.loadedGraphics.length,maximumNumberOfFeatures:-1,totalNumberOfFeatures:-1,nodes:0,core:null,updating:this.updating,elevationUpdating:(t=(e=this.processor)==null?void 0:e.elevationAlignment.updating)!=null?t:!1,visibilityFrustum:!((s=this.processor)!=null&&s.frustumVisibilitySuspended)}}_updateGraphic(e,t,s,r){var p;const n=this._byObjectID.get(e);n[t]=s,l.graphic=n,l.property=t,l.oldValue=r,l.newValue=s,(p=this.processor)==null||p.graphicsCore.graphicUpdateHandler(l)}};o([a()],i.prototype,"_routeItems",null),o([a()],i.prototype,"loadedGraphics",void 0),o([a({readOnly:!0})],i.prototype,"legendEnabled",null),o([a()],i.prototype,"layer",void 0),o([a({readOnly:!0})],i.prototype,"processor",void 0),o([a({type:Boolean})],i.prototype,"slicePlaneEnabled",void 0),i=o([v("esri.views.3d.layers.RouteLayerView3D")],i);const l={graphic:null,property:null,oldValue:null,newValue:null},q=i;export{q as default};