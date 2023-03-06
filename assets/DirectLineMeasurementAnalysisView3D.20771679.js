import{ah as Me,e as r,y as l,b as ue,d as ge,t as pe,an as y,dH as De,b0 as ye,x as O,H as A,a as f,i as p,gv as J,bF as he,bP as Te,r as x,jl as we,jy as xe,jz as je,cJ as Re,cK as Ge,cS as X,cr as L,cO as Y,jB as Z,cY as ee,cV as _e,c_ as Ne,bo as Ie,c$ as He,d0 as Ue,d1 as Be,d2 as ke,d3 as We,f$ as Fe,d4 as Qe,bu as qe,d7 as Ke,d9 as Je,g0 as Xe,gf as Ye,gg as Ze,bq as et,br as tt,gj as it,dj as st,eF as te,aO as ie,iC as se,eO as Ee,iB as at,dU as ae,l as $,dy as nt,jE as T,ma as U,kg as B,kR as rt,e_ as me,jH as ne,jI as ot,aR as lt,aQ as dt,jN as ct,jJ as ht,jK as ut,jP as gt,ku as be,jw as pt,jV as ze,ke as ve,ag as _t}from"./index.f0b603e5.js";import{t as mt,e as V,M as vt,y as yt,b as wt,v as bt,i as j,u as ft,s as Lt,a as Pt,f as re,d as St}from"./analysisThemeUtils.c548859a.js";import{c as Ot,a as At,n as Et,g as k,b as zt}from"./LineVisualElement.98f2f691.js";import{r as W,g as oe,m as fe,f as D,b as F,y as le,j as Ct,M as de,w as $t,v as ce,I as Le}from"./Segment.b21fb86f.js";import{geodesicLength as Vt}from"./geometryEngine.3391140a.js";import{S as Mt}from"./RightAngleQuadVisualElement.e094d36b.js";const Ce="esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementController",Dt=Me.getLogger(Ce),Tt=1e5;let E=class extends ge{constructor(e){super(e),this._unitNormalizer=new mt,this._handles=new pe,this._tempStartPosition=y(),this._tempEndPosition=y(),this._tempCornerPosition=y()}initialize(){const e=this.view.spatialReference,t=De(e),i=t===xe?je:t;this._sphericalPCPF=i;const s=ye(e,i);this._unitNormalizer.spatialReference=s?i:e,this._handles.add([O(()=>({viewData:this.viewData,startPoint:this.analysis.startPoint}),({viewData:a,startPoint:n})=>{a.elevationAlignedStartPoint=this._applyProjectionAndElevationAlignment(n)},A),O(()=>({viewData:this.viewData,endPoint:this.analysis.endPoint}),({viewData:a,endPoint:n})=>{a.elevationAlignedEndPoint=this._applyProjectionAndElevationAlignment(n)},A),O(()=>({result:this._computedResult,viewData:this.viewData}),({result:a,viewData:n})=>{n.result=a},A)])}destroy(){this._handles=f(this._handles)}_applyProjectionAndElevationAlignment(e){if(p(e))return e;const{spatialReference:t,elevationProvider:i}=this.view,s=Ot(e,t,i);return p(s)?(At(this.analysis,e.spatialReference,Dt),null):s}get _computedResult(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t,measurementMode:i}=this.viewData;if(p(e)||p(t))return null;const s=this._euclideanDistances(e,t),a=this._geodesicDistance(e,t,s.horizontal.value),n=i===V.Geodesic||i===V.Auto&&s.horizontal.value>Tt?"geodesic":"euclidean";return{mode:n,distance:n==="euclidean"?s.direct:a,directDistance:s.direct,horizontalDistance:s.horizontal,verticalDistance:s.vertical,geodesicDistance:a}}_euclideanDistances(e,t){const i=e.clone();i.z=t.z;const s=this._tempStartPosition,a=this._tempEndPosition,n=this._tempCornerPosition,d=this.view.spatialReference,c=this._sphericalPCPF,o=ye(d,c)?c:d;J(e,s,o),J(t,a,o),J(i,n,o);const h=he(s,a),u=he(n,a),_=Math.abs(t.z-e.z),b=G=>this._unitNormalizer.normalizeDistance(G),w=b(h),z=b(u),R=b(_);return{direct:W(w,"meters"),horizontal:W(z,"meters"),vertical:W(R,"meters")}}_geodesicDistance(e,t,i){const s=e.spatialReference,a=new Te({spatialReference:s});a.addPath([e,t]);const n=s.isGeographic&&vt(s)?yt([a],"meters")[0]:s.isWebMercator?Vt(a,"meters"):null,d=x(n)?n:this._fallbackGeodesicDistance(e,t,i);return W(d,"meters")}_fallbackGeodesicDistance(e,t,i){if(we(e,Pe)&&we(t,Se)){const s=new bt;return wt(s,Pe,Se),s.distance}return i}};r([l()],E.prototype,"view",void 0),r([l()],E.prototype,"analysis",void 0),r([l()],E.prototype,"viewData",void 0),r([l()],E.prototype,"_computedResult",null),E=r([ue(Ce)],E);const Pe=y(),Se=y();var v,S;(function(e){e[e.None=0]="None",e[e.Direct=1]="Direct",e[e.Triangle=2]="Triangle",e[e.ProjectedGeodesic=3]="ProjectedGeodesic"})(v||(v={})),function(e){e[e.Auto=0]="Auto",e[e.AboveSegment=1]="AboveSegment",e[e.BelowSegment=2]="BelowSegment"}(S||(S={}));function xt(e){const t=new Re,{vertex:i,fragment:s}=t;Ge(i,e),i.uniforms.add(new X("width",n=>n.width)),t.attributes.add(L.POSITION,"vec3"),t.attributes.add(L.NORMAL,"vec3"),t.attributes.add(L.UV0,"vec2"),t.attributes.add(L.AUXPOS1,"float"),t.varyings.add("vtc","vec2"),t.varyings.add("vlength","float"),t.varyings.add("vradius","float"),i.code.add(Y`void main(void) {
vec3 bitangent = normal;
vtc = uv0;
vlength = auxpos1;
vradius = 0.5 * width;
vec4 pos = view * vec4(position + vradius * bitangent * uv0.y, 1.0);
gl_Position = proj * pos;
}`),s.uniforms.add([new X("outlineSize",n=>n.outlineSize),new Z("outlineColor",n=>n.outlineColor),new X("stripeLength",n=>n.stripeLength),new Z("stripeEvenColor",n=>n.stripeEvenColor),new Z("stripeOddColor",n=>n.stripeOddColor)]);const a=1/Math.sqrt(2);return s.code.add(Y`
    const float INV_SQRT2 = ${Y.float(a)};

    vec4 arrowColor(vec2 tc, float len) {
      float d = INV_SQRT2 * (tc.x - abs(tc.y));
      d = min(d, INV_SQRT2 * (len - tc.x - abs(tc.y)));
      d = min(d, 1.0 - abs(tc.y));

      if (d < 0.0) {
        return vec4(0.0);
      } else if (d < outlineSize) {
        return outlineColor;
      } else {
        return fract(0.5 / stripeLength * tc.x * vradius) >= 0.5 ? stripeOddColor : stripeEvenColor;
      }
    }

    void main(void) {
      vec2 ntc = vec2(vtc.x / vradius, vtc.y);
      vec4 color = arrowColor(ntc, vlength / vradius);
      if (color.a == 0.0) {
        discard;
      }
      gl_FragColor = color;
    }
  `),t}const jt=Object.freeze(Object.defineProperty({__proto__:null,build:xt},Symbol.toStringTag,{value:"Module"}));class q extends Ue{constructor(t,i,s){super(t,i,s)}initializeProgram(t){return new Be(t.rctx,q.shader.get().build(this.configuration),ke)}_setPipelineState(t){const i=t===_e.NONE,s=this.configuration;return We({blending:s.transparent?i?Fe:Qe(t):null,polygonOffset:this.configuration.polygonOffsetEnabled?{factor:0,units:-4}:null,depthTest:{func:qe.LESS},depthWrite:Ke,colorWrite:Je})}initializePipeline(){return this._setPipelineState(this.configuration.transparencyPassType)}get primitiveType(){return Xe.TRIANGLE_STRIP}}q.shader=new Ne(jt,()=>Ie(()=>import("./MeasurementArrow.glsl.7bf59e84.js"),["assets/MeasurementArrow.glsl.7bf59e84.js","assets/index.f0b603e5.js","assets/index.574508c2.css","assets/analysisThemeUtils.c548859a.js","assets/Segment.b21fb86f.js","assets/LineVisualElement.98f2f691.js","assets/elevationInfoUtils.1b829c91.js","assets/geometryEngine.3391140a.js","assets/geometryEngineBase.871c2f6a.js","assets/hydrated.9342ac27.js","assets/RightAngleQuadVisualElement.e094d36b.js","assets/VisualElementResources.082d8281.js"]));class Q extends He{constructor(){super(...arguments),this.polygonOffsetEnabled=!1,this.transparent=!1,this.transparencyPassType=_e.NONE}}r([ee()],Q.prototype,"polygonOffsetEnabled",void 0),r([ee()],Q.prototype,"transparent",void 0),r([ee({count:_e.COUNT})],Q.prototype,"transparencyPassType",void 0);class Rt extends Ze{constructor(t){super(t,new Nt),this._configuration=new Q}getConfiguration(t,i){return this._configuration.polygonOffsetEnabled=this.parameters.polygonOffset,this._configuration.transparent=this.parameters.stripeEvenColor[3]<1||this.parameters.stripeOddColor[3]<1||this.parameters.outlineColor[3]<1,this._configuration.transparencyPassType=i.transparencyPassType,this._configuration}dispose(){}intersect(){}requiresSlot(t,i){return i===et.Color&&t===tt.OPAQUE_MATERIAL}createGLMaterial(t){return new Gt(t)}createBufferWriter(){return new Ft}}class Gt extends it{beginSlot(t){return this.ensureTechnique(q,t)}}class Nt extends st{constructor(){super(...arguments),this.width=32,this.outlineSize=.2,this.outlineColor=te(1,.5,0,1),this.stripeEvenColor=te(1,1,1,1),this.stripeOddColor=te(1,.5,0,1),this.stripeLength=1,this.polygonOffset=!1}}const It=Ye().vec3f(L.POSITION).vec3f(L.NORMAL).vec2f(L.UV0).f32(L.AUXPOS1),Ht=y(),Ut=y(),Bt=y(),kt=y(),Wt=y();class Ft{constructor(){this.vertexBufferLayout=It}allocate(t){return this.vertexBufferLayout.createBuffer(t)}elementCount(t){return 2*(t.indices.get(L.POSITION).length/2+1)}write(t,i,s,a,n){const d=s.vertexAttributes.get(L.POSITION).data,c=s.vertexAttributes.get(L.NORMAL).data,o=d.length/3,h=s&&s.indices&&s.indices.get(L.POSITION);h&&h.length!==2*(o-1)&&console.warn("MeasurementArrowMaterial does not support indices");const u=Ht,_=Ut,b=Bt,w=kt,z=Wt,R=a.position,G=a.normal,N=a.uv0;let I=0;for(let P=0;P<o;++P){const K=3*P;if(ie(u,d[K],d[K+1],d[K+2]),P<o-1){const C=3*(P+1);ie(_,d[C],d[C+1],d[C+2]),ie(z,c[C],c[C+1],c[C+2]),se(z,z),Ee(b,_,u),se(b,b),at(w,z,b),se(w,w)}const Ve=he(u,_);t&&i&&(ae(u,u,t),ae(_,_,t),ae(w,w,i));const M=n+2*P,H=M+1;R.setVec(M,u),R.setVec(H,u),G.setVec(M,w),G.setVec(H,w),N.set(M,0,I),N.set(M,1,-1),N.set(H,0,I),N.set(H,1,1),P<o-1&&(I+=Ve)}const $e=a.auxpos1;for(let P=0;P<2*o;++P)$e.set(n+P,I)}}class Qt extends Et{constructor(t){super(t),this._parameters={arrowWidth:16,arrowOutlineColor:$.toUnitRGBA(j()),arrowStripeEvenColor:$.toUnitRGBA(ft()),arrowStripeOddColor:$.toUnitRGBA(j()),arrowSubdivisions:128},this._origin=y(),this._originTransform=nt(),this._arrowCenter=y(),this._renderOccluded=T.OccludeAndTransparent,this._geometry=null,this._stripeLength=1,this._stripesEnabled=!0,this._opacity=1,this.applyProps(t)}get renderOccluded(){return this._renderOccluded}set renderOccluded(t){t!==this._renderOccluded&&(this._renderOccluded=t,this._arrowMaterial&&this._arrowMaterial.setParameters({renderOccluded:t}))}get geometry(){return this._geometry}set geometry(t){this._geometry=t,this._geometryChanged()}get stripeLength(){return this._stripeLength}set stripeLength(t){this._stripeLength=t,this.attached&&this._arrowMaterial.setParameters({stripeLength:this._stripeLength})}get stripesEnabled(){return this._stripesEnabled}set stripesEnabled(t){if(this._stripesEnabled=t,this.attached){const i=this.opacity,{arrowStripeEvenColor:s,arrowStripeOddColor:a}=this._parameters,n=U(Oe,this._stripesEnabled?s:a,i);this._arrowMaterial.setParameters({stripeEvenColor:n})}}get opacity(){return this._opacity}set opacity(t){t!==this._opacity&&(this._opacity=t,this._updateArrowOpacity())}createExternalResources(){const{arrowStripeEvenColor:t,arrowStripeOddColor:i,arrowOutlineColor:s}=this._parameters,a=this._stripesEnabled?t:i;this._arrowMaterial=new Rt({outlineColor:s,stripeEvenColor:a,stripeOddColor:i,renderOccluded:this.renderOccluded,polygonOffset:!0}),this._handles=new pe,this._handles.add(O(()=>this.view.state.camera,()=>{this._viewChanged()}))}destroyExternalResources(){this._arrowMaterial=null,this._handles=f(this._handles)}forEachExternalMaterial(t){t(this._arrowMaterial)}createGeometries(t){if(p(this._geometry)||p(this._geometry.startRenderSpace)||p(this._geometry.endRenderSpace))return;const i=this._createArrowGeometry(this._geometry.startRenderSpace,this._geometry.endRenderSpace,this._origin,this._geometry);i.transformation=this._originTransform,t.addGeometry(i),this._viewChanged()}_createArrowGeometry(t,i,s,a){const n=this.view.renderCoordsHelper,d=[],c=[],o=(h,u)=>{const _=B.get();Ee(_,h,s),d.push(_),c.push(u)};if(a.type==="euclidean"){a.eval(.5,this._arrowCenter);const h=B.get();n.worldUpAtPosition(this._arrowCenter,h),o(t,h),o(i,h)}else{a.eval(.5,this._arrowCenter);const h=this._parameters.arrowSubdivisions+1&-2;for(let u=0;u<h;++u){const _=u/(h-1),b=B.get(),w=B.get();a.eval(_,b),n.worldUpAtPosition(b,w),o(b,w)}}return rt(this._arrowMaterial,d,c)}_geometryChanged(){this.recreateGeometry()}_viewChanged(){if(this.view.ready&&this.attached&&x(this._geometry)){const t=this.view.state.camera.computeScreenPixelSizeAt(this._arrowCenter);this._arrowMaterial.setParameters({width:this._parameters.arrowWidth*t})}}_updateArrowOpacity(){const t=this.opacity,{arrowStripeEvenColor:i,arrowStripeOddColor:s,arrowOutlineColor:a}=this._parameters,n=U(Oe,this._stripesEnabled?i:s,t),d=U(qt,a,t),c=U(Kt,s,t);this._arrowMaterial.setParameters({stripeEvenColor:n,outlineColor:d,stripeOddColor:c})}}const Oe=me(),qt=me(),Kt=me();let m=class extends ge{get visible(){return this.analysisView.visible}get viewMode(){const{elevationAlignedStartPoint:e,elevationAlignedEndPoint:t}=this.analysisView;if(p(e)||p(t)||e.equals(t))return v.None;const i=this.analysisView.result;if(p(i))return v.Direct;if(i.mode==="geodesic")return this._requiresGeodesicGuideAt(this._startPosition)||this._requiresGeodesicGuideAt(this._endPosition)?v.ProjectedGeodesic:v.Direct;const{verticalDistance:s,horizontalDistance:a}=i,n=s.value,d=a.value;return Math.min(n/d,d/n)<this.triangleCollapseRatioThreshold?v.Direct:v.Triangle}get actualVisualizedMeasurement(){if(p(this.analysisView.result))switch(this.analysisView.measurementMode){case V.Auto:case V.Euclidean:default:return"euclidean";case V.Geodesic:return"geodesic"}return this.analysisView.result.mode}get allowVisualElementsOrientationChange(){return p(this._triangleOrientationOverride)}set allowVisualElementsOrientationChange(e){p(this._triangleOrientationOverride)!==e&&(p(this._triangleOrientationOverride)?this._triangleOrientationOverride=this._actualVisualElementsOrientation:this._triangleOrientationOverride=null)}get labels(){const e=this.actualVisualizedMeasurement==="geodesic";return{direct:this._segmentLabel,horizontal:e?this._segmentLabel:this._horizontalLabel,vertical:this._verticalLabel}}constructor(e){super(e),this._params={triangleColor:$.toUnitRGBA(j(.75)),triangleLineWidth:3,geodesicProjectionLineWidth:2,geodesicProjectionLineColor:$.toUnitRGBA(j(.75)),guideLineWidth:2,guideStippleLengthPixels:6,direcLabelFontSize:16,horizontalLabelFontSize:12,verticalLabelFontSize:12},this._handles=new pe,this._segmentVisualElement=null,this._triangleVisualElement=null,this._rightAngleQuad=null,this._projectedGeodesicLine=null,this._geodesicStartHint=null,this._geodesicEndHint=null,this._segmentLabel=null,this._verticalLabel=null,this._horizontalLabel=null,this._startPosition=y(),this._endPosition=y(),this._cornerPosition=y(),this._startPositionAtSeaLevel=y(),this._endPositionAtSeaLevel=y(),this._triangleOrientationOverride=null,this.messages=null,this.loadingMessages=!0,this.visualElementOrientation=S.Auto,this.triangleCollapseRatioThreshold=.03}initialize(){const e=this._params,t={attached:!0,view:this.view};this._segmentVisualElement=new Qt({...t,geometry:null,renderOccluded:T.OccludeAndTransparent}),this._triangleVisualElement=new k({...t,width:e.triangleLineWidth,color:e.triangleColor,renderOccluded:T.OccludeAndTransparent}),this._rightAngleQuad=new Mt({...t,color:$.toUnitRGBA(j(.75)),renderOccluded:T.OccludeAndTransparent});const i={...t,polygonOffset:!0,renderOccluded:T.OccludeAndTransparent};this._projectedGeodesicLine=new k({...i,width:e.geodesicProjectionLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ne(e.guideStippleLengthPixels)}),this._geodesicStartHint=new k({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ne(e.guideStippleLengthPixels)}),this._geodesicEndHint=new k({...i,width:e.guideLineWidth,color:e.geodesicProjectionLineColor,stipplePattern:ne(e.guideStippleLengthPixels)});const s={...t,backgroundColor:Lt(.6),textColor:Pt()};this._segmentLabel=new oe({...s,fontSize:e.direcLabelFontSize}),this._verticalLabel=new oe({...s,fontSize:e.verticalLabelFontSize}),this._horizontalLabel=new oe({...s,fontSize:e.horizontalLabelFontSize}),this._handles.add([O(()=>{const{elevationAlignedStartPoint:a,elevationAlignedEndPoint:n}=this.analysisView,d=this.view;return{view:d,camera:d.state.camera,viewMode:this.viewMode,elevationAlignedStartPoint:a,elevationAlignedEndPoint:n,orientation:this._actualVisualElementsOrientation,visualizedMeasurement:this.actualVisualizedMeasurement,stripeLength:this._measurementArrowStripeLength}},a=>this._updateGeometryAndViewMode(a),A),O(()=>({visible:this.visible,viewMode:this.viewMode}),a=>this._updateVisualElementVisibility(a),A),O(()=>({text:this._labelsText,visualizedMeasurement:this.actualVisualizedMeasurement}),a=>this._updateLabelText(a),A),O(()=>({visible:this.visible,viewMode:this.viewMode}),a=>this._updateLabelVisibility(a),A),O(()=>this._measurementArrowStripeLength,a=>this._updateSegmentStripeLength(a),A),ot(async()=>this._updateMessageBundle())]),this._updateMessageBundle()}destroy(){this._handles=f(this._handles),this._segmentVisualElement=f(this._segmentVisualElement),this._triangleVisualElement=f(this._triangleVisualElement),this._rightAngleQuad=f(this._rightAngleQuad),this._projectedGeodesicLine=f(this._projectedGeodesicLine),this._geodesicStartHint=f(this._geodesicStartHint),this._geodesicEndHint=f(this._geodesicEndHint),this._segmentLabel=f(this._segmentLabel),this._verticalLabel=f(this._verticalLabel),this._horizontalLabel=f(this._horizontalLabel),this.set("view",null)}_updateVisualElementVisibility({visible:e,viewMode:t}){if(this._segmentVisualElement.visible=!1,this._triangleVisualElement.visible=!1,this._rightAngleQuad.visible=!1,this._projectedGeodesicLine.visible=!1,this._geodesicStartHint.visible=!1,this._geodesicEndHint.visible=!1,e)switch(t){case v.None:break;case v.Direct:this._segmentVisualElement.visible=!0;break;case v.Triangle:this._segmentVisualElement.visible=!0,this._triangleVisualElement.visible=!0,this._rightAngleQuad.visible=!0;break;case v.ProjectedGeodesic:this._segmentVisualElement.visible=!0,this._projectedGeodesicLine.visible=!0,this._geodesicStartHint.visible=!0,this._geodesicEndHint.visible=!0}}_updateGeometryAndViewMode({view:e,camera:t,viewMode:i,elevationAlignedStartPoint:s,elevationAlignedEndPoint:a,orientation:n,visualizedMeasurement:d,stripeLength:c}){const o=e.renderCoordsHelper;if(p(o)||p(s)||p(a)||s.equals(a))return;let h=this._startPosition,u=this._endPosition;o.toRenderCoords(s,h),o.toRenderCoords(a,u);const _=n===S.AboveSegment?1:-1,b=_*(o.getAltitude(u)-o.getAltitude(h));b<0&&(h=this._endPosition,u=this._startPosition);const w=d==="geodesic"?new fe(this._startPosition,this._endPosition,o.spatialReference):new D(this._startPosition,this._endPosition);switch(this._segmentVisualElement.geometry=w,this._updateSegmentStripeLength(c),i){case v.Direct:this._updateSegment(w,n);break;case v.Triangle:this._updateSegmentAndTriangle({view:e,camera:t,segment:w,orientation:n,startPosition:h,endPosition:u,deltaSign:_,altitudeDelta:b});break;case v.ProjectedGeodesic:this._updateSegmentAndProjection({view:e,orientation:n,startPosition:h,endPosition:u})}}_updateSegment(e,t){this._segmentLabel.anchor=t===S.AboveSegment?"top":"bottom",this._segmentLabel.geometry={type:"segment",segment:e,sampleLocation:"center"}}_updateSegmentAndTriangle({view:{renderCoordsHelper:e},camera:t,segment:i,orientation:s,startPosition:a,endPosition:n,deltaSign:d,altitudeDelta:c}){const o=this._cornerPosition;e.worldUpAtPosition(a,o),lt(o,o,d*Math.abs(c)),dt(o,o,a),this._triangleVisualElement.geometry=[[[a[0],a[1],a[2]],[o[0],o[1],o[2]],[n[0],n[1],n[2]]]],this._rightAngleQuad.geometry={previous:a,center:o,next:n};const h=new D(a,o),u=new D(o,n),_=Jt(a,n,o,s,t);this._segmentLabel.anchor=_.segment,this._segmentLabel.geometry={type:"segment",segment:i,sampleLocation:"center"},this._verticalLabel.geometry={type:"segment",segment:h,sampleLocation:"center"},this._verticalLabel.anchor=_.vertical,this._horizontalLabel.geometry={type:"segment",segment:u,sampleLocation:"center"},this._horizontalLabel.anchor=_.horizontal}_updateSegmentAndProjection({view:{renderCoordsHelper:e},orientation:t,startPosition:i,endPosition:s}){e.setAltitude(this._startPositionAtSeaLevel,0,i),e.setAltitude(this._endPositionAtSeaLevel,0,s);const a=new fe(this._startPositionAtSeaLevel,this._endPositionAtSeaLevel,e.spatialReference);this._projectedGeodesicLine.setGeometryFromSegment(a),this._geodesicStartHint.setGeometryFromSegment(new D(this._startPositionAtSeaLevel,i)),this._geodesicEndHint.setGeometryFromSegment(new D(this._endPositionAtSeaLevel,s)),this._segmentLabel.geometry={type:"segment",segment:a,sampleLocation:"center"},this._segmentLabel.anchor=t===S.AboveSegment?"top":"bottom"}_updateLabelText({text:e,visualizedMeasurement:t}){x(e)?(this._segmentLabel.text=t==="euclidean"?e.euclideanDistance:e.geodesicDistance,this._horizontalLabel.text=e.horizontalDistance,this._verticalLabel.text=e.verticalDistance):(this._segmentLabel.text=null,this._horizontalLabel.text=null,this._verticalLabel.text=null),this.notifyChange("labels")}_updateLabelVisibility({visible:e,viewMode:t}){const i=this._segmentLabel,s=this._horizontalLabel,a=this._verticalLabel;if(i.visible=!1,s.visible=!1,a.visible=!1,e)switch(t){case v.Direct:i.visible=!0;break;case v.Triangle:i.visible=!0,s.visible=!0,a.visible=!0;break;case v.ProjectedGeodesic:i.visible=!0;case v.None:}}get _labelsText(){if(this.destroyed)return null;const e=this.messages,t=this.analysisView.result;if(p(t)||p(e))return null;const{directDistance:i,horizontalDistance:s,verticalDistance:a,geodesicDistance:n}=t,d=this.analysisView.unit,c=o=>({euclideanDistance:"",geodesicDistance:"",horizontalDistance:"",verticalDistance:"",...o});switch(d){case"metric":return c({euclideanDistance:i&&de(e,i),geodesicDistance:n&&de(e,n),horizontalDistance:s&&de(e,s),verticalDistance:a&&$t(e,a)});case"imperial":return c({euclideanDistance:i&&le(e,i),geodesicDistance:n&&le(e,n),horizontalDistance:s&&le(e,s),verticalDistance:a&&Ct(e,a)});default:return c({euclideanDistance:i&&F(e,i,d),geodesicDistance:n&&F(e,n,d),horizontalDistance:s&&F(e,s,d),verticalDistance:a&&F(e,a,d)})}}_updateSegmentStripeLength(e){const t=this._segmentVisualElement;x(e)?(t.stripeLength=e,t.stripesEnabled=!0):t.stripesEnabled=!1}get _actualVisualElementsOrientation(){if(x(this._triangleOrientationOverride))return this._triangleOrientationOverride;const e=this.visualElementOrientation;return e===S.Auto?this.view.state.camera.aboveGround?S.AboveSegment:S.BelowSegment:e}_requiresGeodesicGuideAt(e){const t=this.view;if(!(t!=null&&t.state))return!1;const i=t.state.camera,s=t.renderCoordsHelper,a=i.computeScreenPixelSizeAt(e);return s.getAltitude(e)/a>=10}get _measurementArrowStripeLength(){const{result:e,unit:t}=this.analysisView;if(p(e))return null;let i=null;const s=e.directDistance;switch(t){case"metric":i=s&&ce(s,"meters");break;case"imperial":i=s&&ce(s,ct(s.value,s.unit));break;default:i=s&&ce(s,t)}return p(i)?null:ht(i.value/30)*ut(1,i.unit,"meters")}_updateMessageBundle(){this.loadingMessages=!0,gt("esri/core/t9n/Units").then(e=>{this.messages=e}).finally(()=>{this.loadingMessages=!1})}get testData(){var e;return{labels:this.labels,stripeLength:(e=this._segmentVisualElement)==null?void 0:e.stripeLength}}};function Jt(e,t,i,s,a){const n=Xt,d=Yt;a.projectToRenderScreen(i,n),a.projectToRenderScreen(t,d);const c={segment:"bottom",horizontal:"top",vertical:n[0]<d[0]?"left":"right"};{const o=Zt,h=ei;if(re(e,i,o,a),re(e,t,h,a),be(o,h)>=Ae){const u=Math.sign(o[1])===Math.sign(h[1]);c.segment=u?Le(c.vertical):c.vertical}else{const u=ti;re(i,t,u,a),be(u,h)>=Ae&&(c.segment=Math.sign(u[0])===Math.sign(h[0])?Le(c.horizontal):c.horizontal)}}if(s===S.BelowSegment){const o=h=>h==="top"?"bottom":"top";c.segment=o(c.segment),c.horizontal=o(c.horizontal),c.vertical=o(c.vertical)}return c}r([l()],m.prototype,"_triangleOrientationOverride",void 0),r([l()],m.prototype,"messages",void 0),r([l()],m.prototype,"view",void 0),r([l()],m.prototype,"analysis",void 0),r([l()],m.prototype,"analysisView",void 0),r([l()],m.prototype,"loadingMessages",void 0),r([l()],m.prototype,"visible",null),r([l()],m.prototype,"viewMode",null),r([l()],m.prototype,"actualVisualizedMeasurement",null),r([l()],m.prototype,"visualElementOrientation",void 0),r([l()],m.prototype,"triangleCollapseRatioThreshold",void 0),r([l()],m.prototype,"allowVisualElementsOrientationChange",null),r([l()],m.prototype,"labels",null),r([l()],m.prototype,"_labelsText",null),r([l()],m.prototype,"_actualVisualElementsOrientation",null),r([l()],m.prototype,"_measurementArrowStripeLength",null),m=r([ue("esri.views.3d.analysis.DirectLineMeasurement.DirectLineMeasurementVisualization")],m);const Ae=Math.cos(pt(12)),Xt=ze(),Yt=ze(),Zt=ve(),ei=ve(),ti=ve();let g=class extends zt(ge){constructor(e){super(e),this.type="direct-line-measurement-view-3d",this.analysis=null,this.result=null,this.measurementMode=V.Auto,this.elevationAlignedStartPoint=null,this.elevationAlignedEndPoint=null}initialize(){const e=this.view,t=this.analysis;this._analysisVisualization=new m({view:e,analysis:t,analysisView:this}),this._analysisController=new E({view:e,analysis:t,viewData:this})}destroy(){this._analysisController=f(this._analysisController),this._analysisVisualization=f(this._analysisVisualization)}get updating(){var e;return!!((e=this._analysisVisualization)!=null&&e.loadingMessages)}get viewMode(){return this._analysisVisualization.viewMode}get actualVisualizedMeasurement(){return this._analysisVisualization.actualVisualizedMeasurement}get visualElementOrientation(){return this._analysisVisualization.visualElementOrientation}set visualElementOrientation(e){this._analysisVisualization.visualElementOrientation=e}get allowVisualElementsOrientationChange(){return this._analysisVisualization.allowVisualElementsOrientationChange}set allowVisualElementsOrientationChange(e){this._analysisVisualization.allowVisualElementsOrientationChange=e}get triangleCollapseRatioThreshold(){return this._analysisVisualization.triangleCollapseRatioThreshold}set triangleCollapseRatioThreshold(e){this._analysisVisualization.triangleCollapseRatioThreshold=e}get directLabelText(){var e,t;return(t=(e=this._analysisVisualization.labels.direct)==null?void 0:e.text)!=null?t:""}get horizontalLabelText(){var e,t;return(t=(e=this._analysisVisualization.labels.horizontal)==null?void 0:e.text)!=null?t:""}get verticalLabelText(){var e,t;return(t=(e=this._analysisVisualization.labels.vertical)==null?void 0:e.text)!=null?t:""}get unit(){return _t(this.analysis.unit,this._defaultUnit)}get testData(){var e;return this.destroyed?{labels:null,stripeLength:null,visualization:null,controller:null}:{...(e=this._analysisVisualization)==null?void 0:e.testData,visualization:this._analysisVisualization,controller:this._analysisController}}};r([l()],g.prototype,"updating",null),r([l({readOnly:!0})],g.prototype,"type",void 0),r([l({constructOnly:!0,nonNullable:!0})],g.prototype,"analysis",void 0),r([l()],g.prototype,"result",void 0),r([l()],g.prototype,"measurementMode",void 0),r([l()],g.prototype,"elevationAlignedStartPoint",void 0),r([l()],g.prototype,"elevationAlignedEndPoint",void 0),r([l({readOnly:!0})],g.prototype,"viewMode",null),r([l({readOnly:!0})],g.prototype,"actualVisualizedMeasurement",null),r([l()],g.prototype,"visualElementOrientation",null),r([l()],g.prototype,"allowVisualElementsOrientationChange",null),r([l()],g.prototype,"triangleCollapseRatioThreshold",null),r([l({readOnly:!0})],g.prototype,"directLabelText",null),r([l({readOnly:!0})],g.prototype,"horizontalLabelText",null),r([l({readOnly:!0})],g.prototype,"verticalLabelText",null),r([l()],g.prototype,"_analysisVisualization",void 0),r([l()],g.prototype,"_analysisController",void 0),r([l()],g.prototype,"unit",null),r([l(St)],g.prototype,"_defaultUnit",void 0),g=r([ue("esri.views.3d.analysis.DirectLineMeasurementAnalysisView3D")],g);const ii=g;var di=Object.freeze({__proto__:null,[Symbol.toStringTag]:"Module",default:ii});export{di as D,xt as n};
