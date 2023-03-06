import{_ as d,$ as h,r as o,i as a,ab as n,ah as u,L as f,hI as m,b8 as _}from"./index.f0b603e5.js";import{o as g}from"./BoundsStore.9aa448e8.js";import{i as y}from"./optimizedFeatureQueryEngineAdapter.199b2146.js";import{E as I}from"./QueryEngineResult.a34a99f5.js";const l=d();class p{constructor(e){this.geometryInfo=e,this._boundsStore=new g,this._featuresById=new Map,this._markedIds=new Set,this.events=new h,this.featureAdapter=y}get geometryType(){return this.geometryInfo.geometryType}get hasM(){return this.geometryInfo.hasM}get hasZ(){return this.geometryInfo.hasZ}get numFeatures(){return this._featuresById.size}get fullBounds(){return this._boundsStore.fullBounds}get storeStatistics(){let e=0;return this._featuresById.forEach(t=>{o(t.geometry)&&t.geometry.coords&&(e+=t.geometry.coords.length)}),{featureCount:this._featuresById.size,vertexCount:e/(this.hasZ?this.hasM?4:3:this.hasM?3:2)}}getFullExtent(e){if(a(this.fullBounds))return null;const[t,s,r,i]=this.fullBounds;return{xmin:t,ymin:s,xmax:r,ymax:i,spatialReference:I(e)}}add(e){this._add(e),this._emitChanged()}addMany(e){for(const t of e)this._add(t);this._emitChanged()}clear(){this._featuresById.clear(),this._boundsStore.clear(),this._emitChanged()}removeById(e){const t=this._featuresById.get(e);return t?(this._remove(t),this._emitChanged(),t):null}removeManyById(e){this._boundsStore.invalidateIndex();for(const t of e){const s=this._featuresById.get(t);s&&this._remove(s)}this._emitChanged()}forEachBounds(e,t){for(const s of e){const r=this._boundsStore.get(s.objectId);r&&t(n(l,r))}}getFeature(e){return this._featuresById.get(e)}has(e){return this._featuresById.has(e)}forEach(e){this._featuresById.forEach(t=>e(t))}forEachInBounds(e,t){this._boundsStore.forEachInBounds(e,s=>{t(this._featuresById.get(s))})}startMarkingUsedFeatures(){this._boundsStore.invalidateIndex(),this._markedIds.clear()}sweep(){let e=!1;this._featuresById.forEach((t,s)=>{this._markedIds.has(s)||(e=!0,this._remove(t))}),this._markedIds.clear(),e&&this._emitChanged()}_emitChanged(){this.events.emit("changed",void 0)}_add(e){if(!e)return;const t=e.objectId;if(t==null)return void u.getLogger("esri.layers.graphics.data.FeatureStore").error(new f("featurestore:invalid-feature","feature id is missing",{feature:e}));const s=this._featuresById.get(t);let r;if(this._markedIds.add(t),s?(e.displayId=s.displayId,r=this._boundsStore.get(t),this._boundsStore.delete(t)):o(this.onFeatureAdd)&&this.onFeatureAdd(e),a(e.geometry)||!e.geometry.coords||!e.geometry.coords.length)return this._boundsStore.set(t,null),void this._featuresById.set(t,e);r=m(o(r)?r:_(),e.geometry,this.geometryInfo.hasZ,this.geometryInfo.hasM),o(r)&&this._boundsStore.set(t,r),this._featuresById.set(t,e)}_remove(e){o(this.onFeatureRemove)&&this.onFeatureRemove(e);const t=e.objectId;return this._markedIds.delete(t),this._boundsStore.delete(t),this._featuresById.delete(t),e}}export{p as g};
