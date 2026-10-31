var Dx=Object.defineProperty;var Nx=(i,e,t)=>e in i?Dx(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _t=(i,e,t)=>Nx(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Ux(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var bd={exports:{}},yo={},Pd={exports:{}},Pt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Fx(){if(og)return Pt;og=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},T=Object.assign,b={};function y(N,oe,Te){this.props=N,this.context=oe,this.refs=b,this.updater=Te||M}y.prototype.isReactComponent={},y.prototype.setState=function(N,oe){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,oe,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=y.prototype;function D(N,oe,Te){this.props=N,this.context=oe,this.refs=b,this.updater=Te||M}var z=D.prototype=new S;z.constructor=D,T(z,y.prototype),z.isPureReactComponent=!0;var C=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function w(N,oe,Te){var Be,Xe={},qe=null,ue=null;if(oe!=null)for(Be in oe.ref!==void 0&&(ue=oe.ref),oe.key!==void 0&&(qe=""+oe.key),oe)L.call(oe,Be)&&!I.hasOwnProperty(Be)&&(Xe[Be]=oe[Be]);var pe=arguments.length-2;if(pe===1)Xe.children=Te;else if(1<pe){for(var ye=Array(pe),Qe=0;Qe<pe;Qe++)ye[Qe]=arguments[Qe+2];Xe.children=ye}if(N&&N.defaultProps)for(Be in pe=N.defaultProps,pe)Xe[Be]===void 0&&(Xe[Be]=pe[Be]);return{$$typeof:i,type:N,key:qe,ref:ue,props:Xe,_owner:P.current}}function U(N,oe){return{$$typeof:i,type:N.type,key:oe,ref:N.ref,props:N.props,_owner:N._owner}}function k(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function G(N){var oe={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Te){return oe[Te]})}var j=/\/+/g;function ie(N,oe){return typeof N=="object"&&N!==null&&N.key!=null?G(""+N.key):oe.toString(36)}function H(N,oe,Te,Be,Xe){var qe=typeof N;(qe==="undefined"||qe==="boolean")&&(N=null);var ue=!1;if(N===null)ue=!0;else switch(qe){case"string":case"number":ue=!0;break;case"object":switch(N.$$typeof){case i:case e:ue=!0}}if(ue)return ue=N,Xe=Xe(ue),N=Be===""?"."+ie(ue,0):Be,C(Xe)?(Te="",N!=null&&(Te=N.replace(j,"$&/")+"/"),H(Xe,oe,Te,"",function(Qe){return Qe})):Xe!=null&&(k(Xe)&&(Xe=U(Xe,Te+(!Xe.key||ue&&ue.key===Xe.key?"":(""+Xe.key).replace(j,"$&/")+"/")+N)),oe.push(Xe)),1;if(ue=0,Be=Be===""?".":Be+":",C(N))for(var pe=0;pe<N.length;pe++){qe=N[pe];var ye=Be+ie(qe,pe);ue+=H(qe,oe,Te,ye,Xe)}else if(ye=_(N),typeof ye=="function")for(N=ye.call(N),pe=0;!(qe=N.next()).done;)qe=qe.value,ye=Be+ie(qe,pe++),ue+=H(qe,oe,Te,ye,Xe);else if(qe==="object")throw oe=String(N),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return ue}function ne(N,oe,Te){if(N==null)return N;var Be=[],Xe=0;return H(N,Be,"","",function(qe){return oe.call(Te,qe,Xe++)}),Be}function ae(N){if(N._status===-1){var oe=N._result;oe=oe(),oe.then(function(Te){(N._status===0||N._status===-1)&&(N._status=1,N._result=Te)},function(Te){(N._status===0||N._status===-1)&&(N._status=2,N._result=Te)}),N._status===-1&&(N._status=0,N._result=oe)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},Y={transition:null},Z={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:Y,ReactCurrentOwner:P};function K(){throw Error("act(...) is not supported in production builds of React.")}return Pt.Children={map:ne,forEach:function(N,oe,Te){ne(N,function(){oe.apply(this,arguments)},Te)},count:function(N){var oe=0;return ne(N,function(){oe++}),oe},toArray:function(N){return ne(N,function(oe){return oe})||[]},only:function(N){if(!k(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Pt.Component=y,Pt.Fragment=t,Pt.Profiler=s,Pt.PureComponent=D,Pt.StrictMode=a,Pt.Suspense=m,Pt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Z,Pt.act=K,Pt.cloneElement=function(N,oe,Te){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Be=T({},N.props),Xe=N.key,qe=N.ref,ue=N._owner;if(oe!=null){if(oe.ref!==void 0&&(qe=oe.ref,ue=P.current),oe.key!==void 0&&(Xe=""+oe.key),N.type&&N.type.defaultProps)var pe=N.type.defaultProps;for(ye in oe)L.call(oe,ye)&&!I.hasOwnProperty(ye)&&(Be[ye]=oe[ye]===void 0&&pe!==void 0?pe[ye]:oe[ye])}var ye=arguments.length-2;if(ye===1)Be.children=Te;else if(1<ye){pe=Array(ye);for(var Qe=0;Qe<ye;Qe++)pe[Qe]=arguments[Qe+2];Be.children=pe}return{$$typeof:i,type:N.type,key:Xe,ref:qe,props:Be,_owner:ue}},Pt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Pt.createElement=w,Pt.createFactory=function(N){var oe=w.bind(null,N);return oe.type=N,oe},Pt.createRef=function(){return{current:null}},Pt.forwardRef=function(N){return{$$typeof:d,render:N}},Pt.isValidElement=k,Pt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:ae}},Pt.memo=function(N,oe){return{$$typeof:p,type:N,compare:oe===void 0?null:oe}},Pt.startTransition=function(N){var oe=Y.transition;Y.transition={};try{N()}finally{Y.transition=oe}},Pt.unstable_act=K,Pt.useCallback=function(N,oe){return le.current.useCallback(N,oe)},Pt.useContext=function(N){return le.current.useContext(N)},Pt.useDebugValue=function(){},Pt.useDeferredValue=function(N){return le.current.useDeferredValue(N)},Pt.useEffect=function(N,oe){return le.current.useEffect(N,oe)},Pt.useId=function(){return le.current.useId()},Pt.useImperativeHandle=function(N,oe,Te){return le.current.useImperativeHandle(N,oe,Te)},Pt.useInsertionEffect=function(N,oe){return le.current.useInsertionEffect(N,oe)},Pt.useLayoutEffect=function(N,oe){return le.current.useLayoutEffect(N,oe)},Pt.useMemo=function(N,oe){return le.current.useMemo(N,oe)},Pt.useReducer=function(N,oe,Te){return le.current.useReducer(N,oe,Te)},Pt.useRef=function(N){return le.current.useRef(N)},Pt.useState=function(N){return le.current.useState(N)},Pt.useSyncExternalStore=function(N,oe,Te){return le.current.useSyncExternalStore(N,oe,Te)},Pt.useTransition=function(){return le.current.useTransition()},Pt.version="18.3.1",Pt}var lg;function uh(){return lg||(lg=1,Pd.exports=Fx()),Pd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var cg;function Ox(){if(cg)return yo;cg=1;var i=uh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,m,p){var v,x={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)a.call(m,v)&&!l.hasOwnProperty(v)&&(x[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)x[v]===void 0&&(x[v]=m[v]);return{$$typeof:e,type:d,key:_,ref:M,props:x,_owner:s.current}}return yo.Fragment=t,yo.jsx=u,yo.jsxs=u,yo}var ug;function Ix(){return ug||(ug=1,bd.exports=Ox()),bd.exports}var ee=Ix(),Kl={},Ld={exports:{}},ci={},Dd={exports:{}},Nd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var dg;function kx(){return dg||(dg=1,(function(i){function e(Y,Z){var K=Y.length;Y.push(Z);e:for(;0<K;){var N=K-1>>>1,oe=Y[N];if(0<s(oe,Z))Y[N]=Z,Y[K]=oe,K=N;else break e}}function t(Y){return Y.length===0?null:Y[0]}function a(Y){if(Y.length===0)return null;var Z=Y[0],K=Y.pop();if(K!==Z){Y[0]=K;e:for(var N=0,oe=Y.length,Te=oe>>>1;N<Te;){var Be=2*(N+1)-1,Xe=Y[Be],qe=Be+1,ue=Y[qe];if(0>s(Xe,K))qe<oe&&0>s(ue,Xe)?(Y[N]=ue,Y[qe]=K,N=qe):(Y[N]=Xe,Y[Be]=K,N=Be);else if(qe<oe&&0>s(ue,K))Y[N]=ue,Y[qe]=K,N=qe;else break e}}return Z}function s(Y,Z){var K=Y.sortIndex-Z.sortIndex;return K!==0?K:Y.id-Z.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();i.unstable_now=function(){return u.now()-d}}var m=[],p=[],v=1,x=null,_=3,M=!1,T=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(Y){for(var Z=t(p);Z!==null;){if(Z.callback===null)a(p);else if(Z.startTime<=Y)a(p),Z.sortIndex=Z.expirationTime,e(m,Z);else break;Z=t(p)}}function C(Y){if(b=!1,z(Y),!T)if(t(m)!==null)T=!0,ae(L);else{var Z=t(p);Z!==null&&le(C,Z.startTime-Y)}}function L(Y,Z){T=!1,b&&(b=!1,S(w),w=-1),M=!0;var K=_;try{for(z(Z),x=t(m);x!==null&&(!(x.expirationTime>Z)||Y&&!G());){var N=x.callback;if(typeof N=="function"){x.callback=null,_=x.priorityLevel;var oe=N(x.expirationTime<=Z);Z=i.unstable_now(),typeof oe=="function"?x.callback=oe:x===t(m)&&a(m),z(Z)}else a(m);x=t(m)}if(x!==null)var Te=!0;else{var Be=t(p);Be!==null&&le(C,Be.startTime-Z),Te=!1}return Te}finally{x=null,_=K,M=!1}}var P=!1,I=null,w=-1,U=5,k=-1;function G(){return!(i.unstable_now()-k<U)}function j(){if(I!==null){var Y=i.unstable_now();k=Y;var Z=!0;try{Z=I(!0,Y)}finally{Z?ie():(P=!1,I=null)}}else P=!1}var ie;if(typeof D=="function")ie=function(){D(j)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ne=H.port2;H.port1.onmessage=j,ie=function(){ne.postMessage(null)}}else ie=function(){y(j,0)};function ae(Y){I=Y,P||(P=!0,ie())}function le(Y,Z){w=y(function(){Y(i.unstable_now())},Z)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(Y){Y.callback=null},i.unstable_continueExecution=function(){T||M||(T=!0,ae(L))},i.unstable_forceFrameRate=function(Y){0>Y||125<Y?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<Y?Math.floor(1e3/Y):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(m)},i.unstable_next=function(Y){switch(_){case 1:case 2:case 3:var Z=3;break;default:Z=_}var K=_;_=Z;try{return Y()}finally{_=K}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(Y,Z){switch(Y){case 1:case 2:case 3:case 4:case 5:break;default:Y=3}var K=_;_=Y;try{return Z()}finally{_=K}},i.unstable_scheduleCallback=function(Y,Z,K){var N=i.unstable_now();switch(typeof K=="object"&&K!==null?(K=K.delay,K=typeof K=="number"&&0<K?N+K:N):K=N,Y){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=K+oe,Y={id:v++,callback:Z,priorityLevel:Y,startTime:K,expirationTime:oe,sortIndex:-1},K>N?(Y.sortIndex=K,e(p,Y),t(m)===null&&Y===t(p)&&(b?(S(w),w=-1):b=!0,le(C,K-N))):(Y.sortIndex=oe,e(m,Y),T||M||(T=!0,ae(L))),Y},i.unstable_shouldYield=G,i.unstable_wrapCallback=function(Y){var Z=_;return function(){var K=_;_=Z;try{return Y.apply(this,arguments)}finally{_=K}}}})(Nd)),Nd}var fg;function zx(){return fg||(fg=1,Dd.exports=kx()),Dd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var hg;function Hx(){if(hg)return ci;hg=1;var i=uh(),e=zx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)a.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(n){return m.call(x,n)?!0:m.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function T(n,r,o,c){if(r===null||typeof r>"u"||M(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,o,c,f,g,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,D);y[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,D);y[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,D);y[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,r,o,c){var f=y.hasOwnProperty(r)?y[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(T(r,o,f,c)&&(o=null),c||f===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var C=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),w=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),G=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ne=Symbol.for("react.memo"),ae=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),Y=Symbol.iterator;function Z(n){return n===null||typeof n!="object"?null:(n=Y&&n[Y]||n["@@iterator"],typeof n=="function"?n:null)}var K=Object.assign,N;function oe(n){if(N===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Te=!1;function Be(n,r){if(!n||Te)return"";Te=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var c=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){c=he}n.call(r.prototype)}else{try{throw Error()}catch(he){c=he}n()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),g=c.stack.split(`
`),A=f.length-1,O=g.length-1;1<=A&&0<=O&&f[A]!==g[O];)O--;for(;1<=A&&0<=O;A--,O--)if(f[A]!==g[O]){if(A!==1||O!==1)do if(A--,O--,0>O||f[A]!==g[O]){var V=`
`+f[A].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=A&&0<=O);break}}}finally{Te=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?oe(n):""}function Xe(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function qe(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case P:return"Portal";case U:return"Profiler";case w:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case j:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ne:return r=n.displayName||null,r!==null?r:qe(n.type)||"Memo";case ae:r=n._payload,n=n._init;try{return qe(n(r))}catch{}}return null}function ue(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return qe(r);case 8:return r===w?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ye(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=ye(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ce(n){n._valueTracker||(n._valueTracker=Qe(n))}function Ze(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=ye(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function wt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function $e(n,r){var o=r.checked;return K({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function At(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=pe(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Rt(n,r){r=r.checked,r!=null&&z(n,"checked",r,!1)}function St(n,r){Rt(n,r);var o=pe(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?sn(n,r.type,o):r.hasOwnProperty("defaultValue")&&sn(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Wt(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function sn(n,r,o){(r!=="number"||wt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var on=Array.isArray;function bt(n,r,o,c){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+pe(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Yt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return K({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function X(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(on(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:pe(o)}}function mn(n,r){var o=pe(r.value),c=pe(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Lt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?F(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Q,ce=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,f)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Q=Q||document.createElement("div"),Q.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function me(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Re={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(Re).forEach(function(n){De.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Re[r]=Re[n]})});function ge(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Re.hasOwnProperty(n)&&Re[n]?(""+r).trim():r+"px"}function _e(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=ge(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Ue=K({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,r){if(r){if(Ue[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Fe(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function et(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var at=null,ht=null,B=null;function Oe(n){if(n=ao(n)){if(typeof at!="function")throw Error(t(280));var r=n.stateNode;r&&(r=dl(r),at(n.stateNode,n.type,r))}}function ve(n){ht?B?B.push(n):B=[n]:ht=n}function Ne(){if(ht){var n=ht,r=B;if(B=ht=null,Oe(n),r)for(n=0;n<r.length;n++)Oe(r[n])}}function ke(n,r){return n(r)}function Se(){}var it=!1;function $(n,r,o){if(it)return n(r,o);it=!0;try{return ke(n,r,o)}finally{it=!1,(ht!==null||B!==null)&&(Se(),Ne())}}function Me(n,r){var o=n.stateNode;if(o===null)return null;var c=dl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var xe=!1;if(d)try{var je={};Object.defineProperty(je,"passive",{get:function(){xe=!0}}),window.addEventListener("test",je,je),window.removeEventListener("test",je,je)}catch{xe=!1}function lt(n,r,o,c,f,g,A,O,V){var he=Array.prototype.slice.call(arguments,3);try{r.apply(o,he)}catch(we){this.onError(we)}}var qt=!1,Mt=null,pt=!1,Nt=null,Xt={onError:function(n){qt=!0,Mt=n}};function ct(n,r,o,c,f,g,A,O,V){qt=!1,Mt=null,lt.apply(Xt,arguments)}function zt(n,r,o,c,f,g,A,O,V){if(ct.apply(this,arguments),qt){if(qt){var he=Mt;qt=!1,Mt=null}else throw Error(t(198));pt||(pt=!0,Nt=he)}}function Vt(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function gn(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function yn(n){if(Vt(n)!==n)throw Error(t(188))}function Tn(n){var r=n.alternate;if(!r){if(r=Vt(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return yn(f),n;if(g===c)return yn(f),r;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var A=!1,O=f.child;O;){if(O===o){A=!0,o=f,c=g;break}if(O===c){A=!0,c=f,o=g;break}O=O.sibling}if(!A){for(O=g.child;O;){if(O===o){A=!0,o=g,c=f;break}if(O===c){A=!0,c=g,o=f;break}O=O.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function nn(n){return n=Tn(n),n!==null?Ni(n):null}function Ni(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Ni(n);if(r!==null)return r;n=n.sibling}return null}var Dn=e.unstable_scheduleCallback,fr=e.unstable_cancelCallback,Ur=e.unstable_shouldYield,Va=e.unstable_requestPaint,en=e.unstable_now,eu=e.unstable_getCurrentPriorityLevel,Vs=e.unstable_ImmediatePriority,Gs=e.unstable_UserBlockingPriority,R=e.unstable_NormalPriority,W=e.unstable_LowPriority,fe=e.unstable_IdlePriority,re=null,te=null;function He(n){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:st,ze=Math.log,tt=Math.LN2;function st(n){return n>>>=0,n===0?32:31-(ze(n)/tt|0)|0}var vt=64,yt=4194304;function Ye(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ut(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,A=o&268435455;if(A!==0){var O=A&~f;O!==0?c=Ye(O):(g&=A,g!==0&&(c=Ye(g)))}else A=o&~f,A!==0?c=Ye(A):g!==0&&(c=Ye(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-Ie(r),f=1<<o,c|=n[o],r&=~f;return c}function vn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Qt(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-Ie(g),O=1<<A,V=f[A];V===-1?((O&o)===0||(O&c)!==0)&&(f[A]=vn(O,r)):V<=r&&(n.expiredLanes|=O),g&=~O}}function $t(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function wn(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function Ge(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function xn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ie(r),n[r]=o}function Ft(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Ie(o),g=1<<f;r[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function Bn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Ie(o),f=1<<c;f&r|n[c]&r&&(n[c]|=r),o&=~f}}var Et=0;function Ui(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var hr,Gt,ln,Fi,jt,Ei=!1,Oi=[],Ii=null,Fr=null,Or=null,Bs=new Map,Ws=new Map,Ir=[],e_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Wh(n,r){switch(n){case"focusin":case"focusout":Ii=null;break;case"dragenter":case"dragleave":Fr=null;break;case"mouseover":case"mouseout":Or=null;break;case"pointerover":case"pointerout":Bs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ws.delete(r.pointerId)}}function Xs(n,r,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},r!==null&&(r=ao(r),r!==null&&Gt(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function t_(n,r,o,c,f){switch(r){case"focusin":return Ii=Xs(Ii,n,r,o,c,f),!0;case"dragenter":return Fr=Xs(Fr,n,r,o,c,f),!0;case"mouseover":return Or=Xs(Or,n,r,o,c,f),!0;case"pointerover":var g=f.pointerId;return Bs.set(g,Xs(Bs.get(g)||null,n,r,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Ws.set(g,Xs(Ws.get(g)||null,n,r,o,c,f)),!0}return!1}function Xh(n){var r=pa(n.target);if(r!==null){var o=Vt(r);if(o!==null){if(r=o.tag,r===13){if(r=gn(o),r!==null){n.blockedOn=r,jt(n.priority,function(){ln(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Zo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=nu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Le=c,o.target.dispatchEvent(c),Le=null}else return r=ao(o),r!==null&&Gt(r),n.blockedOn=o,!1;r.shift()}return!0}function $h(n,r,o){Zo(n)&&o.delete(r)}function n_(){Ei=!1,Ii!==null&&Zo(Ii)&&(Ii=null),Fr!==null&&Zo(Fr)&&(Fr=null),Or!==null&&Zo(Or)&&(Or=null),Bs.forEach($h),Ws.forEach($h)}function $s(n,r){n.blockedOn===r&&(n.blockedOn=null,Ei||(Ei=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,n_)))}function Ys(n){function r(f){return $s(f,n)}if(0<Oi.length){$s(Oi[0],n);for(var o=1;o<Oi.length;o++){var c=Oi[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Ii!==null&&$s(Ii,n),Fr!==null&&$s(Fr,n),Or!==null&&$s(Or,n),Bs.forEach(r),Ws.forEach(r),o=0;o<Ir.length;o++)c=Ir[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Ir.length&&(o=Ir[0],o.blockedOn===null);)Xh(o),o.blockedOn===null&&Ir.shift()}var Ga=C.ReactCurrentBatchConfig,Jo=!0;function i_(n,r,o,c){var f=Et,g=Ga.transition;Ga.transition=null;try{Et=1,tu(n,r,o,c)}finally{Et=f,Ga.transition=g}}function r_(n,r,o,c){var f=Et,g=Ga.transition;Ga.transition=null;try{Et=4,tu(n,r,o,c)}finally{Et=f,Ga.transition=g}}function tu(n,r,o,c){if(Jo){var f=nu(n,r,o,c);if(f===null)xu(n,r,c,Qo,o),Wh(n,c);else if(t_(f,n,r,o,c))c.stopPropagation();else if(Wh(n,c),r&4&&-1<e_.indexOf(n)){for(;f!==null;){var g=ao(f);if(g!==null&&hr(g),g=nu(n,r,o,c),g===null&&xu(n,r,c,Qo,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else xu(n,r,c,null,o)}}var Qo=null;function nu(n,r,o,c){if(Qo=null,n=et(c),n=pa(n),n!==null)if(r=Vt(n),r===null)n=null;else if(o=r.tag,o===13){if(n=gn(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Qo=n,null}function Yh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(eu()){case Vs:return 1;case Gs:return 4;case R:case W:return 16;case fe:return 536870912;default:return 16}default:return 16}}var kr=null,iu=null,el=null;function qh(){if(el)return el;var n,r=iu,o=r.length,c,f="value"in kr?kr.value:kr.textContent,g=f.length;for(n=0;n<o&&r[n]===f[n];n++);var A=o-n;for(c=1;c<=A&&r[o-c]===f[g-c];c++);return el=f.slice(n,1<c?1-c:void 0)}function tl(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function nl(){return!0}function jh(){return!1}function hi(n){function r(o,c,f,g,A){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?nl:jh,this.isPropagationStopped=jh,this}return K(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=nl)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=nl)},persist:function(){},isPersistent:nl}),r}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},ru=hi(Ba),qs=K({},Ba,{view:0,detail:0}),a_=hi(qs),au,su,js,il=K({},qs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:lu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==js&&(js&&n.type==="mousemove"?(au=n.screenX-js.screenX,su=n.screenY-js.screenY):su=au=0,js=n),au)},movementY:function(n){return"movementY"in n?n.movementY:su}}),Kh=hi(il),s_=K({},il,{dataTransfer:0}),o_=hi(s_),l_=K({},qs,{relatedTarget:0}),ou=hi(l_),c_=K({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),u_=hi(c_),d_=K({},Ba,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),f_=hi(d_),h_=K({},Ba,{data:0}),Zh=hi(h_),p_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},m_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},g_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function v_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=g_[n])?!!r[n]:!1}function lu(){return v_}var __=K({},qs,{key:function(n){if(n.key){var r=p_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=tl(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?m_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:lu,charCode:function(n){return n.type==="keypress"?tl(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?tl(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),x_=hi(__),S_=K({},il,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Jh=hi(S_),y_=K({},qs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:lu}),M_=hi(y_),E_=K({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),T_=hi(E_),w_=K({},il,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),A_=hi(w_),C_=[9,13,27,32],cu=d&&"CompositionEvent"in window,Ks=null;d&&"documentMode"in document&&(Ks=document.documentMode);var R_=d&&"TextEvent"in window&&!Ks,Qh=d&&(!cu||Ks&&8<Ks&&11>=Ks),ep=" ",tp=!1;function np(n,r){switch(n){case"keyup":return C_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function ip(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wa=!1;function b_(n,r){switch(n){case"compositionend":return ip(r);case"keypress":return r.which!==32?null:(tp=!0,ep);case"textInput":return n=r.data,n===ep&&tp?null:n;default:return null}}function P_(n,r){if(Wa)return n==="compositionend"||!cu&&np(n,r)?(n=qh(),el=iu=kr=null,Wa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Qh&&r.locale!=="ko"?null:r.data;default:return null}}var L_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function rp(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!L_[n.type]:r==="textarea"}function ap(n,r,o,c){ve(c),r=ll(r,"onChange"),0<r.length&&(o=new ru("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Zs=null,Js=null;function D_(n){Ep(n,0)}function rl(n){var r=ja(n);if(Ze(r))return n}function N_(n,r){if(n==="change")return r}var sp=!1;if(d){var uu;if(d){var du="oninput"in document;if(!du){var op=document.createElement("div");op.setAttribute("oninput","return;"),du=typeof op.oninput=="function"}uu=du}else uu=!1;sp=uu&&(!document.documentMode||9<document.documentMode)}function lp(){Zs&&(Zs.detachEvent("onpropertychange",cp),Js=Zs=null)}function cp(n){if(n.propertyName==="value"&&rl(Js)){var r=[];ap(r,Js,n,et(n)),$(D_,r)}}function U_(n,r,o){n==="focusin"?(lp(),Zs=r,Js=o,Zs.attachEvent("onpropertychange",cp)):n==="focusout"&&lp()}function F_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return rl(Js)}function O_(n,r){if(n==="click")return rl(r)}function I_(n,r){if(n==="input"||n==="change")return rl(r)}function k_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var ki=typeof Object.is=="function"?Object.is:k_;function Qs(n,r){if(ki(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!m.call(r,f)||!ki(n[f],r[f]))return!1}return!0}function up(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function dp(n,r){var o=up(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=up(o)}}function fp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?fp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function hp(){for(var n=window,r=wt();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=wt(n.document)}return r}function fu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function z_(n){var r=hp(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&fp(o.ownerDocument.documentElement,o)){if(c!==null&&fu(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=dp(o,g);var A=dp(o,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var H_=d&&"documentMode"in document&&11>=document.documentMode,Xa=null,hu=null,eo=null,pu=!1;function pp(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;pu||Xa==null||Xa!==wt(c)||(c=Xa,"selectionStart"in c&&fu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),eo&&Qs(eo,c)||(eo=c,c=ll(hu,"onSelect"),0<c.length&&(r=new ru("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=Xa)))}function al(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var $a={animationend:al("Animation","AnimationEnd"),animationiteration:al("Animation","AnimationIteration"),animationstart:al("Animation","AnimationStart"),transitionend:al("Transition","TransitionEnd")},mu={},mp={};d&&(mp=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function sl(n){if(mu[n])return mu[n];if(!$a[n])return n;var r=$a[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in mp)return mu[n]=r[o];return n}var gp=sl("animationend"),vp=sl("animationiteration"),_p=sl("animationstart"),xp=sl("transitionend"),Sp=new Map,yp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(n,r){Sp.set(n,r),l(r,[n])}for(var gu=0;gu<yp.length;gu++){var vu=yp[gu],V_=vu.toLowerCase(),G_=vu[0].toUpperCase()+vu.slice(1);zr(V_,"on"+G_)}zr(gp,"onAnimationEnd"),zr(vp,"onAnimationIteration"),zr(_p,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(xp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var to="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),B_=new Set("cancel close invalid load scroll toggle".split(" ").concat(to));function Mp(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,zt(c,r,void 0,n),n.currentTarget=null}function Ep(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var A=c.length-1;0<=A;A--){var O=c[A],V=O.instance,he=O.currentTarget;if(O=O.listener,V!==g&&f.isPropagationStopped())break e;Mp(f,O,he),g=V}else for(A=0;A<c.length;A++){if(O=c[A],V=O.instance,he=O.currentTarget,O=O.listener,V!==g&&f.isPropagationStopped())break e;Mp(f,O,he),g=V}}}if(pt)throw n=Nt,pt=!1,Nt=null,n}function rn(n,r){var o=r[wu];o===void 0&&(o=r[wu]=new Set);var c=n+"__bubble";o.has(c)||(Tp(r,n,2,!1),o.add(c))}function _u(n,r,o){var c=0;r&&(c|=4),Tp(o,n,c,r)}var ol="_reactListening"+Math.random().toString(36).slice(2);function no(n){if(!n[ol]){n[ol]=!0,a.forEach(function(o){o!=="selectionchange"&&(B_.has(o)||_u(o,!1,n),_u(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[ol]||(r[ol]=!0,_u("selectionchange",!1,r))}}function Tp(n,r,o,c){switch(Yh(r)){case 1:var f=i_;break;case 4:f=r_;break;default:f=tu}o=f.bind(null,r,o,n),f=void 0,!xe||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function xu(n,r,o,c,f){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;A=A.return}for(;O!==null;){if(A=pa(O),A===null)return;if(V=A.tag,V===5||V===6){c=g=A;continue e}O=O.parentNode}}c=c.return}$(function(){var he=g,we=et(o),Ae=[];e:{var Ee=Sp.get(n);if(Ee!==void 0){var We=ru,nt=n;switch(n){case"keypress":if(tl(o)===0)break e;case"keydown":case"keyup":We=x_;break;case"focusin":nt="focus",We=ou;break;case"focusout":nt="blur",We=ou;break;case"beforeblur":case"afterblur":We=ou;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=Kh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=o_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=M_;break;case gp:case vp:case _p:We=u_;break;case xp:We=T_;break;case"scroll":We=a_;break;case"wheel":We=A_;break;case"copy":case"cut":case"paste":We=f_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Jh}var rt=(r&4)!==0,Sn=!rt&&n==="scroll",se=rt?Ee!==null?Ee+"Capture":null:Ee;rt=[];for(var q=he,de;q!==null;){de=q;var be=de.stateNode;if(de.tag===5&&be!==null&&(de=be,se!==null&&(be=Me(q,se),be!=null&&rt.push(io(q,be,de)))),Sn)break;q=q.return}0<rt.length&&(Ee=new We(Ee,nt,null,o,we),Ae.push({event:Ee,listeners:rt}))}}if((r&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",Ee&&o!==Le&&(nt=o.relatedTarget||o.fromElement)&&(pa(nt)||nt[pr]))break e;if((We||Ee)&&(Ee=we.window===we?we:(Ee=we.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,We?(nt=o.relatedTarget||o.toElement,We=he,nt=nt?pa(nt):null,nt!==null&&(Sn=Vt(nt),nt!==Sn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(We=null,nt=he),We!==nt)){if(rt=Kh,be="onMouseLeave",se="onMouseEnter",q="mouse",(n==="pointerout"||n==="pointerover")&&(rt=Jh,be="onPointerLeave",se="onPointerEnter",q="pointer"),Sn=We==null?Ee:ja(We),de=nt==null?Ee:ja(nt),Ee=new rt(be,q+"leave",We,o,we),Ee.target=Sn,Ee.relatedTarget=de,be=null,pa(we)===he&&(rt=new rt(se,q+"enter",nt,o,we),rt.target=de,rt.relatedTarget=Sn,be=rt),Sn=be,We&&nt)t:{for(rt=We,se=nt,q=0,de=rt;de;de=Ya(de))q++;for(de=0,be=se;be;be=Ya(be))de++;for(;0<q-de;)rt=Ya(rt),q--;for(;0<de-q;)se=Ya(se),de--;for(;q--;){if(rt===se||se!==null&&rt===se.alternate)break t;rt=Ya(rt),se=Ya(se)}rt=null}else rt=null;We!==null&&wp(Ae,Ee,We,rt,!1),nt!==null&&Sn!==null&&wp(Ae,Sn,nt,rt,!0)}}e:{if(Ee=he?ja(he):window,We=Ee.nodeName&&Ee.nodeName.toLowerCase(),We==="select"||We==="input"&&Ee.type==="file")var ot=N_;else if(rp(Ee))if(sp)ot=I_;else{ot=F_;var dt=U_}else(We=Ee.nodeName)&&We.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(ot=O_);if(ot&&(ot=ot(n,he))){ap(Ae,ot,o,we);break e}dt&&dt(n,Ee,he),n==="focusout"&&(dt=Ee._wrapperState)&&dt.controlled&&Ee.type==="number"&&sn(Ee,"number",Ee.value)}switch(dt=he?ja(he):window,n){case"focusin":(rp(dt)||dt.contentEditable==="true")&&(Xa=dt,hu=he,eo=null);break;case"focusout":eo=hu=Xa=null;break;case"mousedown":pu=!0;break;case"contextmenu":case"mouseup":case"dragend":pu=!1,pp(Ae,o,we);break;case"selectionchange":if(H_)break;case"keydown":case"keyup":pp(Ae,o,we)}var ft;if(cu)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Wa?np(n,o)&&(mt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(mt="onCompositionStart");mt&&(Qh&&o.locale!=="ko"&&(Wa||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Wa&&(ft=qh()):(kr=we,iu="value"in kr?kr.value:kr.textContent,Wa=!0)),dt=ll(he,mt),0<dt.length&&(mt=new Zh(mt,n,null,o,we),Ae.push({event:mt,listeners:dt}),ft?mt.data=ft:(ft=ip(o),ft!==null&&(mt.data=ft)))),(ft=R_?b_(n,o):P_(n,o))&&(he=ll(he,"onBeforeInput"),0<he.length&&(we=new Zh("onBeforeInput","beforeinput",null,o,we),Ae.push({event:we,listeners:he}),we.data=ft))}Ep(Ae,r)})}function io(n,r,o){return{instance:n,listener:r,currentTarget:o}}function ll(n,r){for(var o=r+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Me(n,o),g!=null&&c.unshift(io(n,g,f)),g=Me(n,r),g!=null&&c.push(io(n,g,f))),n=n.return}return c}function Ya(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function wp(n,r,o,c,f){for(var g=r._reactName,A=[];o!==null&&o!==c;){var O=o,V=O.alternate,he=O.stateNode;if(V!==null&&V===c)break;O.tag===5&&he!==null&&(O=he,f?(V=Me(o,g),V!=null&&A.unshift(io(o,V,O))):f||(V=Me(o,g),V!=null&&A.push(io(o,V,O)))),o=o.return}A.length!==0&&n.push({event:r,listeners:A})}var W_=/\r\n?/g,X_=/\u0000|\uFFFD/g;function Ap(n){return(typeof n=="string"?n:""+n).replace(W_,`
`).replace(X_,"")}function cl(n,r,o){if(r=Ap(r),Ap(n)!==r&&o)throw Error(t(425))}function ul(){}var Su=null,yu=null;function Mu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var Eu=typeof setTimeout=="function"?setTimeout:void 0,$_=typeof clearTimeout=="function"?clearTimeout:void 0,Cp=typeof Promise=="function"?Promise:void 0,Y_=typeof queueMicrotask=="function"?queueMicrotask:typeof Cp<"u"?function(n){return Cp.resolve(null).then(n).catch(q_)}:Eu;function q_(n){setTimeout(function(){throw n})}function Tu(n,r){var o=r,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),Ys(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);Ys(r)}function Hr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Rp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var qa=Math.random().toString(36).slice(2),Ji="__reactFiber$"+qa,ro="__reactProps$"+qa,pr="__reactContainer$"+qa,wu="__reactEvents$"+qa,j_="__reactListeners$"+qa,K_="__reactHandles$"+qa;function pa(n){var r=n[Ji];if(r)return r;for(var o=n.parentNode;o;){if(r=o[pr]||o[Ji]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Rp(n);n!==null;){if(o=n[Ji])return o;n=Rp(n)}return r}n=o,o=n.parentNode}return null}function ao(n){return n=n[Ji]||n[pr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ja(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function dl(n){return n[ro]||null}var Au=[],Ka=-1;function Vr(n){return{current:n}}function an(n){0>Ka||(n.current=Au[Ka],Au[Ka]=null,Ka--)}function tn(n,r){Ka++,Au[Ka]=n.current,n.current=r}var Gr={},Wn=Vr(Gr),ri=Vr(!1),ma=Gr;function Za(n,r){var o=n.type.contextTypes;if(!o)return Gr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=f),f}function ai(n){return n=n.childContextTypes,n!=null}function fl(){an(ri),an(Wn)}function bp(n,r,o){if(Wn.current!==Gr)throw Error(t(168));tn(Wn,r),tn(ri,o)}function Pp(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(t(108,ue(n)||"Unknown",f));return K({},o,c)}function hl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Gr,ma=Wn.current,tn(Wn,n),tn(ri,ri.current),!0}function Lp(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Pp(n,r,ma),c.__reactInternalMemoizedMergedChildContext=n,an(ri),an(Wn),tn(Wn,n)):an(ri),tn(ri,o)}var mr=null,pl=!1,Cu=!1;function Dp(n){mr===null?mr=[n]:mr.push(n)}function Z_(n){pl=!0,Dp(n)}function Br(){if(!Cu&&mr!==null){Cu=!0;var n=0,r=Et;try{var o=mr;for(Et=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}mr=null,pl=!1}catch(f){throw mr!==null&&(mr=mr.slice(n+1)),Dn(Vs,Br),f}finally{Et=r,Cu=!1}}return null}var Ja=[],Qa=0,ml=null,gl=0,Ti=[],wi=0,ga=null,gr=1,vr="";function va(n,r){Ja[Qa++]=gl,Ja[Qa++]=ml,ml=n,gl=r}function Np(n,r,o){Ti[wi++]=gr,Ti[wi++]=vr,Ti[wi++]=ga,ga=n;var c=gr;n=vr;var f=32-Ie(c)-1;c&=~(1<<f),o+=1;var g=32-Ie(r)+f;if(30<g){var A=f-f%5;g=(c&(1<<A)-1).toString(32),c>>=A,f-=A,gr=1<<32-Ie(r)+f|o<<f|c,vr=g+n}else gr=1<<g|o<<f|c,vr=n}function Ru(n){n.return!==null&&(va(n,1),Np(n,1,0))}function bu(n){for(;n===ml;)ml=Ja[--Qa],Ja[Qa]=null,gl=Ja[--Qa],Ja[Qa]=null;for(;n===ga;)ga=Ti[--wi],Ti[wi]=null,vr=Ti[--wi],Ti[wi]=null,gr=Ti[--wi],Ti[wi]=null}var pi=null,mi=null,cn=!1,zi=null;function Up(n,r){var o=bi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Fp(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,pi=n,mi=Hr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,pi=n,mi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ga!==null?{id:gr,overflow:vr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=bi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,pi=n,mi=null,!0):!1;default:return!1}}function Pu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function Lu(n){if(cn){var r=mi;if(r){var o=r;if(!Fp(n,r)){if(Pu(n))throw Error(t(418));r=Hr(o.nextSibling);var c=pi;r&&Fp(n,r)?Up(c,o):(n.flags=n.flags&-4097|2,cn=!1,pi=n)}}else{if(Pu(n))throw Error(t(418));n.flags=n.flags&-4097|2,cn=!1,pi=n}}}function Op(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;pi=n}function vl(n){if(n!==pi)return!1;if(!cn)return Op(n),cn=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Mu(n.type,n.memoizedProps)),r&&(r=mi)){if(Pu(n))throw Ip(),Error(t(418));for(;r;)Up(n,r),r=Hr(r.nextSibling)}if(Op(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){mi=Hr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}mi=null}}else mi=pi?Hr(n.stateNode.nextSibling):null;return!0}function Ip(){for(var n=mi;n;)n=Hr(n.nextSibling)}function es(){mi=pi=null,cn=!1}function Du(n){zi===null?zi=[n]:zi.push(n)}var J_=C.ReactCurrentBatchConfig;function so(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(A){var O=f.refs;A===null?delete O[g]:O[g]=A},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function _l(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function kp(n){var r=n._init;return r(n._payload)}function zp(n){function r(se,q){if(n){var de=se.deletions;de===null?(se.deletions=[q],se.flags|=16):de.push(q)}}function o(se,q){if(!n)return null;for(;q!==null;)r(se,q),q=q.sibling;return null}function c(se,q){for(se=new Map;q!==null;)q.key!==null?se.set(q.key,q):se.set(q.index,q),q=q.sibling;return se}function f(se,q){return se=Zr(se,q),se.index=0,se.sibling=null,se}function g(se,q,de){return se.index=de,n?(de=se.alternate,de!==null?(de=de.index,de<q?(se.flags|=2,q):de):(se.flags|=2,q)):(se.flags|=1048576,q)}function A(se){return n&&se.alternate===null&&(se.flags|=2),se}function O(se,q,de,be){return q===null||q.tag!==6?(q=Ed(de,se.mode,be),q.return=se,q):(q=f(q,de),q.return=se,q)}function V(se,q,de,be){var ot=de.type;return ot===I?we(se,q,de.props.children,be,de.key):q!==null&&(q.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ae&&kp(ot)===q.type)?(be=f(q,de.props),be.ref=so(se,q,de),be.return=se,be):(be=Gl(de.type,de.key,de.props,null,se.mode,be),be.ref=so(se,q,de),be.return=se,be)}function he(se,q,de,be){return q===null||q.tag!==4||q.stateNode.containerInfo!==de.containerInfo||q.stateNode.implementation!==de.implementation?(q=Td(de,se.mode,be),q.return=se,q):(q=f(q,de.children||[]),q.return=se,q)}function we(se,q,de,be,ot){return q===null||q.tag!==7?(q=wa(de,se.mode,be,ot),q.return=se,q):(q=f(q,de),q.return=se,q)}function Ae(se,q,de){if(typeof q=="string"&&q!==""||typeof q=="number")return q=Ed(""+q,se.mode,de),q.return=se,q;if(typeof q=="object"&&q!==null){switch(q.$$typeof){case L:return de=Gl(q.type,q.key,q.props,null,se.mode,de),de.ref=so(se,null,q),de.return=se,de;case P:return q=Td(q,se.mode,de),q.return=se,q;case ae:var be=q._init;return Ae(se,be(q._payload),de)}if(on(q)||Z(q))return q=wa(q,se.mode,de,null),q.return=se,q;_l(se,q)}return null}function Ee(se,q,de,be){var ot=q!==null?q.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return ot!==null?null:O(se,q,""+de,be);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case L:return de.key===ot?V(se,q,de,be):null;case P:return de.key===ot?he(se,q,de,be):null;case ae:return ot=de._init,Ee(se,q,ot(de._payload),be)}if(on(de)||Z(de))return ot!==null?null:we(se,q,de,be,null);_l(se,de)}return null}function We(se,q,de,be,ot){if(typeof be=="string"&&be!==""||typeof be=="number")return se=se.get(de)||null,O(q,se,""+be,ot);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case L:return se=se.get(be.key===null?de:be.key)||null,V(q,se,be,ot);case P:return se=se.get(be.key===null?de:be.key)||null,he(q,se,be,ot);case ae:var dt=be._init;return We(se,q,de,dt(be._payload),ot)}if(on(be)||Z(be))return se=se.get(de)||null,we(q,se,be,ot,null);_l(q,be)}return null}function nt(se,q,de,be){for(var ot=null,dt=null,ft=q,mt=q=0,Fn=null;ft!==null&&mt<de.length;mt++){ft.index>mt?(Fn=ft,ft=null):Fn=ft.sibling;var Bt=Ee(se,ft,de[mt],be);if(Bt===null){ft===null&&(ft=Fn);break}n&&ft&&Bt.alternate===null&&r(se,ft),q=g(Bt,q,mt),dt===null?ot=Bt:dt.sibling=Bt,dt=Bt,ft=Fn}if(mt===de.length)return o(se,ft),cn&&va(se,mt),ot;if(ft===null){for(;mt<de.length;mt++)ft=Ae(se,de[mt],be),ft!==null&&(q=g(ft,q,mt),dt===null?ot=ft:dt.sibling=ft,dt=ft);return cn&&va(se,mt),ot}for(ft=c(se,ft);mt<de.length;mt++)Fn=We(ft,se,mt,de[mt],be),Fn!==null&&(n&&Fn.alternate!==null&&ft.delete(Fn.key===null?mt:Fn.key),q=g(Fn,q,mt),dt===null?ot=Fn:dt.sibling=Fn,dt=Fn);return n&&ft.forEach(function(Jr){return r(se,Jr)}),cn&&va(se,mt),ot}function rt(se,q,de,be){var ot=Z(de);if(typeof ot!="function")throw Error(t(150));if(de=ot.call(de),de==null)throw Error(t(151));for(var dt=ot=null,ft=q,mt=q=0,Fn=null,Bt=de.next();ft!==null&&!Bt.done;mt++,Bt=de.next()){ft.index>mt?(Fn=ft,ft=null):Fn=ft.sibling;var Jr=Ee(se,ft,Bt.value,be);if(Jr===null){ft===null&&(ft=Fn);break}n&&ft&&Jr.alternate===null&&r(se,ft),q=g(Jr,q,mt),dt===null?ot=Jr:dt.sibling=Jr,dt=Jr,ft=Fn}if(Bt.done)return o(se,ft),cn&&va(se,mt),ot;if(ft===null){for(;!Bt.done;mt++,Bt=de.next())Bt=Ae(se,Bt.value,be),Bt!==null&&(q=g(Bt,q,mt),dt===null?ot=Bt:dt.sibling=Bt,dt=Bt);return cn&&va(se,mt),ot}for(ft=c(se,ft);!Bt.done;mt++,Bt=de.next())Bt=We(ft,se,mt,Bt.value,be),Bt!==null&&(n&&Bt.alternate!==null&&ft.delete(Bt.key===null?mt:Bt.key),q=g(Bt,q,mt),dt===null?ot=Bt:dt.sibling=Bt,dt=Bt);return n&&ft.forEach(function(Lx){return r(se,Lx)}),cn&&va(se,mt),ot}function Sn(se,q,de,be){if(typeof de=="object"&&de!==null&&de.type===I&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case L:e:{for(var ot=de.key,dt=q;dt!==null;){if(dt.key===ot){if(ot=de.type,ot===I){if(dt.tag===7){o(se,dt.sibling),q=f(dt,de.props.children),q.return=se,se=q;break e}}else if(dt.elementType===ot||typeof ot=="object"&&ot!==null&&ot.$$typeof===ae&&kp(ot)===dt.type){o(se,dt.sibling),q=f(dt,de.props),q.ref=so(se,dt,de),q.return=se,se=q;break e}o(se,dt);break}else r(se,dt);dt=dt.sibling}de.type===I?(q=wa(de.props.children,se.mode,be,de.key),q.return=se,se=q):(be=Gl(de.type,de.key,de.props,null,se.mode,be),be.ref=so(se,q,de),be.return=se,se=be)}return A(se);case P:e:{for(dt=de.key;q!==null;){if(q.key===dt)if(q.tag===4&&q.stateNode.containerInfo===de.containerInfo&&q.stateNode.implementation===de.implementation){o(se,q.sibling),q=f(q,de.children||[]),q.return=se,se=q;break e}else{o(se,q);break}else r(se,q);q=q.sibling}q=Td(de,se.mode,be),q.return=se,se=q}return A(se);case ae:return dt=de._init,Sn(se,q,dt(de._payload),be)}if(on(de))return nt(se,q,de,be);if(Z(de))return rt(se,q,de,be);_l(se,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,q!==null&&q.tag===6?(o(se,q.sibling),q=f(q,de),q.return=se,se=q):(o(se,q),q=Ed(de,se.mode,be),q.return=se,se=q),A(se)):o(se,q)}return Sn}var ts=zp(!0),Hp=zp(!1),xl=Vr(null),Sl=null,ns=null,Nu=null;function Uu(){Nu=ns=Sl=null}function Fu(n){var r=xl.current;an(xl),n._currentValue=r}function Ou(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function is(n,r){Sl=n,Nu=ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(si=!0),n.firstContext=null)}function Ai(n){var r=n._currentValue;if(Nu!==n)if(n={context:n,memoizedValue:r,next:null},ns===null){if(Sl===null)throw Error(t(308));ns=n,Sl.dependencies={lanes:0,firstContext:n}}else ns=ns.next=n;return r}var _a=null;function Iu(n){_a===null?_a=[n]:_a.push(n)}function Vp(n,r,o,c){var f=r.interleaved;return f===null?(o.next=o,Iu(r)):(o.next=f.next,f.next=o),r.interleaved=o,_r(n,c)}function _r(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Wr=!1;function ku(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Gp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function xr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Xr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ht&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,_r(n,o)}return f=c.interleaved,f===null?(r.next=r,Iu(c)):(r.next=f.next,f.next=r),c.interleaved=r,_r(n,o)}function yl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Bn(n,o)}}function Bp(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?f=g=r:g=g.next=r}else f=g=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Ml(n,r,o,c){var f=n.updateQueue;Wr=!1;var g=f.firstBaseUpdate,A=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var V=O,he=V.next;V.next=null,A===null?g=he:A.next=he,A=V;var we=n.alternate;we!==null&&(we=we.updateQueue,O=we.lastBaseUpdate,O!==A&&(O===null?we.firstBaseUpdate=he:O.next=he,we.lastBaseUpdate=V))}if(g!==null){var Ae=f.baseState;A=0,we=he=V=null,O=g;do{var Ee=O.lane,We=O.eventTime;if((c&Ee)===Ee){we!==null&&(we=we.next={eventTime:We,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var nt=n,rt=O;switch(Ee=r,We=o,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Ae=nt.call(We,Ae,Ee);break e}Ae=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Ee=typeof nt=="function"?nt.call(We,Ae,Ee):nt,Ee==null)break e;Ae=K({},Ae,Ee);break e;case 2:Wr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Ee=f.effects,Ee===null?f.effects=[O]:Ee.push(O))}else We={eventTime:We,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},we===null?(he=we=We,V=Ae):we=we.next=We,A|=Ee;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);if(we===null&&(V=Ae),f.baseState=V,f.firstBaseUpdate=he,f.lastBaseUpdate=we,r=f.shared.interleaved,r!==null){f=r;do A|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);ya|=A,n.lanes=A,n.memoizedState=Ae}}function Wp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var oo={},Qi=Vr(oo),lo=Vr(oo),co=Vr(oo);function xa(n){if(n===oo)throw Error(t(174));return n}function zu(n,r){switch(tn(co,r),tn(lo,n),tn(Qi,oo),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}an(Qi),tn(Qi,r)}function rs(){an(Qi),an(lo),an(co)}function Xp(n){xa(co.current);var r=xa(Qi.current),o=E(r,n.type);r!==o&&(tn(lo,n),tn(Qi,o))}function Hu(n){lo.current===n&&(an(Qi),an(lo))}var fn=Vr(0);function El(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Vu=[];function Gu(){for(var n=0;n<Vu.length;n++)Vu[n]._workInProgressVersionPrimary=null;Vu.length=0}var Tl=C.ReactCurrentDispatcher,Bu=C.ReactCurrentBatchConfig,Sa=0,hn=null,An=null,Nn=null,wl=!1,uo=!1,fo=0,Q_=0;function Xn(){throw Error(t(321))}function Wu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!ki(n[o],r[o]))return!1;return!0}function Xu(n,r,o,c,f,g){if(Sa=g,hn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Tl.current=n===null||n.memoizedState===null?ix:rx,n=o(c,f),uo){g=0;do{if(uo=!1,fo=0,25<=g)throw Error(t(301));g+=1,Nn=An=null,r.updateQueue=null,Tl.current=ax,n=o(c,f)}while(uo)}if(Tl.current=Rl,r=An!==null&&An.next!==null,Sa=0,Nn=An=hn=null,wl=!1,r)throw Error(t(300));return n}function $u(){var n=fo!==0;return fo=0,n}function er(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Nn===null?hn.memoizedState=Nn=n:Nn=Nn.next=n,Nn}function Ci(){if(An===null){var n=hn.alternate;n=n!==null?n.memoizedState:null}else n=An.next;var r=Nn===null?hn.memoizedState:Nn.next;if(r!==null)Nn=r,An=n;else{if(n===null)throw Error(t(310));An=n,n={memoizedState:An.memoizedState,baseState:An.baseState,baseQueue:An.baseQueue,queue:An.queue,next:null},Nn===null?hn.memoizedState=Nn=n:Nn=Nn.next=n}return Nn}function ho(n,r){return typeof r=="function"?r(n):r}function Yu(n){var r=Ci(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=An,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var A=f.next;f.next=g.next,g.next=A}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var O=A=null,V=null,he=g;do{var we=he.lane;if((Sa&we)===we)V!==null&&(V=V.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:n(c,he.action);else{var Ae={lane:we,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};V===null?(O=V=Ae,A=c):V=V.next=Ae,hn.lanes|=we,ya|=we}he=he.next}while(he!==null&&he!==g);V===null?A=c:V.next=O,ki(c,r.memoizedState)||(si=!0),r.memoizedState=c,r.baseState=A,r.baseQueue=V,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,hn.lanes|=g,ya|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function qu(n){var r=Ci(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=r.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do g=n(g,A.action),A=A.next;while(A!==f);ki(g,r.memoizedState)||(si=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,c]}function $p(){}function Yp(n,r){var o=hn,c=Ci(),f=r(),g=!ki(c.memoizedState,f);if(g&&(c.memoizedState=f,si=!0),c=c.queue,ju(Kp.bind(null,o,c,n),[n]),c.getSnapshot!==r||g||Nn!==null&&Nn.memoizedState.tag&1){if(o.flags|=2048,po(9,jp.bind(null,o,c,f,r),void 0,null),Un===null)throw Error(t(349));(Sa&30)!==0||qp(o,r,f)}return f}function qp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function jp(n,r,o,c){r.value=o,r.getSnapshot=c,Zp(r)&&Jp(n)}function Kp(n,r,o){return o(function(){Zp(r)&&Jp(n)})}function Zp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!ki(n,o)}catch{return!0}}function Jp(n){var r=_r(n,1);r!==null&&Bi(r,n,1,-1)}function Qp(n){var r=er();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ho,lastRenderedState:n},r.queue=n,n=n.dispatch=nx.bind(null,hn,n),[r.memoizedState,n]}function po(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=hn.updateQueue,r===null?(r={lastEffect:null,stores:null},hn.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function em(){return Ci().memoizedState}function Al(n,r,o,c){var f=er();hn.flags|=n,f.memoizedState=po(1|r,o,void 0,c===void 0?null:c)}function Cl(n,r,o,c){var f=Ci();c=c===void 0?null:c;var g=void 0;if(An!==null){var A=An.memoizedState;if(g=A.destroy,c!==null&&Wu(c,A.deps)){f.memoizedState=po(r,o,g,c);return}}hn.flags|=n,f.memoizedState=po(1|r,o,g,c)}function tm(n,r){return Al(8390656,8,n,r)}function ju(n,r){return Cl(2048,8,n,r)}function nm(n,r){return Cl(4,2,n,r)}function im(n,r){return Cl(4,4,n,r)}function rm(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function am(n,r,o){return o=o!=null?o.concat([n]):null,Cl(4,4,rm.bind(null,r,n),o)}function Ku(){}function sm(n,r){var o=Ci();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Wu(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function om(n,r){var o=Ci();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Wu(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function lm(n,r,o){return(Sa&21)===0?(n.baseState&&(n.baseState=!1,si=!0),n.memoizedState=o):(ki(o,r)||(o=wn(),hn.lanes|=o,ya|=o,n.baseState=!0),r)}function ex(n,r){var o=Et;Et=o!==0&&4>o?o:4,n(!0);var c=Bu.transition;Bu.transition={};try{n(!1),r()}finally{Et=o,Bu.transition=c}}function cm(){return Ci().memoizedState}function tx(n,r,o){var c=jr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},um(n))dm(r,o);else if(o=Vp(n,r,o,c),o!==null){var f=ei();Bi(o,n,c,f),fm(o,r,c)}}function nx(n,r,o){var c=jr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(um(n))dm(r,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var A=r.lastRenderedState,O=g(A,o);if(f.hasEagerState=!0,f.eagerState=O,ki(O,A)){var V=r.interleaved;V===null?(f.next=f,Iu(r)):(f.next=V.next,V.next=f),r.interleaved=f;return}}catch{}finally{}o=Vp(n,r,f,c),o!==null&&(f=ei(),Bi(o,n,c,f),fm(o,r,c))}}function um(n){var r=n.alternate;return n===hn||r!==null&&r===hn}function dm(n,r){uo=wl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function fm(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Bn(n,o)}}var Rl={readContext:Ai,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},ix={readContext:Ai,useCallback:function(n,r){return er().memoizedState=[n,r===void 0?null:r],n},useContext:Ai,useEffect:tm,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Al(4194308,4,rm.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Al(4194308,4,n,r)},useInsertionEffect:function(n,r){return Al(4,2,n,r)},useMemo:function(n,r){var o=er();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=er();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=tx.bind(null,hn,n),[c.memoizedState,n]},useRef:function(n){var r=er();return n={current:n},r.memoizedState=n},useState:Qp,useDebugValue:Ku,useDeferredValue:function(n){return er().memoizedState=n},useTransition:function(){var n=Qp(!1),r=n[0];return n=ex.bind(null,n[1]),er().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=hn,f=er();if(cn){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),Un===null)throw Error(t(349));(Sa&30)!==0||qp(c,r,o)}f.memoizedState=o;var g={value:o,getSnapshot:r};return f.queue=g,tm(Kp.bind(null,c,g,n),[n]),c.flags|=2048,po(9,jp.bind(null,c,g,o,r),void 0,null),o},useId:function(){var n=er(),r=Un.identifierPrefix;if(cn){var o=vr,c=gr;o=(c&~(1<<32-Ie(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=fo++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Q_++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},rx={readContext:Ai,useCallback:sm,useContext:Ai,useEffect:ju,useImperativeHandle:am,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:Yu,useRef:em,useState:function(){return Yu(ho)},useDebugValue:Ku,useDeferredValue:function(n){var r=Ci();return lm(r,An.memoizedState,n)},useTransition:function(){var n=Yu(ho)[0],r=Ci().memoizedState;return[n,r]},useMutableSource:$p,useSyncExternalStore:Yp,useId:cm,unstable_isNewReconciler:!1},ax={readContext:Ai,useCallback:sm,useContext:Ai,useEffect:ju,useImperativeHandle:am,useInsertionEffect:nm,useLayoutEffect:im,useMemo:om,useReducer:qu,useRef:em,useState:function(){return qu(ho)},useDebugValue:Ku,useDeferredValue:function(n){var r=Ci();return An===null?r.memoizedState=n:lm(r,An.memoizedState,n)},useTransition:function(){var n=qu(ho)[0],r=Ci().memoizedState;return[n,r]},useMutableSource:$p,useSyncExternalStore:Yp,useId:cm,unstable_isNewReconciler:!1};function Hi(n,r){if(n&&n.defaultProps){r=K({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Zu(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:K({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var bl={isMounted:function(n){return(n=n._reactInternals)?Vt(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=ei(),f=jr(n),g=xr(c,f);g.payload=r,o!=null&&(g.callback=o),r=Xr(n,g,f),r!==null&&(Bi(r,n,f,c),yl(r,n,f))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=ei(),f=jr(n),g=xr(c,f);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=Xr(n,g,f),r!==null&&(Bi(r,n,f,c),yl(r,n,f))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=ei(),c=jr(n),f=xr(o,c);f.tag=2,r!=null&&(f.callback=r),r=Xr(n,f,c),r!==null&&(Bi(r,n,c,o),yl(r,n,c))}};function hm(n,r,o,c,f,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):r.prototype&&r.prototype.isPureReactComponent?!Qs(o,c)||!Qs(f,g):!0}function pm(n,r,o){var c=!1,f=Gr,g=r.contextType;return typeof g=="object"&&g!==null?g=Ai(g):(f=ai(r)?ma:Wn.current,c=r.contextTypes,g=(c=c!=null)?Za(n,f):Gr),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=bl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),r}function mm(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&bl.enqueueReplaceState(r,r.state,null)}function Ju(n,r,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},ku(n);var g=r.contextType;typeof g=="object"&&g!==null?f.context=Ai(g):(g=ai(r)?ma:Wn.current,f.context=Za(n,g)),f.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Zu(n,r,g,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&bl.enqueueReplaceState(f,f.state,null),Ml(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function as(n,r){try{var o="",c=r;do o+=Xe(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:f,digest:null}}function Qu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function ed(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var sx=typeof WeakMap=="function"?WeakMap:Map;function gm(n,r,o){o=xr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){Ol||(Ol=!0,md=c),ed(n,r)},o}function vm(n,r,o){o=xr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;o.payload=function(){return c(f)},o.callback=function(){ed(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){ed(n,r),typeof c!="function"&&(Yr===null?Yr=new Set([this]):Yr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),o}function _m(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new sx;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(f.add(o),n=Sx.bind(null,n,r,o),r.then(n,n))}function xm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Sm(n,r,o,c,f){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=xr(-1,1),r.tag=2,Xr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var ox=C.ReactCurrentOwner,si=!1;function Qn(n,r,o,c){r.child=n===null?Hp(r,null,o,c):ts(r,n.child,o,c)}function ym(n,r,o,c,f){o=o.render;var g=r.ref;return is(r,f),c=Xu(n,r,o,c,g,f),o=$u(),n!==null&&!si?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,Sr(n,r,f)):(cn&&o&&Ru(r),r.flags|=1,Qn(n,r,c,f),r.child)}function Mm(n,r,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!Md(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,Em(n,r,g,c,f)):(n=Gl(o.type,null,c,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&f)===0){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:Qs,o(A,c)&&n.ref===r.ref)return Sr(n,r,f)}return r.flags|=1,n=Zr(g,c),n.ref=r.ref,n.return=r,r.child=n}function Em(n,r,o,c,f){if(n!==null){var g=n.memoizedProps;if(Qs(g,c)&&n.ref===r.ref)if(si=!1,r.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(si=!0);else return r.lanes=n.lanes,Sr(n,r,f)}return td(n,r,o,c,f)}function Tm(n,r,o){var c=r.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},tn(os,gi),gi|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,tn(os,gi),gi|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,tn(os,gi),gi|=c}else g!==null?(c=g.baseLanes|o,r.memoizedState=null):c=o,tn(os,gi),gi|=c;return Qn(n,r,f,o),r.child}function wm(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function td(n,r,o,c,f){var g=ai(o)?ma:Wn.current;return g=Za(r,g),is(r,f),o=Xu(n,r,o,c,g,f),c=$u(),n!==null&&!si?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,Sr(n,r,f)):(cn&&c&&Ru(r),r.flags|=1,Qn(n,r,o,f),r.child)}function Am(n,r,o,c,f){if(ai(o)){var g=!0;hl(r)}else g=!1;if(is(r,f),r.stateNode===null)Ll(n,r),pm(r,o,c),Ju(r,o,c,f),c=!0;else if(n===null){var A=r.stateNode,O=r.memoizedProps;A.props=O;var V=A.context,he=o.contextType;typeof he=="object"&&he!==null?he=Ai(he):(he=ai(o)?ma:Wn.current,he=Za(r,he));var we=o.getDerivedStateFromProps,Ae=typeof we=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ae||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==c||V!==he)&&mm(r,A,c,he),Wr=!1;var Ee=r.memoizedState;A.state=Ee,Ml(r,c,A,f),V=r.memoizedState,O!==c||Ee!==V||ri.current||Wr?(typeof we=="function"&&(Zu(r,o,we,c),V=r.memoizedState),(O=Wr||hm(r,o,O,c,Ee,V,he))?(Ae||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=V),A.props=c,A.state=V,A.context=he,c=O):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{A=r.stateNode,Gp(n,r),O=r.memoizedProps,he=r.type===r.elementType?O:Hi(r.type,O),A.props=he,Ae=r.pendingProps,Ee=A.context,V=o.contextType,typeof V=="object"&&V!==null?V=Ai(V):(V=ai(o)?ma:Wn.current,V=Za(r,V));var We=o.getDerivedStateFromProps;(we=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Ae||Ee!==V)&&mm(r,A,c,V),Wr=!1,Ee=r.memoizedState,A.state=Ee,Ml(r,c,A,f);var nt=r.memoizedState;O!==Ae||Ee!==nt||ri.current||Wr?(typeof We=="function"&&(Zu(r,o,We,c),nt=r.memoizedState),(he=Wr||hm(r,o,he,c,Ee,nt,V)||!1)?(we||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,nt,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,nt,V)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=nt),A.props=c,A.state=nt,A.context=V,c=he):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),c=!1)}return nd(n,r,o,c,g,f)}function nd(n,r,o,c,f,g){wm(n,r);var A=(r.flags&128)!==0;if(!c&&!A)return f&&Lp(r,o,!1),Sr(n,r,g);c=r.stateNode,ox.current=r;var O=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&A?(r.child=ts(r,n.child,null,g),r.child=ts(r,null,O,g)):Qn(n,r,O,g),r.memoizedState=c.state,f&&Lp(r,o,!0),r.child}function Cm(n){var r=n.stateNode;r.pendingContext?bp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&bp(n,r.context,!1),zu(n,r.containerInfo)}function Rm(n,r,o,c,f){return es(),Du(f),r.flags|=256,Qn(n,r,o,c),r.child}var id={dehydrated:null,treeContext:null,retryLane:0};function rd(n){return{baseLanes:n,cachePool:null,transitions:null}}function bm(n,r,o){var c=r.pendingProps,f=fn.current,g=!1,A=(r.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),tn(fn,f&1),n===null)return Lu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=r.mode,g=r.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Bl(A,c,0,null),n=wa(n,c,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=rd(o),r.memoizedState=id,n):ad(r,A));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return lx(n,r,A,c,O,f,o);if(g){g=c.fallback,A=r.mode,f=n.child,O=f.sibling;var V={mode:"hidden",children:c.children};return(A&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=V,r.deletions=null):(c=Zr(f,V),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?g=Zr(O,g):(g=wa(g,A,o,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,A=n.child.memoizedState,A=A===null?rd(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~o,r.memoizedState=id,c}return g=n.child,n=g.sibling,c=Zr(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function ad(n,r){return r=Bl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Pl(n,r,o,c){return c!==null&&Du(c),ts(r,n.child,null,o),n=ad(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function lx(n,r,o,c,f,g,A){if(o)return r.flags&256?(r.flags&=-257,c=Qu(Error(t(422))),Pl(n,r,A,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,f=r.mode,c=Bl({mode:"visible",children:c.children},f,0,null),g=wa(g,f,A,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&ts(r,n.child,null,A),r.child.memoizedState=rd(A),r.memoizedState=id,g);if((r.mode&1)===0)return Pl(n,r,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,g=Error(t(419)),c=Qu(g,c,void 0),Pl(n,r,A,c)}if(O=(A&n.childLanes)!==0,si||O){if(c=Un,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,_r(n,f),Bi(c,n,f,-1))}return yd(),c=Qu(Error(t(421))),Pl(n,r,A,c)}return f.data==="$?"?(r.flags|=128,r.child=n.child,r=yx.bind(null,n),f._reactRetry=r,null):(n=g.treeContext,mi=Hr(f.nextSibling),pi=r,cn=!0,zi=null,n!==null&&(Ti[wi++]=gr,Ti[wi++]=vr,Ti[wi++]=ga,gr=n.id,vr=n.overflow,ga=r),r=ad(r,c.children),r.flags|=4096,r)}function Pm(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Ou(n.return,r,o)}function sd(n,r,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function Lm(n,r,o){var c=r.pendingProps,f=c.revealOrder,g=c.tail;if(Qn(n,r,c.children,o),c=fn.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Pm(n,o,r);else if(n.tag===19)Pm(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(tn(fn,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&El(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),sd(r,!1,f,o,g);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&El(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}sd(r,!0,o,null,g);break;case"together":sd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function Ll(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Sr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),ya|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Zr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Zr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function cx(n,r,o){switch(r.tag){case 3:Cm(r),es();break;case 5:Xp(r);break;case 1:ai(r.type)&&hl(r);break;case 4:zu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;tn(xl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(tn(fn,fn.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?bm(n,r,o):(tn(fn,fn.current&1),n=Sr(n,r,o),n!==null?n.sibling:null);tn(fn,fn.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Lm(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),tn(fn,fn.current),c)break;return null;case 22:case 23:return r.lanes=0,Tm(n,r,o)}return Sr(n,r,o)}var Dm,od,Nm,Um;Dm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},od=function(){},Nm=function(n,r,o,c){var f=n.memoizedProps;if(f!==c){n=r.stateNode,xa(Qi.current);var g=null;switch(o){case"input":f=$e(n,f),c=$e(n,c),g=[];break;case"select":f=K({},f,{value:void 0}),c=K({},c,{value:void 0}),g=[];break;case"textarea":f=Yt(n,f),c=Yt(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ul)}Je(o,c);var A;o=null;for(he in f)if(!c.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var O=f[he];for(A in O)O.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(s.hasOwnProperty(he)?g||(g=[]):(g=g||[]).push(he,null));for(he in c){var V=c[he];if(O=f!=null?f[he]:void 0,c.hasOwnProperty(he)&&V!==O&&(V!=null||O!=null))if(he==="style")if(O){for(A in O)!O.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in V)V.hasOwnProperty(A)&&O[A]!==V[A]&&(o||(o={}),o[A]=V[A])}else o||(g||(g=[]),g.push(he,o)),o=V;else he==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(g=g||[]).push(he,V)):he==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(he,""+V):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(s.hasOwnProperty(he)?(V!=null&&he==="onScroll"&&rn("scroll",n),g||O===V||(g=[])):(g=g||[]).push(he,V))}o&&(g=g||[]).push("style",o);var he=g;(r.updateQueue=he)&&(r.flags|=4)}},Um=function(n,r,o,c){o!==c&&(r.flags|=4)};function mo(n,r){if(!cn)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $n(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function ux(n,r,o){var c=r.pendingProps;switch(bu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(r),null;case 1:return ai(r.type)&&fl(),$n(r),null;case 3:return c=r.stateNode,rs(),an(ri),an(Wn),Gu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(vl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,zi!==null&&(_d(zi),zi=null))),od(n,r),$n(r),null;case 5:Hu(r);var f=xa(co.current);if(o=r.type,n!==null&&r.stateNode!=null)Nm(n,r,o,c,f),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return $n(r),null}if(n=xa(Qi.current),vl(r)){c=r.stateNode,o=r.type;var g=r.memoizedProps;switch(c[Ji]=r,c[ro]=g,n=(r.mode&1)!==0,o){case"dialog":rn("cancel",c),rn("close",c);break;case"iframe":case"object":case"embed":rn("load",c);break;case"video":case"audio":for(f=0;f<to.length;f++)rn(to[f],c);break;case"source":rn("error",c);break;case"img":case"image":case"link":rn("error",c),rn("load",c);break;case"details":rn("toggle",c);break;case"input":At(c,g),rn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},rn("invalid",c);break;case"textarea":X(c,g),rn("invalid",c)}Je(o,g),f=null;for(var A in g)if(g.hasOwnProperty(A)){var O=g[A];A==="children"?typeof O=="string"?c.textContent!==O&&(g.suppressHydrationWarning!==!0&&cl(c.textContent,O,n),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&cl(c.textContent,O,n),f=["children",""+O]):s.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&rn("scroll",c)}switch(o){case"input":Ce(c),Wt(c,g,!0);break;case"textarea":Ce(c),Lt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ul)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[Ji]=r,n[ro]=c,Dm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Fe(o,c),o){case"dialog":rn("cancel",n),rn("close",n),f=c;break;case"iframe":case"object":case"embed":rn("load",n),f=c;break;case"video":case"audio":for(f=0;f<to.length;f++)rn(to[f],n);f=c;break;case"source":rn("error",n),f=c;break;case"img":case"image":case"link":rn("error",n),rn("load",n),f=c;break;case"details":rn("toggle",n),f=c;break;case"input":At(n,c),f=$e(n,c),rn("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=K({},c,{value:void 0}),rn("invalid",n);break;case"textarea":X(n,c),f=Yt(n,c),rn("invalid",n);break;default:f=c}Je(o,f),O=f;for(g in O)if(O.hasOwnProperty(g)){var V=O[g];g==="style"?_e(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ce(n,V)):g==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&me(n,V):typeof V=="number"&&me(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?V!=null&&g==="onScroll"&&rn("scroll",n):V!=null&&z(n,g,V,A))}switch(o){case"input":Ce(n),Wt(n,c,!1);break;case"textarea":Ce(n),Lt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?bt(n,!!c.multiple,g,!1):c.defaultValue!=null&&bt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=ul)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $n(r),null;case 6:if(n&&r.stateNode!=null)Um(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=xa(co.current),xa(Qi.current),vl(r)){if(c=r.stateNode,o=r.memoizedProps,c[Ji]=r,(g=c.nodeValue!==o)&&(n=pi,n!==null))switch(n.tag){case 3:cl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&cl(c.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ji]=r,r.stateNode=c}return $n(r),null;case 13:if(an(fn),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(cn&&mi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Ip(),es(),r.flags|=98560,g=!1;else if(g=vl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ji]=r}else es(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),g=!1}else zi!==null&&(_d(zi),zi=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(fn.current&1)!==0?Cn===0&&(Cn=3):yd())),r.updateQueue!==null&&(r.flags|=4),$n(r),null);case 4:return rs(),od(n,r),n===null&&no(r.stateNode.containerInfo),$n(r),null;case 10:return Fu(r.type._context),$n(r),null;case 17:return ai(r.type)&&fl(),$n(r),null;case 19:if(an(fn),g=r.memoizedState,g===null)return $n(r),null;if(c=(r.flags&128)!==0,A=g.rendering,A===null)if(c)mo(g,!1);else{if(Cn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=El(n),A!==null){for(r.flags|=128,mo(g,!1),c=A.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)g=o,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return tn(fn,fn.current&1|2),r.child}n=n.sibling}g.tail!==null&&en()>ls&&(r.flags|=128,c=!0,mo(g,!1),r.lanes=4194304)}else{if(!c)if(n=El(A),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),mo(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!cn)return $n(r),null}else 2*en()-g.renderingStartTime>ls&&o!==1073741824&&(r.flags|=128,c=!0,mo(g,!1),r.lanes=4194304);g.isBackwards?(A.sibling=r.child,r.child=A):(o=g.last,o!==null?o.sibling=A:r.child=A,g.last=A)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=en(),r.sibling=null,o=fn.current,tn(fn,c?o&1|2:o&1),r):($n(r),null);case 22:case 23:return Sd(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(gi&1073741824)!==0&&($n(r),r.subtreeFlags&6&&(r.flags|=8192)):$n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function dx(n,r){switch(bu(r),r.tag){case 1:return ai(r.type)&&fl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return rs(),an(ri),an(Wn),Gu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Hu(r),null;case 13:if(an(fn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));es()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return an(fn),null;case 4:return rs(),null;case 10:return Fu(r.type._context),null;case 22:case 23:return Sd(),null;case 24:return null;default:return null}}var Dl=!1,Yn=!1,fx=typeof WeakSet=="function"?WeakSet:Set,Ke=null;function ss(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){_n(n,r,c)}else o.current=null}function ld(n,r,o){try{o()}catch(c){_n(n,r,c)}}var Fm=!1;function hx(n,r){if(Su=Jo,n=hp(),fu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,O=-1,V=-1,he=0,we=0,Ae=n,Ee=null;t:for(;;){for(var We;Ae!==o||f!==0&&Ae.nodeType!==3||(O=A+f),Ae!==g||c!==0&&Ae.nodeType!==3||(V=A+c),Ae.nodeType===3&&(A+=Ae.nodeValue.length),(We=Ae.firstChild)!==null;)Ee=Ae,Ae=We;for(;;){if(Ae===n)break t;if(Ee===o&&++he===f&&(O=A),Ee===g&&++we===c&&(V=A),(We=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=We}o=O===-1||V===-1?null:{start:O,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(yu={focusedElem:n,selectionRange:o},Jo=!1,Ke=r;Ke!==null;)if(r=Ke,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Ke=n;else for(;Ke!==null;){r=Ke;try{var nt=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,Sn=nt.memoizedState,se=r.stateNode,q=se.getSnapshotBeforeUpdate(r.elementType===r.type?rt:Hi(r.type,rt),Sn);se.__reactInternalSnapshotBeforeUpdate=q}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){_n(r,r.return,be)}if(n=r.sibling,n!==null){n.return=r.return,Ke=n;break}Ke=r.return}return nt=Fm,Fm=!1,nt}function go(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&ld(r,o,g)}f=f.next}while(f!==c)}}function Nl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function cd(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Om(n){var r=n.alternate;r!==null&&(n.alternate=null,Om(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ji],delete r[ro],delete r[wu],delete r[j_],delete r[K_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Im(n){return n.tag===5||n.tag===3||n.tag===4}function km(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Im(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ud(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ul));else if(c!==4&&(n=n.child,n!==null))for(ud(n,r,o),n=n.sibling;n!==null;)ud(n,r,o),n=n.sibling}function dd(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(dd(n,r,o),n=n.sibling;n!==null;)dd(n,r,o),n=n.sibling}var zn=null,Vi=!1;function $r(n,r,o){for(o=o.child;o!==null;)zm(n,r,o),o=o.sibling}function zm(n,r,o){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(re,o)}catch{}switch(o.tag){case 5:Yn||ss(o,r);case 6:var c=zn,f=Vi;zn=null,$r(n,r,o),zn=c,Vi=f,zn!==null&&(Vi?(n=zn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):zn.removeChild(o.stateNode));break;case 18:zn!==null&&(Vi?(n=zn,o=o.stateNode,n.nodeType===8?Tu(n.parentNode,o):n.nodeType===1&&Tu(n,o),Ys(n)):Tu(zn,o.stateNode));break;case 4:c=zn,f=Vi,zn=o.stateNode.containerInfo,Vi=!0,$r(n,r,o),zn=c,Vi=f;break;case 0:case 11:case 14:case 15:if(!Yn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&ld(o,r,A),f=f.next}while(f!==c)}$r(n,r,o);break;case 1:if(!Yn&&(ss(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){_n(o,r,O)}$r(n,r,o);break;case 21:$r(n,r,o);break;case 22:o.mode&1?(Yn=(c=Yn)||o.memoizedState!==null,$r(n,r,o),Yn=c):$r(n,r,o);break;default:$r(n,r,o)}}function Hm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new fx),r.forEach(function(c){var f=Mx.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Gi(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,A=r,O=A;e:for(;O!==null;){switch(O.tag){case 5:zn=O.stateNode,Vi=!1;break e;case 3:zn=O.stateNode.containerInfo,Vi=!0;break e;case 4:zn=O.stateNode.containerInfo,Vi=!0;break e}O=O.return}if(zn===null)throw Error(t(160));zm(g,A,f),zn=null,Vi=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(he){_n(f,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Vm(r,n),r=r.sibling}function Vm(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Gi(r,n),tr(n),c&4){try{go(3,n,n.return),Nl(3,n)}catch(rt){_n(n,n.return,rt)}try{go(5,n,n.return)}catch(rt){_n(n,n.return,rt)}}break;case 1:Gi(r,n),tr(n),c&512&&o!==null&&ss(o,o.return);break;case 5:if(Gi(r,n),tr(n),c&512&&o!==null&&ss(o,o.return),n.flags&32){var f=n.stateNode;try{me(f,"")}catch(rt){_n(n,n.return,rt)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,A=o!==null?o.memoizedProps:g,O=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&Rt(f,g),Fe(O,A);var he=Fe(O,g);for(A=0;A<V.length;A+=2){var we=V[A],Ae=V[A+1];we==="style"?_e(f,Ae):we==="dangerouslySetInnerHTML"?ce(f,Ae):we==="children"?me(f,Ae):z(f,we,Ae,he)}switch(O){case"input":St(f,g);break;case"textarea":mn(f,g);break;case"select":var Ee=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var We=g.value;We!=null?bt(f,!!g.multiple,We,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?bt(f,!!g.multiple,g.defaultValue,!0):bt(f,!!g.multiple,g.multiple?[]:"",!1))}f[ro]=g}catch(rt){_n(n,n.return,rt)}}break;case 6:if(Gi(r,n),tr(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(rt){_n(n,n.return,rt)}}break;case 3:if(Gi(r,n),tr(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Ys(r.containerInfo)}catch(rt){_n(n,n.return,rt)}break;case 4:Gi(r,n),tr(n);break;case 13:Gi(r,n),tr(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(pd=en())),c&4&&Hm(n);break;case 22:if(we=o!==null&&o.memoizedState!==null,n.mode&1?(Yn=(he=Yn)||we,Gi(r,n),Yn=he):Gi(r,n),tr(n),c&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!we&&(n.mode&1)!==0)for(Ke=n,we=n.child;we!==null;){for(Ae=Ke=we;Ke!==null;){switch(Ee=Ke,We=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:go(4,Ee,Ee.return);break;case 1:ss(Ee,Ee.return);var nt=Ee.stateNode;if(typeof nt.componentWillUnmount=="function"){c=Ee,o=Ee.return;try{r=c,nt.props=r.memoizedProps,nt.state=r.memoizedState,nt.componentWillUnmount()}catch(rt){_n(c,o,rt)}}break;case 5:ss(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Wm(Ae);continue}}We!==null?(We.return=Ee,Ke=We):Wm(Ae)}we=we.sibling}e:for(we=null,Ae=n;;){if(Ae.tag===5){if(we===null){we=Ae;try{f=Ae.stateNode,he?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Ae.stateNode,V=Ae.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=ge("display",A))}catch(rt){_n(n,n.return,rt)}}}else if(Ae.tag===6){if(we===null)try{Ae.stateNode.nodeValue=he?"":Ae.memoizedProps}catch(rt){_n(n,n.return,rt)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;we===Ae&&(we=null),Ae=Ae.return}we===Ae&&(we=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Gi(r,n),tr(n),c&4&&Hm(n);break;case 21:break;default:Gi(r,n),tr(n)}}function tr(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Im(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(me(f,""),c.flags&=-33);var g=km(n);dd(n,g,f);break;case 3:case 4:var A=c.stateNode.containerInfo,O=km(n);ud(n,O,A);break;default:throw Error(t(161))}}catch(V){_n(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function px(n,r,o){Ke=n,Gm(n)}function Gm(n,r,o){for(var c=(n.mode&1)!==0;Ke!==null;){var f=Ke,g=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||Dl;if(!A){var O=f.alternate,V=O!==null&&O.memoizedState!==null||Yn;O=Dl;var he=Yn;if(Dl=A,(Yn=V)&&!he)for(Ke=f;Ke!==null;)A=Ke,V=A.child,A.tag===22&&A.memoizedState!==null?Xm(f):V!==null?(V.return=A,Ke=V):Xm(f);for(;g!==null;)Ke=g,Gm(g),g=g.sibling;Ke=f,Dl=O,Yn=he}Bm(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Ke=g):Bm(n)}}function Bm(n){for(;Ke!==null;){var r=Ke;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yn||Nl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Yn)if(o===null)c.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:Hi(r.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Wp(r,g,c);break;case 3:var A=r.updateQueue;if(A!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Wp(r,A,o)}break;case 5:var O=r.stateNode;if(o===null&&r.flags&4){o=O;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var we=he.memoizedState;if(we!==null){var Ae=we.dehydrated;Ae!==null&&Ys(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yn||r.flags&512&&cd(r)}catch(Ee){_n(r,r.return,Ee)}}if(r===n){Ke=null;break}if(o=r.sibling,o!==null){o.return=r.return,Ke=o;break}Ke=r.return}}function Wm(n){for(;Ke!==null;){var r=Ke;if(r===n){Ke=null;break}var o=r.sibling;if(o!==null){o.return=r.return,Ke=o;break}Ke=r.return}}function Xm(n){for(;Ke!==null;){var r=Ke;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Nl(4,r)}catch(V){_n(r,o,V)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(V){_n(r,f,V)}}var g=r.return;try{cd(r)}catch(V){_n(r,g,V)}break;case 5:var A=r.return;try{cd(r)}catch(V){_n(r,A,V)}}}catch(V){_n(r,r.return,V)}if(r===n){Ke=null;break}var O=r.sibling;if(O!==null){O.return=r.return,Ke=O;break}Ke=r.return}}var mx=Math.ceil,Ul=C.ReactCurrentDispatcher,fd=C.ReactCurrentOwner,Ri=C.ReactCurrentBatchConfig,Ht=0,Un=null,Mn=null,Hn=0,gi=0,os=Vr(0),Cn=0,vo=null,ya=0,Fl=0,hd=0,_o=null,oi=null,pd=0,ls=1/0,yr=null,Ol=!1,md=null,Yr=null,Il=!1,qr=null,kl=0,xo=0,gd=null,zl=-1,Hl=0;function ei(){return(Ht&6)!==0?en():zl!==-1?zl:zl=en()}function jr(n){return(n.mode&1)===0?1:(Ht&2)!==0&&Hn!==0?Hn&-Hn:J_.transition!==null?(Hl===0&&(Hl=wn()),Hl):(n=Et,n!==0||(n=window.event,n=n===void 0?16:Yh(n.type)),n)}function Bi(n,r,o,c){if(50<xo)throw xo=0,gd=null,Error(t(185));xn(n,o,c),((Ht&2)===0||n!==Un)&&(n===Un&&((Ht&2)===0&&(Fl|=o),Cn===4&&Kr(n,Hn)),li(n,c),o===1&&Ht===0&&(r.mode&1)===0&&(ls=en()+500,pl&&Br()))}function li(n,r){var o=n.callbackNode;Qt(n,r);var c=Ut(n,n===Un?Hn:0);if(c===0)o!==null&&fr(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&fr(o),r===1)n.tag===0?Z_(Ym.bind(null,n)):Dp(Ym.bind(null,n)),Y_(function(){(Ht&6)===0&&Br()}),o=null;else{switch(Ui(c)){case 1:o=Vs;break;case 4:o=Gs;break;case 16:o=R;break;case 536870912:o=fe;break;default:o=R}o=tg(o,$m.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function $m(n,r){if(zl=-1,Hl=0,(Ht&6)!==0)throw Error(t(327));var o=n.callbackNode;if(cs()&&n.callbackNode!==o)return null;var c=Ut(n,n===Un?Hn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Vl(n,c);else{r=c;var f=Ht;Ht|=2;var g=jm();(Un!==n||Hn!==r)&&(yr=null,ls=en()+500,Ea(n,r));do try{_x();break}catch(O){qm(n,O)}while(!0);Uu(),Ul.current=g,Ht=f,Mn!==null?r=0:(Un=null,Hn=0,r=Cn)}if(r!==0){if(r===2&&(f=$t(n),f!==0&&(c=f,r=vd(n,f))),r===1)throw o=vo,Ea(n,0),Kr(n,c),li(n,en()),o;if(r===6)Kr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!gx(f)&&(r=Vl(n,c),r===2&&(g=$t(n),g!==0&&(c=g,r=vd(n,g))),r===1))throw o=vo,Ea(n,0),Kr(n,c),li(n,en()),o;switch(n.finishedWork=f,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ta(n,oi,yr);break;case 3:if(Kr(n,c),(c&130023424)===c&&(r=pd+500-en(),10<r)){if(Ut(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){ei(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=Eu(Ta.bind(null,n,oi,yr),r);break}Ta(n,oi,yr);break;case 4:if(Kr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,f=-1;0<c;){var A=31-Ie(c);g=1<<A,A=r[A],A>f&&(f=A),c&=~g}if(c=f,c=en()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*mx(c/1960))-c,10<c){n.timeoutHandle=Eu(Ta.bind(null,n,oi,yr),c);break}Ta(n,oi,yr);break;case 5:Ta(n,oi,yr);break;default:throw Error(t(329))}}}return li(n,en()),n.callbackNode===o?$m.bind(null,n):null}function vd(n,r){var o=_o;return n.current.memoizedState.isDehydrated&&(Ea(n,r).flags|=256),n=Vl(n,r),n!==2&&(r=oi,oi=o,r!==null&&_d(r)),n}function _d(n){oi===null?oi=n:oi.push.apply(oi,n)}function gx(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!ki(g(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Kr(n,r){for(r&=~hd,r&=~Fl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Ie(r),c=1<<o;n[o]=-1,r&=~c}}function Ym(n){if((Ht&6)!==0)throw Error(t(327));cs();var r=Ut(n,0);if((r&1)===0)return li(n,en()),null;var o=Vl(n,r);if(n.tag!==0&&o===2){var c=$t(n);c!==0&&(r=c,o=vd(n,c))}if(o===1)throw o=vo,Ea(n,0),Kr(n,r),li(n,en()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ta(n,oi,yr),li(n,en()),null}function xd(n,r){var o=Ht;Ht|=1;try{return n(r)}finally{Ht=o,Ht===0&&(ls=en()+500,pl&&Br())}}function Ma(n){qr!==null&&qr.tag===0&&(Ht&6)===0&&cs();var r=Ht;Ht|=1;var o=Ri.transition,c=Et;try{if(Ri.transition=null,Et=1,n)return n()}finally{Et=c,Ri.transition=o,Ht=r,(Ht&6)===0&&Br()}}function Sd(){gi=os.current,an(os)}function Ea(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,$_(o)),Mn!==null)for(o=Mn.return;o!==null;){var c=o;switch(bu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&fl();break;case 3:rs(),an(ri),an(Wn),Gu();break;case 5:Hu(c);break;case 4:rs();break;case 13:an(fn);break;case 19:an(fn);break;case 10:Fu(c.type._context);break;case 22:case 23:Sd()}o=o.return}if(Un=n,Mn=n=Zr(n.current,null),Hn=gi=r,Cn=0,vo=null,hd=Fl=ya=0,oi=_o=null,_a!==null){for(r=0;r<_a.length;r++)if(o=_a[r],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var A=g.next;g.next=f,c.next=A}o.pending=c}_a=null}return n}function qm(n,r){do{var o=Mn;try{if(Uu(),Tl.current=Rl,wl){for(var c=hn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}wl=!1}if(Sa=0,Nn=An=hn=null,uo=!1,fo=0,fd.current=null,o===null||o.return===null){Cn=1,vo=r,Mn=null;break}e:{var g=n,A=o.return,O=o,V=r;if(r=Hn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var he=V,we=O,Ae=we.tag;if((we.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Ee=we.alternate;Ee?(we.updateQueue=Ee.updateQueue,we.memoizedState=Ee.memoizedState,we.lanes=Ee.lanes):(we.updateQueue=null,we.memoizedState=null)}var We=xm(A);if(We!==null){We.flags&=-257,Sm(We,A,O,g,r),We.mode&1&&_m(g,he,r),r=We,V=he;var nt=r.updateQueue;if(nt===null){var rt=new Set;rt.add(V),r.updateQueue=rt}else nt.add(V);break e}else{if((r&1)===0){_m(g,he,r),yd();break e}V=Error(t(426))}}else if(cn&&O.mode&1){var Sn=xm(A);if(Sn!==null){(Sn.flags&65536)===0&&(Sn.flags|=256),Sm(Sn,A,O,g,r),Du(as(V,O));break e}}g=V=as(V,O),Cn!==4&&(Cn=2),_o===null?_o=[g]:_o.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var se=gm(g,V,r);Bp(g,se);break e;case 1:O=V;var q=g.type,de=g.stateNode;if((g.flags&128)===0&&(typeof q.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Yr===null||!Yr.has(de)))){g.flags|=65536,r&=-r,g.lanes|=r;var be=vm(g,O,r);Bp(g,be);break e}}g=g.return}while(g!==null)}Zm(o)}catch(ot){r=ot,Mn===o&&o!==null&&(Mn=o=o.return);continue}break}while(!0)}function jm(){var n=Ul.current;return Ul.current=Rl,n===null?Rl:n}function yd(){(Cn===0||Cn===3||Cn===2)&&(Cn=4),Un===null||(ya&268435455)===0&&(Fl&268435455)===0||Kr(Un,Hn)}function Vl(n,r){var o=Ht;Ht|=2;var c=jm();(Un!==n||Hn!==r)&&(yr=null,Ea(n,r));do try{vx();break}catch(f){qm(n,f)}while(!0);if(Uu(),Ht=o,Ul.current=c,Mn!==null)throw Error(t(261));return Un=null,Hn=0,Cn}function vx(){for(;Mn!==null;)Km(Mn)}function _x(){for(;Mn!==null&&!Ur();)Km(Mn)}function Km(n){var r=eg(n.alternate,n,gi);n.memoizedProps=n.pendingProps,r===null?Zm(n):Mn=r,fd.current=null}function Zm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=ux(o,r,gi),o!==null){Mn=o;return}}else{if(o=dx(o,r),o!==null){o.flags&=32767,Mn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{Cn=6,Mn=null;return}}if(r=r.sibling,r!==null){Mn=r;return}Mn=r=n}while(r!==null);Cn===0&&(Cn=5)}function Ta(n,r,o){var c=Et,f=Ri.transition;try{Ri.transition=null,Et=1,xx(n,r,o,c)}finally{Ri.transition=f,Et=c}return null}function xx(n,r,o,c){do cs();while(qr!==null);if((Ht&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(Ft(n,g),n===Un&&(Mn=Un=null,Hn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Il||(Il=!0,tg(R,function(){return cs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Ri.transition,Ri.transition=null;var A=Et;Et=1;var O=Ht;Ht|=4,fd.current=null,hx(n,o),Vm(o,n),z_(yu),Jo=!!Su,yu=Su=null,n.current=o,px(o),Va(),Ht=O,Et=A,Ri.transition=g}else n.current=o;if(Il&&(Il=!1,qr=n,kl=f),g=n.pendingLanes,g===0&&(Yr=null),He(o.stateNode),li(n,en()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)f=r[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ol)throw Ol=!1,n=md,md=null,n;return(kl&1)!==0&&n.tag!==0&&cs(),g=n.pendingLanes,(g&1)!==0?n===gd?xo++:(xo=0,gd=n):xo=0,Br(),null}function cs(){if(qr!==null){var n=Ui(kl),r=Ri.transition,o=Et;try{if(Ri.transition=null,Et=16>n?16:n,qr===null)var c=!1;else{if(n=qr,qr=null,kl=0,(Ht&6)!==0)throw Error(t(331));var f=Ht;for(Ht|=4,Ke=n.current;Ke!==null;){var g=Ke,A=g.child;if((Ke.flags&16)!==0){var O=g.deletions;if(O!==null){for(var V=0;V<O.length;V++){var he=O[V];for(Ke=he;Ke!==null;){var we=Ke;switch(we.tag){case 0:case 11:case 15:go(8,we,g)}var Ae=we.child;if(Ae!==null)Ae.return=we,Ke=Ae;else for(;Ke!==null;){we=Ke;var Ee=we.sibling,We=we.return;if(Om(we),we===he){Ke=null;break}if(Ee!==null){Ee.return=We,Ke=Ee;break}Ke=We}}}var nt=g.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var Sn=rt.sibling;rt.sibling=null,rt=Sn}while(rt!==null)}}Ke=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,Ke=A;else e:for(;Ke!==null;){if(g=Ke,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:go(9,g,g.return)}var se=g.sibling;if(se!==null){se.return=g.return,Ke=se;break e}Ke=g.return}}var q=n.current;for(Ke=q;Ke!==null;){A=Ke;var de=A.child;if((A.subtreeFlags&2064)!==0&&de!==null)de.return=A,Ke=de;else e:for(A=q;Ke!==null;){if(O=Ke,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Nl(9,O)}}catch(ot){_n(O,O.return,ot)}if(O===A){Ke=null;break e}var be=O.sibling;if(be!==null){be.return=O.return,Ke=be;break e}Ke=O.return}}if(Ht=f,Br(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(re,n)}catch{}c=!0}return c}finally{Et=o,Ri.transition=r}}return!1}function Jm(n,r,o){r=as(o,r),r=gm(n,r,1),n=Xr(n,r,1),r=ei(),n!==null&&(xn(n,1,r),li(n,r))}function _n(n,r,o){if(n.tag===3)Jm(n,n,o);else for(;r!==null;){if(r.tag===3){Jm(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Yr===null||!Yr.has(c))){n=as(o,n),n=vm(r,n,1),r=Xr(r,n,1),n=ei(),r!==null&&(xn(r,1,n),li(r,n));break}}r=r.return}}function Sx(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=ei(),n.pingedLanes|=n.suspendedLanes&o,Un===n&&(Hn&o)===o&&(Cn===4||Cn===3&&(Hn&130023424)===Hn&&500>en()-pd?Ea(n,0):hd|=o),li(n,r)}function Qm(n,r){r===0&&((n.mode&1)===0?r=1:(r=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var o=ei();n=_r(n,r),n!==null&&(xn(n,r,o),li(n,o))}function yx(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Qm(n,o)}function Mx(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Qm(n,o)}var eg;eg=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||ri.current)si=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return si=!1,cx(n,r,o);si=(n.flags&131072)!==0}else si=!1,cn&&(r.flags&1048576)!==0&&Np(r,gl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;Ll(n,r),n=r.pendingProps;var f=Za(r,Wn.current);is(r,o),f=Xu(null,r,c,n,f,o);var g=$u();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ai(c)?(g=!0,hl(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,ku(r),f.updater=bl,r.stateNode=f,f._reactInternals=r,Ju(r,c,n,o),r=nd(null,r,c,!0,g,o)):(r.tag=0,cn&&g&&Ru(r),Qn(null,r,f,o),r=r.child),r;case 16:c=r.elementType;e:{switch(Ll(n,r),n=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Tx(c),n=Hi(c,n),f){case 0:r=td(null,r,c,n,o);break e;case 1:r=Am(null,r,c,n,o);break e;case 11:r=ym(null,r,c,n,o);break e;case 14:r=Mm(null,r,c,Hi(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Hi(c,f),td(n,r,c,f,o);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Hi(c,f),Am(n,r,c,f,o);case 3:e:{if(Cm(r),n===null)throw Error(t(387));c=r.pendingProps,g=r.memoizedState,f=g.element,Gp(n,r),Ml(r,c,null,o);var A=r.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=as(Error(t(423)),r),r=Rm(n,r,c,o,f);break e}else if(c!==f){f=as(Error(t(424)),r),r=Rm(n,r,c,o,f);break e}else for(mi=Hr(r.stateNode.containerInfo.firstChild),pi=r,cn=!0,zi=null,o=Hp(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(es(),c===f){r=Sr(n,r,o);break e}Qn(n,r,c,o)}r=r.child}return r;case 5:return Xp(r),n===null&&Lu(r),c=r.type,f=r.pendingProps,g=n!==null?n.memoizedProps:null,A=f.children,Mu(c,f)?A=null:g!==null&&Mu(c,g)&&(r.flags|=32),wm(n,r),Qn(n,r,A,o),r.child;case 6:return n===null&&Lu(r),null;case 13:return bm(n,r,o);case 4:return zu(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=ts(r,null,c,o):Qn(n,r,c,o),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Hi(c,f),ym(n,r,c,f,o);case 7:return Qn(n,r,r.pendingProps,o),r.child;case 8:return Qn(n,r,r.pendingProps.children,o),r.child;case 12:return Qn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,g=r.memoizedProps,A=f.value,tn(xl,c._currentValue),c._currentValue=A,g!==null)if(ki(g.value,A)){if(g.children===f.children&&!ri.current){r=Sr(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var O=g.dependencies;if(O!==null){A=g.child;for(var V=O.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=xr(-1,o&-o),V.tag=2;var he=g.updateQueue;if(he!==null){he=he.shared;var we=he.pending;we===null?V.next=V:(V.next=we.next,we.next=V),he.pending=V}}g.lanes|=o,V=g.alternate,V!==null&&(V.lanes|=o),Ou(g.return,o,r),O.lanes|=o;break}V=V.next}}else if(g.tag===10)A=g.type===r.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=o,O=A.alternate,O!==null&&(O.lanes|=o),Ou(A,o,r),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===r){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}Qn(n,r,f.children,o),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,is(r,o),f=Ai(f),c=c(f),r.flags|=1,Qn(n,r,c,o),r.child;case 14:return c=r.type,f=Hi(c,r.pendingProps),f=Hi(c.type,f),Mm(n,r,c,f,o);case 15:return Em(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Hi(c,f),Ll(n,r),r.tag=1,ai(c)?(n=!0,hl(r)):n=!1,is(r,o),pm(r,c,f),Ju(r,c,f,o),nd(null,r,c,!0,n,o);case 19:return Lm(n,r,o);case 22:return Tm(n,r,o)}throw Error(t(156,r.tag))};function tg(n,r){return Dn(n,r)}function Ex(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function bi(n,r,o,c){return new Ex(n,r,o,c)}function Md(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Tx(n){if(typeof n=="function")return Md(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===ne)return 14}return 2}function Zr(n,r){var o=n.alternate;return o===null?(o=bi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Gl(n,r,o,c,f,g){var A=2;if(c=n,typeof n=="function")Md(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return wa(o.children,f,g,r);case w:A=8,f|=8;break;case U:return n=bi(12,o,r,f|2),n.elementType=U,n.lanes=g,n;case ie:return n=bi(13,o,r,f),n.elementType=ie,n.lanes=g,n;case H:return n=bi(19,o,r,f),n.elementType=H,n.lanes=g,n;case le:return Bl(o,f,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:A=10;break e;case G:A=9;break e;case j:A=11;break e;case ne:A=14;break e;case ae:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=bi(A,o,r,f),r.elementType=n,r.type=c,r.lanes=g,r}function wa(n,r,o,c){return n=bi(7,n,c,r),n.lanes=o,n}function Bl(n,r,o,c){return n=bi(22,n,c,r),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function Ed(n,r,o){return n=bi(6,n,null,r),n.lanes=o,n}function Td(n,r,o){return r=bi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function wx(n,r,o,c,f){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ge(0),this.expirationTimes=Ge(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ge(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function wd(n,r,o,c,f,g,A,O,V){return n=new wx(n,r,o,O,V),r===1?(r=1,g===!0&&(r|=8)):r=0,g=bi(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},ku(g),n}function Ax(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function ng(n){if(!n)return Gr;n=n._reactInternals;e:{if(Vt(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ai(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(ai(o))return Pp(n,o,r)}return r}function ig(n,r,o,c,f,g,A,O,V){return n=wd(o,c,!0,n,f,g,A,O,V),n.context=ng(null),o=n.current,c=ei(),f=jr(o),g=xr(c,f),g.callback=r??null,Xr(o,g,f),n.current.lanes=f,xn(n,f,c),li(n,c),n}function Wl(n,r,o,c){var f=r.current,g=ei(),A=jr(f);return o=ng(o),r.context===null?r.context=o:r.pendingContext=o,r=xr(g,A),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Xr(f,r,A),n!==null&&(Bi(n,f,A,g),yl(n,f,A)),A}function Xl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function rg(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Ad(n,r){rg(n,r),(n=n.alternate)&&rg(n,r)}function Cx(){return null}var ag=typeof reportError=="function"?reportError:function(n){console.error(n)};function Cd(n){this._internalRoot=n}$l.prototype.render=Cd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Wl(n,r,null,null)},$l.prototype.unmount=Cd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;Ma(function(){Wl(null,n,null,null)}),r[pr]=null}};function $l(n){this._internalRoot=n}$l.prototype.unstable_scheduleHydration=function(n){if(n){var r=Fi();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Ir.length&&r!==0&&r<Ir[o].priority;o++);Ir.splice(o,0,n),o===0&&Xh(n)}};function Rd(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Yl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function sg(){}function Rx(n,r,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var he=Xl(A);g.call(he)}}var A=ig(r,c,n,0,null,!1,!1,"",sg);return n._reactRootContainer=A,n[pr]=A.current,no(n.nodeType===8?n.parentNode:n),Ma(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var he=Xl(V);O.call(he)}}var V=wd(n,0,!1,null,null,!1,!1,"",sg);return n._reactRootContainer=V,n[pr]=V.current,no(n.nodeType===8?n.parentNode:n),Ma(function(){Wl(r,V,o,c)}),V}function ql(n,r,o,c,f){var g=o._reactRootContainer;if(g){var A=g;if(typeof f=="function"){var O=f;f=function(){var V=Xl(A);O.call(V)}}Wl(r,A,n,f)}else A=Rx(o,r,n,f,c);return Xl(A)}hr=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Ye(r.pendingLanes);o!==0&&(Bn(r,o|1),li(r,en()),(Ht&6)===0&&(ls=en()+500,Br()))}break;case 13:Ma(function(){var c=_r(n,1);if(c!==null){var f=ei();Bi(c,n,1,f)}}),Ad(n,1)}},Gt=function(n){if(n.tag===13){var r=_r(n,134217728);if(r!==null){var o=ei();Bi(r,n,134217728,o)}Ad(n,134217728)}},ln=function(n){if(n.tag===13){var r=jr(n),o=_r(n,r);if(o!==null){var c=ei();Bi(o,n,r,c)}Ad(n,r)}},Fi=function(){return Et},jt=function(n,r){var o=Et;try{return Et=n,r()}finally{Et=o}},at=function(n,r,o){switch(r){case"input":if(St(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var f=dl(c);if(!f)throw Error(t(90));Ze(c),St(c,f)}}}break;case"textarea":mn(n,o);break;case"select":r=o.value,r!=null&&bt(n,!!o.multiple,r,!1)}},ke=xd,Se=Ma;var bx={usingClientEntryPoint:!1,Events:[ao,ja,dl,ve,Ne,xd]},So={findFiberByHostInstance:pa,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Px={bundleType:So.bundleType,version:So.version,rendererPackageName:So.rendererPackageName,rendererConfig:So.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:C.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=nn(n),n===null?null:n.stateNode},findFiberByHostInstance:So.findFiberByHostInstance||Cx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var jl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!jl.isDisabled&&jl.supportsFiber)try{re=jl.inject(Px),te=jl}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=bx,ci.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Rd(r))throw Error(t(200));return Ax(n,r,null,o)},ci.createRoot=function(n,r){if(!Rd(n))throw Error(t(299));var o=!1,c="",f=ag;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=wd(n,1,!1,null,null,o,!1,c,f),n[pr]=r.current,no(n.nodeType===8?n.parentNode:n),new Cd(r)},ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=nn(r),n=n===null?null:n.stateNode,n},ci.flushSync=function(n){return Ma(n)},ci.hydrate=function(n,r,o){if(!Yl(r))throw Error(t(200));return ql(null,n,r,!0,o)},ci.hydrateRoot=function(n,r,o){if(!Rd(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",A=ag;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),r=ig(r,null,n,1,o??null,f,!1,g,A),n[pr]=r.current,no(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new $l(r)},ci.render=function(n,r,o){if(!Yl(r))throw Error(t(200));return ql(null,n,r,!1,o)},ci.unmountComponentAtNode=function(n){if(!Yl(n))throw Error(t(40));return n._reactRootContainer?(Ma(function(){ql(null,null,n,!1,function(){n._reactRootContainer=null,n[pr]=null})}),!0):!1},ci.unstable_batchedUpdates=xd,ci.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!Yl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return ql(n,r,o,!1,c)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var pg;function Vx(){if(pg)return Ld.exports;pg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),Ld.exports=Hx(),Ld.exports}var mg;function Gx(){if(mg)return Kl;mg=1;var i=Vx();return Kl.createRoot=i.createRoot,Kl.hydrateRoot=i.hydrateRoot,Kl}var Bx=Gx();const Zl={END:"end",LEFT:"left",RIGHT:"right",START:"start"},la={NONE:"none",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning",DANGER:"danger"};let kt="bp6";typeof BLUEPRINT_NAMESPACE<"u"?kt=BLUEPRINT_NAMESPACE:typeof REACT_APP_BLUEPRINT_NAMESPACE<"u"&&(kt=REACT_APP_BLUEPRINT_NAMESPACE);const dh=`${kt}-active`,Wx=`${kt}-align-left`,Xx=`${kt}-align-right`,$x=`${kt}-dark`,Xc=`${kt}-disabled`,Ho=`${kt}-fill`,Yx=`${kt}-inline`,qx=`${kt}-interactive`,Fs=`${kt}-large`,jx=`${kt}-loading`,Nc=`${kt}-minimal`,gg=`${kt}-outlined`,Kx=`${kt}-round`,Uc=`${kt}-small`,V0=`${kt}-vertical`;Ki(la.PRIMARY);Ki(la.SUCCESS);Ki(la.WARNING);Ki(la.DANGER);const Zx=`${kt}-text-overflow-ellipsis`,$c=`${kt}-button`,Jx=`${$c}-group`,Qx=`${$c}-spinner`,eS=`${$c}-text`,tS=`${kt}-html-select`,fh=`${kt}-control`,nS=`${fh}-input`,G0=`${fh}-indicator`,vg=`${G0}-child`,iS=`${kt}-checkbox`,rS=`${kt}-radio`,B0=`${kt}-switch`,_g=`${B0}-inner-text`,Ia=`${kt}-slider`,aS=`${Ia}-axis`,W0=`${Ia}-handle`,X0=`${Ia}-label`,sS=`${Ia}-track`,oS=`${Ia}-progress`,lS=`${kt}-start`,cS=`${kt}-end`,Yc=`${kt}-spinner`,uS=`${Yc}-animation`,dS=`${Yc}-head`,fS=`${kt}-no-spin`,hS=`${Yc}-track`,$0=`${kt}-tag`,pS=`${$0}-remove`,hh=`${kt}-icon`,mS=`${hh}-standard`,gS=`${hh}-large`;function ph(i){switch(i){case Zl.LEFT:case Zl.START:return Wx;case Zl.RIGHT:case Zl.END:return Xx;default:return}}function vS(i){if(i!=null)return i.indexOf(`${kt}-icon-`)===0?i:`${kt}-icon-${i}`}function Ki(i){if(!(i==null||i===la.NONE))return`${kt}-intent-${i.toLowerCase()}`}function qc(i,e){if(i==="small")return Uc;if(i==="large")return Fs;const{large:t=!1,small:a=!1}=e;return{[Fs]:t,[Uc]:a}}function Y0(i,e){if(i==="outlined")return gg;if(i==="minimal")return Nc;const{minimal:t=!1,outlined:a=!1}=e;return{[Nc]:t,[gg]:a}}var Pe=uh();function _S(i,e,t=(a,s)=>a===s){return i==null&&e==null?!0:i==null||e==null||i.length!==e.length?!1:i.every((a,s)=>t(a,e[s]))}function xS(){return typeof window<"u"&&window.document!=null}function q0(i){return typeof i=="function"}const fa="[Blueprint]",SS=fa+" clamp: max cannot be less than min",yS=fa+" <Slider> stepSize must be greater than zero.",MS=fa+" <Slider> labelStepSize must be greater than zero.",ES=fa+" <Slider> min prop must be a finite number.",TS=fa+" <Slider> max prop must be a finite number.",wS=fa+" <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s",AS=fa+" <MultiSlider> labelStepSize and labelValues prop are mutually exclusive, with labelStepSize taking priority.",CS=fa+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";function _f(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}function RS(i,e,t=1e-5){return Math.abs(i-e)<=t}function mh(i,e,t){if(i==null)return i;if(t<e)throw new Error(SS);return Math.min(Math.max(i,e),t)}function j0(i){if(!isFinite(i))return 0;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}const kn="Blueprint6",xg=["active","alignText","asyncControl","containerRef","current","elementRef","ellipsizeText","endIcon","fill","icon","iconSize","inputClassName","inputRef","intent","inline","large","loading","leftElement","leftIcon","minimal","onRemove","outlined","panel","panelClassName","popoverProps","rightElement","rightIcon","round","selectedValue","size","small","tagName","text","textClassName","variant"];function Ds(i,e=xg,t=!1){return t&&(e=e.concat(xg)),e.reduce((a,s)=>(s.indexOf("-")!==-1||a.hasOwnProperty(s)&&delete a[s],a),{...i})}function Fc(i,e=!1){return i==null||i===""||i===!1||!e&&Array.isArray(i)&&(i.length===0||i.every(t=>Fc(t,!0)))}function K0(i,e){return i!=null&&i.type!=null&&i.type.displayName!=null&&i.type.displayName===e.displayName}const bS=`${kn}.Icon.`;function PS(i){if(!Pe.isValidElement(i))return!1;const{type:e}=i;if(typeof e=="string")return!1;const{displayName:t}=e;return typeof t=="string"&&t.startsWith(bS)}function Sg(i){return i.key==="Enter"||i.key===" "}const LS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];function DS(i){return LS.includes(i.key)}function NS(i,e,t){if(e.includes(i.key))return-1;if(t.includes(i.key))return 1}function US(i){return i!=null&&typeof i!="function"}function FS(i){return typeof i=="function"}function OS(i,e){US(i)?i.current=e:FS(i)&&i(e)}function gh(...i){return e=>{i.forEach(t=>{OS(t,e)})}}class vh extends Pe.PureComponent{constructor(t){super(t);_t(this,"componentWillUpdate");_t(this,"componentWillReceiveProps");_t(this,"componentWillMount");_t(this,"getDerivedStateFromProps");_t(this,"displayName");_t(this,"timeoutIds",[]);_t(this,"requestIds",[]);_t(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});_t(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});_f("production")||this.validateProps(this.props)}componentDidUpdate(t,a,s){_f("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const a=window.requestAnimationFrame(t);return this.requestIds.push(a),()=>window.cancelAnimationFrame(a)}setTimeout(t,a){const s=window.setTimeout(t,a);return this.timeoutIds.push(s),()=>window.clearTimeout(s)}validateProps(t){}}var Ud={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var yg;function IS(){return yg||(yg=1,(function(i){(function(){var e={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=s(l,a(d)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)e.call(l,d)&&l[d]&&(u=s(u,d));return u}function s(l,u){return u?l?l+" "+u:l+u:l}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(Ud)),Ud.exports}var kS=IS();const Gn=Ux(kS);function zS(i,e=[]){Pe.useEffect(()=>{_f("production")||i()},e)}const HS={defaultTabIndex:void 0,disabledTabIndex:-1};function Z0(i,e,t,a=HS){const{defaultTabIndex:s,disabledTabIndex:l}=a,{active:u,onClick:d,onFocus:m,onKeyDown:p,onKeyUp:v,onBlur:x,tabIndex:_=s}=e,[M,T]=Pe.useState(),[b,y]=Pe.useState(!1),S=Pe.useRef(null),D=Pe.useCallback(P=>{b&&y(!1),x==null||x(P)},[b,x]),z=Pe.useCallback(P=>{Sg(P)&&(P.preventDefault(),P.key!==M&&y(!0)),T(P.key),p==null||p(P)},[M,p]),C=Pe.useCallback(P=>{var I;Sg(P)&&(y(!1),(I=S.current)==null||I.click()),T(void 0),v==null||v(P)},[v,S]);return[i&&(u||b),{onBlur:D,onClick:i?d:void 0,onFocus:i?m:void 0,onKeyDown:z,onKeyUp:C,ref:gh(S,t),tabIndex:i?_:l}]}var Vo=function(){return Vo=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Vo.apply(this,arguments)};function VS(i){return i.toLowerCase()}var GS=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],BS=/[^A-Z0-9]+/gi;function J0(i,e){e===void 0&&(e={});for(var t=e.splitRegexp,a=t===void 0?GS:t,s=e.stripRegexp,l=s===void 0?BS:s,u=e.transform,d=u===void 0?VS:u,m=e.delimiter,p=m===void 0?" ":m,v=Mg(Mg(i,a,"$1\0$2"),l,"\0"),x=0,_=v.length;v.charAt(x)==="\0";)x++;for(;v.charAt(_-1)==="\0";)_--;return v.slice(x,_).split("\0").map(d).join(p)}function Mg(i,e,t){return e instanceof RegExp?i.replace(e,t):e.reduce(function(a,s){return a.replace(s,t)},i)}function WS(i,e){var t=i.charAt(0),a=i.substr(1).toLowerCase();return e>0&&t>="0"&&t<="9"?"_"+t+a:""+t.toUpperCase()+a}function XS(i,e){return e===void 0&&(e={}),J0(i,Vo({delimiter:"",transform:WS},e))}function $S(i,e){return e===void 0&&(e={}),J0(i,Vo({delimiter:"."},e))}function YS(i,e){return e===void 0&&(e={}),$S(i,Vo({delimiter:"_"},e))}var un;(function(i){i[i.STANDARD=16]="STANDARD",i[i.LARGE=20]="LARGE"})(un||(un={}));const qS="modulepreload",jS=function(i,e){return new URL(i,e).href},Eg={},Tg=function(e,t,a){let s=Promise.resolve();if(t&&t.length>0){let u=function(v){return Promise.all(v.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));s=u(t.map(v=>{if(v=jS(v,a),v in Eg)return;Eg[v]=!0;const x=v.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!a)for(let b=d.length-1;b>=0;b--){const y=d[b];if(y.href===v&&(!x||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${_}`))return;const T=document.createElement("link");if(T.rel=x?"stylesheet":qS,x||(T.as="script"),T.crossOrigin="",T.href=v,p&&T.setAttribute("nonce",p),document.head.appendChild(T),x)return new Promise((b,y)=>{T.addEventListener("load",b),T.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var h;(function(i){i.AddApplication="add-application",i.AddChild="add-child",i.AddClip="add-clip",i.AddColumnLeft="add-column-left",i.AddColumnRight="add-column-right",i.AddDerivedColumn="add-derived-column",i.AddLocation="add-location",i.AddParent="add-parent",i.AddRowBottom="add-row-bottom",i.AddRowTop="add-row-top",i.AddTile="add-tile",i.AddToArtifact="add-to-artifact",i.AddToFolder="add-to-folder",i.Add="add",i.AimpointsTarget="aimpoints-target",i.Airplane="airplane",i.AlignCenter="align-center",i.AlignJustify="align-justify",i.AlignLeft="align-left",i.AlignRight="align-right",i.AlignmentBottom="alignment-bottom",i.AlignmentHorizontalCenter="alignment-horizontal-center",i.AlignmentLeft="alignment-left",i.AlignmentRight="alignment-right",i.AlignmentTop="alignment-top",i.AlignmentVerticalCenter="alignment-vertical-center",i.Ammunition="ammunition",i.Anchor="anchor",i.Annotation="annotation",i.Announcement="announcement",i.Antenna="antenna",i.AppHeader="app-header",i.Application="application",i.Applications="applications",i.Archive="archive",i.AreaOfInterest="area-of-interest",i.ArrayBoolean="array-boolean",i.ArrayDate="array-date",i.ArrayFloatingPoint="array-floating-point",i.ArrayNumeric="array-numeric",i.ArrayObject="array-object",i.ArrayString="array-string",i.ArrayTimestamp="array-timestamp",i.Array="array",i.ArrowBottomLeft="arrow-bottom-left",i.ArrowBottomRight="arrow-bottom-right",i.ArrowDown="arrow-down",i.ArrowLeft="arrow-left",i.ArrowRight="arrow-right",i.ArrowTopLeft="arrow-top-left",i.ArrowTopRight="arrow-top-right",i.ArrowUp="arrow-up",i.ArrowsArc="arrows-arc",i.ArrowsHorizontal="arrows-horizontal",i.ArrowsVertical="arrows-vertical",i.Asterisk="asterisk",i.At="at",i.AutomaticUpdates="automatic-updates",i.Axle="axle",i.Backlink="backlink",i.BackwardTen="backward-ten",i.Badge="badge",i.BanCircle="ban-circle",i.BankAccount="bank-account",i.Barcode="barcode",i.BinaryNumber="binary-number",i.Blank="blank",i.BlockPromote="block-promote",i.BlockedPerson="blocked-person",i.Bold="bold",i.Book="book",i.Bookmark="bookmark",i.Box="box",i.BranchLocked="branch-locked",i.BranchUnlocked="branch-unlocked",i.Briefcase="briefcase",i.BringData="bring-data",i.BringForward="bring-forward",i.BritishPound="british-pound",i.Bug="bug",i.Buggy="buggy",i.Build="build",i.Bullseye="bullseye",i.Calculator="calculator",i.Calendar="calendar",i.Camera="camera",i.CaretDown="caret-down",i.CaretLeft="caret-left",i.CaretRight="caret-right",i.CaretUp="caret-up",i.CargoShip="cargo-ship",i.CellTower="cell-tower",i.Changes="changes",i.Chart="chart",i.Chat="chat",i.ChevronBackward="chevron-backward",i.ChevronDown="chevron-down",i.ChevronForward="chevron-forward",i.ChevronLeft="chevron-left",i.ChevronRight="chevron-right",i.ChevronUp="chevron-up",i.CircleArrowDown="circle-arrow-down",i.CircleArrowLeft="circle-arrow-left",i.CircleArrowRight="circle-arrow-right",i.CircleArrowUp="circle-arrow-up",i.CircleDashed="circle-dashed",i.Circle="circle",i.Citation="citation",i.Clean="clean",i.Clip="clip",i.ClipboardFile="clipboard-file",i.Clipboard="clipboard",i.CloudDownload="cloud-download",i.CloudServer="cloud-server",i.CloudTick="cloud-tick",i.CloudUpload="cloud-upload",i.Cloud="cloud",i.CodeBlock="code-block",i.Code="code",i.Cog="cog",i.CollapseAll="collapse-all",i.ColorFill="color-fill",i.ColumnLayout="column-layout",i.Comment="comment",i.Comparison="comparison",i.Compass="compass",i.Compressed="compressed",i.Confirm="confirm",i.ConsoleAlert="console-alert",i.Console="console",i.Construction="construction",i.Contrast="contrast",i.Control="control",i.CreditCard="credit-card",i.Crop="crop",i.CrossCircle="cross-circle",i.Cross="cross",i.Crown="crown",i.CrystalBall="crystal-ball",i.CssStyle="css-style",i.CubeAdd="cube-add",i.CubeCutout="cube-cutout",i.CubeCutouts="cube-cutouts",i.CubeEdit="cube-edit",i.CubeRemove="cube-remove",i.Cube="cube",i.Cubes="cubes",i.CurlyBraces="curly-braces",i.CurvedRangeChart="curved-range-chart",i.Cut="cut",i.Cycle="cycle",i.Dashboard="dashboard",i.DataCloud="data-cloud",i.DataConnection="data-connection",i.DataLineage="data-lineage",i.DataSearch="data-search",i.DataSync="data-sync",i.Database="database",i.DeleteClip="delete-clip",i.Delete="delete",i.Delta="delta",i.DeriveColumn="derive-column",i.Descendant="descendant",i.Desktop="desktop",i.Detection="detection",i.Diagnosis="diagnosis",i.DiagramTree="diagram-tree",i.DirectionLeft="direction-left",i.DirectionRight="direction-right",i.Disable="disable",i.Divide="divide",i.DocumentCode="document-code",i.DocumentLocked="document-locked",i.DocumentOpen="document-open",i.DocumentShare="document-share",i.Document="document",i.Dollar="dollar",i.Dot="dot",i.DoubleCaretHorizontal="double-caret-horizontal",i.DoubleCaretVertical="double-caret-vertical",i.DoubleChevronDown="double-chevron-down",i.DoubleChevronLeft="double-chevron-left",i.DoubleChevronRight="double-chevron-right",i.DoubleChevronUp="double-chevron-up",i.DoughnutChart="doughnut-chart",i.Download="download",i.DragHandleHorizontal="drag-handle-horizontal",i.DragHandleVertical="drag-handle-vertical",i.Draw="draw",i.DrawerLeftFilled="drawer-left-filled",i.DrawerLeft="drawer-left",i.DrawerRightFilled="drawer-right-filled",i.DrawerRight="drawer-right",i.DriveTime="drive-time",i.DroneUav="drone-uav",i.Drone="drone",i.Duplicate="duplicate",i.Edit="edit",i.Eject="eject",i.Emoji="emoji",i.Endnote="endnote",i.Endorsed="endorsed",i.Engagement="engagement",i.Envelope="envelope",i.Equals="equals",i.Eraser="eraser",i.Error="error",i.Euro="euro",i.Excavator="excavator",i.Exchange="exchange",i.ExcludeRow="exclude-row",i.ExpandAll="expand-all",i.Explain="explain",i.Export="export",i.EyeOff="eye-off",i.EyeOn="eye-on",i.EyeOpen="eye-open",i.FastBackward="fast-backward",i.FastForward="fast-forward",i.FeedSubscribed="feed-subscribed",i.Feed="feed",i.FighterJet="fighter-jet",i.Film="film",i.FilterKeep="filter-keep",i.FilterList="filter-list",i.FilterOpen="filter-open",i.FilterRemove="filter-remove",i.FilterSortAsc="filter-sort-asc",i.FilterSortDesc="filter-sort-desc",i.Filter="filter",i.Flag="flag",i.Flame="flame",i.Flash="flash",i.FloatingPoint="floating-point",i.FloppyDisk="floppy-disk",i.FlowBranch="flow-branch",i.FlowEnd="flow-end",i.FlowLinear="flow-linear",i.FlowReviewBranch="flow-review-branch",i.FlowReview="flow-review",i.Flows="flows",i.FolderClose="folder-close",i.FolderNew="folder-new",i.FolderOpen="folder-open",i.FolderSharedOpen="folder-shared-open",i.FolderShared="folder-shared",i.Follower="follower",i.Following="following",i.Font="font",i.ForkEnd="fork-end",i.Fork="fork",i.Form="form",i.ForwardTen="forward-ten",i.FrameToFrame="frame-to-frame",i.Fuel="fuel",i.FullCircle="full-circle",i.FullStackedChart="full-stacked-chart",i.Fullscreen="fullscreen",i.FunctionMinimal="function-minimal",i.Function="function",i.GanttChart="gantt-chart",i.Generate="generate",i.Geofence="geofence",i.Geolocation="geolocation",i.Geosearch="geosearch",i.Geotime="geotime",i.GiftBox="gift-box",i.GitBranch="git-branch",i.GitCommit="git-commit",i.GitMerge="git-merge",i.GitNewBranch="git-new-branch",i.GitPull="git-pull",i.GitPush="git-push",i.GitRebase="git-rebase",i.GitRepo="git-repo",i.Glass="glass",i.GlobeNetworkAdd="globe-network-add",i.GlobeNetwork="globe-network",i.Globe="globe",i.GraphRemove="graph-remove",i.Graph="graph",i.GreaterThanOrEqualTo="greater-than-or-equal-to",i.GreaterThan="greater-than",i.GridView="grid-view",i.Grid="grid",i.GroupItem="group-item",i.GroupObjects="group-objects",i.GroupedBarChart="grouped-bar-chart",i.HandDown="hand-down",i.HandLeft="hand-left",i.HandRight="hand-right",i.HandUp="hand-up",i.Hand="hand",i.Hat="hat",i.HeaderOne="header-one",i.HeaderThree="header-three",i.HeaderTwo="header-two",i.Header="header",i.Headset="headset",i.HeartBroken="heart-broken",i.Heart="heart",i.HeatGrid="heat-grid",i.Heatmap="heatmap",i.Helicopter="helicopter",i.Help="help",i.HelperManagement="helper-management",i.Hexagon="hexagon",i.HighPriority="high-priority",i.HighVoltagePole="high-voltage-pole",i.Highlight="highlight",i.History="history",i.Home="home",i.HorizontalBarChartAsc="horizontal-bar-chart-asc",i.HorizontalBarChartDesc="horizontal-bar-chart-desc",i.HorizontalBarChart="horizontal-bar-chart",i.HorizontalDistribution="horizontal-distribution",i.HorizontalInbetween="horizontal-inbetween",i.Hurricane="hurricane",i.IdNumber="id-number",i.ImageRotateLeft="image-rotate-left",i.ImageRotateRight="image-rotate-right",i.Import="import",i.InboxFiltered="inbox-filtered",i.InboxGeo="inbox-geo",i.InboxSearch="inbox-search",i.InboxUpdate="inbox-update",i.Inbox="inbox",i.InfoSign="info-sign",i.Inheritance="inheritance",i.InheritedGroup="inherited-group",i.InnerJoin="inner-join",i.Input="input",i.Insert="insert",i.Intelligence="intelligence",i.Intersection="intersection",i.IpAddress="ip-address",i.IssueClosed="issue-closed",i.IssueNew="issue-new",i.Issue="issue",i.Italic="italic",i.JoinTable="join-table",i.KeyBackspace="key-backspace",i.KeyCommand="key-command",i.KeyControl="key-control",i.KeyDelete="key-delete",i.KeyEnter="key-enter",i.KeyEscape="key-escape",i.KeyOption="key-option",i.KeyShift="key-shift",i.KeyTab="key-tab",i.Key="key",i.KnownVehicle="known-vehicle",i.LabTest="lab-test",i.Label="label",i.LayerOutline="layer-outline",i.Layer="layer",i.Layers="layers",i.LayoutAuto="layout-auto",i.LayoutBalloon="layout-balloon",i.LayoutBottomRowThreeTiles="layout-bottom-row-three-tiles",i.LayoutBottomRowTwoTiles="layout-bottom-row-two-tiles",i.LayoutCircle="layout-circle",i.LayoutGrid="layout-grid",i.LayoutGroupBy="layout-group-by",i.LayoutHierarchy="layout-hierarchy",i.LayoutLeftColumnThreeTiles="layout-left-column-three-tiles",i.LayoutLeftColumnTwoTiles="layout-left-column-two-tiles",i.LayoutLinear="layout-linear",i.LayoutRightColumnThreeTiles="layout-right-column-three-tiles",i.LayoutRightColumnTwoTiles="layout-right-column-two-tiles",i.LayoutSkewGrid="layout-skew-grid",i.LayoutSortedClusters="layout-sorted-clusters",i.LayoutThreeColumns="layout-three-columns",i.LayoutThreeRows="layout-three-rows",i.LayoutTopRowThreeTiles="layout-top-row-three-tiles",i.LayoutTopRowTwoTiles="layout-top-row-two-tiles",i.LayoutTwoColumns="layout-two-columns",i.LayoutTwoRows="layout-two-rows",i.Layout="layout",i.Learning="learning",i.LeftJoin="left-join",i.LengthenText="lengthen-text",i.LessThanOrEqualTo="less-than-or-equal-to",i.LessThan="less-than",i.Lifesaver="lifesaver",i.Lightbulb="lightbulb",i.Lightning="lightning",i.Link="link",i.LinkedSquares="linked-squares",i.ListColumns="list-columns",i.ListDetailView="list-detail-view",i.List="list",i.Locate="locate",i.Lock="lock",i.Locomotive="locomotive",i.LogIn="log-in",i.LogOut="log-out",i.LowVoltagePole="low-voltage-pole",i.Manual="manual",i.ManuallyEnteredData="manually-entered-data",i.ManyToMany="many-to-many",i.ManyToOne="many-to-one",i.MapCreate="map-create",i.MapMarker="map-marker",i.Map="map",i.Markdown="markdown",i.Maximize="maximize",i.Media="media",i.MenuClosed="menu-closed",i.MenuOpen="menu-open",i.Menu="menu",i.MergeColumns="merge-columns",i.MergeLinks="merge-links",i.Microphone="microphone",i.Minimize="minimize",i.Minus="minus",i.MobilePhone="mobile-phone",i.MobileVideo="mobile-video",i.ModalFilled="modal-filled",i.Modal="modal",i.Model="model",i.Moon="moon",i.More="more",i.Mountain="mountain",i.Move="move",i.Mugshot="mugshot",i.MultiSelect="multi-select",i.Music="music",i.Nest="nest",i.NewComment="new-comment",i.NewDrawing="new-drawing",i.NewGridItem="new-grid-item",i.NewLayer="new-layer",i.NewLayers="new-layers",i.NewLink="new-link",i.NewObject="new-object",i.NewPerson="new-person",i.NewPrescription="new-prescription",i.NewShield="new-shield",i.NewTextBox="new-text-box",i.Ninja="ninja",i.NotEqualTo="not-equal-to",i.NotificationsAdd="notifications-add",i.NotificationsSnooze="notifications-snooze",i.NotificationsUpdated="notifications-updated",i.Notifications="notifications",i.NumberedList="numbered-list",i.Numerical="numerical",i.ObjectView="object-view",i.Office="office",i.Offline="offline",i.OilField="oil-field",i.OneColumn="one-column",i.OneToMany="one-to-many",i.OneToOne="one-to-one",i.OpenApplication="open-application",i.Outdated="outdated",i.OuterJoin="outer-join",i.Output="output",i.Package="package",i.PageBreak="page-break",i.PageLayout="page-layout",i.PanelStats="panel-stats",i.PanelTable="panel-table",i.Panel="panel",i.Paperclip="paperclip",i.Paragraph="paragraph",i.PasteVariable="paste-variable",i.PathSearch="path-search",i.Path="path",i.Pause="pause",i.People="people",i.Percentage="percentage",i.Person="person",i.PhoneCall="phone-call",i.PhoneForward="phone-forward",i.PhoneSearch="phone-search",i.Phone="phone",i.PieChart="pie-chart",i.Pill="pill",i.Pin="pin",i.Pistol="pistol",i.PivotTable="pivot-table",i.Pivot="pivot",i.Play="play",i.Playbook="playbook",i.Plus="plus",i.PolygonFilter="polygon-filter",i.Popout="popout",i.Power="power",i.PredictiveAnalysis="predictive-analysis",i.Prescription="prescription",i.Presentation="presentation",i.Print="print",i.Projects="projects",i.Properties="properties",i.Property="property",i.PublishFunction="publish-function",i.Pulse="pulse",i.Rain="rain",i.Random="random",i.RangeRing="range-ring",i.Record="record",i.RectHeight="rect-height",i.RectWidth="rect-width",i.Rectangle="rectangle",i.Redo="redo",i.RefreshOff="refresh-off",i.Refresh="refresh",i.Regex="regex",i.RegressionChart="regression-chart",i.RemoveColumnLeft="remove-column-left",i.RemoveColumnRight="remove-column-right",i.RemoveColumn="remove-column",i.RemoveRowBottom="remove-row-bottom",i.RemoveRowTop="remove-row-top",i.Remove="remove",i.Repeat="repeat",i.Reset="reset",i.Resolve="resolve",i.Rig="rig",i.RightJoin="right-join",i.Ring="ring",i.RocketSlant="rocket-slant",i.Rocket="rocket",i.RootFolder="root-folder",i.RotateCcw="rotate-ccw",i.RotateCw="rotate-cw",i.RotateDocument="rotate-document",i.RotatePage="rotate-page",i.Route="route",i.RunHistory="run-history",i.Satellite="satellite",i.Saved="saved",i.ScatterPlot="scatter-plot",i.SearchAround="search-around",i.SearchTemplate="search-template",i.SearchText="search-text",i.Search="search",i.SegmentedControl="segmented-control",i.Select="select",i.SelectionBoxAdd="selection-box-add",i.SelectionBoxEdit="selection-box-edit",i.SelectionBoxRemove="selection-box-remove",i.SelectionBox="selection-box",i.Selection="selection",i.SendBackward="send-backward",i.SendMessage="send-message",i.SendToGraph="send-to-graph",i.SendToMap="send-to-map",i.SendTo="send-to",i.Sensor="sensor",i.SeriesAdd="series-add",i.SeriesConfiguration="series-configuration",i.SeriesDerived="series-derived",i.SeriesFiltered="series-filtered",i.SeriesSearch="series-search",i.ServerInstall="server-install",i.Server="server",i.Settings="settings",i.Shapes="shapes",i.Share="share",i.SharedFilter="shared-filter",i.Shield="shield",i.Ship="ship",i.Shop="shop",i.ShoppingCart="shopping-cart",i.ShortenText="shorten-text",i.SignalSearch="signal-search",i.SimCard="sim-card",i.Slash="slash",i.SmallCross="small-cross",i.SmallInfoSign="small-info-sign",i.SmallMinus="small-minus",i.SmallPlus="small-plus",i.SmallSquare="small-square",i.SmallTick="small-tick",i.Snowflake="snowflake",i.SoccerBall="soccer-ball",i.SocialMedia="social-media",i.SortAlphabeticalDesc="sort-alphabetical-desc",i.SortAlphabetical="sort-alphabetical",i.SortAsc="sort-asc",i.SortDesc="sort-desc",i.SortNumericalDesc="sort-numerical-desc",i.SortNumerical="sort-numerical",i.Sort="sort",i.SpellCheck="spell-check",i.Spin="spin",i.SplitColumns="split-columns",i.SportsStadium="sports-stadium",i.Square="square",i.StackedChart="stacked-chart",i.StadiumGeometry="stadium-geometry",i.StarEmpty="star-empty",i.Star="star",i.StepBackward="step-backward",i.StepChart="step-chart",i.StepForward="step-forward",i.Stop="stop",i.Stopwatch="stopwatch",i.Strikethrough="strikethrough",i.Style="style",i.Subscript="subscript",i.SubtractRightJoin="subtract-right-join",i.Superscript="superscript",i.SwapHorizontal="swap-horizontal",i.SwapVertical="swap-vertical",i.Sweep="sweep",i.Switch="switch",i.SymbolCircle="symbol-circle",i.SymbolCross="symbol-cross",i.SymbolDiamond="symbol-diamond",i.SymbolRectangle="symbol-rectangle",i.SymbolSquare="symbol-square",i.SymbolTriangleDown="symbol-triangle-down",i.SymbolTriangleUp="symbol-triangle-up",i.Syringe="syringe",i.TableSync="table-sync",i.TagAdd="tag-add",i.TagPromote="tag-promote",i.TagRefresh="tag-refresh",i.TagUndo="tag-undo",i.Tag="tag",i.Tags="tags",i.TakeAction="take-action",i.Tank="tank",i.Target="target",i.Taxi="taxi",i.Team="team",i.Temperature="temperature",i.TextHighlight="text-highlight",i.ThAdd="th-add",i.ThDerived="th-derived",i.ThDisconnect="th-disconnect",i.ThFiltered="th-filtered",i.ThListAdd="th-list-add",i.ThList="th-list",i.ThVirtualAdd="th-virtual-add",i.ThVirtual="th-virtual",i.Th="th",i.ThirdParty="third-party",i.ThumbsDown="thumbs-down",i.ThumbsUp="thumbs-up",i.TickCircle="tick-circle",i.Tick="tick",i.Time="time",i.TimelineAreaChart="timeline-area-chart",i.TimelineBarChart="timeline-bar-chart",i.TimelineEvents="timeline-events",i.TimelineLineChart="timeline-line-chart",i.Tint="tint",i.Torch="torch",i.Tractor="tractor",i.Train="train",i.Translate="translate",i.Trash="trash",i.Tree="tree",i.TrendingDown="trending-down",i.TrendingUp="trending-up",i.Trophy="trophy",i.Truck="truck",i.TwoColumns="two-columns",i.Unarchive="unarchive",i.Underline="underline",i.Undo="undo",i.UngroupObjects="ungroup-objects",i.UnknownVehicle="unknown-vehicle",i.Unlink="unlink",i.Unlock="unlock",i.Unpin="unpin",i.Unresolve="unresolve",i.Updated="updated",i.Upload="upload",i.User="user",i.VariableLayer="variable-layer",i.Variable="variable",i.Vector="vector",i.VerticalBarChartAsc="vertical-bar-chart-asc",i.VerticalBarChartDesc="vertical-bar-chart-desc",i.VerticalDistribution="vertical-distribution",i.VerticalInbetween="vertical-inbetween",i.Video="video",i.Virus="virus",i.VolumeDown="volume-down",i.VolumeOff="volume-off",i.VolumeUp="volume-up",i.Walk="walk",i.WarningSign="warning-sign",i.WaterfallChart="waterfall-chart",i.Waves="waves",i.WidgetButton="widget-button",i.WidgetFooter="widget-footer",i.WidgetHeader="widget-header",i.Widget="widget",i.Wind="wind",i.Won="won",i.WrapLines="wrap-lines",i.WrenchRedo="wrench-redo",i.WrenchSnooze="wrench-snooze",i.WrenchTime="wrench-time",i.Wrench="wrench",i.Yen="yen",i.ZoomIn="zoom-in",i.ZoomOut="zoom-out",i.ZoomToFit="zoom-to-fit"})(h||(h={}));h.AddApplication+"",h.AddChild+"",h.AddClip+"",h.AddColumnLeft+"",h.AddColumnRight+"",h.AddDerivedColumn+"",h.AddLocation+"",h.AddParent+"",h.AddRowBottom+"",h.AddRowTop+"",h.AddTile+"",h.AddToArtifact+"",h.AddToFolder+"",h.Add+"",h.AimpointsTarget+"",h.Airplane+"",h.AlignCenter+"",h.AlignJustify+"",h.AlignLeft+"",h.AlignRight+"",h.AlignmentBottom+"",h.AlignmentHorizontalCenter+"",h.AlignmentLeft+"",h.AlignmentRight+"",h.AlignmentTop+"",h.AlignmentVerticalCenter+"",h.Ammunition+"",h.Anchor+"",h.Annotation+"",h.Announcement+"",h.Antenna+"",h.AppHeader+"",h.Application+"",h.Applications+"",h.Archive+"",h.AreaOfInterest+"",h.ArrayBoolean+"",h.ArrayDate+"",h.ArrayFloatingPoint+"",h.ArrayNumeric+"",h.ArrayObject+"",h.ArrayString+"",h.ArrayTimestamp+"",h.Array+"",h.ArrowBottomLeft+"",h.ArrowBottomRight+"",h.ArrowDown+"",h.ArrowLeft+"",h.ArrowRight+"",h.ArrowTopLeft+"",h.ArrowTopRight+"",h.ArrowUp+"",h.ArrowsArc+"",h.ArrowsHorizontal+"",h.ArrowsVertical+"",h.Asterisk+"",h.At+"",h.AutomaticUpdates+"",h.Axle+"",h.Backlink+"",h.BackwardTen+"",h.Badge+"",h.BanCircle+"",h.BankAccount+"",h.Barcode+"",h.BinaryNumber+"",h.Blank+"",h.BlockPromote+"",h.BlockedPerson+"",h.Bold+"",h.Book+"",h.Bookmark+"",h.Box+"",h.BranchLocked+"",h.BranchUnlocked+"",h.Briefcase+"",h.BringData+"",h.BringForward+"",h.BritishPound+"",h.Bug+"",h.Buggy+"",h.Build+"",h.Bullseye+"",h.Calculator+"",h.Calendar+"",h.Camera+"",h.CaretDown+"",h.CaretLeft+"",h.CaretRight+"",h.CaretUp+"",h.CargoShip+"",h.CellTower+"",h.Changes+"",h.Chart+"",h.Chat+"",h.ChevronBackward+"",h.ChevronDown+"",h.ChevronForward+"",h.ChevronLeft+"",h.ChevronRight+"",h.ChevronUp+"",h.CircleArrowDown+"",h.CircleArrowLeft+"",h.CircleArrowRight+"",h.CircleArrowUp+"",h.CircleDashed+"",h.Circle+"",h.Citation+"",h.Clean+"",h.Clip+"",h.ClipboardFile+"",h.Clipboard+"",h.CloudDownload+"",h.CloudServer+"",h.CloudTick+"",h.CloudUpload+"",h.Cloud+"",h.CodeBlock+"",h.Code+"",h.Cog+"",h.CollapseAll+"",h.ColorFill+"",h.ColumnLayout+"",h.Comment+"",h.Comparison+"",h.Compass+"",h.Compressed+"",h.Confirm+"",h.ConsoleAlert+"",h.Console+"",h.Construction+"",h.Contrast+"",h.Control+"",h.CreditCard+"",h.Crop+"",h.CrossCircle+"",h.Cross+"",h.Crown+"",h.CrystalBall+"",h.CssStyle+"",h.CubeAdd+"",h.CubeCutout+"",h.CubeCutouts+"",h.CubeEdit+"",h.CubeRemove+"",h.Cube+"",h.Cubes+"",h.CurlyBraces+"",h.CurvedRangeChart+"",h.Cut+"",h.Cycle+"",h.Dashboard+"",h.DataCloud+"",h.DataConnection+"",h.DataLineage+"",h.DataSearch+"",h.DataSync+"",h.Database+"",h.DeleteClip+"",h.Delete+"",h.Delta+"",h.DeriveColumn+"",h.Descendant+"",h.Desktop+"",h.Detection+"",h.Diagnosis+"",h.DiagramTree+"",h.DirectionLeft+"",h.DirectionRight+"",h.Disable+"",h.Divide+"",h.DocumentCode+"",h.DocumentLocked+"",h.DocumentOpen+"",h.DocumentShare+"",h.Document+"",h.Dollar+"",h.Dot+"",h.DoubleCaretHorizontal+"",h.DoubleCaretVertical+"",h.DoubleChevronDown+"",h.DoubleChevronLeft+"",h.DoubleChevronRight+"",h.DoubleChevronUp+"",h.DoughnutChart+"",h.Download+"",h.DragHandleHorizontal+"",h.DragHandleVertical+"",h.Draw+"",h.DrawerLeftFilled+"",h.DrawerLeft+"",h.DrawerRightFilled+"",h.DrawerRight+"",h.DriveTime+"",h.DroneUav+"",h.Drone+"",h.Duplicate+"",h.Edit+"",h.Eject+"",h.Emoji+"",h.Endnote+"",h.Endorsed+"",h.Engagement+"",h.Envelope+"",h.Equals+"",h.Eraser+"",h.Error+"",h.Euro+"",h.Excavator+"",h.Exchange+"",h.ExcludeRow+"",h.ExpandAll+"",h.Explain+"",h.Export+"",h.EyeOff+"",h.EyeOn+"",h.EyeOpen+"",h.FastBackward+"",h.FastForward+"",h.FeedSubscribed+"",h.Feed+"",h.FighterJet+"",h.Film+"",h.FilterKeep+"",h.FilterList+"",h.FilterOpen+"",h.FilterRemove+"",h.FilterSortAsc+"",h.FilterSortDesc+"",h.Filter+"",h.Flag+"",h.Flame+"",h.Flash+"",h.FloatingPoint+"",h.FloppyDisk+"",h.FlowBranch+"",h.FlowEnd+"",h.FlowLinear+"",h.FlowReviewBranch+"",h.FlowReview+"",h.Flows+"",h.FolderClose+"",h.FolderNew+"",h.FolderOpen+"",h.FolderSharedOpen+"",h.FolderShared+"",h.Follower+"",h.Following+"",h.Font+"",h.ForkEnd+"",h.Fork+"",h.Form+"",h.ForwardTen+"",h.FrameToFrame+"",h.Fuel+"",h.FullCircle+"",h.FullStackedChart+"",h.Fullscreen+"",h.FunctionMinimal+"",h.Function+"",h.GanttChart+"",h.Generate+"",h.Geofence+"",h.Geolocation+"",h.Geosearch+"",h.Geotime+"",h.GiftBox+"",h.GitBranch+"",h.GitCommit+"",h.GitMerge+"",h.GitNewBranch+"",h.GitPull+"",h.GitPush+"",h.GitRebase+"",h.GitRepo+"",h.Glass+"",h.GlobeNetworkAdd+"",h.GlobeNetwork+"",h.Globe+"",h.GraphRemove+"",h.Graph+"",h.GreaterThanOrEqualTo+"",h.GreaterThan+"",h.GridView+"",h.Grid+"",h.GroupItem+"",h.GroupObjects+"",h.GroupedBarChart+"",h.HandDown+"",h.HandLeft+"",h.HandRight+"",h.HandUp+"",h.Hand+"",h.Hat+"",h.HeaderOne+"",h.HeaderThree+"",h.HeaderTwo+"",h.Header+"",h.Headset+"",h.HeartBroken+"",h.Heart+"",h.HeatGrid+"",h.Heatmap+"",h.Helicopter+"",h.Help+"",h.HelperManagement+"",h.Hexagon+"",h.HighPriority+"",h.HighVoltagePole+"",h.Highlight+"",h.History+"",h.Home+"",h.HorizontalBarChartAsc+"",h.HorizontalBarChartDesc+"",h.HorizontalBarChart+"",h.HorizontalDistribution+"",h.HorizontalInbetween+"",h.Hurricane+"",h.IdNumber+"",h.ImageRotateLeft+"",h.ImageRotateRight+"",h.Import+"",h.InboxFiltered+"",h.InboxGeo+"",h.InboxSearch+"",h.InboxUpdate+"",h.Inbox+"",h.InfoSign+"",h.Inheritance+"",h.InheritedGroup+"",h.InnerJoin+"",h.Input+"",h.Insert+"",h.Intelligence+"",h.Intersection+"",h.IpAddress+"",h.IssueClosed+"",h.IssueNew+"",h.Issue+"",h.Italic+"",h.JoinTable+"",h.KeyBackspace+"",h.KeyCommand+"",h.KeyControl+"",h.KeyDelete+"",h.KeyEnter+"",h.KeyEscape+"",h.KeyOption+"",h.KeyShift+"",h.KeyTab+"",h.Key+"",h.KnownVehicle+"",h.LabTest+"",h.Label+"",h.LayerOutline+"",h.Layer+"",h.Layers+"",h.LayoutAuto+"",h.LayoutBalloon+"",h.LayoutBottomRowThreeTiles+"",h.LayoutBottomRowTwoTiles+"",h.LayoutCircle+"",h.LayoutGrid+"",h.LayoutGroupBy+"",h.LayoutHierarchy+"",h.LayoutLeftColumnThreeTiles+"",h.LayoutLeftColumnTwoTiles+"",h.LayoutLinear+"",h.LayoutRightColumnThreeTiles+"",h.LayoutRightColumnTwoTiles+"",h.LayoutSkewGrid+"",h.LayoutSortedClusters+"",h.LayoutThreeColumns+"",h.LayoutThreeRows+"",h.LayoutTopRowThreeTiles+"",h.LayoutTopRowTwoTiles+"",h.LayoutTwoColumns+"",h.LayoutTwoRows+"",h.Layout+"",h.Learning+"",h.LeftJoin+"",h.LengthenText+"",h.LessThanOrEqualTo+"",h.LessThan+"",h.Lifesaver+"",h.Lightbulb+"",h.Lightning+"",h.Link+"",h.LinkedSquares+"",h.ListColumns+"",h.ListDetailView+"",h.List+"",h.Locate+"",h.Lock+"",h.Locomotive+"",h.LogIn+"",h.LogOut+"",h.LowVoltagePole+"",h.Manual+"",h.ManuallyEnteredData+"",h.ManyToMany+"",h.ManyToOne+"",h.MapCreate+"",h.MapMarker+"",h.Map+"",h.Markdown+"",h.Maximize+"",h.Media+"",h.MenuClosed+"",h.MenuOpen+"",h.Menu+"",h.MergeColumns+"",h.MergeLinks+"",h.Microphone+"",h.Minimize+"",h.Minus+"",h.MobilePhone+"",h.MobileVideo+"",h.ModalFilled+"",h.Modal+"",h.Model+"",h.Moon+"",h.More+"",h.Mountain+"",h.Move+"",h.Mugshot+"",h.MultiSelect+"",h.Music+"",h.Nest+"",h.NewComment+"",h.NewDrawing+"",h.NewGridItem+"",h.NewLayer+"",h.NewLayers+"",h.NewLink+"",h.NewObject+"",h.NewPerson+"",h.NewPrescription+"",h.NewShield+"",h.NewTextBox+"",h.Ninja+"",h.NotEqualTo+"",h.NotificationsAdd+"",h.NotificationsSnooze+"",h.NotificationsUpdated+"",h.Notifications+"",h.NumberedList+"",h.Numerical+"",h.ObjectView+"",h.Office+"",h.Offline+"",h.OilField+"",h.OneColumn+"",h.OneToMany+"",h.OneToOne+"",h.OpenApplication+"",h.Outdated+"",h.OuterJoin+"",h.Output+"",h.Package+"",h.PageBreak+"",h.PageLayout+"",h.PanelStats+"",h.PanelTable+"",h.Panel+"",h.Paperclip+"",h.Paragraph+"",h.PasteVariable+"",h.PathSearch+"",h.Path+"",h.Pause+"",h.People+"",h.Percentage+"",h.Person+"",h.PhoneCall+"",h.PhoneForward+"",h.PhoneSearch+"",h.Phone+"",h.PieChart+"",h.Pill+"",h.Pin+"",h.Pistol+"",h.PivotTable+"",h.Pivot+"",h.Play+"",h.Playbook+"",h.Plus+"",h.PolygonFilter+"",h.Popout+"",h.Power+"",h.PredictiveAnalysis+"",h.Prescription+"",h.Presentation+"",h.Print+"",h.Projects+"",h.Properties+"",h.Property+"",h.PublishFunction+"",h.Pulse+"",h.Rain+"",h.Random+"",h.RangeRing+"",h.Record+"",h.RectHeight+"",h.RectWidth+"",h.Rectangle+"",h.Redo+"",h.RefreshOff+"",h.Refresh+"",h.Regex+"",h.RegressionChart+"",h.RemoveColumnLeft+"",h.RemoveColumnRight+"",h.RemoveColumn+"",h.RemoveRowBottom+"",h.RemoveRowTop+"",h.Remove+"",h.Repeat+"",h.Reset+"",h.Resolve+"",h.Rig+"",h.RightJoin+"",h.Ring+"",h.RocketSlant+"",h.Rocket+"",h.RootFolder+"",h.RotateCcw+"",h.RotateCw+"",h.RotateDocument+"",h.RotatePage+"",h.Route+"",h.RunHistory+"",h.Satellite+"",h.Saved+"",h.ScatterPlot+"",h.SearchAround+"",h.SearchTemplate+"",h.SearchText+"",h.Search+"",h.SegmentedControl+"",h.Select+"",h.SelectionBoxAdd+"",h.SelectionBoxEdit+"",h.SelectionBoxRemove+"",h.SelectionBox+"",h.Selection+"",h.SendBackward+"",h.SendMessage+"",h.SendToGraph+"",h.SendToMap+"",h.SendTo+"",h.Sensor+"",h.SeriesAdd+"",h.SeriesConfiguration+"",h.SeriesDerived+"",h.SeriesFiltered+"",h.SeriesSearch+"",h.ServerInstall+"",h.Server+"",h.Settings+"",h.Shapes+"",h.Share+"",h.SharedFilter+"",h.Shield+"",h.Ship+"",h.Shop+"",h.ShoppingCart+"",h.ShortenText+"",h.SignalSearch+"",h.SimCard+"",h.Slash+"",h.SmallCross+"",h.SmallInfoSign+"",h.SmallMinus+"",h.SmallPlus+"",h.SmallSquare+"",h.SmallTick+"",h.Snowflake+"",h.SoccerBall+"",h.SocialMedia+"",h.SortAlphabeticalDesc+"",h.SortAlphabetical+"",h.SortAsc+"",h.SortDesc+"",h.SortNumericalDesc+"",h.SortNumerical+"",h.Sort+"",h.SpellCheck+"",h.Spin+"",h.SplitColumns+"",h.SportsStadium+"",h.Square+"",h.StackedChart+"",h.StadiumGeometry+"",h.StarEmpty+"",h.Star+"",h.StepBackward+"",h.StepChart+"",h.StepForward+"",h.Stop+"",h.Stopwatch+"",h.Strikethrough+"",h.Style+"",h.Subscript+"",h.SubtractRightJoin+"",h.Superscript+"",h.SwapHorizontal+"",h.SwapVertical+"",h.Sweep+"",h.Switch+"",h.SymbolCircle+"",h.SymbolCross+"",h.SymbolDiamond+"",h.SymbolRectangle+"",h.SymbolSquare+"",h.SymbolTriangleDown+"",h.SymbolTriangleUp+"",h.Syringe+"",h.TableSync+"",h.TagAdd+"",h.TagPromote+"",h.TagRefresh+"",h.TagUndo+"",h.Tag+"",h.Tags+"",h.TakeAction+"",h.Tank+"",h.Target+"",h.Taxi+"",h.Team+"",h.Temperature+"",h.TextHighlight+"",h.ThAdd+"",h.ThDerived+"",h.ThDisconnect+"",h.ThFiltered+"",h.ThListAdd+"",h.ThList+"",h.ThVirtualAdd+"",h.ThVirtual+"",h.Th+"",h.ThirdParty+"",h.ThumbsDown+"",h.ThumbsUp+"",h.TickCircle+"",h.Tick+"",h.Time+"",h.TimelineAreaChart+"",h.TimelineBarChart+"",h.TimelineEvents+"",h.TimelineLineChart+"",h.Tint+"",h.Torch+"",h.Tractor+"",h.Train+"",h.Translate+"",h.Trash+"",h.Tree+"",h.TrendingDown+"",h.TrendingUp+"",h.Trophy+"",h.Truck+"",h.TwoColumns+"",h.Unarchive+"",h.Underline+"",h.Undo+"",h.UngroupObjects+"",h.UnknownVehicle+"",h.Unlink+"",h.Unlock+"",h.Unpin+"",h.Unresolve+"",h.Updated+"",h.Upload+"",h.User+"",h.VariableLayer+"",h.Variable+"",h.Vector+"",h.VerticalBarChartAsc+"",h.VerticalBarChartDesc+"",h.VerticalDistribution+"",h.VerticalInbetween+"",h.Video+"",h.Virus+"",h.VolumeDown+"",h.VolumeOff+"",h.VolumeUp+"",h.Walk+"",h.WarningSign+"",h.WaterfallChart+"",h.Waves+"",h.WidgetButton+"",h.WidgetFooter+"",h.WidgetHeader+"",h.Widget+"",h.Wind+"",h.Won+"",h.WrapLines+"",h.WrenchRedo+"",h.WrenchSnooze+"",h.WrenchTime+"",h.Wrench+"",h.Yen+"",h.ZoomIn+"",h.ZoomOut+"",h.ZoomToFit+"";const Q0={},ev={};for(const i of Object.values(h))Q0[XS(i)]=i,ev[YS(i).toUpperCase()]=i;const tv={...Q0,...ev},KS=new Set(Object.values(tv));function ZS(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}async function JS(i,e){const t=ZS("development")&&typeof performance<"u";let a;if(t&&(a=performance.now(),console.info(`Started '${i}'...`)),await e(),t){const s=Math.round(performance.now()-a);console.info(`Finished '${i}' in ${s}ms`)}}async function QS(i){const{loader:e=Cs.defaultLoader}=i;return typeof e=="function"?e:e==="all"?(await Tg(async()=>{const{allPathsLoader:t}=await import("./allPathsLoader-BVpPCbrR.js");return{allPathsLoader:t}},[],import.meta.url)).allPathsLoader:(await Tg(async()=>{const{splitPathsBySizeLoader:t}=await import("./splitPathsBySizeLoader-SazJUnmj.js");return{splitPathsBySizeLoader:t}},[],import.meta.url)).splitPathsBySizeLoader}class Do{constructor(){_t(this,"defaultLoader","split-by-size");_t(this,"loadedIconPaths16",new Map);_t(this,"loadedIconPaths20",new Map)}static setLoaderOptions(e){e.loader!==void 0&&(Cs.defaultLoader=e.loader)}static async load(e,t,a){Array.isArray(e)||(e=[e]),await Promise.all(e.map(s=>this.loadImpl(s,t,a)))}static async loadAll(e){const t=Object.values(tv);JS("[Blueprint] loading all icons",async()=>{await Promise.all([this.load(t,un.STANDARD,e),this.load(t,un.LARGE,e)])})}static getPaths(e,t){return this.isValidIconName(e)?(t<un.LARGE?Cs.loadedIconPaths16:Cs.loadedIconPaths20).get(e):void 0}static async loadImpl(e,t,a={}){if(!this.isValidIconName(e)){console.error(`[Blueprint] Unknown icon '${e}'`);return}const s=t<un.LARGE?Cs.loadedIconPaths16:Cs.loadedIconPaths20;if(s.has(e))return;const l=await QS(a);try{const u=t<un.LARGE?un.STANDARD:un.LARGE,d=await l(e,u);s.set(e,d)}catch(u){console.error(`[Blueprint] Unable to load ${t}px icon '${e}'`,u)}}static isValidIconName(e){return KS.has(e)}}const Cs=new Do,ey="bp6",wg=`${ey}-icon`,Ag=new Map;function ty(i){const e=Ag.get(i)??0;return Ag.set(i,e+1),`${i}-${e}`}const jo=Pe.forwardRef((i,e)=>{const{children:t,className:a,color:s,htmlTitle:l,iconName:u,size:d=un.STANDARD,svgProps:m,tagName:p="span",title:v,...x}=i,M=d>=un.LARGE?un.LARGE:un.STANDARD,T=`0 0 ${M} ${M}`,b=ty("iconTitle"),y={fill:s,height:d,role:"img",viewBox:T,width:d,...m};return p===null?ee.jsxs("svg",{"aria-labelledby":v?b:void 0,"data-icon":u,ref:e,...y,...x,className:Gn(a,m==null?void 0:m.className),children:[v&&ee.jsx("title",{id:b,children:v}),t]}):Pe.createElement(p,{"aria-hidden":v?void 0:!0,...x,className:Gn(wg,`${wg}-${u}`,a),ref:e,title:l},ee.jsxs("svg",{"data-icon":u,...y,className:m==null?void 0:m.className,children:[v&&ee.jsx("title",{children:v}),t]}))});jo.displayName="Blueprint6.SVGIconContainer";const ny=["M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33"],iy=["M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63"],nv=Pe.forwardRef((i,e)=>{const a=(i.size??un.STANDARD)>=un.LARGE?iy:ny;return ee.jsx(jo,{iconName:"caret-down",ref:e,...i,children:a.map((s,l)=>ee.jsx("path",{d:s,fillRule:"evenodd"},l))})});nv.displayName="Blueprint6.Icon.CaretDownIcon";const ry=["M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7m6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9"],ay=["M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1m10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1"],iv=Pe.forwardRef((i,e)=>{const a=(i.size??un.STANDARD)>=un.LARGE?ay:ry;return ee.jsx(jo,{iconName:"double-caret-vertical",ref:e,...i,children:a.map((s,l)=>ee.jsx("path",{d:s,fillRule:"evenodd"},l))})});iv.displayName="Blueprint6.Icon.DoubleCaretVerticalIcon";const sy=["m9.41 8 2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],oy=["m11.41 10 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],rv=Pe.forwardRef((i,e)=>{const a=(i.size??un.STANDARD)>=un.LARGE?oy:sy;return ee.jsx(jo,{iconName:"small-cross",ref:e,...i,children:a.map((s,l)=>ee.jsx("path",{d:s,fillRule:"evenodd"},l))})});rv.displayName="Blueprint6.Icon.SmallCrossIcon";const Go=Pe.forwardRef((i,e)=>{const{autoLoad:t=!0,className:a,color:s,icon:l,intent:u,tagName:d="span",svgProps:m,title:p,htmlTitle:v,...x}=i,_=i.size??un.STANDARD,[M,T]=Pe.useState(()=>typeof l=="string"?Do.getPaths(l,_):void 0);if(Pe.useEffect(()=>{let b=!1;if(typeof l=="string"){const y=Do.getPaths(l,_);y!==void 0?T(y):t?Do.load(l,_).then(()=>{b||T(Do.getPaths(l,_))}).catch(S=>{console.error(`[Blueprint] Icon '${l}' (${_}px) could not be loaded.`,S)}):console.error(`[Blueprint] Icon '${l}' (${_}px) is not loaded yet and autoLoad={false}, did you call Icons.load('${l}', ${_})?`)}return()=>{b=!0}},[t,l,_]),l==null||typeof l=="boolean")return null;if(typeof l!="string"){if(Pe.isValidElement(l)){const b=Gn(l.props.className,a,Ki(u));if(PS(l)){const y={...Ds(x),className:b},S=l.props.size??i.size;S!=null&&(y.size=S);const D=l.props.color??s;return D!=null&&(y.color=D),Pe.cloneElement(l,y)}return Pe.cloneElement(l,{className:b})}return l}if(M==null){const b=_===un.STANDARD?mS:_===un.LARGE?gS:void 0;return Pe.createElement(d||"span",{"aria-hidden":p?void 0:!0,...Ds(x),className:Gn(hh,b,vS(l),Ki(u),a),"data-icon":l,ref:e,title:v})}else{const b=M.map((y,S)=>ee.jsx("path",{d:y,fillRule:"evenodd"},S));return ee.jsx(jo,{children:b,className:Gn(Ki(u),a),color:s,htmlTitle:v,iconName:l,ref:e,size:_,svgProps:m,tagName:d,title:p,...Ds(x)})}});Go.displayName=`${kn}.Icon`;var Oa;(function(i){i[i.SMALL=20]="SMALL",i[i.STANDARD=50]="STANDARD",i[i.LARGE=100]="LARGE"})(Oa||(Oa={}));const ra=45,Cg=`M 50,50 m 0,-${ra} a ${ra},${ra} 0 1 1 0,${ra*2} a ${ra},${ra} 0 1 1 0,-${ra*2}`,Mo=280,ly=10,cy=4,uy=16,av=i=>{const{className:e="",intent:t,value:a,tagName:s="div",size:l,...u}=i;zS(()=>{const x=l!=null,_=e.indexOf(Uc)>=0||e.indexOf(Fs)>=0;x&&_&&console.warn(CS)},[e,l]);const d=dy(l,e),m=Math.min(uy,cy*Oa.LARGE/d),p=Mo-Mo*(a==null?.25:mh(a,0,1)),v=Gn(Yc,Ki(t),{[fS]:a!=null},e);return Pe.createElement(s,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a===void 0?void 0:a*100,className:v,role:"progressbar",...u},Pe.createElement(s,{className:uS},ee.jsxs("svg",{width:d,height:d,strokeWidth:m.toFixed(2),viewBox:fy(m),children:[ee.jsx("path",{className:hS,d:Cg}),ee.jsx("path",{className:dS,d:Cg,pathLength:Mo,strokeDasharray:`${Mo} ${Mo}`,strokeDashoffset:p})]})))};av.displayName=`${kn}.Spinner`;const dy=(i,e)=>i==null?e.indexOf(Uc)>=0?Oa.SMALL:e.indexOf(Fs)>=0?Oa.LARGE:Oa.STANDARD:Math.max(ly,i),fy=i=>{const e=ra+i/2,t=(50-e).toFixed(2),a=(e*2).toFixed(2);return`${t} ${t} ${a} ${a}`},hy=xS()?Pe.useLayoutEffect:Pe.useEffect,_h=Pe.forwardRef(({children:i,tagName:e="div",title:t,className:a,ellipsize:s=!1,...l},u)=>{const d=Pe.useRef(),m=Pe.useMemo(()=>gh(d,u),[u]),[p,v]=Pe.useState(""),[x,_]=Pe.useState();return hy(()=>{var M;((M=d.current)==null?void 0:M.textContent)!=null&&(_(s&&d.current.scrollWidth>d.current.clientWidth),v(d.current.textContent))},[d,i,s]),Pe.createElement(e,{...l,className:Gn({[Zx]:s},a),ref:m,title:t??(x?p:void 0)},i)});_h.displayName=`${kn}.Text`;const xi=Pe.forwardRef((i,e)=>{const t=sv(i,e);return ee.jsx("button",{type:"button",...Ds(i),...t,children:ov(i)})});xi.displayName=`${kn}.Button`;const py=Pe.forwardRef((i,e)=>{const{href:t}=i,a=sv(i,e,{defaultTabIndex:0,disabledTabIndex:-1});return ee.jsx("a",{role:"button",...Ds(i),...a,"aria-disabled":a.disabled,href:a.disabled?void 0:t,children:ov(i)})});py.displayName=`${kn}.AnchorButton`;function sv(i,e,t){const{alignText:a,fill:s,large:l,loading:u=!1,minimal:d,outlined:m,size:p="medium",small:v,variant:x="solid"}=i,_=i.disabled||u,[M,T]=Z0(!_,i,e,t),b=Gn($c,{[dh]:M,[Xc]:_,[Ho]:s,[jx]:u},ph(a),Ki(i.intent),qc(p,{large:l,small:v}),Y0(x,{minimal:d,outlined:m}),i.className);return{...T,className:b,disabled:_}}function ov(i){const{children:e,ellipsizeText:t,endIcon:a,icon:s,loading:l,rightIcon:u,text:d,textClassName:m}=i,p=!Fc(d)||!Fc(e);return ee.jsxs(ee.Fragment,{children:[l&&ee.jsx(av,{className:Qx,size:Oa.SMALL}),ee.jsx(Go,{icon:s}),p&&ee.jsxs(_h,{className:Gn(eS,m),ellipsize:t,tagName:"span",children:[d,e]}),ee.jsx(Go,{icon:a??u})]})}const Tc=Pe.forwardRef((i,e)=>{const{alignText:t,className:a,fill:s,minimal:l,outlined:u,large:d,size:m="medium",variant:p="solid",vertical:v,...x}=i,_=Gn(Jx,{[Ho]:s,[V0]:v},ph(t),qc(m,{large:d}),Y0(p,{minimal:l,outlined:u}),a);return ee.jsx("div",{...x,ref:e,className:_,children:i.children})});Tc.displayName=`${kn}.ButtonGroup`;const jc=Pe.forwardRef((i,e)=>{const{alignIndicator:t,children:a,className:s,indicatorChildren:l,inline:u,inputRef:d,label:m,labelElement:p,large:v,size:x="medium",style:_,type:M,typeClassName:T,tagName:b="label",...y}=i,S=Gn(fh,T,{[Xc]:y.disabled,[Yx]:u},ph(t),qc(x,{large:v}),s);return Pe.createElement(b,{className:S,ref:e,style:_},ee.jsx("input",{className:nS,...y,ref:d,type:M}),ee.jsx("span",{className:G0,children:l}),m,p,a)});jc.displayName=`${kn}.Control`;const Rs=Pe.forwardRef((i,e)=>{const{innerLabelChecked:t,innerLabel:a,...s}=i,l=a||t?[ee.jsx("div",{className:vg,children:ee.jsx("div",{className:_g,children:t||a})},"checked"),ee.jsx("div",{className:vg,children:ee.jsx("div",{className:_g,children:a})},"unchecked")]:null;return ee.jsx(jc,{...s,indicatorChildren:l,ref:e,type:"checkbox",typeClassName:B0})});Rs.displayName=`${kn}.Switch`;const my=Pe.forwardRef((i,e)=>ee.jsx(jc,{...i,ref:e,type:"radio",typeClassName:rS}));my.displayName=`${kn}.Radio`;const gy=Pe.forwardRef((i,e)=>{const{defaultIndeterminate:t,indeterminate:a,onChange:s,...l}=i,[u,d]=Pe.useState(a||t||!1),m=Pe.useRef(null),p=gh(i.inputRef,m),v=Pe.useCallback(x=>{a===void 0&&d(x.target.indeterminate),s==null||s(x)},[a,s]);return Pe.useEffect(()=>{a!==void 0&&d(a)},[a]),Pe.useEffect(()=>{m.current!=null&&(m.current.indeterminate=u)},[m,u]),ee.jsx(jc,{...l,inputRef:p,onChange:v,ref:e,type:"checkbox",typeClassName:iS})});gy.displayName=`${kn}.Checkbox`;const No=Pe.forwardRef((i,e)=>{const{className:t,children:a,disabled:s,fill:l,iconName:u="double-caret-vertical",iconProps:d,large:m,minimal:p,options:v=[],value:x,..._}=i,M=Gn(tS,{[Xc]:s,[Ho]:l,[Fs]:m,[Nc]:p},t),T="Open dropdown",b=u==="double-caret-vertical"?ee.jsx(iv,{title:T,...d}):ee.jsx(nv,{title:T,...d}),y=v.map(S=>{const D=typeof S=="object"?S:{value:S};return Pe.createElement("option",{...D,key:D.value,children:D.label||D.value})});return ee.jsxs("div",{className:M,children:[ee.jsxs("select",{disabled:s,ref:e,value:x,..._,multiple:!1,children:[y,a]}),b]})});No.displayName=`${kn}.HTMLSelect`;const Rg={START:"start",END:"end"},lv={PUSH:"push",NONE:"none"};function wc(i){return`${(i*100).toFixed(2)}%`}function bg(i,e,t,a){const s=e<t?1:-1;for(let l=e;l!==t+s;l+=s)i[l]=a}function vy(i,e){if(i.length===0)return;let t=i[0],a=e(t);for(let s=1;s<i.length;s++){const l=i[s],u=e(l);u<a&&(t=l,a=u)}return t}const _y=["max","min","stepSize","tickSize","value"];class cv extends vh{constructor(){super(...arguments);_t(this,"state",{isMoving:!1});_t(this,"handleElement",null);_t(this,"refHandlers",{handle:t=>this.handleElement=t});_t(this,"beginHandleMovement",t=>{document.addEventListener("mousemove",this.handleHandleMovement),document.addEventListener("mouseup",this.endHandleMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.mouseEventClientOffset(t)))});_t(this,"beginHandleTouchMovement",t=>{document.addEventListener("touchmove",this.handleHandleTouchMovement),document.addEventListener("touchend",this.endHandleTouchMovement),document.addEventListener("touchcancel",this.endHandleTouchMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.touchEventClientOffset(t)))});_t(this,"getStyleProperties",()=>{if(this.handleElement==null)return{};const{min:t=0,tickSizeRatio:a,value:s,vertical:l}=this.props,{handleMidpoint:u}=this.getHandleMidpointAndOffset(this.handleElement,!0),d=(s-t)*a,m=`calc(${wc(d)} - ${u}px)`;return l?{bottom:m}:{left:m}});_t(this,"endHandleMovement",t=>{this.handleMoveEndedAt(this.mouseEventClientOffset(t))});_t(this,"endHandleTouchMovement",t=>{this.handleMoveEndedAt(this.touchEventClientOffset(t))});_t(this,"handleMoveEndedAt",t=>{var s,l;this.removeDocumentEventListeners(),this.setState({isMoving:!1});const a=this.changeValue(this.clientToValue(t));(l=(s=this.props).onRelease)==null||l.call(s,a)});_t(this,"handleHandleMovement",t=>{this.handleMovedTo(this.mouseEventClientOffset(t))});_t(this,"handleHandleTouchMovement",t=>{this.handleMovedTo(this.touchEventClientOffset(t))});_t(this,"handleMovedTo",t=>{this.state.isMoving&&!this.props.disabled&&this.changeValue(this.clientToValue(t))});_t(this,"handleKeyDown",t=>{const{stepSize:a,value:s}=this.props,l=NS(t,["ArrowLeft","ArrowDown"],["ArrowRight","ArrowUp"]);l!==void 0&&(this.changeValue(s+a*l),t.preventDefault())});_t(this,"handleKeyUp",t=>{var a,s;DS(t)&&((s=(a=this.props).onRelease)==null||s.call(a,this.props.value))})}componentDidMount(){this.forceUpdate()}render(){const{className:t,disabled:a,label:s,min:l,max:u,value:d,vertical:m,htmlProps:p}=this.props,{isMoving:v}=this.state;return ee.jsx("span",{role:"slider",tabIndex:0,...p,className:Gn(W0,{[dh]:v},t),onKeyDown:a?void 0:this.handleKeyDown,onKeyUp:a?void 0:this.handleKeyUp,onMouseDown:a?void 0:this.beginHandleMovement,onTouchStart:a?void 0:this.beginHandleTouchMovement,ref:this.refHandlers.handle,style:this.getStyleProperties(),"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":d,"aria-disabled":a,"aria-orientation":m?"vertical":"horizontal",children:s==null?null:ee.jsx("span",{className:X0,children:s})})}componentWillUnmount(){this.removeDocumentEventListeners()}clientToValue(t){const{stepSize:a,tickSize:s,value:l,vertical:u}=this.props;if(this.handleElement==null)return l;const d=u?window.innerHeight-t:t,m=this.getHandleElementCenterPixel(this.handleElement),p=d-m;return isNaN(p)?l:l+Math.round(p/(s*a))*a}mouseEventClientOffset(t){return this.props.vertical?t.clientY:t.clientX}touchEventClientOffset(t){const a=t.changedTouches[0];return this.props.vertical?a.clientY:a.clientX}validateProps(t){for(const a of _y)if(typeof t[a]!="number")throw new Error(`[Blueprint] <Handle> requires number value for ${a} prop`)}changeValue(t,a=this.props.onChange){return t=this.clamp(t),!isNaN(t)&&this.props.value!==t&&(a==null||a(t)),t}clamp(t){return mh(t,this.props.min,this.props.max)}getHandleElementCenterPixel(t){const{handleMidpoint:a,handleOffset:s}=this.getHandleMidpointAndOffset(t);return s+a}getHandleMidpointAndOffset(t,a=!1){if(t==null)return{handleMidpoint:0,handleOffset:0};const{vertical:s}=this.props,l=t.getBoundingClientRect();l.width=t.offsetWidth,l.height=t.offsetHeight;const u=s?a?"width":"height":a?"height":"width",d=s?window.innerHeight-(l.top+l[u]):l.left;return{handleMidpoint:l[u]/2,handleOffset:d}}removeDocumentEventListeners(){document.removeEventListener("mousemove",this.handleHandleMovement),document.removeEventListener("mouseup",this.endHandleMovement),document.removeEventListener("touchmove",this.handleHandleTouchMovement),document.removeEventListener("touchend",this.endHandleTouchMovement),document.removeEventListener("touchcancel",this.endHandleTouchMovement)}}_t(cv,"displayName",`${kn}.SliderHandle`);const Os=()=>null;Os.displayName=`${kn}.MultiSliderHandle`;const aa=class aa extends vh{constructor(){super(...arguments);_t(this,"state",{labelPrecision:xy(this.props),tickSize:0,tickSizeRatio:0});_t(this,"handleElements",[]);_t(this,"trackElement",null);_t(this,"addHandleRef",t=>{t!=null&&this.handleElements.push(t)});_t(this,"maybeHandleTrackClick",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.mouseEventClientOffset(t));a&&a.beginHandleMovement(t)}});_t(this,"maybeHandleTrackTouch",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.touchEventClientOffset(t));a&&a.beginHandleTouchMovement(t)}});_t(this,"canHandleTrackEvent",t=>{const a=t.target;return!this.props.disabled&&a.closest(`.${W0}`)==null});_t(this,"getHandlerForIndex",(t,a)=>s=>{a==null||a(this.getNewHandleValues(s,t))});_t(this,"handleChange",t=>{var l,u;const a=Aa(this.props),s=a.map(d=>d.value);_S(t,s)||((u=(l=this.props).onChange)==null||u.call(l,t),a.forEach((d,m)=>{var p;s[m]!==t[m]&&((p=d.onChange)==null||p.call(d,t[m]))}))});_t(this,"handleRelease",t=>{var s,l;const a=Aa(this.props);(l=(s=this.props).onRelease)==null||l.call(s,t),a.forEach((u,d)=>{var m;(m=u.onRelease)==null||m.call(u,t[d])})})}static getDerivedStateFromProps(t){return{labelPrecision:aa.getLabelPrecision(t)}}static getLabelPrecision({labelPrecision:t,stepSize:a}){return t??j0(a)}getSnapshotBeforeUpdate(t){const a=Aa(t);return Aa(this.props).length!==a.length&&(this.handleElements=[]),null}render(){const t=Gn(Ia,{[Xc]:this.props.disabled,[`${Ia}-unlabeled`]:this.props.labelRenderer===!1,[V0]:this.props.vertical},this.props.className);return ee.jsxs("div",{className:t,onMouseDown:this.maybeHandleTrackClick,onTouchStart:this.maybeHandleTrackTouch,children:[ee.jsx("div",{className:sS,ref:a=>this.trackElement=a,children:this.renderTracks()}),ee.jsx("div",{className:aS,children:this.renderLabels()}),this.renderHandles()]})}componentDidMount(){this.updateTickSize()}componentDidUpdate(t,a){super.componentDidUpdate(t,a),(t.min!==this.props.min||t.max!==this.props.max||t.vertical!==this.props.vertical)&&this.updateTickSize()}validateProps(t){if(t.stepSize<=0)throw new Error(yS);if(t.labelStepSize!==void 0&&t.labelValues!==void 0)throw new Error(AS);if(t.labelStepSize!==void 0&&t.labelStepSize<=0)throw new Error(MS);if(t.min!==void 0&&!isFinite(t.min))throw new Error(ES);if(t.max!==void 0&&!isFinite(t.max))throw new Error(TS);let a=!1;if(Pe.Children.forEach(t.children,s=>{s&&!K0(s,Os)&&(a=!0)}),a)throw new Error(wS)}formatLabel(t,a=!1){const{labelRenderer:s}=this.props;if(s!==!1)return q0(s)?s(t,{isHandleTooltip:a}):t.toFixed(this.state.labelPrecision)}renderLabels(){if(this.props.labelRenderer===!1)return null;const t=this.getLabelValues(),{max:a,min:s}=this.props;return t.map((u,d)=>{const m=wc((u-s)/(a-s)),p=this.props.vertical?{bottom:m}:{left:m};return ee.jsx("div",{className:X0,style:p,children:this.formatLabel(u)},d)})}renderTracks(){const t=uv(this.props);t.push({value:this.props.max});let a={value:this.props.min};const s=[];for(let l=0;l<t.length;l++){const u=t[l];s.push(this.renderTrackFill(l,a,u)),a=u}return s}renderTrackFill(t,a,s){const[l,u]=[this.getOffsetRatio(a.value),this.getOffsetRatio(s.value)].sort((_,M)=>_-M),d=wc(l),m=wc(1-u),v={...this.props.vertical?{bottom:d,left:0,top:m}:{left:d,right:m,top:0},...a.trackStyleAfter||s.trackStyleBefore||{}},x=Gn(oS,Ki(this.getTrackIntent(a,s)));return ee.jsx("div",{className:x,style:v},`track-${t}`)}renderHandles(){const{disabled:t,max:a,min:s,stepSize:l,vertical:u}=this.props,d=Aa(this.props);return d.length===0?null:d.map(({value:m,type:p,className:v,htmlProps:x},_)=>ee.jsx(cv,{htmlProps:x,className:Gn({[lS]:p===Rg.START,[cS]:p===Rg.END},v),disabled:t,label:this.formatLabel(m,!0),max:a,min:s,onChange:this.getHandlerForIndex(_,this.handleChange),onRelease:this.getHandlerForIndex(_,this.handleRelease),ref:this.addHandleRef,stepSize:l,tickSize:this.state.tickSize,tickSizeRatio:this.state.tickSizeRatio,value:m,vertical:u},`${_}-${d.length}`))}nearestHandleForValue(t,a){return vy(t,s=>{const l=a(s),u=s.clientToValue(l),d=s.props.value;return Math.abs(u-d)})}getNewHandleValues(t,a){const l=Aa(this.props).map(p=>p.value),u=l.slice();u[a]=t,u.sort((p,v)=>p-v);const d=u.indexOf(t),m=this.findFirstLockedHandleIndex(a,d);if(m===-1)bg(u,a,d,t);else{const p=l[m];return bg(l,a,m,p),l}return u}findFirstLockedHandleIndex(t,a){const s=t<a?1:-1,l=Aa(this.props);for(let u=t+s;u!==a+s;u+=s)if(l[u].interactionKind!==lv.PUSH)return u;return-1}getLabelValues(){const{labelStepSize:t,labelValues:a,min:s,max:l}=this.props;let u=[];if(a!==void 0)u=a.slice();else for(let d=s;d<l||RS(d,l);d+=t??1)u.push(d);return u}getOffsetRatio(t){return mh((t-this.props.min)*this.state.tickSizeRatio,0,1)}getTrackIntent(t,a){return this.props.showTrackFill?t.intentAfter!==void 0?t.intentAfter:a!==void 0&&a.intentBefore!==void 0?a.intentBefore:this.props.defaultTrackIntent:la.NONE}updateTickSize(){if(this.trackElement!=null){const t=this.props.vertical?this.trackElement.clientHeight:this.trackElement.clientWidth,a=1/(this.props.max-this.props.min),s=t*a;this.setState({tickSize:s,tickSizeRatio:a})}}};_t(aa,"defaultSliderProps",{disabled:!1,max:10,min:0,showTrackFill:!0,stepSize:1,vertical:!1}),_t(aa,"defaultProps",{...aa.defaultSliderProps,defaultTrackIntent:la.NONE}),_t(aa,"displayName",`${kn}.MultiSlider`),_t(aa,"Handle",Os);let Bo=aa;function xy({labelPrecision:i,stepSize:e=Bo.defaultSliderProps.stepSize}){return i??j0(e)}function Aa(i){return uv(i,e=>e.interactionKind!==lv.NONE)}function uv({children:i},e=()=>!0){const t=Pe.Children.map(i,s=>K0(s,Os)&&e(s.props)?s.props:null);let a=t??[];return a=a.filter(s=>s!==null),a.sort((s,l)=>s.value-l.value),a}class ko extends vh{render(){const{initialValue:e,intent:t,value:a,onChange:s,onRelease:l,handleHtmlProps:u,...d}=this.props;return ee.jsxs(Bo,{...d,children:[ee.jsx(Os,{value:a,intentAfter:a<e?t:void 0,intentBefore:a>e?t:void 0,onChange:s,onRelease:l,htmlProps:u}),ee.jsx(Os,{value:e,interactionKind:"none"})]})}}_t(ko,"defaultProps",{...Bo.defaultSliderProps,initialValue:0,intent:la.PRIMARY,value:0}),_t(ko,"displayName",`${kn}.Slider`);const dv=i=>{const{className:e,large:t,onRemove:a,size:s,tabIndex:l}=i,u=t||s==="large"||(e==null?void 0:e.includes(Fs)),d=Pe.useCallback(m=>{a==null||a(m,i)},[a,i]);return ee.jsx("button",{"aria-label":"Remove tag",type:"button",className:pS,onClick:d,tabIndex:l,children:ee.jsx(rv,{size:u?un.LARGE:un.STANDARD})})};dv.displayName=`${kn}.TagRemoveButton`;const xf=Pe.forwardRef((i,e)=>{const{children:t,className:a,endIcon:s,fill:l=!1,icon:u,intent:d,interactive:m,large:p=!1,minimal:v=!1,multiline:x,onRemove:_,rightIcon:M,round:T=!1,size:b="medium",tabIndex:y=0,htmlTitle:S,...D}=i,z=q0(_),C=m??D.onClick!=null,[L,P]=Z0(C,i,e,{defaultTabIndex:0,disabledTabIndex:void 0}),I=Gn($0,Ki(d),qc(b,{large:p}),{[dh]:L,[Ho]:l,[qx]:C,[Nc]:v,[Kx]:T},a);return ee.jsxs("span",{...Ds(D),...P,className:I,role:C?"button":void 0,children:[ee.jsx(Go,{icon:u}),!Fc(t)&&ee.jsx(_h,{className:Ho,ellipsize:!x,tagName:"span",title:S,children:t}),ee.jsx(Go,{icon:s??M}),z&&ee.jsx(dv,{...i})]})});xf.displayName=`${kn}.Tag`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const xh="186",Pr={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},Sy=0,Pg=1,yy=2,Ac=1,My=2,Uo=3,ka=0,di=1,qi=2,Lr=0,zo=1,Lg=2,Dg=3,Ng=4,Ey=5,bs=100,Ty=101,wy=102,Ay=103,Cy=104,Ry=200,by=201,Py=202,Ly=203,fv=204,hv=205,Dy=206,Ny=207,Uy=208,Fy=209,Oy=210,Iy=211,ky=212,zy=213,Hy=214,Sf=0,yf=1,Mf=2,Wo=3,Ef=4,Tf=5,wf=6,Af=7,pv=0,Vy=1,Gy=2,lr=0,mv=1,gv=2,vv=3,_v=4,xv=5,Sv=6,yv=7,Mv=300,za=301,Is=302,Fd=303,Od=304,Kc=306,Cf=1e3,br=1001,Rf=1002,Vn=1003,By=1004,Jl=1005,Zn=1006,Id=1007,Ua=1008,yi=1009,Ev=1010,Tv=1011,Xo=1012,Sh=1013,cr=1014,sr=1015,ur=1016,yh=1017,Mh=1018,$o=1020,wv=35902,Av=35899,Cv=1021,Rv=1022,ji=1023,Nr=1026,Fa=1027,bv=1028,Eh=1029,Ha=1030,Th=1031,wh=1033,Cc=33776,Rc=33777,bc=33778,Pc=33779,bf=35840,Pf=35841,Lf=35842,Df=35843,Nf=36196,Uf=37492,Ff=37496,Of=37488,If=37489,Oc=37490,kf=37491,zf=37808,Hf=37809,Vf=37810,Gf=37811,Bf=37812,Wf=37813,Xf=37814,$f=37815,Yf=37816,qf=37817,jf=37818,Kf=37819,Zf=37820,Jf=37821,Qf=36492,eh=36494,th=36495,nh=36283,ih=36284,Ic=36285,rh=36286,Wy=3200,ah=0,Xy=1,sa="",Si="srgb",kc="srgb-linear",zc="linear",Kt="srgb",kd=7680,$y=519,Yy=512,qy=513,jy=514,Ah=515,Ky=516,Zy=517,Ch=518,Jy=519,Pv=35044,Ug="300 es",or=2e3,Yo=2001;function Qy(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function eM(){const i=Hc("canvas");return i.style.display="block",i}const Fg={};function Vc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Lv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function gt(...i){i=Lv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function It(...i){i=Lv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){const e=i.join(" ");e in Fg||(Fg[e]=!0,gt(...i))}function tM(i,e,t){return new Promise(function(a,s){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const nM={[Sf]:yf,[Mf]:wf,[Ef]:Af,[Wo]:Tf,[yf]:Sf,[wf]:Mf,[Af]:Ef,[Tf]:Wo};class ha{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,sh=180/Math.PI;function oa(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[a&255]+qn[a>>8&255]+qn[a>>16&255]+qn[a>>24&255]).toLowerCase()}function Dt(i,e,t){return Math.max(e,Math.min(t,i))}function iM(i,e){return(i%e+e)%e}function zd(i,e,t){return(1-t)*i+t*e}function ar(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Jt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const rM={DEG2RAD:Lc},zh=class zh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Dt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};zh.prototype.isVector2=!0;let ut=zh;class ca{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,d){let m=a[s+0],p=a[s+1],v=a[s+2],x=a[s+3],_=l[u+0],M=l[u+1],T=l[u+2],b=l[u+3];if(x!==b||m!==_||p!==M||v!==T){let y=m*_+p*M+v*T+x*b;y<0&&(_=-_,M=-M,T=-T,b=-b,y=-y);let S=1-d;if(y<.9995){const D=Math.acos(y),z=Math.sin(D);S=Math.sin(S*D)/z,d=Math.sin(d*D)/z,m=m*S+_*d,p=p*S+M*d,v=v*S+T*d,x=x*S+b*d}else{m=m*S+_*d,p=p*S+M*d,v=v*S+T*d,x=x*S+b*d;const D=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=D,p*=D,v*=D,x*=D}}e[t]=m,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,a,s,l,u){const d=a[s],m=a[s+1],p=a[s+2],v=a[s+3],x=l[u],_=l[u+1],M=l[u+2],T=l[u+3];return e[t]=d*T+v*x+m*M-p*_,e[t+1]=m*T+v*_+p*x-d*M,e[t+2]=p*T+v*M+d*_-m*x,e[t+3]=v*T-d*x-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),v=d(s/2),x=d(l/2),_=m(a/2),M=m(s/2),T=m(l/2);switch(u){case"XYZ":this._x=_*v*x+p*M*T,this._y=p*M*x-_*v*T,this._z=p*v*T+_*M*x,this._w=p*v*x-_*M*T;break;case"YXZ":this._x=_*v*x+p*M*T,this._y=p*M*x-_*v*T,this._z=p*v*T-_*M*x,this._w=p*v*x+_*M*T;break;case"ZXY":this._x=_*v*x-p*M*T,this._y=p*M*x+_*v*T,this._z=p*v*T+_*M*x,this._w=p*v*x-_*M*T;break;case"ZYX":this._x=_*v*x-p*M*T,this._y=p*M*x+_*v*T,this._z=p*v*T-_*M*x,this._w=p*v*x+_*M*T;break;case"YZX":this._x=_*v*x+p*M*T,this._y=p*M*x+_*v*T,this._z=p*v*T-_*M*x,this._w=p*v*x-_*M*T;break;case"XZY":this._x=_*v*x-p*M*T,this._y=p*M*x-_*v*T,this._z=p*v*T+_*M*x,this._w=p*v*x+_*M*T;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],d=t[5],m=t[9],p=t[2],v=t[6],x=t[10],_=a+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-m)*M,this._y=(l-p)*M,this._z=(u-s)*M}else if(a>d&&a>x){const M=2*Math.sqrt(1+a-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(s+u)/M,this._z=(l+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-a-x);this._w=(l-p)/M,this._x=(s+u)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-a-d);this._w=(u-s)/M,this._x=(l+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Dt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,d=t._x,m=t._y,p=t._z,v=t._w;return this._x=a*v+u*d+s*p-l*m,this._y=s*v+u*m+l*d-a*p,this._z=l*v+u*p+a*m-s*d,this._w=u*v-a*d-s*m-l*p,this._onChangeCallback(),this}slerp(e,t){let a=e._x,s=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,s=-s,l=-l,u=-u,d=-d);let m=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,t=Math.sin(t*p)/v,this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Hh=class Hh{constructor(e=0,t=0,a=0){this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Og.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Og.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*s-d*a),v=2*(d*t-l*s),x=2*(l*a-u*t);return this.x=t+m*p+u*x-d*v,this.y=a+m*v+d*p-l*x,this.z=s+m*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,d=t.y,m=t.z;return this.x=s*m-l*d,this.y=l*u-a*m,this.z=a*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Hd.copy(this).projectOnVector(e),this.sub(Hd)}reflect(e){return this.sub(Hd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Dt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Hh.prototype.isVector3=!0;let J=Hh;const Hd=new J,Og=new ca,Vh=class Vh{constructor(e,t,a,s,l,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p)}set(e,t,a,s,l,u,d,m,p){const v=this.elements;return v[0]=e,v[1]=s,v[2]=d,v[3]=t,v[4]=l,v[5]=m,v[6]=a,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],v=a[4],x=a[7],_=a[2],M=a[5],T=a[8],b=s[0],y=s[3],S=s[6],D=s[1],z=s[4],C=s[7],L=s[2],P=s[5],I=s[8];return l[0]=u*b+d*D+m*L,l[3]=u*y+d*z+m*P,l[6]=u*S+d*C+m*I,l[1]=p*b+v*D+x*L,l[4]=p*y+v*z+x*P,l[7]=p*S+v*C+x*I,l[2]=_*b+M*D+T*L,l[5]=_*y+M*z+T*P,l[8]=_*S+M*C+T*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-a*l*v+a*d*m+s*l*p-s*u*m}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*u-d*p,_=d*m-v*l,M=p*l-u*m,T=t*x+a*_+s*M;if(T===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/T;return e[0]=x*b,e[1]=(s*p-v*a)*b,e[2]=(d*a-s*u)*b,e[3]=_*b,e[4]=(v*t-s*m)*b,e[5]=(s*l-d*t)*b,e[6]=M*b,e[7]=(a*m-p*t)*b,e[8]=(u*t-a*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,d){const m=Math.cos(l),p=Math.sin(l);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-s*p,s*m,-s*(-p*u+m*d)+d+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Vd.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Vd.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Vd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Vh.prototype.isMatrix3=!0;let xt=Vh;const Vd=new xt,Ig=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),kg=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function aM(){const i={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Kt&&(s.r=Dr(s.r),s.g=Dr(s.g),s.b=Dr(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Kt&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===sa?zc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[kc]:{primaries:e,whitePoint:a,transfer:zc,toXYZ:Ig,fromXYZ:kg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Si},outputColorSpaceConfig:{drawingBufferColorSpace:Si}},[Si]:{primaries:e,whitePoint:a,transfer:Kt,toXYZ:Ig,fromXYZ:kg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Si}}}),i}const Ot=aM();function Dr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let us;class sM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{us===void 0&&(us=Hc("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=us}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hc("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=Dr(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Dr(t[a]/255)*255):t[a]=Dr(t[a]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let oM=0;class Rh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:oM++}),this.uuid=oa(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?l.push(Gd(s[u].image)):l.push(Gd(s[u]))}else l=Gd(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Gd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?sM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let lM=0;const Bd=new J;class Jn extends ha{constructor(e=Jn.DEFAULT_IMAGE,t=Jn.DEFAULT_MAPPING,a=br,s=br,l=Zn,u=Ua,d=ji,m=yi,p=Jn.DEFAULT_ANISOTROPY,v=sa){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=oa(),this.name="",this.source=new Rh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ut(0,0),this.repeat=new ut(1,1),this.center=new ut(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Bd).x}get height(){return this.source.getSize(Bd).y}get depth(){return this.source.getSize(Bd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Mv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Cf:e.x=e.x-Math.floor(e.x);break;case br:e.x=e.x<0?0:1;break;case Rf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Cf:e.y=e.y-Math.floor(e.y);break;case br:e.y=e.y<0?0:1;break;case Rf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Jn.DEFAULT_IMAGE=null;Jn.DEFAULT_MAPPING=Mv;Jn.DEFAULT_ANISOTROPY=1;const Gh=class Gh{constructor(e=0,t=0,a=0,s=1){this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const m=e.elements,p=m[0],v=m[4],x=m[8],_=m[1],M=m[5],T=m[9],b=m[2],y=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-b)<.01&&Math.abs(T-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+b)<.1&&Math.abs(T+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(p+1)/2,C=(M+1)/2,L=(S+1)/2,P=(v+_)/4,I=(x+b)/4,w=(T+y)/4;return z>C&&z>L?z<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(z),s=P/a,l=I/a):C>L?C<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(C),a=P/s,l=w/s):L<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(L),a=I/l,s=w/l),this.set(a,s,l,t),this}let D=Math.sqrt((y-T)*(y-T)+(x-b)*(x-b)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(y-T)/D,this.y=(x-b)/D,this.z=(_-v)/D,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Dt(this.x,e.x,t.x),this.y=Dt(this.y,e.y,t.y),this.z=Dt(this.z,e.z,t.z),this.w=Dt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Dt(this.x,e,t),this.y=Dt(this.y,e,t),this.z=Dt(this.z,e,t),this.w=Dt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Dt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Gh.prototype.isVector4=!0;let pn=Gh;class cM extends ha{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Zn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new pn(0,0,e,t),this.scissorTest=!1,this.viewport=new pn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:a.depth},l=new Jn(s),u=a.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Zn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Rh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Zi extends cM{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Dv extends Jn{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class uM extends Jn{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Vn,this.minFilter=Vn,this.wrapR=br,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Wc=class Wc{constructor(e,t,a,s,l,u,d,m,p,v,x,_,M,T,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p,v,x,_,M,T,b,y)}set(e,t,a,s,l,u,d,m,p,v,x,_,M,T,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=a,S[12]=s,S[1]=l,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=_,S[3]=M,S[7]=T,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Wc().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,a=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),l=1/ds.setFromMatrixColumn(e,1).length(),u=1/ds.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(s),p=Math.sin(s),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*v,M=u*x,T=d*v,b=d*x;t[0]=m*v,t[4]=-m*x,t[8]=p,t[1]=M+T*p,t[5]=_-b*p,t[9]=-d*m,t[2]=b-_*p,t[6]=T+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*v,M=m*x,T=p*v,b=p*x;t[0]=_+b*d,t[4]=T*d-M,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-d,t[2]=M*d-T,t[6]=b+_*d,t[10]=u*m}else if(e.order==="ZXY"){const _=m*v,M=m*x,T=p*v,b=p*x;t[0]=_-b*d,t[4]=-u*x,t[8]=T+M*d,t[1]=M+T*d,t[5]=u*v,t[9]=b-_*d,t[2]=-u*p,t[6]=d,t[10]=u*m}else if(e.order==="ZYX"){const _=u*v,M=u*x,T=d*v,b=d*x;t[0]=m*v,t[4]=T*p-M,t[8]=_*p+b,t[1]=m*x,t[5]=b*p+_,t[9]=M*p-T,t[2]=-p,t[6]=d*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,T=d*m,b=d*p;t[0]=m*v,t[4]=b-_*x,t[8]=T*x+M,t[1]=x,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=M*x+T,t[10]=_-b*x}else if(e.order==="XZY"){const _=u*m,M=u*p,T=d*m,b=d*p;t[0]=m*v,t[4]=-x,t[8]=p*v,t[1]=_*x+b,t[5]=u*v,t[9]=M*x-T,t[2]=T*x-M,t[6]=d*v,t[10]=b*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(dM,e,fM)}lookAt(e,t,a){const s=this.elements;return vi.subVectors(e,t),vi.lengthSq()===0&&(vi.z=1),vi.normalize(),Qr.crossVectors(a,vi),Qr.lengthSq()===0&&(Math.abs(a.z)===1?vi.x+=1e-4:vi.z+=1e-4,vi.normalize(),Qr.crossVectors(a,vi)),Qr.normalize(),Ql.crossVectors(vi,Qr),s[0]=Qr.x,s[4]=Ql.x,s[8]=vi.x,s[1]=Qr.y,s[5]=Ql.y,s[9]=vi.y,s[2]=Qr.z,s[6]=Ql.z,s[10]=vi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],v=a[1],x=a[5],_=a[9],M=a[13],T=a[2],b=a[6],y=a[10],S=a[14],D=a[3],z=a[7],C=a[11],L=a[15],P=s[0],I=s[4],w=s[8],U=s[12],k=s[1],G=s[5],j=s[9],ie=s[13],H=s[2],ne=s[6],ae=s[10],le=s[14],Y=s[3],Z=s[7],K=s[11],N=s[15];return l[0]=u*P+d*k+m*H+p*Y,l[4]=u*I+d*G+m*ne+p*Z,l[8]=u*w+d*j+m*ae+p*K,l[12]=u*U+d*ie+m*le+p*N,l[1]=v*P+x*k+_*H+M*Y,l[5]=v*I+x*G+_*ne+M*Z,l[9]=v*w+x*j+_*ae+M*K,l[13]=v*U+x*ie+_*le+M*N,l[2]=T*P+b*k+y*H+S*Y,l[6]=T*I+b*G+y*ne+S*Z,l[10]=T*w+b*j+y*ae+S*K,l[14]=T*U+b*ie+y*le+S*N,l[3]=D*P+z*k+C*H+L*Y,l[7]=D*I+z*G+C*ne+L*Z,l[11]=D*w+z*j+C*ae+L*K,l[15]=D*U+z*ie+C*le+L*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],_=e[10],M=e[14],T=e[3],b=e[7],y=e[11],S=e[15],D=m*M-p*_,z=d*M-p*x,C=d*_-m*x,L=u*M-p*v,P=u*_-m*v,I=u*x-d*v;return t*(b*D-y*z+S*C)-a*(T*D-y*L+S*P)+s*(T*z-b*L+S*I)-l*(T*C-b*P+y*I)}determinantAffine(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[1],u=e[5],d=e[9],m=e[2],p=e[6],v=e[10];return t*(u*v-d*p)-a*(l*v-d*m)+s*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],_=e[10],M=e[11],T=e[12],b=e[13],y=e[14],S=e[15],D=t*d-a*u,z=t*m-s*u,C=t*p-l*u,L=a*m-s*d,P=a*p-l*d,I=s*p-l*m,w=v*b-x*T,U=v*y-_*T,k=v*S-M*T,G=x*y-_*b,j=x*S-M*b,ie=_*S-M*y,H=D*ie-z*j+C*G+L*k-P*U+I*w;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ne=1/H;return e[0]=(d*ie-m*j+p*G)*ne,e[1]=(s*j-a*ie-l*G)*ne,e[2]=(b*I-y*P+S*L)*ne,e[3]=(_*P-x*I-M*L)*ne,e[4]=(m*k-u*ie-p*U)*ne,e[5]=(t*ie-s*k+l*U)*ne,e[6]=(y*C-T*I-S*z)*ne,e[7]=(v*I-_*C+M*z)*ne,e[8]=(u*j-d*k+p*w)*ne,e[9]=(a*k-t*j-l*w)*ne,e[10]=(T*P-b*C+S*D)*ne,e[11]=(x*C-v*P-M*D)*ne,e[12]=(d*U-u*G-m*w)*ne,e[13]=(t*G-a*U+s*w)*ne,e[14]=(b*z-T*L-y*D)*ne,e[15]=(v*L-x*z+_*D)*ne,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,d=e.y,m=e.z,p=l*u,v=l*d;return this.set(p*u+a,p*d-s*m,p*m+s*d,0,p*d+s*m,v*d+a,v*m-s*u,0,p*m-s*d,v*m+s*u,l*m*m+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,d=t._z,m=t._w,p=l+l,v=u+u,x=d+d,_=l*p,M=l*v,T=l*x,b=u*v,y=u*x,S=d*x,D=m*p,z=m*v,C=m*x,L=a.x,P=a.y,I=a.z;return s[0]=(1-(b+S))*L,s[1]=(M+C)*L,s[2]=(T-z)*L,s[3]=0,s[4]=(M-C)*P,s[5]=(1-(_+S))*P,s[6]=(y+D)*P,s[7]=0,s[8]=(T+z)*I,s[9]=(y-D)*I,s[10]=(1-(_+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),t.identity(),this;let u=ds.set(s[0],s[1],s[2]).length();const d=ds.set(s[4],s[5],s[6]).length(),m=ds.set(s[8],s[9],s[10]).length();l<0&&(u=-u),Wi.copy(this);const p=1/u,v=1/d,x=1/m;return Wi.elements[0]*=p,Wi.elements[1]*=p,Wi.elements[2]*=p,Wi.elements[4]*=v,Wi.elements[5]*=v,Wi.elements[6]*=v,Wi.elements[8]*=x,Wi.elements[9]*=x,Wi.elements[10]*=x,t.setFromRotationMatrix(Wi),a.x=u,a.y=d,a.z=m,this}makePerspective(e,t,a,s,l,u,d=or,m=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(a-s),_=(t+e)/(t-e),M=(a+s)/(a-s);let T,b;if(m)T=l/(u-l),b=u*l/(u-l);else if(d===or)T=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Yo)T=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,a,s,l,u,d=or,m=!1){const p=this.elements,v=2/(t-e),x=2/(a-s),_=-(t+e)/(t-e),M=-(a+s)/(a-s);let T,b;if(m)T=1/(u-l),b=u/(u-l);else if(d===or)T=-2/(u-l),b=-(u+l)/(u-l);else if(d===Yo)T=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=T,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}};Wc.prototype.isMatrix4=!0;let dn=Wc;const ds=new J,Wi=new dn,dM=new J(0,0,0),fM=new J(1,1,1),Qr=new J,Ql=new J,vi=new J,zg=new dn,Hg=new ca;class ua{constructor(e=0,t=0,a=0,s=ua.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],d=s[8],m=s[1],p=s[5],v=s[9],x=s[2],_=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(Dt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Dt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Dt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Dt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Dt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Dt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return zg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(zg,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Hg.setFromEuler(this),this.setFromQuaternion(Hg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ua.DEFAULT_ORDER="XYZ";class bh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let hM=0;const Vg=new J,fs=new ca,Mr=new dn,ec=new J,Eo=new J,pM=new J,mM=new ca,Gg=new J(1,0,0),Bg=new J(0,1,0),Wg=new J(0,0,1),Xg={type:"added"},gM={type:"removed"},hs={type:"childadded",child:null},Wd={type:"childremoved",child:null};class In extends ha{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:hM++}),this.uuid=oa(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=In.DEFAULT_UP.clone();const e=new J,t=new ua,a=new ca,s=new J(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new dn},normalMatrix:{value:new xt}}),this.matrix=new dn,this.matrixWorld=new dn,this.matrixAutoUpdate=In.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new bh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Gg,e)}rotateY(e){return this.rotateOnAxis(Bg,e)}rotateZ(e){return this.rotateOnAxis(Wg,e)}translateOnAxis(e,t){return Vg.copy(e).applyQuaternion(this.quaternion),this.position.add(Vg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Gg,e)}translateY(e){return this.translateOnAxis(Bg,e)}translateZ(e){return this.translateOnAxis(Wg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Mr.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?ec.copy(e):ec.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),Eo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Mr.lookAt(Eo,ec,this.up):Mr.lookAt(ec,Eo,this.up),this.quaternion.setFromRotationMatrix(Mr),s&&(Mr.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Mr),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(It("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(Xg),hs.child=e,this.dispatchEvent(hs),hs.child=null):It("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(gM),Wd.child=e,this.dispatchEvent(Wd),Wd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Mr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Mr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Mr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(Xg),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,e,pM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Eo,mM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,a=e.y,s=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*a-l[8]*s,l[13]+=a-l[1]*t-l[5]*a-l[9]*s,l[14]+=s-l[2]*t-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t,a=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];l(e.shapes,x)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(l(e.materials,this.material[m]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];s.animations.push(l(e.animations,m))}}if(t){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),_=u(e.skeletons),M=u(e.animations),T=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),M.length>0&&(a.animations=M),T.length>0&&(a.nodes=T)}return a.object=s,a;function u(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}In.DEFAULT_UP=new J(0,1,0);In.DEFAULT_MATRIX_AUTO_UPDATE=!0;In.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Fo extends In{constructor(){super(),this.isGroup=!0,this.type="Group"}}const vM={type:"move"};class Xd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,a),S=this._getHandJoint(p,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=v.position.distanceTo(x.position),M=.02,T=.005;p.inputState.pinching&&_>M+T?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-T&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(vM)))}return d!==null&&(d.visible=s!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Fo;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}const Nv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ea={h:0,s:0,l:0},tc={h:0,s:0,l:0};function $d(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Ct{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Si){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ot.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Ot.workingColorSpace){return this.r=e,this.g=t,this.b=a,Ot.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Ot.workingColorSpace){if(e=iM(e,1),t=Dt(t,0,1),a=Dt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=$d(u,l,e+1/3),this.g=$d(u,l,e),this.b=$d(u,l,e-1/3)}return Ot.colorSpaceToWorking(this,s),this}setStyle(e,t=Si){function a(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Si){const a=Nv[e.toLowerCase()];return a!==void 0?this.setHex(a,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Dr(e.r),this.g=Dr(e.g),this.b=Dr(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Si){return Ot.workingToColorSpace(jn.copy(this),e),Math.round(Dt(jn.r*255,0,255))*65536+Math.round(Dt(jn.g*255,0,255))*256+Math.round(Dt(jn.b*255,0,255))}getHexString(e=Si){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ot.workingColorSpace){Ot.workingToColorSpace(jn.copy(this),t);const a=jn.r,s=jn.g,l=jn.b,u=Math.max(a,s,l),d=Math.min(a,s,l);let m,p;const v=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=v<=.5?x/(u+d):x/(2-u-d),u){case a:m=(s-l)/x+(s<l?6:0);break;case s:m=(l-a)/x+2;break;case l:m=(a-s)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,t=Ot.workingColorSpace){return Ot.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Si){Ot.workingToColorSpace(jn.copy(this),e);const t=jn.r,a=jn.g,s=jn.b;return e!==Si?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(ea),this.setHSL(ea.h+e,ea.s+t,ea.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(ea),e.getHSL(tc);const a=zd(ea.h,tc.h,t),s=zd(ea.s,tc.s,t),l=zd(ea.l,tc.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new Ct;Ct.NAMES=Nv;class _M extends In{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ua,this.environmentIntensity=1,this.environmentRotation=new ua,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Xi=new J,Er=new J,Yd=new J,Tr=new J,ps=new J,ms=new J,$g=new J,qd=new J,jd=new J,Kd=new J,Zd=new pn,Jd=new pn,Qd=new pn;class Di{constructor(e=new J,t=new J,a=new J){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),Xi.subVectors(e,t),s.cross(Xi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){Xi.subVectors(s,t),Er.subVectors(a,t),Yd.subVectors(e,t);const u=Xi.dot(Xi),d=Xi.dot(Er),m=Xi.dot(Yd),p=Er.dot(Er),v=Er.dot(Yd),x=u*p-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,M=(p*m-d*v)*_,T=(u*v-d*m)*_;return l.set(1-M-T,T,M)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,Tr)===null?!1:Tr.x>=0&&Tr.y>=0&&Tr.x+Tr.y<=1}static getInterpolation(e,t,a,s,l,u,d,m){return this.getBarycoord(e,t,a,s,Tr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Tr.x),m.addScaledVector(u,Tr.y),m.addScaledVector(d,Tr.z),m)}static getInterpolatedAttribute(e,t,a,s,l,u){return Zd.setScalar(0),Jd.setScalar(0),Qd.setScalar(0),Zd.fromBufferAttribute(e,t),Jd.fromBufferAttribute(e,a),Qd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Zd,l.x),u.addScaledVector(Jd,l.y),u.addScaledVector(Qd,l.z),u}static isFrontFacing(e,t,a,s){return Xi.subVectors(a,t),Er.subVectors(e,t),Xi.cross(Er).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Xi.subVectors(this.c,this.b),Er.subVectors(this.a,this.b),Xi.cross(Er).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Di.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Di.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return Di.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return Di.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Di.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,d;ps.subVectors(s,a),ms.subVectors(l,a),qd.subVectors(e,a);const m=ps.dot(qd),p=ms.dot(qd);if(m<=0&&p<=0)return t.copy(a);jd.subVectors(e,s);const v=ps.dot(jd),x=ms.dot(jd);if(v>=0&&x<=v)return t.copy(s);const _=m*x-v*p;if(_<=0&&m>=0&&v<=0)return u=m/(m-v),t.copy(a).addScaledVector(ps,u);Kd.subVectors(e,l);const M=ps.dot(Kd),T=ms.dot(Kd);if(T>=0&&M<=T)return t.copy(l);const b=M*p-m*T;if(b<=0&&p>=0&&T<=0)return d=p/(p-T),t.copy(a).addScaledVector(ms,d);const y=v*T-M*x;if(y<=0&&x-v>=0&&M-T>=0)return $g.subVectors(l,s),d=(x-v)/(x-v+(M-T)),t.copy(s).addScaledVector($g,d);const S=1/(y+b+_);return u=b*S,d=_*S,t.copy(a).addScaledVector(ps,u).addScaledVector(ms,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class da{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint($i.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint($i.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=$i.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,$i):$i.fromBufferAttribute(l,u),$i.applyMatrix4(e.matrixWorld),this.expandByPoint($i);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),nc.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),nc.copy(a.boundingBox)),nc.applyMatrix4(e.matrixWorld),this.union(nc)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,$i),$i.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(To),ic.subVectors(this.max,To),gs.subVectors(e.a,To),vs.subVectors(e.b,To),_s.subVectors(e.c,To),ta.subVectors(vs,gs),na.subVectors(_s,vs),Ca.subVectors(gs,_s);let t=[0,-ta.z,ta.y,0,-na.z,na.y,0,-Ca.z,Ca.y,ta.z,0,-ta.x,na.z,0,-na.x,Ca.z,0,-Ca.x,-ta.y,ta.x,0,-na.y,na.x,0,-Ca.y,Ca.x,0];return!ef(t,gs,vs,_s,ic)||(t=[1,0,0,0,1,0,0,0,1],!ef(t,gs,vs,_s,ic))?!1:(rc.crossVectors(ta,na),t=[rc.x,rc.y,rc.z],ef(t,gs,vs,_s,ic))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,$i).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize($i).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(wr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),wr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),wr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),wr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),wr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),wr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),wr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),wr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(wr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const wr=[new J,new J,new J,new J,new J,new J,new J,new J],$i=new J,nc=new da,gs=new J,vs=new J,_s=new J,ta=new J,na=new J,Ca=new J,To=new J,ic=new J,rc=new J,Ra=new J;function ef(i,e,t,a,s){for(let l=0,u=i.length-3;l<=u;l+=3){Ra.fromArray(i,l);const d=s.x*Math.abs(Ra.x)+s.y*Math.abs(Ra.y)+s.z*Math.abs(Ra.z),m=e.dot(Ra),p=t.dot(Ra),v=a.dot(Ra);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const En=new J,ac=new ut;let xM=0;class fi extends ha{constructor(e,t,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:xM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Pv,this.updateRanges=[],this.gpuType=sr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)ac.fromBufferAttribute(this,t),ac.applyMatrix3(e),this.setXY(t,ac.x,ac.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=ar(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Jt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ar(t,this.array)),t}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ar(t,this.array)),t}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ar(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ar(t,this.array)),t}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),a=Jt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),a=Jt(a,this.array),s=Jt(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=Jt(t,this.array),a=Jt(a,this.array),s=Jt(s,this.array),l=Jt(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Uv extends fi{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class Fv extends fi{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class bn extends fi{constructor(e,t,a){super(new Float32Array(e),t,a)}}const SM=new da,wo=new J,tf=new J;class Ph{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):SM.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;wo.subVectors(e,this.center);const t=wo.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(wo,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(tf.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(wo.copy(e.center).add(tf)),this.expandByPoint(wo.copy(e.center).sub(tf))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let yM=0;const Pi=new dn,nf=new In,xs=new J,_i=new da,Ao=new da,On=new J;class ii extends ha{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:yM++}),this.uuid=oa(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Qy(e)?Fv:Uv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new xt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Pi.makeRotationFromQuaternion(e),this.applyMatrix4(Pi),this}rotateX(e){return Pi.makeRotationX(e),this.applyMatrix4(Pi),this}rotateY(e){return Pi.makeRotationY(e),this.applyMatrix4(Pi),this}rotateZ(e){return Pi.makeRotationZ(e),this.applyMatrix4(Pi),this}translate(e,t,a){return Pi.makeTranslation(e,t,a),this.applyMatrix4(Pi),this}scale(e,t,a){return Pi.makeScale(e,t,a),this.applyMatrix4(Pi),this}lookAt(e){return nf.lookAt(e),nf.updateMatrix(),this.applyMatrix4(nf.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new bn(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new da);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];_i.setFromBufferAttribute(l),this.morphTargetsRelative?(On.addVectors(this.boundingBox.min,_i.min),this.boundingBox.expandByPoint(On),On.addVectors(this.boundingBox.max,_i.max),this.boundingBox.expandByPoint(On)):(this.boundingBox.expandByPoint(_i.min),this.boundingBox.expandByPoint(_i.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&It('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Ph);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){It("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const a=this.boundingSphere.center;if(_i.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];Ao.setFromBufferAttribute(d),this.morphTargetsRelative?(On.addVectors(_i.min,Ao.min),_i.expandByPoint(On),On.addVectors(_i.max,Ao.max),_i.expandByPoint(On)):(_i.expandByPoint(Ao.min),_i.expandByPoint(Ao.max))}_i.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)On.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(On));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)On.fromBufferAttribute(d,p),m&&(xs.fromBufferAttribute(e,p),On.add(xs)),s=Math.max(s,a.distanceToSquared(On))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&It('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){It("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new fi(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let w=0;w<a.count;w++)d[w]=new J,m[w]=new J;const p=new J,v=new J,x=new J,_=new ut,M=new ut,T=new ut,b=new J,y=new J;function S(w,U,k){p.fromBufferAttribute(a,w),v.fromBufferAttribute(a,U),x.fromBufferAttribute(a,k),_.fromBufferAttribute(l,w),M.fromBufferAttribute(l,U),T.fromBufferAttribute(l,k),v.sub(p),x.sub(p),M.sub(_),T.sub(_);const G=1/(M.x*T.y-T.x*M.y);isFinite(G)&&(b.copy(v).multiplyScalar(T.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-T.x).multiplyScalar(G),d[w].add(b),d[U].add(b),d[k].add(b),m[w].add(y),m[U].add(y),m[k].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let w=0,U=D.length;w<U;++w){const k=D[w],G=k.start,j=k.count;for(let ie=G,H=G+j;ie<H;ie+=3)S(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const z=new J,C=new J,L=new J,P=new J;function I(w){L.fromBufferAttribute(s,w),P.copy(L);const U=d[w];z.copy(U),z.sub(L.multiplyScalar(L.dot(U))).normalize(),C.crossVectors(P,U);const G=C.dot(m[w])<0?-1:1;u.setXYZW(w,z.x,z.y,z.z,G)}for(let w=0,U=D.length;w<U;++w){const k=D[w],G=k.start,j=k.count;for(let ie=G,H=G+j;ie<H;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==t.count)a=new fi(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,M=a.count;_<M;_++)a.setXYZ(_,0,0,0);const s=new J,l=new J,u=new J,d=new J,m=new J,p=new J,v=new J,x=new J;if(e)for(let _=0,M=e.count;_<M;_+=3){const T=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,T),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),d.fromBufferAttribute(a,T),m.fromBufferAttribute(a,b),p.fromBufferAttribute(a,y),d.add(v),m.add(v),p.add(v),a.setXYZ(T,d.x,d.y,d.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)On.fromBufferAttribute(e,t),On.normalize(),e.setXYZ(t,On.x,On.y,On.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,_=new p.constructor(m.length*v);let M=0,T=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*v;for(let S=0;S<v;S++)_[T++]=p[M++]}return new fi(_,v,x)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ii,a=this.index.array,s=this.attributes;for(const d in s){const m=s[d],p=e(m,a);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const m=[],p=l[d];for(let v=0,x=p.length;v<x;v++){const _=p[v],M=e(_,a);m.push(M)}t.morphAttributes[d]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const s={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(s[m]=v,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const p in s){const v=s[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let _=0,M=x.length;_<M;_++)v.push(x[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class MM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Pv,this.updateRanges=[],this.version=0,this.uuid=oa()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[a+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=oa()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const ti=new J;class Gc{constructor(e,t,a,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)ti.fromBufferAttribute(this,t),ti.applyMatrix4(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)ti.fromBufferAttribute(this,t),ti.applyNormalMatrix(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)ti.fromBufferAttribute(this,t),ti.transformDirection(e),this.setXYZ(t,ti.x,ti.y,ti.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=ar(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Jt(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Jt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=ar(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=ar(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=ar(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=ar(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),a=Jt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),a=Jt(a,this.array),s=Jt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Jt(t,this.array),a=Jt(a,this.array),s=Jt(s,this.array),l=Jt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Vc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new fi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const rf=new J,EM=new J,TM=new xt;class Rr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=rf.subVectors(a,t).cross(EM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,a=!0){const s=e.delta(rf),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return a===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||TM.getNormalMatrix(e),s=this.coplanarPoint(rf).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let wM=0;class zs extends ha{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:wM++}),this.uuid=oa(),this.name="",this.type="Material",this.blending=zo,this.side=ka,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=fv,this.blendDst=hv,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Ct(0,0,0),this.blendAlpha=0,this.depthFunc=Wo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=$y,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=kd,this.stencilZFail=kd,this.stencilZPass=kd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector2&&a&&a.isVector2||s&&s.isEuler&&a&&a.isEuler||s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Ct().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new Rr().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new ut().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ut().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Ov extends zs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Ct(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ss;const Co=new J,ys=new J,Ms=new J,Es=new ut,Ro=new ut,Iv=new dn,sc=new J,bo=new J,oc=new J,Yg=new ut,af=new ut,qg=new ut;class AM extends In{constructor(e=new Ov){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new ii;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new MM(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Gc(a,3,0,!1)),Ss.setAttribute("uv",new Gc(a,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new ut(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&It('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Iv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);const a=this.material.rotation;let s,l;a!==0&&(l=Math.cos(a),s=Math.sin(a));const u=this.center;lc(sc.set(-.5,-.5,0),Ms,u,ys,s,l),lc(bo.set(.5,-.5,0),Ms,u,ys,s,l),lc(oc.set(.5,.5,0),Ms,u,ys,s,l),Yg.set(0,0),af.set(1,0),qg.set(1,1);let d=e.ray.intersectTriangle(sc,bo,oc,!1,Co);if(d===null&&(lc(bo.set(-.5,.5,0),Ms,u,ys,s,l),af.set(0,1),d=e.ray.intersectTriangle(sc,oc,bo,!1,Co),d===null))return;const m=e.ray.origin.distanceTo(Co);m<e.near||m>e.far||t.push({distance:m,point:Co.clone(),uv:Di.getInterpolation(Co,sc,bo,oc,Yg,af,qg,new ut),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function lc(i,e,t,a,s,l){Es.subVectors(i,t).addScalar(.5).multiply(a),s!==void 0?(Ro.x=l*Es.x-s*Es.y,Ro.y=s*Es.x+l*Es.y):Ro.copy(Es),i.copy(e),i.x+=Ro.x,i.y+=Ro.y,i.applyMatrix4(Iv)}const Ar=new J,sf=new J,cc=new J,uc=new J;class Lh{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ar)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ar.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ar.copy(this.origin).addScaledVector(this.direction,t),Ar.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){sf.copy(e).add(t).multiplyScalar(.5),cc.copy(t).sub(e).normalize(),uc.copy(this.origin).sub(sf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(cc),d=uc.dot(this.direction),m=-uc.dot(cc),p=uc.lengthSq(),v=Math.abs(1-u*u);let x,_,M,T;if(v>0)if(x=u*m-d,_=u*d-m,T=l*v,x>=0)if(_>=-T)if(_<=T){const b=1/v;x*=b,_*=b,M=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _=-l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _<=-T?(x=Math.max(0,-(-u*l+d)),_=x>0?-l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p):_<=T?(x=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(x=Math.max(0,-(u*l+d)),_=x>0?l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p);else _=u>0?-l:l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(sf).addScaledVector(cc,_),M}intersectSphere(e,t){if(e.radius<0)return null;Ar.subVectors(e.center,this.origin);const a=Ar.dot(this.direction),s=Ar.dot(Ar)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,s=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,s=(e.min.x-_.x)*p),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>s)||((d>a||a!==a)&&(a=d),(m<s||s!==s)&&(s=m),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,Ar)!==null}intersectTriangle(e,t,a,s,l){const u=this.origin,d=this.direction,m=d.x,p=d.y,v=d.z,x=e.x-u.x,_=e.y-u.y,M=e.z-u.z,T=t.x-u.x,b=t.y-u.y,y=t.z-u.z,S=a.x-u.x,D=a.y-u.y,z=a.z-u.z,C=Math.abs(m),L=Math.abs(p),P=Math.abs(v);let I,w,U,k,G,j,ie,H,ne,ae,le,Y;if(C>=L&&C>=P?(U=m,j=x,ne=T,Y=S,m>=0?(I=p,w=v,k=_,G=M,ie=b,H=y,ae=D,le=z):(I=v,w=p,k=M,G=_,ie=y,H=b,ae=z,le=D)):L>=P?(U=p,j=_,ne=b,Y=D,p>=0?(I=v,w=m,k=M,G=x,ie=y,H=T,ae=z,le=S):(I=m,w=v,k=x,G=M,ie=T,H=y,ae=S,le=z)):(U=v,j=M,ne=y,Y=z,v>=0?(I=m,w=p,k=x,G=_,ie=T,H=b,ae=S,le=D):(I=p,w=m,k=_,G=x,ie=b,H=T,ae=D,le=S)),U===0)return null;const Z=I/U,K=w/U,N=1/U,oe=k-Z*j,Te=G-K*j,Be=ie-Z*ne,Xe=H-K*ne,qe=ae-Z*Y,ue=le-K*Y,pe=qe*Xe-ue*Be,ye=oe*ue-Te*qe,Qe=Be*Te-Xe*oe;if(s){if(pe<0||ye<0||Qe<0)return null}else if((pe<0||ye<0||Qe<0)&&(pe>0||ye>0||Qe>0))return null;const Ce=pe+ye+Qe;if(Ce===0)return null;const Ze=N*(pe*j+ye*ne+Qe*Y);return(Ce>0?Ze<0:Ze>0)?null:this.at(Ze/Ce,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Dh extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.combine=pv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const jg=new dn,ba=new Lh,dc=new Ph,Kg=new J,fc=new J,hc=new J,pc=new J,of=new J,mc=new J,Zg=new J,gc=new J;class Mi extends In{constructor(e=new ii,t=new Dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(l&&d){mc.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=d[m],x=l[m];v!==0&&(of.fromBufferAttribute(x,e),u?mc.addScaledVector(of,v):mc.addScaledVector(of.sub(t),v))}t.add(mc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),dc.copy(a.boundingSphere),dc.applyMatrix4(l),ba.copy(e.ray).recast(e.near),!(dc.containsPoint(ba.origin)===!1&&(ba.intersectSphere(dc,Kg)===null||ba.origin.distanceToSquared(Kg)>(e.far-e.near)**2))&&(jg.copy(l).invert(),ba.copy(e.ray).applyMatrix4(jg),!(a.boundingBox!==null&&ba.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ba)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,d=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,_=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let T=0,b=_.length;T<b;T++){const y=_[T],S=u[y.materialIndex],D=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,L=z;C<L;C+=3){const P=d.getX(C),I=d.getX(C+1),w=d.getX(C+2);s=vc(this,S,e,a,p,v,x,P,I,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const T=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=T,S=b;y<S;y+=3){const D=d.getX(y),z=d.getX(y+1),C=d.getX(y+2);s=vc(this,u,e,a,p,v,x,D,z,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(m!==void 0)if(Array.isArray(u))for(let T=0,b=_.length;T<b;T++){const y=_[T],S=u[y.materialIndex],D=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let C=D,L=z;C<L;C+=3){const P=C,I=C+1,w=C+2;s=vc(this,S,e,a,p,v,x,P,I,w),s&&(s.faceIndex=Math.floor(C/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const T=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=T,S=b;y<S;y+=3){const D=y,z=y+1,C=y+2;s=vc(this,u,e,a,p,v,x,D,z,C),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function CM(i,e,t,a,s,l,u,d){let m;if(e.side===di?m=a.intersectTriangle(u,l,s,!0,d):m=a.intersectTriangle(s,l,u,e.side===ka,d),m===null)return null;gc.copy(d),gc.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(gc);return p<t.near||p>t.far?null:{distance:p,point:gc.clone(),object:i}}function vc(i,e,t,a,s,l,u,d,m,p){i.getVertexPosition(d,fc),i.getVertexPosition(m,hc),i.getVertexPosition(p,pc);const v=CM(i,e,t,a,fc,hc,pc,Zg);if(v){const x=new J;Di.getBarycoord(Zg,fc,hc,pc,x),s&&(v.uv=Di.getInterpolatedAttribute(s,d,m,p,x,new ut)),l&&(v.uv1=Di.getInterpolatedAttribute(l,d,m,p,x,new ut)),u&&(v.normal=Di.getInterpolatedAttribute(u,d,m,p,x,new J),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new J,materialIndex:0};Di.getNormal(fc,hc,pc,_.normal),v.face=_,v.barycoord=x}return v}class RM extends Jn{constructor(e=null,t=1,a=1,s,l,u,d,m,p=Vn,v=Vn,x,_){super(null,u,d,m,p,v,s,l,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Pa=new Ph,bM=new ut(.5,.5),_c=new J;class Nh{constructor(e=new Rr,t=new Rr,a=new Rr,s=new Rr,l=new Rr,u=new Rr){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(a),d[3].copy(s),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=or,a=!1){const s=this.planes,l=e.elements,u=l[0],d=l[1],m=l[2],p=l[3],v=l[4],x=l[5],_=l[6],M=l[7],T=l[8],b=l[9],y=l[10],S=l[11],D=l[12],z=l[13],C=l[14],L=l[15];if(s[0].setComponents(p-u,M-v,S-T,L-D).normalize(),s[1].setComponents(p+u,M+v,S+T,L+D).normalize(),s[2].setComponents(p+d,M+x,S+b,L+z).normalize(),s[3].setComponents(p-d,M-x,S-b,L-z).normalize(),a)s[4].setComponents(m,_,y,C).normalize(),s[5].setComponents(p-m,M-_,S-y,L-C).normalize();else if(s[4].setComponents(p-m,M-_,S-y,L-C).normalize(),t===or)s[5].setComponents(p+m,M+_,S+y,L+C).normalize();else if(t===Yo)s[5].setComponents(m,_,y,C).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Pa)}intersectsSprite(e){Pa.center.set(0,0,0);const t=bM.distanceTo(e.center);return Pa.radius=.7071067811865476+t,Pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(Pa)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(_c.x=s.normal.x>0?e.max.x:e.min.x,_c.y=s.normal.y>0?e.max.y:e.min.y,_c.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(_c)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class kv extends Jn{constructor(e=[],t=za,a,s,l,u,d,m,p,v){super(e,t,a,s,l,u,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class PM extends Jn{constructor(e,t,a,s,l,u,d,m,p){super(e,t,a,s,l,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class qo extends Jn{constructor(e,t,a=cr,s,l,u,d=Vn,m=Vn,p,v=Nr,x=1){if(v!==Nr&&v!==Fa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,s,l,u,d,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Rh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class LM extends qo{constructor(e,t=cr,a=za,s,l,u=Vn,d=Vn,m,p=Nr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,a,s,l,u,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class zv extends Jn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Ko extends ii{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const d=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],x=[];let _=0,M=0;T("z","y","x",-1,-1,a,t,e,u,l,0),T("z","y","x",1,-1,a,t,-e,u,l,1),T("x","z","y",1,1,e,a,t,s,u,2),T("x","z","y",1,-1,e,a,-t,s,u,3),T("x","y","z",1,-1,e,t,a,s,l,4),T("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(m),this.setAttribute("position",new bn(p,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(x,2));function T(b,y,S,D,z,C,L,P,I,w,U){const k=C/I,G=L/w,j=C/2,ie=L/2,H=P/2,ne=I+1,ae=w+1;let le=0,Y=0;const Z=new J;for(let K=0;K<ae;K++){const N=K*G-ie;for(let oe=0;oe<ne;oe++){const Te=oe*k-j;Z[b]=Te*D,Z[y]=N*z,Z[S]=H,p.push(Z.x,Z.y,Z.z),Z[b]=0,Z[y]=0,Z[S]=P>0?1:-1,v.push(Z.x,Z.y,Z.z),x.push(oe/I),x.push(1-K/w),le+=1}}for(let K=0;K<w;K++)for(let N=0;N<I;N++){const oe=_+N+ne*K,Te=_+N+ne*(K+1),Be=_+(N+1)+ne*(K+1),Xe=_+(N+1)+ne*K;m.push(oe,Te,Xe),m.push(Te,Be,Xe),Y+=6}d.addGroup(M,Y,U),M+=Y,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Zc extends ii{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,d=Math.floor(a),m=Math.floor(s),p=d+1,v=m+1,x=e/d,_=t/m,M=[],T=[],b=[],y=[];for(let S=0;S<v;S++){const D=S*_-u;for(let z=0;z<p;z++){const C=z*x-l;T.push(C,-D,0),b.push(0,0,1),y.push(z/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<d;D++){const z=D+p*S,C=D+p*(S+1),L=D+1+p*(S+1),P=D+1+p*S;M.push(z,C,P),M.push(C,L,P)}this.setIndex(M),this.setAttribute("position",new bn(T,3)),this.setAttribute("normal",new bn(b,3)),this.setAttribute("uv",new bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Zc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Uh extends ii{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const v=[],x=new J,_=new J,M=[],T=[],b=[],y=[];for(let S=0;S<=a;S++){const D=[],z=S/a,C=u+z*d,L=e*Math.cos(C),P=Math.sqrt(e*e-L*L);let I=0;S===0&&u===0?I=.5/t:S===a&&m===Math.PI&&(I=-.5/t);for(let w=0;w<=t;w++){const U=w/t,k=s+U*l;x.x=-P*Math.cos(k),x.y=L,x.z=P*Math.sin(k),T.push(x.x,x.y,x.z),_.copy(x).normalize(),b.push(_.x,_.y,_.z),y.push(U+I,1-z),D.push(p++)}v.push(D)}for(let S=0;S<a;S++)for(let D=0;D<t;D++){const z=v[S][D+1],C=v[S][D],L=v[S+1][D],P=v[S+1][D+1];(S!==0||u>0)&&M.push(z,C,P),(S!==a-1||m<Math.PI)&&M.push(C,L,P)}this.setIndex(M),this.setAttribute("position",new bn(T,3)),this.setAttribute("normal",new bn(b,3)),this.setAttribute("uv",new bn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Uh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Fh extends ii{constructor(e=1,t=.4,a=12,s=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:s,arc:l,thetaStart:u,thetaLength:d},a=Math.floor(a),s=Math.floor(s);const m=[],p=[],v=[],x=[],_=new J,M=new J,T=new J;for(let b=0;b<=a;b++){const y=u+b/a*d;for(let S=0;S<=s;S++){const D=S/s*l;M.x=(e+t*Math.cos(y))*Math.cos(D),M.y=(e+t*Math.cos(y))*Math.sin(D),M.z=t*Math.sin(y),p.push(M.x,M.y,M.z),_.x=e*Math.cos(D),_.y=e*Math.sin(D),T.subVectors(M,_).normalize(),v.push(T.x,T.y,T.z),x.push(S/s),x.push(b/a)}}for(let b=1;b<=a;b++)for(let y=1;y<=s;y++){const S=(s+1)*b+y-1,D=(s+1)*(b-1)+y-1,z=(s+1)*(b-1)+y,C=(s+1)*b+y;m.push(S,D,C),m.push(D,z,C)}this.setIndex(m),this.setAttribute("position",new bn(p,3)),this.setAttribute("normal",new bn(v,3)),this.setAttribute("uv",new bn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ks(i){const e={};for(const t in i){e[t]={};for(const a in i[t]){const s=i[t][a];if(Jg(s))s.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone();else if(Array.isArray(s))if(Jg(s[0])){const l=[];for(let u=0,d=s.length;u<d;u++)l[u]=s[u].clone();e[t][a]=l}else e[t][a]=s.slice();else e[t][a]=s}}return e}function ni(i){const e={};for(let t=0;t<i.length;t++){const a=ks(i[t]);for(const s in a)e[s]=a[s]}return e}function Jg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function DM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Hv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ot.workingColorSpace}const NM={clone:ks,merge:ni};var UM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,FM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class dr extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=UM,this.fragmentShader=FM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=DM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const a in e.uniforms){const s=e.uniforms[a];switch(this.uniforms[a]={},s.type){case"t":this.uniforms[a].value=t[s.value]||null;break;case"c":this.uniforms[a].value=new Ct().setHex(s.value);break;case"v2":this.uniforms[a].value=new ut().fromArray(s.value);break;case"v3":this.uniforms[a].value=new J().fromArray(s.value);break;case"v4":this.uniforms[a].value=new pn().fromArray(s.value);break;case"m3":this.uniforms[a].value=new xt().fromArray(s.value);break;case"m4":this.uniforms[a].value=new dn().fromArray(s.value);break;default:this.uniforms[a].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class OM extends dr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Vv extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Ct(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Ct(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=ah,this.normalScale=new ut(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ua,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class IM extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Wy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class kM extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Qg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(e0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!e0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function e0(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class zM{constructor(e,t,a){const s=this;let l=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(v){d++,l===!1&&s.onStart!==void 0&&s.onStart(v,u,d),l=!0},this.itemEnd=function(v){u++,s.onProgress!==void 0&&s.onProgress(v,u,d),u===d&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(v){s.onError!==void 0&&s.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return p.push(v,x),this},this.removeHandler=function(v){const x=p.indexOf(v);return x!==-1&&p.splice(x,2),this},this.getHandler=function(v){for(let x=0,_=p.length;x<_;x+=2){const M=p[x],T=p[x+1];if(M.global&&(M.lastIndex=0),M.test(v))return T}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const HM=new zM;class Oh{constructor(e){this.manager=e!==void 0?e:HM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Oh.DEFAULT_MATERIAL_NAME="__DEFAULT";const Cr={};class VM extends Error{constructor(e,t){super(e),this.response=t}}class GM extends Oh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Qg.get(`file:${e}`);if(l!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0);return}if(Cr[e]!==void 0){Cr[e].push({onLoad:t,onProgress:a,onError:s});return}Cr[e]=[],Cr[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&gt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=Cr[e],x=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=_?parseInt(_):0,T=M!==0;let b=0;const y=new ReadableStream({start(S){D();function D(){x.read().then(({done:z,value:C})=>{if(z)S.close();else{b+=C.byteLength;const L=new ProgressEvent("progress",{lengthComputable:T,loaded:b,total:M});for(let P=0,I=v.length;P<I;P++){const w=v[P];w.onProgress&&w.onProgress(L)}S.enqueue(C),D()}},z=>{S.error(z)})}}});return new Response(y)}else throw new VM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),_=x&&x[1]?x[1].toLowerCase():void 0,M=new TextDecoder(_);return p.arrayBuffer().then(T=>M.decode(T))}}}).then(p=>{Qg.add(`file:${e}`,p);const v=Cr[e];delete Cr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=Cr[e];if(v===void 0)throw this.manager.itemError(e),p;delete Cr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Gv extends In{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Ct(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class BM extends Gv{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Ct(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const lf=new dn,t0=new J,n0=new J;class WM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ut(512,512),this.mapType=yi,this.map=null,this.mapPass=null,this.matrix=new dn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Nh,this._frameExtents=new ut(1,1),this._viewportCount=1,this._viewports=[new pn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;t0.setFromMatrixPosition(e.matrixWorld),t.position.copy(t0),n0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(n0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,a,s){lf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(lf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=s?s.z/l.x:1,d=s?s.w/l.y:1,m=s?s.x/l.x:0,p=s?s.y/l.y:0;e.coordinateSystem===Yo||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(lf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const xc=new J,Sc=new ca,nr=new J;class Bv extends In{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new dn,this.projectionMatrix=new dn,this.projectionMatrixInverse=new dn,this.coordinateSystem=or,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(xc,Sc,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Sc,nr.set(1,1,1)).invert()}updateWorldMatrix(e,t,a=!1){super.updateWorldMatrix(e,t,a),this.matrixWorld.decompose(xc,Sc,nr),nr.x===1&&nr.y===1&&nr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(xc,Sc,nr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const ia=new J,i0=new ut,r0=new ut;class Li extends Bv{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=sh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return sh*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){ia.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(ia.x,ia.y).multiplyScalar(-e/ia.z),ia.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(ia.x,ia.y).multiplyScalar(-e/ia.z)}getViewSize(e,t){return this.getViewBounds(e,i0,r0),t.subVectors(r0,i0)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lc*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*s/m,t-=u.offsetY*a/p,s*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Ih extends Bv{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,d=s+t,m=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class XM extends WM{constructor(){super(new Ih(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class a0 extends Gv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(In.DEFAULT_UP),this.updateMatrix(),this.target=new In,this.shadow=new XM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ts=-90,ws=1;class $M extends In{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Li(Ts,ws,e,t);s.layers=this.layers,this.add(s);const l=new Li(Ts,ws,e,t);l.layers=this.layers,this.add(l);const u=new Li(Ts,ws,e,t);u.layers=this.layers,this.add(u);const d=new Li(Ts,ws,e,t);d.layers=this.layers,this.add(d);const m=new Li(Ts,ws,e,t);m.layers=this.layers,this.add(m);const p=new Li(Ts,ws,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,d,m]=t;for(const p of t)this.remove(p);if(e===or)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Yo)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,m,p,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),T=e.xr.enabled;e.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(a,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(a,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(a,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),a.texture.generateMipmaps=b,e.setRenderTarget(a,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,_,M),e.xr.enabled=T,a.texture.needsPMREMUpdate=!0}}class YM extends Li{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const s0=new dn;class qM{constructor(e,t,a=0,s=1/0){this.ray=new Lh(e,t),this.near=a,this.far=s,this.camera=null,this.layers=new bh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):It("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return s0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(s0),this}intersectObject(e,t=!0,a=[]){return oh(e,this,a,t),a.sort(o0),a}intersectObjects(e,t=!0,a=[]){for(let s=0,l=e.length;s<l;s++)oh(e[s],this,a,t);return a.sort(o0),a}}function o0(i,e){return i.distance-e.distance}function oh(i,e,t,a){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&a===!0){const l=i.children;for(let u=0,d=l.length;u<d;u++)oh(l[u],e,t,!0)}}class l0{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Dt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Dt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Bh=class Bh{constructor(e,t,a,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,a,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let a=0;a<4;a++)this.elements[a]=e[a+t];return this}set(e,t,a,s){const l=this.elements;return l[0]=e,l[2]=t,l[1]=a,l[3]=s,this}};Bh.prototype.isMatrix2=!0;let c0=Bh;class jM extends ha{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function u0(i,e,t,a){const s=KM(a);switch(t){case Cv:return i*e;case bv:return i*e/s.components*s.byteLength;case Eh:return i*e/s.components*s.byteLength;case Ha:return i*e*2/s.components*s.byteLength;case Th:return i*e*2/s.components*s.byteLength;case Rv:return i*e*3/s.components*s.byteLength;case ji:return i*e*4/s.components*s.byteLength;case wh:return i*e*4/s.components*s.byteLength;case Cc:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Pf:case Df:return Math.max(i,16)*Math.max(e,8)/4;case bf:case Lf:return Math.max(i,8)*Math.max(e,8)/2;case Nf:case Uf:case Of:case If:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Ff:case Oc:case kf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case zf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Wf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Xf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case $f:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Yf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case qf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case jf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Kf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Zf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Qf:case eh:case th:return Math.ceil(i/4)*Math.ceil(e/4)*16;case nh:case ih:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ic:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function KM(i){switch(i){case yi:case Ev:return{byteLength:1,components:1};case Xo:case Tv:case ur:return{byteLength:2,components:1};case yh:case Mh:return{byteLength:2,components:4};case cr:case Sh:case sr:return{byteLength:4,components:1};case wv:case Av:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:xh}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=xh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function Wv(){let i=null,e=!1,t=null,a=null;function s(l,u){a=i.requestAnimationFrame(s),t(l,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(a=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function ZM(i){const e=new WeakMap;function t(d,m){const p=d.array,v=d.usage,x=p.byteLength,_=i.createBuffer();i.bindBuffer(m,_),i.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=i.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const v=m.array,x=m.updateRanges;if(i.bindBuffer(p,d),x.length===0)i.bufferSubData(p,0,v);else{x.sort((M,T)=>M.start-T.start);let _=0;for(let M=1;M<x.length;M++){const T=x[_],b=x[M];b.start<=T.start+T.count+1?T.count=Math.max(T.count,b.start+b.count-T.start):(++_,x[_]=b)}x.length=_+1;for(let M=0,T=x.length;M<T;M++){const b=x[M];i.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(i.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:s,remove:l,update:u}}var JM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,QM=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,eE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,tE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,nE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,iE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,rE=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,aE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,sE=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,oE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,lE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,cE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,uE=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,dE=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,fE=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,hE=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,vE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,xE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,yE=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,ME=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,EE=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,TE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,AE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,RE="gl_FragColor = linearToOutputTexel( gl_FragColor );",bE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,PE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,LE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,UE=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,FE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,OE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,IE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,kE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,zE=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,HE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,VE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,GE=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,BE=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,WE=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,XE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,$E=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,YE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,qE=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,jE=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,KE=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,ZE=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,JE=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,QE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,eT=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,tT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,nT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,iT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,aT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,sT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,oT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,lT=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,cT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,uT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,dT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,fT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,hT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,pT=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,mT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,gT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,vT=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,_T=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,yT=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,MT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,ET=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,TT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,wT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,AT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,CT=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,RT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,bT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,PT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,LT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,DT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,NT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,UT=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,OT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,IT=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,kT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,zT=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,HT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,VT=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,GT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,BT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,WT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,XT=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,$T=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,YT=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,qT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,ZT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const JT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,QT=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ew=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,tw=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,nw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,iw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,rw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,aw=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,sw=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,ow=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,lw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,cw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uw=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,dw=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,fw=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,hw=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,pw=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,mw=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,gw=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,vw=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,_w=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,xw=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,Sw=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,yw=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Mw=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,Ew=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Tw=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ww=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,Aw=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,Cw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Rw=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,bw=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,Pw=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,Lw=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Tt={alphahash_fragment:JM,alphahash_pars_fragment:QM,alphamap_fragment:eE,alphamap_pars_fragment:tE,alphatest_fragment:nE,alphatest_pars_fragment:iE,aomap_fragment:rE,aomap_pars_fragment:aE,batching_pars_vertex:sE,batching_vertex:oE,begin_vertex:lE,beginnormal_vertex:cE,bsdfs:uE,iridescence_fragment:dE,bumpmap_pars_fragment:fE,clipping_planes_fragment:hE,clipping_planes_pars_fragment:pE,clipping_planes_pars_vertex:mE,clipping_planes_vertex:gE,color_fragment:vE,color_pars_fragment:_E,color_pars_vertex:xE,color_vertex:SE,common:yE,cube_uv_reflection_fragment:ME,defaultnormal_vertex:EE,displacementmap_pars_vertex:TE,displacementmap_vertex:wE,emissivemap_fragment:AE,emissivemap_pars_fragment:CE,colorspace_fragment:RE,colorspace_pars_fragment:bE,envmap_fragment:PE,envmap_common_pars_fragment:LE,envmap_pars_fragment:DE,envmap_pars_vertex:NE,envmap_physical_pars_fragment:WE,envmap_vertex:UE,fog_vertex:FE,fog_pars_vertex:OE,fog_fragment:IE,fog_pars_fragment:kE,gradientmap_pars_fragment:zE,lightmap_pars_fragment:HE,lights_lambert_fragment:VE,lights_lambert_pars_fragment:GE,lights_pars_begin:BE,lights_toon_fragment:XE,lights_toon_pars_fragment:$E,lights_phong_fragment:YE,lights_phong_pars_fragment:qE,lights_physical_fragment:jE,lights_physical_pars_fragment:KE,lights_fragment_begin:ZE,lights_fragment_maps:JE,lights_fragment_end:QE,lightprobes_pars_fragment:eT,logdepthbuf_fragment:tT,logdepthbuf_pars_fragment:nT,logdepthbuf_pars_vertex:iT,logdepthbuf_vertex:rT,map_fragment:aT,map_pars_fragment:sT,map_particle_fragment:oT,map_particle_pars_fragment:lT,metalnessmap_fragment:cT,metalnessmap_pars_fragment:uT,morphinstance_vertex:dT,morphcolor_vertex:fT,morphnormal_vertex:hT,morphtarget_pars_vertex:pT,morphtarget_vertex:mT,normal_fragment_begin:gT,normal_fragment_maps:vT,normal_pars_fragment:_T,normal_pars_vertex:xT,normal_vertex:ST,normalmap_pars_fragment:yT,clearcoat_normal_fragment_begin:MT,clearcoat_normal_fragment_maps:ET,clearcoat_pars_fragment:TT,iridescence_pars_fragment:wT,opaque_fragment:AT,packing:CT,premultiplied_alpha_fragment:RT,project_vertex:bT,dithering_fragment:PT,dithering_pars_fragment:LT,roughnessmap_fragment:DT,roughnessmap_pars_fragment:NT,shadowmap_pars_fragment:UT,shadowmap_pars_vertex:FT,shadowmap_vertex:OT,shadowmask_pars_fragment:IT,skinbase_vertex:kT,skinning_pars_vertex:zT,skinning_vertex:HT,skinnormal_vertex:VT,specularmap_fragment:GT,specularmap_pars_fragment:BT,tonemapping_fragment:WT,tonemapping_pars_fragment:XT,transmission_fragment:$T,transmission_pars_fragment:YT,uv_pars_fragment:qT,uv_pars_vertex:jT,uv_vertex:KT,worldpos_vertex:ZT,background_vert:JT,background_frag:QT,backgroundCube_vert:ew,backgroundCube_frag:tw,cube_vert:nw,cube_frag:iw,depth_vert:rw,depth_frag:aw,distance_vert:sw,distance_frag:ow,equirect_vert:lw,equirect_frag:cw,linedashed_vert:uw,linedashed_frag:dw,meshbasic_vert:fw,meshbasic_frag:hw,meshlambert_vert:pw,meshlambert_frag:mw,meshmatcap_vert:gw,meshmatcap_frag:vw,meshnormal_vert:_w,meshnormal_frag:xw,meshphong_vert:Sw,meshphong_frag:yw,meshphysical_vert:Mw,meshphysical_frag:Ew,meshtoon_vert:Tw,meshtoon_frag:ww,points_vert:Aw,points_frag:Cw,shadow_vert:Rw,shadow_frag:bw,sprite_vert:Pw,sprite_frag:Lw},Ve={common:{diffuse:{value:new Ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ut(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new Ct(16777215)},opacity:{value:1},center:{value:new ut(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},rr={basic:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.fog]),vertexShader:Tt.meshbasic_vert,fragmentShader:Tt.meshbasic_frag},lambert:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ct(0)},envMapIntensity:{value:1}}]),vertexShader:Tt.meshlambert_vert,fragmentShader:Tt.meshlambert_frag},phong:{uniforms:ni([Ve.common,Ve.specularmap,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,Ve.lights,{emissive:{value:new Ct(0)},specular:{value:new Ct(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphong_vert,fragmentShader:Tt.meshphong_frag},standard:{uniforms:ni([Ve.common,Ve.envmap,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.roughnessmap,Ve.metalnessmap,Ve.fog,Ve.lights,{emissive:{value:new Ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag},toon:{uniforms:ni([Ve.common,Ve.aomap,Ve.lightmap,Ve.emissivemap,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.gradientmap,Ve.fog,Ve.lights,{emissive:{value:new Ct(0)}}]),vertexShader:Tt.meshtoon_vert,fragmentShader:Tt.meshtoon_frag},matcap:{uniforms:ni([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,Ve.fog,{matcap:{value:null}}]),vertexShader:Tt.meshmatcap_vert,fragmentShader:Tt.meshmatcap_frag},points:{uniforms:ni([Ve.points,Ve.fog]),vertexShader:Tt.points_vert,fragmentShader:Tt.points_frag},dashed:{uniforms:ni([Ve.common,Ve.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Tt.linedashed_vert,fragmentShader:Tt.linedashed_frag},depth:{uniforms:ni([Ve.common,Ve.displacementmap]),vertexShader:Tt.depth_vert,fragmentShader:Tt.depth_frag},normal:{uniforms:ni([Ve.common,Ve.bumpmap,Ve.normalmap,Ve.displacementmap,{opacity:{value:1}}]),vertexShader:Tt.meshnormal_vert,fragmentShader:Tt.meshnormal_frag},sprite:{uniforms:ni([Ve.sprite,Ve.fog]),vertexShader:Tt.sprite_vert,fragmentShader:Tt.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Tt.background_vert,fragmentShader:Tt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Tt.backgroundCube_vert,fragmentShader:Tt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Tt.cube_vert,fragmentShader:Tt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Tt.equirect_vert,fragmentShader:Tt.equirect_frag},distance:{uniforms:ni([Ve.common,Ve.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Tt.distance_vert,fragmentShader:Tt.distance_frag},shadow:{uniforms:ni([Ve.lights,Ve.fog,{color:{value:new Ct(0)},opacity:{value:1}}]),vertexShader:Tt.shadow_vert,fragmentShader:Tt.shadow_frag}};rr.physical={uniforms:ni([rr.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ut(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new Ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ut},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new Ct(0)},specularColor:{value:new Ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ut},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Tt.meshphysical_vert,fragmentShader:Tt.meshphysical_frag};const yc={r:0,b:0,g:0},Dw=new dn,Xv=new xt;Xv.set(-1,0,0,0,1,0,0,0,1);function Nw(i,e,t,a,s,l){const u=new Ct(0);let d=s===!0?0:1,m,p,v=null,x=0,_=null;function M(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const C=D.backgroundBlurriness>0;z=e.get(z,C)}return z}function T(D){let z=!1;const C=M(D);C===null?y(u,d):C&&C.isColor&&(y(C,1),z=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(D,z){const C=M(z);C&&(C.isCubeTexture||C.mapping===Kc)?(p===void 0&&(p=new Mi(new Ko(1,1,1),new dr({name:"BackgroundCubeMaterial",uniforms:ks(rr.backgroundCube.uniforms),vertexShader:rr.backgroundCube.vertexShader,fragmentShader:rr.backgroundCube.fragmentShader,side:di,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=C,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Dw.makeRotationFromEuler(z.backgroundRotation)).transpose(),C.isCubeTexture&&C.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Xv),p.material.toneMapped=Ot.getTransfer(C.colorSpace)!==Kt,(v!==C||x!==C.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,v=C,x=C.version,_=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):C&&C.isTexture&&(m===void 0&&(m=new Mi(new Zc(2,2),new dr({name:"BackgroundMaterial",uniforms:ks(rr.background.uniforms),vertexShader:rr.background.vertexShader,fragmentShader:rr.background.fragmentShader,side:ka,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=C,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ot.getTransfer(C.colorSpace)!==Kt,C.matrixAutoUpdate===!0&&C.updateMatrix(),m.material.uniforms.uvTransform.value.copy(C.matrix),(v!==C||x!==C.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,v=C,x=C.version,_=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,z){D.getRGB(yc,Hv(i)),t.buffers.color.setClear(yc.r,yc.g,yc.b,z,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,z=1){u.set(D),d=z,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(u,d)},render:T,addToRenderList:b,dispose:S}}function Uw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function d(G,j,ie,H,ne){let ae=!1;const le=x(G,H,ie,j);l!==le&&(l=le,p(l.object)),ae=M(G,H,ie,ne),ae&&T(G,H,ie,ne),ne!==null&&e.update(ne,i.ELEMENT_ARRAY_BUFFER),(ae||u)&&(u=!1,C(G,j,ie,H),ne!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ne).buffer))}function m(){return i.createVertexArray()}function p(G){return i.bindVertexArray(G)}function v(G){return i.deleteVertexArray(G)}function x(G,j,ie,H){const ne=H.wireframe===!0;let ae=a[j.id];ae===void 0&&(ae={},a[j.id]=ae);const le=G.isInstancedMesh===!0?G.id:0;let Y=ae[le];Y===void 0&&(Y={},ae[le]=Y);let Z=Y[ie.id];Z===void 0&&(Z={},Y[ie.id]=Z);let K=Z[ne];return K===void 0&&(K=_(m()),Z[ne]=K),K}function _(G){const j=[],ie=[],H=[];for(let ne=0;ne<t;ne++)j[ne]=0,ie[ne]=0,H[ne]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ie,attributeDivisors:H,object:G,attributes:{},index:null}}function M(G,j,ie,H){const ne=l.attributes,ae=j.attributes;let le=0;const Y=ie.getAttributes();for(const Z in Y)if(Y[Z].location>=0){const N=ne[Z];let oe=ae[Z];if(oe===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(oe=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(oe=G.instanceColor)),N===void 0||N.attribute!==oe||oe&&N.data!==oe.data)return!0;le++}return l.attributesNum!==le||l.index!==H}function T(G,j,ie,H){const ne={},ae=j.attributes;let le=0;const Y=ie.getAttributes();for(const Z in Y)if(Y[Z].location>=0){let N=ae[Z];N===void 0&&(Z==="instanceMatrix"&&G.instanceMatrix&&(N=G.instanceMatrix),Z==="instanceColor"&&G.instanceColor&&(N=G.instanceColor));const oe={};oe.attribute=N,N&&N.data&&(oe.data=N.data),ne[Z]=oe,le++}l.attributes=ne,l.attributesNum=le,l.index=H}function b(){const G=l.newAttributes;for(let j=0,ie=G.length;j<ie;j++)G[j]=0}function y(G){S(G,0)}function S(G,j){const ie=l.newAttributes,H=l.enabledAttributes,ne=l.attributeDivisors;ie[G]=1,H[G]===0&&(i.enableVertexAttribArray(G),H[G]=1),ne[G]!==j&&(i.vertexAttribDivisor(G,j),ne[G]=j)}function D(){const G=l.newAttributes,j=l.enabledAttributes;for(let ie=0,H=j.length;ie<H;ie++)j[ie]!==G[ie]&&(i.disableVertexAttribArray(ie),j[ie]=0)}function z(G,j,ie,H,ne,ae,le){le===!0?i.vertexAttribIPointer(G,j,ie,ne,ae):i.vertexAttribPointer(G,j,ie,H,ne,ae)}function C(G,j,ie,H){b();const ne=H.attributes,ae=ie.getAttributes(),le=j.defaultAttributeValues;for(const Y in ae){const Z=ae[Y];if(Z.location>=0){let K=ne[Y];if(K===void 0&&(Y==="instanceMatrix"&&G.instanceMatrix&&(K=G.instanceMatrix),Y==="instanceColor"&&G.instanceColor&&(K=G.instanceColor)),K!==void 0){const N=K.normalized,oe=K.itemSize,Te=e.get(K);if(Te===void 0)continue;const Be=Te.buffer,Xe=Te.type,qe=Te.bytesPerElement,ue=Xe===i.INT||Xe===i.UNSIGNED_INT||K.gpuType===Sh;if(K.isInterleavedBufferAttribute){const pe=K.data,ye=pe.stride,Qe=K.offset;if(pe.isInstancedInterleavedBuffer){for(let Ce=0;Ce<Z.locationSize;Ce++)S(Z.location+Ce,pe.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let Ce=0;Ce<Z.locationSize;Ce++)y(Z.location+Ce);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let Ce=0;Ce<Z.locationSize;Ce++)z(Z.location+Ce,oe/Z.locationSize,Xe,N,ye*qe,(Qe+oe/Z.locationSize*Ce)*qe,ue)}else{if(K.isInstancedBufferAttribute){for(let pe=0;pe<Z.locationSize;pe++)S(Z.location+pe,K.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let pe=0;pe<Z.locationSize;pe++)y(Z.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let pe=0;pe<Z.locationSize;pe++)z(Z.location+pe,oe/Z.locationSize,Xe,N,oe*qe,oe/Z.locationSize*pe*qe,ue)}}else if(le!==void 0){const N=le[Y];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(Z.location,N);break;case 3:i.vertexAttrib3fv(Z.location,N);break;case 4:i.vertexAttrib4fv(Z.location,N);break;default:i.vertexAttrib1fv(Z.location,N)}}}}D()}function L(){U();for(const G in a){const j=a[G];for(const ie in j){const H=j[ie];for(const ne in H){const ae=H[ne];for(const le in ae)v(ae[le].object),delete ae[le];delete H[ne]}}delete a[G]}}function P(G){if(a[G.id]===void 0)return;const j=a[G.id];for(const ie in j){const H=j[ie];for(const ne in H){const ae=H[ne];for(const le in ae)v(ae[le].object),delete ae[le];delete H[ne]}}delete a[G.id]}function I(G){for(const j in a){const ie=a[j];for(const H in ie){const ne=ie[H];if(ne[G.id]===void 0)continue;const ae=ne[G.id];for(const le in ae)v(ae[le].object),delete ae[le];delete ne[G.id]}}}function w(G){for(const j in a){const ie=a[j],H=G.isInstancedMesh===!0?G.id:0,ne=ie[H];if(ne!==void 0){for(const ae in ne){const le=ne[ae];for(const Y in le)v(le[Y].object),delete le[Y];delete ne[ae]}delete ie[H],Object.keys(ie).length===0&&delete a[j]}}}function U(){k(),u=!0,l!==s&&(l=s,p(l.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:U,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:w,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:y,disableUnusedAttributes:D}}function Fw(i,e,t){let a;function s(m){a=m}function l(m,p){i.drawArrays(a,m,p),t.update(p,a,1)}function u(m,p,v){v!==0&&(i.drawArraysInstanced(a,m,p,v),t.update(p,a,v))}function d(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,a,1)}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function Ow(i,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==ji&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const w=I===ur&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==yi&&I!==sr&&!w&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=m(p);v!==p&&(gt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),T=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),C=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:T,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:C,maxSamples:L,samples:P}}function Iw(i){const e=this;let t=null,a=0,s=!1,l=!1;const u=new Rr,d=new xt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||a!==0||s;return s=_,a=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=v(x,_,0)},this.setState=function(x,_,M){const T=x.clippingPlanes,b=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!s||T===null||T.length===0||l&&!y)l?v(null):p();else{const D=l?0:a,z=D*4;let C=S.clippingState||null;m.value=C,C=v(T,_,z,M);for(let L=0;L!==z;++L)C[L]=t[L];S.clippingState=C,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(x,_,M,T){const b=x!==null?x.length:0;let y=null;if(b!==0){if(y=m.value,T!==!0||y===null){const S=M+b*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let z=0,C=M;z!==b;++z,C+=4)u.copy(x[z]).applyMatrix4(D,d),u.normal.toArray(y,C),y[C+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Ls=4,kw=6,zw=20,Hw=256,Po=new Ih,d0=new Ct;let cf=null,uf=0,df=0,ff=!1;const Vw=new J,La=new J;class f0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:d=Vw}=l;cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,s,m,d),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=m0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=p0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(cf,uf,df),this._renderer.xr.enabled=ff,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===za||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),cf=this._renderer.getRenderTarget(),uf=this._renderer.getActiveCubeFace(),df=this._renderer.getActiveMipmapLevel(),ff=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Zn,minFilter:Zn,generateMipmaps:!1,type:ur,format:ji,colorSpace:kc,depthBuffer:!1},s=h0(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=h0(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Gw(l)),this._blurMaterial=Ww(l,e,t),this._ggxMaterial=Bw(l,e,t)}return s}_compileMaterial(e){const t=new Mi(new ii,e);this._renderer.compile(t,Po)}_sceneToCubeUV(e,t,a,s,l){const m=new Li(90,1,t,a),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(d0),x.toneMapping=lr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Mi(new Ko,new Dh({name:"PMREM.Background",side:di,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,S=!0):(y.color.copy(d0),S=!0);for(let z=0;z<6;z++){const C=z%3;C===0?(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[z],l.y,l.z)):C===1?(m.up.set(0,0,p[z]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[z],l.z)):(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[z]));const L=this._cubeSize;As(s,C*L,z>2?L:0,L,L),x.setRenderTarget(s),S&&x.render(b,m),x.render(e,m)}x.toneMapping=M,x.autoClear=_,e.background=D}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===za||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=m0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=p0());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;As(t,0,0,3*m,2*m),a.setRenderTarget(t),a.render(u,Po)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),_=p*1.25,M=x*_,{_lodMax:T}=this,b=this._sizeLods[a],y=3*b*(a>T-Ls?a-T+Ls:0),S=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=T-t,As(l,y,S,3*b,2*b),s.setRenderTarget(l),s.render(d,Po),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=T-a,As(e,y,S,3*b,2*b),s.setRenderTarget(e),s.render(d,Po)}_blur(e,t,a,s){const l=this._pingPongRenderTarget,u=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,a,u),this._blurPass(l,e,a,a,u)}_blurPass(e,t,a,s,l){const u=this._renderer,d=this._blurMaterial,m=this._lodMeshes[s];m.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-a;const v=this._sizeLods[s],x=3*v*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),_=4*(this._cubeSize-v);As(t,x,_,3*v,2*v),u.setRenderTarget(t),u.render(m,Po)}}function Gw(i){const e=[],t=[];let a=i;const s=i-Ls+1+kw;for(let l=0;l<s;l++){const u=Math.pow(2,a);e.push(u);const d=1/(u-2),m=-d,p=1+d,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,_=6,M=3,T=new Float32Array(M*_*x),b=new Float32Array(M*_*x);for(let S=0;S<x;S++){const D=S%3*2/3-1,z=S>2?0:-1,C=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];T.set(C,M*_*S);for(let L=0;L<_;L++){const P=v[L*2]*2-1,I=v[L*2+1]*2-1;S===0?La.set(1,I,P):S===1?La.set(-P,1,-I):S===2?La.set(-P,I,1):S===3?La.set(-1,I,-P):S===4?La.set(-P,-1,I):La.set(P,I,-1),La.toArray(b,(S*_+L)*M)}}const y=new ii;y.setAttribute("position",new fi(T,M)),y.setAttribute("outputDirection",new fi(b,M)),t.push(new Mi(y,null)),a>Ls&&a--}return{lodMeshes:t,sizeLods:e}}function h0(i,e,t){const a=new Zi(i,e,t);return a.texture.mapping=Kc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function As(i,e,t,a,s){i.viewport.set(e,t,a,s),i.scissor.set(e,t,a,s)}function Bw(i,e,t){return new dr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Hw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Ww(i,e,t){return new dr({name:"SphericalGaussianBlur",defines:{SAMPLES:zw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Jc(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function p0(){return new dr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function m0(){return new dr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Jc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Lr,depthTest:!1,depthWrite:!1})}function Jc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class $v extends Zi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new kv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},s=new Ko(5,5,5),l=new dr({name:"CubemapFromEquirect",uniforms:ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:di,blending:Lr});l.uniforms.tEquirect.value=t;const u=new Mi(s,l),d=t.minFilter;return t.minFilter===Ua&&(t.minFilter=Zn),new $M(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}function Xw(i){let e=new WeakMap,t=new WeakMap,a=null;function s(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Fd||M===Od)if(e.has(_)){const T=e.get(_).texture;return d(T,_.mapping)}else{const T=_.image;if(T&&T.height>0){const b=new $v(T.height);return b.fromEquirectangularTexture(i,_),e.set(_,b),_.addEventListener("dispose",p),d(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,T=M===Fd||M===Od,b=M===za||M===Is;if(T||b){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new f0(i)),y=T?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const D=_.image;return T&&D&&D.height>0||b&&D&&m(D)?(a===null&&(a=new f0(i)),y=T?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",v),y.texture):null}}}return _}function d(_,M){return M===Fd?_.mapping=za:M===Od&&(_.mapping=Is),_}function m(_){let M=0;const T=6;for(let b=0;b<T;b++)_[b]!==void 0&&M++;return M===T}function p(_){const M=_.target;M.removeEventListener("dispose",p);const T=e.get(M);T!==void 0&&(e.delete(M),T.dispose())}function v(_){const M=_.target;M.removeEventListener("dispose",v);const T=t.get(M);T!==void 0&&(t.delete(M),T.dispose())}function x(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:x}}function $w(i){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=i.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&Ns("WebGLRenderer: "+a+" extension not supported."),s}}}function Yw(i,e,t,a){const s={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const T in _.attributes)e.remove(_.attributes[T]);_.removeEventListener("dispose",u),delete s[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(x,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)e.update(_[M],i.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,T=x.attributes.position;let b=0;if(T===void 0)return;if(M!==null){const D=M.array;b=M.version;for(let z=0,C=D.length;z<C;z+=3){const L=D[z+0],P=D[z+1],I=D[z+2];_.push(L,P,P,I,I,L)}}else{const D=T.array;b=T.version;for(let z=0,C=D.length/3-1;z<C;z+=3){const L=z+0,P=z+1,I=z+2;_.push(L,P,P,I,I,L)}}const y=new(T.count>=65535?Fv:Uv)(_,1);y.version=b;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function v(x){const _=l.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function qw(i,e,t){let a;function s(x){a=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function m(x,_){i.drawElements(a,_,l,x*u),t.update(_,a,1)}function p(x,_,M){M!==0&&(i.drawElementsInstanced(a,_,l,x*u,M),t.update(_,a,M))}function v(x,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,l,x,0,M);let b=0;for(let y=0;y<M;y++)b+=_[y];t.update(b,a,1)}this.setMode=s,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function jw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:It("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function Kw(i,e,t){const a=new WeakMap,s=new pn;function l(u,d,m){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let U=function(){I.dispose(),a.delete(d),d.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,T=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let z=0;M===!0&&(z=1),T===!0&&(z=2),b===!0&&(z=3);let C=d.attributes.position.count*z,L=1;C>e.maxTextureSize&&(L=Math.ceil(C/e.maxTextureSize),C=e.maxTextureSize);const P=new Float32Array(C*L*4*x),I=new Dv(P,C,L,x);I.type=sr,I.needsUpdate=!0;const w=z*4;for(let k=0;k<x;k++){const G=y[k],j=S[k],ie=D[k],H=C*L*4*k;for(let ne=0;ne<G.count;ne++){const ae=ne*w;M===!0&&(s.fromBufferAttribute(G,ne),P[H+ae+0]=s.x,P[H+ae+1]=s.y,P[H+ae+2]=s.z,P[H+ae+3]=0),T===!0&&(s.fromBufferAttribute(j,ne),P[H+ae+4]=s.x,P[H+ae+5]=s.y,P[H+ae+6]=s.z,P[H+ae+7]=0),b===!0&&(s.fromBufferAttribute(ie,ne),P[H+ae+8]=s.x,P[H+ae+9]=s.y,P[H+ae+10]=s.z,P[H+ae+11]=ie.itemSize===4?s.w:1)}}_={count:x,texture:I,size:new ut(C,L)},a.set(d,_),d.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const T=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(i,"morphTargetBaseInfluence",T),m.getUniforms().setValue(i,"morphTargetInfluences",p)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function Zw(i,e,t,a,s){let l=new WeakMap;function u(p){const v=s.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==v&&(e.update(_),l.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return _}function d(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const Jw={[mv]:"LINEAR_TONE_MAPPING",[gv]:"REINHARD_TONE_MAPPING",[vv]:"CINEON_TONE_MAPPING",[_v]:"ACES_FILMIC_TONE_MAPPING",[Sv]:"AGX_TONE_MAPPING",[yv]:"NEUTRAL_TONE_MAPPING",[xv]:"CUSTOM_TONE_MAPPING"};function Qw(i,e,t,a,s,l){const u=new Zi(e,t,{type:i,depthBuffer:s,stencilBuffer:l,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null;const p=new ii;p.setAttribute("position",new bn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new bn([0,2,0,0,2,0],2));const v=new OM({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),x=new Mi(p,v),_=new Ih(-1,1,1,-1,0,1);let M=null,T=null,b=!1,y,S=null,D=[],z=!1;this.setSize=function(C,L){u.setSize(C,L),d!==null&&d.setSize(C,L),m!==null&&m.setSize(C,L);for(let P=0;P<D.length;P++){const I=D[P];I.setSize&&I.setSize(C,L)}},this.setEffects=function(C){D=C,z=D.length>0&&D[0].isRenderPass===!0;const L=u.width,P=u.height;D.length>0&&d===null&&(d=new Zi(L,P,{type:ur,depthBuffer:!1,stencilBuffer:!1}),m=new Zi(L,P,{type:ur,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<D.length;I++){const w=D[I];w.setSize&&w.setSize(L,P)}},this.begin=function(C,L){if(b||C.toneMapping===lr&&D.length===0)return!1;if(S=L,L!==null){const P=L.width,I=L.height;(u.width!==P||u.height!==I)&&this.setSize(P,I)}return z===!1&&C.setRenderTarget(u),y=C.toneMapping,C.toneMapping=lr,!0},this.hasRenderPass=function(){return z},this.end=function(C,L){C.toneMapping=y,b=!0;let P=u,I=d;for(let w=0;w<D.length;w++){const U=D[w];U.enabled!==!1&&(U.render(C,I,P,L),U.needsSwap!==!1&&(P=I,I=I===d?m:d))}if(M!==C.outputColorSpace||T!==C.toneMapping){M=C.outputColorSpace,T=C.toneMapping,v.defines={},Ot.getTransfer(M)===Kt&&(v.defines.SRGB_TRANSFER="");const w=Jw[T];w&&(v.defines[w]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,C.setRenderTarget(S),C.render(x,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),p.dispose(),v.dispose()}}const Yv=new Jn,lh=new qo(1,1),qv=new Dv,jv=new uM,Kv=new kv,g0=[],v0=[],_0=new Float32Array(16),x0=new Float32Array(9),S0=new Float32Array(4);function Hs(i,e,t){const a=i[0];if(a<=0||a>0)return i;const s=e*t;let l=g0[s];if(l===void 0&&(l=new Float32Array(s),g0[s]=l),e!==0){a.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(l,d)}return l}function Pn(i,e){if(i.length!==e.length)return!1;for(let t=0,a=i.length;t<a;t++)if(i[t]!==e[t])return!1;return!0}function Ln(i,e){for(let t=0,a=e.length;t<a;t++)i[t]=e[t]}function Qc(i,e){let t=v0[e];t===void 0&&(t=new Int32Array(e),v0[e]=t);for(let a=0;a!==e;++a)t[a]=i.allocateTextureUnit();return t}function eA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function tA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2fv(this.addr,e),Ln(t,e)}}function nA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Pn(t,e))return;i.uniform3fv(this.addr,e),Ln(t,e)}}function iA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4fv(this.addr,e),Ln(t,e)}}function rA(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(Pn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,a))return;S0.set(a),i.uniformMatrix2fv(this.addr,!1,S0),Ln(t,a)}}function aA(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(Pn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,a))return;x0.set(a),i.uniformMatrix3fv(this.addr,!1,x0),Ln(t,a)}}function sA(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(Pn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Ln(t,e)}else{if(Pn(t,a))return;_0.set(a),i.uniformMatrix4fv(this.addr,!1,_0),Ln(t,a)}}function oA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function lA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2iv(this.addr,e),Ln(t,e)}}function cA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3iv(this.addr,e),Ln(t,e)}}function uA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4iv(this.addr,e),Ln(t,e)}}function dA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function fA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Pn(t,e))return;i.uniform2uiv(this.addr,e),Ln(t,e)}}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Pn(t,e))return;i.uniform3uiv(this.addr,e),Ln(t,e)}}function pA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Pn(t,e))return;i.uniform4uiv(this.addr,e),Ln(t,e)}}function mA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s);let l;this.type===i.SAMPLER_2D_SHADOW?(lh.compareFunction=t.isReversedDepthBuffer()?Ch:Ah,l=lh):l=Yv,t.setTexture2D(e||l,s)}function gA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||jv,s)}function vA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||Kv,s)}function _A(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||qv,s)}function xA(i){switch(i){case 5126:return eA;case 35664:return tA;case 35665:return nA;case 35666:return iA;case 35674:return rA;case 35675:return aA;case 35676:return sA;case 5124:case 35670:return oA;case 35667:case 35671:return lA;case 35668:case 35672:return cA;case 35669:case 35673:return uA;case 5125:return dA;case 36294:return fA;case 36295:return hA;case 36296:return pA;case 35678:case 36198:case 36298:case 36306:case 35682:return mA;case 35679:case 36299:case 36307:return gA;case 35680:case 36300:case 36308:case 36293:return vA;case 36289:case 36303:case 36311:case 36292:return _A}}function SA(i,e){i.uniform1fv(this.addr,e)}function yA(i,e){const t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function MA(i,e){const t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function EA(i,e){const t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function TA(i,e){const t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function wA(i,e){const t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function AA(i,e){const t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function CA(i,e){i.uniform1iv(this.addr,e)}function RA(i,e){i.uniform2iv(this.addr,e)}function bA(i,e){i.uniform3iv(this.addr,e)}function PA(i,e){i.uniform4iv(this.addr,e)}function LA(i,e){i.uniform1uiv(this.addr,e)}function DA(i,e){i.uniform2uiv(this.addr,e)}function NA(i,e){i.uniform3uiv(this.addr,e)}function UA(i,e){i.uniform4uiv(this.addr,e)}function FA(i,e,t){const a=this.cache,s=e.length,l=Qc(t,s);Pn(a,l)||(i.uniform1iv(this.addr,l),Ln(a,l));let u;this.type===i.SAMPLER_2D_SHADOW?u=lh:u=Yv;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,l[d])}function OA(i,e,t){const a=this.cache,s=e.length,l=Qc(t,s);Pn(a,l)||(i.uniform1iv(this.addr,l),Ln(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||jv,l[u])}function IA(i,e,t){const a=this.cache,s=e.length,l=Qc(t,s);Pn(a,l)||(i.uniform1iv(this.addr,l),Ln(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Kv,l[u])}function kA(i,e,t){const a=this.cache,s=e.length,l=Qc(t,s);Pn(a,l)||(i.uniform1iv(this.addr,l),Ln(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||qv,l[u])}function zA(i){switch(i){case 5126:return SA;case 35664:return yA;case 35665:return MA;case 35666:return EA;case 35674:return TA;case 35675:return wA;case 35676:return AA;case 5124:case 35670:return CA;case 35667:case 35671:return RA;case 35668:case 35672:return bA;case 35669:case 35673:return PA;case 5125:return LA;case 36294:return DA;case 36295:return NA;case 36296:return UA;case 35678:case 36198:case 36298:case 36306:case 35682:return FA;case 35679:case 36299:case 36307:return OA;case 35680:case 36300:case 36308:case 36293:return IA;case 36289:case 36303:case 36311:case 36292:return kA}}class HA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=xA(t.type)}}class VA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=zA(t.type)}}class GA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const d=s[l];d.setValue(e,t[d.id],a)}}}const hf=/(\w+)(\])?(\[|\.)?/g;function y0(i,e){i.seq.push(e),i.map[e.id]=e}function BA(i,e,t){const a=i.name,s=a.length;for(hf.lastIndex=0;;){const l=hf.exec(a),u=hf.lastIndex;let d=l[1];const m=l[2]==="]",p=l[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===s){y0(t,p===void 0?new HA(d,i,e):new VA(d,i,e));break}else{let x=t.map[d];x===void 0&&(x=new GA(d),y0(t,x)),t=x}}}class Dc{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(t,u),m=e.getUniformLocation(t,d.name);BA(d,m,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const d=t[l],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function M0(i,e,t){const a=i.createShader(e);return i.shaderSource(a,t),i.compileShader(a),a}const WA=37297;let XA=0;function $A(i,e){const t=i.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return a.join(`
`)}const E0=new xt;function YA(i){Ot._getMatrix(E0,Ot.workingColorSpace,i);const e=`mat3( ${E0.elements.map(t=>t.toFixed(4))} )`;switch(Ot.getTransfer(i)){case zc:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function T0(i,e,t){const a=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+$A(i.getShaderSource(e),d)}else return l}function qA(i,e){const t=YA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const jA={[mv]:"Linear",[gv]:"Reinhard",[vv]:"Cineon",[_v]:"ACESFilmic",[Sv]:"AgX",[yv]:"Neutral",[xv]:"Custom"};function KA(i,e){const t=jA[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Mc=new J;function ZA(){Ot.getLuminanceCoefficients(Mc);const i=Mc.x.toFixed(4),e=Mc.y.toFixed(4),t=Mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function JA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Oo).join(`
`)}function QA(i){const e=[];for(const t in i){const a=i[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function eC(i,e){const t={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=i.getActiveAttrib(e,s),u=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function Oo(i){return i!==""}function w0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function A0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const tC=/^[ \t]*#include +<([\w\d./]+)>/gm;function ch(i){return i.replace(tC,iC)}const nC=new Map;function iC(i,e){let t=Tt[e];if(t===void 0){const a=nC.get(e);if(a!==void 0)t=Tt[a],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ch(t)}const rC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function C0(i){return i.replace(rC,aC)}function aC(i,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function R0(i){let e=`precision ${i.precision} float;
	precision ${i.precision} int;
	precision ${i.precision} sampler2D;
	precision ${i.precision} samplerCube;
	precision ${i.precision} sampler3D;
	precision ${i.precision} sampler2DArray;
	precision ${i.precision} sampler2DShadow;
	precision ${i.precision} samplerCubeShadow;
	precision ${i.precision} sampler2DArrayShadow;
	precision ${i.precision} isampler2D;
	precision ${i.precision} isampler3D;
	precision ${i.precision} isamplerCube;
	precision ${i.precision} isampler2DArray;
	precision ${i.precision} usampler2D;
	precision ${i.precision} usampler3D;
	precision ${i.precision} usamplerCube;
	precision ${i.precision} usampler2DArray;
	`;return i.precision==="highp"?e+=`
#define HIGH_PRECISION`:i.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:i.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const sC={[Ac]:"SHADOWMAP_TYPE_PCF",[Uo]:"SHADOWMAP_TYPE_VSM"};function oC(i){return sC[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const lC={[za]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[Kc]:"ENVMAP_TYPE_CUBE_UV"};function cC(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":lC[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const uC={[Is]:"ENVMAP_MODE_REFRACTION"};function dC(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":uC[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const fC={[pv]:"ENVMAP_BLENDING_MULTIPLY",[Vy]:"ENVMAP_BLENDING_MIX",[Gy]:"ENVMAP_BLENDING_ADD"};function hC(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":fC[i.combine]||"ENVMAP_BLENDING_NONE"}function pC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function mC(i,e,t,a){const s=i.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const m=oC(t),p=cC(t),v=dC(t),x=hC(t),_=pC(t),M=JA(t),T=QA(l),b=s.createProgram();let y,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Oo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T].filter(Oo).join(`
`),S.length>0&&(S+=`
`)):(y=[R0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Oo).join(`
`),S=[R0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,T,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==lr?"#define TONE_MAPPING":"",t.toneMapping!==lr?Tt.tonemapping_pars_fragment:"",t.toneMapping!==lr?KA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Tt.colorspace_pars_fragment,qA("linearToOutputTexel",t.outputColorSpace),ZA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Oo).join(`
`)),u=ch(u),u=w0(u,t),u=A0(u,t),d=ch(d),d=w0(d,t),d=A0(d,t),u=C0(u),d=C0(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Ug?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Ug?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=D+y+u,C=D+S+d,L=M0(s,s.VERTEX_SHADER,z),P=M0(s,s.FRAGMENT_SHADER,C);s.attachShader(b,L),s.attachShader(b,P),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(G){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(b)||"",ie=s.getShaderInfoLog(L)||"",H=s.getShaderInfoLog(P)||"",ne=j.trim(),ae=ie.trim(),le=H.trim();let Y=!0,Z=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(Y=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,L,P);else{const K=T0(s,L,"vertex"),N=T0(s,P,"fragment");It("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ne+`
`+K+`
`+N)}else ne!==""?gt("WebGLProgram: Program Info Log:",ne):(ae===""||le==="")&&(Z=!1);Z&&(G.diagnostics={runnable:Y,programLog:ne,vertexShader:{log:ae,prefix:y},fragmentShader:{log:le,prefix:S}})}s.deleteShader(L),s.deleteShader(P),w=new Dc(s,b),U=eC(s,b)}let w;this.getUniforms=function(){return w===void 0&&I(this),w};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(b,WA)),k},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=XA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let gC=0;class vC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,a){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new _C(e),t.set(e,a)),a}}class _C{constructor(e){this.id=gC++,this.code=e,this.usedTimes=0}}function xC(i){return i===Ha||i===Oc||i===Ic}function SC(i,e,t,a,s,l){const u=new bh,d=new vC,m=new Set,p=[],v=new Map,x=a.logarithmicDepthBuffer;let _=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function T(w){return m.add(w),w===0?"uv":`uv${w}`}function b(w,U,k,G,j,ie){const H=G.fog,ne=j.geometry,ae=w.isMeshStandardMaterial||w.isMeshLambertMaterial||w.isMeshPhongMaterial?G.environment:null,le=w.isMeshStandardMaterial||w.isMeshLambertMaterial&&!w.envMap||w.isMeshPhongMaterial&&!w.envMap,Y=e.get(w.envMap||ae,le),Z=Y&&Y.mapping===Kc?Y.image.height:null,K=M[w.type];w.precision!==null&&(_=a.getMaxPrecision(w.precision),_!==w.precision&&gt("WebGLProgram.getParameters:",w.precision,"not supported, using",_,"instead."));const N=ne.morphAttributes.position||ne.morphAttributes.normal||ne.morphAttributes.color,oe=N!==void 0?N.length:0;let Te=0;ne.morphAttributes.position!==void 0&&(Te=1),ne.morphAttributes.normal!==void 0&&(Te=2),ne.morphAttributes.color!==void 0&&(Te=3);let Be,Xe,qe,ue;if(K){const Me=rr[K];Be=Me.vertexShader,Xe=Me.fragmentShader}else{Be=w.vertexShader,Xe=w.fragmentShader;const Me=d.getVertexShaderStage(w),xe=d.getFragmentShaderStage(w);d.update(w,Me,xe),qe=Me.id,ue=xe.id}const pe=i.getRenderTarget(),ye=i.state.buffers.depth.getReversed(),Qe=j.isInstancedMesh===!0,Ce=j.isBatchedMesh===!0,Ze=!!w.map,wt=!!w.matcap,$e=!!Y,At=!!w.aoMap,Rt=!!w.lightMap,St=!!w.bumpMap&&w.wireframe===!1,Wt=!!w.normalMap,sn=!!w.displacementMap,on=!!w.emissiveMap,bt=!!w.metalnessMap,Yt=!!w.roughnessMap,X=w.anisotropy>0,mn=w.clearcoat>0,Lt=w.dispersion>0,F=w.retroreflectivity>0,E=w.iridescence>0,Q=w.sheen>0,ce=w.transmission>0,me=X&&!!w.anisotropyMap,Re=mn&&!!w.clearcoatMap,De=mn&&!!w.clearcoatNormalMap,ge=mn&&!!w.clearcoatRoughnessMap,_e=E&&!!w.iridescenceMap,Ue=E&&!!w.iridescenceThicknessMap,Je=Q&&!!w.sheenColorMap,Fe=Q&&!!w.sheenRoughnessMap,Le=!!w.specularMap,et=!!w.specularColorMap,at=!!w.specularIntensityMap,ht=ce&&!!w.transmissionMap,B=ce&&!!w.thicknessMap,Oe=!!w.gradientMap,ve=!!w.alphaMap,Ne=w.alphaTest>0,ke=!!w.alphaHash,Se=!!w.extensions;let it=lr;w.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(it=i.toneMapping);const $={shaderID:K,shaderType:w.type,shaderName:w.name,vertexShader:Be,fragmentShader:Xe,defines:w.defines,customVertexShaderID:qe,customFragmentShaderID:ue,isRawShaderMaterial:w.isRawShaderMaterial===!0,glslVersion:w.glslVersion,precision:_,batching:Ce,batchingColor:Ce&&j._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&j.instanceColor!==null,instancingMorph:Qe&&j.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:Ot.workingColorSpace,alphaToCoverage:!!w.alphaToCoverage,map:Ze,matcap:wt,envMap:$e,envMapMode:$e&&Y.mapping,envMapCubeUVHeight:Z,aoMap:At,lightMap:Rt,bumpMap:St,normalMap:Wt,displacementMap:sn,emissiveMap:on,normalMapObjectSpace:Wt&&w.normalMapType===Xy,normalMapTangentSpace:Wt&&w.normalMapType===ah,packedNormalMap:Wt&&w.normalMapType===ah&&xC(w.normalMap.format),metalnessMap:bt,roughnessMap:Yt,anisotropy:X,anisotropyMap:me,clearcoat:mn,clearcoatMap:Re,clearcoatNormalMap:De,clearcoatRoughnessMap:ge,dispersion:Lt,retroreflection:F,iridescence:E,iridescenceMap:_e,iridescenceThicknessMap:Ue,sheen:Q,sheenColorMap:Je,sheenRoughnessMap:Fe,specularMap:Le,specularColorMap:et,specularIntensityMap:at,transmission:ce,transmissionMap:ht,thicknessMap:B,gradientMap:Oe,opaque:w.transparent===!1&&w.blending===zo&&w.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ne,alphaHash:ke,combine:w.combine,mapUv:Ze&&T(w.map.channel),aoMapUv:At&&T(w.aoMap.channel),lightMapUv:Rt&&T(w.lightMap.channel),bumpMapUv:St&&T(w.bumpMap.channel),normalMapUv:Wt&&T(w.normalMap.channel),displacementMapUv:sn&&T(w.displacementMap.channel),emissiveMapUv:on&&T(w.emissiveMap.channel),metalnessMapUv:bt&&T(w.metalnessMap.channel),roughnessMapUv:Yt&&T(w.roughnessMap.channel),anisotropyMapUv:me&&T(w.anisotropyMap.channel),clearcoatMapUv:Re&&T(w.clearcoatMap.channel),clearcoatNormalMapUv:De&&T(w.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&T(w.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&T(w.iridescenceMap.channel),iridescenceThicknessMapUv:Ue&&T(w.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&T(w.sheenColorMap.channel),sheenRoughnessMapUv:Fe&&T(w.sheenRoughnessMap.channel),specularMapUv:Le&&T(w.specularMap.channel),specularColorMapUv:et&&T(w.specularColorMap.channel),specularIntensityMapUv:at&&T(w.specularIntensityMap.channel),transmissionMapUv:ht&&T(w.transmissionMap.channel),thicknessMapUv:B&&T(w.thicknessMap.channel),alphaMapUv:ve&&T(w.alphaMap.channel),vertexTangents:!!ne.attributes.tangent&&(Wt||X),vertexNormals:!!ne.attributes.normal,vertexColors:w.vertexColors,vertexAlphas:w.vertexColors===!0&&!!ne.attributes.color&&ne.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ne.attributes.uv&&(Ze||ve),fog:!!H,useFog:w.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:w.wireframe===!1&&(w.flatShading===!0||ne.attributes.normal===void 0&&Wt===!1&&(w.isMeshLambertMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isMeshPhysicalMaterial)),sizeAttenuation:w.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ye,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:ne.attributes.position!==void 0,morphTargets:ne.morphAttributes.position!==void 0,morphNormals:ne.morphAttributes.normal!==void 0,morphColors:ne.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Te,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:w.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:Ze&&w.map.isVideoTexture===!0&&Ot.getTransfer(w.map.colorSpace)===Kt,decodeVideoTextureEmissive:on&&w.emissiveMap.isVideoTexture===!0&&Ot.getTransfer(w.emissiveMap.colorSpace)===Kt,premultipliedAlpha:w.premultipliedAlpha,doubleSided:w.side===qi,flipSided:w.side===di,useDepthPacking:w.depthPacking>=0,depthPacking:w.depthPacking||0,index0AttributeName:w.index0AttributeName,extensionClipCullDistance:Se&&w.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(Se&&w.extensions.multiDraw===!0||Ce)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:w.customProgramCacheKey()};return $.vertexUv1s=m.has(1),$.vertexUv2s=m.has(2),$.vertexUv3s=m.has(3),m.clear(),$}function y(w){const U=[];if(w.shaderID?U.push(w.shaderID):(U.push(w.customVertexShaderID),U.push(w.customFragmentShaderID)),w.defines!==void 0)for(const k in w.defines)U.push(k),U.push(w.defines[k]);return w.isRawShaderMaterial===!1&&(S(U,w),D(U,w),U.push(i.outputColorSpace)),U.push(w.customProgramCacheKey),U.join()}function S(w,U){w.push(U.precision),w.push(U.outputColorSpace),w.push(U.envMapMode),w.push(U.envMapCubeUVHeight),w.push(U.mapUv),w.push(U.alphaMapUv),w.push(U.lightMapUv),w.push(U.aoMapUv),w.push(U.bumpMapUv),w.push(U.normalMapUv),w.push(U.displacementMapUv),w.push(U.emissiveMapUv),w.push(U.metalnessMapUv),w.push(U.roughnessMapUv),w.push(U.anisotropyMapUv),w.push(U.clearcoatMapUv),w.push(U.clearcoatNormalMapUv),w.push(U.clearcoatRoughnessMapUv),w.push(U.iridescenceMapUv),w.push(U.iridescenceThicknessMapUv),w.push(U.sheenColorMapUv),w.push(U.sheenRoughnessMapUv),w.push(U.specularMapUv),w.push(U.specularColorMapUv),w.push(U.specularIntensityMapUv),w.push(U.transmissionMapUv),w.push(U.thicknessMapUv),w.push(U.combine),w.push(U.fogExp2),w.push(U.sizeAttenuation),w.push(U.morphTargetsCount),w.push(U.morphAttributeCount),w.push(U.numSunLights),w.push(U.numDirLights),w.push(U.numPointLights),w.push(U.numSpotLights),w.push(U.numSpotLightMaps),w.push(U.numHemiLights),w.push(U.numRectAreaLights),w.push(U.numSunLightShadows),w.push(U.numDirLightShadows),w.push(U.numPointLightShadows),w.push(U.numSpotLightShadows),w.push(U.numSpotLightShadowsWithMaps),w.push(U.numLightProbes),w.push(U.shadowMapType),w.push(U.toneMapping),w.push(U.numClippingPlanes),w.push(U.numClipIntersection),w.push(U.depthPacking)}function D(w,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.retroreflection&&u.enable(24),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),w.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),w.push(u.mask)}function z(w){const U=M[w.type];let k;if(U){const G=rr[U];k=NM.clone(G.uniforms)}else k=w.uniforms;return k}function C(w,U){let k=v.get(U);return k!==void 0?++k.usedTimes:(k=new mC(i,U,w,s),p.push(k),v.set(U,k)),k}function L(w){if(--w.usedTimes===0){const U=p.indexOf(w);p[U]=p[p.length-1],p.pop(),v.delete(w.cacheKey),w.destroy()}}function P(w){d.remove(w)}function I(){d.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:z,acquireProgram:C,releaseProgram:L,releaseShaderCache:P,programs:p,dispose:I}}function yC(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function a(u){i.delete(u)}function s(u,d,m){i.get(u)[d]=m}function l(){i=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function MC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function b0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function P0(){const i=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,T,b,y,S){let D=i[e];return D===void 0?(D={id:_.id,object:_,geometry:M,material:T,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:y,group:S},i[e]=D):(D.id=_.id,D.object=_,D.geometry=M,D.material=T,D.materialVariant=u(_),D.groupOrder=b,D.renderOrder=_.renderOrder,D.z=y,D.group=S),e++,D}function m(_,M,T,b,y,S,D){D.reversedDepth===!0&&(y=-y);const z=d(_,M,T,b,y,S);T.transmission>0?a.push(z):T.transparent===!0?s.push(z):t.push(z)}function p(_,M,T,b,y,S){const D=d(_,M,T,b,y,S);T.transmission>0?a.unshift(D):T.transparent===!0?s.unshift(D):t.unshift(D)}function v(_,M){t.length>1&&t.sort(_||MC),a.length>1&&a.sort(M||b0),s.length>1&&s.sort(M||b0)}function x(){for(let _=e,M=i.length;_<M;_++){const T=i[_];if(T.id===null)break;T.id=null,T.object=null,T.geometry=null,T.material=null,T.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:m,unshift:p,finish:x,sort:v}}function EC(){let i=new WeakMap;function e(a,s){const l=i.get(a);let u;return l===void 0?(u=new P0,i.set(a,[u])):s>=l.length?(u=new P0,l.push(u)):u=l[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function TC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new Ct};break;case"SpotLight":t={position:new J,direction:new J,color:new Ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Ct,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Ct,groundColor:new Ct};break;case"RectAreaLight":t={color:new Ct,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function wC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ut,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let AC=0;function CC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function RC(i){const e=new TC,t=wC(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new J);const s=new J,l=new dn,u=new dn;function d(p){let v=0,x=0,_=0;for(let j=0;j<9;j++)a.probe[j].set(0,0,0);let M=0,T=0,b=0,y=0,S=0,D=0,z=0,C=0,L=0,P=0,I=0,w=0,U=0,k=0;p.sort(CC);for(let j=0,ie=p.length;j<ie;j++){const H=p[j],ne=H.color,ae=H.intensity,le=H.distance;let Y=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Ha?Y=H.shadow.map.texture:Y=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=ne.r*ae,x+=ne.g*ae,_+=ne.b*ae;else if(H.isLightProbe){for(let Z=0;Z<9;Z++)a.probe[Z].addScaledVector(H.sh.coefficients[Z],ae);k++}else if(H.isSunLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize.copy(K.mapSize).multiply(K.getFrameExtents()),a.sunShadow[T]=N,a.sunShadowMap[T]=Y;const oe=K.getViewportCount();for(let Te=0;Te<oe;Te++)a.sunShadowMatrix[b+Te]=K.getMatrix(Te),a.sunShadowCascade[b+Te]=K._cascadeData[Te];b+=oe,T++}a.sun[M]=Z,M++}else if(H.isDirectionalLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const K=H.shadow,N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,a.directionalShadow[y]=N,a.directionalShadowMap[y]=Y,a.directionalShadowMatrix[y]=H.shadow.matrix,L++}a.directional[y]=Z,y++}else if(H.isSpotLight){const Z=e.get(H);Z.position.setFromMatrixPosition(H.matrixWorld),Z.color.copy(ne).multiplyScalar(ae),Z.distance=le,Z.coneCos=Math.cos(H.angle),Z.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),Z.decay=H.decay,a.spot[D]=Z;const K=H.shadow;if(H.map&&(a.spotLightMap[w]=H.map,w++,K.updateMatrices(H),H.castShadow&&U++),a.spotLightMatrix[D]=K.matrix,H.castShadow){const N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,a.spotShadow[D]=N,a.spotShadowMap[D]=Y,I++}D++}else if(H.isRectAreaLight){const Z=e.get(H);Z.color.copy(ne).multiplyScalar(ae),Z.halfWidth.set(H.width*.5,0,0),Z.halfHeight.set(0,H.height*.5,0),a.rectArea[z]=Z,z++}else if(H.isPointLight){const Z=e.get(H);if(Z.color.copy(H.color).multiplyScalar(H.intensity),Z.distance=H.distance,Z.decay=H.decay,H.castShadow){const K=H.shadow,N=t.get(H);N.shadowIntensity=K.intensity,N.shadowBias=K.bias,N.shadowNormalBias=K.normalBias,N.shadowRadius=K.radius,N.shadowMapSize=K.mapSize,N.shadowCameraNear=K.camera.near,N.shadowCameraFar=K.camera.far,a.pointShadow[S]=N,a.pointShadowMap[S]=Y,a.pointShadowMatrix[S]=H.shadow.matrix,P++}a.point[S]=Z,S++}else if(H.isHemisphereLight){const Z=e.get(H);Z.skyColor.copy(H.color).multiplyScalar(ae),Z.groundColor.copy(H.groundColor).multiplyScalar(ae),a.hemi[C]=Z,C++}}z>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ve.LTC_FLOAT_1,a.rectAreaLTC2=Ve.LTC_FLOAT_2):(a.rectAreaLTC1=Ve.LTC_HALF_1,a.rectAreaLTC2=Ve.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=_;const G=a.hash;(G.sunLength!==M||G.directionalLength!==y||G.pointLength!==S||G.spotLength!==D||G.rectAreaLength!==z||G.hemiLength!==C||G.numSunShadows!==T||G.numDirectionalShadows!==L||G.numPointShadows!==P||G.numSpotShadows!==I||G.numSpotMaps!==w||G.numLightProbes!==k)&&(a.sun.length=M,a.directional.length=y,a.spot.length=D,a.rectArea.length=z,a.point.length=S,a.hemi.length=C,a.sunShadow.length=T,a.sunShadowMap.length=T,a.sunShadowMatrix.length=b,a.sunShadowCascade.length=b,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.directionalShadowMatrix.length=L,a.pointShadow.length=P,a.pointShadowMap.length=P,a.pointShadowMatrix.length=P,a.spotShadow.length=I,a.spotShadowMap.length=I,a.spotLightMatrix.length=I+w-U,a.spotLightMap.length=w,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=k,G.sunLength=M,G.directionalLength=y,G.pointLength=S,G.spotLength=D,G.rectAreaLength=z,G.hemiLength=C,G.numSunShadows=T,G.numDirectionalShadows=L,G.numPointShadows=P,G.numSpotShadows=I,G.numSpotMaps=w,G.numLightProbes=k,a.version=AC++)}function m(p,v){let x=0,_=0,M=0,T=0,b=0,y=0;const S=v.matrixWorldInverse;for(let D=0,z=p.length;D<z;D++){const C=p[D];if(C.isSunLight){const L=a.sun[x];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),x++}else if(C.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),_++}else if(C.isSpotLight){const L=a.spot[T];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(C.matrixWorld),s.setFromMatrixPosition(C.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),T++}else if(C.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),u.identity(),l.copy(C.matrixWorld),l.premultiply(S),u.extractRotation(l),L.halfWidth.set(C.width*.5,0,0),L.halfHeight.set(0,C.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(C.isPointLight){const L=a.point[M];L.position.setFromMatrixPosition(C.matrixWorld),L.position.applyMatrix4(S),M++}else if(C.isHemisphereLight){const L=a.hemi[y];L.direction.setFromMatrixPosition(C.matrixWorld),L.direction.transformDirection(S),y++}}}return{setup:d,setupView:m,state:a}}function L0(i){const e=new RC(i),t=[],a=[],s=[];function l(_){x.camera=_,t.length=0,a.length=0,s.length=0}function u(_){t.push(_)}function d(_){a.push(_)}function m(_){s.push(_)}function p(){e.setup(t)}function v(_){e.setupView(t,_)}const x={lightsArray:t,shadowsArray:a,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function bC(i){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let d;return u===void 0?(d=new L0(i),e.set(s,[d])):l>=u.length?(d=new L0(i),u.push(d)):d=u[l],d}function a(){e=new WeakMap}return{get:t,dispose:a}}const PC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,LC=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,DC=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],NC=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],D0=new dn,Lo=new J,pf=new J;function UC(i,e,t){let a=new Nh;const s=new ut,l=new ut,u=new pn,d=new IM,m=new kM,p={},v=t.maxTextureSize,x={[ka]:di,[di]:ka,[qi]:qi},_=new dr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ut},radius:{value:4}},vertexShader:PC,fragmentShader:LC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const T=new ii;T.setAttribute("position",new fi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new Mi(T,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let S=this.type;this.render=function(P,I,w){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===My&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ac);const U=i.getRenderTarget(),k=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),j=i.state;j.setBlending(Lr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ie=S!==this.type;ie&&I.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(ne=>ne.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,ne=P.length;H<ne;H++){const ae=P[H],le=ae.shadow;if(le===void 0){gt("WebGLShadowMap:",ae,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;s.copy(le.mapSize);const Y=le.getFrameExtents();s.multiply(Y),l.copy(le.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(l.x=Math.floor(v/Y.x),s.x=l.x*Y.x,le.mapSize.x=l.x),s.y>v&&(l.y=Math.floor(v/Y.y),s.y=l.y*Y.y,le.mapSize.y=l.y));const Z=i.state.buffers.depth.getReversed();if(le.camera._reversedDepth=Z,le.map===null||ie===!0){if(le.map!==null&&(le.map.depthTexture!==null&&(le.map.depthTexture.dispose(),le.map.depthTexture=null),le.map.dispose()),this.type===Uo){if(ae.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}le.map=new Zi(s.x,s.y,{format:Ha,type:ur,minFilter:Zn,magFilter:Zn,generateMipmaps:!1}),le.map.texture.name=ae.name+".shadowMap",le.map.depthTexture=new qo(s.x,s.y,sr),le.map.depthTexture.name=ae.name+".shadowMapDepth",le.map.depthTexture.format=Nr,le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=Vn,le.map.depthTexture.magFilter=Vn}else ae.isPointLight?(le.map=new $v(s.x),le.map.depthTexture=new LM(s.x,cr)):(le.map=new Zi(s.x,s.y),le.map.depthTexture=new qo(s.x,s.y,cr)),le.map.depthTexture.name=ae.name+".shadowMap",le.map.depthTexture.format=Nr,this.type===Ac?(le.map.depthTexture.compareFunction=Z?Ch:Ah,le.map.depthTexture.minFilter=Zn,le.map.depthTexture.magFilter=Zn):(le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=Vn,le.map.depthTexture.magFilter=Vn);le.camera.updateProjectionMatrix()}le.map.isWebGLCubeRenderTarget!==!0&&(le.map.width!==s.x||le.map.height!==s.y)&&le.map.setSize(s.x,s.y);const K=le.map.isWebGLCubeRenderTarget?6:le.getViewportCount();ae.isPointLight!==!0&&le.updateMatrices(ae,w);for(let N=0;N<K;N++){const oe=le.getCamera(N);if(ae.isPointLight){const Te=le.camera,Be=le.matrix,Xe=ae.distance||Te.far;Xe!==Te.far&&(Te.far=Xe,Te.updateProjectionMatrix()),Lo.setFromMatrixPosition(ae.matrixWorld),Te.position.copy(Lo),pf.copy(Te.position),pf.add(DC[N]),Te.up.copy(NC[N]),Te.lookAt(pf),Te.updateMatrixWorld(),Be.makeTranslation(-Lo.x,-Lo.y,-Lo.z),D0.multiplyMatrices(Te.projectionMatrix,Te.matrixWorldInverse),le._frustum.setFromProjectionMatrix(D0,Te.coordinateSystem,Te.reversedDepth)}if(le.map.isWebGLCubeRenderTarget)i.setRenderTarget(le.map,N),i.clear();else{N===0&&(i.setRenderTarget(le.map),i.clear());const Te=le.getViewport(N);u.set(l.x*Te.x,l.y*Te.y,l.x*Te.z,l.y*Te.w),j.viewport(u)}a=le.getFrustum(N),C(I,w,oe,ae,this.type)}le.isPointLightShadow!==!0&&this.type===Uo&&D(le,w),le.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(U,k,G)};function D(P,I){const w=e.update(b);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Zi(s.x,s.y,{format:Ha,type:ur}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value.set(P.map.width,P.map.height),_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,w,_,b,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,w,M,b,null)}function z(P,I,w,U){let k=null;const G=w.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)k=G;else if(k=w.isPointLight===!0?m:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=k.uuid,ie=I.uuid;let H=p[j];H===void 0&&(H={},p[j]=H);let ne=H[ie];ne===void 0&&(ne=k.clone(),H[ie]=ne,I.addEventListener("dispose",L)),k=ne}if(k.visible=I.visible,k.wireframe=I.wireframe,U===Uo?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:x[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,w.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const j=i.properties.get(k);j.light=w}return k}function C(P,I,w,U,k){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===Uo)&&(!P.frustumCulled||P.intersectsFrustum(a))){P.modelViewMatrix.multiplyMatrices(w.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),H=P.material;if(Array.isArray(H)){const ne=ie.groups;for(let ae=0,le=ne.length;ae<le;ae++){const Y=ne[ae],Z=H[Y.materialIndex];if(Z&&Z.visible){const K=z(P,Z,U,k);P.onBeforeShadow(i,P,I,w,ie,K,Y),i.renderBufferDirect(w,null,ie,K,P,Y),P.onAfterShadow(i,P,I,w,ie,K,Y)}}}else if(H.visible){const ne=z(P,H,U,k);P.onBeforeShadow(i,P,I,w,ie,ne,null),i.renderBufferDirect(w,null,ie,ne,P,null),P.onAfterShadow(i,P,I,w,ie,ne,null)}}const j=P.children;for(let ie=0,H=j.length;ie<H;ie++)C(j[ie],I,w,U,k)}function L(P){P.target.removeEventListener("dispose",L);for(const w in p){const U=p[w],k=P.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function FC(i,e){function t(){let B=!1;const Oe=new pn;let ve=null;const Ne=new pn(0,0,0,0);return{setMask:function(ke){ve!==ke&&!B&&(i.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){B=ke},setClear:function(ke,Se,it,$,Me){Me===!0&&(ke*=$,Se*=$,it*=$),Oe.set(ke,Se,it,$),Ne.equals(Oe)===!1&&(i.clearColor(ke,Se,it,$),Ne.copy(Oe))},reset:function(){B=!1,ve=null,Ne.set(-1,0,0,0)}}}function a(){let B=!1,Oe=!1,ve=null,Ne=null,ke=null;return{setReversed:function(Se){if(Oe!==Se){const it=e.get("EXT_clip_control");Se?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Oe=Se;const $=ke;ke=null,this.setClear($)}},getReversed:function(){return Oe},setTest:function(Se){Se?pe(i.DEPTH_TEST):ye(i.DEPTH_TEST)},setMask:function(Se){ve!==Se&&!B&&(i.depthMask(Se),ve=Se)},setFunc:function(Se){if(Oe&&(Se=nM[Se]),Ne!==Se){switch(Se){case Sf:i.depthFunc(i.NEVER);break;case yf:i.depthFunc(i.ALWAYS);break;case Mf:i.depthFunc(i.LESS);break;case Wo:i.depthFunc(i.LEQUAL);break;case Ef:i.depthFunc(i.EQUAL);break;case Tf:i.depthFunc(i.GEQUAL);break;case wf:i.depthFunc(i.GREATER);break;case Af:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ne=Se}},setLocked:function(Se){B=Se},setClear:function(Se){ke!==Se&&(ke=Se,Oe&&(Se=1-Se),i.clearDepth(Se))},reset:function(){B=!1,ve=null,Ne=null,ke=null,Oe=!1}}}function s(){let B=!1,Oe=null,ve=null,Ne=null,ke=null,Se=null,it=null,$=null,Me=null;return{setTest:function(xe){B||(xe?pe(i.STENCIL_TEST):ye(i.STENCIL_TEST))},setMask:function(xe){Oe!==xe&&!B&&(i.stencilMask(xe),Oe=xe)},setFunc:function(xe,je,lt){(ve!==xe||Ne!==je||ke!==lt)&&(i.stencilFunc(xe,je,lt),ve=xe,Ne=je,ke=lt)},setOp:function(xe,je,lt){(Se!==xe||it!==je||$!==lt)&&(i.stencilOp(xe,je,lt),Se=xe,it=je,$=lt)},setLocked:function(xe){B=xe},setClear:function(xe){Me!==xe&&(i.clearStencil(xe),Me=xe)},reset:function(){B=!1,Oe=null,ve=null,Ne=null,ke=null,Se=null,it=null,$=null,Me=null}}}const l=new t,u=new a,d=new s,m=new WeakMap,p=new WeakMap;let v={},x={},_={},M=new WeakMap,T=[],b=null,y=!1,S=null,D=null,z=null,C=null,L=null,P=null,I=null,w=new Ct(0,0,0),U=0,k=!1,G=null,j=null,ie=null,H=null,ne=null;const ae=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,Y=0;const Z=i.getParameter(i.VERSION);Z.indexOf("WebGL")!==-1?(Y=parseFloat(/^WebGL (\d)/.exec(Z)[1]),le=Y>=1):Z.indexOf("OpenGL ES")!==-1&&(Y=parseFloat(/^OpenGL ES (\d)/.exec(Z)[1]),le=Y>=2);let K=null,N={};const oe=i.getParameter(i.SCISSOR_BOX),Te=i.getParameter(i.VIEWPORT),Be=new pn().fromArray(oe),Xe=new pn().fromArray(Te);function qe(B,Oe,ve,Ne){const ke=new Uint8Array(4),Se=i.createTexture();i.bindTexture(B,Se),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<ve;it++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Oe,0,i.RGBA,1,1,Ne,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(Oe+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return Se}const ue={};ue[i.TEXTURE_2D]=qe(i.TEXTURE_2D,i.TEXTURE_2D,1),ue[i.TEXTURE_CUBE_MAP]=qe(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[i.TEXTURE_2D_ARRAY]=qe(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ue[i.TEXTURE_3D]=qe(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(i.DEPTH_TEST),u.setFunc(Wo),St(!1),Wt(Pg),pe(i.CULL_FACE),At(Lr);function pe(B){v[B]!==!0&&(i.enable(B),v[B]=!0)}function ye(B){v[B]!==!1&&(i.disable(B),v[B]=!1)}function Qe(B,Oe){return _[B]!==Oe?(i.bindFramebuffer(B,Oe),_[B]=Oe,B===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Oe),B===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Oe),!0):!1}function Ce(B,Oe){let ve=T,Ne=!1;if(B){ve=M.get(Oe),ve===void 0&&(ve=[],M.set(Oe,ve));const ke=B.textures;if(ve.length!==ke.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let Se=0,it=ke.length;Se<it;Se++)ve[Se]=i.COLOR_ATTACHMENT0+Se;ve.length=ke.length,Ne=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Ne=!0);Ne&&i.drawBuffers(ve)}function Ze(B){return b!==B?(i.useProgram(B),b=B,!0):!1}const wt={[bs]:i.FUNC_ADD,[Ty]:i.FUNC_SUBTRACT,[wy]:i.FUNC_REVERSE_SUBTRACT};wt[Ay]=i.MIN,wt[Cy]=i.MAX;const $e={[Ry]:i.ZERO,[by]:i.ONE,[Py]:i.SRC_COLOR,[fv]:i.SRC_ALPHA,[Oy]:i.SRC_ALPHA_SATURATE,[Uy]:i.DST_COLOR,[Dy]:i.DST_ALPHA,[Ly]:i.ONE_MINUS_SRC_COLOR,[hv]:i.ONE_MINUS_SRC_ALPHA,[Fy]:i.ONE_MINUS_DST_COLOR,[Ny]:i.ONE_MINUS_DST_ALPHA,[Iy]:i.CONSTANT_COLOR,[ky]:i.ONE_MINUS_CONSTANT_COLOR,[zy]:i.CONSTANT_ALPHA,[Hy]:i.ONE_MINUS_CONSTANT_ALPHA};function At(B,Oe,ve,Ne,ke,Se,it,$,Me,xe){if(B===Lr){y===!0&&(ye(i.BLEND),y=!1);return}if(y===!1&&(pe(i.BLEND),y=!0),B!==Ey){if(B!==S||xe!==k){if((D!==bs||L!==bs)&&(i.blendEquation(i.FUNC_ADD),D=bs,L=bs),xe)switch(B){case zo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lg:i.blendFunc(i.ONE,i.ONE);break;case Dg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ng:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:It("WebGLState: Invalid blending: ",B);break}else switch(B){case zo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Lg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Dg:It("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ng:It("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:It("WebGLState: Invalid blending: ",B);break}z=null,C=null,P=null,I=null,w.set(0,0,0),U=0,S=B,k=xe}return}ke=ke||Oe,Se=Se||ve,it=it||Ne,(Oe!==D||ke!==L)&&(i.blendEquationSeparate(wt[Oe],wt[ke]),D=Oe,L=ke),(ve!==z||Ne!==C||Se!==P||it!==I)&&(i.blendFuncSeparate($e[ve],$e[Ne],$e[Se],$e[it]),z=ve,C=Ne,P=Se,I=it),($.equals(w)===!1||Me!==U)&&(i.blendColor($.r,$.g,$.b,Me),w.copy($),U=Me),S=B,k=!1}function Rt(B,Oe){B.side===qi?ye(i.CULL_FACE):pe(i.CULL_FACE);let ve=B.side===di;Oe&&(ve=!ve),St(ve),B.blending===zo&&B.transparent===!1?At(Lr):At(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const Ne=B.stencilWrite;d.setTest(Ne),Ne&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),on(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):ye(i.SAMPLE_ALPHA_TO_COVERAGE)}function St(B){G!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),G=B)}function Wt(B){B!==Sy?(pe(i.CULL_FACE),B!==j&&(B===Pg?i.cullFace(i.BACK):B===yy?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ye(i.CULL_FACE),j=B}function sn(B){B!==ie&&(le&&i.lineWidth(B),ie=B)}function on(B,Oe,ve){B?(pe(i.POLYGON_OFFSET_FILL),(H!==Oe||ne!==ve)&&(H=Oe,ne=ve,u.getReversed()&&(Oe=-Oe),i.polygonOffset(Oe,ve))):ye(i.POLYGON_OFFSET_FILL)}function bt(B){B?pe(i.SCISSOR_TEST):ye(i.SCISSOR_TEST)}function Yt(B){B===void 0&&(B=i.TEXTURE0+ae-1),K!==B&&(i.activeTexture(B),K=B)}function X(B,Oe,ve){ve===void 0&&(K===null?ve=i.TEXTURE0+ae-1:ve=K);let Ne=N[ve];Ne===void 0&&(Ne={type:void 0,texture:void 0},N[ve]=Ne),(Ne.type!==B||Ne.texture!==Oe)&&(K!==ve&&(i.activeTexture(ve),K=ve),i.bindTexture(B,Oe||ue[B]),Ne.type=B,Ne.texture=Oe)}function mn(){const B=N[K];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function Lt(){try{i.compressedTexImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function E(){try{i.texSubImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function Q(){try{i.texSubImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function me(){try{i.compressedTexSubImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function Re(){try{i.texStorage2D(...arguments)}catch(B){It("WebGLState:",B)}}function De(){try{i.texStorage3D(...arguments)}catch(B){It("WebGLState:",B)}}function ge(){try{i.texImage2D(...arguments)}catch(B){It("WebGLState:",B)}}function _e(){try{i.texImage3D(...arguments)}catch(B){It("WebGLState:",B)}}function Ue(B){return x[B]!==void 0?x[B]:i.getParameter(B)}function Je(B,Oe){x[B]!==Oe&&(i.pixelStorei(B,Oe),x[B]=Oe)}function Fe(B){Be.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),Be.copy(B))}function Le(B){Xe.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Xe.copy(B))}function et(B,Oe){let ve=p.get(Oe);ve===void 0&&(ve=new WeakMap,p.set(Oe,ve));let Ne=ve.get(B);Ne===void 0&&(Ne=i.getUniformBlockIndex(Oe,B.name),ve.set(B,Ne))}function at(B,Oe){const Ne=p.get(Oe).get(B);m.get(Oe)!==Ne&&(i.uniformBlockBinding(Oe,Ne,B.__bindingPointIndex),m.set(Oe,Ne))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},x={},K=null,N={},_={},M=new WeakMap,T=[],b=null,y=!1,S=null,D=null,z=null,C=null,L=null,P=null,I=null,w=new Ct(0,0,0),U=0,k=!1,G=null,j=null,ie=null,H=null,ne=null,Be.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:pe,disable:ye,bindFramebuffer:Qe,drawBuffers:Ce,useProgram:Ze,setBlending:At,setMaterial:Rt,setFlipSided:St,setCullFace:Wt,setLineWidth:sn,setPolygonOffset:on,setScissorTest:bt,activeTexture:Yt,bindTexture:X,unbindTexture:mn,compressedTexImage2D:Lt,compressedTexImage3D:F,texImage2D:ge,texImage3D:_e,pixelStorei:Je,getParameter:Ue,updateUBOMapping:et,uniformBlockBinding:at,texStorage2D:Re,texStorage3D:De,texSubImage2D:E,texSubImage3D:Q,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Fe,viewport:Le,reset:ht}}function OC(i,e,t,a,s,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ut,v=new WeakMap,x=new Set;let _;const M=new WeakMap;let T=!1;try{T=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,E){return T?new OffscreenCanvas(F,E):Hc("canvas")}function y(F,E,Q){let ce=1;const me=Lt(F);if((me.width>Q||me.height>Q)&&(ce=Q/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Re=Math.floor(ce*me.width),De=Math.floor(ce*me.height);_===void 0&&(_=b(Re,De));const ge=E?b(Re,De):_;return ge.width=Re,ge.height=De,ge.getContext("2d").drawImage(F,0,0,Re,De),gt("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Re+"x"+De+")."),ge}else return"data"in F&&gt("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),F;return F}function S(F){return F.generateMipmaps}function D(F){i.generateMipmap(F)}function z(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function C(F,E,Q,ce,me,Re=!1){if(F!==null){if(i[F]!==void 0)return i[F];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let De;ce&&(De=e.get("EXT_texture_norm16"),De||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===i.RED&&(Q===i.FLOAT&&(ge=i.R32F),Q===i.HALF_FLOAT&&(ge=i.R16F),Q===i.UNSIGNED_BYTE&&(ge=i.R8),Q===i.UNSIGNED_SHORT&&De&&(ge=De.R16_EXT),Q===i.SHORT&&De&&(ge=De.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ge=i.R8UI),Q===i.UNSIGNED_SHORT&&(ge=i.R16UI),Q===i.UNSIGNED_INT&&(ge=i.R32UI),Q===i.BYTE&&(ge=i.R8I),Q===i.SHORT&&(ge=i.R16I),Q===i.INT&&(ge=i.R32I)),E===i.RG&&(Q===i.FLOAT&&(ge=i.RG32F),Q===i.HALF_FLOAT&&(ge=i.RG16F),Q===i.UNSIGNED_BYTE&&(ge=i.RG8),Q===i.UNSIGNED_SHORT&&De&&(ge=De.RG16_EXT),Q===i.SHORT&&De&&(ge=De.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ge=i.RG8UI),Q===i.UNSIGNED_SHORT&&(ge=i.RG16UI),Q===i.UNSIGNED_INT&&(ge=i.RG32UI),Q===i.BYTE&&(ge=i.RG8I),Q===i.SHORT&&(ge=i.RG16I),Q===i.INT&&(ge=i.RG32I)),E===i.RGB_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),Q===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),Q===i.UNSIGNED_INT&&(ge=i.RGB32UI),Q===i.BYTE&&(ge=i.RGB8I),Q===i.SHORT&&(ge=i.RGB16I),Q===i.INT&&(ge=i.RGB32I)),E===i.RGBA_INTEGER&&(Q===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),Q===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),Q===i.UNSIGNED_INT&&(ge=i.RGBA32UI),Q===i.BYTE&&(ge=i.RGBA8I),Q===i.SHORT&&(ge=i.RGBA16I),Q===i.INT&&(ge=i.RGBA32I)),E===i.RGB&&(Q===i.UNSIGNED_SHORT&&De&&(ge=De.RGB16_EXT),Q===i.SHORT&&De&&(ge=De.RGB16_SNORM_EXT),Q===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),Q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ge=i.R11F_G11F_B10F)),E===i.RGBA){const _e=Re?zc:Ot.getTransfer(me);Q===i.FLOAT&&(ge=i.RGBA32F),Q===i.HALF_FLOAT&&(ge=i.RGBA16F),Q===i.UNSIGNED_BYTE&&(ge=_e===Kt?i.SRGB8_ALPHA8:i.RGBA8),Q===i.UNSIGNED_SHORT&&De&&(ge=De.RGBA16_EXT),Q===i.SHORT&&De&&(ge=De.RGBA16_SNORM_EXT),Q===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),Q===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function L(F,E){let Q;return F?E===null||E===cr||E===$o?Q=i.DEPTH24_STENCIL8:E===sr?Q=i.DEPTH32F_STENCIL8:E===Xo&&(Q=i.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===cr||E===$o?Q=i.DEPTH_COMPONENT24:E===sr?Q=i.DEPTH_COMPONENT32F:E===Xo&&(Q=i.DEPTH_COMPONENT16),Q}function P(F,E){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Vn&&F.minFilter!==Zn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function I(F){const E=F.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&x.delete(E)}function w(F){const E=F.target;E.removeEventListener("dispose",w),G(E)}function U(F){const E=a.get(F);if(E.__webglInit===void 0)return;const Q=F.source,ce=M.get(Q);if(ce){const me=ce[E.__cacheKey];me.usedTimes--,me.usedTimes===0&&k(F),Object.keys(ce).length===0&&M.delete(Q)}a.remove(F)}function k(F){const E=a.get(F);i.deleteTexture(E.__webglTexture);const Q=F.source,ce=M.get(Q);delete ce[E.__cacheKey],u.memory.textures--}function G(F){const E=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let me=0;me<E.__webglFramebuffer[ce].length;me++)i.deleteFramebuffer(E.__webglFramebuffer[ce][me]);else i.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)i.deleteFramebuffer(E.__webglFramebuffer[ce]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Q=F.textures;for(let ce=0,me=Q.length;ce<me;ce++){const Re=a.get(Q[ce]);Re.__webglTexture&&(i.deleteTexture(Re.__webglTexture),u.memory.textures--),a.remove(Q[ce])}a.remove(F)}let j=0;function ie(){j=0}function H(){return j}function ne(F){j=F}function ae(){const F=j;return F>=s.maxTextures&&gt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,F}function le(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function Y(F,E){const Q=a.get(F);if(F.isVideoTexture&&X(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Q.__version!==F.version){const ce=F.image;if(ce===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{ye(Q,F,E);return}}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Q.__webglTexture,i.TEXTURE0+E)}function Z(F,E){const Q=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){ye(Q,F,E);return}else F.isExternalTexture&&(Q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Q.__webglTexture,i.TEXTURE0+E)}function K(F,E){const Q=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Q.__version!==F.version){ye(Q,F,E);return}t.bindTexture(i.TEXTURE_3D,Q.__webglTexture,i.TEXTURE0+E)}function N(F,E){const Q=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Q.__version!==F.version){Qe(Q,F,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Q.__webglTexture,i.TEXTURE0+E)}const oe={[Cf]:i.REPEAT,[br]:i.CLAMP_TO_EDGE,[Rf]:i.MIRRORED_REPEAT},Te={[Vn]:i.NEAREST,[By]:i.NEAREST_MIPMAP_NEAREST,[Jl]:i.NEAREST_MIPMAP_LINEAR,[Zn]:i.LINEAR,[Id]:i.LINEAR_MIPMAP_NEAREST,[Ua]:i.LINEAR_MIPMAP_LINEAR},Be={[Yy]:i.NEVER,[Jy]:i.ALWAYS,[qy]:i.LESS,[Ah]:i.LEQUAL,[jy]:i.EQUAL,[Ch]:i.GEQUAL,[Ky]:i.GREATER,[Zy]:i.NOTEQUAL};function Xe(F,E){if(E.type===sr&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Zn||E.magFilter===Id||E.magFilter===Jl||E.magFilter===Ua||E.minFilter===Zn||E.minFilter===Id||E.minFilter===Jl||E.minFilter===Ua)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,oe[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Te[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Te[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Vn||E.minFilter!==Jl&&E.minFilter!==Ua||E.type===sr&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function qe(F,E){let Q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",I));const ce=E.source;let me=M.get(ce);me===void 0&&(me={},M.set(ce,me));const Re=le(E);if(Re!==F.__cacheKey){me[Re]===void 0&&(me[Re]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,Q=!0),me[Re].usedTimes++;const De=me[F.__cacheKey];De!==void 0&&(me[F.__cacheKey].usedTimes--,De.usedTimes===0&&k(E)),F.__cacheKey=Re,F.__webglTexture=me[Re].texture}return Q}function ue(F,E,Q){return Math.floor(Math.floor(F/Q)/E)}function pe(F,E,Q,ce){const Re=F.updateRanges;if(Re.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Q,ce,E.data);else{Re.sort((Je,Fe)=>Je.start-Fe.start);let De=0;for(let Je=1;Je<Re.length;Je++){const Fe=Re[De],Le=Re[Je],et=Fe.start+Fe.count,at=ue(Le.start,E.width,4),ht=ue(Fe.start,E.width,4);Le.start<=et+1&&at===ht&&ue(Le.start+Le.count-1,E.width,4)===at?Fe.count=Math.max(Fe.count,Le.start+Le.count-Fe.start):(++De,Re[De]=Le)}Re.length=De+1;const ge=t.getParameter(i.UNPACK_ROW_LENGTH),_e=t.getParameter(i.UNPACK_SKIP_PIXELS),Ue=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Je=0,Fe=Re.length;Je<Fe;Je++){const Le=Re[Je],et=Math.floor(Le.start/4),at=Math.ceil(Le.count/4),ht=et%E.width,B=Math.floor(et/E.width),Oe=at,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,ht,B,Oe,ve,Q,ce,E.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ge),t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ue)}}function ye(F,E,Q){let ce=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=i.TEXTURE_3D);const me=qe(F,E),Re=E.source;t.bindTexture(ce,F.__webglTexture,i.TEXTURE0+Q);const De=a.get(Re);if(Re.version!==De.__version||me===!0){if(t.activeTexture(i.TEXTURE0+Q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Ot.getPrimaries(Ot.workingColorSpace),Ne=E.colorSpace===sa?null:Ot.getPrimaries(E.colorSpace),ke=E.colorSpace===sa||ve===Ne?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=y(E.image,!1,s.maxTextureSize);_e=mn(E,_e);const Ue=l.convert(E.format,E.colorSpace),Je=l.convert(E.type);let Fe=C(E.internalFormat,Ue,Je,E.normalized,E.colorSpace,E.isVideoTexture);Xe(ce,E);let Le;const et=E.mipmaps,at=E.isVideoTexture!==!0,ht=De.__version===void 0||me===!0,B=Re.dataReady,Oe=P(E,_e);if(E.isDepthTexture)Fe=L(E.format===Fa,E.type),ht&&(at?t.texStorage2D(i.TEXTURE_2D,1,Fe,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ue,Je,null));else if(E.isDataTexture)if(et.length>0){at&&ht&&t.texStorage2D(i.TEXTURE_2D,Oe,Fe,et[0].width,et[0].height);for(let ve=0,Ne=et.length;ve<Ne;ve++)Le=et[ve],at?B&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Le.width,Le.height,Ue,Je,Le.data):t.texImage2D(i.TEXTURE_2D,ve,Fe,Le.width,Le.height,0,Ue,Je,Le.data);E.generateMipmaps=!1}else at?(ht&&t.texStorage2D(i.TEXTURE_2D,Oe,Fe,_e.width,_e.height),B&&pe(E,_e,Ue,Je)):t.texImage2D(i.TEXTURE_2D,0,Fe,_e.width,_e.height,0,Ue,Je,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){at&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Fe,et[0].width,et[0].height,_e.depth);for(let ve=0,Ne=et.length;ve<Ne;ve++)if(Le=et[ve],E.format!==ji)if(Ue!==null)if(at){if(B)if(E.layerUpdates.size>0){const ke=u0(Le.width,Le.height,E.format,E.type);for(const Se of E.layerUpdates){const it=Le.data.subarray(Se*ke/Le.data.BYTES_PER_ELEMENT,(Se+1)*ke/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,Se,Le.width,Le.height,1,Ue,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,_e.depth,Ue,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Fe,Le.width,Le.height,_e.depth,0,Le.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else at?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Le.width,Le.height,_e.depth,Ue,Je,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Fe,Le.width,Le.height,_e.depth,0,Ue,Je,Le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{at&&ht&&t.texStorage2D(i.TEXTURE_2D,Oe,Fe,et[0].width,et[0].height);for(let ve=0,Ne=et.length;ve<Ne;ve++)Le=et[ve],E.format!==ji?Ue!==null?at?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Le.width,Le.height,Ue,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Fe,Le.width,Le.height,0,Le.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):at?B&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Le.width,Le.height,Ue,Je,Le.data):t.texImage2D(i.TEXTURE_2D,ve,Fe,Le.width,Le.height,0,Ue,Je,Le.data)}else if(E.isDataArrayTexture)if(at){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Oe,Fe,_e.width,_e.height,_e.depth),B)if(E.layerUpdates.size>0){const ve=u0(_e.width,_e.height,E.format,E.type);for(const Ne of E.layerUpdates){const ke=_e.data.subarray(Ne*ve/_e.data.BYTES_PER_ELEMENT,(Ne+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ne,_e.width,_e.height,1,Ue,Je,ke)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ue,Je,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Fe,_e.width,_e.height,_e.depth,0,Ue,Je,_e.data);else if(E.isData3DTexture)at?(ht&&t.texStorage3D(i.TEXTURE_3D,Oe,Fe,_e.width,_e.height,_e.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ue,Je,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Fe,_e.width,_e.height,_e.depth,0,Ue,Je,_e.data);else if(E.isFramebufferTexture){if(ht)if(at)t.texStorage2D(i.TEXTURE_2D,Oe,Fe,_e.width,_e.height);else{let ve=_e.width,Ne=_e.height;for(let ke=0;ke<Oe;ke++)t.texImage2D(i.TEXTURE_2D,ke,Fe,ve,Ne,0,Ue,Je,null),ve>>=1,Ne>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),x.add(E),ve.onpaint=Ne=>{const ke=Ne.changedElements;for(const Se of x)ke.includes(Se.image)&&(Se.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_e);else{const ke=i.RGBA,Se=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ke,Se,it,_e)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(et.length>0){if(at&&ht){const ve=Lt(et[0]);t.texStorage2D(i.TEXTURE_2D,Oe,Fe,ve.width,ve.height)}for(let ve=0,Ne=et.length;ve<Ne;ve++)Le=et[ve],at?B&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ue,Je,Le):t.texImage2D(i.TEXTURE_2D,ve,Fe,Ue,Je,Le);E.generateMipmaps=!1}else if(at){if(ht){const ve=Lt(_e);t.texStorage2D(i.TEXTURE_2D,Oe,Fe,ve.width,ve.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ue,Je,_e)}else t.texImage2D(i.TEXTURE_2D,0,Fe,Ue,Je,_e);S(E)&&D(ce),De.__version=Re.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Qe(F,E,Q){if(E.image.length!==6)return;const ce=qe(F,E),me=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Q);const Re=a.get(me);if(me.version!==Re.__version||ce===!0){t.activeTexture(i.TEXTURE0+Q);const De=Ot.getPrimaries(Ot.workingColorSpace),ge=E.colorSpace===sa?null:Ot.getPrimaries(E.colorSpace),_e=E.colorSpace===sa||De===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ue=E.isCompressedTexture||E.image[0].isCompressedTexture,Je=E.image[0]&&E.image[0].isDataTexture,Fe=[];for(let Se=0;Se<6;Se++)!Ue&&!Je?Fe[Se]=y(E.image[Se],!0,s.maxCubemapSize):Fe[Se]=Je?E.image[Se].image:E.image[Se],Fe[Se]=mn(E,Fe[Se]);const Le=Fe[0],et=l.convert(E.format,E.colorSpace),at=l.convert(E.type),ht=C(E.internalFormat,et,at,E.normalized,E.colorSpace),B=E.isVideoTexture!==!0,Oe=Re.__version===void 0||ce===!0,ve=me.dataReady;let Ne=P(E,Le);Xe(i.TEXTURE_CUBE_MAP,E);let ke;if(Ue){B&&Oe&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,ht,Le.width,Le.height);for(let Se=0;Se<6;Se++){ke=Fe[Se].mipmaps;for(let it=0;it<ke.length;it++){const $=ke[it];E.format!==ji?et!==null?B?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,0,0,$.width,$.height,et,$.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,ht,$.width,$.height,0,$.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,0,0,$.width,$.height,et,at,$.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it,ht,$.width,$.height,0,et,at,$.data)}}}else{if(ke=E.mipmaps,B&&Oe){ke.length>0&&Ne++;const Se=Lt(Fe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ne,ht,Se.width,Se.height)}for(let Se=0;Se<6;Se++)if(Je){B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,Fe[Se].width,Fe[Se].height,et,at,Fe[Se].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ht,Fe[Se].width,Fe[Se].height,0,et,at,Fe[Se].data);for(let it=0;it<ke.length;it++){const Me=ke[it].image[Se].image;B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,0,0,Me.width,Me.height,et,at,Me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,ht,Me.width,Me.height,0,et,at,Me.data)}}else{B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,0,0,et,at,Fe[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,0,ht,et,at,Fe[Se]);for(let it=0;it<ke.length;it++){const $=ke[it];B?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,0,0,et,at,$.image[Se]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Se,it+1,ht,et,at,$.image[Se])}}}S(E)&&D(i.TEXTURE_CUBE_MAP),Re.__version=me.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Ce(F,E,Q,ce,me,Re){const De=l.convert(Q.format,Q.colorSpace),ge=l.convert(Q.type),_e=C(Q.internalFormat,De,ge,Q.normalized,Q.colorSpace),Ue=a.get(E),Je=a.get(Q);if(Je.__renderTarget=E,!Ue.__hasExternalTextures){const Fe=Math.max(1,E.width>>Re),Le=Math.max(1,E.height>>Re);me===i.TEXTURE_3D||me===i.TEXTURE_2D_ARRAY?t.texImage3D(me,Re,_e,Fe,Le,E.depth,0,De,ge,null):t.texImage2D(me,Re,_e,Fe,Le,0,De,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Yt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,me,Je.__webglTexture,0,bt(E)):(me===i.TEXTURE_2D||me>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,me,Je.__webglTexture,Re),t.bindFramebuffer(i.FRAMEBUFFER,null)}function Ze(F,E,Q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){const ce=E.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,Re=L(E.stencilBuffer,me),De=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Yt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(E),Re,E.width,E.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(E),Re,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Re,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,F)}else{const ce=E.textures;for(let me=0;me<ce.length;me++){const Re=ce[me],De=l.convert(Re.format,Re.colorSpace),ge=l.convert(Re.type),_e=C(Re.internalFormat,De,ge,Re.normalized,Re.colorSpace);Yt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,bt(E),_e,E.width,E.height):Q?i.renderbufferStorageMultisample(i.RENDERBUFFER,bt(E),_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function wt(F,E,Q){const ce=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=a.get(E.depthTexture);if(me.__renderTarget=E,(!me.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce){if(me.__webglInit===void 0&&(me.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),me.__webglTexture===void 0){me.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,me.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,E.depthTexture);const Ue=l.convert(E.depthTexture.format),Je=l.convert(E.depthTexture.type);let Fe;E.depthTexture.format===Nr?Fe=i.DEPTH_COMPONENT24:E.depthTexture.format===Fa&&(Fe=i.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Fe,E.width,E.height,0,Ue,Je,null)}}else Y(E.depthTexture,0);const Re=me.__webglTexture,De=bt(E),ge=ce?i.TEXTURE_CUBE_MAP_POSITIVE_X+Q:i.TEXTURE_2D,_e=E.depthTexture.format===Fa?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Nr)Yt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ge,Re,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ge,Re,0);else if(E.depthTexture.format===Fa)Yt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ge,Re,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ge,Re,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function $e(F){const E=a.get(F),Q=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ce=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const me=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),E.__depthDisposeCallback=me}E.__boundDepthTexture=ce}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(Q)for(let ce=0;ce<6;ce++)wt(E.__webglFramebuffer[ce],F,ce);else{const ce=F.texture.mipmaps;ce&&ce.length>0?wt(E.__webglFramebuffer[0],F,0):wt(E.__webglFramebuffer,F,0)}else if(Q){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=i.createRenderbuffer(),Ze(E.__webglDepthbuffer[ce],F,!1);else{const me=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,Re)}}else{const ce=F.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),Ze(E.__webglDepthbuffer,F,!1);else{const me=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Re),i.framebufferRenderbuffer(i.FRAMEBUFFER,me,i.RENDERBUFFER,Re)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function At(F,E,Q){const ce=a.get(F);E!==void 0&&Ce(ce.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Q!==void 0&&$e(F)}function Rt(F){const E=F.texture,Q=a.get(F),ce=a.get(E);F.addEventListener("dispose",w);const me=F.textures,Re=F.isWebGLCubeRenderTarget===!0,De=me.length>1;if(De||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=E.version,u.memory.textures++),Re){Q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer[ge]=[];for(let _e=0;_e<E.mipmaps.length;_e++)Q.__webglFramebuffer[ge][_e]=i.createFramebuffer()}else Q.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Q.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)Q.__webglFramebuffer[ge]=i.createFramebuffer()}else Q.__webglFramebuffer=i.createFramebuffer();if(De)for(let ge=0,_e=me.length;ge<_e;ge++){const Ue=a.get(me[ge]);Ue.__webglTexture===void 0&&(Ue.__webglTexture=i.createTexture(),u.memory.textures++)}if(F.samples>0&&Yt(F)===!1){Q.__webglMultisampledFramebuffer=i.createFramebuffer(),Q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Q.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const _e=me[ge];Q.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Q.__webglColorRenderbuffer[ge]);const Ue=l.convert(_e.format,_e.colorSpace),Je=l.convert(_e.type),Fe=C(_e.internalFormat,Ue,Je,_e.normalized,_e.colorSpace,F.isXRRenderTarget===!0),Le=bt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Fe,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,Q.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Q.__webglDepthRenderbuffer=i.createRenderbuffer(),Ze(Q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Re){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ce(Q.__webglFramebuffer[ge][_e],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Ce(Q.__webglFramebuffer[ge],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(E)&&D(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ge=0,_e=me.length;ge<_e;ge++){const Ue=me[ge],Je=a.get(Ue);let Fe=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Fe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Fe,Je.__webglTexture),Xe(Fe,Ue),Ce(Q.__webglFramebuffer,F,Ue,i.COLOR_ATTACHMENT0+ge,Fe,0),S(Ue)&&D(Fe)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ge=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ce.__webglTexture),Xe(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ce(Q.__webglFramebuffer[_e],F,E,i.COLOR_ATTACHMENT0,ge,_e);else Ce(Q.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,ge,0);S(E)&&D(ge),t.unbindTexture()}F.depthBuffer&&$e(F)}function St(F){const E=F.textures;for(let Q=0,ce=E.length;Q<ce;Q++){const me=E[Q];if(S(me)){const Re=z(F),De=a.get(me).__webglTexture;t.bindTexture(Re,De),D(Re),t.unbindTexture()}}}const Wt=[],sn=[];function on(F){if(F.samples>0){if(Yt(F)===!1){const E=F.textures,Q=F.width,ce=F.height;let me=i.COLOR_BUFFER_BIT;const Re=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=a.get(F),ge=E.length>1;if(ge)for(let Ue=0;Ue<E.length;Ue++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const _e=F.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Ue=0;Ue<E.length;Ue++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(me|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(me|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);const Je=a.get(E[Ue]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,Q,ce,0,0,Q,ce,me,i.NEAREST),m===!0&&(Wt.length=0,sn.length=0,Wt.push(i.COLOR_ATTACHMENT0+Ue),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Wt.push(Re),sn.push(Re),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,sn)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Wt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ue=0;Ue<E.length;Ue++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.RENDERBUFFER,De.__webglColorRenderbuffer[Ue]);const Je=a.get(E[Ue]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ue,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&m){const E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function bt(F){return Math.min(s.maxSamples,F.samples)}function Yt(F){const E=a.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function X(F){const E=u.render.frame;v.get(F)!==E&&(v.set(F,E),F.update())}function mn(F,E){const Q=F.colorSpace,ce=F.format,me=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Q!==kc&&Q!==sa&&(Ot.getTransfer(Q)===Kt?(ce!==ji||me!==yi)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):It("WebGLTextures: Unsupported texture color space:",Q)),E}function Lt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=ae,this.resetTextureUnits=ie,this.getTextureUnits=H,this.setTextureUnits=ne,this.setTexture2D=Y,this.setTexture2DArray=Z,this.setTexture3D=K,this.setTextureCube=N,this.rebindTextures=At,this.setupRenderTarget=Rt,this.updateRenderTargetMipmap=St,this.updateMultisampleRenderTarget=on,this.setupDepthRenderbuffer=$e,this.setupFrameBufferTexture=Ce,this.useMultisampledRTT=Yt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function IC(i,e){function t(a,s=sa){let l;const u=Ot.getTransfer(s);if(a===yi)return i.UNSIGNED_BYTE;if(a===yh)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Mh)return i.UNSIGNED_SHORT_5_5_5_1;if(a===wv)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===Av)return i.UNSIGNED_INT_10F_11F_11F_REV;if(a===Ev)return i.BYTE;if(a===Tv)return i.SHORT;if(a===Xo)return i.UNSIGNED_SHORT;if(a===Sh)return i.INT;if(a===cr)return i.UNSIGNED_INT;if(a===sr)return i.FLOAT;if(a===ur)return i.HALF_FLOAT;if(a===Cv)return i.ALPHA;if(a===Rv)return i.RGB;if(a===ji)return i.RGBA;if(a===Nr)return i.DEPTH_COMPONENT;if(a===Fa)return i.DEPTH_STENCIL;if(a===bv)return i.RED;if(a===Eh)return i.RED_INTEGER;if(a===Ha)return i.RG;if(a===Th)return i.RG_INTEGER;if(a===wh)return i.RGBA_INTEGER;if(a===Cc||a===Rc||a===bc||a===Pc)if(u===Kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===bc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Pc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===bf||a===Pf||a===Lf||a===Df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===bf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Pf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Lf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Nf||a===Uf||a===Ff||a===Of||a===If||a===Oc||a===kf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Nf||a===Uf)return u===Kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Ff)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Of)return l.COMPRESSED_R11_EAC;if(a===If)return l.COMPRESSED_SIGNED_R11_EAC;if(a===Oc)return l.COMPRESSED_RG11_EAC;if(a===kf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===zf||a===Hf||a===Vf||a===Gf||a===Bf||a===Wf||a===Xf||a===$f||a===Yf||a===qf||a===jf||a===Kf||a===Zf||a===Jf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===zf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Hf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Vf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Gf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Bf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Wf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Xf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===$f)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Yf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===qf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===jf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Kf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Zf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Jf)return u===Kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Qf||a===eh||a===th)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Qf)return u===Kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===eh)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===th)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===nh||a===ih||a===Ic||a===rh)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===nh)return l.COMPRESSED_RED_RGTC1_EXT;if(a===ih)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ic)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===rh)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===$o?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:t}}const kC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,zC=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class HC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new zv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new dr({vertexShader:kC,fragmentShader:zC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Mi(new Zc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class VC extends ha{constructor(e,t){super();const a=this;let s=null,l=1,u=null,d="local-floor",m=1,p=null,v=null,x=null,_=null,M=null,T=null;const b=typeof XRWebGLBinding<"u",y=new HC,S={},D=t.getContextAttributes();let z=null,C=null;const L=[],P=[],I=new ut;let w=null,U=null;const k=new Li;k.viewport=new pn;const G=new Li;G.viewport=new pn;const j=[k,G],ie=new YM;let H=null,ne=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let pe=L[ue];return pe===void 0&&(pe=new Xd,L[ue]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(ue){let pe=L[ue];return pe===void 0&&(pe=new Xd,L[ue]=pe),pe.getGripSpace()},this.getHand=function(ue){let pe=L[ue];return pe===void 0&&(pe=new Xd,L[ue]=pe),pe.getHandSpace()};function ae(ue){const pe=P.indexOf(ue.inputSource);if(pe===-1)return;const ye=L[pe];ye!==void 0&&(ye.update(ue.inputSource,ue.frame,p||u),ye.dispatchEvent({type:ue.type,data:ue.inputSource}))}function le(){s.removeEventListener("select",ae),s.removeEventListener("selectstart",ae),s.removeEventListener("selectend",ae),s.removeEventListener("squeeze",ae),s.removeEventListener("squeezestart",ae),s.removeEventListener("squeezeend",ae),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",Y);for(let ue=0;ue<L.length;ue++){const pe=P[ue];pe!==null&&(P[ue]=null,L[ue].disconnect(pe))}H=null,ne=null,y.reset();for(const ue in S)delete S[ue];if(e.setRenderTarget(z),M=null,_=null,x=null,s=null,C=null,qe.stop(),a.isPresenting=!1,e.setPixelRatio(w),e.setSize(I.width,I.height,!1),U!==null){const ue=U.camera;ue.fov=U.fov,ue.zoom=U.zoom,ue.updateProjectionMatrix(),U=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){l=ue,a.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){d=ue,a.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ue){p=ue},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return T},this.getSession=function(){return s},this.setSession=async function(ue){if(s=ue,s!==null){if(z=e.getRenderTarget(),s.addEventListener("select",ae),s.addEventListener("selectstart",ae),s.addEventListener("selectend",ae),s.addEventListener("squeeze",ae),s.addEventListener("squeezestart",ae),s.addEventListener("squeezeend",ae),s.addEventListener("end",le),s.addEventListener("inputsourceschange",Y),D.xrCompatible!==!0&&await t.makeXRCompatible(),w=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ye=null,Qe=null,Ce=null;D.depth&&(Ce=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ye=D.stencil?Fa:Nr,Qe=D.stencil?$o:cr);const Ze={colorFormat:t.RGBA8,depthFormat:Ce,scaleFactor:l};x=this.getBinding(),_=x.createProjectionLayer(Ze),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),C=new Zi(_.textureWidth,_.textureHeight,{format:ji,type:yi,depthTexture:new qo(_.textureWidth,_.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,ye),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const ye={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(s,t,ye),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),C=new Zi(M.framebufferWidth,M.framebufferHeight,{format:ji,type:yi,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}C.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await s.requestReferenceSpace(d),qe.setContext(s),qe.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function Y(ue){for(let pe=0;pe<ue.removed.length;pe++){const ye=ue.removed[pe],Qe=P.indexOf(ye);Qe>=0&&(P[Qe]=null,L[Qe].disconnect(ye))}for(let pe=0;pe<ue.added.length;pe++){const ye=ue.added[pe];let Qe=P.indexOf(ye);if(Qe===-1){for(let Ze=0;Ze<L.length;Ze++)if(Ze>=P.length){P.push(ye),Qe=Ze;break}else if(P[Ze]===null){P[Ze]=ye,Qe=Ze;break}if(Qe===-1)break}const Ce=L[Qe];Ce&&Ce.connect(ye)}}const Z=new J,K=new J;function N(ue,pe,ye){Z.setFromMatrixPosition(pe.matrixWorld),K.setFromMatrixPosition(ye.matrixWorld);const Qe=Z.distanceTo(K),Ce=pe.projectionMatrix.elements,Ze=ye.projectionMatrix.elements,wt=Ce[14]/(Ce[10]-1),$e=Ce[14]/(Ce[10]+1),At=(Ce[9]+1)/Ce[5],Rt=(Ce[9]-1)/Ce[5],St=(Ce[8]-1)/Ce[0],Wt=(Ze[8]+1)/Ze[0],sn=wt*St,on=wt*Wt,bt=Qe/(-St+Wt),Yt=bt*-St;if(pe.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(Yt),ue.translateZ(bt),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Ce[10]===-1)ue.projectionMatrix.copy(pe.projectionMatrix),ue.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const X=wt+bt,mn=$e+bt,Lt=sn-Yt,F=on+(Qe-Yt),E=At*$e/mn*X,Q=Rt*$e/mn*X;ue.projectionMatrix.makePerspective(Lt,F,E,Q,X,mn),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function oe(ue,pe){pe===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(pe.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(s===null)return;let pe=ue.near,ye=ue.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(ye=y.depthFar)),ie.near=G.near=k.near=pe,ie.far=G.far=k.far=ye,(H!==ie.near||ne!==ie.far)&&(s.updateRenderState({depthNear:ie.near,depthFar:ie.far}),H=ie.near,ne=ie.far),ie.layers.mask=ue.layers.mask|6,k.layers.mask=ie.layers.mask&-5,G.layers.mask=ie.layers.mask&-3;const Qe=ue.parent,Ce=ie.cameras;oe(ie,Qe);for(let Ze=0;Ze<Ce.length;Ze++)oe(Ce[Ze],Qe);Ce.length===2?N(ie,k,G):ie.projectionMatrix.copy(k.projectionMatrix),U===null&&ue.isPerspectiveCamera&&(U={camera:ue,fov:ue.fov,zoom:ue.zoom}),Te(ue,ie,Qe)};function Te(ue,pe,ye){ye===null?ue.matrix.copy(pe.matrixWorld):(ue.matrix.copy(ye.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(pe.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(pe.projectionMatrix),ue.projectionMatrixInverse.copy(pe.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=sh*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ue){m=ue,_!==null&&(_.fixedFoveation=ue),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ue)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ie)},this.getCameraTexture=function(ue){return S[ue]};let Be=null;function Xe(ue,pe){if(v=pe.getViewerPose(p||u),T=pe,v!==null){const ye=v.views;M!==null&&(e.setRenderTargetFramebuffer(C,M.framebuffer),e.setRenderTarget(C));let Qe=!1;ye.length!==ie.cameras.length&&(ie.cameras.length=0,Qe=!0);for(let $e=0;$e<ye.length;$e++){const At=ye[$e];let Rt=null;if(M!==null)Rt=M.getViewport(At);else{const Wt=x.getViewSubImage(_,At);Rt=Wt.viewport,$e===0&&(e.setRenderTargetTextures(C,Wt.colorTexture,Wt.depthStencilTexture),e.setRenderTarget(C))}let St=j[$e];St===void 0&&(St=new Li,St.layers.enable($e),St.viewport=new pn,j[$e]=St),St.matrix.fromArray(At.transform.matrix),St.matrix.decompose(St.position,St.quaternion,St.scale),St.projectionMatrix.fromArray(At.projectionMatrix),St.projectionMatrixInverse.copy(St.projectionMatrix).invert(),St.viewport.set(Rt.x,Rt.y,Rt.width,Rt.height),$e===0&&(ie.matrix.copy(St.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Qe===!0&&ie.cameras.push(St)}const Ce=s.enabledFeatures;if(Ce&&Ce.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){x=a.getBinding();const $e=x.getDepthInformation(ye[0]);$e&&$e.isValid&&$e.texture&&y.init($e,s.renderState)}if(Ce&&Ce.includes("camera-access")&&b){e.state.unbindTexture(),x=a.getBinding();for(let $e=0;$e<ye.length;$e++){const At=ye[$e].camera;if(At){let Rt=S[At];Rt||(Rt=new zv,S[At]=Rt);const St=x.getCameraImage(At);Rt.sourceTexture=St}}}}for(let ye=0;ye<L.length;ye++){const Qe=P[ye],Ce=L[ye];Qe!==null&&Ce!==void 0&&Ce.update(Qe,pe,p||u)}Be&&Be(ue,pe),pe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pe}),T=null}const qe=new Wv;qe.setAnimationLoop(Xe),this.setAnimationLoop=function(ue){Be=ue},this.dispose=function(){}}}const GC=new dn,Zv=new xt;Zv.set(-1,0,0,0,1,0,0,0,1);function BC(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,Hv(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,D,z,C){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,C)):S.isMeshMatcapMaterial?(l(y,S),T(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,D,z):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===di&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===di&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=e.get(S),z=D.envMap,C=D.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(GC.makeRotationFromEuler(C)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Zv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,D,z){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=z*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===di&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function T(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const D=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function WC(i,e,t,a){let s={},l={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(C,L){const P=L.program;a.uniformBlockBinding(C,P)}function p(C,L){let P=s[C.id];P===void 0&&(y(C),P=v(C),s[C.id]=P,C.addEventListener("dispose",D));const I=L.program;a.updateUBOMapping(C,I);const w=e.render.frame;l[C.id]!==w&&(_(C),l[C.id]=w)}function v(C){const L=x();C.__bindingPointIndex=L;const P=i.createBuffer(),I=C.__size,w=C.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,I,w),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function x(){for(let C=0;C<d;C++)if(u.indexOf(C)===-1)return u.push(C),C;return It("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(C){const L=s[C.id],P=C.uniforms,I=C.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let w=0,U=P.length;w<U;w++){const k=P[w];if(Array.isArray(k))for(let G=0,j=k.length;G<j;G++)M(k[G],w,G,I);else M(k,w,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(C,L,P,I){if(b(C,L,P,I)===!0){const w=C.__offset,U=C.value;if(Array.isArray(U)){let k=0;for(let G=0;G<U.length;G++){const j=U[G],ie=S(j);T(j,C.__data,k),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else T(U,C.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,w,C.__data)}}function T(C,L,P){typeof C=="number"||typeof C=="boolean"?L[0]=C:C.isMatrix3?(L[0]=C.elements[0],L[1]=C.elements[1],L[2]=C.elements[2],L[3]=0,L[4]=C.elements[3],L[5]=C.elements[4],L[6]=C.elements[5],L[7]=0,L[8]=C.elements[6],L[9]=C.elements[7],L[10]=C.elements[8],L[11]=0):ArrayBuffer.isView(C)?L.set(new C.constructor(C.buffer,C.byteOffset,L.length)):C.toArray(L,P)}function b(C,L,P,I){const w=C.value,U=L+"_"+P;if(I[U]===void 0)return typeof w=="number"||typeof w=="boolean"?I[U]=w:ArrayBuffer.isView(w)?I[U]=w.slice():I[U]=w.clone(),!0;{const k=I[U];if(typeof w=="number"||typeof w=="boolean"){if(k!==w)return I[U]=w,!0}else{if(ArrayBuffer.isView(w))return!0;if(k.equals(w)===!1)return k.copy(w),!0}}return!1}function y(C){const L=C.uniforms;let P=0;const I=16;for(let U=0,k=L.length;U<k;U++){const G=Array.isArray(L[U])?L[U]:[L[U]];for(let j=0,ie=G.length;j<ie;j++){const H=G[j],ne=Array.isArray(H.value)?H.value:[H.value];for(let ae=0,le=ne.length;ae<le;ae++){const Y=ne[ae],Z=S(Y),K=P%I,N=K%Z.boundary,oe=K+N;P+=N,oe!==0&&I-oe<Z.storage&&(P+=I-oe),H.__data=new Float32Array(Z.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=P,P+=Z.storage}}}const w=P%I;return w>0&&(P+=I-w),C.__size=P,C.__cache={},this}function S(C){const L={boundary:0,storage:0};return typeof C=="number"||typeof C=="boolean"?(L.boundary=4,L.storage=4):C.isVector2?(L.boundary=8,L.storage=8):C.isVector3||C.isColor?(L.boundary=16,L.storage=12):C.isVector4?(L.boundary=16,L.storage=16):C.isMatrix3?(L.boundary=48,L.storage=48):C.isMatrix4?(L.boundary=64,L.storage=64):C.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(C)?(L.boundary=16,L.storage=C.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",C),L}function D(C){const L=C.target;L.removeEventListener("dispose",D);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete l[L.id]}function z(){for(const C in s)i.deleteBuffer(s[C]);u=[],s={},l={}}return{bind:m,update:p,dispose:z}}const XC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let ir=null;function $C(){return ir===null&&(ir=new RM(XC,16,16,Ha,ur),ir.name="DFG_LUT",ir.minFilter=Zn,ir.magFilter=Zn,ir.wrapS=br,ir.wrapT=br,ir.generateMipmaps=!1,ir.needsUpdate=!0),ir}class YC{constructor(e={}){const{canvas:t=eM(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:M=yi}=e;this.isWebGLRenderer=!0;let T;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");T=a.getContextAttributes().alpha}else T=u;const b=M,y=new Set([wh,Th,Eh]),S=new Set([yi,cr,Xo,$o,yh,Mh]),D=new Uint32Array(4),z=new Int32Array(4),C=new J;let L=null,P=null;const I=[],w=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=lr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,j=null,ie=null,H=null,ne=null;this._outputColorSpace=Si;let ae=0,le=0,Y=null,Z=-1,K=null;const N=new pn,oe=new pn;let Te=null;const Be=new Ct(0);let Xe=0,qe=t.width,ue=t.height,pe=1,ye=null,Qe=null;const Ce=new pn(0,0,qe,ue),Ze=new pn(0,0,qe,ue);let wt=!1;const $e=new Nh;let At=!1,Rt=!1;const St=new dn,Wt=new J,sn=new pn,on={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let bt=!1;function Yt(){return Y===null?pe:1}let X=a;function mn(R,W){return t.getContext(R,W)}let Lt,F,E,Q,ce,me,Re,De,ge,_e,Ue,Je,Fe,Le,et,at,ht,B,Oe,ve,Ne,ke,Se;try{const R={alpha:!0,depth:s,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${xh}`),t.addEventListener("webglcontextlost",Me,!1),t.addEventListener("webglcontextrestored",xe,!1),t.addEventListener("webglcontextcreationerror",je,!1),X===null){const W="webgl2";if(X=mn(W,R),X===null)throw mn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(R){throw t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",je,!1),It("WebGLRenderer: "+R.message),R}function it(){Lt=new $w(X),Lt.init(),Ne=new IC(X,Lt),F=new Ow(X,Lt,e,Ne),E=new FC(X,Lt),F.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ie=X.createFramebuffer(),H=X.createFramebuffer(),ne=X.createFramebuffer(),Q=new jw(X),ce=new yC,me=new OC(X,Lt,E,ce,F,Ne,Q),Re=new Xw(k),De=new ZM(X),ke=new Uw(X,De),ge=new Yw(X,De,Q,ke),_e=new Zw(X,ge,De,ke,Q),B=new Kw(X,F,me),et=new Iw(ce),Ue=new SC(k,Re,Lt,F,ke,et),Je=new BC(k,ce),Fe=new EC,Le=new bC(Lt),ht=new Nw(k,Re,E,_e,T,m),at=new UC(k,_e,F),Se=new WC(X,Q,F,E),Oe=new Fw(X,Lt,Q),ve=new qw(X,Lt,Q),Q.programs=Ue.programs,k.capabilities=F,k.extensions=Lt,k.properties=ce,k.renderLists=Fe,k.shadowMap=at,k.state=E,k.info=Q}b!==yi&&(U=new Qw(b,t.width,t.height,d,s,l));const $=new VC(k,X);this.xr=$,this.getContext=function(){return X},this.getContextAttributes=function(){return X.getContextAttributes()},this.forceContextLoss=function(){const R=Lt.get("WEBGL_lose_context");R&&R.loseContext()},this.forceContextRestore=function(){const R=Lt.get("WEBGL_lose_context");R&&R.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(R){R!==void 0&&(pe=R,this.setSize(qe,ue,!1))},this.getSize=function(R){return R.set(qe,ue)},this.setSize=function(R,W,fe=!0){if($.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}qe=R,ue=W,t.width=Math.floor(R*pe),t.height=Math.floor(W*pe),fe===!0&&(t.style.width=R+"px",t.style.height=W+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,R,W)},this.getDrawingBufferSize=function(R){return R.set(qe*pe,ue*pe).floor()},this.setDrawingBufferSize=function(R,W,fe){qe=R,ue=W,pe=fe,t.width=Math.floor(R*fe),t.height=Math.floor(W*fe),this.setViewport(0,0,R,W)},this.setEffects=function(R){if(b===yi){It("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(R){for(let W=0;W<R.length;W++)if(R[W].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(R||[])},this.getCurrentViewport=function(R){return R.copy(N)},this.getViewport=function(R){return R.copy(Ce)},this.setViewport=function(R,W,fe,re){R.isVector4?Ce.set(R.x,R.y,R.z,R.w):Ce.set(R,W,fe,re),E.viewport(N.copy(Ce).multiplyScalar(pe).round())},this.getScissor=function(R){return R.copy(Ze)},this.setScissor=function(R,W,fe,re){R.isVector4?Ze.set(R.x,R.y,R.z,R.w):Ze.set(R,W,fe,re),E.scissor(oe.copy(Ze).multiplyScalar(pe).round())},this.getScissorTest=function(){return wt},this.setScissorTest=function(R){E.setScissorTest(wt=R)},this.setOpaqueSort=function(R){ye=R},this.setTransparentSort=function(R){Qe=R},this.getClearColor=function(R){return R.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(R=!0,W=!0,fe=!0){let re=0;if(R){let te=!1;if(Y!==null){const He=Y.texture.format;te=y.has(He)}if(te){const He=Y.texture.type,Ie=S.has(He),ze=ht.getClearColor(),tt=ht.getClearAlpha(),st=ze.r,vt=ze.g,yt=ze.b;Ie?(D[0]=st,D[1]=vt,D[2]=yt,D[3]=tt,X.clearBufferuiv(X.COLOR,0,D)):(z[0]=st,z[1]=vt,z[2]=yt,z[3]=tt,X.clearBufferiv(X.COLOR,0,z))}else re|=X.COLOR_BUFFER_BIT}W&&(re|=X.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(re|=X.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&X.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(R){R.setRenderer(this),j=R},this.dispose=function(){t.removeEventListener("webglcontextlost",Me,!1),t.removeEventListener("webglcontextrestored",xe,!1),t.removeEventListener("webglcontextcreationerror",je,!1),ht.dispose(),Fe.dispose(),Le.dispose(),ce.dispose(),Re.dispose(),_e.dispose(),ke.dispose(),Se.dispose(),Ue.dispose(),$.dispose(),$.removeEventListener("sessionstart",ct),$.removeEventListener("sessionend",zt),Vt.stop()};function Me(R){R.preventDefault(),Vc("WebGLRenderer: Context Lost."),G=!0}function xe(){Vc("WebGLRenderer: Context Restored."),G=!1;const R=Q.autoReset,W=at.enabled,fe=at.autoUpdate,re=at.needsUpdate,te=at.type;it(),Q.autoReset=R,at.enabled=W,at.autoUpdate=fe,at.needsUpdate=re,at.type=te}function je(R){It("WebGLRenderer: A WebGL context could not be created. Reason: ",R.statusMessage)}function lt(R){const W=R.target;W.removeEventListener("dispose",lt),qt(W)}function qt(R){Mt(R),ce.remove(R)}function Mt(R){const W=ce.get(R).programs;W!==void 0&&(W.forEach(function(fe){Ue.releaseProgram(fe)}),R.isShaderMaterial&&Ue.releaseShaderCache(R))}this.renderBufferDirect=function(R,W,fe,re,te,He){W===null&&(W=on);const Ie=te.isMesh&&te.matrixWorld.determinantAffine()<0,ze=en(R,W,fe,re,te);E.setMaterial(re,Ie);let tt=fe.index,st=1;if(re.wireframe===!0){if(tt=ge.getWireframeAttribute(fe),tt===void 0)return;st=2}const vt=fe.drawRange,yt=fe.attributes.position;let Ye=vt.start*st,Ut=(vt.start+vt.count)*st;He!==null&&(Ye=Math.max(Ye,He.start*st),Ut=Math.min(Ut,(He.start+He.count)*st)),tt!==null?(Ye=Math.max(Ye,0),Ut=Math.min(Ut,tt.count)):yt!=null&&(Ye=Math.max(Ye,0),Ut=Math.min(Ut,yt.count));const vn=Ut-Ye;if(vn<0||vn===1/0)return;ke.setup(te,re,ze,fe,tt);let Qt,$t=Oe;if(tt!==null&&(Qt=De.get(tt),$t=ve,$t.setIndex(Qt)),te.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*Yt()),$t.setMode(X.LINES)):$t.setMode(X.TRIANGLES);else if(te.isLine){let wn=re.linewidth;wn===void 0&&(wn=1),E.setLineWidth(wn*Yt()),te.isLineSegments?$t.setMode(X.LINES):te.isLineLoop?$t.setMode(X.LINE_LOOP):$t.setMode(X.LINE_STRIP)}else te.isPoints?$t.setMode(X.POINTS):te.isSprite&&$t.setMode(X.TRIANGLES);if(te.isBatchedMesh)if(Lt.get("WEBGL_multi_draw"))$t.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const wn=te._multiDrawStarts,Ge=te._multiDrawCounts,xn=te._multiDrawCount,Ft=tt?De.get(tt).bytesPerElement:1,Bn=ce.get(re).currentProgram.getUniforms();for(let Et=0;Et<xn;Et++)Bn.setValue(X,"_gl_DrawID",Et),$t.render(wn[Et]/Ft,Ge[Et])}else if(te.isInstancedMesh)$t.renderInstances(Ye,vn,te.count);else if(fe.isInstancedBufferGeometry){const wn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,Ge=Math.min(fe.instanceCount,wn);$t.renderInstances(Ye,vn,Ge)}else $t.render(Ye,vn)};function pt(R,W,fe,re){j!==null&&R.isNodeMaterial&&j.setObject(re,R),At===!0&&et.setState(R,fe,!1),R.transparent===!0&&R.side===qi&&R.forceSinglePass===!1?(R.side=di,R.needsUpdate=!0,Dn(R,W,re),R.side=ka,R.needsUpdate=!0,Dn(R,W,re),R.side=qi):Dn(R,W,re)}this.compile=function(R,W,fe=null){fe===null&&(fe=R),j!==null&&j.renderStart(R,W,fe),P=Le.get(fe),P.init(W),w.push(P),fe.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),R!==fe&&R.traverseVisible(function(te){te.isLight&&te.layers.test(W.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights(),j!==null&&j.updateLights(P.state.lightsArray),Rt=this.localClippingEnabled,At=et.init(this.clippingPlanes,Rt),At===!0&&et.setGlobalState(this.clippingPlanes,W),j!==null&&at.render(P.state.shadowsArray,fe,W);const re=new Set;return R.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const He=te.material;if(He)if(Array.isArray(He))for(let Ie=0;Ie<He.length;Ie++){const ze=He[Ie];pt(ze,fe,W,te),re.add(ze)}else pt(He,fe,W,te),re.add(He)}),P=w.pop(),j!==null&&j.renderEnd(),re},this.compileAsync=function(R,W,fe=null){const re=this.compile(R,W,fe);return new Promise(te=>{function He(){if(re.forEach(function(Ie){const tt=ce.get(Ie).currentProgram;(tt===void 0||tt.isReady())&&re.delete(Ie)}),re.size===0){te(R);return}setTimeout(He,10)}Lt.get("KHR_parallel_shader_compile")!==null?He():setTimeout(He,10)})};let Nt=null;function Xt(R){Nt&&Nt(R)}function ct(){Vt.stop()}function zt(){Vt.start()}const Vt=new Wv;Vt.setAnimationLoop(Xt),typeof self<"u"&&Vt.setContext(self),this.setAnimationLoop=function(R){Nt=R,$.setAnimationLoop(R),R===null?Vt.stop():Vt.start()},$.addEventListener("sessionstart",ct),$.addEventListener("sessionend",zt),this.render=function(R,W){if(W!==void 0&&W.isCamera!==!0){It("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(R,W);const fe=$.enabled===!0&&$.isPresenting===!0,re=U!==null&&(Y===null||fe)&&U.begin(k,Y);if(R.matrixWorldAutoUpdate===!0&&R.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),$.enabled===!0&&$.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&($.cameraAutoUpdate===!0&&$.updateCamera(W),W=$.getCamera()),R.isScene===!0&&R.onBeforeRender(k,R,W,Y),P=Le.get(R,w.length),P.init(W),P.state.textureUnits=me.getTextureUnits(),w.push(P),St.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),$e.setFromProjectionMatrix(St,or,W.reversedDepth),Rt=this.localClippingEnabled,At=et.init(this.clippingPlanes,Rt),L=Fe.get(R,I.length),L.init(),I.push(L),$.enabled===!0&&$.isPresenting===!0){const Ie=k.xr.getDepthSensingMesh();Ie!==null&&gn(Ie,W,-1/0,k.sortObjects)}gn(R,W,0,k.sortObjects),L.finish(),j!==null&&j.updateLights(P.state.lightsArray),k.sortObjects===!0&&L.sort(ye,Qe),bt=$.enabled===!1||$.isPresenting===!1||$.hasDepthSensing()===!1,bt&&ht.addToRenderList(L,R),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),At===!0&&et.beginShadows();const te=P.state.shadowsArray;if(at.render(te,R,W),At===!0&&et.endShadows(),(re&&U.hasRenderPass())===!1){const Ie=L.opaque,ze=L.transmissive;if(P.setupLights(),W.isArrayCamera){const tt=W.cameras;if(ze.length>0)for(let st=0,vt=tt.length;st<vt;st++){const yt=tt[st];Tn(Ie,ze,R,yt)}bt&&ht.render(R);for(let st=0,vt=tt.length;st<vt;st++){const yt=tt[st];yn(L,R,yt,yt.viewport)}}else ze.length>0&&Tn(Ie,ze,R,W),bt&&ht.render(R),yn(L,R,W)}Y!==null&&le===0&&(me.updateMultisampleRenderTarget(Y),me.updateRenderTargetMipmap(Y)),re&&U.end(k),R.isScene===!0&&R.onAfterRender(k,R,W),ke.resetDefaultState(),Z=-1,K=null,w.pop(),w.length>0?(P=w[w.length-1],me.setTextureUnits(P.state.textureUnits),At===!0&&et.setGlobalState(k.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,j!==null&&j.renderEnd()};function gn(R,W,fe,re){if(R.visible===!1)return;if(R.layers.test(W.layers)){if(R.isGroup)fe=R.renderOrder;else if(R.isLOD)R.autoUpdate===!0&&R.update(W);else if(R.isLightProbeGrid)P.pushLightProbeGrid(R);else if(R.isLight)P.pushLight(R),R.castShadow&&P.pushShadow(R);else if(R.isSprite){if(!R.frustumCulled||R.intersectsFrustum($e)){re&&sn.setFromMatrixPosition(R.matrixWorld).applyMatrix4(St);const Ie=_e.update(R),ze=R.material;ze.visible&&L.push(R,Ie,ze,fe,sn.z,null,W)}}else if((R.isMesh||R.isLine||R.isPoints)&&(!R.frustumCulled||R.intersectsFrustum($e))){const Ie=_e.update(R),ze=R.material;if(re&&(R.boundingSphere!==void 0?(R.boundingSphere===null&&R.computeBoundingSphere(),sn.copy(R.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),sn.copy(Ie.boundingSphere.center)),sn.applyMatrix4(R.matrixWorld).applyMatrix4(St)),Array.isArray(ze)){const tt=Ie.groups;for(let st=0,vt=tt.length;st<vt;st++){const yt=tt[st],Ye=ze[yt.materialIndex];Ye&&Ye.visible&&L.push(R,Ie,Ye,fe,sn.z,yt,W)}}else ze.visible&&L.push(R,Ie,ze,fe,sn.z,null,W)}}const He=R.children;for(let Ie=0,ze=He.length;Ie<ze;Ie++)gn(He[Ie],W,fe,re)}function yn(R,W,fe,re){const{opaque:te,transmissive:He,transparent:Ie}=R;P.setupLightsView(fe),At===!0&&et.setGlobalState(k.clippingPlanes,fe),re&&E.viewport(N.copy(re)),te.length>0&&nn(te,W,fe),He.length>0&&nn(He,W,fe),Ie.length>0&&nn(Ie,W,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Tn(R,W,fe,re){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const Ye=Lt.has("EXT_color_buffer_half_float")||Lt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new Zi(1,1,{generateMipmaps:!0,type:Ye?ur:yi,minFilter:Ua,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ot.workingColorSpace})}const He=P.state.transmissionRenderTarget[re.id],Ie=re.viewport||N;He.setSize(Ie.z*k.transmissionResolutionScale,Ie.w*k.transmissionResolutionScale);const ze=k.getRenderTarget(),tt=k.getActiveCubeFace(),st=k.getActiveMipmapLevel();k.setRenderTarget(He),k.getClearColor(Be),Xe=k.getClearAlpha(),Xe<1&&k.setClearColor(16777215,.5),k.clear(),bt&&ht.render(fe);const vt=k.toneMapping;k.toneMapping=lr;const yt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),At===!0&&et.setGlobalState(k.clippingPlanes,re),nn(R,fe,re),me.updateMultisampleRenderTarget(He),me.updateRenderTargetMipmap(He),Lt.has("WEBGL_multisampled_render_to_texture")===!1){let Ye=!1;for(let Ut=0,vn=W.length;Ut<vn;Ut++){const Qt=W[Ut],{object:$t,geometry:wn,material:Ge,group:xn}=Qt;if(Ge.side===qi&&$t.layers.test(re.layers)){const Ft=Ge.side;Ge.side=di,Ge.needsUpdate=!0,Ni($t,fe,re,wn,Ge,xn),Ge.side=Ft,Ge.needsUpdate=!0,Ye=!0}}Ye===!0&&(me.updateMultisampleRenderTarget(He),me.updateRenderTargetMipmap(He))}k.setRenderTarget(ze,tt,st),k.setClearColor(Be,Xe),yt!==void 0&&(re.viewport=yt),k.toneMapping=vt}function nn(R,W,fe){const re=W.isScene===!0?W.overrideMaterial:null;for(let te=0,He=R.length;te<He;te++){const Ie=R[te],{object:ze,geometry:tt,group:st}=Ie;let vt=Ie.material;vt.allowOverride===!0&&re!==null&&(vt=re),ze.layers.test(fe.layers)&&Ni(ze,W,fe,tt,vt,st)}}function Ni(R,W,fe,re,te,He){j!==null&&te.isNodeMaterial&&j.setObject(R,te),R.onBeforeRender(k,W,fe,re,te,He),R.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,R.matrixWorld),R.normalMatrix.getNormalMatrix(R.modelViewMatrix),te.onBeforeRender(k,W,fe,re,R,He),te.transparent===!0&&te.side===qi&&te.forceSinglePass===!1?(te.side=di,te.needsUpdate=!0,k.renderBufferDirect(fe,W,re,te,R,He),te.side=ka,te.needsUpdate=!0,k.renderBufferDirect(fe,W,re,te,R,He),te.side=qi):k.renderBufferDirect(fe,W,re,te,R,He),R.onAfterRender(k,W,fe,re,te,He)}function Dn(R,W,fe){W.isScene!==!0&&(W=on);const re=ce.get(R),te=P.state.lights,He=P.state.shadowsArray,Ie=te.state.version,ze=Ue.getParameters(R,te.state,He,W,fe,P.state.lightProbeGridArray),tt=Ue.getProgramCacheKey(ze);let st=re.programs;re.environment=R.isMeshStandardMaterial||R.isMeshLambertMaterial||R.isMeshPhongMaterial?W.environment:null,re.fog=W.fog;const vt=R.isMeshStandardMaterial||R.isMeshLambertMaterial&&!R.envMap||R.isMeshPhongMaterial&&!R.envMap;re.envMap=Re.get(R.envMap||re.environment,vt),re.envMapRotation=re.environment!==null&&R.envMap===null?W.environmentRotation:R.envMapRotation,st===void 0&&(R.addEventListener("dispose",lt),st=new Map,re.programs=st);let yt=st.get(tt);if(yt!==void 0){if(re.currentProgram===yt&&re.lightsStateVersion===Ie)return Ur(R,ze),yt}else ze.uniforms=Ue.getUniforms(R),j!==null&&R.isNodeMaterial&&j.build(R,fe,ze),R.onBeforeCompile(ze,k),yt=Ue.acquireProgram(ze,tt),st.set(tt,yt),re.uniforms=ze.uniforms;const Ye=re.uniforms;return(!R.isShaderMaterial&&!R.isRawShaderMaterial||R.clipping===!0)&&(Ye.clippingPlanes=et.uniform),Ur(R,ze),re.needsLights=Vs(R),re.lightsStateVersion=Ie,re.needsLights&&(Ye.ambientLightColor.value=te.state.ambient,Ye.lightProbe.value=te.state.probe,Ye.sunLights.value=te.state.sun,Ye.sunLightShadows.value=te.state.sunShadow,Ye.directionalLights.value=te.state.directional,Ye.directionalLightShadows.value=te.state.directionalShadow,Ye.spotLights.value=te.state.spot,Ye.spotLightShadows.value=te.state.spotShadow,Ye.rectAreaLights.value=te.state.rectArea,Ye.ltc_1.value=te.state.rectAreaLTC1,Ye.ltc_2.value=te.state.rectAreaLTC2,Ye.pointLights.value=te.state.point,Ye.pointLightShadows.value=te.state.pointShadow,Ye.hemisphereLights.value=te.state.hemi,Ye.sunShadowMatrix.value=te.state.sunShadowMatrix,Ye.sunShadowCascade.value=te.state.sunShadowCascade,Ye.directionalShadowMatrix.value=te.state.directionalShadowMatrix,Ye.spotLightMatrix.value=te.state.spotLightMatrix,Ye.spotLightMap.value=te.state.spotLightMap,Ye.pointShadowMatrix.value=te.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=yt,re.uniformsList=null,yt}function fr(R){if(R.uniformsList===null){const W=R.currentProgram.getUniforms();R.uniformsList=Dc.seqWithValue(W.seq,R.uniforms)}return R.uniformsList}function Ur(R,W){const fe=ce.get(R);fe.outputColorSpace=W.outputColorSpace,fe.batching=W.batching,fe.batchingColor=W.batchingColor,fe.instancing=W.instancing,fe.instancingColor=W.instancingColor,fe.instancingMorph=W.instancingMorph,fe.skinning=W.skinning,fe.morphTargets=W.morphTargets,fe.morphNormals=W.morphNormals,fe.morphColors=W.morphColors,fe.morphTargetsCount=W.morphTargetsCount,fe.numClippingPlanes=W.numClippingPlanes,fe.numIntersection=W.numClipIntersection,fe.vertexAlphas=W.vertexAlphas,fe.vertexTangents=W.vertexTangents,fe.toneMapping=W.toneMapping}function Va(R,W){if(R.length===0)return null;if(R.length===1)return R[0].texture!==null?R[0]:null;C.setFromMatrixPosition(W.matrixWorld);for(let fe=0,re=R.length;fe<re;fe++){const te=R[fe];if(te.texture!==null&&te.boundingBox.containsPoint(C))return te}return null}function en(R,W,fe,re,te){W.isScene!==!0&&(W=on),me.resetTextureUnits();const He=W.fog,Ie=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?W.environment:null,ze=Y===null?k.outputColorSpace:Y.isXRRenderTarget===!0?Y.texture.colorSpace:Ot.workingColorSpace,tt=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,st=Re.get(re.envMap||Ie,tt),vt=re.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,yt=!!fe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),Ye=!!fe.morphAttributes.position,Ut=!!fe.morphAttributes.normal,vn=!!fe.morphAttributes.color;let Qt=lr;re.toneMapped&&(Y===null||Y.isXRRenderTarget===!0)&&(Qt=k.toneMapping);const $t=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,wn=$t!==void 0?$t.length:0,Ge=ce.get(re),xn=P.state.lights;if(At===!0&&(Rt===!0||R!==K)){const jt=R===K&&re.id===Z;et.setState(re,R,jt)}let Ft=!1;re.version===Ge.__version?(Ge.needsLights&&Ge.lightsStateVersion!==xn.state.version||Ge.outputColorSpace!==ze||te.isBatchedMesh&&Ge.batching===!1||!te.isBatchedMesh&&Ge.batching===!0||te.isBatchedMesh&&Ge.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Ge.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Ge.instancing===!1||!te.isInstancedMesh&&Ge.instancing===!0||te.isSkinnedMesh&&Ge.skinning===!1||!te.isSkinnedMesh&&Ge.skinning===!0||te.isInstancedMesh&&Ge.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Ge.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Ge.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Ge.instancingMorph===!1&&te.morphTexture!==null||Ge.envMap!==st||re.fog===!0&&Ge.fog!==He||Ge.numClippingPlanes!==void 0&&(Ge.numClippingPlanes!==et.numPlanes||Ge.numIntersection!==et.numIntersection)||Ge.vertexAlphas!==vt||Ge.vertexTangents!==yt||Ge.morphTargets!==Ye||Ge.morphNormals!==Ut||Ge.morphColors!==vn||Ge.toneMapping!==Qt||Ge.morphTargetsCount!==wn||!!Ge.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Ft=!0):(Ft=!0,Ge.__version=re.version);let Bn=Ge.currentProgram;Ft===!0&&(Bn=Dn(re,W,te),j&&re.isNodeMaterial&&j.onUpdateProgram(re,Bn,Ge));let Et=!1,Ui=!1,hr=!1;const Gt=Bn.getUniforms(),ln=Ge.uniforms;if(E.useProgram(Bn.program)&&(Et=!0,Ui=!0,hr=!0),re.id!==Z&&(Z=re.id,Ui=!0),Ge.needsLights){const jt=Va(P.state.lightProbeGridArray,te);Ge.lightProbeGrid!==jt&&(Ge.lightProbeGrid=jt,Ui=!0)}if(Et||K!==R){E.buffers.depth.getReversed()&&R.reversedDepth!==!0&&(R._reversedDepth=!0,R.updateProjectionMatrix()),Gt.setValue(X,"projectionMatrix",R.projectionMatrix),Gt.setValue(X,"viewMatrix",R.matrixWorldInverse);const Ei=Gt.map.cameraPosition;Ei!==void 0&&Ei.setValue(X,Wt.setFromMatrixPosition(R.matrixWorld)),F.logarithmicDepthBuffer&&Gt.setValue(X,"logDepthBufFC",2/(Math.log(R.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Gt.setValue(X,"isOrthographic",R.isOrthographicCamera===!0),K!==R&&(K=R,Ui=!0,hr=!0)}if(Ge.needsLights&&(xn.state.sunShadowMap.length>0&&Gt.setValue(X,"sunShadowMap",xn.state.sunShadowMap,me),xn.state.directionalShadowMap.length>0&&Gt.setValue(X,"directionalShadowMap",xn.state.directionalShadowMap,me),xn.state.spotShadowMap.length>0&&Gt.setValue(X,"spotShadowMap",xn.state.spotShadowMap,me),xn.state.pointShadowMap.length>0&&Gt.setValue(X,"pointShadowMap",xn.state.pointShadowMap,me)),te.isSkinnedMesh){Gt.setOptional(X,te,"bindMatrix"),Gt.setOptional(X,te,"bindMatrixInverse");const jt=te.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Gt.setValue(X,"boneTexture",jt.boneTexture,me))}te.isBatchedMesh&&(Gt.setOptional(X,te,"batchingTexture"),Gt.setValue(X,"batchingTexture",te._matricesTexture,me),Gt.setOptional(X,te,"batchingIdTexture"),Gt.setValue(X,"batchingIdTexture",te._indirectTexture,me),Gt.setOptional(X,te,"batchingColorTexture"),te._colorsTexture!==null&&Gt.setValue(X,"batchingColorTexture",te._colorsTexture,me));const Fi=fe.morphAttributes;if((Fi.position!==void 0||Fi.normal!==void 0||Fi.color!==void 0)&&B.update(te,fe,Bn),(Ui||Ge.receiveShadow!==te.receiveShadow)&&(Ge.receiveShadow=te.receiveShadow,Gt.setValue(X,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&W.environment!==null&&(ln.envMapIntensity.value=W.environmentIntensity),ln.dfgLUT!==void 0&&(ln.dfgLUT.value=$C()),Ui){if(Gt.setValue(X,"toneMappingExposure",k.toneMappingExposure),Ge.needsLights&&eu(ln,hr),He&&re.fog===!0&&Je.refreshFogUniforms(ln,He),Je.refreshMaterialUniforms(ln,re,pe,ue,P.state.transmissionRenderTarget[R.id]),Ge.needsLights&&Ge.lightProbeGrid){const jt=Ge.lightProbeGrid;ln.probesSH.value=jt.texture,ln.probesMin.value.copy(jt.boundingBox.min),ln.probesMax.value.copy(jt.boundingBox.max),ln.probesResolution.value.copy(jt.resolution)}Dc.upload(X,fr(Ge),ln,me)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Dc.upload(X,fr(Ge),ln,me),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Gt.setValue(X,"center",te.center),Gt.setValue(X,"modelViewMatrix",te.modelViewMatrix),Gt.setValue(X,"normalMatrix",te.normalMatrix),Gt.setValue(X,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const jt=re.uniformsGroups;for(let Ei=0,Oi=jt.length;Ei<Oi;Ei++){const Ii=jt[Ei];Se.update(Ii,Bn),Se.bind(Ii,Bn)}}return Bn}function eu(R,W){R.ambientLightColor.needsUpdate=W,R.lightProbe.needsUpdate=W,R.sunLights.needsUpdate=W,R.sunLightShadows.needsUpdate=W,R.directionalLights.needsUpdate=W,R.directionalLightShadows.needsUpdate=W,R.pointLights.needsUpdate=W,R.pointLightShadows.needsUpdate=W,R.spotLights.needsUpdate=W,R.spotLightShadows.needsUpdate=W,R.rectAreaLights.needsUpdate=W,R.hemisphereLights.needsUpdate=W}function Vs(R){return R.isMeshLambertMaterial||R.isMeshToonMaterial||R.isMeshPhongMaterial||R.isMeshStandardMaterial||R.isShadowMaterial||R.isShaderMaterial&&R.lights===!0}this.getActiveCubeFace=function(){return ae},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return Y},this.setRenderTargetTextures=function(R,W,fe){const re=ce.get(R);re.__autoAllocateDepthBuffer=R.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ce.get(R.texture).__webglTexture=W,ce.get(R.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:fe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(R,W){const fe=ce.get(R);fe.__webglFramebuffer=W,fe.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(R,W=0,fe=0){Y=R,ae=W,le=fe;let re=null,te=!1,He=!1;if(R){const ze=ce.get(R);if(ze.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(X.FRAMEBUFFER,ze.__webglFramebuffer),N.copy(R.viewport),oe.copy(R.scissor),Te=R.scissorTest,E.viewport(N),E.scissor(oe),E.setScissorTest(Te),Z=-1;return}else if(ze.__webglFramebuffer===void 0)me.setupRenderTarget(R);else if(ze.__hasExternalTextures)me.rebindTextures(R,ce.get(R.texture).__webglTexture,ce.get(R.depthTexture).__webglTexture);else if(R.depthBuffer){const vt=R.depthTexture;if(ze.__boundDepthTexture!==vt){if(vt!==null&&ce.has(vt)&&(R.width!==vt.image.width||R.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(R)}}const tt=R.texture;(tt.isData3DTexture||tt.isDataArrayTexture||tt.isCompressedArrayTexture)&&(He=!0);const st=ce.get(R).__webglFramebuffer;R.isWebGLCubeRenderTarget?(Array.isArray(st[W])?re=st[W][fe]:re=st[W],te=!0):R.samples>0&&me.useMultisampledRTT(R)===!1?re=ce.get(R).__webglMultisampledFramebuffer:Array.isArray(st)?re=st[fe]:re=st,N.copy(R.viewport),oe.copy(R.scissor),Te=R.scissorTest}else N.copy(Ce).multiplyScalar(pe).floor(),oe.copy(Ze).multiplyScalar(pe).floor(),Te=wt;if(fe!==0&&(re=ie),E.bindFramebuffer(X.FRAMEBUFFER,re)&&E.drawBuffers(R,re),E.viewport(N),E.scissor(oe),E.setScissorTest(Te),te){const ze=ce.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_CUBE_MAP_POSITIVE_X+W,ze.__webglTexture,fe)}else if(He){const ze=W;for(let tt=0;tt<R.textures.length;tt++){const st=ce.get(R.textures[tt]);X.framebufferTextureLayer(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0+tt,st.__webglTexture,fe,ze)}}else if(R!==null&&fe!==0){const ze=ce.get(R.texture);X.framebufferTexture2D(X.FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ze.__webglTexture,fe)}Z=-1};function Gs(R){const W=ce.get(R);return(W.__readFormat!==R.format||W.__readType!==R.type)&&(W.__readFormat=R.format,W.__readType=R.type,W.__formatReadable=F.textureFormatReadable(R.format),W.__typeReadable=F.textureTypeReadable(R.type)),W}this.readRenderTargetPixels=function(R,W,fe,re,te,He,Ie,ze=0){if(!(R&&R.isWebGLRenderTarget)){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let tt=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(tt=tt[Ie]),tt){E.bindFramebuffer(X.FRAMEBUFFER,tt);try{const st=R.textures[ze],vt=st.format,yt=st.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ze);const Ye=Gs(st);if(Ye.__formatReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Ye.__typeReadable===!1){It("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=R.width-re&&fe>=0&&fe<=R.height-te&&X.readPixels(W,fe,re,te,Ne.convert(vt),Ne.convert(yt),He)}finally{const st=Y!==null?ce.get(Y).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,st)}}},this.readRenderTargetPixelsAsync=async function(R,W,fe,re,te,He,Ie,ze=0){if(!(R&&R.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let tt=ce.get(R).__webglFramebuffer;if(R.isWebGLCubeRenderTarget&&Ie!==void 0&&(tt=tt[Ie]),tt)if(W>=0&&W<=R.width-re&&fe>=0&&fe<=R.height-te){E.bindFramebuffer(X.FRAMEBUFFER,tt);const st=R.textures[ze],vt=st.format,yt=st.type;R.textures.length>1&&X.readBuffer(X.COLOR_ATTACHMENT0+ze);const Ye=Gs(st);if(Ye.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Ye.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ut=X.createBuffer();X.bindBuffer(X.PIXEL_PACK_BUFFER,Ut),X.bufferData(X.PIXEL_PACK_BUFFER,He.byteLength,X.STREAM_READ),X.readPixels(W,fe,re,te,Ne.convert(vt),Ne.convert(yt),0),X.bindBuffer(X.PIXEL_PACK_BUFFER,null);const vn=Y!==null?ce.get(Y).__webglFramebuffer:null;E.bindFramebuffer(X.FRAMEBUFFER,vn);const Qt=X.fenceSync(X.SYNC_GPU_COMMANDS_COMPLETE,0);return X.flush(),await tM(X,Qt,4),X.bindBuffer(X.PIXEL_PACK_BUFFER,Ut),X.getBufferSubData(X.PIXEL_PACK_BUFFER,0,He),X.bindBuffer(X.PIXEL_PACK_BUFFER,null),X.deleteBuffer(Ut),X.deleteSync(Qt),He}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(R,W=null,fe=0){const re=Math.pow(2,-fe),te=Math.floor(R.image.width*re),He=Math.floor(R.image.height*re),Ie=W!==null?W.x:0,ze=W!==null?W.y:0;me.setTexture2D(R,0),X.copyTexSubImage2D(X.TEXTURE_2D,fe,0,0,Ie,ze,te,He),E.unbindTexture()},this.copyTextureToTexture=function(R,W,fe=null,re=null,te=0,He=0){let Ie,ze,tt,st,vt,yt,Ye,Ut,vn;const Qt=R.isCompressedTexture?R.mipmaps[He]:R.image;if(fe!==null)Ie=fe.max.x-fe.min.x,ze=fe.max.y-fe.min.y,tt=fe.isBox3?fe.max.z-fe.min.z:1,st=fe.min.x,vt=fe.min.y,yt=fe.isBox3?fe.min.z:0;else{const ln=Math.pow(2,-te);Ie=Math.floor(Qt.width*ln),ze=Math.floor(Qt.height*ln),R.isDataArrayTexture?tt=Qt.depth:R.isData3DTexture?tt=Math.floor(Qt.depth*ln):tt=1,st=0,vt=0,yt=0}re!==null?(Ye=re.x,Ut=re.y,vn=re.z):(Ye=0,Ut=0,vn=0);const $t=Ne.convert(W.format),wn=Ne.convert(W.type);let Ge;W.isData3DTexture?(me.setTexture3D(W,0),Ge=X.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(me.setTexture2DArray(W,0),Ge=X.TEXTURE_2D_ARRAY):(me.setTexture2D(W,0),Ge=X.TEXTURE_2D),E.activeTexture(X.TEXTURE0),E.pixelStorei(X.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(X.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(X.UNPACK_ALIGNMENT,W.unpackAlignment);const xn=E.getParameter(X.UNPACK_ROW_LENGTH),Ft=E.getParameter(X.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(X.UNPACK_SKIP_PIXELS),Et=E.getParameter(X.UNPACK_SKIP_ROWS),Ui=E.getParameter(X.UNPACK_SKIP_IMAGES);E.pixelStorei(X.UNPACK_ROW_LENGTH,Qt.width),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Qt.height),E.pixelStorei(X.UNPACK_SKIP_PIXELS,st),E.pixelStorei(X.UNPACK_SKIP_ROWS,vt),E.pixelStorei(X.UNPACK_SKIP_IMAGES,yt);const hr=R.isDataArrayTexture||R.isData3DTexture,Gt=W.isDataArrayTexture||W.isData3DTexture;if(R.isDepthTexture){const ln=ce.get(R),Fi=ce.get(W),jt=ce.get(ln.__renderTarget),Ei=ce.get(Fi.__renderTarget);E.bindFramebuffer(X.READ_FRAMEBUFFER,jt.__webglFramebuffer),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,Ei.__webglFramebuffer);for(let Oi=0;Oi<tt;Oi++)hr&&(X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ce.get(R).__webglTexture,te,yt+Oi),X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ce.get(W).__webglTexture,He,vn+Oi)),X.blitFramebuffer(st,vt,Ie,ze,Ye,Ut,Ie,ze,X.DEPTH_BUFFER_BIT,X.NEAREST);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else if(te!==0||R.isRenderTargetTexture||ce.has(R)){const ln=ce.get(R),Fi=ce.get(W);E.bindFramebuffer(X.READ_FRAMEBUFFER,H),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,ne);for(let jt=0;jt<tt;jt++)hr?X.framebufferTextureLayer(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,ln.__webglTexture,te,yt+jt):X.framebufferTexture2D(X.READ_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,ln.__webglTexture,te),Gt?X.framebufferTextureLayer(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,Fi.__webglTexture,He,vn+jt):X.framebufferTexture2D(X.DRAW_FRAMEBUFFER,X.COLOR_ATTACHMENT0,X.TEXTURE_2D,Fi.__webglTexture,He),te!==0?X.blitFramebuffer(st,vt,Ie,ze,Ye,Ut,Ie,ze,X.COLOR_BUFFER_BIT,X.NEAREST):Gt?X.copyTexSubImage3D(Ge,He,Ye,Ut,vn+jt,st,vt,Ie,ze):X.copyTexSubImage2D(Ge,He,Ye,Ut,st,vt,Ie,ze);E.bindFramebuffer(X.READ_FRAMEBUFFER,null),E.bindFramebuffer(X.DRAW_FRAMEBUFFER,null)}else Gt?R.isDataTexture||R.isData3DTexture?X.texSubImage3D(Ge,He,Ye,Ut,vn,Ie,ze,tt,$t,wn,Qt.data):W.isCompressedArrayTexture?X.compressedTexSubImage3D(Ge,He,Ye,Ut,vn,Ie,ze,tt,$t,Qt.data):X.texSubImage3D(Ge,He,Ye,Ut,vn,Ie,ze,tt,$t,wn,Qt):R.isDataTexture?X.texSubImage2D(X.TEXTURE_2D,He,Ye,Ut,Ie,ze,$t,wn,Qt.data):R.isCompressedTexture?X.compressedTexSubImage2D(X.TEXTURE_2D,He,Ye,Ut,Qt.width,Qt.height,$t,Qt.data):X.texSubImage2D(X.TEXTURE_2D,He,Ye,Ut,Ie,ze,$t,wn,Qt);E.pixelStorei(X.UNPACK_ROW_LENGTH,xn),E.pixelStorei(X.UNPACK_IMAGE_HEIGHT,Ft),E.pixelStorei(X.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(X.UNPACK_SKIP_ROWS,Et),E.pixelStorei(X.UNPACK_SKIP_IMAGES,Ui),He===0&&W.generateMipmaps&&X.generateMipmap(Ge),E.unbindTexture()},this.initRenderTarget=function(R){ce.get(R).__webglFramebuffer===void 0&&me.setupRenderTarget(R)},this.initTexture=function(R){R.isCubeTexture?me.setTextureCube(R,0):R.isData3DTexture?me.setTexture3D(R,0):R.isDataArrayTexture||R.isCompressedArrayTexture?me.setTexture2DArray(R,0):me.setTexture2D(R,0),E.unbindTexture()},this.resetState=function(){ae=0,le=0,Y=null,E.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return or}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ot._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ot._getUnpackColorSpace()}}class qC extends Oh{constructor(e){super(e)}load(e,t,a,s){const l=this,u=new GM(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(d){try{t(l.parse(d))}catch(m){s?s(m):console.error(m),l.manager.itemError(e)}},a,s)}parse(e){function t(p){const v=new DataView(p),x=32/8*3+32/8*3*3+16/8,_=v.getUint32(80,!0);if(80+32/8+_*x===v.byteLength)return!0;const T=[115,111,108,105,100];for(let b=0;b<5;b++)if(a(T,v,b))return!1;return!0}function a(p,v,x){for(let _=0,M=p.length;_<M;_++)if(p[_]!==v.getUint8(x+_))return!1;return!0}function s(p){const v=new DataView(p),x=v.getUint32(80,!0);let _,M,T,b=!1,y,S,D,z,C;for(let G=0;G<70;G++)v.getUint32(G,!1)==1129270351&&v.getUint8(G+4)==82&&v.getUint8(G+5)==61&&(b=!0,y=new Float32Array(x*3*3),S=v.getUint8(G+6)/255,D=v.getUint8(G+7)/255,z=v.getUint8(G+8)/255,C=v.getUint8(G+9)/255);const L=84,P=50,I=new ii,w=new Float32Array(x*3*3),U=new Float32Array(x*3*3),k=new Ct;for(let G=0;G<x;G++){const j=L+G*P,ie=v.getFloat32(j,!0),H=v.getFloat32(j+4,!0),ne=v.getFloat32(j+8,!0);if(b){const ae=v.getUint16(j+48,!0);(ae&32768)===0?(_=(ae&31)/31,M=(ae>>5&31)/31,T=(ae>>10&31)/31):(_=S,M=D,T=z)}for(let ae=1;ae<=3;ae++){const le=j+ae*12,Y=G*3*3+(ae-1)*3;w[Y]=v.getFloat32(le,!0),w[Y+1]=v.getFloat32(le+4,!0),w[Y+2]=v.getFloat32(le+8,!0),U[Y]=ie,U[Y+1]=H,U[Y+2]=ne,b&&(k.setRGB(_,M,T,Si),y[Y]=k.r,y[Y+1]=k.g,y[Y+2]=k.b)}}return I.setAttribute("position",new fi(w,3)),I.setAttribute("normal",new fi(U,3)),b&&(I.setAttribute("color",new fi(y,3)),I.hasColors=!0,I.alpha=C),I}function l(p){const v=new ii,x=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let T=0;const b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+b+b+b,"g"),S=new RegExp("normal"+b+b+b,"g"),D=[],z=[],C=[],L=new J;let P,I=0,w=0,U=0;for(;(P=x.exec(p))!==null;){w=U;const k=P[0],G=(P=M.exec(k))!==null?P[1]:"";for(C.push(G);(P=_.exec(k))!==null;){let H=0,ne=0;const ae=P[0];for(;(P=S.exec(ae))!==null;)L.x=parseFloat(P[1]),L.y=parseFloat(P[2]),L.z=parseFloat(P[3]),ne++;for(;(P=y.exec(ae))!==null;)D.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),z.push(L.x,L.y,L.z),H++,U++;ne!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+T),H!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+T),T++}const j=w,ie=U-w;v.userData.groupNames=C,v.addGroup(j,ie,I),I++}return v.setAttribute("position",new bn(D,3)),v.setAttribute("normal",new bn(z,3)),v}function u(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const v=new Uint8Array(p.length);for(let x=0;x<p.length;x++)v[x]=p.charCodeAt(x)&255;return v.buffer||v}else return p}const m=d(e);return t(m)?s(m):l(u(e))}}function jC(i,e=Math.PI/3){const t=i.index?i.toNonIndexed():i,a=t.attributes.position,s=a.count;let l;if(a.isBufferAttribute===!0&&a.itemSize===3&&a.normalized===!1)l=a.array;else{l=new Float64Array(s*3);for(let C=0;C<s;C++)l[3*C+0]=a.getX(C),l[3*C+1]=a.getY(C),l[3*C+2]=a.getZ(C)}const u=Math.cos(e),d=(1+1e-10)*100,m=s/3,p=new Float64Array(m*3);for(let C=0;C<m;C++){const L=9*C,P=l[L+0],I=l[L+1],w=l[L+2],U=l[L+3],k=l[L+4],G=l[L+5],j=l[L+6],ie=l[L+7],H=l[L+8],ne=j-U,ae=ie-k,le=H-G,Y=P-U,Z=I-k,K=w-G,N=ae*K-le*Z,oe=le*Y-ne*K,Te=ne*Z-ae*Y,Be=1/(Math.sqrt(N*N+oe*oe+Te*Te)||1);p[3*C+0]=N*Be,p[3*C+1]=oe*Be,p[3*C+2]=Te*Be}const v=new Int32Array(s),x=new Float64Array(s*3);let _=1;for(;_<s*2;)_<<=1;const M=_-1,T=new Int32Array(_);let b=0;for(let C=0;C<s;C++){const L=3*C,P=Math.trunc(l[L+0]*d),I=Math.trunc(l[L+1]*d),w=Math.trunc(l[L+2]*d);let U=(Math.imul(P,73856093)^Math.imul(I,19349663)^Math.imul(w,83492791))&M;for(;;){const k=T[U];if(k===0){const j=3*b;x[j+0]=P,x[j+1]=I,x[j+2]=w,T[U]=b+1,v[C]=b++;break}const G=3*(k-1);if(x[G+0]===P&&x[G+1]===I&&x[G+2]===w){v[C]=k-1;break}U=U+1&M}}const y=new Int32Array(b+1);for(let C=0;C<s;C++)y[v[C]+1]++;for(let C=0;C<b;C++)y[C+1]+=y[C];const S=new Int32Array(s),D=y.slice(0,b);for(let C=0;C<m;C++){const L=3*C;S[D[v[L+0]]++]=C,S[D[v[L+1]]++]=C,S[D[v[L+2]]++]=C}const z=new Float32Array(s*3);for(let C=0;C<m;C++){const L=3*C,P=p[L+0],I=p[L+1],w=p[L+2];for(let U=0;U<3;U++){const k=L+U,G=v[k];let j=0,ie=0,H=0;for(let ae=y[G],le=y[G+1];ae<le;ae++){const Y=3*S[ae],Z=p[Y+0],K=p[Y+1],N=p[Y+2];P*Z+I*K+w*N>u&&(j+=Z,ie+=K,H+=N)}const ne=1/(Math.sqrt(j*j+ie*ie+H*H)||1);z[3*k+0]=j*ne,z[3*k+1]=ie*ne,z[3*k+2]=H*ne}}return t.setAttribute("normal",new fi(z,3,!1)),t}const N0={type:"change"},kh={type:"start"},Jv={type:"end"},Ec=new Lh,U0=new Rr,KC=Math.cos(70*rM.DEG2RAD),Rn=new J,ui=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},mf=1e-6;class ZC extends jM{constructor(e,t=null){super(e,t),this.state=Zt.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.DOLLY,RIGHT:Pr.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new ca,this._lastTargetPosition=new J,this._quat=new ca().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new l0,this._sphericalDelta=new l0,this._scale=1,this._panOffset=new J,this._rotateStart=new ut,this._rotateEnd=new ut,this._rotateDelta=new ut,this._panStart=new ut,this._panEnd=new ut,this._panDelta=new ut,this._dollyStart=new ut,this._dollyEnd=new ut,this._dollyDelta=new ut,this._dollyDirection=new J,this._mouse=new ut,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=QC.bind(this),this._onPointerDown=JC.bind(this),this._onPointerUp=e1.bind(this),this._onContextMenu=o1.bind(this),this._onMouseWheel=i1.bind(this),this._onKeyDown=r1.bind(this),this._onTouchStart=a1.bind(this),this._onTouchMove=s1.bind(this),this._onMouseDown=t1.bind(this),this._onMouseMove=n1.bind(this),this._interceptControlDown=l1.bind(this),this._interceptControlUp=c1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Zt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(N0),this.update(),this.state=Zt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Rn.copy(t).sub(this.target),Rn.applyQuaternion(this._quat),this._spherical.setFromVector3(Rn),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(a)&&isFinite(s)&&(a<-Math.PI?a+=ui:a>Math.PI&&(a-=ui),s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),a<=s?this._spherical.theta=Math.max(a,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+s)/2?Math.max(a,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Rn.setFromSpherical(this._spherical),Rn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Rn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Rn.length();u=this._clampDistance(d*this._scale);const m=d-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),l=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Rn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(Ec.origin.copy(this.object.position),Ec.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(Ec.direction))<KC?this.object.lookAt(this.target):(U0.setFromNormalAndCoplanarPoint(this.object.up,this.target),Ec.intersectPlane(U0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>mf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>mf||this._lastTargetPosition.distanceToSquared(this.target)>mf?(this.dispatchEvent(N0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Rn.setFromMatrixColumn(t,0),Rn.multiplyScalar(-e),this._panOffset.add(Rn)}_panUp(e,t){this.screenSpacePanning===!0?Rn.setFromMatrixColumn(t,1):(Rn.setFromMatrixColumn(t,0),Rn.crossVectors(this.object.up,Rn)),Rn.multiplyScalar(e),this._panOffset.add(Rn)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Rn.copy(s).sub(this.target);let l=Rn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*t*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),s=e-a.left,l=t-a.top,u=a.width,d=a.height;this._mouse.x=s/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(a,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(a,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),s=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(s,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(a,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ut,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function JC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function QC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function e1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Jv),this.state=Zt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function t1(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Zt.DOLLY;break;case Pr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}break;case Pr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(kh)}function n1(i){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function i1(i){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(i.preventDefault(),this.dispatchEvent(kh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Jv))}function r1(i){this.enabled!==!1&&this._handleKeyDown(i)}function a1(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Zt.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Zt.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(kh)}function s1(i){switch(this._trackPointer(i),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Zt.NONE}}function o1(i){this.enabled!==!1&&i.preventDefault()}function l1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function c1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const Na="../../",gf={label:"PR #28 (viewer-compare)",sha:"9a2902e5b2e80863a97eaaf33886fee5ceea83ad".slice(0,7)},Kn=new URLSearchParams(location.search),vf=(location.pathname.match(/\/(pr\/\d+\/)/)||[])[1]||"",F0=i=>!i||i==="main"?"":i.replace(/^\/+|\/+$/g,"")+"/",Bc=i=>(i.match(/pr\/(\d+)/)||[])[1],u1=i=>i.path?`#${Bc(i.path)} ${i.title||i.label}`:"main",Io=i=>i?`#${Bc(i)}`:"main",Da=i=>i.replace(/^N2_/,"").replace(/_/g," "),Yi={added:"#32a467",removed:"#e76a6e",changed:"#f0b726",moved:"#4c90f0",same:"#738091"},d1=3,f1=22,h1=["N2_keeper","N2_armature"],p1={Z:{label:"Straight pull (R3)",parts:{N2_adapter:"Z",N2_receiver:"Z",N2_keeper:"Z"}},Z_distal_lost:{label:"Straight pull, distal roof lost",parts:{N2_adapter:"Z",N2_receiver:"Z_distal_lost",N2_keeper:"Z_distal_lost"}},XZ90:{label:"Side pull 90° (outside R3)",parts:{N2_adapter:"XZ90",N2_receiver:"XZ90"}}};function Qv(i,e){if(i>1)return e.setRGB(.85,.1,.85);const t=[[.19,.07,.23],[.16,.47,.93],[.1,.84,.66],[.64,.99,.24],[.98,.73,.22],[.86,.22,.05]],a=Math.max(0,i)*(t.length-1),s=Math.min(Math.floor(a),t.length-2),l=a-s;return e.setRGB(...t[s].map((u,d)=>u+(t[s+1][d]-u)*l))}const m1=`linear-gradient(90deg, ${[0,.2,.4,.6,.8,1].map(i=>"#"+Qv(i,new Ct).getHexString()).join(",")})`;function g1(i){const e=i.attributes.position,t=e.count;i.computeBoundingBox();const a=i.boundingBox;let s=0,l=0,u=0;for(let d=0;d<t;d++)s+=e.getX(d),l+=e.getY(d),u+=e.getZ(d);return{tris:t/3,size:a.getSize(new J).toArray(),key:[t/3,...a.min.toArray(),...a.max.toArray(),s/t,l/t,u/t].map(d=>d.toFixed(2)).join(",")}}const O0=i=>[i.tris,...i.size.map(e=>e.toFixed(2))].join(",");function I0(i,e){const t=i==null?void 0:i.motion,a=u=>u*u*(3-2*u),s=t?t.a_latch+(t.a_release-t.a_latch)*a(Math.min(e,1)):0,l=t?t.r*(Math.cos(s*Math.PI/180)-Math.cos(t.a_latch*Math.PI/180)):0;return{mo:t,alpha:s,kx:l}}function k0(i,e="#fff"){const t=document.createElement("canvas"),a=t.getContext("2d");a.font="bold 28px sans-serif";const s=Math.ceil(a.measureText(i).width)+28;t.width=s,t.height=48,a.fillStyle="rgba(17,20,24,0.85)",a.fillRect(0,0,s,48),a.fillStyle=e,a.font="bold 28px sans-serif",a.textBaseline="middle",a.fillText(i,14,25);const l=new AM(new Ov({map:new PM(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return l.scale.set(.024*s/48,.024,1),l.center.set(.5,0),l.renderOrder=11,l}function v1(i){const e=Pe.useRef(null);if(!e.current){const t=new _M;t.add(new BM(16777215,3359829,2.2));const a=new a0(16777215,1.6);a.position.set(60,-40,90),t.add(a);const s=new a0(16777215,.6);s.position.set(-50,60,-30),t.add(s);const l=new Li(35,1,.1,3e3);l.up.set(0,0,1),e.current={scene:t,cam:l,sets:{A:new Map,B:new Map},fea:new Map,markers:new Fo},t.add(e.current.markers)}return Pe.useEffect(()=>{const t=e.current,a=new YC({antialias:!0,preserveDrawingBuffer:!0});a.setPixelRatio(devicePixelRatio),a.setClearColor(1316636),i.current.appendChild(a.domElement);const s=new ZC(t.cam,a.domElement);Object.assign(s,{enableDamping:!0,dampingFactor:.12,rotateSpeed:.9,zoomToCursor:!0,screenSpacePanning:!0}),s.mouseButtons={LEFT:Pr.ROTATE,MIDDLE:Pr.PAN,RIGHT:Pr.PAN},t.oc=s;let l=!0;const u=new qM;a.domElement.addEventListener("dblclick",m=>{const p=a.domElement.getBoundingClientRect();u.setFromCamera(new ut((m.clientX-p.left)/p.width*2-1,-(m.clientY-p.top)/p.height*2+1),t.cam);const v=u.intersectObjects([...t.sets.A.values(),...t.sets.B.values(),...t.fea.values()].filter(x=>x.visible))[0];if(v){const x=v.point.clone().sub(s.target);s.target.add(x),t.cam.position.add(x)}});const d=()=>{var v;if(!l)return;requestAnimationFrame(d),(v=t.tick)==null||v.call(t),s.update();const m=i.current.clientWidth,p=i.current.clientHeight;(a.domElement.width!==Math.floor(m*a.getPixelRatio())||a.domElement.height!==Math.floor(p*a.getPixelRatio()))&&a.setSize(m,p),t.cam.aspect=m/p,t.cam.updateProjectionMatrix(),a.render(t.scene,t.cam)};return d(),()=>{l=!1,a.dispose(),a.domElement.remove()}},[]),e.current}function z0(i,e,t,a){const s=e.getCenter(new J),l=e.getSize(new J).length()*2.1+10,u={iso:a||[.75,-1,.65],front:[0,-1,1e-4],top:[1e-4,-1e-4,1],side:[1,0,1e-4]}[t];i.oc.target.copy(s),i.cam.position.copy(s).add(new J(...u).normalize().multiplyScalar(l)),i.oc.update()}const _1=i=>new da(new J(...i.min),new J(...i.max));function H0(i,e,t,a,s,l){const[u,d]=Pe.useState(null),[m,p]=Pe.useState(null),[v,x]=Pe.useState("");return Pe.useEffect(()=>{const _=i.sets[e];for(const b of _.values())i.scene.remove(b),b.geometry.dispose();if(_.clear(),d(null),p(null),x(""),t===null||!a)return;const M=`${t}|${a}`;i["tag"+e]=M;const T=`${t}model/${a}/`;fetch(`${T}manifest.json`,{cache:"no-store"}).then(b=>{if(!b.ok)throw new Error(`HTTP ${b.status}`);return b.json()}).then(b=>{if(i["tag"+e]!==M)return;d(b);const y=new qC;b.parts.forEach(S=>y.load(`${T}${S.stl}`,D=>{if(i["tag"+e]!==M)return;const z=s!=null&&s.p14?(D.computeVertexNormals(),D):jC(D,Math.PI/7),C=S.kind==="purchased"&&/screw|spline/.test(S.id),L=new Mi(z,new Vv({color:S.color,metalness:C?.6:.1,roughness:C?.35:.6,side:qi}));L.userData={p:S,sig:g1(D),c0:new Ct(S.color),key:e},_.set(S.id,L),i.scene.add(L),l()}))}).catch(b=>i["tag"+e]===M&&x(`${a} not published at ${Io(t.slice(Na.length))} (${b.message})`)),(s!=null&&s.p14||s!=null&&s.fea)&&fetch(`${s!=null&&s.p14?t+"fea/":T+"fea/"}index.json`,{cache:"no-store"}).then(b=>b.json()).then(b=>i["tag"+e]===M&&p(b)).catch(()=>{})},[t,a]),{man:u,fea:m,err:v}}function x1(){var Ne,ke,Se,it;const i=Pe.useRef(),e=v1(i),[t,a]=Pe.useState([{path:"",label:"main",title:""}]),[s,l]=Pe.useState(F0(Kn.get("base")??(vf?"":Kn.get("compare")??""))),[u,d]=Pe.useState(F0(Kn.get("prop")??(vf||(Kn.get("compare"),"")))),[m,p]=Pe.useState(Kn.get("view")||(vf||Kn.get("compare")?"overlay":"single")),[v,x]=Pe.useState(Kn.get("mode")==="fea"?"fea":"model"),[_,M]=Pe.useState([]),[T,b]=Pe.useState(Kn.get("design")),[y,S]=Pe.useState(Number(Kn.get("explode")||0)),[D,z]=Pe.useState(Number(Kn.get("phase")||0)),[C,L]=Pe.useState(!1),[P,I]=Pe.useState({}),[w,U]=Pe.useState(null),[k,G]=Pe.useState(Kn.get("diffcolors")!=="0"),[j,ie]=Pe.useState(Kn.get("changed")==="1"),[H,ne]=Pe.useState("Z"),[ae,le]=Pe.useState(Number(Kn.get("load")||17.8)),[Y,Z]=Pe.useState(Kn.get("scale")!=="abs"),[K,N]=Pe.useState(Kn.get("fade")!=="0"),[oe,Te]=Pe.useState(!0),[Be,Xe]=Pe.useState(0),[qe,ue]=Pe.useState(0),pe=()=>Xe($=>$+1),ye=m!=="single";Pe.useEffect(()=>{fetch(`${Na}versions.json`,{cache:"no-store"}).then($=>$.json()).then($=>{$=[...$].sort((Me,xe)=>(Me.path?+Bc(Me.path):1e9)-(xe.path?+Bc(xe.path):1e9)).reverse(),a($.length?$:[{path:"",label:"main",title:""}])}).catch(()=>{})},[]),Pe.useEffect(()=>{const $=Me=>fetch(`${Me}model/designs.json`,{cache:"no-store"}).then(xe=>{if(!xe.ok)throw 0;return xe.json()});$(Na+u).catch(()=>$("")).then(Me=>{M(Me),b(xe=>{var je;return Me.find(lt=>lt.id===xe)?xe:(je=Me[Me.length-1])==null?void 0:je.id})}).catch(()=>{})},[u]);const Qe=_.find($=>$.id===T),Ce=H0(e,"B",Na+u,T,Qe,pe),Ze=H0(e,"A",ye?Na+s:null,T,Qe,pe),wt=Ce.man,$e=Ce.fea,At=Qe==null?void 0:Qe.p14;Pe.useEffect(()=>{const $=new URL(location.href),Me=$.searchParams;Me.delete("compare");const xe=(je,lt,qt)=>lt===qt||lt===null?Me.delete(je):Me.set(je,lt);xe("design",T,null),xe("base",s?s.replace(/\/$/,""):"main",null),xe("prop",u?u.replace(/\/$/,""):"main",null),xe("view",m,"single"),xe("mode",v,"model"),xe("explode",y?String(y):null,null),xe("diffcolors",k?null:"0",null),xe("changed",j?"1":null,null),history.replaceState(null,"",$)},[T,s,u,m,v,y,k,j]),Pe.useEffect(()=>{for(const xe of e.fea.values())e.scene.remove(xe),xe.geometry.dispose();if(e.fea.clear(),e.peaked=!1,!$e)return;const $=At?`${Na}${u}fea/`:`${Na}${u}model/${T}/fea/`,Me=e.tagB;$e.cases.forEach(xe=>fetch(`${$}${xe.part}__${xe.case}.json`).then(je=>je.json()).then(je=>{if(Me!==e.tagB)return;const lt=new ii;lt.setAttribute("position",new bn(je.pos,3)),lt.setIndex(je.idx),lt.computeVertexNormals(),lt.setAttribute("color",new bn(new Float32Array(je.pos.length),3));const qt=new Mi(lt,new Vv({vertexColors:!0,metalness:0,roughness:.75,side:qi}));let Mt=0;for(let ct=1;ct<je.fi.length;ct++)je.fi[ct]>je.fi[Mt]&&(Mt=ct);const pt=new J;lt.computeBoundingBox(),lt.boundingBox.getCenter(pt);const Nt=new J().fromBufferAttribute(lt.attributes.position,Mt),Xt=new J().fromBufferAttribute(lt.attributes.normal,Mt);Xt.dot(Nt.clone().sub(pt))<0&&Xt.negate(),je.peakV=Nt.toArray(),je.peakN=Xt.normalize().toArray(),je.fiMax=je.fi[Mt],qt.userData={d:je,part:xe.part},qt.visible=!1,e.fea.set(`${xe.part}__${xe.case}`,qt),e.scene.add(qt),ue(ct=>ct+1)}))},[$e]),Pe.useEffect(()=>{if(!C)return;const $=performance.now(),Me=D>=2?0:D;let xe;const je=lt=>{const qt=Me+(lt-$)/1600;z(Math.min(qt,2)),qt<2?xe=requestAnimationFrame(je):L(!1)};return xe=requestAnimationFrame(je),()=>cancelAnimationFrame(xe)},[C]);const Rt=Pe.useMemo(()=>{if(!ye||!Ze.man||!Ce.man)return null;const $=[...new Set([...Ze.man.parts.map(xe=>xe.id),...Ce.man.parts.map(xe=>xe.id)])],Me={};for(const xe of $){const je=e.sets.A.get(xe),lt=e.sets.B.get(xe),qt=Ze.man.parts.some(Xt=>Xt.id===xe),Mt=Ce.man.parts.some(Xt=>Xt.id===xe),pt=qt?Mt?!je||!lt?"loading":je.userData.sig.key===lt.userData.sig.key?"same":O0(je.userData.sig)===O0(lt.userData.sig)?"moved":"changed":"removed":"added",Nt=Xt=>Xt.map(ct=>ct.toFixed(1)).join("×");Me[xe]={st:pt,note:pt==="changed"?`${Nt(je.userData.sig.size)} → ${Nt(lt.userData.sig.size)} mm · ${je.userData.sig.tris}→${lt.userData.sig.tris} tris`:pt==="moved"?"same shape, new position":""}}return Me},[ye,Ze.man,Ce.man,Be]),St={added:0,removed:1,changed:2,moved:3,loading:4,same:5},Wt=Rt?Object.entries(Rt).sort(($,Me)=>St[$[1].st]-St[Me[1].st]):[],sn=Wt.filter(([,$])=>!["same","loading"].includes($.st)).length,on=($e==null?void 0:$e.groups)||p1,bt=v==="fea"&&!ye&&!!$e,Yt=bt&&on[H]?on[H].parts:{},X=$e?31/$e.z_tds_MPa:1,mn=Math.max(1e-9,...[...e.fea.values()].filter($=>Yt[$.userData.part]&&!P[$.userData.part]).map($=>($.userData.d.fiMax||0)*ae*X)),Lt=Y?mn:1,F=$e?Object.entries(Yt).map(([$,Me])=>$e.cases.find(xe=>xe.part===$&&xe.case===Me)).filter(Boolean):[],E=F.reduce(($,Me)=>!$||Me.fail_N<$.fail_N?Me:$,null),Q=$e!=null&&$e.cases?Math.max(60,Math.ceil(Math.min(...$e.cases.map($=>$.fail_N))*1.2)):60,ce=()=>{const $=E&&e.fea.get(`${E.part}__${E.case}`);if(!($!=null&&$.userData.d.peakV))return;const Me=new J(...$.userData.d.peakV).add($.position),xe=new J(...$.userData.d.peakN),je=xe.clone().add(new J(0,0,xe.z>.7?0:.35)).normalize();e.oc.target.copy(Me),e.cam.position.copy(Me).add(je.multiplyScalar(70)),e.oc.update()};Pe.useEffect(()=>{var $;E&&bt&&Kn.get("peak")==="1"&&!e.peaked&&e.fea.get(`${E.part}__${E.case}`)&&(e.peaked=!0,($=e.tick)==null||$.call(e),ce())},[qe,E,bt]);const me=((wt==null?void 0:wt.iso)||((Ne=Ze.man)==null?void 0:Ne.iso)||[.75,-1])[1]>0?1:-1,Re=Math.max((wt==null?void 0:wt.bounds.size[0])||0,((ke=Ze.man)==null?void 0:ke.bounds.size[0])||0),De=m==="side"?me*Re*.68:0,ge=m==="side"?-me*Re*.68:0,_e=($="iso")=>{const Me=[Ce.man&&[Ce.man,ge],ye&&Ze.man&&[Ze.man,De]].filter(Boolean);if(!Me.length)return;const xe=new da;Me.forEach(([je,lt])=>xe.union(_1(je.bounds).translate(new J(lt,0,0)))),z0(e,xe,$,(Ce.man||Ze.man).iso)};Pe.useEffect(()=>{_e()},[m,!!Ce.man,!!Ze.man,T]);const Ue=$=>{var xe;if(w===$)return U(null),_e();U($),(xe=e.tick)==null||xe.call(e);const Me=e.sets.B.get($)||e.sets.A.get($);Me&&(Me.updateMatrixWorld(),z0(e,new da().setFromObject(Me),"iso",(Ce.man||Ze.man).iso))};e.tick=()=>{var qt;const $=Mt=>Mt*Mt*(3-2*Mt),Me=$(Math.min(D,1)),xe=$(Math.max(0,Math.min(D-1,1))),je=(Mt,pt,Nt,Xt)=>{var Ni;const{mo:ct,alpha:zt,kx:Vt}=I0(Nt,D),gn=((Ni=Nt.parts.find(Dn=>Dn.id===pt))==null?void 0:Ni.explode)||[0,0,0];let yn=gn[0]*y,Tn=gn[1]*y,nn=gn[2]*y;if(Mt.rotation.set(0,0,0),Mt.scale.set(1,1,1),ct){if(ct.slide.includes(pt)&&(yn+=Vt),ct.drop.includes(pt)&&(nn-=ct.drop_mm*xe),ct.rotate.includes(pt)){const Dn=-(zt-ct.a_latch)*Math.PI/180,[fr,,Ur]=ct.pivot,Va=Math.cos(Dn),en=Math.sin(Dn);Mt.rotation.set(0,Dn,0),yn+=fr-(fr*Va+Ur*en),nn+=Ur-(-fr*en+Ur*Va)}}else h1.includes(pt)&&(yn+=d1*Me),pt==="N2_return_spring"&&(Mt.scale.x=1-.35*Me),pt==="N2_adapter"&&(nn+=f1*xe);Mt.position.set(yn+Xt,Tn,nn)},lt=(Mt,pt,Nt,Xt=!1)=>{const ct=Mt.material;pt?ct.color.set(pt):ct.color.copy(Mt.userData.c0),ct.transparent=Nt<1,ct.opacity=Nt,ct.depthWrite=Nt>=1,ct.wireframe=Xt};for(const Mt of["A","B"]){const pt=Mt==="A"?Ze.man:Ce.man,Nt=Mt==="A";for(const[Xt,ct]of e.sets[Mt]){if(!pt){ct.visible=!1;continue}je(ct,Xt,pt,Mt==="A"?De:ge);const zt=ct.userData.p.opacity??1,Vt=(qt=Rt==null?void 0:Rt[Xt])==null?void 0:qt.st;let gn=!P[Xt]&&(Mt==="B"||ye),yn=null,Tn=zt,nn=!1;ye&&Rt&&(j&&Vt==="same"&&(gn=!1),k&&(yn=Vt==="same"||Vt==="loading"?Yi.same:Nt?Yi.removed:Yi[Vt]),m==="overlay"&&(Nt?(Vt==="same"&&(gn=!1),Tn=.28,nn=Vt==="changed"):k&&Vt==="same"&&(Tn=.3))),bt&&(Yt[Xt]?gn=!1:oe?Tn=.12*zt:gn=!1),w&&Xt!==w&&(Tn=Math.min(Tn,.1)),ct.visible=gn,gn&&lt(ct,yn,Tn,nn&&gn)}}if(e.markers.clear(),m==="side"&&Ze.man&&Ce.man)for(const[Mt,pt,Nt,Xt]of[[`Baseline · ${Io(s)}`,De,Ze.man,"#e76a6e"],[`Proposal · ${Io(u)}`,ge,Ce.man,"#f0b726"]]){const ct=k0(Mt,Xt),zt=Nt.bounds;ct.position.set((zt.min[0]+zt.max[0])/2+pt,(zt.min[1]+zt.max[1])/2,zt.max[2]+6),e.markers.add(ct)}for(const[Mt,pt]of e.fea){const Nt=pt.userData.part,Xt=bt&&Mt===`${Nt}__${Yt[Nt]}`&&!P[Nt];if(pt.visible=!!Xt,!Xt)continue;je(pt,Nt,Ce.man,0);const ct=`${ae}|${X}|${Lt}`;if(pt.userData.ck!==ct){const Tn=pt.geometry.attributes.color,nn=new Ct,Ni=pt.userData.d.fi;for(let Dn=0;Dn<Ni.length;Dn++)Qv(Ni[Dn]*ae*X/Lt,nn),Tn.setXYZ(Dn,nn.r,nn.g,nn.b);Tn.needsUpdate=!0,pt.userData.ck=ct}const zt=pt.userData.d,Vt=E&&Nt===E.part,gn=K&&E&&!Vt;pt.material.transparent=gn,pt.material.opacity=gn?.12:1,pt.material.depthWrite=!gn;const yn=new Mi(new Uh(Vt?.9:.6,20,14),new Dh({color:Vt?16777215:11252671,depthTest:!1,transparent:!0,opacity:.95}));if(yn.position.set(...zt.peakV).add(pt.position),yn.renderOrder=10,e.markers.add(yn),Vt){const Tn=k0(`Peak ${Da(Nt)} ${(zt.fiMax*ae*X).toFixed(2)}`);Tn.position.copy(yn.position).add(new J(...zt.peakN).multiplyScalar(4)),e.markers.add(Tn);const nn=new Mi(new Fh(1.6,.18,8,32),yn.material);nn.position.copy(yn.position),nn.quaternion.copy(e.cam.quaternion),nn.renderOrder=10,e.markers.add(nn)}}};const Je=$=>{var Me;return(Me=$==null?void 0:$.cases)==null?void 0:Me.filter(xe=>xe.in_scope!==!1&&xe.case==="Z").reduce((xe,je)=>!xe||je.fail_N<xe.fail_N?je:xe,null)},Fe=(()=>{var Nt,Xt;if(!ye)return[];const $=[],Me=Ze.fea,xe=Ce.fea,je=Je(Me),lt=Je(xe);(je||lt)&&$.push(["Straight-pull screen (min)",je==null?void 0:je.fail_N,lt==null?void 0:lt.fail_N," N"]);for(const ct of[...new Set([...(Me==null?void 0:Me.cases)||[],...(xe==null?void 0:xe.cases)||[]].filter(zt=>zt.case==="Z").map(zt=>zt.part))])$.push([`  ${Da(ct)}`,(Nt=Me==null?void 0:Me.cases.find(zt=>zt.part===ct&&zt.case==="Z"))==null?void 0:Nt.fail_N,(Xt=xe==null?void 0:xe.cases.find(zt=>zt.part===ct&&zt.case==="Z"))==null?void 0:Xt.fail_N," N"]);const qt=ct=>ct?{parts:ct.parts.length,...Object.fromEntries(Object.entries(ct.motion||{}).filter(([,zt])=>typeof zt=="number")),...Object.fromEntries(ct.bounds.size.map((zt,Vt)=>[`envelope ${"XYZ"[Vt]}`,+zt.toFixed(1)]))}:{},Mt=qt(Ze.man),pt=qt(Ce.man);for(const ct of Object.keys({...Mt,...pt}))Mt[ct]!==pt[ct]&&$.push([ct,Mt[ct],pt[ct],""]);return $})(),Le=$e&&Je($e),et=t.map($=>({value:$.path,label:u1($)})),at=wt==null?void 0:wt.motion,{alpha:ht,kx:B}=I0(wt,D),Oe=[...new Set([...((Se=Ce.man)==null?void 0:Se.parts.map($=>$.id))||[],...ye&&Ze.man?Ze.man.parts.map($=>$.id):[]])],ve=$=>{var Me,xe,je,lt;return Rt&&k?Yi[(Me=Rt[$])==null?void 0:Me.st]||Yi.same:(lt=((xe=Ce.man)==null?void 0:xe.parts.find(qt=>qt.id===$))||((je=Ze.man)==null?void 0:je.parts.find(qt=>qt.id===$)))==null?void 0:lt.color};return ee.jsxs("div",{className:"app",children:[ee.jsxs("header",{className:"top",children:[ee.jsxs("div",{className:"brand",children:["N2 hardpoint",ee.jsxs("span",{children:[gf.label,gf.sha&&` · ${gf.sha}`]})]}),ee.jsxs("label",{className:"pick",children:[ee.jsx("span",{children:"Design"}),ee.jsx(No,{minimal:!0,value:T||"",onChange:$=>b($.target.value),options:_.map($=>({value:$.id,label:$.label}))})]}),ee.jsxs("label",{className:`pick base ${ye?"":"off"}`,children:[ee.jsx("span",{children:"Baseline"}),ee.jsx(No,{minimal:!0,value:s,disabled:!ye,onChange:$=>l($.target.value),options:et})]}),ee.jsxs("label",{className:"pick prop",children:[ee.jsx("span",{children:ye?"Proposal":"Version"}),ee.jsx(No,{minimal:!0,value:u,onChange:$=>d($.target.value),options:et})]}),ee.jsx(Tc,{className:"seg",children:[["single","Single"],["overlay","Overlay"],["side","Side by side"]].map(([$,Me])=>ee.jsx(xi,{small:!0,active:m===$,intent:m===$?"primary":"none",text:Me,onClick:()=>p($)},$))}),ee.jsxs(Tc,{className:"seg",children:[ee.jsx(xi,{small:!0,icon:"cube",active:v==="model",text:"Model",onClick:()=>x("model")}),ee.jsx(xi,{small:!0,icon:"heat-grid",active:v==="fea",disabled:!$e||ye,title:ye?"FEA colours show in Single view":"",text:"FEA",onClick:()=>x("fea")})]})]}),ee.jsxs("div",{className:"body",children:[ee.jsxs("div",{className:"stage",ref:i,children:[ee.jsx(Tc,{className:"views",minimal:!0,children:["iso","front","side","top"].map($=>ee.jsx(xi,{small:!0,text:$,onClick:()=>_e($)},$))}),(Ce.err||Ze.err)&&ee.jsx("div",{className:"err",children:[Ze.err&&`Baseline: ${Ze.err}`,Ce.err&&`Proposal: ${Ce.err}`].filter(Boolean).join(" · ")}),ye&&ee.jsxs("div",{className:"legend chips",children:[Object.entries(Yi).map(([$,Me])=>ee.jsxs("span",{children:[ee.jsx("i",{style:{background:Me}}),$]},$)),ee.jsx("div",{className:"sub",children:m==="overlay"?"Baseline drawn as a red ghost (wireframe where the shape changed).":"Baseline left, proposal right, shared camera."})]}),bt&&ee.jsxs("div",{className:"legend",children:["Utilisation at ",ae.toFixed(1)," N ",Y?`(scaled to peak ${mn.toFixed(2)})`:"(1.0 = stress limit)",ee.jsx("div",{className:"bar",style:{background:m1}}),ee.jsxs("div",{className:"ticks",children:[ee.jsx("span",{children:"0"}),ee.jsx("span",{children:(.5*Lt).toFixed(2)}),ee.jsx("span",{children:Lt.toFixed(2)}),!Y&&ee.jsx("span",{style:{color:"#d91ad9"},children:">1"})]})]}),ee.jsx("div",{className:"hint",children:"Drag orbit · scroll zoom · right-drag pan · double-click re-centre"})]}),ee.jsxs("aside",{className:"side",children:[ee.jsxs("section",{children:[ee.jsx("h6",{children:ye?"Changes":"Summary"}),ye?ee.jsxs(ee.Fragment,{children:[ee.jsxs("div",{className:"muted",children:[ee.jsx("b",{children:sn})," of ",Wt.length," parts differ, ",ee.jsx(xf,{minimal:!0,className:"t-base",children:Io(s)})," → ",ee.jsx(xf,{minimal:!0,className:"t-prop",children:Io(u)}),". Click a part to focus it."]}),ee.jsx("div",{className:"list",children:Wt.filter(([,$])=>!j||$.st!=="same").map(([$,Me])=>ee.jsxs("button",{className:`row ${w===$?"on":""}`,onClick:()=>Ue($),children:[ee.jsx("i",{style:{background:Yi[Me.st]||Yi.same}}),ee.jsx("span",{className:"nm",children:Da($)}),ee.jsx("span",{className:"st",style:{color:Yi[Me.st]},children:Me.st}),Me.note&&ee.jsx("span",{className:"note",children:Me.note})]},$))})]}):ee.jsxs("div",{className:"muted",children:[wt&&ee.jsxs(ee.Fragment,{children:[wt.name||wt.id," · ",wt.parts.length," parts",at?", release driven by the servo crank kinematics":"",".",ee.jsx("br",{})]}),Le&&ee.jsxs(ee.Fragment,{children:["Straight-pull stress screen ",ee.jsxs("b",{children:[Le.fail_N.toFixed(1)," N"]})," (",Da(Le.part)," governs). Design load ",$e.design_N," N, bench target ",$e.required_fail_N," N. No working-load rating assigned; not yet tested."]})]})]}),ye&&Fe.length>0&&ee.jsxs("section",{children:[ee.jsx("h6",{children:"Key values"}),ee.jsxs("table",{className:"tbl",children:[ee.jsx("thead",{children:ee.jsxs("tr",{children:[ee.jsx("th",{}),ee.jsx("th",{children:"Base"}),ee.jsx("th",{children:"Prop."}),ee.jsx("th",{children:"Δ"})]})}),ee.jsx("tbody",{children:Fe.map(([$,Me,xe,je])=>{const lt=typeof Me=="number"&&typeof xe=="number"?xe-Me:null;return ee.jsxs("tr",{children:[ee.jsx("td",{children:$}),ee.jsx("td",{className:"n",children:Me??"–"}),ee.jsx("td",{className:"n",children:xe??"–"}),ee.jsx("td",{className:"n",style:{color:lt>0?Yi.added:lt<0?Yi.removed:void 0},children:lt===null||lt===0?"":`${lt>0?"+":""}${+lt.toFixed(2)}${je}`})]},$)})})]})]}),ee.jsxs("section",{children:[ee.jsx("h6",{children:"Display"}),ee.jsxs("div",{className:"ctl",children:[ee.jsx("span",{children:"Explode"}),ee.jsx(ko,{min:0,max:1,stepSize:.01,labelRenderer:!1,value:y,onChange:S})]}),(At||at)&&ee.jsxs("div",{className:"ctl",children:[ee.jsx("span",{children:"Release"}),ee.jsx(xi,{small:!0,minimal:!0,icon:C?"pause":"play",onClick:()=>L(!C)}),ee.jsx(xi,{small:!0,minimal:!0,icon:"reset",onClick:()=>{L(!1),z(0)}}),ee.jsx(ko,{min:0,max:2,stepSize:.01,labelRenderer:!1,value:D,onChange:$=>{L(!1),z($)}})]}),(At||at)&&ee.jsx("div",{className:"muted small",children:at?(D<.02?`Latched: servo ${at.a_latch}°.`:D<=1?`Servo ${ht.toFixed(0)}°, keeper +X ${B.toFixed(1)} mm.`:"Keeper clear; adapter drops.")+" Kinematics from params.py, not a tested release.":D<.02?"Latched.":D<=1?"Solenoid retracting the keeper.":"Keeper open; illustrated adapter travel."}),ye&&ee.jsxs(ee.Fragment,{children:[ee.jsx(Rs,{checked:k,label:"Colour by change",onChange:()=>G(!k)}),ee.jsx(Rs,{checked:j,label:"Hide unchanged parts",onChange:()=>ie(!j)})]}),w&&ee.jsx(xi,{small:!0,icon:"cross",text:`Clear focus (${Da(w)})`,onClick:()=>Ue(w)})]}),bt&&ee.jsxs("section",{children:[ee.jsx("h6",{children:"FEA"}),ee.jsx(No,{fill:!0,value:H,onChange:$=>ne($.target.value),options:Object.entries(on).map(([$,Me])=>({value:$,label:Me.label}))}),ee.jsxs("div",{className:"ctl",children:[ee.jsxs("span",{children:[ae.toFixed(1)," N"]}),ee.jsx(ko,{min:1,max:Q,stepSize:.1,labelRenderer:!1,value:ae,onChange:le})]}),ee.jsxs("div",{className:"btns",children:[ee.jsx(xi,{small:!0,text:`Design ${$e.design_N} N`,onClick:()=>le($e.design_N)}),ee.jsx(xi,{small:!0,text:`Bench ${$e.required_fail_N} N`,onClick:()=>le($e.required_fail_N)}),ee.jsx(xi,{small:!0,icon:"locate",text:"Peak",disabled:!E,onClick:()=>{N(!0),ce()}})]}),ee.jsxs("table",{className:"tbl",children:[ee.jsx("thead",{children:ee.jsxs("tr",{children:[ee.jsx("th",{children:"Part"}),ee.jsx("th",{children:"Screen"}),ee.jsx("th",{children:"×load"})]})}),ee.jsx("tbody",{children:F.map($=>ee.jsxs("tr",{children:[ee.jsxs("td",{children:[E===$&&"● ",Da($.part)]}),ee.jsxs("td",{className:"n",children:[$.fail_N," N"]}),ee.jsxs("td",{className:"n",children:[($.fail_N/ae).toFixed(2),"×"]})]},$.part))})]}),ee.jsx(Rs,{checked:oe,label:"Ghost other parts",onChange:()=>Te(!oe)}),ee.jsx(Rs,{checked:Y,label:"Scale colours to peak",onChange:()=>Z(!Y)}),ee.jsx(Rs,{checked:K,label:"Fade non-governing parts",onChange:()=>N(!K)}),ee.jsxs("div",{className:"muted small",children:[(it=$e.material)==null?void 0:it.toUpperCase(),", ",$e.note]})]}),ee.jsxs("section",{children:[ee.jsx("h6",{children:"Parts"}),ee.jsx("div",{className:"parts",children:Oe.map($=>ee.jsxs("label",{className:P[$]?"off":"",children:[ee.jsx("input",{type:"checkbox",checked:!P[$],onChange:()=>I(Me=>({...Me,[$]:!Me[$]}))}),ee.jsx("i",{style:{background:ve($)}}),Da($)]},$))}),ee.jsxs("div",{className:"btns",children:[ee.jsx(xi,{small:!0,text:"All",onClick:()=>I({})}),ee.jsx(xi,{small:!0,text:"Printed only",onClick:()=>{var $,Me;return I(Object.fromEntries([...(($=Ce.man)==null?void 0:$.parts)||[],...((Me=Ze.man)==null?void 0:Me.parts)||[]].filter(xe=>!["printed","payload","moving"].includes(xe.kind)).map(xe=>[xe.id,!0])))}})]})]})]})]})]})}document.body.classList.add($x);Bx.createRoot(document.getElementById("root")).render(ee.jsx(x1,{}));export{un as I,Tg as _,XS as p};
