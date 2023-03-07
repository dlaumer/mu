import{cm as k,cn as C,cw as h,cG as $,co as n,cv as T,cH as W,cu as K,cs as j}from"./index.860f6be5.js";import{u as v}from"./interactive.5b40332c.js";import{s as y,a as x,c as E}from"./loadable.f81dc576.js";import{c as S,a as w,s as A,d as H,b as F,u as z}from"./t9n.dc13206d.js";import{c as U}from"./observers.cd675892.js";import{H as G,S as q,a as L,d as B}from"./action-menu.7c2a5cb4.js";import{d as M}from"./action.74b645c8.js";import{d as O}from"./icon.99ccca16.js";import{d as _}from"./loader.7cc1d20b.js";import{d as D}from"./scrim.e3ec34d5.js";import{d as J}from"./tooltip.b46e3e1b.js";import"./guid.ba2965fd.js";import"./openCloseComponent.3dd18a5e.js";import"./debounce.aad9914a.js";/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const i={backButton:"back-button",container:"container",header:"header",heading:"heading",summary:"summary",description:"description",headerContent:"header-content",headerActions:"header-actions",headerActionsEnd:"header-actions--end",headerActionsStart:"header-actions--start",contentWrapper:"content-wrapper",contentContainer:"content-container",contentHeight:"content-height",fabContainer:"fab-container",footer:"footer"},p={close:"x",menu:"ellipsis",backLeft:"chevron-left",backRight:"chevron-right"},o={headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},Q="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;block-size:100%;inline-size:100%;flex:1 1 auto;overflow:hidden;--calcite-min-header-height:calc(var(--calcite-icon-size) * 3)}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.header{margin:0px;display:flex;align-content:space-between;align-items:center;fill:var(--calcite-ui-text-2);color:var(--calcite-ui-text-2)}.heading{margin:0px;padding:0px;font-weight:var(--calcite-font-weight-medium)}.header .heading{flex:1 1 auto;padding:0.5rem}.container{margin:0px;display:flex;inline-size:100%;flex:1 1 auto;flex-direction:column;align-items:stretch;background-color:var(--calcite-ui-background);padding:0px;transition:max-block-size var(--calcite-animation-timing), inline-size var(--calcite-animation-timing)}.container[hidden]{display:none}.header{border-block-end:1px solid;position:sticky;inset-block-start:0px;z-index:400;inline-size:100%;align-items:stretch;justify-content:flex-start;background-color:var(--calcite-ui-foreground-1);border-block-end-color:var(--calcite-ui-border-3);flex:0 0 auto}.header-content{display:flex;flex-direction:column;overflow:hidden;padding-inline:0.75rem;padding-block:0.875rem;margin-inline-end:auto}.header-content .heading,.header-content .description{display:block;overflow-wrap:break-word;padding:0px}.header-content .heading{margin-inline:0px;margin-block:0px 0.25rem;font-size:var(--calcite-font-size-0);line-height:1.25rem;font-weight:var(--calcite-font-weight-medium)}.header-content .heading:only-child{margin-block-end:0px}.header-content .description{font-size:var(--calcite-font-size--1);line-height:1rem;color:var(--calcite-ui-text-2)}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}.header-actions{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch}.header-actions--end{margin-inline-start:auto}.content-wrapper{overflow:auto}.content-height{block-size:100%}.content-container{display:flex;flex:1 1 auto;flex-direction:column;flex-wrap:nowrap;align-items:stretch;background-color:var(--calcite-ui-background)}.footer{border-block-start:1px solid;position:sticky;inset-block-end:0px;display:flex;inline-size:100%;justify-content:space-evenly;background-color:var(--calcite-ui-foreground-1);border-block-start-color:var(--calcite-ui-border-3);flex:0 0 auto;min-block-size:3rem;padding:0.5rem}.fab-container{position:sticky;inset-block-end:0px;z-index:300;margin-block:0px;margin-inline:auto;display:block;padding:0.5rem;inset-inline:0;inline-size:-moz-fit-content;inline-size:fit-content}[hidden]{display:none}",V=k(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calcitePanelClose=h(this,"calcitePanelClose",6),this.calcitePanelScroll=h(this,"calcitePanelScroll",6),this.resizeObserver=U("resize",()=>this.resizeHandler()),this.resizeHandler=()=>{const{panelScrollEl:e}=this;!e||typeof e.scrollHeight!="number"||typeof e.offsetHeight!="number"||(e.tabIndex=e.scrollHeight>e.offsetHeight?0:-1)},this.setContainerRef=e=>{this.containerEl=e},this.setCloseRef=e=>{this.closeButtonEl=e},this.setBackRef=e=>{this.backButtonEl=e},this.panelKeyDownHandler=e=>{this.closable&&e.key==="Escape"&&!e.defaultPrevented&&(this.close(),e.preventDefault())},this.close=()=>{this.closed=!0,this.calcitePanelClose.emit()},this.panelScrollHandler=()=>{this.calcitePanelScroll.emit()},this.handleHeaderActionsStartSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasStartActions=!!t.length},this.handleHeaderActionsEndSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasEndActions=!!t.length},this.handleHeaderMenuActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasMenuItems=!!t.length},this.handleHeaderContentSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasHeaderContent=!!t.length},this.handleFooterSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterContent=!!t.length},this.handleFooterActionsSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFooterActions=!!t.length},this.handleFabSlotChange=e=>{const t=e.target.assignedElements({flatten:!0});this.hasFab=!!t.length},this.setPanelScrollEl=e=>{var t,a;this.panelScrollEl=e,(t=this.resizeObserver)==null||t.disconnect(),e&&((a=this.resizeObserver)==null||a.observe(e),this.resizeHandler())},this.closed=!1,this.disabled=!1,this.closable=!1,this.headingLevel=void 0,this.loading=!1,this.heading=void 0,this.description=void 0,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.hasStartActions=!1,this.hasEndActions=!1,this.hasMenuItems=!1,this.hasHeaderContent=!1,this.hasFooterContent=!1,this.hasFooterActions=!1,this.hasFab=!1,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){S(this),w(this)}async componentWillLoad(){y(this),await A(this)}componentDidLoad(){x(this)}componentDidRender(){v(this)}disconnectedCallback(){var e;H(this),F(this),(e=this.resizeObserver)==null||e.disconnect()}effectiveLocaleChange(){z(this,this.effectiveLocale)}async setFocus(){await E(this),$(this.containerEl)}async scrollContentTo(e){var t;(t=this.panelScrollEl)==null||t.scrollTo(e)}renderHeaderContent(){const{heading:e,headingLevel:t,description:a,hasHeaderContent:l}=this,s=e?n(G,{class:i.heading,level:t},e):null,c=a?n("span",{class:i.description},a):null;return!l&&(s||c)?n("div",{class:i.headerContent,key:"header-content"},s,c):null}renderHeaderSlottedContent(){return n("div",{class:i.headerContent,hidden:!this.hasHeaderContent,key:"slotted-header-content"},n("slot",{name:o.headerContent,onSlotchange:this.handleHeaderContentSlotChange}))}renderHeaderStartActions(){const{hasStartActions:e}=this;return n("div",{class:{[i.headerActionsStart]:!0,[i.headerActions]:!0},hidden:!e,key:"header-actions-start"},n("slot",{name:o.headerActionsStart,onSlotchange:this.handleHeaderActionsStartSlotChange}))}renderHeaderActionsEnd(){const{close:e,hasEndActions:t,messages:a,closable:l}=this,s=a.close,c=l?n("calcite-action",{"aria-label":s,icon:p.close,onClick:e,ref:this.setCloseRef,text:s}):null,r=n("slot",{name:o.headerActionsEnd,onSlotchange:this.handleHeaderActionsEndSlotChange}),m=t||c;return n("div",{class:{[i.headerActionsEnd]:!0,[i.headerActions]:!0},hidden:!m,key:"header-actions-end"},r,c)}renderMenu(){const{hasMenuItems:e,messages:t,menuOpen:a}=this;return n("calcite-action-menu",{flipPlacements:["top","bottom"],hidden:!e,key:"menu",label:t.options,open:a,placement:"bottom-end"},n("calcite-action",{icon:p.menu,slot:q.trigger,text:t.options}),n("slot",{name:o.headerMenuActions,onSlotchange:this.handleHeaderMenuActionsSlotChange}))}renderHeaderNode(){const{hasHeaderContent:e,hasStartActions:t,hasEndActions:a,closable:l,hasMenuItems:s}=this,c=this.renderHeaderContent(),r=e||c||t||a||l||s;return n("header",{class:i.header,hidden:!r},this.renderHeaderStartActions(),this.renderHeaderSlottedContent(),c,this.renderHeaderActionsEnd(),this.renderMenu())}renderFooterNode(){const{hasFooterContent:e,hasFooterActions:t}=this,a=e||t;return n("footer",{class:i.footer,hidden:!a},n("slot",{key:"footer-slot",name:o.footer,onSlotchange:this.handleFooterSlotChange}),n("slot",{key:"footer-actions-slot",name:o.footerActions,onSlotchange:this.handleFooterActionsSlotChange}))}renderContent(){const{hasFab:e}=this,t=n("slot",{key:"default-slot"}),a=e?n("section",{class:i.contentContainer},t):t;return n("div",{class:{[i.contentWrapper]:!0,[i.contentContainer]:!e,[i.contentHeight]:e},onScroll:this.panelScrollHandler,ref:this.setPanelScrollEl},a,this.renderFab())}renderFab(){return n("div",{class:i.fabContainer,hidden:!this.hasFab},n("slot",{name:o.fab,onSlotchange:this.handleFabSlotChange}))}render(){const{loading:e,panelKeyDownHandler:t,closed:a,closable:l}=this,s=n("article",{"aria-busy":T(e),class:i.container,hidden:a,onKeyDown:t,ref:this.setContainerRef,tabIndex:l?0:-1},this.renderHeaderNode(),this.renderContent(),this.renderFooterNode());return n(W,null,e?n("calcite-scrim",{loading:e}):null,s)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Q}},[1,"calcite-panel",{closed:[1540],disabled:[516],closable:[1540],headingLevel:[514,"heading-level"],loading:[516],heading:[1],description:[1],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],hasStartActions:[32],hasEndActions:[32],hasMenuItems:[32],hasHeaderContent:[32],hasFooterContent:[32],hasFooterActions:[32],hasFab:[32],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function I(){if(typeof customElements=="undefined")return;["calcite-panel","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-popover","calcite-scrim"].forEach(t=>{switch(t){case"calcite-panel":customElements.get(t)||customElements.define(t,V);break;case"calcite-action":customElements.get(t)||M();break;case"calcite-action-menu":customElements.get(t)||B();break;case"calcite-icon":customElements.get(t)||O();break;case"calcite-loader":customElements.get(t)||_();break;case"calcite-popover":customElements.get(t)||L();break;case"calcite-scrim":customElements.get(t)||D();break}})}I();/*!
 * All material copyright ESRI, All Rights Reserved, unless otherwise specified.
 * See https://github.com/Esri/calcite-components/blob/master/LICENSE.md for details.
 * v1.0.8-next.4
 */const X={backButton:"back-button"},b={backLeft:"chevron-left",backRight:"chevron-right"},d={headerActionsStart:"header-actions-start",headerActionsEnd:"header-actions-end",headerMenuActions:"header-menu-actions",headerContent:"header-content",fab:"fab",footer:"footer",footerActions:"footer-actions"},Y="@keyframes in{0%{opacity:0}100%{opacity:1}}@keyframes in-down{0%{opacity:0;transform:translate3D(0, -5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-up{0%{opacity:0;transform:translate3D(0, 5px, 0)}100%{opacity:1;transform:translate3D(0, 0, 0)}}@keyframes in-scale{0%{opacity:0;transform:scale3D(0.95, 0.95, 1)}100%{opacity:1;transform:scale3D(1, 1, 1)}}:root{--calcite-animation-timing:calc(150ms * var(--calcite-internal-duration-factor));--calcite-internal-duration-factor:var(--calcite-duration-factor, 1);--calcite-internal-animation-timing-fast:calc(100ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-medium:calc(200ms * var(--calcite-internal-duration-factor));--calcite-internal-animation-timing-slow:calc(300ms * var(--calcite-internal-duration-factor))}.calcite-animate{opacity:0;animation-fill-mode:both;animation-duration:var(--calcite-animation-timing)}.calcite-animate__in{animation-name:in}.calcite-animate__in-down{animation-name:in-down}.calcite-animate__in-up{animation-name:in-up}.calcite-animate__in-scale{animation-name:in-scale}@media (prefers-reduced-motion: reduce){:root{--calcite-internal-duration-factor:0}}:host{box-sizing:border-box;background-color:var(--calcite-ui-foreground-1);color:var(--calcite-ui-text-2);font-size:var(--calcite-font-size--1)}:host *{box-sizing:border-box}:root{--calcite-floating-ui-transition:var(--calcite-animation-timing);--calcite-floating-ui-z-index:600}:host([hidden]){display:none}:host([disabled]){pointer-events:none;cursor:default;-webkit-user-select:none;user-select:none;opacity:var(--calcite-ui-opacity-disabled)}:host{position:relative;display:flex;inline-size:100%;flex:1 1 auto;overflow:hidden}:host([disabled]) ::slotted([calcite-hydrated][disabled]),:host([disabled]) [calcite-hydrated][disabled]{opacity:1}.back-button{border-width:0px;border-style:solid;border-color:var(--calcite-ui-border-3);border-inline-end-width:1px}",P=k(class extends C{constructor(){super(),this.__registerHost(),this.__attachShadow(),this.calciteFlowItemBack=h(this,"calciteFlowItemBack",6),this.calciteFlowItemScroll=h(this,"calciteFlowItemScroll",6),this.calciteFlowItemClose=h(this,"calciteFlowItemClose",6),this.handlePanelScroll=e=>{e.stopPropagation(),this.calciteFlowItemScroll.emit()},this.handlePanelClose=e=>{e.stopPropagation(),this.calciteFlowItemClose.emit()},this.backButtonClick=()=>{this.calciteFlowItemBack.emit()},this.setBackRef=e=>{this.backButtonEl=e},this.setContainerRef=e=>{this.containerEl=e},this.closable=!1,this.closed=!1,this.beforeBack=void 0,this.description=void 0,this.disabled=!1,this.heading=void 0,this.headingLevel=void 0,this.loading=!1,this.menuOpen=!1,this.messageOverrides=void 0,this.messages=void 0,this.showBackButton=!1,this.backButtonEl=void 0,this.defaultMessages=void 0,this.effectiveLocale=""}onMessagesChange(){}connectedCallback(){S(this),w(this)}async componentWillLoad(){await A(this),y(this)}componentDidRender(){v(this)}disconnectedCallback(){H(this),F(this)}componentDidLoad(){x(this)}effectiveLocaleChange(){z(this,this.effectiveLocale)}async setFocus(){await E(this);const{backButtonEl:e,containerEl:t}=this;if(e){e.setFocus();return}t==null||t.setFocus()}async scrollContentTo(e){var t;await((t=this.containerEl)==null?void 0:t.scrollContentTo(e))}renderBackButton(){const{el:e}=this,t=K(e)==="rtl",{showBackButton:a,backButtonClick:l,messages:s}=this,c=s.back,r=t?b.backRight:b.backLeft;return a?n("calcite-action",{"aria-label":c,class:X.backButton,icon:r,key:"flow-back-button",onClick:l,ref:this.setBackRef,scale:"s",slot:"header-actions-start",text:c}):null}render(){const{closable:e,closed:t,description:a,disabled:l,heading:s,headingLevel:c,loading:r,menuOpen:m,messages:f,backButtonEl:u}=this,g=f.back;return n(j,null,n("calcite-panel",{closable:e,closed:t,description:a,disabled:l,heading:s,headingLevel:c,loading:r,menuOpen:m,messageOverrides:f,onCalcitePanelClose:this.handlePanelClose,onCalcitePanelScroll:this.handlePanelScroll,ref:this.setContainerRef},this.renderBackButton(),n("slot",{name:d.headerActionsStart,slot:o.headerActionsStart}),n("slot",{name:d.headerActionsEnd,slot:o.headerActionsEnd}),n("slot",{name:d.headerContent,slot:o.headerContent}),n("slot",{name:d.headerMenuActions,slot:o.headerMenuActions}),n("slot",{name:d.fab,slot:o.fab}),n("slot",{name:d.footerActions,slot:o.footerActions}),n("slot",{name:d.footer,slot:o.footer}),n("slot",null)),u?n("calcite-tooltip",{label:g,overlayPositioning:"fixed",placement:"top",referenceElement:u},g):null)}static get assetsDirs(){return["assets"]}get el(){return this}static get watchers(){return{messageOverrides:["onMessagesChange"],effectiveLocale:["effectiveLocaleChange"]}}static get style(){return Y}},[1,"calcite-flow-item",{closable:[1540],closed:[1540],beforeBack:[16],description:[1],disabled:[516],heading:[1],headingLevel:[514,"heading-level"],loading:[516],menuOpen:[516,"menu-open"],messageOverrides:[1040],messages:[1040],showBackButton:[4,"show-back-button"],backButtonEl:[32],defaultMessages:[32],effectiveLocale:[32],setFocus:[64],scrollContentTo:[64]}]);function R(){if(typeof customElements=="undefined")return;["calcite-flow-item","calcite-action","calcite-action-menu","calcite-icon","calcite-loader","calcite-panel","calcite-popover","calcite-scrim","calcite-tooltip"].forEach(t=>{switch(t){case"calcite-flow-item":customElements.get(t)||customElements.define(t,P);break;case"calcite-action":customElements.get(t)||M();break;case"calcite-action-menu":customElements.get(t)||B();break;case"calcite-icon":customElements.get(t)||O();break;case"calcite-loader":customElements.get(t)||_();break;case"calcite-panel":customElements.get(t)||I();break;case"calcite-popover":customElements.get(t)||L();break;case"calcite-scrim":customElements.get(t)||D();break;case"calcite-tooltip":customElements.get(t)||J();break}})}R();const me=P,fe=R;export{me as CalciteFlowItem,fe as defineCustomElement};
