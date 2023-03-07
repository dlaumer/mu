import{e as s,y as i,a as j,m as N,I as L,t as J,f as x,r as I,h6 as U,d as R,dy as Z,eU as z,eV as H,eW as V,dl as k,eT as W,eX as K,dm as X,dq as Y,dx as ee,dn as te,dr as re,aq as se,eY as b,dJ as oe,z as O,eZ as ie,dF as ne,e_ as pe,w as ae,eS as T,f0 as le,f1 as ue,e$ as de,f2 as ce,dN as ye,dO as he,f4 as fe,dM as me,f5 as ge,f7 as ve,dU as Se,dP as xe}from"./index.860f6be5.js";import{N as Ce,F as $,v as D,x as we,k as Fe,T as Ie,S as Re,I as be,j as Oe}from"./ogcFeatureUtils.b2117e78.js";import"./geojson.da697d14.js";import"./clientSideDefaults.17195cd8.js";import"./QueryEngineCapabilities.ea616409.js";let y=class extends N{constructor(){super(...arguments),this.featureDefinition=null,this.type="ogc-feature"}load(e){return this.addResolvingPromise(this._loadOGCServices(this.layer,e)),this.when()}getSource(){const{featureDefinition:{collection:e,layerDefinition:t,spatialReference:r,supportedCrs:n},layer:{apiKey:p,customParameters:l,effectiveMaxRecordCount:a}}=this;return{type:"ogc-source",collection:e,layerDefinition:t,maxRecordCount:a,queryParameters:{apiKey:p,customParameters:l},spatialReference:r,supportedCrs:n}}queryExtent(e,t={}){return null}queryFeatureCount(e,t={}){return null}queryFeatures(e,t={}){return this.queryFeaturesJSON(e,t).then(r=>L.fromJSON(r))}queryFeaturesJSON(e,t={}){const r=this.getSource();return this.load(t).then(()=>Ce(r,e,t))}queryObjectIds(e,t={}){return null}serviceSupportsSpatialReference(e){return!(!e.isWGS84&&!e.isWebMercator)||!!this.featureDefinition.supportedCrs[e.wkid]}_conformsToType(e,t){var n;const r=new RegExp(`^${t}$`,"i");return(n=e.conformsTo.some(p=>r.test(p)))!=null?n:!1}_getCapabilities(e,t){return{analytics:{supportsCacheHint:!1},attachment:null,data:{isVersioned:!1,supportsAttachment:!1,supportsM:!1,supportsZ:e},metadata:{supportsAdvancedFieldProperties:!1},operations:{supportsCalculate:!1,supportsTruncate:!1,supportsValidateSql:!1,supportsAdd:!1,supportsDelete:!1,supportsEditing:!1,supportsChangeTracking:!1,supportsQuery:!1,supportsQueryAnalytics:!1,supportsQueryAttachments:!1,supportsQueryTopFeatures:!1,supportsResizeAttachments:!1,supportsSync:!1,supportsUpdate:!1,supportsExceedsLimitStatistics:!1},query:{maxRecordCount:t,maxRecordCountFactor:void 0,standardMaxRecordCount:void 0,supportsCacheHint:!1,supportsCentroid:!1,supportsDisjointSpatialRelationship:!1,supportsDistance:!1,supportsDistinct:!1,supportsExtent:!1,supportsFormatPBF:!1,supportsGeometryProperties:!1,supportsHavingClause:!1,supportsHistoricMoment:!1,supportsMaxRecordCountFactor:!1,supportsOrderBy:!1,supportsPagination:!1,supportsPercentileStatistics:!1,supportsQuantization:!1,supportsQuantizationEditMode:!1,supportsQueryByOthers:!1,supportsQueryGeometry:!1,supportsResultType:!1,supportsStandardizedQueriesOnly:!1,supportsTopFeaturesQuery:!1,supportsStatistics:!1,supportsSpatialAggregationStatistics:!1,supportedSpatialAggregationStatistics:{envelope:!1,centroid:!1,convexHull:!1},supportsDefaultSpatialReference:!1,supportsFullTextSearch:!1,supportsCompactGeometry:!1,supportsSqlExpression:!1,tileMaxRecordCount:void 0},queryRelated:{supportsCount:!1,supportsOrderBy:!1,supportsPagination:!1,supportsCacheHint:!1},queryTopFeatures:{supportsCacheHint:!1},editing:{supportsDeleteByAnonymous:!1,supportsDeleteByOthers:!1,supportsGeometryUpdate:!1,supportsGlobalId:!1,supportsReturnServiceEditsInSourceSpatialReference:!1,supportsRollbackOnFailure:!1,supportsUpdateByAnonymous:!1,supportsUpdateByOthers:!1,supportsUploadWithItemId:!1,supportsUpdateWithoutM:!1}}}_getMaxRecordCount(e){var r,n,p,l,a,u;const t=(r=e==null?void 0:e.components)==null?void 0:r.parameters;return(u=(p=(n=t==null?void 0:t.limit)==null?void 0:n.schema)==null?void 0:p.maximum)!=null?u:(a=(l=t==null?void 0:t.limitFeatures)==null?void 0:l.schema)==null?void 0:a.maximum}_getStorageSpatialReference(e){var n;const t=(n=e.storageCrs)!=null?n:$,r=D(t);return J(r)?x.WGS84:new x({wkid:r})}_getSupportedSpatialReferences(e,t){var a,u;const r="#/crs",n=(a=e.crs)!=null?a:[$],p=n.includes(r)?n.filter(d=>d!==r).concat((u=t.crs)!=null?u:[]):n,l=/^http:\/\/www\.opengis.net\/def\/crs\/epsg\/.*\/3785$/i;return p.filter(d=>!l.test(d))}async _loadOGCServices(e,t){const r=I(t)?t.signal:null,{apiKey:n,collectionId:p,customParameters:l,fields:a,geometryType:u,hasZ:d,objectIdField:P,timeInfo:m,url:_}=e,E={fields:a==null?void 0:a.map(c=>c.toJSON()),geometryType:U.toJSON(u),hasZ:d!=null?d:!1,objectIdField:P,timeInfo:m==null?void 0:m.toJSON()},h={apiKey:n,customParameters:l,signal:r},g=await we(_,h),[C,w]=await Promise.all([Fe(g,h),Ie(g,h)]);if(!this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/geojson"))throw new R("ogc-feature-layer:no-geojson-support","Server does not support geojson");const f=w.collections.find(c=>c.id===p);if(!f)throw new R("ogc-feature-layer:collection-not-found","Server does not contain the named collection");const q=this._conformsToType(C,"http://www.opengis.net/spec/ogcapi-features-1/1.0/conf/oas30")?await Re(g,h):null,F=await be(f,E,h),M=this._getMaxRecordCount(q),G=this._getCapabilities(F.hasZ,M),Q=this._getStorageSpatialReference(f).toJSON(),A=this._getSupportedSpatialReferences(f,w),B=new RegExp(`^${Oe}`,"i"),v={};for(const c of A){const S=D(c);I(S)&&(v[S]||(v[S]=c.replace(B,"")))}this.featureDefinition={capabilities:G,collection:f,layerDefinition:F,spatialReference:Q,supportedCrs:v}}};s([i()],y.prototype,"featureDefinition",void 0),s([i({constructOnly:!0})],y.prototype,"layer",void 0),s([i()],y.prototype,"type",void 0),y=s([j("esri.layers.graphics.sources.OGCFeatureSource")],y);const Te=xe();let o=class extends Z(z(H(V(k(W(K(X(Y(ee(te(re(se)))))))))))){constructor(e){super(e),this.capabilities=null,this.collectionId=null,this.copyright=null,this.definitionExpression=null,this.description=null,this.displayField=null,this.elevationInfo=null,this.fields=null,this.fieldsIndex=null,this.fullExtent=null,this.geometryType=null,this.hasZ=void 0,this.labelingInfo=null,this.labelsVisible=!0,this.legendEnabled=!0,this.maxRecordCount=null,this.objectIdField=null,this.operationalLayerType="OGCFeatureLayer",this.popupEnabled=!0,this.popupTemplate=null,this.screenSizePerspectiveEnabled=!0,this.source=new y({layer:this}),this.spatialReference=null,this.title=null,this.type="ogc-feature",this.typeIdField=null,this.types=null,this.url=null}destroy(){var e;(e=this.source)==null||e.destroy()}load(e){return this.addResolvingPromise(this.loadFromPortal({supportedTypes:["OGCFeatureServer"]},e).then(()=>this._fetchService(e))),this.when()}get defaultPopupTemplate(){return this.createPopupTemplate()}get effectiveMaxRecordCount(){var e,t,r;return(r=(t=this.maxRecordCount)!=null?t:(e=this.capabilities)==null?void 0:e.query.maxRecordCount)!=null?r:5e3}get isTable(){return this.loaded&&this.geometryType==null}set renderer(e){b(e,this.fieldsIndex),this._set("renderer",e)}on(e,t){return super.on(e,t)}createPopupTemplate(e){return oe(this,e)}createQuery(){return new O}getField(e){return this.fieldsIndex.get(e)}getFieldDomain(e,t){var a;let r,n=!1;const p=(a=t==null?void 0:t.feature)==null?void 0:a.attributes,l=this.typeIdField&&(p==null?void 0:p[this.typeIdField]);return l!=null&&this.types&&(n=this.types.some(u=>{var d;return u.id==l&&(r=(d=u.domains)==null?void 0:d[e],(r==null?void 0:r.type)==="inherited"&&(r=this._getLayerDomain(e)),!0)})),n||r||(r=this._getLayerDomain(e)),r}queryFeatures(e,t){return this.load().then(()=>this.source.queryFeatures(O.from(e)||this.createQuery(),t)).then(r=>{var n;return(n=r==null?void 0:r.features)==null||n.forEach(p=>{p.layer=p.sourceLayer=this}),r})}serviceSupportsSpatialReference(e){var t,r;return(r=(t=this.source)==null?void 0:t.serviceSupportsSpatialReference(e))!=null?r:!1}async _fetchService(e){await this.source.load(e),this.read(this.source.featureDefinition,{origin:"service"}),b(this.renderer,this.fieldsIndex),ie(this.timeInfo,this.fieldsIndex)}_getLayerDomain(e){if(!this.fields)return null;for(const t of this.fields)if(t.name===e&&t.domain)return t.domain;return null}};s([i({readOnly:!0,json:{origins:{service:{read:!0}}}})],o.prototype,"capabilities",void 0),s([i({type:String,json:{write:!0}})],o.prototype,"collectionId",void 0),s([i({type:String})],o.prototype,"copyright",void 0),s([i({readOnly:!0})],o.prototype,"defaultPopupTemplate",null),s([i({type:String})],o.prototype,"definitionExpression",void 0),s([i({readOnly:!0,type:String,json:{origins:{service:{name:"collection.description"}}}})],o.prototype,"description",void 0),s([i({type:String})],o.prototype,"displayField",void 0),s([i({type:Number})],o.prototype,"effectiveMaxRecordCount",null),s([i(ne)],o.prototype,"elevationInfo",void 0),s([i({type:[pe],json:{origins:{service:{name:"layerDefinition.fields"}}}})],o.prototype,"fields",void 0),s([i(Te.fieldsIndex)],o.prototype,"fieldsIndex",void 0),s([i({readOnly:!0,type:ae,json:{origins:{service:{name:"layerDefinition.extent"}}}})],o.prototype,"fullExtent",void 0),s([i({type:T.apiValues,json:{origins:{service:{name:"layerDefinition.geometryType",read:{reader:T.read}}}}})],o.prototype,"geometryType",void 0),s([i({type:Boolean,json:{origins:{service:{name:"layerDefinition.hasZ"}}}})],o.prototype,"hasZ",void 0),s([i({type:Boolean,readOnly:!0})],o.prototype,"isTable",null),s([i({type:[le],json:{origins:{"web-document":{name:"layerDefinition.drawingInfo.labelingInfo",read:{reader:ue},write:!0}}}})],o.prototype,"labelingInfo",void 0),s([i(de)],o.prototype,"labelsVisible",void 0),s([i(ce)],o.prototype,"legendEnabled",void 0),s([i({type:Number})],o.prototype,"maxRecordCount",void 0),s([i({type:String,json:{origins:{service:{name:"layerDefinition.objectIdField"}}}})],o.prototype,"objectIdField",void 0),s([i({type:["OGCFeatureLayer"]})],o.prototype,"operationalLayerType",void 0),s([i(ye)],o.prototype,"popupEnabled",void 0),s([i({type:he,json:{name:"popupInfo",write:!0}})],o.prototype,"popupTemplate",void 0),s([i({types:fe,json:{origins:{service:{name:"layerDefinition.drawingInfo.renderer",write:!1},"web-scene":{types:me,name:"layerDefinition.drawingInfo.renderer",write:!0}},name:"layerDefinition.drawingInfo.renderer",write:!0}})],o.prototype,"renderer",null),s([i(ge)],o.prototype,"screenSizePerspectiveEnabled",void 0),s([i({readOnly:!0})],o.prototype,"source",void 0),s([i({readOnly:!0,type:x,json:{origins:{service:{read:!0}}}})],o.prototype,"spatialReference",void 0),s([i({type:String,json:{write:{enabled:!0,ignoreOrigin:!0,isRequired:!0},origins:{service:{name:"collection.title"}}}})],o.prototype,"title",void 0),s([i({readOnly:!0,json:{read:!1}})],o.prototype,"type",void 0),s([i({type:String,readOnly:!0})],o.prototype,"typeIdField",void 0),s([i({type:[ve]})],o.prototype,"types",void 0),s([i(Se)],o.prototype,"url",void 0),o=s([j("esri.layers.OGCFeatureLayer")],o);const Ee=o;export{Ee as default};