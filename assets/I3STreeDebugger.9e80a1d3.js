import{r as b,t as c,jI as d,b0 as r,bS as u,ef as p,a8 as v,e as o,y as f,a as y,dS as g,b3 as j}from"./index.7ded6657.js";import{b as z}from"./TileTreeDebugger.7152c611.js";let h=class extends z{constructor(a){super(a)}getTiles(){const a=this.lv.getVisibleNodes(),i=this.view.renderSpatialReference,l=this.nodeSR;return a.map(t=>m(t,i,l)).filter(b).sort((t,s)=>t.lij[0]===s.lij[0]?t.label>s.label?-1:1:t.lij[0]-s.lij[0])}};function m(a,i,l){const t=a.serviceObb;if(c(t)||c(i))return null;d(n,t.quaternion),r(e,t.center),u(e,l,0,e,i,0,1),n[12]=e[0],n[13]=e[1],n[14]=e[2];const s=[[],[],[]];r(e,t.halfSize),p(e,e,n),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),r(e,t.halfSize),e[0]=-e[0],p(e,e,n),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),r(e,t.halfSize),e[0]=-e[0],e[1]=-e[1],p(e,e,n),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),r(e,t.halfSize),e[1]=-e[1],p(e,e,n),u(e,i,0,e,l,0,1),s[0].push([e[0],e[1]]),s[1].push(s[0][0]),s[1].push(s[0][1]),r(e,t.halfSize),e[0]=-e[0],e[2]=-e[2],p(e,e,n),u(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),r(e,t.halfSize),e[2]=-e[2],p(e,e,n),u(e,i,0,e,l,0,1),s[1].push([e[0],e[1]]),s[2].push(s[0][0]),s[2].push(s[0][3]),r(e,t.halfSize),e[1]=-e[1],e[2]=-e[2],p(e,e,n),u(e,i,0,e,l,0,1),s[2].push([e[0],e[1]]),s[2].push(s[1][3]);const S=new v({rings:s,spatialReference:l});return{lij:[a.level,a.childCount,0],label:a.id,geometry:S}}o([f({constructOnly:!0})],h.prototype,"lv",void 0),o([f({constructOnly:!0})],h.prototype,"nodeSR",void 0),h=o([y("esri.views.3d.layers.support.I3STreeDebugger")],h);const n=g(),e=j();export{h as I3STreeDebugger};
