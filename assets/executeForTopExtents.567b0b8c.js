import{c8 as n,tO as c,ar as m}from"./index.f0b603e5.js";import{p as s}from"./queryTopFeatures.da0e657a.js";async function u(a,o,r){const e=n(a),t=await s(e,c.from(o),{...r});return{count:t.data.count,extent:m.fromJSON(t.data.extent)}}export{u as executeForTopExtents};