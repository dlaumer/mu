import{dw as v,dq as m,dx as w,dr as g,eJ as _,eK as f,r as p,d as T,dA as S,U as d,eL as I,cY as O,_ as c,aR as h,e as o,y as s,dT as D,dU as E,dC as $,a as b,aq as A}from"./index.857de027.js";import{s as L}from"./ArcGISCachedService.2f5504f4.js";import"./TilemapCache.d0950931.js";let a=class extends L(v(m(w(g(A))))){constructor(...e){super(...e),this.copyright=null,this.heightModelInfo=null,this.path=null,this.minScale=void 0,this.maxScale=void 0,this.opacity=1,this.operationalLayerType="ArcGISTiledElevationServiceLayer",this.sourceJSON=null,this.type="elevation",this.url=null,this.version=null,this._lercDecoder=_()}normalizeCtorArgs(e,r){return typeof e=="string"?{url:e,...r}:e}destroy(){this._lercDecoder=f(this._lercDecoder)}readVersion(e,r){let t=r.currentVersion;return t||(t=9.3),t}load(e){const r=p(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Image Service"],supportsData:!1,validateItem:t=>{for(let i=0;i<t.typeKeywords.length;i++)if(t.typeKeywords[i].toLowerCase()==="elevation 3d layer")return!0;throw new T("portal:invalid-layer-item-type","Invalid layer item type '${type}', expected '${expectedType}' ",{type:"Image Service",expectedType:"Image Service Elevation 3D Layer"})}},e).catch(S).then(()=>this._fetchImageService(r))),Promise.resolve(this)}fetchTile(e,r,t,i){const l=p((i=i||{signal:null}).signal)?i.signal:i.signal=new AbortController().signal,y={responseType:"array-buffer",signal:l},u={noDataValue:i.noDataValue,returnFileInfo:!0};return this.load().then(()=>this._fetchTileAvailability(e,r,t,i)).then(()=>d(this.getTileUrl(e,r,t),y)).then(n=>this._lercDecoder.decode(n.data,u,l)).then(n=>new I(n))}getTileUrl(e,r,t){const i=!this.tilemapCache&&this.supportsBlankTile,l=O({...this.parsedUrl.query,blankTile:!i&&null});return`${this.parsedUrl.path}/tile/${e}/${r}/${t}${l?"?"+l:""}`}async queryElevation(e,r){const{ElevationQuery:t}=await c(()=>import("./ElevationQuery.297b46a1.js"),["assets/ElevationQuery.297b46a1.js","assets/index.857de027.js","assets/index.3f2fc127.css"]);return h(r),new t().query(this,e,r)}async createElevationSampler(e,r){const{ElevationQuery:t}=await c(()=>import("./ElevationQuery.297b46a1.js"),["assets/ElevationQuery.297b46a1.js","assets/index.857de027.js","assets/index.3f2fc127.css"]);return h(r),new t().createSampler(this,e,r)}_fetchTileAvailability(e,r,t,i){return this.tilemapCache?this.tilemapCache.fetchAvailability(e,r,t,i):Promise.resolve("unknown")}async _fetchImageService(e){var i;if(this.sourceJSON)return this.sourceJSON;const r={query:{f:"json",...this.parsedUrl.query},responseType:"json",signal:e},t=await d(this.parsedUrl.path,r);t.ssl&&(this.url=(i=this.url)==null?void 0:i.replace(/^http:/i,"https:")),this.sourceJSON=t.data,this.read(t.data,{origin:"service",url:this.parsedUrl})}get hasOverriddenFetchTile(){return!this.fetchTile.__isDefault__}};o([s({json:{read:{source:"copyrightText"}}})],a.prototype,"copyright",void 0),o([s({readOnly:!0,type:D})],a.prototype,"heightModelInfo",void 0),o([s({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],a.prototype,"path",void 0),o([s({type:["show","hide"]})],a.prototype,"listMode",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"minScale",void 0),o([s({json:{read:!1,write:!1,origins:{service:{read:!1,write:!1},"portal-item":{read:!1,write:!1},"web-document":{read:!1,write:!1}}},readOnly:!0})],a.prototype,"maxScale",void 0),o([s({json:{read:!1,write:!1,origins:{"web-document":{read:!1,write:!1}}}})],a.prototype,"opacity",void 0),o([s({type:["ArcGISTiledElevationServiceLayer"]})],a.prototype,"operationalLayerType",void 0),o([s()],a.prototype,"sourceJSON",void 0),o([s({json:{read:!1},value:"elevation",readOnly:!0})],a.prototype,"type",void 0),o([s(E)],a.prototype,"url",void 0),o([s()],a.prototype,"version",void 0),o([$("version",["currentVersion"])],a.prototype,"readVersion",null),a=o([b("esri.layers.ElevationLayer")],a),a.prototype.fetchTile.__isDefault__=!0;const V=a;export{V as default};