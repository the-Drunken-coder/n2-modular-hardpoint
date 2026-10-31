var ox=Object.defineProperty;var lx=(i,e,t)=>e in i?ox(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var mt=(i,e,t)=>lx(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function cx(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var cd={exports:{}},eo={},ud={exports:{}},Mt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Hm;function ux(){if(Hm)return Mt;Hm=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(N){return N===null||typeof N!="object"?null:(N=x&&N[x]||N["@@iterator"],typeof N=="function"?N:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function y(N,oe,Se){this.props=N,this.context=oe,this.refs=b,this.updater=Se||M}y.prototype.isReactComponent={},y.prototype.setState=function(N,oe){if(typeof N!="object"&&typeof N!="function"&&N!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,N,oe,"setState")},y.prototype.forceUpdate=function(N){this.updater.enqueueForceUpdate(this,N,"forceUpdate")};function S(){}S.prototype=y.prototype;function D(N,oe,Se){this.props=N,this.context=oe,this.refs=b,this.updater=Se||M}var z=D.prototype=new S;z.constructor=D,w(z,y.prototype),z.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function T(N,oe,Se){var Ge,ze={},$e=null,k=null;if(oe!=null)for(Ge in oe.ref!==void 0&&(k=oe.ref),oe.key!==void 0&&($e=""+oe.key),oe)L.call(oe,Ge)&&!I.hasOwnProperty(Ge)&&(ze[Ge]=oe[Ge]);var J=arguments.length-2;if(J===1)ze.children=Se;else if(1<J){for(var ge=Array(J),Le=0;Le<J;Le++)ge[Le]=arguments[Le+2];ze.children=ge}if(N&&N.defaultProps)for(Ge in J=N.defaultProps,J)ze[Ge]===void 0&&(ze[Ge]=J[Ge]);return{$$typeof:i,type:N,key:$e,ref:k,props:ze,_owner:P.current}}function U(N,oe){return{$$typeof:i,type:N.type,key:oe,ref:N.ref,props:N.props,_owner:N._owner}}function H(N){return typeof N=="object"&&N!==null&&N.$$typeof===i}function B(N){var oe={"=":"=0",":":"=2"};return"$"+N.replace(/[=:]/g,function(Se){return oe[Se]})}var j=/\/+/g;function ie(N,oe){return typeof N=="object"&&N!==null&&N.key!=null?B(""+N.key):oe.toString(36)}function G(N,oe,Se,Ge,ze){var $e=typeof N;($e==="undefined"||$e==="boolean")&&(N=null);var k=!1;if(N===null)k=!0;else switch($e){case"string":case"number":k=!0;break;case"object":switch(N.$$typeof){case i:case e:k=!0}}if(k)return k=N,ze=ze(k),N=Ge===""?"."+ie(k,0):Ge,R(ze)?(Se="",N!=null&&(Se=N.replace(j,"$&/")+"/"),G(ze,oe,Se,"",function(Le){return Le})):ze!=null&&(H(ze)&&(ze=U(ze,Se+(!ze.key||k&&k.key===ze.key?"":(""+ze.key).replace(j,"$&/")+"/")+N)),oe.push(ze)),1;if(k=0,Ge=Ge===""?".":Ge+":",R(N))for(var J=0;J<N.length;J++){$e=N[J];var ge=Ge+ie($e,J);k+=G($e,oe,Se,ge,ze)}else if(ge=_(N),typeof ge=="function")for(N=ge.call(N),J=0;!($e=N.next()).done;)$e=$e.value,ge=Ge+ie($e,J++),k+=G($e,oe,Se,ge,ze);else if($e==="object")throw oe=String(N),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(N).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return k}function te(N,oe,Se){if(N==null)return N;var Ge=[],ze=0;return G(N,Ge,"","",function($e){return oe.call(Se,$e,ze++)}),Ge}function Q(N){if(N._status===-1){var oe=N._result;oe=oe(),oe.then(function(Se){(N._status===0||N._status===-1)&&(N._status=1,N._result=Se)},function(Se){(N._status===0||N._status===-1)&&(N._status=2,N._result=Se)}),N._status===-1&&(N._status=0,N._result=oe)}if(N._status===1)return N._result.default;throw N._result}var le={current:null},q={transition:null},K={ReactCurrentDispatcher:le,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function Z(){throw Error("act(...) is not supported in production builds of React.")}return Mt.Children={map:te,forEach:function(N,oe,Se){te(N,function(){oe.apply(this,arguments)},Se)},count:function(N){var oe=0;return te(N,function(){oe++}),oe},toArray:function(N){return te(N,function(oe){return oe})||[]},only:function(N){if(!H(N))throw Error("React.Children.only expected to receive a single React element child.");return N}},Mt.Component=y,Mt.Fragment=t,Mt.Profiler=s,Mt.PureComponent=D,Mt.StrictMode=a,Mt.Suspense=m,Mt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=K,Mt.act=Z,Mt.cloneElement=function(N,oe,Se){if(N==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+N+".");var Ge=w({},N.props),ze=N.key,$e=N.ref,k=N._owner;if(oe!=null){if(oe.ref!==void 0&&($e=oe.ref,k=P.current),oe.key!==void 0&&(ze=""+oe.key),N.type&&N.type.defaultProps)var J=N.type.defaultProps;for(ge in oe)L.call(oe,ge)&&!I.hasOwnProperty(ge)&&(Ge[ge]=oe[ge]===void 0&&J!==void 0?J[ge]:oe[ge])}var ge=arguments.length-2;if(ge===1)Ge.children=Se;else if(1<ge){J=Array(ge);for(var Le=0;Le<ge;Le++)J[Le]=arguments[Le+2];Ge.children=J}return{$$typeof:i,type:N.type,key:ze,ref:$e,props:Ge,_owner:k}},Mt.createContext=function(N){return N={$$typeof:u,_currentValue:N,_currentValue2:N,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},N.Provider={$$typeof:l,_context:N},N.Consumer=N},Mt.createElement=T,Mt.createFactory=function(N){var oe=T.bind(null,N);return oe.type=N,oe},Mt.createRef=function(){return{current:null}},Mt.forwardRef=function(N){return{$$typeof:d,render:N}},Mt.isValidElement=H,Mt.lazy=function(N){return{$$typeof:v,_payload:{_status:-1,_result:N},_init:Q}},Mt.memo=function(N,oe){return{$$typeof:p,type:N,compare:oe===void 0?null:oe}},Mt.startTransition=function(N){var oe=q.transition;q.transition={};try{N()}finally{q.transition=oe}},Mt.unstable_act=Z,Mt.useCallback=function(N,oe){return le.current.useCallback(N,oe)},Mt.useContext=function(N){return le.current.useContext(N)},Mt.useDebugValue=function(){},Mt.useDeferredValue=function(N){return le.current.useDeferredValue(N)},Mt.useEffect=function(N,oe){return le.current.useEffect(N,oe)},Mt.useId=function(){return le.current.useId()},Mt.useImperativeHandle=function(N,oe,Se){return le.current.useImperativeHandle(N,oe,Se)},Mt.useInsertionEffect=function(N,oe){return le.current.useInsertionEffect(N,oe)},Mt.useLayoutEffect=function(N,oe){return le.current.useLayoutEffect(N,oe)},Mt.useMemo=function(N,oe){return le.current.useMemo(N,oe)},Mt.useReducer=function(N,oe,Se){return le.current.useReducer(N,oe,Se)},Mt.useRef=function(N){return le.current.useRef(N)},Mt.useState=function(N){return le.current.useState(N)},Mt.useSyncExternalStore=function(N,oe,Se){return le.current.useSyncExternalStore(N,oe,Se)},Mt.useTransition=function(){return le.current.useTransition()},Mt.version="18.3.1",Mt}var Vm;function Bf(){return Vm||(Vm=1,ud.exports=ux()),ud.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Gm;function dx(){if(Gm)return eo;Gm=1;var i=Bf(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,m,p){var v,x={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)a.call(m,v)&&!l.hasOwnProperty(v)&&(x[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)x[v]===void 0&&(x[v]=m[v]);return{$$typeof:e,type:d,key:_,ref:M,props:x,_owner:s.current}}return eo.Fragment=t,eo.jsx=u,eo.jsxs=u,eo}var Bm;function fx(){return Bm||(Bm=1,cd.exports=dx()),cd.exports}var me=fx(),Nl={},dd={exports:{}},$n={},fd={exports:{}},hd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Wm;function hx(){return Wm||(Wm=1,(function(i){function e(q,K){var Z=q.length;q.push(K);e:for(;0<Z;){var N=Z-1>>>1,oe=q[N];if(0<s(oe,K))q[N]=K,q[Z]=oe,Z=N;else break e}}function t(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var K=q[0],Z=q.pop();if(Z!==K){q[0]=Z;e:for(var N=0,oe=q.length,Se=oe>>>1;N<Se;){var Ge=2*(N+1)-1,ze=q[Ge],$e=Ge+1,k=q[$e];if(0>s(ze,Z))$e<oe&&0>s(k,ze)?(q[N]=k,q[$e]=Z,N=$e):(q[N]=ze,q[Ge]=Z,N=Ge);else if($e<oe&&0>s(k,Z))q[N]=k,q[$e]=Z,N=$e;else break e}}return K}function s(q,K){var Z=q.sortIndex-K.sortIndex;return Z!==0?Z:q.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();i.unstable_now=function(){return u.now()-d}}var m=[],p=[],v=1,x=null,_=3,M=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,D=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function z(q){for(var K=t(p);K!==null;){if(K.callback===null)a(p);else if(K.startTime<=q)a(p),K.sortIndex=K.expirationTime,e(m,K);else break;K=t(p)}}function R(q){if(b=!1,z(q),!w)if(t(m)!==null)w=!0,Q(L);else{var K=t(p);K!==null&&le(R,K.startTime-q)}}function L(q,K){w=!1,b&&(b=!1,S(T),T=-1),M=!0;var Z=_;try{for(z(K),x=t(m);x!==null&&(!(x.expirationTime>K)||q&&!B());){var N=x.callback;if(typeof N=="function"){x.callback=null,_=x.priorityLevel;var oe=N(x.expirationTime<=K);K=i.unstable_now(),typeof oe=="function"?x.callback=oe:x===t(m)&&a(m),z(K)}else a(m);x=t(m)}if(x!==null)var Se=!0;else{var Ge=t(p);Ge!==null&&le(R,Ge.startTime-K),Se=!1}return Se}finally{x=null,_=Z,M=!1}}var P=!1,I=null,T=-1,U=5,H=-1;function B(){return!(i.unstable_now()-H<U)}function j(){if(I!==null){var q=i.unstable_now();H=q;var K=!0;try{K=I(!0,q)}finally{K?ie():(P=!1,I=null)}}else P=!1}var ie;if(typeof D=="function")ie=function(){D(j)};else if(typeof MessageChannel<"u"){var G=new MessageChannel,te=G.port2;G.port1.onmessage=j,ie=function(){te.postMessage(null)}}else ie=function(){y(j,0)};function Q(q){I=q,P||(P=!0,ie())}function le(q,K){T=y(function(){q(i.unstable_now())},K)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(q){q.callback=null},i.unstable_continueExecution=function(){w||M||(w=!0,Q(L))},i.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<q?Math.floor(1e3/q):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(m)},i.unstable_next=function(q){switch(_){case 1:case 2:case 3:var K=3;break;default:K=_}var Z=_;_=K;try{return q()}finally{_=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(q,K){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=_;_=q;try{return K()}finally{_=Z}},i.unstable_scheduleCallback=function(q,K,Z){var N=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?N+Z:N):Z=N,q){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=Z+oe,q={id:v++,callback:K,priorityLevel:q,startTime:Z,expirationTime:oe,sortIndex:-1},Z>N?(q.sortIndex=Z,e(p,q),t(m)===null&&q===t(p)&&(b?(S(T),T=-1):b=!0,le(R,Z-N))):(q.sortIndex=oe,e(m,q),w||M||(w=!0,Q(L))),q},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(q){var K=_;return function(){var Z=_;_=K;try{return q.apply(this,arguments)}finally{_=Z}}}})(hd)),hd}var Xm;function px(){return Xm||(Xm=1,fd.exports=hx()),fd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var $m;function mx(){if($m)return $n;$m=1;var i=Bf(),e=px();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)a.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(n){return m.call(x,n)?!0:m.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,o,c){if(r===null||typeof r>"u"||M(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,o,c,f,g,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function D(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,D);y[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,D);y[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,D);y[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function z(n,r,o,c){var f=y.hasOwnProperty(r)?y[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,o,f,c)&&(o=null),c||f===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),H=Symbol.for("react.provider"),B=Symbol.for("react.context"),j=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),Q=Symbol.for("react.lazy"),le=Symbol.for("react.offscreen"),q=Symbol.iterator;function K(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,N;function oe(n){if(N===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);N=r&&r[1]||""}return`
`+N+n}var Se=!1;function Ge(n,r){if(!n||Se)return"";Se=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(fe){var c=fe}Reflect.construct(n,[],r)}else{try{r.call()}catch(fe){c=fe}n.call(r.prototype)}else{try{throw Error()}catch(fe){c=fe}n()}}catch(fe){if(fe&&c&&typeof fe.stack=="string"){for(var f=fe.stack.split(`
`),g=c.stack.split(`
`),A=f.length-1,O=g.length-1;1<=A&&0<=O&&f[A]!==g[O];)O--;for(;1<=A&&0<=O;A--,O--)if(f[A]!==g[O]){if(A!==1||O!==1)do if(A--,O--,0>O||f[A]!==g[O]){var V=`
`+f[A].replace(" at new "," at ");return n.displayName&&V.includes("<anonymous>")&&(V=V.replace("<anonymous>",n.displayName)),V}while(1<=A&&0<=O);break}}}finally{Se=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?oe(n):""}function ze(n){switch(n.tag){case 5:return oe(n.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return n=Ge(n.type,!1),n;case 11:return n=Ge(n.type.render,!1),n;case 1:return n=Ge(n.type,!0),n;default:return""}}function $e(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case P:return"Portal";case U:return"Profiler";case T:return"StrictMode";case ie:return"Suspense";case G:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case H:return(n._context.displayName||"Context")+".Provider";case j:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return r=n.displayName||null,r!==null?r:$e(n.type)||"Memo";case Q:r=n._payload,n=n._init;try{return $e(n(r))}catch{}}return null}function k(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $e(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function J(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function ge(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function Le(n){var r=ge(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function Ae(n){n._valueTracker||(n._valueTracker=Le(n))}function st(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=ge(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function ht(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function Be(n,r){var o=r.checked;return Z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function pt(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=J(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function _t(n,r){r=r.checked,r!=null&&z(n,"checked",r,!1)}function ot(n,r){_t(n,r);var o=J(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?bt(n,r.type,o):r.hasOwnProperty("defaultValue")&&bt(n,r.type,J(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Rt(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function bt(n,r,o){(r!=="number"||ht(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var Pt=Array.isArray;function yt(n,r,o,c){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+J(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function zt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function W(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(Pt(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:J(o)}}function nn(n,r){var o=J(r.value),c=J(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Ft(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function F(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?F(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,f)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function he(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var Te={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Re=["Webkit","ms","Moz","O"];Object.keys(Te).forEach(function(n){Re.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),Te[r]=Te[n]})});function pe(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||Te.hasOwnProperty(n)&&Te[n]?(""+r).trim():r+"px"}function _e(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=pe(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var De=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Je(n,r){if(r){if(De[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Ne(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Ce=null;function Qe(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var it=null,lt=null,X=null;function be(n){if(n=zs(n)){if(typeof it!="function")throw Error(t(280));var r=n.stateNode;r&&(r=Yo(r),it(n.stateNode,n.type,r))}}function ve(n){lt?X?X.push(n):X=[n]:lt=n}function Pe(){if(lt){var n=lt,r=X;if(X=lt=null,be(n),r)for(n=0;n<r.length;n++)be(r[n])}}function ke(n,r){return n(r)}function xe(){}var tt=!1;function je(n,r,o){if(tt)return n(r,o);tt=!0;try{return ke(n,r,o)}finally{tt=!1,(lt!==null||X!==null)&&(xe(),Pe())}}function Ot(n,r){var o=n.stateNode;if(o===null)return null;var c=Yo(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Lt=!1;if(d)try{var Mn={};Object.defineProperty(Mn,"passive",{get:function(){Lt=!0}}),window.addEventListener("test",Mn,Mn),window.removeEventListener("test",Mn,Mn)}catch{Lt=!1}function oi(n,r,o,c,f,g,A,O,V){var fe=Array.prototype.slice.call(arguments,3);try{r.apply(o,fe)}catch(Me){this.onError(Me)}}var qr=!1,Ea=null,Yr=!1,Kr=null,Dc={onError:function(n){qr=!0,Ea=n}};function Po(n,r,o,c,f,g,A,O,V){qr=!1,Ea=null,oi.apply(Dc,arguments)}function Lo(n,r,o,c,f,g,A,O,V){if(Po.apply(this,arguments),qr){if(qr){var fe=Ea;qr=!1,Ea=null}else throw Error(t(198));Yr||(Yr=!0,Kr=fe)}}function On(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ta(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function _s(n){if(On(n)!==n)throw Error(t(188))}function Do(n){var r=n.alternate;if(!r){if(r=On(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return _s(f),n;if(g===c)return _s(f),r;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var A=!1,O=f.child;O;){if(O===o){A=!0,o=f,c=g;break}if(O===c){A=!0,c=f,o=g;break}O=O.sibling}if(!A){for(O=g.child;O;){if(O===o){A=!0,o=g,c=f;break}if(O===c){A=!0,c=g,o=f;break}O=O.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function jr(n){return n=Do(n),n!==null?xs(n):null}function xs(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=xs(n);if(r!==null)return r;n=n.sibling}return null}var Zr=e.unstable_scheduleCallback,Ss=e.unstable_cancelCallback,No=e.unstable_shouldYield,Nc=e.unstable_requestPaint,Zt=e.unstable_now,Uc=e.unstable_getCurrentPriorityLevel,ys=e.unstable_ImmediatePriority,Ms=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,$=e.unstable_LowPriority,de=e.unstable_IdlePriority,ae=null,ne=null;function Oe(n){if(ne&&typeof ne.onCommitFiberRoot=="function")try{ne.onCommitFiberRoot(ae,n,void 0,(n.current.flags&128)===128)}catch{}}var Ue=Math.clz32?Math.clz32:et,Fe=Math.log,Ye=Math.LN2;function et(n){return n>>>=0,n===0?32:31-(Fe(n)/Ye|0)|0}var ft=64,vt=4194304;function Xe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function wt(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,A=o&268435455;if(A!==0){var O=A&~f;O!==0?c=Xe(O):(g&=A,g!==0&&(c=Xe(g)))}else A=o&~f,A!==0?c=Xe(A):g!==0&&(c=Xe(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-Ue(r),f=1<<o,c|=n[o],r&=~f;return c}function rn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Wt(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-Ue(g),O=1<<A,V=f[A];V===-1?((O&o)===0||(O&c)!==0)&&(f[A]=rn(O,r)):V<=r&&(n.expiredLanes|=O),g&=~O}}function Ht(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function un(){var n=ft;return ft<<=1,(ft&4194240)===0&&(ft=64),n}function He(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function sn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ue(r),n[r]=o}function At(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Ue(o),g=1<<f;r[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function Rn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Ue(o),f=1<<c;f&r|n[c]&r&&(n[c]|=r),o&=~f}}var xt=0;function vi(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var Ki,It,Yt,_i,Vt,li=!1,xi=[],Si=null,gr=null,vr=null,Es=new Map,Ts=new Map,_r=[],bv="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Eh(n,r){switch(n){case"focusin":case"focusout":Si=null;break;case"dragenter":case"dragleave":gr=null;break;case"mouseover":case"mouseout":vr=null;break;case"pointerover":case"pointerout":Es.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ts.delete(r.pointerId)}}function ws(n,r,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},r!==null&&(r=zs(r),r!==null&&It(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function Pv(n,r,o,c,f){switch(r){case"focusin":return Si=ws(Si,n,r,o,c,f),!0;case"dragenter":return gr=ws(gr,n,r,o,c,f),!0;case"mouseover":return vr=ws(vr,n,r,o,c,f),!0;case"pointerover":var g=f.pointerId;return Es.set(g,ws(Es.get(g)||null,n,r,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Ts.set(g,ws(Ts.get(g)||null,n,r,o,c,f)),!0}return!1}function Th(n){var r=Jr(n.target);if(r!==null){var o=On(r);if(o!==null){if(r=o.tag,r===13){if(r=Ta(o),r!==null){n.blockedOn=r,Vt(n.priority,function(){Yt(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function Uo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=Oc(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Ce=c,o.target.dispatchEvent(c),Ce=null}else return r=zs(o),r!==null&&It(r),n.blockedOn=o,!1;r.shift()}return!0}function wh(n,r,o){Uo(n)&&o.delete(r)}function Lv(){li=!1,Si!==null&&Uo(Si)&&(Si=null),gr!==null&&Uo(gr)&&(gr=null),vr!==null&&Uo(vr)&&(vr=null),Es.forEach(wh),Ts.forEach(wh)}function As(n,r){n.blockedOn===r&&(n.blockedOn=null,li||(li=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,Lv)))}function Cs(n){function r(f){return As(f,n)}if(0<xi.length){As(xi[0],n);for(var o=1;o<xi.length;o++){var c=xi[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Si!==null&&As(Si,n),gr!==null&&As(gr,n),vr!==null&&As(vr,n),Es.forEach(r),Ts.forEach(r),o=0;o<_r.length;o++)c=_r[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<_r.length&&(o=_r[0],o.blockedOn===null);)Th(o),o.blockedOn===null&&_r.shift()}var wa=R.ReactCurrentBatchConfig,Fo=!0;function Dv(n,r,o,c){var f=xt,g=wa.transition;wa.transition=null;try{xt=1,Fc(n,r,o,c)}finally{xt=f,wa.transition=g}}function Nv(n,r,o,c){var f=xt,g=wa.transition;wa.transition=null;try{xt=4,Fc(n,r,o,c)}finally{xt=f,wa.transition=g}}function Fc(n,r,o,c){if(Fo){var f=Oc(n,r,o,c);if(f===null)Qc(n,r,c,Oo,o),Eh(n,c);else if(Pv(f,n,r,o,c))c.stopPropagation();else if(Eh(n,c),r&4&&-1<bv.indexOf(n)){for(;f!==null;){var g=zs(f);if(g!==null&&Ki(g),g=Oc(n,r,o,c),g===null&&Qc(n,r,c,Oo,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else Qc(n,r,c,null,o)}}var Oo=null;function Oc(n,r,o,c){if(Oo=null,n=Qe(c),n=Jr(n),n!==null)if(r=On(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Ta(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Oo=n,null}function Ah(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Uc()){case ys:return 1;case Ms:return 4;case C:case $:return 16;case de:return 536870912;default:return 16}default:return 16}}var xr=null,Ic=null,Io=null;function Ch(){if(Io)return Io;var n,r=Ic,o=r.length,c,f="value"in xr?xr.value:xr.textContent,g=f.length;for(n=0;n<o&&r[n]===f[n];n++);var A=o-n;for(c=1;c<=A&&r[o-c]===f[g-c];c++);return Io=f.slice(n,1<c?1-c:void 0)}function ko(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function zo(){return!0}function Rh(){return!1}function Zn(n){function r(o,c,f,g,A){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?zo:Rh,this.isPropagationStopped=Rh,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=zo)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=zo)},persist:function(){},isPersistent:zo}),r}var Aa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},kc=Zn(Aa),Rs=Z({},Aa,{view:0,detail:0}),Uv=Zn(Rs),zc,Hc,bs,Ho=Z({},Rs,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Gc,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==bs&&(bs&&n.type==="mousemove"?(zc=n.screenX-bs.screenX,Hc=n.screenY-bs.screenY):Hc=zc=0,bs=n),zc)},movementY:function(n){return"movementY"in n?n.movementY:Hc}}),bh=Zn(Ho),Fv=Z({},Ho,{dataTransfer:0}),Ov=Zn(Fv),Iv=Z({},Rs,{relatedTarget:0}),Vc=Zn(Iv),kv=Z({},Aa,{animationName:0,elapsedTime:0,pseudoElement:0}),zv=Zn(kv),Hv=Z({},Aa,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),Vv=Zn(Hv),Gv=Z({},Aa,{data:0}),Ph=Zn(Gv),Bv={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Wv={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Xv={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function $v(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=Xv[n])?!!r[n]:!1}function Gc(){return $v}var qv=Z({},Rs,{key:function(n){if(n.key){var r=Bv[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=ko(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?Wv[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Gc,charCode:function(n){return n.type==="keypress"?ko(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?ko(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),Yv=Zn(qv),Kv=Z({},Ho,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Lh=Zn(Kv),jv=Z({},Rs,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Gc}),Zv=Zn(jv),Jv=Z({},Aa,{propertyName:0,elapsedTime:0,pseudoElement:0}),Qv=Zn(Jv),e_=Z({},Ho,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),t_=Zn(e_),n_=[9,13,27,32],Bc=d&&"CompositionEvent"in window,Ps=null;d&&"documentMode"in document&&(Ps=document.documentMode);var i_=d&&"TextEvent"in window&&!Ps,Dh=d&&(!Bc||Ps&&8<Ps&&11>=Ps),Nh=" ",Uh=!1;function Fh(n,r){switch(n){case"keyup":return n_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Oh(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Ca=!1;function r_(n,r){switch(n){case"compositionend":return Oh(r);case"keypress":return r.which!==32?null:(Uh=!0,Nh);case"textInput":return n=r.data,n===Nh&&Uh?null:n;default:return null}}function a_(n,r){if(Ca)return n==="compositionend"||!Bc&&Fh(n,r)?(n=Ch(),Io=Ic=xr=null,Ca=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return Dh&&r.locale!=="ko"?null:r.data;default:return null}}var s_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Ih(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!s_[n.type]:r==="textarea"}function kh(n,r,o,c){ve(c),r=Xo(r,"onChange"),0<r.length&&(o=new kc("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var Ls=null,Ds=null;function o_(n){np(n,0)}function Vo(n){var r=Da(n);if(st(r))return n}function l_(n,r){if(n==="change")return r}var zh=!1;if(d){var Wc;if(d){var Xc="oninput"in document;if(!Xc){var Hh=document.createElement("div");Hh.setAttribute("oninput","return;"),Xc=typeof Hh.oninput=="function"}Wc=Xc}else Wc=!1;zh=Wc&&(!document.documentMode||9<document.documentMode)}function Vh(){Ls&&(Ls.detachEvent("onpropertychange",Gh),Ds=Ls=null)}function Gh(n){if(n.propertyName==="value"&&Vo(Ds)){var r=[];kh(r,Ds,n,Qe(n)),je(o_,r)}}function c_(n,r,o){n==="focusin"?(Vh(),Ls=r,Ds=o,Ls.attachEvent("onpropertychange",Gh)):n==="focusout"&&Vh()}function u_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return Vo(Ds)}function d_(n,r){if(n==="click")return Vo(r)}function f_(n,r){if(n==="input"||n==="change")return Vo(r)}function h_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var yi=typeof Object.is=="function"?Object.is:h_;function Ns(n,r){if(yi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!m.call(r,f)||!yi(n[f],r[f]))return!1}return!0}function Bh(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function Wh(n,r){var o=Bh(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=Bh(o)}}function Xh(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?Xh(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function $h(){for(var n=window,r=ht();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=ht(n.document)}return r}function $c(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function p_(n){var r=$h(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&Xh(o.ownerDocument.documentElement,o)){if(c!==null&&$c(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=Wh(o,g);var A=Wh(o,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var m_=d&&"documentMode"in document&&11>=document.documentMode,Ra=null,qc=null,Us=null,Yc=!1;function qh(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;Yc||Ra==null||Ra!==ht(c)||(c=Ra,"selectionStart"in c&&$c(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Us&&Ns(Us,c)||(Us=c,c=Xo(qc,"onSelect"),0<c.length&&(r=new kc("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=Ra)))}function Go(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var ba={animationend:Go("Animation","AnimationEnd"),animationiteration:Go("Animation","AnimationIteration"),animationstart:Go("Animation","AnimationStart"),transitionend:Go("Transition","TransitionEnd")},Kc={},Yh={};d&&(Yh=document.createElement("div").style,"AnimationEvent"in window||(delete ba.animationend.animation,delete ba.animationiteration.animation,delete ba.animationstart.animation),"TransitionEvent"in window||delete ba.transitionend.transition);function Bo(n){if(Kc[n])return Kc[n];if(!ba[n])return n;var r=ba[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in Yh)return Kc[n]=r[o];return n}var Kh=Bo("animationend"),jh=Bo("animationiteration"),Zh=Bo("animationstart"),Jh=Bo("transitionend"),Qh=new Map,ep="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Sr(n,r){Qh.set(n,r),l(r,[n])}for(var jc=0;jc<ep.length;jc++){var Zc=ep[jc],g_=Zc.toLowerCase(),v_=Zc[0].toUpperCase()+Zc.slice(1);Sr(g_,"on"+v_)}Sr(Kh,"onAnimationEnd"),Sr(jh,"onAnimationIteration"),Sr(Zh,"onAnimationStart"),Sr("dblclick","onDoubleClick"),Sr("focusin","onFocus"),Sr("focusout","onBlur"),Sr(Jh,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Fs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),__=new Set("cancel close invalid load scroll toggle".split(" ").concat(Fs));function tp(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,Lo(c,r,void 0,n),n.currentTarget=null}function np(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var A=c.length-1;0<=A;A--){var O=c[A],V=O.instance,fe=O.currentTarget;if(O=O.listener,V!==g&&f.isPropagationStopped())break e;tp(f,O,fe),g=V}else for(A=0;A<c.length;A++){if(O=c[A],V=O.instance,fe=O.currentTarget,O=O.listener,V!==g&&f.isPropagationStopped())break e;tp(f,O,fe),g=V}}}if(Yr)throw n=Kr,Yr=!1,Kr=null,n}function $t(n,r){var o=r[au];o===void 0&&(o=r[au]=new Set);var c=n+"__bubble";o.has(c)||(ip(r,n,2,!1),o.add(c))}function Jc(n,r,o){var c=0;r&&(c|=4),ip(o,n,c,r)}var Wo="_reactListening"+Math.random().toString(36).slice(2);function Os(n){if(!n[Wo]){n[Wo]=!0,a.forEach(function(o){o!=="selectionchange"&&(__.has(o)||Jc(o,!1,n),Jc(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[Wo]||(r[Wo]=!0,Jc("selectionchange",!1,r))}}function ip(n,r,o,c){switch(Ah(r)){case 1:var f=Dv;break;case 4:f=Nv;break;default:f=Fc}o=f.bind(null,r,o,n),f=void 0,!Lt||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function Qc(n,r,o,c,f){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var V=A.tag;if((V===3||V===4)&&(V=A.stateNode.containerInfo,V===f||V.nodeType===8&&V.parentNode===f))return;A=A.return}for(;O!==null;){if(A=Jr(O),A===null)return;if(V=A.tag,V===5||V===6){c=g=A;continue e}O=O.parentNode}}c=c.return}je(function(){var fe=g,Me=Qe(o),Ee=[];e:{var ye=Qh.get(n);if(ye!==void 0){var We=kc,Ke=n;switch(n){case"keypress":if(ko(o)===0)break e;case"keydown":case"keyup":We=Yv;break;case"focusin":Ke="focus",We=Vc;break;case"focusout":Ke="blur",We=Vc;break;case"beforeblur":case"afterblur":We=Vc;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":We=bh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":We=Ov;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":We=Zv;break;case Kh:case jh:case Zh:We=zv;break;case Jh:We=Qv;break;case"scroll":We=Uv;break;case"wheel":We=t_;break;case"copy":case"cut":case"paste":We=Vv;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":We=Lh}var Ze=(r&4)!==0,on=!Ze&&n==="scroll",se=Ze?ye!==null?ye+"Capture":null:ye;Ze=[];for(var Y=fe,ce;Y!==null;){ce=Y;var we=ce.stateNode;if(ce.tag===5&&we!==null&&(ce=we,se!==null&&(we=Ot(Y,se),we!=null&&Ze.push(Is(Y,we,ce)))),on)break;Y=Y.return}0<Ze.length&&(ye=new We(ye,Ke,null,o,Me),Ee.push({event:ye,listeners:Ze}))}}if((r&7)===0){e:{if(ye=n==="mouseover"||n==="pointerover",We=n==="mouseout"||n==="pointerout",ye&&o!==Ce&&(Ke=o.relatedTarget||o.fromElement)&&(Jr(Ke)||Ke[ji]))break e;if((We||ye)&&(ye=Me.window===Me?Me:(ye=Me.ownerDocument)?ye.defaultView||ye.parentWindow:window,We?(Ke=o.relatedTarget||o.toElement,We=fe,Ke=Ke?Jr(Ke):null,Ke!==null&&(on=On(Ke),Ke!==on||Ke.tag!==5&&Ke.tag!==6)&&(Ke=null)):(We=null,Ke=fe),We!==Ke)){if(Ze=bh,we="onMouseLeave",se="onMouseEnter",Y="mouse",(n==="pointerout"||n==="pointerover")&&(Ze=Lh,we="onPointerLeave",se="onPointerEnter",Y="pointer"),on=We==null?ye:Da(We),ce=Ke==null?ye:Da(Ke),ye=new Ze(we,Y+"leave",We,o,Me),ye.target=on,ye.relatedTarget=ce,we=null,Jr(Me)===fe&&(Ze=new Ze(se,Y+"enter",Ke,o,Me),Ze.target=ce,Ze.relatedTarget=on,we=Ze),on=we,We&&Ke)t:{for(Ze=We,se=Ke,Y=0,ce=Ze;ce;ce=Pa(ce))Y++;for(ce=0,we=se;we;we=Pa(we))ce++;for(;0<Y-ce;)Ze=Pa(Ze),Y--;for(;0<ce-Y;)se=Pa(se),ce--;for(;Y--;){if(Ze===se||se!==null&&Ze===se.alternate)break t;Ze=Pa(Ze),se=Pa(se)}Ze=null}else Ze=null;We!==null&&rp(Ee,ye,We,Ze,!1),Ke!==null&&on!==null&&rp(Ee,on,Ke,Ze,!0)}}e:{if(ye=fe?Da(fe):window,We=ye.nodeName&&ye.nodeName.toLowerCase(),We==="select"||We==="input"&&ye.type==="file")var nt=l_;else if(Ih(ye))if(zh)nt=f_;else{nt=u_;var rt=c_}else(We=ye.nodeName)&&We.toLowerCase()==="input"&&(ye.type==="checkbox"||ye.type==="radio")&&(nt=d_);if(nt&&(nt=nt(n,fe))){kh(Ee,nt,o,Me);break e}rt&&rt(n,ye,fe),n==="focusout"&&(rt=ye._wrapperState)&&rt.controlled&&ye.type==="number"&&bt(ye,"number",ye.value)}switch(rt=fe?Da(fe):window,n){case"focusin":(Ih(rt)||rt.contentEditable==="true")&&(Ra=rt,qc=fe,Us=null);break;case"focusout":Us=qc=Ra=null;break;case"mousedown":Yc=!0;break;case"contextmenu":case"mouseup":case"dragend":Yc=!1,qh(Ee,o,Me);break;case"selectionchange":if(m_)break;case"keydown":case"keyup":qh(Ee,o,Me)}var at;if(Bc)e:{switch(n){case"compositionstart":var ct="onCompositionStart";break e;case"compositionend":ct="onCompositionEnd";break e;case"compositionupdate":ct="onCompositionUpdate";break e}ct=void 0}else Ca?Fh(n,o)&&(ct="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(ct="onCompositionStart");ct&&(Dh&&o.locale!=="ko"&&(Ca||ct!=="onCompositionStart"?ct==="onCompositionEnd"&&Ca&&(at=Ch()):(xr=Me,Ic="value"in xr?xr.value:xr.textContent,Ca=!0)),rt=Xo(fe,ct),0<rt.length&&(ct=new Ph(ct,n,null,o,Me),Ee.push({event:ct,listeners:rt}),at?ct.data=at:(at=Oh(o),at!==null&&(ct.data=at)))),(at=i_?r_(n,o):a_(n,o))&&(fe=Xo(fe,"onBeforeInput"),0<fe.length&&(Me=new Ph("onBeforeInput","beforeinput",null,o,Me),Ee.push({event:Me,listeners:fe}),Me.data=at))}np(Ee,r)})}function Is(n,r,o){return{instance:n,listener:r,currentTarget:o}}function Xo(n,r){for(var o=r+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=Ot(n,o),g!=null&&c.unshift(Is(n,g,f)),g=Ot(n,r),g!=null&&c.push(Is(n,g,f))),n=n.return}return c}function Pa(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function rp(n,r,o,c,f){for(var g=r._reactName,A=[];o!==null&&o!==c;){var O=o,V=O.alternate,fe=O.stateNode;if(V!==null&&V===c)break;O.tag===5&&fe!==null&&(O=fe,f?(V=Ot(o,g),V!=null&&A.unshift(Is(o,V,O))):f||(V=Ot(o,g),V!=null&&A.push(Is(o,V,O)))),o=o.return}A.length!==0&&n.push({event:r,listeners:A})}var x_=/\r\n?/g,S_=/\u0000|\uFFFD/g;function ap(n){return(typeof n=="string"?n:""+n).replace(x_,`
`).replace(S_,"")}function $o(n,r,o){if(r=ap(r),ap(n)!==r&&o)throw Error(t(425))}function qo(){}var eu=null,tu=null;function nu(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var iu=typeof setTimeout=="function"?setTimeout:void 0,y_=typeof clearTimeout=="function"?clearTimeout:void 0,sp=typeof Promise=="function"?Promise:void 0,M_=typeof queueMicrotask=="function"?queueMicrotask:typeof sp<"u"?function(n){return sp.resolve(null).then(n).catch(E_)}:iu;function E_(n){setTimeout(function(){throw n})}function ru(n,r){var o=r,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),Cs(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);Cs(r)}function yr(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function op(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var La=Math.random().toString(36).slice(2),Fi="__reactFiber$"+La,ks="__reactProps$"+La,ji="__reactContainer$"+La,au="__reactEvents$"+La,T_="__reactListeners$"+La,w_="__reactHandles$"+La;function Jr(n){var r=n[Fi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[ji]||o[Fi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=op(n);n!==null;){if(o=n[Fi])return o;n=op(n)}return r}n=o,o=n.parentNode}return null}function zs(n){return n=n[Fi]||n[ji],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function Da(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function Yo(n){return n[ks]||null}var su=[],Na=-1;function Mr(n){return{current:n}}function qt(n){0>Na||(n.current=su[Na],su[Na]=null,Na--)}function Xt(n,r){Na++,su[Na]=n.current,n.current=r}var Er={},bn=Mr(Er),Vn=Mr(!1),Qr=Er;function Ua(n,r){var o=n.type.contextTypes;if(!o)return Er;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=f),f}function Gn(n){return n=n.childContextTypes,n!=null}function Ko(){qt(Vn),qt(bn)}function lp(n,r,o){if(bn.current!==Er)throw Error(t(168));Xt(bn,r),Xt(Vn,o)}function cp(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(t(108,k(n)||"Unknown",f));return Z({},o,c)}function jo(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Er,Qr=bn.current,Xt(bn,n),Xt(Vn,Vn.current),!0}function up(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=cp(n,r,Qr),c.__reactInternalMemoizedMergedChildContext=n,qt(Vn),qt(bn),Xt(bn,n)):qt(Vn),Xt(Vn,o)}var Zi=null,Zo=!1,ou=!1;function dp(n){Zi===null?Zi=[n]:Zi.push(n)}function A_(n){Zo=!0,dp(n)}function Tr(){if(!ou&&Zi!==null){ou=!0;var n=0,r=xt;try{var o=Zi;for(xt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}Zi=null,Zo=!1}catch(f){throw Zi!==null&&(Zi=Zi.slice(n+1)),Zr(ys,Tr),f}finally{xt=r,ou=!1}}return null}var Fa=[],Oa=0,Jo=null,Qo=0,ci=[],ui=0,ea=null,Ji=1,Qi="";function ta(n,r){Fa[Oa++]=Qo,Fa[Oa++]=Jo,Jo=n,Qo=r}function fp(n,r,o){ci[ui++]=Ji,ci[ui++]=Qi,ci[ui++]=ea,ea=n;var c=Ji;n=Qi;var f=32-Ue(c)-1;c&=~(1<<f),o+=1;var g=32-Ue(r)+f;if(30<g){var A=f-f%5;g=(c&(1<<A)-1).toString(32),c>>=A,f-=A,Ji=1<<32-Ue(r)+f|o<<f|c,Qi=g+n}else Ji=1<<g|o<<f|c,Qi=n}function lu(n){n.return!==null&&(ta(n,1),fp(n,1,0))}function cu(n){for(;n===Jo;)Jo=Fa[--Oa],Fa[Oa]=null,Qo=Fa[--Oa],Fa[Oa]=null;for(;n===ea;)ea=ci[--ui],ci[ui]=null,Qi=ci[--ui],ci[ui]=null,Ji=ci[--ui],ci[ui]=null}var Jn=null,Qn=null,Kt=!1,Mi=null;function hp(n,r){var o=pi(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function pp(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,Jn=n,Qn=yr(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,Jn=n,Qn=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=ea!==null?{id:Ji,overflow:Qi}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=pi(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,Jn=n,Qn=null,!0):!1;default:return!1}}function uu(n){return(n.mode&1)!==0&&(n.flags&128)===0}function du(n){if(Kt){var r=Qn;if(r){var o=r;if(!pp(n,r)){if(uu(n))throw Error(t(418));r=yr(o.nextSibling);var c=Jn;r&&pp(n,r)?hp(c,o):(n.flags=n.flags&-4097|2,Kt=!1,Jn=n)}}else{if(uu(n))throw Error(t(418));n.flags=n.flags&-4097|2,Kt=!1,Jn=n}}}function mp(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;Jn=n}function el(n){if(n!==Jn)return!1;if(!Kt)return mp(n),Kt=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!nu(n.type,n.memoizedProps)),r&&(r=Qn)){if(uu(n))throw gp(),Error(t(418));for(;r;)hp(n,r),r=yr(r.nextSibling)}if(mp(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){Qn=yr(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}Qn=null}}else Qn=Jn?yr(n.stateNode.nextSibling):null;return!0}function gp(){for(var n=Qn;n;)n=yr(n.nextSibling)}function Ia(){Qn=Jn=null,Kt=!1}function fu(n){Mi===null?Mi=[n]:Mi.push(n)}var C_=R.ReactCurrentBatchConfig;function Hs(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(A){var O=f.refs;A===null?delete O[g]:O[g]=A},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function tl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function vp(n){var r=n._init;return r(n._payload)}function _p(n){function r(se,Y){if(n){var ce=se.deletions;ce===null?(se.deletions=[Y],se.flags|=16):ce.push(Y)}}function o(se,Y){if(!n)return null;for(;Y!==null;)r(se,Y),Y=Y.sibling;return null}function c(se,Y){for(se=new Map;Y!==null;)Y.key!==null?se.set(Y.key,Y):se.set(Y.index,Y),Y=Y.sibling;return se}function f(se,Y){return se=Dr(se,Y),se.index=0,se.sibling=null,se}function g(se,Y,ce){return se.index=ce,n?(ce=se.alternate,ce!==null?(ce=ce.index,ce<Y?(se.flags|=2,Y):ce):(se.flags|=2,Y)):(se.flags|=1048576,Y)}function A(se){return n&&se.alternate===null&&(se.flags|=2),se}function O(se,Y,ce,we){return Y===null||Y.tag!==6?(Y=id(ce,se.mode,we),Y.return=se,Y):(Y=f(Y,ce),Y.return=se,Y)}function V(se,Y,ce,we){var nt=ce.type;return nt===I?Me(se,Y,ce.props.children,we,ce.key):Y!==null&&(Y.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&vp(nt)===Y.type)?(we=f(Y,ce.props),we.ref=Hs(se,Y,ce),we.return=se,we):(we=wl(ce.type,ce.key,ce.props,null,se.mode,we),we.ref=Hs(se,Y,ce),we.return=se,we)}function fe(se,Y,ce,we){return Y===null||Y.tag!==4||Y.stateNode.containerInfo!==ce.containerInfo||Y.stateNode.implementation!==ce.implementation?(Y=rd(ce,se.mode,we),Y.return=se,Y):(Y=f(Y,ce.children||[]),Y.return=se,Y)}function Me(se,Y,ce,we,nt){return Y===null||Y.tag!==7?(Y=ca(ce,se.mode,we,nt),Y.return=se,Y):(Y=f(Y,ce),Y.return=se,Y)}function Ee(se,Y,ce){if(typeof Y=="string"&&Y!==""||typeof Y=="number")return Y=id(""+Y,se.mode,ce),Y.return=se,Y;if(typeof Y=="object"&&Y!==null){switch(Y.$$typeof){case L:return ce=wl(Y.type,Y.key,Y.props,null,se.mode,ce),ce.ref=Hs(se,null,Y),ce.return=se,ce;case P:return Y=rd(Y,se.mode,ce),Y.return=se,Y;case Q:var we=Y._init;return Ee(se,we(Y._payload),ce)}if(Pt(Y)||K(Y))return Y=ca(Y,se.mode,ce,null),Y.return=se,Y;tl(se,Y)}return null}function ye(se,Y,ce,we){var nt=Y!==null?Y.key:null;if(typeof ce=="string"&&ce!==""||typeof ce=="number")return nt!==null?null:O(se,Y,""+ce,we);if(typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:return ce.key===nt?V(se,Y,ce,we):null;case P:return ce.key===nt?fe(se,Y,ce,we):null;case Q:return nt=ce._init,ye(se,Y,nt(ce._payload),we)}if(Pt(ce)||K(ce))return nt!==null?null:Me(se,Y,ce,we,null);tl(se,ce)}return null}function We(se,Y,ce,we,nt){if(typeof we=="string"&&we!==""||typeof we=="number")return se=se.get(ce)||null,O(Y,se,""+we,nt);if(typeof we=="object"&&we!==null){switch(we.$$typeof){case L:return se=se.get(we.key===null?ce:we.key)||null,V(Y,se,we,nt);case P:return se=se.get(we.key===null?ce:we.key)||null,fe(Y,se,we,nt);case Q:var rt=we._init;return We(se,Y,ce,rt(we._payload),nt)}if(Pt(we)||K(we))return se=se.get(ce)||null,Me(Y,se,we,nt,null);tl(Y,we)}return null}function Ke(se,Y,ce,we){for(var nt=null,rt=null,at=Y,ct=Y=0,xn=null;at!==null&&ct<ce.length;ct++){at.index>ct?(xn=at,at=null):xn=at.sibling;var kt=ye(se,at,ce[ct],we);if(kt===null){at===null&&(at=xn);break}n&&at&&kt.alternate===null&&r(se,at),Y=g(kt,Y,ct),rt===null?nt=kt:rt.sibling=kt,rt=kt,at=xn}if(ct===ce.length)return o(se,at),Kt&&ta(se,ct),nt;if(at===null){for(;ct<ce.length;ct++)at=Ee(se,ce[ct],we),at!==null&&(Y=g(at,Y,ct),rt===null?nt=at:rt.sibling=at,rt=at);return Kt&&ta(se,ct),nt}for(at=c(se,at);ct<ce.length;ct++)xn=We(at,se,ct,ce[ct],we),xn!==null&&(n&&xn.alternate!==null&&at.delete(xn.key===null?ct:xn.key),Y=g(xn,Y,ct),rt===null?nt=xn:rt.sibling=xn,rt=xn);return n&&at.forEach(function(Nr){return r(se,Nr)}),Kt&&ta(se,ct),nt}function Ze(se,Y,ce,we){var nt=K(ce);if(typeof nt!="function")throw Error(t(150));if(ce=nt.call(ce),ce==null)throw Error(t(151));for(var rt=nt=null,at=Y,ct=Y=0,xn=null,kt=ce.next();at!==null&&!kt.done;ct++,kt=ce.next()){at.index>ct?(xn=at,at=null):xn=at.sibling;var Nr=ye(se,at,kt.value,we);if(Nr===null){at===null&&(at=xn);break}n&&at&&Nr.alternate===null&&r(se,at),Y=g(Nr,Y,ct),rt===null?nt=Nr:rt.sibling=Nr,rt=Nr,at=xn}if(kt.done)return o(se,at),Kt&&ta(se,ct),nt;if(at===null){for(;!kt.done;ct++,kt=ce.next())kt=Ee(se,kt.value,we),kt!==null&&(Y=g(kt,Y,ct),rt===null?nt=kt:rt.sibling=kt,rt=kt);return Kt&&ta(se,ct),nt}for(at=c(se,at);!kt.done;ct++,kt=ce.next())kt=We(at,se,ct,kt.value,we),kt!==null&&(n&&kt.alternate!==null&&at.delete(kt.key===null?ct:kt.key),Y=g(kt,Y,ct),rt===null?nt=kt:rt.sibling=kt,rt=kt);return n&&at.forEach(function(sx){return r(se,sx)}),Kt&&ta(se,ct),nt}function on(se,Y,ce,we){if(typeof ce=="object"&&ce!==null&&ce.type===I&&ce.key===null&&(ce=ce.props.children),typeof ce=="object"&&ce!==null){switch(ce.$$typeof){case L:e:{for(var nt=ce.key,rt=Y;rt!==null;){if(rt.key===nt){if(nt=ce.type,nt===I){if(rt.tag===7){o(se,rt.sibling),Y=f(rt,ce.props.children),Y.return=se,se=Y;break e}}else if(rt.elementType===nt||typeof nt=="object"&&nt!==null&&nt.$$typeof===Q&&vp(nt)===rt.type){o(se,rt.sibling),Y=f(rt,ce.props),Y.ref=Hs(se,rt,ce),Y.return=se,se=Y;break e}o(se,rt);break}else r(se,rt);rt=rt.sibling}ce.type===I?(Y=ca(ce.props.children,se.mode,we,ce.key),Y.return=se,se=Y):(we=wl(ce.type,ce.key,ce.props,null,se.mode,we),we.ref=Hs(se,Y,ce),we.return=se,se=we)}return A(se);case P:e:{for(rt=ce.key;Y!==null;){if(Y.key===rt)if(Y.tag===4&&Y.stateNode.containerInfo===ce.containerInfo&&Y.stateNode.implementation===ce.implementation){o(se,Y.sibling),Y=f(Y,ce.children||[]),Y.return=se,se=Y;break e}else{o(se,Y);break}else r(se,Y);Y=Y.sibling}Y=rd(ce,se.mode,we),Y.return=se,se=Y}return A(se);case Q:return rt=ce._init,on(se,Y,rt(ce._payload),we)}if(Pt(ce))return Ke(se,Y,ce,we);if(K(ce))return Ze(se,Y,ce,we);tl(se,ce)}return typeof ce=="string"&&ce!==""||typeof ce=="number"?(ce=""+ce,Y!==null&&Y.tag===6?(o(se,Y.sibling),Y=f(Y,ce),Y.return=se,se=Y):(o(se,Y),Y=id(ce,se.mode,we),Y.return=se,se=Y),A(se)):o(se,Y)}return on}var ka=_p(!0),xp=_p(!1),nl=Mr(null),il=null,za=null,hu=null;function pu(){hu=za=il=null}function mu(n){var r=nl.current;qt(nl),n._currentValue=r}function gu(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function Ha(n,r){il=n,hu=za=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(Bn=!0),n.firstContext=null)}function di(n){var r=n._currentValue;if(hu!==n)if(n={context:n,memoizedValue:r,next:null},za===null){if(il===null)throw Error(t(308));za=n,il.dependencies={lanes:0,firstContext:n}}else za=za.next=n;return r}var na=null;function vu(n){na===null?na=[n]:na.push(n)}function Sp(n,r,o,c){var f=r.interleaved;return f===null?(o.next=o,vu(r)):(o.next=f.next,f.next=o),r.interleaved=o,er(n,c)}function er(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var wr=!1;function _u(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function yp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function tr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function Ar(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Nt&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,er(n,o)}return f=c.interleaved,f===null?(r.next=r,vu(c)):(r.next=f.next,f.next=r),c.interleaved=r,er(n,o)}function rl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Rn(n,o)}}function Mp(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?f=g=r:g=g.next=r}else f=g=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function al(n,r,o,c){var f=n.updateQueue;wr=!1;var g=f.firstBaseUpdate,A=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var V=O,fe=V.next;V.next=null,A===null?g=fe:A.next=fe,A=V;var Me=n.alternate;Me!==null&&(Me=Me.updateQueue,O=Me.lastBaseUpdate,O!==A&&(O===null?Me.firstBaseUpdate=fe:O.next=fe,Me.lastBaseUpdate=V))}if(g!==null){var Ee=f.baseState;A=0,Me=fe=V=null,O=g;do{var ye=O.lane,We=O.eventTime;if((c&ye)===ye){Me!==null&&(Me=Me.next={eventTime:We,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Ke=n,Ze=O;switch(ye=r,We=o,Ze.tag){case 1:if(Ke=Ze.payload,typeof Ke=="function"){Ee=Ke.call(We,Ee,ye);break e}Ee=Ke;break e;case 3:Ke.flags=Ke.flags&-65537|128;case 0:if(Ke=Ze.payload,ye=typeof Ke=="function"?Ke.call(We,Ee,ye):Ke,ye==null)break e;Ee=Z({},Ee,ye);break e;case 2:wr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,ye=f.effects,ye===null?f.effects=[O]:ye.push(O))}else We={eventTime:We,lane:ye,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Me===null?(fe=Me=We,V=Ee):Me=Me.next=We,A|=ye;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;ye=O,O=ye.next,ye.next=null,f.lastBaseUpdate=ye,f.shared.pending=null}}while(!0);if(Me===null&&(V=Ee),f.baseState=V,f.firstBaseUpdate=fe,f.lastBaseUpdate=Me,r=f.shared.interleaved,r!==null){f=r;do A|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);aa|=A,n.lanes=A,n.memoizedState=Ee}}function Ep(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var Vs={},Oi=Mr(Vs),Gs=Mr(Vs),Bs=Mr(Vs);function ia(n){if(n===Vs)throw Error(t(174));return n}function xu(n,r){switch(Xt(Bs,r),Xt(Gs,n),Xt(Oi,Vs),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}qt(Oi),Xt(Oi,r)}function Va(){qt(Oi),qt(Gs),qt(Bs)}function Tp(n){ia(Bs.current);var r=ia(Oi.current),o=E(r,n.type);r!==o&&(Xt(Gs,n),Xt(Oi,o))}function Su(n){Gs.current===n&&(qt(Oi),qt(Gs))}var Jt=Mr(0);function sl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var yu=[];function Mu(){for(var n=0;n<yu.length;n++)yu[n]._workInProgressVersionPrimary=null;yu.length=0}var ol=R.ReactCurrentDispatcher,Eu=R.ReactCurrentBatchConfig,ra=0,Qt=null,dn=null,vn=null,ll=!1,Ws=!1,Xs=0,R_=0;function Pn(){throw Error(t(321))}function Tu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!yi(n[o],r[o]))return!1;return!0}function wu(n,r,o,c,f,g){if(ra=g,Qt=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,ol.current=n===null||n.memoizedState===null?D_:N_,n=o(c,f),Ws){g=0;do{if(Ws=!1,Xs=0,25<=g)throw Error(t(301));g+=1,vn=dn=null,r.updateQueue=null,ol.current=U_,n=o(c,f)}while(Ws)}if(ol.current=dl,r=dn!==null&&dn.next!==null,ra=0,vn=dn=Qt=null,ll=!1,r)throw Error(t(300));return n}function Au(){var n=Xs!==0;return Xs=0,n}function Ii(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return vn===null?Qt.memoizedState=vn=n:vn=vn.next=n,vn}function fi(){if(dn===null){var n=Qt.alternate;n=n!==null?n.memoizedState:null}else n=dn.next;var r=vn===null?Qt.memoizedState:vn.next;if(r!==null)vn=r,dn=n;else{if(n===null)throw Error(t(310));dn=n,n={memoizedState:dn.memoizedState,baseState:dn.baseState,baseQueue:dn.baseQueue,queue:dn.queue,next:null},vn===null?Qt.memoizedState=vn=n:vn=vn.next=n}return vn}function $s(n,r){return typeof r=="function"?r(n):r}function Cu(n){var r=fi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=dn,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var A=f.next;f.next=g.next,g.next=A}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var O=A=null,V=null,fe=g;do{var Me=fe.lane;if((ra&Me)===Me)V!==null&&(V=V.next={lane:0,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null}),c=fe.hasEagerState?fe.eagerState:n(c,fe.action);else{var Ee={lane:Me,action:fe.action,hasEagerState:fe.hasEagerState,eagerState:fe.eagerState,next:null};V===null?(O=V=Ee,A=c):V=V.next=Ee,Qt.lanes|=Me,aa|=Me}fe=fe.next}while(fe!==null&&fe!==g);V===null?A=c:V.next=O,yi(c,r.memoizedState)||(Bn=!0),r.memoizedState=c,r.baseState=A,r.baseQueue=V,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,Qt.lanes|=g,aa|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function Ru(n){var r=fi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=r.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do g=n(g,A.action),A=A.next;while(A!==f);yi(g,r.memoizedState)||(Bn=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,c]}function wp(){}function Ap(n,r){var o=Qt,c=fi(),f=r(),g=!yi(c.memoizedState,f);if(g&&(c.memoizedState=f,Bn=!0),c=c.queue,bu(bp.bind(null,o,c,n),[n]),c.getSnapshot!==r||g||vn!==null&&vn.memoizedState.tag&1){if(o.flags|=2048,qs(9,Rp.bind(null,o,c,f,r),void 0,null),_n===null)throw Error(t(349));(ra&30)!==0||Cp(o,r,f)}return f}function Cp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Rp(n,r,o,c){r.value=o,r.getSnapshot=c,Pp(r)&&Lp(n)}function bp(n,r,o){return o(function(){Pp(r)&&Lp(n)})}function Pp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!yi(n,o)}catch{return!0}}function Lp(n){var r=er(n,1);r!==null&&Ai(r,n,1,-1)}function Dp(n){var r=Ii();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:$s,lastRenderedState:n},r.queue=n,n=n.dispatch=L_.bind(null,Qt,n),[r.memoizedState,n]}function qs(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=Qt.updateQueue,r===null?(r={lastEffect:null,stores:null},Qt.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function Np(){return fi().memoizedState}function cl(n,r,o,c){var f=Ii();Qt.flags|=n,f.memoizedState=qs(1|r,o,void 0,c===void 0?null:c)}function ul(n,r,o,c){var f=fi();c=c===void 0?null:c;var g=void 0;if(dn!==null){var A=dn.memoizedState;if(g=A.destroy,c!==null&&Tu(c,A.deps)){f.memoizedState=qs(r,o,g,c);return}}Qt.flags|=n,f.memoizedState=qs(1|r,o,g,c)}function Up(n,r){return cl(8390656,8,n,r)}function bu(n,r){return ul(2048,8,n,r)}function Fp(n,r){return ul(4,2,n,r)}function Op(n,r){return ul(4,4,n,r)}function Ip(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function kp(n,r,o){return o=o!=null?o.concat([n]):null,ul(4,4,Ip.bind(null,r,n),o)}function Pu(){}function zp(n,r){var o=fi();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Tu(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function Hp(n,r){var o=fi();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Tu(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function Vp(n,r,o){return(ra&21)===0?(n.baseState&&(n.baseState=!1,Bn=!0),n.memoizedState=o):(yi(o,r)||(o=un(),Qt.lanes|=o,aa|=o,n.baseState=!0),r)}function b_(n,r){var o=xt;xt=o!==0&&4>o?o:4,n(!0);var c=Eu.transition;Eu.transition={};try{n(!1),r()}finally{xt=o,Eu.transition=c}}function Gp(){return fi().memoizedState}function P_(n,r,o){var c=Pr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},Bp(n))Wp(r,o);else if(o=Sp(n,r,o,c),o!==null){var f=kn();Ai(o,n,c,f),Xp(o,r,c)}}function L_(n,r,o){var c=Pr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(Bp(n))Wp(r,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var A=r.lastRenderedState,O=g(A,o);if(f.hasEagerState=!0,f.eagerState=O,yi(O,A)){var V=r.interleaved;V===null?(f.next=f,vu(r)):(f.next=V.next,V.next=f),r.interleaved=f;return}}catch{}finally{}o=Sp(n,r,f,c),o!==null&&(f=kn(),Ai(o,n,c,f),Xp(o,r,c))}}function Bp(n){var r=n.alternate;return n===Qt||r!==null&&r===Qt}function Wp(n,r){Ws=ll=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function Xp(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Rn(n,o)}}var dl={readContext:di,useCallback:Pn,useContext:Pn,useEffect:Pn,useImperativeHandle:Pn,useInsertionEffect:Pn,useLayoutEffect:Pn,useMemo:Pn,useReducer:Pn,useRef:Pn,useState:Pn,useDebugValue:Pn,useDeferredValue:Pn,useTransition:Pn,useMutableSource:Pn,useSyncExternalStore:Pn,useId:Pn,unstable_isNewReconciler:!1},D_={readContext:di,useCallback:function(n,r){return Ii().memoizedState=[n,r===void 0?null:r],n},useContext:di,useEffect:Up,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,cl(4194308,4,Ip.bind(null,r,n),o)},useLayoutEffect:function(n,r){return cl(4194308,4,n,r)},useInsertionEffect:function(n,r){return cl(4,2,n,r)},useMemo:function(n,r){var o=Ii();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=Ii();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=P_.bind(null,Qt,n),[c.memoizedState,n]},useRef:function(n){var r=Ii();return n={current:n},r.memoizedState=n},useState:Dp,useDebugValue:Pu,useDeferredValue:function(n){return Ii().memoizedState=n},useTransition:function(){var n=Dp(!1),r=n[0];return n=b_.bind(null,n[1]),Ii().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=Qt,f=Ii();if(Kt){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),_n===null)throw Error(t(349));(ra&30)!==0||Cp(c,r,o)}f.memoizedState=o;var g={value:o,getSnapshot:r};return f.queue=g,Up(bp.bind(null,c,g,n),[n]),c.flags|=2048,qs(9,Rp.bind(null,c,g,o,r),void 0,null),o},useId:function(){var n=Ii(),r=_n.identifierPrefix;if(Kt){var o=Qi,c=Ji;o=(c&~(1<<32-Ue(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=Xs++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=R_++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},N_={readContext:di,useCallback:zp,useContext:di,useEffect:bu,useImperativeHandle:kp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Hp,useReducer:Cu,useRef:Np,useState:function(){return Cu($s)},useDebugValue:Pu,useDeferredValue:function(n){var r=fi();return Vp(r,dn.memoizedState,n)},useTransition:function(){var n=Cu($s)[0],r=fi().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Ap,useId:Gp,unstable_isNewReconciler:!1},U_={readContext:di,useCallback:zp,useContext:di,useEffect:bu,useImperativeHandle:kp,useInsertionEffect:Fp,useLayoutEffect:Op,useMemo:Hp,useReducer:Ru,useRef:Np,useState:function(){return Ru($s)},useDebugValue:Pu,useDeferredValue:function(n){var r=fi();return dn===null?r.memoizedState=n:Vp(r,dn.memoizedState,n)},useTransition:function(){var n=Ru($s)[0],r=fi().memoizedState;return[n,r]},useMutableSource:wp,useSyncExternalStore:Ap,useId:Gp,unstable_isNewReconciler:!1};function Ei(n,r){if(n&&n.defaultProps){r=Z({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function Lu(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:Z({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var fl={isMounted:function(n){return(n=n._reactInternals)?On(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=kn(),f=Pr(n),g=tr(c,f);g.payload=r,o!=null&&(g.callback=o),r=Ar(n,g,f),r!==null&&(Ai(r,n,f,c),rl(r,n,f))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=kn(),f=Pr(n),g=tr(c,f);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=Ar(n,g,f),r!==null&&(Ai(r,n,f,c),rl(r,n,f))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=kn(),c=Pr(n),f=tr(o,c);f.tag=2,r!=null&&(f.callback=r),r=Ar(n,f,c),r!==null&&(Ai(r,n,c,o),rl(r,n,c))}};function $p(n,r,o,c,f,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):r.prototype&&r.prototype.isPureReactComponent?!Ns(o,c)||!Ns(f,g):!0}function qp(n,r,o){var c=!1,f=Er,g=r.contextType;return typeof g=="object"&&g!==null?g=di(g):(f=Gn(r)?Qr:bn.current,c=r.contextTypes,g=(c=c!=null)?Ua(n,f):Er),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=fl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),r}function Yp(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&fl.enqueueReplaceState(r,r.state,null)}function Du(n,r,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},_u(n);var g=r.contextType;typeof g=="object"&&g!==null?f.context=di(g):(g=Gn(r)?Qr:bn.current,f.context=Ua(n,g)),f.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(Lu(n,r,g,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&fl.enqueueReplaceState(f,f.state,null),al(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function Ga(n,r){try{var o="",c=r;do o+=ze(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:f,digest:null}}function Nu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Uu(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var F_=typeof WeakMap=="function"?WeakMap:Map;function Kp(n,r,o){o=tr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){xl||(xl=!0,Ku=c),Uu(n,r)},o}function jp(n,r,o){o=tr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;o.payload=function(){return c(f)},o.callback=function(){Uu(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Uu(n,r),typeof c!="function"&&(Rr===null?Rr=new Set([this]):Rr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),o}function Zp(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new F_;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(f.add(o),n=K_.bind(null,n,r,o),r.then(n,n))}function Jp(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function Qp(n,r,o,c,f){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=tr(-1,1),r.tag=2,Ar(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var O_=R.ReactCurrentOwner,Bn=!1;function In(n,r,o,c){r.child=n===null?xp(r,null,o,c):ka(r,n.child,o,c)}function em(n,r,o,c,f){o=o.render;var g=r.ref;return Ha(r,f),c=wu(n,r,o,c,g,f),o=Au(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,nr(n,r,f)):(Kt&&o&&lu(r),r.flags|=1,In(n,r,c,f),r.child)}function tm(n,r,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!nd(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,nm(n,r,g,c,f)):(n=wl(o.type,null,c,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&f)===0){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:Ns,o(A,c)&&n.ref===r.ref)return nr(n,r,f)}return r.flags|=1,n=Dr(g,c),n.ref=r.ref,n.return=r,r.child=n}function nm(n,r,o,c,f){if(n!==null){var g=n.memoizedProps;if(Ns(g,c)&&n.ref===r.ref)if(Bn=!1,r.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(Bn=!0);else return r.lanes=n.lanes,nr(n,r,f)}return Fu(n,r,o,c,f)}function im(n,r,o){var c=r.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},Xt(Wa,ei),ei|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,Xt(Wa,ei),ei|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,Xt(Wa,ei),ei|=c}else g!==null?(c=g.baseLanes|o,r.memoizedState=null):c=o,Xt(Wa,ei),ei|=c;return In(n,r,f,o),r.child}function rm(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Fu(n,r,o,c,f){var g=Gn(o)?Qr:bn.current;return g=Ua(r,g),Ha(r,f),o=wu(n,r,o,c,g,f),c=Au(),n!==null&&!Bn?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,nr(n,r,f)):(Kt&&c&&lu(r),r.flags|=1,In(n,r,o,f),r.child)}function am(n,r,o,c,f){if(Gn(o)){var g=!0;jo(r)}else g=!1;if(Ha(r,f),r.stateNode===null)pl(n,r),qp(r,o,c),Du(r,o,c,f),c=!0;else if(n===null){var A=r.stateNode,O=r.memoizedProps;A.props=O;var V=A.context,fe=o.contextType;typeof fe=="object"&&fe!==null?fe=di(fe):(fe=Gn(o)?Qr:bn.current,fe=Ua(r,fe));var Me=o.getDerivedStateFromProps,Ee=typeof Me=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ee||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==c||V!==fe)&&Yp(r,A,c,fe),wr=!1;var ye=r.memoizedState;A.state=ye,al(r,c,A,f),V=r.memoizedState,O!==c||ye!==V||Vn.current||wr?(typeof Me=="function"&&(Lu(r,o,Me,c),V=r.memoizedState),(O=wr||$p(r,o,O,c,ye,V,fe))?(Ee||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=V),A.props=c,A.state=V,A.context=fe,c=O):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{A=r.stateNode,yp(n,r),O=r.memoizedProps,fe=r.type===r.elementType?O:Ei(r.type,O),A.props=fe,Ee=r.pendingProps,ye=A.context,V=o.contextType,typeof V=="object"&&V!==null?V=di(V):(V=Gn(o)?Qr:bn.current,V=Ua(r,V));var We=o.getDerivedStateFromProps;(Me=typeof We=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Ee||ye!==V)&&Yp(r,A,c,V),wr=!1,ye=r.memoizedState,A.state=ye,al(r,c,A,f);var Ke=r.memoizedState;O!==Ee||ye!==Ke||Vn.current||wr?(typeof We=="function"&&(Lu(r,o,We,c),Ke=r.memoizedState),(fe=wr||$p(r,o,fe,c,ye,Ke,V)||!1)?(Me||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Ke,V),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Ke,V)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Ke),A.props=c,A.state=Ke,A.context=V,c=fe):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&ye===n.memoizedState||(r.flags|=1024),c=!1)}return Ou(n,r,o,c,g,f)}function Ou(n,r,o,c,f,g){rm(n,r);var A=(r.flags&128)!==0;if(!c&&!A)return f&&up(r,o,!1),nr(n,r,g);c=r.stateNode,O_.current=r;var O=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&A?(r.child=ka(r,n.child,null,g),r.child=ka(r,null,O,g)):In(n,r,O,g),r.memoizedState=c.state,f&&up(r,o,!0),r.child}function sm(n){var r=n.stateNode;r.pendingContext?lp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&lp(n,r.context,!1),xu(n,r.containerInfo)}function om(n,r,o,c,f){return Ia(),fu(f),r.flags|=256,In(n,r,o,c),r.child}var Iu={dehydrated:null,treeContext:null,retryLane:0};function ku(n){return{baseLanes:n,cachePool:null,transitions:null}}function lm(n,r,o){var c=r.pendingProps,f=Jt.current,g=!1,A=(r.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),Xt(Jt,f&1),n===null)return du(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=r.mode,g=r.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Al(A,c,0,null),n=ca(n,c,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=ku(o),r.memoizedState=Iu,n):zu(r,A));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return I_(n,r,A,c,O,f,o);if(g){g=c.fallback,A=r.mode,f=n.child,O=f.sibling;var V={mode:"hidden",children:c.children};return(A&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=V,r.deletions=null):(c=Dr(f,V),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?g=Dr(O,g):(g=ca(g,A,o,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,A=n.child.memoizedState,A=A===null?ku(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~o,r.memoizedState=Iu,c}return g=n.child,n=g.sibling,c=Dr(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function zu(n,r){return r=Al({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function hl(n,r,o,c){return c!==null&&fu(c),ka(r,n.child,null,o),n=zu(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function I_(n,r,o,c,f,g,A){if(o)return r.flags&256?(r.flags&=-257,c=Nu(Error(t(422))),hl(n,r,A,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,f=r.mode,c=Al({mode:"visible",children:c.children},f,0,null),g=ca(g,f,A,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&ka(r,n.child,null,A),r.child.memoizedState=ku(A),r.memoizedState=Iu,g);if((r.mode&1)===0)return hl(n,r,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,g=Error(t(419)),c=Nu(g,c,void 0),hl(n,r,A,c)}if(O=(A&n.childLanes)!==0,Bn||O){if(c=_n,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,er(n,f),Ai(c,n,f,-1))}return td(),c=Nu(Error(t(421))),hl(n,r,A,c)}return f.data==="$?"?(r.flags|=128,r.child=n.child,r=j_.bind(null,n),f._reactRetry=r,null):(n=g.treeContext,Qn=yr(f.nextSibling),Jn=r,Kt=!0,Mi=null,n!==null&&(ci[ui++]=Ji,ci[ui++]=Qi,ci[ui++]=ea,Ji=n.id,Qi=n.overflow,ea=r),r=zu(r,c.children),r.flags|=4096,r)}function cm(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),gu(n.return,r,o)}function Hu(n,r,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function um(n,r,o){var c=r.pendingProps,f=c.revealOrder,g=c.tail;if(In(n,r,c.children,o),c=Jt.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&cm(n,o,r);else if(n.tag===19)cm(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(Xt(Jt,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&sl(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),Hu(r,!1,f,o,g);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&sl(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}Hu(r,!0,o,null,g);break;case"together":Hu(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function pl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function nr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),aa|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=Dr(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=Dr(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function k_(n,r,o){switch(r.tag){case 3:sm(r),Ia();break;case 5:Tp(r);break;case 1:Gn(r.type)&&jo(r);break;case 4:xu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;Xt(nl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(Xt(Jt,Jt.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?lm(n,r,o):(Xt(Jt,Jt.current&1),n=nr(n,r,o),n!==null?n.sibling:null);Xt(Jt,Jt.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return um(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),Xt(Jt,Jt.current),c)break;return null;case 22:case 23:return r.lanes=0,im(n,r,o)}return nr(n,r,o)}var dm,Vu,fm,hm;dm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},Vu=function(){},fm=function(n,r,o,c){var f=n.memoizedProps;if(f!==c){n=r.stateNode,ia(Oi.current);var g=null;switch(o){case"input":f=Be(n,f),c=Be(n,c),g=[];break;case"select":f=Z({},f,{value:void 0}),c=Z({},c,{value:void 0}),g=[];break;case"textarea":f=zt(n,f),c=zt(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=qo)}Je(o,c);var A;o=null;for(fe in f)if(!c.hasOwnProperty(fe)&&f.hasOwnProperty(fe)&&f[fe]!=null)if(fe==="style"){var O=f[fe];for(A in O)O.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else fe!=="dangerouslySetInnerHTML"&&fe!=="children"&&fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&fe!=="autoFocus"&&(s.hasOwnProperty(fe)?g||(g=[]):(g=g||[]).push(fe,null));for(fe in c){var V=c[fe];if(O=f!=null?f[fe]:void 0,c.hasOwnProperty(fe)&&V!==O&&(V!=null||O!=null))if(fe==="style")if(O){for(A in O)!O.hasOwnProperty(A)||V&&V.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in V)V.hasOwnProperty(A)&&O[A]!==V[A]&&(o||(o={}),o[A]=V[A])}else o||(g||(g=[]),g.push(fe,o)),o=V;else fe==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,O=O?O.__html:void 0,V!=null&&O!==V&&(g=g||[]).push(fe,V)):fe==="children"?typeof V!="string"&&typeof V!="number"||(g=g||[]).push(fe,""+V):fe!=="suppressContentEditableWarning"&&fe!=="suppressHydrationWarning"&&(s.hasOwnProperty(fe)?(V!=null&&fe==="onScroll"&&$t("scroll",n),g||O===V||(g=[])):(g=g||[]).push(fe,V))}o&&(g=g||[]).push("style",o);var fe=g;(r.updateQueue=fe)&&(r.flags|=4)}},hm=function(n,r,o,c){o!==c&&(r.flags|=4)};function Ys(n,r){if(!Kt)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function Ln(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function z_(n,r,o){var c=r.pendingProps;switch(cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ln(r),null;case 1:return Gn(r.type)&&Ko(),Ln(r),null;case 3:return c=r.stateNode,Va(),qt(Vn),qt(bn),Mu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(el(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Mi!==null&&(Ju(Mi),Mi=null))),Vu(n,r),Ln(r),null;case 5:Su(r);var f=ia(Bs.current);if(o=r.type,n!==null&&r.stateNode!=null)fm(n,r,o,c,f),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return Ln(r),null}if(n=ia(Oi.current),el(r)){c=r.stateNode,o=r.type;var g=r.memoizedProps;switch(c[Fi]=r,c[ks]=g,n=(r.mode&1)!==0,o){case"dialog":$t("cancel",c),$t("close",c);break;case"iframe":case"object":case"embed":$t("load",c);break;case"video":case"audio":for(f=0;f<Fs.length;f++)$t(Fs[f],c);break;case"source":$t("error",c);break;case"img":case"image":case"link":$t("error",c),$t("load",c);break;case"details":$t("toggle",c);break;case"input":pt(c,g),$t("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},$t("invalid",c);break;case"textarea":W(c,g),$t("invalid",c)}Je(o,g),f=null;for(var A in g)if(g.hasOwnProperty(A)){var O=g[A];A==="children"?typeof O=="string"?c.textContent!==O&&(g.suppressHydrationWarning!==!0&&$o(c.textContent,O,n),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&$o(c.textContent,O,n),f=["children",""+O]):s.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&$t("scroll",c)}switch(o){case"input":Ae(c),Rt(c,g,!0);break;case"textarea":Ae(c),Ft(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=qo)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=F(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[Fi]=r,n[ks]=c,dm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Ne(o,c),o){case"dialog":$t("cancel",n),$t("close",n),f=c;break;case"iframe":case"object":case"embed":$t("load",n),f=c;break;case"video":case"audio":for(f=0;f<Fs.length;f++)$t(Fs[f],n);f=c;break;case"source":$t("error",n),f=c;break;case"img":case"image":case"link":$t("error",n),$t("load",n),f=c;break;case"details":$t("toggle",n),f=c;break;case"input":pt(n,c),f=Be(n,c),$t("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=Z({},c,{value:void 0}),$t("invalid",n);break;case"textarea":W(n,c),f=zt(n,c),$t("invalid",n);break;default:f=c}Je(o,f),O=f;for(g in O)if(O.hasOwnProperty(g)){var V=O[g];g==="style"?_e(n,V):g==="dangerouslySetInnerHTML"?(V=V?V.__html:void 0,V!=null&&ue(n,V)):g==="children"?typeof V=="string"?(o!=="textarea"||V!=="")&&he(n,V):typeof V=="number"&&he(n,""+V):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?V!=null&&g==="onScroll"&&$t("scroll",n):V!=null&&z(n,g,V,A))}switch(o){case"input":Ae(n),Rt(n,c,!1);break;case"textarea":Ae(n),Ft(n);break;case"option":c.value!=null&&n.setAttribute("value",""+J(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?yt(n,!!c.multiple,g,!1):c.defaultValue!=null&&yt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=qo)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return Ln(r),null;case 6:if(n&&r.stateNode!=null)hm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=ia(Bs.current),ia(Oi.current),el(r)){if(c=r.stateNode,o=r.memoizedProps,c[Fi]=r,(g=c.nodeValue!==o)&&(n=Jn,n!==null))switch(n.tag){case 3:$o(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&$o(c.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Fi]=r,r.stateNode=c}return Ln(r),null;case 13:if(qt(Jt),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(Kt&&Qn!==null&&(r.mode&1)!==0&&(r.flags&128)===0)gp(),Ia(),r.flags|=98560,g=!1;else if(g=el(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Fi]=r}else Ia(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;Ln(r),g=!1}else Mi!==null&&(Ju(Mi),Mi=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(Jt.current&1)!==0?fn===0&&(fn=3):td())),r.updateQueue!==null&&(r.flags|=4),Ln(r),null);case 4:return Va(),Vu(n,r),n===null&&Os(r.stateNode.containerInfo),Ln(r),null;case 10:return mu(r.type._context),Ln(r),null;case 17:return Gn(r.type)&&Ko(),Ln(r),null;case 19:if(qt(Jt),g=r.memoizedState,g===null)return Ln(r),null;if(c=(r.flags&128)!==0,A=g.rendering,A===null)if(c)Ys(g,!1);else{if(fn!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=sl(n),A!==null){for(r.flags|=128,Ys(g,!1),c=A.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)g=o,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return Xt(Jt,Jt.current&1|2),r.child}n=n.sibling}g.tail!==null&&Zt()>Xa&&(r.flags|=128,c=!0,Ys(g,!1),r.lanes=4194304)}else{if(!c)if(n=sl(A),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),Ys(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!Kt)return Ln(r),null}else 2*Zt()-g.renderingStartTime>Xa&&o!==1073741824&&(r.flags|=128,c=!0,Ys(g,!1),r.lanes=4194304);g.isBackwards?(A.sibling=r.child,r.child=A):(o=g.last,o!==null?o.sibling=A:r.child=A,g.last=A)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=Zt(),r.sibling=null,o=Jt.current,Xt(Jt,c?o&1|2:o&1),r):(Ln(r),null);case 22:case 23:return ed(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(ei&1073741824)!==0&&(Ln(r),r.subtreeFlags&6&&(r.flags|=8192)):Ln(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function H_(n,r){switch(cu(r),r.tag){case 1:return Gn(r.type)&&Ko(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return Va(),qt(Vn),qt(bn),Mu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return Su(r),null;case 13:if(qt(Jt),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));Ia()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return qt(Jt),null;case 4:return Va(),null;case 10:return mu(r.type._context),null;case 22:case 23:return ed(),null;case 24:return null;default:return null}}var ml=!1,Dn=!1,V_=typeof WeakSet=="function"?WeakSet:Set,qe=null;function Ba(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){an(n,r,c)}else o.current=null}function Gu(n,r,o){try{o()}catch(c){an(n,r,c)}}var pm=!1;function G_(n,r){if(eu=Fo,n=$h(),$c(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,O=-1,V=-1,fe=0,Me=0,Ee=n,ye=null;t:for(;;){for(var We;Ee!==o||f!==0&&Ee.nodeType!==3||(O=A+f),Ee!==g||c!==0&&Ee.nodeType!==3||(V=A+c),Ee.nodeType===3&&(A+=Ee.nodeValue.length),(We=Ee.firstChild)!==null;)ye=Ee,Ee=We;for(;;){if(Ee===n)break t;if(ye===o&&++fe===f&&(O=A),ye===g&&++Me===c&&(V=A),(We=Ee.nextSibling)!==null)break;Ee=ye,ye=Ee.parentNode}Ee=We}o=O===-1||V===-1?null:{start:O,end:V}}else o=null}o=o||{start:0,end:0}}else o=null;for(tu={focusedElem:n,selectionRange:o},Fo=!1,qe=r;qe!==null;)if(r=qe,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,qe=n;else for(;qe!==null;){r=qe;try{var Ke=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Ke!==null){var Ze=Ke.memoizedProps,on=Ke.memoizedState,se=r.stateNode,Y=se.getSnapshotBeforeUpdate(r.elementType===r.type?Ze:Ei(r.type,Ze),on);se.__reactInternalSnapshotBeforeUpdate=Y}break;case 3:var ce=r.stateNode.containerInfo;ce.nodeType===1?ce.textContent="":ce.nodeType===9&&ce.documentElement&&ce.removeChild(ce.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(we){an(r,r.return,we)}if(n=r.sibling,n!==null){n.return=r.return,qe=n;break}qe=r.return}return Ke=pm,pm=!1,Ke}function Ks(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&Gu(r,o,g)}f=f.next}while(f!==c)}}function gl(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function Bu(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function mm(n){var r=n.alternate;r!==null&&(n.alternate=null,mm(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Fi],delete r[ks],delete r[au],delete r[T_],delete r[w_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function gm(n){return n.tag===5||n.tag===3||n.tag===4}function vm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||gm(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function Wu(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=qo));else if(c!==4&&(n=n.child,n!==null))for(Wu(n,r,o),n=n.sibling;n!==null;)Wu(n,r,o),n=n.sibling}function Xu(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(Xu(n,r,o),n=n.sibling;n!==null;)Xu(n,r,o),n=n.sibling}var En=null,Ti=!1;function Cr(n,r,o){for(o=o.child;o!==null;)_m(n,r,o),o=o.sibling}function _m(n,r,o){if(ne&&typeof ne.onCommitFiberUnmount=="function")try{ne.onCommitFiberUnmount(ae,o)}catch{}switch(o.tag){case 5:Dn||Ba(o,r);case 6:var c=En,f=Ti;En=null,Cr(n,r,o),En=c,Ti=f,En!==null&&(Ti?(n=En,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):En.removeChild(o.stateNode));break;case 18:En!==null&&(Ti?(n=En,o=o.stateNode,n.nodeType===8?ru(n.parentNode,o):n.nodeType===1&&ru(n,o),Cs(n)):ru(En,o.stateNode));break;case 4:c=En,f=Ti,En=o.stateNode.containerInfo,Ti=!0,Cr(n,r,o),En=c,Ti=f;break;case 0:case 11:case 14:case 15:if(!Dn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&Gu(o,r,A),f=f.next}while(f!==c)}Cr(n,r,o);break;case 1:if(!Dn&&(Ba(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){an(o,r,O)}Cr(n,r,o);break;case 21:Cr(n,r,o);break;case 22:o.mode&1?(Dn=(c=Dn)||o.memoizedState!==null,Cr(n,r,o),Dn=c):Cr(n,r,o);break;default:Cr(n,r,o)}}function xm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new V_),r.forEach(function(c){var f=Z_.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function wi(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,A=r,O=A;e:for(;O!==null;){switch(O.tag){case 5:En=O.stateNode,Ti=!1;break e;case 3:En=O.stateNode.containerInfo,Ti=!0;break e;case 4:En=O.stateNode.containerInfo,Ti=!0;break e}O=O.return}if(En===null)throw Error(t(160));_m(g,A,f),En=null,Ti=!1;var V=f.alternate;V!==null&&(V.return=null),f.return=null}catch(fe){an(f,r,fe)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Sm(r,n),r=r.sibling}function Sm(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(wi(r,n),ki(n),c&4){try{Ks(3,n,n.return),gl(3,n)}catch(Ze){an(n,n.return,Ze)}try{Ks(5,n,n.return)}catch(Ze){an(n,n.return,Ze)}}break;case 1:wi(r,n),ki(n),c&512&&o!==null&&Ba(o,o.return);break;case 5:if(wi(r,n),ki(n),c&512&&o!==null&&Ba(o,o.return),n.flags&32){var f=n.stateNode;try{he(f,"")}catch(Ze){an(n,n.return,Ze)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,A=o!==null?o.memoizedProps:g,O=n.type,V=n.updateQueue;if(n.updateQueue=null,V!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&_t(f,g),Ne(O,A);var fe=Ne(O,g);for(A=0;A<V.length;A+=2){var Me=V[A],Ee=V[A+1];Me==="style"?_e(f,Ee):Me==="dangerouslySetInnerHTML"?ue(f,Ee):Me==="children"?he(f,Ee):z(f,Me,Ee,fe)}switch(O){case"input":ot(f,g);break;case"textarea":nn(f,g);break;case"select":var ye=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var We=g.value;We!=null?yt(f,!!g.multiple,We,!1):ye!==!!g.multiple&&(g.defaultValue!=null?yt(f,!!g.multiple,g.defaultValue,!0):yt(f,!!g.multiple,g.multiple?[]:"",!1))}f[ks]=g}catch(Ze){an(n,n.return,Ze)}}break;case 6:if(wi(r,n),ki(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(Ze){an(n,n.return,Ze)}}break;case 3:if(wi(r,n),ki(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Cs(r.containerInfo)}catch(Ze){an(n,n.return,Ze)}break;case 4:wi(r,n),ki(n);break;case 13:wi(r,n),ki(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(Yu=Zt())),c&4&&xm(n);break;case 22:if(Me=o!==null&&o.memoizedState!==null,n.mode&1?(Dn=(fe=Dn)||Me,wi(r,n),Dn=fe):wi(r,n),ki(n),c&8192){if(fe=n.memoizedState!==null,(n.stateNode.isHidden=fe)&&!Me&&(n.mode&1)!==0)for(qe=n,Me=n.child;Me!==null;){for(Ee=qe=Me;qe!==null;){switch(ye=qe,We=ye.child,ye.tag){case 0:case 11:case 14:case 15:Ks(4,ye,ye.return);break;case 1:Ba(ye,ye.return);var Ke=ye.stateNode;if(typeof Ke.componentWillUnmount=="function"){c=ye,o=ye.return;try{r=c,Ke.props=r.memoizedProps,Ke.state=r.memoizedState,Ke.componentWillUnmount()}catch(Ze){an(c,o,Ze)}}break;case 5:Ba(ye,ye.return);break;case 22:if(ye.memoizedState!==null){Em(Ee);continue}}We!==null?(We.return=ye,qe=We):Em(Ee)}Me=Me.sibling}e:for(Me=null,Ee=n;;){if(Ee.tag===5){if(Me===null){Me=Ee;try{f=Ee.stateNode,fe?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Ee.stateNode,V=Ee.memoizedProps.style,A=V!=null&&V.hasOwnProperty("display")?V.display:null,O.style.display=pe("display",A))}catch(Ze){an(n,n.return,Ze)}}}else if(Ee.tag===6){if(Me===null)try{Ee.stateNode.nodeValue=fe?"":Ee.memoizedProps}catch(Ze){an(n,n.return,Ze)}}else if((Ee.tag!==22&&Ee.tag!==23||Ee.memoizedState===null||Ee===n)&&Ee.child!==null){Ee.child.return=Ee,Ee=Ee.child;continue}if(Ee===n)break e;for(;Ee.sibling===null;){if(Ee.return===null||Ee.return===n)break e;Me===Ee&&(Me=null),Ee=Ee.return}Me===Ee&&(Me=null),Ee.sibling.return=Ee.return,Ee=Ee.sibling}}break;case 19:wi(r,n),ki(n),c&4&&xm(n);break;case 21:break;default:wi(r,n),ki(n)}}function ki(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(gm(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(he(f,""),c.flags&=-33);var g=vm(n);Xu(n,g,f);break;case 3:case 4:var A=c.stateNode.containerInfo,O=vm(n);Wu(n,O,A);break;default:throw Error(t(161))}}catch(V){an(n,n.return,V)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function B_(n,r,o){qe=n,ym(n)}function ym(n,r,o){for(var c=(n.mode&1)!==0;qe!==null;){var f=qe,g=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||ml;if(!A){var O=f.alternate,V=O!==null&&O.memoizedState!==null||Dn;O=ml;var fe=Dn;if(ml=A,(Dn=V)&&!fe)for(qe=f;qe!==null;)A=qe,V=A.child,A.tag===22&&A.memoizedState!==null?Tm(f):V!==null?(V.return=A,qe=V):Tm(f);for(;g!==null;)qe=g,ym(g),g=g.sibling;qe=f,ml=O,Dn=fe}Mm(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,qe=g):Mm(n)}}function Mm(n){for(;qe!==null;){var r=qe;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Dn||gl(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Dn)if(o===null)c.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:Ei(r.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Ep(r,g,c);break;case 3:var A=r.updateQueue;if(A!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Ep(r,A,o)}break;case 5:var O=r.stateNode;if(o===null&&r.flags&4){o=O;var V=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":V.autoFocus&&o.focus();break;case"img":V.src&&(o.src=V.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var fe=r.alternate;if(fe!==null){var Me=fe.memoizedState;if(Me!==null){var Ee=Me.dehydrated;Ee!==null&&Cs(Ee)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Dn||r.flags&512&&Bu(r)}catch(ye){an(r,r.return,ye)}}if(r===n){qe=null;break}if(o=r.sibling,o!==null){o.return=r.return,qe=o;break}qe=r.return}}function Em(n){for(;qe!==null;){var r=qe;if(r===n){qe=null;break}var o=r.sibling;if(o!==null){o.return=r.return,qe=o;break}qe=r.return}}function Tm(n){for(;qe!==null;){var r=qe;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{gl(4,r)}catch(V){an(r,o,V)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(V){an(r,f,V)}}var g=r.return;try{Bu(r)}catch(V){an(r,g,V)}break;case 5:var A=r.return;try{Bu(r)}catch(V){an(r,A,V)}}}catch(V){an(r,r.return,V)}if(r===n){qe=null;break}var O=r.sibling;if(O!==null){O.return=r.return,qe=O;break}qe=r.return}}var W_=Math.ceil,vl=R.ReactCurrentDispatcher,$u=R.ReactCurrentOwner,hi=R.ReactCurrentBatchConfig,Nt=0,_n=null,ln=null,Tn=0,ei=0,Wa=Mr(0),fn=0,js=null,aa=0,_l=0,qu=0,Zs=null,Wn=null,Yu=0,Xa=1/0,ir=null,xl=!1,Ku=null,Rr=null,Sl=!1,br=null,yl=0,Js=0,ju=null,Ml=-1,El=0;function kn(){return(Nt&6)!==0?Zt():Ml!==-1?Ml:Ml=Zt()}function Pr(n){return(n.mode&1)===0?1:(Nt&2)!==0&&Tn!==0?Tn&-Tn:C_.transition!==null?(El===0&&(El=un()),El):(n=xt,n!==0||(n=window.event,n=n===void 0?16:Ah(n.type)),n)}function Ai(n,r,o,c){if(50<Js)throw Js=0,ju=null,Error(t(185));sn(n,o,c),((Nt&2)===0||n!==_n)&&(n===_n&&((Nt&2)===0&&(_l|=o),fn===4&&Lr(n,Tn)),Xn(n,c),o===1&&Nt===0&&(r.mode&1)===0&&(Xa=Zt()+500,Zo&&Tr()))}function Xn(n,r){var o=n.callbackNode;Wt(n,r);var c=wt(n,n===_n?Tn:0);if(c===0)o!==null&&Ss(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&Ss(o),r===1)n.tag===0?A_(Am.bind(null,n)):dp(Am.bind(null,n)),M_(function(){(Nt&6)===0&&Tr()}),o=null;else{switch(vi(c)){case 1:o=ys;break;case 4:o=Ms;break;case 16:o=C;break;case 536870912:o=de;break;default:o=C}o=Um(o,wm.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function wm(n,r){if(Ml=-1,El=0,(Nt&6)!==0)throw Error(t(327));var o=n.callbackNode;if($a()&&n.callbackNode!==o)return null;var c=wt(n,n===_n?Tn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=Tl(n,c);else{r=c;var f=Nt;Nt|=2;var g=Rm();(_n!==n||Tn!==r)&&(ir=null,Xa=Zt()+500,oa(n,r));do try{q_();break}catch(O){Cm(n,O)}while(!0);pu(),vl.current=g,Nt=f,ln!==null?r=0:(_n=null,Tn=0,r=fn)}if(r!==0){if(r===2&&(f=Ht(n),f!==0&&(c=f,r=Zu(n,f))),r===1)throw o=js,oa(n,0),Lr(n,c),Xn(n,Zt()),o;if(r===6)Lr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!X_(f)&&(r=Tl(n,c),r===2&&(g=Ht(n),g!==0&&(c=g,r=Zu(n,g))),r===1))throw o=js,oa(n,0),Lr(n,c),Xn(n,Zt()),o;switch(n.finishedWork=f,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:la(n,Wn,ir);break;case 3:if(Lr(n,c),(c&130023424)===c&&(r=Yu+500-Zt(),10<r)){if(wt(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){kn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=iu(la.bind(null,n,Wn,ir),r);break}la(n,Wn,ir);break;case 4:if(Lr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,f=-1;0<c;){var A=31-Ue(c);g=1<<A,A=r[A],A>f&&(f=A),c&=~g}if(c=f,c=Zt()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*W_(c/1960))-c,10<c){n.timeoutHandle=iu(la.bind(null,n,Wn,ir),c);break}la(n,Wn,ir);break;case 5:la(n,Wn,ir);break;default:throw Error(t(329))}}}return Xn(n,Zt()),n.callbackNode===o?wm.bind(null,n):null}function Zu(n,r){var o=Zs;return n.current.memoizedState.isDehydrated&&(oa(n,r).flags|=256),n=Tl(n,r),n!==2&&(r=Wn,Wn=o,r!==null&&Ju(r)),n}function Ju(n){Wn===null?Wn=n:Wn.push.apply(Wn,n)}function X_(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!yi(g(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Lr(n,r){for(r&=~qu,r&=~_l,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Ue(r),c=1<<o;n[o]=-1,r&=~c}}function Am(n){if((Nt&6)!==0)throw Error(t(327));$a();var r=wt(n,0);if((r&1)===0)return Xn(n,Zt()),null;var o=Tl(n,r);if(n.tag!==0&&o===2){var c=Ht(n);c!==0&&(r=c,o=Zu(n,c))}if(o===1)throw o=js,oa(n,0),Lr(n,r),Xn(n,Zt()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,la(n,Wn,ir),Xn(n,Zt()),null}function Qu(n,r){var o=Nt;Nt|=1;try{return n(r)}finally{Nt=o,Nt===0&&(Xa=Zt()+500,Zo&&Tr())}}function sa(n){br!==null&&br.tag===0&&(Nt&6)===0&&$a();var r=Nt;Nt|=1;var o=hi.transition,c=xt;try{if(hi.transition=null,xt=1,n)return n()}finally{xt=c,hi.transition=o,Nt=r,(Nt&6)===0&&Tr()}}function ed(){ei=Wa.current,qt(Wa)}function oa(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,y_(o)),ln!==null)for(o=ln.return;o!==null;){var c=o;switch(cu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&Ko();break;case 3:Va(),qt(Vn),qt(bn),Mu();break;case 5:Su(c);break;case 4:Va();break;case 13:qt(Jt);break;case 19:qt(Jt);break;case 10:mu(c.type._context);break;case 22:case 23:ed()}o=o.return}if(_n=n,ln=n=Dr(n.current,null),Tn=ei=r,fn=0,js=null,qu=_l=aa=0,Wn=Zs=null,na!==null){for(r=0;r<na.length;r++)if(o=na[r],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var A=g.next;g.next=f,c.next=A}o.pending=c}na=null}return n}function Cm(n,r){do{var o=ln;try{if(pu(),ol.current=dl,ll){for(var c=Qt.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}ll=!1}if(ra=0,vn=dn=Qt=null,Ws=!1,Xs=0,$u.current=null,o===null||o.return===null){fn=1,js=r,ln=null;break}e:{var g=n,A=o.return,O=o,V=r;if(r=Tn,O.flags|=32768,V!==null&&typeof V=="object"&&typeof V.then=="function"){var fe=V,Me=O,Ee=Me.tag;if((Me.mode&1)===0&&(Ee===0||Ee===11||Ee===15)){var ye=Me.alternate;ye?(Me.updateQueue=ye.updateQueue,Me.memoizedState=ye.memoizedState,Me.lanes=ye.lanes):(Me.updateQueue=null,Me.memoizedState=null)}var We=Jp(A);if(We!==null){We.flags&=-257,Qp(We,A,O,g,r),We.mode&1&&Zp(g,fe,r),r=We,V=fe;var Ke=r.updateQueue;if(Ke===null){var Ze=new Set;Ze.add(V),r.updateQueue=Ze}else Ke.add(V);break e}else{if((r&1)===0){Zp(g,fe,r),td();break e}V=Error(t(426))}}else if(Kt&&O.mode&1){var on=Jp(A);if(on!==null){(on.flags&65536)===0&&(on.flags|=256),Qp(on,A,O,g,r),fu(Ga(V,O));break e}}g=V=Ga(V,O),fn!==4&&(fn=2),Zs===null?Zs=[g]:Zs.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var se=Kp(g,V,r);Mp(g,se);break e;case 1:O=V;var Y=g.type,ce=g.stateNode;if((g.flags&128)===0&&(typeof Y.getDerivedStateFromError=="function"||ce!==null&&typeof ce.componentDidCatch=="function"&&(Rr===null||!Rr.has(ce)))){g.flags|=65536,r&=-r,g.lanes|=r;var we=jp(g,O,r);Mp(g,we);break e}}g=g.return}while(g!==null)}Pm(o)}catch(nt){r=nt,ln===o&&o!==null&&(ln=o=o.return);continue}break}while(!0)}function Rm(){var n=vl.current;return vl.current=dl,n===null?dl:n}function td(){(fn===0||fn===3||fn===2)&&(fn=4),_n===null||(aa&268435455)===0&&(_l&268435455)===0||Lr(_n,Tn)}function Tl(n,r){var o=Nt;Nt|=2;var c=Rm();(_n!==n||Tn!==r)&&(ir=null,oa(n,r));do try{$_();break}catch(f){Cm(n,f)}while(!0);if(pu(),Nt=o,vl.current=c,ln!==null)throw Error(t(261));return _n=null,Tn=0,fn}function $_(){for(;ln!==null;)bm(ln)}function q_(){for(;ln!==null&&!No();)bm(ln)}function bm(n){var r=Nm(n.alternate,n,ei);n.memoizedProps=n.pendingProps,r===null?Pm(n):ln=r,$u.current=null}function Pm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=z_(o,r,ei),o!==null){ln=o;return}}else{if(o=H_(o,r),o!==null){o.flags&=32767,ln=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{fn=6,ln=null;return}}if(r=r.sibling,r!==null){ln=r;return}ln=r=n}while(r!==null);fn===0&&(fn=5)}function la(n,r,o){var c=xt,f=hi.transition;try{hi.transition=null,xt=1,Y_(n,r,o,c)}finally{hi.transition=f,xt=c}return null}function Y_(n,r,o,c){do $a();while(br!==null);if((Nt&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(At(n,g),n===_n&&(ln=_n=null,Tn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Sl||(Sl=!0,Um(C,function(){return $a(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=hi.transition,hi.transition=null;var A=xt;xt=1;var O=Nt;Nt|=4,$u.current=null,G_(n,o),Sm(o,n),p_(tu),Fo=!!eu,tu=eu=null,n.current=o,B_(o),Nc(),Nt=O,xt=A,hi.transition=g}else n.current=o;if(Sl&&(Sl=!1,br=n,yl=f),g=n.pendingLanes,g===0&&(Rr=null),Oe(o.stateNode),Xn(n,Zt()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)f=r[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(xl)throw xl=!1,n=Ku,Ku=null,n;return(yl&1)!==0&&n.tag!==0&&$a(),g=n.pendingLanes,(g&1)!==0?n===ju?Js++:(Js=0,ju=n):Js=0,Tr(),null}function $a(){if(br!==null){var n=vi(yl),r=hi.transition,o=xt;try{if(hi.transition=null,xt=16>n?16:n,br===null)var c=!1;else{if(n=br,br=null,yl=0,(Nt&6)!==0)throw Error(t(331));var f=Nt;for(Nt|=4,qe=n.current;qe!==null;){var g=qe,A=g.child;if((qe.flags&16)!==0){var O=g.deletions;if(O!==null){for(var V=0;V<O.length;V++){var fe=O[V];for(qe=fe;qe!==null;){var Me=qe;switch(Me.tag){case 0:case 11:case 15:Ks(8,Me,g)}var Ee=Me.child;if(Ee!==null)Ee.return=Me,qe=Ee;else for(;qe!==null;){Me=qe;var ye=Me.sibling,We=Me.return;if(mm(Me),Me===fe){qe=null;break}if(ye!==null){ye.return=We,qe=ye;break}qe=We}}}var Ke=g.alternate;if(Ke!==null){var Ze=Ke.child;if(Ze!==null){Ke.child=null;do{var on=Ze.sibling;Ze.sibling=null,Ze=on}while(Ze!==null)}}qe=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,qe=A;else e:for(;qe!==null;){if(g=qe,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:Ks(9,g,g.return)}var se=g.sibling;if(se!==null){se.return=g.return,qe=se;break e}qe=g.return}}var Y=n.current;for(qe=Y;qe!==null;){A=qe;var ce=A.child;if((A.subtreeFlags&2064)!==0&&ce!==null)ce.return=A,qe=ce;else e:for(A=Y;qe!==null;){if(O=qe,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:gl(9,O)}}catch(nt){an(O,O.return,nt)}if(O===A){qe=null;break e}var we=O.sibling;if(we!==null){we.return=O.return,qe=we;break e}qe=O.return}}if(Nt=f,Tr(),ne&&typeof ne.onPostCommitFiberRoot=="function")try{ne.onPostCommitFiberRoot(ae,n)}catch{}c=!0}return c}finally{xt=o,hi.transition=r}}return!1}function Lm(n,r,o){r=Ga(o,r),r=Kp(n,r,1),n=Ar(n,r,1),r=kn(),n!==null&&(sn(n,1,r),Xn(n,r))}function an(n,r,o){if(n.tag===3)Lm(n,n,o);else for(;r!==null;){if(r.tag===3){Lm(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Rr===null||!Rr.has(c))){n=Ga(o,n),n=jp(r,n,1),r=Ar(r,n,1),n=kn(),r!==null&&(sn(r,1,n),Xn(r,n));break}}r=r.return}}function K_(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=kn(),n.pingedLanes|=n.suspendedLanes&o,_n===n&&(Tn&o)===o&&(fn===4||fn===3&&(Tn&130023424)===Tn&&500>Zt()-Yu?oa(n,0):qu|=o),Xn(n,r)}function Dm(n,r){r===0&&((n.mode&1)===0?r=1:(r=vt,vt<<=1,(vt&130023424)===0&&(vt=4194304)));var o=kn();n=er(n,r),n!==null&&(sn(n,r,o),Xn(n,o))}function j_(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),Dm(n,o)}function Z_(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),Dm(n,o)}var Nm;Nm=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||Vn.current)Bn=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return Bn=!1,k_(n,r,o);Bn=(n.flags&131072)!==0}else Bn=!1,Kt&&(r.flags&1048576)!==0&&fp(r,Qo,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;pl(n,r),n=r.pendingProps;var f=Ua(r,bn.current);Ha(r,o),f=wu(null,r,c,n,f,o);var g=Au();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,Gn(c)?(g=!0,jo(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,_u(r),f.updater=fl,r.stateNode=f,f._reactInternals=r,Du(r,c,n,o),r=Ou(null,r,c,!0,g,o)):(r.tag=0,Kt&&g&&lu(r),In(null,r,f,o),r=r.child),r;case 16:c=r.elementType;e:{switch(pl(n,r),n=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Q_(c),n=Ei(c,n),f){case 0:r=Fu(null,r,c,n,o);break e;case 1:r=am(null,r,c,n,o);break e;case 11:r=em(null,r,c,n,o);break e;case 14:r=tm(null,r,c,Ei(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),Fu(n,r,c,f,o);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),am(n,r,c,f,o);case 3:e:{if(sm(r),n===null)throw Error(t(387));c=r.pendingProps,g=r.memoizedState,f=g.element,yp(n,r),al(r,c,null,o);var A=r.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=Ga(Error(t(423)),r),r=om(n,r,c,o,f);break e}else if(c!==f){f=Ga(Error(t(424)),r),r=om(n,r,c,o,f);break e}else for(Qn=yr(r.stateNode.containerInfo.firstChild),Jn=r,Kt=!0,Mi=null,o=xp(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(Ia(),c===f){r=nr(n,r,o);break e}In(n,r,c,o)}r=r.child}return r;case 5:return Tp(r),n===null&&du(r),c=r.type,f=r.pendingProps,g=n!==null?n.memoizedProps:null,A=f.children,nu(c,f)?A=null:g!==null&&nu(c,g)&&(r.flags|=32),rm(n,r),In(n,r,A,o),r.child;case 6:return n===null&&du(r),null;case 13:return lm(n,r,o);case 4:return xu(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=ka(r,null,c,o):In(n,r,c,o),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),em(n,r,c,f,o);case 7:return In(n,r,r.pendingProps,o),r.child;case 8:return In(n,r,r.pendingProps.children,o),r.child;case 12:return In(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,g=r.memoizedProps,A=f.value,Xt(nl,c._currentValue),c._currentValue=A,g!==null)if(yi(g.value,A)){if(g.children===f.children&&!Vn.current){r=nr(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var O=g.dependencies;if(O!==null){A=g.child;for(var V=O.firstContext;V!==null;){if(V.context===c){if(g.tag===1){V=tr(-1,o&-o),V.tag=2;var fe=g.updateQueue;if(fe!==null){fe=fe.shared;var Me=fe.pending;Me===null?V.next=V:(V.next=Me.next,Me.next=V),fe.pending=V}}g.lanes|=o,V=g.alternate,V!==null&&(V.lanes|=o),gu(g.return,o,r),O.lanes|=o;break}V=V.next}}else if(g.tag===10)A=g.type===r.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=o,O=A.alternate,O!==null&&(O.lanes|=o),gu(A,o,r),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===r){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}In(n,r,f.children,o),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,Ha(r,o),f=di(f),c=c(f),r.flags|=1,In(n,r,c,o),r.child;case 14:return c=r.type,f=Ei(c,r.pendingProps),f=Ei(c.type,f),tm(n,r,c,f,o);case 15:return nm(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Ei(c,f),pl(n,r),r.tag=1,Gn(c)?(n=!0,jo(r)):n=!1,Ha(r,o),qp(r,c,f),Du(r,c,f,o),Ou(null,r,c,!0,n,o);case 19:return um(n,r,o);case 22:return im(n,r,o)}throw Error(t(156,r.tag))};function Um(n,r){return Zr(n,r)}function J_(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function pi(n,r,o,c){return new J_(n,r,o,c)}function nd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Q_(n){if(typeof n=="function")return nd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===j)return 11;if(n===te)return 14}return 2}function Dr(n,r){var o=n.alternate;return o===null?(o=pi(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function wl(n,r,o,c,f,g){var A=2;if(c=n,typeof n=="function")nd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return ca(o.children,f,g,r);case T:A=8,f|=8;break;case U:return n=pi(12,o,r,f|2),n.elementType=U,n.lanes=g,n;case ie:return n=pi(13,o,r,f),n.elementType=ie,n.lanes=g,n;case G:return n=pi(19,o,r,f),n.elementType=G,n.lanes=g,n;case le:return Al(o,f,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case H:A=10;break e;case B:A=9;break e;case j:A=11;break e;case te:A=14;break e;case Q:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=pi(A,o,r,f),r.elementType=n,r.type=c,r.lanes=g,r}function ca(n,r,o,c){return n=pi(7,n,c,r),n.lanes=o,n}function Al(n,r,o,c){return n=pi(22,n,c,r),n.elementType=le,n.lanes=o,n.stateNode={isHidden:!1},n}function id(n,r,o){return n=pi(6,n,null,r),n.lanes=o,n}function rd(n,r,o){return r=pi(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function ex(n,r,o,c,f){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=He(0),this.expirationTimes=He(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=He(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function ad(n,r,o,c,f,g,A,O,V){return n=new ex(n,r,o,O,V),r===1?(r=1,g===!0&&(r|=8)):r=0,g=pi(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},_u(g),n}function tx(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function Fm(n){if(!n)return Er;n=n._reactInternals;e:{if(On(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(Gn(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(Gn(o))return cp(n,o,r)}return r}function Om(n,r,o,c,f,g,A,O,V){return n=ad(o,c,!0,n,f,g,A,O,V),n.context=Fm(null),o=n.current,c=kn(),f=Pr(o),g=tr(c,f),g.callback=r??null,Ar(o,g,f),n.current.lanes=f,sn(n,f,c),Xn(n,c),n}function Cl(n,r,o,c){var f=r.current,g=kn(),A=Pr(f);return o=Fm(o),r.context===null?r.context=o:r.pendingContext=o,r=tr(g,A),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=Ar(f,r,A),n!==null&&(Ai(n,f,A,g),rl(n,f,A)),A}function Rl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function Im(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function sd(n,r){Im(n,r),(n=n.alternate)&&Im(n,r)}function nx(){return null}var km=typeof reportError=="function"?reportError:function(n){console.error(n)};function od(n){this._internalRoot=n}bl.prototype.render=od.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Cl(n,r,null,null)},bl.prototype.unmount=od.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;sa(function(){Cl(null,n,null,null)}),r[ji]=null}};function bl(n){this._internalRoot=n}bl.prototype.unstable_scheduleHydration=function(n){if(n){var r=_i();n={blockedOn:null,target:n,priority:r};for(var o=0;o<_r.length&&r!==0&&r<_r[o].priority;o++);_r.splice(o,0,n),o===0&&Th(n)}};function ld(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Pl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function zm(){}function ix(n,r,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var fe=Rl(A);g.call(fe)}}var A=Om(r,c,n,0,null,!1,!1,"",zm);return n._reactRootContainer=A,n[ji]=A.current,Os(n.nodeType===8?n.parentNode:n),sa(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var fe=Rl(V);O.call(fe)}}var V=ad(n,0,!1,null,null,!1,!1,"",zm);return n._reactRootContainer=V,n[ji]=V.current,Os(n.nodeType===8?n.parentNode:n),sa(function(){Cl(r,V,o,c)}),V}function Ll(n,r,o,c,f){var g=o._reactRootContainer;if(g){var A=g;if(typeof f=="function"){var O=f;f=function(){var V=Rl(A);O.call(V)}}Cl(r,A,n,f)}else A=ix(o,r,n,f,c);return Rl(A)}Ki=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=Xe(r.pendingLanes);o!==0&&(Rn(r,o|1),Xn(r,Zt()),(Nt&6)===0&&(Xa=Zt()+500,Tr()))}break;case 13:sa(function(){var c=er(n,1);if(c!==null){var f=kn();Ai(c,n,1,f)}}),sd(n,1)}},It=function(n){if(n.tag===13){var r=er(n,134217728);if(r!==null){var o=kn();Ai(r,n,134217728,o)}sd(n,134217728)}},Yt=function(n){if(n.tag===13){var r=Pr(n),o=er(n,r);if(o!==null){var c=kn();Ai(o,n,r,c)}sd(n,r)}},_i=function(){return xt},Vt=function(n,r){var o=xt;try{return xt=n,r()}finally{xt=o}},it=function(n,r,o){switch(r){case"input":if(ot(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var f=Yo(c);if(!f)throw Error(t(90));st(c),ot(c,f)}}}break;case"textarea":nn(n,o);break;case"select":r=o.value,r!=null&&yt(n,!!o.multiple,r,!1)}},ke=Qu,xe=sa;var rx={usingClientEntryPoint:!1,Events:[zs,Da,Yo,ve,Pe,Qu]},Qs={findFiberByHostInstance:Jr,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ax={bundleType:Qs.bundleType,version:Qs.version,rendererPackageName:Qs.rendererPackageName,rendererConfig:Qs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=jr(n),n===null?null:n.stateNode},findFiberByHostInstance:Qs.findFiberByHostInstance||nx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Dl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Dl.isDisabled&&Dl.supportsFiber)try{ae=Dl.inject(ax),ne=Dl}catch{}}return $n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=rx,$n.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!ld(r))throw Error(t(200));return tx(n,r,null,o)},$n.createRoot=function(n,r){if(!ld(n))throw Error(t(299));var o=!1,c="",f=km;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=ad(n,1,!1,null,null,o,!1,c,f),n[ji]=r.current,Os(n.nodeType===8?n.parentNode:n),new od(r)},$n.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=jr(r),n=n===null?null:n.stateNode,n},$n.flushSync=function(n){return sa(n)},$n.hydrate=function(n,r,o){if(!Pl(r))throw Error(t(200));return Ll(null,n,r,!0,o)},$n.hydrateRoot=function(n,r,o){if(!ld(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",A=km;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),r=Om(r,null,n,1,o??null,f,!1,g,A),n[ji]=r.current,Os(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new bl(r)},$n.render=function(n,r,o){if(!Pl(r))throw Error(t(200));return Ll(null,n,r,!1,o)},$n.unmountComponentAtNode=function(n){if(!Pl(n))throw Error(t(40));return n._reactRootContainer?(sa(function(){Ll(null,null,n,!1,function(){n._reactRootContainer=null,n[ji]=null})}),!0):!1},$n.unstable_batchedUpdates=Qu,$n.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!Pl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return Ll(n,r,o,!1,c)},$n.version="18.3.1-next-f1338f8080-20240426",$n}var qm;function gx(){if(qm)return dd.exports;qm=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),dd.exports=mx(),dd.exports}var Ym;function vx(){if(Ym)return Nl;Ym=1;var i=gx();return Nl.createRoot=i.createRoot,Nl.hydrateRoot=i.hydrateRoot,Nl}var _x=vx();const Ul={END:"end",LEFT:"left",RIGHT:"right",START:"start"},Gr={NONE:"none",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning",DANGER:"danger"};let Dt="bp6";typeof BLUEPRINT_NAMESPACE<"u"?Dt=BLUEPRINT_NAMESPACE:typeof REACT_APP_BLUEPRINT_NAMESPACE<"u"&&(Dt=REACT_APP_BLUEPRINT_NAMESPACE);const Wf=`${Dt}-active`,xx=`${Dt}-align-left`,Sx=`${Dt}-align-right`,yx=`${Dt}-dark`,Ec=`${Dt}-disabled`,go=`${Dt}-fill`,Mx=`${Dt}-inline`,Ex=`${Dt}-interactive`,hs=`${Dt}-large`,Tx=`${Dt}-loading`,pc=`${Dt}-minimal`,Km=`${Dt}-outlined`,wx=`${Dt}-round`,mc=`${Dt}-small`,v0=`${Dt}-vertical`;Ni(Gr.PRIMARY);Ni(Gr.SUCCESS);Ni(Gr.WARNING);Ni(Gr.DANGER);const Ax=`${Dt}-text-overflow-ellipsis`,Tc=`${Dt}-button`,Cx=`${Tc}-group`,Rx=`${Tc}-spinner`,bx=`${Tc}-text`,Px=`${Dt}-html-select`,Xf=`${Dt}-control`,Lx=`${Xf}-input`,_0=`${Xf}-indicator`,jm=`${_0}-child`,Dx=`${Dt}-checkbox`,Nx=`${Dt}-radio`,x0=`${Dt}-switch`,Zm=`${x0}-inner-text`,xa=`${Dt}-slider`,Ux=`${xa}-axis`,S0=`${xa}-handle`,y0=`${xa}-label`,Fx=`${xa}-track`,Ox=`${xa}-progress`,Ix=`${Dt}-start`,kx=`${Dt}-end`,wc=`${Dt}-spinner`,zx=`${wc}-animation`,Hx=`${wc}-head`,Vx=`${Dt}-no-spin`,Gx=`${wc}-track`,M0=`${Dt}-tag`,Bx=`${M0}-remove`,$f=`${Dt}-icon`,Wx=`${$f}-standard`,Xx=`${$f}-large`;function qf(i){switch(i){case Ul.LEFT:case Ul.START:return xx;case Ul.RIGHT:case Ul.END:return Sx;default:return}}function $x(i){if(i!=null)return i.indexOf(`${Dt}-icon-`)===0?i:`${Dt}-icon-${i}`}function Ni(i){if(!(i==null||i===Gr.NONE))return`${Dt}-intent-${i.toLowerCase()}`}function Ac(i,e){if(i==="small")return mc;if(i==="large")return hs;const{large:t=!1,small:a=!1}=e;return{[hs]:t,[mc]:a}}function E0(i,e){if(i==="outlined")return Km;if(i==="minimal")return pc;const{minimal:t=!1,outlined:a=!1}=e;return{[pc]:t,[Km]:a}}var Ve=Bf();function qx(i,e,t=(a,s)=>a===s){return i==null&&e==null?!0:i==null||e==null||i.length!==e.length?!1:i.every((a,s)=>t(a,e[s]))}function Yx(){return typeof window<"u"&&window.document!=null}function T0(i){return typeof i=="function"}const Xr="[Blueprint]",Kx=Xr+" clamp: max cannot be less than min",jx=Xr+" <Slider> stepSize must be greater than zero.",Zx=Xr+" <Slider> labelStepSize must be greater than zero.",Jx=Xr+" <Slider> min prop must be a finite number.",Qx=Xr+" <Slider> max prop must be a finite number.",eS=Xr+" <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s",tS=Xr+" <MultiSlider> labelStepSize and labelValues prop are mutually exclusive, with labelStepSize taking priority.",nS=Xr+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";function jd(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}function iS(i,e,t=1e-5){return Math.abs(i-e)<=t}function Yf(i,e,t){if(i==null)return i;if(t<e)throw new Error(Kx);return Math.min(Math.max(i,e),t)}function w0(i){if(!isFinite(i))return 0;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}const yn="Blueprint6",Jm=["active","alignText","asyncControl","containerRef","current","elementRef","ellipsizeText","endIcon","fill","icon","iconSize","inputClassName","inputRef","intent","inline","large","loading","leftElement","leftIcon","minimal","onRemove","outlined","panel","panelClassName","popoverProps","rightElement","rightIcon","round","selectedValue","size","small","tagName","text","textClassName","variant"];function us(i,e=Jm,t=!1){return t&&(e=e.concat(Jm)),e.reduce((a,s)=>(s.indexOf("-")!==-1||a.hasOwnProperty(s)&&delete a[s],a),{...i})}function gc(i,e=!1){return i==null||i===""||i===!1||!e&&Array.isArray(i)&&(i.length===0||i.every(t=>gc(t,!0)))}function A0(i,e){return i!=null&&i.type!=null&&i.type.displayName!=null&&i.type.displayName===e.displayName}const rS=`${yn}.Icon.`;function aS(i){if(!Ve.isValidElement(i))return!1;const{type:e}=i;if(typeof e=="string")return!1;const{displayName:t}=e;return typeof t=="string"&&t.startsWith(rS)}function Qm(i){return i.key==="Enter"||i.key===" "}const sS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];function oS(i){return sS.includes(i.key)}function lS(i,e,t){if(e.includes(i.key))return-1;if(t.includes(i.key))return 1}function cS(i){return i!=null&&typeof i!="function"}function uS(i){return typeof i=="function"}function dS(i,e){cS(i)?i.current=e:uS(i)&&i(e)}function Kf(...i){return e=>{i.forEach(t=>{dS(t,e)})}}class jf extends Ve.PureComponent{constructor(t){super(t);mt(this,"componentWillUpdate");mt(this,"componentWillReceiveProps");mt(this,"componentWillMount");mt(this,"getDerivedStateFromProps");mt(this,"displayName");mt(this,"timeoutIds",[]);mt(this,"requestIds",[]);mt(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});mt(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});jd("production")||this.validateProps(this.props)}componentDidUpdate(t,a,s){jd("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const a=window.requestAnimationFrame(t);return this.requestIds.push(a),()=>window.cancelAnimationFrame(a)}setTimeout(t,a){const s=window.setTimeout(t,a);return this.timeoutIds.push(s),()=>window.clearTimeout(s)}validateProps(t){}}var pd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var eg;function fS(){return eg||(eg=1,(function(i){(function(){var e={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=s(l,a(d)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)e.call(l,d)&&l[d]&&(u=s(u,d));return u}function s(l,u){return u?l?l+" "+u:l+u:l}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(pd)),pd.exports}var hS=fS();const An=cx(hS);function pS(i,e=[]){Ve.useEffect(()=>{jd("production")||i()},e)}const mS={defaultTabIndex:void 0,disabledTabIndex:-1};function C0(i,e,t,a=mS){const{defaultTabIndex:s,disabledTabIndex:l}=a,{active:u,onClick:d,onFocus:m,onKeyDown:p,onKeyUp:v,onBlur:x,tabIndex:_=s}=e,[M,w]=Ve.useState(),[b,y]=Ve.useState(!1),S=Ve.useRef(null),D=Ve.useCallback(P=>{b&&y(!1),x==null||x(P)},[b,x]),z=Ve.useCallback(P=>{Qm(P)&&(P.preventDefault(),P.key!==M&&y(!0)),w(P.key),p==null||p(P)},[M,p]),R=Ve.useCallback(P=>{var I;Qm(P)&&(y(!1),(I=S.current)==null||I.click()),w(void 0),v==null||v(P)},[v,S]);return[i&&(u||b),{onBlur:D,onClick:i?d:void 0,onFocus:i?m:void 0,onKeyDown:z,onKeyUp:R,ref:Kf(S,t),tabIndex:i?_:l}]}var vo=function(){return vo=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},vo.apply(this,arguments)};function gS(i){return i.toLowerCase()}var vS=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],_S=/[^A-Z0-9]+/gi;function R0(i,e){e===void 0&&(e={});for(var t=e.splitRegexp,a=t===void 0?vS:t,s=e.stripRegexp,l=s===void 0?_S:s,u=e.transform,d=u===void 0?gS:u,m=e.delimiter,p=m===void 0?" ":m,v=tg(tg(i,a,"$1\0$2"),l,"\0"),x=0,_=v.length;v.charAt(x)==="\0";)x++;for(;v.charAt(_-1)==="\0";)_--;return v.slice(x,_).split("\0").map(d).join(p)}function tg(i,e,t){return e instanceof RegExp?i.replace(e,t):e.reduce(function(a,s){return a.replace(s,t)},i)}function xS(i,e){var t=i.charAt(0),a=i.substr(1).toLowerCase();return e>0&&t>="0"&&t<="9"?"_"+t+a:""+t.toUpperCase()+a}function SS(i,e){return e===void 0&&(e={}),R0(i,vo({delimiter:"",transform:xS},e))}function yS(i,e){return e===void 0&&(e={}),R0(i,vo({delimiter:"."},e))}function MS(i,e){return e===void 0&&(e={}),yS(i,vo({delimiter:"_"},e))}var jt;(function(i){i[i.STANDARD=16]="STANDARD",i[i.LARGE=20]="LARGE"})(jt||(jt={}));const ES="modulepreload",TS=function(i,e){return new URL(i,e).href},ng={},ig=function(e,t,a){let s=Promise.resolve();if(t&&t.length>0){let u=function(v){return Promise.all(v.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));s=u(t.map(v=>{if(v=TS(v,a),v in ng)return;ng[v]=!0;const x=v.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!a)for(let b=d.length-1;b>=0;b--){const y=d[b];if(y.href===v&&(!x||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${_}`))return;const w=document.createElement("link");if(w.rel=x?"stylesheet":ES,x||(w.as="script"),w.crossOrigin="",w.href=v,p&&w.setAttribute("nonce",p),document.head.appendChild(w),x)return new Promise((b,y)=>{w.addEventListener("load",b),w.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var h;(function(i){i.AddApplication="add-application",i.AddChild="add-child",i.AddClip="add-clip",i.AddColumnLeft="add-column-left",i.AddColumnRight="add-column-right",i.AddDerivedColumn="add-derived-column",i.AddLocation="add-location",i.AddParent="add-parent",i.AddRowBottom="add-row-bottom",i.AddRowTop="add-row-top",i.AddTile="add-tile",i.AddToArtifact="add-to-artifact",i.AddToFolder="add-to-folder",i.Add="add",i.AimpointsTarget="aimpoints-target",i.Airplane="airplane",i.AlignCenter="align-center",i.AlignJustify="align-justify",i.AlignLeft="align-left",i.AlignRight="align-right",i.AlignmentBottom="alignment-bottom",i.AlignmentHorizontalCenter="alignment-horizontal-center",i.AlignmentLeft="alignment-left",i.AlignmentRight="alignment-right",i.AlignmentTop="alignment-top",i.AlignmentVerticalCenter="alignment-vertical-center",i.Ammunition="ammunition",i.Anchor="anchor",i.Annotation="annotation",i.Announcement="announcement",i.Antenna="antenna",i.AppHeader="app-header",i.Application="application",i.Applications="applications",i.Archive="archive",i.AreaOfInterest="area-of-interest",i.ArrayBoolean="array-boolean",i.ArrayDate="array-date",i.ArrayFloatingPoint="array-floating-point",i.ArrayNumeric="array-numeric",i.ArrayObject="array-object",i.ArrayString="array-string",i.ArrayTimestamp="array-timestamp",i.Array="array",i.ArrowBottomLeft="arrow-bottom-left",i.ArrowBottomRight="arrow-bottom-right",i.ArrowDown="arrow-down",i.ArrowLeft="arrow-left",i.ArrowRight="arrow-right",i.ArrowTopLeft="arrow-top-left",i.ArrowTopRight="arrow-top-right",i.ArrowUp="arrow-up",i.ArrowsArc="arrows-arc",i.ArrowsHorizontal="arrows-horizontal",i.ArrowsVertical="arrows-vertical",i.Asterisk="asterisk",i.At="at",i.AutomaticUpdates="automatic-updates",i.Axle="axle",i.Backlink="backlink",i.BackwardTen="backward-ten",i.Badge="badge",i.BanCircle="ban-circle",i.BankAccount="bank-account",i.Barcode="barcode",i.BinaryNumber="binary-number",i.Blank="blank",i.BlockPromote="block-promote",i.BlockedPerson="blocked-person",i.Bold="bold",i.Book="book",i.Bookmark="bookmark",i.Box="box",i.BranchLocked="branch-locked",i.BranchUnlocked="branch-unlocked",i.Briefcase="briefcase",i.BringData="bring-data",i.BringForward="bring-forward",i.BritishPound="british-pound",i.Bug="bug",i.Buggy="buggy",i.Build="build",i.Bullseye="bullseye",i.Calculator="calculator",i.Calendar="calendar",i.Camera="camera",i.CaretDown="caret-down",i.CaretLeft="caret-left",i.CaretRight="caret-right",i.CaretUp="caret-up",i.CargoShip="cargo-ship",i.CellTower="cell-tower",i.Changes="changes",i.Chart="chart",i.Chat="chat",i.ChevronBackward="chevron-backward",i.ChevronDown="chevron-down",i.ChevronForward="chevron-forward",i.ChevronLeft="chevron-left",i.ChevronRight="chevron-right",i.ChevronUp="chevron-up",i.CircleArrowDown="circle-arrow-down",i.CircleArrowLeft="circle-arrow-left",i.CircleArrowRight="circle-arrow-right",i.CircleArrowUp="circle-arrow-up",i.CircleDashed="circle-dashed",i.Circle="circle",i.Citation="citation",i.Clean="clean",i.Clip="clip",i.ClipboardFile="clipboard-file",i.Clipboard="clipboard",i.CloudDownload="cloud-download",i.CloudServer="cloud-server",i.CloudTick="cloud-tick",i.CloudUpload="cloud-upload",i.Cloud="cloud",i.CodeBlock="code-block",i.Code="code",i.Cog="cog",i.CollapseAll="collapse-all",i.ColorFill="color-fill",i.ColumnLayout="column-layout",i.Comment="comment",i.Comparison="comparison",i.Compass="compass",i.Compressed="compressed",i.Confirm="confirm",i.ConsoleAlert="console-alert",i.Console="console",i.Construction="construction",i.Contrast="contrast",i.Control="control",i.CreditCard="credit-card",i.Crop="crop",i.CrossCircle="cross-circle",i.Cross="cross",i.Crown="crown",i.CrystalBall="crystal-ball",i.CssStyle="css-style",i.CubeAdd="cube-add",i.CubeCutout="cube-cutout",i.CubeCutouts="cube-cutouts",i.CubeEdit="cube-edit",i.CubeRemove="cube-remove",i.Cube="cube",i.Cubes="cubes",i.CurlyBraces="curly-braces",i.CurvedRangeChart="curved-range-chart",i.Cut="cut",i.Cycle="cycle",i.Dashboard="dashboard",i.DataCloud="data-cloud",i.DataConnection="data-connection",i.DataLineage="data-lineage",i.DataSearch="data-search",i.DataSync="data-sync",i.Database="database",i.DeleteClip="delete-clip",i.Delete="delete",i.Delta="delta",i.DeriveColumn="derive-column",i.Descendant="descendant",i.Desktop="desktop",i.Detection="detection",i.Diagnosis="diagnosis",i.DiagramTree="diagram-tree",i.DirectionLeft="direction-left",i.DirectionRight="direction-right",i.Disable="disable",i.Divide="divide",i.DocumentCode="document-code",i.DocumentLocked="document-locked",i.DocumentOpen="document-open",i.DocumentShare="document-share",i.Document="document",i.Dollar="dollar",i.Dot="dot",i.DoubleCaretHorizontal="double-caret-horizontal",i.DoubleCaretVertical="double-caret-vertical",i.DoubleChevronDown="double-chevron-down",i.DoubleChevronLeft="double-chevron-left",i.DoubleChevronRight="double-chevron-right",i.DoubleChevronUp="double-chevron-up",i.DoughnutChart="doughnut-chart",i.Download="download",i.DragHandleHorizontal="drag-handle-horizontal",i.DragHandleVertical="drag-handle-vertical",i.Draw="draw",i.DrawerLeftFilled="drawer-left-filled",i.DrawerLeft="drawer-left",i.DrawerRightFilled="drawer-right-filled",i.DrawerRight="drawer-right",i.DriveTime="drive-time",i.DroneUav="drone-uav",i.Drone="drone",i.Duplicate="duplicate",i.Edit="edit",i.Eject="eject",i.Emoji="emoji",i.Endnote="endnote",i.Endorsed="endorsed",i.Engagement="engagement",i.Envelope="envelope",i.Equals="equals",i.Eraser="eraser",i.Error="error",i.Euro="euro",i.Excavator="excavator",i.Exchange="exchange",i.ExcludeRow="exclude-row",i.ExpandAll="expand-all",i.Explain="explain",i.Export="export",i.EyeOff="eye-off",i.EyeOn="eye-on",i.EyeOpen="eye-open",i.FastBackward="fast-backward",i.FastForward="fast-forward",i.FeedSubscribed="feed-subscribed",i.Feed="feed",i.FighterJet="fighter-jet",i.Film="film",i.FilterKeep="filter-keep",i.FilterList="filter-list",i.FilterOpen="filter-open",i.FilterRemove="filter-remove",i.FilterSortAsc="filter-sort-asc",i.FilterSortDesc="filter-sort-desc",i.Filter="filter",i.Flag="flag",i.Flame="flame",i.Flash="flash",i.FloatingPoint="floating-point",i.FloppyDisk="floppy-disk",i.FlowBranch="flow-branch",i.FlowEnd="flow-end",i.FlowLinear="flow-linear",i.FlowReviewBranch="flow-review-branch",i.FlowReview="flow-review",i.Flows="flows",i.FolderClose="folder-close",i.FolderNew="folder-new",i.FolderOpen="folder-open",i.FolderSharedOpen="folder-shared-open",i.FolderShared="folder-shared",i.Follower="follower",i.Following="following",i.Font="font",i.ForkEnd="fork-end",i.Fork="fork",i.Form="form",i.ForwardTen="forward-ten",i.FrameToFrame="frame-to-frame",i.Fuel="fuel",i.FullCircle="full-circle",i.FullStackedChart="full-stacked-chart",i.Fullscreen="fullscreen",i.FunctionMinimal="function-minimal",i.Function="function",i.GanttChart="gantt-chart",i.Generate="generate",i.Geofence="geofence",i.Geolocation="geolocation",i.Geosearch="geosearch",i.Geotime="geotime",i.GiftBox="gift-box",i.GitBranch="git-branch",i.GitCommit="git-commit",i.GitMerge="git-merge",i.GitNewBranch="git-new-branch",i.GitPull="git-pull",i.GitPush="git-push",i.GitRebase="git-rebase",i.GitRepo="git-repo",i.Glass="glass",i.GlobeNetworkAdd="globe-network-add",i.GlobeNetwork="globe-network",i.Globe="globe",i.GraphRemove="graph-remove",i.Graph="graph",i.GreaterThanOrEqualTo="greater-than-or-equal-to",i.GreaterThan="greater-than",i.GridView="grid-view",i.Grid="grid",i.GroupItem="group-item",i.GroupObjects="group-objects",i.GroupedBarChart="grouped-bar-chart",i.HandDown="hand-down",i.HandLeft="hand-left",i.HandRight="hand-right",i.HandUp="hand-up",i.Hand="hand",i.Hat="hat",i.HeaderOne="header-one",i.HeaderThree="header-three",i.HeaderTwo="header-two",i.Header="header",i.Headset="headset",i.HeartBroken="heart-broken",i.Heart="heart",i.HeatGrid="heat-grid",i.Heatmap="heatmap",i.Helicopter="helicopter",i.Help="help",i.HelperManagement="helper-management",i.Hexagon="hexagon",i.HighPriority="high-priority",i.HighVoltagePole="high-voltage-pole",i.Highlight="highlight",i.History="history",i.Home="home",i.HorizontalBarChartAsc="horizontal-bar-chart-asc",i.HorizontalBarChartDesc="horizontal-bar-chart-desc",i.HorizontalBarChart="horizontal-bar-chart",i.HorizontalDistribution="horizontal-distribution",i.HorizontalInbetween="horizontal-inbetween",i.Hurricane="hurricane",i.IdNumber="id-number",i.ImageRotateLeft="image-rotate-left",i.ImageRotateRight="image-rotate-right",i.Import="import",i.InboxFiltered="inbox-filtered",i.InboxGeo="inbox-geo",i.InboxSearch="inbox-search",i.InboxUpdate="inbox-update",i.Inbox="inbox",i.InfoSign="info-sign",i.Inheritance="inheritance",i.InheritedGroup="inherited-group",i.InnerJoin="inner-join",i.Input="input",i.Insert="insert",i.Intelligence="intelligence",i.Intersection="intersection",i.IpAddress="ip-address",i.IssueClosed="issue-closed",i.IssueNew="issue-new",i.Issue="issue",i.Italic="italic",i.JoinTable="join-table",i.KeyBackspace="key-backspace",i.KeyCommand="key-command",i.KeyControl="key-control",i.KeyDelete="key-delete",i.KeyEnter="key-enter",i.KeyEscape="key-escape",i.KeyOption="key-option",i.KeyShift="key-shift",i.KeyTab="key-tab",i.Key="key",i.KnownVehicle="known-vehicle",i.LabTest="lab-test",i.Label="label",i.LayerOutline="layer-outline",i.Layer="layer",i.Layers="layers",i.LayoutAuto="layout-auto",i.LayoutBalloon="layout-balloon",i.LayoutBottomRowThreeTiles="layout-bottom-row-three-tiles",i.LayoutBottomRowTwoTiles="layout-bottom-row-two-tiles",i.LayoutCircle="layout-circle",i.LayoutGrid="layout-grid",i.LayoutGroupBy="layout-group-by",i.LayoutHierarchy="layout-hierarchy",i.LayoutLeftColumnThreeTiles="layout-left-column-three-tiles",i.LayoutLeftColumnTwoTiles="layout-left-column-two-tiles",i.LayoutLinear="layout-linear",i.LayoutRightColumnThreeTiles="layout-right-column-three-tiles",i.LayoutRightColumnTwoTiles="layout-right-column-two-tiles",i.LayoutSkewGrid="layout-skew-grid",i.LayoutSortedClusters="layout-sorted-clusters",i.LayoutThreeColumns="layout-three-columns",i.LayoutThreeRows="layout-three-rows",i.LayoutTopRowThreeTiles="layout-top-row-three-tiles",i.LayoutTopRowTwoTiles="layout-top-row-two-tiles",i.LayoutTwoColumns="layout-two-columns",i.LayoutTwoRows="layout-two-rows",i.Layout="layout",i.Learning="learning",i.LeftJoin="left-join",i.LengthenText="lengthen-text",i.LessThanOrEqualTo="less-than-or-equal-to",i.LessThan="less-than",i.Lifesaver="lifesaver",i.Lightbulb="lightbulb",i.Lightning="lightning",i.Link="link",i.LinkedSquares="linked-squares",i.ListColumns="list-columns",i.ListDetailView="list-detail-view",i.List="list",i.Locate="locate",i.Lock="lock",i.Locomotive="locomotive",i.LogIn="log-in",i.LogOut="log-out",i.LowVoltagePole="low-voltage-pole",i.Manual="manual",i.ManuallyEnteredData="manually-entered-data",i.ManyToMany="many-to-many",i.ManyToOne="many-to-one",i.MapCreate="map-create",i.MapMarker="map-marker",i.Map="map",i.Markdown="markdown",i.Maximize="maximize",i.Media="media",i.MenuClosed="menu-closed",i.MenuOpen="menu-open",i.Menu="menu",i.MergeColumns="merge-columns",i.MergeLinks="merge-links",i.Microphone="microphone",i.Minimize="minimize",i.Minus="minus",i.MobilePhone="mobile-phone",i.MobileVideo="mobile-video",i.ModalFilled="modal-filled",i.Modal="modal",i.Model="model",i.Moon="moon",i.More="more",i.Mountain="mountain",i.Move="move",i.Mugshot="mugshot",i.MultiSelect="multi-select",i.Music="music",i.Nest="nest",i.NewComment="new-comment",i.NewDrawing="new-drawing",i.NewGridItem="new-grid-item",i.NewLayer="new-layer",i.NewLayers="new-layers",i.NewLink="new-link",i.NewObject="new-object",i.NewPerson="new-person",i.NewPrescription="new-prescription",i.NewShield="new-shield",i.NewTextBox="new-text-box",i.Ninja="ninja",i.NotEqualTo="not-equal-to",i.NotificationsAdd="notifications-add",i.NotificationsSnooze="notifications-snooze",i.NotificationsUpdated="notifications-updated",i.Notifications="notifications",i.NumberedList="numbered-list",i.Numerical="numerical",i.ObjectView="object-view",i.Office="office",i.Offline="offline",i.OilField="oil-field",i.OneColumn="one-column",i.OneToMany="one-to-many",i.OneToOne="one-to-one",i.OpenApplication="open-application",i.Outdated="outdated",i.OuterJoin="outer-join",i.Output="output",i.Package="package",i.PageBreak="page-break",i.PageLayout="page-layout",i.PanelStats="panel-stats",i.PanelTable="panel-table",i.Panel="panel",i.Paperclip="paperclip",i.Paragraph="paragraph",i.PasteVariable="paste-variable",i.PathSearch="path-search",i.Path="path",i.Pause="pause",i.People="people",i.Percentage="percentage",i.Person="person",i.PhoneCall="phone-call",i.PhoneForward="phone-forward",i.PhoneSearch="phone-search",i.Phone="phone",i.PieChart="pie-chart",i.Pill="pill",i.Pin="pin",i.Pistol="pistol",i.PivotTable="pivot-table",i.Pivot="pivot",i.Play="play",i.Playbook="playbook",i.Plus="plus",i.PolygonFilter="polygon-filter",i.Popout="popout",i.Power="power",i.PredictiveAnalysis="predictive-analysis",i.Prescription="prescription",i.Presentation="presentation",i.Print="print",i.Projects="projects",i.Properties="properties",i.Property="property",i.PublishFunction="publish-function",i.Pulse="pulse",i.Rain="rain",i.Random="random",i.RangeRing="range-ring",i.Record="record",i.RectHeight="rect-height",i.RectWidth="rect-width",i.Rectangle="rectangle",i.Redo="redo",i.RefreshOff="refresh-off",i.Refresh="refresh",i.Regex="regex",i.RegressionChart="regression-chart",i.RemoveColumnLeft="remove-column-left",i.RemoveColumnRight="remove-column-right",i.RemoveColumn="remove-column",i.RemoveRowBottom="remove-row-bottom",i.RemoveRowTop="remove-row-top",i.Remove="remove",i.Repeat="repeat",i.Reset="reset",i.Resolve="resolve",i.Rig="rig",i.RightJoin="right-join",i.Ring="ring",i.RocketSlant="rocket-slant",i.Rocket="rocket",i.RootFolder="root-folder",i.RotateCcw="rotate-ccw",i.RotateCw="rotate-cw",i.RotateDocument="rotate-document",i.RotatePage="rotate-page",i.Route="route",i.RunHistory="run-history",i.Satellite="satellite",i.Saved="saved",i.ScatterPlot="scatter-plot",i.SearchAround="search-around",i.SearchTemplate="search-template",i.SearchText="search-text",i.Search="search",i.SegmentedControl="segmented-control",i.Select="select",i.SelectionBoxAdd="selection-box-add",i.SelectionBoxEdit="selection-box-edit",i.SelectionBoxRemove="selection-box-remove",i.SelectionBox="selection-box",i.Selection="selection",i.SendBackward="send-backward",i.SendMessage="send-message",i.SendToGraph="send-to-graph",i.SendToMap="send-to-map",i.SendTo="send-to",i.Sensor="sensor",i.SeriesAdd="series-add",i.SeriesConfiguration="series-configuration",i.SeriesDerived="series-derived",i.SeriesFiltered="series-filtered",i.SeriesSearch="series-search",i.ServerInstall="server-install",i.Server="server",i.Settings="settings",i.Shapes="shapes",i.Share="share",i.SharedFilter="shared-filter",i.Shield="shield",i.Ship="ship",i.Shop="shop",i.ShoppingCart="shopping-cart",i.ShortenText="shorten-text",i.SignalSearch="signal-search",i.SimCard="sim-card",i.Slash="slash",i.SmallCross="small-cross",i.SmallInfoSign="small-info-sign",i.SmallMinus="small-minus",i.SmallPlus="small-plus",i.SmallSquare="small-square",i.SmallTick="small-tick",i.Snowflake="snowflake",i.SoccerBall="soccer-ball",i.SocialMedia="social-media",i.SortAlphabeticalDesc="sort-alphabetical-desc",i.SortAlphabetical="sort-alphabetical",i.SortAsc="sort-asc",i.SortDesc="sort-desc",i.SortNumericalDesc="sort-numerical-desc",i.SortNumerical="sort-numerical",i.Sort="sort",i.SpellCheck="spell-check",i.Spin="spin",i.SplitColumns="split-columns",i.SportsStadium="sports-stadium",i.Square="square",i.StackedChart="stacked-chart",i.StadiumGeometry="stadium-geometry",i.StarEmpty="star-empty",i.Star="star",i.StepBackward="step-backward",i.StepChart="step-chart",i.StepForward="step-forward",i.Stop="stop",i.Stopwatch="stopwatch",i.Strikethrough="strikethrough",i.Style="style",i.Subscript="subscript",i.SubtractRightJoin="subtract-right-join",i.Superscript="superscript",i.SwapHorizontal="swap-horizontal",i.SwapVertical="swap-vertical",i.Sweep="sweep",i.Switch="switch",i.SymbolCircle="symbol-circle",i.SymbolCross="symbol-cross",i.SymbolDiamond="symbol-diamond",i.SymbolRectangle="symbol-rectangle",i.SymbolSquare="symbol-square",i.SymbolTriangleDown="symbol-triangle-down",i.SymbolTriangleUp="symbol-triangle-up",i.Syringe="syringe",i.TableSync="table-sync",i.TagAdd="tag-add",i.TagPromote="tag-promote",i.TagRefresh="tag-refresh",i.TagUndo="tag-undo",i.Tag="tag",i.Tags="tags",i.TakeAction="take-action",i.Tank="tank",i.Target="target",i.Taxi="taxi",i.Team="team",i.Temperature="temperature",i.TextHighlight="text-highlight",i.ThAdd="th-add",i.ThDerived="th-derived",i.ThDisconnect="th-disconnect",i.ThFiltered="th-filtered",i.ThListAdd="th-list-add",i.ThList="th-list",i.ThVirtualAdd="th-virtual-add",i.ThVirtual="th-virtual",i.Th="th",i.ThirdParty="third-party",i.ThumbsDown="thumbs-down",i.ThumbsUp="thumbs-up",i.TickCircle="tick-circle",i.Tick="tick",i.Time="time",i.TimelineAreaChart="timeline-area-chart",i.TimelineBarChart="timeline-bar-chart",i.TimelineEvents="timeline-events",i.TimelineLineChart="timeline-line-chart",i.Tint="tint",i.Torch="torch",i.Tractor="tractor",i.Train="train",i.Translate="translate",i.Trash="trash",i.Tree="tree",i.TrendingDown="trending-down",i.TrendingUp="trending-up",i.Trophy="trophy",i.Truck="truck",i.TwoColumns="two-columns",i.Unarchive="unarchive",i.Underline="underline",i.Undo="undo",i.UngroupObjects="ungroup-objects",i.UnknownVehicle="unknown-vehicle",i.Unlink="unlink",i.Unlock="unlock",i.Unpin="unpin",i.Unresolve="unresolve",i.Updated="updated",i.Upload="upload",i.User="user",i.VariableLayer="variable-layer",i.Variable="variable",i.Vector="vector",i.VerticalBarChartAsc="vertical-bar-chart-asc",i.VerticalBarChartDesc="vertical-bar-chart-desc",i.VerticalDistribution="vertical-distribution",i.VerticalInbetween="vertical-inbetween",i.Video="video",i.Virus="virus",i.VolumeDown="volume-down",i.VolumeOff="volume-off",i.VolumeUp="volume-up",i.Walk="walk",i.WarningSign="warning-sign",i.WaterfallChart="waterfall-chart",i.Waves="waves",i.WidgetButton="widget-button",i.WidgetFooter="widget-footer",i.WidgetHeader="widget-header",i.Widget="widget",i.Wind="wind",i.Won="won",i.WrapLines="wrap-lines",i.WrenchRedo="wrench-redo",i.WrenchSnooze="wrench-snooze",i.WrenchTime="wrench-time",i.Wrench="wrench",i.Yen="yen",i.ZoomIn="zoom-in",i.ZoomOut="zoom-out",i.ZoomToFit="zoom-to-fit"})(h||(h={}));h.AddApplication+"",h.AddChild+"",h.AddClip+"",h.AddColumnLeft+"",h.AddColumnRight+"",h.AddDerivedColumn+"",h.AddLocation+"",h.AddParent+"",h.AddRowBottom+"",h.AddRowTop+"",h.AddTile+"",h.AddToArtifact+"",h.AddToFolder+"",h.Add+"",h.AimpointsTarget+"",h.Airplane+"",h.AlignCenter+"",h.AlignJustify+"",h.AlignLeft+"",h.AlignRight+"",h.AlignmentBottom+"",h.AlignmentHorizontalCenter+"",h.AlignmentLeft+"",h.AlignmentRight+"",h.AlignmentTop+"",h.AlignmentVerticalCenter+"",h.Ammunition+"",h.Anchor+"",h.Annotation+"",h.Announcement+"",h.Antenna+"",h.AppHeader+"",h.Application+"",h.Applications+"",h.Archive+"",h.AreaOfInterest+"",h.ArrayBoolean+"",h.ArrayDate+"",h.ArrayFloatingPoint+"",h.ArrayNumeric+"",h.ArrayObject+"",h.ArrayString+"",h.ArrayTimestamp+"",h.Array+"",h.ArrowBottomLeft+"",h.ArrowBottomRight+"",h.ArrowDown+"",h.ArrowLeft+"",h.ArrowRight+"",h.ArrowTopLeft+"",h.ArrowTopRight+"",h.ArrowUp+"",h.ArrowsArc+"",h.ArrowsHorizontal+"",h.ArrowsVertical+"",h.Asterisk+"",h.At+"",h.AutomaticUpdates+"",h.Axle+"",h.Backlink+"",h.BackwardTen+"",h.Badge+"",h.BanCircle+"",h.BankAccount+"",h.Barcode+"",h.BinaryNumber+"",h.Blank+"",h.BlockPromote+"",h.BlockedPerson+"",h.Bold+"",h.Book+"",h.Bookmark+"",h.Box+"",h.BranchLocked+"",h.BranchUnlocked+"",h.Briefcase+"",h.BringData+"",h.BringForward+"",h.BritishPound+"",h.Bug+"",h.Buggy+"",h.Build+"",h.Bullseye+"",h.Calculator+"",h.Calendar+"",h.Camera+"",h.CaretDown+"",h.CaretLeft+"",h.CaretRight+"",h.CaretUp+"",h.CargoShip+"",h.CellTower+"",h.Changes+"",h.Chart+"",h.Chat+"",h.ChevronBackward+"",h.ChevronDown+"",h.ChevronForward+"",h.ChevronLeft+"",h.ChevronRight+"",h.ChevronUp+"",h.CircleArrowDown+"",h.CircleArrowLeft+"",h.CircleArrowRight+"",h.CircleArrowUp+"",h.CircleDashed+"",h.Circle+"",h.Citation+"",h.Clean+"",h.Clip+"",h.ClipboardFile+"",h.Clipboard+"",h.CloudDownload+"",h.CloudServer+"",h.CloudTick+"",h.CloudUpload+"",h.Cloud+"",h.CodeBlock+"",h.Code+"",h.Cog+"",h.CollapseAll+"",h.ColorFill+"",h.ColumnLayout+"",h.Comment+"",h.Comparison+"",h.Compass+"",h.Compressed+"",h.Confirm+"",h.ConsoleAlert+"",h.Console+"",h.Construction+"",h.Contrast+"",h.Control+"",h.CreditCard+"",h.Crop+"",h.CrossCircle+"",h.Cross+"",h.Crown+"",h.CrystalBall+"",h.CssStyle+"",h.CubeAdd+"",h.CubeCutout+"",h.CubeCutouts+"",h.CubeEdit+"",h.CubeRemove+"",h.Cube+"",h.Cubes+"",h.CurlyBraces+"",h.CurvedRangeChart+"",h.Cut+"",h.Cycle+"",h.Dashboard+"",h.DataCloud+"",h.DataConnection+"",h.DataLineage+"",h.DataSearch+"",h.DataSync+"",h.Database+"",h.DeleteClip+"",h.Delete+"",h.Delta+"",h.DeriveColumn+"",h.Descendant+"",h.Desktop+"",h.Detection+"",h.Diagnosis+"",h.DiagramTree+"",h.DirectionLeft+"",h.DirectionRight+"",h.Disable+"",h.Divide+"",h.DocumentCode+"",h.DocumentLocked+"",h.DocumentOpen+"",h.DocumentShare+"",h.Document+"",h.Dollar+"",h.Dot+"",h.DoubleCaretHorizontal+"",h.DoubleCaretVertical+"",h.DoubleChevronDown+"",h.DoubleChevronLeft+"",h.DoubleChevronRight+"",h.DoubleChevronUp+"",h.DoughnutChart+"",h.Download+"",h.DragHandleHorizontal+"",h.DragHandleVertical+"",h.Draw+"",h.DrawerLeftFilled+"",h.DrawerLeft+"",h.DrawerRightFilled+"",h.DrawerRight+"",h.DriveTime+"",h.DroneUav+"",h.Drone+"",h.Duplicate+"",h.Edit+"",h.Eject+"",h.Emoji+"",h.Endnote+"",h.Endorsed+"",h.Engagement+"",h.Envelope+"",h.Equals+"",h.Eraser+"",h.Error+"",h.Euro+"",h.Excavator+"",h.Exchange+"",h.ExcludeRow+"",h.ExpandAll+"",h.Explain+"",h.Export+"",h.EyeOff+"",h.EyeOn+"",h.EyeOpen+"",h.FastBackward+"",h.FastForward+"",h.FeedSubscribed+"",h.Feed+"",h.FighterJet+"",h.Film+"",h.FilterKeep+"",h.FilterList+"",h.FilterOpen+"",h.FilterRemove+"",h.FilterSortAsc+"",h.FilterSortDesc+"",h.Filter+"",h.Flag+"",h.Flame+"",h.Flash+"",h.FloatingPoint+"",h.FloppyDisk+"",h.FlowBranch+"",h.FlowEnd+"",h.FlowLinear+"",h.FlowReviewBranch+"",h.FlowReview+"",h.Flows+"",h.FolderClose+"",h.FolderNew+"",h.FolderOpen+"",h.FolderSharedOpen+"",h.FolderShared+"",h.Follower+"",h.Following+"",h.Font+"",h.ForkEnd+"",h.Fork+"",h.Form+"",h.ForwardTen+"",h.FrameToFrame+"",h.Fuel+"",h.FullCircle+"",h.FullStackedChart+"",h.Fullscreen+"",h.FunctionMinimal+"",h.Function+"",h.GanttChart+"",h.Generate+"",h.Geofence+"",h.Geolocation+"",h.Geosearch+"",h.Geotime+"",h.GiftBox+"",h.GitBranch+"",h.GitCommit+"",h.GitMerge+"",h.GitNewBranch+"",h.GitPull+"",h.GitPush+"",h.GitRebase+"",h.GitRepo+"",h.Glass+"",h.GlobeNetworkAdd+"",h.GlobeNetwork+"",h.Globe+"",h.GraphRemove+"",h.Graph+"",h.GreaterThanOrEqualTo+"",h.GreaterThan+"",h.GridView+"",h.Grid+"",h.GroupItem+"",h.GroupObjects+"",h.GroupedBarChart+"",h.HandDown+"",h.HandLeft+"",h.HandRight+"",h.HandUp+"",h.Hand+"",h.Hat+"",h.HeaderOne+"",h.HeaderThree+"",h.HeaderTwo+"",h.Header+"",h.Headset+"",h.HeartBroken+"",h.Heart+"",h.HeatGrid+"",h.Heatmap+"",h.Helicopter+"",h.Help+"",h.HelperManagement+"",h.Hexagon+"",h.HighPriority+"",h.HighVoltagePole+"",h.Highlight+"",h.History+"",h.Home+"",h.HorizontalBarChartAsc+"",h.HorizontalBarChartDesc+"",h.HorizontalBarChart+"",h.HorizontalDistribution+"",h.HorizontalInbetween+"",h.Hurricane+"",h.IdNumber+"",h.ImageRotateLeft+"",h.ImageRotateRight+"",h.Import+"",h.InboxFiltered+"",h.InboxGeo+"",h.InboxSearch+"",h.InboxUpdate+"",h.Inbox+"",h.InfoSign+"",h.Inheritance+"",h.InheritedGroup+"",h.InnerJoin+"",h.Input+"",h.Insert+"",h.Intelligence+"",h.Intersection+"",h.IpAddress+"",h.IssueClosed+"",h.IssueNew+"",h.Issue+"",h.Italic+"",h.JoinTable+"",h.KeyBackspace+"",h.KeyCommand+"",h.KeyControl+"",h.KeyDelete+"",h.KeyEnter+"",h.KeyEscape+"",h.KeyOption+"",h.KeyShift+"",h.KeyTab+"",h.Key+"",h.KnownVehicle+"",h.LabTest+"",h.Label+"",h.LayerOutline+"",h.Layer+"",h.Layers+"",h.LayoutAuto+"",h.LayoutBalloon+"",h.LayoutBottomRowThreeTiles+"",h.LayoutBottomRowTwoTiles+"",h.LayoutCircle+"",h.LayoutGrid+"",h.LayoutGroupBy+"",h.LayoutHierarchy+"",h.LayoutLeftColumnThreeTiles+"",h.LayoutLeftColumnTwoTiles+"",h.LayoutLinear+"",h.LayoutRightColumnThreeTiles+"",h.LayoutRightColumnTwoTiles+"",h.LayoutSkewGrid+"",h.LayoutSortedClusters+"",h.LayoutThreeColumns+"",h.LayoutThreeRows+"",h.LayoutTopRowThreeTiles+"",h.LayoutTopRowTwoTiles+"",h.LayoutTwoColumns+"",h.LayoutTwoRows+"",h.Layout+"",h.Learning+"",h.LeftJoin+"",h.LengthenText+"",h.LessThanOrEqualTo+"",h.LessThan+"",h.Lifesaver+"",h.Lightbulb+"",h.Lightning+"",h.Link+"",h.LinkedSquares+"",h.ListColumns+"",h.ListDetailView+"",h.List+"",h.Locate+"",h.Lock+"",h.Locomotive+"",h.LogIn+"",h.LogOut+"",h.LowVoltagePole+"",h.Manual+"",h.ManuallyEnteredData+"",h.ManyToMany+"",h.ManyToOne+"",h.MapCreate+"",h.MapMarker+"",h.Map+"",h.Markdown+"",h.Maximize+"",h.Media+"",h.MenuClosed+"",h.MenuOpen+"",h.Menu+"",h.MergeColumns+"",h.MergeLinks+"",h.Microphone+"",h.Minimize+"",h.Minus+"",h.MobilePhone+"",h.MobileVideo+"",h.ModalFilled+"",h.Modal+"",h.Model+"",h.Moon+"",h.More+"",h.Mountain+"",h.Move+"",h.Mugshot+"",h.MultiSelect+"",h.Music+"",h.Nest+"",h.NewComment+"",h.NewDrawing+"",h.NewGridItem+"",h.NewLayer+"",h.NewLayers+"",h.NewLink+"",h.NewObject+"",h.NewPerson+"",h.NewPrescription+"",h.NewShield+"",h.NewTextBox+"",h.Ninja+"",h.NotEqualTo+"",h.NotificationsAdd+"",h.NotificationsSnooze+"",h.NotificationsUpdated+"",h.Notifications+"",h.NumberedList+"",h.Numerical+"",h.ObjectView+"",h.Office+"",h.Offline+"",h.OilField+"",h.OneColumn+"",h.OneToMany+"",h.OneToOne+"",h.OpenApplication+"",h.Outdated+"",h.OuterJoin+"",h.Output+"",h.Package+"",h.PageBreak+"",h.PageLayout+"",h.PanelStats+"",h.PanelTable+"",h.Panel+"",h.Paperclip+"",h.Paragraph+"",h.PasteVariable+"",h.PathSearch+"",h.Path+"",h.Pause+"",h.People+"",h.Percentage+"",h.Person+"",h.PhoneCall+"",h.PhoneForward+"",h.PhoneSearch+"",h.Phone+"",h.PieChart+"",h.Pill+"",h.Pin+"",h.Pistol+"",h.PivotTable+"",h.Pivot+"",h.Play+"",h.Playbook+"",h.Plus+"",h.PolygonFilter+"",h.Popout+"",h.Power+"",h.PredictiveAnalysis+"",h.Prescription+"",h.Presentation+"",h.Print+"",h.Projects+"",h.Properties+"",h.Property+"",h.PublishFunction+"",h.Pulse+"",h.Rain+"",h.Random+"",h.RangeRing+"",h.Record+"",h.RectHeight+"",h.RectWidth+"",h.Rectangle+"",h.Redo+"",h.RefreshOff+"",h.Refresh+"",h.Regex+"",h.RegressionChart+"",h.RemoveColumnLeft+"",h.RemoveColumnRight+"",h.RemoveColumn+"",h.RemoveRowBottom+"",h.RemoveRowTop+"",h.Remove+"",h.Repeat+"",h.Reset+"",h.Resolve+"",h.Rig+"",h.RightJoin+"",h.Ring+"",h.RocketSlant+"",h.Rocket+"",h.RootFolder+"",h.RotateCcw+"",h.RotateCw+"",h.RotateDocument+"",h.RotatePage+"",h.Route+"",h.RunHistory+"",h.Satellite+"",h.Saved+"",h.ScatterPlot+"",h.SearchAround+"",h.SearchTemplate+"",h.SearchText+"",h.Search+"",h.SegmentedControl+"",h.Select+"",h.SelectionBoxAdd+"",h.SelectionBoxEdit+"",h.SelectionBoxRemove+"",h.SelectionBox+"",h.Selection+"",h.SendBackward+"",h.SendMessage+"",h.SendToGraph+"",h.SendToMap+"",h.SendTo+"",h.Sensor+"",h.SeriesAdd+"",h.SeriesConfiguration+"",h.SeriesDerived+"",h.SeriesFiltered+"",h.SeriesSearch+"",h.ServerInstall+"",h.Server+"",h.Settings+"",h.Shapes+"",h.Share+"",h.SharedFilter+"",h.Shield+"",h.Ship+"",h.Shop+"",h.ShoppingCart+"",h.ShortenText+"",h.SignalSearch+"",h.SimCard+"",h.Slash+"",h.SmallCross+"",h.SmallInfoSign+"",h.SmallMinus+"",h.SmallPlus+"",h.SmallSquare+"",h.SmallTick+"",h.Snowflake+"",h.SoccerBall+"",h.SocialMedia+"",h.SortAlphabeticalDesc+"",h.SortAlphabetical+"",h.SortAsc+"",h.SortDesc+"",h.SortNumericalDesc+"",h.SortNumerical+"",h.Sort+"",h.SpellCheck+"",h.Spin+"",h.SplitColumns+"",h.SportsStadium+"",h.Square+"",h.StackedChart+"",h.StadiumGeometry+"",h.StarEmpty+"",h.Star+"",h.StepBackward+"",h.StepChart+"",h.StepForward+"",h.Stop+"",h.Stopwatch+"",h.Strikethrough+"",h.Style+"",h.Subscript+"",h.SubtractRightJoin+"",h.Superscript+"",h.SwapHorizontal+"",h.SwapVertical+"",h.Sweep+"",h.Switch+"",h.SymbolCircle+"",h.SymbolCross+"",h.SymbolDiamond+"",h.SymbolRectangle+"",h.SymbolSquare+"",h.SymbolTriangleDown+"",h.SymbolTriangleUp+"",h.Syringe+"",h.TableSync+"",h.TagAdd+"",h.TagPromote+"",h.TagRefresh+"",h.TagUndo+"",h.Tag+"",h.Tags+"",h.TakeAction+"",h.Tank+"",h.Target+"",h.Taxi+"",h.Team+"",h.Temperature+"",h.TextHighlight+"",h.ThAdd+"",h.ThDerived+"",h.ThDisconnect+"",h.ThFiltered+"",h.ThListAdd+"",h.ThList+"",h.ThVirtualAdd+"",h.ThVirtual+"",h.Th+"",h.ThirdParty+"",h.ThumbsDown+"",h.ThumbsUp+"",h.TickCircle+"",h.Tick+"",h.Time+"",h.TimelineAreaChart+"",h.TimelineBarChart+"",h.TimelineEvents+"",h.TimelineLineChart+"",h.Tint+"",h.Torch+"",h.Tractor+"",h.Train+"",h.Translate+"",h.Trash+"",h.Tree+"",h.TrendingDown+"",h.TrendingUp+"",h.Trophy+"",h.Truck+"",h.TwoColumns+"",h.Unarchive+"",h.Underline+"",h.Undo+"",h.UngroupObjects+"",h.UnknownVehicle+"",h.Unlink+"",h.Unlock+"",h.Unpin+"",h.Unresolve+"",h.Updated+"",h.Upload+"",h.User+"",h.VariableLayer+"",h.Variable+"",h.Vector+"",h.VerticalBarChartAsc+"",h.VerticalBarChartDesc+"",h.VerticalDistribution+"",h.VerticalInbetween+"",h.Video+"",h.Virus+"",h.VolumeDown+"",h.VolumeOff+"",h.VolumeUp+"",h.Walk+"",h.WarningSign+"",h.WaterfallChart+"",h.Waves+"",h.WidgetButton+"",h.WidgetFooter+"",h.WidgetHeader+"",h.Widget+"",h.Wind+"",h.Won+"",h.WrapLines+"",h.WrenchRedo+"",h.WrenchSnooze+"",h.WrenchTime+"",h.Wrench+"",h.Yen+"",h.ZoomIn+"",h.ZoomOut+"",h.ZoomToFit+"";const b0={},P0={};for(const i of Object.values(h))b0[SS(i)]=i,P0[MS(i).toUpperCase()]=i;const L0={...b0,...P0},wS=new Set(Object.values(L0));function AS(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}async function CS(i,e){const t=AS("development")&&typeof performance<"u";let a;if(t&&(a=performance.now(),console.info(`Started '${i}'...`)),await e(),t){const s=Math.round(performance.now()-a);console.info(`Finished '${i}' in ${s}ms`)}}async function RS(i){const{loader:e=ss.defaultLoader}=i;return typeof e=="function"?e:e==="all"?(await ig(async()=>{const{allPathsLoader:t}=await import("./allPathsLoader-CNVX2dm-.js");return{allPathsLoader:t}},[],import.meta.url)).allPathsLoader:(await ig(async()=>{const{splitPathsBySizeLoader:t}=await import("./splitPathsBySizeLoader-Csa0spEA.js");return{splitPathsBySizeLoader:t}},[],import.meta.url)).splitPathsBySizeLoader}class co{constructor(){mt(this,"defaultLoader","split-by-size");mt(this,"loadedIconPaths16",new Map);mt(this,"loadedIconPaths20",new Map)}static setLoaderOptions(e){e.loader!==void 0&&(ss.defaultLoader=e.loader)}static async load(e,t,a){Array.isArray(e)||(e=[e]),await Promise.all(e.map(s=>this.loadImpl(s,t,a)))}static async loadAll(e){const t=Object.values(L0);CS("[Blueprint] loading all icons",async()=>{await Promise.all([this.load(t,jt.STANDARD,e),this.load(t,jt.LARGE,e)])})}static getPaths(e,t){return this.isValidIconName(e)?(t<jt.LARGE?ss.loadedIconPaths16:ss.loadedIconPaths20).get(e):void 0}static async loadImpl(e,t,a={}){if(!this.isValidIconName(e)){console.error(`[Blueprint] Unknown icon '${e}'`);return}const s=t<jt.LARGE?ss.loadedIconPaths16:ss.loadedIconPaths20;if(s.has(e))return;const l=await RS(a);try{const u=t<jt.LARGE?jt.STANDARD:jt.LARGE,d=await l(e,u);s.set(e,d)}catch(u){console.error(`[Blueprint] Unable to load ${t}px icon '${e}'`,u)}}static isValidIconName(e){return wS.has(e)}}const ss=new co,bS="bp6",rg=`${bS}-icon`,ag=new Map;function PS(i){const e=ag.get(i)??0;return ag.set(i,e+1),`${i}-${e}`}const wo=Ve.forwardRef((i,e)=>{const{children:t,className:a,color:s,htmlTitle:l,iconName:u,size:d=jt.STANDARD,svgProps:m,tagName:p="span",title:v,...x}=i,M=d>=jt.LARGE?jt.LARGE:jt.STANDARD,w=`0 0 ${M} ${M}`,b=PS("iconTitle"),y={fill:s,height:d,role:"img",viewBox:w,width:d,...m};return p===null?me.jsxs("svg",{"aria-labelledby":v?b:void 0,"data-icon":u,ref:e,...y,...x,className:An(a,m==null?void 0:m.className),children:[v&&me.jsx("title",{id:b,children:v}),t]}):Ve.createElement(p,{"aria-hidden":v?void 0:!0,...x,className:An(rg,`${rg}-${u}`,a),ref:e,title:l},me.jsxs("svg",{"data-icon":u,...y,className:m==null?void 0:m.className,children:[v&&me.jsx("title",{children:v}),t]}))});wo.displayName="Blueprint6.SVGIconContainer";const LS=["M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33"],DS=["M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63"],D0=Ve.forwardRef((i,e)=>{const a=(i.size??jt.STANDARD)>=jt.LARGE?DS:LS;return me.jsx(wo,{iconName:"caret-down",ref:e,...i,children:a.map((s,l)=>me.jsx("path",{d:s,fillRule:"evenodd"},l))})});D0.displayName="Blueprint6.Icon.CaretDownIcon";const NS=["M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7m6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9"],US=["M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1m10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1"],N0=Ve.forwardRef((i,e)=>{const a=(i.size??jt.STANDARD)>=jt.LARGE?US:NS;return me.jsx(wo,{iconName:"double-caret-vertical",ref:e,...i,children:a.map((s,l)=>me.jsx("path",{d:s,fillRule:"evenodd"},l))})});N0.displayName="Blueprint6.Icon.DoubleCaretVerticalIcon";const FS=["m9.41 8 2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],OS=["m11.41 10 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],U0=Ve.forwardRef((i,e)=>{const a=(i.size??jt.STANDARD)>=jt.LARGE?OS:FS;return me.jsx(wo,{iconName:"small-cross",ref:e,...i,children:a.map((s,l)=>me.jsx("path",{d:s,fillRule:"evenodd"},l))})});U0.displayName="Blueprint6.Icon.SmallCrossIcon";const _o=Ve.forwardRef((i,e)=>{const{autoLoad:t=!0,className:a,color:s,icon:l,intent:u,tagName:d="span",svgProps:m,title:p,htmlTitle:v,...x}=i,_=i.size??jt.STANDARD,[M,w]=Ve.useState(()=>typeof l=="string"?co.getPaths(l,_):void 0);if(Ve.useEffect(()=>{let b=!1;if(typeof l=="string"){const y=co.getPaths(l,_);y!==void 0?w(y):t?co.load(l,_).then(()=>{b||w(co.getPaths(l,_))}).catch(S=>{console.error(`[Blueprint] Icon '${l}' (${_}px) could not be loaded.`,S)}):console.error(`[Blueprint] Icon '${l}' (${_}px) is not loaded yet and autoLoad={false}, did you call Icons.load('${l}', ${_})?`)}return()=>{b=!0}},[t,l,_]),l==null||typeof l=="boolean")return null;if(typeof l!="string"){if(Ve.isValidElement(l)){const b=An(l.props.className,a,Ni(u));if(aS(l)){const y={...us(x),className:b},S=l.props.size??i.size;S!=null&&(y.size=S);const D=l.props.color??s;return D!=null&&(y.color=D),Ve.cloneElement(l,y)}return Ve.cloneElement(l,{className:b})}return l}if(M==null){const b=_===jt.STANDARD?Wx:_===jt.LARGE?Xx:void 0;return Ve.createElement(d||"span",{"aria-hidden":p?void 0:!0,...us(x),className:An($f,b,$x(l),Ni(u),a),"data-icon":l,ref:e,title:v})}else{const b=M.map((y,S)=>me.jsx("path",{d:y,fillRule:"evenodd"},S));return me.jsx(wo,{children:b,className:An(Ni(u),a),color:s,htmlTitle:v,iconName:l,ref:e,size:_,svgProps:m,tagName:d,title:p,...us(x)})}});_o.displayName=`${yn}.Icon`;var _a;(function(i){i[i.SMALL=20]="SMALL",i[i.STANDARD=50]="STANDARD",i[i.LARGE=100]="LARGE"})(_a||(_a={}));const zr=45,sg=`M 50,50 m 0,-${zr} a ${zr},${zr} 0 1 1 0,${zr*2} a ${zr},${zr} 0 1 1 0,-${zr*2}`,to=280,IS=10,kS=4,zS=16,F0=i=>{const{className:e="",intent:t,value:a,tagName:s="div",size:l,...u}=i;pS(()=>{const x=l!=null,_=e.indexOf(mc)>=0||e.indexOf(hs)>=0;x&&_&&console.warn(nS)},[e,l]);const d=HS(l,e),m=Math.min(zS,kS*_a.LARGE/d),p=to-to*(a==null?.25:Yf(a,0,1)),v=An(wc,Ni(t),{[Vx]:a!=null},e);return Ve.createElement(s,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a===void 0?void 0:a*100,className:v,role:"progressbar",...u},Ve.createElement(s,{className:zx},me.jsxs("svg",{width:d,height:d,strokeWidth:m.toFixed(2),viewBox:VS(m),children:[me.jsx("path",{className:Gx,d:sg}),me.jsx("path",{className:Hx,d:sg,pathLength:to,strokeDasharray:`${to} ${to}`,strokeDashoffset:p})]})))};F0.displayName=`${yn}.Spinner`;const HS=(i,e)=>i==null?e.indexOf(mc)>=0?_a.SMALL:e.indexOf(hs)>=0?_a.LARGE:_a.STANDARD:Math.max(IS,i),VS=i=>{const e=zr+i/2,t=(50-e).toFixed(2),a=(e*2).toFixed(2);return`${t} ${t} ${a} ${a}`},GS=Yx()?Ve.useLayoutEffect:Ve.useEffect,Zf=Ve.forwardRef(({children:i,tagName:e="div",title:t,className:a,ellipsize:s=!1,...l},u)=>{const d=Ve.useRef(),m=Ve.useMemo(()=>Kf(d,u),[u]),[p,v]=Ve.useState(""),[x,_]=Ve.useState();return GS(()=>{var M;((M=d.current)==null?void 0:M.textContent)!=null&&(_(s&&d.current.scrollWidth>d.current.clientWidth),v(d.current.textContent))},[d,i,s]),Ve.createElement(e,{...l,className:An({[Ax]:s},a),ref:m,title:t??(x?p:void 0)},i)});Zf.displayName=`${yn}.Text`;const Vi=Ve.forwardRef((i,e)=>{const t=O0(i,e);return me.jsx("button",{type:"button",...us(i),...t,children:I0(i)})});Vi.displayName=`${yn}.Button`;const BS=Ve.forwardRef((i,e)=>{const{href:t}=i,a=O0(i,e,{defaultTabIndex:0,disabledTabIndex:-1});return me.jsx("a",{role:"button",...us(i),...a,"aria-disabled":a.disabled,href:a.disabled?void 0:t,children:I0(i)})});BS.displayName=`${yn}.AnchorButton`;function O0(i,e,t){const{alignText:a,fill:s,large:l,loading:u=!1,minimal:d,outlined:m,size:p="medium",small:v,variant:x="solid"}=i,_=i.disabled||u,[M,w]=C0(!_,i,e,t),b=An(Tc,{[Wf]:M,[Ec]:_,[go]:s,[Tx]:u},qf(a),Ni(i.intent),Ac(p,{large:l,small:v}),E0(x,{minimal:d,outlined:m}),i.className);return{...w,className:b,disabled:_}}function I0(i){const{children:e,ellipsizeText:t,endIcon:a,icon:s,loading:l,rightIcon:u,text:d,textClassName:m}=i,p=!gc(d)||!gc(e);return me.jsxs(me.Fragment,{children:[l&&me.jsx(F0,{className:Rx,size:_a.SMALL}),me.jsx(_o,{icon:s}),p&&me.jsxs(Zf,{className:An(bx,m),ellipsize:t,tagName:"span",children:[d,e]}),me.jsx(_o,{icon:a??u})]})}const Zd=Ve.forwardRef((i,e)=>{const{alignText:t,className:a,fill:s,minimal:l,outlined:u,large:d,size:m="medium",variant:p="solid",vertical:v,...x}=i,_=An(Cx,{[go]:s,[v0]:v},qf(t),Ac(m,{large:d}),E0(p,{minimal:l,outlined:u}),a);return me.jsx("div",{...x,ref:e,className:_,children:i.children})});Zd.displayName=`${yn}.ButtonGroup`;const Cc=Ve.forwardRef((i,e)=>{const{alignIndicator:t,children:a,className:s,indicatorChildren:l,inline:u,inputRef:d,label:m,labelElement:p,large:v,size:x="medium",style:_,type:M,typeClassName:w,tagName:b="label",...y}=i,S=An(Xf,w,{[Ec]:y.disabled,[Mx]:u},qf(t),Ac(x,{large:v}),s);return Ve.createElement(b,{className:S,ref:e,style:_},me.jsx("input",{className:Lx,...y,ref:d,type:M}),me.jsx("span",{className:_0,children:l}),m,p,a)});Cc.displayName=`${yn}.Control`;const k0=Ve.forwardRef((i,e)=>{const{innerLabelChecked:t,innerLabel:a,...s}=i,l=a||t?[me.jsx("div",{className:jm,children:me.jsx("div",{className:Zm,children:t||a})},"checked"),me.jsx("div",{className:jm,children:me.jsx("div",{className:Zm,children:a})},"unchecked")]:null;return me.jsx(Cc,{...s,indicatorChildren:l,ref:e,type:"checkbox",typeClassName:x0})});k0.displayName=`${yn}.Switch`;const WS=Ve.forwardRef((i,e)=>me.jsx(Cc,{...i,ref:e,type:"radio",typeClassName:Nx}));WS.displayName=`${yn}.Radio`;const z0=Ve.forwardRef((i,e)=>{const{defaultIndeterminate:t,indeterminate:a,onChange:s,...l}=i,[u,d]=Ve.useState(a||t||!1),m=Ve.useRef(null),p=Kf(i.inputRef,m),v=Ve.useCallback(x=>{a===void 0&&d(x.target.indeterminate),s==null||s(x)},[a,s]);return Ve.useEffect(()=>{a!==void 0&&d(a)},[a]),Ve.useEffect(()=>{m.current!=null&&(m.current.indeterminate=u)},[m,u]),me.jsx(Cc,{...l,inputRef:p,onChange:v,ref:e,type:"checkbox",typeClassName:Dx})});z0.displayName=`${yn}.Checkbox`;const ac=Ve.forwardRef((i,e)=>{const{className:t,children:a,disabled:s,fill:l,iconName:u="double-caret-vertical",iconProps:d,large:m,minimal:p,options:v=[],value:x,..._}=i,M=An(Px,{[Ec]:s,[go]:l,[hs]:m,[pc]:p},t),w="Open dropdown",b=u==="double-caret-vertical"?me.jsx(N0,{title:w,...d}):me.jsx(D0,{title:w,...d}),y=v.map(S=>{const D=typeof S=="object"?S:{value:S};return Ve.createElement("option",{...D,key:D.value,children:D.label||D.value})});return me.jsxs("div",{className:M,children:[me.jsxs("select",{disabled:s,ref:e,value:x,..._,multiple:!1,children:[y,a]}),b]})});ac.displayName=`${yn}.HTMLSelect`;const og={START:"start",END:"end"},H0={PUSH:"push",NONE:"none"};function sc(i){return`${(i*100).toFixed(2)}%`}function lg(i,e,t,a){const s=e<t?1:-1;for(let l=e;l!==t+s;l+=s)i[l]=a}function XS(i,e){if(i.length===0)return;let t=i[0],a=e(t);for(let s=1;s<i.length;s++){const l=i[s],u=e(l);u<a&&(t=l,a=u)}return t}const $S=["max","min","stepSize","tickSize","value"];class V0 extends jf{constructor(){super(...arguments);mt(this,"state",{isMoving:!1});mt(this,"handleElement",null);mt(this,"refHandlers",{handle:t=>this.handleElement=t});mt(this,"beginHandleMovement",t=>{document.addEventListener("mousemove",this.handleHandleMovement),document.addEventListener("mouseup",this.endHandleMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.mouseEventClientOffset(t)))});mt(this,"beginHandleTouchMovement",t=>{document.addEventListener("touchmove",this.handleHandleTouchMovement),document.addEventListener("touchend",this.endHandleTouchMovement),document.addEventListener("touchcancel",this.endHandleTouchMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.touchEventClientOffset(t)))});mt(this,"getStyleProperties",()=>{if(this.handleElement==null)return{};const{min:t=0,tickSizeRatio:a,value:s,vertical:l}=this.props,{handleMidpoint:u}=this.getHandleMidpointAndOffset(this.handleElement,!0),d=(s-t)*a,m=`calc(${sc(d)} - ${u}px)`;return l?{bottom:m}:{left:m}});mt(this,"endHandleMovement",t=>{this.handleMoveEndedAt(this.mouseEventClientOffset(t))});mt(this,"endHandleTouchMovement",t=>{this.handleMoveEndedAt(this.touchEventClientOffset(t))});mt(this,"handleMoveEndedAt",t=>{var s,l;this.removeDocumentEventListeners(),this.setState({isMoving:!1});const a=this.changeValue(this.clientToValue(t));(l=(s=this.props).onRelease)==null||l.call(s,a)});mt(this,"handleHandleMovement",t=>{this.handleMovedTo(this.mouseEventClientOffset(t))});mt(this,"handleHandleTouchMovement",t=>{this.handleMovedTo(this.touchEventClientOffset(t))});mt(this,"handleMovedTo",t=>{this.state.isMoving&&!this.props.disabled&&this.changeValue(this.clientToValue(t))});mt(this,"handleKeyDown",t=>{const{stepSize:a,value:s}=this.props,l=lS(t,["ArrowLeft","ArrowDown"],["ArrowRight","ArrowUp"]);l!==void 0&&(this.changeValue(s+a*l),t.preventDefault())});mt(this,"handleKeyUp",t=>{var a,s;oS(t)&&((s=(a=this.props).onRelease)==null||s.call(a,this.props.value))})}componentDidMount(){this.forceUpdate()}render(){const{className:t,disabled:a,label:s,min:l,max:u,value:d,vertical:m,htmlProps:p}=this.props,{isMoving:v}=this.state;return me.jsx("span",{role:"slider",tabIndex:0,...p,className:An(S0,{[Wf]:v},t),onKeyDown:a?void 0:this.handleKeyDown,onKeyUp:a?void 0:this.handleKeyUp,onMouseDown:a?void 0:this.beginHandleMovement,onTouchStart:a?void 0:this.beginHandleTouchMovement,ref:this.refHandlers.handle,style:this.getStyleProperties(),"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":d,"aria-disabled":a,"aria-orientation":m?"vertical":"horizontal",children:s==null?null:me.jsx("span",{className:y0,children:s})})}componentWillUnmount(){this.removeDocumentEventListeners()}clientToValue(t){const{stepSize:a,tickSize:s,value:l,vertical:u}=this.props;if(this.handleElement==null)return l;const d=u?window.innerHeight-t:t,m=this.getHandleElementCenterPixel(this.handleElement),p=d-m;return isNaN(p)?l:l+Math.round(p/(s*a))*a}mouseEventClientOffset(t){return this.props.vertical?t.clientY:t.clientX}touchEventClientOffset(t){const a=t.changedTouches[0];return this.props.vertical?a.clientY:a.clientX}validateProps(t){for(const a of $S)if(typeof t[a]!="number")throw new Error(`[Blueprint] <Handle> requires number value for ${a} prop`)}changeValue(t,a=this.props.onChange){return t=this.clamp(t),!isNaN(t)&&this.props.value!==t&&(a==null||a(t)),t}clamp(t){return Yf(t,this.props.min,this.props.max)}getHandleElementCenterPixel(t){const{handleMidpoint:a,handleOffset:s}=this.getHandleMidpointAndOffset(t);return s+a}getHandleMidpointAndOffset(t,a=!1){if(t==null)return{handleMidpoint:0,handleOffset:0};const{vertical:s}=this.props,l=t.getBoundingClientRect();l.width=t.offsetWidth,l.height=t.offsetHeight;const u=s?a?"width":"height":a?"height":"width",d=s?window.innerHeight-(l.top+l[u]):l.left;return{handleMidpoint:l[u]/2,handleOffset:d}}removeDocumentEventListeners(){document.removeEventListener("mousemove",this.handleHandleMovement),document.removeEventListener("mouseup",this.endHandleMovement),document.removeEventListener("touchmove",this.handleHandleTouchMovement),document.removeEventListener("touchend",this.endHandleTouchMovement),document.removeEventListener("touchcancel",this.endHandleTouchMovement)}}mt(V0,"displayName",`${yn}.SliderHandle`);const ps=()=>null;ps.displayName=`${yn}.MultiSliderHandle`;const Hr=class Hr extends jf{constructor(){super(...arguments);mt(this,"state",{labelPrecision:qS(this.props),tickSize:0,tickSizeRatio:0});mt(this,"handleElements",[]);mt(this,"trackElement",null);mt(this,"addHandleRef",t=>{t!=null&&this.handleElements.push(t)});mt(this,"maybeHandleTrackClick",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.mouseEventClientOffset(t));a&&a.beginHandleMovement(t)}});mt(this,"maybeHandleTrackTouch",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.touchEventClientOffset(t));a&&a.beginHandleTouchMovement(t)}});mt(this,"canHandleTrackEvent",t=>{const a=t.target;return!this.props.disabled&&a.closest(`.${S0}`)==null});mt(this,"getHandlerForIndex",(t,a)=>s=>{a==null||a(this.getNewHandleValues(s,t))});mt(this,"handleChange",t=>{var l,u;const a=ua(this.props),s=a.map(d=>d.value);qx(t,s)||((u=(l=this.props).onChange)==null||u.call(l,t),a.forEach((d,m)=>{var p;s[m]!==t[m]&&((p=d.onChange)==null||p.call(d,t[m]))}))});mt(this,"handleRelease",t=>{var s,l;const a=ua(this.props);(l=(s=this.props).onRelease)==null||l.call(s,t),a.forEach((u,d)=>{var m;(m=u.onRelease)==null||m.call(u,t[d])})})}static getDerivedStateFromProps(t){return{labelPrecision:Hr.getLabelPrecision(t)}}static getLabelPrecision({labelPrecision:t,stepSize:a}){return t??w0(a)}getSnapshotBeforeUpdate(t){const a=ua(t);return ua(this.props).length!==a.length&&(this.handleElements=[]),null}render(){const t=An(xa,{[Ec]:this.props.disabled,[`${xa}-unlabeled`]:this.props.labelRenderer===!1,[v0]:this.props.vertical},this.props.className);return me.jsxs("div",{className:t,onMouseDown:this.maybeHandleTrackClick,onTouchStart:this.maybeHandleTrackTouch,children:[me.jsx("div",{className:Fx,ref:a=>this.trackElement=a,children:this.renderTracks()}),me.jsx("div",{className:Ux,children:this.renderLabels()}),this.renderHandles()]})}componentDidMount(){this.updateTickSize()}componentDidUpdate(t,a){super.componentDidUpdate(t,a),(t.min!==this.props.min||t.max!==this.props.max||t.vertical!==this.props.vertical)&&this.updateTickSize()}validateProps(t){if(t.stepSize<=0)throw new Error(jx);if(t.labelStepSize!==void 0&&t.labelValues!==void 0)throw new Error(tS);if(t.labelStepSize!==void 0&&t.labelStepSize<=0)throw new Error(Zx);if(t.min!==void 0&&!isFinite(t.min))throw new Error(Jx);if(t.max!==void 0&&!isFinite(t.max))throw new Error(Qx);let a=!1;if(Ve.Children.forEach(t.children,s=>{s&&!A0(s,ps)&&(a=!0)}),a)throw new Error(eS)}formatLabel(t,a=!1){const{labelRenderer:s}=this.props;if(s!==!1)return T0(s)?s(t,{isHandleTooltip:a}):t.toFixed(this.state.labelPrecision)}renderLabels(){if(this.props.labelRenderer===!1)return null;const t=this.getLabelValues(),{max:a,min:s}=this.props;return t.map((u,d)=>{const m=sc((u-s)/(a-s)),p=this.props.vertical?{bottom:m}:{left:m};return me.jsx("div",{className:y0,style:p,children:this.formatLabel(u)},d)})}renderTracks(){const t=G0(this.props);t.push({value:this.props.max});let a={value:this.props.min};const s=[];for(let l=0;l<t.length;l++){const u=t[l];s.push(this.renderTrackFill(l,a,u)),a=u}return s}renderTrackFill(t,a,s){const[l,u]=[this.getOffsetRatio(a.value),this.getOffsetRatio(s.value)].sort((_,M)=>_-M),d=sc(l),m=sc(1-u),v={...this.props.vertical?{bottom:d,left:0,top:m}:{left:d,right:m,top:0},...a.trackStyleAfter||s.trackStyleBefore||{}},x=An(Ox,Ni(this.getTrackIntent(a,s)));return me.jsx("div",{className:x,style:v},`track-${t}`)}renderHandles(){const{disabled:t,max:a,min:s,stepSize:l,vertical:u}=this.props,d=ua(this.props);return d.length===0?null:d.map(({value:m,type:p,className:v,htmlProps:x},_)=>me.jsx(V0,{htmlProps:x,className:An({[Ix]:p===og.START,[kx]:p===og.END},v),disabled:t,label:this.formatLabel(m,!0),max:a,min:s,onChange:this.getHandlerForIndex(_,this.handleChange),onRelease:this.getHandlerForIndex(_,this.handleRelease),ref:this.addHandleRef,stepSize:l,tickSize:this.state.tickSize,tickSizeRatio:this.state.tickSizeRatio,value:m,vertical:u},`${_}-${d.length}`))}nearestHandleForValue(t,a){return XS(t,s=>{const l=a(s),u=s.clientToValue(l),d=s.props.value;return Math.abs(u-d)})}getNewHandleValues(t,a){const l=ua(this.props).map(p=>p.value),u=l.slice();u[a]=t,u.sort((p,v)=>p-v);const d=u.indexOf(t),m=this.findFirstLockedHandleIndex(a,d);if(m===-1)lg(u,a,d,t);else{const p=l[m];return lg(l,a,m,p),l}return u}findFirstLockedHandleIndex(t,a){const s=t<a?1:-1,l=ua(this.props);for(let u=t+s;u!==a+s;u+=s)if(l[u].interactionKind!==H0.PUSH)return u;return-1}getLabelValues(){const{labelStepSize:t,labelValues:a,min:s,max:l}=this.props;let u=[];if(a!==void 0)u=a.slice();else for(let d=s;d<l||iS(d,l);d+=t??1)u.push(d);return u}getOffsetRatio(t){return Yf((t-this.props.min)*this.state.tickSizeRatio,0,1)}getTrackIntent(t,a){return this.props.showTrackFill?t.intentAfter!==void 0?t.intentAfter:a!==void 0&&a.intentBefore!==void 0?a.intentBefore:this.props.defaultTrackIntent:Gr.NONE}updateTickSize(){if(this.trackElement!=null){const t=this.props.vertical?this.trackElement.clientHeight:this.trackElement.clientWidth,a=1/(this.props.max-this.props.min),s=t*a;this.setState({tickSize:s,tickSizeRatio:a})}}};mt(Hr,"defaultSliderProps",{disabled:!1,max:10,min:0,showTrackFill:!0,stepSize:1,vertical:!1}),mt(Hr,"defaultProps",{...Hr.defaultSliderProps,defaultTrackIntent:Gr.NONE}),mt(Hr,"displayName",`${yn}.MultiSlider`),mt(Hr,"Handle",ps);let xo=Hr;function qS({labelPrecision:i,stepSize:e=xo.defaultSliderProps.stepSize}){return i??w0(e)}function ua(i){return G0(i,e=>e.interactionKind!==H0.NONE)}function G0({children:i},e=()=>!0){const t=Ve.Children.map(i,s=>A0(s,ps)&&e(s.props)?s.props:null);let a=t??[];return a=a.filter(s=>s!==null),a.sort((s,l)=>s.value-l.value),a}class po extends jf{render(){const{initialValue:e,intent:t,value:a,onChange:s,onRelease:l,handleHtmlProps:u,...d}=this.props;return me.jsxs(xo,{...d,children:[me.jsx(ps,{value:a,intentAfter:a<e?t:void 0,intentBefore:a>e?t:void 0,onChange:s,onRelease:l,htmlProps:u}),me.jsx(ps,{value:e,interactionKind:"none"})]})}}mt(po,"defaultProps",{...xo.defaultSliderProps,initialValue:0,intent:Gr.PRIMARY,value:0}),mt(po,"displayName",`${yn}.Slider`);const B0=i=>{const{className:e,large:t,onRemove:a,size:s,tabIndex:l}=i,u=t||s==="large"||(e==null?void 0:e.includes(hs)),d=Ve.useCallback(m=>{a==null||a(m,i)},[a,i]);return me.jsx("button",{"aria-label":"Remove tag",type:"button",className:Bx,onClick:d,tabIndex:l,children:me.jsx(U0,{size:u?jt.LARGE:jt.STANDARD})})};B0.displayName=`${yn}.TagRemoveButton`;const W0=Ve.forwardRef((i,e)=>{const{children:t,className:a,endIcon:s,fill:l=!1,icon:u,intent:d,interactive:m,large:p=!1,minimal:v=!1,multiline:x,onRemove:_,rightIcon:M,round:w=!1,size:b="medium",tabIndex:y=0,htmlTitle:S,...D}=i,z=T0(_),R=m??D.onClick!=null,[L,P]=C0(R,i,e,{defaultTabIndex:0,disabledTabIndex:void 0}),I=An(M0,Ni(d),Ac(b,{large:p}),{[Wf]:L,[go]:l,[Ex]:R,[pc]:v,[wx]:w},a);return me.jsxs("span",{...us(D),...P,className:I,role:R?"button":void 0,children:[me.jsx(_o,{icon:u}),!gc(t)&&me.jsx(Zf,{className:go,ellipsize:!x,tagName:"span",title:S,children:t}),me.jsx(_o,{icon:s??M}),z&&me.jsx(B0,{...i})]})});W0.displayName=`${yn}.Tag`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Jf="186",fr={ROTATE:0,DOLLY:1,PAN:2},ls={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},YS=0,cg=1,KS=2,oc=1,jS=2,uo=3,Sa=0,Kn=1,Pi=2,hr=0,mo=1,ug=2,dg=3,fg=4,ZS=5,os=100,JS=101,QS=102,ey=103,ty=104,ny=200,iy=201,ry=202,ay=203,X0=204,$0=205,sy=206,oy=207,ly=208,cy=209,uy=210,dy=211,fy=212,hy=213,py=214,Jd=0,Qd=1,ef=2,So=3,tf=4,nf=5,rf=6,af=7,q0=0,my=1,gy=2,Xi=0,Y0=1,K0=2,j0=3,Z0=4,J0=5,Q0=6,ev=7,tv=300,ya=301,ms=302,md=303,gd=304,Rc=306,sf=1e3,dr=1001,of=1002,wn=1003,vy=1004,Fl=1005,Fn=1006,vd=1007,ga=1008,ri=1009,nv=1010,iv=1011,yo=1012,Qf=1013,$i=1014,Bi=1015,qi=1016,eh=1017,th=1018,Mo=1020,rv=35902,av=35899,sv=1021,ov=1022,Di=1023,mr=1026,va=1027,lv=1028,nh=1029,Ma=1030,ih=1031,rh=1033,lc=33776,cc=33777,uc=33778,dc=33779,lf=35840,cf=35841,uf=35842,df=35843,ff=36196,hf=37492,pf=37496,mf=37488,gf=37489,vc=37490,vf=37491,_f=37808,xf=37809,Sf=37810,yf=37811,Mf=37812,Ef=37813,Tf=37814,wf=37815,Af=37816,Cf=37817,Rf=37818,bf=37819,Pf=37820,Lf=37821,Df=36492,Nf=36494,Uf=36495,Ff=36283,Of=36284,_c=36285,If=36286,_y=3200,kf=0,xy=1,Vr="",ii="srgb",xc="srgb-linear",Sc="linear",Gt="srgb",_d=7680,Sy=519,yy=512,My=513,Ey=514,ah=515,Ty=516,wy=517,sh=518,Ay=519,Cy=35044,hg="300 es",Wi=2e3,Eo=2001;function Ry(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function yc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function by(){const i=yc("canvas");return i.style.display="block",i}const pg={};function mg(...i){const e="THREE."+i.shift();console.log(e,...i)}function cv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function ut(...i){i=cv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function Ut(...i){i=cv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function ds(...i){const e=i.join(" ");e in pg||(pg[e]=!0,ut(...i))}function Py(i,e,t){return new Promise(function(a,s){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const Ly={[Jd]:Qd,[ef]:rf,[tf]:af,[So]:nf,[Qd]:Jd,[rf]:ef,[af]:tf,[nf]:So};class $r{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const Nn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],fc=Math.PI/180,zf=180/Math.PI;function Ao(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(Nn[i&255]+Nn[i>>8&255]+Nn[i>>16&255]+Nn[i>>24&255]+"-"+Nn[e&255]+Nn[e>>8&255]+"-"+Nn[e>>16&15|64]+Nn[e>>24&255]+"-"+Nn[t&63|128]+Nn[t>>8&255]+"-"+Nn[t>>16&255]+Nn[t>>24&255]+Nn[a&255]+Nn[a>>8&255]+Nn[a>>16&255]+Nn[a>>24&255]).toLowerCase()}function Et(i,e,t){return Math.max(e,Math.min(t,i))}function Dy(i,e){return(i%e+e)%e}function xd(i,e,t){return(1-t)*i+t*e}function no(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function qn(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const Ny={DEG2RAD:fc},_h=class _h{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};_h.prototype.isVector2=!0;let dt=_h;class Br{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,d){let m=a[s+0],p=a[s+1],v=a[s+2],x=a[s+3],_=l[u+0],M=l[u+1],w=l[u+2],b=l[u+3];if(x!==b||m!==_||p!==M||v!==w){let y=m*_+p*M+v*w+x*b;y<0&&(_=-_,M=-M,w=-w,b=-b,y=-y);let S=1-d;if(y<.9995){const D=Math.acos(y),z=Math.sin(D);S=Math.sin(S*D)/z,d=Math.sin(d*D)/z,m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+b*d}else{m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+b*d;const D=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=D,p*=D,v*=D,x*=D}}e[t]=m,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,a,s,l,u){const d=a[s],m=a[s+1],p=a[s+2],v=a[s+3],x=l[u],_=l[u+1],M=l[u+2],w=l[u+3];return e[t]=d*w+v*x+m*M-p*_,e[t+1]=m*w+v*_+p*x-d*M,e[t+2]=p*w+v*M+d*_-m*x,e[t+3]=v*w-d*x-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),v=d(s/2),x=d(l/2),_=m(a/2),M=m(s/2),w=m(l/2);switch(u){case"XYZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"YXZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"ZXY":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"ZYX":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"YZX":this._x=_*v*x+p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x-_*M*w;break;case"XZY":this._x=_*v*x-p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x+_*M*w;break;default:ut("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],d=t[5],m=t[9],p=t[2],v=t[6],x=t[10],_=a+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-m)*M,this._y=(l-p)*M,this._z=(u-s)*M}else if(a>d&&a>x){const M=2*Math.sqrt(1+a-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(s+u)/M,this._z=(l+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-a-x);this._w=(l-p)/M,this._x=(s+u)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-a-d);this._w=(u-s)/M,this._x=(l+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Et(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,d=t._x,m=t._y,p=t._z,v=t._w;return this._x=a*v+u*d+s*p-l*m,this._y=s*v+u*m+l*d-a*p,this._z=l*v+u*p+a*m-s*d,this._w=u*v-a*d-s*m-l*p,this._onChangeCallback(),this}slerp(e,t){let a=e._x,s=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,s=-s,l=-l,u=-u,d=-d);let m=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,t=Math.sin(t*p)/v,this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const xh=class xh{constructor(e=0,t=0,a=0){this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(gg.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(gg.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*s-d*a),v=2*(d*t-l*s),x=2*(l*a-u*t);return this.x=t+m*p+u*x-d*v,this.y=a+m*v+d*p-l*x,this.z=s+m*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,d=t.y,m=t.z;return this.x=s*m-l*d,this.y=l*u-a*m,this.z=a*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return Sd.copy(this).projectOnVector(e),this.sub(Sd)}reflect(e){return this.sub(Sd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Et(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};xh.prototype.isVector3=!0;let re=xh;const Sd=new re,gg=new Br,Sh=class Sh{constructor(e,t,a,s,l,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p)}set(e,t,a,s,l,u,d,m,p){const v=this.elements;return v[0]=e,v[1]=s,v[2]=d,v[3]=t,v[4]=l,v[5]=m,v[6]=a,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],v=a[4],x=a[7],_=a[2],M=a[5],w=a[8],b=s[0],y=s[3],S=s[6],D=s[1],z=s[4],R=s[7],L=s[2],P=s[5],I=s[8];return l[0]=u*b+d*D+m*L,l[3]=u*y+d*z+m*P,l[6]=u*S+d*R+m*I,l[1]=p*b+v*D+x*L,l[4]=p*y+v*z+x*P,l[7]=p*S+v*R+x*I,l[2]=_*b+M*D+w*L,l[5]=_*y+M*z+w*P,l[8]=_*S+M*R+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-a*l*v+a*d*m+s*l*p-s*u*m}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*u-d*p,_=d*m-v*l,M=p*l-u*m,w=t*x+a*_+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(s*p-v*a)*b,e[2]=(d*a-s*u)*b,e[3]=_*b,e[4]=(v*t-s*m)*b,e[5]=(s*l-d*t)*b,e[6]=M*b,e[7]=(a*m-p*t)*b,e[8]=(u*t-a*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,d){const m=Math.cos(l),p=Math.sin(l);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-s*p,s*m,-s*(-p*u+m*d)+d+t,0,0,1),this}scale(e,t){return ds("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(yd.makeScale(e,t)),this}rotate(e){return ds("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(yd.makeRotation(-e)),this}translate(e,t){return ds("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(yd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Sh.prototype.isMatrix3=!0;let gt=Sh;const yd=new gt,vg=new gt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),_g=new gt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Uy(){const i={enabled:!0,workingColorSpace:xc,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===Gt&&(s.r=pr(s.r),s.g=pr(s.g),s.b=pr(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===Gt&&(s.r=fs(s.r),s.g=fs(s.g),s.b=fs(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===Vr?Sc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return ds("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return ds("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[xc]:{primaries:e,whitePoint:a,transfer:Sc,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:ii},outputColorSpaceConfig:{drawingBufferColorSpace:ii}},[ii]:{primaries:e,whitePoint:a,transfer:Gt,toXYZ:vg,fromXYZ:_g,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:ii}}}),i}const Ct=Uy();function pr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function fs(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let qa;class Fy{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{qa===void 0&&(qa=yc("canvas")),qa.width=e.width,qa.height=e.height;const s=qa.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=qa}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=yc("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=pr(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(pr(t[a]/255)*255):t[a]=pr(t[a]);return{data:t,width:e.width,height:e.height}}else return ut("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Oy=0;class oh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Oy++}),this.uuid=Ao(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?l.push(Md(s[u].image)):l.push(Md(s[u]))}else l=Md(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Md(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?Fy.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(ut("Texture: Unable to serialize Texture."),{})}let Iy=0;const Ed=new re;class Hn extends $r{constructor(e=Hn.DEFAULT_IMAGE,t=Hn.DEFAULT_MAPPING,a=dr,s=dr,l=Fn,u=ga,d=Di,m=ri,p=Hn.DEFAULT_ANISOTROPY,v=Vr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Iy++}),this.uuid=Ao(),this.name="",this.source=new oh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new dt(0,0),this.repeat=new dt(1,1),this.center=new dt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new gt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Ed).x}get height(){return this.source.getSize(Ed).y}get depth(){return this.source.getSize(Ed).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){ut(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ut(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==tv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sf:e.x=e.x-Math.floor(e.x);break;case dr:e.x=e.x<0?0:1;break;case of:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sf:e.y=e.y-Math.floor(e.y);break;case dr:e.y=e.y<0?0:1;break;case of:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Hn.DEFAULT_IMAGE=null;Hn.DEFAULT_MAPPING=tv;Hn.DEFAULT_ANISOTROPY=1;const yh=class yh{constructor(e=0,t=0,a=0,s=1){this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const m=e.elements,p=m[0],v=m[4],x=m[8],_=m[1],M=m[5],w=m[9],b=m[2],y=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-b)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+b)<.1&&Math.abs(w+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const z=(p+1)/2,R=(M+1)/2,L=(S+1)/2,P=(v+_)/4,I=(x+b)/4,T=(w+y)/4;return z>R&&z>L?z<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(z),s=P/a,l=I/a):R>L?R<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(R),a=P/s,l=T/s):L<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(L),a=I/l,s=T/l),this.set(a,s,l,t),this}let D=Math.sqrt((y-w)*(y-w)+(x-b)*(x-b)+(_-v)*(_-v));return Math.abs(D)<.001&&(D=1),this.x=(y-w)/D,this.y=(x-b)/D,this.z=(_-v)/D,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Et(this.x,e.x,t.x),this.y=Et(this.y,e.y,t.y),this.z=Et(this.z,e.z,t.z),this.w=Et(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Et(this.x,e,t),this.y=Et(this.y,e,t),this.z=Et(this.z,e,t),this.w=Et(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Et(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};yh.prototype.isVector4=!0;let en=yh;class ky extends $r{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Fn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new en(0,0,e,t),this.scissorTest=!1,this.viewport=new en(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:a.depth},l=new Hn(s),u=a.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Fn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new oh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ui extends ky{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class uv extends Hn{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class zy extends Hn{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=wn,this.minFilter=wn,this.wrapR=dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Mc=class Mc{constructor(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y)}set(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=a,S[12]=s,S[1]=l,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=_,S[3]=M,S[7]=w,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Mc().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,a=e.elements,s=1/Ya.setFromMatrixColumn(e,0).length(),l=1/Ya.setFromMatrixColumn(e,1).length(),u=1/Ya.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(s),p=Math.sin(s),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*v,M=u*x,w=d*v,b=d*x;t[0]=m*v,t[4]=-m*x,t[8]=p,t[1]=M+w*p,t[5]=_-b*p,t[9]=-d*m,t[2]=b-_*p,t[6]=w+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*v,M=m*x,w=p*v,b=p*x;t[0]=_+b*d,t[4]=w*d-M,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-d,t[2]=M*d-w,t[6]=b+_*d,t[10]=u*m}else if(e.order==="ZXY"){const _=m*v,M=m*x,w=p*v,b=p*x;t[0]=_-b*d,t[4]=-u*x,t[8]=w+M*d,t[1]=M+w*d,t[5]=u*v,t[9]=b-_*d,t[2]=-u*p,t[6]=d,t[10]=u*m}else if(e.order==="ZYX"){const _=u*v,M=u*x,w=d*v,b=d*x;t[0]=m*v,t[4]=w*p-M,t[8]=_*p+b,t[1]=m*x,t[5]=b*p+_,t[9]=M*p-w,t[2]=-p,t[6]=d*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,w=d*m,b=d*p;t[0]=m*v,t[4]=b-_*x,t[8]=w*x+M,t[1]=x,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=M*x+w,t[10]=_-b*x}else if(e.order==="XZY"){const _=u*m,M=u*p,w=d*m,b=d*p;t[0]=m*v,t[4]=-x,t[8]=p*v,t[1]=_*x+b,t[5]=u*v,t[9]=M*x-w,t[2]=w*x-M,t[6]=d*v,t[10]=b*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Hy,e,Vy)}lookAt(e,t,a){const s=this.elements;return ti.subVectors(e,t),ti.lengthSq()===0&&(ti.z=1),ti.normalize(),Ur.crossVectors(a,ti),Ur.lengthSq()===0&&(Math.abs(a.z)===1?ti.x+=1e-4:ti.z+=1e-4,ti.normalize(),Ur.crossVectors(a,ti)),Ur.normalize(),Ol.crossVectors(ti,Ur),s[0]=Ur.x,s[4]=Ol.x,s[8]=ti.x,s[1]=Ur.y,s[5]=Ol.y,s[9]=ti.y,s[2]=Ur.z,s[6]=Ol.z,s[10]=ti.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],v=a[1],x=a[5],_=a[9],M=a[13],w=a[2],b=a[6],y=a[10],S=a[14],D=a[3],z=a[7],R=a[11],L=a[15],P=s[0],I=s[4],T=s[8],U=s[12],H=s[1],B=s[5],j=s[9],ie=s[13],G=s[2],te=s[6],Q=s[10],le=s[14],q=s[3],K=s[7],Z=s[11],N=s[15];return l[0]=u*P+d*H+m*G+p*q,l[4]=u*I+d*B+m*te+p*K,l[8]=u*T+d*j+m*Q+p*Z,l[12]=u*U+d*ie+m*le+p*N,l[1]=v*P+x*H+_*G+M*q,l[5]=v*I+x*B+_*te+M*K,l[9]=v*T+x*j+_*Q+M*Z,l[13]=v*U+x*ie+_*le+M*N,l[2]=w*P+b*H+y*G+S*q,l[6]=w*I+b*B+y*te+S*K,l[10]=w*T+b*j+y*Q+S*Z,l[14]=w*U+b*ie+y*le+S*N,l[3]=D*P+z*H+R*G+L*q,l[7]=D*I+z*B+R*te+L*K,l[11]=D*T+z*j+R*Q+L*Z,l[15]=D*U+z*ie+R*le+L*N,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],_=e[10],M=e[14],w=e[3],b=e[7],y=e[11],S=e[15],D=m*M-p*_,z=d*M-p*x,R=d*_-m*x,L=u*M-p*v,P=u*_-m*v,I=u*x-d*v;return t*(b*D-y*z+S*R)-a*(w*D-y*L+S*P)+s*(w*z-b*L+S*I)-l*(w*R-b*P+y*I)}determinantAffine(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[1],u=e[5],d=e[9],m=e[2],p=e[6],v=e[10];return t*(u*v-d*p)-a*(l*v-d*m)+s*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],_=e[10],M=e[11],w=e[12],b=e[13],y=e[14],S=e[15],D=t*d-a*u,z=t*m-s*u,R=t*p-l*u,L=a*m-s*d,P=a*p-l*d,I=s*p-l*m,T=v*b-x*w,U=v*y-_*w,H=v*S-M*w,B=x*y-_*b,j=x*S-M*b,ie=_*S-M*y,G=D*ie-z*j+R*B+L*H-P*U+I*T;if(G===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/G;return e[0]=(d*ie-m*j+p*B)*te,e[1]=(s*j-a*ie-l*B)*te,e[2]=(b*I-y*P+S*L)*te,e[3]=(_*P-x*I-M*L)*te,e[4]=(m*H-u*ie-p*U)*te,e[5]=(t*ie-s*H+l*U)*te,e[6]=(y*R-w*I-S*z)*te,e[7]=(v*I-_*R+M*z)*te,e[8]=(u*j-d*H+p*T)*te,e[9]=(a*H-t*j-l*T)*te,e[10]=(w*P-b*R+S*D)*te,e[11]=(x*R-v*P-M*D)*te,e[12]=(d*U-u*B-m*T)*te,e[13]=(t*B-a*U+s*T)*te,e[14]=(b*z-w*L-y*D)*te,e[15]=(v*L-x*z+_*D)*te,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,d=e.y,m=e.z,p=l*u,v=l*d;return this.set(p*u+a,p*d-s*m,p*m+s*d,0,p*d+s*m,v*d+a,v*m-s*u,0,p*m-s*d,v*m+s*u,l*m*m+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,d=t._z,m=t._w,p=l+l,v=u+u,x=d+d,_=l*p,M=l*v,w=l*x,b=u*v,y=u*x,S=d*x,D=m*p,z=m*v,R=m*x,L=a.x,P=a.y,I=a.z;return s[0]=(1-(b+S))*L,s[1]=(M+R)*L,s[2]=(w-z)*L,s[3]=0,s[4]=(M-R)*P,s[5]=(1-(_+S))*P,s[6]=(y+D)*P,s[7]=0,s[8]=(w+z)*I,s[9]=(y-D)*I,s[10]=(1-(_+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),t.identity(),this;let u=Ya.set(s[0],s[1],s[2]).length();const d=Ya.set(s[4],s[5],s[6]).length(),m=Ya.set(s[8],s[9],s[10]).length();l<0&&(u=-u),Ci.copy(this);const p=1/u,v=1/d,x=1/m;return Ci.elements[0]*=p,Ci.elements[1]*=p,Ci.elements[2]*=p,Ci.elements[4]*=v,Ci.elements[5]*=v,Ci.elements[6]*=v,Ci.elements[8]*=x,Ci.elements[9]*=x,Ci.elements[10]*=x,t.setFromRotationMatrix(Ci),a.x=u,a.y=d,a.z=m,this}makePerspective(e,t,a,s,l,u,d=Wi,m=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(a-s),_=(t+e)/(t-e),M=(a+s)/(a-s);let w,b;if(m)w=l/(u-l),b=u*l/(u-l);else if(d===Wi)w=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Eo)w=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,a,s,l,u,d=Wi,m=!1){const p=this.elements,v=2/(t-e),x=2/(a-s),_=-(t+e)/(t-e),M=-(a+s)/(a-s);let w,b;if(m)w=1/(u-l),b=u/(u-l);else if(d===Wi)w=-2/(u-l),b=-(u+l)/(u-l);else if(d===Eo)w=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}};Mc.prototype.isMatrix4=!0;let tn=Mc;const Ya=new re,Ci=new tn,Hy=new re(0,0,0),Vy=new re(1,1,1),Ur=new re,Ol=new re,ti=new re,xg=new tn,Sg=new Br;class Wr{constructor(e=0,t=0,a=0,s=Wr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],d=s[8],m=s[1],p=s[5],v=s[9],x=s[2],_=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(Et(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Et(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Et(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Et(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Et(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Et(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:ut("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return xg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(xg,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Sg.setFromEuler(this),this.setFromQuaternion(Sg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}Wr.DEFAULT_ORDER="XYZ";class lh{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Gy=0;const yg=new re,Ka=new Br,rr=new tn,Il=new re,io=new re,By=new re,Wy=new Br,Mg=new re(1,0,0),Eg=new re(0,1,0),Tg=new re(0,0,1),wg={type:"added"},Xy={type:"removed"},ja={type:"childadded",child:null},Td={type:"childremoved",child:null};class Cn extends $r{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Gy++}),this.uuid=Ao(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Cn.DEFAULT_UP.clone();const e=new re,t=new Wr,a=new Br,s=new re(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new tn},normalMatrix:{value:new gt}}),this.matrix=new tn,this.matrixWorld=new tn,this.matrixAutoUpdate=Cn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new lh,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.multiply(Ka),this}rotateOnWorldAxis(e,t){return Ka.setFromAxisAngle(e,t),this.quaternion.premultiply(Ka),this}rotateX(e){return this.rotateOnAxis(Mg,e)}rotateY(e){return this.rotateOnAxis(Eg,e)}rotateZ(e){return this.rotateOnAxis(Tg,e)}translateOnAxis(e,t){return yg.copy(e).applyQuaternion(this.quaternion),this.position.add(yg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Mg,e)}translateY(e){return this.translateOnAxis(Eg,e)}translateZ(e){return this.translateOnAxis(Tg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(rr.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Il.copy(e):Il.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),io.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?rr.lookAt(io,Il,this.up):rr.lookAt(Il,io,this.up),this.quaternion.setFromRotationMatrix(rr),s&&(rr.extractRotation(s.matrixWorld),Ka.setFromRotationMatrix(rr),this.quaternion.premultiply(Ka.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(Ut("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(wg),ja.child=e,this.dispatchEvent(ja),ja.child=null):Ut("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Xy),Td.child=e,this.dispatchEvent(Td),Td.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),rr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),rr.multiply(e.parent.matrixWorld)),e.applyMatrix4(rr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(wg),ja.child=e,this.dispatchEvent(ja),ja.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,e,By),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(io,Wy,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,a=e.y,s=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*a-l[8]*s,l[13]+=a-l[1]*t-l[5]*a-l[9]*s,l[14]+=s-l[2]*t-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t,a=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];l(e.shapes,x)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(l(e.materials,this.material[m]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];s.animations.push(l(e.animations,m))}}if(t){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),_=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),M.length>0&&(a.animations=M),w.length>0&&(a.nodes=w)}return a.object=s,a;function u(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Cn.DEFAULT_UP=new re(0,1,0);Cn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Cn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class fo extends Cn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const $y={type:"move"};class wd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new fo,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new fo,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new re,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new re),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new fo,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new re,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new re,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,a),S=this._getHandJoint(p,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=v.position.distanceTo(x.position),M=.02,w=.005;p.inputState.pinching&&_>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent($y)))}return d!==null&&(d.visible=s!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new fo;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}const dv={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Fr={h:0,s:0,l:0},kl={h:0,s:0,l:0};function Ad(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Tt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=ii){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Ct.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=Ct.workingColorSpace){return this.r=e,this.g=t,this.b=a,Ct.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=Ct.workingColorSpace){if(e=Dy(e,1),t=Et(t,0,1),a=Et(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=Ad(u,l,e+1/3),this.g=Ad(u,l,e),this.b=Ad(u,l,e-1/3)}return Ct.colorSpaceToWorking(this,s),this}setStyle(e,t=ii){function a(l){l!==void 0&&parseFloat(l)<1&&ut("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:ut("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);ut("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=ii){const a=dv[e.toLowerCase()];return a!==void 0?this.setHex(a,t):ut("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=pr(e.r),this.g=pr(e.g),this.b=pr(e.b),this}copyLinearToSRGB(e){return this.r=fs(e.r),this.g=fs(e.g),this.b=fs(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=ii){return Ct.workingToColorSpace(Un.copy(this),e),Math.round(Et(Un.r*255,0,255))*65536+Math.round(Et(Un.g*255,0,255))*256+Math.round(Et(Un.b*255,0,255))}getHexString(e=ii){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=Ct.workingColorSpace){Ct.workingToColorSpace(Un.copy(this),t);const a=Un.r,s=Un.g,l=Un.b,u=Math.max(a,s,l),d=Math.min(a,s,l);let m,p;const v=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=v<=.5?x/(u+d):x/(2-u-d),u){case a:m=(s-l)/x+(s<l?6:0);break;case s:m=(l-a)/x+2;break;case l:m=(a-s)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,t=Ct.workingColorSpace){return Ct.workingToColorSpace(Un.copy(this),t),e.r=Un.r,e.g=Un.g,e.b=Un.b,e}getStyle(e=ii){Ct.workingToColorSpace(Un.copy(this),e);const t=Un.r,a=Un.g,s=Un.b;return e!==ii?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(Fr),this.setHSL(Fr.h+e,Fr.s+t,Fr.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(Fr),e.getHSL(kl);const a=xd(Fr.h,kl.h,t),s=xd(Fr.s,kl.s,t),l=xd(Fr.l,kl.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const Un=new Tt;Tt.NAMES=dv;class qy extends Cn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Wr,this.environmentIntensity=1,this.environmentRotation=new Wr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const Ri=new re,ar=new re,Cd=new re,sr=new re,Za=new re,Ja=new re,Ag=new re,Rd=new re,bd=new re,Pd=new re,Ld=new en,Dd=new en,Nd=new en;class Li{constructor(e=new re,t=new re,a=new re){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),Ri.subVectors(e,t),s.cross(Ri);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){Ri.subVectors(s,t),ar.subVectors(a,t),Cd.subVectors(e,t);const u=Ri.dot(Ri),d=Ri.dot(ar),m=Ri.dot(Cd),p=ar.dot(ar),v=ar.dot(Cd),x=u*p-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,M=(p*m-d*v)*_,w=(u*v-d*m)*_;return l.set(1-M-w,w,M)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,sr)===null?!1:sr.x>=0&&sr.y>=0&&sr.x+sr.y<=1}static getInterpolation(e,t,a,s,l,u,d,m){return this.getBarycoord(e,t,a,s,sr)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,sr.x),m.addScaledVector(u,sr.y),m.addScaledVector(d,sr.z),m)}static getInterpolatedAttribute(e,t,a,s,l,u){return Ld.setScalar(0),Dd.setScalar(0),Nd.setScalar(0),Ld.fromBufferAttribute(e,t),Dd.fromBufferAttribute(e,a),Nd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(Ld,l.x),u.addScaledVector(Dd,l.y),u.addScaledVector(Nd,l.z),u}static isFrontFacing(e,t,a,s){return Ri.subVectors(a,t),ar.subVectors(e,t),Ri.cross(ar).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return Ri.subVectors(this.c,this.b),ar.subVectors(this.a,this.b),Ri.cross(ar).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Li.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Li.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return Li.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return Li.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Li.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,d;Za.subVectors(s,a),Ja.subVectors(l,a),Rd.subVectors(e,a);const m=Za.dot(Rd),p=Ja.dot(Rd);if(m<=0&&p<=0)return t.copy(a);bd.subVectors(e,s);const v=Za.dot(bd),x=Ja.dot(bd);if(v>=0&&x<=v)return t.copy(s);const _=m*x-v*p;if(_<=0&&m>=0&&v<=0)return u=m/(m-v),t.copy(a).addScaledVector(Za,u);Pd.subVectors(e,l);const M=Za.dot(Pd),w=Ja.dot(Pd);if(w>=0&&M<=w)return t.copy(l);const b=M*p-m*w;if(b<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(a).addScaledVector(Ja,d);const y=v*w-M*x;if(y<=0&&x-v>=0&&M-w>=0)return Ag.subVectors(l,s),d=(x-v)/(x-v+(M-w)),t.copy(s).addScaledVector(Ag,d);const S=1/(y+b+_);return u=b*S,d=_*S,t.copy(a).addScaledVector(Za,u).addScaledVector(Ja,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Co{constructor(e=new re(1/0,1/0,1/0),t=new re(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(bi.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(bi.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=bi.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,bi):bi.fromBufferAttribute(l,u),bi.applyMatrix4(e.matrixWorld),this.expandByPoint(bi);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),zl.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),zl.copy(a.boundingBox)),zl.applyMatrix4(e.matrixWorld),this.union(zl)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,bi),bi.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(ro),Hl.subVectors(this.max,ro),Qa.subVectors(e.a,ro),es.subVectors(e.b,ro),ts.subVectors(e.c,ro),Or.subVectors(es,Qa),Ir.subVectors(ts,es),da.subVectors(Qa,ts);let t=[0,-Or.z,Or.y,0,-Ir.z,Ir.y,0,-da.z,da.y,Or.z,0,-Or.x,Ir.z,0,-Ir.x,da.z,0,-da.x,-Or.y,Or.x,0,-Ir.y,Ir.x,0,-da.y,da.x,0];return!Ud(t,Qa,es,ts,Hl)||(t=[1,0,0,0,1,0,0,0,1],!Ud(t,Qa,es,ts,Hl))?!1:(Vl.crossVectors(Or,Ir),t=[Vl.x,Vl.y,Vl.z],Ud(t,Qa,es,ts,Hl))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,bi).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(bi).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(or[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),or[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),or[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),or[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),or[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),or[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),or[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),or[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(or),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const or=[new re,new re,new re,new re,new re,new re,new re,new re],bi=new re,zl=new Co,Qa=new re,es=new re,ts=new re,Or=new re,Ir=new re,da=new re,ro=new re,Hl=new re,Vl=new re,fa=new re;function Ud(i,e,t,a,s){for(let l=0,u=i.length-3;l<=u;l+=3){fa.fromArray(i,l);const d=s.x*Math.abs(fa.x)+s.y*Math.abs(fa.y)+s.z*Math.abs(fa.z),m=e.dot(fa),p=t.dot(fa),v=a.dot(fa);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const cn=new re,Gl=new dt;let Yy=0;class si extends $r{constructor(e,t,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Yy++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Cy,this.updateRanges=[],this.gpuType=Bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)Gl.fromBufferAttribute(this,t),Gl.applyMatrix3(e),this.setXY(t,Gl.x,Gl.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix3(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)cn.fromBufferAttribute(this,t),cn.applyMatrix4(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)cn.fromBufferAttribute(this,t),cn.applyNormalMatrix(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)cn.fromBufferAttribute(this,t),cn.transformDirection(e),this.setXYZ(t,cn.x,cn.y,cn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=no(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=qn(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=no(t,this.array)),t}setX(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=no(t,this.array)),t}setY(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=no(t,this.array)),t}setZ(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=no(t,this.array)),t}setW(e,t){return this.normalized&&(t=qn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),a=qn(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),a=qn(a,this.array),s=qn(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=qn(t,this.array),a=qn(a,this.array),s=qn(s,this.array),l=qn(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class fv extends si{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class hv extends si{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class pn extends si{constructor(e,t,a){super(new Float32Array(e),t,a)}}const Ky=new Co,ao=new re,Fd=new re;class ch{constructor(e=new re,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):Ky.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ao.subVectors(e,this.center);const t=ao.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(ao,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Fd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ao.copy(e.center).add(Fd)),this.expandByPoint(ao.copy(e.center).sub(Fd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let jy=0;const mi=new tn,Od=new Cn,ns=new re,ni=new Co,so=new Co,Sn=new re;class jn extends $r{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:jy++}),this.uuid=Ao(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(Ry(e)?hv:fv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new gt().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return mi.makeRotationFromQuaternion(e),this.applyMatrix4(mi),this}rotateX(e){return mi.makeRotationX(e),this.applyMatrix4(mi),this}rotateY(e){return mi.makeRotationY(e),this.applyMatrix4(mi),this}rotateZ(e){return mi.makeRotationZ(e),this.applyMatrix4(mi),this}translate(e,t,a){return mi.makeTranslation(e,t,a),this.applyMatrix4(mi),this}scale(e,t,a){return mi.makeScale(e,t,a),this.applyMatrix4(mi),this}lookAt(e){return Od.lookAt(e),Od.updateMatrix(),this.applyMatrix4(Od.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(ns).negate(),this.translate(ns.x,ns.y,ns.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new pn(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&ut("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Co);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new re(-1/0,-1/0,-1/0),new re(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];ni.setFromBufferAttribute(l),this.morphTargetsRelative?(Sn.addVectors(this.boundingBox.min,ni.min),this.boundingBox.expandByPoint(Sn),Sn.addVectors(this.boundingBox.max,ni.max),this.boundingBox.expandByPoint(Sn)):(this.boundingBox.expandByPoint(ni.min),this.boundingBox.expandByPoint(ni.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&Ut('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new ch);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){Ut("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new re,1/0);return}if(e){const a=this.boundingSphere.center;if(ni.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];so.setFromBufferAttribute(d),this.morphTargetsRelative?(Sn.addVectors(ni.min,so.min),ni.expandByPoint(Sn),Sn.addVectors(ni.max,so.max),ni.expandByPoint(Sn)):(ni.expandByPoint(so.min),ni.expandByPoint(so.max))}ni.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)Sn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(Sn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Sn.fromBufferAttribute(d,p),m&&(ns.fromBufferAttribute(e,p),Sn.add(ns)),s=Math.max(s,a.distanceToSquared(Sn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&Ut('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){Ut("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new si(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new re,m[T]=new re;const p=new re,v=new re,x=new re,_=new dt,M=new dt,w=new dt,b=new re,y=new re;function S(T,U,H){p.fromBufferAttribute(a,T),v.fromBufferAttribute(a,U),x.fromBufferAttribute(a,H),_.fromBufferAttribute(l,T),M.fromBufferAttribute(l,U),w.fromBufferAttribute(l,H),v.sub(p),x.sub(p),M.sub(_),w.sub(_);const B=1/(M.x*w.y-w.x*M.y);isFinite(B)&&(b.copy(v).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(B),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(B),d[T].add(b),d[U].add(b),d[H].add(b),m[T].add(y),m[U].add(y),m[H].add(y))}let D=this.groups;D.length===0&&(D=[{start:0,count:e.count}]);for(let T=0,U=D.length;T<U;++T){const H=D[T],B=H.start,j=H.count;for(let ie=B,G=B+j;ie<G;ie+=3)S(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const z=new re,R=new re,L=new re,P=new re;function I(T){L.fromBufferAttribute(s,T),P.copy(L);const U=d[T];z.copy(U),z.sub(L.multiplyScalar(L.dot(U))).normalize(),R.crossVectors(P,U);const B=R.dot(m[T])<0?-1:1;u.setXYZW(T,z.x,z.y,z.z,B)}for(let T=0,U=D.length;T<U;++T){const H=D[T],B=H.start,j=H.count;for(let ie=B,G=B+j;ie<G;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==t.count)a=new si(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,M=a.count;_<M;_++)a.setXYZ(_,0,0,0);const s=new re,l=new re,u=new re,d=new re,m=new re,p=new re,v=new re,x=new re;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),d.fromBufferAttribute(a,w),m.fromBufferAttribute(a,b),p.fromBufferAttribute(a,y),d.add(v),m.add(v),p.add(v),a.setXYZ(w,d.x,d.y,d.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Sn.fromBufferAttribute(e,t),Sn.normalize(),e.setXYZ(t,Sn.x,Sn.y,Sn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,_=new p.constructor(m.length*v);let M=0,w=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*v;for(let S=0;S<v;S++)_[w++]=p[M++]}return new si(_,v,x)}if(this.index===null)return ut("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new jn,a=this.index.array,s=this.attributes;for(const d in s){const m=s[d],p=e(m,a);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const m=[],p=l[d];for(let v=0,x=p.length;v<x;v++){const _=p[v],M=e(_,a);m.push(M)}t.morphAttributes[d]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const s={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(s[m]=v,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const p in s){const v=s[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let _=0,M=x.length;_<M;_++)v.push(x[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Id=new re,Zy=new re,Jy=new gt;class ur{constructor(e=new re(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=Id.subVectors(a,t).cross(Zy.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,a=!0){const s=e.delta(Id),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return a===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||Jy.getNormalMatrix(e),s=this.coplanarPoint(Id).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Qy=0;class Ro extends $r{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Qy++}),this.uuid=Ao(),this.name="",this.type="Material",this.blending=mo,this.side=Sa,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=X0,this.blendDst=$0,this.blendEquation=os,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Tt(0,0,0),this.blendAlpha=0,this.depthFunc=So,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Sy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=_d,this.stencilZFail=_d,this.stencilZPass=_d,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){ut(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){ut(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector2&&a&&a.isVector2||s&&s.isEuler&&a&&a.isEuler||s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Tt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new ur().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new dt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new dt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const lr=new re,kd=new re,Bl=new re,Wl=new re;class uh{constructor(e=new re,t=new re(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,lr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=lr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(lr.copy(this.origin).addScaledVector(this.direction,t),lr.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){kd.copy(e).add(t).multiplyScalar(.5),Bl.copy(t).sub(e).normalize(),Wl.copy(this.origin).sub(kd);const l=e.distanceTo(t)*.5,u=-this.direction.dot(Bl),d=Wl.dot(this.direction),m=-Wl.dot(Bl),p=Wl.lengthSq(),v=Math.abs(1-u*u);let x,_,M,w;if(v>0)if(x=u*m-d,_=u*d-m,w=l*v,x>=0)if(_>=-w)if(_<=w){const b=1/v;x*=b,_*=b,M=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _=-l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _<=-w?(x=Math.max(0,-(-u*l+d)),_=x>0?-l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p):_<=w?(x=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(x=Math.max(0,-(u*l+d)),_=x>0?l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p);else _=u>0?-l:l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(kd).addScaledVector(Bl,_),M}intersectSphere(e,t){if(e.radius<0)return null;lr.subVectors(e.center,this.origin);const a=lr.dot(this.direction),s=lr.dot(lr)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,s=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,s=(e.min.x-_.x)*p),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>s)||((d>a||a!==a)&&(a=d),(m<s||s!==s)&&(s=m),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,lr)!==null}intersectTriangle(e,t,a,s,l){const u=this.origin,d=this.direction,m=d.x,p=d.y,v=d.z,x=e.x-u.x,_=e.y-u.y,M=e.z-u.z,w=t.x-u.x,b=t.y-u.y,y=t.z-u.z,S=a.x-u.x,D=a.y-u.y,z=a.z-u.z,R=Math.abs(m),L=Math.abs(p),P=Math.abs(v);let I,T,U,H,B,j,ie,G,te,Q,le,q;if(R>=L&&R>=P?(U=m,j=x,te=w,q=S,m>=0?(I=p,T=v,H=_,B=M,ie=b,G=y,Q=D,le=z):(I=v,T=p,H=M,B=_,ie=y,G=b,Q=z,le=D)):L>=P?(U=p,j=_,te=b,q=D,p>=0?(I=v,T=m,H=M,B=x,ie=y,G=w,Q=z,le=S):(I=m,T=v,H=x,B=M,ie=w,G=y,Q=S,le=z)):(U=v,j=M,te=y,q=z,v>=0?(I=m,T=p,H=x,B=_,ie=w,G=b,Q=S,le=D):(I=p,T=m,H=_,B=x,ie=b,G=w,Q=D,le=S)),U===0)return null;const K=I/U,Z=T/U,N=1/U,oe=H-K*j,Se=B-Z*j,Ge=ie-K*te,ze=G-Z*te,$e=Q-K*q,k=le-Z*q,J=$e*ze-k*Ge,ge=oe*k-Se*$e,Le=Ge*Se-ze*oe;if(s){if(J<0||ge<0||Le<0)return null}else if((J<0||ge<0||Le<0)&&(J>0||ge>0||Le>0))return null;const Ae=J+ge+Le;if(Ae===0)return null;const st=N*(J*j+ge*te+Le*q);return(Ae>0?st<0:st>0)?null:this.at(st/Ae,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class dh extends Ro{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Tt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.combine=q0,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Cg=new tn,ha=new uh,Xl=new ch,Rg=new re,$l=new re,ql=new re,Yl=new re,zd=new re,Kl=new re,bg=new re,jl=new re;class ai extends Cn{constructor(e=new jn,t=new dh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(l&&d){Kl.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=d[m],x=l[m];v!==0&&(zd.fromBufferAttribute(x,e),u?Kl.addScaledVector(zd,v):Kl.addScaledVector(zd.sub(t),v))}t.add(Kl)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),Xl.copy(a.boundingSphere),Xl.applyMatrix4(l),ha.copy(e.ray).recast(e.near),!(Xl.containsPoint(ha.origin)===!1&&(ha.intersectSphere(Xl,Rg)===null||ha.origin.distanceToSquared(Rg)>(e.far-e.near)**2))&&(Cg.copy(l).invert(),ha.copy(e.ray).applyMatrix4(Cg),!(a.boundingBox!==null&&ha.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,ha)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,d=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,_=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,b=_.length;w<b;w++){const y=_[w],S=u[y.materialIndex],D=Math.max(y.start,M.start),z=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,L=z;R<L;R+=3){const P=d.getX(R),I=d.getX(R+1),T=d.getX(R+2);s=Zl(this,S,e,a,p,v,x,P,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const w=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=w,S=b;y<S;y+=3){const D=d.getX(y),z=d.getX(y+1),R=d.getX(y+2);s=Zl(this,u,e,a,p,v,x,D,z,R),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,b=_.length;w<b;w++){const y=_[w],S=u[y.materialIndex],D=Math.max(y.start,M.start),z=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let R=D,L=z;R<L;R+=3){const P=R,I=R+1,T=R+2;s=Zl(this,S,e,a,p,v,x,P,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const w=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=w,S=b;y<S;y+=3){const D=y,z=y+1,R=y+2;s=Zl(this,u,e,a,p,v,x,D,z,R),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function eM(i,e,t,a,s,l,u,d){let m;if(e.side===Kn?m=a.intersectTriangle(u,l,s,!0,d):m=a.intersectTriangle(s,l,u,e.side===Sa,d),m===null)return null;jl.copy(d),jl.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(jl);return p<t.near||p>t.far?null:{distance:p,point:jl.clone(),object:i}}function Zl(i,e,t,a,s,l,u,d,m,p){i.getVertexPosition(d,$l),i.getVertexPosition(m,ql),i.getVertexPosition(p,Yl);const v=eM(i,e,t,a,$l,ql,Yl,bg);if(v){const x=new re;Li.getBarycoord(bg,$l,ql,Yl,x),s&&(v.uv=Li.getInterpolatedAttribute(s,d,m,p,x,new dt)),l&&(v.uv1=Li.getInterpolatedAttribute(l,d,m,p,x,new dt)),u&&(v.normal=Li.getInterpolatedAttribute(u,d,m,p,x,new re),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new re,materialIndex:0};Li.getNormal($l,ql,Yl,_.normal),v.face=_,v.barycoord=x}return v}class tM extends Hn{constructor(e=null,t=1,a=1,s,l,u,d,m,p=wn,v=wn,x,_){super(null,u,d,m,p,v,s,l,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const pa=new ch,nM=new dt(.5,.5),Jl=new re;class fh{constructor(e=new ur,t=new ur,a=new ur,s=new ur,l=new ur,u=new ur){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(a),d[3].copy(s),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=Wi,a=!1){const s=this.planes,l=e.elements,u=l[0],d=l[1],m=l[2],p=l[3],v=l[4],x=l[5],_=l[6],M=l[7],w=l[8],b=l[9],y=l[10],S=l[11],D=l[12],z=l[13],R=l[14],L=l[15];if(s[0].setComponents(p-u,M-v,S-w,L-D).normalize(),s[1].setComponents(p+u,M+v,S+w,L+D).normalize(),s[2].setComponents(p+d,M+x,S+b,L+z).normalize(),s[3].setComponents(p-d,M-x,S-b,L-z).normalize(),a)s[4].setComponents(m,_,y,R).normalize(),s[5].setComponents(p-m,M-_,S-y,L-R).normalize();else if(s[4].setComponents(p-m,M-_,S-y,L-R).normalize(),t===Wi)s[5].setComponents(p+m,M+_,S+y,L+R).normalize();else if(t===Eo)s[5].setComponents(m,_,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),pa.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),pa.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(pa)}intersectsSprite(e){pa.center.set(0,0,0);const t=nM.distanceTo(e.center);return pa.radius=.7071067811865476+t,pa.applyMatrix4(e.matrixWorld),this.intersectsSphere(pa)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(Jl.x=s.normal.x>0?e.max.x:e.min.x,Jl.y=s.normal.y>0?e.max.y:e.min.y,Jl.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(Jl)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class pv extends Hn{constructor(e=[],t=ya,a,s,l,u,d,m,p,v){super(e,t,a,s,l,u,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class To extends Hn{constructor(e,t,a=$i,s,l,u,d=wn,m=wn,p,v=mr,x=1){if(v!==mr&&v!==va)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,s,l,u,d,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new oh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class iM extends To{constructor(e,t=$i,a=ya,s,l,u=wn,d=wn,m,p=mr){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,a,s,l,u,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class mv extends Hn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class bo extends jn{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const d=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],x=[];let _=0,M=0;w("z","y","x",-1,-1,a,t,e,u,l,0),w("z","y","x",1,-1,a,t,-e,u,l,1),w("x","z","y",1,1,e,a,t,s,u,2),w("x","z","y",1,-1,e,a,-t,s,u,3),w("x","y","z",1,-1,e,t,a,s,l,4),w("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(x,2));function w(b,y,S,D,z,R,L,P,I,T,U){const H=R/I,B=L/T,j=R/2,ie=L/2,G=P/2,te=I+1,Q=T+1;let le=0,q=0;const K=new re;for(let Z=0;Z<Q;Z++){const N=Z*B-ie;for(let oe=0;oe<te;oe++){const Se=oe*H-j;K[b]=Se*D,K[y]=N*z,K[S]=G,p.push(K.x,K.y,K.z),K[b]=0,K[y]=0,K[S]=P>0?1:-1,v.push(K.x,K.y,K.z),x.push(oe/I),x.push(1-Z/T),le+=1}}for(let Z=0;Z<T;Z++)for(let N=0;N<I;N++){const oe=_+N+te*Z,Se=_+N+te*(Z+1),Ge=_+(N+1)+te*(Z+1),ze=_+(N+1)+te*Z;m.push(oe,Se,ze),m.push(Se,Ge,ze),q+=6}d.addGroup(M,q,U),M+=q,_+=le}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class bc extends jn{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,d=Math.floor(a),m=Math.floor(s),p=d+1,v=m+1,x=e/d,_=t/m,M=[],w=[],b=[],y=[];for(let S=0;S<v;S++){const D=S*_-u;for(let z=0;z<p;z++){const R=z*x-l;w.push(R,-D,0),b.push(0,0,1),y.push(z/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let D=0;D<d;D++){const z=D+p*S,R=D+p*(S+1),L=D+1+p*(S+1),P=D+1+p*S;M.push(z,R,P),M.push(R,L,P)}this.setIndex(M),this.setAttribute("position",new pn(w,3)),this.setAttribute("normal",new pn(b,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new bc(e.width,e.height,e.widthSegments,e.heightSegments)}}class hh extends jn{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const v=[],x=new re,_=new re,M=[],w=[],b=[],y=[];for(let S=0;S<=a;S++){const D=[],z=S/a,R=u+z*d,L=e*Math.cos(R),P=Math.sqrt(e*e-L*L);let I=0;S===0&&u===0?I=.5/t:S===a&&m===Math.PI&&(I=-.5/t);for(let T=0;T<=t;T++){const U=T/t,H=s+U*l;x.x=-P*Math.cos(H),x.y=L,x.z=P*Math.sin(H),w.push(x.x,x.y,x.z),_.copy(x).normalize(),b.push(_.x,_.y,_.z),y.push(U+I,1-z),D.push(p++)}v.push(D)}for(let S=0;S<a;S++)for(let D=0;D<t;D++){const z=v[S][D+1],R=v[S][D],L=v[S+1][D],P=v[S+1][D+1];(S!==0||u>0)&&M.push(z,R,P),(S!==a-1||m<Math.PI)&&M.push(R,L,P)}this.setIndex(M),this.setAttribute("position",new pn(w,3)),this.setAttribute("normal",new pn(b,3)),this.setAttribute("uv",new pn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class ph extends jn{constructor(e=1,t=.4,a=12,s=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:s,arc:l,thetaStart:u,thetaLength:d},a=Math.floor(a),s=Math.floor(s);const m=[],p=[],v=[],x=[],_=new re,M=new re,w=new re;for(let b=0;b<=a;b++){const y=u+b/a*d;for(let S=0;S<=s;S++){const D=S/s*l;M.x=(e+t*Math.cos(y))*Math.cos(D),M.y=(e+t*Math.cos(y))*Math.sin(D),M.z=t*Math.sin(y),p.push(M.x,M.y,M.z),_.x=e*Math.cos(D),_.y=e*Math.sin(D),w.subVectors(M,_).normalize(),v.push(w.x,w.y,w.z),x.push(S/s),x.push(b/a)}}for(let b=1;b<=a;b++)for(let y=1;y<=s;y++){const S=(s+1)*b+y-1,D=(s+1)*(b-1)+y-1,z=(s+1)*(b-1)+y,R=(s+1)*b+y;m.push(S,D,R),m.push(D,z,R)}this.setIndex(m),this.setAttribute("position",new pn(p,3)),this.setAttribute("normal",new pn(v,3)),this.setAttribute("uv",new pn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new ph(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function gs(i){const e={};for(const t in i){e[t]={};for(const a in i[t]){const s=i[t][a];if(Pg(s))s.isRenderTargetTexture?(ut("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone();else if(Array.isArray(s))if(Pg(s[0])){const l=[];for(let u=0,d=s.length;u<d;u++)l[u]=s[u].clone();e[t][a]=l}else e[t][a]=s.slice();else e[t][a]=s}}return e}function zn(i){const e={};for(let t=0;t<i.length;t++){const a=gs(i[t]);for(const s in a)e[s]=a[s]}return e}function Pg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function rM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function gv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Ct.workingColorSpace}const aM={clone:gs,merge:zn};var sM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,oM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Yi extends Ro{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=sM,this.fragmentShader=oM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=gs(e.uniforms),this.uniformsGroups=rM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const a in e.uniforms){const s=e.uniforms[a];switch(this.uniforms[a]={},s.type){case"t":this.uniforms[a].value=t[s.value]||null;break;case"c":this.uniforms[a].value=new Tt().setHex(s.value);break;case"v2":this.uniforms[a].value=new dt().fromArray(s.value);break;case"v3":this.uniforms[a].value=new re().fromArray(s.value);break;case"v4":this.uniforms[a].value=new en().fromArray(s.value);break;case"m3":this.uniforms[a].value=new gt().fromArray(s.value);break;case"m4":this.uniforms[a].value=new tn().fromArray(s.value);break;default:this.uniforms[a].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class lM extends Yi{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Lg extends Ro{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Tt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Tt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=kf,this.normalScale=new dt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Wr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class cM extends Ro{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=_y,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class uM extends Ro{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const Dg={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(Ng(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!Ng(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function Ng(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class dM{constructor(e,t,a){const s=this;let l=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(v){d++,l===!1&&s.onStart!==void 0&&s.onStart(v,u,d),l=!0},this.itemEnd=function(v){u++,s.onProgress!==void 0&&s.onProgress(v,u,d),u===d&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(v){s.onError!==void 0&&s.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return p.push(v,x),this},this.removeHandler=function(v){const x=p.indexOf(v);return x!==-1&&p.splice(x,2),this},this.getHandler=function(v){for(let x=0,_=p.length;x<_;x+=2){const M=p[x],w=p[x+1];if(M.global&&(M.lastIndex=0),M.test(v))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const fM=new dM;class mh{constructor(e){this.manager=e!==void 0?e:fM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}mh.DEFAULT_MATERIAL_NAME="__DEFAULT";const cr={};class hM extends Error{constructor(e,t){super(e),this.response=t}}class pM extends mh{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=Dg.get(`file:${e}`);if(l!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0);return}if(cr[e]!==void 0){cr[e].push({onLoad:t,onProgress:a,onError:s});return}cr[e]=[],cr[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&ut("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=cr[e],x=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=_?parseInt(_):0,w=M!==0;let b=0;const y=new ReadableStream({start(S){D();function D(){x.read().then(({done:z,value:R})=>{if(z)S.close();else{b+=R.byteLength;const L=new ProgressEvent("progress",{lengthComputable:w,loaded:b,total:M});for(let P=0,I=v.length;P<I;P++){const T=v[P];T.onProgress&&T.onProgress(L)}S.enqueue(R),D()}},z=>{S.error(z)})}}});return new Response(y)}else throw new hM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),_=x&&x[1]?x[1].toLowerCase():void 0,M=new TextDecoder(_);return p.arrayBuffer().then(w=>M.decode(w))}}}).then(p=>{Dg.add(`file:${e}`,p);const v=cr[e];delete cr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=cr[e];if(v===void 0)throw this.manager.itemError(e),p;delete cr[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class vv extends Cn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Tt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class mM extends vv{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Tt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Hd=new tn,Ug=new re,Fg=new re;class gM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new dt(512,512),this.mapType=ri,this.map=null,this.mapPass=null,this.matrix=new tn,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new fh,this._frameExtents=new dt(1,1),this._viewportCount=1,this._viewports=[new en(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Ug.setFromMatrixPosition(e.matrixWorld),t.position.copy(Ug),Fg.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Fg),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,a,s){Hd.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(Hd,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=s?s.z/l.x:1,d=s?s.w/l.y:1,m=s?s.x/l.x:0,p=s?s.y/l.y:0;e.coordinateSystem===Eo||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(Hd)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Ql=new re,ec=new Br,zi=new re;class _v extends Cn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new tn,this.projectionMatrix=new tn,this.projectionMatrixInverse=new tn,this.coordinateSystem=Wi,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Ql,ec,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,zi.set(1,1,1)).invert()}updateWorldMatrix(e,t,a=!1){super.updateWorldMatrix(e,t,a),this.matrixWorld.decompose(Ql,ec,zi),zi.x===1&&zi.y===1&&zi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Ql,ec,zi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const kr=new re,Og=new dt,Ig=new dt;class gi extends _v{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=zf*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(fc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return zf*2*Math.atan(Math.tan(fc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){kr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(kr.x,kr.y).multiplyScalar(-e/kr.z),kr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(kr.x,kr.y).multiplyScalar(-e/kr.z)}getViewSize(e,t){return this.getViewBounds(e,Og,Ig),t.subVectors(Ig,Og)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(fc*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*s/m,t-=u.offsetY*a/p,s*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class gh extends _v{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,d=s+t,m=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class vM extends gM{constructor(){super(new gh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class kg extends vv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Cn.DEFAULT_UP),this.updateMatrix(),this.target=new Cn,this.shadow=new vM}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const is=-90,rs=1;class _M extends Cn{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new gi(is,rs,e,t);s.layers=this.layers,this.add(s);const l=new gi(is,rs,e,t);l.layers=this.layers,this.add(l);const u=new gi(is,rs,e,t);u.layers=this.layers,this.add(u);const d=new gi(is,rs,e,t);d.layers=this.layers,this.add(d);const m=new gi(is,rs,e,t);m.layers=this.layers,this.add(m);const p=new gi(is,rs,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,d,m]=t;for(const p of t)this.remove(p);if(e===Wi)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Eo)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,m,p,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(a,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(a,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(a,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),a.texture.generateMipmaps=b,e.setRenderTarget(a,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,_,M),e.xr.enabled=w,a.texture.needsPMREMUpdate=!0}}class xM extends gi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const zg=new tn;class SM{constructor(e,t,a=0,s=1/0){this.ray=new uh(e,t),this.near=a,this.far=s,this.camera=null,this.layers=new lh,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):Ut("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return zg.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(zg),this}intersectObject(e,t=!0,a=[]){return Hf(e,this,a,t),a.sort(Hg),a}intersectObjects(e,t=!0,a=[]){for(let s=0,l=e.length;s<l;s++)Hf(e[s],this,a,t);return a.sort(Hg),a}}function Hg(i,e){return i.distance-e.distance}function Hf(i,e,t,a){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&a===!0){const l=i.children;for(let u=0,d=l.length;u<d;u++)Hf(l[u],e,t,!0)}}class Vg{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Et(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Et(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Mh=class Mh{constructor(e,t,a,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,a,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let a=0;a<4;a++)this.elements[a]=e[a+t];return this}set(e,t,a,s){const l=this.elements;return l[0]=e,l[2]=t,l[1]=a,l[3]=s,this}};Mh.prototype.isMatrix2=!0;let Gg=Mh;class yM extends $r{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function Bg(i,e,t,a){const s=MM(a);switch(t){case sv:return i*e;case lv:return i*e/s.components*s.byteLength;case nh:return i*e/s.components*s.byteLength;case Ma:return i*e*2/s.components*s.byteLength;case ih:return i*e*2/s.components*s.byteLength;case ov:return i*e*3/s.components*s.byteLength;case Di:return i*e*4/s.components*s.byteLength;case rh:return i*e*4/s.components*s.byteLength;case lc:case cc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case uc:case dc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case cf:case df:return Math.max(i,16)*Math.max(e,8)/4;case lf:case uf:return Math.max(i,8)*Math.max(e,8)/2;case ff:case hf:case mf:case gf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case pf:case vc:case vf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case _f:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case xf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Sf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case yf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Mf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Ef:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case Tf:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case wf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case Af:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case Cf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Rf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case bf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Pf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Lf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case Df:case Nf:case Uf:return Math.ceil(i/4)*Math.ceil(e/4)*16;case Ff:case Of:return Math.ceil(i/4)*Math.ceil(e/4)*8;case _c:case If:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function MM(i){switch(i){case ri:case nv:return{byteLength:1,components:1};case yo:case iv:case qi:return{byteLength:2,components:1};case eh:case th:return{byteLength:2,components:4};case $i:case Qf:case Bi:return{byteLength:4,components:1};case rv:case av:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Jf}}));typeof window<"u"&&(window.__THREE__?ut("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Jf);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function xv(){let i=null,e=!1,t=null,a=null;function s(l,u){a=i.requestAnimationFrame(s),t(l,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(a=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function EM(i){const e=new WeakMap;function t(d,m){const p=d.array,v=d.usage,x=p.byteLength,_=i.createBuffer();i.bindBuffer(m,_),i.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=i.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const v=m.array,x=m.updateRanges;if(i.bindBuffer(p,d),x.length===0)i.bufferSubData(p,0,v);else{x.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<x.length;M++){const w=x[_],b=x[M];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++_,x[_]=b)}x.length=_+1;for(let M=0,w=x.length;M<w;M++){const b=x[M];i.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(i.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:s,remove:l,update:u}}var TM=`#ifdef USE_ALPHAHASH
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
#endif`,$M=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,qM=`#define PI 3.141592653589793
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
} // validated`,YM=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,$E=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,qE=`#ifdef USE_NORMALMAP
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
#endif`,YE=`#ifdef USE_CLEARCOAT
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
}`,$T=`#define PHONG
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
}`,qT=`#define PHONG
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
}`,YT=`#define STANDARD
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
}`,St={alphahash_fragment:TM,alphahash_pars_fragment:wM,alphamap_fragment:AM,alphamap_pars_fragment:CM,alphatest_fragment:RM,alphatest_pars_fragment:bM,aomap_fragment:PM,aomap_pars_fragment:LM,batching_pars_vertex:DM,batching_vertex:NM,begin_vertex:UM,beginnormal_vertex:FM,bsdfs:OM,iridescence_fragment:IM,bumpmap_pars_fragment:kM,clipping_planes_fragment:zM,clipping_planes_pars_fragment:HM,clipping_planes_pars_vertex:VM,clipping_planes_vertex:GM,color_fragment:BM,color_pars_fragment:WM,color_pars_vertex:XM,color_vertex:$M,common:qM,cube_uv_reflection_fragment:YM,defaultnormal_vertex:KM,displacementmap_pars_vertex:jM,displacementmap_vertex:ZM,emissivemap_fragment:JM,emissivemap_pars_fragment:QM,colorspace_fragment:eE,colorspace_pars_fragment:tE,envmap_fragment:nE,envmap_common_pars_fragment:iE,envmap_pars_fragment:rE,envmap_pars_vertex:aE,envmap_physical_pars_fragment:gE,envmap_vertex:sE,fog_vertex:oE,fog_pars_vertex:lE,fog_fragment:cE,fog_pars_fragment:uE,gradientmap_pars_fragment:dE,lightmap_pars_fragment:fE,lights_lambert_fragment:hE,lights_lambert_pars_fragment:pE,lights_pars_begin:mE,lights_toon_fragment:vE,lights_toon_pars_fragment:_E,lights_phong_fragment:xE,lights_phong_pars_fragment:SE,lights_physical_fragment:yE,lights_physical_pars_fragment:ME,lights_fragment_begin:EE,lights_fragment_maps:TE,lights_fragment_end:wE,lightprobes_pars_fragment:AE,logdepthbuf_fragment:CE,logdepthbuf_pars_fragment:RE,logdepthbuf_pars_vertex:bE,logdepthbuf_vertex:PE,map_fragment:LE,map_pars_fragment:DE,map_particle_fragment:NE,map_particle_pars_fragment:UE,metalnessmap_fragment:FE,metalnessmap_pars_fragment:OE,morphinstance_vertex:IE,morphcolor_vertex:kE,morphnormal_vertex:zE,morphtarget_pars_vertex:HE,morphtarget_vertex:VE,normal_fragment_begin:GE,normal_fragment_maps:BE,normal_pars_fragment:WE,normal_pars_vertex:XE,normal_vertex:$E,normalmap_pars_fragment:qE,clearcoat_normal_fragment_begin:YE,clearcoat_normal_fragment_maps:KE,clearcoat_pars_fragment:jE,iridescence_pars_fragment:ZE,opaque_fragment:JE,packing:QE,premultiplied_alpha_fragment:eT,project_vertex:tT,dithering_fragment:nT,dithering_pars_fragment:iT,roughnessmap_fragment:rT,roughnessmap_pars_fragment:aT,shadowmap_pars_fragment:sT,shadowmap_pars_vertex:oT,shadowmap_vertex:lT,shadowmask_pars_fragment:cT,skinbase_vertex:uT,skinning_pars_vertex:dT,skinning_vertex:fT,skinnormal_vertex:hT,specularmap_fragment:pT,specularmap_pars_fragment:mT,tonemapping_fragment:gT,tonemapping_pars_fragment:vT,transmission_fragment:_T,transmission_pars_fragment:xT,uv_pars_fragment:ST,uv_pars_vertex:yT,uv_vertex:MT,worldpos_vertex:ET,background_vert:TT,background_frag:wT,backgroundCube_vert:AT,backgroundCube_frag:CT,cube_vert:RT,cube_frag:bT,depth_vert:PT,depth_frag:LT,distance_vert:DT,distance_frag:NT,equirect_vert:UT,equirect_frag:FT,linedashed_vert:OT,linedashed_frag:IT,meshbasic_vert:kT,meshbasic_frag:zT,meshlambert_vert:HT,meshlambert_frag:VT,meshmatcap_vert:GT,meshmatcap_frag:BT,meshnormal_vert:WT,meshnormal_frag:XT,meshphong_vert:$T,meshphong_frag:qT,meshphysical_vert:YT,meshphysical_frag:KT,meshtoon_vert:jT,meshtoon_frag:ZT,points_vert:JT,points_frag:QT,shadow_vert:ew,shadow_frag:tw,sprite_vert:nw,sprite_frag:iw},Ie={common:{diffuse:{value:new Tt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new gt}},envmap:{envMap:{value:null},envMapRotation:{value:new gt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new gt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new gt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new gt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new gt},normalScale:{value:new dt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new gt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new gt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new gt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new gt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Tt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new re},probesMax:{value:new re},probesResolution:{value:new re}},points:{diffuse:{value:new Tt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0},uvTransform:{value:new gt}},sprite:{diffuse:{value:new Tt(16777215)},opacity:{value:1},center:{value:new dt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new gt},alphaMap:{value:null},alphaMapTransform:{value:new gt},alphaTest:{value:0}}},Gi={basic:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.fog]),vertexShader:St.meshbasic_vert,fragmentShader:St.meshbasic_frag},lambert:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},envMapIntensity:{value:1}}]),vertexShader:St.meshlambert_vert,fragmentShader:St.meshlambert_frag},phong:{uniforms:zn([Ie.common,Ie.specularmap,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},specular:{value:new Tt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:St.meshphong_vert,fragmentShader:St.meshphong_frag},standard:{uniforms:zn([Ie.common,Ie.envmap,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.roughnessmap,Ie.metalnessmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag},toon:{uniforms:zn([Ie.common,Ie.aomap,Ie.lightmap,Ie.emissivemap,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.gradientmap,Ie.fog,Ie.lights,{emissive:{value:new Tt(0)}}]),vertexShader:St.meshtoon_vert,fragmentShader:St.meshtoon_frag},matcap:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,Ie.fog,{matcap:{value:null}}]),vertexShader:St.meshmatcap_vert,fragmentShader:St.meshmatcap_frag},points:{uniforms:zn([Ie.points,Ie.fog]),vertexShader:St.points_vert,fragmentShader:St.points_frag},dashed:{uniforms:zn([Ie.common,Ie.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:St.linedashed_vert,fragmentShader:St.linedashed_frag},depth:{uniforms:zn([Ie.common,Ie.displacementmap]),vertexShader:St.depth_vert,fragmentShader:St.depth_frag},normal:{uniforms:zn([Ie.common,Ie.bumpmap,Ie.normalmap,Ie.displacementmap,{opacity:{value:1}}]),vertexShader:St.meshnormal_vert,fragmentShader:St.meshnormal_frag},sprite:{uniforms:zn([Ie.sprite,Ie.fog]),vertexShader:St.sprite_vert,fragmentShader:St.sprite_frag},background:{uniforms:{uvTransform:{value:new gt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:St.background_vert,fragmentShader:St.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new gt}},vertexShader:St.backgroundCube_vert,fragmentShader:St.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:St.cube_vert,fragmentShader:St.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:St.equirect_vert,fragmentShader:St.equirect_frag},distance:{uniforms:zn([Ie.common,Ie.displacementmap,{referencePosition:{value:new re},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:St.distance_vert,fragmentShader:St.distance_frag},shadow:{uniforms:zn([Ie.lights,Ie.fog,{color:{value:new Tt(0)},opacity:{value:1}}]),vertexShader:St.shadow_vert,fragmentShader:St.shadow_frag}};Gi.physical={uniforms:zn([Gi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new gt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new gt},clearcoatNormalScale:{value:new dt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new gt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new gt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new gt},sheen:{value:0},sheenColor:{value:new Tt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new gt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new gt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new gt},transmissionSamplerSize:{value:new dt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new gt},attenuationDistance:{value:0},attenuationColor:{value:new Tt(0)},specularColor:{value:new Tt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new gt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new gt},anisotropyVector:{value:new dt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new gt}}]),vertexShader:St.meshphysical_vert,fragmentShader:St.meshphysical_frag};const tc={r:0,b:0,g:0},rw=new tn,Sv=new gt;Sv.set(-1,0,0,0,1,0,0,0,1);function aw(i,e,t,a,s,l){const u=new Tt(0);let d=s===!0?0:1,m,p,v=null,x=0,_=null;function M(D){let z=D.isScene===!0?D.background:null;if(z&&z.isTexture){const R=D.backgroundBlurriness>0;z=e.get(z,R)}return z}function w(D){let z=!1;const R=M(D);R===null?y(u,d):R&&R.isColor&&(y(R,1),z=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||z)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(D,z){const R=M(z);R&&(R.isCubeTexture||R.mapping===Rc)?(p===void 0&&(p=new ai(new bo(1,1,1),new Yi({name:"BackgroundCubeMaterial",uniforms:gs(Gi.backgroundCube.uniforms),vertexShader:Gi.backgroundCube.vertexShader,fragmentShader:Gi.backgroundCube.fragmentShader,side:Kn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=z.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(rw.makeRotationFromEuler(z.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Sv),p.material.toneMapped=Ct.getTransfer(R.colorSpace)!==Gt,(v!==R||x!==R.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,v=R,x=R.version,_=i.toneMapping),p.layers.enableAll(),D.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new ai(new bc(2,2),new Yi({name:"BackgroundMaterial",uniforms:gs(Gi.background.uniforms),vertexShader:Gi.background.vertexShader,fragmentShader:Gi.background.fragmentShader,side:Sa,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=z.backgroundIntensity,m.material.toneMapped=Ct.getTransfer(R.colorSpace)!==Gt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,_=i.toneMapping),m.layers.enableAll(),D.unshift(m,m.geometry,m.material,0,0,null))}function y(D,z){D.getRGB(tc,gv(i)),t.buffers.color.setClear(tc.r,tc.g,tc.b,z,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(D,z=1){u.set(D),d=z,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(D){d=D,y(u,d)},render:w,addToRenderList:b,dispose:S}}function sw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function d(B,j,ie,G,te){let Q=!1;const le=x(B,G,ie,j);l!==le&&(l=le,p(l.object)),Q=M(B,G,ie,te),Q&&w(B,G,ie,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(Q||u)&&(u=!1,R(B,j,ie,G),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function m(){return i.createVertexArray()}function p(B){return i.bindVertexArray(B)}function v(B){return i.deleteVertexArray(B)}function x(B,j,ie,G){const te=G.wireframe===!0;let Q=a[j.id];Q===void 0&&(Q={},a[j.id]=Q);const le=B.isInstancedMesh===!0?B.id:0;let q=Q[le];q===void 0&&(q={},Q[le]=q);let K=q[ie.id];K===void 0&&(K={},q[ie.id]=K);let Z=K[te];return Z===void 0&&(Z=_(m()),K[te]=Z),Z}function _(B){const j=[],ie=[],G=[];for(let te=0;te<t;te++)j[te]=0,ie[te]=0,G[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:j,enabledAttributes:ie,attributeDivisors:G,object:B,attributes:{},index:null}}function M(B,j,ie,G){const te=l.attributes,Q=j.attributes;let le=0;const q=ie.getAttributes();for(const K in q)if(q[K].location>=0){const N=te[K];let oe=Q[K];if(oe===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(oe=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(oe=B.instanceColor)),N===void 0||N.attribute!==oe||oe&&N.data!==oe.data)return!0;le++}return l.attributesNum!==le||l.index!==G}function w(B,j,ie,G){const te={},Q=j.attributes;let le=0;const q=ie.getAttributes();for(const K in q)if(q[K].location>=0){let N=Q[K];N===void 0&&(K==="instanceMatrix"&&B.instanceMatrix&&(N=B.instanceMatrix),K==="instanceColor"&&B.instanceColor&&(N=B.instanceColor));const oe={};oe.attribute=N,N&&N.data&&(oe.data=N.data),te[K]=oe,le++}l.attributes=te,l.attributesNum=le,l.index=G}function b(){const B=l.newAttributes;for(let j=0,ie=B.length;j<ie;j++)B[j]=0}function y(B){S(B,0)}function S(B,j){const ie=l.newAttributes,G=l.enabledAttributes,te=l.attributeDivisors;ie[B]=1,G[B]===0&&(i.enableVertexAttribArray(B),G[B]=1),te[B]!==j&&(i.vertexAttribDivisor(B,j),te[B]=j)}function D(){const B=l.newAttributes,j=l.enabledAttributes;for(let ie=0,G=j.length;ie<G;ie++)j[ie]!==B[ie]&&(i.disableVertexAttribArray(ie),j[ie]=0)}function z(B,j,ie,G,te,Q,le){le===!0?i.vertexAttribIPointer(B,j,ie,te,Q):i.vertexAttribPointer(B,j,ie,G,te,Q)}function R(B,j,ie,G){b();const te=G.attributes,Q=ie.getAttributes(),le=j.defaultAttributeValues;for(const q in Q){const K=Q[q];if(K.location>=0){let Z=te[q];if(Z===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),Z!==void 0){const N=Z.normalized,oe=Z.itemSize,Se=e.get(Z);if(Se===void 0)continue;const Ge=Se.buffer,ze=Se.type,$e=Se.bytesPerElement,k=ze===i.INT||ze===i.UNSIGNED_INT||Z.gpuType===Qf;if(Z.isInterleavedBufferAttribute){const J=Z.data,ge=J.stride,Le=Z.offset;if(J.isInstancedInterleavedBuffer){for(let Ae=0;Ae<K.locationSize;Ae++)S(K.location+Ae,J.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Ae=0;Ae<K.locationSize;Ae++)y(K.location+Ae);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let Ae=0;Ae<K.locationSize;Ae++)z(K.location+Ae,oe/K.locationSize,ze,N,ge*$e,(Le+oe/K.locationSize*Ae)*$e,k)}else{if(Z.isInstancedBufferAttribute){for(let J=0;J<K.locationSize;J++)S(K.location+J,Z.meshPerAttribute);B.isInstancedMesh!==!0&&G._maxInstanceCount===void 0&&(G._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let J=0;J<K.locationSize;J++)y(K.location+J);i.bindBuffer(i.ARRAY_BUFFER,Ge);for(let J=0;J<K.locationSize;J++)z(K.location+J,oe/K.locationSize,ze,N,oe*$e,oe/K.locationSize*J*$e,k)}}else if(le!==void 0){const N=le[q];if(N!==void 0)switch(N.length){case 2:i.vertexAttrib2fv(K.location,N);break;case 3:i.vertexAttrib3fv(K.location,N);break;case 4:i.vertexAttrib4fv(K.location,N);break;default:i.vertexAttrib1fv(K.location,N)}}}}D()}function L(){U();for(const B in a){const j=a[B];for(const ie in j){const G=j[ie];for(const te in G){const Q=G[te];for(const le in Q)v(Q[le].object),delete Q[le];delete G[te]}}delete a[B]}}function P(B){if(a[B.id]===void 0)return;const j=a[B.id];for(const ie in j){const G=j[ie];for(const te in G){const Q=G[te];for(const le in Q)v(Q[le].object),delete Q[le];delete G[te]}}delete a[B.id]}function I(B){for(const j in a){const ie=a[j];for(const G in ie){const te=ie[G];if(te[B.id]===void 0)continue;const Q=te[B.id];for(const le in Q)v(Q[le].object),delete Q[le];delete te[B.id]}}}function T(B){for(const j in a){const ie=a[j],G=B.isInstancedMesh===!0?B.id:0,te=ie[G];if(te!==void 0){for(const Q in te){const le=te[Q];for(const q in le)v(le[q].object),delete le[q];delete te[Q]}delete ie[G],Object.keys(ie).length===0&&delete a[j]}}}function U(){H(),u=!0,l!==s&&(l=s,p(l.object))}function H(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:U,resetDefaultState:H,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:y,disableUnusedAttributes:D}}function ow(i,e,t){let a;function s(m){a=m}function l(m,p){i.drawArrays(a,m,p),t.update(p,a,1)}function u(m,p,v){v!==0&&(i.drawArraysInstanced(a,m,p,v),t.update(p,a,v))}function d(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,a,1)}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function lw(i,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Di&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const T=I===qi&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==ri&&I!==Bi&&!T&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=m(p);v!==p&&(ut("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&ut("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),D=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),z=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:D,maxVaryings:z,maxFragmentUniforms:R,maxSamples:L,samples:P}}function cw(i){const e=this;let t=null,a=0,s=!1,l=!1;const u=new ur,d=new gt,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||a!==0||s;return s=_,a=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=v(x,_,0)},this.setState=function(x,_,M){const w=x.clippingPlanes,b=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!s||w===null||w.length===0||l&&!y)l?v(null):p();else{const D=l?0:a,z=D*4;let R=S.clippingState||null;m.value=R,R=v(w,_,z,M);for(let L=0;L!==z;++L)R[L]=t[L];S.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=D}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(x,_,M,w){const b=x!==null?x.length:0;let y=null;if(b!==0){if(y=m.value,w!==!0||y===null){const S=M+b*4,D=_.matrixWorldInverse;d.getNormalMatrix(D),(y===null||y.length<S)&&(y=new Float32Array(S));for(let z=0,R=M;z!==b;++z,R+=4)u.copy(x[z]).applyMatrix4(D,d),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const cs=4,uw=6,dw=20,fw=256,oo=new gh,Wg=new Tt;let Vd=null,Gd=0,Bd=0,Wd=!1;const hw=new re,ma=new re;class Xg{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:d=hw}=l;Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,s,m,d),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Yg(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=qg(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Vd,Gd,Bd),this._renderer.xr.enabled=Wd,e.scissorTest=!1,as(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ya||e.mapping===ms?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Vd=this._renderer.getRenderTarget(),Gd=this._renderer.getActiveCubeFace(),Bd=this._renderer.getActiveMipmapLevel(),Wd=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Fn,minFilter:Fn,generateMipmaps:!1,type:qi,format:Di,colorSpace:xc,depthBuffer:!1},s=$g(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$g(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=pw(l)),this._blurMaterial=gw(l,e,t),this._ggxMaterial=mw(l,e,t)}return s}_compileMaterial(e){const t=new ai(new jn,e);this._renderer.compile(t,oo)}_sceneToCubeUV(e,t,a,s,l){const m=new gi(90,1,t,a),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(Wg),x.toneMapping=Xi,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new ai(new bo,new dh({name:"PMREM.Background",side:Kn,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const D=e.background;D?D.isColor&&(y.color.copy(D),e.background=null,S=!0):(y.color.copy(Wg),S=!0);for(let z=0;z<6;z++){const R=z%3;R===0?(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[z],l.y,l.z)):R===1?(m.up.set(0,0,p[z]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[z],l.z)):(m.up.set(0,p[z],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[z]));const L=this._cubeSize;as(s,R*L,z>2?L:0,L,L),x.setRenderTarget(s),S&&x.render(b,m),x.render(e,m)}x.toneMapping=M,x.autoClear=_,e.background=D}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===ya||e.mapping===ms;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Yg()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=qg());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;as(t,0,0,3*m,2*m),a.setRenderTarget(t),a.render(u,oo)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),_=p*1.25,M=x*_,{_lodMax:w}=this,b=this._sizeLods[a],y=3*b*(a>w-cs?a-w+cs:0),S=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=w-t,as(l,y,S,3*b,2*b),s.setRenderTarget(l),s.render(d,oo),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=w-a,as(e,y,S,3*b,2*b),s.setRenderTarget(e),s.render(d,oo)}_blur(e,t,a,s){const l=this._pingPongRenderTarget,u=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,a,u),this._blurPass(l,e,a,a,u)}_blurPass(e,t,a,s,l){const u=this._renderer,d=this._blurMaterial,m=this._lodMeshes[s];m.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-a;const v=this._sizeLods[s],x=3*v*(s>this._lodMax-cs?s-this._lodMax+cs:0),_=4*(this._cubeSize-v);as(t,x,_,3*v,2*v),u.setRenderTarget(t),u.render(m,oo)}}function pw(i){const e=[],t=[];let a=i;const s=i-cs+1+uw;for(let l=0;l<s;l++){const u=Math.pow(2,a);e.push(u);const d=1/(u-2),m=-d,p=1+d,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,_=6,M=3,w=new Float32Array(M*_*x),b=new Float32Array(M*_*x);for(let S=0;S<x;S++){const D=S%3*2/3-1,z=S>2?0:-1,R=[D,z,0,D+2/3,z,0,D+2/3,z+1,0,D,z,0,D+2/3,z+1,0,D,z+1,0];w.set(R,M*_*S);for(let L=0;L<_;L++){const P=v[L*2]*2-1,I=v[L*2+1]*2-1;S===0?ma.set(1,I,P):S===1?ma.set(-P,1,-I):S===2?ma.set(-P,I,1):S===3?ma.set(-1,I,-P):S===4?ma.set(-P,-1,I):ma.set(P,I,-1),ma.toArray(b,(S*_+L)*M)}}const y=new jn;y.setAttribute("position",new si(w,M)),y.setAttribute("outputDirection",new si(b,M)),t.push(new ai(y,null)),a>cs&&a--}return{lodMeshes:t,sizeLods:e}}function $g(i,e,t){const a=new Ui(i,e,t);return a.texture.mapping=Rc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function as(i,e,t,a,s){i.viewport.set(e,t,a,s),i.scissor.set(e,t,a,s)}function mw(i,e,t){return new Yi({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:fw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function gw(i,e,t){return new Yi({name:"SphericalGaussianBlur",defines:{SAMPLES:dw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function qg(){return new Yi({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pc(),fragmentShader:`

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
		`,blending:hr,depthTest:!1,depthWrite:!1})}function Yg(){return new Yi({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pc(),fragmentShader:`

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
	`}class yv extends Ui{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new pv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new bo(5,5,5),l=new Yi({name:"CubemapFromEquirect",uniforms:gs(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:Kn,blending:hr});l.uniforms.tEquirect.value=t;const u=new ai(s,l),d=t.minFilter;return t.minFilter===ga&&(t.minFilter=Fn),new _M(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}function vw(i){let e=new WeakMap,t=new WeakMap,a=null;function s(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===md||M===gd)if(e.has(_)){const w=e.get(_).texture;return d(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const b=new yv(w.height);return b.fromEquirectangularTexture(i,_),e.set(_,b),_.addEventListener("dispose",p),d(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,w=M===md||M===gd,b=M===ya||M===ms;if(w||b){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new Xg(i)),y=w?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const D=_.image;return w&&D&&D.height>0||b&&D&&m(D)?(a===null&&(a=new Xg(i)),y=w?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",v),y.texture):null}}}return _}function d(_,M){return M===md?_.mapping=ya:M===gd&&(_.mapping=ms),_}function m(_){let M=0;const w=6;for(let b=0;b<w;b++)_[b]!==void 0&&M++;return M===w}function p(_){const M=_.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(_){const M=_.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function x(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:x}}function _w(i){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=i.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&ds("WebGLRenderer: "+a+" extension not supported."),s}}}function xw(i,e,t,a){const s={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",u),delete s[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(x,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)e.update(_[M],i.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,w=x.attributes.position;let b=0;if(w===void 0)return;if(M!==null){const D=M.array;b=M.version;for(let z=0,R=D.length;z<R;z+=3){const L=D[z+0],P=D[z+1],I=D[z+2];_.push(L,P,P,I,I,L)}}else{const D=w.array;b=w.version;for(let z=0,R=D.length/3-1;z<R;z+=3){const L=z+0,P=z+1,I=z+2;_.push(L,P,P,I,I,L)}}const y=new(w.count>=65535?hv:fv)(_,1);y.version=b;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function v(x){const _=l.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function Sw(i,e,t){let a;function s(x){a=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function m(x,_){i.drawElements(a,_,l,x*u),t.update(_,a,1)}function p(x,_,M){M!==0&&(i.drawElementsInstanced(a,_,l,x*u,M),t.update(_,a,M))}function v(x,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,l,x,0,M);let b=0;for(let y=0;y<M;y++)b+=_[y];t.update(b,a,1)}this.setMode=s,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function yw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:Ut("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function Mw(i,e,t){const a=new WeakMap,s=new en;function l(u,d,m){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let U=function(){I.dispose(),a.delete(d),d.removeEventListener("dispose",U)};_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],D=d.morphAttributes.color||[];let z=0;M===!0&&(z=1),w===!0&&(z=2),b===!0&&(z=3);let R=d.attributes.position.count*z,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*L*4*x),I=new uv(P,R,L,x);I.type=Bi,I.needsUpdate=!0;const T=z*4;for(let H=0;H<x;H++){const B=y[H],j=S[H],ie=D[H],G=R*L*4*H;for(let te=0;te<B.count;te++){const Q=te*T;M===!0&&(s.fromBufferAttribute(B,te),P[G+Q+0]=s.x,P[G+Q+1]=s.y,P[G+Q+2]=s.z,P[G+Q+3]=0),w===!0&&(s.fromBufferAttribute(j,te),P[G+Q+4]=s.x,P[G+Q+5]=s.y,P[G+Q+6]=s.z,P[G+Q+7]=0),b===!0&&(s.fromBufferAttribute(ie,te),P[G+Q+8]=s.x,P[G+Q+9]=s.y,P[G+Q+10]=s.z,P[G+Q+11]=ie.itemSize===4?s.w:1)}}_={count:x,texture:I,size:new dt(R,L)},a.set(d,_),d.addEventListener("dispose",U)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const w=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(i,"morphTargetBaseInfluence",w),m.getUniforms().setValue(i,"morphTargetInfluences",p)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function Ew(i,e,t,a,s){let l=new WeakMap;function u(p){const v=s.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==v&&(e.update(_),l.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return _}function d(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const Tw={[Y0]:"LINEAR_TONE_MAPPING",[K0]:"REINHARD_TONE_MAPPING",[j0]:"CINEON_TONE_MAPPING",[Z0]:"ACES_FILMIC_TONE_MAPPING",[Q0]:"AGX_TONE_MAPPING",[ev]:"NEUTRAL_TONE_MAPPING",[J0]:"CUSTOM_TONE_MAPPING"};function ww(i,e,t,a,s,l){const u=new Ui(e,t,{type:i,depthBuffer:s,stencilBuffer:l,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null;const p=new jn;p.setAttribute("position",new pn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new pn([0,2,0,0,2,0],2));const v=new lM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new ai(p,v),_=new gh(-1,1,1,-1,0,1);let M=null,w=null,b=!1,y,S=null,D=[],z=!1;this.setSize=function(R,L){u.setSize(R,L),d!==null&&d.setSize(R,L),m!==null&&m.setSize(R,L);for(let P=0;P<D.length;P++){const I=D[P];I.setSize&&I.setSize(R,L)}},this.setEffects=function(R){D=R,z=D.length>0&&D[0].isRenderPass===!0;const L=u.width,P=u.height;D.length>0&&d===null&&(d=new Ui(L,P,{type:qi,depthBuffer:!1,stencilBuffer:!1}),m=new Ui(L,P,{type:qi,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<D.length;I++){const T=D[I];T.setSize&&T.setSize(L,P)}},this.begin=function(R,L){if(b||R.toneMapping===Xi&&D.length===0)return!1;if(S=L,L!==null){const P=L.width,I=L.height;(u.width!==P||u.height!==I)&&this.setSize(P,I)}return z===!1&&R.setRenderTarget(u),y=R.toneMapping,R.toneMapping=Xi,!0},this.hasRenderPass=function(){return z},this.end=function(R,L){R.toneMapping=y,b=!0;let P=u,I=d;for(let T=0;T<D.length;T++){const U=D[T];U.enabled!==!1&&(U.render(R,I,P,L),U.needsSwap!==!1&&(P=I,I=I===d?m:d))}if(M!==R.outputColorSpace||w!==R.toneMapping){M=R.outputColorSpace,w=R.toneMapping,v.defines={},Ct.getTransfer(M)===Gt&&(v.defines.SRGB_TRANSFER="");const T=Tw[w];T&&(v.defines[T]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(S),R.render(x,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),p.dispose(),v.dispose()}}const Mv=new Hn,Vf=new To(1,1),Ev=new uv,Tv=new zy,wv=new pv,Kg=[],jg=[],Zg=new Float32Array(16),Jg=new Float32Array(9),Qg=new Float32Array(4);function vs(i,e,t){const a=i[0];if(a<=0||a>0)return i;const s=e*t;let l=Kg[s];if(l===void 0&&(l=new Float32Array(s),Kg[s]=l),e!==0){a.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(l,d)}return l}function mn(i,e){if(i.length!==e.length)return!1;for(let t=0,a=i.length;t<a;t++)if(i[t]!==e[t])return!1;return!0}function gn(i,e){for(let t=0,a=e.length;t<a;t++)i[t]=e[t]}function Lc(i,e){let t=jg[e];t===void 0&&(t=new Int32Array(e),jg[e]=t);for(let a=0;a!==e;++a)t[a]=i.allocateTextureUnit();return t}function Aw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function Cw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2fv(this.addr,e),gn(t,e)}}function Rw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(mn(t,e))return;i.uniform3fv(this.addr,e),gn(t,e)}}function bw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4fv(this.addr,e),gn(t,e)}}function Pw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(mn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,a))return;Qg.set(a),i.uniformMatrix2fv(this.addr,!1,Qg),gn(t,a)}}function Lw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(mn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,a))return;Jg.set(a),i.uniformMatrix3fv(this.addr,!1,Jg),gn(t,a)}}function Dw(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(mn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),gn(t,e)}else{if(mn(t,a))return;Zg.set(a),i.uniformMatrix4fv(this.addr,!1,Zg),gn(t,a)}}function Nw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function Uw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2iv(this.addr,e),gn(t,e)}}function Fw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3iv(this.addr,e),gn(t,e)}}function Ow(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4iv(this.addr,e),gn(t,e)}}function Iw(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function kw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(mn(t,e))return;i.uniform2uiv(this.addr,e),gn(t,e)}}function zw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(mn(t,e))return;i.uniform3uiv(this.addr,e),gn(t,e)}}function Hw(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(mn(t,e))return;i.uniform4uiv(this.addr,e),gn(t,e)}}function Vw(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s);let l;this.type===i.SAMPLER_2D_SHADOW?(Vf.compareFunction=t.isReversedDepthBuffer()?sh:ah,l=Vf):l=Mv,t.setTexture2D(e||l,s)}function Gw(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||Tv,s)}function Bw(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||wv,s)}function Ww(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||Ev,s)}function Xw(i){switch(i){case 5126:return Aw;case 35664:return Cw;case 35665:return Rw;case 35666:return bw;case 35674:return Pw;case 35675:return Lw;case 35676:return Dw;case 5124:case 35670:return Nw;case 35667:case 35671:return Uw;case 35668:case 35672:return Fw;case 35669:case 35673:return Ow;case 5125:return Iw;case 36294:return kw;case 36295:return zw;case 36296:return Hw;case 35678:case 36198:case 36298:case 36306:case 35682:return Vw;case 35679:case 36299:case 36307:return Gw;case 35680:case 36300:case 36308:case 36293:return Bw;case 36289:case 36303:case 36311:case 36292:return Ww}}function $w(i,e){i.uniform1fv(this.addr,e)}function qw(i,e){const t=vs(e,this.size,2);i.uniform2fv(this.addr,t)}function Yw(i,e){const t=vs(e,this.size,3);i.uniform3fv(this.addr,t)}function Kw(i,e){const t=vs(e,this.size,4);i.uniform4fv(this.addr,t)}function jw(i,e){const t=vs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function Zw(i,e){const t=vs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function Jw(i,e){const t=vs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function Qw(i,e){i.uniform1iv(this.addr,e)}function eA(i,e){i.uniform2iv(this.addr,e)}function tA(i,e){i.uniform3iv(this.addr,e)}function nA(i,e){i.uniform4iv(this.addr,e)}function iA(i,e){i.uniform1uiv(this.addr,e)}function rA(i,e){i.uniform2uiv(this.addr,e)}function aA(i,e){i.uniform3uiv(this.addr,e)}function sA(i,e){i.uniform4uiv(this.addr,e)}function oA(i,e,t){const a=this.cache,s=e.length,l=Lc(t,s);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));let u;this.type===i.SAMPLER_2D_SHADOW?u=Vf:u=Mv;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,l[d])}function lA(i,e,t){const a=this.cache,s=e.length,l=Lc(t,s);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Tv,l[u])}function cA(i,e,t){const a=this.cache,s=e.length,l=Lc(t,s);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||wv,l[u])}function uA(i,e,t){const a=this.cache,s=e.length,l=Lc(t,s);mn(a,l)||(i.uniform1iv(this.addr,l),gn(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Ev,l[u])}function dA(i){switch(i){case 5126:return $w;case 35664:return qw;case 35665:return Yw;case 35666:return Kw;case 35674:return jw;case 35675:return Zw;case 35676:return Jw;case 5124:case 35670:return Qw;case 35667:case 35671:return eA;case 35668:case 35672:return tA;case 35669:case 35673:return nA;case 5125:return iA;case 36294:return rA;case 36295:return aA;case 36296:return sA;case 35678:case 36198:case 36298:case 36306:case 35682:return oA;case 35679:case 36299:case 36307:return lA;case 35680:case 36300:case 36308:case 36293:return cA;case 36289:case 36303:case 36311:case 36292:return uA}}class fA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=Xw(t.type)}}class hA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=dA(t.type)}}class pA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const d=s[l];d.setValue(e,t[d.id],a)}}}const Xd=/(\w+)(\])?(\[|\.)?/g;function e0(i,e){i.seq.push(e),i.map[e.id]=e}function mA(i,e,t){const a=i.name,s=a.length;for(Xd.lastIndex=0;;){const l=Xd.exec(a),u=Xd.lastIndex;let d=l[1];const m=l[2]==="]",p=l[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===s){e0(t,p===void 0?new fA(d,i,e):new hA(d,i,e));break}else{let x=t.map[d];x===void 0&&(x=new pA(d),e0(t,x)),t=x}}}class hc{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(t,u),m=e.getUniformLocation(t,d.name);mA(d,m,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const d=t[l],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function t0(i,e,t){const a=i.createShader(e);return i.shaderSource(a,t),i.compileShader(a),a}const gA=37297;let vA=0;function _A(i,e){const t=i.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return a.join(`
`)}const n0=new gt;function xA(i){Ct._getMatrix(n0,Ct.workingColorSpace,i);const e=`mat3( ${n0.elements.map(t=>t.toFixed(4))} )`;switch(Ct.getTransfer(i)){case Sc:return[e,"LinearTransferOETF"];case Gt:return[e,"sRGBTransferOETF"];default:return ut("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function i0(i,e,t){const a=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+_A(i.getShaderSource(e),d)}else return l}function SA(i,e){const t=xA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const yA={[Y0]:"Linear",[K0]:"Reinhard",[j0]:"Cineon",[Z0]:"ACESFilmic",[Q0]:"AgX",[ev]:"Neutral",[J0]:"Custom"};function MA(i,e){const t=yA[e];return t===void 0?(ut("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const nc=new re;function EA(){Ct.getLuminanceCoefficients(nc);const i=nc.x.toFixed(4),e=nc.y.toFixed(4),t=nc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function TA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ho).join(`
`)}function wA(i){const e=[];for(const t in i){const a=i[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function AA(i,e){const t={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=i.getActiveAttrib(e,s),u=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function ho(i){return i!==""}function r0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function a0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const CA=/^[ \t]*#include +<([\w\d./]+)>/gm;function Gf(i){return i.replace(CA,bA)}const RA=new Map;function bA(i,e){let t=St[e];if(t===void 0){const a=RA.get(e);if(a!==void 0)t=St[a],ut('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Gf(t)}const PA=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function s0(i){return i.replace(PA,LA)}function LA(i,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function o0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const DA={[oc]:"SHADOWMAP_TYPE_PCF",[uo]:"SHADOWMAP_TYPE_VSM"};function NA(i){return DA[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const UA={[ya]:"ENVMAP_TYPE_CUBE",[ms]:"ENVMAP_TYPE_CUBE",[Rc]:"ENVMAP_TYPE_CUBE_UV"};function FA(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":UA[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const OA={[ms]:"ENVMAP_MODE_REFRACTION"};function IA(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":OA[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const kA={[q0]:"ENVMAP_BLENDING_MULTIPLY",[my]:"ENVMAP_BLENDING_MIX",[gy]:"ENVMAP_BLENDING_ADD"};function zA(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":kA[i.combine]||"ENVMAP_BLENDING_NONE"}function HA(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function VA(i,e,t,a){const s=i.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const m=NA(t),p=FA(t),v=IA(t),x=zA(t),_=HA(t),M=TA(t),w=wA(l),b=s.createProgram();let y,S,D=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(ho).join(`
`),S.length>0&&(S+=`
`)):(y=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ho).join(`
`),S=[o0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==Xi?"#define TONE_MAPPING":"",t.toneMapping!==Xi?St.tonemapping_pars_fragment:"",t.toneMapping!==Xi?MA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",St.colorspace_pars_fragment,SA("linearToOutputTexel",t.outputColorSpace),EA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(ho).join(`
`)),u=Gf(u),u=r0(u,t),u=a0(u,t),d=Gf(d),d=r0(d,t),d=a0(d,t),u=s0(u),d=s0(d),t.isRawShaderMaterial!==!0&&(D=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===hg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===hg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const z=D+y+u,R=D+S+d,L=t0(s,s.VERTEX_SHADER,z),P=t0(s,s.FRAGMENT_SHADER,R);s.attachShader(b,L),s.attachShader(b,P),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(B){if(i.debug.checkShaderErrors){const j=s.getProgramInfoLog(b)||"",ie=s.getShaderInfoLog(L)||"",G=s.getShaderInfoLog(P)||"",te=j.trim(),Q=ie.trim(),le=G.trim();let q=!0,K=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,L,P);else{const Z=i0(s,L,"vertex"),N=i0(s,P,"fragment");Ut("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+te+`
`+Z+`
`+N)}else te!==""?ut("WebGLProgram: Program Info Log:",te):(Q===""||le==="")&&(K=!1);K&&(B.diagnostics={runnable:q,programLog:te,vertexShader:{log:Q,prefix:y},fragmentShader:{log:le,prefix:S}})}s.deleteShader(L),s.deleteShader(P),T=new hc(s,b),U=AA(s,b)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let U;this.getAttributes=function(){return U===void 0&&I(this),U};let H=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return H===!1&&(H=s.getProgramParameter(b,gA)),H},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=vA++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let GA=0;class BA{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,a){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new WA(e),t.set(e,a)),a}}class WA{constructor(e){this.id=GA++,this.code=e,this.usedTimes=0}}function XA(i){return i===Ma||i===vc||i===_c}function $A(i,e,t,a,s,l){const u=new lh,d=new BA,m=new Set,p=[],v=new Map,x=a.logarithmicDepthBuffer;let _=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return m.add(T),T===0?"uv":`uv${T}`}function b(T,U,H,B,j,ie){const G=B.fog,te=j.geometry,Q=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,le=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,q=e.get(T.envMap||Q,le),K=q&&q.mapping===Rc?q.image.height:null,Z=M[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&ut("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const N=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,oe=N!==void 0?N.length:0;let Se=0;te.morphAttributes.position!==void 0&&(Se=1),te.morphAttributes.normal!==void 0&&(Se=2),te.morphAttributes.color!==void 0&&(Se=3);let Ge,ze,$e,k;if(Z){const Ot=Gi[Z];Ge=Ot.vertexShader,ze=Ot.fragmentShader}else{Ge=T.vertexShader,ze=T.fragmentShader;const Ot=d.getVertexShaderStage(T),Lt=d.getFragmentShaderStage(T);d.update(T,Ot,Lt),$e=Ot.id,k=Lt.id}const J=i.getRenderTarget(),ge=i.state.buffers.depth.getReversed(),Le=j.isInstancedMesh===!0,Ae=j.isBatchedMesh===!0,st=!!T.map,ht=!!T.matcap,Be=!!q,pt=!!T.aoMap,_t=!!T.lightMap,ot=!!T.bumpMap&&T.wireframe===!1,Rt=!!T.normalMap,bt=!!T.displacementMap,Pt=!!T.emissiveMap,yt=!!T.metalnessMap,zt=!!T.roughnessMap,W=T.anisotropy>0,nn=T.clearcoat>0,Ft=T.dispersion>0,F=T.retroreflectivity>0,E=T.iridescence>0,ee=T.sheen>0,ue=T.transmission>0,he=W&&!!T.anisotropyMap,Te=nn&&!!T.clearcoatMap,Re=nn&&!!T.clearcoatNormalMap,pe=nn&&!!T.clearcoatRoughnessMap,_e=E&&!!T.iridescenceMap,De=E&&!!T.iridescenceThicknessMap,Je=ee&&!!T.sheenColorMap,Ne=ee&&!!T.sheenRoughnessMap,Ce=!!T.specularMap,Qe=!!T.specularColorMap,it=!!T.specularIntensityMap,lt=ue&&!!T.transmissionMap,X=ue&&!!T.thicknessMap,be=!!T.gradientMap,ve=!!T.alphaMap,Pe=T.alphaTest>0,ke=!!T.alphaHash,xe=!!T.extensions;let tt=Xi;T.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(tt=i.toneMapping);const je={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:Ge,fragmentShader:ze,defines:T.defines,customVertexShaderID:$e,customFragmentShaderID:k,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:Ae,batchingColor:Ae&&j._colorsTexture!==null,instancing:Le,instancingColor:Le&&j.instanceColor!==null,instancingMorph:Le&&j.morphTexture!==null,outputColorSpace:J===null?i.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Ct.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:st,matcap:ht,envMap:Be,envMapMode:Be&&q.mapping,envMapCubeUVHeight:K,aoMap:pt,lightMap:_t,bumpMap:ot,normalMap:Rt,displacementMap:bt,emissiveMap:Pt,normalMapObjectSpace:Rt&&T.normalMapType===xy,normalMapTangentSpace:Rt&&T.normalMapType===kf,packedNormalMap:Rt&&T.normalMapType===kf&&XA(T.normalMap.format),metalnessMap:yt,roughnessMap:zt,anisotropy:W,anisotropyMap:he,clearcoat:nn,clearcoatMap:Te,clearcoatNormalMap:Re,clearcoatRoughnessMap:pe,dispersion:Ft,retroreflection:F,iridescence:E,iridescenceMap:_e,iridescenceThicknessMap:De,sheen:ee,sheenColorMap:Je,sheenRoughnessMap:Ne,specularMap:Ce,specularColorMap:Qe,specularIntensityMap:it,transmission:ue,transmissionMap:lt,thicknessMap:X,gradientMap:be,opaque:T.transparent===!1&&T.blending===mo&&T.alphaToCoverage===!1,alphaMap:ve,alphaTest:Pe,alphaHash:ke,combine:T.combine,mapUv:st&&w(T.map.channel),aoMapUv:pt&&w(T.aoMap.channel),lightMapUv:_t&&w(T.lightMap.channel),bumpMapUv:ot&&w(T.bumpMap.channel),normalMapUv:Rt&&w(T.normalMap.channel),displacementMapUv:bt&&w(T.displacementMap.channel),emissiveMapUv:Pt&&w(T.emissiveMap.channel),metalnessMapUv:yt&&w(T.metalnessMap.channel),roughnessMapUv:zt&&w(T.roughnessMap.channel),anisotropyMapUv:he&&w(T.anisotropyMap.channel),clearcoatMapUv:Te&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:Re&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:pe&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:De&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Je&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Ne&&w(T.sheenRoughnessMap.channel),specularMapUv:Ce&&w(T.specularMap.channel),specularColorMapUv:Qe&&w(T.specularColorMap.channel),specularIntensityMapUv:it&&w(T.specularIntensityMap.channel),transmissionMapUv:lt&&w(T.transmissionMap.channel),thicknessMapUv:X&&w(T.thicknessMap.channel),alphaMapUv:ve&&w(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Rt||W),vertexNormals:!!te.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:j.isPoints===!0&&!!te.attributes.uv&&(st||ve),fog:!!G,useFog:T.fog===!0,fogExp2:!!G&&G.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||te.attributes.normal===void 0&&Rt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:ge,skinning:j.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&H.length>0,shadowMapType:i.shadowMap.type,toneMapping:tt,decodeVideoTexture:st&&T.map.isVideoTexture===!0&&Ct.getTransfer(T.map.colorSpace)===Gt,decodeVideoTextureEmissive:Pt&&T.emissiveMap.isVideoTexture===!0&&Ct.getTransfer(T.emissiveMap.colorSpace)===Gt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Pi,flipSided:T.side===Kn,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:xe&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(xe&&T.extensions.multiDraw===!0||Ae)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return je.vertexUv1s=m.has(1),je.vertexUv2s=m.has(2),je.vertexUv3s=m.has(3),m.clear(),je}function y(T){const U=[];if(T.shaderID?U.push(T.shaderID):(U.push(T.customVertexShaderID),U.push(T.customFragmentShaderID)),T.defines!==void 0)for(const H in T.defines)U.push(H),U.push(T.defines[H]);return T.isRawShaderMaterial===!1&&(S(U,T),D(U,T),U.push(i.outputColorSpace)),U.push(T.customProgramCacheKey),U.join()}function S(T,U){T.push(U.precision),T.push(U.outputColorSpace),T.push(U.envMapMode),T.push(U.envMapCubeUVHeight),T.push(U.mapUv),T.push(U.alphaMapUv),T.push(U.lightMapUv),T.push(U.aoMapUv),T.push(U.bumpMapUv),T.push(U.normalMapUv),T.push(U.displacementMapUv),T.push(U.emissiveMapUv),T.push(U.metalnessMapUv),T.push(U.roughnessMapUv),T.push(U.anisotropyMapUv),T.push(U.clearcoatMapUv),T.push(U.clearcoatNormalMapUv),T.push(U.clearcoatRoughnessMapUv),T.push(U.iridescenceMapUv),T.push(U.iridescenceThicknessMapUv),T.push(U.sheenColorMapUv),T.push(U.sheenRoughnessMapUv),T.push(U.specularMapUv),T.push(U.specularColorMapUv),T.push(U.specularIntensityMapUv),T.push(U.transmissionMapUv),T.push(U.thicknessMapUv),T.push(U.combine),T.push(U.fogExp2),T.push(U.sizeAttenuation),T.push(U.morphTargetsCount),T.push(U.morphAttributeCount),T.push(U.numSunLights),T.push(U.numDirLights),T.push(U.numPointLights),T.push(U.numSpotLights),T.push(U.numSpotLightMaps),T.push(U.numHemiLights),T.push(U.numRectAreaLights),T.push(U.numSunLightShadows),T.push(U.numDirLightShadows),T.push(U.numPointLightShadows),T.push(U.numSpotLightShadows),T.push(U.numSpotLightShadowsWithMaps),T.push(U.numLightProbes),T.push(U.shadowMapType),T.push(U.toneMapping),T.push(U.numClippingPlanes),T.push(U.numClipIntersection),T.push(U.depthPacking)}function D(T,U){u.disableAll(),U.instancing&&u.enable(0),U.instancingColor&&u.enable(1),U.instancingMorph&&u.enable(2),U.matcap&&u.enable(3),U.envMap&&u.enable(4),U.normalMapObjectSpace&&u.enable(5),U.normalMapTangentSpace&&u.enable(6),U.clearcoat&&u.enable(7),U.iridescence&&u.enable(8),U.alphaTest&&u.enable(9),U.vertexColors&&u.enable(10),U.vertexAlphas&&u.enable(11),U.vertexUv1s&&u.enable(12),U.vertexUv2s&&u.enable(13),U.vertexUv3s&&u.enable(14),U.vertexTangents&&u.enable(15),U.anisotropy&&u.enable(16),U.alphaHash&&u.enable(17),U.batching&&u.enable(18),U.dispersion&&u.enable(19),U.retroreflection&&u.enable(24),U.batchingColor&&u.enable(20),U.gradientMap&&u.enable(21),U.packedNormalMap&&u.enable(22),U.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),U.fog&&u.enable(0),U.useFog&&u.enable(1),U.flatShading&&u.enable(2),U.logarithmicDepthBuffer&&u.enable(3),U.reversedDepthBuffer&&u.enable(4),U.skinning&&u.enable(5),U.morphTargets&&u.enable(6),U.morphNormals&&u.enable(7),U.morphColors&&u.enable(8),U.premultipliedAlpha&&u.enable(9),U.shadowMapEnabled&&u.enable(10),U.doubleSided&&u.enable(11),U.flipSided&&u.enable(12),U.useDepthPacking&&u.enable(13),U.dithering&&u.enable(14),U.transmission&&u.enable(15),U.sheen&&u.enable(16),U.opaque&&u.enable(17),U.pointsUvs&&u.enable(18),U.decodeVideoTexture&&u.enable(19),U.decodeVideoTextureEmissive&&u.enable(20),U.alphaToCoverage&&u.enable(21),U.numLightProbeGrids>0&&u.enable(22),U.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function z(T){const U=M[T.type];let H;if(U){const B=Gi[U];H=aM.clone(B.uniforms)}else H=T.uniforms;return H}function R(T,U){let H=v.get(U);return H!==void 0?++H.usedTimes:(H=new VA(i,U,T,s),p.push(H),v.set(U,H)),H}function L(T){if(--T.usedTimes===0){const U=p.indexOf(T);p[U]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){d.remove(T)}function I(){d.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:z,acquireProgram:R,releaseProgram:L,releaseShaderCache:P,programs:p,dispose:I}}function qA(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function a(u){i.delete(u)}function s(u,d,m){i.get(u)[d]=m}function l(){i=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function YA(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function l0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function c0(){const i=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,w,b,y,S){let D=i[e];return D===void 0?(D={id:_.id,object:_,geometry:M,material:w,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:y,group:S},i[e]=D):(D.id=_.id,D.object=_,D.geometry=M,D.material=w,D.materialVariant=u(_),D.groupOrder=b,D.renderOrder=_.renderOrder,D.z=y,D.group=S),e++,D}function m(_,M,w,b,y,S,D){D.reversedDepth===!0&&(y=-y);const z=d(_,M,w,b,y,S);w.transmission>0?a.push(z):w.transparent===!0?s.push(z):t.push(z)}function p(_,M,w,b,y,S){const D=d(_,M,w,b,y,S);w.transmission>0?a.unshift(D):w.transparent===!0?s.unshift(D):t.unshift(D)}function v(_,M){t.length>1&&t.sort(_||YA),a.length>1&&a.sort(M||l0),s.length>1&&s.sort(M||l0)}function x(){for(let _=e,M=i.length;_<M;_++){const w=i[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:m,unshift:p,finish:x,sort:v}}function KA(){let i=new WeakMap;function e(a,s){const l=i.get(a);let u;return l===void 0?(u=new c0,i.set(a,[u])):s>=l.length?(u=new c0,l.push(u)):u=l[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function jA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new re,color:new Tt};break;case"SpotLight":t={position:new re,direction:new re,color:new Tt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new re,color:new Tt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new re,skyColor:new Tt,groundColor:new Tt};break;case"RectAreaLight":t={color:new Tt,position:new re,halfWidth:new re,halfHeight:new re};break}return i[e.id]=t,t}}}function ZA(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new dt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let JA=0;function QA(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function eC(i){const e=new jA,t=ZA(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new re);const s=new re,l=new tn,u=new tn;function d(p){let v=0,x=0,_=0;for(let j=0;j<9;j++)a.probe[j].set(0,0,0);let M=0,w=0,b=0,y=0,S=0,D=0,z=0,R=0,L=0,P=0,I=0,T=0,U=0,H=0;p.sort(QA);for(let j=0,ie=p.length;j<ie;j++){const G=p[j],te=G.color,Q=G.intensity,le=G.distance;let q=null;if(G.shadow&&G.shadow.map&&(G.shadow.map.texture.format===Ma?q=G.shadow.map.texture:q=G.shadow.map.depthTexture||G.shadow.map.texture),G.isAmbientLight)v+=te.r*Q,x+=te.g*Q,_+=te.b*Q;else if(G.isLightProbe){for(let K=0;K<9;K++)a.probe[K].addScaledVector(G.sh.coefficients[K],Q);H++}else if(G.isSunLight){const K=e.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,N=t.get(G);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),a.sunShadow[w]=N,a.sunShadowMap[w]=q;const oe=Z.getViewportCount();for(let Se=0;Se<oe;Se++)a.sunShadowMatrix[b+Se]=Z.getMatrix(Se),a.sunShadowCascade[b+Se]=Z._cascadeData[Se];b+=oe,w++}a.sun[M]=K,M++}else if(G.isDirectionalLight){const K=e.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity),G.castShadow){const Z=G.shadow,N=t.get(G);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,a.directionalShadow[y]=N,a.directionalShadowMap[y]=q,a.directionalShadowMatrix[y]=G.shadow.matrix,L++}a.directional[y]=K,y++}else if(G.isSpotLight){const K=e.get(G);K.position.setFromMatrixPosition(G.matrixWorld),K.color.copy(te).multiplyScalar(Q),K.distance=le,K.coneCos=Math.cos(G.angle),K.penumbraCos=Math.cos(G.angle*(1-G.penumbra)),K.decay=G.decay,a.spot[D]=K;const Z=G.shadow;if(G.map&&(a.spotLightMap[T]=G.map,T++,Z.updateMatrices(G),G.castShadow&&U++),a.spotLightMatrix[D]=Z.matrix,G.castShadow){const N=t.get(G);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,a.spotShadow[D]=N,a.spotShadowMap[D]=q,I++}D++}else if(G.isRectAreaLight){const K=e.get(G);K.color.copy(te).multiplyScalar(Q),K.halfWidth.set(G.width*.5,0,0),K.halfHeight.set(0,G.height*.5,0),a.rectArea[z]=K,z++}else if(G.isPointLight){const K=e.get(G);if(K.color.copy(G.color).multiplyScalar(G.intensity),K.distance=G.distance,K.decay=G.decay,G.castShadow){const Z=G.shadow,N=t.get(G);N.shadowIntensity=Z.intensity,N.shadowBias=Z.bias,N.shadowNormalBias=Z.normalBias,N.shadowRadius=Z.radius,N.shadowMapSize=Z.mapSize,N.shadowCameraNear=Z.camera.near,N.shadowCameraFar=Z.camera.far,a.pointShadow[S]=N,a.pointShadowMap[S]=q,a.pointShadowMatrix[S]=G.shadow.matrix,P++}a.point[S]=K,S++}else if(G.isHemisphereLight){const K=e.get(G);K.skyColor.copy(G.color).multiplyScalar(Q),K.groundColor.copy(G.groundColor).multiplyScalar(Q),a.hemi[R]=K,R++}}z>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ie.LTC_FLOAT_1,a.rectAreaLTC2=Ie.LTC_FLOAT_2):(a.rectAreaLTC1=Ie.LTC_HALF_1,a.rectAreaLTC2=Ie.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=_;const B=a.hash;(B.sunLength!==M||B.directionalLength!==y||B.pointLength!==S||B.spotLength!==D||B.rectAreaLength!==z||B.hemiLength!==R||B.numSunShadows!==w||B.numDirectionalShadows!==L||B.numPointShadows!==P||B.numSpotShadows!==I||B.numSpotMaps!==T||B.numLightProbes!==H)&&(a.sun.length=M,a.directional.length=y,a.spot.length=D,a.rectArea.length=z,a.point.length=S,a.hemi.length=R,a.sunShadow.length=w,a.sunShadowMap.length=w,a.sunShadowMatrix.length=b,a.sunShadowCascade.length=b,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.directionalShadowMatrix.length=L,a.pointShadow.length=P,a.pointShadowMap.length=P,a.pointShadowMatrix.length=P,a.spotShadow.length=I,a.spotShadowMap.length=I,a.spotLightMatrix.length=I+T-U,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=U,a.numLightProbes=H,B.sunLength=M,B.directionalLength=y,B.pointLength=S,B.spotLength=D,B.rectAreaLength=z,B.hemiLength=R,B.numSunShadows=w,B.numDirectionalShadows=L,B.numPointShadows=P,B.numSpotShadows=I,B.numSpotMaps=T,B.numLightProbes=H,a.version=JA++)}function m(p,v){let x=0,_=0,M=0,w=0,b=0,y=0;const S=v.matrixWorldInverse;for(let D=0,z=p.length;D<z;D++){const R=p[D];if(R.isSunLight){const L=a.sun[x];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(S),x++}else if(R.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),_++}else if(R.isSpotLight){const L=a.spot[w];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),w++}else if(R.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(R.isPointLight){const L=a.point[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),M++}else if(R.isHemisphereLight){const L=a.hemi[y];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(S),y++}}}return{setup:d,setupView:m,state:a}}function u0(i){const e=new eC(i),t=[],a=[],s=[];function l(_){x.camera=_,t.length=0,a.length=0,s.length=0}function u(_){t.push(_)}function d(_){a.push(_)}function m(_){s.push(_)}function p(){e.setup(t)}function v(_){e.setupView(t,_)}const x={lightsArray:t,shadowsArray:a,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function tC(i){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let d;return u===void 0?(d=new u0(i),e.set(s,[d])):l>=u.length?(d=new u0(i),u.push(d)):d=u[l],d}function a(){e=new WeakMap}return{get:t,dispose:a}}const nC=`void main() {
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
}`,rC=[new re(1,0,0),new re(-1,0,0),new re(0,1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1)],aC=[new re(0,-1,0),new re(0,-1,0),new re(0,0,1),new re(0,0,-1),new re(0,-1,0),new re(0,-1,0)],d0=new tn,lo=new re,$d=new re;function sC(i,e,t){let a=new fh;const s=new dt,l=new dt,u=new en,d=new cM,m=new uM,p={},v=t.maxTextureSize,x={[Sa]:Kn,[Kn]:Sa,[Pi]:Pi},_=new Yi({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new dt},radius:{value:4}},vertexShader:nC,fragmentShader:iC}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new jn;w.setAttribute("position",new si(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new ai(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=oc;let S=this.type;this.render=function(P,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===jS&&(ut("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=oc);const U=i.getRenderTarget(),H=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),j=i.state;j.setBlending(hr),j.buffers.depth.getReversed()===!0?j.buffers.color.setClear(0,0,0,0):j.buffers.color.setClear(1,1,1,1),j.buffers.depth.setTest(!0),j.setScissorTest(!1);const ie=S!==this.type;ie&&I.traverse(function(G){G.material&&(Array.isArray(G.material)?G.material.forEach(te=>te.needsUpdate=!0):G.material.needsUpdate=!0)});for(let G=0,te=P.length;G<te;G++){const Q=P[G],le=Q.shadow;if(le===void 0){ut("WebGLShadowMap:",Q,"has no shadow.");continue}if(le.autoUpdate===!1&&le.needsUpdate===!1)continue;s.copy(le.mapSize);const q=le.getFrameExtents();s.multiply(q),l.copy(le.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(l.x=Math.floor(v/q.x),s.x=l.x*q.x,le.mapSize.x=l.x),s.y>v&&(l.y=Math.floor(v/q.y),s.y=l.y*q.y,le.mapSize.y=l.y));const K=i.state.buffers.depth.getReversed();if(le.camera._reversedDepth=K,le.map===null||ie===!0){if(le.map!==null&&(le.map.depthTexture!==null&&(le.map.depthTexture.dispose(),le.map.depthTexture=null),le.map.dispose()),this.type===uo){if(Q.isPointLight){ut("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}le.map=new Ui(s.x,s.y,{format:Ma,type:qi,minFilter:Fn,magFilter:Fn,generateMipmaps:!1}),le.map.texture.name=Q.name+".shadowMap",le.map.depthTexture=new To(s.x,s.y,Bi),le.map.depthTexture.name=Q.name+".shadowMapDepth",le.map.depthTexture.format=mr,le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=wn,le.map.depthTexture.magFilter=wn}else Q.isPointLight?(le.map=new yv(s.x),le.map.depthTexture=new iM(s.x,$i)):(le.map=new Ui(s.x,s.y),le.map.depthTexture=new To(s.x,s.y,$i)),le.map.depthTexture.name=Q.name+".shadowMap",le.map.depthTexture.format=mr,this.type===oc?(le.map.depthTexture.compareFunction=K?sh:ah,le.map.depthTexture.minFilter=Fn,le.map.depthTexture.magFilter=Fn):(le.map.depthTexture.compareFunction=null,le.map.depthTexture.minFilter=wn,le.map.depthTexture.magFilter=wn);le.camera.updateProjectionMatrix()}le.map.isWebGLCubeRenderTarget!==!0&&(le.map.width!==s.x||le.map.height!==s.y)&&le.map.setSize(s.x,s.y);const Z=le.map.isWebGLCubeRenderTarget?6:le.getViewportCount();Q.isPointLight!==!0&&le.updateMatrices(Q,T);for(let N=0;N<Z;N++){const oe=le.getCamera(N);if(Q.isPointLight){const Se=le.camera,Ge=le.matrix,ze=Q.distance||Se.far;ze!==Se.far&&(Se.far=ze,Se.updateProjectionMatrix()),lo.setFromMatrixPosition(Q.matrixWorld),Se.position.copy(lo),$d.copy(Se.position),$d.add(rC[N]),Se.up.copy(aC[N]),Se.lookAt($d),Se.updateMatrixWorld(),Ge.makeTranslation(-lo.x,-lo.y,-lo.z),d0.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),le._frustum.setFromProjectionMatrix(d0,Se.coordinateSystem,Se.reversedDepth)}if(le.map.isWebGLCubeRenderTarget)i.setRenderTarget(le.map,N),i.clear();else{N===0&&(i.setRenderTarget(le.map),i.clear());const Se=le.getViewport(N);u.set(l.x*Se.x,l.y*Se.y,l.x*Se.z,l.y*Se.w),j.viewport(u)}a=le.getFrustum(N),R(I,T,oe,Q,this.type)}le.isPointLightShadow!==!0&&this.type===uo&&D(le,T),le.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(U,H,B)};function D(P,I){const T=e.update(b);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ui(s.x,s.y,{format:Ma,type:qi}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value.set(P.map.width,P.map.height),_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,T,_,b,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,T,M,b,null)}function z(P,I,T,U){let H=null;const B=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)H=B;else if(H=T.isPointLight===!0?m:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const j=H.uuid,ie=I.uuid;let G=p[j];G===void 0&&(G={},p[j]=G);let te=G[ie];te===void 0&&(te=H.clone(),G[ie]=te,I.addEventListener("dispose",L)),H=te}if(H.visible=I.visible,H.wireframe=I.wireframe,U===uo?H.side=I.shadowSide!==null?I.shadowSide:I.side:H.side=I.shadowSide!==null?I.shadowSide:x[I.side],H.alphaMap=I.alphaMap,H.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,H.map=I.map,H.clipShadows=I.clipShadows,H.clippingPlanes=I.clippingPlanes,H.clipIntersection=I.clipIntersection,H.displacementMap=I.displacementMap,H.displacementScale=I.displacementScale,H.displacementBias=I.displacementBias,H.wireframeLinewidth=I.wireframeLinewidth,H.linewidth=I.linewidth,T.isPointLight===!0&&H.isMeshDistanceMaterial===!0){const j=i.properties.get(H);j.light=T}return H}function R(P,I,T,U,H){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&H===uo)&&(!P.frustumCulled||P.intersectsFrustum(a))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),G=P.material;if(Array.isArray(G)){const te=ie.groups;for(let Q=0,le=te.length;Q<le;Q++){const q=te[Q],K=G[q.materialIndex];if(K&&K.visible){const Z=z(P,K,U,H);P.onBeforeShadow(i,P,I,T,ie,Z,q),i.renderBufferDirect(T,null,ie,Z,P,q),P.onAfterShadow(i,P,I,T,ie,Z,q)}}}else if(G.visible){const te=z(P,G,U,H);P.onBeforeShadow(i,P,I,T,ie,te,null),i.renderBufferDirect(T,null,ie,te,P,null),P.onAfterShadow(i,P,I,T,ie,te,null)}}const j=P.children;for(let ie=0,G=j.length;ie<G;ie++)R(j[ie],I,T,U,H)}function L(P){P.target.removeEventListener("dispose",L);for(const T in p){const U=p[T],H=P.target.uuid;H in U&&(U[H].dispose(),delete U[H])}}}function oC(i,e){function t(){let X=!1;const be=new en;let ve=null;const Pe=new en(0,0,0,0);return{setMask:function(ke){ve!==ke&&!X&&(i.colorMask(ke,ke,ke,ke),ve=ke)},setLocked:function(ke){X=ke},setClear:function(ke,xe,tt,je,Ot){Ot===!0&&(ke*=je,xe*=je,tt*=je),be.set(ke,xe,tt,je),Pe.equals(be)===!1&&(i.clearColor(ke,xe,tt,je),Pe.copy(be))},reset:function(){X=!1,ve=null,Pe.set(-1,0,0,0)}}}function a(){let X=!1,be=!1,ve=null,Pe=null,ke=null;return{setReversed:function(xe){if(be!==xe){const tt=e.get("EXT_clip_control");xe?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),be=xe;const je=ke;ke=null,this.setClear(je)}},getReversed:function(){return be},setTest:function(xe){xe?J(i.DEPTH_TEST):ge(i.DEPTH_TEST)},setMask:function(xe){ve!==xe&&!X&&(i.depthMask(xe),ve=xe)},setFunc:function(xe){if(be&&(xe=Ly[xe]),Pe!==xe){switch(xe){case Jd:i.depthFunc(i.NEVER);break;case Qd:i.depthFunc(i.ALWAYS);break;case ef:i.depthFunc(i.LESS);break;case So:i.depthFunc(i.LEQUAL);break;case tf:i.depthFunc(i.EQUAL);break;case nf:i.depthFunc(i.GEQUAL);break;case rf:i.depthFunc(i.GREATER);break;case af:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Pe=xe}},setLocked:function(xe){X=xe},setClear:function(xe){ke!==xe&&(ke=xe,be&&(xe=1-xe),i.clearDepth(xe))},reset:function(){X=!1,ve=null,Pe=null,ke=null,be=!1}}}function s(){let X=!1,be=null,ve=null,Pe=null,ke=null,xe=null,tt=null,je=null,Ot=null;return{setTest:function(Lt){X||(Lt?J(i.STENCIL_TEST):ge(i.STENCIL_TEST))},setMask:function(Lt){be!==Lt&&!X&&(i.stencilMask(Lt),be=Lt)},setFunc:function(Lt,Mn,oi){(ve!==Lt||Pe!==Mn||ke!==oi)&&(i.stencilFunc(Lt,Mn,oi),ve=Lt,Pe=Mn,ke=oi)},setOp:function(Lt,Mn,oi){(xe!==Lt||tt!==Mn||je!==oi)&&(i.stencilOp(Lt,Mn,oi),xe=Lt,tt=Mn,je=oi)},setLocked:function(Lt){X=Lt},setClear:function(Lt){Ot!==Lt&&(i.clearStencil(Lt),Ot=Lt)},reset:function(){X=!1,be=null,ve=null,Pe=null,ke=null,xe=null,tt=null,je=null,Ot=null}}}const l=new t,u=new a,d=new s,m=new WeakMap,p=new WeakMap;let v={},x={},_={},M=new WeakMap,w=[],b=null,y=!1,S=null,D=null,z=null,R=null,L=null,P=null,I=null,T=new Tt(0,0,0),U=0,H=!1,B=null,j=null,ie=null,G=null,te=null;const Q=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let le=!1,q=0;const K=i.getParameter(i.VERSION);K.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(K)[1]),le=q>=1):K.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(K)[1]),le=q>=2);let Z=null,N={};const oe=i.getParameter(i.SCISSOR_BOX),Se=i.getParameter(i.VIEWPORT),Ge=new en().fromArray(oe),ze=new en().fromArray(Se);function $e(X,be,ve,Pe){const ke=new Uint8Array(4),xe=i.createTexture();i.bindTexture(X,xe),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let tt=0;tt<ve;tt++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(be,0,i.RGBA,1,1,Pe,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(be+tt,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return xe}const k={};k[i.TEXTURE_2D]=$e(i.TEXTURE_2D,i.TEXTURE_2D,1),k[i.TEXTURE_CUBE_MAP]=$e(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),k[i.TEXTURE_2D_ARRAY]=$e(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),k[i.TEXTURE_3D]=$e(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),J(i.DEPTH_TEST),u.setFunc(So),ot(!1),Rt(cg),J(i.CULL_FACE),pt(hr);function J(X){v[X]!==!0&&(i.enable(X),v[X]=!0)}function ge(X){v[X]!==!1&&(i.disable(X),v[X]=!1)}function Le(X,be){return _[X]!==be?(i.bindFramebuffer(X,be),_[X]=be,X===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=be),X===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=be),!0):!1}function Ae(X,be){let ve=w,Pe=!1;if(X){ve=M.get(be),ve===void 0&&(ve=[],M.set(be,ve));const ke=X.textures;if(ve.length!==ke.length||ve[0]!==i.COLOR_ATTACHMENT0){for(let xe=0,tt=ke.length;xe<tt;xe++)ve[xe]=i.COLOR_ATTACHMENT0+xe;ve.length=ke.length,Pe=!0}}else ve[0]!==i.BACK&&(ve[0]=i.BACK,Pe=!0);Pe&&i.drawBuffers(ve)}function st(X){return b!==X?(i.useProgram(X),b=X,!0):!1}const ht={[os]:i.FUNC_ADD,[JS]:i.FUNC_SUBTRACT,[QS]:i.FUNC_REVERSE_SUBTRACT};ht[ey]=i.MIN,ht[ty]=i.MAX;const Be={[ny]:i.ZERO,[iy]:i.ONE,[ry]:i.SRC_COLOR,[X0]:i.SRC_ALPHA,[uy]:i.SRC_ALPHA_SATURATE,[ly]:i.DST_COLOR,[sy]:i.DST_ALPHA,[ay]:i.ONE_MINUS_SRC_COLOR,[$0]:i.ONE_MINUS_SRC_ALPHA,[cy]:i.ONE_MINUS_DST_COLOR,[oy]:i.ONE_MINUS_DST_ALPHA,[dy]:i.CONSTANT_COLOR,[fy]:i.ONE_MINUS_CONSTANT_COLOR,[hy]:i.CONSTANT_ALPHA,[py]:i.ONE_MINUS_CONSTANT_ALPHA};function pt(X,be,ve,Pe,ke,xe,tt,je,Ot,Lt){if(X===hr){y===!0&&(ge(i.BLEND),y=!1);return}if(y===!1&&(J(i.BLEND),y=!0),X!==ZS){if(X!==S||Lt!==H){if((D!==os||L!==os)&&(i.blendEquation(i.FUNC_ADD),D=os,L=os),Lt)switch(X){case mo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFunc(i.ONE,i.ONE);break;case dg:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case fg:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:Ut("WebGLState: Invalid blending: ",X);break}else switch(X){case mo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case ug:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case dg:Ut("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case fg:Ut("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:Ut("WebGLState: Invalid blending: ",X);break}z=null,R=null,P=null,I=null,T.set(0,0,0),U=0,S=X,H=Lt}return}ke=ke||be,xe=xe||ve,tt=tt||Pe,(be!==D||ke!==L)&&(i.blendEquationSeparate(ht[be],ht[ke]),D=be,L=ke),(ve!==z||Pe!==R||xe!==P||tt!==I)&&(i.blendFuncSeparate(Be[ve],Be[Pe],Be[xe],Be[tt]),z=ve,R=Pe,P=xe,I=tt),(je.equals(T)===!1||Ot!==U)&&(i.blendColor(je.r,je.g,je.b,Ot),T.copy(je),U=Ot),S=X,H=!1}function _t(X,be){X.side===Pi?ge(i.CULL_FACE):J(i.CULL_FACE);let ve=X.side===Kn;be&&(ve=!ve),ot(ve),X.blending===mo&&X.transparent===!1?pt(hr):pt(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Pe=X.stencilWrite;d.setTest(Pe),Pe&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),Pt(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?J(i.SAMPLE_ALPHA_TO_COVERAGE):ge(i.SAMPLE_ALPHA_TO_COVERAGE)}function ot(X){B!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),B=X)}function Rt(X){X!==YS?(J(i.CULL_FACE),X!==j&&(X===cg?i.cullFace(i.BACK):X===KS?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):ge(i.CULL_FACE),j=X}function bt(X){X!==ie&&(le&&i.lineWidth(X),ie=X)}function Pt(X,be,ve){X?(J(i.POLYGON_OFFSET_FILL),(G!==be||te!==ve)&&(G=be,te=ve,u.getReversed()&&(be=-be),i.polygonOffset(be,ve))):ge(i.POLYGON_OFFSET_FILL)}function yt(X){X?J(i.SCISSOR_TEST):ge(i.SCISSOR_TEST)}function zt(X){X===void 0&&(X=i.TEXTURE0+Q-1),Z!==X&&(i.activeTexture(X),Z=X)}function W(X,be,ve){ve===void 0&&(Z===null?ve=i.TEXTURE0+Q-1:ve=Z);let Pe=N[ve];Pe===void 0&&(Pe={type:void 0,texture:void 0},N[ve]=Pe),(Pe.type!==X||Pe.texture!==be)&&(Z!==ve&&(i.activeTexture(ve),Z=ve),i.bindTexture(X,be||k[X]),Pe.type=X,Pe.texture=be)}function nn(){const X=N[Z];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Ft(){try{i.compressedTexImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function F(){try{i.compressedTexImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function E(){try{i.texSubImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function ee(){try{i.texSubImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function he(){try{i.compressedTexSubImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Te(){try{i.texStorage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function Re(){try{i.texStorage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function pe(){try{i.texImage2D(...arguments)}catch(X){Ut("WebGLState:",X)}}function _e(){try{i.texImage3D(...arguments)}catch(X){Ut("WebGLState:",X)}}function De(X){return x[X]!==void 0?x[X]:i.getParameter(X)}function Je(X,be){x[X]!==be&&(i.pixelStorei(X,be),x[X]=be)}function Ne(X){Ge.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Ge.copy(X))}function Ce(X){ze.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),ze.copy(X))}function Qe(X,be){let ve=p.get(be);ve===void 0&&(ve=new WeakMap,p.set(be,ve));let Pe=ve.get(X);Pe===void 0&&(Pe=i.getUniformBlockIndex(be,X.name),ve.set(X,Pe))}function it(X,be){const Pe=p.get(be).get(X);m.get(be)!==Pe&&(i.uniformBlockBinding(be,Pe,X.__bindingPointIndex),m.set(be,Pe))}function lt(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},x={},Z=null,N={},_={},M=new WeakMap,w=[],b=null,y=!1,S=null,D=null,z=null,R=null,L=null,P=null,I=null,T=new Tt(0,0,0),U=0,H=!1,B=null,j=null,ie=null,G=null,te=null,Ge.set(0,0,i.canvas.width,i.canvas.height),ze.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:J,disable:ge,bindFramebuffer:Le,drawBuffers:Ae,useProgram:st,setBlending:pt,setMaterial:_t,setFlipSided:ot,setCullFace:Rt,setLineWidth:bt,setPolygonOffset:Pt,setScissorTest:yt,activeTexture:zt,bindTexture:W,unbindTexture:nn,compressedTexImage2D:Ft,compressedTexImage3D:F,texImage2D:pe,texImage3D:_e,pixelStorei:Je,getParameter:De,updateUBOMapping:Qe,uniformBlockBinding:it,texStorage2D:Te,texStorage3D:Re,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:he,scissor:Ne,viewport:Ce,reset:lt}}function lC(i,e,t,a,s,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new dt,v=new WeakMap,x=new Set;let _;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(F,E){return w?new OffscreenCanvas(F,E):yc("canvas")}function y(F,E,ee){let ue=1;const he=Ft(F);if((he.width>ee||he.height>ee)&&(ue=ee/Math.max(he.width,he.height)),ue<1)if(typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&F instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&F instanceof ImageBitmap||typeof VideoFrame<"u"&&F instanceof VideoFrame){const Te=Math.floor(ue*he.width),Re=Math.floor(ue*he.height);_===void 0&&(_=b(Te,Re));const pe=E?b(Te,Re):_;return pe.width=Te,pe.height=Re,pe.getContext("2d").drawImage(F,0,0,Te,Re),ut("WebGLRenderer: Texture has been resized from ("+he.width+"x"+he.height+") to ("+Te+"x"+Re+")."),pe}else return"data"in F&&ut("WebGLRenderer: Image in DataTexture is too big ("+he.width+"x"+he.height+")."),F;return F}function S(F){return F.generateMipmaps}function D(F){i.generateMipmap(F)}function z(F){return F.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:F.isWebGL3DRenderTarget?i.TEXTURE_3D:F.isWebGLArrayRenderTarget||F.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(F,E,ee,ue,he,Te=!1){if(F!==null){if(i[F]!==void 0)return i[F];ut("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+F+"'")}let Re;ue&&(Re=e.get("EXT_texture_norm16"),Re||ut("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let pe=E;if(E===i.RED&&(ee===i.FLOAT&&(pe=i.R32F),ee===i.HALF_FLOAT&&(pe=i.R16F),ee===i.UNSIGNED_BYTE&&(pe=i.R8),ee===i.UNSIGNED_SHORT&&Re&&(pe=Re.R16_EXT),ee===i.SHORT&&Re&&(pe=Re.R16_SNORM_EXT)),E===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(pe=i.R8UI),ee===i.UNSIGNED_SHORT&&(pe=i.R16UI),ee===i.UNSIGNED_INT&&(pe=i.R32UI),ee===i.BYTE&&(pe=i.R8I),ee===i.SHORT&&(pe=i.R16I),ee===i.INT&&(pe=i.R32I)),E===i.RG&&(ee===i.FLOAT&&(pe=i.RG32F),ee===i.HALF_FLOAT&&(pe=i.RG16F),ee===i.UNSIGNED_BYTE&&(pe=i.RG8),ee===i.UNSIGNED_SHORT&&Re&&(pe=Re.RG16_EXT),ee===i.SHORT&&Re&&(pe=Re.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(pe=i.RG8UI),ee===i.UNSIGNED_SHORT&&(pe=i.RG16UI),ee===i.UNSIGNED_INT&&(pe=i.RG32UI),ee===i.BYTE&&(pe=i.RG8I),ee===i.SHORT&&(pe=i.RG16I),ee===i.INT&&(pe=i.RG32I)),E===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(pe=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(pe=i.RGB16UI),ee===i.UNSIGNED_INT&&(pe=i.RGB32UI),ee===i.BYTE&&(pe=i.RGB8I),ee===i.SHORT&&(pe=i.RGB16I),ee===i.INT&&(pe=i.RGB32I)),E===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(pe=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(pe=i.RGBA16UI),ee===i.UNSIGNED_INT&&(pe=i.RGBA32UI),ee===i.BYTE&&(pe=i.RGBA8I),ee===i.SHORT&&(pe=i.RGBA16I),ee===i.INT&&(pe=i.RGBA32I)),E===i.RGB&&(ee===i.UNSIGNED_SHORT&&Re&&(pe=Re.RGB16_EXT),ee===i.SHORT&&Re&&(pe=Re.RGB16_SNORM_EXT),ee===i.UNSIGNED_INT_5_9_9_9_REV&&(pe=i.RGB9_E5),ee===i.UNSIGNED_INT_10F_11F_11F_REV&&(pe=i.R11F_G11F_B10F)),E===i.RGBA){const _e=Te?Sc:Ct.getTransfer(he);ee===i.FLOAT&&(pe=i.RGBA32F),ee===i.HALF_FLOAT&&(pe=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(pe=_e===Gt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT&&Re&&(pe=Re.RGBA16_EXT),ee===i.SHORT&&Re&&(pe=Re.RGBA16_SNORM_EXT),ee===i.UNSIGNED_SHORT_4_4_4_4&&(pe=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(pe=i.RGB5_A1)}return(pe===i.R16F||pe===i.R32F||pe===i.RG16F||pe===i.RG32F||pe===i.RGBA16F||pe===i.RGBA32F)&&e.get("EXT_color_buffer_float"),pe}function L(F,E){let ee;return F?E===null||E===$i||E===Mo?ee=i.DEPTH24_STENCIL8:E===Bi?ee=i.DEPTH32F_STENCIL8:E===yo&&(ee=i.DEPTH24_STENCIL8,ut("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===$i||E===Mo?ee=i.DEPTH_COMPONENT24:E===Bi?ee=i.DEPTH_COMPONENT32F:E===yo&&(ee=i.DEPTH_COMPONENT16),ee}function P(F,E){return S(F)===!0||F.isFramebufferTexture&&F.minFilter!==wn&&F.minFilter!==Fn?Math.log2(Math.max(E.width,E.height))+1:F.mipmaps!==void 0&&F.mipmaps.length>0?F.mipmaps.length:F.isCompressedTexture&&Array.isArray(F.image)?E.mipmaps.length:1}function I(F){const E=F.target;E.removeEventListener("dispose",I),U(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&x.delete(E)}function T(F){const E=F.target;E.removeEventListener("dispose",T),B(E)}function U(F){const E=a.get(F);if(E.__webglInit===void 0)return;const ee=F.source,ue=M.get(ee);if(ue){const he=ue[E.__cacheKey];he.usedTimes--,he.usedTimes===0&&H(F),Object.keys(ue).length===0&&M.delete(ee)}a.remove(F)}function H(F){const E=a.get(F);i.deleteTexture(E.__webglTexture);const ee=F.source,ue=M.get(ee);delete ue[E.__cacheKey],u.memory.textures--}function B(F){const E=a.get(F);if(F.depthTexture&&(F.depthTexture.dispose(),a.remove(F.depthTexture)),F.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let he=0;he<E.__webglFramebuffer[ue].length;he++)i.deleteFramebuffer(E.__webglFramebuffer[ue][he]);else i.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)i.deleteFramebuffer(E.__webglFramebuffer[ue]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=F.textures;for(let ue=0,he=ee.length;ue<he;ue++){const Te=a.get(ee[ue]);Te.__webglTexture&&(i.deleteTexture(Te.__webglTexture),u.memory.textures--),a.remove(ee[ue])}a.remove(F)}let j=0;function ie(){j=0}function G(){return j}function te(F){j=F}function Q(){const F=j;return F>=s.maxTextures&&ut("WebGLTextures: Trying to use "+(F+1)+" texture units while this GPU supports only "+s.maxTextures),j+=1,F}function le(F){const E=[];return E.push(F.wrapS),E.push(F.wrapT),E.push(F.wrapR||0),E.push(F.magFilter),E.push(F.minFilter),E.push(F.anisotropy),E.push(F.internalFormat),E.push(F.format),E.push(F.type),E.push(F.generateMipmaps),E.push(F.premultiplyAlpha),E.push(F.flipY),E.push(F.unpackAlignment),E.push(F.colorSpace),E.join()}function q(F,E){const ee=a.get(F);if(F.isVideoTexture&&W(F),F.isRenderTargetTexture===!1&&F.isExternalTexture!==!0&&F.version>0&&ee.__version!==F.version){const ue=F.image;if(ue===null)ut("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)ut("WebGLRenderer: Texture marked for update but image is incomplete");else{ge(ee,F,E);return}}else F.isExternalTexture&&(ee.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+E)}function K(F,E){const ee=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){ge(ee,F,E);return}else F.isExternalTexture&&(ee.__webglTexture=F.sourceTexture?F.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+E)}function Z(F,E){const ee=a.get(F);if(F.isRenderTargetTexture===!1&&F.version>0&&ee.__version!==F.version){ge(ee,F,E);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+E)}function N(F,E){const ee=a.get(F);if(F.isCubeDepthTexture!==!0&&F.version>0&&ee.__version!==F.version){Le(ee,F,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+E)}const oe={[sf]:i.REPEAT,[dr]:i.CLAMP_TO_EDGE,[of]:i.MIRRORED_REPEAT},Se={[wn]:i.NEAREST,[vy]:i.NEAREST_MIPMAP_NEAREST,[Fl]:i.NEAREST_MIPMAP_LINEAR,[Fn]:i.LINEAR,[vd]:i.LINEAR_MIPMAP_NEAREST,[ga]:i.LINEAR_MIPMAP_LINEAR},Ge={[yy]:i.NEVER,[Ay]:i.ALWAYS,[My]:i.LESS,[ah]:i.LEQUAL,[Ey]:i.EQUAL,[sh]:i.GEQUAL,[Ty]:i.GREATER,[wy]:i.NOTEQUAL};function ze(F,E){if(E.type===Bi&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Fn||E.magFilter===vd||E.magFilter===Fl||E.magFilter===ga||E.minFilter===Fn||E.minFilter===vd||E.minFilter===Fl||E.minFilter===ga)&&ut("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(F,i.TEXTURE_WRAP_S,oe[E.wrapS]),i.texParameteri(F,i.TEXTURE_WRAP_T,oe[E.wrapT]),(F===i.TEXTURE_3D||F===i.TEXTURE_2D_ARRAY)&&i.texParameteri(F,i.TEXTURE_WRAP_R,oe[E.wrapR]),i.texParameteri(F,i.TEXTURE_MAG_FILTER,Se[E.magFilter]),i.texParameteri(F,i.TEXTURE_MIN_FILTER,Se[E.minFilter]),E.compareFunction&&(i.texParameteri(F,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(F,i.TEXTURE_COMPARE_FUNC,Ge[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===wn||E.minFilter!==Fl&&E.minFilter!==ga||E.type===Bi&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(F,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function $e(F,E){let ee=!1;F.__webglInit===void 0&&(F.__webglInit=!0,E.addEventListener("dispose",I));const ue=E.source;let he=M.get(ue);he===void 0&&(he={},M.set(ue,he));const Te=le(E);if(Te!==F.__cacheKey){he[Te]===void 0&&(he[Te]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),he[Te].usedTimes++;const Re=he[F.__cacheKey];Re!==void 0&&(he[F.__cacheKey].usedTimes--,Re.usedTimes===0&&H(E)),F.__cacheKey=Te,F.__webglTexture=he[Te].texture}return ee}function k(F,E,ee){return Math.floor(Math.floor(F/ee)/E)}function J(F,E,ee,ue){const Te=F.updateRanges;if(Te.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,ee,ue,E.data);else{Te.sort((Je,Ne)=>Je.start-Ne.start);let Re=0;for(let Je=1;Je<Te.length;Je++){const Ne=Te[Re],Ce=Te[Je],Qe=Ne.start+Ne.count,it=k(Ce.start,E.width,4),lt=k(Ne.start,E.width,4);Ce.start<=Qe+1&&it===lt&&k(Ce.start+Ce.count-1,E.width,4)===it?Ne.count=Math.max(Ne.count,Ce.start+Ce.count-Ne.start):(++Re,Te[Re]=Ce)}Te.length=Re+1;const pe=t.getParameter(i.UNPACK_ROW_LENGTH),_e=t.getParameter(i.UNPACK_SKIP_PIXELS),De=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Je=0,Ne=Te.length;Je<Ne;Je++){const Ce=Te[Je],Qe=Math.floor(Ce.start/4),it=Math.ceil(Ce.count/4),lt=Qe%E.width,X=Math.floor(Qe/E.width),be=it,ve=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,lt),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,lt,X,be,ve,ee,ue,E.data)}F.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,pe),t.pixelStorei(i.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(i.UNPACK_SKIP_ROWS,De)}}function ge(F,E,ee){let ue=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=i.TEXTURE_3D);const he=$e(F,E),Te=E.source;t.bindTexture(ue,F.__webglTexture,i.TEXTURE0+ee);const Re=a.get(Te);if(Te.version!==Re.__version||he===!0){if(t.activeTexture(i.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const ve=Ct.getPrimaries(Ct.workingColorSpace),Pe=E.colorSpace===Vr?null:Ct.getPrimaries(E.colorSpace),ke=E.colorSpace===Vr||ve===Pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let _e=y(E.image,!1,s.maxTextureSize);_e=nn(E,_e);const De=l.convert(E.format,E.colorSpace),Je=l.convert(E.type);let Ne=R(E.internalFormat,De,Je,E.normalized,E.colorSpace,E.isVideoTexture);ze(ue,E);let Ce;const Qe=E.mipmaps,it=E.isVideoTexture!==!0,lt=Re.__version===void 0||he===!0,X=Te.dataReady,be=P(E,_e);if(E.isDepthTexture)Ne=L(E.format===va,E.type),lt&&(it?t.texStorage2D(i.TEXTURE_2D,1,Ne,_e.width,_e.height):t.texImage2D(i.TEXTURE_2D,0,Ne,_e.width,_e.height,0,De,Je,null));else if(E.isDataTexture)if(Qe.length>0){it&&lt&&t.texStorage2D(i.TEXTURE_2D,be,Ne,Qe[0].width,Qe[0].height);for(let ve=0,Pe=Qe.length;ve<Pe;ve++)Ce=Qe[ve],it?X&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,De,Je,Ce.data):t.texImage2D(i.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,De,Je,Ce.data);E.generateMipmaps=!1}else it?(lt&&t.texStorage2D(i.TEXTURE_2D,be,Ne,_e.width,_e.height),X&&J(E,_e,De,Je)):t.texImage2D(i.TEXTURE_2D,0,Ne,_e.width,_e.height,0,De,Je,_e.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){it&&lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ne,Qe[0].width,Qe[0].height,_e.depth);for(let ve=0,Pe=Qe.length;ve<Pe;ve++)if(Ce=Qe[ve],E.format!==Di)if(De!==null)if(it){if(X)if(E.layerUpdates.size>0){const ke=Bg(Ce.width,Ce.height,E.format,E.type);for(const xe of E.layerUpdates){const tt=Ce.data.subarray(xe*ke/Ce.data.BYTES_PER_ELEMENT,(xe+1)*ke/Ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,xe,Ce.width,Ce.height,1,De,tt)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,_e.depth,De,Ce.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,ve,Ne,Ce.width,Ce.height,_e.depth,0,Ce.data,0,0);else ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else it?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,ve,0,0,0,Ce.width,Ce.height,_e.depth,De,Je,Ce.data):t.texImage3D(i.TEXTURE_2D_ARRAY,ve,Ne,Ce.width,Ce.height,_e.depth,0,De,Je,Ce.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{it&&lt&&t.texStorage2D(i.TEXTURE_2D,be,Ne,Qe[0].width,Qe[0].height);for(let ve=0,Pe=Qe.length;ve<Pe;ve++)Ce=Qe[ve],E.format!==Di?De!==null?it?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,De,Ce.data):t.compressedTexImage2D(i.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,Ce.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):it?X&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,Ce.width,Ce.height,De,Je,Ce.data):t.texImage2D(i.TEXTURE_2D,ve,Ne,Ce.width,Ce.height,0,De,Je,Ce.data)}else if(E.isDataArrayTexture)if(it){if(lt&&t.texStorage3D(i.TEXTURE_2D_ARRAY,be,Ne,_e.width,_e.height,_e.depth),X)if(E.layerUpdates.size>0){const ve=Bg(_e.width,_e.height,E.format,E.type);for(const Pe of E.layerUpdates){const ke=_e.data.subarray(Pe*ve/_e.data.BYTES_PER_ELEMENT,(Pe+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Pe,_e.width,_e.height,1,De,Je,ke)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,De,Je,_e.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Ne,_e.width,_e.height,_e.depth,0,De,Je,_e.data);else if(E.isData3DTexture)it?(lt&&t.texStorage3D(i.TEXTURE_3D,be,Ne,_e.width,_e.height,_e.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,De,Je,_e.data)):t.texImage3D(i.TEXTURE_3D,0,Ne,_e.width,_e.height,_e.depth,0,De,Je,_e.data);else if(E.isFramebufferTexture){if(lt)if(it)t.texStorage2D(i.TEXTURE_2D,be,Ne,_e.width,_e.height);else{let ve=_e.width,Pe=_e.height;for(let ke=0;ke<be;ke++)t.texImage2D(i.TEXTURE_2D,ke,Ne,ve,Pe,0,De,Je,null),ve>>=1,Pe>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const ve=i.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),x.add(E),ve.onpaint=Pe=>{const ke=Pe.changedElements;for(const xe of x)ke.includes(xe.image)&&(xe.needsUpdate=!0)},ve.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,_e);else{const ke=i.RGBA,xe=i.RGBA,tt=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ke,xe,tt,_e)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Qe.length>0){if(it&&lt){const ve=Ft(Qe[0]);t.texStorage2D(i.TEXTURE_2D,be,Ne,ve.width,ve.height)}for(let ve=0,Pe=Qe.length;ve<Pe;ve++)Ce=Qe[ve],it?X&&t.texSubImage2D(i.TEXTURE_2D,ve,0,0,De,Je,Ce):t.texImage2D(i.TEXTURE_2D,ve,Ne,De,Je,Ce);E.generateMipmaps=!1}else if(it){if(lt){const ve=Ft(_e);t.texStorage2D(i.TEXTURE_2D,be,Ne,ve.width,ve.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,De,Je,_e)}else t.texImage2D(i.TEXTURE_2D,0,Ne,De,Je,_e);S(E)&&D(ue),Re.__version=Te.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Le(F,E,ee){if(E.image.length!==6)return;const ue=$e(F,E),he=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,F.__webglTexture,i.TEXTURE0+ee);const Te=a.get(he);if(he.version!==Te.__version||ue===!0){t.activeTexture(i.TEXTURE0+ee);const Re=Ct.getPrimaries(Ct.workingColorSpace),pe=E.colorSpace===Vr?null:Ct.getPrimaries(E.colorSpace),_e=E.colorSpace===Vr||Re===pe?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const De=E.isCompressedTexture||E.image[0].isCompressedTexture,Je=E.image[0]&&E.image[0].isDataTexture,Ne=[];for(let xe=0;xe<6;xe++)!De&&!Je?Ne[xe]=y(E.image[xe],!0,s.maxCubemapSize):Ne[xe]=Je?E.image[xe].image:E.image[xe],Ne[xe]=nn(E,Ne[xe]);const Ce=Ne[0],Qe=l.convert(E.format,E.colorSpace),it=l.convert(E.type),lt=R(E.internalFormat,Qe,it,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,be=Te.__version===void 0||ue===!0,ve=he.dataReady;let Pe=P(E,Ce);ze(i.TEXTURE_CUBE_MAP,E);let ke;if(De){X&&be&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,lt,Ce.width,Ce.height);for(let xe=0;xe<6;xe++){ke=Ne[xe].mipmaps;for(let tt=0;tt<ke.length;tt++){const je=ke[tt];E.format!==Di?Qe!==null?X?ve&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,je.width,je.height,Qe,je.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,lt,je.width,je.height,0,je.data):ut("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,0,0,je.width,je.height,Qe,it,je.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt,lt,je.width,je.height,0,Qe,it,je.data)}}}else{if(ke=E.mipmaps,X&&be){ke.length>0&&Pe++;const xe=Ft(Ne[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Pe,lt,xe.width,xe.height)}for(let xe=0;xe<6;xe++)if(Je){X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Ne[xe].width,Ne[xe].height,Qe,it,Ne[xe].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Ne[xe].width,Ne[xe].height,0,Qe,it,Ne[xe].data);for(let tt=0;tt<ke.length;tt++){const Ot=ke[tt].image[xe].image;X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,Ot.width,Ot.height,Qe,it,Ot.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,lt,Ot.width,Ot.height,0,Qe,it,Ot.data)}}else{X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,0,0,Qe,it,Ne[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,0,lt,Qe,it,Ne[xe]);for(let tt=0;tt<ke.length;tt++){const je=ke[tt];X?ve&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,0,0,Qe,it,je.image[xe]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+xe,tt+1,lt,Qe,it,je.image[xe])}}}S(E)&&D(i.TEXTURE_CUBE_MAP),Te.__version=he.version,E.onUpdate&&E.onUpdate(E)}F.__version=E.version}function Ae(F,E,ee,ue,he,Te){const Re=l.convert(ee.format,ee.colorSpace),pe=l.convert(ee.type),_e=R(ee.internalFormat,Re,pe,ee.normalized,ee.colorSpace),De=a.get(E),Je=a.get(ee);if(Je.__renderTarget=E,!De.__hasExternalTextures){const Ne=Math.max(1,E.width>>Te),Ce=Math.max(1,E.height>>Te);he===i.TEXTURE_3D||he===i.TEXTURE_2D_ARRAY?t.texImage3D(he,Te,_e,Ne,Ce,E.depth,0,Re,pe,null):t.texImage2D(he,Te,_e,Ne,Ce,0,Re,pe,null)}t.bindFramebuffer(i.FRAMEBUFFER,F),zt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,he,Je.__webglTexture,0,yt(E)):(he===i.TEXTURE_2D||he>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&he<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,he,Je.__webglTexture,Te),t.bindFramebuffer(i.FRAMEBUFFER,null)}function st(F,E,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,F),E.depthBuffer){const ue=E.depthTexture,he=ue&&ue.isDepthTexture?ue.type:null,Te=L(E.stencilBuffer,he),Re=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;zt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(E),Te,E.width,E.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(E),Te,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,Te,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,Re,i.RENDERBUFFER,F)}else{const ue=E.textures;for(let he=0;he<ue.length;he++){const Te=ue[he],Re=l.convert(Te.format,Te.colorSpace),pe=l.convert(Te.type),_e=R(Te.internalFormat,Re,pe,Te.normalized,Te.colorSpace);zt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,yt(E),_e,E.width,E.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,yt(E),_e,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,_e,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function ht(F,E,ee){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,F),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const he=a.get(E.depthTexture);if(he.__renderTarget=E,(!he.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue){if(he.__webglInit===void 0&&(he.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),he.__webglTexture===void 0){he.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,he.__webglTexture),ze(i.TEXTURE_CUBE_MAP,E.depthTexture);const De=l.convert(E.depthTexture.format),Je=l.convert(E.depthTexture.type);let Ne;E.depthTexture.format===mr?Ne=i.DEPTH_COMPONENT24:E.depthTexture.format===va&&(Ne=i.DEPTH24_STENCIL8);for(let Ce=0;Ce<6;Ce++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Ce,0,Ne,E.width,E.height,0,De,Je,null)}}else q(E.depthTexture,0);const Te=he.__webglTexture,Re=yt(E),pe=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+ee:i.TEXTURE_2D,_e=E.depthTexture.format===va?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===mr)zt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,pe,Te,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,_e,pe,Te,0);else if(E.depthTexture.format===va)zt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,_e,pe,Te,0,Re):i.framebufferTexture2D(i.FRAMEBUFFER,_e,pe,Te,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Be(F){const E=a.get(F),ee=F.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==F.depthTexture){const ue=F.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const he=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",he)};ue.addEventListener("dispose",he),E.__depthDisposeCallback=he}E.__boundDepthTexture=ue}if(F.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let ue=0;ue<6;ue++)ht(E.__webglFramebuffer[ue],F,ue);else{const ue=F.texture.mipmaps;ue&&ue.length>0?ht(E.__webglFramebuffer[0],F,0):ht(E.__webglFramebuffer,F,0)}else if(ee){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=i.createRenderbuffer(),st(E.__webglDepthbuffer[ue],F,!1);else{const he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Te)}}else{const ue=F.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),st(E.__webglDepthbuffer,F,!1);else{const he=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Te=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,Te),i.framebufferRenderbuffer(i.FRAMEBUFFER,he,i.RENDERBUFFER,Te)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function pt(F,E,ee){const ue=a.get(F);E!==void 0&&Ae(ue.__webglFramebuffer,F,F.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&Be(F)}function _t(F){const E=F.texture,ee=a.get(F),ue=a.get(E);F.addEventListener("dispose",T);const he=F.textures,Te=F.isWebGLCubeRenderTarget===!0,Re=he.length>1;if(Re||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=E.version,u.memory.textures++),Te){ee.__webglFramebuffer=[];for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[pe]=[];for(let _e=0;_e<E.mipmaps.length;_e++)ee.__webglFramebuffer[pe][_e]=i.createFramebuffer()}else ee.__webglFramebuffer[pe]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let pe=0;pe<E.mipmaps.length;pe++)ee.__webglFramebuffer[pe]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(Re)for(let pe=0,_e=he.length;pe<_e;pe++){const De=a.get(he[pe]);De.__webglTexture===void 0&&(De.__webglTexture=i.createTexture(),u.memory.textures++)}if(F.samples>0&&zt(F)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let pe=0;pe<he.length;pe++){const _e=he[pe];ee.__webglColorRenderbuffer[pe]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[pe]);const De=l.convert(_e.format,_e.colorSpace),Je=l.convert(_e.type),Ne=R(_e.internalFormat,De,Je,_e.normalized,_e.colorSpace,F.isXRRenderTarget===!0),Ce=yt(F);i.renderbufferStorageMultisample(i.RENDERBUFFER,Ce,Ne,F.width,F.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+pe,i.RENDERBUFFER,ee.__webglColorRenderbuffer[pe])}i.bindRenderbuffer(i.RENDERBUFFER,null),F.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),st(ee.__webglDepthRenderbuffer,F,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(Te){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),ze(i.TEXTURE_CUBE_MAP,E);for(let pe=0;pe<6;pe++)if(E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ae(ee.__webglFramebuffer[pe][_e],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,_e);else Ae(ee.__webglFramebuffer[pe],F,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+pe,0);S(E)&&D(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Re){for(let pe=0,_e=he.length;pe<_e;pe++){const De=he[pe],Je=a.get(De);let Ne=i.TEXTURE_2D;(F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(Ne=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Ne,Je.__webglTexture),ze(Ne,De),Ae(ee.__webglFramebuffer,F,De,i.COLOR_ATTACHMENT0+pe,Ne,0),S(De)&&D(Ne)}t.unbindTexture()}else{let pe=i.TEXTURE_2D;if((F.isWebGL3DRenderTarget||F.isWebGLArrayRenderTarget)&&(pe=F.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(pe,ue.__webglTexture),ze(pe,E),E.mipmaps&&E.mipmaps.length>0)for(let _e=0;_e<E.mipmaps.length;_e++)Ae(ee.__webglFramebuffer[_e],F,E,i.COLOR_ATTACHMENT0,pe,_e);else Ae(ee.__webglFramebuffer,F,E,i.COLOR_ATTACHMENT0,pe,0);S(E)&&D(pe),t.unbindTexture()}F.depthBuffer&&Be(F)}function ot(F){const E=F.textures;for(let ee=0,ue=E.length;ee<ue;ee++){const he=E[ee];if(S(he)){const Te=z(F),Re=a.get(he).__webglTexture;t.bindTexture(Te,Re),D(Te),t.unbindTexture()}}}const Rt=[],bt=[];function Pt(F){if(F.samples>0){if(zt(F)===!1){const E=F.textures,ee=F.width,ue=F.height;let he=i.COLOR_BUFFER_BIT;const Te=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,Re=a.get(F),pe=E.length>1;if(pe)for(let De=0;De<E.length;De++)t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,Re.__webglMultisampledFramebuffer);const _e=F.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglFramebuffer);for(let De=0;De<E.length;De++){if(F.resolveDepthBuffer&&(F.depthBuffer&&(he|=i.DEPTH_BUFFER_BIT),F.stencilBuffer&&F.resolveStencilBuffer&&(he|=i.STENCIL_BUFFER_BIT)),pe){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const Je=a.get(E[De]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Je,0)}i.blitFramebuffer(0,0,ee,ue,0,0,ee,ue,he,i.NEAREST),m===!0&&(Rt.length=0,bt.length=0,Rt.push(i.COLOR_ATTACHMENT0+De),F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&(Rt.push(Te),bt.push(Te),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,bt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Rt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),pe)for(let De=0;De<E.length;De++){t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.RENDERBUFFER,Re.__webglColorRenderbuffer[De]);const Je=a.get(E[De]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,Re.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+De,i.TEXTURE_2D,Je,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,Re.__webglMultisampledFramebuffer)}else if(F.depthBuffer&&F.storeMultisampledDepthBuffer===!1&&m){const E=F.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function yt(F){return Math.min(s.maxSamples,F.samples)}function zt(F){const E=a.get(F);return F.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function W(F){const E=u.render.frame;v.get(F)!==E&&(v.set(F,E),F.update())}function nn(F,E){const ee=F.colorSpace,ue=F.format,he=F.type;return F.isCompressedTexture===!0||F.isVideoTexture===!0||ee!==xc&&ee!==Vr&&(Ct.getTransfer(ee)===Gt?(ue!==Di||he!==ri)&&ut("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):Ut("WebGLTextures: Unsupported texture color space:",ee)),E}function Ft(F){return typeof HTMLImageElement<"u"&&F instanceof HTMLImageElement?(p.width=F.naturalWidth||F.width,p.height=F.naturalHeight||F.height):typeof VideoFrame<"u"&&F instanceof VideoFrame?(p.width=F.displayWidth,p.height=F.displayHeight):(p.width=F.width,p.height=F.height),p}this.allocateTextureUnit=Q,this.resetTextureUnits=ie,this.getTextureUnits=G,this.setTextureUnits=te,this.setTexture2D=q,this.setTexture2DArray=K,this.setTexture3D=Z,this.setTextureCube=N,this.rebindTextures=pt,this.setupRenderTarget=_t,this.updateRenderTargetMipmap=ot,this.updateMultisampleRenderTarget=Pt,this.setupDepthRenderbuffer=Be,this.setupFrameBufferTexture=Ae,this.useMultisampledRTT=zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function cC(i,e){function t(a,s=Vr){let l;const u=Ct.getTransfer(s);if(a===ri)return i.UNSIGNED_BYTE;if(a===eh)return i.UNSIGNED_SHORT_4_4_4_4;if(a===th)return i.UNSIGNED_SHORT_5_5_5_1;if(a===rv)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===av)return i.UNSIGNED_INT_10F_11F_11F_REV;if(a===nv)return i.BYTE;if(a===iv)return i.SHORT;if(a===yo)return i.UNSIGNED_SHORT;if(a===Qf)return i.INT;if(a===$i)return i.UNSIGNED_INT;if(a===Bi)return i.FLOAT;if(a===qi)return i.HALF_FLOAT;if(a===sv)return i.ALPHA;if(a===ov)return i.RGB;if(a===Di)return i.RGBA;if(a===mr)return i.DEPTH_COMPONENT;if(a===va)return i.DEPTH_STENCIL;if(a===lv)return i.RED;if(a===nh)return i.RED_INTEGER;if(a===Ma)return i.RG;if(a===ih)return i.RG_INTEGER;if(a===rh)return i.RGBA_INTEGER;if(a===lc||a===cc||a===uc||a===dc)if(u===Gt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===lc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===cc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===uc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===dc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===lc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===cc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===uc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===dc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===lf||a===cf||a===uf||a===df)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===lf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===cf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===uf)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===df)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===ff||a===hf||a===pf||a===mf||a===gf||a===vc||a===vf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===ff||a===hf)return u===Gt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===pf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===mf)return l.COMPRESSED_R11_EAC;if(a===gf)return l.COMPRESSED_SIGNED_R11_EAC;if(a===vc)return l.COMPRESSED_RG11_EAC;if(a===vf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===_f||a===xf||a===Sf||a===yf||a===Mf||a===Ef||a===Tf||a===wf||a===Af||a===Cf||a===Rf||a===bf||a===Pf||a===Lf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===_f)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===xf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Sf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===yf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Mf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Ef)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===Tf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===wf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===Af)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===Cf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Rf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===bf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Pf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Lf)return u===Gt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===Df||a===Nf||a===Uf)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===Df)return u===Gt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===Nf)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===Uf)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===Ff||a===Of||a===_c||a===If)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===Ff)return l.COMPRESSED_RED_RGTC1_EXT;if(a===Of)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===_c)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===If)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Mo?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:t}}const uC=`
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

}`;class fC{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new mv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new Yi({vertexShader:uC,fragmentShader:dC,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new ai(new bc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class hC extends $r{constructor(e,t){super();const a=this;let s=null,l=1,u=null,d="local-floor",m=1,p=null,v=null,x=null,_=null,M=null,w=null;const b=typeof XRWebGLBinding<"u",y=new fC,S={},D=t.getContextAttributes();let z=null,R=null;const L=[],P=[],I=new dt;let T=null,U=null;const H=new gi;H.viewport=new en;const B=new gi;B.viewport=new en;const j=[H,B],ie=new xM;let G=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(k){let J=L[k];return J===void 0&&(J=new wd,L[k]=J),J.getTargetRaySpace()},this.getControllerGrip=function(k){let J=L[k];return J===void 0&&(J=new wd,L[k]=J),J.getGripSpace()},this.getHand=function(k){let J=L[k];return J===void 0&&(J=new wd,L[k]=J),J.getHandSpace()};function Q(k){const J=P.indexOf(k.inputSource);if(J===-1)return;const ge=L[J];ge!==void 0&&(ge.update(k.inputSource,k.frame,p||u),ge.dispatchEvent({type:k.type,data:k.inputSource}))}function le(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",le),s.removeEventListener("inputsourceschange",q);for(let k=0;k<L.length;k++){const J=P[k];J!==null&&(P[k]=null,L[k].disconnect(J))}G=null,te=null,y.reset();for(const k in S)delete S[k];if(e.setRenderTarget(z),M=null,_=null,x=null,s=null,R=null,$e.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),U!==null){const k=U.camera;k.fov=U.fov,k.zoom=U.zoom,k.updateProjectionMatrix(),U=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(k){l=k,a.isPresenting===!0&&ut("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(k){d=k,a.isPresenting===!0&&ut("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(k){p=k},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(k){if(s=k,s!==null){if(z=e.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",le),s.addEventListener("inputsourceschange",q),D.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let ge=null,Le=null,Ae=null;D.depth&&(Ae=D.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,ge=D.stencil?va:mr,Le=D.stencil?Mo:$i);const st={colorFormat:t.RGBA8,depthFormat:Ae,scaleFactor:l};x=this.getBinding(),_=x.createProjectionLayer(st),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new Ui(_.textureWidth,_.textureHeight,{format:Di,type:ri,depthTexture:new To(_.textureWidth,_.textureHeight,Le,void 0,void 0,void 0,void 0,void 0,void 0,ge),stencilBuffer:D.stencil,colorSpace:e.outputColorSpace,samples:D.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const ge={antialias:D.antialias,alpha:!0,depth:D.depth,stencil:D.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(s,t,ge),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Ui(M.framebufferWidth,M.framebufferHeight,{format:Di,type:ri,colorSpace:e.outputColorSpace,stencilBuffer:D.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await s.requestReferenceSpace(d),$e.setContext(s),$e.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(k){for(let J=0;J<k.removed.length;J++){const ge=k.removed[J],Le=P.indexOf(ge);Le>=0&&(P[Le]=null,L[Le].disconnect(ge))}for(let J=0;J<k.added.length;J++){const ge=k.added[J];let Le=P.indexOf(ge);if(Le===-1){for(let st=0;st<L.length;st++)if(st>=P.length){P.push(ge),Le=st;break}else if(P[st]===null){P[st]=ge,Le=st;break}if(Le===-1)break}const Ae=L[Le];Ae&&Ae.connect(ge)}}const K=new re,Z=new re;function N(k,J,ge){K.setFromMatrixPosition(J.matrixWorld),Z.setFromMatrixPosition(ge.matrixWorld);const Le=K.distanceTo(Z),Ae=J.projectionMatrix.elements,st=ge.projectionMatrix.elements,ht=Ae[14]/(Ae[10]-1),Be=Ae[14]/(Ae[10]+1),pt=(Ae[9]+1)/Ae[5],_t=(Ae[9]-1)/Ae[5],ot=(Ae[8]-1)/Ae[0],Rt=(st[8]+1)/st[0],bt=ht*ot,Pt=ht*Rt,yt=Le/(-ot+Rt),zt=yt*-ot;if(J.matrixWorld.decompose(k.position,k.quaternion,k.scale),k.translateX(zt),k.translateZ(yt),k.matrixWorld.compose(k.position,k.quaternion,k.scale),k.matrixWorldInverse.copy(k.matrixWorld).invert(),Ae[10]===-1)k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const W=ht+yt,nn=Be+yt,Ft=bt-zt,F=Pt+(Le-zt),E=pt*Be/nn*W,ee=_t*Be/nn*W;k.projectionMatrix.makePerspective(Ft,F,E,ee,W,nn),k.projectionMatrixInverse.copy(k.projectionMatrix).invert()}}function oe(k,J){J===null?k.matrixWorld.copy(k.matrix):k.matrixWorld.multiplyMatrices(J.matrixWorld,k.matrix),k.matrixWorldInverse.copy(k.matrixWorld).invert()}this.updateCamera=function(k){if(s===null)return;let J=k.near,ge=k.far;y.texture!==null&&(y.depthNear>0&&(J=y.depthNear),y.depthFar>0&&(ge=y.depthFar)),ie.near=B.near=H.near=J,ie.far=B.far=H.far=ge,(G!==ie.near||te!==ie.far)&&(s.updateRenderState({depthNear:ie.near,depthFar:ie.far}),G=ie.near,te=ie.far),ie.layers.mask=k.layers.mask|6,H.layers.mask=ie.layers.mask&-5,B.layers.mask=ie.layers.mask&-3;const Le=k.parent,Ae=ie.cameras;oe(ie,Le);for(let st=0;st<Ae.length;st++)oe(Ae[st],Le);Ae.length===2?N(ie,H,B):ie.projectionMatrix.copy(H.projectionMatrix),U===null&&k.isPerspectiveCamera&&(U={camera:k,fov:k.fov,zoom:k.zoom}),Se(k,ie,Le)};function Se(k,J,ge){ge===null?k.matrix.copy(J.matrixWorld):(k.matrix.copy(ge.matrixWorld),k.matrix.invert(),k.matrix.multiply(J.matrixWorld)),k.matrix.decompose(k.position,k.quaternion,k.scale),k.updateMatrixWorld(!0),k.projectionMatrix.copy(J.projectionMatrix),k.projectionMatrixInverse.copy(J.projectionMatrixInverse),k.isPerspectiveCamera&&(k.fov=zf*2*Math.atan(1/k.projectionMatrix.elements[5]),k.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(k){m=k,_!==null&&(_.fixedFoveation=k),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=k)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ie)},this.getCameraTexture=function(k){return S[k]};let Ge=null;function ze(k,J){if(v=J.getViewerPose(p||u),w=J,v!==null){const ge=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let Le=!1;ge.length!==ie.cameras.length&&(ie.cameras.length=0,Le=!0);for(let Be=0;Be<ge.length;Be++){const pt=ge[Be];let _t=null;if(M!==null)_t=M.getViewport(pt);else{const Rt=x.getViewSubImage(_,pt);_t=Rt.viewport,Be===0&&(e.setRenderTargetTextures(R,Rt.colorTexture,Rt.depthStencilTexture),e.setRenderTarget(R))}let ot=j[Be];ot===void 0&&(ot=new gi,ot.layers.enable(Be),ot.viewport=new en,j[Be]=ot),ot.matrix.fromArray(pt.transform.matrix),ot.matrix.decompose(ot.position,ot.quaternion,ot.scale),ot.projectionMatrix.fromArray(pt.projectionMatrix),ot.projectionMatrixInverse.copy(ot.projectionMatrix).invert(),ot.viewport.set(_t.x,_t.y,_t.width,_t.height),Be===0&&(ie.matrix.copy(ot.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),Le===!0&&ie.cameras.push(ot)}const Ae=s.enabledFeatures;if(Ae&&Ae.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){x=a.getBinding();const Be=x.getDepthInformation(ge[0]);Be&&Be.isValid&&Be.texture&&y.init(Be,s.renderState)}if(Ae&&Ae.includes("camera-access")&&b){e.state.unbindTexture(),x=a.getBinding();for(let Be=0;Be<ge.length;Be++){const pt=ge[Be].camera;if(pt){let _t=S[pt];_t||(_t=new mv,S[pt]=_t);const ot=x.getCameraImage(pt);_t.sourceTexture=ot}}}}for(let ge=0;ge<L.length;ge++){const Le=P[ge],Ae=L[ge];Le!==null&&Ae!==void 0&&Ae.update(Le,J,p||u)}Ge&&Ge(k,J),J.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:J}),w=null}const $e=new xv;$e.setAnimationLoop(ze),this.setAnimationLoop=function(k){Ge=k},this.dispose=function(){}}}const pC=new tn,Av=new gt;Av.set(-1,0,0,0,1,0,0,0,1);function mC(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,gv(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,D,z,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,R)):S.isMeshMatcapMaterial?(l(y,S),w(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,D,z):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===Kn&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===Kn&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const D=e.get(S),z=D.envMap,R=D.envMapRotation;z&&(y.envMap.value=z,y.envMapRotation.value.setFromMatrix4(pC.makeRotationFromEuler(R)).transpose(),z.isCubeTexture&&z.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Av),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,D,z){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*D,y.scale.value=z*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,D){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===Kn&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=D.texture,y.transmissionSamplerSize.value.set(D.width,D.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const D=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(D.matrixWorld),y.nearDistance.value=D.shadow.camera.near,y.farDistance.value=D.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function gC(i,e,t,a){let s={},l={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const P=L.program;a.uniformBlockBinding(R,P)}function p(R,L){let P=s[R.id];P===void 0&&(y(R),P=v(R),s[R.id]=P,R.addEventListener("dispose",D));const I=L.program;a.updateUBOMapping(R,I);const T=e.render.frame;l[R.id]!==T&&(_(R),l[R.id]=T)}function v(R){const L=x();R.__bindingPointIndex=L;const P=i.createBuffer(),I=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function x(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return Ut("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const L=s[R.id],P=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let T=0,U=P.length;T<U;T++){const H=P[T];if(Array.isArray(H))for(let B=0,j=H.length;B<j;B++)M(H[B],T,B,I);else M(H,T,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(R,L,P,I){if(b(R,L,P,I)===!0){const T=R.__offset,U=R.value;if(Array.isArray(U)){let H=0;for(let B=0;B<U.length;B++){const j=U[B],ie=S(j);w(j,R.__data,H),typeof j!="number"&&typeof j!="boolean"&&!j.isMatrix3&&!ArrayBuffer.isView(j)&&(H+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(U,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,R.__data)}}function w(R,L,P){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,P)}function b(R,L,P,I){const T=R.value,U=L+"_"+P;if(I[U]===void 0)return typeof T=="number"||typeof T=="boolean"?I[U]=T:ArrayBuffer.isView(T)?I[U]=T.slice():I[U]=T.clone(),!0;{const H=I[U];if(typeof T=="number"||typeof T=="boolean"){if(H!==T)return I[U]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(H.equals(T)===!1)return H.copy(T),!0}}return!1}function y(R){const L=R.uniforms;let P=0;const I=16;for(let U=0,H=L.length;U<H;U++){const B=Array.isArray(L[U])?L[U]:[L[U]];for(let j=0,ie=B.length;j<ie;j++){const G=B[j],te=Array.isArray(G.value)?G.value:[G.value];for(let Q=0,le=te.length;Q<le;Q++){const q=te[Q],K=S(q),Z=P%I,N=Z%K.boundary,oe=Z+N;P+=N,oe!==0&&I-oe<K.storage&&(P+=I-oe),G.__data=new Float32Array(K.storage/Float32Array.BYTES_PER_ELEMENT),G.__offset=P,P+=K.storage}}}const T=P%I;return T>0&&(P+=I-T),R.__size=P,R.__cache={},this}function S(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?ut("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):ut("WebGLRenderer: Unsupported uniform value type.",R),L}function D(R){const L=R.target;L.removeEventListener("dispose",D);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete l[L.id]}function z(){for(const R in s)i.deleteBuffer(s[R]);u=[],s={},l={}}return{bind:m,update:p,dispose:z}}const vC=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Hi=null;function _C(){return Hi===null&&(Hi=new tM(vC,16,16,Ma,qi),Hi.name="DFG_LUT",Hi.minFilter=Fn,Hi.magFilter=Fn,Hi.wrapS=dr,Hi.wrapT=dr,Hi.generateMipmaps=!1,Hi.needsUpdate=!0),Hi}class xC{constructor(e={}){const{canvas:t=by(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:M=ri}=e;this.isWebGLRenderer=!0;let w;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=a.getContextAttributes().alpha}else w=u;const b=M,y=new Set([rh,ih,nh]),S=new Set([ri,$i,yo,Mo,eh,th]),D=new Uint32Array(4),z=new Int32Array(4),R=new re;let L=null,P=null;const I=[],T=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Xi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const H=this;let B=!1,j=null,ie=null,G=null,te=null;this._outputColorSpace=ii;let Q=0,le=0,q=null,K=-1,Z=null;const N=new en,oe=new en;let Se=null;const Ge=new Tt(0);let ze=0,$e=t.width,k=t.height,J=1,ge=null,Le=null;const Ae=new en(0,0,$e,k),st=new en(0,0,$e,k);let ht=!1;const Be=new fh;let pt=!1,_t=!1;const ot=new tn,Rt=new re,bt=new en,Pt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let yt=!1;function zt(){return q===null?J:1}let W=a;function nn(C,$){return t.getContext(C,$)}let Ft,F,E,ee,ue,he,Te,Re,pe,_e,De,Je,Ne,Ce,Qe,it,lt,X,be,ve,Pe,ke,xe;try{const C={alpha:!0,depth:s,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Jf}`),t.addEventListener("webglcontextlost",Ot,!1),t.addEventListener("webglcontextrestored",Lt,!1),t.addEventListener("webglcontextcreationerror",Mn,!1),W===null){const $="webgl2";if(W=nn($,C),W===null)throw nn($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(C){throw t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),Ut("WebGLRenderer: "+C.message),C}function tt(){Ft=new _w(W),Ft.init(),Pe=new cC(W,Ft),F=new lw(W,Ft,e,Pe),E=new oC(W,Ft),F.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ie=W.createFramebuffer(),G=W.createFramebuffer(),te=W.createFramebuffer(),ee=new yw(W),ue=new qA,he=new lC(W,Ft,E,ue,F,Pe,ee),Te=new vw(H),Re=new EM(W),ke=new sw(W,Re),pe=new xw(W,Re,ee,ke),_e=new Ew(W,pe,Re,ke,ee),X=new Mw(W,F,he),Qe=new cw(ue),De=new $A(H,Te,Ft,F,ke,Qe),Je=new mC(H,ue),Ne=new KA,Ce=new tC(Ft),lt=new aw(H,Te,E,_e,w,m),it=new sC(H,_e,F),xe=new gC(W,ee,F,E),be=new ow(W,Ft,ee),ve=new Sw(W,Ft,ee),ee.programs=De.programs,H.capabilities=F,H.extensions=Ft,H.properties=ue,H.renderLists=Ne,H.shadowMap=it,H.state=E,H.info=ee}b!==ri&&(U=new ww(b,t.width,t.height,d,s,l));const je=new hC(H,W);this.xr=je,this.getContext=function(){return W},this.getContextAttributes=function(){return W.getContextAttributes()},this.forceContextLoss=function(){const C=Ft.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Ft.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return J},this.setPixelRatio=function(C){C!==void 0&&(J=C,this.setSize($e,k,!1))},this.getSize=function(C){return C.set($e,k)},this.setSize=function(C,$,de=!0){if(je.isPresenting){ut("WebGLRenderer: Can't change size while VR device is presenting.");return}$e=C,k=$,t.width=Math.floor(C*J),t.height=Math.floor($*J),de===!0&&(t.style.width=C+"px",t.style.height=$+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set($e*J,k*J).floor()},this.setDrawingBufferSize=function(C,$,de){$e=C,k=$,J=de,t.width=Math.floor(C*de),t.height=Math.floor($*de),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(b===ri){Ut("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){ut("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(N)},this.getViewport=function(C){return C.copy(Ae)},this.setViewport=function(C,$,de,ae){C.isVector4?Ae.set(C.x,C.y,C.z,C.w):Ae.set(C,$,de,ae),E.viewport(N.copy(Ae).multiplyScalar(J).round())},this.getScissor=function(C){return C.copy(st)},this.setScissor=function(C,$,de,ae){C.isVector4?st.set(C.x,C.y,C.z,C.w):st.set(C,$,de,ae),E.scissor(oe.copy(st).multiplyScalar(J).round())},this.getScissorTest=function(){return ht},this.setScissorTest=function(C){E.setScissorTest(ht=C)},this.setOpaqueSort=function(C){ge=C},this.setTransparentSort=function(C){Le=C},this.getClearColor=function(C){return C.copy(lt.getClearColor())},this.setClearColor=function(){lt.setClearColor(...arguments)},this.getClearAlpha=function(){return lt.getClearAlpha()},this.setClearAlpha=function(){lt.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,de=!0){let ae=0;if(C){let ne=!1;if(q!==null){const Oe=q.texture.format;ne=y.has(Oe)}if(ne){const Oe=q.texture.type,Ue=S.has(Oe),Fe=lt.getClearColor(),Ye=lt.getClearAlpha(),et=Fe.r,ft=Fe.g,vt=Fe.b;Ue?(D[0]=et,D[1]=ft,D[2]=vt,D[3]=Ye,W.clearBufferuiv(W.COLOR,0,D)):(z[0]=et,z[1]=ft,z[2]=vt,z[3]=Ye,W.clearBufferiv(W.COLOR,0,z))}else ae|=W.COLOR_BUFFER_BIT}$&&(ae|=W.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),de&&(ae|=W.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),ae!==0&&W.clear(ae)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),j=C},this.dispose=function(){t.removeEventListener("webglcontextlost",Ot,!1),t.removeEventListener("webglcontextrestored",Lt,!1),t.removeEventListener("webglcontextcreationerror",Mn,!1),lt.dispose(),Ne.dispose(),Ce.dispose(),ue.dispose(),Te.dispose(),_e.dispose(),ke.dispose(),xe.dispose(),De.dispose(),je.dispose(),je.removeEventListener("sessionstart",Po),je.removeEventListener("sessionend",Lo),On.stop()};function Ot(C){C.preventDefault(),mg("WebGLRenderer: Context Lost."),B=!0}function Lt(){mg("WebGLRenderer: Context Restored."),B=!1;const C=ee.autoReset,$=it.enabled,de=it.autoUpdate,ae=it.needsUpdate,ne=it.type;tt(),ee.autoReset=C,it.enabled=$,it.autoUpdate=de,it.needsUpdate=ae,it.type=ne}function Mn(C){Ut("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function oi(C){const $=C.target;$.removeEventListener("dispose",oi),qr($)}function qr(C){Ea(C),ue.remove(C)}function Ea(C){const $=ue.get(C).programs;$!==void 0&&($.forEach(function(de){De.releaseProgram(de)}),C.isShaderMaterial&&De.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,de,ae,ne,Oe){$===null&&($=Pt);const Ue=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,Fe=Zt(C,$,de,ae,ne);E.setMaterial(ae,Ue);let Ye=de.index,et=1;if(ae.wireframe===!0){if(Ye=pe.getWireframeAttribute(de),Ye===void 0)return;et=2}const ft=de.drawRange,vt=de.attributes.position;let Xe=ft.start*et,wt=(ft.start+ft.count)*et;Oe!==null&&(Xe=Math.max(Xe,Oe.start*et),wt=Math.min(wt,(Oe.start+Oe.count)*et)),Ye!==null?(Xe=Math.max(Xe,0),wt=Math.min(wt,Ye.count)):vt!=null&&(Xe=Math.max(Xe,0),wt=Math.min(wt,vt.count));const rn=wt-Xe;if(rn<0||rn===1/0)return;ke.setup(ne,ae,Fe,de,Ye);let Wt,Ht=be;if(Ye!==null&&(Wt=Re.get(Ye),Ht=ve,Ht.setIndex(Wt)),ne.isMesh)ae.wireframe===!0?(E.setLineWidth(ae.wireframeLinewidth*zt()),Ht.setMode(W.LINES)):Ht.setMode(W.TRIANGLES);else if(ne.isLine){let un=ae.linewidth;un===void 0&&(un=1),E.setLineWidth(un*zt()),ne.isLineSegments?Ht.setMode(W.LINES):ne.isLineLoop?Ht.setMode(W.LINE_LOOP):Ht.setMode(W.LINE_STRIP)}else ne.isPoints?Ht.setMode(W.POINTS):ne.isSprite&&Ht.setMode(W.TRIANGLES);if(ne.isBatchedMesh)if(Ft.get("WEBGL_multi_draw"))Ht.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const un=ne._multiDrawStarts,He=ne._multiDrawCounts,sn=ne._multiDrawCount,At=Ye?Re.get(Ye).bytesPerElement:1,Rn=ue.get(ae).currentProgram.getUniforms();for(let xt=0;xt<sn;xt++)Rn.setValue(W,"_gl_DrawID",xt),Ht.render(un[xt]/At,He[xt])}else if(ne.isInstancedMesh)Ht.renderInstances(Xe,rn,ne.count);else if(de.isInstancedBufferGeometry){const un=de._maxInstanceCount!==void 0?de._maxInstanceCount:1/0,He=Math.min(de.instanceCount,un);Ht.renderInstances(Xe,rn,He)}else Ht.render(Xe,rn)};function Yr(C,$,de,ae){j!==null&&C.isNodeMaterial&&j.setObject(ae,C),pt===!0&&Qe.setState(C,de,!1),C.transparent===!0&&C.side===Pi&&C.forceSinglePass===!1?(C.side=Kn,C.needsUpdate=!0,Zr(C,$,ae),C.side=Sa,C.needsUpdate=!0,Zr(C,$,ae),C.side=Pi):Zr(C,$,ae)}this.compile=function(C,$,de=null){de===null&&(de=C),j!==null&&j.renderStart(C,$,de),P=Ce.get(de),P.init($),T.push(P),de.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),C!==de&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights(),j!==null&&j.updateLights(P.state.lightsArray),_t=this.localClippingEnabled,pt=Qe.init(this.clippingPlanes,_t),pt===!0&&Qe.setGlobalState(this.clippingPlanes,$),j!==null&&it.render(P.state.shadowsArray,de,$);const ae=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Oe=ne.material;if(Oe)if(Array.isArray(Oe))for(let Ue=0;Ue<Oe.length;Ue++){const Fe=Oe[Ue];Yr(Fe,de,$,ne),ae.add(Fe)}else Yr(Oe,de,$,ne),ae.add(Oe)}),P=T.pop(),j!==null&&j.renderEnd(),ae},this.compileAsync=function(C,$,de=null){const ae=this.compile(C,$,de);return new Promise(ne=>{function Oe(){if(ae.forEach(function(Ue){const Ye=ue.get(Ue).currentProgram;(Ye===void 0||Ye.isReady())&&ae.delete(Ue)}),ae.size===0){ne(C);return}setTimeout(Oe,10)}Ft.get("KHR_parallel_shader_compile")!==null?Oe():setTimeout(Oe,10)})};let Kr=null;function Dc(C){Kr&&Kr(C)}function Po(){On.stop()}function Lo(){On.start()}const On=new xv;On.setAnimationLoop(Dc),typeof self<"u"&&On.setContext(self),this.setAnimationLoop=function(C){Kr=C,je.setAnimationLoop(C),C===null?On.stop():On.start()},je.addEventListener("sessionstart",Po),je.addEventListener("sessionend",Lo),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){Ut("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;j!==null&&j.renderStart(C,$);const de=je.enabled===!0&&je.isPresenting===!0,ae=U!==null&&(q===null||de)&&U.begin(H,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),je.enabled===!0&&je.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(je.cameraAutoUpdate===!0&&je.updateCamera($),$=je.getCamera()),C.isScene===!0&&C.onBeforeRender(H,C,$,q),P=Ce.get(C,T.length),P.init($),P.state.textureUnits=he.getTextureUnits(),T.push(P),ot.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),Be.setFromProjectionMatrix(ot,Wi,$.reversedDepth),_t=this.localClippingEnabled,pt=Qe.init(this.clippingPlanes,_t),L=Ne.get(C,I.length),L.init(),I.push(L),je.enabled===!0&&je.isPresenting===!0){const Ue=H.xr.getDepthSensingMesh();Ue!==null&&Ta(Ue,$,-1/0,H.sortObjects)}Ta(C,$,0,H.sortObjects),L.finish(),j!==null&&j.updateLights(P.state.lightsArray),H.sortObjects===!0&&L.sort(ge,Le),yt=je.enabled===!1||je.isPresenting===!1||je.hasDepthSensing()===!1,yt&&lt.addToRenderList(L,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),pt===!0&&Qe.beginShadows();const ne=P.state.shadowsArray;if(it.render(ne,C,$),pt===!0&&Qe.endShadows(),(ae&&U.hasRenderPass())===!1){const Ue=L.opaque,Fe=L.transmissive;if(P.setupLights(),$.isArrayCamera){const Ye=$.cameras;if(Fe.length>0)for(let et=0,ft=Ye.length;et<ft;et++){const vt=Ye[et];Do(Ue,Fe,C,vt)}yt&&lt.render(C);for(let et=0,ft=Ye.length;et<ft;et++){const vt=Ye[et];_s(L,C,vt,vt.viewport)}}else Fe.length>0&&Do(Ue,Fe,C,$),yt&&lt.render(C),_s(L,C,$)}q!==null&&le===0&&(he.updateMultisampleRenderTarget(q),he.updateRenderTargetMipmap(q)),ae&&U.end(H),C.isScene===!0&&C.onAfterRender(H,C,$),ke.resetDefaultState(),K=-1,Z=null,T.pop(),T.length>0?(P=T[T.length-1],he.setTextureUnits(P.state.textureUnits),pt===!0&&Qe.setGlobalState(H.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,j!==null&&j.renderEnd()};function Ta(C,$,de,ae){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)de=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(Be)){ae&&bt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(ot);const Ue=_e.update(C),Fe=C.material;Fe.visible&&L.push(C,Ue,Fe,de,bt.z,null,$)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(Be))){const Ue=_e.update(C),Fe=C.material;if(ae&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),bt.copy(C.boundingSphere.center)):(Ue.boundingSphere===null&&Ue.computeBoundingSphere(),bt.copy(Ue.boundingSphere.center)),bt.applyMatrix4(C.matrixWorld).applyMatrix4(ot)),Array.isArray(Fe)){const Ye=Ue.groups;for(let et=0,ft=Ye.length;et<ft;et++){const vt=Ye[et],Xe=Fe[vt.materialIndex];Xe&&Xe.visible&&L.push(C,Ue,Xe,de,bt.z,vt,$)}}else Fe.visible&&L.push(C,Ue,Fe,de,bt.z,null,$)}}const Oe=C.children;for(let Ue=0,Fe=Oe.length;Ue<Fe;Ue++)Ta(Oe[Ue],$,de,ae)}function _s(C,$,de,ae){const{opaque:ne,transmissive:Oe,transparent:Ue}=C;P.setupLightsView(de),pt===!0&&Qe.setGlobalState(H.clippingPlanes,de),ae&&E.viewport(N.copy(ae)),ne.length>0&&jr(ne,$,de),Oe.length>0&&jr(Oe,$,de),Ue.length>0&&jr(Ue,$,de),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function Do(C,$,de,ae){if((de.isScene===!0?de.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[ae.id]===void 0){const Xe=Ft.has("EXT_color_buffer_half_float")||Ft.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[ae.id]=new Ui(1,1,{generateMipmaps:!0,type:Xe?qi:ri,minFilter:ga,samples:Math.max(4,F.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Ct.workingColorSpace})}const Oe=P.state.transmissionRenderTarget[ae.id],Ue=ae.viewport||N;Oe.setSize(Ue.z*H.transmissionResolutionScale,Ue.w*H.transmissionResolutionScale);const Fe=H.getRenderTarget(),Ye=H.getActiveCubeFace(),et=H.getActiveMipmapLevel();H.setRenderTarget(Oe),H.getClearColor(Ge),ze=H.getClearAlpha(),ze<1&&H.setClearColor(16777215,.5),H.clear(),yt&&lt.render(de);const ft=H.toneMapping;H.toneMapping=Xi;const vt=ae.viewport;if(ae.viewport!==void 0&&(ae.viewport=void 0),P.setupLightsView(ae),pt===!0&&Qe.setGlobalState(H.clippingPlanes,ae),jr(C,de,ae),he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe),Ft.has("WEBGL_multisampled_render_to_texture")===!1){let Xe=!1;for(let wt=0,rn=$.length;wt<rn;wt++){const Wt=$[wt],{object:Ht,geometry:un,material:He,group:sn}=Wt;if(He.side===Pi&&Ht.layers.test(ae.layers)){const At=He.side;He.side=Kn,He.needsUpdate=!0,xs(Ht,de,ae,un,He,sn),He.side=At,He.needsUpdate=!0,Xe=!0}}Xe===!0&&(he.updateMultisampleRenderTarget(Oe),he.updateRenderTargetMipmap(Oe))}H.setRenderTarget(Fe,Ye,et),H.setClearColor(Ge,ze),vt!==void 0&&(ae.viewport=vt),H.toneMapping=ft}function jr(C,$,de){const ae=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Oe=C.length;ne<Oe;ne++){const Ue=C[ne],{object:Fe,geometry:Ye,group:et}=Ue;let ft=Ue.material;ft.allowOverride===!0&&ae!==null&&(ft=ae),Fe.layers.test(de.layers)&&xs(Fe,$,de,Ye,ft,et)}}function xs(C,$,de,ae,ne,Oe){j!==null&&ne.isNodeMaterial&&j.setObject(C,ne),C.onBeforeRender(H,$,de,ae,ne,Oe),C.modelViewMatrix.multiplyMatrices(de.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(H,$,de,ae,C,Oe),ne.transparent===!0&&ne.side===Pi&&ne.forceSinglePass===!1?(ne.side=Kn,ne.needsUpdate=!0,H.renderBufferDirect(de,$,ae,ne,C,Oe),ne.side=Sa,ne.needsUpdate=!0,H.renderBufferDirect(de,$,ae,ne,C,Oe),ne.side=Pi):H.renderBufferDirect(de,$,ae,ne,C,Oe),C.onAfterRender(H,$,de,ae,ne,Oe)}function Zr(C,$,de){$.isScene!==!0&&($=Pt);const ae=ue.get(C),ne=P.state.lights,Oe=P.state.shadowsArray,Ue=ne.state.version,Fe=De.getParameters(C,ne.state,Oe,$,de,P.state.lightProbeGridArray),Ye=De.getProgramCacheKey(Fe);let et=ae.programs;ae.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,ae.fog=$.fog;const ft=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;ae.envMap=Te.get(C.envMap||ae.environment,ft),ae.envMapRotation=ae.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,et===void 0&&(C.addEventListener("dispose",oi),et=new Map,ae.programs=et);let vt=et.get(Ye);if(vt!==void 0){if(ae.currentProgram===vt&&ae.lightsStateVersion===Ue)return No(C,Fe),vt}else Fe.uniforms=De.getUniforms(C),j!==null&&C.isNodeMaterial&&j.build(C,de,Fe),C.onBeforeCompile(Fe,H),vt=De.acquireProgram(Fe,Ye),et.set(Ye,vt),ae.uniforms=Fe.uniforms;const Xe=ae.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(Xe.clippingPlanes=Qe.uniform),No(C,Fe),ae.needsLights=ys(C),ae.lightsStateVersion=Ue,ae.needsLights&&(Xe.ambientLightColor.value=ne.state.ambient,Xe.lightProbe.value=ne.state.probe,Xe.sunLights.value=ne.state.sun,Xe.sunLightShadows.value=ne.state.sunShadow,Xe.directionalLights.value=ne.state.directional,Xe.directionalLightShadows.value=ne.state.directionalShadow,Xe.spotLights.value=ne.state.spot,Xe.spotLightShadows.value=ne.state.spotShadow,Xe.rectAreaLights.value=ne.state.rectArea,Xe.ltc_1.value=ne.state.rectAreaLTC1,Xe.ltc_2.value=ne.state.rectAreaLTC2,Xe.pointLights.value=ne.state.point,Xe.pointLightShadows.value=ne.state.pointShadow,Xe.hemisphereLights.value=ne.state.hemi,Xe.sunShadowMatrix.value=ne.state.sunShadowMatrix,Xe.sunShadowCascade.value=ne.state.sunShadowCascade,Xe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,Xe.spotLightMatrix.value=ne.state.spotLightMatrix,Xe.spotLightMap.value=ne.state.spotLightMap,Xe.pointShadowMatrix.value=ne.state.pointShadowMatrix),ae.lightProbeGrid=P.state.lightProbeGridArray.length>0,ae.currentProgram=vt,ae.uniformsList=null,vt}function Ss(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=hc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function No(C,$){const de=ue.get(C);de.outputColorSpace=$.outputColorSpace,de.batching=$.batching,de.batchingColor=$.batchingColor,de.instancing=$.instancing,de.instancingColor=$.instancingColor,de.instancingMorph=$.instancingMorph,de.skinning=$.skinning,de.morphTargets=$.morphTargets,de.morphNormals=$.morphNormals,de.morphColors=$.morphColors,de.morphTargetsCount=$.morphTargetsCount,de.numClippingPlanes=$.numClippingPlanes,de.numIntersection=$.numClipIntersection,de.vertexAlphas=$.vertexAlphas,de.vertexTangents=$.vertexTangents,de.toneMapping=$.toneMapping}function Nc(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition($.matrixWorld);for(let de=0,ae=C.length;de<ae;de++){const ne=C[de];if(ne.texture!==null&&ne.boundingBox.containsPoint(R))return ne}return null}function Zt(C,$,de,ae,ne){$.isScene!==!0&&($=Pt),he.resetTextureUnits();const Oe=$.fog,Ue=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial?$.environment:null,Fe=q===null?H.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:Ct.workingColorSpace,Ye=ae.isMeshStandardMaterial||ae.isMeshLambertMaterial&&!ae.envMap||ae.isMeshPhongMaterial&&!ae.envMap,et=Te.get(ae.envMap||Ue,Ye),ft=ae.vertexColors===!0&&!!de.attributes.color&&de.attributes.color.itemSize===4,vt=!!de.attributes.tangent&&(!!ae.normalMap||ae.anisotropy>0),Xe=!!de.morphAttributes.position,wt=!!de.morphAttributes.normal,rn=!!de.morphAttributes.color;let Wt=Xi;ae.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(Wt=H.toneMapping);const Ht=de.morphAttributes.position||de.morphAttributes.normal||de.morphAttributes.color,un=Ht!==void 0?Ht.length:0,He=ue.get(ae),sn=P.state.lights;if(pt===!0&&(_t===!0||C!==Z)){const Vt=C===Z&&ae.id===K;Qe.setState(ae,C,Vt)}let At=!1;ae.version===He.__version?(He.needsLights&&He.lightsStateVersion!==sn.state.version||He.outputColorSpace!==Fe||ne.isBatchedMesh&&He.batching===!1||!ne.isBatchedMesh&&He.batching===!0||ne.isBatchedMesh&&He.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&He.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&He.instancing===!1||!ne.isInstancedMesh&&He.instancing===!0||ne.isSkinnedMesh&&He.skinning===!1||!ne.isSkinnedMesh&&He.skinning===!0||ne.isInstancedMesh&&He.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&He.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&He.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&He.instancingMorph===!1&&ne.morphTexture!==null||He.envMap!==et||ae.fog===!0&&He.fog!==Oe||He.numClippingPlanes!==void 0&&(He.numClippingPlanes!==Qe.numPlanes||He.numIntersection!==Qe.numIntersection)||He.vertexAlphas!==ft||He.vertexTangents!==vt||He.morphTargets!==Xe||He.morphNormals!==wt||He.morphColors!==rn||He.toneMapping!==Wt||He.morphTargetsCount!==un||!!He.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(At=!0):(At=!0,He.__version=ae.version);let Rn=He.currentProgram;At===!0&&(Rn=Zr(ae,$,ne),j&&ae.isNodeMaterial&&j.onUpdateProgram(ae,Rn,He));let xt=!1,vi=!1,Ki=!1;const It=Rn.getUniforms(),Yt=He.uniforms;if(E.useProgram(Rn.program)&&(xt=!0,vi=!0,Ki=!0),ae.id!==K&&(K=ae.id,vi=!0),He.needsLights){const Vt=Nc(P.state.lightProbeGridArray,ne);He.lightProbeGrid!==Vt&&(He.lightProbeGrid=Vt,vi=!0)}if(xt||Z!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),It.setValue(W,"projectionMatrix",C.projectionMatrix),It.setValue(W,"viewMatrix",C.matrixWorldInverse);const li=It.map.cameraPosition;li!==void 0&&li.setValue(W,Rt.setFromMatrixPosition(C.matrixWorld)),F.logarithmicDepthBuffer&&It.setValue(W,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(ae.isMeshPhongMaterial||ae.isMeshToonMaterial||ae.isMeshLambertMaterial||ae.isMeshBasicMaterial||ae.isMeshStandardMaterial||ae.isShaderMaterial)&&It.setValue(W,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,vi=!0,Ki=!0)}if(He.needsLights&&(sn.state.sunShadowMap.length>0&&It.setValue(W,"sunShadowMap",sn.state.sunShadowMap,he),sn.state.directionalShadowMap.length>0&&It.setValue(W,"directionalShadowMap",sn.state.directionalShadowMap,he),sn.state.spotShadowMap.length>0&&It.setValue(W,"spotShadowMap",sn.state.spotShadowMap,he),sn.state.pointShadowMap.length>0&&It.setValue(W,"pointShadowMap",sn.state.pointShadowMap,he)),ne.isSkinnedMesh){It.setOptional(W,ne,"bindMatrix"),It.setOptional(W,ne,"bindMatrixInverse");const Vt=ne.skeleton;Vt&&(Vt.boneTexture===null&&Vt.computeBoneTexture(),It.setValue(W,"boneTexture",Vt.boneTexture,he))}ne.isBatchedMesh&&(It.setOptional(W,ne,"batchingTexture"),It.setValue(W,"batchingTexture",ne._matricesTexture,he),It.setOptional(W,ne,"batchingIdTexture"),It.setValue(W,"batchingIdTexture",ne._indirectTexture,he),It.setOptional(W,ne,"batchingColorTexture"),ne._colorsTexture!==null&&It.setValue(W,"batchingColorTexture",ne._colorsTexture,he));const _i=de.morphAttributes;if((_i.position!==void 0||_i.normal!==void 0||_i.color!==void 0)&&X.update(ne,de,Rn),(vi||He.receiveShadow!==ne.receiveShadow)&&(He.receiveShadow=ne.receiveShadow,It.setValue(W,"receiveShadow",ne.receiveShadow)),(ae.isMeshStandardMaterial||ae.isMeshLambertMaterial||ae.isMeshPhongMaterial)&&ae.envMap===null&&$.environment!==null&&(Yt.envMapIntensity.value=$.environmentIntensity),Yt.dfgLUT!==void 0&&(Yt.dfgLUT.value=_C()),vi){if(It.setValue(W,"toneMappingExposure",H.toneMappingExposure),He.needsLights&&Uc(Yt,Ki),Oe&&ae.fog===!0&&Je.refreshFogUniforms(Yt,Oe),Je.refreshMaterialUniforms(Yt,ae,J,k,P.state.transmissionRenderTarget[C.id]),He.needsLights&&He.lightProbeGrid){const Vt=He.lightProbeGrid;Yt.probesSH.value=Vt.texture,Yt.probesMin.value.copy(Vt.boundingBox.min),Yt.probesMax.value.copy(Vt.boundingBox.max),Yt.probesResolution.value.copy(Vt.resolution)}hc.upload(W,Ss(He),Yt,he)}if(ae.isShaderMaterial&&ae.uniformsNeedUpdate===!0&&(hc.upload(W,Ss(He),Yt,he),ae.uniformsNeedUpdate=!1),ae.isSpriteMaterial&&It.setValue(W,"center",ne.center),It.setValue(W,"modelViewMatrix",ne.modelViewMatrix),It.setValue(W,"normalMatrix",ne.normalMatrix),It.setValue(W,"modelMatrix",ne.matrixWorld),ae.uniformsGroups!==void 0){const Vt=ae.uniformsGroups;for(let li=0,xi=Vt.length;li<xi;li++){const Si=Vt[li];xe.update(Si,Rn),xe.bind(Si,Rn)}}return Rn}function Uc(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.sunLights.needsUpdate=$,C.sunLightShadows.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function ys(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return le},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,$,de){const ae=ue.get(C);ae.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,ae.__autoAllocateDepthBuffer===!1&&(ae.__useRenderToTexture=!1),ue.get(C.texture).__webglTexture=$,ue.get(C.depthTexture).__webglTexture=ae.__autoAllocateDepthBuffer?void 0:de,ae.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const de=ue.get(C);de.__webglFramebuffer=$,de.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,de=0){q=C,Q=$,le=de;let ae=null,ne=!1,Oe=!1;if(C){const Fe=ue.get(C);if(Fe.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(W.FRAMEBUFFER,Fe.__webglFramebuffer),N.copy(C.viewport),oe.copy(C.scissor),Se=C.scissorTest,E.viewport(N),E.scissor(oe),E.setScissorTest(Se),K=-1;return}else if(Fe.__webglFramebuffer===void 0)he.setupRenderTarget(C);else if(Fe.__hasExternalTextures)he.rebindTextures(C,ue.get(C.texture).__webglTexture,ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const ft=C.depthTexture;if(Fe.__boundDepthTexture!==ft){if(ft!==null&&ue.has(ft)&&(C.width!==ft.image.width||C.height!==ft.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");he.setupDepthRenderbuffer(C)}}const Ye=C.texture;(Ye.isData3DTexture||Ye.isDataArrayTexture||Ye.isCompressedArrayTexture)&&(Oe=!0);const et=ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(et[$])?ae=et[$][de]:ae=et[$],ne=!0):C.samples>0&&he.useMultisampledRTT(C)===!1?ae=ue.get(C).__webglMultisampledFramebuffer:Array.isArray(et)?ae=et[de]:ae=et,N.copy(C.viewport),oe.copy(C.scissor),Se=C.scissorTest}else N.copy(Ae).multiplyScalar(J).floor(),oe.copy(st).multiplyScalar(J).floor(),Se=ht;if(de!==0&&(ae=ie),E.bindFramebuffer(W.FRAMEBUFFER,ae)&&E.drawBuffers(C,ae),E.viewport(N),E.scissor(oe),E.setScissorTest(Se),ne){const Fe=ue.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_CUBE_MAP_POSITIVE_X+$,Fe.__webglTexture,de)}else if(Oe){const Fe=$;for(let Ye=0;Ye<C.textures.length;Ye++){const et=ue.get(C.textures[Ye]);W.framebufferTextureLayer(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0+Ye,et.__webglTexture,de,Fe)}}else if(C!==null&&de!==0){const Fe=ue.get(C.texture);W.framebufferTexture2D(W.FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Fe.__webglTexture,de)}K=-1};function Ms(C){const $=ue.get(C);return($.__readFormat!==C.format||$.__readType!==C.type)&&($.__readFormat=C.format,$.__readType=C.type,$.__formatReadable=F.textureFormatReadable(C.format),$.__typeReadable=F.textureTypeReadable(C.type)),$}this.readRenderTargetPixels=function(C,$,de,ae,ne,Oe,Ue,Fe=0){if(!(C&&C.isWebGLRenderTarget)){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ye=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ye=Ye[Ue]),Ye){E.bindFramebuffer(W.FRAMEBUFFER,Ye);try{const et=C.textures[Fe],ft=et.format,vt=et.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe);const Xe=Ms(et);if(Xe.__formatReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Xe.__typeReadable===!1){Ut("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-ae&&de>=0&&de<=C.height-ne&&W.readPixels($,de,ae,ne,Pe.convert(ft),Pe.convert(vt),Oe)}finally{const et=q!==null?ue.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,et)}}},this.readRenderTargetPixelsAsync=async function(C,$,de,ae,ne,Oe,Ue,Fe=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ye=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ue!==void 0&&(Ye=Ye[Ue]),Ye)if($>=0&&$<=C.width-ae&&de>=0&&de<=C.height-ne){E.bindFramebuffer(W.FRAMEBUFFER,Ye);const et=C.textures[Fe],ft=et.format,vt=et.type;C.textures.length>1&&W.readBuffer(W.COLOR_ATTACHMENT0+Fe);const Xe=Ms(et);if(Xe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Xe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const wt=W.createBuffer();W.bindBuffer(W.PIXEL_PACK_BUFFER,wt),W.bufferData(W.PIXEL_PACK_BUFFER,Oe.byteLength,W.STREAM_READ),W.readPixels($,de,ae,ne,Pe.convert(ft),Pe.convert(vt),0),W.bindBuffer(W.PIXEL_PACK_BUFFER,null);const rn=q!==null?ue.get(q).__webglFramebuffer:null;E.bindFramebuffer(W.FRAMEBUFFER,rn);const Wt=W.fenceSync(W.SYNC_GPU_COMMANDS_COMPLETE,0);return W.flush(),await Py(W,Wt,4),W.bindBuffer(W.PIXEL_PACK_BUFFER,wt),W.getBufferSubData(W.PIXEL_PACK_BUFFER,0,Oe),W.bindBuffer(W.PIXEL_PACK_BUFFER,null),W.deleteBuffer(wt),W.deleteSync(Wt),Oe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,de=0){const ae=Math.pow(2,-de),ne=Math.floor(C.image.width*ae),Oe=Math.floor(C.image.height*ae),Ue=$!==null?$.x:0,Fe=$!==null?$.y:0;he.setTexture2D(C,0),W.copyTexSubImage2D(W.TEXTURE_2D,de,0,0,Ue,Fe,ne,Oe),E.unbindTexture()},this.copyTextureToTexture=function(C,$,de=null,ae=null,ne=0,Oe=0){let Ue,Fe,Ye,et,ft,vt,Xe,wt,rn;const Wt=C.isCompressedTexture?C.mipmaps[Oe]:C.image;if(de!==null)Ue=de.max.x-de.min.x,Fe=de.max.y-de.min.y,Ye=de.isBox3?de.max.z-de.min.z:1,et=de.min.x,ft=de.min.y,vt=de.isBox3?de.min.z:0;else{const Yt=Math.pow(2,-ne);Ue=Math.floor(Wt.width*Yt),Fe=Math.floor(Wt.height*Yt),C.isDataArrayTexture?Ye=Wt.depth:C.isData3DTexture?Ye=Math.floor(Wt.depth*Yt):Ye=1,et=0,ft=0,vt=0}ae!==null?(Xe=ae.x,wt=ae.y,rn=ae.z):(Xe=0,wt=0,rn=0);const Ht=Pe.convert($.format),un=Pe.convert($.type);let He;$.isData3DTexture?(he.setTexture3D($,0),He=W.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(he.setTexture2DArray($,0),He=W.TEXTURE_2D_ARRAY):(he.setTexture2D($,0),He=W.TEXTURE_2D),E.activeTexture(W.TEXTURE0),E.pixelStorei(W.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(W.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(W.UNPACK_ALIGNMENT,$.unpackAlignment);const sn=E.getParameter(W.UNPACK_ROW_LENGTH),At=E.getParameter(W.UNPACK_IMAGE_HEIGHT),Rn=E.getParameter(W.UNPACK_SKIP_PIXELS),xt=E.getParameter(W.UNPACK_SKIP_ROWS),vi=E.getParameter(W.UNPACK_SKIP_IMAGES);E.pixelStorei(W.UNPACK_ROW_LENGTH,Wt.width),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,Wt.height),E.pixelStorei(W.UNPACK_SKIP_PIXELS,et),E.pixelStorei(W.UNPACK_SKIP_ROWS,ft),E.pixelStorei(W.UNPACK_SKIP_IMAGES,vt);const Ki=C.isDataArrayTexture||C.isData3DTexture,It=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const Yt=ue.get(C),_i=ue.get($),Vt=ue.get(Yt.__renderTarget),li=ue.get(_i.__renderTarget);E.bindFramebuffer(W.READ_FRAMEBUFFER,Vt.__webglFramebuffer),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,li.__webglFramebuffer);for(let xi=0;xi<Ye;xi++)Ki&&(W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ue.get(C).__webglTexture,ne,vt+xi),W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,ue.get($).__webglTexture,Oe,rn+xi)),W.blitFramebuffer(et,ft,Ue,Fe,Xe,wt,Ue,Fe,W.DEPTH_BUFFER_BIT,W.NEAREST);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||ue.has(C)){const Yt=ue.get(C),_i=ue.get($);E.bindFramebuffer(W.READ_FRAMEBUFFER,G),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,te);for(let Vt=0;Vt<Ye;Vt++)Ki?W.framebufferTextureLayer(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,Yt.__webglTexture,ne,vt+Vt):W.framebufferTexture2D(W.READ_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,Yt.__webglTexture,ne),It?W.framebufferTextureLayer(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,_i.__webglTexture,Oe,rn+Vt):W.framebufferTexture2D(W.DRAW_FRAMEBUFFER,W.COLOR_ATTACHMENT0,W.TEXTURE_2D,_i.__webglTexture,Oe),ne!==0?W.blitFramebuffer(et,ft,Ue,Fe,Xe,wt,Ue,Fe,W.COLOR_BUFFER_BIT,W.NEAREST):It?W.copyTexSubImage3D(He,Oe,Xe,wt,rn+Vt,et,ft,Ue,Fe):W.copyTexSubImage2D(He,Oe,Xe,wt,et,ft,Ue,Fe);E.bindFramebuffer(W.READ_FRAMEBUFFER,null),E.bindFramebuffer(W.DRAW_FRAMEBUFFER,null)}else It?C.isDataTexture||C.isData3DTexture?W.texSubImage3D(He,Oe,Xe,wt,rn,Ue,Fe,Ye,Ht,un,Wt.data):$.isCompressedArrayTexture?W.compressedTexSubImage3D(He,Oe,Xe,wt,rn,Ue,Fe,Ye,Ht,Wt.data):W.texSubImage3D(He,Oe,Xe,wt,rn,Ue,Fe,Ye,Ht,un,Wt):C.isDataTexture?W.texSubImage2D(W.TEXTURE_2D,Oe,Xe,wt,Ue,Fe,Ht,un,Wt.data):C.isCompressedTexture?W.compressedTexSubImage2D(W.TEXTURE_2D,Oe,Xe,wt,Wt.width,Wt.height,Ht,Wt.data):W.texSubImage2D(W.TEXTURE_2D,Oe,Xe,wt,Ue,Fe,Ht,un,Wt);E.pixelStorei(W.UNPACK_ROW_LENGTH,sn),E.pixelStorei(W.UNPACK_IMAGE_HEIGHT,At),E.pixelStorei(W.UNPACK_SKIP_PIXELS,Rn),E.pixelStorei(W.UNPACK_SKIP_ROWS,xt),E.pixelStorei(W.UNPACK_SKIP_IMAGES,vi),Oe===0&&$.generateMipmaps&&W.generateMipmap(He),E.unbindTexture()},this.initRenderTarget=function(C){ue.get(C).__webglFramebuffer===void 0&&he.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?he.setTextureCube(C,0):C.isData3DTexture?he.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?he.setTexture2DArray(C,0):he.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){Q=0,le=0,q=null,E.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Wi}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=Ct._getDrawingBufferColorSpace(e),t.unpackColorSpace=Ct._getUnpackColorSpace()}}class SC extends mh{constructor(e){super(e)}load(e,t,a,s){const l=this,u=new pM(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(d){try{t(l.parse(d))}catch(m){s?s(m):console.error(m),l.manager.itemError(e)}},a,s)}parse(e){function t(p){const v=new DataView(p),x=32/8*3+32/8*3*3+16/8,_=v.getUint32(80,!0);if(80+32/8+_*x===v.byteLength)return!0;const w=[115,111,108,105,100];for(let b=0;b<5;b++)if(a(w,v,b))return!1;return!0}function a(p,v,x){for(let _=0,M=p.length;_<M;_++)if(p[_]!==v.getUint8(x+_))return!1;return!0}function s(p){const v=new DataView(p),x=v.getUint32(80,!0);let _,M,w,b=!1,y,S,D,z,R;for(let B=0;B<70;B++)v.getUint32(B,!1)==1129270351&&v.getUint8(B+4)==82&&v.getUint8(B+5)==61&&(b=!0,y=new Float32Array(x*3*3),S=v.getUint8(B+6)/255,D=v.getUint8(B+7)/255,z=v.getUint8(B+8)/255,R=v.getUint8(B+9)/255);const L=84,P=50,I=new jn,T=new Float32Array(x*3*3),U=new Float32Array(x*3*3),H=new Tt;for(let B=0;B<x;B++){const j=L+B*P,ie=v.getFloat32(j,!0),G=v.getFloat32(j+4,!0),te=v.getFloat32(j+8,!0);if(b){const Q=v.getUint16(j+48,!0);(Q&32768)===0?(_=(Q&31)/31,M=(Q>>5&31)/31,w=(Q>>10&31)/31):(_=S,M=D,w=z)}for(let Q=1;Q<=3;Q++){const le=j+Q*12,q=B*3*3+(Q-1)*3;T[q]=v.getFloat32(le,!0),T[q+1]=v.getFloat32(le+4,!0),T[q+2]=v.getFloat32(le+8,!0),U[q]=ie,U[q+1]=G,U[q+2]=te,b&&(H.setRGB(_,M,w,ii),y[q]=H.r,y[q+1]=H.g,y[q+2]=H.b)}}return I.setAttribute("position",new si(T,3)),I.setAttribute("normal",new si(U,3)),b&&(I.setAttribute("color",new si(y,3)),I.hasColors=!0,I.alpha=R),I}function l(p){const v=new jn,x=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let w=0;const b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+b+b+b,"g"),S=new RegExp("normal"+b+b+b,"g"),D=[],z=[],R=[],L=new re;let P,I=0,T=0,U=0;for(;(P=x.exec(p))!==null;){T=U;const H=P[0],B=(P=M.exec(H))!==null?P[1]:"";for(R.push(B);(P=_.exec(H))!==null;){let G=0,te=0;const Q=P[0];for(;(P=S.exec(Q))!==null;)L.x=parseFloat(P[1]),L.y=parseFloat(P[2]),L.z=parseFloat(P[3]),te++;for(;(P=y.exec(Q))!==null;)D.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),z.push(L.x,L.y,L.z),G++,U++;te!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+w),G!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+w),w++}const j=T,ie=U-T;v.userData.groupNames=R,v.addGroup(j,ie,I),I++}return v.setAttribute("position",new pn(D,3)),v.setAttribute("normal",new pn(z,3)),v}function u(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const v=new Uint8Array(p.length);for(let x=0;x<p.length;x++)v[x]=p.charCodeAt(x)&255;return v.buffer||v}else return p}const m=d(e);return t(m)?s(m):l(u(e))}}function yC(i,e=Math.PI/3){const t=i.index?i.toNonIndexed():i,a=t.attributes.position,s=a.count;let l;if(a.isBufferAttribute===!0&&a.itemSize===3&&a.normalized===!1)l=a.array;else{l=new Float64Array(s*3);for(let R=0;R<s;R++)l[3*R+0]=a.getX(R),l[3*R+1]=a.getY(R),l[3*R+2]=a.getZ(R)}const u=Math.cos(e),d=(1+1e-10)*100,m=s/3,p=new Float64Array(m*3);for(let R=0;R<m;R++){const L=9*R,P=l[L+0],I=l[L+1],T=l[L+2],U=l[L+3],H=l[L+4],B=l[L+5],j=l[L+6],ie=l[L+7],G=l[L+8],te=j-U,Q=ie-H,le=G-B,q=P-U,K=I-H,Z=T-B,N=Q*Z-le*K,oe=le*q-te*Z,Se=te*K-Q*q,Ge=1/(Math.sqrt(N*N+oe*oe+Se*Se)||1);p[3*R+0]=N*Ge,p[3*R+1]=oe*Ge,p[3*R+2]=Se*Ge}const v=new Int32Array(s),x=new Float64Array(s*3);let _=1;for(;_<s*2;)_<<=1;const M=_-1,w=new Int32Array(_);let b=0;for(let R=0;R<s;R++){const L=3*R,P=Math.trunc(l[L+0]*d),I=Math.trunc(l[L+1]*d),T=Math.trunc(l[L+2]*d);let U=(Math.imul(P,73856093)^Math.imul(I,19349663)^Math.imul(T,83492791))&M;for(;;){const H=w[U];if(H===0){const j=3*b;x[j+0]=P,x[j+1]=I,x[j+2]=T,w[U]=b+1,v[R]=b++;break}const B=3*(H-1);if(x[B+0]===P&&x[B+1]===I&&x[B+2]===T){v[R]=H-1;break}U=U+1&M}}const y=new Int32Array(b+1);for(let R=0;R<s;R++)y[v[R]+1]++;for(let R=0;R<b;R++)y[R+1]+=y[R];const S=new Int32Array(s),D=y.slice(0,b);for(let R=0;R<m;R++){const L=3*R;S[D[v[L+0]]++]=R,S[D[v[L+1]]++]=R,S[D[v[L+2]]++]=R}const z=new Float32Array(s*3);for(let R=0;R<m;R++){const L=3*R,P=p[L+0],I=p[L+1],T=p[L+2];for(let U=0;U<3;U++){const H=L+U,B=v[H];let j=0,ie=0,G=0;for(let Q=y[B],le=y[B+1];Q<le;Q++){const q=3*S[Q],K=p[q+0],Z=p[q+1],N=p[q+2];P*K+I*Z+T*N>u&&(j+=K,ie+=Z,G+=N)}const te=1/(Math.sqrt(j*j+ie*ie+G*G)||1);z[3*H+0]=j*te,z[3*H+1]=ie*te,z[3*H+2]=G*te}}return t.setAttribute("normal",new si(z,3,!1)),t}const f0={type:"change"},vh={type:"start"},Cv={type:"end"},ic=new uh,h0=new ur,MC=Math.cos(70*Ny.DEG2RAD),hn=new re,Yn=2*Math.PI,Bt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},qd=1e-6;class EC extends yM{constructor(e,t=null){super(e,t),this.state=Bt.NONE,this.target=new re,this.cursor=new re,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.DOLLY,RIGHT:fr.PAN},this.touches={ONE:ls.ROTATE,TWO:ls.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new re,this._lastQuaternion=new Br,this._lastTargetPosition=new re,this._quat=new Br().setFromUnitVectors(e.up,new re(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new Vg,this._sphericalDelta=new Vg,this._scale=1,this._panOffset=new re,this._rotateStart=new dt,this._rotateEnd=new dt,this._rotateDelta=new dt,this._panStart=new dt,this._panEnd=new dt,this._panDelta=new dt,this._dollyStart=new dt,this._dollyEnd=new dt,this._dollyDelta=new dt,this._dollyDirection=new re,this._mouse=new dt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=wC.bind(this),this._onPointerDown=TC.bind(this),this._onPointerUp=AC.bind(this),this._onContextMenu=NC.bind(this),this._onMouseWheel=bC.bind(this),this._onKeyDown=PC.bind(this),this._onTouchStart=LC.bind(this),this._onTouchMove=DC.bind(this),this._onMouseDown=CC.bind(this),this._onMouseMove=RC.bind(this),this._interceptControlDown=UC.bind(this),this._interceptControlUp=FC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Bt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(f0),this.update(),this.state=Bt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;hn.copy(t).sub(this.target),hn.applyQuaternion(this._quat),this._spherical.setFromVector3(hn),this.autoRotate&&this.state===Bt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(a)&&isFinite(s)&&(a<-Math.PI?a+=Yn:a>Math.PI&&(a-=Yn),s<-Math.PI?s+=Yn:s>Math.PI&&(s-=Yn),a<=s?this._spherical.theta=Math.max(a,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+s)/2?Math.max(a,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(hn.setFromSpherical(this._spherical),hn.applyQuaternion(this._quatInverse),t.copy(this.target).add(hn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=hn.length();u=this._clampDistance(d*this._scale);const m=d-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),l=!!m}else if(this.object.isOrthographicCamera){const d=new re(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=m!==this.object.zoom;const p=new re(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=hn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(ic.origin.copy(this.object.position),ic.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(ic.direction))<MC?this.object.lookAt(this.target):(h0.setFromNormalAndCoplanarPoint(this.object.up,this.target),ic.intersectPlane(h0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>qd||8*(1-this._lastQuaternion.dot(this.object.quaternion))>qd||this._lastTargetPosition.distanceToSquared(this.target)>qd?(this.dispatchEvent(f0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Yn/60*this.autoRotateSpeed*e:Yn/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){hn.setFromMatrixColumn(t,0),hn.multiplyScalar(-e),this._panOffset.add(hn)}_panUp(e,t){this.screenSpacePanning===!0?hn.setFromMatrixColumn(t,1):(hn.setFromMatrixColumn(t,0),hn.crossVectors(this.object.up,hn)),hn.multiplyScalar(e),this._panOffset.add(hn)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;hn.copy(s).sub(this.target);let l=hn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*t*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),s=e-a.left,l=t-a.top,u=a.width,d=a.height;this._mouse.x=s/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Yn*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(a,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(a,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),s=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(s,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Yn*this._rotateDelta.x/t.clientHeight),this._rotateUp(Yn*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(a,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new dt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function TC(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function wC(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function AC(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(Cv),this.state=Bt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function CC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case fr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=Bt.DOLLY;break;case fr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Bt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Bt.ROTATE}break;case fr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=Bt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=Bt.PAN}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(vh)}function RC(i){switch(this.state){case Bt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case Bt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case Bt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function bC(i){this.enabled===!1||this.enableZoom===!1||this.state!==Bt.NONE||(i.preventDefault(),this.dispatchEvent(vh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(Cv))}function PC(i){this.enabled!==!1&&this._handleKeyDown(i)}function LC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case ls.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=Bt.TOUCH_ROTATE;break;case ls.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=Bt.TOUCH_PAN;break;default:this.state=Bt.NONE}break;case 2:switch(this.touches.TWO){case ls.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=Bt.TOUCH_DOLLY_PAN;break;case ls.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=Bt.TOUCH_DOLLY_ROTATE;break;default:this.state=Bt.NONE}break;default:this.state=Bt.NONE}this.state!==Bt.NONE&&this.dispatchEvent(vh)}function DC(i){switch(this._trackPointer(i),this.state){case Bt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case Bt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case Bt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case Bt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=Bt.NONE}}function NC(i){this.enabled!==!1&&i.preventDefault()}function UC(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function FC(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const p0="../../",Yd={label:"PR #13 (design/r5-clean)",sha:"cae6bb19b8aa26b500186ffc23910f76123f9692".slice(0,7)},m0=i=>i!=null&&i.p14?"fea/":`model/${i==null?void 0:i.id}/fea/`,rc=i=>i.replace(/^N2_/,"").replace(/_/g," "),Kd=3,OC=22,IC=["N2_keeper","N2_armature"],kC={Z:{label:"Straight pull (R3)",parts:{N2_adapter:"Z",N2_receiver:"Z",N2_keeper:"Z"}},Z_distal_lost:{label:"Straight pull, distal roof lost",parts:{N2_adapter:"Z",N2_receiver:"Z_distal_lost",N2_keeper:"Z_distal_lost"}},XZ90:{label:"Side pull 90° (outside R3)",parts:{N2_adapter:"XZ90",N2_receiver:"XZ90"}}};function Rv(i,e){if(i>1)return e.setRGB(.85,.1,.85);const t=[[.19,.07,.23],[.16,.47,.93],[.1,.84,.66],[.64,.99,.24],[.98,.73,.22],[.86,.22,.05]],a=Math.max(0,i)*(t.length-1),s=Math.min(Math.floor(a),t.length-2),l=a-s;return e.setRGB(...t[s].map((u,d)=>u+(t[s+1][d]-u)*l))}const zC=`linear-gradient(90deg, ${[0,.2,.4,.6,.8,1].map(i=>"#"+Rv(i,new Tt).getHexString()).join(",")})`;function HC(i){const e=Ve.useRef(null);if(!e.current){const t=new qy;t.add(new mM(16777215,3359829,2.2));const a=new kg(16777215,1.6);a.position.set(60,-40,90),t.add(a);const s=new kg(16777215,.6);s.position.set(-50,60,-30),t.add(s);const l=new gi(35,1,.1,3e3);l.up.set(0,0,1),e.current={scene:t,cam:l,parts:new Map,fea:new Map,markers:new fo},t.add(e.current.markers)}return Ve.useEffect(()=>{const t=e.current,a=new xC({antialias:!0,preserveDrawingBuffer:!0});a.setPixelRatio(devicePixelRatio),a.setClearColor(1382686),i.current.appendChild(a.domElement);const s=new EC(t.cam,a.domElement);Object.assign(s,{enableDamping:!0,dampingFactor:.12,rotateSpeed:.9,zoomToCursor:!0,screenSpacePanning:!0}),s.mouseButtons={LEFT:fr.ROTATE,MIDDLE:fr.PAN,RIGHT:fr.PAN},t.oc=s,t.r=a;let l=!0;const u=new SM;a.domElement.addEventListener("dblclick",m=>{const p=a.domElement.getBoundingClientRect();u.setFromCamera(new dt((m.clientX-p.left)/p.width*2-1,-(m.clientY-p.top)/p.height*2+1),t.cam);const v=u.intersectObjects([...t.parts.values(),...t.fea.values()].filter(x=>x.visible))[0];if(v){const x=v.point.clone().sub(s.target);s.target.add(x),t.cam.position.add(x)}});const d=()=>{var v;if(!l)return;requestAnimationFrame(d),(v=t.tick)==null||v.call(t),s.update();const m=i.current.clientWidth,p=i.current.clientHeight;(a.domElement.width!==Math.floor(m*a.getPixelRatio())||a.domElement.height!==Math.floor(p*a.getPixelRatio()))&&a.setSize(m,p),t.cam.aspect=m/p,t.cam.updateProjectionMatrix(),a.render(t.scene,t.cam)};return d(),()=>{l=!1,a.dispose(),a.domElement.remove()}},[]),e.current}function g0(i,e,t){const a=new re(...e.min).add(new re(...e.max)).multiplyScalar(.5),s=new re(...e.size).length()*2.1,l={iso:i.isoDir||[.75,-1,.65],front:[0,-1,1e-4],top:[1e-4,-1e-4,1],side:[1,0,1e-4]}[t];i.oc.target.copy(a),i.cam.position.copy(a).add(new re(...l).normalize().multiplyScalar(s)),i.oc.update()}function VC(){var $e;const i=Ve.useRef(),e=HC(i),[t,a]=Ve.useState(null),[s,l]=Ve.useState(null),[u,d]=Ve.useState(new URLSearchParams(location.search).get("mode")||"model"),[m,p]=Ve.useState(Number(new URLSearchParams(location.search).get("explode")||0)),[v,x]=Ve.useState(Number(new URLSearchParams(location.search).get("phase")||0)),[_,M]=Ve.useState(!1),[w,b]=Ve.useState({}),[y,S]=Ve.useState("Z"),[D,z]=Ve.useState(Number(new URLSearchParams(location.search).get("load")||17.8)),[R,L]=Ve.useState(!0),[P,I]=Ve.useState([]),[T,U]=Ve.useState(null),[H,B]=Ve.useState([]),j=($e=P.find(k=>k.id===T))==null?void 0:$e.p14;Ve.useEffect(()=>{fetch("model/designs.json").then(k=>k.json()).then(k=>{var ge;I(k);const J=new URLSearchParams(location.search).get("design");U((ge=k.find(Le=>Le.id===J)||k[k.length-1])==null?void 0:ge.id)}),fetch(`${p0}versions.json`,{cache:"no-store"}).then(k=>k.json()).then(B).catch(()=>{})},[]),Ve.useEffect(()=>{if(!T)return;for(const J of[...e.parts.values(),...e.fea.values()])e.scene.remove(J),J.geometry.dispose();e.parts.clear(),e.fea.clear(),b({}),a(null),l(null),fetch(`model/${T}/manifest.json`).then(J=>J.json()).then(a);const k=P.find(J=>J.id===T);(k!=null&&k.p14||k!=null&&k.fea)&&fetch(`${m0(k)}index.json`).then(J=>J.json()).then(l)},[T]),Ve.useEffect(()=>{if(!t)return;e.design=t.id;const k=new SC,J=t.id;t.parts.forEach(ge=>k.load(`model/${t.id}/${ge.stl}`,Le=>{if(J!==e.design)return;const Ae=j?(Le.computeVertexNormals(),Le):yC(Le,Math.PI/7),st=ge.kind==="purchased"&&/screw|spline/.test(ge.id),ht=new ai(Ae,new Lg({color:ge.color,metalness:st?.6:.1,roughness:st?.35:.6,side:Pi,transparent:(ge.opacity??1)<1,opacity:ge.opacity??1,depthWrite:(ge.opacity??1)>=1}));ht.userData.p=ge,e.parts.set(ge.id,ht),e.scene.add(ht),e.dirty=!0})),e.isoDir=t.iso,g0(e,t.bounds,"iso")},[t]),Ve.useEffect(()=>{if(!s)return;const k=m0(P.find(J=>J.id===T));s.cases.forEach(J=>fetch(`${k}${J.part}__${J.case}.json`).then(ge=>ge.json()).then(ge=>{const Le=new jn;Le.setAttribute("position",new pn(ge.pos,3)),Le.setIndex(ge.idx),Le.computeVertexNormals(),Le.setAttribute("color",new pn(new Float32Array(ge.pos.length),3));const Ae=new ai(Le,new Lg({vertexColors:!0,metalness:0,roughness:.75,side:Pi}));Ae.userData={d:ge,part:J.part},Ae.visible=!1,e.fea.set(`${J.part}__${J.case}`,Ae),e.scene.add(Ae),e.dirty=!0}))},[s]),Ve.useEffect(()=>{if(!_)return;let k=performance.now(),J=v>=2?0:v,ge;const Le=Ae=>{const st=J+(Ae-k)/1600;x(Math.min(st,2)),st<2?ge=requestAnimationFrame(Le):M(!1)};return ge=requestAnimationFrame(Le),()=>cancelAnimationFrame(ge)},[_]);const ie=(s==null?void 0:s.groups)||kC,G=!!s,te=u==="fea"&&s&&ie[y]?ie[y].parts:{},Q=t==null?void 0:t.motion,le=k=>k*k*(3-2*k),q=Q?Q.a_latch+(Q.a_release-Q.a_latch)*le(Math.min(v,1)):0,K=Q?Q.r*(Math.cos(q*Math.PI/180)-Math.cos(Q.a_latch*Math.PI/180)):0,Z=s!=null&&s.cases?Math.max(60,Math.ceil(Math.min(...s.cases.map(k=>k.fail_N))*1.2)):60,N=s?31/s.z_tds_MPa:1,oe=s?Object.entries(te).map(([k,J])=>s.cases.find(ge=>ge.part===k&&ge.case===J)).filter(Boolean):[],Se=oe.reduce((k,J)=>!k||J.fail_N<k.fail_N?J:k,null);e.tick=()=>{var st;if(!t)return;const k=ht=>ht*ht*(3-2*ht),J=v,ge=k(Math.min(J,1)),Le=k(Math.max(0,Math.min(J-1,1))),Ae=(ht,Be)=>{const pt=t.parts.find(Pt=>Pt.id===Be),_t=(pt==null?void 0:pt.explode)||[0,0,0];let ot=_t[0]*m,Rt=_t[1]*m,bt=_t[2]*m;if(Q){if(Q.slide.includes(Be)&&(ot+=K),Q.drop.includes(Be)&&(bt-=Q.drop_mm*Le),Q.rotate.includes(Be)){const Pt=-(q-Q.a_latch)*Math.PI/180,[yt,,zt]=Q.pivot,W=Math.cos(Pt),nn=Math.sin(Pt);ht.rotation.set(0,Pt,0),ot+=yt-(yt*W+zt*nn),bt+=zt-(-yt*nn+zt*W)}else ht.rotation.set(0,0,0);ht.position.set(ot,Rt,bt);return}IC.includes(Be)&&(ot+=Kd*ge),Be==="N2_return_spring"&&(ht.scale.x=1-.35*ge),Be==="N2_adapter"&&(bt+=OC*Le),ht.position.set(ot,Rt,bt)};for(const[ht,Be]of e.parts){Ae(Be,ht);const pt=u==="fea"&&te[ht];Be.visible=!w[ht]&&!pt&&(u==="model"||R);const _t=((st=Be.userData.p)==null?void 0:st.opacity)??1;Be.material.transparent=u==="fea"||_t<1,Be.material.opacity=u==="fea"?.12*_t:_t,Be.material.depthWrite=u!=="fea"&&_t>=1}e.markers.clear();for(const[ht,Be]of e.fea){const pt=te[Be.userData.part]&&ht===`${Be.userData.part}__${te[Be.userData.part]}`&&!w[Be.userData.part];if(Be.visible=!!pt,!pt)continue;Ae(Be,Be.userData.part);const _t=`${D}|${N}`;if(Be.userData.ck!==_t){const Pt=Be.geometry.attributes.color,yt=new Tt,zt=Be.userData.d.fi;for(let W=0;W<zt.length;W++)Rv(zt[W]*D*N,yt),Pt.setXYZ(W,yt.r,yt.g,yt.b);Pt.needsUpdate=!0,Be.userData.ck=_t}const ot=Be.userData.d,Rt=Se&&ot.part===Se.part,bt=new ai(new hh(Rt?.9:.6,20,14),new dh({color:Rt?16777215:11252671,depthTest:!1,transparent:!0,opacity:.95}));if(bt.position.set(...ot.peak_mm).add(Be.position),bt.renderOrder=10,e.markers.add(bt),Rt){const Pt=new ai(new ph(1.6,.18,8,32),bt.material);Pt.position.copy(bt.position),Pt.quaternion.copy(e.cam.quaternion),Pt.renderOrder=10,e.markers.add(Pt)}}};const Ge=(t==null?void 0:t.parts.map(k=>k.id))||[],ze=s&&s.cases.filter(ge=>ge.in_scope&&ge.case==="Z").reduce((ge,Le)=>Le.fail_N<ge.fail_N?Le:ge);return me.jsxs("div",{className:"app",children:[me.jsxs("div",{className:"panel",children:[me.jsxs("div",{className:"status",children:["Version: ",me.jsx(W0,{minimal:!0,intent:"warning",children:Yd.label})," ",Yd.sha&&me.jsx("code",{children:Yd.sha}),H.length>1&&me.jsx(ac,{fill:!0,minimal:!0,value:"",onChange:k=>{location.href=p0+k.target.value},options:[{value:"",label:"Switch version…"},...H.map(k=>({value:k.path,label:k.label+(k.title?` — ${k.title}`:"")}))]})]}),P.length>1&&me.jsx(ac,{fill:!0,value:T||"",onChange:k=>U(k.target.value),options:P.map(k=>({value:k.id,label:k.label}))}),me.jsxs("div",{className:"status",children:[me.jsxs("b",{children:["N2 hardpoint · ",j?(s==null?void 0:s.revision)||"":(t==null?void 0:t.revision)||""]}),me.jsx("br",{}),!j&&t&&me.jsxs(me.Fragment,{children:[t.parts.length," parts from CI-built CAD (cad/viewer.py)",Q?", release driven by the servo crank kinematics.":"."]}),ze&&me.jsxs(me.Fragment,{children:["Straight-pull stress screen ",me.jsxs("b",{children:[ze.fail_N.toFixed(2)," N"]})," (",rc(ze.part)," governs). Dividing by SF 2 gives ",ze.rating_sf2_N.toFixed(2)," N for comparison only.",me.jsx("br",{}),me.jsx("b",{children:"No working-load rating assigned."})," No printed or loaded-release tests recorded.",me.jsx("br",{}),"Design load: ",s.design_N," N. Sacrificial bench target: ",s.required_fail_N," N."]})]}),me.jsxs(Zd,{fill:!0,children:[me.jsx(Vi,{intent:u==="model"?"primary":"none",icon:"cube",text:"Model",onClick:()=>d("model")}),me.jsx(Vi,{intent:u==="fea"?"primary":"none",icon:"heat-grid",text:"FEA",disabled:!G,onClick:()=>d("fea")})]}),me.jsx("h6",{children:"Explode"}),me.jsx(po,{min:0,max:1,stepSize:.01,labelRenderer:!1,value:m,onChange:p}),(j||Q)&&me.jsxs(me.Fragment,{children:[me.jsx("h6",{children:"Release sequence"}),me.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[me.jsx(Vi,{small:!0,icon:_?"pause":"play",onClick:()=>M(!_)}),me.jsx(Vi,{small:!0,icon:"reset",onClick:()=>{M(!1),x(0)}}),me.jsx("div",{style:{flex:1,paddingTop:4},children:me.jsx(po,{min:0,max:2,stepSize:.01,labelRenderer:!1,value:v,onChange:k=>{M(!1),x(k)}})})]}),me.jsxs("div",{className:"status",children:[Q?(v<.02?`Latched: servo ${Q.a_latch}°, keeper through the adapter tab.`:v<=1?`Servo ${q.toFixed(0)}° → ${Q.a_release}°: pin drives the keeper +X ${K.toFixed(1)} / ${(Q.r*(Math.cos(Q.a_release*Math.PI/180)-Math.cos(Q.a_latch*Math.PI/180))).toFixed(1)} mm.`:"Keeper clear of the tab; adapter and payload drop by gravity.")+" Kinematics from params.py, not a tested release.":v<.02?"Latched: keeper crosses the adapter lug.":v<=1?`Solenoid pulls keeper +X ${(Kd*v*v*(3-2*v)).toFixed(1)} / ${Kd} mm.`:"Keeper open; illustrated adapter travel is +Z. Actual clearance requires an external departure force."," ",!Q&&"This is a prescribed motion illustration, not a tested release."]})]}),u==="fea"&&s&&me.jsxs(me.Fragment,{children:[me.jsx("h6",{children:"Load case"}),me.jsx(ac,{fill:!0,value:y,onChange:k=>S(k.target.value),options:Object.entries(ie).map(([k,J])=>({value:k,label:J.label}))}),me.jsxs("h6",{children:["Applied load: ",D.toFixed(1)," N"]}),me.jsx(po,{min:1,max:Z,stepSize:.1,labelRenderer:!1,value:D,onChange:z}),me.jsxs("div",{className:"row",style:{display:"flex",gap:4,flexWrap:"wrap"},children:[me.jsx(Vi,{small:!0,text:`Design ${s.design_N} N`,onClick:()=>z(s.design_N)}),me.jsx(Vi,{small:!0,text:`Bench target ${s.required_fail_N} N`,onClick:()=>z(s.required_fail_N)})]}),me.jsxs("table",{className:"fea",children:[me.jsx("thead",{children:me.jsxs("tr",{children:[me.jsx("th",{children:"Part"}),me.jsx("th",{children:"Screen"}),me.jsx("th",{children:"Screen/load"})]})}),me.jsx("tbody",{children:oe.map(k=>me.jsxs("tr",{children:[me.jsxs("td",{children:[Se===k&&"● ",rc(k.part)]}),me.jsxs("td",{className:"n",children:[k.fail_N," N"]}),me.jsxs("td",{className:"n",children:[(k.fail_N/D).toFixed(2),"×"]})]},k.part))})]}),me.jsx(k0,{checked:R,label:"Ghost other parts",onChange:()=>L(!R)}),me.jsxs("div",{className:"status",children:[s.material.toUpperCase(),", ",s.note]})]}),me.jsx("h6",{children:"Parts"}),me.jsx("div",{className:"parts",children:Ge.map(k=>me.jsx(z0,{checked:!w[k],onChange:()=>b(J=>({...J,[k]:!J[k]})),labelElement:me.jsxs("span",{children:[me.jsx("span",{className:"swatch",style:{background:t.parts.find(J=>J.id===k).color}}),rc(k)]})},k))}),me.jsxs("div",{style:{display:"flex",gap:4},children:[me.jsx(Vi,{small:!0,text:"All",onClick:()=>b({})}),me.jsx(Vi,{small:!0,text:"Printed only",onClick:()=>b(Object.fromEntries(t.parts.filter(k=>!["printed","payload","moving"].includes(k.kind)).map(k=>[k.id,!0])))})]})]}),me.jsxs("div",{className:"stage",ref:i,children:[t&&me.jsx(Zd,{className:"views",minimal:!0,children:["iso","front","side","top"].map(k=>me.jsx(Vi,{small:!0,text:k,onClick:()=>g0(e,t.bounds,k)},k))}),u==="fea"&&s&&me.jsxs("div",{className:"legend",children:["Screen utilisation at ",D.toFixed(1)," N (1.0 = assumed stress limit)",me.jsx("div",{className:"bar",style:{background:zC}}),me.jsxs("div",{className:"ticks",children:[me.jsx("span",{children:"0"}),me.jsx("span",{children:"0.5"}),me.jsx("span",{children:"1.0"}),me.jsx("span",{style:{color:"#d91ad9"},children:">1"})]}),Se&&me.jsxs("div",{style:{marginTop:4},children:["○ governing peak: ",rc(Se.part)," at (",Se.peak_mm.join(", "),") mm"]})]}),me.jsx("div",{className:"hint",children:"Drag: orbit · scroll: zoom to cursor · right-drag: pan · double-click: orbit around point"})]})]})}document.body.classList.add(yx);_x.createRoot(document.getElementById("root")).render(me.jsx(VC,{}));export{jt as I,ig as _,SS as p};
