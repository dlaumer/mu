import{r as a,ar as n,n as c,ok as m}from"./index.f0b603e5.js";import{m as i,d as f,S as u,T as p,p as S,R as d,b as h,F as y,D as x,a as O,f as N}from"./dataUtils.118f21a1.js";import{C as J,i as b}from"./utils.223d4124.js";import{M as g,T as k,$ as w}from"./rasterProjectionHelper.e8a0406f.js";import"./colorUtils.31a1b5d7.js";class F{convertVectorFieldData(t){const e=i.fromJSON(t.pixelBlock),s=f(e,t.type);return Promise.resolve(a(s)?s.toJSON():null)}async decode(t){const e=await u(t.data,t.options);return e&&e.toJSON()}symbolize(t){t.pixelBlock=i.fromJSON(t.pixelBlock),t.extent=t.extent?n.fromJSON(t.extent):null;const e=this.symbolizer.symbolize(t);return Promise.resolve(a(e)?e.toJSON():null)}async updateSymbolizer(t){var e;this.symbolizer=p.fromJSON(t.symbolizerJSON),t.histograms&&((e=this.symbolizer)==null?void 0:e.rendererJSON.type)==="rasterStretch"&&(this.symbolizer.rendererJSON.histograms=t.histograms)}async updateRasterFunction(t){this.rasterFunction=J(t.rasterFunctionJSON)}async process(t){const e=this.rasterFunction.process({extent:n.fromJSON(t.extent),primaryPixelBlocks:t.primaryPixelBlocks.map(s=>a(s)?i.fromJSON(s):null),primaryRasterIds:t.primaryRasterIds});return a(e)?e.toJSON():null}stretch(t){const e=this.symbolizer.simpleStretch(i.fromJSON(t.srcPixelBlock),t.stretchParams);return Promise.resolve(a(e)&&e.toJSON())}estimateStatisticsHistograms(t){const e=S(i.fromJSON(t.srcPixelBlock));return Promise.resolve(e)}split(t){const e=d(i.fromJSON(t.srcPixelBlock),t.tileSize,t.maximumPyramidLevel);return e&&e.forEach((s,o)=>{e.set(o,s==null?void 0:s.toJSON())}),Promise.resolve(e)}async mosaicAndTransform(t){const e=t.srcPixelBlocks.map(l=>l?new i(l):null),s=h(e,t.srcMosaicSize,{blockWidths:t.blockWidths,alignmentInfo:t.alignmentInfo,clipOffset:t.clipOffset,clipSize:t.clipSize});let o,r=s;return t.coefs&&(r=y(s,t.destDimension,t.coefs,t.sampleSpacing,t.interpolation)),t.projectDirections&&t.gcsGrid&&(o=x(t.destDimension,t.gcsGrid),r=c(O(r,t.isUV?"vector-uv":"vector-magdir",o))),{pixelBlock:r==null?void 0:r.toJSON(),localNorthDirections:o}}async createFlowMesh(t,e){const s={data:new Float32Array(t.flowData.buffer),mask:new Uint8Array(t.flowData.maskBuffer),width:t.flowData.width,height:t.flowData.height},{vertexData:o,indexData:r}=await N(t.meshType,t.simulationSettings,s,e.signal);return{result:{vertexBuffer:o.buffer,indexBuffer:r.buffer},transferList:[o.buffer,r.buffer]}}async getProjectionOffsetGrid(t){const e=n.fromJSON(t.projectedExtent),s=n.fromJSON(t.srcBufferExtent);let o=null;t.datumTransformationSteps&&(o=new m({steps:t.datumTransformationSteps})),(t.includeGCSGrid||g(e.spatialReference,s.spatialReference,o))&&await k();const r=t.rasterTransform?b(t.rasterTransform):null;return w({...t,projectedExtent:e,srcBufferExtent:s,datumTransformation:o,rasterTransform:r})}}export{F as default};
