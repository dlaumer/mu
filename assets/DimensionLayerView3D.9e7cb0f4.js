import{e as t,y as n,a as w,r as a,at as c,eI as h,am as V,au as d,d as u,hW as p,a7 as _,iM as m,t as v,cK as A,_ as f}from"./index.7ded6657.js";import{n as D}from"./LayerView3D.c8ff2299.js";import{u as T}from"./LayerView.ccc06b74.js";const k=i=>{let s=class extends i{constructor(...e){super(...e),this.layer=null}get interactive(){return!!a(this.analysisView)&&this.analysisView.interactive}set interactive(e){a(this.analysisView)&&(this.analysisView.interactive=e)}get results(){return a(this.analysisView)?this.analysisView.results:new c}get selectedDimension(){return a(this.analysisView)?this.analysisView.selectedDimension:null}set selectedDimension(e){a(this.analysisView)&&(this.analysisView.selectedDimension=e)}async createLengthDimensions(e){if(!a(this.analysisView))throw h();await this.analysisView.createLengthDimensions(e)}};return t([n()],s.prototype,"layer",void 0),t([n()],s.prototype,"interactive",null),t([n({readOnly:!0})],s.prototype,"results",null),t([n()],s.prototype,"selectedDimension",null),t([n()],s.prototype,"analysisView",void 0),s=t([w("esri.views.layers.DimensionLayerView")],s),s},y="analysis-view-handles";let l=class extends D(k(T)){constructor(i){super(i),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(V(()=>this.layer.source,i=>{this._destroyAnalysisView(),a(i)&&this._createAnalysisView(i)},d),y)}destroy(){this.handles.remove(y),this._destroyAnalysisView()}isUpdating(){return a(this._createAnalysisViewTask)||a(this.analysisView)&&this.analysisView.updating}async whenAnalysisView(){if(a(this.analysisView))return this.analysisView;if(a(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new u("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(i){const s=p(async e=>(this.analysisView=await this._createAnalysisViewPromise(i,e),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=m(this._createAnalysisViewTask)}async _createAnalysisViewPromise(i,s){let e=this._analysisModule;if(v(e)){const o=await this._loadAnalysisModule();this._analysisModule=o,e=o}const r=new e.default({analysis:i,view:this.view,parent:this});if(await r.when(),A(s))throw r.destroy(),h();return r}_loadAnalysisModule(){return f(()=>import("./DimensionAnalysisView3D.f0edde23.js").then(function(i){return i.D}),["assets/DimensionAnalysisView3D.f0edde23.js","assets/index.7ded6657.js","assets/index.574508c2.css","assets/LineVisualElement.cfaeccb8.js","assets/LengthDimension.c61a9f17.js","assets/Segment.3a362580.js","assets/elevationInfoUtils.ac2dd8c6.js","assets/analysisViewUtils.3f043650.js","assets/ImageMaterial.e25a9925.js","assets/Factory.a0fb68b0.js","assets/RightAngleQuadVisualElement.77753713.js","assets/VisualElementResources.8a9e633b.js","assets/PointVisualElement.0a37d715.js","assets/EditGeometryOperations.2091de8b.js","assets/QueryEngineResult.46a6d788.js","assets/WhereClause.33e9fafd.js","assets/executionError.c4c51b90.js","assets/utils.39cf51dd.js","assets/generateRendererUtils.663fbe5d.js","assets/json.5152e73f.js","assets/dehydratedFeatureComparison.3f46d56c.js","assets/RenderTexture.c625b537.js"])}};t([n()],l.prototype,"type",void 0),t([n()],l.prototype,"analysisView",void 0),t([n()],l.prototype,"_createAnalysisViewTask",void 0),l=t([w("esri.views.3d.layers.DimensionLayerView3D")],l);const $=l;export{$ as default};