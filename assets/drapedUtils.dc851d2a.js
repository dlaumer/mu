import{ar as x,r as M,cf as c}from"./index.f0b603e5.js";function h(n,r,e,a=new x){var f;let i=0;if(e.type==="2d")i=r*((f=e.resolution)!=null?f:0);else if(e.type==="3d"){const o=e.overlayPixelSizeInMapUnits(n),t=e.basemapSpatialReference;i=M(t)&&!t.equals(e.spatialReference)?c(t)/c(e.spatialReference):r*o}const s=n.x-i,l=n.y-i,m=n.x+i,p=n.y+i,{spatialReference:y}=e;return a.xmin=Math.min(s,m),a.ymin=Math.min(l,p),a.xmax=Math.max(s,m),a.ymax=Math.max(l,p),a.spatialReference=y,a}new x;export{h as a};
