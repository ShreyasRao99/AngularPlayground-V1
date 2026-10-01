import{$ as Sv,$t as qm,A as Km,B as Nr,Bt as me$1,C as HD,Ct as d2,D as J,Dt as eg,E as Iv,Et as eV,Ft as io,G as Q,Gt as nv,H as OS,Ht as mt,I as MS,It as jo,J as Qs,Jt as ou,K as QU,Kt as ny,L as Md,M as L,Mt as gn$1,N as Lt$1,Nt as hI,O as Jm,Ot as ei$1,P as M,Pt as hu,Q as St$1,R as N,Rt as kr,St as ca,T as It$1,Tt as eI,U as Od,V as O,Vt as mr,W as Pv,Wt as ng,Xt as q,Y as Qv,Yt as p,Z as Sg,Zt as qe$1,_t as au,a as Bi,at as W,b as Fe,bt as bu,c as By,cn as vu,ct as Ye,d as Cr,dn as x,dt as Z,en as re,et as TI,f as Ct$1,g as Ee,hn as zn$1,i as Ao,in as ue,it as Vs,j as Kt$1,jt as fn$1,kt as fa,l as C,lt as Ym,m as Dt$1,mn as xe,mt as _C,n as $,nn as st,nt as Tv,o as Bn$1,on as uv,ot as Wv,p as Dr,pn as xd,pt as Zt$1,q as Qm,qt as oc,r as $m,rn as tg,rt as VU,s as Bo,sn as v,st as Xt$1,tn as sh,u as Ce,un as wa,ut as Yt$1,v as Eo,vt as bU,w as Hs,wt as dg,x as Fo,y as Eu,yt as ba,z as Nd,zt as le}from"./main-XPHZ65PT.js";var me=class{_multiple;_emitChanges;compareWith;_selection=new Set;_deselectedToEmit=[];_selectedToEmit=[];_selected=null;get selected(){return this._selected||(this._selected=Array.from(this._selection.values())),this._selected}changed=new M;bulk={select:a=>this._select(a),deselect:a=>this._deselect(a),setSelection:a=>this._setSelection(a)};constructor(a=!1,e,t=!0,n){this._multiple=a,this._emitChanges=t,this.compareWith=n,e&&e.length&&(a?e.forEach(o=>this._markSelected(o)):this._markSelected(e[0]),this._selectedToEmit.length=0)}select(...a){return this._select(a)}deselect(...a){return this._deselect(a)}setSelection(...a){return this._setSelection(a)}toggle(a){return this.isSelected(a)?this.deselect(a):this.select(a)}clear(a=!0){this._unmarkAll();let e=this._hasQueuedChanges();return a&&this._emitChangeEvent(),e}isSelected(a){return this._selection.has(this._getConcreteValue(a))}isEmpty(){return this._selection.size===0}hasValue(){return!this.isEmpty()}sort(a){this._multiple&&this.selected&&this._selected.sort(a)}isMultipleSelection(){return this._multiple}_select(a){this._verifyValueAssignment(a),a.forEach(t=>this._markSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_deselect(a){this._verifyValueAssignment(a),a.forEach(t=>this._unmarkSelected(t));let e=this._hasQueuedChanges();return this._emitChangeEvent(),e}_setSelection(a){this._verifyValueAssignment(a);let e=this.selected,t=new Set(a.map(o=>this._getConcreteValue(o)));a.forEach(o=>this._markSelected(o)),e.filter(o=>!t.has(this._getConcreteValue(o,t))).forEach(o=>this._unmarkSelected(o));let n=this._hasQueuedChanges();return this._emitChangeEvent(),n}_emitChangeEvent(){this._selected=null,(this._selectedToEmit.length||this._deselectedToEmit.length)&&(this.changed.next({source:this,added:this._selectedToEmit,removed:this._deselectedToEmit}),this._deselectedToEmit=[],this._selectedToEmit=[])}_markSelected(a){a=this._getConcreteValue(a),this.isSelected(a)||(this._multiple||this._unmarkAll(),this.isSelected(a)||this._selection.add(a),this._emitChanges&&this._selectedToEmit.push(a))}_unmarkSelected(a){a=this._getConcreteValue(a),this.isSelected(a)&&(this._selection.delete(a),this._emitChanges&&this._deselectedToEmit.push(a))}_unmarkAll(){this.isEmpty()||this._selection.forEach(a=>this._unmarkSelected(a))}_verifyValueAssignment(a){a.length>1&&this._multiple}_hasQueuedChanges(){return!!(this._deselectedToEmit.length||this._selectedToEmit.length)}_getConcreteValue(a,e){if(this.compareWith){e=e??this._selection;for(let t of e)if(this.compareWith(a,t))return t;return a}else return a}};var ge=(()=>{class i{_listeners=[];notify(e,t){for(let n of this._listeners)n(e,t)}listen(e){return this._listeners.push(e),()=>{this._listeners=this._listeners.filter(t=>e!==t)}}ngOnDestroy(){this._listeners=[]}static ɵfac=function(t){return new(t||i)};static ɵprov=N({token:i,factory:i.ɵfac})}return i})();var Te=new v(``);var Ei=new v(``);var Ct=(()=>{class i{_animationsDisabled=kr();state=`unchecked`;disabled=!1;appearance=`full`;static ɵfac=function(t){return new(t||i)};static ɵcmp=me$1({type:i,selectors:[[`mat-pseudo-checkbox`]],hostAttrs:[1,`mat-pseudo-checkbox`],hostVars:12,hostBindings:function(t,n){t&2&&qe$1(`mat-pseudo-checkbox-indeterminate`,n.state===`indeterminate`)(`mat-pseudo-checkbox-checked`,n.state===`checked`)(`mat-pseudo-checkbox-disabled`,n.disabled)(`mat-pseudo-checkbox-minimal`,n.appearance===`minimal`)(`mat-pseudo-checkbox-full`,n.appearance===`full`)(`_mat-animation-noopable`,n._animationsDisabled)},inputs:{state:`state`,disabled:`disabled`,appearance:`appearance`},decls:0,vars:0,template:function(t,n){},styles:[`.mat-pseudo-checkbox {
  border-radius: 2px;
  cursor: pointer;
  display: inline-block;
  vertical-align: middle;
  box-sizing: border-box;
  position: relative;
  flex-shrink: 0;
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 0.1), background-color 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox::after {
  position: absolute;
  opacity: 0;
  content: "";
  border-bottom: 2px solid currentColor;
  transition: opacity 90ms cubic-bezier(0, 0, 0.2, 0.1);
}
.mat-pseudo-checkbox._mat-animation-noopable {
  transition: none !important;
  animation: none !important;
}
.mat-pseudo-checkbox._mat-animation-noopable::after {
  transition: none;
}

.mat-pseudo-checkbox-disabled {
  cursor: default;
}

.mat-pseudo-checkbox-indeterminate::after {
  left: 1px;
  opacity: 1;
  border-radius: 2px;
}

.mat-pseudo-checkbox-checked::after {
  left: 1px;
  border-left: 2px solid currentColor;
  transform: rotate(-45deg);
  opacity: 1;
  box-sizing: content-box;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color, var(--%NS%mat-sys-primary));
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mat-pseudo-checkbox-full {
  border-color: var(--%NS%mat-pseudo-checkbox-full-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  border-width: 2px;
  border-style: solid;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-disabled {
  border-color: var(--%NS%mat-pseudo-checkbox-full-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate {
  background-color: var(--%NS%mat-pseudo-checkbox-full-selected-icon-color, var(--%NS%mat-sys-primary));
  border-color: transparent;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  color: var(--%NS%mat-pseudo-checkbox-full-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled {
  background-color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked.mat-pseudo-checkbox-disabled::after, .mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate.mat-pseudo-checkbox-disabled::after {
  color: var(--%NS%mat-pseudo-checkbox-full-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}

.mat-pseudo-checkbox {
  width: 18px;
  height: 18px;
}

.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-checked::after {
  width: 14px;
  height: 6px;
  transform-origin: center;
  top: -4.2426406871px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-minimal.mat-pseudo-checkbox-indeterminate::after {
  top: 8px;
  width: 16px;
}

.mat-pseudo-checkbox-full.mat-pseudo-checkbox-checked::after {
  width: 10px;
  height: 4px;
  transform-origin: center;
  top: -2.8284271247px;
  left: 0;
  bottom: 0;
  right: 0;
  margin: auto;
}
.mat-pseudo-checkbox-full.mat-pseudo-checkbox-indeterminate::after {
  top: 6px;
  width: 12px;
}
`],encapsulation:2})}return i})();var cn=[`button`];var hn=[`*`];function un(i,a){if(i&1&&(Vs(0,`div`,2),Ym(1,`mat-pseudo-checkbox`,6),Nd()),i&2){let e=MS();Cr(),qm(`disabled`,e.disabled)}}var St=new v(`MAT_BUTTON_TOGGLE_DEFAULT_OPTIONS`,{providedIn:`root`,factory:()=>({hideSingleSelectionIndicator:!1,hideMultipleSelectionIndicator:!1,disabledInteractive:!1})});var It=new v(`MatButtonToggleGroup`);var pn={provide:Te,useExisting:io(()=>mn),multi:!0};var De=class{source;value;constructor(a,e){this.source=a,this.value=e}};var mn=(()=>{class i{_changeDetector=p(TI);_dir=p(vu,{optional:!0});_multiple=!1;_disabled=!1;_disabledInteractive=!1;_selectionModel;_rawValue;_controlValueAccessorChangeFn=()=>{};_onTouched=()=>{};_buttonToggles;appearance;get name(){return this._name}set name(e){this._name=e,this._markButtonsForCheck()}_name=p(ei$1).getId(`mat-button-toggle-group-`);vertical=!1;get value(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e.map(t=>t.value):e[0]?e[0].value:void 0}set value(e){this._setSelectionByValue(e),this.valueChange.emit(this.value)}valueChange=new ue;get selected(){let e=this._selectionModel?this._selectionModel.selected:[];return this.multiple?e:e[0]||null}get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._markButtonsForCheck()}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._markButtonsForCheck()}get disabledInteractive(){return this._disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e,this._markButtonsForCheck()}get dir(){return this._dir&&this._dir.value===`rtl`?`rtl`:`ltr`}change=new ue;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._markButtonsForCheck()}_hideSingleSelectionIndicator;get hideMultipleSelectionIndicator(){return this._hideMultipleSelectionIndicator}set hideMultipleSelectionIndicator(e){this._hideMultipleSelectionIndicator=e,this._markButtonsForCheck()}_hideMultipleSelectionIndicator;constructor(){let e=p(St,{optional:!0});this.appearance=e&&e.appearance?e.appearance:`standard`,this._hideSingleSelectionIndicator=e?.hideSingleSelectionIndicator??!1,this._hideMultipleSelectionIndicator=e?.hideMultipleSelectionIndicator??!1}ngOnInit(){this._selectionModel=new me(this.multiple,void 0,!1)}ngAfterContentInit(){this._selectionModel.select(...this._buttonToggles.filter(e=>e.checked)),this.multiple||this._initializeTabIndex()}writeValue(e){this.value=e,this._changeDetector.markForCheck()}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_keydown(e){if(this.multiple||this.disabled||uv(e))return;let n=e.target.id,o=this._buttonToggles.toArray().findIndex(c=>c.buttonId===n),r=null;switch(e.keyCode){case 32:case 13:r=this._buttonToggles.get(o)||null;break;case 38:r=this._getNextButton(o,-1);break;case 37:r=this._getNextButton(o,this.dir===`ltr`?-1:1);break;case 40:r=this._getNextButton(o,1);break;case 39:r=this._getNextButton(o,this.dir===`ltr`?1:-1);break;default:return}r&&(e.preventDefault(),r._onButtonClick(),r.focus())}_emitChangeEvent(e){let t=new De(e,this.value);this._rawValue=t.value,this._controlValueAccessorChangeFn(t.value),this.change.emit(t)}_syncButtonToggle(e,t,n=!1,o=!1){!this.multiple&&this.selected&&!e.checked&&(this.selected.checked=!1),this._selectionModel?t?this._selectionModel.select(e):this._selectionModel.deselect(e):o=!0,o?Promise.resolve().then(()=>this._updateModelValue(e,n)):this._updateModelValue(e,n)}_isSelected(e){return this._selectionModel&&this._selectionModel.isSelected(e)}_isPrechecked(e){return typeof this._rawValue>`u`?!1:this.multiple&&Array.isArray(this._rawValue)?this._rawValue.some(t=>e.value!=null&&t===e.value):e.value===this._rawValue}_initializeTabIndex(){if(this._buttonToggles.forEach(e=>{e.tabIndex=-1}),this.selected)this.selected.tabIndex=0;else for(let e=0;e<this._buttonToggles.length;e++){let t=this._buttonToggles.get(e);if(!t.disabled){t.tabIndex=0;break}}}_getNextButton(e,t){let n=this._buttonToggles;for(let o=1;o<=n.length;o++){let r=(e+t*o+n.length)%n.length,c=n.get(r);if(c&&!c.disabled)return c}return null}_setSelectionByValue(e){if(this._rawValue=e,!this._buttonToggles)return;let t=this._buttonToggles.toArray();if(this.multiple&&e?(this._clearSelection(),e.forEach(n=>this._selectValue(n,t))):(this._clearSelection(),this._selectValue(e,t)),!this.multiple&&t.every(n=>n.tabIndex===-1)){for(let n of t)if(!n.disabled){n.tabIndex=0;break}}}_clearSelection(){this._selectionModel.clear(),this._buttonToggles.forEach(e=>{e.checked=!1,this.multiple||(e.tabIndex=-1)})}_selectValue(e,t){for(let n of t)if(n.value===e){n.checked=!0,this._selectionModel.select(n),this.multiple||(n.tabIndex=0);break}}_updateModelValue(e,t){t&&this._emitChangeEvent(e),this.valueChange.emit(this.value)}_markButtonsForCheck(){this._buttonToggles?.forEach(e=>e._markForCheck())}static ɵfac=function(t){return new(t||i)};static ɵdir=Ee({type:i,selectors:[[`mat-button-toggle-group`]],contentQueries:function(t,n,o){if(t&1&&eg(o,At,5),t&2){let r;tg(r=ng())&&(n._buttonToggles=r)}},hostAttrs:[1,`mat-button-toggle-group`],hostVars:6,hostBindings:function(t,n){t&1&&Qm(`keydown`,function(r){return n._keydown(r)}),t&2&&(zn$1(`role`,n.multiple?`group`:`radiogroup`)(`aria-disabled`,n.disabled),qe$1(`mat-button-toggle-vertical`,n.vertical)(`mat-button-toggle-group-appearance-standard`,n.appearance===`standard`))},inputs:{appearance:`appearance`,name:`name`,vertical:[2,`vertical`,`vertical`,xe],value:`value`,multiple:[2,`multiple`,`multiple`,xe],disabled:[2,`disabled`,`disabled`,xe],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,xe],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,xe],hideMultipleSelectionIndicator:[2,`hideMultipleSelectionIndicator`,`hideMultipleSelectionIndicator`,xe]},outputs:{valueChange:`valueChange`,change:`change`},exportAs:[`matButtonToggleGroup`],features:[Od([pn,{provide:It,useExisting:i}])]})}return i})();var At=(()=>{class i{_changeDetectorRef=p(TI);_elementRef=p(Z);_focusMonitor=p(ou);_idGenerator=p(ei$1);_animationDisabled=kr();_checked=!1;ariaLabel;ariaLabelledby=null;_buttonElement;buttonToggleGroup;get buttonId(){return`${this.id}-button`}id;name;value;get tabIndex(){return this._tabIndex()}set tabIndex(e){this._tabIndex.set(e)}_tabIndex;disableRipple=!1;get appearance(){return this.buttonToggleGroup?this.buttonToggleGroup.appearance:this._appearance}set appearance(e){this._appearance=e}_appearance;get checked(){return this.buttonToggleGroup?this.buttonToggleGroup._isSelected(this):this._checked}set checked(e){e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&this.buttonToggleGroup._syncButtonToggle(this,this._checked),this._changeDetectorRef.markForCheck())}get disabled(){return this._disabled||this.buttonToggleGroup&&this.buttonToggleGroup.disabled}set disabled(e){this._disabled=e}_disabled=!1;get disabledInteractive(){return this._disabledInteractive||this.buttonToggleGroup!==null&&this.buttonToggleGroup.disabledInteractive}set disabledInteractive(e){this._disabledInteractive=e}_disabledInteractive;change=new ue;constructor(){p(st).load(Iv);let e=p(It,{optional:!0}),t=p(new Qs(`tabindex`),{optional:!0})||``,n=p(St,{optional:!0});this._tabIndex=mt(parseInt(t)||0),this.buttonToggleGroup=e,this._appearance=n&&n.appearance?n.appearance:`standard`,this._disabledInteractive=n?.disabledInteractive??!1}ngOnInit(){let e=this.buttonToggleGroup;this.id=this.id||this._idGenerator.getId(`mat-button-toggle-`),e&&(e._isPrechecked(this)?this.checked=!0:e._isSelected(this)!==this._checked&&e._syncButtonToggle(this,this._checked))}ngAfterViewInit(){this._animationDisabled||this._elementRef.nativeElement.classList.add(`mat-button-toggle-animations-enabled`),this._focusMonitor.monitor(this._elementRef,!0)}ngOnDestroy(){let e=this.buttonToggleGroup;this._focusMonitor.stopMonitoring(this._elementRef),e&&e._isSelected(this)&&e._syncButtonToggle(this,!1,!1,!0)}focus(e){this._buttonElement.nativeElement.focus(e)}_onButtonClick(){if(this.disabled)return;let e=this.isSingleSelector()?!0:!this._checked;if(e!==this._checked&&(this._checked=e,this.buttonToggleGroup&&(this.buttonToggleGroup._syncButtonToggle(this,this._checked,!0),this.buttonToggleGroup._onTouched())),this.isSingleSelector()){let t=this.buttonToggleGroup._buttonToggles.find(n=>n.tabIndex===0);t&&(t.tabIndex=-1),this.tabIndex=0}this.change.emit(new De(this,this.value))}_markForCheck(){this._changeDetectorRef.markForCheck()}_getButtonName(){return this.isSingleSelector()?this.buttonToggleGroup.name:this.name||null}isSingleSelector(){return this.buttonToggleGroup&&!this.buttonToggleGroup.multiple}static ɵfac=function(t){return new(t||i)};static ɵcmp=me$1({type:i,selectors:[[`mat-button-toggle`]],viewQuery:function(t,n){if(t&1&&xd(cn,5),t&2){let o;tg(o=ng())&&(n._buttonElement=o.first)}},hostAttrs:[`role`,`presentation`,1,`mat-button-toggle`],hostVars:14,hostBindings:function(t,n){t&1&&Qm(`focus`,function(){return n.focus()}),t&2&&(zn$1(`aria-label`,null)(`aria-labelledby`,null)(`id`,n.id)(`name`,null),qe$1(`mat-button-toggle-standalone`,!n.buttonToggleGroup)(`mat-button-toggle-checked`,n.checked)(`mat-button-toggle-disabled`,n.disabled)(`mat-button-toggle-disabled-interactive`,n.disabledInteractive)(`mat-button-toggle-appearance-standard`,n.appearance===`standard`))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],id:`id`,name:`name`,value:`value`,tabIndex:`tabIndex`,disableRipple:[2,`disableRipple`,`disableRipple`,xe],appearance:`appearance`,checked:[2,`checked`,`checked`,xe],disabled:[2,`disabled`,`disabled`,xe],disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,xe]},outputs:{change:`change`},exportAs:[`matButtonToggle`],ngContentSelectors:hn,decls:7,vars:13,consts:[[`button`,``],[`type`,`button`,1,`mat-button-toggle-button`,`mat-focus-indicator`,3,`click`,`id`,`disabled`],[1,`mat-button-toggle-checkbox-wrapper`],[1,`mat-button-toggle-label-content`],[1,`mat-button-toggle-focus-overlay`],[`matRipple`,``,1,`mat-button-toggle-ripple`,3,`matRippleTrigger`,`matRippleDisabled`],[`state`,`checked`,`aria-hidden`,`true`,`appearance`,`minimal`,3,`disabled`]],template:function(t,n){if(t&1&&(Xt$1(),Vs(0,`button`,1,0),Qm(`click`,function(){return n._onButtonClick()}),Fo(2,un,2,1,`div`,2),Vs(3,`span`,3),Fe(4),Nd()(),Ym(5,`span`,4)(6,`span`,5)),t&2){let o=OS(1);qm(`id`,n.buttonId)(`disabled`,n.disabled&&!n.disabledInteractive||null),zn$1(`role`,n.isSingleSelector()?`radio`:`button`)(`tabindex`,n.disabled&&!n.disabledInteractive?-1:n.tabIndex)(`aria-pressed`,n.isSingleSelector()?null:n.checked)(`aria-checked`,n.isSingleSelector()?n.checked:null)(`name`,n._getButtonName())(`aria-label`,n.ariaLabel)(`aria-labelledby`,n.ariaLabelledby)(`aria-disabled`,n.disabled&&n.disabledInteractive?`true`:null),Cr(2),jo(n.buttonToggleGroup&&(!n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideSingleSelectionIndicator||n.buttonToggleGroup.multiple&&!n.buttonToggleGroup.hideMultipleSelectionIndicator)?2:-1),Cr(4),qm(`matRippleTrigger`,o)(`matRippleDisabled`,n.disableRipple||n.disabled)}},dependencies:[QU,Ct],styles:[`.mat-button-toggle-standalone,
.mat-button-toggle-group {
  position: relative;
  display: inline-flex;
  flex-direction: row;
  white-space: nowrap;
  overflow: hidden;
  -webkit-tap-highlight-color: transparent;
  border-radius: var(--%NS%mat-button-toggle-legacy-shape);
  transform: translateZ(0);
}
.mat-button-toggle-standalone:not([class*=mat-elevation-z]),
.mat-button-toggle-group:not([class*=mat-elevation-z]) {
  box-shadow: 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12);
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone,
  .mat-button-toggle-group {
    outline: solid 1px;
  }
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
.mat-button-toggle-group-appearance-standard {
  border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard .mat-pseudo-checkbox,
.mat-button-toggle-group-appearance-standard .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-button-toggle-standalone.mat-button-toggle-appearance-standard:not([class*=mat-elevation-z]),
.mat-button-toggle-group-appearance-standard:not([class*=mat-elevation-z]) {
  box-shadow: none;
}
@media (forced-colors: active) {
  .mat-button-toggle-standalone.mat-button-toggle-appearance-standard,
  .mat-button-toggle-group-appearance-standard {
    outline: 0;
  }
}

.mat-button-toggle-vertical {
  flex-direction: column;
}
.mat-button-toggle-vertical .mat-button-toggle-label-content {
  display: block;
}

.mat-button-toggle {
  white-space: nowrap;
  position: relative;
  color: var(--%NS%mat-button-toggle-legacy-text-color);
  font-family: var(--%NS%mat-button-toggle-legacy-label-text-font);
  font-size: var(--%NS%mat-button-toggle-legacy-label-text-size);
  line-height: var(--%NS%mat-button-toggle-legacy-label-text-line-height);
  font-weight: var(--%NS%mat-button-toggle-legacy-label-text-weight);
  letter-spacing: var(--%NS%mat-button-toggle-legacy-label-text-tracking);
  --%NS%mat-pseudo-checkbox-minimal-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
}
.mat-button-toggle.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-legacy-focus-state-layer-opacity);
}
.mat-button-toggle .mat-icon svg {
  vertical-align: top;
}

.mat-button-toggle-checkbox-wrapper {
  display: inline-block;
  justify-content: flex-start;
  align-items: center;
  width: 0;
  height: 18px;
  line-height: 18px;
  overflow: hidden;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 16px;
  transform: translate3d(0, -50%, 0);
}
[dir=rtl] .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 16px;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: 12px;
}
[dir=rtl] .mat-button-toggle-appearance-standard .mat-button-toggle-checkbox-wrapper {
  left: auto;
  right: 12px;
}
.mat-button-toggle-checked .mat-button-toggle-checkbox-wrapper {
  width: 18px;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-checkbox-wrapper {
  transition: width 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-checkbox-wrapper {
  transition: none;
}

.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-legacy-selected-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-selected-state-background-color);
}

.mat-button-toggle-disabled {
  pointer-events: none;
  color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-state-background-color);
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-legacy-disabled-state-text-color);
}
.mat-button-toggle-disabled.mat-button-toggle-checked {
  background-color: var(--%NS%mat-button-toggle-legacy-disabled-selected-state-background-color);
}

.mat-button-toggle-disabled-interactive {
  pointer-events: auto;
}

.mat-button-toggle-appearance-standard {
  color: var(--%NS%mat-button-toggle-text-color, var(--%NS%mat-sys-on-surface));
  background-color: var(--%NS%mat-button-toggle-background-color, transparent);
  font-family: var(--%NS%mat-button-toggle-label-text-font, var(--%NS%mat-sys-label-large-font));
  font-size: var(--%NS%mat-button-toggle-label-text-size, var(--%NS%mat-sys-label-large-size));
  line-height: var(--%NS%mat-button-toggle-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-weight: var(--%NS%mat-button-toggle-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-button-toggle-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
[dir=rtl] .mat-button-toggle-group-appearance-standard .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle-appearance-standard + .mat-button-toggle-appearance-standard {
  border-left: none;
  border-right: none;
  border-top: solid 1px var(--%NS%mat-button-toggle-divider-color, var(--%NS%mat-sys-outline));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-selected-state-text-color, var(--%NS%mat-sys-on-secondary-container));
  background-color: var(--%NS%mat-button-toggle-selected-state-background-color, var(--%NS%mat-sys-secondary-container));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled {
  color: var(--%NS%mat-button-toggle-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-state-background-color, transparent);
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled .mat-pseudo-checkbox {
  --%NS%mat-pseudo-checkbox-minimal-disabled-selected-checkmark-color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-button-toggle-appearance-standard.mat-button-toggle-disabled.mat-button-toggle-checked {
  color: var(--%NS%mat-button-toggle-disabled-selected-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  background-color: var(--%NS%mat-button-toggle-disabled-selected-state-background-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
  background-color: var(--%NS%mat-button-toggle-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-button-toggle-appearance-standard.cdk-keyboard-focused .mat-button-toggle-focus-overlay {
  opacity: var(--%NS%mat-button-toggle-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
@media (hover: none) {
  .mat-button-toggle-appearance-standard:hover .mat-button-toggle-focus-overlay {
    display: none;
  }
}

.mat-button-toggle-label-content {
  -webkit-user-select: none;
  user-select: none;
  display: inline-block;
  padding: 0 16px;
  line-height: var(--%NS%mat-button-toggle-legacy-height);
  position: relative;
}
.mat-button-toggle-appearance-standard .mat-button-toggle-label-content {
  padding: 0 12px;
  line-height: var(--%NS%mat-button-toggle-height, 40px);
}

.mat-button-toggle-label-content > * {
  vertical-align: middle;
}

.mat-button-toggle-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: inherit;
  pointer-events: none;
  opacity: 0;
  background-color: var(--%NS%mat-button-toggle-legacy-state-layer-color);
}

@media (forced-colors: active) {
  .mat-button-toggle-checked .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
    opacity: 0.5;
    height: 0;
  }
  .mat-button-toggle-checked:hover .mat-button-toggle-focus-overlay {
    opacity: 0.6;
  }
  .mat-button-toggle-checked.mat-button-toggle-appearance-standard .mat-button-toggle-focus-overlay {
    border-bottom: solid 500px;
  }
}
.mat-button-toggle .mat-button-toggle-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
}

.mat-button-toggle-button {
  border: 0;
  background: none;
  color: inherit;
  padding: 0;
  margin: 0;
  font: inherit;
  outline: none;
  width: 100%;
  cursor: pointer;
}
.mat-button-toggle-animations-enabled .mat-button-toggle-button {
  transition: padding 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-button-toggle-vertical .mat-button-toggle-button {
  transition: none;
}
.mat-button-toggle-disabled .mat-button-toggle-button {
  cursor: default;
}
.mat-button-toggle-button::-moz-focus-inner {
  border: 0;
}
.mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 30px;
}
[dir=rtl] .mat-button-toggle-checked .mat-button-toggle-button:has(.mat-button-toggle-checkbox-wrapper) {
  padding-left: 0;
  padding-right: 30px;
}

.mat-button-toggle-standalone.mat-button-toggle-appearance-standard {
  --%NS%mat-focus-indicator-border-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard:not(.mat-button-toggle-vertical) .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}

.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:last-of-type .mat-button-toggle-button::before {
  border-bottom-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-bottom-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
.mat-button-toggle-group-appearance-standard.mat-button-toggle-vertical .mat-button-toggle:first-of-type .mat-button-toggle-button::before {
  border-top-right-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
  border-top-left-radius: var(--%NS%mat-button-toggle-shape, var(--%NS%mat-sys-corner-extra-large));
}
`],encapsulation:2})}return i})();var ia=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Q({type:i});static ɵinj=q({imports:[Tv,At,Ye]})}return i})();var Tt=(()=>{class i{isErrorState(e,t){return!!(e&&e.invalid&&(e.touched||t&&t.submitted))}isSignalErrorState(e){if(!e)return!1;let t=e().invalid(),n=e().touched();return t&&n}static ɵfac=function(t){return new(t||i)};static ɵprov=N({token:i,factory:i.ɵfac})}return i})();var Rt=[`*`,[[`mat-chip-avatar`],[``,`matChipAvatar`,``]],[[`mat-chip-trailing-icon`],[``,`matChipRemove`,``],[``,`matChipTrailingIcon`,``]]];var Pt=[`*`,`mat-chip-avatar, [matChipAvatar]`,`mat-chip-trailing-icon,[matChipRemove],[matChipTrailingIcon]`];function gn(i,a){i&1&&(Vs(0,`span`,3),Fe(1,1),Nd())}function fn(i,a){i&1&&(Vs(0,`span`,6),Fe(1,2),Nd())}function yn(i,a){i&1&&(Vs(0,`span`,3),Fe(1,1),Vs(2,`span`,7),sh(),Vs(3,`svg`,8),Ym(4,`path`,9),Nd()()())}function bn(i,a){i&1&&(Vs(0,`span`,6),Fe(1,2),Nd())}var vn=`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`;var Ot=[`*`];var wn=`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`;var Be=new v(`mat-chips-default-options`,{providedIn:`root`,factory:()=>({separatorKeyCodes:[13]})});var Dt=new v(`MatChipAvatar`);var Mt=new v(`MatChipTrailingIcon`);var Nt=new v(`MatChipEdit`);var Et=new v(`MatChipRemove`);var qe=new v(`MatChip`);var Ft=(()=>{class i{_elementRef=p(Z);_parentChip=p(qe);_isPrimary=!0;_isLeading=!1;get disabled(){return this._disabled||this._parentChip?.disabled||!1}set disabled(e){this._disabled=e}_disabled=!1;tabIndex=-1;_allowFocusWhenDisabled=!1;_getDisabledAttribute(){return this.disabled&&!this._allowFocusWhenDisabled?``:null}constructor(){p(st).load(Iv),this._elementRef.nativeElement.nodeName===`BUTTON`&&this._elementRef.nativeElement.setAttribute(`type`,`button`)}focus(){this._elementRef.nativeElement.focus()}static ɵfac=function(t){return new(t||i)};static ɵdir=Ee({type:i,selectors:[[``,`matChipContent`,``]],hostAttrs:[1,`mat-mdc-chip-action`,`mdc-evolution-chip__action`,`mdc-evolution-chip__action--presentational`],hostVars:8,hostBindings:function(t,n){t&2&&(zn$1(`disabled`,n._getDisabledAttribute())(`aria-disabled`,n.disabled),qe$1(`mdc-evolution-chip__action--primary`,n._isPrimary)(`mdc-evolution-chip__action--secondary`,!n._isPrimary)(`mdc-evolution-chip__action--trailing`,!n._isPrimary&&!n._isLeading))},inputs:{disabled:[2,`disabled`,`disabled`,xe],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?-1:Sg(e)],_allowFocusWhenDisabled:`_allowFocusWhenDisabled`}})}return i})();var Vt=(()=>{class i extends Ft{_getTabindex(){return this.disabled&&!this._allowFocusWhenDisabled?null:this.tabIndex.toString()}_handleClick(e){!this.disabled&&this._isPrimary&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}_handleKeydown(e){(e.keyCode===13||e.keyCode===32)&&!this.disabled&&this._isPrimary&&!this._parentChip._isEditing&&(e.preventDefault(),this._parentChip._handlePrimaryActionInteraction())}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ao(i)))(n||i)}})();static ɵdir=Ee({type:i,selectors:[[``,`matChipAction`,``]],hostVars:3,hostBindings:function(t,n){t&1&&Qm(`click`,function(r){return n._handleClick(r)})(`keydown`,function(r){return n._handleKeydown(r)}),t&2&&(zn$1(`tabindex`,n._getTabindex()),qe$1(`mdc-evolution-chip__action--presentational`,!1))},features:[St$1]})}return i})();var Ve=(()=>{class i{_changeDetectorRef=p(TI);_elementRef=p(Z);_tagName=p(eV);_ngZone=p(O);_focusMonitor=p(ou);_globalRippleOptions=p(hu,{optional:!0});_document=p(C);_onFocus=new M;_onBlur=new M;_isBasicChip=!1;role=null;_hasFocusInternal=!1;_pendingFocus=!1;_actionChanges;_animationsDisabled=kr();_allLeadingIcons;_allTrailingIcons;_allEditIcons;_allRemoveIcons;_hasFocus(){return this._hasFocusInternal}id=p(ei$1).getId(`mat-mdc-chip-`);ariaLabel=null;ariaDescription=null;_chipListDisabled=!1;_hadFocusOnRemove=!1;_textElement;get value(){return this._value!==void 0?this._value:this._textElement.textContent.trim()}set value(e){this._value=e}_value;color;removable=!0;highlighted=!1;disableRipple=!1;get disabled(){return this._disabled||this._chipListDisabled}set disabled(e){this._disabled=e}_disabled=!1;removed=new ue;destroyed=new ue;basicChipAttrName=`mat-basic-chip`;leadingIcon;editIcon;trailingIcon;removeIcon;primaryAction;_rippleLoader=p(Sv);_injector=p(W);constructor(){let e=p(st);e.load(Iv),e.load(nv),this._monitorFocus(),this._rippleLoader?.configureRipple(this._elementRef.nativeElement,{className:`mat-mdc-chip-ripple`,disabled:this._isRippleDisabled()})}ngOnInit(){this._isBasicChip=this._elementRef.nativeElement.hasAttribute(this.basicChipAttrName)||this._tagName.toLowerCase()===this.basicChipAttrName}ngAfterViewInit(){this._textElement=this._elementRef.nativeElement.querySelector(`.mat-mdc-chip-action-label`),this._pendingFocus&&(this._pendingFocus=!1,this.focus())}ngAfterContentInit(){this._actionChanges=By(this._allLeadingIcons.changes,this._allTrailingIcons.changes,this._allEditIcons.changes,this._allRemoveIcons.changes).subscribe(()=>this._changeDetectorRef.markForCheck())}ngDoCheck(){this._rippleLoader.setDisabled(this._elementRef.nativeElement,this._isRippleDisabled())}ngOnDestroy(){this.destroyed.emit({chip:this}),this.destroyed.complete(),this._focusMonitor.stopMonitoring(this._elementRef),this._rippleLoader?.destroyRipple(this._elementRef.nativeElement),this._actionChanges?.unsubscribe()}remove(){this.removable&&(this._hadFocusOnRemove=this._hasFocus(),this.removed.emit({chip:this}))}_isRippleDisabled(){return this.disabled||this.disableRipple||this._animationsDisabled||this._isBasicChip||!this._hasInteractiveActions()||!!this._globalRippleOptions?.disabled}_hasTrailingIcon(){return!!(this.trailingIcon||this.removeIcon)}_handleKeydown(e){(e.keyCode===8&&!e.repeat||e.keyCode===46)&&(e.preventDefault(),this.remove())}focus(){this.disabled||(this.primaryAction?this.primaryAction.focus():this._pendingFocus=!0)}_getSourceAction(e){return this._getActions().find(t=>{let n=t._elementRef.nativeElement;return n===e||n.contains(e)})}_getActions(){let e=[];return this.editIcon&&e.push(this.editIcon),this.primaryAction&&e.push(this.primaryAction),this.removeIcon&&e.push(this.removeIcon),e}_handlePrimaryActionInteraction(){}_hasInteractiveActions(){return this._getActions().length>0}_edit(e){}_monitorFocus(){this._focusMonitor.monitor(this._elementRef,!0).subscribe(e=>{let t=e!==null;t!==this._hasFocusInternal&&(this._hasFocusInternal=t,t?this._onFocus.next({chip:this}):(this._changeDetectorRef.markForCheck(),setTimeout(()=>this._ngZone.run(()=>this._onBlur.next({chip:this})))))})}static ɵfac=function(t){return new(t||i)};static ɵcmp=me$1({type:i,selectors:[[`mat-basic-chip`],[``,`mat-basic-chip`,``],[`mat-chip`],[``,`mat-chip`,``]],contentQueries:function(t,n,o){if(t&1&&eg(o,Dt,5)(o,Nt,5)(o,Mt,5)(o,Et,5)(o,Dt,5)(o,Mt,5)(o,Nt,5)(o,Et,5),t&2){let r;tg(r=ng())&&(n.leadingIcon=r.first),tg(r=ng())&&(n.editIcon=r.first),tg(r=ng())&&(n.trailingIcon=r.first),tg(r=ng())&&(n.removeIcon=r.first),tg(r=ng())&&(n._allLeadingIcons=r),tg(r=ng())&&(n._allTrailingIcons=r),tg(r=ng())&&(n._allEditIcons=r),tg(r=ng())&&(n._allRemoveIcons=r)}},viewQuery:function(t,n){if(t&1&&xd(Vt,5),t&2){let o;tg(o=ng())&&(n.primaryAction=o.first)}},hostAttrs:[1,`mat-mdc-chip`],hostVars:31,hostBindings:function(t,n){t&1&&Qm(`keydown`,function(r){return n._handleKeydown(r)}),t&2&&(Km(`id`,n.id),zn$1(`role`,n.role)(`aria-label`,n.ariaLabel),Bo(`mat-`+(n.color||`primary`)),qe$1(`mdc-evolution-chip`,!n._isBasicChip)(`mdc-evolution-chip--disabled`,n.disabled)(`mdc-evolution-chip--with-trailing-action`,n._hasTrailingIcon())(`mdc-evolution-chip--with-primary-graphic`,n.leadingIcon)(`mdc-evolution-chip--with-primary-icon`,n.leadingIcon)(`mdc-evolution-chip--with-avatar`,n.leadingIcon)(`mat-mdc-chip-with-avatar`,n.leadingIcon)(`mat-mdc-chip-highlighted`,n.highlighted)(`mat-mdc-chip-disabled`,n.disabled)(`mat-mdc-basic-chip`,n._isBasicChip)(`mat-mdc-standard-chip`,!n._isBasicChip)(`mat-mdc-chip-with-trailing-icon`,n._hasTrailingIcon())(`_mat-animation-noopable`,n._animationsDisabled))},inputs:{role:`role`,id:`id`,ariaLabel:[0,`aria-label`,`ariaLabel`],ariaDescription:[0,`aria-description`,`ariaDescription`],value:`value`,color:`color`,removable:[2,`removable`,`removable`,xe],highlighted:[2,`highlighted`,`highlighted`,xe],disableRipple:[2,`disableRipple`,`disableRipple`,xe],disabled:[2,`disabled`,`disabled`,xe]},outputs:{removed:`removed`,destroyed:`destroyed`},exportAs:[`matChip`],features:[Od([{provide:qe,useExisting:i}])],ngContentSelectors:Pt,decls:8,vars:2,consts:[[1,`mat-mdc-chip-focus-overlay`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipContent`,``],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`]],template:function(t,n){t&1&&(Xt$1(Rt),Ym(0,`span`,0),Vs(1,`span`,1)(2,`span`,2),Fo(3,gn,2,0,`span`,3),Vs(4,`span`,4),Fe(5),Ym(6,`span`,5),Nd()()(),Fo(7,fn,2,0,`span`,6)),t&2&&(Cr(3),jo(n.leadingIcon?3:-1),Cr(4),jo(n._hasTrailingIcon()?7:-1))},dependencies:[Ft],styles:[`.mdc-evolution-chip,
.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  display: inline-flex;
  align-items: center;
}

.mdc-evolution-chip {
  position: relative;
  max-width: 100%;
}

.mdc-evolution-chip__cell,
.mdc-evolution-chip__action {
  height: 100%;
}

.mdc-evolution-chip__cell--primary {
  flex-basis: 100%;
  overflow-x: hidden;
}

.mdc-evolution-chip__cell--trailing {
  flex: 1 0 auto;
}

.mdc-evolution-chip__action {
  align-items: center;
  background: none;
  border: none;
  box-sizing: content-box;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  outline: none;
  padding: 0;
  text-decoration: none;
  color: inherit;
}

.mdc-evolution-chip__action--presentational {
  cursor: auto;
}

.mdc-evolution-chip--disabled,
.mdc-evolution-chip__action:disabled {
  pointer-events: none;
}
@media (forced-colors: active) {
  .mdc-evolution-chip--disabled,
  .mdc-evolution-chip__action:disabled {
    forced-color-adjust: none;
  }
}

.mdc-evolution-chip__action--primary {
  font: inherit;
  letter-spacing: inherit;
  white-space: inherit;
  overflow-x: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-outline-width, 1px);
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  box-sizing: border-box;
  content: "";
  height: 100%;
  left: 0;
  position: absolute;
  pointer-events: none;
  top: 0;
  width: 100%;
  z-index: 1;
  border-style: solid;
}
.mat-mdc-standard-chip .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-outline-color, var(--%NS%mat-sys-outline));
}
.mdc-evolution-chip__action--%NS%primary:not(.mdc-evolution-chip__action--presentational):not(.mdc-ripple-upgraded):focus::before {
  border-color: var(--%NS%mat-chip-focus-outline-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--%NS%primary::before {
  border-color: var(--%NS%mat-chip-disabled-outline-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__action--%NS%primary::before {
  border-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}
.mat-mdc-basic-chip .mdc-evolution-chip__action--primary {
  font: inherit;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 12px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__action--primary {
  padding-left: 12px;
  padding-right: 0;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--primary {
  padding-left: 0;
  padding-right: 0;
}

.mdc-evolution-chip__action--secondary {
  position: relative;
  overflow: visible;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-trailing-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__action--secondary {
  color: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__action--secondary, [dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__action--secondary {
  padding-left: 8px;
  padding-right: 8px;
}

.mdc-evolution-chip__text-label {
  -webkit-user-select: none;
  user-select: none;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.mat-mdc-standard-chip .mdc-evolution-chip__text-label {
  font-family: var(--%NS%mat-chip-label-text-font, var(--%NS%mat-sys-label-large-font));
  line-height: var(--%NS%mat-chip-label-text-line-height, var(--%NS%mat-sys-label-large-line-height));
  font-size: var(--%NS%mat-chip-label-text-size, var(--%NS%mat-sys-label-large-size));
  font-weight: var(--%NS%mat-chip-label-text-weight, var(--%NS%mat-sys-label-large-weight));
  letter-spacing: var(--%NS%mat-chip-label-text-tracking, var(--%NS%mat-sys-label-large-tracking));
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-label-text-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label, .mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__text-label {
  color: var(--%NS%mat-chip-disabled-label-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}

.mdc-evolution-chip__graphic {
  align-items: center;
  display: inline-flex;
  justify-content: center;
  overflow: hidden;
  pointer-events: none;
  position: relative;
  flex: 1 0 auto;
}
.mat-mdc-standard-chip .mdc-evolution-chip__graphic {
  width: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  height: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
  font-size: var(--%NS%mat-chip-with-avatar-avatar-size, 24px);
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__graphic {
  transition: width 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--%NS%selectable:not(.mdc-evolution-chip--selected):not(.mdc-evolution-chip--with-primary-icon) .mdc-evolution-chip__graphic {
  width: 0;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mat-mdc-standard-chip.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 6px;
  padding-right: 6px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 4px;
  padding-right: 8px;
}
[dir=rtl] .mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-trailing-action .mdc-evolution-chip__graphic {
  padding-left: 8px;
  padding-right: 4px;
}
.mdc-evolution-chip--with-avatar.mdc-evolution-chip--with-primary-graphic.mdc-evolution-chip--with-leading-action .mdc-evolution-chip__graphic {
  padding-left: 0;
}

.mdc-evolution-chip__checkmark {
  position: absolute;
  opacity: 0;
  top: 50%;
  left: 50%;
  height: 20px;
  width: 20px;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__checkmark {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark {
  transition: transform 150ms 0ms cubic-bezier(0.4, 0, 0.2, 1);
  transform: translate(-75%, -50%);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  transform: translate(-50%, -50%);
  opacity: 1;
}

.mdc-evolution-chip__checkmark-svg {
  display: block;
}

.mdc-evolution-chip__checkmark-path {
  stroke-width: 2px;
  stroke-dasharray: 29.7833385;
  stroke-dashoffset: 29.7833385;
  stroke: currentColor;
}
.mdc-evolution-chip--selecting .mdc-evolution-chip__checkmark-path {
  transition: stroke-dashoffset 150ms 45ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark-path {
  stroke-dashoffset: 0;
}
@media (forced-colors: active) {
  .mdc-evolution-chip__checkmark-path {
    stroke: CanvasText !important;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--trailing {
  height: 18px;
  width: 18px;
  font-size: 18px;
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove {
  opacity: calc(var(--%NS%mat-chip-trailing-action-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}
.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing.mat-mdc-chip-remove:focus {
  opacity: calc(var(--%NS%mat-chip-trailing-action-focus-opacity, 1) * var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38));
}

.mat-mdc-standard-chip {
  border-radius: var(--%NS%mat-chip-container-shape-radius, 8px);
  height: var(--%NS%mat-chip-container-height, 32px);
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-container-color, transparent);
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-elevated-disabled-container-color);
}
.mat-mdc-standard-chip.mdc-evolution-chip--%NS%selected:not(.mdc-evolution-chip--disabled) {
  background-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled {
  background-color: var(--%NS%mat-chip-flat-disabled-selected-container-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 12%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-standard-chip {
    outline: solid 1px;
  }
}

.mat-mdc-standard-chip .mdc-evolution-chip__icon--primary {
  border-radius: var(--%NS%mat-chip-with-avatar-avatar-shape-radius, 24px);
  width: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  height: var(--%NS%mat-chip-with-icon-icon-size, 18px);
  font-size: var(--%NS%mat-chip-with-icon-icon-size, 18px);
}
.mdc-evolution-chip--selected .mdc-evolution-chip__icon--primary {
  opacity: 0;
}
.mat-mdc-standard-chip:not(.mdc-evolution-chip--disabled) .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-icon-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-standard-chip.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--primary {
  color: var(--%NS%mat-chip-with-icon-disabled-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-highlighted {
  --%NS%mat-chip-with-icon-icon-color: var(--%NS%mat-chip-with-icon-selected-icon-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-elevated-container-color: var(--%NS%mat-chip-elevated-selected-container-color, var(--%NS%mat-sys-secondary-container));
  --%NS%mat-chip-label-text-color: var(--%NS%mat-chip-selected-label-text-color, var(--%NS%mat-sys-on-secondary-container));
  --%NS%mat-chip-outline-width: var(--%NS%mat-chip-flat-selected-outline-width, 0);
}

.mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-selected .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-chip:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-hover-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip-focus-overlay .mat-mdc-chip-selected:hover, .mat-mdc-chip-highlighted:hover .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-hover-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-focus-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
  opacity: var(--%NS%mat-chip-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}
.mat-mdc-chip-selected.cdk-focused .mat-mdc-chip-focus-overlay, .mat-mdc-chip-highlighted.cdk-focused .mat-mdc-chip-focus-overlay {
  background: var(--%NS%mat-chip-selected-focus-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
  opacity: var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
}

.mdc-evolution-chip--%NS%disabled:not(.mdc-evolution-chip--selected) .mat-mdc-chip-avatar {
  opacity: var(--%NS%mat-chip-with-avatar-disabled-avatar-opacity, 0.38);
}

.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  opacity: var(--%NS%mat-chip-with-trailing-icon-disabled-trailing-icon-opacity, 0.38);
}

.mdc-evolution-chip--disabled.mdc-evolution-chip--selected .mdc-evolution-chip__checkmark {
  opacity: var(--%NS%mat-chip-with-icon-disabled-icon-opacity, 0.38);
}

.mat-mdc-standard-chip.mdc-evolution-chip--disabled {
  opacity: var(--%NS%mat-chip-disabled-container-opacity, 1);
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-trailing-icon-color, var(--%NS%mat-sys-on-secondary-container));
}
.mat-mdc-standard-chip.mdc-evolution-chip--selected.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing, .mat-mdc-standard-chip.mat-mdc-chip-highlighted.mdc-evolution-chip--disabled .mdc-evolution-chip__icon--trailing {
  color: var(--%NS%mat-chip-selected-disabled-trailing-icon-color, var(--%NS%mat-sys-on-surface));
}

.mat-mdc-chip-edit, .mat-mdc-chip-remove {
  opacity: var(--%NS%mat-chip-trailing-action-opacity, 1);
}
.mat-mdc-chip-edit:focus, .mat-mdc-chip-remove:focus {
  opacity: var(--%NS%mat-chip-trailing-action-focus-opacity, 1);
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-trailing-action-state-layer-color, var(--%NS%mat-sys-on-surface-variant));
}
.mat-mdc-chip-edit:hover::after, .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}
.mat-mdc-chip-edit:focus::after, .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}

.mat-mdc-chip-selected .mat-mdc-chip-remove::after,
.mat-mdc-chip-highlighted .mat-mdc-chip-remove::after {
  background-color: var(--%NS%mat-chip-selected-trailing-action-state-layer-color, var(--%NS%mat-sys-on-secondary-container));
}

.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:focus::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:focus::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)));
}
.mat-mdc-chip.cdk-focused .mat-mdc-chip-edit:hover::after, .mat-mdc-chip.cdk-focused .mat-mdc-chip-remove:hover::after {
  opacity: calc(var(--%NS%mat-chip-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity)) + var(--%NS%mat-chip-trailing-action-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity)));
}

.mat-mdc-standard-chip {
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-standard-chip .mat-mdc-chip-graphic,
.mat-mdc-standard-chip .mat-mdc-chip-trailing-icon {
  box-sizing: content-box;
}
.mat-mdc-standard-chip._mat-animation-noopable,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__graphic,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark,
.mat-mdc-standard-chip._mat-animation-noopable .mdc-evolution-chip__checkmark-path {
  transition-duration: 1ms;
  animation-duration: 1ms;
}

.mat-mdc-chip-focus-overlay {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  opacity: 0;
  border-radius: inherit;
  transition: opacity 150ms linear;
}
._mat-animation-noopable .mat-mdc-chip-focus-overlay {
  transition: none;
}
.mat-mdc-basic-chip .mat-mdc-chip-focus-overlay {
  display: none;
}

.mat-mdc-chip .mat-ripple.mat-mdc-chip-ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  pointer-events: none;
  border-radius: inherit;
}

.mat-mdc-chip-avatar {
  text-align: center;
  line-height: 1;
  color: var(--%NS%mat-chip-with-icon-icon-color, currentColor);
}

.mat-mdc-chip {
  position: relative;
  z-index: 0;
}

.mat-mdc-chip-action-label {
  text-align: left;
  z-index: 1;
}
[dir=rtl] .mat-mdc-chip-action-label {
  text-align: right;
}
.mat-mdc-chip.mdc-evolution-chip--with-trailing-action .mat-mdc-chip-action-label {
  position: relative;
}
.mat-mdc-chip-action-label .mat-mdc-chip-primary-focus-indicator {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  pointer-events: none;
}
.mat-mdc-chip-action-label .mat-focus-indicator::before {
  margin: calc(calc(var(--%NS%mat-focus-indicator-border-width, 3px) + 2px) * -1);
}

.mat-mdc-chip-edit::before, .mat-mdc-chip-remove::before {
  margin: calc(var(--%NS%mat-focus-indicator-border-width, 3px) * -1);
  left: 8px;
  right: 8px;
}
.mat-mdc-chip-edit::after, .mat-mdc-chip-remove::after {
  content: "";
  display: block;
  opacity: 0;
  position: absolute;
  top: -3px;
  bottom: -3px;
  left: 5px;
  right: 5px;
  border-radius: 50%;
  box-sizing: border-box;
  padding: 12px;
  margin: -12px;
  background-clip: content-box;
}
.mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  width: 18px;
  height: 18px;
  font-size: 18px;
  box-sizing: content-box;
}

.mat-chip-edit-input {
  cursor: text;
  display: inline-block;
  color: inherit;
  outline: 0;
}

@media (forced-colors: active) {
  .mat-mdc-chip-selected:not(.mat-mdc-chip-multiple) {
    outline-width: 3px;
  }
}

.mat-mdc-chip-action:focus-visible .mat-focus-indicator::before {
  content: "";
}

.mdc-evolution-chip__icon, .mat-mdc-chip-edit .mat-icon, .mat-mdc-chip-remove .mat-icon {
  min-height: fit-content;
}

img.mdc-evolution-chip__icon {
  min-height: 0;
}
`],encapsulation:2})}return i})();var _n=(()=>{class i extends Ve{_defaultOptions=p(Be,{optional:!0});chipListSelectable=!0;_chipListMultiple=!1;_chipListHideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get selectable(){return this._selectable&&this.chipListSelectable}set selectable(e){this._selectable=e,this._changeDetectorRef.markForCheck()}_selectable=!0;get selected(){return this._selected}set selected(e){this._setSelectedState(e,!1,!0)}_selected=!1;get ariaSelected(){return this.selectable?this.selected.toString():null}basicChipAttrName=`mat-basic-chip-option`;selectionChange=new ue;ngOnInit(){super.ngOnInit(),this.role=`presentation`}select(){this._setSelectedState(!0,!1,!0)}deselect(){this._setSelectedState(!1,!1,!0)}selectViaInteraction(){this._setSelectedState(!0,!0,!0)}toggleSelected(e=!1){return this._setSelectedState(!this.selected,e,!0),this.selected}_handlePrimaryActionInteraction(){this.disabled||(this.focus(),this.selectable&&this.toggleSelected(!0))}_hasLeadingGraphic(){return this.leadingIcon?!0:!this._chipListHideSingleSelectionIndicator||this._chipListMultiple}_setSelectedState(e,t,n){e!==this.selected&&(this._selected=e,n&&this.selectionChange.emit({source:this,isUserInput:t,selected:this.selected}),this._changeDetectorRef.markForCheck())}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ao(i)))(n||i)}})();static ɵcmp=me$1({type:i,selectors:[[`mat-basic-chip-option`],[``,`mat-basic-chip-option`,``],[`mat-chip-option`],[``,`mat-chip-option`,``]],hostAttrs:[1,`mat-mdc-chip`,`mat-mdc-chip-option`],hostVars:37,hostBindings:function(t,n){t&2&&(Km(`id`,n.id),zn$1(`tabindex`,null)(`aria-label`,null)(`aria-description`,null)(`role`,n.role),qe$1(`mdc-evolution-chip`,!n._isBasicChip)(`mdc-evolution-chip--filter`,!n._isBasicChip)(`mdc-evolution-chip--selectable`,!n._isBasicChip)(`mat-mdc-chip-selected`,n.selected)(`mat-mdc-chip-multiple`,n._chipListMultiple)(`mat-mdc-chip-disabled`,n.disabled)(`mat-mdc-chip-with-avatar`,n.leadingIcon)(`mdc-evolution-chip--disabled`,n.disabled)(`mdc-evolution-chip--selected`,n.selected)(`mdc-evolution-chip--selecting`,!n._animationsDisabled)(`mdc-evolution-chip--with-trailing-action`,n._hasTrailingIcon())(`mdc-evolution-chip--with-primary-icon`,n.leadingIcon)(`mdc-evolution-chip--with-primary-graphic`,n._hasLeadingGraphic())(`mdc-evolution-chip--with-avatar`,n.leadingIcon)(`mat-mdc-chip-highlighted`,n.highlighted)(`mat-mdc-chip-with-trailing-icon`,n._hasTrailingIcon()))},inputs:{selectable:[2,`selectable`,`selectable`,xe],selected:[2,`selected`,`selected`,xe]},outputs:{selectionChange:`selectionChange`},features:[Od([{provide:Ve,useExisting:i},{provide:qe,useExisting:i}]),St$1],ngContentSelectors:Pt,decls:8,vars:6,consts:[[1,`mat-mdc-chip-focus-overlay`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--primary`],[`matChipAction`,``,`role`,`option`,3,`_allowFocusWhenDisabled`],[1,`mdc-evolution-chip__graphic`,`mat-mdc-chip-graphic`],[1,`mdc-evolution-chip__text-label`,`mat-mdc-chip-action-label`],[1,`mat-mdc-chip-primary-focus-indicator`,`mat-focus-indicator`],[`role`,`presentation`,1,`mdc-evolution-chip__cell`,`mdc-evolution-chip__cell--trailing`],[1,`mdc-evolution-chip__checkmark`],[`viewBox`,`-2 -3 30 30`,`focusable`,`false`,`aria-hidden`,`true`,1,`mdc-evolution-chip__checkmark-svg`],[`fill`,`none`,`stroke`,`currentColor`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-evolution-chip__checkmark-path`]],template:function(t,n){t&1&&(Xt$1(Rt),Ym(0,`span`,0),Vs(1,`span`,1)(2,`button`,2),Fo(3,yn,5,0,`span`,3),Vs(4,`span`,4),Fe(5),Ym(6,`span`,5),Nd()()(),Fo(7,bn,2,0,`span`,6)),t&2&&(Cr(2),qm(`_allowFocusWhenDisabled`,!0),zn$1(`aria-description`,n.ariaDescription)(`aria-label`,n.ariaLabel)(`aria-selected`,n.ariaSelected),Cr(),jo(n._hasLeadingGraphic()?3:-1),Cr(4),jo(n._hasTrailingIcon()?7:-1))},dependencies:[Vt],styles:[vn],encapsulation:2})}return i})();var kn=(()=>{class i{_elementRef=p(Z);_changeDetectorRef=p(TI);_dir=p(vu,{optional:!0});_lastDestroyedFocusedChipIndex=null;_keyManager;_destroyed=new M;_defaultRole=`presentation`;get chipFocusChanges(){return this._getChipStream(e=>e._onFocus)}get chipDestroyedChanges(){return this._getChipStream(e=>e.destroyed)}get chipRemovedChanges(){return this._getChipStream(e=>e.removed)}get disabled(){return this._disabled}set disabled(e){this._disabled=e,this._syncChipsState()}_disabled=!1;get empty(){return!this._chips||this._chips.length===0}get role(){return this._explicitRole?this._explicitRole:this.empty?null:this._defaultRole}tabIndex=0;set role(e){this._explicitRole=e}_explicitRole=null;get focused(){return this._hasFocusedChip()}_chips;_chipActions=new Bn$1;ngAfterViewInit(){this._setUpFocusManagement(),this._trackChipSetChanges(),this._trackDestroyedFocusedChip()}ngOnDestroy(){this._keyManager?.destroy(),this._chipActions.destroy(),this._destroyed.next(),this._destroyed.complete()}_hasFocusedChip(){return this._chips&&this._chips.some(e=>e._hasFocus())}_syncChipsState(){this._chips?.forEach(e=>{e._chipListDisabled=this._disabled,e._changeDetectorRef.markForCheck()})}focus(){}_handleKeydown(e){this._originatesFromChip(e)&&this._keyManager.onKeydown(e)}_isValidIndex(e){return e>=0&&e<this._chips.length}_allowFocusEscape(){let e=this._elementRef.nativeElement.tabIndex;e!==-1&&(this._elementRef.nativeElement.tabIndex=-1,setTimeout(()=>this._elementRef.nativeElement.tabIndex=e))}_getChipStream(e){return this._chips.changes.pipe(Bi(null),oc(()=>By(...this._chips.map(e))))}_originatesFromChip(e){let t=e.target;for(;t&&t!==this._elementRef.nativeElement;){if(t.classList.contains(`mat-mdc-chip`))return!0;t=t.parentElement}return!1}_setUpFocusManagement(){this._chips.changes.pipe(Bi(this._chips)).subscribe(e=>{let t=[];e.forEach(n=>n._getActions().forEach(o=>t.push(o))),this._chipActions.reset(t),this._chipActions.notifyOnChanges()}),this._keyManager=new au(this._chipActions).withVerticalOrientation().withHorizontalOrientation(this._dir?this._dir.value:`ltr`).withHomeAndEnd().skipPredicate(e=>this._skipPredicate(e)),this.chipFocusChanges.pipe(Lt$1(this._destroyed)).subscribe(({chip:e})=>{let t=e._getSourceAction(document.activeElement);t&&this._keyManager.updateActiveItem(t)}),this._dir?.change.pipe(Lt$1(this._destroyed)).subscribe(e=>this._keyManager.withHorizontalOrientation(e))}_skipPredicate(e){return e.disabled}_trackChipSetChanges(){this._chips.changes.pipe(Bi(null),Lt$1(this._destroyed)).subscribe(()=>{this.disabled&&Promise.resolve().then(()=>this._syncChipsState()),this._redirectDestroyedChipFocus()})}_trackDestroyedFocusedChip(){this.chipDestroyedChanges.pipe(Lt$1(this._destroyed)).subscribe(e=>{let n=this._chips.toArray().indexOf(e.chip),o=e.chip._hasFocus(),r=e.chip._hadFocusOnRemove&&this._keyManager.activeItem&&e.chip._getActions().includes(this._keyManager.activeItem),c=o||r;this._isValidIndex(n)&&c&&(this._lastDestroyedFocusedChipIndex=n)})}_redirectDestroyedChipFocus(){if(this._lastDestroyedFocusedChipIndex!=null){if(this._chips.length){let e=Math.min(this._lastDestroyedFocusedChipIndex,this._chips.length-1),t=this._chips.toArray()[e];t.disabled?this._chips.length===1?this.focus():this._keyManager.setPreviousItemActive():t.focus()}else this.focus();this._lastDestroyedFocusedChipIndex=null}}static ɵfac=function(t){return new(t||i)};static ɵcmp=me$1({type:i,selectors:[[`mat-chip-set`]],contentQueries:function(t,n,o){if(t&1&&eg(o,Ve,5),t&2){let r;tg(r=ng())&&(n._chips=r)}},hostAttrs:[1,`mat-mdc-chip-set`,`mdc-evolution-chip-set`],hostVars:1,hostBindings:function(t,n){t&1&&Qm(`keydown`,function(r){return n._handleKeydown(r)}),t&2&&zn$1(`role`,n.role)},inputs:{disabled:[2,`disabled`,`disabled`,xe],role:`role`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Sg(e)]},ngContentSelectors:Ot,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,n){t&1&&(Xt$1(),It$1(0,`div`,0),Fe(1),Dt$1())},styles:[`.mat-mdc-chip-set {
  display: flex;
}
.mat-mdc-chip-set:focus {
  outline: none;
}
.mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  min-width: 100%;
  margin-left: -8px;
  margin-right: 0;
}
.mat-mdc-chip-set .mdc-evolution-chip {
  margin: 4px 0 4px 8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip-set__chips {
  margin-left: 0;
  margin-right: -8px;
}
[dir=rtl] .mat-mdc-chip-set .mdc-evolution-chip {
  margin-left: 0;
  margin-right: 8px;
}

.mdc-evolution-chip-set__chips {
  display: flex;
  flex-flow: wrap;
  min-width: 0;
}

.mat-mdc-chip-set-stacked {
  flex-direction: column;
  align-items: flex-start;
}
.mat-mdc-chip-set-stacked .mat-mdc-chip {
  width: 100%;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__graphic {
  flex-grow: 0;
}
.mat-mdc-chip-set-stacked .mdc-evolution-chip__action--primary {
  flex-basis: 100%;
  justify-content: start;
}

input.mat-mdc-chip-input {
  flex: 1 0 150px;
  margin-left: 8px;
}
[dir=rtl] input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 8px;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-moz-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input::-webkit-input-placeholder {
  opacity: 1;
}
.mat-mdc-form-field:not(.mat-form-field-hide-placeholder) input.mat-mdc-chip-input:-ms-input-placeholder {
  opacity: 1;
}
.mat-mdc-chip-set + input.mat-mdc-chip-input {
  margin-left: 0;
  margin-right: 0;
}
`],encapsulation:2})}return i})();var je=class{source;value;constructor(a,e){this.source=a,this.value=e}};var xn={provide:Te,useExisting:io(()=>Cn),multi:!0};var Cn=(()=>{class i extends kn{_onTouched=()=>{};_onChange=()=>{};_defaultRole=`listbox`;_defaultOptions=p(Be,{optional:!0});get multiple(){return this._multiple}set multiple(e){this._multiple=e,this._syncListboxProperties()}_multiple=!1;get selected(){let e=this._chips.toArray().filter(t=>t.selected);return this.multiple?e:e[0]}ariaOrientation=`horizontal`;get selectable(){return this._selectable}set selectable(e){this._selectable=e,this._syncListboxProperties()}_selectable=!0;compareWith=(e,t)=>e===t;required=!1;get hideSingleSelectionIndicator(){return this._hideSingleSelectionIndicator}set hideSingleSelectionIndicator(e){this._hideSingleSelectionIndicator=e,this._syncListboxProperties()}_hideSingleSelectionIndicator=this._defaultOptions?.hideSingleSelectionIndicator??!1;get chipSelectionChanges(){return this._getChipStream(e=>e.selectionChange)}get chipBlurChanges(){return this._getChipStream(e=>e._onBlur)}get value(){return this._value}set value(e){this._chips&&this._chips.length&&this._setSelectionByValue(e,!1),this._value=e}_value;change=new ue;_chips=void 0;ngAfterContentInit(){this._chips.changes.pipe(Bi(null),Lt$1(this._destroyed)).subscribe(()=>{this.value!==void 0&&Promise.resolve().then(()=>{this._setSelectionByValue(this.value,!1)}),this._syncListboxProperties()}),this.chipBlurChanges.pipe(Lt$1(this._destroyed)).subscribe(()=>this._blur()),this.chipSelectionChanges.pipe(Lt$1(this._destroyed)).subscribe(e=>{this.multiple||this._chips.forEach(t=>{t!==e.source&&t._setSelectedState(!1,!1,!1)}),e.isUserInput&&this._propagateChanges()})}focus(){if(this.disabled)return;let e=this._getFirstSelectedChip();e&&!e.disabled?e.focus():this._chips.length>0?this._keyManager.setFirstItemActive():this._elementRef.nativeElement.focus()}writeValue(e){e!=null?this.value=e:this.value=void 0}registerOnChange(e){this._onChange=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}_setSelectionByValue(e,t=!0){this._clearSelection(),Array.isArray(e)?e.forEach(n=>this._selectValue(n,t)):this._selectValue(e,t)}_blur(){this.disabled||setTimeout(()=>{this.focused||this._markAsTouched()})}_keydown(e){e.keyCode===9&&super._allowFocusEscape()}_markAsTouched(){this._onTouched(),this._changeDetectorRef.markForCheck()}_propagateChanges(){let e=null;Array.isArray(this.selected)?e=this.selected.map(t=>t.value):e=this.selected?this.selected.value:void 0,this._value=e,this.change.emit(new je(this,e)),this._onChange(e),this._changeDetectorRef.markForCheck()}_clearSelection(e){this._chips.forEach(t=>{t!==e&&t.deselect()})}_selectValue(e,t){let n=this._chips.find(o=>o.value!=null&&this.compareWith(o.value,e));return n&&(t?n.selectViaInteraction():n.select()),n}_syncListboxProperties(){this._chips&&Promise.resolve().then(()=>{this._chips.forEach(e=>{e._chipListMultiple=this.multiple,e.chipListSelectable=this._selectable,e._chipListHideSingleSelectionIndicator=this.hideSingleSelectionIndicator,e._changeDetectorRef.markForCheck()})})}_getFirstSelectedChip(){return Array.isArray(this.selected)?this.selected.length?this.selected[0]:void 0:this.selected}_skipPredicate(e){return!1}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ao(i)))(n||i)}})();static ɵcmp=me$1({type:i,selectors:[[`mat-chip-listbox`]],contentQueries:function(t,n,o){if(t&1&&eg(o,_n,5),t&2){let r;tg(r=ng())&&(n._chips=r)}},hostAttrs:[1,`mdc-evolution-chip-set`,`mat-mdc-chip-listbox`],hostVars:10,hostBindings:function(t,n){t&1&&Qm(`focus`,function(){return n.focus()})(`blur`,function(){return n._blur()})(`keydown`,function(r){return n._keydown(r)}),t&2&&(Km(`tabIndex`,n.disabled||n.empty?-1:n.tabIndex),zn$1(`role`,n.role)(`aria-required`,n.role?n.required:null)(`aria-disabled`,n.disabled.toString())(`aria-multiselectable`,n.multiple)(`aria-orientation`,n.ariaOrientation),qe$1(`mat-mdc-chip-list-disabled`,n.disabled)(`mat-mdc-chip-list-required`,n.required))},inputs:{multiple:[2,`multiple`,`multiple`,xe],ariaOrientation:[0,`aria-orientation`,`ariaOrientation`],selectable:[2,`selectable`,`selectable`,xe],compareWith:`compareWith`,required:[2,`required`,`required`,xe],hideSingleSelectionIndicator:[2,`hideSingleSelectionIndicator`,`hideSingleSelectionIndicator`,xe],value:`value`},outputs:{change:`change`},features:[Od([xn]),St$1],ngContentSelectors:Ot,decls:2,vars:0,consts:[[`role`,`presentation`,1,`mdc-evolution-chip-set__chips`]],template:function(t,n){t&1&&(Xt$1(),It$1(0,`div`,0),Fe(1),Dt$1())},styles:[wn],encapsulation:2})}return i})();var Oa=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Q({type:i});static ɵinj=q({providers:[Tt,{provide:Be,useValue:{separatorKeyCodes:[13]}}],imports:[Tv,Ye]})}return i})();var Le=new v(`CdkAccordion`);var jt=(()=>{class i{_stateChanges=new M;_openCloseAllActions=new M;id=p(ei$1).getId(`cdk-accordion-`);multi=!1;openAll(){this.multi&&this._openCloseAllActions.next(!0)}closeAll(){this._openCloseAllActions.next(!1)}ngOnChanges(e){this._stateChanges.next(e)}ngOnDestroy(){this._stateChanges.complete(),this._openCloseAllActions.complete()}static ɵfac=function(t){return new(t||i)};static ɵdir=Ee({type:i,selectors:[[`cdk-accordion`],[``,`cdkAccordion`,``]],inputs:{multi:[2,`multi`,`multi`,xe]},exportAs:[`cdkAccordion`],features:[Od([{provide:Le,useExisting:i}]),Hs]})}return i})();var Bt=(()=>{class i{accordion=p(Le,{optional:!0,skipSelf:!0});_changeDetectorRef=p(TI);_expansionDispatcher=p(ge);_openCloseAllSubscription=$.EMPTY;closed=new ue;opened=new ue;destroyed=new ue;expandedChange=new ue;id=p(ei$1).getId(`cdk-accordion-child-`);get expanded(){return this._expanded}set expanded(e){if(this._expanded!==e){if(this._expanded=e,this.expandedChange.emit(e),e){this.opened.emit();let t=this.accordion?this.accordion.id:this.id;this._expansionDispatcher.notify(this.id,t)}else this.closed.emit();this._changeDetectorRef.markForCheck()}}_expanded=!1;get disabled(){return this._disabled()}set disabled(e){this._disabled.set(e)}_disabled=mt(!1);_removeUniqueSelectionListener=()=>{};ngOnInit(){this._removeUniqueSelectionListener=this._expansionDispatcher.listen((e,t)=>{this.accordion&&!this.accordion.multi&&this.accordion.id===t&&this.id!==e&&(this.expanded=!1)}),this.accordion&&(this._openCloseAllSubscription=this._subscribeToOpenCloseAllActions())}ngOnDestroy(){this.opened.complete(),this.closed.complete(),this.destroyed.emit(),this.destroyed.complete(),this._removeUniqueSelectionListener(),this._openCloseAllSubscription.unsubscribe()}toggle(){this.disabled||(this.expanded=!this.expanded)}close(){this.disabled||(this.expanded=!1)}open(){this.disabled||(this.expanded=!0)}_subscribeToOpenCloseAllActions(){return this.accordion._openCloseAllActions.subscribe(e=>{this.disabled||(this.expanded=e)})}static ɵfac=function(t){return new(t||i)};static ɵdir=Ee({type:i,selectors:[[`cdk-accordion-item`],[``,`cdkAccordionItem`,``]],inputs:{expanded:[2,`expanded`,`expanded`,xe],disabled:[2,`disabled`,`disabled`,xe]},outputs:{closed:`closed`,opened:`opened`,destroyed:`destroyed`,expandedChange:`expandedChange`},exportAs:[`cdkAccordionItem`],features:[Od([{provide:Le,useValue:void 0}])]})}return i})();var qt=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Q({type:i});static ɵinj=q({})}return i})();var Sn=[`body`];var In=[`bodyWrapper`];var An=[[[`mat-expansion-panel-header`]],`*`,[[`mat-action-row`]]];var Tn=[`mat-expansion-panel-header`,`*`,`mat-action-row`];function Dn(i,a){}var Mn=[[[`mat-panel-title`]],[[`mat-panel-description`]],`*`];var Nn=[`mat-panel-title`,`mat-panel-description`,`*`];function En(i,a){i&1&&(It$1(0,`span`,1),sh(),It$1(1,`svg`,2),Ct$1(2,`path`,3),Dt$1()())}var He=new v(`MAT_ACCORDION`);var Lt=new v(`MAT_EXPANSION_PANEL`);var Rn=(()=>{class i{_template=p(Yt$1);_expansionPanel=p(Lt,{optional:!0});static ɵfac=function(t){return new(t||i)};static ɵdir=Ee({type:i,selectors:[[`ng-template`,`matExpansionPanelContent`,``]]})}return i})();var Ht=new v(`MAT_EXPANSION_PANEL_DEFAULT_OPTIONS`);var Pn=(()=>{class i extends Bt{_viewContainerRef=p(Kt$1);_animationsDisabled=kr();_document=p(C);_ngZone=p(O);_elementRef=p(Z);_renderer=p(Zt$1);_cleanupTransitionEnd;get hideToggle(){return this._hideToggle||this.accordion&&this.accordion.hideToggle}set hideToggle(e){this._hideToggle=e}_hideToggle=!1;get togglePosition(){return this._togglePosition||this.accordion&&this.accordion.togglePosition}set togglePosition(e){this._togglePosition=e}_togglePosition;afterExpand=new ue;afterCollapse=new ue;_inputChanges=new M;accordion=p(He,{optional:!0,skipSelf:!0});_lazyContent;_body;_bodyWrapper;_portal;_headerId=p(ei$1).getId(`mat-expansion-panel-header-`);constructor(){super();let e=p(Ht,{optional:!0});this._expansionDispatcher=p(ge),e&&(this.hideToggle=e.hideToggle)}_hasSpacing(){return this.accordion?this.expanded&&this.accordion.displayMode==="default":!1}_getExpandedState(){return this.expanded?`expanded`:`collapsed`}toggle(){this.expanded=!this.expanded}close(){this.expanded=!1}open(){this.expanded=!0}ngAfterContentInit(){this._lazyContent&&this._lazyContent._expansionPanel===this&&this.opened.pipe(Bi(null),le(()=>this.expanded&&!this._portal),gn$1(1)).subscribe(()=>{this._portal=new ba(this._lazyContent._template,this._viewContainerRef)}),this._setupAnimationEvents()}ngOnChanges(e){this._inputChanges.next(e)}ngOnDestroy(){super.ngOnDestroy(),this._cleanupTransitionEnd?.(),this._inputChanges.complete()}_containsFocus(){if(this._body){let e=this._document.activeElement,t=this._body.nativeElement;return e===t||t.contains(e)}return!1}_transitionEndListener=({target:e,propertyName:t})=>{e===this._bodyWrapper?.nativeElement&&t===`grid-template-rows`&&this._ngZone.run(()=>{this.expanded?this.afterExpand.emit():this.afterCollapse.emit()})};_setupAnimationEvents(){this._ngZone.runOutsideAngular(()=>{this._animationsDisabled?(this.opened.subscribe(()=>this._ngZone.run(()=>this.afterExpand.emit())),this.closed.subscribe(()=>this._ngZone.run(()=>this.afterCollapse.emit()))):setTimeout(()=>{let e=this._elementRef.nativeElement;this._cleanupTransitionEnd=this._renderer.listen(e,`transitionend`,this._transitionEndListener),e.classList.add(`mat-expansion-panel-animations-enabled`)},200)})}static ɵfac=function(t){return new(t||i)};static ɵcmp=me$1({type:i,selectors:[[`mat-expansion-panel`]],contentQueries:function(t,n,o){if(t&1&&eg(o,Rn,5),t&2){let r;tg(r=ng())&&(n._lazyContent=r.first)}},viewQuery:function(t,n){if(t&1&&xd(Sn,5)(In,5),t&2){let o;tg(o=ng())&&(n._body=o.first),tg(o=ng())&&(n._bodyWrapper=o.first)}},hostAttrs:[1,`mat-expansion-panel`],hostVars:4,hostBindings:function(t,n){t&2&&qe$1(`mat-expanded`,n.expanded)(`mat-expansion-panel-spacing`,n._hasSpacing())},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,xe],togglePosition:`togglePosition`},outputs:{afterExpand:`afterExpand`,afterCollapse:`afterCollapse`},exportAs:[`matExpansionPanel`],features:[Od([{provide:He,useValue:void 0},{provide:Lt,useExisting:i}]),St$1,Hs],ngContentSelectors:Tn,decls:9,vars:4,consts:[[`bodyWrapper`,``],[`body`,``],[1,`mat-expansion-panel-content-wrapper`],[`role`,`region`,1,`mat-expansion-panel-content`,3,`id`],[1,`mat-expansion-panel-body`],[3,`cdkPortalOutlet`]],template:function(t,n){t&1&&(Xt$1(An),Fe(0),Vs(1,`div`,2,0)(3,`div`,3,1)(5,`div`,4),Fe(6,1),$m(7,Dn,0,0,`ng-template`,5),Nd(),Fe(8,2),Nd()()),t&2&&(Cr(),zn$1(`inert`,n.expanded?null:``),Cr(2),qm(`id`,n.id),zn$1(`aria-labelledby`,n._headerId),Cr(4),qm(`cdkPortalOutlet`,n._portal))},dependencies:[d2],styles:[`.mat-expansion-panel {
  box-sizing: content-box;
  display: block;
  margin: 0;
  overflow: hidden;
}
.mat-expansion-panel.mat-expansion-panel-animations-enabled {
  transition: margin 225ms cubic-bezier(0.4, 0, 0.2, 1), box-shadow 280ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel {
  position: relative;
  background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  color: var(--%NS%mat-expansion-container-text-color, var(--%NS%mat-sys-on-surface));
  border-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-expansion-panel:not([class*=mat-elevation-z]) {
  box-shadow: var(--%NS%mat-expansion-container-elevation-shadow, 0px 3px 1px -2px rgba(0, 0, 0, 0.2), 0px 2px 2px 0px rgba(0, 0, 0, 0.14), 0px 1px 5px 0px rgba(0, 0, 0, 0.12));
}
.mat-accordion .mat-expansion-panel:not(.mat-expanded), .mat-accordion .mat-expansion-panel:not(.mat-expansion-panel-spacing) {
  border-radius: 0;
}
.mat-accordion .mat-expansion-panel:first-of-type {
  border-top-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-top-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
.mat-accordion .mat-expansion-panel:last-of-type {
  border-bottom-right-radius: var(--%NS%mat-expansion-container-shape, 12px);
  border-bottom-left-radius: var(--%NS%mat-expansion-container-shape, 12px);
}
@media (forced-colors: active) {
  .mat-expansion-panel {
    outline: solid 1px;
  }
}

.mat-expansion-panel-content-wrapper {
  display: grid;
  grid-template-rows: 0fr;
  grid-template-columns: 100%;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content-wrapper {
  transition: grid-template-rows 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
  grid-template-rows: 1fr;
}
@supports not (grid-template-rows: 0fr) {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}
@media print {
  .mat-expansion-panel-content-wrapper {
    height: 0;
  }
  .mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper {
    height: auto;
  }
}

.mat-expansion-panel-content {
  display: flex;
  flex-direction: column;
  overflow: visible;
  min-height: 0;
  visibility: hidden;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-content {
  transition: visibility 190ms linear;
}
.mat-expansion-panel.mat-expanded > .mat-expansion-panel-content-wrapper > .mat-expansion-panel-content {
  visibility: visible;
}
.mat-expansion-panel-content {
  font-family: var(--%NS%mat-expansion-container-text-font, var(--%NS%mat-sys-body-large-font));
  font-size: var(--%NS%mat-expansion-container-text-size, var(--%NS%mat-sys-body-large-size));
  font-weight: var(--%NS%mat-expansion-container-text-weight, var(--%NS%mat-sys-body-large-weight));
  line-height: var(--%NS%mat-expansion-container-text-line-height, var(--%NS%mat-sys-body-large-line-height));
  letter-spacing: var(--%NS%mat-expansion-container-text-tracking, var(--%NS%mat-sys-body-large-tracking));
}

.mat-expansion-panel-body {
  padding: 0 24px 16px;
}

.mat-expansion-panel-spacing {
  margin: 16px 0;
}
.mat-accordion > .mat-expansion-panel-spacing:first-child, .mat-accordion > *:first-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-top: 0;
}
.mat-accordion > .mat-expansion-panel-spacing:last-child, .mat-accordion > *:last-child:not(.mat-expansion-panel) .mat-expansion-panel-spacing {
  margin-bottom: 0;
}

.mat-action-row {
  border-top-style: solid;
  border-top-width: 1px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  padding: 16px 8px 16px 24px;
  border-top-color: var(--%NS%mat-expansion-actions-divider-color, var(--%NS%mat-sys-outline));
}
.mat-action-row .mat-button-base,
.mat-action-row .mat-mdc-button-base {
  margin-left: 8px;
}
[dir=rtl] .mat-action-row .mat-button-base,
[dir=rtl] .mat-action-row .mat-mdc-button-base {
  margin-left: 0;
  margin-right: 8px;
}
`],encapsulation:2})}return i})();var On=(()=>{class i{panel=p(Pn,{host:!0});_element=p(Z);_focusMonitor=p(ou);_changeDetectorRef=p(TI);_parentChangeSubscription=$.EMPTY;constructor(){p(st).load(Iv);let e=this.panel,t=p(Ht,{optional:!0}),n=p(new Qs(`tabindex`),{optional:!0}),o=e.accordion?e.accordion._stateChanges.pipe(le(r=>!!(r.hideToggle||r.togglePosition))):fn$1;this.tabIndex=parseInt(n||``)||0,this._parentChangeSubscription=By(e.opened,e.closed,o,e._inputChanges.pipe(le(r=>!!(r.hideToggle||r.disabled||r.togglePosition)))).subscribe(()=>this._changeDetectorRef.markForCheck()),e.closed.pipe(le(()=>e._containsFocus())).subscribe(()=>this._focusMonitor.focusVia(this._element,`program`)),t&&(this.expandedHeight=t.expandedHeight,this.collapsedHeight=t.collapsedHeight)}expandedHeight;collapsedHeight;tabIndex=0;get disabled(){return this.panel.disabled}_toggle(){this.disabled||this.panel.toggle()}_isExpanded(){return this.panel.expanded}_getExpandedState(){return this.panel._getExpandedState()}_getPanelId(){return this.panel.id}_getTogglePosition(){return this.panel.togglePosition}_showToggle(){return!this.panel.hideToggle&&!this.panel.disabled}_getHeaderHeight(){let e=this._isExpanded();return e&&this.expandedHeight?this.expandedHeight:!e&&this.collapsedHeight?this.collapsedHeight:null}_keydown(e){switch(e.keyCode){case 32:case 13:uv(e)||(e.preventDefault(),this._toggle());break;default:this.panel.accordion&&this.panel.accordion._handleHeaderKeydown(e);return}}focus(e,t){e?this._focusMonitor.focusVia(this._element,e,t):this._element.nativeElement.focus(t)}ngAfterViewInit(){this._focusMonitor.monitor(this._element).subscribe(e=>{e&&this.panel.accordion&&this.panel.accordion._handleHeaderFocus(this)})}ngOnDestroy(){this._parentChangeSubscription.unsubscribe(),this._focusMonitor.stopMonitoring(this._element)}static ɵfac=function(t){return new(t||i)};static ɵcmp=me$1({type:i,selectors:[[`mat-expansion-panel-header`]],hostAttrs:[`role`,`button`,1,`mat-expansion-panel-header`,`mat-focus-indicator`],hostVars:13,hostBindings:function(t,n){t&1&&Qm(`click`,function(){return n._toggle()})(`keydown`,function(r){return n._keydown(r)}),t&2&&(zn$1(`id`,n.panel._headerId)(`tabindex`,n.disabled?-1:n.tabIndex)(`aria-controls`,n._getPanelId())(`aria-expanded`,n._isExpanded())(`aria-disabled`,n.panel.disabled),Md(`height`,n._getHeaderHeight()),qe$1(`mat-expanded`,n._isExpanded())(`mat-expansion-toggle-indicator-after`,n._getTogglePosition()===`after`)(`mat-expansion-toggle-indicator-before`,n._getTogglePosition()===`before`))},inputs:{expandedHeight:`expandedHeight`,collapsedHeight:`collapsedHeight`,tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?0:Sg(e)]},ngContentSelectors:Nn,decls:5,vars:3,consts:[[1,`mat-content`],[1,`mat-expansion-indicator`],[`xmlns`,`http://www.w3.org/2000/svg`,`viewBox`,`0 -960 960 960`,`aria-hidden`,`true`,`focusable`,`false`],[`d`,`M480-345 240-585l56-56 184 184 184-184 56 56-240 240Z`]],template:function(t,n){t&1&&(Xt$1(Mn),It$1(0,`span`,0),Fe(1),Fe(2,1),Fe(3,2),Dt$1(),Fo(4,En,3,0,`span`,1)),t&2&&(qe$1(`mat-content-hide-toggle`,!n._showToggle()),Cr(4),jo(n._showToggle()?4:-1))},styles:[`.mat-expansion-panel-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 24px;
  border-radius: inherit;
  outline: 0;
}
.mat-expansion-panel-animations-enabled .mat-expansion-panel-header {
  transition: height 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header::before {
  border-radius: inherit;
}
.mat-expansion-panel-header {
  height: var(--%NS%mat-expansion-header-collapsed-state-height, 48px);
  font-family: var(--%NS%mat-expansion-header-text-font, var(--%NS%mat-sys-title-medium-font));
  font-size: var(--%NS%mat-expansion-header-text-size, var(--%NS%mat-sys-title-medium-size));
  font-weight: var(--%NS%mat-expansion-header-text-weight, var(--%NS%mat-sys-title-medium-weight));
  line-height: var(--%NS%mat-expansion-header-text-line-height, var(--%NS%mat-sys-title-medium-line-height));
  letter-spacing: var(--%NS%mat-expansion-header-text-tracking, var(--%NS%mat-sys-title-medium-tracking));
}
.mat-expansion-panel-header.mat-expanded {
  height: var(--%NS%mat-expansion-header-expanded-state-height, 64px);
}
.mat-expansion-panel-header[aria-disabled=true] {
  color: var(--%NS%mat-expansion-header-disabled-state-text-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
.mat-expansion-panel-header:not([aria-disabled=true]) {
  cursor: pointer;
}
.mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
  background: var(--%NS%mat-expansion-header-hover-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-hover-state-layer-opacity) * 100%), transparent));
}
@media (hover: none) {
  .mat-expansion-panel:not(.mat-expanded) .mat-expansion-panel-header:not([aria-disabled=true]):hover {
    background: var(--%NS%mat-expansion-container-background-color, var(--%NS%mat-sys-surface));
  }
}
.mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-keyboard-focused, .mat-expansion-panel .mat-expansion-panel-header:not([aria-disabled=true]).cdk-program-focused {
  background: var(--%NS%mat-expansion-header-focus-state-layer-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) calc(var(--%NS%mat-sys-focus-state-layer-opacity) * 100%), transparent));
}
.mat-expansion-panel-header._mat-animation-noopable {
  transition: none;
}
.mat-expansion-panel-header.mat-expanded:focus, .mat-expansion-panel-header.mat-expanded:hover {
  background: inherit;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before {
  flex-direction: row-reverse;
}
.mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 16px 0 0;
}
[dir=rtl] .mat-expansion-panel-header.mat-expansion-toggle-indicator-before .mat-expansion-indicator {
  margin: 0 0 0 16px;
}

.mat-content {
  display: flex;
  flex: 1;
  flex-direction: row;
  overflow: hidden;
}
.mat-content.mat-content-hide-toggle {
  margin-right: 8px;
}
[dir=rtl] .mat-content.mat-content-hide-toggle {
  margin-right: 0;
  margin-left: 8px;
}
.mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-left: 24px;
  margin-right: 0;
}
[dir=rtl] .mat-expansion-toggle-indicator-before .mat-content.mat-content-hide-toggle {
  margin-right: 24px;
  margin-left: 0;
}

.mat-expansion-panel-header-title {
  color: var(--%NS%mat-expansion-header-text-color, var(--%NS%mat-sys-on-surface));
}

.mat-expansion-panel-header-title,
.mat-expansion-panel-header-description {
  display: flex;
  flex-grow: 1;
  flex-basis: 0;
  margin-right: 16px;
  align-items: center;
}
[dir=rtl] .mat-expansion-panel-header-title,
[dir=rtl] .mat-expansion-panel-header-description {
  margin-right: 0;
  margin-left: 16px;
}
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-title,
.mat-expansion-panel-header[aria-disabled=true] .mat-expansion-panel-header-description {
  color: inherit;
}

.mat-expansion-panel-header-description {
  flex-grow: 2;
  color: var(--%NS%mat-expansion-header-description-color, var(--%NS%mat-sys-on-surface-variant));
}

.mat-expansion-panel-animations-enabled .mat-expansion-indicator {
  transition: transform 225ms cubic-bezier(0.4, 0, 0.2, 1);
}
.mat-expansion-panel-header.mat-expanded .mat-expansion-indicator {
  transform: rotate(180deg);
}
.mat-expansion-indicator::after {
  border-style: solid;
  border-width: 0 2px 2px 0;
  content: "";
  padding: 3px;
  transform: rotate(45deg);
  vertical-align: middle;
  color: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-legacy-header-indicator-display, none);
}
.mat-expansion-indicator svg {
  width: 24px;
  height: 24px;
  margin: 0 -8px;
  vertical-align: middle;
  fill: var(--%NS%mat-expansion-header-indicator-color, var(--%NS%mat-sys-on-surface-variant));
  display: var(--%NS%mat-expansion-header-indicator-display, inline-block);
}

@media (forced-colors: active) {
  .mat-expansion-panel-content {
    border-top: 1px solid;
    border-top-left-radius: 0;
    border-top-right-radius: 0;
  }
}
`],encapsulation:2})}return i})();var mo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵdir=Ee({type:i,selectors:[[`mat-panel-title`]],hostAttrs:[1,`mat-expansion-panel-header-title`]})}return i})();var go=(()=>{class i extends jt{_keyManager;_ownHeaders=new Bn$1;_headers;hideToggle=!1;displayMode=`default`;togglePosition=`after`;ngAfterContentInit(){this._headers.changes.pipe(Bi(this._headers)).subscribe(e=>{this._ownHeaders.reset(e.filter(t=>t.panel.accordion===this)),this._ownHeaders.notifyOnChanges()}),this._keyManager=new au(this._ownHeaders).withWrap().withHomeAndEnd()}_handleHeaderKeydown(e){this._keyManager.onKeydown(e)}_handleHeaderFocus(e){this._keyManager.updateActiveItem(e)}ngOnDestroy(){super.ngOnDestroy(),this._keyManager?.destroy(),this._ownHeaders.destroy()}static ɵfac=(()=>{let e;return function(n){return(e||(e=Ao(i)))(n||i)}})();static ɵdir=Ee({type:i,selectors:[[`mat-accordion`]],contentQueries:function(t,n,o){if(t&1&&eg(o,On,5),t&2){let r;tg(r=ng())&&(n._headers=r)}},hostAttrs:[1,`mat-accordion`],hostVars:2,hostBindings:function(t,n){t&2&&qe$1(`mat-accordion-multi`,n.multi)},inputs:{hideToggle:[2,`hideToggle`,`hideToggle`,xe],displayMode:`displayMode`,togglePosition:`togglePosition`},exportAs:[`matAccordion`],features:[Od([{provide:He,useExisting:i}]),St$1]})}return i})();var fo=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Q({type:i});static ɵinj=q({imports:[qt,Pv,Ye]})}return i})();var Vn=[`tooltip`];var jn=20;var Bn=new v(`mat-tooltip-scroll-strategy`,{providedIn:`root`,factory:()=>{let i=p(W);return()=>Wv(i,{scrollThrottle:jn})}});var qn=new v(`mat-tooltip-default-options`,{providedIn:`root`,factory:()=>({showDelay:0,hideDelay:0,touchendHideDelay:1500})});var Wt=`tooltip-panel`;var Ln={passive:!0};var Hn=8;var Wn=8;var Gn=24;var zn=200;var Un=(()=>{class i{_elementRef=p(Z);_ngZone=p(O);_platform=p(re);_ariaDescriber=p(bU);_focusMonitor=p(ou);_dir=p(vu);_injector=p(W);_viewContainerRef=p(Kt$1);_mediaMatcher=p(fa);_document=p(C);_renderer=p(Zt$1);_animationsDisabled=kr();_defaultOptions=p(qn,{optional:!0});_overlayRef=null;_tooltipInstance=null;_overlayPanelClass;_portal;_position=`below`;_positionAtOrigin=!1;_disabled=!1;_tooltipClass;_viewInitialized=!1;_pointerExitEventsInitialized=!1;_tooltipComponent=Gt;_viewportMargin=8;_currentPosition;_cssClassPrefix=`mat-mdc`;_ariaDescriptionPending=!1;_dirSubscribed=!1;get position(){return this._position}set position(e){e!==this._position&&(this._position=e,this._overlayRef&&(this._updatePosition(this._overlayRef),this._tooltipInstance?.show(0),this._overlayRef.updatePosition()))}get positionAtOrigin(){return this._positionAtOrigin}set positionAtOrigin(e){this._positionAtOrigin=VU(e),this._detach(),this._overlayRef=null}get disabled(){return this._disabled}set disabled(e){let t=VU(e);this._disabled!==t&&(this._disabled=t,t?this.hide(0):this._setupPointerEnterEventsIfNeeded(),this._syncAriaDescription(this.message))}get showDelay(){return this._showDelay}set showDelay(e){this._showDelay=ca(e)}_showDelay;get hideDelay(){return this._hideDelay}set hideDelay(e){this._hideDelay=ca(e),this._tooltipInstance&&(this._tooltipInstance._mouseLeaveHideDelay=this._hideDelay)}_hideDelay;touchGestures=`auto`;get message(){return this._message}set message(e){let t=this._message;this._message=e!=null?String(e).trim():``,!this._message&&this._isTooltipVisible()?this.hide(0):(this._setupPointerEnterEventsIfNeeded(),this._updateTooltipMessage()),this._syncAriaDescription(t)}_message=``;get tooltipClass(){return this._tooltipClass}set tooltipClass(e){this._tooltipClass=e,this._tooltipInstance&&this._setTooltipClass(this._tooltipClass)}_eventCleanups=[];_touchstartTimeout=null;_destroyed=new M;_isDestroyed=!1;constructor(){let e=this._defaultOptions;e&&(this._showDelay=e.showDelay,this._hideDelay=e.hideDelay,e.position&&(this.position=e.position),e.positionAtOrigin&&(this.positionAtOrigin=e.positionAtOrigin),e.touchGestures&&(this.touchGestures=e.touchGestures),e.tooltipClass&&(this.tooltipClass=e.tooltipClass)),this._viewportMargin=Hn}ngAfterViewInit(){this._viewInitialized=!0,this._setupPointerEnterEventsIfNeeded(),this._focusMonitor.monitor(this._elementRef).pipe(Lt$1(this._destroyed)).subscribe(e=>{e?e===`keyboard`&&this._ngZone.run(()=>this.show()):this._ngZone.run(()=>this.hide(0))})}ngOnDestroy(){let e=this._elementRef.nativeElement;this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this._overlayRef&&(this._overlayRef.dispose(),this._tooltipInstance=null),this._eventCleanups.forEach(t=>t()),this._eventCleanups.length=0,this._destroyed.next(),this._destroyed.complete(),this._isDestroyed=!0,this._ariaDescriber.removeDescription(e,this.message,`tooltip`),this._focusMonitor.stopMonitoring(e)}show(e=this.showDelay,t){if(this.disabled||!this.message||this._isTooltipVisible()){this._tooltipInstance?._cancelPendingAnimations();return}let n=this._createOverlay(t);this._detach(),this._portal=this._portal||new bu(this._tooltipComponent,this._viewContainerRef);let o=this._tooltipInstance=n.attach(this._portal).instance;o._triggerElement=this._elementRef.nativeElement,o._mouseLeaveHideDelay=this._hideDelay,o.afterHidden().pipe(Lt$1(this._destroyed)).subscribe(()=>this._detach()),this._setTooltipClass(this._tooltipClass),this._updateTooltipMessage(),o.show(e)}hide(e=this.hideDelay){let t=this._tooltipInstance;t&&(t.isVisible()?t.hide(e):(t._cancelPendingAnimations(),this._detach()))}toggle(e){this._isTooltipVisible()?this.hide():this.show(void 0,e)}_isTooltipVisible(){return!!this._tooltipInstance&&this._tooltipInstance.isVisible()}_createOverlay(e){if(this._overlayRef){let r=this._overlayRef.getConfig().positionStrategy;if((!this.positionAtOrigin||!e)&&r._origin instanceof Z)return this._overlayRef;this._detach()}let t=this._injector.get(wa).getAncestorScrollContainers(this._elementRef),n=`${this._cssClassPrefix}-${Wt}`,o=Qv(this._injector,this.positionAtOrigin?e||this._elementRef:this._elementRef).withTransformOriginOn(`.${this._cssClassPrefix}-tooltip`).withFlexibleDimensions(!1).withViewportMargin(this._viewportMargin).withScrollableContainers(t).withPopoverLocation(`global`);return o.positionChanges.pipe(Lt$1(this._destroyed)).subscribe(r=>{this._updateCurrentPositionClass(r.connectionPair),this._tooltipInstance&&r.scrollableViewProperties.isOverlayClipped&&this._tooltipInstance.isVisible()&&this._ngZone.run(()=>this.hide(0))}),this._overlayRef=ny(this._injector,{direction:this._dir,positionStrategy:o,panelClass:this._overlayPanelClass?[...this._overlayPanelClass,n]:n,scrollStrategy:this._injector.get(Bn)(),disableAnimations:this._animationsDisabled,eventPredicate:this._overlayEventPredicate}),this._updatePosition(this._overlayRef),this._overlayRef.detachments().pipe(Lt$1(this._destroyed)).subscribe(()=>this._detach()),this._overlayRef.outsidePointerEvents().pipe(Lt$1(this._destroyed)).subscribe(()=>this._tooltipInstance?._handleBodyInteraction()),this._overlayRef.keydownEvents().pipe(Lt$1(this._destroyed)).subscribe(r=>{r.preventDefault(),r.stopPropagation(),this._ngZone.run(()=>this.hide(0))}),this._defaultOptions?.disableTooltipInteractivity&&this._overlayRef.addPanelClass(`${this._cssClassPrefix}-tooltip-panel-non-interactive`),this._dirSubscribed||(this._dirSubscribed=!0,this._dir.change.pipe(Lt$1(this._destroyed)).subscribe(()=>{this._overlayRef&&this._updatePosition(this._overlayRef)})),this._overlayRef}_detach(){this._overlayRef&&this._overlayRef.hasAttached()&&this._overlayRef.detach(),this._tooltipInstance=null}_updatePosition(e){let t=e.getConfig().positionStrategy,n=this._getOrigin(),o=this._getOverlayPosition();t.withPositions([this._addOffset(x(x({},n.main),o.main)),this._addOffset(x(x({},n.fallback),o.fallback))])}_addOffset(e){let t=Wn,n=!this._dir||this._dir.value==`ltr`;return e.originY===`top`?e.offsetY=-t:e.originY===`bottom`?e.offsetY=t:e.originX===`start`?e.offsetX=n?-t:t:e.originX===`end`&&(e.offsetX=n?t:-t),e}_getOrigin(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`||t==`below`?n={originX:`center`,originY:t==`above`?`top`:`bottom`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={originX:`start`,originY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={originX:`end`,originY:`center`});let{x:o,y:r}=this._invertPosition(n.originX,n.originY);return{main:n,fallback:{originX:o,originY:r}}}_getOverlayPosition(){let e=!this._dir||this._dir.value==`ltr`,t=this.position,n;t==`above`?n={overlayX:`center`,overlayY:`bottom`}:t==`below`?n={overlayX:`center`,overlayY:`top`}:t==`before`||t==`left`&&e||t==`right`&&!e?n={overlayX:`end`,overlayY:`center`}:(t==`after`||t==`right`&&e||t==`left`&&!e)&&(n={overlayX:`start`,overlayY:`center`});let{x:o,y:r}=this._invertPosition(n.overlayX,n.overlayY);return{main:n,fallback:{overlayX:o,overlayY:r}}}_updateTooltipMessage(){this._tooltipInstance&&(this._tooltipInstance.message=this.message,this._tooltipInstance._markForCheck(),Dr(()=>{this._tooltipInstance&&this._overlayRef.updatePosition()},{injector:this._injector}))}_setTooltipClass(e){this._tooltipInstance&&(this._tooltipInstance.tooltipClass=e instanceof Set?Array.from(e):e,this._tooltipInstance._markForCheck())}_invertPosition(e,t){return this.position===`above`||this.position===`below`?t===`top`?t=`bottom`:t===`bottom`&&(t=`top`):e===`end`?e=`start`:e===`start`&&(e=`end`),{x:e,y:t}}_updateCurrentPositionClass(e){let{overlayY:t,originX:n,originY:o}=e,r;if(t===`center`?this._dir&&this._dir.value===`rtl`?r=n===`end`?`left`:`right`:r=n===`start`?`left`:`right`:r=t===`bottom`&&o===`top`?`above`:`below`,r!==this._currentPosition){let c=this._overlayRef;if(c){let X=`${this._cssClassPrefix}-${Wt}-`;c.removePanelClass(X+this._currentPosition),c.addPanelClass(X+r)}this._currentPosition=r}}_setupPointerEnterEventsIfNeeded(){this._disabled||!this.message||!this._viewInitialized||this._eventCleanups.length||(this._isTouchPlatform()?this.touchGestures!==`off`&&(this._disableNativeGesturesIfNecessary(),this._addListener(`touchstart`,e=>{let t=e.targetTouches?.[0],n=t?{x:t.clientX,y:t.clientY}:void 0;this._setupPointerExitEventsIfNeeded(),this._touchstartTimeout&&clearTimeout(this._touchstartTimeout);let o=500;this._touchstartTimeout=setTimeout(()=>{this._touchstartTimeout=null,this.show(void 0,n)},this._defaultOptions?.touchLongPressShowDelay??o)})):this._addListener(`mouseenter`,e=>{this._setupPointerExitEventsIfNeeded();let t;e.x!==void 0&&e.y!==void 0&&(t=e),this.show(void 0,t)}))}_setupPointerExitEventsIfNeeded(){if(!this._pointerExitEventsInitialized){if(this._pointerExitEventsInitialized=!0,!this._isTouchPlatform())this._addListener(`mouseleave`,e=>{let t=e.relatedTarget;(!t||!this._overlayRef?.overlayElement.contains(t))&&this.hide()}),this._addListener(`wheel`,e=>{if(this._isTooltipVisible()){let t=this._document.elementFromPoint(e.clientX,e.clientY),n=this._elementRef.nativeElement;t!==n&&!n.contains(t)&&this.hide()}});else if(this.touchGestures!==`off`){this._disableNativeGesturesIfNecessary();let e=()=>{this._touchstartTimeout&&clearTimeout(this._touchstartTimeout),this.hide(this._defaultOptions?.touchendHideDelay)};this._addListener(`touchend`,e),this._addListener(`touchcancel`,e)}}}_addListener(e,t){this._eventCleanups.push(this._renderer.listen(this._elementRef.nativeElement,e,t,Ln))}_isTouchPlatform(){let e=this._defaultOptions?.detectHoverCapability;return typeof e==`function`?!e():this._platform.IOS||this._platform.ANDROID?!0:this._platform.isBrowser?!!e&&this._mediaMatcher.matchMedia(`(any-hover: none)`).matches:!1}_disableNativeGesturesIfNecessary(){let e=this.touchGestures;if(e!==`off`){let t=this._elementRef.nativeElement,n=t.style;(e===`on`||t.nodeName!==`INPUT`&&t.nodeName!==`TEXTAREA`)&&(n.userSelect=n.msUserSelect=n.webkitUserSelect=n.MozUserSelect=`none`),(e===`on`||!t.draggable)&&(n.webkitUserDrag=`none`),n.touchAction=`none`,n.webkitTapHighlightColor=`transparent`}}_syncAriaDescription(e){this._ariaDescriptionPending||(this._ariaDescriptionPending=!0,this._ariaDescriber.removeDescription(this._elementRef.nativeElement,e,`tooltip`),this._isDestroyed||Dr({write:()=>{this._ariaDescriptionPending=!1,this.message&&!this.disabled&&this._ariaDescriber.describe(this._elementRef.nativeElement,this.message,`tooltip`)}},{injector:this._injector}))}_overlayEventPredicate=e=>e.type===`keydown`?this._isTooltipVisible()&&e.keyCode===27&&!uv(e):!0;static ɵfac=function(t){return new(t||i)};static ɵdir=Ee({type:i,selectors:[[``,`matTooltip`,``]],hostAttrs:[1,`mat-mdc-tooltip-trigger`],hostVars:2,hostBindings:function(t,n){t&2&&qe$1(`mat-mdc-tooltip-disabled`,n.disabled)},inputs:{position:[0,`matTooltipPosition`,`position`],positionAtOrigin:[0,`matTooltipPositionAtOrigin`,`positionAtOrigin`],disabled:[0,`matTooltipDisabled`,`disabled`],showDelay:[0,`matTooltipShowDelay`,`showDelay`],hideDelay:[0,`matTooltipHideDelay`,`hideDelay`],touchGestures:[0,`matTooltipTouchGestures`,`touchGestures`],message:[0,`matTooltip`,`message`],tooltipClass:[0,`matTooltipClass`,`tooltipClass`]},exportAs:[`matTooltip`]})}return i})();var Gt=(()=>{class i{_changeDetectorRef=p(TI);_elementRef=p(Z);_isMultiline=!1;message;tooltipClass;_showTimeoutId;_hideTimeoutId;_triggerElement;_mouseLeaveHideDelay;_animationsDisabled=kr();_tooltip;_closeOnInteraction=!1;_isVisible=!1;_onHide=new M;_showAnimation=`mat-mdc-tooltip-show`;_hideAnimation=`mat-mdc-tooltip-hide`;show(e){this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=setTimeout(()=>{this._toggleVisibility(!0),this._showTimeoutId=void 0},e)}hide(e){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId=setTimeout(()=>{this._toggleVisibility(!1),this._hideTimeoutId=void 0},e)}afterHidden(){return this._onHide}isVisible(){return this._isVisible}ngOnDestroy(){this._cancelPendingAnimations(),this._onHide.complete(),this._triggerElement=null}_handleBodyInteraction(){this._closeOnInteraction&&this.hide(0)}_markForCheck(){this._changeDetectorRef.markForCheck()}_handleMouseLeave({relatedTarget:e}){(!e||!this._triggerElement.contains(e))&&(this.isVisible()?this.hide(this._mouseLeaveHideDelay):this._finalizeAnimation(!1))}_onShow(){this._isMultiline=this._isTooltipMultiline(),this._markForCheck()}_isTooltipMultiline(){let e=this._elementRef.nativeElement.getBoundingClientRect();return e.height>Gn&&e.width>=zn}_handleAnimationEnd({animationName:e}){(e===this._showAnimation||e===this._hideAnimation)&&this._finalizeAnimation(e===this._showAnimation)}_cancelPendingAnimations(){this._showTimeoutId!=null&&clearTimeout(this._showTimeoutId),this._hideTimeoutId!=null&&clearTimeout(this._hideTimeoutId),this._showTimeoutId=this._hideTimeoutId=void 0}_finalizeAnimation(e){e?this._closeOnInteraction=!0:this.isVisible()||this._onHide.next()}_toggleVisibility(e){let t=this._tooltip.nativeElement,n=this._showAnimation,o=this._hideAnimation;if(t.classList.remove(e?o:n),t.classList.add(e?n:o),this._isVisible!==e&&(this._isVisible=e,this._changeDetectorRef.markForCheck()),e&&!this._animationsDisabled&&typeof getComputedStyle==`function`){let r=getComputedStyle(t);(r.getPropertyValue(`animation-duration`)===`0s`||r.getPropertyValue(`animation-name`)===`none`)&&(this._animationsDisabled=!0)}e&&this._onShow(),this._animationsDisabled&&(t.classList.add(`_mat-animation-noopable`),this._finalizeAnimation(e))}static ɵfac=function(t){return new(t||i)};static ɵcmp=me$1({type:i,selectors:[[`mat-tooltip-component`]],viewQuery:function(t,n){if(t&1&&xd(Vn,7),t&2){let o;tg(o=ng())&&(n._tooltip=o.first)}},hostAttrs:[`aria-hidden`,`true`],hostBindings:function(t,n){t&1&&Qm(`mouseleave`,function(r){return n._handleMouseLeave(r)})},decls:4,vars:5,consts:[[`tooltip`,``],[1,`mdc-tooltip`,`mat-mdc-tooltip`,3,`animationend`],[1,`mat-mdc-tooltip-surface`,`mdc-tooltip__surface`]],template:function(t,n){t&1&&(It$1(0,`div`,1,0),Jm(`animationend`,function(r){return n._handleAnimationEnd(r)}),It$1(2,`div`,2),eI(3),Dt$1()()),t&2&&(Bo(n.tooltipClass),qe$1(`mdc-tooltip--multiline`,n._isMultiline),Cr(3),dg(n.message))},styles:[`.mat-mdc-tooltip {
  position: relative;
  transform: scale(0);
  display: inline-flex;
}
.mat-mdc-tooltip::before {
  content: "";
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  position: absolute;
}
.mat-mdc-tooltip-panel-below .mat-mdc-tooltip::before {
  top: -8px;
}
.mat-mdc-tooltip-panel-above .mat-mdc-tooltip::before {
  bottom: -8px;
}
.mat-mdc-tooltip-panel-right .mat-mdc-tooltip::before {
  left: -8px;
}
.mat-mdc-tooltip-panel-left .mat-mdc-tooltip::before {
  right: -8px;
}
.mat-mdc-tooltip._mat-animation-noopable {
  animation: none;
  transform: scale(1);
}

.mat-mdc-tooltip-surface {
  word-break: normal;
  overflow-wrap: anywhere;
  padding: 4px 8px;
  min-width: 40px;
  max-width: 200px;
  min-height: 24px;
  max-height: 40vh;
  box-sizing: border-box;
  overflow: hidden;
  text-align: center;
  will-change: transform, opacity;
  background-color: var(--%NS%mat-tooltip-container-color, var(--%NS%mat-sys-inverse-surface));
  color: var(--%NS%mat-tooltip-supporting-text-color, var(--%NS%mat-sys-inverse-on-surface));
  border-radius: var(--%NS%mat-tooltip-container-shape, var(--%NS%mat-sys-corner-extra-small));
  font-family: var(--%NS%mat-tooltip-supporting-text-font, var(--%NS%mat-sys-body-small-font));
  font-size: var(--%NS%mat-tooltip-supporting-text-size, var(--%NS%mat-sys-body-small-size));
  font-weight: var(--%NS%mat-tooltip-supporting-text-weight, var(--%NS%mat-sys-body-small-weight));
  line-height: var(--%NS%mat-tooltip-supporting-text-line-height, var(--%NS%mat-sys-body-small-line-height));
  letter-spacing: var(--%NS%mat-tooltip-supporting-text-tracking, var(--%NS%mat-sys-body-small-tracking));
}
.mat-mdc-tooltip-surface::before {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  border: 1px solid transparent;
  border-radius: inherit;
  content: "";
  pointer-events: none;
}
.mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: left;
}
[dir=rtl] .mdc-tooltip--multiline .mat-mdc-tooltip-surface {
  text-align: right;
}

.mat-mdc-tooltip-panel {
  line-height: normal;
}
.mat-mdc-tooltip-panel.mat-mdc-tooltip-panel-non-interactive {
  pointer-events: none;
}

@keyframes mat-mdc-tooltip-show {
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
}
@keyframes mat-mdc-tooltip-hide {
  0% {
    opacity: 1;
    transform: scale(1);
  }
  100% {
    opacity: 0;
    transform: scale(0.8);
  }
}
.mat-mdc-tooltip-show {
  animation: mat-mdc-tooltip-show 150ms cubic-bezier(0, 0, 0.2, 1) forwards;
}

.mat-mdc-tooltip-hide {
  animation: mat-mdc-tooltip-hide 75ms cubic-bezier(0.4, 0, 1, 1) forwards;
}
`],encapsulation:2})}return i})();var Ho=(()=>{class i{static ɵfac=function(t){return new(t||i)};static ɵmod=Q({type:i});static ɵinj=q({imports:[HD,_C,Ye,Eu]})}return i})();var zt=Symbol(``);function Ut(i){return new Proxy(i,{has(a,e){return!!this.get(a,e,void 0)},get(a,e){let t=Nr(a);return!Kn(t)||!(e in t)?(mr(a[e])&&a[e][zt]&&delete a[e],a[e]):(mr(a[e])||(Object.defineProperty(a,e,{value:hI(()=>a()[e]),configurable:!0}),a[e][zt]=!0),Ut(a[e]))}})}var $n=[WeakSet,WeakMap,Promise,Date,Error,RegExp,ArrayBuffer,DataView,Function];function Kn(i){if(i===null||typeof i!=`object`||Qn(i))return!1;let a=Object.getPrototypeOf(i);if(a===Object.prototype)return!0;for(;a&&a!==Object.prototype;){if($n.includes(a.constructor))return!1;a=Object.getPrototypeOf(a)}return a===Object.prototype}function Qn(i){return typeof i?.[Symbol.iterator]==`function`}var Jn=new WeakMap;var T=Symbol(``);function We(i,...a){let e=Nr(()=>$t(i)),t=a.reduce((r,c)=>x(x({},r),typeof c==`function`?c(r):c),e),n=i[T],o=Reflect.ownKeys(i[T]);for(let r of Reflect.ownKeys(t))if(o.includes(r)){let c=r;e[c]!==t[c]&&n[c].set(t[c])}Xn(i)}function $t(i){let a=i[T];return Reflect.ownKeys(i[T]).reduce((e,t)=>{let n=a[t]();return J(x({},e),{[t]:n})},{})}function Yn(i){return Jn.get(i[T])||[]}function Xn(i){let a=Yn(i);for(let e of a)Zn(i,e)}function Zn(i,a){Nr(()=>{a($t(i))})}function Kt(...i){let a=[...i],e=typeof a[0]==`function`?{}:a.shift(),t=a;return(()=>{class o{constructor(){let c=t.reduce((fe,on)=>on(fe),ei()),{stateSignals:X,props:tn,methods:nn,hooks:an}=c,Ge=x(x(x({},X),tn),nn);this[T]=c[T];for(let fe of Reflect.ownKeys(Ge))this[fe]=Ge[fe];let{onInit:ze,onDestroy:Ue}=an;ze&&ze(),Ue&&p(Ce).onDestroy(Ue)}static ɵfac=function(X){return new(X||o)};static ɵprov=L({token:o,factory:o.ɵfac,providedIn:e.providedIn||null})}return o})()}function ei(){return{[T]:{},stateSignals:{},props:{},methods:{},hooks:{}}}function Qt(i){return a=>{let e=x(x(x({[T]:a[T]},a.stateSignals),a.props),a.methods),t=typeof i==`function`?i(e):i,n=(o,r)=>r?()=>{o&&o(),r(e)}:o;return J(x({},a),{hooks:{onInit:n(a.hooks.onInit,t.onInit),onDestroy:n(a.hooks.onDestroy,t.onDestroy)}})}}function Jt(i){return a=>{let e=i(x(x(x({[T]:a[T]},a.stateSignals),a.props),a.methods));return J(x({},a),{methods:x(x({},a.methods),e)})}}function Yt(i){return a=>{let e=typeof i==`function`?i():i,t=Reflect.ownKeys(e),n=a[T],o={};for(let r of t)n[r]=mt(e[r]),o[r]=Ut(n[r]);return J(x({},a),{stateSignals:x(x({},a.stateSignals),o)})}}var Xt={html:[{id:`html-1`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is semantic HTML?`,answer:`Semantic HTML uses tags that describe their meaning rather than only their appearance — header, nav, main, article, section, aside and footer. It improves accessibility for screen readers and helps search engines understand the page structure, while also making the code easier to read for other developers.`,examples:[{title:`Semantic structure of a page`,code:`<body>
  <header><nav aria-label="Main">...</nav></header>
  <main>
    <article>
      <h1>Title</h1>
      <section><h2>Details</h2>...</section>
    </article>
    <aside>Related links</aside>
  </main>
  <footer>...</footer>
</body>`,explanation:`header/nav/main/article/section/aside/footer describe meaning, so screen readers and search engines get the structure for free.`}]},{id:`html-2`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between a div and a span?`,answer:`A div is a block-level container that takes the full available width and starts on a new line, while a span is an inline container that flows inside a line of text. Use a div to group larger layout blocks and a span to style or group a fragment of text without breaking the line.`,examples:[{title:`block vs inline vs span`,code:`<style>
  .box { width: 100px; height: 40px; background: #90caf9; }
  .tag  { background: #ffcc80; }
</style>

<div class="box"></div>   <!-- block: own line, full width -->
<span class="tag">A</span><span class="tag">B</span>  <!-- inline: flows in the line -->`,explanation:`div is block-level, so it breaks the line and stretches; spans sit side by side inside the surrounding text.`}]},{id:`html-3`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`When should I use a class instead of an id?`,answer:`An id must be unique on the page and is used when you need to identify a single element — for example as an anchor, or a CSS selector that definitely targets one node. A class can be reused across many elements, so if a style or behaviour applies to more than one element, prefer a class.`,examples:[{title:`id for one node, class for many`,code:`<style>
  #main-banner { background: gold; }   /* one element only */
  .chip { border-radius: 999px; }          /* reused everywhere */
</style>

<div id="main-banner">Sale</div>
<span class="chip">new</span>
<span class="chip">beta</span>`,explanation:`The id must be unique and is what fragment links (#main-banner) and JS lookups use; the class is the reusable hook.`}]},{id:`html-4`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do I make an image render well on different screen sizes?`,answer:`Let the image scale proportionally with max-width: 100% and height: auto, and provide several source variants using the srcset and sizes attributes so the browser picks the right file for the viewport. Reserve the space with width and height attributes to avoid layout shift while loading.`,examples:[{title:`Responsive image with srcset`,code:`<img
  src="hero-800.jpg"
  srcset="hero-400.jpg 400w, hero-800.jpg 800w, hero-1600.jpg 1600w"
  sizes="(max-width: 640px) 100vw, 50vw"
  width="1600" height="900"
  alt="Team reviewing a dashboard"
  style="max-width:100%;height:auto">`,explanation:`srcset+sizes let the browser pick the smallest file that still looks sharp; width/height reserve the box to avoid layout shift.`}]},{id:`html-5`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Why is the alt attribute important on images?`,answer:`The alt attribute provides a text alternative that is announced by screen readers and shown when the image fails to load. It is required when the image conveys information, and should describe the content or purpose. Decorative images can use an empty alt="", but hiding them without an attribute hurts accessibility.`,examples:[{title:`Meaningful vs decorative alt`,code:`<img src="chart.png" alt="Revenue grew from 2.1M to 3.4M in Q3">

<img src="divider.svg" alt="">   <!-- decorative: say nothing -->

<img src="icon.png">               <!-- no alt at all: screen readers read the filename -->`,explanation:`Describe the information for content images; use alt="" for decoration so it is skipped, and never omit alt for meaningful images.`}]},{id:`html-6`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do I show a block of code on a page?`,answer:`Wrap the lines in pre/code tags to keep whitespace and line breaks intact. Escape raw angle brackets as &lt; and &gt; inside the block, and add overflow-x: auto so long lines scroll horizontally instead of breaking the layout.`,examples:[{title:`Code block that survives long lines`,code:`<pre><code class="language-ts">const total = items
  .filter(i =&gt; i.active)
  .reduce((s, i) =&gt; s + i.price, 0);</code></pre>

<style>
  pre { overflow-x: auto; }
  code { font-family: ui-monospace, monospace; }
</style>`,explanation:`pre keeps whitespace and newlines, escaped &lt; &gt; stop the browser parsing tags, and overflow-x keeps one long line from breaking the layout.`}]},{id:`html-7`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between <article> and <section>?`,answer:`<article> is a self-contained composition that makes sense on its own - a blog post, a news story, a comment - and could be syndicated or reused independently. <section> is a thematic grouping of related content within a page, usually with a heading. Use section to break up a long page, article for content that stands alone; an article can contain sections.`,examples:[{title:`<article> vs <section>`,code:`<article>
  <h2>Blog Post</h2>
  <section>
    <h3>Intro</h3>
    <p>...</p>
  </section>
</article>`,explanation:`article is standalone/reusable; section groups related content with a heading.`}]},{id:`html-8`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do you correctly associate a <label> with a form control?`,answer:`Give the control an id and point the label's for attribute at it, or nest the control inside the label. The association means clicking the label focuses/activates the control and screen readers announce the label text. A placeholder attribute is not a substitute - it disappears when the user types and is poorly announced.`,examples:[{title:`Label association`,code:`<label for="email">Email</label>
<input id="email" type="email">

<!-- or nested -->
<label>Email <input type="email"></label>`,explanation:`Use for+id or nesting for accessibility and click-to-focus.`}]},{id:`html-9`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between async and defer on a <script> tag?`,answer:`Both load the script without blocking HTML parsing. defer downloads in parallel and executes once the document has been parsed, in order, right before DOMContentLoaded - reliable for scripts that touch the DOM. async downloads in parallel and executes as soon as it is ready, interrupting parsing and ignoring order - fine for analytics but unsafe for interdependent scripts.`,examples:[{title:`async vs defer`,code:`<!-- executes as soon as loaded, order not guaranteed -->
<script async src="analytics.js"><\/script>

<!-- executes after parsing, in order -->
<script defer src="vendor.js"><\/script>
<script defer src="app.js"><\/script>`,explanation:`defer preserves execution order and runs before DOMContentLoaded.`}]},{id:`html-10`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the viewport meta tag and why does it matter on mobile?`,answer:`<meta name='viewport' content='width=device-width, initial-scale=1'> tells the browser to render at the device width instead of a desktop-width virtual viewport. Without it, mobile browsers zoom out to fit a desktop layout, making text tiny and tap targets hard to hit. It is the HTML precondition for responsive CSS to work.`,examples:[{title:`Viewport meta`,code:`<meta name="viewport" content="width=device-width, initial-scale=1">`,explanation:`Ensures mobile renders at device width for responsive layouts.`}]},{id:`html-11`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between <strong>/<em> and <b>/<i>?`,answer:`<strong> and <em> carry meaning: strong implies importance (read as emphasis by screen readers, often bold), em adds stress emphasis (often italic). <b> and <i> are purely presentational - b is bold text, i is italic text - and pass no semantic meaning. Prefer the semantic pair and style them with CSS; reserve b/i for purely visual effects.`,examples:[{title:`Semantic vs presentational`,code:`<p>This is <strong>important</strong> and <em>emphasized</em>.</p>
<p>This is <b>bold</b> and <i>italic</i>.</p>`,explanation:`strong/em carry meaning; b/i are purely visual.`}]},{id:`html-12`,category:`html`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How does native browser form validation work and when would you disable it?`,answer:`Constraints like required, type='email', min/max length and the pattern attribute are validated by the browser: the form is blocked from submitting and the :invalid pseudo-class lets you style errors. Setting novalidate (or noValidate) on the form disables native bubbles so you can run your own validation - useful when you need consistent messaging or server-side rules.`,examples:[{title:`Form validation`,code:`<form novalidate (ngSubmit)="submit()">
  <input required type="email">
  <button>Submit</button>
</form>`,explanation:`novalidate disables native validation for custom error handling.`}]}],css:[{id:`css-1`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the CSS box model?`,answer:`Every element is rendered as a box made of four layers, from the inside out: content, padding, border and margin. Content holds the actual content, padding adds space between content and border, the border frames the box, and margin creates space between this box and its neighbours. box-sizing: border-box makes width and height include padding and border.`,examples:[{title:`Box model with content-box vs border-box`,code:`.card {
  width: 200px;
  padding: 20px;
  border: 5px solid #333;
  box-sizing: content-box;  /* total width = 250px */
}

*, *::before, *::after { box-sizing: border-box; }
/* now width:200px INCLUDES padding+border -> total stays 200px */`,explanation:`content-box measures only the content; border-box makes width/height include padding and border, which is why global resets set it.`}]},{id:`css-2`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between padding and margin?`,answer:`Padding is the space inside the element, between the content and the border. Margin is the space outside the element, between the border and neighbouring elements. Padding is always part of the element's background; margins collapse with adjacent margins.`,examples:[{title:`Padding is inside, margin is outside`,code:`.btn {
  padding: 8px 16px;   /* inside the border */
  margin: 12px;          /* between this and neighbours */
  border: 2px solid;
}`,explanation:`Padding grows the element and shows its background; margin separates elements and can collapse with an adjacent margin.`}]},{id:`css-3`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between block, inline and inline-block?`,answer:`Block elements start on a new line and fill the available width. Inline elements flow within a line of text and ignore width and height. Inline-block flows inline but respects width, height and vertical margins like a block, which makes it useful for grid-like layouts.`,examples:[{title:`block`,code:`.header { display: block; }  /* full width, own line */`,explanation:`The default for div, p, section - takes the available width and starts a new line.`},{title:`inline`,code:`.tag { display: inline; }   /* width/height ignored, stays in the line */`,explanation:`The default for span, a, strong - flows with the surrounding text.`},{title:`inline-block`,code:`.badge { display: inline-block; width: 80px; height: 24px; }`,explanation:`Flows inline but respects width, height and vertical margin - a building block for chip/button rows.`}]},{id:`css-4`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What do align-items and justify-content do in flexbox?`,answer:`justify-content controls the distribution of items along the main axis (the flex container's flex-direction). align-items controls alignment along the cross axis, which is perpendicular to the main axis. For a default row layout, justify-content is horizontal and align-items is vertical.`,examples:[{title:`Row vs column flexbox`,code:`.row  { display: flex; flex-direction: row;            justify-content: space-between; align-items: center; }
.col  { display: flex; flex-direction: column;         justify-content: space-between; align-items: stretch; }`,explanation:`justify-content works along flex-direction (main axis), align-items across it (cross axis) - swap the two when you switch direction.`}]},{id:`css-5`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do you center a block element horizontally?`,answer:`Give the element a width and set margin-inline: auto (or margin-left and margin-right to auto). The auto margins split the remaining space equally on both sides. Flexbox centers with display: flex and justify-content: center for a row of items.`,examples:[{title:`Centering with auto margins`,code:`.box { width: 300px; margin-inline: auto; }  /* splits leftover space evenly */`,explanation:`Works for a single block element with a known width.`},{title:`Centering with flexbox`,code:`.wrapper { display: flex; justify-content: center; align-items: center; height: 100vh; }
.centered { width: 300px; }`,explanation:`Centres both axes without knowing the size, and works for any number of children.`}]},{id:`css-6`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are specificity and the cascade, and where does !important fit in?`,answer:`The cascade decides which rule wins when selectors conflict; specificity ranks them by id (highest), then class/attribute/pseudo-class, then type selectors, and a style attribute beats all of those normal author rules. !important lifts an author declaration above every normal author rule, including the style attribute, which is why it is a code smell: the only thing that reliably beats it is another !important, so the source of a style becomes unpredictable. Prefer increasing specificity or changing the order and origin of the stylesheet instead.`,examples:[{title:`Specificity example`,code:`/* specificity: 0,0,1 */ p {}
/* 0,1,0 */ .note {}
/* 1,0,0 */ #main {}
/* an author !important also beats the style attribute, and can only be beaten by another !important */
.foo { color: red !important; }`,explanation:`Cascade + specificity decide; !important breaks the normal order, and the only escape from it is another !important.`}]},{id:`css-7`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are CSS custom properties (variables) and how are themes built with them?`,answer:`Custom properties are defined on a selector with --name and read with var(--name). They cascade and can be redefined on a themed container, which is how theming works: define --primary, --bg and --text on :root, then override them on a .dark or [data-theme='dark'] selector. Because they cascade, a component can read var(--primary) and automatically adapt to whichever theme is active.`,examples:[{title:`CSS variables for theming`,code:`:root {
  --bg: #fff;
  --text: #111;
}

[data-theme='dark'] {
  --bg: #111;
  --text: #fff;
}

body {
  background: var(--bg);
  color: var(--text);
}`,explanation:`Redefining on a container/theme selector cascades to all children.`}]},{id:`css-8`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between position: relative, absolute, fixed and sticky?`,answer:`relative offsets an element from its normal flow position without removing it from flow. absolute takes the element out of flow and positions it relative to the nearest positioned ancestor (a relative/absolute parent); without one, relative to the containing block. fixed positions it relative to the viewport, so it stays put while scrolling. sticky toggles between relative and fixed as the element crosses a scroll threshold - useful for section headers.`,examples:[{title:`Positioning`,code:`.parent { position: relative; height: 200px; }
.child-abs { position: absolute; top: 10px; right: 10px; }
.sticky { position: sticky; top: 0; }`,explanation:`absolute relative to nearest positioned ancestor; sticky toggles on scroll.`}]},{id:`css-9`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are responsive breakpoints and why is mobile-first preferable?`,answer:`Breakpoints are viewport widths where the layout changes, defined with media queries (@media (min-width: 768px)). Mobile-first means you write the base styles for small screens and layer on wider layouts with min-width queries, so narrow devices get less CSS and no override churn. Because min-width is additive, wide screens upgrade rather than narrow screens override.`,examples:[{title:`Mobile-first`,code:`/* base mobile */ .grid { display: block; }
/* tablet+ */ @media (min-width: 768px) { .grid { display: grid; grid-template-columns: 1fr 1fr; } }`,explanation:`min-width queries add layout as viewport grows.`}]},{id:`css-10`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between px, rem, em, % and vw/vh?`,answer:`px is a fixed unit; rem is relative to the root font-size (so 2rem scales with the user's base size and stays predictable); em is relative to the element's own font-size and compounds as it nests; % is relative to the parent's size for the same property; vw/vh are 1% of viewport width/height. Prefer rem for spacing and text so zoom and browser font settings work, and %/flex units for layout.`,examples:[{title:`Units`,code:`html { font-size: 16px; }
.card { padding: 1rem; /* 16px */ margin: 0.5em; /* relative to current font */ width: 50%; height: 50vh; }`,explanation:`rem predictable for spacing; em compounds; % parent-based; vh/vw viewport-based.`}]},{id:`css-11`,category:`css`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`When would you use CSS Grid and when Flexbox?`,answer:`Grid is two-dimensional - it sizes and positions items across explicit rows and columns, ideal for page layouts, card grids and dashboards. Flexbox is one-dimensional - it distributes items along a single axis, ideal for navbars, aligning rows, centering and wrapping lists. Modern usage: Grid for the big layout skeleton, Flexbox for everyday alignment inside cells; they compose, not compete.`,examples:[{title:`Grid vs Flexbox`,code:`.layout { display: grid; grid-template-columns: 200px 1fr; gap: 1rem; }
.nav { display: flex; gap: .5rem; justify-content: space-between; align-items: center; }`,explanation:`Grid 2D layout skeleton; Flexbox 1D alignment.`}]}],javascript:[{id:`js-1`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is hoisting in JavaScript, and how does it differ for var, let and const?`,answer:`Hoisting is the default behaviour where declarations are processed before any code runs, so the engine "knows" about them at the top of the scope. var declarations (and function declarations) are hoisted and initialised to undefined, so reading them before the line throws nothing - you get undefined. let and const are hoisted too but stay in the temporal dead zone until the declaration executes, so accessing them earlier throws a ReferenceError. Hoisting applies to the declaration, not the assignment.`,examples:[{title:`var vs let before declaration`,code:`console.log(a); // undefined
var a = 1;

console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 2;

console.log(c); // ReferenceError
const c = 3;`,explanation:`var is initialised to undefined at scope start; let/const live in the temporal dead zone until their declaration runs.`}]},{id:`js-2`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between var, let and const?`,answer:`var is function-scoped, hoisted, and can be redeclared - the source of most closure bugs in loops. let is block-scoped, hoisted but not initialised, and cannot be redeclared in the same block, so it is the default choice. const is also block-scoped and cannot be reassigned after initialisation, but note it does not make the value immutable - a const object can still have its properties changed.`,examples:[{title:`Loop scoping bug`,code:`for (var i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 3, 3, 3
for (let i = 0; i < 3; i++) setTimeout(() => console.log(i)); // 0, 1, 2`,explanation:`var shares one binding across the whole function; let creates a new binding per iteration.`},{title:`const is not deeply immutable`,code:`const user = { name: 'Ada' };
user.name = 'Grace'; // fine
user = { name: 'Lin' }; // TypeError: Assignment to constant variable`,explanation:`const freezes the binding, not the value inside it.`}]},{id:`js-3`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is a closure?`,answer:`A closure is the combination of a function with its lexical environment: an inner function keeps access to the variables of the scope where it was created, even after that outer function has returned. That is how private state, memoisation caches and event handlers that remember their context work.`,examples:[{title:`Counter with private state`,code:`function createCounter() {
  let count = 0;
  return {
    inc: () => ++count,
    get: () => count,
  };
}
const c = createCounter();
c.inc(); c.inc();
console.log(c.get()); // 2  (count is unreachable from outside)`,explanation:`count survives after createCounter returned because the returned functions captured its scope.`}]},{id:`js-4`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between null and undefined?`,answer:`undefined means a value has never been assigned - missing arguments, absent properties, uninitialised lets, and the return value of a function with no return. null is an explicit signal from the developer that there is intentionally no value. In practice: use undefined for absence by default, null to say "deliberately empty", and prefer ?? over || so 0 and empty string are not swallowed.`,examples:[{title:`?? vs ||`,code:`0 || 'fallback';   // 'fallback'  (0 is falsy)
0 ?? 'fallback';   // 0          (only null/undefined fall through)`,explanation:`|| treats every falsy value as missing; ?? only treats null and undefined as missing.`}]},{id:`js-5`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are arrow functions and how do they differ from function declarations?`,answer:`An arrow function is a compact anonymous function expression. Two differences matter: it has no own this (this is inherited lexically from where it was defined, so it cannot be used as a method or constructor) and no own arguments or new.target. It also cannot be hoisted as a declaration, and it has no prototype. Use arrows for callbacks; use function expressions when you need dynamic this or arguments.`,examples:[{title:`this in arrows vs methods`,code:`const obj = {
  name: 'app',
  regular: function () { return typeof this; }, // 'object' (this = obj)
  arrow: () => typeof this,                    // whatever this was where obj was created
};

const detached = obj.regular; // this = undefined in strict mode`,explanation:`Arrows capture this lexically, so detaching them changes nothing.`}]},{id:`js-6`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between a function and a method?`,answer:`A function is a standalone callable, usually declared at module scope and invoked by name. A method is a function that lives on an object and is invoked as obj.method(), so it receives the object as this. The same function object can be used either way - what changes is how it is called and therefore what this is. A standalone function that does not use this at all is better described as a plain function, not a method.`,examples:[{title:`Same function, two call styles`,code:`function greet() { return 'Hi ' + this.name; }
const user = { name: 'Ada', greet };
user.greet();      // 'Hi Ada'  (method - this = user)
const g = user.greet;
g();              // TypeError in strict mode (this = undefined)`,explanation:`A function becomes a method through its call site, which supplies this.`}]},{id:`js-7`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is event propagation, and what are the capture and bubble phases?`,answer:`DOM events travel through the tree in three phases. Capture goes from the root down to the target, letting ancestors inspect the event before it arrives. The target phase fires listeners registered on the target itself. Bubble goes back up from the target to the root, which is where most listeners run. addEventListener accepts a third argument - true registers in the capture phase, false (default) or omit registers in the bubble phase.`,examples:[{title:`Listening in each phase`,code:`document.addEventListener('click', log, true);  // capture: root first
button.addEventListener('click', log);      // target
panel.addEventListener('click', log);       // bubble: nearest ancestor first

function log(e) { console.log(e.eventPhase, e.currentTarget); }`,explanation:`The same handler can observe the event at three different points in its path.`}]},{id:`js-8`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between event.preventDefault() and event.stopPropagation()?`,answer:`preventDefault() cancels the default browser action for that event - following a link, submitting a form, checking a checkbox - but the event still travels to other listeners. stopPropagation() stops the event from reaching any further nodes, so ancestor and descendant handlers never run; the default action still happens unless you also call preventDefault(). stopImmediatePropagation() additionally prevents the remaining listeners on the same element.`,examples:[{title:`One is not the other`,code:`form.addEventListener('submit', (e) => {
  e.preventDefault();      // page does not reload
  save();
  // e.stopPropagation() would only stop the event going further up the DOM
});`,explanation:`preventDefault changes what the browser does; stopPropagation changes who else hears about it.`}]},{id:`js-9`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are the common array methods - map, filter, reduce, forEach - and when do you use each?`,answer:`forEach runs a side effect per element and returns undefined - never use it to build a new array. map returns a new array of the same length with each element transformed. filter returns a new array of only the elements that pass a test. reduce folds the array into one value (sum, group, object) and always returns an accumulator you must initialise. Prefer these over raw for loops when you only need a transformation; use .at(), .find(), .some(), .every() and .sort() for the other common cases.`,examples:[{title:`The four shapes`,code:`const nums = [1, 2, 3, 4];

nums.forEach(n => log(n));                  // side effect only
const doubled = nums.map(n => n * 2);      // [2, 4, 6, 8]
const evens = nums.filter(n => n % 2 === 0);// [2, 4]
const total = nums.reduce((acc, n) => acc + n, 0); // 10`,explanation:`Each operator has a distinct job; mixing them up usually means you wanted a different one.`},{title:`Grouping with reduce`,code:`const words = ['apple', 'avocado', 'banana'];
const byLetter = words.reduce((acc, w) => {
  (acc[w[0]] ||= []).push(w);
  return acc;
}, {});`,explanation:`reduce is the general-purpose fold - handy for grouping, counting and building lookups.`}]},{id:`js-10`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the spread operator, and how is it different from rest parameters?`,answer:`Spread (...) expands an iterable into individual elements or properties at the call site - used to copy arrays/objects and to pass an array as separate arguments. Rest parameters collect leftover arguments into an array, and rest in destructuring gathers the remaining properties into an object. They use the same three dots but sit in opposite positions: spread produces many values, rest collects many values into one.`,examples:[{title:`Both directions`,code:`const nums = [1, 2, 3];
const copy = [...nums, 4];                 // spread (produce)

function sum(...args) { return args.reduce((a, b) => a + b, 0); }
sum(...nums);                              // spread args + rest params

const { id, ...rest } = user;             // rest in destructuring (collect)`,explanation:`Spread spreads out, rest gathers in.`}]},{id:`js-11`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are Map, Set and WeakMap, and how do they differ from plain objects and arrays?`,answer:`Set holds unique values with fast has/add and preserves insertion order. Map holds key-value pairs with a typed API and reliable iteration, and unlike an object it accepts any value as a key and exposes size, keys(), values() and entries(). WeakMap is the non-enumerable, garbage-collectable variant of Map: keys must be objects and entries vanish when the key is unreachable, which is why it is used for private per-object caches. Use a Set for membership tests instead of indexOf on an array.`,examples:[{title:`Membership and lookup`,code:`const allowed = new Set(['html', 'css']);
allowed.has('css');            // true  (O(1) - array indexOf would be O(n))

const byId = new Map([[1, 'Ada'], [2, 'Lin']]);
byId.get(2);                     // 'Lin'  (keys need not be strings)
Object.keys(byId).length;       // 0 - Map data is not on the prototype`,explanation:`Collections give O(1) lookups and safe handling of keys that objects cannot express.`},{title:`WeakMap for private per-object state`,code:`const meta = new WeakMap();
function tag(node) { meta.set(node, { visits: 0 }); }
function visits(node) { return meta.get(node)?.visits ?? 0; }`,explanation:`Because the keys are objects, entries are collected once the nodes become unreachable.`}]},{id:`js-12`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Why is JavaScript single-threaded, and how can it still handle concurrent work?`,answer:`One thread plus one synchronous call stack means code cannot interleave mid-statement, so you never get data races on shared memory - which is why it is safe by default. Concurrency comes from the event loop: the stack runs to completion, then the microtask queue (promise callbacks) is drained, then one macrotask (timers, I/O callbacks) is processed. I/O is delegated to the browser or Node, so while a request is in flight the main thread is free. That is also why a long synchronous loop freezes the UI - and why heavy work goes to a Web Worker.`,examples:[{title:`Order of execution`,code:`console.log('1 sync');
setTimeout(() => console.log('4 macrotask'), 0);
Promise.resolve().then(() => console.log('3 microtask'));
console.log('2 sync');
// 1 sync, 2 sync, 3 microtask, 4 macrotask`,explanation:`All synchronous code runs first, then microtasks, then the next macrotask.`}]},{id:`js-13`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the prototype chain?`,answer:`Every JavaScript object has an internal [[Prototype]] link, and property lookup walks that chain until it hits null. Functions inherit from Function.prototype, arrays from Array.prototype, and any object can be linked to your own object so instances share behaviour - that is how "inheritance" works in JavaScript, through delegation rather than copying. Object.create(proto) sets the link directly, and class syntax is sugar over the same mechanism.`,examples:[{title:`Manual delegation`,code:`const animal = { speaks() { return 'generic sound'; } };
const dog = Object.create(animal);
dog.name = 'Rex';

dog.speaks();                 // 'generic sound' (found on the prototype)
Object.hasOwn(dog, 'speaks');// false
'speaks' in dog;              // true  (walks the chain)`,explanation:`Properties are looked up along the chain, so shared behaviour lives on one shared object.`}]},{id:`js-14`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What do call, apply and bind do?`,answer:`All three change what this refers to when a function is invoked. call invokes the function immediately with the given this and arguments listed individually. apply invokes it immediately with an array-like list of arguments. bind returns a new function with this permanently bound and arguments partially applied - which is how you keep a handler working when you pass it to addEventListener.`,examples:[{title:`Invocation styles`,code:`function intro(greeting, mark) { return \`\${greeting} \${this.name}\${mark}\`; }
const user = { name: 'Ada' };

intro.call(user, 'Hi', '!');      // 'Hi Ada!'
intro.apply(user, ['Hi', '!']);   // 'Hi Ada!'
const bound = intro.bind(user, 'Hi');
bound('?');                        // 'Hi Ada?'`,explanation:`call/apply run now; bind produces a reusable function with this fixed.`}]},{id:`js-15`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What does use strict do?`,answer:`It opts a script or function into strict mode, which removes the sloppy-mode escape hatches: undeclared assignments throw instead of creating a global, this inside a plain function call is undefined rather than the global object, duplicate parameters are rejected, and writes to non-writable properties throw instead of failing silently. Modules and class bodies are always strict, so bundler-based Angular code is strict whether you ask for it or not.`,examples:[{title:`Errors instead of silent globals`,code:`'use strict';
undeclared = 1;       // ReferenceError (sloppy mode would create window.undeclared)

function f() { return this; }
f();                    // undefined (sloppy mode: globalThis)`,explanation:`Strict mode converts silent misbehaviour into immediate errors.`}]},{id:`js-16`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are the ES6+ features worth knowing as an Angular developer?`,answer:`The ones you meet daily: let/const with block scoping, arrow functions, template literals, destructuring with defaults and rest, spread for copying, classes, ES modules with import/export, and the null-handling operators ?. and ??. Map/Set replaced the need for most object-as-dictionary hacks, and Object.entries/values/fromEntries make transformation easy. Later editions add optional catch binding, logical assignment (??=, ||=) and Array.prototype.at for negative indexing.`,examples:[{title:`Everyday uses`,code:`const state = { user: { name: 'Ada' }, tags: ['a'] };
const { user: { name }, ...rest } = state;  // destructuring + rest
const label = \`Hi \${name ?? 'guest'}\`;       // template literal + nullish coalescing
const count = state.tags?.length;            // optional chaining`,explanation:`These are the features that remove most defensive coding.`}]},{id:`js-17`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is Object.assign and how does it differ from object spread?`,answer:`Object.assign(target, ...sources) copies own enumerable properties from the sources onto the target and returns that same mutated object. Spreading ({ ...source }) builds a new object instead. They copy the same properties - including symbol-keyed ones - so the only real difference is the target: spread cannot mutate a shared object by accident. Prefer spread in application code. Both are shallow - nested objects are still shared references.`,examples:[{title:`Mutate vs copy`,code:`const defaults = { retries: 3 };
const a = Object.assign({}, defaults, { retries: 5 });  // new object
const b = Object.assign(defaults, { retries: 5 });       // mutates defaults!

const c = { ...defaults, retries: 5 };                   // new object`,explanation:`Prefer spread - Object.assign on a shared defaults object edits it for everyone.`}]},{id:`js-18`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do you prevent an object from being modified?`,answer:`Object.freeze seals an object shallowly: existing properties cannot be reassigned or deleted, and new ones cannot be added. Nested objects are not affected, so for deep protection you freeze recursively. Object.seal allows modification but blocks adding and deleting. Reassigning an existing non-writable property throws a TypeError in strict mode and fails silently in sloppy mode. Freeze also reaches internal slots: a frozen array cannot be pushed to or sorted, because every one of those operations has to write a property on an object that is no longer extensible - that throws in both modes. What freeze never reaches is anything the object references, which is why the recursion above is the part people forget.`,examples:[{title:`Shallow vs deep freeze`,code:`const config = Object.freeze({ url: '/api', nested: { retries: 3 } });
config.url = '/x';        // TypeError in strict mode, ignored otherwise
config.nested.retries = 9;// allowed - freeze is only one level deep

const deep = Object.freeze({ nested: Object.freeze({ retries: 3 }) });`,explanation:`Freeze walks one level; nested objects must be frozen explicitly.`}]},{id:`js-19`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is type coercion in JavaScript?`,answer:`JavaScript implicitly converts values between types when an operator or context demands it, which is why "4" - 2 is 2 but "4" + 2 is "42" - addition concatenates when either side is a string. Comparisons use abstract equality loosely: == coerces types, while === compares type and value. Coercion produces the infamous NaN whenever a string cannot be parsed as a number. Prefer explicit conversion - Number(), String(), Boolean() - and always === over ==.`,examples:[{title:`Coercion surprises`,code:`'4' - 2;        // 2      (numeric)
'4' + 2;        // '42'    (string concat)
'4' == 4;       // true    (loose)
'4' === 4;      // false   (strict)
3 + undefined; // NaN`,explanation:`Arithmetic coerces to numbers, + with a string concatenates, and == coerces while === does not.`}]},{id:`js-20`,category:`javascript`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do you find the minimum and maximum value in an array?`,answer:`Spread the array into Math.min or Math.max. Beware the argument limit: Math.min(...arr) throws a RangeError for arrays with roughly a hundred thousand elements or more, and it also fails on an empty array (Infinity for min, -Infinity for max). For large arrays reduce the values instead, and decide what an empty list should mean for your domain.`,examples:[{title:`Spread, reduce and the empty case`,code:`const nums = [1, -9, -7, 6];
Math.min(...nums);                    // -9

// safe for huge arrays
const min = nums.reduce((m, n) => (n < m ? n : m), Infinity); // -9

Math.min(...[]);                    // Infinity (often not what you want)`,explanation:`Spread is clearest for normal data; reduce avoids the argument-count limit.`}]}],angular:[{id:`angular-1`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is a component in Angular?`,answer:`A component is an Angular building block that combines an HTML template, styles and a TypeScript class that holds the logic and state. Components are standalone by default in modern Angular and import the dependencies they use directly in their imports array.`,examples:[{title:`A standalone component`,code:`import { Component, inject } from '@angular/core';
import { UserCard } from './user-card';

@Component({
  selector: 'app-user-list',
  imports: [UserCard],
  template: \`@for (u of users(); track u.id) { <app-user-card [user]="u" /> }\`,
})
export class UserList {
  private readonly store = inject(UserStore);
  readonly users = computed(() => this.store.active());
}`,explanation:`Template, styles and class in one place; everything it needs is listed in imports.`}]},{id:`angular-2`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is data binding in Angular?`,answer:`Data binding connects the component class to the template. Interpolation {{ }} and property binding [property] flow from class to view, event binding (event) flows from view to class, and two-way binding [(ngModel)] or model() flows both ways.`,examples:[{title:`Interpolation`,code:`<h1>Hello {{ user().name }}</h1>`,explanation:`Class -> view, rendered as text (escaped).`},{title:`Property binding`,code:`<img [src]="avatarUrl()" [disabled]="isPending()" />`,explanation:`Sets a DOM/component property instead of an attribute.`},{title:`Event binding`,code:`<button (click)="save()">Save</button>`,explanation:`View -> class: the handler receives a native or $event value.`},{title:`Two-way binding`,code:`<input [ngModel]="name()" (ngModelChange)="name.set($event)" />`,explanation:`Expands to a property binding plus an event binding; with signals you usually write both sides explicitly.`}]},{id:`angular-3`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is an Angular directive?`,answer:`A directive is a class that extends HTML behaviour — structure or presentation — without an associated template. Attribute directives change an element's appearance or behaviour, while structural directives add, remove or repeat elements in the DOM - *ngIf and *ngFor are the classic ones, replaced in modern templates by the built-in @if / @for control-flow blocks.`,examples:[{title:`Component directive`,code:`<app-header [title]="pageTitle()" />`,explanation:`A component is a directive with a template - it adds a new element to the DOM.`},{title:`Structural directive`,code:`@if (isLoggedIn()) { <app-admin /> }`,explanation:`Structural directives add or remove DOM (@if/@for/@switch are built-ins now).`},{title:`Attribute directive`,code:`<button matButton appAutofocus>Go</button>`,explanation:`Attribute directives change behaviour or appearance of the host element without adding markup.`}]},{id:`angular-4`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is dependency injection?`,answer:`Dependency injection is how Angular provides the services a component or class needs. A class declares its dependencies in its constructor or with inject(), and Angular's injector resolves them. Services marked providedIn: 'root' are app-wide singletons.`,examples:[{title:`Root-provided service`,code:`@Injectable({ providedIn: 'root' })
export class ApiClient {
  private readonly http = inject(HttpClient);
}

// anywhere: private readonly api = inject(ApiClient);`,explanation:`One instance for the whole app - inject it without listing it anywhere.`},{title:`Component-provided service`,code:`@Component({
  providers: [DraftForm],
})
export class Editor {}`,explanation:`A new instance per component, which is how you keep state from leaking between component instances.`}]},{id:`angular-5`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between @Input and @Output, and how do the signal APIs change it?`,answer:`@Input lets a parent pass data down into a child, and @Output lets the child emit an event upward - together they are the two halves of component communication. In modern Angular you use the signal APIs rather than the decorators: input() / input.required() on the way in, output() on the way out, and model() when the value both flows down and can be written back up by the child. The behavioural difference is that signal inputs and outputs are reactive - a computed() can derive from them and change detection is notified when they change - whereas decorator inputs are plain properties that you read imperatively.`,examples:[{title:`Input into a child`,code:`id = input.required<string>();
label = input('Untitled');`,explanation:`Parent passes data down: <app-tag [id]="tagId" />`},{title:`Output from a child`,code:`removed = output<string>();
// <app-tag (removed)="onRemoved($event)" />`,explanation:`Child emits upward so the parent can react - the other half of component communication.`}]},{id:`angular-6`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`A user types in a search box and the whole page feels janky. How do you isolate the cause and fix it?`,answer:`Profile first: use Angular DevTools to spot components running many change-detection cycles and the Chrome performance tab to confirm what is slow. Common fixes: debounceTime(300) + switchMap on the search stream so every keystroke does not hit the API, move heavy computations out of templates into pipes or a computed, add trackBy, use ChangeDetectionStrategy.OnPush on the growing list, and wrap high-frequency handlers like scroll in runOutsideAngular(ngZone). Fix the root cause rather than sprinkling optimizations.`,examples:[{title:`Debounce + cancel + isolate`,code:`// template
<input (input)="onInput($event)" />
@for (r of results(); track r.id) { <p>{{ r.name }}</p> }

@Component({ changeDetection: ChangeDetectionStrategy.OnPush })
export class Search {
  private readonly api = inject(CustomerApi);
  private readonly term$ = new Subject<string>();

  // toSignal needs an injection context, so it belongs in a field
  // initializer - not inside the event handler.
  readonly results = toSignal(
    this.term$.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap(t => this.api.search(t)),   // cancels the previous request
    ),
    { initialValue: [] as Customer[] },
  );

  onInput(e: Event): void {
    this.term$.next((e.target as HTMLInputElement).value);
  }
}`,explanation:`Fix the cause: one request per settled term, stale responses dropped, and the list re-renders on its own dependency only.`}]},{id:`angular-8`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`A sidebar filter and a dashboard list are unrelated components but must stay in sync. How do you implement this?`,answer:`Put the shared state in a service: a signal() (or BehaviorSubject if you need an async stream) with read/computed selectors. Keep components dumb - the list reads the signal and re-renders. For parent-to-child data use @Input/@Output; for unrelated components a shared service is the standard answer, and signals today remove the subscription boilerplate the BehaviorSubject approach needed.`,examples:[{title:`Shared service with signals`,code:`@Injectable({ providedIn: 'root' })
export class FilterStore {
  private readonly role = signal<UserRole | 'all'>('all');
  readonly users = computed(() => {
    const r = this.role();
    return r === 'all' ? this.all() : this.all().filter(u => u.role === r);
  });
  setRole(r: UserRole | 'all') { this.role.set(r); }
}`,explanation:`The sidebar writes, the list reads - no parent, no Input/Output plumbing, and derived data stays consistent.`}]},{id:`angular-9`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`The user clicks 'Save' rapidly while a POST is in flight. How do you prevent duplicate requests?`,answer:`Use exhaustMap on the click stream: it ignores new emissions while an inner request is running and only accepts the next click after completion. That matches the intent - ignore extra clicks until the request settles. switchMap would cancel the in-flight request, which is wrong for a save; debounceTime would just delay the first click.`,examples:[{title:`Ignore clicks while saving`,code:`private readonly save$ = new Subject<void>();
readonly saving = signal(false);

constructor() {
  // one subscription for the lifetime of the component. Piping inside save()
  // would build a new subscription per click and defeat exhaustMap entirely.
  this.save$.pipe(
    exhaustMap(() => {
      this.saving.set(true);
      return this.api.save(this.form.value).pipe(
        finalize(() => this.saving.set(false)),
      );
    }),
  ).subscribe();
}

save(): void { this.save$.next(); }`,explanation:`exhaustMap drops emissions while the inner request is in flight, so one click means one request - but only because the subscription is created once.`}]},{id:`angular-10`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`A dashboard must show data from three APIs, but only when all three have arrived, and it must update if any of them changes later. What operator do you use and why?`,answer:`combineLatest: it emits only once all sources have emitted at least once and keeps emitting whenever any source changes afterwards - exactly 'render once all three exist, update on any change'. forkJoin would be wrong because it emits once and completes, so later changes never re-render. If you only needed the first combined value, forkJoin would be fine.`,examples:[{title:`combineLatest vs forkJoin`,code:`// live: re-emit when any source changes after all have arrived
combineLatest([profile$, prefs$, permissions$]).subscribe(render);

// one-shot: last value of each, only after all complete
forkJoin([a$, b$]).subscribe(renderOnce);`,explanation:`combineLatest fits 'render when everything is present and keep updating'; forkJoin fits 'wait for a batch of requests'.`}]},{id:`angular-11`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`There is a memory leak in production - memory grows steadily as users navigate. How do you track it down?`,answer:`Reproduce in dev with the browser heap snapshot: take two snapshots around a navigation cycle and diff them to find detached DOM nodes or lingering references. Suspect manual subscribe() calls that were never unsubscribed, timers, and addEventListener. Fix by using the async pipe or takeUntilDestroyed(), and centralizing subscriptions so cleanup is a convention, not a discipline.`,examples:[{title:`Finding and fixing the leak`,code:`// leaking
ngOnInit() { this.timer$.subscribe(() => this.tick()); }

// fixed - cleanup tied to the destroy ref
private readonly destroyRef = inject(DestroyRef);

ngOnInit() {
  this.timer$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe(() => this.tick());
}`,explanation:`In the heap snapshot, detached DOM retained by a live subscription is the giveaway; takeUntilDestroyed (or the async pipe) makes cleanup automatic.`}]},{id:`angular-12`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`You need a reusable form input that works both with ngModel and inside a reactive form. How do you build it?`,answer:`Implement ControlValueAccessor on a component: writeValue populates the control, registerOnChange/registerOnTouched wire the UI to the form model, and setDisabledState handles enable/disable. Then it can be used with [(ngModel)] or [formControl]/formControlName exactly like a native input.`,examples:[{title:`ControlValueAccessor`,code:`@Component({
  selector: 'app-rating',
  providers: [{ provide: NG_VALUE_ACCESSOR, useExisting: forwardRef(() => Rating), multi: true }],
})
export class Rating implements ControlValueAccessor {
  value: number | null = null;
  disabled = false;
  private onChange: (v: number | null) => void = () => {};
  private onTouched: () => void = () => {};

  writeValue(value: number | null): void { this.value = value; }
  registerOnChange(fn: (v: number | null) => void): void { this.onChange = fn; }
  registerOnTouched(fn: () => void): void { this.onTouched = fn; }
  setDisabledState(isDisabled: boolean): void { this.disabled = isDisabled; }
}`,explanation:`Implementing the four methods makes the component bindable by both ngModel and formControlName. The signatures accept null because the forms API calls them with null, for example on reset.`},{title:`Using it`,code:`<app-rating [(ngModel)]="score" />

<form [formGroup]="form">
  <app-rating formControlName="score" />
</form>`,explanation:`One component, both form APIs, because it speaks the CVA contract.`}]},{id:`angular-13`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`A stepper form is spread across multiple components but must behave as one form. How do you keep it consistent?`,answer:`Own a single FormGroup instance in a parent component and pass it down (@Input) or expose it from a shared service provided at the parent scope. Each step component binds its controls to the same instance via formControlName/formGroup, and the stepper reads validity from one place. A service scoped to the feature route (rather than root) avoids leaking state across navigation.`,examples:[{title:`One FormGroup, several steps`,code:`// stepper (parent) owns the group
private readonly fb = inject(FormBuilder);

readonly form = this.fb.group({
  address: this.fb.group({ city: ['', Validators.required] }),
  payment: this.fb.group({ card: ['', Validators.required] }),
});

// each step child
@Component({ selector: 'app-address-step' })
export class AddressStep {
  form = input.required<FormGroup>();   // passed, not duplicated
}`,explanation:`The step components never own form state - they render and validate parts of the parent's instance.`},{title:`Scoped service alternative`,code:`@Component({ providers: [CheckoutForm] })   // one instance per checkout flow`,explanation:`Providing the form on the parent (or a route-scoped service) avoids stale state surviving navigation.`}]},{id:`angular-14`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`How do you implement role-based access control - restricting routes by role and hiding UI elements?`,answer:`Two layers: a route guard canActivateFn checks whether the logged-in role may enter a route (and redirects otherwise), while a structural directive (like *appHasRole) conditionally renders UI for a role. Keep the user's roles in a shared service/signal read by both. Never rely on hiding UI alone - guards must also enforce the route, and the server must enforce authorization anyway.`,examples:[{title:`Route guard + structural directive`,code:`// guard
canMatch: [() => {
  const auth = inject(AuthService);
  return auth.roles().includes('admin') ? true : inject(Router).createUrlTree(['/login']);
}]

// directive
@Directive({ selector: '[appHasRole]' })
export class HasRole {
  roles = input.required<string[]>();
  private readonly tpl = inject(TemplateRef<unknown>);
  private readonly vcr = inject(ViewContainerRef);
  // render the embedded view only when the current user has the role
}`,explanation:`The guard protects the route and (with canMatch) the download; the directive only shapes the UI. The backend must still authorise.`}]},{id:`angular-15`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`Two routes must be lazy-loaded, but only admin users may reach the Reports route. How do you set that up?`,answer:`Use a guard that checks the user's role from the auth store before entry. Prefer canMatch (which runs before the module is loaded) over canActivate only, so the lazy Reports bundle is never downloaded for unauthorized users. Pair it with loadComponent routing so admin access and code-splitting both hold.`,examples:[{title:`canMatch keeps the bundle private`,code:`{ path: 'reports',
  canMatch: [adminGuard],   // runs BEFORE the chunk is fetched
  loadComponent: () => import('./reports/reports').then(c => c.Reports) }`,explanation:`canActivate checks after the route is matched (chunk already requested); canMatch blocks earlier, so unauthorised users never download the code.`}]},{id:`angular-16`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between the constructor and ngOnInit?`,answer:`The constructor runs when the component instance is created, before inputs are resolved - Angular best practice is to use it only for dependency injection and minimal setup. ngOnInit runs after the first ngOnChanges, once the component's inputs are set, so it is the right place to read input values and kick off initialization logic or long-lived subscriptions.`,examples:[{title:`Constructor vs ngOnInit`,code:`constructor(private svc: UserService) {}

ngOnInit(): void {
  // inputs are resolved here
  this.users = this.svc.list(this.id);
}`,explanation:`DI only in constructor; initialization that reads inputs in ngOnInit.`}]},{id:`angular-17`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the async pipe and how does it prevent memory leaks?`,answer:`The async pipe subscribes to an Observable in the template ({{ users$ | async }}) and unsubscribes automatically when the component is destroyed. That removes the need for a manual subscription and the classic leak where a component subscribes in ngOnInit but never unsubscribes in ngOnDestroy. It pairs naturally with OnPush change detection.`,examples:[{title:`async pipe leak prevention`,code:`<ul>
  @for (u of users$ | async; track u.id) { <li>{{ u.name }}</li> }
</ul>`,explanation:`async pipe auto-unsubscribes when component is destroyed.`}]},{id:`angular-18`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are route guards and which ones do you know?`,answer:`Route guards decide whether navigation proceeds. canActivate/canActivateFn checks a route's entry once matched, canMatch blocks the route from even being considered (running before module load - best for lazy security), and canDeactivate asks before leaving a dirty form. They are functions or services returning boolean, an observable/promise, or a redirect URL tree.`,examples:[{title:`Route guards`,code:`export const adminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  return auth.role() === 'admin' ? true : inject(Router).createUrlTree(['/']);
};`,explanation:`canActivateFn/canMatch gate navigation/loads.`}]},{id:`angular-19`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is an HTTP interceptor and what are typical use cases?`,answer:`An interceptor sits in the request/response pipeline and lets you transform a request or observe a response centrally, instead of repeating logic per call. Common uses: attaching an auth token header, global error handling and retries, logging, and loading indicators. In modern Angular it is implemented as a function returning next.handle(req) in the chain.`,examples:[{title:`HTTP interceptor (function form)`,code:`import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authReq = req.clone({ setHeaders: { Authorization: 'Bearer token' } });
  return next(authReq);
};`,explanation:`Modern functional interceptor: clone and chain with next.`}]},{id:`angular-20`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is a pipe and the difference between pure and impure pipes?`,answer:`A pipe transforms a value in the template ({{ value | date: 'short' }}). A pure pipe's transform runs only when its input reference changes, so Angular skips re-running it on every change detection pass - the default and the fast path. An impure pipe (pure: false) runs on every change detection cycle, needed for stateful transforms, but it costs performance, so make it the exception.`,examples:[{title:`Pure vs impure pipe`,code:`@Pipe({ name: 'filter', pure: false })
export class FilterPipe implements PipeTransform {
  transform(list: any[], q: string) { /* runs every CD cycle */ return ...; }
}`,explanation:`pure (default) runs on reference changes only; impure runs every change detection cycle.`}]},{id:`angular-21`,category:`angular`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is content projection (ng-content)?`,answer:`Content projection lets a parent component pass markup into a child's template via <ng-content>. In a card or modal component the child defines named slots with <ng-content select="[slot='header']"> and the parent fills them by putting slot="header" on its content, which makes the component reusable without prop-drilling markup. Multi-slot projection uses the select attribute; a catch-all ng-content without select grabs everything else.`,examples:[{title:`Multi-slot content projection`,code:`<app-card>
  <h2 slot="header">Title</h2>
  <p>Body content</p>
  <button slot="footer">OK</button>
</app-card>

<!-- card.html -->
<header><ng-content select="[slot='header']"></ng-content></header>
<section><ng-content></ng-content></section>
<footer><ng-content select="[slot='footer']"></ng-content></footer>`,explanation:`select targets named slots; unnamed ng-content is the default.`}]},{id:`angular-22`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isRead:!1,question:`A username field must show "already taken" while the user types, using a backend check. How do you implement it?`,answer:`Reach for an AsyncValidator, not a manual subscribe. Angular runs async validators through the same FormControl status pipeline as sync validators, so the control goes PENDING while the check is in flight and then VALID or INVALID - and you wire the disabled state yourself from form.pending, Angular will not do that for you. Two rules matter. Debounce before hitting the network, with a timer inside the validator. And skip re-checking an unchanged value - but note that distinctUntilChanged() belongs on the valueChanges stream that drives the check, not inside the validator, because Angular re-runs the validator as a fresh subscription on every value change and there is no previous emission for it to compare against. Always catchError inside the validator and return null - a network failure is not the user's fault, so it must not mark the field invalid and block submit.`,examples:[{title:`Async validator factory (debounced + failure-tolerant)`,code:`export function usernameAvailable(api: UserApi): AsyncValidatorFn {
  return (control) => {
    const value = (control.value ?? '').trim();
    if (value.length < 3) return of(null);

    return timer(300).pipe(              // debounce: one request per pause
      switchMap(() => api.checkUsername(value)),
      map(taken => (taken ? { usernameTaken: true } : null)),
      catchError(() => of(null)),        // network error != invalid value
      first(),
    );
  };
}`,explanation:`The factory takes the service as an argument because inject() is not available inside the function the validator returns. Dedupe the value upstream on valueChanges with distinctUntilChanged() - each validator run is a fresh subscription, so it has nothing to compare against.`},{title:`Wiring it up and showing the three states`,code:`username = new FormControl('', {
  nonNullable: true,
  validators: [Validators.required],
  asyncValidators: [usernameAvailable(inject(UserApi))],
});

// template
@if (username.pending) { <span>Checking...</span> }
@if (username.hasError('usernameTaken')) { <span>Already taken</span> }

// <button [disabled]="username.invalid || username.pending">Save</button>`,explanation:`pending covers the in-flight window, invalid covers a real backend rejection, and the submit button stays disabled while either is true - that last part is your binding, not Angular's behaviour.`}]},{id:`angular-24`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isRead:!1,question:`A component loads its data in ngOnInit from a service. How do you test that the data actually renders?`,answer:`Configure the test with a fake for the dependency, not the real HTTP stack. Provide a spy object with TestBed, assert the component called it, then trigger change detection and assert on the rendered DOM. Use signals plus whenStable rather than relying on a timer, so the test is deterministic. Signal inputs must be set through componentRef.setInput, because assigning to the input field directly bypasses the signal. Also test the failure path - the empty and error states are where component bugs hide.`,examples:[{title:`Test with a spy for the service`,code:`const api = jasmine.createSpyObj<UserApi>('UserApi', ['getUsers']);

TestBed.configureTestingModule({
  imports: [UserList],
  providers: [{ provide: UserApi, useValue: api }],
});

api.getUsers.and.returnValue(of([{ id: 1, name: 'Ada' }]));

const fixture = TestBed.createComponent(UserList);
await fixture.whenStable();
fixture.detectChanges();

expect(api.getUsers).toHaveBeenCalled();
expect(fixture.nativeElement.textContent).toContain('Ada');`,explanation:`No HTTP, no async pipe waiting games - the fake returns a synchronous observable.`},{title:`Signal inputs and the error path`,code:`api.getUsers.and.returnValue(throwError(() => new HttpErrorResponse({ status: 500 })));

const fixture = TestBed.createComponent(UserList);
await fixture.whenStable();
fixture.detectChanges();

expect(fixture.nativeElement.textContent).toContain('Could not load users');

// signal inputs must go through setInput
fixture.componentRef.setInput('role', 'admin');`,explanation:`Asserting the empty/error state catches the bugs that only appear in production.`}]},{id:`angular-25`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`Forms must be generated at runtime from a JSON schema sent by the backend. How do you build them?`,answer:`Build the FormGroup imperatively from the schema and drive the template from the same schema, so adding a field needs no component change. Walk the schema, addControl per field, attach validators from declarative hints (required, minLength, email), and use nonNullable controls for inputs so you get strings and numbers instead of null unions. For nested objects recurse into child FormGroups; for anything with conditional visibility or cross-field rules, hand off to a library such as Formly or Angular's signal forms instead of reinventing the DSL. Always cache the generated group when the schema is static, otherwise you recreate controls on every detection cycle.`,examples:[{title:`Schema to FormGroup`,code:`interface FieldSchema {
  name: string; label: string;
  type: 'text' | 'number' | 'email';
  required?: boolean;
  minLength?: number;
  children?: FieldSchema[];
}

function toControls(schema: FieldSchema[]): Record<string, AbstractControl> {
  return Object.fromEntries(schema.map(f => {
    const validators = f.required ? [Validators.required] : [];
    if (f.minLength) validators.push(Validators.minLength(f.minLength));

    const control: AbstractControl = f.children
      ? new FormGroup(toControls(f.children))
      : new FormControl(f.type === 'number' ? 0 : '', { validators, nonNullable: true });

    return [f.name, control];
  }));
}

form = new FormGroup(toControls(schema));`,explanation:`Validators come from data, so the schema is the single source of truth for validation.`},{title:`Rendering from the same schema`,code:`<form [formGroup]="form">
  @for (f of schema; track f.name) {
    <label [for]="f.name">{{ f.label }}</label>
    <input [id]="f.name" [formControlName]="f.name" />
    @if (form.controls[f.name].hasError('required')) {
      <small>{{ f.label }} is required</small>
    }
  }
  <button [disabled]="form.invalid">Save</button>
</form>`,explanation:`The template never names a specific field, so backend schema changes ship without code.`}]},{id:`angular-26`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`How would you structure a multi-role enterprise Angular app so it stays maintainable as features keep being added?`,answer:`Use three layers with a strict dependency direction: core holds singletons and app-wide wiring (interceptors, guards, app config, root services), shared holds reusable presentation (UI components, pipes, directives) that depend only on core, and features holds the domain code - one folder per role or bounded context, each with its own components, routes and models. Lazy-load each feature and gate it with a role guard. The rule that keeps it from rotting is that features must not import from other features; when two features need the same thing it moves to shared or into a small publishable library. Prefer explicit imports over barrel files, because barrels pull unrelated code into every chunk and blur the dependency graph.`,examples:[{title:`Folder structure`,code:`src/app/
  core/            # providedIn:'root' services, interceptors, guards, app.config
    auth/
    http/
  shared/          # reusable UI - imports core only
    ui/            # button, dialog, data-table
    pipes/
  features/        # domain code - never imported across
    admin/         # routes.ts + components + models
    manager/
    reports/
  app.routes.ts    # top-level lazy routes only

libs/
  ui-kit/          # publishable lib when shared grows`,explanation:`core and shared stay small and stable; features absorb all the churn.`},{title:`Top-level lazy routes per role`,code:`export const routes: Routes = [
  { path: 'admin', canMatch: [roleGuard('admin')],
    loadChildren: () => import('./features/admin/routes').then(m => m.ADMIN_ROUTES) },
  { path: 'manager', canMatch: [roleGuard('manager')],
    loadChildren: () => import('./features/manager/routes').then(m => m.MANAGER_ROUTES) },
  { path: 'reports', canMatch: [roleGuard('admin')],
    loadComponent: () => import('./features/reports/report-list').then(c => c.ReportList) },
];`,explanation:`canMatch keeps the chunk from even being fetched by users who cannot use it.`}]},{id:`angular-27`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isRead:!1,question:`A third-party chat widget needs its <script> injected and global config loaded. How do you integrate it without breaking SSR or encapsulation?`,answer:`Wrap it in a service plus a thin component or directive rather than scattering script tags. Create the service with Renderer2 so the script node is added and later removed through Angular, and only in the browser - guard with isPlatformBrowser or run the work in afterNextRender, which never executes on the server. Load the configuration with provideAppInitializer so the app blocks until the config exists, instead of racing it during bootstrap. If the vendor injects its own styles into document.head, isolate it in a wrapper component with ViewEncapsulation.None; if it needs a framework, add it as an external script in angular.json rather than injecting at runtime. Always keep the cleanup handle - chat widgets keep global listeners.`,examples:[{title:`SSR-safe loader with Renderer2`,code:`@Injectable({ providedIn: 'root' })
export class ChatWidget {
  private readonly renderer = inject(Renderer2);
  private readonly doc = inject(DOCUMENT);
  private readonly platformId = inject(PLATFORM_ID);
  private script?: HTMLScriptElement;

  load(src: string) {
    if (!isPlatformBrowser(this.platformId) || this.script) return;
    this.script = this.renderer.createElement('script') as HTMLScriptElement;
    this.script.src = src;
    this.script.async = true;
    this.renderer.appendChild(this.doc.body, this.script);
  }

  destroy() {                       // widgets hold global listeners
    if (this.script) this.renderer.removeChild(this.doc.body, this.script);
    this.script = undefined;
  }
}`,explanation:`On the server this is a no-op, and the DOM node is created and removed through Angular.`},{title:`Blocking bootstrap on config`,code:`provideAppInitializer(() => {
  // returns a Promise -> the app does not bootstrap until it resolves
  return firstValueFrom(http.get<ChatConfig>('/assets/chat-config.json'))
    .then(cfg => inject(ChatWidget).configure(cfg));
}),

@Component({
  selector: 'app-chat',
  encapsulation: ViewEncapsulation.None,  // vendor writes to document.head
  template: '<div id="chat-root"></div>',
})
export class Chat {}`,explanation:`provideAppInitializer replaces the deprecated APP_INITIALIZER token; Encapsulation.None keeps the vendor's global styles working.`}]},{id:`angular-29`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`You need to move an application from an older Angular major to a current one. How do you plan the upgrade?`,answer:`Upgrade one major at a time with ng update, and never jump two majors in one branch - the migrations assume the previous layout. Before running anything, read the update guide for that version: it lists breaking changes, the required Node and TypeScript and RxJS versions, and flags removed APIs. Then move in this order: Angular packages, then third-party libraries whose majors are coupled to it (Angular Material must match), then tooling and CI images. Let ng update rewrite angular.json, tsconfig and the entry files for you instead of editing them by hand. Afterwards check the bundle budgets, remove obsolete polyfills, rebuild, and fix whatever the compiler flags - deprecations usually surface as compile errors once the old name is removed. Verify on a branch with tests and manual smoke checks before merging.`,examples:[{title:`One major per step`,code:`# pre-flight: node -v, then branch + tests green
ng update @angular/cli@17 @angular/core@17 @angular/material@17
npm run build            # read every warning before continuing

ng update @angular/cli@18 @angular/core@18 @angular/material@18
npm run build

ng update @angular/cli@19 @angular/core@19 @angular/material@19
npm run build && npm test`,explanation:`Material and other libs must move in lockstep, or you get injection-token and template type errors that are hard to read.`},{title:`Post-upgrade checks`,code:`{
  "budgets": [
    { "type": "initial", "maximumWarning": "500kb" },
    { "type": "anyComponentStyle", "maximumWarning": "4kb" }
  ]
}

// polyfills.ts - drop entries the new baseline no longer needs
// tsconfig.json - "target" follows the browserslist you actually support`,explanation:`Budgets turn a silent bundle regression into a build failure, and stale polyfills are dead weight.`}]},{id:`angular-30`,category:`angular`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`Two separately deployed Angular apps must share one login. How do you implement shared authentication?`,answer:`Give ownership of the session to one place and treat the other app as a client of it. Preferred design: a shell or BFF owns an HttpOnly, Secure, SameSite cookie, and each app verifies the session with a cheap GET /me during provideAppInitializer before it bootstraps - so a user with an expired session lands on login instead of rendering a broken shell. Put that logic in a shared library so both apps run identical code. Never store access tokens in localStorage if you can avoid it: anything in localStorage is readable by injected script, so use the cookie plus CSRF protection, and keep any token in memory only. To keep the two apps in sync, broadcast login and logout over BroadcastChannel when they share an origin (cookies ignore the port, so :4300 sees the cookie set by :4200); across origins you need a real shared backend session or an iframe/postMessage broker.`,examples:[{title:`Shell owns the cookie, apps verify`,code:`// shared auth library, used by both apps
provideAppInitializer(() => {
  const http = inject(HttpClient);
  const auth = inject(AuthService);
  return firstValueFrom(http.get<User>('/api/me'))
    .then(u => auth.signIn(u))
    .catch(() => auth.signOut());
});

// HttpOnly; Secure; SameSite=Lax; Path=/  - never visible to JS`,explanation:`Session verification before bootstrap means both apps agree on auth state from the first render.`},{title:`Sync logout between apps on the same origin`,code:`// app A
const channel = new BroadcastChannel('auth');
channel.onmessage = (e) => e.data.type === 'logout' && this.auth.signOut();

logout() {
  this.http.post('/api/logout', {}).subscribe(() => {
    this.auth.signOut();
    channel.postMessage({ type: 'logout' });
  });
}`,explanation:`Cookies are shared across ports on one domain, so the logout must hit the server - clearing client state alone leaves the cookie valid.`},{title:`Memory-only token in an interceptor`,code:`const token = signal<string | null>(null);   // never localStorage

export const authInterceptor: HttpInterceptorFn = (req, next) =>
  next(req.clone({
    headers: req.headers.set('Authorization', \`Bearer \${token() ?? ''}\`),
  }));`,explanation:`An XSS bug cannot read the token out of storage; it can only use it while the page lives.`}]},{id:`angular-31`,category:`angular`,difficulty:`advanced`,scenarioBased:!0,isRead:!1,question:`Production errors are vague and hard to trace. What do you set up for monitoring?`,answer:`Put three layers in place. First, an error tracker (Sentry or similar) with its official Angular integration, which reports uncaught errors and rejections, attaches release and environment tags, and - critically - uploads source maps so the production stack traces are readable. Second, a global ErrorHandler that forwards anything Angular catches to the tracker with user context and scrubs tokens and PII before sending. Third, an HTTP interceptor that normalises every failure into one shape, attaches a correlation id that also goes into your backend logs, and rethrows so callers still handle their own errors. Add breadcrumbs for the user actions leading up to the failure, then alert on thresholds rather than on every error, or the channel gets ignored.`,examples:[{title:`Global ErrorHandler that scrubs`,code:`@Injectable()
export class TrackedErrorHandler implements ErrorHandler {
  private readonly tracker = inject(ErrorTracker);

  handleError(error: unknown): void {
    this.tracker.capture(error, {
      tags: { release: environment.version, env: 'prod' },
      extra: { route: this.router.url, userId: this.auth.user()?.id },
      beforeSend: (e) => scrub(e),   // strip tokens, emails, card data
    });
    console.error(error);            // still log locally
  }
}

{ provide: ErrorHandler, useClass: TrackedErrorHandler }`,explanation:`One place decides what leaves the browser, so no component accidentally leaks PII.`},{title:`Normalising HTTP errors with a correlation id`,code:`export const apiErrorInterceptor: HttpInterceptorFn = (req, next) => {
  const trace = inject(TraceService).newId();
  req = req.clone({ setHeaders: { 'X-Trace-Id': trace } });

  return next(req).pipe(
    catchError((res: HttpErrorResponse) =>
      throwError(() => new ApiError({
        trace,
        status: res.status,
        message: res.error?.message ?? 'Something went wrong',  // safe for users
        cause: res,                    // full detail for the tracker
      }))),
  );
};`,explanation:`One error type for the whole app, plus an id that ties the browser report to the server log.`},{title:`Readable production stacks`,code:`// angular.json
"configurations": {
  "production": {
    "sourceMap": { "scripts": true, "styles": false, "hidden": true },
    "namedChunks": false
  }
}

// upload the maps at build time, never serve them publicly
npx sentry-cli sourcemaps upload --release $VERSION dist/browser`,explanation:`Hidden source maps are uploaded to the tracker and excluded from the bundle you deploy.`}]}],performance:[{id:`performance-1`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`What happens when a user types a URL into the browser and presses enter?`,answer:`The first question of this category, and the one that reveals whether you actually
understand the network or just the framework. Walk it in order without
skipping: URL parsing, DNS resolution to an IP, TCP connection, TLS handshake,
the HTTP request, the response, and then what the browser does with the bytes. Two
details that separate a strong answer from a recited one: DNS and TLS both happen
before any application code runs, and for a single-page app the server usually
returns the same index.html for every route - so the router, not the server,
decides what the user sees. Mention HTTP/2 or HTTP/3 multiplexing, and be honest
about what you have measured versus what you know generally.`,examples:[{title:`Full request path to first render`,code:`DNS
User types app.example.com/orders/42
  -> URL parsed: scheme, host, path
  -> DNS resolution: hostname -> IP (cached by browser, OS, or resolver)

TCP
  -> TCP handshake: SYN, SYN-ACK, ACK

TLS
  -> TLS 1.3 handshake, certificates verified
  -> If resuming a previous connection, this is much cheaper

HTTP
  -> GET /orders/42 HTTP/2
  -> CDN or server replies. For a SPA the response is almost always the same
     index.html regardless of the /orders/42 path - the server does not know
     or care which route you wanted.

Browser
  -> HTML received, parsing starts immediately, streaming
  -> Preload scanner scans ahead for CSS, JS, images and starts fetching
  -> Render-blocking CSS found in <head> pauses first paint
  -> <script type="module"> is deferred by default, so it does not block
     parsing, but DOMContentLoaded waits for module execution

What a candidate often gets wrong:
"the root component runs first."
No. The first application code to run is whatever main.ts imports. The root
component class - App in app.ts, or AppComponent in older projects - is a
class declaration, and nothing instantiates it until bootstrapApplication is
called from main.ts.`,explanation:`Differentiating DNS/TCP/TLS from HTTP, and being clear that the server returns the
same HTML for every route, are the two markers of a real answer.`}]},{id:`performance-2`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Walk me through how an Angular app boots, step by step. Does it go to app.ts first?`,answer:`No - and correcting that misconception inside the answer is valuable, because it
tests whether you know the order rather than the file names. The order is: the
browser receives index.html, discovers the module script, downloads and executes
main.ts, main.ts calls bootstrapApplication with a root component, Angular creates
that component, its template renders, and only then does anything user-visible
appear. The root component class is inert until bootstrapApplication instantiates
it. Within that you should be able to name where the router fits: the root template
contains router-outlet, the router reads the current URL, matches it against the
route config, and for a lazy route triggers a dynamic import before the routed
component is created. Mention that in Angular 21+ this app is zoneless by default,
so change detection is scheduled by notification rather than by zone.js.`,examples:[{title:`index.html -> main.ts -> bootstrapApplication -> App`,code:`index.html (build output)
  <!doctype html>
  <html lang="en">
    <head>
      <link rel="stylesheet" href="styles-ABC.css">   <!-- render-blocking -->
    </head>
    <body>
      <app-root></app-root>
      <script type="module" src="main-XYZ.js"><\/script>
    </body>
  </html>

main.ts
  import { bootstrapApplication } from '@angular/platform-browser';
  import { App } from './app/app';
  import { appConfig } from './app/app.config';

  bootstrapApplication(App, appConfig)
    .catch((err) => console.error(err));

app.ts  (NOT the entry point - the class only)
  @Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    template: \`<router-outlet />\`,
  })
  export class App {}

The actual order
  1. HTML parsed, app-root element exists as an empty host element
  2. main.js downloaded, module graph resolved
  3. main.ts executes -> bootstrapApplication(App, appConfig)
  4. Angular creates App and renders its template into <app-root>
  5. Router initialises, reads location.pathname
  6. Route matched. If the route is lazy:
       loadComponent: () => import('./orders/orders.component')
     -> dynamic import of that chunk -> network request -> then component created
  7. First meaningful paint of real content

Note on file names
  Angular 20+ generates src/app/app.ts exporting App rather than
  src/app/app.component.ts exporting AppComponent. Either way the logic is the
  same - the root component is not the entry point, main.ts is.

Key point
  Nothing renders until step 4 at the earliest, and nothing route-specific renders
  until step 6. Both are network-bound, not CPU-bound, which is why this is a
  performance question.`,explanation:`Naming the exact order, correcting the root-component misconception explicitly, and
placing the router dynamic import at the right step is what a strong answer looks
like.`}]},{id:`performance-3`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How does the browser decide what to fetch from your index.html, and in what order?`,answer:`Tests whether you know there is a real parser and a separate preload scanner. The
browser parses HTML incrementally, and the preload scanner runs ahead of the DOM
parser looking for things it can fetch early - stylesheets, scripts, images, fonts.
That is why a script far down the body can already be downloading. Then the priority
rules kick in: CSS in head is render-blocking, module scripts are deferred so they do
not block parsing but do gate DOMContentLoaded, and async scripts have no ordering
guarantee. Fonts are lazy by default, so they only start once something needs them.
Practical consequences: preloading a file the preload scanner would have found anyway
wastes bandwidth, and script tags placed in body get discovered later unless they are
module or defer.`,examples:[{title:`Parser, preload scanner, and priority`,code:`Parsing
  HTML is parsed incrementally. The DOM is built as bytes arrive, which is why
  streaming SSR can show content before the response finishes.

Preload scanner
  Runs ahead of the DOM parser specifically to find fetchable resources early:
    <link rel="stylesheet">    high priority, render-blocking
    <script src>              blocks parser (classic) or deferred (module)
    <img>                     discovered as soon as the tag is scanned
    <link rel="preconnect">    connection opened early, nothing downloaded
    <link rel="preload">      fetched and kept, high priority
    <link rel="prefetch">      fetched low priority for likely-future use
  Note that an <img src> is discovered regardless of whether it has width and height
  - those attributes affect layout reservation, not whether or when it is fetched.

Order in practice
  1. <head> CSS discovered immediately -> blocks first paint
  2. Preload scanner sees <script type="module" src="main.js"> early, so the download
     starts before the body finishes parsing
  3. A classic <script> in <body> without defer pauses the HTML parser until it
     downloads and runs
  4. Module scripts are deferred automatically - never blocking, but DOMContentLoaded
     waits for them to execute

The trap
  <link rel="preload" href="main.js" as="script">
  If main.js is already discoverable by the preload scanner, this does not speed
  anything up - it just competes for bandwidth and can trigger console warnings.
  Preload what the scanner cannot see, like a chunk that is only requested by dynamic
  import.`,explanation:`Distinguishing the DOM parser from the preload scanner, knowing that module scripts
are deferred, and understanding that img discovery does not depend on width/height.`}]},{id:`performance-4`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`What is code splitting in an Angular app, and how does a lazy route actually load?`,answer:`The mechanism to be precise about: the build tool reads the dynamic import in the
route configuration, puts that component and its unique dependencies in a separate
chunk, and leaves it out of the initial bundle. At runtime the router triggers the
import, which is just a promise-returning network fetch, and only after it
resolves is the component created. The important performance consequence is that
lazy loading moves bytes off the critical path rather than making them smaller,
and it costs you a round trip on first navigation - so prefetching is the usual
follow-up. Be able to explain why a barrel file can defeat splitting, because
importing one symbol from a barrel can drag the whole barrel into the chunk
graph.`,examples:[{title:`Dynamic import in the route config`,code:`app.routes.ts
  export const routes: Routes = [
    { path: '', component: HomeComponent },
    {
      path: 'orders',
      // static import - OrdersComponent is in the initial bundle
      component: OrdersComponent,
    },
    {
      path: 'reports',
      // dynamic import - separate chunk, fetched on navigation
      loadComponent: () =>
        import('./reports/reports.component')
          .then((m) => m.ReportsComponent),
    },
  ];

What the build produces
  main-ABC.js         app shell, router, HomeComponent
  chunk-DEF.js        ReportsComponent + anything only it uses
  chunk-GHI.js        a shared dependency, loaded by either route if needed

What happens on first navigation to /reports
  1. Router matches the route
  2. loadComponent() runs -> import() -> dynamic import
  3. Browser fetches chunk-DEF.js (or reads it from cache)
  4. Module evaluates, exports the component class
  5. Component is created and rendered

Why a barrel file breaks this
  // components/index.ts
  export * from './reports.component';
  export * from './orders.component';
  export * from './customers.component';

  import { X } from '../components';
  The bundler must analyse the whole barrel to know what X pulls in, so all
  three components can end up in the shared chunk and main.js grows. Import
  from the file path directly to keep the graph narrow.`,explanation:`Lazy loading moves work off the critical path rather than reducing it, and the
barrel-file explanation is what shows you understand the build, not just the API.`}]},{id:`performance-5`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`What are render-blocking resources, how do you find them, and how do you fix them?`,answer:`Render-blocking means the browser cannot paint until the resource is parsed, so it
directly caps First Contentful Paint. In Angular you should know that the CLI already
does the main optimisation for you: the application builder inlines critical CSS by
default, so the classic manual critical-CSS dance is usually not something you write
yourself. What is left for you is knowing what it cannot do - it cannot help with
third-party tags, it does not apply to inline styles in templates, and you may need
to disable or tune it. Also know the trade-off: inlining removes a round trip but
grows the HTML and cannot be cached across pages, and a single render-blocking
stylesheet blocks everything no matter how small it is.`,examples:[{title:`Angular already inlines critical CSS - what is left for you`,code:`What the CLI does for you by default

  // angular.json -> build -> configurations -> production
  "optimization": {
    "scripts": true,
    "styles": {
      "minify": true,
      "inlineCritical": true,     // <-- default, uses Beasties
      "removeSpecialComments": true
    },
    "fonts": true
  }

  "optimization" itself defaults to true, so a production build gets this without
  you configuring anything.

What that means in practice
  The build extracts the CSS needed for first paint and inlines it into index.html.
  The rest is loaded as a normal stylesheet. So if you are writing an interview
  answer about manual critical CSS in an Angular app, the strong version starts by
  saying the tooling already handles it.

What it cannot do for you

  1. Third-party tags - analytics, chat widgets, consent banners
       <script async src="analytics.js"><\/script>
       <script defer src="support-widget.js"><\/script>
       These are not part of your CSS graph at all.

  2. Inline styles in templates, and styles added at runtime.

  3. The case where critical CSS inlining is wrong for you. If your critical CSS is
     large, or the page structure varies a lot per route, inlining bloats the HTML
     and you would rather disable it:
       "optimization": { "styles": { "inlineCritical": false } }
     then load styles yourself.

Why it matters anyway
  A single render-blocking stylesheet blocks first paint for a full round trip, no
  matter how small it is. That is the property to be able to explain.`,explanation:`Knowing inlineCritical defaults to true is the Angular-specific fact that makes the
answer credible; the remaining blockers are third-party tags, not your own CSS.`}]},{id:`performance-6`,category:`performance`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`What are Core Web Vitals, and how do you measure and diagnose each one?`,answer:`Three metrics that approximate real user experience, which means the field data
matters as much as the lab data. Know what each measures and, more importantly,
what each diagnosis is: LCP is about whether the main content arrives fast, so
look at server response, render-blocking resources and image priority; INP is
about whether the main thread is free when the user acts, so look at long tasks
and expensive handlers; CLS is about whether things move after they appear, so
look at images without dimensions, web fonts swapping in, and content injected
above existing content. The graded detail is being able to distinguish a lab score
from field data and to say which one you would optimise against.`,examples:[{title:`Metric, threshold, and what to actually look at`,code:`LCP - Largest Contentful Paint
  Measures when the largest element finished painting.
  Good under 2.5s (75th percentile).
  Diagnose: server response time, render-blocking CSS, whether the LCP element
  is an image with lazy loading applied by mistake, font blocking paint.

INP - Interaction to Next Paint
  Measures the latency from a user interaction to the next frame.
  Good under 200ms. This replaced First Input Delay - it measures the whole
  interaction, not just the first one.
  Diagnose: long tasks, heavy event handlers, expensive re-renders, layout
  thrash where you read and write layout properties in a loop.

CLS - Cumulative Layout Shift
  Measures unexpected movement of visible content.
  Good under 0.1.
  Diagnose: images and iframes without width/height, web fonts swapping after
  fallback text is painted, ads or banners inserted above existing content,
  async content pushing content down.

Lab vs field
  Lab (Lighthouse, DevTools, WebPageTest): one device, one network, repeatable.
  Field (CrUX, RUM): real devices on real networks, includes the users you
  care least about and most about.

  I optimise against field data and use the lab to reproduce. A lab score can
  be perfect while field INP is bad, because a lab run never does the sequence
  of interactions a real user does.`,explanation:`Connecting each metric to a concrete diagnostic, and explicitly preferring field
data, is what a senior answer does. Reciting the thresholds is not enough.`}]},{id:`performance-7`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is a long task, and how does blocking the main thread show up to a user?`,answer:`A long task is any script execution over roughly 50ms, and the number is not
arbitrary - it is the point at which the browser cannot reliably keep up with input
handling and rendering. The user-visible symptoms are input lag, animations that
stutter, and INP going up, all of which are the same root cause. The important
distinction for an Angular developer is between work that is long but interruptible
and work that is long and blocking: chunking work with the scheduler or yielding
between frames can make an acceptable task into a fine one, whereas anything inside
a synchronous loop that touches DOM layout will block no matter how you slice it.`,examples:[{title:`Long task, and the yield that fixes it`,code:`Symptom
  User clicks, nothing happens for 300ms, then everything snaps at once.

Cause
  One task occupying the main thread for 300ms. Input events queue behind it.

Find it
  DevTools -> Performance -> record interaction -> look for the red triangle and
  long yellow scripting blocks. Long tasks are also marked in the Interaction to
  Next Paint panel.

Bad fix - reading layout inside the loop
  for (let i = 0; i < 10000; i++) {
    rows.push(expensive(i));
    if (i % 500 === 0) {
      element.offsetHeight;   // forces layout, still synchronous
    }
  }

Good fix - end the task so the browser can breathe
  // Angular has no public yield() scheduler API, so yield with a platform
  // primitive between chunks of work:
  const yieldToBrowser = () => new Promise<void>(r => setTimeout(r, 0));

  for (let i = 0; i < 10000; i++) {
    rows.push(expensive(i));
    if (i % 500 === 0) await yieldToBrowser();   // input and rendering get a turn
  }

  For reactive code the framework-aware version is the experimental onIdle()
  primitive from @angular/core (v22), which recomputes a derived value on an idle
  callback instead of on every read.

Good fix - do less
  Virtualise the list so there is no 10000-row loop in the first place. 10k rows of
  real DOM is the underlying problem; yielding only makes the wrong work less
  painful.

Why the yield has to be a macrotask
  A microtask (Promise.resolve().then) does not help - the browser will not paint or
  dispatch input until the microtask queue drains. Yielding means ending the current
  task, so setTimeout or a MessageChannel postMessage are the tools that work.`,explanation:`The 50ms threshold, the same root cause behind input lag and INP, and knowing that yielding only fixes interruptible work - not a 10k-row DOM problem. Angular ships no scheduler.yield(), so use setTimeout or a MessageChannel, not a microtask.`}]},{id:`performance-8`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do you profile an Angular app and find out what is actually slow?`,answer:`Method, not tool names, is the grade. The sequence that works: reproduce
consistently, measure before changing anything, find the longest task or the
largest cost, and only then optimise - then re-measure to confirm. On top of
that, know the Angular-specific tools: the DevTools Performance panel for the
main thread, the Angular profiler (or the newer DevTools performance extension
features) for change detection, and heap snapshots for retained memory. A strong
answer includes a case where a profiler contradicted the team belief - that is
what proves you measured rather than assumed.`,examples:[{title:`Reproduce, measure, confirm`,code:`Step 1 - reproduce it consistently
  A vague "it feels slow" cannot be optimised. Record a scripted interaction
  with the same data volume every time.

Step 2 - measure before touching anything
  DevTools -> Performance:
    - record the interaction
    - look at the summary donut first: scripting vs rendering vs painting
    - the longest task, then what dominates inside it

  Angular-specific:
    - the profiler shows change detection runs and their cost
    - a slow screen is often 40ms of change detection across 3000 views, not
      one slow function

  Network: check whether it was actually a 900ms API call

Step 3 - the finding that contradicted the team
  The team believed a third-party chart library was the problem.
  The profile showed 12ms in the chart library and 380ms in a change
  detection pass, caused by a computed property that returned a new array
  identity on every read and therefore invalidated OnPush children.

Step 4 - fix and re-measure
  Memoise the array so the identity is stable. Re-record: change detection
  dropped from 380ms to 20ms. The chart library stayed.

For memory: take a heap snapshot, do the interaction 5 times, take another,
sort by retained size, and look for detached DOM trees - that is the signature
of a leak.`,explanation:`Reproduce-measure-confirm as a sequence, knowing the Angular profiler is about
change detection rather than functions, and telling a story where measurement
contradicted the team belief.`}]},{id:`performance-9`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How does change detection affect Angular performance, and what are the ways to reduce its cost?`,answer:`Be precise about the mechanism, because this is where vague answers fall apart.
Change detection walks a tree of components and evaluates bindings. In a zoneless
app it does not run on a timer or on every event; it is scheduled when Angular
notices something that needs rendering - a signal written that a template reads, an
input set, a host or template listener firing, markForCheck, or a view being
attached. That is notification-based, so the wins come from not doing unnecessary
work rather than from the scheduler being faster. Know that this is the default in
Angular 21+, and that zone.js apps still exist and still tick on async events, which
is why the two behave differently. The levers are OnPush, pure pipes, stable keys,
and running genuinely framework-free code outside Angular when it does not need to
touch the DOM.`,examples:[{title:`Zoneless scheduling, and the levers`,code:`How scheduling works without zone.js
  With zone.js, any patched event, timer, or promise resolution triggered a full
  tick. Without it, Angular schedules change detection when it observes one of:
    - a signal that is read in a template is written
    - ComponentRef.setInput
    - a bound host or template listener fires
    - ChangeDetectorRef.markForCheck
    - a view marked dirty is attached, or removed

  This is the default in Angular 21+. In v20 you opted in with
  provideZonelessChangeDetection(). Your own app has no zone.js dependency at all,
  so it is already in this mode.

Lever 1 - OnPush
  @Component({ changeDetection: ChangeDetectionStrategy.OnPush })
  export class OrderListComponent {}
  With zoneless, OnPush still matters: it stops a parent invalidation from cascading
  into children that read nothing you changed. Caveat: a new array or object identity
  defeats it.

Lever 2 - pure pipes (already the default)
  {{ total | currency }}                              // memoised on total
  {{ total | currency: 'GBP' : 'symbol' : '1.2-2' }}   // memoised on total + args
  transform() runs only when an argument changes by ===, so the thing to avoid is an
  impure pipe (pure: false), which re-runs on every change detection pass

Lever 3 - stable keys
  @for (row of rows(); track row.id) { ... }      // stable
  @for (row of rows(); track $index) { ... }      // defeats the diff
  Without a stable key Angular recreates the DOM and loses focus, scroll and state.

Lever 4 - do less
  The real win is not doing the work. 3000 rows of Material table is the problem;
  virtualisation beats any scheduler tweak.

Lever 5 - stay out of the framework entirely
  If your code only touches the DOM and never changes component state, do not run
  it through Angular at all:
    private readonly zone = inject(NgZone);

    ngAfterViewInit(): void {
      this.zone.runOutsideAngular(() => {
        element.addEventListener('scroll', onScroll);  // no CD triggered
      });
    }`,explanation:`Knowing the zoneless scheduling triggers as a specific list, understanding it is
the v21+ default, and using NgZone.runOutsideAngular for pure DOM work rather than
claiming a bare function "runs outside Angular".`}]},{id:`performance-10`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is tree shaking, and how do you verify that it is actually working rather than assuming it?`,answer:`This is the verify-it follow-up to the basic definition. Tree shaking removes
exports nothing imports, and it is easy to claim and hard to confirm. The
mechanisms are sideEffects metadata so the bundler knows a file has no
import-time side effects, static versus dynamic imports, and module format -
CommonJS modules cannot be statically analysed, so one require-style dependency can
defeat the whole thing. Verification is the graded part: look at the actual chunk
contents in the build output or the DevTools network panel rather than trusting the
build summary, and know that barrel files, CommonJS interop and accidental
side-effect imports are the usual leaks.`,examples:[{title:`Verify, do not assume`,code:`The setup
  package.json
  {
    "sideEffects": false
  }
  Tells the bundler every file in this package is safe to drop if unused. If you
  have any import-time side effect (polyfills, CSS imports, registering something
  global), list them:
  "sideEffects": ["*.css", "./src/polyfills.ts"]

Why it fails silently
  1. CommonJS. A dependency shipping CJS cannot be statically analysed, so the whole
     module is kept:
       import moment from 'moment';        // the entire library
       import { debounce } from 'lodash';  // unless you use lodash-es or a
                                           // per-method import
  2. Barrel files. import { thing } from './utils' forces the bundler to analyse
     ./utils/index.ts, which may re-export 40 things.
  3. Accidental side-effect import:
       import './polyfills';   // kept even if nothing is used

Verification
  npx ng build --configuration production
  Look at the output table - lazy chunks in kB, and the initial total.

  Then confirm rather than trust:
    - DevTools -> Network -> the JS files actually fetched on a cold load
    - Sources panel -> the bundle, search for a symbol you think is unused
    - source-map-explorer or rollup-plugin-visualizer to attribute bundle size to
      specific files

  I found 180kb of moment this way. The fix was replacing it, not configuring the
  bundler harder.`,explanation:`Knowing CJS defeats shaking, that sideEffects is a contract you must not lie about,
and verifying against the network panel rather than the build summary.`}]},{id:`performance-11`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are the usual causes of a slow Angular app, and how do you prioritise which one to fix?`,answer:`Good answers are a prioritisation framework rather than a list, because the list is
easy to recite. The useful ordering is by cost of fix against cost of delay: fix
network-bound work first, because it is usually both the biggest and the easiest -
a 900ms API call dwarfs any template optimisation. Then main-thread blocking,
because it affects every interaction. Then rendering volume, because it is
proportional and grows with the product. Then bundle size, which matters most on
first load on bad networks and barely at all once cached. The thing that
distinguishes a senior answer is naming what you deliberately did not fix and
why, and saying how you decided where to stop.`,examples:[{title:`Rank by cost of fix against cost of delay`,code:`Ranked for a typical internal app with 40k users on office wifi:

1. Network-bound, before anything else
   An 800ms API call on the critical path. Fix is often a cache or a
   prefetch, and the win is measured in hundreds of ms.
   Highest ratio of gain to effort of anything on this list.

2. Main-thread blocking
   Long tasks over 50ms. Affects every interaction, so it hurts INP directly.
   Usually needs scheduler.yield or moving work out of the change detection
   path.

3. Rendering volume
   500-row Material table with filtering and sorting on every keystroke.
   Fix: virtualisation, and debouncing the filter so it is not per keystroke.

4. Bundle size
   Only matters for first load on poor networks. If 80% of sessions are repeat
   and the bundle is cached, this is near zero and should be last.

5. Change detection cost
   Often real but rarely the biggest single item. Fix with OnPush and signals.

What I deliberately did not fix
  We spent two days on bundle size - the app was 900kb - and our field LCP was
  already fine because 95% of traffic was repeat visits served from cache. I
  should have checked the field data before optimising. We kept maybe 5% of that
  work.`,explanation:`Ranking with a stated reason, and naming work you chose not to do and why, is what
separates this from a recited list.`}]},{id:`performance-12`,category:`performance`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`An Angular app's memory grows steadily in production as users navigate between routes. How do you track down what is retaining the memory?`,answer:`This is the diagnostic question, as opposed to the leak question - the graded part
is distinguishing a real leak from a cache that is behaving correctly, which is
where most investigations go wrong. The method that works is comparison rather
than inspection: take a heap snapshot, repeat the suspect interaction several
times, force GC, take another, and diff. A real leak grows monotonically with each
repetition, whereas lazy route chunks and caches plateau. Learn to read the
dominators tree, because the retaining object is usually held by a closure you
cannot see at the call site. In Angular the causes are almost always one of three:
an unsubscribed subscription, a listener or timer registered outside Angular, or a
reference to a detached DOM node.`,examples:[{title:`Snapshot, repeat, diff`,code:`The three causes
  1. Subscription never unsubscribed
       items$ = new Subject();
     // subscribed in a component that can be destroyed
  2. Listener or timer outside Angular
     setInterval(() => this.poll(), 5000);   // survives the component
  3. Detached DOM
     A closure holds a reference to a node the framework has already removed.
     9,912 detached nodes, one detached HTMLDivElement.

The method
  1. DevTools -> Memory -> Heap snapshot
  2. Perform the suspect interaction - navigate to a route with a chart, back, five
     times
  3. Force GC, then take snapshot 2
  4. Comparison view, sort by retained size

The distinction that matters
  Detached node count climbing with each repetition is a leak.
  Lazy route chunks staying resident after the first load are cached, not leaking -
    they plateau. Confusing these two is why people either fix non-problems or miss
    real ones.

Finding the actual retainer
  Select the leaking object, expand the dominators tree, and follow it down. In one
  case the retainer was an arrow function passed to a subscribe-like library API,
  which held the destroyed component forever. You will not find this at the call
  site; the retainer and the leak are in different places.

Prevention, once you have diagnosed it
  import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

  private readonly destroyRef = inject(DestroyRef);

  ngOnInit(): void {
    this.timer$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe(() => this.tick());
  }`,explanation:`The snapshot-and-diff method, knowing that plateauing chunk memory is a cache
rather than a leak, and reading the dominators tree to find the retainer.`}]},{id:`performance-13`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between initial load, a reload, and a route transition? How should each be measured?`,answer:`They have completely different bottlenecks, and optimising the wrong one is a
classic mistake. The initial load has nothing cached, so it is dominated by network
round trips and parse cost - this is where bundle size, render-blocking resources
and the number of requests matter. A reload has the browser HTTP cache partly
warm but not necessarily the runtime state, so it is dominated by parse and
execute time - code cache and bundle size matter more than request count. A route
transition happens inside a running app with the framework already loaded, so it
is dominated by data fetching and rendering work, and bundle size is almost
irrelevant. Being able to separate them is the whole point of the question.`,examples:[{title:`Three different bottlenecks`,code:`Initial load (cold)
  Cache: empty. Server: cold or warm.
  Dominated by: round trips, render-blocking resources, parse time.
  Measure: Lighthouse, throttled to Slow 4G, with cache disabled.
  Fixes that matter: fewer requests, code splitting, deferring below-fold work.

Reload (browser cache warm)
  JS may come from HTTP cache; the runtime state is gone.
  Dominated by: parse and execute, V8 compile, hydration work.
  Measure: same tools but with the cache enabled, and look at the total
  scripting time rather than the request waterfall.

Route transition (SPA, app already running)
  Framework loaded, no new initial bundle.
  Dominated by: the API call for the route data, and rendering the new view.
  Measure: in-app marks around the navigation, and the DevTools Network panel
  filtered by XHR - not the document request.
  Fixes that matter: query caching, pagination, virtualisation, OnPush.

The mistake
  "Our bundle is 1.4mb so the app is slow."
  For a user on their fifth navigation that number is irrelevant. Split the
  complaint into which of the three it is before touching anything.`,explanation:`Separating cold-load network cost from reload parse cost from route-transition
rendering cost, and knowing which fixes apply to which.`}]},{id:`performance-14`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do prefetching and preloading differ, and when is either worth it?`,answer:`Prefetch is for resources you expect to need soon but which must not block anything
now; preload is for resources you know you need immediately, fetched at high
priority and consumed straight away. The distinction matters because a preload on
something the preload scanner would have found anyway is pure loss - it competes
for bandwidth and the browser warns you about it. In Angular, route prefetching is
the standard win because the routes are known ahead of time, so the trade is
bandwidth against first-navigation latency. Know that RouterLink has no prefetch
input and that preloading is configured at the router provider level, not on a link.`,examples:[{title:`Prefetch vs preload, and how Angular route preloading is actually configured`,code:`Prefetch
  <link rel="prefetch" href="chunk-DEF.js">
  Low priority, non-blocking, for likely-next resources such as lazy route chunks.

Preload
  <link rel="preload" href="chunk-DEF.js" as="script">
  High priority, meant to be consumed immediately. Use it for a chunk that is only
  requested by dynamic import, so the preload scanner cannot see it. The as
  attribute makes the intent unambiguous.

The waste
  <link rel="preload" href="main.js" as="script">
  main.js is already discoverable by the preload scanner from
  <script type="module"> in index.html. You have added a duplicate request hint and
  bandwidth contention for no gain.

Configuring route preloading in Angular
  RouterLink has no prefetch input. Preloading is a router-level strategy:

  import { PreloadAllModules, withPreloading, provideRouter } from '@angular/router';

  export const appConfig: ApplicationConfig = {
    providers: [
      provideRouter(
        routes,
        withPreloading(PreloadAllModules),  // stable API, not deprecated
      ),
    ],
  };

  Custom strategy when you want to be selective:

  @Injectable({ providedIn: 'root' })
  export class PopularRoutesPreloader implements PreloadingStrategy {
    private readonly preloader = inject(RouterPreloader);
    private readonly routes = inject(Router).config;

    preload(route: Route, load: () => Observable<unknown>): Observable<unknown> {
      return route.data?.['preload'] === false
        ? null!
        : this.preloader.preload(route, load);
    }
  }

The trade
  Preloading every route means the first navigation is fast and total transfer is much
  higher. On a metered connection that can be a net loss. Decide by route popularity,
  not by default.`,explanation:`The discoverability rule for preloads, that RouterLink has no prefetch input and
preloading is configured via withPreloading, and that PreloadAllModules is stable
rather than deprecated.`}]},{id:`performance-15`,category:`performance`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How does a service worker change loading performance, and what are the risks?`,answer:`The service worker sits between the network and the app and can serve from a
cache, which turns a network-bound first load into a cache-bound one for repeat
visits. That is a large win for returning users on bad networks and it is also
the source of the classic failure: a stale app shell served to a user whose
JavaScript chunks have been evicted, producing a version mismatch errors. Any
answer should mention versioned caches and cleanup on activate. Be honest that it
adds a layer of complexity and a failure mode that does not exist without one,
and that for a frequently updated internal app it may not be worth it.`,examples:[{title:`Caching strategies and the failure mode`,code:`Lifecycle
  install  -> precache the shell
  activate -> delete old caches by version
  fetch    -> serve from cache, then update in the background

Angular service worker
  npx ng add @angular/pwa
  ngsw-config.json:
  {
    "index": "/index.html",
    "assetGroups": [
      {
        "name": "app",
        "installMode": "prefetch",
        "resources": { "files": ["/favicon.ico", "/*.css", "/*.js"] }
      }
    ],
    "navigationRequestStrategy": "performance",
    "navigationUrls": ["/**", "!/**/*.*", "!/**/*__*", "!/**/*__*/**"]
  }

The failure that bites everyone
  index.html is cached, but a lazily loaded chunk from the new deployment has
  not been fetched yet and the old one has been evicted. The browser gets a
  404 for the chunk hash that index.html asked for.

  Fix: version the cache name, delete old caches on activate, and do not cache
  hashed chunk requests with a cache-first strategy - let them go to the
  network, the browser HTTP cache is usually enough.

Is it worth it here?
  For a public app with returning users, yes. For an internal app that deploys
  weekly to a few hundred people, the complexity is probably not paying for
  itself - the browser HTTP cache already covers most of the repeat-visit case.`,explanation:`Naming the version-mismatch failure, cache versioning and cleanup on activate,
and being willing to say the service worker is not worth it for your app.`}]},{id:`performance-16`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isRead:!1,question:`How do fonts and images affect performance, and how do you load them well?`,answer:`Both affect Core Web Vitals in specific ways, which is what makes this a
performance question rather than a styling one. Fonts: a late-arriving web font
causes a flash of invisible text and then a layout shift as the real font replaces
the fallback, so the fix is a size-matched fallback face with metric overrides on
the fallback, not on the web font itself. Images: an image without intrinsic
dimensions causes layout shift when it loads, and a lazy-loaded LCP element is a
direct LCP regression. The practical skills are sizing attributes, responsive
sources, fetchpriority on the LCP image, and preloading exactly one LCP image rather
than several candidates.`,examples:[{title:`Fonts and images, tied to CLS and LCP`,code:`Fonts - metric overrides belong on the fallback face
  /* the actual web font */
  @font-face {
    font-family: 'Inter';
    src: url('/inter.woff2') format('woff2');
    font-display: swap;
  }

  /* a fallback face adjusted to match Inter's metrics */
  @font-face {
    font-family: 'Inter Fallback';
    src: local('Arial');
    size-adjust: 104%;        /* match the fallback's width to Inter's */
    ascent-override: 90%;
    descent-override: 22%;
    line-gap-override: 0%;
  }

  body {
    font-family: 'Inter', 'Inter Fallback', sans-serif;
  }

  Why here and not on Inter: size-adjust and ascent-override tell the browser how
  to stretch the FALLBACK to look like the real font. Putting them on Inter itself is
  a no-op - Inter does not need adjusting to match Inter.

Images - the two failure modes
  <img
    ngSrc="/hero.webp"
    width="1200" height="675"       <!-- required unless using fill -->
    priority                          <!-- not lazy, and sets fetchpriority -->
    sizes="(max-width: 640px) 100vw, 50vw"
    alt="...">
  <img ngSrc="/below-fold.webp" loading="lazy" ... >

  The mistake I have seen most:
  <img ngSrc="/hero.webp" loading="lazy">
  Lazy-loading the LCP image delays LCP on purpose. Never lazy-load the LCP element.

  If you use fill, do not also set width and height - NgOptimizedImage throws at
  runtime if both are present, and the parent must be position: relative, fixed or
  absolute.

Preload exactly one candidate
  <link rel="preload" as="image" href="hero.webp" fetchpriority="high">
  Preloading three candidates because you were not sure which is LCP makes all three
  compete and helps none of them.`,explanation:`Putting metric overrides on the fallback face rather than the web font, and the
specific error of lazy-loading the LCP image, are the details that stand out.`}]},{id:`performance-17`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isRead:!1,question:`What is the difference between a dev build and a production build in Angular, and why does only one of them tell you about performance?`,answer:`Several switches are on in production, and being able to name what each changes is
the grade. Correct one common misconception first: AOT has been the default since
Angular 9, so both ng serve and ng build compile ahead of time, and JIT is
effectively only something you encounter in TestBed. What production actually
changes is minification and mangling, tree shaking, budget enforcement, font and
critical-CSS inlining, and output hashing. The practical point that matters: dev
builds enable extra runtime error checking that production strips, so a dev build is
both slower and a different program - which is why performance measured on ng serve
is meaningless.`,examples:[{title:`What each production switch changes`,code:`package.json / angular.json
  "configurations": {
    "production": {
      "optimization": {
        "scripts": true,          // minify + mangle
        "styles": { "minify": true, "inlineCritical": true },
        "fonts": true
      },
      "budgets": [
        { "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" },
        { "type": "anyComponentStyle", "maximumWarning": "4kB", "maximumError": "8kB" }
      ],
      "outputHashing": "all",
      "sourceMap": false
    }
  }

About AOT specifically
  "aot" defaults to true. It has done since Angular 9, so this is not a production-only
  switch. ng serve also compiles AOT. JIT survives in TestBed, which is why test
  environments can behave differently from a production build.

What production actually changes
  Minification   names mangled, whitespace removed
  Tree shaking   unused code removed, plus "sideEffects": false
  Budgets        CI fails if initial bundle exceeds a limit
  Critical CSS   inlined into index.html
  Output hashing index.html references main-ABC123.js so caches update
  Source maps    off by default in production

Run it and measure the right thing
  npx ng build --configuration production
  npx http-server dist/app/browser -p 8080 --proxy http://localhost:4200

  Then measure this, not ng serve.

  Dev builds add runtime checks that production strips - for example, some template
  diagnostics only run in development mode. The module graph served in development is
  not the graph that ships.`,explanation:`Correcting the AOT misconception - it is not a production switch and has been default
since v9 - and listing what production actually changes is the core of this answer.`}]},{id:`performance-18`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isRead:!1,question:`How would you set up bundle budgets, and what happens when one is exceeded?`,answer:`The mechanics are easy; the judgement is what is graded. Budgets are declared in
angular.json and enforced at build time - maximumWarning is advisory,
maximumError fails the build. The judgement is picking a number: it should come from
your actual current size plus a small allowance, not from a round number, and you
should cover both the initial bundle and individual lazy chunks, because a 400kb
route chunk fails on first navigation exactly as badly as a large initial bundle
does. The consequence to talk through is what happens when a PR exceeds it: whether
it blocks before merge, whether there is a waiver process, and who approves. A
budget that everyone routinely overrides is worse than no budget, because it is a
signal you have chosen to ignore.`,examples:[{title:`Declaring, enforcing, and the override problem`,code:`angular.json
  "configurations": {
    "production": {
      "budgets": [
        { "type": "initial", "maximumWarning": "500kB", "maximumError": "1MB" },
        { "type": "anyComponentStyle", "maximumWarning": "4kB", "maximumError": "8kB" },
        { "type": "bundle", "name": "admin", "maximumWarning": "300kB",
          "maximumError": "500kB" }
      ]
    }
  }

Available budget types
  initial            total size of the initial bundle
  bundle             a named bundle - requires an exact name, not a glob
  anyScript          any single script
  allScript          all scripts together
  any                any single asset
  all                everything
  anyComponentStyle  a single component stylesheet

Note the units: kB and MB, capital B. This is the same casing the CLI uses and it
is what the docs show - kb is not accepted.

Where the number comes from
  Not a round number someone liked. It is our current initial bundle plus about
  10%. Starting at exactly current size would block legitimate work; starting at a
  round 500kB when we are at 900kB is theatre.

Per-bundle budget matters too
  A 400kb lazy chunk fails on first navigation just as badly as a big initial
  bundle, and the initial budget will not catch it. That is what the bundle type with
  a name is for.

When a PR exceeds it
  maximumError fails the build, so the decision is made before merge rather than
  discovered in production.

  We require a waiver with a named reason and an owner to remove an existing budget
  temporarily. It happens maybe once a quarter.

  What I would not do: raise the budget silently in the same PR. That is how a budget
  stops meaning anything.

Failure mode to avoid
  Three waivers in a month and people stop reading the warnings. At that point the
  budget is decoration.`,explanation:`Justifying the number from real data, adding a per-bundle budget as well as initial,
using kB casing, and having an explicit waiver process rather than quietly raising
limits.`}]},{id:`performance-19`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isRead:!1,question:`What is SSR and hydration, and what does each cost?`,answer:`Two separate features that are usually discussed as one, and separating them is the
point. SSR renders the component tree to HTML on the server so the user sees content
before JavaScript runs, which fixes LCP on slow networks and makes the page
indexable. Hydration is then the browser booting Angular over that existing HTML so
the app becomes interactive, which requires Angular to find and attach to the
server-rendered nodes. The costs: SSR needs a Node runtime in production, a platform
check on every third-party dependency, and a risk of hydration-mismatch errors when
server and client disagree. The maturity answer is to be clear about whether you need
SSR at all, since a CSR app with good caching may not.`,examples:[{title:`Server render, then attach`,code:`What each one is
  SSR         the server renders the component tree to an HTML string, so the first
              paint does not wait for JavaScript. This is what fixes LCP and SEO.
  Hydration   the browser boots Angular over that existing DOM instead of throwing it
              away and re-rendering. Cheaper than client rendering from scratch -
              that is the point - but strict: if server HTML and the client tree
              disagree you get a hydration mismatch error rather than a silent fix.

The production cost of SSR
  - Node becomes a runtime dependency in production, not just a build-time one
  - every component and dependency must tolerate running on the server:
      no window or document at module scope
      isPlatformBrowser(this.platformId) ? ... : ...
  - chart and map libraries usually need stubs or dynamic import behind a check

When it is worth it
  Worth it: public content pages, SEO, first-visit users on poor networks.
  Questionable: an authenticated dashboard behind a login. Almost every real user has
  been there before, so you pay SSR and hydration cost for a cold-cache user you will
  rarely see.`,explanation:`Separating SSR from hydration, naming the platform-check cost, and being honest about
when SSR is not worth it for an authenticated app.`}]},{id:`performance-20`,category:`performance`,difficulty:`basic`,scenarioBased:!1,isRead:!1,question:`What does a Performance API measurement look like in practice, and how would you trust it?`,answer:`Trust is the graded word. In-app marks are useful for route transitions and slow
interactions, but they only measure your application - not the network, not the
browser parse, and nothing that happens before your code runs, which is where
first-load problems live. So pair them: browser-native measurement for what the user
experiences, application marks for attribution within it. Use performance.mark and
performance.measure from the browser Performance API, not perf_hooks, which is a Node
module and will not resolve in a browser bundle. Also be honest about measurement
overhead and about the difference between a synthetic run and a real user.`,examples:[{title:`Two layers of measurement`,code:`In-app marks, for attribution
  // performance.mark / performance.measure come from the browser Performance API.
  // Do NOT import from 'perf_hooks' - that is a Node module and will not
  // resolve in a browser bundle.

  // route transitions - the app is already loaded here
  performance.mark('route:start');
  const data = await fetchOrders();
  performance.mark('route:data');
  performance.mark('route:end');
  performance.measure('orders:load', 'route:start', 'route:end');

  // attributing a slow interaction to a handler
  @HostListener('click', ['$event'])
  onClick(ev: Event): void {
    performance.mark('click:start');
    this.recalculate();                       // 180ms
    performance.mark('click:end');
    performance.measure('click', 'click:start', 'click:end');
  }

Browser-native, for what the user experiences
  new PerformanceObserver((list) => {
    const entries = list.getEntries();
    console.log('LCP', entries.at(-1));
  }).observe({ type: 'largest-contentful-paint', buffered: true });

  buffered: true matters, or you miss LCP entries that fired before you observed.

Why both
  In-app marks cannot see the 700ms before main.ts executed.
  Lighthouse cannot tell you which of your three chart initialisers is slow.
  You need both to attribute a symptom to a cause.

Honesty about trust
  - mark() calls cost microseconds individually; do not put them in a loop
  - a single run on a developer laptop is not evidence - I would want field data, or
    at least 30 runs on a mid-range device`,explanation:`Using performance.mark rather than Node's perf_hooks, stating what in-app marks
cannot see, and using buffered observers is what makes measurement trustworthy.`}]},{id:`performance-21`,category:`performance`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`Customers complain the app takes around 8 seconds to load. Walk me through your diagnosis and fix.`,answer:`Measure the phases with Lighthouse/WebPageTest: is it bundle size, blocking JS, API latency or render? Shrink the bundle with lazy loading of routes and @defer blocks for non-critical widgets, enable build-time optimizations, compress images (NgOptimizedImage), and consider SSR with hydration or prerendering for the first paint. Verify each change against Core Web Vitals instead of guessing.`,examples:[{title:`Route-level lazy loading`,code:`{ path: 'reports', loadComponent: () => import('./reports/reports').then(c => c.Reports) }`,explanation:`Each route ships its own chunk, so first paint only downloads what the landing page needs.`},{title:`Defer the heavy widget`,code:`<app-dashboard>
  @defer (on viewport) { <app-revenue-chart /> } @placeholder { <app-skeleton /> }
</app-dashboard>`,explanation:`@defer splits a component out of the initial bundle and loads it when it becomes visible or on interaction.`}]},{id:`performance-22`,category:`performance`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`A page with very large forms and dropdown lists feels sluggish. What do you optimise, and in what order?`,answer:`Work top-down on cost per change-detection cycle, because that is what sluggishness usually means. First, make sure components are OnPush - with default change detection every keypress re-evaluates every template on the page. Second, kill hidden costs inside those templates: getters, function calls and pipes re-run on every check, so precompute into fields or signals (or make a pipe pure). Third, do not ship data you do not need: a 10k-row dropdown should be a remote search-ahead or virtualized list, not 10k options in the initial payload. Fourth, images go through NgOptimizedImage. Finally, if the remaining work is genuinely CPU-bound (sorting/filtering 100k rows), move it off the main thread instead of micro-optimising templates.`,examples:[{title:`OnPush + stable identity in the list`,code:`// GOOD - derived once, memoised until orders() changes
@Component({ changeDetection: ChangeDetectionStrategy.OnPush, /* ... */ })
export class OrderForm {
  orders = input.required<Order[]>();

  readonly total = computed(() =>
    this.orders().reduce((s, o) => s + o.amount, 0),
  );
}

// BAD - a getter is re-evaluated by the template on every change detection
// pass, so this recalculates for the whole array each time anything changes
@Component({ /* ... */ })
export class OrderFormWithGetter {
  orders = input.required<Order[]>();

  get total() {
    return this.orders().reduce((s, o) => s + o.amount, 0);
  }
}`,explanation:`Getters in templates are a classic hidden cost; a computed caches by dependency.`},{title:`Dropdown: search-ahead instead of shipping 10k options`,code:`// type-ahead queries the server, keeps the list tiny
search = new FormControl('');

readonly options = toSignal(
  this.search.valueChanges.pipe(
    debounceTime(250),
    distinctUntilChanged(),
    switchMap(q => this.api.findCustomers(q)),
  ),
  { initialValue: [] as Customer[] },
);`,explanation:`Only the visible matches exist in the DOM, so the form has a small working set.`},{title:`Images through NgOptimizedImage`,code:`<!-- with explicit dimensions: responsive and layout-stable -->
<img ngSrc="/hero.webp"
     width="1200" height="600"
     priority
     sizes="(max-width: 640px) 100vw, 50vw"
     alt="" />

<!-- fill mode: no width/height, parent must be positioned -->
<div style="position: relative; aspect-ratio: 2 / 1;">
  <img ngSrc="/hero.webp" fill priority alt="" />
</div>

<!-- placeholder: valueless attribute, needs an image loader with resizing -->
<img ngSrc="/thumb.webp" width="400" height="200" placeholder alt="" />

<!-- placeholder: or supply a URL or data URL yourself -->
<img ngSrc="/thumb.webp" width="400" height="200"
     placeholder="/thumb-placeholder.webp" alt="" />`,explanation:`NgOptimizedImage generates srcset, defers loading off the critical path, and guards against layout shift. Two rules catch people out: you must give width and height unless you use fill, and you must not give both - using fill with width or height throws a RuntimeError at runtime. A missing sizes attribute logs a warning in the dev server (it warns rather than fails the build), and placeholder is either a valueless attribute or a URL - the string blur is not valid on its own.`}]},{id:`performance-23`,category:`performance`,difficulty:`advanced`,scenarioBased:!0,isRead:!1,question:`A Material table with 500+ rows plus filtering and sorting is slow. How do you diagnose and fix it?`,answer:`Measure first: open DevTools Performance while interacting, and look at how much time is script versus rendering, and how many DOM nodes exist. The usual causes are too many rows in the DOM, a filter or sort running on every change-detection cycle, and identity churn destroying and rebuilding rows. The fixes map one to one: render only visible rows with CdkVirtualScrollViewport and cdkVirtualFor, keep components OnPush, treat filter and sort as a debounced stream with switchMap so rapid typing collapses into one operation, give rows a stable trackBy so unchanged nodes are reused, and cache the comparator instead of allocating one per cycle. Past roughly 10k rows, filter and sort on the server and virtualize the results.`,examples:[{title:`Virtual scroll - only the visible rows exist`,code:`<cdk-virtual-scroll-viewport itemSize="48" class="h-96">
  <div *cdkVirtualFor="let row of rows(); trackBy: trackId"
       class="row">
    {{ row.name }} \u2014 {{ row.amount }}
  </div>
</cdk-virtual-scroll-viewport>

trackId = (_: number, r: Row) => r.id;   // stable identity`,explanation:`500 rows become ~10 DOM nodes; trackBy lets Angular reuse nodes across sort and filter.`},{title:`Filter and sort as a debounced stream`,code:`readonly query = new FormControl('');
readonly sort = signal<Sort>('name');

readonly rows = toSignal(
  combineLatest([
    this.query.valueChanges.pipe(startWith(''), debounceTime(200), distinctUntilChanged()),
    this.sort.asObservable(),
  ]).pipe(switchMap(([q, s]) => this.api.search({ q, sort: s }))),
  { initialValue: [] as Row[] },
);

readonly compare = computed(() => this.comparators[this.sort()]);  // cached, not re-created`,explanation:`One request per settled query instead of one per keystroke; the comparator is computed once per sort change.`}]}],rxjs:[{id:`rxjs-1`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is an Observable in RxJS and how is it different from a Promise?`,answer:`An Observable is lazy, cold by default, and can emit multiple values over time; it supports cancellation via unsubscribe() and is composable with operators. A Promise is eager, emits at most one value, is not cancellable, and is not pipeable. For example: new Observable(sub => { interval(1000).subscribe(n => sub.next(n)); return () => clear(); }) emits many values and can be torn down, while fetch() returns a single-value Promise.`,examples:[{title:`Observable vs Promise`,code:`// Observable (multiple values, cancellable)
import { Observable, interval } from 'rxjs';
const obs = new Observable(sub => {
  const id = setInterval(() => sub.next(Date.now()), 1000);
  return () => clearInterval(id);
});
const sub = obs.subscribe(v => console.log('tick', v));
setTimeout(() => sub.unsubscribe(), 2500);

// Promise (single value)
fetch('/api').then(r => r.json()).then(console.log);`,explanation:`Observable emits over time and teardown is explicit; Promise settles once.`}]},{id:`rxjs-2`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between cold and hot Observables?`,answer:`A cold Observable produces its values inside the subscription (each subscriber gets its own producer/sequence) — e.g., HTTP calls via HttpClient are cold. A hot Observable shares a single producer among subscribers (late subscribers may miss values) — e.g., a DOM event or a Subject/ConnectableObservable. You can convert cold to hot using share(), shareReplay(), publish()/connect(), or multicast().`,examples:[{title:`Cold vs hot`,code:`// Cold: each subscriber triggers HTTP
http.get('/api').subscribe(...);

// Hot: shared via shareReplay
const shared$ = http.get('/api').pipe(shareReplay({bufferSize: 1}));
shared$.subscribe(...); shared$.subscribe(...);`,explanation:`Cold = per-subscriber producer; hot = shared producer.`}]},{id:`rxjs-3`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Explain Subjects, BehaviorSubject, ReplaySubject, and AsyncSubject with a common use case.`,answer:`Subject: multicast, no initial value, subscribers only get values emitted after subscribing (useful for event buses). BehaviorSubject: requires an initial value, emits the current value to new subscribers (useful for shared auth/user state). ReplaySubject(bufferSize): replays a fixed number of past values to new subscribers (useful for caching chat history). AsyncSubject: emits only the last value and only on completion (useful for one-shot async results).`,examples:[{title:`BehaviorSubject`,code:`import { BehaviorSubject } from 'rxjs';
const user$ = new BehaviorSubject<User|null>(null);
user$.next(u); console.log(user$.value); // current value`,explanation:`BehaviorSubject emits current value to new subscribers.`}]},{id:`rxjs-4`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`When should you use combineLatest, forkJoin, withLatestFrom, and merge?`,answer:`combineLatest: emits when any source emits, after all have emitted at least once — combine related live values (filters + list). forkJoin: emits once, only after all complete with their last value — parallel one-shot requests that all must finish. withLatestFrom: emits only when the source emits, combining the latest values from others (primary stream drives). merge: concurrently emits values from multiple observables as they arrive (union of event streams).`,examples:[{title:`combineLatest vs forkJoin`,code:`import { combineLatest, forkJoin, interval, of } from 'rxjs';
import { take } from 'rxjs/operators';

combineLatest([interval(10).pipe(take(2)), of('x')]).subscribe(v => console.log('combineLatest', v));
// emits after both have emitted at least once

forkJoin([of(1), of(2)]).subscribe(v => console.log('forkJoin', v));
// emits last values when both complete`,explanation:`combineLatest stays live; forkJoin is one-shot on completion.`}]},{id:`rxjs-5`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is switchMap, mergeMap, concatMap, and exhaustMap? Give an example for each.`,answer:`switchMap: cancels the previous inner observable on a new outer emission — typeahead/search (cancel stale requests). mergeMap (flatMap): subscribes to all inner observables in parallel, emits results as they come — independent parallel calls. concatMap: subscribes sequentially, waits for current inner to complete before next — queued operations (saving drafts in order). exhaustMap: ignores new outer emissions while the current inner is active — login/save button mash prevention.`,examples:[{title:`switchMap vs exhaustMap (search vs save)`,code:`import { fromEvent, of } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap, exhaustMap } from 'rxjs/operators';

// Search: switchMap cancels stale
fromEvent(input, 'input').pipe(
  debounceTime(300), distinctUntilChanged(),
  switchMap(q => searchApi(q))
).subscribe(r => results = r);

// Save: exhaustMap ignores extra clicks
fromEvent(saveBtn, 'click').pipe(
  exhaustMap(() => saveApi())
).subscribe(res => showToast(res));`,explanation:`switchMap cancels previous inner on new outer; exhaustMap drops outer while inner is active.`}]},{id:`rxjs-6`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the purpose of share(), shareReplay(), and refCount()?`,answer:`share() turns a cold observable hot and replays the source among subscribers; refCount() keeps it alive only while there is >=1 subscriber (unsubscribes upstream when zero). shareReplay({ bufferSize: 1, refCount: true/false }) caches recent values for late subscribers and controls whether it stays alive when no subscribers exist — often used to cache HTTP responses. Use refCount carefully to avoid re-triggering a cold source unexpectedly.`,examples:[{title:`shareReplay`,code:`data$ = this.http.get<Data>('/api').pipe(
  shareReplay({ bufferSize: 1, refCount: true })
);`,explanation:`Caches last emission for late subscribers; refCount controls lifecycle.`}]},{id:`rxjs-7`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do you prevent memory leaks when subscribing to Observables?`,answer:`Prefer the async pipe in templates (auto-unsubscribes on destroy). For imperative code, unsubscribe() in ngOnDestroy, or use takeUntil() with a destroy Subject, takeUntilDestroyed() (Angular 16+), first(), take(1), or finalize(). Also avoid long-lived global subscriptions without cleanup. For toSignal(), subscriptions are tied to the injection context (DestroyRef) automatically.`,examples:[{title:`takeUntilDestroyed`,code:`import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
fromEvent(window, 'resize').pipe(takeUntilDestroyed()).subscribe(...);`,explanation:`Auto-cleans up when injection context is destroyed.`}]},{id:`rxjs-8`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the difference between map, tap, switchMap and exhaustMap in terms of what they return?`,answer:`map: transforms values, returns the same stream type (value -> value). tap (do): side effect only, returns the same observable unchanged (use for logging). switchMap: maps outer value to an inner observable and flattens it, emitting values from the latest inner (projects to Observable). exhaustMap: maps to an inner observable but ignores outer emissions while inner is active (projects to Observable).`,examples:[{title:`tap vs map`,code:`source$.pipe(
  tap(v => console.log('side effect', v)),
  map(v => v * 2)
).subscribe(console.log);`,explanation:`tap does not transform values; map projects them.`}]},{id:`rxjs-9`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Give a small example of debouncing a search input with RxJS.`,answer:`In a component: fromEvent(this.input.nativeElement, 'input').pipe(debounceTime(300), distinctUntilChanged(), switchMap(q => this.service.search(q)), takeUntilDestroyed()).subscribe(results => this.results.set(results)). This waits 300ms after typing stops, skips duplicates, cancels stale requests on new input, and cleans up on destroy.`,examples:[{title:`Search debounce`,code:`fromEvent(inputEl, 'input').pipe(
  debounceTime(300),
  distinctUntilChanged(),
  switchMap((e: any) => search((e.target as HTMLInputElement).value))
).subscribe(results => this.results = results);`,explanation:`Debounce, ignore duplicates, cancel stale requests.`}]},{id:`rxjs-10`,category:`rxjs`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is error handling in RxJS and when would you use catchError, retry, and retry with a delay?`,answer:`catchError: catches an error in the stream and returns a replacement Observable (a fallback value, EMPTY, or a retry attempt) so the stream can carry on. retry(n): re-subscribes immediately up to n times - fine for a single transient blip. retry({ delay }): the modern form, where delay can be a number, a function of the error and retry index (that is how you do exponential backoff), or an observable such as timer(1000). Note that retryWhen() is deprecated in RxJS 7 - reach for retry({ delay }) instead. Handle errors close to where they can be meaningfully recovered, and remember that catchError replaces the stream, so anything downstream of it will not see the failure unless you re-throw.`,examples:[{title:`retry with backoff`,code:`source$.pipe(
  retry({
    count: 3,
    delay: (error, retryCount) =>
      timer(2 ** retryCount * 1000),        // 2s, 4s, 8s
  }),
)
.subscribe(...);`,explanation:`Custom retry with exponential backoff before failing. retryWhen(errors => errors.pipe(delay(...))) is the deprecated equivalent.`}]}],signals:[{id:`signals-1`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is a Signal and how is it different from an RxJS Observable?`,answer:`A Signal is a synchronous, granular reactive primitive: a value you read by calling it (count()) and update with set/update, that automatically notifies consumers that depend on it. An Observable is an asynchronous, lazy stream you must subscribe to, with operators for retry, debounce and merging. Signals are ideal for component-local and synchronous UI state; Observables stay the tool for async event streams, HTTP and WebSockets. You bridge the two with toObservable() and toSignal().`,examples:[{title:`signal() basic read/write`,code:`import { signal, computed } from '@angular/core';

const count = signal(0);
console.log(count());        // read
count.set(5);                // write
count.update(c => c + 1);    // update

const doubled = computed(() => count() * 2);
console.log(doubled());`,explanation:`Read with () and update via set/update; computed derives reactively.`}]},{id:`signals-2`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`When would you use signals instead of observables, and can signals replace RxJS completely?`,answer:`Use signals when the state is synchronous UI state - selection, toggles, count, a view model - where you want direct value access without the async pipe or subscriptions. Do not try to replace RxJS for genuinely async work like HTTP retries, websockets, or streams that need cancellation and composition. In an interview, the framing is: streams feed signals, signals feed the template - the correct architecture composes both rather than picking one.`,examples:[{title:`When to use signals`,code:`const isOpen = signal(false); // UI toggle
const total = computed(() => price() * qty()); // derived
// Keep async streams in RxJS: search$ = input$.pipe(debounceTime(300), switchMap(...))`,explanation:`Synchronous UI state → signals; async/event streams → RxJS.`}]},{id:`signals-3`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What are computed signals and effects, and when do you use each?`,answer:`computed() creates a read-only derived signal that lazily recalculates only when its dependencies change - use it for anything you can derive (total = price() * qty()). effect() runs a side effect whenever the signals it reads change - use it only when you have no reactive alternative: syncing with a non-reactive library, analytics, DOM APIs. It should never be your first choice because it runs as a scheduled pass after change detection rather than at the point of the write, it runs at least once on creation, and it re-runs on every change.`,examples:[{title:`computed vs effect`,code:`const items = signal([1,2,3]);
const count = computed(() => items().length); // derived, no side effect

effect(() => {
  document.title = \`Count: \${count()}\`; // side effect only when necessary
});`,explanation:`computed is read-only derived; effect is for external side effects.`}]},{id:`signals-4`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is the diamond problem in Observables, and why doesn't it occur with signals?`,answer:`When two or more derived streams share a common source and are combined, RxJS can glitch - combineLatest emitting multiple times for what is logically one update. Signals are synchronous and batched: if you update two source signals, a computed or effect depending on both recalculates once per batch, not per dependency. That single recalc per write cycle is why signal graphs avoid the duplicate-emission problem.`,examples:[{title:`Batching intuition`,code:`const a = signal(0), b = signal(0);
const sum = computed(() => a() + b());

effect(() => console.log(sum())); // runs once if a.set(1); b.set(2) batched`,explanation:`Synchronous updates batch → computed/effect run once per batch.`}]},{id:`signals-5`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`When do you need untracked() inside an effect?`,answer:`untracked() removes dependency tracking inside an effect. You need it when an effect reads signals it should not subscribe to - for example reading a value to send to a server or to focus an element, where you do not want the effect to re-run when that value changes. A common failure is an effect that reads several signals and also writes to one, so writes would retrigger it forever; wrapping the write in untracked() breaks the loop.`,examples:[{title:`untracked() to avoid loops`,code:`import { effect, signal, untracked } from '@angular/core';

const enabled = signal(false);
const log = signal('');

effect(() => {
  const e = enabled();
  untracked(() => {
    // do not track 'log' here
    log.set(e ? 'on' : 'off');
  });
});`,explanation:`Prevents the effect from re-running when log changes.`}]},{id:`signals-6`,category:`signals`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`How would you plan a migration from an Angular 12 app that uses RxJS to Signals?`,answer:`Plan incrementally instead of a big-bang rewrite. Start with component-local UI state and convert @Input/@Output to signal inputs (input()) so computed() can replace ngOnChanges. Then convert simple BehaviorSubject state in services to signal()/state, leaving HTTP and async pipelines on RxJS. Use the dev tools, keep the graph acyclic (never effect + set()), and rely on the signal-input-migration schematic for automation before touching complex features.`,examples:[{title:`ngOnChanges -> computed (the mechanical swap)`,code:`// BEFORE: derive in a lifecycle hook
@Input() price!: number;
@Input() qty!: number;
total = 0;

ngOnChanges() {
  if (this.price !== undefined && this.qty !== undefined) {
    this.total = this.price * this.qty; // manual recompute, runs on every input set
  }
}

// AFTER: derive, don't recompute
price = input(0);
qty = input(0);
total = computed(() => this.price() * this.qty());`,explanation:`computed replaces ngOnChanges entirely: no manual flag, no stale branch when only one input is set.`},{title:`BehaviourSubject -> signal in a service`,code:`// BEFORE
@Injectable({ providedIn: 'root' })
export class UserStore {
  private readonly user$ = new BehaviorSubject<User | null>(null);
  readonly user$ = this.user$.asObservable();
}

// AFTER
@Injectable({ providedIn: 'root' })
export class UserStore {
  private readonly _user = signal<User | null>(null);
  readonly user = this._user.asReadonly();
  readonly isAdmin = computed(() => this.user()?.role === 'admin');
}`,explanation:`Derived flags become computeds; consumers read store.user() directly instead of the async pipe.`},{title:`Keep RxJS for async, feed it into signals`,code:`private readonly http = inject(HttpClient);

readonly user = toSignal(
  this.http.get<User>('/api/me').pipe(catchError(() => of(null))),
  { initialValue: null },
);`,explanation:`The request stays an observable; only the view-facing state becomes a signal.`}]},{id:`signals-7`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Are NgOnInit and ngOnChanges still needed in a fully signal-based application?`,answer:`Largely no. ngOnChanges is replaced by signal inputs (input()) combined with computed() - derived values recalculate reactively instead of in a hook. NgOnInit mostly becomes unnecessary since you can read signals and start effects inline; data fetching moves into resource()/rxResource(). The lifecycle hooks still exist and remain useful for view concerns like afterNextRender, but the signal-based APIs remove most of the boilerplate they forced.`,examples:[{title:`Lifecycle shift`,code:`constructor() {
  effect(() => {
    // scheduled after change detection, not synchronously here
    console.log(this.items());
  });
}`,explanation:`Many init cases move to inline reads/effects instead of NgOnInit.`}]},{id:`signals-8`,category:`signals`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is linkedSignal, and why is calling set() inside an effect() considered an anti-pattern?`,answer:`linkedSignal creates a writable signal that is linked to a source signal and resets to the source value when the source changes - ideal for a filter dropdown whose selection must reset when the underlying list changes. Writing signal.set() inside an effect() to do the same thing is an anti-pattern because it writes a signal being read by the effect, creating a feedback loop; Angular warns about it in dev mode. Use linkedSignal when the derived value must be writable, and computed() when it must not.`,examples:[{title:`Overload 1 - source only (resets to the derived value)`,code:`import { signal, linkedSignal } from '@angular/core';

const options = signal(['html', 'css', 'angular']);

// picks options()[0] now, and re-picks it whenever options changes
const selected = linkedSignal(() => options()[0]);

selected.set('css'); // user picks css
options.set(['misc', 'signals']);
selected();        // 'misc' - reset because the source changed`,explanation:`With no computation, the linked value resets to the source's current derived value.`},{title:`Overload 2 - source + computation (recompute on source change, keep local edits)`,code:`const options = signal(['html', 'css', 'angular']);

// recompute from the source, but only when the source itself changes -
// unrelated re-renders keep the user's own selection
const selected = linkedSignal({
  source: options,
  computation: (opts, previous) => previous?.value ?? opts[0],
});

selected.set('css'); // local edit sticks
selected();           // 'css' (previous wins)
options.set(['misc']);
selected();           // 'misc' (source changed -> recompute)`,explanation:`With a computation you control the reset rule - here 'keep previous unless the source really changed'.`},{title:`The anti-pattern this replaces`,code:`// DON'T - writing a signal inside an effect that reads it
general.set('html');
effect(() => {
  const list = options();
  general.set(list[0]); // reads+writes -> loop risk, Angular warns in dev
});`,explanation:`linkedSignal expresses 'derived but writable' declaratively, with no feedback loop.`}]}],misc:[{id:`misc-2`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is AOT vs JIT compilation?`,answer:`JIT compiles Angular templates and decorators at runtime in the browser, while AOT compiles them ahead-of-time during the build. AOT is the default today: it catches template errors at build time, runs faster in the browser, and ships less runtime compiler code.`,examples:[{title:`AOT vs JIT at runtime`,code:`// JIT - compiles in the browser (needs the compiler shipped to the client)
import '@angular/compiler';

// AOT - compiled during ng build; template errors fail the BUILD`,explanation:`AOT shifts compilation to the build step: smaller runtime bundle, faster startup, template errors caught in CI.`}]},{id:`misc-6`,category:`misc`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`What is a standalone component?`,answer:`A standalone component is one that does not belong to an NgModule: it declares its own imports, services, pipes and directives directly in its imports array. Since Angular 19 standalone is the default for new apps and makes lazy-loading routes with loadComponent straightforward.`,examples:[{title:`Standalone is just an imports array`,code:`@Component({
  selector: 'app-card',
  standalone: true,          // default since v19
  imports: [MatButton, DatePipe],
  template: \`<button matButton>{{ date | date }}</button>\`,
})
export class Card {}`,explanation:`No NgModule to register: dependencies are declared on the component itself, which is what makes loadComponent lazy routes trivial.`}]}],behavioural:[{id:`behavioural-1`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Which behavioural question framework will you use to answer these questions?`,answer:`This is often the first question of the loop, and it is a free opportunity either
way. Weak answers name STAR and stop, or worse, explain that they do not use a
framework because they answer honestly. Good answers name a small toolkit and match
the tool to the shape of the question, because the frameworks differ in which
specific weakness they defend against. Say which one you would choose for a given
question, and why, and it sounds deliberate rather than recited.`,examples:[{title:`The toolkit and when to use it`,code:`STAR
Situation, Task, Action, Result. The default for a past action.

STAR-L
STAR plus Learnings. The added beat is the point: it forces a reflection step
STAR skips, which is usually the most interesting part of your answer.

CARL
Challenge, Action, Result, Lesson. Obstacle-first rather than context-first, so
the difficulty leads instead of hiding at the end. Useful when the hardest part
was the problem itself.

SPSIL
Situation, Problem, Solution, Impact, Lessons. Developed by IGotAnOffer as a
STAR alternative. It splits STAR's blurry Task and Action into a clearer
Problem and Solution, and makes the Lesson step non-optional.

SOAR
Situation, Obstacle, Action, Result. Same family as CARL, used where the
obstacle is the interesting part.

PAR
Point, Example, Reason, Point. For questions that are really opinion rather
than story.

PREP
Point, Reason, Example, Point. For philosophy questions - why should we hire
you, how do you decide what to optimise for.

PSB
Problem, Solution, Benefit. For hypotheticals, where there is no real past
event to draw on.

SBI
Situation, Behaviour, Impact. For feedback you gave to someone else. Avoid the
compliment sandwich - the person cannot tell what to change.`,explanation:`Matching the framework to the question type, and using STAR-L or SPSIL when a
learning beat is what the question is really after, is the signal. A framework
recital with no matching is what fails.`}]},{id:`behavioural-2`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about yourself.`,answer:`The most under-prepared question in the loop, and the one where most people
either recite a resume chronologically or start with their university. It is
not a life story - it is a 60 to 90 second argument for why this conversation is
worth having, ending where this role begins. The structure that works: present
tense and current role, the two or three things you are actually good at
backed by a concrete outcome each, then the bridge into why this role. A good
tell is naming what you want next, because that frames the rest of the loop.
Keep it under 90 seconds so there is time for them to ask.`,examples:[{title:`60 to 90 seconds, ending at this role`,code:`BAD
Graduated from X in 2015, then interned at A, then joined B as a frontend
developer, then moved to C...
- Chronological, no point, and the interviewer now has your resume in front
  of them.

GOOD
I am a frontend engineer at C, where I own our Angular design system and the
checkout flow.

Two things I would say I am genuinely good at. First, I cut initial bundle
size by 180kb on checkout last year - mostly by auditing what was actually
being composed rather than swapping libraries - and I left a CI budget behind
so it stayed down. Second, I have led three version migrations end to end, and
the last one was a major upgrade across four teams where the useful part was
agreeing the sequencing with people who disagreed with me.

What I want next is to be closer to the whole system rather than one surface of
it, which is why this role interested me.`,explanation:`Ends at this role, has two concrete outcomes, and states what you want next so
the rest of the loop has a frame.`}]},{id:`behavioural-3`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Walk me through your resume.`,answer:`Expectation-setting is the graded part: they want to know how you think and
where your story has gaps, not the contents. Narrate around two or three
threads rather than going chronologically, and be the one who names the gaps
first - a reorg, a short tenure, a gap, a pivot - because that reads as
self-awareness rather than being caught on it. For each thread say the problem,
your role, and the outcome. Do not narrate every job; if you have five, explain
what changed between them.`,examples:[{title:`Two threads, gaps named by you`,code:`Frame it as threads, not jobs:
- Thread 1: performance work. What the problem was, which parts were mine,
  what changed.
- Thread 2: migrations and cross-team delivery. Same structure.
- Then: the bits that do not fit, named by me first.

Naming a gap yourself
"She will ask about the 8 months at D, so say it first:
That was a reorg. My role was made redundant, and looking back I waited about
two months before looking externally, which cost me savings. I would handle
that differently - start while still employed."

Five jobs, one explanation
"I have had five jobs. Three were contract, which is why it looks like a lot:
two were three-month pieces, and between them I was in one bad agency that
placed me badly and I should have left sooner."`,explanation:`Gaps and churn named by you first is the entire tell. Chronological narration is
what loses this question.`}]},{id:`behavioural-4`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`What is one weakness of yours?`,answer:`The scoring is entirely in which weakness you choose and whether the evidence
shows you worked on it. The three failing categories: a humblebrag disguised as
a strength, a weakness that is actually someone else's problem (my manager is
micromanaging), and a real weakness with no evidence of any attempt to fix it.
What works is a genuine, job-relevant weakness with a specific mitigation you
put in place, and ideally a story of it failing before the mitigation existed.
Pick something that is real and small enough that the fix is believable - you
cannot claim to have fixed chronic disorganisation, but you can describe a
system you built to stop losing context.`,examples:[{title:`Real, job-relevant, with the fix`,code:`BAD
I work too hard.
- Humblebrag. Everyone says this and it reads as having not prepared.

BAD
My previous manager was difficult to work with.
- Not your weakness, and you have just told them how you handle conflict.

BAD
I am not very good at saying no.
- Plausible but unevidenced, so it becomes a prediction they will test.

GOOD
I used to lose track of context when I came back to a thread after a day on
something else, and I would re-derive decisions that had already been made.

What it looked like: a task that had been scoped on Monday would be re-scoped
on Wednesday by me, with no memory of why the first answer was chosen.

What I changed: decisions that affect more than one person now get a two-line
written rationale - the problem, the choice, the rejected option. I do it at the
end of the day it is made, which takes about a minute.

Where it has not worked: for genuinely throwaway work I still skip it, and
occasionally that bites.`,explanation:`Real and job-relevant, a specific system rather than willpower, and an honest
note on where it still fails.`}]},{id:`behavioural-5`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Where do you see yourself in five years?`,answer:`Graded on whether it is compatible with the role rather than on the ambition. A
common failure is an answer that quietly exits - I want to run a team, or move
into product - which tells them you will leave. A technically strong answer
stays on the work, names a direction rather than a job title, and ties it to
something you have already shown you can do. Being vague is safer than being
wrong, but pure vagueness reads as no ambition. Aim for a direction, a reason it
suits you, and one honest uncertainty.`,examples:[{title:`Direction, not exit`,code:`BAD
I want to move into engineering management.
- Reads as a resignation letter with a two-year notice. Only use this if the
  role is on the management track and you say so explicitly.

BAD
I want to work somewhere more challenging.
- No direction at all.

GOOD
In five years I want to still be hands on, but owning the architecture of a
larger system than one surface - and to be the person who is trusted with the
hard technical judgement calls rather than just the tickets.

Why that direction: the part I am best at is the trade-off no one wants to
make, and I like that the work is not decided in advance. The engineering
management version of this is also a thing I want eventually, but it is a
different job and I would rather do it deliberately than drift into it.

The uncertainty: whether the next role gives me that scope. I would rather
choose it than wait for it.`,explanation:`Stays on the work, names a direction and a reason, and is honest about the
uncertainty instead of being either grandiose or evasive.`}]},{id:`behavioural-6`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a project you are proud of.`,answer:`This is the most over-claimed question in the set, and the tell is a project
described in the plural - we, I - with no account of what you personally decided.
The strongest shape: pick a project where the interesting part was your
judgement, not the volume of work. Say what was hard about the decision, what you
chose, what you rejected, and what happened. Include a thing that went wrong or
something you would do differently, because an entirely flawless project reads as
either easy or rehearsed. Scale is not impressive; the decision is.`,examples:[{title:`One decision, one flaw`,code:`WEAK
We built a design system used by 40 teams.
- Team success, no personal decision, and the number is doing the work.

STRONG
Mine was the migration off a legacy build system. What makes it worth telling
about is a decision, not the work: we could have done it all at once, or
sequenced it by team.

I chose sequential, by dependency order rather than by team size or by which
team complained loudest. The argument against me was team size - the big teams
were still on the old pipeline for months and that hurt morale.

What it cost: about four months where the biggest teams had no path to the new
setup. I had predicted three.

The flaw: I did not budget for the two teams whose builds were not actually
independent, so we discovered mid-migration that the sequencing I had called
obvious was wrong for them. That was my analysis error, and it cost about three
weeks.

Result: zero rollbacks across 40 teams, and the sequencing doc was reused for
the platform migration afterwards.`,explanation:`One judgement call with a named alternative, a predicted cost, and a real
flaw that was yours. Scale is not the point.`}]},{id:`behavioural-7`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to work in an area you knew nothing about.`,answer:`Graded on the method of getting competent, not on the subject matter - nobody
cares whether it was Kubernetes, a payments integration, or a regex. What they
are listening for is whether you found the people who knew, whether you made
your understanding explicit early enough to be corrected, and how you knew when
you were done. The move that raises the level is building a small thing early
and being visibly wrong in a low-risk place, because that is what actually
produces learning faster than reading.`,examples:[{title:`Learning by being visibly wrong, early`,code:`The area was our payments provider's webhook retry semantics. I knew nothing
about it.

Step one, cheap and fast: I asked three questions - which people actually know
this, what does a correct integration look like, and what is the most common way
people get it wrong. The third question was the valuable one, and it turned out
the standard advice was wrong for our case.

Step two: I wrote the naive integration first, against a sandbox, and it failed
in a way that confirmed the thing I had been told was fine. Cheap correction,
low stakes.

Step three: rather than keep guessing, I wrote down my model of the behaviour
as I understood it and sent it to the payments engineer to correct. She changed
two of my five assumptions and said the other three were right for reasons I had
not considered.

How I knew I was done: not when it felt clear, but when I could predict what the
system would do in the three cases we actually hit, and I had a test for each.`,explanation:`Asking what people commonly get wrong, testing cheap and early, and having an
explicit model that someone corrected - that is the method they are grading.`}]},{id:`behavioural-8`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you simplified something complicated.`,answer:`Simplification is one of the highest-signal behaviours to demonstrate, and the
mistake is describing a cleanup as a simplification. A cleanup leaves the same
complexity with fewer lines. A simplification removes the complexity by changing
the model: you found that the requirement did not actually need generalising, or
you replaced a mechanism that had one use with direct code. Say what was
simplified, why the complicated version existed in the first place, and what
gave you the evidence to safely remove it.`,examples:[{title:`Removing the mechanism, not the lines`,code:`The trap
We refactored the validation module, removed 600 lines, and made it much
easier to read.
- A cleanup. Good, but not simplification.

The actual simplification
We had a generic form-validation engine: rules defined in JSON, a rule engine
that interpreted them, and a schema that had to stay in sync with the TypeScript
types.

It existed because two years earlier we thought we would need configurable
validation for two more teams.

What made it safe to remove: I grepped the rule definitions and found 41 of them,
and 38 were static. The other three were our login form and had not changed in
four months.

So we deleted the engine, inlined the 38 as typed functions so TypeScript now
checks them, and kept the three as three explicit validators. The JSON schema is
gone, so the class of bug where the two drifted cannot happen anymore.

What it cost: three weeks, and the three dynamic validators are hand-written,
which is more code than they were before.

Result: a whole category of runtime validation bugs went away.`,explanation:`Finding the evidence that the generality was never needed, and removing the
mechanism rather than the lines, is what makes this simplification.`}]},{id:`behavioural-9`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you made an unpopular technical decision.`,answer:`Not a training story and not a workshop. This is about noticing the current
standard was not good enough, deciding so, and changing something systemic about
how work got done. The distinction is between improving your own output and
changing the default for everyone. A strong answer names what the new standard
was, how you made it easy to meet, and what happened to people who did not -
including whether anyone pushed back and what you changed as a result.`,examples:[{title:`The decision, the cost, the objection`,code:`The decision: we would stop supporting the two oldest browsers we support and
ship only modern-targeted JavaScript.

Why it was unpopular: support had two enterprise customers still on them, and
QA had signed off a manual test matrix that assumed them. Nobody was wrong -
they were counting a cost I was proposing to delete.

What I brought instead of arguing: the numbers. Those two browsers were 0.8%
of sessions, 0% of revenue across four quarters, and 11% of CI time, because of
a transpile-and-polyfill matrix nobody had touched in two years.

How I made it cheap to comply: kept a legacy bundle behind one flag for two
quarters, so anyone with a real customer on those browsers could ship without
arguing with me again.

What happened: QA's matrix went from 34 cases to 6, which is what actually
turned them around - they had been defending a cost, not a principle.

What I got wrong: I led with "0.8% of sessions" before establishing that we
even had session analytics, and spent ten minutes on trust instead of on data.`,explanation:`A decision that was genuinely contested, the number that reframed it, and an escape hatch that removed the reason people were objecting.`}]},{id:`behavioural-10`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to make an architectural trade-off.`,answer:`This is the question senior candidates most often waste on a project summary. The
story has to be built around the trade-off itself, with a named alternative a
competent peer would have chosen. For Angular-adjacent work the axes that produce
good material: consistency of one state paradigm versus fitting async work;
modular monolith versus micro-frontends; SSR and hydration versus CSR under Core
Web Vitals pressure; build versus buy; and build-time versus runtime
configuration. Say what you rejected, what it would have cost you, and what would
make you reverse.`,examples:[{title:`Monolith versus micro-frontends, with the reversal condition`,code:`The axis: independently deployable pieces versus one deployable whole.

The alternative a good peer would have chosen: a modular monolith. Fewer moving
parts, one deployment, no duplicated runtime. Entirely defensible for a team of 15
with four domains - and honestly the right call.

I chose micro-frontends for two domains only, not the whole app, because those
two had genuinely different release cadences driven by different customers, and
each release of the monolith forced a coordinated freeze on the other team.

What it cost, and this is the part I underestimated: each boundary means a
runtime, a duplicated dependency tree, and a design-system versioning problem. We
spent roughly a quarter of one engineer's time on version alignment.

Reversal condition, written down at the time: if we add a third frontend, or if
cross-domain journeys make up more than about 30% of traffic, we fold back into a
modular monolith. The second one has not triggered yet.

What I got wrong: I did not budget for the version-alignment cost at all, and that
is the cost that actually hurt.`,explanation:`A named defensible alternative, a cost you accepted, and a written reversal
condition is the structure. The project itself is almost irrelevant.`}]},{id:`behavioural-11`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you worked on something at scale.`,answer:`Scale stories fail in two directions: they are either unquantified - we served a
lot of users - or they are about volume rather than judgement. What is being
graded is how the scale changed the shape of the solution. Name a constraint
that only exists at scale (blast radius, cost per request, cache invalidation,
fan-out, noisy neighbours) and the specific mechanism you built because of it.
Include the number that made the constraint bite, because an abstraction with no
triggering number reads as premature.`,examples:[{title:`The constraint and the mechanism`,code:`The numbers first, because they set the constraint: we went from about 400
requests a minute at peak to 9,000, driven by one new integration partner.

The constraint that only existed at scale: the partner's load was bursty and
unpredictable - 3x spikes in under a minute - and our per-request cost was
dominated by one external call we made per request. At 400 rpm that was fine.
At 9,000 rpm it was about a third of our cloud bill, and it made our p99 depend
on a third party we did not control.

What that ruled out: nothing architectural, actually. That is the honest part.
The obvious answers - caching, batching, a queue - were already in the system
for the user-facing path.

The mechanism: a single-flight layer keyed on the tenant, so the 40 concurrent
burst requests became 1. Plus a per-tenant circuit breaker, because noisy
neighbours were the other scale problem - one partner's spike was starving the
rest.

What I did not do: I did not pre-build any of this. We had the numbers from the
integration pilot for a month before they switched over.`,explanation:`The triggering number, the constraint it created, and the specific mechanism -
plus admitting that most of the architecture was already right.`}]},{id:`behavioural-12`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you failed.`,answer:`Failure stories are graded almost entirely on the last third of the answer. The
setup can be brief; what matters is whether you own it without a justification
clause, whether you can name your specific part in a failure that had other
contributors, and whether the conclusion is a change in a system or behaviour
rather than a lesson about being careful. The two failures to avoid: failing at
something with no stakes, and failing at something where you were right and
unlucky. Also avoid the answer where the only real mistake was someone else's
decision you executed - that is not yours to claim.`,examples:[{title:`Owned, systemic, specific`,code:`The rule I set myself: no explanation clause before the ownership. Not because
the context does not matter, but because it always sounds like an excuse first.

What happened: I cut a release branch while a long-running migration was
half-applied, because I trusted a feature flag check that was scoped to the web
client. The API path did not have it. About 3% of users saw an error state for
roughly 40 minutes.

My part specifically: I was the one who decided the flag was sufficient coverage,
and I did not check the second entry point. The migration engineer had assumed the
flag was complete, because I told them it was.

What I changed, and it is a system change not a lesson: release checklists now
require every entry point to be named explicitly against the flag or the change,
and a reviewer whose name is on the checklist has to confirm coverage. It has
caught two omissions since, including one of mine.

What I still feel about it: not the outage, but that I let a person assume
instead of asking them.`,explanation:`No explanation before the ownership, a specific part in a shared failure, and a
systemic change rather than the lesson be more careful.`}]},{id:`behavioural-13`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about the biggest mistake you have made.`,answer:`This is the same competency as the failure question, asked from the opposite
direction: the difference is that a mistake is something you did and a failure is
something that did not work. Practically, expect this to be asked as a follow-up,
so be consistent - if you tell the same story twice, say so explicitly and give
the part they have not heard. The grading emphasis shifts slightly toward the
consequence: how bad was it, who was affected, and what did you actually do about
the people affected rather than only the system.`,examples:[{title:`Same story, and say so`,code:`Open with the flag, because they are testing for consistency:
That is the same mistake I would tell you about - the half-applied migration and
the feature flag. I will not retell it.

What I have not said yet, since you are asking about the biggest one rather than
a failure: the scale of it. It was 3% of users for 40 minutes, which by our
numbers was a few thousand people, and it was the day before a customer
conference.

The communication part, which I did handle badly at first: I told support in the
DMs, then corrected it publicly an hour later when I realised I should have. The
correction was messier than the original message should have been. Support had
already answered a ticket saying the error was ours, which turned out to be wrong -
it was a caching layer.

What that taught me, separately from the outage: the audience for incident
communication is not the one that is easiest to reach.`,explanation:`Flagging the overlap immediately, then supplying the scale and the communication
detail they have not heard, is what answers this properly.`}]},{id:`behavioural-14`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a production incident you handled.`,answer:`The strongest incident answers follow the response rather than the drama. What
is graded: how quickly you established what was actually happening versus what
people were guessing, how you handled the pressure to act before you knew,
whether you communicated outward at all, and whether you found the actual cause
rather than stopping at the proximate trigger. Include the boring operational
parts - how you decided, who you told, what you wrote down - because that is what
separates someone who was there from someone who performed being calm. Ending
with a real systemic change, not a promise, is what closes it.`,examples:[{title:`Detection, decision, cause`,code:`Detection over drama:
I was on call. First signal was a support ticket, not a page, because our alert
was on error rate and the failure was a 200 response with empty data. So the
first fifteen minutes were spent establishing what was actually happening -
three people comparing a user report against logs, and finding that the data was
missing rather than the request failing.

Deciding before knowing:
We had two plausible causes and a choice between rolling back a deploy from an
hour ago and waiting. I chose to roll back even though the deploy was not
obviously related, because the cost of rollback was about two minutes and the
cost of waiting was unbounded. That was a judgement under uncertainty, not a
diagnosis.

Outward communication: I sent one message to support at minute twenty saying
what we knew, what we did not, and when the next update would be. I would not
have done that at minute twenty in my previous job.

Cause, not trigger: the trigger was a config change. The actual cause was that
our cache had no invalidation on a field we had started writing from a new
service six weeks earlier, and the deploy only happened to be running when
traffic crossed a threshold.

The fix was the invalidation. The alert change - alerting on empty responses,
not just errors - was mine, because that was the fifteen minutes.`,explanation:`Detection versus the drama, a real decision under uncertainty, a proactive
outward update, and the cause rather than the trigger.`}]},{id:`behavioural-15`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to deliver under pressure.`,answer:`Pressure stories usually collapse into either heroics - I worked through the night
- or into process, which reads as defensive. The middle is the graded answer: name
the specific pressure (a date, a person, a risk), say what you deliberately did
not do, and be honest about whether the pressure changed the quality of the
outcome. Saying the work was fine, but that you skipped something you would
normally do, is far better than implying you did everything at a higher standard.
Also worth naming what support you asked for, because asking for help is itself a
skill being probed.`,examples:[{title:`What I skipped, and what I asked for`,code:`The pressure: a hard date set by a contract, and a review process that had not
started.

What I did not do: I did not skip the security review. It was the thing that
would have bitten later, and I said that out loud even though it cost me four
days of the schedule.

What I did skip, and said so: the accessibility pass. I documented it as a named
debt with an owner and a date rather than pretending it was covered.

What I asked for: I asked for one reviewer from the platform team for four hours,
not for more hands on my own task. That was a better trade than trying to
parallelise work I did not fully understand yet.

Result: shipped on the date, with the accessibility debt tracked and closed six
weeks later by someone else.

Honest assessment: I was lucky about the reviewer being available. If she had
not been, I would have made a worse call.`,explanation:`Naming what you skipped and got caught by, documenting the debt, and admitting
the luck are what keep this from reading as heroics.`}]},{id:`behavioural-16`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to learn something quickly.`,answer:`Distinct from the unfamiliar-domain question: that one is about finding your way
around a field, this one is about speed under a hard constraint. What is graded is
the time-boxing - what you decided to learn, in what order, and what you explicitly
decided not to learn - plus whether you knew when to stop. The senior signal is
naming a stopping condition, because someone who researches until they are certain
is slower, not more thorough. Also worth saying how you verified understanding
rather than assuming it.`,examples:[{title:`Knowing when to stop`,code:`Deciding the scope first:
Two weeks to implement against an unfamiliar message queue. I did not try to learn
message queues. I wrote down the four things our use case required - ordering per
key, at-least-once delivery, retry with backoff, and dead-lettering - and treated
everything else as out of scope for the fortnight.

Ordering for speed:
I did the four in dependency order and in parallel where possible, so the item I
was most likely to be wrong about was first while there was still time to change
the plan. That order was: at-least-once delivery, then retry, then dead-lettering,
then ordering - which is not the order they appear in most docs.

Verifying rather than assuming:
On day nine I had a local harness replaying our real message shapes, which is what
told me our retry semantics were wrong - not the reading, and not a code review.

Deciding to stop:
I stopped when I could no longer name anything I would do differently with more
knowledge. Specifically: I could explain every behaviour we would hit, and I could
write a test that would fail if a behaviour changed.

What I got wrong: I left dead-lettering untested for three weeks because I assumed
it was simple, and it was not. Time pressure made me treat a familiar-looking
problem as a known one.`,explanation:`Explicit scope, ordering by risk rather than by documentation order, verifying with
a harness, and a named stopping condition - plus admitting where the speed
shortcut bit.`}]},{id:`behavioural-17`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to say no to a request.`,answer:`Saying no is graded on whether it was a real refusal. Requests from the right
person for a reason you agreed with are the strongest material - you declined
because the cost landed elsewhere, not because you were busy. What fails is
agreeing while resenting it, which they can hear, and refusing in a way that
protected your pride. The good shape: understand what the request is actually
for, name the real constraint, offer the nearest thing you can do instead, and
say what you would need in order to say yes. Turning it down and offering an
alternative is what separates this from being obstructive.`,examples:[{title:`Real constraint, real alternative`,code:`What the request was actually for:
My lead asked me to add a feature to a system I owned, the week before a
release. I said no. Not the week before.

Why it was a real refusal, not a soft one:
The reason I said no was not the week. It was that the feature needed to write
to a table that had no migration strategy, and we had already agreed with the
data team that schema changes went through their review. So the real constraint
was someone else's process, not my time.

The nearest thing I could do:
I offered two things. A read-only version against the existing endpoint, which
they could ship in the week, and a version writing to the new structure after
their review, which I said I would own and could start the day the migration was
approved.

What I said I would need to say yes:
A migration reviewed and merged, and one week after it. They got both.

What happened: the read-only version shipped on time and got used enough that
the write version turned out to be a lower priority than they had assumed. That
was luck as much as judgement.`,explanation:`A real constraint you can name, an alternative rather than a flat refusal, and
the condition under which you would have said yes.`}]},{id:`behavioural-18`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you took responsibility for something that went wrong on someone else's behalf.`,answer:`The graded skill is taking the blame in a direction that costs you, without taking
responsibility for the competence of someone who did not have it. The failure to
avoid is defending yourself - I was following the spec - because it reads as
someone who will do that when it is inconvenient. Distinguish clearly between
owning the system (including what you shipped) and attributing the specific
error (which was someone else's). Also worth noting whether you did anything
about the other person's ability, because a senior version of this answer
includes helping them get better rather than absorbing their mistake quietly.`,examples:[{title:`Own the system, not their competence`,code:`The structure that works: own what is yours, state the other part factually,
no adjectives.

Owning the system:
I shipped the feature and I did not review the error handling properly. That is
my responsibility regardless of who wrote the code path.

State it factually:
The specific mistake was mine to prevent in review. My manager caught it in
production, not in my review, which means the review did not cover the failure
mode at all.

Do not:
I was following the spec and the other engineer did not tell me.
- Reads as someone who will do this the moment it is inconvenient.

The part that matters for a senior answer:
What I did about their capability. Naming it to management privately would have
been a quick route to looking fair and would have taught them nothing. Instead I
told him directly that the gap was error handling, gave him one piece to work
through, and reviewed the next one. He has not shipped an unhandled error path
since.

What I would change: I should have raised the review gap in the PR, where it was
cheap, rather than in the incident review.`,explanation:`Owning the system, stating the other part without adjectives, no
I-was-following-the-spec defence, and doing something about their capability.`}]},{id:`behavioural-19`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you improved something nobody asked you to improve.`,answer:`This overlaps with the unowned-problem question, so the distinction is who owns
it: here something already had an owner and it was still wrong, and you raised it.
The graded elements are the specific problem you found, why the existing owner was
not fixing it, and the evidence that the improvement survived after you stopped
paying attention to it. An improvement that only held while you maintained it
personally is a real and common failure, and saying so is better than pretending it
stuck.`,examples:[{title:`Improved, and it stuck without me`,code:`What nobody was going to fix: our test suite had grown to about 40 minutes, and
the last four months show it getting worse, not better. Nobody owned it because it
was not breaking anything - it was just slow, and CI slowness is easy to live with
when you are not the one waiting.

What I changed: I added a shard split and parallelised the two slowest suites,
which took 40 minutes to 12.

Why I raised it rather than just doing it: because it would make CI fail
differently for people who had not opted in, so it needed to be visible. I brought
the numbers to the team meeting and asked whether anyone objected. Nobody did.

Whether it stuck: this is the part I would not have claimed if I had not checked.
Six months later the suite is 14 minutes, because two other people added tests and
it did not go back up. But the split I did is still there and nobody has had to
maintain it.

Honest part: the first version of the shard config broke on a machine with fewer
cores and I did not notice for a week. Someone else found it.`,explanation:`Evidence that it persisted without you, plus the honest gap you did not notice
until someone else did.`}]},{id:`behavioural-20`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you were wrong about something for a long time.`,answer:`This is a much harder question than the failure question, because it requires
believing something, defending it, and being wrong - and the trap is telling a
story where you were only ever slightly off. The strong answer commits to a real
position, shows the evidence that made you hold it, and describes the moment the
evidence changed. Being wrong for a long time is normal and saying so is the
point; an answer where you were only ever mistaken about details is not the same
thing and interviewers notice. Note also what you now do differently in how you
form opinions, since that is the part being graded.`,examples:[{title:`Belief, evidence, what changed`,code:`What I believed, and held for about two years:
That our component tests were worth keeping as they were. My argument: they were
the only automated check on a lot of business logic, and removing tests is how
suites rot. I said that in about three design reviews.

Why I held it: I had been burned before by deleting tests that looked redundant,
so I was being conservative on principle.

What changed it: we added a rule that every new test had to fail when I
deliberately broke the thing - and about 30% of the existing component tests
passed without asserting anything meaningful. Not wrong assertions. No
assertions.

The moment my position flipped: not the 30%, which surprised me. It was a test
that passed because it asserted on a mock's return value rather than the
component's output. That test could never have failed for a real bug, and I had
written it.

What I do differently now: I ask what would make a test fail before I keep it. If
I cannot answer that quickly, I do not believe the test exists, and I do not
trust the coverage number.`,explanation:`Committing to a real position, the moment the evidence turned rather than
accumulated, and a specific change to how you form and trust opinions now.`}]},{id:`behavioural-21`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a conflict you had with a coworker. How did you resolve it?`,answer:`Two things are graded: genuine empathy for the other position, and a real
resolution. The single most common mistake is telling a story where you were
simply right - interviewers discount it because real conflicts do not resolve
that cleanly. A strong answer shows you understood the other person well enough
to steelman them, changed or clarified something in your own position as a
result, and ended with a working agreement rather than a victory. Avoid
conflicts where the other person was incompetent or absent - that reads as
blame rather than conflict skill.`,examples:[{title:`Steelman, then converge`,code:`We disagreed about where validation belonged - in the component or in the API
layer.

His position, which I had not considered properly: our desktop client and the
partner integration both call that API, so component-level validation left the
partner path unprotected. That was a real hole and I had not seen it.

What changed in my position: I stopped arguing it had to be one or the
other. We did both - component validation for fast feedback, API validation as
the actual contract, with a shared schema so the rules cannot drift.

Resolution: I asked for his integration test case and added it to our suite, so
his scenario stayed covered.`,explanation:`Naming what you learned and changing your own position is what separates a
resolution from a win. Adding his test case shows you treated his concern as
legitimate.`}]},{id:`behavioural-22`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you disagreed with your manager.`,answer:`The most-asked behavioural question in tech, and the easiest to sanitise into
uselessness. Graded items: real tension, a data-based case rather than an
appeal to taste, and specifically what committing to the final decision cost
you. Interviewers listen hardest for the commitment half - someone who only
describes the argument and then says "and we went with my approach" has not
demonstrated disagree and commit. If the manager decided against you, say what
you did and how you made the losing decision work. If you lost badly, that is
a strong answer if you can name what you learned about your judgement.`,examples:[{title:`Disagree, then commit fully`,code:`I argued we should not ship the migration in the same release as the dependency
bump. My case was a blast radius argument, not taste: if the bump broke, we
could not tell a dependency issue from a migration issue in the logs.

He decided otherwise - one release was simpler to roll back.

Committing: I wrote the rollback plan so reverting was a single command rather
than a sequence, and I pre-tagged both versions so the diff was available
instantly. I also added a canary at 10% so we would see the failure mode
quickly.

Cost: the bump did cause a 20-minute degradation on 3% of traffic. The canary
limited it and the rollback took 90 seconds. I do not think the extra release
would have saved us, and I told him so afterwards.`,explanation:`The commitment must be visible and specific, and conceding after the data lands
is the strongest possible ending.`}]},{id:`behavioural-23`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to convince a skeptical stakeholder.`,answer:`Influence without authority, graded on mechanics rather than on whether you
won. The strong shape: understand their incentives and constraints first,
change the evidence rather than restating the argument, and give them something
that makes saying yes easy. Weak answers describe being right. Also note what
happens if you fail - an answer with no failure path sounds naive. If the
stakeholder had a legitimate concern you could not resolve, saying so is better
than a fantasy where everyone converts.`,examples:[{title:`Changing evidence, not volume`,code:`The operations lead did not want my caching change. Her concern was
invalidation correctness, and she was right to have it.

What I did NOT do: argue that the hit rate would be high.

What I did: wrote a 200-line harness that replayed a day of real read traffic
against both designs and printed divergence. It showed 3 divergence cases per
million, all in the first 30 seconds after a write - the exact window she was
worried about.

So the design changed: write-through on the first read after a mutation,
read-through after that. Divergence went to zero.

Making it easy to say yes mattered too: I scoped it to one endpoint, with a
kill switch, and put her name on the runbook.`,explanation:`Turning a disagreement into a test that settles it is the durable skill.
Noticing that making it easy to agree is a separate, explicit skill.`}]},{id:`behavioural-24`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to influence people outside your team.`,answer:`The signal is that you understood the other side incentives, not just that you
advocated. Name what the other team was measured on and how your request
affected it - then show how you addressed that cost rather than ignoring it. The
distinction from convincing a stakeholder is that here the person gains nothing
from your success, so reciprocity and shared credit matter. A common
senior-level tell is whether you ended up owning the change for a team you did
not belong to.`,examples:[{title:`Addressing their incentives`,code:`I needed the platform team to expose a per-tenant rate limit. Their goal that
quarter was reducing their on-call pages, and any new endpoint was new surface
they would own.

So I did not lead with my need. I found their actual pain: they were already
absorbing 30 pages a month from one noisy tenant, and per-tenant limits would
have fixed most of them.

I wrote the spec for their problem, implemented the first version, and gave
them the tests and the dashboards. I also put the rate limit config in their
runbook, not mine.

Outcome: 30 pages a month to 2, and my endpoint shipped in their sprint rather
than needing escalation.`,explanation:`Doing their work, not just asking for it, is what makes cross-team influence
possible without authority.`}]},{id:`behavioural-25`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time two teams had conflicting priorities.`,answer:`The best answer names both sides legitimate interests, shows the data used to
weigh them, and - the part most candidates skip - says how you mitigated the
cost to the side that lost. The verdict matters far less than the reasoning. A
weak answer implies your team was obviously right. Also useful: say how the
decision was actually made, because in a real conflict that is often a third
party with a different objective, and recognising that is a senior observation.`,examples:[{title:`Including the losing side's cost`,code:`Support needed the admin export tool urgently. The data team needed the schema
migration first because the export would break on the new table layout.

Both legitimate: support was fielding 40 tickets a week about a workaround, and
the data team was one week from a hard deprecation deadline they had not
publicised.

How it was decided: the release manager owned both dates, so I stopped trying to
argue and took the trade to her.

The call: migration first. I mitigated support's cost by having them get a
temporary version built on the old schema - two days of my team's time - which
cut the tickets to 8 while we waited.`,explanation:`Naming the decision-maker and mitigating the loser's cost are the two moves that
separate this from a complaint.`}]},{id:`behavioural-26`,category:`behavioural`,difficulty:`medium`,scenarioBased:!0,isRead:!1,question:`How would you handle a teammate who is not pulling their weight?`,answer:`A hypothetical, so PSB rather than STAR. The graded balance is directness against
empathy, and sequencing: private before public, specific before general, and
escalation as a genuine last resort. The most common failure is jumping straight
to escalation, or being so gentle that nothing is said directly. A strong answer
acknowledges the cause is unknown and information-gathering is the first step,
because it might be onboarding, illness, or a misunderstanding about the role
rather than effort.`,examples:[{title:`PSB, sequenced`,code:`P - Problem
Their output is inconsistent and the rest of the team is absorbing rework, so
this is now a team problem.

S - Solution
Step 1, get information privately rather than assuming laziness - it may be
onboarding, illness, or a role mismatch: I have noticed the last three PRs
needed a lot of rework, is there something unclear or in your way?
Step 2, if it continues, be specific in the same private conversation with a
concrete ask and a date.
Step 3, escalate to our manager only after that, with specific examples and my
own contribution.

B - Benefit
Resolves the team impact quickly if it is a fixable gap, and if it is not, the
escalation is documented and fair to both of them rather than a surprise.`,explanation:`Refusing to assume laziness, and sequencing private and specific before
escalation, is what the question is testing.`}]},{id:`behavioural-27`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you showed leadership without having a leadership role.`,answer:`The strongest version is not "I was the tech lead". It is what you did when it
was not obviously your job - the problem nobody assigned, the standard nobody
was enforcing, the review nobody had time for. Interviewers are specifically
looking for emergent ownership rather than assigned responsibility, so an
answer describing duties you were given scores poorly. Say what the situation
was, why nobody else was going to pick it up, what you did without being asked,
and what changed because of it.`,examples:[{title:`Unowned problem, no title`,code:`Nobody owned our bundle size and it had doubled in a year. It was not in
anyone's goals, and the natural moment to cut it - adding a library - was the
moment it grew.

Why I picked it up: I was the one who had added 140kb of it in one PR, so I had
the context to tell what was ours and what was vendor.

What I did without being asked: measured the composition, found one moment
library and three unused internal helpers, removed the helpers, replaced the
moment usage, and wrote a one-paragraph note on what to use instead. Then I
added a budget check to CI and told my manager, because it would fail PRs and
people should know that before they hit one.

Result: initial bundle down 180kb. The budget has blocked four PRs since,
including two of mine.`,explanation:`Fixing your own contribution, then warning the team before the guardrail bites,
is what separates this from credit-taking.`}]},{id:`behavioural-28`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you mentored someone.`,answer:`Graded on whether you identified a specific growth gap and did something
calibrated to it, with measurable improvement. Weak answers are either vague
encouragement, or the story where the mentee succeeded and you take credit. The
distinction that raises the level is giving them the problem rather than the
answer - the mentoring move where you withhold the solution on purpose. Have a
number: what could they do at the start, what could they do at the end, and over
what period.`,examples:[{title:`Gap, intervention, evidence`,code:`The gap was not coding. Her PRs were technically fine and clean, and she
avoided anything she could not verify, so she shipped very little.

What I did not do: tell her to be more proactive.

What I did: deliberately gave her the problem instead of the answer. On a
migration I said: here is the rollout, the first PR is yours, and I am not
going to tell you the ordering - tell me what you think the order should be
and why. That was uncomfortable for her, which was the point.

Evidence: three months on she had run two deployments end to end, including
one rollback she drove. She now runs our release checklist review.

Honest caveat: I was slower to give her real ownership than I should have
been. The first month she was doing throwaway tasks.`,explanation:`A specific diagnosed gap, a deliberately uncomfortable intervention,
measurable evidence - plus an honest note on your own delay.`}]},{id:`behavioural-29`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you raised the bar for your team.`,answer:`Not a training story and not a workshop. This is about noticing that the team's output standard was below what the work deserved, and then making the higher bar reachable rather than aspirational. The graded elements: what the new bar was in observable terms, what you removed or automated so that meeting it was not extra effort, what happened to the people who did not meet it, and whether the bar survived contact with a deadline. A weak version quotes a rule you introduced. A strong one shows what it cost the team to meet, what you yourself had to cut, and whether you held yourself to the same standard.`,examples:[{title:`Changing the default`,code:`Our review culture was: approve if the tests passed. Review time was about 4
minutes and defects found in review were rare because reviewers were not
looking.

New standard: every change states how it was verified, and review checks the
diff against the ticket acceptance criteria, not just the tests.

Making it easy: I wrote the template with the fields pre-filled from the
ticket, so following it was less work than not following it. I also did the
first ten reviews to model it.

What happened: review time went to about 25 minutes and we caught three real
defects per month that previously shipped. Two people pushed back - they said
it slowed them down. I heard it, so the verification field became the only
required one.`,explanation:`Lowering the cost of the standard while raising it, and adjusting after
pushback, is what makes this systemic rather than heroic.`}]},{id:`behavioural-30`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to delegate.`,answer:`Graded on whether you built leverage rather than remaining the bottleneck. The
wrong answer delegates an unimportant task and reports it as delegation. The
right answer names what you deliberately kept, what you handed over including
the parts you wanted to keep, and how you checked without taking it back.
Redelegating your work and then redoing it because it was not right is the
classic self-sabotage answer, and interviewers listen for it.`,examples:[{title:`Handing over the interesting parts`,code:`I owned the design of the notification service and was the only person who had
context on the retry semantics.

What I kept: the API contract and the queue topology - too load-bearing to hand
over and still be useful.

What I handed over, and I wanted to keep: implementing it. I said explicitly
that I wanted to own it and was handing it over anyway.

Making it stick: I asked for a written design doc from them before any code, so
I was reviewing their thinking rather than my memory. Then I reviewed weekly for
the first month.

One thing went wrong: they got the retry semantics wrong on the first pass. I
did NOT fix it - I made them explain it to me, found the gap in their
reasoning, and they corrected it. They have owned it for two years.`,explanation:`Naming what you deliberately kept, and resisting the urge to fix their bug, is
exactly the leverage signal being tested.`}]},{id:`behavioural-31`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Give me an example of tough or critical feedback you received.`,answer:`Graded on ego management and evidence of an actual behaviour change. Defending
the critique, or explaining that the reviewer was wrong, is an outright failure
even if it is true. The strong answer: name the feedback specifically, your
initial reaction honestly, what you concluded about whether it was fair, and
the specific change you made that persists today. Mentioning that you now ask
for feedback more often is a nice touch, because it shows you changed the system
and not just the behaviour.`,examples:[{title:`Specific critique, durable change`,code:`A staff engineer told me my design reviews were thorough but slow - about 40
minutes - and that people stopped bringing me reviews early because of it.

Honest first reaction: I thought that was unfair, I was being careful. I also
could not argue with the observation, because I had noticed people asking
whether they should bring things to me.

What was actually right: I was re-deriving the design from scratch each time
instead of asking what they had already decided. My thoroughness was partly me
not trusting their work.

The change: I now ask them to write up their thinking first and I review that,
which typically takes 15 minutes. I also started asking what would make this
easier for you next time.

Last review since: about 18 minutes, and two juniors told me it is the reason
they bring me things early now.`,explanation:`Separating your defensive reaction from the fair part of the critique, and
admitting what your thoroughness actually was, is the whole answer.`}]},{id:`behavioural-32`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you gave difficult feedback to a peer.`,answer:`Graded on mechanics: private, specific, observable, and paired with a next step.
The common failure is a compliment sandwich, which destroys the feedback - the
person cannot tell what to change. Naming the SBI structure explicitly is
high-signal. Also graded: whether you asked about intent, which converts telling
into a conversation, and whether the behaviour actually changed. If the
feedback landed badly, say so and say how you handled it.`,examples:[{title:`SBI, and asking about intent`,code:`Using SBI: Situation - the Thursday release we cut on Monday.
Behaviour - in the channel, after the decision was made, with two people copied
who did not need to be.
Impact - the platform lead read it as a personal objection to his design and
stopped raising things early for two weeks.

What I added: the intent question. I sent that too fast and too wide - was my
read that you were going to bypass the platform team correct? He said yes -
which it was, and I had not noticed.

After: we agreed that concerns go to me first and I take them to him. Four
months on he still brings me things early, which is the opposite of where we
were.

What I learned: he was not defending the design, he was defending his team, and
I had no way of knowing that.`,explanation:`The intent question is what converts feedback into a conversation, and admitting
you were wrong about the substance is not weakness.`}]},{id:`behavioural-33`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time your team's trust was damaged, and how you fixed it.`,answer:`Accountability plus repair, without a blame narrative. Graded on whether you
accepted the damage was yours, whether you were specific about what you did to
earn trust back, and whether you changed something so it could not recur. Also
graded: whether you let the team see the repair period cost you something. A
vague "we talked it through" fails. If your team damaged trust rather than you,
the answer should be about what you did as the person in charge - which is
harder and scores higher.`,examples:[{title:`Repair, with a cost to you`,code:`I was going to make it quiet. A support lead had raised the same flaky-deploy
problem four times, ignored three of them, and the fifth time he escalated past
me to my manager. That went badly and the team saw it.

It was my fault. I had deprioritised it silently instead of saying not now,
and here is when. Silence read as not caring.

The repair, in order: I met with the support lead alone and said plainly that I
had ignored him and that the four asks were one problem I had failed to route.
Then I took it to the team and said the same thing in front of them, because
they had watched it happen.

The structural fix: every support escalation now gets an owner and a date from
me within a day, even if the answer is no.

The cost: I gave up a feature I had been pushing for two months. Six months on,
the support lead raises problems early instead of escalating, and we have
caught two outages before customers saw them.`,explanation:`Saying it in front of the team, and giving up something real, is what makes the
repair credible rather than performative.`}]},{id:`behavioural-34`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had a tight deadline with shifting scope.`,answer:`Scope discipline is the whole answer: what you cut, why that, and crucially who
you told and when. The specific failure being probed is absorbing the scope
increase silently and then missing the date, because that converts a
prioritisation problem into a trust problem. A strong answer names what you
deliberately descoped and defends it as scope, not as failure. Pre-communicating
the trade is the signal - if you tell people the new date after slipping, you
have already lost the point of the question.`,examples:[{title:`Cut early, say early`,code:`A compliance feature landed in week one of a six-week build, with a hard date.

What I did in week one rather than week five: went back with a descoped plan.
Two of the four sub-features were regulator-facing and mandatory; two were
internal analytics. I dropped the analytics, about 30% of the work, and shipped
a stub for it after.

Why those two: the regulator-facing items carried the actual legal risk.
Internal analytics was nice to have.

Who I told: the compliance lead and my manager in week one, with the trade
stated as a trade, not an apology. They approved the cut the same day.

Result: shipped on the original date with the mandatory scope. The analytics
went out six weeks later as planned.`,explanation:`Week one instead of week five is the entire lesson. Coming back early with a
defended descope is scope discipline.`}]},{id:`behavioural-35`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a project where the requirements were unclear or kept changing.`,answer:`What is graded is how you created clarity rather than how you survived it. Four
moves tend to separate strong answers: writing the scope down so disagreement
becomes concrete, making assumptions explicit rather than silent, shipping
something small to get real feedback, and setting up a mechanism so changes
cost something. "I adapted" is not an answer. Interviewers want to know whether
you reduced the ambiguity for the team, not just absorbed it personally.`,examples:[{title:`Creating clarity`,code:`Three weeks in, the brief said improve engagement and nothing else changed.

Move one: I wrote a one-page doc stating what I believed was being asked and
what I was assuming about success, and sent it asking them to correct it. Three
of my five assumptions were wrong, and finding that out on day 15 was worth more
than a month of building.

Move two: shipped a thin version in week four - one notification surface, no
personalisation - to get a reaction instead of an opinion.

Move three, the one that actually stuck: I asked for a prioritisation call every
Friday, 30 minutes, decisions recorded in the doc. After that, changes started
arriving with a reason attached instead of just arriving.

What I would change: I should have pushed for move three in week one rather than
week four.`,explanation:`Written assumptions expose what is actually being asked, and the recurring
decision forum is what stops the churn - plus naming your own delay.`}]},{id:`behavioural-36`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a decision you made with incomplete information.`,answer:`Graded on how you handled the uncertainty, not on the outcome being right. Name
the uncertainty explicitly, say what you used as a proxy signal, state your
confidence level honestly, and explain how you would find out if you were wrong.
The advanced move is buying the information cheaply first - a time-boxed spike
or a query against historical data - which is more senior than deciding under
uncertainty or waiting for certainty. Weak answers pick one of the two extremes
with no acknowledgement of the middle.`,examples:[{title:`Buying the information cheaply`,code:`We had to choose a database for a new service, and we did not know the
read/write ratio or the growth curve.

Rather than guess, I spent two days buying the missing numbers: queried six
months of our existing service production logs for reads per write and data
growth, and replayed the top ten queries against a candidate instance.

The numbers said 200:1 read-to-write and 40% annual growth, which ruled out the
option with higher write throughput and made the cheapest read-optimised option
the obvious answer.

Honest confidence: high on the read pattern, low on growth, because the new
service had a different adoption curve. So I put a monthly review on the numbers
rather than committing to a migration plan that assumed they would hold.

What would have changed my mind: reads per write under 20, or growth past 3x.`,explanation:`A time-boxed spike to buy the missing information beats both guessing and
waiting, and stating what would change your mind is the confidence signal.`}]},{id:`behavioural-37`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you shipped something you were not fully confident about.`,answer:`The graded skill is making a bounded, reversible bet rather than either stalling
or shipping recklessly. Name what specifically worried you, how you bounded the
blast radius - feature flag, canary, limited cohort, or a rollback that was
actually tested - and how you decided the residual risk was acceptable. Also
name the check that would have caught you being wrong. What fails this question
is a story about shipping because of a deadline with no guardrail, and equally a
story about endlessly waiting for certainty.`,examples:[{title:`Bounded bet with a kill switch`,code:`The thing I was not confident about was not the code, it was the load
assumption. Our peak was 4x average and the new service had no production
history to extrapolate from.

Why I shipped anyway: the read path was the same as an existing service that
had handled 10x our peak.

Bounding it: dark launch to 1% of traffic, feature flag on a route rather than
a code branch, and I rehearsed the rollback on staging the day before rather
than trusting that it would work.

The check: a dashboard comparing that cohort error rate and latency against the
old path, checked every hour for two days.

What happened: nothing - which was the point of the rollout. I would have waited
indefinitely otherwise, and a week of delay on a fully reversible path is just
fear.`,explanation:`Isolating exactly what you were unsure about, bounding it, and rehearsing the
rollback is the whole distinction between a bet and a gamble.`}]},{id:`behavioural-38`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to balance quality against speed.`,answer:`What is graded is which debt you consciously took on and how you ensured it got
paid. Every team takes this trade; the answer that scores is one where you named
the debt out loud, wrote it down somewhere visible, and either scheduled its
repayment or set a condition for it. The failing version either claims there was
no tradeoff - you were always perfect - or admits to debt that was never repaid
and never tracked. Naming the condition that would have made you stop is a
strong senior signal.`,examples:[{title:`Debt taken deliberately and tracked`,code:`We had three weeks to a launch and a real problem: the checkout flow had no test
coverage on the payment step.

My decision: ship, because the payment step is 12 lines of SDK glue and the week
was needed for the migration. But I did not ship it silently.

What I did: wrote it into the launch checklist as a named gap with an owner and a
date, and said it out loud in the launch review so it was not a surprise later.

The condition: if the payment provider changed its API before we paid it down, I
would delay the launch instead. We never hit that condition, and the tests
landed the week after.

Honest part: that was luck as much as planning. I have no idea whether I would
have held the line.`,explanation:`Tracking the debt, naming the condition that would have stopped you, and
admitting the luck is what makes this read as honest rather than rehearsed.`}]},{id:`behavioural-39`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a production risk that nobody else had noticed.`,answer:`Graded on proactive detection and, critically, on whether you actually did
something about it. Noticing a risk and raising it in passing is much weaker
than noticing it and removing it or forcing a decision. A strong answer makes
the risk concrete to a non-engineer - what breaks, who notices, how slowly -
because an unquantified risk loses its urgency. If you raised it and were
ignored, say what you did next, since being overridden and then doing nothing is
the weak version.`,examples:[{title:`Concrete risk, action taken`,code:`Nobody owned our backup restore path. We ran backups daily and had never restored
one.

Making it concrete for a non-engineer: I said the failure mode was not a slow
disk, it was that we would discover during an outage that the backups did not
work, and we would find that out at the worst possible moment.

Making it cheap to act on: I restored last month's backup into a scratch database
and timed it. It failed after 40 minutes on a corrupt segment.

So the risk was not hypothetical - it was already true.

What I did: I did not raise it as an opinion. I put the restore in front of the
team with the corrupt segment as evidence, and we made it a weekly automated
job. It has now caught two bad backups.

The part that mattered: I ran the test rather than asking someone to trust that
backups work.`,explanation:`Running the restore yourself, and making the risk concrete for a non-engineer,
is what turns a worry into something people act on.`}]},{id:`behavioural-40`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you had to function under significant ambiguity.`,answer:`Sustained productivity despite missing information. Graded on whether you made
progress on the parts that were genuinely knowable while isolating the parts
that were not, and on how you avoided either guessing confidently or waiting to
be told. The senior move is being explicit about your assumptions and about which
decisions the ambiguity actually blocks - separating decisions that are
reversible from those that are not, and stalling only on the irreversible ones.
Saying what you did not do, and why, is part of the answer.`,examples:[{title:`Isolating what was genuinely unknown`,code:`Four weeks into a new role I was told to improve engagement on a product I had
never used, with no metrics, no baseline, and no access to research.

What I could act on without the missing information: the technical health of the
funnel - load time, error rates, form abandonment at each step. That needed no
product context and turned out to be where the problem was.

What I refused to decide: whether the strategy was wrong. That was reversible
and cheap to explore, but I could not tell from inside the data.

So I split it: shipped the perf work, and asked for a decision meeting with the
two metrics I could not get myself - session recordings and a control group.

Honest note: two weeks of that felt like guessing, and I should have said that
out loud to my manager in week one instead of week three.`,explanation:`Isolating the knowable, deferring only the irreversible, and admitting the delay
in escalating is the mature shape.`}]},{id:`behavioural-41`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Why are you leaving your current role?`,answer:`One of the highest-stakes questions in the loop, and a credibility test. Four
beats: the trigger stated neutrally without blaming anyone, a brief description
of the situation, a specific pull toward the role in front of you, and why this
company specifically. The two common failures are a criticism of your current
employer, which reads as a forecast of how you will talk about us, and a generic
pull that could be pasted into any application. If you are leaving because of a
specific problem, say it plainly and then show what you did about it.`,examples:[{title:`Neutral trigger, specific pull`,code:`WEAK
The management was not supportive and I did not get along with my lead.
That reads as a forecast about us.

STRONG
My scope narrowed. I joined as the person who would own the front-end
architecture, and over two years the work turned into maintaining features other
people designed. Nothing wrong with the team - the change came from the product
direction.

The pull: I want to be the person who decides, and I want that decision-making
to be about a system end to end rather than about a quarter of it.

Why here specifically: name two things that are real reasons - a team problem
they are solving, a technical direction they have committed to - not the funding
or the brand.

What I did about it rather than just leaving: I raised the scope question with
my lead in January. We restructured my role for six months and it did not stick,
which is why I am looking now.`,explanation:`Showing you attempted the fix before leaving is the part that separates a
considered move from a complaint.`}]},{id:`behavioural-42`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Why should we hire you?`,answer:`An opinion question, so PREP rather than STAR. Do not summarise your resume -
they already have it. Pick the two or three things you would genuinely contribute
in the first six months and make each one checkable against something they said
they need. Strong answers include a specific weakness in their current setup that
you would address, which shows you have thought about the actual job.
Overclaiming is the risk - every claim you make here becomes a topic they probe.`,examples:[{title:`PREP, aimed at their problem`,code:`P - Point
Three things I would contribute in the first six months.
R - Reason
Based on what you said about their specific problem, these are the parts of it
I have actually done.
E - Example
1. Bundle and load: I cut initial JS by 180kb by auditing composition rather
   than swapping libraries, and I left the CI budget behind so it stayed down.
2. State migration: I moved an app from NgRx to signals one vertical slice at a
   time, keeping observables where cancellation and retry mattered. Five weeks
   of two paradigms, then one.
3. The thing you are probably worse at than you think: nobody on your team
   seems to own incident follow-up, and the last three postmortems have action
   items that were never closed. I close those.
P - Point
The common factor is that all three end with a mechanism still running, not a
fix I made once.`,explanation:`Each claim is a checkable experience rather than a trait, and the third one shows
you have thought about the actual job.`}]},{id:`behavioural-43`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you prioritised safety, ethics or trust over a metric.`,answer:`Graded on naming the integrity question cleanly enough that the interviewer
knows you actually saw it, and on the cost you accepted. Be concrete about the
kind of problem - a known security regression, a data-handling issue, a
user-trust concern - because vague framing means the interviewer cannot tell
whether you recognised a real ethical problem or are performing one. Also:
which channel you used, and how you resisted becoming a permanent blocker. The
outcome matters much less than the cost you chose to bear.`,examples:[{title:`Naming the cost you accepted`,code:`We found a logging library that was sending error payloads to a third-party
service. Payloads included form field names, and in one case the values, because
an error message interpolated them.

The metric pressure: removing it meant losing the error grouping that had cut
our triage time roughly in half.

What I did: I did not simply argue. I measured the actual exposure - a scripted
query of what fraction of error payloads in 30 days contained anything
resembling submitted data - so the conversation was about a number rather than a
principle.

The cost I accepted: I had personally spent two weeks building the
error-dashboard workflow on top of it, and I led the migration away from it.
Triage went back up. I also kept a local-only version so we still had grouping.

What I would do differently: raise it to security earlier rather than resolving
it inside the team.`,explanation:`Measuring the exposure turns a principle argument into a decision, and admitting
the cost you personally bore is what makes it credible.`}]},{id:`behavioural-44`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you raised a problem you found that nobody had asked about.`,answer:`Distinct from the production-risk question, which is about a system that could fail:
this is about a process or quality gap you noticed, where the cost is that the same
thing happens again. The graded elements are that you raised it rather than sitting
on it, that you raised it in a channel that could act on it rather than the loudest
one, and whether it is still closed. Saying "it is deprioritised twice and I asked
again this month" is the strongest ending available, because it shows you are still
accountable rather than relieved to have mentioned it.`,examples:[{title:`Early, private, with a recommendation`,code:`During a release review I noticed our seeded test data had been copied from a
production export, including a column with customer emails. It was in an internal
repo behind access control, but it was still customer data in a place it did not
belong.

What I did not do: file a ticket and move on, and I did not raise it in the team
channel where the owners would read it as a debate.

What I did: messaged the two people who owned the repo directly, same day, with the
specifics and a recommendation - scrub the column now, replace the seed with
synthetic data, and add a CI check that fails on email-shaped strings in migrations.

The cost: that pushed our migration by four days, which I had to explain to a
release date I had also been holding.

Did it get closed? The scrub is done. The CI check is still open - it has been
deprioritised twice, and I asked about it again this month rather than assuming
someone had it.`,explanation:`Same-day, private, with a fix rather than an alarm, and naming what is still not
closed - that last detail proves you are still accountable.`}]},{id:`behavioural-45`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about something you did that you are not proud of.`,answer:`This is the failure question asked personally rather than professionally, so the
grading is about accountability without self-flagellation. What matters: whether
you name something real and genuinely uncomfortable, whether you avoid the
compliment sandwich, and whether your conclusion is a mechanism rather than an
apology. An answer with a shallow lesson fails even if the story is good. Note
also that a small bad thing reads as honest, while a catastrophic one reads as
either a fabrication or a pattern you have not recognised in yourself.`,examples:[{title:`Uncomfortable and specific`,code:`I reviewed a junior's PR with one line of feedback - nit: fix this - on a file
with 200 lines in it. I was late for something and I did it in about ninety
seconds.

Why I am not proud of it: that comment is indistinguishable from saying your work
is not worth my time, which is what it told her. She read it that way. She stopped
asking me for reviews for two months.

What I did: I noticed, went back, and apologised properly - not for the time, for
the framing. Then asked directly what had put her off.

What I installed: I now leave either a substantive review or say I cannot get to
it properly today and suggest someone else. No more one-line reviews.

What I still feel awkward about: I did not raise it at the time. I only noticed
because a third person mentioned she had been quiet in reviews. That is the part
I actually learned from.`,explanation:`The story is small, the embarrassment is real, and the final line identifies the
actual failure - not reacting sooner - rather than the nit itself.`}]},{id:`behavioural-46`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you sought out perspectives different from your own.`,answer:`Graded on whether you actually changed your mind. Seeking perspectives you
already agree with is not the competency. The strong answer names who you
deliberately went to and why them specifically, states what they told you that
you had not considered, and - the part most candidates skip - says plainly where
they were right. Wording matters: I was wrong about X is the signal. If your
conclusion was that you were right, that is a weaker answer and you should be
able to say why their view did not move you.`,examples:[{title:`Including where they were right`,code:`I was convinced our quarterly planning was broken because the teams had no
visibility of each other's timelines.

So I went and asked the two teams who were always asked to move, separately, and
then asked the platform lead who owned the scheduling tool. All three said the
tooling was fine and the problem was that we were renegotiating priorities in the
last week, every quarter.

That is not what I expected. They were right - I had been treating the timeline
scramble as a visibility problem because I only ever saw it from my own side.

What changed: I moved priority negotiation to week one of the quarter and gave it
a fixed slot. The timeline scramble has not happened in three quarters.

What I got wrong that I did not correct: I still think the tooling could show
cross-team load better. I just no longer think that is the problem.`,explanation:`Naming who you asked, saying what you learned, and admitting where you remained
unconvinced - all three - reads as genuine intellectual humility.`}]},{id:`behavioural-47`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time someone was being excluded and you helped.`,answer:`The graded distinction is intervening versus observing, and whether you involved
yourself rather than feeling bad about it. Strong answers are specific about the
observable behaviour, safe in the moment, and effective - and they avoid the trap
of narrating a discrimination story in which you single-handedly corrected a
systemic issue. The most credible shape is usually the low-stakes one: a meeting
where someone was talked over, a review where an area of work was dismissed, an
offhand remark you did not let pass. Graded also: whether you raised it in the
moment or privately afterwards, and how you followed up.`,examples:[{title:`Small, observable, in the moment`,code:`In a design review, the most experienced person in the room twice answered a
question I had asked about my own component before I finished the sentence.

In the moment, the second time: I said, quite neutrally, let me finish the
thought, then I would like to come back to your point. Then I actually did come
back to their point, and said it was worth discussing.

That matters more than it sounds - if I had just cut them off repeatedly, I would
have looked like I was defending territory rather than the conversation.

Afterwards, separately: I mentioned to my manager that I had noticed it twice,
not as a complaint, and that I was not sure how common it was.

What changed: nothing dramatic. But a few months later the same person asked me a
direct question about the component instead of assuming. Which is what I wanted.

Honest part: I did not raise it again, and I still do not know how widespread it
was.`,explanation:`The move is small, in the moment, non-accusatory, and includes giving the other
person credit - which keeps it from reading as territorial.`}]},{id:`behavioural-48`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`Tell me about a time you worked with someone whose style was very different from yours.`,answer:`Graded on whether you genuinely adapted rather than merely tolerated, and on
whether you learned something specific about the other approach - ideally
something you adopted. Tolerance is not the competency. A strong answer names the
specific difference (planning-first versus exploratory, verbose versus terse,
comfortable with ambiguity versus needing closure), describes the specific
friction it caused, and describes the concrete change you made to your own
behaviour. The follow-up trap is what you learned about yourself - if you only
learned about them, the answer is thin.`,examples:[{title:`Adapted, and adopted something`,code:`I plan everything before starting. My pair on the migration wrote a throwaway
script, ran it against production data and iterated. I thought that was
reckless. I was wrong, and here is why.

What I had been doing: writing a full design doc, getting it reviewed, then
implementing. For the schema migration that meant three weeks before any real
feedback, and the doc was written against assumptions about the data I could have
tested in an hour.

What he taught me: for anything I cannot fully specify up front, build the
smallest script that proves the risk and run it. The script becomes either the
migration or the reason to write the doc.

What I changed: I now do a one-hour spike on anything involving data I have not
seen. For the second migration I did it, found two columns the docs said were NOT
NULL that were not, and avoided a bad week.

Honest caveat: I still write the doc for changes with real reversibility risk. I
am not abandoning planning.`,explanation:`Adopting something from the other person, with evidence it worked on a later
task, is what separates adaptation from tolerance.`}]},{id:`behavioural-49`,category:`behavioural`,difficulty:`advanced`,scenarioBased:!1,isRead:!1,question:`Tell me about a technical decision where reasonable engineers would disagree. What did you decide?`,answer:`This is the highest-value question for a senior candidate and the one most often
wasted on a project description instead of a decision. Anchor the whole story on
the central trade-off - consistency versus availability, build versus buy,
monolith versus services. What is being probed is whether you can name the
alternative a competent peer would have chosen, articulate why you rejected it,
and state the condition under which you would change your mind. An answer with no
credible alternative is not a decision, it is an implementation.`,examples:[{title:`Trade-off stories worth banking for Angular`,code:`Strong candidates, each with a real axis:

1. NgRx to Signals migration, or a principled refusal to do it.
   Axis: consistency of one state paradigm vs. fitting async work.
2. Bundle budgets as a hard CI failure.
   Axis: PR friction vs. a whole class of late regressions.
3. Modular monolith vs. micro-frontends.
   Axis: deployment independence vs. dependency and runtime cost.
4. SSR and hydration vs. CSR under Core Web Vitals pressure.
   Axis: first-paint metrics vs. server cost and complexity.
5. A major Angular upgrade driven across teams.
   Axis: one risky migration vs. accumulating version debt.
6. Adopting a component library vs. building in-house.
   Axis: control and fit vs. delivery speed and maintenance.

For each, be able to say: the option I rejected, why, what it cost, and what
would make me reverse.`,explanation:`Having six of these ready covers most senior technical-judgement questions,
because the axis matters more than the project.`}]},{id:`behavioural-50`,category:`behavioural`,difficulty:`medium`,scenarioBased:!1,isRead:!1,question:`How do you decide what to optimise for when everything is a trade-off?`,answer:`A philosophy question, so PREP rather than STAR. The graded content is whether
you can name the trade-off explicitly rather than saying it depends - because
it depends without naming what it depends on is not an answer. Strong responses
define the non-negotiable first (data integrity, user trust, or the constraint
that actually binds), then rank the rest, and crucially say what would make them
re-rank. Saying what you refuse to trade is what distinguishes a senior answer,
since most candidates claim to optimise everything equally.`,examples:[{title:`Naming the ranking`,code:`P - Point
I decide the non-negotiable first, then rank the rest, and I say out loud what
I will not trade.
R - Reason
Optimising everything equally is not a priority, it is an avoidance. And if I
cannot say what I refuse to trade, I have not made a decision - I have deferred
it.
E - Example
On the checkout work: user trust and payment correctness are non-negotiable, so
latency is where the pressure goes. I said that explicitly to the team, which
meant a complaint about latency got a this is the trade I chose answer instead
of an argument. Latency was the thing I gave up, not correctness. Later, when a
cache could remove 400ms without risking either, that was a pure win and we took
it.
P - Point
The thing I watch for is when the ranking was set by a deadline rather than by
the problem. That is worth revisiting out loud.`,explanation:`Naming what you refuse to trade, and separating binding constraints from
negotiable ones, is the actual senior answer.`}]}]};var en=`q-read-flags`;var ni=`q-flags`;var ii=Object.values(Xt).flat();var ai={"angular-7":`performance-21`,"angular-23":`performance-22`,"angular-28":`performance-23`};var oi={questionData:[]};function ri(i){if(!i)return[];try{let a=JSON.parse(i);return Array.isArray(a)?a:[]}catch{return[]}}function Zt(i,a){let e=ri(i).filter(t=>typeof t?.id==`string`).map(t=>[ai[t.id]??t.id,a(t)]).filter(t=>t[1]!==null);return Object.fromEntries(e)}function si(){let i=localStorage.getItem(en);if(i!==null)return Zt(i,e=>typeof e?.isRead==`boolean`?e.isRead:null);let a=localStorage.getItem(ni);return a?Zt(a,e=>typeof e?.forLater==`boolean`?e.forLater:null):{}}var er=Kt({providedIn:`root`},Yt(oi),Qt(i=>({onInit(){let a=si();We(i,{questionData:ii.map(e=>J(x({},e),{isRead:a[e.id]===!0}))}),Eo(()=>{localStorage.setItem(en,JSON.stringify(i.questionData().map(({id:e,isRead:t})=>({id:e,isRead:t})).filter(e=>e.isRead)))})}})),Jt(i=>({toggleRead(a){We(i,e=>({questionData:e.questionData.map(t=>t.id===a?J(x({},t),{isRead:!t.isRead}):t)}))}})));export{fo as _,Jt as a,mn as b,On as c,Te as d,Un as f,er as g,_n as h,Ho as i,Pn as l,Yt as m,Cn as n,Kt as o,We as p,Ei as r,Oa as s,At as t,Qt as u,go as v,mo as x,ia as y};