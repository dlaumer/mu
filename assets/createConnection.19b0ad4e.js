import{$ as O,L as u,e as g,y as w,b,iJ as F,r as h,i as f,iL as R,ah as c,iM as E,dt as L,bx as P,c0 as M,bo as W,F as T,ag as C,aL as q,c1 as j,hr as v}from"./index.f0b603e5.js";let S=class extends O.EventedAccessor{destroy(){this.emit("destroy")}get connectionError(){return this.errorString?new u("stream-connection",this.errorString):null}onFeature(e){this.emit("data-received",e)}onMessage(e){this.emit("message-received",e)}};g([w({readOnly:!0})],S.prototype,"connectionError",null),S=g([b("esri.layers.support.StreamConnection")],S);const x=S;var y;(function(e){e[e.CONNECTING=0]="CONNECTING",e[e.OPEN=1]="OPEN",e[e.CLOSING=2]="CLOSING",e[e.CLOSED=3]="CLOSED"})(y||(y={}));let _=class extends x{constructor(e){super(),this._outstandingMessages=[],this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._config=e,this._featureZScaler=F(t,s,r),this._open()}async _open(){await this._tryCreateWebSocket(),this.destroyed||await this._handshake()}destroy(){super.destroy(),h(this._websocket)&&(this._websocket.onopen=null,this._websocket.onclose=null,this._websocket.onerror=null,this._websocket.onmessage=null,this._websocket.close()),this._websocket=null}get connectionStatus(){if(f(this._websocket))return"disconnected";switch(this._websocket.readyState){case y.CONNECTING:case y.OPEN:return"connected";case y.CLOSING:case y.CLOSED:return"disconnected"}}sendMessageToSocket(e){f(this._websocket)?this._outstandingMessages.push(e):this._websocket.send(JSON.stringify(e))}sendMessageToClient(e){this._onMessage(e)}updateCustomParameters(e){this._config.customParameters=e,h(this._websocket)&&this._websocket.close()}async _tryCreateWebSocket(e=this._config.source.path,t=1e3,r=0){var s;try{if(this.destroyed)return;const o=R(e,(s=this._config.customParameters)!=null?s:{});this._websocket=await this._createWebSocket(o),this.notifyChange("connectionStatus")}catch(o){const n=t/1e3;return this._config.maxReconnectionAttempts&&r>=this._config.maxReconnectionAttempts?(c.getLogger(this.declaredClass).error(new u("websocket-connection","Exceeded maxReconnectionAttempts attempts. No further attempts will be made")),void this.destroy()):(c.getLogger(this.declaredClass).error(new u("websocket-connection",`Failed to connect. Attempting to reconnect in ${n}s`,o)),await E(t),this._tryCreateWebSocket(e,Math.min(1.5*t,1e3*this._config.maxReconnectionInterval),r+1))}}_setWebSocketJSONParseHandler(e){e.onmessage=t=>{try{const r=JSON.parse(t.data);this._onMessage(r)}catch(r){return void c.getLogger(this.declaredClass).error(new u("websocket-connection","Failed to parse message, invalid JSON",{error:r}))}}}_createWebSocket(e){return new Promise((t,r)=>{const s=new WebSocket(e);s.onopen=()=>{if(s.onopen=null,this.destroyed)return s.onclose=null,void s.close();s.onclose=o=>this._onClose(o),s.onerror=o=>this._onError(o),this._setWebSocketJSONParseHandler(s),t(s)},s.onclose=o=>{s.onopen=s.onclose=null,r(o)}})}async _handshake(e=1e4){const t=this._websocket;if(f(t))return;const r=L(),s=t.onmessage,{filter:o,outFields:n,spatialReference:i}=this._config;return r.timeout(e),t.onmessage=d=>{var a;let l=null;try{l=JSON.parse(d.data)}catch{}l&&typeof l=="object"||(c.getLogger(this.declaredClass).error(new u("websocket-connection","Protocol violation. Handshake failed - malformed message",d.data)),r.reject(),this.destroy()),((a=l.spatialReference)==null?void 0:a.wkid)!==(i==null?void 0:i.wkid)&&(c.getLogger(this.declaredClass).error(new u("websocket-connection",`Protocol violation. Handshake failed - expected wkid of ${i.wkid}`,d.data)),r.reject(),this.destroy()),l.format!=="json"&&(c.getLogger(this.declaredClass).error(new u("websocket-connection","Protocol violation. Handshake failed - format is not set",d.data)),r.reject(),this.destroy()),o&&l.filter!==o&&c.getLogger(this.declaredClass).error(new u("websocket-connection","Tried to set filter, but server doesn't support it")),n&&l.outFields!==n&&c.getLogger(this.declaredClass).error(new u("websocket-connection","Tried to set outFields, but server doesn't support it")),t.onmessage=s;for(const m of this._outstandingMessages)t.send(JSON.stringify(m));this._outstandingMessages=[],r.resolve()},t.send(JSON.stringify({filter:o,outFields:n,format:"json",spatialReference:{wkid:i.wkid}})),r.promise}_onMessage(e){if(this.onMessage(e),"type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)h(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}}_onError(e){const t="Encountered an error over WebSocket connection";this._set("errorString",t),c.getLogger(this.declaredClass).error("websocket-connection",t)}_onClose(e){this._websocket=null,this.notifyChange("connectionStatus"),e.code!==1e3&&c.getLogger(this.declaredClass).error("websocket-connection",`WebSocket closed unexpectedly with error code ${e.code}`),this.destroyed||this._open()}};g([w()],_.prototype,"connectionStatus",null),g([w()],_.prototype,"errorString",void 0),_=g([b("esri.layers.graphics.sources.connections.WebSocketConnection")],_);const D=1e4,J={maxQueryDepth:5,maxRecordCountFactor:3};let k=class extends _{constructor(e){super({...J,...e}),this._buddyServicesQuery=null,this._relatedFeatures=null}async _open(){const e=await this._fetchServiceDefinition(this._config.source);e.timeInfo.trackIdField||c.getLogger(this.declaredClass).warn("GeoEvent service was configured without a TrackIdField. This may result in certain functionality being disabled. The purgeOptions.maxObservations property will have no effect.");const t=this._fetchWebSocketUrl(e.streamUrls,this._config.spatialReference);this._buddyServicesQuery||(this._buddyServicesQuery=this._queryBuddyServices()),await this._buddyServicesQuery,await this._tryCreateWebSocket(t);const{filter:r,outFields:s}=this._config;this.destroyed||this._setFilter(r,s)}_onMessage(e){if("attributes"in e){let t;try{t=this._enrich(e),h(this._featureZScaler)&&this._featureZScaler(t.geometry)}catch(r){return void c.getLogger(this.declaredClass).error(new u("geoevent-connection","Failed to parse message",r))}this.onFeature(t)}else this.onMessage(e)}async _fetchServiceDefinition(e){const t={f:"json",...this._config.customParameters},r=P(e.path,{query:t,responseType:"json"}),s=(await r).data;return this._serviceDefinition=s,s}_fetchWebSocketUrl(e,t){const r=e[0],{urls:s,token:o}=r,n=this._inferWebSocketBaseUrl(s);return R(`${n}/subscribe`,{outSR:""+t.wkid,token:o})}_inferWebSocketBaseUrl(e){if(e.length===1)return e[0];for(const t of e)if(t.includes("wss"))return t;return c.getLogger(this.declaredClass).error(new u("geoevent-connection","Unable to infer WebSocket url",e)),null}async _setFilter(e,t){const r=this._websocket;if(f(r)||f(e)&&f(t))return;const s=JSON.stringify({filter:this._serializeFilter(e,t)});let o=!1;const n=L(),i=()=>{o||(this.destroyed||this._websocket!==r||c.getLogger(this.declaredClass).error(new u("geoevent-connection","Server timed out when setting filter")),n.reject())},d=l=>{const a=JSON.parse(l.data);a.filter&&(a.error&&(c.getLogger(this.declaredClass).error(new u("geoevent-connection","Failed to set service filter",a.error)),this._set("errorString",`Could not set service filter - ${a.error}`),n.reject(a.error)),this._setWebSocketJSONParseHandler(r),o=!0,n.resolve())};return r.onmessage=d,r.send(s),setTimeout(i,D),n.promise}_serializeFilter(e,t){const r={};if(f(e)&&f(t))return r;if(h(e)&&e.geometry)try{const s=M(e.geometry);if(s.type!=="extent")throw new u(`Expected extent but found type ${s.type}`);r.geometry=JSON.stringify(s.shiftCentralMeridian())}catch(s){c.getLogger(this.declaredClass).error(new u("geoevent-connection","Encountered an error when setting connection geometryDefinition",s))}return h(e)&&e.where&&e.where!=="1 = 1"&&e.where!=="1=1"&&(r.where=e.where),h(t)&&(r.outFields=t.join(",")),r}_enrich(e){if(!this._relatedFeatures)return e;const t=this._serviceDefinition.relatedFeatures.joinField,r=e.attributes[t],s=this._relatedFeatures.get(r);if(!s)return c.getLogger(this.declaredClass).warn("geoevent-connection","Feature join failed. Is the join field configured correctly?",e),e;const{attributes:o,geometry:n}=s;for(const i in o)e.attributes[i]=o[i];return n&&(e.geometry=n),e.geometry||e.centroid||c.getLogger(this.declaredClass).error(new u("geoevent-connection","Found malformed feature - no geometry found",e)),e}async _queryBuddyServices(){try{const{relatedFeatures:e,keepLatestArchive:t}=this._serviceDefinition,r=this._queryRelatedFeatures(e),s=this._queryArchive(t);await r;const o=await s;if(!o)return;for(const n of o.features)this.onFeature(this._enrich(n))}catch(e){c.getLogger(this.declaredClass).error(new u("geoevent-connection","Encountered an error when querying buddy services",{error:e}))}}async _queryRelatedFeatures(e){if(!e)return;const t=await this._queryBuddy(e.featuresUrl);this._addRelatedFeatures(t)}async _queryArchive(e){if(e)return this._queryBuddy(e.featuresUrl)}async _queryBuddy(e){const t=new(await W(()=>import("./index.f0b603e5.js").then(function(N){return N.us}),["assets/index.f0b603e5.js","assets/index.574508c2.css"])).default({url:e}),{capabilities:r}=await t.load(),s=r.query.supportsMaxRecordCountFactor,o=r.query.supportsPagination,n=r.query.supportsCentroid,i=this._config.maxRecordCountFactor,d=t.capabilities.query.maxRecordCount,l=s?d*i:d,a=new T;if(a.outFields=C(this._config.outFields,["*"]),a.where=C(q(this._config.filter,"where"),"1=1"),a.returnGeometry=!0,a.returnExceededLimitFeatures=!0,a.outSpatialReference=j.fromJSON(this._config.spatialReference),n&&(a.returnCentroid=!0),s&&(a.maxRecordCountFactor=i),o)return a.num=l,t.destroy(),this._queryPages(e,a);const m=await v(e,a,this._config.sourceSpatialReference);return t.destroy(),m.data}async _queryPages(e,t,r=[],s=0){var n;t.start=h(t.num)?s*t.num:null;const{data:o}=await v(e,t,this._config.sourceSpatialReference);return o.exceededTransferLimit&&s<((n=this._config.maxQueryDepth)!=null?n:0)?(o.features.forEach(i=>r.push(i)),this._queryPages(e,t,r,s+1)):(r.forEach(i=>o.features.push(i)),o)}_addRelatedFeatures(e){const t=new Map,r=e.features,s=this._serviceDefinition.relatedFeatures.joinField;for(const o of r){const n=o.attributes[s];t.set(n,o)}this._relatedFeatures=t}};k=g([b("esri.layers.graphics.sources.connections.GeoEventConnection")],k);const I=k;let p=class extends x{constructor(e){super(),this.connectionStatus="connected",this.errorString=null;const{geometryType:t,spatialReference:r,sourceSpatialReference:s}=e;this._featureZScaler=F(t,s,r)}updateCustomParameters(e){}sendMessageToSocket(e){}sendMessageToClient(e){if("type"in e)switch(e.type){case"features":case"featureResult":for(const t of e.features)h(this._featureZScaler)&&this._featureZScaler(t.geometry),this.onFeature(t)}this.onMessage(e)}};g([w()],p.prototype,"connectionStatus",void 0),g([w()],p.prototype,"errorString",void 0),p=g([b("esri.layers.support.ClientSideConnection")],p);function U(e,t,r,s,o,n,i,d){const l={source:e,sourceSpatialReference:t,spatialReference:r,geometryType:s,filter:o,maxReconnectionAttempts:n,maxReconnectionInterval:i,customParameters:d};return e?e.path.startsWith("wss://")||e.path.startsWith("ws://")?new _(l):new I(l):new p(l)}export{U as createConnection};
