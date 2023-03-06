import{c as d,t as l,h,a as g,v as p,e as r,y as s,b as c}from"./index.f0b603e5.js";import{b as u}from"./TileTreeDebugger.3d51e69f.js";let i=class extends u{get updating(){var t,e;return(e=(t=this._watchUpdatingTracking)==null?void 0:t.updating)!=null?e:!1}constructor(t){super(t),this._watchUpdatingTracking=new d,this._handles=new l}initialize(){const{featureTiles:t}=this.view;this._handles.add(t.addClient()),this._watchUpdatingTracking.addOnCollectionChange(()=>t==null?void 0:t.tiles,()=>this.update(),h)}destroy(){this._handles=g(this._handles),this._watchUpdatingTracking.destroy()}getTiles(){const t=e=>{const[a,n,o]=e.lij;return p.fromExtent(this.view.featureTiles.tilingScheme.getExtentGeometry(a,n,o))};return this.view.featureTiles.tiles.toArray().sort((e,a)=>e.loadPriority-a.loadPriority).map(e=>({...e,geometry:t(e)}))}};r([s()],i.prototype,"_watchUpdatingTracking",void 0),r([s()],i.prototype,"updating",null),r([s()],i.prototype,"view",void 0),i=r([c("esri.views.3d.layers.support.FeatureTileTree3DDebugger")],i);export{i as FeatureTileTree3DDebugger};
