import{e as i,y as p,a as s,kQ as m,dh as l,d as o,r as n,bH as y}from"./index.c2b4fb6e.js";import{j as c}from"./FeatureLayerViewBase3D.57c2d4e1.js";import"./FeatureLikeLayerView3D.84003d2d.js";import"./dehydratedFeatureComparison.baf40dde.js";import"./queryForSymbologySnapping.372db265.js";import"./elevationInfoUtils.61d72552.js";import"./hash.079e8d2d.js";import"./Graphics3DObjectStates.00695ba4.js";import"./rendererConversion.bf1e92f2.js";import"./optimizedFeatureQueryEngineAdapter.04eb7bfe.js";import"./centroid.bfde938e.js";import"./PooledRBush.53bd9abe.js";import"./quickselect.2c5f2780.js";import"./floorFilterUtils.4de71259.js";import"./QueryEngine.0d9a56b3.js";import"./QueryEngineResult.2ac072d4.js";import"./WhereClause.fb4e6ae7.js";import"./executionError.c4c51b90.js";import"./utils.51e2592f.js";import"./generateRendererUtils.935a3285.js";import"./json.5152e73f.js";import"./QueryEngineCapabilities.ea616409.js";import"./FeatureStore.4b890201.js";import"./BoundsStore.7be3138e.js";import"./projectExtentUtils.85b203bb.js";import"./LayerView3D.22fe02a7.js";import"./EventedSet.6d14d441.js";import"./popupUtils.1c2a1560.js";import"./LayerView.e649b0cd.js";import"./RefreshableLayerView.5fe5f7c4.js";let t=class extends c{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=m()}initialize(){var a;const{layer:e,view:r}=this;(a=l(e))!=null&&a.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new o("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),n(e.infoFor3D)&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||y(e.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e,r;return(r=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:r.spatialReference}};i([p({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),i([p()],t.prototype,"layer",void 0),t=i([s("esri.views.3d.layers.FeatureLayerView3D")],t);const B=t;export{B as default};