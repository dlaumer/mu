import{af as Ue,dx as _e,bh as D,an as U,am as xe,w as _,g3 as Me,at as Y,e as o,y as u,dt as F,ew as Te,a as we,t as A,d as je,r as S,f as O,L as Ce,s as qe,dc as Ve,eO as Be,de as We,dd as ke,dg as De,dn as Ge,dh as Xe,aq as He,dq as Je,dr as Qe,ga as oe,U as H,cW as ze,id as Ke,bB as Ye,ie as Ze,dF as et,j as tt,cH as rt,cR as nt,p as st,dM as J,eV as it,dy as at,ig as ot,dL as lt}from"./index.f0143bd6.js";import{o as z}from"./crsUtils.5da2e8ef.js";import{l as le}from"./ExportWMSImageParameters.b9e28670.js";import{e as ut}from"./imageBitmapUtils.654480aa.js";var B;let pt=0,g=B=class extends Ue(_e){constructor(e){super(e),this.dimensions=null,this.fullExtents=null,this.legendUrl=null,this.legendEnabled=!0,this.layer=null,this.maxScale=0,this.minScale=0,this.parent=null,this.popupEnabled=!1,this.queryable=!1,this.sublayers=null,this.spatialReferences=null,this.addHandles([D(()=>this.sublayers,"after-add",({item:t})=>{t.parent=this,t.layer=this.layer},U),D(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},U),xe(()=>this.sublayers,(t,n)=>{if(n)for(const r of n)r.layer=r.parent=null;if(t)for(const r of t)r.parent=this,r.layer=this.layer},U)])}get description(){return this._get("description")}set description(e){this._set("description",e)}get fullExtent(){return this._get("fullExtent")}set fullExtent(e){this._set("fullExtent",e)}readExtent(e,t){return(e=t.extent)?_.fromJSON(e):null}get id(){const e=this._get("id");return e!=null?e:pt++}set id(e){this._set("id",e)}readLegendUrl(e,t){var n,r;return(r=(n=t==null?void 0:t.legendUrl)!=null?n:t==null?void 0:t.legendURL)!=null?r:null}get effectiveScaleRange(){const{minScale:e,maxScale:t}=this;return{minScale:e,maxScale:t}}get name(){return this._get("name")}set name(e){this._set("name",e)}castSublayers(e){return Me(Y.ofType(B),e)}get title(){return this._get("title")}set title(e){this._set("title",e)}get visible(){return this._get("visible")}set visible(e){this._setAndNotifyLayer("visible",e)}clone(){var t,n,r;const e=new B;return this.hasOwnProperty("description")&&(e.description=this.description),this.hasOwnProperty("fullExtent")&&(e.fullExtent=this.fullExtent.clone()),this.hasOwnProperty("fullExtents")&&(e.fullExtents=(n=(t=this.fullExtents)==null?void 0:t.map(s=>s.clone()))!=null?n:null),this.hasOwnProperty("legendUrl")&&(e.legendUrl=this.legendUrl),this.hasOwnProperty("legendEnabled")&&(e.legendEnabled=this.legendEnabled),this.hasOwnProperty("layer")&&(e.layer=this.layer),this.hasOwnProperty("name")&&(e.name=this.name),this.hasOwnProperty("parent")&&(e.parent=this.parent),this.hasOwnProperty("queryable")&&(e.queryable=this.queryable),this.hasOwnProperty("sublayers")&&(e.sublayers=this.sublayers&&this.sublayers.map(s=>s.clone())),this.hasOwnProperty("spatialReferences")&&(e.spatialReferences=(r=this.spatialReferences)==null?void 0:r.map(s=>s)),this.hasOwnProperty("visible")&&(e.visible=this.visible),this.hasOwnProperty("title")&&(e.title=this.title),e}_setAndNotifyLayer(e,t){const n=this.layer;this._get(e)!==t&&(this._set(e,t),n&&n.emit("wms-sublayer-update",{propertyName:e,id:this.id}))}};o([u()],g.prototype,"description",null),o([u({readOnly:!0})],g.prototype,"dimensions",void 0),o([u({value:null})],g.prototype,"fullExtent",null),o([F("fullExtent",["extent"])],g.prototype,"readExtent",null),o([u()],g.prototype,"fullExtents",void 0),o([u({type:Number,json:{write:{enabled:!1,overridePolicy:()=>({ignoreOrigin:!0,enabled:!0})}}})],g.prototype,"id",null),o([u({type:String,json:{origins:{"web-document":{read:{source:["legendUrl","legendURL"]},write:{target:"legendUrl",ignoreOrigin:!0}}},read:{source:"legendURL"},write:{ignoreOrigin:!0}}})],g.prototype,"legendUrl",void 0),o([F(["web-document"],"legendUrl")],g.prototype,"readLegendUrl",null),o([u({value:!0,type:Boolean,json:{read:{source:"showLegend"},write:{target:"showLegend"},origins:{"web-map":{read:!1,write:!1},"web-scene":{read:!1,write:!1}}}})],g.prototype,"legendEnabled",void 0),o([u()],g.prototype,"layer",void 0),o([u()],g.prototype,"maxScale",void 0),o([u()],g.prototype,"minScale",void 0),o([u({readOnly:!0})],g.prototype,"effectiveScaleRange",null),o([u({type:String,value:null,json:{read:{source:"name"},write:{ignoreOrigin:!0}}})],g.prototype,"name",null),o([u()],g.prototype,"parent",void 0),o([u({type:Boolean,json:{read:{source:"showPopup"},write:{ignoreOrigin:!0,target:"showPopup"}}})],g.prototype,"popupEnabled",void 0),o([u({type:Boolean,json:{write:{ignoreOrigin:!0}}})],g.prototype,"queryable",void 0),o([u()],g.prototype,"sublayers",void 0),o([Te("sublayers")],g.prototype,"castSublayers",null),o([u({type:[Number],json:{read:{source:"spatialReferences"}}})],g.prototype,"spatialReferences",void 0),o([u({type:String,value:null,json:{write:{ignoreOrigin:!0}}})],g.prototype,"title",null),o([u({type:Boolean,value:!0,json:{read:{source:"defaultVisibility"}}})],g.prototype,"visible",null),g=B=o([we("esri.layers.support.WMSSublayer")],g);const K=g,V={84:4326,83:4269,27:4267};function ct(e){var se,ie,ae;if(!e)return null;const t={idCounter:-1};typeof e=="string"&&(e=new DOMParser().parseFromString(e,"text/xml"));const n=e.documentElement;if(n.nodeName==="ServiceExceptionReport"){const x=Array.prototype.slice.call(n.childNodes).map(T=>T.textContent).join(`\r
`);throw new je("wmslayer:wms-capabilities-xml-is-not-valid","The server returned errors when the WMS capabilities were requested.",x)}const r=w("Capability",n),s=w("Service",n),l=r&&w("Request",r);if(!r||!s||!l)return null;const a=w("Layer",r);if(!a)return null;const d=n.nodeName==="WMS_Capabilities"||n.nodeName==="WMT_MS_Capabilities"?n.getAttribute("version"):"1.3.0",i=E("Title",s,"")||E("Name",s,""),f=E("AccessConstraints",s,""),h=/^none$/i.test(f)?"":f,p=E("Abstract",s,""),m=parseInt(E("MaxWidth",s,"5000"),10),y=parseInt(E("MaxHeight",s,"5000"),10),v=pe(l,"GetMap"),N=ue(l,"GetMap"),b=C(a,d,t);if(!b)return null;let M,R=0;const Ie=Array.prototype.slice.call(r.childNodes),Fe=(se=b.sublayers)!=null?se:[],G=x=>{x!=null&&Fe.push(x)};Ie.forEach(x=>{x.nodeName==="Layer"&&(R===0?M=x:(R===1&&b.name&&(b.name="",G(C(M,d,t))),G(C(x,d,t))),R++)});let $=b.sublayers,X=b.extent;const Oe=(ie=b.fullExtents)!=null?ie:[];if($||($=[]),$.length===0&&$.push(b),!X){const x=new _($[0].extent);b.extent=x.toJSON(),X=b.extent}const Re=b.spatialReferences.length>0?b.spatialReferences:ve(b),Z=ue(l,"GetFeatureInfo"),$e=Z?pe(l,"GetFeatureInfo"):null,ee=Se($),Le=b.minScale||0,Pe=b.maxScale||0,te=(ae=b.dimensions)!=null?ae:[],Ae=ee.reduce((x,T)=>{var I;return x.concat((I=T.dimensions)!=null?I:[])},[]),re=te.concat(Ae).filter(Ne);let ne=null;if(re.length){const x=re.map(T=>{const{extent:I}=T;return ft(I)?I.map(q=>q.getTime()):I==null?void 0:I.map(q=>[q.min.getTime(),q.max.getTime()])}).flat(2).filter(S);ne={startTimeField:null,endTimeField:null,trackIdField:void 0,timeExtent:[Math.min(...x),Math.max(...x)]}}return{copyright:h,description:p,dimensions:te,extent:X,fullExtents:Oe,featureInfoFormats:$e,featureInfoUrl:Z,mapUrl:N,maxWidth:m,maxHeight:y,maxScale:Pe,minScale:Le,layers:ee,spatialReferences:Re,supportedImageFormatTypes:v,timeInfo:ne,title:i,version:d}}function dt(e){const t=e.filter(n=>n.popupEnabled&&n.name&&n.queryable);return t.length?t.map(({name:n})=>n).join():null}function ve(e){if(e.spatialReferences.length>0)return e.spatialReferences;if(e.sublayers)for(const t of e.sublayers){const n=ve(t);if(n.length>0)return n}return[]}function Se(e){var n;let t=[];for(const r of e)t.push(r),(n=r.sublayers)!=null&&n.length&&(t=t.concat(Se(r.sublayers)),delete r.sublayers);return t}function W(e,t,n){var r;return(r=t.getAttribute(e))!=null?r:n}function mt(e,t,n,r){const s=w(e,n);return s?W(t,s,r):r}function w(e,t){for(let n=0;n<t.childNodes.length;n++){const r=t.childNodes[n];if(Ee(r)&&r.nodeName===e)return r}return null}function k(e,t){if(t==null)return[];const n=[];for(let r=0;r<t.childNodes.length;r++){const s=t.childNodes[r];Ee(s)&&s.nodeName===e&&n.push(s)}return n}function E(e,t,n){var r,s;return(s=(r=w(e,t))==null?void 0:r.textContent)!=null?s:n}function j(e,t,n){if(!e)return null;const r=parseFloat(e.getAttribute("minx")),s=parseFloat(e.getAttribute("miny")),l=parseFloat(e.getAttribute("maxx")),a=parseFloat(e.getAttribute("maxy"));let d,i,f,h;n?(d=isNaN(s)?-Number.MAX_VALUE:s,i=isNaN(r)?-Number.MAX_VALUE:r,f=isNaN(a)?Number.MAX_VALUE:a,h=isNaN(l)?Number.MAX_VALUE:l):(d=isNaN(r)?-Number.MAX_VALUE:r,i=isNaN(s)?-Number.MAX_VALUE:s,f=isNaN(l)?Number.MAX_VALUE:l,h=isNaN(a)?Number.MAX_VALUE:a);const p=new O({wkid:t});return new _({xmin:d,ymin:i,xmax:f,ymax:h,spatialReference:p})}function ue(e,t){const n=w(t,e);if(n){const r=w("DCPType",n);if(r){const s=w("HTTP",r);if(s){const l=w("Get",s);if(l){let a=mt("OnlineResource","xlink:href",l,null);if(a)return a.indexOf("&")===a.length-1&&(a=a.substring(0,a.length-1)),ht(a,["service","request"])}}}}return null}function pe(e,t){const n=k("Operation",e);if(!n.length)return k("Format",w(t,e)).map(({textContent:s})=>s).filter(S);const r=[];for(const s of n)if(s.getAttribute("name")===t){const l=k("Format",s);for(const{textContent:a}of l)a!=null&&r.push(a)}return r}function ce(e,t,n){const r=w(t,e);if(!r)return n;const{textContent:s}=r;if(s==null||s==="")return n;const l=Number(s);return isNaN(l)?n:l}function C(e,t,n){if(!e)return null;const r={id:n.idCounter++,fullExtents:[],parentLayerId:null,queryable:e.getAttribute("queryable")==="1",spatialReferences:[],sublayers:null},s=w("LatLonBoundingBox",e),l=w("EX_GeographicBoundingBox",e);let a=null;s&&(a=j(s,4326)),l&&(a=new _(0,0,0,0,new O({wkid:4326})),a.xmin=parseFloat(E("westBoundLongitude",l,"0")),a.ymin=parseFloat(E("southBoundLatitude",l,"0")),a.xmax=parseFloat(E("eastBoundLongitude",l,"0")),a.ymax=parseFloat(E("northBoundLatitude",l,"0"))),s||l||(a=new _(-180,-90,180,90,new O({wkid:4326}))),r.minScale=ce(e,"MaxScaleDenominator",0),r.maxScale=ce(e,"MinScaleDenominator",0);const d=["1.0.0","1.1.0","1.1.1"].includes(t)?"SRS":"CRS";return Array.prototype.slice.call(e.childNodes).forEach(i=>{var f,h;if(i.nodeName==="Name")r.name=i.textContent||"";else if(i.nodeName==="Title")r.title=i.textContent||"";else if(i.nodeName==="Abstract")r.description=i.textContent||"";else if(i.nodeName==="BoundingBox"){const p=i.getAttribute(d);if(p&&p.indexOf("EPSG:")===0){const y=parseInt(p.substring(5),10);y===0||isNaN(y)||a||(a=t==="1.3.0"?j(i,y,z(y)):j(i,y))}const m=p&&p.indexOf(":");if(m&&m>-1){let y=parseInt(p.substring(m+1,p.length),10);y===0||isNaN(y)||(y=V[y]?V[y]:y);const v=t==="1.3.0"?j(i,y,z(y)):j(i,y);v&&r.fullExtents&&r.fullExtents.push(v)}}else if(i.nodeName===d)((h=(f=i.textContent)==null?void 0:f.split(" "))!=null?h:[]).forEach(p=>{const m=p.includes(":")?parseInt(p.split(":")[1],10):parseInt(p,10);if(m!==0&&!isNaN(m)){const y=V[m]?V[m]:m;r.spatialReferences.includes(y)||r.spatialReferences.push(y)}});else if(i.nodeName!=="Style"||r.legendURL){if(i.nodeName==="Layer"){const p=C(i,t,n);p&&(p.parentLayerId=r.id,r.sublayers||(r.sublayers=[]),r.sublayers.push(p))}}else{const p=w("LegendURL",i);if(p){const m=w("OnlineResource",p);m&&(r.legendURL=m.getAttribute("xlink:href"))}}}),r.extent=a==null?void 0:a.toJSON(),r.dimensions=k("Dimension",e).filter(i=>i.getAttribute("name")&&i.getAttribute("units")&&i.textContent).map(i=>{var M,R;const f=i.getAttribute("name"),h=i.getAttribute("units"),p=i.textContent,m=(M=i.getAttribute("unitSymbol"))!=null?M:void 0,y=(R=i.getAttribute("default"))!=null?R:void 0,v=W("default",i,"0")!=="0",N=W("nearestValue",i,"0")!=="0",b=W("current",i,"0")!=="0";return Ne({name:f,units:h})?{name:"time",units:"ISO8601",extent:fe(p),default:fe(y),multipleValues:v,nearestValue:N,current:b}:yt({name:f,units:h})?{name:"elevation",units:h,extent:de(p),unitSymbol:m,default:de(y),multipleValues:v,nearestValue:N}:{name:f,units:h,extent:me(p),unitSymbol:m,default:me(y),multipleValues:v,nearestValue:N}}),r}function ft(e){return Array.isArray(e)&&e.length>0&&e[0]instanceof Date}function Ee(e){return e.nodeType===Node.ELEMENT_NODE}function yt(e){return/^elevation$/i.test(e.name)&&/^(epsg|crs):\d+$/i.test(e.units)}function Ne(e){return/^time$/i.test(e.name)&&/^iso8601$/i.test(e.units)}function ht(e,t){const n=[],r=Ce(e);for(const s in r.query)r.query.hasOwnProperty(s)&&(t.includes(s.toLowerCase())||n.push(s+"="+r.query[s]));return r.path+(n.length?"?"+n.join("&"):"")}function de(e){if(!e)return;const t=e.includes("/"),n=e.split(",");return t?n.map(r=>{const s=r.split("/");return s.length<2?null:{min:parseFloat(s[0]),max:parseFloat(s[1]),resolution:s.length>=3&&s[2]!=="0"?parseFloat(s[2]):void 0}}).filter(S):n.map(r=>parseFloat(r))}function me(e){if(!e)return;const t=e.includes("/"),n=e.split(",");return t?n.map(r=>{const s=r.split("/");return s.length<2?null:{min:s[0],max:s[1],resolution:s.length>=3&&s[2]!=="0"?s[2]:void 0}}).filter(S):n}function fe(e){if(!e)return;const t=e.includes("/"),n=e.split(",");return t?n.map(r=>{const s=r.split("/");return s.length<2?null:{min:new Date(s[0]),max:new Date(s[1]),resolution:s.length>=3&&s[2]!=="0"?gt(s[2]):void 0}}).filter(S):n.map(r=>new Date(r))}function gt(e){const t=/(?:p(\d+y|\d+(?:.|,)\d+y)?(\d+m|\d+(?:.|,)\d+m)?(\d+d|\d+(?:.|,)\d+d)?)?(?:t(\d+h|\d+(?:.|,)\d+h)?(\d+m|\d+(?:.|,)\d+m)?(\d+s|\d+(?:.|,)\d+s)?)?/i,n=e.match(t);return n?{years:L(n[1]),months:L(n[2]),days:L(n[3]),hours:L(n[4]),minutes:L(n[5]),seconds:L(n[6])}:null}function L(e){if(!e)return 0;const t=/(?:\d+(?:.|,)\d+|\d+)/,n=e.match(t);if(!n)return 0;const r=n[0].replace(",",".");return Number(r)}function P(e){return e.toISOString().replace(/\.[0-9]{3}/,"")}const ye=new Set([102100,3857,102113,900913]),bt=new Set([3395,54004]);function xt(e,t){let n=e.wkid;return A(t)?n:(n!=null&&t.includes(n)||!e.latestWkid||(n=e.latestWkid),n!=null&&ye.has(n)?t.find(r=>ye.has(r))||t.find(r=>bt.has(r))||102100:n)}const Q=new qe({bmp:"image/bmp",gif:"image/gif",jpg:"image/jpeg",png:"image/png",svg:"image/svg+xml"},{ignoreUnknown:!1});function he(e){return e==="text/html"}function ge(e){return e==="text/plain"}let c=class extends Ve(Be(We(ke(De(Ge(Xe(He))))))){constructor(...e){super(...e),this.allSublayers=new Je({getCollections:()=>[this.sublayers],getChildrenFunction:t=>t.sublayers}),this.customParameters=null,this.customLayerParameters=null,this.copyright=null,this.description=null,this.dimensions=null,this.fullExtent=null,this.fullExtents=null,this.featureInfoFormats=null,this.featureInfoUrl=null,this.fetchFeatureInfoFunction=null,this.imageFormat=null,this.imageMaxHeight=2048,this.imageMaxWidth=2048,this.imageTransparency=!0,this.legendEnabled=!0,this.mapUrl=null,this.isReference=null,this.operationalLayerType="WMS",this.spatialReference=null,this.spatialReferences=null,this.sublayers=null,this.type="wms",this.url=null,this.version=null,this.addHandles([D(()=>this.sublayers,"after-add",({item:t})=>{t.parent=t.layer=this},U),D(()=>this.sublayers,"after-remove",({item:t})=>{t.layer=t.parent=null},U),xe(()=>this.sublayers,(t,n)=>{if(n)for(const r of n)r.layer=r.parent=null;if(t)for(const r of t)r.parent=r.layer=this},U)])}normalizeCtorArgs(e,t){return typeof e=="string"?{url:e,...t}:e}load(e){const t=S(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["WMS"]},e).catch(Qe).then(()=>this._fetchService(t))),Promise.resolve(this)}readFullExtentFromItemOrMap(e,t){const n=t.extent;return n?new _({xmin:n[0][0],ymin:n[0][1],xmax:n[1][0],ymax:n[1][1]}):null}writeFullExtent(e,t){t.extent=[[e.xmin,e.ymin],[e.xmax,e.ymax]]}get featureInfoFormat(){var e,t;return A(this.featureInfoFormats)?null:(t=(e=this.featureInfoFormats.find(he))!=null?e:this.featureInfoFormats.find(ge))!=null?t:null}set featureInfoFormat(e){S(e)?(he(e)||ge(e))&&this._override("featureInfoFormat",e):(this.revert("featureInfoFormat","service"),this._clearOverride("featureInfoFormat"))}readImageFormat(e,t){const n=t.supportedImageFormatTypes;return n&&n.includes("image/png")?"image/png":n&&n[0]}readSpatialReferenceFromItemOrDocument(e,t){return new O(t.spatialReferences[0])}writeSpatialReferences(e,t){var r;const n=(r=this.spatialReference)==null?void 0:r.wkid;e&&n?(t.spatialReferences=e.filter(s=>s!==n),t.spatialReferences.unshift(n)):t.spatialReferences=e}readSublayersFromItemOrMap(e,t,n){return be(t.layers,n,t.visibleLayers)}readSublayers(e,t,n){return be(t.layers,n)}writeSublayers(e,t,n,r){var a,d;t.layers=[];const s=new Map,l=e.flatten(({sublayers:i})=>i!=null?i:[]);for(const i of l)if(typeof((a=i.parent)==null?void 0:a.id)=="number"){const f=s.get(i.parent.id);f!=null?f.push(i.id):s.set(i.parent.id,[i.id])}for(const i of l){const f={sublayer:i,...r},h=i.write({parentLayerId:typeof((d=i.parent)==null?void 0:d.id)=="number"?i.parent.id:-1},f);if(s.has(i.id)&&(h.sublayerIds=s.get(i.id)),!i.sublayers&&i.name){const p=i.write({},f);delete p.id,t.layers.push(p)}}t.visibleLayers=l.filter(({visible:i,sublayers:f})=>i&&!f).map(({name:i})=>i).toArray()}createExportImageParameters(e,t,n,r){var N;const s=(N=r==null?void 0:r.pixelRatio)!=null?N:1,l=oe({extent:e,width:t})*s,a=new le({layer:this,scale:l}),{xmin:d,ymin:i,xmax:f,ymax:h,spatialReference:p}=e,m=xt(p,this.spatialReferences),y=this.version==="1.3.0"&&z(m)?`${i},${d},${h},${f}`:`${d},${i},${f},${h}`,v=a.toJSON();return{bbox:y,[this.version==="1.3.0"?"crs":"srs"]:m==null||isNaN(m)?void 0:"EPSG:"+m,...v}}async fetchImage(e,t,n,r){var h,p;const s=this.mapUrl,l=this.createExportImageParameters(e,t,n,r);if(!l.layers){const m=document.createElement("canvas");return m.width=t,m.height=n,m}const a=(h=r==null?void 0:r.timeExtent)==null?void 0:h.start,d=(p=r==null?void 0:r.timeExtent)==null?void 0:p.end,i=S(a)&&S(d)?a.getTime()===d.getTime()?P(a):`${P(a)}/${P(d)}`:void 0,f={responseType:"image",query:this._mixCustomParameters({width:t,height:n,...l,time:i,...this.refreshParameters}),signal:r==null?void 0:r.signal};return H(s!=null?s:"",f).then(m=>m.data)}async fetchImageBitmap(e,t,n,r){var p,m,y;const s=(p=this.mapUrl)!=null?p:"",l=this.createExportImageParameters(e,t,n,r);if(!l.layers){const v=document.createElement("canvas");return v.width=t,v.height=n,v}const a=(m=r==null?void 0:r.timeExtent)==null?void 0:m.start,d=(y=r==null?void 0:r.timeExtent)==null?void 0:y.end,i=S(a)&&S(d)?a.getTime()===d.getTime()?P(a):`${P(a)}/${P(d)}`:void 0,f={responseType:"blob",query:this._mixCustomParameters({width:t,height:n,...l,time:i,...this.refreshParameters}),signal:r==null?void 0:r.signal},{data:h}=await H(s,f);return ut(h,s)}fetchFeatureInfo(e,t,n,r,s){const l=oe({extent:e,width:t}),a=new le({layer:this,scale:l}),d=dt(a.visibleSublayers);if(A(this.featureInfoUrl)||A(d))return Promise.resolve([]);if(A(this.fetchFeatureInfoFunction)&&A(this.featureInfoFormat))return Promise.resolve([]);const i=this.version==="1.3.0"?{I:r,J:s}:{x:r,y:s},f={query_layers:d,request:"GetFeatureInfo",info_format:this.featureInfoFormat,feature_count:25,width:t,height:n,...i},h={...this.createExportImageParameters(e,t,n),...f},p=this._mixCustomParameters(h);return S(this.fetchFeatureInfoFunction)?this.fetchFeatureInfoFunction(p):this._defaultFetchFeatureInfoFunction(ze(this.featureInfoUrl,p))}findSublayerById(e){return this.allSublayers.find(t=>t.id===e)}findSublayerByName(e){return this.allSublayers.find(t=>t.name===e)}serviceSupportsSpatialReference(e){return Ke(this.url)||this.spatialReferences!=null&&this.spatialReferences.some(t=>{const n=t===900913?O.WebMercator:new O({wkid:t});return Ye(n,e)})}_defaultFetchFeatureInfoFunction(e){const t=document.createElement("iframe");t.src=Ze(e),t.style.border="none",t.style.margin="0",t.style.width="100%",t.setAttribute("sandbox","");const n=new et({title:this.title,content:t}),r=new tt({sourceLayer:this,popupTemplate:n});return Promise.resolve([r])}async _fetchService(e){var t;if(!this.resourceInfo){const{path:n,query:r}=(t=this.parsedUrl)!=null?t:{};r!=null&&r.service&&(r.SERVICE=r.service,delete r.service),r!=null&&r.request&&(r.REQUEST=r.request,delete r.request);const{data:s}=await H(n!=null?n:"",{query:{SERVICE:"WMS",REQUEST:"GetCapabilities",...r,...this.customParameters},responseType:"xml",signal:e});this.resourceInfo=ct(s)}if(this.parsedUrl){const n=new rt(this.parsedUrl.path),{httpsDomains:r}=nt.request;n.scheme!=="https"||n.port&&n.port!=="443"||!n.host||r.includes(n.host)||r.push(n.host)}this.read(this.resourceInfo,{origin:"service"})}_mixCustomParameters(e){if(!this.customLayerParameters&&!this.customParameters)return e;const t={...this.customParameters,...this.customLayerParameters};for(const n in t)e[n.toLowerCase()]=t[n];return e}};function wt(e,t){return e.some(n=>{for(const r in n)if(ot(n,r,null,t))return!0;return!1})}function be(e,t,n){e=e!=null?e:[];const r=new Map;e.every(l=>l.id==null)&&(e=st(e)).forEach((l,a)=>l.id=a);for(const l of e){const a=new K;a.read(l,t),n&&!n.includes(a.name)&&(a.visible=!1),r.set(a.id,a)}const s=[];for(const l of e){const a=l.id!=null?r.get(l.id):null;if(a)if(l.parentLayerId!=null&&l.parentLayerId>=0){const d=r.get(l.parentLayerId);if(!d)continue;d.sublayers||(d.sublayers=new Y),d.sublayers.push(a)}else s.push(a)}return s}o([u({readOnly:!0})],c.prototype,"allSublayers",void 0),o([u({json:{type:Object,write:!0}})],c.prototype,"customParameters",void 0),o([u({json:{type:Object,write:!0}})],c.prototype,"customLayerParameters",void 0),o([u({type:String,json:{write:!0}})],c.prototype,"copyright",void 0),o([u()],c.prototype,"description",void 0),o([u({readOnly:!0})],c.prototype,"dimensions",void 0),o([u({json:{type:[[Number]],read:{source:"extent"},write:{target:"extent"},origins:{"web-document":{write:{ignoreOrigin:!0}},"portal-item":{write:{ignoreOrigin:!0}}}}})],c.prototype,"fullExtent",void 0),o([F(["web-document","portal-item"],"fullExtent",["extent"])],c.prototype,"readFullExtentFromItemOrMap",null),o([J(["web-document","portal-item"],"fullExtent",{extent:{type:[[Number]]}})],c.prototype,"writeFullExtent",null),o([u()],c.prototype,"fullExtents",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoFormat",null),o([u({type:[String],readOnly:!0})],c.prototype,"featureInfoFormats",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"featureInfoUrl",void 0),o([u()],c.prototype,"fetchFeatureInfoFunction",void 0),o([u({type:String,json:{origins:{"web-document":{default:"image/png",type:Q.jsonValues,read:{reader:Q.read,source:"format"},write:{writer:Q.write,target:"format"}}}}})],c.prototype,"imageFormat",void 0),o([F("imageFormat",["supportedImageFormatTypes"])],c.prototype,"readImageFormat",null),o([u({type:Number,json:{read:{source:"maxHeight"},write:{target:"maxHeight"}}})],c.prototype,"imageMaxHeight",void 0),o([u({type:Number,json:{read:{source:"maxWidth"},write:{target:"maxWidth"}}})],c.prototype,"imageMaxWidth",void 0),o([u()],c.prototype,"imageTransparency",void 0),o([u(it)],c.prototype,"legendEnabled",void 0),o([u({type:["show","hide","hide-children"]})],c.prototype,"listMode",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"mapUrl",void 0),o([u({type:Boolean,json:{read:!1,write:{enabled:!0,overridePolicy:()=>({enabled:!1})}}})],c.prototype,"isReference",void 0),o([u({type:["WMS"]})],c.prototype,"operationalLayerType",void 0),o([u()],c.prototype,"resourceInfo",void 0),o([u({type:O,json:{origins:{service:{read:{source:"extent.spatialReference"}}},write:!1}})],c.prototype,"spatialReference",void 0),o([F(["web-document","portal-item"],"spatialReference",["spatialReferences"])],c.prototype,"readSpatialReferenceFromItemOrDocument",null),o([u({type:[at],json:{read:!1,origins:{service:{read:!0},"web-document":{read:!1,write:{ignoreOrigin:!0}},"portal-item":{read:!1,write:{ignoreOrigin:!0}}}}})],c.prototype,"spatialReferences",void 0),o([J(["web-document","portal-item"],"spatialReferences")],c.prototype,"writeSpatialReferences",null),o([u({type:Y.ofType(K),json:{write:{target:"layers",overridePolicy(e,t,n){if(wt(this.allSublayers,n))return{ignoreOrigin:!0}}}}})],c.prototype,"sublayers",void 0),o([F(["web-document","portal-item"],"sublayers",["layers","visibleLayers"])],c.prototype,"readSublayersFromItemOrMap",null),o([F("service","sublayers",["layers"])],c.prototype,"readSublayers",null),o([J("sublayers",{layers:{type:[K]},visibleLayers:{type:[String]}})],c.prototype,"writeSublayers",null),o([u({json:{read:!1},readOnly:!0,value:"wms"})],c.prototype,"type",void 0),o([u(lt)],c.prototype,"url",void 0),o([u({type:String,json:{write:{ignoreOrigin:!0}}})],c.prototype,"version",void 0),c=o([we("esri.layers.WMSLayer")],c);const It=c;export{It as default};