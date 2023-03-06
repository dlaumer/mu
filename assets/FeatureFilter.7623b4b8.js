import{ah as m,bo as p,L as _,b8 as u,F as c,gM as y,i as f}from"./index.f0b603e5.js";import{v as w,n as I}from"./QueryEngine.39a3740c.js";import{J as b}from"./QueryEngineResult.a34a99f5.js";import{a as g}from"./Pipeline.1861f0cc.js";import"./QueryEngineCapabilities.ea616409.js";import"./WhereClause.7eef08f1.js";import"./executionError.c4c51b90.js";import"./utils.a24099e7.js";import"./generateRendererUtils.8b94a88c.js";import"./json.5152e73f.js";import"./StreamFeatureManager.36755ebd.js";import"./quickselect.2c5f2780.js";import"./arcadeTimeUtils.001f6459.js";import"./centroid.bdcfdd86.js";import"./ogcFeatureUtils.8f778f46.js";import"./geojson.c0f03210.js";import"./clientSideDefaults.c880334e.js";import"./createConnection.19b0ad4e.js";import"./enums.89506096.js";import"./TileInfoView.0e7c4da0.js";import"./number.dcd3e86c.js";const d=m.getLogger("esri.views.2d.layers.features.support.whereUtils"),T={getAttribute:(r,e)=>r.field(e)};async function v(r,e){const t=await p(()=>import("./WhereClause.7eef08f1.js").then(function(i){return i.W}),["assets/WhereClause.7eef08f1.js","assets/index.f0b603e5.js","assets/index.574508c2.css","assets/executionError.c4c51b90.js"]);try{const i=t.WhereClause.create(r,e);if(!i.isStandardized){const s=new _("mapview - bad input","Unable to apply filter's definition expression, as expression is not standardized.",i);d.error(s)}return s=>{const n=s.readArcadeFeature();return i.testFeature(n,T)}}catch{return d.warn("mapview-bad-where-clause","Encountered an error when evaluating where clause",r),s=>!0}}const a=1,E=2;class k{constructor(e){this._geometryBounds=u(),this._idToVisibility=new Map,this._serviceInfo=e}get hash(){return this._hash}check(e){return this._applyFilter(e)}clear(){const e=this._resetAllHiddenIds();return this.update(),{show:e,hide:[]}}invalidate(){this._idToVisibility.forEach((e,t)=>{this._idToVisibility.set(t,0)})}setKnownIds(e){for(const t of e)this._idToVisibility.set(t,a)}setTrue(e){const t=[],i=[],s=new Set(e);return this._idToVisibility.forEach((n,o)=>{const l=!!(this._idToVisibility.get(o)&a),h=s.has(o);!l&&h?t.push(o):l&&!h&&i.push(o),this._idToVisibility.set(o,h?a|E:0)}),{show:t,hide:i}}createQuery(){const{geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:n}=this;return c.fromJSON({geometry:e,spatialRel:t,where:i,timeExtent:s,objectIds:n})}async update(e,t){this._hash=JSON.stringify(e);const i=await b(e,null,t);await Promise.all([this._setGeometryFilter(i),this._setIdFilter(i),this._setAttributeFilter(i),this._setTimeFilter(i)])}async _setAttributeFilter(e){if(!e||!e.where)return this._clause=null,void(this.where=null);this._clause=await v(e.where,this._serviceInfo.fieldsIndex),this.where=e.where}_setIdFilter(e){this._idsToShow=e&&e.objectIds&&new Set(e.objectIds),this._idsToHide=e&&e.hiddenIds&&new Set(e.hiddenIds),this.objectIds=e&&e.objectIds}async _setGeometryFilter(e){if(!e||!e.geometry)return this._spatialQueryOperator=null,this.geometry=null,void(this.spatialRel=null);const t=e.geometry,i=e.spatialRel||"esriSpatialRelIntersects",s=await w(i,t,this._serviceInfo.geometryType,this._serviceInfo.hasZ,this._serviceInfo.hasM);y(this._geometryBounds,t),this._spatialQueryOperator=s,this.geometry=t,this.spatialRel=i}_setTimeFilter(e){if(this.timeExtent=this._timeOperator=null,e&&e.timeExtent)if(this._serviceInfo.timeInfo)this.timeExtent=e.timeExtent,this._timeOperator=I(this._serviceInfo.timeInfo,e.timeExtent,g);else{const t=new _("feature-layer-view:time-filter-not-available","Unable to apply time filter, as layer doesn't have time metadata.",e.timeExtent);m.getLogger("esri.views.2d.layers.features.controllers.FeatureFilter").error(t)}}_applyFilter(e){return this._filterByGeometry(e)&&this._filterById(e)&&this._filterByTime(e)&&this._filterByExpression(e)}_filterByExpression(e){return!this.where||this._clause(e)}_filterById(e){return(!this._idsToHide||!this._idsToHide.size||!this._idsToHide.has(e.getObjectId()))&&(!this._idsToShow||!this._idsToShow.size||this._idsToShow.has(e.getObjectId()))}_filterByGeometry(e){if(!this.geometry)return!0;const t=e.readHydratedGeometry();return!!t&&this._spatialQueryOperator(t)}_filterByTime(e){return!!f(this._timeOperator)||this._timeOperator(e)}_resetAllHiddenIds(){const e=[];return this._idToVisibility.forEach((t,i)=>{t&a||(this._idToVisibility.set(i,a),e.push(i))}),e}}export{k as default};