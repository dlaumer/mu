import{mi as m,a6 as n,j as l,t as d,e as i,y as e,iA as h,a as u}from"./index.7ded6657.js";import{v as c}from"./I3SMeshView3D.fdd6bf78.js";import{n as g}from"./LayerView3D.c8ff2299.js";import{u as y}from"./LayerView.ccc06b74.js";import"./I3SOverrides.2e24e52c.js";import"./I3SNode.ea917cc8.js";import"./I3SUtil.fe5e1035.js";import"./I3SBinaryReader.4207f726.js";import"./RenderTexture.c625b537.js";import"./FeatureLayerView3D.0a8e57d0.js";import"./FeatureLayerViewBase3D.e74defcd.js";import"./FeatureLikeLayerView3D.d305208b.js";import"./dehydratedFeatureComparison.3f46d56c.js";import"./queryForSymbologySnapping.defcebb2.js";import"./elevationInfoUtils.ac2dd8c6.js";import"./hash.079e8d2d.js";import"./Graphics3DObjectStates.4c212bd8.js";import"./rendererConversion.6a13bc03.js";import"./optimizedFeatureQueryEngineAdapter.06094a3a.js";import"./centroid.c4718424.js";import"./PooledRBush.d6fc7ff0.js";import"./quickselect.2c5f2780.js";import"./floorFilterUtils.4de71259.js";import"./QueryEngine.9c6bf9e5.js";import"./QueryEngineResult.46a6d788.js";import"./WhereClause.33e9fafd.js";import"./executionError.c4c51b90.js";import"./utils.39cf51dd.js";import"./generateRendererUtils.663fbe5d.js";import"./json.5152e73f.js";import"./QueryEngineCapabilities.ea616409.js";import"./FeatureStore.ecf5d897.js";import"./BoundsStore.32293b66.js";import"./projectExtentUtils.5bf4e52d.js";import"./EventedSet.9d881437.js";import"./popupUtils.a086d8ff.js";import"./RefreshableLayerView.0ecba963.js";import"./SceneModification.15ab4638.js";import"./persistable.5c89ff48.js";import"./multiOriginJSONSupportUtils.6105c957.js";import"./resourceExtension.2593b88e.js";import"./SceneLayerWorker.06e73858.js";const v=.2;let r=class extends c(g(y)){constructor(){super(...arguments),this.type="integrated-mesh-3d",this._elevationContext="im",this._isIntegratedMesh=!0,this._supportsLabeling=!1,this.drapeTargetType=m.WithoutRasterImage}get i3slayer(){return this.layer}get updatingProgressValue(){var t,o;return(o=(t=this._controller)==null?void 0:t.updatingProgress)!=null?o:0}get lodFactor(){var t,o,a,s,p;return(p=(s=(a=(o=(t=this.view)==null?void 0:t.qualitySettings)==null?void 0:o.sceneService)==null?void 0:a.integratedMesh)==null?void 0:s.lodFactor)!=null?p:1}get progressiveLoadFactor(){return this.lodFactor>=1?v:1}get layerPopupEnabled(){return!1}initialize(){this.updatingHandles.add(()=>this.layer.modifications,()=>this._loadModifications(),n),this.view.basemapTerrain.overlayManager.registerDrapeTarget(this)}destroy(){this.view.basemapTerrain.overlayManager.unregisterDrapeTarget(this)}_createLayerGraphic(){const t=new l;return t.layer=this.layer,t.sourceLayer=this.layer,t}canResume(){return super.canResume()&&(!this._controller||this._controller.rootNodeVisible)}_loadModifications(){if(this.handles.remove("modifications"),d(this.layer.modifications))return void(this._modifications=[]);const t=this.layer.modifications;this.handles.add(this.updatingHandles.addOnCollectionChange(()=>t,()=>this._modifications=t.toArray(),n),"modifications")}};i([e()],r.prototype,"layer",void 0),i([e()],r.prototype,"i3slayer",null),i([e(h)],r.prototype,"updatingProgress",void 0),i([e()],r.prototype,"updatingProgressValue",null),i([e()],r.prototype,"lodFactor",null),i([e({readOnly:!0})],r.prototype,"progressiveLoadFactor",null),r=i([u("esri.views.3d.layers.SceneLayerView3D")],r);const st=r;export{st as default};