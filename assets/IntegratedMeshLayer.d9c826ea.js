import{ey as S,at as w,L as _,U as T,bq as m,e as i,y as r,a as u,dw as O,dq as L,dx as x,dm as I,dr as $,dy as b,aq as A,a5 as M,bh as N,an as U,fZ as j,dA as D,r as J,t as V,d,dC as K,dF as P}from"./index.c2b4fb6e.js";import{g as E}from"./persistable.758b5afb.js";import{E as q,L as h}from"./SceneService.f97afb0c.js";import{s as R,l as z,u as C,m as F}from"./I3SLayerDefinitions.a18219e8.js";import{f as y}from"./SceneModification.8c38e9b3.js";import"./multiOriginJSONSupportUtils.6105c957.js";import"./resourceExtension.2d9abca0.js";import"./originUtils.5c585c3a.js";import"./I3SIndexInfo.827c76ac.js";import"./resourceUtils.8a74c93f.js";var a;let n=a=class extends S(w.ofType(y)){constructor(e){super(e),this.url=null}clone(){return new a({url:this.url,items:this.items.map(e=>e.clone())})}toJSON(e){return this.toArray().map(o=>o.toJSON(e)).filter(o=>!!o.geometry)}static fromJSON(e,o){const s=new a;for(const p of e)s.add(y.fromJSON(p,o));return s}static async fromUrl(e,o,s){const p={url:_(e),origin:"service"},v=await T(e,{responseType:"json",signal:m(s,"signal")}),g=o.toJSON(),l=[];for(const c of v.data)l.push(y.fromJSON({...c,geometry:{...c.geometry,spatialReference:g}},p));return new a({url:e,items:l})}};i([r({type:String})],n.prototype,"url",void 0),n=a=i([u("esri.layers.support.SceneModifications")],n);const f=n;let t=class extends q(O(L(x(I($(b(A))))))){constructor(...e){super(...e),this._handles=new M,this.geometryType="mesh",this.operationalLayerType="IntegratedMeshLayer",this.type="integrated-mesh",this.nodePages=null,this.materialDefinitions=null,this.textureSetDefinitions=null,this.geometryDefinitions=null,this.serviceUpdateTimeStamp=null,this.profile="mesh-pyramids",this.modifications=null,this._modificationsSource=null,this.elevationInfo=null,this.path=null}destroy(){this._handles.destroy()}initialize(){this._handles.add(N(()=>this.modifications,"after-changes",()=>this.modifications=this.modifications,U))}normalizeCtorArgs(e,o){return typeof e=="string"?{url:e,...o}:e}readModifications(e,o,s){this._modificationsSource={url:j(e,s),context:s}}async load(e){return this.addResolvingPromise(this._doLoad(e)),this}async _doLoad(e){const o=m(e,"signal");try{await this.loadFromPortal({supportedTypes:["Scene Service"]},e)}catch(s){D(s)}if(await this._fetchService(o),J(this._modificationsSource)){const s=await f.fromUrl(this._modificationsSource.url,this.spatialReference,e);this.setAtOrigin("modifications",s,this._modificationsSource.context.origin),this._modificationsSource=null}await this._fetchIndexAndUpdateExtent(this.nodePages,o)}beforeSave(){if(!V(this._modificationsSource))return this.load().then(()=>{},()=>{})}async saveAs(e,o){return this._debouncedSaveOperations(h.SAVE_AS,{...o,getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"},e)}async save(){const e={getTypeKeywords:()=>this._getTypeKeywords(),portalItemLayerType:"integrated-mesh"};return this._debouncedSaveOperations(h.SAVE,e)}validateLayer(e){if(e.layerType&&e.layerType!=="IntegratedMesh")throw new d("integrated-mesh-layer:layer-type-not-supported","IntegratedMeshLayer does not support this layer type",{layerType:e.layerType});if(isNaN(this.version.major)||isNaN(this.version.minor))throw new d("layer:service-version-not-supported","Service version is not supported.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"});if(this.version.major>1)throw new d("layer:service-version-too-new","Service version is too new.",{serviceVersion:this.version.versionString,supportedVersions:"1.x"})}_getTypeKeywords(){return["IntegratedMeshLayer"]}};i([r({type:String,readOnly:!0})],t.prototype,"geometryType",void 0),i([r({type:["show","hide"]})],t.prototype,"listMode",void 0),i([r({type:["IntegratedMeshLayer"]})],t.prototype,"operationalLayerType",void 0),i([r({json:{read:!1},readOnly:!0})],t.prototype,"type",void 0),i([r({type:R,readOnly:!0})],t.prototype,"nodePages",void 0),i([r({type:[z],readOnly:!0})],t.prototype,"materialDefinitions",void 0),i([r({type:[C],readOnly:!0})],t.prototype,"textureSetDefinitions",void 0),i([r({type:[F],readOnly:!0})],t.prototype,"geometryDefinitions",void 0),i([r({readOnly:!0})],t.prototype,"serviceUpdateTimeStamp",void 0),i([r({type:f}),E({origins:["web-scene","portal-item"],type:"resource",prefix:"modifications"})],t.prototype,"modifications",void 0),i([K(["web-scene","portal-item"],"modifications")],t.prototype,"readModifications",null),i([r(P)],t.prototype,"elevationInfo",void 0),i([r({type:String,json:{origins:{"web-scene":{read:!0,write:!0},"portal-item":{read:!0,write:!0}},read:!1}})],t.prototype,"path",void 0),t=i([u("esri.layers.IntegratedMeshLayer")],t);const te=t;export{te as default};