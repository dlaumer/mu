import{s as c,e as r,y as s,b as a,d as n,a as h,n as l,o as d}from"./index.f0b603e5.js";import{A as u}from"./GraphicsProcessor.86e650c7.js";import"./Graphics3DObjectStates.e4779363.js";import"./optimizedFeatureQueryEngineAdapter.199b2146.js";import"./centroid.bdcfdd86.js";import"./PooledRBush.438dec3d.js";import"./quickselect.2c5f2780.js";const y=e=>{let t=class extends c(e){constructor(){super(...arguments),this.graphics=null,this.renderer=null}};return r([s()],t.prototype,"graphics",void 0),r([s()],t.prototype,"renderer",void 0),r([s()],t.prototype,"updating",void 0),r([s()],t.prototype,"view",void 0),t=r([a("esri.views.layers.GraphicsView")],t),t};let o=class extends y(n){constructor(e){super(e),this.processor=null,this.slicePlaneEnabled=!1,this.layer=new g}initialize(){this._set("processor",new u({owner:this}))}destroy(){this._set("processor",h(this.processor))}get graphics(){var e;return(e=this.view)==null?void 0:e.graphics}get loadedGraphics(){return this.graphics}get updating(){var e;return!!((e=this.processor)!=null&&e.updating)}get symbolUpdateType(){return this.processor.graphicsCore.symbolUpdateType}getHit(e){return this.processor.getHit(e)}whenGraphicBounds(e,t){return this.processor.whenGraphicBounds(e,t)}graphicChanged(e){this.processor.graphicsCore.graphicUpdateHandler(e)}get updatePolicy(){return this.processor.graphicsCore.effectiveUpdatePolicy}async queryGraphics(){return this.loadedGraphics}async fetchPopupFeatures(e,t){var i,p;return(p=(i=l(t))==null?void 0:i.clientGraphics)!=null?p:[]}highlight(e){return this.processor.highlight(e)}maskOccludee(e){return this.processor.maskOccludee(e)}};r([s({readOnly:!0})],o.prototype,"graphics",null),r([s()],o.prototype,"loadedGraphics",null),r([s({readOnly:!0})],o.prototype,"updating",null),r([s({constructOnly:!0})],o.prototype,"view",void 0),r([s()],o.prototype,"processor",void 0),r([s({type:Boolean})],o.prototype,"slicePlaneEnabled",void 0),r([s()],o.prototype,"layer",void 0),o=r([a("esri.views.3d.layers.GraphicsView3D")],o);class g extends d{constructor(){super(),this.type="graphics-view-3d-dummy",this.id=this.uid}}const P=o;export{P as default};
