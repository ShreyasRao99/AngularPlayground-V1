import{$n as sD,At as WE,B as Iv,F as HI,G as KI,Gn as q,H as Jp,It as Wp,Kn as qE,O as Fp,Pn as mi,Qn as ru,V as J,Vn as ou,X as Lc,Zt as b,_n as iD,b as Cr,bt as Tr,cn as eD,dr as xD,en as bp,hr as ye,j as Gh,kt as Vp,l as A,lr as vr,m as Bh,n as $I,or as tv,sr as ur,ut as Ol,vt as Rc,wn as jP,xr as zp,y as Cp,zn as oe,zt as ZE}from"./chunk-C3qvLal_.js";import"./chunk-D5FcjZHJ.js";import{E as zn,G as p,H as kt,I as Zn,K as qn,U as le,W as ls,a as Tt,c as Z,d as ee,h as pe,i as Q,m as oe$1,o as U,p as mt,q as se,u as ci,x as Pn}from"./main-YH2P2Z4N.js";var vt=Math.pow(2,31)-1;var h=class{_overlayRef;instance;containerInstance;_afterDismissed=new J;_afterOpened=new J;_onAction=new J;_durationTimeoutId;_dismissedByAction=!1;constructor(f,t){this._overlayRef=t,this.containerInstance=f,f._onExit.subscribe(()=>this._finishDismiss())}dismiss(){this._afterDismissed.closed||this.containerInstance.exit(),clearTimeout(this._durationTimeoutId)}dismissWithAction(){this._onAction.closed||(this._dismissedByAction=!0,this._onAction.next(),this._onAction.complete(),this.dismiss()),clearTimeout(this._durationTimeoutId)}closeWithAction(){this.dismissWithAction()}_dismissAfter(f){this._durationTimeoutId=setTimeout(()=>this.dismiss(),Math.min(f,vt))}_open(){this._afterOpened.closed||(this._afterOpened.next(),this._afterOpened.complete())}_finishDismiss(){this._overlayRef.dispose(),this._onAction.closed||this._onAction.complete(),this._afterDismissed.next({dismissedByAction:this._dismissedByAction}),this._afterDismissed.complete(),this._dismissedByAction=!1}afterDismissed(){return this._afterDismissed}afterOpened(){return this.containerInstance._onEnter}onAction(){return this._onAction}};var ht=new A(`MatSnackBarData`);var d=class{politeness=`polite`;announcementMessage=``;viewContainerRef;duration=0;panelClass;direction;data=null;horizontalPosition=`center`;verticalPosition=`bottom`};var gt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ZE({type:i,selectors:[[``,`matSnackBarLabel`,``]],hostAttrs:[1,`mat-mdc-snack-bar-label`,`mdc-snackbar__label`]})}return i})();var yt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ZE({type:i,selectors:[[``,`matSnackBarActions`,``]],hostAttrs:[1,`mat-mdc-snack-bar-actions`,`mdc-snackbar__actions`]})}return i})();var xt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵdir=ZE({type:i,selectors:[[``,`matSnackBarAction`,``]],hostAttrs:[1,`mat-mdc-snack-bar-action`,`mdc-snackbar__action`]})}return i})();var ft=(()=>{class i{snackBarRef=b(h);data=b(ht);action(){this.snackBarRef.dismissWithAction()}get hasAction(){return!!this.data.action}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){function t(n,e){if(n&1){let a=KI();mi(0,`div`,1)(1,`button`,2),Wp(`click`,function(){ru(a);let s=eD();return ou(s.action())}),xD(2),Rc()()}if(n&2){let a=eD();Iv(2),Lc(` `,a.data.action,` `)}}return WE({type:i,selectors:[[`simple-snack-bar`]],hostAttrs:[1,`mat-mdc-simple-snack-bar`],exportAs:[`matSnackBar`],decls:3,vars:2,consts:[[`matSnackBarLabel`,``],[`matSnackBarActions`,``],[`matButton`,``,`matSnackBarAction`,``,3,`click`]],template:function(e,a){e&1&&(mi(0,`div`,0),xD(1),Rc(),HI(2,t,3,1,`div`,1)),e&2&&(Iv(),Lc(` `,a.data.message,`
`),Iv(),$I(a.hasAction?2:-1))},dependencies:[zn,gt,yt,xt],styles:[`.mat-mdc-simple-snack-bar {
  display: flex;
}
.mat-mdc-simple-snack-bar .mat-mdc-snack-bar-label {
  max-height: 50vh;
  overflow: auto;
}
`],encapsulation:2})})()}return i})();var T=`_mat-snack-bar-enter`;var R=`_mat-snack-bar-exit`;var St=(()=>{class i extends U{_ngZone=b(ye);_elementRef=b(Cr);_changeDetectorRef=b(jP);_platform=b(p);_animationsDisabled=qn();snackBarConfig=b(d);_document=b(ur);_trackedModals=new Set;_enterFallback;_exitFallback;_injector=b(oe);_announceDelay=150;_announceTimeoutId;_destroyed=!1;_portalOutlet;_onAnnounce=new J;_onExit=new J;_onEnter=new J;_animationState=`void`;_live;_label;_role;_liveElementId=b(le).getId(`mat-snack-bar-container-live-`);constructor(){super();let t=this.snackBarConfig;t.politeness===`assertive`&&!t.announcementMessage?this._live=`assertive`:t.politeness===`off`?this._live=`off`:this._live=`polite`,this._platform.FIREFOX&&(this._live===`polite`&&(this._role=`status`),this._live===`assertive`&&(this._role=`alert`))}attachComponentPortal(t){this._assertNotAttached();let n=this._portalOutlet.attachComponentPortal(t);return this._afterPortalAttached(),n}attachTemplatePortal(t){this._assertNotAttached();let n=this._portalOutlet.attachTemplatePortal(t);return this._afterPortalAttached(),n}attachDomPortal=t=>{this._assertNotAttached();let n=this._portalOutlet.attachDomPortal(t);return this._afterPortalAttached(),n};onAnimationEnd(t){t===R?this._completeExit():t===T&&(clearTimeout(this._enterFallback),this._ngZone.run(()=>{this._onEnter.next(),this._onEnter.complete()}))}enter(){this._destroyed||(this._animationState=`visible`,this._changeDetectorRef.markForCheck(),this._changeDetectorRef.detectChanges(),this._screenReaderAnnounce(),this._animationsDisabled?tv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(T)))},{injector:this._injector}):(clearTimeout(this._enterFallback),this._enterFallback=setTimeout(()=>{this._elementRef.nativeElement.classList.add(`mat-snack-bar-fallback-visible`),this.onAnimationEnd(T)},200)))}exit(){return this._destroyed?Bh(void 0):(this._ngZone.run(()=>{this._animationState=`hidden`,this._changeDetectorRef.markForCheck(),this._elementRef.nativeElement.setAttribute(`mat-exit`,``),clearTimeout(this._announceTimeoutId),this._animationsDisabled?tv(()=>{this._ngZone.run(()=>queueMicrotask(()=>this.onAnimationEnd(R)))},{injector:this._injector}):(clearTimeout(this._exitFallback),this._exitFallback=setTimeout(()=>this.onAnimationEnd(R),200))}),this._onExit)}ngOnDestroy(){this._destroyed=!0,this._clearFromModals(),this._completeExit()}_completeExit(){clearTimeout(this._exitFallback),queueMicrotask(()=>{this._onExit.next(),this._onExit.complete()})}_afterPortalAttached(){let t=this._elementRef.nativeElement,n=this.snackBarConfig.panelClass;n&&(Array.isArray(n)?n.forEach(r=>t.classList.add(r)):t.classList.add(n)),this._exposeToModals();let e=this._label.nativeElement,a=`mdc-snackbar__label`;e.classList.toggle(a,!e.querySelector(`.${a}`))}_exposeToModals(){let t=this._liveElementId,n=this._document.querySelectorAll(`body > .cdk-overlay-container [aria-modal="true"]`);for(let e=0;e<n.length;e++){let a=n[e],r=a.getAttribute(`aria-owns`);this._trackedModals.add(a),r?r.indexOf(t)===-1&&a.setAttribute(`aria-owns`,r+` `+t):a.setAttribute(`aria-owns`,t)}}_clearFromModals(){this._trackedModals.forEach(t=>{let n=t.getAttribute(`aria-owns`);if(n){let e=n.replace(this._liveElementId,``).trim();e.length>0?t.setAttribute(`aria-owns`,e):t.removeAttribute(`aria-owns`)}}),this._trackedModals.clear()}_assertNotAttached(){this._portalOutlet.hasAttached()}_screenReaderAnnounce(){this._announceTimeoutId||this._ngZone.runOutsideAngular(()=>{this._announceTimeoutId=setTimeout(()=>{if(this._destroyed)return;let t=this._elementRef.nativeElement,n=t.querySelector(`[aria-hidden]`),e=t.querySelector(`[aria-live]`);if(n&&e){let a=null;this._platform.isBrowser&&document.activeElement instanceof HTMLElement&&n.contains(document.activeElement)&&(a=document.activeElement),n.removeAttribute(`aria-hidden`),e.appendChild(n),a?.focus(),this._onAnnounce.next(),this._onAnnounce.complete()}},this._announceDelay)})}static ɵfac=function(n){return new(n||i)};static ɵcmp=(function(){let t=[`label`];function n(e,a){}return WE({type:i,selectors:[[`mat-snack-bar-container`]],viewQuery:function(a,r){if(a&1&&zp(ci,7)(t,7),a&2){let s;iD(s=sD())&&(r._portalOutlet=s.first),iD(s=sD())&&(r._label=s.first)}},hostAttrs:[1,`mdc-snackbar`,`mat-mdc-snack-bar-container`],hostVars:6,hostBindings:function(a,r){a&1&&Wp(`animationend`,function(c){return r.onAnimationEnd(c.animationName)})(`animationcancel`,function(c){return r.onAnimationEnd(c.animationName)}),a&2&&Jp(`mat-snack-bar-container-enter`,r._animationState===`visible`)(`mat-snack-bar-container-exit`,r._animationState===`hidden`)(`mat-snack-bar-container-animations-enabled`,!r._animationsDisabled)},features:[bp],decls:6,vars:3,consts:[[`label`,``],[1,`mdc-snackbar__surface`,`mat-mdc-snackbar-surface`],[1,`mat-mdc-snack-bar-label`],[`aria-hidden`,`true`],[`cdkPortalOutlet`,``]],template:function(a,r){a&1&&(mi(0,`div`,1)(1,`div`,2,0)(3,`div`,3),Cp(4,n,0,0,`ng-template`,4),Rc(),Vp(5,`div`),Rc()()),a&2&&(Iv(5),Fp(`aria-live`,r._live)(`role`,r._role)(`id`,r._liveElementId))},dependencies:[ci],styles:[`@keyframes _mat-snack-bar-enter {
  from {
    transform: scale(0.8);
    opacity: 0;
  }
  to {
    transform: scale(1);
    opacity: 1;
  }
}
@keyframes _mat-snack-bar-exit {
  from {
    opacity: 1;
  }
  to {
    opacity: 0;
  }
}
.mat-mdc-snack-bar-container {
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  margin: 8px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snack-bar-container {
  width: 100vw;
}

.mat-snack-bar-container-animations-enabled {
  opacity: 0;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-fallback-visible {
  opacity: 1;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-enter {
  animation: _mat-snack-bar-enter 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}
.mat-snack-bar-container-animations-enabled.mat-snack-bar-container-exit {
  animation: _mat-snack-bar-exit 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}

.mat-mdc-snackbar-surface {
  box-shadow: 0px 3px 5px -1px rgba(0, 0, 0, 0.2), 0px 6px 10px 0px rgba(0, 0, 0, 0.14), 0px 1px 18px 0px rgba(0, 0, 0, 0.12);
  display: flex;
  align-items: center;
  justify-content: flex-start;
  box-sizing: border-box;
  padding-left: 0;
  padding-right: 8px;
}
[dir=rtl] .mat-mdc-snackbar-surface {
  padding-right: 0;
  padding-left: 8px;
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  min-width: 344px;
  max-width: 672px;
}
.mat-mdc-snack-bar-handset .mat-mdc-snackbar-surface {
  width: 100%;
  min-width: 0;
}
@media (forced-colors: active) {
  .mat-mdc-snackbar-surface {
    outline: solid 1px;
  }
}
.mat-mdc-snack-bar-container .mat-mdc-snackbar-surface {
  color: var(--%NS%mat-snack-bar-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-snack-bar-container-shape, var(--%NS%mat-sys-corner-extra-small));
  background-color: var(--%NS%mat-snack-bar-container-color, var(--%NS%mat-sys-inverse-surface));
}

.mdc-snackbar__label {
  width: 100%;
  flex-grow: 1;
  box-sizing: border-box;
  margin: 0;
  padding: 14px 8px 14px 16px;
}
[dir=rtl] .mdc-snackbar__label {
  padding-left: 8px;
  padding-right: 16px;
}
.mat-mdc-snack-bar-container .mdc-snackbar__label {
  font-family: var(--%NS%mat-snack-bar-supporting-text-font, var(--%NS%mat-sys-body-medium-font));
  font-size: var(--%NS%mat-snack-bar-supporting-text-size, var(--%NS%mat-sys-body-medium-size));
  font-weight: var(--%NS%mat-snack-bar-supporting-text-weight, var(--%NS%mat-sys-body-medium-weight));
  line-height: var(--%NS%mat-snack-bar-supporting-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
}

.mat-mdc-snack-bar-actions {
  display: flex;
  flex-shrink: 0;
  align-items: center;
  box-sizing: border-box;
}

.mat-mdc-snack-bar-handset,
.mat-mdc-snack-bar-container,
.mat-mdc-snack-bar-label {
  flex: 1 1 auto;
}

.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled).mat-unthemed {
  color: var(--%NS%mat-snack-bar-button-color, var(--%NS%mat-sys-inverse-primary));
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) {
  --%NS%mat-button-text-state-layer-color: currentColor;
  --%NS%mat-button-text-ripple-color: currentColor;
}
.mat-mdc-snack-bar-container .mat-mdc-button.mat-mdc-snack-bar-action:not(:disabled) .mat-ripple-element {
  opacity: 0.1;
}
`],encapsulation:2,changeDetection:1})})()}return i})();var At=new A(`mat-snack-bar-default-options`,{providedIn:`root`,factory:()=>new d});var Bt=(()=>{class i{_live=b(kt);_injector=b(oe);_breakpointObserver=b(se);_parentSnackBar=b(i,{optional:!0,skipSelf:!0});_defaultConfig=b(At);_animationsDisabled=qn();_snackBarRefAtThisLevel=null;simpleSnackBarComponent=ft;snackBarContainerComponent=St;handsetCssClass=`mat-mdc-snack-bar-handset`;get _openedSnackBarRef(){let t=this._parentSnackBar;return t?t._openedSnackBarRef:this._snackBarRefAtThisLevel}set _openedSnackBarRef(t){this._parentSnackBar?this._parentSnackBar._openedSnackBarRef=t:this._snackBarRefAtThisLevel=t}openFromComponent(t,n){return this._attach(t,n)}openFromTemplate(t,n){return this._attach(t,n)}open(t,n=``,e){let a=q(q({},this._defaultConfig),e);return a.data={message:t,action:n},a.announcementMessage===t&&(a.announcementMessage=void 0),this.openFromComponent(this.simpleSnackBarComponent,a)}dismiss(){this._openedSnackBarRef&&this._openedSnackBarRef.dismiss()}ngOnDestroy(){this._snackBarRefAtThisLevel&&this._snackBarRefAtThisLevel.dismiss()}_attachSnackBarContainer(t,n){let e=n&&n.viewContainerRef&&n.viewContainerRef.injector,a=oe.create({parent:e||this._injector,providers:[{provide:d,useValue:n}]}),r=new mt(this.snackBarContainerComponent,n.viewContainerRef,a),s=t.attach(r);return s.instance.snackBarConfig=n,s.instance}_attach(t,n){let e=q(q(q({},new d),this._defaultConfig),n),a=this._createOverlay(e),r=this._attachSnackBarContainer(a,e),s=new h(r,a);if(t instanceof vr){let c=new Z(t,null,{$implicit:e.data,snackBarRef:s});s.instance=r.attachTemplatePortal(c)}else{let c=this._createInjector(e,s),_t=new mt(t,void 0,c);s.instance=r.attachComponentPortal(_t).instance}return this._breakpointObserver.observe(Zn.HandsetPortrait).pipe(Gh(a.detachments())).subscribe(c=>{a.overlayElement.classList.toggle(this.handsetCssClass,c.matches)}),e.announcementMessage&&r._onAnnounce.subscribe(()=>{this._live.announce(e.announcementMessage,e.politeness)}),this._animateSnackBar(s,e),this._openedSnackBarRef=s,this._openedSnackBarRef}_animateSnackBar(t,n){t.afterDismissed().subscribe(()=>{this._openedSnackBarRef==t&&(this._openedSnackBarRef=null),n.announcementMessage&&this._live.clear()}),n.duration&&n.duration>0&&t.afterOpened().subscribe(()=>t._dismissAfter(n.duration)),this._openedSnackBarRef?(this._openedSnackBarRef.afterDismissed().subscribe(()=>{t.containerInstance.enter()}),this._openedSnackBarRef.dismiss()):t.containerInstance.enter()}_createOverlay(t){let n=new Q;n.direction=t.direction;let e=ee(this._injector),a=t.direction===`rtl`,r=t.horizontalPosition===`left`||t.horizontalPosition===`start`&&!a||t.horizontalPosition===`end`&&a,s=!r&&t.horizontalPosition!==`center`;return r?e.left(`0`):s?e.right(`0`):e.centerHorizontally(),t.verticalPosition===`top`?e.top(`0`):e.bottom(`0`),n.positionStrategy=e,n.disableAnimations=this._animationsDisabled,oe$1(this._injector,n)}_createInjector(t,n){let e=t&&t.viewContainerRef&&t.viewContainerRef.injector;return oe.create({parent:e||this._injector,providers:[{provide:h,useValue:n},{provide:ht,useValue:t.data}]})}static ɵfac=function(n){return new(n||i)};static ɵprov=Tr({token:i,factory:i.ɵfac})}return i})();var Wt=(()=>{class i{static ɵfac=function(n){return new(n||i)};static ɵmod=qE({type:i});static ɵinj=Ol({providers:[Bt],imports:[pe,Tt,Pn,ft,ls]})}return i})();export{Bt as MatSnackBar};