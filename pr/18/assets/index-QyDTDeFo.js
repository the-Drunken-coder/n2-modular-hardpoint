var Ax=Object.defineProperty;var Cx=(i,e,t)=>e in i?Ax(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var _t=(i,e,t)=>Cx(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Rx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Ed={exports:{}},lo={},Td={exports:{}},Tt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tg;function bx(){if(tg)return Tt;tg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function y(D,J,ye){this.props=D,this.context=J,this.refs=b,this.updater=ye||M}y.prototype.isReactComponent={},y.prototype.setState=function(D,J){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,J,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function S(){}S.prototype=y.prototype;function N(D,J,ye){this.props=D,this.context=J,this.refs=b,this.updater=ye||M}var z=N.prototype=new S;z.constructor=N,w(z,y.prototype),z.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function T(D,J,ye){var Ge,We={},Ye=null,oe=null;if(J!=null)for(Ge in J.ref!==void 0&&(oe=J.ref),J.key!==void 0&&(Ye=""+J.key),J)L.call(J,Ge)&&!I.hasOwnProperty(Ge)&&(We[Ge]=J[Ge]);var fe=arguments.length-2;if(fe===1)We.children=ye;else if(1<fe){for(var we=Array(fe),Qe=0;Qe<fe;Qe++)we[Qe]=arguments[Qe+2];We.children=we}if(D&&D.defaultProps)for(Ge in fe=D.defaultProps,fe)We[Ge]===void 0&&(We[Ge]=fe[Ge]);return{$$typeof:i,type:D,key:Ye,ref:oe,props:We,_owner:P.current}}function U(D,J){return{$$typeof:i,type:D.type,key:J,ref:D.ref,props:D.props,_owner:D._owner}}function k(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function G(D){var J={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(ye){return J[ye]})}var j=/\/+/g;function ie(D,J){return typeof D=="object"&&D!==null&&D.key!=null?G(""+D.key):J.toString(36)}function H(D,J,ye,Ge,We){var Ye=typeof D;(Ye==="undefined"||Ye==="boolean")&&(D=null);var oe=!1;if(D===null)oe=!0;else switch(Ye){case"string":case"number":oe=!0;break;case"object":switch(D.$$typeof){case i:case e:oe=!0}}if(oe)return oe=D,We=We(oe),D=Ge===""?"."+ie(oe,0):Ge,R(We)?(ye="",D!=null&&(ye=D.replace(j,"$&/")+"/"),H(We,J,ye,"",function(Qe){return Qe})):We!=null&&(k(We)&&(We=U(We,ye+(!We.key||oe&&oe.key===We.key?"":(""+We.key).replace(j,"$&/")+"/")+D)),J.push(We)),1;if(oe=0,Ge=Ge===""?".":Ge+":",R(D))for(var fe=0;fe<D.length;fe++){Ye=D[fe];var we=Ge+ie(Ye,fe);oe+=H(Ye,J,ye,we,We)}else if(we=_(D),typeof we=="function")for(D=we.call(D),fe=0;!(Ye=D.next()).done;)Ye=Ye.value,we=Ge+ie(Ye,fe++),oe+=H(Ye,J,ye,we,We);else if(Ye==="object")throw J=String(D),Error("Objects are not valid as a React child (found: "+(J==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":J)+"). If you meant to render a collection of children, use an array instead.");return oe}function ee(D,J,ye){if(D==null)return D;var Ge=[],We=0;return H(D,Ge,"","",function(Ye){return J.call(ye,Ye,We++)}),Ge}function le(D){if(D._status===-1){var J=D._result;J=J(),J.then(function(ye){(D._status===0||D._status===-1)&&(D._status=1,D._result=ye)},function(ye){(D._status===0||D._status===-1)&&(D._status=2,D._result=ye)}),D._status===-1&&(D._status=0,D._result=J)}if(D._status===1)return D._result.default;throw D._result}var se={current:null},$={transition:null},K={ReactCurrentDispatcher:se,ReactCurrentBatchConfig:$,ReactCurrentOwner:P};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Tt.Children={map:ee,forEach:function(D,J,ye){ee(D,function(){J.apply(this,arguments)},ye)},count:function(D){var J=0;return ee(D,function(){J++}),J},toArray:function(D){return ee(D,function(J){return J})||[]},only:function(D){if(!k(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},Tt.Component=y,Tt.Fragment=t,Tt.Profiler=s,Tt.PureComponent=N,Tt.StrictMode=a,Tt.Suspense=m,Tt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Tt.act=Z,Tt.cloneElement=function(D,J,ye){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Ge=w({},D.props),We=D.key,Ye=D.ref,oe=D._owner;if(J!=null){if(J.ref!==void 0&&(Ye=J.ref,oe=P.current),J.key!==void 0&&(We=""+J.key),D.type&&D.type.defaultProps)var fe=D.type.defaultProps;for(we in J)L.call(J,we)&&!I.hasOwnProperty(we)&&(Ge[we]=J[we]===void 0&&fe!==void 0?fe[we]:J[we])}var we=arguments.length-2;if(we===1)Ge.children=ye;else if(1<we){fe=Array(we);for(var Qe=0;Qe<we;Qe++)fe[Qe]=arguments[Qe+2];Ge.children=fe}return{$$typeof:i,type:D.type,key:We,ref:Ye,props:Ge,_owner:oe}},Tt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},Tt.createElement=T,Tt.createFactory=function(D){var J=T.bind(null,D);return J.type=D,J},Tt.createRef=function(){return{current:null}},Tt.forwardRef=function(D){return{$$typeof:d,render:D}},Tt.isValidElement=k,Tt.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:le}},Tt.memo=function(D,J){return{$$typeof:p,type:D,compare:J===void 0?null:J}},Tt.startTransition=function(D){var J=$.transition;$.transition={};try{D()}finally{$.transition=J}},Tt.unstable_act=Z,Tt.useCallback=function(D,J){return se.current.useCallback(D,J)},Tt.useContext=function(D){return se.current.useContext(D)},Tt.useDebugValue=function(){},Tt.useDeferredValue=function(D){return se.current.useDeferredValue(D)},Tt.useEffect=function(D,J){return se.current.useEffect(D,J)},Tt.useId=function(){return se.current.useId()},Tt.useImperativeHandle=function(D,J,ye){return se.current.useImperativeHandle(D,J,ye)},Tt.useInsertionEffect=function(D,J){return se.current.useInsertionEffect(D,J)},Tt.useLayoutEffect=function(D,J){return se.current.useLayoutEffect(D,J)},Tt.useMemo=function(D,J){return se.current.useMemo(D,J)},Tt.useReducer=function(D,J,ye){return se.current.useReducer(D,J,ye)},Tt.useRef=function(D){return se.current.useRef(D)},Tt.useState=function(D){return se.current.useState(D)},Tt.useSyncExternalStore=function(D,J,ye){return se.current.useSyncExternalStore(D,J,ye)},Tt.useTransition=function(){return se.current.useTransition()},Tt.version="18.3.1",Tt}var ng;function rh(){return ng||(ng=1,Td.exports=bx()),Td.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ig;function Px(){if(ig)return lo;ig=1;var i=rh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,m,p){var v,x={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)a.call(m,v)&&!l.hasOwnProperty(v)&&(x[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)x[v]===void 0&&(x[v]=m[v]);return{$$typeof:e,type:d,key:_,ref:M,props:x,_owner:s.current}}return lo.Fragment=t,lo.jsx=u,lo.jsxs=u,lo}var rg;function Lx(){return rg||(rg=1,Ed.exports=Px()),Ed.exports}var me=Lx(),Gl={},wd={exports:{}},Kn={},Ad={exports:{}},Cd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ag;function Dx(){return ag||(ag=1,(function(i){function e($,K){var Z=$.length;$.push(K);e:for(;0<Z;){var D=Z-1>>>1,J=$[D];if(0<s(J,K))$[D]=K,$[Z]=J,Z=D;else break e}}function t($){return $.length===0?null:$[0]}function a($){if($.length===0)return null;var K=$[0],Z=$.pop();if(Z!==K){$[0]=Z;e:for(var D=0,J=$.length,ye=J>>>1;D<ye;){var Ge=2*(D+1)-1,We=$[Ge],Ye=Ge+1,oe=$[Ye];if(0>s(We,Z))Ye<J&&0>s(oe,We)?($[D]=oe,$[Ye]=Z,D=Ye):($[D]=We,$[Ge]=Z,D=Ge);else if(Ye<J&&0>s(oe,Z))$[D]=oe,$[Ye]=Z,D=Ye;else break e}}return K}function s($,K){var Z=$.sortIndex-K.sortIndex;return Z!==0?Z:$.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();i.unstable_now=function(){return u.now()-d}}var m=[],p=[],v=1,x=null,_=3,M=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,N=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z($){for(var K=t(p);K!==null;){if(K.callback===null)a(p);else if(K.startTime<=$)a(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=t(p)}}function R($){if(b=!1,z($),!w)if(t(m)!==null)w=!0,le(L);else{var K=t(p);K!==null&&se(R,K.startTime-$)}}function L($,K){w=!1,b&&(b=!1,S(T),T=-1),M=!0;var Z=_;try{for(z(K),x=t(m);x!==null&&(!(x.expirationTime>K)||$&&!G());){var D=x.callback;if(typeof D=="function"){x.callback=null,_=x.priorityLevel;var J=D(x.expirationTime<=K);K=i.unstable_now(),typeof J=="function"?x.callback=J:x===t(m)&&a(m),z(K)}else a(m);x=t(m)}if(x!==null)var ye=!0;else{var Ge=t(p);Ge!==null&&se(R,Ge.startTime-K),ye=!1}return ye}finally{x=null,_=Z,M=!1}}var P=!1,I=null,T=-1,U=5,k=-1;function G(){return!(i.unstable_now()-k<U)}function j(){if(I!==null){var $=i.unstable_now();k=$;var K=!0;try{K=I(!0,$)}finally{K?ie():(P=!1,I=null)}}else P=!1}var ie;if(typeof N=="function")ie=function(){N(j)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,ee=H.port2;H.port1.onmessage=j,ie=function(){ee.postMessage(null)}}else ie=function(){y(j,0)};function le($){I=$,P||(P=!0,ie())}function se($,K){T=y(function(){$(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function($){$.callback=null},i.unstable_continueExecution=function(){w||M||(w=!0,le(L))},i.unstable_forceFrameRate=function($){0>$||125<$?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<$?Math.floor(1e3/$):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(m)},i.unstable_next=function($){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var Z=_;_=K;try{return $()}finally{_=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function($,K){switch($){case 1:case 2:case 3:case 4:case 5:break;default:$=3}var Z=_;_=$;try{return K()}finally{_=Z}},i.unstable_scheduleCallback=function($,K,Z){var D=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?D+Z:D):Z=D,$){case 1:var J=-1;break;case 2:J=250;break;case 5:J=1073741823;break;case 4:J=1e4;break;default:J=5e3}return J=Z+J,$={id:v++,callback:K,priorityLevel:$,startTime:Z,expirationTime:J,sortIndex:-1},Z>D?($.sortIndex=Z,e(p,$),t(m)===null&&$===t(p)&&(b?(S(T),T=-1):b=!0,se(R,Z-D))):($.sortIndex=J,e(m,$),w||M||(w=!0,le(L))),$},i.unstable_shouldYield=G,i.unstable_wrapCallback=function($){var K=_;return function(){var Z=_;_=K;try{return $.apply(this,arguments)}finally{_=Z}}}})(Cd)),Cd}var sg;function Nx(){return sg||(sg=1,Ad.exports=Dx()),Ad.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var og;function Ux(){if(og)return Kn;og=1;var i=rh(),e=Nx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)a.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(n){return m.call(x,n)?!0:m.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,o,c){if(r===null||typeof r>"u"||M(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,o,c,f,g,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function N(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,N);y[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,N);y[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,N);y[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,r,o,c){var f=y.hasOwnProperty(r)?y[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,o,f,c)&&(o=null),c||f===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),k=Symbol.for("react.provider"),G=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),ee=Symbol.for("react.memo"),le=Symbol.for("react.lazy"),se=Symbol.for("react.offscreen"),$=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=$&&n[$]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,D;function J(n){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var ye=!1;function Ge(n,r){if(!n||ye)return"";ye=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(de){var c=de}Reflect.construct(n,[],r)}else{try{r.call()}catch(de){c=de}n.call(r.prototype)}else{try{throw Error()}catch(de){c=de}n()}}catch(de){if(de&&c&&typeof de.stack=="string"){for(var f=de.stack.split(`
`),g=c.stack.split(`
`),A=f.length-1,O=g.length-1;1<=A&&0<=O&&f[A]!==g[O];)O--;for(;1<=A&&0<=O;A--,O--)if(f[A]!==g[O]){if(A!==1||O!==1)do if(A--,O--,0>O||f[A]!==g[O]){var V=`
`+f[A].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=A&&0<=O);break}}}finally{ye=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?J(n):""}function We(n){switch(n.tag){case 5:return J(n.type);case 16:return J("Lazy");case 13:return J("Suspense");case 19:return J("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function Ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case P:return"Portal";case U:return"Profiler";case T:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case G:return(n.displayName||"Context")+".Consumer";case k:return(n._context.displayName||"Context")+".Provider";case j:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ee:return r=n.displayName||null,r!==null?r:Ye(n.type)||"Memo";case le:r=n._payload,n=n._init;try{return Ye(n(r))}catch{}}return null}function oe(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ye(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function fe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function we(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Qe(n){var r=we(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Re(n){n._valueTracker||(n._valueTracker=Qe(n))}function St(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=we(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function Vt(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function vt(n,r){var o=r.checked;return Z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function pe(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=fe(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function He(n,r){r=r.checked,r!=null&&z(n,"checked",r,!1)}function be(n,r){He(n,r);var o=fe(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Dt(n,r.type,o):r.hasOwnProperty("defaultValue")&&Dt(n,r.type,fe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function lt(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Dt(n,r,o){(r!=="number"||Vt(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Ct=Array.isArray;function ct(n,r,o,c){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+fe(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function at(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function B(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Ct(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:fe(o)}}function Rt(n,r){var o=fe(r.value),c=fe(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function ut(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?F(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var q,ne=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,f)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(q=q||document.createElement("div"),q.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=q.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Ee={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Ce=["Webkit","ms","Moz","O"];Object.keys(Ee).forEach(function(n){Ce.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Ee[r]=Ee[n]})});function ge(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Ee.hasOwnProperty(n)&&Ee[n]?(""+r).trim():r+"px"}function _e(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=ge(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Ne=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(n,r){if(r){if(Ne[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Pe=null;function tt(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,ht=null,W=null;function Le(n){if(n=Ys(n)){if(typeof st!="function")throw Error(t(280));var r=n.stateNode;r&&(r=il(r),st(n.stateNode,n.type,r))}}function ve(n){ht?W?W.push(n):W=[n]:ht=n}function De(){if(ht){var n=ht,r=W;if(W=ht=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function Ve(n,r){return n(r)}function xe(){}var it=!1;function Ze(n,r,o){if(it)return n(r,o);it=!0;try{return Ve(n,r,o)}finally{it=!1,(ht!==null||W!==null)&&(xe(),De())}}function It(n,r){var o=n.stateNode;if(o===null)return null;var c=il(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Nt=!1;if(d)try{var Tn={};Object.defineProperty(Tn,"passive",{get:function(){Nt=!0}}),window.addEventListener("test",Tn,Tn),window.removeEventListener("test",Tn,Tn)}catch{Nt=!1}function li(n,r,o,c,f,g,A,O,V){var de=Array.prototype.slice.call(arguments,3);try{r.apply(o,de)}catch(Me){this.onError(Me)}}var jr=!1,Aa=null,Zr=!1,Jr=null,$c={onError:function(n){jr=!0,Aa=n}};function zo(n,r,o,c,f,g,A,O,V){jr=!1,Aa=null,li.apply($c,arguments)}function Ho(n,r,o,c,f,g,A,O,V){if(zo.apply(this,arguments),jr){if(jr){var de=Aa;jr=!1,Aa=null}else throw Error(t(198));Zr||(Zr=!0,Jr=de)}}function kn(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ca(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function As(n){if(kn(n)!==n)throw Error(t(188))}function Vo(n){var r=n.alternate;if(!r){if(r=kn(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return As(f),n;if(g===c)return As(f),r;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var A=!1,O=f.child;O;){if(O===o){A=!0,o=f,c=g;break}if(O===c){A=!0,c=f,o=g;break}O=O.sibling}if(!A){for(O=g.child;O;){if(O===o){A=!0,o=g,c=f;break}if(O===c){A=!0,c=g,o=f;break}O=O.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function Qr(n){return n=Vo(n),n!==null?Cs(n):null}function Cs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=Cs(n);if(r!==null)return r;n=n.sibling}return null}var ea=e.unstable_scheduleCallback,Rs=e.unstable_cancelCallback,Go=e.unstable_shouldYield,Yc=e.unstable_requestPaint,en=e.unstable_now,qc=e.unstable_getCurrentPriorityLevel,bs=e.unstable_ImmediatePriority,Ps=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,X=e.unstable_LowPriority,ue=e.unstable_IdlePriority,re=null,te=null;function Ie(n){if(te&&typeof te.onCommitFiberRoot=="function")try{te.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:nt,Oe=Math.log,Ke=Math.LN2;function nt(n){return n>>>=0,n===0?32:31-(Oe(n)/Ke|0)|0}var gt=64,yt=4194304;function $e(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function bt(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,A=o&268435455;if(A!==0){var O=A&~f;O!==0?c=$e(O):(g&=A,g!==0&&(c=$e(g)))}else A=o&~f,A!==0?c=$e(A):g!==0&&(c=$e(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-Fe(r),f=1<<o,c|=n[o],r&=~f;return c}function an(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function $t(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-Fe(g),O=1<<A,V=f[A];V===-1?((O&o)===0||(O&c)!==0)&&(f[A]=an(O,r)):V<=r&&(n.expiredLanes|=O),g&=~O}}function Ht(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function dn(){var n=gt;return gt<<=1,(gt&4194240)===0&&(gt=64),n}function Be(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function on(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Fe(r),n[r]=o}function Pt(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Fe(o),g=1<<f;r[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function bn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Fe(o),f=1<<c;f&r|n[c]&r&&(n[c]|=r),o&=~f}}var Mt=0;function xi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Zi,kt,jt,Si,Gt,ci=!1,yi=[],Mi=null,_r=null,xr=null,Ls=new Map,Ds=new Map,Sr=[],qv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function kh(n,r){switch(n){case"focusin":case"focusout":Mi=null;break;case"dragenter":case"dragleave":_r=null;break;case"mouseover":case"mouseout":xr=null;break;case"pointerover":case"pointerout":Ls.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ds.delete(r.pointerId)}}function Ns(n,r,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},r!==null&&(r=Ys(r),r!==null&&kt(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function Kv(n,r,o,c,f){switch(r){case"focusin":return Mi=Ns(Mi,n,r,o,c,f),!0;case"dragenter":return _r=Ns(_r,n,r,o,c,f),!0;case"mouseover":return xr=Ns(xr,n,r,o,c,f),!0;case"pointerover":var g=f.pointerId;return Ls.set(g,Ns(Ls.get(g)||null,n,r,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Ds.set(g,Ns(Ds.get(g)||null,n,r,o,c,f)),!0}return!1}function zh(n){var r=ta(n.target);if(r!==null){var o=kn(r);if(o!==null){if(r=o.tag,r===13){if(r=Ca(o),r!==null){n.blockedOn=r,Gt(n.priority,function(){jt(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Bo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=jc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Pe=c,o.target.dispatchEvent(c),Pe=null}else return r=Ys(o),r!==null&&kt(r),n.blockedOn=o,!1;r.shift()}return!0}function Hh(n,r,o){Bo(n)&&o.delete(r)}function jv(){ci=!1,Mi!==null&&Bo(Mi)&&(Mi=null),_r!==null&&Bo(_r)&&(_r=null),xr!==null&&Bo(xr)&&(xr=null),Ls.forEach(Hh),Ds.forEach(Hh)}function Us(n,r){n.blockedOn===r&&(n.blockedOn=null,ci||(ci=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,jv)))}function Fs(n){function r(f){return Us(f,n)}if(0<yi.length){Us(yi[0],n);for(var o=1;o<yi.length;o++){var c=yi[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Mi!==null&&Us(Mi,n),_r!==null&&Us(_r,n),xr!==null&&Us(xr,n),Ls.forEach(r),Ds.forEach(r),o=0;o<Sr.length;o++)c=Sr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Sr.length&&(o=Sr[0],o.blockedOn===null);)zh(o),o.blockedOn===null&&Sr.shift()}var Ra=R.ReactCurrentBatchConfig,Wo=!0;function Zv(n,r,o,c){var f=Mt,g=Ra.transition;Ra.transition=null;try{Mt=1,Kc(n,r,o,c)}finally{Mt=f,Ra.transition=g}}function Jv(n,r,o,c){var f=Mt,g=Ra.transition;Ra.transition=null;try{Mt=4,Kc(n,r,o,c)}finally{Mt=f,Ra.transition=g}}function Kc(n,r,o,c){if(Wo){var f=jc(n,r,o,c);if(f===null)hu(n,r,c,Xo,o),kh(n,c);else if(Kv(f,n,r,o,c))c.stopPropagation();else if(kh(n,c),r&4&&-1<qv.indexOf(n)){for(;f!==null;){var g=Ys(f);if(g!==null&&Zi(g),g=jc(n,r,o,c),g===null&&hu(n,r,c,Xo,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else hu(n,r,c,null,o)}}var Xo=null;function jc(n,r,o,c){if(Xo=null,n=tt(c),n=ta(n),n!==null)if(r=kn(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Ca(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Xo=n,null}function Vh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(qc()){case bs:return 1;case Ps:return 4;case C:case X:return 16;case ue:return 536870912;default:return 16}default:return 16}}var yr=null,Zc=null,$o=null;function Gh(){if($o)return $o;var n,r=Zc,o=r.length,c,f="value"in yr?yr.value:yr.textContent,g=f.length;for(n=0;n<o&&r[n]===f[n];n++);var A=o-n;for(c=1;c<=A&&r[o-c]===f[g-c];c++);return $o=f.slice(n,1<c?1-c:void 0)}function Yo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function qo(){return!0}function Bh(){return!1}function Qn(n){function r(o,c,f,g,A){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?qo:Bh,this.isPropagationStopped=Bh,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=qo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=qo)},persist:function(){},isPersistent:qo}),r}var ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Jc=Qn(ba),Os=Z({},ba,{view:0,detail:0}),Qv=Qn(Os),Qc,eu,Is,Ko=Z({},Os,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:nu,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Is&&(Is&&n.type==="mousemove"?(Qc=n.screenX-Is.screenX,eu=n.screenY-Is.screenY):eu=Qc=0,Is=n),Qc)},movementY:function(n){return"movementY"in n?n.movementY:eu}}),Wh=Qn(Ko),e_=Z({},Ko,{dataTransfer:0}),t_=Qn(e_),n_=Z({},Os,{relatedTarget:0}),tu=Qn(n_),i_=Z({},ba,{animationName:0,elapsedTime:0,pseudoElement:0}),r_=Qn(i_),a_=Z({},ba,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),s_=Qn(a_),o_=Z({},ba,{data:0}),Xh=Qn(o_),l_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},c_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},u_={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function d_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=u_[n])?!!r[n]:!1}function nu(){return d_}var f_=Z({},Os,{key:function(n){if(n.key){var r=l_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Yo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?c_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:nu,charCode:function(n){return n.type==="keypress"?Yo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Yo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),h_=Qn(f_),p_=Z({},Ko,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),$h=Qn(p_),m_=Z({},Os,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:nu}),g_=Qn(m_),v_=Z({},ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),__=Qn(v_),x_=Z({},Ko,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),S_=Qn(x_),y_=[9,13,27,32],iu=d&&"CompositionEvent"in window,ks=null;d&&"documentMode"in document&&(ks=document.documentMode);var M_=d&&"TextEvent"in window&&!ks,Yh=d&&(!iu||ks&&8<ks&&11>=ks),qh=" ",Kh=!1;function jh(n,r){switch(n){case"keyup":return y_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Zh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Pa=!1;function E_(n,r){switch(n){case"compositionend":return Zh(r);case"keypress":return r.which!==32?null:(Kh=!0,qh);case"textInput":return n=r.data,n===qh&&Kh?null:n;default:return null}}function T_(n,r){if(Pa)return n==="compositionend"||!iu&&jh(n,r)?(n=Gh(),$o=Zc=yr=null,Pa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Yh&&r.locale!=="ko"?null:r.data;default:return null}}var w_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Jh(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!w_[n.type]:r==="textarea"}function Qh(n,r,o,c){ve(c),r=el(r,"onChange"),0<r.length&&(o=new Jc("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var zs=null,Hs=null;function A_(n){vp(n,0)}function jo(n){var r=Fa(n);if(St(r))return n}function C_(n,r){if(n==="change")return r}var ep=!1;if(d){var ru;if(d){var au="oninput"in document;if(!au){var tp=document.createElement("div");tp.setAttribute("oninput","return;"),au=typeof tp.oninput=="function"}ru=au}else ru=!1;ep=ru&&(!document.documentMode||9<document.documentMode)}function np(){zs&&(zs.detachEvent("onpropertychange",ip),Hs=zs=null)}function ip(n){if(n.propertyName==="value"&&jo(Hs)){var r=[];Qh(r,Hs,n,tt(n)),Ze(A_,r)}}function R_(n,r,o){n==="focusin"?(np(),zs=r,Hs=o,zs.attachEvent("onpropertychange",ip)):n==="focusout"&&np()}function b_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return jo(Hs)}function P_(n,r){if(n==="click")return jo(r)}function L_(n,r){if(n==="input"||n==="change")return jo(r)}function D_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Ei=typeof Object.is=="function"?Object.is:D_;function Vs(n,r){if(Ei(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!m.call(r,f)||!Ei(n[f],r[f]))return!1}return!0}function rp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function ap(n,r){var o=rp(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=rp(o)}}function sp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?sp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function op(){for(var n=window,r=Vt();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=Vt(n.document)}return r}function su(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function N_(n){var r=op(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&sp(o.ownerDocument.documentElement,o)){if(c!==null&&su(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=ap(o,g);var A=ap(o,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var U_=d&&"documentMode"in document&&11>=document.documentMode,La=null,ou=null,Gs=null,lu=!1;function lp(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;lu||La==null||La!==Vt(c)||(c=La,"selectionStart"in c&&su(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Gs&&Vs(Gs,c)||(Gs=c,c=el(ou,"onSelect"),0<c.length&&(r=new Jc("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=La)))}function Zo(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var Da={animationend:Zo("Animation","AnimationEnd"),animationiteration:Zo("Animation","AnimationIteration"),animationstart:Zo("Animation","AnimationStart"),transitionend:Zo("Transition","TransitionEnd")},cu={},cp={};d&&(cp=document.createElement("div").style,"AnimationEvent"in window||(delete Da.animationend.animation,delete Da.animationiteration.animation,delete Da.animationstart.animation),"TransitionEvent"in window||delete Da.transitionend.transition);function Jo(n){if(cu[n])return cu[n];if(!Da[n])return n;var r=Da[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in cp)return cu[n]=r[o];return n}var up=Jo("animationend"),dp=Jo("animationiteration"),fp=Jo("animationstart"),hp=Jo("transitionend"),pp=new Map,mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Mr(n,r){pp.set(n,r),l(r,[n])}for(var uu=0;uu<mp.length;uu++){var du=mp[uu],F_=du.toLowerCase(),O_=du[0].toUpperCase()+du.slice(1);Mr(F_,"on"+O_)}Mr(up,"onAnimationEnd"),Mr(dp,"onAnimationIteration"),Mr(fp,"onAnimationStart"),Mr("dblclick","onDoubleClick"),Mr("focusin","onFocus"),Mr("focusout","onBlur"),Mr(hp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Bs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),I_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Bs));function gp(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,Ho(c,r,void 0,n),n.currentTarget=null}function vp(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var A=c.length-1;0<=A;A--){var O=c[A],V=O.instance,de=O.currentTarget;if(O=O.listener,V!==g&&f.isPropagationStopped())break e;gp(f,O,de),g=V}else for(A=0;A<c.length;A++){if(O=c[A],V=O.instance,de=O.currentTarget,O=O.listener,V!==g&&f.isPropagationStopped())break e;gp(f,O,de),g=V}}}if(Zr)throw n=Jr,Zr=!1,Jr=null,n}function qt(n,r){var o=r[xu];o===void 0&&(o=r[xu]=new Set);var c=n+"__bubble";o.has(c)||(_p(r,n,2,!1),o.add(c))}function fu(n,r,o){var c=0;r&&(c|=4),_p(o,n,c,r)}var Qo="_reactListening"+Math.random().toString(36).slice(2);function Ws(n){if(!n[Qo]){n[Qo]=!0,a.forEach(function(o){o!=="selectionchange"&&(I_.has(o)||fu(o,!1,n),fu(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Qo]||(r[Qo]=!0,fu("selectionchange",!1,r))}}function _p(n,r,o,c){switch(Vh(r)){case 1:var f=Zv;break;case 4:f=Jv;break;default:f=Kc}o=f.bind(null,r,o,n),f=void 0,!Nt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function hu(n,r,o,c,f){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;A=A.return}for(;O!==null;){if(A=ta(O),A===null)return;if(V=A.tag,V===5||V===6){c=g=A;continue e}O=O.parentNode}}c=c.return}Ze(function(){var de=g,Me=tt(o),Te=[];e:{var Se=pp.get(n);if(Se!==void 0){var Xe=Jc,je=n;switch(n){case"keypress":if(Yo(o)===0)break e;case"keydown":case"keyup":Xe=h_;break;case"focusin":je="focus",Xe=tu;break;case"focusout":je="blur",Xe=tu;break;case"beforeblur":case"afterblur":Xe=tu;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Xe=Wh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Xe=t_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Xe=g_;break;case up:case dp:case fp:Xe=r_;break;case hp:Xe=__;break;case"scroll":Xe=Qv;break;case"wheel":Xe=S_;break;case"copy":case"cut":case"paste":Xe=s_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Xe=$h}var Je=(r&4)!==0,ln=!Je&&n==="scroll",ae=Je?Se!==null?Se+"Capture":null:Se;Je=[];for(var Y=de,ce;Y!==null;){ce=Y;var Ae=ce.stateNode;if(ce.tag===5&&Ae!==null&&(ce=Ae,ae!==null&&(Ae=It(Y,ae),Ae!=null&&Je.push(Xs(Y,Ae,ce)))),ln)break;Y=Y.return}0<Je.length&&(Se=new Xe(Se,je,null,o,Me),Te.push({event:Se,listeners:Je}))}}if((r&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",Xe=n==="mouseout"||n==="pointerout",Se&&o!==Pe&&(je=o.relatedTarget||o.fromElement)&&(ta(je)||je[Ji]))break e;if((Xe||Se)&&(Se=Me.window===Me?Me:(Se=Me.ownerDocument)?Se.defaultView||Se.parentWindow:window,Xe?(je=o.relatedTarget||o.toElement,Xe=de,je=je?ta(je):null,je!==null&&(ln=kn(je),je!==ln||je.tag!==5&&je.tag!==6)&&(je=null)):(Xe=null,je=de),Xe!==je)){if(Je=Wh,Ae="onMouseLeave",ae="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Je=$h,Ae="onPointerLeave",ae="onPointerEnter",Y="pointer"),ln=Xe==null?Se:Fa(Xe),ce=je==null?Se:Fa(je),Se=new Je(Ae,Y+"leave",Xe,o,Me),Se.target=ln,Se.relatedTarget=ce,Ae=null,ta(Me)===de&&(Je=new Je(ae,Y+"enter",je,o,Me),Je.target=ce,Je.relatedTarget=ln,Ae=Je),ln=Ae,Xe&&je)t:{for(Je=Xe,ae=je,Y=0,ce=Je;ce;ce=Na(ce))Y++;for(ce=0,Ae=ae;Ae;Ae=Na(Ae))ce++;for(;0<Y-ce;)Je=Na(Je),Y--;for(;0<ce-Y;)ae=Na(ae),ce--;for(;Y--;){if(Je===ae||ae!==null&&Je===ae.alternate)break t;Je=Na(Je),ae=Na(ae)}Je=null}else Je=null;Xe!==null&&xp(Te,Se,Xe,Je,!1),je!==null&&ln!==null&&xp(Te,ln,je,Je,!0)}}e:{if(Se=de?Fa(de):window,Xe=Se.nodeName&&Se.nodeName.toLowerCase(),Xe==="select"||Xe==="input"&&Se.type==="file")var rt=C_;else if(Jh(Se))if(ep)rt=L_;else{rt=b_;var dt=R_}else(Xe=Se.nodeName)&&Xe.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(rt=P_);if(rt&&(rt=rt(n,de))){Qh(Te,rt,o,Me);break e}dt&&dt(n,Se,de),n==="focusout"&&(dt=Se._wrapperState)&&dt.controlled&&Se.type==="number"&&Dt(Se,"number",Se.value)}switch(dt=de?Fa(de):window,n){case"focusin":(Jh(dt)||dt.contentEditable==="true")&&(La=dt,ou=de,Gs=null);break;case"focusout":Gs=ou=La=null;break;case"mousedown":lu=!0;break;case"contextmenu":case"mouseup":case"dragend":lu=!1,lp(Te,o,Me);break;case"selectionchange":if(U_)break;case"keydown":case"keyup":lp(Te,o,Me)}var ft;if(iu)e:{switch(n){case"compositionstart":var pt="onCompositionStart";break e;case"compositionend":pt="onCompositionEnd";break e;case"compositionupdate":pt="onCompositionUpdate";break e}pt=void 0}else Pa?jh(n,o)&&(pt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(pt="onCompositionStart");pt&&(Yh&&o.locale!=="ko"&&(Pa||pt!=="onCompositionStart"?pt==="onCompositionEnd"&&Pa&&(ft=Gh()):(yr=Me,Zc="value"in yr?yr.value:yr.textContent,Pa=!0)),dt=el(de,pt),0<dt.length&&(pt=new Xh(pt,n,null,o,Me),Te.push({event:pt,listeners:dt}),ft?pt.data=ft:(ft=Zh(o),ft!==null&&(pt.data=ft)))),(ft=M_?E_(n,o):T_(n,o))&&(de=el(de,"onBeforeInput"),0<de.length&&(Me=new Xh("onBeforeInput","beforeinput",null,o,Me),Te.push({event:Me,listeners:de}),Me.data=ft))}vp(Te,r)})}function Xs(n,r,o){return{instance:n,listener:r,currentTarget:o}}function el(n,r){for(var o=r+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=It(n,o),g!=null&&c.unshift(Xs(n,g,f)),g=It(n,r),g!=null&&c.push(Xs(n,g,f))),n=n.return}return c}function Na(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function xp(n,r,o,c,f){for(var g=r._reactName,A=[];o!==null&&o!==c;){var O=o,V=O.alternate,de=O.stateNode;if(V!==null&&V===c)break;O.tag===5&&de!==null&&(O=de,f?(V=It(o,g),V!=null&&A.unshift(Xs(o,V,O))):f||(V=It(o,g),V!=null&&A.push(Xs(o,V,O)))),o=o.return}A.length!==0&&n.push({event:r,listeners:A})}var k_=/\r\n?/g,z_=/\u0000|\uFFFD/g;function Sp(n){return(typeof n=="string"?n:""+n).replace(k_,`
`).replace(z_,"")}function tl(n,r,o){if(r=Sp(r),Sp(n)!==r&&o)throw Error(t(425))}function nl(){}var pu=null,mu=null;function gu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var vu=typeof setTimeout=="function"?setTimeout:void 0,H_=typeof clearTimeout=="function"?clearTimeout:void 0,yp=typeof Promise=="function"?Promise:void 0,V_=typeof queueMicrotask=="function"?queueMicrotask:typeof yp<"u"?function(n){return yp.resolve(null).then(n).catch(G_)}:vu;function G_(n){setTimeout(function(){throw n})}function _u(n,r){var o=r,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),Fs(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);Fs(r)}function Er(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function Mp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var Ua=Math.random().toString(36).slice(2),Ii="__reactFiber$"+Ua,$s="__reactProps$"+Ua,Ji="__reactContainer$"+Ua,xu="__reactEvents$"+Ua,B_="__reactListeners$"+Ua,W_="__reactHandles$"+Ua;function ta(n){var r=n[Ii];if(r)return r;for(var o=n.parentNode;o;){if(r=o[Ji]||o[Ii]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=Mp(n);n!==null;){if(o=n[Ii])return o;n=Mp(n)}return r}n=o,o=n.parentNode}return null}function Ys(n){return n=n[Ii]||n[Ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Fa(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function il(n){return n[$s]||null}var Su=[],Oa=-1;function Tr(n){return{current:n}}function Kt(n){0>Oa||(n.current=Su[Oa],Su[Oa]=null,Oa--)}function Yt(n,r){Oa++,Su[Oa]=n.current,n.current=r}var wr={},Pn=Tr(wr),Wn=Tr(!1),na=wr;function Ia(n,r){var o=n.type.contextTypes;if(!o)return wr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=f),f}function Xn(n){return n=n.childContextTypes,n!=null}function rl(){Kt(Wn),Kt(Pn)}function Ep(n,r,o){if(Pn.current!==wr)throw Error(t(168));Yt(Pn,r),Yt(Wn,o)}function Tp(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(t(108,oe(n)||"Unknown",f));return Z({},o,c)}function al(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||wr,na=Pn.current,Yt(Pn,n),Yt(Wn,Wn.current),!0}function wp(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Tp(n,r,na),c.__reactInternalMemoizedMergedChildContext=n,Kt(Wn),Kt(Pn),Yt(Pn,n)):Kt(Wn),Yt(Wn,o)}var Qi=null,sl=!1,yu=!1;function Ap(n){Qi===null?Qi=[n]:Qi.push(n)}function X_(n){sl=!0,Ap(n)}function Ar(){if(!yu&&Qi!==null){yu=!0;var n=0,r=Mt;try{var o=Qi;for(Mt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Qi=null,sl=!1}catch(f){throw Qi!==null&&(Qi=Qi.slice(n+1)),ea(bs,Ar),f}finally{Mt=r,yu=!1}}return null}var ka=[],za=0,ol=null,ll=0,ui=[],di=0,ia=null,er=1,tr="";function ra(n,r){ka[za++]=ll,ka[za++]=ol,ol=n,ll=r}function Cp(n,r,o){ui[di++]=er,ui[di++]=tr,ui[di++]=ia,ia=n;var c=er;n=tr;var f=32-Fe(c)-1;c&=~(1<<f),o+=1;var g=32-Fe(r)+f;if(30<g){var A=f-f%5;g=(c&(1<<A)-1).toString(32),c>>=A,f-=A,er=1<<32-Fe(r)+f|o<<f|c,tr=g+n}else er=1<<g|o<<f|c,tr=n}function Mu(n){n.return!==null&&(ra(n,1),Cp(n,1,0))}function Eu(n){for(;n===ol;)ol=ka[--za],ka[za]=null,ll=ka[--za],ka[za]=null;for(;n===ia;)ia=ui[--di],ui[di]=null,tr=ui[--di],ui[di]=null,er=ui[--di],ui[di]=null}var ei=null,ti=null,Zt=!1,Ti=null;function Rp(n,r){var o=mi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function bp(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,ei=n,ti=Er(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,ei=n,ti=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ia!==null?{id:er,overflow:tr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=mi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,ei=n,ti=null,!0):!1;default:return!1}}function Tu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function wu(n){if(Zt){var r=ti;if(r){var o=r;if(!bp(n,r)){if(Tu(n))throw Error(t(418));r=Er(o.nextSibling);var c=ei;r&&bp(n,r)?Rp(c,o):(n.flags=n.flags&-4097|2,Zt=!1,ei=n)}}else{if(Tu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Zt=!1,ei=n}}}function Pp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;ei=n}function cl(n){if(n!==ei)return!1;if(!Zt)return Pp(n),Zt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!gu(n.type,n.memoizedProps)),r&&(r=ti)){if(Tu(n))throw Lp(),Error(t(418));for(;r;)Rp(n,r),r=Er(r.nextSibling)}if(Pp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){ti=Er(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}ti=null}}else ti=ei?Er(n.stateNode.nextSibling):null;return!0}function Lp(){for(var n=ti;n;)n=Er(n.nextSibling)}function Ha(){ti=ei=null,Zt=!1}function Au(n){Ti===null?Ti=[n]:Ti.push(n)}var $_=R.ReactCurrentBatchConfig;function qs(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(A){var O=f.refs;A===null?delete O[g]:O[g]=A},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function ul(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function Dp(n){var r=n._init;return r(n._payload)}function Np(n){function r(ae,Y){if(n){var ce=ae.deletions;ce===null?(ae.deletions=[Y],ae.flags|=16):ce.push(Y)}}function o(ae,Y){if(!n)return null;for(;Y!==null;)r(ae,Y),Y=Y.sibling;return null}function c(ae,Y){for(ae=new Map;Y!==null;)Y.key!==null?ae.set(Y.key,Y):ae.set(Y.index,Y),Y=Y.sibling;return ae}function f(ae,Y){return ae=Ur(ae,Y),ae.index=0,ae.sibling=null,ae}function g(ae,Y,ce){return ae.index=ce,n?(ce=ae.alternate,ce!==null?(ce=ce.index,ce<Y?(ae.flags|=2,Y):ce):(ae.flags|=2,Y)):(ae.flags|=1048576,Y)}function A(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function O(ae,Y,ce,Ae){return Y===null||Y.tag!==6?(Y=vd(ce,ae.mode,Ae),Y.return=ae,Y):(Y=f(Y,ce),Y.return=ae,Y)}function V(ae,Y,ce,Ae){var rt=ce.type;return rt===I?Me(ae,Y,ce.props.children,Ae,ce.key):Y!==null&&(Y.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===le&&Dp(rt)===Y.type)?(Ae=f(Y,ce.props),Ae.ref=qs(ae,Y,ce),Ae.return=ae,Ae):(Ae=Ul(ce.type,ce.key,ce.props,null,ae.mode,Ae),Ae.ref=qs(ae,Y,ce),Ae.return=ae,Ae)}function de(ae,Y,ce,Ae){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ce.containerInfo||Y.stateNode.implementation!==ce.implementation?(Y=_d(ce,ae.mode,Ae),Y.return=ae,Y):(Y=f(Y,ce.children||[]),Y.return=ae,Y)}function Me(ae,Y,ce,Ae,rt){return Y===null||Y.tag!==7?(Y=fa(ce,ae.mode,Ae,rt),Y.return=ae,Y):(Y=f(Y,ce),Y.return=ae,Y)}function Te(ae,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=vd(""+Y,ae.mode,ce),Y.return=ae,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return ce=Ul(Y.type,Y.key,Y.props,null,ae.mode,ce),ce.ref=qs(ae,null,Y),ce.return=ae,ce;case P:return Y=_d(Y,ae.mode,ce),Y.return=ae,Y;case le:var Ae=Y._init;return Te(ae,Ae(Y._payload),ce)}if(Ct(Y)||K(Y))return Y=fa(Y,ae.mode,ce,null),Y.return=ae,Y;ul(ae,Y)}return null}function Se(ae,Y,ce,Ae){var rt=Y!==null?Y.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return rt!==null?null:O(ae,Y,""+ce,Ae);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===rt?V(ae,Y,ce,Ae):null;case P:return ce.key===rt?de(ae,Y,ce,Ae):null;case le:return rt=ce._init,Se(ae,Y,rt(ce._payload),Ae)}if(Ct(ce)||K(ce))return rt!==null?null:Me(ae,Y,ce,Ae,null);ul(ae,ce)}return null}function Xe(ae,Y,ce,Ae,rt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return ae=ae.get(ce)||null,O(Y,ae,""+Ae,rt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case L:return ae=ae.get(Ae.key===null?ce:Ae.key)||null,V(Y,ae,Ae,rt);case P:return ae=ae.get(Ae.key===null?ce:Ae.key)||null,de(Y,ae,Ae,rt);case le:var dt=Ae._init;return Xe(ae,Y,ce,dt(Ae._payload),rt)}if(Ct(Ae)||K(Ae))return ae=ae.get(ce)||null,Me(Y,ae,Ae,rt,null);ul(Y,Ae)}return null}function je(ae,Y,ce,Ae){for(var rt=null,dt=null,ft=Y,pt=Y=0,Sn=null;ft!==null&&pt<ce.length;pt++){ft.index>pt?(Sn=ft,ft=null):Sn=ft.sibling;var zt=Se(ae,ft,ce[pt],Ae);if(zt===null){ft===null&&(ft=Sn);break}n&&ft&&zt.alternate===null&&r(ae,ft),Y=g(zt,Y,pt),dt===null?rt=zt:dt.sibling=zt,dt=zt,ft=Sn}if(pt===ce.length)return o(ae,ft),Zt&&ra(ae,pt),rt;if(ft===null){for(;pt<ce.length;pt++)ft=Te(ae,ce[pt],Ae),ft!==null&&(Y=g(ft,Y,pt),dt===null?rt=ft:dt.sibling=ft,dt=ft);return Zt&&ra(ae,pt),rt}for(ft=c(ae,ft);pt<ce.length;pt++)Sn=Xe(ft,ae,pt,ce[pt],Ae),Sn!==null&&(n&&Sn.alternate!==null&&ft.delete(Sn.key===null?pt:Sn.key),Y=g(Sn,Y,pt),dt===null?rt=Sn:dt.sibling=Sn,dt=Sn);return n&&ft.forEach(function(Fr){return r(ae,Fr)}),Zt&&ra(ae,pt),rt}function Je(ae,Y,ce,Ae){var rt=K(ce);if(typeof rt!="function")throw Error(t(150));if(ce=rt.call(ce),ce==null)throw Error(t(151));for(var dt=rt=null,ft=Y,pt=Y=0,Sn=null,zt=ce.next();ft!==null&&!zt.done;pt++,zt=ce.next()){ft.index>pt?(Sn=ft,ft=null):Sn=ft.sibling;var Fr=Se(ae,ft,zt.value,Ae);if(Fr===null){ft===null&&(ft=Sn);break}n&&ft&&Fr.alternate===null&&r(ae,ft),Y=g(Fr,Y,pt),dt===null?rt=Fr:dt.sibling=Fr,dt=Fr,ft=Sn}if(zt.done)return o(ae,ft),Zt&&ra(ae,pt),rt;if(ft===null){for(;!zt.done;pt++,zt=ce.next())zt=Te(ae,zt.value,Ae),zt!==null&&(Y=g(zt,Y,pt),dt===null?rt=zt:dt.sibling=zt,dt=zt);return Zt&&ra(ae,pt),rt}for(ft=c(ae,ft);!zt.done;pt++,zt=ce.next())zt=Xe(ft,ae,pt,zt.value,Ae),zt!==null&&(n&&zt.alternate!==null&&ft.delete(zt.key===null?pt:zt.key),Y=g(zt,Y,pt),dt===null?rt=zt:dt.sibling=zt,dt=zt);return n&&ft.forEach(function(wx){return r(ae,wx)}),Zt&&ra(ae,pt),rt}function ln(ae,Y,ce,Ae){if(typeof ce=="object"&&ce!==null&&ce.type===I&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var rt=ce.key,dt=Y;dt!==null;){if(dt.key===rt){if(rt=ce.type,rt===I){if(dt.tag===7){o(ae,dt.sibling),Y=f(dt,ce.props.children),Y.return=ae,ae=Y;break e}}else if(dt.elementType===rt||typeof rt=="object"&&rt!==null&&rt.$$typeof===le&&Dp(rt)===dt.type){o(ae,dt.sibling),Y=f(dt,ce.props),Y.ref=qs(ae,dt,ce),Y.return=ae,ae=Y;break e}o(ae,dt);break}else r(ae,dt);dt=dt.sibling}ce.type===I?(Y=fa(ce.props.children,ae.mode,Ae,ce.key),Y.return=ae,ae=Y):(Ae=Ul(ce.type,ce.key,ce.props,null,ae.mode,Ae),Ae.ref=qs(ae,Y,ce),Ae.return=ae,ae=Ae)}return A(ae);case P:e:{for(dt=ce.key;Y!==null;){if(Y.key===dt)if(Y.tag===4&&Y.stateNode.containerInfo===ce.containerInfo&&Y.stateNode.implementation===ce.implementation){o(ae,Y.sibling),Y=f(Y,ce.children||[]),Y.return=ae,ae=Y;break e}else{o(ae,Y);break}else r(ae,Y);Y=Y.sibling}Y=_d(ce,ae.mode,Ae),Y.return=ae,ae=Y}return A(ae);case le:return dt=ce._init,ln(ae,Y,dt(ce._payload),Ae)}if(Ct(ce))return je(ae,Y,ce,Ae);if(K(ce))return Je(ae,Y,ce,Ae);ul(ae,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Y!==null&&Y.tag===6?(o(ae,Y.sibling),Y=f(Y,ce),Y.return=ae,ae=Y):(o(ae,Y),Y=vd(ce,ae.mode,Ae),Y.return=ae,ae=Y),A(ae)):o(ae,Y)}return ln}var Va=Np(!0),Up=Np(!1),dl=Tr(null),fl=null,Ga=null,Cu=null;function Ru(){Cu=Ga=fl=null}function bu(n){var r=dl.current;Kt(dl),n._currentValue=r}function Pu(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Ba(n,r){fl=n,Cu=Ga=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&($n=!0),n.firstContext=null)}function fi(n){var r=n._currentValue;if(Cu!==n)if(n={context:n,memoizedValue:r,next:null},Ga===null){if(fl===null)throw Error(t(308));Ga=n,fl.dependencies={lanes:0,firstContext:n}}else Ga=Ga.next=n;return r}var aa=null;function Lu(n){aa===null?aa=[n]:aa.push(n)}function Fp(n,r,o,c){var f=r.interleaved;return f===null?(o.next=o,Lu(r)):(o.next=f.next,f.next=o),r.interleaved=o,nr(n,c)}function nr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Cr=!1;function Du(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Op(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function ir(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Rr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ot&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,nr(n,o)}return f=c.interleaved,f===null?(r.next=r,Lu(c)):(r.next=f.next,f.next=r),c.interleaved=r,nr(n,o)}function hl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,bn(n,o)}}function Ip(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?f=g=r:g=g.next=r}else f=g=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function pl(n,r,o,c){var f=n.updateQueue;Cr=!1;var g=f.firstBaseUpdate,A=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var V=O,de=V.next;V.next=null,A===null?g=de:A.next=de,A=V;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==A&&(O===null?Me.firstBaseUpdate=de:O.next=de,Me.lastBaseUpdate=V))}if(g!==null){var Te=f.baseState;A=0,Me=de=V=null,O=g;do{var Se=O.lane,Xe=O.eventTime;if((c&Se)===Se){Me!==null&&(Me=Me.next={eventTime:Xe,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var je=n,Je=O;switch(Se=r,Xe=o,Je.tag){case 1:if(je=Je.payload,typeof je=="function"){Te=je.call(Xe,Te,Se);break e}Te=je;break e;case 3:je.flags=je.flags&-65537|128;case 0:if(je=Je.payload,Se=typeof je=="function"?je.call(Xe,Te,Se):je,Se==null)break e;Te=Z({},Te,Se);break e;case 2:Cr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Se=f.effects,Se===null?f.effects=[O]:Se.push(O))}else Xe={eventTime:Xe,lane:Se,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(de=Me=Xe,V=Te):Me=Me.next=Xe,A|=Se;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Se=O,O=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(Me===null&&(V=Te),f.baseState=V,f.firstBaseUpdate=de,f.lastBaseUpdate=Me,r=f.shared.interleaved,r!==null){f=r;do A|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);la|=A,n.lanes=A,n.memoizedState=Te}}function kp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Ks={},ki=Tr(Ks),js=Tr(Ks),Zs=Tr(Ks);function sa(n){if(n===Ks)throw Error(t(174));return n}function Nu(n,r){switch(Yt(Zs,r),Yt(js,n),Yt(ki,Ks),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}Kt(ki),Yt(ki,r)}function Wa(){Kt(ki),Kt(js),Kt(Zs)}function zp(n){sa(Zs.current);var r=sa(ki.current),o=E(r,n.type);r!==o&&(Yt(js,n),Yt(ki,o))}function Uu(n){js.current===n&&(Kt(ki),Kt(js))}var tn=Tr(0);function ml(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var Fu=[];function Ou(){for(var n=0;n<Fu.length;n++)Fu[n]._workInProgressVersionPrimary=null;Fu.length=0}var gl=R.ReactCurrentDispatcher,Iu=R.ReactCurrentBatchConfig,oa=0,nn=null,fn=null,_n=null,vl=!1,Js=!1,Qs=0,Y_=0;function Ln(){throw Error(t(321))}function ku(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Ei(n[o],r[o]))return!1;return!0}function zu(n,r,o,c,f,g){if(oa=g,nn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,gl.current=n===null||n.memoizedState===null?Z_:J_,n=o(c,f),Js){g=0;do{if(Js=!1,Qs=0,25<=g)throw Error(t(301));g+=1,_n=fn=null,r.updateQueue=null,gl.current=Q_,n=o(c,f)}while(Js)}if(gl.current=Sl,r=fn!==null&&fn.next!==null,oa=0,_n=fn=nn=null,vl=!1,r)throw Error(t(300));return n}function Hu(){var n=Qs!==0;return Qs=0,n}function zi(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return _n===null?nn.memoizedState=_n=n:_n=_n.next=n,_n}function hi(){if(fn===null){var n=nn.alternate;n=n!==null?n.memoizedState:null}else n=fn.next;var r=_n===null?nn.memoizedState:_n.next;if(r!==null)_n=r,fn=n;else{if(n===null)throw Error(t(310));fn=n,n={memoizedState:fn.memoizedState,baseState:fn.baseState,baseQueue:fn.baseQueue,queue:fn.queue,next:null},_n===null?nn.memoizedState=_n=n:_n=_n.next=n}return _n}function eo(n,r){return typeof r=="function"?r(n):r}function Vu(n){var r=hi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=fn,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var A=f.next;f.next=g.next,g.next=A}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var O=A=null,V=null,de=g;do{var Me=de.lane;if((oa&Me)===Me)V!==null&&(V=V.next={lane:0,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null}),c=de.hasEagerState?de.eagerState:n(c,de.action);else{var Te={lane:Me,action:de.action,hasEagerState:de.hasEagerState,eagerState:de.eagerState,next:null};V===null?(O=V=Te,A=c):V=V.next=Te,nn.lanes|=Me,la|=Me}de=de.next}while(de!==null&&de!==g);V===null?A=c:V.next=O,Ei(c,r.memoizedState)||($n=!0),r.memoizedState=c,r.baseState=A,r.baseQueue=V,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,nn.lanes|=g,la|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Gu(n){var r=hi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=r.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do g=n(g,A.action),A=A.next;while(A!==f);Ei(g,r.memoizedState)||($n=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,c]}function Hp(){}function Vp(n,r){var o=nn,c=hi(),f=r(),g=!Ei(c.memoizedState,f);if(g&&(c.memoizedState=f,$n=!0),c=c.queue,Bu(Wp.bind(null,o,c,n),[n]),c.getSnapshot!==r||g||_n!==null&&_n.memoizedState.tag&1){if(o.flags|=2048,to(9,Bp.bind(null,o,c,f,r),void 0,null),xn===null)throw Error(t(349));(oa&30)!==0||Gp(o,r,f)}return f}function Gp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Bp(n,r,o,c){r.value=o,r.getSnapshot=c,Xp(r)&&$p(n)}function Wp(n,r,o){return o(function(){Xp(r)&&$p(n)})}function Xp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Ei(n,o)}catch{return!0}}function $p(n){var r=nr(n,1);r!==null&&Ri(r,n,1,-1)}function Yp(n){var r=zi();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:eo,lastRenderedState:n},r.queue=n,n=n.dispatch=j_.bind(null,nn,n),[r.memoizedState,n]}function to(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=nn.updateQueue,r===null?(r={lastEffect:null,stores:null},nn.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function qp(){return hi().memoizedState}function _l(n,r,o,c){var f=zi();nn.flags|=n,f.memoizedState=to(1|r,o,void 0,c===void 0?null:c)}function xl(n,r,o,c){var f=hi();c=c===void 0?null:c;var g=void 0;if(fn!==null){var A=fn.memoizedState;if(g=A.destroy,c!==null&&ku(c,A.deps)){f.memoizedState=to(r,o,g,c);return}}nn.flags|=n,f.memoizedState=to(1|r,o,g,c)}function Kp(n,r){return _l(8390656,8,n,r)}function Bu(n,r){return xl(2048,8,n,r)}function jp(n,r){return xl(4,2,n,r)}function Zp(n,r){return xl(4,4,n,r)}function Jp(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function Qp(n,r,o){return o=o!=null?o.concat([n]):null,xl(4,4,Jp.bind(null,r,n),o)}function Wu(){}function em(n,r){var o=hi();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&ku(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function tm(n,r){var o=hi();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&ku(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function nm(n,r,o){return(oa&21)===0?(n.baseState&&(n.baseState=!1,$n=!0),n.memoizedState=o):(Ei(o,r)||(o=dn(),nn.lanes|=o,la|=o,n.baseState=!0),r)}function q_(n,r){var o=Mt;Mt=o!==0&&4>o?o:4,n(!0);var c=Iu.transition;Iu.transition={};try{n(!1),r()}finally{Mt=o,Iu.transition=c}}function im(){return hi().memoizedState}function K_(n,r,o){var c=Dr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},rm(n))am(r,o);else if(o=Fp(n,r,o,c),o!==null){var f=Hn();Ri(o,n,c,f),sm(o,r,c)}}function j_(n,r,o){var c=Dr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(rm(n))am(r,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var A=r.lastRenderedState,O=g(A,o);if(f.hasEagerState=!0,f.eagerState=O,Ei(O,A)){var V=r.interleaved;V===null?(f.next=f,Lu(r)):(f.next=V.next,V.next=f),r.interleaved=f;return}}catch{}finally{}o=Fp(n,r,f,c),o!==null&&(f=Hn(),Ri(o,n,c,f),sm(o,r,c))}}function rm(n){var r=n.alternate;return n===nn||r!==null&&r===nn}function am(n,r){Js=vl=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function sm(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,bn(n,o)}}var Sl={readContext:fi,useCallback:Ln,useContext:Ln,useEffect:Ln,useImperativeHandle:Ln,useInsertionEffect:Ln,useLayoutEffect:Ln,useMemo:Ln,useReducer:Ln,useRef:Ln,useState:Ln,useDebugValue:Ln,useDeferredValue:Ln,useTransition:Ln,useMutableSource:Ln,useSyncExternalStore:Ln,useId:Ln,unstable_isNewReconciler:!1},Z_={readContext:fi,useCallback:function(n,r){return zi().memoizedState=[n,r===void 0?null:r],n},useContext:fi,useEffect:Kp,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,_l(4194308,4,Jp.bind(null,r,n),o)},useLayoutEffect:function(n,r){return _l(4194308,4,n,r)},useInsertionEffect:function(n,r){return _l(4,2,n,r)},useMemo:function(n,r){var o=zi();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=zi();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=K_.bind(null,nn,n),[c.memoizedState,n]},useRef:function(n){var r=zi();return n={current:n},r.memoizedState=n},useState:Yp,useDebugValue:Wu,useDeferredValue:function(n){return zi().memoizedState=n},useTransition:function(){var n=Yp(!1),r=n[0];return n=q_.bind(null,n[1]),zi().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=nn,f=zi();if(Zt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),xn===null)throw Error(t(349));(oa&30)!==0||Gp(c,r,o)}f.memoizedState=o;var g={value:o,getSnapshot:r};return f.queue=g,Kp(Wp.bind(null,c,g,n),[n]),c.flags|=2048,to(9,Bp.bind(null,c,g,o,r),void 0,null),o},useId:function(){var n=zi(),r=xn.identifierPrefix;if(Zt){var o=tr,c=er;o=(c&~(1<<32-Fe(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=Qs++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=Y_++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},J_={readContext:fi,useCallback:em,useContext:fi,useEffect:Bu,useImperativeHandle:Qp,useInsertionEffect:jp,useLayoutEffect:Zp,useMemo:tm,useReducer:Vu,useRef:qp,useState:function(){return Vu(eo)},useDebugValue:Wu,useDeferredValue:function(n){var r=hi();return nm(r,fn.memoizedState,n)},useTransition:function(){var n=Vu(eo)[0],r=hi().memoizedState;return[n,r]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:im,unstable_isNewReconciler:!1},Q_={readContext:fi,useCallback:em,useContext:fi,useEffect:Bu,useImperativeHandle:Qp,useInsertionEffect:jp,useLayoutEffect:Zp,useMemo:tm,useReducer:Gu,useRef:qp,useState:function(){return Gu(eo)},useDebugValue:Wu,useDeferredValue:function(n){var r=hi();return fn===null?r.memoizedState=n:nm(r,fn.memoizedState,n)},useTransition:function(){var n=Gu(eo)[0],r=hi().memoizedState;return[n,r]},useMutableSource:Hp,useSyncExternalStore:Vp,useId:im,unstable_isNewReconciler:!1};function wi(n,r){if(n&&n.defaultProps){r=Z({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Xu(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:Z({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var yl={isMounted:function(n){return(n=n._reactInternals)?kn(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=Hn(),f=Dr(n),g=ir(c,f);g.payload=r,o!=null&&(g.callback=o),r=Rr(n,g,f),r!==null&&(Ri(r,n,f,c),hl(r,n,f))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=Hn(),f=Dr(n),g=ir(c,f);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=Rr(n,g,f),r!==null&&(Ri(r,n,f,c),hl(r,n,f))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Hn(),c=Dr(n),f=ir(o,c);f.tag=2,r!=null&&(f.callback=r),r=Rr(n,f,c),r!==null&&(Ri(r,n,c,o),hl(r,n,c))}};function om(n,r,o,c,f,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):r.prototype&&r.prototype.isPureReactComponent?!Vs(o,c)||!Vs(f,g):!0}function lm(n,r,o){var c=!1,f=wr,g=r.contextType;return typeof g=="object"&&g!==null?g=fi(g):(f=Xn(r)?na:Pn.current,c=r.contextTypes,g=(c=c!=null)?Ia(n,f):wr),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=yl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),r}function cm(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&yl.enqueueReplaceState(r,r.state,null)}function $u(n,r,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Du(n);var g=r.contextType;typeof g=="object"&&g!==null?f.context=fi(g):(g=Xn(r)?na:Pn.current,f.context=Ia(n,g)),f.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Xu(n,r,g,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&yl.enqueueReplaceState(f,f.state,null),pl(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Xa(n,r){try{var o="",c=r;do o+=We(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:f,digest:null}}function Yu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function qu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var ex=typeof WeakMap=="function"?WeakMap:Map;function um(n,r,o){o=ir(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){Rl||(Rl=!0,cd=c),qu(n,r)},o}function dm(n,r,o){o=ir(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;o.payload=function(){return c(f)},o.callback=function(){qu(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){qu(n,r),typeof c!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),o}function fm(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new ex;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(f.add(o),n=px.bind(null,n,r,o),r.then(n,n))}function hm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function pm(n,r,o,c,f){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=ir(-1,1),r.tag=2,Rr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var tx=R.ReactCurrentOwner,$n=!1;function zn(n,r,o,c){r.child=n===null?Up(r,null,o,c):Va(r,n.child,o,c)}function mm(n,r,o,c,f){o=o.render;var g=r.ref;return Ba(r,f),c=zu(n,r,o,c,g,f),o=Hu(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,rr(n,r,f)):(Zt&&o&&Mu(r),r.flags|=1,zn(n,r,c,f),r.child)}function gm(n,r,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!gd(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,vm(n,r,g,c,f)):(n=Ul(o.type,null,c,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&f)===0){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:Vs,o(A,c)&&n.ref===r.ref)return rr(n,r,f)}return r.flags|=1,n=Ur(g,c),n.ref=r.ref,n.return=r,r.child=n}function vm(n,r,o,c,f){if(n!==null){var g=n.memoizedProps;if(Vs(g,c)&&n.ref===r.ref)if($n=!1,r.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&($n=!0);else return r.lanes=n.lanes,rr(n,r,f)}return Ku(n,r,o,c,f)}function _m(n,r,o){var c=r.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Yt(Ya,ni),ni|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Yt(Ya,ni),ni|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Yt(Ya,ni),ni|=c}else g!==null?(c=g.baseLanes|o,r.memoizedState=null):c=o,Yt(Ya,ni),ni|=c;return zn(n,r,f,o),r.child}function xm(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Ku(n,r,o,c,f){var g=Xn(o)?na:Pn.current;return g=Ia(r,g),Ba(r,f),o=zu(n,r,o,c,g,f),c=Hu(),n!==null&&!$n?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,rr(n,r,f)):(Zt&&c&&Mu(r),r.flags|=1,zn(n,r,o,f),r.child)}function Sm(n,r,o,c,f){if(Xn(o)){var g=!0;al(r)}else g=!1;if(Ba(r,f),r.stateNode===null)El(n,r),lm(r,o,c),$u(r,o,c,f),c=!0;else if(n===null){var A=r.stateNode,O=r.memoizedProps;A.props=O;var V=A.context,de=o.contextType;typeof de=="object"&&de!==null?de=fi(de):(de=Xn(o)?na:Pn.current,de=Ia(r,de));var Me=o.getDerivedStateFromProps,Te=typeof Me=="function"||typeof A.getSnapshotBeforeUpdate=="function";Te||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==c||V!==de)&&cm(r,A,c,de),Cr=!1;var Se=r.memoizedState;A.state=Se,pl(r,c,A,f),V=r.memoizedState,O!==c||Se!==V||Wn.current||Cr?(typeof Me=="function"&&(Xu(r,o,Me,c),V=r.memoizedState),(O=Cr||om(r,o,O,c,Se,V,de))?(Te||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=V),A.props=c,A.state=V,A.context=de,c=O):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{A=r.stateNode,Op(n,r),O=r.memoizedProps,de=r.type===r.elementType?O:wi(r.type,O),A.props=de,Te=r.pendingProps,Se=A.context,V=o.contextType,typeof V=="object"&&V!==null?V=fi(V):(V=Xn(o)?na:Pn.current,V=Ia(r,V));var Xe=o.getDerivedStateFromProps;(Me=typeof Xe=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Te||Se!==V)&&cm(r,A,c,V),Cr=!1,Se=r.memoizedState,A.state=Se,pl(r,c,A,f);var je=r.memoizedState;O!==Te||Se!==je||Wn.current||Cr?(typeof Xe=="function"&&(Xu(r,o,Xe,c),je=r.memoizedState),(de=Cr||om(r,o,de,c,Se,je,V)||!1)?(Me||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,je,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,je,V)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=je),A.props=c,A.state=je,A.context=V,c=de):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),c=!1)}return ju(n,r,o,c,g,f)}function ju(n,r,o,c,f,g){xm(n,r);var A=(r.flags&128)!==0;if(!c&&!A)return f&&wp(r,o,!1),rr(n,r,g);c=r.stateNode,tx.current=r;var O=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&A?(r.child=Va(r,n.child,null,g),r.child=Va(r,null,O,g)):zn(n,r,O,g),r.memoizedState=c.state,f&&wp(r,o,!0),r.child}function ym(n){var r=n.stateNode;r.pendingContext?Ep(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Ep(n,r.context,!1),Nu(n,r.containerInfo)}function Mm(n,r,o,c,f){return Ha(),Au(f),r.flags|=256,zn(n,r,o,c),r.child}var Zu={dehydrated:null,treeContext:null,retryLane:0};function Ju(n){return{baseLanes:n,cachePool:null,transitions:null}}function Em(n,r,o){var c=r.pendingProps,f=tn.current,g=!1,A=(r.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Yt(tn,f&1),n===null)return wu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=r.mode,g=r.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Fl(A,c,0,null),n=fa(n,c,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=Ju(o),r.memoizedState=Zu,n):Qu(r,A));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return nx(n,r,A,c,O,f,o);if(g){g=c.fallback,A=r.mode,f=n.child,O=f.sibling;var V={mode:"hidden",children:c.children};return(A&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=V,r.deletions=null):(c=Ur(f,V),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?g=Ur(O,g):(g=fa(g,A,o,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,A=n.child.memoizedState,A=A===null?Ju(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~o,r.memoizedState=Zu,c}return g=n.child,n=g.sibling,c=Ur(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function Qu(n,r){return r=Fl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Ml(n,r,o,c){return c!==null&&Au(c),Va(r,n.child,null,o),n=Qu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function nx(n,r,o,c,f,g,A){if(o)return r.flags&256?(r.flags&=-257,c=Yu(Error(t(422))),Ml(n,r,A,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,f=r.mode,c=Fl({mode:"visible",children:c.children},f,0,null),g=fa(g,f,A,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&Va(r,n.child,null,A),r.child.memoizedState=Ju(A),r.memoizedState=Zu,g);if((r.mode&1)===0)return Ml(n,r,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,g=Error(t(419)),c=Yu(g,c,void 0),Ml(n,r,A,c)}if(O=(A&n.childLanes)!==0,$n||O){if(c=xn,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,nr(n,f),Ri(c,n,f,-1))}return md(),c=Yu(Error(t(421))),Ml(n,r,A,c)}return f.data==="$?"?(r.flags|=128,r.child=n.child,r=mx.bind(null,n),f._reactRetry=r,null):(n=g.treeContext,ti=Er(f.nextSibling),ei=r,Zt=!0,Ti=null,n!==null&&(ui[di++]=er,ui[di++]=tr,ui[di++]=ia,er=n.id,tr=n.overflow,ia=r),r=Qu(r,c.children),r.flags|=4096,r)}function Tm(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Pu(n.return,r,o)}function ed(n,r,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function wm(n,r,o){var c=r.pendingProps,f=c.revealOrder,g=c.tail;if(zn(n,r,c.children,o),c=tn.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Tm(n,o,r);else if(n.tag===19)Tm(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Yt(tn,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&ml(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),ed(r,!1,f,o,g);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&ml(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}ed(r,!0,o,null,g);break;case"together":ed(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function El(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function rr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),la|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Ur(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Ur(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function ix(n,r,o){switch(r.tag){case 3:ym(r),Ha();break;case 5:zp(r);break;case 1:Xn(r.type)&&al(r);break;case 4:Nu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Yt(dl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Yt(tn,tn.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Em(n,r,o):(Yt(tn,tn.current&1),n=rr(n,r,o),n!==null?n.sibling:null);Yt(tn,tn.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return wm(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Yt(tn,tn.current),c)break;return null;case 22:case 23:return r.lanes=0,_m(n,r,o)}return rr(n,r,o)}var Am,td,Cm,Rm;Am=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},td=function(){},Cm=function(n,r,o,c){var f=n.memoizedProps;if(f!==c){n=r.stateNode,sa(ki.current);var g=null;switch(o){case"input":f=vt(n,f),c=vt(n,c),g=[];break;case"select":f=Z({},f,{value:void 0}),c=Z({},c,{value:void 0}),g=[];break;case"textarea":f=at(n,f),c=at(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=nl)}et(o,c);var A;o=null;for(de in f)if(!c.hasOwnProperty(de)&&f.hasOwnProperty(de)&&f[de]!=null)if(de==="style"){var O=f[de];for(A in O)O.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else de!=="dangerouslySetInnerHTML"&&de!=="children"&&de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&de!=="autoFocus"&&(s.hasOwnProperty(de)?g||(g=[]):(g=g||[]).push(de,null));for(de in c){var V=c[de];if(O=f!=null?f[de]:void 0,c.hasOwnProperty(de)&&V!==O&&(V!=null||O!=null))if(de==="style")if(O){for(A in O)!O.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in V)V.hasOwnProperty(A)&&O[A]!==V[A]&&(o||(o={}),o[A]=V[A])}else o||(g||(g=[]),g.push(de,o)),o=V;else de==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(g=g||[]).push(de,V)):de==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(de,""+V):de!=="suppressContentEditableWarning"&&de!=="suppressHydrationWarning"&&(s.hasOwnProperty(de)?(V!=null&&de==="onScroll"&&qt("scroll",n),g||O===V||(g=[])):(g=g||[]).push(de,V))}o&&(g=g||[]).push("style",o);var de=g;(r.updateQueue=de)&&(r.flags|=4)}},Rm=function(n,r,o,c){o!==c&&(r.flags|=4)};function no(n,r){if(!Zt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Dn(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function rx(n,r,o){var c=r.pendingProps;switch(Eu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Dn(r),null;case 1:return Xn(r.type)&&rl(),Dn(r),null;case 3:return c=r.stateNode,Wa(),Kt(Wn),Kt(Pn),Ou(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(cl(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Ti!==null&&(fd(Ti),Ti=null))),td(n,r),Dn(r),null;case 5:Uu(r);var f=sa(Zs.current);if(o=r.type,n!==null&&r.stateNode!=null)Cm(n,r,o,c,f),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Dn(r),null}if(n=sa(ki.current),cl(r)){c=r.stateNode,o=r.type;var g=r.memoizedProps;switch(c[Ii]=r,c[$s]=g,n=(r.mode&1)!==0,o){case"dialog":qt("cancel",c),qt("close",c);break;case"iframe":case"object":case"embed":qt("load",c);break;case"video":case"audio":for(f=0;f<Bs.length;f++)qt(Bs[f],c);break;case"source":qt("error",c);break;case"img":case"image":case"link":qt("error",c),qt("load",c);break;case"details":qt("toggle",c);break;case"input":pe(c,g),qt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},qt("invalid",c);break;case"textarea":B(c,g),qt("invalid",c)}et(o,g),f=null;for(var A in g)if(g.hasOwnProperty(A)){var O=g[A];A==="children"?typeof O=="string"?c.textContent!==O&&(g.suppressHydrationWarning!==!0&&tl(c.textContent,O,n),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&tl(c.textContent,O,n),f=["children",""+O]):s.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&qt("scroll",c)}switch(o){case"input":Re(c),lt(c,g,!0);break;case"textarea":Re(c),ut(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=nl)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[Ii]=r,n[$s]=c,Am(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ue(o,c),o){case"dialog":qt("cancel",n),qt("close",n),f=c;break;case"iframe":case"object":case"embed":qt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Bs.length;f++)qt(Bs[f],n);f=c;break;case"source":qt("error",n),f=c;break;case"img":case"image":case"link":qt("error",n),qt("load",n),f=c;break;case"details":qt("toggle",n),f=c;break;case"input":pe(n,c),f=vt(n,c),qt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=Z({},c,{value:void 0}),qt("invalid",n);break;case"textarea":B(n,c),f=at(n,c),qt("invalid",n);break;default:f=c}et(o,f),O=f;for(g in O)if(O.hasOwnProperty(g)){var V=O[g];g==="style"?_e(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ne(n,V)):g==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&he(n,V):typeof V=="number"&&he(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?V!=null&&g==="onScroll"&&qt("scroll",n):V!=null&&z(n,g,V,A))}switch(o){case"input":Re(n),lt(n,c,!1);break;case"textarea":Re(n),ut(n);break;case"option":c.value!=null&&n.setAttribute("value",""+fe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?ct(n,!!c.multiple,g,!1):c.defaultValue!=null&&ct(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=nl)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Dn(r),null;case 6:if(n&&r.stateNode!=null)Rm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=sa(Zs.current),sa(ki.current),cl(r)){if(c=r.stateNode,o=r.memoizedProps,c[Ii]=r,(g=c.nodeValue!==o)&&(n=ei,n!==null))switch(n.tag){case 3:tl(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&tl(c.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Ii]=r,r.stateNode=c}return Dn(r),null;case 13:if(Kt(tn),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Zt&&ti!==null&&(r.mode&1)!==0&&(r.flags&128)===0)Lp(),Ha(),r.flags|=98560,g=!1;else if(g=cl(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Ii]=r}else Ha(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Dn(r),g=!1}else Ti!==null&&(fd(Ti),Ti=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(tn.current&1)!==0?hn===0&&(hn=3):md())),r.updateQueue!==null&&(r.flags|=4),Dn(r),null);case 4:return Wa(),td(n,r),n===null&&Ws(r.stateNode.containerInfo),Dn(r),null;case 10:return bu(r.type._context),Dn(r),null;case 17:return Xn(r.type)&&rl(),Dn(r),null;case 19:if(Kt(tn),g=r.memoizedState,g===null)return Dn(r),null;if(c=(r.flags&128)!==0,A=g.rendering,A===null)if(c)no(g,!1);else{if(hn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=ml(n),A!==null){for(r.flags|=128,no(g,!1),c=A.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)g=o,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Yt(tn,tn.current&1|2),r.child}n=n.sibling}g.tail!==null&&en()>qa&&(r.flags|=128,c=!0,no(g,!1),r.lanes=4194304)}else{if(!c)if(n=ml(A),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),no(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!Zt)return Dn(r),null}else 2*en()-g.renderingStartTime>qa&&o!==1073741824&&(r.flags|=128,c=!0,no(g,!1),r.lanes=4194304);g.isBackwards?(A.sibling=r.child,r.child=A):(o=g.last,o!==null?o.sibling=A:r.child=A,g.last=A)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=en(),r.sibling=null,o=tn.current,Yt(tn,c?o&1|2:o&1),r):(Dn(r),null);case 22:case 23:return pd(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ni&1073741824)!==0&&(Dn(r),r.subtreeFlags&6&&(r.flags|=8192)):Dn(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function ax(n,r){switch(Eu(r),r.tag){case 1:return Xn(r.type)&&rl(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Wa(),Kt(Wn),Kt(Pn),Ou(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Uu(r),null;case 13:if(Kt(tn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ha()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Kt(tn),null;case 4:return Wa(),null;case 10:return bu(r.type._context),null;case 22:case 23:return pd(),null;case 24:return null;default:return null}}var Tl=!1,Nn=!1,sx=typeof WeakSet=="function"?WeakSet:Set,qe=null;function $a(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){sn(n,r,c)}else o.current=null}function nd(n,r,o){try{o()}catch(c){sn(n,r,c)}}var bm=!1;function ox(n,r){if(pu=Wo,n=op(),su(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,O=-1,V=-1,de=0,Me=0,Te=n,Se=null;t:for(;;){for(var Xe;Te!==o||f!==0&&Te.nodeType!==3||(O=A+f),Te!==g||c!==0&&Te.nodeType!==3||(V=A+c),Te.nodeType===3&&(A+=Te.nodeValue.length),(Xe=Te.firstChild)!==null;)Se=Te,Te=Xe;for(;;){if(Te===n)break t;if(Se===o&&++de===f&&(O=A),Se===g&&++Me===c&&(V=A),(Xe=Te.nextSibling)!==null)break;Te=Se,Se=Te.parentNode}Te=Xe}o=O===-1||V===-1?null:{start:O,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(mu={focusedElem:n,selectionRange:o},Wo=!1,qe=r;qe!==null;)if(r=qe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,qe=n;else for(;qe!==null;){r=qe;try{var je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(je!==null){var Je=je.memoizedProps,ln=je.memoizedState,ae=r.stateNode,Y=ae.getSnapshotBeforeUpdate(r.elementType===r.type?Je:wi(r.type,Je),ln);ae.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){sn(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,qe=n;break}qe=r.return}return je=bm,bm=!1,je}function io(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&nd(r,o,g)}f=f.next}while(f!==c)}}function wl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function id(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Pm(n){var r=n.alternate;r!==null&&(n.alternate=null,Pm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Ii],delete r[$s],delete r[xu],delete r[B_],delete r[W_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function Lm(n){return n.tag===5||n.tag===3||n.tag===4}function Dm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||Lm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function rd(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=nl));else if(c!==4&&(n=n.child,n!==null))for(rd(n,r,o),n=n.sibling;n!==null;)rd(n,r,o),n=n.sibling}function ad(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(ad(n,r,o),n=n.sibling;n!==null;)ad(n,r,o),n=n.sibling}var wn=null,Ai=!1;function br(n,r,o){for(o=o.child;o!==null;)Nm(n,r,o),o=o.sibling}function Nm(n,r,o){if(te&&typeof te.onCommitFiberUnmount=="function")try{te.onCommitFiberUnmount(re,o)}catch{}switch(o.tag){case 5:Nn||$a(o,r);case 6:var c=wn,f=Ai;wn=null,br(n,r,o),wn=c,Ai=f,wn!==null&&(Ai?(n=wn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):wn.removeChild(o.stateNode));break;case 18:wn!==null&&(Ai?(n=wn,o=o.stateNode,n.nodeType===8?_u(n.parentNode,o):n.nodeType===1&&_u(n,o),Fs(n)):_u(wn,o.stateNode));break;case 4:c=wn,f=Ai,wn=o.stateNode.containerInfo,Ai=!0,br(n,r,o),wn=c,Ai=f;break;case 0:case 11:case 14:case 15:if(!Nn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&nd(o,r,A),f=f.next}while(f!==c)}br(n,r,o);break;case 1:if(!Nn&&($a(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){sn(o,r,O)}br(n,r,o);break;case 21:br(n,r,o);break;case 22:o.mode&1?(Nn=(c=Nn)||o.memoizedState!==null,br(n,r,o),Nn=c):br(n,r,o);break;default:br(n,r,o)}}function Um(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new sx),r.forEach(function(c){var f=gx.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Ci(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,A=r,O=A;e:for(;O!==null;){switch(O.tag){case 5:wn=O.stateNode,Ai=!1;break e;case 3:wn=O.stateNode.containerInfo,Ai=!0;break e;case 4:wn=O.stateNode.containerInfo,Ai=!0;break e}O=O.return}if(wn===null)throw Error(t(160));Nm(g,A,f),wn=null,Ai=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(de){sn(f,r,de)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Fm(r,n),r=r.sibling}function Fm(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Ci(r,n),Hi(n),c&4){try{io(3,n,n.return),wl(3,n)}catch(Je){sn(n,n.return,Je)}try{io(5,n,n.return)}catch(Je){sn(n,n.return,Je)}}break;case 1:Ci(r,n),Hi(n),c&512&&o!==null&&$a(o,o.return);break;case 5:if(Ci(r,n),Hi(n),c&512&&o!==null&&$a(o,o.return),n.flags&32){var f=n.stateNode;try{he(f,"")}catch(Je){sn(n,n.return,Je)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,A=o!==null?o.memoizedProps:g,O=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&He(f,g),Ue(O,A);var de=Ue(O,g);for(A=0;A<V.length;A+=2){var Me=V[A],Te=V[A+1];Me==="style"?_e(f,Te):Me==="dangerouslySetInnerHTML"?ne(f,Te):Me==="children"?he(f,Te):z(f,Me,Te,de)}switch(O){case"input":be(f,g);break;case"textarea":Rt(f,g);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Xe=g.value;Xe!=null?ct(f,!!g.multiple,Xe,!1):Se!==!!g.multiple&&(g.defaultValue!=null?ct(f,!!g.multiple,g.defaultValue,!0):ct(f,!!g.multiple,g.multiple?[]:"",!1))}f[$s]=g}catch(Je){sn(n,n.return,Je)}}break;case 6:if(Ci(r,n),Hi(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(Je){sn(n,n.return,Je)}}break;case 3:if(Ci(r,n),Hi(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Fs(r.containerInfo)}catch(Je){sn(n,n.return,Je)}break;case 4:Ci(r,n),Hi(n);break;case 13:Ci(r,n),Hi(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(ld=en())),c&4&&Um(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(Nn=(de=Nn)||Me,Ci(r,n),Nn=de):Ci(r,n),Hi(n),c&8192){if(de=n.memoizedState!==null,(n.stateNode.isHidden=de)&&!Me&&(n.mode&1)!==0)for(qe=n,Me=n.child;Me!==null;){for(Te=qe=Me;qe!==null;){switch(Se=qe,Xe=Se.child,Se.tag){case 0:case 11:case 14:case 15:io(4,Se,Se.return);break;case 1:$a(Se,Se.return);var je=Se.stateNode;if(typeof je.componentWillUnmount=="function"){c=Se,o=Se.return;try{r=c,je.props=r.memoizedProps,je.state=r.memoizedState,je.componentWillUnmount()}catch(Je){sn(c,o,Je)}}break;case 5:$a(Se,Se.return);break;case 22:if(Se.memoizedState!==null){km(Te);continue}}Xe!==null?(Xe.return=Se,qe=Xe):km(Te)}Me=Me.sibling}e:for(Me=null,Te=n;;){if(Te.tag===5){if(Me===null){Me=Te;try{f=Te.stateNode,de?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Te.stateNode,V=Te.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=ge("display",A))}catch(Je){sn(n,n.return,Je)}}}else if(Te.tag===6){if(Me===null)try{Te.stateNode.nodeValue=de?"":Te.memoizedProps}catch(Je){sn(n,n.return,Je)}}else if((Te.tag!==22&&Te.tag!==23||Te.memoizedState===null||Te===n)&&Te.child!==null){Te.child.return=Te,Te=Te.child;continue}if(Te===n)break e;for(;Te.sibling===null;){if(Te.return===null||Te.return===n)break e;Me===Te&&(Me=null),Te=Te.return}Me===Te&&(Me=null),Te.sibling.return=Te.return,Te=Te.sibling}}break;case 19:Ci(r,n),Hi(n),c&4&&Um(n);break;case 21:break;default:Ci(r,n),Hi(n)}}function Hi(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(Lm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(he(f,""),c.flags&=-33);var g=Dm(n);ad(n,g,f);break;case 3:case 4:var A=c.stateNode.containerInfo,O=Dm(n);rd(n,O,A);break;default:throw Error(t(161))}}catch(V){sn(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function lx(n,r,o){qe=n,Om(n)}function Om(n,r,o){for(var c=(n.mode&1)!==0;qe!==null;){var f=qe,g=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||Tl;if(!A){var O=f.alternate,V=O!==null&&O.memoizedState!==null||Nn;O=Tl;var de=Nn;if(Tl=A,(Nn=V)&&!de)for(qe=f;qe!==null;)A=qe,V=A.child,A.tag===22&&A.memoizedState!==null?zm(f):V!==null?(V.return=A,qe=V):zm(f);for(;g!==null;)qe=g,Om(g),g=g.sibling;qe=f,Tl=O,Nn=de}Im(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,qe=g):Im(n)}}function Im(n){for(;qe!==null;){var r=qe;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Nn||wl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Nn)if(o===null)c.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:wi(r.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&kp(r,g,c);break;case 3:var A=r.updateQueue;if(A!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}kp(r,A,o)}break;case 5:var O=r.stateNode;if(o===null&&r.flags&4){o=O;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var de=r.alternate;if(de!==null){var Me=de.memoizedState;if(Me!==null){var Te=Me.dehydrated;Te!==null&&Fs(Te)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Nn||r.flags&512&&id(r)}catch(Se){sn(r,r.return,Se)}}if(r===n){qe=null;break}if(o=r.sibling,o!==null){o.return=r.return,qe=o;break}qe=r.return}}function km(n){for(;qe!==null;){var r=qe;if(r===n){qe=null;break}var o=r.sibling;if(o!==null){o.return=r.return,qe=o;break}qe=r.return}}function zm(n){for(;qe!==null;){var r=qe;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{wl(4,r)}catch(V){sn(r,o,V)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(V){sn(r,f,V)}}var g=r.return;try{id(r)}catch(V){sn(r,g,V)}break;case 5:var A=r.return;try{id(r)}catch(V){sn(r,A,V)}}}catch(V){sn(r,r.return,V)}if(r===n){qe=null;break}var O=r.sibling;if(O!==null){O.return=r.return,qe=O;break}qe=r.return}}var cx=Math.ceil,Al=R.ReactCurrentDispatcher,sd=R.ReactCurrentOwner,pi=R.ReactCurrentBatchConfig,Ot=0,xn=null,cn=null,An=0,ni=0,Ya=Tr(0),hn=0,ro=null,la=0,Cl=0,od=0,ao=null,Yn=null,ld=0,qa=1/0,ar=null,Rl=!1,cd=null,Pr=null,bl=!1,Lr=null,Pl=0,so=0,ud=null,Ll=-1,Dl=0;function Hn(){return(Ot&6)!==0?en():Ll!==-1?Ll:Ll=en()}function Dr(n){return(n.mode&1)===0?1:(Ot&2)!==0&&An!==0?An&-An:$_.transition!==null?(Dl===0&&(Dl=dn()),Dl):(n=Mt,n!==0||(n=window.event,n=n===void 0?16:Vh(n.type)),n)}function Ri(n,r,o,c){if(50<so)throw so=0,ud=null,Error(t(185));on(n,o,c),((Ot&2)===0||n!==xn)&&(n===xn&&((Ot&2)===0&&(Cl|=o),hn===4&&Nr(n,An)),qn(n,c),o===1&&Ot===0&&(r.mode&1)===0&&(qa=en()+500,sl&&Ar()))}function qn(n,r){var o=n.callbackNode;$t(n,r);var c=bt(n,n===xn?An:0);if(c===0)o!==null&&Rs(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&Rs(o),r===1)n.tag===0?X_(Vm.bind(null,n)):Ap(Vm.bind(null,n)),V_(function(){(Ot&6)===0&&Ar()}),o=null;else{switch(xi(c)){case 1:o=bs;break;case 4:o=Ps;break;case 16:o=C;break;case 536870912:o=ue;break;default:o=C}o=Km(o,Hm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Hm(n,r){if(Ll=-1,Dl=0,(Ot&6)!==0)throw Error(t(327));var o=n.callbackNode;if(Ka()&&n.callbackNode!==o)return null;var c=bt(n,n===xn?An:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Nl(n,c);else{r=c;var f=Ot;Ot|=2;var g=Bm();(xn!==n||An!==r)&&(ar=null,qa=en()+500,ua(n,r));do try{fx();break}catch(O){Gm(n,O)}while(!0);Ru(),Al.current=g,Ot=f,cn!==null?r=0:(xn=null,An=0,r=hn)}if(r!==0){if(r===2&&(f=Ht(n),f!==0&&(c=f,r=dd(n,f))),r===1)throw o=ro,ua(n,0),Nr(n,c),qn(n,en()),o;if(r===6)Nr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!ux(f)&&(r=Nl(n,c),r===2&&(g=Ht(n),g!==0&&(c=g,r=dd(n,g))),r===1))throw o=ro,ua(n,0),Nr(n,c),qn(n,en()),o;switch(n.finishedWork=f,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:da(n,Yn,ar);break;case 3:if(Nr(n,c),(c&130023424)===c&&(r=ld+500-en(),10<r)){if(bt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Hn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=vu(da.bind(null,n,Yn,ar),r);break}da(n,Yn,ar);break;case 4:if(Nr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,f=-1;0<c;){var A=31-Fe(c);g=1<<A,A=r[A],A>f&&(f=A),c&=~g}if(c=f,c=en()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*cx(c/1960))-c,10<c){n.timeoutHandle=vu(da.bind(null,n,Yn,ar),c);break}da(n,Yn,ar);break;case 5:da(n,Yn,ar);break;default:throw Error(t(329))}}}return qn(n,en()),n.callbackNode===o?Hm.bind(null,n):null}function dd(n,r){var o=ao;return n.current.memoizedState.isDehydrated&&(ua(n,r).flags|=256),n=Nl(n,r),n!==2&&(r=Yn,Yn=o,r!==null&&fd(r)),n}function fd(n){Yn===null?Yn=n:Yn.push.apply(Yn,n)}function ux(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!Ei(g(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Nr(n,r){for(r&=~od,r&=~Cl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Fe(r),c=1<<o;n[o]=-1,r&=~c}}function Vm(n){if((Ot&6)!==0)throw Error(t(327));Ka();var r=bt(n,0);if((r&1)===0)return qn(n,en()),null;var o=Nl(n,r);if(n.tag!==0&&o===2){var c=Ht(n);c!==0&&(r=c,o=dd(n,c))}if(o===1)throw o=ro,ua(n,0),Nr(n,r),qn(n,en()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,da(n,Yn,ar),qn(n,en()),null}function hd(n,r){var o=Ot;Ot|=1;try{return n(r)}finally{Ot=o,Ot===0&&(qa=en()+500,sl&&Ar())}}function ca(n){Lr!==null&&Lr.tag===0&&(Ot&6)===0&&Ka();var r=Ot;Ot|=1;var o=pi.transition,c=Mt;try{if(pi.transition=null,Mt=1,n)return n()}finally{Mt=c,pi.transition=o,Ot=r,(Ot&6)===0&&Ar()}}function pd(){ni=Ya.current,Kt(Ya)}function ua(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,H_(o)),cn!==null)for(o=cn.return;o!==null;){var c=o;switch(Eu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&rl();break;case 3:Wa(),Kt(Wn),Kt(Pn),Ou();break;case 5:Uu(c);break;case 4:Wa();break;case 13:Kt(tn);break;case 19:Kt(tn);break;case 10:bu(c.type._context);break;case 22:case 23:pd()}o=o.return}if(xn=n,cn=n=Ur(n.current,null),An=ni=r,hn=0,ro=null,od=Cl=la=0,Yn=ao=null,aa!==null){for(r=0;r<aa.length;r++)if(o=aa[r],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var A=g.next;g.next=f,c.next=A}o.pending=c}aa=null}return n}function Gm(n,r){do{var o=cn;try{if(Ru(),gl.current=Sl,vl){for(var c=nn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}vl=!1}if(oa=0,_n=fn=nn=null,Js=!1,Qs=0,sd.current=null,o===null||o.return===null){hn=1,ro=r,cn=null;break}e:{var g=n,A=o.return,O=o,V=r;if(r=An,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var de=V,Me=O,Te=Me.tag;if((Me.mode&1)===0&&(Te===0||Te===11||Te===15)){var Se=Me.alternate;Se?(Me.updateQueue=Se.updateQueue,Me.memoizedState=Se.memoizedState,Me.lanes=Se.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var Xe=hm(A);if(Xe!==null){Xe.flags&=-257,pm(Xe,A,O,g,r),Xe.mode&1&&fm(g,de,r),r=Xe,V=de;var je=r.updateQueue;if(je===null){var Je=new Set;Je.add(V),r.updateQueue=Je}else je.add(V);break e}else{if((r&1)===0){fm(g,de,r),md();break e}V=Error(t(426))}}else if(Zt&&O.mode&1){var ln=hm(A);if(ln!==null){(ln.flags&65536)===0&&(ln.flags|=256),pm(ln,A,O,g,r),Au(Xa(V,O));break e}}g=V=Xa(V,O),hn!==4&&(hn=2),ao===null?ao=[g]:ao.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var ae=um(g,V,r);Ip(g,ae);break e;case 1:O=V;var Y=g.type,ce=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Pr===null||!Pr.has(ce)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ae=dm(g,O,r);Ip(g,Ae);break e}}g=g.return}while(g!==null)}Xm(o)}catch(rt){r=rt,cn===o&&o!==null&&(cn=o=o.return);continue}break}while(!0)}function Bm(){var n=Al.current;return Al.current=Sl,n===null?Sl:n}function md(){(hn===0||hn===3||hn===2)&&(hn=4),xn===null||(la&268435455)===0&&(Cl&268435455)===0||Nr(xn,An)}function Nl(n,r){var o=Ot;Ot|=2;var c=Bm();(xn!==n||An!==r)&&(ar=null,ua(n,r));do try{dx();break}catch(f){Gm(n,f)}while(!0);if(Ru(),Ot=o,Al.current=c,cn!==null)throw Error(t(261));return xn=null,An=0,hn}function dx(){for(;cn!==null;)Wm(cn)}function fx(){for(;cn!==null&&!Go();)Wm(cn)}function Wm(n){var r=qm(n.alternate,n,ni);n.memoizedProps=n.pendingProps,r===null?Xm(n):cn=r,sd.current=null}function Xm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=rx(o,r,ni),o!==null){cn=o;return}}else{if(o=ax(o,r),o!==null){o.flags&=32767,cn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{hn=6,cn=null;return}}if(r=r.sibling,r!==null){cn=r;return}cn=r=n}while(r!==null);hn===0&&(hn=5)}function da(n,r,o){var c=Mt,f=pi.transition;try{pi.transition=null,Mt=1,hx(n,r,o,c)}finally{pi.transition=f,Mt=c}return null}function hx(n,r,o,c){do Ka();while(Lr!==null);if((Ot&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(Pt(n,g),n===xn&&(cn=xn=null,An=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||bl||(bl=!0,Km(C,function(){return Ka(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=pi.transition,pi.transition=null;var A=Mt;Mt=1;var O=Ot;Ot|=4,sd.current=null,ox(n,o),Fm(o,n),N_(mu),Wo=!!pu,mu=pu=null,n.current=o,lx(o),Yc(),Ot=O,Mt=A,pi.transition=g}else n.current=o;if(bl&&(bl=!1,Lr=n,Pl=f),g=n.pendingLanes,g===0&&(Pr=null),Ie(o.stateNode),qn(n,en()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)f=r[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Rl)throw Rl=!1,n=cd,cd=null,n;return(Pl&1)!==0&&n.tag!==0&&Ka(),g=n.pendingLanes,(g&1)!==0?n===ud?so++:(so=0,ud=n):so=0,Ar(),null}function Ka(){if(Lr!==null){var n=xi(Pl),r=pi.transition,o=Mt;try{if(pi.transition=null,Mt=16>n?16:n,Lr===null)var c=!1;else{if(n=Lr,Lr=null,Pl=0,(Ot&6)!==0)throw Error(t(331));var f=Ot;for(Ot|=4,qe=n.current;qe!==null;){var g=qe,A=g.child;if((qe.flags&16)!==0){var O=g.deletions;if(O!==null){for(var V=0;V<O.length;V++){var de=O[V];for(qe=de;qe!==null;){var Me=qe;switch(Me.tag){case 0:case 11:case 15:io(8,Me,g)}var Te=Me.child;if(Te!==null)Te.return=Me,qe=Te;else for(;qe!==null;){Me=qe;var Se=Me.sibling,Xe=Me.return;if(Pm(Me),Me===de){qe=null;break}if(Se!==null){Se.return=Xe,qe=Se;break}qe=Xe}}}var je=g.alternate;if(je!==null){var Je=je.child;if(Je!==null){je.child=null;do{var ln=Je.sibling;Je.sibling=null,Je=ln}while(Je!==null)}}qe=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,qe=A;else e:for(;qe!==null;){if(g=qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:io(9,g,g.return)}var ae=g.sibling;if(ae!==null){ae.return=g.return,qe=ae;break e}qe=g.return}}var Y=n.current;for(qe=Y;qe!==null;){A=qe;var ce=A.child;if((A.subtreeFlags&2064)!==0&&ce!==null)ce.return=A,qe=ce;else e:for(A=Y;qe!==null;){if(O=qe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:wl(9,O)}}catch(rt){sn(O,O.return,rt)}if(O===A){qe=null;break e}var Ae=O.sibling;if(Ae!==null){Ae.return=O.return,qe=Ae;break e}qe=O.return}}if(Ot=f,Ar(),te&&typeof te.onPostCommitFiberRoot=="function")try{te.onPostCommitFiberRoot(re,n)}catch{}c=!0}return c}finally{Mt=o,pi.transition=r}}return!1}function $m(n,r,o){r=Xa(o,r),r=um(n,r,1),n=Rr(n,r,1),r=Hn(),n!==null&&(on(n,1,r),qn(n,r))}function sn(n,r,o){if(n.tag===3)$m(n,n,o);else for(;r!==null;){if(r.tag===3){$m(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Pr===null||!Pr.has(c))){n=Xa(o,n),n=dm(r,n,1),r=Rr(r,n,1),n=Hn(),r!==null&&(on(r,1,n),qn(r,n));break}}r=r.return}}function px(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=Hn(),n.pingedLanes|=n.suspendedLanes&o,xn===n&&(An&o)===o&&(hn===4||hn===3&&(An&130023424)===An&&500>en()-ld?ua(n,0):od|=o),qn(n,r)}function Ym(n,r){r===0&&((n.mode&1)===0?r=1:(r=yt,yt<<=1,(yt&130023424)===0&&(yt=4194304)));var o=Hn();n=nr(n,r),n!==null&&(on(n,r,o),qn(n,o))}function mx(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Ym(n,o)}function gx(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Ym(n,o)}var qm;qm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Wn.current)$n=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return $n=!1,ix(n,r,o);$n=(n.flags&131072)!==0}else $n=!1,Zt&&(r.flags&1048576)!==0&&Cp(r,ll,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;El(n,r),n=r.pendingProps;var f=Ia(r,Pn.current);Ba(r,o),f=zu(null,r,c,n,f,o);var g=Hu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Xn(c)?(g=!0,al(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Du(r),f.updater=yl,r.stateNode=f,f._reactInternals=r,$u(r,c,n,o),r=ju(null,r,c,!0,g,o)):(r.tag=0,Zt&&g&&Mu(r),zn(null,r,f,o),r=r.child),r;case 16:c=r.elementType;e:{switch(El(n,r),n=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=_x(c),n=wi(c,n),f){case 0:r=Ku(null,r,c,n,o);break e;case 1:r=Sm(null,r,c,n,o);break e;case 11:r=mm(null,r,c,n,o);break e;case 14:r=gm(null,r,c,wi(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:wi(c,f),Ku(n,r,c,f,o);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:wi(c,f),Sm(n,r,c,f,o);case 3:e:{if(ym(r),n===null)throw Error(t(387));c=r.pendingProps,g=r.memoizedState,f=g.element,Op(n,r),pl(r,c,null,o);var A=r.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=Xa(Error(t(423)),r),r=Mm(n,r,c,o,f);break e}else if(c!==f){f=Xa(Error(t(424)),r),r=Mm(n,r,c,o,f);break e}else for(ti=Er(r.stateNode.containerInfo.firstChild),ei=r,Zt=!0,Ti=null,o=Up(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ha(),c===f){r=rr(n,r,o);break e}zn(n,r,c,o)}r=r.child}return r;case 5:return zp(r),n===null&&wu(r),c=r.type,f=r.pendingProps,g=n!==null?n.memoizedProps:null,A=f.children,gu(c,f)?A=null:g!==null&&gu(c,g)&&(r.flags|=32),xm(n,r),zn(n,r,A,o),r.child;case 6:return n===null&&wu(r),null;case 13:return Em(n,r,o);case 4:return Nu(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=Va(r,null,c,o):zn(n,r,c,o),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:wi(c,f),mm(n,r,c,f,o);case 7:return zn(n,r,r.pendingProps,o),r.child;case 8:return zn(n,r,r.pendingProps.children,o),r.child;case 12:return zn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,g=r.memoizedProps,A=f.value,Yt(dl,c._currentValue),c._currentValue=A,g!==null)if(Ei(g.value,A)){if(g.children===f.children&&!Wn.current){r=rr(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var O=g.dependencies;if(O!==null){A=g.child;for(var V=O.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=ir(-1,o&-o),V.tag=2;var de=g.updateQueue;if(de!==null){de=de.shared;var Me=de.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),de.pending=V}}g.lanes|=o,V=g.alternate,V!==null&&(V.lanes|=o),Pu(g.return,o,r),O.lanes|=o;break}V=V.next}}else if(g.tag===10)A=g.type===r.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=o,O=A.alternate,O!==null&&(O.lanes|=o),Pu(A,o,r),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===r){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}zn(n,r,f.children,o),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Ba(r,o),f=fi(f),c=c(f),r.flags|=1,zn(n,r,c,o),r.child;case 14:return c=r.type,f=wi(c,r.pendingProps),f=wi(c.type,f),gm(n,r,c,f,o);case 15:return vm(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:wi(c,f),El(n,r),r.tag=1,Xn(c)?(n=!0,al(r)):n=!1,Ba(r,o),lm(r,c,f),$u(r,c,f,o),ju(null,r,c,!0,n,o);case 19:return wm(n,r,o);case 22:return _m(n,r,o)}throw Error(t(156,r.tag))};function Km(n,r){return ea(n,r)}function vx(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function mi(n,r,o,c){return new vx(n,r,o,c)}function gd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function _x(n){if(typeof n=="function")return gd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===ee)return 14}return 2}function Ur(n,r){var o=n.alternate;return o===null?(o=mi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Ul(n,r,o,c,f,g){var A=2;if(c=n,typeof n=="function")gd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return fa(o.children,f,g,r);case T:A=8,f|=8;break;case U:return n=mi(12,o,r,f|2),n.elementType=U,n.lanes=g,n;case ie:return n=mi(13,o,r,f),n.elementType=ie,n.lanes=g,n;case H:return n=mi(19,o,r,f),n.elementType=H,n.lanes=g,n;case se:return Fl(o,f,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case k:A=10;break e;case G:A=9;break e;case j:A=11;break e;case ee:A=14;break e;case le:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=mi(A,o,r,f),r.elementType=n,r.type=c,r.lanes=g,r}function fa(n,r,o,c){return n=mi(7,n,c,r),n.lanes=o,n}function Fl(n,r,o,c){return n=mi(22,n,c,r),n.elementType=se,n.lanes=o,n.stateNode={isHidden:!1},n}function vd(n,r,o){return n=mi(6,n,null,r),n.lanes=o,n}function _d(n,r,o){return r=mi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function xx(n,r,o,c,f){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Be(0),this.expirationTimes=Be(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Be(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function xd(n,r,o,c,f,g,A,O,V){return n=new xx(n,r,o,O,V),r===1?(r=1,g===!0&&(r|=8)):r=0,g=mi(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Du(g),n}function Sx(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function jm(n){if(!n)return wr;n=n._reactInternals;e:{if(kn(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Xn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Xn(o))return Tp(n,o,r)}return r}function Zm(n,r,o,c,f,g,A,O,V){return n=xd(o,c,!0,n,f,g,A,O,V),n.context=jm(null),o=n.current,c=Hn(),f=Dr(o),g=ir(c,f),g.callback=r??null,Rr(o,g,f),n.current.lanes=f,on(n,f,c),qn(n,c),n}function Ol(n,r,o,c){var f=r.current,g=Hn(),A=Dr(f);return o=jm(o),r.context===null?r.context=o:r.pendingContext=o,r=ir(g,A),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Rr(f,r,A),n!==null&&(Ri(n,f,A,g),hl(n,f,A)),A}function Il(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Jm(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Sd(n,r){Jm(n,r),(n=n.alternate)&&Jm(n,r)}function yx(){return null}var Qm=typeof reportError=="function"?reportError:function(n){console.error(n)};function yd(n){this._internalRoot=n}kl.prototype.render=yd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Ol(n,r,null,null)},kl.prototype.unmount=yd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;ca(function(){Ol(null,n,null,null)}),r[Ji]=null}};function kl(n){this._internalRoot=n}kl.prototype.unstable_scheduleHydration=function(n){if(n){var r=Si();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Sr.length&&r!==0&&r<Sr[o].priority;o++);Sr.splice(o,0,n),o===0&&zh(n)}};function Md(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function zl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function eg(){}function Mx(n,r,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var de=Il(A);g.call(de)}}var A=Zm(r,c,n,0,null,!1,!1,"",eg);return n._reactRootContainer=A,n[Ji]=A.current,Ws(n.nodeType===8?n.parentNode:n),ca(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var de=Il(V);O.call(de)}}var V=xd(n,0,!1,null,null,!1,!1,"",eg);return n._reactRootContainer=V,n[Ji]=V.current,Ws(n.nodeType===8?n.parentNode:n),ca(function(){Ol(r,V,o,c)}),V}function Hl(n,r,o,c,f){var g=o._reactRootContainer;if(g){var A=g;if(typeof f=="function"){var O=f;f=function(){var V=Il(A);O.call(V)}}Ol(r,A,n,f)}else A=Mx(o,r,n,f,c);return Il(A)}Zi=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=$e(r.pendingLanes);o!==0&&(bn(r,o|1),qn(r,en()),(Ot&6)===0&&(qa=en()+500,Ar()))}break;case 13:ca(function(){var c=nr(n,1);if(c!==null){var f=Hn();Ri(c,n,1,f)}}),Sd(n,1)}},kt=function(n){if(n.tag===13){var r=nr(n,134217728);if(r!==null){var o=Hn();Ri(r,n,134217728,o)}Sd(n,134217728)}},jt=function(n){if(n.tag===13){var r=Dr(n),o=nr(n,r);if(o!==null){var c=Hn();Ri(o,n,r,c)}Sd(n,r)}},Si=function(){return Mt},Gt=function(n,r){var o=Mt;try{return Mt=n,r()}finally{Mt=o}},st=function(n,r,o){switch(r){case"input":if(be(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var f=il(c);if(!f)throw Error(t(90));St(c),be(c,f)}}}break;case"textarea":Rt(n,o);break;case"select":r=o.value,r!=null&&ct(n,!!o.multiple,r,!1)}},Ve=hd,xe=ca;var Ex={usingClientEntryPoint:!1,Events:[Ys,Fa,il,ve,De,hd]},oo={findFiberByHostInstance:ta,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Tx={bundleType:oo.bundleType,version:oo.version,rendererPackageName:oo.rendererPackageName,rendererConfig:oo.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=Qr(n),n===null?null:n.stateNode},findFiberByHostInstance:oo.findFiberByHostInstance||yx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Vl.isDisabled&&Vl.supportsFiber)try{re=Vl.inject(Tx),te=Vl}catch{}}return Kn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Ex,Kn.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Md(r))throw Error(t(200));return Sx(n,r,null,o)},Kn.createRoot=function(n,r){if(!Md(n))throw Error(t(299));var o=!1,c="",f=Qm;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=xd(n,1,!1,null,null,o,!1,c,f),n[Ji]=r.current,Ws(n.nodeType===8?n.parentNode:n),new yd(r)},Kn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=Qr(r),n=n===null?null:n.stateNode,n},Kn.flushSync=function(n){return ca(n)},Kn.hydrate=function(n,r,o){if(!zl(r))throw Error(t(200));return Hl(null,n,r,!0,o)},Kn.hydrateRoot=function(n,r,o){if(!Md(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",A=Qm;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),r=Zm(r,null,n,1,o??null,f,!1,g,A),n[Ji]=r.current,Ws(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new kl(r)},Kn.render=function(n,r,o){if(!zl(r))throw Error(t(200));return Hl(null,n,r,!1,o)},Kn.unmountComponentAtNode=function(n){if(!zl(n))throw Error(t(40));return n._reactRootContainer?(ca(function(){Hl(null,null,n,!1,function(){n._reactRootContainer=null,n[Ji]=null})}),!0):!1},Kn.unstable_batchedUpdates=hd,Kn.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!zl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Hl(n,r,o,!1,c)},Kn.version="18.3.1-next-f1338f8080-20240426",Kn}var lg;function Fx(){if(lg)return wd.exports;lg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),wd.exports=Ux(),wd.exports}var cg;function Ox(){if(cg)return Gl;cg=1;var i=Fx();return Gl.createRoot=i.createRoot,Gl.hydrateRoot=i.hydrateRoot,Gl}var Ix=Ox();const Bl={END:"end",LEFT:"left",RIGHT:"right",START:"start"},Xr={NONE:"none",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning",DANGER:"danger"};let Ft="bp6";typeof BLUEPRINT_NAMESPACE<"u"?Ft=BLUEPRINT_NAMESPACE:typeof REACT_APP_BLUEPRINT_NAMESPACE<"u"&&(Ft=REACT_APP_BLUEPRINT_NAMESPACE);const ah=`${Ft}-active`,kx=`${Ft}-align-left`,zx=`${Ft}-align-right`,Hx=`${Ft}-dark`,Ic=`${Ft}-disabled`,Co=`${Ft}-fill`,Vx=`${Ft}-inline`,Gx=`${Ft}-interactive`,Ss=`${Ft}-large`,Bx=`${Ft}-loading`,Ac=`${Ft}-minimal`,ug=`${Ft}-outlined`,Wx=`${Ft}-round`,Cc=`${Ft}-small`,U0=`${Ft}-vertical`;Fi(Xr.PRIMARY);Fi(Xr.SUCCESS);Fi(Xr.WARNING);Fi(Xr.DANGER);const Xx=`${Ft}-text-overflow-ellipsis`,kc=`${Ft}-button`,$x=`${kc}-group`,Yx=`${kc}-spinner`,qx=`${kc}-text`,Kx=`${Ft}-html-select`,sh=`${Ft}-control`,jx=`${sh}-input`,F0=`${sh}-indicator`,dg=`${F0}-child`,Zx=`${Ft}-checkbox`,Jx=`${Ft}-radio`,O0=`${Ft}-switch`,fg=`${O0}-inner-text`,Ma=`${Ft}-slider`,Qx=`${Ma}-axis`,I0=`${Ma}-handle`,k0=`${Ma}-label`,eS=`${Ma}-track`,tS=`${Ma}-progress`,nS=`${Ft}-start`,iS=`${Ft}-end`,zc=`${Ft}-spinner`,rS=`${zc}-animation`,aS=`${zc}-head`,sS=`${Ft}-no-spin`,oS=`${zc}-track`,z0=`${Ft}-tag`,lS=`${z0}-remove`,oh=`${Ft}-icon`,cS=`${oh}-standard`,uS=`${oh}-large`;function lh(i){switch(i){case Bl.LEFT:case Bl.START:return kx;case Bl.RIGHT:case Bl.END:return zx;default:return}}function dS(i){if(i!=null)return i.indexOf(`${Ft}-icon-`)===0?i:`${Ft}-icon-${i}`}function Fi(i){if(!(i==null||i===Xr.NONE))return`${Ft}-intent-${i.toLowerCase()}`}function Hc(i,e){if(i==="small")return Cc;if(i==="large")return Ss;const{large:t=!1,small:a=!1}=e;return{[Ss]:t,[Cc]:a}}function H0(i,e){if(i==="outlined")return ug;if(i==="minimal")return Ac;const{minimal:t=!1,outlined:a=!1}=e;return{[Ac]:t,[ug]:a}}var ze=rh();function fS(i,e,t=(a,s)=>a===s){return i==null&&e==null?!0:i==null||e==null||i.length!==e.length?!1:i.every((a,s)=>t(a,e[s]))}function hS(){return typeof window<"u"&&window.document!=null}function V0(i){return typeof i=="function"}const qr="[Blueprint]",pS=qr+" clamp: max cannot be less than min",mS=qr+" <Slider> stepSize must be greater than zero.",gS=qr+" <Slider> labelStepSize must be greater than zero.",vS=qr+" <Slider> min prop must be a finite number.",_S=qr+" <Slider> max prop must be a finite number.",xS=qr+" <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s",SS=qr+" <MultiSlider> labelStepSize and labelValues prop are mutually exclusive, with labelStepSize taking priority.",yS=qr+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";function ff(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}function MS(i,e,t=1e-5){return Math.abs(i-e)<=t}function ch(i,e,t){if(i==null)return i;if(t<e)throw new Error(pS);return Math.min(Math.max(i,e),t)}function G0(i){if(!isFinite(i))return 0;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}const En="Blueprint6",hg=["active","alignText","asyncControl","containerRef","current","elementRef","ellipsizeText","endIcon","fill","icon","iconSize","inputClassName","inputRef","intent","inline","large","loading","leftElement","leftIcon","minimal","onRemove","outlined","panel","panelClassName","popoverProps","rightElement","rightIcon","round","selectedValue","size","small","tagName","text","textClassName","variant"];function vs(i,e=hg,t=!1){return t&&(e=e.concat(hg)),e.reduce((a,s)=>(s.indexOf("-")!==-1||a.hasOwnProperty(s)&&delete a[s],a),{...i})}function Rc(i,e=!1){return i==null||i===""||i===!1||!e&&Array.isArray(i)&&(i.length===0||i.every(t=>Rc(t,!0)))}function B0(i,e){return i!=null&&i.type!=null&&i.type.displayName!=null&&i.type.displayName===e.displayName}const ES=`${En}.Icon.`;function TS(i){if(!ze.isValidElement(i))return!1;const{type:e}=i;if(typeof e=="string")return!1;const{displayName:t}=e;return typeof t=="string"&&t.startsWith(ES)}function pg(i){return i.key==="Enter"||i.key===" "}const wS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];function AS(i){return wS.includes(i.key)}function CS(i,e,t){if(e.includes(i.key))return-1;if(t.includes(i.key))return 1}function RS(i){return i!=null&&typeof i!="function"}function bS(i){return typeof i=="function"}function PS(i,e){RS(i)?i.current=e:bS(i)&&i(e)}function uh(...i){return e=>{i.forEach(t=>{PS(t,e)})}}class dh extends ze.PureComponent{constructor(t){super(t);_t(this,"componentWillUpdate");_t(this,"componentWillReceiveProps");_t(this,"componentWillMount");_t(this,"getDerivedStateFromProps");_t(this,"displayName");_t(this,"timeoutIds",[]);_t(this,"requestIds",[]);_t(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});_t(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});ff("production")||this.validateProps(this.props)}componentDidUpdate(t,a,s){ff("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const a=window.requestAnimationFrame(t);return this.requestIds.push(a),()=>window.cancelAnimationFrame(a)}setTimeout(t,a){const s=window.setTimeout(t,a);return this.timeoutIds.push(s),()=>window.clearTimeout(s)}validateProps(t){}}var Rd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var mg;function LS(){return mg||(mg=1,(function(i){(function(){var e={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=s(l,a(d)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)e.call(l,d)&&l[d]&&(u=s(u,d));return u}function s(l,u){return u?l?l+" "+u:l+u:l}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(Rd)),Rd.exports}var DS=LS();const Rn=Rx(DS);function NS(i,e=[]){ze.useEffect(()=>{ff("production")||i()},e)}const US={defaultTabIndex:void 0,disabledTabIndex:-1};function W0(i,e,t,a=US){const{defaultTabIndex:s,disabledTabIndex:l}=a,{active:u,onClick:d,onFocus:m,onKeyDown:p,onKeyUp:v,onBlur:x,tabIndex:_=s}=e,[M,w]=ze.useState(),[b,y]=ze.useState(!1),S=ze.useRef(null),N=ze.useCallback(P=>{b&&y(!1),x==null||x(P)},[b,x]),z=ze.useCallback(P=>{pg(P)&&(P.preventDefault(),P.key!==M&&y(!0)),w(P.key),p==null||p(P)},[M,p]),R=ze.useCallback(P=>{var I;pg(P)&&(y(!1),(I=S.current)==null||I.click()),w(void 0),v==null||v(P)},[v,S]);return[i&&(u||b),{onBlur:N,onClick:i?d:void 0,onFocus:i?m:void 0,onKeyDown:z,onKeyUp:R,ref:uh(S,t),tabIndex:i?_:l}]}var Ro=function(){return Ro=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},Ro.apply(this,arguments)};function FS(i){return i.toLowerCase()}var OS=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],IS=/[^A-Z0-9]+/gi;function X0(i,e){e===void 0&&(e={});for(var t=e.splitRegexp,a=t===void 0?OS:t,s=e.stripRegexp,l=s===void 0?IS:s,u=e.transform,d=u===void 0?FS:u,m=e.delimiter,p=m===void 0?" ":m,v=gg(gg(i,a,"$1\0$2"),l,"\0"),x=0,_=v.length;v.charAt(x)==="\0";)x++;for(;v.charAt(_-1)==="\0";)_--;return v.slice(x,_).split("\0").map(d).join(p)}function gg(i,e,t){return e instanceof RegExp?i.replace(e,t):e.reduce(function(a,s){return a.replace(s,t)},i)}function kS(i,e){var t=i.charAt(0),a=i.substr(1).toLowerCase();return e>0&&t>="0"&&t<="9"?"_"+t+a:""+t.toUpperCase()+a}function zS(i,e){return e===void 0&&(e={}),X0(i,Ro({delimiter:"",transform:kS},e))}function HS(i,e){return e===void 0&&(e={}),X0(i,Ro({delimiter:"."},e))}function VS(i,e){return e===void 0&&(e={}),HS(i,Ro({delimiter:"_"},e))}var Jt;(function(i){i[i.STANDARD=16]="STANDARD",i[i.LARGE=20]="LARGE"})(Jt||(Jt={}));const GS="modulepreload",BS=function(i,e){return new URL(i,e).href},vg={},_g=function(e,t,a){let s=Promise.resolve();if(t&&t.length>0){let u=function(v){return Promise.all(v.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));s=u(t.map(v=>{if(v=BS(v,a),v in vg)return;vg[v]=!0;const x=v.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!a)for(let b=d.length-1;b>=0;b--){const y=d[b];if(y.href===v&&(!x||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${_}`))return;const w=document.createElement("link");if(w.rel=x?"stylesheet":GS,x||(w.as="script"),w.crossOrigin="",w.href=v,p&&w.setAttribute("nonce",p),document.head.appendChild(w),x)return new Promise((b,y)=>{w.addEventListener("load",b),w.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var h;(function(i){i.AddApplication="add-application",i.AddChild="add-child",i.AddClip="add-clip",i.AddColumnLeft="add-column-left",i.AddColumnRight="add-column-right",i.AddDerivedColumn="add-derived-column",i.AddLocation="add-location",i.AddParent="add-parent",i.AddRowBottom="add-row-bottom",i.AddRowTop="add-row-top",i.AddTile="add-tile",i.AddToArtifact="add-to-artifact",i.AddToFolder="add-to-folder",i.Add="add",i.AimpointsTarget="aimpoints-target",i.Airplane="airplane",i.AlignCenter="align-center",i.AlignJustify="align-justify",i.AlignLeft="align-left",i.AlignRight="align-right",i.AlignmentBottom="alignment-bottom",i.AlignmentHorizontalCenter="alignment-horizontal-center",i.AlignmentLeft="alignment-left",i.AlignmentRight="alignment-right",i.AlignmentTop="alignment-top",i.AlignmentVerticalCenter="alignment-vertical-center",i.Ammunition="ammunition",i.Anchor="anchor",i.Annotation="annotation",i.Announcement="announcement",i.Antenna="antenna",i.AppHeader="app-header",i.Application="application",i.Applications="applications",i.Archive="archive",i.AreaOfInterest="area-of-interest",i.ArrayBoolean="array-boolean",i.ArrayDate="array-date",i.ArrayFloatingPoint="array-floating-point",i.ArrayNumeric="array-numeric",i.ArrayObject="array-object",i.ArrayString="array-string",i.ArrayTimestamp="array-timestamp",i.Array="array",i.ArrowBottomLeft="arrow-bottom-left",i.ArrowBottomRight="arrow-bottom-right",i.ArrowDown="arrow-down",i.ArrowLeft="arrow-left",i.ArrowRight="arrow-right",i.ArrowTopLeft="arrow-top-left",i.ArrowTopRight="arrow-top-right",i.ArrowUp="arrow-up",i.ArrowsArc="arrows-arc",i.ArrowsHorizontal="arrows-horizontal",i.ArrowsVertical="arrows-vertical",i.Asterisk="asterisk",i.At="at",i.AutomaticUpdates="automatic-updates",i.Axle="axle",i.Backlink="backlink",i.BackwardTen="backward-ten",i.Badge="badge",i.BanCircle="ban-circle",i.BankAccount="bank-account",i.Barcode="barcode",i.BinaryNumber="binary-number",i.Blank="blank",i.BlockPromote="block-promote",i.BlockedPerson="blocked-person",i.Bold="bold",i.Book="book",i.Bookmark="bookmark",i.Box="box",i.BranchLocked="branch-locked",i.BranchUnlocked="branch-unlocked",i.Briefcase="briefcase",i.BringData="bring-data",i.BringForward="bring-forward",i.BritishPound="british-pound",i.Bug="bug",i.Buggy="buggy",i.Build="build",i.Bullseye="bullseye",i.Calculator="calculator",i.Calendar="calendar",i.Camera="camera",i.CaretDown="caret-down",i.CaretLeft="caret-left",i.CaretRight="caret-right",i.CaretUp="caret-up",i.CargoShip="cargo-ship",i.CellTower="cell-tower",i.Changes="changes",i.Chart="chart",i.Chat="chat",i.ChevronBackward="chevron-backward",i.ChevronDown="chevron-down",i.ChevronForward="chevron-forward",i.ChevronLeft="chevron-left",i.ChevronRight="chevron-right",i.ChevronUp="chevron-up",i.CircleArrowDown="circle-arrow-down",i.CircleArrowLeft="circle-arrow-left",i.CircleArrowRight="circle-arrow-right",i.CircleArrowUp="circle-arrow-up",i.CircleDashed="circle-dashed",i.Circle="circle",i.Citation="citation",i.Clean="clean",i.Clip="clip",i.ClipboardFile="clipboard-file",i.Clipboard="clipboard",i.CloudDownload="cloud-download",i.CloudServer="cloud-server",i.CloudTick="cloud-tick",i.CloudUpload="cloud-upload",i.Cloud="cloud",i.CodeBlock="code-block",i.Code="code",i.Cog="cog",i.CollapseAll="collapse-all",i.ColorFill="color-fill",i.ColumnLayout="column-layout",i.Comment="comment",i.Comparison="comparison",i.Compass="compass",i.Compressed="compressed",i.Confirm="confirm",i.ConsoleAlert="console-alert",i.Console="console",i.Construction="construction",i.Contrast="contrast",i.Control="control",i.CreditCard="credit-card",i.Crop="crop",i.CrossCircle="cross-circle",i.Cross="cross",i.Crown="crown",i.CrystalBall="crystal-ball",i.CssStyle="css-style",i.CubeAdd="cube-add",i.CubeCutout="cube-cutout",i.CubeCutouts="cube-cutouts",i.CubeEdit="cube-edit",i.CubeRemove="cube-remove",i.Cube="cube",i.Cubes="cubes",i.CurlyBraces="curly-braces",i.CurvedRangeChart="curved-range-chart",i.Cut="cut",i.Cycle="cycle",i.Dashboard="dashboard",i.DataCloud="data-cloud",i.DataConnection="data-connection",i.DataLineage="data-lineage",i.DataSearch="data-search",i.DataSync="data-sync",i.Database="database",i.DeleteClip="delete-clip",i.Delete="delete",i.Delta="delta",i.DeriveColumn="derive-column",i.Descendant="descendant",i.Desktop="desktop",i.Detection="detection",i.Diagnosis="diagnosis",i.DiagramTree="diagram-tree",i.DirectionLeft="direction-left",i.DirectionRight="direction-right",i.Disable="disable",i.Divide="divide",i.DocumentCode="document-code",i.DocumentLocked="document-locked",i.DocumentOpen="document-open",i.DocumentShare="document-share",i.Document="document",i.Dollar="dollar",i.Dot="dot",i.DoubleCaretHorizontal="double-caret-horizontal",i.DoubleCaretVertical="double-caret-vertical",i.DoubleChevronDown="double-chevron-down",i.DoubleChevronLeft="double-chevron-left",i.DoubleChevronRight="double-chevron-right",i.DoubleChevronUp="double-chevron-up",i.DoughnutChart="doughnut-chart",i.Download="download",i.DragHandleHorizontal="drag-handle-horizontal",i.DragHandleVertical="drag-handle-vertical",i.Draw="draw",i.DrawerLeftFilled="drawer-left-filled",i.DrawerLeft="drawer-left",i.DrawerRightFilled="drawer-right-filled",i.DrawerRight="drawer-right",i.DriveTime="drive-time",i.DroneUav="drone-uav",i.Drone="drone",i.Duplicate="duplicate",i.Edit="edit",i.Eject="eject",i.Emoji="emoji",i.Endnote="endnote",i.Endorsed="endorsed",i.Engagement="engagement",i.Envelope="envelope",i.Equals="equals",i.Eraser="eraser",i.Error="error",i.Euro="euro",i.Excavator="excavator",i.Exchange="exchange",i.ExcludeRow="exclude-row",i.ExpandAll="expand-all",i.Explain="explain",i.Export="export",i.EyeOff="eye-off",i.EyeOn="eye-on",i.EyeOpen="eye-open",i.FastBackward="fast-backward",i.FastForward="fast-forward",i.FeedSubscribed="feed-subscribed",i.Feed="feed",i.FighterJet="fighter-jet",i.Film="film",i.FilterKeep="filter-keep",i.FilterList="filter-list",i.FilterOpen="filter-open",i.FilterRemove="filter-remove",i.FilterSortAsc="filter-sort-asc",i.FilterSortDesc="filter-sort-desc",i.Filter="filter",i.Flag="flag",i.Flame="flame",i.Flash="flash",i.FloatingPoint="floating-point",i.FloppyDisk="floppy-disk",i.FlowBranch="flow-branch",i.FlowEnd="flow-end",i.FlowLinear="flow-linear",i.FlowReviewBranch="flow-review-branch",i.FlowReview="flow-review",i.Flows="flows",i.FolderClose="folder-close",i.FolderNew="folder-new",i.FolderOpen="folder-open",i.FolderSharedOpen="folder-shared-open",i.FolderShared="folder-shared",i.Follower="follower",i.Following="following",i.Font="font",i.ForkEnd="fork-end",i.Fork="fork",i.Form="form",i.ForwardTen="forward-ten",i.FrameToFrame="frame-to-frame",i.Fuel="fuel",i.FullCircle="full-circle",i.FullStackedChart="full-stacked-chart",i.Fullscreen="fullscreen",i.FunctionMinimal="function-minimal",i.Function="function",i.GanttChart="gantt-chart",i.Generate="generate",i.Geofence="geofence",i.Geolocation="geolocation",i.Geosearch="geosearch",i.Geotime="geotime",i.GiftBox="gift-box",i.GitBranch="git-branch",i.GitCommit="git-commit",i.GitMerge="git-merge",i.GitNewBranch="git-new-branch",i.GitPull="git-pull",i.GitPush="git-push",i.GitRebase="git-rebase",i.GitRepo="git-repo",i.Glass="glass",i.GlobeNetworkAdd="globe-network-add",i.GlobeNetwork="globe-network",i.Globe="globe",i.GraphRemove="graph-remove",i.Graph="graph",i.GreaterThanOrEqualTo="greater-than-or-equal-to",i.GreaterThan="greater-than",i.GridView="grid-view",i.Grid="grid",i.GroupItem="group-item",i.GroupObjects="group-objects",i.GroupedBarChart="grouped-bar-chart",i.HandDown="hand-down",i.HandLeft="hand-left",i.HandRight="hand-right",i.HandUp="hand-up",i.Hand="hand",i.Hat="hat",i.HeaderOne="header-one",i.HeaderThree="header-three",i.HeaderTwo="header-two",i.Header="header",i.Headset="headset",i.HeartBroken="heart-broken",i.Heart="heart",i.HeatGrid="heat-grid",i.Heatmap="heatmap",i.Helicopter="helicopter",i.Help="help",i.HelperManagement="helper-management",i.Hexagon="hexagon",i.HighPriority="high-priority",i.HighVoltagePole="high-voltage-pole",i.Highlight="highlight",i.History="history",i.Home="home",i.HorizontalBarChartAsc="horizontal-bar-chart-asc",i.HorizontalBarChartDesc="horizontal-bar-chart-desc",i.HorizontalBarChart="horizontal-bar-chart",i.HorizontalDistribution="horizontal-distribution",i.HorizontalInbetween="horizontal-inbetween",i.Hurricane="hurricane",i.IdNumber="id-number",i.ImageRotateLeft="image-rotate-left",i.ImageRotateRight="image-rotate-right",i.Import="import",i.InboxFiltered="inbox-filtered",i.InboxGeo="inbox-geo",i.InboxSearch="inbox-search",i.InboxUpdate="inbox-update",i.Inbox="inbox",i.InfoSign="info-sign",i.Inheritance="inheritance",i.InheritedGroup="inherited-group",i.InnerJoin="inner-join",i.Input="input",i.Insert="insert",i.Intelligence="intelligence",i.Intersection="intersection",i.IpAddress="ip-address",i.IssueClosed="issue-closed",i.IssueNew="issue-new",i.Issue="issue",i.Italic="italic",i.JoinTable="join-table",i.KeyBackspace="key-backspace",i.KeyCommand="key-command",i.KeyControl="key-control",i.KeyDelete="key-delete",i.KeyEnter="key-enter",i.KeyEscape="key-escape",i.KeyOption="key-option",i.KeyShift="key-shift",i.KeyTab="key-tab",i.Key="key",i.KnownVehicle="known-vehicle",i.LabTest="lab-test",i.Label="label",i.LayerOutline="layer-outline",i.Layer="layer",i.Layers="layers",i.LayoutAuto="layout-auto",i.LayoutBalloon="layout-balloon",i.LayoutBottomRowThreeTiles="layout-bottom-row-three-tiles",i.LayoutBottomRowTwoTiles="layout-bottom-row-two-tiles",i.LayoutCircle="layout-circle",i.LayoutGrid="layout-grid",i.LayoutGroupBy="layout-group-by",i.LayoutHierarchy="layout-hierarchy",i.LayoutLeftColumnThreeTiles="layout-left-column-three-tiles",i.LayoutLeftColumnTwoTiles="layout-left-column-two-tiles",i.LayoutLinear="layout-linear",i.LayoutRightColumnThreeTiles="layout-right-column-three-tiles",i.LayoutRightColumnTwoTiles="layout-right-column-two-tiles",i.LayoutSkewGrid="layout-skew-grid",i.LayoutSortedClusters="layout-sorted-clusters",i.LayoutThreeColumns="layout-three-columns",i.LayoutThreeRows="layout-three-rows",i.LayoutTopRowThreeTiles="layout-top-row-three-tiles",i.LayoutTopRowTwoTiles="layout-top-row-two-tiles",i.LayoutTwoColumns="layout-two-columns",i.LayoutTwoRows="layout-two-rows",i.Layout="layout",i.Learning="learning",i.LeftJoin="left-join",i.LengthenText="lengthen-text",i.LessThanOrEqualTo="less-than-or-equal-to",i.LessThan="less-than",i.Lifesaver="lifesaver",i.Lightbulb="lightbulb",i.Lightning="lightning",i.Link="link",i.LinkedSquares="linked-squares",i.ListColumns="list-columns",i.ListDetailView="list-detail-view",i.List="list",i.Locate="locate",i.Lock="lock",i.Locomotive="locomotive",i.LogIn="log-in",i.LogOut="log-out",i.LowVoltagePole="low-voltage-pole",i.Manual="manual",i.ManuallyEnteredData="manually-entered-data",i.ManyToMany="many-to-many",i.ManyToOne="many-to-one",i.MapCreate="map-create",i.MapMarker="map-marker",i.Map="map",i.Markdown="markdown",i.Maximize="maximize",i.Media="media",i.MenuClosed="menu-closed",i.MenuOpen="menu-open",i.Menu="menu",i.MergeColumns="merge-columns",i.MergeLinks="merge-links",i.Microphone="microphone",i.Minimize="minimize",i.Minus="minus",i.MobilePhone="mobile-phone",i.MobileVideo="mobile-video",i.ModalFilled="modal-filled",i.Modal="modal",i.Model="model",i.Moon="moon",i.More="more",i.Mountain="mountain",i.Move="move",i.Mugshot="mugshot",i.MultiSelect="multi-select",i.Music="music",i.Nest="nest",i.NewComment="new-comment",i.NewDrawing="new-drawing",i.NewGridItem="new-grid-item",i.NewLayer="new-layer",i.NewLayers="new-layers",i.NewLink="new-link",i.NewObject="new-object",i.NewPerson="new-person",i.NewPrescription="new-prescription",i.NewShield="new-shield",i.NewTextBox="new-text-box",i.Ninja="ninja",i.NotEqualTo="not-equal-to",i.NotificationsAdd="notifications-add",i.NotificationsSnooze="notifications-snooze",i.NotificationsUpdated="notifications-updated",i.Notifications="notifications",i.NumberedList="numbered-list",i.Numerical="numerical",i.ObjectView="object-view",i.Office="office",i.Offline="offline",i.OilField="oil-field",i.OneColumn="one-column",i.OneToMany="one-to-many",i.OneToOne="one-to-one",i.OpenApplication="open-application",i.Outdated="outdated",i.OuterJoin="outer-join",i.Output="output",i.Package="package",i.PageBreak="page-break",i.PageLayout="page-layout",i.PanelStats="panel-stats",i.PanelTable="panel-table",i.Panel="panel",i.Paperclip="paperclip",i.Paragraph="paragraph",i.PasteVariable="paste-variable",i.PathSearch="path-search",i.Path="path",i.Pause="pause",i.People="people",i.Percentage="percentage",i.Person="person",i.PhoneCall="phone-call",i.PhoneForward="phone-forward",i.PhoneSearch="phone-search",i.Phone="phone",i.PieChart="pie-chart",i.Pill="pill",i.Pin="pin",i.Pistol="pistol",i.PivotTable="pivot-table",i.Pivot="pivot",i.Play="play",i.Playbook="playbook",i.Plus="plus",i.PolygonFilter="polygon-filter",i.Popout="popout",i.Power="power",i.PredictiveAnalysis="predictive-analysis",i.Prescription="prescription",i.Presentation="presentation",i.Print="print",i.Projects="projects",i.Properties="properties",i.Property="property",i.PublishFunction="publish-function",i.Pulse="pulse",i.Rain="rain",i.Random="random",i.RangeRing="range-ring",i.Record="record",i.RectHeight="rect-height",i.RectWidth="rect-width",i.Rectangle="rectangle",i.Redo="redo",i.RefreshOff="refresh-off",i.Refresh="refresh",i.Regex="regex",i.RegressionChart="regression-chart",i.RemoveColumnLeft="remove-column-left",i.RemoveColumnRight="remove-column-right",i.RemoveColumn="remove-column",i.RemoveRowBottom="remove-row-bottom",i.RemoveRowTop="remove-row-top",i.Remove="remove",i.Repeat="repeat",i.Reset="reset",i.Resolve="resolve",i.Rig="rig",i.RightJoin="right-join",i.Ring="ring",i.RocketSlant="rocket-slant",i.Rocket="rocket",i.RootFolder="root-folder",i.RotateCcw="rotate-ccw",i.RotateCw="rotate-cw",i.RotateDocument="rotate-document",i.RotatePage="rotate-page",i.Route="route",i.RunHistory="run-history",i.Satellite="satellite",i.Saved="saved",i.ScatterPlot="scatter-plot",i.SearchAround="search-around",i.SearchTemplate="search-template",i.SearchText="search-text",i.Search="search",i.SegmentedControl="segmented-control",i.Select="select",i.SelectionBoxAdd="selection-box-add",i.SelectionBoxEdit="selection-box-edit",i.SelectionBoxRemove="selection-box-remove",i.SelectionBox="selection-box",i.Selection="selection",i.SendBackward="send-backward",i.SendMessage="send-message",i.SendToGraph="send-to-graph",i.SendToMap="send-to-map",i.SendTo="send-to",i.Sensor="sensor",i.SeriesAdd="series-add",i.SeriesConfiguration="series-configuration",i.SeriesDerived="series-derived",i.SeriesFiltered="series-filtered",i.SeriesSearch="series-search",i.ServerInstall="server-install",i.Server="server",i.Settings="settings",i.Shapes="shapes",i.Share="share",i.SharedFilter="shared-filter",i.Shield="shield",i.Ship="ship",i.Shop="shop",i.ShoppingCart="shopping-cart",i.ShortenText="shorten-text",i.SignalSearch="signal-search",i.SimCard="sim-card",i.Slash="slash",i.SmallCross="small-cross",i.SmallInfoSign="small-info-sign",i.SmallMinus="small-minus",i.SmallPlus="small-plus",i.SmallSquare="small-square",i.SmallTick="small-tick",i.Snowflake="snowflake",i.SoccerBall="soccer-ball",i.SocialMedia="social-media",i.SortAlphabeticalDesc="sort-alphabetical-desc",i.SortAlphabetical="sort-alphabetical",i.SortAsc="sort-asc",i.SortDesc="sort-desc",i.SortNumericalDesc="sort-numerical-desc",i.SortNumerical="sort-numerical",i.Sort="sort",i.SpellCheck="spell-check",i.Spin="spin",i.SplitColumns="split-columns",i.SportsStadium="sports-stadium",i.Square="square",i.StackedChart="stacked-chart",i.StadiumGeometry="stadium-geometry",i.StarEmpty="star-empty",i.Star="star",i.StepBackward="step-backward",i.StepChart="step-chart",i.StepForward="step-forward",i.Stop="stop",i.Stopwatch="stopwatch",i.Strikethrough="strikethrough",i.Style="style",i.Subscript="subscript",i.SubtractRightJoin="subtract-right-join",i.Superscript="superscript",i.SwapHorizontal="swap-horizontal",i.SwapVertical="swap-vertical",i.Sweep="sweep",i.Switch="switch",i.SymbolCircle="symbol-circle",i.SymbolCross="symbol-cross",i.SymbolDiamond="symbol-diamond",i.SymbolRectangle="symbol-rectangle",i.SymbolSquare="symbol-square",i.SymbolTriangleDown="symbol-triangle-down",i.SymbolTriangleUp="symbol-triangle-up",i.Syringe="syringe",i.TableSync="table-sync",i.TagAdd="tag-add",i.TagPromote="tag-promote",i.TagRefresh="tag-refresh",i.TagUndo="tag-undo",i.Tag="tag",i.Tags="tags",i.TakeAction="take-action",i.Tank="tank",i.Target="target",i.Taxi="taxi",i.Team="team",i.Temperature="temperature",i.TextHighlight="text-highlight",i.ThAdd="th-add",i.ThDerived="th-derived",i.ThDisconnect="th-disconnect",i.ThFiltered="th-filtered",i.ThListAdd="th-list-add",i.ThList="th-list",i.ThVirtualAdd="th-virtual-add",i.ThVirtual="th-virtual",i.Th="th",i.ThirdParty="third-party",i.ThumbsDown="thumbs-down",i.ThumbsUp="thumbs-up",i.TickCircle="tick-circle",i.Tick="tick",i.Time="time",i.TimelineAreaChart="timeline-area-chart",i.TimelineBarChart="timeline-bar-chart",i.TimelineEvents="timeline-events",i.TimelineLineChart="timeline-line-chart",i.Tint="tint",i.Torch="torch",i.Tractor="tractor",i.Train="train",i.Translate="translate",i.Trash="trash",i.Tree="tree",i.TrendingDown="trending-down",i.TrendingUp="trending-up",i.Trophy="trophy",i.Truck="truck",i.TwoColumns="two-columns",i.Unarchive="unarchive",i.Underline="underline",i.Undo="undo",i.UngroupObjects="ungroup-objects",i.UnknownVehicle="unknown-vehicle",i.Unlink="unlink",i.Unlock="unlock",i.Unpin="unpin",i.Unresolve="unresolve",i.Updated="updated",i.Upload="upload",i.User="user",i.VariableLayer="variable-layer",i.Variable="variable",i.Vector="vector",i.VerticalBarChartAsc="vertical-bar-chart-asc",i.VerticalBarChartDesc="vertical-bar-chart-desc",i.VerticalDistribution="vertical-distribution",i.VerticalInbetween="vertical-inbetween",i.Video="video",i.Virus="virus",i.VolumeDown="volume-down",i.VolumeOff="volume-off",i.VolumeUp="volume-up",i.Walk="walk",i.WarningSign="warning-sign",i.WaterfallChart="waterfall-chart",i.Waves="waves",i.WidgetButton="widget-button",i.WidgetFooter="widget-footer",i.WidgetHeader="widget-header",i.Widget="widget",i.Wind="wind",i.Won="won",i.WrapLines="wrap-lines",i.WrenchRedo="wrench-redo",i.WrenchSnooze="wrench-snooze",i.WrenchTime="wrench-time",i.Wrench="wrench",i.Yen="yen",i.ZoomIn="zoom-in",i.ZoomOut="zoom-out",i.ZoomToFit="zoom-to-fit"})(h||(h={}));h.AddApplication+"",h.AddChild+"",h.AddClip+"",h.AddColumnLeft+"",h.AddColumnRight+"",h.AddDerivedColumn+"",h.AddLocation+"",h.AddParent+"",h.AddRowBottom+"",h.AddRowTop+"",h.AddTile+"",h.AddToArtifact+"",h.AddToFolder+"",h.Add+"",h.AimpointsTarget+"",h.Airplane+"",h.AlignCenter+"",h.AlignJustify+"",h.AlignLeft+"",h.AlignRight+"",h.AlignmentBottom+"",h.AlignmentHorizontalCenter+"",h.AlignmentLeft+"",h.AlignmentRight+"",h.AlignmentTop+"",h.AlignmentVerticalCenter+"",h.Ammunition+"",h.Anchor+"",h.Annotation+"",h.Announcement+"",h.Antenna+"",h.AppHeader+"",h.Application+"",h.Applications+"",h.Archive+"",h.AreaOfInterest+"",h.ArrayBoolean+"",h.ArrayDate+"",h.ArrayFloatingPoint+"",h.ArrayNumeric+"",h.ArrayObject+"",h.ArrayString+"",h.ArrayTimestamp+"",h.Array+"",h.ArrowBottomLeft+"",h.ArrowBottomRight+"",h.ArrowDown+"",h.ArrowLeft+"",h.ArrowRight+"",h.ArrowTopLeft+"",h.ArrowTopRight+"",h.ArrowUp+"",h.ArrowsArc+"",h.ArrowsHorizontal+"",h.ArrowsVertical+"",h.Asterisk+"",h.At+"",h.AutomaticUpdates+"",h.Axle+"",h.Backlink+"",h.BackwardTen+"",h.Badge+"",h.BanCircle+"",h.BankAccount+"",h.Barcode+"",h.BinaryNumber+"",h.Blank+"",h.BlockPromote+"",h.BlockedPerson+"",h.Bold+"",h.Book+"",h.Bookmark+"",h.Box+"",h.BranchLocked+"",h.BranchUnlocked+"",h.Briefcase+"",h.BringData+"",h.BringForward+"",h.BritishPound+"",h.Bug+"",h.Buggy+"",h.Build+"",h.Bullseye+"",h.Calculator+"",h.Calendar+"",h.Camera+"",h.CaretDown+"",h.CaretLeft+"",h.CaretRight+"",h.CaretUp+"",h.CargoShip+"",h.CellTower+"",h.Changes+"",h.Chart+"",h.Chat+"",h.ChevronBackward+"",h.ChevronDown+"",h.ChevronForward+"",h.ChevronLeft+"",h.ChevronRight+"",h.ChevronUp+"",h.CircleArrowDown+"",h.CircleArrowLeft+"",h.CircleArrowRight+"",h.CircleArrowUp+"",h.CircleDashed+"",h.Circle+"",h.Citation+"",h.Clean+"",h.Clip+"",h.ClipboardFile+"",h.Clipboard+"",h.CloudDownload+"",h.CloudServer+"",h.CloudTick+"",h.CloudUpload+"",h.Cloud+"",h.CodeBlock+"",h.Code+"",h.Cog+"",h.CollapseAll+"",h.ColorFill+"",h.ColumnLayout+"",h.Comment+"",h.Comparison+"",h.Compass+"",h.Compressed+"",h.Confirm+"",h.ConsoleAlert+"",h.Console+"",h.Construction+"",h.Contrast+"",h.Control+"",h.CreditCard+"",h.Crop+"",h.CrossCircle+"",h.Cross+"",h.Crown+"",h.CrystalBall+"",h.CssStyle+"",h.CubeAdd+"",h.CubeCutout+"",h.CubeCutouts+"",h.CubeEdit+"",h.CubeRemove+"",h.Cube+"",h.Cubes+"",h.CurlyBraces+"",h.CurvedRangeChart+"",h.Cut+"",h.Cycle+"",h.Dashboard+"",h.DataCloud+"",h.DataConnection+"",h.DataLineage+"",h.DataSearch+"",h.DataSync+"",h.Database+"",h.DeleteClip+"",h.Delete+"",h.Delta+"",h.DeriveColumn+"",h.Descendant+"",h.Desktop+"",h.Detection+"",h.Diagnosis+"",h.DiagramTree+"",h.DirectionLeft+"",h.DirectionRight+"",h.Disable+"",h.Divide+"",h.DocumentCode+"",h.DocumentLocked+"",h.DocumentOpen+"",h.DocumentShare+"",h.Document+"",h.Dollar+"",h.Dot+"",h.DoubleCaretHorizontal+"",h.DoubleCaretVertical+"",h.DoubleChevronDown+"",h.DoubleChevronLeft+"",h.DoubleChevronRight+"",h.DoubleChevronUp+"",h.DoughnutChart+"",h.Download+"",h.DragHandleHorizontal+"",h.DragHandleVertical+"",h.Draw+"",h.DrawerLeftFilled+"",h.DrawerLeft+"",h.DrawerRightFilled+"",h.DrawerRight+"",h.DriveTime+"",h.DroneUav+"",h.Drone+"",h.Duplicate+"",h.Edit+"",h.Eject+"",h.Emoji+"",h.Endnote+"",h.Endorsed+"",h.Engagement+"",h.Envelope+"",h.Equals+"",h.Eraser+"",h.Error+"",h.Euro+"",h.Excavator+"",h.Exchange+"",h.ExcludeRow+"",h.ExpandAll+"",h.Explain+"",h.Export+"",h.EyeOff+"",h.EyeOn+"",h.EyeOpen+"",h.FastBackward+"",h.FastForward+"",h.FeedSubscribed+"",h.Feed+"",h.FighterJet+"",h.Film+"",h.FilterKeep+"",h.FilterList+"",h.FilterOpen+"",h.FilterRemove+"",h.FilterSortAsc+"",h.FilterSortDesc+"",h.Filter+"",h.Flag+"",h.Flame+"",h.Flash+"",h.FloatingPoint+"",h.FloppyDisk+"",h.FlowBranch+"",h.FlowEnd+"",h.FlowLinear+"",h.FlowReviewBranch+"",h.FlowReview+"",h.Flows+"",h.FolderClose+"",h.FolderNew+"",h.FolderOpen+"",h.FolderSharedOpen+"",h.FolderShared+"",h.Follower+"",h.Following+"",h.Font+"",h.ForkEnd+"",h.Fork+"",h.Form+"",h.ForwardTen+"",h.FrameToFrame+"",h.Fuel+"",h.FullCircle+"",h.FullStackedChart+"",h.Fullscreen+"",h.FunctionMinimal+"",h.Function+"",h.GanttChart+"",h.Generate+"",h.Geofence+"",h.Geolocation+"",h.Geosearch+"",h.Geotime+"",h.GiftBox+"",h.GitBranch+"",h.GitCommit+"",h.GitMerge+"",h.GitNewBranch+"",h.GitPull+"",h.GitPush+"",h.GitRebase+"",h.GitRepo+"",h.Glass+"",h.GlobeNetworkAdd+"",h.GlobeNetwork+"",h.Globe+"",h.GraphRemove+"",h.Graph+"",h.GreaterThanOrEqualTo+"",h.GreaterThan+"",h.GridView+"",h.Grid+"",h.GroupItem+"",h.GroupObjects+"",h.GroupedBarChart+"",h.HandDown+"",h.HandLeft+"",h.HandRight+"",h.HandUp+"",h.Hand+"",h.Hat+"",h.HeaderOne+"",h.HeaderThree+"",h.HeaderTwo+"",h.Header+"",h.Headset+"",h.HeartBroken+"",h.Heart+"",h.HeatGrid+"",h.Heatmap+"",h.Helicopter+"",h.Help+"",h.HelperManagement+"",h.Hexagon+"",h.HighPriority+"",h.HighVoltagePole+"",h.Highlight+"",h.History+"",h.Home+"",h.HorizontalBarChartAsc+"",h.HorizontalBarChartDesc+"",h.HorizontalBarChart+"",h.HorizontalDistribution+"",h.HorizontalInbetween+"",h.Hurricane+"",h.IdNumber+"",h.ImageRotateLeft+"",h.ImageRotateRight+"",h.Import+"",h.InboxFiltered+"",h.InboxGeo+"",h.InboxSearch+"",h.InboxUpdate+"",h.Inbox+"",h.InfoSign+"",h.Inheritance+"",h.InheritedGroup+"",h.InnerJoin+"",h.Input+"",h.Insert+"",h.Intelligence+"",h.Intersection+"",h.IpAddress+"",h.IssueClosed+"",h.IssueNew+"",h.Issue+"",h.Italic+"",h.JoinTable+"",h.KeyBackspace+"",h.KeyCommand+"",h.KeyControl+"",h.KeyDelete+"",h.KeyEnter+"",h.KeyEscape+"",h.KeyOption+"",h.KeyShift+"",h.KeyTab+"",h.Key+"",h.KnownVehicle+"",h.LabTest+"",h.Label+"",h.LayerOutline+"",h.Layer+"",h.Layers+"",h.LayoutAuto+"",h.LayoutBalloon+"",h.LayoutBottomRowThreeTiles+"",h.LayoutBottomRowTwoTiles+"",h.LayoutCircle+"",h.LayoutGrid+"",h.LayoutGroupBy+"",h.LayoutHierarchy+"",h.LayoutLeftColumnThreeTiles+"",h.LayoutLeftColumnTwoTiles+"",h.LayoutLinear+"",h.LayoutRightColumnThreeTiles+"",h.LayoutRightColumnTwoTiles+"",h.LayoutSkewGrid+"",h.LayoutSortedClusters+"",h.LayoutThreeColumns+"",h.LayoutThreeRows+"",h.LayoutTopRowThreeTiles+"",h.LayoutTopRowTwoTiles+"",h.LayoutTwoColumns+"",h.LayoutTwoRows+"",h.Layout+"",h.Learning+"",h.LeftJoin+"",h.LengthenText+"",h.LessThanOrEqualTo+"",h.LessThan+"",h.Lifesaver+"",h.Lightbulb+"",h.Lightning+"",h.Link+"",h.LinkedSquares+"",h.ListColumns+"",h.ListDetailView+"",h.List+"",h.Locate+"",h.Lock+"",h.Locomotive+"",h.LogIn+"",h.LogOut+"",h.LowVoltagePole+"",h.Manual+"",h.ManuallyEnteredData+"",h.ManyToMany+"",h.ManyToOne+"",h.MapCreate+"",h.MapMarker+"",h.Map+"",h.Markdown+"",h.Maximize+"",h.Media+"",h.MenuClosed+"",h.MenuOpen+"",h.Menu+"",h.MergeColumns+"",h.MergeLinks+"",h.Microphone+"",h.Minimize+"",h.Minus+"",h.MobilePhone+"",h.MobileVideo+"",h.ModalFilled+"",h.Modal+"",h.Model+"",h.Moon+"",h.More+"",h.Mountain+"",h.Move+"",h.Mugshot+"",h.MultiSelect+"",h.Music+"",h.Nest+"",h.NewComment+"",h.NewDrawing+"",h.NewGridItem+"",h.NewLayer+"",h.NewLayers+"",h.NewLink+"",h.NewObject+"",h.NewPerson+"",h.NewPrescription+"",h.NewShield+"",h.NewTextBox+"",h.Ninja+"",h.NotEqualTo+"",h.NotificationsAdd+"",h.NotificationsSnooze+"",h.NotificationsUpdated+"",h.Notifications+"",h.NumberedList+"",h.Numerical+"",h.ObjectView+"",h.Office+"",h.Offline+"",h.OilField+"",h.OneColumn+"",h.OneToMany+"",h.OneToOne+"",h.OpenApplication+"",h.Outdated+"",h.OuterJoin+"",h.Output+"",h.Package+"",h.PageBreak+"",h.PageLayout+"",h.PanelStats+"",h.PanelTable+"",h.Panel+"",h.Paperclip+"",h.Paragraph+"",h.PasteVariable+"",h.PathSearch+"",h.Path+"",h.Pause+"",h.People+"",h.Percentage+"",h.Person+"",h.PhoneCall+"",h.PhoneForward+"",h.PhoneSearch+"",h.Phone+"",h.PieChart+"",h.Pill+"",h.Pin+"",h.Pistol+"",h.PivotTable+"",h.Pivot+"",h.Play+"",h.Playbook+"",h.Plus+"",h.PolygonFilter+"",h.Popout+"",h.Power+"",h.PredictiveAnalysis+"",h.Prescription+"",h.Presentation+"",h.Print+"",h.Projects+"",h.Properties+"",h.Property+"",h.PublishFunction+"",h.Pulse+"",h.Rain+"",h.Random+"",h.RangeRing+"",h.Record+"",h.RectHeight+"",h.RectWidth+"",h.Rectangle+"",h.Redo+"",h.RefreshOff+"",h.Refresh+"",h.Regex+"",h.RegressionChart+"",h.RemoveColumnLeft+"",h.RemoveColumnRight+"",h.RemoveColumn+"",h.RemoveRowBottom+"",h.RemoveRowTop+"",h.Remove+"",h.Repeat+"",h.Reset+"",h.Resolve+"",h.Rig+"",h.RightJoin+"",h.Ring+"",h.RocketSlant+"",h.Rocket+"",h.RootFolder+"",h.RotateCcw+"",h.RotateCw+"",h.RotateDocument+"",h.RotatePage+"",h.Route+"",h.RunHistory+"",h.Satellite+"",h.Saved+"",h.ScatterPlot+"",h.SearchAround+"",h.SearchTemplate+"",h.SearchText+"",h.Search+"",h.SegmentedControl+"",h.Select+"",h.SelectionBoxAdd+"",h.SelectionBoxEdit+"",h.SelectionBoxRemove+"",h.SelectionBox+"",h.Selection+"",h.SendBackward+"",h.SendMessage+"",h.SendToGraph+"",h.SendToMap+"",h.SendTo+"",h.Sensor+"",h.SeriesAdd+"",h.SeriesConfiguration+"",h.SeriesDerived+"",h.SeriesFiltered+"",h.SeriesSearch+"",h.ServerInstall+"",h.Server+"",h.Settings+"",h.Shapes+"",h.Share+"",h.SharedFilter+"",h.Shield+"",h.Ship+"",h.Shop+"",h.ShoppingCart+"",h.ShortenText+"",h.SignalSearch+"",h.SimCard+"",h.Slash+"",h.SmallCross+"",h.SmallInfoSign+"",h.SmallMinus+"",h.SmallPlus+"",h.SmallSquare+"",h.SmallTick+"",h.Snowflake+"",h.SoccerBall+"",h.SocialMedia+"",h.SortAlphabeticalDesc+"",h.SortAlphabetical+"",h.SortAsc+"",h.SortDesc+"",h.SortNumericalDesc+"",h.SortNumerical+"",h.Sort+"",h.SpellCheck+"",h.Spin+"",h.SplitColumns+"",h.SportsStadium+"",h.Square+"",h.StackedChart+"",h.StadiumGeometry+"",h.StarEmpty+"",h.Star+"",h.StepBackward+"",h.StepChart+"",h.StepForward+"",h.Stop+"",h.Stopwatch+"",h.Strikethrough+"",h.Style+"",h.Subscript+"",h.SubtractRightJoin+"",h.Superscript+"",h.SwapHorizontal+"",h.SwapVertical+"",h.Sweep+"",h.Switch+"",h.SymbolCircle+"",h.SymbolCross+"",h.SymbolDiamond+"",h.SymbolRectangle+"",h.SymbolSquare+"",h.SymbolTriangleDown+"",h.SymbolTriangleUp+"",h.Syringe+"",h.TableSync+"",h.TagAdd+"",h.TagPromote+"",h.TagRefresh+"",h.TagUndo+"",h.Tag+"",h.Tags+"",h.TakeAction+"",h.Tank+"",h.Target+"",h.Taxi+"",h.Team+"",h.Temperature+"",h.TextHighlight+"",h.ThAdd+"",h.ThDerived+"",h.ThDisconnect+"",h.ThFiltered+"",h.ThListAdd+"",h.ThList+"",h.ThVirtualAdd+"",h.ThVirtual+"",h.Th+"",h.ThirdParty+"",h.ThumbsDown+"",h.ThumbsUp+"",h.TickCircle+"",h.Tick+"",h.Time+"",h.TimelineAreaChart+"",h.TimelineBarChart+"",h.TimelineEvents+"",h.TimelineLineChart+"",h.Tint+"",h.Torch+"",h.Tractor+"",h.Train+"",h.Translate+"",h.Trash+"",h.Tree+"",h.TrendingDown+"",h.TrendingUp+"",h.Trophy+"",h.Truck+"",h.TwoColumns+"",h.Unarchive+"",h.Underline+"",h.Undo+"",h.UngroupObjects+"",h.UnknownVehicle+"",h.Unlink+"",h.Unlock+"",h.Unpin+"",h.Unresolve+"",h.Updated+"",h.Upload+"",h.User+"",h.VariableLayer+"",h.Variable+"",h.Vector+"",h.VerticalBarChartAsc+"",h.VerticalBarChartDesc+"",h.VerticalDistribution+"",h.VerticalInbetween+"",h.Video+"",h.Virus+"",h.VolumeDown+"",h.VolumeOff+"",h.VolumeUp+"",h.Walk+"",h.WarningSign+"",h.WaterfallChart+"",h.Waves+"",h.WidgetButton+"",h.WidgetFooter+"",h.WidgetHeader+"",h.Widget+"",h.Wind+"",h.Won+"",h.WrapLines+"",h.WrenchRedo+"",h.WrenchSnooze+"",h.WrenchTime+"",h.Wrench+"",h.Yen+"",h.ZoomIn+"",h.ZoomOut+"",h.ZoomToFit+"";const $0={},Y0={};for(const i of Object.values(h))$0[zS(i)]=i,Y0[VS(i).toUpperCase()]=i;const q0={...$0,...Y0},WS=new Set(Object.values(q0));function XS(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}async function $S(i,e){const t=XS("development")&&typeof performance<"u";let a;if(t&&(a=performance.now(),console.info(`Started '${i}'...`)),await e(),t){const s=Math.round(performance.now()-a);console.info(`Finished '${i}' in ${s}ms`)}}async function YS(i){const{loader:e=hs.defaultLoader}=i;return typeof e=="function"?e:e==="all"?(await _g(async()=>{const{allPathsLoader:t}=await import("./allPathsLoader-BGS8s1rO.js");return{allPathsLoader:t}},[],import.meta.url)).allPathsLoader:(await _g(async()=>{const{splitPathsBySizeLoader:t}=await import("./splitPathsBySizeLoader-M_Q7x7Xs.js");return{splitPathsBySizeLoader:t}},[],import.meta.url)).splitPathsBySizeLoader}class yo{constructor(){_t(this,"defaultLoader","split-by-size");_t(this,"loadedIconPaths16",new Map);_t(this,"loadedIconPaths20",new Map)}static setLoaderOptions(e){e.loader!==void 0&&(hs.defaultLoader=e.loader)}static async load(e,t,a){Array.isArray(e)||(e=[e]),await Promise.all(e.map(s=>this.loadImpl(s,t,a)))}static async loadAll(e){const t=Object.values(q0);$S("[Blueprint] loading all icons",async()=>{await Promise.all([this.load(t,Jt.STANDARD,e),this.load(t,Jt.LARGE,e)])})}static getPaths(e,t){return this.isValidIconName(e)?(t<Jt.LARGE?hs.loadedIconPaths16:hs.loadedIconPaths20).get(e):void 0}static async loadImpl(e,t,a={}){if(!this.isValidIconName(e)){console.error(`[Blueprint] Unknown icon '${e}'`);return}const s=t<Jt.LARGE?hs.loadedIconPaths16:hs.loadedIconPaths20;if(s.has(e))return;const l=await YS(a);try{const u=t<Jt.LARGE?Jt.STANDARD:Jt.LARGE,d=await l(e,u);s.set(e,d)}catch(u){console.error(`[Blueprint] Unable to load ${t}px icon '${e}'`,u)}}static isValidIconName(e){return WS.has(e)}}const hs=new yo,qS="bp6",xg=`${qS}-icon`,Sg=new Map;function KS(i){const e=Sg.get(i)??0;return Sg.set(i,e+1),`${i}-${e}`}const Oo=ze.forwardRef((i,e)=>{const{children:t,className:a,color:s,htmlTitle:l,iconName:u,size:d=Jt.STANDARD,svgProps:m,tagName:p="span",title:v,...x}=i,M=d>=Jt.LARGE?Jt.LARGE:Jt.STANDARD,w=`0 0 ${M} ${M}`,b=KS("iconTitle"),y={fill:s,height:d,role:"img",viewBox:w,width:d,...m};return p===null?me.jsxs("svg",{"aria-labelledby":v?b:void 0,"data-icon":u,ref:e,...y,...x,className:Rn(a,m==null?void 0:m.className),children:[v&&me.jsx("title",{id:b,children:v}),t]}):ze.createElement(p,{"aria-hidden":v?void 0:!0,...x,className:Rn(xg,`${xg}-${u}`,a),ref:e,title:l},me.jsxs("svg",{"data-icon":u,...y,className:m==null?void 0:m.className,children:[v&&me.jsx("title",{children:v}),t]}))});Oo.displayName="Blueprint6.SVGIconContainer";const jS=["M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33"],ZS=["M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63"],K0=ze.forwardRef((i,e)=>{const a=(i.size??Jt.STANDARD)>=Jt.LARGE?ZS:jS;return me.jsx(Oo,{iconName:"caret-down",ref:e,...i,children:a.map((s,l)=>me.jsx("path",{d:s,fillRule:"evenodd"},l))})});K0.displayName="Blueprint6.Icon.CaretDownIcon";const JS=["M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7m6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9"],QS=["M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1m10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1"],j0=ze.forwardRef((i,e)=>{const a=(i.size??Jt.STANDARD)>=Jt.LARGE?QS:JS;return me.jsx(Oo,{iconName:"double-caret-vertical",ref:e,...i,children:a.map((s,l)=>me.jsx("path",{d:s,fillRule:"evenodd"},l))})});j0.displayName="Blueprint6.Icon.DoubleCaretVerticalIcon";const ey=["m9.41 8 2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],ty=["m11.41 10 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],Z0=ze.forwardRef((i,e)=>{const a=(i.size??Jt.STANDARD)>=Jt.LARGE?ty:ey;return me.jsx(Oo,{iconName:"small-cross",ref:e,...i,children:a.map((s,l)=>me.jsx("path",{d:s,fillRule:"evenodd"},l))})});Z0.displayName="Blueprint6.Icon.SmallCrossIcon";const bo=ze.forwardRef((i,e)=>{const{autoLoad:t=!0,className:a,color:s,icon:l,intent:u,tagName:d="span",svgProps:m,title:p,htmlTitle:v,...x}=i,_=i.size??Jt.STANDARD,[M,w]=ze.useState(()=>typeof l=="string"?yo.getPaths(l,_):void 0);if(ze.useEffect(()=>{let b=!1;if(typeof l=="string"){const y=yo.getPaths(l,_);y!==void 0?w(y):t?yo.load(l,_).then(()=>{b||w(yo.getPaths(l,_))}).catch(S=>{console.error(`[Blueprint] Icon '${l}' (${_}px) could not be loaded.`,S)}):console.error(`[Blueprint] Icon '${l}' (${_}px) is not loaded yet and autoLoad={false}, did you call Icons.load('${l}', ${_})?`)}return()=>{b=!0}},[t,l,_]),l==null||typeof l=="boolean")return null;if(typeof l!="string"){if(ze.isValidElement(l)){const b=Rn(l.props.className,a,Fi(u));if(TS(l)){const y={...vs(x),className:b},S=l.props.size??i.size;S!=null&&(y.size=S);const N=l.props.color??s;return N!=null&&(y.color=N),ze.cloneElement(l,y)}return ze.cloneElement(l,{className:b})}return l}if(M==null){const b=_===Jt.STANDARD?cS:_===Jt.LARGE?uS:void 0;return ze.createElement(d||"span",{"aria-hidden":p?void 0:!0,...vs(x),className:Rn(oh,b,dS(l),Fi(u),a),"data-icon":l,ref:e,title:v})}else{const b=M.map((y,S)=>me.jsx("path",{d:y,fillRule:"evenodd"},S));return me.jsx(Oo,{children:b,className:Rn(Fi(u),a),color:s,htmlTitle:v,iconName:l,ref:e,size:_,svgProps:m,tagName:d,title:p,...vs(x)})}});bo.displayName=`${En}.Icon`;var ya;(function(i){i[i.SMALL=20]="SMALL",i[i.STANDARD=50]="STANDARD",i[i.LARGE=100]="LARGE"})(ya||(ya={}));const Vr=45,yg=`M 50,50 m 0,-${Vr} a ${Vr},${Vr} 0 1 1 0,${Vr*2} a ${Vr},${Vr} 0 1 1 0,-${Vr*2}`,co=280,ny=10,iy=4,ry=16,J0=i=>{const{className:e="",intent:t,value:a,tagName:s="div",size:l,...u}=i;NS(()=>{const x=l!=null,_=e.indexOf(Cc)>=0||e.indexOf(Ss)>=0;x&&_&&console.warn(yS)},[e,l]);const d=ay(l,e),m=Math.min(ry,iy*ya.LARGE/d),p=co-co*(a==null?.25:ch(a,0,1)),v=Rn(zc,Fi(t),{[sS]:a!=null},e);return ze.createElement(s,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a===void 0?void 0:a*100,className:v,role:"progressbar",...u},ze.createElement(s,{className:rS},me.jsxs("svg",{width:d,height:d,strokeWidth:m.toFixed(2),viewBox:sy(m),children:[me.jsx("path",{className:oS,d:yg}),me.jsx("path",{className:aS,d:yg,pathLength:co,strokeDasharray:`${co} ${co}`,strokeDashoffset:p})]})))};J0.displayName=`${En}.Spinner`;const ay=(i,e)=>i==null?e.indexOf(Cc)>=0?ya.SMALL:e.indexOf(Ss)>=0?ya.LARGE:ya.STANDARD:Math.max(ny,i),sy=i=>{const e=Vr+i/2,t=(50-e).toFixed(2),a=(e*2).toFixed(2);return`${t} ${t} ${a} ${a}`},oy=hS()?ze.useLayoutEffect:ze.useEffect,fh=ze.forwardRef(({children:i,tagName:e="div",title:t,className:a,ellipsize:s=!1,...l},u)=>{const d=ze.useRef(),m=ze.useMemo(()=>uh(d,u),[u]),[p,v]=ze.useState(""),[x,_]=ze.useState();return oy(()=>{var M;((M=d.current)==null?void 0:M.textContent)!=null&&(_(s&&d.current.scrollWidth>d.current.clientWidth),v(d.current.textContent))},[d,i,s]),ze.createElement(e,{...l,className:Rn({[Xx]:s},a),ref:m,title:t??(x?p:void 0)},i)});fh.displayName=`${En}.Text`;const Di=ze.forwardRef((i,e)=>{const t=Q0(i,e);return me.jsx("button",{type:"button",...vs(i),...t,children:ev(i)})});Di.displayName=`${En}.Button`;const ly=ze.forwardRef((i,e)=>{const{href:t}=i,a=Q0(i,e,{defaultTabIndex:0,disabledTabIndex:-1});return me.jsx("a",{role:"button",...vs(i),...a,"aria-disabled":a.disabled,href:a.disabled?void 0:t,children:ev(i)})});ly.displayName=`${En}.AnchorButton`;function Q0(i,e,t){const{alignText:a,fill:s,large:l,loading:u=!1,minimal:d,outlined:m,size:p="medium",small:v,variant:x="solid"}=i,_=i.disabled||u,[M,w]=W0(!_,i,e,t),b=Rn(kc,{[ah]:M,[Ic]:_,[Co]:s,[Bx]:u},lh(a),Fi(i.intent),Hc(p,{large:l,small:v}),H0(x,{minimal:d,outlined:m}),i.className);return{...w,className:b,disabled:_}}function ev(i){const{children:e,ellipsizeText:t,endIcon:a,icon:s,loading:l,rightIcon:u,text:d,textClassName:m}=i,p=!Rc(d)||!Rc(e);return me.jsxs(me.Fragment,{children:[l&&me.jsx(J0,{className:Yx,size:ya.SMALL}),me.jsx(bo,{icon:s}),p&&me.jsxs(fh,{className:Rn(qx,m),ellipsize:t,tagName:"span",children:[d,e]}),me.jsx(bo,{icon:a??u})]})}const hf=ze.forwardRef((i,e)=>{const{alignText:t,className:a,fill:s,minimal:l,outlined:u,large:d,size:m="medium",variant:p="solid",vertical:v,...x}=i,_=Rn($x,{[Co]:s,[U0]:v},lh(t),Hc(m,{large:d}),H0(p,{minimal:l,outlined:u}),a);return me.jsx("div",{...x,ref:e,className:_,children:i.children})});hf.displayName=`${En}.ButtonGroup`;const Vc=ze.forwardRef((i,e)=>{const{alignIndicator:t,children:a,className:s,indicatorChildren:l,inline:u,inputRef:d,label:m,labelElement:p,large:v,size:x="medium",style:_,type:M,typeClassName:w,tagName:b="label",...y}=i,S=Rn(sh,w,{[Ic]:y.disabled,[Vx]:u},lh(t),Hc(x,{large:v}),s);return ze.createElement(b,{className:S,ref:e,style:_},me.jsx("input",{className:jx,...y,ref:d,type:M}),me.jsx("span",{className:F0,children:l}),m,p,a)});Vc.displayName=`${En}.Control`;const gc=ze.forwardRef((i,e)=>{const{innerLabelChecked:t,innerLabel:a,...s}=i,l=a||t?[me.jsx("div",{className:dg,children:me.jsx("div",{className:fg,children:t||a})},"checked"),me.jsx("div",{className:dg,children:me.jsx("div",{className:fg,children:a})},"unchecked")]:null;return me.jsx(Vc,{...s,indicatorChildren:l,ref:e,type:"checkbox",typeClassName:O0})});gc.displayName=`${En}.Switch`;const cy=ze.forwardRef((i,e)=>me.jsx(Vc,{...i,ref:e,type:"radio",typeClassName:Jx}));cy.displayName=`${En}.Radio`;const tv=ze.forwardRef((i,e)=>{const{defaultIndeterminate:t,indeterminate:a,onChange:s,...l}=i,[u,d]=ze.useState(a||t||!1),m=ze.useRef(null),p=uh(i.inputRef,m),v=ze.useCallback(x=>{a===void 0&&d(x.target.indeterminate),s==null||s(x)},[a,s]);return ze.useEffect(()=>{a!==void 0&&d(a)},[a]),ze.useEffect(()=>{m.current!=null&&(m.current.indeterminate=u)},[m,u]),me.jsx(Vc,{...l,inputRef:p,onChange:v,ref:e,type:"checkbox",typeClassName:Zx})});tv.displayName=`${En}.Checkbox`;const vc=ze.forwardRef((i,e)=>{const{className:t,children:a,disabled:s,fill:l,iconName:u="double-caret-vertical",iconProps:d,large:m,minimal:p,options:v=[],value:x,..._}=i,M=Rn(Kx,{[Ic]:s,[Co]:l,[Ss]:m,[Ac]:p},t),w="Open dropdown",b=u==="double-caret-vertical"?me.jsx(j0,{title:w,...d}):me.jsx(K0,{title:w,...d}),y=v.map(S=>{const N=typeof S=="object"?S:{value:S};return ze.createElement("option",{...N,key:N.value,children:N.label||N.value})});return me.jsxs("div",{className:M,children:[me.jsxs("select",{disabled:s,ref:e,value:x,..._,multiple:!1,children:[y,a]}),b]})});vc.displayName=`${En}.HTMLSelect`;const Mg={START:"start",END:"end"},nv={PUSH:"push",NONE:"none"};function _c(i){return`${(i*100).toFixed(2)}%`}function Eg(i,e,t,a){const s=e<t?1:-1;for(let l=e;l!==t+s;l+=s)i[l]=a}function uy(i,e){if(i.length===0)return;let t=i[0],a=e(t);for(let s=1;s<i.length;s++){const l=i[s],u=e(l);u<a&&(t=l,a=u)}return t}const dy=["max","min","stepSize","tickSize","value"];class iv extends dh{constructor(){super(...arguments);_t(this,"state",{isMoving:!1});_t(this,"handleElement",null);_t(this,"refHandlers",{handle:t=>this.handleElement=t});_t(this,"beginHandleMovement",t=>{document.addEventListener("mousemove",this.handleHandleMovement),document.addEventListener("mouseup",this.endHandleMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.mouseEventClientOffset(t)))});_t(this,"beginHandleTouchMovement",t=>{document.addEventListener("touchmove",this.handleHandleTouchMovement),document.addEventListener("touchend",this.endHandleTouchMovement),document.addEventListener("touchcancel",this.endHandleTouchMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.touchEventClientOffset(t)))});_t(this,"getStyleProperties",()=>{if(this.handleElement==null)return{};const{min:t=0,tickSizeRatio:a,value:s,vertical:l}=this.props,{handleMidpoint:u}=this.getHandleMidpointAndOffset(this.handleElement,!0),d=(s-t)*a,m=`calc(${_c(d)} - ${u}px)`;return l?{bottom:m}:{left:m}});_t(this,"endHandleMovement",t=>{this.handleMoveEndedAt(this.mouseEventClientOffset(t))});_t(this,"endHandleTouchMovement",t=>{this.handleMoveEndedAt(this.touchEventClientOffset(t))});_t(this,"handleMoveEndedAt",t=>{var s,l;this.removeDocumentEventListeners(),this.setState({isMoving:!1});const a=this.changeValue(this.clientToValue(t));(l=(s=this.props).onRelease)==null||l.call(s,a)});_t(this,"handleHandleMovement",t=>{this.handleMovedTo(this.mouseEventClientOffset(t))});_t(this,"handleHandleTouchMovement",t=>{this.handleMovedTo(this.touchEventClientOffset(t))});_t(this,"handleMovedTo",t=>{this.state.isMoving&&!this.props.disabled&&this.changeValue(this.clientToValue(t))});_t(this,"handleKeyDown",t=>{const{stepSize:a,value:s}=this.props,l=CS(t,["ArrowLeft","ArrowDown"],["ArrowRight","ArrowUp"]);l!==void 0&&(this.changeValue(s+a*l),t.preventDefault())});_t(this,"handleKeyUp",t=>{var a,s;AS(t)&&((s=(a=this.props).onRelease)==null||s.call(a,this.props.value))})}componentDidMount(){this.forceUpdate()}render(){const{className:t,disabled:a,label:s,min:l,max:u,value:d,vertical:m,htmlProps:p}=this.props,{isMoving:v}=this.state;return me.jsx("span",{role:"slider",tabIndex:0,...p,className:Rn(I0,{[ah]:v},t),onKeyDown:a?void 0:this.handleKeyDown,onKeyUp:a?void 0:this.handleKeyUp,onMouseDown:a?void 0:this.beginHandleMovement,onTouchStart:a?void 0:this.beginHandleTouchMovement,ref:this.refHandlers.handle,style:this.getStyleProperties(),"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":d,"aria-disabled":a,"aria-orientation":m?"vertical":"horizontal",children:s==null?null:me.jsx("span",{className:k0,children:s})})}componentWillUnmount(){this.removeDocumentEventListeners()}clientToValue(t){const{stepSize:a,tickSize:s,value:l,vertical:u}=this.props;if(this.handleElement==null)return l;const d=u?window.innerHeight-t:t,m=this.getHandleElementCenterPixel(this.handleElement),p=d-m;return isNaN(p)?l:l+Math.round(p/(s*a))*a}mouseEventClientOffset(t){return this.props.vertical?t.clientY:t.clientX}touchEventClientOffset(t){const a=t.changedTouches[0];return this.props.vertical?a.clientY:a.clientX}validateProps(t){for(const a of dy)if(typeof t[a]!="number")throw new Error(`[Blueprint] <Handle> requires number value for ${a} prop`)}changeValue(t,a=this.props.onChange){return t=this.clamp(t),!isNaN(t)&&this.props.value!==t&&(a==null||a(t)),t}clamp(t){return ch(t,this.props.min,this.props.max)}getHandleElementCenterPixel(t){const{handleMidpoint:a,handleOffset:s}=this.getHandleMidpointAndOffset(t);return s+a}getHandleMidpointAndOffset(t,a=!1){if(t==null)return{handleMidpoint:0,handleOffset:0};const{vertical:s}=this.props,l=t.getBoundingClientRect();l.width=t.offsetWidth,l.height=t.offsetHeight;const u=s?a?"width":"height":a?"height":"width",d=s?window.innerHeight-(l.top+l[u]):l.left;return{handleMidpoint:l[u]/2,handleOffset:d}}removeDocumentEventListeners(){document.removeEventListener("mousemove",this.handleHandleMovement),document.removeEventListener("mouseup",this.endHandleMovement),document.removeEventListener("touchmove",this.handleHandleTouchMovement),document.removeEventListener("touchend",this.endHandleTouchMovement),document.removeEventListener("touchcancel",this.endHandleTouchMovement)}}_t(iv,"displayName",`${En}.SliderHandle`);const ys=()=>null;ys.displayName=`${En}.MultiSliderHandle`;const Gr=class Gr extends dh{constructor(){super(...arguments);_t(this,"state",{labelPrecision:fy(this.props),tickSize:0,tickSizeRatio:0});_t(this,"handleElements",[]);_t(this,"trackElement",null);_t(this,"addHandleRef",t=>{t!=null&&this.handleElements.push(t)});_t(this,"maybeHandleTrackClick",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.mouseEventClientOffset(t));a&&a.beginHandleMovement(t)}});_t(this,"maybeHandleTrackTouch",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.touchEventClientOffset(t));a&&a.beginHandleTouchMovement(t)}});_t(this,"canHandleTrackEvent",t=>{const a=t.target;return!this.props.disabled&&a.closest(`.${I0}`)==null});_t(this,"getHandlerForIndex",(t,a)=>s=>{a==null||a(this.getNewHandleValues(s,t))});_t(this,"handleChange",t=>{var l,u;const a=ha(this.props),s=a.map(d=>d.value);fS(t,s)||((u=(l=this.props).onChange)==null||u.call(l,t),a.forEach((d,m)=>{var p;s[m]!==t[m]&&((p=d.onChange)==null||p.call(d,t[m]))}))});_t(this,"handleRelease",t=>{var s,l;const a=ha(this.props);(l=(s=this.props).onRelease)==null||l.call(s,t),a.forEach((u,d)=>{var m;(m=u.onRelease)==null||m.call(u,t[d])})})}static getDerivedStateFromProps(t){return{labelPrecision:Gr.getLabelPrecision(t)}}static getLabelPrecision({labelPrecision:t,stepSize:a}){return t??G0(a)}getSnapshotBeforeUpdate(t){const a=ha(t);return ha(this.props).length!==a.length&&(this.handleElements=[]),null}render(){const t=Rn(Ma,{[Ic]:this.props.disabled,[`${Ma}-unlabeled`]:this.props.labelRenderer===!1,[U0]:this.props.vertical},this.props.className);return me.jsxs("div",{className:t,onMouseDown:this.maybeHandleTrackClick,onTouchStart:this.maybeHandleTrackTouch,children:[me.jsx("div",{className:eS,ref:a=>this.trackElement=a,children:this.renderTracks()}),me.jsx("div",{className:Qx,children:this.renderLabels()}),this.renderHandles()]})}componentDidMount(){this.updateTickSize()}componentDidUpdate(t,a){super.componentDidUpdate(t,a),(t.min!==this.props.min||t.max!==this.props.max||t.vertical!==this.props.vertical)&&this.updateTickSize()}validateProps(t){if(t.stepSize<=0)throw new Error(mS);if(t.labelStepSize!==void 0&&t.labelValues!==void 0)throw new Error(SS);if(t.labelStepSize!==void 0&&t.labelStepSize<=0)throw new Error(gS);if(t.min!==void 0&&!isFinite(t.min))throw new Error(vS);if(t.max!==void 0&&!isFinite(t.max))throw new Error(_S);let a=!1;if(ze.Children.forEach(t.children,s=>{s&&!B0(s,ys)&&(a=!0)}),a)throw new Error(xS)}formatLabel(t,a=!1){const{labelRenderer:s}=this.props;if(s!==!1)return V0(s)?s(t,{isHandleTooltip:a}):t.toFixed(this.state.labelPrecision)}renderLabels(){if(this.props.labelRenderer===!1)return null;const t=this.getLabelValues(),{max:a,min:s}=this.props;return t.map((u,d)=>{const m=_c((u-s)/(a-s)),p=this.props.vertical?{bottom:m}:{left:m};return me.jsx("div",{className:k0,style:p,children:this.formatLabel(u)},d)})}renderTracks(){const t=rv(this.props);t.push({value:this.props.max});let a={value:this.props.min};const s=[];for(let l=0;l<t.length;l++){const u=t[l];s.push(this.renderTrackFill(l,a,u)),a=u}return s}renderTrackFill(t,a,s){const[l,u]=[this.getOffsetRatio(a.value),this.getOffsetRatio(s.value)].sort((_,M)=>_-M),d=_c(l),m=_c(1-u),v={...this.props.vertical?{bottom:d,left:0,top:m}:{left:d,right:m,top:0},...a.trackStyleAfter||s.trackStyleBefore||{}},x=Rn(tS,Fi(this.getTrackIntent(a,s)));return me.jsx("div",{className:x,style:v},`track-${t}`)}renderHandles(){const{disabled:t,max:a,min:s,stepSize:l,vertical:u}=this.props,d=ha(this.props);return d.length===0?null:d.map(({value:m,type:p,className:v,htmlProps:x},_)=>me.jsx(iv,{htmlProps:x,className:Rn({[nS]:p===Mg.START,[iS]:p===Mg.END},v),disabled:t,label:this.formatLabel(m,!0),max:a,min:s,onChange:this.getHandlerForIndex(_,this.handleChange),onRelease:this.getHandlerForIndex(_,this.handleRelease),ref:this.addHandleRef,stepSize:l,tickSize:this.state.tickSize,tickSizeRatio:this.state.tickSizeRatio,value:m,vertical:u},`${_}-${d.length}`))}nearestHandleForValue(t,a){return uy(t,s=>{const l=a(s),u=s.clientToValue(l),d=s.props.value;return Math.abs(u-d)})}getNewHandleValues(t,a){const l=ha(this.props).map(p=>p.value),u=l.slice();u[a]=t,u.sort((p,v)=>p-v);const d=u.indexOf(t),m=this.findFirstLockedHandleIndex(a,d);if(m===-1)Eg(u,a,d,t);else{const p=l[m];return Eg(l,a,m,p),l}return u}findFirstLockedHandleIndex(t,a){const s=t<a?1:-1,l=ha(this.props);for(let u=t+s;u!==a+s;u+=s)if(l[u].interactionKind!==nv.PUSH)return u;return-1}getLabelValues(){const{labelStepSize:t,labelValues:a,min:s,max:l}=this.props;let u=[];if(a!==void 0)u=a.slice();else for(let d=s;d<l||MS(d,l);d+=t??1)u.push(d);return u}getOffsetRatio(t){return ch((t-this.props.min)*this.state.tickSizeRatio,0,1)}getTrackIntent(t,a){return this.props.showTrackFill?t.intentAfter!==void 0?t.intentAfter:a!==void 0&&a.intentBefore!==void 0?a.intentBefore:this.props.defaultTrackIntent:Xr.NONE}updateTickSize(){if(this.trackElement!=null){const t=this.props.vertical?this.trackElement.clientHeight:this.trackElement.clientWidth,a=1/(this.props.max-this.props.min),s=t*a;this.setState({tickSize:s,tickSizeRatio:a})}}};_t(Gr,"defaultSliderProps",{disabled:!1,max:10,min:0,showTrackFill:!0,stepSize:1,vertical:!1}),_t(Gr,"defaultProps",{...Gr.defaultSliderProps,defaultTrackIntent:Xr.NONE}),_t(Gr,"displayName",`${En}.MultiSlider`),_t(Gr,"Handle",ys);let Po=Gr;function fy({labelPrecision:i,stepSize:e=Po.defaultSliderProps.stepSize}){return i??G0(e)}function ha(i){return rv(i,e=>e.interactionKind!==nv.NONE)}function rv({children:i},e=()=>!0){const t=ze.Children.map(i,s=>B0(s,ys)&&e(s.props)?s.props:null);let a=t??[];return a=a.filter(s=>s!==null),a.sort((s,l)=>s.value-l.value),a}class wo extends dh{render(){const{initialValue:e,intent:t,value:a,onChange:s,onRelease:l,handleHtmlProps:u,...d}=this.props;return me.jsxs(Po,{...d,children:[me.jsx(ys,{value:a,intentAfter:a<e?t:void 0,intentBefore:a>e?t:void 0,onChange:s,onRelease:l,htmlProps:u}),me.jsx(ys,{value:e,interactionKind:"none"})]})}}_t(wo,"defaultProps",{...Po.defaultSliderProps,initialValue:0,intent:Xr.PRIMARY,value:0}),_t(wo,"displayName",`${En}.Slider`);const av=i=>{const{className:e,large:t,onRemove:a,size:s,tabIndex:l}=i,u=t||s==="large"||(e==null?void 0:e.includes(Ss)),d=ze.useCallback(m=>{a==null||a(m,i)},[a,i]);return me.jsx("button",{"aria-label":"Remove tag",type:"button",className:lS,onClick:d,tabIndex:l,children:me.jsx(Z0,{size:u?Jt.LARGE:Jt.STANDARD})})};av.displayName=`${En}.TagRemoveButton`;const sv=ze.forwardRef((i,e)=>{const{children:t,className:a,endIcon:s,fill:l=!1,icon:u,intent:d,interactive:m,large:p=!1,minimal:v=!1,multiline:x,onRemove:_,rightIcon:M,round:w=!1,size:b="medium",tabIndex:y=0,htmlTitle:S,...N}=i,z=V0(_),R=m??N.onClick!=null,[L,P]=W0(R,i,e,{defaultTabIndex:0,disabledTabIndex:void 0}),I=Rn(z0,Fi(d),Hc(b,{large:p}),{[ah]:L,[Co]:l,[Gx]:R,[Ac]:v,[Wx]:w},a);return me.jsxs("span",{...vs(N),...P,className:I,role:R?"button":void 0,children:[me.jsx(bo,{icon:u}),!Rc(t)&&me.jsx(fh,{className:Co,ellipsize:!x,tagName:"span",title:S,children:t}),me.jsx(bo,{icon:s??M}),z&&me.jsx(av,{...i})]})});sv.displayName=`${En}.Tag`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const hh="186",pr={ROTATE:0,DOLLY:1,PAN:2},ms={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},hy=0,Tg=1,py=2,xc=1,my=2,Mo=3,Ea=0,Zn=1,Ni=2,mr=0,Ao=1,wg=2,Ag=3,Cg=4,gy=5,ps=100,vy=101,_y=102,xy=103,Sy=104,yy=200,My=201,Ey=202,Ty=203,ov=204,lv=205,wy=206,Ay=207,Cy=208,Ry=209,by=210,Py=211,Ly=212,Dy=213,Ny=214,pf=0,mf=1,gf=2,Lo=3,vf=4,_f=5,xf=6,Sf=7,cv=0,Uy=1,Fy=2,Yi=0,uv=1,dv=2,fv=3,hv=4,pv=5,mv=6,gv=7,vv=300,Ta=301,Ms=302,bd=303,Pd=304,Gc=306,yf=1e3,hr=1001,Mf=1002,Cn=1003,Oy=1004,Wl=1005,On=1006,Ld=1007,xa=1008,si=1009,_v=1010,xv=1011,Do=1012,ph=1013,qi=1014,Xi=1015,Ki=1016,mh=1017,gh=1018,No=1020,Sv=35902,yv=35899,Mv=1021,Ev=1022,Ui=1023,vr=1026,Sa=1027,Tv=1028,vh=1029,wa=1030,_h=1031,xh=1033,Sc=33776,yc=33777,Mc=33778,Ec=33779,Ef=35840,Tf=35841,wf=35842,Af=35843,Cf=36196,Rf=37492,bf=37496,Pf=37488,Lf=37489,bc=37490,Df=37491,Nf=37808,Uf=37809,Ff=37810,Of=37811,If=37812,kf=37813,zf=37814,Hf=37815,Vf=37816,Gf=37817,Bf=37818,Wf=37819,Xf=37820,$f=37821,Yf=36492,qf=36494,Kf=36495,jf=36283,Zf=36284,Pc=36285,Jf=36286,Iy=3200,Qf=0,ky=1,Br="",ai="srgb",Lc="srgb-linear",Dc="linear",Bt="srgb",Dd=7680,zy=519,Hy=512,Vy=513,Gy=514,Sh=515,By=516,Wy=517,yh=518,Xy=519,wv=35044,Rg="300 es",$i=2e3,Uo=2001;function $y(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Nc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function Yy(){const i=Nc("canvas");return i.style.display="block",i}const bg={};function Uc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Av(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function mt(...i){i=Av(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ut(...i){i=Av(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function _s(...i){const e=i.join(" ");e in bg||(bg[e]=!0,mt(...i))}function qy(i,e,t){return new Promise(function(a,s){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const Ky={[pf]:mf,[gf]:xf,[vf]:Sf,[Lo]:_f,[mf]:pf,[xf]:gf,[Sf]:vf,[_f]:Lo};class Kr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const Un=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Tc=Math.PI/180,eh=180/Math.PI;function Wr(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Un[i&255]+Un[i>>8&255]+Un[i>>16&255]+Un[i>>24&255]+"-"+Un[e&255]+Un[e>>8&255]+"-"+Un[e>>16&15|64]+Un[e>>24&255]+"-"+Un[t&63|128]+Un[t>>8&255]+"-"+Un[t>>16&255]+Un[t>>24&255]+Un[a&255]+Un[a>>8&255]+Un[a>>16&255]+Un[a>>24&255]).toLowerCase()}function At(i,e,t){return Math.max(e,Math.min(t,i))}function jy(i,e){return(i%e+e)%e}function Nd(i,e,t){return(1-t)*i+t*e}function Wi(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Xt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Zy={DEG2RAD:Tc},Nh=class Nh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Nh.prototype.isVector2=!0;let ot=Nh;class $r{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,d){let m=a[s+0],p=a[s+1],v=a[s+2],x=a[s+3],_=l[u+0],M=l[u+1],w=l[u+2],b=l[u+3];if(x!==b||m!==_||p!==M||v!==w){let y=m*_+p*M+v*w+x*b;y<0&&(_=-_,M=-M,w=-w,b=-b,y=-y);let S=1-d;if(y<.9995){const N=Math.acos(y),z=Math.sin(N);S=Math.sin(S*N)/z,d=Math.sin(d*N)/z,m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+b*d}else{m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+b*d;const N=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=N,p*=N,v*=N,x*=N}}e[t]=m,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,a,s,l,u){const d=a[s],m=a[s+1],p=a[s+2],v=a[s+3],x=l[u],_=l[u+1],M=l[u+2],w=l[u+3];return e[t]=d*w+v*x+m*M-p*_,e[t+1]=m*w+v*_+p*x-d*M,e[t+2]=p*w+v*M+d*_-m*x,e[t+3]=v*w-d*x-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),v=d(s/2),x=d(l/2),_=m(a/2),M=m(s/2),w=m(l/2);switch(u){case"XYZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"YXZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"ZXY":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"ZYX":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"YZX":this._x=_*v*x+p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x-_*M*w;break;case"XZY":this._x=_*v*x-p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x+_*M*w;break;default:mt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],d=t[5],m=t[9],p=t[2],v=t[6],x=t[10],_=a+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-m)*M,this._y=(l-p)*M,this._z=(u-s)*M}else if(a>d&&a>x){const M=2*Math.sqrt(1+a-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(s+u)/M,this._z=(l+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-a-x);this._w=(l-p)/M,this._x=(s+u)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-a-d);this._w=(u-s)/M,this._x=(l+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(At(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,d=t._x,m=t._y,p=t._z,v=t._w;return this._x=a*v+u*d+s*p-l*m,this._y=s*v+u*m+l*d-a*p,this._z=l*v+u*p+a*m-s*d,this._w=u*v-a*d-s*m-l*p,this._onChangeCallback(),this}slerp(e,t){let a=e._x,s=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,s=-s,l=-l,u=-u,d=-d);let m=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,t=Math.sin(t*p)/v,this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Uh=class Uh{constructor(e=0,t=0,a=0){this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Pg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Pg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*s-d*a),v=2*(d*t-l*s),x=2*(l*a-u*t);return this.x=t+m*p+u*x-d*v,this.y=a+m*v+d*p-l*x,this.z=s+m*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,d=t.y,m=t.z;return this.x=s*m-l*d,this.y=l*u-a*m,this.z=a*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Ud.copy(this).projectOnVector(e),this.sub(Ud)}reflect(e){return this.sub(Ud.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(At(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Uh.prototype.isVector3=!0;let Q=Uh;const Ud=new Q,Pg=new $r,Fh=class Fh{constructor(e,t,a,s,l,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p)}set(e,t,a,s,l,u,d,m,p){const v=this.elements;return v[0]=e,v[1]=s,v[2]=d,v[3]=t,v[4]=l,v[5]=m,v[6]=a,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],v=a[4],x=a[7],_=a[2],M=a[5],w=a[8],b=s[0],y=s[3],S=s[6],N=s[1],z=s[4],R=s[7],L=s[2],P=s[5],I=s[8];return l[0]=u*b+d*N+m*L,l[3]=u*y+d*z+m*P,l[6]=u*S+d*R+m*I,l[1]=p*b+v*N+x*L,l[4]=p*y+v*z+x*P,l[7]=p*S+v*R+x*I,l[2]=_*b+M*N+w*L,l[5]=_*y+M*z+w*P,l[8]=_*S+M*R+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-a*l*v+a*d*m+s*l*p-s*u*m}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*u-d*p,_=d*m-v*l,M=p*l-u*m,w=t*x+a*_+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(s*p-v*a)*b,e[2]=(d*a-s*u)*b,e[3]=_*b,e[4]=(v*t-s*m)*b,e[5]=(s*l-d*t)*b,e[6]=M*b,e[7]=(a*m-p*t)*b,e[8]=(u*t-a*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,d){const m=Math.cos(l),p=Math.sin(l);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-s*p,s*m,-s*(-p*u+m*d)+d+t,0,0,1),this}scale(e,t){return _s("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(Fd.makeScale(e,t)),this}rotate(e){return _s("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(Fd.makeRotation(-e)),this}translate(e,t){return _s("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(Fd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Fh.prototype.isMatrix3=!0;let xt=Fh;const Fd=new xt,Lg=new xt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Dg=new xt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Jy(){const i={enabled:!0,workingColorSpace:Lc,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Bt&&(s.r=gr(s.r),s.g=gr(s.g),s.b=gr(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Bt&&(s.r=xs(s.r),s.g=xs(s.g),s.b=xs(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Br?Dc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return _s("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return _s("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[Lc]:{primaries:e,whitePoint:a,transfer:Dc,toXYZ:Lg,fromXYZ:Dg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ai},outputColorSpaceConfig:{drawingBufferColorSpace:ai}},[ai]:{primaries:e,whitePoint:a,transfer:Bt,toXYZ:Lg,fromXYZ:Dg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ai}}}),i}const Lt=Jy();function gr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function xs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let ja;class Qy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{ja===void 0&&(ja=Nc("canvas")),ja.width=e.width,ja.height=e.height;const s=ja.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=ja}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Nc("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=gr(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(gr(t[a]/255)*255):t[a]=gr(t[a]);return{data:t,width:e.width,height:e.height}}else return mt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let eM=0;class Mh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:eM++}),this.uuid=Wr(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?l.push(Od(s[u].image)):l.push(Od(s[u]))}else l=Od(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Od(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Qy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(mt("Texture: Unable to serialize Texture."),{})}let tM=0;const Id=new Q;class In extends Kr{constructor(e=In.DEFAULT_IMAGE,t=In.DEFAULT_MAPPING,a=hr,s=hr,l=On,u=xa,d=Ui,m=si,p=In.DEFAULT_ANISOTROPY,v=Br){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:tM++}),this.uuid=Wr(),this.name="",this.source=new Mh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ot(0,0),this.repeat=new ot(1,1),this.center=new ot(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new xt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Id).x}get height(){return this.source.getSize(Id).y}get depth(){return this.source.getSize(Id).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){mt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){mt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==vv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case yf:e.x=e.x-Math.floor(e.x);break;case hr:e.x=e.x<0?0:1;break;case Mf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case yf:e.y=e.y-Math.floor(e.y);break;case hr:e.y=e.y<0?0:1;break;case Mf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}In.DEFAULT_IMAGE=null;In.DEFAULT_MAPPING=vv;In.DEFAULT_ANISOTROPY=1;const Oh=class Oh{constructor(e=0,t=0,a=0,s=1){this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const m=e.elements,p=m[0],v=m[4],x=m[8],_=m[1],M=m[5],w=m[9],b=m[2],y=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-b)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+b)<.1&&Math.abs(w+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(p+1)/2,R=(M+1)/2,L=(S+1)/2,P=(v+_)/4,I=(x+b)/4,T=(w+y)/4;return z>R&&z>L?z<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(z),s=P/a,l=I/a):R>L?R<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(R),a=P/s,l=T/s):L<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(L),a=I/l,s=T/l),this.set(a,s,l,t),this}let N=Math.sqrt((y-w)*(y-w)+(x-b)*(x-b)+(_-v)*(_-v));return Math.abs(N)<.001&&(N=1),this.x=(y-w)/N,this.y=(x-b)/N,this.z=(_-v)/N,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=At(this.x,e.x,t.x),this.y=At(this.y,e.y,t.y),this.z=At(this.z,e.z,t.z),this.w=At(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=At(this.x,e,t),this.y=At(this.y,e,t),this.z=At(this.z,e,t),this.w=At(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(At(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Oh.prototype.isVector4=!0;let rn=Oh;class nM extends Kr{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:On,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new rn(0,0,e,t),this.scissorTest=!1,this.viewport=new rn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:a.depth},l=new In(s),u=a.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:On,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new Mh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Oi extends nM{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Cv extends In{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class iM extends In{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Cn,this.minFilter=Cn,this.wrapR=hr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Oc=class Oc{constructor(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y)}set(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=a,S[12]=s,S[1]=l,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=_,S[3]=M,S[7]=w,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Oc().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,a=e.elements,s=1/Za.setFromMatrixColumn(e,0).length(),l=1/Za.setFromMatrixColumn(e,1).length(),u=1/Za.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(s),p=Math.sin(s),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*v,M=u*x,w=d*v,b=d*x;t[0]=m*v,t[4]=-m*x,t[8]=p,t[1]=M+w*p,t[5]=_-b*p,t[9]=-d*m,t[2]=b-_*p,t[6]=w+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*v,M=m*x,w=p*v,b=p*x;t[0]=_+b*d,t[4]=w*d-M,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-d,t[2]=M*d-w,t[6]=b+_*d,t[10]=u*m}else if(e.order==="ZXY"){const _=m*v,M=m*x,w=p*v,b=p*x;t[0]=_-b*d,t[4]=-u*x,t[8]=w+M*d,t[1]=M+w*d,t[5]=u*v,t[9]=b-_*d,t[2]=-u*p,t[6]=d,t[10]=u*m}else if(e.order==="ZYX"){const _=u*v,M=u*x,w=d*v,b=d*x;t[0]=m*v,t[4]=w*p-M,t[8]=_*p+b,t[1]=m*x,t[5]=b*p+_,t[9]=M*p-w,t[2]=-p,t[6]=d*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,w=d*m,b=d*p;t[0]=m*v,t[4]=b-_*x,t[8]=w*x+M,t[1]=x,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=M*x+w,t[10]=_-b*x}else if(e.order==="XZY"){const _=u*m,M=u*p,w=d*m,b=d*p;t[0]=m*v,t[4]=-x,t[8]=p*v,t[1]=_*x+b,t[5]=u*v,t[9]=M*x-w,t[2]=w*x-M,t[6]=d*v,t[10]=b*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(rM,e,aM)}lookAt(e,t,a){const s=this.elements;return ii.subVectors(e,t),ii.lengthSq()===0&&(ii.z=1),ii.normalize(),Or.crossVectors(a,ii),Or.lengthSq()===0&&(Math.abs(a.z)===1?ii.x+=1e-4:ii.z+=1e-4,ii.normalize(),Or.crossVectors(a,ii)),Or.normalize(),Xl.crossVectors(ii,Or),s[0]=Or.x,s[4]=Xl.x,s[8]=ii.x,s[1]=Or.y,s[5]=Xl.y,s[9]=ii.y,s[2]=Or.z,s[6]=Xl.z,s[10]=ii.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],v=a[1],x=a[5],_=a[9],M=a[13],w=a[2],b=a[6],y=a[10],S=a[14],N=a[3],z=a[7],R=a[11],L=a[15],P=s[0],I=s[4],T=s[8],U=s[12],k=s[1],G=s[5],j=s[9],ie=s[13],H=s[2],ee=s[6],le=s[10],se=s[14],$=s[3],K=s[7],Z=s[11],D=s[15];return l[0]=u*P+d*k+m*H+p*$,l[4]=u*I+d*G+m*ee+p*K,l[8]=u*T+d*j+m*le+p*Z,l[12]=u*U+d*ie+m*se+p*D,l[1]=v*P+x*k+_*H+M*$,l[5]=v*I+x*G+_*ee+M*K,l[9]=v*T+x*j+_*le+M*Z,l[13]=v*U+x*ie+_*se+M*D,l[2]=w*P+b*k+y*H+S*$,l[6]=w*I+b*G+y*ee+S*K,l[10]=w*T+b*j+y*le+S*Z,l[14]=w*U+b*ie+y*se+S*D,l[3]=N*P+z*k+R*H+L*$,l[7]=N*I+z*G+R*ee+L*K,l[11]=N*T+z*j+R*le+L*Z,l[15]=N*U+z*ie+R*se+L*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],_=e[10],M=e[14],w=e[3],b=e[7],y=e[11],S=e[15],N=m*M-p*_,z=d*M-p*x,R=d*_-m*x,L=u*M-p*v,P=u*_-m*v,I=u*x-d*v;return t*(b*N-y*z+S*R)-a*(w*N-y*L+S*P)+s*(w*z-b*L+S*I)-l*(w*R-b*P+y*I)}determinantAffine(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[1],u=e[5],d=e[9],m=e[2],p=e[6],v=e[10];return t*(u*v-d*p)-a*(l*v-d*m)+s*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],_=e[10],M=e[11],w=e[12],b=e[13],y=e[14],S=e[15],N=t*d-a*u,z=t*m-s*u,R=t*p-l*u,L=a*m-s*d,P=a*p-l*d,I=s*p-l*m,T=v*b-x*w,U=v*y-_*w,k=v*S-M*w,G=x*y-_*b,j=x*S-M*b,ie=_*S-M*y,H=N*ie-z*j+R*G+L*k-P*U+I*T;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ee=1/H;return e[0]=(d*ie-m*j+p*G)*ee,e[1]=(s*j-a*ie-l*G)*ee,e[2]=(b*I-y*P+S*L)*ee,e[3]=(_*P-x*I-M*L)*ee,e[4]=(m*k-u*ie-p*U)*ee,e[5]=(t*ie-s*k+l*U)*ee,e[6]=(y*R-w*I-S*z)*ee,e[7]=(v*I-_*R+M*z)*ee,e[8]=(u*j-d*k+p*T)*ee,e[9]=(a*k-t*j-l*T)*ee,e[10]=(w*P-b*R+S*N)*ee,e[11]=(x*R-v*P-M*N)*ee,e[12]=(d*U-u*G-m*T)*ee,e[13]=(t*G-a*U+s*T)*ee,e[14]=(b*z-w*L-y*N)*ee,e[15]=(v*L-x*z+_*N)*ee,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,d=e.y,m=e.z,p=l*u,v=l*d;return this.set(p*u+a,p*d-s*m,p*m+s*d,0,p*d+s*m,v*d+a,v*m-s*u,0,p*m-s*d,v*m+s*u,l*m*m+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,d=t._z,m=t._w,p=l+l,v=u+u,x=d+d,_=l*p,M=l*v,w=l*x,b=u*v,y=u*x,S=d*x,N=m*p,z=m*v,R=m*x,L=a.x,P=a.y,I=a.z;return s[0]=(1-(b+S))*L,s[1]=(M+R)*L,s[2]=(w-z)*L,s[3]=0,s[4]=(M-R)*P,s[5]=(1-(_+S))*P,s[6]=(y+N)*P,s[7]=0,s[8]=(w+z)*I,s[9]=(y-N)*I,s[10]=(1-(_+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),t.identity(),this;let u=Za.set(s[0],s[1],s[2]).length();const d=Za.set(s[4],s[5],s[6]).length(),m=Za.set(s[8],s[9],s[10]).length();l<0&&(u=-u),bi.copy(this);const p=1/u,v=1/d,x=1/m;return bi.elements[0]*=p,bi.elements[1]*=p,bi.elements[2]*=p,bi.elements[4]*=v,bi.elements[5]*=v,bi.elements[6]*=v,bi.elements[8]*=x,bi.elements[9]*=x,bi.elements[10]*=x,t.setFromRotationMatrix(bi),a.x=u,a.y=d,a.z=m,this}makePerspective(e,t,a,s,l,u,d=$i,m=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(a-s),_=(t+e)/(t-e),M=(a+s)/(a-s);let w,b;if(m)w=l/(u-l),b=u*l/(u-l);else if(d===$i)w=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Uo)w=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,a,s,l,u,d=$i,m=!1){const p=this.elements,v=2/(t-e),x=2/(a-s),_=-(t+e)/(t-e),M=-(a+s)/(a-s);let w,b;if(m)w=1/(u-l),b=u/(u-l);else if(d===$i)w=-2/(u-l),b=-(u+l)/(u-l);else if(d===Uo)w=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}};Oc.prototype.isMatrix4=!0;let Qt=Oc;const Za=new Q,bi=new Qt,rM=new Q(0,0,0),aM=new Q(1,1,1),Or=new Q,Xl=new Q,ii=new Q,Ng=new Qt,Ug=new $r;class Yr{constructor(e=0,t=0,a=0,s=Yr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],d=s[8],m=s[1],p=s[5],v=s[9],x=s[2],_=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(At(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-At(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(At(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-At(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(At(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-At(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:mt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Ng.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Ng,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Ug.setFromEuler(this),this.setFromQuaternion(Ug,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Yr.DEFAULT_ORDER="XYZ";class Eh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let sM=0;const Fg=new Q,Ja=new $r,sr=new Qt,$l=new Q,uo=new Q,oM=new Q,lM=new $r,Og=new Q(1,0,0),Ig=new Q(0,1,0),kg=new Q(0,0,1),zg={type:"added"},cM={type:"removed"},Qa={type:"childadded",child:null},kd={type:"childremoved",child:null};class Mn extends Kr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sM++}),this.uuid=Wr(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Mn.DEFAULT_UP.clone();const e=new Q,t=new Yr,a=new $r,s=new Q(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Qt},normalMatrix:{value:new xt}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Mn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Eh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ja.setFromAxisAngle(e,t),this.quaternion.multiply(Ja),this}rotateOnWorldAxis(e,t){return Ja.setFromAxisAngle(e,t),this.quaternion.premultiply(Ja),this}rotateX(e){return this.rotateOnAxis(Og,e)}rotateY(e){return this.rotateOnAxis(Ig,e)}rotateZ(e){return this.rotateOnAxis(kg,e)}translateOnAxis(e,t){return Fg.copy(e).applyQuaternion(this.quaternion),this.position.add(Fg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Og,e)}translateY(e){return this.translateOnAxis(Ig,e)}translateZ(e){return this.translateOnAxis(kg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(sr.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?$l.copy(e):$l.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),uo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?sr.lookAt(uo,$l,this.up):sr.lookAt($l,uo,this.up),this.quaternion.setFromRotationMatrix(sr),s&&(sr.extractRotation(s.matrixWorld),Ja.setFromRotationMatrix(sr),this.quaternion.premultiply(Ja.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(zg),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(cM),kd.child=e,this.dispatchEvent(kd),kd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),sr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),sr.multiply(e.parent.matrixWorld)),e.applyMatrix4(sr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(zg),Qa.child=e,this.dispatchEvent(Qa),Qa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,e,oM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(uo,lM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,a=e.y,s=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*a-l[8]*s,l[13]+=a-l[1]*t-l[5]*a-l[9]*s,l[14]+=s-l[2]*t-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t,a=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];l(e.shapes,x)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(l(e.materials,this.material[m]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];s.animations.push(l(e.animations,m))}}if(t){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),_=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),M.length>0&&(a.animations=M),w.length>0&&(a.nodes=w)}return a.object=s,a;function u(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Mn.DEFAULT_UP=new Q(0,1,0);Mn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Mn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Eo extends Mn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const uM={type:"move"};class zd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Eo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Eo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new Q,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new Q),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Eo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new Q,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new Q,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,a),S=this._getHandJoint(p,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=v.position.distanceTo(x.position),M=.02,w=.005;p.inputState.pinching&&_>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(uM)))}return d!==null&&(d.visible=s!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new Eo;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}const Rv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ir={h:0,s:0,l:0},Yl={h:0,s:0,l:0};function Hd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class wt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ai){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Lt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Lt.workingColorSpace){return this.r=e,this.g=t,this.b=a,Lt.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Lt.workingColorSpace){if(e=jy(e,1),t=At(t,0,1),a=At(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=Hd(u,l,e+1/3),this.g=Hd(u,l,e),this.b=Hd(u,l,e-1/3)}return Lt.colorSpaceToWorking(this,s),this}setStyle(e,t=ai){function a(l){l!==void 0&&parseFloat(l)<1&&mt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:mt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);mt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ai){const a=Rv[e.toLowerCase()];return a!==void 0?this.setHex(a,t):mt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=gr(e.r),this.g=gr(e.g),this.b=gr(e.b),this}copyLinearToSRGB(e){return this.r=xs(e.r),this.g=xs(e.g),this.b=xs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ai){return Lt.workingToColorSpace(Fn.copy(this),e),Math.round(At(Fn.r*255,0,255))*65536+Math.round(At(Fn.g*255,0,255))*256+Math.round(At(Fn.b*255,0,255))}getHexString(e=ai){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Lt.workingColorSpace){Lt.workingToColorSpace(Fn.copy(this),t);const a=Fn.r,s=Fn.g,l=Fn.b,u=Math.max(a,s,l),d=Math.min(a,s,l);let m,p;const v=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=v<=.5?x/(u+d):x/(2-u-d),u){case a:m=(s-l)/x+(s<l?6:0);break;case s:m=(l-a)/x+2;break;case l:m=(a-s)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,t=Lt.workingColorSpace){return Lt.workingToColorSpace(Fn.copy(this),t),e.r=Fn.r,e.g=Fn.g,e.b=Fn.b,e}getStyle(e=ai){Lt.workingToColorSpace(Fn.copy(this),e);const t=Fn.r,a=Fn.g,s=Fn.b;return e!==ai?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(Ir),this.setHSL(Ir.h+e,Ir.s+t,Ir.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Ir),e.getHSL(Yl);const a=Nd(Ir.h,Yl.h,t),s=Nd(Ir.s,Yl.s,t),l=Nd(Ir.l,Yl.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Fn=new wt;wt.NAMES=Rv;class dM extends Mn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Yr,this.environmentIntensity=1,this.environmentRotation=new Yr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Pi=new Q,or=new Q,Vd=new Q,lr=new Q,es=new Q,ts=new Q,Hg=new Q,Gd=new Q,Bd=new Q,Wd=new Q,Xd=new rn,$d=new rn,Yd=new rn;class _i{constructor(e=new Q,t=new Q,a=new Q){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),Pi.subVectors(e,t),s.cross(Pi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){Pi.subVectors(s,t),or.subVectors(a,t),Vd.subVectors(e,t);const u=Pi.dot(Pi),d=Pi.dot(or),m=Pi.dot(Vd),p=or.dot(or),v=or.dot(Vd),x=u*p-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,M=(p*m-d*v)*_,w=(u*v-d*m)*_;return l.set(1-M-w,w,M)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,lr)===null?!1:lr.x>=0&&lr.y>=0&&lr.x+lr.y<=1}static getInterpolation(e,t,a,s,l,u,d,m){return this.getBarycoord(e,t,a,s,lr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,lr.x),m.addScaledVector(u,lr.y),m.addScaledVector(d,lr.z),m)}static getInterpolatedAttribute(e,t,a,s,l,u){return Xd.setScalar(0),$d.setScalar(0),Yd.setScalar(0),Xd.fromBufferAttribute(e,t),$d.fromBufferAttribute(e,a),Yd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Xd,l.x),u.addScaledVector($d,l.y),u.addScaledVector(Yd,l.z),u}static isFrontFacing(e,t,a,s){return Pi.subVectors(a,t),or.subVectors(e,t),Pi.cross(or).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Pi.subVectors(this.c,this.b),or.subVectors(this.a,this.b),Pi.cross(or).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return _i.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return _i.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return _i.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return _i.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return _i.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,d;es.subVectors(s,a),ts.subVectors(l,a),Gd.subVectors(e,a);const m=es.dot(Gd),p=ts.dot(Gd);if(m<=0&&p<=0)return t.copy(a);Bd.subVectors(e,s);const v=es.dot(Bd),x=ts.dot(Bd);if(v>=0&&x<=v)return t.copy(s);const _=m*x-v*p;if(_<=0&&m>=0&&v<=0)return u=m/(m-v),t.copy(a).addScaledVector(es,u);Wd.subVectors(e,l);const M=es.dot(Wd),w=ts.dot(Wd);if(w>=0&&M<=w)return t.copy(l);const b=M*p-m*w;if(b<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(a).addScaledVector(ts,d);const y=v*w-M*x;if(y<=0&&x-v>=0&&M-w>=0)return Hg.subVectors(l,s),d=(x-v)/(x-v+(M-w)),t.copy(s).addScaledVector(Hg,d);const S=1/(y+b+_);return u=b*S,d=_*S,t.copy(a).addScaledVector(es,u).addScaledVector(ts,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Io{constructor(e=new Q(1/0,1/0,1/0),t=new Q(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(Li.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(Li.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=Li.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,Li):Li.fromBufferAttribute(l,u),Li.applyMatrix4(e.matrixWorld),this.expandByPoint(Li);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ql.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ql.copy(a.boundingBox)),ql.applyMatrix4(e.matrixWorld),this.union(ql)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,Li),Li.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(fo),Kl.subVectors(this.max,fo),ns.subVectors(e.a,fo),is.subVectors(e.b,fo),rs.subVectors(e.c,fo),kr.subVectors(is,ns),zr.subVectors(rs,is),pa.subVectors(ns,rs);let t=[0,-kr.z,kr.y,0,-zr.z,zr.y,0,-pa.z,pa.y,kr.z,0,-kr.x,zr.z,0,-zr.x,pa.z,0,-pa.x,-kr.y,kr.x,0,-zr.y,zr.x,0,-pa.y,pa.x,0];return!qd(t,ns,is,rs,Kl)||(t=[1,0,0,0,1,0,0,0,1],!qd(t,ns,is,rs,Kl))?!1:(jl.crossVectors(kr,zr),t=[jl.x,jl.y,jl.z],qd(t,ns,is,rs,Kl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,Li).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(Li).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const cr=[new Q,new Q,new Q,new Q,new Q,new Q,new Q,new Q],Li=new Q,ql=new Io,ns=new Q,is=new Q,rs=new Q,kr=new Q,zr=new Q,pa=new Q,fo=new Q,Kl=new Q,jl=new Q,ma=new Q;function qd(i,e,t,a,s){for(let l=0,u=i.length-3;l<=u;l+=3){ma.fromArray(i,l);const d=s.x*Math.abs(ma.x)+s.y*Math.abs(ma.y)+s.z*Math.abs(ma.z),m=e.dot(ma),p=t.dot(ma),v=a.dot(ma);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const un=new Q,Zl=new ot;let fM=0;class Jn extends Kr{constructor(e,t,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:fM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=wv,this.updateRanges=[],this.gpuType=Xi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Zl.fromBufferAttribute(this,t),Zl.applyMatrix3(e),this.setXY(t,Zl.x,Zl.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)un.fromBufferAttribute(this,t),un.applyMatrix3(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)un.fromBufferAttribute(this,t),un.applyMatrix4(e),this.setXYZ(t,un.x,un.y,un.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)un.fromBufferAttribute(this,t),un.applyNormalMatrix(e),this.setXYZ(t,un.x,un.y,un.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)un.fromBufferAttribute(this,t),un.transformDirection(e),this.setXYZ(t,un.x,un.y,un.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=Wi(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Xt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=Wi(t,this.array)),t}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=Wi(t,this.array)),t}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=Wi(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=Wi(t,this.array)),t}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),a=Xt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),a=Xt(a,this.array),s=Xt(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=Xt(t,this.array),a=Xt(a,this.array),s=Xt(s,this.array),l=Xt(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class bv extends Jn{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class Pv extends Jn{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class mn extends Jn{constructor(e,t,a){super(new Float32Array(e),t,a)}}const hM=new Io,ho=new Q,Kd=new Q;class Th{constructor(e=new Q,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):hM.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ho.subVectors(e,this.center);const t=ho.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(ho,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Kd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ho.copy(e.center).add(Kd)),this.expandByPoint(ho.copy(e.center).sub(Kd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let pM=0;const gi=new Qt,jd=new Mn,as=new Q,ri=new Io,po=new Io,yn=new Q;class Bn extends Kr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=Wr(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new($y(e)?Pv:bv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new xt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return gi.makeRotationFromQuaternion(e),this.applyMatrix4(gi),this}rotateX(e){return gi.makeRotationX(e),this.applyMatrix4(gi),this}rotateY(e){return gi.makeRotationY(e),this.applyMatrix4(gi),this}rotateZ(e){return gi.makeRotationZ(e),this.applyMatrix4(gi),this}translate(e,t,a){return gi.makeTranslation(e,t,a),this.applyMatrix4(gi),this}scale(e,t,a){return gi.makeScale(e,t,a),this.applyMatrix4(gi),this}lookAt(e){return jd.lookAt(e),jd.updateMatrix(),this.applyMatrix4(jd.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(as).negate(),this.translate(as.x,as.y,as.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new mn(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&mt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Io);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new Q(-1/0,-1/0,-1/0),new Q(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];ri.setFromBufferAttribute(l),this.morphTargetsRelative?(yn.addVectors(this.boundingBox.min,ri.min),this.boundingBox.expandByPoint(yn),yn.addVectors(this.boundingBox.max,ri.max),this.boundingBox.expandByPoint(yn)):(this.boundingBox.expandByPoint(ri.min),this.boundingBox.expandByPoint(ri.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Th);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new Q,1/0);return}if(e){const a=this.boundingSphere.center;if(ri.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];po.setFromBufferAttribute(d),this.morphTargetsRelative?(yn.addVectors(ri.min,po.min),ri.expandByPoint(yn),yn.addVectors(ri.max,po.max),ri.expandByPoint(yn)):(ri.expandByPoint(po.min),ri.expandByPoint(po.max))}ri.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)yn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(yn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)yn.fromBufferAttribute(d,p),m&&(as.fromBufferAttribute(e,p),yn.add(as)),s=Math.max(s,a.distanceToSquared(yn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new Jn(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new Q,m[T]=new Q;const p=new Q,v=new Q,x=new Q,_=new ot,M=new ot,w=new ot,b=new Q,y=new Q;function S(T,U,k){p.fromBufferAttribute(a,T),v.fromBufferAttribute(a,U),x.fromBufferAttribute(a,k),_.fromBufferAttribute(l,T),M.fromBufferAttribute(l,U),w.fromBufferAttribute(l,k),v.sub(p),x.sub(p),M.sub(_),w.sub(_);const G=1/(M.x*w.y-w.x*M.y);isFinite(G)&&(b.copy(v).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(G),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(G),d[T].add(b),d[U].add(b),d[k].add(b),m[T].add(y),m[U].add(y),m[k].add(y))}let N=this.groups;N.length===0&&(N=[{start:0,count:e.count}]);for(let T=0,U=N.length;T<U;++T){const k=N[T],G=k.start,j=k.count;for(let ie=G,H=G+j;ie<H;ie+=3)S(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const z=new Q,R=new Q,L=new Q,P=new Q;function I(T){L.fromBufferAttribute(s,T),P.copy(L);const U=d[T];z.copy(U),z.sub(L.multiplyScalar(L.dot(U))).normalize(),R.crossVectors(P,U);const G=R.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,G)}for(let T=0,U=N.length;T<U;++T){const k=N[T],G=k.start,j=k.count;for(let ie=G,H=G+j;ie<H;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==t.count)a=new Jn(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,M=a.count;_<M;_++)a.setXYZ(_,0,0,0);const s=new Q,l=new Q,u=new Q,d=new Q,m=new Q,p=new Q,v=new Q,x=new Q;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),d.fromBufferAttribute(a,w),m.fromBufferAttribute(a,b),p.fromBufferAttribute(a,y),d.add(v),m.add(v),p.add(v),a.setXYZ(w,d.x,d.y,d.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)yn.fromBufferAttribute(e,t),yn.normalize(),e.setXYZ(t,yn.x,yn.y,yn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,_=new p.constructor(m.length*v);let M=0,w=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*v;for(let S=0;S<v;S++)_[w++]=p[M++]}return new Jn(_,v,x)}if(this.index===null)return mt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new Bn,a=this.index.array,s=this.attributes;for(const d in s){const m=s[d],p=e(m,a);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const m=[],p=l[d];for(let v=0,x=p.length;v<x;v++){const _=p[v],M=e(_,a);m.push(M)}t.morphAttributes[d]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const s={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(s[m]=v,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const p in s){const v=s[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let _=0,M=x.length;_<M;_++)v.push(x[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class mM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=wv,this.updateRanges=[],this.version=0,this.uuid=Wr()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[a+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Wr()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const Vn=new Q;class Fc{constructor(e,t,a,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)Vn.fromBufferAttribute(this,t),Vn.applyMatrix4(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)Vn.fromBufferAttribute(this,t),Vn.applyNormalMatrix(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)Vn.fromBufferAttribute(this,t),Vn.transformDirection(e),this.setXYZ(t,Vn.x,Vn.y,Vn.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=Wi(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Xt(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Xt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=Wi(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=Wi(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=Wi(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=Wi(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),a=Xt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),a=Xt(a,this.array),s=Xt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Xt(t,this.array),a=Xt(a,this.array),s=Xt(s,this.array),l=Xt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Uc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new Jn(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Fc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Uc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Zd=new Q,gM=new Q,vM=new xt;class fr{constructor(e=new Q(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=Zd.subVectors(a,t).cross(gM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,a=!0){const s=e.delta(Zd),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return a===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||vM.getNormalMatrix(e),s=this.coplanarPoint(Zd).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let _M=0;class Ts extends Kr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:_M++}),this.uuid=Wr(),this.name="",this.type="Material",this.blending=Ao,this.side=Ea,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=ov,this.blendDst=lv,this.blendEquation=ps,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new wt(0,0,0),this.blendAlpha=0,this.depthFunc=Lo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=zy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Dd,this.stencilZFail=Dd,this.stencilZPass=Dd,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){mt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){mt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector2&&a&&a.isVector2||s&&s.isEuler&&a&&a.isEuler||s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new wt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new fr().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new ot().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ot().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Lv extends Ts{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new wt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let ss;const mo=new Q,os=new Q,ls=new Q,cs=new ot,go=new ot,Dv=new Qt,Jl=new Q,vo=new Q,Ql=new Q,Vg=new ot,Jd=new ot,Gg=new ot;class xM extends Mn{constructor(e=new Lv){if(super(),this.isSprite=!0,this.type="Sprite",ss===void 0){ss=new Bn;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new mM(t,5);ss.setIndex([0,1,2,0,2,3]),ss.setAttribute("position",new Fc(a,3,0,!1)),ss.setAttribute("uv",new Fc(a,2,3,!1))}this.geometry=ss,this.material=e,this.center=new ot(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&Ut('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),os.setFromMatrixScale(this.matrixWorld),Dv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),ls.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&os.multiplyScalar(-ls.z);const a=this.material.rotation;let s,l;a!==0&&(l=Math.cos(a),s=Math.sin(a));const u=this.center;ec(Jl.set(-.5,-.5,0),ls,u,os,s,l),ec(vo.set(.5,-.5,0),ls,u,os,s,l),ec(Ql.set(.5,.5,0),ls,u,os,s,l),Vg.set(0,0),Jd.set(1,0),Gg.set(1,1);let d=e.ray.intersectTriangle(Jl,vo,Ql,!1,mo);if(d===null&&(ec(vo.set(-.5,.5,0),ls,u,os,s,l),Jd.set(0,1),d=e.ray.intersectTriangle(Jl,Ql,vo,!1,mo),d===null))return;const m=e.ray.origin.distanceTo(mo);m<e.near||m>e.far||t.push({distance:m,point:mo.clone(),uv:_i.getInterpolation(mo,Jl,vo,Ql,Vg,Jd,Gg,new ot),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ec(i,e,t,a,s,l){cs.subVectors(i,t).addScalar(.5).multiply(a),s!==void 0?(go.x=l*cs.x-s*cs.y,go.y=s*cs.x+l*cs.y):go.copy(cs),i.copy(e),i.x+=go.x,i.y+=go.y,i.applyMatrix4(Dv)}const ur=new Q,Qd=new Q,tc=new Q,nc=new Q;class wh{constructor(e=new Q,t=new Q(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,ur)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=ur.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(ur.copy(this.origin).addScaledVector(this.direction,t),ur.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){Qd.copy(e).add(t).multiplyScalar(.5),tc.copy(t).sub(e).normalize(),nc.copy(this.origin).sub(Qd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(tc),d=nc.dot(this.direction),m=-nc.dot(tc),p=nc.lengthSq(),v=Math.abs(1-u*u);let x,_,M,w;if(v>0)if(x=u*m-d,_=u*d-m,w=l*v,x>=0)if(_>=-w)if(_<=w){const b=1/v;x*=b,_*=b,M=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _=-l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _<=-w?(x=Math.max(0,-(-u*l+d)),_=x>0?-l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p):_<=w?(x=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(x=Math.max(0,-(u*l+d)),_=x>0?l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p);else _=u>0?-l:l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(Qd).addScaledVector(tc,_),M}intersectSphere(e,t){if(e.radius<0)return null;ur.subVectors(e.center,this.origin);const a=ur.dot(this.direction),s=ur.dot(ur)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,s=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,s=(e.min.x-_.x)*p),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>s)||((d>a||a!==a)&&(a=d),(m<s||s!==s)&&(s=m),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,ur)!==null}intersectTriangle(e,t,a,s,l){const u=this.origin,d=this.direction,m=d.x,p=d.y,v=d.z,x=e.x-u.x,_=e.y-u.y,M=e.z-u.z,w=t.x-u.x,b=t.y-u.y,y=t.z-u.z,S=a.x-u.x,N=a.y-u.y,z=a.z-u.z,R=Math.abs(m),L=Math.abs(p),P=Math.abs(v);let I,T,U,k,G,j,ie,H,ee,le,se,$;if(R>=L&&R>=P?(U=m,j=x,ee=w,$=S,m>=0?(I=p,T=v,k=_,G=M,ie=b,H=y,le=N,se=z):(I=v,T=p,k=M,G=_,ie=y,H=b,le=z,se=N)):L>=P?(U=p,j=_,ee=b,$=N,p>=0?(I=v,T=m,k=M,G=x,ie=y,H=w,le=z,se=S):(I=m,T=v,k=x,G=M,ie=w,H=y,le=S,se=z)):(U=v,j=M,ee=y,$=z,v>=0?(I=m,T=p,k=x,G=_,ie=w,H=b,le=S,se=N):(I=p,T=m,k=_,G=x,ie=b,H=w,le=N,se=S)),U===0)return null;const K=I/U,Z=T/U,D=1/U,J=k-K*j,ye=G-Z*j,Ge=ie-K*ee,We=H-Z*ee,Ye=le-K*$,oe=se-Z*$,fe=Ye*We-oe*Ge,we=J*oe-ye*Ye,Qe=Ge*ye-We*J;if(s){if(fe<0||we<0||Qe<0)return null}else if((fe<0||we<0||Qe<0)&&(fe>0||we>0||Qe>0))return null;const Re=fe+we+Qe;if(Re===0)return null;const St=D*(fe*j+we*ee+Qe*$);return(Re>0?St<0:St>0)?null:this.at(St/Re,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Ah extends Ts{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new wt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.combine=cv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bg=new Qt,ga=new wh,ic=new Th,Wg=new Q,rc=new Q,ac=new Q,sc=new Q,ef=new Q,oc=new Q,Xg=new Q,lc=new Q;class oi extends Mn{constructor(e=new Bn,t=new Ah){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(l&&d){oc.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=d[m],x=l[m];v!==0&&(ef.fromBufferAttribute(x,e),u?oc.addScaledVector(ef,v):oc.addScaledVector(ef.sub(t),v))}t.add(oc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),ic.copy(a.boundingSphere),ic.applyMatrix4(l),ga.copy(e.ray).recast(e.near),!(ic.containsPoint(ga.origin)===!1&&(ga.intersectSphere(ic,Wg)===null||ga.origin.distanceToSquared(Wg)>(e.far-e.near)**2))&&(Bg.copy(l).invert(),ga.copy(e.ray).applyMatrix4(Bg),!(a.boundingBox!==null&&ga.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ga)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,d=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,_=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,b=_.length;w<b;w++){const y=_[w],S=u[y.materialIndex],N=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=N,L=z;R<L;R+=3){const P=d.getX(R),I=d.getX(R+1),T=d.getX(R+2);s=cc(this,S,e,a,p,v,x,P,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const w=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=w,S=b;y<S;y+=3){const N=d.getX(y),z=d.getX(y+1),R=d.getX(y+2);s=cc(this,u,e,a,p,v,x,N,z,R),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,b=_.length;w<b;w++){const y=_[w],S=u[y.materialIndex],N=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let R=N,L=z;R<L;R+=3){const P=R,I=R+1,T=R+2;s=cc(this,S,e,a,p,v,x,P,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const w=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=w,S=b;y<S;y+=3){const N=y,z=y+1,R=y+2;s=cc(this,u,e,a,p,v,x,N,z,R),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function SM(i,e,t,a,s,l,u,d){let m;if(e.side===Zn?m=a.intersectTriangle(u,l,s,!0,d):m=a.intersectTriangle(s,l,u,e.side===Ea,d),m===null)return null;lc.copy(d),lc.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(lc);return p<t.near||p>t.far?null:{distance:p,point:lc.clone(),object:i}}function cc(i,e,t,a,s,l,u,d,m,p){i.getVertexPosition(d,rc),i.getVertexPosition(m,ac),i.getVertexPosition(p,sc);const v=SM(i,e,t,a,rc,ac,sc,Xg);if(v){const x=new Q;_i.getBarycoord(Xg,rc,ac,sc,x),s&&(v.uv=_i.getInterpolatedAttribute(s,d,m,p,x,new ot)),l&&(v.uv1=_i.getInterpolatedAttribute(l,d,m,p,x,new ot)),u&&(v.normal=_i.getInterpolatedAttribute(u,d,m,p,x,new Q),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new Q,materialIndex:0};_i.getNormal(rc,ac,sc,_.normal),v.face=_,v.barycoord=x}return v}class yM extends In{constructor(e=null,t=1,a=1,s,l,u,d,m,p=Cn,v=Cn,x,_){super(null,u,d,m,p,v,s,l,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const va=new Th,MM=new ot(.5,.5),uc=new Q;class Ch{constructor(e=new fr,t=new fr,a=new fr,s=new fr,l=new fr,u=new fr){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(a),d[3].copy(s),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=$i,a=!1){const s=this.planes,l=e.elements,u=l[0],d=l[1],m=l[2],p=l[3],v=l[4],x=l[5],_=l[6],M=l[7],w=l[8],b=l[9],y=l[10],S=l[11],N=l[12],z=l[13],R=l[14],L=l[15];if(s[0].setComponents(p-u,M-v,S-w,L-N).normalize(),s[1].setComponents(p+u,M+v,S+w,L+N).normalize(),s[2].setComponents(p+d,M+x,S+b,L+z).normalize(),s[3].setComponents(p-d,M-x,S-b,L-z).normalize(),a)s[4].setComponents(m,_,y,R).normalize(),s[5].setComponents(p-m,M-_,S-y,L-R).normalize();else if(s[4].setComponents(p-m,M-_,S-y,L-R).normalize(),t===$i)s[5].setComponents(p+m,M+_,S+y,L+R).normalize();else if(t===Uo)s[5].setComponents(m,_,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),va.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),va.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(va)}intersectsSprite(e){va.center.set(0,0,0);const t=MM.distanceTo(e.center);return va.radius=.7071067811865476+t,va.applyMatrix4(e.matrixWorld),this.intersectsSphere(va)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(uc.x=s.normal.x>0?e.max.x:e.min.x,uc.y=s.normal.y>0?e.max.y:e.min.y,uc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(uc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Nv extends In{constructor(e=[],t=Ta,a,s,l,u,d,m,p,v){super(e,t,a,s,l,u,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class EM extends In{constructor(e,t,a,s,l,u,d,m,p){super(e,t,a,s,l,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Fo extends In{constructor(e,t,a=qi,s,l,u,d=Cn,m=Cn,p,v=vr,x=1){if(v!==vr&&v!==Sa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,s,l,u,d,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Mh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class TM extends Fo{constructor(e,t=qi,a=Ta,s,l,u=Cn,d=Cn,m,p=vr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,a,s,l,u,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Uv extends In{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class ko extends Bn{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const d=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],x=[];let _=0,M=0;w("z","y","x",-1,-1,a,t,e,u,l,0),w("z","y","x",1,-1,a,t,-e,u,l,1),w("x","z","y",1,1,e,a,t,s,u,2),w("x","z","y",1,-1,e,a,-t,s,u,3),w("x","y","z",1,-1,e,t,a,s,l,4),w("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(m),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(x,2));function w(b,y,S,N,z,R,L,P,I,T,U){const k=R/I,G=L/T,j=R/2,ie=L/2,H=P/2,ee=I+1,le=T+1;let se=0,$=0;const K=new Q;for(let Z=0;Z<le;Z++){const D=Z*G-ie;for(let J=0;J<ee;J++){const ye=J*k-j;K[b]=ye*N,K[y]=D*z,K[S]=H,p.push(K.x,K.y,K.z),K[b]=0,K[y]=0,K[S]=P>0?1:-1,v.push(K.x,K.y,K.z),x.push(J/I),x.push(1-Z/T),se+=1}}for(let Z=0;Z<T;Z++)for(let D=0;D<I;D++){const J=_+D+ee*Z,ye=_+D+ee*(Z+1),Ge=_+(D+1)+ee*(Z+1),We=_+(D+1)+ee*Z;m.push(J,ye,We),m.push(ye,Ge,We),$+=6}d.addGroup(M,$,U),M+=$,_+=se}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ko(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Bc extends Bn{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,d=Math.floor(a),m=Math.floor(s),p=d+1,v=m+1,x=e/d,_=t/m,M=[],w=[],b=[],y=[];for(let S=0;S<v;S++){const N=S*_-u;for(let z=0;z<p;z++){const R=z*x-l;w.push(R,-N,0),b.push(0,0,1),y.push(z/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let N=0;N<d;N++){const z=N+p*S,R=N+p*(S+1),L=N+1+p*(S+1),P=N+1+p*S;M.push(z,R,P),M.push(R,L,P)}this.setIndex(M),this.setAttribute("position",new mn(w,3)),this.setAttribute("normal",new mn(b,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Bc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Rh extends Bn{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const v=[],x=new Q,_=new Q,M=[],w=[],b=[],y=[];for(let S=0;S<=a;S++){const N=[],z=S/a,R=u+z*d,L=e*Math.cos(R),P=Math.sqrt(e*e-L*L);let I=0;S===0&&u===0?I=.5/t:S===a&&m===Math.PI&&(I=-.5/t);for(let T=0;T<=t;T++){const U=T/t,k=s+U*l;x.x=-P*Math.cos(k),x.y=L,x.z=P*Math.sin(k),w.push(x.x,x.y,x.z),_.copy(x).normalize(),b.push(_.x,_.y,_.z),y.push(U+I,1-z),N.push(p++)}v.push(N)}for(let S=0;S<a;S++)for(let N=0;N<t;N++){const z=v[S][N+1],R=v[S][N],L=v[S+1][N],P=v[S+1][N+1];(S!==0||u>0)&&M.push(z,R,P),(S!==a-1||m<Math.PI)&&M.push(R,L,P)}this.setIndex(M),this.setAttribute("position",new mn(w,3)),this.setAttribute("normal",new mn(b,3)),this.setAttribute("uv",new mn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Rh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class bh extends Bn{constructor(e=1,t=.4,a=12,s=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:s,arc:l,thetaStart:u,thetaLength:d},a=Math.floor(a),s=Math.floor(s);const m=[],p=[],v=[],x=[],_=new Q,M=new Q,w=new Q;for(let b=0;b<=a;b++){const y=u+b/a*d;for(let S=0;S<=s;S++){const N=S/s*l;M.x=(e+t*Math.cos(y))*Math.cos(N),M.y=(e+t*Math.cos(y))*Math.sin(N),M.z=t*Math.sin(y),p.push(M.x,M.y,M.z),_.x=e*Math.cos(N),_.y=e*Math.sin(N),w.subVectors(M,_).normalize(),v.push(w.x,w.y,w.z),x.push(S/s),x.push(b/a)}}for(let b=1;b<=a;b++)for(let y=1;y<=s;y++){const S=(s+1)*b+y-1,N=(s+1)*(b-1)+y-1,z=(s+1)*(b-1)+y,R=(s+1)*b+y;m.push(S,N,R),m.push(N,z,R)}this.setIndex(m),this.setAttribute("position",new mn(p,3)),this.setAttribute("normal",new mn(v,3)),this.setAttribute("uv",new mn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Es(i){const e={};for(const t in i){e[t]={};for(const a in i[t]){const s=i[t][a];if($g(s))s.isRenderTargetTexture?(mt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone();else if(Array.isArray(s))if($g(s[0])){const l=[];for(let u=0,d=s.length;u<d;u++)l[u]=s[u].clone();e[t][a]=l}else e[t][a]=s.slice();else e[t][a]=s}}return e}function Gn(i){const e={};for(let t=0;t<i.length;t++){const a=Es(i[t]);for(const s in a)e[s]=a[s]}return e}function $g(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function wM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Fv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Lt.workingColorSpace}const AM={clone:Es,merge:Gn};var CM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,RM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class ji extends Ts{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=CM,this.fragmentShader=RM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Es(e.uniforms),this.uniformsGroups=wM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const a in e.uniforms){const s=e.uniforms[a];switch(this.uniforms[a]={},s.type){case"t":this.uniforms[a].value=t[s.value]||null;break;case"c":this.uniforms[a].value=new wt().setHex(s.value);break;case"v2":this.uniforms[a].value=new ot().fromArray(s.value);break;case"v3":this.uniforms[a].value=new Q().fromArray(s.value);break;case"v4":this.uniforms[a].value=new rn().fromArray(s.value);break;case"m3":this.uniforms[a].value=new xt().fromArray(s.value);break;case"m4":this.uniforms[a].value=new Qt().fromArray(s.value);break;default:this.uniforms[a].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class bM extends ji{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Yg extends Ts{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new wt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new wt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Qf,this.normalScale=new ot(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Yr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class PM extends Ts{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Iy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class LM extends Ts{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const qg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Kg(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Kg(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Kg(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class DM{constructor(e,t,a){const s=this;let l=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(v){d++,l===!1&&s.onStart!==void 0&&s.onStart(v,u,d),l=!0},this.itemEnd=function(v){u++,s.onProgress!==void 0&&s.onProgress(v,u,d),u===d&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(v){s.onError!==void 0&&s.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return p.push(v,x),this},this.removeHandler=function(v){const x=p.indexOf(v);return x!==-1&&p.splice(x,2),this},this.getHandler=function(v){for(let x=0,_=p.length;x<_;x+=2){const M=p[x],w=p[x+1];if(M.global&&(M.lastIndex=0),M.test(v))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const NM=new DM;class Ph{constructor(e){this.manager=e!==void 0?e:NM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ph.DEFAULT_MATERIAL_NAME="__DEFAULT";const dr={};class UM extends Error{constructor(e,t){super(e),this.response=t}}class FM extends Ph{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=qg.get(`file:${e}`);if(l!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0);return}if(dr[e]!==void 0){dr[e].push({onLoad:t,onProgress:a,onError:s});return}dr[e]=[],dr[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&mt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=dr[e],x=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=_?parseInt(_):0,w=M!==0;let b=0;const y=new ReadableStream({start(S){N();function N(){x.read().then(({done:z,value:R})=>{if(z)S.close();else{b+=R.byteLength;const L=new ProgressEvent("progress",{lengthComputable:w,loaded:b,total:M});for(let P=0,I=v.length;P<I;P++){const T=v[P];T.onProgress&&T.onProgress(L)}S.enqueue(R),N()}},z=>{S.error(z)})}}});return new Response(y)}else throw new UM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),_=x&&x[1]?x[1].toLowerCase():void 0,M=new TextDecoder(_);return p.arrayBuffer().then(w=>M.decode(w))}}}).then(p=>{qg.add(`file:${e}`,p);const v=dr[e];delete dr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=dr[e];if(v===void 0)throw this.manager.itemError(e),p;delete dr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Ov extends Mn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new wt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class OM extends Ov{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new wt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const tf=new Qt,jg=new Q,Zg=new Q;class IM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ot(512,512),this.mapType=si,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ch,this._frameExtents=new ot(1,1),this._viewportCount=1,this._viewports=[new rn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;jg.setFromMatrixPosition(e.matrixWorld),t.position.copy(jg),Zg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Zg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,a,s){tf.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(tf,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=s?s.z/l.x:1,d=s?s.w/l.y:1,m=s?s.x/l.x:0,p=s?s.y/l.y:0;e.coordinateSystem===Uo||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(tf)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const dc=new Q,fc=new $r,Vi=new Q;class Iv extends Mn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=$i,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(dc,fc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,fc,Vi.set(1,1,1)).invert()}updateWorldMatrix(e,t,a=!1){super.updateWorldMatrix(e,t,a),this.matrixWorld.decompose(dc,fc,Vi),Vi.x===1&&Vi.y===1&&Vi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(dc,fc,Vi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Hr=new Q,Jg=new ot,Qg=new ot;class vi extends Iv{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=eh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return eh*2*Math.atan(Math.tan(Tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){Hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z),Hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(Hr.x,Hr.y).multiplyScalar(-e/Hr.z)}getViewSize(e,t){return this.getViewBounds(e,Jg,Qg),t.subVectors(Qg,Jg)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Tc*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*s/m,t-=u.offsetY*a/p,s*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class Lh extends Iv{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,d=s+t,m=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class kM extends IM{constructor(){super(new Lh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class e0 extends Ov{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Mn.DEFAULT_UP),this.updateMatrix(),this.target=new Mn,this.shadow=new kM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const us=-90,ds=1;class zM extends Mn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new vi(us,ds,e,t);s.layers=this.layers,this.add(s);const l=new vi(us,ds,e,t);l.layers=this.layers,this.add(l);const u=new vi(us,ds,e,t);u.layers=this.layers,this.add(u);const d=new vi(us,ds,e,t);d.layers=this.layers,this.add(d);const m=new vi(us,ds,e,t);m.layers=this.layers,this.add(m);const p=new vi(us,ds,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,d,m]=t;for(const p of t)this.remove(p);if(e===$i)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Uo)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,m,p,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(a,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(a,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(a,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),a.texture.generateMipmaps=b,e.setRenderTarget(a,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,_,M),e.xr.enabled=w,a.texture.needsPMREMUpdate=!0}}class HM extends vi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const t0=new Qt;class VM{constructor(e,t,a=0,s=1/0){this.ray=new wh(e,t),this.near=a,this.far=s,this.camera=null,this.layers=new Eh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return t0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(t0),this}intersectObject(e,t=!0,a=[]){return th(e,this,a,t),a.sort(n0),a}intersectObjects(e,t=!0,a=[]){for(let s=0,l=e.length;s<l;s++)th(e[s],this,a,t);return a.sort(n0),a}}function n0(i,e){return i.distance-e.distance}function th(i,e,t,a){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&a===!0){const l=i.children;for(let u=0,d=l.length;u<d;u++)th(l[u],e,t,!0)}}class i0{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=At(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(At(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Ih=class Ih{constructor(e,t,a,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,a,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let a=0;a<4;a++)this.elements[a]=e[a+t];return this}set(e,t,a,s){const l=this.elements;return l[0]=e,l[2]=t,l[1]=a,l[3]=s,this}};Ih.prototype.isMatrix2=!0;let r0=Ih;class GM extends Kr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function a0(i,e,t,a){const s=BM(a);switch(t){case Mv:return i*e;case Tv:return i*e/s.components*s.byteLength;case vh:return i*e/s.components*s.byteLength;case wa:return i*e*2/s.components*s.byteLength;case _h:return i*e*2/s.components*s.byteLength;case Ev:return i*e*3/s.components*s.byteLength;case Ui:return i*e*4/s.components*s.byteLength;case xh:return i*e*4/s.components*s.byteLength;case Sc:case yc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Mc:case Ec:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Tf:case Af:return Math.max(i,16)*Math.max(e,8)/4;case Ef:case wf:return Math.max(i,8)*Math.max(e,8)/2;case Cf:case Rf:case Pf:case Lf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bf:case bc:case Df:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Nf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Uf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Ff:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Of:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case If:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case kf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case zf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Hf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Vf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Gf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Bf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Wf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Xf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case $f:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Yf:case qf:case Kf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case jf:case Zf:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Pc:case Jf:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function BM(i){switch(i){case si:case _v:return{byteLength:1,components:1};case Do:case xv:case Ki:return{byteLength:2,components:1};case mh:case gh:return{byteLength:2,components:4};case qi:case ph:case Xi:return{byteLength:4,components:1};case Sv:case yv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:hh}}));typeof window<"u"&&(window.__THREE__?mt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=hh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function kv(){let i=null,e=!1,t=null,a=null;function s(l,u){a=i.requestAnimationFrame(s),t(l,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(a=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function WM(i){const e=new WeakMap;function t(d,m){const p=d.array,v=d.usage,x=p.byteLength,_=i.createBuffer();i.bindBuffer(m,_),i.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=i.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const v=m.array,x=m.updateRanges;if(i.bindBuffer(p,d),x.length===0)i.bufferSubData(p,0,v);else{x.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<x.length;M++){const w=x[_],b=x[M];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++_,x[_]=b)}x.length=_+1;for(let M=0,w=x.length;M<w;M++){const b=x[M];i.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(i.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:s,remove:l,update:u}}var XM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,$M=`#ifdef USE_ALPHAHASH
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
#endif`,YM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,qM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,KM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,jM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ZM=`#ifdef USE_AOMAP
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
#endif`,JM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,QM=`#ifdef USE_BATCHING
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
#endif`,eE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,tE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,nE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,iE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,rE=`#ifdef USE_IRIDESCENCE
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
#endif`,aE=`#ifdef USE_BUMPMAP
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
#endif`,sE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,oE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,lE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,cE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,uE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,dE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,fE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,hE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,pE=`#define PI 3.141592653589793
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
} // validated`,mE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,gE=`vec3 transformedNormal = objectNormal;
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
#endif`,vE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,_E=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,xE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,SE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,yE="gl_FragColor = linearToOutputTexel( gl_FragColor );",ME=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,EE=`#ifdef USE_ENVMAP
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
#endif`,TE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,wE=`#ifdef USE_ENVMAP
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
#endif`,AE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,CE=`#ifdef USE_ENVMAP
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
#endif`,RE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,bE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,PE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,LE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,DE=`#ifdef USE_GRADIENTMAP
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
}`,NE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,UE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,FE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,OE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,IE=`#ifdef USE_ENVMAP
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
#endif`,kE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,zE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,HE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,VE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,GE=`PhysicalMaterial material;
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
#endif`,BE=`uniform sampler2D dfgLUT;
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
}`,WE=`
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
#endif`,XE=`#if defined( RE_IndirectDiffuse )
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
#endif`,$E=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,YE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,qE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,KE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,jE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,ZE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,JE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,QE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,eT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,tT=`#if defined( USE_POINTS_UV )
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
#endif`,nT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,iT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,rT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,aT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,sT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,oT=`#ifdef USE_MORPHTARGETS
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
#endif`,lT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,cT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,uT=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,dT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,fT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,hT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,pT=`#ifdef USE_NORMALMAP
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
#endif`,mT=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,gT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,vT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,_T=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,xT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,ST=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,yT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,MT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,ET=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,TT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,wT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,AT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,CT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,RT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,bT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,PT=`float getShadowMask() {
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
}`,LT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,DT=`#ifdef USE_SKINNING
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
#endif`,NT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,UT=`#ifdef USE_SKINNING
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
#endif`,FT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,OT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,IT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,kT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,zT=`#ifdef USE_TRANSMISSION
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
#endif`,HT=`#ifdef USE_TRANSMISSION
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
#endif`,VT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,GT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,BT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,WT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const XT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,$T=`uniform sampler2D t2D;
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
}`,YT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,qT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,KT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,jT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,ZT=`#include <common>
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
}`,JT=`#if DEPTH_PACKING == 3200
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
}`,QT=`#define DISTANCE
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
}`,ew=`#define DISTANCE
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,nw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,iw=`uniform float scale;
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
}`,rw=`uniform vec3 diffuse;
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
}`,aw=`#include <common>
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
}`,sw=`uniform vec3 diffuse;
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
}`,ow=`#define LAMBERT
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
}`,lw=`#define LAMBERT
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
}`,cw=`#define MATCAP
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
}`,uw=`#define MATCAP
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
}`,dw=`#define NORMAL
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
}`,fw=`#define NORMAL
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
}`,hw=`#define PHONG
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
}`,pw=`#define PHONG
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
}`,mw=`#define STANDARD
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
}`,gw=`#define STANDARD
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
}`,vw=`#define TOON
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
}`,_w=`#define TOON
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
}`,xw=`uniform float size;
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
}`,Sw=`uniform vec3 diffuse;
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
}`,yw=`#include <common>
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
}`,Mw=`uniform vec3 color;
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
}`,Ew=`uniform float rotation;
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
}`,Tw=`uniform vec3 diffuse;
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
}`,Et={alphahash_fragment:XM,alphahash_pars_fragment:$M,alphamap_fragment:YM,alphamap_pars_fragment:qM,alphatest_fragment:KM,alphatest_pars_fragment:jM,aomap_fragment:ZM,aomap_pars_fragment:JM,batching_pars_vertex:QM,batching_vertex:eE,begin_vertex:tE,beginnormal_vertex:nE,bsdfs:iE,iridescence_fragment:rE,bumpmap_pars_fragment:aE,clipping_planes_fragment:sE,clipping_planes_pars_fragment:oE,clipping_planes_pars_vertex:lE,clipping_planes_vertex:cE,color_fragment:uE,color_pars_fragment:dE,color_pars_vertex:fE,color_vertex:hE,common:pE,cube_uv_reflection_fragment:mE,defaultnormal_vertex:gE,displacementmap_pars_vertex:vE,displacementmap_vertex:_E,emissivemap_fragment:xE,emissivemap_pars_fragment:SE,colorspace_fragment:yE,colorspace_pars_fragment:ME,envmap_fragment:EE,envmap_common_pars_fragment:TE,envmap_pars_fragment:wE,envmap_pars_vertex:AE,envmap_physical_pars_fragment:IE,envmap_vertex:CE,fog_vertex:RE,fog_pars_vertex:bE,fog_fragment:PE,fog_pars_fragment:LE,gradientmap_pars_fragment:DE,lightmap_pars_fragment:NE,lights_lambert_fragment:UE,lights_lambert_pars_fragment:FE,lights_pars_begin:OE,lights_toon_fragment:kE,lights_toon_pars_fragment:zE,lights_phong_fragment:HE,lights_phong_pars_fragment:VE,lights_physical_fragment:GE,lights_physical_pars_fragment:BE,lights_fragment_begin:WE,lights_fragment_maps:XE,lights_fragment_end:$E,lightprobes_pars_fragment:YE,logdepthbuf_fragment:qE,logdepthbuf_pars_fragment:KE,logdepthbuf_pars_vertex:jE,logdepthbuf_vertex:ZE,map_fragment:JE,map_pars_fragment:QE,map_particle_fragment:eT,map_particle_pars_fragment:tT,metalnessmap_fragment:nT,metalnessmap_pars_fragment:iT,morphinstance_vertex:rT,morphcolor_vertex:aT,morphnormal_vertex:sT,morphtarget_pars_vertex:oT,morphtarget_vertex:lT,normal_fragment_begin:cT,normal_fragment_maps:uT,normal_pars_fragment:dT,normal_pars_vertex:fT,normal_vertex:hT,normalmap_pars_fragment:pT,clearcoat_normal_fragment_begin:mT,clearcoat_normal_fragment_maps:gT,clearcoat_pars_fragment:vT,iridescence_pars_fragment:_T,opaque_fragment:xT,packing:ST,premultiplied_alpha_fragment:yT,project_vertex:MT,dithering_fragment:ET,dithering_pars_fragment:TT,roughnessmap_fragment:wT,roughnessmap_pars_fragment:AT,shadowmap_pars_fragment:CT,shadowmap_pars_vertex:RT,shadowmap_vertex:bT,shadowmask_pars_fragment:PT,skinbase_vertex:LT,skinning_pars_vertex:DT,skinning_vertex:NT,skinnormal_vertex:UT,specularmap_fragment:FT,specularmap_pars_fragment:OT,tonemapping_fragment:IT,tonemapping_pars_fragment:kT,transmission_fragment:zT,transmission_pars_fragment:HT,uv_pars_fragment:VT,uv_pars_vertex:GT,uv_vertex:BT,worldpos_vertex:WT,background_vert:XT,background_frag:$T,backgroundCube_vert:YT,backgroundCube_frag:qT,cube_vert:KT,cube_frag:jT,depth_vert:ZT,depth_frag:JT,distance_vert:QT,distance_frag:ew,equirect_vert:tw,equirect_frag:nw,linedashed_vert:iw,linedashed_frag:rw,meshbasic_vert:aw,meshbasic_frag:sw,meshlambert_vert:ow,meshlambert_frag:lw,meshmatcap_vert:cw,meshmatcap_frag:uw,meshnormal_vert:dw,meshnormal_frag:fw,meshphong_vert:hw,meshphong_frag:pw,meshphysical_vert:mw,meshphysical_frag:gw,meshtoon_vert:vw,meshtoon_frag:_w,points_vert:xw,points_frag:Sw,shadow_vert:yw,shadow_frag:Mw,sprite_vert:Ew,sprite_frag:Tw},ke={common:{diffuse:{value:new wt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new xt}},envmap:{envMap:{value:null},envMapRotation:{value:new xt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new xt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new xt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new xt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new xt},normalScale:{value:new ot(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new xt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new xt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new xt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new xt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new wt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new Q},probesMax:{value:new Q},probesResolution:{value:new Q}},points:{diffuse:{value:new wt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0},uvTransform:{value:new xt}},sprite:{diffuse:{value:new wt(16777215)},opacity:{value:1},center:{value:new ot(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new xt},alphaMap:{value:null},alphaMapTransform:{value:new xt},alphaTest:{value:0}}},Bi={basic:{uniforms:Gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:Et.meshbasic_vert,fragmentShader:Et.meshbasic_frag},lambert:{uniforms:Gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},envMapIntensity:{value:1}}]),vertexShader:Et.meshlambert_vert,fragmentShader:Et.meshlambert_frag},phong:{uniforms:Gn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},specular:{value:new wt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Et.meshphong_vert,fragmentShader:Et.meshphong_frag},standard:{uniforms:Gn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new wt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag},toon:{uniforms:Gn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new wt(0)}}]),vertexShader:Et.meshtoon_vert,fragmentShader:Et.meshtoon_frag},matcap:{uniforms:Gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:Et.meshmatcap_vert,fragmentShader:Et.meshmatcap_frag},points:{uniforms:Gn([ke.points,ke.fog]),vertexShader:Et.points_vert,fragmentShader:Et.points_frag},dashed:{uniforms:Gn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Et.linedashed_vert,fragmentShader:Et.linedashed_frag},depth:{uniforms:Gn([ke.common,ke.displacementmap]),vertexShader:Et.depth_vert,fragmentShader:Et.depth_frag},normal:{uniforms:Gn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:Et.meshnormal_vert,fragmentShader:Et.meshnormal_frag},sprite:{uniforms:Gn([ke.sprite,ke.fog]),vertexShader:Et.sprite_vert,fragmentShader:Et.sprite_frag},background:{uniforms:{uvTransform:{value:new xt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Et.background_vert,fragmentShader:Et.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new xt}},vertexShader:Et.backgroundCube_vert,fragmentShader:Et.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Et.cube_vert,fragmentShader:Et.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Et.equirect_vert,fragmentShader:Et.equirect_frag},distance:{uniforms:Gn([ke.common,ke.displacementmap,{referencePosition:{value:new Q},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Et.distance_vert,fragmentShader:Et.distance_frag},shadow:{uniforms:Gn([ke.lights,ke.fog,{color:{value:new wt(0)},opacity:{value:1}}]),vertexShader:Et.shadow_vert,fragmentShader:Et.shadow_frag}};Bi.physical={uniforms:Gn([Bi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new xt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new xt},clearcoatNormalScale:{value:new ot(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new xt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new xt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new xt},sheen:{value:0},sheenColor:{value:new wt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new xt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new xt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new xt},transmissionSamplerSize:{value:new ot},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new xt},attenuationDistance:{value:0},attenuationColor:{value:new wt(0)},specularColor:{value:new wt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new xt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new xt},anisotropyVector:{value:new ot},anisotropyMap:{value:null},anisotropyMapTransform:{value:new xt}}]),vertexShader:Et.meshphysical_vert,fragmentShader:Et.meshphysical_frag};const hc={r:0,b:0,g:0},ww=new Qt,zv=new xt;zv.set(-1,0,0,0,1,0,0,0,1);function Aw(i,e,t,a,s,l){const u=new wt(0);let d=s===!0?0:1,m,p,v=null,x=0,_=null;function M(N){let z=N.isScene===!0?N.background:null;if(z&&z.isTexture){const R=N.backgroundBlurriness>0;z=e.get(z,R)}return z}function w(N){let z=!1;const R=M(N);R===null?y(u,d):R&&R.isColor&&(y(R,1),z=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(N,z){const R=M(z);R&&(R.isCubeTexture||R.mapping===Gc)?(p===void 0&&(p=new oi(new ko(1,1,1),new ji({name:"BackgroundCubeMaterial",uniforms:Es(Bi.backgroundCube.uniforms),vertexShader:Bi.backgroundCube.vertexShader,fragmentShader:Bi.backgroundCube.fragmentShader,side:Zn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(ww.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(zv),p.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Bt,(v!==R||x!==R.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,v=R,x=R.version,_=i.toneMapping),p.layers.enableAll(),N.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new oi(new Bc(2,2),new ji({name:"BackgroundMaterial",uniforms:Es(Bi.background.uniforms),vertexShader:Bi.background.vertexShader,fragmentShader:Bi.background.fragmentShader,side:Ea,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Lt.getTransfer(R.colorSpace)!==Bt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,_=i.toneMapping),m.layers.enableAll(),N.unshift(m,m.geometry,m.material,0,0,null))}function y(N,z){N.getRGB(hc,Fv(i)),t.buffers.color.setClear(hc.r,hc.g,hc.b,z,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(N,z=1){u.set(N),d=z,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(N){d=N,y(u,d)},render:w,addToRenderList:b,dispose:S}}function Cw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function d(G,j,ie,H,ee){let le=!1;const se=x(G,H,ie,j);l!==se&&(l=se,p(l.object)),le=M(G,H,ie,ee),le&&w(G,H,ie,ee),ee!==null&&e.update(ee,i.ELEMENT_ARRAY_BUFFER),(le||u)&&(u=!1,R(G,j,ie,H),ee!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ee).buffer))}function m(){return i.createVertexArray()}function p(G){return i.bindVertexArray(G)}function v(G){return i.deleteVertexArray(G)}function x(G,j,ie,H){const ee=H.wireframe===!0;let le=a[j.id];le===void 0&&(le={},a[j.id]=le);const se=G.isInstancedMesh===!0?G.id:0;let $=le[se];$===void 0&&($={},le[se]=$);let K=$[ie.id];K===void 0&&(K={},$[ie.id]=K);let Z=K[ee];return Z===void 0&&(Z=_(m()),K[ee]=Z),Z}function _(G){const j=[],ie=[],H=[];for(let ee=0;ee<t;ee++)j[ee]=0,ie[ee]=0,H[ee]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ie,attributeDivisors:H,object:G,attributes:{},index:null}}function M(G,j,ie,H){const ee=l.attributes,le=j.attributes;let se=0;const $=ie.getAttributes();for(const K in $)if($[K].location>=0){const D=ee[K];let J=le[K];if(J===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(J=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(J=G.instanceColor)),D===void 0||D.attribute!==J||J&&D.data!==J.data)return!0;se++}return l.attributesNum!==se||l.index!==H}function w(G,j,ie,H){const ee={},le=j.attributes;let se=0;const $=ie.getAttributes();for(const K in $)if($[K].location>=0){let D=le[K];D===void 0&&(K==="instanceMatrix"&&G.instanceMatrix&&(D=G.instanceMatrix),K==="instanceColor"&&G.instanceColor&&(D=G.instanceColor));const J={};J.attribute=D,D&&D.data&&(J.data=D.data),ee[K]=J,se++}l.attributes=ee,l.attributesNum=se,l.index=H}function b(){const G=l.newAttributes;for(let j=0,ie=G.length;j<ie;j++)G[j]=0}function y(G){S(G,0)}function S(G,j){const ie=l.newAttributes,H=l.enabledAttributes,ee=l.attributeDivisors;ie[G]=1,H[G]===0&&(i.enableVertexAttribArray(G),H[G]=1),ee[G]!==j&&(i.vertexAttribDivisor(G,j),ee[G]=j)}function N(){const G=l.newAttributes,j=l.enabledAttributes;for(let ie=0,H=j.length;ie<H;ie++)j[ie]!==G[ie]&&(i.disableVertexAttribArray(ie),j[ie]=0)}function z(G,j,ie,H,ee,le,se){se===!0?i.vertexAttribIPointer(G,j,ie,ee,le):i.vertexAttribPointer(G,j,ie,H,ee,le)}function R(G,j,ie,H){b();const ee=H.attributes,le=ie.getAttributes(),se=j.defaultAttributeValues;for(const $ in le){const K=le[$];if(K.location>=0){let Z=ee[$];if(Z===void 0&&($==="instanceMatrix"&&G.instanceMatrix&&(Z=G.instanceMatrix),$==="instanceColor"&&G.instanceColor&&(Z=G.instanceColor)),Z!==void 0){const D=Z.normalized,J=Z.itemSize,ye=e.get(Z);if(ye===void 0)continue;const Ge=ye.buffer,We=ye.type,Ye=ye.bytesPerElement,oe=We===i.INT||We===i.UNSIGNED_INT||Z.gpuType===ph;if(Z.isInterleavedBufferAttribute){const fe=Z.data,we=fe.stride,Qe=Z.offset;if(fe.isInstancedInterleavedBuffer){for(let Re=0;Re<K.locationSize;Re++)S(K.location+Re,fe.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=fe.meshPerAttribute*fe.count)}else for(let Re=0;Re<K.locationSize;Re++)y(K.location+Re);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Re=0;Re<K.locationSize;Re++)z(K.location+Re,J/K.locationSize,We,D,we*Ye,(Qe+J/K.locationSize*Re)*Ye,oe)}else{if(Z.isInstancedBufferAttribute){for(let fe=0;fe<K.locationSize;fe++)S(K.location+fe,Z.meshPerAttribute);G.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let fe=0;fe<K.locationSize;fe++)y(K.location+fe);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let fe=0;fe<K.locationSize;fe++)z(K.location+fe,J/K.locationSize,We,D,J*Ye,J/K.locationSize*fe*Ye,oe)}}else if(se!==void 0){const D=se[$];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(K.location,D);break;case 3:i.vertexAttrib3fv(K.location,D);break;case 4:i.vertexAttrib4fv(K.location,D);break;default:i.vertexAttrib1fv(K.location,D)}}}}N()}function L(){U();for(const G in a){const j=a[G];for(const ie in j){const H=j[ie];for(const ee in H){const le=H[ee];for(const se in le)v(le[se].object),delete le[se];delete H[ee]}}delete a[G]}}function P(G){if(a[G.id]===void 0)return;const j=a[G.id];for(const ie in j){const H=j[ie];for(const ee in H){const le=H[ee];for(const se in le)v(le[se].object),delete le[se];delete H[ee]}}delete a[G.id]}function I(G){for(const j in a){const ie=a[j];for(const H in ie){const ee=ie[H];if(ee[G.id]===void 0)continue;const le=ee[G.id];for(const se in le)v(le[se].object),delete le[se];delete ee[G.id]}}}function T(G){for(const j in a){const ie=a[j],H=G.isInstancedMesh===!0?G.id:0,ee=ie[H];if(ee!==void 0){for(const le in ee){const se=ee[le];for(const $ in se)v(se[$].object),delete se[$];delete ee[le]}delete ie[H],Object.keys(ie).length===0&&delete a[j]}}}function U(){k(),u=!0,l!==s&&(l=s,p(l.object))}function k(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:U,resetDefaultState:k,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:y,disableUnusedAttributes:N}}function Rw(i,e,t){let a;function s(m){a=m}function l(m,p){i.drawArrays(a,m,p),t.update(p,a,1)}function u(m,p,v){v!==0&&(i.drawArraysInstanced(a,m,p,v),t.update(p,a,v))}function d(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,a,1)}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function bw(i,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Ui&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const T=I===Ki&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==si&&I!==Xi&&!T&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=m(p);v!==p&&(mt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&mt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),N=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:N,maxVaryings:z,maxFragmentUniforms:R,maxSamples:L,samples:P}}function Pw(i){const e=this;let t=null,a=0,s=!1,l=!1;const u=new fr,d=new xt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||a!==0||s;return s=_,a=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=v(x,_,0)},this.setState=function(x,_,M){const w=x.clippingPlanes,b=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!s||w===null||w.length===0||l&&!y)l?v(null):p();else{const N=l?0:a,z=N*4;let R=S.clippingState||null;m.value=R,R=v(w,_,z,M);for(let L=0;L!==z;++L)R[L]=t[L];S.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=N}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(x,_,M,w){const b=x!==null?x.length:0;let y=null;if(b!==0){if(y=m.value,w!==!0||y===null){const S=M+b*4,N=_.matrixWorldInverse;d.getNormalMatrix(N),(y===null||y.length<S)&&(y=new Float32Array(S));for(let z=0,R=M;z!==b;++z,R+=4)u.copy(x[z]).applyMatrix4(N,d),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const gs=4,Lw=6,Dw=20,Nw=256,_o=new Lh,s0=new wt;let nf=null,rf=0,af=0,sf=!1;const Uw=new Q,_a=new Q;class o0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:d=Uw}=l;nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,s,m,d),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=u0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=c0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(nf,rf,af),this._renderer.xr.enabled=sf,e.scissorTest=!1,fs(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ta||e.mapping===Ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),nf=this._renderer.getRenderTarget(),rf=this._renderer.getActiveCubeFace(),af=this._renderer.getActiveMipmapLevel(),sf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:On,minFilter:On,generateMipmaps:!1,type:Ki,format:Ui,colorSpace:Lc,depthBuffer:!1},s=l0(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=l0(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Fw(l)),this._blurMaterial=Iw(l,e,t),this._ggxMaterial=Ow(l,e,t)}return s}_compileMaterial(e){const t=new oi(new Bn,e);this._renderer.compile(t,_o)}_sceneToCubeUV(e,t,a,s,l){const m=new vi(90,1,t,a),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(s0),x.toneMapping=Yi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new oi(new ko,new Ah({name:"PMREM.Background",side:Zn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const N=e.background;N?N.isColor&&(y.color.copy(N),e.background=null,S=!0):(y.color.copy(s0),S=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[z],l.y,l.z)):R===1?(m.up.set(0,0,p[z]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[z],l.z)):(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[z]));const L=this._cubeSize;fs(s,R*L,z>2?L:0,L,L),x.setRenderTarget(s),S&&x.render(b,m),x.render(e,m)}x.toneMapping=M,x.autoClear=_,e.background=N}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===Ta||e.mapping===Ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=u0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=c0());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;fs(t,0,0,3*m,2*m),a.setRenderTarget(t),a.render(u,_o)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),_=p*1.25,M=x*_,{_lodMax:w}=this,b=this._sizeLods[a],y=3*b*(a>w-gs?a-w+gs:0),S=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=w-t,fs(l,y,S,3*b,2*b),s.setRenderTarget(l),s.render(d,_o),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=w-a,fs(e,y,S,3*b,2*b),s.setRenderTarget(e),s.render(d,_o)}_blur(e,t,a,s){const l=this._pingPongRenderTarget,u=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,a,u),this._blurPass(l,e,a,a,u)}_blurPass(e,t,a,s,l){const u=this._renderer,d=this._blurMaterial,m=this._lodMeshes[s];m.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-a;const v=this._sizeLods[s],x=3*v*(s>this._lodMax-gs?s-this._lodMax+gs:0),_=4*(this._cubeSize-v);fs(t,x,_,3*v,2*v),u.setRenderTarget(t),u.render(m,_o)}}function Fw(i){const e=[],t=[];let a=i;const s=i-gs+1+Lw;for(let l=0;l<s;l++){const u=Math.pow(2,a);e.push(u);const d=1/(u-2),m=-d,p=1+d,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,_=6,M=3,w=new Float32Array(M*_*x),b=new Float32Array(M*_*x);for(let S=0;S<x;S++){const N=S%3*2/3-1,z=S>2?0:-1,R=[N,z,0,N+2/3,z,0,N+2/3,z+1,0,N,z,0,N+2/3,z+1,0,N,z+1,0];w.set(R,M*_*S);for(let L=0;L<_;L++){const P=v[L*2]*2-1,I=v[L*2+1]*2-1;S===0?_a.set(1,I,P):S===1?_a.set(-P,1,-I):S===2?_a.set(-P,I,1):S===3?_a.set(-1,I,-P):S===4?_a.set(-P,-1,I):_a.set(P,I,-1),_a.toArray(b,(S*_+L)*M)}}const y=new Bn;y.setAttribute("position",new Jn(w,M)),y.setAttribute("outputDirection",new Jn(b,M)),t.push(new oi(y,null)),a>gs&&a--}return{lodMeshes:t,sizeLods:e}}function l0(i,e,t){const a=new Oi(i,e,t);return a.texture.mapping=Gc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function fs(i,e,t,a,s){i.viewport.set(e,t,a,s),i.scissor.set(e,t,a,s)}function Ow(i,e,t){return new ji({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Nw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Iw(i,e,t){return new ji({name:"SphericalGaussianBlur",defines:{SAMPLES:Dw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function c0(){return new ji({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Wc(),fragmentShader:`

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
		`,blending:mr,depthTest:!1,depthWrite:!1})}function u0(){return new ji({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Wc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:mr,depthTest:!1,depthWrite:!1})}function Wc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class Hv extends Oi{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new Nv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new ko(5,5,5),l=new ji({name:"CubemapFromEquirect",uniforms:Es(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Zn,blending:mr});l.uniforms.tEquirect.value=t;const u=new oi(s,l),d=t.minFilter;return t.minFilter===xa&&(t.minFilter=On),new zM(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}function kw(i){let e=new WeakMap,t=new WeakMap,a=null;function s(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===bd||M===Pd)if(e.has(_)){const w=e.get(_).texture;return d(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const b=new Hv(w.height);return b.fromEquirectangularTexture(i,_),e.set(_,b),_.addEventListener("dispose",p),d(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,w=M===bd||M===Pd,b=M===Ta||M===Ms;if(w||b){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new o0(i)),y=w?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const N=_.image;return w&&N&&N.height>0||b&&N&&m(N)?(a===null&&(a=new o0(i)),y=w?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",v),y.texture):null}}}return _}function d(_,M){return M===bd?_.mapping=Ta:M===Pd&&(_.mapping=Ms),_}function m(_){let M=0;const w=6;for(let b=0;b<w;b++)_[b]!==void 0&&M++;return M===w}function p(_){const M=_.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(_){const M=_.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function x(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:x}}function zw(i){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=i.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&_s("WebGLRenderer: "+a+" extension not supported."),s}}}function Hw(i,e,t,a){const s={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",u),delete s[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(x,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)e.update(_[M],i.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,w=x.attributes.position;let b=0;if(w===void 0)return;if(M!==null){const N=M.array;b=M.version;for(let z=0,R=N.length;z<R;z+=3){const L=N[z+0],P=N[z+1],I=N[z+2];_.push(L,P,P,I,I,L)}}else{const N=w.array;b=w.version;for(let z=0,R=N.length/3-1;z<R;z+=3){const L=z+0,P=z+1,I=z+2;_.push(L,P,P,I,I,L)}}const y=new(w.count>=65535?Pv:bv)(_,1);y.version=b;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function v(x){const _=l.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function Vw(i,e,t){let a;function s(x){a=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function m(x,_){i.drawElements(a,_,l,x*u),t.update(_,a,1)}function p(x,_,M){M!==0&&(i.drawElementsInstanced(a,_,l,x*u,M),t.update(_,a,M))}function v(x,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,l,x,0,M);let b=0;for(let y=0;y<M;y++)b+=_[y];t.update(b,a,1)}this.setMode=s,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function Gw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function Bw(i,e,t){const a=new WeakMap,s=new rn;function l(u,d,m){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let U=function(){I.dispose(),a.delete(d),d.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],N=d.morphAttributes.color||[];let z=0;M===!0&&(z=1),w===!0&&(z=2),b===!0&&(z=3);let R=d.attributes.position.count*z,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*L*4*x),I=new Cv(P,R,L,x);I.type=Xi,I.needsUpdate=!0;const T=z*4;for(let k=0;k<x;k++){const G=y[k],j=S[k],ie=N[k],H=R*L*4*k;for(let ee=0;ee<G.count;ee++){const le=ee*T;M===!0&&(s.fromBufferAttribute(G,ee),P[H+le+0]=s.x,P[H+le+1]=s.y,P[H+le+2]=s.z,P[H+le+3]=0),w===!0&&(s.fromBufferAttribute(j,ee),P[H+le+4]=s.x,P[H+le+5]=s.y,P[H+le+6]=s.z,P[H+le+7]=0),b===!0&&(s.fromBufferAttribute(ie,ee),P[H+le+8]=s.x,P[H+le+9]=s.y,P[H+le+10]=s.z,P[H+le+11]=ie.itemSize===4?s.w:1)}}_={count:x,texture:I,size:new ot(R,L)},a.set(d,_),d.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const w=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(i,"morphTargetBaseInfluence",w),m.getUniforms().setValue(i,"morphTargetInfluences",p)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function Ww(i,e,t,a,s){let l=new WeakMap;function u(p){const v=s.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==v&&(e.update(_),l.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return _}function d(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const Xw={[uv]:"LINEAR_TONE_MAPPING",[dv]:"REINHARD_TONE_MAPPING",[fv]:"CINEON_TONE_MAPPING",[hv]:"ACES_FILMIC_TONE_MAPPING",[mv]:"AGX_TONE_MAPPING",[gv]:"NEUTRAL_TONE_MAPPING",[pv]:"CUSTOM_TONE_MAPPING"};function $w(i,e,t,a,s,l){const u=new Oi(e,t,{type:i,depthBuffer:s,stencilBuffer:l,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null;const p=new Bn;p.setAttribute("position",new mn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new mn([0,2,0,0,2,0],2));const v=new bM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new oi(p,v),_=new Lh(-1,1,1,-1,0,1);let M=null,w=null,b=!1,y,S=null,N=[],z=!1;this.setSize=function(R,L){u.setSize(R,L),d!==null&&d.setSize(R,L),m!==null&&m.setSize(R,L);for(let P=0;P<N.length;P++){const I=N[P];I.setSize&&I.setSize(R,L)}},this.setEffects=function(R){N=R,z=N.length>0&&N[0].isRenderPass===!0;const L=u.width,P=u.height;N.length>0&&d===null&&(d=new Oi(L,P,{type:Ki,depthBuffer:!1,stencilBuffer:!1}),m=new Oi(L,P,{type:Ki,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<N.length;I++){const T=N[I];T.setSize&&T.setSize(L,P)}},this.begin=function(R,L){if(b||R.toneMapping===Yi&&N.length===0)return!1;if(S=L,L!==null){const P=L.width,I=L.height;(u.width!==P||u.height!==I)&&this.setSize(P,I)}return z===!1&&R.setRenderTarget(u),y=R.toneMapping,R.toneMapping=Yi,!0},this.hasRenderPass=function(){return z},this.end=function(R,L){R.toneMapping=y,b=!0;let P=u,I=d;for(let T=0;T<N.length;T++){const U=N[T];U.enabled!==!1&&(U.render(R,I,P,L),U.needsSwap!==!1&&(P=I,I=I===d?m:d))}if(M!==R.outputColorSpace||w!==R.toneMapping){M=R.outputColorSpace,w=R.toneMapping,v.defines={},Lt.getTransfer(M)===Bt&&(v.defines.SRGB_TRANSFER="");const T=Xw[w];T&&(v.defines[T]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(S),R.render(x,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),p.dispose(),v.dispose()}}const Vv=new In,nh=new Fo(1,1),Gv=new Cv,Bv=new iM,Wv=new Nv,d0=[],f0=[],h0=new Float32Array(16),p0=new Float32Array(9),m0=new Float32Array(4);function ws(i,e,t){const a=i[0];if(a<=0||a>0)return i;const s=e*t;let l=d0[s];if(l===void 0&&(l=new Float32Array(s),d0[s]=l),e!==0){a.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(l,d)}return l}function gn(i,e){if(i.length!==e.length)return!1;for(let t=0,a=i.length;t<a;t++)if(i[t]!==e[t])return!1;return!0}function vn(i,e){for(let t=0,a=e.length;t<a;t++)i[t]=e[t]}function Xc(i,e){let t=f0[e];t===void 0&&(t=new Int32Array(e),f0[e]=t);for(let a=0;a!==e;++a)t[a]=i.allocateTextureUnit();return t}function Yw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function qw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2fv(this.addr,e),vn(t,e)}}function Kw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(gn(t,e))return;i.uniform3fv(this.addr,e),vn(t,e)}}function jw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4fv(this.addr,e),vn(t,e)}}function Zw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(gn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,a))return;m0.set(a),i.uniformMatrix2fv(this.addr,!1,m0),vn(t,a)}}function Jw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(gn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,a))return;p0.set(a),i.uniformMatrix3fv(this.addr,!1,p0),vn(t,a)}}function Qw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(gn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),vn(t,e)}else{if(gn(t,a))return;h0.set(a),i.uniformMatrix4fv(this.addr,!1,h0),vn(t,a)}}function eA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function tA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2iv(this.addr,e),vn(t,e)}}function nA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3iv(this.addr,e),vn(t,e)}}function iA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4iv(this.addr,e),vn(t,e)}}function rA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function aA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(gn(t,e))return;i.uniform2uiv(this.addr,e),vn(t,e)}}function sA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(gn(t,e))return;i.uniform3uiv(this.addr,e),vn(t,e)}}function oA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(gn(t,e))return;i.uniform4uiv(this.addr,e),vn(t,e)}}function lA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s);let l;this.type===i.SAMPLER_2D_SHADOW?(nh.compareFunction=t.isReversedDepthBuffer()?yh:Sh,l=nh):l=Vv,t.setTexture2D(e||l,s)}function cA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||Bv,s)}function uA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||Wv,s)}function dA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||Gv,s)}function fA(i){switch(i){case 5126:return Yw;case 35664:return qw;case 35665:return Kw;case 35666:return jw;case 35674:return Zw;case 35675:return Jw;case 35676:return Qw;case 5124:case 35670:return eA;case 35667:case 35671:return tA;case 35668:case 35672:return nA;case 35669:case 35673:return iA;case 5125:return rA;case 36294:return aA;case 36295:return sA;case 36296:return oA;case 35678:case 36198:case 36298:case 36306:case 35682:return lA;case 35679:case 36299:case 36307:return cA;case 35680:case 36300:case 36308:case 36293:return uA;case 36289:case 36303:case 36311:case 36292:return dA}}function hA(i,e){i.uniform1fv(this.addr,e)}function pA(i,e){const t=ws(e,this.size,2);i.uniform2fv(this.addr,t)}function mA(i,e){const t=ws(e,this.size,3);i.uniform3fv(this.addr,t)}function gA(i,e){const t=ws(e,this.size,4);i.uniform4fv(this.addr,t)}function vA(i,e){const t=ws(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function _A(i,e){const t=ws(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function xA(i,e){const t=ws(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function SA(i,e){i.uniform1iv(this.addr,e)}function yA(i,e){i.uniform2iv(this.addr,e)}function MA(i,e){i.uniform3iv(this.addr,e)}function EA(i,e){i.uniform4iv(this.addr,e)}function TA(i,e){i.uniform1uiv(this.addr,e)}function wA(i,e){i.uniform2uiv(this.addr,e)}function AA(i,e){i.uniform3uiv(this.addr,e)}function CA(i,e){i.uniform4uiv(this.addr,e)}function RA(i,e,t){const a=this.cache,s=e.length,l=Xc(t,s);gn(a,l)||(i.uniform1iv(this.addr,l),vn(a,l));let u;this.type===i.SAMPLER_2D_SHADOW?u=nh:u=Vv;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,l[d])}function bA(i,e,t){const a=this.cache,s=e.length,l=Xc(t,s);gn(a,l)||(i.uniform1iv(this.addr,l),vn(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Bv,l[u])}function PA(i,e,t){const a=this.cache,s=e.length,l=Xc(t,s);gn(a,l)||(i.uniform1iv(this.addr,l),vn(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Wv,l[u])}function LA(i,e,t){const a=this.cache,s=e.length,l=Xc(t,s);gn(a,l)||(i.uniform1iv(this.addr,l),vn(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Gv,l[u])}function DA(i){switch(i){case 5126:return hA;case 35664:return pA;case 35665:return mA;case 35666:return gA;case 35674:return vA;case 35675:return _A;case 35676:return xA;case 5124:case 35670:return SA;case 35667:case 35671:return yA;case 35668:case 35672:return MA;case 35669:case 35673:return EA;case 5125:return TA;case 36294:return wA;case 36295:return AA;case 36296:return CA;case 35678:case 36198:case 36298:case 36306:case 35682:return RA;case 35679:case 36299:case 36307:return bA;case 35680:case 36300:case 36308:case 36293:return PA;case 36289:case 36303:case 36311:case 36292:return LA}}class NA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=fA(t.type)}}class UA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=DA(t.type)}}class FA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const d=s[l];d.setValue(e,t[d.id],a)}}}const of=/(\w+)(\])?(\[|\.)?/g;function g0(i,e){i.seq.push(e),i.map[e.id]=e}function OA(i,e,t){const a=i.name,s=a.length;for(of.lastIndex=0;;){const l=of.exec(a),u=of.lastIndex;let d=l[1];const m=l[2]==="]",p=l[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===s){g0(t,p===void 0?new NA(d,i,e):new UA(d,i,e));break}else{let x=t.map[d];x===void 0&&(x=new FA(d),g0(t,x)),t=x}}}class wc{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(t,u),m=e.getUniformLocation(t,d.name);OA(d,m,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const d=t[l],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function v0(i,e,t){const a=i.createShader(e);return i.shaderSource(a,t),i.compileShader(a),a}const IA=37297;let kA=0;function zA(i,e){const t=i.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return a.join(`
`)}const _0=new xt;function HA(i){Lt._getMatrix(_0,Lt.workingColorSpace,i);const e=`mat3( ${_0.elements.map(t=>t.toFixed(4))} )`;switch(Lt.getTransfer(i)){case Dc:return[e,"LinearTransferOETF"];case Bt:return[e,"sRGBTransferOETF"];default:return mt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function x0(i,e,t){const a=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+zA(i.getShaderSource(e),d)}else return l}function VA(i,e){const t=HA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const GA={[uv]:"Linear",[dv]:"Reinhard",[fv]:"Cineon",[hv]:"ACESFilmic",[mv]:"AgX",[gv]:"Neutral",[pv]:"Custom"};function BA(i,e){const t=GA[e];return t===void 0?(mt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const pc=new Q;function WA(){Lt.getLuminanceCoefficients(pc);const i=pc.x.toFixed(4),e=pc.y.toFixed(4),t=pc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function XA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(To).join(`
`)}function $A(i){const e=[];for(const t in i){const a=i[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function YA(i,e){const t={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=i.getActiveAttrib(e,s),u=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function To(i){return i!==""}function S0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const qA=/^[ \t]*#include +<([\w\d./]+)>/gm;function ih(i){return i.replace(qA,jA)}const KA=new Map;function jA(i,e){let t=Et[e];if(t===void 0){const a=KA.get(e);if(a!==void 0)t=Et[a],mt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return ih(t)}const ZA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function M0(i){return i.replace(ZA,JA)}function JA(i,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function E0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const QA={[xc]:"SHADOWMAP_TYPE_PCF",[Mo]:"SHADOWMAP_TYPE_VSM"};function eC(i){return QA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const tC={[Ta]:"ENVMAP_TYPE_CUBE",[Ms]:"ENVMAP_TYPE_CUBE",[Gc]:"ENVMAP_TYPE_CUBE_UV"};function nC(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":tC[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const iC={[Ms]:"ENVMAP_MODE_REFRACTION"};function rC(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":iC[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const aC={[cv]:"ENVMAP_BLENDING_MULTIPLY",[Uy]:"ENVMAP_BLENDING_MIX",[Fy]:"ENVMAP_BLENDING_ADD"};function sC(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":aC[i.combine]||"ENVMAP_BLENDING_NONE"}function oC(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function lC(i,e,t,a){const s=i.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const m=eC(t),p=nC(t),v=rC(t),x=sC(t),_=oC(t),M=XA(t),w=$A(l),b=s.createProgram();let y,S,N=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(To).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(To).join(`
`),S.length>0&&(S+=`
`)):(y=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(To).join(`
`),S=[E0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Yi?"#define TONE_MAPPING":"",t.toneMapping!==Yi?Et.tonemapping_pars_fragment:"",t.toneMapping!==Yi?BA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Et.colorspace_pars_fragment,VA("linearToOutputTexel",t.outputColorSpace),WA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(To).join(`
`)),u=ih(u),u=S0(u,t),u=y0(u,t),d=ih(d),d=S0(d,t),d=y0(d,t),u=M0(u),d=M0(d),t.isRawShaderMaterial!==!0&&(N=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Rg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Rg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=N+y+u,R=N+S+d,L=v0(s,s.VERTEX_SHADER,z),P=v0(s,s.FRAGMENT_SHADER,R);s.attachShader(b,L),s.attachShader(b,P),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(G){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(b)||"",ie=s.getShaderInfoLog(L)||"",H=s.getShaderInfoLog(P)||"",ee=j.trim(),le=ie.trim(),se=H.trim();let $=!0,K=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if($=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,L,P);else{const Z=x0(s,L,"vertex"),D=x0(s,P,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+G.name+`
Material Type: `+G.type+`

Program Info Log: `+ee+`
`+Z+`
`+D)}else ee!==""?mt("WebGLProgram: Program Info Log:",ee):(le===""||se==="")&&(K=!1);K&&(G.diagnostics={runnable:$,programLog:ee,vertexShader:{log:le,prefix:y},fragmentShader:{log:se,prefix:S}})}s.deleteShader(L),s.deleteShader(P),T=new wc(s,b),U=YA(s,b)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let k=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return k===!1&&(k=s.getProgramParameter(b,IA)),k},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=kA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let cC=0;class uC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,a){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new dC(e),t.set(e,a)),a}}class dC{constructor(e){this.id=cC++,this.code=e,this.usedTimes=0}}function fC(i){return i===wa||i===bc||i===Pc}function hC(i,e,t,a,s,l){const u=new Eh,d=new uC,m=new Set,p=[],v=new Map,x=a.logarithmicDepthBuffer;let _=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return m.add(T),T===0?"uv":`uv${T}`}function b(T,U,k,G,j,ie){const H=G.fog,ee=j.geometry,le=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?G.environment:null,se=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,$=e.get(T.envMap||le,se),K=$&&$.mapping===Gc?$.image.height:null,Z=M[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&mt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const D=ee.morphAttributes.position||ee.morphAttributes.normal||ee.morphAttributes.color,J=D!==void 0?D.length:0;let ye=0;ee.morphAttributes.position!==void 0&&(ye=1),ee.morphAttributes.normal!==void 0&&(ye=2),ee.morphAttributes.color!==void 0&&(ye=3);let Ge,We,Ye,oe;if(Z){const It=Bi[Z];Ge=It.vertexShader,We=It.fragmentShader}else{Ge=T.vertexShader,We=T.fragmentShader;const It=d.getVertexShaderStage(T),Nt=d.getFragmentShaderStage(T);d.update(T,It,Nt),Ye=It.id,oe=Nt.id}const fe=i.getRenderTarget(),we=i.state.buffers.depth.getReversed(),Qe=j.isInstancedMesh===!0,Re=j.isBatchedMesh===!0,St=!!T.map,Vt=!!T.matcap,vt=!!$,pe=!!T.aoMap,He=!!T.lightMap,be=!!T.bumpMap&&T.wireframe===!1,lt=!!T.normalMap,Dt=!!T.displacementMap,Ct=!!T.emissiveMap,ct=!!T.metalnessMap,at=!!T.roughnessMap,B=T.anisotropy>0,Rt=T.clearcoat>0,ut=T.dispersion>0,F=T.retroreflectivity>0,E=T.iridescence>0,q=T.sheen>0,ne=T.transmission>0,he=B&&!!T.anisotropyMap,Ee=Rt&&!!T.clearcoatMap,Ce=Rt&&!!T.clearcoatNormalMap,ge=Rt&&!!T.clearcoatRoughnessMap,_e=E&&!!T.iridescenceMap,Ne=E&&!!T.iridescenceThicknessMap,et=q&&!!T.sheenColorMap,Ue=q&&!!T.sheenRoughnessMap,Pe=!!T.specularMap,tt=!!T.specularColorMap,st=!!T.specularIntensityMap,ht=ne&&!!T.transmissionMap,W=ne&&!!T.thicknessMap,Le=!!T.gradientMap,ve=!!T.alphaMap,De=T.alphaTest>0,Ve=!!T.alphaHash,xe=!!T.extensions;let it=Yi;T.toneMapped&&(fe===null||fe.isXRRenderTarget===!0)&&(it=i.toneMapping);const Ze={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:We,defines:T.defines,customVertexShaderID:Ye,customFragmentShaderID:oe,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Re,batchingColor:Re&&j._colorsTexture!==null,instancing:Qe,instancingColor:Qe&&j.instanceColor!==null,instancingMorph:Qe&&j.morphTexture!==null,outputColorSpace:fe===null?i.outputColorSpace:fe.isXRRenderTarget===!0?fe.texture.colorSpace:Lt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:St,matcap:Vt,envMap:vt,envMapMode:vt&&$.mapping,envMapCubeUVHeight:K,aoMap:pe,lightMap:He,bumpMap:be,normalMap:lt,displacementMap:Dt,emissiveMap:Ct,normalMapObjectSpace:lt&&T.normalMapType===ky,normalMapTangentSpace:lt&&T.normalMapType===Qf,packedNormalMap:lt&&T.normalMapType===Qf&&fC(T.normalMap.format),metalnessMap:ct,roughnessMap:at,anisotropy:B,anisotropyMap:he,clearcoat:Rt,clearcoatMap:Ee,clearcoatNormalMap:Ce,clearcoatRoughnessMap:ge,dispersion:ut,retroreflection:F,iridescence:E,iridescenceMap:_e,iridescenceThicknessMap:Ne,sheen:q,sheenColorMap:et,sheenRoughnessMap:Ue,specularMap:Pe,specularColorMap:tt,specularIntensityMap:st,transmission:ne,transmissionMap:ht,thicknessMap:W,gradientMap:Le,opaque:T.transparent===!1&&T.blending===Ao&&T.alphaToCoverage===!1,alphaMap:ve,alphaTest:De,alphaHash:Ve,combine:T.combine,mapUv:St&&w(T.map.channel),aoMapUv:pe&&w(T.aoMap.channel),lightMapUv:He&&w(T.lightMap.channel),bumpMapUv:be&&w(T.bumpMap.channel),normalMapUv:lt&&w(T.normalMap.channel),displacementMapUv:Dt&&w(T.displacementMap.channel),emissiveMapUv:Ct&&w(T.emissiveMap.channel),metalnessMapUv:ct&&w(T.metalnessMap.channel),roughnessMapUv:at&&w(T.roughnessMap.channel),anisotropyMapUv:he&&w(T.anisotropyMap.channel),clearcoatMapUv:Ee&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Ce&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:et&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&w(T.sheenRoughnessMap.channel),specularMapUv:Pe&&w(T.specularMap.channel),specularColorMapUv:tt&&w(T.specularColorMap.channel),specularIntensityMapUv:st&&w(T.specularIntensityMap.channel),transmissionMapUv:ht&&w(T.transmissionMap.channel),thicknessMapUv:W&&w(T.thicknessMap.channel),alphaMapUv:ve&&w(T.alphaMap.channel),vertexTangents:!!ee.attributes.tangent&&(lt||B),vertexNormals:!!ee.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ee.attributes.color&&ee.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!ee.attributes.uv&&(St||ve),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ee.attributes.normal===void 0&&lt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:we,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:ee.attributes.position!==void 0,morphTargets:ee.morphAttributes.position!==void 0,morphNormals:ee.morphAttributes.normal!==void 0,morphColors:ee.morphAttributes.color!==void 0,morphTargetsCount:J,morphTextureStride:ye,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&k.length>0,shadowMapType:i.shadowMap.type,toneMapping:it,decodeVideoTexture:St&&T.map.isVideoTexture===!0&&Lt.getTransfer(T.map.colorSpace)===Bt,decodeVideoTextureEmissive:Ct&&T.emissiveMap.isVideoTexture===!0&&Lt.getTransfer(T.emissiveMap.colorSpace)===Bt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Ni,flipSided:T.side===Zn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:xe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&T.extensions.multiDraw===!0||Re)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ze.vertexUv1s=m.has(1),Ze.vertexUv2s=m.has(2),Ze.vertexUv3s=m.has(3),m.clear(),Ze}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const k in T.defines)U.push(k),U.push(T.defines[k]);return T.isRawShaderMaterial===!1&&(S(U,T),N(U,T),U.push(i.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numSunLights),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numSunLightShadows),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function N(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.retroreflection&&u.enable(24),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const U=M[T.type];let k;if(U){const G=Bi[U];k=AM.clone(G.uniforms)}else k=T.uniforms;return k}function R(T,U){let k=v.get(U);return k!==void 0?++k.usedTimes:(k=new lC(i,U,T,s),p.push(k),v.set(U,k)),k}function L(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){d.remove(T)}function I(){d.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:z,acquireProgram:R,releaseProgram:L,releaseShaderCache:P,programs:p,dispose:I}}function pC(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function a(u){i.delete(u)}function s(u,d,m){i.get(u)[d]=m}function l(){i=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function mC(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function T0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function w0(){const i=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,w,b,y,S){let N=i[e];return N===void 0?(N={id:_.id,object:_,geometry:M,material:w,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:y,group:S},i[e]=N):(N.id=_.id,N.object=_,N.geometry=M,N.material=w,N.materialVariant=u(_),N.groupOrder=b,N.renderOrder=_.renderOrder,N.z=y,N.group=S),e++,N}function m(_,M,w,b,y,S,N){N.reversedDepth===!0&&(y=-y);const z=d(_,M,w,b,y,S);w.transmission>0?a.push(z):w.transparent===!0?s.push(z):t.push(z)}function p(_,M,w,b,y,S){const N=d(_,M,w,b,y,S);w.transmission>0?a.unshift(N):w.transparent===!0?s.unshift(N):t.unshift(N)}function v(_,M){t.length>1&&t.sort(_||mC),a.length>1&&a.sort(M||T0),s.length>1&&s.sort(M||T0)}function x(){for(let _=e,M=i.length;_<M;_++){const w=i[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:m,unshift:p,finish:x,sort:v}}function gC(){let i=new WeakMap;function e(a,s){const l=i.get(a);let u;return l===void 0?(u=new w0,i.set(a,[u])):s>=l.length?(u=new w0,l.push(u)):u=l[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function vC(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new Q,color:new wt};break;case"SpotLight":t={position:new Q,direction:new Q,color:new wt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new Q,color:new wt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new Q,skyColor:new wt,groundColor:new wt};break;case"RectAreaLight":t={color:new wt,position:new Q,halfWidth:new Q,halfHeight:new Q};break}return i[e.id]=t,t}}}function _C(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ot,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let xC=0;function SC(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function yC(i){const e=new vC,t=_C(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new Q);const s=new Q,l=new Qt,u=new Qt;function d(p){let v=0,x=0,_=0;for(let j=0;j<9;j++)a.probe[j].set(0,0,0);let M=0,w=0,b=0,y=0,S=0,N=0,z=0,R=0,L=0,P=0,I=0,T=0,U=0,k=0;p.sort(SC);for(let j=0,ie=p.length;j<ie;j++){const H=p[j],ee=H.color,le=H.intensity,se=H.distance;let $=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===wa?$=H.shadow.map.texture:$=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=ee.r*le,x+=ee.g*le,_+=ee.b*le;else if(H.isLightProbe){for(let K=0;K<9;K++)a.probe[K].addScaledVector(H.sh.coefficients[K],le);k++}else if(H.isSunLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),a.sunShadow[w]=D,a.sunShadowMap[w]=$;const J=Z.getViewportCount();for(let ye=0;ye<J;ye++)a.sunShadowMatrix[b+ye]=Z.getMatrix(ye),a.sunShadowCascade[b+ye]=Z._cascadeData[ye];b+=J,w++}a.sun[M]=K,M++}else if(H.isDirectionalLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,a.directionalShadow[y]=D,a.directionalShadowMap[y]=$,a.directionalShadowMatrix[y]=H.shadow.matrix,L++}a.directional[y]=K,y++}else if(H.isSpotLight){const K=e.get(H);K.position.setFromMatrixPosition(H.matrixWorld),K.color.copy(ee).multiplyScalar(le),K.distance=se,K.coneCos=Math.cos(H.angle),K.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),K.decay=H.decay,a.spot[N]=K;const Z=H.shadow;if(H.map&&(a.spotLightMap[T]=H.map,T++,Z.updateMatrices(H),H.castShadow&&U++),a.spotLightMatrix[N]=Z.matrix,H.castShadow){const D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,a.spotShadow[N]=D,a.spotShadowMap[N]=$,I++}N++}else if(H.isRectAreaLight){const K=e.get(H);K.color.copy(ee).multiplyScalar(le),K.halfWidth.set(H.width*.5,0,0),K.halfHeight.set(0,H.height*.5,0),a.rectArea[z]=K,z++}else if(H.isPointLight){const K=e.get(H);if(K.color.copy(H.color).multiplyScalar(H.intensity),K.distance=H.distance,K.decay=H.decay,H.castShadow){const Z=H.shadow,D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,D.shadowCameraNear=Z.camera.near,D.shadowCameraFar=Z.camera.far,a.pointShadow[S]=D,a.pointShadowMap[S]=$,a.pointShadowMatrix[S]=H.shadow.matrix,P++}a.point[S]=K,S++}else if(H.isHemisphereLight){const K=e.get(H);K.skyColor.copy(H.color).multiplyScalar(le),K.groundColor.copy(H.groundColor).multiplyScalar(le),a.hemi[R]=K,R++}}z>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ke.LTC_FLOAT_1,a.rectAreaLTC2=ke.LTC_FLOAT_2):(a.rectAreaLTC1=ke.LTC_HALF_1,a.rectAreaLTC2=ke.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=_;const G=a.hash;(G.sunLength!==M||G.directionalLength!==y||G.pointLength!==S||G.spotLength!==N||G.rectAreaLength!==z||G.hemiLength!==R||G.numSunShadows!==w||G.numDirectionalShadows!==L||G.numPointShadows!==P||G.numSpotShadows!==I||G.numSpotMaps!==T||G.numLightProbes!==k)&&(a.sun.length=M,a.directional.length=y,a.spot.length=N,a.rectArea.length=z,a.point.length=S,a.hemi.length=R,a.sunShadow.length=w,a.sunShadowMap.length=w,a.sunShadowMatrix.length=b,a.sunShadowCascade.length=b,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.directionalShadowMatrix.length=L,a.pointShadow.length=P,a.pointShadowMap.length=P,a.pointShadowMatrix.length=P,a.spotShadow.length=I,a.spotShadowMap.length=I,a.spotLightMatrix.length=I+T-U,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=k,G.sunLength=M,G.directionalLength=y,G.pointLength=S,G.spotLength=N,G.rectAreaLength=z,G.hemiLength=R,G.numSunShadows=w,G.numDirectionalShadows=L,G.numPointShadows=P,G.numSpotShadows=I,G.numSpotMaps=T,G.numLightProbes=k,a.version=xC++)}function m(p,v){let x=0,_=0,M=0,w=0,b=0,y=0;const S=v.matrixWorldInverse;for(let N=0,z=p.length;N<z;N++){const R=p[N];if(R.isSunLight){const L=a.sun[x];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(S),x++}else if(R.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),_++}else if(R.isSpotLight){const L=a.spot[w];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),w++}else if(R.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(R.isPointLight){const L=a.point[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),M++}else if(R.isHemisphereLight){const L=a.hemi[y];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(S),y++}}}return{setup:d,setupView:m,state:a}}function A0(i){const e=new yC(i),t=[],a=[],s=[];function l(_){x.camera=_,t.length=0,a.length=0,s.length=0}function u(_){t.push(_)}function d(_){a.push(_)}function m(_){s.push(_)}function p(){e.setup(t)}function v(_){e.setupView(t,_)}const x={lightsArray:t,shadowsArray:a,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function MC(i){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let d;return u===void 0?(d=new A0(i),e.set(s,[d])):l>=u.length?(d=new A0(i),u.push(d)):d=u[l],d}function a(){e=new WeakMap}return{get:t,dispose:a}}const EC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,TC=`uniform sampler2D shadow_pass;
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
}`,wC=[new Q(1,0,0),new Q(-1,0,0),new Q(0,1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1)],AC=[new Q(0,-1,0),new Q(0,-1,0),new Q(0,0,1),new Q(0,0,-1),new Q(0,-1,0),new Q(0,-1,0)],C0=new Qt,xo=new Q,lf=new Q;function CC(i,e,t){let a=new Ch;const s=new ot,l=new ot,u=new rn,d=new PM,m=new LM,p={},v=t.maxTextureSize,x={[Ea]:Zn,[Zn]:Ea,[Ni]:Ni},_=new ji({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ot},radius:{value:4}},vertexShader:EC,fragmentShader:TC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new Bn;w.setAttribute("position",new Jn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new oi(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=xc;let S=this.type;this.render=function(P,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===my&&(mt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=xc);const U=i.getRenderTarget(),k=i.getActiveCubeFace(),G=i.getActiveMipmapLevel(),j=i.state;j.setBlending(mr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ie=S!==this.type;ie&&I.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(ee=>ee.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,ee=P.length;H<ee;H++){const le=P[H],se=le.shadow;if(se===void 0){mt("WebGLShadowMap:",le,"has no shadow.");continue}if(se.autoUpdate===!1&&se.needsUpdate===!1)continue;s.copy(se.mapSize);const $=se.getFrameExtents();s.multiply($),l.copy(se.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(l.x=Math.floor(v/$.x),s.x=l.x*$.x,se.mapSize.x=l.x),s.y>v&&(l.y=Math.floor(v/$.y),s.y=l.y*$.y,se.mapSize.y=l.y));const K=i.state.buffers.depth.getReversed();if(se.camera._reversedDepth=K,se.map===null||ie===!0){if(se.map!==null&&(se.map.depthTexture!==null&&(se.map.depthTexture.dispose(),se.map.depthTexture=null),se.map.dispose()),this.type===Mo){if(le.isPointLight){mt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}se.map=new Oi(s.x,s.y,{format:wa,type:Ki,minFilter:On,magFilter:On,generateMipmaps:!1}),se.map.texture.name=le.name+".shadowMap",se.map.depthTexture=new Fo(s.x,s.y,Xi),se.map.depthTexture.name=le.name+".shadowMapDepth",se.map.depthTexture.format=vr,se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=Cn,se.map.depthTexture.magFilter=Cn}else le.isPointLight?(se.map=new Hv(s.x),se.map.depthTexture=new TM(s.x,qi)):(se.map=new Oi(s.x,s.y),se.map.depthTexture=new Fo(s.x,s.y,qi)),se.map.depthTexture.name=le.name+".shadowMap",se.map.depthTexture.format=vr,this.type===xc?(se.map.depthTexture.compareFunction=K?yh:Sh,se.map.depthTexture.minFilter=On,se.map.depthTexture.magFilter=On):(se.map.depthTexture.compareFunction=null,se.map.depthTexture.minFilter=Cn,se.map.depthTexture.magFilter=Cn);se.camera.updateProjectionMatrix()}se.map.isWebGLCubeRenderTarget!==!0&&(se.map.width!==s.x||se.map.height!==s.y)&&se.map.setSize(s.x,s.y);const Z=se.map.isWebGLCubeRenderTarget?6:se.getViewportCount();le.isPointLight!==!0&&se.updateMatrices(le,T);for(let D=0;D<Z;D++){const J=se.getCamera(D);if(le.isPointLight){const ye=se.camera,Ge=se.matrix,We=le.distance||ye.far;We!==ye.far&&(ye.far=We,ye.updateProjectionMatrix()),xo.setFromMatrixPosition(le.matrixWorld),ye.position.copy(xo),lf.copy(ye.position),lf.add(wC[D]),ye.up.copy(AC[D]),ye.lookAt(lf),ye.updateMatrixWorld(),Ge.makeTranslation(-xo.x,-xo.y,-xo.z),C0.multiplyMatrices(ye.projectionMatrix,ye.matrixWorldInverse),se._frustum.setFromProjectionMatrix(C0,ye.coordinateSystem,ye.reversedDepth)}if(se.map.isWebGLCubeRenderTarget)i.setRenderTarget(se.map,D),i.clear();else{D===0&&(i.setRenderTarget(se.map),i.clear());const ye=se.getViewport(D);u.set(l.x*ye.x,l.y*ye.y,l.x*ye.z,l.y*ye.w),j.viewport(u)}a=se.getFrustum(D),R(I,T,J,le,this.type)}se.isPointLightShadow!==!0&&this.type===Mo&&N(se,T),se.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(U,k,G)};function N(P,I){const T=e.update(b);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Oi(s.x,s.y,{format:wa,type:Ki}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value.set(P.map.width,P.map.height),_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,T,_,b,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,T,M,b,null)}function z(P,I,T,U){let k=null;const G=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(G!==void 0)k=G;else if(k=T.isPointLight===!0?m:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=k.uuid,ie=I.uuid;let H=p[j];H===void 0&&(H={},p[j]=H);let ee=H[ie];ee===void 0&&(ee=k.clone(),H[ie]=ee,I.addEventListener("dispose",L)),k=ee}if(k.visible=I.visible,k.wireframe=I.wireframe,U===Mo?k.side=I.shadowSide!==null?I.shadowSide:I.side:k.side=I.shadowSide!==null?I.shadowSide:x[I.side],k.alphaMap=I.alphaMap,k.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,k.map=I.map,k.clipShadows=I.clipShadows,k.clippingPlanes=I.clippingPlanes,k.clipIntersection=I.clipIntersection,k.displacementMap=I.displacementMap,k.displacementScale=I.displacementScale,k.displacementBias=I.displacementBias,k.wireframeLinewidth=I.wireframeLinewidth,k.linewidth=I.linewidth,T.isPointLight===!0&&k.isMeshDistanceMaterial===!0){const j=i.properties.get(k);j.light=T}return k}function R(P,I,T,U,k){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&k===Mo)&&(!P.frustumCulled||P.intersectsFrustum(a))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),H=P.material;if(Array.isArray(H)){const ee=ie.groups;for(let le=0,se=ee.length;le<se;le++){const $=ee[le],K=H[$.materialIndex];if(K&&K.visible){const Z=z(P,K,U,k);P.onBeforeShadow(i,P,I,T,ie,Z,$),i.renderBufferDirect(T,null,ie,Z,P,$),P.onAfterShadow(i,P,I,T,ie,Z,$)}}}else if(H.visible){const ee=z(P,H,U,k);P.onBeforeShadow(i,P,I,T,ie,ee,null),i.renderBufferDirect(T,null,ie,ee,P,null),P.onAfterShadow(i,P,I,T,ie,ee,null)}}const j=P.children;for(let ie=0,H=j.length;ie<H;ie++)R(j[ie],I,T,U,k)}function L(P){P.target.removeEventListener("dispose",L);for(const T in p){const U=p[T],k=P.target.uuid;k in U&&(U[k].dispose(),delete U[k])}}}function RC(i,e){function t(){let W=!1;const Le=new rn;let ve=null;const De=new rn(0,0,0,0);return{setMask:function(Ve){ve!==Ve&&!W&&(i.colorMask(Ve,Ve,Ve,Ve),ve=Ve)},setLocked:function(Ve){W=Ve},setClear:function(Ve,xe,it,Ze,It){It===!0&&(Ve*=Ze,xe*=Ze,it*=Ze),Le.set(Ve,xe,it,Ze),De.equals(Le)===!1&&(i.clearColor(Ve,xe,it,Ze),De.copy(Le))},reset:function(){W=!1,ve=null,De.set(-1,0,0,0)}}}function a(){let W=!1,Le=!1,ve=null,De=null,Ve=null;return{setReversed:function(xe){if(Le!==xe){const it=e.get("EXT_clip_control");xe?it.clipControlEXT(it.LOWER_LEFT_EXT,it.ZERO_TO_ONE_EXT):it.clipControlEXT(it.LOWER_LEFT_EXT,it.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const Ze=Ve;Ve=null,this.setClear(Ze)}},getReversed:function(){return Le},setTest:function(xe){xe?fe(i.DEPTH_TEST):we(i.DEPTH_TEST)},setMask:function(xe){ve!==xe&&!W&&(i.depthMask(xe),ve=xe)},setFunc:function(xe){if(Le&&(xe=Ky[xe]),De!==xe){switch(xe){case pf:i.depthFunc(i.NEVER);break;case mf:i.depthFunc(i.ALWAYS);break;case gf:i.depthFunc(i.LESS);break;case Lo:i.depthFunc(i.LEQUAL);break;case vf:i.depthFunc(i.EQUAL);break;case _f:i.depthFunc(i.GEQUAL);break;case xf:i.depthFunc(i.GREATER);break;case Sf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=xe}},setLocked:function(xe){W=xe},setClear:function(xe){Ve!==xe&&(Ve=xe,Le&&(xe=1-xe),i.clearDepth(xe))},reset:function(){W=!1,ve=null,De=null,Ve=null,Le=!1}}}function s(){let W=!1,Le=null,ve=null,De=null,Ve=null,xe=null,it=null,Ze=null,It=null;return{setTest:function(Nt){W||(Nt?fe(i.STENCIL_TEST):we(i.STENCIL_TEST))},setMask:function(Nt){Le!==Nt&&!W&&(i.stencilMask(Nt),Le=Nt)},setFunc:function(Nt,Tn,li){(ve!==Nt||De!==Tn||Ve!==li)&&(i.stencilFunc(Nt,Tn,li),ve=Nt,De=Tn,Ve=li)},setOp:function(Nt,Tn,li){(xe!==Nt||it!==Tn||Ze!==li)&&(i.stencilOp(Nt,Tn,li),xe=Nt,it=Tn,Ze=li)},setLocked:function(Nt){W=Nt},setClear:function(Nt){It!==Nt&&(i.clearStencil(Nt),It=Nt)},reset:function(){W=!1,Le=null,ve=null,De=null,Ve=null,xe=null,it=null,Ze=null,It=null}}}const l=new t,u=new a,d=new s,m=new WeakMap,p=new WeakMap;let v={},x={},_={},M=new WeakMap,w=[],b=null,y=!1,S=null,N=null,z=null,R=null,L=null,P=null,I=null,T=new wt(0,0,0),U=0,k=!1,G=null,j=null,ie=null,H=null,ee=null;const le=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let se=!1,$=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?($=parseFloat(/^WebGL (\d)/.exec(K)[1]),se=$>=1):K.indexOf("OpenGL ES")!==-1&&($=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),se=$>=2);let Z=null,D={};const J=i.getParameter(i.SCISSOR_BOX),ye=i.getParameter(i.VIEWPORT),Ge=new rn().fromArray(J),We=new rn().fromArray(ye);function Ye(W,Le,ve,De){const Ve=new Uint8Array(4),xe=i.createTexture();i.bindTexture(W,xe),i.texParameteri(W,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(W,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let it=0;it<ve;it++)W===i.TEXTURE_3D||W===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,Ve):i.texImage2D(Le+it,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,Ve);return xe}const oe={};oe[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),oe[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),oe[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),oe[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),fe(i.DEPTH_TEST),u.setFunc(Lo),be(!1),lt(Tg),fe(i.CULL_FACE),pe(mr);function fe(W){v[W]!==!0&&(i.enable(W),v[W]=!0)}function we(W){v[W]!==!1&&(i.disable(W),v[W]=!1)}function Qe(W,Le){return _[W]!==Le?(i.bindFramebuffer(W,Le),_[W]=Le,W===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Le),W===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function Re(W,Le){let ve=w,De=!1;if(W){ve=M.get(Le),ve===void 0&&(ve=[],M.set(Le,ve));const Ve=W.textures;if(ve.length!==Ve.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,it=Ve.length;xe<it;xe++)ve[xe]=i.COLOR_ATTACHMENT0+xe;ve.length=Ve.length,De=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,De=!0);De&&i.drawBuffers(ve)}function St(W){return b!==W?(i.useProgram(W),b=W,!0):!1}const Vt={[ps]:i.FUNC_ADD,[vy]:i.FUNC_SUBTRACT,[_y]:i.FUNC_REVERSE_SUBTRACT};Vt[xy]=i.MIN,Vt[Sy]=i.MAX;const vt={[yy]:i.ZERO,[My]:i.ONE,[Ey]:i.SRC_COLOR,[ov]:i.SRC_ALPHA,[by]:i.SRC_ALPHA_SATURATE,[Cy]:i.DST_COLOR,[wy]:i.DST_ALPHA,[Ty]:i.ONE_MINUS_SRC_COLOR,[lv]:i.ONE_MINUS_SRC_ALPHA,[Ry]:i.ONE_MINUS_DST_COLOR,[Ay]:i.ONE_MINUS_DST_ALPHA,[Py]:i.CONSTANT_COLOR,[Ly]:i.ONE_MINUS_CONSTANT_COLOR,[Dy]:i.CONSTANT_ALPHA,[Ny]:i.ONE_MINUS_CONSTANT_ALPHA};function pe(W,Le,ve,De,Ve,xe,it,Ze,It,Nt){if(W===mr){y===!0&&(we(i.BLEND),y=!1);return}if(y===!1&&(fe(i.BLEND),y=!0),W!==gy){if(W!==S||Nt!==k){if((N!==ps||L!==ps)&&(i.blendEquation(i.FUNC_ADD),N=ps,L=ps),Nt)switch(W){case Ao:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wg:i.blendFunc(i.ONE,i.ONE);break;case Ag:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Cg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",W);break}else switch(W){case Ao:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case wg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ag:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Cg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",W);break}z=null,R=null,P=null,I=null,T.set(0,0,0),U=0,S=W,k=Nt}return}Ve=Ve||Le,xe=xe||ve,it=it||De,(Le!==N||Ve!==L)&&(i.blendEquationSeparate(Vt[Le],Vt[Ve]),N=Le,L=Ve),(ve!==z||De!==R||xe!==P||it!==I)&&(i.blendFuncSeparate(vt[ve],vt[De],vt[xe],vt[it]),z=ve,R=De,P=xe,I=it),(Ze.equals(T)===!1||It!==U)&&(i.blendColor(Ze.r,Ze.g,Ze.b,It),T.copy(Ze),U=It),S=W,k=!1}function He(W,Le){W.side===Ni?we(i.CULL_FACE):fe(i.CULL_FACE);let ve=W.side===Zn;Le&&(ve=!ve),be(ve),W.blending===Ao&&W.transparent===!1?pe(mr):pe(W.blending,W.blendEquation,W.blendSrc,W.blendDst,W.blendEquationAlpha,W.blendSrcAlpha,W.blendDstAlpha,W.blendColor,W.blendAlpha,W.premultipliedAlpha),u.setFunc(W.depthFunc),u.setTest(W.depthTest),u.setMask(W.depthWrite),l.setMask(W.colorWrite);const De=W.stencilWrite;d.setTest(De),De&&(d.setMask(W.stencilWriteMask),d.setFunc(W.stencilFunc,W.stencilRef,W.stencilFuncMask),d.setOp(W.stencilFail,W.stencilZFail,W.stencilZPass)),Ct(W.polygonOffset,W.polygonOffsetFactor,W.polygonOffsetUnits),W.alphaToCoverage===!0?fe(i.SAMPLE_ALPHA_TO_COVERAGE):we(i.SAMPLE_ALPHA_TO_COVERAGE)}function be(W){G!==W&&(W?i.frontFace(i.CW):i.frontFace(i.CCW),G=W)}function lt(W){W!==hy?(fe(i.CULL_FACE),W!==j&&(W===Tg?i.cullFace(i.BACK):W===py?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):we(i.CULL_FACE),j=W}function Dt(W){W!==ie&&(se&&i.lineWidth(W),ie=W)}function Ct(W,Le,ve){W?(fe(i.POLYGON_OFFSET_FILL),(H!==Le||ee!==ve)&&(H=Le,ee=ve,u.getReversed()&&(Le=-Le),i.polygonOffset(Le,ve))):we(i.POLYGON_OFFSET_FILL)}function ct(W){W?fe(i.SCISSOR_TEST):we(i.SCISSOR_TEST)}function at(W){W===void 0&&(W=i.TEXTURE0+le-1),Z!==W&&(i.activeTexture(W),Z=W)}function B(W,Le,ve){ve===void 0&&(Z===null?ve=i.TEXTURE0+le-1:ve=Z);let De=D[ve];De===void 0&&(De={type:void 0,texture:void 0},D[ve]=De),(De.type!==W||De.texture!==Le)&&(Z!==ve&&(i.activeTexture(ve),Z=ve),i.bindTexture(W,Le||oe[W]),De.type=W,De.texture=Le)}function Rt(){const W=D[Z];W!==void 0&&W.type!==void 0&&(i.bindTexture(W.type,null),W.type=void 0,W.texture=void 0)}function ut(){try{i.compressedTexImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function E(){try{i.texSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function q(){try{i.texSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ne(){try{i.compressedTexSubImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ee(){try{i.texStorage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ce(){try{i.texStorage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function ge(){try{i.texImage2D(...arguments)}catch(W){Ut("WebGLState:",W)}}function _e(){try{i.texImage3D(...arguments)}catch(W){Ut("WebGLState:",W)}}function Ne(W){return x[W]!==void 0?x[W]:i.getParameter(W)}function et(W,Le){x[W]!==Le&&(i.pixelStorei(W,Le),x[W]=Le)}function Ue(W){Ge.equals(W)===!1&&(i.scissor(W.x,W.y,W.z,W.w),Ge.copy(W))}function Pe(W){We.equals(W)===!1&&(i.viewport(W.x,W.y,W.z,W.w),We.copy(W))}function tt(W,Le){let ve=p.get(Le);ve===void 0&&(ve=new WeakMap,p.set(Le,ve));let De=ve.get(W);De===void 0&&(De=i.getUniformBlockIndex(Le,W.name),ve.set(W,De))}function st(W,Le){const De=p.get(Le).get(W);m.get(Le)!==De&&(i.uniformBlockBinding(Le,De,W.__bindingPointIndex),m.set(Le,De))}function ht(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},x={},Z=null,D={},_={},M=new WeakMap,w=[],b=null,y=!1,S=null,N=null,z=null,R=null,L=null,P=null,I=null,T=new wt(0,0,0),U=0,k=!1,G=null,j=null,ie=null,H=null,ee=null,Ge.set(0,0,i.canvas.width,i.canvas.height),We.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:fe,disable:we,bindFramebuffer:Qe,drawBuffers:Re,useProgram:St,setBlending:pe,setMaterial:He,setFlipSided:be,setCullFace:lt,setLineWidth:Dt,setPolygonOffset:Ct,setScissorTest:ct,activeTexture:at,bindTexture:B,unbindTexture:Rt,compressedTexImage2D:ut,compressedTexImage3D:F,texImage2D:ge,texImage3D:_e,pixelStorei:et,getParameter:Ne,updateUBOMapping:tt,uniformBlockBinding:st,texStorage2D:Ee,texStorage3D:Ce,texSubImage2D:E,texSubImage3D:q,compressedTexSubImage2D:ne,compressedTexSubImage3D:he,scissor:Ue,viewport:Pe,reset:ht}}function bC(i,e,t,a,s,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ot,v=new WeakMap,x=new Set;let _;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,E){return w?new OffscreenCanvas(F,E):Nc("canvas")}function y(F,E,q){let ne=1;const he=ut(F);if((he.width>q||he.height>q)&&(ne=q/Math.max(he.width,he.height)),ne<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Ee=Math.floor(ne*he.width),Ce=Math.floor(ne*he.height);_===void 0&&(_=b(Ee,Ce));const ge=E?b(Ee,Ce):_;return ge.width=Ee,ge.height=Ce,ge.getContext("2d").drawImage(F,0,0,Ee,Ce),mt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Ee+"x"+Ce+")."),ge}else return"data"in F&&mt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function S(F){return F.generateMipmaps}function N(F){i.generateMipmap(F)}function z(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(F,E,q,ne,he,Ee=!1){if(F!==null){if(i[F]!==void 0)return i[F];mt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Ce;ne&&(Ce=e.get("EXT_texture_norm16"),Ce||mt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=E;if(E===i.RED&&(q===i.FLOAT&&(ge=i.R32F),q===i.HALF_FLOAT&&(ge=i.R16F),q===i.UNSIGNED_BYTE&&(ge=i.R8),q===i.UNSIGNED_SHORT&&Ce&&(ge=Ce.R16_EXT),q===i.SHORT&&Ce&&(ge=Ce.R16_SNORM_EXT)),E===i.RED_INTEGER&&(q===i.UNSIGNED_BYTE&&(ge=i.R8UI),q===i.UNSIGNED_SHORT&&(ge=i.R16UI),q===i.UNSIGNED_INT&&(ge=i.R32UI),q===i.BYTE&&(ge=i.R8I),q===i.SHORT&&(ge=i.R16I),q===i.INT&&(ge=i.R32I)),E===i.RG&&(q===i.FLOAT&&(ge=i.RG32F),q===i.HALF_FLOAT&&(ge=i.RG16F),q===i.UNSIGNED_BYTE&&(ge=i.RG8),q===i.UNSIGNED_SHORT&&Ce&&(ge=Ce.RG16_EXT),q===i.SHORT&&Ce&&(ge=Ce.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(q===i.UNSIGNED_BYTE&&(ge=i.RG8UI),q===i.UNSIGNED_SHORT&&(ge=i.RG16UI),q===i.UNSIGNED_INT&&(ge=i.RG32UI),q===i.BYTE&&(ge=i.RG8I),q===i.SHORT&&(ge=i.RG16I),q===i.INT&&(ge=i.RG32I)),E===i.RGB_INTEGER&&(q===i.UNSIGNED_BYTE&&(ge=i.RGB8UI),q===i.UNSIGNED_SHORT&&(ge=i.RGB16UI),q===i.UNSIGNED_INT&&(ge=i.RGB32UI),q===i.BYTE&&(ge=i.RGB8I),q===i.SHORT&&(ge=i.RGB16I),q===i.INT&&(ge=i.RGB32I)),E===i.RGBA_INTEGER&&(q===i.UNSIGNED_BYTE&&(ge=i.RGBA8UI),q===i.UNSIGNED_SHORT&&(ge=i.RGBA16UI),q===i.UNSIGNED_INT&&(ge=i.RGBA32UI),q===i.BYTE&&(ge=i.RGBA8I),q===i.SHORT&&(ge=i.RGBA16I),q===i.INT&&(ge=i.RGBA32I)),E===i.RGB&&(q===i.UNSIGNED_SHORT&&Ce&&(ge=Ce.RGB16_EXT),q===i.SHORT&&Ce&&(ge=Ce.RGB16_SNORM_EXT),q===i.UNSIGNED_INT_5_9_9_9_REV&&(ge=i.RGB9_E5),q===i.UNSIGNED_INT_10F_11F_11F_REV&&(ge=i.R11F_G11F_B10F)),E===i.RGBA){const _e=Ee?Dc:Lt.getTransfer(he);q===i.FLOAT&&(ge=i.RGBA32F),q===i.HALF_FLOAT&&(ge=i.RGBA16F),q===i.UNSIGNED_BYTE&&(ge=_e===Bt?i.SRGB8_ALPHA8:i.RGBA8),q===i.UNSIGNED_SHORT&&Ce&&(ge=Ce.RGBA16_EXT),q===i.SHORT&&Ce&&(ge=Ce.RGBA16_SNORM_EXT),q===i.UNSIGNED_SHORT_4_4_4_4&&(ge=i.RGBA4),q===i.UNSIGNED_SHORT_5_5_5_1&&(ge=i.RGB5_A1)}return(ge===i.R16F||ge===i.R32F||ge===i.RG16F||ge===i.RG32F||ge===i.RGBA16F||ge===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function L(F,E){let q;return F?E===null||E===qi||E===No?q=i.DEPTH24_STENCIL8:E===Xi?q=i.DEPTH32F_STENCIL8:E===Do&&(q=i.DEPTH24_STENCIL8,mt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===qi||E===No?q=i.DEPTH_COMPONENT24:E===Xi?q=i.DEPTH_COMPONENT32F:E===Do&&(q=i.DEPTH_COMPONENT16),q}function P(F,E){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==Cn&&F.minFilter!==On?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function I(F){const E=F.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&x.delete(E)}function T(F){const E=F.target;E.removeEventListener("dispose",T),G(E)}function U(F){const E=a.get(F);if(E.__webglInit===void 0)return;const q=F.source,ne=M.get(q);if(ne){const he=ne[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&k(F),Object.keys(ne).length===0&&M.delete(q)}a.remove(F)}function k(F){const E=a.get(F);i.deleteTexture(E.__webglTexture);const q=F.source,ne=M.get(q);delete ne[E.__cacheKey],u.memory.textures--}function G(F){const E=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ne=0;ne<6;ne++){if(Array.isArray(E.__webglFramebuffer[ne]))for(let he=0;he<E.__webglFramebuffer[ne].length;he++)i.deleteFramebuffer(E.__webglFramebuffer[ne][he]);else i.deleteFramebuffer(E.__webglFramebuffer[ne]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ne])}else{if(Array.isArray(E.__webglFramebuffer))for(let ne=0;ne<E.__webglFramebuffer.length;ne++)i.deleteFramebuffer(E.__webglFramebuffer[ne]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ne=0;ne<E.__webglColorRenderbuffer.length;ne++)E.__webglColorRenderbuffer[ne]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ne]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const q=F.textures;for(let ne=0,he=q.length;ne<he;ne++){const Ee=a.get(q[ne]);Ee.__webglTexture&&(i.deleteTexture(Ee.__webglTexture),u.memory.textures--),a.remove(q[ne])}a.remove(F)}let j=0;function ie(){j=0}function H(){return j}function ee(F){j=F}function le(){const F=j;return F>=s.maxTextures&&mt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,F}function se(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function $(F,E){const q=a.get(F);if(F.isVideoTexture&&B(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&q.__version!==F.version){const ne=F.image;if(ne===null)mt("WebGLRenderer: Texture marked for update but no image data found.");else if(ne.complete===!1)mt("WebGLRenderer: Texture marked for update but image is incomplete");else{we(q,F,E);return}}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,q.__webglTexture,i.TEXTURE0+E)}function K(F,E){const q=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){we(q,F,E);return}else F.isExternalTexture&&(q.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,q.__webglTexture,i.TEXTURE0+E)}function Z(F,E){const q=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&q.__version!==F.version){we(q,F,E);return}t.bindTexture(i.TEXTURE_3D,q.__webglTexture,i.TEXTURE0+E)}function D(F,E){const q=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&q.__version!==F.version){Qe(q,F,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,q.__webglTexture,i.TEXTURE0+E)}const J={[yf]:i.REPEAT,[hr]:i.CLAMP_TO_EDGE,[Mf]:i.MIRRORED_REPEAT},ye={[Cn]:i.NEAREST,[Oy]:i.NEAREST_MIPMAP_NEAREST,[Wl]:i.NEAREST_MIPMAP_LINEAR,[On]:i.LINEAR,[Ld]:i.LINEAR_MIPMAP_NEAREST,[xa]:i.LINEAR_MIPMAP_LINEAR},Ge={[Hy]:i.NEVER,[Xy]:i.ALWAYS,[Vy]:i.LESS,[Sh]:i.LEQUAL,[Gy]:i.EQUAL,[yh]:i.GEQUAL,[By]:i.GREATER,[Wy]:i.NOTEQUAL};function We(F,E){if(E.type===Xi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===On||E.magFilter===Ld||E.magFilter===Wl||E.magFilter===xa||E.minFilter===On||E.minFilter===Ld||E.minFilter===Wl||E.minFilter===xa)&&mt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,J[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,J[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,J[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,ye[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,ye[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Cn||E.minFilter!==Wl&&E.minFilter!==xa||E.type===Xi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const q=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,q.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(F,E){let q=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",I));const ne=E.source;let he=M.get(ne);he===void 0&&(he={},M.set(ne,he));const Ee=se(E);if(Ee!==F.__cacheKey){he[Ee]===void 0&&(he[Ee]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,q=!0),he[Ee].usedTimes++;const Ce=he[F.__cacheKey];Ce!==void 0&&(he[F.__cacheKey].usedTimes--,Ce.usedTimes===0&&k(E)),F.__cacheKey=Ee,F.__webglTexture=he[Ee].texture}return q}function oe(F,E,q){return Math.floor(Math.floor(F/q)/E)}function fe(F,E,q,ne){const Ee=F.updateRanges;if(Ee.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,q,ne,E.data);else{Ee.sort((et,Ue)=>et.start-Ue.start);let Ce=0;for(let et=1;et<Ee.length;et++){const Ue=Ee[Ce],Pe=Ee[et],tt=Ue.start+Ue.count,st=oe(Pe.start,E.width,4),ht=oe(Ue.start,E.width,4);Pe.start<=tt+1&&st===ht&&oe(Pe.start+Pe.count-1,E.width,4)===st?Ue.count=Math.max(Ue.count,Pe.start+Pe.count-Ue.start):(++Ce,Ee[Ce]=Pe)}Ee.length=Ce+1;const ge=t.getParameter(i.UNPACK_ROW_LENGTH),_e=t.getParameter(i.UNPACK_SKIP_PIXELS),Ne=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let et=0,Ue=Ee.length;et<Ue;et++){const Pe=Ee[et],tt=Math.floor(Pe.start/4),st=Math.ceil(Pe.count/4),ht=tt%E.width,W=Math.floor(tt/E.width),Le=st,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ht),t.pixelStorei(i.UNPACK_SKIP_ROWS,W),t.texSubImage2D(i.TEXTURE_2D,0,ht,W,Le,ve,q,ne,E.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ge),t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function we(F,E,q){let ne=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ne=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ne=i.TEXTURE_3D);const he=Ye(F,E),Ee=E.source;t.bindTexture(ne,F.__webglTexture,i.TEXTURE0+q);const Ce=a.get(Ee);if(Ee.version!==Ce.__version||he===!0){if(t.activeTexture(i.TEXTURE0+q),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Lt.getPrimaries(Lt.workingColorSpace),De=E.colorSpace===Br?null:Lt.getPrimaries(E.colorSpace),Ve=E.colorSpace===Br||ve===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=y(E.image,!1,s.maxTextureSize);_e=Rt(E,_e);const Ne=l.convert(E.format,E.colorSpace),et=l.convert(E.type);let Ue=R(E.internalFormat,Ne,et,E.normalized,E.colorSpace,E.isVideoTexture);We(ne,E);let Pe;const tt=E.mipmaps,st=E.isVideoTexture!==!0,ht=Ce.__version===void 0||he===!0,W=Ee.dataReady,Le=P(E,_e);if(E.isDepthTexture)Ue=L(E.format===Sa,E.type),ht&&(st?t.texStorage2D(i.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Ne,et,null));else if(E.isDataTexture)if(tt.length>0){st&&ht&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,tt[0].width,tt[0].height);for(let ve=0,De=tt.length;ve<De;ve++)Pe=tt[ve],st?W&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Ne,et,Pe.data):t.texImage2D(i.TEXTURE_2D,ve,Ue,Pe.width,Pe.height,0,Ne,et,Pe.data);E.generateMipmaps=!1}else st?(ht&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,_e.width,_e.height),W&&fe(E,_e,Ne,et)):t.texImage2D(i.TEXTURE_2D,0,Ue,_e.width,_e.height,0,Ne,et,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,tt[0].width,tt[0].height,_e.depth);for(let ve=0,De=tt.length;ve<De;ve++)if(Pe=tt[ve],E.format!==Ui)if(Ne!==null)if(st){if(W)if(E.layerUpdates.size>0){const Ve=a0(Pe.width,Pe.height,E.format,E.type);for(const xe of E.layerUpdates){const it=Pe.data.subarray(xe*Ve/Pe.data.BYTES_PER_ELEMENT,(xe+1)*Ve/Pe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,xe,Pe.width,Pe.height,1,Ne,it)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,_e.depth,Ne,Pe.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Ue,Pe.width,Pe.height,_e.depth,0,Pe.data,0,0);else mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?W&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Pe.width,Pe.height,_e.depth,Ne,et,Pe.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Ue,Pe.width,Pe.height,_e.depth,0,Ne,et,Pe.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{st&&ht&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,tt[0].width,tt[0].height);for(let ve=0,De=tt.length;ve<De;ve++)Pe=tt[ve],E.format!==Ui?Ne!==null?st?W&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Ne,Pe.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Ue,Pe.width,Pe.height,0,Pe.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?W&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Pe.width,Pe.height,Ne,et,Pe.data):t.texImage2D(i.TEXTURE_2D,ve,Ue,Pe.width,Pe.height,0,Ne,et,Pe.data)}else if(E.isDataArrayTexture)if(st){if(ht&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,_e.width,_e.height,_e.depth),W)if(E.layerUpdates.size>0){const ve=a0(_e.width,_e.height,E.format,E.type);for(const De of E.layerUpdates){const Ve=_e.data.subarray(De*ve/_e.data.BYTES_PER_ELEMENT,(De+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,_e.width,_e.height,1,Ne,et,Ve)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,Ne,et,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,Ne,et,_e.data);else if(E.isData3DTexture)st?(ht&&t.texStorage3D(i.TEXTURE_3D,Le,Ue,_e.width,_e.height,_e.depth),W&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,Ne,et,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,Ne,et,_e.data);else if(E.isFramebufferTexture){if(ht)if(st)t.texStorage2D(i.TEXTURE_2D,Le,Ue,_e.width,_e.height);else{let ve=_e.width,De=_e.height;for(let Ve=0;Ve<Le;Ve++)t.texImage2D(i.TEXTURE_2D,Ve,Ue,ve,De,0,Ne,et,null),ve>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),x.add(E),ve.onpaint=De=>{const Ve=De.changedElements;for(const xe of x)Ve.includes(xe.image)&&(xe.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_e);else{const Ve=i.RGBA,xe=i.RGBA,it=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,Ve,xe,it,_e)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(tt.length>0){if(st&&ht){const ve=ut(tt[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ue,ve.width,ve.height)}for(let ve=0,De=tt.length;ve<De;ve++)Pe=tt[ve],st?W&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ne,et,Pe):t.texImage2D(i.TEXTURE_2D,ve,Ue,Ne,et,Pe);E.generateMipmaps=!1}else if(st){if(ht){const ve=ut(_e);t.texStorage2D(i.TEXTURE_2D,Le,Ue,ve.width,ve.height)}W&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,et,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Ne,et,_e);S(E)&&N(ne),Ce.__version=Ee.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Qe(F,E,q){if(E.image.length!==6)return;const ne=Ye(F,E),he=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+q);const Ee=a.get(he);if(he.version!==Ee.__version||ne===!0){t.activeTexture(i.TEXTURE0+q);const Ce=Lt.getPrimaries(Lt.workingColorSpace),ge=E.colorSpace===Br?null:Lt.getPrimaries(E.colorSpace),_e=E.colorSpace===Br||Ce===ge?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,et=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let xe=0;xe<6;xe++)!Ne&&!et?Ue[xe]=y(E.image[xe],!0,s.maxCubemapSize):Ue[xe]=et?E.image[xe].image:E.image[xe],Ue[xe]=Rt(E,Ue[xe]);const Pe=Ue[0],tt=l.convert(E.format,E.colorSpace),st=l.convert(E.type),ht=R(E.internalFormat,tt,st,E.normalized,E.colorSpace),W=E.isVideoTexture!==!0,Le=Ee.__version===void 0||ne===!0,ve=he.dataReady;let De=P(E,Pe);We(i.TEXTURE_CUBE_MAP,E);let Ve;if(Ne){W&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ht,Pe.width,Pe.height);for(let xe=0;xe<6;xe++){Ve=Ue[xe].mipmaps;for(let it=0;it<Ve.length;it++){const Ze=Ve[it];E.format!==Ui?tt!==null?W?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,0,0,Ze.width,Ze.height,tt,Ze.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,ht,Ze.width,Ze.height,0,Ze.data):mt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,0,0,Ze.width,Ze.height,tt,st,Ze.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it,ht,Ze.width,Ze.height,0,tt,st,Ze.data)}}}else{if(Ve=E.mipmaps,W&&Le){Ve.length>0&&De++;const xe=ut(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,ht,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(et){W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ue[xe].width,Ue[xe].height,tt,st,Ue[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,Ue[xe].width,Ue[xe].height,0,tt,st,Ue[xe].data);for(let it=0;it<Ve.length;it++){const It=Ve[it].image[xe].image;W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,0,0,It.width,It.height,tt,st,It.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,ht,It.width,It.height,0,tt,st,It.data)}}else{W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,tt,st,Ue[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,ht,tt,st,Ue[xe]);for(let it=0;it<Ve.length;it++){const Ze=Ve[it];W?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,0,0,tt,st,Ze.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,it+1,ht,tt,st,Ze.image[xe])}}}S(E)&&N(i.TEXTURE_CUBE_MAP),Ee.__version=he.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Re(F,E,q,ne,he,Ee){const Ce=l.convert(q.format,q.colorSpace),ge=l.convert(q.type),_e=R(q.internalFormat,Ce,ge,q.normalized,q.colorSpace),Ne=a.get(E),et=a.get(q);if(et.__renderTarget=E,!Ne.__hasExternalTextures){const Ue=Math.max(1,E.width>>Ee),Pe=Math.max(1,E.height>>Ee);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,Ee,_e,Ue,Pe,E.depth,0,Ce,ge,null):t.texImage2D(he,Ee,_e,Ue,Pe,0,Ce,ge,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),at(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ne,he,et.__webglTexture,0,ct(E)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ne,he,et.__webglTexture,Ee),t.bindFramebuffer(i.FRAMEBUFFER,null)}function St(F,E,q){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){const ne=E.depthTexture,he=ne&&ne.isDepthTexture?ne.type:null,Ee=L(E.stencilBuffer,he),Ce=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;at(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(E),Ee,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(E),Ee,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Ee,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Ce,i.RENDERBUFFER,F)}else{const ne=E.textures;for(let he=0;he<ne.length;he++){const Ee=ne[he],Ce=l.convert(Ee.format,Ee.colorSpace),ge=l.convert(Ee.type),_e=R(Ee.internalFormat,Ce,ge,Ee.normalized,Ee.colorSpace);at(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,ct(E),_e,E.width,E.height):q?i.renderbufferStorageMultisample(i.RENDERBUFFER,ct(E),_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Vt(F,E,q){const ne=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=a.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ne){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),We(i.TEXTURE_CUBE_MAP,E.depthTexture);const Ne=l.convert(E.depthTexture.format),et=l.convert(E.depthTexture.type);let Ue;E.depthTexture.format===vr?Ue=i.DEPTH_COMPONENT24:E.depthTexture.format===Sa&&(Ue=i.DEPTH24_STENCIL8);for(let Pe=0;Pe<6;Pe++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Pe,0,Ue,E.width,E.height,0,Ne,et,null)}}else $(E.depthTexture,0);const Ee=he.__webglTexture,Ce=ct(E),ge=ne?i.TEXTURE_CUBE_MAP_POSITIVE_X+q:i.TEXTURE_2D,_e=E.depthTexture.format===Sa?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===vr)at(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ge,Ee,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ge,Ee,0);else if(E.depthTexture.format===Sa)at(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,ge,Ee,0,Ce):i.framebufferTexture2D(i.FRAMEBUFFER,_e,ge,Ee,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function vt(F){const E=a.get(F),q=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ne=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ne){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ne.removeEventListener("dispose",he)};ne.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ne}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(q)for(let ne=0;ne<6;ne++)Vt(E.__webglFramebuffer[ne],F,ne);else{const ne=F.texture.mipmaps;ne&&ne.length>0?Vt(E.__webglFramebuffer[0],F,0):Vt(E.__webglFramebuffer,F,0)}else if(q){E.__webglDepthbuffer=[];for(let ne=0;ne<6;ne++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ne]),E.__webglDepthbuffer[ne]===void 0)E.__webglDepthbuffer[ne]=i.createRenderbuffer(),St(E.__webglDepthbuffer[ne],F,!1);else{const he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer[ne];i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Ee)}}else{const ne=F.texture.mipmaps;if(ne&&ne.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),St(E.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ee=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Ee),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Ee)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pe(F,E,q){const ne=a.get(F);E!==void 0&&Re(ne.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),q!==void 0&&vt(F)}function He(F){const E=F.texture,q=a.get(F),ne=a.get(E);F.addEventListener("dispose",T);const he=F.textures,Ee=F.isWebGLCubeRenderTarget===!0,Ce=he.length>1;if(Ce||(ne.__webglTexture===void 0&&(ne.__webglTexture=i.createTexture()),ne.__version=E.version,u.memory.textures++),Ee){q.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer[ge]=[];for(let _e=0;_e<E.mipmaps.length;_e++)q.__webglFramebuffer[ge][_e]=i.createFramebuffer()}else q.__webglFramebuffer[ge]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){q.__webglFramebuffer=[];for(let ge=0;ge<E.mipmaps.length;ge++)q.__webglFramebuffer[ge]=i.createFramebuffer()}else q.__webglFramebuffer=i.createFramebuffer();if(Ce)for(let ge=0,_e=he.length;ge<_e;ge++){const Ne=a.get(he[ge]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),u.memory.textures++)}if(F.samples>0&&at(F)===!1){q.__webglMultisampledFramebuffer=i.createFramebuffer(),q.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,q.__webglMultisampledFramebuffer);for(let ge=0;ge<he.length;ge++){const _e=he[ge];q.__webglColorRenderbuffer[ge]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,q.__webglColorRenderbuffer[ge]);const Ne=l.convert(_e.format,_e.colorSpace),et=l.convert(_e.type),Ue=R(_e.internalFormat,Ne,et,_e.normalized,_e.colorSpace,F.isXRRenderTarget===!0),Pe=ct(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Pe,Ue,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ge,i.RENDERBUFFER,q.__webglColorRenderbuffer[ge])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(q.__webglDepthRenderbuffer=i.createRenderbuffer(),St(q.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Ee){t.bindTexture(i.TEXTURE_CUBE_MAP,ne.__webglTexture),We(i.TEXTURE_CUBE_MAP,E);for(let ge=0;ge<6;ge++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Re(q.__webglFramebuffer[ge][_e],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Re(q.__webglFramebuffer[ge],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);S(E)&&N(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Ce){for(let ge=0,_e=he.length;ge<_e;ge++){const Ne=he[ge],et=a.get(Ne);let Ue=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ue=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,et.__webglTexture),We(Ue,Ne),Re(q.__webglFramebuffer,F,Ne,i.COLOR_ATTACHMENT0+ge,Ue,0),S(Ne)&&N(Ue)}t.unbindTexture()}else{let ge=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(ge=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ge,ne.__webglTexture),We(ge,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Re(q.__webglFramebuffer[_e],F,E,i.COLOR_ATTACHMENT0,ge,_e);else Re(q.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,ge,0);S(E)&&N(ge),t.unbindTexture()}F.depthBuffer&&vt(F)}function be(F){const E=F.textures;for(let q=0,ne=E.length;q<ne;q++){const he=E[q];if(S(he)){const Ee=z(F),Ce=a.get(he).__webglTexture;t.bindTexture(Ee,Ce),N(Ee),t.unbindTexture()}}}const lt=[],Dt=[];function Ct(F){if(F.samples>0){if(at(F)===!1){const E=F.textures,q=F.width,ne=F.height;let he=i.COLOR_BUFFER_BIT;const Ee=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Ce=a.get(F),ge=E.length>1;if(ge)for(let Ne=0;Ne<E.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const _e=F.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),ge){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);const et=a.get(E[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,et,0)}i.blitFramebuffer(0,0,q,ne,0,0,q,ne,he,i.NEAREST),m===!0&&(lt.length=0,Dt.length=0,lt.push(i.COLOR_ATTACHMENT0+Ne),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(lt.push(Ee),Dt.push(Ee),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,lt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ge)for(let Ne=0;Ne<E.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Ce.__webglColorRenderbuffer[Ne]);const et=a.get(E[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Ce.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,et,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&m){const E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function ct(F){return Math.min(s.maxSamples,F.samples)}function at(F){const E=a.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function B(F){const E=u.render.frame;v.get(F)!==E&&(v.set(F,E),F.update())}function Rt(F,E){const q=F.colorSpace,ne=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||q!==Lc&&q!==Br&&(Lt.getTransfer(q)===Bt?(ne!==Ui||he!==si)&&mt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",q)),E}function ut(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=le,this.resetTextureUnits=ie,this.getTextureUnits=H,this.setTextureUnits=ee,this.setTexture2D=$,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=D,this.rebindTextures=pe,this.setupRenderTarget=He,this.updateRenderTargetMipmap=be,this.updateMultisampleRenderTarget=Ct,this.setupDepthRenderbuffer=vt,this.setupFrameBufferTexture=Re,this.useMultisampledRTT=at,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function PC(i,e){function t(a,s=Br){let l;const u=Lt.getTransfer(s);if(a===si)return i.UNSIGNED_BYTE;if(a===mh)return i.UNSIGNED_SHORT_4_4_4_4;if(a===gh)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Sv)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===yv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(a===_v)return i.BYTE;if(a===xv)return i.SHORT;if(a===Do)return i.UNSIGNED_SHORT;if(a===ph)return i.INT;if(a===qi)return i.UNSIGNED_INT;if(a===Xi)return i.FLOAT;if(a===Ki)return i.HALF_FLOAT;if(a===Mv)return i.ALPHA;if(a===Ev)return i.RGB;if(a===Ui)return i.RGBA;if(a===vr)return i.DEPTH_COMPONENT;if(a===Sa)return i.DEPTH_STENCIL;if(a===Tv)return i.RED;if(a===vh)return i.RED_INTEGER;if(a===wa)return i.RG;if(a===_h)return i.RG_INTEGER;if(a===xh)return i.RGBA_INTEGER;if(a===Sc||a===yc||a===Mc||a===Ec)if(u===Bt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Sc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===yc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===Mc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Ec)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Sc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===yc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===Mc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Ec)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Ef||a===Tf||a===wf||a===Af)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Ef)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Tf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===wf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Af)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Cf||a===Rf||a===bf||a===Pf||a===Lf||a===bc||a===Df)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Cf||a===Rf)return u===Bt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===bf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===Pf)return l.COMPRESSED_R11_EAC;if(a===Lf)return l.COMPRESSED_SIGNED_R11_EAC;if(a===bc)return l.COMPRESSED_RG11_EAC;if(a===Df)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Nf||a===Uf||a===Ff||a===Of||a===If||a===kf||a===zf||a===Hf||a===Vf||a===Gf||a===Bf||a===Wf||a===Xf||a===$f)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Nf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Uf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Ff)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Of)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===If)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===kf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===zf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Hf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Vf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Gf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Bf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Wf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Xf)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===$f)return u===Bt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Yf||a===qf||a===Kf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Yf)return u===Bt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===qf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Kf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===jf||a===Zf||a===Pc||a===Jf)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===jf)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Zf)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Pc)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===Jf)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===No?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:t}}const LC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,DC=`
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

}`;class NC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new Uv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new ji({vertexShader:LC,fragmentShader:DC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new oi(new Bc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class UC extends Kr{constructor(e,t){super();const a=this;let s=null,l=1,u=null,d="local-floor",m=1,p=null,v=null,x=null,_=null,M=null,w=null;const b=typeof XRWebGLBinding<"u",y=new NC,S={},N=t.getContextAttributes();let z=null,R=null;const L=[],P=[],I=new ot;let T=null,U=null;const k=new vi;k.viewport=new rn;const G=new vi;G.viewport=new rn;const j=[k,G],ie=new HM;let H=null,ee=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(oe){let fe=L[oe];return fe===void 0&&(fe=new zd,L[oe]=fe),fe.getTargetRaySpace()},this.getControllerGrip=function(oe){let fe=L[oe];return fe===void 0&&(fe=new zd,L[oe]=fe),fe.getGripSpace()},this.getHand=function(oe){let fe=L[oe];return fe===void 0&&(fe=new zd,L[oe]=fe),fe.getHandSpace()};function le(oe){const fe=P.indexOf(oe.inputSource);if(fe===-1)return;const we=L[fe];we!==void 0&&(we.update(oe.inputSource,oe.frame,p||u),we.dispatchEvent({type:oe.type,data:oe.inputSource}))}function se(){s.removeEventListener("select",le),s.removeEventListener("selectstart",le),s.removeEventListener("selectend",le),s.removeEventListener("squeeze",le),s.removeEventListener("squeezestart",le),s.removeEventListener("squeezeend",le),s.removeEventListener("end",se),s.removeEventListener("inputsourceschange",$);for(let oe=0;oe<L.length;oe++){const fe=P[oe];fe!==null&&(P[oe]=null,L[oe].disconnect(fe))}H=null,ee=null,y.reset();for(const oe in S)delete S[oe];if(e.setRenderTarget(z),M=null,_=null,x=null,s=null,R=null,Ye.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),U!==null){const oe=U.camera;oe.fov=U.fov,oe.zoom=U.zoom,oe.updateProjectionMatrix(),U=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(oe){l=oe,a.isPresenting===!0&&mt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(oe){d=oe,a.isPresenting===!0&&mt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(oe){p=oe},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(oe){if(s=oe,s!==null){if(z=e.getRenderTarget(),s.addEventListener("select",le),s.addEventListener("selectstart",le),s.addEventListener("selectend",le),s.addEventListener("squeeze",le),s.addEventListener("squeezestart",le),s.addEventListener("squeezeend",le),s.addEventListener("end",se),s.addEventListener("inputsourceschange",$),N.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let we=null,Qe=null,Re=null;N.depth&&(Re=N.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,we=N.stencil?Sa:vr,Qe=N.stencil?No:qi);const St={colorFormat:t.RGBA8,depthFormat:Re,scaleFactor:l};x=this.getBinding(),_=x.createProjectionLayer(St),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new Oi(_.textureWidth,_.textureHeight,{format:Ui,type:si,depthTexture:new Fo(_.textureWidth,_.textureHeight,Qe,void 0,void 0,void 0,void 0,void 0,void 0,we),stencilBuffer:N.stencil,colorSpace:e.outputColorSpace,samples:N.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const we={antialias:N.antialias,alpha:!0,depth:N.depth,stencil:N.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(s,t,we),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Oi(M.framebufferWidth,M.framebufferHeight,{format:Ui,type:si,colorSpace:e.outputColorSpace,stencilBuffer:N.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await s.requestReferenceSpace(d),Ye.setContext(s),Ye.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function $(oe){for(let fe=0;fe<oe.removed.length;fe++){const we=oe.removed[fe],Qe=P.indexOf(we);Qe>=0&&(P[Qe]=null,L[Qe].disconnect(we))}for(let fe=0;fe<oe.added.length;fe++){const we=oe.added[fe];let Qe=P.indexOf(we);if(Qe===-1){for(let St=0;St<L.length;St++)if(St>=P.length){P.push(we),Qe=St;break}else if(P[St]===null){P[St]=we,Qe=St;break}if(Qe===-1)break}const Re=L[Qe];Re&&Re.connect(we)}}const K=new Q,Z=new Q;function D(oe,fe,we){K.setFromMatrixPosition(fe.matrixWorld),Z.setFromMatrixPosition(we.matrixWorld);const Qe=K.distanceTo(Z),Re=fe.projectionMatrix.elements,St=we.projectionMatrix.elements,Vt=Re[14]/(Re[10]-1),vt=Re[14]/(Re[10]+1),pe=(Re[9]+1)/Re[5],He=(Re[9]-1)/Re[5],be=(Re[8]-1)/Re[0],lt=(St[8]+1)/St[0],Dt=Vt*be,Ct=Vt*lt,ct=Qe/(-be+lt),at=ct*-be;if(fe.matrixWorld.decompose(oe.position,oe.quaternion,oe.scale),oe.translateX(at),oe.translateZ(ct),oe.matrixWorld.compose(oe.position,oe.quaternion,oe.scale),oe.matrixWorldInverse.copy(oe.matrixWorld).invert(),Re[10]===-1)oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse);else{const B=Vt+ct,Rt=vt+ct,ut=Dt-at,F=Ct+(Qe-at),E=pe*vt/Rt*B,q=He*vt/Rt*B;oe.projectionMatrix.makePerspective(ut,F,E,q,B,Rt),oe.projectionMatrixInverse.copy(oe.projectionMatrix).invert()}}function J(oe,fe){fe===null?oe.matrixWorld.copy(oe.matrix):oe.matrixWorld.multiplyMatrices(fe.matrixWorld,oe.matrix),oe.matrixWorldInverse.copy(oe.matrixWorld).invert()}this.updateCamera=function(oe){if(s===null)return;let fe=oe.near,we=oe.far;y.texture!==null&&(y.depthNear>0&&(fe=y.depthNear),y.depthFar>0&&(we=y.depthFar)),ie.near=G.near=k.near=fe,ie.far=G.far=k.far=we,(H!==ie.near||ee!==ie.far)&&(s.updateRenderState({depthNear:ie.near,depthFar:ie.far}),H=ie.near,ee=ie.far),ie.layers.mask=oe.layers.mask|6,k.layers.mask=ie.layers.mask&-5,G.layers.mask=ie.layers.mask&-3;const Qe=oe.parent,Re=ie.cameras;J(ie,Qe);for(let St=0;St<Re.length;St++)J(Re[St],Qe);Re.length===2?D(ie,k,G):ie.projectionMatrix.copy(k.projectionMatrix),U===null&&oe.isPerspectiveCamera&&(U={camera:oe,fov:oe.fov,zoom:oe.zoom}),ye(oe,ie,Qe)};function ye(oe,fe,we){we===null?oe.matrix.copy(fe.matrixWorld):(oe.matrix.copy(we.matrixWorld),oe.matrix.invert(),oe.matrix.multiply(fe.matrixWorld)),oe.matrix.decompose(oe.position,oe.quaternion,oe.scale),oe.updateMatrixWorld(!0),oe.projectionMatrix.copy(fe.projectionMatrix),oe.projectionMatrixInverse.copy(fe.projectionMatrixInverse),oe.isPerspectiveCamera&&(oe.fov=eh*2*Math.atan(1/oe.projectionMatrix.elements[5]),oe.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(oe){m=oe,_!==null&&(_.fixedFoveation=oe),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=oe)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ie)},this.getCameraTexture=function(oe){return S[oe]};let Ge=null;function We(oe,fe){if(v=fe.getViewerPose(p||u),w=fe,v!==null){const we=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Qe=!1;we.length!==ie.cameras.length&&(ie.cameras.length=0,Qe=!0);for(let vt=0;vt<we.length;vt++){const pe=we[vt];let He=null;if(M!==null)He=M.getViewport(pe);else{const lt=x.getViewSubImage(_,pe);He=lt.viewport,vt===0&&(e.setRenderTargetTextures(R,lt.colorTexture,lt.depthStencilTexture),e.setRenderTarget(R))}let be=j[vt];be===void 0&&(be=new vi,be.layers.enable(vt),be.viewport=new rn,j[vt]=be),be.matrix.fromArray(pe.transform.matrix),be.matrix.decompose(be.position,be.quaternion,be.scale),be.projectionMatrix.fromArray(pe.projectionMatrix),be.projectionMatrixInverse.copy(be.projectionMatrix).invert(),be.viewport.set(He.x,He.y,He.width,He.height),vt===0&&(ie.matrix.copy(be.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Qe===!0&&ie.cameras.push(be)}const Re=s.enabledFeatures;if(Re&&Re.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){x=a.getBinding();const vt=x.getDepthInformation(we[0]);vt&&vt.isValid&&vt.texture&&y.init(vt,s.renderState)}if(Re&&Re.includes("camera-access")&&b){e.state.unbindTexture(),x=a.getBinding();for(let vt=0;vt<we.length;vt++){const pe=we[vt].camera;if(pe){let He=S[pe];He||(He=new Uv,S[pe]=He);const be=x.getCameraImage(pe);He.sourceTexture=be}}}}for(let we=0;we<L.length;we++){const Qe=P[we],Re=L[we];Qe!==null&&Re!==void 0&&Re.update(Qe,fe,p||u)}Ge&&Ge(oe,fe),fe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:fe}),w=null}const Ye=new kv;Ye.setAnimationLoop(We),this.setAnimationLoop=function(oe){Ge=oe},this.dispose=function(){}}}const FC=new Qt,Xv=new xt;Xv.set(-1,0,0,0,1,0,0,0,1);function OC(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,Fv(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,N,z,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,R)):S.isMeshMatcapMaterial?(l(y,S),w(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,N,z):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Zn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Zn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const N=e.get(S),z=N.envMap,R=N.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(FC.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Xv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,N,z){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*N,y.scale.value=z*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,N){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Zn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=N.texture,y.transmissionSamplerSize.value.set(N.width,N.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const N=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(N.matrixWorld),y.nearDistance.value=N.shadow.camera.near,y.farDistance.value=N.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function IC(i,e,t,a){let s={},l={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const P=L.program;a.uniformBlockBinding(R,P)}function p(R,L){let P=s[R.id];P===void 0&&(y(R),P=v(R),s[R.id]=P,R.addEventListener("dispose",N));const I=L.program;a.updateUBOMapping(R,I);const T=e.render.frame;l[R.id]!==T&&(_(R),l[R.id]=T)}function v(R){const L=x();R.__bindingPointIndex=L;const P=i.createBuffer(),I=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function x(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const L=s[R.id],P=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let T=0,U=P.length;T<U;T++){const k=P[T];if(Array.isArray(k))for(let G=0,j=k.length;G<j;G++)M(k[G],T,G,I);else M(k,T,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(R,L,P,I){if(b(R,L,P,I)===!0){const T=R.__offset,U=R.value;if(Array.isArray(U)){let k=0;for(let G=0;G<U.length;G++){const j=U[G],ie=S(j);w(j,R.__data,k),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(k+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(U,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,R.__data)}}function w(R,L,P){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,P)}function b(R,L,P,I){const T=R.value,U=L+"_"+P;if(I[U]===void 0)return typeof T=="number"||typeof T=="boolean"?I[U]=T:ArrayBuffer.isView(T)?I[U]=T.slice():I[U]=T.clone(),!0;{const k=I[U];if(typeof T=="number"||typeof T=="boolean"){if(k!==T)return I[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(k.equals(T)===!1)return k.copy(T),!0}}return!1}function y(R){const L=R.uniforms;let P=0;const I=16;for(let U=0,k=L.length;U<k;U++){const G=Array.isArray(L[U])?L[U]:[L[U]];for(let j=0,ie=G.length;j<ie;j++){const H=G[j],ee=Array.isArray(H.value)?H.value:[H.value];for(let le=0,se=ee.length;le<se;le++){const $=ee[le],K=S($),Z=P%I,D=Z%K.boundary,J=Z+D;P+=D,J!==0&&I-J<K.storage&&(P+=I-J),H.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=P,P+=K.storage}}}const T=P%I;return T>0&&(P+=I-T),R.__size=P,R.__cache={},this}function S(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?mt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):mt("WebGLRenderer: Unsupported uniform value type.",R),L}function N(R){const L=R.target;L.removeEventListener("dispose",N);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete l[L.id]}function z(){for(const R in s)i.deleteBuffer(s[R]);u=[],s={},l={}}return{bind:m,update:p,dispose:z}}const kC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Gi=null;function zC(){return Gi===null&&(Gi=new yM(kC,16,16,wa,Ki),Gi.name="DFG_LUT",Gi.minFilter=On,Gi.magFilter=On,Gi.wrapS=hr,Gi.wrapT=hr,Gi.generateMipmaps=!1,Gi.needsUpdate=!0),Gi}class HC{constructor(e={}){const{canvas:t=Yy(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:M=si}=e;this.isWebGLRenderer=!0;let w;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=a.getContextAttributes().alpha}else w=u;const b=M,y=new Set([xh,_h,vh]),S=new Set([si,qi,Do,No,mh,gh]),N=new Uint32Array(4),z=new Int32Array(4),R=new Q;let L=null,P=null;const I=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Yi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const k=this;let G=!1,j=null,ie=null,H=null,ee=null;this._outputColorSpace=ai;let le=0,se=0,$=null,K=-1,Z=null;const D=new rn,J=new rn;let ye=null;const Ge=new wt(0);let We=0,Ye=t.width,oe=t.height,fe=1,we=null,Qe=null;const Re=new rn(0,0,Ye,oe),St=new rn(0,0,Ye,oe);let Vt=!1;const vt=new Ch;let pe=!1,He=!1;const be=new Qt,lt=new Q,Dt=new rn,Ct={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ct=!1;function at(){return $===null?fe:1}let B=a;function Rt(C,X){return t.getContext(C,X)}let ut,F,E,q,ne,he,Ee,Ce,ge,_e,Ne,et,Ue,Pe,tt,st,ht,W,Le,ve,De,Ve,xe;try{const C={alpha:!0,depth:s,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${hh}`),t.addEventListener("webglcontextlost",It,!1),t.addEventListener("webglcontextrestored",Nt,!1),t.addEventListener("webglcontextcreationerror",Tn,!1),B===null){const X="webgl2";if(B=Rt(X,C),B===null)throw Rt(X)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}it()}catch(C){throw t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Tn,!1),Ut("WebGLRenderer: "+C.message),C}function it(){ut=new zw(B),ut.init(),De=new PC(B,ut),F=new bw(B,ut,e,De),E=new RC(B,ut),F.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ie=B.createFramebuffer(),H=B.createFramebuffer(),ee=B.createFramebuffer(),q=new Gw(B),ne=new pC,he=new bC(B,ut,E,ne,F,De,q),Ee=new kw(k),Ce=new WM(B),Ve=new Cw(B,Ce),ge=new Hw(B,Ce,q,Ve),_e=new Ww(B,ge,Ce,Ve,q),W=new Bw(B,F,he),tt=new Pw(ne),Ne=new hC(k,Ee,ut,F,Ve,tt),et=new OC(k,ne),Ue=new gC,Pe=new MC(ut),ht=new Aw(k,Ee,E,_e,w,m),st=new CC(k,_e,F),xe=new IC(B,q,F,E),Le=new Rw(B,ut,q),ve=new Vw(B,ut,q),q.programs=Ne.programs,k.capabilities=F,k.extensions=ut,k.properties=ne,k.renderLists=Ue,k.shadowMap=st,k.state=E,k.info=q}b!==si&&(U=new $w(b,t.width,t.height,d,s,l));const Ze=new UC(k,B);this.xr=Ze,this.getContext=function(){return B},this.getContextAttributes=function(){return B.getContextAttributes()},this.forceContextLoss=function(){const C=ut.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=ut.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return fe},this.setPixelRatio=function(C){C!==void 0&&(fe=C,this.setSize(Ye,oe,!1))},this.getSize=function(C){return C.set(Ye,oe)},this.setSize=function(C,X,ue=!0){if(Ze.isPresenting){mt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=C,oe=X,t.width=Math.floor(C*fe),t.height=Math.floor(X*fe),ue===!0&&(t.style.width=C+"px",t.style.height=X+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,C,X)},this.getDrawingBufferSize=function(C){return C.set(Ye*fe,oe*fe).floor()},this.setDrawingBufferSize=function(C,X,ue){Ye=C,oe=X,fe=ue,t.width=Math.floor(C*ue),t.height=Math.floor(X*ue),this.setViewport(0,0,C,X)},this.setEffects=function(C){if(b===si){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let X=0;X<C.length;X++)if(C[X].isOutputPass===!0){mt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(Re)},this.setViewport=function(C,X,ue,re){C.isVector4?Re.set(C.x,C.y,C.z,C.w):Re.set(C,X,ue,re),E.viewport(D.copy(Re).multiplyScalar(fe).round())},this.getScissor=function(C){return C.copy(St)},this.setScissor=function(C,X,ue,re){C.isVector4?St.set(C.x,C.y,C.z,C.w):St.set(C,X,ue,re),E.scissor(J.copy(St).multiplyScalar(fe).round())},this.getScissorTest=function(){return Vt},this.setScissorTest=function(C){E.setScissorTest(Vt=C)},this.setOpaqueSort=function(C){we=C},this.setTransparentSort=function(C){Qe=C},this.getClearColor=function(C){return C.copy(ht.getClearColor())},this.setClearColor=function(){ht.setClearColor(...arguments)},this.getClearAlpha=function(){return ht.getClearAlpha()},this.setClearAlpha=function(){ht.setClearAlpha(...arguments)},this.clear=function(C=!0,X=!0,ue=!0){let re=0;if(C){let te=!1;if($!==null){const Ie=$.texture.format;te=y.has(Ie)}if(te){const Ie=$.texture.type,Fe=S.has(Ie),Oe=ht.getClearColor(),Ke=ht.getClearAlpha(),nt=Oe.r,gt=Oe.g,yt=Oe.b;Fe?(N[0]=nt,N[1]=gt,N[2]=yt,N[3]=Ke,B.clearBufferuiv(B.COLOR,0,N)):(z[0]=nt,z[1]=gt,z[2]=yt,z[3]=Ke,B.clearBufferiv(B.COLOR,0,z))}else re|=B.COLOR_BUFFER_BIT}X&&(re|=B.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),ue&&(re|=B.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&B.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",It,!1),t.removeEventListener("webglcontextrestored",Nt,!1),t.removeEventListener("webglcontextcreationerror",Tn,!1),ht.dispose(),Ue.dispose(),Pe.dispose(),ne.dispose(),Ee.dispose(),_e.dispose(),Ve.dispose(),xe.dispose(),Ne.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",zo),Ze.removeEventListener("sessionend",Ho),kn.stop()};function It(C){C.preventDefault(),Uc("WebGLRenderer: Context Lost."),G=!0}function Nt(){Uc("WebGLRenderer: Context Restored."),G=!1;const C=q.autoReset,X=st.enabled,ue=st.autoUpdate,re=st.needsUpdate,te=st.type;it(),q.autoReset=C,st.enabled=X,st.autoUpdate=ue,st.needsUpdate=re,st.type=te}function Tn(C){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function li(C){const X=C.target;X.removeEventListener("dispose",li),jr(X)}function jr(C){Aa(C),ne.remove(C)}function Aa(C){const X=ne.get(C).programs;X!==void 0&&(X.forEach(function(ue){Ne.releaseProgram(ue)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,X,ue,re,te,Ie){X===null&&(X=Ct);const Fe=te.isMesh&&te.matrixWorld.determinantAffine()<0,Oe=en(C,X,ue,re,te);E.setMaterial(re,Fe);let Ke=ue.index,nt=1;if(re.wireframe===!0){if(Ke=ge.getWireframeAttribute(ue),Ke===void 0)return;nt=2}const gt=ue.drawRange,yt=ue.attributes.position;let $e=gt.start*nt,bt=(gt.start+gt.count)*nt;Ie!==null&&($e=Math.max($e,Ie.start*nt),bt=Math.min(bt,(Ie.start+Ie.count)*nt)),Ke!==null?($e=Math.max($e,0),bt=Math.min(bt,Ke.count)):yt!=null&&($e=Math.max($e,0),bt=Math.min(bt,yt.count));const an=bt-$e;if(an<0||an===1/0)return;Ve.setup(te,re,Oe,ue,Ke);let $t,Ht=Le;if(Ke!==null&&($t=Ce.get(Ke),Ht=ve,Ht.setIndex($t)),te.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*at()),Ht.setMode(B.LINES)):Ht.setMode(B.TRIANGLES);else if(te.isLine){let dn=re.linewidth;dn===void 0&&(dn=1),E.setLineWidth(dn*at()),te.isLineSegments?Ht.setMode(B.LINES):te.isLineLoop?Ht.setMode(B.LINE_LOOP):Ht.setMode(B.LINE_STRIP)}else te.isPoints?Ht.setMode(B.POINTS):te.isSprite&&Ht.setMode(B.TRIANGLES);if(te.isBatchedMesh)if(ut.get("WEBGL_multi_draw"))Ht.renderMultiDraw(te._multiDrawStarts,te._multiDrawCounts,te._multiDrawCount);else{const dn=te._multiDrawStarts,Be=te._multiDrawCounts,on=te._multiDrawCount,Pt=Ke?Ce.get(Ke).bytesPerElement:1,bn=ne.get(re).currentProgram.getUniforms();for(let Mt=0;Mt<on;Mt++)bn.setValue(B,"_gl_DrawID",Mt),Ht.render(dn[Mt]/Pt,Be[Mt])}else if(te.isInstancedMesh)Ht.renderInstances($e,an,te.count);else if(ue.isInstancedBufferGeometry){const dn=ue._maxInstanceCount!==void 0?ue._maxInstanceCount:1/0,Be=Math.min(ue.instanceCount,dn);Ht.renderInstances($e,an,Be)}else Ht.render($e,an)};function Zr(C,X,ue,re){j!==null&&C.isNodeMaterial&&j.setObject(re,C),pe===!0&&tt.setState(C,ue,!1),C.transparent===!0&&C.side===Ni&&C.forceSinglePass===!1?(C.side=Zn,C.needsUpdate=!0,ea(C,X,re),C.side=Ea,C.needsUpdate=!0,ea(C,X,re),C.side=Ni):ea(C,X,re)}this.compile=function(C,X,ue=null){ue===null&&(ue=C),j!==null&&j.renderStart(C,X,ue),P=Pe.get(ue),P.init(X),T.push(P),ue.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),C!==ue&&C.traverseVisible(function(te){te.isLight&&te.layers.test(X.layers)&&(P.pushLight(te),te.castShadow&&P.pushShadow(te))}),P.setupLights(),j!==null&&j.updateLights(P.state.lightsArray),He=this.localClippingEnabled,pe=tt.init(this.clippingPlanes,He),pe===!0&&tt.setGlobalState(this.clippingPlanes,X),j!==null&&st.render(P.state.shadowsArray,ue,X);const re=new Set;return C.traverse(function(te){if(!(te.isMesh||te.isPoints||te.isLine||te.isSprite))return;const Ie=te.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){const Oe=Ie[Fe];Zr(Oe,ue,X,te),re.add(Oe)}else Zr(Ie,ue,X,te),re.add(Ie)}),P=T.pop(),j!==null&&j.renderEnd(),re},this.compileAsync=function(C,X,ue=null){const re=this.compile(C,X,ue);return new Promise(te=>{function Ie(){if(re.forEach(function(Fe){const Ke=ne.get(Fe).currentProgram;(Ke===void 0||Ke.isReady())&&re.delete(Fe)}),re.size===0){te(C);return}setTimeout(Ie,10)}ut.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Jr=null;function $c(C){Jr&&Jr(C)}function zo(){kn.stop()}function Ho(){kn.start()}const kn=new kv;kn.setAnimationLoop($c),typeof self<"u"&&kn.setContext(self),this.setAnimationLoop=function(C){Jr=C,Ze.setAnimationLoop(C),C===null?kn.stop():kn.start()},Ze.addEventListener("sessionstart",zo),Ze.addEventListener("sessionend",Ho),this.render=function(C,X){if(X!==void 0&&X.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(G===!0)return;j!==null&&j.renderStart(C,X);const ue=Ze.enabled===!0&&Ze.isPresenting===!0,re=U!==null&&($===null||ue)&&U.begin(k,$);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),X.parent===null&&X.matrixWorldAutoUpdate===!0&&X.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(X),X=Ze.getCamera()),C.isScene===!0&&C.onBeforeRender(k,C,X,$),P=Pe.get(C,T.length),P.init(X),P.state.textureUnits=he.getTextureUnits(),T.push(P),be.multiplyMatrices(X.projectionMatrix,X.matrixWorldInverse),vt.setFromProjectionMatrix(be,$i,X.reversedDepth),He=this.localClippingEnabled,pe=tt.init(this.clippingPlanes,He),L=Ue.get(C,I.length),L.init(),I.push(L),Ze.enabled===!0&&Ze.isPresenting===!0){const Fe=k.xr.getDepthSensingMesh();Fe!==null&&Ca(Fe,X,-1/0,k.sortObjects)}Ca(C,X,0,k.sortObjects),L.finish(),j!==null&&j.updateLights(P.state.lightsArray),k.sortObjects===!0&&L.sort(we,Qe),ct=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,ct&&ht.addToRenderList(L,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pe===!0&&tt.beginShadows();const te=P.state.shadowsArray;if(st.render(te,C,X),pe===!0&&tt.endShadows(),(re&&U.hasRenderPass())===!1){const Fe=L.opaque,Oe=L.transmissive;if(P.setupLights(),X.isArrayCamera){const Ke=X.cameras;if(Oe.length>0)for(let nt=0,gt=Ke.length;nt<gt;nt++){const yt=Ke[nt];Vo(Fe,Oe,C,yt)}ct&&ht.render(C);for(let nt=0,gt=Ke.length;nt<gt;nt++){const yt=Ke[nt];As(L,C,yt,yt.viewport)}}else Oe.length>0&&Vo(Fe,Oe,C,X),ct&&ht.render(C),As(L,C,X)}$!==null&&se===0&&(he.updateMultisampleRenderTarget($),he.updateRenderTargetMipmap($)),re&&U.end(k),C.isScene===!0&&C.onAfterRender(k,C,X),Ve.resetDefaultState(),K=-1,Z=null,T.pop(),T.length>0?(P=T[T.length-1],he.setTextureUnits(P.state.textureUnits),pe===!0&&tt.setGlobalState(k.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,j!==null&&j.renderEnd()};function Ca(C,X,ue,re){if(C.visible===!1)return;if(C.layers.test(X.layers)){if(C.isGroup)ue=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(X);else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(vt)){re&&Dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(be);const Fe=_e.update(C),Oe=C.material;Oe.visible&&L.push(C,Fe,Oe,ue,Dt.z,null,X)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(vt))){const Fe=_e.update(C),Oe=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Dt.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),Dt.copy(Fe.boundingSphere.center)),Dt.applyMatrix4(C.matrixWorld).applyMatrix4(be)),Array.isArray(Oe)){const Ke=Fe.groups;for(let nt=0,gt=Ke.length;nt<gt;nt++){const yt=Ke[nt],$e=Oe[yt.materialIndex];$e&&$e.visible&&L.push(C,Fe,$e,ue,Dt.z,yt,X)}}else Oe.visible&&L.push(C,Fe,Oe,ue,Dt.z,null,X)}}const Ie=C.children;for(let Fe=0,Oe=Ie.length;Fe<Oe;Fe++)Ca(Ie[Fe],X,ue,re)}function As(C,X,ue,re){const{opaque:te,transmissive:Ie,transparent:Fe}=C;P.setupLightsView(ue),pe===!0&&tt.setGlobalState(k.clippingPlanes,ue),re&&E.viewport(D.copy(re)),te.length>0&&Qr(te,X,ue),Ie.length>0&&Qr(Ie,X,ue),Fe.length>0&&Qr(Fe,X,ue),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Vo(C,X,ue,re){if((ue.isScene===!0?ue.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const $e=ut.has("EXT_color_buffer_half_float")||ut.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new Oi(1,1,{generateMipmaps:!0,type:$e?Ki:si,minFilter:xa,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Lt.workingColorSpace})}const Ie=P.state.transmissionRenderTarget[re.id],Fe=re.viewport||D;Ie.setSize(Fe.z*k.transmissionResolutionScale,Fe.w*k.transmissionResolutionScale);const Oe=k.getRenderTarget(),Ke=k.getActiveCubeFace(),nt=k.getActiveMipmapLevel();k.setRenderTarget(Ie),k.getClearColor(Ge),We=k.getClearAlpha(),We<1&&k.setClearColor(16777215,.5),k.clear(),ct&&ht.render(ue);const gt=k.toneMapping;k.toneMapping=Yi;const yt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),pe===!0&&tt.setGlobalState(k.clippingPlanes,re),Qr(C,ue,re),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),ut.has("WEBGL_multisampled_render_to_texture")===!1){let $e=!1;for(let bt=0,an=X.length;bt<an;bt++){const $t=X[bt],{object:Ht,geometry:dn,material:Be,group:on}=$t;if(Be.side===Ni&&Ht.layers.test(re.layers)){const Pt=Be.side;Be.side=Zn,Be.needsUpdate=!0,Cs(Ht,ue,re,dn,Be,on),Be.side=Pt,Be.needsUpdate=!0,$e=!0}}$e===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}k.setRenderTarget(Oe,Ke,nt),k.setClearColor(Ge,We),yt!==void 0&&(re.viewport=yt),k.toneMapping=gt}function Qr(C,X,ue){const re=X.isScene===!0?X.overrideMaterial:null;for(let te=0,Ie=C.length;te<Ie;te++){const Fe=C[te],{object:Oe,geometry:Ke,group:nt}=Fe;let gt=Fe.material;gt.allowOverride===!0&&re!==null&&(gt=re),Oe.layers.test(ue.layers)&&Cs(Oe,X,ue,Ke,gt,nt)}}function Cs(C,X,ue,re,te,Ie){j!==null&&te.isNodeMaterial&&j.setObject(C,te),C.onBeforeRender(k,X,ue,re,te,Ie),C.modelViewMatrix.multiplyMatrices(ue.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),te.onBeforeRender(k,X,ue,re,C,Ie),te.transparent===!0&&te.side===Ni&&te.forceSinglePass===!1?(te.side=Zn,te.needsUpdate=!0,k.renderBufferDirect(ue,X,re,te,C,Ie),te.side=Ea,te.needsUpdate=!0,k.renderBufferDirect(ue,X,re,te,C,Ie),te.side=Ni):k.renderBufferDirect(ue,X,re,te,C,Ie),C.onAfterRender(k,X,ue,re,te,Ie)}function ea(C,X,ue){X.isScene!==!0&&(X=Ct);const re=ne.get(C),te=P.state.lights,Ie=P.state.shadowsArray,Fe=te.state.version,Oe=Ne.getParameters(C,te.state,Ie,X,ue,P.state.lightProbeGridArray),Ke=Ne.getProgramCacheKey(Oe);let nt=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?X.environment:null,re.fog=X.fog;const gt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=Ee.get(C.envMap||re.environment,gt),re.envMapRotation=re.environment!==null&&C.envMap===null?X.environmentRotation:C.envMapRotation,nt===void 0&&(C.addEventListener("dispose",li),nt=new Map,re.programs=nt);let yt=nt.get(Ke);if(yt!==void 0){if(re.currentProgram===yt&&re.lightsStateVersion===Fe)return Go(C,Oe),yt}else Oe.uniforms=Ne.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,ue,Oe),C.onBeforeCompile(Oe,k),yt=Ne.acquireProgram(Oe,Ke),nt.set(Ke,yt),re.uniforms=Oe.uniforms;const $e=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&($e.clippingPlanes=tt.uniform),Go(C,Oe),re.needsLights=bs(C),re.lightsStateVersion=Fe,re.needsLights&&($e.ambientLightColor.value=te.state.ambient,$e.lightProbe.value=te.state.probe,$e.sunLights.value=te.state.sun,$e.sunLightShadows.value=te.state.sunShadow,$e.directionalLights.value=te.state.directional,$e.directionalLightShadows.value=te.state.directionalShadow,$e.spotLights.value=te.state.spot,$e.spotLightShadows.value=te.state.spotShadow,$e.rectAreaLights.value=te.state.rectArea,$e.ltc_1.value=te.state.rectAreaLTC1,$e.ltc_2.value=te.state.rectAreaLTC2,$e.pointLights.value=te.state.point,$e.pointLightShadows.value=te.state.pointShadow,$e.hemisphereLights.value=te.state.hemi,$e.sunShadowMatrix.value=te.state.sunShadowMatrix,$e.sunShadowCascade.value=te.state.sunShadowCascade,$e.directionalShadowMatrix.value=te.state.directionalShadowMatrix,$e.spotLightMatrix.value=te.state.spotLightMatrix,$e.spotLightMap.value=te.state.spotLightMap,$e.pointShadowMatrix.value=te.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=yt,re.uniformsList=null,yt}function Rs(C){if(C.uniformsList===null){const X=C.currentProgram.getUniforms();C.uniformsList=wc.seqWithValue(X.seq,C.uniforms)}return C.uniformsList}function Go(C,X){const ue=ne.get(C);ue.outputColorSpace=X.outputColorSpace,ue.batching=X.batching,ue.batchingColor=X.batchingColor,ue.instancing=X.instancing,ue.instancingColor=X.instancingColor,ue.instancingMorph=X.instancingMorph,ue.skinning=X.skinning,ue.morphTargets=X.morphTargets,ue.morphNormals=X.morphNormals,ue.morphColors=X.morphColors,ue.morphTargetsCount=X.morphTargetsCount,ue.numClippingPlanes=X.numClippingPlanes,ue.numIntersection=X.numClipIntersection,ue.vertexAlphas=X.vertexAlphas,ue.vertexTangents=X.vertexTangents,ue.toneMapping=X.toneMapping}function Yc(C,X){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition(X.matrixWorld);for(let ue=0,re=C.length;ue<re;ue++){const te=C[ue];if(te.texture!==null&&te.boundingBox.containsPoint(R))return te}return null}function en(C,X,ue,re,te){X.isScene!==!0&&(X=Ct),he.resetTextureUnits();const Ie=X.fog,Fe=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?X.environment:null,Oe=$===null?k.outputColorSpace:$.isXRRenderTarget===!0?$.texture.colorSpace:Lt.workingColorSpace,Ke=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,nt=Ee.get(re.envMap||Fe,Ke),gt=re.vertexColors===!0&&!!ue.attributes.color&&ue.attributes.color.itemSize===4,yt=!!ue.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),$e=!!ue.morphAttributes.position,bt=!!ue.morphAttributes.normal,an=!!ue.morphAttributes.color;let $t=Yi;re.toneMapped&&($===null||$.isXRRenderTarget===!0)&&($t=k.toneMapping);const Ht=ue.morphAttributes.position||ue.morphAttributes.normal||ue.morphAttributes.color,dn=Ht!==void 0?Ht.length:0,Be=ne.get(re),on=P.state.lights;if(pe===!0&&(He===!0||C!==Z)){const Gt=C===Z&&re.id===K;tt.setState(re,C,Gt)}let Pt=!1;re.version===Be.__version?(Be.needsLights&&Be.lightsStateVersion!==on.state.version||Be.outputColorSpace!==Oe||te.isBatchedMesh&&Be.batching===!1||!te.isBatchedMesh&&Be.batching===!0||te.isBatchedMesh&&Be.batchingColor===!0&&te._colorsTexture===null||te.isBatchedMesh&&Be.batchingColor===!1&&te._colorsTexture!==null||te.isInstancedMesh&&Be.instancing===!1||!te.isInstancedMesh&&Be.instancing===!0||te.isSkinnedMesh&&Be.skinning===!1||!te.isSkinnedMesh&&Be.skinning===!0||te.isInstancedMesh&&Be.instancingColor===!0&&te.instanceColor===null||te.isInstancedMesh&&Be.instancingColor===!1&&te.instanceColor!==null||te.isInstancedMesh&&Be.instancingMorph===!0&&te.morphTexture===null||te.isInstancedMesh&&Be.instancingMorph===!1&&te.morphTexture!==null||Be.envMap!==nt||re.fog===!0&&Be.fog!==Ie||Be.numClippingPlanes!==void 0&&(Be.numClippingPlanes!==tt.numPlanes||Be.numIntersection!==tt.numIntersection)||Be.vertexAlphas!==gt||Be.vertexTangents!==yt||Be.morphTargets!==$e||Be.morphNormals!==bt||Be.morphColors!==an||Be.toneMapping!==$t||Be.morphTargetsCount!==dn||!!Be.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Pt=!0):(Pt=!0,Be.__version=re.version);let bn=Be.currentProgram;Pt===!0&&(bn=ea(re,X,te),j&&re.isNodeMaterial&&j.onUpdateProgram(re,bn,Be));let Mt=!1,xi=!1,Zi=!1;const kt=bn.getUniforms(),jt=Be.uniforms;if(E.useProgram(bn.program)&&(Mt=!0,xi=!0,Zi=!0),re.id!==K&&(K=re.id,xi=!0),Be.needsLights){const Gt=Yc(P.state.lightProbeGridArray,te);Be.lightProbeGrid!==Gt&&(Be.lightProbeGrid=Gt,xi=!0)}if(Mt||Z!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),kt.setValue(B,"projectionMatrix",C.projectionMatrix),kt.setValue(B,"viewMatrix",C.matrixWorldInverse);const ci=kt.map.cameraPosition;ci!==void 0&&ci.setValue(B,lt.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&kt.setValue(B,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&kt.setValue(B,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,xi=!0,Zi=!0)}if(Be.needsLights&&(on.state.sunShadowMap.length>0&&kt.setValue(B,"sunShadowMap",on.state.sunShadowMap,he),on.state.directionalShadowMap.length>0&&kt.setValue(B,"directionalShadowMap",on.state.directionalShadowMap,he),on.state.spotShadowMap.length>0&&kt.setValue(B,"spotShadowMap",on.state.spotShadowMap,he),on.state.pointShadowMap.length>0&&kt.setValue(B,"pointShadowMap",on.state.pointShadowMap,he)),te.isSkinnedMesh){kt.setOptional(B,te,"bindMatrix"),kt.setOptional(B,te,"bindMatrixInverse");const Gt=te.skeleton;Gt&&(Gt.boneTexture===null&&Gt.computeBoneTexture(),kt.setValue(B,"boneTexture",Gt.boneTexture,he))}te.isBatchedMesh&&(kt.setOptional(B,te,"batchingTexture"),kt.setValue(B,"batchingTexture",te._matricesTexture,he),kt.setOptional(B,te,"batchingIdTexture"),kt.setValue(B,"batchingIdTexture",te._indirectTexture,he),kt.setOptional(B,te,"batchingColorTexture"),te._colorsTexture!==null&&kt.setValue(B,"batchingColorTexture",te._colorsTexture,he));const Si=ue.morphAttributes;if((Si.position!==void 0||Si.normal!==void 0||Si.color!==void 0)&&W.update(te,ue,bn),(xi||Be.receiveShadow!==te.receiveShadow)&&(Be.receiveShadow=te.receiveShadow,kt.setValue(B,"receiveShadow",te.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&X.environment!==null&&(jt.envMapIntensity.value=X.environmentIntensity),jt.dfgLUT!==void 0&&(jt.dfgLUT.value=zC()),xi){if(kt.setValue(B,"toneMappingExposure",k.toneMappingExposure),Be.needsLights&&qc(jt,Zi),Ie&&re.fog===!0&&et.refreshFogUniforms(jt,Ie),et.refreshMaterialUniforms(jt,re,fe,oe,P.state.transmissionRenderTarget[C.id]),Be.needsLights&&Be.lightProbeGrid){const Gt=Be.lightProbeGrid;jt.probesSH.value=Gt.texture,jt.probesMin.value.copy(Gt.boundingBox.min),jt.probesMax.value.copy(Gt.boundingBox.max),jt.probesResolution.value.copy(Gt.resolution)}wc.upload(B,Rs(Be),jt,he)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(wc.upload(B,Rs(Be),jt,he),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&kt.setValue(B,"center",te.center),kt.setValue(B,"modelViewMatrix",te.modelViewMatrix),kt.setValue(B,"normalMatrix",te.normalMatrix),kt.setValue(B,"modelMatrix",te.matrixWorld),re.uniformsGroups!==void 0){const Gt=re.uniformsGroups;for(let ci=0,yi=Gt.length;ci<yi;ci++){const Mi=Gt[ci];xe.update(Mi,bn),xe.bind(Mi,bn)}}return bn}function qc(C,X){C.ambientLightColor.needsUpdate=X,C.lightProbe.needsUpdate=X,C.sunLights.needsUpdate=X,C.sunLightShadows.needsUpdate=X,C.directionalLights.needsUpdate=X,C.directionalLightShadows.needsUpdate=X,C.pointLights.needsUpdate=X,C.pointLightShadows.needsUpdate=X,C.spotLights.needsUpdate=X,C.spotLightShadows.needsUpdate=X,C.rectAreaLights.needsUpdate=X,C.hemisphereLights.needsUpdate=X}function bs(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return le},this.getActiveMipmapLevel=function(){return se},this.getRenderTarget=function(){return $},this.setRenderTargetTextures=function(C,X,ue){const re=ne.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ne.get(C.texture).__webglTexture=X,ne.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:ue,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,X){const ue=ne.get(C);ue.__webglFramebuffer=X,ue.__useDefaultFramebuffer=X===void 0},this.setRenderTarget=function(C,X=0,ue=0){$=C,le=X,se=ue;let re=null,te=!1,Ie=!1;if(C){const Oe=ne.get(C);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(B.FRAMEBUFFER,Oe.__webglFramebuffer),D.copy(C.viewport),J.copy(C.scissor),ye=C.scissorTest,E.viewport(D),E.scissor(J),E.setScissorTest(ye),K=-1;return}else if(Oe.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(Oe.__hasExternalTextures)he.rebindTextures(C,ne.get(C.texture).__webglTexture,ne.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const gt=C.depthTexture;if(Oe.__boundDepthTexture!==gt){if(gt!==null&&ne.has(gt)&&(C.width!==gt.image.width||C.height!==gt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const Ke=C.texture;(Ke.isData3DTexture||Ke.isDataArrayTexture||Ke.isCompressedArrayTexture)&&(Ie=!0);const nt=ne.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(nt[X])?re=nt[X][ue]:re=nt[X],te=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?re=ne.get(C).__webglMultisampledFramebuffer:Array.isArray(nt)?re=nt[ue]:re=nt,D.copy(C.viewport),J.copy(C.scissor),ye=C.scissorTest}else D.copy(Re).multiplyScalar(fe).floor(),J.copy(St).multiplyScalar(fe).floor(),ye=Vt;if(ue!==0&&(re=ie),E.bindFramebuffer(B.FRAMEBUFFER,re)&&E.drawBuffers(C,re),E.viewport(D),E.scissor(J),E.setScissorTest(ye),te){const Oe=ne.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_CUBE_MAP_POSITIVE_X+X,Oe.__webglTexture,ue)}else if(Ie){const Oe=X;for(let Ke=0;Ke<C.textures.length;Ke++){const nt=ne.get(C.textures[Ke]);B.framebufferTextureLayer(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0+Ke,nt.__webglTexture,ue,Oe)}}else if(C!==null&&ue!==0){const Oe=ne.get(C.texture);B.framebufferTexture2D(B.FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Oe.__webglTexture,ue)}K=-1};function Ps(C){const X=ne.get(C);return(X.__readFormat!==C.format||X.__readType!==C.type)&&(X.__readFormat=C.format,X.__readType=C.type,X.__formatReadable=F.textureFormatReadable(C.format),X.__typeReadable=F.textureTypeReadable(C.type)),X}this.readRenderTargetPixels=function(C,X,ue,re,te,Ie,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ke=ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ke=Ke[Fe]),Ke){E.bindFramebuffer(B.FRAMEBUFFER,Ke);try{const nt=C.textures[Oe],gt=nt.format,yt=nt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);const $e=Ps(nt);if($e.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if($e.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}X>=0&&X<=C.width-re&&ue>=0&&ue<=C.height-te&&B.readPixels(X,ue,re,te,De.convert(gt),De.convert(yt),Ie)}finally{const nt=$!==null?ne.get($).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,nt)}}},this.readRenderTargetPixelsAsync=async function(C,X,ue,re,te,Ie,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ke=ne.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&(Ke=Ke[Fe]),Ke)if(X>=0&&X<=C.width-re&&ue>=0&&ue<=C.height-te){E.bindFramebuffer(B.FRAMEBUFFER,Ke);const nt=C.textures[Oe],gt=nt.format,yt=nt.type;C.textures.length>1&&B.readBuffer(B.COLOR_ATTACHMENT0+Oe);const $e=Ps(nt);if($e.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if($e.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const bt=B.createBuffer();B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.bufferData(B.PIXEL_PACK_BUFFER,Ie.byteLength,B.STREAM_READ),B.readPixels(X,ue,re,te,De.convert(gt),De.convert(yt),0),B.bindBuffer(B.PIXEL_PACK_BUFFER,null);const an=$!==null?ne.get($).__webglFramebuffer:null;E.bindFramebuffer(B.FRAMEBUFFER,an);const $t=B.fenceSync(B.SYNC_GPU_COMMANDS_COMPLETE,0);return B.flush(),await qy(B,$t,4),B.bindBuffer(B.PIXEL_PACK_BUFFER,bt),B.getBufferSubData(B.PIXEL_PACK_BUFFER,0,Ie),B.bindBuffer(B.PIXEL_PACK_BUFFER,null),B.deleteBuffer(bt),B.deleteSync($t),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,X=null,ue=0){const re=Math.pow(2,-ue),te=Math.floor(C.image.width*re),Ie=Math.floor(C.image.height*re),Fe=X!==null?X.x:0,Oe=X!==null?X.y:0;he.setTexture2D(C,0),B.copyTexSubImage2D(B.TEXTURE_2D,ue,0,0,Fe,Oe,te,Ie),E.unbindTexture()},this.copyTextureToTexture=function(C,X,ue=null,re=null,te=0,Ie=0){let Fe,Oe,Ke,nt,gt,yt,$e,bt,an;const $t=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(ue!==null)Fe=ue.max.x-ue.min.x,Oe=ue.max.y-ue.min.y,Ke=ue.isBox3?ue.max.z-ue.min.z:1,nt=ue.min.x,gt=ue.min.y,yt=ue.isBox3?ue.min.z:0;else{const jt=Math.pow(2,-te);Fe=Math.floor($t.width*jt),Oe=Math.floor($t.height*jt),C.isDataArrayTexture?Ke=$t.depth:C.isData3DTexture?Ke=Math.floor($t.depth*jt):Ke=1,nt=0,gt=0,yt=0}re!==null?($e=re.x,bt=re.y,an=re.z):($e=0,bt=0,an=0);const Ht=De.convert(X.format),dn=De.convert(X.type);let Be;X.isData3DTexture?(he.setTexture3D(X,0),Be=B.TEXTURE_3D):X.isDataArrayTexture||X.isCompressedArrayTexture?(he.setTexture2DArray(X,0),Be=B.TEXTURE_2D_ARRAY):(he.setTexture2D(X,0),Be=B.TEXTURE_2D),E.activeTexture(B.TEXTURE0),E.pixelStorei(B.UNPACK_FLIP_Y_WEBGL,X.flipY),E.pixelStorei(B.UNPACK_PREMULTIPLY_ALPHA_WEBGL,X.premultiplyAlpha),E.pixelStorei(B.UNPACK_ALIGNMENT,X.unpackAlignment);const on=E.getParameter(B.UNPACK_ROW_LENGTH),Pt=E.getParameter(B.UNPACK_IMAGE_HEIGHT),bn=E.getParameter(B.UNPACK_SKIP_PIXELS),Mt=E.getParameter(B.UNPACK_SKIP_ROWS),xi=E.getParameter(B.UNPACK_SKIP_IMAGES);E.pixelStorei(B.UNPACK_ROW_LENGTH,$t.width),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,$t.height),E.pixelStorei(B.UNPACK_SKIP_PIXELS,nt),E.pixelStorei(B.UNPACK_SKIP_ROWS,gt),E.pixelStorei(B.UNPACK_SKIP_IMAGES,yt);const Zi=C.isDataArrayTexture||C.isData3DTexture,kt=X.isDataArrayTexture||X.isData3DTexture;if(C.isDepthTexture){const jt=ne.get(C),Si=ne.get(X),Gt=ne.get(jt.__renderTarget),ci=ne.get(Si.__renderTarget);E.bindFramebuffer(B.READ_FRAMEBUFFER,Gt.__webglFramebuffer),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,ci.__webglFramebuffer);for(let yi=0;yi<Ke;yi++)Zi&&(B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(C).__webglTexture,te,yt+yi),B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,ne.get(X).__webglTexture,Ie,an+yi)),B.blitFramebuffer(nt,gt,Fe,Oe,$e,bt,Fe,Oe,B.DEPTH_BUFFER_BIT,B.NEAREST);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else if(te!==0||C.isRenderTargetTexture||ne.has(C)){const jt=ne.get(C),Si=ne.get(X);E.bindFramebuffer(B.READ_FRAMEBUFFER,H),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,ee);for(let Gt=0;Gt<Ke;Gt++)Zi?B.framebufferTextureLayer(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,jt.__webglTexture,te,yt+Gt):B.framebufferTexture2D(B.READ_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,jt.__webglTexture,te),kt?B.framebufferTextureLayer(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,Si.__webglTexture,Ie,an+Gt):B.framebufferTexture2D(B.DRAW_FRAMEBUFFER,B.COLOR_ATTACHMENT0,B.TEXTURE_2D,Si.__webglTexture,Ie),te!==0?B.blitFramebuffer(nt,gt,Fe,Oe,$e,bt,Fe,Oe,B.COLOR_BUFFER_BIT,B.NEAREST):kt?B.copyTexSubImage3D(Be,Ie,$e,bt,an+Gt,nt,gt,Fe,Oe):B.copyTexSubImage2D(Be,Ie,$e,bt,nt,gt,Fe,Oe);E.bindFramebuffer(B.READ_FRAMEBUFFER,null),E.bindFramebuffer(B.DRAW_FRAMEBUFFER,null)}else kt?C.isDataTexture||C.isData3DTexture?B.texSubImage3D(Be,Ie,$e,bt,an,Fe,Oe,Ke,Ht,dn,$t.data):X.isCompressedArrayTexture?B.compressedTexSubImage3D(Be,Ie,$e,bt,an,Fe,Oe,Ke,Ht,$t.data):B.texSubImage3D(Be,Ie,$e,bt,an,Fe,Oe,Ke,Ht,dn,$t):C.isDataTexture?B.texSubImage2D(B.TEXTURE_2D,Ie,$e,bt,Fe,Oe,Ht,dn,$t.data):C.isCompressedTexture?B.compressedTexSubImage2D(B.TEXTURE_2D,Ie,$e,bt,$t.width,$t.height,Ht,$t.data):B.texSubImage2D(B.TEXTURE_2D,Ie,$e,bt,Fe,Oe,Ht,dn,$t);E.pixelStorei(B.UNPACK_ROW_LENGTH,on),E.pixelStorei(B.UNPACK_IMAGE_HEIGHT,Pt),E.pixelStorei(B.UNPACK_SKIP_PIXELS,bn),E.pixelStorei(B.UNPACK_SKIP_ROWS,Mt),E.pixelStorei(B.UNPACK_SKIP_IMAGES,xi),Ie===0&&X.generateMipmaps&&B.generateMipmap(Be),E.unbindTexture()},this.initRenderTarget=function(C){ne.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){le=0,se=0,$=null,E.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return $i}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Lt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Lt._getUnpackColorSpace()}}class VC extends Ph{constructor(e){super(e)}load(e,t,a,s){const l=this,u=new FM(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(d){try{t(l.parse(d))}catch(m){s?s(m):console.error(m),l.manager.itemError(e)}},a,s)}parse(e){function t(p){const v=new DataView(p),x=32/8*3+32/8*3*3+16/8,_=v.getUint32(80,!0);if(80+32/8+_*x===v.byteLength)return!0;const w=[115,111,108,105,100];for(let b=0;b<5;b++)if(a(w,v,b))return!1;return!0}function a(p,v,x){for(let _=0,M=p.length;_<M;_++)if(p[_]!==v.getUint8(x+_))return!1;return!0}function s(p){const v=new DataView(p),x=v.getUint32(80,!0);let _,M,w,b=!1,y,S,N,z,R;for(let G=0;G<70;G++)v.getUint32(G,!1)==1129270351&&v.getUint8(G+4)==82&&v.getUint8(G+5)==61&&(b=!0,y=new Float32Array(x*3*3),S=v.getUint8(G+6)/255,N=v.getUint8(G+7)/255,z=v.getUint8(G+8)/255,R=v.getUint8(G+9)/255);const L=84,P=50,I=new Bn,T=new Float32Array(x*3*3),U=new Float32Array(x*3*3),k=new wt;for(let G=0;G<x;G++){const j=L+G*P,ie=v.getFloat32(j,!0),H=v.getFloat32(j+4,!0),ee=v.getFloat32(j+8,!0);if(b){const le=v.getUint16(j+48,!0);(le&32768)===0?(_=(le&31)/31,M=(le>>5&31)/31,w=(le>>10&31)/31):(_=S,M=N,w=z)}for(let le=1;le<=3;le++){const se=j+le*12,$=G*3*3+(le-1)*3;T[$]=v.getFloat32(se,!0),T[$+1]=v.getFloat32(se+4,!0),T[$+2]=v.getFloat32(se+8,!0),U[$]=ie,U[$+1]=H,U[$+2]=ee,b&&(k.setRGB(_,M,w,ai),y[$]=k.r,y[$+1]=k.g,y[$+2]=k.b)}}return I.setAttribute("position",new Jn(T,3)),I.setAttribute("normal",new Jn(U,3)),b&&(I.setAttribute("color",new Jn(y,3)),I.hasColors=!0,I.alpha=R),I}function l(p){const v=new Bn,x=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let w=0;const b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+b+b+b,"g"),S=new RegExp("normal"+b+b+b,"g"),N=[],z=[],R=[],L=new Q;let P,I=0,T=0,U=0;for(;(P=x.exec(p))!==null;){T=U;const k=P[0],G=(P=M.exec(k))!==null?P[1]:"";for(R.push(G);(P=_.exec(k))!==null;){let H=0,ee=0;const le=P[0];for(;(P=S.exec(le))!==null;)L.x=parseFloat(P[1]),L.y=parseFloat(P[2]),L.z=parseFloat(P[3]),ee++;for(;(P=y.exec(le))!==null;)N.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),z.push(L.x,L.y,L.z),H++,U++;ee!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+w),H!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+w),w++}const j=T,ie=U-T;v.userData.groupNames=R,v.addGroup(j,ie,I),I++}return v.setAttribute("position",new mn(N,3)),v.setAttribute("normal",new mn(z,3)),v}function u(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const v=new Uint8Array(p.length);for(let x=0;x<p.length;x++)v[x]=p.charCodeAt(x)&255;return v.buffer||v}else return p}const m=d(e);return t(m)?s(m):l(u(e))}}function GC(i,e=Math.PI/3){const t=i.index?i.toNonIndexed():i,a=t.attributes.position,s=a.count;let l;if(a.isBufferAttribute===!0&&a.itemSize===3&&a.normalized===!1)l=a.array;else{l=new Float64Array(s*3);for(let R=0;R<s;R++)l[3*R+0]=a.getX(R),l[3*R+1]=a.getY(R),l[3*R+2]=a.getZ(R)}const u=Math.cos(e),d=(1+1e-10)*100,m=s/3,p=new Float64Array(m*3);for(let R=0;R<m;R++){const L=9*R,P=l[L+0],I=l[L+1],T=l[L+2],U=l[L+3],k=l[L+4],G=l[L+5],j=l[L+6],ie=l[L+7],H=l[L+8],ee=j-U,le=ie-k,se=H-G,$=P-U,K=I-k,Z=T-G,D=le*Z-se*K,J=se*$-ee*Z,ye=ee*K-le*$,Ge=1/(Math.sqrt(D*D+J*J+ye*ye)||1);p[3*R+0]=D*Ge,p[3*R+1]=J*Ge,p[3*R+2]=ye*Ge}const v=new Int32Array(s),x=new Float64Array(s*3);let _=1;for(;_<s*2;)_<<=1;const M=_-1,w=new Int32Array(_);let b=0;for(let R=0;R<s;R++){const L=3*R,P=Math.trunc(l[L+0]*d),I=Math.trunc(l[L+1]*d),T=Math.trunc(l[L+2]*d);let U=(Math.imul(P,73856093)^Math.imul(I,19349663)^Math.imul(T,83492791))&M;for(;;){const k=w[U];if(k===0){const j=3*b;x[j+0]=P,x[j+1]=I,x[j+2]=T,w[U]=b+1,v[R]=b++;break}const G=3*(k-1);if(x[G+0]===P&&x[G+1]===I&&x[G+2]===T){v[R]=k-1;break}U=U+1&M}}const y=new Int32Array(b+1);for(let R=0;R<s;R++)y[v[R]+1]++;for(let R=0;R<b;R++)y[R+1]+=y[R];const S=new Int32Array(s),N=y.slice(0,b);for(let R=0;R<m;R++){const L=3*R;S[N[v[L+0]]++]=R,S[N[v[L+1]]++]=R,S[N[v[L+2]]++]=R}const z=new Float32Array(s*3);for(let R=0;R<m;R++){const L=3*R,P=p[L+0],I=p[L+1],T=p[L+2];for(let U=0;U<3;U++){const k=L+U,G=v[k];let j=0,ie=0,H=0;for(let le=y[G],se=y[G+1];le<se;le++){const $=3*S[le],K=p[$+0],Z=p[$+1],D=p[$+2];P*K+I*Z+T*D>u&&(j+=K,ie+=Z,H+=D)}const ee=1/(Math.sqrt(j*j+ie*ie+H*H)||1);z[3*k+0]=j*ee,z[3*k+1]=ie*ee,z[3*k+2]=H*ee}}return t.setAttribute("normal",new Jn(z,3,!1)),t}const R0={type:"change"},Dh={type:"start"},$v={type:"end"},mc=new wh,b0=new fr,BC=Math.cos(70*Zy.DEG2RAD),pn=new Q,jn=2*Math.PI,Wt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},cf=1e-6;class WC extends GM{constructor(e,t=null){super(e,t),this.state=Wt.NONE,this.target=new Q,this.cursor=new Q,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.DOLLY,RIGHT:pr.PAN},this.touches={ONE:ms.ROTATE,TWO:ms.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new Q,this._lastQuaternion=new $r,this._lastTargetPosition=new Q,this._quat=new $r().setFromUnitVectors(e.up,new Q(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new i0,this._sphericalDelta=new i0,this._scale=1,this._panOffset=new Q,this._rotateStart=new ot,this._rotateEnd=new ot,this._rotateDelta=new ot,this._panStart=new ot,this._panEnd=new ot,this._panDelta=new ot,this._dollyStart=new ot,this._dollyEnd=new ot,this._dollyDelta=new ot,this._dollyDirection=new Q,this._mouse=new ot,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=$C.bind(this),this._onPointerDown=XC.bind(this),this._onPointerUp=YC.bind(this),this._onContextMenu=e1.bind(this),this._onMouseWheel=jC.bind(this),this._onKeyDown=ZC.bind(this),this._onTouchStart=JC.bind(this),this._onTouchMove=QC.bind(this),this._onMouseDown=qC.bind(this),this._onMouseMove=KC.bind(this),this._interceptControlDown=t1.bind(this),this._interceptControlUp=n1.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Wt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(R0),this.update(),this.state=Wt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;pn.copy(t).sub(this.target),pn.applyQuaternion(this._quat),this._spherical.setFromVector3(pn),this.autoRotate&&this.state===Wt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(a)&&isFinite(s)&&(a<-Math.PI?a+=jn:a>Math.PI&&(a-=jn),s<-Math.PI?s+=jn:s>Math.PI&&(s-=jn),a<=s?this._spherical.theta=Math.max(a,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+s)/2?Math.max(a,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(pn.setFromSpherical(this._spherical),pn.applyQuaternion(this._quatInverse),t.copy(this.target).add(pn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=pn.length();u=this._clampDistance(d*this._scale);const m=d-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),l=!!m}else if(this.object.isOrthographicCamera){const d=new Q(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=m!==this.object.zoom;const p=new Q(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=pn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(mc.origin.copy(this.object.position),mc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(mc.direction))<BC?this.object.lookAt(this.target):(b0.setFromNormalAndCoplanarPoint(this.object.up,this.target),mc.intersectPlane(b0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>cf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>cf||this._lastTargetPosition.distanceToSquared(this.target)>cf?(this.dispatchEvent(R0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?jn/60*this.autoRotateSpeed*e:jn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){pn.setFromMatrixColumn(t,0),pn.multiplyScalar(-e),this._panOffset.add(pn)}_panUp(e,t){this.screenSpacePanning===!0?pn.setFromMatrixColumn(t,1):(pn.setFromMatrixColumn(t,0),pn.crossVectors(this.object.up,pn)),pn.multiplyScalar(e),this._panOffset.add(pn)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;pn.copy(s).sub(this.target);let l=pn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*t*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),s=e-a.left,l=t-a.top,u=a.width,d=a.height;this._mouse.x=s/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-jn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(a,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(a,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),s=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(s,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(jn*this._rotateDelta.x/t.clientHeight),this._rotateUp(jn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(a,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ot,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function XC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function $C(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function YC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent($v),this.state=Wt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function qC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case pr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Wt.DOLLY;break;case pr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}break;case pr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Wt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Wt.PAN}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Dh)}function KC(i){switch(this.state){case Wt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Wt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Wt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function jC(i){this.enabled===!1||this.enableZoom===!1||this.state!==Wt.NONE||(i.preventDefault(),this.dispatchEvent(Dh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent($v))}function ZC(i){this.enabled!==!1&&this._handleKeyDown(i)}function JC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ms.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Wt.TOUCH_ROTATE;break;case ms.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Wt.TOUCH_PAN;break;default:this.state=Wt.NONE}break;case 2:switch(this.touches.TWO){case ms.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Wt.TOUCH_DOLLY_PAN;break;case ms.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Wt.TOUCH_DOLLY_ROTATE;break;default:this.state=Wt.NONE}break;default:this.state=Wt.NONE}this.state!==Wt.NONE&&this.dispatchEvent(Dh)}function QC(i){switch(this._trackPointer(i),this.state){case Wt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Wt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Wt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Wt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Wt.NONE}}function e1(i){this.enabled!==!1&&i.preventDefault()}function t1(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function n1(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const P0="../../",uf={label:"PR #18 (fix/r5-servo-control)",sha:"c528f14629e0c787ac88a288dab567c40c5d0e61".slice(0,7)},L0=i=>i!=null&&i.p14?"fea/":`model/${i==null?void 0:i.id}/fea/`,So=i=>i.replace(/^N2_/,"").replace(/_/g," "),df=3,i1=22,r1=["N2_keeper","N2_armature"],a1={Z:{label:"Straight pull (R3)",parts:{N2_adapter:"Z",N2_receiver:"Z",N2_keeper:"Z"}},Z_distal_lost:{label:"Straight pull, distal roof lost",parts:{N2_adapter:"Z",N2_receiver:"Z_distal_lost",N2_keeper:"Z_distal_lost"}},XZ90:{label:"Side pull 90° (outside R3)",parts:{N2_adapter:"XZ90",N2_receiver:"XZ90"}}};function Yv(i,e){if(i>1)return e.setRGB(.85,.1,.85);const t=[[.19,.07,.23],[.16,.47,.93],[.1,.84,.66],[.64,.99,.24],[.98,.73,.22],[.86,.22,.05]],a=Math.max(0,i)*(t.length-1),s=Math.min(Math.floor(a),t.length-2),l=a-s;return e.setRGB(...t[s].map((u,d)=>u+(t[s+1][d]-u)*l))}const s1=`linear-gradient(90deg, ${[0,.2,.4,.6,.8,1].map(i=>"#"+Yv(i,new wt).getHexString()).join(",")})`;function o1(i){const e=ze.useRef(null);if(!e.current){const t=new dM;t.add(new OM(16777215,3359829,2.2));const a=new e0(16777215,1.6);a.position.set(60,-40,90),t.add(a);const s=new e0(16777215,.6);s.position.set(-50,60,-30),t.add(s);const l=new vi(35,1,.1,3e3);l.up.set(0,0,1),e.current={scene:t,cam:l,parts:new Map,fea:new Map,markers:new Eo},t.add(e.current.markers)}return ze.useEffect(()=>{const t=e.current,a=new HC({antialias:!0,preserveDrawingBuffer:!0});a.setPixelRatio(devicePixelRatio),a.setClearColor(1382686),i.current.appendChild(a.domElement);const s=new WC(t.cam,a.domElement);Object.assign(s,{enableDamping:!0,dampingFactor:.12,rotateSpeed:.9,zoomToCursor:!0,screenSpacePanning:!0}),s.mouseButtons={LEFT:pr.ROTATE,MIDDLE:pr.PAN,RIGHT:pr.PAN},t.oc=s,t.r=a;let l=!0;const u=new VM;a.domElement.addEventListener("dblclick",m=>{const p=a.domElement.getBoundingClientRect();u.setFromCamera(new ot((m.clientX-p.left)/p.width*2-1,-(m.clientY-p.top)/p.height*2+1),t.cam);const v=u.intersectObjects([...t.parts.values(),...t.fea.values()].filter(x=>x.visible))[0];if(v){const x=v.point.clone().sub(s.target);s.target.add(x),t.cam.position.add(x)}});const d=()=>{var v;if(!l)return;requestAnimationFrame(d),(v=t.tick)==null||v.call(t),s.update();const m=i.current.clientWidth,p=i.current.clientHeight;(a.domElement.width!==Math.floor(m*a.getPixelRatio())||a.domElement.height!==Math.floor(p*a.getPixelRatio()))&&a.setSize(m,p),t.cam.aspect=m/p,t.cam.updateProjectionMatrix(),a.render(t.scene,t.cam)};return d(),()=>{l=!1,a.dispose(),a.domElement.remove()}},[]),e.current}function l1(i){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=512,e.height=64,t.fillStyle="rgba(17,20,24,0.85)",t.fillRect(0,0,512,64),t.fillStyle="#fff",t.font="bold 30px sans-serif",t.textBaseline="middle",t.fillText(i,14,32);const a=new xM(new Lv({map:new EM(e),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return a.scale.set(.24,.03,1),a.center.set(0,.5),a.renderOrder=11,a}function D0(i,e,t){const a=new Q(...e.peakV).add(t),s=new Q(...e.peakN),l=s.clone().add(new Q(0,0,s.z>.7?0:.35)).normalize();i.oc.target.copy(a),i.cam.position.copy(a).add(l.multiplyScalar(70)),i.oc.update(),i.dirty=!0}function N0(i,e,t){const a=new Q(...e.min).add(new Q(...e.max)).multiplyScalar(.5),s=new Q(...e.size).length()*2.1,l={iso:i.isoDir||[.75,-1,.65],front:[0,-1,1e-4],top:[1e-4,-1e-4,1],side:[1,0,1e-4]}[t];i.oc.target.copy(a),i.cam.position.copy(a).add(new Q(...l).normalize().multiplyScalar(s)),i.oc.update()}function c1(){var vt;const i=ze.useRef(),e=o1(i),[t,a]=ze.useState(null),[s,l]=ze.useState(null),[u,d]=ze.useState(new URLSearchParams(location.search).get("mode")||"model"),[m,p]=ze.useState(Number(new URLSearchParams(location.search).get("explode")||0)),[v,x]=ze.useState(Number(new URLSearchParams(location.search).get("phase")||0)),[_,M]=ze.useState(!1),[w,b]=ze.useState({}),[y,S]=ze.useState("Z"),[N,z]=ze.useState(0),[R,L]=ze.useState(new URLSearchParams(location.search).get("fade")!=="0"),[P,I]=ze.useState(new URLSearchParams(location.search).get("scale")!=="abs"),[T,U]=ze.useState(Number(new URLSearchParams(location.search).get("load")||17.8)),[k,G]=ze.useState(!0),[j,ie]=ze.useState([]),[H,ee]=ze.useState(null),[le,se]=ze.useState([]),$=(vt=j.find(pe=>pe.id===H))==null?void 0:vt.p14;ze.useEffect(()=>{fetch("model/designs.json").then(pe=>pe.json()).then(pe=>{var be;ie(pe);const He=new URLSearchParams(location.search).get("design");ee((be=pe.find(lt=>lt.id===He)||pe[pe.length-1])==null?void 0:be.id)}),fetch(`${P0}versions.json`,{cache:"no-store"}).then(pe=>pe.json()).then(se).catch(()=>{})},[]),ze.useEffect(()=>{if(!H)return;for(const He of[...e.parts.values(),...e.fea.values()])e.scene.remove(He),He.geometry.dispose();e.parts.clear(),e.fea.clear(),b({}),a(null),l(null),fetch(`model/${H}/manifest.json`).then(He=>He.json()).then(a);const pe=j.find(He=>He.id===H);(pe!=null&&pe.p14||pe!=null&&pe.fea)&&fetch(`${L0(pe)}index.json`).then(He=>He.json()).then(l)},[H]),ze.useEffect(()=>{if(!t)return;e.design=t.id;const pe=new VC,He=t.id;t.parts.forEach(be=>pe.load(`model/${t.id}/${be.stl}`,lt=>{if(He!==e.design)return;const Dt=$?(lt.computeVertexNormals(),lt):GC(lt,Math.PI/7),Ct=be.kind==="purchased"&&/screw|spline/.test(be.id),ct=new oi(Dt,new Yg({color:be.color,metalness:Ct?.6:.1,roughness:Ct?.35:.6,side:Ni,transparent:(be.opacity??1)<1,opacity:be.opacity??1,depthWrite:(be.opacity??1)>=1}));ct.userData.p=be,e.parts.set(be.id,ct),e.scene.add(ct),e.dirty=!0})),e.isoDir=t.iso,N0(e,t.bounds,"iso")},[t]),ze.useEffect(()=>{if(!s)return;const pe=L0(j.find(He=>He.id===H));s.cases.forEach(He=>fetch(`${pe}${He.part}__${He.case}.json`).then(be=>be.json()).then(be=>{const lt=new Bn;lt.setAttribute("position",new mn(be.pos,3)),lt.setIndex(be.idx),lt.computeVertexNormals(),lt.setAttribute("color",new mn(new Float32Array(be.pos.length),3));const Dt=new oi(lt,new Yg({vertexColors:!0,metalness:0,roughness:.75,side:Ni}));let Ct=0;for(let ut=1;ut<be.fi.length;ut++)be.fi[ut]>be.fi[Ct]&&(Ct=ut);const ct=lt.attributes.normal,at=new Q;lt.computeBoundingBox(),lt.boundingBox.getCenter(at);const B=new Q().fromBufferAttribute(lt.attributes.position,Ct),Rt=new Q().fromBufferAttribute(ct,Ct);Rt.dot(B.clone().sub(at))<0&&Rt.negate(),be.peakV=B.toArray(),be.peakN=Rt.normalize().toArray(),be.fiMax=be.fi[Ct],Dt.userData={d:be,part:He.part},Dt.visible=!1,e.fea.set(`${He.part}__${He.case}`,Dt),e.scene.add(Dt),e.dirty=!0,z(ut=>ut+1)}))},[s]),ze.useEffect(()=>{if(!_)return;let pe=performance.now(),He=v>=2?0:v,be;const lt=Dt=>{const Ct=He+(Dt-pe)/1600;x(Math.min(Ct,2)),Ct<2?be=requestAnimationFrame(lt):M(!1)};return be=requestAnimationFrame(lt),()=>cancelAnimationFrame(be)},[_]);const K=(s==null?void 0:s.groups)||a1,Z=!!s,D=u==="fea"&&s&&K[y]?K[y].parts:{},J=t==null?void 0:t.motion,ye=pe=>pe*pe*(3-2*pe),Ge=J?J.a_latch+(J.a_release-J.a_latch)*ye(Math.min(v,1)):0,We=J?J.r*(Math.cos(Ge*Math.PI/180)-Math.cos(J.a_latch*Math.PI/180)):0,Ye=s!=null&&s.cases?Math.max(60,Math.ceil(Math.min(...s.cases.map(pe=>pe.fail_N))*1.2)):60,oe=s?31/s.z_tds_MPa:1,fe=Math.max(1e-9,...[...e.fea.values()].filter(pe=>D[pe.userData.part]&&!w[pe.userData.part]).map(pe=>(pe.userData.d.fiMax||0)*T*oe)),we=P?fe:1,Qe=s?Object.entries(D).map(([pe,He])=>s.cases.find(be=>be.part===pe&&be.case===He)).filter(Boolean):[],Re=Qe.reduce((pe,He)=>!pe||He.fail_N<pe.fail_N?He:pe,null);ze.useEffect(()=>{var He;if(!Re||u!=="fea"||new URLSearchParams(location.search).get("peak")!=="1"||e.peaked)return;const pe=e.fea.get(`${Re.part}__${Re.case}`);pe!=null&&pe.userData.d.peakV&&(e.peaked=!0,(He=e.tick)==null||He.call(e),D0(e,pe.userData.d,pe.position))},[N,Re,u]),e.tick=()=>{var Ct;if(!t)return;const pe=ct=>ct*ct*(3-2*ct),He=v,be=pe(Math.min(He,1)),lt=pe(Math.max(0,Math.min(He-1,1))),Dt=(ct,at)=>{const B=t.parts.find(q=>q.id===at),Rt=(B==null?void 0:B.explode)||[0,0,0];let ut=Rt[0]*m,F=Rt[1]*m,E=Rt[2]*m;if(J){if(J.slide.includes(at)&&(ut+=We),J.drop.includes(at)&&(E-=J.drop_mm*lt),J.rotate.includes(at)){const q=-(Ge-J.a_latch)*Math.PI/180,[ne,,he]=J.pivot,Ee=Math.cos(q),Ce=Math.sin(q);ct.rotation.set(0,q,0),ut+=ne-(ne*Ee+he*Ce),E+=he-(-ne*Ce+he*Ee)}else ct.rotation.set(0,0,0);ct.position.set(ut,F,E);return}r1.includes(at)&&(ut+=df*be),at==="N2_return_spring"&&(ct.scale.x=1-.35*be),at==="N2_adapter"&&(E+=i1*lt),ct.position.set(ut,F,E)};for(const[ct,at]of e.parts){Dt(at,ct);const B=u==="fea"&&D[ct];at.visible=!w[ct]&&!B&&(u==="model"||k);const Rt=((Ct=at.userData.p)==null?void 0:Ct.opacity)??1;at.material.transparent=u==="fea"||Rt<1,at.material.opacity=u==="fea"?.12*Rt:Rt,at.material.depthWrite=u!=="fea"&&Rt>=1}e.markers.clear();for(const[ct,at]of e.fea){const B=D[at.userData.part]&&ct===`${at.userData.part}__${D[at.userData.part]}`&&!w[at.userData.part];if(at.visible=!!B,!B)continue;Dt(at,at.userData.part);const Rt=`${T}|${oe}|${we}`;if(at.userData.ck!==Rt){const ne=at.geometry.attributes.color,he=new wt,Ee=at.userData.d.fi;for(let Ce=0;Ce<Ee.length;Ce++)Yv(Ee[Ce]*T*oe/we,he),ne.setXYZ(Ce,he.r,he.g,he.b);ne.needsUpdate=!0,at.userData.ck=Rt}const ut=at.userData.d,F=Re&&ut.part===Re.part,E=R&&Re&&!F;at.material.transparent=E,at.material.opacity=E?.12:1,at.material.depthWrite=!E;const q=new oi(new Rh(F?.9:.6,20,14),new Ah({color:F?16777215:11252671,depthTest:!1,transparent:!0,opacity:.95}));if(q.position.set(...ut.peakV||ut.peak_mm).add(at.position),F){const ne=l1(`PEAK ${So(ut.part)}: ${(ut.fiMax*T*oe).toFixed(2)} of limit`);ne.position.copy(q.position).add(new Q(...ut.peakN||[0,0,1]).multiplyScalar(4)),e.markers.add(ne)}if(q.renderOrder=10,e.markers.add(q),F){const ne=new oi(new bh(1.6,.18,8,32),q.material);ne.position.copy(q.position),ne.quaternion.copy(e.cam.quaternion),ne.renderOrder=10,e.markers.add(ne)}}};const St=(t==null?void 0:t.parts.map(pe=>pe.id))||[],Vt=s&&s.cases.filter(be=>be.in_scope&&be.case==="Z").reduce((be,lt)=>lt.fail_N<be.fail_N?lt:be);return me.jsxs("div",{className:"app",children:[me.jsxs("div",{className:"panel",children:[me.jsxs("div",{className:"status",children:["Version: ",me.jsx(sv,{minimal:!0,intent:"warning",children:uf.label})," ",uf.sha&&me.jsx("code",{children:uf.sha}),le.length>1&&me.jsx(vc,{fill:!0,minimal:!0,value:"",onChange:pe=>{location.href=P0+pe.target.value},options:[{value:"",label:"Switch version…"},...le.map(pe=>({value:pe.path,label:pe.label+(pe.title?` — ${pe.title}`:"")}))]})]}),j.length>1&&me.jsx(vc,{fill:!0,value:H||"",onChange:pe=>ee(pe.target.value),options:j.map(pe=>({value:pe.id,label:pe.label}))}),me.jsxs("div",{className:"status",children:[me.jsxs("b",{children:["N2 hardpoint · ",$?(s==null?void 0:s.revision)||"":(t==null?void 0:t.revision)||""]}),me.jsx("br",{}),!$&&t&&me.jsxs(me.Fragment,{children:[t.parts.length," parts from CI-built CAD (cad/viewer.py)",J?", release driven by the servo crank kinematics.":"."]}),Vt&&me.jsxs(me.Fragment,{children:["Straight-pull stress screen ",me.jsxs("b",{children:[Vt.fail_N.toFixed(2)," N"]})," (",So(Vt.part)," governs). Dividing by SF 2 gives ",Vt.rating_sf2_N.toFixed(2)," N for comparison only.",me.jsx("br",{}),me.jsx("b",{children:"No working-load rating assigned."})," No printed or loaded-release tests recorded.",me.jsx("br",{}),"Design load: ",s.design_N," N. Sacrificial bench target: ",s.required_fail_N," N."]})]}),me.jsxs(hf,{fill:!0,children:[me.jsx(Di,{intent:u==="model"?"primary":"none",icon:"cube",text:"Model",onClick:()=>d("model")}),me.jsx(Di,{intent:u==="fea"?"primary":"none",icon:"heat-grid",text:"FEA",disabled:!Z,onClick:()=>d("fea")})]}),me.jsx("h6",{children:"Explode"}),me.jsx(wo,{min:0,max:1,stepSize:.01,labelRenderer:!1,value:m,onChange:p}),($||J)&&me.jsxs(me.Fragment,{children:[me.jsx("h6",{children:"Release sequence"}),me.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[me.jsx(Di,{small:!0,icon:_?"pause":"play",onClick:()=>M(!_)}),me.jsx(Di,{small:!0,icon:"reset",onClick:()=>{M(!1),x(0)}}),me.jsx("div",{style:{flex:1,paddingTop:4},children:me.jsx(wo,{min:0,max:2,stepSize:.01,labelRenderer:!1,value:v,onChange:pe=>{M(!1),x(pe)}})})]}),me.jsxs("div",{className:"status",children:[J?(v<.02?`Latched: servo ${J.a_latch}°, keeper through the adapter tab.`:v<=1?`Servo ${Ge.toFixed(0)}° → ${J.a_release}°: pin drives the keeper +X ${We.toFixed(1)} / ${(J.r*(Math.cos(J.a_release*Math.PI/180)-Math.cos(J.a_latch*Math.PI/180))).toFixed(1)} mm.`:"Keeper clear of the tab; adapter and payload drop by gravity.")+" Kinematics from params.py, not a tested release.":v<.02?"Latched: keeper crosses the adapter lug.":v<=1?`Solenoid pulls keeper +X ${(df*v*v*(3-2*v)).toFixed(1)} / ${df} mm.`:"Keeper open; illustrated adapter travel is +Z. Actual clearance requires an external departure force."," ",!J&&"This is a prescribed motion illustration, not a tested release."]})]}),u==="fea"&&s&&me.jsxs(me.Fragment,{children:[me.jsx("h6",{children:"Load case"}),me.jsx(vc,{fill:!0,value:y,onChange:pe=>S(pe.target.value),options:Object.entries(K).map(([pe,He])=>({value:pe,label:He.label}))}),me.jsxs("h6",{children:["Applied load: ",T.toFixed(1)," N"]}),me.jsx(wo,{min:1,max:Ye,stepSize:.1,labelRenderer:!1,value:T,onChange:U}),me.jsxs("div",{className:"row",style:{display:"flex",gap:4,flexWrap:"wrap"},children:[me.jsx(Di,{small:!0,text:`Design ${s.design_N} N`,onClick:()=>U(s.design_N)}),me.jsx(Di,{small:!0,text:`Bench target ${s.required_fail_N} N`,onClick:()=>U(s.required_fail_N)})]}),me.jsxs("table",{className:"fea",children:[me.jsx("thead",{children:me.jsxs("tr",{children:[me.jsx("th",{children:"Part"}),me.jsx("th",{children:"Screen"}),me.jsx("th",{children:"Screen/load"})]})}),me.jsx("tbody",{children:Qe.map(pe=>me.jsxs("tr",{children:[me.jsxs("td",{children:[Re===pe&&"● ",So(pe.part)]}),me.jsxs("td",{className:"n",children:[pe.fail_N," N"]}),me.jsxs("td",{className:"n",children:[(pe.fail_N/T).toFixed(2),"×"]})]},pe.part))})]}),me.jsx(gc,{checked:k,label:"Ghost other parts",onChange:()=>G(!k)}),me.jsx(gc,{checked:P,label:"Scale colours to peak at this load",onChange:()=>I(!P)}),me.jsx(gc,{checked:R,label:"Fade parts other than the governing one",onChange:()=>L(!R)}),me.jsx(Di,{small:!0,icon:"locate",text:"Look at peak",disabled:!Re,onClick:()=>{L(!0);const pe=e.fea.get(`${Re.part}__${Re.case}`);pe!=null&&pe.userData.d.peakV&&D0(e,pe.userData.d,pe.position)}}),me.jsxs("div",{className:"status",children:[s.material.toUpperCase(),", ",s.note]})]}),me.jsx("h6",{children:"Parts"}),me.jsx("div",{className:"parts",children:St.map(pe=>me.jsx(tv,{checked:!w[pe],onChange:()=>b(He=>({...He,[pe]:!He[pe]})),labelElement:me.jsxs("span",{children:[me.jsx("span",{className:"swatch",style:{background:t.parts.find(He=>He.id===pe).color}}),So(pe)]})},pe))}),me.jsxs("div",{style:{display:"flex",gap:4},children:[me.jsx(Di,{small:!0,text:"All",onClick:()=>b({})}),me.jsx(Di,{small:!0,text:"Printed only",onClick:()=>b(Object.fromEntries(t.parts.filter(pe=>!["printed","payload","moving"].includes(pe.kind)).map(pe=>[pe.id,!0])))})]})]}),me.jsxs("div",{className:"stage",ref:i,children:[t&&me.jsx(hf,{className:"views",minimal:!0,children:["iso","front","side","top"].map(pe=>me.jsx(Di,{small:!0,text:pe,onClick:()=>N0(e,t.bounds,pe)},pe))}),u==="fea"&&s&&me.jsxs("div",{className:"legend",children:["Screen utilisation at ",T.toFixed(1)," N ",P?`(colours scaled to peak ${fe.toFixed(2)}; 1.0 = assumed stress limit)`:"(1.0 = assumed stress limit)",me.jsx("div",{className:"bar",style:{background:s1}}),me.jsxs("div",{className:"ticks",children:[me.jsx("span",{children:"0"}),me.jsx("span",{children:(.5*we).toFixed(2)}),me.jsx("span",{children:we.toFixed(2)}),!P&&me.jsx("span",{style:{color:"#d91ad9"},children:">1"})]}),Re&&me.jsxs("div",{style:{marginTop:4},children:["○ governing peak: ",So(Re.part)," ",(()=>{var He;const pe=(He=e.fea.get(`${Re.part}__${Re.case}`))==null?void 0:He.userData.d;return pe!=null&&pe.peakV?`at (${pe.peakV.map(be=>be.toFixed(1)).join(", ")}) mm, ${(pe.fiMax*T*oe).toFixed(3)} of limit`:""})()]})]}),me.jsx("div",{className:"hint",children:"Drag: orbit · scroll: zoom to cursor · right-drag: pan · double-click: orbit around point"})]})]})}document.body.classList.add(Hx);Ix.createRoot(document.getElementById("root")).render(me.jsx(c1,{}));export{Jt as I,_g as _,zS as p};
