import{A as F$1,An as zo,At as f,B as Kt,Dn as yE,Dt as dc,E as Dn,Et as co,F as H,Ft as hy,G as Lx,H as LD,I as He,J as N,Kt as m,Lt as ix,M as Fi,Mt as gx,N as Fo,O as Ee,On as yi,Pt as h8,Qt as nf,R as Jv,S as Co,St as ay,T as Di,Tn as xT,U as Le,V as Kv,W as Li,Wt as li$1,Yt as mp,Z as Oe,_ as tt,_t as Za,a as Qt,an as rT,at as Tt$1,bn as vx,bt as ae,c as Yt,cn as rf,ct as Vo,d as ce,dn as sf,en as oe$1,f as ee,fn as so,g as re,gt as Yh,i as Q,in as pr,it as Tn,jn as zt$1,k as Eg,kt as ex,l as Z,m as mt$1,mn as ty,n as At$1,nn as oy,nt as Si,o as U,ot as U$1,p as li,pn as te$1,pt as Y,q as Mo,qt as me,r as Kt$1,rn as p8,tn as of,tt as Ri,un as sT,v as Ae,vn as v,w as De,x as Ax,xn as wp,y as Ai,yn as vp,yt as __,z as Kh,zt as k}from"./main-VCCONGQM.js";import{n as mt$2,t as Yt$1}from"./chunk-JJfmx2vm.js";import{a as V,i as J,n as B,r as H$1,t as $}from"./chunk-BlPTEdhk.js";function wt(i,o){i&1&&(Dn(0,`span`,1),xT(1,`scenario`),Tn())}var lt=class i{difficulty=co.required();scenarioBased=co(!1);static ɵfac=function(e){return new(e||i)};static ɵcmp=Ae({type:i,selectors:[[`app-question-badges`]],inputs:{difficulty:[1,`difficulty`],scenarioBased:[1,`scenarioBased`]},decls:3,vars:14,consts:[[1,`rounded-full`,`px-2`,`py-0.5`,`text-xs`,`font-medium`,`whitespace-nowrap`],[1,`rounded-full`,`bg-(--mat-sys-secondary-container)`,`px-2`,`py-0.5`,`text-xs`,`font-medium`,`whitespace-nowrap`,`text-(--mat-sys-on-secondary-container)`]],template:function(e,t){e&1&&(Dn(0,`span`,0),xT(1),Tn(),Ri(2,wt,2,0,`span`,1)),e&2&&(Tt$1(`bg-(--mat-sys-surface-container-highest)`,t.difficulty()===`basic`)(`text-(--mat-sys-on-surface-variant)`,t.difficulty()===`basic`)(`bg-(--mat-sys-primary-container)`,t.difficulty()===`medium`)(`text-(--mat-sys-on-primary-container)`,t.difficulty()===`medium`)(`bg-(--mat-sys-tertiary-container)`,t.difficulty()===`advanced`)(`text-(--mat-sys-on-tertiary-container)`,t.difficulty()===`advanced`),Di(),hy(t.difficulty()),Di(),Ai(t.scenarioBased()?2:-1))},encapsulation:2})};function Tt(i,o){}var b=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;positionStrategy;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;scrollStrategy;closeOnNavigation=!0;closeOnDestroy=!0;closeOnOverlayDetachments=!0;disableAnimations=!1;providers;container;templateContext;bindings};var _e=(()=>{class i extends U{_elementRef=f(ae);_focusTrapFactory=f(gx);_config;_interactivityChecker=f(ix);_ngZone=f(H);_focusMonitor=f(vp);_renderer=f(zt$1);_changeDetectorRef=f(Fi);_injector=f(te$1);_platform=f(Le);_document=f(k);_portalOutlet;_focusTrapped=new F$1;_focusTrap=null;_elementFocusedBeforeDialogWasOpened=null;_closeInteractionType=null;_ariaLabelledByQueue=[];_isDestroyed=!1;constructor(){super(),this._config=f(b,{optional:!0})||new b,this._config.ariaLabelledBy&&this._ariaLabelledByQueue.push(this._config.ariaLabelledBy)}_addAriaLabelledBy(e){this._ariaLabelledByQueue.push(e),this._changeDetectorRef.markForCheck()}_removeAriaLabelledBy(e){let t=this._ariaLabelledByQueue.indexOf(e);t>-1&&(this._ariaLabelledByQueue.splice(t,1),this._changeDetectorRef.markForCheck())}_contentAttached(){this._initializeFocusTrap(),this._captureInitialFocus()}_captureInitialFocus(){this._trapFocus()}ngOnDestroy(){this._focusTrapped.complete(),this._isDestroyed=!0,this._restoreFocus()}attachComponentPortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachComponentPortal(e);return this._contentAttached(),t}attachTemplatePortal(e){this._portalOutlet.hasAttached();let t=this._portalOutlet.attachTemplatePortal(e);return this._contentAttached(),t}attachDomPortal=e=>{this._portalOutlet.hasAttached();let t=this._portalOutlet.attachDomPortal(e);return this._contentAttached(),t};_recaptureFocus(){this._containsFocus()||this._trapFocus()}_forceFocus(e,t){this._interactivityChecker.isFocusable(e)||(e.tabIndex=-1,this._ngZone.runOutsideAngular(()=>{let n=()=>{a(),l(),e.removeAttribute(`tabindex`)},a=this._renderer.listen(e,`blur`,n),l=this._renderer.listen(e,`mousedown`,n)})),e.focus(t)}_focusByCssSelector(e,t){let n=this._elementRef.nativeElement.querySelector(e);n&&this._forceFocus(n,t)}_trapFocus(e){this._isDestroyed||Si(()=>{let t=this._elementRef.nativeElement;switch(this._config.autoFocus){case!1:case`dialog`:this._containsFocus()||t.focus(e);break;case!0:case`first-tabbable`:this._focusTrap?.focusInitialElement(e)||this._focusDialogContainer(e);break;case`first-heading`:this._focusByCssSelector(`h1, h2, h3, h4, h5, h6, [role="heading"]`,e);break;default:this._focusByCssSelector(this._config.autoFocus,e);break}this._focusTrapped.next()},{injector:this._injector})}_restoreFocus(){let e=this._config.restoreFocus,t=null;if(typeof e==`string`?t=this._document.querySelector(e):typeof e==`boolean`?t=e?this._elementFocusedBeforeDialogWasOpened:null:e&&(t=e),this._config.restoreFocus&&t&&typeof t.focus==`function`){let n=ex(),a=this._elementRef.nativeElement;(!n||n===this._document.body||n===a||a.contains(n))&&(this._focusMonitor?(this._focusMonitor.focusVia(t,this._closeInteractionType),this._closeInteractionType=null):t.focus())}this._focusTrap&&this._focusTrap.destroy()}_focusDialogContainer(e){this._elementRef.nativeElement.focus?.(e)}_containsFocus(){let e=this._elementRef.nativeElement,t=ex();return e===t||e.contains(t)}_initializeFocusTrap(){this._platform.isBrowser&&(this._focusTrap=this._focusTrapFactory.create(this._elementRef.nativeElement),this._document&&(this._elementFocusedBeforeDialogWasOpened=ex()))}static ɵfac=function(t){return new(t||i)};static ɵcmp=Ae({type:i,selectors:[[`cdk-dialog-container`]],viewQuery:function(t,n){if(t&1&&oy(li,7),t&2){let a;rf(a=of())&&(n._portalOutlet=a.first)}},hostAttrs:[`tabindex`,`-1`,1,`cdk-dialog-container`],hostVars:6,hostBindings:function(t,n){t&2&&Kt(`id`,n._config.id||null)(`role`,n._config.role)(`aria-modal`,n._config.ariaModal)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null)},features:[so],decls:1,vars:0,consts:[[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&Kv(0,Tt,0,0,`ng-template`,0)},dependencies:[li],styles:[`.cdk-dialog-container {
  display: block;
  width: 100%;
  height: 100%;
  min-height: inherit;
  max-height: inherit;
}
`],encapsulation:2,changeDetection:1})}return i})();var C=class{overlayRef;config;componentInstance=null;componentRef=null;containerInstance;disableClose;closed=new F$1;backdropClick;keydownEvents;outsidePointerEvents;id;_detachSubscription;constructor(o,e){this.overlayRef=o,this.config=e,this.disableClose=e.disableClose,this.backdropClick=o.backdropClick(),this.keydownEvents=o.keydownEvents(),this.outsidePointerEvents=o.outsidePointerEvents(),this.id=e.id,this.keydownEvents.subscribe(t=>{t.keyCode===27&&!this.disableClose&&!yE(t)&&(t.preventDefault(),this.close(void 0,{focusOrigin:`keyboard`}))}),this.backdropClick.subscribe(()=>{!this.disableClose&&this._canClose()?this.close(void 0,{focusOrigin:`mouse`}):this.containerInstance._recaptureFocus?.()}),this._detachSubscription=o.detachments().subscribe(()=>{e.closeOnOverlayDetachments!==!1&&this.close()})}close(o,e){if(this._canClose(o)){let t=this.closed;this.containerInstance._closeInteractionType=e?.focusOrigin||`program`,this._detachSubscription.unsubscribe(),this.overlayRef.dispose(),t.next(o),t.complete(),this.componentInstance=this.containerInstance=null}}updatePosition(){return this.overlayRef.updatePosition(),this}updateSize(o=``,e=``){return this.overlayRef.updateSize({width:o,height:e}),this}addPanelClass(o){return this.overlayRef.addPanelClass(o),this}removePanelClass(o){return this.overlayRef.removePanelClass(o),this}_canClose(o){let e=this.config;return!!this.containerInstance&&(!e.closePredicate||e.closePredicate(o,e,this.componentInstance))}};var Nt=new v(`DialogScrollStrategy`,{providedIn:`root`,factory:()=>{let i=f(te$1);return()=>Yt(i)}});var Ot=new v(`DialogData`);var kt=new v(`DefaultDialogConfig`);function It(i){let o=Y(i),e=new oe$1;return{valueSignal:o,get value(){return o()},change:e,ngOnDestroy(){e.complete()}}}var ye=(()=>{class i{_injector=f(te$1);_defaultOptions=f(kt,{optional:!0});_parentDialog=f(i,{optional:!0,skipSelf:!0});_overlayContainer=f(Kt$1);_idGenerator=f(wp);_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new F$1;_afterOpenedAtThisLevel=new F$1;_ariaHiddenElements=new Map;_scrollStrategy=f(Nt);get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}afterAllClosed=Vo(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zo(void 0)));open(e,t){t=m(m({},this._defaultOptions||new b),t),t.id=t.id||this._idGenerator.getId(`cdk-dialog-`),t.id&&this.getDialogById(t.id);let a=this._getOverlayConfig(t),l=ee(this._injector,a),r=new C(l,t),p=this._attachContainer(l,r,t);if(r.containerInstance=p,!this.openDialogs.length){let ae=this._overlayContainer.getContainerElement();p._focusTrapped?p._focusTrapped.pipe(He(1)).subscribe(()=>{this._hideNonDialogContentFromAssistiveTechnology(ae)}):this._hideNonDialogContentFromAssistiveTechnology(ae)}return this._attachDialogContent(e,r,p,t),this.openDialogs.push(r),r.closed.subscribe(()=>this._removeOpenDialog(r,!0)),this.afterOpened.next(r),r}closeAll(){fe(this.openDialogs,e=>e.close())}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){fe(this._openDialogsAtThisLevel,e=>{e.config.closeOnDestroy===!1&&this._removeOpenDialog(e,!1)}),fe(this._openDialogsAtThisLevel,e=>e.close()),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete(),this._openDialogsAtThisLevel=[]}_getOverlayConfig(e){let t=new Q({positionStrategy:e.positionStrategy||Qt().centerHorizontally().centerVertically(),scrollStrategy:e.scrollStrategy||this._scrollStrategy(),panelClass:e.panelClass,hasBackdrop:e.hasBackdrop,direction:e.direction,minWidth:e.minWidth,minHeight:e.minHeight,maxWidth:e.maxWidth,maxHeight:e.maxHeight,width:e.width,height:e.height,disposeOnNavigation:e.closeOnNavigation,disableAnimations:e.disableAnimations});return e.backdropClass&&(t.backdropClass=e.backdropClass),t}_attachContainer(e,t,n){let a=n.injector||n.viewContainerRef?.injector,l=[{provide:b,useValue:n},{provide:C,useValue:t},{provide:tt,useValue:e}],r;n.container?typeof n.container==`function`?r=n.container:(r=n.container.type,l.push(...n.container.providers(n))):r=_e;let p=new mt$1(r,n.viewContainerRef,te$1.create({parent:a||this._injector,providers:l}));return e.attach(p).instance}_attachDialogContent(e,t,n,a){if(e instanceof yi){let l=this._createInjector(a,t,n,void 0),r={$implicit:a.data,dialogRef:t};a.templateContext&&(r=m(m({},r),typeof a.templateContext==`function`?a.templateContext():a.templateContext)),n.attachTemplatePortal(new Z(e,null,r,l))}else{let l=this._createInjector(a,t,n,this._injector),r=n.attachComponentPortal(new mt$1(e,a.viewContainerRef,l,null,a.bindings));t.componentRef=r,t.componentInstance=r.instance}}_createInjector(e,t,n,a){let l=e.injector||e.viewContainerRef?.injector,r=[{provide:Ot,useValue:e.data},{provide:C,useValue:t}];return e.providers&&(typeof e.providers==`function`?r.push(...e.providers(t,e,n)):r.push(...e.providers)),e.direction&&(!l||!l.get(Lx,null,{optional:!0}))&&r.push({provide:Lx,useValue:It(e.direction)}),te$1.create({parent:l||a,providers:r})}_removeOpenDialog(e,t){let n=this.openDialogs.indexOf(e);n>-1&&(this.openDialogs.splice(n,1),this.openDialogs.length||(this._ariaHiddenElements.forEach((a,l)=>{a?l.setAttribute(`aria-hidden`,a):l.removeAttribute(`aria-hidden`)}),this._ariaHiddenElements.clear(),t&&this._getAfterAllClosed().next()))}_hideNonDialogContentFromAssistiveTechnology(e){if(e.parentElement){let t=e.parentElement.children;for(let n=t.length-1;n>-1;n--){let a=t[n];a!==e&&a.nodeName!==`SCRIPT`&&a.nodeName!==`STYLE`&&!a.hasAttribute(`aria-live`)&&!a.hasAttribute(`popover`)&&(this._ariaHiddenElements.set(a,a.getAttribute(`aria-hidden`)),a.setAttribute(`aria-hidden`,`true`))}}}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}static ɵfac=function(t){return new(t||i)};static ɵprov=N({token:i,factory:i.ɵfac})}return i})();function fe(i,o){let e=i.length;for(;e--;)o(i[e])}var mt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=De({type:i});static ɵinj=Ee({providers:[ye],imports:[ce,At$1,vx,At$1]})}return i})();function Et(i,o){}var ie=class{viewContainerRef;injector;id;role=`dialog`;panelClass=``;hasBackdrop=!0;backdropClass=``;disableClose=!1;closePredicate;width=``;height=``;minWidth;minHeight;maxWidth;maxHeight;position;data=null;direction;ariaDescribedBy=null;ariaLabelledBy=null;ariaLabel=null;ariaModal=!1;autoFocus=`first-tabbable`;restoreFocus=!0;delayFocusTrap=!0;scrollStrategy;closeOnNavigation=!0;enterAnimationDuration;exitAnimationDuration;bindings};var be=`mdc-dialog--open`;var ut=`mdc-dialog--opening`;var ht=`mdc-dialog--closing`;var Mt=150;var Ft=75;var Rt=(()=>{class i extends _e{_animationStateChanged=new oe$1;_animationsEnabled=!Co();_actionSectionCount=0;_hostElement=this._elementRef.nativeElement;_enterAnimationDuration=this._animationsEnabled?gt(this._config.enterAnimationDuration)??Mt:0;_exitAnimationDuration=this._animationsEnabled?gt(this._config.exitAnimationDuration)??Ft:0;_animationTimer=null;_contentAttached(){super._contentAttached(),this._startOpenAnimation()}_startOpenAnimation(){this._animationStateChanged.emit({state:`opening`,totalTime:this._enterAnimationDuration}),this._animationsEnabled?(this._hostElement.style.setProperty(pt,`${this._enterAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ut,be)),this._waitForAnimationToComplete(this._enterAnimationDuration,this._finishDialogOpen)):(this._hostElement.classList.add(be),Promise.resolve().then(()=>this._finishDialogOpen()))}_startExitAnimation(){this._animationStateChanged.emit({state:`closing`,totalTime:this._exitAnimationDuration}),this._hostElement.classList.remove(be),this._animationsEnabled?(this._hostElement.style.setProperty(pt,`${this._exitAnimationDuration}ms`),this._requestAnimationFrame(()=>this._hostElement.classList.add(ht)),this._waitForAnimationToComplete(this._exitAnimationDuration,this._finishDialogClose)):Promise.resolve().then(()=>this._finishDialogClose())}_updateActionSectionCount(e){this._actionSectionCount+=e,this._changeDetectorRef.markForCheck()}_finishDialogOpen=()=>{this._clearAnimationClasses(),this._openAnimationDone(this._enterAnimationDuration)};_finishDialogClose=()=>{this._clearAnimationClasses(),this._animationStateChanged.emit({state:`closed`,totalTime:this._exitAnimationDuration})};_clearAnimationClasses(){this._hostElement.classList.remove(ut,ht)}_waitForAnimationToComplete(e,t){this._animationTimer!==null&&clearTimeout(this._animationTimer),this._animationTimer=setTimeout(t,e)}_requestAnimationFrame(e){this._ngZone.runOutsideAngular(()=>{typeof requestAnimationFrame==`function`?requestAnimationFrame(e):e()})}_captureInitialFocus(){this._config.delayFocusTrap||this._trapFocus()}_openAnimationDone(e){this._config.delayFocusTrap&&this._trapFocus(),this._animationStateChanged.next({state:`opened`,totalTime:e})}ngOnDestroy(){super.ngOnDestroy(),this._animationTimer!==null&&clearTimeout(this._animationTimer)}attachComponentPortal(e){let t=super.attachComponentPortal(e);return t.location.nativeElement.classList.add(`mat-mdc-dialog-component-host`),t}static ɵfac=(()=>{let e;return function(n){return(e||(e=Eg(i)))(n||i)}})();static ɵcmp=Ae({type:i,selectors:[[`mat-dialog-container`]],hostAttrs:[`tabindex`,`-1`,1,`mat-mdc-dialog-container`,`mdc-dialog`],hostVars:10,hostBindings:function(t,n){t&2&&(ty(`id`,n._config.id),Kt(`aria-modal`,n._config.ariaModal)(`role`,n._config.role)(`aria-labelledby`,n._config.ariaLabel?null:n._ariaLabelledByQueue[0])(`aria-label`,n._config.ariaLabel)(`aria-describedby`,n._config.ariaDescribedBy||null),Tt$1(`_mat-animation-noopable`,!n._animationsEnabled)(`mat-mdc-dialog-container-with-actions`,n._actionSectionCount>0))},features:[so],decls:3,vars:0,consts:[[1,`mat-mdc-dialog-inner-container`,`mdc-dialog__container`],[1,`mat-mdc-dialog-surface`,`mdc-dialog__surface`],[`cdkPortalOutlet`,``]],template:function(t,n){t&1&&(Za(0,`div`,0)(1,`div`,1),Kv(2,Et,0,0,`ng-template`,2),nf()())},dependencies:[li],styles:[`.mat-mdc-dialog-container {
  width: 100%;
  height: 100%;
  display: block;
  box-sizing: border-box;
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  outline: 0;
}

.cdk-overlay-pane.mat-mdc-dialog-panel {
  max-width: var(--%NS%mat-dialog-container-max-width, 560px);
  min-width: var(--%NS%mat-dialog-container-min-width, 280px);
}
@media (max-width: 599px) {
  .cdk-overlay-pane.mat-mdc-dialog-panel {
    max-width: var(--%NS%mat-dialog-container-small-max-width, calc(100vw - 32px));
  }
}

.mat-mdc-dialog-inner-container {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  box-sizing: border-box;
  height: 100%;
  opacity: 0;
  transition: opacity linear var(--%NS%mat-dialog-transition-duration, 0ms);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
}
.mdc-dialog--closing .mat-mdc-dialog-inner-container {
  transition: opacity 75ms linear;
  transform: none;
}
.mdc-dialog--open .mat-mdc-dialog-inner-container {
  opacity: 1;
}
._mat-animation-noopable .mat-mdc-dialog-inner-container {
  transition: none;
}

.mat-mdc-dialog-surface {
  display: flex;
  flex-direction: column;
  flex-grow: 0;
  flex-shrink: 0;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  position: relative;
  overflow-y: auto;
  outline: 0;
  transform: scale(0.8);
  transition: transform var(--%NS%mat-dialog-transition-duration, 0ms) cubic-bezier(0, 0, 0.2, 1);
  max-height: inherit;
  min-height: inherit;
  min-width: inherit;
  max-width: inherit;
  box-shadow: var(--%NS%mat-dialog-container-elevation-shadow, none);
  border-radius: var(--%NS%mat-dialog-container-shape, var(--%NS%mat-sys-corner-extra-large, 4px));
  background-color: var(--%NS%mat-dialog-container-color, var(--%NS%mat-sys-surface, white));
}
[dir=rtl] .mat-mdc-dialog-surface {
  text-align: right;
}
.mdc-dialog--open .mat-mdc-dialog-surface, .mdc-dialog--closing .mat-mdc-dialog-surface {
  transform: none;
}
._mat-animation-noopable .mat-mdc-dialog-surface {
  transition: none;
}
.mat-mdc-dialog-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 2px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}

.mat-mdc-dialog-title {
  display: block;
  position: relative;
  flex-shrink: 0;
  box-sizing: border-box;
  margin: 0 0 1px;
  padding: var(--%NS%mat-dialog-headline-padding, 6px 24px 13px);
}
.mat-mdc-dialog-title::before {
  display: inline-block;
  width: 0;
  height: 40px;
  content: "";
  vertical-align: 0;
}
[dir=rtl] .mat-mdc-dialog-title {
  text-align: right;
}
.mat-mdc-dialog-container .mat-mdc-dialog-title {
  color: var(--%NS%mat-dialog-subhead-color, var(--%NS%mat-sys-on-surface, rgba(0, 0, 0, 0.87)));
  font-family: var(--%NS%mat-dialog-subhead-font, var(--%NS%mat-sys-headline-small-font, inherit));
  line-height: var(--%NS%mat-dialog-subhead-line-height, var(--%NS%mat-sys-headline-small-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-subhead-size, var(--%NS%mat-sys-headline-small-size, 1rem));
  font-weight: var(--%NS%mat-dialog-subhead-weight, var(--%NS%mat-sys-headline-small-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-subhead-tracking, var(--%NS%mat-sys-headline-small-tracking, 0.03125em));
}

.mat-mdc-dialog-content {
  display: block;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  overflow: auto;
  max-height: 65vh;
}
.mat-mdc-dialog-content > :first-child {
  margin-top: 0;
}
.mat-mdc-dialog-content > :last-child {
  margin-bottom: 0;
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  color: var(--%NS%mat-dialog-supporting-text-color, var(--%NS%mat-sys-on-surface-variant, rgba(0, 0, 0, 0.6)));
  font-family: var(--%NS%mat-dialog-supporting-text-font, var(--%NS%mat-sys-body-medium-font, inherit));
  line-height: var(--%NS%mat-dialog-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height, 1.5rem));
  font-size: var(--%NS%mat-dialog-supporting-text-size, var(--%NS%mat-sys-body-medium-size, 1rem));
  font-weight: var(--%NS%mat-dialog-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight, 400));
  letter-spacing: var(--%NS%mat-dialog-supporting-text-tracking, var(--%NS%mat-sys-body-medium-tracking, 0.03125em));
}
.mat-mdc-dialog-container .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-content-padding, 20px 24px);
}
.mat-mdc-dialog-container-with-actions .mat-mdc-dialog-content {
  padding: var(--%NS%mat-dialog-with-actions-content-padding, 20px 24px 0);
}
.mat-mdc-dialog-container .mat-mdc-dialog-title + .mat-mdc-dialog-content {
  padding-top: 0;
}

.mat-mdc-dialog-actions {
  display: flex;
  position: relative;
  flex-shrink: 0;
  flex-wrap: wrap;
  align-items: center;
  box-sizing: border-box;
  min-height: 52px;
  margin: 0;
  border-top: 1px solid transparent;
  padding: var(--%NS%mat-dialog-actions-padding, 16px 24px);
  justify-content: var(--%NS%mat-dialog-actions-alignment, flex-end);
}
@media (forced-colors: active) {
  .mat-mdc-dialog-actions {
    border-top-color: CanvasText;
  }
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-start, .mat-mdc-dialog-actions[align=start] {
  justify-content: start;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-center, .mat-mdc-dialog-actions[align=center] {
  justify-content: center;
}
.mat-mdc-dialog-actions.mat-mdc-dialog-actions-align-end, .mat-mdc-dialog-actions[align=end] {
  justify-content: flex-end;
}
.mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
.mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-mdc-dialog-actions .mat-button-base + .mat-button-base,
[dir=rtl] .mat-mdc-dialog-actions .mat-mdc-button-base + .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}

.mat-mdc-dialog-component-host {
  display: contents;
}
`],encapsulation:2,changeDetection:1})}return i})();var pt=`--mat-dialog-transition-duration`;function gt(i){return i==null?null:typeof i==`number`?i:i.endsWith(`ms`)?mp(i.substring(0,i.length-2)):i.endsWith(`s`)?mp(i.substring(0,i.length-1))*1e3:i===`0`?0:null}var te=(function(i){return i[i.OPEN=0]=`OPEN`,i[i.CLOSING=1]=`CLOSING`,i[i.CLOSED=2]=`CLOSED`,i})(te||{});var A=class{_ref;_config;_containerInstance;componentInstance;componentRef=null;disableClose;id;_afterOpened=new Fo(1);_beforeClosed=new Fo(1);_result;_closeFallbackTimeout;_state=te.OPEN;_closeInteractionType;constructor(o,e,t){this._ref=o,this._config=e,this._containerInstance=t,this.disableClose=e.disableClose,this.id=o.id,o.addPanelClass(`mat-mdc-dialog-panel`),t._animationStateChanged.pipe(me(n=>n.state===`opened`),He(1)).subscribe(()=>{this._afterOpened.next(),this._afterOpened.complete()}),t._animationStateChanged.pipe(me(n=>n.state===`closed`),He(1)).subscribe(()=>{clearTimeout(this._closeFallbackTimeout),this._finishDialogClose()}),o.overlayRef.detachments().subscribe(()=>{this._beforeClosed.next(this._result),this._beforeClosed.complete(),this._finishDialogClose()}),__(this.backdropClick(),this.keydownEvents().pipe(me(n=>n.keyCode===27&&!this.disableClose&&!yE(n)))).subscribe(n=>{this.disableClose||(n.preventDefault(),ft(this,n.type===`keydown`?`keyboard`:`mouse`))})}close(o){let e=this._config.closePredicate;e&&!e(o,this._config,this.componentInstance)||(this._result=o,this._containerInstance._animationStateChanged.pipe(me(t=>t.state===`closing`),He(1)).subscribe(t=>{this._beforeClosed.next(o),this._beforeClosed.complete(),this._ref.overlayRef.detachBackdrop(),this._closeFallbackTimeout=setTimeout(()=>this._finishDialogClose(),t.totalTime+100)}),this._state=te.CLOSING,this._containerInstance._startExitAnimation())}afterOpened(){return this._afterOpened}afterClosed(){return this._ref.closed}beforeClosed(){return this._beforeClosed}backdropClick(){return this._ref.backdropClick}keydownEvents(){return this._ref.keydownEvents}updatePosition(o){let e=this._ref.config.positionStrategy;return o&&(o.left||o.right)?o.left?e.left(o.left):e.right(o.right):e.centerHorizontally(),o&&(o.top||o.bottom)?o.top?e.top(o.top):e.bottom(o.bottom):e.centerVertically(),this._ref.updatePosition(),this}updateSize(o=``,e=``){return this._ref.updateSize(o,e),this}addPanelClass(o){return this._ref.addPanelClass(o),this}removePanelClass(o){return this._ref.removePanelClass(o),this}getState(){return this._state}_finishDialogClose(){this._state=te.CLOSED,this._ref.close(this._result,{focusOrigin:this._closeInteractionType}),this.componentInstance=null}};function ft(i,o,e){return i._closeInteractionType=o,i.close(e)}var ve=new v(`MatMdcDialogData`);var Lt=new v(`mat-mdc-dialog-default-options`);var Pt=new v(`mat-mdc-dialog-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=f(te$1);return()=>Yt(i)}});var F=(()=>{class i{_defaultOptions=f(Lt,{optional:!0});_scrollStrategy=f(Pt);_parentDialog=f(i,{optional:!0,skipSelf:!0});_idGenerator=f(wp);_injector=f(te$1);_dialog=f(ye);_animationsDisabled=Co();_openDialogsAtThisLevel=[];_afterAllClosedAtThisLevel=new F$1;_afterOpenedAtThisLevel=new F$1;dialogConfigClass=ie;_dialogRefConstructor;_dialogContainerType;_dialogDataToken;get openDialogs(){return this._parentDialog?this._parentDialog.openDialogs:this._openDialogsAtThisLevel}get afterOpened(){return this._parentDialog?this._parentDialog.afterOpened:this._afterOpenedAtThisLevel}_getAfterAllClosed(){let e=this._parentDialog;return e?e._getAfterAllClosed():this._afterAllClosedAtThisLevel}afterAllClosed=Vo(()=>this.openDialogs.length?this._getAfterAllClosed():this._getAfterAllClosed().pipe(zo(void 0)));constructor(){this._dialogRefConstructor=A,this._dialogContainerType=Rt,this._dialogDataToken=ve}open(e,t){let n;t=m(m({},this._defaultOptions||new ie),t),t.id=t.id||this._idGenerator.getId(`mat-mdc-dialog-`),t.scrollStrategy=t.scrollStrategy||this._scrollStrategy();let a=this._dialog.open(e,U$1(m({},t),{positionStrategy:Qt(this._injector).centerHorizontally().centerVertically(),disableClose:!0,closePredicate:void 0,closeOnDestroy:!1,closeOnOverlayDetachments:!1,disableAnimations:this._animationsDisabled||t.enterAnimationDuration?.toLocaleString()===`0`||t.exitAnimationDuration?.toString()===`0`,container:{type:this._dialogContainerType,providers:()=>[{provide:this.dialogConfigClass,useValue:t},{provide:b,useValue:t}]},templateContext:()=>({dialogRef:n}),providers:(l,r,p)=>(n=new this._dialogRefConstructor(l,t,p),n.updatePosition(t?.position),[{provide:this._dialogContainerType,useValue:p},{provide:this._dialogDataToken,useValue:r.data},{provide:this._dialogRefConstructor,useValue:n},{provide:C,useValue:null}])}));return n.componentRef=a.componentRef,n.componentInstance=a.componentInstance,this.openDialogs.push(n),this.afterOpened.next(n),n.afterClosed().subscribe(()=>{let l=this.openDialogs.indexOf(n);l>-1&&(this.openDialogs.splice(l,1),this.openDialogs.length||this._getAfterAllClosed().next())}),n}closeAll(){this._closeDialogs(this.openDialogs)}getDialogById(e){return this.openDialogs.find(t=>t.id===e)}ngOnDestroy(){this._closeDialogs(this._openDialogsAtThisLevel),this._afterAllClosedAtThisLevel.complete(),this._afterOpenedAtThisLevel.complete()}_closeDialogs(e){let t=e.length;for(;t--;)e[t].close()}static ɵfac=function(t){return new(t||i)};static ɵprov=N({token:i,factory:i.ɵfac})}return i})();var _t=(()=>{class i{dialogRef=f(A,{optional:!0});_elementRef=f(ae);_dialog=f(F);ariaLabel;type=`button`;dialogResult;_matDialogClose;ngOnInit(){this.dialogRef||(this.dialogRef=Ct(this._elementRef,this._dialog.openDialogs))}ngOnChanges(e){let t=e._matDialogClose;t&&(this.dialogResult=t.currentValue)}_onButtonClick(e){this._elementRef.nativeElement.getAttribute(`aria-disabled`)!==`true`&&ft(this.dialogRef,e.screenX===0&&e.screenY===0?`keyboard`:`mouse`,this.dialogResult)}static ɵfac=function(t){return new(t||i)};static ɵdir=Oe({type:i,selectors:[[``,`mat-dialog-close`,``],[``,`matDialogClose`,``]],hostVars:2,hostBindings:function(t,n){t&1&&dc(`click`,function(l){return n._onButtonClick(l)}),t&2&&Kt(`aria-label`,n.ariaLabel||null)(`type`,n.type)},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],type:`type`,dialogResult:[0,`mat-dialog-close`,`dialogResult`],_matDialogClose:[0,`matDialogClose`,`_matDialogClose`]},exportAs:[`matDialogClose`],features:[pr]})}return i})();var yt=(()=>{class i{_dialogRef=f(A,{optional:!0});_elementRef=f(ae);_dialog=f(F);ngOnInit(){this._dialogRef||(this._dialogRef=Ct(this._elementRef,this._dialog.openDialogs)),this._dialogRef&&Promise.resolve().then(()=>{this._onAdd()})}ngOnDestroy(){this._dialogRef?._containerInstance&&Promise.resolve().then(()=>{this._onRemove()})}static ɵfac=function(t){return new(t||i)};static ɵdir=Oe({type:i})}return i})();var bt=(()=>{class i extends yt{id=f(wp).getId(`mat-mdc-dialog-title-`);_onAdd(){this._dialogRef._containerInstance?._addAriaLabelledBy?.(this.id)}_onRemove(){this._dialogRef?._containerInstance?._removeAriaLabelledBy?.(this.id)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Eg(i)))(n||i)}})();static ɵdir=Oe({type:i,selectors:[[``,`mat-dialog-title`,``],[``,`matDialogTitle`,``]],hostAttrs:[1,`mat-mdc-dialog-title`,`mdc-dialog__title`],hostVars:1,hostBindings:function(t,n){t&2&&ty(`id`,n.id)},inputs:{id:`id`},exportAs:[`matDialogTitle`],features:[so]})}return i})();var vt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=Oe({type:i,selectors:[[``,`mat-dialog-content`,``],[`mat-dialog-content`],[``,`matDialogContent`,``]],hostAttrs:[1,`mat-mdc-dialog-content`,`mdc-dialog__content`],features:[LD([re])]})}return i})();var Dt=(()=>{class i extends yt{align;_onAdd(){this._dialogRef._containerInstance?._updateActionSectionCount?.(1)}_onRemove(){this._dialogRef._containerInstance?._updateActionSectionCount?.(-1)}static ɵfac=(()=>{let e;return function(n){return(e||(e=Eg(i)))(n||i)}})();static ɵdir=Oe({type:i,selectors:[[``,`mat-dialog-actions`,``],[`mat-dialog-actions`],[``,`matDialogActions`,``]],hostAttrs:[1,`mat-mdc-dialog-actions`,`mdc-dialog__actions`],hostVars:6,hostBindings:function(t,n){t&2&&Tt$1(`mat-mdc-dialog-actions-align-start`,n.align===`start`)(`mat-mdc-dialog-actions-align-center`,n.align===`center`)(`mat-mdc-dialog-actions-align-end`,n.align===`end`)},inputs:{align:`align`},features:[so]})}return i})();function Ct(i,o){let e=i.nativeElement.parentElement;for(;e&&!e.classList.contains(`mat-mdc-dialog-container`);)e=e.parentElement;return e?o.find(t=>t.id===e.id):null}var At=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=De({type:i});static ɵinj=Ee({providers:[F],imports:[mt,ce,At$1,Mo]})}return i})();var St=`q-notes`;var jt={notes:{}};function qt(){let i=localStorage.getItem(St);if(!i)return{};try{let o=JSON.parse(i);return typeof o!=`object`||o===null||Array.isArray(o)?{}:Object.fromEntries(Object.entries(o).filter(e=>typeof e[1]==`string`&&e[1].trim()!==``))}catch{return{}}}var ne=H$1({providedIn:`root`},J(jt),V(i=>({onInit(){B(i,{notes:qt()}),li$1(()=>localStorage.setItem(St,JSON.stringify(i.notes())))}})),$(i=>({noteFor(o){return i.notes()[o]??``},hasNote(o){return i.notes()[o]!==void 0},setNote(o,e){B(i,t=>{let n=e.trim();if(!n){if(!(o in t.notes))return{};let a=m({},t.notes);return delete a[o],{notes:a}}return{notes:U$1(m({},t.notes),{[o]:n})}})}})));function zt(i,o){if(i&1){let e=rT();Za(0,`button`,8),dc(`click`,function(){Kh(e);return Yh(sT().clear())}),xT(1,`Clear`),nf()}}var oe=class i{data=f(ve);dialogRef=f(A);notes=f(ne);draft=Y(this.notes.noteFor(this.data.questionId));hasSavedNote=this.notes.hasNote(this.data.questionId);onInput(o){this.draft.set(o.target.value)}onKeydown(o){o.key===`Enter`&&(o.metaKey||o.ctrlKey)&&(o.preventDefault(),this.save())}save(){this.notes.setNote(this.data.questionId,this.draft()),this.dialogRef.close()}clear(){this.notes.setNote(this.data.questionId,``),this.dialogRef.close()}static ɵfac=function(e){return new(e||i)};static ɵcmp=Ae({type:i,selectors:[[`app-notes-dialog`]],decls:14,vars:3,consts:[[`mat-dialog-title`,``,1,`m-0`,`text-lg`,`font-semibold`],[1,`m-0`,`mb-3`,`line-clamp-2`,`text-sm`,`text-(--mat-sys-on-surface-variant)`],[`rows`,`9`,`data-testid`,`notes-input`,`aria-label`,`Notes for this question`,`placeholder`,`What tripped you up, what you would answer differently, what to revisit…`,1,`w-full`,`resize-y`,`rounded-lg`,`border`,`border-(--mat-sys-outline-variant)`,`bg-transparent`,`p-2.5`,`text-[0.95rem]`,`leading-relaxed`,`outline-none`,`focus-visible:border-(--mat-sys-primary)`,3,`input`,`keydown`,`value`],[1,`m-0`,`mt-3`,`text-xs`,`text-(--mat-sys-on-surface-variant)`],[`align`,`end`],[`mat-button`,``,`type`,`button`,`mat-dialog-close`,``],[`mat-button`,``,`type`,`button`],[`mat-flat-button`,``,`type`,`button`,3,`click`],[`mat-button`,``,`type`,`button`,3,`click`]],template:function(e,t){e&1&&(Za(0,`h2`,0),xT(1,`Notes`),nf(),Za(2,`mat-dialog-content`)(3,`p`,1),xT(4),nf(),Za(5,`textarea`,2),dc(`input`,function(a){return t.onInput(a)})(`keydown`,function(a){return t.onKeydown(a)}),nf(),Za(6,`p`,3),xT(7,` Saved against this question in this browser. `),nf()(),Za(8,`mat-dialog-actions`,4)(9,`button`,5),xT(10,`Cancel`),nf(),Ri(11,zt,2,0,`button`,6),Za(12,`button`,7),dc(`click`,function(){return t.save()}),xT(13,`Save`),nf()()),e&2&&(Di(4),sf(` `,t.data.question,` `),Di(),Jv(`value`,t.draft()),Di(6),Ai(t.hasSavedNote?11:-1))},dependencies:[h8,p8,At,_t,bt,Dt,vt],encapsulation:2})};var xt=class i{dialog=f(F);notes=f(ne);questionId=co.required();question=co.required();hasNote=Li(()=>this.notes.hasNote(this.questionId()));label=Li(()=>`${this.hasNote()?`Edit notes for`:`Add notes for`}: ${this.question()}`);open(){this.dialog.open(oe,{data:{questionId:this.questionId(),question:this.question()},autoFocus:`first-tabbable`,restoreFocus:!0,width:`34rem`,maxWidth:`calc(100vw - 2rem)`})}static ɵfac=function(e){return new(e||i)};static ɵcmp=Ae({type:i,selectors:[[`app-question-notes`]],hostAttrs:[1,`inline-flex`,`shrink-0`],inputs:{questionId:[1,`questionId`],question:[1,`question`]},decls:3,vars:4,consts:[[`mat-icon-button`,``,`type`,`button`,1,`relative`,`z-10`,3,`click`,`matTooltip`],[`aria-hidden`,`true`,1,`material-symbols-outlined`]],template:function(e,t){e&1&&(Za(0,`button`,0),dc(`click`,function(){return t.open()}),Za(1,`span`,1),xT(2,`add_notes`),nf()()),e&2&&(ay(`--%NS%mat-icon-button-icon-color`,t.hasNote()?`var(--mat-sys-primary)`:null),Jv(`matTooltip`,t.hasNote()?`Edit notes`:`Add notes`),Kt(`aria-label`,t.label()))},dependencies:[h8,Ax,Yt$1,mt$2],encapsulation:2})};export{xt as n,lt as t};