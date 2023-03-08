import{e as a,y as n,a as m,ah as f,ai as C,r as o,aj as w,ak as v,al as V,am as c,an as S,a7 as u,ao as E,ap as x,aq as G,ar as O,as as p,z as P,j as d,at as _,t as y,au as j,av as A,aw as I,ax as R}from"./index.857de027.js";import{k as z,g as H,_ as D,s as k,m as q}from"./Graphics3DObjectStates.eafedaa3.js";let s=class extends f{constructor(e){super(e),this.type="graphics-3d",this.graphicsCore=null,this.drapeSourceType=C.Features,this.scaleVisibilityEnabled=!1,this.frustumVisibilityEnabled=!1,this._suspendResumeExtent=null}initialize(){const{layer:e}=this,i="effectiveScaleRange"in e?e:null,l=this.scaleVisibilityEnabled&&o(i),r=new z({owner:this,layer:this.owner.layer,preferredUpdatePolicy:w.SYNC,graphicSymbolSupported:!0,componentFactories:{elevationAlignment:(t,h)=>new H({graphicsCoreOwner:this,graphicsCore:t,queryGraphicUIDsInExtent:h,elevationProvider:this.view.elevationProvider}),scaleVisibility:l?(t,h)=>new D({graphicsCoreOwner:this,layer:i,queryGraphicUIDsInExtent:h,graphicsCore:t,basemapTerrain:this.owner.view.basemapTerrain}):null,objectStates:t=>new k(t)}});if(this._set("graphicsCore",r),this.frustumVisibilityEnabled&&this._set("frustumVisibility",new q({graphicsCoreOwner:this})),"fullOpacity"in this.owner){const t=this.owner;this.updatingHandles.add(()=>t.fullOpacity,()=>this.graphicsCore.opacityChange())}if("elevationInfo"in e){const t=e;this.updatingHandles.add(()=>t.elevationInfo,(h,b)=>{v(h,b)&&this.updatingHandles.addPromise(this.graphicsCore.elevationInfoChange())})}this._set("initializePromise",this._initializeAsync()),this.updatingHandles.addPromise(this.initializePromise)}async _initializeAsync(){try{await this.graphicsCore.initializePromise}catch(e){if(V(e))return;throw e}this.destroyed||(this.handles.add(c(()=>this.view.clippingArea,()=>this._updateClippingExtent(),S)),this._updateClippingExtent(),this._setupSuspendResumeExtent(),this.graphicsCore.startCreateGraphics())}destroy(){this.handles.removeAll(),this.updatingHandles.removeAll(),this._set("frustumVisibility",u(this.frustumVisibility)),this._set("graphicsCore",u(this.graphicsCore))}get layer(){return this.owner.layer}get view(){return this.owner.view}get scaleVisibility(){var e;return(e=this.graphicsCore)==null?void 0:e.scaleVisibility}get elevationAlignment(){var e;return(e=this.graphicsCore)==null?void 0:e.elevationAlignment}get objectStates(){var e;return(e=this.graphicsCore)==null?void 0:e.objectStates}get scaleVisibilitySuspended(){return!(!o(this.scaleVisibility)||!this.scaleVisibility.suspended)}get frustumVisibilitySuspended(){return o(this.frustumVisibility)&&this.frustumVisibility.suspended}get suspended(){var e;return(e=this.owner.suspended)!=null?e:!1}get updating(){var e;return!!(((e=this.graphicsCore)==null?void 0:e.updating)||o(this.scaleVisibility)&&this.scaleVisibility.updating||o(this.frustumVisibility)&&this.frustumVisibility.updating||this.updatingHandles.updating)}get graphics3DGraphics(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphics}get graphics3DGraphicsByObjectID(){var e;return(e=this.graphicsCore)==null?void 0:e.graphics3DGraphicsByObjectID}get loadedGraphics(){return this.owner.loadedGraphics}get fullOpacity(){var e;return(e=this.owner.fullOpacity)!=null?e:1}get slicePlaneEnabled(){return this.owner.slicePlaneEnabled}get updatePolicy(){return this.owner.updatePolicy}notifyGraphicGeometryChanged(e){this.graphicsCore.notifyGraphicGeometryChanged(e)}notifyGraphicVisibilityChanged(e){this.graphicsCore.notifyGraphicVisibilityChanged(e)}getRenderingInfo(e,i,l){const r=E(e,{renderer:i,arcade:l});if(o(r)&&r.color){const t=r.color;t[0]=t[0]/255,t[1]=t[1]/255,t[2]=t[2]/255}return r}getRenderingInfoAsync(e,i,l,r){return x(e,{renderer:i,arcade:l,...r})}getHit(e){if(this.owner.loadedGraphics){const i=this.owner.loadedGraphics.find(l=>l.uid===e);if(i){const l=this.layer instanceof G?this.layer:null,r=O(i,l);return{type:"graphic",graphic:r,layer:r.layer}}}return null}whenGraphicBounds(e,i){return this.graphicsCore?this.graphicsCore.whenGraphicBounds(e,i):Promise.reject()}computeAttachmentOrigin(e,i){return this.graphicsCore?this.graphicsCore.computeAttachmentOrigin(e,i):null}getSymbolLayerSize(e,i){return this.graphicsCore?this.graphicsCore.getSymbolLayerSize(e,i):null}maskOccludee(e){const{set:i,handle:l}=this.objectStates.acquireSet(p.MaskOccludee,null);return this.objectStates.setUid(i,e.uid),l}highlight(e){if(e instanceof P)return g;if(typeof e=="number")return this.highlight([e]);if(e instanceof d)return this.highlight([e]);if(e instanceof _&&(e=e.toArray()),Array.isArray(e)&&e.length>0){if(e[0]instanceof d){const i=e.map(t=>t.uid),{set:l,handle:r}=this.objectStates.acquireSet(p.Highlight,null);return this.objectStates.setUids(l,i),r}if(typeof e[0]=="number"){const i=e,{set:l,handle:r}=this.objectStates.acquireSet(p.Highlight,null);return this.objectStates.setObjectIds(l,i),r}}return g}_setupSuspendResumeExtent(){const{scaleVisibility:e,frustumVisibility:i}=this;if(y(e)&&y(i))return;const l=({computedExtent:r,extentPadding:t})=>{this._suspendResumeExtent=I(r,this._suspendResumeExtent,R,t),o(e)&&e.setExtent(this._suspendResumeExtent),o(i)&&i.setExtent(this._suspendResumeExtent)};this.handles.add(c(()=>{var r,t;return{computedExtent:(r=this.graphicsCore)==null?void 0:r.computedExtent,extentPadding:(t=this.graphicsCore)==null?void 0:t.extentPadding}},r=>l(r),j))}_updateClippingExtent(){const e=this.view.clippingArea;this.graphicsCore.setClippingExtent(e,this.view.spatialReference)&&this.graphicsCore.recreateAllGraphics()}};a([n()],s.prototype,"type",void 0),a([n({constructOnly:!0})],s.prototype,"owner",void 0),a([n()],s.prototype,"layer",null),a([n()],s.prototype,"view",null),a([n({constructOnly:!0})],s.prototype,"graphicsCore",void 0),a([n()],s.prototype,"scaleVisibility",null),a([n({constructOnly:!0})],s.prototype,"frustumVisibility",void 0),a([n()],s.prototype,"elevationAlignment",null),a([n()],s.prototype,"objectStates",null),a([n()],s.prototype,"scaleVisibilitySuspended",null),a([n({readOnly:!0})],s.prototype,"frustumVisibilitySuspended",null),a([n()],s.prototype,"suspended",null),a([n({readOnly:!0})],s.prototype,"updating",null),a([n()],s.prototype,"loadedGraphics",null),a([n()],s.prototype,"fullOpacity",null),a([n()],s.prototype,"slicePlaneEnabled",null),a([n()],s.prototype,"drapeSourceType",void 0),a([n()],s.prototype,"updatePolicy",null),a([n({constructOnly:!0})],s.prototype,"scaleVisibilityEnabled",void 0),a([n({constructOnly:!0})],s.prototype,"frustumVisibilityEnabled",void 0),a([n()],s.prototype,"initializePromise",void 0),s=a([m("esri.views.3d.layers.graphics.GraphicsProcessor")],s);const g=A();export{s as A};