import{bR as z,f as L,U as W,p as m,c as G,cW as q,cR as A,aI as M,g0 as x,g1 as g,g2 as S,aJ as D,ep as U,m as H,bh as _,an as w,am as R,bs as j,r as k,w as O,g3 as V,at as F,e as i,y as a,g4 as B,dt as $,a as C,dc as Q,de as X,dd as Y,dg as Z,dn as ee,dh as te,aq as se,dq as re,c$ as ie,dr as oe,dM as le,dL as ae}from"./index.7ded6657.js";const ne={esriGeometryPoint:"points",esriGeometryPolyline:"polylines",esriGeometryPolygon:"polygons"};function T(e){const s=e.folders||[],r=s.slice(),t=new Map,l=new Map,f=new Map,b=new Map,c=new Map,p={esriGeometryPoint:l,esriGeometryPolyline:f,esriGeometryPolygon:b};(e.featureCollection&&e.featureCollection.layers||[]).forEach(o=>{const u=m(o);u.featureSet.features=[];const d=o.featureSet.geometryType;t.set(d,u);const E=o.layerDefinition.objectIdField;d==="esriGeometryPoint"?P(l,E,o.featureSet.features):d==="esriGeometryPolyline"?P(f,E,o.featureSet.features):d==="esriGeometryPolygon"&&P(b,E,o.featureSet.features)}),e.groundOverlays&&e.groundOverlays.forEach(o=>{c.set(o.id,o)}),s.forEach(o=>{o.networkLinkIds.forEach(u=>{const d=ye(u,o.id,e.networkLinks);d&&r.push(d)})}),r.forEach(o=>{if(o.featureInfos){o.points=m(t.get("esriGeometryPoint")),o.polylines=m(t.get("esriGeometryPolyline")),o.polygons=m(t.get("esriGeometryPolygon")),o.mapImages=[];for(const u of o.featureInfos)switch(u.type){case"esriGeometryPoint":case"esriGeometryPolyline":case"esriGeometryPolygon":{const d=p[u.type].get(u.id);d&&o[ne[u.type]].featureSet.features.push(d);break}case"GroundOverlay":{const d=c.get(u.id);d&&o.mapImages.push(d);break}}o.fullExtent=I([o])}});const h=I(r);return{folders:s,sublayers:r,extent:h}}function N(e,s,r,t){const l=G&&G.findCredential(e);e=q(e,{token:l&&l.token});const f=A.kmlServiceUrl;return W(f,{query:{url:e,model:"simple",folders:"",refresh:r!==0||void 0,outSR:JSON.stringify(s)},responseType:"json",signal:t})}function J(e,s,r=null,t=[]){const l=[],f={},b=s.sublayers,c=s.folders.map(p=>p.id);return b.forEach(p=>{var o;const h=new e;if(r?h.read(p,r):h.read(p),t.length&&c.includes(h.id)&&(h.visible=t.includes(h.id)),f[p.id]=h,p.parentFolderId!=null&&p.parentFolderId!==-1){const u=f[p.parentFolderId];u.sublayers||(u.sublayers=[]),(o=u.sublayers)==null||o.unshift(h)}else l.unshift(h)}),l}function P(e,s,r){r.forEach(t=>{e.set(t.attributes[s],t)})}function ue(e,s){let r;return s.some(t=>t.id===e&&(r=t,!0)),r}function ye(e,s,r){const t=ue(e,r);return t&&(t.parentFolderId=s,t.networkLink=t),t}function I(e){const s=M(x),r=M(x);for(const t of e){if(t.polygons&&t.polygons.featureSet&&t.polygons.featureSet.features)for(const l of t.polygons.featureSet.features)g(s,l.geometry),S(r,s);if(t.polylines&&t.polylines.featureSet&&t.polylines.featureSet.features)for(const l of t.polylines.featureSet.features)g(s,l.geometry),S(r,s);if(t.points&&t.points.featureSet&&t.points.featureSet.features)for(const l of t.points.featureSet.features)g(s,l.geometry),S(r,s);if(t.mapImages)for(const l of t.mapImages)g(s,l.extent),S(r,s)}return z(r,x)?void 0:{xmin:r[0],ymin:r[1],zmin:r[2],xmax:r[3],ymax:r[4],zmax:r[5],spatialReference:L.WGS84}}var v;let y=v=class extends D.EventedMixin(U(H)){constructor(...e){super(...e),this.description=null,this.id=null,this.networkLink=null,this.sublayers=null,this.title=null,this.sourceJSON=null,this.fullExtent=null,this.addHandles([_(()=>this.sublayers,"after-add",({item:s})=>{s.parent=this,s.layer=this.layer},w),_(()=>this.sublayers,"after-remove",({item:s})=>{s.layer=s.parent=null},w),R(()=>this.sublayers,(s,r)=>{if(r)for(const t of r)t.layer=t.parent=null;if(s)for(const t of s)t.parent=this,t.layer=this.layer},w)])}initialize(){j(()=>this.networkLink).then(()=>j(()=>this.visible===!0)).then(()=>this.load())}load(e){var t,l;if(!this.networkLink||this.networkLink.viewFormat)return;const s=k(e)?e.signal:null,r=this._fetchService((l=(t=this._get("networkLink"))==null?void 0:t.href)!=null?l:"",s).then(f=>{var p;const b=I(f.sublayers);this.fullExtent=O.fromJSON(b),this.sourceJSON=f;const c=V(F.ofType(v),J(v,f));this.sublayers?this.sublayers.addMany(c):this.sublayers=c,(p=this.layer)==null||p.emit("sublayer-update"),this.layer&&this.layer.notifyChange("visibleSublayers")});return this.addResolvingPromise(r),Promise.resolve(this)}get visible(){return this._get("visible")}set visible(e){this._get("visible")!==e&&(this._set("visible",e),this.layer&&this.layer.notifyChange("visibleSublayers"))}readVisible(e,s){return!!s.visibility}set layer(e){this._set("layer",e),this.sublayers&&this.sublayers.forEach(s=>s.layer=e)}_fetchService(e,s){return N(e,this.layer.outSpatialReference,this.layer.refreshInterval,s).then(r=>T(r.data))}};i([a()],y.prototype,"description",void 0),i([a()],y.prototype,"id",void 0),i([a({readOnly:!0,value:null})],y.prototype,"networkLink",void 0),i([a({json:{write:{allowNull:!0}}})],y.prototype,"parent",void 0),i([a({type:F.ofType(v),json:{write:{allowNull:!0}}})],y.prototype,"sublayers",void 0),i([a({value:null,json:{read:{source:"name",reader:e=>B(e)}}})],y.prototype,"title",void 0),i([a({value:!0})],y.prototype,"visible",null),i([$("visible",["visibility"])],y.prototype,"readVisible",null),i([a()],y.prototype,"sourceJSON",void 0),i([a({value:null})],y.prototype,"layer",null),i([a({type:O})],y.prototype,"fullExtent",void 0),y=v=i([C("esri.layers.support.KMLSublayer")],y);const K=y,pe=["kml","xml"];let n=class extends Q(X(Y(Z(ee(te(se)))))){constructor(...e){super(...e),this._visibleFolders=[],this.allSublayers=new re({getCollections:()=>[this.sublayers],getChildrenFunction:s=>s.sublayers}),this.outSpatialReference=L.WGS84,this.path=null,this.legendEnabled=!1,this.operationalLayerType="KML",this.sublayers=null,this.type="kml",this.url=null}initialize(){this.addHandles([R(()=>this.sublayers,(e,s)=>{s&&s.forEach(r=>{r.parent=null,r.layer=null}),e&&e.forEach(r=>{r.parent=this,r.layer=this})},w),this.on("sublayer-update",()=>this.notifyChange("fullExtent"))])}normalizeCtorArgs(e,s){return typeof e=="string"?{url:e,...s}:e}readSublayersFromItemOrWebMap(e,s){this._visibleFolders=s.visibleFolders}readSublayers(e,s,r){return J(K,s,r,this._visibleFolders)}writeSublayers(e,s){const r=[],t=e.toArray();for(;t.length;){const l=t[0];l.networkLink||(l.visible&&r.push(l.id),l.sublayers&&t.push(...l.sublayers.toArray())),t.shift()}s.visibleFolders=r}get title(){const e=this._get("title");return e&&this.originOf("title")!=="defaults"?e:this.url?ie(this.url,pe)||"KML":e||""}set title(e){this._set("title",e)}get visibleSublayers(){const e=this.sublayers,s=[],r=t=>{t.visible&&(s.push(t),t.sublayers&&t.sublayers.forEach(r))};return e&&e.forEach(r),s}get fullExtent(){return this._recomputeFullExtent()}load(e){const s=k(e)?e.signal:null;return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["KML"],supportsData:!1},e).catch(oe).then(()=>this._fetchService(s))),Promise.resolve(this)}destroy(){super.destroy(),this.allSublayers.destroy()}async _fetchService(e){const s=await Promise.resolve().then(()=>{var t;return this.resourceInfo?{ssl:!1,data:this.resourceInfo}:N((t=this.url)!=null?t:"",this.outSpatialReference,this.refreshInterval,e)}),r=T(s.data);r&&this.read(r,{origin:"service"})}_recomputeFullExtent(){let e=null;k(this.extent)&&(e=this.extent.clone());const s=r=>{if(r.sublayers)for(const t of r.sublayers.items)s(t),t.visible&&t.fullExtent&&(k(e)?e.union(t.fullExtent):e=t.fullExtent.clone())};return s(this),e}};i([a({readOnly:!0})],n.prototype,"allSublayers",void 0),i([a({type:L})],n.prototype,"outSpatialReference",void 0),i([a({type:String,json:{origins:{"web-scene":{read:!0,write:!0}},read:!1}})],n.prototype,"path",void 0),i([a({readOnly:!0,json:{read:!1,write:!1}})],n.prototype,"legendEnabled",void 0),i([a({type:["show","hide","hide-children"]})],n.prototype,"listMode",void 0),i([a({type:["KML"]})],n.prototype,"operationalLayerType",void 0),i([a({})],n.prototype,"resourceInfo",void 0),i([a({type:F.ofType(K),json:{write:{ignoreOrigin:!0}}})],n.prototype,"sublayers",void 0),i([$(["web-map","portal-item"],"sublayers",["visibleFolders"])],n.prototype,"readSublayersFromItemOrWebMap",null),i([$("service","sublayers",["sublayers"])],n.prototype,"readSublayers",null),i([le("sublayers")],n.prototype,"writeSublayers",null),i([a({readOnly:!0,json:{read:!1}})],n.prototype,"type",void 0),i([a({json:{origins:{"web-map":{read:{source:"title"}}},write:{ignoreOrigin:!0}}})],n.prototype,"title",null),i([a(ae)],n.prototype,"url",void 0),i([a({readOnly:!0})],n.prototype,"visibleSublayers",null),i([a({type:O})],n.prototype,"extent",void 0),i([a()],n.prototype,"fullExtent",null),n=i([C("esri.layers.KMLLayer")],n);const fe=n;export{fe as default};
