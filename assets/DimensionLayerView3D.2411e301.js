import{e as t,y as n,b as w,r as a,G as c,cz as h,x as V,H as d,L as u,fT as p,a as _,cw as m,i as v,cy as A,bo as f}from"./index.f0b603e5.js";import{n as D}from"./LayerView3D.f82aec1c.js";import{u as T}from"./LayerView.37a25fbb.js";const k=e=>{let s=class extends e{constructor(...i){super(...i),this.layer=null}get interactive(){return!!a(this.analysisView)&&this.analysisView.interactive}set interactive(i){a(this.analysisView)&&(this.analysisView.interactive=i)}get results(){return a(this.analysisView)?this.analysisView.results:new c}get selectedDimension(){return a(this.analysisView)?this.analysisView.selectedDimension:null}set selectedDimension(i){a(this.analysisView)&&(this.analysisView.selectedDimension=i)}async createLengthDimensions(i){if(!a(this.analysisView))throw h();await this.analysisView.createLengthDimensions(i)}};return t([n()],s.prototype,"layer",void 0),t([n()],s.prototype,"interactive",null),t([n({readOnly:!0})],s.prototype,"results",null),t([n()],s.prototype,"selectedDimension",null),t([n()],s.prototype,"analysisView",void 0),s=t([w("esri.views.layers.DimensionLayerView")],s),s},y="analysis-view-handles";let l=class extends D(k(T)){constructor(e){super(e),this.type="dimension-3d",this._analysisModule=null}initialize(){this.handles.add(V(()=>this.layer.source,e=>{this._destroyAnalysisView(),a(e)&&this._createAnalysisView(e)},d),y)}destroy(){this.handles.remove(y),this._destroyAnalysisView()}isUpdating(){return a(this._createAnalysisViewTask)||a(this.analysisView)&&this.analysisView.updating}async whenAnalysisView(){if(a(this.analysisView))return this.analysisView;if(a(this._createAnalysisViewTask))return this._createAnalysisViewTask.promise;throw new u("layerview:no-analysisview-for-analysis","The analysis has not been set on the DimensionLayer of this layer view")}_createAnalysisView(e){const s=p(async i=>(this.analysisView=await this._createAnalysisViewPromise(e,i),this._createAnalysisViewTask===s&&(this._createAnalysisViewTask=null),this.analysisView));this.addResolvingPromise(s.promise),this._createAnalysisViewTask=s}_destroyAnalysisView(){this.analysisView=_(this.analysisView),this._createAnalysisViewTask=m(this._createAnalysisViewTask)}async _createAnalysisViewPromise(e,s){let i=this._analysisModule;if(v(i)){const o=await this._loadAnalysisModule();this._analysisModule=o,i=o}const r=new i.default({analysis:e,view:this.view,parent:this});if(await r.when(),A(s))throw r.destroy(),h();return r}_loadAnalysisModule(){return f(()=>import("./DimensionAnalysisView3D.2ce5e71d.js").then(function(e){return e.D}),["assets/DimensionAnalysisView3D.2ce5e71d.js","assets/index.f0b603e5.js","assets/index.574508c2.css","assets/LineVisualElement.98f2f691.js","assets/LengthDimension.712a4a98.js","assets/Segment.b21fb86f.js","assets/elevationInfoUtils.1b829c91.js","assets/analysisViewUtils.dc9a2936.js","assets/ImageMaterial.03469668.js","assets/Factory.64e9be4a.js","assets/RightAngleQuadVisualElement.e094d36b.js","assets/VisualElementResources.082d8281.js","assets/PointVisualElement.304a7905.js","assets/colorUtils.31a1b5d7.js","assets/EditGeometryOperations.1523212e.js","assets/QueryEngineResult.a34a99f5.js","assets/WhereClause.7eef08f1.js","assets/executionError.c4c51b90.js","assets/utils.a24099e7.js","assets/generateRendererUtils.8b94a88c.js","assets/json.5152e73f.js","assets/dehydratedFeatureComparison.d06fa8a6.js","assets/RenderTexture.88b033d3.js"])}};t([n()],l.prototype,"type",void 0),t([n()],l.prototype,"analysisView",void 0),t([n()],l.prototype,"_createAnalysisViewTask",void 0),l=t([w("esri.views.3d.layers.DimensionLayerView3D")],l);const M=l;export{M as default};
