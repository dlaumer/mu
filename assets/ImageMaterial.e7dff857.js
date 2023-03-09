import{j2 as f,j3 as m,j4 as P,et as g,j5 as y,r as _,j6 as $,j7 as u,j8 as O,j9 as A,ja as S,jb as x,c5 as o,jc as v,jd as C,je as p,jf as E,jg as T,e as n,jh as l,ji as d,jj as w,_ as F,jk as b,jl as D,jm as N,jn as M,jo as R,jp as I,jq as L,jr as U,js as B,jt as W,ju as z,jv as G,jw as H,jx as q,jy as Q,jz as V,jA as k,c6 as c,jB as J,jC as K,jD as X,jE as Y}from"./index.c2b4fb6e.js";function Z(a){const e=new f,{vertex:t,fragment:s}=e;return m(t,a),e.include(P,a),e.attributes.add(g.POSITION,"vec3"),e.attributes.add(g.UV0,"vec2"),e.varyings.add("vpos","vec3"),a.hasMultipassTerrain&&e.varyings.add("depth","float"),t.uniforms.add(new y("textureCoordinateScaleFactor",r=>_(r.texture)&&_(r.texture.descriptor.textureCoordinateScaleFactor)?r.texture.descriptor.textureCoordinateScaleFactor:$)),t.code.add(u`
    void main(void) {
      vpos = position;
      ${a.hasMultipassTerrain?"depth = (view * vec4(vpos, 1.0)).z;":""}
      vTexCoord = uv0 * textureCoordinateScaleFactor;
      gl_Position = transformPosition(proj, view, vpos);
    }
  `),e.include(O,a),e.include(A,a),s.uniforms.add([new S("tex",r=>r.texture),new x("opacity",r=>r.opacity)]),e.varyings.add("vTexCoord","vec2"),a.output===o.Alpha?s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}

      float alpha = texture2D(tex, vTexCoord).a * opacity;
      if (alpha  < ${u.float(v)}) {
        discard;
      }

      gl_FragColor = vec4(alpha);
    }
    `):(s.include(C),s.code.add(u`
    void main() {
      discardBySlice(vpos);
      ${a.hasMultipassTerrain?"terrainDepthTest(gl_FragCoord, depth);":""}
      gl_FragColor = texture2D(tex, vTexCoord) * opacity;

      if (gl_FragColor.a < ${u.float(v)}) {
        discard;
      }

      gl_FragColor = highlightSlice(gl_FragColor, vpos);
      ${a.transparencyPassType===p.Color?"gl_FragColor = premultiplyAlpha(gl_FragColor);":""}
    }
    `)),e}const ee=Object.freeze(Object.defineProperty({__proto__:null,build:Z},Symbol.toStringTag,{value:"Module"}));class h extends D{initializeProgram(e){return new N(e.rctx,h.shader.get().build(this.configuration),M)}_setPipelineState(e,t){const s=this.configuration,r=e===p.NONE,j=e===p.FrontFace;return R({blending:s.output!==o.Color&&s.output!==o.Alpha||!s.transparent?null:r?te:I(e),culling:L(s.cullFace),depthTest:{func:U(e)},depthWrite:r?s.writeDepth?B:null:W(e),colorWrite:z,stencilWrite:s.hasOccludees?G:null,stencilTest:s.hasOccludees?t?H:q:null,polygonOffset:r||j?null:Q(s.enableOffset)})}initializePipeline(){return this._occludeePipelineState=this._setPipelineState(this.configuration.transparencyPassType,!0),this._setPipelineState(this.configuration.transparencyPassType,!1)}getPipelineState(e,t){return t?this._occludeePipelineState:super.getPipelineState(e,t)}}h.shader=new w(ee,()=>F(()=>import("./ImageMaterial.glsl.014e803b.js"),["assets/ImageMaterial.glsl.014e803b.js","assets/index.c2b4fb6e.js","assets/index.3f2fc127.css"]));const te=E(T.ONE,T.ONE_MINUS_SRC_ALPHA);class i extends b{constructor(){super(...arguments),this.output=o.Color,this.cullFace=d.None,this.hasSlicePlane=!1,this.transparent=!1,this.enableOffset=!0,this.writeDepth=!0,this.hasOccludees=!1,this.transparencyPassType=p.NONE,this.hasMultipassTerrain=!1,this.cullAboveGround=!1}}n([l({count:o.COUNT})],i.prototype,"output",void 0),n([l({count:d.COUNT})],i.prototype,"cullFace",void 0),n([l()],i.prototype,"hasSlicePlane",void 0),n([l()],i.prototype,"transparent",void 0),n([l()],i.prototype,"enableOffset",void 0),n([l()],i.prototype,"writeDepth",void 0),n([l()],i.prototype,"hasOccludees",void 0),n([l({count:p.COUNT})],i.prototype,"transparencyPassType",void 0),n([l()],i.prototype,"hasMultipassTerrain",void 0),n([l()],i.prototype,"cullAboveGround",void 0);class ie extends V{constructor(e){super(e,new se),this.supportsEdges=!0,this._configuration=new i}getConfiguration(e,t){return this._configuration.output=e,this._configuration.cullFace=this.parameters.cullFace,this._configuration.hasSlicePlane=this.parameters.hasSlicePlane,this._configuration.transparent=this.parameters.transparent,this._configuration.writeDepth=this.parameters.writeDepth,this._configuration.hasOccludees=this.parameters.hasOccludees,this._configuration.transparencyPassType=t.transparencyPassType,this._configuration.enableOffset=t.camera.relativeElevation<k,this._configuration.hasMultipassTerrain=t.multipassTerrain.enabled,this._configuration.cullAboveGround=t.multipassTerrain.cullAboveGround,this._configuration}requiresSlot(e,t){return t===o.Color||t===o.Alpha||t===o.Highlight?e===c.DRAPED_MATERIAL?!0:t===o.Highlight?e===c.OPAQUE_MATERIAL:e===(this.parameters.transparent?this.parameters.writeDepth?c.TRANSPARENT_MATERIAL:c.TRANSPARENT_DEPTH_WRITE_DISABLED_MATERIAL:c.OPAQUE_MATERIAL):!1}createGLMaterial(e){return new ae(e)}createBufferWriter(){return new J(K)}}class ae extends X{constructor(e){super({...e,...e.material.parameters})}_updateParameters(e){return this.updateTexture(this._material.parameters.textureId),this._material.setParameters(this.textureBindParameters),this.ensureTechnique(h,e)}_updateOccludeeState(e){e.hasOccludees!==this._material.parameters.hasOccludees&&(this._material.setParameters({hasOccludees:e.hasOccludees}),this._updateParameters(e))}beginSlot(e){return this._output!==o.Color&&this._output!==o.Alpha||this._updateOccludeeState(e),this._updateParameters(e)}}class se extends Y{constructor(){super(...arguments),this.transparent=!1,this.writeDepth=!0,this.hasSlicePlane=!1,this.cullFace=d.None,this.hasOccludees=!1,this.opacity=1,this.textureId=null,this.initTextureTransparent=!0}}export{ie as c,Z as f};
