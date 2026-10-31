var ox=Object.defineProperty;var lx=(i,e,t)=>e in i?ox(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var ft=(i,e,t)=>lx(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))a(o);new MutationObserver(o=>{for(const l of o)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(o){const l={};return o.integrity&&(l.integrity=o.integrity),o.referrerPolicy&&(l.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?l.credentials="include":o.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(o){if(o.ep)return;o.ep=!0;const l=t(o);fetch(o.href,l)}})();function cx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var cd={exports:{}},eo={},ud={exports:{}},xt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function ux(){if(Hm)return xt;Hm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(L){return L===null||typeof L!="object"?null:(L=x&&L[x]||L["@@iterator"],typeof L=="function"?L:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,R={};function y(L,K,_e){this.props=L,this.context=K,this.refs=R,this.updater=_e||M}y.prototype.isReactComponent={},y.prototype.setState=function(L,K){if(typeof L!="object"&&typeof L!="function"&&L!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,L,K,"setState")},y.prototype.forceUpdate=function(L){this.updater.enqueueForceUpdate(this,L,"forceUpdate")};function S(){}S.prototype=y.prototype;function D(L,K,_e){this.props=L,this.context=K,this.refs=R,this.updater=_e||M}var z=D.prototype=new S;z.constructor=D,w(z,y.prototype),z.isPureReactComponent=!0;var b=Array.isArray,N=Object.prototype.hasOwnProperty,P={current:null},k={key:!0,ref:!0,__self:!0,__source:!0};function T(L,K,_e){var He,Ce={},we=null,ae=null;if(K!=null)for(He in K.ref!==void 0&&(ae=K.ref),K.key!==void 0&&(we=""+K.key),K)N.call(K,He)&&!k.hasOwnProperty(He)&&(Ce[He]=K[He]);var ue=arguments.length-2;if(ue===1)Ce.children=_e;else if(1<ue){for(var Ee=Array(ue),Ye=0;Ye<ue;Ye++)Ee[Ye]=arguments[Ye+2];Ce.children=Ee}if(L&&L.defaultProps)for(He in ue=L.defaultProps,ue)Ce[He]===void 0&&(Ce[He]=ue[He]);return{$$typeof:i,type:L,key:we,ref:ae,props:Ce,_owner:P.current}}function U(L,K){return{$$typeof:i,type:L.type,key:K,ref:L.ref,props:L.props,_owner:L._owner}}function V(L){return typeof L=="object"&&L!==null&&L.$$typeof===i}function X(L){var K={"=":"=0",":":"=2"};return"$"+L.replace(/[=:]/g,function(_e){return K[_e]})}var J=/\/+/g;function ne(L,K){return typeof L=="object"&&L!==null&&L.key!=null?X(""+L.key):K.toString(36)}function G(L,K,_e,He,Ce){var we=typeof L;(we==="undefined"||we==="boolean")&&(L=null);var ae=!1;if(L===null)ae=!0;else switch(we){case"string":case"number":ae=!0;break;case"object":switch(L.$$typeof){case i:case e:ae=!0}}if(ae)return ae=L,Ce=Ce(ae),L=He===""?"."+ne(ae,0):He,b(Ce)?(_e="",L!=null&&(_e=L.replace(J,"$&/")+"/"),G(Ce,K,_e,"",function(Ye){return Ye})):Ce!=null&&(V(Ce)&&(Ce=U(Ce,_e+(!Ce.key||ae&&ae.key===Ce.key?"":(""+Ce.key).replace(J,"$&/")+"/")+L)),K.push(Ce)),1;if(ae=0,He=He===""?".":He+":",b(L))for(var ue=0;ue<L.length;ue++){we=L[ue];var Ee=He+ne(we,ue);ae+=G(we,K,_e,Ee,Ce)}else if(Ee=_(L),typeof Ee=="function")for(L=Ee.call(L),ue=0;!(we=L.next()).done;)we=we.value,Ee=He+ne(we,ue++),ae+=G(we,K,_e,Ee,Ce);else if(we==="object")throw K=String(L),Error("Objects are not valid as a React child (found: "+(K==="[object Object]"?"object with keys {"+Object.keys(L).join(", ")+"}":K)+"). If you meant to render a collection of children, use an array instead.");return ae}function ie(L,K,_e){if(L==null)return L;var He=[],Ce=0;return G(L,He,"","",function(we){return K.call(_e,we,Ce++)}),He}function oe(L){if(L._status===-1){var K=L._result;K=K(),K.then(function(_e){(L._status===0||L._status===-1)&&(L._status=1,L._result=_e)},function(_e){(L._status===0||L._status===-1)&&(L._status=2,L._result=_e)}),L._status===-1&&(L._status=0,L._result=K)}if(L._status===1)return L._result.default;throw L._result}var le={current:null},q={transition:null},j={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function O(){throw Error("act(...) is not supported in production builds of React.")}return xt.Children={map:ie,forEach:function(L,K,_e){ie(L,function(){K.apply(this,arguments)},_e)},count:function(L){var K=0;return ie(L,function(){K++}),K},toArray:function(L){return ie(L,function(K){return K})||[]},only:function(L){if(!V(L))throw Error("React.Children.only expected to receive a single React element child.");return L}},xt.Component=y,xt.Fragment=t,xt.Profiler=o,xt.PureComponent=D,xt.StrictMode=a,xt.Suspense=m,xt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=j,xt.act=O,xt.cloneElement=function(L,K,_e){if(L==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+L+".");var He=w({},L.props),Ce=L.key,we=L.ref,ae=L._owner;if(K!=null){if(K.ref!==void 0&&(we=K.ref,ae=P.current),K.key!==void 0&&(Ce=""+K.key),L.type&&L.type.defaultProps)var ue=L.type.defaultProps;for(Ee in K)N.call(K,Ee)&&!k.hasOwnProperty(Ee)&&(He[Ee]=K[Ee]===void 0&&ue!==void 0?ue[Ee]:K[Ee])}var Ee=arguments.length-2;if(Ee===1)He.children=_e;else if(1<Ee){ue=Array(Ee);for(var Ye=0;Ye<Ee;Ye++)ue[Ye]=arguments[Ye+2];He.children=ue}return{$$typeof:i,type:L.type,key:Ce,ref:we,props:He,_owner:ae}},xt.createContext=function(L){return L={$$typeof:u,_currentValue:L,_currentValue2:L,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},L.Provider={$$typeof:l,_context:L},L.Consumer=L},xt.createElement=T,xt.createFactory=function(L){var K=T.bind(null,L);return K.type=L,K},xt.createRef=function(){return{current:null}},xt.forwardRef=function(L){return{$$typeof:d,render:L}},xt.isValidElement=V,xt.lazy=function(L){return{$$typeof:v,_payload:{_status:-1,_result:L},_init:oe}},xt.memo=function(L,K){return{$$typeof:p,type:L,compare:K===void 0?null:K}},xt.startTransition=function(L){var K=q.transition;q.transition={};try{L()}finally{q.transition=K}},xt.unstable_act=O,xt.useCallback=function(L,K){return le.current.useCallback(L,K)},xt.useContext=function(L){return le.current.useContext(L)},xt.useDebugValue=function(){},xt.useDeferredValue=function(L){return le.current.useDeferredValue(L)},xt.useEffect=function(L,K){return le.current.useEffect(L,K)},xt.useId=function(){return le.current.useId()},xt.useImperativeHandle=function(L,K,_e){return le.current.useImperativeHandle(L,K,_e)},xt.useInsertionEffect=function(L,K){return le.current.useInsertionEffect(L,K)},xt.useLayoutEffect=function(L,K){return le.current.useLayoutEffect(L,K)},xt.useMemo=function(L,K){return le.current.useMemo(L,K)},xt.useReducer=function(L,K,_e){return le.current.useReducer(L,K,_e)},xt.useRef=function(L){return le.current.useRef(L)},xt.useState=function(L){return le.current.useState(L)},xt.useSyncExternalStore=function(L,K,_e){return le.current.useSyncExternalStore(L,K,_e)},xt.useTransition=function(){return le.current.useTransition()},xt.version="18.3.1",xt}var Vm;function Bf(){return Vm||(Vm=1,ud.exports=ux()),ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function dx(){if(Gm)return eo;Gm=1;var i=Bf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,m,p){var v,x={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)a.call(m,v)&&!l.hasOwnProperty(v)&&(x[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)x[v]===void 0&&(x[v]=m[v]);return{$$typeof:e,type:d,key:_,ref:M,props:x,_owner:o.current}}return eo.Fragment=t,eo.jsx=u,eo.jsxs=u,eo}var Bm;function fx(){return Bm||(Bm=1,cd.exports=dx()),cd.exports}var me=fx(),Nl={},dd={exports:{}},Yn={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function hx(){return Wm||(Wm=1,(function(i){function e(q,j){var O=q.length;q.push(j);e:for(;0<O;){var L=O-1>>>1,K=q[L];if(0<o(K,j))q[L]=j,q[O]=K,O=L;else break e}}function t(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var j=q[0],O=q.pop();if(O!==j){q[0]=O;e:for(var L=0,K=q.length,_e=K>>>1;L<_e;){var He=2*(L+1)-1,Ce=q[He],we=He+1,ae=q[we];if(0>o(Ce,O))we<K&&0>o(ae,Ce)?(q[L]=ae,q[we]=O,L=we):(q[L]=Ce,q[He]=O,L=He);else if(we<K&&0>o(ae,O))q[L]=ae,q[we]=O,L=we;else break e}}return j}function o(q,j){var O=q.sortIndex-j.sortIndex;return O!==0?O:q.id-j.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();i.unstable_now=function(){return u.now()-d}}var m=[],p=[],v=1,x=null,_=3,M=!1,w=!1,R=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(q){for(var j=t(p);j!==null;){if(j.callback===null)a(p);else if(j.startTime<=q)a(p),j.sortIndex=j.expirationTime,e(m,j);else break;j=t(p)}}function b(q){if(R=!1,z(q),!w)if(t(m)!==null)w=!0,oe(N);else{var j=t(p);j!==null&&le(b,j.startTime-q)}}function N(q,j){w=!1,R&&(R=!1,S(T),T=-1),M=!0;var O=_;try{for(z(j),x=t(m);x!==null&&(!(x.expirationTime>j)||q&&!X());){var L=x.callback;if(typeof L=="function"){x.callback=null,_=x.priorityLevel;var K=L(x.expirationTime<=j);j=i.unstable_now(),typeof K=="function"?x.callback=K:x===t(m)&&a(m),z(j)}else a(m);x=t(m)}if(x!==null)var _e=!0;else{var He=t(p);He!==null&&le(b,He.startTime-j),_e=!1}return _e}finally{x=null,_=O,M=!1}}var P=!1,k=null,T=-1,U=5,V=-1;function X(){return!(i.unstable_now()-V<U)}function J(){if(k!==null){var q=i.unstable_now();V=q;var j=!0;try{j=k(!0,q)}finally{j?ne():(P=!1,k=null)}}else P=!1}var ne;if(typeof D=="function")ne=function(){D(J)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,ie=G.port2;G.port1.onmessage=J,ne=function(){ie.postMessage(null)}}else ne=function(){y(J,0)};function oe(q){k=q,P||(P=!0,ne())}function le(q,j){T=y(function(){q(i.unstable_now())},j)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(q){q.callback=null},i.unstable_continueExecution=function(){w||M||(w=!0,oe(N))},i.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<q?Math.floor(1e3/q):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(m)},i.unstable_next=function(q){switch(_){case 1:case 2:case 3:var j=3;break;default:j=_}var O=_;_=j;try{return q()}finally{_=O}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(q,j){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var O=_;_=q;try{return j()}finally{_=O}},i.unstable_scheduleCallback=function(q,j,O){var L=i.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?L+O:L):O=L,q){case 1:var K=-1;break;case 2:K=250;break;case 5:K=1073741823;break;case 4:K=1e4;break;default:K=5e3}return K=O+K,q={id:v++,callback:j,priorityLevel:q,startTime:O,expirationTime:K,sortIndex:-1},O>L?(q.sortIndex=O,e(p,q),t(m)===null&&q===t(p)&&(R?(S(T),T=-1):R=!0,le(b,O-L))):(q.sortIndex=K,e(m,q),w||M||(w=!0,oe(N))),q},i.unstable_shouldYield=X,i.unstable_wrapCallback=function(q){var j=_;return function(){var O=_;_=j;try{return q.apply(this,arguments)}finally{_=O}}}})(hd)),hd}var Xm;function px(){return Xm||(Xm=1,fd.exports=hx()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Ym;function mx(){if(Ym)return Yn;Ym=1;var i=Bf(),e=px();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,s=1;s<arguments.length;s++)r+="&args[]="+encodeURIComponent(arguments[s]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,o={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(o[n]=r,n=0;n<r.length;n++)a.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(n){return m.call(x,n)?!0:m.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,r,s,c){if(s!==null&&s.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:s!==null?!s.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,s,c){if(r===null||typeof r>"u"||M(n,r,s,c))return!0;if(c)return!1;if(s!==null)switch(s.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function R(n,r,s,c,f,g,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=s,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new R(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new R(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new R(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new R(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new R(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new R(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new R(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new R(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new R(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,D);y[r]=new R(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,D);y[r]=new R(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,D);y[r]=new R(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new R("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new R(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,r,s,c){var f=y.hasOwnProperty(r)?y[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,s,f,c)&&(s=null),c||f===null?_(r)&&(s===null?n.removeAttribute(r):n.setAttribute(r,""+s)):f.mustUseProperty?n[f.propertyName]=s===null?f.type===3?!1:"":s:(r=f.attributeName,c=f.attributeNamespace,s===null?n.removeAttribute(r):(f=f.type,s=f===3||f===4&&s===!0?"":""+s,c?n.setAttributeNS(c,r,s):n.setAttribute(r,s))))}var b=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,N=Symbol.for("react.element"),P=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),V=Symbol.for("react.provider"),X=Symbol.for("react.context"),J=Symbol.for("react.forward_ref"),ne=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),ie=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),q=Symbol.iterator;function j(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var O=Object.assign,L;function K(n){if(L===void 0)try{throw Error()}catch(s){var r=s.stack.trim().match(/\n( *(at )?)/);L=r&&r[1]||""}return`
`+L+n}var _e=!1;function He(n,r){if(!n||_e)return"";_e=!0;var s=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var c=fe}Reflect.construct(n,[],r)}else{try{r.call()}catch(fe){c=fe}n.call(r.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var f=fe.stack.split(`
`),g=c.stack.split(`
`),A=f.length-1,I=g.length-1;1<=A&&0<=I&&f[A]!==g[I];)I--;for(;1<=A&&0<=I;A--,I--)if(f[A]!==g[I]){if(A!==1||I!==1)do if(A--,I--,0>I||f[A]!==g[I]){var H=`
`+f[A].replace(" at new "," at ");return n.displayName&&H.includes("<anonymous>")&&(H=H.replace("<anonymous>",n.displayName)),H}while(1<=A&&0<=I);break}}}finally{_e=!1,Error.prepareStackTrace=s}return(n=n?n.displayName||n.name:"")?K(n):""}function Ce(n){switch(n.tag){case 5:return K(n.type);case 16:return K("Lazy");case 13:return K("Suspense");case 19:return K("SuspenseList");case 0:case 2:case 15:return n=He(n.type,!1),n;case 11:return n=He(n.type.render,!1),n;case 1:return n=He(n.type,!0),n;default:return""}}function we(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case k:return"Fragment";case P:return"Portal";case U:return"Profiler";case T:return"StrictMode";case ne:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case X:return(n.displayName||"Context")+".Consumer";case V:return(n._context.displayName||"Context")+".Provider";case J:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case ie:return r=n.displayName||null,r!==null?r:we(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return we(n(r))}catch{}}return null}function ae(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return we(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function ue(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ee(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Ye(n){var r=Ee(n)?"checked":"value",s=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof s<"u"&&typeof s.get=="function"&&typeof s.set=="function"){var f=s.get,g=s.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,r,{enumerable:s.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function be(n){n._valueTracker||(n._valueTracker=Ye(n))}function at(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var s=r.getValue(),c="";return n&&(c=Ee(n)?n.checked?"true":"false":n.value),n=c,n!==s?(r.setValue(n),!0):!1}function Ft(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function dt(n,r){var s=r.checked;return O({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:s??n._wrapperState.initialChecked})}function mt(n,r){var s=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;s=ue(r.value!=null?r.value:s),n._wrapperState={initialChecked:c,initialValue:s,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Ot(n,r){r=r.checked,r!=null&&z(n,"checked",r,!1)}function gt(n,r){Ot(n,r);var s=ue(r.value),c=r.type;if(s!=null)c==="number"?(s===0&&n.value===""||n.value!=s)&&(n.value=""+s):n.value!==""+s&&(n.value=""+s);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?en(n,r.type,s):r.hasOwnProperty("defaultValue")&&en(n,r.type,ue(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Ht(n,r,s){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,s||r===n.value||(n.value=r),n.defaultValue=r}s=n.name,s!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,s!==""&&(n.name=s)}function en(n,r,s){(r!=="number"||Ft(n.ownerDocument)!==n)&&(s==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+s&&(n.defaultValue=""+s))}var sn=Array.isArray;function Ut(n,r,s,c){if(n=n.options,r){r={};for(var f=0;f<s.length;f++)r["$"+s[f]]=!0;for(s=0;s<n.length;s++)f=r.hasOwnProperty("$"+n[s].value),n[s].selected!==f&&(n[s].selected=f),f&&c&&(n[s].defaultSelected=!0)}else{for(s=""+ue(s),r=null,f=0;f<n.length;f++){if(n[f].value===s){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Xt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return O({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,r){var s=r.value;if(s==null){if(s=r.children,r=r.defaultValue,s!=null){if(r!=null)throw Error(t(92));if(sn(s)){if(1<s.length)throw Error(t(93));s=s[0]}r=s}r==null&&(r=""),s=r}n._wrapperState={initialValue:ue(s)}}function cn(n,r){var s=ue(r.value),c=ue(r.defaultValue);s!=null&&(s=""+s,s!==n.value&&(n.value=s),r.defaultValue==null&&n.defaultValue!==s&&(n.defaultValue=s)),c!=null&&(n.defaultValue=""+c)}function bt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?F(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var Z,ce=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,s,c,f){MSApp.execUnsafeLocalFunction(function(){return n(r,s,c,f)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(Z=Z||document.createElement("div"),Z.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=Z.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var s=n.firstChild;if(s&&s===n.lastChild&&s.nodeType===3){s.nodeValue=r;return}}n.textContent=r}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Pe=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Pe.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Te[r]=Te[n]})});function pe(n,r,s){return r==null||typeof r=="boolean"||r===""?"":s||typeof r!="number"||r===0||Te.hasOwnProperty(n)&&Te[n]?(""+r).trim():r+"px"}function ve(n,r){n=n.style;for(var s in r)if(r.hasOwnProperty(s)){var c=s.indexOf("--")===0,f=pe(s,r[s],c);s==="float"&&(s="cssFloat"),c?n.setProperty(s,f):n[s]=f}}var Ne=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Ze(n,r){if(r){if(Ne[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ue(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Re=null;function Je(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var nt=null,st=null,B=null;function Le(n){if(n=zs(n)){if(typeof nt!="function")throw Error(t(280));var r=n.stateNode;r&&(r=qo(r),nt(n.stateNode,n.type,r))}}function ge(n){st?B?B.push(n):B=[n]:st=n}function De(){if(st){var n=st,r=B;if(B=st=null,Le(n),r)for(n=0;n<r.length;n++)Le(r[n])}}function ze(n,r){return n(r)}function xe(){}var et=!1;function Ke(n,r,s){if(et)return n(r,s);et=!0;try{return ze(n,r,s)}finally{et=!1,(st!==null||B!==null)&&(xe(),De())}}function Pt(n,r){var s=n.stateNode;if(s===null)return null;var c=qo(s);if(c===null)return null;s=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(s&&typeof s!="function")throw Error(t(231,r,typeof s));return s}var wt=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){wt=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{wt=!1}function si(n,r,s,c,f,g,A,I,H){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(s,fe)}catch(ye){this.onError(ye)}}var $r=!1,Ea=null,qr=!1,Kr=null,Dc={onError:function(n){$r=!0,Ea=n}};function Po(n,r,s,c,f,g,A,I,H){$r=!1,Ea=null,si.apply(Dc,arguments)}function Lo(n,r,s,c,f,g,A,I,H){if(Po.apply(this,arguments),$r){if($r){var fe=Ea;$r=!1,Ea=null}else throw Error(t(198));qr||(qr=!0,Kr=fe)}}function On(n){var r=n,s=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(s=r.return),n=r.return;while(n)}return r.tag===3?s:null}function Ta(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _s(n){if(On(n)!==n)throw Error(t(188))}function Do(n){var r=n.alternate;if(!r){if(r=On(n),r===null)throw Error(t(188));return r!==n?null:n}for(var s=n,c=r;;){var f=s.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){s=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===s)return _s(f),n;if(g===c)return _s(f),r;g=g.sibling}throw Error(t(188))}if(s.return!==c.return)s=f,c=g;else{for(var A=!1,I=f.child;I;){if(I===s){A=!0,s=f,c=g;break}if(I===c){A=!0,c=f,s=g;break}I=I.sibling}if(!A){for(I=g.child;I;){if(I===s){A=!0,s=g,c=f;break}if(I===c){A=!0,c=g,s=f;break}I=I.sibling}if(!A)throw Error(t(189))}}if(s.alternate!==c)throw Error(t(190))}if(s.tag!==3)throw Error(t(188));return s.stateNode.current===s?n:r}function jr(n){return n=Do(n),n!==null?xs(n):null}function xs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=xs(n);if(r!==null)return r;n=n.sibling}return null}var Zr=e.unstable_scheduleCallback,Ss=e.unstable_cancelCallback,No=e.unstable_shouldYield,Nc=e.unstable_requestPaint,Kt=e.unstable_now,Uc=e.unstable_getCurrentPriorityLevel,ys=e.unstable_ImmediatePriority,Ms=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,W=e.unstable_LowPriority,de=e.unstable_IdlePriority,te=null,Q=null;function Ie(n){if(Q&&typeof Q.onCommitFiberRoot=="function")try{Q.onCommitFiberRoot(te,n,void 0,(n.current.flags&128)===128)}catch{}}var Fe=Math.clz32?Math.clz32:Qe,Oe=Math.log,$e=Math.LN2;function Qe(n){return n>>>=0,n===0?32:31-(Oe(n)/$e|0)|0}var ut=64,pt=4194304;function We(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Mt(n,r){var s=n.pendingLanes;if(s===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,A=s&268435455;if(A!==0){var I=A&~f;I!==0?c=We(I):(g&=A,g!==0&&(c=We(g)))}else A=s&~f,A!==0?c=We(A):g!==0&&(c=We(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=s&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)s=31-Fe(r),f=1<<s,c|=n[s],r&=~f;return c}function tn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Vt(n,r){for(var s=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-Fe(g),I=1<<A,H=f[A];H===-1?((I&s)===0||(I&c)!==0)&&(f[A]=tn(I,r)):H<=r&&(n.expiredLanes|=I),g&=~I}}function Nt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function un(){var n=ut;return ut<<=1,(ut&4194240)===0&&(ut=64),n}function Ve(n){for(var r=[],s=0;31>s;s++)r.push(n);return r}function rn(n,r,s){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Fe(r),n[r]=s}function Et(n,r){var s=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<s;){var f=31-Fe(s),g=1<<f;r[f]=0,c[f]=-1,n[f]=-1,s&=~g}}function Rn(n,r){var s=n.entangledLanes|=r;for(n=n.entanglements;s;){var c=31-Fe(s),f=1<<c;f&r|n[c]&r&&(n[c]|=r),s&=~f}}var vt=0;function vi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ki,Lt,Yt,_i,It,oi=!1,xi=[],Si=null,gr=null,vr=null,Es=new Map,Ts=new Map,_r=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(n,r){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Es.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(r.pointerId)}}function ws(n,r,s,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:s,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},r!==null&&(r=zs(r),r!==null&&Lt(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function Pv(n,r,s,c,f){switch(r){case"focusin":return Si=ws(Si,n,r,s,c,f),!0;case"dragenter":return gr=ws(gr,n,r,s,c,f),!0;case"mouseover":return vr=ws(vr,n,r,s,c,f),!0;case"pointerover":var g=f.pointerId;return Es.set(g,ws(Es.get(g)||null,n,r,s,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Ts.set(g,ws(Ts.get(g)||null,n,r,s,c,f)),!0}return!1}function Th(n){var r=Jr(n.target);if(r!==null){var s=On(r);if(s!==null){if(r=s.tag,r===13){if(r=Ta(s),r!==null){n.blockedOn=r,It(n.priority,function(){Yt(s)});return}}else if(r===3&&s.stateNode.current.memoizedState.isDehydrated){n.blockedOn=s.tag===3?s.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Uo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var s=Oc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(s===null){s=n.nativeEvent;var c=new s.constructor(s.type,s);Re=c,s.target.dispatchEvent(c),Re=null}else return r=zs(s),r!==null&&Lt(r),n.blockedOn=s,!1;r.shift()}return!0}function wh(n,r,s){Uo(n)&&s.delete(r)}function Lv(){oi=!1,Si!==null&&Uo(Si)&&(Si=null),gr!==null&&Uo(gr)&&(gr=null),vr!==null&&Uo(vr)&&(vr=null),Es.forEach(wh),Ts.forEach(wh)}function As(n,r){n.blockedOn===r&&(n.blockedOn=null,oi||(oi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lv)))}function Cs(n){function r(f){return As(f,n)}if(0<xi.length){As(xi[0],n);for(var s=1;s<xi.length;s++){var c=xi[s];c.blockedOn===n&&(c.blockedOn=null)}}for(Si!==null&&As(Si,n),gr!==null&&As(gr,n),vr!==null&&As(vr,n),Es.forEach(r),Ts.forEach(r),s=0;s<_r.length;s++)c=_r[s],c.blockedOn===n&&(c.blockedOn=null);for(;0<_r.length&&(s=_r[0],s.blockedOn===null);)Th(s),s.blockedOn===null&&_r.shift()}var wa=b.ReactCurrentBatchConfig,Fo=!0;function Dv(n,r,s,c){var f=vt,g=wa.transition;wa.transition=null;try{vt=1,Fc(n,r,s,c)}finally{vt=f,wa.transition=g}}function Nv(n,r,s,c){var f=vt,g=wa.transition;wa.transition=null;try{vt=4,Fc(n,r,s,c)}finally{vt=f,wa.transition=g}}function Fc(n,r,s,c){if(Fo){var f=Oc(n,r,s,c);if(f===null)Qc(n,r,c,Oo,s),Eh(n,c);else if(Pv(f,n,r,s,c))c.stopPropagation();else if(Eh(n,c),r&4&&-1<bv.indexOf(n)){for(;f!==null;){var g=zs(f);if(g!==null&&Ki(g),g=Oc(n,r,s,c),g===null&&Qc(n,r,c,Oo,s),g===f)break;f=g}f!==null&&c.stopPropagation()}else Qc(n,r,c,null,s)}}var Oo=null;function Oc(n,r,s,c){if(Oo=null,n=Je(c),n=Jr(n),n!==null)if(r=On(n),r===null)n=null;else if(s=r.tag,s===13){if(n=Ta(r),n!==null)return n;n=null}else if(s===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Oo=n,null}function Ah(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case ys:return 1;case Ms:return 4;case C:case W:return 16;case de:return 536870912;default:return 16}default:return 16}}var xr=null,Ic=null,Io=null;function Ch(){if(Io)return Io;var n,r=Ic,s=r.length,c,f="value"in xr?xr.value:xr.textContent,g=f.length;for(n=0;n<s&&r[n]===f[n];n++);var A=s-n;for(c=1;c<=A&&r[s-c]===f[g-c];c++);return Io=f.slice(n,1<c?1-c:void 0)}function ko(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zo(){return!0}function Rh(){return!1}function Zn(n){function r(s,c,f,g,A){this._reactName=s,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var I in n)n.hasOwnProperty(I)&&(s=n[I],this[I]=s?s(g):g[I]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zo:Rh,this.isPropagationStopped=Rh,this}return O(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var s=this.nativeEvent;s&&(s.preventDefault?s.preventDefault():typeof s.returnValue!="unknown"&&(s.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var s=this.nativeEvent;s&&(s.stopPropagation?s.stopPropagation():typeof s.cancelBubble!="unknown"&&(s.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),r}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Zn(Aa),Rs=O({},Aa,{view:0,detail:0}),Uv=Zn(Rs),zc,Hc,bs,Ho=O({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bs&&(bs&&n.type==="mousemove"?(zc=n.screenX-bs.screenX,Hc=n.screenY-bs.screenY):Hc=zc=0,bs=n),zc)},movementY:function(n){return"movementY"in n?n.movementY:Hc}}),bh=Zn(Ho),Fv=O({},Ho,{dataTransfer:0}),Ov=Zn(Fv),Iv=O({},Rs,{relatedTarget:0}),Vc=Zn(Iv),kv=O({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Zn(kv),Hv=O({},Aa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vv=Zn(Hv),Gv=O({},Aa,{data:0}),Ph=Zn(Gv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Yv(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Xv[n])?!!r[n]:!1}function Gc(){return Yv}var $v=O({},Rs,{key:function(n){if(n.key){var r=Bv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Wv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),qv=Zn($v),Kv=O({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Zn(Kv),jv=O({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Zv=Zn(jv),Jv=O({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Zn(Jv),e_=O({},Ho,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=Zn(e_),n_=[9,13,27,32],Bc=d&&"CompositionEvent"in window,Ps=null;d&&"documentMode"in document&&(Ps=document.documentMode);var i_=d&&"TextEvent"in window&&!Ps,Dh=d&&(!Bc||Ps&&8<Ps&&11>=Ps),Nh=" ",Uh=!1;function Fh(n,r){switch(n){case"keyup":return n_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ca=!1;function r_(n,r){switch(n){case"compositionend":return Oh(r);case"keypress":return r.which!==32?null:(Uh=!0,Nh);case"textInput":return n=r.data,n===Nh&&Uh?null:n;default:return null}}function a_(n,r){if(Ca)return n==="compositionend"||!Bc&&Fh(n,r)?(n=Ch(),Io=Ic=xr=null,Ca=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Dh&&r.locale!=="ko"?null:r.data;default:return null}}var s_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!s_[n.type]:r==="textarea"}function kh(n,r,s,c){ge(c),r=Xo(r,"onChange"),0<r.length&&(s=new kc("onChange","change",null,s,c),n.push({event:s,listeners:r}))}var Ls=null,Ds=null;function o_(n){np(n,0)}function Vo(n){var r=Da(n);if(at(r))return n}function l_(n,r){if(n==="change")return r}var zh=!1;if(d){var Wc;if(d){var Xc="oninput"in document;if(!Xc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),Xc=typeof Hh.oninput=="function"}Wc=Xc}else Wc=!1;zh=Wc&&(!document.documentMode||9<document.documentMode)}function Vh(){Ls&&(Ls.detachEvent("onpropertychange",Gh),Ds=Ls=null)}function Gh(n){if(n.propertyName==="value"&&Vo(Ds)){var r=[];kh(r,Ds,n,Je(n)),Ke(o_,r)}}function c_(n,r,s){n==="focusin"?(Vh(),Ls=r,Ds=s,Ls.attachEvent("onpropertychange",Gh)):n==="focusout"&&Vh()}function u_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vo(Ds)}function d_(n,r){if(n==="click")return Vo(r)}function f_(n,r){if(n==="input"||n==="change")return Vo(r)}function h_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var yi=typeof Object.is=="function"?Object.is:h_;function Ns(n,r){if(yi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var s=Object.keys(n),c=Object.keys(r);if(s.length!==c.length)return!1;for(c=0;c<s.length;c++){var f=s[c];if(!m.call(r,f)||!yi(n[f],r[f]))return!1}return!0}function Bh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wh(n,r){var s=Bh(n);n=0;for(var c;s;){if(s.nodeType===3){if(c=n+s.textContent.length,n<=r&&c>=r)return{node:s,offset:r-n};n=c}e:{for(;s;){if(s.nextSibling){s=s.nextSibling;break e}s=s.parentNode}s=void 0}s=Bh(s)}}function Xh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Xh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function Yh(){for(var n=window,r=Ft();r instanceof n.HTMLIFrameElement;){try{var s=typeof r.contentWindow.location.href=="string"}catch{s=!1}if(s)n=r.contentWindow;else break;r=Ft(n.document)}return r}function Yc(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function p_(n){var r=Yh(),s=n.focusedElem,c=n.selectionRange;if(r!==s&&s&&s.ownerDocument&&Xh(s.ownerDocument.documentElement,s)){if(c!==null&&Yc(s)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in s)s.selectionStart=r,s.selectionEnd=Math.min(n,s.value.length);else if(n=(r=s.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var f=s.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Wh(s,g);var A=Wh(s,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=s;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof s.focus=="function"&&s.focus(),s=0;s<r.length;s++)n=r[s],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var m_=d&&"documentMode"in document&&11>=document.documentMode,Ra=null,$c=null,Us=null,qc=!1;function $h(n,r,s){var c=s.window===s?s.document:s.nodeType===9?s:s.ownerDocument;qc||Ra==null||Ra!==Ft(c)||(c=Ra,"selectionStart"in c&&Yc(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Us&&Ns(Us,c)||(Us=c,c=Xo($c,"onSelect"),0<c.length&&(r=new kc("onSelect","select",null,r,s),n.push({event:r,listeners:c}),r.target=Ra)))}function Go(n,r){var s={};return s[n.toLowerCase()]=r.toLowerCase(),s["Webkit"+n]="webkit"+r,s["Moz"+n]="moz"+r,s}var ba={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Kc={},qh={};d&&(qh=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function Bo(n){if(Kc[n])return Kc[n];if(!ba[n])return n;var r=ba[n],s;for(s in r)if(r.hasOwnProperty(s)&&s in qh)return Kc[n]=r[s];return n}var Kh=Bo("animationend"),jh=Bo("animationiteration"),Zh=Bo("animationstart"),Jh=Bo("transitionend"),Qh=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,r){Qh.set(n,r),l(r,[n])}for(var jc=0;jc<ep.length;jc++){var Zc=ep[jc],g_=Zc.toLowerCase(),v_=Zc[0].toUpperCase()+Zc.slice(1);Sr(g_,"on"+v_)}Sr(Kh,"onAnimationEnd"),Sr(jh,"onAnimationIteration"),Sr(Zh,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Jh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),__=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function tp(n,r,s){var c=n.type||"unknown-event";n.currentTarget=s,Lo(c,r,void 0,n),n.currentTarget=null}function np(n,r){r=(r&4)!==0;for(var s=0;s<n.length;s++){var c=n[s],f=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var A=c.length-1;0<=A;A--){var I=c[A],H=I.instance,fe=I.currentTarget;if(I=I.listener,H!==g&&f.isPropagationStopped())break e;tp(f,I,fe),g=H}else for(A=0;A<c.length;A++){if(I=c[A],H=I.instance,fe=I.currentTarget,I=I.listener,H!==g&&f.isPropagationStopped())break e;tp(f,I,fe),g=H}}}if(qr)throw n=Kr,qr=!1,Kr=null,n}function Bt(n,r){var s=r[au];s===void 0&&(s=r[au]=new Set);var c=n+"__bubble";s.has(c)||(ip(r,n,2,!1),s.add(c))}function Jc(n,r,s){var c=0;r&&(c|=4),ip(s,n,c,r)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Os(n){if(!n[Wo]){n[Wo]=!0,a.forEach(function(s){s!=="selectionchange"&&(__.has(s)||Jc(s,!1,n),Jc(s,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Wo]||(r[Wo]=!0,Jc("selectionchange",!1,r))}}function ip(n,r,s,c){switch(Ah(r)){case 1:var f=Dv;break;case 4:f=Nv;break;default:f=Fc}s=f.bind(null,r,s,n),f=void 0,!wt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(r,s,{capture:!0,passive:f}):n.addEventListener(r,s,!0):f!==void 0?n.addEventListener(r,s,{passive:f}):n.addEventListener(r,s,!1)}function Qc(n,r,s,c,f){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var I=c.stateNode.containerInfo;if(I===f||I.nodeType===8&&I.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var H=A.tag;if((H===3||H===4)&&(H=A.stateNode.containerInfo,H===f||H.nodeType===8&&H.parentNode===f))return;A=A.return}for(;I!==null;){if(A=Jr(I),A===null)return;if(H=A.tag,H===5||H===6){c=g=A;continue e}I=I.parentNode}}c=c.return}Ke(function(){var fe=g,ye=Je(s),Me=[];e:{var Se=Qh.get(n);if(Se!==void 0){var Be=kc,qe=n;switch(n){case"keypress":if(ko(s)===0)break e;case"keydown":case"keyup":Be=qv;break;case"focusin":qe="focus",Be=Vc;break;case"focusout":qe="blur",Be=Vc;break;case"beforeblur":case"afterblur":Be=Vc;break;case"click":if(s.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":Be=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":Be=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":Be=Zv;break;case Kh:case jh:case Zh:Be=zv;break;case Jh:Be=Qv;break;case"scroll":Be=Uv;break;case"wheel":Be=t_;break;case"copy":case"cut":case"paste":Be=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":Be=Lh}var je=(r&4)!==0,an=!je&&n==="scroll",re=je?Se!==null?Se+"Capture":null:Se;je=[];for(var $=fe,se;$!==null;){se=$;var Ae=se.stateNode;if(se.tag===5&&Ae!==null&&(se=Ae,re!==null&&(Ae=Pt($,re),Ae!=null&&je.push(Is($,Ae,se)))),an)break;$=$.return}0<je.length&&(Se=new Be(Se,qe,null,s,ye),Me.push({event:Se,listeners:je}))}}if((r&7)===0){e:{if(Se=n==="mouseover"||n==="pointerover",Be=n==="mouseout"||n==="pointerout",Se&&s!==Re&&(qe=s.relatedTarget||s.fromElement)&&(Jr(qe)||qe[ji]))break e;if((Be||Se)&&(Se=ye.window===ye?ye:(Se=ye.ownerDocument)?Se.defaultView||Se.parentWindow:window,Be?(qe=s.relatedTarget||s.toElement,Be=fe,qe=qe?Jr(qe):null,qe!==null&&(an=On(qe),qe!==an||qe.tag!==5&&qe.tag!==6)&&(qe=null)):(Be=null,qe=fe),Be!==qe)){if(je=bh,Ae="onMouseLeave",re="onMouseEnter",$="mouse",(n==="pointerout"||n==="pointerover")&&(je=Lh,Ae="onPointerLeave",re="onPointerEnter",$="pointer"),an=Be==null?Se:Da(Be),se=qe==null?Se:Da(qe),Se=new je(Ae,$+"leave",Be,s,ye),Se.target=an,Se.relatedTarget=se,Ae=null,Jr(ye)===fe&&(je=new je(re,$+"enter",qe,s,ye),je.target=se,je.relatedTarget=an,Ae=je),an=Ae,Be&&qe)t:{for(je=Be,re=qe,$=0,se=je;se;se=Pa(se))$++;for(se=0,Ae=re;Ae;Ae=Pa(Ae))se++;for(;0<$-se;)je=Pa(je),$--;for(;0<se-$;)re=Pa(re),se--;for(;$--;){if(je===re||re!==null&&je===re.alternate)break t;je=Pa(je),re=Pa(re)}je=null}else je=null;Be!==null&&rp(Me,Se,Be,je,!1),qe!==null&&an!==null&&rp(Me,an,qe,je,!0)}}e:{if(Se=fe?Da(fe):window,Be=Se.nodeName&&Se.nodeName.toLowerCase(),Be==="select"||Be==="input"&&Se.type==="file")var tt=l_;else if(Ih(Se))if(zh)tt=f_;else{tt=u_;var it=c_}else(Be=Se.nodeName)&&Be.toLowerCase()==="input"&&(Se.type==="checkbox"||Se.type==="radio")&&(tt=d_);if(tt&&(tt=tt(n,fe))){kh(Me,tt,s,ye);break e}it&&it(n,Se,fe),n==="focusout"&&(it=Se._wrapperState)&&it.controlled&&Se.type==="number"&&en(Se,"number",Se.value)}switch(it=fe?Da(fe):window,n){case"focusin":(Ih(it)||it.contentEditable==="true")&&(Ra=it,$c=fe,Us=null);break;case"focusout":Us=$c=Ra=null;break;case"mousedown":qc=!0;break;case"contextmenu":case"mouseup":case"dragend":qc=!1,$h(Me,s,ye);break;case"selectionchange":if(m_)break;case"keydown":case"keyup":$h(Me,s,ye)}var rt;if(Bc)e:{switch(n){case"compositionstart":var ot="onCompositionStart";break e;case"compositionend":ot="onCompositionEnd";break e;case"compositionupdate":ot="onCompositionUpdate";break e}ot=void 0}else Ca?Fh(n,s)&&(ot="onCompositionEnd"):n==="keydown"&&s.keyCode===229&&(ot="onCompositionStart");ot&&(Dh&&s.locale!=="ko"&&(Ca||ot!=="onCompositionStart"?ot==="onCompositionEnd"&&Ca&&(rt=Ch()):(xr=ye,Ic="value"in xr?xr.value:xr.textContent,Ca=!0)),it=Xo(fe,ot),0<it.length&&(ot=new Ph(ot,n,null,s,ye),Me.push({event:ot,listeners:it}),rt?ot.data=rt:(rt=Oh(s),rt!==null&&(ot.data=rt)))),(rt=i_?r_(n,s):a_(n,s))&&(fe=Xo(fe,"onBeforeInput"),0<fe.length&&(ye=new Ph("onBeforeInput","beforeinput",null,s,ye),Me.push({event:ye,listeners:fe}),ye.data=rt))}np(Me,r)})}function Is(n,r,s){return{instance:n,listener:r,currentTarget:s}}function Xo(n,r){for(var s=r+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Pt(n,s),g!=null&&c.unshift(Is(n,g,f)),g=Pt(n,r),g!=null&&c.push(Is(n,g,f))),n=n.return}return c}function Pa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rp(n,r,s,c,f){for(var g=r._reactName,A=[];s!==null&&s!==c;){var I=s,H=I.alternate,fe=I.stateNode;if(H!==null&&H===c)break;I.tag===5&&fe!==null&&(I=fe,f?(H=Pt(s,g),H!=null&&A.unshift(Is(s,H,I))):f||(H=Pt(s,g),H!=null&&A.push(Is(s,H,I)))),s=s.return}A.length!==0&&n.push({event:r,listeners:A})}var x_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function ap(n){return(typeof n=="string"?n:""+n).replace(x_,`
`).replace(S_,"")}function Yo(n,r,s){if(r=ap(r),ap(n)!==r&&s)throw Error(t(425))}function $o(){}var eu=null,tu=null;function nu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,M_=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(E_)}:iu;function E_(n){setTimeout(function(){throw n})}function ru(n,r){var s=r,c=0;do{var f=s.nextSibling;if(n.removeChild(s),f&&f.nodeType===8)if(s=f.data,s==="/$"){if(c===0){n.removeChild(f),Cs(r);return}c--}else s!=="$"&&s!=="$?"&&s!=="$!"||c++;s=f}while(s);Cs(r)}function yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function op(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="$"||s==="$!"||s==="$?"){if(r===0)return n;r--}else s==="/$"&&r++}n=n.previousSibling}return null}var La=Math.random().toString(36).slice(2),Fi="__reactFiber$"+La,ks="__reactProps$"+La,ji="__reactContainer$"+La,au="__reactEvents$"+La,T_="__reactListeners$"+La,w_="__reactHandles$"+La;function Jr(n){var r=n[Fi];if(r)return r;for(var s=n.parentNode;s;){if(r=s[ji]||s[Fi]){if(s=r.alternate,r.child!==null||s!==null&&s.child!==null)for(n=op(n);n!==null;){if(s=n[Fi])return s;n=op(n)}return r}n=s,s=n.parentNode}return null}function zs(n){return n=n[Fi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Da(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function qo(n){return n[ks]||null}var su=[],Na=-1;function Mr(n){return{current:n}}function Wt(n){0>Na||(n.current=su[Na],su[Na]=null,Na--)}function Gt(n,r){Na++,su[Na]=n.current,n.current=r}var Er={},bn=Mr(Er),Vn=Mr(!1),Qr=Er;function Ua(n,r){var s=n.type.contextTypes;if(!s)return Er;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in s)f[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=f),f}function Gn(n){return n=n.childContextTypes,n!=null}function Ko(){Wt(Vn),Wt(bn)}function lp(n,r,s){if(bn.current!==Er)throw Error(t(168));Gt(bn,r),Gt(Vn,s)}function cp(n,r,s){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return s;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(t(108,ae(n)||"Unknown",f));return O({},s,c)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Er,Qr=bn.current,Gt(bn,n),Gt(Vn,Vn.current),!0}function up(n,r,s){var c=n.stateNode;if(!c)throw Error(t(169));s?(n=cp(n,r,Qr),c.__reactInternalMemoizedMergedChildContext=n,Wt(Vn),Wt(bn),Gt(bn,n)):Wt(Vn),Gt(Vn,s)}var Zi=null,Zo=!1,ou=!1;function dp(n){Zi===null?Zi=[n]:Zi.push(n)}function A_(n){Zo=!0,dp(n)}function Tr(){if(!ou&&Zi!==null){ou=!0;var n=0,r=vt;try{var s=Zi;for(vt=1;n<s.length;n++){var c=s[n];do c=c(!0);while(c!==null)}Zi=null,Zo=!1}catch(f){throw Zi!==null&&(Zi=Zi.slice(n+1)),Zr(ys,Tr),f}finally{vt=r,ou=!1}}return null}var Fa=[],Oa=0,Jo=null,Qo=0,li=[],ci=0,ea=null,Ji=1,Qi="";function ta(n,r){Fa[Oa++]=Qo,Fa[Oa++]=Jo,Jo=n,Qo=r}function fp(n,r,s){li[ci++]=Ji,li[ci++]=Qi,li[ci++]=ea,ea=n;var c=Ji;n=Qi;var f=32-Fe(c)-1;c&=~(1<<f),s+=1;var g=32-Fe(r)+f;if(30<g){var A=f-f%5;g=(c&(1<<A)-1).toString(32),c>>=A,f-=A,Ji=1<<32-Fe(r)+f|s<<f|c,Qi=g+n}else Ji=1<<g|s<<f|c,Qi=n}function lu(n){n.return!==null&&(ta(n,1),fp(n,1,0))}function cu(n){for(;n===Jo;)Jo=Fa[--Oa],Fa[Oa]=null,Qo=Fa[--Oa],Fa[Oa]=null;for(;n===ea;)ea=li[--ci],li[ci]=null,Qi=li[--ci],li[ci]=null,Ji=li[--ci],li[ci]=null}var Jn=null,Qn=null,$t=!1,Mi=null;function hp(n,r){var s=hi(5,null,null,0);s.elementType="DELETED",s.stateNode=r,s.return=n,r=n.deletions,r===null?(n.deletions=[s],n.flags|=16):r.push(s)}function pp(n,r){switch(n.tag){case 5:var s=n.type;return r=r.nodeType!==1||s.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Jn=n,Qn=yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Jn=n,Qn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(s=ea!==null?{id:Ji,overflow:Qi}:null,n.memoizedState={dehydrated:r,treeContext:s,retryLane:1073741824},s=hi(18,null,null,0),s.stateNode=r,s.return=n,n.child=s,Jn=n,Qn=null,!0):!1;default:return!1}}function uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function du(n){if($t){var r=Qn;if(r){var s=r;if(!pp(n,r)){if(uu(n))throw Error(t(418));r=yr(s.nextSibling);var c=Jn;r&&pp(n,r)?hp(c,s):(n.flags=n.flags&-4097|2,$t=!1,Jn=n)}}else{if(uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,$t=!1,Jn=n}}}function mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function el(n){if(n!==Jn)return!1;if(!$t)return mp(n),$t=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!nu(n.type,n.memoizedProps)),r&&(r=Qn)){if(uu(n))throw gp(),Error(t(418));for(;r;)hp(n,r),r=yr(r.nextSibling)}if(mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var s=n.data;if(s==="/$"){if(r===0){Qn=yr(n.nextSibling);break e}r--}else s!=="$"&&s!=="$!"&&s!=="$?"||r++}n=n.nextSibling}Qn=null}}else Qn=Jn?yr(n.stateNode.nextSibling):null;return!0}function gp(){for(var n=Qn;n;)n=yr(n.nextSibling)}function Ia(){Qn=Jn=null,$t=!1}function fu(n){Mi===null?Mi=[n]:Mi.push(n)}var C_=b.ReactCurrentBatchConfig;function Hs(n,r,s){if(n=s.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(s._owner){if(s=s._owner,s){if(s.tag!==1)throw Error(t(309));var c=s.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(A){var I=f.refs;A===null?delete I[g]:I[g]=A},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!s._owner)throw Error(t(290,n))}return n}function tl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function vp(n){var r=n._init;return r(n._payload)}function _p(n){function r(re,$){if(n){var se=re.deletions;se===null?(re.deletions=[$],re.flags|=16):se.push($)}}function s(re,$){if(!n)return null;for(;$!==null;)r(re,$),$=$.sibling;return null}function c(re,$){for(re=new Map;$!==null;)$.key!==null?re.set($.key,$):re.set($.index,$),$=$.sibling;return re}function f(re,$){return re=Dr(re,$),re.index=0,re.sibling=null,re}function g(re,$,se){return re.index=se,n?(se=re.alternate,se!==null?(se=se.index,se<$?(re.flags|=2,$):se):(re.flags|=2,$)):(re.flags|=1048576,$)}function A(re){return n&&re.alternate===null&&(re.flags|=2),re}function I(re,$,se,Ae){return $===null||$.tag!==6?($=id(se,re.mode,Ae),$.return=re,$):($=f($,se),$.return=re,$)}function H(re,$,se,Ae){var tt=se.type;return tt===k?ye(re,$,se.props.children,Ae,se.key):$!==null&&($.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===oe&&vp(tt)===$.type)?(Ae=f($,se.props),Ae.ref=Hs(re,$,se),Ae.return=re,Ae):(Ae=wl(se.type,se.key,se.props,null,re.mode,Ae),Ae.ref=Hs(re,$,se),Ae.return=re,Ae)}function fe(re,$,se,Ae){return $===null||$.tag!==4||$.stateNode.containerInfo!==se.containerInfo||$.stateNode.implementation!==se.implementation?($=rd(se,re.mode,Ae),$.return=re,$):($=f($,se.children||[]),$.return=re,$)}function ye(re,$,se,Ae,tt){return $===null||$.tag!==7?($=ca(se,re.mode,Ae,tt),$.return=re,$):($=f($,se),$.return=re,$)}function Me(re,$,se){if(typeof $=="string"&&$!==""||typeof $=="number")return $=id(""+$,re.mode,se),$.return=re,$;if(typeof $=="object"&&$!==null){switch($.$$typeof){case N:return se=wl($.type,$.key,$.props,null,re.mode,se),se.ref=Hs(re,null,$),se.return=re,se;case P:return $=rd($,re.mode,se),$.return=re,$;case oe:var Ae=$._init;return Me(re,Ae($._payload),se)}if(sn($)||j($))return $=ca($,re.mode,se,null),$.return=re,$;tl(re,$)}return null}function Se(re,$,se,Ae){var tt=$!==null?$.key:null;if(typeof se=="string"&&se!==""||typeof se=="number")return tt!==null?null:I(re,$,""+se,Ae);if(typeof se=="object"&&se!==null){switch(se.$$typeof){case N:return se.key===tt?H(re,$,se,Ae):null;case P:return se.key===tt?fe(re,$,se,Ae):null;case oe:return tt=se._init,Se(re,$,tt(se._payload),Ae)}if(sn(se)||j(se))return tt!==null?null:ye(re,$,se,Ae,null);tl(re,se)}return null}function Be(re,$,se,Ae,tt){if(typeof Ae=="string"&&Ae!==""||typeof Ae=="number")return re=re.get(se)||null,I($,re,""+Ae,tt);if(typeof Ae=="object"&&Ae!==null){switch(Ae.$$typeof){case N:return re=re.get(Ae.key===null?se:Ae.key)||null,H($,re,Ae,tt);case P:return re=re.get(Ae.key===null?se:Ae.key)||null,fe($,re,Ae,tt);case oe:var it=Ae._init;return Be(re,$,se,it(Ae._payload),tt)}if(sn(Ae)||j(Ae))return re=re.get(se)||null,ye($,re,Ae,tt,null);tl($,Ae)}return null}function qe(re,$,se,Ae){for(var tt=null,it=null,rt=$,ot=$=0,xn=null;rt!==null&&ot<se.length;ot++){rt.index>ot?(xn=rt,rt=null):xn=rt.sibling;var Dt=Se(re,rt,se[ot],Ae);if(Dt===null){rt===null&&(rt=xn);break}n&&rt&&Dt.alternate===null&&r(re,rt),$=g(Dt,$,ot),it===null?tt=Dt:it.sibling=Dt,it=Dt,rt=xn}if(ot===se.length)return s(re,rt),$t&&ta(re,ot),tt;if(rt===null){for(;ot<se.length;ot++)rt=Me(re,se[ot],Ae),rt!==null&&($=g(rt,$,ot),it===null?tt=rt:it.sibling=rt,it=rt);return $t&&ta(re,ot),tt}for(rt=c(re,rt);ot<se.length;ot++)xn=Be(rt,re,ot,se[ot],Ae),xn!==null&&(n&&xn.alternate!==null&&rt.delete(xn.key===null?ot:xn.key),$=g(xn,$,ot),it===null?tt=xn:it.sibling=xn,it=xn);return n&&rt.forEach(function(Nr){return r(re,Nr)}),$t&&ta(re,ot),tt}function je(re,$,se,Ae){var tt=j(se);if(typeof tt!="function")throw Error(t(150));if(se=tt.call(se),se==null)throw Error(t(151));for(var it=tt=null,rt=$,ot=$=0,xn=null,Dt=se.next();rt!==null&&!Dt.done;ot++,Dt=se.next()){rt.index>ot?(xn=rt,rt=null):xn=rt.sibling;var Nr=Se(re,rt,Dt.value,Ae);if(Nr===null){rt===null&&(rt=xn);break}n&&rt&&Nr.alternate===null&&r(re,rt),$=g(Nr,$,ot),it===null?tt=Nr:it.sibling=Nr,it=Nr,rt=xn}if(Dt.done)return s(re,rt),$t&&ta(re,ot),tt;if(rt===null){for(;!Dt.done;ot++,Dt=se.next())Dt=Me(re,Dt.value,Ae),Dt!==null&&($=g(Dt,$,ot),it===null?tt=Dt:it.sibling=Dt,it=Dt);return $t&&ta(re,ot),tt}for(rt=c(re,rt);!Dt.done;ot++,Dt=se.next())Dt=Be(rt,re,ot,Dt.value,Ae),Dt!==null&&(n&&Dt.alternate!==null&&rt.delete(Dt.key===null?ot:Dt.key),$=g(Dt,$,ot),it===null?tt=Dt:it.sibling=Dt,it=Dt);return n&&rt.forEach(function(sx){return r(re,sx)}),$t&&ta(re,ot),tt}function an(re,$,se,Ae){if(typeof se=="object"&&se!==null&&se.type===k&&se.key===null&&(se=se.props.children),typeof se=="object"&&se!==null){switch(se.$$typeof){case N:e:{for(var tt=se.key,it=$;it!==null;){if(it.key===tt){if(tt=se.type,tt===k){if(it.tag===7){s(re,it.sibling),$=f(it,se.props.children),$.return=re,re=$;break e}}else if(it.elementType===tt||typeof tt=="object"&&tt!==null&&tt.$$typeof===oe&&vp(tt)===it.type){s(re,it.sibling),$=f(it,se.props),$.ref=Hs(re,it,se),$.return=re,re=$;break e}s(re,it);break}else r(re,it);it=it.sibling}se.type===k?($=ca(se.props.children,re.mode,Ae,se.key),$.return=re,re=$):(Ae=wl(se.type,se.key,se.props,null,re.mode,Ae),Ae.ref=Hs(re,$,se),Ae.return=re,re=Ae)}return A(re);case P:e:{for(it=se.key;$!==null;){if($.key===it)if($.tag===4&&$.stateNode.containerInfo===se.containerInfo&&$.stateNode.implementation===se.implementation){s(re,$.sibling),$=f($,se.children||[]),$.return=re,re=$;break e}else{s(re,$);break}else r(re,$);$=$.sibling}$=rd(se,re.mode,Ae),$.return=re,re=$}return A(re);case oe:return it=se._init,an(re,$,it(se._payload),Ae)}if(sn(se))return qe(re,$,se,Ae);if(j(se))return je(re,$,se,Ae);tl(re,se)}return typeof se=="string"&&se!==""||typeof se=="number"?(se=""+se,$!==null&&$.tag===6?(s(re,$.sibling),$=f($,se),$.return=re,re=$):(s(re,$),$=id(se,re.mode,Ae),$.return=re,re=$),A(re)):s(re,$)}return an}var ka=_p(!0),xp=_p(!1),nl=Mr(null),il=null,za=null,hu=null;function pu(){hu=za=il=null}function mu(n){var r=nl.current;Wt(nl),n._currentValue=r}function gu(n,r,s){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===s)break;n=n.return}}function Ha(n,r){il=n,hu=za=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function ui(n){var r=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:r,next:null},za===null){if(il===null)throw Error(t(308));za=n,il.dependencies={lanes:0,firstContext:n}}else za=za.next=n;return r}var na=null;function vu(n){na===null?na=[n]:na.push(n)}function Sp(n,r,s,c){var f=r.interleaved;return f===null?(s.next=s,vu(r)):(s.next=f.next,f.next=s),r.interleaved=s,er(n,c)}function er(n,r){n.lanes|=r;var s=n.alternate;for(s!==null&&(s.lanes|=r),s=n,n=n.return;n!==null;)n.childLanes|=r,s=n.alternate,s!==null&&(s.childLanes|=r),s=n,n=n.return;return s.tag===3?s.stateNode:null}var wr=!1;function _u(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Ar(n,r,s){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ct&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,er(n,s)}return f=c.interleaved,f===null?(r.next=r,vu(c)):(r.next=f.next,f.next=r),c.interleaved=r,er(n,s)}function rl(n,r,s){if(r=r.updateQueue,r!==null&&(r=r.shared,(s&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Rn(n,s)}}function Mp(n,r){var s=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,s===c)){var f=null,g=null;if(s=s.firstBaseUpdate,s!==null){do{var A={eventTime:s.eventTime,lane:s.lane,tag:s.tag,payload:s.payload,callback:s.callback,next:null};g===null?f=g=A:g=g.next=A,s=s.next}while(s!==null);g===null?f=g=r:g=g.next=r}else f=g=r;s={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=s;return}n=s.lastBaseUpdate,n===null?s.firstBaseUpdate=r:n.next=r,s.lastBaseUpdate=r}function al(n,r,s,c){var f=n.updateQueue;wr=!1;var g=f.firstBaseUpdate,A=f.lastBaseUpdate,I=f.shared.pending;if(I!==null){f.shared.pending=null;var H=I,fe=H.next;H.next=null,A===null?g=fe:A.next=fe,A=H;var ye=n.alternate;ye!==null&&(ye=ye.updateQueue,I=ye.lastBaseUpdate,I!==A&&(I===null?ye.firstBaseUpdate=fe:I.next=fe,ye.lastBaseUpdate=H))}if(g!==null){var Me=f.baseState;A=0,ye=fe=H=null,I=g;do{var Se=I.lane,Be=I.eventTime;if((c&Se)===Se){ye!==null&&(ye=ye.next={eventTime:Be,lane:0,tag:I.tag,payload:I.payload,callback:I.callback,next:null});e:{var qe=n,je=I;switch(Se=r,Be=s,je.tag){case 1:if(qe=je.payload,typeof qe=="function"){Me=qe.call(Be,Me,Se);break e}Me=qe;break e;case 3:qe.flags=qe.flags&-65537|128;case 0:if(qe=je.payload,Se=typeof qe=="function"?qe.call(Be,Me,Se):qe,Se==null)break e;Me=O({},Me,Se);break e;case 2:wr=!0}}I.callback!==null&&I.lane!==0&&(n.flags|=64,Se=f.effects,Se===null?f.effects=[I]:Se.push(I))}else Be={eventTime:Be,lane:Se,tag:I.tag,payload:I.payload,callback:I.callback,next:null},ye===null?(fe=ye=Be,H=Me):ye=ye.next=Be,A|=Se;if(I=I.next,I===null){if(I=f.shared.pending,I===null)break;Se=I,I=Se.next,Se.next=null,f.lastBaseUpdate=Se,f.shared.pending=null}}while(!0);if(ye===null&&(H=Me),f.baseState=H,f.firstBaseUpdate=fe,f.lastBaseUpdate=ye,r=f.shared.interleaved,r!==null){f=r;do A|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);aa|=A,n.lanes=A,n.memoizedState=Me}}function Ep(n,r,s){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],f=c.callback;if(f!==null){if(c.callback=null,c=s,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Vs={},Oi=Mr(Vs),Gs=Mr(Vs),Bs=Mr(Vs);function ia(n){if(n===Vs)throw Error(t(174));return n}function xu(n,r){switch(Gt(Bs,r),Gt(Gs,n),Gt(Oi,Vs),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}Wt(Oi),Gt(Oi,r)}function Va(){Wt(Oi),Wt(Gs),Wt(Bs)}function Tp(n){ia(Bs.current);var r=ia(Oi.current),s=E(r,n.type);r!==s&&(Gt(Gs,n),Gt(Oi,s))}function Su(n){Gs.current===n&&(Wt(Oi),Wt(Gs))}var jt=Mr(0);function sl(n){for(var r=n;r!==null;){if(r.tag===13){var s=r.memoizedState;if(s!==null&&(s=s.dehydrated,s===null||s.data==="$?"||s.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var yu=[];function Mu(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var ol=b.ReactCurrentDispatcher,Eu=b.ReactCurrentBatchConfig,ra=0,Zt=null,dn=null,vn=null,ll=!1,Ws=!1,Xs=0,R_=0;function Pn(){throw Error(t(321))}function Tu(n,r){if(r===null)return!1;for(var s=0;s<r.length&&s<n.length;s++)if(!yi(n[s],r[s]))return!1;return!0}function wu(n,r,s,c,f,g){if(ra=g,Zt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ol.current=n===null||n.memoizedState===null?D_:N_,n=s(c,f),Ws){g=0;do{if(Ws=!1,Xs=0,25<=g)throw Error(t(301));g+=1,vn=dn=null,r.updateQueue=null,ol.current=U_,n=s(c,f)}while(Ws)}if(ol.current=dl,r=dn!==null&&dn.next!==null,ra=0,vn=dn=Zt=null,ll=!1,r)throw Error(t(300));return n}function Au(){var n=Xs!==0;return Xs=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Zt.memoizedState=vn=n:vn=vn.next=n,vn}function di(){if(dn===null){var n=Zt.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var r=vn===null?Zt.memoizedState:vn.next;if(r!==null)vn=r,dn=n;else{if(n===null)throw Error(t(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},vn===null?Zt.memoizedState=vn=n:vn=vn.next=n}return vn}function Ys(n,r){return typeof r=="function"?r(n):r}function Cu(n){var r=di(),s=r.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var c=dn,f=c.baseQueue,g=s.pending;if(g!==null){if(f!==null){var A=f.next;f.next=g.next,g.next=A}c.baseQueue=f=g,s.pending=null}if(f!==null){g=f.next,c=c.baseState;var I=A=null,H=null,fe=g;do{var ye=fe.lane;if((ra&ye)===ye)H!==null&&(H=H.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var Me={lane:ye,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};H===null?(I=H=Me,A=c):H=H.next=Me,Zt.lanes|=ye,aa|=ye}fe=fe.next}while(fe!==null&&fe!==g);H===null?A=c:H.next=I,yi(c,r.memoizedState)||(Bn=!0),r.memoizedState=c,r.baseState=A,r.baseQueue=H,s.lastRenderedState=c}if(n=s.interleaved,n!==null){f=n;do g=f.lane,Zt.lanes|=g,aa|=g,f=f.next;while(f!==n)}else f===null&&(s.lanes=0);return[r.memoizedState,s.dispatch]}function Ru(n){var r=di(),s=r.queue;if(s===null)throw Error(t(311));s.lastRenderedReducer=n;var c=s.dispatch,f=s.pending,g=r.memoizedState;if(f!==null){s.pending=null;var A=f=f.next;do g=n(g,A.action),A=A.next;while(A!==f);yi(g,r.memoizedState)||(Bn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),s.lastRenderedState=g}return[g,c]}function wp(){}function Ap(n,r){var s=Zt,c=di(),f=r(),g=!yi(c.memoizedState,f);if(g&&(c.memoizedState=f,Bn=!0),c=c.queue,bu(bp.bind(null,s,c,n),[n]),c.getSnapshot!==r||g||vn!==null&&vn.memoizedState.tag&1){if(s.flags|=2048,$s(9,Rp.bind(null,s,c,f,r),void 0,null),_n===null)throw Error(t(349));(ra&30)!==0||Cp(s,r,f)}return f}function Cp(n,r,s){n.flags|=16384,n={getSnapshot:r,value:s},r=Zt.updateQueue,r===null?(r={lastEffect:null,stores:null},Zt.updateQueue=r,r.stores=[n]):(s=r.stores,s===null?r.stores=[n]:s.push(n))}function Rp(n,r,s,c){r.value=s,r.getSnapshot=c,Pp(r)&&Lp(n)}function bp(n,r,s){return s(function(){Pp(r)&&Lp(n)})}function Pp(n){var r=n.getSnapshot;n=n.value;try{var s=r();return!yi(n,s)}catch{return!0}}function Lp(n){var r=er(n,1);r!==null&&Ai(r,n,1,-1)}function Dp(n){var r=Ii();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ys,lastRenderedState:n},r.queue=n,n=n.dispatch=L_.bind(null,Zt,n),[r.memoizedState,n]}function $s(n,r,s,c){return n={tag:n,create:r,destroy:s,deps:c,next:null},r=Zt.updateQueue,r===null?(r={lastEffect:null,stores:null},Zt.updateQueue=r,r.lastEffect=n.next=n):(s=r.lastEffect,s===null?r.lastEffect=n.next=n:(c=s.next,s.next=n,n.next=c,r.lastEffect=n)),n}function Np(){return di().memoizedState}function cl(n,r,s,c){var f=Ii();Zt.flags|=n,f.memoizedState=$s(1|r,s,void 0,c===void 0?null:c)}function ul(n,r,s,c){var f=di();c=c===void 0?null:c;var g=void 0;if(dn!==null){var A=dn.memoizedState;if(g=A.destroy,c!==null&&Tu(c,A.deps)){f.memoizedState=$s(r,s,g,c);return}}Zt.flags|=n,f.memoizedState=$s(1|r,s,g,c)}function Up(n,r){return cl(8390656,8,n,r)}function bu(n,r){return ul(2048,8,n,r)}function Fp(n,r){return ul(4,2,n,r)}function Op(n,r){return ul(4,4,n,r)}function Ip(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function kp(n,r,s){return s=s!=null?s.concat([n]):null,ul(4,4,Ip.bind(null,r,n),s)}function Pu(){}function zp(n,r){var s=di();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&Tu(r,c[1])?c[0]:(s.memoizedState=[n,r],n)}function Hp(n,r){var s=di();r=r===void 0?null:r;var c=s.memoizedState;return c!==null&&r!==null&&Tu(r,c[1])?c[0]:(n=n(),s.memoizedState=[n,r],n)}function Vp(n,r,s){return(ra&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=s):(yi(s,r)||(s=un(),Zt.lanes|=s,aa|=s,n.baseState=!0),r)}function b_(n,r){var s=vt;vt=s!==0&&4>s?s:4,n(!0);var c=Eu.transition;Eu.transition={};try{n(!1),r()}finally{vt=s,Eu.transition=c}}function Gp(){return di().memoizedState}function P_(n,r,s){var c=Pr(n);if(s={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null},Bp(n))Wp(r,s);else if(s=Sp(n,r,s,c),s!==null){var f=kn();Ai(s,n,c,f),Xp(s,r,c)}}function L_(n,r,s){var c=Pr(n),f={lane:c,action:s,hasEagerState:!1,eagerState:null,next:null};if(Bp(n))Wp(r,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var A=r.lastRenderedState,I=g(A,s);if(f.hasEagerState=!0,f.eagerState=I,yi(I,A)){var H=r.interleaved;H===null?(f.next=f,vu(r)):(f.next=H.next,H.next=f),r.interleaved=f;return}}catch{}finally{}s=Sp(n,r,f,c),s!==null&&(f=kn(),Ai(s,n,c,f),Xp(s,r,c))}}function Bp(n){var r=n.alternate;return n===Zt||r!==null&&r===Zt}function Wp(n,r){Ws=ll=!0;var s=n.pending;s===null?r.next=r:(r.next=s.next,s.next=r),n.pending=r}function Xp(n,r,s){if((s&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,s|=c,r.lanes=s,Rn(n,s)}}var dl={readContext:ui,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},D_={readContext:ui,useCallback:function(n,r){return Ii().memoizedState=[n,r===void 0?null:r],n},useContext:ui,useEffect:Up,useImperativeHandle:function(n,r,s){return s=s!=null?s.concat([n]):null,cl(4194308,4,Ip.bind(null,r,n),s)},useLayoutEffect:function(n,r){return cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return cl(4,2,n,r)},useMemo:function(n,r){var s=Ii();return r=r===void 0?null:r,n=n(),s.memoizedState=[n,r],n},useReducer:function(n,r,s){var c=Ii();return r=s!==void 0?s(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=P_.bind(null,Zt,n),[c.memoizedState,n]},useRef:function(n){var r=Ii();return n={current:n},r.memoizedState=n},useState:Dp,useDebugValue:Pu,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=Dp(!1),r=n[0];return n=b_.bind(null,n[1]),Ii().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,s){var c=Zt,f=Ii();if($t){if(s===void 0)throw Error(t(407));s=s()}else{if(s=r(),_n===null)throw Error(t(349));(ra&30)!==0||Cp(c,r,s)}f.memoizedState=s;var g={value:s,getSnapshot:r};return f.queue=g,Up(bp.bind(null,c,g,n),[n]),c.flags|=2048,$s(9,Rp.bind(null,c,g,s,r),void 0,null),s},useId:function(){var n=Ii(),r=_n.identifierPrefix;if($t){var s=Qi,c=Ji;s=(c&~(1<<32-Fe(c)-1)).toString(32)+s,r=":"+r+"R"+s,s=Xs++,0<s&&(r+="H"+s.toString(32)),r+=":"}else s=R_++,r=":"+r+"r"+s.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},N_={readContext:ui,useCallback:zp,useContext:ui,useEffect:bu,useImperativeHandle:kp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Hp,useReducer:Cu,useRef:Np,useState:function(){return Cu(Ys)},useDebugValue:Pu,useDeferredValue:function(n){var r=di();return Vp(r,dn.memoizedState,n)},useTransition:function(){var n=Cu(Ys)[0],r=di().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Ap,useId:Gp,unstable_isNewReconciler:!1},U_={readContext:ui,useCallback:zp,useContext:ui,useEffect:bu,useImperativeHandle:kp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Hp,useReducer:Ru,useRef:Np,useState:function(){return Ru(Ys)},useDebugValue:Pu,useDeferredValue:function(n){var r=di();return dn===null?r.memoizedState=n:Vp(r,dn.memoizedState,n)},useTransition:function(){var n=Ru(Ys)[0],r=di().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Ap,useId:Gp,unstable_isNewReconciler:!1};function Ei(n,r){if(n&&n.defaultProps){r=O({},r),n=n.defaultProps;for(var s in n)r[s]===void 0&&(r[s]=n[s]);return r}return r}function Lu(n,r,s,c){r=n.memoizedState,s=s(c,r),s=s==null?r:O({},r,s),n.memoizedState=s,n.lanes===0&&(n.updateQueue.baseState=s)}var fl={isMounted:function(n){return(n=n._reactInternals)?On(n)===n:!1},enqueueSetState:function(n,r,s){n=n._reactInternals;var c=kn(),f=Pr(n),g=tr(c,f);g.payload=r,s!=null&&(g.callback=s),r=Ar(n,g,f),r!==null&&(Ai(r,n,f,c),rl(r,n,f))},enqueueReplaceState:function(n,r,s){n=n._reactInternals;var c=kn(),f=Pr(n),g=tr(c,f);g.tag=1,g.payload=r,s!=null&&(g.callback=s),r=Ar(n,g,f),r!==null&&(Ai(r,n,f,c),rl(r,n,f))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var s=kn(),c=Pr(n),f=tr(s,c);f.tag=2,r!=null&&(f.callback=r),r=Ar(n,f,c),r!==null&&(Ai(r,n,c,s),rl(r,n,c))}};function Yp(n,r,s,c,f,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):r.prototype&&r.prototype.isPureReactComponent?!Ns(s,c)||!Ns(f,g):!0}function $p(n,r,s){var c=!1,f=Er,g=r.contextType;return typeof g=="object"&&g!==null?g=ui(g):(f=Gn(r)?Qr:bn.current,c=r.contextTypes,g=(c=c!=null)?Ua(n,f):Er),r=new r(s,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),r}function qp(n,r,s,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(s,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(s,c),r.state!==n&&fl.enqueueReplaceState(r,r.state,null)}function Du(n,r,s,c){var f=n.stateNode;f.props=s,f.state=n.memoizedState,f.refs={},_u(n);var g=r.contextType;typeof g=="object"&&g!==null?f.context=ui(g):(g=Gn(r)?Qr:bn.current,f.context=Ua(n,g)),f.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Lu(n,r,g,s),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&fl.enqueueReplaceState(f,f.state,null),al(n,s,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ga(n,r){try{var s="",c=r;do s+=Ce(c),c=c.return;while(c);var f=s}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:f,digest:null}}function Nu(n,r,s){return{value:n,source:null,stack:s??null,digest:r??null}}function Uu(n,r){try{console.error(r.value)}catch(s){setTimeout(function(){throw s})}}var F_=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,r,s){s=tr(-1,s),s.tag=3,s.payload={element:null};var c=r.value;return s.callback=function(){xl||(xl=!0,Ku=c),Uu(n,r)},s}function jp(n,r,s){s=tr(-1,s),s.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;s.payload=function(){return c(f)},s.callback=function(){Uu(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(s.callback=function(){Uu(n,r),typeof c!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),s}function Zp(n,r,s){var c=n.pingCache;if(c===null){c=n.pingCache=new F_;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(s)||(f.add(s),n=K_.bind(null,n,r,s),r.then(n,n))}function Jp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Qp(n,r,s,c,f){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,s.flags|=131072,s.flags&=-52805,s.tag===1&&(s.alternate===null?s.tag=17:(r=tr(-1,1),r.tag=2,Ar(s,r,1))),s.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var O_=b.ReactCurrentOwner,Bn=!1;function In(n,r,s,c){r.child=n===null?xp(r,null,s,c):ka(r,n.child,s,c)}function em(n,r,s,c,f){s=s.render;var g=r.ref;return Ha(r,f),c=wu(n,r,s,c,g,f),s=Au(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,nr(n,r,f)):($t&&s&&lu(r),r.flags|=1,In(n,r,c,f),r.child)}function tm(n,r,s,c,f){if(n===null){var g=s.type;return typeof g=="function"&&!nd(g)&&g.defaultProps===void 0&&s.compare===null&&s.defaultProps===void 0?(r.tag=15,r.type=g,nm(n,r,g,c,f)):(n=wl(s.type,null,c,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&f)===0){var A=g.memoizedProps;if(s=s.compare,s=s!==null?s:Ns,s(A,c)&&n.ref===r.ref)return nr(n,r,f)}return r.flags|=1,n=Dr(g,c),n.ref=r.ref,n.return=r,r.child=n}function nm(n,r,s,c,f){if(n!==null){var g=n.memoizedProps;if(Ns(g,c)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,nr(n,r,f)}return Fu(n,r,s,c,f)}function im(n,r,s){var c=r.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Gt(Wa,ei),ei|=s;else{if((s&1073741824)===0)return n=g!==null?g.baseLanes|s:s,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Gt(Wa,ei),ei|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:s,Gt(Wa,ei),ei|=c}else g!==null?(c=g.baseLanes|s,r.memoizedState=null):c=s,Gt(Wa,ei),ei|=c;return In(n,r,f,s),r.child}function rm(n,r){var s=r.ref;(n===null&&s!==null||n!==null&&n.ref!==s)&&(r.flags|=512,r.flags|=2097152)}function Fu(n,r,s,c,f){var g=Gn(s)?Qr:bn.current;return g=Ua(r,g),Ha(r,f),s=wu(n,r,s,c,g,f),c=Au(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,nr(n,r,f)):($t&&c&&lu(r),r.flags|=1,In(n,r,s,f),r.child)}function am(n,r,s,c,f){if(Gn(s)){var g=!0;jo(r)}else g=!1;if(Ha(r,f),r.stateNode===null)pl(n,r),$p(r,s,c),Du(r,s,c,f),c=!0;else if(n===null){var A=r.stateNode,I=r.memoizedProps;A.props=I;var H=A.context,fe=s.contextType;typeof fe=="object"&&fe!==null?fe=ui(fe):(fe=Gn(s)?Qr:bn.current,fe=Ua(r,fe));var ye=s.getDerivedStateFromProps,Me=typeof ye=="function"||typeof A.getSnapshotBeforeUpdate=="function";Me||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==c||H!==fe)&&qp(r,A,c,fe),wr=!1;var Se=r.memoizedState;A.state=Se,al(r,c,A,f),H=r.memoizedState,I!==c||Se!==H||Vn.current||wr?(typeof ye=="function"&&(Lu(r,s,ye,c),H=r.memoizedState),(I=wr||Yp(r,s,I,c,Se,H,fe))?(Me||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=H),A.props=c,A.state=H,A.context=fe,c=I):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{A=r.stateNode,yp(n,r),I=r.memoizedProps,fe=r.type===r.elementType?I:Ei(r.type,I),A.props=fe,Me=r.pendingProps,Se=A.context,H=s.contextType,typeof H=="object"&&H!==null?H=ui(H):(H=Gn(s)?Qr:bn.current,H=Ua(r,H));var Be=s.getDerivedStateFromProps;(ye=typeof Be=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(I!==Me||Se!==H)&&qp(r,A,c,H),wr=!1,Se=r.memoizedState,A.state=Se,al(r,c,A,f);var qe=r.memoizedState;I!==Me||Se!==qe||Vn.current||wr?(typeof Be=="function"&&(Lu(r,s,Be,c),qe=r.memoizedState),(fe=wr||Yp(r,s,fe,c,Se,qe,H)||!1)?(ye||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,qe,H),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,qe,H)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=qe),A.props=c,A.state=qe,A.context=H,c=fe):(typeof A.componentDidUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||I===n.memoizedProps&&Se===n.memoizedState||(r.flags|=1024),c=!1)}return Ou(n,r,s,c,g,f)}function Ou(n,r,s,c,f,g){rm(n,r);var A=(r.flags&128)!==0;if(!c&&!A)return f&&up(r,s,!1),nr(n,r,g);c=r.stateNode,O_.current=r;var I=A&&typeof s.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&A?(r.child=ka(r,n.child,null,g),r.child=ka(r,null,I,g)):In(n,r,I,g),r.memoizedState=c.state,f&&up(r,s,!0),r.child}function sm(n){var r=n.stateNode;r.pendingContext?lp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&lp(n,r.context,!1),xu(n,r.containerInfo)}function om(n,r,s,c,f){return Ia(),fu(f),r.flags|=256,In(n,r,s,c),r.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function lm(n,r,s){var c=r.pendingProps,f=jt.current,g=!1,A=(r.flags&128)!==0,I;if((I=A)||(I=n!==null&&n.memoizedState===null?!1:(f&2)!==0),I?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Gt(jt,f&1),n===null)return du(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=r.mode,g=r.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Al(A,c,0,null),n=ca(n,c,s,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=ku(s),r.memoizedState=Iu,n):zu(r,A));if(f=n.memoizedState,f!==null&&(I=f.dehydrated,I!==null))return I_(n,r,A,c,I,f,s);if(g){g=c.fallback,A=r.mode,f=n.child,I=f.sibling;var H={mode:"hidden",children:c.children};return(A&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=H,r.deletions=null):(c=Dr(f,H),c.subtreeFlags=f.subtreeFlags&14680064),I!==null?g=Dr(I,g):(g=ca(g,A,s,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,A=n.child.memoizedState,A=A===null?ku(s):{baseLanes:A.baseLanes|s,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~s,r.memoizedState=Iu,c}return g=n.child,n=g.sibling,c=Dr(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=s),c.return=r,c.sibling=null,n!==null&&(s=r.deletions,s===null?(r.deletions=[n],r.flags|=16):s.push(n)),r.child=c,r.memoizedState=null,c}function zu(n,r){return r=Al({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function hl(n,r,s,c){return c!==null&&fu(c),ka(r,n.child,null,s),n=zu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function I_(n,r,s,c,f,g,A){if(s)return r.flags&256?(r.flags&=-257,c=Nu(Error(t(422))),hl(n,r,A,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,f=r.mode,c=Al({mode:"visible",children:c.children},f,0,null),g=ca(g,f,A,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&ka(r,n.child,null,A),r.child.memoizedState=ku(A),r.memoizedState=Iu,g);if((r.mode&1)===0)return hl(n,r,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var I=c.dgst;return c=I,g=Error(t(419)),c=Nu(g,c,void 0),hl(n,r,A,c)}if(I=(A&n.childLanes)!==0,Bn||I){if(c=_n,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,er(n,f),Ai(c,n,f,-1))}return td(),c=Nu(Error(t(421))),hl(n,r,A,c)}return f.data==="$?"?(r.flags|=128,r.child=n.child,r=j_.bind(null,n),f._reactRetry=r,null):(n=g.treeContext,Qn=yr(f.nextSibling),Jn=r,$t=!0,Mi=null,n!==null&&(li[ci++]=Ji,li[ci++]=Qi,li[ci++]=ea,Ji=n.id,Qi=n.overflow,ea=r),r=zu(r,c.children),r.flags|=4096,r)}function cm(n,r,s){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),gu(n.return,r,s)}function Hu(n,r,s,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:s,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=s,g.tailMode=f)}function um(n,r,s){var c=r.pendingProps,f=c.revealOrder,g=c.tail;if(In(n,r,c.children,s),c=jt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cm(n,s,r);else if(n.tag===19)cm(n,s,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Gt(jt,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(s=r.child,f=null;s!==null;)n=s.alternate,n!==null&&sl(n)===null&&(f=s),s=s.sibling;s=f,s===null?(f=r.child,r.child=null):(f=s.sibling,s.sibling=null),Hu(r,!1,f,s,g);break;case"backwards":for(s=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&sl(n)===null){r.child=f;break}n=f.sibling,f.sibling=s,s=f,f=n}Hu(r,!0,s,null,g);break;case"together":Hu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function pl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function nr(n,r,s){if(n!==null&&(r.dependencies=n.dependencies),aa|=r.lanes,(s&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,s=Dr(n,n.pendingProps),r.child=s,s.return=r;n.sibling!==null;)n=n.sibling,s=s.sibling=Dr(n,n.pendingProps),s.return=r;s.sibling=null}return r.child}function k_(n,r,s){switch(r.tag){case 3:sm(r),Ia();break;case 5:Tp(r);break;case 1:Gn(r.type)&&jo(r);break;case 4:xu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Gt(nl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Gt(jt,jt.current&1),r.flags|=128,null):(s&r.child.childLanes)!==0?lm(n,r,s):(Gt(jt,jt.current&1),n=nr(n,r,s),n!==null?n.sibling:null);Gt(jt,jt.current&1);break;case 19:if(c=(s&r.childLanes)!==0,(n.flags&128)!==0){if(c)return um(n,r,s);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Gt(jt,jt.current),c)break;return null;case 22:case 23:return r.lanes=0,im(n,r,s)}return nr(n,r,s)}var dm,Vu,fm,hm;dm=function(n,r){for(var s=r.child;s!==null;){if(s.tag===5||s.tag===6)n.appendChild(s.stateNode);else if(s.tag!==4&&s.child!==null){s.child.return=s,s=s.child;continue}if(s===r)break;for(;s.sibling===null;){if(s.return===null||s.return===r)return;s=s.return}s.sibling.return=s.return,s=s.sibling}},Vu=function(){},fm=function(n,r,s,c){var f=n.memoizedProps;if(f!==c){n=r.stateNode,ia(Oi.current);var g=null;switch(s){case"input":f=dt(n,f),c=dt(n,c),g=[];break;case"select":f=O({},f,{value:void 0}),c=O({},c,{value:void 0}),g=[];break;case"textarea":f=Xt(n,f),c=Xt(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=$o)}Ze(s,c);var A;s=null;for(fe in f)if(!c.hasOwnProperty(fe)&&f.hasOwnProperty(fe)&&f[fe]!=null)if(fe==="style"){var I=f[fe];for(A in I)I.hasOwnProperty(A)&&(s||(s={}),s[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(o.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in c){var H=c[fe];if(I=f!=null?f[fe]:void 0,c.hasOwnProperty(fe)&&H!==I&&(H!=null||I!=null))if(fe==="style")if(I){for(A in I)!I.hasOwnProperty(A)||H&&H.hasOwnProperty(A)||(s||(s={}),s[A]="");for(A in H)H.hasOwnProperty(A)&&I[A]!==H[A]&&(s||(s={}),s[A]=H[A])}else s||(g||(g=[]),g.push(fe,s)),s=H;else fe==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,I=I?I.__html:void 0,H!=null&&I!==H&&(g=g||[]).push(fe,H)):fe==="children"?typeof H!="string"&&typeof H!="number"||(g=g||[]).push(fe,""+H):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(o.hasOwnProperty(fe)?(H!=null&&fe==="onScroll"&&Bt("scroll",n),g||I===H||(g=[])):(g=g||[]).push(fe,H))}s&&(g=g||[]).push("style",s);var fe=g;(r.updateQueue=fe)&&(r.flags|=4)}},hm=function(n,r,s,c){s!==c&&(r.flags|=4)};function qs(n,r){if(!$t)switch(n.tailMode){case"hidden":r=n.tail;for(var s=null;r!==null;)r.alternate!==null&&(s=r),r=r.sibling;s===null?n.tail=null:s.sibling=null;break;case"collapsed":s=n.tail;for(var c=null;s!==null;)s.alternate!==null&&(c=s),s=s.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ln(n){var r=n.alternate!==null&&n.alternate.child===n.child,s=0,c=0;if(r)for(var f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)s|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=s,r}function z_(n,r,s){var c=r.pendingProps;switch(cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(r),null;case 1:return Gn(r.type)&&Ko(),Ln(r),null;case 3:return c=r.stateNode,Va(),Wt(Vn),Wt(bn),Mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(el(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mi!==null&&(Ju(Mi),Mi=null))),Vu(n,r),Ln(r),null;case 5:Su(r);var f=ia(Bs.current);if(s=r.type,n!==null&&r.stateNode!=null)fm(n,r,s,c,f),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ln(r),null}if(n=ia(Oi.current),el(r)){c=r.stateNode,s=r.type;var g=r.memoizedProps;switch(c[Fi]=r,c[ks]=g,n=(r.mode&1)!==0,s){case"dialog":Bt("cancel",c),Bt("close",c);break;case"iframe":case"object":case"embed":Bt("load",c);break;case"video":case"audio":for(f=0;f<Fs.length;f++)Bt(Fs[f],c);break;case"source":Bt("error",c);break;case"img":case"image":case"link":Bt("error",c),Bt("load",c);break;case"details":Bt("toggle",c);break;case"input":mt(c,g),Bt("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},Bt("invalid",c);break;case"textarea":Y(c,g),Bt("invalid",c)}Ze(s,g),f=null;for(var A in g)if(g.hasOwnProperty(A)){var I=g[A];A==="children"?typeof I=="string"?c.textContent!==I&&(g.suppressHydrationWarning!==!0&&Yo(c.textContent,I,n),f=["children",I]):typeof I=="number"&&c.textContent!==""+I&&(g.suppressHydrationWarning!==!0&&Yo(c.textContent,I,n),f=["children",""+I]):o.hasOwnProperty(A)&&I!=null&&A==="onScroll"&&Bt("scroll",c)}switch(s){case"input":be(c),Ht(c,g,!0);break;case"textarea":be(c),bt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=$o)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(s)),n==="http://www.w3.org/1999/xhtml"?s==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(s,{is:c.is}):(n=A.createElement(s),s==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,s),n[Fi]=r,n[ks]=c,dm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ue(s,c),s){case"dialog":Bt("cancel",n),Bt("close",n),f=c;break;case"iframe":case"object":case"embed":Bt("load",n),f=c;break;case"video":case"audio":for(f=0;f<Fs.length;f++)Bt(Fs[f],n);f=c;break;case"source":Bt("error",n),f=c;break;case"img":case"image":case"link":Bt("error",n),Bt("load",n),f=c;break;case"details":Bt("toggle",n),f=c;break;case"input":mt(n,c),f=dt(n,c),Bt("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=O({},c,{value:void 0}),Bt("invalid",n);break;case"textarea":Y(n,c),f=Xt(n,c),Bt("invalid",n);break;default:f=c}Ze(s,f),I=f;for(g in I)if(I.hasOwnProperty(g)){var H=I[g];g==="style"?ve(n,H):g==="dangerouslySetInnerHTML"?(H=H?H.__html:void 0,H!=null&&ce(n,H)):g==="children"?typeof H=="string"?(s!=="textarea"||H!=="")&&he(n,H):typeof H=="number"&&he(n,""+H):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(o.hasOwnProperty(g)?H!=null&&g==="onScroll"&&Bt("scroll",n):H!=null&&z(n,g,H,A))}switch(s){case"input":be(n),Ht(n,c,!1);break;case"textarea":be(n),bt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+ue(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Ut(n,!!c.multiple,g,!1):c.defaultValue!=null&&Ut(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=$o)}switch(s){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ln(r),null;case 6:if(n&&r.stateNode!=null)hm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(s=ia(Bs.current),ia(Oi.current),el(r)){if(c=r.stateNode,s=r.memoizedProps,c[Fi]=r,(g=c.nodeValue!==s)&&(n=Jn,n!==null))switch(n.tag){case 3:Yo(c.nodeValue,s,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&Yo(c.nodeValue,s,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(s.nodeType===9?s:s.ownerDocument).createTextNode(c),c[Fi]=r,r.stateNode=c}return Ln(r),null;case 13:if(Wt(jt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if($t&&Qn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)gp(),Ia(),r.flags|=98560,g=!1;else if(g=el(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Fi]=r}else Ia(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ln(r),g=!1}else Mi!==null&&(Ju(Mi),Mi=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=s,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(jt.current&1)!==0?fn===0&&(fn=3):td())),r.updateQueue!==null&&(r.flags|=4),Ln(r),null);case 4:return Va(),Vu(n,r),n===null&&Os(r.stateNode.containerInfo),Ln(r),null;case 10:return mu(r.type._context),Ln(r),null;case 17:return Gn(r.type)&&Ko(),Ln(r),null;case 19:if(Wt(jt),g=r.memoizedState,g===null)return Ln(r),null;if(c=(r.flags&128)!==0,A=g.rendering,A===null)if(c)qs(g,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=sl(n),A!==null){for(r.flags|=128,qs(g,!1),c=A.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=s,s=r.child;s!==null;)g=s,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),s=s.sibling;return Gt(jt,jt.current&1|2),r.child}n=n.sibling}g.tail!==null&&Kt()>Xa&&(r.flags|=128,c=!0,qs(g,!1),r.lanes=4194304)}else{if(!c)if(n=sl(A),n!==null){if(r.flags|=128,c=!0,s=n.updateQueue,s!==null&&(r.updateQueue=s,r.flags|=4),qs(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!$t)return Ln(r),null}else 2*Kt()-g.renderingStartTime>Xa&&s!==1073741824&&(r.flags|=128,c=!0,qs(g,!1),r.lanes=4194304);g.isBackwards?(A.sibling=r.child,r.child=A):(s=g.last,s!==null?s.sibling=A:r.child=A,g.last=A)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Kt(),r.sibling=null,s=jt.current,Gt(jt,c?s&1|2:s&1),r):(Ln(r),null);case 22:case 23:return ed(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ei&1073741824)!==0&&(Ln(r),r.subtreeFlags&6&&(r.flags|=8192)):Ln(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function H_(n,r){switch(cu(r),r.tag){case 1:return Gn(r.type)&&Ko(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Va(),Wt(Vn),Wt(bn),Mu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Su(r),null;case 13:if(Wt(jt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ia()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return Wt(jt),null;case 4:return Va(),null;case 10:return mu(r.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var ml=!1,Dn=!1,V_=typeof WeakSet=="function"?WeakSet:Set,Xe=null;function Ba(n,r){var s=n.ref;if(s!==null)if(typeof s=="function")try{s(null)}catch(c){nn(n,r,c)}else s.current=null}function Gu(n,r,s){try{s()}catch(c){nn(n,r,c)}}var pm=!1;function G_(n,r){if(eu=Fo,n=Yh(),Yc(n)){if("selectionStart"in n)var s={start:n.selectionStart,end:n.selectionEnd};else e:{s=(s=n.ownerDocument)&&s.defaultView||window;var c=s.getSelection&&s.getSelection();if(c&&c.rangeCount!==0){s=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{s.nodeType,g.nodeType}catch{s=null;break e}var A=0,I=-1,H=-1,fe=0,ye=0,Me=n,Se=null;t:for(;;){for(var Be;Me!==s||f!==0&&Me.nodeType!==3||(I=A+f),Me!==g||c!==0&&Me.nodeType!==3||(H=A+c),Me.nodeType===3&&(A+=Me.nodeValue.length),(Be=Me.firstChild)!==null;)Se=Me,Me=Be;for(;;){if(Me===n)break t;if(Se===s&&++fe===f&&(I=A),Se===g&&++ye===c&&(H=A),(Be=Me.nextSibling)!==null)break;Me=Se,Se=Me.parentNode}Me=Be}s=I===-1||H===-1?null:{start:I,end:H}}else s=null}s=s||{start:0,end:0}}else s=null;for(tu={focusedElem:n,selectionRange:s},Fo=!1,Xe=r;Xe!==null;)if(r=Xe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,Xe=n;else for(;Xe!==null;){r=Xe;try{var qe=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(qe!==null){var je=qe.memoizedProps,an=qe.memoizedState,re=r.stateNode,$=re.getSnapshotBeforeUpdate(r.elementType===r.type?je:Ei(r.type,je),an);re.__reactInternalSnapshotBeforeUpdate=$}break;case 3:var se=r.stateNode.containerInfo;se.nodeType===1?se.textContent="":se.nodeType===9&&se.documentElement&&se.removeChild(se.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ae){nn(r,r.return,Ae)}if(n=r.sibling,n!==null){n.return=r.return,Xe=n;break}Xe=r.return}return qe=pm,pm=!1,qe}function Ks(n,r,s){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&Gu(r,s,g)}f=f.next}while(f!==c)}}function gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var s=r=r.next;do{if((s.tag&n)===n){var c=s.create;s.destroy=c()}s=s.next}while(s!==r)}}function Bu(n){var r=n.ref;if(r!==null){var s=n.stateNode;switch(n.tag){case 5:n=s;break;default:n=s}typeof r=="function"?r(n):r.current=n}}function mm(n){var r=n.alternate;r!==null&&(n.alternate=null,mm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Fi],delete r[ks],delete r[au],delete r[T_],delete r[w_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gm(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wu(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?s.nodeType===8?s.parentNode.insertBefore(n,r):s.insertBefore(n,r):(s.nodeType===8?(r=s.parentNode,r.insertBefore(n,s)):(r=s,r.appendChild(n)),s=s._reactRootContainer,s!=null||r.onclick!==null||(r.onclick=$o));else if(c!==4&&(n=n.child,n!==null))for(Wu(n,r,s),n=n.sibling;n!==null;)Wu(n,r,s),n=n.sibling}function Xu(n,r,s){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?s.insertBefore(n,r):s.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Xu(n,r,s),n=n.sibling;n!==null;)Xu(n,r,s),n=n.sibling}var En=null,Ti=!1;function Cr(n,r,s){for(s=s.child;s!==null;)_m(n,r,s),s=s.sibling}function _m(n,r,s){if(Q&&typeof Q.onCommitFiberUnmount=="function")try{Q.onCommitFiberUnmount(te,s)}catch{}switch(s.tag){case 5:Dn||Ba(s,r);case 6:var c=En,f=Ti;En=null,Cr(n,r,s),En=c,Ti=f,En!==null&&(Ti?(n=En,s=s.stateNode,n.nodeType===8?n.parentNode.removeChild(s):n.removeChild(s)):En.removeChild(s.stateNode));break;case 18:En!==null&&(Ti?(n=En,s=s.stateNode,n.nodeType===8?ru(n.parentNode,s):n.nodeType===1&&ru(n,s),Cs(n)):ru(En,s.stateNode));break;case 4:c=En,f=Ti,En=s.stateNode.containerInfo,Ti=!0,Cr(n,r,s),En=c,Ti=f;break;case 0:case 11:case 14:case 15:if(!Dn&&(c=s.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Gu(s,r,A),f=f.next}while(f!==c)}Cr(n,r,s);break;case 1:if(!Dn&&(Ba(s,r),c=s.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=s.memoizedProps,c.state=s.memoizedState,c.componentWillUnmount()}catch(I){nn(s,r,I)}Cr(n,r,s);break;case 21:Cr(n,r,s);break;case 22:s.mode&1?(Dn=(c=Dn)||s.memoizedState!==null,Cr(n,r,s),Dn=c):Cr(n,r,s);break;default:Cr(n,r,s)}}function xm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var s=n.stateNode;s===null&&(s=n.stateNode=new V_),r.forEach(function(c){var f=Z_.bind(null,n,c);s.has(c)||(s.add(c),c.then(f,f))})}}function wi(n,r){var s=r.deletions;if(s!==null)for(var c=0;c<s.length;c++){var f=s[c];try{var g=n,A=r,I=A;e:for(;I!==null;){switch(I.tag){case 5:En=I.stateNode,Ti=!1;break e;case 3:En=I.stateNode.containerInfo,Ti=!0;break e;case 4:En=I.stateNode.containerInfo,Ti=!0;break e}I=I.return}if(En===null)throw Error(t(160));_m(g,A,f),En=null,Ti=!1;var H=f.alternate;H!==null&&(H.return=null),f.return=null}catch(fe){nn(f,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Sm(r,n),r=r.sibling}function Sm(n,r){var s=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wi(r,n),ki(n),c&4){try{Ks(3,n,n.return),gl(3,n)}catch(je){nn(n,n.return,je)}try{Ks(5,n,n.return)}catch(je){nn(n,n.return,je)}}break;case 1:wi(r,n),ki(n),c&512&&s!==null&&Ba(s,s.return);break;case 5:if(wi(r,n),ki(n),c&512&&s!==null&&Ba(s,s.return),n.flags&32){var f=n.stateNode;try{he(f,"")}catch(je){nn(n,n.return,je)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,A=s!==null?s.memoizedProps:g,I=n.type,H=n.updateQueue;if(n.updateQueue=null,H!==null)try{I==="input"&&g.type==="radio"&&g.name!=null&&Ot(f,g),Ue(I,A);var fe=Ue(I,g);for(A=0;A<H.length;A+=2){var ye=H[A],Me=H[A+1];ye==="style"?ve(f,Me):ye==="dangerouslySetInnerHTML"?ce(f,Me):ye==="children"?he(f,Me):z(f,ye,Me,fe)}switch(I){case"input":gt(f,g);break;case"textarea":cn(f,g);break;case"select":var Se=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var Be=g.value;Be!=null?Ut(f,!!g.multiple,Be,!1):Se!==!!g.multiple&&(g.defaultValue!=null?Ut(f,!!g.multiple,g.defaultValue,!0):Ut(f,!!g.multiple,g.multiple?[]:"",!1))}f[ks]=g}catch(je){nn(n,n.return,je)}}break;case 6:if(wi(r,n),ki(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(je){nn(n,n.return,je)}}break;case 3:if(wi(r,n),ki(n),c&4&&s!==null&&s.memoizedState.isDehydrated)try{Cs(r.containerInfo)}catch(je){nn(n,n.return,je)}break;case 4:wi(r,n),ki(n);break;case 13:wi(r,n),ki(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(qu=Kt())),c&4&&xm(n);break;case 22:if(ye=s!==null&&s.memoizedState!==null,n.mode&1?(Dn=(fe=Dn)||ye,wi(r,n),Dn=fe):wi(r,n),ki(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!ye&&(n.mode&1)!==0)for(Xe=n,ye=n.child;ye!==null;){for(Me=Xe=ye;Xe!==null;){switch(Se=Xe,Be=Se.child,Se.tag){case 0:case 11:case 14:case 15:Ks(4,Se,Se.return);break;case 1:Ba(Se,Se.return);var qe=Se.stateNode;if(typeof qe.componentWillUnmount=="function"){c=Se,s=Se.return;try{r=c,qe.props=r.memoizedProps,qe.state=r.memoizedState,qe.componentWillUnmount()}catch(je){nn(c,s,je)}}break;case 5:Ba(Se,Se.return);break;case 22:if(Se.memoizedState!==null){Em(Me);continue}}Be!==null?(Be.return=Se,Xe=Be):Em(Me)}ye=ye.sibling}e:for(ye=null,Me=n;;){if(Me.tag===5){if(ye===null){ye=Me;try{f=Me.stateNode,fe?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(I=Me.stateNode,H=Me.memoizedProps.style,A=H!=null&&H.hasOwnProperty("display")?H.display:null,I.style.display=pe("display",A))}catch(je){nn(n,n.return,je)}}}else if(Me.tag===6){if(ye===null)try{Me.stateNode.nodeValue=fe?"":Me.memoizedProps}catch(je){nn(n,n.return,je)}}else if((Me.tag!==22&&Me.tag!==23||Me.memoizedState===null||Me===n)&&Me.child!==null){Me.child.return=Me,Me=Me.child;continue}if(Me===n)break e;for(;Me.sibling===null;){if(Me.return===null||Me.return===n)break e;ye===Me&&(ye=null),Me=Me.return}ye===Me&&(ye=null),Me.sibling.return=Me.return,Me=Me.sibling}}break;case 19:wi(r,n),ki(n),c&4&&xm(n);break;case 21:break;default:wi(r,n),ki(n)}}function ki(n){var r=n.flags;if(r&2){try{e:{for(var s=n.return;s!==null;){if(gm(s)){var c=s;break e}s=s.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(he(f,""),c.flags&=-33);var g=vm(n);Xu(n,g,f);break;case 3:case 4:var A=c.stateNode.containerInfo,I=vm(n);Wu(n,I,A);break;default:throw Error(t(161))}}catch(H){nn(n,n.return,H)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function B_(n,r,s){Xe=n,ym(n)}function ym(n,r,s){for(var c=(n.mode&1)!==0;Xe!==null;){var f=Xe,g=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||ml;if(!A){var I=f.alternate,H=I!==null&&I.memoizedState!==null||Dn;I=ml;var fe=Dn;if(ml=A,(Dn=H)&&!fe)for(Xe=f;Xe!==null;)A=Xe,H=A.child,A.tag===22&&A.memoizedState!==null?Tm(f):H!==null?(H.return=A,Xe=H):Tm(f);for(;g!==null;)Xe=g,ym(g),g=g.sibling;Xe=f,ml=I,Dn=fe}Mm(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,Xe=g):Mm(n)}}function Mm(n){for(;Xe!==null;){var r=Xe;if((r.flags&8772)!==0){var s=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Dn||gl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Dn)if(s===null)c.componentDidMount();else{var f=r.elementType===r.type?s.memoizedProps:Ei(r.type,s.memoizedProps);c.componentDidUpdate(f,s.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Ep(r,g,c);break;case 3:var A=r.updateQueue;if(A!==null){if(s=null,r.child!==null)switch(r.child.tag){case 5:s=r.child.stateNode;break;case 1:s=r.child.stateNode}Ep(r,A,s)}break;case 5:var I=r.stateNode;if(s===null&&r.flags&4){s=I;var H=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":H.autoFocus&&s.focus();break;case"img":H.src&&(s.src=H.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var ye=fe.memoizedState;if(ye!==null){var Me=ye.dehydrated;Me!==null&&Cs(Me)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||r.flags&512&&Bu(r)}catch(Se){nn(r,r.return,Se)}}if(r===n){Xe=null;break}if(s=r.sibling,s!==null){s.return=r.return,Xe=s;break}Xe=r.return}}function Em(n){for(;Xe!==null;){var r=Xe;if(r===n){Xe=null;break}var s=r.sibling;if(s!==null){s.return=r.return,Xe=s;break}Xe=r.return}}function Tm(n){for(;Xe!==null;){var r=Xe;try{switch(r.tag){case 0:case 11:case 15:var s=r.return;try{gl(4,r)}catch(H){nn(r,s,H)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(H){nn(r,f,H)}}var g=r.return;try{Bu(r)}catch(H){nn(r,g,H)}break;case 5:var A=r.return;try{Bu(r)}catch(H){nn(r,A,H)}}}catch(H){nn(r,r.return,H)}if(r===n){Xe=null;break}var I=r.sibling;if(I!==null){I.return=r.return,Xe=I;break}Xe=r.return}}var W_=Math.ceil,vl=b.ReactCurrentDispatcher,Yu=b.ReactCurrentOwner,fi=b.ReactCurrentBatchConfig,Ct=0,_n=null,on=null,Tn=0,ei=0,Wa=Mr(0),fn=0,js=null,aa=0,_l=0,$u=0,Zs=null,Wn=null,qu=0,Xa=1/0,ir=null,xl=!1,Ku=null,Rr=null,Sl=!1,br=null,yl=0,Js=0,ju=null,Ml=-1,El=0;function kn(){return(Ct&6)!==0?Kt():Ml!==-1?Ml:Ml=Kt()}function Pr(n){return(n.mode&1)===0?1:(Ct&2)!==0&&Tn!==0?Tn&-Tn:C_.transition!==null?(El===0&&(El=un()),El):(n=vt,n!==0||(n=window.event,n=n===void 0?16:Ah(n.type)),n)}function Ai(n,r,s,c){if(50<Js)throw Js=0,ju=null,Error(t(185));rn(n,s,c),((Ct&2)===0||n!==_n)&&(n===_n&&((Ct&2)===0&&(_l|=s),fn===4&&Lr(n,Tn)),Xn(n,c),s===1&&Ct===0&&(r.mode&1)===0&&(Xa=Kt()+500,Zo&&Tr()))}function Xn(n,r){var s=n.callbackNode;Vt(n,r);var c=Mt(n,n===_n?Tn:0);if(c===0)s!==null&&Ss(s),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(s!=null&&Ss(s),r===1)n.tag===0?A_(Am.bind(null,n)):dp(Am.bind(null,n)),M_(function(){(Ct&6)===0&&Tr()}),s=null;else{switch(vi(c)){case 1:s=ys;break;case 4:s=Ms;break;case 16:s=C;break;case 536870912:s=de;break;default:s=C}s=Um(s,wm.bind(null,n))}n.callbackPriority=r,n.callbackNode=s}}function wm(n,r){if(Ml=-1,El=0,(Ct&6)!==0)throw Error(t(327));var s=n.callbackNode;if(Ya()&&n.callbackNode!==s)return null;var c=Mt(n,n===_n?Tn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Tl(n,c);else{r=c;var f=Ct;Ct|=2;var g=Rm();(_n!==n||Tn!==r)&&(ir=null,Xa=Kt()+500,oa(n,r));do try{$_();break}catch(I){Cm(n,I)}while(!0);pu(),vl.current=g,Ct=f,on!==null?r=0:(_n=null,Tn=0,r=fn)}if(r!==0){if(r===2&&(f=Nt(n),f!==0&&(c=f,r=Zu(n,f))),r===1)throw s=js,oa(n,0),Lr(n,c),Xn(n,Kt()),s;if(r===6)Lr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!X_(f)&&(r=Tl(n,c),r===2&&(g=Nt(n),g!==0&&(c=g,r=Zu(n,g))),r===1))throw s=js,oa(n,0),Lr(n,c),Xn(n,Kt()),s;switch(n.finishedWork=f,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:la(n,Wn,ir);break;case 3:if(Lr(n,c),(c&130023424)===c&&(r=qu+500-Kt(),10<r)){if(Mt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){kn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=iu(la.bind(null,n,Wn,ir),r);break}la(n,Wn,ir);break;case 4:if(Lr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,f=-1;0<c;){var A=31-Fe(c);g=1<<A,A=r[A],A>f&&(f=A),c&=~g}if(c=f,c=Kt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*W_(c/1960))-c,10<c){n.timeoutHandle=iu(la.bind(null,n,Wn,ir),c);break}la(n,Wn,ir);break;case 5:la(n,Wn,ir);break;default:throw Error(t(329))}}}return Xn(n,Kt()),n.callbackNode===s?wm.bind(null,n):null}function Zu(n,r){var s=Zs;return n.current.memoizedState.isDehydrated&&(oa(n,r).flags|=256),n=Tl(n,r),n!==2&&(r=Wn,Wn=s,r!==null&&Ju(r)),n}function Ju(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function X_(n){for(var r=n;;){if(r.flags&16384){var s=r.updateQueue;if(s!==null&&(s=s.stores,s!==null))for(var c=0;c<s.length;c++){var f=s[c],g=f.getSnapshot;f=f.value;try{if(!yi(g(),f))return!1}catch{return!1}}}if(s=r.child,r.subtreeFlags&16384&&s!==null)s.return=r,r=s;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Lr(n,r){for(r&=~$u,r&=~_l,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var s=31-Fe(r),c=1<<s;n[s]=-1,r&=~c}}function Am(n){if((Ct&6)!==0)throw Error(t(327));Ya();var r=Mt(n,0);if((r&1)===0)return Xn(n,Kt()),null;var s=Tl(n,r);if(n.tag!==0&&s===2){var c=Nt(n);c!==0&&(r=c,s=Zu(n,c))}if(s===1)throw s=js,oa(n,0),Lr(n,r),Xn(n,Kt()),s;if(s===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,la(n,Wn,ir),Xn(n,Kt()),null}function Qu(n,r){var s=Ct;Ct|=1;try{return n(r)}finally{Ct=s,Ct===0&&(Xa=Kt()+500,Zo&&Tr())}}function sa(n){br!==null&&br.tag===0&&(Ct&6)===0&&Ya();var r=Ct;Ct|=1;var s=fi.transition,c=vt;try{if(fi.transition=null,vt=1,n)return n()}finally{vt=c,fi.transition=s,Ct=r,(Ct&6)===0&&Tr()}}function ed(){ei=Wa.current,Wt(Wa)}function oa(n,r){n.finishedWork=null,n.finishedLanes=0;var s=n.timeoutHandle;if(s!==-1&&(n.timeoutHandle=-1,y_(s)),on!==null)for(s=on.return;s!==null;){var c=s;switch(cu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ko();break;case 3:Va(),Wt(Vn),Wt(bn),Mu();break;case 5:Su(c);break;case 4:Va();break;case 13:Wt(jt);break;case 19:Wt(jt);break;case 10:mu(c.type._context);break;case 22:case 23:ed()}s=s.return}if(_n=n,on=n=Dr(n.current,null),Tn=ei=r,fn=0,js=null,$u=_l=aa=0,Wn=Zs=null,na!==null){for(r=0;r<na.length;r++)if(s=na[r],c=s.interleaved,c!==null){s.interleaved=null;var f=c.next,g=s.pending;if(g!==null){var A=g.next;g.next=f,c.next=A}s.pending=c}na=null}return n}function Cm(n,r){do{var s=on;try{if(pu(),ol.current=dl,ll){for(var c=Zt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}ll=!1}if(ra=0,vn=dn=Zt=null,Ws=!1,Xs=0,Yu.current=null,s===null||s.return===null){fn=1,js=r,on=null;break}e:{var g=n,A=s.return,I=s,H=r;if(r=Tn,I.flags|=32768,H!==null&&typeof H=="object"&&typeof H.then=="function"){var fe=H,ye=I,Me=ye.tag;if((ye.mode&1)===0&&(Me===0||Me===11||Me===15)){var Se=ye.alternate;Se?(ye.updateQueue=Se.updateQueue,ye.memoizedState=Se.memoizedState,ye.lanes=Se.lanes):(ye.updateQueue=null,ye.memoizedState=null)}var Be=Jp(A);if(Be!==null){Be.flags&=-257,Qp(Be,A,I,g,r),Be.mode&1&&Zp(g,fe,r),r=Be,H=fe;var qe=r.updateQueue;if(qe===null){var je=new Set;je.add(H),r.updateQueue=je}else qe.add(H);break e}else{if((r&1)===0){Zp(g,fe,r),td();break e}H=Error(t(426))}}else if($t&&I.mode&1){var an=Jp(A);if(an!==null){(an.flags&65536)===0&&(an.flags|=256),Qp(an,A,I,g,r),fu(Ga(H,I));break e}}g=H=Ga(H,I),fn!==4&&(fn=2),Zs===null?Zs=[g]:Zs.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var re=Kp(g,H,r);Mp(g,re);break e;case 1:I=H;var $=g.type,se=g.stateNode;if((g.flags&128)===0&&(typeof $.getDerivedStateFromError=="function"||se!==null&&typeof se.componentDidCatch=="function"&&(Rr===null||!Rr.has(se)))){g.flags|=65536,r&=-r,g.lanes|=r;var Ae=jp(g,I,r);Mp(g,Ae);break e}}g=g.return}while(g!==null)}Pm(s)}catch(tt){r=tt,on===s&&s!==null&&(on=s=s.return);continue}break}while(!0)}function Rm(){var n=vl.current;return vl.current=dl,n===null?dl:n}function td(){(fn===0||fn===3||fn===2)&&(fn=4),_n===null||(aa&268435455)===0&&(_l&268435455)===0||Lr(_n,Tn)}function Tl(n,r){var s=Ct;Ct|=2;var c=Rm();(_n!==n||Tn!==r)&&(ir=null,oa(n,r));do try{Y_();break}catch(f){Cm(n,f)}while(!0);if(pu(),Ct=s,vl.current=c,on!==null)throw Error(t(261));return _n=null,Tn=0,fn}function Y_(){for(;on!==null;)bm(on)}function $_(){for(;on!==null&&!No();)bm(on)}function bm(n){var r=Nm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,r===null?Pm(n):on=r,Yu.current=null}function Pm(n){var r=n;do{var s=r.alternate;if(n=r.return,(r.flags&32768)===0){if(s=z_(s,r,ei),s!==null){on=s;return}}else{if(s=H_(s,r),s!==null){s.flags&=32767,on=s;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,on=null;return}}if(r=r.sibling,r!==null){on=r;return}on=r=n}while(r!==null);fn===0&&(fn=5)}function la(n,r,s){var c=vt,f=fi.transition;try{fi.transition=null,vt=1,q_(n,r,s,c)}finally{fi.transition=f,vt=c}return null}function q_(n,r,s,c){do Ya();while(br!==null);if((Ct&6)!==0)throw Error(t(327));s=n.finishedWork;var f=n.finishedLanes;if(s===null)return null;if(n.finishedWork=null,n.finishedLanes=0,s===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=s.lanes|s.childLanes;if(Et(n,g),n===_n&&(on=_n=null,Tn=0),(s.subtreeFlags&2064)===0&&(s.flags&2064)===0||Sl||(Sl=!0,Um(C,function(){return Ya(),null})),g=(s.flags&15990)!==0,(s.subtreeFlags&15990)!==0||g){g=fi.transition,fi.transition=null;var A=vt;vt=1;var I=Ct;Ct|=4,Yu.current=null,G_(n,s),Sm(s,n),p_(tu),Fo=!!eu,tu=eu=null,n.current=s,B_(s),Nc(),Ct=I,vt=A,fi.transition=g}else n.current=s;if(Sl&&(Sl=!1,br=n,yl=f),g=n.pendingLanes,g===0&&(Rr=null),Ie(s.stateNode),Xn(n,Kt()),r!==null)for(c=n.onRecoverableError,s=0;s<r.length;s++)f=r[s],c(f.value,{componentStack:f.stack,digest:f.digest});if(xl)throw xl=!1,n=Ku,Ku=null,n;return(yl&1)!==0&&n.tag!==0&&Ya(),g=n.pendingLanes,(g&1)!==0?n===ju?Js++:(Js=0,ju=n):Js=0,Tr(),null}function Ya(){if(br!==null){var n=vi(yl),r=fi.transition,s=vt;try{if(fi.transition=null,vt=16>n?16:n,br===null)var c=!1;else{if(n=br,br=null,yl=0,(Ct&6)!==0)throw Error(t(331));var f=Ct;for(Ct|=4,Xe=n.current;Xe!==null;){var g=Xe,A=g.child;if((Xe.flags&16)!==0){var I=g.deletions;if(I!==null){for(var H=0;H<I.length;H++){var fe=I[H];for(Xe=fe;Xe!==null;){var ye=Xe;switch(ye.tag){case 0:case 11:case 15:Ks(8,ye,g)}var Me=ye.child;if(Me!==null)Me.return=ye,Xe=Me;else for(;Xe!==null;){ye=Xe;var Se=ye.sibling,Be=ye.return;if(mm(ye),ye===fe){Xe=null;break}if(Se!==null){Se.return=Be,Xe=Se;break}Xe=Be}}}var qe=g.alternate;if(qe!==null){var je=qe.child;if(je!==null){qe.child=null;do{var an=je.sibling;je.sibling=null,je=an}while(je!==null)}}Xe=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,Xe=A;else e:for(;Xe!==null;){if(g=Xe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ks(9,g,g.return)}var re=g.sibling;if(re!==null){re.return=g.return,Xe=re;break e}Xe=g.return}}var $=n.current;for(Xe=$;Xe!==null;){A=Xe;var se=A.child;if((A.subtreeFlags&2064)!==0&&se!==null)se.return=A,Xe=se;else e:for(A=$;Xe!==null;){if(I=Xe,(I.flags&2048)!==0)try{switch(I.tag){case 0:case 11:case 15:gl(9,I)}}catch(tt){nn(I,I.return,tt)}if(I===A){Xe=null;break e}var Ae=I.sibling;if(Ae!==null){Ae.return=I.return,Xe=Ae;break e}Xe=I.return}}if(Ct=f,Tr(),Q&&typeof Q.onPostCommitFiberRoot=="function")try{Q.onPostCommitFiberRoot(te,n)}catch{}c=!0}return c}finally{vt=s,fi.transition=r}}return!1}function Lm(n,r,s){r=Ga(s,r),r=Kp(n,r,1),n=Ar(n,r,1),r=kn(),n!==null&&(rn(n,1,r),Xn(n,r))}function nn(n,r,s){if(n.tag===3)Lm(n,n,s);else for(;r!==null;){if(r.tag===3){Lm(r,n,s);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Rr===null||!Rr.has(c))){n=Ga(s,n),n=jp(r,n,1),r=Ar(r,n,1),n=kn(),r!==null&&(rn(r,1,n),Xn(r,n));break}}r=r.return}}function K_(n,r,s){var c=n.pingCache;c!==null&&c.delete(r),r=kn(),n.pingedLanes|=n.suspendedLanes&s,_n===n&&(Tn&s)===s&&(fn===4||fn===3&&(Tn&130023424)===Tn&&500>Kt()-qu?oa(n,0):$u|=s),Xn(n,r)}function Dm(n,r){r===0&&((n.mode&1)===0?r=1:(r=pt,pt<<=1,(pt&130023424)===0&&(pt=4194304)));var s=kn();n=er(n,r),n!==null&&(rn(n,r,s),Xn(n,s))}function j_(n){var r=n.memoizedState,s=0;r!==null&&(s=r.retryLane),Dm(n,s)}function Z_(n,r){var s=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(s=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Dm(n,s)}var Nm;Nm=function(n,r,s){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Bn=!0;else{if((n.lanes&s)===0&&(r.flags&128)===0)return Bn=!1,k_(n,r,s);Bn=(n.flags&131072)!==0}else Bn=!1,$t&&(r.flags&1048576)!==0&&fp(r,Qo,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;pl(n,r),n=r.pendingProps;var f=Ua(r,bn.current);Ha(r,s),f=wu(null,r,c,n,f,s);var g=Au();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(c)?(g=!0,jo(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,_u(r),f.updater=fl,r.stateNode=f,f._reactInternals=r,Du(r,c,n,s),r=Ou(null,r,c,!0,g,s)):(r.tag=0,$t&&g&&lu(r),In(null,r,f,s),r=r.child),r;case 16:c=r.elementType;e:{switch(pl(n,r),n=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Q_(c),n=Ei(c,n),f){case 0:r=Fu(null,r,c,n,s);break e;case 1:r=am(null,r,c,n,s);break e;case 11:r=em(null,r,c,n,s);break e;case 14:r=tm(null,r,c,Ei(c.type,n),s);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),Fu(n,r,c,f,s);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),am(n,r,c,f,s);case 3:e:{if(sm(r),n===null)throw Error(t(387));c=r.pendingProps,g=r.memoizedState,f=g.element,yp(n,r),al(r,c,null,s);var A=r.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=Ga(Error(t(423)),r),r=om(n,r,c,s,f);break e}else if(c!==f){f=Ga(Error(t(424)),r),r=om(n,r,c,s,f);break e}else for(Qn=yr(r.stateNode.containerInfo.firstChild),Jn=r,$t=!0,Mi=null,s=xp(r,null,c,s),r.child=s;s;)s.flags=s.flags&-3|4096,s=s.sibling;else{if(Ia(),c===f){r=nr(n,r,s);break e}In(n,r,c,s)}r=r.child}return r;case 5:return Tp(r),n===null&&du(r),c=r.type,f=r.pendingProps,g=n!==null?n.memoizedProps:null,A=f.children,nu(c,f)?A=null:g!==null&&nu(c,g)&&(r.flags|=32),rm(n,r),In(n,r,A,s),r.child;case 6:return n===null&&du(r),null;case 13:return lm(n,r,s);case 4:return xu(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=ka(r,null,c,s):In(n,r,c,s),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),em(n,r,c,f,s);case 7:return In(n,r,r.pendingProps,s),r.child;case 8:return In(n,r,r.pendingProps.children,s),r.child;case 12:return In(n,r,r.pendingProps.children,s),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,g=r.memoizedProps,A=f.value,Gt(nl,c._currentValue),c._currentValue=A,g!==null)if(yi(g.value,A)){if(g.children===f.children&&!Vn.current){r=nr(n,r,s);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var I=g.dependencies;if(I!==null){A=g.child;for(var H=I.firstContext;H!==null;){if(H.context===c){if(g.tag===1){H=tr(-1,s&-s),H.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var ye=fe.pending;ye===null?H.next=H:(H.next=ye.next,ye.next=H),fe.pending=H}}g.lanes|=s,H=g.alternate,H!==null&&(H.lanes|=s),gu(g.return,s,r),I.lanes|=s;break}H=H.next}}else if(g.tag===10)A=g.type===r.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=s,I=A.alternate,I!==null&&(I.lanes|=s),gu(A,s,r),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===r){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}In(n,r,f.children,s),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Ha(r,s),f=ui(f),c=c(f),r.flags|=1,In(n,r,c,s),r.child;case 14:return c=r.type,f=Ei(c,r.pendingProps),f=Ei(c.type,f),tm(n,r,c,f,s);case 15:return nm(n,r,r.type,r.pendingProps,s);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),pl(n,r),r.tag=1,Gn(c)?(n=!0,jo(r)):n=!1,Ha(r,s),$p(r,c,f),Du(r,c,f,s),Ou(null,r,c,!0,n,s);case 19:return um(n,r,s);case 22:return im(n,r,s)}throw Error(t(156,r.tag))};function Um(n,r){return Zr(n,r)}function J_(n,r,s,c){this.tag=n,this.key=s,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function hi(n,r,s,c){return new J_(n,r,s,c)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Q_(n){if(typeof n=="function")return nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===J)return 11;if(n===ie)return 14}return 2}function Dr(n,r){var s=n.alternate;return s===null?(s=hi(n.tag,r,n.key,n.mode),s.elementType=n.elementType,s.type=n.type,s.stateNode=n.stateNode,s.alternate=n,n.alternate=s):(s.pendingProps=r,s.type=n.type,s.flags=0,s.subtreeFlags=0,s.deletions=null),s.flags=n.flags&14680064,s.childLanes=n.childLanes,s.lanes=n.lanes,s.child=n.child,s.memoizedProps=n.memoizedProps,s.memoizedState=n.memoizedState,s.updateQueue=n.updateQueue,r=n.dependencies,s.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},s.sibling=n.sibling,s.index=n.index,s.ref=n.ref,s}function wl(n,r,s,c,f,g){var A=2;if(c=n,typeof n=="function")nd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case k:return ca(s.children,f,g,r);case T:A=8,f|=8;break;case U:return n=hi(12,s,r,f|2),n.elementType=U,n.lanes=g,n;case ne:return n=hi(13,s,r,f),n.elementType=ne,n.lanes=g,n;case G:return n=hi(19,s,r,f),n.elementType=G,n.lanes=g,n;case le:return Al(s,f,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case V:A=10;break e;case X:A=9;break e;case J:A=11;break e;case ie:A=14;break e;case oe:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=hi(A,s,r,f),r.elementType=n,r.type=c,r.lanes=g,r}function ca(n,r,s,c){return n=hi(7,n,c,r),n.lanes=s,n}function Al(n,r,s,c){return n=hi(22,n,c,r),n.elementType=le,n.lanes=s,n.stateNode={isHidden:!1},n}function id(n,r,s){return n=hi(6,n,null,r),n.lanes=s,n}function rd(n,r,s){return r=hi(4,n.children!==null?n.children:[],n.key,r),r.lanes=s,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ex(n,r,s,c,f){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ve(0),this.expirationTimes=Ve(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ve(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ad(n,r,s,c,f,g,A,I,H){return n=new ex(n,r,s,I,H),r===1?(r=1,g===!0&&(r|=8)):r=0,g=hi(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:s,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(g),n}function tx(n,r,s){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:r,implementation:s}}function Fm(n){if(!n)return Er;n=n._reactInternals;e:{if(On(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var s=n.type;if(Gn(s))return cp(n,s,r)}return r}function Om(n,r,s,c,f,g,A,I,H){return n=ad(s,c,!0,n,f,g,A,I,H),n.context=Fm(null),s=n.current,c=kn(),f=Pr(s),g=tr(c,f),g.callback=r??null,Ar(s,g,f),n.current.lanes=f,rn(n,f,c),Xn(n,c),n}function Cl(n,r,s,c){var f=r.current,g=kn(),A=Pr(f);return s=Fm(s),r.context===null?r.context=s:r.pendingContext=s,r=tr(g,A),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Ar(f,r,A),n!==null&&(Ai(n,f,A,g),rl(n,f,A)),A}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var s=n.retryLane;n.retryLane=s!==0&&s<r?s:r}}function sd(n,r){Im(n,r),(n=n.alternate)&&Im(n,r)}function nx(){return null}var km=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}bl.prototype.render=od.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Cl(n,r,null,null)},bl.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;sa(function(){Cl(null,n,null,null)}),r[ji]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var r=_i();n={blockedOn:null,target:n,priority:r};for(var s=0;s<_r.length&&r!==0&&r<_r[s].priority;s++);_r.splice(s,0,n),s===0&&Th(n)}};function ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function ix(n,r,s,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var fe=Rl(A);g.call(fe)}}var A=Om(r,c,n,0,null,!1,!1,"",zm);return n._reactRootContainer=A,n[ji]=A.current,Os(n.nodeType===8?n.parentNode:n),sa(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var I=c;c=function(){var fe=Rl(H);I.call(fe)}}var H=ad(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=H,n[ji]=H.current,Os(n.nodeType===8?n.parentNode:n),sa(function(){Cl(r,H,s,c)}),H}function Ll(n,r,s,c,f){var g=s._reactRootContainer;if(g){var A=g;if(typeof f=="function"){var I=f;f=function(){var H=Rl(A);I.call(H)}}Cl(r,A,n,f)}else A=ix(s,r,n,f,c);return Rl(A)}Ki=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var s=We(r.pendingLanes);s!==0&&(Rn(r,s|1),Xn(r,Kt()),(Ct&6)===0&&(Xa=Kt()+500,Tr()))}break;case 13:sa(function(){var c=er(n,1);if(c!==null){var f=kn();Ai(c,n,1,f)}}),sd(n,1)}},Lt=function(n){if(n.tag===13){var r=er(n,134217728);if(r!==null){var s=kn();Ai(r,n,134217728,s)}sd(n,134217728)}},Yt=function(n){if(n.tag===13){var r=Pr(n),s=er(n,r);if(s!==null){var c=kn();Ai(s,n,r,c)}sd(n,r)}},_i=function(){return vt},It=function(n,r){var s=vt;try{return vt=n,r()}finally{vt=s}},nt=function(n,r,s){switch(r){case"input":if(gt(n,s),r=s.name,s.type==="radio"&&r!=null){for(s=n;s.parentNode;)s=s.parentNode;for(s=s.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<s.length;r++){var c=s[r];if(c!==n&&c.form===n.form){var f=qo(c);if(!f)throw Error(t(90));at(c),gt(c,f)}}}break;case"textarea":cn(n,s);break;case"select":r=s.value,r!=null&&Ut(n,!!s.multiple,r,!1)}},ze=Qu,xe=sa;var rx={usingClientEntryPoint:!1,Events:[zs,Da,qo,ge,De,Qu]},Qs={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:b.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jr(n),n===null?null:n.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{te=Dl.inject(ax),Q=Dl}catch{}}return Yn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rx,Yn.createPortal=function(n,r){var s=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(r))throw Error(t(200));return tx(n,r,null,s)},Yn.createRoot=function(n,r){if(!ld(n))throw Error(t(299));var s=!1,c="",f=km;return r!=null&&(r.unstable_strictMode===!0&&(s=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=ad(n,1,!1,null,null,s,!1,c,f),n[ji]=r.current,Os(n.nodeType===8?n.parentNode:n),new od(r)},Yn.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jr(r),n=n===null?null:n.stateNode,n},Yn.flushSync=function(n){return sa(n)},Yn.hydrate=function(n,r,s){if(!Pl(r))throw Error(t(200));return Ll(null,n,r,!0,s)},Yn.hydrateRoot=function(n,r,s){if(!ld(n))throw Error(t(405));var c=s!=null&&s.hydratedSources||null,f=!1,g="",A=km;if(s!=null&&(s.unstable_strictMode===!0&&(f=!0),s.identifierPrefix!==void 0&&(g=s.identifierPrefix),s.onRecoverableError!==void 0&&(A=s.onRecoverableError)),r=Om(r,null,n,1,s??null,f,!1,g,A),n[ji]=r.current,Os(n),c)for(n=0;n<c.length;n++)s=c[n],f=s._getVersion,f=f(s._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[s,f]:r.mutableSourceEagerHydrationData.push(s,f);return new bl(r)},Yn.render=function(n,r,s){if(!Pl(r))throw Error(t(200));return Ll(null,n,r,!1,s)},Yn.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(t(40));return n._reactRootContainer?(sa(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1},Yn.unstable_batchedUpdates=Qu,Yn.unstable_renderSubtreeIntoContainer=function(n,r,s,c){if(!Pl(s))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,r,s,!1,c)},Yn.version="18.3.1-next-f1338f8080-20240426",Yn}var $m;function gx(){if($m)return dd.exports;$m=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dd.exports=mx(),dd.exports}var qm;function vx(){if(qm)return Nl;qm=1;var i=gx();return Nl.createRoot=i.createRoot,Nl.hydrateRoot=i.hydrateRoot,Nl}var _x=vx();const Ul={END:"end",LEFT:"left",RIGHT:"right",START:"start"},Gr={NONE:"none",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning",DANGER:"danger"};let At="bp6";typeof BLUEPRINT_NAMESPACE<"u"?At=BLUEPRINT_NAMESPACE:typeof REACT_APP_BLUEPRINT_NAMESPACE<"u"&&(At=REACT_APP_BLUEPRINT_NAMESPACE);const Wf=`${At}-active`,xx=`${At}-align-left`,Sx=`${At}-align-right`,yx=`${At}-dark`,Ec=`${At}-disabled`,go=`${At}-fill`,Mx=`${At}-inline`,Ex=`${At}-interactive`,hs=`${At}-large`,Tx=`${At}-loading`,pc=`${At}-minimal`,Km=`${At}-outlined`,wx=`${At}-round`,mc=`${At}-small`,v0=`${At}-vertical`;Ni(Gr.PRIMARY);Ni(Gr.SUCCESS);Ni(Gr.WARNING);Ni(Gr.DANGER);const Ax=`${At}-text-overflow-ellipsis`,Tc=`${At}-button`,Cx=`${Tc}-group`,Rx=`${Tc}-spinner`,bx=`${Tc}-text`,Px=`${At}-html-select`,Xf=`${At}-control`,Lx=`${Xf}-input`,_0=`${Xf}-indicator`,jm=`${_0}-child`,Dx=`${At}-checkbox`,Nx=`${At}-radio`,x0=`${At}-switch`,Zm=`${x0}-inner-text`,xa=`${At}-slider`,Ux=`${xa}-axis`,S0=`${xa}-handle`,y0=`${xa}-label`,Fx=`${xa}-track`,Ox=`${xa}-progress`,Ix=`${At}-start`,kx=`${At}-end`,wc=`${At}-spinner`,zx=`${wc}-animation`,Hx=`${wc}-head`,Vx=`${At}-no-spin`,Gx=`${wc}-track`,M0=`${At}-tag`,Bx=`${M0}-remove`,Yf=`${At}-icon`,Wx=`${Yf}-standard`,Xx=`${Yf}-large`;function $f(i){switch(i){case Ul.LEFT:case Ul.START:return xx;case Ul.RIGHT:case Ul.END:return Sx;default:return}}function Yx(i){if(i!=null)return i.indexOf(`${At}-icon-`)===0?i:`${At}-icon-${i}`}function Ni(i){if(!(i==null||i===Gr.NONE))return`${At}-intent-${i.toLowerCase()}`}function Ac(i,e){if(i==="small")return mc;if(i==="large")return hs;const{large:t=!1,small:a=!1}=e;return{[hs]:t,[mc]:a}}function E0(i,e){if(i==="outlined")return Km;if(i==="minimal")return pc;const{minimal:t=!1,outlined:a=!1}=e;return{[pc]:t,[Km]:a}}var Ge=Bf();function $x(i,e,t=(a,o)=>a===o){return i==null&&e==null?!0:i==null||e==null||i.length!==e.length?!1:i.every((a,o)=>t(a,e[o]))}function qx(){return typeof window<"u"&&window.document!=null}function T0(i){return typeof i=="function"}const Xr="[Blueprint]",Kx=Xr+" clamp: max cannot be less than min",jx=Xr+" <Slider> stepSize must be greater than zero.",Zx=Xr+" <Slider> labelStepSize must be greater than zero.",Jx=Xr+" <Slider> min prop must be a finite number.",Qx=Xr+" <Slider> max prop must be a finite number.",eS=Xr+" <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s",tS=Xr+" <MultiSlider> labelStepSize and labelValues prop are mutually exclusive, with labelStepSize taking priority.",nS=Xr+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";function jd(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}function iS(i,e,t=1e-5){return Math.abs(i-e)<=t}function qf(i,e,t){if(i==null)return i;if(t<e)throw new Error(Kx);return Math.min(Math.max(i,e),t)}function w0(i){if(!isFinite(i))return 0;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}const yn="Blueprint6",Jm=["active","alignText","asyncControl","containerRef","current","elementRef","ellipsizeText","endIcon","fill","icon","iconSize","inputClassName","inputRef","intent","inline","large","loading","leftElement","leftIcon","minimal","onRemove","outlined","panel","panelClassName","popoverProps","rightElement","rightIcon","round","selectedValue","size","small","tagName","text","textClassName","variant"];function us(i,e=Jm,t=!1){return t&&(e=e.concat(Jm)),e.reduce((a,o)=>(o.indexOf("-")!==-1||a.hasOwnProperty(o)&&delete a[o],a),{...i})}function gc(i,e=!1){return i==null||i===""||i===!1||!e&&Array.isArray(i)&&(i.length===0||i.every(t=>gc(t,!0)))}function A0(i,e){return i!=null&&i.type!=null&&i.type.displayName!=null&&i.type.displayName===e.displayName}const rS=`${yn}.Icon.`;function aS(i){if(!Ge.isValidElement(i))return!1;const{type:e}=i;if(typeof e=="string")return!1;const{displayName:t}=e;return typeof t=="string"&&t.startsWith(rS)}function Qm(i){return i.key==="Enter"||i.key===" "}const sS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];function oS(i){return sS.includes(i.key)}function lS(i,e,t){if(e.includes(i.key))return-1;if(t.includes(i.key))return 1}function cS(i){return i!=null&&typeof i!="function"}function uS(i){return typeof i=="function"}function dS(i,e){cS(i)?i.current=e:uS(i)&&i(e)}function Kf(...i){return e=>{i.forEach(t=>{dS(t,e)})}}class jf extends Ge.PureComponent{constructor(t){super(t);ft(this,"componentWillUpdate");ft(this,"componentWillReceiveProps");ft(this,"componentWillMount");ft(this,"getDerivedStateFromProps");ft(this,"displayName");ft(this,"timeoutIds",[]);ft(this,"requestIds",[]);ft(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});ft(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});jd("production")||this.validateProps(this.props)}componentDidUpdate(t,a,o){jd("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const a=window.requestAnimationFrame(t);return this.requestIds.push(a),()=>window.cancelAnimationFrame(a)}setTimeout(t,a){const o=window.setTimeout(t,a);return this.timeoutIds.push(o),()=>window.clearTimeout(o)}validateProps(t){}}var pd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var eg;function fS(){return eg||(eg=1,(function(i){(function(){var e={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=o(l,a(d)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)e.call(l,d)&&l[d]&&(u=o(u,d));return u}function o(l,u){return u?l?l+" "+u:l+u:l}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(pd)),pd.exports}var hS=fS();const An=cx(hS);function pS(i,e=[]){Ge.useEffect(()=>{jd("production")||i()},e)}const mS={defaultTabIndex:void 0,disabledTabIndex:-1};function C0(i,e,t,a=mS){const{defaultTabIndex:o,disabledTabIndex:l}=a,{active:u,onClick:d,onFocus:m,onKeyDown:p,onKeyUp:v,onBlur:x,tabIndex:_=o}=e,[M,w]=Ge.useState(),[R,y]=Ge.useState(!1),S=Ge.useRef(null),D=Ge.useCallback(P=>{R&&y(!1),x==null||x(P)},[R,x]),z=Ge.useCallback(P=>{Qm(P)&&(P.preventDefault(),P.key!==M&&y(!0)),w(P.key),p==null||p(P)},[M,p]),b=Ge.useCallback(P=>{var k;Qm(P)&&(y(!1),(k=S.current)==null||k.click()),w(void 0),v==null||v(P)},[v,S]);return[i&&(u||R),{onBlur:D,onClick:i?d:void 0,onFocus:i?m:void 0,onKeyDown:z,onKeyUp:b,ref:Kf(S,t),tabIndex:i?_:l}]}var vo=function(){return vo=Object.assign||function(e){for(var t,a=1,o=arguments.length;a<o;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},vo.apply(this,arguments)};function gS(i){return i.toLowerCase()}var vS=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],_S=/[^A-Z0-9]+/gi;function R0(i,e){e===void 0&&(e={});for(var t=e.splitRegexp,a=t===void 0?vS:t,o=e.stripRegexp,l=o===void 0?_S:o,u=e.transform,d=u===void 0?gS:u,m=e.delimiter,p=m===void 0?" ":m,v=tg(tg(i,a,"$1\0$2"),l,"\0"),x=0,_=v.length;v.charAt(x)==="\0";)x++;for(;v.charAt(_-1)==="\0";)_--;return v.slice(x,_).split("\0").map(d).join(p)}function tg(i,e,t){return e instanceof RegExp?i.replace(e,t):e.reduce(function(a,o){return a.replace(o,t)},i)}function xS(i,e){var t=i.charAt(0),a=i.substr(1).toLowerCase();return e>0&&t>="0"&&t<="9"?"_"+t+a:""+t.toUpperCase()+a}function SS(i,e){return e===void 0&&(e={}),R0(i,vo({delimiter:"",transform:xS},e))}function yS(i,e){return e===void 0&&(e={}),R0(i,vo({delimiter:"."},e))}function MS(i,e){return e===void 0&&(e={}),yS(i,vo({delimiter:"_"},e))}var qt;(function(i){i[i.STANDARD=16]="STANDARD",i[i.LARGE=20]="LARGE"})(qt||(qt={}));const ES="modulepreload",TS=function(i,e){return new URL(i,e).href},ng={},ig=function(e,t,a){let o=Promise.resolve();if(t&&t.length>0){let u=function(v){return Promise.all(v.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));o=u(t.map(v=>{if(v=TS(v,a),v in ng)return;ng[v]=!0;const x=v.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!a)for(let R=d.length-1;R>=0;R--){const y=d[R];if(y.href===v&&(!x||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${_}`))return;const w=document.createElement("link");if(w.rel=x?"stylesheet":ES,x||(w.as="script"),w.crossOrigin="",w.href=v,p&&w.setAttribute("nonce",p),document.head.appendChild(w),x)return new Promise((R,y)=>{w.addEventListener("load",R),w.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return o.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var h;(function(i){i.AddApplication="add-application",i.AddChild="add-child",i.AddClip="add-clip",i.AddColumnLeft="add-column-left",i.AddColumnRight="add-column-right",i.AddDerivedColumn="add-derived-column",i.AddLocation="add-location",i.AddParent="add-parent",i.AddRowBottom="add-row-bottom",i.AddRowTop="add-row-top",i.AddTile="add-tile",i.AddToArtifact="add-to-artifact",i.AddToFolder="add-to-folder",i.Add="add",i.AimpointsTarget="aimpoints-target",i.Airplane="airplane",i.AlignCenter="align-center",i.AlignJustify="align-justify",i.AlignLeft="align-left",i.AlignRight="align-right",i.AlignmentBottom="alignment-bottom",i.AlignmentHorizontalCenter="alignment-horizontal-center",i.AlignmentLeft="alignment-left",i.AlignmentRight="alignment-right",i.AlignmentTop="alignment-top",i.AlignmentVerticalCenter="alignment-vertical-center",i.Ammunition="ammunition",i.Anchor="anchor",i.Annotation="annotation",i.Announcement="announcement",i.Antenna="antenna",i.AppHeader="app-header",i.Application="application",i.Applications="applications",i.Archive="archive",i.AreaOfInterest="area-of-interest",i.ArrayBoolean="array-boolean",i.ArrayDate="array-date",i.ArrayFloatingPoint="array-floating-point",i.ArrayNumeric="array-numeric",i.ArrayObject="array-object",i.ArrayString="array-string",i.ArrayTimestamp="array-timestamp",i.Array="array",i.ArrowBottomLeft="arrow-bottom-left",i.ArrowBottomRight="arrow-bottom-right",i.ArrowDown="arrow-down",i.ArrowLeft="arrow-left",i.ArrowRight="arrow-right",i.ArrowTopLeft="arrow-top-left",i.ArrowTopRight="arrow-top-right",i.ArrowUp="arrow-up",i.ArrowsArc="arrows-arc",i.ArrowsHorizontal="arrows-horizontal",i.ArrowsVertical="arrows-vertical",i.Asterisk="asterisk",i.At="at",i.AutomaticUpdates="automatic-updates",i.Axle="axle",i.Backlink="backlink",i.BackwardTen="backward-ten",i.Badge="badge",i.BanCircle="ban-circle",i.BankAccount="bank-account",i.Barcode="barcode",i.BinaryNumber="binary-number",i.Blank="blank",i.BlockPromote="block-promote",i.BlockedPerson="blocked-person",i.Bold="bold",i.Book="book",i.Bookmark="bookmark",i.Box="box",i.BranchLocked="branch-locked",i.BranchUnlocked="branch-unlocked",i.Briefcase="briefcase",i.BringData="bring-data",i.BringForward="bring-forward",i.BritishPound="british-pound",i.Bug="bug",i.Buggy="buggy",i.Build="build",i.Bullseye="bullseye",i.Calculator="calculator",i.Calendar="calendar",i.Camera="camera",i.CaretDown="caret-down",i.CaretLeft="caret-left",i.CaretRight="caret-right",i.CaretUp="caret-up",i.CargoShip="cargo-ship",i.CellTower="cell-tower",i.Changes="changes",i.Chart="chart",i.Chat="chat",i.ChevronBackward="chevron-backward",i.ChevronDown="chevron-down",i.ChevronForward="chevron-forward",i.ChevronLeft="chevron-left",i.ChevronRight="chevron-right",i.ChevronUp="chevron-up",i.CircleArrowDown="circle-arrow-down",i.CircleArrowLeft="circle-arrow-left",i.CircleArrowRight="circle-arrow-right",i.CircleArrowUp="circle-arrow-up",i.CircleDashed="circle-dashed",i.Circle="circle",i.Citation="citation",i.Clean="clean",i.Clip="clip",i.ClipboardFile="clipboard-file",i.Clipboard="clipboard",i.CloudDownload="cloud-download",i.CloudServer="cloud-server",i.CloudTick="cloud-tick",i.CloudUpload="cloud-upload",i.Cloud="cloud",i.CodeBlock="code-block",i.Code="code",i.Cog="cog",i.CollapseAll="collapse-all",i.ColorFill="color-fill",i.ColumnLayout="column-layout",i.Comment="comment",i.Comparison="comparison",i.Compass="compass",i.Compressed="compressed",i.Confirm="confirm",i.ConsoleAlert="console-alert",i.Console="console",i.Construction="construction",i.Contrast="contrast",i.Control="control",i.CreditCard="credit-card",i.Crop="crop",i.CrossCircle="cross-circle",i.Cross="cross",i.Crown="crown",i.CrystalBall="crystal-ball",i.CssStyle="css-style",i.CubeAdd="cube-add",i.CubeCutout="cube-cutout",i.CubeCutouts="cube-cutouts",i.CubeEdit="cube-edit",i.CubeRemove="cube-remove",i.Cube="cube",i.Cubes="cubes",i.CurlyBraces="curly-braces",i.CurvedRangeChart="curved-range-chart",i.Cut="cut",i.Cycle="cycle",i.Dashboard="dashboard",i.DataCloud="data-cloud",i.DataConnection="data-connection",i.DataLineage="data-lineage",i.DataSearch="data-search",i.DataSync="data-sync",i.Database="database",i.DeleteClip="delete-clip",i.Delete="delete",i.Delta="delta",i.DeriveColumn="derive-column",i.Descendant="descendant",i.Desktop="desktop",i.Detection="detection",i.Diagnosis="diagnosis",i.DiagramTree="diagram-tree",i.DirectionLeft="direction-left",i.DirectionRight="direction-right",i.Disable="disable",i.Divide="divide",i.DocumentCode="document-code",i.DocumentLocked="document-locked",i.DocumentOpen="document-open",i.DocumentShare="document-share",i.Document="document",i.Dollar="dollar",i.Dot="dot",i.DoubleCaretHorizontal="double-caret-horizontal",i.DoubleCaretVertical="double-caret-vertical",i.DoubleChevronDown="double-chevron-down",i.DoubleChevronLeft="double-chevron-left",i.DoubleChevronRight="double-chevron-right",i.DoubleChevronUp="double-chevron-up",i.DoughnutChart="doughnut-chart",i.Download="download",i.DragHandleHorizontal="drag-handle-horizontal",i.DragHandleVertical="drag-handle-vertical",i.Draw="draw",i.DrawerLeftFilled="drawer-left-filled",i.DrawerLeft="drawer-left",i.DrawerRightFilled="drawer-right-filled",i.DrawerRight="drawer-right",i.DriveTime="drive-time",i.DroneUav="drone-uav",i.Drone="drone",i.Duplicate="duplicate",i.Edit="edit",i.Eject="eject",i.Emoji="emoji",i.Endnote="endnote",i.Endorsed="endorsed",i.Engagement="engagement",i.Envelope="envelope",i.Equals="equals",i.Eraser="eraser",i.Error="error",i.Euro="euro",i.Excavator="excavator",i.Exchange="exchange",i.ExcludeRow="exclude-row",i.ExpandAll="expand-all",i.Explain="explain",i.Export="export",i.EyeOff="eye-off",i.EyeOn="eye-on",i.EyeOpen="eye-open",i.FastBackward="fast-backward",i.FastForward="fast-forward",i.FeedSubscribed="feed-subscribed",i.Feed="feed",i.FighterJet="fighter-jet",i.Film="film",i.FilterKeep="filter-keep",i.FilterList="filter-list",i.FilterOpen="filter-open",i.FilterRemove="filter-remove",i.FilterSortAsc="filter-sort-asc",i.FilterSortDesc="filter-sort-desc",i.Filter="filter",i.Flag="flag",i.Flame="flame",i.Flash="flash",i.FloatingPoint="floating-point",i.FloppyDisk="floppy-disk",i.FlowBranch="flow-branch",i.FlowEnd="flow-end",i.FlowLinear="flow-linear",i.FlowReviewBranch="flow-review-branch",i.FlowReview="flow-review",i.Flows="flows",i.FolderClose="folder-close",i.FolderNew="folder-new",i.FolderOpen="folder-open",i.FolderSharedOpen="folder-shared-open",i.FolderShared="folder-shared",i.Follower="follower",i.Following="following",i.Font="font",i.ForkEnd="fork-end",i.Fork="fork",i.Form="form",i.ForwardTen="forward-ten",i.FrameToFrame="frame-to-frame",i.Fuel="fuel",i.FullCircle="full-circle",i.FullStackedChart="full-stacked-chart",i.Fullscreen="fullscreen",i.FunctionMinimal="function-minimal",i.Function="function",i.GanttChart="gantt-chart",i.Generate="generate",i.Geofence="geofence",i.Geolocation="geolocation",i.Geosearch="geosearch",i.Geotime="geotime",i.GiftBox="gift-box",i.GitBranch="git-branch",i.GitCommit="git-commit",i.GitMerge="git-merge",i.GitNewBranch="git-new-branch",i.GitPull="git-pull",i.GitPush="git-push",i.GitRebase="git-rebase",i.GitRepo="git-repo",i.Glass="glass",i.GlobeNetworkAdd="globe-network-add",i.GlobeNetwork="globe-network",i.Globe="globe",i.GraphRemove="graph-remove",i.Graph="graph",i.GreaterThanOrEqualTo="greater-than-or-equal-to",i.GreaterThan="greater-than",i.GridView="grid-view",i.Grid="grid",i.GroupItem="group-item",i.GroupObjects="group-objects",i.GroupedBarChart="grouped-bar-chart",i.HandDown="hand-down",i.HandLeft="hand-left",i.HandRight="hand-right",i.HandUp="hand-up",i.Hand="hand",i.Hat="hat",i.HeaderOne="header-one",i.HeaderThree="header-three",i.HeaderTwo="header-two",i.Header="header",i.Headset="headset",i.HeartBroken="heart-broken",i.Heart="heart",i.HeatGrid="heat-grid",i.Heatmap="heatmap",i.Helicopter="helicopter",i.Help="help",i.HelperManagement="helper-management",i.Hexagon="hexagon",i.HighPriority="high-priority",i.HighVoltagePole="high-voltage-pole",i.Highlight="highlight",i.History="history",i.Home="home",i.HorizontalBarChartAsc="horizontal-bar-chart-asc",i.HorizontalBarChartDesc="horizontal-bar-chart-desc",i.HorizontalBarChart="horizontal-bar-chart",i.HorizontalDistribution="horizontal-distribution",i.HorizontalInbetween="horizontal-inbetween",i.Hurricane="hurricane",i.IdNumber="id-number",i.ImageRotateLeft="image-rotate-left",i.ImageRotateRight="image-rotate-right",i.Import="import",i.InboxFiltered="inbox-filtered",i.InboxGeo="inbox-geo",i.InboxSearch="inbox-search",i.InboxUpdate="inbox-update",i.Inbox="inbox",i.InfoSign="info-sign",i.Inheritance="inheritance",i.InheritedGroup="inherited-group",i.InnerJoin="inner-join",i.Input="input",i.Insert="insert",i.Intelligence="intelligence",i.Intersection="intersection",i.IpAddress="ip-address",i.IssueClosed="issue-closed",i.IssueNew="issue-new",i.Issue="issue",i.Italic="italic",i.JoinTable="join-table",i.KeyBackspace="key-backspace",i.KeyCommand="key-command",i.KeyControl="key-control",i.KeyDelete="key-delete",i.KeyEnter="key-enter",i.KeyEscape="key-escape",i.KeyOption="key-option",i.KeyShift="key-shift",i.KeyTab="key-tab",i.Key="key",i.KnownVehicle="known-vehicle",i.LabTest="lab-test",i.Label="label",i.LayerOutline="layer-outline",i.Layer="layer",i.Layers="layers",i.LayoutAuto="layout-auto",i.LayoutBalloon="layout-balloon",i.LayoutBottomRowThreeTiles="layout-bottom-row-three-tiles",i.LayoutBottomRowTwoTiles="layout-bottom-row-two-tiles",i.LayoutCircle="layout-circle",i.LayoutGrid="layout-grid",i.LayoutGroupBy="layout-group-by",i.LayoutHierarchy="layout-hierarchy",i.LayoutLeftColumnThreeTiles="layout-left-column-three-tiles",i.LayoutLeftColumnTwoTiles="layout-left-column-two-tiles",i.LayoutLinear="layout-linear",i.LayoutRightColumnThreeTiles="layout-right-column-three-tiles",i.LayoutRightColumnTwoTiles="layout-right-column-two-tiles",i.LayoutSkewGrid="layout-skew-grid",i.LayoutSortedClusters="layout-sorted-clusters",i.LayoutThreeColumns="layout-three-columns",i.LayoutThreeRows="layout-three-rows",i.LayoutTopRowThreeTiles="layout-top-row-three-tiles",i.LayoutTopRowTwoTiles="layout-top-row-two-tiles",i.LayoutTwoColumns="layout-two-columns",i.LayoutTwoRows="layout-two-rows",i.Layout="layout",i.Learning="learning",i.LeftJoin="left-join",i.LengthenText="lengthen-text",i.LessThanOrEqualTo="less-than-or-equal-to",i.LessThan="less-than",i.Lifesaver="lifesaver",i.Lightbulb="lightbulb",i.Lightning="lightning",i.Link="link",i.LinkedSquares="linked-squares",i.ListColumns="list-columns",i.ListDetailView="list-detail-view",i.List="list",i.Locate="locate",i.Lock="lock",i.Locomotive="locomotive",i.LogIn="log-in",i.LogOut="log-out",i.LowVoltagePole="low-voltage-pole",i.Manual="manual",i.ManuallyEnteredData="manually-entered-data",i.ManyToMany="many-to-many",i.ManyToOne="many-to-one",i.MapCreate="map-create",i.MapMarker="map-marker",i.Map="map",i.Markdown="markdown",i.Maximize="maximize",i.Media="media",i.MenuClosed="menu-closed",i.MenuOpen="menu-open",i.Menu="menu",i.MergeColumns="merge-columns",i.MergeLinks="merge-links",i.Microphone="microphone",i.Minimize="minimize",i.Minus="minus",i.MobilePhone="mobile-phone",i.MobileVideo="mobile-video",i.ModalFilled="modal-filled",i.Modal="modal",i.Model="model",i.Moon="moon",i.More="more",i.Mountain="mountain",i.Move="move",i.Mugshot="mugshot",i.MultiSelect="multi-select",i.Music="music",i.Nest="nest",i.NewComment="new-comment",i.NewDrawing="new-drawing",i.NewGridItem="new-grid-item",i.NewLayer="new-layer",i.NewLayers="new-layers",i.NewLink="new-link",i.NewObject="new-object",i.NewPerson="new-person",i.NewPrescription="new-prescription",i.NewShield="new-shield",i.NewTextBox="new-text-box",i.Ninja="ninja",i.NotEqualTo="not-equal-to",i.NotificationsAdd="notifications-add",i.NotificationsSnooze="notifications-snooze",i.NotificationsUpdated="notifications-updated",i.Notifications="notifications",i.NumberedList="numbered-list",i.Numerical="numerical",i.ObjectView="object-view",i.Office="office",i.Offline="offline",i.OilField="oil-field",i.OneColumn="one-column",i.OneToMany="one-to-many",i.OneToOne="one-to-one",i.OpenApplication="open-application",i.Outdated="outdated",i.OuterJoin="outer-join",i.Output="output",i.Package="package",i.PageBreak="page-break",i.PageLayout="page-layout",i.PanelStats="panel-stats",i.PanelTable="panel-table",i.Panel="panel",i.Paperclip="paperclip",i.Paragraph="paragraph",i.PasteVariable="paste-variable",i.PathSearch="path-search",i.Path="path",i.Pause="pause",i.People="people",i.Percentage="percentage",i.Person="person",i.PhoneCall="phone-call",i.PhoneForward="phone-forward",i.PhoneSearch="phone-search",i.Phone="phone",i.PieChart="pie-chart",i.Pill="pill",i.Pin="pin",i.Pistol="pistol",i.PivotTable="pivot-table",i.Pivot="pivot",i.Play="play",i.Playbook="playbook",i.Plus="plus",i.PolygonFilter="polygon-filter",i.Popout="popout",i.Power="power",i.PredictiveAnalysis="predictive-analysis",i.Prescription="prescription",i.Presentation="presentation",i.Print="print",i.Projects="projects",i.Properties="properties",i.Property="property",i.PublishFunction="publish-function",i.Pulse="pulse",i.Rain="rain",i.Random="random",i.RangeRing="range-ring",i.Record="record",i.RectHeight="rect-height",i.RectWidth="rect-width",i.Rectangle="rectangle",i.Redo="redo",i.RefreshOff="refresh-off",i.Refresh="refresh",i.Regex="regex",i.RegressionChart="regression-chart",i.RemoveColumnLeft="remove-column-left",i.RemoveColumnRight="remove-column-right",i.RemoveColumn="remove-column",i.RemoveRowBottom="remove-row-bottom",i.RemoveRowTop="remove-row-top",i.Remove="remove",i.Repeat="repeat",i.Reset="reset",i.Resolve="resolve",i.Rig="rig",i.RightJoin="right-join",i.Ring="ring",i.RocketSlant="rocket-slant",i.Rocket="rocket",i.RootFolder="root-folder",i.RotateCcw="rotate-ccw",i.RotateCw="rotate-cw",i.RotateDocument="rotate-document",i.RotatePage="rotate-page",i.Route="route",i.RunHistory="run-history",i.Satellite="satellite",i.Saved="saved",i.ScatterPlot="scatter-plot",i.SearchAround="search-around",i.SearchTemplate="search-template",i.SearchText="search-text",i.Search="search",i.SegmentedControl="segmented-control",i.Select="select",i.SelectionBoxAdd="selection-box-add",i.SelectionBoxEdit="selection-box-edit",i.SelectionBoxRemove="selection-box-remove",i.SelectionBox="selection-box",i.Selection="selection",i.SendBackward="send-backward",i.SendMessage="send-message",i.SendToGraph="send-to-graph",i.SendToMap="send-to-map",i.SendTo="send-to",i.Sensor="sensor",i.SeriesAdd="series-add",i.SeriesConfiguration="series-configuration",i.SeriesDerived="series-derived",i.SeriesFiltered="series-filtered",i.SeriesSearch="series-search",i.ServerInstall="server-install",i.Server="server",i.Settings="settings",i.Shapes="shapes",i.Share="share",i.SharedFilter="shared-filter",i.Shield="shield",i.Ship="ship",i.Shop="shop",i.ShoppingCart="shopping-cart",i.ShortenText="shorten-text",i.SignalSearch="signal-search",i.SimCard="sim-card",i.Slash="slash",i.SmallCross="small-cross",i.SmallInfoSign="small-info-sign",i.SmallMinus="small-minus",i.SmallPlus="small-plus",i.SmallSquare="small-square",i.SmallTick="small-tick",i.Snowflake="snowflake",i.SoccerBall="soccer-ball",i.SocialMedia="social-media",i.SortAlphabeticalDesc="sort-alphabetical-desc",i.SortAlphabetical="sort-alphabetical",i.SortAsc="sort-asc",i.SortDesc="sort-desc",i.SortNumericalDesc="sort-numerical-desc",i.SortNumerical="sort-numerical",i.Sort="sort",i.SpellCheck="spell-check",i.Spin="spin",i.SplitColumns="split-columns",i.SportsStadium="sports-stadium",i.Square="square",i.StackedChart="stacked-chart",i.StadiumGeometry="stadium-geometry",i.StarEmpty="star-empty",i.Star="star",i.StepBackward="step-backward",i.StepChart="step-chart",i.StepForward="step-forward",i.Stop="stop",i.Stopwatch="stopwatch",i.Strikethrough="strikethrough",i.Style="style",i.Subscript="subscript",i.SubtractRightJoin="subtract-right-join",i.Superscript="superscript",i.SwapHorizontal="swap-horizontal",i.SwapVertical="swap-vertical",i.Sweep="sweep",i.Switch="switch",i.SymbolCircle="symbol-circle",i.SymbolCross="symbol-cross",i.SymbolDiamond="symbol-diamond",i.SymbolRectangle="symbol-rectangle",i.SymbolSquare="symbol-square",i.SymbolTriangleDown="symbol-triangle-down",i.SymbolTriangleUp="symbol-triangle-up",i.Syringe="syringe",i.TableSync="table-sync",i.TagAdd="tag-add",i.TagPromote="tag-promote",i.TagRefresh="tag-refresh",i.TagUndo="tag-undo",i.Tag="tag",i.Tags="tags",i.TakeAction="take-action",i.Tank="tank",i.Target="target",i.Taxi="taxi",i.Team="team",i.Temperature="temperature",i.TextHighlight="text-highlight",i.ThAdd="th-add",i.ThDerived="th-derived",i.ThDisconnect="th-disconnect",i.ThFiltered="th-filtered",i.ThListAdd="th-list-add",i.ThList="th-list",i.ThVirtualAdd="th-virtual-add",i.ThVirtual="th-virtual",i.Th="th",i.ThirdParty="third-party",i.ThumbsDown="thumbs-down",i.ThumbsUp="thumbs-up",i.TickCircle="tick-circle",i.Tick="tick",i.Time="time",i.TimelineAreaChart="timeline-area-chart",i.TimelineBarChart="timeline-bar-chart",i.TimelineEvents="timeline-events",i.TimelineLineChart="timeline-line-chart",i.Tint="tint",i.Torch="torch",i.Tractor="tractor",i.Train="train",i.Translate="translate",i.Trash="trash",i.Tree="tree",i.TrendingDown="trending-down",i.TrendingUp="trending-up",i.Trophy="trophy",i.Truck="truck",i.TwoColumns="two-columns",i.Unarchive="unarchive",i.Underline="underline",i.Undo="undo",i.UngroupObjects="ungroup-objects",i.UnknownVehicle="unknown-vehicle",i.Unlink="unlink",i.Unlock="unlock",i.Unpin="unpin",i.Unresolve="unresolve",i.Updated="updated",i.Upload="upload",i.User="user",i.VariableLayer="variable-layer",i.Variable="variable",i.Vector="vector",i.VerticalBarChartAsc="vertical-bar-chart-asc",i.VerticalBarChartDesc="vertical-bar-chart-desc",i.VerticalDistribution="vertical-distribution",i.VerticalInbetween="vertical-inbetween",i.Video="video",i.Virus="virus",i.VolumeDown="volume-down",i.VolumeOff="volume-off",i.VolumeUp="volume-up",i.Walk="walk",i.WarningSign="warning-sign",i.WaterfallChart="waterfall-chart",i.Waves="waves",i.WidgetButton="widget-button",i.WidgetFooter="widget-footer",i.WidgetHeader="widget-header",i.Widget="widget",i.Wind="wind",i.Won="won",i.WrapLines="wrap-lines",i.WrenchRedo="wrench-redo",i.WrenchSnooze="wrench-snooze",i.WrenchTime="wrench-time",i.Wrench="wrench",i.Yen="yen",i.ZoomIn="zoom-in",i.ZoomOut="zoom-out",i.ZoomToFit="zoom-to-fit"})(h||(h={}));h.AddApplication+"",h.AddChild+"",h.AddClip+"",h.AddColumnLeft+"",h.AddColumnRight+"",h.AddDerivedColumn+"",h.AddLocation+"",h.AddParent+"",h.AddRowBottom+"",h.AddRowTop+"",h.AddTile+"",h.AddToArtifact+"",h.AddToFolder+"",h.Add+"",h.AimpointsTarget+"",h.Airplane+"",h.AlignCenter+"",h.AlignJustify+"",h.AlignLeft+"",h.AlignRight+"",h.AlignmentBottom+"",h.AlignmentHorizontalCenter+"",h.AlignmentLeft+"",h.AlignmentRight+"",h.AlignmentTop+"",h.AlignmentVerticalCenter+"",h.Ammunition+"",h.Anchor+"",h.Annotation+"",h.Announcement+"",h.Antenna+"",h.AppHeader+"",h.Application+"",h.Applications+"",h.Archive+"",h.AreaOfInterest+"",h.ArrayBoolean+"",h.ArrayDate+"",h.ArrayFloatingPoint+"",h.ArrayNumeric+"",h.ArrayObject+"",h.ArrayString+"",h.ArrayTimestamp+"",h.Array+"",h.ArrowBottomLeft+"",h.ArrowBottomRight+"",h.ArrowDown+"",h.ArrowLeft+"",h.ArrowRight+"",h.ArrowTopLeft+"",h.ArrowTopRight+"",h.ArrowUp+"",h.ArrowsArc+"",h.ArrowsHorizontal+"",h.ArrowsVertical+"",h.Asterisk+"",h.At+"",h.AutomaticUpdates+"",h.Axle+"",h.Backlink+"",h.BackwardTen+"",h.Badge+"",h.BanCircle+"",h.BankAccount+"",h.Barcode+"",h.BinaryNumber+"",h.Blank+"",h.BlockPromote+"",h.BlockedPerson+"",h.Bold+"",h.Book+"",h.Bookmark+"",h.Box+"",h.BranchLocked+"",h.BranchUnlocked+"",h.Briefcase+"",h.BringData+"",h.BringForward+"",h.BritishPound+"",h.Bug+"",h.Buggy+"",h.Build+"",h.Bullseye+"",h.Calculator+"",h.Calendar+"",h.Camera+"",h.CaretDown+"",h.CaretLeft+"",h.CaretRight+"",h.CaretUp+"",h.CargoShip+"",h.CellTower+"",h.Changes+"",h.Chart+"",h.Chat+"",h.ChevronBackward+"",h.ChevronDown+"",h.ChevronForward+"",h.ChevronLeft+"",h.ChevronRight+"",h.ChevronUp+"",h.CircleArrowDown+"",h.CircleArrowLeft+"",h.CircleArrowRight+"",h.CircleArrowUp+"",h.CircleDashed+"",h.Circle+"",h.Citation+"",h.Clean+"",h.Clip+"",h.ClipboardFile+"",h.Clipboard+"",h.CloudDownload+"",h.CloudServer+"",h.CloudTick+"",h.CloudUpload+"",h.Cloud+"",h.CodeBlock+"",h.Code+"",h.Cog+"",h.CollapseAll+"",h.ColorFill+"",h.ColumnLayout+"",h.Comment+"",h.Comparison+"",h.Compass+"",h.Compressed+"",h.Confirm+"",h.ConsoleAlert+"",h.Console+"",h.Construction+"",h.Contrast+"",h.Control+"",h.CreditCard+"",h.Crop+"",h.CrossCircle+"",h.Cross+"",h.Crown+"",h.CrystalBall+"",h.CssStyle+"",h.CubeAdd+"",h.CubeCutout+"",h.CubeCutouts+"",h.CubeEdit+"",h.CubeRemove+"",h.Cube+"",h.Cubes+"",h.CurlyBraces+"",h.CurvedRangeChart+"",h.Cut+"",h.Cycle+"",h.Dashboard+"",h.DataCloud+"",h.DataConnection+"",h.DataLineage+"",h.DataSearch+"",h.DataSync+"",h.Database+"",h.DeleteClip+"",h.Delete+"",h.Delta+"",h.DeriveColumn+"",h.Descendant+"",h.Desktop+"",h.Detection+"",h.Diagnosis+"",h.DiagramTree+"",h.DirectionLeft+"",h.DirectionRight+"",h.Disable+"",h.Divide+"",h.DocumentCode+"",h.DocumentLocked+"",h.DocumentOpen+"",h.DocumentShare+"",h.Document+"",h.Dollar+"",h.Dot+"",h.DoubleCaretHorizontal+"",h.DoubleCaretVertical+"",h.DoubleChevronDown+"",h.DoubleChevronLeft+"",h.DoubleChevronRight+"",h.DoubleChevronUp+"",h.DoughnutChart+"",h.Download+"",h.DragHandleHorizontal+"",h.DragHandleVertical+"",h.Draw+"",h.DrawerLeftFilled+"",h.DrawerLeft+"",h.DrawerRightFilled+"",h.DrawerRight+"",h.DriveTime+"",h.DroneUav+"",h.Drone+"",h.Duplicate+"",h.Edit+"",h.Eject+"",h.Emoji+"",h.Endnote+"",h.Endorsed+"",h.Engagement+"",h.Envelope+"",h.Equals+"",h.Eraser+"",h.Error+"",h.Euro+"",h.Excavator+"",h.Exchange+"",h.ExcludeRow+"",h.ExpandAll+"",h.Explain+"",h.Export+"",h.EyeOff+"",h.EyeOn+"",h.EyeOpen+"",h.FastBackward+"",h.FastForward+"",h.FeedSubscribed+"",h.Feed+"",h.FighterJet+"",h.Film+"",h.FilterKeep+"",h.FilterList+"",h.FilterOpen+"",h.FilterRemove+"",h.FilterSortAsc+"",h.FilterSortDesc+"",h.Filter+"",h.Flag+"",h.Flame+"",h.Flash+"",h.FloatingPoint+"",h.FloppyDisk+"",h.FlowBranch+"",h.FlowEnd+"",h.FlowLinear+"",h.FlowReviewBranch+"",h.FlowReview+"",h.Flows+"",h.FolderClose+"",h.FolderNew+"",h.FolderOpen+"",h.FolderSharedOpen+"",h.FolderShared+"",h.Follower+"",h.Following+"",h.Font+"",h.ForkEnd+"",h.Fork+"",h.Form+"",h.ForwardTen+"",h.FrameToFrame+"",h.Fuel+"",h.FullCircle+"",h.FullStackedChart+"",h.Fullscreen+"",h.FunctionMinimal+"",h.Function+"",h.GanttChart+"",h.Generate+"",h.Geofence+"",h.Geolocation+"",h.Geosearch+"",h.Geotime+"",h.GiftBox+"",h.GitBranch+"",h.GitCommit+"",h.GitMerge+"",h.GitNewBranch+"",h.GitPull+"",h.GitPush+"",h.GitRebase+"",h.GitRepo+"",h.Glass+"",h.GlobeNetworkAdd+"",h.GlobeNetwork+"",h.Globe+"",h.GraphRemove+"",h.Graph+"",h.GreaterThanOrEqualTo+"",h.GreaterThan+"",h.GridView+"",h.Grid+"",h.GroupItem+"",h.GroupObjects+"",h.GroupedBarChart+"",h.HandDown+"",h.HandLeft+"",h.HandRight+"",h.HandUp+"",h.Hand+"",h.Hat+"",h.HeaderOne+"",h.HeaderThree+"",h.HeaderTwo+"",h.Header+"",h.Headset+"",h.HeartBroken+"",h.Heart+"",h.HeatGrid+"",h.Heatmap+"",h.Helicopter+"",h.Help+"",h.HelperManagement+"",h.Hexagon+"",h.HighPriority+"",h.HighVoltagePole+"",h.Highlight+"",h.History+"",h.Home+"",h.HorizontalBarChartAsc+"",h.HorizontalBarChartDesc+"",h.HorizontalBarChart+"",h.HorizontalDistribution+"",h.HorizontalInbetween+"",h.Hurricane+"",h.IdNumber+"",h.ImageRotateLeft+"",h.ImageRotateRight+"",h.Import+"",h.InboxFiltered+"",h.InboxGeo+"",h.InboxSearch+"",h.InboxUpdate+"",h.Inbox+"",h.InfoSign+"",h.Inheritance+"",h.InheritedGroup+"",h.InnerJoin+"",h.Input+"",h.Insert+"",h.Intelligence+"",h.Intersection+"",h.IpAddress+"",h.IssueClosed+"",h.IssueNew+"",h.Issue+"",h.Italic+"",h.JoinTable+"",h.KeyBackspace+"",h.KeyCommand+"",h.KeyControl+"",h.KeyDelete+"",h.KeyEnter+"",h.KeyEscape+"",h.KeyOption+"",h.KeyShift+"",h.KeyTab+"",h.Key+"",h.KnownVehicle+"",h.LabTest+"",h.Label+"",h.LayerOutline+"",h.Layer+"",h.Layers+"",h.LayoutAuto+"",h.LayoutBalloon+"",h.LayoutBottomRowThreeTiles+"",h.LayoutBottomRowTwoTiles+"",h.LayoutCircle+"",h.LayoutGrid+"",h.LayoutGroupBy+"",h.LayoutHierarchy+"",h.LayoutLeftColumnThreeTiles+"",h.LayoutLeftColumnTwoTiles+"",h.LayoutLinear+"",h.LayoutRightColumnThreeTiles+"",h.LayoutRightColumnTwoTiles+"",h.LayoutSkewGrid+"",h.LayoutSortedClusters+"",h.LayoutThreeColumns+"",h.LayoutThreeRows+"",h.LayoutTopRowThreeTiles+"",h.LayoutTopRowTwoTiles+"",h.LayoutTwoColumns+"",h.LayoutTwoRows+"",h.Layout+"",h.Learning+"",h.LeftJoin+"",h.LengthenText+"",h.LessThanOrEqualTo+"",h.LessThan+"",h.Lifesaver+"",h.Lightbulb+"",h.Lightning+"",h.Link+"",h.LinkedSquares+"",h.ListColumns+"",h.ListDetailView+"",h.List+"",h.Locate+"",h.Lock+"",h.Locomotive+"",h.LogIn+"",h.LogOut+"",h.LowVoltagePole+"",h.Manual+"",h.ManuallyEnteredData+"",h.ManyToMany+"",h.ManyToOne+"",h.MapCreate+"",h.MapMarker+"",h.Map+"",h.Markdown+"",h.Maximize+"",h.Media+"",h.MenuClosed+"",h.MenuOpen+"",h.Menu+"",h.MergeColumns+"",h.MergeLinks+"",h.Microphone+"",h.Minimize+"",h.Minus+"",h.MobilePhone+"",h.MobileVideo+"",h.ModalFilled+"",h.Modal+"",h.Model+"",h.Moon+"",h.More+"",h.Mountain+"",h.Move+"",h.Mugshot+"",h.MultiSelect+"",h.Music+"",h.Nest+"",h.NewComment+"",h.NewDrawing+"",h.NewGridItem+"",h.NewLayer+"",h.NewLayers+"",h.NewLink+"",h.NewObject+"",h.NewPerson+"",h.NewPrescription+"",h.NewShield+"",h.NewTextBox+"",h.Ninja+"",h.NotEqualTo+"",h.NotificationsAdd+"",h.NotificationsSnooze+"",h.NotificationsUpdated+"",h.Notifications+"",h.NumberedList+"",h.Numerical+"",h.ObjectView+"",h.Office+"",h.Offline+"",h.OilField+"",h.OneColumn+"",h.OneToMany+"",h.OneToOne+"",h.OpenApplication+"",h.Outdated+"",h.OuterJoin+"",h.Output+"",h.Package+"",h.PageBreak+"",h.PageLayout+"",h.PanelStats+"",h.PanelTable+"",h.Panel+"",h.Paperclip+"",h.Paragraph+"",h.PasteVariable+"",h.PathSearch+"",h.Path+"",h.Pause+"",h.People+"",h.Percentage+"",h.Person+"",h.PhoneCall+"",h.PhoneForward+"",h.PhoneSearch+"",h.Phone+"",h.PieChart+"",h.Pill+"",h.Pin+"",h.Pistol+"",h.PivotTable+"",h.Pivot+"",h.Play+"",h.Playbook+"",h.Plus+"",h.PolygonFilter+"",h.Popout+"",h.Power+"",h.PredictiveAnalysis+"",h.Prescription+"",h.Presentation+"",h.Print+"",h.Projects+"",h.Properties+"",h.Property+"",h.PublishFunction+"",h.Pulse+"",h.Rain+"",h.Random+"",h.RangeRing+"",h.Record+"",h.RectHeight+"",h.RectWidth+"",h.Rectangle+"",h.Redo+"",h.RefreshOff+"",h.Refresh+"",h.Regex+"",h.RegressionChart+"",h.RemoveColumnLeft+"",h.RemoveColumnRight+"",h.RemoveColumn+"",h.RemoveRowBottom+"",h.RemoveRowTop+"",h.Remove+"",h.Repeat+"",h.Reset+"",h.Resolve+"",h.Rig+"",h.RightJoin+"",h.Ring+"",h.RocketSlant+"",h.Rocket+"",h.RootFolder+"",h.RotateCcw+"",h.RotateCw+"",h.RotateDocument+"",h.RotatePage+"",h.Route+"",h.RunHistory+"",h.Satellite+"",h.Saved+"",h.ScatterPlot+"",h.SearchAround+"",h.SearchTemplate+"",h.SearchText+"",h.Search+"",h.SegmentedControl+"",h.Select+"",h.SelectionBoxAdd+"",h.SelectionBoxEdit+"",h.SelectionBoxRemove+"",h.SelectionBox+"",h.Selection+"",h.SendBackward+"",h.SendMessage+"",h.SendToGraph+"",h.SendToMap+"",h.SendTo+"",h.Sensor+"",h.SeriesAdd+"",h.SeriesConfiguration+"",h.SeriesDerived+"",h.SeriesFiltered+"",h.SeriesSearch+"",h.ServerInstall+"",h.Server+"",h.Settings+"",h.Shapes+"",h.Share+"",h.SharedFilter+"",h.Shield+"",h.Ship+"",h.Shop+"",h.ShoppingCart+"",h.ShortenText+"",h.SignalSearch+"",h.SimCard+"",h.Slash+"",h.SmallCross+"",h.SmallInfoSign+"",h.SmallMinus+"",h.SmallPlus+"",h.SmallSquare+"",h.SmallTick+"",h.Snowflake+"",h.SoccerBall+"",h.SocialMedia+"",h.SortAlphabeticalDesc+"",h.SortAlphabetical+"",h.SortAsc+"",h.SortDesc+"",h.SortNumericalDesc+"",h.SortNumerical+"",h.Sort+"",h.SpellCheck+"",h.Spin+"",h.SplitColumns+"",h.SportsStadium+"",h.Square+"",h.StackedChart+"",h.StadiumGeometry+"",h.StarEmpty+"",h.Star+"",h.StepBackward+"",h.StepChart+"",h.StepForward+"",h.Stop+"",h.Stopwatch+"",h.Strikethrough+"",h.Style+"",h.Subscript+"",h.SubtractRightJoin+"",h.Superscript+"",h.SwapHorizontal+"",h.SwapVertical+"",h.Sweep+"",h.Switch+"",h.SymbolCircle+"",h.SymbolCross+"",h.SymbolDiamond+"",h.SymbolRectangle+"",h.SymbolSquare+"",h.SymbolTriangleDown+"",h.SymbolTriangleUp+"",h.Syringe+"",h.TableSync+"",h.TagAdd+"",h.TagPromote+"",h.TagRefresh+"",h.TagUndo+"",h.Tag+"",h.Tags+"",h.TakeAction+"",h.Tank+"",h.Target+"",h.Taxi+"",h.Team+"",h.Temperature+"",h.TextHighlight+"",h.ThAdd+"",h.ThDerived+"",h.ThDisconnect+"",h.ThFiltered+"",h.ThListAdd+"",h.ThList+"",h.ThVirtualAdd+"",h.ThVirtual+"",h.Th+"",h.ThirdParty+"",h.ThumbsDown+"",h.ThumbsUp+"",h.TickCircle+"",h.Tick+"",h.Time+"",h.TimelineAreaChart+"",h.TimelineBarChart+"",h.TimelineEvents+"",h.TimelineLineChart+"",h.Tint+"",h.Torch+"",h.Tractor+"",h.Train+"",h.Translate+"",h.Trash+"",h.Tree+"",h.TrendingDown+"",h.TrendingUp+"",h.Trophy+"",h.Truck+"",h.TwoColumns+"",h.Unarchive+"",h.Underline+"",h.Undo+"",h.UngroupObjects+"",h.UnknownVehicle+"",h.Unlink+"",h.Unlock+"",h.Unpin+"",h.Unresolve+"",h.Updated+"",h.Upload+"",h.User+"",h.VariableLayer+"",h.Variable+"",h.Vector+"",h.VerticalBarChartAsc+"",h.VerticalBarChartDesc+"",h.VerticalDistribution+"",h.VerticalInbetween+"",h.Video+"",h.Virus+"",h.VolumeDown+"",h.VolumeOff+"",h.VolumeUp+"",h.Walk+"",h.WarningSign+"",h.WaterfallChart+"",h.Waves+"",h.WidgetButton+"",h.WidgetFooter+"",h.WidgetHeader+"",h.Widget+"",h.Wind+"",h.Won+"",h.WrapLines+"",h.WrenchRedo+"",h.WrenchSnooze+"",h.WrenchTime+"",h.Wrench+"",h.Yen+"",h.ZoomIn+"",h.ZoomOut+"",h.ZoomToFit+"";const b0={},P0={};for(const i of Object.values(h))b0[SS(i)]=i,P0[MS(i).toUpperCase()]=i;const L0={...b0,...P0},wS=new Set(Object.values(L0));function AS(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}async function CS(i,e){const t=AS("development")&&typeof performance<"u";let a;if(t&&(a=performance.now(),console.info(`Started '${i}'...`)),await e(),t){const o=Math.round(performance.now()-a);console.info(`Finished '${i}' in ${o}ms`)}}async function RS(i){const{loader:e=ss.defaultLoader}=i;return typeof e=="function"?e:e==="all"?(await ig(async()=>{const{allPathsLoader:t}=await import("./allPathsLoader-HYaof_UF.js");return{allPathsLoader:t}},[],import.meta.url)).allPathsLoader:(await ig(async()=>{const{splitPathsBySizeLoader:t}=await import("./splitPathsBySizeLoader-CqpEFs3e.js");return{splitPathsBySizeLoader:t}},[],import.meta.url)).splitPathsBySizeLoader}class co{constructor(){ft(this,"defaultLoader","split-by-size");ft(this,"loadedIconPaths16",new Map);ft(this,"loadedIconPaths20",new Map)}static setLoaderOptions(e){e.loader!==void 0&&(ss.defaultLoader=e.loader)}static async load(e,t,a){Array.isArray(e)||(e=[e]),await Promise.all(e.map(o=>this.loadImpl(o,t,a)))}static async loadAll(e){const t=Object.values(L0);CS("[Blueprint] loading all icons",async()=>{await Promise.all([this.load(t,qt.STANDARD,e),this.load(t,qt.LARGE,e)])})}static getPaths(e,t){return this.isValidIconName(e)?(t<qt.LARGE?ss.loadedIconPaths16:ss.loadedIconPaths20).get(e):void 0}static async loadImpl(e,t,a={}){if(!this.isValidIconName(e)){console.error(`[Blueprint] Unknown icon '${e}'`);return}const o=t<qt.LARGE?ss.loadedIconPaths16:ss.loadedIconPaths20;if(o.has(e))return;const l=await RS(a);try{const u=t<qt.LARGE?qt.STANDARD:qt.LARGE,d=await l(e,u);o.set(e,d)}catch(u){console.error(`[Blueprint] Unable to load ${t}px icon '${e}'`,u)}}static isValidIconName(e){return wS.has(e)}}const ss=new co,bS="bp6",rg=`${bS}-icon`,ag=new Map;function PS(i){const e=ag.get(i)??0;return ag.set(i,e+1),`${i}-${e}`}const wo=Ge.forwardRef((i,e)=>{const{children:t,className:a,color:o,htmlTitle:l,iconName:u,size:d=qt.STANDARD,svgProps:m,tagName:p="span",title:v,...x}=i,M=d>=qt.LARGE?qt.LARGE:qt.STANDARD,w=`0 0 ${M} ${M}`,R=PS("iconTitle"),y={fill:o,height:d,role:"img",viewBox:w,width:d,...m};return p===null?me.jsxs("svg",{"aria-labelledby":v?R:void 0,"data-icon":u,ref:e,...y,...x,className:An(a,m==null?void 0:m.className),children:[v&&me.jsx("title",{id:R,children:v}),t]}):Ge.createElement(p,{"aria-hidden":v?void 0:!0,...x,className:An(rg,`${rg}-${u}`,a),ref:e,title:l},me.jsxs("svg",{"data-icon":u,...y,className:m==null?void 0:m.className,children:[v&&me.jsx("title",{children:v}),t]}))});wo.displayName="Blueprint6.SVGIconContainer";const LS=["M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33"],DS=["M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63"],D0=Ge.forwardRef((i,e)=>{const a=(i.size??qt.STANDARD)>=qt.LARGE?DS:LS;return me.jsx(wo,{iconName:"caret-down",ref:e,...i,children:a.map((o,l)=>me.jsx("path",{d:o,fillRule:"evenodd"},l))})});D0.displayName="Blueprint6.Icon.CaretDownIcon";const NS=["M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7m6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9"],US=["M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1m10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1"],N0=Ge.forwardRef((i,e)=>{const a=(i.size??qt.STANDARD)>=qt.LARGE?US:NS;return me.jsx(wo,{iconName:"double-caret-vertical",ref:e,...i,children:a.map((o,l)=>me.jsx("path",{d:o,fillRule:"evenodd"},l))})});N0.displayName="Blueprint6.Icon.DoubleCaretVerticalIcon";const FS=["m9.41 8 2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],OS=["m11.41 10 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],U0=Ge.forwardRef((i,e)=>{const a=(i.size??qt.STANDARD)>=qt.LARGE?OS:FS;return me.jsx(wo,{iconName:"small-cross",ref:e,...i,children:a.map((o,l)=>me.jsx("path",{d:o,fillRule:"evenodd"},l))})});U0.displayName="Blueprint6.Icon.SmallCrossIcon";const _o=Ge.forwardRef((i,e)=>{const{autoLoad:t=!0,className:a,color:o,icon:l,intent:u,tagName:d="span",svgProps:m,title:p,htmlTitle:v,...x}=i,_=i.size??qt.STANDARD,[M,w]=Ge.useState(()=>typeof l=="string"?co.getPaths(l,_):void 0);if(Ge.useEffect(()=>{let R=!1;if(typeof l=="string"){const y=co.getPaths(l,_);y!==void 0?w(y):t?co.load(l,_).then(()=>{R||w(co.getPaths(l,_))}).catch(S=>{console.error(`[Blueprint] Icon '${l}' (${_}px) could not be loaded.`,S)}):console.error(`[Blueprint] Icon '${l}' (${_}px) is not loaded yet and autoLoad={false}, did you call Icons.load('${l}', ${_})?`)}return()=>{R=!0}},[t,l,_]),l==null||typeof l=="boolean")return null;if(typeof l!="string"){if(Ge.isValidElement(l)){const R=An(l.props.className,a,Ni(u));if(aS(l)){const y={...us(x),className:R},S=l.props.size??i.size;S!=null&&(y.size=S);const D=l.props.color??o;return D!=null&&(y.color=D),Ge.cloneElement(l,y)}return Ge.cloneElement(l,{className:R})}return l}if(M==null){const R=_===qt.STANDARD?Wx:_===qt.LARGE?Xx:void 0;return Ge.createElement(d||"span",{"aria-hidden":p?void 0:!0,...us(x),className:An(Yf,R,Yx(l),Ni(u),a),"data-icon":l,ref:e,title:v})}else{const R=M.map((y,S)=>me.jsx("path",{d:y,fillRule:"evenodd"},S));return me.jsx(wo,{children:R,className:An(Ni(u),a),color:o,htmlTitle:v,iconName:l,ref:e,size:_,svgProps:m,tagName:d,title:p,...us(x)})}});_o.displayName=`${yn}.Icon`;var _a;(function(i){i[i.SMALL=20]="SMALL",i[i.STANDARD=50]="STANDARD",i[i.LARGE=100]="LARGE"})(_a||(_a={}));const zr=45,sg=`M 50,50 m 0,-${zr} a ${zr},${zr} 0 1 1 0,${zr*2} a ${zr},${zr} 0 1 1 0,-${zr*2}`,to=280,IS=10,kS=4,zS=16,F0=i=>{const{className:e="",intent:t,value:a,tagName:o="div",size:l,...u}=i;pS(()=>{const x=l!=null,_=e.indexOf(mc)>=0||e.indexOf(hs)>=0;x&&_&&console.warn(nS)},[e,l]);const d=HS(l,e),m=Math.min(zS,kS*_a.LARGE/d),p=to-to*(a==null?.25:qf(a,0,1)),v=An(wc,Ni(t),{[Vx]:a!=null},e);return Ge.createElement(o,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a===void 0?void 0:a*100,className:v,role:"progressbar",...u},Ge.createElement(o,{className:zx},me.jsxs("svg",{width:d,height:d,strokeWidth:m.toFixed(2),viewBox:VS(m),children:[me.jsx("path",{className:Gx,d:sg}),me.jsx("path",{className:Hx,d:sg,pathLength:to,strokeDasharray:`${to} ${to}`,strokeDashoffset:p})]})))};F0.displayName=`${yn}.Spinner`;const HS=(i,e)=>i==null?e.indexOf(mc)>=0?_a.SMALL:e.indexOf(hs)>=0?_a.LARGE:_a.STANDARD:Math.max(IS,i),VS=i=>{const e=zr+i/2,t=(50-e).toFixed(2),a=(e*2).toFixed(2);return`${t} ${t} ${a} ${a}`},GS=qx()?Ge.useLayoutEffect:Ge.useEffect,Zf=Ge.forwardRef(({children:i,tagName:e="div",title:t,className:a,ellipsize:o=!1,...l},u)=>{const d=Ge.useRef(),m=Ge.useMemo(()=>Kf(d,u),[u]),[p,v]=Ge.useState(""),[x,_]=Ge.useState();return GS(()=>{var M;((M=d.current)==null?void 0:M.textContent)!=null&&(_(o&&d.current.scrollWidth>d.current.clientWidth),v(d.current.textContent))},[d,i,o]),Ge.createElement(e,{...l,className:An({[Ax]:o},a),ref:m,title:t??(x?p:void 0)},i)});Zf.displayName=`${yn}.Text`;const Vi=Ge.forwardRef((i,e)=>{const t=O0(i,e);return me.jsx("button",{type:"button",...us(i),...t,children:I0(i)})});Vi.displayName=`${yn}.Button`;const BS=Ge.forwardRef((i,e)=>{const{href:t}=i,a=O0(i,e,{defaultTabIndex:0,disabledTabIndex:-1});return me.jsx("a",{role:"button",...us(i),...a,"aria-disabled":a.disabled,href:a.disabled?void 0:t,children:I0(i)})});BS.displayName=`${yn}.AnchorButton`;function O0(i,e,t){const{alignText:a,fill:o,large:l,loading:u=!1,minimal:d,outlined:m,size:p="medium",small:v,variant:x="solid"}=i,_=i.disabled||u,[M,w]=C0(!_,i,e,t),R=An(Tc,{[Wf]:M,[Ec]:_,[go]:o,[Tx]:u},$f(a),Ni(i.intent),Ac(p,{large:l,small:v}),E0(x,{minimal:d,outlined:m}),i.className);return{...w,className:R,disabled:_}}function I0(i){const{children:e,ellipsizeText:t,endIcon:a,icon:o,loading:l,rightIcon:u,text:d,textClassName:m}=i,p=!gc(d)||!gc(e);return me.jsxs(me.Fragment,{children:[l&&me.jsx(F0,{className:Rx,size:_a.SMALL}),me.jsx(_o,{icon:o}),p&&me.jsxs(Zf,{className:An(bx,m),ellipsize:t,tagName:"span",children:[d,e]}),me.jsx(_o,{icon:a??u})]})}const Zd=Ge.forwardRef((i,e)=>{const{alignText:t,className:a,fill:o,minimal:l,outlined:u,large:d,size:m="medium",variant:p="solid",vertical:v,...x}=i,_=An(Cx,{[go]:o,[v0]:v},$f(t),Ac(m,{large:d}),E0(p,{minimal:l,outlined:u}),a);return me.jsx("div",{...x,ref:e,className:_,children:i.children})});Zd.displayName=`${yn}.ButtonGroup`;const Cc=Ge.forwardRef((i,e)=>{const{alignIndicator:t,children:a,className:o,indicatorChildren:l,inline:u,inputRef:d,label:m,labelElement:p,large:v,size:x="medium",style:_,type:M,typeClassName:w,tagName:R="label",...y}=i,S=An(Xf,w,{[Ec]:y.disabled,[Mx]:u},$f(t),Ac(x,{large:v}),o);return Ge.createElement(R,{className:S,ref:e,style:_},me.jsx("input",{className:Lx,...y,ref:d,type:M}),me.jsx("span",{className:_0,children:l}),m,p,a)});Cc.displayName=`${yn}.Control`;const k0=Ge.forwardRef((i,e)=>{const{innerLabelChecked:t,innerLabel:a,...o}=i,l=a||t?[me.jsx("div",{className:jm,children:me.jsx("div",{className:Zm,children:t||a})},"checked"),me.jsx("div",{className:jm,children:me.jsx("div",{className:Zm,children:a})},"unchecked")]:null;return me.jsx(Cc,{...o,indicatorChildren:l,ref:e,type:"checkbox",typeClassName:x0})});k0.displayName=`${yn}.Switch`;const WS=Ge.forwardRef((i,e)=>me.jsx(Cc,{...i,ref:e,type:"radio",typeClassName:Nx}));WS.displayName=`${yn}.Radio`;const z0=Ge.forwardRef((i,e)=>{const{defaultIndeterminate:t,indeterminate:a,onChange:o,...l}=i,[u,d]=Ge.useState(a||t||!1),m=Ge.useRef(null),p=Kf(i.inputRef,m),v=Ge.useCallback(x=>{a===void 0&&d(x.target.indeterminate),o==null||o(x)},[a,o]);return Ge.useEffect(()=>{a!==void 0&&d(a)},[a]),Ge.useEffect(()=>{m.current!=null&&(m.current.indeterminate=u)},[m,u]),me.jsx(Cc,{...l,inputRef:p,onChange:v,ref:e,type:"checkbox",typeClassName:Dx})});z0.displayName=`${yn}.Checkbox`;const ac=Ge.forwardRef((i,e)=>{const{className:t,children:a,disabled:o,fill:l,iconName:u="double-caret-vertical",iconProps:d,large:m,minimal:p,options:v=[],value:x,..._}=i,M=An(Px,{[Ec]:o,[go]:l,[hs]:m,[pc]:p},t),w="Open dropdown",R=u==="double-caret-vertical"?me.jsx(N0,{title:w,...d}):me.jsx(D0,{title:w,...d}),y=v.map(S=>{const D=typeof S=="object"?S:{value:S};return Ge.createElement("option",{...D,key:D.value,children:D.label||D.value})});return me.jsxs("div",{className:M,children:[me.jsxs("select",{disabled:o,ref:e,value:x,..._,multiple:!1,children:[y,a]}),R]})});ac.displayName=`${yn}.HTMLSelect`;const og={START:"start",END:"end"},H0={PUSH:"push",NONE:"none"};function sc(i){return`${(i*100).toFixed(2)}%`}function lg(i,e,t,a){const o=e<t?1:-1;for(let l=e;l!==t+o;l+=o)i[l]=a}function XS(i,e){if(i.length===0)return;let t=i[0],a=e(t);for(let o=1;o<i.length;o++){const l=i[o],u=e(l);u<a&&(t=l,a=u)}return t}const YS=["max","min","stepSize","tickSize","value"];class V0 extends jf{constructor(){super(...arguments);ft(this,"state",{isMoving:!1});ft(this,"handleElement",null);ft(this,"refHandlers",{handle:t=>this.handleElement=t});ft(this,"beginHandleMovement",t=>{document.addEventListener("mousemove",this.handleHandleMovement),document.addEventListener("mouseup",this.endHandleMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.mouseEventClientOffset(t)))});ft(this,"beginHandleTouchMovement",t=>{document.addEventListener("touchmove",this.handleHandleTouchMovement),document.addEventListener("touchend",this.endHandleTouchMovement),document.addEventListener("touchcancel",this.endHandleTouchMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.touchEventClientOffset(t)))});ft(this,"getStyleProperties",()=>{if(this.handleElement==null)return{};const{min:t=0,tickSizeRatio:a,value:o,vertical:l}=this.props,{handleMidpoint:u}=this.getHandleMidpointAndOffset(this.handleElement,!0),d=(o-t)*a,m=`calc(${sc(d)} - ${u}px)`;return l?{bottom:m}:{left:m}});ft(this,"endHandleMovement",t=>{this.handleMoveEndedAt(this.mouseEventClientOffset(t))});ft(this,"endHandleTouchMovement",t=>{this.handleMoveEndedAt(this.touchEventClientOffset(t))});ft(this,"handleMoveEndedAt",t=>{var o,l;this.removeDocumentEventListeners(),this.setState({isMoving:!1});const a=this.changeValue(this.clientToValue(t));(l=(o=this.props).onRelease)==null||l.call(o,a)});ft(this,"handleHandleMovement",t=>{this.handleMovedTo(this.mouseEventClientOffset(t))});ft(this,"handleHandleTouchMovement",t=>{this.handleMovedTo(this.touchEventClientOffset(t))});ft(this,"handleMovedTo",t=>{this.state.isMoving&&!this.props.disabled&&this.changeValue(this.clientToValue(t))});ft(this,"handleKeyDown",t=>{const{stepSize:a,value:o}=this.props,l=lS(t,["ArrowLeft","ArrowDown"],["ArrowRight","ArrowUp"]);l!==void 0&&(this.changeValue(o+a*l),t.preventDefault())});ft(this,"handleKeyUp",t=>{var a,o;oS(t)&&((o=(a=this.props).onRelease)==null||o.call(a,this.props.value))})}componentDidMount(){this.forceUpdate()}render(){const{className:t,disabled:a,label:o,min:l,max:u,value:d,vertical:m,htmlProps:p}=this.props,{isMoving:v}=this.state;return me.jsx("span",{role:"slider",tabIndex:0,...p,className:An(S0,{[Wf]:v},t),onKeyDown:a?void 0:this.handleKeyDown,onKeyUp:a?void 0:this.handleKeyUp,onMouseDown:a?void 0:this.beginHandleMovement,onTouchStart:a?void 0:this.beginHandleTouchMovement,ref:this.refHandlers.handle,style:this.getStyleProperties(),"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":d,"aria-disabled":a,"aria-orientation":m?"vertical":"horizontal",children:o==null?null:me.jsx("span",{className:y0,children:o})})}componentWillUnmount(){this.removeDocumentEventListeners()}clientToValue(t){const{stepSize:a,tickSize:o,value:l,vertical:u}=this.props;if(this.handleElement==null)return l;const d=u?window.innerHeight-t:t,m=this.getHandleElementCenterPixel(this.handleElement),p=d-m;return isNaN(p)?l:l+Math.round(p/(o*a))*a}mouseEventClientOffset(t){return this.props.vertical?t.clientY:t.clientX}touchEventClientOffset(t){const a=t.changedTouches[0];return this.props.vertical?a.clientY:a.clientX}validateProps(t){for(const a of YS)if(typeof t[a]!="number")throw new Error(`[Blueprint] <Handle> requires number value for ${a} prop`)}changeValue(t,a=this.props.onChange){return t=this.clamp(t),!isNaN(t)&&this.props.value!==t&&(a==null||a(t)),t}clamp(t){return qf(t,this.props.min,this.props.max)}getHandleElementCenterPixel(t){const{handleMidpoint:a,handleOffset:o}=this.getHandleMidpointAndOffset(t);return o+a}getHandleMidpointAndOffset(t,a=!1){if(t==null)return{handleMidpoint:0,handleOffset:0};const{vertical:o}=this.props,l=t.getBoundingClientRect();l.width=t.offsetWidth,l.height=t.offsetHeight;const u=o?a?"width":"height":a?"height":"width",d=o?window.innerHeight-(l.top+l[u]):l.left;return{handleMidpoint:l[u]/2,handleOffset:d}}removeDocumentEventListeners(){document.removeEventListener("mousemove",this.handleHandleMovement),document.removeEventListener("mouseup",this.endHandleMovement),document.removeEventListener("touchmove",this.handleHandleTouchMovement),document.removeEventListener("touchend",this.endHandleTouchMovement),document.removeEventListener("touchcancel",this.endHandleTouchMovement)}}ft(V0,"displayName",`${yn}.SliderHandle`);const ps=()=>null;ps.displayName=`${yn}.MultiSliderHandle`;const Hr=class Hr extends jf{constructor(){super(...arguments);ft(this,"state",{labelPrecision:$S(this.props),tickSize:0,tickSizeRatio:0});ft(this,"handleElements",[]);ft(this,"trackElement",null);ft(this,"addHandleRef",t=>{t!=null&&this.handleElements.push(t)});ft(this,"maybeHandleTrackClick",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,o=>o.mouseEventClientOffset(t));a&&a.beginHandleMovement(t)}});ft(this,"maybeHandleTrackTouch",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,o=>o.touchEventClientOffset(t));a&&a.beginHandleTouchMovement(t)}});ft(this,"canHandleTrackEvent",t=>{const a=t.target;return!this.props.disabled&&a.closest(`.${S0}`)==null});ft(this,"getHandlerForIndex",(t,a)=>o=>{a==null||a(this.getNewHandleValues(o,t))});ft(this,"handleChange",t=>{var l,u;const a=ua(this.props),o=a.map(d=>d.value);$x(t,o)||((u=(l=this.props).onChange)==null||u.call(l,t),a.forEach((d,m)=>{var p;o[m]!==t[m]&&((p=d.onChange)==null||p.call(d,t[m]))}))});ft(this,"handleRelease",t=>{var o,l;const a=ua(this.props);(l=(o=this.props).onRelease)==null||l.call(o,t),a.forEach((u,d)=>{var m;(m=u.onRelease)==null||m.call(u,t[d])})})}static getDerivedStateFromProps(t){return{labelPrecision:Hr.getLabelPrecision(t)}}static getLabelPrecision({labelPrecision:t,stepSize:a}){return t??w0(a)}getSnapshotBeforeUpdate(t){const a=ua(t);return ua(this.props).length!==a.length&&(this.handleElements=[]),null}render(){const t=An(xa,{[Ec]:this.props.disabled,[`${xa}-unlabeled`]:this.props.labelRenderer===!1,[v0]:this.props.vertical},this.props.className);return me.jsxs("div",{className:t,onMouseDown:this.maybeHandleTrackClick,onTouchStart:this.maybeHandleTrackTouch,children:[me.jsx("div",{className:Fx,ref:a=>this.trackElement=a,children:this.renderTracks()}),me.jsx("div",{className:Ux,children:this.renderLabels()}),this.renderHandles()]})}componentDidMount(){this.updateTickSize()}componentDidUpdate(t,a){super.componentDidUpdate(t,a),(t.min!==this.props.min||t.max!==this.props.max||t.vertical!==this.props.vertical)&&this.updateTickSize()}validateProps(t){if(t.stepSize<=0)throw new Error(jx);if(t.labelStepSize!==void 0&&t.labelValues!==void 0)throw new Error(tS);if(t.labelStepSize!==void 0&&t.labelStepSize<=0)throw new Error(Zx);if(t.min!==void 0&&!isFinite(t.min))throw new Error(Jx);if(t.max!==void 0&&!isFinite(t.max))throw new Error(Qx);let a=!1;if(Ge.Children.forEach(t.children,o=>{o&&!A0(o,ps)&&(a=!0)}),a)throw new Error(eS)}formatLabel(t,a=!1){const{labelRenderer:o}=this.props;if(o!==!1)return T0(o)?o(t,{isHandleTooltip:a}):t.toFixed(this.state.labelPrecision)}renderLabels(){if(this.props.labelRenderer===!1)return null;const t=this.getLabelValues(),{max:a,min:o}=this.props;return t.map((u,d)=>{const m=sc((u-o)/(a-o)),p=this.props.vertical?{bottom:m}:{left:m};return me.jsx("div",{className:y0,style:p,children:this.formatLabel(u)},d)})}renderTracks(){const t=G0(this.props);t.push({value:this.props.max});let a={value:this.props.min};const o=[];for(let l=0;l<t.length;l++){const u=t[l];o.push(this.renderTrackFill(l,a,u)),a=u}return o}renderTrackFill(t,a,o){const[l,u]=[this.getOffsetRatio(a.value),this.getOffsetRatio(o.value)].sort((_,M)=>_-M),d=sc(l),m=sc(1-u),v={...this.props.vertical?{bottom:d,left:0,top:m}:{left:d,right:m,top:0},...a.trackStyleAfter||o.trackStyleBefore||{}},x=An(Ox,Ni(this.getTrackIntent(a,o)));return me.jsx("div",{className:x,style:v},`track-${t}`)}renderHandles(){const{disabled:t,max:a,min:o,stepSize:l,vertical:u}=this.props,d=ua(this.props);return d.length===0?null:d.map(({value:m,type:p,className:v,htmlProps:x},_)=>me.jsx(V0,{htmlProps:x,className:An({[Ix]:p===og.START,[kx]:p===og.END},v),disabled:t,label:this.formatLabel(m,!0),max:a,min:o,onChange:this.getHandlerForIndex(_,this.handleChange),onRelease:this.getHandlerForIndex(_,this.handleRelease),ref:this.addHandleRef,stepSize:l,tickSize:this.state.tickSize,tickSizeRatio:this.state.tickSizeRatio,value:m,vertical:u},`${_}-${d.length}`))}nearestHandleForValue(t,a){return XS(t,o=>{const l=a(o),u=o.clientToValue(l),d=o.props.value;return Math.abs(u-d)})}getNewHandleValues(t,a){const l=ua(this.props).map(p=>p.value),u=l.slice();u[a]=t,u.sort((p,v)=>p-v);const d=u.indexOf(t),m=this.findFirstLockedHandleIndex(a,d);if(m===-1)lg(u,a,d,t);else{const p=l[m];return lg(l,a,m,p),l}return u}findFirstLockedHandleIndex(t,a){const o=t<a?1:-1,l=ua(this.props);for(let u=t+o;u!==a+o;u+=o)if(l[u].interactionKind!==H0.PUSH)return u;return-1}getLabelValues(){const{labelStepSize:t,labelValues:a,min:o,max:l}=this.props;let u=[];if(a!==void 0)u=a.slice();else for(let d=o;d<l||iS(d,l);d+=t??1)u.push(d);return u}getOffsetRatio(t){return qf((t-this.props.min)*this.state.tickSizeRatio,0,1)}getTrackIntent(t,a){return this.props.showTrackFill?t.intentAfter!==void 0?t.intentAfter:a!==void 0&&a.intentBefore!==void 0?a.intentBefore:this.props.defaultTrackIntent:Gr.NONE}updateTickSize(){if(this.trackElement!=null){const t=this.props.vertical?this.trackElement.clientHeight:this.trackElement.clientWidth,a=1/(this.props.max-this.props.min),o=t*a;this.setState({tickSize:o,tickSizeRatio:a})}}};ft(Hr,"defaultSliderProps",{disabled:!1,max:10,min:0,showTrackFill:!0,stepSize:1,vertical:!1}),ft(Hr,"defaultProps",{...Hr.defaultSliderProps,defaultTrackIntent:Gr.NONE}),ft(Hr,"displayName",`${yn}.MultiSlider`),ft(Hr,"Handle",ps);let xo=Hr;function $S({labelPrecision:i,stepSize:e=xo.defaultSliderProps.stepSize}){return i??w0(e)}function ua(i){return G0(i,e=>e.interactionKind!==H0.NONE)}function G0({children:i},e=()=>!0){const t=Ge.Children.map(i,o=>A0(o,ps)&&e(o.props)?o.props:null);let a=t??[];return a=a.filter(o=>o!==null),a.sort((o,l)=>o.value-l.value),a}class po extends jf{render(){const{initialValue:e,intent:t,value:a,onChange:o,onRelease:l,handleHtmlProps:u,...d}=this.props;return me.jsxs(xo,{...d,children:[me.jsx(ps,{value:a,intentAfter:a<e?t:void 0,intentBefore:a>e?t:void 0,onChange:o,onRelease:l,htmlProps:u}),me.jsx(ps,{value:e,interactionKind:"none"})]})}}ft(po,"defaultProps",{...xo.defaultSliderProps,initialValue:0,intent:Gr.PRIMARY,value:0}),ft(po,"displayName",`${yn}.Slider`);const B0=i=>{const{className:e,large:t,onRemove:a,size:o,tabIndex:l}=i,u=t||o==="large"||(e==null?void 0:e.includes(hs)),d=Ge.useCallback(m=>{a==null||a(m,i)},[a,i]);return me.jsx("button",{"aria-label":"Remove tag",type:"button",className:Bx,onClick:d,tabIndex:l,children:me.jsx(U0,{size:u?qt.LARGE:qt.STANDARD})})};B0.displayName=`${yn}.TagRemoveButton`;const W0=Ge.forwardRef((i,e)=>{const{children:t,className:a,endIcon:o,fill:l=!1,icon:u,intent:d,interactive:m,large:p=!1,minimal:v=!1,multiline:x,onRemove:_,rightIcon:M,round:w=!1,size:R="medium",tabIndex:y=0,htmlTitle:S,...D}=i,z=T0(_),b=m??D.onClick!=null,[N,P]=C0(b,i,e,{defaultTabIndex:0,disabledTabIndex:void 0}),k=An(M0,Ni(d),Ac(R,{large:p}),{[Wf]:N,[go]:l,[Ex]:b,[pc]:v,[wx]:w},a);return me.jsxs("span",{...us(D),...P,className:k,role:b?"button":void 0,children:[me.jsx(_o,{icon:u}),!gc(t)&&me.jsx(Zf,{className:go,ellipsize:!x,tagName:"span",title:S,children:t}),me.jsx(_o,{icon:o??M}),z&&me.jsx(B0,{...i})]})});W0.displayName=`${yn}.Tag`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="186",fr={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},qS=0,cg=1,KS=2,oc=1,jS=2,uo=3,Sa=0,Kn=1,Pi=2,hr=0,mo=1,ug=2,dg=3,fg=4,ZS=5,os=100,JS=101,QS=102,ey=103,ty=104,ny=200,iy=201,ry=202,ay=203,X0=204,Y0=205,sy=206,oy=207,ly=208,cy=209,uy=210,dy=211,fy=212,hy=213,py=214,Jd=0,Qd=1,ef=2,So=3,tf=4,nf=5,rf=6,af=7,$0=0,my=1,gy=2,Xi=0,q0=1,K0=2,j0=3,Z0=4,J0=5,Q0=6,ev=7,tv=300,ya=301,ms=302,md=303,gd=304,Rc=306,sf=1e3,dr=1001,of=1002,wn=1003,vy=1004,Fl=1005,Fn=1006,vd=1007,ga=1008,ri=1009,nv=1010,iv=1011,yo=1012,Qf=1013,Yi=1014,Bi=1015,$i=1016,eh=1017,th=1018,Mo=1020,rv=35902,av=35899,sv=1021,ov=1022,Di=1023,mr=1026,va=1027,lv=1028,nh=1029,Ma=1030,ih=1031,rh=1033,lc=33776,cc=33777,uc=33778,dc=33779,lf=35840,cf=35841,uf=35842,df=35843,ff=36196,hf=37492,pf=37496,mf=37488,gf=37489,vc=37490,vf=37491,_f=37808,xf=37809,Sf=37810,yf=37811,Mf=37812,Ef=37813,Tf=37814,wf=37815,Af=37816,Cf=37817,Rf=37818,bf=37819,Pf=37820,Lf=37821,Df=36492,Nf=36494,Uf=36495,Ff=36283,Of=36284,_c=36285,If=36286,_y=3200,kf=0,xy=1,Vr="",ii="srgb",xc="srgb-linear",Sc="linear",kt="srgb",_d=7680,Sy=519,yy=512,My=513,Ey=514,ah=515,Ty=516,wy=517,sh=518,Ay=519,Cy=35044,hg="300 es",Wi=2e3,Eo=2001;function Ry(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function by(){const i=yc("canvas");return i.style.display="block",i}const pg={};function mg(...i){const e="THREE."+i.shift();console.log(e,...i)}function cv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function lt(...i){i=cv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Rt(...i){i=cv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ds(...i){const e=i.join(" ");e in pg||(pg[e]=!0,lt(...i))}function Py(i,e,t){return new Promise(function(a,o){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:o();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const Ly={[Jd]:Qd,[ef]:rf,[tf]:af,[So]:nf,[Qd]:Jd,[rf]:ef,[af]:tf,[nf]:So};class Yr{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const o=a[e];if(o!==void 0){const l=o.indexOf(t);l!==-1&&o.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const o=a.slice(0);for(let l=0,u=o.length;l<u;l++)o[l].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,zf=180/Math.PI;function Ao(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function St(i,e,t){return Math.max(e,Math.min(t,i))}function Dy(i,e){return(i%e+e)%e}function xd(i,e,t){return(1-t)*i+t*e}function no(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $n(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ny={DEG2RAD:fc},_h=class _h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,o=e.elements;return this.x=o[0]*t+o[3]*a+o[6],this.y=o[1]*t+o[4]*a+o[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),o=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*o+e.x,this.y=l*o+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;let ct=_h;class Br{constructor(e=0,t=0,a=0,o=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=o}static slerpFlat(e,t,a,o,l,u,d){let m=a[o+0],p=a[o+1],v=a[o+2],x=a[o+3],_=l[u+0],M=l[u+1],w=l[u+2],R=l[u+3];if(x!==R||m!==_||p!==M||v!==w){let y=m*_+p*M+v*w+x*R;y<0&&(_=-_,M=-M,w=-w,R=-R,y=-y);let S=1-d;if(y<.9995){const D=Math.acos(y),z=Math.sin(D);S=Math.sin(S*D)/z,d=Math.sin(d*D)/z,m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+R*d}else{m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+R*d;const D=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=D,p*=D,v*=D,x*=D}}e[t]=m,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,a,o,l,u){const d=a[o],m=a[o+1],p=a[o+2],v=a[o+3],x=l[u],_=l[u+1],M=l[u+2],w=l[u+3];return e[t]=d*w+v*x+m*M-p*_,e[t+1]=m*w+v*_+p*x-d*M,e[t+2]=p*w+v*M+d*_-m*x,e[t+3]=v*w-d*x-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,o){return this._x=e,this._y=t,this._z=a,this._w=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,o=e._y,l=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),v=d(o/2),x=d(l/2),_=m(a/2),M=m(o/2),w=m(l/2);switch(u){case"XYZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"YXZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"ZXY":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"ZYX":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"YZX":this._x=_*v*x+p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x-_*M*w;break;case"XZY":this._x=_*v*x-p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x+_*M*w;break;default:lt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,o=Math.sin(a);return this._x=e.x*o,this._y=e.y*o,this._z=e.z*o,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],o=t[4],l=t[8],u=t[1],d=t[5],m=t[9],p=t[2],v=t[6],x=t[10],_=a+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-m)*M,this._y=(l-p)*M,this._z=(u-o)*M}else if(a>d&&a>x){const M=2*Math.sqrt(1+a-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(o+u)/M,this._z=(l+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-a-x);this._w=(l-p)/M,this._x=(o+u)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-a-d);this._w=(u-o)/M,this._x=(l+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(St(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const o=Math.min(1,t/a);return this.slerp(e,o),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,o=e._y,l=e._z,u=e._w,d=t._x,m=t._y,p=t._z,v=t._w;return this._x=a*v+u*d+o*p-l*m,this._y=o*v+u*m+l*d-a*p,this._z=l*v+u*p+a*m-o*d,this._w=u*v-a*d-o*m-l*p,this._onChangeCallback(),this}slerp(e,t){let a=e._x,o=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,o=-o,l=-l,u=-u,d=-d);let m=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,t=Math.sin(t*p)/v,this._x=this._x*m+a*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+a*t,this._y=this._y*m+o*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),o=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(o*Math.sin(e),o*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xh=class xh{constructor(e=0,t=0,a=0){this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*o,this.y=l[1]*t+l[4]*a+l[7]*o,this.z=l[2]*t+l[5]*a+l[8]*o,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*o+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*o+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*o+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*o+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,o=this.z,l=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*o-d*a),v=2*(d*t-l*o),x=2*(l*a-u*t);return this.x=t+m*p+u*x-d*v,this.y=a+m*v+d*p-l*x,this.z=o+m*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,o=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*o,this.y=l[1]*t+l[5]*a+l[9]*o,this.z=l[2]*t+l[6]*a+l[10]*o,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,o=e.y,l=e.z,u=t.x,d=t.y,m=t.z;return this.x=o*m-l*d,this.y=l*u-a*m,this.z=a*d-o*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(St(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,o=this.z-e.z;return t*t+a*a+o*o}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const o=Math.sin(t)*e;return this.x=o*Math.sin(a),this.y=Math.cos(t)*e,this.z=o*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),o=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=o,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xh.prototype.isVector3=!0;let ee=xh;const Sd=new ee,gg=new Br,Sh=class Sh{constructor(e,t,a,o,l,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,u,d,m,p)}set(e,t,a,o,l,u,d,m,p){const v=this.elements;return v[0]=e,v[1]=o,v[2]=d,v[3]=t,v[4]=l,v[5]=m,v[6]=a,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],v=a[4],x=a[7],_=a[2],M=a[5],w=a[8],R=o[0],y=o[3],S=o[6],D=o[1],z=o[4],b=o[7],N=o[2],P=o[5],k=o[8];return l[0]=u*R+d*D+m*N,l[3]=u*y+d*z+m*P,l[6]=u*S+d*b+m*k,l[1]=p*R+v*D+x*N,l[4]=p*y+v*z+x*P,l[7]=p*S+v*b+x*k,l[2]=_*R+M*D+w*N,l[5]=_*y+M*z+w*P,l[8]=_*S+M*b+w*k,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-a*l*v+a*d*m+o*l*p-o*u*m}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*u-d*p,_=d*m-v*l,M=p*l-u*m,w=t*x+a*_+o*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const R=1/w;return e[0]=x*R,e[1]=(o*p-v*a)*R,e[2]=(d*a-o*u)*R,e[3]=_*R,e[4]=(v*t-o*m)*R,e[5]=(o*l-d*t)*R,e[6]=M*R,e[7]=(a*m-p*t)*R,e[8]=(u*t-a*l)*R,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,o,l,u,d){const m=Math.cos(l),p=Math.sin(l);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-o*p,o*m,-o*(-p*u+m*d)+d+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<9;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;let ht=Sh;const yd=new ht,vg=new ht().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new ht().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uy(){const i={enabled:!0,workingColorSpace:xc,spaces:{},convert:function(o,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===kt&&(o.r=pr(o.r),o.g=pr(o.g),o.b=pr(o.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(o.applyMatrix3(this.spaces[l].toXYZ),o.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===kt&&(o.r=fs(o.r),o.g=fs(o.g),o.b=fs(o.b))),o},workingToColorSpace:function(o,l){return this.convert(o,this.workingColorSpace,l)},colorSpaceToWorking:function(o,l){return this.convert(o,l,this.workingColorSpace)},getPrimaries:function(o){return this.spaces[o].primaries},getTransfer:function(o){return o===Vr?Sc:this.spaces[o].transfer},getToneMappingMode:function(o){return this.spaces[o].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(o,l=this.workingColorSpace){return o.fromArray(this.spaces[l].luminanceCoefficients)},define:function(o){Object.assign(this.spaces,o)},_getMatrix:function(o,l,u){return o.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(o){return this.spaces[o].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(o=this.workingColorSpace){return this.spaces[o].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(o,l){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(o,l)},toWorkingColorSpace:function(o,l){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(o,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[xc]:{primaries:e,whitePoint:a,transfer:Sc,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:a,transfer:kt,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),i}const Tt=Uy();function pr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let $a;class Fy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{$a===void 0&&($a=yc("canvas")),$a.width=e.width,$a.height=e.height;const o=$a.getContext("2d");e instanceof ImageData?o.putImageData(e,0,0):o.drawImage(e,0,0,e.width,e.height),a=$a}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yc("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const o=a.getImageData(0,0,e.width,e.height),l=o.data;for(let u=0;u<l.length;u++)l[u]=pr(l[u]/255)*255;return a.putImageData(o,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(pr(t[a]/255)*255):t[a]=pr(t[a]);return{data:t,width:e.width,height:e.height}}else return lt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oy=0;class oh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},o=this.data;if(o!==null){let l;if(Array.isArray(o)){l=[];for(let u=0,d=o.length;u<d;u++)o[u].isDataTexture?l.push(Md(o[u].image)):l.push(Md(o[u]))}else l=Md(o);a.url=l}return t||(e.images[this.uuid]=a),a}}function Md(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(lt("Texture: Unable to serialize Texture."),{})}let Iy=0;const Ed=new ee;class Hn extends Yr{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,a=dr,o=dr,l=Fn,u=ga,d=Di,m=ri,p=Hn.DEFAULT_ANISOTROPY,v=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Ao(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=o,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new ct(0,0),this.repeat=new ct(1,1),this.center=new ct(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new ht,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){lt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Texture.setValues(): property '${t}' does not exist.`);continue}o&&a&&o.isVector2&&a.isVector2||o&&a&&o.isVector3&&a.isVector3||o&&a&&o.isMatrix3&&a.isMatrix3?o.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=tv;Hn.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(e=0,t=0,a=0,o=1){this.x=e,this.y=t,this.z=a,this.w=o}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,o){return this.x=e,this.y=t,this.z=a,this.w=o,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,o=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*o+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*o+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*o+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*o+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,o,l;const m=e.elements,p=m[0],v=m[4],x=m[8],_=m[1],M=m[5],w=m[9],R=m[2],y=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-R)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+R)<.1&&Math.abs(w+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(p+1)/2,b=(M+1)/2,N=(S+1)/2,P=(v+_)/4,k=(x+R)/4,T=(w+y)/4;return z>b&&z>N?z<.01?(a=0,o=.707106781,l=.707106781):(a=Math.sqrt(z),o=P/a,l=k/a):b>N?b<.01?(a=.707106781,o=0,l=.707106781):(o=Math.sqrt(b),a=P/o,l=T/o):N<.01?(a=.707106781,o=.707106781,l=0):(l=Math.sqrt(N),a=k/l,o=T/l),this.set(a,o,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(x-R)*(x-R)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(x-R)/D,this.z=(_-v)/D,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=St(this.x,e.x,t.x),this.y=St(this.y,e.y,t.y),this.z=St(this.z,e.z,t.z),this.w=St(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=St(this.x,e,t),this.y=St(this.y,e,t),this.z=St(this.z,e,t),this.w=St(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(St(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let Jt=yh;class ky extends Yr{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new Jt(0,0,e,t),this.scissorTest=!1,this.viewport=new Jt(0,0,e,t),this.textures=[];const o={width:e,height:t,depth:a.depth},l=new Hn(o),u=a.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let o=0,l=this.textures.length;o<l;o++)this.textures[o].image.width=e,this.textures[o].image.height=t,this.textures[o].image.depth=a,this.textures[o].isData3DTexture!==!0&&(this.textures[o].isArrayTexture=this.textures[o].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const o=Object.assign({},e.textures[t].image);this.textures[t].source=new oh(o)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends ky{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class uv extends Hn{constructor(e=null,t=1,a=1,o=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends Hn{constructor(e=null,t=1,a=1,o=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:o},this.magFilter=wn,this.minFilter=wn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Mc=class Mc{constructor(e,t,a,o,l,u,d,m,p,v,x,_,M,w,R,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,o,l,u,d,m,p,v,x,_,M,w,R,y)}set(e,t,a,o,l,u,d,m,p,v,x,_,M,w,R,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=a,S[12]=o,S[1]=l,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=_,S[3]=M,S[7]=w,S[11]=R,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,a=e.elements,o=1/qa.setFromMatrixColumn(e,0).length(),l=1/qa.setFromMatrixColumn(e,1).length(),u=1/qa.setFromMatrixColumn(e,2).length();return t[0]=a[0]*o,t[1]=a[1]*o,t[2]=a[2]*o,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,o=e.y,l=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(o),p=Math.sin(o),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*v,M=u*x,w=d*v,R=d*x;t[0]=m*v,t[4]=-m*x,t[8]=p,t[1]=M+w*p,t[5]=_-R*p,t[9]=-d*m,t[2]=R-_*p,t[6]=w+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*v,M=m*x,w=p*v,R=p*x;t[0]=_+R*d,t[4]=w*d-M,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-d,t[2]=M*d-w,t[6]=R+_*d,t[10]=u*m}else if(e.order==="ZXY"){const _=m*v,M=m*x,w=p*v,R=p*x;t[0]=_-R*d,t[4]=-u*x,t[8]=w+M*d,t[1]=M+w*d,t[5]=u*v,t[9]=R-_*d,t[2]=-u*p,t[6]=d,t[10]=u*m}else if(e.order==="ZYX"){const _=u*v,M=u*x,w=d*v,R=d*x;t[0]=m*v,t[4]=w*p-M,t[8]=_*p+R,t[1]=m*x,t[5]=R*p+_,t[9]=M*p-w,t[2]=-p,t[6]=d*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,w=d*m,R=d*p;t[0]=m*v,t[4]=R-_*x,t[8]=w*x+M,t[1]=x,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=M*x+w,t[10]=_-R*x}else if(e.order==="XZY"){const _=u*m,M=u*p,w=d*m,R=d*p;t[0]=m*v,t[4]=-x,t[8]=p*v,t[1]=_*x+R,t[5]=u*v,t[9]=M*x-w,t[2]=w*x-M,t[6]=d*v,t[10]=R*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Vy)}lookAt(e,t,a){const o=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ur.crossVectors(a,ti),Ur.lengthSq()===0&&(Math.abs(a.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ur.crossVectors(a,ti)),Ur.normalize(),Ol.crossVectors(ti,Ur),o[0]=Ur.x,o[4]=Ol.x,o[8]=ti.x,o[1]=Ur.y,o[5]=Ol.y,o[9]=ti.y,o[2]=Ur.z,o[6]=Ol.z,o[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,o=t.elements,l=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],v=a[1],x=a[5],_=a[9],M=a[13],w=a[2],R=a[6],y=a[10],S=a[14],D=a[3],z=a[7],b=a[11],N=a[15],P=o[0],k=o[4],T=o[8],U=o[12],V=o[1],X=o[5],J=o[9],ne=o[13],G=o[2],ie=o[6],oe=o[10],le=o[14],q=o[3],j=o[7],O=o[11],L=o[15];return l[0]=u*P+d*V+m*G+p*q,l[4]=u*k+d*X+m*ie+p*j,l[8]=u*T+d*J+m*oe+p*O,l[12]=u*U+d*ne+m*le+p*L,l[1]=v*P+x*V+_*G+M*q,l[5]=v*k+x*X+_*ie+M*j,l[9]=v*T+x*J+_*oe+M*O,l[13]=v*U+x*ne+_*le+M*L,l[2]=w*P+R*V+y*G+S*q,l[6]=w*k+R*X+y*ie+S*j,l[10]=w*T+R*J+y*oe+S*O,l[14]=w*U+R*ne+y*le+S*L,l[3]=D*P+z*V+b*G+N*q,l[7]=D*k+z*X+b*ie+N*j,l[11]=D*T+z*J+b*oe+N*O,l[15]=D*U+z*ne+b*le+N*L,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],o=e[8],l=e[12],u=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],_=e[10],M=e[14],w=e[3],R=e[7],y=e[11],S=e[15],D=m*M-p*_,z=d*M-p*x,b=d*_-m*x,N=u*M-p*v,P=u*_-m*v,k=u*x-d*v;return t*(R*D-y*z+S*b)-a*(w*D-y*N+S*P)+o*(w*z-R*N+S*k)-l*(w*b-R*P+y*k)}determinantAffine(){const e=this.elements,t=e[0],a=e[4],o=e[8],l=e[1],u=e[5],d=e[9],m=e[2],p=e[6],v=e[10];return t*(u*v-d*p)-a*(l*v-d*m)+o*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const o=this.elements;return e.isVector3?(o[12]=e.x,o[13]=e.y,o[14]=e.z):(o[12]=e,o[13]=t,o[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],o=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],_=e[10],M=e[11],w=e[12],R=e[13],y=e[14],S=e[15],D=t*d-a*u,z=t*m-o*u,b=t*p-l*u,N=a*m-o*d,P=a*p-l*d,k=o*p-l*m,T=v*R-x*w,U=v*y-_*w,V=v*S-M*w,X=x*y-_*R,J=x*S-M*R,ne=_*S-M*y,G=D*ne-z*J+b*X+N*V-P*U+k*T;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const ie=1/G;return e[0]=(d*ne-m*J+p*X)*ie,e[1]=(o*J-a*ne-l*X)*ie,e[2]=(R*k-y*P+S*N)*ie,e[3]=(_*P-x*k-M*N)*ie,e[4]=(m*V-u*ne-p*U)*ie,e[5]=(t*ne-o*V+l*U)*ie,e[6]=(y*b-w*k-S*z)*ie,e[7]=(v*k-_*b+M*z)*ie,e[8]=(u*J-d*V+p*T)*ie,e[9]=(a*V-t*J-l*T)*ie,e[10]=(w*P-R*b+S*D)*ie,e[11]=(x*b-v*P-M*D)*ie,e[12]=(d*U-u*X-m*T)*ie,e[13]=(t*X-a*U+o*T)*ie,e[14]=(R*z-w*N-y*D)*ie,e[15]=(v*N-x*z+_*D)*ie,this}scale(e){const t=this.elements,a=e.x,o=e.y,l=e.z;return t[0]*=a,t[4]*=o,t[8]*=l,t[1]*=a,t[5]*=o,t[9]*=l,t[2]*=a,t[6]*=o,t[10]*=l,t[3]*=a,t[7]*=o,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],o=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,o))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),o=Math.sin(t),l=1-a,u=e.x,d=e.y,m=e.z,p=l*u,v=l*d;return this.set(p*u+a,p*d-o*m,p*m+o*d,0,p*d+o*m,v*d+a,v*m-o*u,0,p*m-o*d,v*m+o*u,l*m*m+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,o,l,u){return this.set(1,a,l,0,e,1,u,0,t,o,1,0,0,0,0,1),this}compose(e,t,a){const o=this.elements,l=t._x,u=t._y,d=t._z,m=t._w,p=l+l,v=u+u,x=d+d,_=l*p,M=l*v,w=l*x,R=u*v,y=u*x,S=d*x,D=m*p,z=m*v,b=m*x,N=a.x,P=a.y,k=a.z;return o[0]=(1-(R+S))*N,o[1]=(M+b)*N,o[2]=(w-z)*N,o[3]=0,o[4]=(M-b)*P,o[5]=(1-(_+S))*P,o[6]=(y+D)*P,o[7]=0,o[8]=(w+z)*k,o[9]=(y-D)*k,o[10]=(1-(_+R))*k,o[11]=0,o[12]=e.x,o[13]=e.y,o[14]=e.z,o[15]=1,this}decompose(e,t,a){const o=this.elements;e.x=o[12],e.y=o[13],e.z=o[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),t.identity(),this;let u=qa.set(o[0],o[1],o[2]).length();const d=qa.set(o[4],o[5],o[6]).length(),m=qa.set(o[8],o[9],o[10]).length();l<0&&(u=-u),Ci.copy(this);const p=1/u,v=1/d,x=1/m;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=x,Ci.elements[9]*=x,Ci.elements[10]*=x,t.setFromRotationMatrix(Ci),a.x=u,a.y=d,a.z=m,this}makePerspective(e,t,a,o,l,u,d=Wi,m=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(a-o),_=(t+e)/(t-e),M=(a+o)/(a-o);let w,R;if(m)w=l/(u-l),R=u*l/(u-l);else if(d===Wi)w=-(u+l)/(u-l),R=-2*u*l/(u-l);else if(d===Eo)w=-u/(u-l),R=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,a,o,l,u,d=Wi,m=!1){const p=this.elements,v=2/(t-e),x=2/(a-o),_=-(t+e)/(t-e),M=-(a+o)/(a-o);let w,R;if(m)w=1/(u-l),R=u/(u-l);else if(d===Wi)w=-2/(u-l),R=-(u+l)/(u-l);else if(d===Eo)w=-1/(u-l),R=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=R,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let o=0;o<16;o++)if(t[o]!==a[o])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}};Mc.prototype.isMatrix4=!0;let Qt=Mc;const qa=new ee,Ci=new Qt,Hy=new ee(0,0,0),Vy=new ee(1,1,1),Ur=new ee,Ol=new ee,ti=new ee,xg=new Qt,Sg=new Br;class Wr{constructor(e=0,t=0,a=0,o=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=o}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,o=this._order){return this._x=e,this._y=t,this._z=a,this._order=o,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const o=e.elements,l=o[0],u=o[4],d=o[8],m=o[1],p=o[5],v=o[9],x=o[2],_=o[6],M=o[10];switch(t){case"XYZ":this._y=Math.asin(St(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-St(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(St(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-St(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(St(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-St(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:lt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const yg=new ee,Ka=new Br,rr=new Qt,Il=new ee,io=new ee,By=new ee,Wy=new Br,Mg=new ee(1,0,0),Eg=new ee(0,1,0),Tg=new ee(0,0,1),wg={type:"added"},Xy={type:"removed"},ja={type:"childadded",child:null},Td={type:"childremoved",child:null};class Cn extends Yr{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new ee,t=new Wr,a=new Br,o=new ee(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:o},modelViewMatrix:{value:new Qt},normalMatrix:{value:new ht}}),this.matrix=new Qt,this.matrixWorld=new Qt,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.multiply(Ka),this}rotateOnWorldAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.premultiply(Ka),this}rotateX(e){return this.rotateOnAxis(Mg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,t){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Il.copy(e):Il.set(e,t,a);const o=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(io,Il,this.up):rr.lookAt(Il,io,this.up),this.quaternion.setFromRotationMatrix(rr),o&&(rr.extractRotation(o.matrixWorld),Ka.setFromRotationMatrix(rr),this.quaternion.premultiply(Ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Rt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wg),ja.child=e,this.dispatchEvent(ja),ja.child=null):Rt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xy),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wg),ja.child=e,this.dispatchEvent(ja),ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,o=this.children.length;a<o;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const o=this.children;for(let l=0,u=o.length;l<u;l++)o[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,a=e.y,o=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*a-l[8]*o,l[13]+=a-l[1]*t-l[5]*a-l[9]*o,l[14]+=o-l[2]*t-l[6]*a-l[10]*o}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,o=t.length;a<o;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t,a=!1){const o=this.parent;if(e===!0&&o!==null&&o.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const o={};o.uuid=this.uuid,o.type=this.type,o.name=this.name,o.castShadow=this.castShadow,o.receiveShadow=this.receiveShadow,o.visible=this.visible,o.frustumCulled=this.frustumCulled,o.renderOrder=this.renderOrder,o.static=this.static,o.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(o.userData=this.userData),o.layers=this.layers.mask,o.matrix=this.matrix.toArray(),o.up=this.up.toArray(),this.pivot!==null&&(o.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(o.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(o.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(o.type="InstancedMesh",o.count=this.count,o.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(o.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(o.type="BatchedMesh",o.perObjectFrustumCulled=this.perObjectFrustumCulled,o.sortObjects=this.sortObjects,o.drawRanges=this._drawRanges,o.reservedRanges=this._reservedRanges,o.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),o.instanceInfo=this._instanceInfo.map(d=>({...d})),o.availableInstanceIds=this._availableInstanceIds.slice(),o.availableGeometryIds=this._availableGeometryIds.slice(),o.nextIndexStart=this._nextIndexStart,o.nextVertexStart=this._nextVertexStart,o.geometryCount=this._geometryCount,o.maxInstanceCount=this._maxInstanceCount,o.maxVertexCount=this._maxVertexCount,o.maxIndexCount=this._maxIndexCount,o.geometryInitialized=this._geometryInitialized,o.matricesTexture=this._matricesTexture.toJSON(e),o.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(o.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(o.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(o.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?o.background=this.background.toJSON():this.background.isTexture&&(o.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(o.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){o.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];l(e.shapes,x)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(o.bindMode=this.bindMode,o.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),o.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(l(e.materials,this.material[m]));o.material=d}else o.material=l(e.materials,this.material);if(this.children.length>0){o.children=[];for(let d=0;d<this.children.length;d++)o.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){o.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];o.animations.push(l(e.animations,m))}}if(t){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),_=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),M.length>0&&(a.animations=M),w.length>0&&(a.nodes=w)}return a.object=o,a;function u(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const o=e.children[a];this.add(o.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Cn.DEFAULT_UP=new ee(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fo extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Yy={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new ee,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new ee),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new ee,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new ee,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let o=null,l=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const R of e.hand.values()){const y=t.getJointPose(R,a),S=this._getHandJoint(p,R);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=v.position.distanceTo(x.position),M=.02,w=.005;p.inputState.pinching&&_>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(o=t.getPose(e.targetRaySpace,a),o===null&&l!==null&&(o=l),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(Yy)))}return d!==null&&(d.visible=o!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new fo;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Ad(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class yt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const o=e;o&&o.isColor?this.copy(o):typeof o=="number"?this.setHex(o):typeof o=="string"&&this.setStyle(o)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Tt.colorSpaceToWorking(this,t),this}setRGB(e,t,a,o=Tt.workingColorSpace){return this.r=e,this.g=t,this.b=a,Tt.colorSpaceToWorking(this,o),this}setHSL(e,t,a,o=Tt.workingColorSpace){if(e=Dy(e,1),t=St(t,0,1),a=St(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=Ad(u,l,e+1/3),this.g=Ad(u,l,e),this.b=Ad(u,l,e-1/3)}return Tt.colorSpaceToWorking(this,o),this}setStyle(e,t=ii){function a(l){l!==void 0&&parseFloat(l)<1&&lt("Color: Alpha component of "+e+" will be ignored.")}let o;if(o=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=o[1],d=o[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:lt("Color: Unknown color model "+e)}}else if(o=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=o[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);lt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const a=dv[e.toLowerCase()];return a!==void 0?this.setHex(a,t):lt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Tt.workingToColorSpace(Un.copy(this),e),Math.round(St(Un.r*255,0,255))*65536+Math.round(St(Un.g*255,0,255))*256+Math.round(St(Un.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Tt.workingColorSpace){Tt.workingToColorSpace(Un.copy(this),t);const a=Un.r,o=Un.g,l=Un.b,u=Math.max(a,o,l),d=Math.min(a,o,l);let m,p;const v=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=v<=.5?x/(u+d):x/(2-u-d),u){case a:m=(o-l)/x+(o<l?6:0);break;case o:m=(l-a)/x+2;break;case l:m=(a-o)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,t=Tt.workingColorSpace){return Tt.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=ii){Tt.workingToColorSpace(Un.copy(this),e);const t=Un.r,a=Un.g,o=Un.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${o.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(o*255)})`}offsetHSL(e,t,a){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(kl);const a=xd(Fr.h,kl.h,t),o=xd(Fr.s,kl.s,t),l=xd(Fr.l,kl.l,t);return this.setHSL(a,o,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,o=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*o,this.g=l[1]*t+l[4]*a+l[7]*o,this.b=l[2]*t+l[5]*a+l[8]*o,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new yt;yt.NAMES=dv;class $y extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new ee,ar=new ee,Cd=new ee,sr=new ee,Za=new ee,Ja=new ee,Ag=new ee,Rd=new ee,bd=new ee,Pd=new ee,Ld=new Jt,Dd=new Jt,Nd=new Jt;class Li{constructor(e=new ee,t=new ee,a=new ee){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,o){o.subVectors(a,t),Ri.subVectors(e,t),o.cross(Ri);const l=o.lengthSq();return l>0?o.multiplyScalar(1/Math.sqrt(l)):o.set(0,0,0)}static getBarycoord(e,t,a,o,l){Ri.subVectors(o,t),ar.subVectors(a,t),Cd.subVectors(e,t);const u=Ri.dot(Ri),d=Ri.dot(ar),m=Ri.dot(Cd),p=ar.dot(ar),v=ar.dot(Cd),x=u*p-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,M=(p*m-d*v)*_,w=(u*v-d*m)*_;return l.set(1-M-w,w,M)}static containsPoint(e,t,a,o){return this.getBarycoord(e,t,a,o,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,a,o,l,u,d,m){return this.getBarycoord(e,t,a,o,sr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,sr.x),m.addScaledVector(u,sr.y),m.addScaledVector(d,sr.z),m)}static getInterpolatedAttribute(e,t,a,o,l,u){return Ld.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),Ld.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,a),Nd.fromBufferAttribute(e,o),u.setScalar(0),u.addScaledVector(Ld,l.x),u.addScaledVector(Dd,l.y),u.addScaledVector(Nd,l.z),u}static isFrontFacing(e,t,a,o){return Ri.subVectors(a,t),ar.subVectors(e,t),Ri.cross(ar).dot(o)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,o){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[o]),this}setFromAttributeAndIndices(e,t,a,o){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,o),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ri.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,o,l){return Li.getInterpolation(e,this.a,this.b,this.c,t,a,o,l)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,o=this.b,l=this.c;let u,d;Za.subVectors(o,a),Ja.subVectors(l,a),Rd.subVectors(e,a);const m=Za.dot(Rd),p=Ja.dot(Rd);if(m<=0&&p<=0)return t.copy(a);bd.subVectors(e,o);const v=Za.dot(bd),x=Ja.dot(bd);if(v>=0&&x<=v)return t.copy(o);const _=m*x-v*p;if(_<=0&&m>=0&&v<=0)return u=m/(m-v),t.copy(a).addScaledVector(Za,u);Pd.subVectors(e,l);const M=Za.dot(Pd),w=Ja.dot(Pd);if(w>=0&&M<=w)return t.copy(l);const R=M*p-m*w;if(R<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(a).addScaledVector(Ja,d);const y=v*w-M*x;if(y<=0&&x-v>=0&&M-w>=0)return Ag.subVectors(l,o),d=(x-v)/(x-v+(M-w)),t.copy(o).addScaledVector(Ag,d);const S=1/(y+R+_);return u=R*S,d=_*S,t.copy(a).addScaledVector(Za,u).addScaledVector(Ja,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new ee(1/0,1/0,1/0),t=new ee(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),zl.copy(a.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const o=e.children;for(let l=0,u=o.length;l<u;l++)this.expandByObject(o[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Hl.subVectors(this.max,ro),Qa.subVectors(e.a,ro),es.subVectors(e.b,ro),ts.subVectors(e.c,ro),Or.subVectors(es,Qa),Ir.subVectors(ts,es),da.subVectors(Qa,ts);let t=[0,-Or.z,Or.y,0,-Ir.z,Ir.y,0,-da.z,da.y,Or.z,0,-Or.x,Ir.z,0,-Ir.x,da.z,0,-da.x,-Or.y,Or.x,0,-Ir.y,Ir.x,0,-da.y,da.x,0];return!Ud(t,Qa,es,ts,Hl)||(t=[1,0,0,0,1,0,0,0,1],!Ud(t,Qa,es,ts,Hl))?!1:(Vl.crossVectors(Or,Ir),t=[Vl.x,Vl.y,Vl.z],Ud(t,Qa,es,ts,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new ee,new ee,new ee,new ee,new ee,new ee,new ee,new ee],bi=new ee,zl=new Co,Qa=new ee,es=new ee,ts=new ee,Or=new ee,Ir=new ee,da=new ee,ro=new ee,Hl=new ee,Vl=new ee,fa=new ee;function Ud(i,e,t,a,o){for(let l=0,u=i.length-3;l<=u;l+=3){fa.fromArray(i,l);const d=o.x*Math.abs(fa.x)+o.y*Math.abs(fa.y)+o.z*Math.abs(fa.z),m=e.dot(fa),p=t.dot(fa),v=a.dot(fa);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const ln=new ee,Gl=new ct;let qy=0;class gi extends Yr{constructor(e,t,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:qy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Cy,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let o=0,l=this.itemSize;o<l;o++)this.array[e+o]=t.array[a+o];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix3(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)ln.fromBufferAttribute(this,t),ln.applyMatrix4(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)ln.fromBufferAttribute(this,t),ln.applyNormalMatrix(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)ln.fromBufferAttribute(this,t),ln.transformDirection(e),this.setXYZ(t,ln.x,ln.y,ln.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=no(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=$n(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=$n(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),a=$n(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,o){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),a=$n(a,this.array),o=$n(o,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this}setXYZW(e,t,a,o,l){return e*=this.itemSize,this.normalized&&(t=$n(t,this.array),a=$n(a,this.array),o=$n(o,this.array),l=$n(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=o,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class fv extends gi{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class hv extends gi{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class pn extends gi{constructor(e,t,a){super(new Float32Array(e),t,a)}}const Ky=new Co,ao=new ee,Fd=new ee;class ch{constructor(e=new ee,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):Ky.setFromPoints(e).getCenter(a);let o=0;for(let l=0,u=e.length;l<u;l++)o=Math.max(o,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(o),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),o=(a-this.radius)*.5;this.center.addScaledVector(ao,o/a),this.radius+=o}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Fd)),this.expandByPoint(ao.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jy=0;const pi=new Qt,Od=new Cn,ns=new ee,ni=new Co,so=new Co,Sn=new ee;class jn extends Yr{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ry(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new ht().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const o=this.attributes.tangent;return o!==void 0&&(o.transformDirection(e),o.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return pi.makeRotationFromQuaternion(e),this.applyMatrix4(pi),this}rotateX(e){return pi.makeRotationX(e),this.applyMatrix4(pi),this}rotateY(e){return pi.makeRotationY(e),this.applyMatrix4(pi),this}rotateZ(e){return pi.makeRotationZ(e),this.applyMatrix4(pi),this}translate(e,t,a){return pi.makeTranslation(e,t,a),this.applyMatrix4(pi),this}scale(e,t,a){return pi.makeScale(e,t,a),this.applyMatrix4(pi),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let o=0,l=e.length;o<l;o++){const u=e[o];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new pn(a,3))}else{const a=Math.min(e.length,t.count);for(let o=0;o<a;o++){const l=e[o];t.setXYZ(o,l.x,l.y,l.z||0)}e.length>t.count&&lt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new ee(-1/0,-1/0,-1/0),new ee(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,o=t.length;a<o;a++){const l=t[a];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Rt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ch);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Rt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new ee,1/0);return}if(e){const a=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];so.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ni.min,so.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,so.max),ni.expandByPoint(Sn)):(ni.expandByPoint(so.min),ni.expandByPoint(so.max))}ni.getCenter(a);let o=0;for(let l=0,u=e.count;l<u;l++)Sn.fromBufferAttribute(e,l),o=Math.max(o,a.distanceToSquared(Sn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Sn.fromBufferAttribute(d,p),m&&(ns.fromBufferAttribute(e,p),Sn.add(ns)),o=Math.max(o,a.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(o),isNaN(this.boundingSphere.radius)&&Rt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Rt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,o=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new gi(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new ee,m[T]=new ee;const p=new ee,v=new ee,x=new ee,_=new ct,M=new ct,w=new ct,R=new ee,y=new ee;function S(T,U,V){p.fromBufferAttribute(a,T),v.fromBufferAttribute(a,U),x.fromBufferAttribute(a,V),_.fromBufferAttribute(l,T),M.fromBufferAttribute(l,U),w.fromBufferAttribute(l,V),v.sub(p),x.sub(p),M.sub(_),w.sub(_);const X=1/(M.x*w.y-w.x*M.y);isFinite(X)&&(R.copy(v).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(X),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(X),d[T].add(R),d[U].add(R),d[V].add(R),m[T].add(y),m[U].add(y),m[V].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,U=D.length;T<U;++T){const V=D[T],X=V.start,J=V.count;for(let ne=X,G=X+J;ne<G;ne+=3)S(e.getX(ne+0),e.getX(ne+1),e.getX(ne+2))}const z=new ee,b=new ee,N=new ee,P=new ee;function k(T){N.fromBufferAttribute(o,T),P.copy(N);const U=d[T];z.copy(U),z.sub(N.multiplyScalar(N.dot(U))).normalize(),b.crossVectors(P,U);const X=b.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,X)}for(let T=0,U=D.length;T<U;++T){const V=D[T],X=V.start,J=V.count;for(let ne=X,G=X+J;ne<G;ne+=3)k(e.getX(ne+0)),k(e.getX(ne+1)),k(e.getX(ne+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==t.count)a=new gi(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,M=a.count;_<M;_++)a.setXYZ(_,0,0,0);const o=new ee,l=new ee,u=new ee,d=new ee,m=new ee,p=new ee,v=new ee,x=new ee;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),R=e.getX(_+1),y=e.getX(_+2);o.fromBufferAttribute(t,w),l.fromBufferAttribute(t,R),u.fromBufferAttribute(t,y),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),d.fromBufferAttribute(a,w),m.fromBufferAttribute(a,R),p.fromBufferAttribute(a,y),d.add(v),m.add(v),p.add(v),a.setXYZ(w,d.x,d.y,d.z),a.setXYZ(R,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)o.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),v.subVectors(u,l),x.subVectors(o,l),v.cross(x),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,_=new p.constructor(m.length*v);let M=0,w=0;for(let R=0,y=m.length;R<y;R++){d.isInterleavedBufferAttribute?M=m[R]*d.data.stride+d.offset:M=m[R]*v;for(let S=0;S<v;S++)_[w++]=p[M++]}return new gi(_,v,x)}if(this.index===null)return lt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,a=this.index.array,o=this.attributes;for(const d in o){const m=o[d],p=e(m,a);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const m=[],p=l[d];for(let v=0,x=p.length;v<x;v++){const _=p[v],M=e(_,a);m.push(M)}t.morphAttributes[d]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const o={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(o[m]=v,l=!0)}l&&(e.data.morphAttributes=o,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const o=e.attributes;for(const p in o){const v=o[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let _=0,M=x.length;_<M;_++)v.push(x[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Id=new ee,Zy=new ee,Jy=new ht;class ur{constructor(e=new ee(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,o){return this.normal.set(e,t,a),this.constant=o,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const o=Id.subVectors(a,t).cross(Zy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(o,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,a=!0){const o=e.delta(Id),l=this.normal.dot(o);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return a===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(o,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||Jy.getNormalMatrix(e),o=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-o.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Qy=0;class Ro extends Yr{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=mo,this.side=Sa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=X0,this.blendDst=Y0,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new yt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_d,this.stencilZFail=_d,this.stencilZPass=_d,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){lt(`Material: parameter '${t}' has value of undefined.`);continue}const o=this[t];if(o===void 0){lt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}o&&o.isColor?o.set(a):o&&o.isVector2&&a&&a.isVector2||o&&o.isEuler&&a&&a.isEuler||o&&o.isVector3&&a&&a.isVector3?o.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function o(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}if(t){const l=o(e.textures),u=o(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new yt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new ur().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new ct().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new ct().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const o=t.length;a=new Array(o);for(let l=0;l!==o;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lr=new ee,kd=new ee,Bl=new ee,Wl=new ee;class uh{constructor(e=new ee,t=new ee(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,a,o){kd.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(kd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),d=Wl.dot(this.direction),m=-Wl.dot(Bl),p=Wl.lengthSq(),v=Math.abs(1-u*u);let x,_,M,w;if(v>0)if(x=u*m-d,_=u*d-m,w=l*v,x>=0)if(_>=-w)if(_<=w){const R=1/v;x*=R,_*=R,M=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _=-l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _<=-w?(x=Math.max(0,-(-u*l+d)),_=x>0?-l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p):_<=w?(x=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(x=Math.max(0,-(u*l+d)),_=x>0?l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p);else _=u>0?-l:l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),o&&o.copy(kd).addScaledVector(Bl,_),M}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);const a=lr.dot(this.direction),o=lr.dot(lr)-a*a,l=e.radius*e.radius;if(o>l)return null;const u=Math.sqrt(l-o),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,o,l,u,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,o=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,o=(e.min.x-_.x)*p),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),a>u||l>o||((l>a||isNaN(a))&&(a=l),(u<o||isNaN(o))&&(o=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>o)||((d>a||a!==a)&&(a=d),(m<o||o!==o)&&(o=m),o<0)?null:this.at(a>=0?a:o,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,a,o,l){const u=this.origin,d=this.direction,m=d.x,p=d.y,v=d.z,x=e.x-u.x,_=e.y-u.y,M=e.z-u.z,w=t.x-u.x,R=t.y-u.y,y=t.z-u.z,S=a.x-u.x,D=a.y-u.y,z=a.z-u.z,b=Math.abs(m),N=Math.abs(p),P=Math.abs(v);let k,T,U,V,X,J,ne,G,ie,oe,le,q;if(b>=N&&b>=P?(U=m,J=x,ie=w,q=S,m>=0?(k=p,T=v,V=_,X=M,ne=R,G=y,oe=D,le=z):(k=v,T=p,V=M,X=_,ne=y,G=R,oe=z,le=D)):N>=P?(U=p,J=_,ie=R,q=D,p>=0?(k=v,T=m,V=M,X=x,ne=y,G=w,oe=z,le=S):(k=m,T=v,V=x,X=M,ne=w,G=y,oe=S,le=z)):(U=v,J=M,ie=y,q=z,v>=0?(k=m,T=p,V=x,X=_,ne=w,G=R,oe=S,le=D):(k=p,T=m,V=_,X=x,ne=R,G=w,oe=D,le=S)),U===0)return null;const j=k/U,O=T/U,L=1/U,K=V-j*J,_e=X-O*J,He=ne-j*ie,Ce=G-O*ie,we=oe-j*q,ae=le-O*q,ue=we*Ce-ae*He,Ee=K*ae-_e*we,Ye=He*_e-Ce*K;if(o){if(ue<0||Ee<0||Ye<0)return null}else if((ue<0||Ee<0||Ye<0)&&(ue>0||Ee>0||Ye>0))return null;const be=ue+Ee+Ye;if(be===0)return null;const at=L*(ue*J+Ee*ie+Ye*q);return(be>0?at<0:at>0)?null:this.at(at/be,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dh extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new yt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=$0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cg=new Qt,ha=new uh,Xl=new ch,Rg=new ee,Yl=new ee,$l=new ee,ql=new ee,zd=new ee,Kl=new ee,bg=new ee,jl=new ee;class ai extends Cn{constructor(e=new jn,t=new dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const o=t[a[0]];if(o!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=o.length;l<u;l++){const d=o[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const a=this.geometry,o=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(o,e);const d=this.morphTargetInfluences;if(l&&d){Kl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=d[m],x=l[m];v!==0&&(zd.fromBufferAttribute(x,e),u?Kl.addScaledVector(zd,v):Kl.addScaledVector(zd.sub(t),v))}t.add(Kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const a=this.geometry,o=this.material,l=this.matrixWorld;o!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Xl.copy(a.boundingSphere),Xl.applyMatrix4(l),ha.copy(e.ray).recast(e.near),!(Xl.containsPoint(ha.origin)===!1&&(ha.intersectSphere(Xl,Rg)===null||ha.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(l).invert(),ha.copy(e.ray).applyMatrix4(Cg),!(a.boundingBox!==null&&ha.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ha)))}_computeIntersections(e,t,a){let o;const l=this.geometry,u=this.material,d=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,_=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,R=_.length;w<R;w++){const y=_[w],S=u[y.materialIndex],D=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let b=D,N=z;b<N;b+=3){const P=d.getX(b),k=d.getX(b+1),T=d.getX(b+2);o=Zl(this,S,e,a,p,v,x,P,k,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),R=Math.min(d.count,M.start+M.count);for(let y=w,S=R;y<S;y+=3){const D=d.getX(y),z=d.getX(y+1),b=d.getX(y+2);o=Zl(this,u,e,a,p,v,x,D,z,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,R=_.length;w<R;w++){const y=_[w],S=u[y.materialIndex],D=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let b=D,N=z;b<N;b+=3){const P=b,k=b+1,T=b+2;o=Zl(this,S,e,a,p,v,x,P,k,T),o&&(o.faceIndex=Math.floor(b/3),o.face.materialIndex=y.materialIndex,t.push(o))}}else{const w=Math.max(0,M.start),R=Math.min(m.count,M.start+M.count);for(let y=w,S=R;y<S;y+=3){const D=y,z=y+1,b=y+2;o=Zl(this,u,e,a,p,v,x,D,z,b),o&&(o.faceIndex=Math.floor(y/3),t.push(o))}}}}function eM(i,e,t,a,o,l,u,d){let m;if(e.side===Kn?m=a.intersectTriangle(u,l,o,!0,d):m=a.intersectTriangle(o,l,u,e.side===Sa,d),m===null)return null;jl.copy(d),jl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(jl);return p<t.near||p>t.far?null:{distance:p,point:jl.clone(),object:i}}function Zl(i,e,t,a,o,l,u,d,m,p){i.getVertexPosition(d,Yl),i.getVertexPosition(m,$l),i.getVertexPosition(p,ql);const v=eM(i,e,t,a,Yl,$l,ql,bg);if(v){const x=new ee;Li.getBarycoord(bg,Yl,$l,ql,x),o&&(v.uv=Li.getInterpolatedAttribute(o,d,m,p,x,new ct)),l&&(v.uv1=Li.getInterpolatedAttribute(l,d,m,p,x,new ct)),u&&(v.normal=Li.getInterpolatedAttribute(u,d,m,p,x,new ee),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new ee,materialIndex:0};Li.getNormal(Yl,$l,ql,_.normal),v.face=_,v.barycoord=x}return v}class tM extends Hn{constructor(e=null,t=1,a=1,o,l,u,d,m,p=wn,v=wn,x,_){super(null,u,d,m,p,v,o,l,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=new ch,nM=new ct(.5,.5),Jl=new ee;class fh{constructor(e=new ur,t=new ur,a=new ur,o=new ur,l=new ur,u=new ur){this.planes=[e,t,a,o,l,u]}set(e,t,a,o,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(a),d[3].copy(o),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Wi,a=!1){const o=this.planes,l=e.elements,u=l[0],d=l[1],m=l[2],p=l[3],v=l[4],x=l[5],_=l[6],M=l[7],w=l[8],R=l[9],y=l[10],S=l[11],D=l[12],z=l[13],b=l[14],N=l[15];if(o[0].setComponents(p-u,M-v,S-w,N-D).normalize(),o[1].setComponents(p+u,M+v,S+w,N+D).normalize(),o[2].setComponents(p+d,M+x,S+R,N+z).normalize(),o[3].setComponents(p-d,M-x,S-R,N-z).normalize(),a)o[4].setComponents(m,_,y,b).normalize(),o[5].setComponents(p-m,M-_,S-y,N-b).normalize();else if(o[4].setComponents(p-m,M-_,S-y,N-b).normalize(),t===Wi)o[5].setComponents(p+m,M+_,S+y,N+b).normalize();else if(t===Eo)o[5].setComponents(m,_,y,b).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pa)}intersectsSprite(e){pa.center.set(0,0,0);const t=nM.distanceTo(e.center);return pa.radius=.7071067811865476+t,pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(pa)}intersectsSphere(e){const t=this.planes,a=e.center,o=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<o)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const o=t[a];if(Jl.x=o.normal.x>0?e.max.x:e.min.x,Jl.y=o.normal.y>0?e.max.y:e.min.y,Jl.z=o.normal.z>0?e.max.z:e.min.z,o.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends Hn{constructor(e=[],t=ya,a,o,l,u,d,m,p,v){super(e,t,a,o,l,u,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class To extends Hn{constructor(e,t,a=Yi,o,l,u,d=wn,m=wn,p,v=mr,x=1){if(v!==mr&&v!==va)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,o,l,u,d,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class iM extends To{constructor(e,t=Yi,a=ya,o,l,u=wn,d=wn,m,p=mr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,a,o,l,u,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mv extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bo extends jn{constructor(e=1,t=1,a=1,o=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:o,heightSegments:l,depthSegments:u};const d=this;o=Math.floor(o),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],x=[];let _=0,M=0;w("z","y","x",-1,-1,a,t,e,u,l,0),w("z","y","x",1,-1,a,t,-e,u,l,1),w("x","z","y",1,1,e,a,t,o,u,2),w("x","z","y",1,-1,e,a,-t,o,u,3),w("x","y","z",1,-1,e,t,a,o,l,4),w("x","y","z",-1,-1,e,t,-a,o,l,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(x,2));function w(R,y,S,D,z,b,N,P,k,T,U){const V=b/k,X=N/T,J=b/2,ne=N/2,G=P/2,ie=k+1,oe=T+1;let le=0,q=0;const j=new ee;for(let O=0;O<oe;O++){const L=O*X-ne;for(let K=0;K<ie;K++){const _e=K*V-J;j[R]=_e*D,j[y]=L*z,j[S]=G,p.push(j.x,j.y,j.z),j[R]=0,j[y]=0,j[S]=P>0?1:-1,v.push(j.x,j.y,j.z),x.push(K/k),x.push(1-O/T),le+=1}}for(let O=0;O<T;O++)for(let L=0;L<k;L++){const K=_+L+ie*O,_e=_+L+ie*(O+1),He=_+(L+1)+ie*(O+1),Ce=_+(L+1)+ie*O;m.push(K,_e,Ce),m.push(_e,He,Ce),q+=6}d.addGroup(M,q,U),M+=q,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bc extends jn{constructor(e=1,t=1,a=1,o=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:o};const l=e/2,u=t/2,d=Math.floor(a),m=Math.floor(o),p=d+1,v=m+1,x=e/d,_=t/m,M=[],w=[],R=[],y=[];for(let S=0;S<v;S++){const D=S*_-u;for(let z=0;z<p;z++){const b=z*x-l;w.push(b,-D,0),R.push(0,0,1),y.push(z/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<d;D++){const z=D+p*S,b=D+p*(S+1),N=D+1+p*(S+1),P=D+1+p*S;M.push(z,b,P),M.push(b,N,P)}this.setIndex(M),this.setAttribute("position",new pn(w,3)),this.setAttribute("normal",new pn(R,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}class hh extends jn{constructor(e=1,t=32,a=16,o=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:o,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const v=[],x=new ee,_=new ee,M=[],w=[],R=[],y=[];for(let S=0;S<=a;S++){const D=[],z=S/a,b=u+z*d,N=e*Math.cos(b),P=Math.sqrt(e*e-N*N);let k=0;S===0&&u===0?k=.5/t:S===a&&m===Math.PI&&(k=-.5/t);for(let T=0;T<=t;T++){const U=T/t,V=o+U*l;x.x=-P*Math.cos(V),x.y=N,x.z=P*Math.sin(V),w.push(x.x,x.y,x.z),_.copy(x).normalize(),R.push(_.x,_.y,_.z),y.push(U+k,1-z),D.push(p++)}v.push(D)}for(let S=0;S<a;S++)for(let D=0;D<t;D++){const z=v[S][D+1],b=v[S][D],N=v[S+1][D],P=v[S+1][D+1];(S!==0||u>0)&&M.push(z,b,P),(S!==a-1||m<Math.PI)&&M.push(b,N,P)}this.setIndex(M),this.setAttribute("position",new pn(w,3)),this.setAttribute("normal",new pn(R,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ph extends jn{constructor(e=1,t=.4,a=12,o=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:o,arc:l,thetaStart:u,thetaLength:d},a=Math.floor(a),o=Math.floor(o);const m=[],p=[],v=[],x=[],_=new ee,M=new ee,w=new ee;for(let R=0;R<=a;R++){const y=u+R/a*d;for(let S=0;S<=o;S++){const D=S/o*l;M.x=(e+t*Math.cos(y))*Math.cos(D),M.y=(e+t*Math.cos(y))*Math.sin(D),M.z=t*Math.sin(y),p.push(M.x,M.y,M.z),_.x=e*Math.cos(D),_.y=e*Math.sin(D),w.subVectors(M,_).normalize(),v.push(w.x,w.y,w.z),x.push(S/o),x.push(R/a)}}for(let R=1;R<=a;R++)for(let y=1;y<=o;y++){const S=(o+1)*R+y-1,D=(o+1)*(R-1)+y-1,z=(o+1)*(R-1)+y,b=(o+1)*R+y;m.push(S,D,b),m.push(D,z,b)}this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function gs(i){const e={};for(const t in i){e[t]={};for(const a in i[t]){const o=i[t][a];if(Pg(o))o.isRenderTargetTexture?(lt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=o.clone();else if(Array.isArray(o))if(Pg(o[0])){const l=[];for(let u=0,d=o.length;u<d;u++)l[u]=o[u].clone();e[t][a]=l}else e[t][a]=o.slice();else e[t][a]=o}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const a=gs(i[t]);for(const o in a)e[o]=a[o]}return e}function Pg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Tt.workingColorSpace}const aM={clone:gs,merge:zn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class qi extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const o in this.uniforms){const u=this.uniforms[o].value;u&&u.isTexture?t.uniforms[o]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[o]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[o]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[o]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[o]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[o]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[o]={type:"m4",value:u.toArray()}:t.uniforms[o]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const o in this.extensions)this.extensions[o]===!0&&(a[o]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const a in e.uniforms){const o=e.uniforms[a];switch(this.uniforms[a]={},o.type){case"t":this.uniforms[a].value=t[o.value]||null;break;case"c":this.uniforms[a].value=new yt().setHex(o.value);break;case"v2":this.uniforms[a].value=new ct().fromArray(o.value);break;case"v3":this.uniforms[a].value=new ee().fromArray(o.value);break;case"v4":this.uniforms[a].value=new Jt().fromArray(o.value);break;case"m3":this.uniforms[a].value=new ht().fromArray(o.value);break;case"m4":this.uniforms[a].value=new Qt().fromArray(o.value);break;default:this.uniforms[a].value=o.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lM extends qi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lg extends Ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new yt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new yt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new ct(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cM extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uM extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ng(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ng(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ng(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class dM{constructor(e,t,a){const o=this;let l=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(v){d++,l===!1&&o.onStart!==void 0&&o.onStart(v,u,d),l=!0},this.itemEnd=function(v){u++,o.onProgress!==void 0&&o.onProgress(v,u,d),u===d&&(l=!1,o.onLoad!==void 0&&o.onLoad())},this.itemError=function(v){o.onError!==void 0&&o.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return p.push(v,x),this},this.removeHandler=function(v){const x=p.indexOf(v);return x!==-1&&p.splice(x,2),this},this.getHandler=function(v){for(let x=0,_=p.length;x<_;x+=2){const M=p[x],w=p[x+1];if(M.global&&(M.lastIndex=0),M.test(v))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fM=new dM;class mh{constructor(e){this.manager=e!==void 0?e:fM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const a=this;return new Promise(function(o,l){a.load(e,o,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class hM extends Error{constructor(e,t){super(e),this.response=t}}class pM extends mh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,o){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Dg.get(`file:${e}`);if(l!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0);return}if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:a,onError:o});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:a,onError:o});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&lt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=cr[e],x=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=_?parseInt(_):0,w=M!==0;let R=0;const y=new ReadableStream({start(S){D();function D(){x.read().then(({done:z,value:b})=>{if(z)S.close();else{R+=b.byteLength;const N=new ProgressEvent("progress",{lengthComputable:w,loaded:R,total:M});for(let P=0,k=v.length;P<k;P++){const T=v[P];T.onProgress&&T.onProgress(N)}S.enqueue(b),D()}},z=>{S.error(z)})}}});return new Response(y)}else throw new hM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),_=x&&x[1]?x[1].toLowerCase():void 0,M=new TextDecoder(_);return p.arrayBuffer().then(w=>M.decode(w))}}}).then(p=>{Dg.add(`file:${e}`,p);const v=cr[e];delete cr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=cr[e];if(v===void 0)throw this.manager.itemError(e),p;delete cr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vv extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new yt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mM extends vv{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new yt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hd=new Qt,Ug=new ee,Fg=new ee;class gM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new ct(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new Qt,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new ct(1,1),this._viewportCount=1,this._viewports=[new Jt(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ug),Fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,a,o){Hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(Hd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=o?o.z/l.x:1,d=o?o.w/l.y:1,m=o?o.x/l.x:0,p=o?o.y/l.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new ee,ec=new Br,zi=new ee;class _v extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Qt,this.projectionMatrix=new Qt,this.projectionMatrixInverse=new Qt,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,a=!1){super.updateWorldMatrix(e,t,a),this.matrixWorld.decompose(Ql,ec,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kr=new ee,Og=new ct,Ig=new ct;class mi extends _v{constructor(e=50,t=1,a=.1,o=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=o,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,Og,Ig),t.subVectors(Ig,Og)}setViewOffset(e,t,a,o,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fc*.5*this.fov)/this.zoom,a=2*t,o=this.aspect*a,l=-.5*o;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*o/m,t-=u.offsetY*a/p,o*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+o,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gh extends _v{constructor(e=-1,t=1,a=1,o=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=o,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,o,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=o,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,o=(this.top+this.bottom)/2;let l=a-e,u=a+e,d=o+t,m=o-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vM extends gM{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kg extends vv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new vM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const is=-90,rs=1;class _M extends Cn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const o=new mi(is,rs,e,t);o.layers=this.layers,this.add(o);const l=new mi(is,rs,e,t);l.layers=this.layers,this.add(l);const u=new mi(is,rs,e,t);u.layers=this.layers,this.add(u);const d=new mi(is,rs,e,t);d.layers=this.layers,this.add(d);const m=new mi(is,rs,e,t);m.layers=this.layers,this.add(m);const p=new mi(is,rs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,o,l,u,d,m]=t;for(const p of t)this.remove(p);if(e===Wi)a.up.set(0,1,0),a.lookAt(1,0,0),o.up.set(0,1,0),o.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Eo)a.up.set(0,-1,0),a.lookAt(-1,0,0),o.up.set(0,-1,0),o.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:o}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,m,p,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const R=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(a,1,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(a,2,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,3,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(a,4,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),a.texture.generateMipmaps=R,e.setRenderTarget(a,5,o),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,_,M),e.xr.enabled=w,a.texture.needsPMREMUpdate=!0}}class xM extends mi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zg=new Qt;class SM{constructor(e,t,a=0,o=1/0){this.ray=new uh(e,t),this.near=a,this.far=o,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Rt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zg),this}intersectObject(e,t=!0,a=[]){return Hf(e,this,a,t),a.sort(Hg),a}intersectObjects(e,t=!0,a=[]){for(let o=0,l=e.length;o<l;o++)Hf(e[o],this,a,t);return a.sort(Hg),a}}function Hg(i,e){return i.distance-e.distance}function Hf(i,e,t,a){let o=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(o=!1),o===!0&&a===!0){const l=i.children;for(let u=0,d=l.length;u<d;u++)Hf(l[u],e,t,!0)}}class Vg{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=St(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(St(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mh=class Mh{constructor(e,t,a,o){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,a,o)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let a=0;a<4;a++)this.elements[a]=e[a+t];return this}set(e,t,a,o){const l=this.elements;return l[0]=e,l[2]=t,l[1]=a,l[3]=o,this}};Mh.prototype.isMatrix2=!0;let Gg=Mh;class yM extends Yr{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bg(i,e,t,a){const o=MM(a);switch(t){case sv:return i*e;case lv:return i*e/o.components*o.byteLength;case nh:return i*e/o.components*o.byteLength;case Ma:return i*e*2/o.components*o.byteLength;case ih:return i*e*2/o.components*o.byteLength;case ov:return i*e*3/o.components*o.byteLength;case Di:return i*e*4/o.components*o.byteLength;case rh:return i*e*4/o.components*o.byteLength;case lc:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cf:case df:return Math.max(i,16)*Math.max(e,8)/4;case lf:case uf:return Math.max(i,8)*Math.max(e,8)/2;case ff:case hf:case mf:case gf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pf:case vc:case vf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Df:case Nf:case Uf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ff:case Of:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _c:case If:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MM(i){switch(i){case ri:case nv:return{byteLength:1,components:1};case yo:case iv:case $i:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case Yi:case Qf:case Bi:return{byteLength:4,components:1};case rv:case av:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?lt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let i=null,e=!1,t=null,a=null;function o(l,u){a=i.requestAnimationFrame(o),t(l,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(a=i.requestAnimationFrame(o),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function EM(i){const e=new WeakMap;function t(d,m){const p=d.array,v=d.usage,x=p.byteLength,_=i.createBuffer();i.bindBuffer(m,_),i.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=i.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const v=m.array,x=m.updateRanges;if(i.bindBuffer(p,d),x.length===0)i.bufferSubData(p,0,v);else{x.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<x.length;M++){const w=x[_],R=x[M];R.start<=w.start+w.count+1?w.count=Math.max(w.count,R.start+R.count-w.start):(++_,x[_]=R)}x.length=_+1;for(let M=0,w=x.length;M<w;M++){const R=x[M];i.bufferSubData(p,R.start*v.BYTES_PER_ELEMENT,v,R.start,R.count)}m.clearUpdateRanges()}m.onUploadCallback()}function o(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(i.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:o,remove:l,update:u}}var TM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,wM=`#ifdef USE_ALPHAHASH
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
#endif`,AM=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,CM=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,RM=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,bM=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,PM=`#ifdef USE_AOMAP
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
#endif`,LM=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,DM=`#ifdef USE_BATCHING
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
#endif`,NM=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,UM=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,FM=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,OM=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,IM=`#ifdef USE_IRIDESCENCE
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
#endif`,kM=`#ifdef USE_BUMPMAP
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
#endif`,zM=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,HM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,VM=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,GM=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,BM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,WM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,XM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,YM=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,$M=`#define PI 3.141592653589793
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
} // validated`,qM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,KM=`vec3 transformedNormal = objectNormal;
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
#endif`,jM=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ZM=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,JM=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,QM=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,eE="gl_FragColor = linearToOutputTexel( gl_FragColor );",tE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,nE=`#ifdef USE_ENVMAP
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
#endif`,iE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,rE=`#ifdef USE_ENVMAP
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
#endif`,aE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,sE=`#ifdef USE_ENVMAP
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
#endif`,oE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,lE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,cE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,uE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,dE=`#ifdef USE_GRADIENTMAP
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
}`,fE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,hE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,pE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,mE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,gE=`#ifdef USE_ENVMAP
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
#endif`,vE=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,_E=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,xE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,SE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,yE=`PhysicalMaterial material;
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
#endif`,ME=`uniform sampler2D dfgLUT;
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
}`,EE=`
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
#endif`,TE=`#if defined( RE_IndirectDiffuse )
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
#endif`,wE=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,AE=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,CE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,RE=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,bE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,PE=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,LE=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,DE=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,NE=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,UE=`#if defined( USE_POINTS_UV )
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
#endif`,FE=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,OE=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,IE=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,kE=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,zE=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,HE=`#ifdef USE_MORPHTARGETS
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
#endif`,VE=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,GE=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,BE=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,WE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,XE=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,YE=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,$E=`#ifdef USE_NORMALMAP
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
#endif`,qE=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,KE=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,jE=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,ZE=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,JE=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,QE=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,eT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,tT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,nT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,iT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,rT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,aT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,sT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,oT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,lT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,cT=`float getShadowMask() {
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
}`,uT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,dT=`#ifdef USE_SKINNING
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
#endif`,fT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,hT=`#ifdef USE_SKINNING
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
#endif`,pT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,mT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,gT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,vT=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,_T=`#ifdef USE_TRANSMISSION
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
#endif`,xT=`#ifdef USE_TRANSMISSION
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
#endif`,ST=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,yT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,MT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ET=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const TT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,wT=`uniform sampler2D t2D;
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
}`,AT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,CT=`#ifdef ENVMAP_TYPE_CUBE
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
}`,RT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,bT=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,PT=`#include <common>
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
}`,LT=`#if DEPTH_PACKING == 3200
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
}`,DT=`#define DISTANCE
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
}`,NT=`#define DISTANCE
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
}`,UT=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,FT=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,OT=`uniform float scale;
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
}`,IT=`uniform vec3 diffuse;
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
}`,kT=`#include <common>
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
}`,zT=`uniform vec3 diffuse;
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
}`,HT=`#define LAMBERT
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
}`,VT=`#define LAMBERT
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
}`,GT=`#define MATCAP
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
}`,BT=`#define MATCAP
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
}`,WT=`#define NORMAL
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
}`,XT=`#define NORMAL
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
}`,YT=`#define PHONG
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
}`,$T=`#define PHONG
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
}`,qT=`#define STANDARD
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
}`,KT=`#define STANDARD
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
}`,jT=`#define TOON
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
}`,ZT=`#define TOON
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
}`,JT=`uniform float size;
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
}`,QT=`uniform vec3 diffuse;
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
}`,ew=`#include <common>
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
}`,tw=`uniform vec3 color;
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
}`,nw=`uniform float rotation;
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
}`,iw=`uniform vec3 diffuse;
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
}`,_t={alphahash_fragment:TM,alphahash_pars_fragment:wM,alphamap_fragment:AM,alphamap_pars_fragment:CM,alphatest_fragment:RM,alphatest_pars_fragment:bM,aomap_fragment:PM,aomap_pars_fragment:LM,batching_pars_vertex:DM,batching_vertex:NM,begin_vertex:UM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:IM,bumpmap_pars_fragment:kM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:GM,color_fragment:BM,color_pars_fragment:WM,color_pars_vertex:XM,color_vertex:YM,common:$M,cube_uv_reflection_fragment:qM,defaultnormal_vertex:KM,displacementmap_pars_vertex:jM,displacementmap_vertex:ZM,emissivemap_fragment:JM,emissivemap_pars_fragment:QM,colorspace_fragment:eE,colorspace_pars_fragment:tE,envmap_fragment:nE,envmap_common_pars_fragment:iE,envmap_pars_fragment:rE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:gE,envmap_vertex:sE,fog_vertex:oE,fog_pars_vertex:lE,fog_fragment:cE,fog_pars_fragment:uE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:fE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:pE,lights_pars_begin:mE,lights_toon_fragment:vE,lights_toon_pars_fragment:_E,lights_phong_fragment:xE,lights_phong_pars_fragment:SE,lights_physical_fragment:yE,lights_physical_pars_fragment:ME,lights_fragment_begin:EE,lights_fragment_maps:TE,lights_fragment_end:wE,lightprobes_pars_fragment:AE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:PE,map_fragment:LE,map_pars_fragment:DE,map_particle_fragment:NE,map_particle_pars_fragment:UE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:OE,morphinstance_vertex:IE,morphcolor_vertex:kE,morphnormal_vertex:zE,morphtarget_pars_vertex:HE,morphtarget_vertex:VE,normal_fragment_begin:GE,normal_fragment_maps:BE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:YE,normalmap_pars_fragment:$E,clearcoat_normal_fragment_begin:qE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:ZE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:eT,project_vertex:tT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:aT,shadowmap_pars_fragment:sT,shadowmap_pars_vertex:oT,shadowmap_vertex:lT,shadowmask_pars_fragment:cT,skinbase_vertex:uT,skinning_pars_vertex:dT,skinning_vertex:fT,skinnormal_vertex:hT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:vT,transmission_fragment:_T,transmission_pars_fragment:xT,uv_pars_fragment:ST,uv_pars_vertex:yT,uv_vertex:MT,worldpos_vertex:ET,background_vert:TT,background_frag:wT,backgroundCube_vert:AT,backgroundCube_frag:CT,cube_vert:RT,cube_frag:bT,depth_vert:PT,depth_frag:LT,distance_vert:DT,distance_frag:NT,equirect_vert:UT,equirect_frag:FT,linedashed_vert:OT,linedashed_frag:IT,meshbasic_vert:kT,meshbasic_frag:zT,meshlambert_vert:HT,meshlambert_frag:VT,meshmatcap_vert:GT,meshmatcap_frag:BT,meshnormal_vert:WT,meshnormal_frag:XT,meshphong_vert:YT,meshphong_frag:$T,meshphysical_vert:qT,meshphysical_frag:KT,meshtoon_vert:jT,meshtoon_frag:ZT,points_vert:JT,points_frag:QT,shadow_vert:ew,shadow_frag:tw,sprite_vert:nw,sprite_frag:iw},ke={common:{diffuse:{value:new yt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new ht}},envmap:{envMap:{value:null},envMapRotation:{value:new ht},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new ht}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new ht}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new ht},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new ht},normalScale:{value:new ct(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new ht},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new ht}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new ht}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new ht}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new yt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new ee},probesMax:{value:new ee},probesResolution:{value:new ee}},points:{diffuse:{value:new yt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0},uvTransform:{value:new ht}},sprite:{diffuse:{value:new yt(16777215)},opacity:{value:1},center:{value:new ct(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new ht},alphaMap:{value:null},alphaMapTransform:{value:new ht},alphaTest:{value:0}}},Gi={basic:{uniforms:zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.fog]),vertexShader:_t.meshbasic_vert,fragmentShader:_t.meshbasic_frag},lambert:{uniforms:zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},envMapIntensity:{value:1}}]),vertexShader:_t.meshlambert_vert,fragmentShader:_t.meshlambert_frag},phong:{uniforms:zn([ke.common,ke.specularmap,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},specular:{value:new yt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:_t.meshphong_vert,fragmentShader:_t.meshphong_frag},standard:{uniforms:zn([ke.common,ke.envmap,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.roughnessmap,ke.metalnessmap,ke.fog,ke.lights,{emissive:{value:new yt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag},toon:{uniforms:zn([ke.common,ke.aomap,ke.lightmap,ke.emissivemap,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.gradientmap,ke.fog,ke.lights,{emissive:{value:new yt(0)}}]),vertexShader:_t.meshtoon_vert,fragmentShader:_t.meshtoon_frag},matcap:{uniforms:zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,ke.fog,{matcap:{value:null}}]),vertexShader:_t.meshmatcap_vert,fragmentShader:_t.meshmatcap_frag},points:{uniforms:zn([ke.points,ke.fog]),vertexShader:_t.points_vert,fragmentShader:_t.points_frag},dashed:{uniforms:zn([ke.common,ke.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:_t.linedashed_vert,fragmentShader:_t.linedashed_frag},depth:{uniforms:zn([ke.common,ke.displacementmap]),vertexShader:_t.depth_vert,fragmentShader:_t.depth_frag},normal:{uniforms:zn([ke.common,ke.bumpmap,ke.normalmap,ke.displacementmap,{opacity:{value:1}}]),vertexShader:_t.meshnormal_vert,fragmentShader:_t.meshnormal_frag},sprite:{uniforms:zn([ke.sprite,ke.fog]),vertexShader:_t.sprite_vert,fragmentShader:_t.sprite_frag},background:{uniforms:{uvTransform:{value:new ht},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:_t.background_vert,fragmentShader:_t.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new ht}},vertexShader:_t.backgroundCube_vert,fragmentShader:_t.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:_t.cube_vert,fragmentShader:_t.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:_t.equirect_vert,fragmentShader:_t.equirect_frag},distance:{uniforms:zn([ke.common,ke.displacementmap,{referencePosition:{value:new ee},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:_t.distance_vert,fragmentShader:_t.distance_frag},shadow:{uniforms:zn([ke.lights,ke.fog,{color:{value:new yt(0)},opacity:{value:1}}]),vertexShader:_t.shadow_vert,fragmentShader:_t.shadow_frag}};Gi.physical={uniforms:zn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new ht},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new ht},clearcoatNormalScale:{value:new ct(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new ht},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new ht},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new ht},sheen:{value:0},sheenColor:{value:new yt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new ht},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new ht},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new ht},transmissionSamplerSize:{value:new ct},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new ht},attenuationDistance:{value:0},attenuationColor:{value:new yt(0)},specularColor:{value:new yt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new ht},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new ht},anisotropyVector:{value:new ct},anisotropyMap:{value:null},anisotropyMapTransform:{value:new ht}}]),vertexShader:_t.meshphysical_vert,fragmentShader:_t.meshphysical_frag};const tc={r:0,b:0,g:0},rw=new Qt,Sv=new ht;Sv.set(-1,0,0,0,1,0,0,0,1);function aw(i,e,t,a,o,l){const u=new yt(0);let d=o===!0?0:1,m,p,v=null,x=0,_=null;function M(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const b=D.backgroundBlurriness>0;z=e.get(z,b)}return z}function w(D){let z=!1;const b=M(D);b===null?y(u,d):b&&b.isColor&&(y(b,1),z=!0);const N=i.xr.getEnvironmentBlendMode();N==="additive"?t.buffers.color.setClear(0,0,0,1,l):N==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function R(D,z){const b=M(z);b&&(b.isCubeTexture||b.mapping===Rc)?(p===void 0&&(p=new ai(new bo(1,1,1),new qi({name:"BackgroundCubeMaterial",uniforms:gs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(N,P,k){this.matrixWorld.copyPosition(k.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=b,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(rw.makeRotationFromEuler(z.backgroundRotation)).transpose(),b.isCubeTexture&&b.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Sv),p.material.toneMapped=Tt.getTransfer(b.colorSpace)!==kt,(v!==b||x!==b.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,v=b,x=b.version,_=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):b&&b.isTexture&&(m===void 0&&(m=new ai(new bc(2,2),new qi({name:"BackgroundMaterial",uniforms:gs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Sa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=b,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Tt.getTransfer(b.colorSpace)!==kt,b.matrixAutoUpdate===!0&&b.updateMatrix(),m.material.uniforms.uvTransform.value.copy(b.matrix),(v!==b||x!==b.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,v=b,x=b.version,_=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,z){D.getRGB(tc,gv(i)),t.buffers.color.setClear(tc.r,tc.g,tc.b,z,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,z=1){u.set(D),d=z,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(u,d)},render:w,addToRenderList:R,dispose:S}}function sw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},o=_(null);let l=o,u=!1;function d(X,J,ne,G,ie){let oe=!1;const le=x(X,G,ne,J);l!==le&&(l=le,p(l.object)),oe=M(X,G,ne,ie),oe&&w(X,G,ne,ie),ie!==null&&e.update(ie,i.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,b(X,J,ne,G),ie!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(ie).buffer))}function m(){return i.createVertexArray()}function p(X){return i.bindVertexArray(X)}function v(X){return i.deleteVertexArray(X)}function x(X,J,ne,G){const ie=G.wireframe===!0;let oe=a[J.id];oe===void 0&&(oe={},a[J.id]=oe);const le=X.isInstancedMesh===!0?X.id:0;let q=oe[le];q===void 0&&(q={},oe[le]=q);let j=q[ne.id];j===void 0&&(j={},q[ne.id]=j);let O=j[ie];return O===void 0&&(O=_(m()),j[ie]=O),O}function _(X){const J=[],ne=[],G=[];for(let ie=0;ie<t;ie++)J[ie]=0,ne[ie]=0,G[ie]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:J,enabledAttributes:ne,attributeDivisors:G,object:X,attributes:{},index:null}}function M(X,J,ne,G){const ie=l.attributes,oe=J.attributes;let le=0;const q=ne.getAttributes();for(const j in q)if(q[j].location>=0){const L=ie[j];let K=oe[j];if(K===void 0&&(j==="instanceMatrix"&&X.instanceMatrix&&(K=X.instanceMatrix),j==="instanceColor"&&X.instanceColor&&(K=X.instanceColor)),L===void 0||L.attribute!==K||K&&L.data!==K.data)return!0;le++}return l.attributesNum!==le||l.index!==G}function w(X,J,ne,G){const ie={},oe=J.attributes;let le=0;const q=ne.getAttributes();for(const j in q)if(q[j].location>=0){let L=oe[j];L===void 0&&(j==="instanceMatrix"&&X.instanceMatrix&&(L=X.instanceMatrix),j==="instanceColor"&&X.instanceColor&&(L=X.instanceColor));const K={};K.attribute=L,L&&L.data&&(K.data=L.data),ie[j]=K,le++}l.attributes=ie,l.attributesNum=le,l.index=G}function R(){const X=l.newAttributes;for(let J=0,ne=X.length;J<ne;J++)X[J]=0}function y(X){S(X,0)}function S(X,J){const ne=l.newAttributes,G=l.enabledAttributes,ie=l.attributeDivisors;ne[X]=1,G[X]===0&&(i.enableVertexAttribArray(X),G[X]=1),ie[X]!==J&&(i.vertexAttribDivisor(X,J),ie[X]=J)}function D(){const X=l.newAttributes,J=l.enabledAttributes;for(let ne=0,G=J.length;ne<G;ne++)J[ne]!==X[ne]&&(i.disableVertexAttribArray(ne),J[ne]=0)}function z(X,J,ne,G,ie,oe,le){le===!0?i.vertexAttribIPointer(X,J,ne,ie,oe):i.vertexAttribPointer(X,J,ne,G,ie,oe)}function b(X,J,ne,G){R();const ie=G.attributes,oe=ne.getAttributes(),le=J.defaultAttributeValues;for(const q in oe){const j=oe[q];if(j.location>=0){let O=ie[q];if(O===void 0&&(q==="instanceMatrix"&&X.instanceMatrix&&(O=X.instanceMatrix),q==="instanceColor"&&X.instanceColor&&(O=X.instanceColor)),O!==void 0){const L=O.normalized,K=O.itemSize,_e=e.get(O);if(_e===void 0)continue;const He=_e.buffer,Ce=_e.type,we=_e.bytesPerElement,ae=Ce===i.INT||Ce===i.UNSIGNED_INT||O.gpuType===Qf;if(O.isInterleavedBufferAttribute){const ue=O.data,Ee=ue.stride,Ye=O.offset;if(ue.isInstancedInterleavedBuffer){for(let be=0;be<j.locationSize;be++)S(j.location+be,ue.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=ue.meshPerAttribute*ue.count)}else for(let be=0;be<j.locationSize;be++)y(j.location+be);i.bindBuffer(i.ARRAY_BUFFER,He);for(let be=0;be<j.locationSize;be++)z(j.location+be,K/j.locationSize,Ce,L,Ee*we,(Ye+K/j.locationSize*be)*we,ae)}else{if(O.isInstancedBufferAttribute){for(let ue=0;ue<j.locationSize;ue++)S(j.location+ue,O.meshPerAttribute);X.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=O.meshPerAttribute*O.count)}else for(let ue=0;ue<j.locationSize;ue++)y(j.location+ue);i.bindBuffer(i.ARRAY_BUFFER,He);for(let ue=0;ue<j.locationSize;ue++)z(j.location+ue,K/j.locationSize,Ce,L,K*we,K/j.locationSize*ue*we,ae)}}else if(le!==void 0){const L=le[q];if(L!==void 0)switch(L.length){case 2:i.vertexAttrib2fv(j.location,L);break;case 3:i.vertexAttrib3fv(j.location,L);break;case 4:i.vertexAttrib4fv(j.location,L);break;default:i.vertexAttrib1fv(j.location,L)}}}}D()}function N(){U();for(const X in a){const J=a[X];for(const ne in J){const G=J[ne];for(const ie in G){const oe=G[ie];for(const le in oe)v(oe[le].object),delete oe[le];delete G[ie]}}delete a[X]}}function P(X){if(a[X.id]===void 0)return;const J=a[X.id];for(const ne in J){const G=J[ne];for(const ie in G){const oe=G[ie];for(const le in oe)v(oe[le].object),delete oe[le];delete G[ie]}}delete a[X.id]}function k(X){for(const J in a){const ne=a[J];for(const G in ne){const ie=ne[G];if(ie[X.id]===void 0)continue;const oe=ie[X.id];for(const le in oe)v(oe[le].object),delete oe[le];delete ie[X.id]}}}function T(X){for(const J in a){const ne=a[J],G=X.isInstancedMesh===!0?X.id:0,ie=ne[G];if(ie!==void 0){for(const oe in ie){const le=ie[oe];for(const q in le)v(le[q].object),delete le[q];delete ie[oe]}delete ne[G],Object.keys(ne).length===0&&delete a[J]}}}function U(){V(),u=!0,l!==o&&(l=o,p(l.object))}function V(){o.geometry=null,o.program=null,o.wireframe=!1}return{setup:d,reset:U,resetDefaultState:V,dispose:N,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:k,initAttributes:R,enableAttribute:y,disableUnusedAttributes:D}}function ow(i,e,t){let a;function o(m){a=m}function l(m,p){i.drawArrays(a,m,p),t.update(p,a,1)}function u(m,p,v){v!==0&&(i.drawArraysInstanced(a,m,p,v),t.update(p,a,v))}function d(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,a,1)}this.setMode=o,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function lw(i,e,t,a){let o;function l(){if(o!==void 0)return o;if(e.has("EXT_texture_filter_anisotropic")===!0){const k=e.get("EXT_texture_filter_anisotropic");o=i.getParameter(k.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else o=0;return o}function u(k){return!(k!==Di&&a.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(k){const T=k===$i&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(k!==ri&&k!==Bi&&!T&&a.convert(k)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function m(k){if(k==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";k="mediump"}return k==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=m(p);v!==p&&(lt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&lt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),R=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),b=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),N=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:w,maxTextureSize:R,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:b,maxSamples:N,samples:P}}function cw(i){const e=this;let t=null,a=0,o=!1,l=!1;const u=new ur,d=new ht,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||a!==0||o;return o=_,a=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=v(x,_,0)},this.setState=function(x,_,M){const w=x.clippingPlanes,R=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!o||w===null||w.length===0||l&&!y)l?v(null):p();else{const D=l?0:a,z=D*4;let b=S.clippingState||null;m.value=b,b=v(w,_,z,M);for(let N=0;N!==z;++N)b[N]=t[N];S.clippingState=b,this.numIntersection=R?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(x,_,M,w){const R=x!==null?x.length:0;let y=null;if(R!==0){if(y=m.value,w!==!0||y===null){const S=M+R*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let z=0,b=M;z!==R;++z,b+=4)u.copy(x[z]).applyMatrix4(D,d),u.normal.toArray(y,b),y[b+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=R,e.numIntersection=0,y}}const cs=4,uw=6,dw=20,fw=256,oo=new gh,Wg=new yt;let Vd=null,Gd=0,Bd=0,Wd=!1;const hw=new ee,ma=new ee;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,o=100,l={}){const{size:u=256,position:d=hw}=l;Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,o,m,d),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=qg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=$g(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Gd,Bd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:$i,format:Di,colorSpace:xc,depthBuffer:!1},o=Yg(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Yg(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pw(l)),this._blurMaterial=gw(l,e,t),this._ggxMaterial=mw(l,e,t)}return o}_compileMaterial(e){const t=new ai(new jn,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,a,o,l){const m=new mi(90,1,t,a),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(Wg),x.toneMapping=Xi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(o),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new bo,new dh({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const R=this._backgroundBox,y=R.material;let S=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,S=!0):(y.color.copy(Wg),S=!0);for(let z=0;z<6;z++){const b=z%3;b===0?(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[z],l.y,l.z)):b===1?(m.up.set(0,0,p[z]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[z],l.z)):(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[z]));const N=this._cubeSize;as(o,b*N,z>2?N:0,N,N),x.setRenderTarget(o),S&&x.render(R,m),x.render(e,m)}x.toneMapping=M,x.autoClear=_,e.background=D}_textureToCubeUV(e,t){const a=this._renderer,o=e.mapping===ya||e.mapping===ms;o?(this._cubemapMaterial===null&&(this._cubemapMaterial=qg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=$g());const l=o?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;as(t,0,0,3*m,2*m),a.setRenderTarget(t),a.render(u,oo)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const o=this._lodMeshes.length;for(let l=1;l<o;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const o=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),_=p*1.25,M=x*_,{_lodMax:w}=this,R=this._sizeLods[a],y=3*R*(a>w-cs?a-w+cs:0),S=4*(this._cubeSize-R);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=w-t,as(l,y,S,3*R,2*R),o.setRenderTarget(l),o.render(d,oo),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=w-a,as(e,y,S,3*R,2*R),o.setRenderTarget(e),o.render(d,oo)}_blur(e,t,a,o){const l=this._pingPongRenderTarget,u=Math.min(o,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,a,u),this._blurPass(l,e,a,a,u)}_blurPass(e,t,a,o,l){const u=this._renderer,d=this._blurMaterial,m=this._lodMeshes[o];m.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-a;const v=this._sizeLods[o],x=3*v*(o>this._lodMax-cs?o-this._lodMax+cs:0),_=4*(this._cubeSize-v);as(t,x,_,3*v,2*v),u.setRenderTarget(t),u.render(m,oo)}}function pw(i){const e=[],t=[];let a=i;const o=i-cs+1+uw;for(let l=0;l<o;l++){const u=Math.pow(2,a);e.push(u);const d=1/(u-2),m=-d,p=1+d,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,_=6,M=3,w=new Float32Array(M*_*x),R=new Float32Array(M*_*x);for(let S=0;S<x;S++){const D=S%3*2/3-1,z=S>2?0:-1,b=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];w.set(b,M*_*S);for(let N=0;N<_;N++){const P=v[N*2]*2-1,k=v[N*2+1]*2-1;S===0?ma.set(1,k,P):S===1?ma.set(-P,1,-k):S===2?ma.set(-P,k,1):S===3?ma.set(-1,k,-P):S===4?ma.set(-P,-1,k):ma.set(P,k,-1),ma.toArray(R,(S*_+N)*M)}}const y=new jn;y.setAttribute("position",new gi(w,M)),y.setAttribute("outputDirection",new gi(R,M)),t.push(new ai(y,null)),a>cs&&a--}return{lodMeshes:t,sizeLods:e}}function Yg(i,e,t){const a=new Ui(i,e,t);return a.texture.mapping=Rc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function as(i,e,t,a,o){i.viewport.set(e,t,a,o),i.scissor.set(e,t,a,o)}function mw(i,e,t){return new qi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function gw(i,e,t){return new qi({name:"SphericalGaussianBlur",defines:{SAMPLES:dw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function $g(){return new qi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function qg(){return new qi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Pc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class yv extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},o=[a,a,a,a,a,a];this.texture=new pv(o),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},o=new bo(5,5,5),l=new qi({name:"CubemapFromEquirect",uniforms:gs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Kn,blending:hr});l.uniforms.tEquirect.value=t;const u=new ai(o,l),d=t.minFilter;return t.minFilter===ga&&(t.minFilter=Fn),new _M(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,o=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,o);e.setRenderTarget(l)}}function vw(i){let e=new WeakMap,t=new WeakMap,a=null;function o(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===md||M===gd)if(e.has(_)){const w=e.get(_).texture;return d(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const R=new yv(w.height);return R.fromEquirectangularTexture(i,_),e.set(_,R),_.addEventListener("dispose",p),d(R.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,w=M===md||M===gd,R=M===ya||M===ms;if(w||R){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new Xg(i)),y=w?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const D=_.image;return w&&D&&D.height>0||R&&D&&m(D)?(a===null&&(a=new Xg(i)),y=w?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",v),y.texture):null}}}return _}function d(_,M){return M===md?_.mapping=ya:M===gd&&(_.mapping=ms),_}function m(_){let M=0;const w=6;for(let R=0;R<w;R++)_[R]!==void 0&&M++;return M===w}function p(_){const M=_.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(_){const M=_.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function x(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:o,dispose:x}}function _w(i){const e={};function t(a){if(e[a]!==void 0)return e[a];const o=i.getExtension(a);return e[a]=o,o}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const o=t(a);return o===null&&ds("WebGLRenderer: "+a+" extension not supported."),o}}}function xw(i,e,t,a){const o={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",u),delete o[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(x,_){return o[_.id]===!0||(_.addEventListener("dispose",u),o[_.id]=!0,t.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)e.update(_[M],i.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,w=x.attributes.position;let R=0;if(w===void 0)return;if(M!==null){const D=M.array;R=M.version;for(let z=0,b=D.length;z<b;z+=3){const N=D[z+0],P=D[z+1],k=D[z+2];_.push(N,P,P,k,k,N)}}else{const D=w.array;R=w.version;for(let z=0,b=D.length/3-1;z<b;z+=3){const N=z+0,P=z+1,k=z+2;_.push(N,P,P,k,k,N)}}const y=new(w.count>=65535?hv:fv)(_,1);y.version=R;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function v(x){const _=l.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function Sw(i,e,t){let a;function o(x){a=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function m(x,_){i.drawElements(a,_,l,x*u),t.update(_,a,1)}function p(x,_,M){M!==0&&(i.drawElementsInstanced(a,_,l,x*u,M),t.update(_,a,M))}function v(x,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,l,x,0,M);let R=0;for(let y=0;y<M;y++)R+=_[y];t.update(R,a,1)}this.setMode=o,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function yw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:Rt("WebGLInfo: Unknown draw mode:",u);break}}function o(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:o,update:a}}function Mw(i,e,t){const a=new WeakMap,o=new Jt;function l(u,d,m){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let U=function(){k.dispose(),a.delete(d),d.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,R=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let z=0;M===!0&&(z=1),w===!0&&(z=2),R===!0&&(z=3);let b=d.attributes.position.count*z,N=1;b>e.maxTextureSize&&(N=Math.ceil(b/e.maxTextureSize),b=e.maxTextureSize);const P=new Float32Array(b*N*4*x),k=new uv(P,b,N,x);k.type=Bi,k.needsUpdate=!0;const T=z*4;for(let V=0;V<x;V++){const X=y[V],J=S[V],ne=D[V],G=b*N*4*V;for(let ie=0;ie<X.count;ie++){const oe=ie*T;M===!0&&(o.fromBufferAttribute(X,ie),P[G+oe+0]=o.x,P[G+oe+1]=o.y,P[G+oe+2]=o.z,P[G+oe+3]=0),w===!0&&(o.fromBufferAttribute(J,ie),P[G+oe+4]=o.x,P[G+oe+5]=o.y,P[G+oe+6]=o.z,P[G+oe+7]=0),R===!0&&(o.fromBufferAttribute(ne,ie),P[G+oe+8]=o.x,P[G+oe+9]=o.y,P[G+oe+10]=o.z,P[G+oe+11]=ne.itemSize===4?o.w:1)}}_={count:x,texture:k,size:new ct(b,N)},a.set(d,_),d.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let M=0;for(let R=0;R<p.length;R++)M+=p[R];const w=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(i,"morphTargetBaseInfluence",w),m.getUniforms().setValue(i,"morphTargetInfluences",p)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function Ew(i,e,t,a,o){let l=new WeakMap;function u(p){const v=o.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==v&&(e.update(_),l.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return _}function d(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const Tw={[q0]:"LINEAR_TONE_MAPPING",[K0]:"REINHARD_TONE_MAPPING",[j0]:"CINEON_TONE_MAPPING",[Z0]:"ACES_FILMIC_TONE_MAPPING",[Q0]:"AGX_TONE_MAPPING",[ev]:"NEUTRAL_TONE_MAPPING",[J0]:"CUSTOM_TONE_MAPPING"};function ww(i,e,t,a,o,l){const u=new Ui(e,t,{type:i,depthBuffer:o,stencilBuffer:l,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null;const p=new jn;p.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new pn([0,2,0,0,2,0],2));const v=new lM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new ai(p,v),_=new gh(-1,1,1,-1,0,1);let M=null,w=null,R=!1,y,S=null,D=[],z=!1;this.setSize=function(b,N){u.setSize(b,N),d!==null&&d.setSize(b,N),m!==null&&m.setSize(b,N);for(let P=0;P<D.length;P++){const k=D[P];k.setSize&&k.setSize(b,N)}},this.setEffects=function(b){D=b,z=D.length>0&&D[0].isRenderPass===!0;const N=u.width,P=u.height;D.length>0&&d===null&&(d=new Ui(N,P,{type:$i,depthBuffer:!1,stencilBuffer:!1}),m=new Ui(N,P,{type:$i,depthBuffer:!1,stencilBuffer:!1}));for(let k=0;k<D.length;k++){const T=D[k];T.setSize&&T.setSize(N,P)}},this.begin=function(b,N){if(R||b.toneMapping===Xi&&D.length===0)return!1;if(S=N,N!==null){const P=N.width,k=N.height;(u.width!==P||u.height!==k)&&this.setSize(P,k)}return z===!1&&b.setRenderTarget(u),y=b.toneMapping,b.toneMapping=Xi,!0},this.hasRenderPass=function(){return z},this.end=function(b,N){b.toneMapping=y,R=!0;let P=u,k=d;for(let T=0;T<D.length;T++){const U=D[T];U.enabled!==!1&&(U.render(b,k,P,N),U.needsSwap!==!1&&(P=k,k=k===d?m:d))}if(M!==b.outputColorSpace||w!==b.toneMapping){M=b.outputColorSpace,w=b.toneMapping,v.defines={},Tt.getTransfer(M)===kt&&(v.defines.SRGB_TRANSFER="");const T=Tw[w];T&&(v.defines[T]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,b.setRenderTarget(S),b.render(x,_),S=null,R=!1},this.isCompositing=function(){return R},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),p.dispose(),v.dispose()}}const Mv=new Hn,Vf=new To(1,1),Ev=new uv,Tv=new zy,wv=new pv,Kg=[],jg=[],Zg=new Float32Array(16),Jg=new Float32Array(9),Qg=new Float32Array(4);function vs(i,e,t){const a=i[0];if(a<=0||a>0)return i;const o=e*t;let l=Kg[o];if(l===void 0&&(l=new Float32Array(o),Kg[o]=l),e!==0){a.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(l,d)}return l}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,a=i.length;t<a;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,a=e.length;t<a;t++)i[t]=e[t]}function Lc(i,e){let t=jg[e];t===void 0&&(t=new Int32Array(e),jg[e]=t);for(let a=0;a!==e;++a)t[a]=i.allocateTextureUnit();return t}function Aw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function Rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function Pw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,a))return;Qg.set(a),i.uniformMatrix2fv(this.addr,!1,Qg),gn(t,a)}}function Lw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,a))return;Jg.set(a),i.uniformMatrix3fv(this.addr,!1,Jg),gn(t,a)}}function Dw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,a))return;Zg.set(a),i.uniformMatrix4fv(this.addr,!1,Zg),gn(t,a)}}function Nw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Fw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function Iw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function zw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function Hw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Vw(i,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o);let l;this.type===i.SAMPLER_2D_SHADOW?(Vf.compareFunction=t.isReversedDepthBuffer()?sh:ah,l=Vf):l=Mv,t.setTexture2D(e||l,o)}function Gw(i,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),t.setTexture3D(e||Tv,o)}function Bw(i,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),t.setTextureCube(e||wv,o)}function Ww(i,e,t){const a=this.cache,o=t.allocateTextureUnit();a[0]!==o&&(i.uniform1i(this.addr,o),a[0]=o),t.setTexture2DArray(e||Ev,o)}function Xw(i){switch(i){case 5126:return Aw;case 35664:return Cw;case 35665:return Rw;case 35666:return bw;case 35674:return Pw;case 35675:return Lw;case 35676:return Dw;case 5124:case 35670:return Nw;case 35667:case 35671:return Uw;case 35668:case 35672:return Fw;case 35669:case 35673:return Ow;case 5125:return Iw;case 36294:return kw;case 36295:return zw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Ww}}function Yw(i,e){i.uniform1fv(this.addr,e)}function $w(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function qw(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Kw(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function jw(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zw(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jw(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qw(i,e){i.uniform1iv(this.addr,e)}function eA(i,e){i.uniform2iv(this.addr,e)}function tA(i,e){i.uniform3iv(this.addr,e)}function nA(i,e){i.uniform4iv(this.addr,e)}function iA(i,e){i.uniform1uiv(this.addr,e)}function rA(i,e){i.uniform2uiv(this.addr,e)}function aA(i,e){i.uniform3uiv(this.addr,e)}function sA(i,e){i.uniform4uiv(this.addr,e)}function oA(i,e,t){const a=this.cache,o=e.length,l=Lc(t,o);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));let u;this.type===i.SAMPLER_2D_SHADOW?u=Vf:u=Mv;for(let d=0;d!==o;++d)t.setTexture2D(e[d]||u,l[d])}function lA(i,e,t){const a=this.cache,o=e.length,l=Lc(t,o);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==o;++u)t.setTexture3D(e[u]||Tv,l[u])}function cA(i,e,t){const a=this.cache,o=e.length,l=Lc(t,o);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==o;++u)t.setTextureCube(e[u]||wv,l[u])}function uA(i,e,t){const a=this.cache,o=e.length,l=Lc(t,o);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==o;++u)t.setTexture2DArray(e[u]||Ev,l[u])}function dA(i){switch(i){case 5126:return Yw;case 35664:return $w;case 35665:return qw;case 35666:return Kw;case 35674:return jw;case 35675:return Zw;case 35676:return Jw;case 5124:case 35670:return Qw;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return rA;case 36295:return aA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}class fA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Xw(t.type)}}class hA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dA(t.type)}}class pA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const o=this.seq;for(let l=0,u=o.length;l!==u;++l){const d=o[l];d.setValue(e,t[d.id],a)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function e0(i,e){i.seq.push(e),i.map[e.id]=e}function mA(i,e,t){const a=i.name,o=a.length;for(Xd.lastIndex=0;;){const l=Xd.exec(a),u=Xd.lastIndex;let d=l[1];const m=l[2]==="]",p=l[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===o){e0(t,p===void 0?new fA(d,i,e):new hA(d,i,e));break}else{let x=t.map[d];x===void 0&&(x=new pA(d),e0(t,x)),t=x}}}class hc{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(t,u),m=e.getUniformLocation(t,d.name);mA(d,m,this)}const o=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?o.push(u):l.push(u);o.length>0&&(this.seq=o.concat(l))}setValue(e,t,a,o){const l=this.map[t];l!==void 0&&l.setValue(e,a,o)}setOptional(e,t,a){const o=t[a];o!==void 0&&this.setValue(e,a,o)}static upload(e,t,a,o){for(let l=0,u=t.length;l!==u;++l){const d=t[l],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,o)}}static seqWithValue(e,t){const a=[];for(let o=0,l=e.length;o!==l;++o){const u=e[o];u.id in t&&a.push(u)}return a}}function t0(i,e,t){const a=i.createShader(e);return i.shaderSource(a,t),i.compileShader(a),a}const gA=37297;let vA=0;function _A(i,e){const t=i.split(`
`),a=[],o=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=o;u<l;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return a.join(`
`)}const n0=new ht;function xA(i){Tt._getMatrix(n0,Tt.workingColorSpace,i);const e=`mat3( ${n0.elements.map(t=>t.toFixed(4))} )`;switch(Tt.getTransfer(i)){case Sc:return[e,"LinearTransferOETF"];case kt:return[e,"sRGBTransferOETF"];default:return lt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function i0(i,e,t){const a=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+_A(i.getShaderSource(e),d)}else return l}function SA(i,e){const t=xA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yA={[q0]:"Linear",[K0]:"Reinhard",[j0]:"Cineon",[Z0]:"ACESFilmic",[Q0]:"AgX",[ev]:"Neutral",[J0]:"Custom"};function MA(i,e){const t=yA[e];return t===void 0?(lt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new ee;function EA(){Tt.getLuminanceCoefficients(nc);const i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function wA(i){const e=[];for(const t in i){const a=i[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function AA(i,e){const t={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let o=0;o<a;o++){const l=i.getActiveAttrib(e,o),u=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function ho(i){return i!==""}function r0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(i){return i.replace(CA,bA)}const RA=new Map;function bA(i,e){let t=_t[e];if(t===void 0){const a=RA.get(e);if(a!==void 0)t=_t[a],lt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gf(t)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(i){return i.replace(PA,LA)}function LA(i,e,t,a){let o="";for(let l=parseInt(e);l<parseInt(t);l++)o+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return o}function o0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const DA={[oc]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function NA(i){return DA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UA={[ya]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[Rc]:"ENVMAP_TYPE_CUBE_UV"};function FA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":UA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const OA={[ms]:"ENVMAP_MODE_REFRACTION"};function IA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":OA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kA={[$0]:"ENVMAP_BLENDING_MULTIPLY",[my]:"ENVMAP_BLENDING_MIX",[gy]:"ENVMAP_BLENDING_ADD"};function zA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kA[i.combine]||"ENVMAP_BLENDING_NONE"}function HA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function VA(i,e,t,a){const o=i.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const m=NA(t),p=FA(t),v=IA(t),x=zA(t),_=HA(t),M=TA(t),w=wA(l),R=o.createProgram();let y,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),S.length>0&&(S+=`
`)):(y=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),S=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?_t.tonemapping_pars_fragment:"",t.toneMapping!==Xi?MA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",_t.colorspace_pars_fragment,SA("linearToOutputTexel",t.outputColorSpace),EA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),u=Gf(u),u=r0(u,t),u=a0(u,t),d=Gf(d),d=r0(d,t),d=a0(d,t),u=s0(u),d=s0(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=D+y+u,b=D+S+d,N=t0(o,o.VERTEX_SHADER,z),P=t0(o,o.FRAGMENT_SHADER,b);o.attachShader(R,N),o.attachShader(R,P),t.index0AttributeName!==void 0?o.bindAttribLocation(R,0,t.index0AttributeName):t.hasPositionAttribute===!0&&o.bindAttribLocation(R,0,"position"),o.linkProgram(R);function k(X){if(i.debug.checkShaderErrors){const J=o.getProgramInfoLog(R)||"",ne=o.getShaderInfoLog(N)||"",G=o.getShaderInfoLog(P)||"",ie=J.trim(),oe=ne.trim(),le=G.trim();let q=!0,j=!0;if(o.getProgramParameter(R,o.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(o,R,N,P);else{const O=i0(o,N,"vertex"),L=i0(o,P,"fragment");Rt("WebGLProgram: Shader Error "+o.getError()+" - VALIDATE_STATUS "+o.getProgramParameter(R,o.VALIDATE_STATUS)+`

Material Name: `+X.name+`
Material Type: `+X.type+`

Program Info Log: `+ie+`
`+O+`
`+L)}else ie!==""?lt("WebGLProgram: Program Info Log:",ie):(oe===""||le==="")&&(j=!1);j&&(X.diagnostics={runnable:q,programLog:ie,vertexShader:{log:oe,prefix:y},fragmentShader:{log:le,prefix:S}})}o.deleteShader(N),o.deleteShader(P),T=new hc(o,R),U=AA(o,R)}let T;this.getUniforms=function(){return T===void 0&&k(this),T};let U;this.getAttributes=function(){return U===void 0&&k(this),U};let V=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return V===!1&&(V=o.getProgramParameter(R,gA)),V},this.destroy=function(){a.releaseStatesOfProgram(this),o.deleteProgram(R),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vA++,this.cacheKey=e,this.usedTimes=1,this.program=R,this.vertexShader=N,this.fragmentShader=P,this}let GA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,a){const o=this._getShaderCacheForMaterial(e);return o.has(t)===!1&&(o.add(t),t.usedTimes++),o.has(a)===!1&&(o.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new WA(e),t.set(e,a)),a}}class WA{constructor(e){this.id=GA++,this.code=e,this.usedTimes=0}}function XA(i){return i===Ma||i===vc||i===_c}function YA(i,e,t,a,o,l){const u=new lh,d=new BA,m=new Set,p=[],v=new Map,x=a.logarithmicDepthBuffer;let _=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return m.add(T),T===0?"uv":`uv${T}`}function R(T,U,V,X,J,ne){const G=X.fog,ie=J.geometry,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?X.environment:null,le=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,q=e.get(T.envMap||oe,le),j=q&&q.mapping===Rc?q.image.height:null,O=M[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&lt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const L=ie.morphAttributes.position||ie.morphAttributes.normal||ie.morphAttributes.color,K=L!==void 0?L.length:0;let _e=0;ie.morphAttributes.position!==void 0&&(_e=1),ie.morphAttributes.normal!==void 0&&(_e=2),ie.morphAttributes.color!==void 0&&(_e=3);let He,Ce,we,ae;if(O){const Pt=Gi[O];He=Pt.vertexShader,Ce=Pt.fragmentShader}else{He=T.vertexShader,Ce=T.fragmentShader;const Pt=d.getVertexShaderStage(T),wt=d.getFragmentShaderStage(T);d.update(T,Pt,wt),we=Pt.id,ae=wt.id}const ue=i.getRenderTarget(),Ee=i.state.buffers.depth.getReversed(),Ye=J.isInstancedMesh===!0,be=J.isBatchedMesh===!0,at=!!T.map,Ft=!!T.matcap,dt=!!q,mt=!!T.aoMap,Ot=!!T.lightMap,gt=!!T.bumpMap&&T.wireframe===!1,Ht=!!T.normalMap,en=!!T.displacementMap,sn=!!T.emissiveMap,Ut=!!T.metalnessMap,Xt=!!T.roughnessMap,Y=T.anisotropy>0,cn=T.clearcoat>0,bt=T.dispersion>0,F=T.retroreflectivity>0,E=T.iridescence>0,Z=T.sheen>0,ce=T.transmission>0,he=Y&&!!T.anisotropyMap,Te=cn&&!!T.clearcoatMap,Pe=cn&&!!T.clearcoatNormalMap,pe=cn&&!!T.clearcoatRoughnessMap,ve=E&&!!T.iridescenceMap,Ne=E&&!!T.iridescenceThicknessMap,Ze=Z&&!!T.sheenColorMap,Ue=Z&&!!T.sheenRoughnessMap,Re=!!T.specularMap,Je=!!T.specularColorMap,nt=!!T.specularIntensityMap,st=ce&&!!T.transmissionMap,B=ce&&!!T.thicknessMap,Le=!!T.gradientMap,ge=!!T.alphaMap,De=T.alphaTest>0,ze=!!T.alphaHash,xe=!!T.extensions;let et=Xi;T.toneMapped&&(ue===null||ue.isXRRenderTarget===!0)&&(et=i.toneMapping);const Ke={shaderID:O,shaderType:T.type,shaderName:T.name,vertexShader:He,fragmentShader:Ce,defines:T.defines,customVertexShaderID:we,customFragmentShaderID:ae,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:be,batchingColor:be&&J._colorsTexture!==null,instancing:Ye,instancingColor:Ye&&J.instanceColor!==null,instancingMorph:Ye&&J.morphTexture!==null,outputColorSpace:ue===null?i.outputColorSpace:ue.isXRRenderTarget===!0?ue.texture.colorSpace:Tt.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:at,matcap:Ft,envMap:dt,envMapMode:dt&&q.mapping,envMapCubeUVHeight:j,aoMap:mt,lightMap:Ot,bumpMap:gt,normalMap:Ht,displacementMap:en,emissiveMap:sn,normalMapObjectSpace:Ht&&T.normalMapType===xy,normalMapTangentSpace:Ht&&T.normalMapType===kf,packedNormalMap:Ht&&T.normalMapType===kf&&XA(T.normalMap.format),metalnessMap:Ut,roughnessMap:Xt,anisotropy:Y,anisotropyMap:he,clearcoat:cn,clearcoatMap:Te,clearcoatNormalMap:Pe,clearcoatRoughnessMap:pe,dispersion:bt,retroreflection:F,iridescence:E,iridescenceMap:ve,iridescenceThicknessMap:Ne,sheen:Z,sheenColorMap:Ze,sheenRoughnessMap:Ue,specularMap:Re,specularColorMap:Je,specularIntensityMap:nt,transmission:ce,transmissionMap:st,thicknessMap:B,gradientMap:Le,opaque:T.transparent===!1&&T.blending===mo&&T.alphaToCoverage===!1,alphaMap:ge,alphaTest:De,alphaHash:ze,combine:T.combine,mapUv:at&&w(T.map.channel),aoMapUv:mt&&w(T.aoMap.channel),lightMapUv:Ot&&w(T.lightMap.channel),bumpMapUv:gt&&w(T.bumpMap.channel),normalMapUv:Ht&&w(T.normalMap.channel),displacementMapUv:en&&w(T.displacementMap.channel),emissiveMapUv:sn&&w(T.emissiveMap.channel),metalnessMapUv:Ut&&w(T.metalnessMap.channel),roughnessMapUv:Xt&&w(T.roughnessMap.channel),anisotropyMapUv:he&&w(T.anisotropyMap.channel),clearcoatMapUv:Te&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Pe&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:ve&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Ne&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Ze&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&w(T.sheenRoughnessMap.channel),specularMapUv:Re&&w(T.specularMap.channel),specularColorMapUv:Je&&w(T.specularColorMap.channel),specularIntensityMapUv:nt&&w(T.specularIntensityMap.channel),transmissionMapUv:st&&w(T.transmissionMap.channel),thicknessMapUv:B&&w(T.thicknessMap.channel),alphaMapUv:ge&&w(T.alphaMap.channel),vertexTangents:!!ie.attributes.tangent&&(Ht||Y),vertexNormals:!!ie.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!ie.attributes.color&&ie.attributes.color.itemSize===4,pointsUvs:J.isPoints===!0&&!!ie.attributes.uv&&(at||ge),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||ie.attributes.normal===void 0&&Ht===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ee,skinning:J.isSkinnedMesh===!0,hasPositionAttribute:ie.attributes.position!==void 0,morphTargets:ie.morphAttributes.position!==void 0,morphNormals:ie.morphAttributes.normal!==void 0,morphColors:ie.morphAttributes.color!==void 0,morphTargetsCount:K,morphTextureStride:_e,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ne.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&V.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:at&&T.map.isVideoTexture===!0&&Tt.getTransfer(T.map.colorSpace)===kt,decodeVideoTextureEmissive:sn&&T.emissiveMap.isVideoTexture===!0&&Tt.getTransfer(T.emissiveMap.colorSpace)===kt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pi,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:xe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&T.extensions.multiDraw===!0||be)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return Ke.vertexUv1s=m.has(1),Ke.vertexUv2s=m.has(2),Ke.vertexUv3s=m.has(3),m.clear(),Ke}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const V in T.defines)U.push(V),U.push(T.defines[V]);return T.isRawShaderMaterial===!1&&(S(U,T),D(U,T),U.push(i.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numSunLights),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numSunLightShadows),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function D(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.retroreflection&&u.enable(24),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const U=M[T.type];let V;if(U){const X=Gi[U];V=aM.clone(X.uniforms)}else V=T.uniforms;return V}function b(T,U){let V=v.get(U);return V!==void 0?++V.usedTimes:(V=new VA(i,U,T,o),p.push(V),v.set(U,V)),V}function N(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){d.remove(T)}function k(){d.dispose()}return{getParameters:R,getProgramCacheKey:y,getUniforms:z,acquireProgram:b,releaseProgram:N,releaseShaderCache:P,programs:p,dispose:k}}function $A(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function a(u){i.delete(u)}function o(u,d,m){i.get(u)[d]=m}function l(){i=new WeakMap}return{has:e,get:t,remove:a,update:o,dispose:l}}function qA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function c0(){const i=[];let e=0;const t=[],a=[],o=[];function l(){e=0,t.length=0,a.length=0,o.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,w,R,y,S){let D=i[e];return D===void 0?(D={id:_.id,object:_,geometry:M,material:w,materialVariant:u(_),groupOrder:R,renderOrder:_.renderOrder,z:y,group:S},i[e]=D):(D.id=_.id,D.object=_,D.geometry=M,D.material=w,D.materialVariant=u(_),D.groupOrder=R,D.renderOrder=_.renderOrder,D.z=y,D.group=S),e++,D}function m(_,M,w,R,y,S,D){D.reversedDepth===!0&&(y=-y);const z=d(_,M,w,R,y,S);w.transmission>0?a.push(z):w.transparent===!0?o.push(z):t.push(z)}function p(_,M,w,R,y,S){const D=d(_,M,w,R,y,S);w.transmission>0?a.unshift(D):w.transparent===!0?o.unshift(D):t.unshift(D)}function v(_,M){t.length>1&&t.sort(_||qA),a.length>1&&a.sort(M||l0),o.length>1&&o.sort(M||l0)}function x(){for(let _=e,M=i.length;_<M;_++){const w=i[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:a,transparent:o,init:l,push:m,unshift:p,finish:x,sort:v}}function KA(){let i=new WeakMap;function e(a,o){const l=i.get(a);let u;return l===void 0?(u=new c0,i.set(a,[u])):o>=l.length?(u=new c0,l.push(u)):u=l[o],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function jA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new ee,color:new yt};break;case"SpotLight":t={position:new ee,direction:new ee,color:new yt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new ee,color:new yt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new ee,skyColor:new yt,groundColor:new yt};break;case"RectAreaLight":t={color:new yt,position:new ee,halfWidth:new ee,halfHeight:new ee};break}return i[e.id]=t,t}}}function ZA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new ct,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let JA=0;function QA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eC(i){const e=new jA,t=ZA(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new ee);const o=new ee,l=new Qt,u=new Qt;function d(p){let v=0,x=0,_=0;for(let J=0;J<9;J++)a.probe[J].set(0,0,0);let M=0,w=0,R=0,y=0,S=0,D=0,z=0,b=0,N=0,P=0,k=0,T=0,U=0,V=0;p.sort(QA);for(let J=0,ne=p.length;J<ne;J++){const G=p[J],ie=G.color,oe=G.intensity,le=G.distance;let q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ma?q=G.shadow.map.texture:q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=ie.r*oe,x+=ie.g*oe,_+=ie.b*oe;else if(G.isLightProbe){for(let j=0;j<9;j++)a.probe[j].addScaledVector(G.sh.coefficients[j],oe);V++}else if(G.isSunLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const O=G.shadow,L=t.get(G);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize.copy(O.mapSize).multiply(O.getFrameExtents()),a.sunShadow[w]=L,a.sunShadowMap[w]=q;const K=O.getViewportCount();for(let _e=0;_e<K;_e++)a.sunShadowMatrix[R+_e]=O.getMatrix(_e),a.sunShadowCascade[R+_e]=O._cascadeData[_e];R+=K,w++}a.sun[M]=j,M++}else if(G.isDirectionalLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const O=G.shadow,L=t.get(G);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,a.directionalShadow[y]=L,a.directionalShadowMap[y]=q,a.directionalShadowMatrix[y]=G.shadow.matrix,N++}a.directional[y]=j,y++}else if(G.isSpotLight){const j=e.get(G);j.position.setFromMatrixPosition(G.matrixWorld),j.color.copy(ie).multiplyScalar(oe),j.distance=le,j.coneCos=Math.cos(G.angle),j.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),j.decay=G.decay,a.spot[D]=j;const O=G.shadow;if(G.map&&(a.spotLightMap[T]=G.map,T++,O.updateMatrices(G),G.castShadow&&U++),a.spotLightMatrix[D]=O.matrix,G.castShadow){const L=t.get(G);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,a.spotShadow[D]=L,a.spotShadowMap[D]=q,k++}D++}else if(G.isRectAreaLight){const j=e.get(G);j.color.copy(ie).multiplyScalar(oe),j.halfWidth.set(G.width*.5,0,0),j.halfHeight.set(0,G.height*.5,0),a.rectArea[z]=j,z++}else if(G.isPointLight){const j=e.get(G);if(j.color.copy(G.color).multiplyScalar(G.intensity),j.distance=G.distance,j.decay=G.decay,G.castShadow){const O=G.shadow,L=t.get(G);L.shadowIntensity=O.intensity,L.shadowBias=O.bias,L.shadowNormalBias=O.normalBias,L.shadowRadius=O.radius,L.shadowMapSize=O.mapSize,L.shadowCameraNear=O.camera.near,L.shadowCameraFar=O.camera.far,a.pointShadow[S]=L,a.pointShadowMap[S]=q,a.pointShadowMatrix[S]=G.shadow.matrix,P++}a.point[S]=j,S++}else if(G.isHemisphereLight){const j=e.get(G);j.skyColor.copy(G.color).multiplyScalar(oe),j.groundColor.copy(G.groundColor).multiplyScalar(oe),a.hemi[b]=j,b++}}z>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=ke.LTC_FLOAT_1,a.rectAreaLTC2=ke.LTC_FLOAT_2):(a.rectAreaLTC1=ke.LTC_HALF_1,a.rectAreaLTC2=ke.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=_;const X=a.hash;(X.sunLength!==M||X.directionalLength!==y||X.pointLength!==S||X.spotLength!==D||X.rectAreaLength!==z||X.hemiLength!==b||X.numSunShadows!==w||X.numDirectionalShadows!==N||X.numPointShadows!==P||X.numSpotShadows!==k||X.numSpotMaps!==T||X.numLightProbes!==V)&&(a.sun.length=M,a.directional.length=y,a.spot.length=D,a.rectArea.length=z,a.point.length=S,a.hemi.length=b,a.sunShadow.length=w,a.sunShadowMap.length=w,a.sunShadowMatrix.length=R,a.sunShadowCascade.length=R,a.directionalShadow.length=N,a.directionalShadowMap.length=N,a.directionalShadowMatrix.length=N,a.pointShadow.length=P,a.pointShadowMap.length=P,a.pointShadowMatrix.length=P,a.spotShadow.length=k,a.spotShadowMap.length=k,a.spotLightMatrix.length=k+T-U,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=V,X.sunLength=M,X.directionalLength=y,X.pointLength=S,X.spotLength=D,X.rectAreaLength=z,X.hemiLength=b,X.numSunShadows=w,X.numDirectionalShadows=N,X.numPointShadows=P,X.numSpotShadows=k,X.numSpotMaps=T,X.numLightProbes=V,a.version=JA++)}function m(p,v){let x=0,_=0,M=0,w=0,R=0,y=0;const S=v.matrixWorldInverse;for(let D=0,z=p.length;D<z;D++){const b=p[D];if(b.isSunLight){const N=a.sun[x];N.direction.setFromMatrixPosition(b.matrixWorld),N.direction.transformDirection(S),x++}else if(b.isDirectionalLight){const N=a.directional[_];N.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),_++}else if(b.isSpotLight){const N=a.spot[w];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(S),N.direction.setFromMatrixPosition(b.matrixWorld),o.setFromMatrixPosition(b.target.matrixWorld),N.direction.sub(o),N.direction.transformDirection(S),w++}else if(b.isRectAreaLight){const N=a.rectArea[R];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(S),u.identity(),l.copy(b.matrixWorld),l.premultiply(S),u.extractRotation(l),N.halfWidth.set(b.width*.5,0,0),N.halfHeight.set(0,b.height*.5,0),N.halfWidth.applyMatrix4(u),N.halfHeight.applyMatrix4(u),R++}else if(b.isPointLight){const N=a.point[M];N.position.setFromMatrixPosition(b.matrixWorld),N.position.applyMatrix4(S),M++}else if(b.isHemisphereLight){const N=a.hemi[y];N.direction.setFromMatrixPosition(b.matrixWorld),N.direction.transformDirection(S),y++}}}return{setup:d,setupView:m,state:a}}function u0(i){const e=new eC(i),t=[],a=[],o=[];function l(_){x.camera=_,t.length=0,a.length=0,o.length=0}function u(_){t.push(_)}function d(_){a.push(_)}function m(_){o.push(_)}function p(){e.setup(t)}function v(_){e.setupView(t,_)}const x={lightsArray:t,shadowsArray:a,lightProbeGridArray:o,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function tC(i){let e=new WeakMap;function t(o,l=0){const u=e.get(o);let d;return u===void 0?(d=new u0(i),e.set(o,[d])):l>=u.length?(d=new u0(i),u.push(d)):d=u[l],d}function a(){e=new WeakMap}return{get:t,dispose:a}}const nC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,iC=`uniform sampler2D shadow_pass;
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
}`,rC=[new ee(1,0,0),new ee(-1,0,0),new ee(0,1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1)],aC=[new ee(0,-1,0),new ee(0,-1,0),new ee(0,0,1),new ee(0,0,-1),new ee(0,-1,0),new ee(0,-1,0)],d0=new Qt,lo=new ee,Yd=new ee;function sC(i,e,t){let a=new fh;const o=new ct,l=new ct,u=new Jt,d=new cM,m=new uM,p={},v=t.maxTextureSize,x={[Sa]:Kn,[Kn]:Sa,[Pi]:Pi},_=new qi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new ct},radius:{value:4}},vertexShader:nC,fragmentShader:iC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new jn;w.setAttribute("position",new gi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const R=new ai(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let S=this.type;this.render=function(P,k,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===jS&&(lt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oc);const U=i.getRenderTarget(),V=i.getActiveCubeFace(),X=i.getActiveMipmapLevel(),J=i.state;J.setBlending(hr),J.buffers.depth.getReversed()===!0?J.buffers.color.setClear(0,0,0,0):J.buffers.color.setClear(1,1,1,1),J.buffers.depth.setTest(!0),J.setScissorTest(!1);const ne=S!==this.type;ne&&k.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(ie=>ie.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,ie=P.length;G<ie;G++){const oe=P[G],le=oe.shadow;if(le===void 0){lt("WebGLShadowMap:",oe,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;o.copy(le.mapSize);const q=le.getFrameExtents();o.multiply(q),l.copy(le.mapSize),(o.x>v||o.y>v)&&(o.x>v&&(l.x=Math.floor(v/q.x),o.x=l.x*q.x,le.mapSize.x=l.x),o.y>v&&(l.y=Math.floor(v/q.y),o.y=l.y*q.y,le.mapSize.y=l.y));const j=i.state.buffers.depth.getReversed();if(le.camera._reversedDepth=j,le.map===null||ne===!0){if(le.map!==null&&(le.map.depthTexture!==null&&(le.map.depthTexture.dispose(),le.map.depthTexture=null),le.map.dispose()),this.type===uo){if(oe.isPointLight){lt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}le.map=new Ui(o.x,o.y,{format:Ma,type:$i,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),le.map.texture.name=oe.name+".shadowMap",le.map.depthTexture=new To(o.x,o.y,Bi),le.map.depthTexture.name=oe.name+".shadowMapDepth",le.map.depthTexture.format=mr,le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=wn,le.map.depthTexture.magFilter=wn}else oe.isPointLight?(le.map=new yv(o.x),le.map.depthTexture=new iM(o.x,Yi)):(le.map=new Ui(o.x,o.y),le.map.depthTexture=new To(o.x,o.y,Yi)),le.map.depthTexture.name=oe.name+".shadowMap",le.map.depthTexture.format=mr,this.type===oc?(le.map.depthTexture.compareFunction=j?sh:ah,le.map.depthTexture.minFilter=Fn,le.map.depthTexture.magFilter=Fn):(le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=wn,le.map.depthTexture.magFilter=wn);le.camera.updateProjectionMatrix()}le.map.isWebGLCubeRenderTarget!==!0&&(le.map.width!==o.x||le.map.height!==o.y)&&le.map.setSize(o.x,o.y);const O=le.map.isWebGLCubeRenderTarget?6:le.getViewportCount();oe.isPointLight!==!0&&le.updateMatrices(oe,T);for(let L=0;L<O;L++){const K=le.getCamera(L);if(oe.isPointLight){const _e=le.camera,He=le.matrix,Ce=oe.distance||_e.far;Ce!==_e.far&&(_e.far=Ce,_e.updateProjectionMatrix()),lo.setFromMatrixPosition(oe.matrixWorld),_e.position.copy(lo),Yd.copy(_e.position),Yd.add(rC[L]),_e.up.copy(aC[L]),_e.lookAt(Yd),_e.updateMatrixWorld(),He.makeTranslation(-lo.x,-lo.y,-lo.z),d0.multiplyMatrices(_e.projectionMatrix,_e.matrixWorldInverse),le._frustum.setFromProjectionMatrix(d0,_e.coordinateSystem,_e.reversedDepth)}if(le.map.isWebGLCubeRenderTarget)i.setRenderTarget(le.map,L),i.clear();else{L===0&&(i.setRenderTarget(le.map),i.clear());const _e=le.getViewport(L);u.set(l.x*_e.x,l.y*_e.y,l.x*_e.z,l.y*_e.w),J.viewport(u)}a=le.getFrustum(L),b(k,T,K,oe,this.type)}le.isPointLightShadow!==!0&&this.type===uo&&D(le,T),le.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(U,V,X)};function D(P,k){const T=e.update(R);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ui(o.x,o.y,{format:Ma,type:$i}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value.set(P.map.width,P.map.height),_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(k,null,T,_,R,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(k,null,T,M,R,null)}function z(P,k,T,U){let V=null;const X=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(X!==void 0)V=X;else if(V=T.isPointLight===!0?m:d,i.localClippingEnabled&&k.clipShadows===!0&&Array.isArray(k.clippingPlanes)&&k.clippingPlanes.length!==0||k.displacementMap&&k.displacementScale!==0||k.alphaMap&&k.alphaTest>0||k.map&&k.alphaTest>0||k.alphaToCoverage===!0){const J=V.uuid,ne=k.uuid;let G=p[J];G===void 0&&(G={},p[J]=G);let ie=G[ne];ie===void 0&&(ie=V.clone(),G[ne]=ie,k.addEventListener("dispose",N)),V=ie}if(V.visible=k.visible,V.wireframe=k.wireframe,U===uo?V.side=k.shadowSide!==null?k.shadowSide:k.side:V.side=k.shadowSide!==null?k.shadowSide:x[k.side],V.alphaMap=k.alphaMap,V.alphaTest=k.alphaToCoverage===!0?.5:k.alphaTest,V.map=k.map,V.clipShadows=k.clipShadows,V.clippingPlanes=k.clippingPlanes,V.clipIntersection=k.clipIntersection,V.displacementMap=k.displacementMap,V.displacementScale=k.displacementScale,V.displacementBias=k.displacementBias,V.wireframeLinewidth=k.wireframeLinewidth,V.linewidth=k.linewidth,T.isPointLight===!0&&V.isMeshDistanceMaterial===!0){const J=i.properties.get(V);J.light=T}return V}function b(P,k,T,U,V){if(P.visible===!1)return;if(P.layers.test(k.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&V===uo)&&(!P.frustumCulled||P.intersectsFrustum(a))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ne=e.update(P),G=P.material;if(Array.isArray(G)){const ie=ne.groups;for(let oe=0,le=ie.length;oe<le;oe++){const q=ie[oe],j=G[q.materialIndex];if(j&&j.visible){const O=z(P,j,U,V);P.onBeforeShadow(i,P,k,T,ne,O,q),i.renderBufferDirect(T,null,ne,O,P,q),P.onAfterShadow(i,P,k,T,ne,O,q)}}}else if(G.visible){const ie=z(P,G,U,V);P.onBeforeShadow(i,P,k,T,ne,ie,null),i.renderBufferDirect(T,null,ne,ie,P,null),P.onAfterShadow(i,P,k,T,ne,ie,null)}}const J=P.children;for(let ne=0,G=J.length;ne<G;ne++)b(J[ne],k,T,U,V)}function N(P){P.target.removeEventListener("dispose",N);for(const T in p){const U=p[T],V=P.target.uuid;V in U&&(U[V].dispose(),delete U[V])}}}function oC(i,e){function t(){let B=!1;const Le=new Jt;let ge=null;const De=new Jt(0,0,0,0);return{setMask:function(ze){ge!==ze&&!B&&(i.colorMask(ze,ze,ze,ze),ge=ze)},setLocked:function(ze){B=ze},setClear:function(ze,xe,et,Ke,Pt){Pt===!0&&(ze*=Ke,xe*=Ke,et*=Ke),Le.set(ze,xe,et,Ke),De.equals(Le)===!1&&(i.clearColor(ze,xe,et,Ke),De.copy(Le))},reset:function(){B=!1,ge=null,De.set(-1,0,0,0)}}}function a(){let B=!1,Le=!1,ge=null,De=null,ze=null;return{setReversed:function(xe){if(Le!==xe){const et=e.get("EXT_clip_control");xe?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Le=xe;const Ke=ze;ze=null,this.setClear(Ke)}},getReversed:function(){return Le},setTest:function(xe){xe?ue(i.DEPTH_TEST):Ee(i.DEPTH_TEST)},setMask:function(xe){ge!==xe&&!B&&(i.depthMask(xe),ge=xe)},setFunc:function(xe){if(Le&&(xe=Ly[xe]),De!==xe){switch(xe){case Jd:i.depthFunc(i.NEVER);break;case Qd:i.depthFunc(i.ALWAYS);break;case ef:i.depthFunc(i.LESS);break;case So:i.depthFunc(i.LEQUAL);break;case tf:i.depthFunc(i.EQUAL);break;case nf:i.depthFunc(i.GEQUAL);break;case rf:i.depthFunc(i.GREATER);break;case af:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}De=xe}},setLocked:function(xe){B=xe},setClear:function(xe){ze!==xe&&(ze=xe,Le&&(xe=1-xe),i.clearDepth(xe))},reset:function(){B=!1,ge=null,De=null,ze=null,Le=!1}}}function o(){let B=!1,Le=null,ge=null,De=null,ze=null,xe=null,et=null,Ke=null,Pt=null;return{setTest:function(wt){B||(wt?ue(i.STENCIL_TEST):Ee(i.STENCIL_TEST))},setMask:function(wt){Le!==wt&&!B&&(i.stencilMask(wt),Le=wt)},setFunc:function(wt,Mn,si){(ge!==wt||De!==Mn||ze!==si)&&(i.stencilFunc(wt,Mn,si),ge=wt,De=Mn,ze=si)},setOp:function(wt,Mn,si){(xe!==wt||et!==Mn||Ke!==si)&&(i.stencilOp(wt,Mn,si),xe=wt,et=Mn,Ke=si)},setLocked:function(wt){B=wt},setClear:function(wt){Pt!==wt&&(i.clearStencil(wt),Pt=wt)},reset:function(){B=!1,Le=null,ge=null,De=null,ze=null,xe=null,et=null,Ke=null,Pt=null}}}const l=new t,u=new a,d=new o,m=new WeakMap,p=new WeakMap;let v={},x={},_={},M=new WeakMap,w=[],R=null,y=!1,S=null,D=null,z=null,b=null,N=null,P=null,k=null,T=new yt(0,0,0),U=0,V=!1,X=null,J=null,ne=null,G=null,ie=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,q=0;const j=i.getParameter(i.VERSION);j.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(j)[1]),le=q>=1):j.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(j)[1]),le=q>=2);let O=null,L={};const K=i.getParameter(i.SCISSOR_BOX),_e=i.getParameter(i.VIEWPORT),He=new Jt().fromArray(K),Ce=new Jt().fromArray(_e);function we(B,Le,ge,De){const ze=new Uint8Array(4),xe=i.createTexture();i.bindTexture(B,xe),i.texParameteri(B,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(B,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<ge;et++)B===i.TEXTURE_3D||B===i.TEXTURE_2D_ARRAY?i.texImage3D(Le,0,i.RGBA,1,1,De,0,i.RGBA,i.UNSIGNED_BYTE,ze):i.texImage2D(Le+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ze);return xe}const ae={};ae[i.TEXTURE_2D]=we(i.TEXTURE_2D,i.TEXTURE_2D,1),ae[i.TEXTURE_CUBE_MAP]=we(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),ae[i.TEXTURE_2D_ARRAY]=we(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),ae[i.TEXTURE_3D]=we(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),ue(i.DEPTH_TEST),u.setFunc(So),gt(!1),Ht(cg),ue(i.CULL_FACE),mt(hr);function ue(B){v[B]!==!0&&(i.enable(B),v[B]=!0)}function Ee(B){v[B]!==!1&&(i.disable(B),v[B]=!1)}function Ye(B,Le){return _[B]!==Le?(i.bindFramebuffer(B,Le),_[B]=Le,B===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Le),B===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Le),!0):!1}function be(B,Le){let ge=w,De=!1;if(B){ge=M.get(Le),ge===void 0&&(ge=[],M.set(Le,ge));const ze=B.textures;if(ge.length!==ze.length||ge[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,et=ze.length;xe<et;xe++)ge[xe]=i.COLOR_ATTACHMENT0+xe;ge.length=ze.length,De=!0}}else ge[0]!==i.BACK&&(ge[0]=i.BACK,De=!0);De&&i.drawBuffers(ge)}function at(B){return R!==B?(i.useProgram(B),R=B,!0):!1}const Ft={[os]:i.FUNC_ADD,[JS]:i.FUNC_SUBTRACT,[QS]:i.FUNC_REVERSE_SUBTRACT};Ft[ey]=i.MIN,Ft[ty]=i.MAX;const dt={[ny]:i.ZERO,[iy]:i.ONE,[ry]:i.SRC_COLOR,[X0]:i.SRC_ALPHA,[uy]:i.SRC_ALPHA_SATURATE,[ly]:i.DST_COLOR,[sy]:i.DST_ALPHA,[ay]:i.ONE_MINUS_SRC_COLOR,[Y0]:i.ONE_MINUS_SRC_ALPHA,[cy]:i.ONE_MINUS_DST_COLOR,[oy]:i.ONE_MINUS_DST_ALPHA,[dy]:i.CONSTANT_COLOR,[fy]:i.ONE_MINUS_CONSTANT_COLOR,[hy]:i.CONSTANT_ALPHA,[py]:i.ONE_MINUS_CONSTANT_ALPHA};function mt(B,Le,ge,De,ze,xe,et,Ke,Pt,wt){if(B===hr){y===!0&&(Ee(i.BLEND),y=!1);return}if(y===!1&&(ue(i.BLEND),y=!0),B!==ZS){if(B!==S||wt!==V){if((D!==os||N!==os)&&(i.blendEquation(i.FUNC_ADD),D=os,N=os),wt)switch(B){case mo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFunc(i.ONE,i.ONE);break;case dg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Rt("WebGLState: Invalid blending: ",B);break}else switch(B){case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dg:Rt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fg:Rt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Rt("WebGLState: Invalid blending: ",B);break}z=null,b=null,P=null,k=null,T.set(0,0,0),U=0,S=B,V=wt}return}ze=ze||Le,xe=xe||ge,et=et||De,(Le!==D||ze!==N)&&(i.blendEquationSeparate(Ft[Le],Ft[ze]),D=Le,N=ze),(ge!==z||De!==b||xe!==P||et!==k)&&(i.blendFuncSeparate(dt[ge],dt[De],dt[xe],dt[et]),z=ge,b=De,P=xe,k=et),(Ke.equals(T)===!1||Pt!==U)&&(i.blendColor(Ke.r,Ke.g,Ke.b,Pt),T.copy(Ke),U=Pt),S=B,V=!1}function Ot(B,Le){B.side===Pi?Ee(i.CULL_FACE):ue(i.CULL_FACE);let ge=B.side===Kn;Le&&(ge=!ge),gt(ge),B.blending===mo&&B.transparent===!1?mt(hr):mt(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),u.setFunc(B.depthFunc),u.setTest(B.depthTest),u.setMask(B.depthWrite),l.setMask(B.colorWrite);const De=B.stencilWrite;d.setTest(De),De&&(d.setMask(B.stencilWriteMask),d.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),d.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),sn(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?ue(i.SAMPLE_ALPHA_TO_COVERAGE):Ee(i.SAMPLE_ALPHA_TO_COVERAGE)}function gt(B){X!==B&&(B?i.frontFace(i.CW):i.frontFace(i.CCW),X=B)}function Ht(B){B!==qS?(ue(i.CULL_FACE),B!==J&&(B===cg?i.cullFace(i.BACK):B===KS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ee(i.CULL_FACE),J=B}function en(B){B!==ne&&(le&&i.lineWidth(B),ne=B)}function sn(B,Le,ge){B?(ue(i.POLYGON_OFFSET_FILL),(G!==Le||ie!==ge)&&(G=Le,ie=ge,u.getReversed()&&(Le=-Le),i.polygonOffset(Le,ge))):Ee(i.POLYGON_OFFSET_FILL)}function Ut(B){B?ue(i.SCISSOR_TEST):Ee(i.SCISSOR_TEST)}function Xt(B){B===void 0&&(B=i.TEXTURE0+oe-1),O!==B&&(i.activeTexture(B),O=B)}function Y(B,Le,ge){ge===void 0&&(O===null?ge=i.TEXTURE0+oe-1:ge=O);let De=L[ge];De===void 0&&(De={type:void 0,texture:void 0},L[ge]=De),(De.type!==B||De.texture!==Le)&&(O!==ge&&(i.activeTexture(ge),O=ge),i.bindTexture(B,Le||ae[B]),De.type=B,De.texture=Le)}function cn(){const B=L[O];B!==void 0&&B.type!==void 0&&(i.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function bt(){try{i.compressedTexImage2D(...arguments)}catch(B){Rt("WebGLState:",B)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(B){Rt("WebGLState:",B)}}function E(){try{i.texSubImage2D(...arguments)}catch(B){Rt("WebGLState:",B)}}function Z(){try{i.texSubImage3D(...arguments)}catch(B){Rt("WebGLState:",B)}}function ce(){try{i.compressedTexSubImage2D(...arguments)}catch(B){Rt("WebGLState:",B)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(B){Rt("WebGLState:",B)}}function Te(){try{i.texStorage2D(...arguments)}catch(B){Rt("WebGLState:",B)}}function Pe(){try{i.texStorage3D(...arguments)}catch(B){Rt("WebGLState:",B)}}function pe(){try{i.texImage2D(...arguments)}catch(B){Rt("WebGLState:",B)}}function ve(){try{i.texImage3D(...arguments)}catch(B){Rt("WebGLState:",B)}}function Ne(B){return x[B]!==void 0?x[B]:i.getParameter(B)}function Ze(B,Le){x[B]!==Le&&(i.pixelStorei(B,Le),x[B]=Le)}function Ue(B){He.equals(B)===!1&&(i.scissor(B.x,B.y,B.z,B.w),He.copy(B))}function Re(B){Ce.equals(B)===!1&&(i.viewport(B.x,B.y,B.z,B.w),Ce.copy(B))}function Je(B,Le){let ge=p.get(Le);ge===void 0&&(ge=new WeakMap,p.set(Le,ge));let De=ge.get(B);De===void 0&&(De=i.getUniformBlockIndex(Le,B.name),ge.set(B,De))}function nt(B,Le){const De=p.get(Le).get(B);m.get(Le)!==De&&(i.uniformBlockBinding(Le,De,B.__bindingPointIndex),m.set(Le,De))}function st(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},x={},O=null,L={},_={},M=new WeakMap,w=[],R=null,y=!1,S=null,D=null,z=null,b=null,N=null,P=null,k=null,T=new yt(0,0,0),U=0,V=!1,X=null,J=null,ne=null,G=null,ie=null,He.set(0,0,i.canvas.width,i.canvas.height),Ce.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:ue,disable:Ee,bindFramebuffer:Ye,drawBuffers:be,useProgram:at,setBlending:mt,setMaterial:Ot,setFlipSided:gt,setCullFace:Ht,setLineWidth:en,setPolygonOffset:sn,setScissorTest:Ut,activeTexture:Xt,bindTexture:Y,unbindTexture:cn,compressedTexImage2D:bt,compressedTexImage3D:F,texImage2D:pe,texImage3D:ve,pixelStorei:Ze,getParameter:Ne,updateUBOMapping:Je,uniformBlockBinding:nt,texStorage2D:Te,texStorage3D:Pe,texSubImage2D:E,texSubImage3D:Z,compressedTexSubImage2D:ce,compressedTexSubImage3D:he,scissor:Ue,viewport:Re,reset:st}}function lC(i,e,t,a,o,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new ct,v=new WeakMap,x=new Set;let _;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function R(F,E){return w?new OffscreenCanvas(F,E):yc("canvas")}function y(F,E,Z){let ce=1;const he=bt(F);if((he.width>Z||he.height>Z)&&(ce=Z/Math.max(he.width,he.height)),ce<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Te=Math.floor(ce*he.width),Pe=Math.floor(ce*he.height);_===void 0&&(_=R(Te,Pe));const pe=E?R(Te,Pe):_;return pe.width=Te,pe.height=Pe,pe.getContext("2d").drawImage(F,0,0,Te,Pe),lt("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+Pe+")."),pe}else return"data"in F&&lt("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function S(F){return F.generateMipmaps}function D(F){i.generateMipmap(F)}function z(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function b(F,E,Z,ce,he,Te=!1){if(F!==null){if(i[F]!==void 0)return i[F];lt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Pe;ce&&(Pe=e.get("EXT_texture_norm16"),Pe||lt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===i.RED&&(Z===i.FLOAT&&(pe=i.R32F),Z===i.HALF_FLOAT&&(pe=i.R16F),Z===i.UNSIGNED_BYTE&&(pe=i.R8),Z===i.UNSIGNED_SHORT&&Pe&&(pe=Pe.R16_EXT),Z===i.SHORT&&Pe&&(pe=Pe.R16_SNORM_EXT)),E===i.RED_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pe=i.R8UI),Z===i.UNSIGNED_SHORT&&(pe=i.R16UI),Z===i.UNSIGNED_INT&&(pe=i.R32UI),Z===i.BYTE&&(pe=i.R8I),Z===i.SHORT&&(pe=i.R16I),Z===i.INT&&(pe=i.R32I)),E===i.RG&&(Z===i.FLOAT&&(pe=i.RG32F),Z===i.HALF_FLOAT&&(pe=i.RG16F),Z===i.UNSIGNED_BYTE&&(pe=i.RG8),Z===i.UNSIGNED_SHORT&&Pe&&(pe=Pe.RG16_EXT),Z===i.SHORT&&Pe&&(pe=Pe.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pe=i.RG8UI),Z===i.UNSIGNED_SHORT&&(pe=i.RG16UI),Z===i.UNSIGNED_INT&&(pe=i.RG32UI),Z===i.BYTE&&(pe=i.RG8I),Z===i.SHORT&&(pe=i.RG16I),Z===i.INT&&(pe=i.RG32I)),E===i.RGB_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),Z===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),Z===i.UNSIGNED_INT&&(pe=i.RGB32UI),Z===i.BYTE&&(pe=i.RGB8I),Z===i.SHORT&&(pe=i.RGB16I),Z===i.INT&&(pe=i.RGB32I)),E===i.RGBA_INTEGER&&(Z===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),Z===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),Z===i.UNSIGNED_INT&&(pe=i.RGBA32UI),Z===i.BYTE&&(pe=i.RGBA8I),Z===i.SHORT&&(pe=i.RGBA16I),Z===i.INT&&(pe=i.RGBA32I)),E===i.RGB&&(Z===i.UNSIGNED_SHORT&&Pe&&(pe=Pe.RGB16_EXT),Z===i.SHORT&&Pe&&(pe=Pe.RGB16_SNORM_EXT),Z===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),Z===i.UNSIGNED_INT_10F_11F_11F_REV&&(pe=i.R11F_G11F_B10F)),E===i.RGBA){const ve=Te?Sc:Tt.getTransfer(he);Z===i.FLOAT&&(pe=i.RGBA32F),Z===i.HALF_FLOAT&&(pe=i.RGBA16F),Z===i.UNSIGNED_BYTE&&(pe=ve===kt?i.SRGB8_ALPHA8:i.RGBA8),Z===i.UNSIGNED_SHORT&&Pe&&(pe=Pe.RGBA16_EXT),Z===i.SHORT&&Pe&&(pe=Pe.RGBA16_SNORM_EXT),Z===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),Z===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function N(F,E){let Z;return F?E===null||E===Yi||E===Mo?Z=i.DEPTH24_STENCIL8:E===Bi?Z=i.DEPTH32F_STENCIL8:E===yo&&(Z=i.DEPTH24_STENCIL8,lt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===Yi||E===Mo?Z=i.DEPTH_COMPONENT24:E===Bi?Z=i.DEPTH_COMPONENT32F:E===yo&&(Z=i.DEPTH_COMPONENT16),Z}function P(F,E){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==wn&&F.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function k(F){const E=F.target;E.removeEventListener("dispose",k),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&x.delete(E)}function T(F){const E=F.target;E.removeEventListener("dispose",T),X(E)}function U(F){const E=a.get(F);if(E.__webglInit===void 0)return;const Z=F.source,ce=M.get(Z);if(ce){const he=ce[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&V(F),Object.keys(ce).length===0&&M.delete(Z)}a.remove(F)}function V(F){const E=a.get(F);i.deleteTexture(E.__webglTexture);const Z=F.source,ce=M.get(Z);delete ce[E.__cacheKey],u.memory.textures--}function X(F){const E=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(E.__webglFramebuffer[ce]))for(let he=0;he<E.__webglFramebuffer[ce].length;he++)i.deleteFramebuffer(E.__webglFramebuffer[ce][he]);else i.deleteFramebuffer(E.__webglFramebuffer[ce]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ce])}else{if(Array.isArray(E.__webglFramebuffer))for(let ce=0;ce<E.__webglFramebuffer.length;ce++)i.deleteFramebuffer(E.__webglFramebuffer[ce]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ce=0;ce<E.__webglColorRenderbuffer.length;ce++)E.__webglColorRenderbuffer[ce]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ce]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const Z=F.textures;for(let ce=0,he=Z.length;ce<he;ce++){const Te=a.get(Z[ce]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),u.memory.textures--),a.remove(Z[ce])}a.remove(F)}let J=0;function ne(){J=0}function G(){return J}function ie(F){J=F}function oe(){const F=J;return F>=o.maxTextures&&lt("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+o.maxTextures),J+=1,F}function le(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function q(F,E){const Z=a.get(F);if(F.isVideoTexture&&Y(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&Z.__version!==F.version){const ce=F.image;if(ce===null)lt("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)lt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ee(Z,F,E);return}}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,Z.__webglTexture,i.TEXTURE0+E)}function j(F,E){const Z=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Ee(Z,F,E);return}else F.isExternalTexture&&(Z.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,Z.__webglTexture,i.TEXTURE0+E)}function O(F,E){const Z=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&Z.__version!==F.version){Ee(Z,F,E);return}t.bindTexture(i.TEXTURE_3D,Z.__webglTexture,i.TEXTURE0+E)}function L(F,E){const Z=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&Z.__version!==F.version){Ye(Z,F,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,Z.__webglTexture,i.TEXTURE0+E)}const K={[sf]:i.REPEAT,[dr]:i.CLAMP_TO_EDGE,[of]:i.MIRRORED_REPEAT},_e={[wn]:i.NEAREST,[vy]:i.NEAREST_MIPMAP_NEAREST,[Fl]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[vd]:i.LINEAR_MIPMAP_NEAREST,[ga]:i.LINEAR_MIPMAP_LINEAR},He={[yy]:i.NEVER,[Ay]:i.ALWAYS,[My]:i.LESS,[ah]:i.LEQUAL,[Ey]:i.EQUAL,[sh]:i.GEQUAL,[Ty]:i.GREATER,[wy]:i.NOTEQUAL};function Ce(F,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===vd||E.magFilter===Fl||E.magFilter===ga||E.minFilter===Fn||E.minFilter===vd||E.minFilter===Fl||E.minFilter===ga)&&lt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,K[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,K[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,K[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,_e[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,_e[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,He[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Fl&&E.minFilter!==ga||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const Z=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,Z.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,o.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function we(F,E){let Z=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",k));const ce=E.source;let he=M.get(ce);he===void 0&&(he={},M.set(ce,he));const Te=le(E);if(Te!==F.__cacheKey){he[Te]===void 0&&(he[Te]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,Z=!0),he[Te].usedTimes++;const Pe=he[F.__cacheKey];Pe!==void 0&&(he[F.__cacheKey].usedTimes--,Pe.usedTimes===0&&V(E)),F.__cacheKey=Te,F.__webglTexture=he[Te].texture}return Z}function ae(F,E,Z){return Math.floor(Math.floor(F/Z)/E)}function ue(F,E,Z,ce){const Te=F.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,Z,ce,E.data);else{Te.sort((Ze,Ue)=>Ze.start-Ue.start);let Pe=0;for(let Ze=1;Ze<Te.length;Ze++){const Ue=Te[Pe],Re=Te[Ze],Je=Ue.start+Ue.count,nt=ae(Re.start,E.width,4),st=ae(Ue.start,E.width,4);Re.start<=Je+1&&nt===st&&ae(Re.start+Re.count-1,E.width,4)===nt?Ue.count=Math.max(Ue.count,Re.start+Re.count-Ue.start):(++Pe,Te[Pe]=Re)}Te.length=Pe+1;const pe=t.getParameter(i.UNPACK_ROW_LENGTH),ve=t.getParameter(i.UNPACK_SKIP_PIXELS),Ne=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Ze=0,Ue=Te.length;Ze<Ue;Ze++){const Re=Te[Ze],Je=Math.floor(Re.start/4),nt=Math.ceil(Re.count/4),st=Je%E.width,B=Math.floor(Je/E.width),Le=nt,ge=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,st),t.pixelStorei(i.UNPACK_SKIP_ROWS,B),t.texSubImage2D(i.TEXTURE_2D,0,st,B,Le,ge,Z,ce,E.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,pe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,ve),t.pixelStorei(i.UNPACK_SKIP_ROWS,Ne)}}function Ee(F,E,Z){let ce=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ce=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ce=i.TEXTURE_3D);const he=we(F,E),Te=E.source;t.bindTexture(ce,F.__webglTexture,i.TEXTURE0+Z);const Pe=a.get(Te);if(Te.version!==Pe.__version||he===!0){if(t.activeTexture(i.TEXTURE0+Z),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ge=Tt.getPrimaries(Tt.workingColorSpace),De=E.colorSpace===Vr?null:Tt.getPrimaries(E.colorSpace),ze=E.colorSpace===Vr||ge===De?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ze)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let ve=y(E.image,!1,o.maxTextureSize);ve=cn(E,ve);const Ne=l.convert(E.format,E.colorSpace),Ze=l.convert(E.type);let Ue=b(E.internalFormat,Ne,Ze,E.normalized,E.colorSpace,E.isVideoTexture);Ce(ce,E);let Re;const Je=E.mipmaps,nt=E.isVideoTexture!==!0,st=Pe.__version===void 0||he===!0,B=Te.dataReady,Le=P(E,ve);if(E.isDepthTexture)Ue=N(E.format===va,E.type),st&&(nt?t.texStorage2D(i.TEXTURE_2D,1,Ue,ve.width,ve.height):t.texImage2D(i.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ne,Ze,null));else if(E.isDataTexture)if(Je.length>0){nt&&st&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,Je[0].width,Je[0].height);for(let ge=0,De=Je.length;ge<De;ge++)Re=Je[ge],nt?B&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Ne,Ze,Re.data):t.texImage2D(i.TEXTURE_2D,ge,Ue,Re.width,Re.height,0,Ne,Ze,Re.data);E.generateMipmaps=!1}else nt?(st&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,ve.width,ve.height),B&&ue(E,ve,Ne,Ze)):t.texImage2D(i.TEXTURE_2D,0,Ue,ve.width,ve.height,0,Ne,Ze,ve.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){nt&&st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,Je[0].width,Je[0].height,ve.depth);for(let ge=0,De=Je.length;ge<De;ge++)if(Re=Je[ge],E.format!==Di)if(Ne!==null)if(nt){if(B)if(E.layerUpdates.size>0){const ze=Bg(Re.width,Re.height,E.format,E.type);for(const xe of E.layerUpdates){const et=Re.data.subarray(xe*ze/Re.data.BYTES_PER_ELEMENT,(xe+1)*ze/Re.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,xe,Re.width,Re.height,1,Ne,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ve.depth,Ne,Re.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ge,Ue,Re.width,Re.height,ve.depth,0,Re.data,0,0);else lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else nt?B&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ge,0,0,0,Re.width,Re.height,ve.depth,Ne,Ze,Re.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ge,Ue,Re.width,Re.height,ve.depth,0,Ne,Ze,Re.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{nt&&st&&t.texStorage2D(i.TEXTURE_2D,Le,Ue,Je[0].width,Je[0].height);for(let ge=0,De=Je.length;ge<De;ge++)Re=Je[ge],E.format!==Di?Ne!==null?nt?B&&t.compressedTexSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Ne,Re.data):t.compressedTexImage2D(i.TEXTURE_2D,ge,Ue,Re.width,Re.height,0,Re.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):nt?B&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Re.width,Re.height,Ne,Ze,Re.data):t.texImage2D(i.TEXTURE_2D,ge,Ue,Re.width,Re.height,0,Ne,Ze,Re.data)}else if(E.isDataArrayTexture)if(nt){if(st&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Le,Ue,ve.width,ve.height,ve.depth),B)if(E.layerUpdates.size>0){const ge=Bg(ve.width,ve.height,E.format,E.type);for(const De of E.layerUpdates){const ze=ve.data.subarray(De*ge/ve.data.BYTES_PER_ELEMENT,(De+1)*ge/ve.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,De,ve.width,ve.height,1,Ne,Ze,ze)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,ve.width,ve.height,ve.depth,Ne,Ze,ve.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ue,ve.width,ve.height,ve.depth,0,Ne,Ze,ve.data);else if(E.isData3DTexture)nt?(st&&t.texStorage3D(i.TEXTURE_3D,Le,Ue,ve.width,ve.height,ve.depth),B&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,ve.width,ve.height,ve.depth,Ne,Ze,ve.data)):t.texImage3D(i.TEXTURE_3D,0,Ue,ve.width,ve.height,ve.depth,0,Ne,Ze,ve.data);else if(E.isFramebufferTexture){if(st)if(nt)t.texStorage2D(i.TEXTURE_2D,Le,Ue,ve.width,ve.height);else{let ge=ve.width,De=ve.height;for(let ze=0;ze<Le;ze++)t.texImage2D(i.TEXTURE_2D,ze,Ue,ge,De,0,Ne,Ze,null),ge>>=1,De>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ge=i.canvas;if(ge.hasAttribute("layoutsubtree")||ge.setAttribute("layoutsubtree","true"),ve.parentNode!==ge){ge.appendChild(ve),x.add(E),ge.onpaint=De=>{const ze=De.changedElements;for(const xe of x)ze.includes(xe.image)&&(xe.needsUpdate=!0)},ge.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,ve);else{const ze=i.RGBA,xe=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ze,xe,et,ve)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Je.length>0){if(nt&&st){const ge=bt(Je[0]);t.texStorage2D(i.TEXTURE_2D,Le,Ue,ge.width,ge.height)}for(let ge=0,De=Je.length;ge<De;ge++)Re=Je[ge],nt?B&&t.texSubImage2D(i.TEXTURE_2D,ge,0,0,Ne,Ze,Re):t.texImage2D(i.TEXTURE_2D,ge,Ue,Ne,Ze,Re);E.generateMipmaps=!1}else if(nt){if(st){const ge=bt(ve);t.texStorage2D(i.TEXTURE_2D,Le,Ue,ge.width,ge.height)}B&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Ne,Ze,ve)}else t.texImage2D(i.TEXTURE_2D,0,Ue,Ne,Ze,ve);S(E)&&D(ce),Pe.__version=Te.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Ye(F,E,Z){if(E.image.length!==6)return;const ce=we(F,E),he=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+Z);const Te=a.get(he);if(he.version!==Te.__version||ce===!0){t.activeTexture(i.TEXTURE0+Z);const Pe=Tt.getPrimaries(Tt.workingColorSpace),pe=E.colorSpace===Vr?null:Tt.getPrimaries(E.colorSpace),ve=E.colorSpace===Vr||Pe===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ve);const Ne=E.isCompressedTexture||E.image[0].isCompressedTexture,Ze=E.image[0]&&E.image[0].isDataTexture,Ue=[];for(let xe=0;xe<6;xe++)!Ne&&!Ze?Ue[xe]=y(E.image[xe],!0,o.maxCubemapSize):Ue[xe]=Ze?E.image[xe].image:E.image[xe],Ue[xe]=cn(E,Ue[xe]);const Re=Ue[0],Je=l.convert(E.format,E.colorSpace),nt=l.convert(E.type),st=b(E.internalFormat,Je,nt,E.normalized,E.colorSpace),B=E.isVideoTexture!==!0,Le=Te.__version===void 0||ce===!0,ge=he.dataReady;let De=P(E,Re);Ce(i.TEXTURE_CUBE_MAP,E);let ze;if(Ne){B&&Le&&t.texStorage2D(i.TEXTURE_CUBE_MAP,De,st,Re.width,Re.height);for(let xe=0;xe<6;xe++){ze=Ue[xe].mipmaps;for(let et=0;et<ze.length;et++){const Ke=ze[et];E.format!==Di?Je!==null?B?ge&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,Ke.width,Ke.height,Je,Ke.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,st,Ke.width,Ke.height,0,Ke.data):lt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,0,0,Ke.width,Ke.height,Je,nt,Ke.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et,st,Ke.width,Ke.height,0,Je,nt,Ke.data)}}}else{if(ze=E.mipmaps,B&&Le){ze.length>0&&De++;const xe=bt(Ue[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,De,st,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Ze){B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ue[xe].width,Ue[xe].height,Je,nt,Ue[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Ue[xe].width,Ue[xe].height,0,Je,nt,Ue[xe].data);for(let et=0;et<ze.length;et++){const Pt=ze[et].image[xe].image;B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Pt.width,Pt.height,Je,nt,Pt.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,st,Pt.width,Pt.height,0,Je,nt,Pt.data)}}else{B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Je,nt,Ue[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,st,Je,nt,Ue[xe]);for(let et=0;et<ze.length;et++){const Ke=ze[et];B?ge&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,0,0,Je,nt,Ke.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,et+1,st,Je,nt,Ke.image[xe])}}}S(E)&&D(i.TEXTURE_CUBE_MAP),Te.__version=he.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function be(F,E,Z,ce,he,Te){const Pe=l.convert(Z.format,Z.colorSpace),pe=l.convert(Z.type),ve=b(Z.internalFormat,Pe,pe,Z.normalized,Z.colorSpace),Ne=a.get(E),Ze=a.get(Z);if(Ze.__renderTarget=E,!Ne.__hasExternalTextures){const Ue=Math.max(1,E.width>>Te),Re=Math.max(1,E.height>>Te);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,Te,ve,Ue,Re,E.depth,0,Pe,pe,null):t.texImage2D(he,Te,ve,Ue,Re,0,Pe,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),Xt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ce,he,Ze.__webglTexture,0,Ut(E)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ce,he,Ze.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function at(F,E,Z){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){const ce=E.depthTexture,he=ce&&ce.isDepthTexture?ce.type:null,Te=N(E.stencilBuffer,he),Pe=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Xt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(E),Te,E.width,E.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(E),Te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Pe,i.RENDERBUFFER,F)}else{const ce=E.textures;for(let he=0;he<ce.length;he++){const Te=ce[he],Pe=l.convert(Te.format,Te.colorSpace),pe=l.convert(Te.type),ve=b(Te.internalFormat,Pe,pe,Te.normalized,Te.colorSpace);Xt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Ut(E),ve,E.width,E.height):Z?i.renderbufferStorageMultisample(i.RENDERBUFFER,Ut(E),ve,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,ve,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function Ft(F,E,Z){const ce=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=a.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ce){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",k)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,E.depthTexture);const Ne=l.convert(E.depthTexture.format),Ze=l.convert(E.depthTexture.type);let Ue;E.depthTexture.format===mr?Ue=i.DEPTH_COMPONENT24:E.depthTexture.format===va&&(Ue=i.DEPTH24_STENCIL8);for(let Re=0;Re<6;Re++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Re,0,Ue,E.width,E.height,0,Ne,Ze,null)}}else q(E.depthTexture,0);const Te=he.__webglTexture,Pe=Ut(E),pe=ce?i.TEXTURE_CUBE_MAP_POSITIVE_X+Z:i.TEXTURE_2D,ve=E.depthTexture.format===va?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===mr)Xt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,pe,Te,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,pe,Te,0);else if(E.depthTexture.format===va)Xt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ve,pe,Te,0,Pe):i.framebufferTexture2D(i.FRAMEBUFFER,ve,pe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function dt(F){const E=a.get(F),Z=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ce=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ce){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ce.removeEventListener("dispose",he)};ce.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ce}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(Z)for(let ce=0;ce<6;ce++)Ft(E.__webglFramebuffer[ce],F,ce);else{const ce=F.texture.mipmaps;ce&&ce.length>0?Ft(E.__webglFramebuffer[0],F,0):Ft(E.__webglFramebuffer,F,0)}else if(Z){E.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ce]),E.__webglDepthbuffer[ce]===void 0)E.__webglDepthbuffer[ce]=i.createRenderbuffer(),at(E.__webglDepthbuffer[ce],F,!1);else{const he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[ce];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Te)}}else{const ce=F.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),at(E.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function mt(F,E,Z){const ce=a.get(F);E!==void 0&&be(ce.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),Z!==void 0&&dt(F)}function Ot(F){const E=F.texture,Z=a.get(F),ce=a.get(E);F.addEventListener("dispose",T);const he=F.textures,Te=F.isWebGLCubeRenderTarget===!0,Pe=he.length>1;if(Pe||(ce.__webglTexture===void 0&&(ce.__webglTexture=i.createTexture()),ce.__version=E.version,u.memory.textures++),Te){Z.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer[pe]=[];for(let ve=0;ve<E.mipmaps.length;ve++)Z.__webglFramebuffer[pe][ve]=i.createFramebuffer()}else Z.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){Z.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)Z.__webglFramebuffer[pe]=i.createFramebuffer()}else Z.__webglFramebuffer=i.createFramebuffer();if(Pe)for(let pe=0,ve=he.length;pe<ve;pe++){const Ne=a.get(he[pe]);Ne.__webglTexture===void 0&&(Ne.__webglTexture=i.createTexture(),u.memory.textures++)}if(F.samples>0&&Xt(F)===!1){Z.__webglMultisampledFramebuffer=i.createFramebuffer(),Z.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,Z.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const ve=he[pe];Z.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,Z.__webglColorRenderbuffer[pe]);const Ne=l.convert(ve.format,ve.colorSpace),Ze=l.convert(ve.type),Ue=b(ve.internalFormat,Ne,Ze,ve.normalized,ve.colorSpace,F.isXRRenderTarget===!0),Re=Ut(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Re,Ue,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,Z.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(Z.__webglDepthRenderbuffer=i.createRenderbuffer(),at(Z.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,ce.__webglTexture),Ce(i.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)be(Z.__webglFramebuffer[pe][ve],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,ve);else be(Z.__webglFramebuffer[pe],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(E)&&D(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Pe){for(let pe=0,ve=he.length;pe<ve;pe++){const Ne=he[pe],Ze=a.get(Ne);let Ue=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ue=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ue,Ze.__webglTexture),Ce(Ue,Ne),be(Z.__webglFramebuffer,F,Ne,i.COLOR_ATTACHMENT0+pe,Ue,0),S(Ne)&&D(Ue)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ce.__webglTexture),Ce(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let ve=0;ve<E.mipmaps.length;ve++)be(Z.__webglFramebuffer[ve],F,E,i.COLOR_ATTACHMENT0,pe,ve);else be(Z.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,pe,0);S(E)&&D(pe),t.unbindTexture()}F.depthBuffer&&dt(F)}function gt(F){const E=F.textures;for(let Z=0,ce=E.length;Z<ce;Z++){const he=E[Z];if(S(he)){const Te=z(F),Pe=a.get(he).__webglTexture;t.bindTexture(Te,Pe),D(Te),t.unbindTexture()}}}const Ht=[],en=[];function sn(F){if(F.samples>0){if(Xt(F)===!1){const E=F.textures,Z=F.width,ce=F.height;let he=i.COLOR_BUFFER_BIT;const Te=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Pe=a.get(F),pe=E.length>1;if(pe)for(let Ne=0;Ne<E.length;Ne++)t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer);const ve=F.texture.mipmaps;ve&&ve.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglFramebuffer);for(let Ne=0;Ne<E.length;Ne++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const Ze=a.get(E[Ne]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Ze,0)}i.blitFramebuffer(0,0,Z,ce,0,0,Z,ce,he,i.NEAREST),m===!0&&(Ht.length=0,en.length=0,Ht.push(i.COLOR_ATTACHMENT0+Ne),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Ht.push(Te),en.push(Te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,en)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Ht))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let Ne=0;Ne<E.length;Ne++){t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.RENDERBUFFER,Pe.__webglColorRenderbuffer[Ne]);const Ze=a.get(E[Ne]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Pe.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Ne,i.TEXTURE_2D,Ze,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Pe.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&m){const E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Ut(F){return Math.min(o.maxSamples,F.samples)}function Xt(F){const E=a.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(F){const E=u.render.frame;v.get(F)!==E&&(v.set(F,E),F.update())}function cn(F,E){const Z=F.colorSpace,ce=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||Z!==xc&&Z!==Vr&&(Tt.getTransfer(Z)===kt?(ce!==Di||he!==ri)&&lt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Rt("WebGLTextures: Unsupported texture color space:",Z)),E}function bt(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ne,this.getTextureUnits=G,this.setTextureUnits=ie,this.setTexture2D=q,this.setTexture2DArray=j,this.setTexture3D=O,this.setTextureCube=L,this.rebindTextures=mt,this.setupRenderTarget=Ot,this.updateRenderTargetMipmap=gt,this.updateMultisampleRenderTarget=sn,this.setupDepthRenderbuffer=dt,this.setupFrameBufferTexture=be,this.useMultisampledRTT=Xt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cC(i,e){function t(a,o=Vr){let l;const u=Tt.getTransfer(o);if(a===ri)return i.UNSIGNED_BYTE;if(a===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(a===th)return i.UNSIGNED_SHORT_5_5_5_1;if(a===rv)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===av)return i.UNSIGNED_INT_10F_11F_11F_REV;if(a===nv)return i.BYTE;if(a===iv)return i.SHORT;if(a===yo)return i.UNSIGNED_SHORT;if(a===Qf)return i.INT;if(a===Yi)return i.UNSIGNED_INT;if(a===Bi)return i.FLOAT;if(a===$i)return i.HALF_FLOAT;if(a===sv)return i.ALPHA;if(a===ov)return i.RGB;if(a===Di)return i.RGBA;if(a===mr)return i.DEPTH_COMPONENT;if(a===va)return i.DEPTH_STENCIL;if(a===lv)return i.RED;if(a===nh)return i.RED_INTEGER;if(a===Ma)return i.RG;if(a===ih)return i.RG_INTEGER;if(a===rh)return i.RGBA_INTEGER;if(a===lc||a===cc||a===uc||a===dc)if(u===kt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===lc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===lc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===uc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===dc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===lf||a===cf||a===uf||a===df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===cf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ff||a===hf||a===pf||a===mf||a===gf||a===vc||a===vf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===ff||a===hf)return u===kt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===pf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===mf)return l.COMPRESSED_R11_EAC;if(a===gf)return l.COMPRESSED_SIGNED_R11_EAC;if(a===vc)return l.COMPRESSED_RG11_EAC;if(a===vf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===_f||a===xf||a===Sf||a===yf||a===Mf||a===Ef||a===Tf||a===wf||a===Af||a===Cf||a===Rf||a===bf||a===Pf||a===Lf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===_f)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===yf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ef)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Tf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Af)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Cf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Rf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===bf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Pf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Lf)return u===kt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Df||a===Nf||a===Uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Df)return u===kt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Nf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ff||a===Of||a===_c||a===If)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Ff)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Of)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_c)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===If)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Mo?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:t}}const uC=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,dC=`
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

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new mv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new qi({vertexShader:uC,fragmentShader:dC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new bc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hC extends Yr{constructor(e,t){super();const a=this;let o=null,l=1,u=null,d="local-floor",m=1,p=null,v=null,x=null,_=null,M=null,w=null;const R=typeof XRWebGLBinding<"u",y=new fC,S={},D=t.getContextAttributes();let z=null,b=null;const N=[],P=[],k=new ct;let T=null,U=null;const V=new mi;V.viewport=new Jt;const X=new mi;X.viewport=new Jt;const J=[V,X],ne=new xM;let G=null,ie=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ae){let ue=N[ae];return ue===void 0&&(ue=new wd,N[ae]=ue),ue.getTargetRaySpace()},this.getControllerGrip=function(ae){let ue=N[ae];return ue===void 0&&(ue=new wd,N[ae]=ue),ue.getGripSpace()},this.getHand=function(ae){let ue=N[ae];return ue===void 0&&(ue=new wd,N[ae]=ue),ue.getHandSpace()};function oe(ae){const ue=P.indexOf(ae.inputSource);if(ue===-1)return;const Ee=N[ue];Ee!==void 0&&(Ee.update(ae.inputSource,ae.frame,p||u),Ee.dispatchEvent({type:ae.type,data:ae.inputSource}))}function le(){o.removeEventListener("select",oe),o.removeEventListener("selectstart",oe),o.removeEventListener("selectend",oe),o.removeEventListener("squeeze",oe),o.removeEventListener("squeezestart",oe),o.removeEventListener("squeezeend",oe),o.removeEventListener("end",le),o.removeEventListener("inputsourceschange",q);for(let ae=0;ae<N.length;ae++){const ue=P[ae];ue!==null&&(P[ae]=null,N[ae].disconnect(ue))}G=null,ie=null,y.reset();for(const ae in S)delete S[ae];if(e.setRenderTarget(z),M=null,_=null,x=null,o=null,b=null,we.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(k.width,k.height,!1),U!==null){const ae=U.camera;ae.fov=U.fov,ae.zoom=U.zoom,ae.updateProjectionMatrix(),U=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ae){l=ae,a.isPresenting===!0&&lt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ae){d=ae,a.isPresenting===!0&&lt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(ae){p=ae},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x===null&&R&&(x=new XRWebGLBinding(o,t)),x},this.getFrame=function(){return w},this.getSession=function(){return o},this.setSession=async function(ae){if(o=ae,o!==null){if(z=e.getRenderTarget(),o.addEventListener("select",oe),o.addEventListener("selectstart",oe),o.addEventListener("selectend",oe),o.addEventListener("squeeze",oe),o.addEventListener("squeezestart",oe),o.addEventListener("squeezeend",oe),o.addEventListener("end",le),o.addEventListener("inputsourceschange",q),D.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(k),R&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ee=null,Ye=null,be=null;D.depth&&(be=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ee=D.stencil?va:mr,Ye=D.stencil?Mo:Yi);const at={colorFormat:t.RGBA8,depthFormat:be,scaleFactor:l};x=this.getBinding(),_=x.createProjectionLayer(at),o.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),b=new Ui(_.textureWidth,_.textureHeight,{format:Di,type:ri,depthTexture:new To(_.textureWidth,_.textureHeight,Ye,void 0,void 0,void 0,void 0,void 0,void 0,Ee),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ee={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(o,t,Ee),o.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),b=new Ui(M.framebufferWidth,M.framebufferHeight,{format:Di,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}b.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await o.requestReferenceSpace(d),we.setContext(o),we.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(o!==null)return o.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(ae){for(let ue=0;ue<ae.removed.length;ue++){const Ee=ae.removed[ue],Ye=P.indexOf(Ee);Ye>=0&&(P[Ye]=null,N[Ye].disconnect(Ee))}for(let ue=0;ue<ae.added.length;ue++){const Ee=ae.added[ue];let Ye=P.indexOf(Ee);if(Ye===-1){for(let at=0;at<N.length;at++)if(at>=P.length){P.push(Ee),Ye=at;break}else if(P[at]===null){P[at]=Ee,Ye=at;break}if(Ye===-1)break}const be=N[Ye];be&&be.connect(Ee)}}const j=new ee,O=new ee;function L(ae,ue,Ee){j.setFromMatrixPosition(ue.matrixWorld),O.setFromMatrixPosition(Ee.matrixWorld);const Ye=j.distanceTo(O),be=ue.projectionMatrix.elements,at=Ee.projectionMatrix.elements,Ft=be[14]/(be[10]-1),dt=be[14]/(be[10]+1),mt=(be[9]+1)/be[5],Ot=(be[9]-1)/be[5],gt=(be[8]-1)/be[0],Ht=(at[8]+1)/at[0],en=Ft*gt,sn=Ft*Ht,Ut=Ye/(-gt+Ht),Xt=Ut*-gt;if(ue.matrixWorld.decompose(ae.position,ae.quaternion,ae.scale),ae.translateX(Xt),ae.translateZ(Ut),ae.matrixWorld.compose(ae.position,ae.quaternion,ae.scale),ae.matrixWorldInverse.copy(ae.matrixWorld).invert(),be[10]===-1)ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse);else{const Y=Ft+Ut,cn=dt+Ut,bt=en-Xt,F=sn+(Ye-Xt),E=mt*dt/cn*Y,Z=Ot*dt/cn*Y;ae.projectionMatrix.makePerspective(bt,F,E,Z,Y,cn),ae.projectionMatrixInverse.copy(ae.projectionMatrix).invert()}}function K(ae,ue){ue===null?ae.matrixWorld.copy(ae.matrix):ae.matrixWorld.multiplyMatrices(ue.matrixWorld,ae.matrix),ae.matrixWorldInverse.copy(ae.matrixWorld).invert()}this.updateCamera=function(ae){if(o===null)return;let ue=ae.near,Ee=ae.far;y.texture!==null&&(y.depthNear>0&&(ue=y.depthNear),y.depthFar>0&&(Ee=y.depthFar)),ne.near=X.near=V.near=ue,ne.far=X.far=V.far=Ee,(G!==ne.near||ie!==ne.far)&&(o.updateRenderState({depthNear:ne.near,depthFar:ne.far}),G=ne.near,ie=ne.far),ne.layers.mask=ae.layers.mask|6,V.layers.mask=ne.layers.mask&-5,X.layers.mask=ne.layers.mask&-3;const Ye=ae.parent,be=ne.cameras;K(ne,Ye);for(let at=0;at<be.length;at++)K(be[at],Ye);be.length===2?L(ne,V,X):ne.projectionMatrix.copy(V.projectionMatrix),U===null&&ae.isPerspectiveCamera&&(U={camera:ae,fov:ae.fov,zoom:ae.zoom}),_e(ae,ne,Ye)};function _e(ae,ue,Ee){Ee===null?ae.matrix.copy(ue.matrixWorld):(ae.matrix.copy(Ee.matrixWorld),ae.matrix.invert(),ae.matrix.multiply(ue.matrixWorld)),ae.matrix.decompose(ae.position,ae.quaternion,ae.scale),ae.updateMatrixWorld(!0),ae.projectionMatrix.copy(ue.projectionMatrix),ae.projectionMatrixInverse.copy(ue.projectionMatrixInverse),ae.isPerspectiveCamera&&(ae.fov=zf*2*Math.atan(1/ae.projectionMatrix.elements[5]),ae.zoom=1)}this.getCamera=function(){return ne},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(ae){m=ae,_!==null&&(_.fixedFoveation=ae),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=ae)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ne)},this.getCameraTexture=function(ae){return S[ae]};let He=null;function Ce(ae,ue){if(v=ue.getViewerPose(p||u),w=ue,v!==null){const Ee=v.views;M!==null&&(e.setRenderTargetFramebuffer(b,M.framebuffer),e.setRenderTarget(b));let Ye=!1;Ee.length!==ne.cameras.length&&(ne.cameras.length=0,Ye=!0);for(let dt=0;dt<Ee.length;dt++){const mt=Ee[dt];let Ot=null;if(M!==null)Ot=M.getViewport(mt);else{const Ht=x.getViewSubImage(_,mt);Ot=Ht.viewport,dt===0&&(e.setRenderTargetTextures(b,Ht.colorTexture,Ht.depthStencilTexture),e.setRenderTarget(b))}let gt=J[dt];gt===void 0&&(gt=new mi,gt.layers.enable(dt),gt.viewport=new Jt,J[dt]=gt),gt.matrix.fromArray(mt.transform.matrix),gt.matrix.decompose(gt.position,gt.quaternion,gt.scale),gt.projectionMatrix.fromArray(mt.projectionMatrix),gt.projectionMatrixInverse.copy(gt.projectionMatrix).invert(),gt.viewport.set(Ot.x,Ot.y,Ot.width,Ot.height),dt===0&&(ne.matrix.copy(gt.matrix),ne.matrix.decompose(ne.position,ne.quaternion,ne.scale)),Ye===!0&&ne.cameras.push(gt)}const be=o.enabledFeatures;if(be&&be.includes("depth-sensing")&&o.depthUsage=="gpu-optimized"&&R){x=a.getBinding();const dt=x.getDepthInformation(Ee[0]);dt&&dt.isValid&&dt.texture&&y.init(dt,o.renderState)}if(be&&be.includes("camera-access")&&R){e.state.unbindTexture(),x=a.getBinding();for(let dt=0;dt<Ee.length;dt++){const mt=Ee[dt].camera;if(mt){let Ot=S[mt];Ot||(Ot=new mv,S[mt]=Ot);const gt=x.getCameraImage(mt);Ot.sourceTexture=gt}}}}for(let Ee=0;Ee<N.length;Ee++){const Ye=P[Ee],be=N[Ee];Ye!==null&&be!==void 0&&be.update(Ye,ue,p||u)}He&&He(ae,ue),ue.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:ue}),w=null}const we=new xv;we.setAnimationLoop(Ce),this.setAnimationLoop=function(ae){He=ae},this.dispose=function(){}}}const pC=new Qt,Av=new ht;Av.set(-1,0,0,0,1,0,0,0,1);function mC(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,gv(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function o(y,S,D,z,b){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,b)):S.isMeshMatcapMaterial?(l(y,S),w(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),R(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,D,z):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=e.get(S),z=D.envMap,b=D.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(pC.makeRotationFromEuler(b)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Av),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,D,z){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=z*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function R(y,S){const D=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:o}}function gC(i,e,t,a){let o={},l={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(b,N){const P=N.program;a.uniformBlockBinding(b,P)}function p(b,N){let P=o[b.id];P===void 0&&(y(b),P=v(b),o[b.id]=P,b.addEventListener("dispose",D));const k=N.program;a.updateUBOMapping(b,k);const T=e.render.frame;l[b.id]!==T&&(_(b),l[b.id]=T)}function v(b){const N=x();b.__bindingPointIndex=N;const P=i.createBuffer(),k=b.__size,T=b.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,k,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,N,P),P}function x(){for(let b=0;b<d;b++)if(u.indexOf(b)===-1)return u.push(b),b;return Rt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(b){const N=o[b.id],P=b.uniforms,k=b.__cache;i.bindBuffer(i.UNIFORM_BUFFER,N);for(let T=0,U=P.length;T<U;T++){const V=P[T];if(Array.isArray(V))for(let X=0,J=V.length;X<J;X++)M(V[X],T,X,k);else M(V,T,0,k)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(b,N,P,k){if(R(b,N,P,k)===!0){const T=b.__offset,U=b.value;if(Array.isArray(U)){let V=0;for(let X=0;X<U.length;X++){const J=U[X],ne=S(J);w(J,b.__data,V),typeof J!="number"&&typeof J!="boolean"&&!J.isMatrix3&&!ArrayBuffer.isView(J)&&(V+=ne.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(U,b.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,b.__data)}}function w(b,N,P){typeof b=="number"||typeof b=="boolean"?N[0]=b:b.isMatrix3?(N[0]=b.elements[0],N[1]=b.elements[1],N[2]=b.elements[2],N[3]=0,N[4]=b.elements[3],N[5]=b.elements[4],N[6]=b.elements[5],N[7]=0,N[8]=b.elements[6],N[9]=b.elements[7],N[10]=b.elements[8],N[11]=0):ArrayBuffer.isView(b)?N.set(new b.constructor(b.buffer,b.byteOffset,N.length)):b.toArray(N,P)}function R(b,N,P,k){const T=b.value,U=N+"_"+P;if(k[U]===void 0)return typeof T=="number"||typeof T=="boolean"?k[U]=T:ArrayBuffer.isView(T)?k[U]=T.slice():k[U]=T.clone(),!0;{const V=k[U];if(typeof T=="number"||typeof T=="boolean"){if(V!==T)return k[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(V.equals(T)===!1)return V.copy(T),!0}}return!1}function y(b){const N=b.uniforms;let P=0;const k=16;for(let U=0,V=N.length;U<V;U++){const X=Array.isArray(N[U])?N[U]:[N[U]];for(let J=0,ne=X.length;J<ne;J++){const G=X[J],ie=Array.isArray(G.value)?G.value:[G.value];for(let oe=0,le=ie.length;oe<le;oe++){const q=ie[oe],j=S(q),O=P%k,L=O%j.boundary,K=O+L;P+=L,K!==0&&k-K<j.storage&&(P+=k-K),G.__data=new Float32Array(j.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=P,P+=j.storage}}}const T=P%k;return T>0&&(P+=k-T),b.__size=P,b.__cache={},this}function S(b){const N={boundary:0,storage:0};return typeof b=="number"||typeof b=="boolean"?(N.boundary=4,N.storage=4):b.isVector2?(N.boundary=8,N.storage=8):b.isVector3||b.isColor?(N.boundary=16,N.storage=12):b.isVector4?(N.boundary=16,N.storage=16):b.isMatrix3?(N.boundary=48,N.storage=48):b.isMatrix4?(N.boundary=64,N.storage=64):b.isTexture?lt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(b)?(N.boundary=16,N.storage=b.byteLength):lt("WebGLRenderer: Unsupported uniform value type.",b),N}function D(b){const N=b.target;N.removeEventListener("dispose",D);const P=u.indexOf(N.__bindingPointIndex);u.splice(P,1),i.deleteBuffer(o[N.id]),delete o[N.id],delete l[N.id]}function z(){for(const b in o)i.deleteBuffer(o[b]);u=[],o={},l={}}return{bind:m,update:p,dispose:z}}const vC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function _C(){return Hi===null&&(Hi=new tM(vC,16,16,Ma,$i),Hi.name="DFG_LUT",Hi.minFilter=Fn,Hi.magFilter=Fn,Hi.wrapS=dr,Hi.wrapT=dr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class xC{constructor(e={}){const{canvas:t=by(),context:a=null,depth:o=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ri}=e;this.isWebGLRenderer=!0;let w;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=a.getContextAttributes().alpha}else w=u;const R=M,y=new Set([rh,ih,nh]),S=new Set([ri,Yi,yo,Mo,eh,th]),D=new Uint32Array(4),z=new Int32Array(4),b=new ee;let N=null,P=null;const k=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const V=this;let X=!1,J=null,ne=null,G=null,ie=null;this._outputColorSpace=ii;let oe=0,le=0,q=null,j=-1,O=null;const L=new Jt,K=new Jt;let _e=null;const He=new yt(0);let Ce=0,we=t.width,ae=t.height,ue=1,Ee=null,Ye=null;const be=new Jt(0,0,we,ae),at=new Jt(0,0,we,ae);let Ft=!1;const dt=new fh;let mt=!1,Ot=!1;const gt=new Qt,Ht=new ee,en=new Jt,sn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Ut=!1;function Xt(){return q===null?ue:1}let Y=a;function cn(C,W){return t.getContext(C,W)}let bt,F,E,Z,ce,he,Te,Pe,pe,ve,Ne,Ze,Ue,Re,Je,nt,st,B,Le,ge,De,ze,xe;try{const C={alpha:!0,depth:o,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",Pt,!1),t.addEventListener("webglcontextrestored",wt,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),Y===null){const W="webgl2";if(Y=cn(W,C),Y===null)throw cn(W)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(C){throw t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Rt("WebGLRenderer: "+C.message),C}function et(){bt=new _w(Y),bt.init(),De=new cC(Y,bt),F=new lw(Y,bt,e,De),E=new oC(Y,bt),F.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ne=Y.createFramebuffer(),G=Y.createFramebuffer(),ie=Y.createFramebuffer(),Z=new yw(Y),ce=new $A,he=new lC(Y,bt,E,ce,F,De,Z),Te=new vw(V),Pe=new EM(Y),ze=new sw(Y,Pe),pe=new xw(Y,Pe,Z,ze),ve=new Ew(Y,pe,Pe,ze,Z),B=new Mw(Y,F,he),Je=new cw(ce),Ne=new YA(V,Te,bt,F,ze,Je),Ze=new mC(V,ce),Ue=new KA,Re=new tC(bt),st=new aw(V,Te,E,ve,w,m),nt=new sC(V,ve,F),xe=new gC(Y,Z,F,E),Le=new ow(Y,bt,Z),ge=new Sw(Y,bt,Z),Z.programs=Ne.programs,V.capabilities=F,V.extensions=bt,V.properties=ce,V.renderLists=Ue,V.shadowMap=nt,V.state=E,V.info=Z}R!==ri&&(U=new ww(R,t.width,t.height,d,o,l));const Ke=new hC(V,Y);this.xr=Ke,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=bt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=bt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return ue},this.setPixelRatio=function(C){C!==void 0&&(ue=C,this.setSize(we,ae,!1))},this.getSize=function(C){return C.set(we,ae)},this.setSize=function(C,W,de=!0){if(Ke.isPresenting){lt("WebGLRenderer: Can't change size while VR device is presenting.");return}we=C,ae=W,t.width=Math.floor(C*ue),t.height=Math.floor(W*ue),de===!0&&(t.style.width=C+"px",t.style.height=W+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,C,W)},this.getDrawingBufferSize=function(C){return C.set(we*ue,ae*ue).floor()},this.setDrawingBufferSize=function(C,W,de){we=C,ae=W,ue=de,t.width=Math.floor(C*de),t.height=Math.floor(W*de),this.setViewport(0,0,C,W)},this.setEffects=function(C){if(R===ri){Rt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let W=0;W<C.length;W++)if(C[W].isOutputPass===!0){lt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(L)},this.getViewport=function(C){return C.copy(be)},this.setViewport=function(C,W,de,te){C.isVector4?be.set(C.x,C.y,C.z,C.w):be.set(C,W,de,te),E.viewport(L.copy(be).multiplyScalar(ue).round())},this.getScissor=function(C){return C.copy(at)},this.setScissor=function(C,W,de,te){C.isVector4?at.set(C.x,C.y,C.z,C.w):at.set(C,W,de,te),E.scissor(K.copy(at).multiplyScalar(ue).round())},this.getScissorTest=function(){return Ft},this.setScissorTest=function(C){E.setScissorTest(Ft=C)},this.setOpaqueSort=function(C){Ee=C},this.setTransparentSort=function(C){Ye=C},this.getClearColor=function(C){return C.copy(st.getClearColor())},this.setClearColor=function(){st.setClearColor(...arguments)},this.getClearAlpha=function(){return st.getClearAlpha()},this.setClearAlpha=function(){st.setClearAlpha(...arguments)},this.clear=function(C=!0,W=!0,de=!0){let te=0;if(C){let Q=!1;if(q!==null){const Ie=q.texture.format;Q=y.has(Ie)}if(Q){const Ie=q.texture.type,Fe=S.has(Ie),Oe=st.getClearColor(),$e=st.getClearAlpha(),Qe=Oe.r,ut=Oe.g,pt=Oe.b;Fe?(D[0]=Qe,D[1]=ut,D[2]=pt,D[3]=$e,Y.clearBufferuiv(Y.COLOR,0,D)):(z[0]=Qe,z[1]=ut,z[2]=pt,z[3]=$e,Y.clearBufferiv(Y.COLOR,0,z))}else te|=Y.COLOR_BUFFER_BIT}W&&(te|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(te|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),te!==0&&Y.clear(te)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),J=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Pt,!1),t.removeEventListener("webglcontextrestored",wt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),st.dispose(),Ue.dispose(),Re.dispose(),ce.dispose(),Te.dispose(),ve.dispose(),ze.dispose(),xe.dispose(),Ne.dispose(),Ke.dispose(),Ke.removeEventListener("sessionstart",Po),Ke.removeEventListener("sessionend",Lo),On.stop()};function Pt(C){C.preventDefault(),mg("WebGLRenderer: Context Lost."),X=!0}function wt(){mg("WebGLRenderer: Context Restored."),X=!1;const C=Z.autoReset,W=nt.enabled,de=nt.autoUpdate,te=nt.needsUpdate,Q=nt.type;et(),Z.autoReset=C,nt.enabled=W,nt.autoUpdate=de,nt.needsUpdate=te,nt.type=Q}function Mn(C){Rt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function si(C){const W=C.target;W.removeEventListener("dispose",si),$r(W)}function $r(C){Ea(C),ce.remove(C)}function Ea(C){const W=ce.get(C).programs;W!==void 0&&(W.forEach(function(de){Ne.releaseProgram(de)}),C.isShaderMaterial&&Ne.releaseShaderCache(C))}this.renderBufferDirect=function(C,W,de,te,Q,Ie){W===null&&(W=sn);const Fe=Q.isMesh&&Q.matrixWorld.determinantAffine()<0,Oe=Kt(C,W,de,te,Q);E.setMaterial(te,Fe);let $e=de.index,Qe=1;if(te.wireframe===!0){if($e=pe.getWireframeAttribute(de),$e===void 0)return;Qe=2}const ut=de.drawRange,pt=de.attributes.position;let We=ut.start*Qe,Mt=(ut.start+ut.count)*Qe;Ie!==null&&(We=Math.max(We,Ie.start*Qe),Mt=Math.min(Mt,(Ie.start+Ie.count)*Qe)),$e!==null?(We=Math.max(We,0),Mt=Math.min(Mt,$e.count)):pt!=null&&(We=Math.max(We,0),Mt=Math.min(Mt,pt.count));const tn=Mt-We;if(tn<0||tn===1/0)return;ze.setup(Q,te,Oe,de,$e);let Vt,Nt=Le;if($e!==null&&(Vt=Pe.get($e),Nt=ge,Nt.setIndex(Vt)),Q.isMesh)te.wireframe===!0?(E.setLineWidth(te.wireframeLinewidth*Xt()),Nt.setMode(Y.LINES)):Nt.setMode(Y.TRIANGLES);else if(Q.isLine){let un=te.linewidth;un===void 0&&(un=1),E.setLineWidth(un*Xt()),Q.isLineSegments?Nt.setMode(Y.LINES):Q.isLineLoop?Nt.setMode(Y.LINE_LOOP):Nt.setMode(Y.LINE_STRIP)}else Q.isPoints?Nt.setMode(Y.POINTS):Q.isSprite&&Nt.setMode(Y.TRIANGLES);if(Q.isBatchedMesh)if(bt.get("WEBGL_multi_draw"))Nt.renderMultiDraw(Q._multiDrawStarts,Q._multiDrawCounts,Q._multiDrawCount);else{const un=Q._multiDrawStarts,Ve=Q._multiDrawCounts,rn=Q._multiDrawCount,Et=$e?Pe.get($e).bytesPerElement:1,Rn=ce.get(te).currentProgram.getUniforms();for(let vt=0;vt<rn;vt++)Rn.setValue(Y,"_gl_DrawID",vt),Nt.render(un[vt]/Et,Ve[vt])}else if(Q.isInstancedMesh)Nt.renderInstances(We,tn,Q.count);else if(de.isInstancedBufferGeometry){const un=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,Ve=Math.min(de.instanceCount,un);Nt.renderInstances(We,tn,Ve)}else Nt.render(We,tn)};function qr(C,W,de,te){J!==null&&C.isNodeMaterial&&J.setObject(te,C),mt===!0&&Je.setState(C,de,!1),C.transparent===!0&&C.side===Pi&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,Zr(C,W,te),C.side=Sa,C.needsUpdate=!0,Zr(C,W,te),C.side=Pi):Zr(C,W,te)}this.compile=function(C,W,de=null){de===null&&(de=C),J!==null&&J.renderStart(C,W,de),P=Re.get(de),P.init(W),T.push(P),de.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),C!==de&&C.traverseVisible(function(Q){Q.isLight&&Q.layers.test(W.layers)&&(P.pushLight(Q),Q.castShadow&&P.pushShadow(Q))}),P.setupLights(),J!==null&&J.updateLights(P.state.lightsArray),Ot=this.localClippingEnabled,mt=Je.init(this.clippingPlanes,Ot),mt===!0&&Je.setGlobalState(this.clippingPlanes,W),J!==null&&nt.render(P.state.shadowsArray,de,W);const te=new Set;return C.traverse(function(Q){if(!(Q.isMesh||Q.isPoints||Q.isLine||Q.isSprite))return;const Ie=Q.material;if(Ie)if(Array.isArray(Ie))for(let Fe=0;Fe<Ie.length;Fe++){const Oe=Ie[Fe];qr(Oe,de,W,Q),te.add(Oe)}else qr(Ie,de,W,Q),te.add(Ie)}),P=T.pop(),J!==null&&J.renderEnd(),te},this.compileAsync=function(C,W,de=null){const te=this.compile(C,W,de);return new Promise(Q=>{function Ie(){if(te.forEach(function(Fe){const $e=ce.get(Fe).currentProgram;($e===void 0||$e.isReady())&&te.delete(Fe)}),te.size===0){Q(C);return}setTimeout(Ie,10)}bt.get("KHR_parallel_shader_compile")!==null?Ie():setTimeout(Ie,10)})};let Kr=null;function Dc(C){Kr&&Kr(C)}function Po(){On.stop()}function Lo(){On.start()}const On=new xv;On.setAnimationLoop(Dc),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){Kr=C,Ke.setAnimationLoop(C),C===null?On.stop():On.start()},Ke.addEventListener("sessionstart",Po),Ke.addEventListener("sessionend",Lo),this.render=function(C,W){if(W!==void 0&&W.isCamera!==!0){Rt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(X===!0)return;J!==null&&J.renderStart(C,W);const de=Ke.enabled===!0&&Ke.isPresenting===!0,te=U!==null&&(q===null||de)&&U.begin(V,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),W.parent===null&&W.matrixWorldAutoUpdate===!0&&W.updateMatrixWorld(),Ke.enabled===!0&&Ke.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ke.cameraAutoUpdate===!0&&Ke.updateCamera(W),W=Ke.getCamera()),C.isScene===!0&&C.onBeforeRender(V,C,W,q),P=Re.get(C,T.length),P.init(W),P.state.textureUnits=he.getTextureUnits(),T.push(P),gt.multiplyMatrices(W.projectionMatrix,W.matrixWorldInverse),dt.setFromProjectionMatrix(gt,Wi,W.reversedDepth),Ot=this.localClippingEnabled,mt=Je.init(this.clippingPlanes,Ot),N=Ue.get(C,k.length),N.init(),k.push(N),Ke.enabled===!0&&Ke.isPresenting===!0){const Fe=V.xr.getDepthSensingMesh();Fe!==null&&Ta(Fe,W,-1/0,V.sortObjects)}Ta(C,W,0,V.sortObjects),N.finish(),J!==null&&J.updateLights(P.state.lightsArray),V.sortObjects===!0&&N.sort(Ee,Ye),Ut=Ke.enabled===!1||Ke.isPresenting===!1||Ke.hasDepthSensing()===!1,Ut&&st.addToRenderList(N,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),mt===!0&&Je.beginShadows();const Q=P.state.shadowsArray;if(nt.render(Q,C,W),mt===!0&&Je.endShadows(),(te&&U.hasRenderPass())===!1){const Fe=N.opaque,Oe=N.transmissive;if(P.setupLights(),W.isArrayCamera){const $e=W.cameras;if(Oe.length>0)for(let Qe=0,ut=$e.length;Qe<ut;Qe++){const pt=$e[Qe];Do(Fe,Oe,C,pt)}Ut&&st.render(C);for(let Qe=0,ut=$e.length;Qe<ut;Qe++){const pt=$e[Qe];_s(N,C,pt,pt.viewport)}}else Oe.length>0&&Do(Fe,Oe,C,W),Ut&&st.render(C),_s(N,C,W)}q!==null&&le===0&&(he.updateMultisampleRenderTarget(q),he.updateRenderTargetMipmap(q)),te&&U.end(V),C.isScene===!0&&C.onAfterRender(V,C,W),ze.resetDefaultState(),j=-1,O=null,T.pop(),T.length>0?(P=T[T.length-1],he.setTextureUnits(P.state.textureUnits),mt===!0&&Je.setGlobalState(V.clippingPlanes,P.state.camera)):P=null,k.pop(),k.length>0?N=k[k.length-1]:N=null,J!==null&&J.renderEnd()};function Ta(C,W,de,te){if(C.visible===!1)return;if(C.layers.test(W.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update(W);else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(dt)){te&&en.setFromMatrixPosition(C.matrixWorld).applyMatrix4(gt);const Fe=ve.update(C),Oe=C.material;Oe.visible&&N.push(C,Fe,Oe,de,en.z,null,W)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(dt))){const Fe=ve.update(C),Oe=C.material;if(te&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),en.copy(C.boundingSphere.center)):(Fe.boundingSphere===null&&Fe.computeBoundingSphere(),en.copy(Fe.boundingSphere.center)),en.applyMatrix4(C.matrixWorld).applyMatrix4(gt)),Array.isArray(Oe)){const $e=Fe.groups;for(let Qe=0,ut=$e.length;Qe<ut;Qe++){const pt=$e[Qe],We=Oe[pt.materialIndex];We&&We.visible&&N.push(C,Fe,We,de,en.z,pt,W)}}else Oe.visible&&N.push(C,Fe,Oe,de,en.z,null,W)}}const Ie=C.children;for(let Fe=0,Oe=Ie.length;Fe<Oe;Fe++)Ta(Ie[Fe],W,de,te)}function _s(C,W,de,te){const{opaque:Q,transmissive:Ie,transparent:Fe}=C;P.setupLightsView(de),mt===!0&&Je.setGlobalState(V.clippingPlanes,de),te&&E.viewport(L.copy(te)),Q.length>0&&jr(Q,W,de),Ie.length>0&&jr(Ie,W,de),Fe.length>0&&jr(Fe,W,de),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Do(C,W,de,te){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[te.id]===void 0){const We=bt.has("EXT_color_buffer_half_float")||bt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[te.id]=new Ui(1,1,{generateMipmaps:!0,type:We?$i:ri,minFilter:ga,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Tt.workingColorSpace})}const Ie=P.state.transmissionRenderTarget[te.id],Fe=te.viewport||L;Ie.setSize(Fe.z*V.transmissionResolutionScale,Fe.w*V.transmissionResolutionScale);const Oe=V.getRenderTarget(),$e=V.getActiveCubeFace(),Qe=V.getActiveMipmapLevel();V.setRenderTarget(Ie),V.getClearColor(He),Ce=V.getClearAlpha(),Ce<1&&V.setClearColor(16777215,.5),V.clear(),Ut&&st.render(de);const ut=V.toneMapping;V.toneMapping=Xi;const pt=te.viewport;if(te.viewport!==void 0&&(te.viewport=void 0),P.setupLightsView(te),mt===!0&&Je.setGlobalState(V.clippingPlanes,te),jr(C,de,te),he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie),bt.has("WEBGL_multisampled_render_to_texture")===!1){let We=!1;for(let Mt=0,tn=W.length;Mt<tn;Mt++){const Vt=W[Mt],{object:Nt,geometry:un,material:Ve,group:rn}=Vt;if(Ve.side===Pi&&Nt.layers.test(te.layers)){const Et=Ve.side;Ve.side=Kn,Ve.needsUpdate=!0,xs(Nt,de,te,un,Ve,rn),Ve.side=Et,Ve.needsUpdate=!0,We=!0}}We===!0&&(he.updateMultisampleRenderTarget(Ie),he.updateRenderTargetMipmap(Ie))}V.setRenderTarget(Oe,$e,Qe),V.setClearColor(He,Ce),pt!==void 0&&(te.viewport=pt),V.toneMapping=ut}function jr(C,W,de){const te=W.isScene===!0?W.overrideMaterial:null;for(let Q=0,Ie=C.length;Q<Ie;Q++){const Fe=C[Q],{object:Oe,geometry:$e,group:Qe}=Fe;let ut=Fe.material;ut.allowOverride===!0&&te!==null&&(ut=te),Oe.layers.test(de.layers)&&xs(Oe,W,de,$e,ut,Qe)}}function xs(C,W,de,te,Q,Ie){J!==null&&Q.isNodeMaterial&&J.setObject(C,Q),C.onBeforeRender(V,W,de,te,Q,Ie),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),Q.onBeforeRender(V,W,de,te,C,Ie),Q.transparent===!0&&Q.side===Pi&&Q.forceSinglePass===!1?(Q.side=Kn,Q.needsUpdate=!0,V.renderBufferDirect(de,W,te,Q,C,Ie),Q.side=Sa,Q.needsUpdate=!0,V.renderBufferDirect(de,W,te,Q,C,Ie),Q.side=Pi):V.renderBufferDirect(de,W,te,Q,C,Ie),C.onAfterRender(V,W,de,te,Q,Ie)}function Zr(C,W,de){W.isScene!==!0&&(W=sn);const te=ce.get(C),Q=P.state.lights,Ie=P.state.shadowsArray,Fe=Q.state.version,Oe=Ne.getParameters(C,Q.state,Ie,W,de,P.state.lightProbeGridArray),$e=Ne.getProgramCacheKey(Oe);let Qe=te.programs;te.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?W.environment:null,te.fog=W.fog;const ut=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;te.envMap=Te.get(C.envMap||te.environment,ut),te.envMapRotation=te.environment!==null&&C.envMap===null?W.environmentRotation:C.envMapRotation,Qe===void 0&&(C.addEventListener("dispose",si),Qe=new Map,te.programs=Qe);let pt=Qe.get($e);if(pt!==void 0){if(te.currentProgram===pt&&te.lightsStateVersion===Fe)return No(C,Oe),pt}else Oe.uniforms=Ne.getUniforms(C),J!==null&&C.isNodeMaterial&&J.build(C,de,Oe),C.onBeforeCompile(Oe,V),pt=Ne.acquireProgram(Oe,$e),Qe.set($e,pt),te.uniforms=Oe.uniforms;const We=te.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(We.clippingPlanes=Je.uniform),No(C,Oe),te.needsLights=ys(C),te.lightsStateVersion=Fe,te.needsLights&&(We.ambientLightColor.value=Q.state.ambient,We.lightProbe.value=Q.state.probe,We.sunLights.value=Q.state.sun,We.sunLightShadows.value=Q.state.sunShadow,We.directionalLights.value=Q.state.directional,We.directionalLightShadows.value=Q.state.directionalShadow,We.spotLights.value=Q.state.spot,We.spotLightShadows.value=Q.state.spotShadow,We.rectAreaLights.value=Q.state.rectArea,We.ltc_1.value=Q.state.rectAreaLTC1,We.ltc_2.value=Q.state.rectAreaLTC2,We.pointLights.value=Q.state.point,We.pointLightShadows.value=Q.state.pointShadow,We.hemisphereLights.value=Q.state.hemi,We.sunShadowMatrix.value=Q.state.sunShadowMatrix,We.sunShadowCascade.value=Q.state.sunShadowCascade,We.directionalShadowMatrix.value=Q.state.directionalShadowMatrix,We.spotLightMatrix.value=Q.state.spotLightMatrix,We.spotLightMap.value=Q.state.spotLightMap,We.pointShadowMatrix.value=Q.state.pointShadowMatrix),te.lightProbeGrid=P.state.lightProbeGridArray.length>0,te.currentProgram=pt,te.uniformsList=null,pt}function Ss(C){if(C.uniformsList===null){const W=C.currentProgram.getUniforms();C.uniformsList=hc.seqWithValue(W.seq,C.uniforms)}return C.uniformsList}function No(C,W){const de=ce.get(C);de.outputColorSpace=W.outputColorSpace,de.batching=W.batching,de.batchingColor=W.batchingColor,de.instancing=W.instancing,de.instancingColor=W.instancingColor,de.instancingMorph=W.instancingMorph,de.skinning=W.skinning,de.morphTargets=W.morphTargets,de.morphNormals=W.morphNormals,de.morphColors=W.morphColors,de.morphTargetsCount=W.morphTargetsCount,de.numClippingPlanes=W.numClippingPlanes,de.numIntersection=W.numClipIntersection,de.vertexAlphas=W.vertexAlphas,de.vertexTangents=W.vertexTangents,de.toneMapping=W.toneMapping}function Nc(C,W){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;b.setFromMatrixPosition(W.matrixWorld);for(let de=0,te=C.length;de<te;de++){const Q=C[de];if(Q.texture!==null&&Q.boundingBox.containsPoint(b))return Q}return null}function Kt(C,W,de,te,Q){W.isScene!==!0&&(W=sn),he.resetTextureUnits();const Ie=W.fog,Fe=te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial?W.environment:null,Oe=q===null?V.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Tt.workingColorSpace,$e=te.isMeshStandardMaterial||te.isMeshLambertMaterial&&!te.envMap||te.isMeshPhongMaterial&&!te.envMap,Qe=Te.get(te.envMap||Fe,$e),ut=te.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,pt=!!de.attributes.tangent&&(!!te.normalMap||te.anisotropy>0),We=!!de.morphAttributes.position,Mt=!!de.morphAttributes.normal,tn=!!de.morphAttributes.color;let Vt=Xi;te.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Vt=V.toneMapping);const Nt=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,un=Nt!==void 0?Nt.length:0,Ve=ce.get(te),rn=P.state.lights;if(mt===!0&&(Ot===!0||C!==O)){const It=C===O&&te.id===j;Je.setState(te,C,It)}let Et=!1;te.version===Ve.__version?(Ve.needsLights&&Ve.lightsStateVersion!==rn.state.version||Ve.outputColorSpace!==Oe||Q.isBatchedMesh&&Ve.batching===!1||!Q.isBatchedMesh&&Ve.batching===!0||Q.isBatchedMesh&&Ve.batchingColor===!0&&Q._colorsTexture===null||Q.isBatchedMesh&&Ve.batchingColor===!1&&Q._colorsTexture!==null||Q.isInstancedMesh&&Ve.instancing===!1||!Q.isInstancedMesh&&Ve.instancing===!0||Q.isSkinnedMesh&&Ve.skinning===!1||!Q.isSkinnedMesh&&Ve.skinning===!0||Q.isInstancedMesh&&Ve.instancingColor===!0&&Q.instanceColor===null||Q.isInstancedMesh&&Ve.instancingColor===!1&&Q.instanceColor!==null||Q.isInstancedMesh&&Ve.instancingMorph===!0&&Q.morphTexture===null||Q.isInstancedMesh&&Ve.instancingMorph===!1&&Q.morphTexture!==null||Ve.envMap!==Qe||te.fog===!0&&Ve.fog!==Ie||Ve.numClippingPlanes!==void 0&&(Ve.numClippingPlanes!==Je.numPlanes||Ve.numIntersection!==Je.numIntersection)||Ve.vertexAlphas!==ut||Ve.vertexTangents!==pt||Ve.morphTargets!==We||Ve.morphNormals!==Mt||Ve.morphColors!==tn||Ve.toneMapping!==Vt||Ve.morphTargetsCount!==un||!!Ve.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Et=!0):(Et=!0,Ve.__version=te.version);let Rn=Ve.currentProgram;Et===!0&&(Rn=Zr(te,W,Q),J&&te.isNodeMaterial&&J.onUpdateProgram(te,Rn,Ve));let vt=!1,vi=!1,Ki=!1;const Lt=Rn.getUniforms(),Yt=Ve.uniforms;if(E.useProgram(Rn.program)&&(vt=!0,vi=!0,Ki=!0),te.id!==j&&(j=te.id,vi=!0),Ve.needsLights){const It=Nc(P.state.lightProbeGridArray,Q);Ve.lightProbeGrid!==It&&(Ve.lightProbeGrid=It,vi=!0)}if(vt||O!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Lt.setValue(Y,"projectionMatrix",C.projectionMatrix),Lt.setValue(Y,"viewMatrix",C.matrixWorldInverse);const oi=Lt.map.cameraPosition;oi!==void 0&&oi.setValue(Y,Ht.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&Lt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(te.isMeshPhongMaterial||te.isMeshToonMaterial||te.isMeshLambertMaterial||te.isMeshBasicMaterial||te.isMeshStandardMaterial||te.isShaderMaterial)&&Lt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),O!==C&&(O=C,vi=!0,Ki=!0)}if(Ve.needsLights&&(rn.state.sunShadowMap.length>0&&Lt.setValue(Y,"sunShadowMap",rn.state.sunShadowMap,he),rn.state.directionalShadowMap.length>0&&Lt.setValue(Y,"directionalShadowMap",rn.state.directionalShadowMap,he),rn.state.spotShadowMap.length>0&&Lt.setValue(Y,"spotShadowMap",rn.state.spotShadowMap,he),rn.state.pointShadowMap.length>0&&Lt.setValue(Y,"pointShadowMap",rn.state.pointShadowMap,he)),Q.isSkinnedMesh){Lt.setOptional(Y,Q,"bindMatrix"),Lt.setOptional(Y,Q,"bindMatrixInverse");const It=Q.skeleton;It&&(It.boneTexture===null&&It.computeBoneTexture(),Lt.setValue(Y,"boneTexture",It.boneTexture,he))}Q.isBatchedMesh&&(Lt.setOptional(Y,Q,"batchingTexture"),Lt.setValue(Y,"batchingTexture",Q._matricesTexture,he),Lt.setOptional(Y,Q,"batchingIdTexture"),Lt.setValue(Y,"batchingIdTexture",Q._indirectTexture,he),Lt.setOptional(Y,Q,"batchingColorTexture"),Q._colorsTexture!==null&&Lt.setValue(Y,"batchingColorTexture",Q._colorsTexture,he));const _i=de.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&B.update(Q,de,Rn),(vi||Ve.receiveShadow!==Q.receiveShadow)&&(Ve.receiveShadow=Q.receiveShadow,Lt.setValue(Y,"receiveShadow",Q.receiveShadow)),(te.isMeshStandardMaterial||te.isMeshLambertMaterial||te.isMeshPhongMaterial)&&te.envMap===null&&W.environment!==null&&(Yt.envMapIntensity.value=W.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=_C()),vi){if(Lt.setValue(Y,"toneMappingExposure",V.toneMappingExposure),Ve.needsLights&&Uc(Yt,Ki),Ie&&te.fog===!0&&Ze.refreshFogUniforms(Yt,Ie),Ze.refreshMaterialUniforms(Yt,te,ue,ae,P.state.transmissionRenderTarget[C.id]),Ve.needsLights&&Ve.lightProbeGrid){const It=Ve.lightProbeGrid;Yt.probesSH.value=It.texture,Yt.probesMin.value.copy(It.boundingBox.min),Yt.probesMax.value.copy(It.boundingBox.max),Yt.probesResolution.value.copy(It.resolution)}hc.upload(Y,Ss(Ve),Yt,he)}if(te.isShaderMaterial&&te.uniformsNeedUpdate===!0&&(hc.upload(Y,Ss(Ve),Yt,he),te.uniformsNeedUpdate=!1),te.isSpriteMaterial&&Lt.setValue(Y,"center",Q.center),Lt.setValue(Y,"modelViewMatrix",Q.modelViewMatrix),Lt.setValue(Y,"normalMatrix",Q.normalMatrix),Lt.setValue(Y,"modelMatrix",Q.matrixWorld),te.uniformsGroups!==void 0){const It=te.uniformsGroups;for(let oi=0,xi=It.length;oi<xi;oi++){const Si=It[oi];xe.update(Si,Rn),xe.bind(Si,Rn)}}return Rn}function Uc(C,W){C.ambientLightColor.needsUpdate=W,C.lightProbe.needsUpdate=W,C.sunLights.needsUpdate=W,C.sunLightShadows.needsUpdate=W,C.directionalLights.needsUpdate=W,C.directionalLightShadows.needsUpdate=W,C.pointLights.needsUpdate=W,C.pointLightShadows.needsUpdate=W,C.spotLights.needsUpdate=W,C.spotLightShadows.needsUpdate=W,C.rectAreaLights.needsUpdate=W,C.hemisphereLights.needsUpdate=W}function ys(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,W,de){const te=ce.get(C);te.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,te.__autoAllocateDepthBuffer===!1&&(te.__useRenderToTexture=!1),ce.get(C.texture).__webglTexture=W,ce.get(C.depthTexture).__webglTexture=te.__autoAllocateDepthBuffer?void 0:de,te.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,W){const de=ce.get(C);de.__webglFramebuffer=W,de.__useDefaultFramebuffer=W===void 0},this.setRenderTarget=function(C,W=0,de=0){q=C,oe=W,le=de;let te=null,Q=!1,Ie=!1;if(C){const Oe=ce.get(C);if(Oe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,Oe.__webglFramebuffer),L.copy(C.viewport),K.copy(C.scissor),_e=C.scissorTest,E.viewport(L),E.scissor(K),E.setScissorTest(_e),j=-1;return}else if(Oe.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(Oe.__hasExternalTextures)he.rebindTextures(C,ce.get(C.texture).__webglTexture,ce.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ut=C.depthTexture;if(Oe.__boundDepthTexture!==ut){if(ut!==null&&ce.has(ut)&&(C.width!==ut.image.width||C.height!==ut.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const $e=C.texture;($e.isData3DTexture||$e.isDataArrayTexture||$e.isCompressedArrayTexture)&&(Ie=!0);const Qe=ce.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(Qe[W])?te=Qe[W][de]:te=Qe[W],Q=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?te=ce.get(C).__webglMultisampledFramebuffer:Array.isArray(Qe)?te=Qe[de]:te=Qe,L.copy(C.viewport),K.copy(C.scissor),_e=C.scissorTest}else L.copy(be).multiplyScalar(ue).floor(),K.copy(at).multiplyScalar(ue).floor(),_e=Ft;if(de!==0&&(te=ne),E.bindFramebuffer(Y.FRAMEBUFFER,te)&&E.drawBuffers(C,te),E.viewport(L),E.scissor(K),E.setScissorTest(_e),Q){const Oe=ce.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+W,Oe.__webglTexture,de)}else if(Ie){const Oe=W;for(let $e=0;$e<C.textures.length;$e++){const Qe=ce.get(C.textures[$e]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+$e,Qe.__webglTexture,de,Oe)}}else if(C!==null&&de!==0){const Oe=ce.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Oe.__webglTexture,de)}j=-1};function Ms(C){const W=ce.get(C);return(W.__readFormat!==C.format||W.__readType!==C.type)&&(W.__readFormat=C.format,W.__readType=C.type,W.__formatReadable=F.textureFormatReadable(C.format),W.__typeReadable=F.textureTypeReadable(C.type)),W}this.readRenderTargetPixels=function(C,W,de,te,Q,Ie,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget)){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let $e=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&($e=$e[Fe]),$e){E.bindFramebuffer(Y.FRAMEBUFFER,$e);try{const Qe=C.textures[Oe],ut=Qe.format,pt=Qe.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const We=Ms(Qe);if(We.__formatReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(We.__typeReadable===!1){Rt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}W>=0&&W<=C.width-te&&de>=0&&de<=C.height-Q&&Y.readPixels(W,de,te,Q,De.convert(ut),De.convert(pt),Ie)}finally{const Qe=q!==null?ce.get(q).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,Qe)}}},this.readRenderTargetPixelsAsync=async function(C,W,de,te,Q,Ie,Fe,Oe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let $e=ce.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Fe!==void 0&&($e=$e[Fe]),$e)if(W>=0&&W<=C.width-te&&de>=0&&de<=C.height-Q){E.bindFramebuffer(Y.FRAMEBUFFER,$e);const Qe=C.textures[Oe],ut=Qe.format,pt=Qe.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+Oe);const We=Ms(Qe);if(We.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(We.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Mt=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ie.byteLength,Y.STREAM_READ),Y.readPixels(W,de,te,Q,De.convert(ut),De.convert(pt),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const tn=q!==null?ce.get(q).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,tn);const Vt=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await Py(Y,Vt,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Mt),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ie),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Mt),Y.deleteSync(Vt),Ie}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,W=null,de=0){const te=Math.pow(2,-de),Q=Math.floor(C.image.width*te),Ie=Math.floor(C.image.height*te),Fe=W!==null?W.x:0,Oe=W!==null?W.y:0;he.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,de,0,0,Fe,Oe,Q,Ie),E.unbindTexture()},this.copyTextureToTexture=function(C,W,de=null,te=null,Q=0,Ie=0){let Fe,Oe,$e,Qe,ut,pt,We,Mt,tn;const Vt=C.isCompressedTexture?C.mipmaps[Ie]:C.image;if(de!==null)Fe=de.max.x-de.min.x,Oe=de.max.y-de.min.y,$e=de.isBox3?de.max.z-de.min.z:1,Qe=de.min.x,ut=de.min.y,pt=de.isBox3?de.min.z:0;else{const Yt=Math.pow(2,-Q);Fe=Math.floor(Vt.width*Yt),Oe=Math.floor(Vt.height*Yt),C.isDataArrayTexture?$e=Vt.depth:C.isData3DTexture?$e=Math.floor(Vt.depth*Yt):$e=1,Qe=0,ut=0,pt=0}te!==null?(We=te.x,Mt=te.y,tn=te.z):(We=0,Mt=0,tn=0);const Nt=De.convert(W.format),un=De.convert(W.type);let Ve;W.isData3DTexture?(he.setTexture3D(W,0),Ve=Y.TEXTURE_3D):W.isDataArrayTexture||W.isCompressedArrayTexture?(he.setTexture2DArray(W,0),Ve=Y.TEXTURE_2D_ARRAY):(he.setTexture2D(W,0),Ve=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,W.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,W.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,W.unpackAlignment);const rn=E.getParameter(Y.UNPACK_ROW_LENGTH),Et=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Rn=E.getParameter(Y.UNPACK_SKIP_PIXELS),vt=E.getParameter(Y.UNPACK_SKIP_ROWS),vi=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Vt.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Vt.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Qe),E.pixelStorei(Y.UNPACK_SKIP_ROWS,ut),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,pt);const Ki=C.isDataArrayTexture||C.isData3DTexture,Lt=W.isDataArrayTexture||W.isData3DTexture;if(C.isDepthTexture){const Yt=ce.get(C),_i=ce.get(W),It=ce.get(Yt.__renderTarget),oi=ce.get(_i.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,It.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,oi.__webglFramebuffer);for(let xi=0;xi<$e;xi++)Ki&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ce.get(C).__webglTexture,Q,pt+xi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ce.get(W).__webglTexture,Ie,tn+xi)),Y.blitFramebuffer(Qe,ut,Fe,Oe,We,Mt,Fe,Oe,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(Q!==0||C.isRenderTargetTexture||ce.has(C)){const Yt=ce.get(C),_i=ce.get(W);E.bindFramebuffer(Y.READ_FRAMEBUFFER,G),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,ie);for(let It=0;It<$e;It++)Ki?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Yt.__webglTexture,Q,pt+It):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,Yt.__webglTexture,Q),Lt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,_i.__webglTexture,Ie,tn+It):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,_i.__webglTexture,Ie),Q!==0?Y.blitFramebuffer(Qe,ut,Fe,Oe,We,Mt,Fe,Oe,Y.COLOR_BUFFER_BIT,Y.NEAREST):Lt?Y.copyTexSubImage3D(Ve,Ie,We,Mt,tn+It,Qe,ut,Fe,Oe):Y.copyTexSubImage2D(Ve,Ie,We,Mt,Qe,ut,Fe,Oe);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Lt?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(Ve,Ie,We,Mt,tn,Fe,Oe,$e,Nt,un,Vt.data):W.isCompressedArrayTexture?Y.compressedTexSubImage3D(Ve,Ie,We,Mt,tn,Fe,Oe,$e,Nt,Vt.data):Y.texSubImage3D(Ve,Ie,We,Mt,tn,Fe,Oe,$e,Nt,un,Vt):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ie,We,Mt,Fe,Oe,Nt,un,Vt.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ie,We,Mt,Vt.width,Vt.height,Nt,Vt.data):Y.texSubImage2D(Y.TEXTURE_2D,Ie,We,Mt,Fe,Oe,Nt,un,Vt);E.pixelStorei(Y.UNPACK_ROW_LENGTH,rn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Et),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Rn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,vt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,vi),Ie===0&&W.generateMipmaps&&Y.generateMipmap(Ve),E.unbindTexture()},this.initRenderTarget=function(C){ce.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){oe=0,le=0,q=null,E.reset(),ze.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Tt._getDrawingBufferColorSpace(e),t.unpackColorSpace=Tt._getUnpackColorSpace()}}class SC extends mh{constructor(e){super(e)}load(e,t,a,o){const l=this,u=new pM(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(d){try{t(l.parse(d))}catch(m){o?o(m):console.error(m),l.manager.itemError(e)}},a,o)}parse(e){function t(p){const v=new DataView(p),x=32/8*3+32/8*3*3+16/8,_=v.getUint32(80,!0);if(80+32/8+_*x===v.byteLength)return!0;const w=[115,111,108,105,100];for(let R=0;R<5;R++)if(a(w,v,R))return!1;return!0}function a(p,v,x){for(let _=0,M=p.length;_<M;_++)if(p[_]!==v.getUint8(x+_))return!1;return!0}function o(p){const v=new DataView(p),x=v.getUint32(80,!0);let _,M,w,R=!1,y,S,D,z,b;for(let X=0;X<70;X++)v.getUint32(X,!1)==1129270351&&v.getUint8(X+4)==82&&v.getUint8(X+5)==61&&(R=!0,y=new Float32Array(x*3*3),S=v.getUint8(X+6)/255,D=v.getUint8(X+7)/255,z=v.getUint8(X+8)/255,b=v.getUint8(X+9)/255);const N=84,P=50,k=new jn,T=new Float32Array(x*3*3),U=new Float32Array(x*3*3),V=new yt;for(let X=0;X<x;X++){const J=N+X*P,ne=v.getFloat32(J,!0),G=v.getFloat32(J+4,!0),ie=v.getFloat32(J+8,!0);if(R){const oe=v.getUint16(J+48,!0);(oe&32768)===0?(_=(oe&31)/31,M=(oe>>5&31)/31,w=(oe>>10&31)/31):(_=S,M=D,w=z)}for(let oe=1;oe<=3;oe++){const le=J+oe*12,q=X*3*3+(oe-1)*3;T[q]=v.getFloat32(le,!0),T[q+1]=v.getFloat32(le+4,!0),T[q+2]=v.getFloat32(le+8,!0),U[q]=ne,U[q+1]=G,U[q+2]=ie,R&&(V.setRGB(_,M,w,ii),y[q]=V.r,y[q+1]=V.g,y[q+2]=V.b)}}return k.setAttribute("position",new gi(T,3)),k.setAttribute("normal",new gi(U,3)),R&&(k.setAttribute("color",new gi(y,3)),k.hasColors=!0,k.alpha=b),k}function l(p){const v=new jn,x=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let w=0;const R=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+R+R+R,"g"),S=new RegExp("normal"+R+R+R,"g"),D=[],z=[],b=[],N=new ee;let P,k=0,T=0,U=0;for(;(P=x.exec(p))!==null;){T=U;const V=P[0],X=(P=M.exec(V))!==null?P[1]:"";for(b.push(X);(P=_.exec(V))!==null;){let G=0,ie=0;const oe=P[0];for(;(P=S.exec(oe))!==null;)N.x=parseFloat(P[1]),N.y=parseFloat(P[2]),N.z=parseFloat(P[3]),ie++;for(;(P=y.exec(oe))!==null;)D.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),z.push(N.x,N.y,N.z),G++,U++;ie!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+w),G!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+w),w++}const J=T,ne=U-T;v.userData.groupNames=b,v.addGroup(J,ne,k),k++}return v.setAttribute("position",new pn(D,3)),v.setAttribute("normal",new pn(z,3)),v}function u(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const v=new Uint8Array(p.length);for(let x=0;x<p.length;x++)v[x]=p.charCodeAt(x)&255;return v.buffer||v}else return p}const m=d(e);return t(m)?o(m):l(u(e))}}const f0={type:"change"},vh={type:"start"},Cv={type:"end"},ic=new uh,h0=new ur,yC=Math.cos(70*Ny.DEG2RAD),hn=new ee,qn=2*Math.PI,zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},$d=1e-6;class MC extends yM{constructor(e,t=null){super(e,t),this.state=zt.NONE,this.target=new ee,this.cursor=new ee,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new ee,this._lastQuaternion=new Br,this._lastTargetPosition=new ee,this._quat=new Br().setFromUnitVectors(e.up,new ee(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vg,this._sphericalDelta=new Vg,this._scale=1,this._panOffset=new ee,this._rotateStart=new ct,this._rotateEnd=new ct,this._rotateDelta=new ct,this._panStart=new ct,this._panEnd=new ct,this._panDelta=new ct,this._dollyStart=new ct,this._dollyEnd=new ct,this._dollyDelta=new ct,this._dollyDirection=new ee,this._mouse=new ct,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=TC.bind(this),this._onPointerDown=EC.bind(this),this._onPointerUp=wC.bind(this),this._onContextMenu=DC.bind(this),this._onMouseWheel=RC.bind(this),this._onKeyDown=bC.bind(this),this._onTouchStart=PC.bind(this),this._onTouchMove=LC.bind(this),this._onMouseDown=AC.bind(this),this._onMouseMove=CC.bind(this),this._interceptControlDown=NC.bind(this),this._interceptControlUp=UC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=zt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f0),this.update(),this.state=zt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,o=this.maxAzimuthAngle;isFinite(a)&&isFinite(o)&&(a<-Math.PI?a+=qn:a>Math.PI&&(a-=qn),o<-Math.PI?o+=qn:o>Math.PI&&(o-=qn),a<=o?this._spherical.theta=Math.max(a,Math.min(o,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+o)/2?Math.max(a,this._spherical.theta):Math.min(o,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=hn.length();u=this._clampDistance(d*this._scale);const m=d-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),l=!!m}else if(this.object.isOrthographicCamera){const d=new ee(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=m!==this.object.zoom;const p=new ee(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<yC?this.object.lookAt(this.target):(h0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(h0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>$d||8*(1-this._lastQuaternion.dot(this.object.quaternion))>$d||this._lastTargetPosition.distanceToSquared(this.target)>$d?(this.dispatchEvent(f0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?qn/60*this.autoRotateSpeed*e:qn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const o=this.object.position;hn.copy(o).sub(this.target);let l=hn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*t*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),o=e-a.left,l=t-a.top,u=a.width,d=a.height;this._mouse.x=o/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-qn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._rotateStart.set(a,o)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panStart.set(a,o)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(a*a+o*o);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),o=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(o,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(qn*this._rotateDelta.x/t.clientHeight),this._rotateUp(qn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),o=.5*(e.pageY+t.y);this._panEnd.set(a,o)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,o=e.pageY-t.y,l=Math.sqrt(a*a+o*o);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new ct,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function EC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function TC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function wC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cv),this.state=zt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function AC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=zt.DOLLY;break;case fr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=zt.ROTATE}break;case fr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=zt.PAN}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(vh)}function CC(i){switch(this.state){case zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function RC(i){this.enabled===!1||this.enableZoom===!1||this.state!==zt.NONE||(i.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cv))}function bC(i){this.enabled!==!1&&this._handleKeyDown(i)}function PC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=zt.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=zt.TOUCH_PAN;break;default:this.state=zt.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=zt.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=zt.TOUCH_DOLLY_ROTATE;break;default:this.state=zt.NONE}break;default:this.state=zt.NONE}this.state!==zt.NONE&&this.dispatchEvent(vh)}function LC(i){switch(this._trackPointer(i),this.state){case zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=zt.NONE}}function DC(i){this.enabled!==!1&&i.preventDefault()}function NC(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function UC(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const p0="./",qd={label:"main",sha:"9a8fce495ffecbee056d2a4eef3789112dbc8e1c".slice(0,7)},rc=i=>i.replace(/^N2_/,"").replace(/_/g," "),Kd=3,FC=22,OC=["N2_keeper","N2_armature"],m0={Z:{label:"Straight pull (R3)",parts:{N2_adapter:"Z",N2_receiver:"Z",N2_keeper:"Z"}},Z_distal_lost:{label:"Straight pull, distal roof lost",parts:{N2_adapter:"Z",N2_receiver:"Z_distal_lost",N2_keeper:"Z_distal_lost"}},XZ90:{label:"Side pull 90° (outside R3)",parts:{N2_adapter:"XZ90",N2_receiver:"XZ90"}}};function Rv(i,e){if(i>1)return e.setRGB(.85,.1,.85);const t=[[.19,.07,.23],[.16,.47,.93],[.1,.84,.66],[.64,.99,.24],[.98,.73,.22],[.86,.22,.05]],a=Math.max(0,i)*(t.length-1),o=Math.min(Math.floor(a),t.length-2),l=a-o;return e.setRGB(...t[o].map((u,d)=>u+(t[o+1][d]-u)*l))}const IC=`linear-gradient(90deg, ${[0,.2,.4,.6,.8,1].map(i=>"#"+Rv(i,new yt).getHexString()).join(",")})`;function kC(i){const e=Ge.useRef(null);if(!e.current){const t=new $y;t.add(new mM(16777215,3359829,2.2));const a=new kg(16777215,1.6);a.position.set(60,-40,90),t.add(a);const o=new kg(16777215,.6);o.position.set(-50,60,-30),t.add(o);const l=new mi(35,1,.1,3e3);l.up.set(0,0,1),e.current={scene:t,cam:l,parts:new Map,fea:new Map,markers:new fo},t.add(e.current.markers)}return Ge.useEffect(()=>{const t=e.current,a=new xC({antialias:!0,preserveDrawingBuffer:!0});a.setPixelRatio(devicePixelRatio),a.setClearColor(1382686),i.current.appendChild(a.domElement);const o=new MC(t.cam,a.domElement);Object.assign(o,{enableDamping:!0,dampingFactor:.12,rotateSpeed:.9,zoomToCursor:!0,screenSpacePanning:!0}),o.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.PAN,RIGHT:fr.PAN},t.oc=o,t.r=a;let l=!0;const u=new SM;a.domElement.addEventListener("dblclick",m=>{const p=a.domElement.getBoundingClientRect();u.setFromCamera(new ct((m.clientX-p.left)/p.width*2-1,-(m.clientY-p.top)/p.height*2+1),t.cam);const v=u.intersectObjects([...t.parts.values(),...t.fea.values()].filter(x=>x.visible))[0];if(v){const x=v.point.clone().sub(o.target);o.target.add(x),t.cam.position.add(x)}});const d=()=>{var v;if(!l)return;requestAnimationFrame(d),(v=t.tick)==null||v.call(t),o.update();const m=i.current.clientWidth,p=i.current.clientHeight;(a.domElement.width!==Math.floor(m*a.getPixelRatio())||a.domElement.height!==Math.floor(p*a.getPixelRatio()))&&a.setSize(m,p),t.cam.aspect=m/p,t.cam.updateProjectionMatrix(),a.render(t.scene,t.cam)};return d(),()=>{l=!1,a.dispose(),a.domElement.remove()}},[]),e.current}function g0(i,e,t){const a=new ee(...e.min).add(new ee(...e.max)).multiplyScalar(.5),o=new ee(...e.size).length()*2.1,l={iso:[.75,-1,.65],front:[0,-1,1e-4],top:[1e-4,-1e-4,1],side:[1,0,1e-4]}[t];i.oc.target.copy(a),i.cam.position.copy(a).add(new ee(...l).normalize().multiplyScalar(o)),i.oc.update()}function zC(){var j;const i=Ge.useRef(),e=kC(i),[t,a]=Ge.useState(null),[o,l]=Ge.useState(null),[u,d]=Ge.useState(new URLSearchParams(location.search).get("mode")||"model"),[m,p]=Ge.useState(Number(new URLSearchParams(location.search).get("explode")||0)),[v,x]=Ge.useState(Number(new URLSearchParams(location.search).get("phase")||0)),[_,M]=Ge.useState(!1),[w,R]=Ge.useState({}),[y,S]=Ge.useState("Z"),[D,z]=Ge.useState(17.8),[b,N]=Ge.useState(!0),[P,k]=Ge.useState([]),[T,U]=Ge.useState(null),[V,X]=Ge.useState([]),J=(j=P.find(O=>O.id===T))==null?void 0:j.p14;Ge.useEffect(()=>{fetch("model/designs.json").then(O=>O.json()).then(O=>{var K;k(O);const L=new URLSearchParams(location.search).get("design");U((K=O.find(_e=>_e.id===L)||O[O.length-1])==null?void 0:K.id)}),fetch(`${p0}versions.json`,{cache:"no-store"}).then(O=>O.json()).then(X).catch(()=>{})},[]),Ge.useEffect(()=>{var O;if(T){for(const L of[...e.parts.values(),...e.fea.values()])e.scene.remove(L),L.geometry.dispose();e.parts.clear(),e.fea.clear(),R({}),a(null),l(null),fetch(`model/${T}/manifest.json`).then(L=>L.json()).then(a),(O=P.find(L=>L.id===T))!=null&&O.p14&&fetch("fea/index.json").then(L=>L.json()).then(l)}},[T]),Ge.useEffect(()=>{if(!t)return;e.design=t.id;const O=new SC,L=t.id;t.parts.forEach(K=>O.load(`model/${t.id}/${K.stl}`,_e=>{if(L!==e.design)return;_e.computeVertexNormals();const He=new ai(_e,new Lg({color:K.color,metalness:.1,roughness:.6,side:Pi}));He.userData.p=K,e.parts.set(K.id,He),e.scene.add(He),e.dirty=!0})),g0(e,t.bounds,"iso")},[t]),Ge.useEffect(()=>{o&&o.cases.forEach(O=>fetch(`fea/${O.part}__${O.case}.json`).then(L=>L.json()).then(L=>{const K=new jn;K.setAttribute("position",new pn(L.pos,3)),K.setIndex(L.idx),K.computeVertexNormals(),K.setAttribute("color",new pn(new Float32Array(L.pos.length),3));const _e=new ai(K,new Lg({vertexColors:!0,metalness:0,roughness:.75,side:Pi}));_e.userData={d:L,part:O.part},_e.visible=!1,e.fea.set(`${O.part}__${O.case}`,_e),e.scene.add(_e),e.dirty=!0}))},[o]),Ge.useEffect(()=>{if(!_)return;let O=performance.now(),L=v>=2?0:v,K;const _e=He=>{const Ce=L+(He-O)/1600;x(Math.min(Ce,2)),Ce<2?K=requestAnimationFrame(_e):M(!1)};return K=requestAnimationFrame(_e),()=>cancelAnimationFrame(K)},[_]);const ne=u==="fea"&&J&&o?m0[y].parts:{},G=o?31/o.z_tds_MPa:1,ie=o?Object.entries(ne).map(([O,L])=>o.cases.find(K=>K.part===O&&K.case===L)).filter(Boolean):[],oe=ie.reduce((O,L)=>!O||L.fail_N<O.fail_N?L:O,null);e.tick=()=>{if(!t)return;const O=Ce=>Ce*Ce*(3-2*Ce),L=v,K=O(Math.min(L,1)),_e=O(Math.max(0,Math.min(L-1,1))),He=(Ce,we)=>{const ae=t.parts.find(at=>at.id===we),ue=(ae==null?void 0:ae.explode)||[0,0,0];let Ee=ue[0]*m,Ye=ue[1]*m,be=ue[2]*m;OC.includes(we)&&(Ee+=Kd*K),we==="N2_return_spring"&&(Ce.scale.x=1-.35*K),we==="N2_adapter"&&(be+=FC*_e),Ce.position.set(Ee,Ye,be)};for(const[Ce,we]of e.parts){He(we,Ce);const ae=u==="fea"&&ne[Ce];we.visible=!w[Ce]&&!ae&&(u==="model"||b),we.material.transparent=u==="fea",we.material.opacity=u==="fea"?.12:1,we.material.depthWrite=u!=="fea"}e.markers.clear();for(const[Ce,we]of e.fea){const ae=ne[we.userData.part]&&Ce===`${we.userData.part}__${ne[we.userData.part]}`&&!w[we.userData.part];if(we.visible=!!ae,!ae)continue;He(we,we.userData.part);const ue=`${D}|${G}`;if(we.userData.ck!==ue){const at=we.geometry.attributes.color,Ft=new yt,dt=we.userData.d.fi;for(let mt=0;mt<dt.length;mt++)Rv(dt[mt]*D*G,Ft),at.setXYZ(mt,Ft.r,Ft.g,Ft.b);at.needsUpdate=!0,we.userData.ck=ue}const Ee=we.userData.d,Ye=oe&&Ee.part===oe.part,be=new ai(new hh(Ye?.9:.6,20,14),new dh({color:Ye?16777215:11252671,depthTest:!1,transparent:!0,opacity:.95}));if(be.position.set(...Ee.peak_mm).add(we.position),be.renderOrder=10,e.markers.add(be),Ye){const at=new ai(new ph(1.6,.18,8,32),be.material);at.position.copy(be.position),at.quaternion.copy(e.cam.quaternion),at.renderOrder=10,e.markers.add(at)}}};const le=(t==null?void 0:t.parts.map(O=>O.id))||[],q=o&&o.cases.filter(K=>K.in_scope&&K.case==="Z").reduce((K,_e)=>_e.fail_N<K.fail_N?_e:K);return me.jsxs("div",{className:"app",children:[me.jsxs("div",{className:"panel",children:[me.jsxs("div",{className:"status",children:["Version: ",me.jsx(W0,{minimal:!0,intent:"success",children:qd.label})," ",qd.sha&&me.jsx("code",{children:qd.sha}),V.length>1&&me.jsx(ac,{fill:!0,minimal:!0,value:"",onChange:O=>{location.href=p0+O.target.value},options:[{value:"",label:"Switch version…"},...V.map(O=>({value:O.path,label:O.label+(O.title?` — ${O.title}`:"")}))]})]}),P.length>1&&me.jsx(ac,{fill:!0,value:T||"",onChange:O=>U(O.target.value),options:P.map(O=>({value:O.id,label:O.label}))}),me.jsxs("div",{className:"status",children:[me.jsxs("b",{children:["N2 hardpoint · ",J?(o==null?void 0:o.revision)||"":(t==null?void 0:t.revision)||""]}),me.jsx("br",{}),!J&&t&&me.jsx(me.Fragment,{children:"CI-built CAD preview. Exploded view and parts only; FEA and release animation are P14-only for now."}),q&&me.jsxs(me.Fragment,{children:["Straight-pull stress screen ",me.jsxs("b",{children:[q.fail_N.toFixed(2)," N"]})," (",rc(q.part)," governs). Dividing by SF 2 gives ",q.rating_sf2_N.toFixed(2)," N for comparison only.",me.jsx("br",{}),me.jsx("b",{children:"No working-load rating assigned."})," No printed or loaded-release tests recorded.",me.jsx("br",{}),"Design load: ",o.design_N," N. Sacrificial bench target: ",o.required_fail_N," N."]})]}),me.jsxs(Zd,{fill:!0,children:[me.jsx(Vi,{intent:u==="model"?"primary":"none",icon:"cube",text:"Model",onClick:()=>d("model")}),me.jsx(Vi,{intent:u==="fea"?"primary":"none",icon:"heat-grid",text:"FEA",disabled:!J,onClick:()=>d("fea")})]}),me.jsx("h6",{children:"Explode"}),me.jsx(po,{min:0,max:1,stepSize:.01,labelRenderer:!1,value:m,onChange:p}),J&&me.jsxs(me.Fragment,{children:[me.jsx("h6",{children:"Release sequence"}),me.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[me.jsx(Vi,{small:!0,icon:_?"pause":"play",onClick:()=>M(!_)}),me.jsx(Vi,{small:!0,icon:"reset",onClick:()=>{M(!1),x(0)}}),me.jsx("div",{style:{flex:1,paddingTop:4},children:me.jsx(po,{min:0,max:2,stepSize:.01,labelRenderer:!1,value:v,onChange:O=>{M(!1),x(O)}})})]}),me.jsxs("div",{className:"status",children:[v<.02?"Latched: keeper crosses the adapter lug.":v<=1?`Solenoid pulls keeper +X ${(Kd*v*v*(3-2*v)).toFixed(1)} / ${Kd} mm.`:"Keeper open; illustrated adapter travel is +Z. Actual clearance requires an external departure force."," This is a prescribed motion illustration, not a tested release."]})]}),u==="fea"&&o&&me.jsxs(me.Fragment,{children:[me.jsx("h6",{children:"Load case"}),me.jsx(ac,{fill:!0,value:y,onChange:O=>S(O.target.value),options:Object.entries(m0).map(([O,L])=>({value:O,label:L.label}))}),me.jsxs("h6",{children:["Applied load: ",D.toFixed(1)," N"]}),me.jsx(po,{min:1,max:60,stepSize:.1,labelRenderer:!1,value:D,onChange:z}),me.jsxs("div",{className:"row",style:{display:"flex",gap:4,flexWrap:"wrap"},children:[me.jsx(Vi,{small:!0,text:`Design ${o.design_N} N`,onClick:()=>z(o.design_N)}),me.jsx(Vi,{small:!0,text:`Bench target ${o.required_fail_N} N`,onClick:()=>z(o.required_fail_N)})]}),me.jsxs("table",{className:"fea",children:[me.jsx("thead",{children:me.jsxs("tr",{children:[me.jsx("th",{children:"Part"}),me.jsx("th",{children:"Screen"}),me.jsx("th",{children:"Screen/load"})]})}),me.jsx("tbody",{children:ie.map(O=>me.jsxs("tr",{children:[me.jsxs("td",{children:[oe===O&&"● ",rc(O.part)]}),me.jsxs("td",{className:"n",children:[O.fail_N," N"]}),me.jsxs("td",{className:"n",children:[(O.fail_N/D).toFixed(2),"×"]})]},O.part))})]}),me.jsx(k0,{checked:b,label:"Ghost other parts",onChange:()=>N(!b)}),me.jsxs("div",{className:"status",children:[o.material.toUpperCase(),", ",o.note]})]}),me.jsx("h6",{children:"Parts"}),me.jsx("div",{className:"parts",children:le.map(O=>me.jsx(z0,{checked:!w[O],onChange:()=>R(L=>({...L,[O]:!L[O]})),labelElement:me.jsxs("span",{children:[me.jsx("span",{className:"swatch",style:{background:t.parts.find(L=>L.id===O).color}}),rc(O)]})},O))}),me.jsxs("div",{style:{display:"flex",gap:4},children:[me.jsx(Vi,{small:!0,text:"All",onClick:()=>R({})}),me.jsx(Vi,{small:!0,text:"Printed only",onClick:()=>R(Object.fromEntries(t.parts.filter(O=>!["printed","payload","moving"].includes(O.kind)).map(O=>[O.id,!0])))})]})]}),me.jsxs("div",{className:"stage",ref:i,children:[t&&me.jsx(Zd,{className:"views",minimal:!0,children:["iso","front","side","top"].map(O=>me.jsx(Vi,{small:!0,text:O,onClick:()=>g0(e,t.bounds,O)},O))}),u==="fea"&&o&&me.jsxs("div",{className:"legend",children:["Screen utilisation at ",D.toFixed(1)," N (1.0 = assumed stress limit)",me.jsx("div",{className:"bar",style:{background:IC}}),me.jsxs("div",{className:"ticks",children:[me.jsx("span",{children:"0"}),me.jsx("span",{children:"0.5"}),me.jsx("span",{children:"1.0"}),me.jsx("span",{style:{color:"#d91ad9"},children:">1"})]}),oe&&me.jsxs("div",{style:{marginTop:4},children:["○ governing peak: ",rc(oe.part)," at (",oe.peak_mm.join(", "),") mm"]})]}),me.jsx("div",{className:"hint",children:"Drag: orbit · scroll: zoom to cursor · right-drag: pan · double-click: orbit around point"})]})]})}document.body.classList.add(yx);_x.createRoot(document.getElementById("root")).render(me.jsx(zC,{}));export{qt as I,ig as _,SS as p};
