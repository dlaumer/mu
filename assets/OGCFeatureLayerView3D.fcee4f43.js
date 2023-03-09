import{e as r,y as i,a as o,d as s}from"./index.c2b4fb6e.js";import{j as m}from"./FeatureLayerViewBase3D.57c2d4e1.js";import"./FeatureLikeLayerView3D.84003d2d.js";import"./dehydratedFeatureComparison.baf40dde.js";import"./queryForSymbologySnapping.372db265.js";import"./elevationInfoUtils.61d72552.js";import"./hash.079e8d2d.js";import"./Graphics3DObjectStates.00695ba4.js";import"./rendererConversion.bf1e92f2.js";import"./optimizedFeatureQueryEngineAdapter.04eb7bfe.js";import"./centroid.bfde938e.js";import"./PooledRBush.53bd9abe.js";import"./quickselect.2c5f2780.js";import"./floorFilterUtils.4de71259.js";import"./QueryEngine.0d9a56b3.js";import"./QueryEngineResult.2ac072d4.js";import"./WhereClause.fb4e6ae7.js";import"./executionError.c4c51b90.js";import"./utils.51e2592f.js";import"./generateRendererUtils.935a3285.js";import"./json.5152e73f.js";import"./QueryEngineCapabilities.ea616409.js";import"./FeatureStore.4b890201.js";import"./BoundsStore.7be3138e.js";import"./projectExtentUtils.85b203bb.js";import"./LayerView3D.22fe02a7.js";import"./EventedSet.6d14d441.js";import"./popupUtils.1c2a1560.js";import"./LayerView.e649b0cd.js";import"./RefreshableLayerView.5fe5f7c4.js";const l=p=>{let e=class extends p{get availableFields(){return this.layer.fieldsIndex.fields.map(a=>a.name)}};return r([i()],e.prototype,"layer",void 0),r([i({readOnly:!0})],e.prototype,"availableFields",null),e=r([o("esri.views.layers.OGCFeatureLayerView")],e),e};let t=class extends l(m){constructor(){super(...arguments),this.type="ogc-feature-3d"}initialize(){this.layer.serviceSupportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(Promise.reject(new s("layerview:spatial-reference-incompatible","The spatial references supported by this OGC layer are incompatible with the spatial reference of the view",{layer:this.layer})))}};r([i()],t.prototype,"layer",void 0),t=r([o("esri.views.3d.layers.OGCFeatureLayerView3D")],t);const E=t;export{E as default};
