import{T as se,Z as ce,N as ue,a as fe,f as pe,B as we,L as R,e as _,o as de,s as $,D as S,F as E,C as v,m as he,R as w,v as m,b as I,A as y,J as B,V as j,z as M,G as me,Y as C,l as d,j as O,q as z,r as L,n as ge,t as D,c as ye,d as ve,g as ee,h as be,i as G,k as J,p as Se}from"./arcadeUtils.7ca66f32.js";import{t as l,e as s,u as xe}from"./executionError.c4c51b90.js";import{registerFunctions as Re}from"./geomasync.e304f77c.js";import{f as ne,fv as H}from"./index.7ded6657.js";import"./arcadeTimeUtils.f178e8a3.js";import"./number.76e3c0f4.js";import"./hash.079e8d2d.js";import"./geometryEngineAsync.e1e7bf92.js";import"./portalUtils.d6a55cb9.js";function Q(n){return n&&typeof n.then=="function"}const P=100;async function Y(n,e){const t=[];for(let r=0;r<e.arguments.length;r++)t.push(await u(n,e.arguments[r]));return t}async function x(n,e,t){return e.preparsed===!0?t(n,null,e.arguments):t(n,e,await Y(n,e))}class Ie extends be{constructor(e,t){super(),this.definition=null,this.context=null,this.definition=e,this.context=t}createFunction(e){return(...t)=>{const r={spatialReference:this.context.spatialReference,console:this.context.console,lrucache:this.context.lrucache,timeReference:this.context.timeReference?this.context.timeReference:null,exports:this.context.exports,libraryResolver:this.context.libraryResolver,interceptor:this.context.interceptor,localScope:{},depthCounter:{depth:e.depthCounter+1},globalScope:this.context.globalScope};if(r.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,null);return q(this.definition,r,t,null)}}call(e,t){return N(e,t,(r,o,a)=>{var c;const i={spatialReference:e.spatialReference,services:e.services,console:e.console,libraryResolver:e.libraryResolver,exports:e.exports,lrucache:e.lrucache,timeReference:(c=e.timeReference)!=null?c:null,interceptor:e.interceptor,localScope:{},abortSignal:e.abortSignal,globalScope:e.globalScope,depthCounter:{depth:e.depthCounter.depth+1}};if(i.depthCounter.depth>64)throw new l(e,s.MaximumCallDepth,t);return q(this.definition,i,a,t)})}marshalledCall(e,t,r,o){return o(e,t,async(a,i,c)=>{var p;const f={spatialReference:e.spatialReference,globalScope:r.globalScope,depthCounter:{depth:e.depthCounter.depth+1},libraryResolver:e.libraryResolver,exports:e.exports,console:e.console,abortSignal:e.abortSignal,lrucache:e.lrucache,timeReference:(p=e.timeReference)!=null?p:null,interceptor:e.interceptor,localScope:{}};return c=c.map(h=>!v(h)||h instanceof G?h:J(h,e,o)),J(await q(this.definition,f,c,t),r,o)})}}class F extends Se{constructor(e){super(e)}async global(e){const t=this.executingContext.globalScope[e.toLowerCase()];if(t.valueset||(t.value=await u(this.executingContext,t.node),t.valueset=!0),v(t.value)&&!(t.value instanceof G)){const r=new G;r.fn=t.value,r.parameterEvaluator=N,r.context=this.executingContext,t.value=r}return t.value}setGlobal(e,t){if(v(t))throw new l(null,s.AssignModuleFunction,null);this.executingContext.globalScope[e.toLowerCase()]={value:t,valueset:!0,node:null}}hasGlobal(e){return this.executingContext.exports[e]===void 0&&(e=e.toLowerCase()),this.executingContext.exports[e]!==void 0}async loadModule(e){var r;let t=e.spatialReference;t==null&&(t=new ne({wkid:102100})),this.moduleScope=ie({},e.customfunctions,e.timeReference),this.executingContext={spatialReference:t,services:e.services,libraryResolver:new $(e.libraryResolver._moduleSingletons,this.source.syntax.loadedModules),exports:{},abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:this.moduleScope,console:e.console?e.console:le,lrucache:e.lrucache,timeReference:(r=e.timeReference)!=null?r:null,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}},await u(this.executingContext,this.source.syntax)}}async function N(n,e,t){if(e.preparsed===!0){const o=t(n,null,e.arguments);return Q(o),o}const r=t(n,e,await Y(n,e));return Q(r),r}async function u(n,e,t){if(e.breakpoint&&t!==!0)return await e.breakpoint(),u(n,e,!0);try{switch(e==null?void 0:e.type){case"VariableDeclarator":return await Ue(n,e);case"ImportDeclaration":return await Ge(n,e);case"ExportNamedDeclaration":return await Te(n,e);case"VariableDeclaration":return await re(n,e,0);case"BlockStatement":case"Program":return await Ke(n,e);case"FunctionDeclaration":return await De(n,e);case"ReturnStatement":return await qe(n,e);case"IfStatement":return await Pe(n,e);case"ExpressionStatement":return await je(n,e);case"UpdateExpression":return await Ee(n,e);case"AssignmentExpression":return await Be(n,e);case"ForStatement":return await Le(n,e);case"WhileStatement":return await Ae(n,e);case"ForInStatement":return await ke(n,e);case"BreakStatement":return S;case"EmptyStatement":return w;case"ContinueStatement":return E;case"TemplateElement":return await Je(n,e);case"TemplateLiteral":return await Qe(n,e);case"Identifier":return await Z(n,e);case"MemberExpression":return await Ve(n,e);case"Literal":return e.value;case"CallExpression":return await ze(n,e);case"UnaryExpression":return await We(n,e);case"BinaryExpression":return await Ye(n,e);case"LogicalExpression":return await Ze(n,e);case"ArrayExpression":return await _e(n,e);case"ObjectExpression":return await Fe(n,e);case"Property":return await Ce(n,e);default:throw new l(n,s.Unrecognised,e)}}catch(r){throw xe(n,e,r)}}async function Fe(n,e){const t=[];for(let i=0;i<e.properties.length;i++)t[i]=await u(n,e.properties[i]);const r={},o=new Map;for(let i=0;i<t.length;i++){const c=t[i];if(v(c.value))throw new l(n,s.NoFunctionInDictionary,e);if(m(c.key)===!1)throw new l(n,s.KeyMustBeString,e);let f=c.key.toString();const p=f.toLowerCase();o.has(p)?f=o.get(p):o.set(p,f),c.value===w?r[f]=null:r[f]=c.value}const a=new I(r);return a.immutable=!1,a}async function Ce(n,e){const t=await u(n,e.value);return e.key.type==="Identifier"?{key:e.key.name,value:t}:{key:await u(n,e.key),value:t}}async function Ae(n,e){const t={testResult:!0,lastAction:w};if(t.testResult=await u(n,e.test),t.testResult===!1)return w;if(t.testResult!==!0)throw new l(n,s.BooleanConditionRequired,e);for(;t.testResult===!0&&(t.lastAction=await u(n,e.body),t.lastAction!==S)&&!(t.lastAction instanceof y);)if(t.testResult=await u(n,e.test),t.testResult!==!0&&t.testResult!==!1)throw new l(n,s.BooleanConditionRequired,e);return t.lastAction instanceof y?t.lastAction:w}async function X(n,e,t){const r=await u(n,e.body);return t.lastAction=r,t.lastAction===S||t.lastAction instanceof y?(t.testResult=!1,t):(e.update!==null&&await u(n,e.update),t)}async function Me(n,e,t){var r;if(e.test!==null){const o=await u(n,e.test);if(((r=n.abortSignal)==null?void 0:r.aborted)===!0)throw new l(n,s.Cancelled,e);if(t.testResult=o,t.testResult===!1)return t;if(t.testResult!==!0)throw new l(n,s.BooleanConditionRequired,e);return X(n,e,t)}return X(n,e,t)}function k(n,e,t,r,o,a){try{Me(n,e,t).then(()=>{try{t.testResult===!0?++a>P?(a=0,setTimeout(()=>{k(n,e,t,r,o,a)},0)):k(n,e,t,r,o,a):t.lastAction instanceof y?r(t.lastAction):r(w)}catch(i){o(i)}},i=>{o(i)})}catch(i){o(i)}}function Le(n,e){try{return e.init!==null?u(n,e.init).then(()=>new Promise((t,r)=>{k(n,e,{testResult:!0,lastAction:w},o=>{t(o)},o=>{r(o)},0)})):new Promise((t,r)=>{k(n,e,{testResult:!0,lastAction:w},o=>{t(o)},o=>{r(o)},0)})}catch(t){return Promise.reject(t)}}function T(n,e,t,r,o,a,i,c,f,p){try{if(r<=a)return void c(w);o.value=i==="k"?t[a]:a,u(n,e.body).then(h=>{try{h instanceof y?c(h):h===S?c(w):++p>P?(p=0,setTimeout(()=>{T(n,e,t,r,o,a+1,i,c,f,p)},0)):T(n,e,t,r,o,a+1,i,c,f,p)}catch(K){f(K)}},h=>{f(h)})}catch(h){f(h)}}function U(n,e,t,r,o,a,i,c,f){try{if(t.length()<=o)return void i(w);r.value=a==="k"?t.get(o):o,u(n,e.body).then(p=>{p instanceof y?i(p):p===S?i(w):++f>P?(f=0,setTimeout(()=>{U(n,e,t,r,o+1,a,i,c,f)},0)):U(n,e,t,r,o+1,a,i,c,f)},p=>{c(p)})}catch(p){c(p)}}function V(n,e,t,r,o,a){try{if(a===void 0&&(a="i"),t.length===0)return void r.resolve(w);T(n,e,t,t.length,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function Ne(n,e,t,r,o,a){try{if(a===void 0&&(a="i"),t.length===0)return void r.resolve(w);U(n,e,t,o,0,a,i=>{r.resolve(i)},i=>{r.reject(i)},0)}catch(i){r.reject(i)}}function Oe(n,e,t,r,o){try{V(n,e,t.keys(),r,o,"k")}catch(a){r.reject(a)}}function W(n,e,t,r,o,a,i,c){try{n.next().then(f=>{try{if(f===null)a(w);else{const p=ee.createFromGraphicLikeObject(f.geometry,f.attributes,r,e.timeReference);p._underlyingGraphic=f,o.value=p,u(e,t.body).then(h=>{try{h===S?a(w):h instanceof y?a(h):++c>P?(c=0,setTimeout(()=>{W(n,e,t,r,o,a,i,c)},0)):W(n,e,t,r,o,a,i,c)}catch(K){i(K)}},h=>{i(h)})}}catch(p){i(p)}},f=>{i(f)})}catch(f){i(f)}}async function ke(n,e){return new Promise((t,r)=>{u(n,e.right).then(o=>{try{let a=null;a=e.left.type==="VariableDeclaration"?u(n,e.left):Promise.resolve(),a.then(()=>{try{let i="";if(e.left.type==="VariableDeclaration"){const f=e.left.declarations[0].id;f.type==="Identifier"&&(i=f.name)}else e.left.type==="Identifier"&&(i=e.left.name);if(!i)throw new l(n,s.InvalidIdentifier,e);i=i.toLowerCase();let c=null;if(n.localScope!=null&&n.localScope[i]!==void 0&&(c=n.localScope[i]),c===null&&n.globalScope[i]!==void 0&&(c=n.globalScope[i]),c===null)return void r(new l(n,s.InvalidIdentifier,e));B(o)||m(o)?V(n,e,o,{reject:r,resolve:t},c):j(o)?Ne(n,e,o,{reject:r,resolve:t},c):o instanceof I||M(o)?Oe(n,e,o,{reject:r,resolve:t},c):me(o)?W(o.iterator(n.abortSignal),n,e,o,c,f=>{t(f)},f=>{r(f)},0):V(n,e,[],{reject:r,resolve:t},c)}catch(i){r(i)}},r)}catch(a){r(a)}},r)})}async function Ee(n,e){const t=e.argument;if(t.type==="MemberExpression"){const a={t:null},i=await u(n,t.object);let c=null;a.t=i,t.computed===!0?c=await u(n,t.property):t.property.type==="Identifier"&&(c=t.property.name);const f=a.t;let p;if(B(f)){if(!C(c))throw new l(n,s.ArrayAccessorMustBeNumber,e);if(c<0&&(c=f.length+c),c<0||c>=f.length)throw new l(n,s.OutOfBounds,e);p=d(f[c]),f[c]=e.operator==="++"?p+1:p-1}else if(f instanceof I){if(m(c)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(f.hasField(c)!==!0)throw new l(n,s.FieldNotFound,e,{key:c});p=d(f.field(c)),f.setField(c,e.operator==="++"?p+1:p-1)}else if(f instanceof F){if(m(c)===!1)throw new l(n,s.ModuleAccessorMustBeString,e);if(f.hasGlobal(c)!==!0)throw new l(n,s.ModuleExportNotFound,e);p=d(await f.global(c)),f.setGlobal(c,e.operator==="++"?p+1:p-1)}else{if(!M(f))throw j(f)?new l(n,s.Immutable,e):new l(n,s.InvalidParameter,e);if(m(c)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(f.hasField(c)!==!0)throw new l(n,s.FieldNotFound,e,{key:c});p=d(f.field(c)),f.setField(c,e.operator==="++"?p+1:p-1)}return e.prefix===!1?p:e.operator==="++"?p+1:p-1}const r=e.argument.type==="Identifier"?e.argument.name.toLowerCase():"";if(!r)throw new l(n,s.InvalidIdentifier,e);let o;if(n.localScope!=null&&n.localScope[r]!==void 0)return o=d(n.localScope[r].value),n.localScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;if(n.globalScope[r]!==void 0)return o=d(n.globalScope[r].value),n.globalScope[r]={value:e.operator==="++"?o+1:o-1,valueset:!0,node:e},e.prefix===!1?o:e.operator==="++"?o+1:o-1;throw new l(n,s.InvalidIdentifier,e)}function b(n,e,t,r,o){switch(e){case"=":return n===w?null:n;case"/=":return d(t)/d(n);case"*=":return d(t)*d(n);case"-=":return d(t)-d(n);case"+=":return m(t)||m(n)?L(t)+L(n):d(t)+d(n);case"%=":return d(t)%d(n);default:throw new l(o,s.UnsupportedOperator,r)}}async function Be(n,e){const t=e.left;if(t.type==="MemberExpression"){const o=await u(n,t.object);let a=null;if(t.computed===!0)a=await u(n,t.property);else{if(t.property.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);a=t.property.name}const i=await u(n,e.right);if(B(o)){if(!C(a))throw new l(n,s.ArrayAccessorMustBeNumber,e);if(a<0&&(a=o.length+a),a<0||a>o.length)throw new l(n,s.OutOfBounds,e);if(a===o.length){if(e.operator!=="=")throw new l(n,s.OutOfBounds,e);o[a]=b(i,e.operator,o[a],e,n)}else o[a]=b(i,e.operator,o[a],e,n)}else if(o instanceof I){if(m(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,b(i,e.operator,o.field(a),e,n));else{if(e.operator!=="=")throw new l(n,s.FieldNotFound,e,{key:a});o.setField(a,b(i,e.operator,null,e,n))}}else if(o instanceof F){if(m(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(o.hasGlobal(a)!==!0)throw new l(n,s.ModuleExportNotFound,e);o.setGlobal(a,b(i,e.operator,await o.global(a),e,n))}else{if(!M(o))throw j(o)?new l(n,s.Immutable,e):new l(n,s.InvalidParameter,e);if(m(a)===!1)throw new l(n,s.KeyAccessorMustBeString,e);if(o.hasField(a)===!0)o.setField(a,b(i,e.operator,o.field(a),e,n));else{if(e.operator!=="=")throw new l(n,s.FieldNotFound,e,{key:a});o.setField(a,b(i,e.operator,null,e,n))}}return w}const r=t.name.toLowerCase();if(n.localScope!=null&&n.localScope[r]!==void 0){const o=await u(n,e.right);return n.localScope[r]={value:b(o,e.operator,n.localScope[r].value,e,n),valueset:!0,node:e.right},w}if(n.globalScope[r]!==void 0){const o=await u(n,e.right);return n.globalScope[r]={value:b(o,e.operator,n.globalScope[r].value,e,n),valueset:!0,node:e.right},w}throw new l(n,s.InvalidIdentifier,e)}async function je(n,e){if(e.expression.type==="AssignmentExpression")return u(n,e.expression);if(e.expression.type==="CallExpression"){const r=await u(n,e.expression);return r===w?w:new O(r)}const t=await u(n,e.expression);return t===w?w:new O(t)}async function Pe(n,e){const t=await u(n,e.test);if(t===!0)return u(n,e.consequent);if(t===!1)return e.alternate!==null?u(n,e.alternate):w;throw new l(n,s.BooleanConditionRequired,e)}async function Ke(n,e){return te(n,e,0)}async function te(n,e,t){if(t>=e.body.length)return w;const r=await u(n,e.body[t]);return r instanceof y||r===S||r===E||t===e.body.length-1?r:te(n,e,t+1)}async function qe(n,e){if(e.argument===null)return new y(w);const t=await u(n,e.argument);return new y(t)}async function De(n,e){const t=e.id.name.toLowerCase();return n.globalScope[t]={valueset:!0,node:null,value:new Ie(e,n)},w}async function Ge(n,e){var a,i;const t=e.specifiers[0].local.name.toLowerCase(),r=n.libraryResolver.loadLibrary(t);let o=null;return(a=n.libraryResolver._moduleSingletons)!=null&&a.has(r.uri)?o=n.libraryResolver._moduleSingletons.get(r.uri):(o=new F(r),await o.loadModule(n),(i=n.libraryResolver._moduleSingletons)==null||i.set(r.uri,o)),n.globalScope[t]={value:o,valueset:!0,node:e},w}async function Te(n,e){if(await u(n,e.declaration),e.declaration.type==="FunctionDeclaration")n.exports[e.declaration.id.name.toLowerCase()]="function";else if(e.declaration.type==="VariableDeclaration")for(const t of e.declaration.declarations)n.exports[t.id.name.toLowerCase()]="variable";return w}async function re(n,e,t){return t>=e.declarations.length?w:(await u(n,e.declarations[t]),t===e.declarations.length-1||await re(n,e,t+1),w)}async function Ue(n,e){let t=null;if(t=e.init===null?null:await u(n,e.init),n.localScope!==null){if(t===w&&(t=null),e.id.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);const o=e.id.name.toLowerCase();return n.localScope!=null&&(n.localScope[o]={value:t,valueset:!0,node:e.init}),w}if(e.id.type!=="Identifier")throw new l(n,s.InvalidIdentifier,e);const r=e.id.name.toLowerCase();return t===w&&(t=null),n.globalScope[r]={value:t,valueset:!0,node:e.init},w}async function Ve(n,e){const t=await u(n,e.object);if(t===null)throw new l(n,s.MemberOfNull,e);if(e.computed===!1){if(e.property.type==="Identifier"){if(t instanceof I||M(t))return t.field(e.property.name);if(t instanceof H)return z(t,e.property.name,n,e);if(t instanceof F){if(!t.hasGlobal(e.property.name))throw new l(n,s.InvalidIdentifier,e);return t.global(e.property.name)}throw new l(n,s.InvalidMemberAccessKey,e)}throw new l(n,s.InvalidMemberAccessKey,e)}let r=await u(n,e.property);if(t instanceof I||M(t)){if(m(r))return t.field(r);throw new l(n,s.InvalidMemberAccessKey,e)}if(t instanceof F){if(m(r))return t.global(r);throw new l(n,s.InvalidMemberAccessKey,e)}if(t instanceof H){if(m(r))return z(t,r,n,e);throw new l(n,s.InvalidMemberAccessKey,e)}if(B(t)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new l(n,s.OutOfBounds,e);return t[r]}throw new l(n,s.InvalidMemberAccessKey,e)}if(j(t)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length()+r),r>=t.length()||r<0)throw new l(n,s.OutOfBounds,e);return t.get(r)}throw new l(n,s.InvalidMemberAccessKey,e)}if(m(t)){if(C(r)&&isFinite(r)&&Math.floor(r)===r){if(r<0&&(r=t.length+r),r>=t.length||r<0)throw new l(n,s.OutOfBounds,e);return t[r]}throw new l(n,s.InvalidMemberAccessKey,e)}throw new l(n,s.InvalidMemberAccessKey,e)}async function We(n,e){const t=await u(n,e.argument);if(R(t)){if(e.operator==="!")return!t;if(e.operator==="-")return-1*d(t);if(e.operator==="+")return 1*d(t);if(e.operator==="~")return~d(t);throw new l(n,s.UnsupportedUnaryOperator,e)}if(e.operator==="-")return-1*d(t);if(e.operator==="+")return 1*d(t);if(e.operator==="~")return~d(t);throw new l(n,s.UnsupportedUnaryOperator,e)}async function _e(n,e){const t=[];for(let r=0;r<e.elements.length;r++)t.push(await u(n,e.elements[r]));for(let r=0;r<t.length;r++){if(v(t[r]))throw new l(n,s.NoFunctionInArray,e);t[r]===w&&(t[r]=null)}return t}async function Ye(n,e){const t=[];t[0]=await u(n,e.left),t[1]=await u(n,e.right);const r=t[0],o=t[1];switch(e.operator){case"|":case"<<":case">>":case">>>":case"^":case"&":return ye(d(r),d(o),e.operator);case"==":return D(r,o);case"!=":return!D(r,o);case"<":case">":case"<=":case">=":return ge(r,o,e.operator);case"+":return m(r)||m(o)?L(r)+L(o):d(r)+d(o);case"-":return d(r)-d(o);case"*":return d(r)*d(o);case"/":return d(r)/d(o);case"%":return d(r)%d(o);default:throw new l(n,s.UnsupportedOperator,e)}}async function Ze(n,e){const t=await u(n,e.left);let r=null;if(!R(t))throw new l(n,s.LogicalExpressionOnlyBoolean,e);switch(e.operator){case"||":if(t===!0)return t;if(r=await u(n,e.right),R(r))return r;throw new l(n,s.LogicExpressionOrAnd,e);case"&&":if(t===!1)return t;if(r=await u(n,e.right),R(r))return r;throw new l(n,s.LogicExpressionOrAnd,e);default:throw new l(n,s.LogicExpressionOrAnd,e)}}async function Z(n,e){const t=e.name.toLowerCase();if(n.localScope!=null&&n.localScope[t]!==void 0){const r=n.localScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=u(n,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}if(n.globalScope[t]!==void 0){const r=n.globalScope[t];if(r.valueset===!0)return r.value;if(r.d!==null)return r.d;r.d=u(n,r.node);const o=await r.d;return r.value=o,r.valueset=!0,o}throw new l(n,s.InvalidIdentifier,e)}async function ze(n,e){if(e.callee.type==="MemberExpression"){const t=await u(n,e.callee.object);if(!(t instanceof F))throw new l(n,s.FuncionNotFound,e);const r=e.callee.computed===!1?e.callee.property.name:await u(n,e.callee.property);if(!t.hasGlobal(r))throw new l(n,s.FuncionNotFound,e);const o=await t.global(r);if(!v(o))throw new l(n,s.CallNonFunction,e);return o.call(n,e)}if(e.callee.type!=="Identifier")throw new l(n,s.FuncionNotFound,e);if(n.localScope!=null&&n.localScope[e.callee.name.toLowerCase()]!==void 0){const t=n.localScope[e.callee.name.toLowerCase()];if(v(t.value))return t.value.call(n,e);throw new l(n,s.CallNonFunction,e)}if(n.globalScope[e.callee.name.toLowerCase()]!==void 0){const t=n.globalScope[e.callee.name.toLowerCase()];if(v(t.value))return t.value.call(n,e);throw new l(n,s.CallNonFunction,e)}throw new l(n,s.FuncionNotFound,e)}async function Je(n,e){return e.value?e.value.cooked:""}function He(n,e,t){if(v(n))throw new l(e,s.NoFunctionInTemplateLiteral,t);return n}async function Qe(n,e){const t=[];for(let a=0;a<e.expressions.length;a++){const i=await u(n,e.expressions[a]);t[a]=L(i)}let r="",o=0;for(const a of e.quasis)r+=a.value?a.value.cooked:"",a.tail===!1&&(r+=t[o]?He(t[o],n,e):"",o++);return r}const g={};async function oe(n,e,t,r){const o=await u(n,e.arguments[t]);if(D(o,r))return u(n,e.arguments[t+1]);const a=e.arguments.length-t;return a===1?u(n,e.arguments[t]):a===2?null:a===3?u(n,e.arguments[t+2]):oe(n,e,t+2,r)}async function ae(n,e,t,r){if(r===!0)return u(n,e.arguments[t+1]);if(e.arguments.length-t===3)return u(n,e.arguments[t+2]);const o=await u(n,e.arguments[t+2]);if(R(o)===!1)throw new l(n,s.ModuleExportNotFound,e.arguments[t+2]);return ae(n,e,t+2,o)}async function q(n,e,t,r){const o=n.body;if(t.length!==n.params.length)throw new l(e,s.WrongNumberOfParameters,null);for(let i=0;i<t.length;i++){const c=n.params[i];c.type==="Identifier"&&e.localScope!=null&&(e.localScope[c.name.toLowerCase()]={d:null,value:t[i],valueset:!0,node:null})}const a=await u(e,o);if(a instanceof y)return a.value;if(a===S)throw new l(e,s.UnexpectedToken,r);if(a===E)throw new l(e,s.UnexpectedToken,r);return a instanceof O?a.value:a}se(g,x),ce(g,x),ue(g,x),fe(g,x),pe(g,x),Re({functions:g,compiled:!1,signatures:null,evaluateIdentifier:null,mode:"async",standardFunction:x,standardFunctionAsync:N}),g.iif=async function(n,e){we(e.arguments===null?[]:e.arguments,3,3,n,e);const t=await u(n,e.arguments[0]);if(R(t)===!1)throw new l(n,s.BooleanConditionRequired,e);return u(n,t?e.arguments[1]:e.arguments[2])},g.decode=async function(n,e){if(e.arguments.length<2)throw new l(n,s.WrongNumberOfParameters,e);if(e.arguments.length===2)return u(n,e.arguments[1]);if((e.arguments.length-1)%2==0)throw new l(n,s.WrongNumberOfParameters,e);return oe(n,e,1,await u(n,e.arguments[0]))},g.when=async function(n,e){if(e.arguments.length<3)throw new l(n,s.WrongNumberOfParameters,e);if(e.arguments.length%2==0)throw new l(n,s.WrongNumberOfParameters,e);const t=await u(n,e.arguments[0]);if(R(t)===!1)throw new l(n,s.BooleanConditionRequired,e.arguments[0]);return ae(n,e,0,t)};const Xe={fixSpatialReference:ve,parseArguments:Y,standardFunction:x,standardFunctionAsync:N,evaluateIdentifier:Z};for(const n in g)g[n]={value:new _(g[n]),valueset:!0,node:null};const A=function(){};function ie(n,e,t){const r=new A;n==null&&(n={}),e==null&&(e={});const o=new I({newline:`
`,tab:"	",singlequote:"'",doublequote:'"',forwardslash:"/",backwardslash:"\\"});o.immutable=!1,r.textformatting={value:o,valueset:!0,node:null};for(const a in e)r[a]={value:new _(e[a]),native:!0,valueset:!0,node:null};for(const a in n)n[a]&&n[a].declaredClass==="esri.Graphic"?r[a]={value:ee.createFromGraphic(n[a],t),valueset:!0,node:null}:r[a]={value:n[a],valueset:!0,node:null};return r}function le(n){console.log(n)}A.prototype=g,A.prototype.infinity={value:Number.POSITIVE_INFINITY,valueset:!0,node:null},A.prototype.pi={value:Math.PI,valueset:!0,node:null};const un=Xe;function $e(n){const e={mode:"async",compiled:!1,functions:{},signatures:[],standardFunction:x,standardFunctionAsync:N,evaluateIdentifier:Z};for(let t=0;t<n.length;t++)n[t].registerFunctions(e);for(const t in e.functions)g[t]={value:new _(e.functions[t]),valueset:!0,node:null},A.prototype[t]=g[t];for(let t=0;t<e.signatures.length;t++)de(e.signatures[t],"async")}async function fn(n,e){var c;let t=e.spatialReference;t==null&&(t=new ne({wkid:102100}));let r=null;n.usesModules&&(r=new $(new Map,n.loadedModules));const o=ie(e.vars,e.customfunctions,e.timeReference),a={spatialReference:t,services:e.services,exports:{},libraryResolver:r,abortSignal:e.abortSignal===void 0||e.abortSignal===null?{aborted:!1}:e.abortSignal,globalScope:o,console:e.console?e.console:le,timeReference:(c=e.timeReference)!=null?c:null,lrucache:e.lrucache,interceptor:e.interceptor,localScope:null,depthCounter:{depth:1}};let i=await u(a,n);if(i instanceof y&&(i=i.value),i instanceof O&&(i=i.value),i===w&&(i=null),i===S)throw new l(a,s.IllegalResult,null);if(i===E)throw new l(a,s.IllegalResult,null);if(v(i))throw new l(a,s.IllegalResult,null);return i}$e([he]);export{fn as executeScript,$e as extend,un as functionHelper};
