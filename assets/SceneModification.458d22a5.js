import{e as r,y as n,v as c,c6 as y,b as m,c3 as f,b0 as u,dv as d,fB as g,e$ as R}from"./index.f0b603e5.js";import{g as l}from"./persistable.91f90a51.js";var p;let t=p=class extends f{constructor(a){super(a),this.geometry=null,this.type="clip"}writeGeometry(a,i,o,e){if(e.layer&&e.layer.spatialReference&&!e.layer.spatialReference.equals(this.geometry.spatialReference)){if(!u(a.spatialReference,e.layer.spatialReference))return void(e&&e.messages&&e.messages.push(new d("scenemodification:unsupported","Scene modifications with incompatible spatial references are not supported",{modification:this,spatialReference:e.layer.spatialReference,context:e})));const s=new c;g(a,s,e.layer.spatialReference),i[o]=s.toJSON(e)}else i[o]=a.toJSON(e);delete i[o].spatialReference}clone(){return new p({geometry:R(this.geometry),type:this.type})}};r([n({type:c}),l()],t.prototype,"geometry",void 0),r([y(["web-scene","portal-item"],"geometry")],t.prototype,"writeGeometry",null),r([n({type:["clip","mask","replace"],nonNullable:!0}),l()],t.prototype,"type",void 0),t=p=r([m("esri.layers.support.SceneModification")],t);const v=t;export{v as f};
