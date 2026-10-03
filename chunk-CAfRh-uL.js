import{$ as Py,Bn as rp,Cn as lc,Dn as no,Et as Xo,F as Kf,Fn as ql,G as OI,It as _o,K as Ol,Kn as tp,Lt as aE,M as Ip,Ot as YI,P as Jf,R as ME,Rt as aI,Sn as lI,Un as sl,Vn as sc,Wn as sp,Xt as dr,Y as PL,Yt as dp,_n as jg,_t as VL,at as SE,bn as kI,er as vE,et as QI,gn as je$1,gr as zI,gt as VI,ir as vp,it as S,kt as Yf,n as $I,o as AI,ot as Se,r as $L,rt as Rl,s as BL,sr as xI,ur as xp,ut as T,v as Ep,w as Gl,x as GI,xt as WI,yn as kE}from"./chunk-CeFf50PM.js";import{C as Tn,D as Ka,E as $t,K as gd,M as Ee,N as Ft,O as Ya,T as on,b as Nt,q as nd,v as Ct,x as Rn}from"./main-U4YCJKVK.js";import{n as mt,t as Yt}from"./chunk-y5uDiH_N.js";import{n as O,t as $}from"./chunk-DA8u9RjW.js";import{t as R}from"./chunk-GCNJXOFA.js";import{a as Ye,c as ct,i as X,n as Hi,o as at,r as Pt,s as ci,t as Ee$1}from"./chunk-DOSv8Qpx.js";var Ae=[`*`];var Re=(()=>{class c{labelPosition=`after`;static ɵfac=function(n){return new(n||c)};static ɵcmp=aI({type:c,selectors:[[``,`mat-internal-form-field`,``]],hostAttrs:[1,`mdc-form-field`,`mat-internal-form-field`],hostVars:2,hostBindings:function(n,t){n&2&&dp(`mdc-form-field--align-end`,t.labelPosition===`before`)},inputs:{labelPosition:`labelPosition`},ngContentSelectors:Ae,decls:1,vars:0,template:function(n,t){n&1&&(WI(),GI(0))},styles:[`.mat-internal-form-field {
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  display: inline-flex;
  align-items: center;
  vertical-align: middle;
}
.mat-internal-form-field > label, .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
  order: 0;
}
[dir=rtl] .mat-internal-form-field > label, [dir=rtl] .mat-internal-form-field > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
}

.mdc-form-field--align-end > label, .mdc-form-field--align-end > .mat-internal-form-field-label {
  margin-left: auto;
  margin-right: 0;
  padding-left: 0;
  padding-right: 4px;
  order: -1;
}
[dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end label, [dir=rtl] .mdc-form-field--align-end .mdc-form-field--align-end .mat-internal-form-field-label {
  margin-left: 0;
  margin-right: auto;
  padding-left: 4px;
  padding-right: 0;
}
`],encapsulation:2})}return c})();var qe=[`input`];var Be=[`*`];var L={color:`accent`,clickAction:`check-indeterminate`,disabledInteractive:!1};var Oe=new S(`mat-checkbox-default-options`,{providedIn:`root`,factory:()=>L});var m=(function(c){return c[c.Init=0]=`Init`,c[c.Checked=1]=`Checked`,c[c.Unchecked=2]=`Unchecked`,c[c.Indeterminate=3]=`Indeterminate`,c})(m||{});var A=class{source;checked};var q=(()=>{class c{_elementRef=T(dr);_changeDetectorRef=T(VL);_ngZone=T(Se);_animationsDisabled=nd();_options=T(Oe,{optional:!0});focus(){this._inputElement.nativeElement.focus()}_createChangeEvent(e){let n=new A;return n.source=this,n.checked=e,n}_getAnimationTargetElement(){return this._inputElement?.nativeElement}_animationClasses={uncheckedToChecked:`mdc-checkbox--anim-unchecked-checked`,uncheckedToIndeterminate:`mdc-checkbox--anim-unchecked-indeterminate`,checkedToUnchecked:`mdc-checkbox--anim-checked-unchecked`,checkedToIndeterminate:`mdc-checkbox--anim-checked-indeterminate`,indeterminateToChecked:`mdc-checkbox--anim-indeterminate-checked`,indeterminateToUnchecked:`mdc-checkbox--anim-indeterminate-unchecked`};ariaLabel=``;ariaLabelledby=null;ariaDescribedby;ariaExpanded;ariaControls;ariaOwns;_uniqueId;id;get inputId(){return`${this.id||this._uniqueId}-input`}required=!1;labelPosition=`after`;name=null;change=new je$1;indeterminateChange=new je$1;value;disableRipple=!1;_inputElement;tabIndex;color;disabledInteractive;_onTouched=()=>{};_currentAnimationClass=``;_currentCheckState=m.Init;_controlValueAccessorChangeFn=()=>{};_validatorChangeFn=()=>{};constructor(){T(Ee).load(Nt);let e=T(new xp(`tabindex`),{optional:!0});this._options=this._options||L,this.color=this._options.color||L.color,this.tabIndex=e==null?0:parseInt(e)||0,this.id=this._uniqueId=T(Ft).getId(`mat-mdc-checkbox-`),this.disabledInteractive=this._options?.disabledInteractive??!1}ngOnChanges(e){e.required&&this._validatorChangeFn()}ngAfterViewInit(){this._syncIndeterminate(this.indeterminate)}get checked(){return this._checked}set checked(e){e!=this.checked&&(this._checked=e,this._changeDetectorRef.markForCheck())}_checked=!1;get disabled(){return this._disabled}set disabled(e){e!==this.disabled&&(this._disabled=e,this._changeDetectorRef.markForCheck())}_disabled=!1;get indeterminate(){return this._indeterminate()}set indeterminate(e){let n=e!=this._indeterminate();this._indeterminate.set(e),n&&(e?this._transitionCheckState(m.Indeterminate):this._transitionCheckState(this.checked?m.Checked:m.Unchecked),this.indeterminateChange.emit(e)),this._syncIndeterminate(e)}_indeterminate=_o(!1);_isRippleDisabled(){return this.disableRipple||this.disabled}_onLabelTextChange(){this._changeDetectorRef.detectChanges()}writeValue(e){this.checked=!!e}registerOnChange(e){this._controlValueAccessorChangeFn=e}registerOnTouched(e){this._onTouched=e}setDisabledState(e){this.disabled=e}validate(e){return this.required&&e.value!==!0?{required:!0}:null}registerOnValidatorChange(e){this._validatorChangeFn=e}_transitionCheckState(e){let n=this._currentCheckState,t=this._getAnimationTargetElement();if(!(n===e||!t)&&(this._currentAnimationClass&&t.classList.remove(this._currentAnimationClass),this._currentAnimationClass=this._getAnimationClassForCheckStateTransition(n,e),this._currentCheckState=e,this._currentAnimationClass.length>0)){t.classList.add(this._currentAnimationClass);let d=this._currentAnimationClass;this._ngZone.runOutsideAngular(()=>{setTimeout(()=>{t.classList.remove(d)},1e3)})}}_emitChangeEvent(){this._controlValueAccessorChangeFn(this.checked),this.change.emit(this._createChangeEvent(this.checked)),this._inputElement&&(this._inputElement.nativeElement.checked=this.checked)}toggle(){this.checked=!this.checked,this._controlValueAccessorChangeFn(this.checked)}_handleInputClick(){let e=this._options?.clickAction;!this.disabled&&e!==`noop`?(this.indeterminate&&e!==`check`&&Promise.resolve().then(()=>{this._indeterminate.set(!1),this.indeterminateChange.emit(!1)}),this._checked=!this._checked,this._transitionCheckState(this._checked?m.Checked:m.Unchecked),this._emitChangeEvent()):(this.disabled&&this.disabledInteractive||!this.disabled&&e===`noop`)&&(this._inputElement.nativeElement.checked=this.checked,this._inputElement.nativeElement.indeterminate=this.indeterminate)}_onInteractionEvent(e){e.stopPropagation()}_onBlur(){Promise.resolve().then(()=>{this._onTouched(),this._changeDetectorRef.markForCheck()})}_getAnimationClassForCheckStateTransition(e,n){if(this._animationsDisabled)return``;switch(e){case m.Init:if(n===m.Checked)return this._animationClasses.uncheckedToChecked;if(n==m.Indeterminate)return this._checked?this._animationClasses.checkedToIndeterminate:this._animationClasses.uncheckedToIndeterminate;break;case m.Unchecked:return n===m.Checked?this._animationClasses.uncheckedToChecked:this._animationClasses.uncheckedToIndeterminate;case m.Checked:return n===m.Unchecked?this._animationClasses.checkedToUnchecked:this._animationClasses.checkedToIndeterminate;case m.Indeterminate:return n===m.Checked?this._animationClasses.indeterminateToChecked:this._animationClasses.indeterminateToUnchecked}return``}_syncIndeterminate(e){let n=this._inputElement;n&&(n.nativeElement.indeterminate=e)}_onInputClick(){this._handleInputClick()}_preventBubblingFromLabel(e){e.target&&this._inputElement&&e.target!==this._inputElement.nativeElement&&e.stopPropagation()}static ɵfac=function(n){return new(n||c)};static ɵcmp=aI({type:c,selectors:[[`mat-checkbox`]],viewQuery:function(n,t){if(n&1&&sp(qe,5),n&2){let d;zI(d=QI())&&(t._inputElement=d.first)}},hostAttrs:[1,`mat-mdc-checkbox`],hostVars:16,hostBindings:function(n,t){n&2&&(tp(`id`,t.id),Yf(`tabindex`,null)(`aria-label`,null)(`aria-labelledby`,null),aE(t.color?`mat-`+t.color:`mat-accent`),dp(`_mat-animation-noopable`,t._animationsDisabled)(`mdc-checkbox--disabled`,t.disabled)(`mat-mdc-checkbox-disabled`,t.disabled)(`mat-mdc-checkbox-checked`,t.checked)(`mat-mdc-checkbox-disabled-interactive`,t.disabledInteractive))},inputs:{ariaLabel:[0,`aria-label`,`ariaLabel`],ariaLabelledby:[0,`aria-labelledby`,`ariaLabelledby`],ariaDescribedby:[0,`aria-describedby`,`ariaDescribedby`],ariaExpanded:[2,`aria-expanded`,`ariaExpanded`,BL],ariaControls:[0,`aria-controls`,`ariaControls`],ariaOwns:[0,`aria-owns`,`ariaOwns`],id:`id`,required:[2,`required`,`required`,BL],labelPosition:`labelPosition`,name:`name`,value:`value`,disableRipple:[2,`disableRipple`,`disableRipple`,BL],tabIndex:[2,`tabIndex`,`tabIndex`,e=>e==null?void 0:$L(e)],color:`color`,disabledInteractive:[2,`disabledInteractive`,`disabledInteractive`,BL],checked:[2,`checked`,`checked`,BL],disabled:[2,`disabled`,`disabled`,BL],indeterminate:[2,`indeterminate`,`indeterminate`,BL]},outputs:{change:`change`,indeterminateChange:`indeterminateChange`},exportAs:[`matCheckbox`],features:[ME([{provide:X,useExisting:no(()=>c),multi:!0},{provide:Pt,useExisting:c,multi:!0}]),jg],ngContentSelectors:Be,decls:15,vars:23,consts:[[`checkbox`,``],[`input`,``],[`label`,``],[`mat-internal-form-field`,``,3,`click`,`labelPosition`,`for`],[1,`mdc-checkbox`],[`aria-hidden`,`true`,1,`mat-mdc-checkbox-touch-target`],[`type`,`checkbox`,1,`mdc-checkbox__native-control`,3,`blur`,`click`,`change`,`checked`,`indeterminate`,`disabled`,`id`,`required`,`tabIndex`],[`aria-hidden`,`true`,1,`mdc-checkbox__ripple`],[`aria-hidden`,`true`,1,`mdc-checkbox__background`],[`focusable`,`false`,`viewBox`,`0 0 24 24`,1,`mdc-checkbox__checkmark`],[`fill`,`none`,`d`,`M1.73,12.91 8.1,19.28 22.79,4.59`,1,`mdc-checkbox__checkmark-path`],[1,`mdc-checkbox__mixedmark`],[`mat-ripple`,``,`aria-hidden`,`true`,1,`mat-mdc-checkbox-ripple`,`mat-focus-indicator`,3,`matRippleTrigger`,`matRippleDisabled`,`matRippleCentered`],[1,`mat-internal-form-field-label`,`mdc-label`]],template:function(n,t){if(n&1&&(WI(),Xo(0,`label`,3),rp(`click`,function(E){return t._preventBubblingFromLabel(E)}),Xo(1,`span`,4,0),Jf(3,`span`,5),Xo(4,`input`,6,1),rp(`blur`,function(){return t._onBlur()})(`click`,function(){return t._onInputClick()})(`change`,function(E){return t._onInteractionEvent(E)}),sc(),Jf(6,`span`,7),Xo(7,`span`,8),Gl(),Xo(8,`svg`,9),Jf(9,`path`,10),sc(),ql(),Jf(10,`span`,11),sc(),Jf(11,`span`,12),sc(),Xo(12,`span`,13,2),GI(14),sc()()),n&2){let d=YI(2);Kf(`labelPosition`,t.labelPosition)(`for`,t.inputId),Py(4),dp(`mdc-checkbox--selected`,t.checked),Kf(`checked`,t.checked)(`indeterminate`,t.indeterminate)(`disabled`,t.disabled&&!t.disabledInteractive)(`id`,t.inputId)(`required`,t.required)(`tabIndex`,t.disabled&&!t.disabledInteractive?-1:t.tabIndex),Yf(`aria-label`,t.ariaLabel||null)(`aria-labelledby`,t.ariaLabelledby)(`aria-describedby`,t.ariaDescribedby)(`aria-checked`,t.indeterminate?`mixed`:null)(`aria-controls`,t.ariaControls)(`aria-disabled`,t.disabled&&t.disabledInteractive?!0:null)(`aria-expanded`,t.ariaExpanded)(`aria-owns`,t.ariaOwns)(`name`,t.name)(`value`,t.value),Py(7),Kf(`matRippleTrigger`,d)(`matRippleDisabled`,t.disableRipple||t.disabled)(`matRippleCentered`,!0)}},dependencies:[on,Re],styles:[`.mdc-checkbox {
  display: inline-block;
  position: relative;
  flex: 0 0 18px;
  box-sizing: content-box;
  width: 18px;
  height: 18px;
  line-height: 0;
  white-space: nowrap;
  cursor: pointer;
  vertical-align: bottom;
  padding: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  margin: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}
.mdc-checkbox:hover > .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:hover > .mat-mdc-checkbox-ripple > .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control:focus ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-focus-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-unselected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-unselected-pressed-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-hover-state-layer-opacity, var(--%NS%mat-sys-hover-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-hover-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-focus-state-layer-opacity, var(--%NS%mat-sys-focus-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox .mdc-checkbox__native-control:focus:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-focus-state-layer-color, var(--%NS%mat-sys-primary));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked + .mdc-checkbox__ripple {
  opacity: var(--%NS%mat-checkbox-selected-pressed-state-layer-opacity, var(--%NS%mat-sys-pressed-state-layer-opacity));
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox:active > .mdc-checkbox__native-control:checked ~ .mat-mdc-checkbox-ripple .mat-ripple-element {
  background-color: var(--%NS%mat-checkbox-selected-pressed-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control ~ .mat-mdc-checkbox-ripple .mat-ripple-element,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control + .mdc-checkbox__ripple {
  background-color: var(--%NS%mat-checkbox-unselected-hover-state-layer-color, var(--%NS%mat-sys-on-surface));
}
.mdc-checkbox .mdc-checkbox__native-control {
  position: absolute;
  margin: 0;
  padding: 0;
  opacity: 0;
  cursor: inherit;
  z-index: 1;
  width: var(--%NS%mat-checkbox-state-layer-size, 40px);
  height: var(--%NS%mat-checkbox-state-layer-size, 40px);
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  right: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - var(--%NS%mat-checkbox-state-layer-size, 40px)) / 2);
}

.mdc-checkbox--disabled {
  cursor: default;
  pointer-events: none;
}

.mdc-checkbox__background {
  display: inline-flex;
  position: absolute;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  width: 18px;
  height: 18px;
  border: 2px solid currentColor;
  border-radius: 2px;
  background-color: transparent;
  pointer-events: none;
  will-change: background-color, border-color;
  transition: background-color 90ms cubic-bezier(0.4, 0, 0.6, 1), border-color 90ms cubic-bezier(0.4, 0, 0.6, 1);
  -webkit-print-color-adjust: exact;
  color-adjust: exact;
  border-color: var(--%NS%mat-checkbox-unselected-icon-color, var(--%NS%mat-sys-on-surface-variant));
  top: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
  left: calc((var(--%NS%mat-checkbox-state-layer-size, 40px) - 18px) / 2);
}

.mdc-checkbox__native-control:enabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:enabled:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}
@media (forced-colors: active) {
  .mdc-checkbox__native-control:disabled:checked ~ .mdc-checkbox__background,
  .mdc-checkbox__native-control:disabled:indeterminate ~ .mdc-checkbox__background {
    border-color: GrayText;
  }
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-hover-icon-color, var(--%NS%mat-sys-on-surface));
  background-color: transparent;
}

.mdc-checkbox:hover > .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox:hover > .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-hover-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox__native-control:focus:focus:not(:checked) ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:not(:indeterminate) ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-unselected-focus-icon-color, var(--%NS%mat-sys-on-surface));
}

.mdc-checkbox__native-control:focus:focus:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:focus:focus:indeterminate ~ .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
  background-color: var(--%NS%mat-checkbox-selected-focus-icon-color, var(--%NS%mat-sys-primary));
}

.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
  border-color: var(--%NS%mat-checkbox-disabled-unselected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox:hover > .mdc-checkbox__native-control ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox .mdc-checkbox__native-control:focus ~ .mdc-checkbox__background,
  .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__background {
    border-color: GrayText;
  }
}
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  background-color: var(--%NS%mat-checkbox-disabled-selected-icon-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
  border-color: transparent;
}

.mdc-checkbox__checkmark {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  width: 100%;
  opacity: 0;
  transition: opacity 180ms cubic-bezier(0.4, 0, 0.6, 1);
  color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__checkmark {
    color: CanvasText;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
  color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__checkmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__checkmark {
    color: GrayText;
  }
}

.mdc-checkbox__checkmark-path {
  transition: stroke-dashoffset 180ms cubic-bezier(0.4, 0, 0.6, 1);
  stroke: currentColor;
  stroke-width: 3.12px;
  stroke-dashoffset: 29.7833385;
  stroke-dasharray: 29.7833385;
}

.mdc-checkbox__mixedmark {
  width: 100%;
  height: 0;
  transform: scaleX(0) rotate(0deg);
  border-width: 1px;
  border-style: solid;
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
  border-color: var(--%NS%mat-checkbox-selected-checkmark-color, var(--%NS%mat-sys-on-primary));
}
@media (forced-colors: active) {
  .mdc-checkbox__mixedmark {
    margin: 0 1px;
  }
}

.mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
  border-color: var(--%NS%mat-checkbox-disabled-selected-checkmark-color, var(--%NS%mat-sys-surface));
}
@media (forced-colors: active) {
  .mdc-checkbox--disabled .mdc-checkbox__mixedmark, .mdc-checkbox--disabled.mat-mdc-checkbox-disabled-interactive .mdc-checkbox__mixedmark {
    border-color: GrayText;
  }
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__background,
.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__background,
.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__background,
.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__background {
  animation-duration: 180ms;
  animation-timing-function: linear;
}

.mdc-checkbox--anim-unchecked-checked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-unchecked-checked-checkmark-path 180ms linear;
  transition: none;
}

.mdc-checkbox--anim-unchecked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-unchecked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-unchecked .mdc-checkbox__checkmark-path {
  animation: mdc-checkbox-checked-unchecked-checkmark-path 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__checkmark {
  animation: mdc-checkbox-checked-indeterminate-checkmark 90ms linear;
  transition: none;
}
.mdc-checkbox--anim-checked-indeterminate .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-checked-indeterminate-mixedmark 90ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__checkmark {
  animation: mdc-checkbox-indeterminate-checked-checkmark 500ms linear;
  transition: none;
}
.mdc-checkbox--anim-indeterminate-checked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-checked-mixedmark 500ms linear;
  transition: none;
}

.mdc-checkbox--anim-indeterminate-unchecked .mdc-checkbox__mixedmark {
  animation: mdc-checkbox-indeterminate-unchecked-mixedmark 300ms linear;
  transition: none;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background {
  transition: border-color 90ms cubic-bezier(0, 0, 0.2, 1), background-color 90ms cubic-bezier(0, 0, 0.2, 1);
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path {
  stroke-dashoffset: 0;
}

.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transition: opacity 180ms cubic-bezier(0, 0, 0.2, 1), transform 180ms cubic-bezier(0, 0, 0.2, 1);
  opacity: 1;
}
.mdc-checkbox__native-control:checked ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(-45deg);
}

.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__checkmark {
  transform: rotate(45deg);
  opacity: 0;
  transition: opacity 90ms cubic-bezier(0.4, 0, 0.6, 1), transform 90ms cubic-bezier(0.4, 0, 0.6, 1);
}
.mdc-checkbox__native-control:indeterminate ~ .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transform: scaleX(1) rotate(0deg);
  opacity: 1;
}

@keyframes mdc-checkbox-unchecked-checked-checkmark-path {
  0%, 50% {
    stroke-dashoffset: 29.7833385;
  }
  50% {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  }
  100% {
    stroke-dashoffset: 0;
  }
}
@keyframes mdc-checkbox-unchecked-indeterminate-mixedmark {
  0%, 68.2% {
    transform: scaleX(0);
  }
  68.2% {
    animation-timing-function: cubic-bezier(0, 0, 0, 1);
  }
  100% {
    transform: scaleX(1);
  }
}
@keyframes mdc-checkbox-checked-unchecked-checkmark-path {
  from {
    animation-timing-function: cubic-bezier(0.4, 0, 1, 1);
    opacity: 1;
    stroke-dashoffset: 0;
  }
  to {
    opacity: 0;
    stroke-dashoffset: -29.7833385;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-checkmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(45deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-checkmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(45deg);
    opacity: 0;
  }
  to {
    transform: rotate(360deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-checked-indeterminate-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
    transform: rotate(-45deg);
    opacity: 0;
  }
  to {
    transform: rotate(0deg);
    opacity: 1;
  }
}
@keyframes mdc-checkbox-indeterminate-checked-mixedmark {
  from {
    animation-timing-function: cubic-bezier(0.14, 0, 0, 1);
    transform: rotate(0deg);
    opacity: 1;
  }
  to {
    transform: rotate(315deg);
    opacity: 0;
  }
}
@keyframes mdc-checkbox-indeterminate-unchecked-mixedmark {
  0% {
    animation-timing-function: linear;
    transform: scaleX(1);
    opacity: 1;
  }
  32.8%, 100% {
    transform: scaleX(0);
    opacity: 0;
  }
}
.mat-mdc-checkbox {
  display: inline-block;
  position: relative;
  -webkit-tap-highlight-color: transparent;
}
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-touch-target,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__native-control,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__ripple,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mat-mdc-checkbox-ripple::before,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__checkmark > .mdc-checkbox__checkmark-path,
.mat-mdc-checkbox._mat-animation-noopable > .mat-internal-form-field > .mdc-checkbox > .mdc-checkbox__background > .mdc-checkbox__mixedmark {
  transition: none !important;
  animation: none !important;
}
.mat-mdc-checkbox label {
  cursor: pointer;
}
.mat-mdc-checkbox .mat-internal-form-field {
  color: var(--%NS%mat-checkbox-label-text-color, var(--%NS%mat-sys-on-surface));
  font-family: var(--%NS%mat-checkbox-label-text-font, var(--%NS%mat-sys-body-medium-font));
  line-height: var(--%NS%mat-checkbox-label-text-line-height, var(--%NS%mat-sys-body-medium-line-height));
  font-size: var(--%NS%mat-checkbox-label-text-size, var(--%NS%mat-sys-body-medium-size));
  letter-spacing: var(--%NS%mat-checkbox-label-text-tracking, var(--%NS%mat-sys-body-medium-tracking));
  font-weight: var(--%NS%mat-checkbox-label-text-weight, var(--%NS%mat-sys-body-medium-weight));
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive {
  pointer-events: auto;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled.mat-mdc-checkbox-disabled-interactive input {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled label {
  cursor: default;
}
.mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
  color: var(--%NS%mat-checkbox-disabled-label-color, color-mix(in srgb, var(--%NS%mat-sys-on-surface) 38%, transparent));
}
@media (forced-colors: active) {
  .mat-mdc-checkbox.mat-mdc-checkbox-disabled .mat-internal-form-field-label {
    color: GrayText;
  }
}
.mat-mdc-checkbox .mat-internal-form-field-label:empty {
  display: none;
}
.mat-mdc-checkbox .mdc-checkbox__ripple {
  opacity: 0;
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple,
.mdc-checkbox__ripple {
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  position: absolute;
  border-radius: 50%;
  pointer-events: none;
}
.mat-mdc-checkbox .mat-mdc-checkbox-ripple:not(:empty),
.mdc-checkbox__ripple:not(:empty) {
  transform: translateZ(0);
}

.mat-mdc-checkbox-ripple .mat-ripple-element {
  opacity: 0.1;
}

.mat-mdc-checkbox-touch-target {
  position: absolute;
  top: 50%;
  left: 50%;
  height: var(--%NS%mat-checkbox-touch-target-size, 48px);
  width: var(--%NS%mat-checkbox-touch-target-size, 48px);
  transform: translate(-50%, -50%);
  display: var(--%NS%mat-checkbox-touch-target-display, block);
}

.mat-mdc-checkbox .mat-mdc-checkbox-ripple::before {
  border-radius: 50%;
}

.mdc-checkbox__native-control:focus-visible ~ .mat-focus-indicator::before {
  content: "";
}
`],encapsulation:2})}return c})();var ze=(()=>{class c{static ɵfac=function(n){return new(n||c)};static ɵmod=lI({type:c});static ɵinj=sl({imports:[q,gd]})}return c})();var Ve=(c,a)=>[`/`,c,a];var Qe=(c,a)=>a.value;var je=(c,a)=>a.id;function Ue(c,a){if(c&1&&(Xo(0,`mat-chip-option`,3),vE(1),sc()),c&2){let e=a.$implicit,n=$I();Kf(`value`,e.value),Py(),Ip(` `,e.label,` (`,n.countForDifficulty(e.value),`) `)}}function Ge(c,a){if(c&1){let e=VI();Xo(0,`button`,13),rp(`click`,function(){Rl(e);return Ol($I().clearFilters())}),Xo(1,`mat-icon`),vE(2,`filter_alt_off`),sc(),vE(3,` Clear `),sc()}}function Xe(c,a){if(c&1){let e=VI();Xo(0,`li`,14)(1,`span`,15),vE(2),sc(),Xo(3,`a`,16),vE(4),sc(),Xo(5,`div`,17),Jf(6,`app-question-badges`,18)(7,`app-question-notes`,19),Xo(8,`button`,20),rp(`click`,function(){let t=Rl(e).$implicit;return Ol($I(2).toggleRead(t.id))}),Xo(9,`mat-icon`),vE(10),sc()()()()}if(c&2){let e=a.$implicit,n=a.$index;Py(),aE(e.isRead?`text-(--mat-sys-on-surface-variant)`:`text-(--mat-sys-primary)`),Py(),lc(``,n+1,`.`),Py(),aE(e.isRead?`text-(--mat-sys-on-surface-variant)`:`text-(--mat-sys-on-surface)`),Kf(`routerLink`,SE(17,Ve,e.category,e.id)),Py(),vp(e.question),Py(2),Kf(`difficulty`,e.difficulty)(`scenarioBased`,e.scenarioBased),Py(),Kf(`questionId`,e.id)(`question`,e.question),Py(),Kf(`matTooltip`,e.isRead?`Mark as unread`:`Mark as read`),Yf(`aria-pressed`,e.isRead)(`aria-label`,(e.isRead?`Mark as unread: `:`Mark as read: `)+e.question),Py(),aE(e.isRead?``:`text-(--mat-sys-primary)`),Py(),vp(e.isRead?`check_circle`:`radio_button_unchecked`)}}function $e(c,a){if(c&1&&(Xo(0,`ul`,11),OI(1,Xe,11,20,`li`,14,je),sc()),c&2){let e=$I();Py(),kI(e.faqs())}}function He(c,a){if(c&1){let e=VI();Xo(0,`button`,13),rp(`click`,function(){Rl(e);return Ol($I(2).clearFilters())}),vE(1,`Clear filters`),sc()}}function Ze(c,a){if(c&1&&(Xo(0,`p`,12),vE(1,` No questions match these filters. `),xI(2,He,2,0,`button`,9),sc()),c&2){let e=$I();Py(2),AI(e.hasActiveFilters()?2:-1)}}var Le=class c{store=T(R);category=PL.required();difficultyOptions=[{value:`basic`,label:`Basic`},{value:`medium`,label:`Medium`},{value:`advanced`,label:`Advanced`}];difficultyFilter=_o([]);scenarioFilter=_o(!1);readFilter=_o(`all`);faqs=kE(()=>{let a=this.difficultyFilter(),e=this.scenarioFilter(),n=this.readFilter();return this.store.questionData().filter(t=>t.category!==this.category()||a.length&&!a.includes(t.difficulty)||e&&!t.scenarioBased?!1:n===`all`||t.isRead===(n===`read`))});categoryTotal=kE(()=>this.store.questionData().filter(a=>a.category===this.category()).length);readCount=kE(()=>this.store.questionData().filter(a=>a.category===this.category()&&a.isRead).length);hasActiveFilters=kE(()=>this.difficultyFilter().length>0||this.scenarioFilter()||this.readFilter()!==`all`);countForDifficulty(a){return this.store.questionData().filter(e=>e.category===this.category()&&e.difficulty===a).length}onDifficultyChange(a){this.difficultyFilter.set(a.value??[])}onReadFilterChange(a){this.readFilter.set(a.value)}clearFilters(){this.difficultyFilter.set([]),this.scenarioFilter.set(!1),this.readFilter.set(`all`)}toggleRead(a){this.store.toggleRead(a)}static ɵfac=function(e){return new(e||c)};static ɵcmp=aI({type:c,selectors:[[`app-question-list`]],inputs:{category:[1,`category`]},decls:19,vars:8,consts:[[1,`mb-3`,`flex`,`flex-col`,`gap-3`,`px-4`],[1,`flex`,`flex-wrap`,`items-center`,`gap-x-4`,`gap-y-3`],[`multiple`,``,`aria-label`,`Filter by difficulty`,3,`change`,`value`],[3,`value`],[3,`change`,`checked`],[`hideSingleSelectionIndicator`,``,`aria-label`,`Filter by read status`,1,`read-filter`,`self-center`,`[--mat-button-toggle-height:32px]`,3,`change`,`value`],[`value`,`all`],[`value`,`unread`],[`value`,`read`],[`mat-button`,``,`type`,`button`],[1,`m-0`,`text-sm`,`text-(--mat-sys-on-surface-variant)`],[`aria-label`,`Questions`,1,`m-0`,`list-none`,`border-t`,`border-(--mat-sys-outline-variant)`,`p-0`],[1,`px-4`,`py-6`,`text-center`,`text-(--mat-sys-on-surface-variant)`],[`mat-button`,``,`type`,`button`,3,`click`],[1,`relative`,`flex`,`flex-wrap`,`items-start`,`gap-x-3`,`gap-y-1`,`px-4`,`py-3`,`hover:bg-(--mat-sys-surface-container)`,`has-focus-visible:outline-2`,`has-focus-visible:-outline-offset-2`,`has-focus-visible:outline-(--mat-sys-primary)`,`sm:items-center`],[1,`w-6`,`shrink-0`,`pt-0.5`,`text-sm`,`tabular-nums`,`sm:pt-0`],[1,`min-w-0`,`flex-1`,`text-[0.95rem]`,`leading-snug`,`font-medium`,`no-underline`,`after:absolute`,`after:inset-0`,`after:content-['']`,`hover:text-(--mat-sys-primary)`,3,`routerLink`],[1,`flex`,`w-full`,`items-center`,`justify-between`,`gap-2`,`pl-9`,`sm:w-auto`,`sm:justify-start`,`sm:pl-0`],[3,`difficulty`,`scenarioBased`],[3,`questionId`,`question`],[`mat-icon-button`,``,`type`,`button`,1,`relative`,`z-10`,`shrink-0`,3,`click`,`matTooltip`]],template:function(e,n){e&1&&(Xo(0,`div`,0)(1,`div`,1)(2,`mat-chip-listbox`,2),rp(`change`,function(d){return n.onDifficultyChange(d)}),OI(3,Ue,2,3,`mat-chip-option`,3,Qe),sc(),Xo(5,`mat-checkbox`,4),rp(`change`,function(d){return n.scenarioFilter.set(d.checked)}),vE(6,` Scenario based only `),sc(),Xo(7,`mat-button-toggle-group`,5),rp(`change`,function(d){return n.onReadFilterChange(d)}),Xo(8,`mat-button-toggle`,6),vE(9,`All`),sc(),Xo(10,`mat-button-toggle`,7),vE(11,`Unread`),sc(),Xo(12,`mat-button-toggle`,8),vE(13,`Read`),sc()(),xI(14,Ge,4,0,`button`,9),sc(),Xo(15,`p`,10),vE(16),sc()(),xI(17,$e,3,0,`ul`,11)(18,Ze,3,1,`p`,12)),e&2&&(Py(2),Kf(`value`,n.difficultyFilter()),Py(),kI(n.difficultyOptions),Py(2),Kf(`checked`,n.scenarioFilter()),Py(2),Kf(`value`,n.readFilter()),Py(7),AI(n.hasActiveFilters()?14:-1),Py(2),Ep(` Showing `,n.faqs().length,` of `,n.categoryTotal(),` · `,n.readCount(),` read `),Py(),AI(n.faqs().length?17:18))},dependencies:[Hi,ct,at,ze,q,Tn,Rn,Ct,ci,Ye,Ee$1,Ya,Ka,Yt,mt,$t,$,O],styles:[`.read-filter[_ngcontent-%COMP%]   .mat-button-toggle-checked[_ngcontent-%COMP%]{--%NS%mat-button-toggle-selected-state-background-color: var(--%NS%mat-sys-primary);--%NS%mat-button-toggle-selected-state-text-color: var(--%NS%mat-sys-on-primary)}`]})};export{Le as t};