import{i as d,lQ as f,iE as v,d as j,mb as s,e as t,y as o,aS as p,e1 as y,b as c,lR as h}from"./index.f0b603e5.js";import{g as a}from"./persistable.91f90a51.js";function I(e,r){return u(e)===u(r)}function u(e){if(d(e))return null;const r=e.layer!=null?e.layer.id:"";let i=null;return i=e.objectId!=null?e.objectId:e.layer!=null&&"objectIdField"in e.layer&&e.layer.objectIdField!=null&&e.attributes!=null?e.attributes[e.layer.objectIdField]:e.uid,i==null?null:`o-${r}-${i}`}const b={json:{write:{writer:g,target:{"feature.layerId":{type:[Number,String]},"feature.objectId":{type:[Number,String]}}},origins:{"web-scene":{read:m}}}};function g(e,r){var i;d(e)||((i=e.layer)==null?void 0:i.objectIdField)==null||e.attributes==null||(r.feature={layerId:e.layer.id,objectId:e.attributes[e.layer.objectIdField]})}function m(e){if(e.layerId!=null&&e.objectId!=null)return{uid:null,layer:{id:e.layerId,objectIdField:"ObjectId"},attributes:{ObjectId:e.objectId}}}let l=class extends f(v(j)){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};t([o({type:p}),a()],l.prototype,"position",void 0),t([o({type:y}),a()],l.prototype,"elevationInfo",void 0),t([o(b)],l.prototype,"feature",void 0),l=t([c("esri.analysis.LineOfSightAnalysisObserver")],l);const O=l;let n=class extends f(h){constructor(e){super(e),this.position=null,this.elevationInfo=null,this.feature=null}equals(e){return s(this.position,e.position)&&s(this.elevationInfo,e.elevationInfo)&&I(this.feature,e.feature)}};t([o({type:p}),a()],n.prototype,"position",void 0),t([o({type:y}),a()],n.prototype,"elevationInfo",void 0),t([o(b)],n.prototype,"feature",void 0),n=t([c("esri.analysis.LineOfSightAnalysisTarget")],n);const S=n;export{S as f,u as l,O as u};