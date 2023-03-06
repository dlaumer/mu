import{r8 as w,ru as I,r9 as $,mH as O,mI as T,mJ as E,mK as R,ra as M,rd as L,rr as P,bW as j,B as F,r as J,fS as N,gS as b,cj as g,bZ as U,bx as f,ar as q,c2 as _,re as k,rU as A,L as v,w as V,e as i,y as p,sb as S,c5 as z,c6 as B,dX as H,mP as K,b as W}from"./index.f0b603e5.js";import{E as C,y as D,Z as G}from"./SublayersOwner.99fa8870.js";import{c as Z}from"./ExportImageParameters.2e1ebecd.js";import{e as X}from"./imageBitmapUtils.c9776db4.js";import{n as x}from"./sublayerUtils.537edd27.js";import"./QueryTask.8a0cd7cf.js";import"./executeForIds.2b431ace.js";import"./floorFilterUtils.4de71259.js";let r=class extends w(I($(C(D(O(T(E(R(M(L(P(j(F))))))))))))){constructor(...e){super(...e),this.dateFieldsTimeReference=null,this.datesInUnknownTimezone=!1,this.dpi=96,this.gdbVersion=null,this.imageFormat="png24",this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.isReference=null,this.labelsVisible=!1,this.operationalLayerType="ArcGISMapServiceLayer",this.preferredTimeReference=null,this.sourceJSON=null,this.sublayers=null,this.type="map-image",this.url=null}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}load(e){const s=J(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["Map Service"]},e).catch(N).then(()=>this._fetchService(s))),Promise.resolve(this)}readImageFormat(e,s){const c=s.supportedImageFormatTypes;return c&&c.includes("PNG32")?"png32":"png24"}writeSublayers(e,s,c,t){var h;if(!this.loaded||!e)return;const n=e.slice().reverse().flatten(({sublayers:a})=>a&&a.toArray().reverse()).toArray();let l=!1;if(this.capabilities&&this.capabilities.operations.supportsExportMap&&((h=this.capabilities.exportMap)==null?void 0:h.supportsDynamicLayers)){const a=b(t.origin);if(a===g.PORTAL_ITEM){const o=this.createSublayersForOrigin("service").sublayers;l=x(n,o,g.SERVICE)}else if(a>g.PORTAL_ITEM){const o=this.createSublayersForOrigin("portal-item");l=x(n,o.sublayers,b(o.origin))}}const m=[],d={writeSublayerStructure:l,...t};let y=l;n.forEach(a=>{const o=a.write({},d);m.push(o),y=y||a.originOf("visible")==="user"}),m.some(a=>Object.keys(a).length>1)&&(s.layers=m),y&&(s.visibleLayers=n.filter(a=>a.visible).map(a=>a.id))}createExportImageParameters(e,s,c,t){const n=t&&t.pixelRatio||1;e&&this.version>=10&&(e=e.clone().shiftCentralMeridian());const l=new Z({layer:this,floors:t==null?void 0:t.floors,scale:U({extent:e,width:s})*n}),m=l.toJSON();l.destroy();const d=!t||!t.rotation||this.version<10.3?{}:{rotation:-t.rotation},y=e&&e.spatialReference,h=y.wkid||JSON.stringify(y.toJSON());m.dpi*=n;const a={};if(t!=null&&t.timeExtent){const{start:o,end:u}=t.timeExtent.toJSON();a.time=o&&u&&o===u?""+o:`${o!=null?o:"null"},${u!=null?u:"null"}`}else this.timeInfo&&!this.timeInfo.hasLiveData&&(a.time="null,null");return{bbox:e&&e.xmin+","+e.ymin+","+e.xmax+","+e.ymax,bboxSR:h,imageSR:h,size:s+","+c,...m,...d,...a}}async fetchImage(e,s,c,t){const{data:n}=await this._fetchImage("image",e,s,c,t);return n}async fetchImageBitmap(e,s,c,t){const{data:n,url:l}=await this._fetchImage("blob",e,s,c,t);return X(n,l)}async fetchRecomputedExtents(e={}){const s={...e,query:{returnUpdates:!0,f:"json",...this.customParameters,token:this.apiKey}},{data:c}=await f(this.url,s),{extent:t,fullExtent:n,timeExtent:l}=c,m=t||n;return{fullExtent:m&&q.fromJSON(m),timeExtent:l&&_.fromJSON({start:l[0],end:l[1]})}}loadAll(){return k(this,e=>{e(this.allSublayers)})}serviceSupportsSpatialReference(e){return A(this,e)}async _fetchImage(e,s,c,t,n){var d,y,h,a;const l={responseType:e,signal:(d=n==null?void 0:n.signal)!=null?d:null,query:{...this.parsedUrl.query,...this.createExportImageParameters(s,c,t,n),f:"image",...this.refreshParameters,...this.customParameters,token:this.apiKey}},m=this.parsedUrl.path+"/export";if(((y=l.query)==null?void 0:y.dynamicLayers)!=null&&!((a=(h=this.capabilities)==null?void 0:h.exportMap)!=null&&a.supportsDynamicLayers))throw new v("mapimagelayer:dynamiclayer-not-supported",`service ${this.url} doesn't support dynamic layers, which is required to be able to change the sublayer's order, rendering, labeling or source.`,{query:l.query});try{const{data:o}=await f(m,l);return{data:o,url:m}}catch(o){throw V(o)?o:new v("mapimagelayer:image-fetch-error",`Unable to load image: ${m}`,{error:o})}}async _fetchService(e){if(this.sourceJSON)return void this.read(this.sourceJSON,{origin:"service",url:this.parsedUrl});const{data:s,ssl:c}=await f(this.parsedUrl.path,{query:{f:"json",...this.parsedUrl.query,...this.customParameters,token:this.apiKey},signal:e});c&&(this.url=this.url.replace(/^http:/i,"https:")),this.sourceJSON=s,this.read(s,{origin:"service",url:this.parsedUrl})}};i([p({type:S})],r.prototype,"dateFieldsTimeReference",void 0),i([p({type:Boolean})],r.prototype,"datesInUnknownTimezone",void 0),i([p()],r.prototype,"dpi",void 0),i([p()],r.prototype,"gdbVersion",void 0),i([p()],r.prototype,"imageFormat",void 0),i([z("imageFormat",["supportedImageFormatTypes"])],r.prototype,"readImageFormat",null),i([p({json:{origins:{service:{read:{source:"maxImageHeight"}}}}})],r.prototype,"imageMaxHeight",void 0),i([p({json:{origins:{service:{read:{source:"maxImageWidth"}}}}})],r.prototype,"imageMaxWidth",void 0),i([p()],r.prototype,"imageTransparency",void 0),i([p({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],r.prototype,"isReference",void 0),i([p({json:{read:!1,write:!1}})],r.prototype,"labelsVisible",void 0),i([p({type:["ArcGISMapServiceLayer"]})],r.prototype,"operationalLayerType",void 0),i([p({json:{read:!1,write:!1}})],r.prototype,"popupEnabled",void 0),i([p({type:S})],r.prototype,"preferredTimeReference",void 0),i([p()],r.prototype,"sourceJSON",void 0),i([p({json:{write:{ignoreOrigin:!0}}})],r.prototype,"sublayers",void 0),i([B("sublayers",{layers:{type:[G]},visibleLayers:{type:[H]}})],r.prototype,"writeSublayers",null),i([p({type:["show","hide","hide-children"]})],r.prototype,"listMode",void 0),i([p({json:{read:!1},readOnly:!0,value:"map-image"})],r.prototype,"type",void 0),i([p(K)],r.prototype,"url",void 0),r=i([W("esri.layers.MapImageLayer")],r);const oe=r;export{oe as default};
