import{O as J,d as R,hV as Y,hW as X,L as U,cY as H,U as A,aR as N,hX as q,al as Z,hY as ee,cS as te,cT as re,p as _,g2 as V,V as O,d3 as x,w as Q,c_ as E,hk as F,hZ as se,hf as W,c$ as z,h_ as ie,h$ as K,bx as oe,ds as le,dp as L,dl as ae,dm as ne,dw as ue,dq as pe,dx as ce,eU as he,dy as ye,dr as de,aq as fe,dA as $,b as me,i0 as ge,i1 as Ae,i2 as M,i3 as Se,e as h,y,f as we,dV as xe,dC as ve,a as _e}from"./index.860f6be5.js";import{s as Ue}from"./ArcGISCachedService.52804310.js";import{n as be,z as Ie}from"./TilemapCache.bd0c7893.js";import{e as Re}from"./jsonContext.f853fce3.js";import{l as $e}from"./StyleRepository.65d7bc34.js";import"./enums.89506096.js";import"./TileClipper.7b9dd3ce.js";let b=null;function Te(e){if(b)return b;const t={lossy:"UklGRiIAAABXRUJQVlA4IBYAAAAwAQCdASoBAAEADsD+JaQAA3AAAAAA",lossless:"UklGRhoAAABXRUJQVlA4TA0AAAAvAAAAEAcQERGIiP4HAA==",alpha:"UklGRkoAAABXRUJQVlA4WAoAAAAQAAAAAAAAAAAAQUxQSAwAAAARBxAR/Q9ERP8DAABWUDggGAAAABQBAJ0BKgEAAQAAAP4AAA3AAP7mtQAAAA==",animation:"UklGRlIAAABXRUJQVlA4WAoAAAASAAAAAAAAAAAAQU5JTQYAAAD/////AABBTk1GJgAAAAAAAAAAAAAAAAAAAGQAAABWUDhMDQAAAC8AAAAQBxAREYiI/gcA"};return b=new Promise(r=>{const s=new Image;s.onload=()=>{s.onload=s.onerror=null,r(s.width>0&&s.height>0)},s.onerror=()=>{s.onload=s.onerror=null,r(!1)},s.src="data:image/webp;base64,"+t[e]}),b}const j=1.15;class B{constructor(t,r){this._spriteSource=t,this._maxTextureSize=r,this.devicePixelRatio=1,this._spriteImageFormat="png",this._isRetina=!1,this._spritesData={},this.image=null,this.width=null,this.height=null,this.loadStatus="not-loaded",t.type==="url"&&t.spriteFormat&&(this._spriteImageFormat=t.spriteFormat),t.pixelRatio&&(this.devicePixelRatio=t.pixelRatio),this.baseURL=t.spriteUrl}get spriteNames(){const t=[];for(const r in this._spritesData)t.push(r);return t.sort(),t}getSpriteInfo(t){return this._spritesData?this._spritesData[t]:null}async load(t){if(this.baseURL){this.loadStatus="loading";try{await this._loadSprites(t),this.loadStatus="loaded"}catch{this.loadStatus="failed"}}else this.loadStatus="failed"}async _loadSprites(t){this._isRetina=this.devicePixelRatio>j;const{width:r,height:s,data:i,json:o}=await this._getSpriteData(this._spriteSource,t),l=Object.keys(o);if(!l||l.length===0||!i)return this._spritesData=this.image=null,void(this.width=this.height=0);this._spritesData=o,this.width=r,this.height=s;const a=Math.max(this._maxTextureSize,4096);if(r>a||s>a){const u=`Sprite resource for style ${this.baseURL} is bigger than the maximum allowed of ${a} pixels}`;throw J.getLogger("esri.layers.support.SpriteSource").error(u),new R("SpriteSource",u)}let n;for(let u=0;u<i.length;u+=4)n=i[u+3]/255,i[u]=i[u]*n,i[u+1]=i[u+1]*n,i[u+2]=i[u+2]*n;this.image=i}async _getSpriteData(t,r){if(t.type==="image"){let p,d;if(this.devicePixelRatio<j){if(!t.spriteSource1x)throw new R("SpriteSource","no image data provided for low resolution sprites!");p=t.spriteSource1x.image,d=t.spriteSource1x.json}else{if(!t.spriteSource2x)throw new R("SpriteSource","no image data provided for high resolution sprites!");p=t.spriteSource2x.image,d=t.spriteSource2x.json}return"width"in p&&"height"in p&&"data"in p&&(Y(p.data)||X(p.data))?{width:p.width,height:p.height,data:new Uint8Array(p.data),json:d}:{...k(p),json:d}}const s=U(this.baseURL),i=s.query?"?"+H(s.query):"",o=this._isRetina?"@2x":"",l=`${s.path}${o}.${this._spriteImageFormat}${i}`,a=`${s.path}${o}.json${i}`,[n,u]=await Promise.all([A(a,r),A(l,{responseType:"image",...r})]);return{...k(u.data),json:n.data}}}function k(e){const t=document.createElement("canvas"),r=t.getContext("2d");t.width=e.width,t.height=e.height,r.drawImage(e,0,0,e.width,e.height);const s=r.getImageData(0,0,e.width,e.height);return{width:e.width,height:e.height,data:new Uint8Array(s.data)}}class Pe{constructor(t){this.url=t}async fetchTileIndex(){return this._tileIndexPromise||(this._tileIndexPromise=A(this.url).then(t=>t.data.index)),this._tileIndexPromise}async dataKey(t,r){const s=await this.fetchTileIndex();return N(r),this._getIndexedDataKey(s,t)}_getIndexedDataKey(t,r){const s=[r];if(r.level<0||r.row<0||r.col<0||r.row>>r.level>0||r.col>>r.level>0)return null;let i=r;for(;i.level!==0;)i=new q(i.level-1,i.row>>1,i.col>>1,i.world),s.push(i);let o,l,a=t,n=s.pop();if(a===1)return n;for(;s.length;)if(o=s.pop(),l=(1&o.col)+((1&o.row)<<1),a){if(a[l]===0){n=null;break}if(a[l]===1){n=o;break}n=o,a=a[l]}return n}}class Oe{constructor(t,r){this._tilemap=t,this._tileIndexUrl=r}async fetchTileIndex(t){return this._tileIndexPromise||(this._tileIndexPromise=A(this._tileIndexUrl,{query:{...t==null?void 0:t.query}}).then(r=>r.data.index)),this._tileIndexPromise}dataKey(t,r){const{level:s,row:i,col:o}=t,l=new q(t);return this._tilemap.fetchAvailabilityUpsample(s,i,o,l,r).then(()=>(l.world=t.world,l)).catch(a=>{if(Z(a))throw a;return null})}}class Le{constructor(t){this._tileUrl=t,this._promise=null,this._abortController=null,this._abortOptions=[]}getData(t){this._promise===null&&(this._abortController=new AbortController,this._promise=this._makeRequest(this._tileUrl,this._abortController.signal));const r=this._abortOptions;return r.push(t),te(t,()=>{r.every(s=>re(s))&&this._abortController.abort()}),this._promise.then(s=>_(s))}async _makeRequest(t,r){const{data:s}=await A(t,{responseType:"array-buffer",signal:r});return s}}const T=new Map;function De(e,t,r,s,i){return Ee(e.replace(/\{z\}/gi,t.toString()).replace(/\{y\}/gi,r.toString()).replace(/\{x\}/gi,s.toString()),i)}function Ee(e,t){return ee(T,e,()=>new Le(e)).getData(t).then(r=>(T.delete(e),r)).catch(r=>{throw T.delete(e),r})}class Me{constructor(t,r,s){var v;this.tilemap=null,this.tileInfo=null,this.capabilities=null,this.fullExtent=null,this.name=t,this.sourceUrl=r;const i=U(this.sourceUrl),o=_(s),l=o.tiles;if(i)for(let f=0;f<l.length;f++){const m=U(l[f]);m&&(V(m.path)||(m.path=O(i.path,m.path)),l[f]=x(m.path,{...i.query,...m.query}))}this.tileServers=l;const a=s.capabilities&&s.capabilities.split(",").map(f=>f.toLowerCase().trim()),n=(s==null?void 0:s.exportTilesAllowed)===!0,u=(a==null?void 0:a.includes("tilemap"))===!0,p=n&&s.hasOwnProperty("maxExportTilesCount")?s.maxExportTilesCount:0;this.capabilities={operations:{supportsExportTiles:n,supportsTileMap:u},exportTiles:n?{maxExportTilesCount:+p}:null},this.tileInfo=be(o.tileInfo,o,null,{ignoreMinMaxLOD:!0});const d=s.tileMap?x(O(i.path,s.tileMap),(v=i.query)!=null?v:{}):null;u?(this.type="vector-tile",this.tilemap=new Oe(new Ie({layer:{parsedUrl:i,tileInfo:this.tileInfo,type:"vector-tile",tileServers:this.tileServers}}),d)):d&&(this.tilemap=new Pe(d)),this.fullExtent=Q.fromJSON(s.fullExtent)}destroy(){}async getRefKey(t,r){var s,i;return(i=await((s=this.tilemap)==null?void 0:s.dataKey(t,r)))!=null?i:t}requestTile(t,r,s,i){const o=this.tileServers[r%this.tileServers.length];return De(o,t,r,s,i)}isCompatibleWith(t){const r=this.tileInfo,s=t.tileInfo;if(!r.spatialReference.equals(s.spatialReference)||!r.origin.equals(s.origin)||Math.round(r.dpi)!==Math.round(s.dpi))return!1;const i=r.lods,o=s.lods,l=Math.min(i.length,o.length);for(let a=0;a<l;a++){const n=i[a],u=o[a];if(n.level!==u.level||Math.round(n.scale)!==Math.round(u.scale))return!1}return!0}}const P=E.defaults&&E.defaults.io.corsEnabledServers;async function je(e,t){const r={source:null,sourceBase:null,sourceUrl:null,validatedSource:null,style:null,styleBase:null,styleUrl:null,sourceNameToSource:{},primarySourceName:"",spriteFormat:"png"},[s,i]=typeof e=="string"?[e,null]:[null,e.jsonUrl];await g(r,"esri",e,i,t);const o={layerDefinition:r.validatedSource,url:s,serviceUrl:r.sourceUrl,style:r.style,styleUrl:r.styleUrl,spriteUrl:r.style.sprite&&w(r.styleBase,r.style.sprite),spriteFormat:r.spriteFormat,glyphsUrl:r.style.glyphs&&w(r.styleBase,r.style.glyphs),sourceNameToSource:r.sourceNameToSource,primarySourceName:r.primarySourceName};return S(o.spriteUrl),S(o.glyphsUrl),o}function S(e){if(!e)return;const t=se(e);P&&!P.includes(t)&&P.push(t)}function w(...e){let t;for(const r of e)r!=null&&(W(r)?t&&(t=t.split("://")[0]+":"+r.trim()):t=V(r)?r:O(t,r));return t?F(t):void 0}async function g(e,t,r,s,i){let o,l,a;if(N(i),typeof r=="string"){const u=z(r);S(u),a=await A(u,{...i,responseType:"json",query:{f:"json",...i==null?void 0:i.query}}),a.ssl&&(o&&(o=o.replace(/^http:/i,"https:")),l&&(l=l.replace(/^http:/i,"https:"))),o=u,l=u}else r!=null&&(a={data:r},o=r.jsonUrl||null,l=s);const n=a==null?void 0:a.data;if(G(n))return e.styleUrl=o||null,ke(e,n,l,i);if(Be(n))return e.sourceUrl?C(e,n,l,!1,t,i):(e.sourceUrl=o||null,C(e,n,l,!0,t,i));throw new Error("You must specify the URL or the JSON for a service or for a style.")}function G(e){return!!(e!=null&&e.sources)}function Be(e){return!G(e)}async function ke(e,t,r,s){const i=r?ie(r):K();e.styleBase=i,e.style=t,e.styleUrl&&S(e.styleUrl),t["sprite-format"]&&t["sprite-format"].toLowerCase()==="webp"&&(e.spriteFormat="webp");const o=[];if(t.sources&&t.sources.esri){const l=t.sources.esri;l.url?await g(e,"esri",w(i,l.url),void 0,s):o.push(g(e,"esri",l,i,s))}for(const l of Object.keys(t.sources))l!=="esri"&&t.sources[l].type==="vector"&&(t.sources[l].url?o.push(g(e,l,w(i,t.sources[l].url),void 0,s)):t.sources[l].tiles&&o.push(g(e,l,t.sources[l],i,s)));await Promise.all(o)}async function C(e,t,r,s,i,o){var u;const l=r?F(r)+"/":K(),a=Ce(t,l),n=new Me(i,x(l,(u=o==null?void 0:o.query)!=null?u:{}),a);if(!s&&e.primarySourceName in e.sourceNameToSource){const p=e.sourceNameToSource[e.primarySourceName];if(!p.isCompatibleWith(n))return;n.fullExtent!=null&&(p.fullExtent!=null?p.fullExtent.union(n.fullExtent):p.fullExtent=n.fullExtent.clone()),p.tileInfo&&n.tileInfo&&p.tileInfo.lods.length<n.tileInfo.lods.length&&(p.tileInfo=n.tileInfo)}if(s?(e.sourceBase=l,e.source=t,e.validatedSource=a,e.primarySourceName=i,e.sourceUrl&&S(e.sourceUrl)):S(l),e.sourceNameToSource[i]=n,!e.style){if(t.defaultStyles==null)throw new Error;return typeof t.defaultStyles=="string"?g(e,"",w(l,t.defaultStyles,"root.json"),void 0,o):g(e,"",t.defaultStyles,w(l,"root.json"),o)}}function Ce(e,t){var u;if(e.hasOwnProperty("tileInfo"))return e;const r={xmin:-20037507067161843e-9,ymin:-20037507067161843e-9,xmax:20037507067161843e-9,ymax:20037507067161843e-9,spatialReference:{wkid:102100}},s=512;let i=78271.51696400007,o=2958287637957775e-7;const l=[],a=e.hasOwnProperty("minzoom")?+e.minzoom:0,n=e.hasOwnProperty("maxzoom")?+e.maxzoom:22;for(let p=0;p<=n;p++)p>=a&&l.push({level:p,scale:o,resolution:i}),i/=2,o/=2;for(const p of(u=e.tiles)!=null?u:[])S(w(t,p));return{capabilities:"TilesOnly",initialExtent:r,fullExtent:r,minScale:0,maxScale:0,tiles:e.tiles,tileInfo:{rows:s,cols:s,dpi:96,format:"pbf",origin:{x:-20037508342787e-6,y:20037508342787e-6},lods:l,spatialReference:{wkid:102100}}}}const I=1e-6;function Ne(e,t){if(e===t)return!0;if(e==null&&t!=null||e!=null&&t==null||e==null||t==null||!e.spatialReference.equals(t.spatialReference)||e.dpi!==t.dpi)return!1;const r=e.origin,s=t.origin;if(Math.abs(r.x-s.x)>=I||Math.abs(r.y-s.y)>=I)return!1;let i,o;e.lods[0].scale>t.lods[0].scale?(i=e,o=t):(o=e,i=t);for(let l=i.lods[0].scale;l>=o.lods[o.lods.length-1].scale-I;l/=2)if(Math.abs(l-o.lods[0].scale)<I)return!0;return!1}function qe(e,t){if(e===t)return e;if(e==null&&t!=null)return t;if(e!=null&&t==null)return e;if(e==null||t==null)return null;const r=e.size[0],s=e.format,i=e.dpi,o=new oe({x:e.origin.x,y:e.origin.y}),l=e.spatialReference,a=e.lods[0].scale>t.lods[0].scale?e.lods[0]:t.lods[0],n=e.lods[e.lods.length-1].scale<=t.lods[t.lods.length-1].scale?e.lods[e.lods.length-1]:t.lods[t.lods.length-1],u=a.scale,p=a.resolution,d=n.scale,v=[];let f=u,m=p,D=0;for(;f>d;)v.push(new le({level:D,resolution:m,scale:f})),D++,f/=2,m/=2;return new L({size:[r,r],dpi:i,format:s||"pbf",origin:o,lods:v,spatialReference:l})}let c=class extends ae(ne(Ue(ue(pe(ce(he(ye(de(fe))))))))){constructor(...e){super(...e),this._spriteSourceMap=new Map,this.currentStyleInfo=null,this.style=null,this.isReference=null,this.operationalLayerType="VectorTileLayer",this.type="vector-tile",this.url=null,this.showCollisionBoxes="none",this.path=null}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}destroy(){if(this.sourceNameToSource)for(const e of Object.values(this.sourceNameToSource))e==null||e.destroy();this._spriteSourceMap.clear()}async prefetchResources(e){await this.loadSpriteSource(globalThis.devicePixelRatio||1,e)}load(e){const t=this.loadFromPortal({supportedTypes:["Vector Tile Service"],supportsData:!1},e).catch($).then(async()=>{if(!this.portalItem||!this.portalItem.id)return;const r=`${this.portalItem.itemUrl}/resources/styles/root.json`;(await A(r,{...e,query:{f:"json",...this.customParameters,token:this.apiKey}})).data&&this.read({url:r},Re(this.portalItem))}).catch($).then(()=>this._loadStyle(e));return this.addResolvingPromise(t),Promise.resolve(this)}get attributionDataUrl(){const e=this.currentStyleInfo,t=e&&e.serviceUrl&&U(e.serviceUrl);if(!t)return null;const r=this._getDefaultAttribution(t.path);return r?x(r,{...this.customParameters,token:this.apiKey}):null}get capabilities(){const e=this.primarySource;return e?e.capabilities:{operations:{supportsExportTiles:!1,supportsTileMap:!1},exportTiles:null}}get fullExtent(){var e;return((e=this.primarySource)==null?void 0:e.fullExtent)||null}get parsedUrl(){return this.serviceUrl?U(this.serviceUrl):null}get serviceUrl(){return this.currentStyleInfo&&this.currentStyleInfo.serviceUrl||null}get spatialReference(){var e,t;return(t=(e=this.tileInfo)==null?void 0:e.spatialReference)!=null?t:null}get styleUrl(){return this.currentStyleInfo&&this.currentStyleInfo.styleUrl||null}writeStyleUrl(e,t){e&&W(e)&&(e=`https:${e}`);const r=me(ge(e));t.styleUrl=Ae(e,r)}get tileInfo(){var r;const e=[];for(const s in this.sourceNameToSource)e.push(this.sourceNameToSource[s]);let t=((r=this.primarySource)==null?void 0:r.tileInfo)||new L;if(e.length>1)for(let s=0;s<e.length;s++)Ne(t,e[s].tileInfo)&&(t=qe(t,e[s].tileInfo));return t}readVersion(e,t){return t.version?parseFloat(t.version):parseFloat(t.currentVersion)}async loadSpriteSource(e=1,t){var r,s;if(!this._spriteSourceMap.has(e)){const i=M("2d").maxTextureSize,o=(r=this.currentStyleInfo)!=null&&r.spriteUrl?x(this.currentStyleInfo.spriteUrl,{...this.customParameters,token:this.apiKey}):null,l=new B({type:"url",spriteUrl:o,pixelRatio:e,spriteFormat:(s=this.currentStyleInfo)==null?void 0:s.spriteFormat},i);await l.load(t),this._spriteSourceMap.set(e,l)}return this._spriteSourceMap.get(e)}async setSpriteSource(e,t){if(!e)return null;const r=M("2d").maxTextureSize,s=e.spriteUrl,i=s?x(s,{...this.customParameters,token:this.apiKey}):null;if(!i&&e.type==="url")return null;const o=new B(e,r);try{await o.load(t);const l=e.pixelRatio||1;return this._spriteSourceMap.clear(),this._spriteSourceMap.set(l,o),i&&this.currentStyleInfo&&(this.currentStyleInfo.spriteUrl=i),this.emit("spriteSource-change",{spriteSource:o}),o}catch(l){$(l)}return null}async loadStyle(e,t){var s;const r=e||this.style||this.url;return this._loadingTask&&typeof r=="string"&&this.url===r||((s=this._loadingTask)==null||s.abort(),this._loadingTask=Se(i=>(this._spriteSourceMap.clear(),this._getSourceAndStyle(r,{signal:i})),t)),this._loadingTask.promise}getStyleLayerId(e){return this.styleRepository.getStyleLayerId(e)}getStyleLayerIndex(e){return this.styleRepository.getStyleLayerIndex(e)}getPaintProperties(e){return _(this.styleRepository.getPaintProperties(e))}setPaintProperties(e,t){const r=this.styleRepository.isPainterDataDriven(e);this.styleRepository.setPaintProperties(e,t);const s=this.styleRepository.isPainterDataDriven(e);this.emit("paint-change",{layer:e,paint:t,isDataDriven:r||s})}getStyleLayer(e){return _(this.styleRepository.getStyleLayer(e))}setStyleLayer(e,t){this.styleRepository.setStyleLayer(e,t),this.emit("style-layer-change",{layer:e,index:t})}deleteStyleLayer(e){this.styleRepository.deleteStyleLayer(e),this.emit("delete-style-layer",{layer:e})}getLayoutProperties(e){return _(this.styleRepository.getLayoutProperties(e))}setLayoutProperties(e,t){this.styleRepository.setLayoutProperties(e,t),this.emit("layout-change",{layer:e,layout:t})}setStyleLayerVisibility(e,t){this.styleRepository.setStyleLayerVisibility(e,t),this.emit("style-layer-visibility-change",{layer:e,visibility:t})}getStyleLayerVisibility(e){return this.styleRepository.getStyleLayerVisibility(e)}write(e,t){return(t==null?void 0:t.origin)&&!this.styleUrl?(t.messages&&t.messages.push(new R("vectortilelayer:unsupported",`VectorTileLayer (${this.title}, ${this.id}) with style defined by JSON only are not supported`,{layer:this})),null):super.write(e,t)}getTileUrl(e,t,r){return null}async _getSourceAndStyle(e,t){if(!e)throw new Error("invalid style!");const r=await je(e,{...t,query:{...this.customParameters,token:this.apiKey}});r.spriteFormat==="webp"&&(await Te("lossy")||(r.spriteFormat="png")),this._set("currentStyleInfo",{...r}),typeof e=="string"?(this.url=e,this.style=null):(this.url=null,this.style=e),this._set("sourceNameToSource",r.sourceNameToSource),this._set("primarySource",r.sourceNameToSource[r.primarySourceName]),this._set("styleRepository",new $e(r.style)),this.read(r.layerDefinition,{origin:"service"}),this.emit("load-style")}_getDefaultAttribution(e){const t=e.match(/^https?:\/\/(?:basemaps|basemapsbeta|basemapsdev)(?:-api)?\.arcgis\.com(\/[^\/]+)?\/arcgis\/rest\/services\/([^\/]+(\/[^\/]+)*)\/vectortileserver/i),r=["OpenStreetMap_v2","OpenStreetMap_Daylight_v2","OpenStreetMap_Export_v2","OpenStreetMap_FTS_v2","OpenStreetMap_GCS_v2","World_Basemap","World_Basemap_v2","World_Basemap_Export_v2","World_Basemap_GCS_v2","World_Basemap_WGS84","World_Contours_v2"];if(!t)return;const s=t[2]&&t[2].toLowerCase();if(!s)return;const i=t[1]||"";for(const o of r)if(o.toLowerCase().includes(s))return z(`//static.arcgis.com/attribution/Vector${i}/${o}`)}async _loadStyle(e){var t,r;return(r=(t=this._loadingTask)==null?void 0:t.promise)!=null?r:this.loadStyle(null,e)}};h([y({readOnly:!0})],c.prototype,"attributionDataUrl",null),h([y({type:["show","hide"]})],c.prototype,"listMode",void 0),h([y({json:{read:!0,write:!0}})],c.prototype,"blendMode",void 0),h([y({readOnly:!0,json:{read:!1}})],c.prototype,"capabilities",null),h([y({readOnly:!0})],c.prototype,"currentStyleInfo",void 0),h([y({json:{read:!1},readOnly:!0,type:Q})],c.prototype,"fullExtent",null),h([y()],c.prototype,"style",void 0),h([y({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),h([y({type:["VectorTileLayer"]})],c.prototype,"operationalLayerType",void 0),h([y({readOnly:!0})],c.prototype,"parsedUrl",null),h([y({readOnly:!0})],c.prototype,"serviceUrl",null),h([y({type:we,readOnly:!0})],c.prototype,"spatialReference",null),h([y({readOnly:!0})],c.prototype,"styleRepository",void 0),h([y({readOnly:!0})],c.prototype,"sourceNameToSource",void 0),h([y({readOnly:!0})],c.prototype,"primarySource",void 0),h([y({type:String,readOnly:!0,json:{write:{ignoreOrigin:!0},origins:{"web-document":{write:{ignoreOrigin:!0,isRequired:!0}}}}})],c.prototype,"styleUrl",null),h([xe(["portal-item","web-document"],"styleUrl")],c.prototype,"writeStyleUrl",null),h([y({json:{read:!1,origins:{service:{read:!1}}},readOnly:!0,type:L})],c.prototype,"tileInfo",null),h([y({json:{read:!1},readOnly:!0,value:"vector-tile"})],c.prototype,"type",void 0),h([y({json:{origins:{"web-document":{read:{source:"styleUrl"}},"portal-item":{read:{source:"url"}}},write:!1,read:!1}})],c.prototype,"url",void 0),h([y({readOnly:!0})],c.prototype,"version",void 0),h([ve("version",["version","currentVersion"])],c.prototype,"readVersion",null),h([y({type:String})],c.prototype,"showCollisionBoxes",void 0),h([y({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],c.prototype,"path",void 0),c=h([_e("esri.layers.VectorTileLayer")],c);const Je=c;export{Je as default};