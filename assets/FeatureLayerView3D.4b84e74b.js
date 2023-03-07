import{e as i,y as p,a as s,kQ as m,dh as l,d as o,r as n,bH as y}from"./index.860f6be5.js";import{j as c}from"./FeatureLayerViewBase3D.6b608550.js";import"./FeatureLikeLayerView3D.3d40ee16.js";import"./dehydratedFeatureComparison.7a1329b9.js";import"./queryForSymbologySnapping.f65a67eb.js";import"./elevationInfoUtils.d616fc21.js";import"./hash.079e8d2d.js";import"./Graphics3DObjectStates.ad4da69f.js";import"./rendererConversion.5db8839f.js";import"./optimizedFeatureQueryEngineAdapter.116c262c.js";import"./centroid.72dc0856.js";import"./PooledRBush.1e3b3a37.js";import"./quickselect.2c5f2780.js";import"./floorFilterUtils.4de71259.js";import"./QueryEngine.a98bf7de.js";import"./QueryEngineResult.6fa14b32.js";import"./WhereClause.cf03b384.js";import"./executionError.c4c51b90.js";import"./utils.65890d90.js";import"./generateRendererUtils.6e89c565.js";import"./json.5152e73f.js";import"./QueryEngineCapabilities.ea616409.js";import"./FeatureStore.d784130d.js";import"./BoundsStore.9b2b5aa5.js";import"./projectExtentUtils.6fb0dbd3.js";import"./LayerView3D.c93bbaf7.js";import"./EventedSet.69be3431.js";import"./popupUtils.b1adb1db.js";import"./LayerView.9dc4bbd9.js";import"./RefreshableLayerView.9b84d337.js";let t=class extends c{constructor(){super(...arguments),this.type="feature-3d",this.direct3DObjectFeatureLayerDisplayEnabled=m()}initialize(){var a;const{layer:e,view:r}=this;(a=l(e))!=null&&a.operations.supportsQuery||this.addResolvingPromise(Promise.reject(new o("featurelayerview:query-not-supported","layer view requires a layer with query capability",{layer:e}))),n(e.infoFor3D)&&(this.direct3DObjectFeatureLayerDisplayEnabled?this._set("suspendResumeExtentMode","computed"):this.addResolvingPromise(Promise.reject(new o("featurelayerview3d:unsupported-geometry-type",`Unsupported geometry type ${e.geometryType}`)))),e.geometryType!=="mesh"||y(e.spatialReference,r.spatialReference)||this.addResolvingPromise(Promise.reject(new o("layerview:spatial-reference-incompatible","The spatial references of the feature layer is incompatible with the spatial reference of the view")))}get featureSpatialReference(){var e,r;return(r=(e=this.view.featureTiles)==null?void 0:e.tilingScheme)==null?void 0:r.spatialReference}};i([p({constructOnly:!0})],t.prototype,"direct3DObjectFeatureLayerDisplayEnabled",void 0),i([p()],t.prototype,"layer",void 0),t=i([s("esri.views.3d.layers.FeatureLayerView3D")],t);const B=t;export{B as default};