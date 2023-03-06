import{mT as U,r8 as S,r9 as P,ra as R,B as k,j4 as b,c1 as c,ar as I,b8 as L,bx as h,L as u,e as r,y as s,b as j,e6 as _,mI as $,mK as O,aS as A,rb as a,r as f,i as T}from"./index.f0b603e5.js";import{e as K}from"./imageBitmapUtils.c9776db4.js";var w;const y=new U("0/0/0",0,0,0,void 0);let g=w=class extends S(P(R(k))){constructor(){super(...arguments),this.tileInfo=b.create({spatialReference:c.WebMercator,size:256}),this.type="base-tile",this.fullExtent=new I(-20037508342787e-6,-2003750834278e-5,2003750834278e-5,20037508342787e-6,c.WebMercator),this.spatialReference=c.WebMercator}getTileBounds(t,e,i,n){const l=n||L();return y.level=t,y.row=e,y.col=i,y.extent=l,this.tileInfo.updateTileInfo(y),y.extent=void 0,l}fetchTile(t,e,i,n={}){const{signal:l}=n,p=this.getTileUrl(t,e,i),d={responseType:"image",signal:l,query:{...this.refreshParameters}};return h(p!=null?p:"",d).then(m=>m.data)}async fetchImageBitmapTile(t,e,i,n={}){var M;const{signal:l}=n;if(this.fetchTile!==w.prototype.fetchTile){const x=await this.fetchTile(t,e,i,n);try{return createImageBitmap(x)}catch(B){throw new u("request:server",`Unable to load tile ${t}/${e}/${i}`,{error:B,level:t,row:e,col:i})}}const p=(M=this.getTileUrl(t,e,i))!=null?M:"",d={responseType:"blob",signal:l,query:{...this.refreshParameters}},{data:m}=await h(p,d);return K(m,p)}getTileUrl(){throw new u("basetilelayer:gettileurl-not-implemented","getTileUrl() is not implemented")}};r([s({type:b})],g.prototype,"tileInfo",void 0),r([s({type:["show","hide"]})],g.prototype,"listMode",void 0),r([s({readOnly:!0,value:"base-tile"})],g.prototype,"type",void 0),r([s({nonNullable:!0})],g.prototype,"fullExtent",void 0),r([s()],g.prototype,"spatialReference",void 0),g=w=r([j("esri.layers.BaseTileLayer")],g);const q=g,v=new _({BingMapsAerial:"aerial",BingMapsRoad:"road",BingMapsHybrid:"hybrid"}),z="https://dev.virtualearth.net";let o=class extends S($(O(q))){constructor(t){super(t),this.type="bing-maps",this.tileInfo=new b({size:[256,256],dpi:96,origin:new A({x:-20037508342787e-6,y:20037508342787e-6,spatialReference:c.WebMercator}),spatialReference:c.WebMercator,lods:[new a({level:1,resolution:78271.5169639999,scale:295828763795777e-6}),new a({level:2,resolution:39135.7584820001,scale:147914381897889e-6}),new a({level:3,resolution:19567.8792409999,scale:73957190948944e-6}),new a({level:4,resolution:9783.93962049996,scale:36978595474472e-6}),new a({level:5,resolution:4891.96981024998,scale:18489297737236e-6}),new a({level:6,resolution:2445.98490512499,scale:9244648868618e-6}),new a({level:7,resolution:1222.99245256249,scale:4622324434309e-6}),new a({level:8,resolution:611.49622628138,scale:2311162217155e-6}),new a({level:9,resolution:305.748113140558,scale:1155581108577e-6}),new a({level:10,resolution:152.874056570411,scale:577790.554289}),new a({level:11,resolution:76.4370282850732,scale:288895.277144}),new a({level:12,resolution:38.2185141425366,scale:144447.638572}),new a({level:13,resolution:19.1092570712683,scale:72223.819286}),new a({level:14,resolution:9.55462853563415,scale:36111.909643}),new a({level:15,resolution:4.77731426794937,scale:18055.954822}),new a({level:16,resolution:2.38865713397468,scale:9027.977411}),new a({level:17,resolution:1.19432856685505,scale:4513.988705}),new a({level:18,resolution:.597164283559817,scale:2256.994353}),new a({level:19,resolution:.298582141647617,scale:1128.497176}),new a({level:20,resolution:.1492910708238085,scale:564.248588})]}),this.key=null,this.style="road",this.culture="en-US",this.region=null,this.portalUrl=null,this.hasAttributionData=!0}get bingMetadata(){return this._get("bingMetadata")}set bingMetadata(t){this._set("bingMetadata",t)}get copyright(){return f(this.bingMetadata)?this.bingMetadata.copyright:null}get operationalLayerType(){return v.toJSON(this.style)}get bingLogo(){return f(this.bingMetadata)?this.bingMetadata.brandLogoUri:null}load(t){return this.key?this.addResolvingPromise(this._getMetadata()):this.portalUrl?this.addResolvingPromise(this._getPortalBingKey().then(()=>this._getMetadata())):this.addResolvingPromise(Promise.reject(new u("bingmapslayer:load","Bing layer must have bing key."))),Promise.resolve(this)}getTileUrl(t,e,i){if(!this.loaded||T(this.bingMetadata))return null;const n=this.bingMetadata.resourceSets[0].resources[0],l=n.imageUrlSubdomains[e%n.imageUrlSubdomains.length],p=this._getQuadKey(t,e,i);return n.imageUrl.replace("{subdomain}",l).replace("{quadkey}",p)}async fetchAttributionData(){return this.load().then(()=>T(this.bingMetadata)?null:{contributors:this.bingMetadata.resourceSets[0].resources[0].imageryProviders.map(t=>({attribution:t.attribution,coverageAreas:t.coverageAreas.map(e=>({zoomMin:e.zoomMin,zoomMax:e.zoomMax,score:1,bbox:[e.bbox[0],e.bbox[1],e.bbox[2],e.bbox[3]]}))}))})}_getMetadata(){const t={road:"roadOnDemand",aerial:"aerial",hybrid:"aerialWithLabelsOnDemand"}[this.style];return h(`${z}/REST/v1/Imagery/Metadata/${t}`,{responseType:"json",query:{include:"ImageryProviders",uriScheme:"https",key:this.key,suppressStatus:!0,output:"json",culture:this.culture,userRegion:this.region}}).then(e=>{const i=e.data;if(i.statusCode!==200)throw new u("bingmapslayer:getmetadata",i.statusDescription);if(this.bingMetadata=i,this.bingMetadata.resourceSets.length===0)throw new u("bingmapslayer:getmetadata","no bing resourcesets");if(this.bingMetadata.resourceSets[0].resources.length===0)throw new u("bingmapslayer:getmetadata","no bing resources")}).catch(e=>{throw new u("bingmapslayer:getmetadata",e.message)})}_getPortalBingKey(){var t;return h((t=this.portalUrl)!=null?t:"",{responseType:"json",authMode:"no-prompt",query:{f:"json"}}).then(e=>{if(!e.data.bingKey)throw new u("bingmapslayer:getportalbingkey","The referenced Portal does not contain a valid bing key");this.key=e.data.bingKey}).catch(e=>{throw new u("bingmapslayer:getportalbingkey",e.message)})}_getQuadKey(t,e,i){let n="";for(let l=t;l>0;l--){let p=0;const d=1<<l-1;(i&d)!=0&&(p+=1),(e&d)!=0&&(p+=2),n+=p.toString()}return n}};r([s({json:{read:!1,write:!1},value:null})],o.prototype,"bingMetadata",null),r([s({json:{read:!1,write:!1},value:"bing-maps",readOnly:!0})],o.prototype,"type",void 0),r([s({type:b})],o.prototype,"tileInfo",void 0),r([s({type:String,readOnly:!0,json:{read:!1,write:!1}})],o.prototype,"copyright",null),r([s({type:String,json:{write:!1,read:!1}})],o.prototype,"key",void 0),r([s({type:v.apiValues,nonNullable:!0,json:{read:{source:"layerType",reader:v.read}}})],o.prototype,"style",void 0),r([s({type:["BingMapsAerial","BingMapsHybrid","BingMapsRoad"]})],o.prototype,"operationalLayerType",null),r([s({type:String,json:{write:!1,read:!1}})],o.prototype,"culture",void 0),r([s({type:String,json:{write:!1,read:!1}})],o.prototype,"region",void 0),r([s({type:String,json:{write:!0,read:!0}})],o.prototype,"portalUrl",void 0),r([s({type:Boolean,json:{write:!1,read:!1}})],o.prototype,"hasAttributionData",void 0),r([s({type:String,readOnly:!0})],o.prototype,"bingLogo",null),o=r([j("esri.layers.BingMapsLayer")],o);const E=o;export{E as default};
