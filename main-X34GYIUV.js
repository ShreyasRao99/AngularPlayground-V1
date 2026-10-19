import{$ as Mi$1,$n as sD,$t as bo$1,A as GI,An as lt$1,At as WE,B as Iv,Bn as og,Bt as Zr,C as ED,Ct as Uh,D as Fd,Dn as kP,En as jt$2,Et as VD,F as HI,Fn as mu,G as KI,Gn as q$2,Gt as aE,H as Jp,Ht as _p,I as HP,In as nD,It as Wp,Jn as qh,Kn as qE,Kt as ag,L as Hn$1,Ln as ng,Lt as Z$4,M as Gi$1,Mn as mg,Mt as WP,N as Gp,Nn as mh,Nt as Wh,O as Fp,On as ka,Pn as mi$1,Pt as Wm,Q as M$2,Qn as ru,Qt as be$1,R as Hp,Rn as nt$3,Rt as ZD,S as Dt$3,St as UP,T as Et$2,Tn as jp,Un as pg,V as J$3,Vn as ou,Vt as _c,Wn as po$1,Wt as aD,X as Lc,Xn as rD,Y as LP,Yn as qp,Yt as am,Z as Ly,Zn as rm,Zt as b$2,_ as Cm,_n as iD,_r as yh,a as $i$1,at as Ni$1,b as Cr,br as zh,bt as Tr,cn as eD,cr as vp,dr as xD,dt as Op,en as bp,et as Mn$1,f as BP,fn as fg,fr as xe$1,ft as PP,g as Bo,gn as hl,gr as yg,gt as Qp,h as Bn$1,hn as hg,hr as ye$1,ht as Qh,i as $h,ir as sm,it as Ng,j as Gh,jn as me$2,k as GD,kn as kc,kt as Vp,l as A$1,ln as ea,lr as vr$1,lt as Oc,m as Bh,mr as xi$1,mt as Q$3,n as $I,nn as ce$3,nt as N,o as $n$1,on as df,or as tv,ot as Nu,p as Be$2,pn as gg,pr as xh,q as Kp,qn as qI,rn as cg,rr as si$1,rt as Nc,s as $p,sn as dg,sr as ur$1,tn as cD,tr as sg,u as AI,ur as vt$4,ut as Ol,v as Co$1,vr as z$3,vt as Rc,w as Er,wn as jP,wt as Ui$1,x as Cu,xn as im,xr as zp,yn as ig,yr as zD,yt as Re$1,z as It$4,zn as oe$3,zt as ZE}from"./chunk-C3qvLal_.js";import{a as jr,c as wn$1,i as gt$3,n as Br,o as sr$1,s as ue$3,t as $o$1}from"./chunk-D5FcjZHJ.js";var a=[`html`,`css`,`javascript`,`angular`,`performance`,`rxjs`,`signals`,`misc`,`behavioural`];var e={html:`HTML`,css:`CSS`,javascript:`JavaScript`,angular:`Angular`,performance:`Performance`,rxjs:`RxJS`,signals:`Signals`,misc:`Misc`,behavioural:`Behavioural`};function o(r){return e[r]??r}var t=a.filter(r=>r!==`behavioural`);var n=class{_box;_destroyed=new J$3;_resizeSubject=new J$3;_resizeObserver;_elementObservables=new Map;constructor(r){this._box=r,typeof ResizeObserver<`u`&&(this._resizeObserver=new ResizeObserver(e=>this._resizeSubject.next(e)))}observe(r){return this._elementObservables.has(r)||this._elementObservables.set(r,new M$2(e=>{let s=this._resizeSubject.subscribe(e);return this._resizeObserver?.observe(r,{box:this._box}),()=>{this._resizeObserver?.unobserve(r),s.unsubscribe(),this._elementObservables.delete(r)}}).pipe(Bn$1(e=>e.some(s=>s.target===r)),hg({bufferSize:1,refCount:!0}),Gh(this._destroyed))),this._elementObservables.get(r)}destroy(){this._destroyed.next(),this._destroyed.complete(),this._resizeSubject.complete(),this._elementObservables.clear()}};var z$2=(()=>{class t{_cleanupErrorListener;_observers=new Map;_ngZone=b$2(ye$1);constructor(){}ngOnDestroy(){for(let[,e]of this._observers)e.destroy();this._observers.clear(),this._cleanupErrorListener?.()}observe(e,s){let o=s?.box||`content-box`;return this._observers.has(o)||this._observers.set(o,new n(o)),this._observers.get(o).observe(e)}static ɵfac=function(s){return new(s||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var te$1;try{te$1=typeof Intl<`u`&&Intl.v8BreakIterator}catch{te$1=!1}var p$1=(()=>{class t{_platformId=b$2(im);isBrowser=this._platformId?wn$1(this._platformId):typeof document==`object`&&!!document;EDGE=this.isBrowser&&/(edge)/i.test(navigator.userAgent);TRIDENT=this.isBrowser&&/(msie|trident)/i.test(navigator.userAgent);BLINK=this.isBrowser&&!!(window.chrome||te$1)&&typeof CSS<`u`&&!this.EDGE&&!this.TRIDENT;WEBKIT=this.isBrowser&&/AppleWebKit/i.test(navigator.userAgent)&&!this.BLINK&&!this.EDGE&&!this.TRIDENT;IOS=this.isBrowser&&/iPad|iPhone|iPod/.test(navigator.userAgent)&&!(`MSStream`in window);FIREFOX=this.isBrowser&&/(firefox|minefield)/i.test(navigator.userAgent);ANDROID=this.isBrowser&&/android/i.test(navigator.userAgent)&&!this.TRIDENT;SAFARI=this.isBrowser&&/safari/i.test(navigator.userAgent)&&this.WEBKIT;static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function ie$2(t,n=0){return Pe$1(t)?Number(t):arguments.length===2?n:0}function Pe$1(t){return!isNaN(parseFloat(t))&&!isNaN(Number(t))}function v(t){return t instanceof Cr?t.nativeElement:t}var j$1=new WeakMap;var F$2=(()=>{class t{_appRef;_injector=b$2(oe$3);_environmentInjector=b$2(me$2);load(e){let i=this._appRef=this._appRef||this._injector.get(xi$1),s=j$1.get(i);s||(s={loaders:new Set,refs:[]},j$1.set(i,s),i.onDestroy(()=>{j$1.get(i)?.refs.forEach(r=>r.destroy()),j$1.delete(i)})),s.loaders.has(e)||(s.loaders.add(e),s.refs.push(UP(e,{environmentInjector:this._environmentInjector})))}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var V$2=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵcmp=WE({type:t,selectors:[[`ng-component`]],exportAs:[`cdkVisuallyHidden`],decls:0,vars:0,template:function(i,s){},styles:[`.cdk-visually-hidden {
  border: 0;
  clip: rect(0 0 0 0);
  height: 1px;
  margin: -1px;
  overflow: hidden;
  padding: 0;
  position: absolute;
  width: 1px;
  white-space: nowrap;
  outline: 0;
  -webkit-appearance: none;
  -moz-appearance: none;
  left: 0;
}
[dir=rtl] .cdk-visually-hidden {
  left: auto;
  right: 0;
}
`],encapsulation:2})}return t})();var H$1;function ht$2(){if(H$1===void 0&&(H$1=null,typeof window<`u`)){let t=window;if(t.trustedTypes!==void 0)try{H$1=t.trustedTypes.createPolicy(`angular#components`,{createHTML:n=>n})}catch(n){console.error(n)}}return H$1}function ft$1(t){return ht$2()?.createHTML(t)||t}function Be$1(t,n,e){t.innerHTML=ft$1(e.sanitize(Z$4.HTML,n)||``)}function ne$2(t){return Array.isArray(t)?t:[t]}var Ue$2=new Set;var E$2;var W$2=(()=>{class t{_platform=b$2(p$1);_nonce=b$2(am,{optional:!0});_matchMedia;constructor(){this._matchMedia=this._platform.isBrowser&&window.matchMedia?window.matchMedia.bind(window):_t$1}matchMedia(e){return(this._platform.WEBKIT||this._platform.BLINK)&&mt$2(e,this._nonce),this._matchMedia(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function mt$2(t,n){if(!Ue$2.has(t))try{E$2||(E$2=document.createElement(`style`),n&&E$2.setAttribute(`nonce`,n),E$2.setAttribute(`type`,`text/css`),document.head.appendChild(E$2)),E$2.sheet&&(E$2.sheet.insertRule(`@media ${t.replace(/[{}]/g,``)} {body{ }}`,0),Ue$2.add(t))}catch(e){console.error(e)}}function _t$1(t){return{matches:t===`all`||t===``,media:t,addListener:()=>{},removeListener:()=>{}}}var se$1=(()=>{class t{_mediaMatcher=b$2(W$2);_zone=b$2(ye$1);_queries=new Map;_destroySubject=new J$3;ngOnDestroy(){this._destroySubject.next(),this._destroySubject.complete()}isMatched(e){return Ke$1(ne$2(e)).some(s=>this._registerQuery(s).mql.matches)}observe(e){let s=Ke$1(ne$2(e)).map(a=>this._registerQuery(a).observable),r=ng(s);return r=Zr(r.pipe($i$1(1)),r.pipe(gg(1),ag(0))),r.pipe(vt$4(a=>{let d={matches:!1,breakpoints:{}};return a.forEach(({matches:g,query:lt})=>{d.matches=d.matches||g,d.breakpoints[lt]=g}),d}))}_registerQuery(e){if(this._queries.has(e))return this._queries.get(e);let i=this._mediaMatcher.matchMedia(e),r={observable:new M$2(a=>{let d=g=>this._zone.run(()=>a.next(g));return i.addListener(d),()=>{i.removeListener(d)}}).pipe(Wh(i),vt$4(({matches:a})=>({query:e,matches:a})),Gh(this._destroySubject)),mql:i};return this._queries.set(e,r),r}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function Ke$1(t){return t.map(n=>n.split(`,`)).reduce((n,e)=>n.concat(e)).map(n=>n.trim())}function re$1(t){return t.buttons===0||t.detail===0}function oe$2(t){let n=t.touches&&t.touches[0]||t.changedTouches&&t.changedTouches[0];return!!n&&n.identifier===-1&&(n.radiusX==null||n.radiusX===1)&&(n.radiusY==null||n.radiusY===1)}var ae$1;function pt$1(){if(ae$1==null){let t=typeof document<`u`?document.head:null;ae$1=!!(t&&(t.createShadowRoot||t.attachShadow))}return ae$1}function je$2(t){if(pt$1()){let n=t.getRootNode?t.getRootNode():null;if(typeof ShadowRoot<`u`&&ShadowRoot&&n instanceof ShadowRoot)return n}return null}function hi$1(){let t=typeof document<`u`&&document?document.activeElement:null;for(;t&&t.shadowRoot;){let n=t.shadowRoot.activeElement;if(n===t)break;t=n}return t}function w$1(t){if(t.composedPath)try{return t.composedPath()[0]}catch{}return t.target}var k$1;function gt$2(){if(k$1==null&&typeof window<`u`)try{window.addEventListener(`test`,null,Object.defineProperty({},"passive",{get:()=>k$1=!0}))}finally{k$1=k$1||!1}return k$1}function He$1(t){return gt$2()?t:!!t.capture}var Ve$2=new A$1(`cdk-input-modality-detector-options`);var We$2={ignoreKeys:[18,17,224,91,16]};var $e$2=650;var ce$2={passive:!0,capture:!0};var Ge=(()=>{class t{_platform=b$2(p$1);_listenerCleanups;modalityDetected;modalityChanged;get mostRecentModality(){return this._modality.value}_mostRecentTarget=null;_modality=new $n$1(null);_options;_lastTouchMs=0;_onKeydown=e=>{this._options?.ignoreKeys?.some(i=>i===e.keyCode)||(this._modality.next(`keyboard`),this._mostRecentTarget=w$1(e))};_onMousedown=e=>{Date.now()-this._lastTouchMs<$e$2||(this._modality.next(re$1(e)?`keyboard`:`mouse`),this._mostRecentTarget=w$1(e))};_onTouchstart=e=>{if(oe$2(e)){this._modality.next(`keyboard`);return}this._lastTouchMs=Date.now(),this._modality.next(`touch`),this._mostRecentTarget=w$1(e)};constructor(){let e=b$2(ye$1),i=b$2(ur$1),s=b$2(Ve$2,{optional:!0});if(this._options=q$2(q$2({},We$2),s),this.modalityDetected=this._modality.pipe(gg(1)),this.modalityChanged=this.modalityDetected.pipe(cg()),this._platform.isBrowser){let r=b$2(Er).createRenderer(null,null);this._listenerCleanups=e.runOutsideAngular(()=>[r.listen(i,`keydown`,this._onKeydown,ce$2),r.listen(i,`mousedown`,this._onMousedown,ce$2),r.listen(i,`touchstart`,this._onTouchstart,ce$2)])}}ngOnDestroy(){this._modality.complete(),this._listenerCleanups?.forEach(e=>e())}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var L=(function(t){return t[t.IMMEDIATE=0]=`IMMEDIATE`,t[t.EVENTUAL=1]=`EVENTUAL`,t})(L||{});var Ze$1=new A$1(`cdk-focus-monitor-default-options`);var $$2=He$1({passive:!0,capture:!0});var bt$2=(()=>{class t{_ngZone=b$2(ye$1);_platform=b$2(p$1);_inputModalityDetector=b$2(Ge);_origin=null;_lastFocusOrigin=null;_windowFocused=!1;_windowFocusTimeoutId;_originTimeoutId;_originFromTouchInteraction=!1;_elementInfo=new Map;_monitoredElementCount=0;_rootNodeFocusListenerCount=new Map;_detectionMode;_windowFocusListener=()=>{this._windowFocused=!0,this._windowFocusTimeoutId=setTimeout(()=>this._windowFocused=!1)};_document=b$2(ur$1);_stopInputModalityDetector=new J$3;constructor(){let e=b$2(Ze$1,{optional:!0});this._detectionMode=e?.detectionMode||L.IMMEDIATE}_rootNodeFocusAndBlurListener=e=>{let i=w$1(e);for(let s=i;s;s=s.parentElement)e.type===`focus`?this._onFocus(e,s):this._onBlur(e,s)};monitor(e,i=!1){let s=v(e);if(!this._platform.isBrowser||s.nodeType!==1)return Bh();let r=je$2(s)||this._document,a=this._elementInfo.get(s);if(a)return i&&(a.checkChildren=!0),a.subject;let d={checkChildren:i,subject:new J$3,rootNode:r};return this._elementInfo.set(s,d),this._registerGlobalListeners(d),d.subject}stopMonitoring(e){let i=v(e),s=this._elementInfo.get(i);s&&(s.subject.complete(),this._setClasses(i),this._elementInfo.delete(i),this._removeGlobalListeners(s))}focusVia(e,i,s){let r=v(e);r===this._document.activeElement?this._getClosestElementsInfo(r).forEach(([d,g])=>this._originChanged(d,i,g)):(this._setOrigin(i),typeof r.focus==`function`&&r.focus(s))}ngOnDestroy(){this._elementInfo.forEach((e,i)=>this.stopMonitoring(i))}_getWindow(){return this._document.defaultView||window}_getFocusOrigin(e){return this._origin?this._originFromTouchInteraction?this._shouldBeAttributedToTouch(e)?`touch`:`program`:this._origin:this._windowFocused&&this._lastFocusOrigin?this._lastFocusOrigin:e&&this._isLastInteractionFromInputLabel(e)?`mouse`:`program`}_shouldBeAttributedToTouch(e){return this._detectionMode===L.EVENTUAL||!!e?.contains(this._inputModalityDetector._mostRecentTarget)}_setClasses(e,i){e.classList.toggle(`cdk-focused`,!!i),e.classList.toggle(`cdk-touch-focused`,i===`touch`),e.classList.toggle(`cdk-keyboard-focused`,i===`keyboard`),e.classList.toggle(`cdk-mouse-focused`,i===`mouse`),e.classList.toggle(`cdk-program-focused`,i===`program`)}_setOrigin(e,i=!1){this._ngZone.runOutsideAngular(()=>{if(this._origin=e,this._originFromTouchInteraction=e===`touch`&&i,this._detectionMode===L.IMMEDIATE){clearTimeout(this._originTimeoutId);let s=this._originFromTouchInteraction?$e$2:1;this._originTimeoutId=setTimeout(()=>this._origin=null,s)}})}_onFocus(e,i){let s=this._elementInfo.get(i),r=w$1(e);!s||!s.checkChildren&&i!==r||this._originChanged(i,this._getFocusOrigin(r),s)}_onBlur(e,i){let s=this._elementInfo.get(i);!s||s.checkChildren&&e.relatedTarget instanceof Node&&i.contains(e.relatedTarget)||(this._setClasses(i),this._emitOrigin(s,null))}_emitOrigin(e,i){e.subject.observers.length&&this._ngZone.run(()=>e.subject.next(i))}_registerGlobalListeners(e){if(!this._platform.isBrowser)return;let i=e.rootNode,s=this._rootNodeFocusListenerCount.get(i)||0;s||this._ngZone.runOutsideAngular(()=>{i.addEventListener(`focus`,this._rootNodeFocusAndBlurListener,$$2),i.addEventListener(`blur`,this._rootNodeFocusAndBlurListener,$$2)}),this._rootNodeFocusListenerCount.set(i,s+1),++this._monitoredElementCount===1&&(this._ngZone.runOutsideAngular(()=>{this._getWindow().addEventListener(`focus`,this._windowFocusListener)}),this._inputModalityDetector.modalityDetected.pipe(Gh(this._stopInputModalityDetector)).subscribe(r=>{this._setOrigin(r,!0)}))}_removeGlobalListeners(e){let i=e.rootNode;if(this._rootNodeFocusListenerCount.has(i)){let s=this._rootNodeFocusListenerCount.get(i);s>1?this._rootNodeFocusListenerCount.set(i,s-1):(i.removeEventListener(`focus`,this._rootNodeFocusAndBlurListener,$$2),i.removeEventListener(`blur`,this._rootNodeFocusAndBlurListener,$$2),this._rootNodeFocusListenerCount.delete(i))}--this._monitoredElementCount||(this._getWindow().removeEventListener(`focus`,this._windowFocusListener),this._stopInputModalityDetector.next(),clearTimeout(this._windowFocusTimeoutId),clearTimeout(this._originTimeoutId))}_originChanged(e,i,s){this._setClasses(e,i),this._emitOrigin(s,i),this._lastFocusOrigin=i}_getClosestElementsInfo(e){let i=[];return this._elementInfo.forEach((s,r)=>{(r===e||s.checkChildren&&r.contains(e))&&i.push([r,s])}),i}_isLastInteractionFromInputLabel(e){let{_mostRecentTarget:i,mostRecentModality:s}=this._inputModalityDetector;if(s!==`mouse`||!i||i===e||e.nodeName!==`INPUT`&&e.nodeName!==`TEXTAREA`||e.disabled)return!1;let r=e.labels;if(r){for(let a=0;a<r.length;a++)if(r[a].contains(i))return!0}return!1}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function yt$3(t){if(t.type===`characterData`&&t.target instanceof Comment)return!0;if(t.type===`childList`){for(let n=0;n<t.addedNodes.length;n++)if(!(t.addedNodes[n]instanceof Comment))return!1;for(let n=0;n<t.removedNodes.length;n++)if(!(t.removedNodes[n]instanceof Comment))return!1;return!0}return!1}var ze$1=(()=>{class t{create(e){return typeof MutationObserver>`u`?null:new MutationObserver(e)}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var Ye=(()=>{class t{_mutationObserverFactory=b$2(ze$1);_observedElements=new Map;_ngZone=b$2(ye$1);ngOnDestroy(){this._observedElements.forEach((e,i)=>this._cleanupObserver(i))}observe(e){let i=v(e);return new M$2(s=>{let a=this._observeElement(i).pipe(vt$4(d=>d.filter(g=>!yt$3(g))),Bn$1(d=>!!d.length)).subscribe(d=>{this._ngZone.run(()=>{s.next(d)})});return()=>{a.unsubscribe(),this._unobserveElement(i)}})}_observeElement(e){return this._ngZone.runOutsideAngular(()=>{if(this._observedElements.has(e))this._observedElements.get(e).count++;else{let i=new J$3,s=this._mutationObserverFactory.create(r=>i.next(r));s&&s.observe(e,{characterData:!0,childList:!0,subtree:!0}),this._observedElements.set(e,{observer:s,stream:i,count:1})}return this._observedElements.get(e).stream})}_unobserveElement(e){this._observedElements.has(e)&&(this._observedElements.get(e).count--,this._observedElements.get(e).count||this._cleanupObserver(e))}_cleanupObserver(e){if(this._observedElements.has(e)){let{observer:i,stream:s}=this._observedElements.get(e);i&&i.disconnect(),s.complete(),this._observedElements.delete(e)}}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var Hi$1=(()=>{class t{_contentObserver=b$2(Ye);_elementRef=b$2(Cr);event=new Be$2;get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._disabled?this._unsubscribe():this._subscribe()}_disabled=!1;get debounce(){return this._debounce}set debounce(e){this._debounce=ie$2(e),this._subscribe()}_debounce;_currentSubscription=null;ngAfterContentInit(){!this._currentSubscription&&!this.disabled&&this._subscribe()}ngOnDestroy(){this._unsubscribe()}_subscribe(){this._unsubscribe();let e=this._contentObserver.observe(this._elementRef);this._currentSubscription=(this.debounce?e.pipe(ag(this.debounce)):e).subscribe(this.event)}_unsubscribe(){this._currentSubscription?.unsubscribe()}static ɵfac=function(i){return new(i||t)};static ɵdir=ZE({type:t,selectors:[[``,`cdkObserveContent`,``]],inputs:{disabled:[2,`cdkObserveContentDisabled`,`disabled`,HP],debounce:`debounce`},outputs:{event:`cdkObserveContent`},exportAs:[`cdkObserveContent`]})}return t})();var Qe=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=qE({type:t});static ɵinj=Ol({providers:[ze$1]})}return t})();var vt$3=(()=>{class t{_platform=b$2(p$1);isDisabled(e){return e.hasAttribute(`disabled`)}isVisible(e){return At$2(e)&&getComputedStyle(e).visibility===`visible`}isTabbable(e){if(!this._platform.isBrowser)return!1;let i=Et$1(Ot(e));if(i&&(Xe$1(i)===-1||!this.isVisible(i)))return!1;let s=e.nodeName.toLowerCase(),r=Xe$1(e);return e.hasAttribute(`contenteditable`)?r!==-1:s===`iframe`||s===`object`||this._platform.WEBKIT&&this._platform.IOS&&!Dt$2(e)?!1:s===`audio`?e.hasAttribute(`controls`)?r!==-1:!1:s===`video`?r===-1?!1:r!==null?!0:this._platform.FIREFOX||e.hasAttribute(`controls`):e.tabIndex>=0}isFocusable(e,i){return Nt$3(e)&&!this.isDisabled(e)&&(i?.ignoreVisibility||this.isVisible(e))}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function Et$1(t){try{return t.frameElement}catch{return null}}function At$2(t){return!!(t.offsetWidth||t.offsetHeight||typeof t.getClientRects==`function`&&t.getClientRects().length)}function It$3(t){let n=t.nodeName.toLowerCase();return n===`input`||n===`select`||n===`button`||n===`textarea`}function Mt$3(t){return Ct$3(t)&&t.type==`hidden`}function Tt$4(t){return wt$5(t)&&t.hasAttribute(`href`)}function Ct$3(t){return t.nodeName.toLowerCase()==`input`}function wt$5(t){return t.nodeName.toLowerCase()==`a`}function et$2(t){if(!t.hasAttribute(`tabindex`)||t.tabIndex===void 0)return!1;let n=t.getAttribute(`tabindex`);return!!(n&&!isNaN(parseInt(n,10)))}function Xe$1(t){if(!et$2(t))return null;let n=parseInt(t.getAttribute(`tabindex`)||``,10);return isNaN(n)?-1:n}function Dt$2(t){let n=t.nodeName.toLowerCase(),e=n===`input`&&t.type;return e===`text`||e===`password`||n===`select`||n===`textarea`}function Nt$3(t){return Mt$3(t)?!1:It$3(t)||Tt$4(t)||t.hasAttribute(`contenteditable`)||et$2(t)}function Ot(t){return t.ownerDocument&&t.ownerDocument.defaultView||window}var ue$2=class{_element;_checker;_ngZone;_document;_injector;_startAnchor=null;_endAnchor=null;_hasAttached=!1;startAnchorListener=()=>{!this.focusLastTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};endAnchorListener=()=>{!this.focusFirstTabbableElement()&&this._checker.isFocusable(this._element)&&this._element.focus()};get enabled(){return this._enabled}set enabled(n){this._enabled=n,this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_enabled=!0;constructor(n,e,i,s,r=!1,a){this._element=n,this._checker=e,this._ngZone=i,this._document=s,this._injector=a,r||this.attachAnchors()}destroy(){let n=this._startAnchor,e=this._endAnchor;n&&(n.removeEventListener(`focus`,this.startAnchorListener),n.remove()),e&&(e.removeEventListener(`focus`,this.endAnchorListener),e.remove()),this._startAnchor=this._endAnchor=null,this._hasAttached=!1}attachAnchors(){return this._hasAttached?!0:(this._ngZone.runOutsideAngular(()=>{this._startAnchor||(this._startAnchor=this._createAnchor(),this._startAnchor.addEventListener(`focus`,this.startAnchorListener)),this._endAnchor||(this._endAnchor=this._createAnchor(),this._endAnchor.addEventListener(`focus`,this.endAnchorListener))}),this._element.parentNode&&(this._element.parentNode.insertBefore(this._startAnchor,this._element),this._element.parentNode.insertBefore(this._endAnchor,this._element.nextSibling),this._hasAttached=!0),this._hasAttached)}focusInitialElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusInitialElement(n)))})}focusFirstTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusFirstTabbableElement(n)))})}focusLastTabbableElementWhenReady(n){return new Promise(e=>{this._executeOnStable(()=>e(this.focusLastTabbableElement(n)))})}_getRegionBoundary(n){let e=this._element.querySelectorAll(`[cdk-focus-region-${n}], [cdkFocusRegion${n}], [cdk-focus-${n}]`);return n==`start`?e.length?e[0]:this._getFirstTabbableElement(this._element):e.length?e[e.length-1]:this._getLastTabbableElement(this._element)}focusInitialElement(n){let e=this._element.querySelector(`[cdk-focus-initial], [cdkFocusInitial]`);if(e){if(!this._checker.isFocusable(e)){let i=this._getFirstTabbableElement(e);return i?.focus(n),!!i}return e.focus(n),!0}return this.focusFirstTabbableElement(n)}focusFirstTabbableElement(n){let e=this._getRegionBoundary(`start`);return e&&e.focus(n),!!e}focusLastTabbableElement(n){let e=this._getRegionBoundary(`end`);return e&&e.focus(n),!!e}hasAttached(){return this._hasAttached}_getFirstTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=0;i<e.length;i++){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getFirstTabbableElement(e[i]):null;if(s)return s}return null}_getLastTabbableElement(n){if(this._checker.isFocusable(n)&&this._checker.isTabbable(n))return n;let e=n.children;for(let i=e.length-1;i>=0;i--){let s=e[i].nodeType===this._document.ELEMENT_NODE?this._getLastTabbableElement(e[i]):null;if(s)return s}return null}_createAnchor(){let n=this._document.createElement(`div`);return this._toggleAnchorTabIndex(this._enabled,n),n.classList.add(`cdk-visually-hidden`),n.classList.add(`cdk-focus-trap-anchor`),n.setAttribute(`aria-hidden`,`true`),n}_toggleAnchorTabIndex(n,e){n?e.setAttribute(`tabindex`,`0`):e.removeAttribute(`tabindex`)}toggleAnchors(n){this._startAnchor&&this._endAnchor&&(this._toggleAnchorTabIndex(n,this._startAnchor),this._toggleAnchorTabIndex(n,this._endAnchor))}_executeOnStable(n){tv(n,{injector:this._injector})}};var St$4=(()=>{class t{_checker=b$2(vt$3);_ngZone=b$2(ye$1);_document=b$2(ur$1);_injector=b$2(oe$3);constructor(){b$2(F$2).load(V$2)}create(e,i=!1){return new ue$2(e,this._checker,this._ngZone,this._document,i,this._injector)}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var tt$3=new A$1(`liveAnnouncerElement`,{providedIn:`root`,factory:()=>null});var it$3=new A$1(`LIVE_ANNOUNCER_DEFAULT_OPTIONS`);var Ft=0;var kt$2=(()=>{class t{_ngZone=b$2(ye$1);_defaultOptions=b$2(it$3,{optional:!0});_liveElement;_document=b$2(ur$1);_sanitizer=b$2(Br);_previousTimeout;_currentPromise;_currentResolve;constructor(){let e=b$2(tt$3,{optional:!0});this._liveElement=e||this._createLiveElement()}announce(e,...i){let s=this._defaultOptions,r,a;return i.length===1&&typeof i[0]==`number`?a=i[0]:[r,a]=i,this.clear(),clearTimeout(this._previousTimeout),r||(r=s&&s.politeness?s.politeness:`polite`),a==null&&s&&(a=s.duration),this._liveElement.setAttribute(`aria-live`,r),this._liveElement.id&&this._exposeAnnouncerToModals(this._liveElement.id),this._ngZone.runOutsideAngular(()=>(this._currentPromise||(this._currentPromise=new Promise(d=>this._currentResolve=d)),clearTimeout(this._previousTimeout),this._previousTimeout=setTimeout(()=>{!e||typeof e==`string`?this._liveElement.textContent=e:Be$1(this._liveElement,e,this._sanitizer),typeof a==`number`&&(this._previousTimeout=setTimeout(()=>this.clear(),a)),this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0},100),this._currentPromise))}clear(){this._liveElement&&(this._liveElement.textContent=``)}ngOnDestroy(){clearTimeout(this._previousTimeout),this._liveElement?.remove(),this._liveElement=null,this._currentResolve?.(),this._currentPromise=this._currentResolve=void 0}_createLiveElement(){let e=`cdk-live-announcer-element`,i=this._document.getElementsByClassName(e),s=this._document.createElement(`div`);for(let r=0;r<i.length;r++)i[r].remove();return s.classList.add(e),s.classList.add(`cdk-visually-hidden`),s.setAttribute(`aria-atomic`,`true`),s.setAttribute(`aria-live`,`polite`),s.id=`cdk-live-announcer-${Ft++}`,this._document.body.appendChild(s),s}_exposeAnnouncerToModals(e){let i=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let s=0;s<i.length;s++){let r=i[s],a=r.getAttribute(`aria-owns`);a?a.indexOf(e)===-1&&r.setAttribute(`aria-owns`,a+` `+e):r.setAttribute(`aria-owns`,e)}}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var b$1=(function(t){return t[t.NONE=0]=`NONE`,t[t.BLACK_ON_WHITE=1]=`BLACK_ON_WHITE`,t[t.WHITE_ON_BLACK=2]=`WHITE_ON_BLACK`,t})(b$1||{});var qe$2=`cdk-high-contrast-black-on-white`;var Je$1=`cdk-high-contrast-white-on-black`;var de$1=`cdk-high-contrast-active`;var nt$2=(()=>{class t{_platform=b$2(p$1);_hasCheckedHighContrastMode=!1;_document=b$2(ur$1);_breakpointSubscription;constructor(){this._breakpointSubscription=b$2(se$1).observe(`(forced-colors: active)`).subscribe(()=>{this._hasCheckedHighContrastMode&&(this._hasCheckedHighContrastMode=!1,this._applyBodyHighContrastModeCssClasses())})}getHighContrastMode(){if(!this._platform.isBrowser)return b$1.NONE;let e=this._document.createElement(`div`);e.style.backgroundColor=`rgb(1,2,3)`,e.style.position=`absolute`,this._document.body.appendChild(e);let i=this._document.defaultView||window,s=i&&i.getComputedStyle?i.getComputedStyle(e):null,r=(s&&s.backgroundColor||``).replace(/ /g,``);switch(e.remove(),r){case`rgb(0,0,0)`:case`rgb(45,50,54)`:case`rgb(32,32,32)`:return b$1.WHITE_ON_BLACK;case`rgb(255,255,255)`:case`rgb(255,250,239)`:return b$1.BLACK_ON_WHITE}return b$1.NONE}ngOnDestroy(){this._breakpointSubscription.unsubscribe()}_applyBodyHighContrastModeCssClasses(){if(!this._hasCheckedHighContrastMode&&this._platform.isBrowser&&this._document.body){let e=this._document.body.classList;e.remove(de$1,qe$2,Je$1),this._hasCheckedHighContrastMode=!0;let i=this.getHighContrastMode();i===b$1.BLACK_ON_WHITE?e.add(de$1,qe$2):i===b$1.WHITE_ON_BLACK&&e.add(de$1,Je$1)}}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var Lt$1=(()=>{class t{constructor(){b$2(nt$2)._applyBodyHighContrastModeCssClasses()}static ɵfac=function(i){return new(i||t)};static ɵmod=qE({type:t});static ɵinj=Ol({imports:[Qe]})}return t})();function st$2(t,...n){return n.length?n.some(e=>t[e]):t.altKey||t.shiftKey||t.ctrlKey||t.metaKey}var rt$1=new Map;var le$2=class t{_appId=b$2(Cu);static _infix=`a${Math.floor(Math.random()*1e5).toString()}`;getId(n,e=!1){this._appId!==`ng`&&(n+=this._appId);let i=rt$1.get(n);return i===void 0?i=0:i++,rt$1.set(n,i),`${n}${e?t._infix+`-`:``}${i}`}static ɵfac=function(e){return new(e||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})};var xt$1=200;var G$3=class{_letterKeyStream=new J$3;_items=[];_selectedItemIndex=-1;_pressedLetters=[];_skipPredicateFn;_selectedItem=new J$3;selectedItem=this._selectedItem;constructor(n,e){let i=typeof e?.debounceInterval==`number`?e.debounceInterval:xt$1;e?.skipPredicate&&(this._skipPredicateFn=e.skipPredicate),this.setItems(n),this._setupKeyHandler(i)}destroy(){this._pressedLetters=[],this._letterKeyStream.complete(),this._selectedItem.complete()}setCurrentSelectedItemIndex(n){this._selectedItemIndex=n}setItems(n){this._items=n}handleKey(n){let e=n.keyCode;n.key&&n.key.length===1?this._letterKeyStream.next(n.key.toLocaleUpperCase()):(e>=65&&e<=90||e>=48&&e<=57)&&this._letterKeyStream.next(String.fromCharCode(e))}isTyping(){return this._pressedLetters.length>0}reset(){this._pressedLetters=[]}_setupKeyHandler(n){this._letterKeyStream.pipe(yg(e=>this._pressedLetters.push(e)),ag(n),Bn$1(()=>this._pressedLetters.length>0),vt$4(()=>this._pressedLetters.join(``).toLocaleUpperCase())).subscribe(e=>{for(let i=1;i<this._items.length+1;i++){let s=(this._selectedItemIndex+i)%this._items.length,r=this._items[s];if(!this._skipPredicateFn?.(r)&&r.getLabel?.().toLocaleUpperCase().trim().indexOf(e)===0){this._selectedItem.next(r);break}}this._pressedLetters=[]})}};var Z$3=class{_items;_activeItemIndex=Bo(-1);_activeItem=Bo(null);_wrap=!1;_typeaheadSubscription=Q$3.EMPTY;_itemChangesSubscription;_vertical=!0;_horizontal=null;_allowedModifierKeys=[];_homeAndEnd=!1;_pageUpAndDown={enabled:!1,delta:10};_effectRef;_typeahead;_skipPredicateFn=n=>n.disabled;constructor(n,e){this._items=n,n instanceof si$1?this._itemChangesSubscription=n.changes.subscribe(i=>this._itemsChanged(i.toArray())):ea(n)&&(this._effectRef=Nu(()=>this._itemsChanged(n()),{injector:e}))}tabOut=new J$3;change=new J$3;skipPredicate(n){return this._skipPredicateFn=n,this}withWrap(n=!0){return this._wrap=n,this}withVerticalOrientation(n=!0){return this._vertical=n,this}withHorizontalOrientation(n){return this._horizontal=n,this}withAllowedModifierKeys(n){return this._allowedModifierKeys=n,this}withTypeAhead(n=200){this._typeaheadSubscription.unsubscribe();let e=this._getItemsArray();return this._typeahead=new G$3(e,{debounceInterval:typeof n==`number`?n:void 0,skipPredicate:i=>this._skipPredicateFn(i)}),this._typeaheadSubscription=this._typeahead.selectedItem.subscribe(i=>{this.setActiveItem(i)}),this}cancelTypeahead(){return this._typeahead?.reset(),this}withHomeAndEnd(n=!0){return this._homeAndEnd=n,this}withPageUpDown(n=!0,e=10){return this._pageUpAndDown={enabled:n,delta:e},this}setActiveItem(n){let e=this._activeItem();this.updateActiveItem(n),this._activeItem()!==e&&this.change.next(this._activeItemIndex())}onKeydown(n){let e=n.keyCode,s=[`altKey`,`ctrlKey`,`metaKey`,`shiftKey`].every(r=>!n[r]||this._allowedModifierKeys.indexOf(r)>-1);switch(e){case 9:this.tabOut.next();return;case 40:if(this._vertical&&s){this.setNextItemActive();break}else return;case 38:if(this._vertical&&s){this.setPreviousItemActive();break}else return;case 39:if(this._horizontal&&s){this._horizontal===`rtl`?this.setPreviousItemActive():this.setNextItemActive();break}else return;case 37:if(this._horizontal&&s){this._horizontal===`rtl`?this.setNextItemActive():this.setPreviousItemActive();break}else return;case 36:if(this._homeAndEnd&&s){this.setFirstItemActive();break}else return;case 35:if(this._homeAndEnd&&s){this.setLastItemActive();break}else return;case 33:if(this._pageUpAndDown.enabled&&s){let r=this._activeItemIndex()-this._pageUpAndDown.delta;this._setActiveItemByIndex(r>0?r:0,1);break}else return;case 34:if(this._pageUpAndDown.enabled&&s){let r=this._activeItemIndex()+this._pageUpAndDown.delta,a=this._getItemsArray().length;this._setActiveItemByIndex(r<a?r:a-1,-1);break}else return;default:(s||st$2(n,`shiftKey`))&&this._typeahead?.handleKey(n);return}this._typeahead?.reset(),n.preventDefault()}get activeItemIndex(){return this._activeItemIndex()}get activeItem(){return this._activeItem()}isTyping(){return!!this._typeahead&&this._typeahead.isTyping()}setFirstItemActive(){this._setActiveItemByIndex(0,1)}setLastItemActive(){this._setActiveItemByIndex(this._getItemsArray().length-1,-1)}setNextItemActive(){this._activeItemIndex()<0?this.setFirstItemActive():this._setActiveItemByDelta(1)}setPreviousItemActive(){this._activeItemIndex()<0&&this._wrap?this.setLastItemActive():this._setActiveItemByDelta(-1)}updateActiveItem(n){let e=this._getItemsArray(),i=typeof n==`number`?n:e.indexOf(n),s=e[i];this._activeItem.set(s??null),this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i)}destroy(){this._typeaheadSubscription.unsubscribe(),this._itemChangesSubscription?.unsubscribe(),this._effectRef?.destroy(),this._typeahead?.destroy(),this.tabOut.complete(),this.change.complete()}_setActiveItemByDelta(n){this._wrap?this._setActiveInWrapMode(n):this._setActiveInDefaultMode(n)}_setActiveInWrapMode(n){let e=this._getItemsArray();for(let i=1;i<=e.length;i++){let s=(this._activeItemIndex()+n*i+e.length)%e.length,r=e[s];if(!this._skipPredicateFn(r)){this.setActiveItem(s);return}}}_setActiveInDefaultMode(n){this._setActiveItemByIndex(this._activeItemIndex()+n,n)}_setActiveItemByIndex(n,e){let i=this._getItemsArray();if(i[n]){for(;this._skipPredicateFn(i[n]);)if(n+=e,!i[n])return;this.setActiveItem(n)}}_getItemsArray(){return ea(this._items)?this._items():this._items instanceof si$1?this._items.toArray():this._items}_itemsChanged(n){this._typeahead?.setItems(n);let e=this._activeItem();if(e){let i=n.indexOf(e);i>-1&&i!==this._activeItemIndex()&&(this._activeItemIndex.set(i),this._typeahead?.setCurrentSelectedItemIndex(i))}}};var he$1=class extends Z$3{_origin=`program`;setFocusOrigin(n){return this._origin=n,this}setActiveItem(n){super.setActiveItem(n),this.activeItem&&this.activeItem.focus(this._origin)}};var at$1=` `;function Rt$2(t,n,e){let i=Y$2(t,n);e=e.trim(),!i.some(s=>s.trim()===e)&&(i.push(e),t.setAttribute(n,i.join(at$1)))}function Pt$1(t,n,e){let i=Y$2(t,n);e=e.trim();let s=i.filter(r=>r!==e);s.length?t.setAttribute(n,s.join(at$1)):t.removeAttribute(n)}function Y$2(t,n){return t.getAttribute(n)?.match(/\S+/g)??[]}var ct$1=`cdk-describedby-message`;var z$1=`cdk-describedby-host`;var me$1=0;var Kn=(()=>{class t{_platform=b$2(p$1);_document=b$2(ur$1);_messageRegistry=new Map;_messagesContainer=null;_id=`${me$1++}`;constructor(){b$2(F$2).load(V$2),this._id=b$2(Cu)+`-`+me$1++}describe(e,i,s){if(!this._canBeDescribed(e,i))return;let r=fe$1(i,s);typeof i!=`string`?(ot$2(i,this._id),this._messageRegistry.set(r,{messageElement:i,referenceCount:0})):this._messageRegistry.has(r)||this._createMessageElement(i,s),this._isElementDescribedByMessage(e,r)||this._addMessageReference(e,r)}removeDescription(e,i,s){if(!i||!this._isElementNode(e))return;let r=fe$1(i,s);if(this._isElementDescribedByMessage(e,r)&&this._removeMessageReference(e,r),typeof i==`string`){let a=this._messageRegistry.get(r);a&&a.referenceCount===0&&this._deleteMessageElement(r)}this._messagesContainer?.childNodes.length===0&&(this._messagesContainer.remove(),this._messagesContainer=null)}ngOnDestroy(){let e=this._document.querySelectorAll(`[${z$1}="${this._id}"]`);for(let i=0;i<e.length;i++)this._removeCdkDescribedByReferenceIds(e[i]),e[i].removeAttribute(z$1);this._messagesContainer?.remove(),this._messagesContainer=null,this._messageRegistry.clear()}_createMessageElement(e,i){let s=this._document.createElement(`div`);ot$2(s,this._id),s.textContent=e,i&&s.setAttribute(`role`,i),this._createMessagesContainer(),this._messagesContainer.appendChild(s),this._messageRegistry.set(fe$1(e,i),{messageElement:s,referenceCount:0})}_deleteMessageElement(e){this._messageRegistry.get(e)?.messageElement?.remove(),this._messageRegistry.delete(e)}_createMessagesContainer(){if(this._messagesContainer)return;let e=`cdk-describedby-message-container`,i=this._document.querySelectorAll(`.${e}[platform="server"]`);for(let r=0;r<i.length;r++)i[r].remove();let s=this._document.createElement(`div`);s.style.visibility=`hidden`,s.classList.add(e),s.classList.add(`cdk-visually-hidden`),this._platform.isBrowser||s.setAttribute(`platform`,`server`),this._document.body.appendChild(s),this._messagesContainer=s}_removeCdkDescribedByReferenceIds(e){let i=Y$2(e,`aria-describedby`).filter(s=>s.indexOf(ct$1)!=0);e.setAttribute(`aria-describedby`,i.join(` `))}_addMessageReference(e,i){let s=this._messageRegistry.get(i);Rt$2(e,`aria-describedby`,s.messageElement.id),e.setAttribute(z$1,this._id),s.referenceCount++}_removeMessageReference(e,i){let s=this._messageRegistry.get(i);s.referenceCount--,Pt$1(e,`aria-describedby`,s.messageElement.id),e.removeAttribute(z$1)}_isElementDescribedByMessage(e,i){let s=Y$2(e,`aria-describedby`),r=this._messageRegistry.get(i),a=r&&r.messageElement.id;return!!a&&s.indexOf(a)!=-1}_canBeDescribed(e,i){if(!this._isElementNode(e))return!1;if(i&&typeof i==`object`)return!0;let s=i==null?``:`${i}`.trim(),r=e.getAttribute(`aria-label`);return s?!r||r.trim()!==s:!1}_isElementNode(e){return e.nodeType===this._document.ELEMENT_NODE}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function fe$1(t,n){return typeof t==`string`?`${n||``}/${t}`:t}function ot$2(t,n){t.id||(t.id=`${ct$1}-${n}-${me$1++}`)}var Zn={XSmall:`(max-width: 599.98px)`,Small:`(min-width: 600px) and (max-width: 959.98px)`,Medium:`(min-width: 960px) and (max-width: 1279.98px)`,Large:`(min-width: 1280px) and (max-width: 1919.98px)`,XLarge:`(min-width: 1920px)`,Handset:`(max-width: 599.98px) and (orientation: portrait), (max-width: 959.98px) and (orientation: landscape)`,Tablet:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait), (min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,Web:`(min-width: 840px) and (orientation: portrait), (min-width: 1280px) and (orientation: landscape)`,HandsetPortrait:`(max-width: 599.98px) and (orientation: portrait)`,TabletPortrait:`(min-width: 600px) and (max-width: 839.98px) and (orientation: portrait)`,WebPortrait:`(min-width: 840px) and (orientation: portrait)`,HandsetLandscape:`(max-width: 959.98px) and (orientation: landscape)`,TabletLandscape:`(min-width: 960px) and (max-width: 1279.98px) and (orientation: landscape)`,WebLandscape:`(min-width: 1280px) and (orientation: landscape)`};var Bt$1=new A$1(`MATERIAL_ANIMATIONS`);var dt$1=null;function Ut$1(){return b$2(Bt$1,{optional:!0})?.animationsDisabled||b$2(sm,{optional:!0})===`NoopAnimations`?`di-disabled`:(dt$1??=b$2(W$2).matchMedia(`(prefers-reduced-motion)`).matches,dt$1?`reduced-motion`:`enabled`)}function qn$1(){return Ut$1()!==`enabled`}function es(t){return t==null?``:typeof t==`string`?t:`${t}px`}function is(t){return t!=null&&`${t}`!=`false`}var Kt$2=new A$1(`cdk-dir-doc`,{providedIn:`root`,factory:()=>b$2(ur$1)});var jt$1=/^(ar|ckb|dv|he|iw|fa|nqo|ps|sd|ug|ur|yi|.*[-_](Adlm|Arab|Hebr|Nkoo|Rohg|Thaa))(?!.*[-_](Latn|Cyrl)($|-|_))($|-|_)/i;function ut$1(t){let n=t?.toLowerCase()||``;return n===`auto`&&typeof navigator<`u`&&navigator?.language?jt$1.test(navigator.language)?`rtl`:`ltr`:n===`rtl`?`rtl`:`ltr`}var Ht$1=(()=>{class t{get value(){return this.valueSignal()}valueSignal=Bo(`ltr`);change=new Be$2;constructor(){let e=b$2(Kt$2,{optional:!0});if(e){let i=e.body?e.body.dir:null,s=e.documentElement?e.documentElement.dir:null;this.valueSignal.set(ut$1(i||s||`ltr`))}}ngOnDestroy(){this.change.complete()}static ɵfac=function(i){return new(i||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var ls=(()=>{class t{static ɵfac=function(i){return new(i||t)};static ɵmod=qE({type:t});static ɵinj=Ol({})}return t})();var x=(function(t){return t[t.NORMAL=0]=`NORMAL`,t[t.NEGATED=1]=`NEGATED`,t[t.INVERTED=2]=`INVERTED`,t})(x||{});var Q$2;var A;function fs(){if(A==null){if(typeof document!=`object`||!document||typeof Element!=`function`||!Element)return A=!1,A;if(document.documentElement?.style&&`scrollBehavior`in document.documentElement.style)A=!0;else{let t=Element.prototype.scrollTo;t?A=!/\{\s*\[native code\]\s*\}/.test(t.toString()):A=!1}}return A}function ms(){if(typeof document!=`object`||!document)return x.NORMAL;if(Q$2==null){let t=document.createElement(`div`),n=t.style;t.dir=`rtl`,n.width=`1px`,n.overflow=`auto`,n.visibility=`hidden`,n.pointerEvents=`none`,n.position=`absolute`;let e=document.createElement(`div`),i=e.style;i.width=`2px`,i.height=`1px`,t.appendChild(e),document.body.appendChild(t),Q$2=x.NORMAL,t.scrollLeft===0&&(t.scrollLeft=1,Q$2=t.scrollLeft===0?x.NEGATED:x.INVERTED),t.remove()}return Q$2}function ps(){return typeof __karma__<`u`&&!!__karma__||typeof jasmine<`u`&&!!jasmine||typeof jest<`u`&&!!jest||typeof Mocha<`u`&&!!Mocha}function V$1(i){return Error(`Unable to find icon with the name "${i}"`)}function Z$2(){return Error(`Could not find HttpClient for use with Angular Material icons. Please add provideHttpClient() to your providers.`)}function q$1(i){return Error(`The URL provided to MatIconRegistry was not trusted as a resource URL via Angular's DomSanitizer. Attempted URL was "${i}".`)}function Y$1(i){return Error(`The literal provided to MatIconRegistry was not trusted as safe HTML by Angular's DomSanitizer. Attempted literal was "${i}".`)}var l=class{url;svgText;options;svgElement=null;constructor(a,t,e){this.url=a,this.svgText=t,this.options=e}};var K$4=(()=>{class i{_httpClient;_sanitizer;_errorHandler;_document;_svgIconConfigs=new Map;_iconSetConfigs=new Map;_cachedIconsByUrl=new Map;_inProgressUrlFetches=new Map;_fontCssClassesByAlias=new Map;_resolvers=[];_defaultFontSetClass;constructor(t,e,n,o){this._httpClient=t,this._sanitizer=e,this._errorHandler=o,this._document=n}addSvgIcon(t,e,n){return this.addSvgIconInNamespace(``,t,e,n)}addSvgIconLiteral(t,e,n){return this.addSvgIconLiteralInNamespace(``,t,e,n)}addSvgIconInNamespace(t,e,n,o){return this._addSvgIconConfig(t,e,new l(n,null,o))}addSvgIconResolver(t){return this._resolvers.push(t),this}addSvgIconLiteralInNamespace(t,e,n,o){let r=this._sanitizer.sanitize(Z$4.HTML,n);if(!r)throw Y$1(n);let s=ft$1(r);return this._addSvgIconConfig(t,e,new l(``,s,o))}addSvgIconSet(t,e){return this.addSvgIconSetInNamespace(``,t,e)}addSvgIconSetLiteral(t,e){return this.addSvgIconSetLiteralInNamespace(``,t,e)}addSvgIconSetInNamespace(t,e,n){return this._addSvgIconSetConfig(t,new l(e,null,n))}addSvgIconSetLiteralInNamespace(t,e,n){let o=this._sanitizer.sanitize(Z$4.HTML,e);if(!o)throw Y$1(e);let r=ft$1(o);return this._addSvgIconSetConfig(t,new l(``,r,n))}registerFontClassAlias(t,e=t){return this._fontCssClassesByAlias.set(t,e),this}classNameForFontAlias(t){return this._fontCssClassesByAlias.get(t)||t}setDefaultFontSetClass(...t){return this._defaultFontSetClass=t,this}getDefaultFontSetClass(){return this._defaultFontSetClass??=et$1(this._document),this._defaultFontSetClass}getSvgIconFromUrl(t){let e=this._sanitizer.sanitize(Z$4.RESOURCE_URL,t);if(!e)throw q$1(t);let n=this._cachedIconsByUrl.get(e);return n?Bh(C(n)):this._loadSvgIconFromConfig(new l(t,null)).pipe(yg(o=>this._cachedIconsByUrl.set(e,o)),vt$4(o=>C(o)))}getNamedSvgIcon(t,e=``){let n=J$2(e,t),o=this._svgIconConfigs.get(n);if(o)return this._getSvgFromConfig(o);if(o=this._getIconConfigFromResolvers(e,t),o)return this._svgIconConfigs.set(n,o),this._getSvgFromConfig(o);let r=this._iconSetConfigs.get(e);return r?this._getSvgFromIconSetConfigs(t,r):qh(V$1(n))}ngOnDestroy(){this._resolvers=[],this._svgIconConfigs.clear(),this._iconSetConfigs.clear(),this._cachedIconsByUrl.clear()}_getSvgFromConfig(t){return t.svgText?Bh(C(this._svgElementFromConfig(t))):this._loadSvgIconFromConfig(t).pipe(vt$4(e=>C(e)))}_getSvgFromIconSetConfigs(t,e){let n=this._extractIconWithNameFromAnySet(t,e);if(n)return Bh(n);let o=e.filter(r=>!r.svgText).map(r=>this._loadSvgIconSetFromConfig(r).pipe(hl(s=>{let m=`Loading icon set URL: ${this._sanitizer.sanitize(Z$4.RESOURCE_URL,r.url)} failed: ${s.message}`;return this._errorHandler.handleError(new Error(m)),Bh(null)})));return og(o).pipe(vt$4(()=>{let r=this._extractIconWithNameFromAnySet(t,e);if(!r)throw V$1(t);return r}))}_extractIconWithNameFromAnySet(t,e){for(let n=e.length-1;n>=0;n--){let o=e[n];if(o.svgText&&o.svgText.toString().indexOf(t)>-1){let r=this._svgElementFromConfig(o),s=this._extractSvgIconFromSet(r,t,o.options);if(s)return s}}return null}_loadSvgIconFromConfig(t){return this._fetchIcon(t).pipe(yg(e=>t.svgText=e),vt$4(()=>this._svgElementFromConfig(t)))}_loadSvgIconSetFromConfig(t){return t.svgText?Bh(null):this._fetchIcon(t).pipe(yg(e=>t.svgText=e))}_extractSvgIconFromSet(t,e,n){let o=t.querySelector(`[id="${e}"]`);if(!o)return null;let r=o.cloneNode(!0);if(r.removeAttribute(`id`),r.nodeName.toLowerCase()===`svg`)return this._setSvgAttributes(r,n);if(r.nodeName.toLowerCase()===`symbol`)return this._setSvgAttributes(this._toSvgElement(r),n);let s=this._svgElementFromString(ft$1(`<svg></svg>`));return s.appendChild(r),this._setSvgAttributes(s,n)}_svgElementFromString(t){let e=this._document.createElement(`DIV`);e.innerHTML=t;let n=e.querySelector(`svg`);if(!n)throw Error(`<svg> tag not found`);return n}_toSvgElement(t){let e=this._svgElementFromString(ft$1(`<svg></svg>`)),n=t.attributes;for(let o=0;o<n.length;o++){let{name:r,value:s}=n[o],c=r.toLowerCase();c!==`id`&&!c.startsWith(`on`)&&e.setAttribute(r,s)}for(let o=0;o<t.childNodes.length;o++)t.childNodes[o].nodeType===this._document.ELEMENT_NODE&&e.appendChild(t.childNodes[o].cloneNode(!0));return e}_setSvgAttributes(t,e){return t.setAttribute(`fit`,``),t.setAttribute(`height`,`100%`),t.setAttribute(`width`,`100%`),t.setAttribute(`preserveAspectRatio`,`xMidYMid meet`),t.setAttribute(`focusable`,`false`),e&&e.viewBox&&t.setAttribute(`viewBox`,e.viewBox),t}_fetchIcon(t){let{url:e,options:n}=t,o=n?.withCredentials??!1;if(!this._httpClient)throw Z$2();if(e==null)throw Error(`Cannot fetch icon from URL "${e}".`);let r=this._sanitizer.sanitize(Z$4.RESOURCE_URL,e);if(!r)throw q$1(e);let s=this._inProgressUrlFetches.get(r);if(s)return s;let c=this._httpClient.get(r,{responseType:`text`,withCredentials:o}).pipe(vt$4(m=>ft$1(m)),dg(()=>this._inProgressUrlFetches.delete(r)),Gi$1());return this._inProgressUrlFetches.set(r,c),c}_addSvgIconConfig(t,e,n){return this._svgIconConfigs.set(J$2(t,e),n),this}_addSvgIconSetConfig(t,e){let n=this._iconSetConfigs.get(t);return n?n.push(e):this._iconSetConfigs.set(t,[e]),this}_svgElementFromConfig(t){if(!t.svgElement){let e=this._svgElementFromString(t.svgText);this._setSvgAttributes(e,t.options),t.svgElement=e}return t.svgElement}_getIconConfigFromResolvers(t,e){for(let n=0;n<this._resolvers.length;n++){let o=this._resolvers[n](e,t);if(o)return tt$2(o)?new l(o.url,null,o.options):new l(o,null)}}static ɵfac=function(e){return new(e||i)(Re$1(jr,8),Re$1(Br),Re$1(ur$1,8),Re$1(nt$3))};static ɵprov=ce$3({token:i,factory:i.ɵfac,providedIn:`root`})}return i})();function C(i){return i.cloneNode(!0)}function J$2(i,a){return i+`:`+a}function tt$2(i){return!!(i.url&&i.options)}function et$1(i){let a=null,t=!1;return i.fonts&&typeof i.fonts.forEach==`function`&&i.fonts.forEach(e=>{let n=e.family.replace(/['"]/g,``).trim().toLowerCase();(n===`material icons`||n.startsWith(`material icons `))&&(t=!0),n.startsWith(`material symbols rounded`)?a=`rounded`:n.startsWith(`material symbols sharp`)?a=`sharp`:n.startsWith(`material symbols`)&&(a=`outlined`)}),[a&&!t?`material-symbols-${a}`:`material-icons`,`mat-ligature-font`]}var nt$1=new A$1(`MAT_ICON_DEFAULT_OPTIONS`);var ot$1=new A$1(`mat-icon-location`,{providedIn:`root`,factory:()=>{let i=b$2(ur$1),a=i?i.location:null;return{getPathname:()=>a?a.pathname+a.search:``}}});var G$2=[`clip-path`,`color-profile`,`src`,`cursor`,`fill`,`filter`,`marker`,`marker-start`,`marker-mid`,`marker-end`,`mask`,`stroke`];var rt=G$2.map(i=>`[${i}]`).join(`, `);var it$2=/^url\(['"]?#(.*?)['"]?\)$/;var wt$4=(()=>{class i{_elementRef=b$2(Cr);_iconRegistry=b$2(K$4);_location=b$2(ot$1);_errorHandler=b$2(nt$3);_defaultColor;get color(){return this._color||this._defaultColor}set color(t){this._color=t}_color;inline=!1;get svgIcon(){return this._svgIcon}set svgIcon(t){t!==this._svgIcon&&(t?this._updateSvgIcon(t):this._svgIcon&&this._clearSvgElement(),this._svgIcon=t)}_svgIcon;get fontSet(){return this._fontSet}set fontSet(t){let e=this._cleanupFontValue(t);e!==this._fontSet&&(this._fontSet=e,this._updateFontIconClasses())}_fontSet;get fontIcon(){return this._fontIcon}set fontIcon(t){let e=this._cleanupFontValue(t);e!==this._fontIcon&&(this._fontIcon=e,this._updateFontIconClasses())}_fontIcon;_previousFontSetClass=[];_previousFontIconClass;_svgName=null;_svgNamespace=null;_previousPath;_elementsWithExternalReferences;_currentIconFetch=Q$3.EMPTY;constructor(){let t=b$2(new yh(`aria-hidden`),{optional:!0}),e=b$2(nt$1,{optional:!0});e&&(e.color&&(this.color=this._defaultColor=e.color),e.fontSet&&(this.fontSet=e.fontSet)),t||this._elementRef.nativeElement.setAttribute(`aria-hidden`,`true`)}_splitIconName(t){if(!t)return[``,``];let e=t.split(`:`);switch(e.length){case 1:return[``,e[0]];case 2:return e;default:throw Error(`Invalid icon name: "${t}"`)}}ngOnInit(){this._updateFontIconClasses()}ngAfterViewChecked(){let t=this._elementsWithExternalReferences;if(t&&t.size){let e=this._location.getPathname();e!==this._previousPath&&(this._previousPath=e,this._prependPathToReferences(e))}}ngOnDestroy(){this._currentIconFetch.unsubscribe(),this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear()}_usingFontIcon(){return!this.svgIcon}_setSvgElement(t){this._clearSvgElement();let e=this._location.getPathname();this._previousPath=e,this._cacheChildrenWithExternalReferences(t),this._prependPathToReferences(e),this._elementRef.nativeElement.appendChild(t)}_clearSvgElement(){let t=this._elementRef.nativeElement,e=t.childNodes.length;for(this._elementsWithExternalReferences&&this._elementsWithExternalReferences.clear();e--;){let n=t.childNodes[e];(n.nodeType!==1||n.nodeName.toLowerCase()===`svg`)&&n.remove()}}_updateFontIconClasses(){if(!this._usingFontIcon())return;let t=this._elementRef.nativeElement,e=(this.fontSet?this._iconRegistry.classNameForFontAlias(this.fontSet).split(/ +/):this._iconRegistry.getDefaultFontSetClass()).filter(n=>n.length>0);this._previousFontSetClass.forEach(n=>t.classList.remove(n)),e.forEach(n=>t.classList.add(n)),this._previousFontSetClass=e,this.fontIcon!==this._previousFontIconClass&&!e.includes(`mat-ligature-font`)&&(this._previousFontIconClass&&t.classList.remove(this._previousFontIconClass),this.fontIcon&&t.classList.add(this.fontIcon),this._previousFontIconClass=this.fontIcon)}_cleanupFontValue(t){return typeof t==`string`?t.trim().split(` `)[0]:t}_prependPathToReferences(t){let e=this._elementsWithExternalReferences,n=t.startsWith(`//`)?`/.${t}`:t;e&&e.forEach((o,r)=>{o.forEach(s=>{r.setAttribute(s.name,`url('${n}#${s.value}')`)})})}_cacheChildrenWithExternalReferences(t){let e=t.querySelectorAll(rt),n=this._elementsWithExternalReferences=this._elementsWithExternalReferences||new Map;for(let o=0;o<e.length;o++)G$2.forEach(r=>{let s=e[o],c=s.getAttribute(r),m=c?c.match(it$2):null;if(m){let _=n.get(s);_||(_=[],n.set(s,_)),_.push({name:r,value:m[1]})}})}_updateSvgIcon(t){if(this._svgNamespace=null,this._svgName=null,this._currentIconFetch.unsubscribe(),t){let[e,n]=this._splitIconName(t);e&&(this._svgNamespace=e),n&&(this._svgName=n),this._currentIconFetch=this._iconRegistry.getNamedSvgIcon(n,e).pipe($i$1(1)).subscribe(o=>this._setSvgElement(o),o=>{let r=`Error retrieving icon ${e}:${n}! ${o.message}`;this._errorHandler.handleError(new Error(r))})}}static ɵfac=function(e){return new(e||i)};static ɵcmp=(function(){return WE({type:i,selectors:[[`mat-icon`]],hostAttrs:[`role`,`img`,1,`mat-icon`,`notranslate`],hostVars:10,hostBindings:function(n,o){n&2&&(Fp(`data-mat-icon-type`,o._usingFontIcon()?`font`:`svg`)(`data-mat-icon-name`,o._svgName||o.fontIcon)(`data-mat-icon-namespace`,o._svgNamespace||o.fontSet)(`fontIcon`,o._usingFontIcon()?o.fontIcon:null),ED(o.color?`mat-`+o.color:``),Jp(`mat-icon-inline`,o.inline)(`mat-icon-no-color`,o.color!==`primary`&&o.color!==`accent`&&o.color!==`warn`))},inputs:{color:`color`,inline:[2,`inline`,`inline`,HP],svgIcon:`svgIcon`,fontSet:`fontSet`,fontIcon:`fontIcon`},exportAs:[`matIcon`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,o){n&1&&(nD(),rD(0))},styles:[`mat-icon, mat-icon.mat-primary, mat-icon.mat-accent, mat-icon.mat-warn {
  color: var(--%NS%mat-icon-color, inherit);
}

.mat-icon {
  -webkit-user-select: none;
  user-select: none;
  background-repeat: no-repeat;
  display: inline-block;
  fill: currentColor;
  height: 24px;
  width: 24px;
  overflow: hidden;
}
.mat-icon.mat-icon-inline {
  font-size: inherit;
  height: inherit;
  line-height: inherit;
  width: inherit;
}
.mat-icon.mat-ligature-font[fontIcon]::before {
  content: attr(fontIcon);
}

[dir=rtl] .mat-icon-rtl-mirror {
  transform: scale(-1, 1);
}

.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon {
  display: block;
}
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-prefix .mat-icon-button .mat-icon,
.mat-form-field:not(.mat-form-field-appearance-legacy) .mat-form-field-suffix .mat-icon-button .mat-icon {
  margin: auto;
}
`],encapsulation:2})})()}return i})();var Mt$2=(()=>{class i{static ɵfac=function(e){return new(e||i)};static ɵmod=qE({type:i});static ɵinj=Ol({imports:[ls]})}return i})();var c=(function(e){return e[e.FADING_IN=0]=`FADING_IN`,e[e.VISIBLE=1]=`VISIBLE`,e[e.FADING_OUT=2]=`FADING_OUT`,e[e.HIDDEN=3]=`HIDDEN`,e})(c||{});var X=class{_renderer;element;config;_animationForciblyDisabledThroughCss;state=c.HIDDEN;constructor(a,t,n,o=!1){this._renderer=a,this.element=t,this.config=n,this._animationForciblyDisabledThroughCss=o}fadeOut(){this._renderer.fadeOutRipple(this)}};var vt$2=He$1({passive:!0,capture:!0});var J$1=class{_events=new Map;addHandler(a,t,n,o){let r=this._events.get(t);if(r){let s=r.get(n);s?s.add(o):r.set(n,new Set([o]))}else this._events.set(t,new Map([[n,new Set([o])]])),a.runOutsideAngular(()=>{document.addEventListener(t,this._delegateEventHandler,vt$2)})}removeHandler(a,t,n){let o=this._events.get(a);if(!o)return;let r=o.get(t);r&&(r.delete(n),r.size===0&&o.delete(t),o.size===0&&(this._events.delete(a),document.removeEventListener(a,this._delegateEventHandler,vt$2)))}_delegateEventHandler=a=>{let t=w$1(a);t&&this._events.get(a.type)?.forEach((n,o)=>{(o===t||o.contains(t))&&n.forEach(r=>r.handleEvent(a))})}};var k={enterDuration:225,exitDuration:150};var zt$1=800;var ht$1=He$1({passive:!0,capture:!0});var gt$1=[`mousedown`,`touchstart`];var yt$2=[`mouseup`,`mouseleave`,`touchend`,`touchcancel`];var Pt=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=WE({type:e,selectors:[[`ng-component`]],hostAttrs:[`mat-ripple-style-loader`,``],decls:0,vars:0,template:function(n,o){},styles:[`.mat-ripple {
  overflow: hidden;
  position: relative;
}
.mat-ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-ripple.mat-ripple-unbounded {
  overflow: visible;
}

.mat-ripple-element {
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
  transition: opacity, transform 0ms cubic-bezier(0, 0, 0.2, 1);
  transform: scale3d(0, 0, 0);
  background-color: var(--%NS%mat-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 10%, transparent));
}
@media (forced-colors: active) {
  .mat-ripple-element {
    display: none;
  }
}
.cdk-drag-preview .mat-ripple-element, .cdk-drag-placeholder .mat-ripple-element {
  display: none;
}
`],encapsulation:2})}return e})();var E$1=class e{_target;_ngZone;_platform;_containerElement;_triggerElement=null;_isPointerDown=!1;_activeRipples=new Map;_mostRecentTransientRipple=null;_lastTouchStartEvent;_pointerUpEventsRegistered=!1;_containerRect=null;static _eventManager=new J$1;constructor(a,t,n,o,r){this._target=a,this._ngZone=t,this._platform=o,o.isBrowser&&(this._containerElement=v(n)),r&&r.get(F$2).load(Pt)}fadeInRipple(a,t,n={}){let o=this._containerRect=this._containerRect||this._containerElement.getBoundingClientRect(),r=q$2(q$2({},k),n.animation);n.centered&&(a=o.left+o.width/2,t=o.top+o.height/2);let s=n.radius||It$2(a,t,o),l=a-o.left,I=t-o.top,p=r.enterDuration,m=document.createElement(`div`);m.classList.add(`mat-ripple-element`),m.style.left=`${l-s}px`,m.style.top=`${I-s}px`,m.style.height=`${s*2}px`,m.style.width=`${s*2}px`,n.color!=null&&(m.style.backgroundColor=n.color),m.style.transitionDuration=`${p}ms`,this._containerElement.appendChild(m);let nt=window.getComputedStyle(m),Et=nt.transitionProperty,at=nt.transitionDuration,Y=Et===`none`||at===`0s`||at===`0s, 0s`||o.width===0&&o.height===0,f=new X(this,m,n,Y);m.style.transform=`scale3d(1, 1, 1)`,f.state=c.FADING_IN,n.persistent||(this._mostRecentTransientRipple=f);let M=null;return!Y&&(p||r.exitDuration)&&this._ngZone.runOutsideAngular(()=>{let et=()=>{M&&(M.fallbackTimer=null),clearTimeout(ot),this._finishRippleTransition(f)},$=()=>this._destroyRipple(f),ot=setTimeout($,p+100);m.addEventListener(`transitionend`,et),m.addEventListener(`transitioncancel`,$),M={onTransitionEnd:et,onTransitionCancel:$,fallbackTimer:ot}}),this._activeRipples.set(f,M),(Y||!p)&&this._finishRippleTransition(f),f}fadeOutRipple(a){if(a.state===c.FADING_OUT||a.state===c.HIDDEN)return;let t=a.element,n=q$2(q$2({},k),a.config.animation);t.style.transitionDuration=`${n.exitDuration}ms`,t.style.opacity=`0`,a.state=c.FADING_OUT,(a._animationForciblyDisabledThroughCss||!n.exitDuration)&&this._finishRippleTransition(a)}fadeOutAll(){this._getActiveRipples().forEach(a=>a.fadeOut())}fadeOutAllNonPersistent(){this._getActiveRipples().forEach(a=>{a.config.persistent||a.fadeOut()})}setupTriggerEvents(a){let t=v(a);!this._platform.isBrowser||!t||t===this._triggerElement||(this._removeTriggerEvents(),this._triggerElement=t,gt$1.forEach(n=>{e._eventManager.addHandler(this._ngZone,n,t,this)}))}handleEvent(a){a.type===`mousedown`?this._onMousedown(a):a.type===`touchstart`?this._onTouchStart(a):this._onPointerUp(),this._pointerUpEventsRegistered||(this._ngZone.runOutsideAngular(()=>{yt$2.forEach(t=>{this._triggerElement.addEventListener(t,this,ht$1)})}),this._pointerUpEventsRegistered=!0)}_finishRippleTransition(a){a.state===c.FADING_IN?this._startFadeOutTransition(a):a.state===c.FADING_OUT&&this._destroyRipple(a)}_startFadeOutTransition(a){let t=a===this._mostRecentTransientRipple,{persistent:n}=a.config;a.state=c.VISIBLE,!n&&(!t||!this._isPointerDown)&&a.fadeOut()}_destroyRipple(a){let t=this._activeRipples.get(a)??null;this._activeRipples.delete(a),this._activeRipples.size||(this._containerRect=null),a===this._mostRecentTransientRipple&&(this._mostRecentTransientRipple=null),a.state=c.HIDDEN,t!==null&&(a.element.removeEventListener(`transitionend`,t.onTransitionEnd),a.element.removeEventListener(`transitioncancel`,t.onTransitionCancel),t.fallbackTimer!==null&&clearTimeout(t.fallbackTimer)),a.element.remove()}_onMousedown(a){let t=re$1(a),n=this._lastTouchStartEvent&&Date.now()<this._lastTouchStartEvent+zt$1;!this._target.rippleDisabled&&!t&&!n&&(this._isPointerDown=!0,this.fadeInRipple(a.clientX,a.clientY,this._target.rippleConfig))}_onTouchStart(a){if(!this._target.rippleDisabled&&!oe$2(a)){this._lastTouchStartEvent=Date.now(),this._isPointerDown=!0;let t=a.changedTouches;if(t)for(let n=0;n<t.length;n++)this.fadeInRipple(t[n].clientX,t[n].clientY,this._target.rippleConfig)}}_onPointerUp(){this._isPointerDown&&(this._isPointerDown=!1,this._getActiveRipples().forEach(a=>{let t=a.state===c.VISIBLE||a.config.terminateOnPointerUp&&a.state===c.FADING_IN;!a.config.persistent&&t&&a.fadeOut()}))}_getActiveRipples(){return Array.from(this._activeRipples.keys())}_removeTriggerEvents(){let a=this._triggerElement;a&&(gt$1.forEach(t=>e._eventManager.removeHandler(t,a,this)),this._pointerUpEventsRegistered&&(yt$2.forEach(t=>a.removeEventListener(t,this,ht$1)),this._pointerUpEventsRegistered=!1))}};function It$2(e,a,t){let n=Math.max(Math.abs(e-t.left),Math.abs(e-t.right)),o=Math.max(Math.abs(a-t.top),Math.abs(a-t.bottom));return Math.sqrt(n*n+o*o)}var K$3=new A$1(`mat-ripple-global-options`);var Wt$3=(()=>{class e{_elementRef=b$2(Cr);_animationsDisabled=qn$1();color;unbounded=!1;centered=!1;radius=0;animation;get disabled(){return this._disabled}set disabled(t){t&&this.fadeOutAllNonPersistent(),this._disabled=t,this._setupTriggerEventsIfEnabled()}_disabled=!1;get trigger(){return this._trigger||this._elementRef.nativeElement}set trigger(t){this._trigger=t,this._setupTriggerEventsIfEnabled()}_trigger;_rippleRenderer;_globalOptions;_isInitialized=!1;constructor(){let t=b$2(ye$1),n=b$2(p$1),o=b$2(K$3,{optional:!0}),r=b$2(oe$3);this._globalOptions=o||{},this._rippleRenderer=new E$1(this,t,this._elementRef,n,r)}ngOnInit(){this._isInitialized=!0,this._setupTriggerEventsIfEnabled()}ngOnDestroy(){this._rippleRenderer._removeTriggerEvents()}fadeOutAll(){this._rippleRenderer.fadeOutAll()}fadeOutAllNonPersistent(){this._rippleRenderer.fadeOutAllNonPersistent()}get rippleConfig(){return{centered:this.centered,radius:this.radius,color:this.color,animation:q$2(q$2(q$2({},this._globalOptions.animation),this._animationsDisabled?{enterDuration:0,exitDuration:0}:{}),this.animation),terminateOnPointerUp:this._globalOptions.terminateOnPointerUp}}get rippleDisabled(){return this.disabled||!!this._globalOptions.disabled}_setupTriggerEventsIfEnabled(){!this.disabled&&this._isInitialized&&this._rippleRenderer.setupTriggerEvents(this.trigger)}launch(t,n=0,o){return typeof t==`number`?this._rippleRenderer.fadeInRipple(t,n,q$2(q$2({},this.rippleConfig),o)):this._rippleRenderer.fadeInRipple(0,0,q$2(q$2({},this.rippleConfig),t))}static ɵfac=function(n){return new(n||e)};static ɵdir=ZE({type:e,selectors:[[``,`mat-ripple`,``],[``,`matRipple`,``]],hostAttrs:[1,`mat-ripple`],hostVars:2,hostBindings:function(n,o){n&2&&Jp(`mat-ripple-unbounded`,o.unbounded)},inputs:{color:[0,`matRippleColor`,`color`],unbounded:[0,`matRippleUnbounded`,`unbounded`],centered:[0,`matRippleCentered`,`centered`],radius:[0,`matRippleRadius`,`radius`],animation:[0,`matRippleAnimation`,`animation`],disabled:[0,`matRippleDisabled`,`disabled`],trigger:[0,`matRippleTrigger`,`trigger`]},exportAs:[`matRipple`]})}return e})();var Mt$1={capture:!0};var Dt$1=[`focus`,`mousedown`,`mouseenter`,`touchstart`];var Q$1=`mat-ripple-loader-uninitialized`;var W$1=`mat-ripple-loader-class-name`;var xt=`mat-ripple-loader-centered`;var G$1=`mat-ripple-loader-disabled`;var _t=(()=>{class e{_document=b$2(ur$1);_animationsDisabled=qn$1();_globalRippleOptions=b$2(K$3,{optional:!0});_platform=b$2(p$1);_ngZone=b$2(ye$1);_injector=b$2(oe$3);_eventCleanups;_hosts=new Map;constructor(){let t=b$2(Er).createRenderer(null,null);this._eventCleanups=this._ngZone.runOutsideAngular(()=>Dt$1.map(n=>t.listen(this._document,n,this._onInteraction,Mt$1)))}ngOnDestroy(){let t=this._hosts.keys();for(let n of t)this.destroyRipple(n);this._eventCleanups.forEach(n=>n())}configureRipple(t,n){t.setAttribute(Q$1,this._globalRippleOptions?.namespace??``),(n.className||!t.hasAttribute(W$1))&&t.setAttribute(W$1,n.className||``),n.centered&&t.setAttribute(xt,``),n.disabled&&t.setAttribute(G$1,``)}setDisabled(t,n){let o=this._hosts.get(t);o?(o.target.rippleDisabled=n,!n&&!o.hasSetUpEvents&&(o.hasSetUpEvents=!0,o.renderer.setupTriggerEvents(t))):n?t.setAttribute(G$1,``):t.removeAttribute(G$1)}_onInteraction=t=>{let n=w$1(t);if(n instanceof HTMLElement){let o=n.closest(`[${Q$1}="${this._globalRippleOptions?.namespace??``}"]`);o&&this._createRipple(o)}};_createRipple(t){if(!this._document||this._hosts.has(t))return;t.querySelector(`.mat-ripple`)?.remove();let n=this._document.createElement(`span`);n.classList.add(`mat-ripple`,t.getAttribute(W$1)),t.append(n);let o=this._globalRippleOptions,r=this._animationsDisabled?0:o?.animation?.enterDuration??k.enterDuration,s=this._animationsDisabled?0:o?.animation?.exitDuration??k.exitDuration,l={rippleDisabled:this._animationsDisabled||o?.disabled||t.hasAttribute(G$1),rippleConfig:{centered:t.hasAttribute(xt),terminateOnPointerUp:o?.terminateOnPointerUp,animation:{enterDuration:r,exitDuration:s}}},I=new E$1(l,this._ngZone,n,this._platform,this._injector),p=!l.rippleDisabled;p&&I.setupTriggerEvents(t),this._hosts.set(t,{target:l,renderer:I,hasSetUpEvents:p}),t.removeAttribute(Q$1)}destroyRipple(t){let n=this._hosts.get(t);n&&(n.renderer._removeTriggerEvents(),this._hosts.delete(t))}static ɵfac=function(n){return new(n||e)};static ɵprov=Tr({token:e,factory:e.ɵfac})}return e})();var Nt$2=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵcmp=WE({type:e,selectors:[[`structural-styles`]],decls:0,vars:0,template:function(n,o){},styles:[`.mat-focus-indicator {
  position: relative;
}
.mat-focus-indicator::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  box-sizing: border-box;
  pointer-events: none;
  display: var(--%NS%mat-focus-indicator-display, none);
  border-width: var(--%NS%mat-focus-indicator-border-width, 3px);
  border-style: var(--%NS%mat-focus-indicator-border-style, solid);
  border-color: var(--%NS%mat-focus-indicator-border-color, transparent);
  border-radius: var(--%NS%mat-focus-indicator-border-radius, 4px);
}
.mat-focus-indicator:focus-visible::before {
  content: "";
}

@media (forced-colors: active) {
  html {
    --%NS%mat-focus-indicator-display: block;
    --%NS%mat-focus-indicator-fallback-border-style: none;
  }
}
`],encapsulation:2})}return e})();var At$1=new A$1(`MAT_BUTTON_CONFIG`);function St$3(e){return e==null?void 0:BP(e)}var tt$1=(()=>{class e{_elementRef=b$2(Cr);_ngZone=b$2(ye$1);_animationsDisabled=qn$1();_config=b$2(At$1,{optional:!0});_focusMonitor=b$2(bt$2);_cleanupClick;_renderer=b$2(ka);_rippleLoader=b$2(_t);_isAnchor;_isFab=!1;color;get disableRipple(){return this._disableRipple}set disableRipple(t){this._disableRipple=t,this._updateRippleDisabled()}_disableRipple=!1;get disabled(){return this._disabled}set disabled(t){this._disabled=t,this._updateRippleDisabled()}_disabled=!1;ariaDisabled;disabledInteractive;tabIndex;set _tabindex(t){this.tabIndex=t}showProgress=LP(!1,{transform:HP});constructor(){b$2(F$2).load(Nt$2);let t=this._elementRef.nativeElement;this._isAnchor=t.tagName===`A`,this.disabledInteractive=this._config?.disabledInteractive??!1,this.color=this._config?.color??null,this._rippleLoader?.configureRipple(t,{className:`mat-mdc-button-ripple`})}ngAfterViewInit(){this._focusMonitor.monitor(this._elementRef,!0),this._isAnchor&&this._setupAsAnchor()}ngOnDestroy(){this._cleanupClick?.(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement)}focus(t=`program`,n){t?this._focusMonitor.focusVia(this._elementRef.nativeElement,t,n):this._elementRef.nativeElement.focus(n)}_getAriaDisabled(){return this.ariaDisabled!=null?this.ariaDisabled:this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabledAttribute(){return this.disabledInteractive||!this.disabled?null:!0}_updateRippleDisabled(){this._rippleLoader?.setDisabled(this._elementRef.nativeElement,this.disableRipple||this.disabled)}_getTabIndex(){return this._isAnchor?this.disabled&&!this.disabledInteractive?-1:this.tabIndex:this.tabIndex}_setupAsAnchor(){this._cleanupClick=this._ngZone.runOutsideAngular(()=>this._renderer.listen(this._elementRef.nativeElement,`click`,t=>{this.disabled&&(t.preventDefault(),t.stopImmediatePropagation())}))}static ɵfac=function(n){return new(n||e)};static ɵdir=ZE({type:e,hostAttrs:[1,`mat-mdc-button-base`],hostVars:15,hostBindings:function(n,o){n&2&&(Fp(`disabled`,o._getDisabledAttribute())(`aria-disabled`,o._getAriaDisabled())(`tabindex`,o._getTabIndex()),ED(o.color?`mat-`+o.color:``),Jp(`mat-mdc-button-progress-indicator-shown`,o.showProgress())(`mat-mdc-button-disabled`,o.disabled)(`mat-mdc-button-disabled-interactive`,o.disabledInteractive)(`mat-unthemed`,!o.color)(`_mat-animation-noopable`,o._animationsDisabled))},inputs:{color:`color`,disableRipple:[2,`disableRipple`,`disableRipple`,HP],disabled:[2,`disabled`,`disabled`,HP],ariaDisabled:[2,`aria-disabled`,`ariaDisabled`,HP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,HP],tabIndex:[2,`tabIndex`,`tabIndex`,St$3],_tabindex:[2,`tabindex`,`_tabindex`,St$3],showProgress:[1,`showProgress`]}})}return e})();var Rt$1=(()=>{class e extends tt$1{constructor(){super(),this._rippleLoader.configureRipple(this._elementRef.nativeElement,{centered:!0})}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[`*`,[[``,`progressIndicator`,``]]],n=[`*`,`[progressIndicator]`];function o(r,s){r&1&&(Oc(0,`div`,1),rD(1,1),kc())}return WE({type:e,selectors:[[`button`,`mat-icon-button`,``],[`a`,`mat-icon-button`,``],[`button`,`matIconButton`,``],[`a`,`matIconButton`,``]],hostAttrs:[1,`mdc-icon-button`,`mat-mdc-icon-button`],exportAs:[`matButton`,`matAnchor`],features:[bp],ngContentSelectors:n,decls:5,vars:1,consts:[[1,`mat-mdc-button-persistent-ripple`,`mdc-icon-button__ripple`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,l){s&1&&(nD(t),Hp(0,`span`,0),rD(1),HI(2,o,2,0,`div`,1),Hp(3,`span`,2)(4,`span`,3)),s&2&&(Iv(2),$I(l.showProgress()?2:-1))},styles:[`.mat-mdc-icon-button {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  position: relative;
  box-sizing: border-box;
  border: none;
  outline: none;
  background-color: transparent;
  fill: currentColor;
  text-decoration: none;
  cursor: pointer;
  z-index: 0;
  overflow: visible;
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
  flex-shrink: 0;
  text-align: center;
  width: var(--%NS%mat-icon-button-state-layer-size, 40px);
  height: var(--%NS%mat-icon-button-state-layer-size, 40px);
  padding: calc(calc(var(--%NS%mat-icon-button-state-layer-size, 40px) - var(--%NS%mat-icon-button-icon-size, 24px)) / 2);
  font-size: var(--%NS%mat-icon-button-icon-size, 24px);
  color: var(--%NS%mat-icon-button-icon-color, var(--%NS%mat-sys-on-surface-variant));
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-icon-button .mat-mdc-button-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple,
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-icon-button .mdc-button__label,
.mat-mdc-icon-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-icon-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-icon-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-icon-button .mat-ripple-element {
  background-color: var(--%NS%mat-icon-button-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface-variant) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-icon-button-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-icon-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-icon-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-icon-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-icon-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-icon-button-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-icon-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-icon-button-touch-target-size, 48px);
  display: var(--%NS%mat-icon-button-touch-target-display, block);
  left: 50%;
  width: var(--%NS%mat-icon-button-touch-target-size, 48px);
  transform: translate(-50%, -50%);
}
.mat-mdc-icon-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-icon-button[disabled], .mat-mdc-icon-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-icon-button-disabled-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-icon-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-icon-button img,
.mat-mdc-icon-button svg {
  width: var(--%NS%mat-icon-button-icon-size, 24px);
  height: var(--%NS%mat-icon-button-icon-size, 24px);
  vertical-align: baseline;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__determinate-circle-graphic {
  width: inherit;
  height: inherit;
}
.mat-mdc-icon-button .mat-mdc-button-progress-indicator-container .mdc-circular-progress__indeterminate-circle-graphic {
  height: 100%;
}
.mat-mdc-icon-button .mat-mdc-button-persistent-ripple {
  border-radius: var(--%NS%mat-icon-button-container-shape, var(--%NS%mat-sys-corner-full, 50%));
}
.mat-mdc-icon-button[hidden] {
  display: none;
}
.mat-mdc-icon-button.mat-unthemed:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-primary:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-accent:not(.mdc-ripple-upgraded):focus::before, .mat-mdc-icon-button.mat-warn:not(.mdc-ripple-upgraded):focus::before {
  background: transparent;
  opacity: 1;
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();var wt$3=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=qE({type:e});static ɵinj=Ol({imports:[ls]})}return e})();var kt$1=new Map([[`text`,[`mat-mdc-button`]],[`filled`,[`mdc-button--unelevated`,`mat-mdc-unelevated-button`]],[`elevated`,[`mdc-button--raised`,`mat-mdc-raised-button`]],[`outlined`,[`mdc-button--outlined`,`mat-mdc-outlined-button`]],[`tonal`,[`mat-tonal-button`]]]);var zn$1=(()=>{class e extends tt$1{get appearance(){return this._appearance}set appearance(t){this.setAppearance(t||this._config?.defaultAppearance||`text`)}_appearance=null;constructor(){super();let t=Tt$3(this._elementRef.nativeElement);t&&this.setAppearance(t)}setAppearance(t){if(t===this._appearance)return;let n=this._elementRef.nativeElement.classList,o=this._appearance?kt$1.get(this._appearance):null,r=kt$1.get(t);o&&n.remove(...o),n.add(...r),this._appearance=t}static ɵfac=function(n){return new(n||e)};static ɵcmp=(function(){let t=[[[``,8,`material-icons`,3,`iconPositionEnd`,``],[`mat-icon`,3,`iconPositionEnd`,``],[``,`matButtonIcon`,``,3,`iconPositionEnd`,``],[``,8,`material-symbols-outlined`,3,`iconPositionEnd`,``],[``,8,`material-symbols-rounded`,3,`iconPositionEnd`,``],[``,8,`material-symbols-sharp`,3,`iconPositionEnd`,``]],`*`,[[``,`iconPositionEnd`,``,8,`material-icons`],[`mat-icon`,`iconPositionEnd`,``],[``,`matButtonIcon`,``,`iconPositionEnd`,``],[``,`iconPositionEnd`,``,8,`material-symbols-outlined`],[``,`iconPositionEnd`,``,8,`material-symbols-rounded`],[``,`iconPositionEnd`,``,8,`material-symbols-sharp`]],[[``,`progressIndicator`,``]]],n=[`.material-icons:not([iconPositionEnd]), mat-icon:not([iconPositionEnd]), [matButtonIcon]:not([iconPositionEnd]), .material-symbols-outlined:not([iconPositionEnd]), .material-symbols-rounded:not([iconPositionEnd]), .material-symbols-sharp:not([iconPositionEnd])`,`*`,`.material-icons[iconPositionEnd], mat-icon[iconPositionEnd], [matButtonIcon][iconPositionEnd], .material-symbols-outlined[iconPositionEnd], .material-symbols-rounded[iconPositionEnd], .material-symbols-sharp[iconPositionEnd]`,`[progressIndicator]`];function o(r,s){r&1&&(Oc(0,`div`,2),rD(1,3),kc())}return WE({type:e,selectors:[[`button`,`matButton`,``],[`a`,`matButton`,``],[`button`,`mat-button`,``],[`button`,`mat-raised-button`,``],[`button`,`mat-flat-button`,``],[`button`,`mat-stroked-button`,``],[`a`,`mat-button`,``],[`a`,`mat-raised-button`,``],[`a`,`mat-flat-button`,``],[`a`,`mat-stroked-button`,``]],hostAttrs:[1,`mdc-button`],inputs:{appearance:[0,`matButton`,`appearance`]},exportAs:[`matButton`,`matAnchor`],features:[bp],ngContentSelectors:n,decls:8,vars:5,consts:[[1,`mat-mdc-button-persistent-ripple`],[1,`mdc-button__label`],[1,`mat-mdc-button-progress-indicator-container`],[1,`mat-focus-indicator`],[1,`mat-mdc-button-touch-target`]],template:function(s,l){s&1&&(nD(t),Hp(0,`span`,0),rD(1),Oc(2,`span`,1),rD(3,1),kc(),rD(4,2),HI(5,o,2,0,`div`,2),Hp(6,`span`,3)(7,`span`,4)),s&2&&(Jp(`mdc-button__ripple`,!l._isFab)(`mdc-fab__ripple`,l._isFab),Iv(5),$I(l.showProgress()?5:-1))},styles:[`.mat-mdc-button-base {
  text-decoration: none;
}
.mat-mdc-button-base .mat-icon {
  min-height: fit-content;
  flex-shrink: 0;
}
@media (hover: none) {
  .mat-mdc-button-base:hover > span.mat-mdc-button-persistent-ripple::before {
    opacity: 0;
  }
}

.mdc-button {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  min-width: 64px;
  border: none;
  outline: none;
  line-height: inherit;
  -webkit-appearance: none;
  overflow: visible;
  vertical-align: middle;
  background: transparent;
  padding: 0 8px;
}
.mdc-button::-moz-focus-inner {
  padding: 0;
  border: 0;
}
.mdc-button:active {
  outline: none;
}
.mdc-button:hover {
  cursor: pointer;
}
.mdc-button:disabled {
  cursor: default;
  pointer-events: none;
}
.mdc-button[hidden] {
  display: none;
}
.mdc-button .mdc-button__label {
  position: relative;
}

.mat-mdc-button {
  padding: 0 var(--%NS%mat-button-text-horizontal-padding, 12px);
  height: var(--%NS%mat-button-text-container-height, 40px);
  font-family: var(--%NS%mat-button-text-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-text-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-text-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-text-label-text-transform);
  font-weight: var(--%NS%mat-button-text-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}
.mat-mdc-button, .mat-mdc-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-text-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-button:not(:disabled) {
  color: var(--%NS%mat-button-text-label-text-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button[disabled], .mat-mdc-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-text-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-mdc-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-button:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded,
.material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding: 0 var(--%NS%mat-button-text-with-icon-horizontal-padding, 16px);
}
.mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
[dir=rtl] .mat-mdc-button > .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
.mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-offset, -4px);
  margin-left: var(--%NS%mat-button-text-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-text-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-text-icon-offset, -4px);
}
.mat-mdc-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-text-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-text-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-text-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-text-touch-target-size, 48px);
  display: var(--%NS%mat-button-text-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-unelevated-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-filled-container-height, 40px);
  font-family: var(--%NS%mat-button-filled-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-filled-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-filled-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-filled-label-text-transform);
  font-weight: var(--%NS%mat-button-filled-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-filled-horizontal-padding, 24px);
}
.mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-unelevated-button > .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
.mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-filled-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-unelevated-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-filled-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-filled-icon-offset, -8px);
}
.mat-mdc-unelevated-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-filled-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-state-layer-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-filled-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-unelevated-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-unelevated-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-unelevated-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-filled-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-unelevated-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-filled-touch-target-size, 48px);
  display: var(--%NS%mat-button-filled-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-unelevated-button:not(:disabled) {
  color: var(--%NS%mat-button-filled-label-text-color, var(--%NS%mat-sys-on-primary));
  background-color: var(--%NS%mat-button-filled-container-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-unelevated-button, .mat-mdc-unelevated-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-filled-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-mdc-unelevated-button .mat-mdc-button-progress-indicator-container {
  --%NS%mat-progress-spinner-active-indicator-color: var(--%NS%mat-button-filled-progress-active-indicator-color, var(--%NS%mat-sys-on-primary));
}
.mat-mdc-unelevated-button[disabled], .mat-mdc-unelevated-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-filled-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-filled-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-unelevated-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-raised-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: var(--%NS%mat-button-protected-container-elevation-shadow, var(--%NS%mat-sys-level1));
  height: var(--%NS%mat-button-protected-container-height, 40px);
  font-family: var(--%NS%mat-button-protected-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-protected-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-protected-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-protected-label-text-transform);
  font-weight: var(--%NS%mat-button-protected-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-protected-horizontal-padding, 24px);
}
.mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-raised-button > .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
.mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-protected-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-raised-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-protected-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-protected-icon-offset, -8px);
}
.mat-mdc-raised-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-protected-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-raised-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-protected-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-raised-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-raised-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-raised-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-raised-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-protected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-raised-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-protected-touch-target-size, 48px);
  display: var(--%NS%mat-button-protected-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-raised-button:not(:disabled) {
  color: var(--%NS%mat-button-protected-label-text-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-button-protected-container-color, var(--%NS%mat-sys-surface));
}
.mat-mdc-raised-button, .mat-mdc-raised-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-protected-container-shape, var(--%NS%mat-sys-corner-full));
}
@media (hover: hover) {
  .mat-mdc-raised-button:hover {
    box-shadow: var(--%NS%mat-button-protected-hover-container-elevation-shadow, var(--%NS%mat-sys-level2));
  }
}
.mat-mdc-raised-button:focus {
  box-shadow: var(--%NS%mat-button-protected-focus-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button:active, .mat-mdc-raised-button:focus:active {
  box-shadow: var(--%NS%mat-button-protected-pressed-container-elevation-shadow, var(--%NS%mat-sys-level1));
}
.mat-mdc-raised-button[disabled], .mat-mdc-raised-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-protected-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-protected-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-raised-button[disabled].mat-mdc-button-disabled, .mat-mdc-raised-button.mat-mdc-button-disabled.mat-mdc-button-disabled {
  box-shadow: var(--%NS%mat-button-protected-disabled-container-elevation-shadow, var(--%NS%mat-sys-level0));
}
.mat-mdc-raised-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-mdc-outlined-button {
  border-style: solid;
  transition: border 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-outlined-container-height, 40px);
  font-family: var(--%NS%mat-button-outlined-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-outlined-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-outlined-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-outlined-label-text-transform);
  font-weight: var(--%NS%mat-button-outlined-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  border-radius: var(--%NS%mat-button-outlined-container-shape, var(--%NS%mat-sys-corner-full));
  border-width: var(--%NS%mat-button-outlined-outline-width, 1px);
  padding: 0 var(--%NS%mat-button-outlined-horizontal-padding, 24px);
}
.mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
[dir=rtl] .mat-mdc-outlined-button > .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
.mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-outlined-icon-spacing, 8px);
}
[dir=rtl] .mat-mdc-outlined-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-outlined-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-outlined-icon-offset, -8px);
}
.mat-mdc-outlined-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-outlined-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-primary) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-state-layer-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-outlined-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-outlined-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-outlined-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-mdc-outlined-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-outlined-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-outlined-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-mdc-outlined-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-outlined-touch-target-size, 48px);
  display: var(--%NS%mat-button-outlined-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}
.mat-mdc-outlined-button:not(:disabled) {
  color: var(--%NS%mat-button-outlined-label-text-color, var(--%NS%mat-sys-primary));
  border-color: var(--%NS%mat-button-outlined-outline-color, var(--%NS%mat-sys-outline));
}
.mat-mdc-outlined-button[disabled], .mat-mdc-outlined-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-outlined-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: var(--%NS%mat-button-outlined-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-outlined-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}

.mat-tonal-button {
  transition: box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
  height: var(--%NS%mat-button-tonal-container-height, 40px);
  font-family: var(--%NS%mat-button-tonal-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-tonal-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-button-tonal-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  text-transform: var(--%NS%mat-button-tonal-label-text-transform);
  font-weight: var(--%NS%mat-button-tonal-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  padding: 0 var(--%NS%mat-button-tonal-horizontal-padding, 24px);
}
.mat-tonal-button:not(:disabled) {
  color: var(--%NS%mat-button-tonal-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-tonal-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-tonal-button, .mat-tonal-button .mdc-button__ripple {
  border-radius: var(--%NS%mat-button-tonal-container-shape, var(--%NS%mat-sys-corner-full));
}
.mat-tonal-button[disabled], .mat-tonal-button.mat-mdc-button-disabled {
  cursor: default;
  pointer-events: none;
  color: var(--%NS%mat-button-tonal-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-tonal-disabled-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-tonal-button.mat-mdc-button-disabled-interactive {
  pointer-events: auto;
}
.mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
[dir=rtl] .mat-tonal-button > .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
.mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-offset, -8px);
  margin-left: var(--%NS%mat-button-tonal-icon-spacing, 8px);
}
[dir=rtl] .mat-tonal-button .mdc-button__label + .mat-icon {
  margin-right: var(--%NS%mat-button-tonal-icon-spacing, 8px);
  margin-left: var(--%NS%mat-button-tonal-icon-offset, -8px);
}
.mat-tonal-button .mat-ripple-element {
  background-color: var(--%NS%mat-button-tonal-ripple-color, color-mix(in srgb, var(--%NS%mat-sys-on-secondary-container) calc(var(--%NS%mat-sys-pressed-state-layer-opacity) * 100%), transparent));
}
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-tonal-button.mat-mdc-button-disabled .mat-mdc-button-persistent-ripple::before {
  background-color: var(--%NS%mat-button-tonal-disabled-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-tonal-button:hover > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-tonal-button.cdk-program-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.cdk-keyboard-focused > .mat-mdc-button-persistent-ripple::before, .mat-tonal-button.mat-mdc-button-disabled-interactive:focus > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-tonal-button:active > .mat-mdc-button-persistent-ripple::before {
  opacity: var(--%NS%mat-button-tonal-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
}
.mat-tonal-button .mat-mdc-button-touch-target {
  position: absolute;
  top: 50%;
  height: var(--%NS%mat-button-tonal-touch-target-size, 48px);
  display: var(--%NS%mat-button-tonal-touch-target-display, block);
  left: 0;
  right: 0;
  transform: translateY(-50%);
}

.mat-mdc-button,
.mat-mdc-unelevated-button,
.mat-mdc-raised-button,
.mat-mdc-outlined-button,
.mat-tonal-button {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple,
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}
.mat-mdc-button .mat-mdc-button-ripple,
.mat-mdc-unelevated-button .mat-mdc-button-ripple,
.mat-mdc-raised-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-tonal-button .mat-mdc-button-ripple {
  overflow: hidden;
}
.mat-mdc-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-unelevated-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-raised-button .mat-mdc-button-persistent-ripple::before,
.mat-mdc-outlined-button .mat-mdc-button-persistent-ripple::before,
.mat-tonal-button .mat-mdc-button-persistent-ripple::before {
  content: "";
  opacity: 0;
}
.mat-mdc-button .mdc-button__label,
.mat-mdc-button .mat-icon,
.mat-mdc-unelevated-button .mdc-button__label,
.mat-mdc-unelevated-button .mat-icon,
.mat-mdc-raised-button .mdc-button__label,
.mat-mdc-raised-button .mat-icon,
.mat-mdc-outlined-button .mdc-button__label,
.mat-mdc-outlined-button .mat-icon,
.mat-tonal-button .mdc-button__label,
.mat-tonal-button .mat-icon {
  z-index: 1;
  position: relative;
}
.mat-mdc-button .mat-focus-indicator,
.mat-mdc-unelevated-button .mat-focus-indicator,
.mat-mdc-raised-button .mat-focus-indicator,
.mat-mdc-outlined-button .mat-focus-indicator,
.mat-tonal-button .mat-focus-indicator {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
}
.mat-mdc-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-unelevated-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-raised-button:focus-visible > .mat-focus-indicator::before,
.mat-mdc-outlined-button:focus-visible > .mat-focus-indicator::before,
.mat-tonal-button:focus-visible > .mat-focus-indicator::before {
  content: "";
  border-radius: inherit;
}
.mat-mdc-button._mat-animation-noopable,
.mat-mdc-unelevated-button._mat-animation-noopable,
.mat-mdc-raised-button._mat-animation-noopable,
.mat-mdc-outlined-button._mat-animation-noopable,
.mat-tonal-button._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-button > .mat-icon,
.mat-mdc-unelevated-button > .mat-icon,
.mat-mdc-raised-button > .mat-icon,
.mat-mdc-outlined-button > .mat-icon,
.mat-tonal-button > .mat-icon {
  display: inline-block;
  position: relative;
  vertical-align: top;
  font-size: 1.125rem;
  height: 1.125rem;
  width: 1.125rem;
}

.mat-mdc-outlined-button .mat-mdc-button-ripple,
.mat-mdc-outlined-button .mdc-button__ripple {
  top: -1px;
  left: -1px;
  bottom: -1px;
  right: -1px;
}

.mat-mdc-unelevated-button .mat-focus-indicator::before,
.mat-tonal-button .mat-focus-indicator::before,
.mat-mdc-raised-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-outlined-button .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 3px) * -1);
}

.mat-mdc-button-progress-indicator-container {
  position: absolute;
  inset-inline-start: 0;
  inset-block-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mat-mdc-button-progress-indicator-shown mat-icon,
.mat-mdc-button-progress-indicator-shown [matButtonIcon],
.mat-mdc-button-progress-indicator-shown .mdc-button__label {
  visibility: hidden;
}
`,`@media (forced-colors: active) {
  .mat-mdc-button:not(.mdc-button--outlined),
  .mat-mdc-unelevated-button:not(.mdc-button--outlined),
  .mat-mdc-raised-button:not(.mdc-button--outlined),
  .mat-mdc-outlined-button:not(.mdc-button--outlined),
  .mat-mdc-button-base.mat-tonal-button,
  .mat-mdc-icon-button.mat-mdc-icon-button,
  .mat-mdc-outlined-button .mdc-button__ripple {
    outline: solid 1px;
  }
}
`],encapsulation:2})})()}return e})();function Tt$3(e){return e.hasAttribute(`mat-raised-button`)?`elevated`:e.hasAttribute(`mat-stroked-button`)?`outlined`:e.hasAttribute(`mat-flat-button`)?`filled`:e.hasAttribute(`mat-button`)?`text`:null}var Pn$1=(()=>{class e{static ɵfac=function(n){return new(n||e)};static ɵmod=qE({type:e});static ɵinj=Ol({imports:[wt$3,ls]})}return e})();var le$1=20;var F$1=(()=>{class n{_ngZone=b$2(ye$1);_platform=b$2(p$1);_renderer=b$2(Er).createRenderer(null,null);_cleanupGlobalListener;_scrolled=new J$3;_scrolledCount=0;scrollContainers=new Map;register(e){this.scrollContainers.has(e)||this.scrollContainers.set(e,e.elementScrolled().subscribe(()=>this._scrolled.next(e)))}deregister(e){let i=this.scrollContainers.get(e);i&&(i.unsubscribe(),this.scrollContainers.delete(e))}scrolled(e=le$1){return this._platform.isBrowser?new M$2(i=>{this._cleanupGlobalListener||(this._cleanupGlobalListener=this._ngZone.runOutsideAngular(()=>this._renderer.listen(`document`,`scroll`,()=>this._scrolled.next())));let o=e>0?this._scrolled.pipe(ig(e)).subscribe(i):this._scrolled.subscribe(i);return this._scrolledCount++,()=>{o.unsubscribe(),this._scrolledCount--,this._scrolledCount||(this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0)}}):Bh()}ngOnDestroy(){this._cleanupGlobalListener?.(),this._cleanupGlobalListener=void 0,this.scrollContainers.forEach((e,i)=>this.deregister(i)),this._scrolled.complete()}ancestorScrolled(e,i){let o=this.getAncestorScrollContainers(e);return this.scrolled(i).pipe(Bn$1(r=>!r||o.indexOf(r)>-1))}getAncestorScrollContainers(e){let i=[];return this.scrollContainers.forEach((o,r)=>{this._targetContainsElement(r,e)&&i.push(r)}),i}_targetContainsElement(e,i){let o=v(i),r=e.getElementRef().nativeElement;do if(o==r)return!0;while(o=o.parentElement);return!1}static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var ce$1=(()=>{class n{elementRef=b$2(Cr);scrollDispatcher=b$2(F$1);ngZone=b$2(ye$1);dir=b$2(Ht$1,{optional:!0});_scrollElement=this.elementRef.nativeElement;_destroyed=new J$3;_renderer=b$2(ka);_cleanupScroll;_elementScrolled=new J$3;ngOnInit(){this._cleanupScroll=this.ngZone.runOutsideAngular(()=>this._renderer.listen(this._scrollElement,`scroll`,e=>this._elementScrolled.next(e))),this.scrollDispatcher.register(this)}ngOnDestroy(){this._cleanupScroll?.(),this._elementScrolled.complete(),this.scrollDispatcher.deregister(this),this._destroyed.next(),this._destroyed.complete()}elementScrolled(){return this._elementScrolled}getElementRef(){return this.elementRef}scrollTo(e){let i=this.elementRef.nativeElement,o=this.dir&&this.dir.value==`rtl`;e.left??=o?e.end:e.start,e.right??=o?e.start:e.end,e.bottom!=null&&(e.top=i.scrollHeight-i.clientHeight-e.bottom),o&&ms()!=x.NORMAL?(e.left!=null&&(e.right=i.scrollWidth-i.clientWidth-e.left),ms()==x.INVERTED?e.left=e.right:ms()==x.NEGATED&&(e.left=e.right?-e.right:e.right)):e.right!=null&&(e.left=i.scrollWidth-i.clientWidth-e.right),this._applyScrollToOptions(e)}_applyScrollToOptions(e){let i=this.elementRef.nativeElement;fs()?i.scrollTo(e):(e.top!=null&&(i.scrollTop=e.top),e.left!=null&&(i.scrollLeft=e.left))}measureScrollOffset(e){let i=`left`,o=`right`,r=this.elementRef.nativeElement;if(e==`top`)return r.scrollTop;if(e==`bottom`)return r.scrollHeight-r.clientHeight-r.scrollTop;let s=this.dir&&this.dir.value==`rtl`;return e==`start`?e=s?o:i:e==`end`&&(e=s?i:o),s&&ms()==x.INVERTED?e==i?r.scrollWidth-r.clientWidth-r.scrollLeft:r.scrollLeft:s&&ms()==x.NEGATED?e==i?r.scrollLeft+r.scrollWidth-r.clientWidth:-r.scrollLeft:e==i?r.scrollLeft:r.scrollWidth-r.clientWidth-r.scrollLeft}static ɵfac=function(i){return new(i||n)};static ɵdir=ZE({type:n,selectors:[[``,`cdk-scrollable`,``],[``,`cdkScrollable`,``]]})}return n})();var he=20;var M$1=(()=>{class n{_platform=b$2(p$1);_listeners;_viewportSize=null;_change=new J$3;_document=b$2(ur$1);constructor(){let e=b$2(ye$1),i=b$2(Er).createRenderer(null,null);e.runOutsideAngular(()=>{if(this._platform.isBrowser){let o=r=>this._change.next(r);this._listeners=[i.listen(`window`,`resize`,o),i.listen(`window`,`orientationchange`,o)]}this.change().subscribe(()=>this._viewportSize=null)})}ngOnDestroy(){this._listeners?.forEach(e=>e()),this._change.complete()}getViewportSize(){this._viewportSize||this._updateViewportSize();let e={width:this._viewportSize.width,height:this._viewportSize.height};return this._platform.isBrowser||(this._viewportSize=null),e}getViewportRect(){let e=this.getViewportScrollPosition(),{width:i,height:o}=this.getViewportSize();return{top:e.top,left:e.left,bottom:e.top+o,right:e.left+i,height:o,width:i}}getViewportScrollPosition(){if(!this._platform.isBrowser)return{top:0,left:0};let e=this._document,i=this._getWindow(),o=e.documentElement,r=o.getBoundingClientRect();return{top:-r.top||e.body?.scrollTop||i.scrollY||o.scrollTop||0,left:-r.left||e.body?.scrollLeft||i.scrollX||o.scrollLeft||0}}change(e=he){return e>0?this._change.pipe(ig(e)):this._change}_getWindow(){return this._document.defaultView||window}_updateViewportSize(){let e=this._getWindow();this._viewportSize=this._platform.isBrowser?{width:e.innerWidth,height:e.innerHeight}:{width:0,height:0}}static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var vt$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=qE({type:n});static ɵinj=Ol({})}return n})();var yt$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=qE({type:n});static ɵinj=Ol({imports:[ls,vt$1,ls,vt$1]})}return n})();var I=class{_attachedHost=null;attach(t){return this._attachedHost=t,t.attach(this)}detach(){let t=this._attachedHost;t!=null&&(this._attachedHost=null,t.detach())}get isAttached(){return this._attachedHost!=null}setAttachedHost(t){this._attachedHost=t}};var mt$1=class extends I{component;viewContainerRef;injector;projectableNodes;bindings;directives;constructor(t,e,i,o,r,s){super(),this.component=t,this.viewContainerRef=e,this.injector=i,this.projectableNodes=o,this.bindings=r||null,this.directives=s||null}};var Z$1=class extends I{templateRef;viewContainerRef;context;injector;constructor(t,e,i,o){super(),this.templateRef=t,this.viewContainerRef=e,this.context=i,this.injector=o}get origin(){return this.templateRef.elementRef}attach(t,e=this.context){return this.context=e,super.attach(t)}detach(){return this.context=void 0,super.detach()}};var wt$2=class extends I{element;constructor(t){super(),this.element=t instanceof Cr?t.nativeElement:t}};var U$2=class{_attachedPortal=null;_disposeFn=null;_isDisposed=!1;hasAttached(){return!!this._attachedPortal}attach(t){if(t instanceof mt$1)return this._attachedPortal=t,this.attachComponentPortal(t);if(t instanceof Z$1)return this._attachedPortal=t,this.attachTemplatePortal(t);if(this.attachDomPortal&&t instanceof wt$2)return this._attachedPortal=t,this.attachDomPortal(t)}attachDomPortal=null;detach(){this._attachedPortal&&(this._attachedPortal.setAttachedHost(null),this._attachedPortal=null),this._invokeDisposeFn()}dispose(){this.hasAttached()&&this.detach(),this._invokeDisposeFn(),this._isDisposed=!0}setDisposeFn(t){this._disposeFn=t}_invokeDisposeFn(){this._disposeFn&&(this._disposeFn(),this._disposeFn=null)}};var G=class extends U$2{outletElement;_appRef;_defaultInjector;constructor(t,e,i){super(),this.outletElement=t,this._appRef=e,this._defaultInjector=i}attachComponentPortal(t){let e;if(t.viewContainerRef){let i=t.injector||t.viewContainerRef.injector,o=i.get(Mn$1,null,{optional:!0})||void 0;e=t.viewContainerRef.createComponent(t.component,{index:t.viewContainerRef.length,injector:i,ngModuleRef:o,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),this.setDisposeFn(()=>e.destroy())}else{let i=this._appRef,o=t.injector||this._defaultInjector||oe$3.NULL,r=o.get(me$2,i.injector);e=UP(t.component,{elementInjector:o,environmentInjector:r,projectableNodes:t.projectableNodes||void 0,bindings:t.bindings||void 0,directives:t.directives||void 0}),i.attachView(e.hostView),this.setDisposeFn(()=>{i.viewCount>0&&i.detachView(e.hostView),e.destroy()})}return this.outletElement.appendChild(this._getComponentRootNode(e)),this._attachedPortal=t,e}attachTemplatePortal(t){let e=t.viewContainerRef,i=e.createEmbeddedView(t.templateRef,t.context,{injector:t.injector});return i.rootNodes.forEach(o=>this.outletElement.appendChild(o)),i.detectChanges(),this.setDisposeFn(()=>{let o=e.indexOf(i);o!==-1&&e.remove(o)}),this._attachedPortal=t,i}attachDomPortal=t=>{let e=t.element;e.parentNode;let i=this.outletElement.ownerDocument.createComment(`dom-portal`);e.parentNode.insertBefore(i,e),this.outletElement.appendChild(e),this._attachedPortal=t,super.setDisposeFn(()=>{i.parentNode&&i.parentNode.replaceChild(e,i)})};dispose(){super.dispose(),this.outletElement.remove()}_getComponentRootNode(t){return t.hostView.rootNodes[0]}};var ci$1=(()=>{class n extends U$2{_moduleRef=b$2(Mn$1,{optional:!0});_document=b$2(ur$1);_viewContainerRef=b$2(Mi$1);_isInitialized=!1;_attachedRef=null;get portal(){return this._attachedPortal}set portal(e){this.hasAttached()&&!e&&!this._isInitialized||(this.hasAttached()&&super.detach(),e&&super.attach(e),this._attachedPortal=e||null)}attached=new Be$2;get attachedRef(){return this._attachedRef}ngOnInit(){this._isInitialized=!0}ngOnDestroy(){super.dispose(),this._attachedRef=this._attachedPortal=null}attachComponentPortal(e){e.setAttachedHost(this);let i=e.viewContainerRef!=null?e.viewContainerRef:this._viewContainerRef,o=i.createComponent(e.component,{index:i.length,injector:e.injector||i.injector,projectableNodes:e.projectableNodes||void 0,ngModuleRef:this._moduleRef||void 0,bindings:e.bindings||void 0,directives:e.directives||void 0});return i!==this._viewContainerRef&&this._getRootNode().appendChild(o.hostView.rootNodes[0]),super.setDisposeFn(()=>o.destroy()),this._attachedPortal=e,this._attachedRef=o,this.attached.emit(o),o}attachTemplatePortal(e){e.setAttachedHost(this);let i=this._viewContainerRef.createEmbeddedView(e.templateRef,e.context,{injector:e.injector});return super.setDisposeFn(()=>this._viewContainerRef.clear()),this._attachedPortal=e,this._attachedRef=i,this.attached.emit(i),i}attachDomPortal=e=>{let i=e.element;i.parentNode;let o=this._document.createComment(`dom-portal`);e.setAttachedHost(this),i.parentNode.insertBefore(o,i),this._getRootNode().appendChild(i),this._attachedPortal=e,super.setDisposeFn(()=>{o.parentNode&&o.parentNode.replaceChild(i,o)})};_getRootNode(){let e=this._viewContainerRef.element.nativeElement;return e.nodeType===e.ELEMENT_NODE?e:e.parentNode}static ɵfac=(()=>{let e;return function(o){return(e||(e=Wm(n)))(o||n)}})();static ɵdir=ZE({type:n,selectors:[[``,`cdkPortalOutlet`,``]],inputs:{portal:[0,`cdkPortalOutlet`,`portal`]},outputs:{attached:`attached`},exportAs:[`cdkPortalOutlet`],features:[bp]})}return n})();var Tt$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=qE({type:n});static ɵinj=Ol({})}return n})();var zt=fs();function jt(n){return new $$1(n.get(M$1),n.get(ur$1))}var $$1=class{_viewportRuler;_previousHTMLStyles={top:``,left:``};_previousScrollPosition;_isEnabled=!1;_document;constructor(t,e){this._viewportRuler=t,this._document=e}attach(){}enable(){if(this._canBeEnabled()){let t=this._document.documentElement;this._previousScrollPosition=this._viewportRuler.getViewportScrollPosition(),this._previousHTMLStyles.left=t.style.left||``,this._previousHTMLStyles.top=t.style.top||``,t.style.left=es(-this._previousScrollPosition.left),t.style.top=es(-this._previousScrollPosition.top),t.classList.add(`cdk-global-scrollblock`),this._isEnabled=!0}}disable(){if(this._isEnabled){let t=this._document.documentElement,e=this._document.body,i=t.style,o=e.style,r=i.scrollBehavior||``,s=o.scrollBehavior||``;this._isEnabled=!1,i.left=this._previousHTMLStyles.left,i.top=this._previousHTMLStyles.top,t.classList.remove(`cdk-global-scrollblock`),zt&&(i.scrollBehavior=o.scrollBehavior=`auto`),window.scroll(this._previousScrollPosition.left,this._previousScrollPosition.top),zt&&(i.scrollBehavior=r,o.scrollBehavior=s)}}_canBeEnabled(){if(this._document.documentElement.classList.contains(`cdk-global-scrollblock`)||this._isEnabled)return!1;let e=this._document.documentElement,i=this._viewportRuler.getViewportSize();return e.scrollHeight>i.height||e.scrollWidth>i.width}};function Zt$1(n,t){return new K$2(n.get(F$1),n.get(ye$1),n.get(M$1),t)}var K$2=class{_scrollDispatcher;_ngZone;_viewportRuler;_config;_scrollSubscription=null;_overlayRef;_initialScrollPosition;constructor(t,e,i,o){this._scrollDispatcher=t,this._ngZone=e,this._viewportRuler=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(this._scrollSubscription)return;let t=this._scrollDispatcher.scrolled(0).pipe(Bn$1(e=>!e||!this._overlayRef.overlayElement.contains(e.getElementRef().nativeElement)));this._config&&this._config.threshold&&this._config.threshold>1?(this._initialScrollPosition=this._viewportRuler.getViewportScrollPosition().top,this._scrollSubscription=t.subscribe(()=>{let e=this._viewportRuler.getViewportScrollPosition().top;Math.abs(e-this._initialScrollPosition)>this._config.threshold?this._detach():this._overlayRef.updatePosition()})):this._scrollSubscription=t.subscribe(this._detach)}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}_detach=()=>{this.disable(),this._overlayRef.hasAttached()&&this._ngZone.run(()=>this._overlayRef.detach())}};var T=class{enable(){}disable(){}attach(){}};function Ct$2(n,t){return t.some(e=>{let i=n.bottom<e.top,o=n.top>e.bottom,r=n.right<e.left,s=n.left>e.right;return i||o||r||s})}function Lt(n,t){return t.some(e=>{let i=n.top<e.top,o=n.bottom>e.bottom,r=n.left<e.left,s=n.right>e.right;return i||o||r||s})}function Ut(n,t){return new q(n.get(F$1),n.get(M$1),n.get(ye$1),t)}var q=class{_scrollDispatcher;_viewportRuler;_ngZone;_config;_scrollSubscription=null;_overlayRef;constructor(t,e,i,o){this._scrollDispatcher=t,this._viewportRuler=e,this._ngZone=i,this._config=o}attach(t){this._overlayRef,this._overlayRef=t}enable(){if(!this._scrollSubscription){let t=this._config?this._config.scrollThrottle:0;this._scrollSubscription=this._scrollDispatcher.scrolled(t).subscribe(()=>{if(this._overlayRef.updatePosition(),this._config&&this._config.autoClose){let e=this._overlayRef.overlayElement.getBoundingClientRect(),{width:i,height:o}=this._viewportRuler.getViewportSize();Ct$2(e,[{width:i,height:o,bottom:o,right:i,top:0,left:0}])&&(this.disable(),this._ngZone.run(()=>this._overlayRef.detach()))}})}}disable(){this._scrollSubscription&&(this._scrollSubscription.unsubscribe(),this._scrollSubscription=null)}detach(){this.disable(),this._overlayRef=null}};var Gt$2=(()=>{class n{_injector=b$2(oe$3);noop=()=>new T;close=e=>Zt$1(this._injector,e);block=()=>jt(this._injector);reposition=e=>Ut(this._injector,e);static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var Q=class{positionStrategy;scrollStrategy=new T;panelClass=``;hasBackdrop=!1;backdropClass=`cdk-overlay-dark-backdrop`;disableAnimations;width;height;minWidth;minHeight;maxWidth;maxHeight;direction;disposeOnNavigation=!1;usePopover;eventPredicate;constructor(t){if(t){let e=Object.keys(t);for(let i of e)t[i]!==void 0&&(this[i]=t[i])}}};var J=class{connectionPair;scrollableViewProperties;constructor(t,e){this.connectionPair=t,this.scrollableViewProperties=e}};var $t=(()=>{class n{_attachedOverlays=[];_document=b$2(ur$1);_isAttached=!1;ngOnDestroy(){this.detach()}add(e){this.remove(e),this._attachedOverlays.push(e)}remove(e){let i=this._attachedOverlays.indexOf(e);i>-1&&this._attachedOverlays.splice(i,1),this._attachedOverlays.length===0&&this.detach()}canReceiveEvent(e,i,o){return o.observers.length<1?!1:e.eventPredicate?e.eventPredicate(i):!0}static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var Kt$1=(()=>{class n extends $t{_ngZone=b$2(ye$1);_renderer=b$2(Er).createRenderer(null,null);_cleanupKeydown;add(e){super.add(e),this._isAttached||(this._ngZone.runOutsideAngular(()=>{this._cleanupKeydown=this._renderer.listen(`body`,`keydown`,this._keydownListener)}),this._isAttached=!0)}detach(){this._isAttached&&(this._cleanupKeydown?.(),this._isAttached=!1)}_keydownListener=e=>{let i=this._attachedOverlays;for(let o=i.length-1;o>-1;o--){let r=i[o];if(this.canReceiveEvent(r,e,r._keydownEvents)){this._ngZone.run(()=>r._keydownEvents.next(e));break}}};static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var qt$1=(()=>{class n extends $t{_platform=b$2(p$1);_ngZone=b$2(ye$1);_renderer=b$2(Er).createRenderer(null,null);_cursorOriginalValue;_cursorStyleIsSet=!1;_pointerDownEventTarget=null;_cleanups;add(e){if(super.add(e),!this._isAttached){let i=this._document.body,o={capture:!0},r=this._renderer;this._cleanups=this._ngZone.runOutsideAngular(()=>[r.listen(i,`pointerdown`,this._pointerDownListener,o),r.listen(i,`click`,this._clickListener,o),r.listen(i,`auxclick`,this._clickListener,o),r.listen(i,`contextmenu`,this._clickListener,o)]),this._platform.IOS&&!this._cursorStyleIsSet&&(this._cursorOriginalValue=i.style.cursor,i.style.cursor=`pointer`,this._cursorStyleIsSet=!0),this._isAttached=!0}}detach(){this._isAttached&&(this._cleanups?.forEach(e=>e()),this._cleanups=void 0,this._platform.IOS&&this._cursorStyleIsSet&&(this._document.body.style.cursor=this._cursorOriginalValue,this._cursorStyleIsSet=!1),this._isAttached=!1)}_pointerDownListener=e=>{this._pointerDownEventTarget=w$1(e)};_clickListener=e=>{let i=w$1(e),o=e.type===`click`&&this._pointerDownEventTarget?this._pointerDownEventTarget:i;this._pointerDownEventTarget=null;let r=this._attachedOverlays.slice();for(let s=r.length-1;s>-1;s--){let a=r[s],c=a._outsidePointerEvents;if(!(!a.hasAttached()||!this.canReceiveEvent(a,e,c))){if(Nt$1(a.overlayElement,i)||Nt$1(a.overlayElement,o))break;this._ngZone?this._ngZone.run(()=>c.next(e)):c.next(e)}}};static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();function Nt$1(n,t){let e=typeof ShadowRoot<`u`&&ShadowRoot,i=t;for(;i;){if(i===n)return!0;i=e&&i instanceof ShadowRoot?i.host:i.parentNode}return!1}var Qt$2=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵcmp=WE({type:n,selectors:[[`ng-component`]],hostAttrs:[`cdk-overlay-style-loader`,``],decls:0,vars:0,template:function(i,o){},styles:[`.cdk-overlay-container, .cdk-global-overlay-wrapper {
  pointer-events: none;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
}

.cdk-overlay-container {
  position: fixed;
}
@layer cdk-overlay {
  .cdk-overlay-container {
    z-index: 1000;
  }
}
.cdk-overlay-container:empty {
  display: none;
}

.cdk-global-overlay-wrapper {
  display: flex;
  position: absolute;
}
@layer cdk-overlay {
  .cdk-global-overlay-wrapper {
    z-index: 1000;
  }
}

.cdk-overlay-pane {
  position: absolute;
  pointer-events: auto;
  box-sizing: border-box;
  display: flex;
  max-width: 100%;
  max-height: 100%;
}
@layer cdk-overlay {
  .cdk-overlay-pane {
    z-index: 1000;
  }
}

.cdk-overlay-backdrop {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  pointer-events: auto;
  -webkit-tap-highlight-color: transparent;
  opacity: 0;
  touch-action: manipulation;
}
@layer cdk-overlay {
  .cdk-overlay-backdrop {
    z-index: 1000;
    transition: opacity 400ms cubic-bezier(0.25, 0.8, 0.25, 1);
  }
}
@media (prefers-reduced-motion) {
  .cdk-overlay-backdrop {
    transition-duration: 1ms;
  }
}

.cdk-overlay-backdrop-showing {
  opacity: 1;
}
@media (forced-colors: active) {
  .cdk-overlay-backdrop-showing {
    opacity: 0.6;
  }
}

@layer cdk-overlay {
  .cdk-overlay-dark-backdrop {
    background: rgba(0, 0, 0, 0.32);
  }
}

.cdk-overlay-transparent-backdrop {
  transition: visibility 1ms linear, opacity 1ms linear;
  visibility: hidden;
  opacity: 1;
}
.cdk-overlay-transparent-backdrop.cdk-overlay-backdrop-showing, .cdk-high-contrast-active .cdk-overlay-transparent-backdrop {
  opacity: 0;
  visibility: visible;
}

.cdk-overlay-backdrop-noop-animation {
  transition: none;
}

.cdk-overlay-connected-position-bounding-box {
  position: absolute;
  display: flex;
  flex-direction: column;
  min-width: 1px;
  min-height: 1px;
}
@layer cdk-overlay {
  .cdk-overlay-connected-position-bounding-box {
    z-index: 1000;
  }
}

.cdk-global-scrollblock {
  position: fixed;
  width: 100%;
  overflow-y: scroll;
}

.cdk-overlay-popover {
  background: none;
  border: none;
  padding: 0;
  outline: 0;
  overflow: visible;
  position: fixed;
  pointer-events: none;
  white-space: normal;
  color: inherit;
  text-decoration: none;
  width: 100%;
  height: 100%;
  inset: auto;
  top: 0;
  left: 0;
}
.cdk-overlay-popover::backdrop {
  display: none;
}
.cdk-overlay-popover .cdk-overlay-backdrop {
  position: fixed;
  z-index: auto;
}
`],encapsulation:2})}return n})();var Jt$1=(()=>{class n{_platform=b$2(p$1);_containerElement;_document=b$2(ur$1);_styleLoader=b$2(F$2);ngOnDestroy(){this._containerElement?.remove()}getContainerElement(){return this._loadStyles(),this._containerElement||this._createContainer(),this._containerElement}_createContainer(){let e=`cdk-overlay-container`;if(this._platform.isBrowser||ps()){let o=this._document.querySelectorAll(`.${e}[platform="server"], .${e}[platform="test"]`);for(let r=0;r<o.length;r++)o[r].remove()}let i=this._document.createElement(`div`);i.classList.add(e),ps()?i.setAttribute(`platform`,`test`):this._platform.isBrowser||i.setAttribute(`platform`,`server`),this._document.body.appendChild(i),this._containerElement=i}_loadStyles(){this._styleLoader.load(Qt$2)}static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var kt=class{_renderer;_ngZone;element;_cleanupClick;_cleanupTransitionEnd;_fallbackTimeout;constructor(t,e,i,o){this._renderer=e,this._ngZone=i,this.element=t.createElement(`div`),this.element.classList.add(`cdk-overlay-backdrop`),this._cleanupClick=e.listen(this.element,`click`,o)}detach(){this._ngZone.runOutsideAngular(()=>{let t=this.element;clearTimeout(this._fallbackTimeout),this._cleanupTransitionEnd?.(),this._cleanupTransitionEnd=this._renderer.listen(t,`transitionend`,this.dispose),this._fallbackTimeout=setTimeout(this.dispose,500),t.style.pointerEvents=`none`,t.classList.remove(`cdk-overlay-backdrop-showing`)})}dispose=()=>{clearTimeout(this._fallbackTimeout),this._cleanupClick?.(),this._cleanupTransitionEnd?.(),this._cleanupClick=this._cleanupTransitionEnd=this._fallbackTimeout=void 0,this.element.remove()}};function St$2(n){return n&&n.nodeType===1}var bt$1=Bo([]);var tt=class{_portalOutlet;_host;_pane;_config;_ngZone;_keyboardDispatcher;_document;_location;_outsideClickDispatcher;_animationsDisabled;_injector;_renderer;_backdropClick=new J$3;_attachments=new J$3;_detachments=new J$3;_positionStrategy;_scrollStrategy;_locationChanges;_backdropRef=null;_detachContentMutationObserver;_detachContentAfterRenderRef;_disposed=!1;_previousHostParent;_keydownEvents=new J$3;_outsidePointerEvents=new J$3;_afterNextRenderRef;constructor(t,e,i,o,r,s,a,c,u,l=!1,d,f){this._portalOutlet=t,this._host=e,this._pane=i,this._config=o,this._ngZone=r,this._keyboardDispatcher=s,this._document=a,this._location=c,this._outsideClickDispatcher=u,this._animationsDisabled=l,this._injector=d,this._renderer=f,o.scrollStrategy&&(this._scrollStrategy=o.scrollStrategy,this._scrollStrategy.attach(this)),this._positionStrategy=o.positionStrategy}get overlayElement(){return this._pane}get backdropElement(){return this._backdropRef?.element||null}get hostElement(){return this._host}get eventPredicate(){return this._config?.eventPredicate||null}attach(t){if(this._disposed)return null;this._attachHost();let e=this._portalOutlet.attach(t);if(this._positionStrategy?.attach(this),this._updateStackingOrder(),this._updateElementSize(),this._updateElementDirection(),mh(()=>{bt$1.update(i=>i.includes(this)?i:[...i,this])}),this._scrollStrategy&&this._scrollStrategy.enable(),this._afterNextRenderRef?.destroy(),this._afterNextRenderRef=tv(()=>{this.hasAttached()&&this.updatePosition()},{injector:this._injector}),this._togglePointerEvents(!0),this._config.hasBackdrop&&this._attachBackdrop(),this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!0),this._attachments.next(),this._completeDetachContent(),this._keyboardDispatcher.add(this),this._config.disposeOnNavigation===!0||this._config.disposeOnNavigation===`pop-state`){let i=this._location.subscribe(()=>this.dispose());this._locationChanges=()=>i.unsubscribe()}else this._config.disposeOnNavigation===`url-change`&&(this._locationChanges=this._location.onUrlChange(()=>this.dispose()));return this._outsideClickDispatcher.add(this),typeof e?.onDestroy==`function`&&e.onDestroy(()=>{this.hasAttached()&&this._ngZone.runOutsideAngular(()=>Promise.resolve().then(()=>this.detach()))}),e}detach(){if(!this.hasAttached())return;this.detachBackdrop(),this._togglePointerEvents(!1),this._positionStrategy&&this._positionStrategy.detach&&this._positionStrategy.detach(),this._scrollStrategy&&this._scrollStrategy.disable();let t=this._portalOutlet.detach();return this._detachments.next(),this._completeDetachContent(),this._keyboardDispatcher.remove(this),this._detachContentWhenEmpty(),this._locationChanges?.(),this._outsideClickDispatcher.remove(this),mh(()=>{bt$1.update(e=>e.filter(i=>i!==this))}),t}dispose(){if(this._disposed)return;let t=this.hasAttached();this._positionStrategy&&this._positionStrategy.dispose(),this._disposeScrollStrategy(),this._backdropRef?.dispose(),this._locationChanges?.(),this._keyboardDispatcher.remove(this),this._portalOutlet.dispose(),this._attachments.complete(),this._backdropClick.complete(),this._keydownEvents.complete(),this._outsidePointerEvents.complete(),this._outsideClickDispatcher.remove(this),this._host?.remove(),this._afterNextRenderRef?.destroy(),this._previousHostParent=this._pane=this._host=this._backdropRef=null,t&&this._detachments.next(),this._detachments.complete(),this._completeDetachContent(),this._disposed=!0,mh(()=>{bt$1.update(e=>e.filter(i=>i!==this))})}hasAttached(){return this._portalOutlet.hasAttached()}backdropClick(){return this._backdropClick}attachments(){return this._attachments}detachments(){return this._detachments}keydownEvents(){return this._keydownEvents}outsidePointerEvents(){return this._outsidePointerEvents}getConfig(){return this._config}updatePosition(){this._positionStrategy&&this._positionStrategy.apply()}updatePositionStrategy(t){t!==this._positionStrategy&&(this._positionStrategy&&this._positionStrategy.dispose(),this._positionStrategy=t,this.hasAttached()&&(t.attach(this),this.updatePosition()))}updateSize(t){this._config=q$2(q$2({},this._config),t),this._updateElementSize()}setDirection(t){this._config=z$3(q$2({},this._config),{direction:t}),this._updateElementDirection()}addPanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!0)}removePanelClass(t){this._pane&&this._toggleClasses(this._pane,t,!1)}getDirection(){let t=this._config.direction;return t?typeof t==`string`?t:t.value:`ltr`}updateScrollStrategy(t){t!==this._scrollStrategy&&(this._disposeScrollStrategy(),this._scrollStrategy=t,this.hasAttached()&&(t.attach(this),t.enable()))}_updateElementDirection(){this._host.setAttribute(`dir`,this.getDirection())}_updateElementSize(){if(!this._pane)return;let t=this._pane.style;t.width=es(this._config.width),t.height=es(this._config.height),t.minWidth=es(this._config.minWidth),t.minHeight=es(this._config.minHeight),t.maxWidth=es(this._config.maxWidth),t.maxHeight=es(this._config.maxHeight)}_togglePointerEvents(t){this._pane.style.pointerEvents=t?``:`none`}_attachHost(){if(!this._host.parentElement){let t=this._config.usePopover?this._positionStrategy?.getPopoverInsertionPoint?.():null;St$2(t)?t.after(this._host):t?.type===`parent`?t.element.appendChild(this._host):this._previousHostParent?.appendChild(this._host)}if(this._config.usePopover)try{this._host.showPopover()}catch{}}_attachBackdrop(){let t=`cdk-overlay-backdrop-showing`;this._backdropRef?.dispose(),this._backdropRef=new kt(this._document,this._renderer,this._ngZone,e=>{this._backdropClick.next(e)}),this._animationsDisabled&&this._backdropRef.element.classList.add(`cdk-overlay-backdrop-noop-animation`),this._config.backdropClass&&this._toggleClasses(this._backdropRef.element,this._config.backdropClass,!0),this._config.usePopover?this._host.prepend(this._backdropRef.element):this._host.parentElement.insertBefore(this._backdropRef.element,this._host),!this._animationsDisabled&&typeof requestAnimationFrame<`u`?this._ngZone.runOutsideAngular(()=>{requestAnimationFrame(()=>this._backdropRef?.element.classList.add(t))}):this._backdropRef.element.classList.add(t)}_updateStackingOrder(){!this._config.usePopover&&this._host.nextSibling&&this._host.parentNode.appendChild(this._host)}detachBackdrop(){this._animationsDisabled?(this._backdropRef?.dispose(),this._backdropRef=null):this._backdropRef?.detach()}_toggleClasses(t,e,i){let o=ne$2(e||[]).filter(r=>!!r);o.length&&(i?t.classList.add(...o):t.classList.remove(...o))}_detachContentWhenEmpty(){let t=!1;try{this._detachContentAfterRenderRef=tv(()=>{t=!0,this._detachContent()},{injector:this._injector})}catch(e){if(t)throw e;this._detachContent()}globalThis.MutationObserver&&this._pane&&(this._detachContentMutationObserver||=new globalThis.MutationObserver(()=>{this._detachContent()}),this._detachContentMutationObserver.observe(this._pane,{childList:!0}))}_detachContent(){(!this._pane||!this._host||this._pane.children.length===0)&&(this._pane&&this._config.panelClass&&this._toggleClasses(this._pane,this._config.panelClass,!1),this._host&&this._host.parentElement&&(this._previousHostParent=this._host.parentElement,this._host.remove()),this._completeDetachContent())}_completeDetachContent(){this._detachContentAfterRenderRef?.destroy(),this._detachContentAfterRenderRef=void 0,this._detachContentMutationObserver?.disconnect()}_disposeScrollStrategy(){let t=this._scrollStrategy;t?.disable(),t?.detach?.()}};var Wt$2=`cdk-overlay-connected-position-bounding-box`;var de=/([A-Za-z%]+)$/;function te(n,t){return new et(t,n.get(M$1),n.get(ur$1),n.get(p$1),n.get(Jt$1))}var et=class{_viewportRuler;_document;_platform;_overlayContainer;_overlayRef;_isInitialRender=!1;_lastBoundingBoxSize={width:0,height:0};_isPushed=!1;_canPush=!0;_growAfterOpen=!1;_hasFlexibleDimensions=!0;_positionLocked=!1;_originRect;_overlayRect;_viewportRect;_containerRect;_viewportMargin=0;_scrollables=[];_preferredPositions=[];_origin;_pane;_isDisposed=!1;_boundingBox=null;_lastPosition=null;_lastScrollVisibility=null;_positionChanges=new J$3;_resizeSubscription=Q$3.EMPTY;_offsetX=0;_offsetY=0;_transformOriginSelector;_appliedPanelClasses=[];_previousPushAmount=null;_popoverLocation=`global`;positionChanges=this._positionChanges;get positions(){return this._preferredPositions}constructor(t,e,i,o,r){this._viewportRuler=e,this._document=i,this._platform=o,this._overlayContainer=r,this.setOrigin(t)}attach(t){this._overlayRef&&this._overlayRef,this._validatePositions(),t.hostElement.classList.add(Wt$2),this._overlayRef=t,this._boundingBox=t.hostElement,this._pane=t.overlayElement,this._isDisposed=!1,this._isInitialRender=!0,this._lastPosition=null,this._resizeSubscription.unsubscribe(),this._resizeSubscription=this._viewportRuler.change().subscribe(()=>{this._isInitialRender=!0,this.apply()})}apply(){if(this._isDisposed||!this._platform.isBrowser)return;if(!this._isInitialRender&&this._positionLocked&&this._lastPosition){this.reapplyLastPosition();return}this._clearPanelClasses(),this._resetOverlayElementStyles(),this._resetBoundingBoxStyles(),this._viewportRect=this._getNarrowedViewportRect(),this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._containerRect=this._getContainerRect();let t=this._originRect,e=this._overlayRect,i=this._viewportRect,o=this._containerRect,r=[],s;for(let a of this._preferredPositions){let c=this._getOriginPoint(t,o,a),u=this._getOverlayPoint(c,e,a),l=this._getOverlayFit(u,e,i,a);if(l.isCompletelyWithinViewport){this._isPushed=!1,this._applyPosition(a,c);return}if(this._canFitWithFlexibleDimensions(l,u,i)){r.push({position:a,origin:c,overlayRect:e,boundingBoxRect:this._calculateBoundingBoxRect(c,a)});continue}(!s||s.overlayFit.visibleArea<l.visibleArea)&&(s={overlayFit:l,overlayPoint:u,originPoint:c,position:a,overlayRect:e})}if(r.length){let a=null,c=-1;for(let u of r){let l=u.boundingBoxRect.width*u.boundingBoxRect.height*(u.position.weight||1);l>c&&(c=l,a=u)}this._isPushed=!1,this._applyPosition(a.position,a.origin);return}if(this._canPush){this._isPushed=!0,this._applyPosition(s.position,s.originPoint);return}this._applyPosition(s.position,s.originPoint)}detach(){this._clearPanelClasses(),this._lastPosition=null,this._previousPushAmount=null,this._resizeSubscription.unsubscribe()}dispose(){this._isDisposed||(this._boundingBox&&P(this._boundingBox.style,{top:``,left:``,right:``,bottom:``,height:``,width:``,alignItems:``,justifyContent:``}),this._pane&&this._resetOverlayElementStyles(),this._overlayRef&&this._overlayRef.hostElement.classList.remove(Wt$2),this.detach(),this._positionChanges.complete(),this._overlayRef=this._boundingBox=null,this._isDisposed=!0)}reapplyLastPosition(){if(this._isDisposed||!this._platform.isBrowser)return;let t=this._lastPosition;t?(this._originRect=this._getOriginRect(),this._overlayRect=this._pane.getBoundingClientRect(),this._viewportRect=this._getNarrowedViewportRect(),this._containerRect=this._getContainerRect(),this._applyPosition(t,this._getOriginPoint(this._originRect,this._containerRect,t))):this.apply()}withScrollableContainers(t){return this._scrollables=t,this}withPositions(t){return this._preferredPositions=t,t.indexOf(this._lastPosition)===-1&&(this._lastPosition=null),this._validatePositions(),this}withViewportMargin(t){return this._viewportMargin=t,this}withFlexibleDimensions(t=!0){return this._hasFlexibleDimensions=t,this}withGrowAfterOpen(t=!0){return this._growAfterOpen=t,this}withPush(t=!0){return this._canPush=t,this}withLockedPosition(t=!0){return this._positionLocked=t,this}setOrigin(t){return this._origin=t,this}withDefaultOffsetX(t){return this._offsetX=t,this}withDefaultOffsetY(t){return this._offsetY=t,this}withTransformOriginOn(t){return this._transformOriginSelector=t,this}withPopoverLocation(t){return this._popoverLocation=t,this}getPopoverInsertionPoint(){return this._popoverLocation===`global`?null:this._popoverLocation!==`inline`?this._popoverLocation:this._origin instanceof Cr?this._origin.nativeElement:St$2(this._origin)?this._origin:null}_getOriginPoint(t,e,i){let o;if(i.originX==`center`)o=t.left+t.width/2;else{let s=this._isRtl()?t.right:t.left,a=this._isRtl()?t.left:t.right;o=i.originX==`start`?s:a}e.left<0&&(o-=e.left);let r;return i.originY==`center`?r=t.top+t.height/2:r=i.originY==`top`?t.top:t.bottom,e.top<0&&(r-=e.top),{x:o,y:r}}_getOverlayPoint(t,e,i){let o;i.overlayX==`center`?o=-e.width/2:i.overlayX===`start`?o=this._isRtl()?-e.width:0:o=this._isRtl()?0:-e.width;let r;return i.overlayY==`center`?r=-e.height/2:r=i.overlayY==`top`?0:-e.height,{x:t.x+o,y:t.y+r}}_getOverlayFit(t,e,i,o){let r=Ht(e),{x:s,y:a}=t,c=this._getOffset(o,`x`),u=this._getOffset(o,`y`);c&&(s+=c),u&&(a+=u);let l=0-s,d=s+r.width-i.width,f=0-a,_=a+r.height-i.height,g=this._subtractOverflows(r.width,l,d),m=this._subtractOverflows(r.height,f,_),Ot=g*m;return{visibleArea:Ot,isCompletelyWithinViewport:r.width*r.height===Ot,fitsInViewportVertically:m===r.height,fitsInViewportHorizontally:g==r.width}}_canFitWithFlexibleDimensions(t,e,i){if(this._hasFlexibleDimensions){let o=i.bottom-e.y,r=i.right-e.x,s=Yt$2(this._overlayRef.getConfig().minHeight),a=Yt$2(this._overlayRef.getConfig().minWidth),c=t.fitsInViewportVertically||s!=null&&s<=o,u=t.fitsInViewportHorizontally||a!=null&&a<=r;return c&&u}return!1}_pushOverlayOnScreen(t,e,i){if(this._previousPushAmount&&this._positionLocked)return{x:t.x+this._previousPushAmount.x,y:t.y+this._previousPushAmount.y};let o=Ht(e),r=this._viewportRect,s=Math.max(t.x+o.width-r.width,0),a=Math.max(t.y+o.height-r.height,0),c=Math.max(r.top-i.top-t.y,0),u=Math.max(r.left-i.left-t.x,0),l=0,d=0;return o.width<=r.width?l=u||-s:l=t.x<this._getViewportMarginStart()?r.left-i.left-t.x:0,o.height<=r.height?d=c||-a:d=t.y<this._getViewportMarginTop()?r.top-i.top-t.y:0,this._previousPushAmount={x:l,y:d},{x:t.x+l,y:t.y+d}}_applyPosition(t,e){if(this._setTransformOrigin(t),this._setOverlayElementStyles(e,t),this._setBoundingBoxStyles(e,t),t.panelClass&&this._addPanelClasses(t.panelClass),this._positionChanges.observers.length){let i=this._getScrollVisibility();if(t!==this._lastPosition||!this._lastScrollVisibility||!ue$1(this._lastScrollVisibility,i)){let o=new J(t,i);this._positionChanges.next(o)}this._lastScrollVisibility=i}this._lastPosition=t,this._isInitialRender=!1}_setTransformOrigin(t){if(!this._transformOriginSelector)return;let e=this._boundingBox.querySelectorAll(this._transformOriginSelector),i,o=t.overlayY;t.overlayX===`center`?i=`center`:this._isRtl()?i=t.overlayX===`start`?`right`:`left`:i=t.overlayX===`start`?`left`:`right`;for(let r=0;r<e.length;r++)e[r].style.transformOrigin=`${i} ${o}`}_calculateBoundingBoxRect(t,e){let i=this._viewportRect,o=this._isRtl(),r,s,a;if(e.overlayY===`top`)s=t.y,r=i.height-s+this._getViewportMarginBottom();else if(e.overlayY===`bottom`)a=i.height-t.y+this._getViewportMarginTop()+this._getViewportMarginBottom(),r=i.height-a+this._getViewportMarginTop();else{let _=Math.min(i.bottom-t.y+i.top,t.y),g=this._lastBoundingBoxSize.height;r=_*2,s=t.y-_,r>g&&!this._isInitialRender&&!this._growAfterOpen&&(s=t.y-g/2)}let c=e.overlayX===`start`&&!o||e.overlayX===`end`&&o,u=e.overlayX===`end`&&!o||e.overlayX===`start`&&o,l,d,f;if(u)f=i.width-t.x+this._getViewportMarginStart()+this._getViewportMarginEnd(),l=t.x-this._getViewportMarginStart();else if(c)d=t.x,l=i.right-t.x-this._getViewportMarginEnd();else{let _=Math.min(i.right-t.x+i.left,t.x),g=this._lastBoundingBoxSize.width;l=_*2,d=t.x-_,l>g&&!this._isInitialRender&&!this._growAfterOpen&&(d=t.x-g/2)}return{top:s,left:d,bottom:a,right:f,width:l,height:r}}_setBoundingBoxStyles(t,e){let i=this._calculateBoundingBoxRect(t,e);!this._isInitialRender&&!this._growAfterOpen&&(i.height=Math.min(i.height,this._lastBoundingBoxSize.height),i.width=Math.min(i.width,this._lastBoundingBoxSize.width));let o={};if(this._hasExactPosition())o.top=o.left=`0`,o.bottom=o.right=`auto`,o.maxHeight=o.maxWidth=``,o.width=o.height=`100%`;else{let r=this._overlayRef.getConfig().maxHeight,s=this._overlayRef.getConfig().maxWidth;o.width=es(i.width),o.height=es(i.height),o.top=es(i.top)||`auto`,o.bottom=es(i.bottom)||`auto`,o.left=es(i.left)||`auto`,o.right=es(i.right)||`auto`,e.overlayX===`center`?o.alignItems=`center`:o.alignItems=e.overlayX===`end`?`flex-end`:`flex-start`,e.overlayY===`center`?o.justifyContent=`center`:o.justifyContent=e.overlayY===`bottom`?`flex-end`:`flex-start`,r&&(o.maxHeight=es(r)),s&&(o.maxWidth=es(s))}this._lastBoundingBoxSize=i,P(this._boundingBox.style,o)}_resetBoundingBoxStyles(){P(this._boundingBox.style,{top:`0`,left:`0`,right:`0`,bottom:`0`,height:``,width:``,alignItems:``,justifyContent:``})}_resetOverlayElementStyles(){P(this._pane.style,{top:``,left:``,bottom:``,right:``,position:``,transform:``})}_setOverlayElementStyles(t,e){let i={},o=this._hasExactPosition(),r=this._hasFlexibleDimensions,s=this._overlayRef.getConfig();if(o){let l=this._viewportRuler.getViewportScrollPosition();P(i,this._getExactOverlayY(e,t,l)),P(i,this._getExactOverlayX(e,t,l))}else i.position=`static`;let a=``,c=this._getOffset(e,`x`),u=this._getOffset(e,`y`);c&&(a+=`translateX(${c}px) `),u&&(a+=`translateY(${u}px)`),i.transform=a.trim(),s.maxHeight&&(o?i.maxHeight=es(s.maxHeight):r&&(i.maxHeight=``)),s.maxWidth&&(o?i.maxWidth=es(s.maxWidth):r&&(i.maxWidth=``)),P(this._pane.style,i)}_getExactOverlayY(t,e,i){let o={top:``,bottom:``},r=this._getOverlayPoint(e,this._overlayRect,t);if(this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i)),t.overlayY===`bottom`)o.bottom=`${this._document.documentElement.clientHeight-(r.y+this._overlayRect.height)}px`;else o.top=es(r.y);return o}_getExactOverlayX(t,e,i){let o={left:``,right:``},r=this._getOverlayPoint(e,this._overlayRect,t);this._isPushed&&(r=this._pushOverlayOnScreen(r,this._overlayRect,i));let s;if(this._isRtl()?s=t.overlayX===`end`?`left`:`right`:s=t.overlayX===`end`?`right`:`left`,s===`right`)o.right=`${this._document.documentElement.clientWidth-(r.x+this._overlayRect.width)}px`;else o.left=es(r.x);return o}_getScrollVisibility(){let t=this._getOriginRect(),e=this._pane.getBoundingClientRect(),i=this._scrollables.map(o=>o.getElementRef().nativeElement.getBoundingClientRect());return{isOriginClipped:Lt(t,i),isOriginOutsideView:Ct$2(t,i),isOverlayClipped:Lt(e,i),isOverlayOutsideView:Ct$2(e,i)}}_subtractOverflows(t,...e){return e.reduce((i,o)=>i-Math.max(o,0),t)}_getNarrowedViewportRect(){let t=this._document.documentElement.clientWidth,e=this._document.documentElement.clientHeight,i=this._viewportRuler.getViewportScrollPosition();return{top:i.top+this._getViewportMarginTop(),left:i.left+this._getViewportMarginStart(),right:i.left+t-this._getViewportMarginEnd(),bottom:i.top+e-this._getViewportMarginBottom(),width:t-this._getViewportMarginStart()-this._getViewportMarginEnd(),height:e-this._getViewportMarginTop()-this._getViewportMarginBottom()}}_isRtl(){return this._overlayRef.getDirection()===`rtl`}_hasExactPosition(){return!this._hasFlexibleDimensions||this._isPushed}_getOffset(t,e){return e===`x`?t.offsetX==null?this._offsetX:t.offsetX:t.offsetY==null?this._offsetY:t.offsetY}_validatePositions(){}_addPanelClasses(t){this._pane&&ne$2(t).forEach(e=>{e!==``&&this._appliedPanelClasses.indexOf(e)===-1&&(this._appliedPanelClasses.push(e),this._pane.classList.add(e))})}_clearPanelClasses(){this._pane&&(this._appliedPanelClasses.forEach(t=>{this._pane.classList.remove(t)}),this._appliedPanelClasses=[])}_getViewportMarginStart(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.start??0}_getViewportMarginEnd(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.end??0}_getViewportMarginTop(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.top??0}_getViewportMarginBottom(){return typeof this._viewportMargin==`number`?this._viewportMargin:this._viewportMargin?.bottom??0}_getOriginRect(){let t=this._origin;if(t instanceof Cr)return t.nativeElement.getBoundingClientRect();if(t instanceof Element)return t.getBoundingClientRect();let e=t.width||0,i=t.height||0;return{top:t.y,bottom:t.y+i,left:t.x,right:t.x+e,height:i,width:e}}_getContainerRect(){let t=this._overlayRef.getConfig().usePopover&&this._popoverLocation!==`global`,e=this._overlayContainer.getContainerElement();t&&(e.style.display=`block`);let i=e.getBoundingClientRect();return t&&(e.style.display=``),i}};function P(n,t){for(let e in t)Object.hasOwn(t,e)&&(n[e]=t[e]);return n}function Yt$2(n){if(typeof n!=`number`&&n!=null){let[t,e]=n.split(de);return!e||e===`px`?parseFloat(t):null}return n||null}function Ht(n){return{top:Math.floor(n.top),right:Math.floor(n.right),bottom:Math.floor(n.bottom),left:Math.floor(n.left),width:Math.floor(n.width),height:Math.floor(n.height)}}function ue$1(n,t){return n===t?!0:n.isOriginClipped===t.isOriginClipped&&n.isOriginOutsideView===t.isOriginOutsideView&&n.isOverlayClipped===t.isOverlayClipped&&n.isOverlayOutsideView===t.isOverlayOutsideView}var Xt$2=`cdk-global-overlay-wrapper`;function ee(n){return new it$1}var it$1=class{_overlayRef;_cssPosition=`static`;_topOffset=``;_bottomOffset=``;_alignItems=``;_xPosition=``;_xOffset=``;_width=``;_height=``;_isDisposed=!1;attach(t){let e=t.getConfig();this._overlayRef=t,this._width&&!e.width&&t.updateSize({width:this._width}),this._height&&!e.height&&t.updateSize({height:this._height}),t.hostElement.classList.add(Xt$2),this._isDisposed=!1}top(t=``){return this._bottomOffset=``,this._topOffset=t,this._alignItems=`flex-start`,this}left(t=``){return this._xOffset=t,this._xPosition=`left`,this}bottom(t=``){return this._topOffset=``,this._bottomOffset=t,this._alignItems=`flex-end`,this}right(t=``){return this._xOffset=t,this._xPosition=`right`,this}start(t=``){return this._xOffset=t,this._xPosition=`start`,this}end(t=``){return this._xOffset=t,this._xPosition=`end`,this}width(t=``){return this._overlayRef?this._overlayRef.updateSize({width:t}):this._width=t,this}height(t=``){return this._overlayRef?this._overlayRef.updateSize({height:t}):this._height=t,this}centerHorizontally(t=``){return this.left(t),this._xPosition=`center`,this}centerVertically(t=``){return this.top(t),this._alignItems=`center`,this}apply(){if(!this._overlayRef||!this._overlayRef.hasAttached())return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement.style,{width:o,height:r,maxWidth:s,maxHeight:a}=this._overlayRef.getConfig(),c=(o===`100%`||o===`100vw`)&&(!s||s===`100%`||s===`100vw`),u=(r===`100%`||r===`100vh`)&&(!a||a===`100%`||a===`100vh`),l=this._xPosition,d=this._xOffset,f=this._overlayRef.getConfig().direction===`rtl`,_=``,g=``,m=``;c?m=`flex-start`:l===`center`?(m=`center`,f?g=d:_=d):f?l===`left`||l===`end`?(m=`flex-end`,_=d):(l===`right`||l===`start`)&&(m=`flex-start`,g=d):l===`left`||l===`start`?(m=`flex-start`,_=d):(l===`right`||l===`end`)&&(m=`flex-end`,g=d),t.position=this._cssPosition,t.marginLeft=c?`0`:_,t.marginTop=u?`0`:this._topOffset,t.marginBottom=this._bottomOffset,t.marginRight=c?`0`:g,e.justifyContent=m,e.alignItems=u?`flex-start`:this._alignItems}dispose(){if(this._isDisposed||!this._overlayRef)return;let t=this._overlayRef.overlayElement.style,e=this._overlayRef.hostElement,i=e.style;e.classList.remove(Xt$2),i.justifyContent=i.alignItems=t.marginTop=t.marginBottom=t.marginLeft=t.marginRight=t.position=``,this._overlayRef=null,this._isDisposed=!0}};var ie$1=(()=>{class n{_injector=b$2(oe$3);global(){return ee()}flexibleConnectedTo(e){return te(this._injector,e)}static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var ne$1=new A$1(`OVERLAY_DEFAULT_CONFIG`);function oe$1(n,t){n.get(F$2).load(Qt$2);let e=n.get(Jt$1),i=n.get(ur$1),o=n.get(le$2),r=n.get(xi$1),s=n.get(Ht$1),a=n.get(ka,null,{optional:!0})||n.get(Er).createRenderer(null,null),c=new Q(t),u=n.get(ne$1,null,{optional:!0})?.usePopover??!0;c.direction=c.direction||s.value,!i.body||!(`showPopover`in i.body)?c.usePopover=!1:c.usePopover=t?.usePopover??u;let l=i.createElement(`div`),d=i.createElement(`div`);l.id=o.getId(`cdk-overlay-`),l.classList.add(`cdk-overlay-pane`),d.appendChild(l),c.usePopover&&(d.setAttribute(`popover`,`manual`),d.classList.add(`cdk-overlay-popover`));let f=c.usePopover?c.positionStrategy?.getPopoverInsertionPoint?.():null;return St$2(f)?f.after(d):f?.type===`parent`?f.element.appendChild(d):e.getContainerElement().appendChild(d),new tt(new G(l,r,n),d,l,c,n.get(ye$1),n.get(Kt$1),i,n.get(gt$3),n.get(qt$1),t?.disableAnimations??n.get(sm,null,{optional:!0})===`NoopAnimations`,n.get(me$2),a)}var re=(()=>{class n{scrollStrategies=b$2(Gt$2);_positionBuilder=b$2(ie$1);_injector=b$2(oe$3);create(e){return oe$1(this._injector,e)}position(){return this._positionBuilder}static ɵfac=function(i){return new(i||n)};static ɵprov=Tr({token:n,factory:n.ɵfac})}return n})();var pe$1=(()=>{class n{static ɵfac=function(i){return new(i||n)};static ɵmod=qE({type:n});static ɵinj=Ol({providers:[re],imports:[ls,Tt$2,yt$1,yt$1]})}return n})();var p=`primary`;var Fe=Symbol(`RouteTitle`);var Kt=class{params;constructor(n){this.params=n||{}}has(n){return Object.hasOwn(this.params,n)}get(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e[0]:e}return null}getAll(n){if(this.has(n)){let e=this.params[n];return Array.isArray(e)?e:[e]}return[]}get keys(){return Object.keys(this.params)}};function ie(t){return new Kt(t)}function Bt(t,n,e){for(let r=0;r<t.length;r++){let i=t[r],o=n[r];if(i[0]===`:`)e[i.substring(1)]=o;else if(i!==o.path)return!1}return!0}function an(t,n,e){let r=e.path.split(`/`),i=r.indexOf(`**`);if(i===-1){if(r.length>t.length||e.pathMatch===`full`&&(n.hasChildren()||r.length<t.length))return null;let s={},u=t.slice(0,r.length);return Bt(r,u,s)?{consumed:u,posParams:s}:null}if(i!==r.lastIndexOf(`**`))return null;let o=r.slice(0,i),a=r.slice(i+1);if(o.length+a.length>t.length||e.pathMatch===`full`&&n.hasChildren()&&e.path!==`**`)return null;let c={};return!Bt(o,t.slice(0,o.length),c)||!Bt(a,t.slice(t.length-a.length),c)?null:{consumed:t,posParams:c}}function ct(t){return new Promise((n,e)=>{t.pipe(fg()).subscribe({next:r=>n(r),error:r=>e(r)})})}function Xn(t,n){if(t.length!==n.length)return!1;for(let e=0;e<t.length;++e)if(!F(t[e],n[e]))return!1;return!0}function F(t,n){let e=t?Yt$1(t):void 0,r=n?Yt$1(n):void 0;if(!e||!r||e.length!=r.length)return!1;let i;for(let o=0;o<e.length;o++)if(i=e[o],!sn$1(t[i],n[i]))return!1;return!0}function Yt$1(t){return[...Object.keys(t),...Object.getOwnPropertySymbols(t)]}function sn$1(t,n){if(Array.isArray(t)&&Array.isArray(n)){if(t.length!==n.length)return!1;let e=[...t].sort(),r=[...n].sort();return e.every((i,o)=>r[o]===i)}else return t===n}function ei(t){return t.length>0?t[t.length-1]:null}function ue(t){return zh(t)?t:_c(t)?xe$1(Promise.resolve(t)):Bh(t)}function cn$1(t){return zh(t)?ct(t):Promise.resolve(t)}var ti={exact:ln$1,subset:dn};var un$1={exact:ri,subset:ni,ignored:()=>!0};var lr={paths:`exact`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`exact`};var ve={paths:`subset`,fragment:`ignored`,matrixParams:`ignored`,queryParams:`subset`};function dr(t,n,e){let r=t instanceof M?t:n.parseUrl(t);return zD(()=>ut(n.lastSuccessfulNavigation()?.finalUrl??new M,r,e))}function ut(t,n,e){let r=q$2(q$2({},ve),e||{});return ti[r.paths](t.root,n.root,r.matrixParams)&&un$1[r.queryParams](t.queryParams,n.queryParams)&&!(r.fragment===`exact`&&t.fragment!==n.fragment)}function ri(t,n){return F(t,n)}function ln$1(t,n,e){if(!ne(t.segments,n.segments)||!ot(t.segments,n.segments,e)||t.numberOfChildren!==n.numberOfChildren)return!1;for(let r in n.children)if(!t.children[r]||!ln$1(t.children[r],n.children[r],e))return!1;return!0}function ni(t,n){return Object.keys(n).length<=Object.keys(t).length&&Object.keys(n).every(e=>sn$1(t[e],n[e]))}function dn(t,n,e){return hn$1(t,n,n.segments,e)}function hn$1(t,n,e,r){if(t.segments.length>e.length){let i=t.segments.slice(0,e.length);return!(!ne(i,e)||n.hasChildren()||!ot(i,e,r))}else if(t.segments.length===e.length){if(!ne(t.segments,e)||!ot(t.segments,e,r))return!1;for(let i in n.children)if(!t.children[i]||!dn(t.children[i],n.children[i],r))return!1;return!0}else{let i=e.slice(0,t.segments.length),o=e.slice(t.segments.length);return!ne(t.segments,i)||!ot(t.segments,i,r)||!t.children[p]?!1:hn$1(t.children[p],n,o,r)}}function ot(t,n,e){return n.every((r,i)=>un$1[e](t[i].parameters,r.parameters))}var M=class{root;queryParams;fragment;_queryParamMap;constructor(n=new m([],{}),e={},r=null){this.root=n,this.queryParams=e,this.fragment=r}get queryParamMap(){return this._queryParamMap??=ie(this.queryParams),this._queryParamMap}toString(){return si.serialize(this)}};var m=class{segments;children;parent=null;constructor(n,e){this.segments=n,this.children=e,Object.values(e).forEach(r=>r.parent=this)}hasChildren(){return this.numberOfChildren>0}get numberOfChildren(){return Object.keys(this.children).length}toString(){return at(this)}};var K$1=class{path;parameters;_parameterMap;constructor(n,e){this.path=n,this.parameters=e}get parameterMap(){return this._parameterMap??=ie(this.parameters),this._parameterMap}toString(){return pn$1(this)}};function ii(t,n){return ne(t,n)&&t.every((e,r)=>F(e.parameters,n[r].parameters))}function ne(t,n){return t.length!==n.length?!1:t.every((e,r)=>e.path===n[r].path)}function oi(t,n){let e=[];return Object.entries(t.children).forEach(([r,i])=>{r===p&&(e=e.concat(n(i,r)))}),Object.entries(t.children).forEach(([r,i])=>{r!==p&&(e=e.concat(n(i,r)))}),e}var Ce=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:()=>new Y})}return t})();var Y=class{parse(n){let e=new Jt(n);return new M(e.parseRootSegment(),e.parseQueryParams(),e.parseFragment())}serialize(n){let e=`/${Te(n.root,!0)}`;ai(e)&&(e=`/`);let r=li(n.queryParams),i=typeof n.fragment==`string`?`#${ci(n.fragment)}`:``;return`${e}${r}${i}`}};var Jr=`http://fake`;function ai(t){try{let n=new URL(t,Jr);return n.origin!==Jr||n.pathname.startsWith(`//`)}catch{return!0}}var si=new Y;function at(t){return t.segments.map(n=>pn$1(n)).join(`/`)}function Te(t,n){if(!t.hasChildren())return at(t);if(n){let e=t.children[p]?Te(t.children[p],!1):``,r=[];return Object.entries(t.children).forEach(([i,o])=>{i!==p&&r.push(`${i}:${Te(o,!1)}`)}),r.length>0?`${e}(${r.join(`//`)})`:e}else{let e=oi(t,(r,i)=>i===p?[Te(t.children[p],!1)]:[`${i}:${Te(r,!1)}`]);return Object.keys(t.children).length===1&&t.children[p]!=null?`${at(t)}/${e[0]}`:`${at(t)}/(${e.join(`//`)})`}}function fn$1(t){return encodeURIComponent(t).replace(/%40/g,`@`).replace(/%3A/gi,`:`).replace(/%24/g,`$`).replace(/%2C/gi,`,`)}function nt(t){return fn$1(t).replace(/%3B/gi,`;`)}function ci(t){return encodeURI(t)}function Zt(t){return fn$1(t).replace(/\(/g,`%28`).replace(/\)/g,`%29`).replace(/%26/gi,`&`)}function st$1(t){return decodeURIComponent(t)}function Xr(t){return st$1(t.replace(/\+/g,`%20`))}function pn$1(t){return`${Zt(t.path)}${ui(t.parameters)}`}function ui(t){return Object.entries(t).map(([n,e])=>`;${Zt(n)}=${Zt(e)}`).join(``)}function li(t){let n=Object.entries(t).map(([e,r])=>Array.isArray(r)?r.map(i=>`${nt(e)}=${nt(i)}`).join(`&`):`${nt(e)}=${nt(r)}`).filter(e=>e);return n.length?`?${n.join(`&`)}`:``}var Vt=1073741824;function lt(t,n,e){Number(n)>=32&&!Object.hasOwn(t,Vt)&&(t[Vt]=e,delete t[Vt]),t[n]=e}var di=/^[^\/()?;#]+/;function Wt$1(t){let n=t.match(di);return n?n[0]:``}var hi=/^[^\/()?;=#]+/;function fi(t){let n=t.match(hi);return n?n[0]:``}var pi=/^[^=?&#]+/;function gi(t){let n=t.match(pi);return n?n[0]:``}var vi=/^[^&#]+/;function mi(t){let n=t.match(vi);return n?n[0]:``}var Jt=class{url;remaining;constructor(n){this.url=n,this.remaining=n}parseRootSegment(){for(;this.consumeOptional(`/`););return this.remaining===``||this.peekStartsWith(`?`)||this.peekStartsWith(`#`)?new m([],{}):new m([],this.parseChildren())}parseQueryParams(){let n={};if(this.consumeOptional(`?`))do this.parseQueryParam(n);while(this.consumeOptional(`&`));return n}parseFragment(){return this.consumeOptional(`#`)?decodeURIComponent(this.remaining):null}parseChildren(n=0){if(n>50)throw new N(4010,!1);if(this.remaining===``)return{};this.consumeOptional(`/`);let e=[];for(this.peekStartsWith(`(`)||e.push(this.parseSegment());this.peekStartsWith(`/`)&&!this.peekStartsWith(`//`)&&!this.peekStartsWith(`/(`);)this.capture(`/`),e.push(this.parseSegment());let r={};this.peekStartsWith(`/(`)&&(this.capture(`/`),r=this.parseParens(!0,n));let i={};return this.peekStartsWith(`(`)&&(i=this.parseParens(!1,n)),(e.length>0||Object.keys(r).length>0)&&(i[p]=new m(e,r)),i}parseSegment(){let n=Wt$1(this.remaining);if(n===``&&this.peekStartsWith(`;`))throw new N(4009,!1);return this.capture(n),new K$1(st$1(n),this.parseMatrixParams())}parseMatrixParams(){let n={};for(;this.consumeOptional(`;`);)this.parseParam(n);return n}parseParam(n){let e=fi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let i=Wt$1(this.remaining);i&&(r=i,this.capture(r))}lt(n,st$1(e),st$1(r))}parseQueryParam(n){let e=gi(this.remaining);if(!e)return;this.capture(e);let r=``;if(this.consumeOptional(`=`)){let a=mi(this.remaining);a&&(r=a,this.capture(r))}let i=Xr(e),o=Xr(r);if(Object.hasOwn(n,i)){let a=n[i];Array.isArray(a)||(a=[a],n[i]=a),a.push(o)}else n[i]=o}parseParens(n,e){let r=Object.create(null);for(this.capture(`(`);!this.consumeOptional(`)`)&&this.remaining.length>0;){let i=Wt$1(this.remaining),o=this.remaining[i.length];if(o!==`/`&&o!==`)`&&o!==`;`)throw new N(4010,!1);let a;i.indexOf(`:`)>-1?(a=i.slice(0,i.indexOf(`:`)),this.capture(a),this.capture(`:`)):n&&(a=p);let c=this.parseChildren(e+1),s=Object.keys(c).length===1&&c[p]?c[p]:new m([],c);lt(r,a??p,s),this.consumeOptional(`//`)}return r}peekStartsWith(n){return this.remaining.startsWith(n)}consumeOptional(n){return this.peekStartsWith(n)?(this.remaining=this.remaining.substring(n.length),!0):!1}capture(n){if(!this.consumeOptional(n))throw new N(4011,!1)}};function gn$1(t){return t.segments.length>0?new m([],{[p]:t}):t}function vn$1(t){let n=Object.create(null);for(let[r,i]of Object.entries(t.children)){let o=vn$1(i);if(r===p&&o.segments.length===0&&o.hasChildren())for(let[a,c]of Object.entries(o.children))lt(n,a,c);else(o.segments.length>0||o.hasChildren())&&lt(n,r,o)}return yi(new m(t.segments,n))}function yi(t){if(t.numberOfChildren===1&&t.children[p]){let n=t.children[p];return new m(t.segments.concat(n.segments),n.children)}return t}function Z(t){return t instanceof M}function mn(t,n,e=null,r=null,i=new Y){return Rn(yn$1(t),n,e,r,i)}function yn$1(t){let n;function e(o){let a={};for(let s of o.children){let u=e(s);a[s.outlet]=u}let c=new m(o.url,a);return o===t&&(n=c),c}let i=gn$1(e(t.root));return n??i}function Rn(t,n,e,r,i){let o=t;for(;o.parent;)o=o.parent;if(n.length===0)return Gt$1(o,o,o,e,r,i);let a=Ri(n);if(a.toRoot())return Gt$1(o,o,new m([],{}),e,r,i);let c=Si(a,o,t),s=c.processChildren?_e(c.segmentGroup,c.index,a.commands):Cn$1(c.segmentGroup,c.index,a.commands);return Gt$1(o,c.segmentGroup,s,e,r,i)}function dt(t){return typeof t==`object`&&t!=null&&!t.outlets&&!t.segmentPath}function Le(t){return typeof t==`object`&&t!=null&&t.outlets}function en(t,n,e){t||=`ɵ`;let r=new M;return r.queryParams={[t]:n},e.parse(e.serialize(r)).queryParams[t]}function Gt$1(t,n,e,r,i,o){let a={};for(let[u,l]of Object.entries(r??{}))a[u]=Array.isArray(l)?l.map(v=>en(u,v,o)):en(u,l,o);let c;t===n?c=e:c=Sn(t,n,e);return new M(gn$1(vn$1(c)),a,i)}function Sn(t,n,e){let r=Object.create(null);return Object.entries(t.children).forEach(([i,o])=>{o===n?r[i]=e:r[i]=Sn(o,n,e)}),new m(t.segments,r)}var ht=class{isAbsolute;numberOfDoubleDots;commands;constructor(n,e,r){if(this.isAbsolute=n,this.numberOfDoubleDots=e,this.commands=r,n&&r.length>0&&dt(r[0]))throw new N(4003,!1);let i=r.find(Le);if(i&&i!==ei(r))throw new N(4004,!1)}toRoot(){return this.isAbsolute&&this.commands.length===1&&this.commands[0]==`/`}};function Ri(t){if(typeof t[0]==`string`&&t.length===1&&t[0]===`/`)return new ht(!0,0,t);let n=0,e=!1,r=t.reduce((i,o,a)=>{if(typeof o==`object`&&o!=null){if(o.outlets){let c={};return Object.entries(o.outlets).forEach(([s,u])=>{c[s]=typeof u==`string`?u.split(`/`):u}),[...i,{outlets:c}]}if(o.segmentPath)return[...i,o.segmentPath]}return typeof o!=`string`?[...i,o]:a===0?(o.split(`/`).forEach((c,s)=>{s==0&&c===`.`||(s==0&&c===``?e=!0:c===`..`?n++:c!=``&&i.push(c))}),i):[...i,o]},[]);return new ht(e,n,r)}var pe=class{segmentGroup;processChildren;index;constructor(n,e,r){this.segmentGroup=n,this.processChildren=e,this.index=r}};function Si(t,n,e){if(t.isAbsolute)return new pe(n,!0,0);if(!e)return new pe(n,!1,NaN);if(e.parent===null)return new pe(e,!0,0);let r=dt(t.commands[0])?0:1;return Ci(e,e.segments.length-1+r,t.numberOfDoubleDots)}function Ci(t,n,e){let r=t,i=n,o=e;for(;o>i;){if(o-=i,r=r.parent,!r)throw new N(4005,!1);i=r.segments.length}return new pe(r,!1,i-o)}function wi(t){return Le(t[0])?t[0].outlets:{[p]:t}}function Cn$1(t,n,e){if(t??=new m([],{}),t.segments.length===0&&t.hasChildren())return _e(t,n,e);let r=bi(t,n,e),i=e.slice(r.commandIndex);if(r.match&&r.pathIndex<t.segments.length){let o=new m(t.segments.slice(0,r.pathIndex),{});return o.children[p]=new m(t.segments.slice(r.pathIndex),t.children),_e(o,0,i)}else return r.match&&i.length===0?new m(t.segments,{}):r.match&&!t.hasChildren()?Xt$1(t,n,e):r.match?_e(t,0,i):Xt$1(t,n,e)}function _e(t,n,e){if(e.length===0)return new m(t.segments,{});{let r=wi(e),i=Object.create(null);if(Object.keys(r).some(o=>o!==p)&&t.children[p]&&t.numberOfChildren===1&&t.children[p].segments.length===0){let o=_e(t.children[p],n,e);return new m(t.segments,o.children)}return Object.entries(r).forEach(([o,a])=>{typeof a==`string`&&(a=[a]),a!==null&&(i[o]=Cn$1(t.children[o],n,a))}),Object.entries(t.children).forEach(([o,a])=>{r[o]===void 0&&(i[o]=a)}),new m(t.segments,i)}}function bi(t,n,e){let r=0,i=n,o={match:!1,pathIndex:0,commandIndex:0};for(;i<t.segments.length;){if(r>=e.length)return o;let a=t.segments[i],c=e[r];if(Le(c))break;let s=`${c}`,u=r<e.length-1?e[r+1]:null;if(i>0&&s===void 0)break;if(s&&u&&typeof u==`object`&&u.outlets===void 0){if(!rn$1(s,u,a))return o;r+=2}else{if(!rn$1(s,{},a))return o;r++}i++}return{match:!0,pathIndex:i,commandIndex:r}}function Xt$1(t,n,e){let r=t.segments.slice(0,n),i=0;for(;i<e.length;){let o=e[i];if(Le(o))return new m(r,Ii(o.outlets));if(i===0&&dt(e[0])){let s=t.segments[n];r.push(new K$1(s.path,tn$1(e[0]))),i++;continue}let a=Le(o)?o.outlets[p]:`${o}`,c=i<e.length-1?e[i+1]:null;a&&c&&dt(c)?(r.push(new K$1(a,tn$1(c))),i+=2):(r.push(new K$1(a,{})),i++)}return new m(r,{})}function Ii(t){let n={};return Object.entries(t).forEach(([e,r])=>{typeof r==`string`&&(r=[r]),r!==null&&(n[e]=Xt$1(new m([],{}),0,r))}),n}function tn$1(t){let n={};return Object.entries(t).forEach(([e,r])=>n[e]=`${r}`),n}function rn$1(t,n,e){return t==e.path&&F(n,e.parameters)}var ft=class{rootInjector;outlet=null;route=null;children;attachRef=null;get injector(){return this.route?.snapshot._environmentInjector??this.rootInjector}constructor(n){this.rootInjector=n,this.children=new oe(this.rootInjector)}resetChildren(){this.children=new oe(this.rootInjector)}};var oe=(()=>{class t{rootInjector;contexts=new Map;constructor(e){this.rootInjector=e}onChildOutletCreated(e,r){let i=this.getOrCreateContext(e);i.outlet=r,this.contexts.set(e,i)}onChildOutletDestroyed(e){let r=this.getContext(e);r&&(r.outlet=null,r.attachRef=null)}onOutletDeactivated(){let e=this.contexts;return this.contexts=new Map,e}onOutletReAttached(e){this.contexts=e}getOrCreateContext(e){let r=this.getContext(e);return r||(r=new ft(this.rootInjector),this.contexts.set(e,r)),r}getContext(e){return this.contexts.get(e)||null}static ɵfac=function(r){return new(r||t)(Re$1(me$2))};static ɵprov=ce$3({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var pt=class{_root;constructor(n){this._root=n}get root(){return this._root.value}parent(n){let e=this.pathFromRoot(n);return e.length>1?e[e.length-2]:null}children(n){let e=er(n,this._root);return e?e.children.map(r=>r.value):[]}firstChild(n){let e=er(n,this._root);return e&&e.children.length>0?e.children[0].value:null}siblings(n){let e=tr(n,this._root);return e.length<2?[]:e[e.length-2].children.map(i=>i.value).filter(i=>i!==n)}pathFromRoot(n){return tr(n,this._root).map(e=>e.value)}};function er(t,n){if(t===n.value)return n;for(let e of n.children){let r=er(t,e);if(r)return r}return null}function tr(t,n){if(t===n.value)return[n];for(let e of n.children){let r=tr(t,e);if(r.length)return r.unshift(n),r}return[]}var E=class{value;children;constructor(n,e){this.value=n,this.children=e}toString(){return`TreeNode(${this.value})`}};function fe(t){let n={};return t&&t.children.forEach(e=>n[e.value.outlet]=e),n}var je$1=class extends pt{snapshot;constructor(n,e){super(n),this.snapshot=e,fr(this,n)}toString(){return this.snapshot.toString()}};function wn(t,n){let e=Ei(t,n),r=new $n$1([new K$1(``,{})]),i=new $n$1({}),o=new $n$1({}),s=new V(r,i,new $n$1({}),new $n$1(``),o,p,t,e.root);return s.snapshot=e.root,new je$1(new E(s,[]),e)}function Ei(t,n){return new xe(``,new E(new me([],{},{},``,{},p,t,null,{},n),[]))}var V=class{urlSubject;paramsSubject;queryParamsSubject;fragmentSubject;dataSubject;outlet;component;snapshot;_futureSnapshot;_routerState;_paramMap;_queryParamMap;title;url;params;queryParams;fragment;data;resources;_localInjector;pending;paramsSignal;queryParamsSignal;paramMapSignal;queryParamMapSignal;fragmentSignal;dataSignal;constructor(n,e,r,i,o,a,c,s){this.urlSubject=n,this.paramsSubject=e,this.queryParamsSubject=r,this.fragmentSubject=i,this.dataSubject=o,this.outlet=a,this.component=c,this._futureSnapshot=s,this.title=this.dataSubject?.pipe(vt$4(u=>u[Fe]))??Bh(void 0),this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o}get routeConfig(){return this._futureSnapshot.routeConfig}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=this.params.pipe(vt$4(n=>ie(n))),this._paramMap}get queryParamMap(){return this._queryParamMap??=this.queryParams.pipe(vt$4(n=>ie(n))),this._queryParamMap}toString(){return this.snapshot?this.snapshot.toString():`Future(${this._futureSnapshot})`}_setPending(n){this._futureSnapshot=n,this.pending?.set(!0)}};var Mi=`always`;function hr(t,n,e){let r,{routeConfig:i}=t;return n!==null&&(e===`always`||i?.path===``||!n.component&&!n.routeConfig?.loadComponent)?r={params:Object.keys(t.params).length===0?n.params:Object.freeze(q$2(q$2({},n.params),t.params)),data:Object.freeze(q$2(q$2({},n.data),t.data)),resolve:q$2(q$2(q$2(q$2({},t.data),n.data),i?.data),t._resolvedData)}:r={params:Object.freeze(q$2({},t.params)),data:Object.freeze(q$2({},t.data)),resolve:q$2(q$2({},t.data),t._resolvedData??{})},i&&In(i)&&(r.resolve[Fe]=i.title),r}var me=class{url;params;queryParams;fragment;data;outlet;component;routeConfig;_resolve;_resolvedData;_routerState;_paramMap;_queryParamMap;_environmentInjector;resources;get title(){return this.data?.[Fe]}constructor(n,e,r,i,o,a,c,s,u,l){this.url=n,this.params=e,this.queryParams=r,this.fragment=i,this.data=o,this.outlet=a,this.component=c,this.routeConfig=s,this._resolve=u,this._environmentInjector=l}get root(){return this._routerState.root}get parent(){return this._routerState.parent(this)}get firstChild(){return this._routerState.firstChild(this)}get children(){return this._routerState.children(this)}get pathFromRoot(){return this._routerState.pathFromRoot(this)}get paramMap(){return this._paramMap??=ie(this.params),this._paramMap}get queryParamMap(){return this._queryParamMap??=ie(this.queryParams),this._queryParamMap}toString(){return`Route(url:'${this.url.map(r=>r.toString()).join(`/`)}', path:'${this.routeConfig?this.routeConfig.path:``}')`}};var xe=class extends pt{url;constructor(n,e){super(e),this.url=n,fr(this,e)}toString(){return bn$1(this._root)}};function fr(t,n){n.value._routerState=t,n.children.forEach(e=>fr(t,e))}function bn$1(t){let n=t.children.length>0?` { ${t.children.map(bn$1).join(`, `)} } `:``;return`${t.value}${n}`}function Qt$1(t){if(t.snapshot){let n=t.snapshot,e=t._futureSnapshot;t.snapshot=e,F(n.queryParams,e.queryParams)||t.queryParamsSubject.next(e.queryParams),n.fragment!==e.fragment&&t.fragmentSubject.next(e.fragment),F(n.params,e.params)||t.paramsSubject.next(e.params),Xn(n.url,e.url)||t.urlSubject.next(e.url),F(n.data,e.data)||t.dataSubject.next(e.data)}else t.snapshot=t._futureSnapshot,t.dataSubject.next(t._futureSnapshot.data)}function rr(t,n){let e=F(t.params,n.params)&&ii(t.url,n.url),r=!t.parent!=!n.parent;return e&&!r&&(!t.parent||rr(t.parent,n.parent))}function In(t){return typeof t.title==`string`||t.title===null}var En=new A$1(``);var pr=(()=>{class t{activated=null;get activatedComponentRef(){return this.activated}_activatedRoute=null;name=p;activateEvents=new Be$2;deactivateEvents=new Be$2;attachEvents=new Be$2;detachEvents=new Be$2;routerOutletData=LP();parentContexts=b$2(oe);location=b$2(Mi$1);changeDetector=b$2(jP);inputBinder=b$2(Be,{optional:!0});supportsBindingToComponentInputs=!0;ngOnChanges(e){if(e.name){let{firstChange:r,previousValue:i}=e.name;if(r)return;this.isTrackedInParentContexts(i)&&(this.deactivate(),this.parentContexts.onChildOutletDestroyed(i)),this.initializeOutletWithName()}}ngOnDestroy(){this.isTrackedInParentContexts(this.name)&&this.parentContexts.onChildOutletDestroyed(this.name),this.inputBinder?.unsubscribeFromRouteData(this)}isTrackedInParentContexts(e){return this.parentContexts.getContext(e)?.outlet===this}ngOnInit(){this.initializeOutletWithName()}initializeOutletWithName(){if(this.parentContexts.onChildOutletCreated(this.name,this),this.activated)return;let e=this.parentContexts.getContext(this.name);e?.route&&(e.attachRef?this.attach(e.attachRef,e.route):this.activateWith(e.route,e.injector))}get isActivated(){return!!this.activated}get component(){if(!this.activated)throw new N(4012,!1);return this.activated.instance}get activatedRoute(){if(!this.activated)throw new N(4012,!1);return this._activatedRoute}get activatedRouteData(){return this._activatedRoute?this._activatedRoute.snapshot.data:{}}detach(){if(!this.activated)throw new N(4012,!1);this.location.detach();let e=this.activated;return this.activated=null,this._activatedRoute=null,this.detachEvents.emit(e.instance),e}attach(e,r){this.activated=e,this._activatedRoute=r,this.location.insert(e.hostView),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.attachEvents.emit(e.instance)}deactivate(){if(this.activated){let e=this.component;this.activated.destroy(),this.activated=null,this._activatedRoute=null,this.deactivateEvents.emit(e)}}activateWith(e,r){if(this.isActivated)throw new N(4013,!1);this._activatedRoute=e;let i=this.location,a=e.snapshot.component,c=this.parentContexts.getOrCreateContext(this.name).children,s=new nr(e,c,i.injector,this.routerOutletData);this.activated=i.createComponent(a,{index:i.length,injector:s,environmentInjector:r}),this.changeDetector.markForCheck(),this.inputBinder?.bindActivatedRouteToOutletComponent(this,this.location.injector),this.activateEvents.emit(this.activated.instance)}static ɵfac=function(r){return new(r||t)};static ɵdir=ZE({type:t,selectors:[[`router-outlet`]],inputs:{name:`name`,routerOutletData:[1,`routerOutletData`]},outputs:{activateEvents:`activate`,deactivateEvents:`deactivate`,attachEvents:`attach`,detachEvents:`detach`},exportAs:[`outlet`],features:[Cm]})}return t})();var nr=class{route;childContexts;parent;outletData;constructor(n,e,r,i){this.route=n,this.childContexts=e,this.parent=r,this.outletData=i}get(n,e){return n===V?this.route:n===oe?this.childContexts:n===En?this.outletData:this.parent.get(n,e)}};var Be=new A$1(``);var Mn=(()=>{class t{options;feature;outletDataSubscriptions=new Map;outletSeenKeys=new Map;outletEffects=new Map;constructor(e,r=null){this.options=e,this.feature=r,this.options.queryParams??=!0}bindActivatedRouteToOutletComponent(e,r){this.unsubscribeFromRouteData(e),this.subscribeToRouteData(e,r)}unsubscribeFromRouteData(e){this.outletDataSubscriptions.get(e)?.unsubscribe(),this.outletDataSubscriptions.delete(e),this.outletSeenKeys.delete(e),this.outletEffects.get(e)?.forEach(r=>r.destroy()),this.outletEffects.delete(e)}subscribeToRouteData(e,r){let{activatedRoute:i}=e,o=[],a=[];if(this.feature?.createResourceOutletBindingEffects&&e.activatedComponentRef){let{handledKeys:s,createdEffects:u}=this.feature.createResourceOutletBindingEffects(e.activatedComponentRef,i);o.push(...u),a=s}o.length>0&&this.outletEffects.set(e,o);let c=ng([this.options.queryParams?i.queryParams:Bh({}),i.params,i.data]).pipe(mg(([s,u,l],v)=>(l=q$2(q$2(q$2(q$2({},s),u),l),i.resources),v===0?Bh(l):Promise.resolve(l)))).subscribe(s=>{if(!e.isActivated||!e.activatedComponentRef||e.activatedRoute!==i||i.component===null){this.unsubscribeFromRouteData(e);return}let u=WP(i.component);if(!u){this.unsubscribeFromRouteData(e);return}let l=this.outletSeenKeys.get(e);l||(l=new Set,this.outletSeenKeys.set(e,l));for(let f of Object.keys(s))l.add(f);let v=this.options.unmatchedInputBehavior??`alwaysUndefined`;for(let{templateName:f}of u.inputs){if(a.includes(f))continue;let R=s[f];(R!==void 0||v===`alwaysUndefined`||l.has(f))&&e.activatedComponentRef.setInput(f,R)}});this.outletDataSubscriptions.set(e,c)}static ɵfac=function(r){aE()};static ɵprov=ce$3({token:t,factory:t.ɵfac})}return t})();var gr=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵcmp=WE({type:t,selectors:[[`ng-component`]],exportAs:[`emptyRouterOutlet`],decls:1,vars:0,template:function(r,i){r&1&&Vp(0,`router-outlet`)},dependencies:[pr],encapsulation:2,changeDetection:1})}return t})();function vr(t){let n=t.children&&t.children.map(vr),e=n?z$3(q$2({},t),{children:n}):q$2({},t);return!e.component&&!e.loadComponent&&(n||e.loadChildren)&&e.outlet&&e.outlet!==p&&(e.component=gr),e}var Ue$1=`imperative`;var w=(function(t){return t[t.NavigationStart=0]=`NavigationStart`,t[t.NavigationEnd=1]=`NavigationEnd`,t[t.NavigationCancel=2]=`NavigationCancel`,t[t.NavigationError=3]=`NavigationError`,t[t.RoutesRecognized=4]=`RoutesRecognized`,t[t.ResolveStart=5]=`ResolveStart`,t[t.ResolveEnd=6]=`ResolveEnd`,t[t.GuardsCheckStart=7]=`GuardsCheckStart`,t[t.GuardsCheckEnd=8]=`GuardsCheckEnd`,t[t.RouteConfigLoadStart=9]=`RouteConfigLoadStart`,t[t.RouteConfigLoadEnd=10]=`RouteConfigLoadEnd`,t[t.ChildActivationStart=11]=`ChildActivationStart`,t[t.ChildActivationEnd=12]=`ChildActivationEnd`,t[t.ActivationStart=13]=`ActivationStart`,t[t.ActivationEnd=14]=`ActivationEnd`,t[t.Scroll=15]=`Scroll`,t[t.NavigationSkipped=16]=`NavigationSkipped`,t})(w||{});var U$1=class{id;url;constructor(n,e){this.id=n,this.url=e}};var ae=class extends U$1{type=w.NavigationStart;navigationTrigger;restoredState;constructor(n,e,r=`imperative`,i=null){super(n,e),this.navigationTrigger=r,this.restoredState=i}toString(){return`NavigationStart(id: ${this.id}, url: '${this.url}')`}};var z=class extends U$1{urlAfterRedirects;type=w.NavigationEnd;constructor(n,e,r){super(n,e),this.urlAfterRedirects=r}toString(){return`NavigationEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}')`}};var b=(function(t){return t[t.Redirect=0]=`Redirect`,t[t.SupersededByNewNavigation=1]=`SupersededByNewNavigation`,t[t.NoDataFromResolver=2]=`NoDataFromResolver`,t[t.GuardRejected=3]=`GuardRejected`,t[t.Aborted=4]=`Aborted`,t})(b||{});var ke=(function(t){return t[t.IgnoredSameUrlNavigation=0]=`IgnoredSameUrlNavigation`,t[t.IgnoredByUrlHandlingStrategy=1]=`IgnoredByUrlHandlingStrategy`,t})(ke||{});var j=class extends U$1{reason;code;type=w.NavigationCancel;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}toString(){return`NavigationCancel(id: ${this.id}, url: '${this.url}')`}};function An(t){return t instanceof j&&(t.code===b.Redirect||t.code===b.SupersededByNewNavigation)}var W=class extends U$1{reason;code;type=w.NavigationSkipped;constructor(n,e,r,i){super(n,e),this.reason=r,this.code=i}};var se=class extends U$1{error;target;type=w.NavigationError;constructor(n,e,r,i){super(n,e),this.error=r,this.target=i}toString(){return`NavigationError(id: ${this.id}, url: '${this.url}', error: ${this.error})`}};var $e$1=class extends U$1{urlAfterRedirects;state;type=w.RoutesRecognized;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`RoutesRecognized(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var gt=class extends U$1{urlAfterRedirects;state;type=w.GuardsCheckStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`GuardsCheckStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var vt=class extends U$1{urlAfterRedirects;state;shouldActivate;type=w.GuardsCheckEnd;constructor(n,e,r,i,o){super(n,e),this.urlAfterRedirects=r,this.state=i,this.shouldActivate=o}toString(){return`GuardsCheckEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state}, shouldActivate: ${this.shouldActivate})`}};var mt=class extends U$1{urlAfterRedirects;state;type=w.ResolveStart;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveStart(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var yt=class extends U$1{urlAfterRedirects;state;type=w.ResolveEnd;constructor(n,e,r,i){super(n,e),this.urlAfterRedirects=r,this.state=i}toString(){return`ResolveEnd(id: ${this.id}, url: '${this.url}', urlAfterRedirects: '${this.urlAfterRedirects}', state: ${this.state})`}};var Rt=class{route;type=w.RouteConfigLoadStart;constructor(n){this.route=n}toString(){return`RouteConfigLoadStart(path: ${this.route.path})`}};var St$1=class{route;type=w.RouteConfigLoadEnd;constructor(n){this.route=n}toString(){return`RouteConfigLoadEnd(path: ${this.route.path})`}};var Ct$1=class{snapshot;type=w.ChildActivationStart;constructor(n){this.snapshot=n}toString(){return`ChildActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var wt$1=class{snapshot;type=w.ChildActivationEnd;constructor(n){this.snapshot=n}toString(){return`ChildActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var bt=class{snapshot;type=w.ActivationStart;constructor(n){this.snapshot=n}toString(){return`ActivationStart(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var It$1=class{snapshot;type=w.ActivationEnd;constructor(n){this.snapshot=n}toString(){return`ActivationEnd(path: '${this.snapshot.routeConfig&&this.snapshot.routeConfig.path||``}')`}};var ye=class{};var ze=class{};var Re=class{url;navigationBehaviorOptions;constructor(n,e){this.url=n,this.navigationBehaviorOptions=e}};function Ai(t){return!(t instanceof ye)&&!(t instanceof Re)&&!(t instanceof ze)}function Di(t,n,e){let r=new Set;return{newlyCreatedRoutes:r,state:new je$1(qe$1(t,n._root,e?e._root:void 0,r),n)}}function qe$1(t,n,e,r){if(e&&t.shouldReuseRoute(n.value,e.value.snapshot)){let i=e.value;i._setPending(n.value);return new E(i,Ti(t,n,e,r))}else{if(t.shouldAttach(n.value)){let a=t.retrieve(n.value);if(a!==null){let c=a.route;return c.value._setPending(n.value),c.children=n.children.map(s=>qe$1(t,s,void 0,r)),c}}let i=Ni(n.value);i._setPending(n.value),r.add(i);return new E(i,n.children.map(a=>qe$1(t,a,void 0,r)))}}function Ti(t,n,e,r){return n.children.map(i=>{for(let o of e.children)if(t.shouldReuseRoute(i.value,o.value.snapshot))return qe$1(t,i,o,r);return qe$1(t,i,void 0,r)})}function Ni(t){return new V(new $n$1(t.url),new $n$1(t.params),new $n$1(t.queryParams),new $n$1(t.fragment),new $n$1(t.data),t.outlet,t.component,t)}var ce=class t extends Error{redirectTo;navigationBehaviorOptions;constructor(n,e){super(),this.redirectTo=n,this.navigationBehaviorOptions=e,Object.setPrototypeOf(this,t.prototype)}};var Dn=`ngNavigationCancelingError`;function Oe(t,n){let{redirectTo:e,navigationBehaviorOptions:r}=Z(n)?{redirectTo:n,navigationBehaviorOptions:void 0}:n,i=Tn(!1,b.Redirect);return i.url=e,i.navigationBehaviorOptions=r,i}function Tn(t,n){let e=new Error(`NavigationCancelingError: ${t||``}`);return e[Dn]=!0,e.cancellationCode=n,e}function _i(t){return Nn(t)&&Z(t.url)}function Nn(t){return!!t&&t[Dn]}var ir=class{routeReuseStrategy;futureState;currState;forwardEvent;inputBindingEnabled;constructor(n,e,r,i,o){this.routeReuseStrategy=n,this.futureState=e,this.currState=r,this.forwardEvent=i,this.inputBindingEnabled=o}activate(n){let e=this.futureState._root,r=this.currState?this.currState._root:null;this.deactivateChildRoutes(e,r,n),Qt$1(this.futureState.root),this.activateChildRoutes(e,r,n)}deactivateChildRoutes(n,e,r){let i=fe(e);n.children.forEach(o=>{let a=o.value.outlet;this.deactivateRoutes(o,i[a],r),delete i[a]}),Object.values(i).forEach(o=>{this.deactivateRouteAndItsChildren(o,r)})}deactivateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(i===o)if(i.component){let a=r.getContext(i.outlet);a&&this.deactivateChildRoutes(n,e,a.children)}else this.deactivateChildRoutes(n,e,r);else o&&this.deactivateRouteAndItsChildren(e,r)}deactivateRouteAndItsChildren(n,e){n.value.component&&this.routeReuseStrategy.shouldDetach(n.value.snapshot)?this.detachAndStoreRouteSubtree(n,e):this.deactivateRouteAndOutlet(n,e)}detachAndStoreRouteSubtree(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=fe(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);if(r&&r.outlet){let a=r.outlet.detach(),c=r.children.contexts;r.resetChildren(),this.routeReuseStrategy.store(n.value.snapshot,{componentRef:a,route:n,contexts:c})}}deactivateRouteAndOutlet(n,e){let r=e.getContext(n.value.outlet),i=r&&n.value.component?r.children:e,o=fe(n);for(let a of Object.values(o))this.deactivateRouteAndItsChildren(a,i);r&&(r.outlet&&(r.outlet.deactivate(),r.children.onOutletDeactivated()),r.attachRef=null,r.route=null),n.value._localInjector?.destroy()}activateChildRoutes(n,e,r){let i=fe(e);n.children.forEach(o=>{this.activateRoutes(o,i[o.value.outlet],r),this.forwardEvent(new It$1(o.value.snapshot))}),n.children.length&&this.forwardEvent(new wt$1(n.value.snapshot))}activateRoutes(n,e,r){let i=n.value,o=e?e.value:null;if(Qt$1(i),i===o)if(i.component){let a=r.getOrCreateContext(i.outlet);this.activateChildRoutes(n,e,a.children)}else this.activateChildRoutes(n,e,r);else if(i.component){let a=r.getOrCreateContext(i.outlet);if(this.routeReuseStrategy.shouldAttach(i.snapshot)){let c=this.routeReuseStrategy.retrieve(i.snapshot);this.routeReuseStrategy.store(i.snapshot,null),a.children.onOutletReAttached(c.contexts),a.attachRef=c.componentRef,a.route=c.route.value,a.outlet&&a.outlet.attach(c.componentRef,c.route.value),Qt$1(c.route.value),this.activateChildRoutes(n,null,a.children)}else a.attachRef=null,a.route=i,a.outlet&&a.outlet.activateWith(i,a.injector),this.activateChildRoutes(n,null,a.children)}else this.activateChildRoutes(n,null,r)}};var Et=class{path;route;constructor(n){this.path=n,this.route=this.path[this.path.length-1]}};var ge=class{component;route;constructor(n,e){this.component=n,this.route=e}};function Ui(t,n,e){let r=t._root;return Ne(r,n?n._root:null,e,[r.value])}function Oi(t){let n=t.routeConfig?t.routeConfig.canActivateChild:null;return!n||n.length===0?null:{node:t,guards:n}}function we(t,n){let e=Symbol(),r=n.get(t,e);return r===e?typeof t==`function`&&!Ng(t)?t:n.get(t):r}function Ne(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=fe(n);return t.children.forEach(a=>{Pi(a,o[a.value.outlet],e,r.concat([a.value]),i),delete o[a.value.outlet]}),Object.entries(o).forEach(([a,c])=>Pe(c,e.getContext(a),e,i)),i}function Pi(t,n,e,r,i={canDeactivateChecks:[],canActivateChecks:[]}){let o=t.value,a=n?n.value:null,c=e?e.getContext(t.value.outlet):null;if(a&&o.routeConfig===a.routeConfig){let s=Li(a,o,o.routeConfig.runGuardsAndResolvers);s?i.canActivateChecks.push(new Et(r)):(o.data=a.data,o._resolvedData=a._resolvedData),o.component?Ne(t,n,c?c.children:null,r,i):Ne(t,n,e,r,i),s&&c&&c.outlet&&c.outlet.isActivated&&i.canDeactivateChecks.push(new ge(c.outlet.component,a))}else a&&Pe(n,c,e,i),i.canActivateChecks.push(new Et(r)),o.component?Ne(t,null,c?c.children:null,r,i):Ne(t,null,e,r,i);return i}function Li(t,n,e){if(typeof e==`function`)return Co$1(n._environmentInjector,()=>e(t,n));switch(e){case`pathParamsChange`:return!ne(t.url,n.url);case`pathParamsOrQueryParamsChange`:return!ne(t.url,n.url)||!F(t.queryParams,n.queryParams);case`always`:return!0;case`paramsOrQueryParamsChange`:return!rr(t,n)||!F(t.queryParams,n.queryParams);default:return!rr(t,n)}}function Pe(t,n,e,r){let i=fe(t),o=t.value;Object.entries(i).forEach(([a,c])=>{o.component?n?Pe(c,n.children.getContext(a),n.children,r):Pe(c,null,null,r):Pe(c,e?e.getContext(a):null,e,r)}),o.component?n&&n.outlet&&n.outlet.isActivated?r.canDeactivateChecks.push(new ge(n.outlet.component,o)):r.canDeactivateChecks.push(new ge(null,o)):r.canDeactivateChecks.push(new ge(null,o))}function Ve$1(t){return typeof t==`function`}function ji(t){return typeof t==`boolean`}function xi(t){return t&&Ve$1(t.canLoad)}function ki(t){return t&&Ve$1(t.canActivate)}function $i(t){return t&&Ve$1(t.canActivateChild)}function zi(t){return t&&Ve$1(t.canDeactivate)}function qi(t){return t&&Ve$1(t.canMatch)}function _n$1(t){return t instanceof Dt$3||t?.name===`EmptyError`}var it=Symbol(`INITIAL_VALUE`);function Se(){return mg(t=>ng(t.map(n=>n.pipe($i$1(1),Wh(it)))).pipe(vt$4(n=>{for(let e of n)if(e!==!0){if(e===it)return it;if(e===!1||Hi(e))return e}return!0}),Bn$1(n=>n!==it),$i$1(1)))}function Hi(t){return Z(t)||t instanceof ce}function Un(t){return t.aborted?Bh(void 0).pipe($i$1(1)):new M$2(n=>{let e=()=>{n.next(),n.complete()};return t.addEventListener(`abort`,e),()=>t.removeEventListener(`abort`,e)})}function On(t){return Gh(Un(t))}function Fi(t){return Et$2(n=>{let{targetSnapshot:e,currentSnapshot:r,guards:{canActivateChecks:i,canDeactivateChecks:o}}=n;return o.length===0&&i.length===0?Bh(z$3(q$2({},n),{guardsResult:!0})):Bi(o,e,r).pipe(Et$2(a=>a&&ji(a)?Vi(e,i,t):Bh(a)),vt$4(a=>z$3(q$2({},n),{guardsResult:a})))})}function Bi(t,n,e){return xe$1(t).pipe(Et$2(r=>Yi(r.component,r.route,e,n)),fg(r=>r!==!0,!0))}function Vi(t,n,e){return xe$1(n).pipe(sg(r=>Zr(Gi(r.route.parent,e),Wi(r.route,e),Ki(t,r.path),Qi(t,r.route))),fg(r=>r!==!0,!0))}function Wi(t,n){return t!==null&&n&&n(new bt(t)),Bh(!0)}function Gi(t,n){return t!==null&&n&&n(new Ct$1(t)),Bh(!0)}function Qi(t,n){let e=n.routeConfig?n.routeConfig.canActivate:null;if(!e||e.length===0)return Bh(!0);let r=e.map(i=>$h(()=>{let o=n._environmentInjector,a=we(i,o);return ue(ki(a)?a.canActivate(n,t):Co$1(o,()=>a(n,t))).pipe(fg())}));return Bh(r).pipe(Se())}function Ki(t,n){let e=n[n.length-1],i=n.slice(0,n.length-1).reverse().map(o=>Oi(o)).filter(o=>o!==null).map(o=>$h(()=>{let a=o.guards.map(c=>{let s=o.node._environmentInjector,u=we(c,s);return ue($i(u)?u.canActivateChild(e,t):Co$1(s,()=>u(e,t))).pipe(fg())});return Bh(a).pipe(Se())}));return Bh(i).pipe(Se())}function Yi(t,n,e,r){let i=n&&n.routeConfig?n.routeConfig.canDeactivate:null;if(!i||i.length===0)return Bh(!0);let o=i.map(a=>{let c=n._environmentInjector,s=we(a,c);return ue(zi(s)?s.canDeactivate(t,n,e,r):Co$1(c,()=>s(t,n,e,r))).pipe(fg())});return Bh(o).pipe(Se())}function Zi(t,n,e,r,i){let o=n.canLoad;if(o===void 0||o.length===0)return Bh(!0);let a=o.map(c=>{let s=we(c,t),l=ue(xi(s)?s.canLoad(n,e):Co$1(t,()=>s(n,e)));return i?l.pipe(On(i)):l});return Bh(a).pipe(Se(),Pn(r))}function Pn(t){return xh(yg(n=>{if(typeof n!=`boolean`)throw Oe(t,n)}),vt$4(n=>n===!0))}function Ji(t,n,e,r,i,o){let a=n.canMatch;if(!a||a.length===0)return Bh(!0);let c=a.map(s=>{let u=we(s,t);return ue(qi(u)?u.canMatch(n,e,i):Co$1(t,()=>u(n,e,i))).pipe(On(o))});return Bh(c).pipe(Se(),Pn(r))}var H=class t extends Error{name=`NoMatch`;segmentGroup;constructor(n){super(),this.segmentGroup=n||null,Object.setPrototypeOf(this,t.prototype)}};var He=class t extends Error{urlTree;name=`AbsoluteRedirect`;constructor(n){super(),this.urlTree=n,Object.setPrototypeOf(this,t.prototype)}};function Xi(t){throw new N(4e3,!1)}function eo(t){throw Tn(!1,b.GuardRejected)}var or=class{urlSerializer;urlTree;constructor(n,e){this.urlSerializer=n,this.urlTree=e}async lineralizeSegments(n,e){let r=[],i=e.root;for(;;){if(r=r.concat(i.segments),i.numberOfChildren===0)return r;if(i.numberOfChildren>1||!i.children[p])throw Xi(`${n.redirectTo}`);i=i.children[p]}}async applyRedirectCommands(n,e,r,i,o){let a=await to(e,i,o);if(a instanceof M)throw new He(a);let c=this.applyRedirectCreateUrlTree(a,this.urlSerializer.parse(a),n,r);if(a[0]===`/`)throw new He(c);return c}applyRedirectCreateUrlTree(n,e,r,i){return new M(this.createSegmentGroup(n,e.root,r,i),this.createQueryParams(e.queryParams,this.urlTree.queryParams),e.fragment)}createQueryParams(n,e){let r={};return Object.entries(n).forEach(([i,o])=>{if(typeof o==`string`&&o[0]===`:`){let c=o.substring(1);r[i]=e[c]}else r[i]=o}),r}createSegmentGroup(n,e,r,i){let o=this.createSegments(n,e.segments,r,i),a=Object.create(null);return Object.entries(e.children).forEach(([c,s])=>{a[c]=this.createSegmentGroup(n,s,r,i)}),new m(o,a)}createSegments(n,e,r,i){return e.map(o=>o.path[0]===`:`?this.findPosParam(n,o,i):this.findOrReturn(o,r))}findPosParam(n,e,r){let i=r[e.path.substring(1)];if(!i)throw new N(4001,!1);return i}findOrReturn(n,e){let r=0;for(let i of e){if(i.path===n.path)return e.splice(r),i;r++}return n}};function to(t,n,e){if(typeof t==`string`)return Promise.resolve(t);let r=t;return ct(ue(Co$1(e,()=>r(n))))}function ro(t,n){return t.providers&&!t._injector&&(t._injector=Nc(t.providers,n,`Route: ${t.path}`)),t._injector??n}function $(t){return t.outlet||p}function no(t,n){let e=t.filter(r=>$(r)===n);return e.push(...t.filter(r=>$(r)!==n)),e}var ar={matched:!1,consumedSegments:[],remainingSegments:[],parameters:{},positionalParamSegments:{}};function Ln(t){return{routeConfig:t.routeConfig,url:t.url,params:t.params,queryParams:t.queryParams,fragment:t.fragment,data:t.data,outlet:t.outlet,title:t.title,paramMap:t.paramMap,queryParamMap:t.queryParamMap}}function io(t,n,e,r,i,o,a){let c=jn(t,n,e);if(!c.matched)return Bh(c);let s=Ln(o(c));return r=ro(n,r),Ji(r,n,e,i,s,a).pipe(vt$4(u=>u===!0?c:q$2({},ar)))}function jn(t,n,e){if(n.path===``)return n.pathMatch===`full`&&(t.hasChildren()||e.length>0)?q$2({},ar):{matched:!0,consumedSegments:[],remainingSegments:e,parameters:{},positionalParamSegments:{}};let i=(n.matcher||an)(e,t,n);if(!i)return q$2({},ar);let o={};Object.entries(i.posParams??{}).forEach(([c,s])=>{o[c]=s.path});let a=i.consumed.length>0?q$2(q$2({},o),i.consumed[i.consumed.length-1].parameters):o;return{matched:!0,consumedSegments:i.consumed,remainingSegments:e.slice(i.consumed.length),parameters:a,positionalParamSegments:i.posParams??{}}}function nn(t,n,e,r,i){return e.length>0&&so(t,e,r,i)?{segmentGroup:new m(n,ao(r,new m(e,t.children))),slicedSegments:[]}:e.length===0&&co(t,e,r)?{segmentGroup:new m(t.segments,oo(t,e,r,t.children)),slicedSegments:e}:{segmentGroup:new m(t.segments,t.children),slicedSegments:e}}function oo(t,n,e,r){let i={};for(let o of e)if(At(t,n,o)&&!r[$(o)]){let a=new m([],{});i[$(o)]=a}return q$2(q$2({},r),i)}function ao(t,n){let e={};e[p]=n;for(let r of t)if(r.path===``&&$(r)!==p){let i=new m([],{});e[$(r)]=i}return e}function so(t,n,e,r){return e.some(i=>!At(t,n,i)||!($(i)!==p)?!1:!(r!==void 0&&$(i)===r))}function co(t,n,e){return e.some(r=>At(t,n,r))}function At(t,n,e){return(t.hasChildren()||n.length>0)&&e.pathMatch===`full`?!1:e.path===``}function uo(t,n,e){return n.length===0&&!t.hasChildren()}var sr=class{};async function lo(t,n,e,r,i,o,a,c){return new cr(t,n,e,r,i,a,o,c).recognize()}var ho=31;var cr=class{injector;configLoader;rootComponentType;config;urlTree;paramsInheritanceStrategy;urlSerializer;abortSignal;applyRedirects;absoluteRedirectCount=0;allowRedirects=!0;queryParams;constructor(n,e,r,i,o,a,c,s){this.injector=n,this.configLoader=e,this.rootComponentType=r,this.config=i,this.urlTree=o,this.paramsInheritanceStrategy=a,this.urlSerializer=c,this.abortSignal=s,this.applyRedirects=new or(this.urlSerializer,this.urlTree),this.queryParams=Object.freeze(q$2({},this.urlTree.queryParams))}noMatchError(n){return new N(4002,`'${n.segmentGroup}'`)}async recognize(){let n=nn(this.urlTree.root,[],[],this.config).segmentGroup,{children:e,rootSnapshot:r}=await this.match(n),o=new xe(``,new E(r,e)),a=mn(r,[],this.urlTree.queryParams,this.urlTree.fragment);return a.queryParams=this.urlTree.queryParams,o.url=this.urlSerializer.serialize(a),{state:o,tree:a}}async match(n){let e=new me([],Object.freeze({}),this.queryParams,this.urlTree.fragment,Object.freeze({}),p,this.rootComponentType,null,{},this.injector);try{return{children:await this.processSegmentGroup(this.injector,this.config,n,p,e),rootSnapshot:e}}catch(r){if(r instanceof He)return this.absoluteRedirectCount++,this.absoluteRedirectCount>ho&&(this.allowRedirects=!1),this.urlTree=r.urlTree,this.queryParams=Object.freeze(q$2({},this.urlTree.queryParams)),this.match(r.urlTree.root);throw r instanceof H?this.noMatchError(r):r}}async processSegmentGroup(n,e,r,i,o){if(r.segments.length===0&&r.hasChildren())return this.processChildren(n,e,r,o);let a=await this.processSegment(n,e,r,r.segments,i,!0,o);return a instanceof E?[a]:[]}async processChildren(n,e,r,i){let o=[];for(let s of Object.keys(r.children))s===`primary`?o.unshift(s):o.push(s);let a=[];for(let s of o){let u=r.children[s],l=no(e,s),v=await this.processSegment(n,l,u,u.segments,s,!0,i);v instanceof E&&a.push(v)}let c=xn(a);return fo(c),c}async processSegment(n,e,r,i,o,a,c){for(let s of e)try{return await this.processSegmentAgainstRoute(s._injector??n,e,s,r,i,o,a,c)}catch(u){if(u instanceof H||_n$1(u))continue;throw u}if(uo(r,i))return new sr;throw new H(r)}async processSegmentAgainstRoute(n,e,r,i,o,a,c,s){if($(r)!==a&&(a===p||!At(i,o,r)||!r.children?.length&&!r.loadChildren||o.length===0&&!i.hasChildren()))throw new H(i);if(r.redirectTo===void 0)return this.matchSegmentAgainstRoute(n,i,r,o,a,s);if(this.allowRedirects&&c)return this.expandSegmentAgainstRouteUsingRedirect(n,i,e,r,o,a,s);throw new H(i)}async expandSegmentAgainstRouteUsingRedirect(n,e,r,i,o,a,c){let{matched:s,parameters:u,consumedSegments:l,positionalParamSegments:v,remainingSegments:f}=jn(e,i,o);if(!s)throw new H(e);let R=this.createSnapshot(n,i,o,u,c);if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let x=await this.applyRedirects.applyRedirectCommands(l,i.redirectTo,v,Ln(R),n),J=await this.applyRedirects.lineralizeSegments(i,x);return this.processSegment(n,r,e,J.concat(f),a,!1,c)}createSnapshot(n,e,r,i,o){let a=new me(r,i,this.queryParams,this.urlTree.fragment,vo(e),$(e),e.component??e._loadedComponent??null,e,mo(e),n),c=hr(a,o,this.paramsInheritanceStrategy);return a.params=c.params,a.data=c.data,a}async matchSegmentAgainstRoute(n,e,r,i,o,a){if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);let c=X=>this.createSnapshot(n,r,X.consumedSegments,X.parameters,a),s=await ct(io(e,r,i,n,this.urlSerializer,c,this.abortSignal));if(r.path===`**`&&(e.children={}),!s?.matched)throw new H(e);n=r._injector??n;let{routes:u}=await this.getChildConfig(n,r,i),l=r._loadedInjector??n,{parameters:v,consumedSegments:f,remainingSegments:R}=s,x=this.createSnapshot(n,r,f,v,a),{segmentGroup:J,slicedSegments:Ie}=nn(e,f,R,u,o),de=$(r)===o;if(de&&Ie.length===0&&J.hasChildren())return new E(x,await this.processChildren(l,u,J,x));if(de&&u.length===0&&Ie.length===0)return new E(x,[]);let Ee=await this.processSegment(l,u,J,Ie,de?p:o,!0,x);if(!de&&!(Ee instanceof E))throw new H(e);return new E(x,Ee instanceof E?[Ee]:[])}async getChildConfig(n,e,r){if(e.children)return{routes:e.children,injector:n};if(e.loadChildren){if(e._loadedRoutes!==void 0){let o=e._loadedNgModuleFactory;return o&&!e._loadedInjector&&(e._loadedInjector=o.create(n).injector),{routes:e._loadedRoutes,injector:e._loadedInjector}}if(this.abortSignal.aborted)throw new Error(this.abortSignal.reason);if(await ct(Zi(n,e,r,this.urlSerializer,this.abortSignal))){let o=await this.configLoader.loadChildren(n,e);return e._loadedRoutes=o.routes,e._loadedInjector=o.injector,e._loadedNgModuleFactory=o.factory,o}throw eo(e)}return{routes:[],injector:n}}};function fo(t){t.sort((n,e)=>n.value.outlet===p?-1:e.value.outlet===p?1:n.value.outlet.localeCompare(e.value.outlet))}function po(t){let n=t.value.routeConfig;return n&&n.path===``}function xn(t){let n=[],e=new Set;for(let i of t){if(!po(i)){n.push(i);continue}let o=n.find(a=>i.value.routeConfig===a.value.routeConfig);o!==void 0?(o.children.push(...i.children),e.add(o)):n.push(i)}for(let i of e){let o=xn(i.children);n.push(new E(i.value,o))}let r=n.filter(i=>!e.has(i));return go(r),r}function go(t){let n=Object.create(null);t.forEach(e=>{let r=n[e.value.outlet];if(r){r.url.map(a=>a.toString()).join(`/`);e.value.url.map(a=>a.toString()).join(`/`);throw new N(4006,!1)}n[e.value.outlet]=e.value})}function vo(t){return t.data||{}}function mo(t){return t.resolve||{}}function yo(t,n,e,r,i,o,a){return Et$2(async c=>{let{state:s,tree:u}=await lo(t,n,e,r,c.extractedUrl,i,o,a);return z$3(q$2({},c),{targetSnapshot:s,urlAfterRedirects:u})})}function Ro(t){return Et$2(n=>{let{targetSnapshot:e,guards:{canActivateChecks:r}}=n;if(!r.length)return Bh(n);let i=new Set(r.map(c=>c.route)),o=new Set;for(let c of i)if(!o.has(c))for(let s of kn$1(c))o.add(s);let a=0;return xe$1(o).pipe(sg(c=>i.has(c)?So(c,e,t):(c.data=hr(c,c.parent,t).resolve,Bh(void 0))),yg(()=>a++),pg(1),Et$2(c=>a===o.size?Bh(n):It$4))})}function kn$1(t){return[t,...t.children.map(e=>kn$1(e)).flat()]}function So(t,n,e){let r=t.routeConfig,i=t._resolve;return r?.title!==void 0&&!In(r)&&(i[Fe]=r.title),$h(()=>(t.data=hr(t,t.parent,e).resolve,Co(i,t,n).pipe(vt$4(o=>(t._resolvedData=o,t.data=q$2(q$2({},t.data),o),null)))))}function Co(t,n,e){let r=Yt$1(t);if(r.length===0)return Bh({});let i={};return xe$1(r).pipe(Et$2(o=>wo(t[o],n,e).pipe(fg(),yg(a=>{if(a instanceof ce)throw Oe(new Y,a);i[o]=a}))),pg(1),vt$4(()=>i),hl(o=>_n$1(o)?It$4:qh(o)))}function wo(t,n,e){let r=n._environmentInjector,i=we(t,r);return ue(i.resolve?i.resolve(n,e):Co$1(r,()=>i(n,e)))}var mr=new A$1(``);function ur(t){return mg(n=>{let e=t(n);return e?xe$1(e).pipe(vt$4(()=>n)):Bh(n)})}var yr=(()=>{class t{buildTitle(e){let r,i=e.root;for(;i!==void 0;)r=this.getResolvedTitleForRoute(i)??r,i=i.children.find(o=>o.outlet===p);return r}getResolvedTitleForRoute(e){return e.data[Fe]}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:()=>b$2($n)})}return t})();var $n=(()=>{class t extends yr{title;constructor(e){super(),this.title=e}updateTitle(e){let r=this.buildTitle(e);r!==void 0&&this.title.setTitle(r)}static ɵfac=function(r){return new(r||t)(Re$1($o$1))};static ɵprov=ce$3({token:t,factory:t.ɵfac,providedIn:`root`})}return t})();var be=new A$1(``,{factory:()=>({})});var We$1=new A$1(``);var zn=(()=>{class t{componentLoaders=new WeakMap;childrenLoaders=new WeakMap;onLoadStartListener;onLoadEndListener;compiler=b$2(GD);async loadComponent(e,r){if(this.componentLoaders.get(r))return this.componentLoaders.get(r);if(r._loadedComponent)return Promise.resolve(r._loadedComponent);this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await cn$1(Co$1(e,()=>r.loadComponent())),a=await Hn(kP(o));return this.onLoadEndListener&&this.onLoadEndListener(r),r._loadedComponent=a,a}finally{this.componentLoaders.delete(r)}})();return this.componentLoaders.set(r,i),i}loadChildren(e,r){if(this.childrenLoaders.get(r))return this.childrenLoaders.get(r);if(r._loadedRoutes)return Promise.resolve({routes:r._loadedRoutes,injector:r._loadedInjector});this.onLoadStartListener&&this.onLoadStartListener(r);let i=(async()=>{try{let o=await qn(r,this.compiler,e,this.onLoadEndListener);return r._loadedRoutes=o.routes,r._loadedInjector=o.injector,r._loadedNgModuleFactory=o.factory,o}finally{this.childrenLoaders.delete(r)}})();return this.childrenLoaders.set(r,i),i}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();async function qn(t,n,e,r){let i=await cn$1(Co$1(e,()=>t.loadChildren())),o=await Hn(kP(i)),a;o instanceof vp||Array.isArray(o)?a=o:a=await n.compileModuleAsync(o),r&&r(t);let c,s,l;return Array.isArray(a)?s=a:(c=a.create(e).injector,l=a,s=c.get(We$1,[],{optional:!0,self:!0}).flat()),{routes:s.map(vr),injector:c,factory:l}}async function Hn(t){return t}var Dt=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:()=>b$2(bo)})}return t})();var bo=(()=>{class t{shouldProcessUrl(e){return!0}extract(e){return e}merge(e,r){return e}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var Fn=new A$1(``);var Io=()=>{};var Bn=new A$1(``);var Vn=(()=>{class t{currentNavigation=Bo(null,{equal:()=>!1});currentTransition=null;lastSuccessfulNavigation=Bo(null);events=new J$3;transitionAbortWithErrorSubject=new J$3;configLoader=b$2(zn);environmentInjector=b$2(me$2);destroyRef=b$2(be$1);urlSerializer=b$2(Ce);rootContexts=b$2(oe);location=b$2(gt$3);inputBindingEnabled=b$2(Be,{optional:!0})!==null;titleStrategy=b$2(yr);options=b$2(be,{optional:!0})||{};paramsInheritanceStrategy=this.options.paramsInheritanceStrategy||Mi;urlHandlingStrategy=b$2(Dt);createViewTransition=b$2(Fn,{optional:!0});navigationErrorHandler=b$2(Bn,{optional:!0});routerResourcesFeature=b$2(mr,{optional:!0});navigationId=0;get hasRequestedNavigation(){return this.navigationId!==0}transitions;afterPreactivation=()=>Bh(void 0);rootComponentType=null;destroyed=!1;constructor(){let e=i=>this.events.next(new Rt(i)),r=i=>this.events.next(new St$1(i));this.configLoader.onLoadEndListener=r,this.configLoader.onLoadStartListener=e,this.destroyRef.onDestroy(()=>{this.destroyed=!0})}complete(){this.transitions?.complete()}handleNavigationRequest(e){let r=++this.navigationId;mh(()=>{this.transitions?.next(z$3(q$2({},e),{extractedUrl:this.urlHandlingStrategy.extract(e.rawUrl),targetSnapshot:null,targetRouterState:null,guards:{canActivateChecks:[],canDeactivateChecks:[]},guardsResult:null,id:r,routesRecognizeHandler:{},beforeActivateHandler:{}}))})}setupNavigations(e){return this.transitions=new $n$1(null),this.transitions.pipe(Bn$1(r=>r!==null),mg(r=>{let i=!0,o=!1,a=new AbortController,c=()=>!o&&this.currentTransition?.id===r.id;return Bh(r).pipe(mg(s=>{if(this.navigationId>r.id)return this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),It$4;this.currentTransition=r;let u=this.lastSuccessfulNavigation();this.currentNavigation.set({id:s.id,initialUrl:s.rawUrl,extractedUrl:s.extractedUrl,targetBrowserUrl:typeof s.extras.browserUrl==`string`?this.urlSerializer.parse(s.extras.browserUrl):s.extras.browserUrl,trigger:s.source,extras:s.extras,previousNavigation:u?z$3(q$2({},u),{previousNavigation:null}):null,abort:()=>a.abort(),routesRecognizeHandler:s.routesRecognizeHandler,beforeActivateHandler:s.beforeActivateHandler});let l=!e.navigated||this.isUpdatingInternalState()||this.isUpdatedBrowserUrl(),v=s.extras.onSameUrlNavigation??e.onSameUrlNavigation;if(!l&&v!==`reload`)return this.events.next(new W(s.id,this.urlSerializer.serialize(s.rawUrl),``,ke.IgnoredSameUrlNavigation)),s.resolve(!1),It$4;if(this.urlHandlingStrategy.shouldProcessUrl(s.rawUrl))return Bh(s).pipe(mg(f=>(this.events.next(new ae(f.id,this.urlSerializer.serialize(f.extractedUrl),f.source,f.restoredState)),f.id!==this.navigationId?It$4:Promise.resolve(f))),yo(this.environmentInjector,this.configLoader,this.rootComponentType,e.config,this.urlSerializer,this.paramsInheritanceStrategy,a.signal),yg(f=>{r.targetSnapshot=f.targetSnapshot,r.urlAfterRedirects=f.urlAfterRedirects,this.currentNavigation.update(R=>(R.finalUrl=f.urlAfterRedirects,R)),this.events.next(new ze)}),mg(f=>xe$1(r.routesRecognizeHandler.deferredHandle??Bh(void 0)).pipe(vt$4(()=>f))),yg(()=>{let f=new $e$1(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)}));if(l&&this.urlHandlingStrategy.shouldProcessUrl(s.currentRawUrl)){let{id:f,extractedUrl:R,source:x,restoredState:J,extras:Ie}=s,de=new ae(f,this.urlSerializer.serialize(R),x,J);this.events.next(de);let Ee=wn(this.rootComponentType,this.environmentInjector).snapshot;return this.currentTransition=r=z$3(q$2({},s),{targetSnapshot:Ee,urlAfterRedirects:R,extras:z$3(q$2({},Ie),{skipLocationChange:!1,replaceUrl:!1})}),this.currentNavigation.update(X=>(X.finalUrl=R,X)),Bh(r)}else return this.events.next(new W(s.id,this.urlSerializer.serialize(s.extractedUrl),``,ke.IgnoredByUrlHandlingStrategy)),s.resolve(!1),It$4}),vt$4(s=>{let u=new gt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);return this.events.next(u),this.currentTransition=r=z$3(q$2({},s),{guards:Ui(s.targetSnapshot,s.currentSnapshot,this.rootContexts)}),r}),Fi(s=>this.events.next(s)),mg(s=>{if(r.guardsResult=s.guardsResult,s.guardsResult&&typeof s.guardsResult!=`boolean`)throw Oe(this.urlSerializer,s.guardsResult);let u=new vt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot,!!s.guardsResult);if(this.events.next(u),!c())return It$4;if(!s.guardsResult)return this.cancelNavigationTransition(s,``,b.GuardRejected),It$4;if(s.guards.canActivateChecks.length===0)return Bh(s);let l=new mt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);if(this.events.next(l),!c())return It$4;let v=!1;return Bh(s).pipe(Ro(this.paramsInheritanceStrategy),yg({next:()=>{v=!0;let f=new yt(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects),s.targetSnapshot);this.events.next(f)},complete:()=>{v||this.cancelNavigationTransition(s,``,b.NoDataFromResolver)}}))}),ur(s=>{let u=v=>{let f=[];if(v.routeConfig?._loadedComponent)v.component=v.routeConfig?._loadedComponent;else if(v.routeConfig?.loadComponent){let R=v._environmentInjector;f.push(this.configLoader.loadComponent(R,v.routeConfig).then(x=>{v.component=x}))}for(let R of v.children)f.push(...u(R));return f},l=u(s.targetSnapshot.root);return l.length===0?Bh(s):xe$1(Promise.all(l).then(()=>s))}),mg(s=>{let{newlyCreatedRoutes:u,state:l}=Di(e.routeReuseStrategy,s.targetSnapshot,s.currentRouterState);return this.currentTransition=r=s=z$3(q$2({},s),{targetRouterState:l,newlyCreatedRoutes:u}),this.currentNavigation.update(v=>(v.targetRouterState=l,v)),Bh(s)}),this.routerResourcesFeature?.setupAndRunResources(a.signal)??(s=>s),ur(()=>this.afterPreactivation()),mg(()=>{let{currentSnapshot:s,targetSnapshot:u}=r,l=this.createViewTransition?.(this.environmentInjector,s.root,u.root,r.hasUAVisualTransition);return l?xe$1(l).pipe(vt$4(()=>r)):Bh(r)}),$i$1(1),mg(s=>{i=!1,this.events.next(new ye);let u=r.beforeActivateHandler.deferredHandle;return u?xe$1(u.then(()=>s)):Bh(s)}),yg(s=>{new ir(e.routeReuseStrategy,r.targetRouterState,r.currentRouterState,u=>this.events.next(u),this.inputBindingEnabled).activate(this.rootContexts),s.newlyCreatedRoutes?.clear(),c()&&(Wn(s.targetRouterState),o=!0,this.currentNavigation.update(u=>(u.abort=Io,u)),this.lastSuccessfulNavigation.set(mh(this.currentNavigation)),this.events.next(new z(s.id,this.urlSerializer.serialize(s.extractedUrl),this.urlSerializer.serialize(s.urlAfterRedirects))),this.titleStrategy?.updateTitle(s.targetRouterState.snapshot),s.resolve(!0))}),Gh(Un(a.signal).pipe(Bn$1(()=>!o&&i),yg(()=>{this.cancelNavigationTransition(r,a.signal.reason+``,b.Aborted)}))),yg({complete:()=>{o=!0}}),Gh(this.transitionAbortWithErrorSubject.pipe(yg(s=>{throw s}))),dg(()=>{a.abort(),o||this.cancelNavigationTransition(r,``,b.SupersededByNewNavigation),this.currentTransition?.id===r.id&&(this.currentNavigation.set(null),this.currentTransition=null)}),hl(s=>{if(o=!0,on(r),this.destroyed)return r.resolve(!1),It$4;if(s instanceof ce&&(s=Oe(this.urlSerializer,s)),Nn(s))this.events.next(new j(r.id,this.urlSerializer.serialize(r.extractedUrl),s.message,s.cancellationCode)),_i(s)?this.events.next(new Re(s.url,s.navigationBehaviorOptions)):r.resolve(!1);else{let u=new se(r.id,this.urlSerializer.serialize(r.extractedUrl),s,r.targetSnapshot??void 0);try{let l=Co$1(this.environmentInjector,()=>this.navigationErrorHandler?.(u));if(l instanceof ce){let{message:v,cancellationCode:f}=Oe(this.urlSerializer,l);this.events.next(new j(r.id,this.urlSerializer.serialize(r.extractedUrl),v,f)),this.events.next(new Re(l.redirectTo,l.navigationBehaviorOptions))}else throw this.events.next(u),s}catch(l){this.options.resolveNavigationPromiseOnError?r.resolve(!1):r.reject(l)}}return It$4}))}))}cancelNavigationTransition(e,r,i){on(e);let o=new j(e.id,this.urlSerializer.serialize(e.extractedUrl),r,i);this.events.next(o),e.resolve(!1)}isUpdatingInternalState(){return this.currentTransition?.extractedUrl.toString()!==this.currentTransition?.currentUrlTree.toString()}isUpdatedBrowserUrl(){let e=this.urlHandlingStrategy.extract(this.urlSerializer.parse(this.location.path(!0))),r=mh(this.currentNavigation),i=r?.targetBrowserUrl??r?.extractedUrl;return e.toString()!==i?.toString()&&!r?.extras.skipLocationChange}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function Eo(t){return t!==Ue$1}function on(t){for(let n of t.newlyCreatedRoutes??[])n._localInjector?.destroy(),n._localInjector=void 0;Wn(t.targetRouterState)}function Wn(t){if(!t)return;let n=e=>{e.value.pending?.set(!1),e.children.forEach(n)};n(t._root)}var Gn=new A$1(``);var Qn=(()=>{class t{static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:()=>b$2(Mo)})}return t})();var Mt=class{shouldDetach(n){return!1}store(n,e){}shouldAttach(n){return!1}retrieve(n){return null}shouldReuseRoute(n,e){return n.routeConfig===e.routeConfig}shouldDestroyInjector(n){return!0}};var Mo=(()=>{class t extends Mt{static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var Tt$1=(()=>{class t{urlSerializer=b$2(Ce);options=b$2(be,{optional:!0})||{};canceledNavigationResolution=this.options.canceledNavigationResolution||`replace`;location=b$2(gt$3);urlHandlingStrategy=b$2(Dt);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;currentUrlTree=new M;getCurrentUrlTree(){return this.currentUrlTree}rawUrlTree=this.currentUrlTree;getRawUrlTree(){return this.rawUrlTree}createBrowserPath({finalUrl:e,initialUrl:r,targetBrowserUrl:i}){let o=e!==void 0?this.urlHandlingStrategy.merge(e,r):r,a=i??o;return a instanceof M?this.urlSerializer.serialize(a):a}routerUrlState(e){return e?.targetBrowserUrl===void 0||e?.finalUrl===void 0?{}:{ɵrouterUrl:this.urlSerializer.serialize(e.finalUrl)}}commitTransition({targetRouterState:e,finalUrl:r,initialUrl:i}){r&&e?(this.currentUrlTree=r,this.rawUrlTree=this.urlHandlingStrategy.merge(r,i),this.routerState=e):this.rawUrlTree=i}routerState=wn(null,b$2(me$2));getRouterState(){return this.routerState}_stateMemento=this.createStateMemento();get stateMemento(){return this._stateMemento}updateStateMemento(){this._stateMemento=this.createStateMemento()}createStateMemento(){return{rawUrlTree:this.rawUrlTree,currentUrlTree:this.currentUrlTree,routerState:this.routerState}}restoredState(){return this.location.getState()}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:()=>b$2(Ao)})}return t})();var Ao=(()=>{class t extends Tt$1{currentPageId=0;lastSuccessfulId=-1;get browserPageId(){return this.canceledNavigationResolution!==`computed`?this.currentPageId:this.restoredState()?.ɵrouterPageId??this.currentPageId}registerNonRouterCurrentEntryChangeListener(e){return this.location.subscribe(r=>{r.type===`popstate`&&setTimeout(()=>{e(r.url,r.state,`popstate`,{replaceUrl:!0},r.hasUAVisualTransition)})})}handleRouterEvent(e,r){e instanceof ae?this.updateStateMemento():e instanceof W?this.commitTransition(r):e instanceof $e$1?this.urlUpdateStrategy===`eager`&&(r.extras.skipLocationChange||this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof ye?(this.commitTransition(r),this.urlUpdateStrategy===`deferred`&&!r.extras.skipLocationChange&&this.setBrowserUrl(this.createBrowserPath(r),r)):e instanceof j?An(e)?e.code===b.Redirect&&this.routerState===r.targetRouterState&&this.resetInternalState(r):this.restoreHistory(r):e instanceof se?this.restoreHistory(r,!0):e instanceof z&&(this.lastSuccessfulId=e.id,this.currentPageId=this.browserPageId)}setBrowserUrl(e,r){let{extras:i,id:o}=r,{replaceUrl:a,state:c}=i;if(this.location.isCurrentPathEqualTo(e)||a){let s=this.browserPageId,u=q$2(q$2({},c),this.generateNgRouterState(o,s,r));this.location.replaceState(e,``,u)}else{let s=q$2(q$2({},c),this.generateNgRouterState(o,this.browserPageId+1,r));this.location.go(e,``,s)}}restoreHistory(e,r=!1){if(this.canceledNavigationResolution===`computed`){let i=this.browserPageId,o=this.currentPageId-i;o!==0?this.location.historyGo(o):this.getCurrentUrlTree()===e.finalUrl&&o===0&&(this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}else this.canceledNavigationResolution===`replace`&&(r&&this.resetInternalState(e),this.resetUrlToCurrentUrlTree())}resetInternalState({finalUrl:e}){this.routerState=this.stateMemento.routerState,this.currentUrlTree=this.stateMemento.currentUrlTree,this.rawUrlTree=this.urlHandlingStrategy.merge(this.currentUrlTree,e??this.rawUrlTree)}resetUrlToCurrentUrlTree(){this.location.replaceState(this.urlSerializer.serialize(this.getRawUrlTree()),``,this.generateNgRouterState(this.lastSuccessfulId,this.currentPageId))}generateNgRouterState(e,r,i){return this.canceledNavigationResolution===`computed`?q$2({navigationId:e,ɵrouterPageId:r},this.routerUrlState(i)):q$2({navigationId:e},this.routerUrlState(i))}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function Rr(t,n){t.events.pipe(Bn$1(e=>e instanceof z||e instanceof j||e instanceof se||e instanceof W),vt$4(e=>e instanceof z||e instanceof W?0:(e instanceof j?e.code===b.Redirect||e.code===b.SupersededByNewNavigation:!1)?2:1),Bn$1(e=>e!==2),$i$1(1)).subscribe(()=>{n()})}var le=(()=>{class t{get currentUrlTree(){return this.stateManager.getCurrentUrlTree()}get rawUrlTree(){return this.stateManager.getRawUrlTree()}disposed=!1;nonRouterCurrentEntryChangeSubscription;console=b$2(AI);stateManager=b$2(Tt$1);options=b$2(be,{optional:!0})||{};pendingTasks=b$2(jt$2);urlUpdateStrategy=this.options.urlUpdateStrategy||`deferred`;navigationTransitions=b$2(Vn);urlSerializer=b$2(Ce);location=b$2(gt$3);urlHandlingStrategy=b$2(Dt);injector=b$2(me$2);_events=new J$3;get events(){return this._events}get routerState(){return this.stateManager.getRouterState()}navigated=!1;routeReuseStrategy=b$2(Qn);injectorCleanup=b$2(Gn,{optional:!0});onSameUrlNavigation=this.options.onSameUrlNavigation||`ignore`;config=b$2(We$1,{optional:!0})?.flat()??[];componentInputBindingEnabled=!!b$2(Be,{optional:!0});currentNavigation=this.navigationTransitions.currentNavigation.asReadonly();constructor(){this.resetConfig(this.config),this.navigationTransitions.setupNavigations(this).subscribe({error:e=>{}}),this.subscribeToNavigationEvents()}eventsSubscription=new Q$3;subscribeToNavigationEvents(){let e=this.navigationTransitions.events.subscribe(r=>{try{let i=this.navigationTransitions.currentTransition,o=mh(this.navigationTransitions.currentNavigation);if(i!==null&&o!==null){if(this.stateManager.handleRouterEvent(r,o),r instanceof j&&r.code!==b.Redirect&&r.code!==b.SupersededByNewNavigation)this.navigated=!0;else if(r instanceof z)this.navigated=!0,this.injectorCleanup?.(this.routeReuseStrategy,this.routerState,this.config);else if(r instanceof Re){let a=r.navigationBehaviorOptions,c=this.urlHandlingStrategy.merge(r.url,i.currentRawUrl),s=q$2({scroll:i.extras.scroll,browserUrl:i.extras.browserUrl,info:i.extras.info,skipLocationChange:i.extras.skipLocationChange,replaceUrl:i.extras.replaceUrl||this.urlUpdateStrategy===`eager`||Eo(i.source)},a);this.scheduleNavigation(c,Ue$1,null,s,i.hasUAVisualTransition,{resolve:i.resolve,reject:i.reject,promise:i.promise})}}Ai(r)&&this._events.next(r)}catch(i){this.navigationTransitions.transitionAbortWithErrorSubject.next(i)}});this.eventsSubscription.add(e)}resetRootComponentType(e){this.routerState.root.component=e,this.navigationTransitions.rootComponentType=e}initialNavigation(){this.setUpLocationChangeListener(),this.navigationTransitions.hasRequestedNavigation||this.navigateToSyncWithBrowser(this.location.path(!0),Ue$1,this.stateManager.restoredState(),{replaceUrl:!0})}setUpLocationChangeListener(){this.nonRouterCurrentEntryChangeSubscription??=this.stateManager.registerNonRouterCurrentEntryChangeListener((e,r,i,o,a)=>{this.navigateToSyncWithBrowser(e,i,r,o,a)})}navigateToSyncWithBrowser(e,r,i,o,a){let c=i?.navigationId?i:null,s=i?.ɵrouterUrl??e;if(i?.ɵrouterUrl&&(o=z$3(q$2({},o),{browserUrl:e})),i){let l=q$2({},i);delete l.navigationId,delete l.ɵrouterPageId,delete l.ɵrouterUrl,Object.keys(l).length!==0&&(o.state=l)}let u=this.parseUrl(s);this.scheduleNavigation(u,r,c,o,a).catch(l=>{this.disposed||this.injector.get(lt$1)(l)})}get url(){return this.serializeUrl(this.currentUrlTree)}getCurrentNavigation(){return mh(this.navigationTransitions.currentNavigation)}get lastSuccessfulNavigation(){return this.navigationTransitions.lastSuccessfulNavigation}resetConfig(e){this.config=e.map(vr),this.navigated=!1}ngOnDestroy(){this.dispose()}dispose(){this._events.unsubscribe(),this.navigationTransitions.complete(),this.nonRouterCurrentEntryChangeSubscription?.unsubscribe(),this.nonRouterCurrentEntryChangeSubscription=void 0,this.disposed=!0,this.eventsSubscription.unsubscribe()}createUrlTree(e,r={}){let{relativeTo:i,queryParams:o,fragment:a,queryParamsHandling:c,preserveFragment:s}=r,u=s?this.currentUrlTree.fragment:a,l=null;switch(c??this.options.defaultQueryParamsHandling){case`merge`:l=q$2(q$2({},this.currentUrlTree.queryParams),o);break;case`preserve`:l=this.currentUrlTree.queryParams;break;default:l=o||null}l!==null&&(l=this.removeEmptyProps(l));let v;try{v=yn$1(i?i.snapshot:this.routerState.snapshot.root)}catch{(typeof e[0]!=`string`||e[0][0]!==`/`)&&(e=[]),v=this.currentUrlTree.root}return Rn(v,e,l,u??null,this.urlSerializer)}navigateByUrl(e,r={skipLocationChange:!1}){let i=Z(e)?e:this.parseUrl(e),o=this.urlHandlingStrategy.merge(i,this.rawUrlTree);return this.scheduleNavigation(o,Ue$1,null,r)}navigate(e,r={skipLocationChange:!1}){return Do(e),this.navigateByUrl(this.createUrlTree(e,r),r)}serializeUrl(e){return this.urlSerializer.serialize(e)}parseUrl(e){try{return this.urlSerializer.parse(e)}catch{return this.console.warn(po$1(4018,!1)),this.urlSerializer.parse(`/`)}}isActive(e,r){let i;if(r===!0?i=q$2({},lr):r===!1?i=q$2({},ve):i=q$2(q$2({},ve),r),Z(e))return ut(this.currentUrlTree,e,i);let o=this.parseUrl(e);return ut(this.currentUrlTree,o,i)}removeEmptyProps(e){return Object.entries(e).reduce((r,[i,o])=>(o!=null&&(r[i]=o),r),{})}scheduleNavigation(e,r,i,o,a,c){if(this.disposed)return Promise.resolve(!1);let s,u,l;c?(s=c.resolve,u=c.reject,l=c.promise):l=new Promise((f,R)=>{s=f,u=R});let v=this.pendingTasks.add();return Rr(this,()=>{queueMicrotask(()=>this.pendingTasks.remove(v))}),this.navigationTransitions.handleNavigationRequest({source:r,restoredState:i,currentUrlTree:this.currentUrlTree,currentRawUrl:this.currentUrlTree,rawUrl:e,extras:o,hasUAVisualTransition:a,resolve:s,reject:u,promise:l,currentSnapshot:this.routerState.snapshot,currentRouterState:this.routerState}),l.catch(Promise.reject.bind(Promise))}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();function Do(t){for(let n=0;n<t.length;n++)if(t[n]==null)throw new N(4008,!1)}var No=(()=>{class t{router=b$2(le);stateManager=b$2(Tt$1);fragment=Bo(``);queryParams=Bo({});path=Bo(``);serializer=b$2(Ce);constructor(){this.updateState(),this.router.events?.subscribe(e=>{e instanceof z&&this.updateState()})}updateState(){let{fragment:e,root:r,queryParams:i}=this.stateManager.getCurrentUrlTree();this.fragment.set(e),this.queryParams.set(i),this.path.set(this.serializer.serialize(new M(r)))}static ɵfac=function(r){return new(r||t)};static ɵprov=Tr({token:t,factory:t.ɵfac})}return t})();var Nt=(()=>{class t{router;route;tabIndexAttribute;renderer;el;locationStrategy;hrefAttributeValue=b$2(new yh(`href`),{optional:!0});reactiveHref=ZD(()=>{if(!this.isAnchorElement)return this.hrefAttributeValue;this.reactiveRouterState.path(),this._preserveFragment()&&this.reactiveRouterState.fragment();let e=r=>r===`preserve`||r===`merge`;return(e(this._queryParamsHandling())||e(this.options?.defaultQueryParamsHandling))&&this.reactiveRouterState.queryParams(),this.computeHref(this.createUrlTree())});get href(){return mh(this.reactiveHref)}set href(e){this.reactiveHref.set(e)}set target(e){this._target.set(e)}get target(){return mh(this._target)}_target=Bo(void 0);set queryParams(e){this._queryParams.set(e)}get queryParams(){return mh(this._queryParams)}_queryParams=Bo(void 0,{equal:()=>!1});set fragment(e){this._fragment.set(e)}get fragment(){return mh(this._fragment)}_fragment=Bo(void 0);set queryParamsHandling(e){this._queryParamsHandling.set(e)}get queryParamsHandling(){return mh(this._queryParamsHandling)}_queryParamsHandling=Bo(void 0);set state(e){this._state.set(e)}get state(){return mh(this._state)}_state=Bo(void 0,{equal:()=>!1});set info(e){this._info.set(e)}get info(){return mh(this._info)}_info=Bo(void 0,{equal:()=>!1});set relativeTo(e){this._relativeTo.set(e)}get relativeTo(){return mh(this._relativeTo)}_relativeTo=Bo(void 0);set preserveFragment(e){this._preserveFragment.set(e)}get preserveFragment(){return mh(this._preserveFragment)}_preserveFragment=Bo(!1);set skipLocationChange(e){this._skipLocationChange.set(e)}get skipLocationChange(){return mh(this._skipLocationChange)}_skipLocationChange=Bo(!1);set replaceUrl(e){this._replaceUrl.set(e)}get replaceUrl(){return mh(this._replaceUrl)}_replaceUrl=Bo(!1);browserUrl=LP(void 0);isAnchorElement;onChanges=new J$3;applicationErrorHandler=b$2(lt$1);options=b$2(be,{optional:!0});reactiveRouterState=b$2(No);constructor(e,r,i,o,a,c){this.router=e,this.route=r,this.tabIndexAttribute=i,this.renderer=o,this.el=a,this.locationStrategy=c;let s=a.nativeElement.tagName?.toLowerCase();this.isAnchorElement=s===`a`||s===`area`||!!(typeof customElements==`object`&&customElements.get(s)?.observedAttributes?.includes?.(`href`))}setTabIndexIfNotOnNativeEl(e){this.tabIndexAttribute!=null||this.isAnchorElement||this.applyAttributeValue(`tabindex`,e)}ngOnChanges(e){this.onChanges.next(this)}routerLinkInput=Bo(null);set routerLink(e){e==null?(this.routerLinkInput.set(null),this.setTabIndexIfNotOnNativeEl(null)):(Z(e)?this.routerLinkInput.set(e):this.routerLinkInput.set(Array.isArray(e)?e:[e]),this.setTabIndexIfNotOnNativeEl(`0`))}onClick(e,r,i,o,a){let c=this.urlTree;if(c===null||this.isAnchorElement&&(e!==0||r||i||o||a||typeof this.target==`string`&&this.target!=`_self`))return!0;let s=this.browserUrl(),u=q$2({skipLocationChange:this.skipLocationChange,replaceUrl:this.replaceUrl,state:this.state,info:this.info},s!==void 0&&{browserUrl:s});return this.router.navigateByUrl(c,u)?.catch(l=>{this.applicationErrorHandler(l)}),!this.isAnchorElement}ngOnDestroy(){}applyAttributeValue(e,r){let i=this.renderer,o=this.el.nativeElement;r!==null?i.setAttribute(o,e,r):i.removeAttribute(o,e)}createUrlTree(){let e=this.routerLinkInput();return e===null||!this.router.createUrlTree?null:Z(e)?e:this.router.createUrlTree(e,{relativeTo:this._relativeTo()!==void 0?this._relativeTo():this.route,queryParams:this._queryParams(),fragment:this._fragment(),queryParamsHandling:this._queryParamsHandling(),preserveFragment:this._preserveFragment()})}get urlTree(){return mh(()=>this.createUrlTree())}computeHref(e){return e!==null&&this.locationStrategy?this.locationStrategy?.prepareExternalUrl(this.router.serializeUrl(e))??``:null}static ɵfac=function(r){return new(r||t)(Ni$1(le),Ni$1(V),Fd(`tabindex`),Ni$1(ka),Ni$1(Cr),Ni$1(ue$3))};static ɵdir=ZE({type:t,selectors:[[``,`routerLink`,``]],hostVars:2,hostBindings:function(r,i){r&1&&Wp(`click`,function(a){return i.onClick(a.button,a.ctrlKey,a.shiftKey,a.altKey,a.metaKey)}),r&2&&Fp(`href`,i.reactiveHref(),Ly)(`target`,i._target())},inputs:{target:`target`,queryParams:`queryParams`,fragment:`fragment`,queryParamsHandling:`queryParamsHandling`,state:`state`,info:`info`,relativeTo:`relativeTo`,preserveFragment:[2,`preserveFragment`,`preserveFragment`,HP],skipLocationChange:[2,`skipLocationChange`,`skipLocationChange`,HP],replaceUrl:[2,`replaceUrl`,`replaceUrl`,HP],browserUrl:[1,`browserUrl`],routerLink:`routerLink`},features:[Cm]})}return t})();var _o=(()=>{class t{router;element;renderer;cdr;links;classes=[];routerEventsSubscription;linkInputChangesSubscription;_isActive=!1;get isActive(){return this._isActive}routerLinkActiveOptions={exact:!1};ariaCurrentWhenActive;isActiveChange=new Be$2;link=b$2(Nt,{optional:!0});constructor(e,r,i,o){this.router=e,this.element=r,this.renderer=i,this.cdr=o,this.routerEventsSubscription=e.events.subscribe(a=>{a instanceof z&&this.update()})}ngAfterContentInit(){Bh(this.links.changes,Bh(null)).pipe(Hn$1()).subscribe(e=>{this.update(),this.subscribeToEachLinkOnChanges()})}subscribeToEachLinkOnChanges(){this.linkInputChangesSubscription?.unsubscribe();let e=[...this.links.toArray(),this.link].filter(r=>!!r).map(r=>r.onChanges);this.linkInputChangesSubscription=xe$1(e).pipe(Hn$1()).subscribe(r=>{this._isActive!==this.isLinkActive(this.router)(r)&&this.update()})}set routerLinkActive(e){if(e==null){this.classes=[];return}let r=Array.isArray(e)?e:e.split(` `);this.classes=r.filter(i=>!!i)}ngOnChanges(e){this.update()}ngOnDestroy(){this.routerEventsSubscription.unsubscribe(),this.linkInputChangesSubscription?.unsubscribe()}update(){!this.links||!this.router.navigated||this.routerLinkActiveOptions===null&&!this._isActive||queueMicrotask(()=>{let e=this.hasActiveLinks();this.classes.forEach(r=>{e?this.renderer.addClass(this.element.nativeElement,r):this.renderer.removeClass(this.element.nativeElement,r)}),e&&this.ariaCurrentWhenActive!==void 0?this.renderer.setAttribute(this.element.nativeElement,`aria-current`,this.ariaCurrentWhenActive.toString()):this.renderer.removeAttribute(this.element.nativeElement,`aria-current`),this._isActive!==e&&(this._isActive=e,this.cdr.markForCheck(),this.isActiveChange.emit(e))})}isLinkActive(e){let r=this.routerLinkActiveOptions;if(r===null)return()=>!1;let i;return r===void 0?i=q$2({},ve):Uo(r)?i=r:r.exact??!1?i=q$2({},lr):i=q$2({},ve),o=>{let a=o.urlTree;return a?mh(dr(a,e,i)):!1}}hasActiveLinks(){let e=this.isLinkActive(this.router);return this.link&&e(this.link)||this.links.some(e)}static ɵfac=function(r){return new(r||t)(Ni$1(le),Ni$1(Cr),Ni$1(ka),Ni$1(jP))};static ɵdir=ZE({type:t,selectors:[[``,`routerLinkActive`,``]],contentQueries:function(r,i,o){if(r&1&&qp(o,Nt,5),r&2){let a;iD(a=sD())&&(i.links=a)}},inputs:{routerLinkActiveOptions:`routerLinkActiveOptions`,ariaCurrentWhenActive:`ariaCurrentWhenActive`,routerLinkActive:`routerLinkActive`},outputs:{isActiveChange:`isActiveChange`},exportAs:[`routerLinkActive`],features:[Cm]})}return t})();function Uo(t){let n=t;return!!(n.paths||n.matrixParams||n.queryParams||n.fragment)}var Oo=new A$1(``);function Po(t,...n){return bo$1([{provide:We$1,multi:!0,useValue:t},{provide:V,useFactory:Lo},{provide:Op,multi:!0,useFactory:xo},n.map(e=>e.ɵproviders)])}function Lo(){return b$2(le).routerState.root}function jo(t,n){return{ɵkind:t,ɵproviders:n}}function xo(){let t=b$2(oe$3);return n=>{let e=t.get(xi$1);if(n!==e.components[0])return;let r=t.get(le),i=t.get(ko);t.get($o)===1&&r.initialNavigation(),t.get(zo,null,{optional:!0})?.setUpPreloading(),t.get(Oo,null,{optional:!0})?.init(),r.resetRootComponentType(e.componentTypes[0]),i.closed||(i.next(),i.complete(),i.unsubscribe())}}var ko=new A$1(``,{factory:()=>new J$3});var $o=new A$1(``,{factory:()=>1});var zo=new A$1(``);function qo(t={}){return jo(8,[{provide:Be,useFactory:()=>new Mn(t,b$2(mr,{optional:!0}))}])}var je=[{path:``,redirectTo:`html`,pathMatch:`full`},{path:`html`,loadComponent:()=>import(`./chunk-D2ftlKz5.js`).then(a=>a.Html)},{path:`css`,loadComponent:()=>import(`./chunk-B2SRCdyL.js`).then(a=>a.Css)},{path:`angular`,loadComponent:()=>import(`./chunk-BfjBiui_.js`).then(a=>a.Angular)},{path:`javascript`,loadComponent:()=>import(`./chunk-BxxJLjtx.js`).then(a=>a.Javascript)},{path:`performance`,loadComponent:()=>import(`./chunk-BhkeS7ab.js`).then(a=>a.Performance)},{path:`performance/devtools-demo`,loadComponent:()=>import(`./chunk-D2sS0sXH.js`).then(a=>a.DevtoolsDemo)},{path:`rxjs`,loadComponent:()=>import(`./chunk-BG2L8gdG.js`).then(a=>a.RxJS)},{path:`signals`,loadComponent:()=>import(`./chunk-D8l8jBlz.js`).then(a=>a.Signals)},{path:`misc`,loadComponent:()=>import(`./chunk-BjNPiT9o.js`).then(a=>a.Misc)},{path:`poc`,loadComponent:()=>import(`./chunk-BksBK_3P.js`).then(a=>a.Poc)},{path:`behavioural`,loadComponent:()=>import(`./chunk-Bv5fvDOh.js`).then(a=>a.Behavioural)},{path:`poc/:pocId`,loadComponent:()=>import(`./chunk-1IZh9qC_.js`).then(a=>a.PocDetail)},{path:`:category/:questionId`,loadComponent:()=>import(`./chunk-B3O6TCz4.js`).then(a=>a.QuestionDetail)},{path:`**`,redirectTo:a[0]}];var Ve={providers:[rm(),Po(je,qo())]};var tn=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵdir=ZE({type:a,selectors:[[`mat-toolbar-row`]],hostAttrs:[1,`mat-toolbar-row`],exportAs:[`matToolbarRow`]})}return a})();var We=(()=>{class a{_elementRef=b$2(Cr);_platform=b$2(p$1);_document=b$2(ur$1);color;_toolbarRows;ngAfterViewInit(){this._platform.isBrowser&&(this._checkToolbarMixedModes(),this._toolbarRows.changes.subscribe(()=>this._checkToolbarMixedModes()))}_checkToolbarMixedModes(){this._toolbarRows.length}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`,[[`mat-toolbar-row`]]];return WE({type:a,selectors:[[`mat-toolbar`]],contentQueries:function(i,o,r){if(i&1&&qp(r,tn,5),i&2){let c;iD(c=sD())&&(o._toolbarRows=c)}},hostAttrs:[1,`mat-toolbar`],hostVars:6,hostBindings:function(i,o){i&2&&(ED(o.color?`mat-`+o.color:``),Jp(`mat-toolbar-multiple-rows`,o._toolbarRows.length>0)(`mat-toolbar-single-row`,o._toolbarRows.length===0))},inputs:{color:`color`},exportAs:[`matToolbar`],ngContentSelectors:[`*`,`mat-toolbar-row`],decls:2,vars:0,template:function(i,o){i&1&&(nD(t),rD(0),rD(1,1))},styles:[`.mat-toolbar {
  background: var(--%NS%mat-toolbar-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-toolbar, .mat-toolbar h1, .mat-toolbar h2, .mat-toolbar h3, .mat-toolbar h4, .mat-toolbar h5, .mat-toolbar h6 {
  font-family: var(--%NS%mat-toolbar-title-text-font, var(--%NS%mat-sys-title-large-font));
  font-size: var(--%NS%mat-toolbar-title-text-size, var(--%NS%mat-sys-title-large-size));
  line-height: var(--%NS%mat-toolbar-title-text-line-height, var(--%NS%mat-sys-title-large-line-height));
  font-weight: var(--%NS%mat-toolbar-title-text-weight, var(--%NS%mat-sys-title-large-weight));
  letter-spacing: var(--%NS%mat-toolbar-title-text-tracking, var(--%NS%mat-sys-title-large-tracking));
  margin: 0;
}
@media (forced-colors: active) {
  .mat-toolbar {
    outline: solid 1px;
  }
}
.mat-toolbar .mat-form-field-underline,
.mat-toolbar .mat-form-field-ripple,
.mat-toolbar .mat-focused .mat-form-field-ripple {
  background-color: currentColor;
}
.mat-toolbar .mat-form-field-label,
.mat-toolbar .mat-focused .mat-form-field-label,
.mat-toolbar .mat-select-value,
.mat-toolbar .mat-select-arrow,
.mat-toolbar .mat-form-field.mat-focused .mat-select-arrow {
  color: inherit;
}
.mat-toolbar .mat-input-element {
  caret-color: currentColor;
}
.mat-toolbar .mat-mdc-button-base.mat-mdc-button-base.mat-unthemed {
  --%NS%mat-button-text-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
  --%NS%mat-button-outlined-label-text-color: var(--%NS%mat-toolbar-container-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-toolbar-row, .mat-toolbar-single-row {
  display: flex;
  box-sizing: border-box;
  padding: 0 16px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  white-space: nowrap;
  height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-row, .mat-toolbar-single-row {
    height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}

.mat-toolbar-multiple-rows {
  display: flex;
  box-sizing: border-box;
  flex-direction: column;
  width: 100%;
  min-height: var(--%NS%mat-toolbar-standard-height, 64px);
}
@media (max-width: 599px) {
  .mat-toolbar-multiple-rows {
    min-height: var(--%NS%mat-toolbar-mobile-height, 56px);
  }
}
`],encapsulation:2})})()}return a})();var $e=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=qE({type:a});static ɵinj=Ol({imports:[ls]})}return a})();var Wt=new A$1(`MAT_MENU_PANEL`);var st=(()=>{class a{_isAnchor;_elementRef=b$2(Cr);_document=b$2(ur$1);_focusMonitor=b$2(bt$2);_parentMenu=b$2(Wt,{optional:!0});_changeDetectorRef=b$2(jP);role=`menuitem`;disabled=!1;disabledInteractive=!1;disableRipple=!1;_hovered=new J$3;_focused=new J$3;_highlighted=!1;_triggersSubmenu=!1;constructor(){b$2(F$2).load(Nt$2),this._parentMenu?.addItem?.(this),this._isAnchor=this._elementRef.nativeElement.tagName===`A`}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._getHostElement(),t,e):this._getHostElement().focus(e),this._focused.next(this)}ngAfterViewInit(){this._focusMonitor&&this._focusMonitor.monitor(this._elementRef,!1)}ngOnDestroy(){this._focusMonitor&&this._focusMonitor.stopMonitoring(this._elementRef),this._parentMenu&&this._parentMenu.removeItem&&this._parentMenu.removeItem(this),this._hovered.complete(),this._focused.complete()}_getTabIndex(){return this.disabled&&!this.disabledInteractive?`-1`:`0`}_getAriaDisabled(){return this._isAnchor?this.disabled||null:this.disabled&&this.disabledInteractive?!0:null}_getDisabled(){return this.disabledInteractive||!this.disabled?null:!0}_getHostElement(){return this._elementRef.nativeElement}_checkDisabled(t){this.disabled&&(t.preventDefault(),t.stopPropagation())}_handleMouseEnter(){this._hovered.next(this)}getLabel(){let t=this._elementRef.nativeElement.cloneNode(!0),e=t.querySelectorAll(`mat-icon, .material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp`);for(let n=0;n<e.length;n++)e[n].remove();return t.textContent?.trim()||``}_setHighlighted(t){this._highlighted=t,this._changeDetectorRef.markForCheck()}_setTriggersSubmenu(t){this._triggersSubmenu=t,this._changeDetectorRef.markForCheck()}_hasFocus(){return this._document&&this._document.activeElement===this._getHostElement()}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[[[`mat-icon`],[``,`matMenuItemIcon`,``]],`*`],e=[`mat-icon, [matMenuItemIcon]`,`*`];function n(i,o){i&1&&(mu(),mi$1(0,`svg`,2),Vp(1,`polygon`,3),Rc())}return WE({type:a,selectors:[[``,`mat-menu-item`,``]],hostAttrs:[1,`mat-mdc-menu-item`,`mat-focus-indicator`],hostVars:12,hostBindings:function(o,r){o&1&&Wp(`click`,function(b){return r._checkDisabled(b)})(`mouseenter`,function(){return r._handleMouseEnter()}),o&2&&(Fp(`role`,r.role)(`tabindex`,r._getTabIndex())(`aria-disabled`,r._getAriaDisabled())(`disabled`,r._getDisabled()),Jp(`mat-mdc-menu-item-highlighted`,r._highlighted)(`mat-mdc-menu-item-submenu-trigger`,r._triggersSubmenu)(`mat-mdc-menu-item-disabled`,r.disabled)(`mat-mdc-menu-item-disabled-interactive`,r.disabledInteractive))},inputs:{role:`role`,disabled:[2,`disabled`,`disabled`,HP],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,HP],disableRipple:[2,`disableRipple`,`disableRipple`,HP]},exportAs:[`matMenuItem`],ngContentSelectors:e,decls:5,vars:3,consts:[[1,`mat-mdc-menu-item-text`],[`matRipple`,``,1,`mat-mdc-menu-ripple`,3,`matRippleDisabled`,`matRippleTrigger`],[`viewBox`,`0 0 5 10`,`focusable`,`false`,`aria-hidden`,`true`,1,`mat-mdc-menu-submenu-icon`],[`points`,`0,0 5,5 0,10`]],template:function(o,r){o&1&&(nD(t),rD(0),mi$1(1,`span`,0),rD(2,1),Rc(),Vp(3,`div`,1),HI(4,n,2,0,`svg`,2)),o&2&&(Iv(3),jp(`matRippleDisabled`,r.disableRipple||r.disabled)(`matRippleTrigger`,r._getHostElement()),Iv(),$I(r._triggersSubmenu?4:-1))},dependencies:[Wt$3],encapsulation:2})})()}return a})();var rn=new A$1(`MatMenuContent`);var sn=new A$1(`mat-menu-default-options`,{providedIn:`root`,factory:()=>({overlapTrigger:!1,xPosition:`after`,yPosition:`below`,backdropClass:`cdk-overlay-transparent-backdrop`})});var Qt=`_mat-menu-enter`;var Ct=`_mat-menu-exit`;var U=(()=>{class a{_elementRef=b$2(Cr);_changeDetectorRef=b$2(jP);_injector=b$2(oe$3);_keyManager;_xPosition;_yPosition;_firstItemFocusRef;_exitFallbackTimeout;_animationsDisabled=qn$1();_allItems;_directDescendantItems=new si$1;_classList={};_panelAnimationState=`void`;_animationDone=new J$3;_isAnimating=Bo(!1);parentMenu;direction;overlayPanelClass;backdropClass;ariaLabel;ariaLabelledby;ariaDescribedby;get xPosition(){return this._xPosition}set xPosition(t){this._xPosition=t,this.setPositionClasses()}get yPosition(){return this._yPosition}set yPosition(t){this._yPosition=t,this.setPositionClasses()}templateRef;items;lazyContent;overlapTrigger=!1;hasBackdrop;get panelClass(){return this._previousPanelClass}set panelClass(t){let e=this._previousPanelClass,n=q$2({},this._classList);e&&e.length&&e.split(` `).forEach(i=>{n[i]=!1}),this._previousPanelClass=t,t&&t.length&&(t.split(` `).forEach(i=>{n[i]=!0}),this._elementRef.nativeElement.className=``),this._classList=n}_previousPanelClass=``;get classList(){return this.panelClass}set classList(t){this.panelClass=t}closed=new Be$2;close=this.closed;panelId=b$2(le$2).getId(`mat-menu-panel-`);constructor(){let t=b$2(sn);this.overlayPanelClass=t.overlayPanelClass||``,this._xPosition=t.xPosition,this._yPosition=t.yPosition,this.backdropClass=t.backdropClass,this.overlapTrigger=t.overlapTrigger,this.hasBackdrop=t.hasBackdrop}ngOnInit(){this.setPositionClasses()}ngAfterContentInit(){this._updateDirectDescendants(),this._keyManager=new he$1(this._directDescendantItems).withWrap().withTypeAhead().withHomeAndEnd().skipPredicate(t=>t.disabled&&!t.disabledInteractive),this._keyManager.tabOut.subscribe(()=>this.closed.emit(`tab`)),this._directDescendantItems.changes.pipe(Wh(this._directDescendantItems),mg(t=>Uh(...t.map(e=>e._focused)))).subscribe(t=>this._keyManager.updateActiveItem(t)),this._directDescendantItems.changes.subscribe(t=>{let e=this._keyManager;if(this._panelAnimationState===`enter`&&e.activeItem?._hasFocus()){let n=t.toArray(),i=Math.max(0,Math.min(n.length-1,e.activeItemIndex||0));n[i]&&!n[i].disabled?e.setActiveItem(i):e.setNextItemActive()}})}ngOnDestroy(){this._keyManager?.destroy(),this._directDescendantItems.destroy(),this.closed.complete(),this._firstItemFocusRef?.destroy(),clearTimeout(this._exitFallbackTimeout)}_hovered(){return this._directDescendantItems.changes.pipe(Wh(this._directDescendantItems),mg(e=>Uh(...e.map(n=>n._hovered))))}addItem(t){}removeItem(t){}_handleKeydown(t){let e=t.keyCode,n=this._keyManager;switch(e){case 27:st$2(t)||(t.preventDefault(),this.closed.emit(`keydown`));break;case 37:this.parentMenu&&this.direction===`ltr`&&this.closed.emit(`keydown`);break;case 39:this.parentMenu&&this.direction===`rtl`&&this.closed.emit(`keydown`);break;default:(e===38||e===40)&&n.setFocusOrigin(`keyboard`),n.onKeydown(t);return}}focusFirstItem(t=`program`){this._firstItemFocusRef?.destroy(),this._firstItemFocusRef=tv(()=>{let e=this._resolvePanel();if(!e||!e.contains(document.activeElement)){let n=this._keyManager;n.setFocusOrigin(t).setFirstItemActive(),!n.activeItem&&e&&e.focus()}},{injector:this._injector})}resetActiveItem(){this._keyManager.setActiveItem(-1)}setElevation(t){}setPositionClasses(t=this.xPosition,e=this.yPosition){this._classList=z$3(q$2({},this._classList),{"mat-menu-before":t===`before`,"mat-menu-after":t===`after`,"mat-menu-above":e===`above`,"mat-menu-below":e===`below`}),this._changeDetectorRef.markForCheck()}_onAnimationDone(t){let e=t===Ct;(e||t===Qt)&&(e&&(clearTimeout(this._exitFallbackTimeout),this._exitFallbackTimeout=void 0),this._animationDone.next(e?`void`:`enter`),this._isAnimating.set(!1))}_onAnimationStart(t){(t===Qt||t===Ct)&&this._isAnimating.set(!0)}_setIsOpen(t){if(this._panelAnimationState=t?`enter`:`void`,t){if(this._keyManager.activeItemIndex===0){let e=this._resolvePanel();e&&(e.scrollTop=0)}}else this._animationsDisabled||(this._exitFallbackTimeout=setTimeout(()=>this._onAnimationDone(Ct),200));this._animationsDisabled&&setTimeout(()=>{this._onAnimationDone(t?Qt:Ct)}),this._changeDetectorRef.markForCheck()}_updateDirectDescendants(){this._allItems.changes.pipe(Wh(this._allItems)).subscribe(t=>{this._directDescendantItems.reset(t.filter(e=>e._parentMenu===this)),this._directDescendantItems.notifyOnChanges()})}_resolvePanel(){let t=null;return this._directDescendantItems.length&&(t=this._directDescendantItems.first._getHostElement().closest(`[role="menu"]`)),t}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`*`];function e(n,i){if(n&1){let o=KI();Oc(0,`div`,0),Gp(`click`,function(){ru(o);let c=eD();return ou(c.closed.emit(`click`))})(`animationstart`,function(c){ru(o);let b=eD();return ou(b._onAnimationStart(c.animationName))})(`animationend`,function(c){ru(o);let b=eD();return ou(b._onAnimationDone(c.animationName))})(`animationcancel`,function(c){ru(o);let b=eD();return ou(b._onAnimationDone(c.animationName))}),Oc(1,`div`,1),rD(2),kc()()}if(n&2){let o=eD();ED(o._classList),Jp(`mat-menu-panel-animations-disabled`,o._animationsDisabled)(`mat-menu-panel-exit-animation`,o._panelAnimationState===`void`)(`mat-menu-panel-animating`,o._isAnimating()),$p(`id`,o.panelId),Fp(`aria-label`,o.ariaLabel||null)(`aria-labelledby`,o.ariaLabelledby||null)(`aria-describedby`,o.ariaDescribedby||null)}}return WE({type:a,selectors:[[`mat-menu`]],contentQueries:function(i,o,r){if(i&1&&qp(r,rn,5)(r,st,5)(r,st,4),i&2){let c;iD(c=sD())&&(o.lazyContent=c.first),iD(c=sD())&&(o._allItems=c),iD(c=sD())&&(o.items=c)}},viewQuery:function(i,o){if(i&1&&zp(vr$1,5),i&2){let r;iD(r=sD())&&(o.templateRef=r.first)}},hostVars:3,hostBindings:function(i,o){i&2&&Fp(`aria-label`,null)(`aria-labelledby`,null)(`aria-describedby`,null)},inputs:{backdropClass:`backdropClass`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],xPosition:`xPosition`,yPosition:`yPosition`,overlapTrigger:[2,`overlapTrigger`,`overlapTrigger`,HP],hasBackdrop:[2,`hasBackdrop`,`hasBackdrop`,n=>n==null?null:HP(n)],panelClass:[0,`class`,`panelClass`],classList:`classList`},outputs:{closed:`closed`,close:`close`},exportAs:[`matMenu`],features:[VD([{provide:Wt,useExisting:a}])],ngContentSelectors:t,decls:1,vars:0,consts:[[`tabindex`,`-1`,`role`,`menu`,1,`mat-mdc-menu-panel`,3,`click`,`animationstart`,`animationend`,`animationcancel`,`id`],[1,`mat-mdc-menu-content`]],template:function(i,o){i&1&&(nD(),_p(0,e,3,12,`ng-template`))},styles:[`mat-menu {
  display: none;
}

.mat-mdc-menu-content {
  margin: 0;
  padding: 8px 0;
  outline: 0;
}
.mat-mdc-menu-content,
.mat-mdc-menu-content .mat-mdc-menu-item .mat-mdc-menu-item-text {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  flex: 1;
  white-space: normal;
  font-family: var(--%NS%mat-menu-item-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-menu-item-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-menu-item-label-text-size, var(--%NS%mat-sys-label-large-size));
  letter-spacing: var(--%NS%mat-menu-item-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
  font-weight: var(--%NS%mat-menu-item-label-text-weight, var(--%NS%mat-sys-label-large-weight));
}

@keyframes _mat-menu-enter {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: none;
  }
}
@keyframes _mat-menu-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-menu-panel {
  min-width: 112px;
  max-width: 280px;
  overflow: auto;
  box-sizing: border-box;
  outline: 0;
  animation: _mat-menu-enter 120ms cubic-bezier(0, 0, 0.2, 1);
  border-radius: var(--%NS%mat-menu-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-menu-container-color, var(--%NS%mat-sys-surface-container));
  box-shadow: var(--%NS%mat-menu-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
  will-change: transform, opacity;
}
.mat-mdc-menu-panel.mat-menu-panel-exit-animation {
  animation: _mat-menu-exit 100ms 25ms linear forwards;
}
.mat-mdc-menu-panel.mat-menu-panel-animations-disabled {
  animation: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating {
  pointer-events: none;
}
.mat-mdc-menu-panel.mat-menu-panel-animating:has(.mat-mdc-menu-content:empty) {
  display: none;
}
@media (forced-colors: active) {
  .mat-mdc-menu-panel {
    outline: solid 1px;
  }
}
.mat-mdc-menu-panel .mat-divider {
  border-top-color: var(--%NS%mat-menu-divider-color, var(--%NS%mat-sys-surface-variant));
  margin-bottom: var(--%NS%mat-menu-divider-bottom-spacing, 8px);
  margin-top: var(--%NS%mat-menu-divider-top-spacing, 8px);
}

.mat-mdc-menu-item {
  display: flex;
  position: relative;
  align-items: center;
  justify-content: flex-start;
  overflow: hidden;
  padding: 0;
  cursor: pointer;
  width: 100%;
  text-align: left;
  box-sizing: border-box;
  color: inherit;
  font-size: inherit;
  background: none;
  text-decoration: none;
  margin: 0;
  min-height: 48px;
  padding-left: var(--%NS%mat-menu-item-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  -webkit-user-select: none;
  user-select: none;
  cursor: pointer;
  outline: none;
  border: none;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-menu-item::-moz-focus-inner {
  border: 0;
}
[dir=rtl] .mat-mdc-menu-item {
  padding-left: var(--%NS%mat-menu-item-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-leading-spacing, 12px);
}
.mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-item:has(.material-icons, .material-symbols-outlined, .material-symbols-rounded, .material-symbols-sharp, mat-icon, [matButtonIcon]) {
  padding-left: var(--%NS%mat-menu-item-with-icon-trailing-spacing, 12px);
  padding-right: var(--%NS%mat-menu-item-with-icon-leading-spacing, 12px);
}
.mat-mdc-menu-item, .mat-mdc-menu-item:visited, .mat-mdc-menu-item:link {
  color: var(--%NS%mat-menu-item-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-menu-item .mat-icon-no-color,
.mat-mdc-menu-item .mat-mdc-menu-submenu-icon {
  color: var(--%NS%mat-menu-item-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-menu-item[disabled], .mat-mdc-menu-item.mat-mdc-menu-item-disabled {
  cursor: default;
  opacity: 0.38;
}
.mat-mdc-menu-item[disabled]::after, .mat-mdc-menu-item.mat-mdc-menu-item-disabled::after {
  display: block;
  position: absolute;
  content: "";
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
}
.mat-mdc-menu-item:focus {
  outline: 0;
}
.mat-mdc-menu-item .mat-icon {
  flex-shrink: 0;
  margin-right: var(--%NS%mat-menu-item-spacing, 12px);
  height: var(--%NS%mat-menu-item-icon-size, 24px);
  width: var(--%NS%mat-menu-item-icon-size, 24px);
}
[dir=rtl] .mat-mdc-menu-item {
  text-align: right;
}
[dir=rtl] .mat-mdc-menu-item .mat-icon {
  margin-right: 0;
  margin-left: var(--%NS%mat-menu-item-spacing, 12px);
}
.mat-mdc-menu-item:not([disabled]):hover {
  background-color: var(--%NS%mat-menu-item-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
.mat-mdc-menu-item:not([disabled]).cdk-program-focused, .mat-mdc-menu-item:not([disabled]).cdk-keyboard-focused, .mat-mdc-menu-item:not([disabled]).mat-mdc-menu-item-highlighted {
  background-color: var(--%NS%mat-menu-item-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
@media (forced-colors: active) {
  .mat-mdc-menu-item {
    margin-top: 1px;
  }
}

.mat-mdc-menu-submenu-icon {
  width: var(--%NS%mat-menu-item-icon-size, 24px);
  height: 10px;
  fill: currentColor;
  padding-left: var(--%NS%mat-menu-item-spacing, 12px);
}
[dir=rtl] .mat-mdc-menu-submenu-icon {
  padding-right: var(--%NS%mat-menu-item-spacing, 12px);
  padding-left: 0;
}
[dir=rtl] .mat-mdc-menu-submenu-icon polygon {
  transform: scaleX(-1);
  transform-origin: center;
}
@media (forced-colors: active) {
  .mat-mdc-menu-submenu-icon {
    fill: CanvasText;
  }
}

.mat-mdc-menu-item .mat-mdc-menu-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}
`],encapsulation:2})})()}return a})();var ln=new A$1(`mat-menu-scroll-strategy`,{providedIn:`root`,factory:()=>{let a=b$2(oe$3);return()=>Ut(a)}});var K=new WeakMap;var cn=(()=>{class a{_canHaveBackdrop;_element=b$2(Cr);_viewContainerRef=b$2(Mi$1);_menuItemInstance=b$2(st,{optional:!0,self:!0});_dir=b$2(Ht$1,{optional:!0});_focusMonitor=b$2(bt$2);_ngZone=b$2(ye$1);_injector=b$2(oe$3);_scrollStrategy=b$2(ln);_changeDetectorRef=b$2(jP);_animationsDisabled=qn$1();_portal;_overlayRef=null;_menuOpen=!1;_closingActionsSubscription=Q$3.EMPTY;_menuCloseSubscription=Q$3.EMPTY;_pendingRemoval;_parentMaterialMenu;_parentInnerPadding;_openedBy=void 0;get _menu(){return this._menuInternal}set _menu(t){t!==this._menuInternal&&(this._menuInternal=t,this._menuCloseSubscription.unsubscribe(),t?(this._parentMaterialMenu,this._menuCloseSubscription=t.close.subscribe(e=>{this._destroyMenu(e),(e===`click`||e===`tab`)&&this._parentMaterialMenu&&this._parentMaterialMenu.closed.emit(e)})):this._destroyMenu(),this._menuItemInstance?._setTriggersSubmenu(this._triggersSubmenu()))}_menuInternal=null;constructor(t){this._canHaveBackdrop=t;let e=b$2(Wt,{optional:!0});this._parentMaterialMenu=e instanceof U?e:void 0}ngOnDestroy(){this._menu&&this._ownsMenu(this._menu)&&K.delete(this._menu),this._pendingRemoval?.unsubscribe(),this._menuCloseSubscription.unsubscribe(),this._closingActionsSubscription.unsubscribe(),this._overlayRef&&(this._overlayRef.dispose(),this._overlayRef=null)}get menuOpen(){return this._menuOpen}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_triggersSubmenu(){return!!(this._menuItemInstance&&this._parentMaterialMenu&&this._menu)}_closeMenu(){this._menu?.close.emit()}_openMenu(t){if(this._triggerIsAriaDisabled())return;let e=this._menu;if(this._menuOpen||!e)return;this._pendingRemoval?.unsubscribe();let n=K.get(e);K.set(e,this),n&&n!==this&&n._closeMenu();let i=this._createOverlay(e),o=i.getConfig(),r=o.positionStrategy;this._setPosition(e,r),this._canHaveBackdrop?o.hasBackdrop=e.hasBackdrop==null?!this._triggersSubmenu():e.hasBackdrop:o.hasBackdrop=e.hasBackdrop??!1,i.hasAttached()||(i.attach(this._getPortal(e)),e.lazyContent?.attach(this.menuData)),this._closingActionsSubscription=this._menuClosingActions().subscribe(()=>this._closeMenu()),e.parentMenu=this._triggersSubmenu()?this._parentMaterialMenu:void 0,e.direction=this.dir,t&&e.focusFirstItem(this._openedBy||`program`),this._setIsMenuOpen(!0),e instanceof U&&(e._setIsOpen(!0),e._directDescendantItems.changes.pipe(Gh(e.close)).subscribe(()=>{r.withLockedPosition(!1).reapplyLastPosition(),r.withLockedPosition(!0)}))}focus(t,e){this._focusMonitor&&t?this._focusMonitor.focusVia(this._element,t,e):this._element.nativeElement.focus(e)}_destroyMenu(t){let e=this._overlayRef,n=this._menu;!e||!this.menuOpen||(this._closingActionsSubscription.unsubscribe(),this._pendingRemoval?.unsubscribe(),n instanceof U&&this._ownsMenu(n)?(this._pendingRemoval=n._animationDone.pipe($i$1(1)).subscribe(()=>{e.detach(),K.has(n)||n.lazyContent?.detach()}),n._setIsOpen(!1)):(e.detach(),n?.lazyContent?.detach()),n&&this._ownsMenu(n)&&K.delete(n),this.restoreFocus&&(t===`keydown`||!this._openedBy||!this._triggersSubmenu())&&this.focus(this._openedBy),this._openedBy=void 0,this._setIsMenuOpen(!1))}_setIsMenuOpen(t){t!==this._menuOpen&&(this._menuOpen=t,this._menuOpen?this.menuOpened.emit():this.menuClosed.emit(),this._triggersSubmenu()&&this._menuItemInstance._setHighlighted(t),this._changeDetectorRef.markForCheck())}_createOverlay(t){if(!this._overlayRef){let e=this._getOverlayConfig(t);this._subscribeToPositions(t,e.positionStrategy),this._overlayRef=oe$1(this._injector,e),this._overlayRef.keydownEvents().subscribe(n=>{this._menu instanceof U&&this._menu._handleKeydown(n)})}return this._overlayRef}_getOverlayConfig(t){return new Q({positionStrategy:te(this._injector,this._getOverlayOrigin()).withLockedPosition().withGrowAfterOpen().withTransformOriginOn(`.mat-menu-panel, .mat-mdc-menu-panel`),backdropClass:t.backdropClass||`cdk-overlay-transparent-backdrop`,panelClass:t.overlayPanelClass,scrollStrategy:this._scrollStrategy(),direction:this._dir||`ltr`,disableAnimations:this._animationsDisabled})}_subscribeToPositions(t,e){t.setPositionClasses&&e.positionChanges.subscribe(n=>{this._ngZone.run(()=>{let i=n.connectionPair.overlayX===`start`?`after`:`before`,o=n.connectionPair.overlayY===`top`?`below`:`above`;t.setPositionClasses(i,o)})})}_setPosition(t,e){let[n,i]=t.xPosition===`before`?[`end`,`start`]:[`start`,`end`],[o,r]=t.yPosition===`above`?[`bottom`,`top`]:[`top`,`bottom`],[c,b]=[o,r],[l,p]=[n,i],v=0;if(this._triggersSubmenu()){if(p=n=t.xPosition===`before`?`start`:`end`,i=l=n===`end`?`start`:`end`,this._parentMaterialMenu){if(this._parentInnerPadding==null){let Kt=this._parentMaterialMenu.items.first;this._parentInnerPadding=Kt?Kt._getHostElement().offsetTop:0}v=o===`bottom`?this._parentInnerPadding:-this._parentInnerPadding}}else t.overlapTrigger||(c=o===`top`?`bottom`:`top`,b=r===`top`?`bottom`:`top`);e.withPositions([{originX:n,originY:c,overlayX:l,overlayY:o,offsetY:v},{originX:i,originY:c,overlayX:p,overlayY:o,offsetY:v},{originX:n,originY:b,overlayX:l,overlayY:r,offsetY:-v},{originX:i,originY:b,overlayX:p,overlayY:r,offsetY:-v}])}_menuClosingActions(){let t=this._getOutsideClickStream(this._overlayRef),e=this._overlayRef.detachments(),n=this._parentMaterialMenu?this._parentMaterialMenu.closed:Bh(),i=this._parentMaterialMenu?this._parentMaterialMenu._hovered().pipe(Bn$1(o=>this._menuOpen&&o!==this._menuItemInstance)):Bh();return Uh(t,n,i,e)}_getPortal(t){return(!this._portal||this._portal.templateRef!==t.templateRef)&&(this._portal=new Z$1(t.templateRef,this._viewContainerRef)),this._portal}_ownsMenu(t){return K.get(t)===this}_triggerIsAriaDisabled(){return HP(this._element.nativeElement.getAttribute(`aria-disabled`))}static ɵfac=function(e){aE()};static ɵdir=ZE({type:a})}return a})();var qe=(()=>{class a extends cn{_cleanupTouchstart;_hoverSubscription=Q$3.EMPTY;get _deprecatedMatMenuTriggerFor(){return this.menu}set _deprecatedMatMenuTriggerFor(t){this.menu=t}get menu(){return this._menu}set menu(t){this._menu=t}menuData;restoreFocus=!0;menuOpened=new Be$2;onMenuOpen=this.menuOpened;menuClosed=new Be$2;onMenuClose=this.menuClosed;constructor(){super(!0);let t=b$2(ka);this._cleanupTouchstart=t.listen(this._element.nativeElement,`touchstart`,e=>{oe$2(e)||(this._openedBy=`touch`)},{passive:!0})}triggersSubmenu(){return super._triggersSubmenu()}toggleMenu(){return this.menuOpen?this.closeMenu():this.openMenu()}openMenu(){this._openMenu(!0)}closeMenu(){this._closeMenu()}updatePosition(){this._overlayRef?.updatePosition()}ngAfterContentInit(){this._handleHover()}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTouchstart(),this._hoverSubscription.unsubscribe()}_getOverlayOrigin(){return this._element}_getOutsideClickStream(t){return t.backdropClick()}_handleMousedown(t){re$1(t)||(this._openedBy=t.button===0?`mouse`:void 0,this.triggersSubmenu()&&t.preventDefault())}_handleKeydown(t){let e=t.keyCode;(e===13||e===32)&&(this._openedBy=`keyboard`),this.triggersSubmenu()&&(e===39&&this.dir===`ltr`||e===37&&this.dir===`rtl`)&&(this._openedBy=`keyboard`,this.openMenu())}_handleClick(t){this.triggersSubmenu()?(t.stopPropagation(),this.openMenu()):this.toggleMenu()}_handleHover(){this.triggersSubmenu()&&this._parentMaterialMenu&&(this._hoverSubscription=this._parentMaterialMenu._hovered().subscribe(t=>{t===this._menuItemInstance&&!t.disabled&&this._parentMaterialMenu?._panelAnimationState!==`void`&&(this._openedBy=`mouse`,this._openMenu(!1))}))}static ɵfac=function(e){return new(e||a)};static ɵdir=ZE({type:a,selectors:[[``,`mat-menu-trigger-for`,``],[``,`matMenuTriggerFor`,``]],hostAttrs:[1,`mat-mdc-menu-trigger`],hostVars:3,hostBindings:function(e,n){e&1&&Wp(`click`,function(o){return n._handleClick(o)})(`mousedown`,function(o){return n._handleMousedown(o)})(`keydown`,function(o){return n._handleKeydown(o)}),e&2&&Fp(`aria-haspopup`,n.menu?`menu`:null)(`aria-expanded`,n.menuOpen)(`aria-controls`,n.menuOpen?n.menu?.panelId:null)},inputs:{_deprecatedMatMenuTriggerFor:[0,`mat-menu-trigger-for`,`_deprecatedMatMenuTriggerFor`],menu:[0,`matMenuTriggerFor`,`menu`],menuData:[0,`matMenuTriggerData`,`menuData`],restoreFocus:[0,`matMenuTriggerRestoreFocus`,`restoreFocus`]},outputs:{menuOpened:`menuOpened`,onMenuOpen:`onMenuOpen`,menuClosed:`menuClosed`,onMenuClose:`onMenuClose`},exportAs:[`matMenuTrigger`],features:[bp]})}return a})();var Xe=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=qE({type:a});static ɵinj=Ol({imports:[wt$3,pe$1,ls,vt$1]})}return a})();var bn=[`picker`];var wt=class a{downloadTip=`Save your notes, questions marked for review and finished POCs to this device as a JSON file`;uploadTip=`Restore from a JSON file you downloaded before — it replaces your notes, questions marked for review and finished POCs in this browser`;injector=b$2(oe$3);backupTools=()=>import(`./chunk-GYrn4yq7.js`);picker=PP.required(`picker`);async download(){let{Backup:d,describeBackup:t}=await this.backupTools(),e=t(this.injector.get(d).download());this.notify(e?`Backup downloaded \u2014 ${e}`:`Backup downloaded — there was nothing in it`)}pick(){this.picker().nativeElement.click()}async onPicked(d){let t=d.target,e=t.files?.[0];if(t.value=``,!e)return;let{Backup:n,describeBackup:i}=await this.backupTools(),o=this.injector.get(n),r;try{r=await o.read(e)}catch(c){this.notify(c instanceof Error?c.message:`That file could not be restored.`,!0);return}await this.confirm(r,o.summary())&&(o.restore(r),this.notify(`Restored ${i(r)}`))}async notify(d,t=!1){try{let{MatSnackBar:e}=await import(`./chunk-FeVqH4-9.js`);this.injector.get(e).open(d,`Dismiss`,{duration:t?9e3:5e3})}catch{}}async confirm(d,t){let[e,n]=await Promise.all([import(`./chunk-BV-VQz7j.js`),import(`./chunk-BbcQ_4f5.js`)]),i=this.injector.get(e.MatDialog).open(n.RestoreDialog,{data:{backup:d,current:t},restoreFocus:!0,maxWidth:`calc(100vw - 2rem)`});return await Qh(i.afterClosed())===!0}static ɵfac=function(t){return new(t||a)};static ɵcmp=WE({type:a,selectors:[[`app-backup-actions`]],viewQuery:function(t,e){t&1&&Qp(e.picker,bn,5),t&2&&aD()},hostAttrs:[1,`inline-flex`,`shrink-0`,`items-center`,`[--mat-icon-button-state-layer-size:36px]`],decls:14,vars:4,consts:[[`picker`,``],[1,`group`,`relative`,`inline-flex`],[`mat-icon-button`,``,`type`,`button`,3,`click`],[`aria-hidden`,`true`,1,`material-symbols-outlined`,`toolbar-glyph`,`text-white!`],[`aria-hidden`,`true`,`data-testid`,`download-tip`,1,`pointer-events-none`,`absolute`,`top-full`,`left-1/2`,`z-50`,`mt-1`,`w-max`,`max-w-72`,`-translate-x-1/2`,`rounded-md`,`bg-(--mat-sys-inverse-surface)`,`px-2`,`py-1`,`text-xs`,`leading-snug`,`shadow`,`text-(--mat-sys-inverse-on-surface)`,`opacity-0`,`transition-opacity`,`duration-150`,`group-hover:opacity-100`,`group-focus-within:opacity-100`],[`aria-hidden`,`true`,`data-testid`,`upload-tip`,1,`pointer-events-none`,`absolute`,`top-full`,`left-1/2`,`z-50`,`mt-1`,`w-max`,`max-w-72`,`-translate-x-1/2`,`rounded-md`,`bg-(--mat-sys-inverse-surface)`,`px-2`,`py-1`,`text-xs`,`leading-snug`,`shadow`,`text-(--mat-sys-inverse-on-surface)`,`opacity-0`,`transition-opacity`,`duration-150`,`group-hover:opacity-100`,`group-focus-within:opacity-100`],[`type`,`file`,`accept`,`application/json,.json`,`tabindex`,`-1`,`aria-hidden`,`true`,`data-testid`,`backup-picker`,1,`sr-only`,3,`change`]],template:function(t,e){t&1&&(mi$1(0,`span`,1)(1,`button`,2),Wp(`click`,function(){return e.download()}),mi$1(2,`span`,3),xD(3,`download`),Rc()(),mi$1(4,`span`,4),xD(5),Rc()(),mi$1(6,`span`,1)(7,`button`,2),Wp(`click`,function(){return e.pick()}),mi$1(8,`span`,3),xD(9,`upload`),Rc()(),mi$1(10,`span`,5),xD(11),Rc()(),mi$1(12,`input`,6,0),Wp(`change`,function(i){return e.onPicked(i)}),Rc()),t&2&&(Iv(),Fp(`aria-label`,e.downloadTip),Iv(4),Lc(` `,e.downloadTip,` `),Iv(2),Fp(`aria-label`,e.uploadTip),Iv(4),Lc(` `,e.uploadTip,` `))},dependencies:[Pn$1,Rt$1],styles:[`.toolbar-glyph[_ngcontent-%COMP%]{font-variation-settings:"FILL" 1;transform:translateY(-2px)}`]})};var pn=`shreyasrao20000@gmail.com`;var un=`Angular Playground V1 - Suggestion/Feedback`;var Tt=class a{feedbackMailto=`mailto:${pn}?subject=${encodeURIComponent(un)}`;openFeedback(d){d.preventDefault(),window.location.href=this.feedbackMailto}static ɵfac=function(t){return new(t||a)};static ɵcmp=WE({type:a,selectors:[[`app-header`]],decls:16,vars:2,consts:[[`menu`,`matMenu`],[1,`justify-between`,`align-middle`],[1,`flex`,`min-w-0`,`items-center`],[`mat-icon-button`,``,`aria-label`,`Toggle navigation menu`,1,`md:hidden!`,3,`matMenuTriggerFor`],[1,`text-white!`],[1,`min-w-0`,`truncate`],[1,`flex`,`shrink-0`,`items-center`,`gap-2`],[1,`hidden`,`md:flex`,`text-lg`,`gap-5`],[1,`text-white`,`no-underline`,`hover:underline`,3,`click`,`href`],[`mat-menu-item`,``,3,`click`]],template:function(t,e){if(t&1&&(mi$1(0,`mat-toolbar`,1)(1,`div`,2)(2,`button`,3)(3,`mat-icon`,4),xD(4,`menu`),Rc()(),mi$1(5,`div`,5),xD(6,`Angular Playground V1`),Rc()(),mi$1(7,`div`,6),Vp(8,`app-backup-actions`),mi$1(9,`div`,7)(10,`a`,8),Wp(`click`,function(i){return e.openFeedback(i)}),xD(11,`Suggestion/Feedback`),Rc()()()(),mi$1(12,`mat-menu`,null,0)(14,`button`,9),Wp(`click`,function(i){return e.openFeedback(i)}),xD(15,`Suggestion/Feedback`),Rc()()),t&2){let n=cD(13);Iv(2),jp(`matMenuTriggerFor`,n),Iv(8),jp(`href`,e.feedbackMailto,df)}},dependencies:[$e,We,Pn$1,Rt$1,Mt$2,wt$4,Xe,U,st,qe,wt],encapsulation:2})};var Gt=`mdc-tab-indicator--active`;var Ke=`mdc-tab-indicator--no-transition`;var Yt=class{_items;_currentItem;constructor(d){this._items=d}hide(){this._items.forEach(d=>d.deactivateInkBar()),this._currentItem=void 0}alignToElement(d){let t=this._items.find(n=>n.elementRef.nativeElement===d),e=this._currentItem;if(t!==e&&(e?.deactivateInkBar(),t)){let n=e?.elementRef.nativeElement.getBoundingClientRect?.();t.activateInkBar(n),this._currentItem=t}}};var hn=(()=>{class a{_elementRef=b$2(Cr);_inkBarElement=null;_inkBarContentElement=null;_fitToContent=!1;get fitInkBarToContent(){return this._fitToContent}set fitInkBarToContent(t){this._fitToContent!==t&&(this._fitToContent=t,this._inkBarElement&&this._appendInkBarElement())}activateInkBar(t){let e=this._elementRef.nativeElement;if(!t||!e.getBoundingClientRect||!this._inkBarContentElement){e.classList.add(Gt);return}let n=e.getBoundingClientRect(),i=t.width/n.width,o=t.left-n.left;e.classList.add(Ke),this._inkBarContentElement.style.setProperty(`transform`,`translateX(${o}px) scaleX(${i})`),e.getBoundingClientRect(),e.classList.remove(Ke),e.classList.add(Gt),this._inkBarContentElement.style.setProperty(`transform`,``)}deactivateInkBar(){this._elementRef.nativeElement.classList.remove(Gt)}ngOnInit(){this._createInkBarElement()}ngOnDestroy(){this._inkBarElement?.remove(),this._inkBarElement=this._inkBarContentElement=null}_createInkBarElement(){let t=this._elementRef.nativeElement.ownerDocument||document,e=this._inkBarElement=t.createElement(`span`),n=this._inkBarContentElement=t.createElement(`span`);e.className=`mdc-tab-indicator`,n.className=`mdc-tab-indicator__content mdc-tab-indicator__content--underline`,e.appendChild(this._inkBarContentElement),this._appendInkBarElement()}_appendInkBarElement(){this._inkBarElement;(this._fitToContent?this._elementRef.nativeElement.querySelector(`.mdc-tab__content`):this._elementRef.nativeElement).appendChild(this._inkBarElement)}static ɵfac=function(e){return new(e||a)};static ɵdir=ZE({type:a,inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,HP]}})}return a})();var Ue={passive:!0};var gn=650;var _n=100;function fn(a){let d=a+``;return/^[0-9]+(?:\.[0-9]+)?$/.test(d)?`${a}ms`:/^[0-9]+(?:\.[0-9]+)?(?:ms|s)$/.test(d)?d:``}var vn=(()=>{class a{_elementRef=b$2(Cr);_changeDetectorRef=b$2(jP);_viewportRuler=b$2(M$1);_dir=b$2(Ht$1,{optional:!0});_ngZone=b$2(ye$1);_platform=b$2(p$1);_sharedResizeObserver=b$2(z$2);_injector=b$2(oe$3);_renderer=b$2(ka);_animationsDisabled=qn$1();_eventCleanups;_scrollDistance=0;_selectedIndexChanged=!1;_destroyed=new J$3;_showPaginationControls=!1;_disableScrollAfter=!0;_disableScrollBefore=!0;_tabLabelCount;_scrollDistanceChanged=!1;_keyManager;_currentTextContent;_stopScrolling=new J$3;disablePagination=!1;get selectedIndex(){return this._selectedIndex}set selectedIndex(t){let e=isNaN(t)?0:t;this._selectedIndex!=e&&(this._selectedIndexChanged=!0,this._selectedIndex=e,this._keyManager&&this._keyManager.updateActiveItem(e))}_selectedIndex=0;selectFocusedIndex=new Be$2;indexFocused=new Be$2;constructor(){this._eventCleanups=this._ngZone.runOutsideAngular(()=>[this._renderer.listen(this._elementRef.nativeElement,`mouseleave`,()=>this._stopInterval())])}ngAfterViewInit(){this._eventCleanups.push(this._renderer.listen(this._previousPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`before`),Ue),this._renderer.listen(this._nextPaginator.nativeElement,`touchstart`,()=>this._handlePaginatorPress(`after`),Ue))}ngAfterContentInit(){let t=this._dir?this._dir.change:Bh(`ltr`),e=this._sharedResizeObserver.observe(this._elementRef.nativeElement).pipe(ag(32),Gh(this._destroyed)),n=this._viewportRuler.change(150).pipe(Gh(this._destroyed)),i=()=>{this.updatePagination(),this._alignInkBarToSelectedTab()};this._keyManager=new he$1(this._items).withHorizontalOrientation(this._getLayoutDirection()).withHomeAndEnd().withWrap().skipPredicate(()=>!1),this._keyManager.updateActiveItem(Math.max(this._selectedIndex,0)),tv(i,{injector:this._injector}),Uh(t,n,e,this._items.changes,this._itemsResized()).pipe(Gh(this._destroyed)).subscribe(()=>{this._ngZone.run(()=>{Promise.resolve().then(()=>{this._scrollDistance=Math.max(0,Math.min(this._getMaxScrollDistance(),this._scrollDistance)),i()})}),this._keyManager?.withHorizontalOrientation(this._getLayoutDirection())}),this._keyManager.change.subscribe(o=>{this.indexFocused.emit(o),this._setTabFocus(o)})}_itemsResized(){return typeof ResizeObserver!=`function`?It$4:this._items.changes.pipe(Wh(this._items),mg(t=>new M$2(e=>this._ngZone.runOutsideAngular(()=>{let n=new ResizeObserver(i=>e.next(i));return t.forEach(i=>n.observe(i.elementRef.nativeElement)),()=>{n.disconnect()}}))),gg(1),Bn$1(t=>t.some(e=>e.contentRect.width>0&&e.contentRect.height>0)))}ngAfterContentChecked(){this._tabLabelCount!=this._items.length&&(this.updatePagination(),this._tabLabelCount=this._items.length,this._changeDetectorRef.markForCheck()),this._selectedIndexChanged&&(this._scrollToLabel(this._selectedIndex),this._checkScrollingControls(),this._alignInkBarToSelectedTab(),this._selectedIndexChanged=!1,this._changeDetectorRef.markForCheck()),this._scrollDistanceChanged&&(this._updateTabScrollPosition(),this._scrollDistanceChanged=!1,this._changeDetectorRef.markForCheck())}ngOnDestroy(){this._eventCleanups.forEach(t=>t()),this._keyManager?.destroy(),this._destroyed.next(),this._destroyed.complete(),this._stopScrolling.complete()}_handleKeydown(t){if(!st$2(t))switch(t.keyCode){case 13:case 32:if(this.focusIndex!==this.selectedIndex){let e=this._items.get(this.focusIndex);e&&!e.disabled&&(this.selectFocusedIndex.emit(this.focusIndex),this._itemSelected(t))}break;default:this._keyManager?.onKeydown(t)}}_onContentChanges(){let t=this._elementRef.nativeElement.textContent;t!==this._currentTextContent&&(this._currentTextContent=t||``,this._ngZone.run(()=>{this.updatePagination(),this._alignInkBarToSelectedTab(),this._changeDetectorRef.markForCheck()}))}updatePagination(){this._checkPaginationEnabled(),this._checkScrollingControls(),this._updateTabScrollPosition()}get focusIndex(){return this._keyManager?this._keyManager.activeItemIndex:0}set focusIndex(t){!this._isValidIndex(t)||this.focusIndex===t||!this._keyManager||this._keyManager.setActiveItem(t)}_isValidIndex(t){return this._items?!!this._items.toArray()[t]:!0}_setTabFocus(t){if(this._showPaginationControls&&this._scrollToLabel(t),this._items&&this._items.length){this._items.toArray()[t].focus();let e=this._tabListContainer.nativeElement;this._getLayoutDirection()==`ltr`?e.scrollLeft=0:e.scrollLeft=e.scrollWidth-e.offsetWidth}}_getLayoutDirection(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}_updateTabScrollPosition(){if(this.disablePagination)return;let t=this.scrollDistance,e=this._getLayoutDirection()===`ltr`?-t:t;this._tabList.nativeElement.style.transform=`translateX(${Math.round(e)}px)`,(this._platform.TRIDENT||this._platform.EDGE)&&(this._tabListContainer.nativeElement.scrollLeft=0)}get scrollDistance(){return this._scrollDistance}set scrollDistance(t){this._scrollTo(t)}_scrollHeader(t){let e=this._tabListContainer.nativeElement.offsetWidth,n=(t==`before`?-1:1)*e/3;return this._scrollTo(this._scrollDistance+n)}_handlePaginatorClick(t){this._stopInterval(),this._scrollHeader(t)}_scrollToLabel(t){if(this.disablePagination)return;let e=this._items?this._items.toArray()[t]:null;if(!e)return;let n=this._tabListContainer.nativeElement.offsetWidth,{offsetLeft:i,offsetWidth:o}=e.elementRef.nativeElement,r,c;this._getLayoutDirection()==`ltr`?(r=i,c=r+o):(c=this._tabListInner.nativeElement.offsetWidth-i,r=c-o);let b=this.scrollDistance,l=this.scrollDistance+n;r<b?this.scrollDistance-=b-r:c>l&&(this.scrollDistance+=Math.min(c-l,r-b))}_checkPaginationEnabled(){if(this.disablePagination)this._showPaginationControls=!1;else{let n=this._tabListInner.nativeElement.scrollWidth-this._elementRef.nativeElement.offsetWidth>=5;n||(this.scrollDistance=0),n!==this._showPaginationControls&&(this._showPaginationControls=n,this._changeDetectorRef.markForCheck())}}_checkScrollingControls(){this.disablePagination?this._disableScrollAfter=this._disableScrollBefore=!0:(this._disableScrollBefore=this.scrollDistance==0,this._disableScrollAfter=this.scrollDistance==this._getMaxScrollDistance(),this._changeDetectorRef.markForCheck())}_getMaxScrollDistance(){return this._tabListInner.nativeElement.scrollWidth-this._tabListContainer.nativeElement.offsetWidth||0}_alignInkBarToSelectedTab(){let t=this._items&&this._items.length?this._items.toArray()[this.selectedIndex]:null,e=t?t.elementRef.nativeElement:null;e?this._inkBar.alignToElement(e):this._inkBar.hide()}_stopInterval(){this._stopScrolling.next()}_handlePaginatorPress(t,e){e&&e.button!=null&&e.button!==0||(this._stopInterval(),Ui$1(gn,_n).pipe(Gh(Uh(this._stopScrolling,this._destroyed))).subscribe(()=>{let{maxScrollDistance:n,distance:i}=this._scrollHeader(t);(i===0||i>=n)&&this._stopInterval()}))}_scrollTo(t){if(this.disablePagination)return{maxScrollDistance:0,distance:0};let e=this._getMaxScrollDistance();return this._scrollDistance=Math.max(0,Math.min(e,t)),this._scrollDistanceChanged=!0,this._checkScrollingControls(),{maxScrollDistance:e,distance:this._scrollDistance}}static ɵfac=function(e){return new(e||a)};static ɵdir=ZE({type:a,inputs:{disablePagination:[2,`disablePagination`,`disablePagination`,HP],selectedIndex:[2,`selectedIndex`,`selectedIndex`,BP]},outputs:{selectFocusedIndex:`selectFocusedIndex`,indexFocused:`indexFocused`}})}return a})();var yn=new A$1(`MAT_TABS_CONFIG`);var qt=(()=>{class a extends vn{_focusedItem=Bo(null);get fitInkBarToContent(){return this._fitInkBarToContent.value}set fitInkBarToContent(t){this._fitInkBarToContent.next(t),this._changeDetectorRef.markForCheck()}_fitInkBarToContent=new $n$1(!1);stretchTabs=!0;animationDuration=``;_items;get backgroundColor(){return this._backgroundColor}set backgroundColor(t){let e=this._elementRef.nativeElement.classList;e.remove(`mat-tabs-with-background`,`mat-background-${this.backgroundColor}`),t&&e.add(`mat-tabs-with-background`,`mat-background-${t}`),this._backgroundColor=t}_backgroundColor;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=Bo(!1);color=`primary`;tabPanel;_tabListContainer;_tabList;_tabListInner;_nextPaginator;_previousPaginator;_inkBar;constructor(){let t=b$2(yn,{optional:!0});super(),this.disablePagination=t&&t.disablePagination!=null?t.disablePagination:!1,this.fitInkBarToContent=t&&t.fitInkBarToContent!=null?t.fitInkBarToContent:!1,this.stretchTabs=t&&t.stretchTabs!=null?t.stretchTabs:!0}_itemSelected(){}ngAfterContentInit(){this._inkBar=new Yt(this._items),this._items.changes.pipe(Wh(null),Gh(this._destroyed)).subscribe(()=>this.updateActiveLink()),super.ngAfterContentInit(),this._keyManager.change.pipe(Wh(null),Gh(this._destroyed)).subscribe(()=>this._focusedItem.set(this._keyManager?.activeItem||null))}ngAfterViewInit(){this.tabPanel,super.ngAfterViewInit()}updateActiveLink(){if(!this._items)return;let t=this._items.toArray();for(let e=0;e<t.length;e++)if(t[e].active){this.selectedIndex=e,this.tabPanel&&(this.tabPanel._activeTabId=t[e].id),this._focusedItem.set(t[e]),this._changeDetectorRef.markForCheck();return}this.selectedIndex=-1}_getRole(){return this.tabPanel?`tablist`:this._elementRef.nativeElement.getAttribute(`role`)}_hasFocus(t){return this._keyManager?.activeItem===t}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){let t=[`tabListContainer`],e=[`tabList`],n=[`tabListInner`],i=[`nextPaginator`],o=[`previousPaginator`];return WE({type:a,selectors:[[``,`mat-tab-nav-bar`,``]],contentQueries:function(b,l,p){if(b&1&&qp(p,Xt,5),b&2){let v;iD(v=sD())&&(l._items=v)}},viewQuery:function(b,l){if(b&1&&zp(t,7)(e,7)(n,7)(i,5)(o,5),b&2){let p;iD(p=sD())&&(l._tabListContainer=p.first),iD(p=sD())&&(l._tabList=p.first),iD(p=sD())&&(l._tabListInner=p.first),iD(p=sD())&&(l._nextPaginator=p.first),iD(p=sD())&&(l._previousPaginator=p.first)}},hostAttrs:[1,`mat-mdc-tab-nav-bar`,`mat-mdc-tab-header`],hostVars:17,hostBindings:function(b,l){b&2&&(Fp(`role`,l._getRole()),Kp(`--%NS%mat-tab-header-animation-duration`,l.animationDuration),Jp(`mat-mdc-tab-header-pagination-controls-enabled`,l._showPaginationControls)(`mat-mdc-tab-header-rtl`,l._getLayoutDirection()==`rtl`)(`mat-mdc-tab-nav-bar-stretch-tabs`,l.stretchTabs)(`mat-primary`,l.color!==`warn`&&l.color!==`accent`)(`mat-accent`,l.color===`accent`)(`mat-warn`,l.color===`warn`)(`_mat-animation-noopable`,l._animationsDisabled))},inputs:{fitInkBarToContent:[2,`fitInkBarToContent`,`fitInkBarToContent`,HP],stretchTabs:[2,`mat-stretch-tabs`,`stretchTabs`,HP],animationDuration:[2,`animationDuration`,`animationDuration`,fn],backgroundColor:`backgroundColor`,disableRipple:[2,`disableRipple`,`disableRipple`,HP],color:`color`,tabPanel:`tabPanel`},exportAs:[`matTabNavBar`,`matTabNav`],features:[bp],ngContentSelectors:[`*`],decls:13,vars:6,consts:[[`previousPaginator`,``],[`tabListContainer`,``],[`tabList`,``],[`tabListInner`,``],[`nextPaginator`,``],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-before`,3,`click`,`mousedown`,`touchend`,`matRippleDisabled`],[1,`mat-mdc-tab-header-pagination-chevron`],[1,`mat-mdc-tab-link-container`,3,`keydown`],[1,`mat-mdc-tab-list`,3,`cdkObserveContent`],[1,`mat-mdc-tab-links`],[`mat-ripple`,``,1,`mat-mdc-tab-header-pagination`,`mat-mdc-tab-header-pagination-after`,3,`mousedown`,`click`,`touchend`,`matRippleDisabled`]],template:function(b,l){b&1&&(nD(),mi$1(0,`div`,5,0),Wp(`click`,function(){return l._handlePaginatorClick(`before`)})(`mousedown`,function(v){return l._handlePaginatorPress(`before`,v)})(`touchend`,function(){return l._stopInterval()}),Vp(2,`div`,6),Rc(),mi$1(3,`div`,7,1),Wp(`keydown`,function(v){return l._handleKeydown(v)}),mi$1(5,`div`,8,2),Wp(`cdkObserveContent`,function(){return l._onContentChanges()}),mi$1(7,`div`,9,3),rD(9),Rc()()(),mi$1(10,`div`,10,4),Wp(`mousedown`,function(v){return l._handlePaginatorPress(`after`,v)})(`click`,function(){return l._handlePaginatorClick(`after`)})(`touchend`,function(){return l._stopInterval()}),Vp(12,`div`,6),Rc()),b&2&&(Jp(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollBefore),jp(`matRippleDisabled`,l._disableScrollBefore||l.disableRipple),Iv(10),Jp(`mat-mdc-tab-header-pagination-disabled`,l._disableScrollAfter),jp(`matRippleDisabled`,l._disableScrollAfter||l.disableRipple))},dependencies:[Wt$3,Hi$1],styles:[`.mdc-tab {
  min-width: 90px;
  padding: 0 24px;
  display: flex;
  flex: 1 0 auto;
  justify-content: center;
  box-sizing: border-box;
  border: none;
  outline: none;
  text-align: center;
  white-space: nowrap;
  cursor: pointer;
  z-index: 1;
  touch-action: manipulation;
}

.mdc-tab__content {
  display: flex;
  align-items: center;
  justify-content: center;
  height: inherit;
  pointer-events: none;
}

.mdc-tab__text-label {
  transition: 150ms color linear;
  display: inline-block;
  line-height: 1;
  z-index: 2;
}

.mdc-tab--active .mdc-tab__text-label {
  transition-delay: 100ms;
}

._mat-animation-noopable .mdc-tab__text-label {
  transition: none;
}

.mdc-tab-indicator {
  display: flex;
  position: absolute;
  top: 0;
  left: 0;
  justify-content: center;
  width: 100%;
  height: 100%;
  pointer-events: none;
  z-index: 1;
}

.mdc-tab-indicator__content {
  transition: var(--%NS%mat-tab-header-animation-duration, 250ms) transform cubic-bezier(0.4, 0, 0.2, 1);
  transform-origin: left;
  opacity: 0;
}

.mdc-tab-indicator__content--underline {
  align-self: flex-end;
  box-sizing: border-box;
  width: 100%;
  border-top-style: solid;
}

.mdc-tab-indicator--active .mdc-tab-indicator__content {
  opacity: 1;
}

._mat-animation-noopable .mdc-tab-indicator__content, .mdc-tab-indicator--no-transition .mdc-tab-indicator__content {
  transition: none;
}

.mat-mdc-tab-ripple.mat-mdc-tab-ripple {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  pointer-events: none;
}

.mat-mdc-tab-header {
  display: flex;
  overflow: hidden;
  position: relative;
  flex-shrink: 0;
}

.mdc-tab-indicator .mdc-tab-indicator__content {
  transition-duration: var(--%NS%mat-tab-header-animation-duration, 250ms);
}

.mat-mdc-tab-header-pagination {
  -webkit-user-select: none;
  user-select: none;
  position: relative;
  display: none;
  justify-content: center;
  align-items: center;
  min-width: 32px;
  cursor: pointer;
  z-index: 2;
  -webkit-tap-highlight-color: transparent;
  touch-action: none;
  box-sizing: content-box;
  outline: 0;
}
.mat-mdc-tab-header-pagination::-moz-focus-inner {
  border: 0;
}
.mat-mdc-tab-header-pagination .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header-pagination-controls-enabled .mat-mdc-tab-header-pagination {
  display: flex;
}

.mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after {
  padding-left: 4px;
}
.mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(-135deg);
}

.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before,
.mat-mdc-tab-header-pagination-after {
  padding-right: 4px;
}
.mat-mdc-tab-header-rtl .mat-mdc-tab-header-pagination-before .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-header-pagination-after .mat-mdc-tab-header-pagination-chevron {
  transform: rotate(45deg);
}

.mat-mdc-tab-header-pagination-chevron {
  border-style: solid;
  border-width: 2px 2px 0 0;
  height: 8px;
  width: 8px;
  border-color: var(--%NS%mat-tab-pagination-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-tab-header-pagination-disabled {
  box-shadow: none;
  cursor: default;
  pointer-events: none;
}
.mat-mdc-tab-header-pagination-disabled .mat-mdc-tab-header-pagination-chevron {
  opacity: 0.4;
}

.mat-mdc-tab-list {
  flex-grow: 1;
  position: relative;
  transition: transform 500ms cubic-bezier(0.35, 0, 0.25, 1);
}
._mat-animation-noopable .mat-mdc-tab-list {
  transition: none;
}

.mat-mdc-tab-links {
  display: flex;
  flex: 1 0 auto;
}
[mat-align-tabs=center] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: center;
}
[mat-align-tabs=end] > .mat-mdc-tab-link-container .mat-mdc-tab-links {
  justify-content: flex-end;
}
.cdk-drop-list .mat-mdc-tab-links, .mat-mdc-tab-links.cdk-drop-list {
  min-height: var(--%NS%mat-tab-container-height, 48px);
}

.mat-mdc-tab-link-container {
  display: flex;
  flex-grow: 1;
  overflow: hidden;
  z-index: 1;
  border-bottom-style: solid;
  border-bottom-width: var(--%NS%mat-tab-divider-height, 1px);
  border-bottom-color: var(--%NS%mat-tab-divider-color, var(--%NS%mat-sys-surface-variant));
}

.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination {
  background-color: var(--%NS%mat-tab-background-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background.mat-primary > .mat-mdc-tab-link-container .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab__text-label {
  color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background:not(.mat-primary) > .mat-mdc-tab-link-container .mat-mdc-tab-link:not(.mdc-tab--active) .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-focus-indicator::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron,
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-focus-indicator::before {
  border-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mdc-tab__ripple::before, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-ripple-element, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mdc-tab__ripple::before {
  background-color: var(--%NS%mat-tab-foreground-color);
}
.mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-link-container .mat-mdc-tab-header-pagination-chevron, .mat-mdc-tab-nav-bar.mat-tabs-with-background > .mat-mdc-tab-header-pagination .mat-mdc-tab-header-pagination-chevron {
  color: var(--%NS%mat-tab-foreground-color);
}
`],encapsulation:2,changeDetection:1})})()}return a})();var Xt=(()=>{class a extends hn{_tabNavBar=b$2(qt);elementRef=b$2(Cr);_focusMonitor=b$2(bt$2);_destroyed=new J$3;_isActive=!1;_tabIndex=zD(()=>this._tabNavBar._focusedItem()===this?this.tabIndex:-1);get active(){return this._isActive}set active(t){t!==this._isActive&&(this._isActive=t,this._tabNavBar.updateActiveLink())}disabled=!1;get disableRipple(){return this._disableRipple()}set disableRipple(t){this._disableRipple.set(t)}_disableRipple=Bo(!1);tabIndex=0;rippleConfig;get rippleDisabled(){return this.disabled||this.disableRipple||this._tabNavBar.disableRipple||!!this.rippleConfig.disabled}id=b$2(le$2).getId(`mat-tab-link-`);constructor(){super(),b$2(F$2).load(Nt$2);let t=b$2(K$3,{optional:!0}),e=b$2(new yh(`tabindex`),{optional:!0});this.rippleConfig=t||{},this.tabIndex=e==null?0:parseInt(e)||0,qn$1()&&(this.rippleConfig.animation={enterDuration:0,exitDuration:0}),this._tabNavBar._fitInkBarToContent.pipe(Gh(this._destroyed)).subscribe(n=>{this.fitInkBarToContent=n})}focus(){this.elementRef.nativeElement.focus()}ngAfterViewInit(){this._focusMonitor.monitor(this.elementRef)}ngOnDestroy(){this._destroyed.next(),this._destroyed.complete(),super.ngOnDestroy(),this._focusMonitor.stopMonitoring(this.elementRef)}_handleFocus(){this._tabNavBar.focusIndex=this._tabNavBar._items.toArray().indexOf(this)}_handleKeydown(t){(t.keyCode===32||t.keyCode===13)&&(this.disabled?t.preventDefault():this._tabNavBar.tabPanel&&(t.keyCode===32&&t.preventDefault(),this.elementRef.nativeElement.click()))}_getAriaControls(){return this._tabNavBar.tabPanel?this._tabNavBar.tabPanel?.id:this.elementRef.nativeElement.getAttribute(`aria-controls`)}_getAriaSelected(){return this._tabNavBar.tabPanel?this.active?`true`:`false`:this.elementRef.nativeElement.getAttribute(`aria-selected`)}_getAriaCurrent(){return this.active&&!this._tabNavBar.tabPanel?`page`:null}_getRole(){return this._tabNavBar.tabPanel?`tab`:this.elementRef.nativeElement.getAttribute(`role`)}static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){return WE({type:a,selectors:[[``,`mat-tab-link`,``],[``,`matTabLink`,``]],hostAttrs:[1,`mdc-tab`,`mat-mdc-tab-link`,`mat-focus-indicator`],hostVars:11,hostBindings:function(n,i){n&1&&Wp(`focus`,function(){return i._handleFocus()})(`keydown`,function(r){return i._handleKeydown(r)}),n&2&&(Fp(`aria-controls`,i._getAriaControls())(`aria-current`,i._getAriaCurrent())(`aria-disabled`,i.disabled)(`aria-selected`,i._getAriaSelected())(`id`,i.id)(`tabIndex`,i._tabIndex())(`role`,i._getRole()),Jp(`mat-mdc-tab-disabled`,i.disabled)(`mdc-tab--active`,i.active))},inputs:{active:[2,`active`,`active`,HP],disabled:[2,`disabled`,`disabled`,HP],disableRipple:[2,`disableRipple`,`disableRipple`,HP],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:BP(e)],id:`id`},exportAs:[`matTabLink`],features:[bp],ngContentSelectors:[`*`],decls:5,vars:2,consts:[[1,`mdc-tab__ripple`],[`mat-ripple`,``,1,`mat-mdc-tab-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[1,`mdc-tab__content`],[1,`mdc-tab__text-label`]],template:function(n,i){n&1&&(nD(),Vp(0,`span`,0)(1,`div`,1),mi$1(2,`span`,2)(3,`span`,3),rD(4),Rc()()),n&2&&(Iv(),jp(`matRippleTrigger`,i.elementRef.nativeElement)(`matRippleDisabled`,i.rippleDisabled))},dependencies:[Wt$3],styles:[`.mat-mdc-tab-link {
  -webkit-tap-highlight-color: transparent;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-decoration: none;
  background: none;
  height: var(--%NS%mat-tab-container-height, 48px);
  font-family: var(--%NS%mat-tab-label-text-font, var(--%NS%mat-sys-title-small-font));
  font-size: var(--%NS%mat-tab-label-text-size, var(--%NS%mat-sys-title-small-size));
  letter-spacing: var(--%NS%mat-tab-label-text-tracking, var(--%NS%mat-sys-title-small-tracking));
  line-height: var(--%NS%mat-tab-label-text-line-height, var(--%NS%mat-sys-title-small-line-height));
  font-weight: var(--%NS%mat-tab-label-text-weight, var(--%NS%mat-sys-title-small-weight));
}
.mat-mdc-tab-link.mdc-tab {
  flex-grow: 0;
}
.mat-mdc-tab-link .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-indicator-color, var(--%NS%mat-sys-primary));
  border-top-width: var(--%NS%mat-tab-active-indicator-height, 2px);
  border-radius: var(--%NS%mat-tab-active-indicator-shape, 0);
}
.mat-mdc-tab-link:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--active .mdc-tab__ripple::before,
.mat-mdc-tab-link.mdc-tab--active .mat-ripple-element {
  background-color: var(--%NS%mat-tab-active-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-hover-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:hover .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-hover-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab__text-label {
  color: var(--%NS%mat-tab-active-focus-label-text-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link.mdc-tab--%NS%active:focus .mdc-tab-indicator__content--underline {
  border-color: var(--%NS%mat-tab-active-focus-indicator-color, var(--%NS%mat-sys-primary));
}
.mat-mdc-tab-link.mat-mdc-tab-disabled {
  opacity: 0.4;
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__content {
  pointer-events: none;
}
.mat-mdc-tab-link.mat-mdc-tab-disabled .mdc-tab__ripple::before,
.mat-mdc-tab-link.mat-mdc-tab-disabled .mat-ripple-element {
  background-color: var(--%NS%mat-tab-disabled-ripple-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-tab-link .mdc-tab__ripple::before {
  content: "";
  display: block;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  opacity: 0;
  pointer-events: none;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-link .mdc-tab__text-label {
  color: var(--%NS%mat-tab-inactive-label-text-color, var(--%NS%mat-sys-on-surface));
  display: inline-flex;
  align-items: center;
}
.mat-mdc-tab-link .mdc-tab__content {
  position: relative;
  pointer-events: auto;
}
.mat-mdc-tab-link:hover .mdc-tab__ripple::before {
  opacity: 0.04;
}
.mat-mdc-tab-link.cdk-program-focused .mdc-tab__ripple::before, .mat-mdc-tab-link.cdk-keyboard-focused .mdc-tab__ripple::before {
  opacity: 0.12;
}
.mat-mdc-tab-link .mat-ripple-element {
  opacity: 0.12;
  background-color: var(--%NS%mat-tab-inactive-ripple-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-tab-header.mat-mdc-tab-nav-bar-stretch-tabs .mat-mdc-tab-link {
  flex-grow: 1;
}
.mat-mdc-tab-link::before {
  margin: 5px;
}

@media (max-width: 599px) {
  .mat-mdc-tab-link {
    min-width: 72px;
  }
}
`],encapsulation:2})})()}return a})();var Ze=(()=>{class a{id=b$2(le$2).getId(`mat-tab-nav-panel-`);_activeTabId;static ɵfac=function(e){return new(e||a)};static ɵcmp=(function(){return WE({type:a,selectors:[[`mat-tab-nav-panel`]],hostAttrs:[`role`,`tabpanel`,1,`mat-mdc-tab-nav-panel`],hostVars:2,hostBindings:function(n,i){n&2&&Fp(`aria-labelledby`,i._activeTabId)(`id`,i.id)},inputs:{id:`id`},exportAs:[`matTabNavPanel`],ngContentSelectors:[`*`],decls:1,vars:0,template:function(n,i){n&1&&(nD(),rD(0))},encapsulation:2})})()}return a})();var Je=(()=>{class a{static ɵfac=function(e){return new(e||a)};static ɵmod=qE({type:a});static ɵinj=Ol({imports:[ls]})}return a})();var kn=(a,d)=>d.route;function Cn(a,d){if(a&1&&(mi$1(0,`a`,4,1),xD(2),Rc()),a&2){let t=d.$implicit,e=cD(1);jp(`routerLink`,t.route)(`active`,e.isActive),Iv(2),Lc(` `,t.label,` `)}}var It=class a{links=[{label:`HTML`,route:`/html`},{label:`CSS`,route:`/css`},{label:`Angular`,route:`/angular`},{label:`JavaScript`,route:`/javascript`},{label:`Performance`,route:`/performance`},{label:`RxJS`,route:`/rxjs`},{label:`Signals`,route:`/signals`},{label:`Misc`,route:`/misc`},{label:`POC`,route:`/poc`},{label:`Behavioural`,route:`/behavioural`}];static ɵfac=function(t){return new(t||a)};static ɵcmp=WE({type:a,selectors:[[`app-tabs`]],decls:6,vars:1,consts:[[`tabPanel`,``],[`rla`,`routerLinkActive`],[1,`tabs-scroll`],[`mat-tab-nav-bar`,``,3,`tabPanel`],[`mat-tab-link`,``,`routerLinkActive`,``,3,`routerLink`,`active`]],template:function(t,e){if(t&1&&(mi$1(0,`div`,2)(1,`nav`,3),GI(2,Cn,3,3,`a`,4,kn),Rc()(),Vp(4,`mat-tab-nav-panel`,null,0)),t&2){let n=cD(5);Iv(),jp(`tabPanel`,n),Iv(),qI(e.links)}},dependencies:[Je,qt,Ze,Xt,Nt,_o],styles:[`.tabs-scroll[_ngcontent-%COMP%]{padding-inline:8px;overflow-x:auto;scrollbar-width:thin}@media(max-width:767px){.tabs-scroll[_ngcontent-%COMP%]{scrollbar-width:none;-webkit-mask-image:linear-gradient(to right,#000 calc(100% - 24px),transparent);mask-image:linear-gradient(to right,#000 calc(100% - 24px),transparent)}.tabs-scroll[_ngcontent-%COMP%]::-webkit-scrollbar{display:none}}`]})};var St=class a{constructor(){}static ɵfac=function(t){return new(t||a)};static ɵcmp=WE({type:a,selectors:[[`app-root`]],decls:3,vars:0,template:function(t,e){t&1&&Vp(0,`app-header`)(1,`app-tabs`)(2,`router-outlet`)},dependencies:[pr,Tt,It],encapsulation:2})};sr$1(St,Ve).catch(a=>console.error(a));export{Ht$1 as A,ie$2 as B,Wt$3 as C,Mt$2 as D,zn$1 as E,W$2 as F,p$1 as G,kt$2 as H,Zn as I,st$2 as J,qn$1 as K,bt$2 as L,Lt$1 as M,St$4 as N,wt$4 as O,V$2 as P,t as Q,he$1 as R,Rt$1 as S,wt$3 as T,le$2 as U,is as V,ls as W,a as X,vt$3 as Y,o as Z,tt as _,Tt$2 as a,Nt$2 as b,Z$1 as c,ee as d,jt as f,te as g,pe$1 as h,Q as i,Kn as j,F$2 as k,ce$1 as l,oe$1 as m,F$1 as n,U$2 as o,mt$1 as p,se$1 as q,Jt$1 as r,Ut as s,Nt as t,ci$1 as u,vt$1 as v,_t as w,Pn$1 as x,K$3 as y,hi$1 as z};