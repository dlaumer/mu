import{ld as Le,la as Ae,lb as ze,U as He,m_ as We,iP as Ge,cW as he,em as Be,m$ as Je,hO as Q,al as je,Y as fe,n0 as ke,n1 as Ke,n2 as Ye,r as C,n3 as ce,t as N,n4 as _e,n5 as Xe,n6 as Qe,df as Ze,aR as et,bP as tt,n7 as it,n8 as nt,n9 as rt,na as at,jZ as st,lc as J,nb as me,c9 as W,l3 as V,mL as ot,mM as lt,nc as ct,hX as q,nd as dt,ne as ut,hZ as z,bD as Oe,j7 as ae,d as ht,nf as ft,ng as _t,bs as mt,cK as pt,iM as gt,a7 as pe,e as se,y as oe,a as yt}from"./index.f0143bd6.js";import{t as $}from"./Rect.e8e4d18d.js";import{e as vt}from"./rasterizingUtils.fc5342b1.js";import{n as de,a as A,r as j,i as $e,b as ee,l as ge}from"./StyleRepository.9120ae13.js";import{h as xt,T as H}from"./TileInfoView.28d19e82.js";import{Z as O,_ as Ne,$ as ye}from"./enums.89506096.js";import{M as ne}from"./number.dcd3e86c.js";import{c as ve}from"./GeometryUtils.6a2e733c.js";import{n as wt}from"./LayerView3D.8eabc277.js";import{c as bt}from"./TiledLayerView3D.2439fc5c.js";import{u as St}from"./LayerView.6db58379.js";import"./TileClipper.7b9dd3ce.js";class Tt{constructor(e,i){this._lockedSchemaPixelSize=e,this._isGCS=i}getLevelRowColumn(e){return this._isGCS?[e[0],e[1]>>1,e[2]>>1]:this._lockedSchemaPixelSize===256&&e[0]>0?[e[0]-1,e[1]>>1,e[2]>>1]:e}adjustLevel(e){return this._isGCS?e:this._lockedSchemaPixelSize===256?e>0?e-1:0:e}getShift(e,i){let t=0,n=0;return(this._lockedSchemaPixelSize===256||this._isGCS)&&(e[2]%2&&(t=i),e[1]%2&&(n=i)),[t,n]}getScale(e){if(this._isGCS){if(this._lockedSchemaPixelSize===512)return 4}else if(this._lockedSchemaPixelSize===256&&e===0)return 1;return 2}}class te{constructor(e,i){this._width=0,this._height=0,this._free=[],this._width=e,this._height=i,this._free.push(new $(0,0,e,i))}get width(){return this._width}get height(){return this._height}allocate(e,i){if(e>this._width||i>this._height)return new $;let t=null,n=-1;for(let r=0;r<this._free.length;++r){const a=this._free[r];e<=a.width&&i<=a.height&&(t===null||a.y<=t.y&&a.x<=t.x)&&(t=a,n=r)}return t===null?new $:(this._free.splice(n,1),t.width<t.height?(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,i)),t.height>i&&this._free.push(new $(t.x,t.y+i,t.width,t.height-i))):(t.width>e&&this._free.push(new $(t.x+e,t.y,t.width-e,t.height)),t.height>i&&this._free.push(new $(t.x,t.y+i,e,t.height-i))),new $(t.x,t.y,e,i))}release(e){for(let i=0;i<this._free.length;++i){const t=this._free[i];if(t.y===e.y&&t.height===e.height&&t.x+t.width===e.x)t.width+=e.width;else if(t.x===e.x&&t.width===e.width&&t.y+t.height===e.y)t.height+=e.height;else if(e.y===t.y&&e.height===t.height&&e.x+e.width===t.x)t.x=e.x,t.width+=e.width;else{if(e.x!==t.x||e.width!==t.width||e.y+e.height!==t.y)continue;t.y=e.y,t.height+=e.height}this._free.splice(i,1),this.release(e)}this._free.push(e)}}class xe{constructor(e,i,t){this.width=0,this.height=0,this._dirties=[],this._glyphData=[],this._currentPage=0,this._glyphIndex={},this._textures=[],this._rangePromises=new Map,this.width=e,this.height=i,this._glyphSource=t,this._binPack=new te(e-4,i-4),this._glyphData.push(new Uint8Array(e*i)),this._dirties.push(!0),this._textures.push(void 0)}getGlyphItems(e,i){const t=[],n=this._glyphSource,r=new Set,a=1/256;for(const o of i){const l=Math.floor(o*a);r.add(l)}const s=[];return r.forEach(o=>{if(o<=256){const l=e+o;if(this._rangePromises.has(l))s.push(this._rangePromises.get(l));else{const u=n.getRange(e,o).then(()=>{this._rangePromises.delete(l)},()=>{this._rangePromises.delete(l)});this._rangePromises.set(l,u),s.push(u)}}}),Promise.all(s).then(()=>{let o=this._glyphIndex[e];o||(o={},this._glyphIndex[e]=o);for(const l of i){const u=o[l];if(u){t[l]={sdf:!0,rect:u.rect,metrics:u.metrics,page:u.page,code:l};continue}const h=n.getGlyph(e,l);if(!h||!h.metrics)continue;const f=h.metrics;let c;if(f.width===0)c=new $(0,0,0,0);else{const m=f.width+6,y=f.height+2*3;let _=m%4?4-m%4:4,p=y%4?4-y%4:4;_===1&&(_=5),p===1&&(p=5),c=this._binPack.allocate(m+_,y+p),c.isEmpty&&(this._dirties[this._currentPage]||(this._glyphData[this._currentPage]=null),this._currentPage=this._glyphData.length,this._glyphData.push(new Uint8Array(this.width*this.height)),this._dirties.push(!0),this._textures.push(void 0),this._binPack=new te(this.width-4,this.height-4),c=this._binPack.allocate(m+_,y+p));const M=this._glyphData[this._currentPage],P=h.bitmap;let v,b;if(P)for(let S=0;S<y;S++){v=m*S,b=this.width*(c.y+S+1)+c.x;for(let x=0;x<m;x++)M[b+x+1]=P[v+x]}}o[l]={rect:c,metrics:f,tileIDs:null,page:this._currentPage},t[l]={sdf:!0,rect:c,metrics:f,page:this._currentPage,code:l},this._dirties[this._currentPage]=!0}return t})}removeGlyphs(e){for(const i in this._glyphIndex){const t=this._glyphIndex[i];if(!t)continue;let n;for(const r in t)if(n=t[r],n.tileIDs.delete(e),n.tileIDs.size===0){const a=this._glyphData[n.page],s=n.rect;let o,l;for(let u=0;u<s.height;u++)for(o=this.width*(s.y+u)+s.x,l=0;l<s.width;l++)a[o+l]=0;delete t[r],this._dirties[n.page]=!0}}}bind(e,i,t,n=0){this._textures[t]||(this._textures[t]=new Le(e,{pixelFormat:Ae.ALPHA,dataType:ze.UNSIGNED_BYTE,width:this.width,height:this.height},new Uint8Array(this.width*this.height)));const r=this._textures[t];r.setSamplingMode(i),this._dirties[t]&&r.setData(this._glyphData[t]),e.bindTexture(r,n),this._dirties[t]=!1}dispose(){this._binPack=null;for(const e of this._textures)e&&e.dispose();this._textures.length=0}}class le{constructor(e){if(this._metrics=[],this._bitmaps=[],e)for(;e.next();)switch(e.tag()){case 1:{const i=e.getMessage();for(;i.next();)switch(i.tag()){case 3:{const t=i.getMessage();let n,r,a,s,o,l,u;for(;t.next();)switch(t.tag()){case 1:n=t.getUInt32();break;case 2:r=t.getBytes();break;case 3:a=t.getUInt32();break;case 4:s=t.getUInt32();break;case 5:o=t.getSInt32();break;case 6:l=t.getSInt32();break;case 7:u=t.getUInt32();break;default:t.skip()}t.release(),n&&(this._metrics[n]={width:a,height:s,left:o,top:l,advance:u},this._bitmaps[n]=r);break}default:i.skip()}i.release();break}default:e.skip()}}getMetrics(e){return this._metrics[e]}getBitmap(e){return this._bitmaps[e]}}class Pt{constructor(){this._ranges=[]}getRange(e){return this._ranges[e]}addRange(e,i){this._ranges[e]=i}}class we{constructor(e){this._glyphInfo={},this._baseURL=e}getRange(e,i){const t=this._getFontStack(e);if(t.getRange(i))return Promise.resolve();const n=256*i,r=n+255;if(this._baseURL){const a=this._baseURL.replace("{fontstack}",e).replace("{range}",n+"-"+r);return He(a,{responseType:"array-buffer"}).then(s=>{t.addRange(i,new le(new We(new Uint8Array(s.data),new DataView(s.data))))}).catch(()=>{t.addRange(i,new le)})}return t.addRange(i,new le),Promise.resolve()}getGlyph(e,i){const t=this._getFontStack(e);if(!t)return;const n=Math.floor(i/256);if(n>256)return;const r=t.getRange(n);return r?{metrics:r.getMetrics(i),bitmap:r.getBitmap(i)}:void 0}_getFontStack(e){let i=this._glyphInfo[e];return i||(i=this._glyphInfo[e]=new Pt),i}}const Mt="dasharray-";class ie{constructor(e,i,t=0){this._size=[],this._mosaicsData=[],this._textures=[],this._dirties=[],this._maxItemSize=0,this._currentPage=0,this._pageWidth=0,this._pageHeight=0,this._mosaicRects={},this.pixelRatio=1,(e<=0||i<=0)&&console.error("Sprites mosaic defaultWidth and defaultHeight must be greater than zero!"),this._pageWidth=e,this._pageHeight=i,t>0&&(this._maxItemSize=t),this._binPack=new te(e-4,i-4)}dispose(){this._binPack=null,this._mosaicRects={};for(const e of this._textures)e&&e.dispose();this._textures.length=0}getWidth(e){return e>=this._size.length?-1:this._size[e][0]}getHeight(e){return e>=this._size.length?-1:this._size[e][1]}getPageSize(e){return e>=this._size.length?null:this._size[e]}setSpriteSource(e){if(this.dispose(),this.pixelRatio=e.devicePixelRatio,this._mosaicsData.length===0){this._binPack=new te(this._pageWidth-4,this._pageHeight-4);const i=Math.floor(this._pageWidth),t=Math.floor(this._pageHeight),n=new Uint32Array(i*t);this._mosaicsData[0]=n,this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0)}this._sprites=e}getSpriteItem(e,i=!1){let t,n,r=this._mosaicRects[e];if(r)return r;if(!this._sprites||this._sprites.loadStatus!=="loaded"||(e&&e.startsWith(Mt)?([t,n]=this._rasterizeDash(e),i=!0):t=this._sprites.getSpriteInfo(e),!t||!t.width||!t.height||t.width<0||t.height<0))return null;const a=t.width,s=t.height,[o,l,u]=this._allocateImage(a,s);return o.width<=0?null:(this._copy(o,t,l,u,i,n),r={rect:o,width:a,height:s,sdf:t.sdf,simplePattern:!1,pixelRatio:t.pixelRatio,page:l},this._mosaicRects[e]=r,r)}getSpriteItems(e){const i={};for(const t of e)i[t.name]=this.getSpriteItem(t.name,t.repeat);return i}getMosaicItemPosition(e,i){const t=this.getSpriteItem(e,i),n=t&&t.rect;if(!n)return null;n.width=t.width,n.height=t.height;const r=t.width,a=t.height,s=2;return{tl:[n.x+s,n.y+s],br:[n.x+s+r,n.y+s+a],page:t.page}}bind(e,i,t=0,n=0){if(t>=this._size.length||t>=this._mosaicsData.length)return;this._textures[t]||(this._textures[t]=new Le(e,{pixelFormat:Ae.RGBA,dataType:ze.UNSIGNED_BYTE,wrapMode:Ge.CLAMP_TO_EDGE,width:this._size[t][0],height:this._size[t][1]},new Uint8Array(this._mosaicsData[t].buffer)));const r=this._textures[t];r.setSamplingMode(i),this._dirties[t]&&r.setData(new Uint8Array(this._mosaicsData[t].buffer)),e.bindTexture(r,n),this._dirties[t]=!1}static _copyBits(e,i,t,n,r,a,s,o,l,u,h){let f=n*i+t,c=o*a+s;if(h){c-=a;for(let g=-1;g<=u;g++,f=((g+u)%u+n)*i+t,c+=a)for(let m=-1;m<=l;m++)r[c+m]=e[f+(m+l)%l]}else for(let g=0;g<u;g++){for(let m=0;m<l;m++)r[c+m]=e[f+m];f+=i,c+=a}}_copy(e,i,t,n,r,a){if(!this._sprites||this._sprites.loadStatus!=="loaded"||t>=this._mosaicsData.length)return;const s=new Uint32Array(a?a.buffer:this._sprites.image.buffer),o=this._mosaicsData[t];o&&s||console.error("Source or target images are uninitialized!");const l=2,u=a?i.width:this._sprites.width;ie._copyBits(s,u,i.x,i.y,o,n[0],e.x+l,e.y+l,i.width,i.height,r),this._dirties[t]=!0}_allocateImage(e,i){e+=2,i+=2;const t=Math.max(e,i);if(this._maxItemSize&&this._maxItemSize<t){const s=new $(0,0,e,i);return this._mosaicsData.push(new Uint32Array(e*i)),this._dirties.push(!0),this._size.push([e,i]),this._textures.push(void 0),[s,this._mosaicsData.length-1,[e,i]]}let n=e%4?4-e%4:4,r=i%4?4-i%4:4;n===1&&(n=5),r===1&&(r=5);const a=this._binPack.allocate(e+n,i+r);return a.width<=0?(this._dirties[this._currentPage]||(this._mosaicsData[this._currentPage]=null),this._currentPage=this._mosaicsData.length,this._mosaicsData.push(new Uint32Array(this._pageWidth*this._pageHeight)),this._dirties.push(!0),this._size.push([this._pageWidth,this._pageHeight]),this._textures.push(void 0),this._binPack=new te(this._pageWidth-4,this._pageHeight-4),this._allocateImage(e,i)):[a,this._currentPage,[this._pageWidth,this._pageHeight]]}_rasterizeDash(e){const i=/\[(.*?)\]/,t=e.match(i);if(!t)return null;const n=t[1].split(",").map(Number),r=e.slice(e.lastIndexOf("-")+1),[a,s,o]=vt(n,r);return[{x:0,y:0,width:s,height:o,sdf:!0,pixelRatio:1},new Uint8Array(a.buffer)]}}class It{constructor(e,i,t){this._layer=e,this._styleRepository=i,this.devicePixelRatio=t,this._spriteMosaic=null,this._glyphMosaic=null,this._connection=null}destroy(){var e;(e=this._connection)==null||e.close(),this._connection=null,this._styleRepository=null,this._layer=null,this._spriteMosaic=null,this._glyphMosaic=null}get spriteMosaic(){return this._spriteSourcePromise.then(()=>this._spriteMosaic)}get glyphMosaic(){return this._glyphMosaic}async start(e){this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,e),this._spriteSourcePromise.then(n=>{this._spriteMosaic=new ie(1024,1024,250),this._spriteMosaic.setSpriteSource(n)});const i=this._layer.currentStyleInfo.glyphsUrl,t=new we(i?he(i,{...this._layer.customParameters,token:this._layer.apiKey}):null);this._glyphMosaic=new xe(1024,1024,t),this._broadcastPromise=Be("WorkerTileHandler",{client:this,schedule:e.schedule,signal:e.signal}).then(n=>{if(this._connection=n,this._layer&&!this._connection.closed){const r=n.broadcast("setStyle",this._layer.currentStyleInfo.style,e);Promise.all(r).catch(a=>Je(a))}})}async updateStyle(e){return await this._broadcastPromise,this._broadcastPromise=Promise.all(this._connection.broadcast("updateStyle",e)),this._broadcastPromise}setSpriteSource(e){const i=new ie(1024,1024,250);return i.setSpriteSource(e),this._spriteMosaic=i,this._spriteSourcePromise=Promise.resolve(e),i}async setStyle(e,i){await this._broadcastPromise,this._styleRepository=e,this._spriteSourcePromise=this._layer.loadSpriteSource(this.devicePixelRatio,null),this._spriteSourcePromise.then(n=>{this._spriteMosaic=new ie(1024,1024,250),this._spriteMosaic.setSpriteSource(n)});const t=new we(this._layer.currentStyleInfo.glyphsUrl?he(this._layer.currentStyleInfo.glyphsUrl,{...this._layer.customParameters,token:this._layer.apiKey}):null);return this._glyphMosaic=new xe(1024,1024,t),this._broadcastPromise=Promise.all(this._connection.broadcast("setStyle",i)),this._broadcastPromise}fetchTileData(e,i){return this._getRefKeys(e,i).then(t=>{const n=this._layer.sourceNameToSource,r=[];for(const a in n)r.push(a);return this._getSourcesData(r,t,i)})}parseTileData(e,i){const t=e&&e.data;if(!t)return Promise.resolve(null);const{sourceName2DataAndRefKey:n,transferList:r}=t;return Object.keys(n).length===0?Promise.resolve(null):this._broadcastPromise.then(()=>this._connection.invoke("createTileAndParse",{key:e.key.id,sourceName2DataAndRefKey:n,styleLayerUIDs:e.styleLayerUIDs},{...i,transferList:r}))}async getSprites(e){return await this._spriteSourcePromise,this._spriteMosaic.getSpriteItems(e)}getGlyphs(e){return this._glyphMosaic.getGlyphItems(e.font,e.codePoints)}async _getTilePayload(e,i,t){const n=Q.pool.acquire(e.id),r=this._layer.sourceNameToSource[i],{level:a,row:s,col:o}=n;Q.pool.release(n);try{return{protobuff:await r.requestTile(a,s,o,t),sourceName:i}}catch(l){if(je(l))throw l;return{protobuff:null,sourceName:i}}}_getRefKeys(e,i){const t=this._layer.sourceNameToSource,n=new Array;for(const r in t){const a=t[r].getRefKey(e,i);n.push(a)}return fe(n)}_getSourcesData(e,i,t){const n=[];for(let r=0;r<i.length;r++)if(i[r].value==null||e[r]==null)n.push(null);else{const a=this._getTilePayload(i[r].value,e[r],t);n.push(a)}return fe(n).then(r=>{const a={},s=[];for(let o=0;o<r.length;o++){const l=r[o].value;if(l&&l.protobuff&&l.protobuff.byteLength>0){const u=i[o].value.id;a[l.sourceName]={refKey:u,protobuff:l.protobuff},s.push(l.protobuff)}}return{sourceName2DataAndRefKey:a,transferList:s}})}}function Rt(d,e,i,t,n,r){const{iconRotationAlignment:a,textRotationAlignment:s,iconTranslate:o,iconTranslateAnchor:l,textTranslate:u,textTranslateAnchor:h}=t;let f=0;for(const c of d.colliders){const[g,m]=c.partIndex===0?o:u,y=c.partIndex===0?l:h,_=c.minLod<=r&&r<=c.maxLod;f+=_?0:1,c.enabled=_,c.xScreen=c.xTile*n[0]+c.yTile*n[3]+n[6],c.yScreen=c.xTile*n[1]+c.yTile*n[4]+n[7],y===j.MAP?(c.xScreen+=i*g-e*m,c.yScreen+=e*g+i*m):(c.xScreen+=g,c.yScreen+=m),A.VIEWPORT===(c.partIndex===0?a:s)?(c.dxScreen=c.dxPixels,c.dyScreen=c.dyPixels):(c.dxScreen=i*(c.dxPixels+c.width/2)-e*(c.dyPixels+c.height/2)-c.width/2,c.dyScreen=e*(c.dxPixels+c.width/2)+i*(c.dyPixels+c.height/2)-c.height/2)}d.colliders.length>0&&f===d.colliders.length&&(d.unique.show=!1)}class Dt{constructor(e,i,t,n,r,a){this._symbols=e,this._styleRepository=n,this._zoom=r,this._currentLayerCursor=0,this._currentSymbolCursor=0,this._styleProps=new Map,this._allNeededMatrices=new Map,this._gridIndex=new ke(i,t,Ke),this._si=Math.sin(Math.PI*a/180),this._co=Math.cos(Math.PI*a/180);for(const s of e)for(const o of s.symbols)this._allNeededMatrices.has(o.tile)||this._allNeededMatrices.set(o.tile,Ye(o.tile.transforms.tileUnitsToPixels))}work(e){const i=this._gridIndex;function t(r){const a=r.xScreen+r.dxScreen,s=r.yScreen+r.dyScreen,o=a+r.width,l=s+r.height,[u,h,f,c]=i.getCellSpan(a,s,o,l);for(let g=h;g<=c;g++)for(let m=u;m<=f;m++){const y=i.cells[g][m];for(const _ of y){const p=_.xScreen+_.dxScreen,M=_.yScreen+_.dyScreen,P=p+_.width,v=M+_.height;if(!(o<p||a>P||l<M||s>v))return!0}}return!1}const n=performance.now();for(;this._currentLayerCursor<this._symbols.length;this._currentLayerCursor++,this._currentSymbolCursor=0){const r=this._symbols[this._currentLayerCursor],a=this._getProperties(r.styleLayerUID);for(;this._currentSymbolCursor<r.symbols.length;this._currentSymbolCursor++){if(this._currentSymbolCursor%100==99&&performance.now()-n>e)return!1;const s=r.symbols[this._currentSymbolCursor];if(!s.unique.show)continue;Rt(s,this._si,this._co,a,this._allNeededMatrices.get(s.tile),this._zoom);const o=s.unique;if(!o.show)continue;const{iconAllowOverlap:l,iconIgnorePlacement:u,textAllowOverlap:h,textIgnorePlacement:f}=a;for(const c of s.colliders){if(!c.enabled)continue;const g=o.parts[c.partIndex];!g.show||!(c.partIndex?h:l)&&t(c)&&(c.hard?o.show=!1:g.show=!1)}if(o.show)for(const c of s.colliders){if(!c.enabled||(c.partIndex?f:u)||!o.parts[c.partIndex].show)continue;const g=c.xScreen+c.dxScreen,m=c.yScreen+c.dyScreen,y=g+c.width,_=m+c.height,[p,M,P,v]=this._gridIndex.getCellSpan(g,m,y,_);for(let b=M;b<=v;b++)for(let S=p;S<=P;S++)this._gridIndex.cells[b][S].push(c)}}}return!0}_getProperties(e){const i=this._styleProps.get(e);if(i)return i;const t=this._zoom,n=this._styleRepository.getStyleLayerByUID(e),r=n.getLayoutValue("symbol-placement",t)!==de.POINT;let a=n.getLayoutValue("icon-rotation-alignment",t);a===A.AUTO&&(a=r?A.MAP:A.VIEWPORT);let s=n.getLayoutValue("text-rotation-alignment",t);s===A.AUTO&&(s=r?A.MAP:A.VIEWPORT);const o=n.getPaintValue("icon-translate",t),l=n.getPaintValue("icon-translate-anchor",t),u=n.getPaintValue("text-translate",t),h=n.getPaintValue("text-translate-anchor",t),f={iconAllowOverlap:n.getLayoutValue("icon-allow-overlap",t),iconIgnorePlacement:n.getLayoutValue("icon-ignore-placement",t),textAllowOverlap:n.getLayoutValue("text-allow-overlap",t),textIgnorePlacement:n.getLayoutValue("text-ignore-placement",t),iconRotationAlignment:a,textRotationAlignment:s,iconTranslateAnchor:l,iconTranslate:o,textTranslateAnchor:h,textTranslate:u};return this._styleProps.set(e,f),f}}function Ct(d,e){if(d.priority-e.priority)return d.priority-e.priority;const i=d.tile.key,t=e.tile.key;return i.world-t.world?i.world-t.world:i.level-t.level?i.level-t.level:i.row-t.row?i.row-t.row:i.col-t.col?i.col-t.col:d.xTile-e.xTile?d.xTile-e.xTile:d.yTile-e.yTile}class Et{get running(){return this._running}constructor(e,i,t,n,r,a){this._visibleTiles=e,this._symbolRepository=i,this._createCollisionJob=t,this._assignTileSymbolsOpacity=n,this._symbolLayerSorter=r,this._isLayerVisible=a,this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}setScreenSize(e,i){this._screenWidth===e&&this._screenHeight===i||this.restart(),this._screenWidth=e,this._screenHeight=i}restart(){this._selectionJob=null,this._selectionJobCompleted=!1,this._collisionJob=null,this._collisionJobCompleted=!1,this._opacityJob=null,this._opacityJobCompleted=!1,this._running=!0}continue(e){if(this._selectionJob||(this._selectionJob=this._createSelectionJob()),!this._selectionJobCompleted){const i=performance.now();if(!this._selectionJob.work(e)||(this._selectionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._collisionJob||(this._collisionJob=this._createCollisionJob(this._selectionJob.sortedSymbols,this._screenWidth,this._screenHeight)),!this._collisionJobCompleted){const i=performance.now();if(!this._collisionJob.work(e)||(this._collisionJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}if(this._opacityJob||(this._opacityJob=this._createOpacityJob()),!this._opacityJobCompleted){const i=performance.now();if(!this._opacityJob.work(e)||(this._opacityJobCompleted=!0,(e=Math.max(0,e-(performance.now()-i)))===0))return!1}return this._running=!1,!0}_createSelectionJob(){const e=this._symbolRepository.uniqueSymbols;for(let o=0;o<e.length;o++){const l=e[o];for(let u=0;u<l.uniqueSymbols.length;u++){const h=l.uniqueSymbols[u];for(const f of h.tileSymbols)f.selectedForRendering=!1}}const i=[];let t=0,n=0;const r=this._isLayerVisible;function a(o){let l;const u=performance.now();for(;n<e.length;n++,t=0){const h=e[n],f=h.styleLayerUID;if(!r(f)){i[n]||(i[n]={styleLayerUID:f,symbols:[]});continue}i[n]=i[n]||{styleLayerUID:f,symbols:[]};const c=i[n];for(;t<h.uniqueSymbols.length;t++){if(l=h.uniqueSymbols[t],t%100==99&&performance.now()-u>o)return!1;let g=null,m=!1,y=!1;for(const _ of l.tileSymbols)if(!y||!m){const p=_.tile;(!g||p.isCoverage||p.neededForCoverage&&!m)&&(g=_,(p.neededForCoverage||p.isCoverage)&&(y=!0),p.isCoverage&&(m=!0))}if(g.selectedForRendering=!0,y){c.symbols.push(g),l.show=!0;for(const _ of l.parts)_.show=!0}else l.show=!1}}for(const h of i)h.symbols.sort(Ct);return!0}const s=this._symbolLayerSorter;return{work:a,get sortedSymbols(){return i.sort(s)}}}_createOpacityJob(){const e=this._assignTileSymbolsOpacity,i=this._visibleTiles;let t=0;function n(r,a){const s=r.symbols;for(const[o,l]of s)Ut(l,a);e(r,a);for(const o of r.childrenTiles)n(o,a)}return{work(r){const a=performance.now();for(;t<i.length;t++){if(performance.now()-a>r)return!1;const s=i[t];C(s.parentTile)||n(s,performance.now())}return!0}}}}function Ut(d,e){for(const i of d){const t=i.unique;for(const n of t.parts){const r=n.targetOpacity>.5?1:-1;n.startOpacity+=r*((e-n.startTime)/ce),n.startOpacity=Math.min(Math.max(n.startOpacity,0),1),n.startTime=e,n.targetOpacity=t.show&&n.show?1:0}}}const Lt=32,At=8,zt=64;class kt{constructor(e,i,t){this.tileCoordRange=e,this._visibleTiles=i,this._createUnique=t,this._tiles=new Map,this._uniqueSymbolsReferences=new Map}get uniqueSymbols(){return N(this._uniqueSymbolLayerArray)&&(this._uniqueSymbolLayerArray=this._createUniqueSymbolLayerArray()),this._uniqueSymbolLayerArray}add(e,i){this._uniqueSymbolLayerArray=null;let t=this._tiles.get(e.id);t||(t={symbols:new Map},this._tiles.set(e.id,t));const n=new Map;if(i)for(const s of i)t.symbols.has(s)&&(n.set(s,t.symbols.get(s)),t.symbols.delete(s));else for(const[s,o]of e.layerData)t.symbols.has(s)&&(n.set(s,t.symbols.get(s)),t.symbols.delete(s));this._removeSymbols(n);const r=e.symbols,a=new Map;for(const[s,o]of r){let l=o.length;if(l>=Lt){let u=this.tileCoordRange;do u/=2,l/=4;while(l>At&&u>zt);const h=new ke(this.tileCoordRange,this.tileCoordRange,u);a.set(s,{flat:o,index:h}),t.symbols.set(s,{flat:o,index:h});for(const f of o)h.getCell(f.xTile,f.yTile).push(f)}else a.set(s,{flat:o}),t.symbols.set(s,{flat:o})}this._addSymbols(e.key,r)}deleteStyleLayers(e){this._uniqueSymbolLayerArray=null;for(const[i,t]of this._tiles){const n=new Map;for(const r of e)t.symbols.has(r)&&(n.set(r,t.symbols.get(r)),t.symbols.delete(r));this._removeSymbols(n),t.symbols.size===0&&this._tiles.delete(i)}}removeTile(e){this._uniqueSymbolLayerArray=null;const i=this._tiles.get(e.id);if(!i)return;const t=new Map;for(const[n,r]of e.symbols)i.symbols.has(n)&&(t.set(n,i.symbols.get(n)),i.symbols.delete(n));this._removeSymbols(t),i.symbols.size===0&&this._tiles.delete(e.id)}_removeSymbols(e){for(const[i,{flat:t}]of e)for(const n of t){const r=n.unique,a=r.tileSymbols,s=a.length-1;for(let o=0;o<s;o++)if(a[o]===n){a[o]=a[s];break}if(a.length=s,s===0){const o=this._uniqueSymbolsReferences.get(i);o.delete(r),o.size===0&&this._uniqueSymbolsReferences.delete(i)}n.unique=null}}_addSymbols(e,i){if(i.size===0)return;const t=this._visibleTiles;for(const n of t)n.parentTile||n.key.world!==e.world||n.key.level===e.level&&!n.key.equals(e)||this._matchSymbols(n,e,i);for(const[n,r]of i)for(const a of r)if(N(a.unique)){const s=this._createUnique();a.unique=s,s.tileSymbols.push(a);let o=this._uniqueSymbolsReferences.get(n);o||(o=new Set,this._uniqueSymbolsReferences.set(n,o)),o.add(s)}}_matchSymbols(e,i,t){if(e.key.level>i.level){const r=e.key.level-i.level;if(e.key.row>>r!==i.row||e.key.col>>r!==i.col)return}if(i.level>e.key.level){const r=i.level-e.key.level;if(i.row>>r!==e.key.row||i.col>>r!==e.key.col)return}if(i.equals(e.key)){for(const r of e.childrenTiles)this._matchSymbols(r,i,t);return}const n=new Map;for(const[r,a]of t){const s=[];for(const h of a){const f=_e(this.tileCoordRange,h.xTile,i.level,i.col,e.key.level,e.key.col),c=_e(this.tileCoordRange,h.yTile,i.level,i.row,e.key.level,e.key.row);f>=0&&f<this.tileCoordRange&&c>=0&&c<this.tileCoordRange&&s.push({symbol:h,xTransformed:f,yTransformed:c})}const o=[],l=e.key.level<i.level?1:1<<e.key.level-i.level,u=this._tiles.get(e.id).symbols.get(r);if(u){const h=u.flat;for(const f of s){let c,g=!1;const m=f.xTransformed,y=f.yTransformed;c=C(u.index)?u.index.getCell(m,y):h;const _=f.symbol,p=_.hash;for(const M of c)if(p===M.hash&&Math.abs(m-M.xTile)<=l&&Math.abs(y-M.yTile)<=l){const P=M.unique;_.unique=P,P.tileSymbols.push(_),g=!0;break}g||o.push(_)}}o.length>0&&n.set(r,o)}for(const r of e.childrenTiles)this._matchSymbols(r,i,n)}_createUniqueSymbolLayerArray(){const e=this._uniqueSymbolsReferences,i=new Array(e.size);let t,n=0;for(const[r,a]of e){const s=new Array(a.size);t=0;for(const o of a)s[t++]=o;i[n]={styleLayerUID:r,uniqueSymbols:s},n++}return i}}function Ot(d,e){const i=[],t=new kt(4096,i,()=>{const r=new Qe;return r.show=!1,r.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),r.parts.push({startTime:0,startOpacity:0,targetOpacity:0,show:!1}),r}),n=new Et(i,t,(r,a,s)=>new Dt(r,a,s,d.styleRepository,d.key.level,0),(r,a)=>{Xe(r,a,!1)},()=>0,r=>{const a=e.getStyleLayerByUID(r).getLayoutProperty("visibility");return!a||a.getValue()!==$e.NONE});i.push(d),t.add(d),n.setScreenSize(512,512),n.continue(1/0)}class $t extends xt{constructor(){super(...arguments),this._fullCacheLodInfos=null,this._levelByScale={}}getTileParentId(e){const i=Q.pool.acquire(e),t=i.level===0?null:Q.getId(i.level-1,i.row>>1,i.col>>1,i.world);return Q.pool.release(i),t}getTileCoverage(e,i,t){const n=super.getTileCoverage(e,i,t);if(!n)return n;const r=1<<n.lodInfo.level;return n.spans=n.spans.filter(a=>a.row>=0&&a.row<r),n}scaleToLevel(e){if(this._fullCacheLodInfos||this._initializeFullCacheLODs(this._lodInfos),this._levelByScale[e])return this._levelByScale[e];{const i=this._fullCacheLodInfos;if(e>i[0].scale)return i[0].level;let t,n;for(let r=0;r<i.length-1;r++)if(n=i[r+1],e>n.scale)return t=i[r],t.level+(t.scale-e)/(t.scale-n.scale);return i[i.length-1].level}}_initializeFullCacheLODs(e){let i;if(e[0].level===0)i=e.map(t=>({level:t.level,resolution:t.resolution,scale:t.scale}));else{const t=this.tileInfo.size[0],n=this.tileInfo.spatialReference;i=Ze.create({size:t,spatialReference:n}).lods.map(r=>({level:r.level,resolution:r.resolution,scale:r.scale}))}for(let t=0;t<i.length;t++)this._levelByScale[i[t].scale]=i[t].level;this._fullCacheLodInfos=i}}class be extends It{constructor(e,i,t,n,r){super(e,i,t),this._memCache=n,this._loader=r,this._ongoingTileRequests=new Map,this._ongoingRequestToController=new Map,this._tileInfoView=new $t(e.tileInfo,e.fullExtent)}destroy(){super.destroy(),this._ongoingRequestToController.forEach(e=>e.abort()),this._ongoingRequestToController.clear(),this._ongoingTileRequests.clear()}async getVectorTile(e,i,t,n){const r=new Q(e,i,t,0);let a=this._memCache.get(r.id);if(C(a))return a.retain(),a;const s=await this._getVectorTileData(r);if(et(n),!this._layer)return null;if(a=this._memCache.get(r.id),C(a))return a.retain(),a;const o=this._layer.tileInfo.getTileBounds(tt(),r),l=this._tileInfoView.getTileResolution(e);return a=new it(r,l,o[0],o[3],512,512,this._styleRepository,this._memCache),C(s)?(a.setData(s),a.retain(),this._memCache.put(r.id,a,a.memoryUsage*a.referenced,nt)):a.setData(null),a.neededForCoverage=!0,a.transforms.tileUnitsToPixels=rt(1/8,0,0,0,1/8,0,0,0,1),Ot(a,this._styleRepository),a}_getVectorTileData(e){const i=e.id;if(this._ongoingTileRequests.has(i))return this._ongoingTileRequests.get(i);const t=new AbortController,n={signal:t.signal},r=this._getParsedVectorTileData(e,n).then(a=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),a)).catch(()=>(this._ongoingTileRequests.delete(i),this._ongoingRequestToController.delete(i),null));return this._ongoingTileRequests.set(i,r),this._ongoingRequestToController.set(i,t),r}_getParsedVectorTileData(e,i){return this.fetchTileData(e,i).then(t=>this.parseTileData({key:e,data:t},i))}request(e,i){return this._loader.request(e,"binary",i)}}class re{constructor(){this.name=this.constructor.name||"UnnamedBrush",this.brushEffect=null}prepareState(e,i){}draw(e,i,t){}drawMany(e,i,t){for(const n of i)n.visible&&this.draw(e,n,t)}}class Nt extends re{constructor(){super(...arguments),this._color=at(1,0,0,1),this._patternMatrix=st(),this._programOptions={id:!1,pattern:!1}}dispose(){this._vao&&(this._vao.dispose(),this._vao=null)}drawMany(e,i){const{context:t,painter:n,styleLayerUID:r,requestRender:a,allowDelayedRender:s}=e;this._loadWGLResources(e);const o=e.displayLevel,l=e.styleLayer,u=l.backgroundMaterial,h=n.vectorTilesMaterialManager,f=l.getPaintValue("background-color",o),c=l.getPaintValue("background-opacity",o),g=l.getPaintValue("background-pattern",o),m=g!==void 0,y=f[3]*c,_=1|window.devicePixelRatio,p=e.spriteMosaic;let M,P;const v=_>Ne?2:1,b=e.drawPhase===H.HITTEST,S=this._programOptions;S.id=b,S.pattern=m;const x=h.getMaterialProgram(t,u,S);if(s&&C(a)&&!x.compiled)a();else{if(t.bindVAO(this._vao),t.useProgram(x),m){const w=p.getMosaicItemPosition(g,!0);if(C(w)){const{tl:I,br:T,page:D}=w;M=T[0]-I[0],P=T[1]-I[1];const R=p.getPageSize(D);C(R)&&(p.bind(t,J.LINEAR,D,O),x.setUniform4f("u_tlbr",I[0],I[1],T[0],T[1]),x.setUniform2fv("u_mosaicSize",R),x.setUniform1i("u_texture",O))}x.setUniform1f("u_opacity",c)}else this._color[0]=y*f[0],this._color[1]=y*f[1],this._color[2]=y*f[2],this._color[3]=y,x.setUniform4fv("u_color",this._color);if(x.setUniform1f("u_depth",l.z||0),b){const w=ne(r+1);x.setUniform4fv("u_id",w)}for(const w of i){if(x.setUniform1f("u_coord_range",w.rangeX),x.setUniformMatrix3fv("u_dvsMat3",w.transforms.dvs),m){const I=Math.max(2**(Math.round(o)-w.key.level),1),T=v*w.width*I,D=T/me(M),R=T/me(P);this._patternMatrix[0]=D,this._patternMatrix[4]=R,x.setUniformMatrix3fv("u_pattern_matrix",this._patternMatrix)}t.setStencilFunction(W.EQUAL,0,255),t.drawArrays(V.TRIANGLE_STRIP,0,4)}}}_loadWGLResources(e){if(this._vao)return;const{context:i,styleLayer:t}=e,n=t.backgroundMaterial,r=new Int8Array([0,0,1,0,0,1,1,1]),a=ot.createVertex(i,lt.STATIC_DRAW,r),s=new ct(i,n.getAttributeLocations(),n.getLayoutInfo(),{geometry:a});this._vao=s}}class Vt extends re{constructor(){super(...arguments),this._programOptions={id:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,requiredLevel:r,state:a,drawPhase:s,painter:o,spriteMosaic:l,styleLayerUID:u,requestRender:h,allowDelayedRender:f}=e;if(!i.some(S=>{var x,w;return(w=(x=S.layerData.get(u))==null?void 0:x.circleIndexCount)!=null?w:!1}))return;const c=e.styleLayer,g=c.circleMaterial,m=o.vectorTilesMaterialManager,y=1.2,_=c.getPaintValue("circle-translate",n),p=c.getPaintValue("circle-translate-anchor",n),M=s===H.HITTEST,P=this._programOptions;P.id=M;const v=m.getMaterialProgram(t,g,P);if(f&&C(h)&&!v.compiled)return void h();t.useProgram(v),v.setUniformMatrix3fv("u_displayMat3",p===j.VIEWPORT?a.displayMat3:a.displayViewMat3),v.setUniform2fv("u_circleTranslation",_),v.setUniform1f("u_depth",c.z),v.setUniform1f("u_antialiasingWidth",y);let b=-1;if(M){const S=ne(u+1);v.setUniform4fv("u_id",S)}for(const S of i){if(!S.layerData.has(u))continue;S.key.level!==b&&(b=S.key.level,g.setDataUniforms(v,n,c,b,l));const x=S.layerData.get(u);if(!x.circleIndexCount)continue;x.prepareForRendering(t);const w=x.circleVertexArrayObject;N(w)||(t.bindVAO(w),v.setUniformMatrix3fv("u_dvsMat3",S.transforms.dvs),r!==S.key.level?t.setStencilFunction(W.EQUAL,S.stencilRef,255):t.setStencilFunction(W.GREATER,255,255),t.drawElements(V.TRIANGLES,x.circleIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*x.circleIndexStart),S.triangleCount+=x.circleIndexCount/3)}}}const Se=1/65536;class Ft extends re{constructor(){super(...arguments),this._fillProgramOptions={id:!1,pattern:!1},this._outlineProgramOptions={id:!1}}dispose(){}drawMany(e,i){const{displayLevel:t,drawPhase:n,renderPass:r,spriteMosaic:a,styleLayerUID:s}=e;let o=!1;for(const v of i)if(v.layerData.has(s)){const b=v.layerData.get(s);if(b.fillIndexCount>0||b.outlineIndexCount>0){o=!0;break}}if(!o)return;const l=e.styleLayer,u=l.getPaintProperty("fill-pattern"),h=u!==void 0,f=h&&u.isDataDriven;let c;if(h&&!f){const v=u.getValue(t);c=a.getMosaicItemPosition(v,!0)}const g=!h&&l.getPaintValue("fill-antialias",t);let m=!0,y=1;if(!h){const v=l.getPaintProperty("fill-color"),b=l.getPaintProperty("fill-opacity");if(!(v!=null&&v.isDataDriven)&&!(b!=null&&b.isDataDriven)){const S=l.getPaintValue("fill-color",t);y=l.getPaintValue("fill-opacity",t)*S[3],y>=1&&(m=!1)}}if(m&&r==="opaque")return;let _;n===H.HITTEST&&(_=ne(s+1));const p=l.getPaintValue("fill-translate",t),M=l.getPaintValue("fill-translate-anchor",t);(m||r!=="translucent")&&this._drawFill(e,s,l,i,p,M,h,c,f,_);const P=!l.hasDataDrivenOutlineColor&&l.outlineUsesFillColor&&y<1;g&&r!=="opaque"&&!P&&this._drawOutline(e,s,l,i,p,M,_)}_drawFill(e,i,t,n,r,a,s,o,l,u){if(s&&!l&&N(o))return;const{context:h,displayLevel:f,state:c,drawPhase:g,painter:m,pixelRatio:y,spriteMosaic:_,requestRender:p,allowDelayedRender:M}=e,P=t.fillMaterial,v=m.vectorTilesMaterialManager,b=y>Ne?2:1,S=g===H.HITTEST,x=this._fillProgramOptions;x.id=S,x.pattern=s;const w=v.getMaterialProgram(h,P,x);if(M&&C(p)&&!w.compiled)return void p();if(h.useProgram(w),C(o)){const{page:T}=o,D=_.getPageSize(T);C(D)&&(_.bind(h,J.LINEAR,T,O),w.setUniform2fv("u_mosaicSize",D),w.setUniform1i("u_texture",O))}w.setUniformMatrix3fv("u_displayMat3",a===j.VIEWPORT?c.displayMat3:c.displayViewMat3),w.setUniform2fv("u_fillTranslation",r),w.setUniform1f("u_depth",t.z+Se),S&&w.setUniform4fv("u_id",u);let I=-1;for(const T of n){if(!T.layerData.has(i))continue;T.key.level!==I&&(I=T.key.level,P.setDataUniforms(w,f,t,I,_));const D=T.layerData.get(i);if(!D.fillIndexCount)continue;D.prepareForRendering(h);const R=D.fillVertexArrayObject;if(!N(R)){if(h.bindVAO(R),w.setUniformMatrix3fv("u_dvsMat3",T.transforms.dvs),h.setStencilFunction(W.EQUAL,T.stencilRef,255),s){const L=Math.max(2**(Math.round(f)-T.key.level),1),E=T.rangeX/(b*T.width*L);w.setUniform1f("u_patternFactor",E)}if(l){const L=D.patternMap;if(!L)continue;for(const[E,G]of L){const B=_.getPageSize(E);C(B)&&(_.bind(h,J.LINEAR,E,O),w.setUniform2fv("u_mosaicSize",B),w.setUniform1i("u_texture",O),h.drawElements(V.TRIANGLES,G[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*G[0]))}}else h.drawElements(V.TRIANGLES,D.fillIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*D.fillIndexStart);T.triangleCount+=D.fillIndexCount/3}}}_drawOutline(e,i,t,n,r,a,s){const{context:o,displayLevel:l,state:u,drawPhase:h,painter:f,pixelRatio:c,spriteMosaic:g,requestRender:m,allowDelayedRender:y}=e,_=t.outlineMaterial,p=f.vectorTilesMaterialManager,M=.75/c,P=h===H.HITTEST,v=this._outlineProgramOptions;v.id=P;const b=p.getMaterialProgram(o,_,v);if(y&&C(m)&&!b.compiled)return void m();o.useProgram(b),b.setUniformMatrix3fv("u_displayMat3",a===j.VIEWPORT?u.displayMat3:u.displayViewMat3),b.setUniform2fv("u_fillTranslation",r),b.setUniform1f("u_depth",t.z+Se),b.setUniform1f("u_outline_width",M),P&&b.setUniform4fv("u_id",s);let S=-1;for(const x of n){if(!x.layerData.has(i))continue;x.key.level!==S&&(S=x.key.level,_.setDataUniforms(b,l,t,S,g));const w=x.layerData.get(i);if(w.prepareForRendering(o),!w.outlineIndexCount)continue;const I=w.outlineVertexArrayObject;N(I)||(o.bindVAO(I),b.setUniformMatrix3fv("u_dvsMat3",x.transforms.dvs),o.setStencilFunction(W.EQUAL,x.stencilRef,255),o.drawElements(V.TRIANGLES,w.outlineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*w.outlineIndexStart),x.triangleCount+=w.outlineIndexCount/3)}}}class qt extends re{constructor(){super(...arguments),this._programOptions={id:!1,pattern:!1,sdf:!1}}dispose(){}drawMany(e,i){const{context:t,displayLevel:n,state:r,drawPhase:a,painter:s,pixelRatio:o,spriteMosaic:l,styleLayerUID:u,requestRender:h,allowDelayedRender:f}=e;if(!i.some(R=>{var L,E;return(E=(L=R.layerData.get(u))==null?void 0:L.lineIndexCount)!=null?E:!1}))return;const c=e.styleLayer,g=c.lineMaterial,m=s.vectorTilesMaterialManager,y=c.getPaintValue("line-translate",n),_=c.getPaintValue("line-translate-anchor",n),p=c.getPaintProperty("line-pattern"),M=p!==void 0,P=M&&p.isDataDriven;let v,b;if(M&&!P){const R=p.getValue(n);v=l.getMosaicItemPosition(R)}let S=!1;if(!M){const R=c.getPaintProperty("line-dasharray");if(b=R!==void 0,S=b&&R.isDataDriven,b&&!S){const L=R.getValue(n),E=c.getDashKey(L,c.getLayoutValue("line-cap",n));v=l.getMosaicItemPosition(E)}}const x=1/o,w=a===H.HITTEST,I=this._programOptions;I.id=w,I.pattern=M,I.sdf=b;const T=m.getMaterialProgram(t,g,I);if(f&&C(h)&&!T.compiled)return void h();if(t.useProgram(T),T.setUniformMatrix3fv("u_displayViewMat3",r.displayViewMat3),T.setUniformMatrix3fv("u_displayMat3",_===j.VIEWPORT?r.displayMat3:r.displayViewMat3),T.setUniform2fv("u_lineTranslation",y),T.setUniform1f("u_depth",c.z),T.setUniform1f("u_antialiasing",x),w){const R=ne(u+1);T.setUniform4fv("u_id",R)}if(v&&C(v)){const{page:R}=v,L=l.getPageSize(R);C(L)&&(l.bind(t,J.LINEAR,R,O),T.setUniform2fv("u_mosaicSize",L),T.setUniform1i("u_texture",O))}let D=-1;for(const R of i){if(!R.layerData.has(u))continue;R.key.level!==D&&(D=R.key.level,g.setDataUniforms(T,n,c,D,l));const L=2**(n-D)/o;T.setUniform1f("u_zoomFactor",L);const E=R.layerData.get(u);if(!E.lineIndexCount)continue;E.prepareForRendering(t);const G=E.lineVertexArrayObject;if(!N(G)){if(t.bindVAO(G),T.setUniformMatrix3fv("u_dvsMat3",R.transforms.dvs),t.setStencilFunction(W.EQUAL,R.stencilRef,255),P||S){const B=E.patternMap;if(!B)continue;for(const[Z,U]of B){const Y=l.getPageSize(Z);C(Y)&&(l.bind(t,J.LINEAR,Z,O),T.setUniform2fv("u_mosaicSize",Y),T.setUniform1i("u_texture",O),t.drawElements(V.TRIANGLES,U[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*U[0]))}}else t.drawElements(V.TRIANGLES,E.lineIndexCount,q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*E.lineIndexStart);R.triangleCount+=E.lineIndexCount/3}}}}const Ht=1/65536;class Wt extends re{constructor(){super(...arguments),this._iconProgramOptions={id:!1,sdf:!1},this._sdfProgramOptions={id:!1},this._spritesTextureSize=dt()}dispose(){}drawMany(e,i){const{drawPhase:t,styleLayerUID:n}=e,r=e.styleLayer;let a;t===H.HITTEST&&(a=ne(n+1)),this._drawIcons(e,r,i,a),this._drawText(e,r,i,a)}_drawIcons(e,i,t,n){const{context:r,displayLevel:a,drawPhase:s,painter:o,spriteMosaic:l,state:u,styleLayerUID:h,requestRender:f,allowDelayedRender:c}=e,g=i.iconMaterial,m=o.vectorTilesMaterialManager;let y,_=!1;for(const D of t)if(D.layerData.has(h)&&(y=D.layerData.get(h),y.iconPerPageElementsMap.size>0)){_=!0;break}if(!_)return;const p=i.getPaintValue("icon-translate",a),M=i.getPaintValue("icon-translate-anchor",a);let P=i.getLayoutValue("icon-rotation-alignment",a);P===A.AUTO&&(P=i.getLayoutValue("symbol-placement",a)===de.POINT?A.VIEWPORT:A.MAP);const v=P===A.MAP,b=i.getLayoutValue("icon-keep-upright",a)&&v,S=y.isIconSDF,x=s===H.HITTEST,w=this._iconProgramOptions;w.id=x,w.sdf=S;const I=m.getMaterialProgram(r,g,w);if(c&&C(f)&&!I.compiled)return void f();r.useProgram(I),I.setUniformMatrix3fv("u_displayViewMat3",P===A.MAP?u.displayViewMat3:u.displayMat3),I.setUniformMatrix3fv("u_displayMat3",M===j.VIEWPORT?u.displayMat3:u.displayViewMat3),I.setUniform2fv("u_iconTranslation",p),I.setUniform1f("u_depth",i.z),I.setUniform1f("u_mapRotation",ve(u.rotation)),I.setUniform1f("u_keepUpright",b?1:0),I.setUniform1f("u_level",10*a),I.setUniform1i("u_texture",O),I.setUniform1f("u_fadeDuration",ce/1e3),x&&I.setUniform4fv("u_id",n);let T=-1;for(const D of t){if(!D.layerData.has(h)||(D.key.level!==T&&(T=D.key.level,g.setDataUniforms(I,a,i,T,l)),y=D.layerData.get(h),y.iconPerPageElementsMap.size===0))continue;y.prepareForRendering(r),y.updateOpacityInfo();const R=y.iconVertexArrayObject;if(!N(R)){r.bindVAO(R),I.setUniformMatrix3fv("u_dvsMat3",D.transforms.dvs),I.setUniform1f("u_time",(performance.now()-y.lastOpacityUpdate)/1e3);for(const[L,E]of y.iconPerPageElementsMap)this._renderIconRange(e,I,E,L,D)}}}_renderIconRange(e,i,t,n,r){const{context:a,spriteMosaic:s}=e;this._spritesTextureSize[0]=s.getWidth(n)/4,this._spritesTextureSize[1]=s.getHeight(n)/4,i.setUniform2fv("u_mosaicSize",this._spritesTextureSize),s.bind(a,J.LINEAR,n,O),a.setStencilTestEnabled(!0),a.setStencilFunction(W.GREATER,255,255),a.setStencilWriteMask(0),a.drawElements(V.TRIANGLES,t[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*t[0]),r.triangleCount+=t[1]/3}_drawText(e,i,t,n){const{context:r,displayLevel:a,drawPhase:s,glyphMosaic:o,painter:l,pixelRatio:u,spriteMosaic:h,state:f,styleLayerUID:c,requestRender:g,allowDelayedRender:m}=e,y=i.textMaterial,_=l.vectorTilesMaterialManager;let p,M=!1;for(const F of t)if(F.layerData.has(c)&&(p=F.layerData.get(c),p.glyphPerPageElementsMap.size>0)){M=!0;break}if(!M)return;const P=i.getPaintProperty("text-opacity");if(P&&!P.isDataDriven&&P.getValue(a)===0)return;const v=i.getPaintProperty("text-color"),b=!v||v.isDataDriven||v.getValue(a)[3]>0,S=i.getPaintProperty("text-halo-width"),x=i.getPaintProperty("text-halo-color"),w=(!S||S.isDataDriven||S.getValue(a)>0)&&(!x||x.isDataDriven||x.getValue(a)[3]>0);if(!b&&!w)return;const I=24/8;let T=i.getLayoutValue("text-rotation-alignment",a);T===A.AUTO&&(T=i.getLayoutValue("symbol-placement",a)===de.POINT?A.VIEWPORT:A.MAP);const D=T===A.MAP,R=i.getLayoutValue("text-keep-upright",a)&&D,L=s===H.HITTEST,E=.8*I/u;this._glyphTextureSize||(this._glyphTextureSize=ut(o.width/4,o.height/4));const G=i.getPaintValue("text-translate",a),B=i.getPaintValue("text-translate-anchor",a),Z=this._sdfProgramOptions;Z.id=L;const U=_.getMaterialProgram(r,y,Z);if(m&&C(g)&&!U.compiled)return void g();r.useProgram(U),U.setUniformMatrix3fv("u_displayViewMat3",T===A.MAP?f.displayViewMat3:f.displayMat3),U.setUniformMatrix3fv("u_displayMat3",B===j.VIEWPORT?f.displayMat3:f.displayViewMat3),U.setUniform2fv("u_textTranslation",G),U.setUniform1f("u_depth",i.z+Ht),U.setUniform2fv("u_mosaicSize",this._glyphTextureSize),U.setUniform1f("u_mapRotation",ve(f.rotation)),U.setUniform1f("u_keepUpright",R?1:0),U.setUniform1f("u_level",10*a),U.setUniform1i("u_texture",ye),U.setUniform1f("u_antialiasingWidth",E),U.setUniform1f("u_fadeDuration",ce/1e3),L&&U.setUniform4fv("u_id",n);let Y=-1;for(const F of t){if(!F.layerData.has(c)||(F.key.level!==Y&&(Y=F.key.level,y.setDataUniforms(U,a,i,Y,h)),p=F.layerData.get(c),p.glyphPerPageElementsMap.size===0))continue;p.prepareForRendering(r),p.updateOpacityInfo();const ue=p.textVertexArrayObject;if(N(ue))continue;r.bindVAO(ue),U.setUniformMatrix3fv("u_dvsMat3",F.transforms.dvs),r.setStencilTestEnabled(!0),r.setStencilFunction(W.GREATER,255,255),r.setStencilWriteMask(0);const Ve=(performance.now()-p.lastOpacityUpdate)/1e3;U.setUniform1f("u_time",Ve),p.glyphPerPageElementsMap.forEach((Fe,qe)=>{this._renderGlyphRange(r,Fe,qe,o,U,w,b,F)})}}_renderGlyphRange(e,i,t,n,r,a,s,o){n.bind(e,J.LINEAR,t,ye),a&&(r.setUniform1f("u_halo",1),e.drawElements(V.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),o.triangleCount+=i[1]/3),s&&(r.setUniform1f("u_halo",0),e.drawElements(V.TRIANGLES,i[1],q.UNSIGNED_INT,Uint32Array.BYTES_PER_ELEMENT*i[0]),o.triangleCount+=i[1]/3)}}const Gt={vtlBackground:Nt,vtlFill:Ft,vtlLine:qt,vtlCircle:Vt,vtlSymbol:Wt},Bt={background:{"background.frag":`#ifdef PATTERN
uniform lowp float u_opacity;
uniform lowp sampler2D u_texture;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_tileTextureCoord;
#else
uniform lowp vec4 u_color;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main() {
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = mod(v_tileTextureCoord, 1.0);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = u_opacity * color;
#else
gl_FragColor = u_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"background.vert":`precision mediump float;
attribute vec2 a_pos;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform mediump float u_coord_range;
uniform mediump float u_depth;
#ifdef PATTERN
uniform mediump mat3 u_pattern_matrix;
varying mediump vec2 v_tileTextureCoord;
uniform mediump vec4 u_tlbr;
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
#endif
void main() {
gl_Position = vec4((u_dvsMat3 * vec3(u_coord_range * a_pos, 1.0)).xy, u_depth, 1.0);
#ifdef PATTERN
v_tileTextureCoord = (u_pattern_matrix * vec3(a_pos, 1.0)).xy;
v_tlbr             = u_tlbr / u_mosaicSize.xyxy;
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},circle:{"circle.frag":`precision lowp float;
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float dist = length(v_offset);
mediump float alpha = smoothstep(0.0, -v_blur, dist - 1.0);
lowp float color_mix_ratio = v_stroke_width < 0.01 ? 0.0 : smoothstep(-v_blur, 0.0, dist - v_radius / (v_radius + v_stroke_width));
gl_FragColor = alpha * mix(v_color, v_stroke_color, color_mix_ratio);
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"circle.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
varying lowp vec4 v_color;
varying lowp vec4 v_stroke_color;
varying mediump float v_blur;
varying mediump float v_stroke_width;
varying mediump float v_radius;
varying mediump vec2 v_offset;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_circleTranslation;
uniform mediump float u_depth;
uniform mediump float u_antialiasingWidth;
void main()
{
#pragma main
v_color = color * opacity;
v_stroke_color = stroke_color * stroke_opacity;
v_stroke_width = stroke_width;
v_radius = radius;
v_blur = max(blur, u_antialiasingWidth / (radius + stroke_width));
mediump vec2 offset = vec2(mod(a_pos, 2.0) * 2.0 - 1.0);
v_offset = offset;
#ifdef ID
v_id = u_id / 255.0;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos * 0.5, 1.0) + u_displayMat3 * vec3((v_radius + v_stroke_width) * offset + u_circleTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},fill:{"fill.frag":`precision lowp float;
#ifdef PATTERN
uniform lowp sampler2D u_texture;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef PATTERN
mediump vec2 normalizedTextureCoord = fract(v_tileTextureCoord);
mediump vec2 samplePos = mix(v_tlbr.xy, v_tlbr.zw, normalizedTextureCoord);
lowp vec4 color = texture2D(u_texture, samplePos);
gl_FragColor = v_color[3] * color;
#else
gl_FragColor = v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"fill.vert":`precision mediump float;
attribute vec2 a_pos;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump float u_depth;
uniform mediump vec2 u_fillTranslation;
#ifdef PATTERN
#include <util/util.glsl>
uniform mediump vec2 u_mosaicSize;
uniform mediump float u_patternFactor;
varying mediump vec2 v_tileTextureCoord;
varying mediump vec4 v_tlbr;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
#ifdef PATTERN
float patternWidth = nextPOT(tlbr.z - tlbr.x);
float patternHeight = nextPOT(tlbr.w - tlbr.y);
float scaleX = 1.0 / (patternWidth * u_patternFactor);
float scaleY = 1.0 / (patternHeight * u_patternFactor);
mat3 patterMat = mat3(scaleX, 0.0,    0.0,
0.0,    -scaleY, 0.0,
0.0,    0.0,    1.0);
v_tileTextureCoord = (patterMat * vec3(a_pos, 1.0)).xy;
v_tlbr             = tlbr / u_mosaicSize.xyxy;
#endif
vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},icon:{"icon.frag":`precision mediump float;
uniform lowp sampler2D u_texture;
#ifdef SDF
uniform lowp vec4 u_color;
uniform lowp vec4 u_outlineColor;
#endif
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
varying lowp vec4 v_color;
#ifdef SDF
varying mediump flaot v_halo_width;
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
#include <util/encoding.glsl>
vec4 mixColors(vec4 color1, vec4 color2) {
float compositeAlpha = color2.a + color1.a * (1.0 - color2.a);
vec3 compositeColor = color2.rgb + color1.rgb * (1.0 - color2.a);
return vec4(compositeColor, compositeAlpha);
}
void main()
{
#ifdef SDF
lowp vec4 fillPixelColor = v_color;
float d = rgba2float(texture2D(u_texture, v_tex)) - 0.5;
const float softEdgeRatio = 0.248062016;
float size = max(v_size.x, v_size.y);
float dist = d * softEdgeRatio * size;
fillPixelColor *= clamp(0.5 - dist, 0.0, 1.0);
if (v_halo_width > 0.25) {
lowp vec4 outlinePixelColor = u_outlineColor;
const float outlineLimitRatio = (16.0 / 86.0);
float clampedOutlineSize = softEdgeRatio * min(v_halo_width, outlineLimitRatio * max(v_size.x, v_size.y));
outlinePixelColor *= clamp(0.5 - (abs(dist) - clampedOutlineSize), 0.0, 1.0);
gl_FragColor = v_opacity * mixColors(fillPixelColor, outlinePixelColor);
}
else {
gl_FragColor = v_opacity * fillPixelColor;
}
#else
lowp vec4 texColor = texture2D(u_texture, v_tex);
gl_FragColor = v_opacity * texColor;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"icon.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
#ifdef SDF
varying mediump float v_halo_width;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_iconTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying mediump vec2 v_tex;
varying lowp float v_opacity;
varying mediump vec2 v_size;
const float C_OFFSET_PRECISION = 1.0 / 8.0;
const float C_256_TO_RAD = 3.14159265359 / 128.0;
const float C_DEG_TO_RAD = 3.14159265359 / 180.0;
const float tileCoordRatio = 1.0 / 8.0;
uniform highp float u_time;
void main()
{
#pragma main
v_color = color;
v_opacity = opacity;
#ifdef SDF
v_halo_width = halo_width;
#endif
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_opacity *= interpolatedOpacity;
mediump float a_angle         = a_levelInfo[1];
mediump float a_minLevel      = a_levelInfo[2];
mediump float a_maxLevel      = a_levelInfo[3];
mediump vec2 a_tex            = a_texAngleRange.xy;
mediump float delta_z = 0.0;
mediump float rotated = mod(a_angle + u_mapRotation, 256.0);
delta_z += (1.0 - step(u_keepUpright, 0.0)) * step(64.0, rotated) * (1.0 - step(192.0, rotated));
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_opacity, 0.0);
vec2 offset = C_OFFSET_PRECISION * a_vertexOffset;
v_size = abs(offset);
#ifdef SDF
offset = (120.0 / 86.0) * offset;
#endif
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayViewMat3 * vec3(size * offset, 0.0) + u_displayMat3 * vec3(u_iconTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
#ifdef ID
v_id = u_id / 255.0;
#endif
v_tex = a_tex.xy / u_mosaicSize;
}`},line:{"line.frag":`precision lowp float;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
varying mediump float v_lineHalfWidth;
varying lowp vec4 v_color;
varying mediump float v_blur;
#if defined (PATTERN) || defined(SDF)
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
uniform sampler2D u_texture;
uniform mediump float u_antialiasing;
#endif
#ifdef SDF
#include <util/encoding.glsl>
#endif
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
mediump float fragDist = length(v_normal) * v_lineHalfWidth;
lowp float alpha = clamp((v_lineHalfWidth - fragDist) / v_blur, 0.0, 1.0);
#ifdef PATTERN
mediump float relativeTexX = fract(v_accumulatedDistance / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY = 0.5 + v_normal.y * v_lineHalfWidth / (v_patternSize.y * v_widthRatio);
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
lowp vec4 color = texture2D(u_texture, texCoord);
gl_FragColor = alpha * v_color[3] * color;
#elif defined(SDF)
mediump float relativeTexX = fract((v_accumulatedDistance * 0.5) / (v_patternSize.x * v_widthRatio));
mediump float relativeTexY =  0.5 + 0.25 * v_normal.y;
mediump vec2 texCoord = mix(v_tlbr.xy, v_tlbr.zw, vec2(relativeTexX, relativeTexY));
mediump float d = rgba2float(texture2D(u_texture, texCoord)) - 0.5;
float dist = d * (v_lineHalfWidth + u_antialiasing / 2.0);
gl_FragColor = alpha * clamp(0.5 - dist, 0.0, 1.0) * v_color;
#else
gl_FragColor = alpha * v_color;
#endif
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"line.vert":`precision mediump float;
attribute vec2 a_pos;
attribute vec4 a_extrude_offset;
attribute vec4 a_dir_normal;
attribute vec2 a_accumulatedDistance;
#pragma header
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump float u_zoomFactor;
uniform mediump vec2 u_lineTranslation;
uniform mediump float u_antialiasing;
uniform mediump float u_depth;
varying mediump vec2 v_normal;
varying highp float v_accumulatedDistance;
const float scale = 1.0 / 31.0;
const mediump float tileCoordRatio = 8.0;
#if defined (SDF)
const mediump float sdfPatternHalfWidth = 15.5;
#endif
#if defined (PATTERN) || defined(SDF)
uniform mediump vec2 u_mosaicSize;
varying mediump vec4 v_tlbr;
varying mediump vec2 v_patternSize;
varying mediump float v_widthRatio;
#endif
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
varying lowp vec4 v_color;
varying mediump float v_lineHalfWidth;
varying mediump float v_blur;
void main()
{
#pragma main
v_color = color * opacity;
v_blur = blur + u_antialiasing;
v_normal = a_dir_normal.zw * scale;
#if defined (PATTERN) || defined(SDF)
v_tlbr          = tlbr / u_mosaicSize.xyxy;
v_patternSize   = vec2(tlbr.z - tlbr.x, tlbr.y - tlbr.w);
#if defined (PATTERN)
v_widthRatio = width / v_patternSize.y;
#else
v_widthRatio = width / sdfPatternHalfWidth / 2.0;
#endif
#endif
v_lineHalfWidth = (width + u_antialiasing) * 0.5;
mediump vec2 dir = a_dir_normal.xy * scale;
mediump vec2 offset_ = a_extrude_offset.zw * scale * offset;
mediump vec2 dist = v_lineHalfWidth * scale * a_extrude_offset.xy;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos + offset_ * tileCoordRatio / u_zoomFactor, 1.0) + u_displayViewMat3 * vec3(dist, 0.0) + u_displayMat3 * vec3(u_lineTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
#if defined (PATTERN) || defined(SDF)
v_accumulatedDistance = a_accumulatedDistance.x * u_zoomFactor / tileCoordRatio + dot(dir, dist + offset_);
#endif
#ifdef ID
v_id = u_id / 255.0;
#endif
}`},outline:{"outline.frag":`varying lowp vec4 v_color;
varying mediump vec2 v_normal;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = abs(v_normal.y);
lowp float alpha = smoothstep(1.0, 0.0, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"outline.vert":`attribute vec2 a_pos;
attribute vec2 a_offset;
attribute vec2 a_xnormal;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform mediump vec2 u_fillTranslation;
uniform mediump float u_depth;
uniform mediump float u_outline_width;
varying lowp vec2 v_normal;
const float scale = 1.0 / 15.0;
void main()
{
#pragma main
v_color = color * opacity;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_normal = a_xnormal;
mediump vec2 dist = u_outline_width * scale * a_offset;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + u_displayMat3 * vec3(dist + u_fillTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth, 1.0);
}`},text:{"text.frag":`uniform lowp sampler2D u_texture;
varying lowp vec2 v_tex;
varying lowp vec4 v_color;
varying mediump float v_edgeWidth;
varying mediump float v_edgeDistance;
#ifdef ID
varying mediump vec4 v_id;
#endif
void main()
{
lowp float dist = texture2D(u_texture, v_tex).a;
mediump float alpha = smoothstep(v_edgeDistance - v_edgeWidth, v_edgeDistance + v_edgeWidth, dist);
gl_FragColor = alpha * v_color;
#ifdef ID
if (gl_FragColor.a < 1.0 / 255.0) {
discard;
}
gl_FragColor = v_id;
#endif
}`,"text.vert":`attribute vec2 a_pos;
attribute vec2 a_vertexOffset;
attribute vec4 a_texAngleRange;
attribute vec4 a_levelInfo;
attribute float a_opacityInfo;
#pragma header
varying lowp vec4 v_color;
#ifdef ID
uniform mediump vec4 u_id;
varying mediump vec4 v_id;
#endif
uniform highp mat3 u_dvsMat3;
uniform highp mat3 u_displayMat3;
uniform highp mat3 u_displayViewMat3;
uniform mediump vec2 u_textTranslation;
uniform vec2 u_mosaicSize;
uniform mediump float u_depth;
uniform mediump float u_mapRotation;
uniform mediump float u_level;
uniform lowp float u_keepUpright;
uniform mediump float u_fadeDuration;
varying lowp vec2 v_tex;
const float offsetPrecision = 1.0 / 8.0;
const mediump float edgePos = 0.75;
uniform mediump float u_antialiasingWidth;
varying mediump float v_edgeDistance;
varying mediump float v_edgeWidth;
uniform lowp float u_halo;
const float sdfFontScale = 1.0 / 24.0;
const float sdfPixel = 3.0;
uniform highp float u_time;
void main()
{
#pragma main
if (u_halo > 0.5)
{
v_color = halo_color * opacity;
halo_width *= sdfPixel;
halo_blur *= sdfPixel;
}
else
{
v_color = color * opacity;
halo_width = 0.0;
halo_blur = 0.0;
}
float modded = mod(a_opacityInfo, 128.0);
float targetOpacity = (a_opacityInfo - modded) / 128.0;
float startOpacity = modded / 127.0;
float interpolatedOpacity = clamp(startOpacity + 2.0 * (targetOpacity - 0.5) * u_time / u_fadeDuration, 0.0, 1.0);
v_color *= interpolatedOpacity;
mediump float a_angle       = a_levelInfo[1];
mediump float a_minLevel    = a_levelInfo[2];
mediump float a_maxLevel    = a_levelInfo[3];
mediump vec2 a_tex          = a_texAngleRange.xy;
mediump float a_visMinAngle    = a_texAngleRange.z;
mediump float a_visMaxAngle    = a_texAngleRange.w;
mediump float delta_z = 0.0;
mediump float angle = mod(a_angle + u_mapRotation, 256.0);
if (a_visMinAngle < a_visMaxAngle)
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) + (1.0 - step(a_visMinAngle, angle)));
}
else
{
delta_z += (1.0 - step(u_keepUpright, 0.0)) * (step(a_visMaxAngle, angle) * (1.0 - step(a_visMinAngle, angle)));
}
delta_z += 1.0 - step(a_minLevel, u_level);
delta_z += step(a_maxLevel, u_level);
delta_z += step(v_color[3], 0.0);
v_tex = a_tex.xy / u_mosaicSize;
#ifdef ID
v_id = u_id / 255.0;
#endif
v_edgeDistance = edgePos - halo_width / size;
v_edgeWidth = (u_antialiasingWidth + halo_blur) / size;
mediump vec3 pos = u_dvsMat3 * vec3(a_pos, 1.0) + sdfFontScale * u_displayViewMat3 * vec3(offsetPrecision * size * a_vertexOffset, 0.0) + u_displayMat3 * vec3(u_textTranslation, 0.0);
gl_Position = vec4(pos.xy, u_depth + delta_z, 1.0);
}`},util:{"encoding.glsl":`const vec4 rgba2float_factors = vec4(
255.0 / (256.0),
255.0 / (256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0),
255.0 / (256.0 * 256.0 * 256.0 * 256.0)
);
float rgba2float(vec4 rgba) {
return dot(rgba, rgba2float_factors);
}`,"util.glsl":`float nextPOT(in float x) {
return pow(2.0, ceil(log2(abs(x))));
}`}};class Jt{constructor(e){this._readFile=e}resolveIncludes(e){return this._resolve(e)}_resolve(e,i=new Map){if(i.has(e))return i.get(e);const t=this._read(e);if(!t)throw new Error(`cannot find shader file ${e}`);const n=/^[^\S\n]*#include\s+<(\S+)>[^\S\n]?/gm;let r=n.exec(t);const a=[];for(;r!=null;)a.push({path:r[1],start:r.index,length:r[0].length}),r=n.exec(t);let s=0,o="";return a.forEach(l=>{o+=t.slice(s,l.start),o+=i.has(l.path)?"":this._resolve(l.path,i),s=l.start+l.length}),o+=t.slice(s),i.set(e,o),o}_read(e){return this._readFile(e)}}function jt(d){let e=Bt;return d.split("/").forEach(i=>{e&&(e=e[i])}),e}const Kt=new Jt(jt);function k(d){return Kt.resolveIncludes(d)}function Yt(d){const{options:e,value:i}=d;return typeof e[i]=="number"}function K(d){let e="";for(const i in d){const t=d[i];if(typeof t=="boolean")t&&(e+=`#define ${i}
`);else if(typeof t=="number")e+=`#define ${i} ${t.toFixed()}
`;else if(typeof t=="object")if(Yt(t)){const{value:n,options:r,namespace:a}=t,s=a?`${a}_`:"";for(const o in r)e+=`#define ${s}${o} ${r[o].toFixed()}
`;e+=`#define ${i} ${s}${n}
`}else{const n=t.options;let r=0;for(const a in n)e+=`#define ${n[a]} ${(r++).toFixed()}
`;e+=`#define ${i} ${n[t.value]}
`}}return e}const Te=d=>K({ID:d.id,PATTERN:d.pattern}),Xt={shaders:d=>({vertexShader:Te(d)+k("background/background.vert"),fragmentShader:Te(d)+k("background/background.frag")})},Pe=d=>K({ID:d.id}),Qt={shaders:d=>({vertexShader:Pe(d)+k("circle/circle.vert"),fragmentShader:Pe(d)+k("circle/circle.frag")})},Me=d=>K({ID:d.id,PATTERN:d.pattern}),Zt={shaders:d=>({vertexShader:Me(d)+k("fill/fill.vert"),fragmentShader:Me(d)+k("fill/fill.frag")})},Ie=d=>K({ID:d.id}),ei={shaders:d=>({vertexShader:Ie(d)+k("outline/outline.vert"),fragmentShader:Ie(d)+k("outline/outline.frag")})},Re=d=>K({ID:d.id,SDF:d.sdf}),ti={shaders:d=>({vertexShader:Re(d)+k("icon/icon.vert"),fragmentShader:Re(d)+k("icon/icon.frag")})},De=d=>K({ID:d.id,PATTERN:d.pattern,SDF:d.sdf}),ii={shaders:d=>({vertexShader:De(d)+k("line/line.vert"),fragmentShader:De(d)+k("line/line.frag")})},Ce=d=>K({ID:d.id}),ni={shaders:d=>({vertexShader:Ce(d)+k("text/text.vert"),fragmentShader:Ce(d)+k("text/text.frag")})};class ri{constructor(){this._programByKey=new Map}dispose(){this._programByKey.forEach(e=>e.dispose()),this._programByKey.clear()}getMaterialProgram(e,i,t){const n=i.key<<3|this._getMaterialOptionsValue(i.type,t);if(this._programByKey.has(n))return this._programByKey.get(n);const r=this._getProgramTemplate(i.type),{shaders:a}=r,{vertexShader:s,fragmentShader:o}=a(t),l=i.getShaderHeader(),u=i.getShaderMain(),h=s.replace("#pragma header",l).replace("#pragma main",u),f=e.programCache.acquire(h,o,i.getAttributeLocations());return this._programByKey.set(n,f),f}_getMaterialOptionsValue(e,i){switch(e){case z.BACKGROUND:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case z.FILL:{const t=i;return(t.pattern?1:0)<<1|(t.id?1:0)}case z.OUTLINE:return i.id?1:0;case z.LINE:{const t=i;return(t.sdf?1:0)<<2|(t.pattern?1:0)<<1|(t.id?1:0)}case z.ICON:{const t=i;return(t.sdf?1:0)<<1|(t.id?1:0)}case z.CIRCLE:return i.id?1:0;case z.TEXT:return i.id?1:0;default:return 0}}_getProgramTemplate(e){switch(e){case z.BACKGROUND:return Xt;case z.CIRCLE:return Qt;case z.FILL:return Zt;case z.ICON:return ti;case z.LINE:return ii;case z.OUTLINE:return ei;case z.TEXT:return ni;default:return null}}}const Ee=1e-6;class Ue{constructor(e,i){this.spriteMosaic=e,this.glyphMosaic=i,this._brushCache=new Map,this._vtlMaterialManager=new ri}dispose(){this._brushCache&&(this._brushCache.forEach(e=>e.dispose()),this._brushCache=null),this._vtlMaterialManager=Oe(this._vtlMaterialManager),this.spriteMosaic.dispose(),this.glyphMosaic.dispose()}get vectorTilesMaterialManager(){return this._vtlMaterialManager}drawTile(e,i,t){const{context:n}=e,r=t.layers;t.backgroundBucketIds.length>0&&(e.renderPass="background",t.backgroundBucketIds.forEach(a=>this._renderStyleLayer(t.getLayerById(a),e,i,!0))),n.setBlendingEnabled(!1),n.setDepthTestEnabled(!0),n.setDepthWriteEnabled(!0),n.setDepthFunction(W.LEQUAL),e.renderPass="opaque";for(let a=r.length-1;a>=0;a--)this._renderStyleLayer(r[a],e,i,!1);n.setDepthWriteEnabled(!1),n.setBlendingEnabled(!0),n.setBlendFunctionSeparate(ae.ONE,ae.ONE_MINUS_SRC_ALPHA,ae.ONE,ae.ONE_MINUS_SRC_ALPHA),e.renderPass="translucent";for(let a=0;a<r.length;a++)this._renderStyleLayer(r[a],e,i,!1);n.setDepthTestEnabled(!1),n.bindVAO()}_renderStyleLayer(e,i,t,n=!1){if(!(n||e&&t.layerData.has(e.uid)))return;const r=e.getLayoutProperty("visibility");if(r&&r.getValue()===$e.NONE)return;const{renderPass:a}=i;let s;switch(e.type){case ee.BACKGROUND:if(a!=="background")return;s="vtlBackground";break;case ee.FILL:if(a!=="opaque"&&i.renderPass!=="translucent")return;s="vtlFill";break;case ee.LINE:if(a!=="translucent")return;s="vtlLine";break;case ee.CIRCLE:if(a!=="translucent")return;s="vtlCircle";break;case ee.SYMBOL:if(a!=="translucent")return;s="vtlSymbol"}const o=i.displayLevel;e.minzoom!==void 0&&e.minzoom>o+Ee||e.maxzoom!==void 0&&e.maxzoom<=o-Ee||(i.styleLayerUID=e.uid,i.styleLayer=e,this._drawWithBrush(i,t,s))}_drawWithBrush(e,i,t){if(!this._brushCache.has(t)){const n=Gt[t];this._brushCache.set(t,new n)}this._brushCache.get(t).drawMany(e,[i])}}let X=class extends bt(wt(St)){constructor(){super(...arguments),this._tileHandlerController=null,this.type="vector-tile-3d"}initialize(){if(N(this.layer.fullExtent))return void this.addResolvingPromise(Promise.reject(new ht("vectortilelayerview:full-extent-undefined","This layer view's layer does not define a fullExtent.")));const{basemapTerrain:d,spatialReference:e,state:i,viewingMode:t}=this.view,n=t==="local"&&!ft(e)||_t.force512VTL,r=this.layer.tileInfo.spatialReference.isGeographic,a=n?this.layer.tileInfo:this.layer.tileInfo.getOrCreateCompatible(256,r?1:2),s=this._getTileInfoSupportError(a,this.layer.fullExtent);if(C(s))return this.addResolvingPromise(Promise.reject(s));const o=mt(()=>{var _,p;return(p=(_=this.view)==null?void 0:_.basemapTerrain)==null?void 0:p.tilingSchemeLocked}).then(()=>{var v;const _=d.tilingScheme,p=_.pixelSize;let M;if(this.schemaHelper=new Tt(p,C(d.spatialReference)&&d.spatialReference.isGeographic),p===256){const b=this.layer.tileInfo.spatialReference.isGeographic;M=this.layer.tileInfo.getOrCreateCompatible(256,b?1:2)}else M=(v=this.view.spatialReference)!=null&&v.isGeographic?this.layer.tileInfo.getOrCreateCompatible(512,.5):this.layer.tileInfo;const P=this._getTileInfoCompatibilityError(M,_);if(P)throw P;this.tileInfo=M});this._tileHandlerController=new AbortController;const l=this.view.resourceController;this._memCache=l.memoryController.newCache(this.layer.uid,_=>{_.release()});const u=new ge(this.layer.currentStyleInfo.style),h=d.mapTileRequester;this._tileHandler=new be(this.layer,u,i.contentPixelRatio,this._memCache,h);const f=this._tileHandlerController.signal,c=_=>l.immediate.schedule(_),g=this._tileHandler.start({signal:f,schedule:c}),m=this._tileHandler.spriteMosaic;m.then(_=>{!pt(f)&&this._tileHandler&&(this.painter=new Ue(_,this._tileHandler.glyphMosaic))}),g.then(()=>this._tileHandlerController=null),this.updatingHandles.add(()=>{var _;return{style:this.layer.currentStyleInfo.style,pixelRatio:(_=this.view.state)==null?void 0:_.contentPixelRatio}},({style:_,pixelRatio:p})=>{this._tileHandlerController&&this._tileHandlerController.abort(),this._tileHandlerController=new AbortController,this._memCache.clear();const M=new ge(_),P=new be(this.layer,M,p,this._memCache,h),v=P.start({signal:this._tileHandlerController.signal,schedule:c}),b=P.spriteMosaic;v.then(()=>this._tileHandlerController=null),this.updatingHandles.addPromise(Promise.all([v,b]).then(([,S])=>{const x=this._tileHandler,w=this.painter;this.painter=new Ue(S,P.glyphMosaic),this._tileHandler=P,this.emit("data-changed"),x.destroy(),w&&w.dispose()}))});const y=Promise.all([o,g,m]);this.addResolvingPromise(y)}destroy(){this.painter=Oe(this.painter),this._tileHandlerController=gt(this._tileHandlerController),pe(this._tileHandler),this._memCache=pe(this._memCache),this._tileHandler=null}get dataLevelRange(){const d=this.tileInfo.lods,e=d[0].scale,i=d[d.length-1].scale,t=this.levelRangeFromScaleRange(e,i);return t.minLevel===1&&this.tileInfo.size[0]===256&&(t.minLevel=0),t}async fetchTile(d,e,i,t){return this._tileHandler.getVectorTile(d,e,i,t)}};se([oe()],X.prototype,"layer",void 0),se([oe()],X.prototype,"dataLevelRange",null),se([oe()],X.prototype,"updatingProgressValue",void 0),X=se([yt("esri.views.3d.layers.VectorTileLayerView3D")],X);const gi=X;export{gi as default};
