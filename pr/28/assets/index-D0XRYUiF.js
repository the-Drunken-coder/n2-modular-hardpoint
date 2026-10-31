var Ux=Object.defineProperty;var Fx=(i,e,t)=>e in i?Ux(i,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):i[e]=t;var xt=(i,e,t)=>Fx(i,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const l of s)if(l.type==="childList")for(const u of l.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&a(u)}).observe(document,{childList:!0,subtree:!0});function t(s){const l={};return s.integrity&&(l.integrity=s.integrity),s.referrerPolicy&&(l.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?l.credentials="include":s.crossOrigin==="anonymous"?l.credentials="omit":l.credentials="same-origin",l}function a(s){if(s.ep)return;s.ep=!0;const l=t(s);fetch(s.href,l)}})();function Ox(i){return i&&i.__esModule&&Object.prototype.hasOwnProperty.call(i,"default")?i.default:i}var Cd={exports:{}},xo={},Rd={exports:{}},bt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var lg;function Ix(){if(lg)return bt;lg=1;var i=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),a=Symbol.for("react.strict_mode"),s=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),u=Symbol.for("react.context"),d=Symbol.for("react.forward_ref"),m=Symbol.for("react.suspense"),p=Symbol.for("react.memo"),v=Symbol.for("react.lazy"),x=Symbol.iterator;function _(D){return D===null||typeof D!="object"?null:(D=x&&D[x]||D["@@iterator"],typeof D=="function"?D:null)}var M={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},w=Object.assign,b={};function y(D,se,Me){this.props=D,this.context=se,this.refs=b,this.updater=Me||M}y.prototype.isReactComponent={},y.prototype.setState=function(D,se){if(typeof D!="object"&&typeof D!="function"&&D!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,D,se,"setState")},y.prototype.forceUpdate=function(D){this.updater.enqueueForceUpdate(this,D,"forceUpdate")};function S(){}S.prototype=y.prototype;function U(D,se,Me){this.props=D,this.context=se,this.refs=b,this.updater=Me||M}var V=U.prototype=new S;V.constructor=U,w(V,y.prototype),V.isPureReactComponent=!0;var R=Array.isArray,L=Object.prototype.hasOwnProperty,P={current:null},I={key:!0,ref:!0,__self:!0,__source:!0};function T(D,se,Me){var Be,Xe={},Ye=null,le=null;if(se!=null)for(Be in se.ref!==void 0&&(le=se.ref),se.key!==void 0&&(Ye=""+se.key),se)L.call(se,Be)&&!I.hasOwnProperty(Be)&&(Xe[Be]=se[Be]);var pe=arguments.length-2;if(pe===1)Xe.children=Me;else if(1<pe){for(var Ce=Array(pe),rt=0;rt<pe;rt++)Ce[rt]=arguments[rt+2];Xe.children=Ce}if(D&&D.defaultProps)for(Be in pe=D.defaultProps,pe)Xe[Be]===void 0&&(Xe[Be]=pe[Be]);return{$$typeof:i,type:D,key:Ye,ref:le,props:Xe,_owner:P.current}}function F(D,se){return{$$typeof:i,type:D.type,key:se,ref:D.ref,props:D.props,_owner:D._owner}}function z(D){return typeof D=="object"&&D!==null&&D.$$typeof===i}function B(D){var se={"=":"=0",":":"=2"};return"$"+D.replace(/[=:]/g,function(Me){return se[Me]})}var K=/\/+/g;function ie(D,se){return typeof D=="object"&&D!==null&&D.key!=null?B(""+D.key):se.toString(36)}function H(D,se,Me,Be,Xe){var Ye=typeof D;(Ye==="undefined"||Ye==="boolean")&&(D=null);var le=!1;if(D===null)le=!0;else switch(Ye){case"string":case"number":le=!0;break;case"object":switch(D.$$typeof){case i:case e:le=!0}}if(le)return le=D,Xe=Xe(le),D=Be===""?"."+ie(le,0):Be,R(Xe)?(Me="",D!=null&&(Me=D.replace(K,"$&/")+"/"),H(Xe,se,Me,"",function(rt){return rt})):Xe!=null&&(z(Xe)&&(Xe=F(Xe,Me+(!Xe.key||le&&le.key===Xe.key?"":(""+Xe.key).replace(K,"$&/")+"/")+D)),se.push(Xe)),1;if(le=0,Be=Be===""?".":Be+":",R(D))for(var pe=0;pe<D.length;pe++){Ye=D[pe];var Ce=Be+ie(Ye,pe);le+=H(Ye,se,Me,Ce,Xe)}else if(Ce=_(D),typeof Ce=="function")for(D=Ce.call(D),pe=0;!(Ye=D.next()).done;)Ye=Ye.value,Ce=Be+ie(Ye,pe++),le+=H(Ye,se,Me,Ce,Xe);else if(Ye==="object")throw se=String(D),Error("Objects are not valid as a React child (found: "+(se==="[object Object]"?"object with keys {"+Object.keys(D).join(", ")+"}":se)+"). If you meant to render a collection of children, use an array instead.");return le}function te(D,se,Me){if(D==null)return D;var Be=[],Xe=0;return H(D,Be,"","",function(Ye){return se.call(Me,Ye,Xe++)}),Be}function oe(D){if(D._status===-1){var se=D._result;se=se(),se.then(function(Me){(D._status===0||D._status===-1)&&(D._status=1,D._result=Me)},function(Me){(D._status===0||D._status===-1)&&(D._status=2,D._result=Me)}),D._status===-1&&(D._status=0,D._result=se)}if(D._status===1)return D._result.default;throw D._result}var ce={current:null},q={transition:null},W={ReactCurrentDispatcher:ce,ReactCurrentBatchConfig:q,ReactCurrentOwner:P};function Z(){throw Error("act(...) is not supported in production builds of React.")}return bt.Children={map:te,forEach:function(D,se,Me){te(D,function(){se.apply(this,arguments)},Me)},count:function(D){var se=0;return te(D,function(){se++}),se},toArray:function(D){return te(D,function(se){return se})||[]},only:function(D){if(!z(D))throw Error("React.Children.only expected to receive a single React element child.");return D}},bt.Component=y,bt.Fragment=t,bt.Profiler=s,bt.PureComponent=U,bt.StrictMode=a,bt.Suspense=m,bt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W,bt.act=Z,bt.cloneElement=function(D,se,Me){if(D==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+D+".");var Be=w({},D.props),Xe=D.key,Ye=D.ref,le=D._owner;if(se!=null){if(se.ref!==void 0&&(Ye=se.ref,le=P.current),se.key!==void 0&&(Xe=""+se.key),D.type&&D.type.defaultProps)var pe=D.type.defaultProps;for(Ce in se)L.call(se,Ce)&&!I.hasOwnProperty(Ce)&&(Be[Ce]=se[Ce]===void 0&&pe!==void 0?pe[Ce]:se[Ce])}var Ce=arguments.length-2;if(Ce===1)Be.children=Me;else if(1<Ce){pe=Array(Ce);for(var rt=0;rt<Ce;rt++)pe[rt]=arguments[rt+2];Be.children=pe}return{$$typeof:i,type:D.type,key:Xe,ref:Ye,props:Be,_owner:le}},bt.createContext=function(D){return D={$$typeof:u,_currentValue:D,_currentValue2:D,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},D.Provider={$$typeof:l,_context:D},D.Consumer=D},bt.createElement=T,bt.createFactory=function(D){var se=T.bind(null,D);return se.type=D,se},bt.createRef=function(){return{current:null}},bt.forwardRef=function(D){return{$$typeof:d,render:D}},bt.isValidElement=z,bt.lazy=function(D){return{$$typeof:v,_payload:{_status:-1,_result:D},_init:oe}},bt.memo=function(D,se){return{$$typeof:p,type:D,compare:se===void 0?null:se}},bt.startTransition=function(D){var se=q.transition;q.transition={};try{D()}finally{q.transition=se}},bt.unstable_act=Z,bt.useCallback=function(D,se){return ce.current.useCallback(D,se)},bt.useContext=function(D){return ce.current.useContext(D)},bt.useDebugValue=function(){},bt.useDeferredValue=function(D){return ce.current.useDeferredValue(D)},bt.useEffect=function(D,se){return ce.current.useEffect(D,se)},bt.useId=function(){return ce.current.useId()},bt.useImperativeHandle=function(D,se,Me){return ce.current.useImperativeHandle(D,se,Me)},bt.useInsertionEffect=function(D,se){return ce.current.useInsertionEffect(D,se)},bt.useLayoutEffect=function(D,se){return ce.current.useLayoutEffect(D,se)},bt.useMemo=function(D,se){return ce.current.useMemo(D,se)},bt.useReducer=function(D,se,Me){return ce.current.useReducer(D,se,Me)},bt.useRef=function(D){return ce.current.useRef(D)},bt.useState=function(D){return ce.current.useState(D)},bt.useSyncExternalStore=function(D,se,Me){return ce.current.useSyncExternalStore(D,se,Me)},bt.useTransition=function(){return ce.current.useTransition()},bt.version="18.3.1",bt}var cg;function dh(){return cg||(cg=1,Rd.exports=Ix()),Rd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ug;function kx(){if(ug)return xo;ug=1;var i=dh(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function u(d,m,p){var v,x={},_=null,M=null;p!==void 0&&(_=""+p),m.key!==void 0&&(_=""+m.key),m.ref!==void 0&&(M=m.ref);for(v in m)a.call(m,v)&&!l.hasOwnProperty(v)&&(x[v]=m[v]);if(d&&d.defaultProps)for(v in m=d.defaultProps,m)x[v]===void 0&&(x[v]=m[v]);return{$$typeof:e,type:d,key:_,ref:M,props:x,_owner:s.current}}return xo.Fragment=t,xo.jsx=u,xo.jsxs=u,xo}var dg;function zx(){return dg||(dg=1,Cd.exports=kx()),Cd.exports}var Q=zx(),ql={},bd={exports:{}},ci={},Pd={exports:{}},Ld={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var fg;function Hx(){return fg||(fg=1,(function(i){function e(q,W){var Z=q.length;q.push(W);e:for(;0<Z;){var D=Z-1>>>1,se=q[D];if(0<s(se,W))q[D]=W,q[Z]=se,Z=D;else break e}}function t(q){return q.length===0?null:q[0]}function a(q){if(q.length===0)return null;var W=q[0],Z=q.pop();if(Z!==W){q[0]=Z;e:for(var D=0,se=q.length,Me=se>>>1;D<Me;){var Be=2*(D+1)-1,Xe=q[Be],Ye=Be+1,le=q[Ye];if(0>s(Xe,Z))Ye<se&&0>s(le,Xe)?(q[D]=le,q[Ye]=Z,D=Ye):(q[D]=Xe,q[Be]=Z,D=Be);else if(Ye<se&&0>s(le,Z))q[D]=le,q[Ye]=Z,D=Ye;else break e}}return W}function s(q,W){var Z=q.sortIndex-W.sortIndex;return Z!==0?Z:q.id-W.id}if(typeof performance=="object"&&typeof performance.now=="function"){var l=performance;i.unstable_now=function(){return l.now()}}else{var u=Date,d=u.now();i.unstable_now=function(){return u.now()-d}}var m=[],p=[],v=1,x=null,_=3,M=!1,w=!1,b=!1,y=typeof setTimeout=="function"?setTimeout:null,S=typeof clearTimeout=="function"?clearTimeout:null,U=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function V(q){for(var W=t(p);W!==null;){if(W.callback===null)a(p);else if(W.startTime<=q)a(p),W.sortIndex=W.expirationTime,e(m,W);else break;W=t(p)}}function R(q){if(b=!1,V(q),!w)if(t(m)!==null)w=!0,oe(L);else{var W=t(p);W!==null&&ce(R,W.startTime-q)}}function L(q,W){w=!1,b&&(b=!1,S(T),T=-1),M=!0;var Z=_;try{for(V(W),x=t(m);x!==null&&(!(x.expirationTime>W)||q&&!B());){var D=x.callback;if(typeof D=="function"){x.callback=null,_=x.priorityLevel;var se=D(x.expirationTime<=W);W=i.unstable_now(),typeof se=="function"?x.callback=se:x===t(m)&&a(m),V(W)}else a(m);x=t(m)}if(x!==null)var Me=!0;else{var Be=t(p);Be!==null&&ce(R,Be.startTime-W),Me=!1}return Me}finally{x=null,_=Z,M=!1}}var P=!1,I=null,T=-1,F=5,z=-1;function B(){return!(i.unstable_now()-z<F)}function K(){if(I!==null){var q=i.unstable_now();z=q;var W=!0;try{W=I(!0,q)}finally{W?ie():(P=!1,I=null)}}else P=!1}var ie;if(typeof U=="function")ie=function(){U(K)};else if(typeof MessageChannel<"u"){var H=new MessageChannel,te=H.port2;H.port1.onmessage=K,ie=function(){te.postMessage(null)}}else ie=function(){y(K,0)};function oe(q){I=q,P||(P=!0,ie())}function ce(q,W){T=y(function(){q(i.unstable_now())},W)}i.unstable_IdlePriority=5,i.unstable_ImmediatePriority=1,i.unstable_LowPriority=4,i.unstable_NormalPriority=3,i.unstable_Profiling=null,i.unstable_UserBlockingPriority=2,i.unstable_cancelCallback=function(q){q.callback=null},i.unstable_continueExecution=function(){w||M||(w=!0,oe(L))},i.unstable_forceFrameRate=function(q){0>q||125<q?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):F=0<q?Math.floor(1e3/q):5},i.unstable_getCurrentPriorityLevel=function(){return _},i.unstable_getFirstCallbackNode=function(){return t(m)},i.unstable_next=function(q){switch(_){case 1:case 2:case 3:var W=3;break;default:W=_}var Z=_;_=W;try{return q()}finally{_=Z}},i.unstable_pauseExecution=function(){},i.unstable_requestPaint=function(){},i.unstable_runWithPriority=function(q,W){switch(q){case 1:case 2:case 3:case 4:case 5:break;default:q=3}var Z=_;_=q;try{return W()}finally{_=Z}},i.unstable_scheduleCallback=function(q,W,Z){var D=i.unstable_now();switch(typeof Z=="object"&&Z!==null?(Z=Z.delay,Z=typeof Z=="number"&&0<Z?D+Z:D):Z=D,q){case 1:var se=-1;break;case 2:se=250;break;case 5:se=1073741823;break;case 4:se=1e4;break;default:se=5e3}return se=Z+se,q={id:v++,callback:W,priorityLevel:q,startTime:Z,expirationTime:se,sortIndex:-1},Z>D?(q.sortIndex=Z,e(p,q),t(m)===null&&q===t(p)&&(b?(S(T),T=-1):b=!0,ce(R,Z-D))):(q.sortIndex=se,e(m,q),w||M||(w=!0,oe(L))),q},i.unstable_shouldYield=B,i.unstable_wrapCallback=function(q){var W=_;return function(){var Z=_;_=W;try{return q.apply(this,arguments)}finally{_=Z}}}})(Ld)),Ld}var hg;function Vx(){return hg||(hg=1,Pd.exports=Hx()),Pd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var pg;function Gx(){if(pg)return ci;pg=1;var i=dh(),e=Vx();function t(n){for(var r="https://reactjs.org/docs/error-decoder.html?invariant="+n,o=1;o<arguments.length;o++)r+="&args[]="+encodeURIComponent(arguments[o]);return"Minified React error #"+n+"; visit "+r+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var a=new Set,s={};function l(n,r){u(n,r),u(n+"Capture",r)}function u(n,r){for(s[n]=r,n=0;n<r.length;n++)a.add(r[n])}var d=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),m=Object.prototype.hasOwnProperty,p=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,v={},x={};function _(n){return m.call(x,n)?!0:m.call(v,n)?!1:p.test(n)?x[n]=!0:(v[n]=!0,!1)}function M(n,r,o,c){if(o!==null&&o.type===0)return!1;switch(typeof r){case"function":case"symbol":return!0;case"boolean":return c?!1:o!==null?!o.acceptsBooleans:(n=n.toLowerCase().slice(0,5),n!=="data-"&&n!=="aria-");default:return!1}}function w(n,r,o,c){if(r===null||typeof r>"u"||M(n,r,o,c))return!0;if(c)return!1;if(o!==null)switch(o.type){case 3:return!r;case 4:return r===!1;case 5:return isNaN(r);case 6:return isNaN(r)||1>r}return!1}function b(n,r,o,c,f,g,A){this.acceptsBooleans=r===2||r===3||r===4,this.attributeName=c,this.attributeNamespace=f,this.mustUseProperty=o,this.propertyName=n,this.type=r,this.sanitizeURL=g,this.removeEmptyString=A}var y={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(n){y[n]=new b(n,0,!1,n,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(n){var r=n[0];y[r]=new b(r,1,!1,n[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(n){y[n]=new b(n,2,!1,n.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(n){y[n]=new b(n,2,!1,n,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(n){y[n]=new b(n,3,!1,n.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(n){y[n]=new b(n,3,!0,n,null,!1,!1)}),["capture","download"].forEach(function(n){y[n]=new b(n,4,!1,n,null,!1,!1)}),["cols","rows","size","span"].forEach(function(n){y[n]=new b(n,6,!1,n,null,!1,!1)}),["rowSpan","start"].forEach(function(n){y[n]=new b(n,5,!1,n.toLowerCase(),null,!1,!1)});var S=/[\-:]([a-z])/g;function U(n){return n[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(n){var r=n.replace(S,U);y[r]=new b(r,1,!1,n,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(n){var r=n.replace(S,U);y[r]=new b(r,1,!1,n,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(n){var r=n.replace(S,U);y[r]=new b(r,1,!1,n,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!1,!1)}),y.xlinkHref=new b("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(n){y[n]=new b(n,1,!1,n.toLowerCase(),null,!0,!0)});function V(n,r,o,c){var f=y.hasOwnProperty(r)?y[r]:null;(f!==null?f.type!==0:c||!(2<r.length)||r[0]!=="o"&&r[0]!=="O"||r[1]!=="n"&&r[1]!=="N")&&(w(r,o,f,c)&&(o=null),c||f===null?_(r)&&(o===null?n.removeAttribute(r):n.setAttribute(r,""+o)):f.mustUseProperty?n[f.propertyName]=o===null?f.type===3?!1:"":o:(r=f.attributeName,c=f.attributeNamespace,o===null?n.removeAttribute(r):(f=f.type,o=f===3||f===4&&o===!0?"":""+o,c?n.setAttributeNS(c,r,o):n.setAttribute(r,o))))}var R=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,L=Symbol.for("react.element"),P=Symbol.for("react.portal"),I=Symbol.for("react.fragment"),T=Symbol.for("react.strict_mode"),F=Symbol.for("react.profiler"),z=Symbol.for("react.provider"),B=Symbol.for("react.context"),K=Symbol.for("react.forward_ref"),ie=Symbol.for("react.suspense"),H=Symbol.for("react.suspense_list"),te=Symbol.for("react.memo"),oe=Symbol.for("react.lazy"),ce=Symbol.for("react.offscreen"),q=Symbol.iterator;function W(n){return n===null||typeof n!="object"?null:(n=q&&n[q]||n["@@iterator"],typeof n=="function"?n:null)}var Z=Object.assign,D;function se(n){if(D===void 0)try{throw Error()}catch(o){var r=o.stack.trim().match(/\n( *(at )?)/);D=r&&r[1]||""}return`
`+D+n}var Me=!1;function Be(n,r){if(!n||Me)return"";Me=!0;var o=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(r)if(r=function(){throw Error()},Object.defineProperty(r.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(r,[])}catch(he){var c=he}Reflect.construct(n,[],r)}else{try{r.call()}catch(he){c=he}n.call(r.prototype)}else{try{throw Error()}catch(he){c=he}n()}}catch(he){if(he&&c&&typeof he.stack=="string"){for(var f=he.stack.split(`
`),g=c.stack.split(`
`),A=f.length-1,O=g.length-1;1<=A&&0<=O&&f[A]!==g[O];)O--;for(;1<=A&&0<=O;A--,O--)if(f[A]!==g[O]){if(A!==1||O!==1)do if(A--,O--,0>O||f[A]!==g[O]){var G=`
`+f[A].replace(" at new "," at ");return n.displayName&&G.includes("<anonymous>")&&(G=G.replace("<anonymous>",n.displayName)),G}while(1<=A&&0<=O);break}}}finally{Me=!1,Error.prepareStackTrace=o}return(n=n?n.displayName||n.name:"")?se(n):""}function Xe(n){switch(n.tag){case 5:return se(n.type);case 16:return se("Lazy");case 13:return se("Suspense");case 19:return se("SuspenseList");case 0:case 2:case 15:return n=Be(n.type,!1),n;case 11:return n=Be(n.type.render,!1),n;case 1:return n=Be(n.type,!0),n;default:return""}}function Ye(n){if(n==null)return null;if(typeof n=="function")return n.displayName||n.name||null;if(typeof n=="string")return n;switch(n){case I:return"Fragment";case P:return"Portal";case F:return"Profiler";case T:return"StrictMode";case ie:return"Suspense";case H:return"SuspenseList"}if(typeof n=="object")switch(n.$$typeof){case B:return(n.displayName||"Context")+".Consumer";case z:return(n._context.displayName||"Context")+".Provider";case K:var r=n.render;return n=n.displayName,n||(n=r.displayName||r.name||"",n=n!==""?"ForwardRef("+n+")":"ForwardRef"),n;case te:return r=n.displayName||null,r!==null?r:Ye(n.type)||"Memo";case oe:r=n._payload,n=n._init;try{return Ye(n(r))}catch{}}return null}function le(n){var r=n.type;switch(n.tag){case 24:return"Cache";case 9:return(r.displayName||"Context")+".Consumer";case 10:return(r._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return n=r.render,n=n.displayName||n.name||"",r.displayName||(n!==""?"ForwardRef("+n+")":"ForwardRef");case 7:return"Fragment";case 5:return r;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return Ye(r);case 8:return r===T?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof r=="function")return r.displayName||r.name||null;if(typeof r=="string")return r}return null}function pe(n){switch(typeof n){case"boolean":case"number":case"string":case"undefined":return n;case"object":return n;default:return""}}function Ce(n){var r=n.type;return(n=n.nodeName)&&n.toLowerCase()==="input"&&(r==="checkbox"||r==="radio")}function rt(n){var r=Ce(n)?"checked":"value",o=Object.getOwnPropertyDescriptor(n.constructor.prototype,r),c=""+n[r];if(!n.hasOwnProperty(r)&&typeof o<"u"&&typeof o.get=="function"&&typeof o.set=="function"){var f=o.get,g=o.set;return Object.defineProperty(n,r,{configurable:!0,get:function(){return f.call(this)},set:function(A){c=""+A,g.call(this,A)}}),Object.defineProperty(n,r,{enumerable:o.enumerable}),{getValue:function(){return c},setValue:function(A){c=""+A},stopTracking:function(){n._valueTracker=null,delete n[r]}}}}function He(n){n._valueTracker||(n._valueTracker=rt(n))}function yt(n){if(!n)return!1;var r=n._valueTracker;if(!r)return!0;var o=r.getValue(),c="";return n&&(c=Ce(n)?n.checked?"true":"false":n.value),n=c,n!==o?(r.setValue(n),!0):!1}function tn(n){if(n=n||(typeof document<"u"?document:void 0),typeof n>"u")return null;try{return n.activeElement||n.body}catch{return n.body}}function _t(n,r){var o=r.checked;return Z({},r,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:o??n._wrapperState.initialChecked})}function ct(n,r){var o=r.defaultValue==null?"":r.defaultValue,c=r.checked!=null?r.checked:r.defaultChecked;o=pe(r.value!=null?r.value:o),n._wrapperState={initialChecked:c,initialValue:o,controlled:r.type==="checkbox"||r.type==="radio"?r.checked!=null:r.value!=null}}function Vt(n,r){r=r.checked,r!=null&&V(n,"checked",r,!1)}function Mt(n,r){Vt(n,r);var o=pe(r.value),c=r.type;if(o!=null)c==="number"?(o===0&&n.value===""||n.value!=o)&&(n.value=""+o):n.value!==""+o&&(n.value=""+o);else if(c==="submit"||c==="reset"){n.removeAttribute("value");return}r.hasOwnProperty("value")?Dt(n,r.type,o):r.hasOwnProperty("defaultValue")&&Dt(n,r.type,pe(r.defaultValue)),r.checked==null&&r.defaultChecked!=null&&(n.defaultChecked=!!r.defaultChecked)}function Xt(n,r,o){if(r.hasOwnProperty("value")||r.hasOwnProperty("defaultValue")){var c=r.type;if(!(c!=="submit"&&c!=="reset"||r.value!==void 0&&r.value!==null))return;r=""+n._wrapperState.initialValue,o||r===n.value||(n.value=r),n.defaultValue=r}o=n.name,o!==""&&(n.name=""),n.defaultChecked=!!n._wrapperState.initialChecked,o!==""&&(n.name=o)}function Dt(n,r,o){(r!=="number"||tn(n.ownerDocument)!==n)&&(o==null?n.defaultValue=""+n._wrapperState.initialValue:n.defaultValue!==""+o&&(n.defaultValue=""+o))}var dn=Array.isArray;function Nt(n,r,o,c){if(n=n.options,r){r={};for(var f=0;f<o.length;f++)r["$"+o[f]]=!0;for(o=0;o<n.length;o++)f=r.hasOwnProperty("$"+n[o].value),n[o].selected!==f&&(n[o].selected=f),f&&c&&(n[o].defaultSelected=!0)}else{for(o=""+pe(o),r=null,f=0;f<n.length;f++){if(n[f].value===o){n[f].selected=!0,c&&(n[f].defaultSelected=!0);return}r!==null||n[f].disabled||(r=n[f])}r!==null&&(r.selected=!0)}}function Zt(n,r){if(r.dangerouslySetInnerHTML!=null)throw Error(t(91));return Z({},r,{value:void 0,defaultValue:void 0,children:""+n._wrapperState.initialValue})}function Y(n,r){var o=r.value;if(o==null){if(o=r.children,r=r.defaultValue,o!=null){if(r!=null)throw Error(t(92));if(dn(o)){if(1<o.length)throw Error(t(93));o=o[0]}r=o}r==null&&(r=""),o=r}n._wrapperState={initialValue:pe(o)}}function _n(n,r){var o=pe(r.value),c=pe(r.defaultValue);o!=null&&(o=""+o,o!==n.value&&(n.value=o),r.defaultValue==null&&n.defaultValue!==o&&(n.defaultValue=o)),c!=null&&(n.defaultValue=""+c)}function Rt(n){var r=n.textContent;r===n._wrapperState.initialValue&&r!==""&&r!==null&&(n.value=r)}function N(n){switch(n){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function E(n,r){return n==null||n==="http://www.w3.org/1999/xhtml"?N(r):n==="http://www.w3.org/2000/svg"&&r==="foreignObject"?"http://www.w3.org/1999/xhtml":n}var ee,ue=(function(n){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(r,o,c,f){MSApp.execUnsafeLocalFunction(function(){return n(r,o,c,f)})}:n})(function(n,r){if(n.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in n)n.innerHTML=r;else{for(ee=ee||document.createElement("div"),ee.innerHTML="<svg>"+r.valueOf().toString()+"</svg>",r=ee.firstChild;n.firstChild;)n.removeChild(n.firstChild);for(;r.firstChild;)n.appendChild(r.firstChild)}});function ge(n,r){if(r){var o=n.firstChild;if(o&&o===n.lastChild&&o.nodeType===3){o.nodeValue=r;return}}n.textContent=r}var we={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},De=["Webkit","ms","Moz","O"];Object.keys(we).forEach(function(n){De.forEach(function(r){r=r+n.charAt(0).toUpperCase()+n.substring(1),we[r]=we[n]})});function ve(n,r,o){return r==null||typeof r=="boolean"||r===""?"":o||typeof r!="number"||r===0||we.hasOwnProperty(n)&&we[n]?(""+r).trim():r+"px"}function xe(n,r){n=n.style;for(var o in r)if(r.hasOwnProperty(o)){var c=o.indexOf("--")===0,f=ve(o,r[o],c);o==="float"&&(o="cssFloat"),c?n.setProperty(o,f):n[o]=f}}var Re=Z({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function Qe(n,r){if(r){if(Re[n]&&(r.children!=null||r.dangerouslySetInnerHTML!=null))throw Error(t(137,n));if(r.dangerouslySetInnerHTML!=null){if(r.children!=null)throw Error(t(60));if(typeof r.dangerouslySetInnerHTML!="object"||!("__html"in r.dangerouslySetInnerHTML))throw Error(t(61))}if(r.style!=null&&typeof r.style!="object")throw Error(t(62))}}function Oe(n,r){if(n.indexOf("-")===-1)return typeof r.is=="string";switch(n){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Le=null;function Ke(n){return n=n.target||n.srcElement||window,n.correspondingUseElement&&(n=n.correspondingUseElement),n.nodeType===3?n.parentNode:n}var st=null,ut=null,X=null;function Ne(n){if(n=io(n)){if(typeof st!="function")throw Error(t(280));var r=n.stateNode;r&&(r=cl(r),st(n.stateNode,n.type,r))}}function _e(n){ut?X?X.push(n):X=[n]:ut=n}function Ue(){if(ut){var n=ut,r=X;if(X=ut=null,Ne(n),r)for(n=0;n<r.length;n++)Ne(r[n])}}function ke(n,r){return n(r)}function ye(){}var et=!1;function k(n,r,o){if(et)return n(r,o);et=!0;try{return ke(n,r,o)}finally{et=!1,(ut!==null||X!==null)&&(ye(),Ue())}}function me(n,r){var o=n.stateNode;if(o===null)return null;var c=cl(o);if(c===null)return null;o=c[r];e:switch(r){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(c=!c.disabled)||(n=n.type,c=!(n==="button"||n==="input"||n==="select"||n==="textarea")),n=!c;break e;default:n=!1}if(n)return null;if(o&&typeof o!="function")throw Error(t(231,r,typeof o));return o}var Se=!1;if(d)try{var Fe={};Object.defineProperty(Fe,"passive",{get:function(){Se=!0}}),window.addEventListener("test",Fe,Fe),window.removeEventListener("test",Fe,Fe)}catch{Se=!1}function pt(n,r,o,c,f,g,A,O,G){var he=Array.prototype.slice.call(arguments,3);try{r.apply(o,he)}catch(Te){this.onError(Te)}}var ot=!1,Tt=null,Ut=!1,Jt=null,ht={onError:function(n){ot=!0,Tt=n}};function tt(n,r,o,c,f,g,A,O,G){ot=!1,Tt=null,pt.apply(ht,arguments)}function sn(n,r,o,c,f,g,A,O,G){if(tt.apply(this,arguments),ot){if(ot){var he=Tt;ot=!1,Tt=null}else throw Error(t(198));Ut||(Ut=!0,Jt=he)}}function Ct(n){var r=n,o=n;if(n.alternate)for(;r.return;)r=r.return;else{n=r;do r=n,(r.flags&4098)!==0&&(o=r.return),n=r.return;while(n)}return r.tag===3?o:null}function Ln(n){if(n.tag===13){var r=n.memoizedState;if(r===null&&(n=n.alternate,n!==null&&(r=n.memoizedState)),r!==null)return r.dehydrated}return null}function Qt(n){if(Ct(n)!==n)throw Error(t(188))}function pi(n){var r=n.alternate;if(!r){if(r=Ct(n),r===null)throw Error(t(188));return r!==n?null:n}for(var o=n,c=r;;){var f=o.return;if(f===null)break;var g=f.alternate;if(g===null){if(c=f.return,c!==null){o=c;continue}break}if(f.child===g.child){for(g=f.child;g;){if(g===o)return Qt(f),n;if(g===c)return Qt(f),r;g=g.sibling}throw Error(t(188))}if(o.return!==c.return)o=f,c=g;else{for(var A=!1,O=f.child;O;){if(O===o){A=!0,o=f,c=g;break}if(O===c){A=!0,c=f,o=g;break}O=O.sibling}if(!A){for(O=g.child;O;){if(O===o){A=!0,o=g,c=f;break}if(O===c){A=!0,c=g,o=f;break}O=O.sibling}if(!A)throw Error(t(189))}}if(o.alternate!==c)throw Error(t(190))}if(o.tag!==3)throw Error(t(188));return o.stateNode.current===o?n:r}function xn(n){return n=pi(n),n!==null?fn(n):null}function fn(n){if(n.tag===5||n.tag===6)return n;for(n=n.child;n!==null;){var r=fn(n);if(r!==null)return r;n=n.sibling}return null}var Gn=e.unstable_scheduleCallback,ii=e.unstable_cancelCallback,Ti=e.unstable_shouldYield,hr=e.unstable_requestPaint,$t=e.unstable_now,ga=e.unstable_getCurrentPriorityLevel,pr=e.unstable_ImmediatePriority,Ir=e.unstable_UserBlockingPriority,C=e.unstable_NormalPriority,$=e.unstable_LowPriority,fe=e.unstable_IdlePriority,re=null,ne=null;function Ve(n){if(ne&&typeof ne.onCommitFiberRoot=="function")try{ne.onCommitFiberRoot(re,n,void 0,(n.current.flags&128)===128)}catch{}}var Ie=Math.clz32?Math.clz32:it,ze=Math.log,Ze=Math.LN2;function it(n){return n>>>=0,n===0?32:31-(ze(n)/Ze|0)|0}var vt=64,Et=4194304;function qe(n){switch(n&-n){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return n&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return n&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return n}}function Ft(n,r){var o=n.pendingLanes;if(o===0)return 0;var c=0,f=n.suspendedLanes,g=n.pingedLanes,A=o&268435455;if(A!==0){var O=A&~f;O!==0?c=qe(O):(g&=A,g!==0&&(c=qe(g)))}else A=o&~f,A!==0?c=qe(A):g!==0&&(c=qe(g));if(c===0)return 0;if(r!==0&&r!==c&&(r&f)===0&&(f=c&-c,g=r&-r,f>=g||f===16&&(g&4194240)!==0))return r;if((c&4)!==0&&(c|=o&16),r=n.entangledLanes,r!==0)for(n=n.entanglements,r&=c;0<r;)o=31-Ie(r),f=1<<o,c|=n[o],r&=~f;return c}function gn(n,r){switch(n){case 1:case 2:case 4:return r+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return r+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function en(n,r){for(var o=n.suspendedLanes,c=n.pingedLanes,f=n.expirationTimes,g=n.pendingLanes;0<g;){var A=31-Ie(g),O=1<<A,G=f[A];G===-1?((O&o)===0||(O&c)!==0)&&(f[A]=gn(O,r)):G<=r&&(n.expiredLanes|=O),g&=~O}}function Wt(n){return n=n.pendingLanes&-1073741825,n!==0?n:n&1073741824?1073741824:0}function Tn(){var n=vt;return vt<<=1,(vt&4194240)===0&&(vt=64),n}function We(n){for(var r=[],o=0;31>o;o++)r.push(n);return r}function Sn(n,r,o){n.pendingLanes|=r,r!==536870912&&(n.suspendedLanes=0,n.pingedLanes=0),n=n.eventTimes,r=31-Ie(r),n[r]=o}function Ot(n,r){var o=n.pendingLanes&~r;n.pendingLanes=r,n.suspendedLanes=0,n.pingedLanes=0,n.expiredLanes&=r,n.mutableReadLanes&=r,n.entangledLanes&=r,r=n.entanglements;var c=n.eventTimes;for(n=n.expirationTimes;0<o;){var f=31-Ie(o),g=1<<f;r[f]=0,c[f]=-1,n[f]=-1,o&=~g}}function Bn(n,r){var o=n.entangledLanes|=r;for(n=n.entanglements;o;){var c=31-Ie(o),f=1<<c;f&r|n[c]&r&&(n[c]|=r),o&=~f}}var wt=0;function Ii(n){return n&=-n,1<n?4<n?(n&268435455)!==0?16:536870912:4:1}var mr,Gt,on,ki,Yt,wi=!1,zi=[],Hi=null,kr=null,zr=null,Vs=new Map,Gs=new Map,Hr=[],n_="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Xh(n,r){switch(n){case"focusin":case"focusout":Hi=null;break;case"dragenter":case"dragleave":kr=null;break;case"mouseover":case"mouseout":zr=null;break;case"pointerover":case"pointerout":Vs.delete(r.pointerId);break;case"gotpointercapture":case"lostpointercapture":Gs.delete(r.pointerId)}}function Bs(n,r,o,c,f,g){return n===null||n.nativeEvent!==g?(n={blockedOn:r,domEventName:o,eventSystemFlags:c,nativeEvent:g,targetContainers:[f]},r!==null&&(r=io(r),r!==null&&Gt(r)),n):(n.eventSystemFlags|=c,r=n.targetContainers,f!==null&&r.indexOf(f)===-1&&r.push(f),n)}function i_(n,r,o,c,f){switch(r){case"focusin":return Hi=Bs(Hi,n,r,o,c,f),!0;case"dragenter":return kr=Bs(kr,n,r,o,c,f),!0;case"mouseover":return zr=Bs(zr,n,r,o,c,f),!0;case"pointerover":var g=f.pointerId;return Vs.set(g,Bs(Vs.get(g)||null,n,r,o,c,f)),!0;case"gotpointercapture":return g=f.pointerId,Gs.set(g,Bs(Gs.get(g)||null,n,r,o,c,f)),!0}return!1}function $h(n){var r=va(n.target);if(r!==null){var o=Ct(r);if(o!==null){if(r=o.tag,r===13){if(r=Ln(o),r!==null){n.blockedOn=r,Yt(n.priority,function(){on(o)});return}}else if(r===3&&o.stateNode.current.memoizedState.isDehydrated){n.blockedOn=o.tag===3?o.stateNode.containerInfo:null;return}}}n.blockedOn=null}function jo(n){if(n.blockedOn!==null)return!1;for(var r=n.targetContainers;0<r.length;){var o=eu(n.domEventName,n.eventSystemFlags,r[0],n.nativeEvent);if(o===null){o=n.nativeEvent;var c=new o.constructor(o.type,o);Le=c,o.target.dispatchEvent(c),Le=null}else return r=io(o),r!==null&&Gt(r),n.blockedOn=o,!1;r.shift()}return!0}function Yh(n,r,o){jo(n)&&o.delete(r)}function r_(){wi=!1,Hi!==null&&jo(Hi)&&(Hi=null),kr!==null&&jo(kr)&&(kr=null),zr!==null&&jo(zr)&&(zr=null),Vs.forEach(Yh),Gs.forEach(Yh)}function Ws(n,r){n.blockedOn===r&&(n.blockedOn=null,wi||(wi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,r_)))}function Xs(n){function r(f){return Ws(f,n)}if(0<zi.length){Ws(zi[0],n);for(var o=1;o<zi.length;o++){var c=zi[o];c.blockedOn===n&&(c.blockedOn=null)}}for(Hi!==null&&Ws(Hi,n),kr!==null&&Ws(kr,n),zr!==null&&Ws(zr,n),Vs.forEach(r),Gs.forEach(r),o=0;o<Hr.length;o++)c=Hr[o],c.blockedOn===n&&(c.blockedOn=null);for(;0<Hr.length&&(o=Hr[0],o.blockedOn===null);)$h(o),o.blockedOn===null&&Hr.shift()}var Ga=R.ReactCurrentBatchConfig,Ko=!0;function a_(n,r,o,c){var f=wt,g=Ga.transition;Ga.transition=null;try{wt=1,Qc(n,r,o,c)}finally{wt=f,Ga.transition=g}}function s_(n,r,o,c){var f=wt,g=Ga.transition;Ga.transition=null;try{wt=4,Qc(n,r,o,c)}finally{wt=f,Ga.transition=g}}function Qc(n,r,o,c){if(Ko){var f=eu(n,r,o,c);if(f===null)vu(n,r,c,Zo,o),Xh(n,c);else if(i_(f,n,r,o,c))c.stopPropagation();else if(Xh(n,c),r&4&&-1<n_.indexOf(n)){for(;f!==null;){var g=io(f);if(g!==null&&mr(g),g=eu(n,r,o,c),g===null&&vu(n,r,c,Zo,o),g===f)break;f=g}f!==null&&c.stopPropagation()}else vu(n,r,c,null,o)}}var Zo=null;function eu(n,r,o,c){if(Zo=null,n=Ke(c),n=va(n),n!==null)if(r=Ct(n),r===null)n=null;else if(o=r.tag,o===13){if(n=Ln(r),n!==null)return n;n=null}else if(o===3){if(r.stateNode.current.memoizedState.isDehydrated)return r.tag===3?r.stateNode.containerInfo:null;n=null}else r!==n&&(n=null);return Zo=n,null}function qh(n){switch(n){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(ga()){case pr:return 1;case Ir:return 4;case C:case $:return 16;case fe:return 536870912;default:return 16}default:return 16}}var Vr=null,tu=null,Jo=null;function jh(){if(Jo)return Jo;var n,r=tu,o=r.length,c,f="value"in Vr?Vr.value:Vr.textContent,g=f.length;for(n=0;n<o&&r[n]===f[n];n++);var A=o-n;for(c=1;c<=A&&r[o-c]===f[g-c];c++);return Jo=f.slice(n,1<c?1-c:void 0)}function Qo(n){var r=n.keyCode;return"charCode"in n?(n=n.charCode,n===0&&r===13&&(n=13)):n=r,n===10&&(n=13),32<=n||n===13?n:0}function el(){return!0}function Kh(){return!1}function mi(n){function r(o,c,f,g,A){this._reactName=o,this._targetInst=f,this.type=c,this.nativeEvent=g,this.target=A,this.currentTarget=null;for(var O in n)n.hasOwnProperty(O)&&(o=n[O],this[O]=o?o(g):g[O]);return this.isDefaultPrevented=(g.defaultPrevented!=null?g.defaultPrevented:g.returnValue===!1)?el:Kh,this.isPropagationStopped=Kh,this}return Z(r.prototype,{preventDefault:function(){this.defaultPrevented=!0;var o=this.nativeEvent;o&&(o.preventDefault?o.preventDefault():typeof o.returnValue!="unknown"&&(o.returnValue=!1),this.isDefaultPrevented=el)},stopPropagation:function(){var o=this.nativeEvent;o&&(o.stopPropagation?o.stopPropagation():typeof o.cancelBubble!="unknown"&&(o.cancelBubble=!0),this.isPropagationStopped=el)},persist:function(){},isPersistent:el}),r}var Ba={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(n){return n.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},nu=mi(Ba),$s=Z({},Ba,{view:0,detail:0}),o_=mi($s),iu,ru,Ys,tl=Z({},$s,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:su,button:0,buttons:0,relatedTarget:function(n){return n.relatedTarget===void 0?n.fromElement===n.srcElement?n.toElement:n.fromElement:n.relatedTarget},movementX:function(n){return"movementX"in n?n.movementX:(n!==Ys&&(Ys&&n.type==="mousemove"?(iu=n.screenX-Ys.screenX,ru=n.screenY-Ys.screenY):ru=iu=0,Ys=n),iu)},movementY:function(n){return"movementY"in n?n.movementY:ru}}),Zh=mi(tl),l_=Z({},tl,{dataTransfer:0}),c_=mi(l_),u_=Z({},$s,{relatedTarget:0}),au=mi(u_),d_=Z({},Ba,{animationName:0,elapsedTime:0,pseudoElement:0}),f_=mi(d_),h_=Z({},Ba,{clipboardData:function(n){return"clipboardData"in n?n.clipboardData:window.clipboardData}}),p_=mi(h_),m_=Z({},Ba,{data:0}),Jh=mi(m_),g_={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},v_={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},__={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function x_(n){var r=this.nativeEvent;return r.getModifierState?r.getModifierState(n):(n=__[n])?!!r[n]:!1}function su(){return x_}var S_=Z({},$s,{key:function(n){if(n.key){var r=g_[n.key]||n.key;if(r!=="Unidentified")return r}return n.type==="keypress"?(n=Qo(n),n===13?"Enter":String.fromCharCode(n)):n.type==="keydown"||n.type==="keyup"?v_[n.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:su,charCode:function(n){return n.type==="keypress"?Qo(n):0},keyCode:function(n){return n.type==="keydown"||n.type==="keyup"?n.keyCode:0},which:function(n){return n.type==="keypress"?Qo(n):n.type==="keydown"||n.type==="keyup"?n.keyCode:0}}),y_=mi(S_),M_=Z({},tl,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Qh=mi(M_),E_=Z({},$s,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:su}),T_=mi(E_),w_=Z({},Ba,{propertyName:0,elapsedTime:0,pseudoElement:0}),A_=mi(w_),C_=Z({},tl,{deltaX:function(n){return"deltaX"in n?n.deltaX:"wheelDeltaX"in n?-n.wheelDeltaX:0},deltaY:function(n){return"deltaY"in n?n.deltaY:"wheelDeltaY"in n?-n.wheelDeltaY:"wheelDelta"in n?-n.wheelDelta:0},deltaZ:0,deltaMode:0}),R_=mi(C_),b_=[9,13,27,32],ou=d&&"CompositionEvent"in window,qs=null;d&&"documentMode"in document&&(qs=document.documentMode);var P_=d&&"TextEvent"in window&&!qs,ep=d&&(!ou||qs&&8<qs&&11>=qs),tp=" ",np=!1;function ip(n,r){switch(n){case"keyup":return b_.indexOf(r.keyCode)!==-1;case"keydown":return r.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function rp(n){return n=n.detail,typeof n=="object"&&"data"in n?n.data:null}var Wa=!1;function L_(n,r){switch(n){case"compositionend":return rp(r);case"keypress":return r.which!==32?null:(np=!0,tp);case"textInput":return n=r.data,n===tp&&np?null:n;default:return null}}function D_(n,r){if(Wa)return n==="compositionend"||!ou&&ip(n,r)?(n=jh(),Jo=tu=Vr=null,Wa=!1,n):null;switch(n){case"paste":return null;case"keypress":if(!(r.ctrlKey||r.altKey||r.metaKey)||r.ctrlKey&&r.altKey){if(r.char&&1<r.char.length)return r.char;if(r.which)return String.fromCharCode(r.which)}return null;case"compositionend":return ep&&r.locale!=="ko"?null:r.data;default:return null}}var N_={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function ap(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r==="input"?!!N_[n.type]:r==="textarea"}function sp(n,r,o,c){_e(c),r=sl(r,"onChange"),0<r.length&&(o=new nu("onChange","change",null,o,c),n.push({event:o,listeners:r}))}var js=null,Ks=null;function U_(n){Tp(n,0)}function nl(n){var r=ja(n);if(yt(r))return n}function F_(n,r){if(n==="change")return r}var op=!1;if(d){var lu;if(d){var cu="oninput"in document;if(!cu){var lp=document.createElement("div");lp.setAttribute("oninput","return;"),cu=typeof lp.oninput=="function"}lu=cu}else lu=!1;op=lu&&(!document.documentMode||9<document.documentMode)}function cp(){js&&(js.detachEvent("onpropertychange",up),Ks=js=null)}function up(n){if(n.propertyName==="value"&&nl(Ks)){var r=[];sp(r,Ks,n,Ke(n)),k(U_,r)}}function O_(n,r,o){n==="focusin"?(cp(),js=r,Ks=o,js.attachEvent("onpropertychange",up)):n==="focusout"&&cp()}function I_(n){if(n==="selectionchange"||n==="keyup"||n==="keydown")return nl(Ks)}function k_(n,r){if(n==="click")return nl(r)}function z_(n,r){if(n==="input"||n==="change")return nl(r)}function H_(n,r){return n===r&&(n!==0||1/n===1/r)||n!==n&&r!==r}var Vi=typeof Object.is=="function"?Object.is:H_;function Zs(n,r){if(Vi(n,r))return!0;if(typeof n!="object"||n===null||typeof r!="object"||r===null)return!1;var o=Object.keys(n),c=Object.keys(r);if(o.length!==c.length)return!1;for(c=0;c<o.length;c++){var f=o[c];if(!m.call(r,f)||!Vi(n[f],r[f]))return!1}return!0}function dp(n){for(;n&&n.firstChild;)n=n.firstChild;return n}function fp(n,r){var o=dp(n);n=0;for(var c;o;){if(o.nodeType===3){if(c=n+o.textContent.length,n<=r&&c>=r)return{node:o,offset:r-n};n=c}e:{for(;o;){if(o.nextSibling){o=o.nextSibling;break e}o=o.parentNode}o=void 0}o=dp(o)}}function hp(n,r){return n&&r?n===r?!0:n&&n.nodeType===3?!1:r&&r.nodeType===3?hp(n,r.parentNode):"contains"in n?n.contains(r):n.compareDocumentPosition?!!(n.compareDocumentPosition(r)&16):!1:!1}function pp(){for(var n=window,r=tn();r instanceof n.HTMLIFrameElement;){try{var o=typeof r.contentWindow.location.href=="string"}catch{o=!1}if(o)n=r.contentWindow;else break;r=tn(n.document)}return r}function uu(n){var r=n&&n.nodeName&&n.nodeName.toLowerCase();return r&&(r==="input"&&(n.type==="text"||n.type==="search"||n.type==="tel"||n.type==="url"||n.type==="password")||r==="textarea"||n.contentEditable==="true")}function V_(n){var r=pp(),o=n.focusedElem,c=n.selectionRange;if(r!==o&&o&&o.ownerDocument&&hp(o.ownerDocument.documentElement,o)){if(c!==null&&uu(o)){if(r=c.start,n=c.end,n===void 0&&(n=r),"selectionStart"in o)o.selectionStart=r,o.selectionEnd=Math.min(n,o.value.length);else if(n=(r=o.ownerDocument||document)&&r.defaultView||window,n.getSelection){n=n.getSelection();var f=o.textContent.length,g=Math.min(c.start,f);c=c.end===void 0?g:Math.min(c.end,f),!n.extend&&g>c&&(f=c,c=g,g=f),f=fp(o,g);var A=fp(o,c);f&&A&&(n.rangeCount!==1||n.anchorNode!==f.node||n.anchorOffset!==f.offset||n.focusNode!==A.node||n.focusOffset!==A.offset)&&(r=r.createRange(),r.setStart(f.node,f.offset),n.removeAllRanges(),g>c?(n.addRange(r),n.extend(A.node,A.offset)):(r.setEnd(A.node,A.offset),n.addRange(r)))}}for(r=[],n=o;n=n.parentNode;)n.nodeType===1&&r.push({element:n,left:n.scrollLeft,top:n.scrollTop});for(typeof o.focus=="function"&&o.focus(),o=0;o<r.length;o++)n=r[o],n.element.scrollLeft=n.left,n.element.scrollTop=n.top}}var G_=d&&"documentMode"in document&&11>=document.documentMode,Xa=null,du=null,Js=null,fu=!1;function mp(n,r,o){var c=o.window===o?o.document:o.nodeType===9?o:o.ownerDocument;fu||Xa==null||Xa!==tn(c)||(c=Xa,"selectionStart"in c&&uu(c)?c={start:c.selectionStart,end:c.selectionEnd}:(c=(c.ownerDocument&&c.ownerDocument.defaultView||window).getSelection(),c={anchorNode:c.anchorNode,anchorOffset:c.anchorOffset,focusNode:c.focusNode,focusOffset:c.focusOffset}),Js&&Zs(Js,c)||(Js=c,c=sl(du,"onSelect"),0<c.length&&(r=new nu("onSelect","select",null,r,o),n.push({event:r,listeners:c}),r.target=Xa)))}function il(n,r){var o={};return o[n.toLowerCase()]=r.toLowerCase(),o["Webkit"+n]="webkit"+r,o["Moz"+n]="moz"+r,o}var $a={animationend:il("Animation","AnimationEnd"),animationiteration:il("Animation","AnimationIteration"),animationstart:il("Animation","AnimationStart"),transitionend:il("Transition","TransitionEnd")},hu={},gp={};d&&(gp=document.createElement("div").style,"AnimationEvent"in window||(delete $a.animationend.animation,delete $a.animationiteration.animation,delete $a.animationstart.animation),"TransitionEvent"in window||delete $a.transitionend.transition);function rl(n){if(hu[n])return hu[n];if(!$a[n])return n;var r=$a[n],o;for(o in r)if(r.hasOwnProperty(o)&&o in gp)return hu[n]=r[o];return n}var vp=rl("animationend"),_p=rl("animationiteration"),xp=rl("animationstart"),Sp=rl("transitionend"),yp=new Map,Mp="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Gr(n,r){yp.set(n,r),l(r,[n])}for(var pu=0;pu<Mp.length;pu++){var mu=Mp[pu],B_=mu.toLowerCase(),W_=mu[0].toUpperCase()+mu.slice(1);Gr(B_,"on"+W_)}Gr(vp,"onAnimationEnd"),Gr(_p,"onAnimationIteration"),Gr(xp,"onAnimationStart"),Gr("dblclick","onDoubleClick"),Gr("focusin","onFocus"),Gr("focusout","onBlur"),Gr(Sp,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),l("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),l("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),l("onBeforeInput",["compositionend","keypress","textInput","paste"]),l("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),l("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),X_=new Set("cancel close invalid load scroll toggle".split(" ").concat(Qs));function Ep(n,r,o){var c=n.type||"unknown-event";n.currentTarget=o,sn(c,r,void 0,n),n.currentTarget=null}function Tp(n,r){r=(r&4)!==0;for(var o=0;o<n.length;o++){var c=n[o],f=c.event;c=c.listeners;e:{var g=void 0;if(r)for(var A=c.length-1;0<=A;A--){var O=c[A],G=O.instance,he=O.currentTarget;if(O=O.listener,G!==g&&f.isPropagationStopped())break e;Ep(f,O,he),g=G}else for(A=0;A<c.length;A++){if(O=c[A],G=O.instance,he=O.currentTarget,O=O.listener,G!==g&&f.isPropagationStopped())break e;Ep(f,O,he),g=G}}}if(Ut)throw n=Jt,Ut=!1,Jt=null,n}function rn(n,r){var o=r[Eu];o===void 0&&(o=r[Eu]=new Set);var c=n+"__bubble";o.has(c)||(wp(r,n,2,!1),o.add(c))}function gu(n,r,o){var c=0;r&&(c|=4),wp(o,n,c,r)}var al="_reactListening"+Math.random().toString(36).slice(2);function eo(n){if(!n[al]){n[al]=!0,a.forEach(function(o){o!=="selectionchange"&&(X_.has(o)||gu(o,!1,n),gu(o,!0,n))});var r=n.nodeType===9?n:n.ownerDocument;r===null||r[al]||(r[al]=!0,gu("selectionchange",!1,r))}}function wp(n,r,o,c){switch(qh(r)){case 1:var f=a_;break;case 4:f=s_;break;default:f=Qc}o=f.bind(null,r,o,n),f=void 0,!Se||r!=="touchstart"&&r!=="touchmove"&&r!=="wheel"||(f=!0),c?f!==void 0?n.addEventListener(r,o,{capture:!0,passive:f}):n.addEventListener(r,o,!0):f!==void 0?n.addEventListener(r,o,{passive:f}):n.addEventListener(r,o,!1)}function vu(n,r,o,c,f){var g=c;if((r&1)===0&&(r&2)===0&&c!==null)e:for(;;){if(c===null)return;var A=c.tag;if(A===3||A===4){var O=c.stateNode.containerInfo;if(O===f||O.nodeType===8&&O.parentNode===f)break;if(A===4)for(A=c.return;A!==null;){var G=A.tag;if((G===3||G===4)&&(G=A.stateNode.containerInfo,G===f||G.nodeType===8&&G.parentNode===f))return;A=A.return}for(;O!==null;){if(A=va(O),A===null)return;if(G=A.tag,G===5||G===6){c=g=A;continue e}O=O.parentNode}}c=c.return}k(function(){var he=g,Te=Ke(o),Ae=[];e:{var Ee=yp.get(n);if(Ee!==void 0){var $e=nu,Je=n;switch(n){case"keypress":if(Qo(o)===0)break e;case"keydown":case"keyup":$e=y_;break;case"focusin":Je="focus",$e=au;break;case"focusout":Je="blur",$e=au;break;case"beforeblur":case"afterblur":$e=au;break;case"click":if(o.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":$e=Zh;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":$e=c_;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":$e=T_;break;case vp:case _p:case xp:$e=f_;break;case Sp:$e=A_;break;case"scroll":$e=o_;break;case"wheel":$e=R_;break;case"copy":case"cut":case"paste":$e=p_;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":$e=Qh}var nt=(r&4)!==0,yn=!nt&&n==="scroll",ae=nt?Ee!==null?Ee+"Capture":null:Ee;nt=[];for(var j=he,de;j!==null;){de=j;var be=de.stateNode;if(de.tag===5&&be!==null&&(de=be,ae!==null&&(be=me(j,ae),be!=null&&nt.push(to(j,be,de)))),yn)break;j=j.return}0<nt.length&&(Ee=new $e(Ee,Je,null,o,Te),Ae.push({event:Ee,listeners:nt}))}}if((r&7)===0){e:{if(Ee=n==="mouseover"||n==="pointerover",$e=n==="mouseout"||n==="pointerout",Ee&&o!==Le&&(Je=o.relatedTarget||o.fromElement)&&(va(Je)||Je[gr]))break e;if(($e||Ee)&&(Ee=Te.window===Te?Te:(Ee=Te.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,$e?(Je=o.relatedTarget||o.toElement,$e=he,Je=Je?va(Je):null,Je!==null&&(yn=Ct(Je),Je!==yn||Je.tag!==5&&Je.tag!==6)&&(Je=null)):($e=null,Je=he),$e!==Je)){if(nt=Zh,be="onMouseLeave",ae="onMouseEnter",j="mouse",(n==="pointerout"||n==="pointerover")&&(nt=Qh,be="onPointerLeave",ae="onPointerEnter",j="pointer"),yn=$e==null?Ee:ja($e),de=Je==null?Ee:ja(Je),Ee=new nt(be,j+"leave",$e,o,Te),Ee.target=yn,Ee.relatedTarget=de,be=null,va(Te)===he&&(nt=new nt(ae,j+"enter",Je,o,Te),nt.target=de,nt.relatedTarget=yn,be=nt),yn=be,$e&&Je)t:{for(nt=$e,ae=Je,j=0,de=nt;de;de=Ya(de))j++;for(de=0,be=ae;be;be=Ya(be))de++;for(;0<j-de;)nt=Ya(nt),j--;for(;0<de-j;)ae=Ya(ae),de--;for(;j--;){if(nt===ae||ae!==null&&nt===ae.alternate)break t;nt=Ya(nt),ae=Ya(ae)}nt=null}else nt=null;$e!==null&&Ap(Ae,Ee,$e,nt,!1),Je!==null&&yn!==null&&Ap(Ae,yn,Je,nt,!0)}}e:{if(Ee=he?ja(he):window,$e=Ee.nodeName&&Ee.nodeName.toLowerCase(),$e==="select"||$e==="input"&&Ee.type==="file")var at=F_;else if(ap(Ee))if(op)at=z_;else{at=I_;var dt=O_}else($e=Ee.nodeName)&&$e.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(at=k_);if(at&&(at=at(n,he))){sp(Ae,at,o,Te);break e}dt&&dt(n,Ee,he),n==="focusout"&&(dt=Ee._wrapperState)&&dt.controlled&&Ee.type==="number"&&Dt(Ee,"number",Ee.value)}switch(dt=he?ja(he):window,n){case"focusin":(ap(dt)||dt.contentEditable==="true")&&(Xa=dt,du=he,Js=null);break;case"focusout":Js=du=Xa=null;break;case"mousedown":fu=!0;break;case"contextmenu":case"mouseup":case"dragend":fu=!1,mp(Ae,o,Te);break;case"selectionchange":if(G_)break;case"keydown":case"keyup":mp(Ae,o,Te)}var ft;if(ou)e:{switch(n){case"compositionstart":var mt="onCompositionStart";break e;case"compositionend":mt="onCompositionEnd";break e;case"compositionupdate":mt="onCompositionUpdate";break e}mt=void 0}else Wa?ip(n,o)&&(mt="onCompositionEnd"):n==="keydown"&&o.keyCode===229&&(mt="onCompositionStart");mt&&(ep&&o.locale!=="ko"&&(Wa||mt!=="onCompositionStart"?mt==="onCompositionEnd"&&Wa&&(ft=jh()):(Vr=Te,tu="value"in Vr?Vr.value:Vr.textContent,Wa=!0)),dt=sl(he,mt),0<dt.length&&(mt=new Jh(mt,n,null,o,Te),Ae.push({event:mt,listeners:dt}),ft?mt.data=ft:(ft=rp(o),ft!==null&&(mt.data=ft)))),(ft=P_?L_(n,o):D_(n,o))&&(he=sl(he,"onBeforeInput"),0<he.length&&(Te=new Jh("onBeforeInput","beforeinput",null,o,Te),Ae.push({event:Te,listeners:he}),Te.data=ft))}Tp(Ae,r)})}function to(n,r,o){return{instance:n,listener:r,currentTarget:o}}function sl(n,r){for(var o=r+"Capture",c=[];n!==null;){var f=n,g=f.stateNode;f.tag===5&&g!==null&&(f=g,g=me(n,o),g!=null&&c.unshift(to(n,g,f)),g=me(n,r),g!=null&&c.push(to(n,g,f))),n=n.return}return c}function Ya(n){if(n===null)return null;do n=n.return;while(n&&n.tag!==5);return n||null}function Ap(n,r,o,c,f){for(var g=r._reactName,A=[];o!==null&&o!==c;){var O=o,G=O.alternate,he=O.stateNode;if(G!==null&&G===c)break;O.tag===5&&he!==null&&(O=he,f?(G=me(o,g),G!=null&&A.unshift(to(o,G,O))):f||(G=me(o,g),G!=null&&A.push(to(o,G,O)))),o=o.return}A.length!==0&&n.push({event:r,listeners:A})}var $_=/\r\n?/g,Y_=/\u0000|\uFFFD/g;function Cp(n){return(typeof n=="string"?n:""+n).replace($_,`
`).replace(Y_,"")}function ol(n,r,o){if(r=Cp(r),Cp(n)!==r&&o)throw Error(t(425))}function ll(){}var _u=null,xu=null;function Su(n,r){return n==="textarea"||n==="noscript"||typeof r.children=="string"||typeof r.children=="number"||typeof r.dangerouslySetInnerHTML=="object"&&r.dangerouslySetInnerHTML!==null&&r.dangerouslySetInnerHTML.__html!=null}var yu=typeof setTimeout=="function"?setTimeout:void 0,q_=typeof clearTimeout=="function"?clearTimeout:void 0,Rp=typeof Promise=="function"?Promise:void 0,j_=typeof queueMicrotask=="function"?queueMicrotask:typeof Rp<"u"?function(n){return Rp.resolve(null).then(n).catch(K_)}:yu;function K_(n){setTimeout(function(){throw n})}function Mu(n,r){var o=r,c=0;do{var f=o.nextSibling;if(n.removeChild(o),f&&f.nodeType===8)if(o=f.data,o==="/$"){if(c===0){n.removeChild(f),Xs(r);return}c--}else o!=="$"&&o!=="$?"&&o!=="$!"||c++;o=f}while(o);Xs(r)}function Br(n){for(;n!=null;n=n.nextSibling){var r=n.nodeType;if(r===1||r===3)break;if(r===8){if(r=n.data,r==="$"||r==="$!"||r==="$?")break;if(r==="/$")return null}}return n}function bp(n){n=n.previousSibling;for(var r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="$"||o==="$!"||o==="$?"){if(r===0)return n;r--}else o==="/$"&&r++}n=n.previousSibling}return null}var qa=Math.random().toString(36).slice(2),Qi="__reactFiber$"+qa,no="__reactProps$"+qa,gr="__reactContainer$"+qa,Eu="__reactEvents$"+qa,Z_="__reactListeners$"+qa,J_="__reactHandles$"+qa;function va(n){var r=n[Qi];if(r)return r;for(var o=n.parentNode;o;){if(r=o[gr]||o[Qi]){if(o=r.alternate,r.child!==null||o!==null&&o.child!==null)for(n=bp(n);n!==null;){if(o=n[Qi])return o;n=bp(n)}return r}n=o,o=n.parentNode}return null}function io(n){return n=n[Qi]||n[gr],!n||n.tag!==5&&n.tag!==6&&n.tag!==13&&n.tag!==3?null:n}function ja(n){if(n.tag===5||n.tag===6)return n.stateNode;throw Error(t(33))}function cl(n){return n[no]||null}var Tu=[],Ka=-1;function Wr(n){return{current:n}}function an(n){0>Ka||(n.current=Tu[Ka],Tu[Ka]=null,Ka--)}function nn(n,r){Ka++,Tu[Ka]=n.current,n.current=r}var Xr={},Wn=Wr(Xr),ri=Wr(!1),_a=Xr;function Za(n,r){var o=n.type.contextTypes;if(!o)return Xr;var c=n.stateNode;if(c&&c.__reactInternalMemoizedUnmaskedChildContext===r)return c.__reactInternalMemoizedMaskedChildContext;var f={},g;for(g in o)f[g]=r[g];return c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=r,n.__reactInternalMemoizedMaskedChildContext=f),f}function ai(n){return n=n.childContextTypes,n!=null}function ul(){an(ri),an(Wn)}function Pp(n,r,o){if(Wn.current!==Xr)throw Error(t(168));nn(Wn,r),nn(ri,o)}function Lp(n,r,o){var c=n.stateNode;if(r=r.childContextTypes,typeof c.getChildContext!="function")return o;c=c.getChildContext();for(var f in c)if(!(f in r))throw Error(t(108,le(n)||"Unknown",f));return Z({},o,c)}function dl(n){return n=(n=n.stateNode)&&n.__reactInternalMemoizedMergedChildContext||Xr,_a=Wn.current,nn(Wn,n),nn(ri,ri.current),!0}function Dp(n,r,o){var c=n.stateNode;if(!c)throw Error(t(169));o?(n=Lp(n,r,_a),c.__reactInternalMemoizedMergedChildContext=n,an(ri),an(Wn),nn(Wn,n)):an(ri),nn(ri,o)}var vr=null,fl=!1,wu=!1;function Np(n){vr===null?vr=[n]:vr.push(n)}function Q_(n){fl=!0,Np(n)}function $r(){if(!wu&&vr!==null){wu=!0;var n=0,r=wt;try{var o=vr;for(wt=1;n<o.length;n++){var c=o[n];do c=c(!0);while(c!==null)}vr=null,fl=!1}catch(f){throw vr!==null&&(vr=vr.slice(n+1)),Gn(pr,$r),f}finally{wt=r,wu=!1}}return null}var Ja=[],Qa=0,hl=null,pl=0,Ai=[],Ci=0,xa=null,_r=1,xr="";function Sa(n,r){Ja[Qa++]=pl,Ja[Qa++]=hl,hl=n,pl=r}function Up(n,r,o){Ai[Ci++]=_r,Ai[Ci++]=xr,Ai[Ci++]=xa,xa=n;var c=_r;n=xr;var f=32-Ie(c)-1;c&=~(1<<f),o+=1;var g=32-Ie(r)+f;if(30<g){var A=f-f%5;g=(c&(1<<A)-1).toString(32),c>>=A,f-=A,_r=1<<32-Ie(r)+f|o<<f|c,xr=g+n}else _r=1<<g|o<<f|c,xr=n}function Au(n){n.return!==null&&(Sa(n,1),Up(n,1,0))}function Cu(n){for(;n===hl;)hl=Ja[--Qa],Ja[Qa]=null,pl=Ja[--Qa],Ja[Qa]=null;for(;n===xa;)xa=Ai[--Ci],Ai[Ci]=null,xr=Ai[--Ci],Ai[Ci]=null,_r=Ai[--Ci],Ai[Ci]=null}var gi=null,vi=null,ln=!1,Gi=null;function Fp(n,r){var o=Li(5,null,null,0);o.elementType="DELETED",o.stateNode=r,o.return=n,r=n.deletions,r===null?(n.deletions=[o],n.flags|=16):r.push(o)}function Op(n,r){switch(n.tag){case 5:var o=n.type;return r=r.nodeType!==1||o.toLowerCase()!==r.nodeName.toLowerCase()?null:r,r!==null?(n.stateNode=r,gi=n,vi=Br(r.firstChild),!0):!1;case 6:return r=n.pendingProps===""||r.nodeType!==3?null:r,r!==null?(n.stateNode=r,gi=n,vi=null,!0):!1;case 13:return r=r.nodeType!==8?null:r,r!==null?(o=xa!==null?{id:_r,overflow:xr}:null,n.memoizedState={dehydrated:r,treeContext:o,retryLane:1073741824},o=Li(18,null,null,0),o.stateNode=r,o.return=n,n.child=o,gi=n,vi=null,!0):!1;default:return!1}}function Ru(n){return(n.mode&1)!==0&&(n.flags&128)===0}function bu(n){if(ln){var r=vi;if(r){var o=r;if(!Op(n,r)){if(Ru(n))throw Error(t(418));r=Br(o.nextSibling);var c=gi;r&&Op(n,r)?Fp(c,o):(n.flags=n.flags&-4097|2,ln=!1,gi=n)}}else{if(Ru(n))throw Error(t(418));n.flags=n.flags&-4097|2,ln=!1,gi=n}}}function Ip(n){for(n=n.return;n!==null&&n.tag!==5&&n.tag!==3&&n.tag!==13;)n=n.return;gi=n}function ml(n){if(n!==gi)return!1;if(!ln)return Ip(n),ln=!0,!1;var r;if((r=n.tag!==3)&&!(r=n.tag!==5)&&(r=n.type,r=r!=="head"&&r!=="body"&&!Su(n.type,n.memoizedProps)),r&&(r=vi)){if(Ru(n))throw kp(),Error(t(418));for(;r;)Fp(n,r),r=Br(r.nextSibling)}if(Ip(n),n.tag===13){if(n=n.memoizedState,n=n!==null?n.dehydrated:null,!n)throw Error(t(317));e:{for(n=n.nextSibling,r=0;n;){if(n.nodeType===8){var o=n.data;if(o==="/$"){if(r===0){vi=Br(n.nextSibling);break e}r--}else o!=="$"&&o!=="$!"&&o!=="$?"||r++}n=n.nextSibling}vi=null}}else vi=gi?Br(n.stateNode.nextSibling):null;return!0}function kp(){for(var n=vi;n;)n=Br(n.nextSibling)}function es(){vi=gi=null,ln=!1}function Pu(n){Gi===null?Gi=[n]:Gi.push(n)}var ex=R.ReactCurrentBatchConfig;function ro(n,r,o){if(n=o.ref,n!==null&&typeof n!="function"&&typeof n!="object"){if(o._owner){if(o=o._owner,o){if(o.tag!==1)throw Error(t(309));var c=o.stateNode}if(!c)throw Error(t(147,n));var f=c,g=""+n;return r!==null&&r.ref!==null&&typeof r.ref=="function"&&r.ref._stringRef===g?r.ref:(r=function(A){var O=f.refs;A===null?delete O[g]:O[g]=A},r._stringRef=g,r)}if(typeof n!="string")throw Error(t(284));if(!o._owner)throw Error(t(290,n))}return n}function gl(n,r){throw n=Object.prototype.toString.call(r),Error(t(31,n==="[object Object]"?"object with keys {"+Object.keys(r).join(", ")+"}":n))}function zp(n){var r=n._init;return r(n._payload)}function Hp(n){function r(ae,j){if(n){var de=ae.deletions;de===null?(ae.deletions=[j],ae.flags|=16):de.push(j)}}function o(ae,j){if(!n)return null;for(;j!==null;)r(ae,j),j=j.sibling;return null}function c(ae,j){for(ae=new Map;j!==null;)j.key!==null?ae.set(j.key,j):ae.set(j.index,j),j=j.sibling;return ae}function f(ae,j){return ae=ea(ae,j),ae.index=0,ae.sibling=null,ae}function g(ae,j,de){return ae.index=de,n?(de=ae.alternate,de!==null?(de=de.index,de<j?(ae.flags|=2,j):de):(ae.flags|=2,j)):(ae.flags|=1048576,j)}function A(ae){return n&&ae.alternate===null&&(ae.flags|=2),ae}function O(ae,j,de,be){return j===null||j.tag!==6?(j=yd(de,ae.mode,be),j.return=ae,j):(j=f(j,de),j.return=ae,j)}function G(ae,j,de,be){var at=de.type;return at===I?Te(ae,j,de.props.children,be,de.key):j!==null&&(j.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===oe&&zp(at)===j.type)?(be=f(j,de.props),be.ref=ro(ae,j,de),be.return=ae,be):(be=Hl(de.type,de.key,de.props,null,ae.mode,be),be.ref=ro(ae,j,de),be.return=ae,be)}function he(ae,j,de,be){return j===null||j.tag!==4||j.stateNode.containerInfo!==de.containerInfo||j.stateNode.implementation!==de.implementation?(j=Md(de,ae.mode,be),j.return=ae,j):(j=f(j,de.children||[]),j.return=ae,j)}function Te(ae,j,de,be,at){return j===null||j.tag!==7?(j=Ra(de,ae.mode,be,at),j.return=ae,j):(j=f(j,de),j.return=ae,j)}function Ae(ae,j,de){if(typeof j=="string"&&j!==""||typeof j=="number")return j=yd(""+j,ae.mode,de),j.return=ae,j;if(typeof j=="object"&&j!==null){switch(j.$$typeof){case L:return de=Hl(j.type,j.key,j.props,null,ae.mode,de),de.ref=ro(ae,null,j),de.return=ae,de;case P:return j=Md(j,ae.mode,de),j.return=ae,j;case oe:var be=j._init;return Ae(ae,be(j._payload),de)}if(dn(j)||W(j))return j=Ra(j,ae.mode,de,null),j.return=ae,j;gl(ae,j)}return null}function Ee(ae,j,de,be){var at=j!==null?j.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return at!==null?null:O(ae,j,""+de,be);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case L:return de.key===at?G(ae,j,de,be):null;case P:return de.key===at?he(ae,j,de,be):null;case oe:return at=de._init,Ee(ae,j,at(de._payload),be)}if(dn(de)||W(de))return at!==null?null:Te(ae,j,de,be,null);gl(ae,de)}return null}function $e(ae,j,de,be,at){if(typeof be=="string"&&be!==""||typeof be=="number")return ae=ae.get(de)||null,O(j,ae,""+be,at);if(typeof be=="object"&&be!==null){switch(be.$$typeof){case L:return ae=ae.get(be.key===null?de:be.key)||null,G(j,ae,be,at);case P:return ae=ae.get(be.key===null?de:be.key)||null,he(j,ae,be,at);case oe:var dt=be._init;return $e(ae,j,de,dt(be._payload),at)}if(dn(be)||W(be))return ae=ae.get(de)||null,Te(j,ae,be,at,null);gl(j,be)}return null}function Je(ae,j,de,be){for(var at=null,dt=null,ft=j,mt=j=0,Un=null;ft!==null&&mt<de.length;mt++){ft.index>mt?(Un=ft,ft=null):Un=ft.sibling;var Bt=Ee(ae,ft,de[mt],be);if(Bt===null){ft===null&&(ft=Un);break}n&&ft&&Bt.alternate===null&&r(ae,ft),j=g(Bt,j,mt),dt===null?at=Bt:dt.sibling=Bt,dt=Bt,ft=Un}if(mt===de.length)return o(ae,ft),ln&&Sa(ae,mt),at;if(ft===null){for(;mt<de.length;mt++)ft=Ae(ae,de[mt],be),ft!==null&&(j=g(ft,j,mt),dt===null?at=ft:dt.sibling=ft,dt=ft);return ln&&Sa(ae,mt),at}for(ft=c(ae,ft);mt<de.length;mt++)Un=$e(ft,ae,mt,de[mt],be),Un!==null&&(n&&Un.alternate!==null&&ft.delete(Un.key===null?mt:Un.key),j=g(Un,j,mt),dt===null?at=Un:dt.sibling=Un,dt=Un);return n&&ft.forEach(function(ta){return r(ae,ta)}),ln&&Sa(ae,mt),at}function nt(ae,j,de,be){var at=W(de);if(typeof at!="function")throw Error(t(150));if(de=at.call(de),de==null)throw Error(t(151));for(var dt=at=null,ft=j,mt=j=0,Un=null,Bt=de.next();ft!==null&&!Bt.done;mt++,Bt=de.next()){ft.index>mt?(Un=ft,ft=null):Un=ft.sibling;var ta=Ee(ae,ft,Bt.value,be);if(ta===null){ft===null&&(ft=Un);break}n&&ft&&ta.alternate===null&&r(ae,ft),j=g(ta,j,mt),dt===null?at=ta:dt.sibling=ta,dt=ta,ft=Un}if(Bt.done)return o(ae,ft),ln&&Sa(ae,mt),at;if(ft===null){for(;!Bt.done;mt++,Bt=de.next())Bt=Ae(ae,Bt.value,be),Bt!==null&&(j=g(Bt,j,mt),dt===null?at=Bt:dt.sibling=Bt,dt=Bt);return ln&&Sa(ae,mt),at}for(ft=c(ae,ft);!Bt.done;mt++,Bt=de.next())Bt=$e(ft,ae,mt,Bt.value,be),Bt!==null&&(n&&Bt.alternate!==null&&ft.delete(Bt.key===null?mt:Bt.key),j=g(Bt,j,mt),dt===null?at=Bt:dt.sibling=Bt,dt=Bt);return n&&ft.forEach(function(Nx){return r(ae,Nx)}),ln&&Sa(ae,mt),at}function yn(ae,j,de,be){if(typeof de=="object"&&de!==null&&de.type===I&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case L:e:{for(var at=de.key,dt=j;dt!==null;){if(dt.key===at){if(at=de.type,at===I){if(dt.tag===7){o(ae,dt.sibling),j=f(dt,de.props.children),j.return=ae,ae=j;break e}}else if(dt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===oe&&zp(at)===dt.type){o(ae,dt.sibling),j=f(dt,de.props),j.ref=ro(ae,dt,de),j.return=ae,ae=j;break e}o(ae,dt);break}else r(ae,dt);dt=dt.sibling}de.type===I?(j=Ra(de.props.children,ae.mode,be,de.key),j.return=ae,ae=j):(be=Hl(de.type,de.key,de.props,null,ae.mode,be),be.ref=ro(ae,j,de),be.return=ae,ae=be)}return A(ae);case P:e:{for(dt=de.key;j!==null;){if(j.key===dt)if(j.tag===4&&j.stateNode.containerInfo===de.containerInfo&&j.stateNode.implementation===de.implementation){o(ae,j.sibling),j=f(j,de.children||[]),j.return=ae,ae=j;break e}else{o(ae,j);break}else r(ae,j);j=j.sibling}j=Md(de,ae.mode,be),j.return=ae,ae=j}return A(ae);case oe:return dt=de._init,yn(ae,j,dt(de._payload),be)}if(dn(de))return Je(ae,j,de,be);if(W(de))return nt(ae,j,de,be);gl(ae,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,j!==null&&j.tag===6?(o(ae,j.sibling),j=f(j,de),j.return=ae,ae=j):(o(ae,j),j=yd(de,ae.mode,be),j.return=ae,ae=j),A(ae)):o(ae,j)}return yn}var ts=Hp(!0),Vp=Hp(!1),vl=Wr(null),_l=null,ns=null,Lu=null;function Du(){Lu=ns=_l=null}function Nu(n){var r=vl.current;an(vl),n._currentValue=r}function Uu(n,r,o){for(;n!==null;){var c=n.alternate;if((n.childLanes&r)!==r?(n.childLanes|=r,c!==null&&(c.childLanes|=r)):c!==null&&(c.childLanes&r)!==r&&(c.childLanes|=r),n===o)break;n=n.return}}function is(n,r){_l=n,Lu=ns=null,n=n.dependencies,n!==null&&n.firstContext!==null&&((n.lanes&r)!==0&&(si=!0),n.firstContext=null)}function Ri(n){var r=n._currentValue;if(Lu!==n)if(n={context:n,memoizedValue:r,next:null},ns===null){if(_l===null)throw Error(t(308));ns=n,_l.dependencies={lanes:0,firstContext:n}}else ns=ns.next=n;return r}var ya=null;function Fu(n){ya===null?ya=[n]:ya.push(n)}function Gp(n,r,o,c){var f=r.interleaved;return f===null?(o.next=o,Fu(r)):(o.next=f.next,f.next=o),r.interleaved=o,Sr(n,c)}function Sr(n,r){n.lanes|=r;var o=n.alternate;for(o!==null&&(o.lanes|=r),o=n,n=n.return;n!==null;)n.childLanes|=r,o=n.alternate,o!==null&&(o.childLanes|=r),o=n,n=n.return;return o.tag===3?o.stateNode:null}var Yr=!1;function Ou(n){n.updateQueue={baseState:n.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Bp(n,r){n=n.updateQueue,r.updateQueue===n&&(r.updateQueue={baseState:n.baseState,firstBaseUpdate:n.firstBaseUpdate,lastBaseUpdate:n.lastBaseUpdate,shared:n.shared,effects:n.effects})}function yr(n,r){return{eventTime:n,lane:r,tag:0,payload:null,callback:null,next:null}}function qr(n,r,o){var c=n.updateQueue;if(c===null)return null;if(c=c.shared,(Ht&2)!==0){var f=c.pending;return f===null?r.next=r:(r.next=f.next,f.next=r),c.pending=r,Sr(n,o)}return f=c.interleaved,f===null?(r.next=r,Fu(c)):(r.next=f.next,f.next=r),c.interleaved=r,Sr(n,o)}function xl(n,r,o){if(r=r.updateQueue,r!==null&&(r=r.shared,(o&4194240)!==0)){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Bn(n,o)}}function Wp(n,r){var o=n.updateQueue,c=n.alternate;if(c!==null&&(c=c.updateQueue,o===c)){var f=null,g=null;if(o=o.firstBaseUpdate,o!==null){do{var A={eventTime:o.eventTime,lane:o.lane,tag:o.tag,payload:o.payload,callback:o.callback,next:null};g===null?f=g=A:g=g.next=A,o=o.next}while(o!==null);g===null?f=g=r:g=g.next=r}else f=g=r;o={baseState:c.baseState,firstBaseUpdate:f,lastBaseUpdate:g,shared:c.shared,effects:c.effects},n.updateQueue=o;return}n=o.lastBaseUpdate,n===null?o.firstBaseUpdate=r:n.next=r,o.lastBaseUpdate=r}function Sl(n,r,o,c){var f=n.updateQueue;Yr=!1;var g=f.firstBaseUpdate,A=f.lastBaseUpdate,O=f.shared.pending;if(O!==null){f.shared.pending=null;var G=O,he=G.next;G.next=null,A===null?g=he:A.next=he,A=G;var Te=n.alternate;Te!==null&&(Te=Te.updateQueue,O=Te.lastBaseUpdate,O!==A&&(O===null?Te.firstBaseUpdate=he:O.next=he,Te.lastBaseUpdate=G))}if(g!==null){var Ae=f.baseState;A=0,Te=he=G=null,O=g;do{var Ee=O.lane,$e=O.eventTime;if((c&Ee)===Ee){Te!==null&&(Te=Te.next={eventTime:$e,lane:0,tag:O.tag,payload:O.payload,callback:O.callback,next:null});e:{var Je=n,nt=O;switch(Ee=r,$e=o,nt.tag){case 1:if(Je=nt.payload,typeof Je=="function"){Ae=Je.call($e,Ae,Ee);break e}Ae=Je;break e;case 3:Je.flags=Je.flags&-65537|128;case 0:if(Je=nt.payload,Ee=typeof Je=="function"?Je.call($e,Ae,Ee):Je,Ee==null)break e;Ae=Z({},Ae,Ee);break e;case 2:Yr=!0}}O.callback!==null&&O.lane!==0&&(n.flags|=64,Ee=f.effects,Ee===null?f.effects=[O]:Ee.push(O))}else $e={eventTime:$e,lane:Ee,tag:O.tag,payload:O.payload,callback:O.callback,next:null},Te===null?(he=Te=$e,G=Ae):Te=Te.next=$e,A|=Ee;if(O=O.next,O===null){if(O=f.shared.pending,O===null)break;Ee=O,O=Ee.next,Ee.next=null,f.lastBaseUpdate=Ee,f.shared.pending=null}}while(!0);if(Te===null&&(G=Ae),f.baseState=G,f.firstBaseUpdate=he,f.lastBaseUpdate=Te,r=f.shared.interleaved,r!==null){f=r;do A|=f.lane,f=f.next;while(f!==r)}else g===null&&(f.shared.lanes=0);Ta|=A,n.lanes=A,n.memoizedState=Ae}}function Xp(n,r,o){if(n=r.effects,r.effects=null,n!==null)for(r=0;r<n.length;r++){var c=n[r],f=c.callback;if(f!==null){if(c.callback=null,c=o,typeof f!="function")throw Error(t(191,f));f.call(c)}}}var ao={},er=Wr(ao),so=Wr(ao),oo=Wr(ao);function Ma(n){if(n===ao)throw Error(t(174));return n}function Iu(n,r){switch(nn(oo,r),nn(so,n),nn(er,ao),n=r.nodeType,n){case 9:case 11:r=(r=r.documentElement)?r.namespaceURI:E(null,"");break;default:n=n===8?r.parentNode:r,r=n.namespaceURI||null,n=n.tagName,r=E(r,n)}an(er),nn(er,r)}function rs(){an(er),an(so),an(oo)}function $p(n){Ma(oo.current);var r=Ma(er.current),o=E(r,n.type);r!==o&&(nn(so,n),nn(er,o))}function ku(n){so.current===n&&(an(er),an(so))}var hn=Wr(0);function yl(n){for(var r=n;r!==null;){if(r.tag===13){var o=r.memoizedState;if(o!==null&&(o=o.dehydrated,o===null||o.data==="$?"||o.data==="$!"))return r}else if(r.tag===19&&r.memoizedProps.revealOrder!==void 0){if((r.flags&128)!==0)return r}else if(r.child!==null){r.child.return=r,r=r.child;continue}if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return null;r=r.return}r.sibling.return=r.return,r=r.sibling}return null}var zu=[];function Hu(){for(var n=0;n<zu.length;n++)zu[n]._workInProgressVersionPrimary=null;zu.length=0}var Ml=R.ReactCurrentDispatcher,Vu=R.ReactCurrentBatchConfig,Ea=0,pn=null,wn=null,Dn=null,El=!1,lo=!1,co=0,tx=0;function Xn(){throw Error(t(321))}function Gu(n,r){if(r===null)return!1;for(var o=0;o<r.length&&o<n.length;o++)if(!Vi(n[o],r[o]))return!1;return!0}function Bu(n,r,o,c,f,g){if(Ea=g,pn=r,r.memoizedState=null,r.updateQueue=null,r.lanes=0,Ml.current=n===null||n.memoizedState===null?ax:sx,n=o(c,f),lo){g=0;do{if(lo=!1,co=0,25<=g)throw Error(t(301));g+=1,Dn=wn=null,r.updateQueue=null,Ml.current=ox,n=o(c,f)}while(lo)}if(Ml.current=Al,r=wn!==null&&wn.next!==null,Ea=0,Dn=wn=pn=null,El=!1,r)throw Error(t(300));return n}function Wu(){var n=co!==0;return co=0,n}function tr(){var n={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Dn===null?pn.memoizedState=Dn=n:Dn=Dn.next=n,Dn}function bi(){if(wn===null){var n=pn.alternate;n=n!==null?n.memoizedState:null}else n=wn.next;var r=Dn===null?pn.memoizedState:Dn.next;if(r!==null)Dn=r,wn=n;else{if(n===null)throw Error(t(310));wn=n,n={memoizedState:wn.memoizedState,baseState:wn.baseState,baseQueue:wn.baseQueue,queue:wn.queue,next:null},Dn===null?pn.memoizedState=Dn=n:Dn=Dn.next=n}return Dn}function uo(n,r){return typeof r=="function"?r(n):r}function Xu(n){var r=bi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=wn,f=c.baseQueue,g=o.pending;if(g!==null){if(f!==null){var A=f.next;f.next=g.next,g.next=A}c.baseQueue=f=g,o.pending=null}if(f!==null){g=f.next,c=c.baseState;var O=A=null,G=null,he=g;do{var Te=he.lane;if((Ea&Te)===Te)G!==null&&(G=G.next={lane:0,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null}),c=he.hasEagerState?he.eagerState:n(c,he.action);else{var Ae={lane:Te,action:he.action,hasEagerState:he.hasEagerState,eagerState:he.eagerState,next:null};G===null?(O=G=Ae,A=c):G=G.next=Ae,pn.lanes|=Te,Ta|=Te}he=he.next}while(he!==null&&he!==g);G===null?A=c:G.next=O,Vi(c,r.memoizedState)||(si=!0),r.memoizedState=c,r.baseState=A,r.baseQueue=G,o.lastRenderedState=c}if(n=o.interleaved,n!==null){f=n;do g=f.lane,pn.lanes|=g,Ta|=g,f=f.next;while(f!==n)}else f===null&&(o.lanes=0);return[r.memoizedState,o.dispatch]}function $u(n){var r=bi(),o=r.queue;if(o===null)throw Error(t(311));o.lastRenderedReducer=n;var c=o.dispatch,f=o.pending,g=r.memoizedState;if(f!==null){o.pending=null;var A=f=f.next;do g=n(g,A.action),A=A.next;while(A!==f);Vi(g,r.memoizedState)||(si=!0),r.memoizedState=g,r.baseQueue===null&&(r.baseState=g),o.lastRenderedState=g}return[g,c]}function Yp(){}function qp(n,r){var o=pn,c=bi(),f=r(),g=!Vi(c.memoizedState,f);if(g&&(c.memoizedState=f,si=!0),c=c.queue,Yu(Zp.bind(null,o,c,n),[n]),c.getSnapshot!==r||g||Dn!==null&&Dn.memoizedState.tag&1){if(o.flags|=2048,fo(9,Kp.bind(null,o,c,f,r),void 0,null),Nn===null)throw Error(t(349));(Ea&30)!==0||jp(o,r,f)}return f}function jp(n,r,o){n.flags|=16384,n={getSnapshot:r,value:o},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.stores=[n]):(o=r.stores,o===null?r.stores=[n]:o.push(n))}function Kp(n,r,o,c){r.value=o,r.getSnapshot=c,Jp(r)&&Qp(n)}function Zp(n,r,o){return o(function(){Jp(r)&&Qp(n)})}function Jp(n){var r=n.getSnapshot;n=n.value;try{var o=r();return!Vi(n,o)}catch{return!0}}function Qp(n){var r=Sr(n,1);r!==null&&$i(r,n,1,-1)}function em(n){var r=tr();return typeof n=="function"&&(n=n()),r.memoizedState=r.baseState=n,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:uo,lastRenderedState:n},r.queue=n,n=n.dispatch=rx.bind(null,pn,n),[r.memoizedState,n]}function fo(n,r,o,c){return n={tag:n,create:r,destroy:o,deps:c,next:null},r=pn.updateQueue,r===null?(r={lastEffect:null,stores:null},pn.updateQueue=r,r.lastEffect=n.next=n):(o=r.lastEffect,o===null?r.lastEffect=n.next=n:(c=o.next,o.next=n,n.next=c,r.lastEffect=n)),n}function tm(){return bi().memoizedState}function Tl(n,r,o,c){var f=tr();pn.flags|=n,f.memoizedState=fo(1|r,o,void 0,c===void 0?null:c)}function wl(n,r,o,c){var f=bi();c=c===void 0?null:c;var g=void 0;if(wn!==null){var A=wn.memoizedState;if(g=A.destroy,c!==null&&Gu(c,A.deps)){f.memoizedState=fo(r,o,g,c);return}}pn.flags|=n,f.memoizedState=fo(1|r,o,g,c)}function nm(n,r){return Tl(8390656,8,n,r)}function Yu(n,r){return wl(2048,8,n,r)}function im(n,r){return wl(4,2,n,r)}function rm(n,r){return wl(4,4,n,r)}function am(n,r){if(typeof r=="function")return n=n(),r(n),function(){r(null)};if(r!=null)return n=n(),r.current=n,function(){r.current=null}}function sm(n,r,o){return o=o!=null?o.concat([n]):null,wl(4,4,am.bind(null,r,n),o)}function qu(){}function om(n,r){var o=bi();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Gu(r,c[1])?c[0]:(o.memoizedState=[n,r],n)}function lm(n,r){var o=bi();r=r===void 0?null:r;var c=o.memoizedState;return c!==null&&r!==null&&Gu(r,c[1])?c[0]:(n=n(),o.memoizedState=[n,r],n)}function cm(n,r,o){return(Ea&21)===0?(n.baseState&&(n.baseState=!1,si=!0),n.memoizedState=o):(Vi(o,r)||(o=Tn(),pn.lanes|=o,Ta|=o,n.baseState=!0),r)}function nx(n,r){var o=wt;wt=o!==0&&4>o?o:4,n(!0);var c=Vu.transition;Vu.transition={};try{n(!1),r()}finally{wt=o,Vu.transition=c}}function um(){return bi().memoizedState}function ix(n,r,o){var c=Jr(n);if(o={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null},dm(n))fm(r,o);else if(o=Gp(n,r,o,c),o!==null){var f=Qn();$i(o,n,c,f),hm(o,r,c)}}function rx(n,r,o){var c=Jr(n),f={lane:c,action:o,hasEagerState:!1,eagerState:null,next:null};if(dm(n))fm(r,f);else{var g=n.alternate;if(n.lanes===0&&(g===null||g.lanes===0)&&(g=r.lastRenderedReducer,g!==null))try{var A=r.lastRenderedState,O=g(A,o);if(f.hasEagerState=!0,f.eagerState=O,Vi(O,A)){var G=r.interleaved;G===null?(f.next=f,Fu(r)):(f.next=G.next,G.next=f),r.interleaved=f;return}}catch{}finally{}o=Gp(n,r,f,c),o!==null&&(f=Qn(),$i(o,n,c,f),hm(o,r,c))}}function dm(n){var r=n.alternate;return n===pn||r!==null&&r===pn}function fm(n,r){lo=El=!0;var o=n.pending;o===null?r.next=r:(r.next=o.next,o.next=r),n.pending=r}function hm(n,r,o){if((o&4194240)!==0){var c=r.lanes;c&=n.pendingLanes,o|=c,r.lanes=o,Bn(n,o)}}var Al={readContext:Ri,useCallback:Xn,useContext:Xn,useEffect:Xn,useImperativeHandle:Xn,useInsertionEffect:Xn,useLayoutEffect:Xn,useMemo:Xn,useReducer:Xn,useRef:Xn,useState:Xn,useDebugValue:Xn,useDeferredValue:Xn,useTransition:Xn,useMutableSource:Xn,useSyncExternalStore:Xn,useId:Xn,unstable_isNewReconciler:!1},ax={readContext:Ri,useCallback:function(n,r){return tr().memoizedState=[n,r===void 0?null:r],n},useContext:Ri,useEffect:nm,useImperativeHandle:function(n,r,o){return o=o!=null?o.concat([n]):null,Tl(4194308,4,am.bind(null,r,n),o)},useLayoutEffect:function(n,r){return Tl(4194308,4,n,r)},useInsertionEffect:function(n,r){return Tl(4,2,n,r)},useMemo:function(n,r){var o=tr();return r=r===void 0?null:r,n=n(),o.memoizedState=[n,r],n},useReducer:function(n,r,o){var c=tr();return r=o!==void 0?o(r):r,c.memoizedState=c.baseState=r,n={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:n,lastRenderedState:r},c.queue=n,n=n.dispatch=ix.bind(null,pn,n),[c.memoizedState,n]},useRef:function(n){var r=tr();return n={current:n},r.memoizedState=n},useState:em,useDebugValue:qu,useDeferredValue:function(n){return tr().memoizedState=n},useTransition:function(){var n=em(!1),r=n[0];return n=nx.bind(null,n[1]),tr().memoizedState=n,[r,n]},useMutableSource:function(){},useSyncExternalStore:function(n,r,o){var c=pn,f=tr();if(ln){if(o===void 0)throw Error(t(407));o=o()}else{if(o=r(),Nn===null)throw Error(t(349));(Ea&30)!==0||jp(c,r,o)}f.memoizedState=o;var g={value:o,getSnapshot:r};return f.queue=g,nm(Zp.bind(null,c,g,n),[n]),c.flags|=2048,fo(9,Kp.bind(null,c,g,o,r),void 0,null),o},useId:function(){var n=tr(),r=Nn.identifierPrefix;if(ln){var o=xr,c=_r;o=(c&~(1<<32-Ie(c)-1)).toString(32)+o,r=":"+r+"R"+o,o=co++,0<o&&(r+="H"+o.toString(32)),r+=":"}else o=tx++,r=":"+r+"r"+o.toString(32)+":";return n.memoizedState=r},unstable_isNewReconciler:!1},sx={readContext:Ri,useCallback:om,useContext:Ri,useEffect:Yu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:rm,useMemo:lm,useReducer:Xu,useRef:tm,useState:function(){return Xu(uo)},useDebugValue:qu,useDeferredValue:function(n){var r=bi();return cm(r,wn.memoizedState,n)},useTransition:function(){var n=Xu(uo)[0],r=bi().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:qp,useId:um,unstable_isNewReconciler:!1},ox={readContext:Ri,useCallback:om,useContext:Ri,useEffect:Yu,useImperativeHandle:sm,useInsertionEffect:im,useLayoutEffect:rm,useMemo:lm,useReducer:$u,useRef:tm,useState:function(){return $u(uo)},useDebugValue:qu,useDeferredValue:function(n){var r=bi();return wn===null?r.memoizedState=n:cm(r,wn.memoizedState,n)},useTransition:function(){var n=$u(uo)[0],r=bi().memoizedState;return[n,r]},useMutableSource:Yp,useSyncExternalStore:qp,useId:um,unstable_isNewReconciler:!1};function Bi(n,r){if(n&&n.defaultProps){r=Z({},r),n=n.defaultProps;for(var o in n)r[o]===void 0&&(r[o]=n[o]);return r}return r}function ju(n,r,o,c){r=n.memoizedState,o=o(c,r),o=o==null?r:Z({},r,o),n.memoizedState=o,n.lanes===0&&(n.updateQueue.baseState=o)}var Cl={isMounted:function(n){return(n=n._reactInternals)?Ct(n)===n:!1},enqueueSetState:function(n,r,o){n=n._reactInternals;var c=Qn(),f=Jr(n),g=yr(c,f);g.payload=r,o!=null&&(g.callback=o),r=qr(n,g,f),r!==null&&($i(r,n,f,c),xl(r,n,f))},enqueueReplaceState:function(n,r,o){n=n._reactInternals;var c=Qn(),f=Jr(n),g=yr(c,f);g.tag=1,g.payload=r,o!=null&&(g.callback=o),r=qr(n,g,f),r!==null&&($i(r,n,f,c),xl(r,n,f))},enqueueForceUpdate:function(n,r){n=n._reactInternals;var o=Qn(),c=Jr(n),f=yr(o,c);f.tag=2,r!=null&&(f.callback=r),r=qr(n,f,c),r!==null&&($i(r,n,c,o),xl(r,n,c))}};function pm(n,r,o,c,f,g,A){return n=n.stateNode,typeof n.shouldComponentUpdate=="function"?n.shouldComponentUpdate(c,g,A):r.prototype&&r.prototype.isPureReactComponent?!Zs(o,c)||!Zs(f,g):!0}function mm(n,r,o){var c=!1,f=Xr,g=r.contextType;return typeof g=="object"&&g!==null?g=Ri(g):(f=ai(r)?_a:Wn.current,c=r.contextTypes,g=(c=c!=null)?Za(n,f):Xr),r=new r(o,g),n.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,r.updater=Cl,n.stateNode=r,r._reactInternals=n,c&&(n=n.stateNode,n.__reactInternalMemoizedUnmaskedChildContext=f,n.__reactInternalMemoizedMaskedChildContext=g),r}function gm(n,r,o,c){n=r.state,typeof r.componentWillReceiveProps=="function"&&r.componentWillReceiveProps(o,c),typeof r.UNSAFE_componentWillReceiveProps=="function"&&r.UNSAFE_componentWillReceiveProps(o,c),r.state!==n&&Cl.enqueueReplaceState(r,r.state,null)}function Ku(n,r,o,c){var f=n.stateNode;f.props=o,f.state=n.memoizedState,f.refs={},Ou(n);var g=r.contextType;typeof g=="object"&&g!==null?f.context=Ri(g):(g=ai(r)?_a:Wn.current,f.context=Za(n,g)),f.state=n.memoizedState,g=r.getDerivedStateFromProps,typeof g=="function"&&(ju(n,r,g,o),f.state=n.memoizedState),typeof r.getDerivedStateFromProps=="function"||typeof f.getSnapshotBeforeUpdate=="function"||typeof f.UNSAFE_componentWillMount!="function"&&typeof f.componentWillMount!="function"||(r=f.state,typeof f.componentWillMount=="function"&&f.componentWillMount(),typeof f.UNSAFE_componentWillMount=="function"&&f.UNSAFE_componentWillMount(),r!==f.state&&Cl.enqueueReplaceState(f,f.state,null),Sl(n,o,f,c),f.state=n.memoizedState),typeof f.componentDidMount=="function"&&(n.flags|=4194308)}function as(n,r){try{var o="",c=r;do o+=Xe(c),c=c.return;while(c);var f=o}catch(g){f=`
Error generating stack: `+g.message+`
`+g.stack}return{value:n,source:r,stack:f,digest:null}}function Zu(n,r,o){return{value:n,source:null,stack:o??null,digest:r??null}}function Ju(n,r){try{console.error(r.value)}catch(o){setTimeout(function(){throw o})}}var lx=typeof WeakMap=="function"?WeakMap:Map;function vm(n,r,o){o=yr(-1,o),o.tag=3,o.payload={element:null};var c=r.value;return o.callback=function(){Ul||(Ul=!0,hd=c),Ju(n,r)},o}function _m(n,r,o){o=yr(-1,o),o.tag=3;var c=n.type.getDerivedStateFromError;if(typeof c=="function"){var f=r.value;o.payload=function(){return c(f)},o.callback=function(){Ju(n,r)}}var g=n.stateNode;return g!==null&&typeof g.componentDidCatch=="function"&&(o.callback=function(){Ju(n,r),typeof c!="function"&&(Kr===null?Kr=new Set([this]):Kr.add(this));var A=r.stack;this.componentDidCatch(r.value,{componentStack:A!==null?A:""})}),o}function xm(n,r,o){var c=n.pingCache;if(c===null){c=n.pingCache=new lx;var f=new Set;c.set(r,f)}else f=c.get(r),f===void 0&&(f=new Set,c.set(r,f));f.has(o)||(f.add(o),n=Mx.bind(null,n,r,o),r.then(n,n))}function Sm(n){do{var r;if((r=n.tag===13)&&(r=n.memoizedState,r=r!==null?r.dehydrated!==null:!0),r)return n;n=n.return}while(n!==null);return null}function ym(n,r,o,c,f){return(n.mode&1)===0?(n===r?n.flags|=65536:(n.flags|=128,o.flags|=131072,o.flags&=-52805,o.tag===1&&(o.alternate===null?o.tag=17:(r=yr(-1,1),r.tag=2,qr(o,r,1))),o.lanes|=1),n):(n.flags|=65536,n.lanes=f,n)}var cx=R.ReactCurrentOwner,si=!1;function Jn(n,r,o,c){r.child=n===null?Vp(r,null,o,c):ts(r,n.child,o,c)}function Mm(n,r,o,c,f){o=o.render;var g=r.ref;return is(r,f),c=Bu(n,r,o,c,g,f),o=Wu(),n!==null&&!si?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,Mr(n,r,f)):(ln&&o&&Au(r),r.flags|=1,Jn(n,r,c,f),r.child)}function Em(n,r,o,c,f){if(n===null){var g=o.type;return typeof g=="function"&&!Sd(g)&&g.defaultProps===void 0&&o.compare===null&&o.defaultProps===void 0?(r.tag=15,r.type=g,Tm(n,r,g,c,f)):(n=Hl(o.type,null,c,r,r.mode,f),n.ref=r.ref,n.return=r,r.child=n)}if(g=n.child,(n.lanes&f)===0){var A=g.memoizedProps;if(o=o.compare,o=o!==null?o:Zs,o(A,c)&&n.ref===r.ref)return Mr(n,r,f)}return r.flags|=1,n=ea(g,c),n.ref=r.ref,n.return=r,r.child=n}function Tm(n,r,o,c,f){if(n!==null){var g=n.memoizedProps;if(Zs(g,c)&&n.ref===r.ref)if(si=!1,r.pendingProps=c=g,(n.lanes&f)!==0)(n.flags&131072)!==0&&(si=!0);else return r.lanes=n.lanes,Mr(n,r,f)}return Qu(n,r,o,c,f)}function wm(n,r,o){var c=r.pendingProps,f=c.children,g=n!==null?n.memoizedState:null;if(c.mode==="hidden")if((r.mode&1)===0)r.memoizedState={baseLanes:0,cachePool:null,transitions:null},nn(os,_i),_i|=o;else{if((o&1073741824)===0)return n=g!==null?g.baseLanes|o:o,r.lanes=r.childLanes=1073741824,r.memoizedState={baseLanes:n,cachePool:null,transitions:null},r.updateQueue=null,nn(os,_i),_i|=n,null;r.memoizedState={baseLanes:0,cachePool:null,transitions:null},c=g!==null?g.baseLanes:o,nn(os,_i),_i|=c}else g!==null?(c=g.baseLanes|o,r.memoizedState=null):c=o,nn(os,_i),_i|=c;return Jn(n,r,f,o),r.child}function Am(n,r){var o=r.ref;(n===null&&o!==null||n!==null&&n.ref!==o)&&(r.flags|=512,r.flags|=2097152)}function Qu(n,r,o,c,f){var g=ai(o)?_a:Wn.current;return g=Za(r,g),is(r,f),o=Bu(n,r,o,c,g,f),c=Wu(),n!==null&&!si?(r.updateQueue=n.updateQueue,r.flags&=-2053,n.lanes&=~f,Mr(n,r,f)):(ln&&c&&Au(r),r.flags|=1,Jn(n,r,o,f),r.child)}function Cm(n,r,o,c,f){if(ai(o)){var g=!0;dl(r)}else g=!1;if(is(r,f),r.stateNode===null)bl(n,r),mm(r,o,c),Ku(r,o,c,f),c=!0;else if(n===null){var A=r.stateNode,O=r.memoizedProps;A.props=O;var G=A.context,he=o.contextType;typeof he=="object"&&he!==null?he=Ri(he):(he=ai(o)?_a:Wn.current,he=Za(r,he));var Te=o.getDerivedStateFromProps,Ae=typeof Te=="function"||typeof A.getSnapshotBeforeUpdate=="function";Ae||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==c||G!==he)&&gm(r,A,c,he),Yr=!1;var Ee=r.memoizedState;A.state=Ee,Sl(r,c,A,f),G=r.memoizedState,O!==c||Ee!==G||ri.current||Yr?(typeof Te=="function"&&(ju(r,o,Te,c),G=r.memoizedState),(O=Yr||pm(r,o,O,c,Ee,G,he))?(Ae||typeof A.UNSAFE_componentWillMount!="function"&&typeof A.componentWillMount!="function"||(typeof A.componentWillMount=="function"&&A.componentWillMount(),typeof A.UNSAFE_componentWillMount=="function"&&A.UNSAFE_componentWillMount()),typeof A.componentDidMount=="function"&&(r.flags|=4194308)):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),r.memoizedProps=c,r.memoizedState=G),A.props=c,A.state=G,A.context=he,c=O):(typeof A.componentDidMount=="function"&&(r.flags|=4194308),c=!1)}else{A=r.stateNode,Bp(n,r),O=r.memoizedProps,he=r.type===r.elementType?O:Bi(r.type,O),A.props=he,Ae=r.pendingProps,Ee=A.context,G=o.contextType,typeof G=="object"&&G!==null?G=Ri(G):(G=ai(o)?_a:Wn.current,G=Za(r,G));var $e=o.getDerivedStateFromProps;(Te=typeof $e=="function"||typeof A.getSnapshotBeforeUpdate=="function")||typeof A.UNSAFE_componentWillReceiveProps!="function"&&typeof A.componentWillReceiveProps!="function"||(O!==Ae||Ee!==G)&&gm(r,A,c,G),Yr=!1,Ee=r.memoizedState,A.state=Ee,Sl(r,c,A,f);var Je=r.memoizedState;O!==Ae||Ee!==Je||ri.current||Yr?(typeof $e=="function"&&(ju(r,o,$e,c),Je=r.memoizedState),(he=Yr||pm(r,o,he,c,Ee,Je,G)||!1)?(Te||typeof A.UNSAFE_componentWillUpdate!="function"&&typeof A.componentWillUpdate!="function"||(typeof A.componentWillUpdate=="function"&&A.componentWillUpdate(c,Je,G),typeof A.UNSAFE_componentWillUpdate=="function"&&A.UNSAFE_componentWillUpdate(c,Je,G)),typeof A.componentDidUpdate=="function"&&(r.flags|=4),typeof A.getSnapshotBeforeUpdate=="function"&&(r.flags|=1024)):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),r.memoizedProps=c,r.memoizedState=Je),A.props=c,A.state=Je,A.context=G,c=he):(typeof A.componentDidUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=4),typeof A.getSnapshotBeforeUpdate!="function"||O===n.memoizedProps&&Ee===n.memoizedState||(r.flags|=1024),c=!1)}return ed(n,r,o,c,g,f)}function ed(n,r,o,c,f,g){Am(n,r);var A=(r.flags&128)!==0;if(!c&&!A)return f&&Dp(r,o,!1),Mr(n,r,g);c=r.stateNode,cx.current=r;var O=A&&typeof o.getDerivedStateFromError!="function"?null:c.render();return r.flags|=1,n!==null&&A?(r.child=ts(r,n.child,null,g),r.child=ts(r,null,O,g)):Jn(n,r,O,g),r.memoizedState=c.state,f&&Dp(r,o,!0),r.child}function Rm(n){var r=n.stateNode;r.pendingContext?Pp(n,r.pendingContext,r.pendingContext!==r.context):r.context&&Pp(n,r.context,!1),Iu(n,r.containerInfo)}function bm(n,r,o,c,f){return es(),Pu(f),r.flags|=256,Jn(n,r,o,c),r.child}var td={dehydrated:null,treeContext:null,retryLane:0};function nd(n){return{baseLanes:n,cachePool:null,transitions:null}}function Pm(n,r,o){var c=r.pendingProps,f=hn.current,g=!1,A=(r.flags&128)!==0,O;if((O=A)||(O=n!==null&&n.memoizedState===null?!1:(f&2)!==0),O?(g=!0,r.flags&=-129):(n===null||n.memoizedState!==null)&&(f|=1),nn(hn,f&1),n===null)return bu(r),n=r.memoizedState,n!==null&&(n=n.dehydrated,n!==null)?((r.mode&1)===0?r.lanes=1:n.data==="$!"?r.lanes=8:r.lanes=1073741824,null):(A=c.children,n=c.fallback,g?(c=r.mode,g=r.child,A={mode:"hidden",children:A},(c&1)===0&&g!==null?(g.childLanes=0,g.pendingProps=A):g=Vl(A,c,0,null),n=Ra(n,c,o,null),g.return=r,n.return=r,g.sibling=n,r.child=g,r.child.memoizedState=nd(o),r.memoizedState=td,n):id(r,A));if(f=n.memoizedState,f!==null&&(O=f.dehydrated,O!==null))return ux(n,r,A,c,O,f,o);if(g){g=c.fallback,A=r.mode,f=n.child,O=f.sibling;var G={mode:"hidden",children:c.children};return(A&1)===0&&r.child!==f?(c=r.child,c.childLanes=0,c.pendingProps=G,r.deletions=null):(c=ea(f,G),c.subtreeFlags=f.subtreeFlags&14680064),O!==null?g=ea(O,g):(g=Ra(g,A,o,null),g.flags|=2),g.return=r,c.return=r,c.sibling=g,r.child=c,c=g,g=r.child,A=n.child.memoizedState,A=A===null?nd(o):{baseLanes:A.baseLanes|o,cachePool:null,transitions:A.transitions},g.memoizedState=A,g.childLanes=n.childLanes&~o,r.memoizedState=td,c}return g=n.child,n=g.sibling,c=ea(g,{mode:"visible",children:c.children}),(r.mode&1)===0&&(c.lanes=o),c.return=r,c.sibling=null,n!==null&&(o=r.deletions,o===null?(r.deletions=[n],r.flags|=16):o.push(n)),r.child=c,r.memoizedState=null,c}function id(n,r){return r=Vl({mode:"visible",children:r},n.mode,0,null),r.return=n,n.child=r}function Rl(n,r,o,c){return c!==null&&Pu(c),ts(r,n.child,null,o),n=id(r,r.pendingProps.children),n.flags|=2,r.memoizedState=null,n}function ux(n,r,o,c,f,g,A){if(o)return r.flags&256?(r.flags&=-257,c=Zu(Error(t(422))),Rl(n,r,A,c)):r.memoizedState!==null?(r.child=n.child,r.flags|=128,null):(g=c.fallback,f=r.mode,c=Vl({mode:"visible",children:c.children},f,0,null),g=Ra(g,f,A,null),g.flags|=2,c.return=r,g.return=r,c.sibling=g,r.child=c,(r.mode&1)!==0&&ts(r,n.child,null,A),r.child.memoizedState=nd(A),r.memoizedState=td,g);if((r.mode&1)===0)return Rl(n,r,A,null);if(f.data==="$!"){if(c=f.nextSibling&&f.nextSibling.dataset,c)var O=c.dgst;return c=O,g=Error(t(419)),c=Zu(g,c,void 0),Rl(n,r,A,c)}if(O=(A&n.childLanes)!==0,si||O){if(c=Nn,c!==null){switch(A&-A){case 4:f=2;break;case 16:f=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:f=32;break;case 536870912:f=268435456;break;default:f=0}f=(f&(c.suspendedLanes|A))!==0?0:f,f!==0&&f!==g.retryLane&&(g.retryLane=f,Sr(n,f),$i(c,n,f,-1))}return xd(),c=Zu(Error(t(421))),Rl(n,r,A,c)}return f.data==="$?"?(r.flags|=128,r.child=n.child,r=Ex.bind(null,n),f._reactRetry=r,null):(n=g.treeContext,vi=Br(f.nextSibling),gi=r,ln=!0,Gi=null,n!==null&&(Ai[Ci++]=_r,Ai[Ci++]=xr,Ai[Ci++]=xa,_r=n.id,xr=n.overflow,xa=r),r=id(r,c.children),r.flags|=4096,r)}function Lm(n,r,o){n.lanes|=r;var c=n.alternate;c!==null&&(c.lanes|=r),Uu(n.return,r,o)}function rd(n,r,o,c,f){var g=n.memoizedState;g===null?n.memoizedState={isBackwards:r,rendering:null,renderingStartTime:0,last:c,tail:o,tailMode:f}:(g.isBackwards=r,g.rendering=null,g.renderingStartTime=0,g.last=c,g.tail=o,g.tailMode=f)}function Dm(n,r,o){var c=r.pendingProps,f=c.revealOrder,g=c.tail;if(Jn(n,r,c.children,o),c=hn.current,(c&2)!==0)c=c&1|2,r.flags|=128;else{if(n!==null&&(n.flags&128)!==0)e:for(n=r.child;n!==null;){if(n.tag===13)n.memoizedState!==null&&Lm(n,o,r);else if(n.tag===19)Lm(n,o,r);else if(n.child!==null){n.child.return=n,n=n.child;continue}if(n===r)break e;for(;n.sibling===null;){if(n.return===null||n.return===r)break e;n=n.return}n.sibling.return=n.return,n=n.sibling}c&=1}if(nn(hn,c),(r.mode&1)===0)r.memoizedState=null;else switch(f){case"forwards":for(o=r.child,f=null;o!==null;)n=o.alternate,n!==null&&yl(n)===null&&(f=o),o=o.sibling;o=f,o===null?(f=r.child,r.child=null):(f=o.sibling,o.sibling=null),rd(r,!1,f,o,g);break;case"backwards":for(o=null,f=r.child,r.child=null;f!==null;){if(n=f.alternate,n!==null&&yl(n)===null){r.child=f;break}n=f.sibling,f.sibling=o,o=f,f=n}rd(r,!0,o,null,g);break;case"together":rd(r,!1,null,null,void 0);break;default:r.memoizedState=null}return r.child}function bl(n,r){(r.mode&1)===0&&n!==null&&(n.alternate=null,r.alternate=null,r.flags|=2)}function Mr(n,r,o){if(n!==null&&(r.dependencies=n.dependencies),Ta|=r.lanes,(o&r.childLanes)===0)return null;if(n!==null&&r.child!==n.child)throw Error(t(153));if(r.child!==null){for(n=r.child,o=ea(n,n.pendingProps),r.child=o,o.return=r;n.sibling!==null;)n=n.sibling,o=o.sibling=ea(n,n.pendingProps),o.return=r;o.sibling=null}return r.child}function dx(n,r,o){switch(r.tag){case 3:Rm(r),es();break;case 5:$p(r);break;case 1:ai(r.type)&&dl(r);break;case 4:Iu(r,r.stateNode.containerInfo);break;case 10:var c=r.type._context,f=r.memoizedProps.value;nn(vl,c._currentValue),c._currentValue=f;break;case 13:if(c=r.memoizedState,c!==null)return c.dehydrated!==null?(nn(hn,hn.current&1),r.flags|=128,null):(o&r.child.childLanes)!==0?Pm(n,r,o):(nn(hn,hn.current&1),n=Mr(n,r,o),n!==null?n.sibling:null);nn(hn,hn.current&1);break;case 19:if(c=(o&r.childLanes)!==0,(n.flags&128)!==0){if(c)return Dm(n,r,o);r.flags|=128}if(f=r.memoizedState,f!==null&&(f.rendering=null,f.tail=null,f.lastEffect=null),nn(hn,hn.current),c)break;return null;case 22:case 23:return r.lanes=0,wm(n,r,o)}return Mr(n,r,o)}var Nm,ad,Um,Fm;Nm=function(n,r){for(var o=r.child;o!==null;){if(o.tag===5||o.tag===6)n.appendChild(o.stateNode);else if(o.tag!==4&&o.child!==null){o.child.return=o,o=o.child;continue}if(o===r)break;for(;o.sibling===null;){if(o.return===null||o.return===r)return;o=o.return}o.sibling.return=o.return,o=o.sibling}},ad=function(){},Um=function(n,r,o,c){var f=n.memoizedProps;if(f!==c){n=r.stateNode,Ma(er.current);var g=null;switch(o){case"input":f=_t(n,f),c=_t(n,c),g=[];break;case"select":f=Z({},f,{value:void 0}),c=Z({},c,{value:void 0}),g=[];break;case"textarea":f=Zt(n,f),c=Zt(n,c),g=[];break;default:typeof f.onClick!="function"&&typeof c.onClick=="function"&&(n.onclick=ll)}Qe(o,c);var A;o=null;for(he in f)if(!c.hasOwnProperty(he)&&f.hasOwnProperty(he)&&f[he]!=null)if(he==="style"){var O=f[he];for(A in O)O.hasOwnProperty(A)&&(o||(o={}),o[A]="")}else he!=="dangerouslySetInnerHTML"&&he!=="children"&&he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&he!=="autoFocus"&&(s.hasOwnProperty(he)?g||(g=[]):(g=g||[]).push(he,null));for(he in c){var G=c[he];if(O=f!=null?f[he]:void 0,c.hasOwnProperty(he)&&G!==O&&(G!=null||O!=null))if(he==="style")if(O){for(A in O)!O.hasOwnProperty(A)||G&&G.hasOwnProperty(A)||(o||(o={}),o[A]="");for(A in G)G.hasOwnProperty(A)&&O[A]!==G[A]&&(o||(o={}),o[A]=G[A])}else o||(g||(g=[]),g.push(he,o)),o=G;else he==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,O=O?O.__html:void 0,G!=null&&O!==G&&(g=g||[]).push(he,G)):he==="children"?typeof G!="string"&&typeof G!="number"||(g=g||[]).push(he,""+G):he!=="suppressContentEditableWarning"&&he!=="suppressHydrationWarning"&&(s.hasOwnProperty(he)?(G!=null&&he==="onScroll"&&rn("scroll",n),g||O===G||(g=[])):(g=g||[]).push(he,G))}o&&(g=g||[]).push("style",o);var he=g;(r.updateQueue=he)&&(r.flags|=4)}},Fm=function(n,r,o,c){o!==c&&(r.flags|=4)};function ho(n,r){if(!ln)switch(n.tailMode){case"hidden":r=n.tail;for(var o=null;r!==null;)r.alternate!==null&&(o=r),r=r.sibling;o===null?n.tail=null:o.sibling=null;break;case"collapsed":o=n.tail;for(var c=null;o!==null;)o.alternate!==null&&(c=o),o=o.sibling;c===null?r||n.tail===null?n.tail=null:n.tail.sibling=null:c.sibling=null}}function $n(n){var r=n.alternate!==null&&n.alternate.child===n.child,o=0,c=0;if(r)for(var f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags&14680064,c|=f.flags&14680064,f.return=n,f=f.sibling;else for(f=n.child;f!==null;)o|=f.lanes|f.childLanes,c|=f.subtreeFlags,c|=f.flags,f.return=n,f=f.sibling;return n.subtreeFlags|=c,n.childLanes=o,r}function fx(n,r,o){var c=r.pendingProps;switch(Cu(r),r.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return $n(r),null;case 1:return ai(r.type)&&ul(),$n(r),null;case 3:return c=r.stateNode,rs(),an(ri),an(Wn),Hu(),c.pendingContext&&(c.context=c.pendingContext,c.pendingContext=null),(n===null||n.child===null)&&(ml(r)?r.flags|=4:n===null||n.memoizedState.isDehydrated&&(r.flags&256)===0||(r.flags|=1024,Gi!==null&&(gd(Gi),Gi=null))),ad(n,r),$n(r),null;case 5:ku(r);var f=Ma(oo.current);if(o=r.type,n!==null&&r.stateNode!=null)Um(n,r,o,c,f),n.ref!==r.ref&&(r.flags|=512,r.flags|=2097152);else{if(!c){if(r.stateNode===null)throw Error(t(166));return $n(r),null}if(n=Ma(er.current),ml(r)){c=r.stateNode,o=r.type;var g=r.memoizedProps;switch(c[Qi]=r,c[no]=g,n=(r.mode&1)!==0,o){case"dialog":rn("cancel",c),rn("close",c);break;case"iframe":case"object":case"embed":rn("load",c);break;case"video":case"audio":for(f=0;f<Qs.length;f++)rn(Qs[f],c);break;case"source":rn("error",c);break;case"img":case"image":case"link":rn("error",c),rn("load",c);break;case"details":rn("toggle",c);break;case"input":ct(c,g),rn("invalid",c);break;case"select":c._wrapperState={wasMultiple:!!g.multiple},rn("invalid",c);break;case"textarea":Y(c,g),rn("invalid",c)}Qe(o,g),f=null;for(var A in g)if(g.hasOwnProperty(A)){var O=g[A];A==="children"?typeof O=="string"?c.textContent!==O&&(g.suppressHydrationWarning!==!0&&ol(c.textContent,O,n),f=["children",O]):typeof O=="number"&&c.textContent!==""+O&&(g.suppressHydrationWarning!==!0&&ol(c.textContent,O,n),f=["children",""+O]):s.hasOwnProperty(A)&&O!=null&&A==="onScroll"&&rn("scroll",c)}switch(o){case"input":He(c),Xt(c,g,!0);break;case"textarea":He(c),Rt(c);break;case"select":case"option":break;default:typeof g.onClick=="function"&&(c.onclick=ll)}c=f,r.updateQueue=c,c!==null&&(r.flags|=4)}else{A=f.nodeType===9?f:f.ownerDocument,n==="http://www.w3.org/1999/xhtml"&&(n=N(o)),n==="http://www.w3.org/1999/xhtml"?o==="script"?(n=A.createElement("div"),n.innerHTML="<script><\/script>",n=n.removeChild(n.firstChild)):typeof c.is=="string"?n=A.createElement(o,{is:c.is}):(n=A.createElement(o),o==="select"&&(A=n,c.multiple?A.multiple=!0:c.size&&(A.size=c.size))):n=A.createElementNS(n,o),n[Qi]=r,n[no]=c,Nm(n,r,!1,!1),r.stateNode=n;e:{switch(A=Oe(o,c),o){case"dialog":rn("cancel",n),rn("close",n),f=c;break;case"iframe":case"object":case"embed":rn("load",n),f=c;break;case"video":case"audio":for(f=0;f<Qs.length;f++)rn(Qs[f],n);f=c;break;case"source":rn("error",n),f=c;break;case"img":case"image":case"link":rn("error",n),rn("load",n),f=c;break;case"details":rn("toggle",n),f=c;break;case"input":ct(n,c),f=_t(n,c),rn("invalid",n);break;case"option":f=c;break;case"select":n._wrapperState={wasMultiple:!!c.multiple},f=Z({},c,{value:void 0}),rn("invalid",n);break;case"textarea":Y(n,c),f=Zt(n,c),rn("invalid",n);break;default:f=c}Qe(o,f),O=f;for(g in O)if(O.hasOwnProperty(g)){var G=O[g];g==="style"?xe(n,G):g==="dangerouslySetInnerHTML"?(G=G?G.__html:void 0,G!=null&&ue(n,G)):g==="children"?typeof G=="string"?(o!=="textarea"||G!=="")&&ge(n,G):typeof G=="number"&&ge(n,""+G):g!=="suppressContentEditableWarning"&&g!=="suppressHydrationWarning"&&g!=="autoFocus"&&(s.hasOwnProperty(g)?G!=null&&g==="onScroll"&&rn("scroll",n):G!=null&&V(n,g,G,A))}switch(o){case"input":He(n),Xt(n,c,!1);break;case"textarea":He(n),Rt(n);break;case"option":c.value!=null&&n.setAttribute("value",""+pe(c.value));break;case"select":n.multiple=!!c.multiple,g=c.value,g!=null?Nt(n,!!c.multiple,g,!1):c.defaultValue!=null&&Nt(n,!!c.multiple,c.defaultValue,!0);break;default:typeof f.onClick=="function"&&(n.onclick=ll)}switch(o){case"button":case"input":case"select":case"textarea":c=!!c.autoFocus;break e;case"img":c=!0;break e;default:c=!1}}c&&(r.flags|=4)}r.ref!==null&&(r.flags|=512,r.flags|=2097152)}return $n(r),null;case 6:if(n&&r.stateNode!=null)Fm(n,r,n.memoizedProps,c);else{if(typeof c!="string"&&r.stateNode===null)throw Error(t(166));if(o=Ma(oo.current),Ma(er.current),ml(r)){if(c=r.stateNode,o=r.memoizedProps,c[Qi]=r,(g=c.nodeValue!==o)&&(n=gi,n!==null))switch(n.tag){case 3:ol(c.nodeValue,o,(n.mode&1)!==0);break;case 5:n.memoizedProps.suppressHydrationWarning!==!0&&ol(c.nodeValue,o,(n.mode&1)!==0)}g&&(r.flags|=4)}else c=(o.nodeType===9?o:o.ownerDocument).createTextNode(c),c[Qi]=r,r.stateNode=c}return $n(r),null;case 13:if(an(hn),c=r.memoizedState,n===null||n.memoizedState!==null&&n.memoizedState.dehydrated!==null){if(ln&&vi!==null&&(r.mode&1)!==0&&(r.flags&128)===0)kp(),es(),r.flags|=98560,g=!1;else if(g=ml(r),c!==null&&c.dehydrated!==null){if(n===null){if(!g)throw Error(t(318));if(g=r.memoizedState,g=g!==null?g.dehydrated:null,!g)throw Error(t(317));g[Qi]=r}else es(),(r.flags&128)===0&&(r.memoizedState=null),r.flags|=4;$n(r),g=!1}else Gi!==null&&(gd(Gi),Gi=null),g=!0;if(!g)return r.flags&65536?r:null}return(r.flags&128)!==0?(r.lanes=o,r):(c=c!==null,c!==(n!==null&&n.memoizedState!==null)&&c&&(r.child.flags|=8192,(r.mode&1)!==0&&(n===null||(hn.current&1)!==0?An===0&&(An=3):xd())),r.updateQueue!==null&&(r.flags|=4),$n(r),null);case 4:return rs(),ad(n,r),n===null&&eo(r.stateNode.containerInfo),$n(r),null;case 10:return Nu(r.type._context),$n(r),null;case 17:return ai(r.type)&&ul(),$n(r),null;case 19:if(an(hn),g=r.memoizedState,g===null)return $n(r),null;if(c=(r.flags&128)!==0,A=g.rendering,A===null)if(c)ho(g,!1);else{if(An!==0||n!==null&&(n.flags&128)!==0)for(n=r.child;n!==null;){if(A=yl(n),A!==null){for(r.flags|=128,ho(g,!1),c=A.updateQueue,c!==null&&(r.updateQueue=c,r.flags|=4),r.subtreeFlags=0,c=o,o=r.child;o!==null;)g=o,n=c,g.flags&=14680066,A=g.alternate,A===null?(g.childLanes=0,g.lanes=n,g.child=null,g.subtreeFlags=0,g.memoizedProps=null,g.memoizedState=null,g.updateQueue=null,g.dependencies=null,g.stateNode=null):(g.childLanes=A.childLanes,g.lanes=A.lanes,g.child=A.child,g.subtreeFlags=0,g.deletions=null,g.memoizedProps=A.memoizedProps,g.memoizedState=A.memoizedState,g.updateQueue=A.updateQueue,g.type=A.type,n=A.dependencies,g.dependencies=n===null?null:{lanes:n.lanes,firstContext:n.firstContext}),o=o.sibling;return nn(hn,hn.current&1|2),r.child}n=n.sibling}g.tail!==null&&$t()>ls&&(r.flags|=128,c=!0,ho(g,!1),r.lanes=4194304)}else{if(!c)if(n=yl(A),n!==null){if(r.flags|=128,c=!0,o=n.updateQueue,o!==null&&(r.updateQueue=o,r.flags|=4),ho(g,!0),g.tail===null&&g.tailMode==="hidden"&&!A.alternate&&!ln)return $n(r),null}else 2*$t()-g.renderingStartTime>ls&&o!==1073741824&&(r.flags|=128,c=!0,ho(g,!1),r.lanes=4194304);g.isBackwards?(A.sibling=r.child,r.child=A):(o=g.last,o!==null?o.sibling=A:r.child=A,g.last=A)}return g.tail!==null?(r=g.tail,g.rendering=r,g.tail=r.sibling,g.renderingStartTime=$t(),r.sibling=null,o=hn.current,nn(hn,c?o&1|2:o&1),r):($n(r),null);case 22:case 23:return _d(),c=r.memoizedState!==null,n!==null&&n.memoizedState!==null!==c&&(r.flags|=8192),c&&(r.mode&1)!==0?(_i&1073741824)!==0&&($n(r),r.subtreeFlags&6&&(r.flags|=8192)):$n(r),null;case 24:return null;case 25:return null}throw Error(t(156,r.tag))}function hx(n,r){switch(Cu(r),r.tag){case 1:return ai(r.type)&&ul(),n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 3:return rs(),an(ri),an(Wn),Hu(),n=r.flags,(n&65536)!==0&&(n&128)===0?(r.flags=n&-65537|128,r):null;case 5:return ku(r),null;case 13:if(an(hn),n=r.memoizedState,n!==null&&n.dehydrated!==null){if(r.alternate===null)throw Error(t(340));es()}return n=r.flags,n&65536?(r.flags=n&-65537|128,r):null;case 19:return an(hn),null;case 4:return rs(),null;case 10:return Nu(r.type._context),null;case 22:case 23:return _d(),null;case 24:return null;default:return null}}var Pl=!1,Yn=!1,px=typeof WeakSet=="function"?WeakSet:Set,je=null;function ss(n,r){var o=n.ref;if(o!==null)if(typeof o=="function")try{o(null)}catch(c){vn(n,r,c)}else o.current=null}function sd(n,r,o){try{o()}catch(c){vn(n,r,c)}}var Om=!1;function mx(n,r){if(_u=Ko,n=pp(),uu(n)){if("selectionStart"in n)var o={start:n.selectionStart,end:n.selectionEnd};else e:{o=(o=n.ownerDocument)&&o.defaultView||window;var c=o.getSelection&&o.getSelection();if(c&&c.rangeCount!==0){o=c.anchorNode;var f=c.anchorOffset,g=c.focusNode;c=c.focusOffset;try{o.nodeType,g.nodeType}catch{o=null;break e}var A=0,O=-1,G=-1,he=0,Te=0,Ae=n,Ee=null;t:for(;;){for(var $e;Ae!==o||f!==0&&Ae.nodeType!==3||(O=A+f),Ae!==g||c!==0&&Ae.nodeType!==3||(G=A+c),Ae.nodeType===3&&(A+=Ae.nodeValue.length),($e=Ae.firstChild)!==null;)Ee=Ae,Ae=$e;for(;;){if(Ae===n)break t;if(Ee===o&&++he===f&&(O=A),Ee===g&&++Te===c&&(G=A),($e=Ae.nextSibling)!==null)break;Ae=Ee,Ee=Ae.parentNode}Ae=$e}o=O===-1||G===-1?null:{start:O,end:G}}else o=null}o=o||{start:0,end:0}}else o=null;for(xu={focusedElem:n,selectionRange:o},Ko=!1,je=r;je!==null;)if(r=je,n=r.child,(r.subtreeFlags&1028)!==0&&n!==null)n.return=r,je=n;else for(;je!==null;){r=je;try{var Je=r.alternate;if((r.flags&1024)!==0)switch(r.tag){case 0:case 11:case 15:break;case 1:if(Je!==null){var nt=Je.memoizedProps,yn=Je.memoizedState,ae=r.stateNode,j=ae.getSnapshotBeforeUpdate(r.elementType===r.type?nt:Bi(r.type,nt),yn);ae.__reactInternalSnapshotBeforeUpdate=j}break;case 3:var de=r.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(be){vn(r,r.return,be)}if(n=r.sibling,n!==null){n.return=r.return,je=n;break}je=r.return}return Je=Om,Om=!1,Je}function po(n,r,o){var c=r.updateQueue;if(c=c!==null?c.lastEffect:null,c!==null){var f=c=c.next;do{if((f.tag&n)===n){var g=f.destroy;f.destroy=void 0,g!==void 0&&sd(r,o,g)}f=f.next}while(f!==c)}}function Ll(n,r){if(r=r.updateQueue,r=r!==null?r.lastEffect:null,r!==null){var o=r=r.next;do{if((o.tag&n)===n){var c=o.create;o.destroy=c()}o=o.next}while(o!==r)}}function od(n){var r=n.ref;if(r!==null){var o=n.stateNode;switch(n.tag){case 5:n=o;break;default:n=o}typeof r=="function"?r(n):r.current=n}}function Im(n){var r=n.alternate;r!==null&&(n.alternate=null,Im(r)),n.child=null,n.deletions=null,n.sibling=null,n.tag===5&&(r=n.stateNode,r!==null&&(delete r[Qi],delete r[no],delete r[Eu],delete r[Z_],delete r[J_])),n.stateNode=null,n.return=null,n.dependencies=null,n.memoizedProps=null,n.memoizedState=null,n.pendingProps=null,n.stateNode=null,n.updateQueue=null}function km(n){return n.tag===5||n.tag===3||n.tag===4}function zm(n){e:for(;;){for(;n.sibling===null;){if(n.return===null||km(n.return))return null;n=n.return}for(n.sibling.return=n.return,n=n.sibling;n.tag!==5&&n.tag!==6&&n.tag!==18;){if(n.flags&2||n.child===null||n.tag===4)continue e;n.child.return=n,n=n.child}if(!(n.flags&2))return n.stateNode}}function ld(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.nodeType===8?o.parentNode.insertBefore(n,r):o.insertBefore(n,r):(o.nodeType===8?(r=o.parentNode,r.insertBefore(n,o)):(r=o,r.appendChild(n)),o=o._reactRootContainer,o!=null||r.onclick!==null||(r.onclick=ll));else if(c!==4&&(n=n.child,n!==null))for(ld(n,r,o),n=n.sibling;n!==null;)ld(n,r,o),n=n.sibling}function cd(n,r,o){var c=n.tag;if(c===5||c===6)n=n.stateNode,r?o.insertBefore(n,r):o.appendChild(n);else if(c!==4&&(n=n.child,n!==null))for(cd(n,r,o),n=n.sibling;n!==null;)cd(n,r,o),n=n.sibling}var kn=null,Wi=!1;function jr(n,r,o){for(o=o.child;o!==null;)Hm(n,r,o),o=o.sibling}function Hm(n,r,o){if(ne&&typeof ne.onCommitFiberUnmount=="function")try{ne.onCommitFiberUnmount(re,o)}catch{}switch(o.tag){case 5:Yn||ss(o,r);case 6:var c=kn,f=Wi;kn=null,jr(n,r,o),kn=c,Wi=f,kn!==null&&(Wi?(n=kn,o=o.stateNode,n.nodeType===8?n.parentNode.removeChild(o):n.removeChild(o)):kn.removeChild(o.stateNode));break;case 18:kn!==null&&(Wi?(n=kn,o=o.stateNode,n.nodeType===8?Mu(n.parentNode,o):n.nodeType===1&&Mu(n,o),Xs(n)):Mu(kn,o.stateNode));break;case 4:c=kn,f=Wi,kn=o.stateNode.containerInfo,Wi=!0,jr(n,r,o),kn=c,Wi=f;break;case 0:case 11:case 14:case 15:if(!Yn&&(c=o.updateQueue,c!==null&&(c=c.lastEffect,c!==null))){f=c=c.next;do{var g=f,A=g.destroy;g=g.tag,A!==void 0&&((g&2)!==0||(g&4)!==0)&&sd(o,r,A),f=f.next}while(f!==c)}jr(n,r,o);break;case 1:if(!Yn&&(ss(o,r),c=o.stateNode,typeof c.componentWillUnmount=="function"))try{c.props=o.memoizedProps,c.state=o.memoizedState,c.componentWillUnmount()}catch(O){vn(o,r,O)}jr(n,r,o);break;case 21:jr(n,r,o);break;case 22:o.mode&1?(Yn=(c=Yn)||o.memoizedState!==null,jr(n,r,o),Yn=c):jr(n,r,o);break;default:jr(n,r,o)}}function Vm(n){var r=n.updateQueue;if(r!==null){n.updateQueue=null;var o=n.stateNode;o===null&&(o=n.stateNode=new px),r.forEach(function(c){var f=Tx.bind(null,n,c);o.has(c)||(o.add(c),c.then(f,f))})}}function Xi(n,r){var o=r.deletions;if(o!==null)for(var c=0;c<o.length;c++){var f=o[c];try{var g=n,A=r,O=A;e:for(;O!==null;){switch(O.tag){case 5:kn=O.stateNode,Wi=!1;break e;case 3:kn=O.stateNode.containerInfo,Wi=!0;break e;case 4:kn=O.stateNode.containerInfo,Wi=!0;break e}O=O.return}if(kn===null)throw Error(t(160));Hm(g,A,f),kn=null,Wi=!1;var G=f.alternate;G!==null&&(G.return=null),f.return=null}catch(he){vn(f,r,he)}}if(r.subtreeFlags&12854)for(r=r.child;r!==null;)Gm(r,n),r=r.sibling}function Gm(n,r){var o=n.alternate,c=n.flags;switch(n.tag){case 0:case 11:case 14:case 15:if(Xi(r,n),nr(n),c&4){try{po(3,n,n.return),Ll(3,n)}catch(nt){vn(n,n.return,nt)}try{po(5,n,n.return)}catch(nt){vn(n,n.return,nt)}}break;case 1:Xi(r,n),nr(n),c&512&&o!==null&&ss(o,o.return);break;case 5:if(Xi(r,n),nr(n),c&512&&o!==null&&ss(o,o.return),n.flags&32){var f=n.stateNode;try{ge(f,"")}catch(nt){vn(n,n.return,nt)}}if(c&4&&(f=n.stateNode,f!=null)){var g=n.memoizedProps,A=o!==null?o.memoizedProps:g,O=n.type,G=n.updateQueue;if(n.updateQueue=null,G!==null)try{O==="input"&&g.type==="radio"&&g.name!=null&&Vt(f,g),Oe(O,A);var he=Oe(O,g);for(A=0;A<G.length;A+=2){var Te=G[A],Ae=G[A+1];Te==="style"?xe(f,Ae):Te==="dangerouslySetInnerHTML"?ue(f,Ae):Te==="children"?ge(f,Ae):V(f,Te,Ae,he)}switch(O){case"input":Mt(f,g);break;case"textarea":_n(f,g);break;case"select":var Ee=f._wrapperState.wasMultiple;f._wrapperState.wasMultiple=!!g.multiple;var $e=g.value;$e!=null?Nt(f,!!g.multiple,$e,!1):Ee!==!!g.multiple&&(g.defaultValue!=null?Nt(f,!!g.multiple,g.defaultValue,!0):Nt(f,!!g.multiple,g.multiple?[]:"",!1))}f[no]=g}catch(nt){vn(n,n.return,nt)}}break;case 6:if(Xi(r,n),nr(n),c&4){if(n.stateNode===null)throw Error(t(162));f=n.stateNode,g=n.memoizedProps;try{f.nodeValue=g}catch(nt){vn(n,n.return,nt)}}break;case 3:if(Xi(r,n),nr(n),c&4&&o!==null&&o.memoizedState.isDehydrated)try{Xs(r.containerInfo)}catch(nt){vn(n,n.return,nt)}break;case 4:Xi(r,n),nr(n);break;case 13:Xi(r,n),nr(n),f=n.child,f.flags&8192&&(g=f.memoizedState!==null,f.stateNode.isHidden=g,!g||f.alternate!==null&&f.alternate.memoizedState!==null||(fd=$t())),c&4&&Vm(n);break;case 22:if(Te=o!==null&&o.memoizedState!==null,n.mode&1?(Yn=(he=Yn)||Te,Xi(r,n),Yn=he):Xi(r,n),nr(n),c&8192){if(he=n.memoizedState!==null,(n.stateNode.isHidden=he)&&!Te&&(n.mode&1)!==0)for(je=n,Te=n.child;Te!==null;){for(Ae=je=Te;je!==null;){switch(Ee=je,$e=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:po(4,Ee,Ee.return);break;case 1:ss(Ee,Ee.return);var Je=Ee.stateNode;if(typeof Je.componentWillUnmount=="function"){c=Ee,o=Ee.return;try{r=c,Je.props=r.memoizedProps,Je.state=r.memoizedState,Je.componentWillUnmount()}catch(nt){vn(c,o,nt)}}break;case 5:ss(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){Xm(Ae);continue}}$e!==null?($e.return=Ee,je=$e):Xm(Ae)}Te=Te.sibling}e:for(Te=null,Ae=n;;){if(Ae.tag===5){if(Te===null){Te=Ae;try{f=Ae.stateNode,he?(g=f.style,typeof g.setProperty=="function"?g.setProperty("display","none","important"):g.display="none"):(O=Ae.stateNode,G=Ae.memoizedProps.style,A=G!=null&&G.hasOwnProperty("display")?G.display:null,O.style.display=ve("display",A))}catch(nt){vn(n,n.return,nt)}}}else if(Ae.tag===6){if(Te===null)try{Ae.stateNode.nodeValue=he?"":Ae.memoizedProps}catch(nt){vn(n,n.return,nt)}}else if((Ae.tag!==22&&Ae.tag!==23||Ae.memoizedState===null||Ae===n)&&Ae.child!==null){Ae.child.return=Ae,Ae=Ae.child;continue}if(Ae===n)break e;for(;Ae.sibling===null;){if(Ae.return===null||Ae.return===n)break e;Te===Ae&&(Te=null),Ae=Ae.return}Te===Ae&&(Te=null),Ae.sibling.return=Ae.return,Ae=Ae.sibling}}break;case 19:Xi(r,n),nr(n),c&4&&Vm(n);break;case 21:break;default:Xi(r,n),nr(n)}}function nr(n){var r=n.flags;if(r&2){try{e:{for(var o=n.return;o!==null;){if(km(o)){var c=o;break e}o=o.return}throw Error(t(160))}switch(c.tag){case 5:var f=c.stateNode;c.flags&32&&(ge(f,""),c.flags&=-33);var g=zm(n);cd(n,g,f);break;case 3:case 4:var A=c.stateNode.containerInfo,O=zm(n);ld(n,O,A);break;default:throw Error(t(161))}}catch(G){vn(n,n.return,G)}n.flags&=-3}r&4096&&(n.flags&=-4097)}function gx(n,r,o){je=n,Bm(n)}function Bm(n,r,o){for(var c=(n.mode&1)!==0;je!==null;){var f=je,g=f.child;if(f.tag===22&&c){var A=f.memoizedState!==null||Pl;if(!A){var O=f.alternate,G=O!==null&&O.memoizedState!==null||Yn;O=Pl;var he=Yn;if(Pl=A,(Yn=G)&&!he)for(je=f;je!==null;)A=je,G=A.child,A.tag===22&&A.memoizedState!==null?$m(f):G!==null?(G.return=A,je=G):$m(f);for(;g!==null;)je=g,Bm(g),g=g.sibling;je=f,Pl=O,Yn=he}Wm(n)}else(f.subtreeFlags&8772)!==0&&g!==null?(g.return=f,je=g):Wm(n)}}function Wm(n){for(;je!==null;){var r=je;if((r.flags&8772)!==0){var o=r.alternate;try{if((r.flags&8772)!==0)switch(r.tag){case 0:case 11:case 15:Yn||Ll(5,r);break;case 1:var c=r.stateNode;if(r.flags&4&&!Yn)if(o===null)c.componentDidMount();else{var f=r.elementType===r.type?o.memoizedProps:Bi(r.type,o.memoizedProps);c.componentDidUpdate(f,o.memoizedState,c.__reactInternalSnapshotBeforeUpdate)}var g=r.updateQueue;g!==null&&Xp(r,g,c);break;case 3:var A=r.updateQueue;if(A!==null){if(o=null,r.child!==null)switch(r.child.tag){case 5:o=r.child.stateNode;break;case 1:o=r.child.stateNode}Xp(r,A,o)}break;case 5:var O=r.stateNode;if(o===null&&r.flags&4){o=O;var G=r.memoizedProps;switch(r.type){case"button":case"input":case"select":case"textarea":G.autoFocus&&o.focus();break;case"img":G.src&&(o.src=G.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(r.memoizedState===null){var he=r.alternate;if(he!==null){var Te=he.memoizedState;if(Te!==null){var Ae=Te.dehydrated;Ae!==null&&Xs(Ae)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}Yn||r.flags&512&&od(r)}catch(Ee){vn(r,r.return,Ee)}}if(r===n){je=null;break}if(o=r.sibling,o!==null){o.return=r.return,je=o;break}je=r.return}}function Xm(n){for(;je!==null;){var r=je;if(r===n){je=null;break}var o=r.sibling;if(o!==null){o.return=r.return,je=o;break}je=r.return}}function $m(n){for(;je!==null;){var r=je;try{switch(r.tag){case 0:case 11:case 15:var o=r.return;try{Ll(4,r)}catch(G){vn(r,o,G)}break;case 1:var c=r.stateNode;if(typeof c.componentDidMount=="function"){var f=r.return;try{c.componentDidMount()}catch(G){vn(r,f,G)}}var g=r.return;try{od(r)}catch(G){vn(r,g,G)}break;case 5:var A=r.return;try{od(r)}catch(G){vn(r,A,G)}}}catch(G){vn(r,r.return,G)}if(r===n){je=null;break}var O=r.sibling;if(O!==null){O.return=r.return,je=O;break}je=r.return}}var vx=Math.ceil,Dl=R.ReactCurrentDispatcher,ud=R.ReactCurrentOwner,Pi=R.ReactCurrentBatchConfig,Ht=0,Nn=null,Mn=null,zn=0,_i=0,os=Wr(0),An=0,mo=null,Ta=0,Nl=0,dd=0,go=null,oi=null,fd=0,ls=1/0,Er=null,Ul=!1,hd=null,Kr=null,Fl=!1,Zr=null,Ol=0,vo=0,pd=null,Il=-1,kl=0;function Qn(){return(Ht&6)!==0?$t():Il!==-1?Il:Il=$t()}function Jr(n){return(n.mode&1)===0?1:(Ht&2)!==0&&zn!==0?zn&-zn:ex.transition!==null?(kl===0&&(kl=Tn()),kl):(n=wt,n!==0||(n=window.event,n=n===void 0?16:qh(n.type)),n)}function $i(n,r,o,c){if(50<vo)throw vo=0,pd=null,Error(t(185));Sn(n,o,c),((Ht&2)===0||n!==Nn)&&(n===Nn&&((Ht&2)===0&&(Nl|=o),An===4&&Qr(n,zn)),li(n,c),o===1&&Ht===0&&(r.mode&1)===0&&(ls=$t()+500,fl&&$r()))}function li(n,r){var o=n.callbackNode;en(n,r);var c=Ft(n,n===Nn?zn:0);if(c===0)o!==null&&ii(o),n.callbackNode=null,n.callbackPriority=0;else if(r=c&-c,n.callbackPriority!==r){if(o!=null&&ii(o),r===1)n.tag===0?Q_(qm.bind(null,n)):Np(qm.bind(null,n)),j_(function(){(Ht&6)===0&&$r()}),o=null;else{switch(Ii(c)){case 1:o=pr;break;case 4:o=Ir;break;case 16:o=C;break;case 536870912:o=fe;break;default:o=C}o=ng(o,Ym.bind(null,n))}n.callbackPriority=r,n.callbackNode=o}}function Ym(n,r){if(Il=-1,kl=0,(Ht&6)!==0)throw Error(t(327));var o=n.callbackNode;if(cs()&&n.callbackNode!==o)return null;var c=Ft(n,n===Nn?zn:0);if(c===0)return null;if((c&30)!==0||(c&n.expiredLanes)!==0||r)r=zl(n,c);else{r=c;var f=Ht;Ht|=2;var g=Km();(Nn!==n||zn!==r)&&(Er=null,ls=$t()+500,Aa(n,r));do try{Sx();break}catch(O){jm(n,O)}while(!0);Du(),Dl.current=g,Ht=f,Mn!==null?r=0:(Nn=null,zn=0,r=An)}if(r!==0){if(r===2&&(f=Wt(n),f!==0&&(c=f,r=md(n,f))),r===1)throw o=mo,Aa(n,0),Qr(n,c),li(n,$t()),o;if(r===6)Qr(n,c);else{if(f=n.current.alternate,(c&30)===0&&!_x(f)&&(r=zl(n,c),r===2&&(g=Wt(n),g!==0&&(c=g,r=md(n,g))),r===1))throw o=mo,Aa(n,0),Qr(n,c),li(n,$t()),o;switch(n.finishedWork=f,n.finishedLanes=c,r){case 0:case 1:throw Error(t(345));case 2:Ca(n,oi,Er);break;case 3:if(Qr(n,c),(c&130023424)===c&&(r=fd+500-$t(),10<r)){if(Ft(n,0)!==0)break;if(f=n.suspendedLanes,(f&c)!==c){Qn(),n.pingedLanes|=n.suspendedLanes&f;break}n.timeoutHandle=yu(Ca.bind(null,n,oi,Er),r);break}Ca(n,oi,Er);break;case 4:if(Qr(n,c),(c&4194240)===c)break;for(r=n.eventTimes,f=-1;0<c;){var A=31-Ie(c);g=1<<A,A=r[A],A>f&&(f=A),c&=~g}if(c=f,c=$t()-c,c=(120>c?120:480>c?480:1080>c?1080:1920>c?1920:3e3>c?3e3:4320>c?4320:1960*vx(c/1960))-c,10<c){n.timeoutHandle=yu(Ca.bind(null,n,oi,Er),c);break}Ca(n,oi,Er);break;case 5:Ca(n,oi,Er);break;default:throw Error(t(329))}}}return li(n,$t()),n.callbackNode===o?Ym.bind(null,n):null}function md(n,r){var o=go;return n.current.memoizedState.isDehydrated&&(Aa(n,r).flags|=256),n=zl(n,r),n!==2&&(r=oi,oi=o,r!==null&&gd(r)),n}function gd(n){oi===null?oi=n:oi.push.apply(oi,n)}function _x(n){for(var r=n;;){if(r.flags&16384){var o=r.updateQueue;if(o!==null&&(o=o.stores,o!==null))for(var c=0;c<o.length;c++){var f=o[c],g=f.getSnapshot;f=f.value;try{if(!Vi(g(),f))return!1}catch{return!1}}}if(o=r.child,r.subtreeFlags&16384&&o!==null)o.return=r,r=o;else{if(r===n)break;for(;r.sibling===null;){if(r.return===null||r.return===n)return!0;r=r.return}r.sibling.return=r.return,r=r.sibling}}return!0}function Qr(n,r){for(r&=~dd,r&=~Nl,n.suspendedLanes|=r,n.pingedLanes&=~r,n=n.expirationTimes;0<r;){var o=31-Ie(r),c=1<<o;n[o]=-1,r&=~c}}function qm(n){if((Ht&6)!==0)throw Error(t(327));cs();var r=Ft(n,0);if((r&1)===0)return li(n,$t()),null;var o=zl(n,r);if(n.tag!==0&&o===2){var c=Wt(n);c!==0&&(r=c,o=md(n,c))}if(o===1)throw o=mo,Aa(n,0),Qr(n,r),li(n,$t()),o;if(o===6)throw Error(t(345));return n.finishedWork=n.current.alternate,n.finishedLanes=r,Ca(n,oi,Er),li(n,$t()),null}function vd(n,r){var o=Ht;Ht|=1;try{return n(r)}finally{Ht=o,Ht===0&&(ls=$t()+500,fl&&$r())}}function wa(n){Zr!==null&&Zr.tag===0&&(Ht&6)===0&&cs();var r=Ht;Ht|=1;var o=Pi.transition,c=wt;try{if(Pi.transition=null,wt=1,n)return n()}finally{wt=c,Pi.transition=o,Ht=r,(Ht&6)===0&&$r()}}function _d(){_i=os.current,an(os)}function Aa(n,r){n.finishedWork=null,n.finishedLanes=0;var o=n.timeoutHandle;if(o!==-1&&(n.timeoutHandle=-1,q_(o)),Mn!==null)for(o=Mn.return;o!==null;){var c=o;switch(Cu(c),c.tag){case 1:c=c.type.childContextTypes,c!=null&&ul();break;case 3:rs(),an(ri),an(Wn),Hu();break;case 5:ku(c);break;case 4:rs();break;case 13:an(hn);break;case 19:an(hn);break;case 10:Nu(c.type._context);break;case 22:case 23:_d()}o=o.return}if(Nn=n,Mn=n=ea(n.current,null),zn=_i=r,An=0,mo=null,dd=Nl=Ta=0,oi=go=null,ya!==null){for(r=0;r<ya.length;r++)if(o=ya[r],c=o.interleaved,c!==null){o.interleaved=null;var f=c.next,g=o.pending;if(g!==null){var A=g.next;g.next=f,c.next=A}o.pending=c}ya=null}return n}function jm(n,r){do{var o=Mn;try{if(Du(),Ml.current=Al,El){for(var c=pn.memoizedState;c!==null;){var f=c.queue;f!==null&&(f.pending=null),c=c.next}El=!1}if(Ea=0,Dn=wn=pn=null,lo=!1,co=0,ud.current=null,o===null||o.return===null){An=1,mo=r,Mn=null;break}e:{var g=n,A=o.return,O=o,G=r;if(r=zn,O.flags|=32768,G!==null&&typeof G=="object"&&typeof G.then=="function"){var he=G,Te=O,Ae=Te.tag;if((Te.mode&1)===0&&(Ae===0||Ae===11||Ae===15)){var Ee=Te.alternate;Ee?(Te.updateQueue=Ee.updateQueue,Te.memoizedState=Ee.memoizedState,Te.lanes=Ee.lanes):(Te.updateQueue=null,Te.memoizedState=null)}var $e=Sm(A);if($e!==null){$e.flags&=-257,ym($e,A,O,g,r),$e.mode&1&&xm(g,he,r),r=$e,G=he;var Je=r.updateQueue;if(Je===null){var nt=new Set;nt.add(G),r.updateQueue=nt}else Je.add(G);break e}else{if((r&1)===0){xm(g,he,r),xd();break e}G=Error(t(426))}}else if(ln&&O.mode&1){var yn=Sm(A);if(yn!==null){(yn.flags&65536)===0&&(yn.flags|=256),ym(yn,A,O,g,r),Pu(as(G,O));break e}}g=G=as(G,O),An!==4&&(An=2),go===null?go=[g]:go.push(g),g=A;do{switch(g.tag){case 3:g.flags|=65536,r&=-r,g.lanes|=r;var ae=vm(g,G,r);Wp(g,ae);break e;case 1:O=G;var j=g.type,de=g.stateNode;if((g.flags&128)===0&&(typeof j.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(Kr===null||!Kr.has(de)))){g.flags|=65536,r&=-r,g.lanes|=r;var be=_m(g,O,r);Wp(g,be);break e}}g=g.return}while(g!==null)}Jm(o)}catch(at){r=at,Mn===o&&o!==null&&(Mn=o=o.return);continue}break}while(!0)}function Km(){var n=Dl.current;return Dl.current=Al,n===null?Al:n}function xd(){(An===0||An===3||An===2)&&(An=4),Nn===null||(Ta&268435455)===0&&(Nl&268435455)===0||Qr(Nn,zn)}function zl(n,r){var o=Ht;Ht|=2;var c=Km();(Nn!==n||zn!==r)&&(Er=null,Aa(n,r));do try{xx();break}catch(f){jm(n,f)}while(!0);if(Du(),Ht=o,Dl.current=c,Mn!==null)throw Error(t(261));return Nn=null,zn=0,An}function xx(){for(;Mn!==null;)Zm(Mn)}function Sx(){for(;Mn!==null&&!Ti();)Zm(Mn)}function Zm(n){var r=tg(n.alternate,n,_i);n.memoizedProps=n.pendingProps,r===null?Jm(n):Mn=r,ud.current=null}function Jm(n){var r=n;do{var o=r.alternate;if(n=r.return,(r.flags&32768)===0){if(o=fx(o,r,_i),o!==null){Mn=o;return}}else{if(o=hx(o,r),o!==null){o.flags&=32767,Mn=o;return}if(n!==null)n.flags|=32768,n.subtreeFlags=0,n.deletions=null;else{An=6,Mn=null;return}}if(r=r.sibling,r!==null){Mn=r;return}Mn=r=n}while(r!==null);An===0&&(An=5)}function Ca(n,r,o){var c=wt,f=Pi.transition;try{Pi.transition=null,wt=1,yx(n,r,o,c)}finally{Pi.transition=f,wt=c}return null}function yx(n,r,o,c){do cs();while(Zr!==null);if((Ht&6)!==0)throw Error(t(327));o=n.finishedWork;var f=n.finishedLanes;if(o===null)return null;if(n.finishedWork=null,n.finishedLanes=0,o===n.current)throw Error(t(177));n.callbackNode=null,n.callbackPriority=0;var g=o.lanes|o.childLanes;if(Ot(n,g),n===Nn&&(Mn=Nn=null,zn=0),(o.subtreeFlags&2064)===0&&(o.flags&2064)===0||Fl||(Fl=!0,ng(C,function(){return cs(),null})),g=(o.flags&15990)!==0,(o.subtreeFlags&15990)!==0||g){g=Pi.transition,Pi.transition=null;var A=wt;wt=1;var O=Ht;Ht|=4,ud.current=null,mx(n,o),Gm(o,n),V_(xu),Ko=!!_u,xu=_u=null,n.current=o,gx(o),hr(),Ht=O,wt=A,Pi.transition=g}else n.current=o;if(Fl&&(Fl=!1,Zr=n,Ol=f),g=n.pendingLanes,g===0&&(Kr=null),Ve(o.stateNode),li(n,$t()),r!==null)for(c=n.onRecoverableError,o=0;o<r.length;o++)f=r[o],c(f.value,{componentStack:f.stack,digest:f.digest});if(Ul)throw Ul=!1,n=hd,hd=null,n;return(Ol&1)!==0&&n.tag!==0&&cs(),g=n.pendingLanes,(g&1)!==0?n===pd?vo++:(vo=0,pd=n):vo=0,$r(),null}function cs(){if(Zr!==null){var n=Ii(Ol),r=Pi.transition,o=wt;try{if(Pi.transition=null,wt=16>n?16:n,Zr===null)var c=!1;else{if(n=Zr,Zr=null,Ol=0,(Ht&6)!==0)throw Error(t(331));var f=Ht;for(Ht|=4,je=n.current;je!==null;){var g=je,A=g.child;if((je.flags&16)!==0){var O=g.deletions;if(O!==null){for(var G=0;G<O.length;G++){var he=O[G];for(je=he;je!==null;){var Te=je;switch(Te.tag){case 0:case 11:case 15:po(8,Te,g)}var Ae=Te.child;if(Ae!==null)Ae.return=Te,je=Ae;else for(;je!==null;){Te=je;var Ee=Te.sibling,$e=Te.return;if(Im(Te),Te===he){je=null;break}if(Ee!==null){Ee.return=$e,je=Ee;break}je=$e}}}var Je=g.alternate;if(Je!==null){var nt=Je.child;if(nt!==null){Je.child=null;do{var yn=nt.sibling;nt.sibling=null,nt=yn}while(nt!==null)}}je=g}}if((g.subtreeFlags&2064)!==0&&A!==null)A.return=g,je=A;else e:for(;je!==null;){if(g=je,(g.flags&2048)!==0)switch(g.tag){case 0:case 11:case 15:po(9,g,g.return)}var ae=g.sibling;if(ae!==null){ae.return=g.return,je=ae;break e}je=g.return}}var j=n.current;for(je=j;je!==null;){A=je;var de=A.child;if((A.subtreeFlags&2064)!==0&&de!==null)de.return=A,je=de;else e:for(A=j;je!==null;){if(O=je,(O.flags&2048)!==0)try{switch(O.tag){case 0:case 11:case 15:Ll(9,O)}}catch(at){vn(O,O.return,at)}if(O===A){je=null;break e}var be=O.sibling;if(be!==null){be.return=O.return,je=be;break e}je=O.return}}if(Ht=f,$r(),ne&&typeof ne.onPostCommitFiberRoot=="function")try{ne.onPostCommitFiberRoot(re,n)}catch{}c=!0}return c}finally{wt=o,Pi.transition=r}}return!1}function Qm(n,r,o){r=as(o,r),r=vm(n,r,1),n=qr(n,r,1),r=Qn(),n!==null&&(Sn(n,1,r),li(n,r))}function vn(n,r,o){if(n.tag===3)Qm(n,n,o);else for(;r!==null;){if(r.tag===3){Qm(r,n,o);break}else if(r.tag===1){var c=r.stateNode;if(typeof r.type.getDerivedStateFromError=="function"||typeof c.componentDidCatch=="function"&&(Kr===null||!Kr.has(c))){n=as(o,n),n=_m(r,n,1),r=qr(r,n,1),n=Qn(),r!==null&&(Sn(r,1,n),li(r,n));break}}r=r.return}}function Mx(n,r,o){var c=n.pingCache;c!==null&&c.delete(r),r=Qn(),n.pingedLanes|=n.suspendedLanes&o,Nn===n&&(zn&o)===o&&(An===4||An===3&&(zn&130023424)===zn&&500>$t()-fd?Aa(n,0):dd|=o),li(n,r)}function eg(n,r){r===0&&((n.mode&1)===0?r=1:(r=Et,Et<<=1,(Et&130023424)===0&&(Et=4194304)));var o=Qn();n=Sr(n,r),n!==null&&(Sn(n,r,o),li(n,o))}function Ex(n){var r=n.memoizedState,o=0;r!==null&&(o=r.retryLane),eg(n,o)}function Tx(n,r){var o=0;switch(n.tag){case 13:var c=n.stateNode,f=n.memoizedState;f!==null&&(o=f.retryLane);break;case 19:c=n.stateNode;break;default:throw Error(t(314))}c!==null&&c.delete(r),eg(n,o)}var tg;tg=function(n,r,o){if(n!==null)if(n.memoizedProps!==r.pendingProps||ri.current)si=!0;else{if((n.lanes&o)===0&&(r.flags&128)===0)return si=!1,dx(n,r,o);si=(n.flags&131072)!==0}else si=!1,ln&&(r.flags&1048576)!==0&&Up(r,pl,r.index);switch(r.lanes=0,r.tag){case 2:var c=r.type;bl(n,r),n=r.pendingProps;var f=Za(r,Wn.current);is(r,o),f=Bu(null,r,c,n,f,o);var g=Wu();return r.flags|=1,typeof f=="object"&&f!==null&&typeof f.render=="function"&&f.$$typeof===void 0?(r.tag=1,r.memoizedState=null,r.updateQueue=null,ai(c)?(g=!0,dl(r)):g=!1,r.memoizedState=f.state!==null&&f.state!==void 0?f.state:null,Ou(r),f.updater=Cl,r.stateNode=f,f._reactInternals=r,Ku(r,c,n,o),r=ed(null,r,c,!0,g,o)):(r.tag=0,ln&&g&&Au(r),Jn(null,r,f,o),r=r.child),r;case 16:c=r.elementType;e:{switch(bl(n,r),n=r.pendingProps,f=c._init,c=f(c._payload),r.type=c,f=r.tag=Ax(c),n=Bi(c,n),f){case 0:r=Qu(null,r,c,n,o);break e;case 1:r=Cm(null,r,c,n,o);break e;case 11:r=Mm(null,r,c,n,o);break e;case 14:r=Em(null,r,c,Bi(c.type,n),o);break e}throw Error(t(306,c,""))}return r;case 0:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Bi(c,f),Qu(n,r,c,f,o);case 1:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Bi(c,f),Cm(n,r,c,f,o);case 3:e:{if(Rm(r),n===null)throw Error(t(387));c=r.pendingProps,g=r.memoizedState,f=g.element,Bp(n,r),Sl(r,c,null,o);var A=r.memoizedState;if(c=A.element,g.isDehydrated)if(g={element:c,isDehydrated:!1,cache:A.cache,pendingSuspenseBoundaries:A.pendingSuspenseBoundaries,transitions:A.transitions},r.updateQueue.baseState=g,r.memoizedState=g,r.flags&256){f=as(Error(t(423)),r),r=bm(n,r,c,o,f);break e}else if(c!==f){f=as(Error(t(424)),r),r=bm(n,r,c,o,f);break e}else for(vi=Br(r.stateNode.containerInfo.firstChild),gi=r,ln=!0,Gi=null,o=Vp(r,null,c,o),r.child=o;o;)o.flags=o.flags&-3|4096,o=o.sibling;else{if(es(),c===f){r=Mr(n,r,o);break e}Jn(n,r,c,o)}r=r.child}return r;case 5:return $p(r),n===null&&bu(r),c=r.type,f=r.pendingProps,g=n!==null?n.memoizedProps:null,A=f.children,Su(c,f)?A=null:g!==null&&Su(c,g)&&(r.flags|=32),Am(n,r),Jn(n,r,A,o),r.child;case 6:return n===null&&bu(r),null;case 13:return Pm(n,r,o);case 4:return Iu(r,r.stateNode.containerInfo),c=r.pendingProps,n===null?r.child=ts(r,null,c,o):Jn(n,r,c,o),r.child;case 11:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Bi(c,f),Mm(n,r,c,f,o);case 7:return Jn(n,r,r.pendingProps,o),r.child;case 8:return Jn(n,r,r.pendingProps.children,o),r.child;case 12:return Jn(n,r,r.pendingProps.children,o),r.child;case 10:e:{if(c=r.type._context,f=r.pendingProps,g=r.memoizedProps,A=f.value,nn(vl,c._currentValue),c._currentValue=A,g!==null)if(Vi(g.value,A)){if(g.children===f.children&&!ri.current){r=Mr(n,r,o);break e}}else for(g=r.child,g!==null&&(g.return=r);g!==null;){var O=g.dependencies;if(O!==null){A=g.child;for(var G=O.firstContext;G!==null;){if(G.context===c){if(g.tag===1){G=yr(-1,o&-o),G.tag=2;var he=g.updateQueue;if(he!==null){he=he.shared;var Te=he.pending;Te===null?G.next=G:(G.next=Te.next,Te.next=G),he.pending=G}}g.lanes|=o,G=g.alternate,G!==null&&(G.lanes|=o),Uu(g.return,o,r),O.lanes|=o;break}G=G.next}}else if(g.tag===10)A=g.type===r.type?null:g.child;else if(g.tag===18){if(A=g.return,A===null)throw Error(t(341));A.lanes|=o,O=A.alternate,O!==null&&(O.lanes|=o),Uu(A,o,r),A=g.sibling}else A=g.child;if(A!==null)A.return=g;else for(A=g;A!==null;){if(A===r){A=null;break}if(g=A.sibling,g!==null){g.return=A.return,A=g;break}A=A.return}g=A}Jn(n,r,f.children,o),r=r.child}return r;case 9:return f=r.type,c=r.pendingProps.children,is(r,o),f=Ri(f),c=c(f),r.flags|=1,Jn(n,r,c,o),r.child;case 14:return c=r.type,f=Bi(c,r.pendingProps),f=Bi(c.type,f),Em(n,r,c,f,o);case 15:return Tm(n,r,r.type,r.pendingProps,o);case 17:return c=r.type,f=r.pendingProps,f=r.elementType===c?f:Bi(c,f),bl(n,r),r.tag=1,ai(c)?(n=!0,dl(r)):n=!1,is(r,o),mm(r,c,f),Ku(r,c,f,o),ed(null,r,c,!0,n,o);case 19:return Dm(n,r,o);case 22:return wm(n,r,o)}throw Error(t(156,r.tag))};function ng(n,r){return Gn(n,r)}function wx(n,r,o,c){this.tag=n,this.key=o,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=r,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=c,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Li(n,r,o,c){return new wx(n,r,o,c)}function Sd(n){return n=n.prototype,!(!n||!n.isReactComponent)}function Ax(n){if(typeof n=="function")return Sd(n)?1:0;if(n!=null){if(n=n.$$typeof,n===K)return 11;if(n===te)return 14}return 2}function ea(n,r){var o=n.alternate;return o===null?(o=Li(n.tag,r,n.key,n.mode),o.elementType=n.elementType,o.type=n.type,o.stateNode=n.stateNode,o.alternate=n,n.alternate=o):(o.pendingProps=r,o.type=n.type,o.flags=0,o.subtreeFlags=0,o.deletions=null),o.flags=n.flags&14680064,o.childLanes=n.childLanes,o.lanes=n.lanes,o.child=n.child,o.memoizedProps=n.memoizedProps,o.memoizedState=n.memoizedState,o.updateQueue=n.updateQueue,r=n.dependencies,o.dependencies=r===null?null:{lanes:r.lanes,firstContext:r.firstContext},o.sibling=n.sibling,o.index=n.index,o.ref=n.ref,o}function Hl(n,r,o,c,f,g){var A=2;if(c=n,typeof n=="function")Sd(n)&&(A=1);else if(typeof n=="string")A=5;else e:switch(n){case I:return Ra(o.children,f,g,r);case T:A=8,f|=8;break;case F:return n=Li(12,o,r,f|2),n.elementType=F,n.lanes=g,n;case ie:return n=Li(13,o,r,f),n.elementType=ie,n.lanes=g,n;case H:return n=Li(19,o,r,f),n.elementType=H,n.lanes=g,n;case ce:return Vl(o,f,g,r);default:if(typeof n=="object"&&n!==null)switch(n.$$typeof){case z:A=10;break e;case B:A=9;break e;case K:A=11;break e;case te:A=14;break e;case oe:A=16,c=null;break e}throw Error(t(130,n==null?n:typeof n,""))}return r=Li(A,o,r,f),r.elementType=n,r.type=c,r.lanes=g,r}function Ra(n,r,o,c){return n=Li(7,n,c,r),n.lanes=o,n}function Vl(n,r,o,c){return n=Li(22,n,c,r),n.elementType=ce,n.lanes=o,n.stateNode={isHidden:!1},n}function yd(n,r,o){return n=Li(6,n,null,r),n.lanes=o,n}function Md(n,r,o){return r=Li(4,n.children!==null?n.children:[],n.key,r),r.lanes=o,r.stateNode={containerInfo:n.containerInfo,pendingChildren:null,implementation:n.implementation},r}function Cx(n,r,o,c,f){this.tag=r,this.containerInfo=n,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=We(0),this.expirationTimes=We(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=We(0),this.identifierPrefix=c,this.onRecoverableError=f,this.mutableSourceEagerHydrationData=null}function Ed(n,r,o,c,f,g,A,O,G){return n=new Cx(n,r,o,O,G),r===1?(r=1,g===!0&&(r|=8)):r=0,g=Li(3,null,null,r),n.current=g,g.stateNode=n,g.memoizedState={element:c,isDehydrated:o,cache:null,transitions:null,pendingSuspenseBoundaries:null},Ou(g),n}function Rx(n,r,o){var c=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:c==null?null:""+c,children:n,containerInfo:r,implementation:o}}function ig(n){if(!n)return Xr;n=n._reactInternals;e:{if(Ct(n)!==n||n.tag!==1)throw Error(t(170));var r=n;do{switch(r.tag){case 3:r=r.stateNode.context;break e;case 1:if(ai(r.type)){r=r.stateNode.__reactInternalMemoizedMergedChildContext;break e}}r=r.return}while(r!==null);throw Error(t(171))}if(n.tag===1){var o=n.type;if(ai(o))return Lp(n,o,r)}return r}function rg(n,r,o,c,f,g,A,O,G){return n=Ed(o,c,!0,n,f,g,A,O,G),n.context=ig(null),o=n.current,c=Qn(),f=Jr(o),g=yr(c,f),g.callback=r??null,qr(o,g,f),n.current.lanes=f,Sn(n,f,c),li(n,c),n}function Gl(n,r,o,c){var f=r.current,g=Qn(),A=Jr(f);return o=ig(o),r.context===null?r.context=o:r.pendingContext=o,r=yr(g,A),r.payload={element:n},c=c===void 0?null:c,c!==null&&(r.callback=c),n=qr(f,r,A),n!==null&&($i(n,f,A,g),xl(n,f,A)),A}function Bl(n){if(n=n.current,!n.child)return null;switch(n.child.tag){case 5:return n.child.stateNode;default:return n.child.stateNode}}function ag(n,r){if(n=n.memoizedState,n!==null&&n.dehydrated!==null){var o=n.retryLane;n.retryLane=o!==0&&o<r?o:r}}function Td(n,r){ag(n,r),(n=n.alternate)&&ag(n,r)}function bx(){return null}var sg=typeof reportError=="function"?reportError:function(n){console.error(n)};function wd(n){this._internalRoot=n}Wl.prototype.render=wd.prototype.render=function(n){var r=this._internalRoot;if(r===null)throw Error(t(409));Gl(n,r,null,null)},Wl.prototype.unmount=wd.prototype.unmount=function(){var n=this._internalRoot;if(n!==null){this._internalRoot=null;var r=n.containerInfo;wa(function(){Gl(null,n,null,null)}),r[gr]=null}};function Wl(n){this._internalRoot=n}Wl.prototype.unstable_scheduleHydration=function(n){if(n){var r=ki();n={blockedOn:null,target:n,priority:r};for(var o=0;o<Hr.length&&r!==0&&r<Hr[o].priority;o++);Hr.splice(o,0,n),o===0&&$h(n)}};function Ad(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11)}function Xl(n){return!(!n||n.nodeType!==1&&n.nodeType!==9&&n.nodeType!==11&&(n.nodeType!==8||n.nodeValue!==" react-mount-point-unstable "))}function og(){}function Px(n,r,o,c,f){if(f){if(typeof c=="function"){var g=c;c=function(){var he=Bl(A);g.call(he)}}var A=rg(r,c,n,0,null,!1,!1,"",og);return n._reactRootContainer=A,n[gr]=A.current,eo(n.nodeType===8?n.parentNode:n),wa(),A}for(;f=n.lastChild;)n.removeChild(f);if(typeof c=="function"){var O=c;c=function(){var he=Bl(G);O.call(he)}}var G=Ed(n,0,!1,null,null,!1,!1,"",og);return n._reactRootContainer=G,n[gr]=G.current,eo(n.nodeType===8?n.parentNode:n),wa(function(){Gl(r,G,o,c)}),G}function $l(n,r,o,c,f){var g=o._reactRootContainer;if(g){var A=g;if(typeof f=="function"){var O=f;f=function(){var G=Bl(A);O.call(G)}}Gl(r,A,n,f)}else A=Px(o,r,n,f,c);return Bl(A)}mr=function(n){switch(n.tag){case 3:var r=n.stateNode;if(r.current.memoizedState.isDehydrated){var o=qe(r.pendingLanes);o!==0&&(Bn(r,o|1),li(r,$t()),(Ht&6)===0&&(ls=$t()+500,$r()))}break;case 13:wa(function(){var c=Sr(n,1);if(c!==null){var f=Qn();$i(c,n,1,f)}}),Td(n,1)}},Gt=function(n){if(n.tag===13){var r=Sr(n,134217728);if(r!==null){var o=Qn();$i(r,n,134217728,o)}Td(n,134217728)}},on=function(n){if(n.tag===13){var r=Jr(n),o=Sr(n,r);if(o!==null){var c=Qn();$i(o,n,r,c)}Td(n,r)}},ki=function(){return wt},Yt=function(n,r){var o=wt;try{return wt=n,r()}finally{wt=o}},st=function(n,r,o){switch(r){case"input":if(Mt(n,o),r=o.name,o.type==="radio"&&r!=null){for(o=n;o.parentNode;)o=o.parentNode;for(o=o.querySelectorAll("input[name="+JSON.stringify(""+r)+'][type="radio"]'),r=0;r<o.length;r++){var c=o[r];if(c!==n&&c.form===n.form){var f=cl(c);if(!f)throw Error(t(90));yt(c),Mt(c,f)}}}break;case"textarea":_n(n,o);break;case"select":r=o.value,r!=null&&Nt(n,!!o.multiple,r,!1)}},ke=vd,ye=wa;var Lx={usingClientEntryPoint:!1,Events:[io,ja,cl,_e,Ue,vd]},_o={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},Dx={bundleType:_o.bundleType,version:_o.version,rendererPackageName:_o.rendererPackageName,rendererConfig:_o.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:R.ReactCurrentDispatcher,findHostInstanceByFiber:function(n){return n=xn(n),n===null?null:n.stateNode},findFiberByHostInstance:_o.findFiberByHostInstance||bx,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Yl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Yl.isDisabled&&Yl.supportsFiber)try{re=Yl.inject(Dx),ne=Yl}catch{}}return ci.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=Lx,ci.createPortal=function(n,r){var o=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ad(r))throw Error(t(200));return Rx(n,r,null,o)},ci.createRoot=function(n,r){if(!Ad(n))throw Error(t(299));var o=!1,c="",f=sg;return r!=null&&(r.unstable_strictMode===!0&&(o=!0),r.identifierPrefix!==void 0&&(c=r.identifierPrefix),r.onRecoverableError!==void 0&&(f=r.onRecoverableError)),r=Ed(n,1,!1,null,null,o,!1,c,f),n[gr]=r.current,eo(n.nodeType===8?n.parentNode:n),new wd(r)},ci.findDOMNode=function(n){if(n==null)return null;if(n.nodeType===1)return n;var r=n._reactInternals;if(r===void 0)throw typeof n.render=="function"?Error(t(188)):(n=Object.keys(n).join(","),Error(t(268,n)));return n=xn(r),n=n===null?null:n.stateNode,n},ci.flushSync=function(n){return wa(n)},ci.hydrate=function(n,r,o){if(!Xl(r))throw Error(t(200));return $l(null,n,r,!0,o)},ci.hydrateRoot=function(n,r,o){if(!Ad(n))throw Error(t(405));var c=o!=null&&o.hydratedSources||null,f=!1,g="",A=sg;if(o!=null&&(o.unstable_strictMode===!0&&(f=!0),o.identifierPrefix!==void 0&&(g=o.identifierPrefix),o.onRecoverableError!==void 0&&(A=o.onRecoverableError)),r=rg(r,null,n,1,o??null,f,!1,g,A),n[gr]=r.current,eo(n),c)for(n=0;n<c.length;n++)o=c[n],f=o._getVersion,f=f(o._source),r.mutableSourceEagerHydrationData==null?r.mutableSourceEagerHydrationData=[o,f]:r.mutableSourceEagerHydrationData.push(o,f);return new Wl(r)},ci.render=function(n,r,o){if(!Xl(r))throw Error(t(200));return $l(null,n,r,!1,o)},ci.unmountComponentAtNode=function(n){if(!Xl(n))throw Error(t(40));return n._reactRootContainer?(wa(function(){$l(null,null,n,!1,function(){n._reactRootContainer=null,n[gr]=null})}),!0):!1},ci.unstable_batchedUpdates=vd,ci.unstable_renderSubtreeIntoContainer=function(n,r,o,c){if(!Xl(o))throw Error(t(200));if(n==null||n._reactInternals===void 0)throw Error(t(38));return $l(n,r,o,!1,c)},ci.version="18.3.1-next-f1338f8080-20240426",ci}var mg;function Bx(){if(mg)return bd.exports;mg=1;function i(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i)}catch(e){console.error(e)}}return i(),bd.exports=Gx(),bd.exports}var gg;function Wx(){if(gg)return ql;gg=1;var i=Bx();return ql.createRoot=i.createRoot,ql.hydrateRoot=i.hydrateRoot,ql}var Xx=Wx();const jl={END:"end",LEFT:"left",RIGHT:"right",START:"start"},da={NONE:"none",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning",DANGER:"danger"};let zt="bp6";typeof BLUEPRINT_NAMESPACE<"u"?zt=BLUEPRINT_NAMESPACE:typeof REACT_APP_BLUEPRINT_NAMESPACE<"u"&&(zt=REACT_APP_BLUEPRINT_NAMESPACE);const fh=`${zt}-active`,$x=`${zt}-align-left`,Yx=`${zt}-align-right`,qx=`${zt}-dark`,Wc=`${zt}-disabled`,Io=`${zt}-fill`,jx=`${zt}-inline`,Kx=`${zt}-interactive`,Fs=`${zt}-large`,Zx=`${zt}-loading`,Nc=`${zt}-minimal`,vg=`${zt}-outlined`,Jx=`${zt}-round`,Uc=`${zt}-small`,B0=`${zt}-vertical`;Zi(da.PRIMARY);Zi(da.SUCCESS);Zi(da.WARNING);Zi(da.DANGER);const Qx=`${zt}-text-overflow-ellipsis`,Xc=`${zt}-button`,eS=`${Xc}-group`,tS=`${Xc}-spinner`,nS=`${Xc}-text`,iS=`${zt}-html-select`,hh=`${zt}-control`,rS=`${hh}-input`,W0=`${hh}-indicator`,_g=`${W0}-child`,aS=`${zt}-checkbox`,sS=`${zt}-radio`,X0=`${zt}-switch`,xg=`${X0}-inner-text`,ka=`${zt}-slider`,oS=`${ka}-axis`,$0=`${ka}-handle`,Y0=`${ka}-label`,lS=`${ka}-track`,cS=`${ka}-progress`,uS=`${zt}-start`,dS=`${zt}-end`,$c=`${zt}-spinner`,fS=`${$c}-animation`,hS=`${$c}-head`,pS=`${zt}-no-spin`,mS=`${$c}-track`,q0=`${zt}-tag`,gS=`${q0}-remove`,ph=`${zt}-icon`,vS=`${ph}-standard`,_S=`${ph}-large`;function mh(i){switch(i){case jl.LEFT:case jl.START:return $x;case jl.RIGHT:case jl.END:return Yx;default:return}}function xS(i){if(i!=null)return i.indexOf(`${zt}-icon-`)===0?i:`${zt}-icon-${i}`}function Zi(i){if(!(i==null||i===da.NONE))return`${zt}-intent-${i.toLowerCase()}`}function Yc(i,e){if(i==="small")return Uc;if(i==="large")return Fs;const{large:t=!1,small:a=!1}=e;return{[Fs]:t,[Uc]:a}}function j0(i,e){if(i==="outlined")return vg;if(i==="minimal")return Nc;const{minimal:t=!1,outlined:a=!1}=e;return{[Nc]:t,[vg]:a}}var Pe=dh();function SS(i,e,t=(a,s)=>a===s){return i==null&&e==null?!0:i==null||e==null||i.length!==e.length?!1:i.every((a,s)=>t(a,e[s]))}function yS(){return typeof window<"u"&&window.document!=null}function K0(i){return typeof i=="function"}const pa="[Blueprint]",MS=pa+" clamp: max cannot be less than min",ES=pa+" <Slider> stepSize must be greater than zero.",TS=pa+" <Slider> labelStepSize must be greater than zero.",wS=pa+" <Slider> min prop must be a finite number.",AS=pa+" <Slider> max prop must be a finite number.",CS=pa+" <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s",RS=pa+" <MultiSlider> labelStepSize and labelValues prop are mutually exclusive, with labelStepSize taking priority.",bS=pa+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";function Sf(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}function PS(i,e,t=1e-5){return Math.abs(i-e)<=t}function gh(i,e,t){if(i==null)return i;if(t<e)throw new Error(MS);return Math.min(Math.max(i,e),t)}function Z0(i){if(!isFinite(i))return 0;let e=1,t=0;for(;Math.round(i*e)/e!==i;)e*=10,t++;return t}const In="Blueprint6",Sg=["active","alignText","asyncControl","containerRef","current","elementRef","ellipsizeText","endIcon","fill","icon","iconSize","inputClassName","inputRef","intent","inline","large","loading","leftElement","leftIcon","minimal","onRemove","outlined","panel","panelClassName","popoverProps","rightElement","rightIcon","round","selectedValue","size","small","tagName","text","textClassName","variant"];function Ds(i,e=Sg,t=!1){return t&&(e=e.concat(Sg)),e.reduce((a,s)=>(s.indexOf("-")!==-1||a.hasOwnProperty(s)&&delete a[s],a),{...i})}function Fc(i,e=!1){return i==null||i===""||i===!1||!e&&Array.isArray(i)&&(i.length===0||i.every(t=>Fc(t,!0)))}function J0(i,e){return i!=null&&i.type!=null&&i.type.displayName!=null&&i.type.displayName===e.displayName}const LS=`${In}.Icon.`;function DS(i){if(!Pe.isValidElement(i))return!1;const{type:e}=i;if(typeof e=="string")return!1;const{displayName:t}=e;return typeof t=="string"&&t.startsWith(LS)}function yg(i){return i.key==="Enter"||i.key===" "}const NS=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];function US(i){return NS.includes(i.key)}function FS(i,e,t){if(e.includes(i.key))return-1;if(t.includes(i.key))return 1}function OS(i){return i!=null&&typeof i!="function"}function IS(i){return typeof i=="function"}function kS(i,e){OS(i)?i.current=e:IS(i)&&i(e)}function vh(...i){return e=>{i.forEach(t=>{kS(t,e)})}}class _h extends Pe.PureComponent{constructor(t){super(t);xt(this,"componentWillUpdate");xt(this,"componentWillReceiveProps");xt(this,"componentWillMount");xt(this,"getDerivedStateFromProps");xt(this,"displayName");xt(this,"timeoutIds",[]);xt(this,"requestIds",[]);xt(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});xt(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});Sf("production")||this.validateProps(this.props)}componentDidUpdate(t,a,s){Sf("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const a=window.requestAnimationFrame(t);return this.requestIds.push(a),()=>window.cancelAnimationFrame(a)}setTimeout(t,a){const s=window.setTimeout(t,a);return this.timeoutIds.push(s),()=>window.clearTimeout(s)}validateProps(t){}}var Dd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var Mg;function zS(){return Mg||(Mg=1,(function(i){(function(){var e={}.hasOwnProperty;function t(){for(var l="",u=0;u<arguments.length;u++){var d=arguments[u];d&&(l=s(l,a(d)))}return l}function a(l){if(typeof l=="string"||typeof l=="number")return l;if(typeof l!="object")return"";if(Array.isArray(l))return t.apply(null,l);if(l.toString!==Object.prototype.toString&&!l.toString.toString().includes("[native code]"))return l.toString();var u="";for(var d in l)e.call(l,d)&&l[d]&&(u=s(u,d));return u}function s(l,u){return u?l?l+" "+u:l+u:l}i.exports?(t.default=t,i.exports=t):window.classNames=t})()})(Dd)),Dd.exports}var HS=zS();const Vn=Ox(HS);function VS(i,e=[]){Pe.useEffect(()=>{Sf("production")||i()},e)}const GS={defaultTabIndex:void 0,disabledTabIndex:-1};function Q0(i,e,t,a=GS){const{defaultTabIndex:s,disabledTabIndex:l}=a,{active:u,onClick:d,onFocus:m,onKeyDown:p,onKeyUp:v,onBlur:x,tabIndex:_=s}=e,[M,w]=Pe.useState(),[b,y]=Pe.useState(!1),S=Pe.useRef(null),U=Pe.useCallback(P=>{b&&y(!1),x==null||x(P)},[b,x]),V=Pe.useCallback(P=>{yg(P)&&(P.preventDefault(),P.key!==M&&y(!0)),w(P.key),p==null||p(P)},[M,p]),R=Pe.useCallback(P=>{var I;yg(P)&&(y(!1),(I=S.current)==null||I.click()),w(void 0),v==null||v(P)},[v,S]);return[i&&(u||b),{onBlur:U,onClick:i?d:void 0,onFocus:i?m:void 0,onKeyDown:V,onKeyUp:R,ref:vh(S,t),tabIndex:i?_:l}]}var ko=function(){return ko=Object.assign||function(e){for(var t,a=1,s=arguments.length;a<s;a++){t=arguments[a];for(var l in t)Object.prototype.hasOwnProperty.call(t,l)&&(e[l]=t[l])}return e},ko.apply(this,arguments)};function BS(i){return i.toLowerCase()}var WS=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],XS=/[^A-Z0-9]+/gi;function ev(i,e){e===void 0&&(e={});for(var t=e.splitRegexp,a=t===void 0?WS:t,s=e.stripRegexp,l=s===void 0?XS:s,u=e.transform,d=u===void 0?BS:u,m=e.delimiter,p=m===void 0?" ":m,v=Eg(Eg(i,a,"$1\0$2"),l,"\0"),x=0,_=v.length;v.charAt(x)==="\0";)x++;for(;v.charAt(_-1)==="\0";)_--;return v.slice(x,_).split("\0").map(d).join(p)}function Eg(i,e,t){return e instanceof RegExp?i.replace(e,t):e.reduce(function(a,s){return a.replace(s,t)},i)}function $S(i,e){var t=i.charAt(0),a=i.substr(1).toLowerCase();return e>0&&t>="0"&&t<="9"?"_"+t+a:""+t.toUpperCase()+a}function YS(i,e){return e===void 0&&(e={}),ev(i,ko({delimiter:"",transform:$S},e))}function qS(i,e){return e===void 0&&(e={}),ev(i,ko({delimiter:"."},e))}function jS(i,e){return e===void 0&&(e={}),qS(i,ko({delimiter:"_"},e))}var cn;(function(i){i[i.STANDARD=16]="STANDARD",i[i.LARGE=20]="LARGE"})(cn||(cn={}));const KS="modulepreload",ZS=function(i,e){return new URL(i,e).href},Tg={},wg=function(e,t,a){let s=Promise.resolve();if(t&&t.length>0){let u=function(v){return Promise.all(v.map(x=>Promise.resolve(x).then(_=>({status:"fulfilled",value:_}),_=>({status:"rejected",reason:_}))))};const d=document.getElementsByTagName("link"),m=document.querySelector("meta[property=csp-nonce]"),p=(m==null?void 0:m.nonce)||(m==null?void 0:m.getAttribute("nonce"));s=u(t.map(v=>{if(v=ZS(v,a),v in Tg)return;Tg[v]=!0;const x=v.endsWith(".css"),_=x?'[rel="stylesheet"]':"";if(!!a)for(let b=d.length-1;b>=0;b--){const y=d[b];if(y.href===v&&(!x||y.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${_}`))return;const w=document.createElement("link");if(w.rel=x?"stylesheet":KS,x||(w.as="script"),w.crossOrigin="",w.href=v,p&&w.setAttribute("nonce",p),document.head.appendChild(w),x)return new Promise((b,y)=>{w.addEventListener("load",b),w.addEventListener("error",()=>y(new Error(`Unable to preload CSS for ${v}`)))})}))}function l(u){const d=new Event("vite:preloadError",{cancelable:!0});if(d.payload=u,window.dispatchEvent(d),!d.defaultPrevented)throw u}return s.then(u=>{for(const d of u||[])d.status==="rejected"&&l(d.reason);return e().catch(l)})};var h;(function(i){i.AddApplication="add-application",i.AddChild="add-child",i.AddClip="add-clip",i.AddColumnLeft="add-column-left",i.AddColumnRight="add-column-right",i.AddDerivedColumn="add-derived-column",i.AddLocation="add-location",i.AddParent="add-parent",i.AddRowBottom="add-row-bottom",i.AddRowTop="add-row-top",i.AddTile="add-tile",i.AddToArtifact="add-to-artifact",i.AddToFolder="add-to-folder",i.Add="add",i.AimpointsTarget="aimpoints-target",i.Airplane="airplane",i.AlignCenter="align-center",i.AlignJustify="align-justify",i.AlignLeft="align-left",i.AlignRight="align-right",i.AlignmentBottom="alignment-bottom",i.AlignmentHorizontalCenter="alignment-horizontal-center",i.AlignmentLeft="alignment-left",i.AlignmentRight="alignment-right",i.AlignmentTop="alignment-top",i.AlignmentVerticalCenter="alignment-vertical-center",i.Ammunition="ammunition",i.Anchor="anchor",i.Annotation="annotation",i.Announcement="announcement",i.Antenna="antenna",i.AppHeader="app-header",i.Application="application",i.Applications="applications",i.Archive="archive",i.AreaOfInterest="area-of-interest",i.ArrayBoolean="array-boolean",i.ArrayDate="array-date",i.ArrayFloatingPoint="array-floating-point",i.ArrayNumeric="array-numeric",i.ArrayObject="array-object",i.ArrayString="array-string",i.ArrayTimestamp="array-timestamp",i.Array="array",i.ArrowBottomLeft="arrow-bottom-left",i.ArrowBottomRight="arrow-bottom-right",i.ArrowDown="arrow-down",i.ArrowLeft="arrow-left",i.ArrowRight="arrow-right",i.ArrowTopLeft="arrow-top-left",i.ArrowTopRight="arrow-top-right",i.ArrowUp="arrow-up",i.ArrowsArc="arrows-arc",i.ArrowsHorizontal="arrows-horizontal",i.ArrowsVertical="arrows-vertical",i.Asterisk="asterisk",i.At="at",i.AutomaticUpdates="automatic-updates",i.Axle="axle",i.Backlink="backlink",i.BackwardTen="backward-ten",i.Badge="badge",i.BanCircle="ban-circle",i.BankAccount="bank-account",i.Barcode="barcode",i.BinaryNumber="binary-number",i.Blank="blank",i.BlockPromote="block-promote",i.BlockedPerson="blocked-person",i.Bold="bold",i.Book="book",i.Bookmark="bookmark",i.Box="box",i.BranchLocked="branch-locked",i.BranchUnlocked="branch-unlocked",i.Briefcase="briefcase",i.BringData="bring-data",i.BringForward="bring-forward",i.BritishPound="british-pound",i.Bug="bug",i.Buggy="buggy",i.Build="build",i.Bullseye="bullseye",i.Calculator="calculator",i.Calendar="calendar",i.Camera="camera",i.CaretDown="caret-down",i.CaretLeft="caret-left",i.CaretRight="caret-right",i.CaretUp="caret-up",i.CargoShip="cargo-ship",i.CellTower="cell-tower",i.Changes="changes",i.Chart="chart",i.Chat="chat",i.ChevronBackward="chevron-backward",i.ChevronDown="chevron-down",i.ChevronForward="chevron-forward",i.ChevronLeft="chevron-left",i.ChevronRight="chevron-right",i.ChevronUp="chevron-up",i.CircleArrowDown="circle-arrow-down",i.CircleArrowLeft="circle-arrow-left",i.CircleArrowRight="circle-arrow-right",i.CircleArrowUp="circle-arrow-up",i.CircleDashed="circle-dashed",i.Circle="circle",i.Citation="citation",i.Clean="clean",i.Clip="clip",i.ClipboardFile="clipboard-file",i.Clipboard="clipboard",i.CloudDownload="cloud-download",i.CloudServer="cloud-server",i.CloudTick="cloud-tick",i.CloudUpload="cloud-upload",i.Cloud="cloud",i.CodeBlock="code-block",i.Code="code",i.Cog="cog",i.CollapseAll="collapse-all",i.ColorFill="color-fill",i.ColumnLayout="column-layout",i.Comment="comment",i.Comparison="comparison",i.Compass="compass",i.Compressed="compressed",i.Confirm="confirm",i.ConsoleAlert="console-alert",i.Console="console",i.Construction="construction",i.Contrast="contrast",i.Control="control",i.CreditCard="credit-card",i.Crop="crop",i.CrossCircle="cross-circle",i.Cross="cross",i.Crown="crown",i.CrystalBall="crystal-ball",i.CssStyle="css-style",i.CubeAdd="cube-add",i.CubeCutout="cube-cutout",i.CubeCutouts="cube-cutouts",i.CubeEdit="cube-edit",i.CubeRemove="cube-remove",i.Cube="cube",i.Cubes="cubes",i.CurlyBraces="curly-braces",i.CurvedRangeChart="curved-range-chart",i.Cut="cut",i.Cycle="cycle",i.Dashboard="dashboard",i.DataCloud="data-cloud",i.DataConnection="data-connection",i.DataLineage="data-lineage",i.DataSearch="data-search",i.DataSync="data-sync",i.Database="database",i.DeleteClip="delete-clip",i.Delete="delete",i.Delta="delta",i.DeriveColumn="derive-column",i.Descendant="descendant",i.Desktop="desktop",i.Detection="detection",i.Diagnosis="diagnosis",i.DiagramTree="diagram-tree",i.DirectionLeft="direction-left",i.DirectionRight="direction-right",i.Disable="disable",i.Divide="divide",i.DocumentCode="document-code",i.DocumentLocked="document-locked",i.DocumentOpen="document-open",i.DocumentShare="document-share",i.Document="document",i.Dollar="dollar",i.Dot="dot",i.DoubleCaretHorizontal="double-caret-horizontal",i.DoubleCaretVertical="double-caret-vertical",i.DoubleChevronDown="double-chevron-down",i.DoubleChevronLeft="double-chevron-left",i.DoubleChevronRight="double-chevron-right",i.DoubleChevronUp="double-chevron-up",i.DoughnutChart="doughnut-chart",i.Download="download",i.DragHandleHorizontal="drag-handle-horizontal",i.DragHandleVertical="drag-handle-vertical",i.Draw="draw",i.DrawerLeftFilled="drawer-left-filled",i.DrawerLeft="drawer-left",i.DrawerRightFilled="drawer-right-filled",i.DrawerRight="drawer-right",i.DriveTime="drive-time",i.DroneUav="drone-uav",i.Drone="drone",i.Duplicate="duplicate",i.Edit="edit",i.Eject="eject",i.Emoji="emoji",i.Endnote="endnote",i.Endorsed="endorsed",i.Engagement="engagement",i.Envelope="envelope",i.Equals="equals",i.Eraser="eraser",i.Error="error",i.Euro="euro",i.Excavator="excavator",i.Exchange="exchange",i.ExcludeRow="exclude-row",i.ExpandAll="expand-all",i.Explain="explain",i.Export="export",i.EyeOff="eye-off",i.EyeOn="eye-on",i.EyeOpen="eye-open",i.FastBackward="fast-backward",i.FastForward="fast-forward",i.FeedSubscribed="feed-subscribed",i.Feed="feed",i.FighterJet="fighter-jet",i.Film="film",i.FilterKeep="filter-keep",i.FilterList="filter-list",i.FilterOpen="filter-open",i.FilterRemove="filter-remove",i.FilterSortAsc="filter-sort-asc",i.FilterSortDesc="filter-sort-desc",i.Filter="filter",i.Flag="flag",i.Flame="flame",i.Flash="flash",i.FloatingPoint="floating-point",i.FloppyDisk="floppy-disk",i.FlowBranch="flow-branch",i.FlowEnd="flow-end",i.FlowLinear="flow-linear",i.FlowReviewBranch="flow-review-branch",i.FlowReview="flow-review",i.Flows="flows",i.FolderClose="folder-close",i.FolderNew="folder-new",i.FolderOpen="folder-open",i.FolderSharedOpen="folder-shared-open",i.FolderShared="folder-shared",i.Follower="follower",i.Following="following",i.Font="font",i.ForkEnd="fork-end",i.Fork="fork",i.Form="form",i.ForwardTen="forward-ten",i.FrameToFrame="frame-to-frame",i.Fuel="fuel",i.FullCircle="full-circle",i.FullStackedChart="full-stacked-chart",i.Fullscreen="fullscreen",i.FunctionMinimal="function-minimal",i.Function="function",i.GanttChart="gantt-chart",i.Generate="generate",i.Geofence="geofence",i.Geolocation="geolocation",i.Geosearch="geosearch",i.Geotime="geotime",i.GiftBox="gift-box",i.GitBranch="git-branch",i.GitCommit="git-commit",i.GitMerge="git-merge",i.GitNewBranch="git-new-branch",i.GitPull="git-pull",i.GitPush="git-push",i.GitRebase="git-rebase",i.GitRepo="git-repo",i.Glass="glass",i.GlobeNetworkAdd="globe-network-add",i.GlobeNetwork="globe-network",i.Globe="globe",i.GraphRemove="graph-remove",i.Graph="graph",i.GreaterThanOrEqualTo="greater-than-or-equal-to",i.GreaterThan="greater-than",i.GridView="grid-view",i.Grid="grid",i.GroupItem="group-item",i.GroupObjects="group-objects",i.GroupedBarChart="grouped-bar-chart",i.HandDown="hand-down",i.HandLeft="hand-left",i.HandRight="hand-right",i.HandUp="hand-up",i.Hand="hand",i.Hat="hat",i.HeaderOne="header-one",i.HeaderThree="header-three",i.HeaderTwo="header-two",i.Header="header",i.Headset="headset",i.HeartBroken="heart-broken",i.Heart="heart",i.HeatGrid="heat-grid",i.Heatmap="heatmap",i.Helicopter="helicopter",i.Help="help",i.HelperManagement="helper-management",i.Hexagon="hexagon",i.HighPriority="high-priority",i.HighVoltagePole="high-voltage-pole",i.Highlight="highlight",i.History="history",i.Home="home",i.HorizontalBarChartAsc="horizontal-bar-chart-asc",i.HorizontalBarChartDesc="horizontal-bar-chart-desc",i.HorizontalBarChart="horizontal-bar-chart",i.HorizontalDistribution="horizontal-distribution",i.HorizontalInbetween="horizontal-inbetween",i.Hurricane="hurricane",i.IdNumber="id-number",i.ImageRotateLeft="image-rotate-left",i.ImageRotateRight="image-rotate-right",i.Import="import",i.InboxFiltered="inbox-filtered",i.InboxGeo="inbox-geo",i.InboxSearch="inbox-search",i.InboxUpdate="inbox-update",i.Inbox="inbox",i.InfoSign="info-sign",i.Inheritance="inheritance",i.InheritedGroup="inherited-group",i.InnerJoin="inner-join",i.Input="input",i.Insert="insert",i.Intelligence="intelligence",i.Intersection="intersection",i.IpAddress="ip-address",i.IssueClosed="issue-closed",i.IssueNew="issue-new",i.Issue="issue",i.Italic="italic",i.JoinTable="join-table",i.KeyBackspace="key-backspace",i.KeyCommand="key-command",i.KeyControl="key-control",i.KeyDelete="key-delete",i.KeyEnter="key-enter",i.KeyEscape="key-escape",i.KeyOption="key-option",i.KeyShift="key-shift",i.KeyTab="key-tab",i.Key="key",i.KnownVehicle="known-vehicle",i.LabTest="lab-test",i.Label="label",i.LayerOutline="layer-outline",i.Layer="layer",i.Layers="layers",i.LayoutAuto="layout-auto",i.LayoutBalloon="layout-balloon",i.LayoutBottomRowThreeTiles="layout-bottom-row-three-tiles",i.LayoutBottomRowTwoTiles="layout-bottom-row-two-tiles",i.LayoutCircle="layout-circle",i.LayoutGrid="layout-grid",i.LayoutGroupBy="layout-group-by",i.LayoutHierarchy="layout-hierarchy",i.LayoutLeftColumnThreeTiles="layout-left-column-three-tiles",i.LayoutLeftColumnTwoTiles="layout-left-column-two-tiles",i.LayoutLinear="layout-linear",i.LayoutRightColumnThreeTiles="layout-right-column-three-tiles",i.LayoutRightColumnTwoTiles="layout-right-column-two-tiles",i.LayoutSkewGrid="layout-skew-grid",i.LayoutSortedClusters="layout-sorted-clusters",i.LayoutThreeColumns="layout-three-columns",i.LayoutThreeRows="layout-three-rows",i.LayoutTopRowThreeTiles="layout-top-row-three-tiles",i.LayoutTopRowTwoTiles="layout-top-row-two-tiles",i.LayoutTwoColumns="layout-two-columns",i.LayoutTwoRows="layout-two-rows",i.Layout="layout",i.Learning="learning",i.LeftJoin="left-join",i.LengthenText="lengthen-text",i.LessThanOrEqualTo="less-than-or-equal-to",i.LessThan="less-than",i.Lifesaver="lifesaver",i.Lightbulb="lightbulb",i.Lightning="lightning",i.Link="link",i.LinkedSquares="linked-squares",i.ListColumns="list-columns",i.ListDetailView="list-detail-view",i.List="list",i.Locate="locate",i.Lock="lock",i.Locomotive="locomotive",i.LogIn="log-in",i.LogOut="log-out",i.LowVoltagePole="low-voltage-pole",i.Manual="manual",i.ManuallyEnteredData="manually-entered-data",i.ManyToMany="many-to-many",i.ManyToOne="many-to-one",i.MapCreate="map-create",i.MapMarker="map-marker",i.Map="map",i.Markdown="markdown",i.Maximize="maximize",i.Media="media",i.MenuClosed="menu-closed",i.MenuOpen="menu-open",i.Menu="menu",i.MergeColumns="merge-columns",i.MergeLinks="merge-links",i.Microphone="microphone",i.Minimize="minimize",i.Minus="minus",i.MobilePhone="mobile-phone",i.MobileVideo="mobile-video",i.ModalFilled="modal-filled",i.Modal="modal",i.Model="model",i.Moon="moon",i.More="more",i.Mountain="mountain",i.Move="move",i.Mugshot="mugshot",i.MultiSelect="multi-select",i.Music="music",i.Nest="nest",i.NewComment="new-comment",i.NewDrawing="new-drawing",i.NewGridItem="new-grid-item",i.NewLayer="new-layer",i.NewLayers="new-layers",i.NewLink="new-link",i.NewObject="new-object",i.NewPerson="new-person",i.NewPrescription="new-prescription",i.NewShield="new-shield",i.NewTextBox="new-text-box",i.Ninja="ninja",i.NotEqualTo="not-equal-to",i.NotificationsAdd="notifications-add",i.NotificationsSnooze="notifications-snooze",i.NotificationsUpdated="notifications-updated",i.Notifications="notifications",i.NumberedList="numbered-list",i.Numerical="numerical",i.ObjectView="object-view",i.Office="office",i.Offline="offline",i.OilField="oil-field",i.OneColumn="one-column",i.OneToMany="one-to-many",i.OneToOne="one-to-one",i.OpenApplication="open-application",i.Outdated="outdated",i.OuterJoin="outer-join",i.Output="output",i.Package="package",i.PageBreak="page-break",i.PageLayout="page-layout",i.PanelStats="panel-stats",i.PanelTable="panel-table",i.Panel="panel",i.Paperclip="paperclip",i.Paragraph="paragraph",i.PasteVariable="paste-variable",i.PathSearch="path-search",i.Path="path",i.Pause="pause",i.People="people",i.Percentage="percentage",i.Person="person",i.PhoneCall="phone-call",i.PhoneForward="phone-forward",i.PhoneSearch="phone-search",i.Phone="phone",i.PieChart="pie-chart",i.Pill="pill",i.Pin="pin",i.Pistol="pistol",i.PivotTable="pivot-table",i.Pivot="pivot",i.Play="play",i.Playbook="playbook",i.Plus="plus",i.PolygonFilter="polygon-filter",i.Popout="popout",i.Power="power",i.PredictiveAnalysis="predictive-analysis",i.Prescription="prescription",i.Presentation="presentation",i.Print="print",i.Projects="projects",i.Properties="properties",i.Property="property",i.PublishFunction="publish-function",i.Pulse="pulse",i.Rain="rain",i.Random="random",i.RangeRing="range-ring",i.Record="record",i.RectHeight="rect-height",i.RectWidth="rect-width",i.Rectangle="rectangle",i.Redo="redo",i.RefreshOff="refresh-off",i.Refresh="refresh",i.Regex="regex",i.RegressionChart="regression-chart",i.RemoveColumnLeft="remove-column-left",i.RemoveColumnRight="remove-column-right",i.RemoveColumn="remove-column",i.RemoveRowBottom="remove-row-bottom",i.RemoveRowTop="remove-row-top",i.Remove="remove",i.Repeat="repeat",i.Reset="reset",i.Resolve="resolve",i.Rig="rig",i.RightJoin="right-join",i.Ring="ring",i.RocketSlant="rocket-slant",i.Rocket="rocket",i.RootFolder="root-folder",i.RotateCcw="rotate-ccw",i.RotateCw="rotate-cw",i.RotateDocument="rotate-document",i.RotatePage="rotate-page",i.Route="route",i.RunHistory="run-history",i.Satellite="satellite",i.Saved="saved",i.ScatterPlot="scatter-plot",i.SearchAround="search-around",i.SearchTemplate="search-template",i.SearchText="search-text",i.Search="search",i.SegmentedControl="segmented-control",i.Select="select",i.SelectionBoxAdd="selection-box-add",i.SelectionBoxEdit="selection-box-edit",i.SelectionBoxRemove="selection-box-remove",i.SelectionBox="selection-box",i.Selection="selection",i.SendBackward="send-backward",i.SendMessage="send-message",i.SendToGraph="send-to-graph",i.SendToMap="send-to-map",i.SendTo="send-to",i.Sensor="sensor",i.SeriesAdd="series-add",i.SeriesConfiguration="series-configuration",i.SeriesDerived="series-derived",i.SeriesFiltered="series-filtered",i.SeriesSearch="series-search",i.ServerInstall="server-install",i.Server="server",i.Settings="settings",i.Shapes="shapes",i.Share="share",i.SharedFilter="shared-filter",i.Shield="shield",i.Ship="ship",i.Shop="shop",i.ShoppingCart="shopping-cart",i.ShortenText="shorten-text",i.SignalSearch="signal-search",i.SimCard="sim-card",i.Slash="slash",i.SmallCross="small-cross",i.SmallInfoSign="small-info-sign",i.SmallMinus="small-minus",i.SmallPlus="small-plus",i.SmallSquare="small-square",i.SmallTick="small-tick",i.Snowflake="snowflake",i.SoccerBall="soccer-ball",i.SocialMedia="social-media",i.SortAlphabeticalDesc="sort-alphabetical-desc",i.SortAlphabetical="sort-alphabetical",i.SortAsc="sort-asc",i.SortDesc="sort-desc",i.SortNumericalDesc="sort-numerical-desc",i.SortNumerical="sort-numerical",i.Sort="sort",i.SpellCheck="spell-check",i.Spin="spin",i.SplitColumns="split-columns",i.SportsStadium="sports-stadium",i.Square="square",i.StackedChart="stacked-chart",i.StadiumGeometry="stadium-geometry",i.StarEmpty="star-empty",i.Star="star",i.StepBackward="step-backward",i.StepChart="step-chart",i.StepForward="step-forward",i.Stop="stop",i.Stopwatch="stopwatch",i.Strikethrough="strikethrough",i.Style="style",i.Subscript="subscript",i.SubtractRightJoin="subtract-right-join",i.Superscript="superscript",i.SwapHorizontal="swap-horizontal",i.SwapVertical="swap-vertical",i.Sweep="sweep",i.Switch="switch",i.SymbolCircle="symbol-circle",i.SymbolCross="symbol-cross",i.SymbolDiamond="symbol-diamond",i.SymbolRectangle="symbol-rectangle",i.SymbolSquare="symbol-square",i.SymbolTriangleDown="symbol-triangle-down",i.SymbolTriangleUp="symbol-triangle-up",i.Syringe="syringe",i.TableSync="table-sync",i.TagAdd="tag-add",i.TagPromote="tag-promote",i.TagRefresh="tag-refresh",i.TagUndo="tag-undo",i.Tag="tag",i.Tags="tags",i.TakeAction="take-action",i.Tank="tank",i.Target="target",i.Taxi="taxi",i.Team="team",i.Temperature="temperature",i.TextHighlight="text-highlight",i.ThAdd="th-add",i.ThDerived="th-derived",i.ThDisconnect="th-disconnect",i.ThFiltered="th-filtered",i.ThListAdd="th-list-add",i.ThList="th-list",i.ThVirtualAdd="th-virtual-add",i.ThVirtual="th-virtual",i.Th="th",i.ThirdParty="third-party",i.ThumbsDown="thumbs-down",i.ThumbsUp="thumbs-up",i.TickCircle="tick-circle",i.Tick="tick",i.Time="time",i.TimelineAreaChart="timeline-area-chart",i.TimelineBarChart="timeline-bar-chart",i.TimelineEvents="timeline-events",i.TimelineLineChart="timeline-line-chart",i.Tint="tint",i.Torch="torch",i.Tractor="tractor",i.Train="train",i.Translate="translate",i.Trash="trash",i.Tree="tree",i.TrendingDown="trending-down",i.TrendingUp="trending-up",i.Trophy="trophy",i.Truck="truck",i.TwoColumns="two-columns",i.Unarchive="unarchive",i.Underline="underline",i.Undo="undo",i.UngroupObjects="ungroup-objects",i.UnknownVehicle="unknown-vehicle",i.Unlink="unlink",i.Unlock="unlock",i.Unpin="unpin",i.Unresolve="unresolve",i.Updated="updated",i.Upload="upload",i.User="user",i.VariableLayer="variable-layer",i.Variable="variable",i.Vector="vector",i.VerticalBarChartAsc="vertical-bar-chart-asc",i.VerticalBarChartDesc="vertical-bar-chart-desc",i.VerticalDistribution="vertical-distribution",i.VerticalInbetween="vertical-inbetween",i.Video="video",i.Virus="virus",i.VolumeDown="volume-down",i.VolumeOff="volume-off",i.VolumeUp="volume-up",i.Walk="walk",i.WarningSign="warning-sign",i.WaterfallChart="waterfall-chart",i.Waves="waves",i.WidgetButton="widget-button",i.WidgetFooter="widget-footer",i.WidgetHeader="widget-header",i.Widget="widget",i.Wind="wind",i.Won="won",i.WrapLines="wrap-lines",i.WrenchRedo="wrench-redo",i.WrenchSnooze="wrench-snooze",i.WrenchTime="wrench-time",i.Wrench="wrench",i.Yen="yen",i.ZoomIn="zoom-in",i.ZoomOut="zoom-out",i.ZoomToFit="zoom-to-fit"})(h||(h={}));h.AddApplication+"",h.AddChild+"",h.AddClip+"",h.AddColumnLeft+"",h.AddColumnRight+"",h.AddDerivedColumn+"",h.AddLocation+"",h.AddParent+"",h.AddRowBottom+"",h.AddRowTop+"",h.AddTile+"",h.AddToArtifact+"",h.AddToFolder+"",h.Add+"",h.AimpointsTarget+"",h.Airplane+"",h.AlignCenter+"",h.AlignJustify+"",h.AlignLeft+"",h.AlignRight+"",h.AlignmentBottom+"",h.AlignmentHorizontalCenter+"",h.AlignmentLeft+"",h.AlignmentRight+"",h.AlignmentTop+"",h.AlignmentVerticalCenter+"",h.Ammunition+"",h.Anchor+"",h.Annotation+"",h.Announcement+"",h.Antenna+"",h.AppHeader+"",h.Application+"",h.Applications+"",h.Archive+"",h.AreaOfInterest+"",h.ArrayBoolean+"",h.ArrayDate+"",h.ArrayFloatingPoint+"",h.ArrayNumeric+"",h.ArrayObject+"",h.ArrayString+"",h.ArrayTimestamp+"",h.Array+"",h.ArrowBottomLeft+"",h.ArrowBottomRight+"",h.ArrowDown+"",h.ArrowLeft+"",h.ArrowRight+"",h.ArrowTopLeft+"",h.ArrowTopRight+"",h.ArrowUp+"",h.ArrowsArc+"",h.ArrowsHorizontal+"",h.ArrowsVertical+"",h.Asterisk+"",h.At+"",h.AutomaticUpdates+"",h.Axle+"",h.Backlink+"",h.BackwardTen+"",h.Badge+"",h.BanCircle+"",h.BankAccount+"",h.Barcode+"",h.BinaryNumber+"",h.Blank+"",h.BlockPromote+"",h.BlockedPerson+"",h.Bold+"",h.Book+"",h.Bookmark+"",h.Box+"",h.BranchLocked+"",h.BranchUnlocked+"",h.Briefcase+"",h.BringData+"",h.BringForward+"",h.BritishPound+"",h.Bug+"",h.Buggy+"",h.Build+"",h.Bullseye+"",h.Calculator+"",h.Calendar+"",h.Camera+"",h.CaretDown+"",h.CaretLeft+"",h.CaretRight+"",h.CaretUp+"",h.CargoShip+"",h.CellTower+"",h.Changes+"",h.Chart+"",h.Chat+"",h.ChevronBackward+"",h.ChevronDown+"",h.ChevronForward+"",h.ChevronLeft+"",h.ChevronRight+"",h.ChevronUp+"",h.CircleArrowDown+"",h.CircleArrowLeft+"",h.CircleArrowRight+"",h.CircleArrowUp+"",h.CircleDashed+"",h.Circle+"",h.Citation+"",h.Clean+"",h.Clip+"",h.ClipboardFile+"",h.Clipboard+"",h.CloudDownload+"",h.CloudServer+"",h.CloudTick+"",h.CloudUpload+"",h.Cloud+"",h.CodeBlock+"",h.Code+"",h.Cog+"",h.CollapseAll+"",h.ColorFill+"",h.ColumnLayout+"",h.Comment+"",h.Comparison+"",h.Compass+"",h.Compressed+"",h.Confirm+"",h.ConsoleAlert+"",h.Console+"",h.Construction+"",h.Contrast+"",h.Control+"",h.CreditCard+"",h.Crop+"",h.CrossCircle+"",h.Cross+"",h.Crown+"",h.CrystalBall+"",h.CssStyle+"",h.CubeAdd+"",h.CubeCutout+"",h.CubeCutouts+"",h.CubeEdit+"",h.CubeRemove+"",h.Cube+"",h.Cubes+"",h.CurlyBraces+"",h.CurvedRangeChart+"",h.Cut+"",h.Cycle+"",h.Dashboard+"",h.DataCloud+"",h.DataConnection+"",h.DataLineage+"",h.DataSearch+"",h.DataSync+"",h.Database+"",h.DeleteClip+"",h.Delete+"",h.Delta+"",h.DeriveColumn+"",h.Descendant+"",h.Desktop+"",h.Detection+"",h.Diagnosis+"",h.DiagramTree+"",h.DirectionLeft+"",h.DirectionRight+"",h.Disable+"",h.Divide+"",h.DocumentCode+"",h.DocumentLocked+"",h.DocumentOpen+"",h.DocumentShare+"",h.Document+"",h.Dollar+"",h.Dot+"",h.DoubleCaretHorizontal+"",h.DoubleCaretVertical+"",h.DoubleChevronDown+"",h.DoubleChevronLeft+"",h.DoubleChevronRight+"",h.DoubleChevronUp+"",h.DoughnutChart+"",h.Download+"",h.DragHandleHorizontal+"",h.DragHandleVertical+"",h.Draw+"",h.DrawerLeftFilled+"",h.DrawerLeft+"",h.DrawerRightFilled+"",h.DrawerRight+"",h.DriveTime+"",h.DroneUav+"",h.Drone+"",h.Duplicate+"",h.Edit+"",h.Eject+"",h.Emoji+"",h.Endnote+"",h.Endorsed+"",h.Engagement+"",h.Envelope+"",h.Equals+"",h.Eraser+"",h.Error+"",h.Euro+"",h.Excavator+"",h.Exchange+"",h.ExcludeRow+"",h.ExpandAll+"",h.Explain+"",h.Export+"",h.EyeOff+"",h.EyeOn+"",h.EyeOpen+"",h.FastBackward+"",h.FastForward+"",h.FeedSubscribed+"",h.Feed+"",h.FighterJet+"",h.Film+"",h.FilterKeep+"",h.FilterList+"",h.FilterOpen+"",h.FilterRemove+"",h.FilterSortAsc+"",h.FilterSortDesc+"",h.Filter+"",h.Flag+"",h.Flame+"",h.Flash+"",h.FloatingPoint+"",h.FloppyDisk+"",h.FlowBranch+"",h.FlowEnd+"",h.FlowLinear+"",h.FlowReviewBranch+"",h.FlowReview+"",h.Flows+"",h.FolderClose+"",h.FolderNew+"",h.FolderOpen+"",h.FolderSharedOpen+"",h.FolderShared+"",h.Follower+"",h.Following+"",h.Font+"",h.ForkEnd+"",h.Fork+"",h.Form+"",h.ForwardTen+"",h.FrameToFrame+"",h.Fuel+"",h.FullCircle+"",h.FullStackedChart+"",h.Fullscreen+"",h.FunctionMinimal+"",h.Function+"",h.GanttChart+"",h.Generate+"",h.Geofence+"",h.Geolocation+"",h.Geosearch+"",h.Geotime+"",h.GiftBox+"",h.GitBranch+"",h.GitCommit+"",h.GitMerge+"",h.GitNewBranch+"",h.GitPull+"",h.GitPush+"",h.GitRebase+"",h.GitRepo+"",h.Glass+"",h.GlobeNetworkAdd+"",h.GlobeNetwork+"",h.Globe+"",h.GraphRemove+"",h.Graph+"",h.GreaterThanOrEqualTo+"",h.GreaterThan+"",h.GridView+"",h.Grid+"",h.GroupItem+"",h.GroupObjects+"",h.GroupedBarChart+"",h.HandDown+"",h.HandLeft+"",h.HandRight+"",h.HandUp+"",h.Hand+"",h.Hat+"",h.HeaderOne+"",h.HeaderThree+"",h.HeaderTwo+"",h.Header+"",h.Headset+"",h.HeartBroken+"",h.Heart+"",h.HeatGrid+"",h.Heatmap+"",h.Helicopter+"",h.Help+"",h.HelperManagement+"",h.Hexagon+"",h.HighPriority+"",h.HighVoltagePole+"",h.Highlight+"",h.History+"",h.Home+"",h.HorizontalBarChartAsc+"",h.HorizontalBarChartDesc+"",h.HorizontalBarChart+"",h.HorizontalDistribution+"",h.HorizontalInbetween+"",h.Hurricane+"",h.IdNumber+"",h.ImageRotateLeft+"",h.ImageRotateRight+"",h.Import+"",h.InboxFiltered+"",h.InboxGeo+"",h.InboxSearch+"",h.InboxUpdate+"",h.Inbox+"",h.InfoSign+"",h.Inheritance+"",h.InheritedGroup+"",h.InnerJoin+"",h.Input+"",h.Insert+"",h.Intelligence+"",h.Intersection+"",h.IpAddress+"",h.IssueClosed+"",h.IssueNew+"",h.Issue+"",h.Italic+"",h.JoinTable+"",h.KeyBackspace+"",h.KeyCommand+"",h.KeyControl+"",h.KeyDelete+"",h.KeyEnter+"",h.KeyEscape+"",h.KeyOption+"",h.KeyShift+"",h.KeyTab+"",h.Key+"",h.KnownVehicle+"",h.LabTest+"",h.Label+"",h.LayerOutline+"",h.Layer+"",h.Layers+"",h.LayoutAuto+"",h.LayoutBalloon+"",h.LayoutBottomRowThreeTiles+"",h.LayoutBottomRowTwoTiles+"",h.LayoutCircle+"",h.LayoutGrid+"",h.LayoutGroupBy+"",h.LayoutHierarchy+"",h.LayoutLeftColumnThreeTiles+"",h.LayoutLeftColumnTwoTiles+"",h.LayoutLinear+"",h.LayoutRightColumnThreeTiles+"",h.LayoutRightColumnTwoTiles+"",h.LayoutSkewGrid+"",h.LayoutSortedClusters+"",h.LayoutThreeColumns+"",h.LayoutThreeRows+"",h.LayoutTopRowThreeTiles+"",h.LayoutTopRowTwoTiles+"",h.LayoutTwoColumns+"",h.LayoutTwoRows+"",h.Layout+"",h.Learning+"",h.LeftJoin+"",h.LengthenText+"",h.LessThanOrEqualTo+"",h.LessThan+"",h.Lifesaver+"",h.Lightbulb+"",h.Lightning+"",h.Link+"",h.LinkedSquares+"",h.ListColumns+"",h.ListDetailView+"",h.List+"",h.Locate+"",h.Lock+"",h.Locomotive+"",h.LogIn+"",h.LogOut+"",h.LowVoltagePole+"",h.Manual+"",h.ManuallyEnteredData+"",h.ManyToMany+"",h.ManyToOne+"",h.MapCreate+"",h.MapMarker+"",h.Map+"",h.Markdown+"",h.Maximize+"",h.Media+"",h.MenuClosed+"",h.MenuOpen+"",h.Menu+"",h.MergeColumns+"",h.MergeLinks+"",h.Microphone+"",h.Minimize+"",h.Minus+"",h.MobilePhone+"",h.MobileVideo+"",h.ModalFilled+"",h.Modal+"",h.Model+"",h.Moon+"",h.More+"",h.Mountain+"",h.Move+"",h.Mugshot+"",h.MultiSelect+"",h.Music+"",h.Nest+"",h.NewComment+"",h.NewDrawing+"",h.NewGridItem+"",h.NewLayer+"",h.NewLayers+"",h.NewLink+"",h.NewObject+"",h.NewPerson+"",h.NewPrescription+"",h.NewShield+"",h.NewTextBox+"",h.Ninja+"",h.NotEqualTo+"",h.NotificationsAdd+"",h.NotificationsSnooze+"",h.NotificationsUpdated+"",h.Notifications+"",h.NumberedList+"",h.Numerical+"",h.ObjectView+"",h.Office+"",h.Offline+"",h.OilField+"",h.OneColumn+"",h.OneToMany+"",h.OneToOne+"",h.OpenApplication+"",h.Outdated+"",h.OuterJoin+"",h.Output+"",h.Package+"",h.PageBreak+"",h.PageLayout+"",h.PanelStats+"",h.PanelTable+"",h.Panel+"",h.Paperclip+"",h.Paragraph+"",h.PasteVariable+"",h.PathSearch+"",h.Path+"",h.Pause+"",h.People+"",h.Percentage+"",h.Person+"",h.PhoneCall+"",h.PhoneForward+"",h.PhoneSearch+"",h.Phone+"",h.PieChart+"",h.Pill+"",h.Pin+"",h.Pistol+"",h.PivotTable+"",h.Pivot+"",h.Play+"",h.Playbook+"",h.Plus+"",h.PolygonFilter+"",h.Popout+"",h.Power+"",h.PredictiveAnalysis+"",h.Prescription+"",h.Presentation+"",h.Print+"",h.Projects+"",h.Properties+"",h.Property+"",h.PublishFunction+"",h.Pulse+"",h.Rain+"",h.Random+"",h.RangeRing+"",h.Record+"",h.RectHeight+"",h.RectWidth+"",h.Rectangle+"",h.Redo+"",h.RefreshOff+"",h.Refresh+"",h.Regex+"",h.RegressionChart+"",h.RemoveColumnLeft+"",h.RemoveColumnRight+"",h.RemoveColumn+"",h.RemoveRowBottom+"",h.RemoveRowTop+"",h.Remove+"",h.Repeat+"",h.Reset+"",h.Resolve+"",h.Rig+"",h.RightJoin+"",h.Ring+"",h.RocketSlant+"",h.Rocket+"",h.RootFolder+"",h.RotateCcw+"",h.RotateCw+"",h.RotateDocument+"",h.RotatePage+"",h.Route+"",h.RunHistory+"",h.Satellite+"",h.Saved+"",h.ScatterPlot+"",h.SearchAround+"",h.SearchTemplate+"",h.SearchText+"",h.Search+"",h.SegmentedControl+"",h.Select+"",h.SelectionBoxAdd+"",h.SelectionBoxEdit+"",h.SelectionBoxRemove+"",h.SelectionBox+"",h.Selection+"",h.SendBackward+"",h.SendMessage+"",h.SendToGraph+"",h.SendToMap+"",h.SendTo+"",h.Sensor+"",h.SeriesAdd+"",h.SeriesConfiguration+"",h.SeriesDerived+"",h.SeriesFiltered+"",h.SeriesSearch+"",h.ServerInstall+"",h.Server+"",h.Settings+"",h.Shapes+"",h.Share+"",h.SharedFilter+"",h.Shield+"",h.Ship+"",h.Shop+"",h.ShoppingCart+"",h.ShortenText+"",h.SignalSearch+"",h.SimCard+"",h.Slash+"",h.SmallCross+"",h.SmallInfoSign+"",h.SmallMinus+"",h.SmallPlus+"",h.SmallSquare+"",h.SmallTick+"",h.Snowflake+"",h.SoccerBall+"",h.SocialMedia+"",h.SortAlphabeticalDesc+"",h.SortAlphabetical+"",h.SortAsc+"",h.SortDesc+"",h.SortNumericalDesc+"",h.SortNumerical+"",h.Sort+"",h.SpellCheck+"",h.Spin+"",h.SplitColumns+"",h.SportsStadium+"",h.Square+"",h.StackedChart+"",h.StadiumGeometry+"",h.StarEmpty+"",h.Star+"",h.StepBackward+"",h.StepChart+"",h.StepForward+"",h.Stop+"",h.Stopwatch+"",h.Strikethrough+"",h.Style+"",h.Subscript+"",h.SubtractRightJoin+"",h.Superscript+"",h.SwapHorizontal+"",h.SwapVertical+"",h.Sweep+"",h.Switch+"",h.SymbolCircle+"",h.SymbolCross+"",h.SymbolDiamond+"",h.SymbolRectangle+"",h.SymbolSquare+"",h.SymbolTriangleDown+"",h.SymbolTriangleUp+"",h.Syringe+"",h.TableSync+"",h.TagAdd+"",h.TagPromote+"",h.TagRefresh+"",h.TagUndo+"",h.Tag+"",h.Tags+"",h.TakeAction+"",h.Tank+"",h.Target+"",h.Taxi+"",h.Team+"",h.Temperature+"",h.TextHighlight+"",h.ThAdd+"",h.ThDerived+"",h.ThDisconnect+"",h.ThFiltered+"",h.ThListAdd+"",h.ThList+"",h.ThVirtualAdd+"",h.ThVirtual+"",h.Th+"",h.ThirdParty+"",h.ThumbsDown+"",h.ThumbsUp+"",h.TickCircle+"",h.Tick+"",h.Time+"",h.TimelineAreaChart+"",h.TimelineBarChart+"",h.TimelineEvents+"",h.TimelineLineChart+"",h.Tint+"",h.Torch+"",h.Tractor+"",h.Train+"",h.Translate+"",h.Trash+"",h.Tree+"",h.TrendingDown+"",h.TrendingUp+"",h.Trophy+"",h.Truck+"",h.TwoColumns+"",h.Unarchive+"",h.Underline+"",h.Undo+"",h.UngroupObjects+"",h.UnknownVehicle+"",h.Unlink+"",h.Unlock+"",h.Unpin+"",h.Unresolve+"",h.Updated+"",h.Upload+"",h.User+"",h.VariableLayer+"",h.Variable+"",h.Vector+"",h.VerticalBarChartAsc+"",h.VerticalBarChartDesc+"",h.VerticalDistribution+"",h.VerticalInbetween+"",h.Video+"",h.Virus+"",h.VolumeDown+"",h.VolumeOff+"",h.VolumeUp+"",h.Walk+"",h.WarningSign+"",h.WaterfallChart+"",h.Waves+"",h.WidgetButton+"",h.WidgetFooter+"",h.WidgetHeader+"",h.Widget+"",h.Wind+"",h.Won+"",h.WrapLines+"",h.WrenchRedo+"",h.WrenchSnooze+"",h.WrenchTime+"",h.Wrench+"",h.Yen+"",h.ZoomIn+"",h.ZoomOut+"",h.ZoomToFit+"";const tv={},nv={};for(const i of Object.values(h))tv[YS(i)]=i,nv[jS(i).toUpperCase()]=i;const iv={...tv,...nv},JS=new Set(Object.values(iv));function QS(i){return typeof NODE_ENV<"u"&&NODE_ENV===i}async function ey(i,e){const t=QS("development")&&typeof performance<"u";let a;if(t&&(a=performance.now(),console.info(`Started '${i}'...`)),await e(),t){const s=Math.round(performance.now()-a);console.info(`Finished '${i}' in ${s}ms`)}}async function ty(i){const{loader:e=Cs.defaultLoader}=i;return typeof e=="function"?e:e==="all"?(await wg(async()=>{const{allPathsLoader:t}=await import("./allPathsLoader-DDKJUW9N.js");return{allPathsLoader:t}},[],import.meta.url)).allPathsLoader:(await wg(async()=>{const{splitPathsBySizeLoader:t}=await import("./splitPathsBySizeLoader-DsUToGC9.js");return{splitPathsBySizeLoader:t}},[],import.meta.url)).splitPathsBySizeLoader}class Po{constructor(){xt(this,"defaultLoader","split-by-size");xt(this,"loadedIconPaths16",new Map);xt(this,"loadedIconPaths20",new Map)}static setLoaderOptions(e){e.loader!==void 0&&(Cs.defaultLoader=e.loader)}static async load(e,t,a){Array.isArray(e)||(e=[e]),await Promise.all(e.map(s=>this.loadImpl(s,t,a)))}static async loadAll(e){const t=Object.values(iv);ey("[Blueprint] loading all icons",async()=>{await Promise.all([this.load(t,cn.STANDARD,e),this.load(t,cn.LARGE,e)])})}static getPaths(e,t){return this.isValidIconName(e)?(t<cn.LARGE?Cs.loadedIconPaths16:Cs.loadedIconPaths20).get(e):void 0}static async loadImpl(e,t,a={}){if(!this.isValidIconName(e)){console.error(`[Blueprint] Unknown icon '${e}'`);return}const s=t<cn.LARGE?Cs.loadedIconPaths16:Cs.loadedIconPaths20;if(s.has(e))return;const l=await ty(a);try{const u=t<cn.LARGE?cn.STANDARD:cn.LARGE,d=await l(e,u);s.set(e,d)}catch(u){console.error(`[Blueprint] Unable to load ${t}px icon '${e}'`,u)}}static isValidIconName(e){return JS.has(e)}}const Cs=new Po,ny="bp6",Ag=`${ny}-icon`,Cg=new Map;function iy(i){const e=Cg.get(i)??0;return Cg.set(i,e+1),`${i}-${e}`}const $o=Pe.forwardRef((i,e)=>{const{children:t,className:a,color:s,htmlTitle:l,iconName:u,size:d=cn.STANDARD,svgProps:m,tagName:p="span",title:v,...x}=i,M=d>=cn.LARGE?cn.LARGE:cn.STANDARD,w=`0 0 ${M} ${M}`,b=iy("iconTitle"),y={fill:s,height:d,role:"img",viewBox:w,width:d,...m};return p===null?Q.jsxs("svg",{"aria-labelledby":v?b:void 0,"data-icon":u,ref:e,...y,...x,className:Vn(a,m==null?void 0:m.className),children:[v&&Q.jsx("title",{id:b,children:v}),t]}):Pe.createElement(p,{"aria-hidden":v?void 0:!0,...x,className:Vn(Ag,`${Ag}-${u}`,a),ref:e,title:l},Q.jsxs("svg",{"data-icon":u,...y,className:m==null?void 0:m.className,children:[v&&Q.jsx("title",{children:v}),t]}))});$o.displayName="Blueprint6.SVGIconContainer";const ry=["M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33"],ay=["M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63"],rv=Pe.forwardRef((i,e)=>{const a=(i.size??cn.STANDARD)>=cn.LARGE?ay:ry;return Q.jsx($o,{iconName:"caret-down",ref:e,...i,children:a.map((s,l)=>Q.jsx("path",{d:s,fillRule:"evenodd"},l))})});rv.displayName="Blueprint6.Icon.CaretDownIcon";const sy=["M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7m6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9"],oy=["M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1m10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1"],av=Pe.forwardRef((i,e)=>{const a=(i.size??cn.STANDARD)>=cn.LARGE?oy:sy;return Q.jsx($o,{iconName:"double-caret-vertical",ref:e,...i,children:a.map((s,l)=>Q.jsx("path",{d:s,fillRule:"evenodd"},l))})});av.displayName="Blueprint6.Icon.DoubleCaretVerticalIcon";const ly=["m9.41 8 2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],cy=["m11.41 10 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],sv=Pe.forwardRef((i,e)=>{const a=(i.size??cn.STANDARD)>=cn.LARGE?cy:ly;return Q.jsx($o,{iconName:"small-cross",ref:e,...i,children:a.map((s,l)=>Q.jsx("path",{d:s,fillRule:"evenodd"},l))})});sv.displayName="Blueprint6.Icon.SmallCrossIcon";const zo=Pe.forwardRef((i,e)=>{const{autoLoad:t=!0,className:a,color:s,icon:l,intent:u,tagName:d="span",svgProps:m,title:p,htmlTitle:v,...x}=i,_=i.size??cn.STANDARD,[M,w]=Pe.useState(()=>typeof l=="string"?Po.getPaths(l,_):void 0);if(Pe.useEffect(()=>{let b=!1;if(typeof l=="string"){const y=Po.getPaths(l,_);y!==void 0?w(y):t?Po.load(l,_).then(()=>{b||w(Po.getPaths(l,_))}).catch(S=>{console.error(`[Blueprint] Icon '${l}' (${_}px) could not be loaded.`,S)}):console.error(`[Blueprint] Icon '${l}' (${_}px) is not loaded yet and autoLoad={false}, did you call Icons.load('${l}', ${_})?`)}return()=>{b=!0}},[t,l,_]),l==null||typeof l=="boolean")return null;if(typeof l!="string"){if(Pe.isValidElement(l)){const b=Vn(l.props.className,a,Zi(u));if(DS(l)){const y={...Ds(x),className:b},S=l.props.size??i.size;S!=null&&(y.size=S);const U=l.props.color??s;return U!=null&&(y.color=U),Pe.cloneElement(l,y)}return Pe.cloneElement(l,{className:b})}return l}if(M==null){const b=_===cn.STANDARD?vS:_===cn.LARGE?_S:void 0;return Pe.createElement(d||"span",{"aria-hidden":p?void 0:!0,...Ds(x),className:Vn(ph,b,xS(l),Zi(u),a),"data-icon":l,ref:e,title:v})}else{const b=M.map((y,S)=>Q.jsx("path",{d:y,fillRule:"evenodd"},S));return Q.jsx($o,{children:b,className:Vn(Zi(u),a),color:s,htmlTitle:v,iconName:l,ref:e,size:_,svgProps:m,tagName:d,title:p,...Ds(x)})}});zo.displayName=`${In}.Icon`;var Ia;(function(i){i[i.SMALL=20]="SMALL",i[i.STANDARD=50]="STANDARD",i[i.LARGE=100]="LARGE"})(Ia||(Ia={}));const oa=45,Rg=`M 50,50 m 0,-${oa} a ${oa},${oa} 0 1 1 0,${oa*2} a ${oa},${oa} 0 1 1 0,-${oa*2}`,So=280,uy=10,dy=4,fy=16,ov=i=>{const{className:e="",intent:t,value:a,tagName:s="div",size:l,...u}=i;VS(()=>{const x=l!=null,_=e.indexOf(Uc)>=0||e.indexOf(Fs)>=0;x&&_&&console.warn(bS)},[e,l]);const d=hy(l,e),m=Math.min(fy,dy*Ia.LARGE/d),p=So-So*(a==null?.25:gh(a,0,1)),v=Vn($c,Zi(t),{[pS]:a!=null},e);return Pe.createElement(s,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":a===void 0?void 0:a*100,className:v,role:"progressbar",...u},Pe.createElement(s,{className:fS},Q.jsxs("svg",{width:d,height:d,strokeWidth:m.toFixed(2),viewBox:py(m),children:[Q.jsx("path",{className:mS,d:Rg}),Q.jsx("path",{className:hS,d:Rg,pathLength:So,strokeDasharray:`${So} ${So}`,strokeDashoffset:p})]})))};ov.displayName=`${In}.Spinner`;const hy=(i,e)=>i==null?e.indexOf(Uc)>=0?Ia.SMALL:e.indexOf(Fs)>=0?Ia.LARGE:Ia.STANDARD:Math.max(uy,i),py=i=>{const e=oa+i/2,t=(50-e).toFixed(2),a=(e*2).toFixed(2);return`${t} ${t} ${a} ${a}`},my=yS()?Pe.useLayoutEffect:Pe.useEffect,xh=Pe.forwardRef(({children:i,tagName:e="div",title:t,className:a,ellipsize:s=!1,...l},u)=>{const d=Pe.useRef(),m=Pe.useMemo(()=>vh(d,u),[u]),[p,v]=Pe.useState(""),[x,_]=Pe.useState();return my(()=>{var M;((M=d.current)==null?void 0:M.textContent)!=null&&(_(s&&d.current.scrollWidth>d.current.clientWidth),v(d.current.textContent))},[d,i,s]),Pe.createElement(e,{...l,className:Vn({[Qx]:s},a),ref:m,title:t??(x?p:void 0)},i)});xh.displayName=`${In}.Text`;const yi=Pe.forwardRef((i,e)=>{const t=lv(i,e);return Q.jsx("button",{type:"button",...Ds(i),...t,children:cv(i)})});yi.displayName=`${In}.Button`;const gy=Pe.forwardRef((i,e)=>{const{href:t}=i,a=lv(i,e,{defaultTabIndex:0,disabledTabIndex:-1});return Q.jsx("a",{role:"button",...Ds(i),...a,"aria-disabled":a.disabled,href:a.disabled?void 0:t,children:cv(i)})});gy.displayName=`${In}.AnchorButton`;function lv(i,e,t){const{alignText:a,fill:s,large:l,loading:u=!1,minimal:d,outlined:m,size:p="medium",small:v,variant:x="solid"}=i,_=i.disabled||u,[M,w]=Q0(!_,i,e,t),b=Vn(Xc,{[fh]:M,[Wc]:_,[Io]:s,[Zx]:u},mh(a),Zi(i.intent),Yc(p,{large:l,small:v}),j0(x,{minimal:d,outlined:m}),i.className);return{...w,className:b,disabled:_}}function cv(i){const{children:e,ellipsizeText:t,endIcon:a,icon:s,loading:l,rightIcon:u,text:d,textClassName:m}=i,p=!Fc(d)||!Fc(e);return Q.jsxs(Q.Fragment,{children:[l&&Q.jsx(ov,{className:tS,size:Ia.SMALL}),Q.jsx(zo,{icon:s}),p&&Q.jsxs(xh,{className:Vn(nS,m),ellipsize:t,tagName:"span",children:[d,e]}),Q.jsx(zo,{icon:a??u})]})}const Ec=Pe.forwardRef((i,e)=>{const{alignText:t,className:a,fill:s,minimal:l,outlined:u,large:d,size:m="medium",variant:p="solid",vertical:v,...x}=i,_=Vn(eS,{[Io]:s,[B0]:v},mh(t),Yc(m,{large:d}),j0(p,{minimal:l,outlined:u}),a);return Q.jsx("div",{...x,ref:e,className:_,children:i.children})});Ec.displayName=`${In}.ButtonGroup`;const qc=Pe.forwardRef((i,e)=>{const{alignIndicator:t,children:a,className:s,indicatorChildren:l,inline:u,inputRef:d,label:m,labelElement:p,large:v,size:x="medium",style:_,type:M,typeClassName:w,tagName:b="label",...y}=i,S=Vn(hh,w,{[Wc]:y.disabled,[jx]:u},mh(t),Yc(x,{large:v}),s);return Pe.createElement(b,{className:S,ref:e,style:_},Q.jsx("input",{className:rS,...y,ref:d,type:M}),Q.jsx("span",{className:W0,children:l}),m,p,a)});qc.displayName=`${In}.Control`;const Rs=Pe.forwardRef((i,e)=>{const{innerLabelChecked:t,innerLabel:a,...s}=i,l=a||t?[Q.jsx("div",{className:_g,children:Q.jsx("div",{className:xg,children:t||a})},"checked"),Q.jsx("div",{className:_g,children:Q.jsx("div",{className:xg,children:a})},"unchecked")]:null;return Q.jsx(qc,{...s,indicatorChildren:l,ref:e,type:"checkbox",typeClassName:X0})});Rs.displayName=`${In}.Switch`;const vy=Pe.forwardRef((i,e)=>Q.jsx(qc,{...i,ref:e,type:"radio",typeClassName:sS}));vy.displayName=`${In}.Radio`;const uv=Pe.forwardRef((i,e)=>{const{defaultIndeterminate:t,indeterminate:a,onChange:s,...l}=i,[u,d]=Pe.useState(a||t||!1),m=Pe.useRef(null),p=vh(i.inputRef,m),v=Pe.useCallback(x=>{a===void 0&&d(x.target.indeterminate),s==null||s(x)},[a,s]);return Pe.useEffect(()=>{a!==void 0&&d(a)},[a]),Pe.useEffect(()=>{m.current!=null&&(m.current.indeterminate=u)},[m,u]),Q.jsx(qc,{...l,inputRef:p,onChange:v,ref:e,type:"checkbox",typeClassName:aS})});uv.displayName=`${In}.Checkbox`;const Lo=Pe.forwardRef((i,e)=>{const{className:t,children:a,disabled:s,fill:l,iconName:u="double-caret-vertical",iconProps:d,large:m,minimal:p,options:v=[],value:x,..._}=i,M=Vn(iS,{[Wc]:s,[Io]:l,[Fs]:m,[Nc]:p},t),w="Open dropdown",b=u==="double-caret-vertical"?Q.jsx(av,{title:w,...d}):Q.jsx(rv,{title:w,...d}),y=v.map(S=>{const U=typeof S=="object"?S:{value:S};return Pe.createElement("option",{...U,key:U.value,children:U.label||U.value})});return Q.jsxs("div",{className:M,children:[Q.jsxs("select",{disabled:s,ref:e,value:x,..._,multiple:!1,children:[y,a]}),b]})});Lo.displayName=`${In}.HTMLSelect`;const bg={START:"start",END:"end"},dv={PUSH:"push",NONE:"none"};function Tc(i){return`${(i*100).toFixed(2)}%`}function Pg(i,e,t,a){const s=e<t?1:-1;for(let l=e;l!==t+s;l+=s)i[l]=a}function _y(i,e){if(i.length===0)return;let t=i[0],a=e(t);for(let s=1;s<i.length;s++){const l=i[s],u=e(l);u<a&&(t=l,a=u)}return t}const xy=["max","min","stepSize","tickSize","value"];class fv extends _h{constructor(){super(...arguments);xt(this,"state",{isMoving:!1});xt(this,"handleElement",null);xt(this,"refHandlers",{handle:t=>this.handleElement=t});xt(this,"beginHandleMovement",t=>{document.addEventListener("mousemove",this.handleHandleMovement),document.addEventListener("mouseup",this.endHandleMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.mouseEventClientOffset(t)))});xt(this,"beginHandleTouchMovement",t=>{document.addEventListener("touchmove",this.handleHandleTouchMovement),document.addEventListener("touchend",this.endHandleTouchMovement),document.addEventListener("touchcancel",this.endHandleTouchMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.touchEventClientOffset(t)))});xt(this,"getStyleProperties",()=>{if(this.handleElement==null)return{};const{min:t=0,tickSizeRatio:a,value:s,vertical:l}=this.props,{handleMidpoint:u}=this.getHandleMidpointAndOffset(this.handleElement,!0),d=(s-t)*a,m=`calc(${Tc(d)} - ${u}px)`;return l?{bottom:m}:{left:m}});xt(this,"endHandleMovement",t=>{this.handleMoveEndedAt(this.mouseEventClientOffset(t))});xt(this,"endHandleTouchMovement",t=>{this.handleMoveEndedAt(this.touchEventClientOffset(t))});xt(this,"handleMoveEndedAt",t=>{var s,l;this.removeDocumentEventListeners(),this.setState({isMoving:!1});const a=this.changeValue(this.clientToValue(t));(l=(s=this.props).onRelease)==null||l.call(s,a)});xt(this,"handleHandleMovement",t=>{this.handleMovedTo(this.mouseEventClientOffset(t))});xt(this,"handleHandleTouchMovement",t=>{this.handleMovedTo(this.touchEventClientOffset(t))});xt(this,"handleMovedTo",t=>{this.state.isMoving&&!this.props.disabled&&this.changeValue(this.clientToValue(t))});xt(this,"handleKeyDown",t=>{const{stepSize:a,value:s}=this.props,l=FS(t,["ArrowLeft","ArrowDown"],["ArrowRight","ArrowUp"]);l!==void 0&&(this.changeValue(s+a*l),t.preventDefault())});xt(this,"handleKeyUp",t=>{var a,s;US(t)&&((s=(a=this.props).onRelease)==null||s.call(a,this.props.value))})}componentDidMount(){this.forceUpdate()}render(){const{className:t,disabled:a,label:s,min:l,max:u,value:d,vertical:m,htmlProps:p}=this.props,{isMoving:v}=this.state;return Q.jsx("span",{role:"slider",tabIndex:0,...p,className:Vn($0,{[fh]:v},t),onKeyDown:a?void 0:this.handleKeyDown,onKeyUp:a?void 0:this.handleKeyUp,onMouseDown:a?void 0:this.beginHandleMovement,onTouchStart:a?void 0:this.beginHandleTouchMovement,ref:this.refHandlers.handle,style:this.getStyleProperties(),"aria-valuemin":l,"aria-valuemax":u,"aria-valuenow":d,"aria-disabled":a,"aria-orientation":m?"vertical":"horizontal",children:s==null?null:Q.jsx("span",{className:Y0,children:s})})}componentWillUnmount(){this.removeDocumentEventListeners()}clientToValue(t){const{stepSize:a,tickSize:s,value:l,vertical:u}=this.props;if(this.handleElement==null)return l;const d=u?window.innerHeight-t:t,m=this.getHandleElementCenterPixel(this.handleElement),p=d-m;return isNaN(p)?l:l+Math.round(p/(s*a))*a}mouseEventClientOffset(t){return this.props.vertical?t.clientY:t.clientX}touchEventClientOffset(t){const a=t.changedTouches[0];return this.props.vertical?a.clientY:a.clientX}validateProps(t){for(const a of xy)if(typeof t[a]!="number")throw new Error(`[Blueprint] <Handle> requires number value for ${a} prop`)}changeValue(t,a=this.props.onChange){return t=this.clamp(t),!isNaN(t)&&this.props.value!==t&&(a==null||a(t)),t}clamp(t){return gh(t,this.props.min,this.props.max)}getHandleElementCenterPixel(t){const{handleMidpoint:a,handleOffset:s}=this.getHandleMidpointAndOffset(t);return s+a}getHandleMidpointAndOffset(t,a=!1){if(t==null)return{handleMidpoint:0,handleOffset:0};const{vertical:s}=this.props,l=t.getBoundingClientRect();l.width=t.offsetWidth,l.height=t.offsetHeight;const u=s?a?"width":"height":a?"height":"width",d=s?window.innerHeight-(l.top+l[u]):l.left;return{handleMidpoint:l[u]/2,handleOffset:d}}removeDocumentEventListeners(){document.removeEventListener("mousemove",this.handleHandleMovement),document.removeEventListener("mouseup",this.endHandleMovement),document.removeEventListener("touchmove",this.handleHandleTouchMovement),document.removeEventListener("touchend",this.endHandleTouchMovement),document.removeEventListener("touchcancel",this.endHandleTouchMovement)}}xt(fv,"displayName",`${In}.SliderHandle`);const Os=()=>null;Os.displayName=`${In}.MultiSliderHandle`;const la=class la extends _h{constructor(){super(...arguments);xt(this,"state",{labelPrecision:Sy(this.props),tickSize:0,tickSizeRatio:0});xt(this,"handleElements",[]);xt(this,"trackElement",null);xt(this,"addHandleRef",t=>{t!=null&&this.handleElements.push(t)});xt(this,"maybeHandleTrackClick",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.mouseEventClientOffset(t));a&&a.beginHandleMovement(t)}});xt(this,"maybeHandleTrackTouch",t=>{if(this.canHandleTrackEvent(t)){const a=this.nearestHandleForValue(this.handleElements,s=>s.touchEventClientOffset(t));a&&a.beginHandleTouchMovement(t)}});xt(this,"canHandleTrackEvent",t=>{const a=t.target;return!this.props.disabled&&a.closest(`.${$0}`)==null});xt(this,"getHandlerForIndex",(t,a)=>s=>{a==null||a(this.getNewHandleValues(s,t))});xt(this,"handleChange",t=>{var l,u;const a=ba(this.props),s=a.map(d=>d.value);SS(t,s)||((u=(l=this.props).onChange)==null||u.call(l,t),a.forEach((d,m)=>{var p;s[m]!==t[m]&&((p=d.onChange)==null||p.call(d,t[m]))}))});xt(this,"handleRelease",t=>{var s,l;const a=ba(this.props);(l=(s=this.props).onRelease)==null||l.call(s,t),a.forEach((u,d)=>{var m;(m=u.onRelease)==null||m.call(u,t[d])})})}static getDerivedStateFromProps(t){return{labelPrecision:la.getLabelPrecision(t)}}static getLabelPrecision({labelPrecision:t,stepSize:a}){return t??Z0(a)}getSnapshotBeforeUpdate(t){const a=ba(t);return ba(this.props).length!==a.length&&(this.handleElements=[]),null}render(){const t=Vn(ka,{[Wc]:this.props.disabled,[`${ka}-unlabeled`]:this.props.labelRenderer===!1,[B0]:this.props.vertical},this.props.className);return Q.jsxs("div",{className:t,onMouseDown:this.maybeHandleTrackClick,onTouchStart:this.maybeHandleTrackTouch,children:[Q.jsx("div",{className:lS,ref:a=>this.trackElement=a,children:this.renderTracks()}),Q.jsx("div",{className:oS,children:this.renderLabels()}),this.renderHandles()]})}componentDidMount(){this.updateTickSize()}componentDidUpdate(t,a){super.componentDidUpdate(t,a),(t.min!==this.props.min||t.max!==this.props.max||t.vertical!==this.props.vertical)&&this.updateTickSize()}validateProps(t){if(t.stepSize<=0)throw new Error(ES);if(t.labelStepSize!==void 0&&t.labelValues!==void 0)throw new Error(RS);if(t.labelStepSize!==void 0&&t.labelStepSize<=0)throw new Error(TS);if(t.min!==void 0&&!isFinite(t.min))throw new Error(wS);if(t.max!==void 0&&!isFinite(t.max))throw new Error(AS);let a=!1;if(Pe.Children.forEach(t.children,s=>{s&&!J0(s,Os)&&(a=!0)}),a)throw new Error(CS)}formatLabel(t,a=!1){const{labelRenderer:s}=this.props;if(s!==!1)return K0(s)?s(t,{isHandleTooltip:a}):t.toFixed(this.state.labelPrecision)}renderLabels(){if(this.props.labelRenderer===!1)return null;const t=this.getLabelValues(),{max:a,min:s}=this.props;return t.map((u,d)=>{const m=Tc((u-s)/(a-s)),p=this.props.vertical?{bottom:m}:{left:m};return Q.jsx("div",{className:Y0,style:p,children:this.formatLabel(u)},d)})}renderTracks(){const t=hv(this.props);t.push({value:this.props.max});let a={value:this.props.min};const s=[];for(let l=0;l<t.length;l++){const u=t[l];s.push(this.renderTrackFill(l,a,u)),a=u}return s}renderTrackFill(t,a,s){const[l,u]=[this.getOffsetRatio(a.value),this.getOffsetRatio(s.value)].sort((_,M)=>_-M),d=Tc(l),m=Tc(1-u),v={...this.props.vertical?{bottom:d,left:0,top:m}:{left:d,right:m,top:0},...a.trackStyleAfter||s.trackStyleBefore||{}},x=Vn(cS,Zi(this.getTrackIntent(a,s)));return Q.jsx("div",{className:x,style:v},`track-${t}`)}renderHandles(){const{disabled:t,max:a,min:s,stepSize:l,vertical:u}=this.props,d=ba(this.props);return d.length===0?null:d.map(({value:m,type:p,className:v,htmlProps:x},_)=>Q.jsx(fv,{htmlProps:x,className:Vn({[uS]:p===bg.START,[dS]:p===bg.END},v),disabled:t,label:this.formatLabel(m,!0),max:a,min:s,onChange:this.getHandlerForIndex(_,this.handleChange),onRelease:this.getHandlerForIndex(_,this.handleRelease),ref:this.addHandleRef,stepSize:l,tickSize:this.state.tickSize,tickSizeRatio:this.state.tickSizeRatio,value:m,vertical:u},`${_}-${d.length}`))}nearestHandleForValue(t,a){return _y(t,s=>{const l=a(s),u=s.clientToValue(l),d=s.props.value;return Math.abs(u-d)})}getNewHandleValues(t,a){const l=ba(this.props).map(p=>p.value),u=l.slice();u[a]=t,u.sort((p,v)=>p-v);const d=u.indexOf(t),m=this.findFirstLockedHandleIndex(a,d);if(m===-1)Pg(u,a,d,t);else{const p=l[m];return Pg(l,a,m,p),l}return u}findFirstLockedHandleIndex(t,a){const s=t<a?1:-1,l=ba(this.props);for(let u=t+s;u!==a+s;u+=s)if(l[u].interactionKind!==dv.PUSH)return u;return-1}getLabelValues(){const{labelStepSize:t,labelValues:a,min:s,max:l}=this.props;let u=[];if(a!==void 0)u=a.slice();else for(let d=s;d<l||PS(d,l);d+=t??1)u.push(d);return u}getOffsetRatio(t){return gh((t-this.props.min)*this.state.tickSizeRatio,0,1)}getTrackIntent(t,a){return this.props.showTrackFill?t.intentAfter!==void 0?t.intentAfter:a!==void 0&&a.intentBefore!==void 0?a.intentBefore:this.props.defaultTrackIntent:da.NONE}updateTickSize(){if(this.trackElement!=null){const t=this.props.vertical?this.trackElement.clientHeight:this.trackElement.clientWidth,a=1/(this.props.max-this.props.min),s=t*a;this.setState({tickSize:s,tickSizeRatio:a})}}};xt(la,"defaultSliderProps",{disabled:!1,max:10,min:0,showTrackFill:!0,stepSize:1,vertical:!1}),xt(la,"defaultProps",{...la.defaultSliderProps,defaultTrackIntent:da.NONE}),xt(la,"displayName",`${In}.MultiSlider`),xt(la,"Handle",Os);let Ho=la;function Sy({labelPrecision:i,stepSize:e=Ho.defaultSliderProps.stepSize}){return i??Z0(e)}function ba(i){return hv(i,e=>e.interactionKind!==dv.NONE)}function hv({children:i},e=()=>!0){const t=Pe.Children.map(i,s=>J0(s,Os)&&e(s.props)?s.props:null);let a=t??[];return a=a.filter(s=>s!==null),a.sort((s,l)=>s.value-l.value),a}class Fo extends _h{render(){const{initialValue:e,intent:t,value:a,onChange:s,onRelease:l,handleHtmlProps:u,...d}=this.props;return Q.jsxs(Ho,{...d,children:[Q.jsx(Os,{value:a,intentAfter:a<e?t:void 0,intentBefore:a>e?t:void 0,onChange:s,onRelease:l,htmlProps:u}),Q.jsx(Os,{value:e,interactionKind:"none"})]})}}xt(Fo,"defaultProps",{...Ho.defaultSliderProps,initialValue:0,intent:da.PRIMARY,value:0}),xt(Fo,"displayName",`${In}.Slider`);const pv=i=>{const{className:e,large:t,onRemove:a,size:s,tabIndex:l}=i,u=t||s==="large"||(e==null?void 0:e.includes(Fs)),d=Pe.useCallback(m=>{a==null||a(m,i)},[a,i]);return Q.jsx("button",{"aria-label":"Remove tag",type:"button",className:gS,onClick:d,tabIndex:l,children:Q.jsx(sv,{size:u?cn.LARGE:cn.STANDARD})})};pv.displayName=`${In}.TagRemoveButton`;const wc=Pe.forwardRef((i,e)=>{const{children:t,className:a,endIcon:s,fill:l=!1,icon:u,intent:d,interactive:m,large:p=!1,minimal:v=!1,multiline:x,onRemove:_,rightIcon:M,round:w=!1,size:b="medium",tabIndex:y=0,htmlTitle:S,...U}=i,V=K0(_),R=m??U.onClick!=null,[L,P]=Q0(R,i,e,{defaultTabIndex:0,disabledTabIndex:void 0}),I=Vn(q0,Zi(d),Yc(b,{large:p}),{[fh]:L,[Io]:l,[Kx]:R,[Nc]:v,[Jx]:w},a);return Q.jsxs("span",{...Ds(U),...P,className:I,role:R?"button":void 0,children:[Q.jsx(zo,{icon:u}),!Fc(t)&&Q.jsx(xh,{className:Io,ellipsize:!x,tagName:"span",title:S,children:t}),Q.jsx(zo,{icon:s??M}),V&&Q.jsx(pv,{...i})]})});wc.displayName=`${In}.Tag`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Sh="186",Nr={ROTATE:0,DOLLY:1,PAN:2},Ps={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},yy=0,Lg=1,My=2,Ac=1,Ey=2,Do=3,za=0,fi=1,Fi=2,Ur=0,Oo=1,Dg=2,Ng=3,Ug=4,Ty=5,bs=100,wy=101,Ay=102,Cy=103,Ry=104,by=200,Py=201,Ly=202,Dy=203,mv=204,gv=205,Ny=206,Uy=207,Fy=208,Oy=209,Iy=210,ky=211,zy=212,Hy=213,Vy=214,yf=0,Mf=1,Ef=2,Vo=3,Tf=4,wf=5,Af=6,Cf=7,vv=0,Gy=1,By=2,cr=0,_v=1,xv=2,Sv=3,yv=4,Mv=5,Ev=6,Tv=7,wv=300,Ha=301,Is=302,Nd=303,Ud=304,jc=306,Rf=1e3,Dr=1001,bf=1002,Hn=1003,Wy=1004,Kl=1005,Kn=1006,Fd=1007,Fa=1008,Ei=1009,Av=1010,Cv=1011,Go=1012,yh=1013,ur=1014,or=1015,dr=1016,Mh=1017,Eh=1018,Bo=1020,Rv=35902,bv=35899,Pv=1021,Lv=1022,Ki=1023,Or=1026,Oa=1027,Dv=1028,Th=1029,Va=1030,wh=1031,Ah=1033,Cc=33776,Rc=33777,bc=33778,Pc=33779,Pf=35840,Lf=35841,Df=35842,Nf=35843,Uf=36196,Ff=37492,Of=37496,If=37488,kf=37489,Oc=37490,zf=37491,Hf=37808,Vf=37809,Gf=37810,Bf=37811,Wf=37812,Xf=37813,$f=37814,Yf=37815,qf=37816,jf=37817,Kf=37818,Zf=37819,Jf=37820,Qf=37821,eh=36492,th=36494,nh=36495,ih=36283,rh=36284,Ic=36285,ah=36286,Xy=3200,sh=0,$y=1,ca="",Mi="srgb",kc="srgb-linear",zc="linear",qt="srgb",Od=7680,Yy=519,qy=512,jy=513,Ky=514,Ch=515,Zy=516,Jy=517,Rh=518,Qy=519,Nv=35044,Fg="300 es",lr=2e3,Wo=2001;function eM(i){for(let e=i.length-1;e>=0;--e)if(i[e]>=65535)return!0;return!1}function Hc(i){return document.createElementNS("http://www.w3.org/1999/xhtml",i)}function tM(){const i=Hc("canvas");return i.style.display="block",i}const Og={};function Vc(...i){const e="THREE."+i.shift();console.log(e,...i)}function Uv(i){const e=i[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=i[1];t&&t.isStackTrace?i[0]+=" "+t.getLocation():i[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return i}function gt(...i){i=Uv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...i)}}function kt(...i){i=Uv(i);const e="THREE."+i.shift();{const t=i[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...i)}}function Ns(...i){const e=i.join(" ");e in Og||(Og[e]=!0,gt(...i))}function nM(i,e,t){return new Promise(function(a,s){function l(){switch(i.clientWaitSync(e,i.SYNC_FLUSH_COMMANDS_BIT,0)){case i.WAIT_FAILED:s();break;case i.TIMEOUT_EXPIRED:setTimeout(l,t);break;default:a()}}setTimeout(l,t)})}const iM={[yf]:Mf,[Ef]:Af,[Tf]:Cf,[Vo]:wf,[Mf]:yf,[Af]:Ef,[Cf]:Tf,[wf]:Vo};class ma{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const a=this._listeners;a[e]===void 0&&(a[e]=[]),a[e].indexOf(t)===-1&&a[e].push(t)}hasEventListener(e,t){const a=this._listeners;return a===void 0?!1:a[e]!==void 0&&a[e].indexOf(t)!==-1}removeEventListener(e,t){const a=this._listeners;if(a===void 0)return;const s=a[e];if(s!==void 0){const l=s.indexOf(t);l!==-1&&s.splice(l,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const a=t[e.type];if(a!==void 0){e.target=this;const s=a.slice(0);for(let l=0,u=s.length;l<u;l++)s[l].call(this,e);e.target=null}}}const qn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Lc=Math.PI/180,oh=180/Math.PI;function ua(){const i=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,a=Math.random()*4294967295|0;return(qn[i&255]+qn[i>>8&255]+qn[i>>16&255]+qn[i>>24&255]+"-"+qn[e&255]+qn[e>>8&255]+"-"+qn[e>>16&15|64]+qn[e>>24&255]+"-"+qn[t&63|128]+qn[t>>8&255]+"-"+qn[t>>16&255]+qn[t>>24&255]+qn[a&255]+qn[a>>8&255]+qn[a>>16&255]+qn[a>>24&255]).toLowerCase()}function Lt(i,e,t){return Math.max(e,Math.min(t,i))}function rM(i,e){return(i%e+e)%e}function Id(i,e,t){return(1-t)*i+t*e}function sr(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return i/4294967295;case Uint16Array:return i/65535;case Uint8Array:case Uint8ClampedArray:return i/255;case Int32Array:return Math.max(i/2147483647,-1);case Int16Array:return Math.max(i/32767,-1);case Int8Array:return Math.max(i/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Kt(i,e){switch(e.constructor){case Float32Array:return i;case Uint32Array:return Math.round(i*4294967295);case Uint16Array:return Math.round(i*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(i*255);case Int32Array:return Math.round(i*2147483647);case Int16Array:return Math.round(i*32767);case Int8Array:return Math.round(i*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const aM={DEG2RAD:Lc},Hh=class Hh{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,a=this.y,s=e.elements;return this.x=s[0]*t+s[3]*a+s[6],this.y=s[1]*t+s[4]*a+s[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y;return t*t+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const a=Math.cos(t),s=Math.sin(t),l=this.x-e.x,u=this.y-e.y;return this.x=l*a-u*s+e.x,this.y=l*s+u*a+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Hh.prototype.isVector2=!0;let lt=Hh;class fa{constructor(e=0,t=0,a=0,s=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=a,this._w=s}static slerpFlat(e,t,a,s,l,u,d){let m=a[s+0],p=a[s+1],v=a[s+2],x=a[s+3],_=l[u+0],M=l[u+1],w=l[u+2],b=l[u+3];if(x!==b||m!==_||p!==M||v!==w){let y=m*_+p*M+v*w+x*b;y<0&&(_=-_,M=-M,w=-w,b=-b,y=-y);let S=1-d;if(y<.9995){const U=Math.acos(y),V=Math.sin(U);S=Math.sin(S*U)/V,d=Math.sin(d*U)/V,m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+b*d}else{m=m*S+_*d,p=p*S+M*d,v=v*S+w*d,x=x*S+b*d;const U=1/Math.sqrt(m*m+p*p+v*v+x*x);m*=U,p*=U,v*=U,x*=U}}e[t]=m,e[t+1]=p,e[t+2]=v,e[t+3]=x}static multiplyQuaternionsFlat(e,t,a,s,l,u){const d=a[s],m=a[s+1],p=a[s+2],v=a[s+3],x=l[u],_=l[u+1],M=l[u+2],w=l[u+3];return e[t]=d*w+v*x+m*M-p*_,e[t+1]=m*w+v*_+p*x-d*M,e[t+2]=p*w+v*M+d*_-m*x,e[t+3]=v*w-d*x-m*_-p*M,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,a,s){return this._x=e,this._y=t,this._z=a,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const a=e._x,s=e._y,l=e._z,u=e._order,d=Math.cos,m=Math.sin,p=d(a/2),v=d(s/2),x=d(l/2),_=m(a/2),M=m(s/2),w=m(l/2);switch(u){case"XYZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"YXZ":this._x=_*v*x+p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"ZXY":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x-_*M*w;break;case"ZYX":this._x=_*v*x-p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x+_*M*w;break;case"YZX":this._x=_*v*x+p*M*w,this._y=p*M*x+_*v*w,this._z=p*v*w-_*M*x,this._w=p*v*x-_*M*w;break;case"XZY":this._x=_*v*x-p*M*w,this._y=p*M*x-_*v*w,this._z=p*v*w+_*M*x,this._w=p*v*x+_*M*w;break;default:gt("Quaternion: .setFromEuler() encountered an unknown order: "+u)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const a=t/2,s=Math.sin(a);return this._x=e.x*s,this._y=e.y*s,this._z=e.z*s,this._w=Math.cos(a),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,a=t[0],s=t[4],l=t[8],u=t[1],d=t[5],m=t[9],p=t[2],v=t[6],x=t[10],_=a+d+x;if(_>0){const M=.5/Math.sqrt(_+1);this._w=.25/M,this._x=(v-m)*M,this._y=(l-p)*M,this._z=(u-s)*M}else if(a>d&&a>x){const M=2*Math.sqrt(1+a-d-x);this._w=(v-m)/M,this._x=.25*M,this._y=(s+u)/M,this._z=(l+p)/M}else if(d>x){const M=2*Math.sqrt(1+d-a-x);this._w=(l-p)/M,this._x=(s+u)/M,this._y=.25*M,this._z=(m+v)/M}else{const M=2*Math.sqrt(1+x-a-d);this._w=(u-s)/M,this._x=(l+p)/M,this._y=(m+v)/M,this._z=.25*M}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let a=e.dot(t)+1;return a<1e-8?(a=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=a):(this._x=0,this._y=-e.z,this._z=e.y,this._w=a)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=a),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Lt(this.dot(e),-1,1)))}rotateTowards(e,t){const a=this.angleTo(e);if(a===0)return this;const s=Math.min(1,t/a);return this.slerp(e,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const a=e._x,s=e._y,l=e._z,u=e._w,d=t._x,m=t._y,p=t._z,v=t._w;return this._x=a*v+u*d+s*p-l*m,this._y=s*v+u*m+l*d-a*p,this._z=l*v+u*p+a*m-s*d,this._w=u*v-a*d-s*m-l*p,this._onChangeCallback(),this}slerp(e,t){let a=e._x,s=e._y,l=e._z,u=e._w,d=this.dot(e);d<0&&(a=-a,s=-s,l=-l,u=-u,d=-d);let m=1-t;if(d<.9995){const p=Math.acos(d),v=Math.sin(p);m=Math.sin(m*p)/v,t=Math.sin(t*p)/v,this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this._onChangeCallback()}else this._x=this._x*m+a*t,this._y=this._y*m+s*t,this._z=this._z*m+l*t,this._w=this._w*m+u*t,this.normalize();return this}slerpQuaternions(e,t,a){return this.copy(e).slerp(t,a)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),a=Math.random(),s=Math.sqrt(1-a),l=Math.sqrt(a);return this.set(s*Math.sin(e),s*Math.cos(e),l*Math.sin(t),l*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Vh=class Vh{constructor(e=0,t=0,a=0){this.x=e,this.y=t,this.z=a}set(e,t,a){return a===void 0&&(a=this.z),this.x=e,this.y=t,this.z=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Ig.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Ig.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[3]*a+l[6]*s,this.y=l[1]*t+l[4]*a+l[7]*s,this.z=l[2]*t+l[5]*a+l[8]*s,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=e.elements,u=1/(l[3]*t+l[7]*a+l[11]*s+l[15]);return this.x=(l[0]*t+l[4]*a+l[8]*s+l[12])*u,this.y=(l[1]*t+l[5]*a+l[9]*s+l[13])*u,this.z=(l[2]*t+l[6]*a+l[10]*s+l[14])*u,this}applyQuaternion(e){const t=this.x,a=this.y,s=this.z,l=e.x,u=e.y,d=e.z,m=e.w,p=2*(u*s-d*a),v=2*(d*t-l*s),x=2*(l*a-u*t);return this.x=t+m*p+u*x-d*v,this.y=a+m*v+d*p-l*x,this.z=s+m*x+l*v-u*p,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,a=this.y,s=this.z,l=e.elements;return this.x=l[0]*t+l[4]*a+l[8]*s,this.y=l[1]*t+l[5]*a+l[9]*s,this.z=l[2]*t+l[6]*a+l[10]*s,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const a=e.x,s=e.y,l=e.z,u=t.x,d=t.y,m=t.z;return this.x=s*m-l*d,this.y=l*u-a*m,this.z=a*d-s*u,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const a=e.dot(this)/t;return this.copy(e).multiplyScalar(a)}projectOnPlane(e){return kd.copy(this).projectOnVector(e),this.sub(kd)}reflect(e){return this.sub(kd.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const a=this.dot(e)/t;return Math.acos(Lt(a,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,a=this.y-e.y,s=this.z-e.z;return t*t+a*a+s*s}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,a){const s=Math.sin(t)*e;return this.x=s*Math.sin(a),this.y=Math.cos(t)*e,this.z=s*Math.cos(a),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,a){return this.x=e*Math.sin(t),this.y=a,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),a=this.setFromMatrixColumn(e,1).length(),s=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=a,this.z=s,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,a=Math.sqrt(1-t*t);return this.x=a*Math.cos(e),this.y=t,this.z=a*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Vh.prototype.isVector3=!0;let J=Vh;const kd=new J,Ig=new fa,Gh=class Gh{constructor(e,t,a,s,l,u,d,m,p){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p)}set(e,t,a,s,l,u,d,m,p){const v=this.elements;return v[0]=e,v[1]=s,v[2]=d,v[3]=t,v[4]=l,v[5]=m,v[6]=a,v[7]=u,v[8]=p,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],this}extractBasis(e,t,a){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),a.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[3],m=a[6],p=a[1],v=a[4],x=a[7],_=a[2],M=a[5],w=a[8],b=s[0],y=s[3],S=s[6],U=s[1],V=s[4],R=s[7],L=s[2],P=s[5],I=s[8];return l[0]=u*b+d*U+m*L,l[3]=u*y+d*V+m*P,l[6]=u*S+d*R+m*I,l[1]=p*b+v*U+x*L,l[4]=p*y+v*V+x*P,l[7]=p*S+v*R+x*I,l[2]=_*b+M*U+w*L,l[5]=_*y+M*V+w*P,l[8]=_*S+M*R+w*I,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8];return t*u*v-t*d*p-a*l*v+a*d*m+s*l*p-s*u*m}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=v*u-d*p,_=d*m-v*l,M=p*l-u*m,w=t*x+a*_+s*M;if(w===0)return this.set(0,0,0,0,0,0,0,0,0);const b=1/w;return e[0]=x*b,e[1]=(s*p-v*a)*b,e[2]=(d*a-s*u)*b,e[3]=_*b,e[4]=(v*t-s*m)*b,e[5]=(s*l-d*t)*b,e[6]=M*b,e[7]=(a*m-p*t)*b,e[8]=(u*t-a*l)*b,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,a,s,l,u,d){const m=Math.cos(l),p=Math.sin(l);return this.set(a*m,a*p,-a*(m*u+p*d)+u+e,-s*p,s*m,-s*(-p*u+m*d)+d+t,0,0,1),this}scale(e,t){return Ns("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(zd.makeScale(e,t)),this}rotate(e){return Ns("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(zd.makeRotation(-e)),this}translate(e,t){return Ns("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(zd.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,a,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<9;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<9;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Gh.prototype.isMatrix3=!0;let St=Gh;const zd=new St,kg=new St().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),zg=new St().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function sM(){const i={enabled:!0,workingColorSpace:kc,spaces:{},convert:function(s,l,u){return this.enabled===!1||l===u||!l||!u||(this.spaces[l].transfer===qt&&(s.r=Fr(s.r),s.g=Fr(s.g),s.b=Fr(s.b)),this.spaces[l].primaries!==this.spaces[u].primaries&&(s.applyMatrix3(this.spaces[l].toXYZ),s.applyMatrix3(this.spaces[u].fromXYZ)),this.spaces[u].transfer===qt&&(s.r=Us(s.r),s.g=Us(s.g),s.b=Us(s.b))),s},workingToColorSpace:function(s,l){return this.convert(s,this.workingColorSpace,l)},colorSpaceToWorking:function(s,l){return this.convert(s,l,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ca?zc:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,l=this.workingColorSpace){return s.fromArray(this.spaces[l].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,l,u){return s.copy(this.spaces[l].toXYZ).multiply(this.spaces[u].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,l){return Ns("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),i.workingToColorSpace(s,l)},toWorkingColorSpace:function(s,l){return Ns("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),i.colorSpaceToWorking(s,l)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],a=[.3127,.329];return i.define({[kc]:{primaries:e,whitePoint:a,transfer:zc,toXYZ:kg,fromXYZ:zg,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Mi},outputColorSpaceConfig:{drawingBufferColorSpace:Mi}},[Mi]:{primaries:e,whitePoint:a,transfer:qt,toXYZ:kg,fromXYZ:zg,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Mi}}}),i}const It=sM();function Fr(i){return i<.04045?i*.0773993808:Math.pow(i*.9478672986+.0521327014,2.4)}function Us(i){return i<.0031308?i*12.92:1.055*Math.pow(i,.41666)-.055}let us;class oM{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let a;if(e instanceof HTMLCanvasElement)a=e;else{us===void 0&&(us=Hc("canvas")),us.width=e.width,us.height=e.height;const s=us.getContext("2d");e instanceof ImageData?s.putImageData(e,0,0):s.drawImage(e,0,0,e.width,e.height),a=us}return a.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=Hc("canvas");t.width=e.width,t.height=e.height;const a=t.getContext("2d");a.drawImage(e,0,0,e.width,e.height);const s=a.getImageData(0,0,e.width,e.height),l=s.data;for(let u=0;u<l.length;u++)l[u]=Fr(l[u]/255)*255;return a.putImageData(s,0,0),t}else if(e.data){const t=e.data.slice(0);for(let a=0;a<t.length;a++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[a]=Math.floor(Fr(t[a]/255)*255):t[a]=Fr(t[a]);return{data:t,width:e.width,height:e.height}}else return gt("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let lM=0;class bh{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:lM++}),this.uuid=ua(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const a={uuid:this.uuid,url:""},s=this.data;if(s!==null){let l;if(Array.isArray(s)){l=[];for(let u=0,d=s.length;u<d;u++)s[u].isDataTexture?l.push(Hd(s[u].image)):l.push(Hd(s[u]))}else l=Hd(s);a.url=l}return t||(e.images[this.uuid]=a),a}}function Hd(i){return typeof HTMLImageElement<"u"&&i instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&i instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&i instanceof ImageBitmap?oM.getDataURL(i):i.data?{data:Array.from(i.data),width:i.width,height:i.height,type:i.data.constructor.name}:(gt("Texture: Unable to serialize Texture."),{})}let cM=0;const Vd=new J;class Zn extends ma{constructor(e=Zn.DEFAULT_IMAGE,t=Zn.DEFAULT_MAPPING,a=Dr,s=Dr,l=Kn,u=Fa,d=Ki,m=Ei,p=Zn.DEFAULT_ANISOTROPY,v=ca){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:cM++}),this.uuid=ua(),this.name="",this.source=new bh(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=a,this.wrapT=s,this.magFilter=l,this.minFilter=u,this.anisotropy=p,this.format=d,this.internalFormat=null,this.type=m,this.offset=new lt(0,0),this.repeat=new lt(1,1),this.center=new lt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new St,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=v,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Vd).x}get height(){return this.source.getSize(Vd).y}get depth(){return this.source.getSize(Vd).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const a=e[t];if(a===void 0){gt(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Texture.setValues(): property '${t}' does not exist.`);continue}s&&a&&s.isVector2&&a.isVector2||s&&a&&s.isVector3&&a.isVector3||s&&a&&s.isMatrix3&&a.isMatrix3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const a={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(a.userData=this.userData),t||(e.textures[this.uuid]=a),a}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==wv)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case Rf:e.x=e.x-Math.floor(e.x);break;case Dr:e.x=e.x<0?0:1;break;case bf:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case Rf:e.y=e.y-Math.floor(e.y);break;case Dr:e.y=e.y<0?0:1;break;case bf:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}Zn.DEFAULT_IMAGE=null;Zn.DEFAULT_MAPPING=wv;Zn.DEFAULT_ANISOTROPY=1;const Bh=class Bh{constructor(e=0,t=0,a=0,s=1){this.x=e,this.y=t,this.z=a,this.w=s}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,a,s){return this.x=e,this.y=t,this.z=a,this.w=s,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,a=this.y,s=this.z,l=this.w,u=e.elements;return this.x=u[0]*t+u[4]*a+u[8]*s+u[12]*l,this.y=u[1]*t+u[5]*a+u[9]*s+u[13]*l,this.z=u[2]*t+u[6]*a+u[10]*s+u[14]*l,this.w=u[3]*t+u[7]*a+u[11]*s+u[15]*l,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,a,s,l;const m=e.elements,p=m[0],v=m[4],x=m[8],_=m[1],M=m[5],w=m[9],b=m[2],y=m[6],S=m[10];if(Math.abs(v-_)<.01&&Math.abs(x-b)<.01&&Math.abs(w-y)<.01){if(Math.abs(v+_)<.1&&Math.abs(x+b)<.1&&Math.abs(w+y)<.1&&Math.abs(p+M+S-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const V=(p+1)/2,R=(M+1)/2,L=(S+1)/2,P=(v+_)/4,I=(x+b)/4,T=(w+y)/4;return V>R&&V>L?V<.01?(a=0,s=.707106781,l=.707106781):(a=Math.sqrt(V),s=P/a,l=I/a):R>L?R<.01?(a=.707106781,s=0,l=.707106781):(s=Math.sqrt(R),a=P/s,l=T/s):L<.01?(a=.707106781,s=.707106781,l=0):(l=Math.sqrt(L),a=I/l,s=T/l),this.set(a,s,l,t),this}let U=Math.sqrt((y-w)*(y-w)+(x-b)*(x-b)+(_-v)*(_-v));return Math.abs(U)<.001&&(U=1),this.x=(y-w)/U,this.y=(x-b)/U,this.z=(_-v)/U,this.w=Math.acos((p+M+S-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Lt(this.x,e.x,t.x),this.y=Lt(this.y,e.y,t.y),this.z=Lt(this.z,e.z,t.z),this.w=Lt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Lt(this.x,e,t),this.y=Lt(this.y,e,t),this.z=Lt(this.z,e,t),this.w=Lt(this.w,e,t),this}clampLength(e,t){const a=this.length();return this.divideScalar(a||1).multiplyScalar(Lt(a,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,a){return this.x=e.x+(t.x-e.x)*a,this.y=e.y+(t.y-e.y)*a,this.z=e.z+(t.z-e.z)*a,this.w=e.w+(t.w-e.w)*a,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Bh.prototype.isVector4=!0;let mn=Bh;class uM extends ma{constructor(e=1,t=1,a={}){super(),a=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Kn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},a),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=a.depth,this.scissor=new mn(0,0,e,t),this.scissorTest=!1,this.viewport=new mn(0,0,e,t),this.textures=[];const s={width:e,height:t,depth:a.depth},l=new Zn(s),u=a.count;for(let d=0;d<u;d++)this.textures[d]=l.clone(),this.textures[d].isRenderTargetTexture=!0,this.textures[d].renderTarget=this;this._setTextureOptions(a),this.depthBuffer=a.depthBuffer,this.stencilBuffer=a.stencilBuffer,this.resolveColorBuffer=a.resolveColorBuffer,this.resolveDepthBuffer=a.resolveDepthBuffer,this.resolveStencilBuffer=a.resolveStencilBuffer,this.storeMultisampledColorBuffer=a.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=a.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=a.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=a.depthTexture,this.samples=a.samples,this.multiview=a.multiview,this.useArrayDepthTexture=a.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:Kn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let a=0;a<this.textures.length;a++)this.textures[a].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,a=1){if(this.width!==e||this.height!==t||this.depth!==a){this.width=e,this.height=t,this.depth=a;for(let s=0,l=this.textures.length;s<l;s++)this.textures[s].image.width=e,this.textures[s].image.height=t,this.textures[s].image.depth=a,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,a=e.textures.length;t<a;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const s=Object.assign({},e.textures[t].image);this.textures[t].source=new bh(s)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Ji extends uM{constructor(e=1,t=1,a={}){super(e,t,a),this.isWebGLRenderTarget=!0}}class Fv extends Zn{constructor(e=null,t=1,a=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class dM extends Zn{constructor(e=null,t=1,a=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:a,depth:s},this.magFilter=Hn,this.minFilter=Hn,this.wrapR=Dr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const Bc=class Bc{constructor(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y)}set(e,t,a,s,l,u,d,m,p,v,x,_,M,w,b,y){const S=this.elements;return S[0]=e,S[4]=t,S[8]=a,S[12]=s,S[1]=l,S[5]=u,S[9]=d,S[13]=m,S[2]=p,S[6]=v,S[10]=x,S[14]=_,S[3]=M,S[7]=w,S[11]=b,S[15]=y,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Bc().fromArray(this.elements)}copy(e){const t=this.elements,a=e.elements;return t[0]=a[0],t[1]=a[1],t[2]=a[2],t[3]=a[3],t[4]=a[4],t[5]=a[5],t[6]=a[6],t[7]=a[7],t[8]=a[8],t[9]=a[9],t[10]=a[10],t[11]=a[11],t[12]=a[12],t[13]=a[13],t[14]=a[14],t[15]=a[15],this}copyPosition(e){const t=this.elements,a=e.elements;return t[12]=a[12],t[13]=a[13],t[14]=a[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,a){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),a.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),a.setFromMatrixColumn(this,2),this)}makeBasis(e,t,a){return this.set(e.x,t.x,a.x,0,e.y,t.y,a.y,0,e.z,t.z,a.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,a=e.elements,s=1/ds.setFromMatrixColumn(e,0).length(),l=1/ds.setFromMatrixColumn(e,1).length(),u=1/ds.setFromMatrixColumn(e,2).length();return t[0]=a[0]*s,t[1]=a[1]*s,t[2]=a[2]*s,t[3]=0,t[4]=a[4]*l,t[5]=a[5]*l,t[6]=a[6]*l,t[7]=0,t[8]=a[8]*u,t[9]=a[9]*u,t[10]=a[10]*u,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,a=e.x,s=e.y,l=e.z,u=Math.cos(a),d=Math.sin(a),m=Math.cos(s),p=Math.sin(s),v=Math.cos(l),x=Math.sin(l);if(e.order==="XYZ"){const _=u*v,M=u*x,w=d*v,b=d*x;t[0]=m*v,t[4]=-m*x,t[8]=p,t[1]=M+w*p,t[5]=_-b*p,t[9]=-d*m,t[2]=b-_*p,t[6]=w+M*p,t[10]=u*m}else if(e.order==="YXZ"){const _=m*v,M=m*x,w=p*v,b=p*x;t[0]=_+b*d,t[4]=w*d-M,t[8]=u*p,t[1]=u*x,t[5]=u*v,t[9]=-d,t[2]=M*d-w,t[6]=b+_*d,t[10]=u*m}else if(e.order==="ZXY"){const _=m*v,M=m*x,w=p*v,b=p*x;t[0]=_-b*d,t[4]=-u*x,t[8]=w+M*d,t[1]=M+w*d,t[5]=u*v,t[9]=b-_*d,t[2]=-u*p,t[6]=d,t[10]=u*m}else if(e.order==="ZYX"){const _=u*v,M=u*x,w=d*v,b=d*x;t[0]=m*v,t[4]=w*p-M,t[8]=_*p+b,t[1]=m*x,t[5]=b*p+_,t[9]=M*p-w,t[2]=-p,t[6]=d*m,t[10]=u*m}else if(e.order==="YZX"){const _=u*m,M=u*p,w=d*m,b=d*p;t[0]=m*v,t[4]=b-_*x,t[8]=w*x+M,t[1]=x,t[5]=u*v,t[9]=-d*v,t[2]=-p*v,t[6]=M*x+w,t[10]=_-b*x}else if(e.order==="XZY"){const _=u*m,M=u*p,w=d*m,b=d*p;t[0]=m*v,t[4]=-x,t[8]=p*v,t[1]=_*x+b,t[5]=u*v,t[9]=M*x-w,t[2]=w*x-M,t[6]=d*v,t[10]=b*x+_}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(fM,e,hM)}lookAt(e,t,a){const s=this.elements;return xi.subVectors(e,t),xi.lengthSq()===0&&(xi.z=1),xi.normalize(),na.crossVectors(a,xi),na.lengthSq()===0&&(Math.abs(a.z)===1?xi.x+=1e-4:xi.z+=1e-4,xi.normalize(),na.crossVectors(a,xi)),na.normalize(),Zl.crossVectors(xi,na),s[0]=na.x,s[4]=Zl.x,s[8]=xi.x,s[1]=na.y,s[5]=Zl.y,s[9]=xi.y,s[2]=na.z,s[6]=Zl.z,s[10]=xi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const a=e.elements,s=t.elements,l=this.elements,u=a[0],d=a[4],m=a[8],p=a[12],v=a[1],x=a[5],_=a[9],M=a[13],w=a[2],b=a[6],y=a[10],S=a[14],U=a[3],V=a[7],R=a[11],L=a[15],P=s[0],I=s[4],T=s[8],F=s[12],z=s[1],B=s[5],K=s[9],ie=s[13],H=s[2],te=s[6],oe=s[10],ce=s[14],q=s[3],W=s[7],Z=s[11],D=s[15];return l[0]=u*P+d*z+m*H+p*q,l[4]=u*I+d*B+m*te+p*W,l[8]=u*T+d*K+m*oe+p*Z,l[12]=u*F+d*ie+m*ce+p*D,l[1]=v*P+x*z+_*H+M*q,l[5]=v*I+x*B+_*te+M*W,l[9]=v*T+x*K+_*oe+M*Z,l[13]=v*F+x*ie+_*ce+M*D,l[2]=w*P+b*z+y*H+S*q,l[6]=w*I+b*B+y*te+S*W,l[10]=w*T+b*K+y*oe+S*Z,l[14]=w*F+b*ie+y*ce+S*D,l[3]=U*P+V*z+R*H+L*q,l[7]=U*I+V*B+R*te+L*W,l[11]=U*T+V*K+R*oe+L*Z,l[15]=U*F+V*ie+R*ce+L*D,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[12],u=e[1],d=e[5],m=e[9],p=e[13],v=e[2],x=e[6],_=e[10],M=e[14],w=e[3],b=e[7],y=e[11],S=e[15],U=m*M-p*_,V=d*M-p*x,R=d*_-m*x,L=u*M-p*v,P=u*_-m*v,I=u*x-d*v;return t*(b*U-y*V+S*R)-a*(w*U-y*L+S*P)+s*(w*V-b*L+S*I)-l*(w*R-b*P+y*I)}determinantAffine(){const e=this.elements,t=e[0],a=e[4],s=e[8],l=e[1],u=e[5],d=e[9],m=e[2],p=e[6],v=e[10];return t*(u*v-d*p)-a*(l*v-d*m)+s*(l*p-u*m)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,a){const s=this.elements;return e.isVector3?(s[12]=e.x,s[13]=e.y,s[14]=e.z):(s[12]=e,s[13]=t,s[14]=a),this}invert(){const e=this.elements,t=e[0],a=e[1],s=e[2],l=e[3],u=e[4],d=e[5],m=e[6],p=e[7],v=e[8],x=e[9],_=e[10],M=e[11],w=e[12],b=e[13],y=e[14],S=e[15],U=t*d-a*u,V=t*m-s*u,R=t*p-l*u,L=a*m-s*d,P=a*p-l*d,I=s*p-l*m,T=v*b-x*w,F=v*y-_*w,z=v*S-M*w,B=x*y-_*b,K=x*S-M*b,ie=_*S-M*y,H=U*ie-V*K+R*B+L*z-P*F+I*T;if(H===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const te=1/H;return e[0]=(d*ie-m*K+p*B)*te,e[1]=(s*K-a*ie-l*B)*te,e[2]=(b*I-y*P+S*L)*te,e[3]=(_*P-x*I-M*L)*te,e[4]=(m*z-u*ie-p*F)*te,e[5]=(t*ie-s*z+l*F)*te,e[6]=(y*R-w*I-S*V)*te,e[7]=(v*I-_*R+M*V)*te,e[8]=(u*K-d*z+p*T)*te,e[9]=(a*z-t*K-l*T)*te,e[10]=(w*P-b*R+S*U)*te,e[11]=(x*R-v*P-M*U)*te,e[12]=(d*F-u*B-m*T)*te,e[13]=(t*B-a*F+s*T)*te,e[14]=(b*V-w*L-y*U)*te,e[15]=(v*L-x*V+_*U)*te,this}scale(e){const t=this.elements,a=e.x,s=e.y,l=e.z;return t[0]*=a,t[4]*=s,t[8]*=l,t[1]*=a,t[5]*=s,t[9]*=l,t[2]*=a,t[6]*=s,t[10]*=l,t[3]*=a,t[7]*=s,t[11]*=l,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],a=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],s=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,a,s))}makeTranslation(e,t,a){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,a,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),a=Math.sin(e);return this.set(1,0,0,0,0,t,-a,0,0,a,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,0,a,0,0,1,0,0,-a,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),a=Math.sin(e);return this.set(t,-a,0,0,a,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const a=Math.cos(t),s=Math.sin(t),l=1-a,u=e.x,d=e.y,m=e.z,p=l*u,v=l*d;return this.set(p*u+a,p*d-s*m,p*m+s*d,0,p*d+s*m,v*d+a,v*m-s*u,0,p*m-s*d,v*m+s*u,l*m*m+a,0,0,0,0,1),this}makeScale(e,t,a){return this.set(e,0,0,0,0,t,0,0,0,0,a,0,0,0,0,1),this}makeShear(e,t,a,s,l,u){return this.set(1,a,l,0,e,1,u,0,t,s,1,0,0,0,0,1),this}compose(e,t,a){const s=this.elements,l=t._x,u=t._y,d=t._z,m=t._w,p=l+l,v=u+u,x=d+d,_=l*p,M=l*v,w=l*x,b=u*v,y=u*x,S=d*x,U=m*p,V=m*v,R=m*x,L=a.x,P=a.y,I=a.z;return s[0]=(1-(b+S))*L,s[1]=(M+R)*L,s[2]=(w-V)*L,s[3]=0,s[4]=(M-R)*P,s[5]=(1-(_+S))*P,s[6]=(y+U)*P,s[7]=0,s[8]=(w+V)*I,s[9]=(y-U)*I,s[10]=(1-(_+b))*I,s[11]=0,s[12]=e.x,s[13]=e.y,s[14]=e.z,s[15]=1,this}decompose(e,t,a){const s=this.elements;e.x=s[12],e.y=s[13],e.z=s[14];const l=this.determinantAffine();if(l===0)return a.set(1,1,1),t.identity(),this;let u=ds.set(s[0],s[1],s[2]).length();const d=ds.set(s[4],s[5],s[6]).length(),m=ds.set(s[8],s[9],s[10]).length();l<0&&(u=-u),Yi.copy(this);const p=1/u,v=1/d,x=1/m;return Yi.elements[0]*=p,Yi.elements[1]*=p,Yi.elements[2]*=p,Yi.elements[4]*=v,Yi.elements[5]*=v,Yi.elements[6]*=v,Yi.elements[8]*=x,Yi.elements[9]*=x,Yi.elements[10]*=x,t.setFromRotationMatrix(Yi),a.x=u,a.y=d,a.z=m,this}makePerspective(e,t,a,s,l,u,d=lr,m=!1){const p=this.elements,v=2*l/(t-e),x=2*l/(a-s),_=(t+e)/(t-e),M=(a+s)/(a-s);let w,b;if(m)w=l/(u-l),b=u*l/(u-l);else if(d===lr)w=-(u+l)/(u-l),b=-2*u*l/(u-l);else if(d===Wo)w=-u/(u-l),b=-u*l/(u-l);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=_,p[12]=0,p[1]=0,p[5]=x,p[9]=M,p[13]=0,p[2]=0,p[6]=0,p[10]=w,p[14]=b,p[3]=0,p[7]=0,p[11]=-1,p[15]=0,this}makeOrthographic(e,t,a,s,l,u,d=lr,m=!1){const p=this.elements,v=2/(t-e),x=2/(a-s),_=-(t+e)/(t-e),M=-(a+s)/(a-s);let w,b;if(m)w=1/(u-l),b=u/(u-l);else if(d===lr)w=-2/(u-l),b=-(u+l)/(u-l);else if(d===Wo)w=-1/(u-l),b=-l/(u-l);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+d);return p[0]=v,p[4]=0,p[8]=0,p[12]=_,p[1]=0,p[5]=x,p[9]=0,p[13]=M,p[2]=0,p[6]=0,p[10]=w,p[14]=b,p[3]=0,p[7]=0,p[11]=0,p[15]=1,this}equals(e){const t=this.elements,a=e.elements;for(let s=0;s<16;s++)if(t[s]!==a[s])return!1;return!0}fromArray(e,t=0){for(let a=0;a<16;a++)this.elements[a]=e[a+t];return this}toArray(e=[],t=0){const a=this.elements;return e[t]=a[0],e[t+1]=a[1],e[t+2]=a[2],e[t+3]=a[3],e[t+4]=a[4],e[t+5]=a[5],e[t+6]=a[6],e[t+7]=a[7],e[t+8]=a[8],e[t+9]=a[9],e[t+10]=a[10],e[t+11]=a[11],e[t+12]=a[12],e[t+13]=a[13],e[t+14]=a[14],e[t+15]=a[15],e}};Bc.prototype.isMatrix4=!0;let un=Bc;const ds=new J,Yi=new un,fM=new J(0,0,0),hM=new J(1,1,1),na=new J,Zl=new J,xi=new J,Hg=new un,Vg=new fa;class ha{constructor(e=0,t=0,a=0,s=ha.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=a,this._order=s}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,a,s=this._order){return this._x=e,this._y=t,this._z=a,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,a=!0){const s=e.elements,l=s[0],u=s[4],d=s[8],m=s[1],p=s[5],v=s[9],x=s[2],_=s[6],M=s[10];switch(t){case"XYZ":this._y=Math.asin(Lt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-v,M),this._z=Math.atan2(-u,l)):(this._x=Math.atan2(_,p),this._z=0);break;case"YXZ":this._x=Math.asin(-Lt(v,-1,1)),Math.abs(v)<.9999999?(this._y=Math.atan2(d,M),this._z=Math.atan2(m,p)):(this._y=Math.atan2(-x,l),this._z=0);break;case"ZXY":this._x=Math.asin(Lt(_,-1,1)),Math.abs(_)<.9999999?(this._y=Math.atan2(-x,M),this._z=Math.atan2(-u,p)):(this._y=0,this._z=Math.atan2(m,l));break;case"ZYX":this._y=Math.asin(-Lt(x,-1,1)),Math.abs(x)<.9999999?(this._x=Math.atan2(_,M),this._z=Math.atan2(m,l)):(this._x=0,this._z=Math.atan2(-u,p));break;case"YZX":this._z=Math.asin(Lt(m,-1,1)),Math.abs(m)<.9999999?(this._x=Math.atan2(-v,p),this._y=Math.atan2(-x,l)):(this._x=0,this._y=Math.atan2(d,M));break;case"XZY":this._z=Math.asin(-Lt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(_,p),this._y=Math.atan2(d,l)):(this._x=Math.atan2(-v,M),this._y=0);break;default:gt("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,a===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,a){return Hg.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Hg,t,a)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Vg.setFromEuler(this),this.setFromQuaternion(Vg,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ha.DEFAULT_ORDER="XYZ";class Ph{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let pM=0;const Gg=new J,fs=new fa,Tr=new un,Jl=new J,yo=new J,mM=new J,gM=new fa,Bg=new J(1,0,0),Wg=new J(0,1,0),Xg=new J(0,0,1),$g={type:"added"},vM={type:"removed"},hs={type:"childadded",child:null},Gd={type:"childremoved",child:null};class On extends ma{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:pM++}),this.uuid=ua(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=On.DEFAULT_UP.clone();const e=new J,t=new ha,a=new fa,s=new J(1,1,1);function l(){a.setFromEuler(t,!1)}function u(){t.setFromQuaternion(a,void 0,!1)}t._onChange(l),a._onChange(u),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:a},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new un},normalMatrix:{value:new St}}),this.matrix=new un,this.matrixWorld=new un,this.matrixAutoUpdate=On.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new Ph,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.multiply(fs),this}rotateOnWorldAxis(e,t){return fs.setFromAxisAngle(e,t),this.quaternion.premultiply(fs),this}rotateX(e){return this.rotateOnAxis(Bg,e)}rotateY(e){return this.rotateOnAxis(Wg,e)}rotateZ(e){return this.rotateOnAxis(Xg,e)}translateOnAxis(e,t){return Gg.copy(e).applyQuaternion(this.quaternion),this.position.add(Gg.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Bg,e)}translateY(e){return this.translateOnAxis(Wg,e)}translateZ(e){return this.translateOnAxis(Xg,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Tr.copy(this.matrixWorld).invert())}lookAt(e,t,a){e.isVector3?Jl.copy(e):Jl.set(e,t,a);const s=this.parent;this.updateWorldMatrix(!0,!1),yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Tr.lookAt(yo,Jl,this.up):Tr.lookAt(Jl,yo,this.up),this.quaternion.setFromRotationMatrix(Tr),s&&(Tr.extractRotation(s.matrixWorld),fs.setFromRotationMatrix(Tr),this.quaternion.premultiply(fs.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(kt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent($g),hs.child=e,this.dispatchEvent(hs),hs.child=null):kt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let a=0;a<arguments.length;a++)this.remove(arguments[a]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(vM),Gd.child=e,this.dispatchEvent(Gd),Gd.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Tr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Tr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Tr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent($g),hs.child=e,this.dispatchEvent(hs),hs.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let a=0,s=this.children.length;a<s;a++){const u=this.children[a].getObjectByProperty(e,t);if(u!==void 0)return u}}getObjectsByProperty(e,t,a=[]){this[e]===t&&a.push(this);const s=this.children;for(let l=0,u=s.length;l<u;l++)s[l].getObjectsByProperty(e,t,a);return a}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,e,mM),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(yo,gM,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,a=e.y,s=e.z,l=this.matrix.elements;l[12]+=t-l[0]*t-l[4]*a-l[8]*s,l[13]+=a-l[1]*t-l[5]*a-l[9]*s,l[14]+=s-l[2]*t-l[6]*a-l[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let a=0,s=t.length;a<s;a++)t[a].updateMatrixWorld(e)}updateWorldMatrix(e,t,a=!1){const s=this.parent;if(e===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||a)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,a=!0),t===!0){const l=this.children;for(let u=0,d=l.length;u<d;u++)l[u].updateWorldMatrix(!1,!0,a)}}toJSON(e){const t=e===void 0||typeof e=="string",a={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},a.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(d=>({...d,boundingBox:d.boundingBox?d.boundingBox.toJSON():void 0,boundingSphere:d.boundingSphere?d.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(d=>({...d})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(e),s.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function l(d,m){return d[m.uuid]===void 0&&(d[m.uuid]=m.toJSON(e)),m.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=l(e.geometries,this.geometry);const d=this.geometry.parameters;if(d!==void 0&&d.shapes!==void 0){const m=d.shapes;if(Array.isArray(m))for(let p=0,v=m.length;p<v;p++){const x=m[p];l(e.shapes,x)}else l(e.shapes,m)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(l(e.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const d=[];for(let m=0,p=this.material.length;m<p;m++)d.push(l(e.materials,this.material[m]));s.material=d}else s.material=l(e.materials,this.material);if(this.children.length>0){s.children=[];for(let d=0;d<this.children.length;d++)s.children.push(this.children[d].toJSON(e).object)}if(this.animations.length>0){s.animations=[];for(let d=0;d<this.animations.length;d++){const m=this.animations[d];s.animations.push(l(e.animations,m))}}if(t){const d=u(e.geometries),m=u(e.materials),p=u(e.textures),v=u(e.images),x=u(e.shapes),_=u(e.skeletons),M=u(e.animations),w=u(e.nodes);d.length>0&&(a.geometries=d),m.length>0&&(a.materials=m),p.length>0&&(a.textures=p),v.length>0&&(a.images=v),x.length>0&&(a.shapes=x),_.length>0&&(a.skeletons=_),M.length>0&&(a.animations=M),w.length>0&&(a.nodes=w)}return a.object=s,a;function u(d){const m=[];for(const p in d){const v=d[p];delete v.metadata,m.push(v)}return m}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let a=0;a<e.children.length;a++){const s=e.children[a];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}On.DEFAULT_UP=new J(0,1,0);On.DEFAULT_MATRIX_AUTO_UPDATE=!0;On.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class No extends On{constructor(){super(),this.isGroup=!0,this.type="Group"}}const _M={type:"move"};class Bd{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new No,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new No,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new J,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new J),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new No,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new J,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new J,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const a of e.hand.values())this._getHandJoint(t,a)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,a){let s=null,l=null,u=null;const d=this._targetRay,m=this._grip,p=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(p&&e.hand){u=!0;for(const b of e.hand.values()){const y=t.getJointPose(b,a),S=this._getHandJoint(p,b);y!==null&&(S.matrix.fromArray(y.transform.matrix),S.matrix.decompose(S.position,S.rotation,S.scale),S.matrixWorldNeedsUpdate=!0,S.jointRadius=y.radius),S.visible=y!==null}const v=p.joints["index-finger-tip"],x=p.joints["thumb-tip"],_=v.position.distanceTo(x.position),M=.02,w=.005;p.inputState.pinching&&_>M+w?(p.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!p.inputState.pinching&&_<=M-w&&(p.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else m!==null&&e.gripSpace&&(l=t.getPose(e.gripSpace,a),l!==null&&(m.matrix.fromArray(l.transform.matrix),m.matrix.decompose(m.position,m.rotation,m.scale),m.matrixWorldNeedsUpdate=!0,l.linearVelocity?(m.hasLinearVelocity=!0,m.linearVelocity.copy(l.linearVelocity)):m.hasLinearVelocity=!1,l.angularVelocity?(m.hasAngularVelocity=!0,m.angularVelocity.copy(l.angularVelocity)):m.hasAngularVelocity=!1,m.eventsEnabled&&m.dispatchEvent({type:"gripUpdated",data:e,target:this})));d!==null&&(s=t.getPose(e.targetRaySpace,a),s===null&&l!==null&&(s=l),s!==null&&(d.matrix.fromArray(s.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,s.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(s.linearVelocity)):d.hasLinearVelocity=!1,s.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(s.angularVelocity)):d.hasAngularVelocity=!1,this.dispatchEvent(_M)))}return d!==null&&(d.visible=s!==null),m!==null&&(m.visible=l!==null),p!==null&&(p.visible=u!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const a=new No;a.matrixAutoUpdate=!1,a.visible=!1,e.joints[t.jointName]=a,e.add(a)}return e.joints[t.jointName]}}const Ov={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ia={h:0,s:0,l:0},Ql={h:0,s:0,l:0};function Wd(i,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?i+(e-i)*6*t:t<1/2?e:t<2/3?i+(e-i)*6*(2/3-t):i}class Pt{constructor(e,t,a){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,a)}set(e,t,a){if(t===void 0&&a===void 0){const s=e;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(e,t,a);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Mi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,It.colorSpaceToWorking(this,t),this}setRGB(e,t,a,s=It.workingColorSpace){return this.r=e,this.g=t,this.b=a,It.colorSpaceToWorking(this,s),this}setHSL(e,t,a,s=It.workingColorSpace){if(e=rM(e,1),t=Lt(t,0,1),a=Lt(a,0,1),t===0)this.r=this.g=this.b=a;else{const l=a<=.5?a*(1+t):a+t-a*t,u=2*a-l;this.r=Wd(u,l,e+1/3),this.g=Wd(u,l,e),this.b=Wd(u,l,e-1/3)}return It.colorSpaceToWorking(this,s),this}setStyle(e,t=Mi){function a(l){l!==void 0&&parseFloat(l)<1&&gt("Color: Alpha component of "+e+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(e)){let l;const u=s[1],d=s[2];switch(u){case"rgb":case"rgba":if(l=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(255,parseInt(l[1],10))/255,Math.min(255,parseInt(l[2],10))/255,Math.min(255,parseInt(l[3],10))/255,t);if(l=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setRGB(Math.min(100,parseInt(l[1],10))/100,Math.min(100,parseInt(l[2],10))/100,Math.min(100,parseInt(l[3],10))/100,t);break;case"hsl":case"hsla":if(l=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(d))return a(l[4]),this.setHSL(parseFloat(l[1])/360,parseFloat(l[2])/100,parseFloat(l[3])/100,t);break;default:gt("Color: Unknown color model "+e)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(e)){const l=s[1],u=l.length;if(u===3)return this.setRGB(parseInt(l.charAt(0),16)/15,parseInt(l.charAt(1),16)/15,parseInt(l.charAt(2),16)/15,t);if(u===6)return this.setHex(parseInt(l,16),t);gt("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Mi){const a=Ov[e.toLowerCase()];return a!==void 0?this.setHex(a,t):gt("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Fr(e.r),this.g=Fr(e.g),this.b=Fr(e.b),this}copyLinearToSRGB(e){return this.r=Us(e.r),this.g=Us(e.g),this.b=Us(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Mi){return It.workingToColorSpace(jn.copy(this),e),Math.round(Lt(jn.r*255,0,255))*65536+Math.round(Lt(jn.g*255,0,255))*256+Math.round(Lt(jn.b*255,0,255))}getHexString(e=Mi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=It.workingColorSpace){It.workingToColorSpace(jn.copy(this),t);const a=jn.r,s=jn.g,l=jn.b,u=Math.max(a,s,l),d=Math.min(a,s,l);let m,p;const v=(d+u)/2;if(d===u)m=0,p=0;else{const x=u-d;switch(p=v<=.5?x/(u+d):x/(2-u-d),u){case a:m=(s-l)/x+(s<l?6:0);break;case s:m=(l-a)/x+2;break;case l:m=(a-s)/x+4;break}m/=6}return e.h=m,e.s=p,e.l=v,e}getRGB(e,t=It.workingColorSpace){return It.workingToColorSpace(jn.copy(this),t),e.r=jn.r,e.g=jn.g,e.b=jn.b,e}getStyle(e=Mi){It.workingToColorSpace(jn.copy(this),e);const t=jn.r,a=jn.g,s=jn.b;return e!==Mi?`color(${e} ${t.toFixed(3)} ${a.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(a*255)},${Math.round(s*255)})`}offsetHSL(e,t,a){return this.getHSL(ia),this.setHSL(ia.h+e,ia.s+t,ia.l+a)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,a){return this.r=e.r+(t.r-e.r)*a,this.g=e.g+(t.g-e.g)*a,this.b=e.b+(t.b-e.b)*a,this}lerpHSL(e,t){this.getHSL(ia),e.getHSL(Ql);const a=Id(ia.h,Ql.h,t),s=Id(ia.s,Ql.s,t),l=Id(ia.l,Ql.l,t);return this.setHSL(a,s,l),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,a=this.g,s=this.b,l=e.elements;return this.r=l[0]*t+l[3]*a+l[6]*s,this.g=l[1]*t+l[4]*a+l[7]*s,this.b=l[2]*t+l[5]*a+l[8]*s,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const jn=new Pt;Pt.NAMES=Ov;class xM extends On{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ha,this.environmentIntensity=1,this.environmentRotation=new ha,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const qi=new J,wr=new J,Xd=new J,Ar=new J,ps=new J,ms=new J,Yg=new J,$d=new J,Yd=new J,qd=new J,jd=new mn,Kd=new mn,Zd=new mn;class Oi{constructor(e=new J,t=new J,a=new J){this.a=e,this.b=t,this.c=a}static getNormal(e,t,a,s){s.subVectors(a,t),qi.subVectors(e,t),s.cross(qi);const l=s.lengthSq();return l>0?s.multiplyScalar(1/Math.sqrt(l)):s.set(0,0,0)}static getBarycoord(e,t,a,s,l){qi.subVectors(s,t),wr.subVectors(a,t),Xd.subVectors(e,t);const u=qi.dot(qi),d=qi.dot(wr),m=qi.dot(Xd),p=wr.dot(wr),v=wr.dot(Xd),x=u*p-d*d;if(x===0)return l.set(0,0,0),null;const _=1/x,M=(p*m-d*v)*_,w=(u*v-d*m)*_;return l.set(1-M-w,w,M)}static containsPoint(e,t,a,s){return this.getBarycoord(e,t,a,s,Ar)===null?!1:Ar.x>=0&&Ar.y>=0&&Ar.x+Ar.y<=1}static getInterpolation(e,t,a,s,l,u,d,m){return this.getBarycoord(e,t,a,s,Ar)===null?(m.x=0,m.y=0,"z"in m&&(m.z=0),"w"in m&&(m.w=0),null):(m.setScalar(0),m.addScaledVector(l,Ar.x),m.addScaledVector(u,Ar.y),m.addScaledVector(d,Ar.z),m)}static getInterpolatedAttribute(e,t,a,s,l,u){return jd.setScalar(0),Kd.setScalar(0),Zd.setScalar(0),jd.fromBufferAttribute(e,t),Kd.fromBufferAttribute(e,a),Zd.fromBufferAttribute(e,s),u.setScalar(0),u.addScaledVector(jd,l.x),u.addScaledVector(Kd,l.y),u.addScaledVector(Zd,l.z),u}static isFrontFacing(e,t,a,s){return qi.subVectors(a,t),wr.subVectors(e,t),qi.cross(wr).dot(s)<0}set(e,t,a){return this.a.copy(e),this.b.copy(t),this.c.copy(a),this}setFromPointsAndIndices(e,t,a,s){return this.a.copy(e[t]),this.b.copy(e[a]),this.c.copy(e[s]),this}setFromAttributeAndIndices(e,t,a,s){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,a),this.c.fromBufferAttribute(e,s),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return qi.subVectors(this.c,this.b),wr.subVectors(this.a,this.b),qi.cross(wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Oi.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Oi.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,a,s,l){return Oi.getInterpolation(e,this.a,this.b,this.c,t,a,s,l)}containsPoint(e){return Oi.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Oi.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const a=this.a,s=this.b,l=this.c;let u,d;ps.subVectors(s,a),ms.subVectors(l,a),$d.subVectors(e,a);const m=ps.dot($d),p=ms.dot($d);if(m<=0&&p<=0)return t.copy(a);Yd.subVectors(e,s);const v=ps.dot(Yd),x=ms.dot(Yd);if(v>=0&&x<=v)return t.copy(s);const _=m*x-v*p;if(_<=0&&m>=0&&v<=0)return u=m/(m-v),t.copy(a).addScaledVector(ps,u);qd.subVectors(e,l);const M=ps.dot(qd),w=ms.dot(qd);if(w>=0&&M<=w)return t.copy(l);const b=M*p-m*w;if(b<=0&&p>=0&&w<=0)return d=p/(p-w),t.copy(a).addScaledVector(ms,d);const y=v*w-M*x;if(y<=0&&x-v>=0&&M-w>=0)return Yg.subVectors(l,s),d=(x-v)/(x-v+(M-w)),t.copy(s).addScaledVector(Yg,d);const S=1/(y+b+_);return u=b*S,d=_*S,t.copy(a).addScaledVector(ps,u).addScaledVector(ms,d)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Yo{constructor(e=new J(1/0,1/0,1/0),t=new J(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t+=3)this.expandByPoint(ji.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,a=e.count;t<a;t++)this.expandByPoint(ji.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,a=e.length;t<a;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const a=ji.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(a),this.max.copy(e).add(a),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const a=e.geometry;if(a!==void 0){const l=a.getAttribute("position");if(t===!0&&l!==void 0&&e.isInstancedMesh!==!0)for(let u=0,d=l.count;u<d;u++)e.isMesh===!0?e.getVertexPosition(u,ji):ji.fromBufferAttribute(l,u),ji.applyMatrix4(e.matrixWorld),this.expandByPoint(ji);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ec.copy(e.boundingBox)):(a.boundingBox===null&&a.computeBoundingBox(),ec.copy(a.boundingBox)),ec.applyMatrix4(e.matrixWorld),this.union(ec)}const s=e.children;for(let l=0,u=s.length;l<u;l++)this.expandByObject(s[l],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ji),ji.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,a;return e.normal.x>0?(t=e.normal.x*this.min.x,a=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,a=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,a+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,a+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,a+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,a+=e.normal.z*this.min.z),t<=-e.constant&&a>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(Mo),tc.subVectors(this.max,Mo),gs.subVectors(e.a,Mo),vs.subVectors(e.b,Mo),_s.subVectors(e.c,Mo),ra.subVectors(vs,gs),aa.subVectors(_s,vs),Pa.subVectors(gs,_s);let t=[0,-ra.z,ra.y,0,-aa.z,aa.y,0,-Pa.z,Pa.y,ra.z,0,-ra.x,aa.z,0,-aa.x,Pa.z,0,-Pa.x,-ra.y,ra.x,0,-aa.y,aa.x,0,-Pa.y,Pa.x,0];return!Jd(t,gs,vs,_s,tc)||(t=[1,0,0,0,1,0,0,0,1],!Jd(t,gs,vs,_s,tc))?!1:(nc.crossVectors(ra,aa),t=[nc.x,nc.y,nc.z],Jd(t,gs,vs,_s,tc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ji).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ji).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Cr[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Cr[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Cr[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Cr[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Cr[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Cr[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Cr[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Cr[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Cr),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Cr=[new J,new J,new J,new J,new J,new J,new J,new J],ji=new J,ec=new Yo,gs=new J,vs=new J,_s=new J,ra=new J,aa=new J,Pa=new J,Mo=new J,tc=new J,nc=new J,La=new J;function Jd(i,e,t,a,s){for(let l=0,u=i.length-3;l<=u;l+=3){La.fromArray(i,l);const d=s.x*Math.abs(La.x)+s.y*Math.abs(La.y)+s.z*Math.abs(La.z),m=e.dot(La),p=t.dot(La),v=a.dot(La);if(Math.max(-Math.max(m,p,v),Math.min(m,p,v))>d)return!1}return!0}const En=new J,ic=new lt;let SM=0;class hi extends ma{constructor(e,t,a=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:SM++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=a,this.usage=Nv,this.updateRanges=[],this.gpuType=or,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,a){e*=this.itemSize,a*=t.itemSize;for(let s=0,l=this.itemSize;s<l;s++)this.array[e+s]=t.array[a+s];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,a=this.count;t<a;t++)ic.fromBufferAttribute(this,t),ic.applyMatrix3(e),this.setXY(t,ic.x,ic.y);else if(this.itemSize===3)for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.applyMatrix3(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyMatrix4(e){for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.applyMatrix4(e),this.setXYZ(t,En.x,En.y,En.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.applyNormalMatrix(e),this.setXYZ(t,En.x,En.y,En.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)En.fromBufferAttribute(this,t),En.transformDirection(e),this.setXYZ(t,En.x,En.y,En.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let a=this.array[e*this.itemSize+t];return this.normalized&&(a=sr(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Kt(a,this.array)),this.array[e*this.itemSize+t]=a,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=sr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=sr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=sr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=sr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,a){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array)),this.array[e+0]=t,this.array[e+1]=a,this}setXYZ(e,t,a,s){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),s=Kt(s,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e*=this.itemSize,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),s=Kt(s,this.array),l=Kt(l,this.array)),this.array[e+0]=t,this.array[e+1]=a,this.array[e+2]=s,this.array[e+3]=l,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class Iv extends hi{constructor(e,t,a){super(new Uint16Array(e),t,a)}}class kv extends hi{constructor(e,t,a){super(new Uint32Array(e),t,a)}}class Rn extends hi{constructor(e,t,a){super(new Float32Array(e),t,a)}}const yM=new Yo,Eo=new J,Qd=new J;class Lh{constructor(e=new J,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const a=this.center;t!==void 0?a.copy(t):yM.setFromPoints(e).getCenter(a);let s=0;for(let l=0,u=e.length;l<u;l++)s=Math.max(s,a.distanceToSquared(e[l]));return this.radius=Math.sqrt(s),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const a=this.center.distanceToSquared(e);return t.copy(e),a>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Eo.subVectors(e,this.center);const t=Eo.lengthSq();if(t>this.radius*this.radius){const a=Math.sqrt(t),s=(a-this.radius)*.5;this.center.addScaledVector(Eo,s/a),this.radius+=s}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(Qd.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Eo.copy(e.center).add(Qd)),this.expandByPoint(Eo.copy(e.center).sub(Qd))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let MM=0;const Di=new un,ef=new On,xs=new J,Si=new Yo,To=new Yo,Fn=new J;class ni extends ma{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:MM++}),this.uuid=ua(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(eM(e)?kv:Iv)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,a=0){this.groups.push({start:e,count:t,materialIndex:a})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const a=this.attributes.normal;if(a!==void 0){const l=new St().getNormalMatrix(e);a.applyNormalMatrix(l),a.needsUpdate=!0}const s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(e),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Di.makeRotationFromQuaternion(e),this.applyMatrix4(Di),this}rotateX(e){return Di.makeRotationX(e),this.applyMatrix4(Di),this}rotateY(e){return Di.makeRotationY(e),this.applyMatrix4(Di),this}rotateZ(e){return Di.makeRotationZ(e),this.applyMatrix4(Di),this}translate(e,t,a){return Di.makeTranslation(e,t,a),this.applyMatrix4(Di),this}scale(e,t,a){return Di.makeScale(e,t,a),this.applyMatrix4(Di),this}lookAt(e){return ef.lookAt(e),ef.updateMatrix(),this.applyMatrix4(ef.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(xs).negate(),this.translate(xs.x,xs.y,xs.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const a=[];for(let s=0,l=e.length;s<l;s++){const u=e[s];a.push(u.x,u.y,u.z||0)}this.setAttribute("position",new Rn(a,3))}else{const a=Math.min(e.length,t.count);for(let s=0;s<a;s++){const l=e[s];t.setXYZ(s,l.x,l.y,l.z||0)}e.length>t.count&&gt("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Yo);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new J(-1/0,-1/0,-1/0),new J(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let a=0,s=t.length;a<s;a++){const l=t[a];Si.setFromBufferAttribute(l),this.morphTargetsRelative?(Fn.addVectors(this.boundingBox.min,Si.min),this.boundingBox.expandByPoint(Fn),Fn.addVectors(this.boundingBox.max,Si.max),this.boundingBox.expandByPoint(Fn)):(this.boundingBox.expandByPoint(Si.min),this.boundingBox.expandByPoint(Si.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&kt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Lh);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){kt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new J,1/0);return}if(e){const a=this.boundingSphere.center;if(Si.setFromBufferAttribute(e),t)for(let l=0,u=t.length;l<u;l++){const d=t[l];To.setFromBufferAttribute(d),this.morphTargetsRelative?(Fn.addVectors(Si.min,To.min),Si.expandByPoint(Fn),Fn.addVectors(Si.max,To.max),Si.expandByPoint(Fn)):(Si.expandByPoint(To.min),Si.expandByPoint(To.max))}Si.getCenter(a);let s=0;for(let l=0,u=e.count;l<u;l++)Fn.fromBufferAttribute(e,l),s=Math.max(s,a.distanceToSquared(Fn));if(t)for(let l=0,u=t.length;l<u;l++){const d=t[l],m=this.morphTargetsRelative;for(let p=0,v=d.count;p<v;p++)Fn.fromBufferAttribute(d,p),m&&(xs.fromBufferAttribute(e,p),Fn.add(xs)),s=Math.max(s,a.distanceToSquared(Fn))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&kt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){kt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const a=t.position,s=t.normal,l=t.uv;let u=this.getAttribute("tangent");(u===void 0||u.count!==a.count)&&(u=new hi(new Float32Array(4*a.count),4),this.setAttribute("tangent",u));const d=[],m=[];for(let T=0;T<a.count;T++)d[T]=new J,m[T]=new J;const p=new J,v=new J,x=new J,_=new lt,M=new lt,w=new lt,b=new J,y=new J;function S(T,F,z){p.fromBufferAttribute(a,T),v.fromBufferAttribute(a,F),x.fromBufferAttribute(a,z),_.fromBufferAttribute(l,T),M.fromBufferAttribute(l,F),w.fromBufferAttribute(l,z),v.sub(p),x.sub(p),M.sub(_),w.sub(_);const B=1/(M.x*w.y-w.x*M.y);isFinite(B)&&(b.copy(v).multiplyScalar(w.y).addScaledVector(x,-M.y).multiplyScalar(B),y.copy(x).multiplyScalar(M.x).addScaledVector(v,-w.x).multiplyScalar(B),d[T].add(b),d[F].add(b),d[z].add(b),m[T].add(y),m[F].add(y),m[z].add(y))}let U=this.groups;U.length===0&&(U=[{start:0,count:e.count}]);for(let T=0,F=U.length;T<F;++T){const z=U[T],B=z.start,K=z.count;for(let ie=B,H=B+K;ie<H;ie+=3)S(e.getX(ie+0),e.getX(ie+1),e.getX(ie+2))}const V=new J,R=new J,L=new J,P=new J;function I(T){L.fromBufferAttribute(s,T),P.copy(L);const F=d[T];V.copy(F),V.sub(L.multiplyScalar(L.dot(F))).normalize(),R.crossVectors(P,F);const B=R.dot(m[T])<0?-1:1;u.setXYZW(T,V.x,V.y,V.z,B)}for(let T=0,F=U.length;T<F;++T){const z=U[T],B=z.start,K=z.count;for(let ie=B,H=B+K;ie<H;ie+=3)I(e.getX(ie+0)),I(e.getX(ie+1)),I(e.getX(ie+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let a=this.getAttribute("normal");if(a===void 0||a.count!==t.count)a=new hi(new Float32Array(t.count*3),3),this.setAttribute("normal",a);else for(let _=0,M=a.count;_<M;_++)a.setXYZ(_,0,0,0);const s=new J,l=new J,u=new J,d=new J,m=new J,p=new J,v=new J,x=new J;if(e)for(let _=0,M=e.count;_<M;_+=3){const w=e.getX(_+0),b=e.getX(_+1),y=e.getX(_+2);s.fromBufferAttribute(t,w),l.fromBufferAttribute(t,b),u.fromBufferAttribute(t,y),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),d.fromBufferAttribute(a,w),m.fromBufferAttribute(a,b),p.fromBufferAttribute(a,y),d.add(v),m.add(v),p.add(v),a.setXYZ(w,d.x,d.y,d.z),a.setXYZ(b,m.x,m.y,m.z),a.setXYZ(y,p.x,p.y,p.z)}else for(let _=0,M=t.count;_<M;_+=3)s.fromBufferAttribute(t,_+0),l.fromBufferAttribute(t,_+1),u.fromBufferAttribute(t,_+2),v.subVectors(u,l),x.subVectors(s,l),v.cross(x),a.setXYZ(_+0,v.x,v.y,v.z),a.setXYZ(_+1,v.x,v.y,v.z),a.setXYZ(_+2,v.x,v.y,v.z);this.normalizeNormals(),a.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,a=e.count;t<a;t++)Fn.fromBufferAttribute(e,t),Fn.normalize(),e.setXYZ(t,Fn.x,Fn.y,Fn.z)}toNonIndexed(){function e(d,m){const p=d.array,v=d.itemSize,x=d.normalized,_=new p.constructor(m.length*v);let M=0,w=0;for(let b=0,y=m.length;b<y;b++){d.isInterleavedBufferAttribute?M=m[b]*d.data.stride+d.offset:M=m[b]*v;for(let S=0;S<v;S++)_[w++]=p[M++]}return new hi(_,v,x)}if(this.index===null)return gt("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new ni,a=this.index.array,s=this.attributes;for(const d in s){const m=s[d],p=e(m,a);t.setAttribute(d,p)}const l=this.morphAttributes;for(const d in l){const m=[],p=l[d];for(let v=0,x=p.length;v<x;v++){const _=p[v],M=e(_,a);m.push(M)}t.morphAttributes[d]=m}t.morphTargetsRelative=this.morphTargetsRelative;const u=this.groups;for(let d=0,m=u.length;d<m;d++){const p=u[d];t.addGroup(p.start,p.count,p.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const m=this.parameters;for(const p in m)m[p]!==void 0&&(e[p]=m[p]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const a=this.attributes;for(const m in a){const p=a[m];e.data.attributes[m]=p.toJSON(e.data)}const s={};let l=!1;for(const m in this.morphAttributes){const p=this.morphAttributes[m],v=[];for(let x=0,_=p.length;x<_;x++){const M=p[x];v.push(M.toJSON(e.data))}v.length>0&&(s[m]=v,l=!0)}l&&(e.data.morphAttributes=s,e.data.morphTargetsRelative=this.morphTargetsRelative);const u=this.groups;u.length>0&&(e.data.groups=JSON.parse(JSON.stringify(u)));const d=this.boundingSphere;return d!==null&&(e.data.boundingSphere=d.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const a=e.index;a!==null&&this.setIndex(a.clone());const s=e.attributes;for(const p in s){const v=s[p];this.setAttribute(p,v.clone(t))}const l=e.morphAttributes;for(const p in l){const v=[],x=l[p];for(let _=0,M=x.length;_<M;_++)v.push(x[_].clone(t));this.morphAttributes[p]=v}this.morphTargetsRelative=e.morphTargetsRelative;const u=e.groups;for(let p=0,v=u.length;p<v;p++){const x=u[p];this.addGroup(x.start,x.count,x.materialIndex)}const d=e.boundingBox;d!==null&&(this.boundingBox=d.clone());const m=e.boundingSphere;return m!==null&&(this.boundingSphere=m.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class EM{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Nv,this.updateRanges=[],this.version=0,this.uuid=ua()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,a){e*=this.stride,a*=t.stride;for(let s=0,l=this.stride;s<l;s++)this.array[e+s]=t.array[a+s];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ua()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),a=new this.constructor(t,this.stride);return a.setUsage(this.usage),a}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=ua()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const ei=new J;class Gc{constructor(e,t,a,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=a,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,a=this.data.count;t<a;t++)ei.fromBufferAttribute(this,t),ei.applyMatrix4(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}applyNormalMatrix(e){for(let t=0,a=this.count;t<a;t++)ei.fromBufferAttribute(this,t),ei.applyNormalMatrix(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}transformDirection(e){for(let t=0,a=this.count;t<a;t++)ei.fromBufferAttribute(this,t),ei.transformDirection(e),this.setXYZ(t,ei.x,ei.y,ei.z);return this}getComponent(e,t){let a=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(a=sr(a,this.array)),a}setComponent(e,t,a){return this.normalized&&(a=Kt(a,this.array)),this.data.array[e*this.data.stride+this.offset+t]=a,this}setX(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Kt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=sr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=sr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=sr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=sr(t,this.array)),t}setXY(e,t,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this}setXYZ(e,t,a,s){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),s=Kt(s,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this}setXYZW(e,t,a,s,l){return e=e*this.data.stride+this.offset,this.normalized&&(t=Kt(t,this.array),a=Kt(a,this.array),s=Kt(s,this.array),l=Kt(l,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=a,this.data.array[e+2]=s,this.data.array[e+3]=l,this}clone(e){if(e===void 0){Vc("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return new hi(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new Gc(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){Vc("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let a=0;a<this.count;a++){const s=a*this.data.stride+this.offset;for(let l=0;l<this.itemSize;l++)t.push(this.data.array[s+l])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const tf=new J,TM=new J,wM=new St;class Lr{constructor(e=new J(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,a,s){return this.normal.set(e,t,a),this.constant=s,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,a){const s=tf.subVectors(a,t).cross(TM.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(s,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,a=!0){const s=e.delta(tf),l=this.normal.dot(s);if(l===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const u=-(e.start.dot(this.normal)+this.constant)/l;return a===!0&&(u<0||u>1)?null:t.copy(e.start).addScaledVector(s,u)}intersectsLine(e){const t=this.distanceToPoint(e.start),a=this.distanceToPoint(e.end);return t<0&&a>0||a<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const a=t||wM.getNormalMatrix(e),s=this.coplanarPoint(tf).applyMatrix4(e),l=this.normal.applyMatrix3(a).normalize();return this.constant=-s.dot(l),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let AM=0;class zs extends ma{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:AM++}),this.uuid=ua(),this.name="",this.type="Material",this.blending=Oo,this.side=za,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=mv,this.blendDst=gv,this.blendEquation=bs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Pt(0,0,0),this.blendAlpha=0,this.depthFunc=Vo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=Yy,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Od,this.stencilZFail=Od,this.stencilZPass=Od,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const a=e[t];if(a===void 0){gt(`Material: parameter '${t}' has value of undefined.`);continue}const s=this[t];if(s===void 0){gt(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(a):s&&s.isVector2&&a&&a.isVector2||s&&s.isEuler&&a&&a.isEuler||s&&s.isVector3&&a&&a.isVector3?s.copy(a):this[t]=a}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const a={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};a.uuid=this.uuid,a.type=this.type,a.blending=this.blending,a.side=this.side,a.shadowSide=this.shadowSide,a.vertexColors=this.vertexColors,a.opacity=this.opacity,a.transparent=this.transparent,a.blendSrc=this.blendSrc,a.blendDst=this.blendDst,a.blendEquation=this.blendEquation,a.blendSrcAlpha=this.blendSrcAlpha,a.blendDstAlpha=this.blendDstAlpha,a.blendEquationAlpha=this.blendEquationAlpha,a.blendColor=this.blendColor.getHex(),a.blendAlpha=this.blendAlpha,a.depthFunc=this.depthFunc,a.depthTest=this.depthTest,a.depthWrite=this.depthWrite,a.colorWrite=this.colorWrite,a.clipIntersection=this.clipIntersection,a.clipShadows=this.clipShadows,a.stencilWriteMask=this.stencilWriteMask,a.stencilFunc=this.stencilFunc,a.stencilRef=this.stencilRef,a.stencilFuncMask=this.stencilFuncMask,a.stencilFail=this.stencilFail,a.stencilZFail=this.stencilZFail,a.stencilZPass=this.stencilZPass,a.stencilWrite=this.stencilWrite,a.polygonOffset=this.polygonOffset,a.polygonOffsetFactor=this.polygonOffsetFactor,a.polygonOffsetUnits=this.polygonOffsetUnits,a.dithering=this.dithering,a.alphaTest=this.alphaTest,a.alphaHash=this.alphaHash,a.alphaToCoverage=this.alphaToCoverage,a.premultipliedAlpha=this.premultipliedAlpha,a.forceSinglePass=this.forceSinglePass,a.allowOverride=this.allowOverride,a.visible=this.visible,a.toneMapped=this.toneMapped,a.name=this.name,this.color&&this.color.isColor&&(a.color=this.color.getHex()),this.roughness!==void 0&&(a.roughness=this.roughness),this.metalness!==void 0&&(a.metalness=this.metalness),this.sheen!==void 0&&(a.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(a.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(a.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(a.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(a.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(a.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(a.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(a.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(a.shininess=this.shininess),this.clearcoat!==void 0&&(a.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(a.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(a.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(a.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(a.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,a.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(a.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(a.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(a.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(a.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(a.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(a.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(a.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(a.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(a.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(a.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(a.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(a.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(a.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(a.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(a.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(a.lightMap=this.lightMap.toJSON(e).uuid,a.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(a.aoMap=this.aoMap.toJSON(e).uuid,a.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(a.bumpMap=this.bumpMap.toJSON(e).uuid,a.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(a.normalMap=this.normalMap.toJSON(e).uuid,a.normalMapType=this.normalMapType,a.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(a.displacementMap=this.displacementMap.toJSON(e).uuid,a.displacementScale=this.displacementScale,a.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(a.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(a.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(a.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(a.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(a.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(a.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(a.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(a.combine=this.combine)),this.envMapRotation!==void 0&&(a.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(a.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(a.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(a.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(a.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(a.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(a.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(a.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(a.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(a.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(a.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(a.size=this.size),this.sizeAttenuation!==void 0&&(a.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(a.clippingPlanes=this.clippingPlanes.map(l=>l.toJSON())),this.rotation!==void 0&&(a.rotation=this.rotation),this.depthPacking!==void 0&&(a.depthPacking=this.depthPacking),this.linewidth!==void 0&&(a.linewidth=this.linewidth),this.linecap!==void 0&&(a.linecap=this.linecap),this.linejoin!==void 0&&(a.linejoin=this.linejoin),this.dashSize!==void 0&&(a.dashSize=this.dashSize),this.gapSize!==void 0&&(a.gapSize=this.gapSize),this.scale!==void 0&&(a.scale=this.scale),this.wireframe!==void 0&&(a.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(a.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(a.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(a.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(a.flatShading=this.flatShading),this.fog!==void 0&&(a.fog=this.fog),Object.keys(this.userData).length>0&&(a.userData=this.userData);function s(l){const u=[];for(const d in l){const m=l[d];delete m.metadata,u.push(m)}return u}if(t){const l=s(e.textures),u=s(e.images);l.length>0&&(a.textures=l),u.length>0&&(a.images=u)}return a}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Pt().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(a=>new Lr().fromJSON(a))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let a=e.normalScale;Array.isArray(a)===!1&&(a=[a,a]),this.normalScale=new lt().fromArray(a)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new lt().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let a=null;if(t!==null){const s=t.length;a=new Array(s);for(let l=0;l!==s;++l)a[l]=t[l].clone()}return this.clippingPlanes=a,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class zv extends zs{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new Pt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ss;const wo=new J,ys=new J,Ms=new J,Es=new lt,Ao=new lt,Hv=new un,rc=new J,Co=new J,ac=new J,qg=new lt,nf=new lt,jg=new lt;class CM extends On{constructor(e=new zv){if(super(),this.isSprite=!0,this.type="Sprite",Ss===void 0){Ss=new ni;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),a=new EM(t,5);Ss.setIndex([0,1,2,0,2,3]),Ss.setAttribute("position",new Gc(a,3,0,!1)),Ss.setAttribute("uv",new Gc(a,2,3,!1))}this.geometry=Ss,this.material=e,this.center=new lt(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&kt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ys.setFromMatrixScale(this.matrixWorld),Hv.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),Ms.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ys.multiplyScalar(-Ms.z);const a=this.material.rotation;let s,l;a!==0&&(l=Math.cos(a),s=Math.sin(a));const u=this.center;sc(rc.set(-.5,-.5,0),Ms,u,ys,s,l),sc(Co.set(.5,-.5,0),Ms,u,ys,s,l),sc(ac.set(.5,.5,0),Ms,u,ys,s,l),qg.set(0,0),nf.set(1,0),jg.set(1,1);let d=e.ray.intersectTriangle(rc,Co,ac,!1,wo);if(d===null&&(sc(Co.set(-.5,.5,0),Ms,u,ys,s,l),nf.set(0,1),d=e.ray.intersectTriangle(rc,ac,Co,!1,wo),d===null))return;const m=e.ray.origin.distanceTo(wo);m<e.near||m>e.far||t.push({distance:m,point:wo.clone(),uv:Oi.getInterpolation(wo,rc,Co,ac,qg,nf,jg,new lt),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function sc(i,e,t,a,s,l){Es.subVectors(i,t).addScalar(.5).multiply(a),s!==void 0?(Ao.x=l*Es.x-s*Es.y,Ao.y=s*Es.x+l*Es.y):Ao.copy(Es),i.copy(e),i.x+=Ao.x,i.y+=Ao.y,i.applyMatrix4(Hv)}const Rr=new J,rf=new J,oc=new J,lc=new J;class Dh{constructor(e=new J,t=new J(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Rr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const a=t.dot(this.direction);return a<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,a)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Rr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Rr.copy(this.origin).addScaledVector(this.direction,t),Rr.distanceToSquared(e))}distanceSqToSegment(e,t,a,s){rf.copy(e).add(t).multiplyScalar(.5),oc.copy(t).sub(e).normalize(),lc.copy(this.origin).sub(rf);const l=e.distanceTo(t)*.5,u=-this.direction.dot(oc),d=lc.dot(this.direction),m=-lc.dot(oc),p=lc.lengthSq(),v=Math.abs(1-u*u);let x,_,M,w;if(v>0)if(x=u*m-d,_=u*d-m,w=l*v,x>=0)if(_>=-w)if(_<=w){const b=1/v;x*=b,_*=b,M=x*(x+u*_+2*d)+_*(u*x+_+2*m)+p}else _=l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _=-l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;else _<=-w?(x=Math.max(0,-(-u*l+d)),_=x>0?-l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p):_<=w?(x=0,_=Math.min(Math.max(-l,-m),l),M=_*(_+2*m)+p):(x=Math.max(0,-(u*l+d)),_=x>0?l:Math.min(Math.max(-l,-m),l),M=-x*x+_*(_+2*m)+p);else _=u>0?-l:l,x=Math.max(0,-(u*_+d)),M=-x*x+_*(_+2*m)+p;return a&&a.copy(this.origin).addScaledVector(this.direction,x),s&&s.copy(rf).addScaledVector(oc,_),M}intersectSphere(e,t){if(e.radius<0)return null;Rr.subVectors(e.center,this.origin);const a=Rr.dot(this.direction),s=Rr.dot(Rr)-a*a,l=e.radius*e.radius;if(s>l)return null;const u=Math.sqrt(l-s),d=a-u,m=a+u;return m<0?null:d<0?this.at(m,t):this.at(d,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const a=-(this.origin.dot(e.normal)+e.constant)/t;return a>=0?a:null}intersectPlane(e,t){const a=this.distanceToPlane(e);return a===null?null:this.at(a,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let a,s,l,u,d,m;const p=1/this.direction.x,v=1/this.direction.y,x=1/this.direction.z,_=this.origin;return p>=0?(a=(e.min.x-_.x)*p,s=(e.max.x-_.x)*p):(a=(e.max.x-_.x)*p,s=(e.min.x-_.x)*p),v>=0?(l=(e.min.y-_.y)*v,u=(e.max.y-_.y)*v):(l=(e.max.y-_.y)*v,u=(e.min.y-_.y)*v),a>u||l>s||((l>a||isNaN(a))&&(a=l),(u<s||isNaN(s))&&(s=u),x>=0?(d=(e.min.z-_.z)*x,m=(e.max.z-_.z)*x):(d=(e.max.z-_.z)*x,m=(e.min.z-_.z)*x),a>m||d>s)||((d>a||a!==a)&&(a=d),(m<s||s!==s)&&(s=m),s<0)?null:this.at(a>=0?a:s,t)}intersectsBox(e){return this.intersectBox(e,Rr)!==null}intersectTriangle(e,t,a,s,l){const u=this.origin,d=this.direction,m=d.x,p=d.y,v=d.z,x=e.x-u.x,_=e.y-u.y,M=e.z-u.z,w=t.x-u.x,b=t.y-u.y,y=t.z-u.z,S=a.x-u.x,U=a.y-u.y,V=a.z-u.z,R=Math.abs(m),L=Math.abs(p),P=Math.abs(v);let I,T,F,z,B,K,ie,H,te,oe,ce,q;if(R>=L&&R>=P?(F=m,K=x,te=w,q=S,m>=0?(I=p,T=v,z=_,B=M,ie=b,H=y,oe=U,ce=V):(I=v,T=p,z=M,B=_,ie=y,H=b,oe=V,ce=U)):L>=P?(F=p,K=_,te=b,q=U,p>=0?(I=v,T=m,z=M,B=x,ie=y,H=w,oe=V,ce=S):(I=m,T=v,z=x,B=M,ie=w,H=y,oe=S,ce=V)):(F=v,K=M,te=y,q=V,v>=0?(I=m,T=p,z=x,B=_,ie=w,H=b,oe=S,ce=U):(I=p,T=m,z=_,B=x,ie=b,H=w,oe=U,ce=S)),F===0)return null;const W=I/F,Z=T/F,D=1/F,se=z-W*K,Me=B-Z*K,Be=ie-W*te,Xe=H-Z*te,Ye=oe-W*q,le=ce-Z*q,pe=Ye*Xe-le*Be,Ce=se*le-Me*Ye,rt=Be*Me-Xe*se;if(s){if(pe<0||Ce<0||rt<0)return null}else if((pe<0||Ce<0||rt<0)&&(pe>0||Ce>0||rt>0))return null;const He=pe+Ce+rt;if(He===0)return null;const yt=D*(pe*K+Ce*te+rt*q);return(He>0?yt<0:yt>0)?null:this.at(yt/He,l)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nh extends zs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Pt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.combine=vv,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Kg=new un,Da=new Dh,cc=new Lh,Zg=new J,uc=new J,dc=new J,fc=new J,af=new J,hc=new J,Jg=new J,pc=new J;class di extends On{constructor(e=new ni,t=new Nh){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,a=Object.keys(t);if(a.length>0){const s=t[a[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let l=0,u=s.length;l<u;l++){const d=s[l].name||String(l);this.morphTargetInfluences.push(0),this.morphTargetDictionary[d]=l}}}}getVertexPosition(e,t){const a=this.geometry,s=a.attributes.position,l=a.morphAttributes.position,u=a.morphTargetsRelative;t.fromBufferAttribute(s,e);const d=this.morphTargetInfluences;if(l&&d){hc.set(0,0,0);for(let m=0,p=l.length;m<p;m++){const v=d[m],x=l[m];v!==0&&(af.fromBufferAttribute(x,e),u?hc.addScaledVector(af,v):hc.addScaledVector(af.sub(t),v))}t.add(hc)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const a=this.geometry,s=this.material,l=this.matrixWorld;s!==void 0&&(a.boundingSphere===null&&a.computeBoundingSphere(),cc.copy(a.boundingSphere),cc.applyMatrix4(l),Da.copy(e.ray).recast(e.near),!(cc.containsPoint(Da.origin)===!1&&(Da.intersectSphere(cc,Zg)===null||Da.origin.distanceToSquared(Zg)>(e.far-e.near)**2))&&(Kg.copy(l).invert(),Da.copy(e.ray).applyMatrix4(Kg),!(a.boundingBox!==null&&Da.intersectsBox(a.boundingBox)===!1)&&this._computeIntersections(e,t,Da)))}_computeIntersections(e,t,a){let s;const l=this.geometry,u=this.material,d=l.index,m=l.attributes.position,p=l.attributes.uv,v=l.attributes.uv1,x=l.attributes.normal,_=l.groups,M=l.drawRange;if(d!==null)if(Array.isArray(u))for(let w=0,b=_.length;w<b;w++){const y=_[w],S=u[y.materialIndex],U=Math.max(y.start,M.start),V=Math.min(d.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,L=V;R<L;R+=3){const P=d.getX(R),I=d.getX(R+1),T=d.getX(R+2);s=mc(this,S,e,a,p,v,x,P,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const w=Math.max(0,M.start),b=Math.min(d.count,M.start+M.count);for(let y=w,S=b;y<S;y+=3){const U=d.getX(y),V=d.getX(y+1),R=d.getX(y+2);s=mc(this,u,e,a,p,v,x,U,V,R),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}else if(m!==void 0)if(Array.isArray(u))for(let w=0,b=_.length;w<b;w++){const y=_[w],S=u[y.materialIndex],U=Math.max(y.start,M.start),V=Math.min(m.count,Math.min(y.start+y.count,M.start+M.count));for(let R=U,L=V;R<L;R+=3){const P=R,I=R+1,T=R+2;s=mc(this,S,e,a,p,v,x,P,I,T),s&&(s.faceIndex=Math.floor(R/3),s.face.materialIndex=y.materialIndex,t.push(s))}}else{const w=Math.max(0,M.start),b=Math.min(m.count,M.start+M.count);for(let y=w,S=b;y<S;y+=3){const U=y,V=y+1,R=y+2;s=mc(this,u,e,a,p,v,x,U,V,R),s&&(s.faceIndex=Math.floor(y/3),t.push(s))}}}}function RM(i,e,t,a,s,l,u,d){let m;if(e.side===fi?m=a.intersectTriangle(u,l,s,!0,d):m=a.intersectTriangle(s,l,u,e.side===za,d),m===null)return null;pc.copy(d),pc.applyMatrix4(i.matrixWorld);const p=t.ray.origin.distanceTo(pc);return p<t.near||p>t.far?null:{distance:p,point:pc.clone(),object:i}}function mc(i,e,t,a,s,l,u,d,m,p){i.getVertexPosition(d,uc),i.getVertexPosition(m,dc),i.getVertexPosition(p,fc);const v=RM(i,e,t,a,uc,dc,fc,Jg);if(v){const x=new J;Oi.getBarycoord(Jg,uc,dc,fc,x),s&&(v.uv=Oi.getInterpolatedAttribute(s,d,m,p,x,new lt)),l&&(v.uv1=Oi.getInterpolatedAttribute(l,d,m,p,x,new lt)),u&&(v.normal=Oi.getInterpolatedAttribute(u,d,m,p,x,new J),v.normal.dot(a.direction)>0&&v.normal.multiplyScalar(-1));const _={a:d,b:m,c:p,normal:new J,materialIndex:0};Oi.getNormal(uc,dc,fc,_.normal),v.face=_,v.barycoord=x}return v}class bM extends Zn{constructor(e=null,t=1,a=1,s,l,u,d,m,p=Hn,v=Hn,x,_){super(null,u,d,m,p,v,s,l,x,_),this.isDataTexture=!0,this.image={data:e,width:t,height:a},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Na=new Lh,PM=new lt(.5,.5),gc=new J;class Uh{constructor(e=new Lr,t=new Lr,a=new Lr,s=new Lr,l=new Lr,u=new Lr){this.planes=[e,t,a,s,l,u]}set(e,t,a,s,l,u){const d=this.planes;return d[0].copy(e),d[1].copy(t),d[2].copy(a),d[3].copy(s),d[4].copy(l),d[5].copy(u),this}copy(e){const t=this.planes;for(let a=0;a<6;a++)t[a].copy(e.planes[a]);return this}setFromProjectionMatrix(e,t=lr,a=!1){const s=this.planes,l=e.elements,u=l[0],d=l[1],m=l[2],p=l[3],v=l[4],x=l[5],_=l[6],M=l[7],w=l[8],b=l[9],y=l[10],S=l[11],U=l[12],V=l[13],R=l[14],L=l[15];if(s[0].setComponents(p-u,M-v,S-w,L-U).normalize(),s[1].setComponents(p+u,M+v,S+w,L+U).normalize(),s[2].setComponents(p+d,M+x,S+b,L+V).normalize(),s[3].setComponents(p-d,M-x,S-b,L-V).normalize(),a)s[4].setComponents(m,_,y,R).normalize(),s[5].setComponents(p-m,M-_,S-y,L-R).normalize();else if(s[4].setComponents(p-m,M-_,S-y,L-R).normalize(),t===lr)s[5].setComponents(p+m,M+_,S+y,L+R).normalize();else if(t===Wo)s[5].setComponents(m,_,y,R).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Na.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Na.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Na)}intersectsSprite(e){Na.center.set(0,0,0);const t=PM.distanceTo(e.center);return Na.radius=.7071067811865476+t,Na.applyMatrix4(e.matrixWorld),this.intersectsSphere(Na)}intersectsSphere(e){const t=this.planes,a=e.center,s=-e.radius;for(let l=0;l<6;l++)if(t[l].distanceToPoint(a)<s)return!1;return!0}intersectsBox(e){const t=this.planes;for(let a=0;a<6;a++){const s=t[a];if(gc.x=s.normal.x>0?e.max.x:e.min.x,gc.y=s.normal.y>0?e.max.y:e.min.y,gc.z=s.normal.z>0?e.max.z:e.min.z,s.distanceToPoint(gc)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let a=0;a<6;a++)if(t[a].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Vv extends Zn{constructor(e=[],t=Ha,a,s,l,u,d,m,p,v){super(e,t,a,s,l,u,d,m,p,v),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class LM extends Zn{constructor(e,t,a,s,l,u,d,m,p){super(e,t,a,s,l,u,d,m,p),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Xo extends Zn{constructor(e,t,a=ur,s,l,u,d=Hn,m=Hn,p,v=Or,x=1){if(v!==Or&&v!==Oa)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const _={width:e,height:t,depth:x};super(_,s,l,u,d,m,v,a,p),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new bh(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class DM extends Xo{constructor(e,t=ur,a=Ha,s,l,u=Hn,d=Hn,m,p=Or){const v={width:e,height:e,depth:1},x=[v,v,v,v,v,v];super(e,e,t,a,s,l,u,d,m,p),this.image=x,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Gv extends Zn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class qo extends ni{constructor(e=1,t=1,a=1,s=1,l=1,u=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:a,widthSegments:s,heightSegments:l,depthSegments:u};const d=this;s=Math.floor(s),l=Math.floor(l),u=Math.floor(u);const m=[],p=[],v=[],x=[];let _=0,M=0;w("z","y","x",-1,-1,a,t,e,u,l,0),w("z","y","x",1,-1,a,t,-e,u,l,1),w("x","z","y",1,1,e,a,t,s,u,2),w("x","z","y",1,-1,e,a,-t,s,u,3),w("x","y","z",1,-1,e,t,a,s,l,4),w("x","y","z",-1,-1,e,t,-a,s,l,5),this.setIndex(m),this.setAttribute("position",new Rn(p,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(x,2));function w(b,y,S,U,V,R,L,P,I,T,F){const z=R/I,B=L/T,K=R/2,ie=L/2,H=P/2,te=I+1,oe=T+1;let ce=0,q=0;const W=new J;for(let Z=0;Z<oe;Z++){const D=Z*B-ie;for(let se=0;se<te;se++){const Me=se*z-K;W[b]=Me*U,W[y]=D*V,W[S]=H,p.push(W.x,W.y,W.z),W[b]=0,W[y]=0,W[S]=P>0?1:-1,v.push(W.x,W.y,W.z),x.push(se/I),x.push(1-Z/T),ce+=1}}for(let Z=0;Z<T;Z++)for(let D=0;D<I;D++){const se=_+D+te*Z,Me=_+D+te*(Z+1),Be=_+(D+1)+te*(Z+1),Xe=_+(D+1)+te*Z;m.push(se,Me,Xe),m.push(Me,Be,Xe),q+=6}d.addGroup(M,q,F),M+=q,_+=ce}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new qo(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Kc extends ni{constructor(e=1,t=1,a=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:a,heightSegments:s};const l=e/2,u=t/2,d=Math.floor(a),m=Math.floor(s),p=d+1,v=m+1,x=e/d,_=t/m,M=[],w=[],b=[],y=[];for(let S=0;S<v;S++){const U=S*_-u;for(let V=0;V<p;V++){const R=V*x-l;w.push(R,-U,0),b.push(0,0,1),y.push(V/d),y.push(1-S/m)}}for(let S=0;S<m;S++)for(let U=0;U<d;U++){const V=U+p*S,R=U+p*(S+1),L=U+1+p*(S+1),P=U+1+p*S;M.push(V,R,P),M.push(R,L,P)}this.setIndex(M),this.setAttribute("position",new Rn(w,3)),this.setAttribute("normal",new Rn(b,3)),this.setAttribute("uv",new Rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Kc(e.width,e.height,e.widthSegments,e.heightSegments)}}class Fh extends ni{constructor(e=1,t=32,a=16,s=0,l=Math.PI*2,u=0,d=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:a,phiStart:s,phiLength:l,thetaStart:u,thetaLength:d},t=Math.max(3,Math.floor(t)),a=Math.max(2,Math.floor(a));const m=Math.min(u+d,Math.PI);let p=0;const v=[],x=new J,_=new J,M=[],w=[],b=[],y=[];for(let S=0;S<=a;S++){const U=[],V=S/a,R=u+V*d,L=e*Math.cos(R),P=Math.sqrt(e*e-L*L);let I=0;S===0&&u===0?I=.5/t:S===a&&m===Math.PI&&(I=-.5/t);for(let T=0;T<=t;T++){const F=T/t,z=s+F*l;x.x=-P*Math.cos(z),x.y=L,x.z=P*Math.sin(z),w.push(x.x,x.y,x.z),_.copy(x).normalize(),b.push(_.x,_.y,_.z),y.push(F+I,1-V),U.push(p++)}v.push(U)}for(let S=0;S<a;S++)for(let U=0;U<t;U++){const V=v[S][U+1],R=v[S][U],L=v[S+1][U],P=v[S+1][U+1];(S!==0||u>0)&&M.push(V,R,P),(S!==a-1||m<Math.PI)&&M.push(R,L,P)}this.setIndex(M),this.setAttribute("position",new Rn(w,3)),this.setAttribute("normal",new Rn(b,3)),this.setAttribute("uv",new Rn(y,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fh(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Oh extends ni{constructor(e=1,t=.4,a=12,s=48,l=Math.PI*2,u=0,d=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:a,tubularSegments:s,arc:l,thetaStart:u,thetaLength:d},a=Math.floor(a),s=Math.floor(s);const m=[],p=[],v=[],x=[],_=new J,M=new J,w=new J;for(let b=0;b<=a;b++){const y=u+b/a*d;for(let S=0;S<=s;S++){const U=S/s*l;M.x=(e+t*Math.cos(y))*Math.cos(U),M.y=(e+t*Math.cos(y))*Math.sin(U),M.z=t*Math.sin(y),p.push(M.x,M.y,M.z),_.x=e*Math.cos(U),_.y=e*Math.sin(U),w.subVectors(M,_).normalize(),v.push(w.x,w.y,w.z),x.push(S/s),x.push(b/a)}}for(let b=1;b<=a;b++)for(let y=1;y<=s;y++){const S=(s+1)*b+y-1,U=(s+1)*(b-1)+y-1,V=(s+1)*(b-1)+y,R=(s+1)*b+y;m.push(S,U,R),m.push(U,V,R)}this.setIndex(m),this.setAttribute("position",new Rn(p,3)),this.setAttribute("normal",new Rn(v,3)),this.setAttribute("uv",new Rn(x,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Oh(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function ks(i){const e={};for(const t in i){e[t]={};for(const a in i[t]){const s=i[t][a];if(Qg(s))s.isRenderTargetTexture?(gt("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][a]=null):e[t][a]=s.clone();else if(Array.isArray(s))if(Qg(s[0])){const l=[];for(let u=0,d=s.length;u<d;u++)l[u]=s[u].clone();e[t][a]=l}else e[t][a]=s.slice();else e[t][a]=s}}return e}function ti(i){const e={};for(let t=0;t<i.length;t++){const a=ks(i[t]);for(const s in a)e[s]=a[s]}return e}function Qg(i){return i&&(i.isColor||i.isMatrix3||i.isMatrix4||i.isVector2||i.isVector3||i.isVector4||i.isTexture||i.isQuaternion)}function NM(i){const e=[];for(let t=0;t<i.length;t++)e.push(i[t].clone());return e}function Bv(i){const e=i.getRenderTarget();return e===null?i.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:It.workingColorSpace}const UM={clone:ks,merge:ti};var FM=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,OM=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class fr extends zs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=FM,this.fragmentShader=OM,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=ks(e.uniforms),this.uniformsGroups=NM(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const s in this.uniforms){const u=this.uniforms[s].value;u&&u.isTexture?t.uniforms[s]={type:"t",value:u.toJSON(e).uuid}:u&&u.isColor?t.uniforms[s]={type:"c",value:u.getHex()}:u&&u.isVector2?t.uniforms[s]={type:"v2",value:u.toArray()}:u&&u.isVector3?t.uniforms[s]={type:"v3",value:u.toArray()}:u&&u.isVector4?t.uniforms[s]={type:"v4",value:u.toArray()}:u&&u.isMatrix3?t.uniforms[s]={type:"m3",value:u.toArray()}:u&&u.isMatrix4?t.uniforms[s]={type:"m4",value:u.toArray()}:t.uniforms[s]={value:u}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const a={};for(const s in this.extensions)this.extensions[s]===!0&&(a[s]=!0);return Object.keys(a).length>0&&(t.extensions=a),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const a in e.uniforms){const s=e.uniforms[a];switch(this.uniforms[a]={},s.type){case"t":this.uniforms[a].value=t[s.value]||null;break;case"c":this.uniforms[a].value=new Pt().setHex(s.value);break;case"v2":this.uniforms[a].value=new lt().fromArray(s.value);break;case"v3":this.uniforms[a].value=new J().fromArray(s.value);break;case"v4":this.uniforms[a].value=new mn().fromArray(s.value);break;case"m3":this.uniforms[a].value=new St().fromArray(s.value);break;case"m4":this.uniforms[a].value=new un().fromArray(s.value);break;default:this.uniforms[a].value=s.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const a in e.extensions)this.extensions[a]=e.extensions[a];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class IM extends fr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class sf extends zs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Pt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Pt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=sh,this.normalScale=new lt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ha,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class kM extends zs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Xy,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class zM extends zs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const e0={enabled:!1,files:{},add:function(i,e){this.enabled!==!1&&(t0(i)||(this.files[i]=e))},get:function(i){if(this.enabled!==!1&&!t0(i))return this.files[i]},remove:function(i){delete this.files[i]},clear:function(){this.files={}}};function t0(i){try{const e=i.slice(i.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class HM{constructor(e,t,a){const s=this;let l=!1,u=0,d=0,m;const p=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=a,this._abortController=null,this.itemStart=function(v){d++,l===!1&&s.onStart!==void 0&&s.onStart(v,u,d),l=!0},this.itemEnd=function(v){u++,s.onProgress!==void 0&&s.onProgress(v,u,d),u===d&&(l=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(v){s.onError!==void 0&&s.onError(v)},this.resolveURL=function(v){return v=v.normalize("NFC"),m?m(v):v},this.setURLModifier=function(v){return m=v,this},this.addHandler=function(v,x){return p.push(v,x),this},this.removeHandler=function(v){const x=p.indexOf(v);return x!==-1&&p.splice(x,2),this},this.getHandler=function(v){for(let x=0,_=p.length;x<_;x+=2){const M=p[x],w=p[x+1];if(M.global&&(M.lastIndex=0),M.test(v))return w}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const VM=new HM;class Ih{constructor(e){this.manager=e!==void 0?e:VM,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const a=this;return new Promise(function(s,l){a.load(e,s,t,l)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Ih.DEFAULT_MATERIAL_NAME="__DEFAULT";const br={};class GM extends Error{constructor(e,t){super(e),this.response=t}}class BM extends Ih{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,a,s){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const l=e0.get(`file:${e}`);if(l!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(l),this.manager.itemEnd(e)},0);return}if(br[e]!==void 0){br[e].push({onLoad:t,onProgress:a,onError:s});return}br[e]=[],br[e].push({onLoad:t,onProgress:a,onError:s});const u=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),d=this.mimeType,m=this.responseType;fetch(u).then(p=>{if(p.status===200||p.status===0){if(p.status===0&&gt("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||p.body===void 0||p.body.getReader===void 0)return p;const v=br[e],x=p.body.getReader(),_=p.headers.get("X-File-Size")||p.headers.get("Content-Length"),M=_?parseInt(_):0,w=M!==0;let b=0;const y=new ReadableStream({start(S){U();function U(){x.read().then(({done:V,value:R})=>{if(V)S.close();else{b+=R.byteLength;const L=new ProgressEvent("progress",{lengthComputable:w,loaded:b,total:M});for(let P=0,I=v.length;P<I;P++){const T=v[P];T.onProgress&&T.onProgress(L)}S.enqueue(R),U()}},V=>{S.error(V)})}}});return new Response(y)}else throw new GM(`fetch for "${p.url}" responded with ${p.status}: ${p.statusText}`,p)}).then(p=>{switch(m){case"arraybuffer":return p.arrayBuffer();case"blob":return p.blob();case"document":return p.text().then(v=>new DOMParser().parseFromString(v,d));case"json":return p.json();default:if(d==="")return p.text();{const x=/charset="?([^;"\s]*)"?/i.exec(d),_=x&&x[1]?x[1].toLowerCase():void 0,M=new TextDecoder(_);return p.arrayBuffer().then(w=>M.decode(w))}}}).then(p=>{e0.add(`file:${e}`,p);const v=br[e];delete br[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onLoad&&M.onLoad(p)}}).catch(p=>{const v=br[e];if(v===void 0)throw this.manager.itemError(e),p;delete br[e];for(let x=0,_=v.length;x<_;x++){const M=v[x];M.onError&&M.onError(p)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Wv extends On{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Pt(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class WM extends Wv{constructor(e,t,a){super(e,a),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.groundColor=new Pt(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const of=new un,n0=new J,i0=new J;class XM{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new lt(512,512),this.mapType=Ei,this.map=null,this.mapPass=null,this.matrix=new un,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Uh,this._frameExtents=new lt(1,1),this._viewportCount=1,this._viewports=[new mn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;n0.setFromMatrixPosition(e.matrixWorld),t.position.copy(n0),i0.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(i0),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,a,s){of.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),a.setFromProjectionMatrix(of,e.coordinateSystem,e.reversedDepth);const l=this._frameExtents,u=s?s.z/l.x:1,d=s?s.w/l.y:1,m=s?s.x/l.x:0,p=s?s.y/l.y:0;e.coordinateSystem===Wo||e.reversedDepth?t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,1,0,0,0,0,1):t.set(.5*u,0,0,.5*u+m,0,.5*d,0,.5*d+p,0,0,.5,.5,0,0,0,1),t.multiply(of)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const vc=new J,_c=new fa,ir=new J;class Xv extends On{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new un,this.projectionMatrix=new un,this.projectionMatrixInverse=new un,this.coordinateSystem=lr,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(vc,_c,ir),ir.x===1&&ir.y===1&&ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,_c,ir.set(1,1,1)).invert()}updateWorldMatrix(e,t,a=!1){super.updateWorldMatrix(e,t,a),this.matrixWorld.decompose(vc,_c,ir),ir.x===1&&ir.y===1&&ir.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(vc,_c,ir.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const sa=new J,r0=new lt,a0=new lt;class Ui extends Xv{constructor(e=50,t=1,a=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=a,this.far=s,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=oh*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Lc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return oh*2*Math.atan(Math.tan(Lc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,a){sa.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(sa.x,sa.y).multiplyScalar(-e/sa.z),sa.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),a.set(sa.x,sa.y).multiplyScalar(-e/sa.z)}getViewSize(e,t){return this.getViewBounds(e,r0,a0),t.subVectors(a0,r0)}setViewOffset(e,t,a,s,l,u){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Lc*.5*this.fov)/this.zoom,a=2*t,s=this.aspect*a,l=-.5*s;const u=this.view;if(this.view!==null&&this.view.enabled){const m=u.fullWidth,p=u.fullHeight;l+=u.offsetX*s/m,t-=u.offsetY*a/p,s*=u.width/m,a*=u.height/p}const d=this.filmOffset;d!==0&&(l+=e*d/this.getFilmWidth()),this.projectionMatrix.makePerspective(l,l+s,t,t-a,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class kh extends Xv{constructor(e=-1,t=1,a=1,s=-1,l=.1,u=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=a,this.bottom=s,this.near=l,this.far=u,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,a,s,l,u){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=a,this.view.offsetY=s,this.view.width=l,this.view.height=u,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),a=(this.right+this.left)/2,s=(this.top+this.bottom)/2;let l=a-e,u=a+e,d=s+t,m=s-t;if(this.view!==null&&this.view.enabled){const p=(this.right-this.left)/this.view.fullWidth/this.zoom,v=(this.top-this.bottom)/this.view.fullHeight/this.zoom;l+=p*this.view.offsetX,u=l+p*this.view.width,d-=v*this.view.offsetY,m=d-v*this.view.height}this.projectionMatrix.makeOrthographic(l,u,d,m,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class $M extends XM{constructor(){super(new kh(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class s0 extends Wv{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(On.DEFAULT_UP),this.updateMatrix(),this.target=new On,this.shadow=new $M}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const Ts=-90,ws=1;class YM extends On{constructor(e,t,a){super(),this.type="CubeCamera",this.renderTarget=a,this.coordinateSystem=null,this.activeMipmapLevel=0;const s=new Ui(Ts,ws,e,t);s.layers=this.layers,this.add(s);const l=new Ui(Ts,ws,e,t);l.layers=this.layers,this.add(l);const u=new Ui(Ts,ws,e,t);u.layers=this.layers,this.add(u);const d=new Ui(Ts,ws,e,t);d.layers=this.layers,this.add(d);const m=new Ui(Ts,ws,e,t);m.layers=this.layers,this.add(m);const p=new Ui(Ts,ws,e,t);p.layers=this.layers,this.add(p)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[a,s,l,u,d,m]=t;for(const p of t)this.remove(p);if(e===lr)a.up.set(0,1,0),a.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),l.up.set(0,0,-1),l.lookAt(0,1,0),u.up.set(0,0,1),u.lookAt(0,-1,0),d.up.set(0,1,0),d.lookAt(0,0,1),m.up.set(0,1,0),m.lookAt(0,0,-1);else if(e===Wo)a.up.set(0,-1,0),a.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),l.up.set(0,0,1),l.lookAt(0,1,0),u.up.set(0,0,-1),u.lookAt(0,-1,0),d.up.set(0,-1,0),d.lookAt(0,0,1),m.up.set(0,-1,0),m.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const p of t)this.add(p),p.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:a,activeMipmapLevel:s}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[l,u,d,m,p,v]=this.children,x=e.getRenderTarget(),_=e.getActiveCubeFace(),M=e.getActiveMipmapLevel(),w=e.xr.enabled;e.xr.enabled=!1;const b=a.texture.generateMipmaps;a.texture.generateMipmaps=!1;let y=!1;e.isWebGLRenderer===!0?y=e.state.buffers.depth.getReversed():y=e.reversedDepthBuffer,e.setRenderTarget(a,0,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),e.setRenderTarget(a,1,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(a,2,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(a,3,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(a,4,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,p),a.texture.generateMipmaps=b,e.setRenderTarget(a,5,s),y&&e.autoClear===!1&&e.clearDepth(),e.render(t,v),e.setRenderTarget(x,_,M),e.xr.enabled=w,a.texture.needsPMREMUpdate=!0}}class qM extends Ui{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const o0=new un;class jM{constructor(e,t,a=0,s=1/0){this.ray=new Dh(e,t),this.near=a,this.far=s,this.camera=null,this.layers=new Ph,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):kt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return o0.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(o0),this}intersectObject(e,t=!0,a=[]){return lh(e,this,a,t),a.sort(l0),a}intersectObjects(e,t=!0,a=[]){for(let s=0,l=e.length;s<l;s++)lh(e[s],this,a,t);return a.sort(l0),a}}function l0(i,e){return i.distance-e.distance}function lh(i,e,t,a){let s=!0;if(i.layers.test(e.layers)&&i.raycast(e,t)===!1&&(s=!1),s===!0&&a===!0){const l=i.children;for(let u=0,d=l.length;u<d;u++)lh(l[u],e,t,!0)}}class c0{constructor(e=1,t=0,a=0){this.radius=e,this.phi=t,this.theta=a}set(e,t,a){return this.radius=e,this.phi=t,this.theta=a,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Lt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,a){return this.radius=Math.sqrt(e*e+t*t+a*a),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,a),this.phi=Math.acos(Lt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Wh=class Wh{constructor(e,t,a,s){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,a,s)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let a=0;a<4;a++)this.elements[a]=e[a+t];return this}set(e,t,a,s){const l=this.elements;return l[0]=e,l[2]=t,l[1]=a,l[3]=s,this}};Wh.prototype.isMatrix2=!0;let u0=Wh;class KM extends ma{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function d0(i,e,t,a){const s=ZM(a);switch(t){case Pv:return i*e;case Dv:return i*e/s.components*s.byteLength;case Th:return i*e/s.components*s.byteLength;case Va:return i*e*2/s.components*s.byteLength;case wh:return i*e*2/s.components*s.byteLength;case Lv:return i*e*3/s.components*s.byteLength;case Ki:return i*e*4/s.components*s.byteLength;case Ah:return i*e*4/s.components*s.byteLength;case Cc:case Rc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case bc:case Pc:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Lf:case Nf:return Math.max(i,16)*Math.max(e,8)/4;case Pf:case Df:return Math.max(i,8)*Math.max(e,8)/2;case Uf:case Ff:case If:case kf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*8;case Of:case Oc:case zf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Hf:return Math.floor((i+3)/4)*Math.floor((e+3)/4)*16;case Vf:return Math.floor((i+4)/5)*Math.floor((e+3)/4)*16;case Gf:return Math.floor((i+4)/5)*Math.floor((e+4)/5)*16;case Bf:return Math.floor((i+5)/6)*Math.floor((e+4)/5)*16;case Wf:return Math.floor((i+5)/6)*Math.floor((e+5)/6)*16;case Xf:return Math.floor((i+7)/8)*Math.floor((e+4)/5)*16;case $f:return Math.floor((i+7)/8)*Math.floor((e+5)/6)*16;case Yf:return Math.floor((i+7)/8)*Math.floor((e+7)/8)*16;case qf:return Math.floor((i+9)/10)*Math.floor((e+4)/5)*16;case jf:return Math.floor((i+9)/10)*Math.floor((e+5)/6)*16;case Kf:return Math.floor((i+9)/10)*Math.floor((e+7)/8)*16;case Zf:return Math.floor((i+9)/10)*Math.floor((e+9)/10)*16;case Jf:return Math.floor((i+11)/12)*Math.floor((e+9)/10)*16;case Qf:return Math.floor((i+11)/12)*Math.floor((e+11)/12)*16;case eh:case th:case nh:return Math.ceil(i/4)*Math.ceil(e/4)*16;case ih:case rh:return Math.ceil(i/4)*Math.ceil(e/4)*8;case Ic:case ah:return Math.ceil(i/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function ZM(i){switch(i){case Ei:case Av:return{byteLength:1,components:1};case Go:case Cv:case dr:return{byteLength:2,components:1};case Mh:case Eh:return{byteLength:2,components:4};case ur:case yh:case or:return{byteLength:4,components:1};case Rv:case bv:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${i}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Sh}}));typeof window<"u"&&(window.__THREE__?gt("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Sh);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function $v(){let i=null,e=!1,t=null,a=null;function s(l,u){a=i.requestAnimationFrame(s),t(l,u)}return{start:function(){e!==!0&&t!==null&&i!==null&&(a=i.requestAnimationFrame(s),e=!0)},stop:function(){i!==null&&i.cancelAnimationFrame(a),e=!1},setAnimationLoop:function(l){t=l},setContext:function(l){i=l}}}function JM(i){const e=new WeakMap;function t(d,m){const p=d.array,v=d.usage,x=p.byteLength,_=i.createBuffer();i.bindBuffer(m,_),i.bufferData(m,p,v),d.onUploadCallback();let M;if(p instanceof Float32Array)M=i.FLOAT;else if(typeof Float16Array<"u"&&p instanceof Float16Array)M=i.HALF_FLOAT;else if(p instanceof Uint16Array)d.isFloat16BufferAttribute?M=i.HALF_FLOAT:M=i.UNSIGNED_SHORT;else if(p instanceof Int16Array)M=i.SHORT;else if(p instanceof Uint32Array)M=i.UNSIGNED_INT;else if(p instanceof Int32Array)M=i.INT;else if(p instanceof Int8Array)M=i.BYTE;else if(p instanceof Uint8Array)M=i.UNSIGNED_BYTE;else if(p instanceof Uint8ClampedArray)M=i.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+p);return{buffer:_,type:M,bytesPerElement:p.BYTES_PER_ELEMENT,version:d.version,size:x}}function a(d,m,p){const v=m.array,x=m.updateRanges;if(i.bindBuffer(p,d),x.length===0)i.bufferSubData(p,0,v);else{x.sort((M,w)=>M.start-w.start);let _=0;for(let M=1;M<x.length;M++){const w=x[_],b=x[M];b.start<=w.start+w.count+1?w.count=Math.max(w.count,b.start+b.count-w.start):(++_,x[_]=b)}x.length=_+1;for(let M=0,w=x.length;M<w;M++){const b=x[M];i.bufferSubData(p,b.start*v.BYTES_PER_ELEMENT,v,b.start,b.count)}m.clearUpdateRanges()}m.onUploadCallback()}function s(d){return d.isInterleavedBufferAttribute&&(d=d.data),e.get(d)}function l(d){d.isInterleavedBufferAttribute&&(d=d.data);const m=e.get(d);m&&(i.deleteBuffer(m.buffer),e.delete(d))}function u(d,m){if(d.isInterleavedBufferAttribute&&(d=d.data),d.isGLBufferAttribute){const v=e.get(d);(!v||v.version<d.version)&&e.set(d,{buffer:d.buffer,type:d.type,bytesPerElement:d.elementSize,version:d.version});return}const p=e.get(d);if(p===void 0)e.set(d,t(d,m));else if(p.version<d.version){if(p.size!==d.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");a(p.buffer,d,m),p.version=d.version}}return{get:s,remove:l,update:u}}var QM=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,eE=`#ifdef USE_ALPHAHASH
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
#endif`,tE=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,nE=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,iE=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,rE=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,aE=`#ifdef USE_AOMAP
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
#endif`,sE=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,oE=`#ifdef USE_BATCHING
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
#endif`,lE=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,cE=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,uE=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,dE=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,fE=`#ifdef USE_IRIDESCENCE
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
#endif`,hE=`#ifdef USE_BUMPMAP
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
#endif`,pE=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,mE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,gE=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,vE=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,_E=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,xE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,SE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,yE=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,ME=`#define PI 3.141592653589793
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
} // validated`,EE=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,TE=`vec3 transformedNormal = objectNormal;
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
#endif`,wE=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,AE=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,CE=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,RE=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,bE="gl_FragColor = linearToOutputTexel( gl_FragColor );",PE=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,LE=`#ifdef USE_ENVMAP
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
#endif`,DE=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,NE=`#ifdef USE_ENVMAP
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
#endif`,UE=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,FE=`#ifdef USE_ENVMAP
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
#endif`,OE=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,IE=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,kE=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,zE=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,HE=`#ifdef USE_GRADIENTMAP
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
}`,VE=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,GE=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,BE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,WE=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,XE=`#ifdef USE_ENVMAP
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
#endif`,$E=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,YE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,qE=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,jE=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,KE=`PhysicalMaterial material;
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
#endif`,ZE=`uniform sampler2D dfgLUT;
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
}`,JE=`
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
#endif`,QE=`#if defined( RE_IndirectDiffuse )
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
#endif`,eT=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,tT=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,nT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,iT=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,rT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,aT=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,sT=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,oT=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,lT=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,cT=`#if defined( USE_POINTS_UV )
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
#endif`,uT=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,dT=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,fT=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,hT=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,pT=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,mT=`#ifdef USE_MORPHTARGETS
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
#endif`,gT=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,vT=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,_T=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,xT=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,ST=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,yT=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,MT=`#ifdef USE_NORMALMAP
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
#endif`,ET=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,TT=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,wT=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,AT=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,CT=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,RT=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,bT=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,PT=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,LT=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,DT=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,NT=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,UT=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,FT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,OT=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,IT=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,kT=`float getShadowMask() {
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
}`,zT=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,HT=`#ifdef USE_SKINNING
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
#endif`,VT=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,GT=`#ifdef USE_SKINNING
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
#endif`,BT=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,WT=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,XT=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,$T=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,YT=`#ifdef USE_TRANSMISSION
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
#endif`,qT=`#ifdef USE_TRANSMISSION
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
#endif`,jT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,KT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,ZT=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,JT=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const QT=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,ew=`uniform sampler2D t2D;
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
}`,tw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,nw=`#ifdef ENVMAP_TYPE_CUBE
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
}`,iw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,rw=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,aw=`#include <common>
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
}`,sw=`#if DEPTH_PACKING == 3200
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
}`,ow=`#define DISTANCE
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
}`,lw=`#define DISTANCE
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
}`,cw=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,uw=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,dw=`uniform float scale;
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
}`,fw=`uniform vec3 diffuse;
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
}`,hw=`#include <common>
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
}`,pw=`uniform vec3 diffuse;
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
}`,mw=`#define LAMBERT
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
}`,gw=`#define LAMBERT
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
}`,vw=`#define MATCAP
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
}`,_w=`#define MATCAP
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
}`,xw=`#define NORMAL
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
}`,Sw=`#define NORMAL
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
}`,yw=`#define PHONG
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
}`,Mw=`#define PHONG
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
}`,Ew=`#define STANDARD
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
}`,Tw=`#define STANDARD
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
}`,ww=`#define TOON
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
}`,Aw=`#define TOON
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
}`,Cw=`uniform float size;
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
}`,Rw=`uniform vec3 diffuse;
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
}`,bw=`#include <common>
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
}`,Pw=`uniform vec3 color;
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
}`,Lw=`uniform float rotation;
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
}`,Dw=`uniform vec3 diffuse;
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
}`,At={alphahash_fragment:QM,alphahash_pars_fragment:eE,alphamap_fragment:tE,alphamap_pars_fragment:nE,alphatest_fragment:iE,alphatest_pars_fragment:rE,aomap_fragment:aE,aomap_pars_fragment:sE,batching_pars_vertex:oE,batching_vertex:lE,begin_vertex:cE,beginnormal_vertex:uE,bsdfs:dE,iridescence_fragment:fE,bumpmap_pars_fragment:hE,clipping_planes_fragment:pE,clipping_planes_pars_fragment:mE,clipping_planes_pars_vertex:gE,clipping_planes_vertex:vE,color_fragment:_E,color_pars_fragment:xE,color_pars_vertex:SE,color_vertex:yE,common:ME,cube_uv_reflection_fragment:EE,defaultnormal_vertex:TE,displacementmap_pars_vertex:wE,displacementmap_vertex:AE,emissivemap_fragment:CE,emissivemap_pars_fragment:RE,colorspace_fragment:bE,colorspace_pars_fragment:PE,envmap_fragment:LE,envmap_common_pars_fragment:DE,envmap_pars_fragment:NE,envmap_pars_vertex:UE,envmap_physical_pars_fragment:XE,envmap_vertex:FE,fog_vertex:OE,fog_pars_vertex:IE,fog_fragment:kE,fog_pars_fragment:zE,gradientmap_pars_fragment:HE,lightmap_pars_fragment:VE,lights_lambert_fragment:GE,lights_lambert_pars_fragment:BE,lights_pars_begin:WE,lights_toon_fragment:$E,lights_toon_pars_fragment:YE,lights_phong_fragment:qE,lights_phong_pars_fragment:jE,lights_physical_fragment:KE,lights_physical_pars_fragment:ZE,lights_fragment_begin:JE,lights_fragment_maps:QE,lights_fragment_end:eT,lightprobes_pars_fragment:tT,logdepthbuf_fragment:nT,logdepthbuf_pars_fragment:iT,logdepthbuf_pars_vertex:rT,logdepthbuf_vertex:aT,map_fragment:sT,map_pars_fragment:oT,map_particle_fragment:lT,map_particle_pars_fragment:cT,metalnessmap_fragment:uT,metalnessmap_pars_fragment:dT,morphinstance_vertex:fT,morphcolor_vertex:hT,morphnormal_vertex:pT,morphtarget_pars_vertex:mT,morphtarget_vertex:gT,normal_fragment_begin:vT,normal_fragment_maps:_T,normal_pars_fragment:xT,normal_pars_vertex:ST,normal_vertex:yT,normalmap_pars_fragment:MT,clearcoat_normal_fragment_begin:ET,clearcoat_normal_fragment_maps:TT,clearcoat_pars_fragment:wT,iridescence_pars_fragment:AT,opaque_fragment:CT,packing:RT,premultiplied_alpha_fragment:bT,project_vertex:PT,dithering_fragment:LT,dithering_pars_fragment:DT,roughnessmap_fragment:NT,roughnessmap_pars_fragment:UT,shadowmap_pars_fragment:FT,shadowmap_pars_vertex:OT,shadowmap_vertex:IT,shadowmask_pars_fragment:kT,skinbase_vertex:zT,skinning_pars_vertex:HT,skinning_vertex:VT,skinnormal_vertex:GT,specularmap_fragment:BT,specularmap_pars_fragment:WT,tonemapping_fragment:XT,tonemapping_pars_fragment:$T,transmission_fragment:YT,transmission_pars_fragment:qT,uv_pars_fragment:jT,uv_pars_vertex:KT,uv_vertex:ZT,worldpos_vertex:JT,background_vert:QT,background_frag:ew,backgroundCube_vert:tw,backgroundCube_frag:nw,cube_vert:iw,cube_frag:rw,depth_vert:aw,depth_frag:sw,distance_vert:ow,distance_frag:lw,equirect_vert:cw,equirect_frag:uw,linedashed_vert:dw,linedashed_frag:fw,meshbasic_vert:hw,meshbasic_frag:pw,meshlambert_vert:mw,meshlambert_frag:gw,meshmatcap_vert:vw,meshmatcap_frag:_w,meshnormal_vert:xw,meshnormal_frag:Sw,meshphong_vert:yw,meshphong_frag:Mw,meshphysical_vert:Ew,meshphysical_frag:Tw,meshtoon_vert:ww,meshtoon_frag:Aw,points_vert:Cw,points_frag:Rw,shadow_vert:bw,shadow_frag:Pw,sprite_vert:Lw,sprite_frag:Dw},Ge={common:{diffuse:{value:new Pt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new St}},envmap:{envMap:{value:null},envMapRotation:{value:new St},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new St}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new St}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new St},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new St},normalScale:{value:new lt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new St},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new St}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new St}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new St}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Pt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new J},probesMax:{value:new J},probesResolution:{value:new J}},points:{diffuse:{value:new Pt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0},uvTransform:{value:new St}},sprite:{diffuse:{value:new Pt(16777215)},opacity:{value:1},center:{value:new lt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new St},alphaMap:{value:null},alphaMapTransform:{value:new St},alphaTest:{value:0}}},ar={basic:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.fog]),vertexShader:At.meshbasic_vert,fragmentShader:At.meshbasic_frag},lambert:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},envMapIntensity:{value:1}}]),vertexShader:At.meshlambert_vert,fragmentShader:At.meshlambert_frag},phong:{uniforms:ti([Ge.common,Ge.specularmap,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},specular:{value:new Pt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:At.meshphong_vert,fragmentShader:At.meshphong_frag},standard:{uniforms:ti([Ge.common,Ge.envmap,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.roughnessmap,Ge.metalnessmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag},toon:{uniforms:ti([Ge.common,Ge.aomap,Ge.lightmap,Ge.emissivemap,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.gradientmap,Ge.fog,Ge.lights,{emissive:{value:new Pt(0)}}]),vertexShader:At.meshtoon_vert,fragmentShader:At.meshtoon_frag},matcap:{uniforms:ti([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,Ge.fog,{matcap:{value:null}}]),vertexShader:At.meshmatcap_vert,fragmentShader:At.meshmatcap_frag},points:{uniforms:ti([Ge.points,Ge.fog]),vertexShader:At.points_vert,fragmentShader:At.points_frag},dashed:{uniforms:ti([Ge.common,Ge.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:At.linedashed_vert,fragmentShader:At.linedashed_frag},depth:{uniforms:ti([Ge.common,Ge.displacementmap]),vertexShader:At.depth_vert,fragmentShader:At.depth_frag},normal:{uniforms:ti([Ge.common,Ge.bumpmap,Ge.normalmap,Ge.displacementmap,{opacity:{value:1}}]),vertexShader:At.meshnormal_vert,fragmentShader:At.meshnormal_frag},sprite:{uniforms:ti([Ge.sprite,Ge.fog]),vertexShader:At.sprite_vert,fragmentShader:At.sprite_frag},background:{uniforms:{uvTransform:{value:new St},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:At.background_vert,fragmentShader:At.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new St}},vertexShader:At.backgroundCube_vert,fragmentShader:At.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:At.cube_vert,fragmentShader:At.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:At.equirect_vert,fragmentShader:At.equirect_frag},distance:{uniforms:ti([Ge.common,Ge.displacementmap,{referencePosition:{value:new J},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:At.distance_vert,fragmentShader:At.distance_frag},shadow:{uniforms:ti([Ge.lights,Ge.fog,{color:{value:new Pt(0)},opacity:{value:1}}]),vertexShader:At.shadow_vert,fragmentShader:At.shadow_frag}};ar.physical={uniforms:ti([ar.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new St},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new St},clearcoatNormalScale:{value:new lt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new St},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new St},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new St},sheen:{value:0},sheenColor:{value:new Pt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new St},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new St},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new St},transmissionSamplerSize:{value:new lt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new St},attenuationDistance:{value:0},attenuationColor:{value:new Pt(0)},specularColor:{value:new Pt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new St},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new St},anisotropyVector:{value:new lt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new St}}]),vertexShader:At.meshphysical_vert,fragmentShader:At.meshphysical_frag};const xc={r:0,b:0,g:0},Nw=new un,Yv=new St;Yv.set(-1,0,0,0,1,0,0,0,1);function Uw(i,e,t,a,s,l){const u=new Pt(0);let d=s===!0?0:1,m,p,v=null,x=0,_=null;function M(U){let V=U.isScene===!0?U.background:null;if(V&&V.isTexture){const R=U.backgroundBlurriness>0;V=e.get(V,R)}return V}function w(U){let V=!1;const R=M(U);R===null?y(u,d):R&&R.isColor&&(y(R,1),V=!0);const L=i.xr.getEnvironmentBlendMode();L==="additive"?t.buffers.color.setClear(0,0,0,1,l):L==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,l),(i.autoClear||V)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),i.clear(i.autoClearColor,i.autoClearDepth,i.autoClearStencil))}function b(U,V){const R=M(V);R&&(R.isCubeTexture||R.mapping===jc)?(p===void 0&&(p=new di(new qo(1,1,1),new fr({name:"BackgroundCubeMaterial",uniforms:ks(ar.backgroundCube.uniforms),vertexShader:ar.backgroundCube.vertexShader,fragmentShader:ar.backgroundCube.fragmentShader,side:fi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),p.geometry.deleteAttribute("normal"),p.geometry.deleteAttribute("uv"),p.onBeforeRender=function(L,P,I){this.matrixWorld.copyPosition(I.matrixWorld)},Object.defineProperty(p.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),a.update(p)),p.material.uniforms.envMap.value=R,p.material.uniforms.backgroundBlurriness.value=V.backgroundBlurriness,p.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,p.material.uniforms.backgroundRotation.value.setFromMatrix4(Nw.makeRotationFromEuler(V.backgroundRotation)).transpose(),R.isCubeTexture&&R.isRenderTargetTexture===!1&&p.material.uniforms.backgroundRotation.value.premultiply(Yv),p.material.toneMapped=It.getTransfer(R.colorSpace)!==qt,(v!==R||x!==R.version||_!==i.toneMapping)&&(p.material.needsUpdate=!0,v=R,x=R.version,_=i.toneMapping),p.layers.enableAll(),U.unshift(p,p.geometry,p.material,0,0,null)):R&&R.isTexture&&(m===void 0&&(m=new di(new Kc(2,2),new fr({name:"BackgroundMaterial",uniforms:ks(ar.background.uniforms),vertexShader:ar.background.vertexShader,fragmentShader:ar.background.fragmentShader,side:za,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),m.geometry.deleteAttribute("normal"),Object.defineProperty(m.material,"map",{get:function(){return this.uniforms.t2D.value}}),a.update(m)),m.material.uniforms.t2D.value=R,m.material.uniforms.backgroundIntensity.value=V.backgroundIntensity,m.material.toneMapped=It.getTransfer(R.colorSpace)!==qt,R.matrixAutoUpdate===!0&&R.updateMatrix(),m.material.uniforms.uvTransform.value.copy(R.matrix),(v!==R||x!==R.version||_!==i.toneMapping)&&(m.material.needsUpdate=!0,v=R,x=R.version,_=i.toneMapping),m.layers.enableAll(),U.unshift(m,m.geometry,m.material,0,0,null))}function y(U,V){U.getRGB(xc,Bv(i)),t.buffers.color.setClear(xc.r,xc.g,xc.b,V,l)}function S(){p!==void 0&&(p.geometry.dispose(),p.material.dispose(),p=void 0),m!==void 0&&(m.geometry.dispose(),m.material.dispose(),m=void 0)}return{getClearColor:function(){return u},setClearColor:function(U,V=1){u.set(U),d=V,y(u,d)},getClearAlpha:function(){return d},setClearAlpha:function(U){d=U,y(u,d)},render:w,addToRenderList:b,dispose:S}}function Fw(i,e){const t=i.getParameter(i.MAX_VERTEX_ATTRIBS),a={},s=_(null);let l=s,u=!1;function d(B,K,ie,H,te){let oe=!1;const ce=x(B,H,ie,K);l!==ce&&(l=ce,p(l.object)),oe=M(B,H,ie,te),oe&&w(B,H,ie,te),te!==null&&e.update(te,i.ELEMENT_ARRAY_BUFFER),(oe||u)&&(u=!1,R(B,K,ie,H),te!==null&&i.bindBuffer(i.ELEMENT_ARRAY_BUFFER,e.get(te).buffer))}function m(){return i.createVertexArray()}function p(B){return i.bindVertexArray(B)}function v(B){return i.deleteVertexArray(B)}function x(B,K,ie,H){const te=H.wireframe===!0;let oe=a[K.id];oe===void 0&&(oe={},a[K.id]=oe);const ce=B.isInstancedMesh===!0?B.id:0;let q=oe[ce];q===void 0&&(q={},oe[ce]=q);let W=q[ie.id];W===void 0&&(W={},q[ie.id]=W);let Z=W[te];return Z===void 0&&(Z=_(m()),W[te]=Z),Z}function _(B){const K=[],ie=[],H=[];for(let te=0;te<t;te++)K[te]=0,ie[te]=0,H[te]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:K,enabledAttributes:ie,attributeDivisors:H,object:B,attributes:{},index:null}}function M(B,K,ie,H){const te=l.attributes,oe=K.attributes;let ce=0;const q=ie.getAttributes();for(const W in q)if(q[W].location>=0){const D=te[W];let se=oe[W];if(se===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(se=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(se=B.instanceColor)),D===void 0||D.attribute!==se||se&&D.data!==se.data)return!0;ce++}return l.attributesNum!==ce||l.index!==H}function w(B,K,ie,H){const te={},oe=K.attributes;let ce=0;const q=ie.getAttributes();for(const W in q)if(q[W].location>=0){let D=oe[W];D===void 0&&(W==="instanceMatrix"&&B.instanceMatrix&&(D=B.instanceMatrix),W==="instanceColor"&&B.instanceColor&&(D=B.instanceColor));const se={};se.attribute=D,D&&D.data&&(se.data=D.data),te[W]=se,ce++}l.attributes=te,l.attributesNum=ce,l.index=H}function b(){const B=l.newAttributes;for(let K=0,ie=B.length;K<ie;K++)B[K]=0}function y(B){S(B,0)}function S(B,K){const ie=l.newAttributes,H=l.enabledAttributes,te=l.attributeDivisors;ie[B]=1,H[B]===0&&(i.enableVertexAttribArray(B),H[B]=1),te[B]!==K&&(i.vertexAttribDivisor(B,K),te[B]=K)}function U(){const B=l.newAttributes,K=l.enabledAttributes;for(let ie=0,H=K.length;ie<H;ie++)K[ie]!==B[ie]&&(i.disableVertexAttribArray(ie),K[ie]=0)}function V(B,K,ie,H,te,oe,ce){ce===!0?i.vertexAttribIPointer(B,K,ie,te,oe):i.vertexAttribPointer(B,K,ie,H,te,oe)}function R(B,K,ie,H){b();const te=H.attributes,oe=ie.getAttributes(),ce=K.defaultAttributeValues;for(const q in oe){const W=oe[q];if(W.location>=0){let Z=te[q];if(Z===void 0&&(q==="instanceMatrix"&&B.instanceMatrix&&(Z=B.instanceMatrix),q==="instanceColor"&&B.instanceColor&&(Z=B.instanceColor)),Z!==void 0){const D=Z.normalized,se=Z.itemSize,Me=e.get(Z);if(Me===void 0)continue;const Be=Me.buffer,Xe=Me.type,Ye=Me.bytesPerElement,le=Xe===i.INT||Xe===i.UNSIGNED_INT||Z.gpuType===yh;if(Z.isInterleavedBufferAttribute){const pe=Z.data,Ce=pe.stride,rt=Z.offset;if(pe.isInstancedInterleavedBuffer){for(let He=0;He<W.locationSize;He++)S(W.location+He,pe.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=pe.meshPerAttribute*pe.count)}else for(let He=0;He<W.locationSize;He++)y(W.location+He);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let He=0;He<W.locationSize;He++)V(W.location+He,se/W.locationSize,Xe,D,Ce*Ye,(rt+se/W.locationSize*He)*Ye,le)}else{if(Z.isInstancedBufferAttribute){for(let pe=0;pe<W.locationSize;pe++)S(W.location+pe,Z.meshPerAttribute);B.isInstancedMesh!==!0&&H._maxInstanceCount===void 0&&(H._maxInstanceCount=Z.meshPerAttribute*Z.count)}else for(let pe=0;pe<W.locationSize;pe++)y(W.location+pe);i.bindBuffer(i.ARRAY_BUFFER,Be);for(let pe=0;pe<W.locationSize;pe++)V(W.location+pe,se/W.locationSize,Xe,D,se*Ye,se/W.locationSize*pe*Ye,le)}}else if(ce!==void 0){const D=ce[q];if(D!==void 0)switch(D.length){case 2:i.vertexAttrib2fv(W.location,D);break;case 3:i.vertexAttrib3fv(W.location,D);break;case 4:i.vertexAttrib4fv(W.location,D);break;default:i.vertexAttrib1fv(W.location,D)}}}}U()}function L(){F();for(const B in a){const K=a[B];for(const ie in K){const H=K[ie];for(const te in H){const oe=H[te];for(const ce in oe)v(oe[ce].object),delete oe[ce];delete H[te]}}delete a[B]}}function P(B){if(a[B.id]===void 0)return;const K=a[B.id];for(const ie in K){const H=K[ie];for(const te in H){const oe=H[te];for(const ce in oe)v(oe[ce].object),delete oe[ce];delete H[te]}}delete a[B.id]}function I(B){for(const K in a){const ie=a[K];for(const H in ie){const te=ie[H];if(te[B.id]===void 0)continue;const oe=te[B.id];for(const ce in oe)v(oe[ce].object),delete oe[ce];delete te[B.id]}}}function T(B){for(const K in a){const ie=a[K],H=B.isInstancedMesh===!0?B.id:0,te=ie[H];if(te!==void 0){for(const oe in te){const ce=te[oe];for(const q in ce)v(ce[q].object),delete ce[q];delete te[oe]}delete ie[H],Object.keys(ie).length===0&&delete a[K]}}}function F(){z(),u=!0,l!==s&&(l=s,p(l.object))}function z(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:d,reset:F,resetDefaultState:z,dispose:L,releaseStatesOfGeometry:P,releaseStatesOfObject:T,releaseStatesOfProgram:I,initAttributes:b,enableAttribute:y,disableUnusedAttributes:U}}function Ow(i,e,t){let a;function s(m){a=m}function l(m,p){i.drawArrays(a,m,p),t.update(p,a,1)}function u(m,p,v){v!==0&&(i.drawArraysInstanced(a,m,p,v),t.update(p,a,v))}function d(m,p,v){if(v===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(a,m,0,p,0,v);let _=0;for(let M=0;M<v;M++)_+=p[M];t.update(_,a,1)}this.setMode=s,this.render=l,this.renderInstances=u,this.renderMultiDraw=d}function Iw(i,e,t,a){let s;function l(){if(s!==void 0)return s;if(e.has("EXT_texture_filter_anisotropic")===!0){const I=e.get("EXT_texture_filter_anisotropic");s=i.getParameter(I.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function u(I){return!(I!==Ki&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_FORMAT))}function d(I){const T=I===dr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(I!==Ei&&I!==or&&!T&&a.convert(I)!==i.getParameter(i.IMPLEMENTATION_COLOR_READ_TYPE))}function m(I){if(I==="highp"){if(i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.HIGH_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.HIGH_FLOAT).precision>0)return"highp";I="mediump"}return I==="mediump"&&i.getShaderPrecisionFormat(i.VERTEX_SHADER,i.MEDIUM_FLOAT).precision>0&&i.getShaderPrecisionFormat(i.FRAGMENT_SHADER,i.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let p=t.precision!==void 0?t.precision:"highp";const v=m(p);v!==p&&(gt("WebGLRenderer:",p,"not supported, using",v,"instead."),p=v);const x=t.logarithmicDepthBuffer===!0,_=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&_===!1&&gt("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const M=i.getParameter(i.MAX_TEXTURE_IMAGE_UNITS),w=i.getParameter(i.MAX_VERTEX_TEXTURE_IMAGE_UNITS),b=i.getParameter(i.MAX_TEXTURE_SIZE),y=i.getParameter(i.MAX_CUBE_MAP_TEXTURE_SIZE),S=i.getParameter(i.MAX_VERTEX_ATTRIBS),U=i.getParameter(i.MAX_VERTEX_UNIFORM_VECTORS),V=i.getParameter(i.MAX_VARYING_VECTORS),R=i.getParameter(i.MAX_FRAGMENT_UNIFORM_VECTORS),L=i.getParameter(i.MAX_SAMPLES),P=i.getParameter(i.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:l,getMaxPrecision:m,textureFormatReadable:u,textureTypeReadable:d,precision:p,logarithmicDepthBuffer:x,reversedDepthBuffer:_,maxTextures:M,maxVertexTextures:w,maxTextureSize:b,maxCubemapSize:y,maxAttributes:S,maxVertexUniforms:U,maxVaryings:V,maxFragmentUniforms:R,maxSamples:L,samples:P}}function kw(i){const e=this;let t=null,a=0,s=!1,l=!1;const u=new Lr,d=new St,m={value:null,needsUpdate:!1};this.uniform=m,this.numPlanes=0,this.numIntersection=0,this.init=function(x,_){const M=x.length!==0||_||a!==0||s;return s=_,a=x.length,M},this.beginShadows=function(){l=!0,v(null)},this.endShadows=function(){l=!1},this.setGlobalState=function(x,_){t=v(x,_,0)},this.setState=function(x,_,M){const w=x.clippingPlanes,b=x.clipIntersection,y=x.clipShadows,S=i.get(x);if(!s||w===null||w.length===0||l&&!y)l?v(null):p();else{const U=l?0:a,V=U*4;let R=S.clippingState||null;m.value=R,R=v(w,_,V,M);for(let L=0;L!==V;++L)R[L]=t[L];S.clippingState=R,this.numIntersection=b?this.numPlanes:0,this.numPlanes+=U}};function p(){m.value!==t&&(m.value=t,m.needsUpdate=a>0),e.numPlanes=a,e.numIntersection=0}function v(x,_,M,w){const b=x!==null?x.length:0;let y=null;if(b!==0){if(y=m.value,w!==!0||y===null){const S=M+b*4,U=_.matrixWorldInverse;d.getNormalMatrix(U),(y===null||y.length<S)&&(y=new Float32Array(S));for(let V=0,R=M;V!==b;++V,R+=4)u.copy(x[V]).applyMatrix4(U,d),u.normal.toArray(y,R),y[R+3]=u.constant}m.value=y,m.needsUpdate=!0}return e.numPlanes=b,e.numIntersection=0,y}}const Ls=4,zw=6,Hw=20,Vw=256,Ro=new kh,f0=new Pt;let lf=null,cf=0,uf=0,df=!1;const Gw=new J,Ua=new J;class h0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,a=.1,s=100,l={}){const{size:u=256,position:d=Gw}=l;lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(u);const m=this._allocateTargets();return m.depthBuffer=!0,this._sceneToCubeUV(e,a,s,m,d),t>0&&this._blur(m,0,0,t),this._applyPMREM(m),this._cleanup(m),m}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=g0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=m0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(lf,cf,uf),this._renderer.xr.enabled=df,e.scissorTest=!1,As(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Ha||e.mapping===Is?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),lf=this._renderer.getRenderTarget(),cf=this._renderer.getActiveCubeFace(),uf=this._renderer.getActiveMipmapLevel(),df=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const a=t||this._allocateTargets();return this._textureToCubeUV(e,a),this._applyPMREM(a),this._cleanup(a),a}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,a={magFilter:Kn,minFilter:Kn,generateMipmaps:!1,type:dr,format:Ki,colorSpace:kc,depthBuffer:!1},s=p0(e,t,a);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=p0(e,t,a);const{_lodMax:l}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=Bw(l)),this._blurMaterial=Xw(l,e,t),this._ggxMaterial=Ww(l,e,t)}return s}_compileMaterial(e){const t=new di(new ni,e);this._renderer.compile(t,Ro)}_sceneToCubeUV(e,t,a,s,l){const m=new Ui(90,1,t,a),p=[1,-1,1,1,1,1],v=[1,1,1,-1,-1,-1],x=this._renderer,_=x.autoClear,M=x.toneMapping;x.getClearColor(f0),x.toneMapping=cr,x.autoClear=!1,x.state.buffers.depth.getReversed()&&(x.setRenderTarget(s),x.clearDepth(),x.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new di(new qo,new Nh({name:"PMREM.Background",side:fi,depthWrite:!1,depthTest:!1})));const b=this._backgroundBox,y=b.material;let S=!1;const U=e.background;U?U.isColor&&(y.color.copy(U),e.background=null,S=!0):(y.color.copy(f0),S=!0);for(let V=0;V<6;V++){const R=V%3;R===0?(m.up.set(0,p[V],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x+v[V],l.y,l.z)):R===1?(m.up.set(0,0,p[V]),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y+v[V],l.z)):(m.up.set(0,p[V],0),m.position.set(l.x,l.y,l.z),m.lookAt(l.x,l.y,l.z+v[V]));const L=this._cubeSize;As(s,R*L,V>2?L:0,L,L),x.setRenderTarget(s),S&&x.render(b,m),x.render(e,m)}x.toneMapping=M,x.autoClear=_,e.background=U}_textureToCubeUV(e,t){const a=this._renderer,s=e.mapping===Ha||e.mapping===Is;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=g0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=m0());const l=s?this._cubemapMaterial:this._equirectMaterial,u=this._lodMeshes[0];u.material=l;const d=l.uniforms;d.envMap.value=e;const m=this._cubeSize;As(t,0,0,3*m,2*m),a.setRenderTarget(t),a.render(u,Ro)}_applyPMREM(e){const t=this._renderer,a=t.autoClear;t.autoClear=!1;const s=this._lodMeshes.length;for(let l=1;l<s;l++)this._applyGGXFilter(e,l-1,l);t.autoClear=a}_applyGGXFilter(e,t,a){const s=this._renderer,l=this._pingPongRenderTarget,u=this._ggxMaterial,d=this._lodMeshes[a];d.material=u;const m=u.uniforms,p=a/(this._lodMeshes.length-1),v=t/(this._lodMeshes.length-1),x=Math.sqrt(p*p-v*v),_=p*1.25,M=x*_,{_lodMax:w}=this,b=this._sizeLods[a],y=3*b*(a>w-Ls?a-w+Ls:0),S=4*(this._cubeSize-b);m.envMap.value=e.texture,m.roughness.value=M,m.mipInt.value=w-t,As(l,y,S,3*b,2*b),s.setRenderTarget(l),s.render(d,Ro),m.envMap.value=l.texture,m.roughness.value=0,m.mipInt.value=w-a,As(e,y,S,3*b,2*b),s.setRenderTarget(e),s.render(d,Ro)}_blur(e,t,a,s){const l=this._pingPongRenderTarget,u=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(e,l,t,a,u),this._blurPass(l,e,a,a,u)}_blurPass(e,t,a,s,l){const u=this._renderer,d=this._blurMaterial,m=this._lodMeshes[s];m.material=d;const p=d.uniforms;p.envMap.value=e.texture,p.sigma.value=l,p.mipInt.value=this._lodMax-a;const v=this._sizeLods[s],x=3*v*(s>this._lodMax-Ls?s-this._lodMax+Ls:0),_=4*(this._cubeSize-v);As(t,x,_,3*v,2*v),u.setRenderTarget(t),u.render(m,Ro)}}function Bw(i){const e=[],t=[];let a=i;const s=i-Ls+1+zw;for(let l=0;l<s;l++){const u=Math.pow(2,a);e.push(u);const d=1/(u-2),m=-d,p=1+d,v=[m,m,p,m,p,p,m,m,p,p,m,p],x=6,_=6,M=3,w=new Float32Array(M*_*x),b=new Float32Array(M*_*x);for(let S=0;S<x;S++){const U=S%3*2/3-1,V=S>2?0:-1,R=[U,V,0,U+2/3,V,0,U+2/3,V+1,0,U,V,0,U+2/3,V+1,0,U,V+1,0];w.set(R,M*_*S);for(let L=0;L<_;L++){const P=v[L*2]*2-1,I=v[L*2+1]*2-1;S===0?Ua.set(1,I,P):S===1?Ua.set(-P,1,-I):S===2?Ua.set(-P,I,1):S===3?Ua.set(-1,I,-P):S===4?Ua.set(-P,-1,I):Ua.set(P,I,-1),Ua.toArray(b,(S*_+L)*M)}}const y=new ni;y.setAttribute("position",new hi(w,M)),y.setAttribute("outputDirection",new hi(b,M)),t.push(new di(y,null)),a>Ls&&a--}return{lodMeshes:t,sizeLods:e}}function p0(i,e,t){const a=new Ji(i,e,t);return a.texture.mapping=jc,a.texture.name="PMREM.cubeUv",a.scissorTest=!0,a}function As(i,e,t,a,s){i.viewport.set(e,t,a,s),i.scissor.set(e,t,a,s)}function Ww(i,e,t){return new fr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:Vw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Xw(i,e,t){return new fr({name:"SphericalGaussianBlur",defines:{SAMPLES:Hw,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${i}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function m0(){return new fr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Zc(),fragmentShader:`

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
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function g0(){return new fr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Zc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ur,depthTest:!1,depthWrite:!1})}function Zc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class qv extends Ji{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const a={width:e,height:e,depth:1},s=[a,a,a,a,a,a];this.texture=new Vv(s),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const a={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new qo(5,5,5),l=new fr({name:"CubemapFromEquirect",uniforms:ks(a.uniforms),vertexShader:a.vertexShader,fragmentShader:a.fragmentShader,side:fi,blending:Ur});l.uniforms.tEquirect.value=t;const u=new di(s,l),d=t.minFilter;return t.minFilter===Fa&&(t.minFilter=Kn),new YM(1,10,this).update(e,u),t.minFilter=d,u.geometry.dispose(),u.material.dispose(),this}clear(e,t=!0,a=!0,s=!0){const l=e.getRenderTarget();for(let u=0;u<6;u++)e.setRenderTarget(this,u),e.clear(t,a,s);e.setRenderTarget(l)}}function $w(i){let e=new WeakMap,t=new WeakMap,a=null;function s(_,M=!1){return _==null?null:M?u(_):l(_)}function l(_){if(_&&_.isTexture){const M=_.mapping;if(M===Nd||M===Ud)if(e.has(_)){const w=e.get(_).texture;return d(w,_.mapping)}else{const w=_.image;if(w&&w.height>0){const b=new qv(w.height);return b.fromEquirectangularTexture(i,_),e.set(_,b),_.addEventListener("dispose",p),d(b.texture,_.mapping)}else return null}}return _}function u(_){if(_&&_.isTexture){const M=_.mapping,w=M===Nd||M===Ud,b=M===Ha||M===Is;if(w||b){let y=t.get(_);const S=y!==void 0?y.texture.pmremVersion:0;if(_.isRenderTargetTexture&&_.pmremVersion!==S)return a===null&&(a=new h0(i)),y=w?a.fromEquirectangular(_,y):a.fromCubemap(_,y),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),y.texture;if(y!==void 0)return y.texture;{const U=_.image;return w&&U&&U.height>0||b&&U&&m(U)?(a===null&&(a=new h0(i)),y=w?a.fromEquirectangular(_):a.fromCubemap(_),y.texture.pmremVersion=_.pmremVersion,t.set(_,y),_.addEventListener("dispose",v),y.texture):null}}}return _}function d(_,M){return M===Nd?_.mapping=Ha:M===Ud&&(_.mapping=Is),_}function m(_){let M=0;const w=6;for(let b=0;b<w;b++)_[b]!==void 0&&M++;return M===w}function p(_){const M=_.target;M.removeEventListener("dispose",p);const w=e.get(M);w!==void 0&&(e.delete(M),w.dispose())}function v(_){const M=_.target;M.removeEventListener("dispose",v);const w=t.get(M);w!==void 0&&(t.delete(M),w.dispose())}function x(){e=new WeakMap,t=new WeakMap,a!==null&&(a.dispose(),a=null)}return{get:s,dispose:x}}function Yw(i){const e={};function t(a){if(e[a]!==void 0)return e[a];const s=i.getExtension(a);return e[a]=s,s}return{has:function(a){return t(a)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(a){const s=t(a);return s===null&&Ns("WebGLRenderer: "+a+" extension not supported."),s}}}function qw(i,e,t,a){const s={},l=new WeakMap;function u(x){const _=x.target;_.index!==null&&e.remove(_.index);for(const w in _.attributes)e.remove(_.attributes[w]);_.removeEventListener("dispose",u),delete s[_.id];const M=l.get(_);M&&(e.remove(M),l.delete(_)),a.releaseStatesOfGeometry(_),_.isInstancedBufferGeometry===!0&&delete _._maxInstanceCount,t.memory.geometries--}function d(x,_){return s[_.id]===!0||(_.addEventListener("dispose",u),s[_.id]=!0,t.memory.geometries++),_}function m(x){const _=x.attributes;for(const M in _)e.update(_[M],i.ARRAY_BUFFER)}function p(x){const _=[],M=x.index,w=x.attributes.position;let b=0;if(w===void 0)return;if(M!==null){const U=M.array;b=M.version;for(let V=0,R=U.length;V<R;V+=3){const L=U[V+0],P=U[V+1],I=U[V+2];_.push(L,P,P,I,I,L)}}else{const U=w.array;b=w.version;for(let V=0,R=U.length/3-1;V<R;V+=3){const L=V+0,P=V+1,I=V+2;_.push(L,P,P,I,I,L)}}const y=new(w.count>=65535?kv:Iv)(_,1);y.version=b;const S=l.get(x);S&&e.remove(S),l.set(x,y)}function v(x){const _=l.get(x);if(_){const M=x.index;M!==null&&_.version<M.version&&p(x)}else p(x);return l.get(x)}return{get:d,update:m,getWireframeAttribute:v}}function jw(i,e,t){let a;function s(x){a=x}let l,u;function d(x){l=x.type,u=x.bytesPerElement}function m(x,_){i.drawElements(a,_,l,x*u),t.update(_,a,1)}function p(x,_,M){M!==0&&(i.drawElementsInstanced(a,_,l,x*u,M),t.update(_,a,M))}function v(x,_,M){if(M===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(a,_,0,l,x,0,M);let b=0;for(let y=0;y<M;y++)b+=_[y];t.update(b,a,1)}this.setMode=s,this.setIndex=d,this.render=m,this.renderInstances=p,this.renderMultiDraw=v}function Kw(i){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function a(l,u,d){switch(t.calls++,u){case i.TRIANGLES:t.triangles+=d*(l/3);break;case i.LINES:t.lines+=d*(l/2);break;case i.LINE_STRIP:t.lines+=d*(l-1);break;case i.LINE_LOOP:t.lines+=d*l;break;case i.POINTS:t.points+=d*l;break;default:kt("WebGLInfo: Unknown draw mode:",u);break}}function s(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:s,update:a}}function Zw(i,e,t){const a=new WeakMap,s=new mn;function l(u,d,m){const p=u.morphTargetInfluences,v=d.morphAttributes.position||d.morphAttributes.normal||d.morphAttributes.color,x=v!==void 0?v.length:0;let _=a.get(d);if(_===void 0||_.count!==x){let F=function(){I.dispose(),a.delete(d),d.removeEventListener("dispose",F)};_!==void 0&&_.texture.dispose();const M=d.morphAttributes.position!==void 0,w=d.morphAttributes.normal!==void 0,b=d.morphAttributes.color!==void 0,y=d.morphAttributes.position||[],S=d.morphAttributes.normal||[],U=d.morphAttributes.color||[];let V=0;M===!0&&(V=1),w===!0&&(V=2),b===!0&&(V=3);let R=d.attributes.position.count*V,L=1;R>e.maxTextureSize&&(L=Math.ceil(R/e.maxTextureSize),R=e.maxTextureSize);const P=new Float32Array(R*L*4*x),I=new Fv(P,R,L,x);I.type=or,I.needsUpdate=!0;const T=V*4;for(let z=0;z<x;z++){const B=y[z],K=S[z],ie=U[z],H=R*L*4*z;for(let te=0;te<B.count;te++){const oe=te*T;M===!0&&(s.fromBufferAttribute(B,te),P[H+oe+0]=s.x,P[H+oe+1]=s.y,P[H+oe+2]=s.z,P[H+oe+3]=0),w===!0&&(s.fromBufferAttribute(K,te),P[H+oe+4]=s.x,P[H+oe+5]=s.y,P[H+oe+6]=s.z,P[H+oe+7]=0),b===!0&&(s.fromBufferAttribute(ie,te),P[H+oe+8]=s.x,P[H+oe+9]=s.y,P[H+oe+10]=s.z,P[H+oe+11]=ie.itemSize===4?s.w:1)}}_={count:x,texture:I,size:new lt(R,L)},a.set(d,_),d.addEventListener("dispose",F)}if(u.isInstancedMesh===!0&&u.morphTexture!==null)m.getUniforms().setValue(i,"morphTexture",u.morphTexture,t);else{let M=0;for(let b=0;b<p.length;b++)M+=p[b];const w=d.morphTargetsRelative?1:1-M;m.getUniforms().setValue(i,"morphTargetBaseInfluence",w),m.getUniforms().setValue(i,"morphTargetInfluences",p)}m.getUniforms().setValue(i,"morphTargetsTexture",_.texture,t),m.getUniforms().setValue(i,"morphTargetsTextureSize",_.size)}return{update:l}}function Jw(i,e,t,a,s){let l=new WeakMap;function u(p){const v=s.render.frame,x=p.geometry,_=e.get(p,x);if(l.get(_)!==v&&(e.update(_),l.set(_,v)),p.isInstancedMesh&&(p.hasEventListener("dispose",m)===!1&&p.addEventListener("dispose",m),l.get(p)!==v&&(t.update(p.instanceMatrix,i.ARRAY_BUFFER),p.instanceColor!==null&&t.update(p.instanceColor,i.ARRAY_BUFFER),l.set(p,v))),p.isSkinnedMesh){const M=p.skeleton;l.get(M)!==v&&(M.update(),l.set(M,v))}return _}function d(){l=new WeakMap}function m(p){const v=p.target;v.removeEventListener("dispose",m),a.releaseStatesOfObject(v),t.remove(v.instanceMatrix),v.instanceColor!==null&&t.remove(v.instanceColor)}return{update:u,dispose:d}}const Qw={[_v]:"LINEAR_TONE_MAPPING",[xv]:"REINHARD_TONE_MAPPING",[Sv]:"CINEON_TONE_MAPPING",[yv]:"ACES_FILMIC_TONE_MAPPING",[Ev]:"AGX_TONE_MAPPING",[Tv]:"NEUTRAL_TONE_MAPPING",[Mv]:"CUSTOM_TONE_MAPPING"};function eA(i,e,t,a,s,l){const u=new Ji(e,t,{type:i,depthBuffer:s,stencilBuffer:l,samples:a?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let d=null,m=null;const p=new ni;p.setAttribute("position",new Rn([-1,3,0,-1,-1,0,3,-1,0],3)),p.setAttribute("uv",new Rn([0,2,0,0,2,0],2));const v=new IM({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),x=new di(p,v),_=new kh(-1,1,1,-1,0,1);let M=null,w=null,b=!1,y,S=null,U=[],V=!1;this.setSize=function(R,L){u.setSize(R,L),d!==null&&d.setSize(R,L),m!==null&&m.setSize(R,L);for(let P=0;P<U.length;P++){const I=U[P];I.setSize&&I.setSize(R,L)}},this.setEffects=function(R){U=R,V=U.length>0&&U[0].isRenderPass===!0;const L=u.width,P=u.height;U.length>0&&d===null&&(d=new Ji(L,P,{type:dr,depthBuffer:!1,stencilBuffer:!1}),m=new Ji(L,P,{type:dr,depthBuffer:!1,stencilBuffer:!1}));for(let I=0;I<U.length;I++){const T=U[I];T.setSize&&T.setSize(L,P)}},this.begin=function(R,L){if(b||R.toneMapping===cr&&U.length===0)return!1;if(S=L,L!==null){const P=L.width,I=L.height;(u.width!==P||u.height!==I)&&this.setSize(P,I)}return V===!1&&R.setRenderTarget(u),y=R.toneMapping,R.toneMapping=cr,!0},this.hasRenderPass=function(){return V},this.end=function(R,L){R.toneMapping=y,b=!0;let P=u,I=d;for(let T=0;T<U.length;T++){const F=U[T];F.enabled!==!1&&(F.render(R,I,P,L),F.needsSwap!==!1&&(P=I,I=I===d?m:d))}if(M!==R.outputColorSpace||w!==R.toneMapping){M=R.outputColorSpace,w=R.toneMapping,v.defines={},It.getTransfer(M)===qt&&(v.defines.SRGB_TRANSFER="");const T=Qw[w];T&&(v.defines[T]=""),v.needsUpdate=!0}v.uniforms.tDiffuse.value=P.texture,R.setRenderTarget(S),R.render(x,_),S=null,b=!1},this.isCompositing=function(){return b},this.dispose=function(){u.dispose(),d!==null&&d.dispose(),m!==null&&m.dispose(),p.dispose(),v.dispose()}}const jv=new Zn,ch=new Xo(1,1),Kv=new Fv,Zv=new dM,Jv=new Vv,v0=[],_0=[],x0=new Float32Array(16),S0=new Float32Array(9),y0=new Float32Array(4);function Hs(i,e,t){const a=i[0];if(a<=0||a>0)return i;const s=e*t;let l=v0[s];if(l===void 0&&(l=new Float32Array(s),v0[s]=l),e!==0){a.toArray(l,0);for(let u=1,d=0;u!==e;++u)d+=t,i[u].toArray(l,d)}return l}function bn(i,e){if(i.length!==e.length)return!1;for(let t=0,a=i.length;t<a;t++)if(i[t]!==e[t])return!1;return!0}function Pn(i,e){for(let t=0,a=e.length;t<a;t++)i[t]=e[t]}function Jc(i,e){let t=_0[e];t===void 0&&(t=new Int32Array(e),_0[e]=t);for(let a=0;a!==e;++a)t[a]=i.allocateTextureUnit();return t}function tA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1f(this.addr,e),t[0]=e)}function nA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2fv(this.addr,e),Pn(t,e)}}function iA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(i.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(bn(t,e))return;i.uniform3fv(this.addr,e),Pn(t,e)}}function rA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4fv(this.addr,e),Pn(t,e)}}function aA(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(bn(t,e))return;i.uniformMatrix2fv(this.addr,!1,e),Pn(t,e)}else{if(bn(t,a))return;y0.set(a),i.uniformMatrix2fv(this.addr,!1,y0),Pn(t,a)}}function sA(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(bn(t,e))return;i.uniformMatrix3fv(this.addr,!1,e),Pn(t,e)}else{if(bn(t,a))return;S0.set(a),i.uniformMatrix3fv(this.addr,!1,S0),Pn(t,a)}}function oA(i,e){const t=this.cache,a=e.elements;if(a===void 0){if(bn(t,e))return;i.uniformMatrix4fv(this.addr,!1,e),Pn(t,e)}else{if(bn(t,a))return;x0.set(a),i.uniformMatrix4fv(this.addr,!1,x0),Pn(t,a)}}function lA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1i(this.addr,e),t[0]=e)}function cA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2iv(this.addr,e),Pn(t,e)}}function uA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3iv(this.addr,e),Pn(t,e)}}function dA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4iv(this.addr,e),Pn(t,e)}}function fA(i,e){const t=this.cache;t[0]!==e&&(i.uniform1ui(this.addr,e),t[0]=e)}function hA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(i.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(bn(t,e))return;i.uniform2uiv(this.addr,e),Pn(t,e)}}function pA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(i.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(bn(t,e))return;i.uniform3uiv(this.addr,e),Pn(t,e)}}function mA(i,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(i.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(bn(t,e))return;i.uniform4uiv(this.addr,e),Pn(t,e)}}function gA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s);let l;this.type===i.SAMPLER_2D_SHADOW?(ch.compareFunction=t.isReversedDepthBuffer()?Rh:Ch,l=ch):l=jv,t.setTexture2D(e||l,s)}function vA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture3D(e||Zv,s)}function _A(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTextureCube(e||Jv,s)}function xA(i,e,t){const a=this.cache,s=t.allocateTextureUnit();a[0]!==s&&(i.uniform1i(this.addr,s),a[0]=s),t.setTexture2DArray(e||Kv,s)}function SA(i){switch(i){case 5126:return tA;case 35664:return nA;case 35665:return iA;case 35666:return rA;case 35674:return aA;case 35675:return sA;case 35676:return oA;case 5124:case 35670:return lA;case 35667:case 35671:return cA;case 35668:case 35672:return uA;case 35669:case 35673:return dA;case 5125:return fA;case 36294:return hA;case 36295:return pA;case 36296:return mA;case 35678:case 36198:case 36298:case 36306:case 35682:return gA;case 35679:case 36299:case 36307:return vA;case 35680:case 36300:case 36308:case 36293:return _A;case 36289:case 36303:case 36311:case 36292:return xA}}function yA(i,e){i.uniform1fv(this.addr,e)}function MA(i,e){const t=Hs(e,this.size,2);i.uniform2fv(this.addr,t)}function EA(i,e){const t=Hs(e,this.size,3);i.uniform3fv(this.addr,t)}function TA(i,e){const t=Hs(e,this.size,4);i.uniform4fv(this.addr,t)}function wA(i,e){const t=Hs(e,this.size,4);i.uniformMatrix2fv(this.addr,!1,t)}function AA(i,e){const t=Hs(e,this.size,9);i.uniformMatrix3fv(this.addr,!1,t)}function CA(i,e){const t=Hs(e,this.size,16);i.uniformMatrix4fv(this.addr,!1,t)}function RA(i,e){i.uniform1iv(this.addr,e)}function bA(i,e){i.uniform2iv(this.addr,e)}function PA(i,e){i.uniform3iv(this.addr,e)}function LA(i,e){i.uniform4iv(this.addr,e)}function DA(i,e){i.uniform1uiv(this.addr,e)}function NA(i,e){i.uniform2uiv(this.addr,e)}function UA(i,e){i.uniform3uiv(this.addr,e)}function FA(i,e){i.uniform4uiv(this.addr,e)}function OA(i,e,t){const a=this.cache,s=e.length,l=Jc(t,s);bn(a,l)||(i.uniform1iv(this.addr,l),Pn(a,l));let u;this.type===i.SAMPLER_2D_SHADOW?u=ch:u=jv;for(let d=0;d!==s;++d)t.setTexture2D(e[d]||u,l[d])}function IA(i,e,t){const a=this.cache,s=e.length,l=Jc(t,s);bn(a,l)||(i.uniform1iv(this.addr,l),Pn(a,l));for(let u=0;u!==s;++u)t.setTexture3D(e[u]||Zv,l[u])}function kA(i,e,t){const a=this.cache,s=e.length,l=Jc(t,s);bn(a,l)||(i.uniform1iv(this.addr,l),Pn(a,l));for(let u=0;u!==s;++u)t.setTextureCube(e[u]||Jv,l[u])}function zA(i,e,t){const a=this.cache,s=e.length,l=Jc(t,s);bn(a,l)||(i.uniform1iv(this.addr,l),Pn(a,l));for(let u=0;u!==s;++u)t.setTexture2DArray(e[u]||Kv,l[u])}function HA(i){switch(i){case 5126:return yA;case 35664:return MA;case 35665:return EA;case 35666:return TA;case 35674:return wA;case 35675:return AA;case 35676:return CA;case 5124:case 35670:return RA;case 35667:case 35671:return bA;case 35668:case 35672:return PA;case 35669:case 35673:return LA;case 5125:return DA;case 36294:return NA;case 36295:return UA;case 36296:return FA;case 35678:case 36198:case 36298:case 36306:case 35682:return OA;case 35679:case 36299:case 36307:return IA;case 35680:case 36300:case 36308:case 36293:return kA;case 36289:case 36303:case 36311:case 36292:return zA}}class VA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.setValue=SA(t.type)}}class GA{constructor(e,t,a){this.id=e,this.addr=a,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=HA(t.type)}}class BA{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,a){const s=this.seq;for(let l=0,u=s.length;l!==u;++l){const d=s[l];d.setValue(e,t[d.id],a)}}}const ff=/(\w+)(\])?(\[|\.)?/g;function M0(i,e){i.seq.push(e),i.map[e.id]=e}function WA(i,e,t){const a=i.name,s=a.length;for(ff.lastIndex=0;;){const l=ff.exec(a),u=ff.lastIndex;let d=l[1];const m=l[2]==="]",p=l[3];if(m&&(d=d|0),p===void 0||p==="["&&u+2===s){M0(t,p===void 0?new VA(d,i,e):new GA(d,i,e));break}else{let x=t.map[d];x===void 0&&(x=new BA(d),M0(t,x)),t=x}}}class Dc{constructor(e,t){this.seq=[],this.map={};const a=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let u=0;u<a;++u){const d=e.getActiveUniform(t,u),m=e.getUniformLocation(t,d.name);WA(d,m,this)}const s=[],l=[];for(const u of this.seq)u.type===e.SAMPLER_2D_SHADOW||u.type===e.SAMPLER_CUBE_SHADOW||u.type===e.SAMPLER_2D_ARRAY_SHADOW?s.push(u):l.push(u);s.length>0&&(this.seq=s.concat(l))}setValue(e,t,a,s){const l=this.map[t];l!==void 0&&l.setValue(e,a,s)}setOptional(e,t,a){const s=t[a];s!==void 0&&this.setValue(e,a,s)}static upload(e,t,a,s){for(let l=0,u=t.length;l!==u;++l){const d=t[l],m=a[d.id];m.needsUpdate!==!1&&d.setValue(e,m.value,s)}}static seqWithValue(e,t){const a=[];for(let s=0,l=e.length;s!==l;++s){const u=e[s];u.id in t&&a.push(u)}return a}}function E0(i,e,t){const a=i.createShader(e);return i.shaderSource(a,t),i.compileShader(a),a}const XA=37297;let $A=0;function YA(i,e){const t=i.split(`
`),a=[],s=Math.max(e-6,0),l=Math.min(e+6,t.length);for(let u=s;u<l;u++){const d=u+1;a.push(`${d===e?">":" "} ${d}: ${t[u]}`)}return a.join(`
`)}const T0=new St;function qA(i){It._getMatrix(T0,It.workingColorSpace,i);const e=`mat3( ${T0.elements.map(t=>t.toFixed(4))} )`;switch(It.getTransfer(i)){case zc:return[e,"LinearTransferOETF"];case qt:return[e,"sRGBTransferOETF"];default:return gt("WebGLProgram: Unsupported color space: ",i),[e,"LinearTransferOETF"]}}function w0(i,e,t){const a=i.getShaderParameter(e,i.COMPILE_STATUS),l=(i.getShaderInfoLog(e)||"").trim();if(a&&l==="")return"";const u=/ERROR: 0:(\d+)/.exec(l);if(u){const d=parseInt(u[1]);return t.toUpperCase()+`

`+l+`

`+YA(i.getShaderSource(e),d)}else return l}function jA(i,e){const t=qA(e);return[`vec4 ${i}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const KA={[_v]:"Linear",[xv]:"Reinhard",[Sv]:"Cineon",[yv]:"ACESFilmic",[Ev]:"AgX",[Tv]:"Neutral",[Mv]:"Custom"};function ZA(i,e){const t=KA[e];return t===void 0?(gt("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+i+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+i+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Sc=new J;function JA(){It.getLuminanceCoefficients(Sc);const i=Sc.x.toFixed(4),e=Sc.y.toFixed(4),t=Sc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${i}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function QA(i){return[i.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",i.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Uo).join(`
`)}function e1(i){const e=[];for(const t in i){const a=i[t];a!==!1&&e.push("#define "+t+" "+a)}return e.join(`
`)}function t1(i,e){const t={},a=i.getProgramParameter(e,i.ACTIVE_ATTRIBUTES);for(let s=0;s<a;s++){const l=i.getActiveAttrib(e,s),u=l.name;let d=1;l.type===i.FLOAT_MAT2&&(d=2),l.type===i.FLOAT_MAT3&&(d=3),l.type===i.FLOAT_MAT4&&(d=4),t[u]={type:l.type,location:i.getAttribLocation(e,u),locationSize:d}}return t}function Uo(i){return i!==""}function A0(i,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return i.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function C0(i,e){return i.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const n1=/^[ \t]*#include +<([\w\d./]+)>/gm;function uh(i){return i.replace(n1,r1)}const i1=new Map;function r1(i,e){let t=At[e];if(t===void 0){const a=i1.get(e);if(a!==void 0)t=At[a],gt('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,a);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return uh(t)}const a1=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function R0(i){return i.replace(a1,s1)}function s1(i,e,t,a){let s="";for(let l=parseInt(e);l<parseInt(t);l++)s+=a.replace(/\[\s*i\s*\]/g,"[ "+l+" ]").replace(/UNROLLED_LOOP_INDEX/g,l);return s}function b0(i){let e=`precision ${i.precision} float;
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
#define LOW_PRECISION`),e}const o1={[Ac]:"SHADOWMAP_TYPE_PCF",[Do]:"SHADOWMAP_TYPE_VSM"};function l1(i){return o1[i.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const c1={[Ha]:"ENVMAP_TYPE_CUBE",[Is]:"ENVMAP_TYPE_CUBE",[jc]:"ENVMAP_TYPE_CUBE_UV"};function u1(i){return i.envMap===!1?"ENVMAP_TYPE_CUBE":c1[i.envMapMode]||"ENVMAP_TYPE_CUBE"}const d1={[Is]:"ENVMAP_MODE_REFRACTION"};function f1(i){return i.envMap===!1?"ENVMAP_MODE_REFLECTION":d1[i.envMapMode]||"ENVMAP_MODE_REFLECTION"}const h1={[vv]:"ENVMAP_BLENDING_MULTIPLY",[Gy]:"ENVMAP_BLENDING_MIX",[By]:"ENVMAP_BLENDING_ADD"};function p1(i){return i.envMap===!1?"ENVMAP_BLENDING_NONE":h1[i.combine]||"ENVMAP_BLENDING_NONE"}function m1(i){const e=i.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,a=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:a,maxMip:t}}function g1(i,e,t,a){const s=i.getContext(),l=t.defines;let u=t.vertexShader,d=t.fragmentShader;const m=l1(t),p=u1(t),v=f1(t),x=p1(t),_=m1(t),M=QA(t),w=e1(l),b=s.createProgram();let y,S,U=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Uo).join(`
`),y.length>0&&(y+=`
`),S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w].filter(Uo).join(`
`),S.length>0&&(S+=`
`)):(y=[b0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+v:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Uo).join(`
`),S=[b0(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,w,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+p:"",t.envMap?"#define "+v:"",t.envMap?"#define "+x:"",_?"#define CUBEUV_TEXEL_WIDTH "+_.texelWidth:"",_?"#define CUBEUV_TEXEL_HEIGHT "+_.texelHeight:"",_?"#define CUBEUV_MAX_MIP "+_.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+m:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==cr?"#define TONE_MAPPING":"",t.toneMapping!==cr?At.tonemapping_pars_fragment:"",t.toneMapping!==cr?ZA("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",At.colorspace_pars_fragment,jA("linearToOutputTexel",t.outputColorSpace),JA(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Uo).join(`
`)),u=uh(u),u=A0(u,t),u=C0(u,t),d=uh(d),d=A0(d,t),d=C0(d,t),u=R0(u),d=R0(d),t.isRawShaderMaterial!==!0&&(U=`#version 300 es
`,y=[M,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+y,S=["#define varying in",t.glslVersion===Fg?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Fg?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+S);const V=U+y+u,R=U+S+d,L=E0(s,s.VERTEX_SHADER,V),P=E0(s,s.FRAGMENT_SHADER,R);s.attachShader(b,L),s.attachShader(b,P),t.index0AttributeName!==void 0?s.bindAttribLocation(b,0,t.index0AttributeName):t.hasPositionAttribute===!0&&s.bindAttribLocation(b,0,"position"),s.linkProgram(b);function I(B){if(i.debug.checkShaderErrors){const K=s.getProgramInfoLog(b)||"",ie=s.getShaderInfoLog(L)||"",H=s.getShaderInfoLog(P)||"",te=K.trim(),oe=ie.trim(),ce=H.trim();let q=!0,W=!0;if(s.getProgramParameter(b,s.LINK_STATUS)===!1)if(q=!1,typeof i.debug.onShaderError=="function")i.debug.onShaderError(s,b,L,P);else{const Z=w0(s,L,"vertex"),D=w0(s,P,"fragment");kt("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(b,s.VALIDATE_STATUS)+`

Material Name: `+B.name+`
Material Type: `+B.type+`

Program Info Log: `+te+`
`+Z+`
`+D)}else te!==""?gt("WebGLProgram: Program Info Log:",te):(oe===""||ce==="")&&(W=!1);W&&(B.diagnostics={runnable:q,programLog:te,vertexShader:{log:oe,prefix:y},fragmentShader:{log:ce,prefix:S}})}s.deleteShader(L),s.deleteShader(P),T=new Dc(s,b),F=t1(s,b)}let T;this.getUniforms=function(){return T===void 0&&I(this),T};let F;this.getAttributes=function(){return F===void 0&&I(this),F};let z=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return z===!1&&(z=s.getProgramParameter(b,XA)),z},this.destroy=function(){a.releaseStatesOfProgram(this),s.deleteProgram(b),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=$A++,this.cacheKey=e,this.usedTimes=1,this.program=b,this.vertexShader=L,this.fragmentShader=P,this}let v1=0;class _1{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,a){const s=this._getShaderCacheForMaterial(e);return s.has(t)===!1&&(s.add(t),t.usedTimes++),s.has(a)===!1&&(s.add(a),a.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const a of t)a.usedTimes--,a.usedTimes===0&&this.shaderCache.delete(a.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let a=t.get(e);return a===void 0&&(a=new Set,t.set(e,a)),a}_getShaderStage(e){const t=this.shaderCache;let a=t.get(e);return a===void 0&&(a=new x1(e),t.set(e,a)),a}}class x1{constructor(e){this.id=v1++,this.code=e,this.usedTimes=0}}function S1(i){return i===Va||i===Oc||i===Ic}function y1(i,e,t,a,s,l){const u=new Ph,d=new _1,m=new Set,p=[],v=new Map,x=a.logarithmicDepthBuffer;let _=a.precision;const M={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function w(T){return m.add(T),T===0?"uv":`uv${T}`}function b(T,F,z,B,K,ie){const H=B.fog,te=K.geometry,oe=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?B.environment:null,ce=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap,q=e.get(T.envMap||oe,ce),W=q&&q.mapping===jc?q.image.height:null,Z=M[T.type];T.precision!==null&&(_=a.getMaxPrecision(T.precision),_!==T.precision&&gt("WebGLProgram.getParameters:",T.precision,"not supported, using",_,"instead."));const D=te.morphAttributes.position||te.morphAttributes.normal||te.morphAttributes.color,se=D!==void 0?D.length:0;let Me=0;te.morphAttributes.position!==void 0&&(Me=1),te.morphAttributes.normal!==void 0&&(Me=2),te.morphAttributes.color!==void 0&&(Me=3);let Be,Xe,Ye,le;if(Z){const me=ar[Z];Be=me.vertexShader,Xe=me.fragmentShader}else{Be=T.vertexShader,Xe=T.fragmentShader;const me=d.getVertexShaderStage(T),Se=d.getFragmentShaderStage(T);d.update(T,me,Se),Ye=me.id,le=Se.id}const pe=i.getRenderTarget(),Ce=i.state.buffers.depth.getReversed(),rt=K.isInstancedMesh===!0,He=K.isBatchedMesh===!0,yt=!!T.map,tn=!!T.matcap,_t=!!q,ct=!!T.aoMap,Vt=!!T.lightMap,Mt=!!T.bumpMap&&T.wireframe===!1,Xt=!!T.normalMap,Dt=!!T.displacementMap,dn=!!T.emissiveMap,Nt=!!T.metalnessMap,Zt=!!T.roughnessMap,Y=T.anisotropy>0,_n=T.clearcoat>0,Rt=T.dispersion>0,N=T.retroreflectivity>0,E=T.iridescence>0,ee=T.sheen>0,ue=T.transmission>0,ge=Y&&!!T.anisotropyMap,we=_n&&!!T.clearcoatMap,De=_n&&!!T.clearcoatNormalMap,ve=_n&&!!T.clearcoatRoughnessMap,xe=E&&!!T.iridescenceMap,Re=E&&!!T.iridescenceThicknessMap,Qe=ee&&!!T.sheenColorMap,Oe=ee&&!!T.sheenRoughnessMap,Le=!!T.specularMap,Ke=!!T.specularColorMap,st=!!T.specularIntensityMap,ut=ue&&!!T.transmissionMap,X=ue&&!!T.thicknessMap,Ne=!!T.gradientMap,_e=!!T.alphaMap,Ue=T.alphaTest>0,ke=!!T.alphaHash,ye=!!T.extensions;let et=cr;T.toneMapped&&(pe===null||pe.isXRRenderTarget===!0)&&(et=i.toneMapping);const k={shaderID:Z,shaderType:T.type,shaderName:T.name,vertexShader:Be,fragmentShader:Xe,defines:T.defines,customVertexShaderID:Ye,customFragmentShaderID:le,isRawShaderMaterial:T.isRawShaderMaterial===!0,glslVersion:T.glslVersion,precision:_,batching:He,batchingColor:He&&K._colorsTexture!==null,instancing:rt,instancingColor:rt&&K.instanceColor!==null,instancingMorph:rt&&K.morphTexture!==null,outputColorSpace:pe===null?i.outputColorSpace:pe.isXRRenderTarget===!0?pe.texture.colorSpace:It.workingColorSpace,alphaToCoverage:!!T.alphaToCoverage,map:yt,matcap:tn,envMap:_t,envMapMode:_t&&q.mapping,envMapCubeUVHeight:W,aoMap:ct,lightMap:Vt,bumpMap:Mt,normalMap:Xt,displacementMap:Dt,emissiveMap:dn,normalMapObjectSpace:Xt&&T.normalMapType===$y,normalMapTangentSpace:Xt&&T.normalMapType===sh,packedNormalMap:Xt&&T.normalMapType===sh&&S1(T.normalMap.format),metalnessMap:Nt,roughnessMap:Zt,anisotropy:Y,anisotropyMap:ge,clearcoat:_n,clearcoatMap:we,clearcoatNormalMap:De,clearcoatRoughnessMap:ve,dispersion:Rt,retroreflection:N,iridescence:E,iridescenceMap:xe,iridescenceThicknessMap:Re,sheen:ee,sheenColorMap:Qe,sheenRoughnessMap:Oe,specularMap:Le,specularColorMap:Ke,specularIntensityMap:st,transmission:ue,transmissionMap:ut,thicknessMap:X,gradientMap:Ne,opaque:T.transparent===!1&&T.blending===Oo&&T.alphaToCoverage===!1,alphaMap:_e,alphaTest:Ue,alphaHash:ke,combine:T.combine,mapUv:yt&&w(T.map.channel),aoMapUv:ct&&w(T.aoMap.channel),lightMapUv:Vt&&w(T.lightMap.channel),bumpMapUv:Mt&&w(T.bumpMap.channel),normalMapUv:Xt&&w(T.normalMap.channel),displacementMapUv:Dt&&w(T.displacementMap.channel),emissiveMapUv:dn&&w(T.emissiveMap.channel),metalnessMapUv:Nt&&w(T.metalnessMap.channel),roughnessMapUv:Zt&&w(T.roughnessMap.channel),anisotropyMapUv:ge&&w(T.anisotropyMap.channel),clearcoatMapUv:we&&w(T.clearcoatMap.channel),clearcoatNormalMapUv:De&&w(T.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ve&&w(T.clearcoatRoughnessMap.channel),iridescenceMapUv:xe&&w(T.iridescenceMap.channel),iridescenceThicknessMapUv:Re&&w(T.iridescenceThicknessMap.channel),sheenColorMapUv:Qe&&w(T.sheenColorMap.channel),sheenRoughnessMapUv:Oe&&w(T.sheenRoughnessMap.channel),specularMapUv:Le&&w(T.specularMap.channel),specularColorMapUv:Ke&&w(T.specularColorMap.channel),specularIntensityMapUv:st&&w(T.specularIntensityMap.channel),transmissionMapUv:ut&&w(T.transmissionMap.channel),thicknessMapUv:X&&w(T.thicknessMap.channel),alphaMapUv:_e&&w(T.alphaMap.channel),vertexTangents:!!te.attributes.tangent&&(Xt||Y),vertexNormals:!!te.attributes.normal,vertexColors:T.vertexColors,vertexAlphas:T.vertexColors===!0&&!!te.attributes.color&&te.attributes.color.itemSize===4,pointsUvs:K.isPoints===!0&&!!te.attributes.uv&&(yt||_e),fog:!!H,useFog:T.fog===!0,fogExp2:!!H&&H.isFogExp2,flatShading:T.wireframe===!1&&(T.flatShading===!0||te.attributes.normal===void 0&&Xt===!1&&(T.isMeshLambertMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isMeshPhysicalMaterial)),sizeAttenuation:T.sizeAttenuation===!0,logarithmicDepthBuffer:x,reversedDepthBuffer:Ce,skinning:K.isSkinnedMesh===!0,hasPositionAttribute:te.attributes.position!==void 0,morphTargets:te.morphAttributes.position!==void 0,morphNormals:te.morphAttributes.normal!==void 0,morphColors:te.morphAttributes.color!==void 0,morphTargetsCount:se,morphTextureStride:Me,numSunLights:F.sun.length,numDirLights:F.directional.length,numPointLights:F.point.length,numSpotLights:F.spot.length,numSpotLightMaps:F.spotLightMap.length,numRectAreaLights:F.rectArea.length,numHemiLights:F.hemi.length,numSunLightShadows:F.sunShadowMap.length,numDirLightShadows:F.directionalShadowMap.length,numPointLightShadows:F.pointShadowMap.length,numSpotLightShadows:F.spotShadowMap.length,numSpotLightShadowsWithMaps:F.numSpotLightShadowsWithMaps,numLightProbes:F.numLightProbes,numLightProbeGrids:ie.length,numClippingPlanes:l.numPlanes,numClipIntersection:l.numIntersection,dithering:T.dithering,shadowMapEnabled:i.shadowMap.enabled&&z.length>0,shadowMapType:i.shadowMap.type,toneMapping:et,decodeVideoTexture:yt&&T.map.isVideoTexture===!0&&It.getTransfer(T.map.colorSpace)===qt,decodeVideoTextureEmissive:dn&&T.emissiveMap.isVideoTexture===!0&&It.getTransfer(T.emissiveMap.colorSpace)===qt,premultipliedAlpha:T.premultipliedAlpha,doubleSided:T.side===Fi,flipSided:T.side===fi,useDepthPacking:T.depthPacking>=0,depthPacking:T.depthPacking||0,index0AttributeName:T.index0AttributeName,extensionClipCullDistance:ye&&T.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&T.extensions.multiDraw===!0||He)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:T.customProgramCacheKey()};return k.vertexUv1s=m.has(1),k.vertexUv2s=m.has(2),k.vertexUv3s=m.has(3),m.clear(),k}function y(T){const F=[];if(T.shaderID?F.push(T.shaderID):(F.push(T.customVertexShaderID),F.push(T.customFragmentShaderID)),T.defines!==void 0)for(const z in T.defines)F.push(z),F.push(T.defines[z]);return T.isRawShaderMaterial===!1&&(S(F,T),U(F,T),F.push(i.outputColorSpace)),F.push(T.customProgramCacheKey),F.join()}function S(T,F){T.push(F.precision),T.push(F.outputColorSpace),T.push(F.envMapMode),T.push(F.envMapCubeUVHeight),T.push(F.mapUv),T.push(F.alphaMapUv),T.push(F.lightMapUv),T.push(F.aoMapUv),T.push(F.bumpMapUv),T.push(F.normalMapUv),T.push(F.displacementMapUv),T.push(F.emissiveMapUv),T.push(F.metalnessMapUv),T.push(F.roughnessMapUv),T.push(F.anisotropyMapUv),T.push(F.clearcoatMapUv),T.push(F.clearcoatNormalMapUv),T.push(F.clearcoatRoughnessMapUv),T.push(F.iridescenceMapUv),T.push(F.iridescenceThicknessMapUv),T.push(F.sheenColorMapUv),T.push(F.sheenRoughnessMapUv),T.push(F.specularMapUv),T.push(F.specularColorMapUv),T.push(F.specularIntensityMapUv),T.push(F.transmissionMapUv),T.push(F.thicknessMapUv),T.push(F.combine),T.push(F.fogExp2),T.push(F.sizeAttenuation),T.push(F.morphTargetsCount),T.push(F.morphAttributeCount),T.push(F.numSunLights),T.push(F.numDirLights),T.push(F.numPointLights),T.push(F.numSpotLights),T.push(F.numSpotLightMaps),T.push(F.numHemiLights),T.push(F.numRectAreaLights),T.push(F.numSunLightShadows),T.push(F.numDirLightShadows),T.push(F.numPointLightShadows),T.push(F.numSpotLightShadows),T.push(F.numSpotLightShadowsWithMaps),T.push(F.numLightProbes),T.push(F.shadowMapType),T.push(F.toneMapping),T.push(F.numClippingPlanes),T.push(F.numClipIntersection),T.push(F.depthPacking)}function U(T,F){u.disableAll(),F.instancing&&u.enable(0),F.instancingColor&&u.enable(1),F.instancingMorph&&u.enable(2),F.matcap&&u.enable(3),F.envMap&&u.enable(4),F.normalMapObjectSpace&&u.enable(5),F.normalMapTangentSpace&&u.enable(6),F.clearcoat&&u.enable(7),F.iridescence&&u.enable(8),F.alphaTest&&u.enable(9),F.vertexColors&&u.enable(10),F.vertexAlphas&&u.enable(11),F.vertexUv1s&&u.enable(12),F.vertexUv2s&&u.enable(13),F.vertexUv3s&&u.enable(14),F.vertexTangents&&u.enable(15),F.anisotropy&&u.enable(16),F.alphaHash&&u.enable(17),F.batching&&u.enable(18),F.dispersion&&u.enable(19),F.retroreflection&&u.enable(24),F.batchingColor&&u.enable(20),F.gradientMap&&u.enable(21),F.packedNormalMap&&u.enable(22),F.vertexNormals&&u.enable(23),T.push(u.mask),u.disableAll(),F.fog&&u.enable(0),F.useFog&&u.enable(1),F.flatShading&&u.enable(2),F.logarithmicDepthBuffer&&u.enable(3),F.reversedDepthBuffer&&u.enable(4),F.skinning&&u.enable(5),F.morphTargets&&u.enable(6),F.morphNormals&&u.enable(7),F.morphColors&&u.enable(8),F.premultipliedAlpha&&u.enable(9),F.shadowMapEnabled&&u.enable(10),F.doubleSided&&u.enable(11),F.flipSided&&u.enable(12),F.useDepthPacking&&u.enable(13),F.dithering&&u.enable(14),F.transmission&&u.enable(15),F.sheen&&u.enable(16),F.opaque&&u.enable(17),F.pointsUvs&&u.enable(18),F.decodeVideoTexture&&u.enable(19),F.decodeVideoTextureEmissive&&u.enable(20),F.alphaToCoverage&&u.enable(21),F.numLightProbeGrids>0&&u.enable(22),F.hasPositionAttribute&&u.enable(23),T.push(u.mask)}function V(T){const F=M[T.type];let z;if(F){const B=ar[F];z=UM.clone(B.uniforms)}else z=T.uniforms;return z}function R(T,F){let z=v.get(F);return z!==void 0?++z.usedTimes:(z=new g1(i,F,T,s),p.push(z),v.set(F,z)),z}function L(T){if(--T.usedTimes===0){const F=p.indexOf(T);p[F]=p[p.length-1],p.pop(),v.delete(T.cacheKey),T.destroy()}}function P(T){d.remove(T)}function I(){d.dispose()}return{getParameters:b,getProgramCacheKey:y,getUniforms:V,acquireProgram:R,releaseProgram:L,releaseShaderCache:P,programs:p,dispose:I}}function M1(){let i=new WeakMap;function e(u){return i.has(u)}function t(u){let d=i.get(u);return d===void 0&&(d={},i.set(u,d)),d}function a(u){i.delete(u)}function s(u,d,m){i.get(u)[d]=m}function l(){i=new WeakMap}return{has:e,get:t,remove:a,update:s,dispose:l}}function E1(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.material.id!==e.material.id?i.material.id-e.material.id:i.materialVariant!==e.materialVariant?i.materialVariant-e.materialVariant:i.z!==e.z?i.z-e.z:i.id-e.id}function P0(i,e){return i.groupOrder!==e.groupOrder?i.groupOrder-e.groupOrder:i.renderOrder!==e.renderOrder?i.renderOrder-e.renderOrder:i.z!==e.z?e.z-i.z:i.id-e.id}function L0(){const i=[];let e=0;const t=[],a=[],s=[];function l(){e=0,t.length=0,a.length=0,s.length=0}function u(_){let M=0;return _.isInstancedMesh&&(M+=2),_.isSkinnedMesh&&(M+=1),M}function d(_,M,w,b,y,S){let U=i[e];return U===void 0?(U={id:_.id,object:_,geometry:M,material:w,materialVariant:u(_),groupOrder:b,renderOrder:_.renderOrder,z:y,group:S},i[e]=U):(U.id=_.id,U.object=_,U.geometry=M,U.material=w,U.materialVariant=u(_),U.groupOrder=b,U.renderOrder=_.renderOrder,U.z=y,U.group=S),e++,U}function m(_,M,w,b,y,S,U){U.reversedDepth===!0&&(y=-y);const V=d(_,M,w,b,y,S);w.transmission>0?a.push(V):w.transparent===!0?s.push(V):t.push(V)}function p(_,M,w,b,y,S){const U=d(_,M,w,b,y,S);w.transmission>0?a.unshift(U):w.transparent===!0?s.unshift(U):t.unshift(U)}function v(_,M){t.length>1&&t.sort(_||E1),a.length>1&&a.sort(M||P0),s.length>1&&s.sort(M||P0)}function x(){for(let _=e,M=i.length;_<M;_++){const w=i[_];if(w.id===null)break;w.id=null,w.object=null,w.geometry=null,w.material=null,w.group=null}}return{opaque:t,transmissive:a,transparent:s,init:l,push:m,unshift:p,finish:x,sort:v}}function T1(){let i=new WeakMap;function e(a,s){const l=i.get(a);let u;return l===void 0?(u=new L0,i.set(a,[u])):s>=l.length?(u=new L0,l.push(u)):u=l[s],u}function t(){i=new WeakMap}return{get:e,dispose:t}}function w1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new J,color:new Pt};break;case"SpotLight":t={position:new J,direction:new J,color:new Pt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new J,color:new Pt,distance:0,decay:0};break;case"HemisphereLight":t={direction:new J,skyColor:new Pt,groundColor:new Pt};break;case"RectAreaLight":t={color:new Pt,position:new J,halfWidth:new J,halfHeight:new J};break}return i[e.id]=t,t}}}function A1(){const i={};return{get:function(e){if(i[e.id]!==void 0)return i[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new lt,shadowCameraNear:1,shadowCameraFar:1e3};break}return i[e.id]=t,t}}}let C1=0;function R1(i,e){return(e.castShadow?2:0)-(i.castShadow?2:0)+(e.map?1:0)-(i.map?1:0)}function b1(i){const e=new w1,t=A1(),a={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let p=0;p<9;p++)a.probe.push(new J);const s=new J,l=new un,u=new un;function d(p){let v=0,x=0,_=0;for(let K=0;K<9;K++)a.probe[K].set(0,0,0);let M=0,w=0,b=0,y=0,S=0,U=0,V=0,R=0,L=0,P=0,I=0,T=0,F=0,z=0;p.sort(R1);for(let K=0,ie=p.length;K<ie;K++){const H=p[K],te=H.color,oe=H.intensity,ce=H.distance;let q=null;if(H.shadow&&H.shadow.map&&(H.shadow.map.texture.format===Va?q=H.shadow.map.texture:q=H.shadow.map.depthTexture||H.shadow.map.texture),H.isAmbientLight)v+=te.r*oe,x+=te.g*oe,_+=te.b*oe;else if(H.isLightProbe){for(let W=0;W<9;W++)a.probe[W].addScaledVector(H.sh.coefficients[W],oe);z++}else if(H.isSunLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize.copy(Z.mapSize).multiply(Z.getFrameExtents()),a.sunShadow[w]=D,a.sunShadowMap[w]=q;const se=Z.getViewportCount();for(let Me=0;Me<se;Me++)a.sunShadowMatrix[b+Me]=Z.getMatrix(Me),a.sunShadowCascade[b+Me]=Z._cascadeData[Me];b+=se,w++}a.sun[M]=W,M++}else if(H.isDirectionalLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),H.castShadow){const Z=H.shadow,D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,a.directionalShadow[y]=D,a.directionalShadowMap[y]=q,a.directionalShadowMatrix[y]=H.shadow.matrix,L++}a.directional[y]=W,y++}else if(H.isSpotLight){const W=e.get(H);W.position.setFromMatrixPosition(H.matrixWorld),W.color.copy(te).multiplyScalar(oe),W.distance=ce,W.coneCos=Math.cos(H.angle),W.penumbraCos=Math.cos(H.angle*(1-H.penumbra)),W.decay=H.decay,a.spot[U]=W;const Z=H.shadow;if(H.map&&(a.spotLightMap[T]=H.map,T++,Z.updateMatrices(H),H.castShadow&&F++),a.spotLightMatrix[U]=Z.matrix,H.castShadow){const D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,a.spotShadow[U]=D,a.spotShadowMap[U]=q,I++}U++}else if(H.isRectAreaLight){const W=e.get(H);W.color.copy(te).multiplyScalar(oe),W.halfWidth.set(H.width*.5,0,0),W.halfHeight.set(0,H.height*.5,0),a.rectArea[V]=W,V++}else if(H.isPointLight){const W=e.get(H);if(W.color.copy(H.color).multiplyScalar(H.intensity),W.distance=H.distance,W.decay=H.decay,H.castShadow){const Z=H.shadow,D=t.get(H);D.shadowIntensity=Z.intensity,D.shadowBias=Z.bias,D.shadowNormalBias=Z.normalBias,D.shadowRadius=Z.radius,D.shadowMapSize=Z.mapSize,D.shadowCameraNear=Z.camera.near,D.shadowCameraFar=Z.camera.far,a.pointShadow[S]=D,a.pointShadowMap[S]=q,a.pointShadowMatrix[S]=H.shadow.matrix,P++}a.point[S]=W,S++}else if(H.isHemisphereLight){const W=e.get(H);W.skyColor.copy(H.color).multiplyScalar(oe),W.groundColor.copy(H.groundColor).multiplyScalar(oe),a.hemi[R]=W,R++}}V>0&&(i.has("OES_texture_float_linear")===!0?(a.rectAreaLTC1=Ge.LTC_FLOAT_1,a.rectAreaLTC2=Ge.LTC_FLOAT_2):(a.rectAreaLTC1=Ge.LTC_HALF_1,a.rectAreaLTC2=Ge.LTC_HALF_2)),a.ambient[0]=v,a.ambient[1]=x,a.ambient[2]=_;const B=a.hash;(B.sunLength!==M||B.directionalLength!==y||B.pointLength!==S||B.spotLength!==U||B.rectAreaLength!==V||B.hemiLength!==R||B.numSunShadows!==w||B.numDirectionalShadows!==L||B.numPointShadows!==P||B.numSpotShadows!==I||B.numSpotMaps!==T||B.numLightProbes!==z)&&(a.sun.length=M,a.directional.length=y,a.spot.length=U,a.rectArea.length=V,a.point.length=S,a.hemi.length=R,a.sunShadow.length=w,a.sunShadowMap.length=w,a.sunShadowMatrix.length=b,a.sunShadowCascade.length=b,a.directionalShadow.length=L,a.directionalShadowMap.length=L,a.directionalShadowMatrix.length=L,a.pointShadow.length=P,a.pointShadowMap.length=P,a.pointShadowMatrix.length=P,a.spotShadow.length=I,a.spotShadowMap.length=I,a.spotLightMatrix.length=I+T-F,a.spotLightMap.length=T,a.numSpotLightShadowsWithMaps=F,a.numLightProbes=z,B.sunLength=M,B.directionalLength=y,B.pointLength=S,B.spotLength=U,B.rectAreaLength=V,B.hemiLength=R,B.numSunShadows=w,B.numDirectionalShadows=L,B.numPointShadows=P,B.numSpotShadows=I,B.numSpotMaps=T,B.numLightProbes=z,a.version=C1++)}function m(p,v){let x=0,_=0,M=0,w=0,b=0,y=0;const S=v.matrixWorldInverse;for(let U=0,V=p.length;U<V;U++){const R=p[U];if(R.isSunLight){const L=a.sun[x];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(S),x++}else if(R.isDirectionalLight){const L=a.directional[_];L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),_++}else if(R.isSpotLight){const L=a.spot[w];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),L.direction.setFromMatrixPosition(R.matrixWorld),s.setFromMatrixPosition(R.target.matrixWorld),L.direction.sub(s),L.direction.transformDirection(S),w++}else if(R.isRectAreaLight){const L=a.rectArea[b];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),u.identity(),l.copy(R.matrixWorld),l.premultiply(S),u.extractRotation(l),L.halfWidth.set(R.width*.5,0,0),L.halfHeight.set(0,R.height*.5,0),L.halfWidth.applyMatrix4(u),L.halfHeight.applyMatrix4(u),b++}else if(R.isPointLight){const L=a.point[M];L.position.setFromMatrixPosition(R.matrixWorld),L.position.applyMatrix4(S),M++}else if(R.isHemisphereLight){const L=a.hemi[y];L.direction.setFromMatrixPosition(R.matrixWorld),L.direction.transformDirection(S),y++}}}return{setup:d,setupView:m,state:a}}function D0(i){const e=new b1(i),t=[],a=[],s=[];function l(_){x.camera=_,t.length=0,a.length=0,s.length=0}function u(_){t.push(_)}function d(_){a.push(_)}function m(_){s.push(_)}function p(){e.setup(t)}function v(_){e.setupView(t,_)}const x={lightsArray:t,shadowsArray:a,lightProbeGridArray:s,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:l,state:x,setupLights:p,setupLightsView:v,pushLight:u,pushShadow:d,pushLightProbeGrid:m}}function P1(i){let e=new WeakMap;function t(s,l=0){const u=e.get(s);let d;return u===void 0?(d=new D0(i),e.set(s,[d])):l>=u.length?(d=new D0(i),u.push(d)):d=u[l],d}function a(){e=new WeakMap}return{get:t,dispose:a}}const L1=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,D1=`uniform sampler2D shadow_pass;
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
}`,N1=[new J(1,0,0),new J(-1,0,0),new J(0,1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1)],U1=[new J(0,-1,0),new J(0,-1,0),new J(0,0,1),new J(0,0,-1),new J(0,-1,0),new J(0,-1,0)],N0=new un,bo=new J,hf=new J;function F1(i,e,t){let a=new Uh;const s=new lt,l=new lt,u=new mn,d=new kM,m=new zM,p={},v=t.maxTextureSize,x={[za]:fi,[fi]:za,[Fi]:Fi},_=new fr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new lt},radius:{value:4}},vertexShader:L1,fragmentShader:D1}),M=_.clone();M.defines.HORIZONTAL_PASS=1;const w=new ni;w.setAttribute("position",new hi(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const b=new di(w,_),y=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Ac;let S=this.type;this.render=function(P,I,T){if(y.enabled===!1||y.autoUpdate===!1&&y.needsUpdate===!1||P.length===0)return;this.type===Ey&&(gt("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Ac);const F=i.getRenderTarget(),z=i.getActiveCubeFace(),B=i.getActiveMipmapLevel(),K=i.state;K.setBlending(Ur),K.buffers.depth.getReversed()===!0?K.buffers.color.setClear(0,0,0,0):K.buffers.color.setClear(1,1,1,1),K.buffers.depth.setTest(!0),K.setScissorTest(!1);const ie=S!==this.type;ie&&I.traverse(function(H){H.material&&(Array.isArray(H.material)?H.material.forEach(te=>te.needsUpdate=!0):H.material.needsUpdate=!0)});for(let H=0,te=P.length;H<te;H++){const oe=P[H],ce=oe.shadow;if(ce===void 0){gt("WebGLShadowMap:",oe,"has no shadow.");continue}if(ce.autoUpdate===!1&&ce.needsUpdate===!1)continue;s.copy(ce.mapSize);const q=ce.getFrameExtents();s.multiply(q),l.copy(ce.mapSize),(s.x>v||s.y>v)&&(s.x>v&&(l.x=Math.floor(v/q.x),s.x=l.x*q.x,ce.mapSize.x=l.x),s.y>v&&(l.y=Math.floor(v/q.y),s.y=l.y*q.y,ce.mapSize.y=l.y));const W=i.state.buffers.depth.getReversed();if(ce.camera._reversedDepth=W,ce.map===null||ie===!0){if(ce.map!==null&&(ce.map.depthTexture!==null&&(ce.map.depthTexture.dispose(),ce.map.depthTexture=null),ce.map.dispose()),this.type===Do){if(oe.isPointLight){gt("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ce.map=new Ji(s.x,s.y,{format:Va,type:dr,minFilter:Kn,magFilter:Kn,generateMipmaps:!1}),ce.map.texture.name=oe.name+".shadowMap",ce.map.depthTexture=new Xo(s.x,s.y,or),ce.map.depthTexture.name=oe.name+".shadowMapDepth",ce.map.depthTexture.format=Or,ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Hn,ce.map.depthTexture.magFilter=Hn}else oe.isPointLight?(ce.map=new qv(s.x),ce.map.depthTexture=new DM(s.x,ur)):(ce.map=new Ji(s.x,s.y),ce.map.depthTexture=new Xo(s.x,s.y,ur)),ce.map.depthTexture.name=oe.name+".shadowMap",ce.map.depthTexture.format=Or,this.type===Ac?(ce.map.depthTexture.compareFunction=W?Rh:Ch,ce.map.depthTexture.minFilter=Kn,ce.map.depthTexture.magFilter=Kn):(ce.map.depthTexture.compareFunction=null,ce.map.depthTexture.minFilter=Hn,ce.map.depthTexture.magFilter=Hn);ce.camera.updateProjectionMatrix()}ce.map.isWebGLCubeRenderTarget!==!0&&(ce.map.width!==s.x||ce.map.height!==s.y)&&ce.map.setSize(s.x,s.y);const Z=ce.map.isWebGLCubeRenderTarget?6:ce.getViewportCount();oe.isPointLight!==!0&&ce.updateMatrices(oe,T);for(let D=0;D<Z;D++){const se=ce.getCamera(D);if(oe.isPointLight){const Me=ce.camera,Be=ce.matrix,Xe=oe.distance||Me.far;Xe!==Me.far&&(Me.far=Xe,Me.updateProjectionMatrix()),bo.setFromMatrixPosition(oe.matrixWorld),Me.position.copy(bo),hf.copy(Me.position),hf.add(N1[D]),Me.up.copy(U1[D]),Me.lookAt(hf),Me.updateMatrixWorld(),Be.makeTranslation(-bo.x,-bo.y,-bo.z),N0.multiplyMatrices(Me.projectionMatrix,Me.matrixWorldInverse),ce._frustum.setFromProjectionMatrix(N0,Me.coordinateSystem,Me.reversedDepth)}if(ce.map.isWebGLCubeRenderTarget)i.setRenderTarget(ce.map,D),i.clear();else{D===0&&(i.setRenderTarget(ce.map),i.clear());const Me=ce.getViewport(D);u.set(l.x*Me.x,l.y*Me.y,l.x*Me.z,l.y*Me.w),K.viewport(u)}a=ce.getFrustum(D),R(I,T,se,oe,this.type)}ce.isPointLightShadow!==!0&&this.type===Do&&U(ce,T),ce.needsUpdate=!1}S=this.type,y.needsUpdate=!1,i.setRenderTarget(F,z,B)};function U(P,I){const T=e.update(b);_.defines.VSM_SAMPLES!==P.blurSamples&&(_.defines.VSM_SAMPLES=P.blurSamples,M.defines.VSM_SAMPLES=P.blurSamples,_.needsUpdate=!0,M.needsUpdate=!0),P.mapPass===null?P.mapPass=new Ji(s.x,s.y,{format:Va,type:dr}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),_.uniforms.shadow_pass.value=P.map.depthTexture,_.uniforms.resolution.value.set(P.map.width,P.map.height),_.uniforms.radius.value=P.radius,i.setRenderTarget(P.mapPass),i.clear(),i.renderBufferDirect(I,null,T,_,b,null),M.uniforms.shadow_pass.value=P.mapPass.texture,M.uniforms.resolution.value.set(P.map.width,P.map.height),M.uniforms.radius.value=P.radius,i.setRenderTarget(P.map),i.clear(),i.renderBufferDirect(I,null,T,M,b,null)}function V(P,I,T,F){let z=null;const B=T.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(B!==void 0)z=B;else if(z=T.isPointLight===!0?m:d,i.localClippingEnabled&&I.clipShadows===!0&&Array.isArray(I.clippingPlanes)&&I.clippingPlanes.length!==0||I.displacementMap&&I.displacementScale!==0||I.alphaMap&&I.alphaTest>0||I.map&&I.alphaTest>0||I.alphaToCoverage===!0){const K=z.uuid,ie=I.uuid;let H=p[K];H===void 0&&(H={},p[K]=H);let te=H[ie];te===void 0&&(te=z.clone(),H[ie]=te,I.addEventListener("dispose",L)),z=te}if(z.visible=I.visible,z.wireframe=I.wireframe,F===Do?z.side=I.shadowSide!==null?I.shadowSide:I.side:z.side=I.shadowSide!==null?I.shadowSide:x[I.side],z.alphaMap=I.alphaMap,z.alphaTest=I.alphaToCoverage===!0?.5:I.alphaTest,z.map=I.map,z.clipShadows=I.clipShadows,z.clippingPlanes=I.clippingPlanes,z.clipIntersection=I.clipIntersection,z.displacementMap=I.displacementMap,z.displacementScale=I.displacementScale,z.displacementBias=I.displacementBias,z.wireframeLinewidth=I.wireframeLinewidth,z.linewidth=I.linewidth,T.isPointLight===!0&&z.isMeshDistanceMaterial===!0){const K=i.properties.get(z);K.light=T}return z}function R(P,I,T,F,z){if(P.visible===!1)return;if(P.layers.test(I.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&z===Do)&&(!P.frustumCulled||P.intersectsFrustum(a))){P.modelViewMatrix.multiplyMatrices(T.matrixWorldInverse,P.matrixWorld);const ie=e.update(P),H=P.material;if(Array.isArray(H)){const te=ie.groups;for(let oe=0,ce=te.length;oe<ce;oe++){const q=te[oe],W=H[q.materialIndex];if(W&&W.visible){const Z=V(P,W,F,z);P.onBeforeShadow(i,P,I,T,ie,Z,q),i.renderBufferDirect(T,null,ie,Z,P,q),P.onAfterShadow(i,P,I,T,ie,Z,q)}}}else if(H.visible){const te=V(P,H,F,z);P.onBeforeShadow(i,P,I,T,ie,te,null),i.renderBufferDirect(T,null,ie,te,P,null),P.onAfterShadow(i,P,I,T,ie,te,null)}}const K=P.children;for(let ie=0,H=K.length;ie<H;ie++)R(K[ie],I,T,F,z)}function L(P){P.target.removeEventListener("dispose",L);for(const T in p){const F=p[T],z=P.target.uuid;z in F&&(F[z].dispose(),delete F[z])}}}function O1(i,e){function t(){let X=!1;const Ne=new mn;let _e=null;const Ue=new mn(0,0,0,0);return{setMask:function(ke){_e!==ke&&!X&&(i.colorMask(ke,ke,ke,ke),_e=ke)},setLocked:function(ke){X=ke},setClear:function(ke,ye,et,k,me){me===!0&&(ke*=k,ye*=k,et*=k),Ne.set(ke,ye,et,k),Ue.equals(Ne)===!1&&(i.clearColor(ke,ye,et,k),Ue.copy(Ne))},reset:function(){X=!1,_e=null,Ue.set(-1,0,0,0)}}}function a(){let X=!1,Ne=!1,_e=null,Ue=null,ke=null;return{setReversed:function(ye){if(Ne!==ye){const et=e.get("EXT_clip_control");ye?et.clipControlEXT(et.LOWER_LEFT_EXT,et.ZERO_TO_ONE_EXT):et.clipControlEXT(et.LOWER_LEFT_EXT,et.NEGATIVE_ONE_TO_ONE_EXT),Ne=ye;const k=ke;ke=null,this.setClear(k)}},getReversed:function(){return Ne},setTest:function(ye){ye?pe(i.DEPTH_TEST):Ce(i.DEPTH_TEST)},setMask:function(ye){_e!==ye&&!X&&(i.depthMask(ye),_e=ye)},setFunc:function(ye){if(Ne&&(ye=iM[ye]),Ue!==ye){switch(ye){case yf:i.depthFunc(i.NEVER);break;case Mf:i.depthFunc(i.ALWAYS);break;case Ef:i.depthFunc(i.LESS);break;case Vo:i.depthFunc(i.LEQUAL);break;case Tf:i.depthFunc(i.EQUAL);break;case wf:i.depthFunc(i.GEQUAL);break;case Af:i.depthFunc(i.GREATER);break;case Cf:i.depthFunc(i.NOTEQUAL);break;default:i.depthFunc(i.LEQUAL)}Ue=ye}},setLocked:function(ye){X=ye},setClear:function(ye){ke!==ye&&(ke=ye,Ne&&(ye=1-ye),i.clearDepth(ye))},reset:function(){X=!1,_e=null,Ue=null,ke=null,Ne=!1}}}function s(){let X=!1,Ne=null,_e=null,Ue=null,ke=null,ye=null,et=null,k=null,me=null;return{setTest:function(Se){X||(Se?pe(i.STENCIL_TEST):Ce(i.STENCIL_TEST))},setMask:function(Se){Ne!==Se&&!X&&(i.stencilMask(Se),Ne=Se)},setFunc:function(Se,Fe,pt){(_e!==Se||Ue!==Fe||ke!==pt)&&(i.stencilFunc(Se,Fe,pt),_e=Se,Ue=Fe,ke=pt)},setOp:function(Se,Fe,pt){(ye!==Se||et!==Fe||k!==pt)&&(i.stencilOp(Se,Fe,pt),ye=Se,et=Fe,k=pt)},setLocked:function(Se){X=Se},setClear:function(Se){me!==Se&&(i.clearStencil(Se),me=Se)},reset:function(){X=!1,Ne=null,_e=null,Ue=null,ke=null,ye=null,et=null,k=null,me=null}}}const l=new t,u=new a,d=new s,m=new WeakMap,p=new WeakMap;let v={},x={},_={},M=new WeakMap,w=[],b=null,y=!1,S=null,U=null,V=null,R=null,L=null,P=null,I=null,T=new Pt(0,0,0),F=0,z=!1,B=null,K=null,ie=null,H=null,te=null;const oe=i.getParameter(i.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ce=!1,q=0;const W=i.getParameter(i.VERSION);W.indexOf("WebGL")!==-1?(q=parseFloat(/^WebGL (\d)/.exec(W)[1]),ce=q>=1):W.indexOf("OpenGL ES")!==-1&&(q=parseFloat(/^OpenGL ES (\d)/.exec(W)[1]),ce=q>=2);let Z=null,D={};const se=i.getParameter(i.SCISSOR_BOX),Me=i.getParameter(i.VIEWPORT),Be=new mn().fromArray(se),Xe=new mn().fromArray(Me);function Ye(X,Ne,_e,Ue){const ke=new Uint8Array(4),ye=i.createTexture();i.bindTexture(X,ye),i.texParameteri(X,i.TEXTURE_MIN_FILTER,i.NEAREST),i.texParameteri(X,i.TEXTURE_MAG_FILTER,i.NEAREST);for(let et=0;et<_e;et++)X===i.TEXTURE_3D||X===i.TEXTURE_2D_ARRAY?i.texImage3D(Ne,0,i.RGBA,1,1,Ue,0,i.RGBA,i.UNSIGNED_BYTE,ke):i.texImage2D(Ne+et,0,i.RGBA,1,1,0,i.RGBA,i.UNSIGNED_BYTE,ke);return ye}const le={};le[i.TEXTURE_2D]=Ye(i.TEXTURE_2D,i.TEXTURE_2D,1),le[i.TEXTURE_CUBE_MAP]=Ye(i.TEXTURE_CUBE_MAP,i.TEXTURE_CUBE_MAP_POSITIVE_X,6),le[i.TEXTURE_2D_ARRAY]=Ye(i.TEXTURE_2D_ARRAY,i.TEXTURE_2D_ARRAY,1,1),le[i.TEXTURE_3D]=Ye(i.TEXTURE_3D,i.TEXTURE_3D,1,1),l.setClear(0,0,0,1),u.setClear(1),d.setClear(0),pe(i.DEPTH_TEST),u.setFunc(Vo),Mt(!1),Xt(Lg),pe(i.CULL_FACE),ct(Ur);function pe(X){v[X]!==!0&&(i.enable(X),v[X]=!0)}function Ce(X){v[X]!==!1&&(i.disable(X),v[X]=!1)}function rt(X,Ne){return _[X]!==Ne?(i.bindFramebuffer(X,Ne),_[X]=Ne,X===i.DRAW_FRAMEBUFFER&&(_[i.FRAMEBUFFER]=Ne),X===i.FRAMEBUFFER&&(_[i.DRAW_FRAMEBUFFER]=Ne),!0):!1}function He(X,Ne){let _e=w,Ue=!1;if(X){_e=M.get(Ne),_e===void 0&&(_e=[],M.set(Ne,_e));const ke=X.textures;if(_e.length!==ke.length||_e[0]!==i.COLOR_ATTACHMENT0){for(let ye=0,et=ke.length;ye<et;ye++)_e[ye]=i.COLOR_ATTACHMENT0+ye;_e.length=ke.length,Ue=!0}}else _e[0]!==i.BACK&&(_e[0]=i.BACK,Ue=!0);Ue&&i.drawBuffers(_e)}function yt(X){return b!==X?(i.useProgram(X),b=X,!0):!1}const tn={[bs]:i.FUNC_ADD,[wy]:i.FUNC_SUBTRACT,[Ay]:i.FUNC_REVERSE_SUBTRACT};tn[Cy]=i.MIN,tn[Ry]=i.MAX;const _t={[by]:i.ZERO,[Py]:i.ONE,[Ly]:i.SRC_COLOR,[mv]:i.SRC_ALPHA,[Iy]:i.SRC_ALPHA_SATURATE,[Fy]:i.DST_COLOR,[Ny]:i.DST_ALPHA,[Dy]:i.ONE_MINUS_SRC_COLOR,[gv]:i.ONE_MINUS_SRC_ALPHA,[Oy]:i.ONE_MINUS_DST_COLOR,[Uy]:i.ONE_MINUS_DST_ALPHA,[ky]:i.CONSTANT_COLOR,[zy]:i.ONE_MINUS_CONSTANT_COLOR,[Hy]:i.CONSTANT_ALPHA,[Vy]:i.ONE_MINUS_CONSTANT_ALPHA};function ct(X,Ne,_e,Ue,ke,ye,et,k,me,Se){if(X===Ur){y===!0&&(Ce(i.BLEND),y=!1);return}if(y===!1&&(pe(i.BLEND),y=!0),X!==Ty){if(X!==S||Se!==z){if((U!==bs||L!==bs)&&(i.blendEquation(i.FUNC_ADD),U=bs,L=bs),Se)switch(X){case Oo:i.blendFuncSeparate(i.ONE,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dg:i.blendFunc(i.ONE,i.ONE);break;case Ng:i.blendFuncSeparate(i.ZERO,i.ONE_MINUS_SRC_COLOR,i.ZERO,i.ONE);break;case Ug:i.blendFuncSeparate(i.DST_COLOR,i.ONE_MINUS_SRC_ALPHA,i.ZERO,i.ONE);break;default:kt("WebGLState: Invalid blending: ",X);break}else switch(X){case Oo:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE_MINUS_SRC_ALPHA,i.ONE,i.ONE_MINUS_SRC_ALPHA);break;case Dg:i.blendFuncSeparate(i.SRC_ALPHA,i.ONE,i.ONE,i.ONE);break;case Ng:kt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Ug:kt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:kt("WebGLState: Invalid blending: ",X);break}V=null,R=null,P=null,I=null,T.set(0,0,0),F=0,S=X,z=Se}return}ke=ke||Ne,ye=ye||_e,et=et||Ue,(Ne!==U||ke!==L)&&(i.blendEquationSeparate(tn[Ne],tn[ke]),U=Ne,L=ke),(_e!==V||Ue!==R||ye!==P||et!==I)&&(i.blendFuncSeparate(_t[_e],_t[Ue],_t[ye],_t[et]),V=_e,R=Ue,P=ye,I=et),(k.equals(T)===!1||me!==F)&&(i.blendColor(k.r,k.g,k.b,me),T.copy(k),F=me),S=X,z=!1}function Vt(X,Ne){X.side===Fi?Ce(i.CULL_FACE):pe(i.CULL_FACE);let _e=X.side===fi;Ne&&(_e=!_e),Mt(_e),X.blending===Oo&&X.transparent===!1?ct(Ur):ct(X.blending,X.blendEquation,X.blendSrc,X.blendDst,X.blendEquationAlpha,X.blendSrcAlpha,X.blendDstAlpha,X.blendColor,X.blendAlpha,X.premultipliedAlpha),u.setFunc(X.depthFunc),u.setTest(X.depthTest),u.setMask(X.depthWrite),l.setMask(X.colorWrite);const Ue=X.stencilWrite;d.setTest(Ue),Ue&&(d.setMask(X.stencilWriteMask),d.setFunc(X.stencilFunc,X.stencilRef,X.stencilFuncMask),d.setOp(X.stencilFail,X.stencilZFail,X.stencilZPass)),dn(X.polygonOffset,X.polygonOffsetFactor,X.polygonOffsetUnits),X.alphaToCoverage===!0?pe(i.SAMPLE_ALPHA_TO_COVERAGE):Ce(i.SAMPLE_ALPHA_TO_COVERAGE)}function Mt(X){B!==X&&(X?i.frontFace(i.CW):i.frontFace(i.CCW),B=X)}function Xt(X){X!==yy?(pe(i.CULL_FACE),X!==K&&(X===Lg?i.cullFace(i.BACK):X===My?i.cullFace(i.FRONT):i.cullFace(i.FRONT_AND_BACK))):Ce(i.CULL_FACE),K=X}function Dt(X){X!==ie&&(ce&&i.lineWidth(X),ie=X)}function dn(X,Ne,_e){X?(pe(i.POLYGON_OFFSET_FILL),(H!==Ne||te!==_e)&&(H=Ne,te=_e,u.getReversed()&&(Ne=-Ne),i.polygonOffset(Ne,_e))):Ce(i.POLYGON_OFFSET_FILL)}function Nt(X){X?pe(i.SCISSOR_TEST):Ce(i.SCISSOR_TEST)}function Zt(X){X===void 0&&(X=i.TEXTURE0+oe-1),Z!==X&&(i.activeTexture(X),Z=X)}function Y(X,Ne,_e){_e===void 0&&(Z===null?_e=i.TEXTURE0+oe-1:_e=Z);let Ue=D[_e];Ue===void 0&&(Ue={type:void 0,texture:void 0},D[_e]=Ue),(Ue.type!==X||Ue.texture!==Ne)&&(Z!==_e&&(i.activeTexture(_e),Z=_e),i.bindTexture(X,Ne||le[X]),Ue.type=X,Ue.texture=Ne)}function _n(){const X=D[Z];X!==void 0&&X.type!==void 0&&(i.bindTexture(X.type,null),X.type=void 0,X.texture=void 0)}function Rt(){try{i.compressedTexImage2D(...arguments)}catch(X){kt("WebGLState:",X)}}function N(){try{i.compressedTexImage3D(...arguments)}catch(X){kt("WebGLState:",X)}}function E(){try{i.texSubImage2D(...arguments)}catch(X){kt("WebGLState:",X)}}function ee(){try{i.texSubImage3D(...arguments)}catch(X){kt("WebGLState:",X)}}function ue(){try{i.compressedTexSubImage2D(...arguments)}catch(X){kt("WebGLState:",X)}}function ge(){try{i.compressedTexSubImage3D(...arguments)}catch(X){kt("WebGLState:",X)}}function we(){try{i.texStorage2D(...arguments)}catch(X){kt("WebGLState:",X)}}function De(){try{i.texStorage3D(...arguments)}catch(X){kt("WebGLState:",X)}}function ve(){try{i.texImage2D(...arguments)}catch(X){kt("WebGLState:",X)}}function xe(){try{i.texImage3D(...arguments)}catch(X){kt("WebGLState:",X)}}function Re(X){return x[X]!==void 0?x[X]:i.getParameter(X)}function Qe(X,Ne){x[X]!==Ne&&(i.pixelStorei(X,Ne),x[X]=Ne)}function Oe(X){Be.equals(X)===!1&&(i.scissor(X.x,X.y,X.z,X.w),Be.copy(X))}function Le(X){Xe.equals(X)===!1&&(i.viewport(X.x,X.y,X.z,X.w),Xe.copy(X))}function Ke(X,Ne){let _e=p.get(Ne);_e===void 0&&(_e=new WeakMap,p.set(Ne,_e));let Ue=_e.get(X);Ue===void 0&&(Ue=i.getUniformBlockIndex(Ne,X.name),_e.set(X,Ue))}function st(X,Ne){const Ue=p.get(Ne).get(X);m.get(Ne)!==Ue&&(i.uniformBlockBinding(Ne,Ue,X.__bindingPointIndex),m.set(Ne,Ue))}function ut(){i.disable(i.BLEND),i.disable(i.CULL_FACE),i.disable(i.DEPTH_TEST),i.disable(i.POLYGON_OFFSET_FILL),i.disable(i.SCISSOR_TEST),i.disable(i.STENCIL_TEST),i.disable(i.SAMPLE_ALPHA_TO_COVERAGE),i.blendEquation(i.FUNC_ADD),i.blendFunc(i.ONE,i.ZERO),i.blendFuncSeparate(i.ONE,i.ZERO,i.ONE,i.ZERO),i.blendColor(0,0,0,0),i.colorMask(!0,!0,!0,!0),i.clearColor(0,0,0,0),i.depthMask(!0),i.depthFunc(i.LESS),u.setReversed(!1),i.clearDepth(1),i.stencilMask(4294967295),i.stencilFunc(i.ALWAYS,0,4294967295),i.stencilOp(i.KEEP,i.KEEP,i.KEEP),i.clearStencil(0),i.cullFace(i.BACK),i.frontFace(i.CCW),i.polygonOffset(0,0),i.activeTexture(i.TEXTURE0),i.bindFramebuffer(i.FRAMEBUFFER,null),i.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),i.bindFramebuffer(i.READ_FRAMEBUFFER,null),i.useProgram(null),i.lineWidth(1),i.scissor(0,0,i.canvas.width,i.canvas.height),i.viewport(0,0,i.canvas.width,i.canvas.height),i.pixelStorei(i.PACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_ALIGNMENT,4),i.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,!1),i.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),i.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,i.BROWSER_DEFAULT_WEBGL),i.pixelStorei(i.PACK_ROW_LENGTH,0),i.pixelStorei(i.PACK_SKIP_PIXELS,0),i.pixelStorei(i.PACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_ROW_LENGTH,0),i.pixelStorei(i.UNPACK_IMAGE_HEIGHT,0),i.pixelStorei(i.UNPACK_SKIP_PIXELS,0),i.pixelStorei(i.UNPACK_SKIP_ROWS,0),i.pixelStorei(i.UNPACK_SKIP_IMAGES,0),v={},x={},Z=null,D={},_={},M=new WeakMap,w=[],b=null,y=!1,S=null,U=null,V=null,R=null,L=null,P=null,I=null,T=new Pt(0,0,0),F=0,z=!1,B=null,K=null,ie=null,H=null,te=null,Be.set(0,0,i.canvas.width,i.canvas.height),Xe.set(0,0,i.canvas.width,i.canvas.height),l.reset(),u.reset(),d.reset()}return{buffers:{color:l,depth:u,stencil:d},enable:pe,disable:Ce,bindFramebuffer:rt,drawBuffers:He,useProgram:yt,setBlending:ct,setMaterial:Vt,setFlipSided:Mt,setCullFace:Xt,setLineWidth:Dt,setPolygonOffset:dn,setScissorTest:Nt,activeTexture:Zt,bindTexture:Y,unbindTexture:_n,compressedTexImage2D:Rt,compressedTexImage3D:N,texImage2D:ve,texImage3D:xe,pixelStorei:Qe,getParameter:Re,updateUBOMapping:Ke,uniformBlockBinding:st,texStorage2D:we,texStorage3D:De,texSubImage2D:E,texSubImage3D:ee,compressedTexSubImage2D:ue,compressedTexSubImage3D:ge,scissor:Oe,viewport:Le,reset:ut}}function I1(i,e,t,a,s,l,u){const d=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,m=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),p=new lt,v=new WeakMap,x=new Set;let _;const M=new WeakMap;let w=!1;try{w=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function b(N,E){return w?new OffscreenCanvas(N,E):Hc("canvas")}function y(N,E,ee){let ue=1;const ge=Rt(N);if((ge.width>ee||ge.height>ee)&&(ue=ee/Math.max(ge.width,ge.height)),ue<1)if(typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&N instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&N instanceof ImageBitmap||typeof VideoFrame<"u"&&N instanceof VideoFrame){const we=Math.floor(ue*ge.width),De=Math.floor(ue*ge.height);_===void 0&&(_=b(we,De));const ve=E?b(we,De):_;return ve.width=we,ve.height=De,ve.getContext("2d").drawImage(N,0,0,we,De),gt("WebGLRenderer: Texture has been resized from ("+ge.width+"x"+ge.height+") to ("+we+"x"+De+")."),ve}else return"data"in N&&gt("WebGLRenderer: Image in DataTexture is too big ("+ge.width+"x"+ge.height+")."),N;return N}function S(N){return N.generateMipmaps}function U(N){i.generateMipmap(N)}function V(N){return N.isWebGLCubeRenderTarget?i.TEXTURE_CUBE_MAP:N.isWebGL3DRenderTarget?i.TEXTURE_3D:N.isWebGLArrayRenderTarget||N.isCompressedArrayTexture?i.TEXTURE_2D_ARRAY:i.TEXTURE_2D}function R(N,E,ee,ue,ge,we=!1){if(N!==null){if(i[N]!==void 0)return i[N];gt("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+N+"'")}let De;ue&&(De=e.get("EXT_texture_norm16"),De||gt("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ve=E;if(E===i.RED&&(ee===i.FLOAT&&(ve=i.R32F),ee===i.HALF_FLOAT&&(ve=i.R16F),ee===i.UNSIGNED_BYTE&&(ve=i.R8),ee===i.UNSIGNED_SHORT&&De&&(ve=De.R16_EXT),ee===i.SHORT&&De&&(ve=De.R16_SNORM_EXT)),E===i.RED_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ve=i.R8UI),ee===i.UNSIGNED_SHORT&&(ve=i.R16UI),ee===i.UNSIGNED_INT&&(ve=i.R32UI),ee===i.BYTE&&(ve=i.R8I),ee===i.SHORT&&(ve=i.R16I),ee===i.INT&&(ve=i.R32I)),E===i.RG&&(ee===i.FLOAT&&(ve=i.RG32F),ee===i.HALF_FLOAT&&(ve=i.RG16F),ee===i.UNSIGNED_BYTE&&(ve=i.RG8),ee===i.UNSIGNED_SHORT&&De&&(ve=De.RG16_EXT),ee===i.SHORT&&De&&(ve=De.RG16_SNORM_EXT)),E===i.RG_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ve=i.RG8UI),ee===i.UNSIGNED_SHORT&&(ve=i.RG16UI),ee===i.UNSIGNED_INT&&(ve=i.RG32UI),ee===i.BYTE&&(ve=i.RG8I),ee===i.SHORT&&(ve=i.RG16I),ee===i.INT&&(ve=i.RG32I)),E===i.RGB_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ve=i.RGB8UI),ee===i.UNSIGNED_SHORT&&(ve=i.RGB16UI),ee===i.UNSIGNED_INT&&(ve=i.RGB32UI),ee===i.BYTE&&(ve=i.RGB8I),ee===i.SHORT&&(ve=i.RGB16I),ee===i.INT&&(ve=i.RGB32I)),E===i.RGBA_INTEGER&&(ee===i.UNSIGNED_BYTE&&(ve=i.RGBA8UI),ee===i.UNSIGNED_SHORT&&(ve=i.RGBA16UI),ee===i.UNSIGNED_INT&&(ve=i.RGBA32UI),ee===i.BYTE&&(ve=i.RGBA8I),ee===i.SHORT&&(ve=i.RGBA16I),ee===i.INT&&(ve=i.RGBA32I)),E===i.RGB&&(ee===i.UNSIGNED_SHORT&&De&&(ve=De.RGB16_EXT),ee===i.SHORT&&De&&(ve=De.RGB16_SNORM_EXT),ee===i.UNSIGNED_INT_5_9_9_9_REV&&(ve=i.RGB9_E5),ee===i.UNSIGNED_INT_10F_11F_11F_REV&&(ve=i.R11F_G11F_B10F)),E===i.RGBA){const xe=we?zc:It.getTransfer(ge);ee===i.FLOAT&&(ve=i.RGBA32F),ee===i.HALF_FLOAT&&(ve=i.RGBA16F),ee===i.UNSIGNED_BYTE&&(ve=xe===qt?i.SRGB8_ALPHA8:i.RGBA8),ee===i.UNSIGNED_SHORT&&De&&(ve=De.RGBA16_EXT),ee===i.SHORT&&De&&(ve=De.RGBA16_SNORM_EXT),ee===i.UNSIGNED_SHORT_4_4_4_4&&(ve=i.RGBA4),ee===i.UNSIGNED_SHORT_5_5_5_1&&(ve=i.RGB5_A1)}return(ve===i.R16F||ve===i.R32F||ve===i.RG16F||ve===i.RG32F||ve===i.RGBA16F||ve===i.RGBA32F)&&e.get("EXT_color_buffer_float"),ve}function L(N,E){let ee;return N?E===null||E===ur||E===Bo?ee=i.DEPTH24_STENCIL8:E===or?ee=i.DEPTH32F_STENCIL8:E===Go&&(ee=i.DEPTH24_STENCIL8,gt("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):E===null||E===ur||E===Bo?ee=i.DEPTH_COMPONENT24:E===or?ee=i.DEPTH_COMPONENT32F:E===Go&&(ee=i.DEPTH_COMPONENT16),ee}function P(N,E){return S(N)===!0||N.isFramebufferTexture&&N.minFilter!==Hn&&N.minFilter!==Kn?Math.log2(Math.max(E.width,E.height))+1:N.mipmaps!==void 0&&N.mipmaps.length>0?N.mipmaps.length:N.isCompressedTexture&&Array.isArray(N.image)?E.mipmaps.length:1}function I(N){const E=N.target;E.removeEventListener("dispose",I),F(E),E.isVideoTexture&&v.delete(E),E.isHTMLTexture&&x.delete(E)}function T(N){const E=N.target;E.removeEventListener("dispose",T),B(E)}function F(N){const E=a.get(N);if(E.__webglInit===void 0)return;const ee=N.source,ue=M.get(ee);if(ue){const ge=ue[E.__cacheKey];ge.usedTimes--,ge.usedTimes===0&&z(N),Object.keys(ue).length===0&&M.delete(ee)}a.remove(N)}function z(N){const E=a.get(N);i.deleteTexture(E.__webglTexture);const ee=N.source,ue=M.get(ee);delete ue[E.__cacheKey],u.memory.textures--}function B(N){const E=a.get(N);if(N.depthTexture&&(N.depthTexture.dispose(),a.remove(N.depthTexture)),N.isWebGLCubeRenderTarget)for(let ue=0;ue<6;ue++){if(Array.isArray(E.__webglFramebuffer[ue]))for(let ge=0;ge<E.__webglFramebuffer[ue].length;ge++)i.deleteFramebuffer(E.__webglFramebuffer[ue][ge]);else i.deleteFramebuffer(E.__webglFramebuffer[ue]);E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer[ue])}else{if(Array.isArray(E.__webglFramebuffer))for(let ue=0;ue<E.__webglFramebuffer.length;ue++)i.deleteFramebuffer(E.__webglFramebuffer[ue]);else i.deleteFramebuffer(E.__webglFramebuffer);if(E.__webglDepthbuffer&&i.deleteRenderbuffer(E.__webglDepthbuffer),E.__webglMultisampledFramebuffer&&i.deleteFramebuffer(E.__webglMultisampledFramebuffer),E.__webglColorRenderbuffer)for(let ue=0;ue<E.__webglColorRenderbuffer.length;ue++)E.__webglColorRenderbuffer[ue]&&i.deleteRenderbuffer(E.__webglColorRenderbuffer[ue]);E.__webglDepthRenderbuffer&&i.deleteRenderbuffer(E.__webglDepthRenderbuffer)}const ee=N.textures;for(let ue=0,ge=ee.length;ue<ge;ue++){const we=a.get(ee[ue]);we.__webglTexture&&(i.deleteTexture(we.__webglTexture),u.memory.textures--),a.remove(ee[ue])}a.remove(N)}let K=0;function ie(){K=0}function H(){return K}function te(N){K=N}function oe(){const N=K;return N>=s.maxTextures&&gt("WebGLTextures: Trying to use "+(N+1)+" texture units while this GPU supports only "+s.maxTextures),K+=1,N}function ce(N){const E=[];return E.push(N.wrapS),E.push(N.wrapT),E.push(N.wrapR||0),E.push(N.magFilter),E.push(N.minFilter),E.push(N.anisotropy),E.push(N.internalFormat),E.push(N.format),E.push(N.type),E.push(N.generateMipmaps),E.push(N.premultiplyAlpha),E.push(N.flipY),E.push(N.unpackAlignment),E.push(N.colorSpace),E.join()}function q(N,E){const ee=a.get(N);if(N.isVideoTexture&&Y(N),N.isRenderTargetTexture===!1&&N.isExternalTexture!==!0&&N.version>0&&ee.__version!==N.version){const ue=N.image;if(ue===null)gt("WebGLRenderer: Texture marked for update but no image data found.");else if(ue.complete===!1)gt("WebGLRenderer: Texture marked for update but image is incomplete");else{Ce(ee,N,E);return}}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D,ee.__webglTexture,i.TEXTURE0+E)}function W(N,E){const ee=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Ce(ee,N,E);return}else N.isExternalTexture&&(ee.__webglTexture=N.sourceTexture?N.sourceTexture:null);t.bindTexture(i.TEXTURE_2D_ARRAY,ee.__webglTexture,i.TEXTURE0+E)}function Z(N,E){const ee=a.get(N);if(N.isRenderTargetTexture===!1&&N.version>0&&ee.__version!==N.version){Ce(ee,N,E);return}t.bindTexture(i.TEXTURE_3D,ee.__webglTexture,i.TEXTURE0+E)}function D(N,E){const ee=a.get(N);if(N.isCubeDepthTexture!==!0&&N.version>0&&ee.__version!==N.version){rt(ee,N,E);return}t.bindTexture(i.TEXTURE_CUBE_MAP,ee.__webglTexture,i.TEXTURE0+E)}const se={[Rf]:i.REPEAT,[Dr]:i.CLAMP_TO_EDGE,[bf]:i.MIRRORED_REPEAT},Me={[Hn]:i.NEAREST,[Wy]:i.NEAREST_MIPMAP_NEAREST,[Kl]:i.NEAREST_MIPMAP_LINEAR,[Kn]:i.LINEAR,[Fd]:i.LINEAR_MIPMAP_NEAREST,[Fa]:i.LINEAR_MIPMAP_LINEAR},Be={[qy]:i.NEVER,[Qy]:i.ALWAYS,[jy]:i.LESS,[Ch]:i.LEQUAL,[Ky]:i.EQUAL,[Rh]:i.GEQUAL,[Zy]:i.GREATER,[Jy]:i.NOTEQUAL};function Xe(N,E){if(E.type===or&&e.has("OES_texture_float_linear")===!1&&(E.magFilter===Kn||E.magFilter===Fd||E.magFilter===Kl||E.magFilter===Fa||E.minFilter===Kn||E.minFilter===Fd||E.minFilter===Kl||E.minFilter===Fa)&&gt("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),i.texParameteri(N,i.TEXTURE_WRAP_S,se[E.wrapS]),i.texParameteri(N,i.TEXTURE_WRAP_T,se[E.wrapT]),(N===i.TEXTURE_3D||N===i.TEXTURE_2D_ARRAY)&&i.texParameteri(N,i.TEXTURE_WRAP_R,se[E.wrapR]),i.texParameteri(N,i.TEXTURE_MAG_FILTER,Me[E.magFilter]),i.texParameteri(N,i.TEXTURE_MIN_FILTER,Me[E.minFilter]),E.compareFunction&&(i.texParameteri(N,i.TEXTURE_COMPARE_MODE,i.COMPARE_REF_TO_TEXTURE),i.texParameteri(N,i.TEXTURE_COMPARE_FUNC,Be[E.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(E.magFilter===Hn||E.minFilter!==Kl&&E.minFilter!==Fa||E.type===or&&e.has("OES_texture_float_linear")===!1)return;if(E.anisotropy>1||a.get(E).__currentAnisotropy){const ee=e.get("EXT_texture_filter_anisotropic");i.texParameterf(N,ee.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(E.anisotropy,s.getMaxAnisotropy())),a.get(E).__currentAnisotropy=E.anisotropy}}}function Ye(N,E){let ee=!1;N.__webglInit===void 0&&(N.__webglInit=!0,E.addEventListener("dispose",I));const ue=E.source;let ge=M.get(ue);ge===void 0&&(ge={},M.set(ue,ge));const we=ce(E);if(we!==N.__cacheKey){ge[we]===void 0&&(ge[we]={texture:i.createTexture(),usedTimes:0},u.memory.textures++,ee=!0),ge[we].usedTimes++;const De=ge[N.__cacheKey];De!==void 0&&(ge[N.__cacheKey].usedTimes--,De.usedTimes===0&&z(E)),N.__cacheKey=we,N.__webglTexture=ge[we].texture}return ee}function le(N,E,ee){return Math.floor(Math.floor(N/ee)/E)}function pe(N,E,ee,ue){const we=N.updateRanges;if(we.length===0)t.texSubImage2D(i.TEXTURE_2D,0,0,0,E.width,E.height,ee,ue,E.data);else{we.sort((Qe,Oe)=>Qe.start-Oe.start);let De=0;for(let Qe=1;Qe<we.length;Qe++){const Oe=we[De],Le=we[Qe],Ke=Oe.start+Oe.count,st=le(Le.start,E.width,4),ut=le(Oe.start,E.width,4);Le.start<=Ke+1&&st===ut&&le(Le.start+Le.count-1,E.width,4)===st?Oe.count=Math.max(Oe.count,Le.start+Le.count-Oe.start):(++De,we[De]=Le)}we.length=De+1;const ve=t.getParameter(i.UNPACK_ROW_LENGTH),xe=t.getParameter(i.UNPACK_SKIP_PIXELS),Re=t.getParameter(i.UNPACK_SKIP_ROWS);t.pixelStorei(i.UNPACK_ROW_LENGTH,E.width);for(let Qe=0,Oe=we.length;Qe<Oe;Qe++){const Le=we[Qe],Ke=Math.floor(Le.start/4),st=Math.ceil(Le.count/4),ut=Ke%E.width,X=Math.floor(Ke/E.width),Ne=st,_e=1;t.pixelStorei(i.UNPACK_SKIP_PIXELS,ut),t.pixelStorei(i.UNPACK_SKIP_ROWS,X),t.texSubImage2D(i.TEXTURE_2D,0,ut,X,Ne,_e,ee,ue,E.data)}N.clearUpdateRanges(),t.pixelStorei(i.UNPACK_ROW_LENGTH,ve),t.pixelStorei(i.UNPACK_SKIP_PIXELS,xe),t.pixelStorei(i.UNPACK_SKIP_ROWS,Re)}}function Ce(N,E,ee){let ue=i.TEXTURE_2D;(E.isDataArrayTexture||E.isCompressedArrayTexture)&&(ue=i.TEXTURE_2D_ARRAY),E.isData3DTexture&&(ue=i.TEXTURE_3D);const ge=Ye(N,E),we=E.source;t.bindTexture(ue,N.__webglTexture,i.TEXTURE0+ee);const De=a.get(we);if(we.version!==De.__version||ge===!0){if(t.activeTexture(i.TEXTURE0+ee),(typeof ImageBitmap<"u"&&E.image instanceof ImageBitmap)===!1){const _e=It.getPrimaries(It.workingColorSpace),Ue=E.colorSpace===ca?null:It.getPrimaries(E.colorSpace),ke=E.colorSpace===ca||_e===Ue?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,ke)}t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment);let xe=y(E.image,!1,s.maxTextureSize);xe=_n(E,xe);const Re=l.convert(E.format,E.colorSpace),Qe=l.convert(E.type);let Oe=R(E.internalFormat,Re,Qe,E.normalized,E.colorSpace,E.isVideoTexture);Xe(ue,E);let Le;const Ke=E.mipmaps,st=E.isVideoTexture!==!0,ut=De.__version===void 0||ge===!0,X=we.dataReady,Ne=P(E,xe);if(E.isDepthTexture)Oe=L(E.format===Oa,E.type),ut&&(st?t.texStorage2D(i.TEXTURE_2D,1,Oe,xe.width,xe.height):t.texImage2D(i.TEXTURE_2D,0,Oe,xe.width,xe.height,0,Re,Qe,null));else if(E.isDataTexture)if(Ke.length>0){st&&ut&&t.texStorage2D(i.TEXTURE_2D,Ne,Oe,Ke[0].width,Ke[0].height);for(let _e=0,Ue=Ke.length;_e<Ue;_e++)Le=Ke[_e],st?X&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Le.width,Le.height,Re,Qe,Le.data):t.texImage2D(i.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,Re,Qe,Le.data);E.generateMipmaps=!1}else st?(ut&&t.texStorage2D(i.TEXTURE_2D,Ne,Oe,xe.width,xe.height),X&&pe(E,xe,Re,Qe)):t.texImage2D(i.TEXTURE_2D,0,Oe,xe.width,xe.height,0,Re,Qe,xe.data);else if(E.isCompressedTexture)if(E.isCompressedArrayTexture){st&&ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Oe,Ke[0].width,Ke[0].height,xe.depth);for(let _e=0,Ue=Ke.length;_e<Ue;_e++)if(Le=Ke[_e],E.format!==Ki)if(Re!==null)if(st){if(X)if(E.layerUpdates.size>0){const ke=d0(Le.width,Le.height,E.format,E.type);for(const ye of E.layerUpdates){const et=Le.data.subarray(ye*ke/Le.data.BYTES_PER_ELEMENT,(ye+1)*ke/Le.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,ye,Le.width,Le.height,1,Re,et)}}else t.compressedTexSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,xe.depth,Re,Le.data)}else t.compressedTexImage3D(i.TEXTURE_2D_ARRAY,_e,Oe,Le.width,Le.height,xe.depth,0,Le.data,0,0);else gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else st?X&&t.texSubImage3D(i.TEXTURE_2D_ARRAY,_e,0,0,0,Le.width,Le.height,xe.depth,Re,Qe,Le.data):t.texImage3D(i.TEXTURE_2D_ARRAY,_e,Oe,Le.width,Le.height,xe.depth,0,Re,Qe,Le.data);E.layerUpdates.size>0&&E.clearLayerUpdates()}else{st&&ut&&t.texStorage2D(i.TEXTURE_2D,Ne,Oe,Ke[0].width,Ke[0].height);for(let _e=0,Ue=Ke.length;_e<Ue;_e++)Le=Ke[_e],E.format!==Ki?Re!==null?st?X&&t.compressedTexSubImage2D(i.TEXTURE_2D,_e,0,0,Le.width,Le.height,Re,Le.data):t.compressedTexImage2D(i.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,Le.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):st?X&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Le.width,Le.height,Re,Qe,Le.data):t.texImage2D(i.TEXTURE_2D,_e,Oe,Le.width,Le.height,0,Re,Qe,Le.data)}else if(E.isDataArrayTexture)if(st){if(ut&&t.texStorage3D(i.TEXTURE_2D_ARRAY,Ne,Oe,xe.width,xe.height,xe.depth),X)if(E.layerUpdates.size>0){const _e=d0(xe.width,xe.height,E.format,E.type);for(const Ue of E.layerUpdates){const ke=xe.data.subarray(Ue*_e/xe.data.BYTES_PER_ELEMENT,(Ue+1)*_e/xe.data.BYTES_PER_ELEMENT);t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,Ue,xe.width,xe.height,1,Re,Qe,ke)}E.clearLayerUpdates()}else t.texSubImage3D(i.TEXTURE_2D_ARRAY,0,0,0,0,xe.width,xe.height,xe.depth,Re,Qe,xe.data)}else t.texImage3D(i.TEXTURE_2D_ARRAY,0,Oe,xe.width,xe.height,xe.depth,0,Re,Qe,xe.data);else if(E.isData3DTexture)st?(ut&&t.texStorage3D(i.TEXTURE_3D,Ne,Oe,xe.width,xe.height,xe.depth),X&&t.texSubImage3D(i.TEXTURE_3D,0,0,0,0,xe.width,xe.height,xe.depth,Re,Qe,xe.data)):t.texImage3D(i.TEXTURE_3D,0,Oe,xe.width,xe.height,xe.depth,0,Re,Qe,xe.data);else if(E.isFramebufferTexture){if(ut)if(st)t.texStorage2D(i.TEXTURE_2D,Ne,Oe,xe.width,xe.height);else{let _e=xe.width,Ue=xe.height;for(let ke=0;ke<Ne;ke++)t.texImage2D(i.TEXTURE_2D,ke,Oe,_e,Ue,0,Re,Qe,null),_e>>=1,Ue>>=1}}else if(E.isHTMLTexture){if("texElementImage2D"in i){const _e=i.canvas;if(_e.hasAttribute("layoutsubtree")||_e.setAttribute("layoutsubtree","true"),xe.parentNode!==_e){_e.appendChild(xe),x.add(E),_e.onpaint=Ue=>{const ke=Ue.changedElements;for(const ye of x)ke.includes(ye.image)&&(ye.needsUpdate=!0)},_e.requestPaint();return}if(i.texElementImage2D.length===3)i.texElementImage2D(i.TEXTURE_2D,i.RGBA8,xe);else{const ke=i.RGBA,ye=i.RGBA,et=i.UNSIGNED_BYTE;i.texElementImage2D(i.TEXTURE_2D,0,ke,ye,et,xe)}i.texParameteri(i.TEXTURE_2D,i.TEXTURE_MIN_FILTER,i.LINEAR),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_S,i.CLAMP_TO_EDGE),i.texParameteri(i.TEXTURE_2D,i.TEXTURE_WRAP_T,i.CLAMP_TO_EDGE)}}else if(Ke.length>0){if(st&&ut){const _e=Rt(Ke[0]);t.texStorage2D(i.TEXTURE_2D,Ne,Oe,_e.width,_e.height)}for(let _e=0,Ue=Ke.length;_e<Ue;_e++)Le=Ke[_e],st?X&&t.texSubImage2D(i.TEXTURE_2D,_e,0,0,Re,Qe,Le):t.texImage2D(i.TEXTURE_2D,_e,Oe,Re,Qe,Le);E.generateMipmaps=!1}else if(st){if(ut){const _e=Rt(xe);t.texStorage2D(i.TEXTURE_2D,Ne,Oe,_e.width,_e.height)}X&&t.texSubImage2D(i.TEXTURE_2D,0,0,0,Re,Qe,xe)}else t.texImage2D(i.TEXTURE_2D,0,Oe,Re,Qe,xe);S(E)&&U(ue),De.__version=we.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function rt(N,E,ee){if(E.image.length!==6)return;const ue=Ye(N,E),ge=E.source;t.bindTexture(i.TEXTURE_CUBE_MAP,N.__webglTexture,i.TEXTURE0+ee);const we=a.get(ge);if(ge.version!==we.__version||ue===!0){t.activeTexture(i.TEXTURE0+ee);const De=It.getPrimaries(It.workingColorSpace),ve=E.colorSpace===ca?null:It.getPrimaries(E.colorSpace),xe=E.colorSpace===ca||De===ve?i.NONE:i.BROWSER_DEFAULT_WEBGL;t.pixelStorei(i.UNPACK_FLIP_Y_WEBGL,E.flipY),t.pixelStorei(i.UNPACK_PREMULTIPLY_ALPHA_WEBGL,E.premultiplyAlpha),t.pixelStorei(i.UNPACK_ALIGNMENT,E.unpackAlignment),t.pixelStorei(i.UNPACK_COLORSPACE_CONVERSION_WEBGL,xe);const Re=E.isCompressedTexture||E.image[0].isCompressedTexture,Qe=E.image[0]&&E.image[0].isDataTexture,Oe=[];for(let ye=0;ye<6;ye++)!Re&&!Qe?Oe[ye]=y(E.image[ye],!0,s.maxCubemapSize):Oe[ye]=Qe?E.image[ye].image:E.image[ye],Oe[ye]=_n(E,Oe[ye]);const Le=Oe[0],Ke=l.convert(E.format,E.colorSpace),st=l.convert(E.type),ut=R(E.internalFormat,Ke,st,E.normalized,E.colorSpace),X=E.isVideoTexture!==!0,Ne=we.__version===void 0||ue===!0,_e=ge.dataReady;let Ue=P(E,Le);Xe(i.TEXTURE_CUBE_MAP,E);let ke;if(Re){X&&Ne&&t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ut,Le.width,Le.height);for(let ye=0;ye<6;ye++){ke=Oe[ye].mipmaps;for(let et=0;et<ke.length;et++){const k=ke[et];E.format!==Ki?Ke!==null?X?_e&&t.compressedTexSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,0,0,k.width,k.height,Ke,k.data):t.compressedTexImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,ut,k.width,k.height,0,k.data):gt("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):X?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,0,0,k.width,k.height,Ke,st,k.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et,ut,k.width,k.height,0,Ke,st,k.data)}}}else{if(ke=E.mipmaps,X&&Ne){ke.length>0&&Ue++;const ye=Rt(Oe[0]);t.texStorage2D(i.TEXTURE_CUBE_MAP,Ue,ut,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(Qe){X?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Oe[ye].width,Oe[ye].height,Ke,st,Oe[ye].data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ut,Oe[ye].width,Oe[ye].height,0,Ke,st,Oe[ye].data);for(let et=0;et<ke.length;et++){const me=ke[et].image[ye].image;X?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,0,0,me.width,me.height,Ke,st,me.data):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,ut,me.width,me.height,0,Ke,st,me.data)}}else{X?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ke,st,Oe[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,ut,Ke,st,Oe[ye]);for(let et=0;et<ke.length;et++){const k=ke[et];X?_e&&t.texSubImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,0,0,Ke,st,k.image[ye]):t.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+ye,et+1,ut,Ke,st,k.image[ye])}}}S(E)&&U(i.TEXTURE_CUBE_MAP),we.__version=ge.version,E.onUpdate&&E.onUpdate(E)}N.__version=E.version}function He(N,E,ee,ue,ge,we){const De=l.convert(ee.format,ee.colorSpace),ve=l.convert(ee.type),xe=R(ee.internalFormat,De,ve,ee.normalized,ee.colorSpace),Re=a.get(E),Qe=a.get(ee);if(Qe.__renderTarget=E,!Re.__hasExternalTextures){const Oe=Math.max(1,E.width>>we),Le=Math.max(1,E.height>>we);ge===i.TEXTURE_3D||ge===i.TEXTURE_2D_ARRAY?t.texImage3D(ge,we,xe,Oe,Le,E.depth,0,De,ve,null):t.texImage2D(ge,we,xe,Oe,Le,0,De,ve,null)}t.bindFramebuffer(i.FRAMEBUFFER,N),Zt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,ue,ge,Qe.__webglTexture,0,Nt(E)):(ge===i.TEXTURE_2D||ge>=i.TEXTURE_CUBE_MAP_POSITIVE_X&&ge<=i.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&i.framebufferTexture2D(i.FRAMEBUFFER,ue,ge,Qe.__webglTexture,we),t.bindFramebuffer(i.FRAMEBUFFER,null)}function yt(N,E,ee){if(i.bindRenderbuffer(i.RENDERBUFFER,N),E.depthBuffer){const ue=E.depthTexture,ge=ue&&ue.isDepthTexture?ue.type:null,we=L(E.stencilBuffer,ge),De=E.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;Zt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(E),we,E.width,E.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(E),we,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,we,E.width,E.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,De,i.RENDERBUFFER,N)}else{const ue=E.textures;for(let ge=0;ge<ue.length;ge++){const we=ue[ge],De=l.convert(we.format,we.colorSpace),ve=l.convert(we.type),xe=R(we.internalFormat,De,ve,we.normalized,we.colorSpace);Zt(E)?d.renderbufferStorageMultisampleEXT(i.RENDERBUFFER,Nt(E),xe,E.width,E.height):ee?i.renderbufferStorageMultisample(i.RENDERBUFFER,Nt(E),xe,E.width,E.height):i.renderbufferStorage(i.RENDERBUFFER,xe,E.width,E.height)}}i.bindRenderbuffer(i.RENDERBUFFER,null)}function tn(N,E,ee){const ue=E.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(i.FRAMEBUFFER,N),!(E.depthTexture&&E.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const ge=a.get(E.depthTexture);if(ge.__renderTarget=E,(!ge.__webglTexture||E.depthTexture.image.width!==E.width||E.depthTexture.image.height!==E.height)&&(E.depthTexture.image.width=E.width,E.depthTexture.image.height=E.height,E.depthTexture.needsUpdate=!0),ue){if(ge.__webglInit===void 0&&(ge.__webglInit=!0,E.depthTexture.addEventListener("dispose",I)),ge.__webglTexture===void 0){ge.__webglTexture=i.createTexture(),t.bindTexture(i.TEXTURE_CUBE_MAP,ge.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,E.depthTexture);const Re=l.convert(E.depthTexture.format),Qe=l.convert(E.depthTexture.type);let Oe;E.depthTexture.format===Or?Oe=i.DEPTH_COMPONENT24:E.depthTexture.format===Oa&&(Oe=i.DEPTH24_STENCIL8);for(let Le=0;Le<6;Le++)i.texImage2D(i.TEXTURE_CUBE_MAP_POSITIVE_X+Le,0,Oe,E.width,E.height,0,Re,Qe,null)}}else q(E.depthTexture,0);const we=ge.__webglTexture,De=Nt(E),ve=ue?i.TEXTURE_CUBE_MAP_POSITIVE_X+ee:i.TEXTURE_2D,xe=E.depthTexture.format===Oa?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;if(E.depthTexture.format===Or)Zt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ve,we,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ve,we,0);else if(E.depthTexture.format===Oa)Zt(E)?d.framebufferTexture2DMultisampleEXT(i.FRAMEBUFFER,xe,ve,we,0,De):i.framebufferTexture2D(i.FRAMEBUFFER,xe,ve,we,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function _t(N){const E=a.get(N),ee=N.isWebGLCubeRenderTarget===!0;if(E.__boundDepthTexture!==N.depthTexture){const ue=N.depthTexture;if(E.__depthDisposeCallback&&E.__depthDisposeCallback(),ue){const ge=()=>{delete E.__boundDepthTexture,delete E.__depthDisposeCallback,ue.removeEventListener("dispose",ge)};ue.addEventListener("dispose",ge),E.__depthDisposeCallback=ge}E.__boundDepthTexture=ue}if(N.depthTexture&&!E.__autoAllocateDepthBuffer)if(ee)for(let ue=0;ue<6;ue++)tn(E.__webglFramebuffer[ue],N,ue);else{const ue=N.texture.mipmaps;ue&&ue.length>0?tn(E.__webglFramebuffer[0],N,0):tn(E.__webglFramebuffer,N,0)}else if(ee){E.__webglDepthbuffer=[];for(let ue=0;ue<6;ue++)if(t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[ue]),E.__webglDepthbuffer[ue]===void 0)E.__webglDepthbuffer[ue]=i.createRenderbuffer(),yt(E.__webglDepthbuffer[ue],N,!1);else{const ge=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer[ue];i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,we)}}else{const ue=N.texture.mipmaps;if(ue&&ue.length>0?t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer[0]):t.bindFramebuffer(i.FRAMEBUFFER,E.__webglFramebuffer),E.__webglDepthbuffer===void 0)E.__webglDepthbuffer=i.createRenderbuffer(),yt(E.__webglDepthbuffer,N,!1);else{const ge=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,we=E.__webglDepthbuffer;i.bindRenderbuffer(i.RENDERBUFFER,we),i.framebufferRenderbuffer(i.FRAMEBUFFER,ge,i.RENDERBUFFER,we)}}t.bindFramebuffer(i.FRAMEBUFFER,null)}function ct(N,E,ee){const ue=a.get(N);E!==void 0&&He(ue.__webglFramebuffer,N,N.texture,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,0),ee!==void 0&&_t(N)}function Vt(N){const E=N.texture,ee=a.get(N),ue=a.get(E);N.addEventListener("dispose",T);const ge=N.textures,we=N.isWebGLCubeRenderTarget===!0,De=ge.length>1;if(De||(ue.__webglTexture===void 0&&(ue.__webglTexture=i.createTexture()),ue.__version=E.version,u.memory.textures++),we){ee.__webglFramebuffer=[];for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer[ve]=[];for(let xe=0;xe<E.mipmaps.length;xe++)ee.__webglFramebuffer[ve][xe]=i.createFramebuffer()}else ee.__webglFramebuffer[ve]=i.createFramebuffer()}else{if(E.mipmaps&&E.mipmaps.length>0){ee.__webglFramebuffer=[];for(let ve=0;ve<E.mipmaps.length;ve++)ee.__webglFramebuffer[ve]=i.createFramebuffer()}else ee.__webglFramebuffer=i.createFramebuffer();if(De)for(let ve=0,xe=ge.length;ve<xe;ve++){const Re=a.get(ge[ve]);Re.__webglTexture===void 0&&(Re.__webglTexture=i.createTexture(),u.memory.textures++)}if(N.samples>0&&Zt(N)===!1){ee.__webglMultisampledFramebuffer=i.createFramebuffer(),ee.__webglColorRenderbuffer=[],t.bindFramebuffer(i.FRAMEBUFFER,ee.__webglMultisampledFramebuffer);for(let ve=0;ve<ge.length;ve++){const xe=ge[ve];ee.__webglColorRenderbuffer[ve]=i.createRenderbuffer(),i.bindRenderbuffer(i.RENDERBUFFER,ee.__webglColorRenderbuffer[ve]);const Re=l.convert(xe.format,xe.colorSpace),Qe=l.convert(xe.type),Oe=R(xe.internalFormat,Re,Qe,xe.normalized,xe.colorSpace,N.isXRRenderTarget===!0),Le=Nt(N);i.renderbufferStorageMultisample(i.RENDERBUFFER,Le,Oe,N.width,N.height),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+ve,i.RENDERBUFFER,ee.__webglColorRenderbuffer[ve])}i.bindRenderbuffer(i.RENDERBUFFER,null),N.depthBuffer&&(ee.__webglDepthRenderbuffer=i.createRenderbuffer(),yt(ee.__webglDepthRenderbuffer,N,!0)),t.bindFramebuffer(i.FRAMEBUFFER,null)}}if(we){t.bindTexture(i.TEXTURE_CUBE_MAP,ue.__webglTexture),Xe(i.TEXTURE_CUBE_MAP,E);for(let ve=0;ve<6;ve++)if(E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)He(ee.__webglFramebuffer[ve][xe],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,xe);else He(ee.__webglFramebuffer[ve],N,E,i.COLOR_ATTACHMENT0,i.TEXTURE_CUBE_MAP_POSITIVE_X+ve,0);S(E)&&U(i.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(De){for(let ve=0,xe=ge.length;ve<xe;ve++){const Re=ge[ve],Qe=a.get(Re);let Oe=i.TEXTURE_2D;(N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(Oe=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(Oe,Qe.__webglTexture),Xe(Oe,Re),He(ee.__webglFramebuffer,N,Re,i.COLOR_ATTACHMENT0+ve,Oe,0),S(Re)&&U(Oe)}t.unbindTexture()}else{let ve=i.TEXTURE_2D;if((N.isWebGL3DRenderTarget||N.isWebGLArrayRenderTarget)&&(ve=N.isWebGL3DRenderTarget?i.TEXTURE_3D:i.TEXTURE_2D_ARRAY),t.bindTexture(ve,ue.__webglTexture),Xe(ve,E),E.mipmaps&&E.mipmaps.length>0)for(let xe=0;xe<E.mipmaps.length;xe++)He(ee.__webglFramebuffer[xe],N,E,i.COLOR_ATTACHMENT0,ve,xe);else He(ee.__webglFramebuffer,N,E,i.COLOR_ATTACHMENT0,ve,0);S(E)&&U(ve),t.unbindTexture()}N.depthBuffer&&_t(N)}function Mt(N){const E=N.textures;for(let ee=0,ue=E.length;ee<ue;ee++){const ge=E[ee];if(S(ge)){const we=V(N),De=a.get(ge).__webglTexture;t.bindTexture(we,De),U(we),t.unbindTexture()}}}const Xt=[],Dt=[];function dn(N){if(N.samples>0){if(Zt(N)===!1){const E=N.textures,ee=N.width,ue=N.height;let ge=i.COLOR_BUFFER_BIT;const we=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT,De=a.get(N),ve=E.length>1;if(ve)for(let Re=0;Re<E.length;Re++)t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,null),t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,null,0);t.bindFramebuffer(i.READ_FRAMEBUFFER,De.__webglMultisampledFramebuffer);const xe=N.texture.mipmaps;xe&&xe.length>0?t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer[0]):t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglFramebuffer);for(let Re=0;Re<E.length;Re++){if(N.resolveDepthBuffer&&(N.depthBuffer&&(ge|=i.DEPTH_BUFFER_BIT),N.stencilBuffer&&N.resolveStencilBuffer&&(ge|=i.STENCIL_BUFFER_BIT)),ve){i.framebufferRenderbuffer(i.READ_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Qe=a.get(E[Re]).__webglTexture;i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0,i.TEXTURE_2D,Qe,0)}i.blitFramebuffer(0,0,ee,ue,0,0,ee,ue,ge,i.NEAREST),m===!0&&(Xt.length=0,Dt.length=0,Xt.push(i.COLOR_ATTACHMENT0+Re),N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&(Xt.push(we),Dt.push(we),i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,Dt)),i.invalidateFramebuffer(i.READ_FRAMEBUFFER,Xt))}if(t.bindFramebuffer(i.READ_FRAMEBUFFER,null),t.bindFramebuffer(i.DRAW_FRAMEBUFFER,null),ve)for(let Re=0;Re<E.length;Re++){t.bindFramebuffer(i.FRAMEBUFFER,De.__webglMultisampledFramebuffer),i.framebufferRenderbuffer(i.FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.RENDERBUFFER,De.__webglColorRenderbuffer[Re]);const Qe=a.get(E[Re]).__webglTexture;t.bindFramebuffer(i.FRAMEBUFFER,De.__webglFramebuffer),i.framebufferTexture2D(i.DRAW_FRAMEBUFFER,i.COLOR_ATTACHMENT0+Re,i.TEXTURE_2D,Qe,0)}t.bindFramebuffer(i.DRAW_FRAMEBUFFER,De.__webglMultisampledFramebuffer)}else if(N.depthBuffer&&N.storeMultisampledDepthBuffer===!1&&m){const E=N.stencilBuffer?i.DEPTH_STENCIL_ATTACHMENT:i.DEPTH_ATTACHMENT;i.invalidateFramebuffer(i.DRAW_FRAMEBUFFER,[E])}}}function Nt(N){return Math.min(s.maxSamples,N.samples)}function Zt(N){const E=a.get(N);return N.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&E.__useRenderToTexture!==!1}function Y(N){const E=u.render.frame;v.get(N)!==E&&(v.set(N,E),N.update())}function _n(N,E){const ee=N.colorSpace,ue=N.format,ge=N.type;return N.isCompressedTexture===!0||N.isVideoTexture===!0||ee!==kc&&ee!==ca&&(It.getTransfer(ee)===qt?(ue!==Ki||ge!==Ei)&&gt("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):kt("WebGLTextures: Unsupported texture color space:",ee)),E}function Rt(N){return typeof HTMLImageElement<"u"&&N instanceof HTMLImageElement?(p.width=N.naturalWidth||N.width,p.height=N.naturalHeight||N.height):typeof VideoFrame<"u"&&N instanceof VideoFrame?(p.width=N.displayWidth,p.height=N.displayHeight):(p.width=N.width,p.height=N.height),p}this.allocateTextureUnit=oe,this.resetTextureUnits=ie,this.getTextureUnits=H,this.setTextureUnits=te,this.setTexture2D=q,this.setTexture2DArray=W,this.setTexture3D=Z,this.setTextureCube=D,this.rebindTextures=ct,this.setupRenderTarget=Vt,this.updateRenderTargetMipmap=Mt,this.updateMultisampleRenderTarget=dn,this.setupDepthRenderbuffer=_t,this.setupFrameBufferTexture=He,this.useMultisampledRTT=Zt,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function k1(i,e){function t(a,s=ca){let l;const u=It.getTransfer(s);if(a===Ei)return i.UNSIGNED_BYTE;if(a===Mh)return i.UNSIGNED_SHORT_4_4_4_4;if(a===Eh)return i.UNSIGNED_SHORT_5_5_5_1;if(a===Rv)return i.UNSIGNED_INT_5_9_9_9_REV;if(a===bv)return i.UNSIGNED_INT_10F_11F_11F_REV;if(a===Av)return i.BYTE;if(a===Cv)return i.SHORT;if(a===Go)return i.UNSIGNED_SHORT;if(a===yh)return i.INT;if(a===ur)return i.UNSIGNED_INT;if(a===or)return i.FLOAT;if(a===dr)return i.HALF_FLOAT;if(a===Pv)return i.ALPHA;if(a===Lv)return i.RGB;if(a===Ki)return i.RGBA;if(a===Or)return i.DEPTH_COMPONENT;if(a===Oa)return i.DEPTH_STENCIL;if(a===Dv)return i.RED;if(a===Th)return i.RED_INTEGER;if(a===Va)return i.RG;if(a===wh)return i.RG_INTEGER;if(a===Ah)return i.RGBA_INTEGER;if(a===Cc||a===Rc||a===bc||a===Pc)if(u===qt)if(l=e.get("WEBGL_compressed_texture_s3tc_srgb"),l!==null){if(a===Cc)return l.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(a===Rc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(a===bc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(a===Pc)return l.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(l=e.get("WEBGL_compressed_texture_s3tc"),l!==null){if(a===Cc)return l.COMPRESSED_RGB_S3TC_DXT1_EXT;if(a===Rc)return l.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(a===bc)return l.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(a===Pc)return l.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(a===Pf||a===Lf||a===Df||a===Nf)if(l=e.get("WEBGL_compressed_texture_pvrtc"),l!==null){if(a===Pf)return l.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(a===Lf)return l.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(a===Df)return l.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(a===Nf)return l.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(a===Uf||a===Ff||a===Of||a===If||a===kf||a===Oc||a===zf)if(l=e.get("WEBGL_compressed_texture_etc"),l!==null){if(a===Uf||a===Ff)return u===qt?l.COMPRESSED_SRGB8_ETC2:l.COMPRESSED_RGB8_ETC2;if(a===Of)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:l.COMPRESSED_RGBA8_ETC2_EAC;if(a===If)return l.COMPRESSED_R11_EAC;if(a===kf)return l.COMPRESSED_SIGNED_R11_EAC;if(a===Oc)return l.COMPRESSED_RG11_EAC;if(a===zf)return l.COMPRESSED_SIGNED_RG11_EAC}else return null;if(a===Hf||a===Vf||a===Gf||a===Bf||a===Wf||a===Xf||a===$f||a===Yf||a===qf||a===jf||a===Kf||a===Zf||a===Jf||a===Qf)if(l=e.get("WEBGL_compressed_texture_astc"),l!==null){if(a===Hf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:l.COMPRESSED_RGBA_ASTC_4x4_KHR;if(a===Vf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:l.COMPRESSED_RGBA_ASTC_5x4_KHR;if(a===Gf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:l.COMPRESSED_RGBA_ASTC_5x5_KHR;if(a===Bf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:l.COMPRESSED_RGBA_ASTC_6x5_KHR;if(a===Wf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:l.COMPRESSED_RGBA_ASTC_6x6_KHR;if(a===Xf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:l.COMPRESSED_RGBA_ASTC_8x5_KHR;if(a===$f)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:l.COMPRESSED_RGBA_ASTC_8x6_KHR;if(a===Yf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:l.COMPRESSED_RGBA_ASTC_8x8_KHR;if(a===qf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:l.COMPRESSED_RGBA_ASTC_10x5_KHR;if(a===jf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:l.COMPRESSED_RGBA_ASTC_10x6_KHR;if(a===Kf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:l.COMPRESSED_RGBA_ASTC_10x8_KHR;if(a===Zf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:l.COMPRESSED_RGBA_ASTC_10x10_KHR;if(a===Jf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:l.COMPRESSED_RGBA_ASTC_12x10_KHR;if(a===Qf)return u===qt?l.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:l.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(a===eh||a===th||a===nh)if(l=e.get("EXT_texture_compression_bptc"),l!==null){if(a===eh)return u===qt?l.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:l.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(a===th)return l.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(a===nh)return l.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(a===ih||a===rh||a===Ic||a===ah)if(l=e.get("EXT_texture_compression_rgtc"),l!==null){if(a===ih)return l.COMPRESSED_RED_RGTC1_EXT;if(a===rh)return l.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(a===Ic)return l.COMPRESSED_RED_GREEN_RGTC2_EXT;if(a===ah)return l.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return a===Bo?i.UNSIGNED_INT_24_8:i[a]!==void 0?i[a]:null}return{convert:t}}const z1=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,H1=`
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

}`;class V1{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const a=new Gv(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=a}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,a=new fr({vertexShader:z1,fragmentShader:H1,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new di(new Kc(20,20),a)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class G1 extends ma{constructor(e,t){super();const a=this;let s=null,l=1,u=null,d="local-floor",m=1,p=null,v=null,x=null,_=null,M=null,w=null;const b=typeof XRWebGLBinding<"u",y=new V1,S={},U=t.getContextAttributes();let V=null,R=null;const L=[],P=[],I=new lt;let T=null,F=null;const z=new Ui;z.viewport=new mn;const B=new Ui;B.viewport=new mn;const K=[z,B],ie=new qM;let H=null,te=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(le){let pe=L[le];return pe===void 0&&(pe=new Bd,L[le]=pe),pe.getTargetRaySpace()},this.getControllerGrip=function(le){let pe=L[le];return pe===void 0&&(pe=new Bd,L[le]=pe),pe.getGripSpace()},this.getHand=function(le){let pe=L[le];return pe===void 0&&(pe=new Bd,L[le]=pe),pe.getHandSpace()};function oe(le){const pe=P.indexOf(le.inputSource);if(pe===-1)return;const Ce=L[pe];Ce!==void 0&&(Ce.update(le.inputSource,le.frame,p||u),Ce.dispatchEvent({type:le.type,data:le.inputSource}))}function ce(){s.removeEventListener("select",oe),s.removeEventListener("selectstart",oe),s.removeEventListener("selectend",oe),s.removeEventListener("squeeze",oe),s.removeEventListener("squeezestart",oe),s.removeEventListener("squeezeend",oe),s.removeEventListener("end",ce),s.removeEventListener("inputsourceschange",q);for(let le=0;le<L.length;le++){const pe=P[le];pe!==null&&(P[le]=null,L[le].disconnect(pe))}H=null,te=null,y.reset();for(const le in S)delete S[le];if(e.setRenderTarget(V),M=null,_=null,x=null,s=null,R=null,Ye.stop(),a.isPresenting=!1,e.setPixelRatio(T),e.setSize(I.width,I.height,!1),F!==null){const le=F.camera;le.fov=F.fov,le.zoom=F.zoom,le.updateProjectionMatrix(),F=null}a.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(le){l=le,a.isPresenting===!0&&gt("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(le){d=le,a.isPresenting===!0&&gt("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return p||u},this.setReferenceSpace=function(le){p=le},this.getBaseLayer=function(){return _!==null?_:M},this.getBinding=function(){return x===null&&b&&(x=new XRWebGLBinding(s,t)),x},this.getFrame=function(){return w},this.getSession=function(){return s},this.setSession=async function(le){if(s=le,s!==null){if(V=e.getRenderTarget(),s.addEventListener("select",oe),s.addEventListener("selectstart",oe),s.addEventListener("selectend",oe),s.addEventListener("squeeze",oe),s.addEventListener("squeezestart",oe),s.addEventListener("squeezeend",oe),s.addEventListener("end",ce),s.addEventListener("inputsourceschange",q),U.xrCompatible!==!0&&await t.makeXRCompatible(),T=e.getPixelRatio(),e.getSize(I),b&&"createProjectionLayer"in XRWebGLBinding.prototype){let Ce=null,rt=null,He=null;U.depth&&(He=U.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Ce=U.stencil?Oa:Or,rt=U.stencil?Bo:ur);const yt={colorFormat:t.RGBA8,depthFormat:He,scaleFactor:l};x=this.getBinding(),_=x.createProjectionLayer(yt),s.updateRenderState({layers:[_]}),e.setPixelRatio(1),e.setSize(_.textureWidth,_.textureHeight,!1),R=new Ji(_.textureWidth,_.textureHeight,{format:Ki,type:Ei,depthTexture:new Xo(_.textureWidth,_.textureHeight,rt,void 0,void 0,void 0,void 0,void 0,void 0,Ce),stencilBuffer:U.stencil,colorSpace:e.outputColorSpace,samples:U.antialias?4:0,resolveDepthBuffer:_.ignoreDepthValues===!1,resolveStencilBuffer:_.ignoreDepthValues===!1,storeMultisampledDepthBuffer:_.ignoreDepthValues===!1,storeMultisampledStencilBuffer:_.ignoreDepthValues===!1})}else{const Ce={antialias:U.antialias,alpha:!0,depth:U.depth,stencil:U.stencil,framebufferScaleFactor:l};M=new XRWebGLLayer(s,t,Ce),s.updateRenderState({baseLayer:M}),e.setPixelRatio(1),e.setSize(M.framebufferWidth,M.framebufferHeight,!1),R=new Ji(M.framebufferWidth,M.framebufferHeight,{format:Ki,type:Ei,colorSpace:e.outputColorSpace,stencilBuffer:U.stencil,resolveDepthBuffer:M.ignoreDepthValues===!1,resolveStencilBuffer:M.ignoreDepthValues===!1,storeMultisampledDepthBuffer:M.ignoreDepthValues===!1,storeMultisampledStencilBuffer:M.ignoreDepthValues===!1})}R.isXRRenderTarget=!0,this.setFoveation(m),p=null,u=await s.requestReferenceSpace(d),Ye.setContext(s),Ye.start(),a.isPresenting=!0,a.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return y.getDepthTexture()};function q(le){for(let pe=0;pe<le.removed.length;pe++){const Ce=le.removed[pe],rt=P.indexOf(Ce);rt>=0&&(P[rt]=null,L[rt].disconnect(Ce))}for(let pe=0;pe<le.added.length;pe++){const Ce=le.added[pe];let rt=P.indexOf(Ce);if(rt===-1){for(let yt=0;yt<L.length;yt++)if(yt>=P.length){P.push(Ce),rt=yt;break}else if(P[yt]===null){P[yt]=Ce,rt=yt;break}if(rt===-1)break}const He=L[rt];He&&He.connect(Ce)}}const W=new J,Z=new J;function D(le,pe,Ce){W.setFromMatrixPosition(pe.matrixWorld),Z.setFromMatrixPosition(Ce.matrixWorld);const rt=W.distanceTo(Z),He=pe.projectionMatrix.elements,yt=Ce.projectionMatrix.elements,tn=He[14]/(He[10]-1),_t=He[14]/(He[10]+1),ct=(He[9]+1)/He[5],Vt=(He[9]-1)/He[5],Mt=(He[8]-1)/He[0],Xt=(yt[8]+1)/yt[0],Dt=tn*Mt,dn=tn*Xt,Nt=rt/(-Mt+Xt),Zt=Nt*-Mt;if(pe.matrixWorld.decompose(le.position,le.quaternion,le.scale),le.translateX(Zt),le.translateZ(Nt),le.matrixWorld.compose(le.position,le.quaternion,le.scale),le.matrixWorldInverse.copy(le.matrixWorld).invert(),He[10]===-1)le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse);else{const Y=tn+Nt,_n=_t+Nt,Rt=Dt-Zt,N=dn+(rt-Zt),E=ct*_t/_n*Y,ee=Vt*_t/_n*Y;le.projectionMatrix.makePerspective(Rt,N,E,ee,Y,_n),le.projectionMatrixInverse.copy(le.projectionMatrix).invert()}}function se(le,pe){pe===null?le.matrixWorld.copy(le.matrix):le.matrixWorld.multiplyMatrices(pe.matrixWorld,le.matrix),le.matrixWorldInverse.copy(le.matrixWorld).invert()}this.updateCamera=function(le){if(s===null)return;let pe=le.near,Ce=le.far;y.texture!==null&&(y.depthNear>0&&(pe=y.depthNear),y.depthFar>0&&(Ce=y.depthFar)),ie.near=B.near=z.near=pe,ie.far=B.far=z.far=Ce,(H!==ie.near||te!==ie.far)&&(s.updateRenderState({depthNear:ie.near,depthFar:ie.far}),H=ie.near,te=ie.far),ie.layers.mask=le.layers.mask|6,z.layers.mask=ie.layers.mask&-5,B.layers.mask=ie.layers.mask&-3;const rt=le.parent,He=ie.cameras;se(ie,rt);for(let yt=0;yt<He.length;yt++)se(He[yt],rt);He.length===2?D(ie,z,B):ie.projectionMatrix.copy(z.projectionMatrix),F===null&&le.isPerspectiveCamera&&(F={camera:le,fov:le.fov,zoom:le.zoom}),Me(le,ie,rt)};function Me(le,pe,Ce){Ce===null?le.matrix.copy(pe.matrixWorld):(le.matrix.copy(Ce.matrixWorld),le.matrix.invert(),le.matrix.multiply(pe.matrixWorld)),le.matrix.decompose(le.position,le.quaternion,le.scale),le.updateMatrixWorld(!0),le.projectionMatrix.copy(pe.projectionMatrix),le.projectionMatrixInverse.copy(pe.projectionMatrixInverse),le.isPerspectiveCamera&&(le.fov=oh*2*Math.atan(1/le.projectionMatrix.elements[5]),le.zoom=1)}this.getCamera=function(){return ie},this.getFoveation=function(){if(!(_===null&&M===null))return m},this.setFoveation=function(le){m=le,_!==null&&(_.fixedFoveation=le),M!==null&&M.fixedFoveation!==void 0&&(M.fixedFoveation=le)},this.hasDepthSensing=function(){return y.texture!==null},this.getDepthSensingMesh=function(){return y.getMesh(ie)},this.getCameraTexture=function(le){return S[le]};let Be=null;function Xe(le,pe){if(v=pe.getViewerPose(p||u),w=pe,v!==null){const Ce=v.views;M!==null&&(e.setRenderTargetFramebuffer(R,M.framebuffer),e.setRenderTarget(R));let rt=!1;Ce.length!==ie.cameras.length&&(ie.cameras.length=0,rt=!0);for(let _t=0;_t<Ce.length;_t++){const ct=Ce[_t];let Vt=null;if(M!==null)Vt=M.getViewport(ct);else{const Xt=x.getViewSubImage(_,ct);Vt=Xt.viewport,_t===0&&(e.setRenderTargetTextures(R,Xt.colorTexture,Xt.depthStencilTexture),e.setRenderTarget(R))}let Mt=K[_t];Mt===void 0&&(Mt=new Ui,Mt.layers.enable(_t),Mt.viewport=new mn,K[_t]=Mt),Mt.matrix.fromArray(ct.transform.matrix),Mt.matrix.decompose(Mt.position,Mt.quaternion,Mt.scale),Mt.projectionMatrix.fromArray(ct.projectionMatrix),Mt.projectionMatrixInverse.copy(Mt.projectionMatrix).invert(),Mt.viewport.set(Vt.x,Vt.y,Vt.width,Vt.height),_t===0&&(ie.matrix.copy(Mt.matrix),ie.matrix.decompose(ie.position,ie.quaternion,ie.scale)),rt===!0&&ie.cameras.push(Mt)}const He=s.enabledFeatures;if(He&&He.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&b){x=a.getBinding();const _t=x.getDepthInformation(Ce[0]);_t&&_t.isValid&&_t.texture&&y.init(_t,s.renderState)}if(He&&He.includes("camera-access")&&b){e.state.unbindTexture(),x=a.getBinding();for(let _t=0;_t<Ce.length;_t++){const ct=Ce[_t].camera;if(ct){let Vt=S[ct];Vt||(Vt=new Gv,S[ct]=Vt);const Mt=x.getCameraImage(ct);Vt.sourceTexture=Mt}}}}for(let Ce=0;Ce<L.length;Ce++){const rt=P[Ce],He=L[Ce];rt!==null&&He!==void 0&&He.update(rt,pe,p||u)}Be&&Be(le,pe),pe.detectedPlanes&&a.dispatchEvent({type:"planesdetected",data:pe}),w=null}const Ye=new $v;Ye.setAnimationLoop(Xe),this.setAnimationLoop=function(le){Be=le},this.dispose=function(){}}}const B1=new un,Qv=new St;Qv.set(-1,0,0,0,1,0,0,0,1);function W1(i,e){function t(y,S){y.matrixAutoUpdate===!0&&y.updateMatrix(),S.value.copy(y.matrix)}function a(y,S){S.color.getRGB(y.fogColor.value,Bv(i)),S.isFog?(y.fogNear.value=S.near,y.fogFar.value=S.far):S.isFogExp2&&(y.fogDensity.value=S.density)}function s(y,S,U,V,R){S.isNodeMaterial?S.uniformsNeedUpdate=!1:S.isMeshBasicMaterial?l(y,S):S.isMeshLambertMaterial?(l(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshToonMaterial?(l(y,S),x(y,S)):S.isMeshPhongMaterial?(l(y,S),v(y,S),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)):S.isMeshStandardMaterial?(l(y,S),_(y,S),S.isMeshPhysicalMaterial&&M(y,S,R)):S.isMeshMatcapMaterial?(l(y,S),w(y,S)):S.isMeshDepthMaterial?l(y,S):S.isMeshDistanceMaterial?(l(y,S),b(y,S)):S.isMeshNormalMaterial?l(y,S):S.isLineBasicMaterial?(u(y,S),S.isLineDashedMaterial&&d(y,S)):S.isPointsMaterial?m(y,S,U,V):S.isSpriteMaterial?p(y,S):S.isShadowMaterial?(y.color.value.copy(S.color),y.opacity.value=S.opacity):S.isShaderMaterial&&(S.uniformsNeedUpdate=!1)}function l(y,S){y.opacity.value=S.opacity,S.color&&y.diffuse.value.copy(S.color),S.emissive&&y.emissive.value.copy(S.emissive).multiplyScalar(S.emissiveIntensity),S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.bumpMap&&(y.bumpMap.value=S.bumpMap,t(S.bumpMap,y.bumpMapTransform),y.bumpScale.value=S.bumpScale,S.side===fi&&(y.bumpScale.value*=-1)),S.normalMap&&(y.normalMap.value=S.normalMap,t(S.normalMap,y.normalMapTransform),y.normalScale.value.copy(S.normalScale),S.side===fi&&y.normalScale.value.negate()),S.displacementMap&&(y.displacementMap.value=S.displacementMap,t(S.displacementMap,y.displacementMapTransform),y.displacementScale.value=S.displacementScale,y.displacementBias.value=S.displacementBias),S.emissiveMap&&(y.emissiveMap.value=S.emissiveMap,t(S.emissiveMap,y.emissiveMapTransform)),S.specularMap&&(y.specularMap.value=S.specularMap,t(S.specularMap,y.specularMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest);const U=e.get(S),V=U.envMap,R=U.envMapRotation;V&&(y.envMap.value=V,y.envMapRotation.value.setFromMatrix4(B1.makeRotationFromEuler(R)).transpose(),V.isCubeTexture&&V.isRenderTargetTexture===!1&&y.envMapRotation.value.premultiply(Qv),y.reflectivity.value=S.reflectivity,y.ior.value=S.ior,y.refractionRatio.value=S.refractionRatio),S.lightMap&&(y.lightMap.value=S.lightMap,y.lightMapIntensity.value=S.lightMapIntensity,t(S.lightMap,y.lightMapTransform)),S.aoMap&&(y.aoMap.value=S.aoMap,y.aoMapIntensity.value=S.aoMapIntensity,t(S.aoMap,y.aoMapTransform))}function u(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform))}function d(y,S){y.dashSize.value=S.dashSize,y.totalSize.value=S.dashSize+S.gapSize,y.scale.value=S.scale}function m(y,S,U,V){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.size.value=S.size*U,y.scale.value=V*.5,S.map&&(y.map.value=S.map,t(S.map,y.uvTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function p(y,S){y.diffuse.value.copy(S.color),y.opacity.value=S.opacity,y.rotation.value=S.rotation,S.map&&(y.map.value=S.map,t(S.map,y.mapTransform)),S.alphaMap&&(y.alphaMap.value=S.alphaMap,t(S.alphaMap,y.alphaMapTransform)),S.alphaTest>0&&(y.alphaTest.value=S.alphaTest)}function v(y,S){y.specular.value.copy(S.specular),y.shininess.value=Math.max(S.shininess,1e-4)}function x(y,S){S.gradientMap&&(y.gradientMap.value=S.gradientMap)}function _(y,S){y.metalness.value=S.metalness,S.metalnessMap&&(y.metalnessMap.value=S.metalnessMap,t(S.metalnessMap,y.metalnessMapTransform)),y.roughness.value=S.roughness,S.roughnessMap&&(y.roughnessMap.value=S.roughnessMap,t(S.roughnessMap,y.roughnessMapTransform)),S.envMap&&(y.envMapIntensity.value=S.envMapIntensity)}function M(y,S,U){y.ior.value=S.ior,S.sheen>0&&(y.sheenColor.value.copy(S.sheenColor).multiplyScalar(S.sheen),y.sheenRoughness.value=S.sheenRoughness,S.sheenColorMap&&(y.sheenColorMap.value=S.sheenColorMap,t(S.sheenColorMap,y.sheenColorMapTransform)),S.sheenRoughnessMap&&(y.sheenRoughnessMap.value=S.sheenRoughnessMap,t(S.sheenRoughnessMap,y.sheenRoughnessMapTransform))),S.clearcoat>0&&(y.clearcoat.value=S.clearcoat,y.clearcoatRoughness.value=S.clearcoatRoughness,S.clearcoatMap&&(y.clearcoatMap.value=S.clearcoatMap,t(S.clearcoatMap,y.clearcoatMapTransform)),S.clearcoatRoughnessMap&&(y.clearcoatRoughnessMap.value=S.clearcoatRoughnessMap,t(S.clearcoatRoughnessMap,y.clearcoatRoughnessMapTransform)),S.clearcoatNormalMap&&(y.clearcoatNormalMap.value=S.clearcoatNormalMap,t(S.clearcoatNormalMap,y.clearcoatNormalMapTransform),y.clearcoatNormalScale.value.copy(S.clearcoatNormalScale),S.side===fi&&y.clearcoatNormalScale.value.negate())),S.dispersion>0&&(y.dispersion.value=S.dispersion),S.retroreflectivity>0&&(y.retroreflectivity.value=S.retroreflectivity),S.iridescence>0&&(y.iridescence.value=S.iridescence,y.iridescenceIOR.value=S.iridescenceIOR,y.iridescenceThicknessMinimum.value=S.iridescenceThicknessRange[0],y.iridescenceThicknessMaximum.value=S.iridescenceThicknessRange[1],S.iridescenceMap&&(y.iridescenceMap.value=S.iridescenceMap,t(S.iridescenceMap,y.iridescenceMapTransform)),S.iridescenceThicknessMap&&(y.iridescenceThicknessMap.value=S.iridescenceThicknessMap,t(S.iridescenceThicknessMap,y.iridescenceThicknessMapTransform))),S.transmission>0&&(y.transmission.value=S.transmission,y.transmissionSamplerMap.value=U.texture,y.transmissionSamplerSize.value.set(U.width,U.height),S.transmissionMap&&(y.transmissionMap.value=S.transmissionMap,t(S.transmissionMap,y.transmissionMapTransform)),y.thickness.value=S.thickness,S.thicknessMap&&(y.thicknessMap.value=S.thicknessMap,t(S.thicknessMap,y.thicknessMapTransform)),y.attenuationDistance.value=S.attenuationDistance,y.attenuationColor.value.copy(S.attenuationColor)),S.anisotropy>0&&(y.anisotropyVector.value.set(S.anisotropy*Math.cos(S.anisotropyRotation),S.anisotropy*Math.sin(S.anisotropyRotation)),S.anisotropyMap&&(y.anisotropyMap.value=S.anisotropyMap,t(S.anisotropyMap,y.anisotropyMapTransform))),y.specularIntensity.value=S.specularIntensity,y.specularColor.value.copy(S.specularColor),S.specularColorMap&&(y.specularColorMap.value=S.specularColorMap,t(S.specularColorMap,y.specularColorMapTransform)),S.specularIntensityMap&&(y.specularIntensityMap.value=S.specularIntensityMap,t(S.specularIntensityMap,y.specularIntensityMapTransform))}function w(y,S){S.matcap&&(y.matcap.value=S.matcap)}function b(y,S){const U=e.get(S).light;y.referencePosition.value.setFromMatrixPosition(U.matrixWorld),y.nearDistance.value=U.shadow.camera.near,y.farDistance.value=U.shadow.camera.far}return{refreshFogUniforms:a,refreshMaterialUniforms:s}}function X1(i,e,t,a){let s={},l={},u=[];const d=i.getParameter(i.MAX_UNIFORM_BUFFER_BINDINGS);function m(R,L){const P=L.program;a.uniformBlockBinding(R,P)}function p(R,L){let P=s[R.id];P===void 0&&(y(R),P=v(R),s[R.id]=P,R.addEventListener("dispose",U));const I=L.program;a.updateUBOMapping(R,I);const T=e.render.frame;l[R.id]!==T&&(_(R),l[R.id]=T)}function v(R){const L=x();R.__bindingPointIndex=L;const P=i.createBuffer(),I=R.__size,T=R.usage;return i.bindBuffer(i.UNIFORM_BUFFER,P),i.bufferData(i.UNIFORM_BUFFER,I,T),i.bindBuffer(i.UNIFORM_BUFFER,null),i.bindBufferBase(i.UNIFORM_BUFFER,L,P),P}function x(){for(let R=0;R<d;R++)if(u.indexOf(R)===-1)return u.push(R),R;return kt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function _(R){const L=s[R.id],P=R.uniforms,I=R.__cache;i.bindBuffer(i.UNIFORM_BUFFER,L);for(let T=0,F=P.length;T<F;T++){const z=P[T];if(Array.isArray(z))for(let B=0,K=z.length;B<K;B++)M(z[B],T,B,I);else M(z,T,0,I)}i.bindBuffer(i.UNIFORM_BUFFER,null)}function M(R,L,P,I){if(b(R,L,P,I)===!0){const T=R.__offset,F=R.value;if(Array.isArray(F)){let z=0;for(let B=0;B<F.length;B++){const K=F[B],ie=S(K);w(K,R.__data,z),typeof K!="number"&&typeof K!="boolean"&&!K.isMatrix3&&!ArrayBuffer.isView(K)&&(z+=ie.storage/Float32Array.BYTES_PER_ELEMENT)}}else w(F,R.__data,0);i.bufferSubData(i.UNIFORM_BUFFER,T,R.__data)}}function w(R,L,P){typeof R=="number"||typeof R=="boolean"?L[0]=R:R.isMatrix3?(L[0]=R.elements[0],L[1]=R.elements[1],L[2]=R.elements[2],L[3]=0,L[4]=R.elements[3],L[5]=R.elements[4],L[6]=R.elements[5],L[7]=0,L[8]=R.elements[6],L[9]=R.elements[7],L[10]=R.elements[8],L[11]=0):ArrayBuffer.isView(R)?L.set(new R.constructor(R.buffer,R.byteOffset,L.length)):R.toArray(L,P)}function b(R,L,P,I){const T=R.value,F=L+"_"+P;if(I[F]===void 0)return typeof T=="number"||typeof T=="boolean"?I[F]=T:ArrayBuffer.isView(T)?I[F]=T.slice():I[F]=T.clone(),!0;{const z=I[F];if(typeof T=="number"||typeof T=="boolean"){if(z!==T)return I[F]=T,!0}else{if(ArrayBuffer.isView(T))return!0;if(z.equals(T)===!1)return z.copy(T),!0}}return!1}function y(R){const L=R.uniforms;let P=0;const I=16;for(let F=0,z=L.length;F<z;F++){const B=Array.isArray(L[F])?L[F]:[L[F]];for(let K=0,ie=B.length;K<ie;K++){const H=B[K],te=Array.isArray(H.value)?H.value:[H.value];for(let oe=0,ce=te.length;oe<ce;oe++){const q=te[oe],W=S(q),Z=P%I,D=Z%W.boundary,se=Z+D;P+=D,se!==0&&I-se<W.storage&&(P+=I-se),H.__data=new Float32Array(W.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=P,P+=W.storage}}}const T=P%I;return T>0&&(P+=I-T),R.__size=P,R.__cache={},this}function S(R){const L={boundary:0,storage:0};return typeof R=="number"||typeof R=="boolean"?(L.boundary=4,L.storage=4):R.isVector2?(L.boundary=8,L.storage=8):R.isVector3||R.isColor?(L.boundary=16,L.storage=12):R.isVector4?(L.boundary=16,L.storage=16):R.isMatrix3?(L.boundary=48,L.storage=48):R.isMatrix4?(L.boundary=64,L.storage=64):R.isTexture?gt("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(R)?(L.boundary=16,L.storage=R.byteLength):gt("WebGLRenderer: Unsupported uniform value type.",R),L}function U(R){const L=R.target;L.removeEventListener("dispose",U);const P=u.indexOf(L.__bindingPointIndex);u.splice(P,1),i.deleteBuffer(s[L.id]),delete s[L.id],delete l[L.id]}function V(){for(const R in s)i.deleteBuffer(s[R]);u=[],s={},l={}}return{bind:m,update:p,dispose:V}}const $1=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let rr=null;function Y1(){return rr===null&&(rr=new bM($1,16,16,Va,dr),rr.name="DFG_LUT",rr.minFilter=Kn,rr.magFilter=Kn,rr.wrapS=Dr,rr.wrapT=Dr,rr.generateMipmaps=!1,rr.needsUpdate=!0),rr}class q1{constructor(e={}){const{canvas:t=tM(),context:a=null,depth:s=!0,stencil:l=!1,alpha:u=!1,antialias:d=!1,premultipliedAlpha:m=!0,preserveDrawingBuffer:p=!1,powerPreference:v="default",failIfMajorPerformanceCaveat:x=!1,reversedDepthBuffer:_=!1,outputBufferType:M=Ei}=e;this.isWebGLRenderer=!0;let w;if(a!==null){if(typeof WebGLRenderingContext<"u"&&a instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");w=a.getContextAttributes().alpha}else w=u;const b=M,y=new Set([Ah,wh,Th]),S=new Set([Ei,ur,Go,Bo,Mh,Eh]),U=new Uint32Array(4),V=new Int32Array(4),R=new J;let L=null,P=null;const I=[],T=[];let F=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=cr,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const z=this;let B=!1,K=null,ie=null,H=null,te=null;this._outputColorSpace=Mi;let oe=0,ce=0,q=null,W=-1,Z=null;const D=new mn,se=new mn;let Me=null;const Be=new Pt(0);let Xe=0,Ye=t.width,le=t.height,pe=1,Ce=null,rt=null;const He=new mn(0,0,Ye,le),yt=new mn(0,0,Ye,le);let tn=!1;const _t=new Uh;let ct=!1,Vt=!1;const Mt=new un,Xt=new J,Dt=new mn,dn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Nt=!1;function Zt(){return q===null?pe:1}let Y=a;function _n(C,$){return t.getContext(C,$)}let Rt,N,E,ee,ue,ge,we,De,ve,xe,Re,Qe,Oe,Le,Ke,st,ut,X,Ne,_e,Ue,ke,ye;try{const C={alpha:!0,depth:s,stencil:l,antialias:d,premultipliedAlpha:m,preserveDrawingBuffer:p,powerPreference:v,failIfMajorPerformanceCaveat:x};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Sh}`),t.addEventListener("webglcontextlost",me,!1),t.addEventListener("webglcontextrestored",Se,!1),t.addEventListener("webglcontextcreationerror",Fe,!1),Y===null){const $="webgl2";if(Y=_n($,C),Y===null)throw _n($)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}et()}catch(C){throw t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),kt("WebGLRenderer: "+C.message),C}function et(){Rt=new Yw(Y),Rt.init(),Ue=new k1(Y,Rt),N=new Iw(Y,Rt,e,Ue),E=new O1(Y,Rt),N.reversedDepthBuffer&&_&&E.buffers.depth.setReversed(!0),ie=Y.createFramebuffer(),H=Y.createFramebuffer(),te=Y.createFramebuffer(),ee=new Kw(Y),ue=new M1,ge=new I1(Y,Rt,E,ue,N,Ue,ee),we=new $w(z),De=new JM(Y),ke=new Fw(Y,De),ve=new qw(Y,De,ee,ke),xe=new Jw(Y,ve,De,ke,ee),X=new Zw(Y,N,ge),Ke=new kw(ue),Re=new y1(z,we,Rt,N,ke,Ke),Qe=new W1(z,ue),Oe=new T1,Le=new P1(Rt),ut=new Uw(z,we,E,xe,w,m),st=new F1(z,xe,N),ye=new X1(Y,ee,N,E),Ne=new Ow(Y,Rt,ee),_e=new jw(Y,Rt,ee),ee.programs=Re.programs,z.capabilities=N,z.extensions=Rt,z.properties=ue,z.renderLists=Oe,z.shadowMap=st,z.state=E,z.info=ee}b!==Ei&&(F=new eA(b,t.width,t.height,d,s,l));const k=new G1(z,Y);this.xr=k,this.getContext=function(){return Y},this.getContextAttributes=function(){return Y.getContextAttributes()},this.forceContextLoss=function(){const C=Rt.get("WEBGL_lose_context");C&&C.loseContext()},this.forceContextRestore=function(){const C=Rt.get("WEBGL_lose_context");C&&C.restoreContext()},this.getPixelRatio=function(){return pe},this.setPixelRatio=function(C){C!==void 0&&(pe=C,this.setSize(Ye,le,!1))},this.getSize=function(C){return C.set(Ye,le)},this.setSize=function(C,$,fe=!0){if(k.isPresenting){gt("WebGLRenderer: Can't change size while VR device is presenting.");return}Ye=C,le=$,t.width=Math.floor(C*pe),t.height=Math.floor($*pe),fe===!0&&(t.style.width=C+"px",t.style.height=$+"px"),F!==null&&F.setSize(t.width,t.height),this.setViewport(0,0,C,$)},this.getDrawingBufferSize=function(C){return C.set(Ye*pe,le*pe).floor()},this.setDrawingBufferSize=function(C,$,fe){Ye=C,le=$,pe=fe,t.width=Math.floor(C*fe),t.height=Math.floor($*fe),this.setViewport(0,0,C,$)},this.setEffects=function(C){if(b===Ei){kt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(C){for(let $=0;$<C.length;$++)if(C[$].isOutputPass===!0){gt("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}F.setEffects(C||[])},this.getCurrentViewport=function(C){return C.copy(D)},this.getViewport=function(C){return C.copy(He)},this.setViewport=function(C,$,fe,re){C.isVector4?He.set(C.x,C.y,C.z,C.w):He.set(C,$,fe,re),E.viewport(D.copy(He).multiplyScalar(pe).round())},this.getScissor=function(C){return C.copy(yt)},this.setScissor=function(C,$,fe,re){C.isVector4?yt.set(C.x,C.y,C.z,C.w):yt.set(C,$,fe,re),E.scissor(se.copy(yt).multiplyScalar(pe).round())},this.getScissorTest=function(){return tn},this.setScissorTest=function(C){E.setScissorTest(tn=C)},this.setOpaqueSort=function(C){Ce=C},this.setTransparentSort=function(C){rt=C},this.getClearColor=function(C){return C.copy(ut.getClearColor())},this.setClearColor=function(){ut.setClearColor(...arguments)},this.getClearAlpha=function(){return ut.getClearAlpha()},this.setClearAlpha=function(){ut.setClearAlpha(...arguments)},this.clear=function(C=!0,$=!0,fe=!0){let re=0;if(C){let ne=!1;if(q!==null){const Ve=q.texture.format;ne=y.has(Ve)}if(ne){const Ve=q.texture.type,Ie=S.has(Ve),ze=ut.getClearColor(),Ze=ut.getClearAlpha(),it=ze.r,vt=ze.g,Et=ze.b;Ie?(U[0]=it,U[1]=vt,U[2]=Et,U[3]=Ze,Y.clearBufferuiv(Y.COLOR,0,U)):(V[0]=it,V[1]=vt,V[2]=Et,V[3]=Ze,Y.clearBufferiv(Y.COLOR,0,V))}else re|=Y.COLOR_BUFFER_BIT}$&&(re|=Y.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),fe&&(re|=Y.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&Y.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(C){C.setRenderer(this),K=C},this.dispose=function(){t.removeEventListener("webglcontextlost",me,!1),t.removeEventListener("webglcontextrestored",Se,!1),t.removeEventListener("webglcontextcreationerror",Fe,!1),ut.dispose(),Oe.dispose(),Le.dispose(),ue.dispose(),we.dispose(),xe.dispose(),ke.dispose(),ye.dispose(),Re.dispose(),k.dispose(),k.removeEventListener("sessionstart",tt),k.removeEventListener("sessionend",sn),Ct.stop()};function me(C){C.preventDefault(),Vc("WebGLRenderer: Context Lost."),B=!0}function Se(){Vc("WebGLRenderer: Context Restored."),B=!1;const C=ee.autoReset,$=st.enabled,fe=st.autoUpdate,re=st.needsUpdate,ne=st.type;et(),ee.autoReset=C,st.enabled=$,st.autoUpdate=fe,st.needsUpdate=re,st.type=ne}function Fe(C){kt("WebGLRenderer: A WebGL context could not be created. Reason: ",C.statusMessage)}function pt(C){const $=C.target;$.removeEventListener("dispose",pt),ot($)}function ot(C){Tt(C),ue.remove(C)}function Tt(C){const $=ue.get(C).programs;$!==void 0&&($.forEach(function(fe){Re.releaseProgram(fe)}),C.isShaderMaterial&&Re.releaseShaderCache(C))}this.renderBufferDirect=function(C,$,fe,re,ne,Ve){$===null&&($=dn);const Ie=ne.isMesh&&ne.matrixWorld.determinantAffine()<0,ze=$t(C,$,fe,re,ne);E.setMaterial(re,Ie);let Ze=fe.index,it=1;if(re.wireframe===!0){if(Ze=ve.getWireframeAttribute(fe),Ze===void 0)return;it=2}const vt=fe.drawRange,Et=fe.attributes.position;let qe=vt.start*it,Ft=(vt.start+vt.count)*it;Ve!==null&&(qe=Math.max(qe,Ve.start*it),Ft=Math.min(Ft,(Ve.start+Ve.count)*it)),Ze!==null?(qe=Math.max(qe,0),Ft=Math.min(Ft,Ze.count)):Et!=null&&(qe=Math.max(qe,0),Ft=Math.min(Ft,Et.count));const gn=Ft-qe;if(gn<0||gn===1/0)return;ke.setup(ne,re,ze,fe,Ze);let en,Wt=Ne;if(Ze!==null&&(en=De.get(Ze),Wt=_e,Wt.setIndex(en)),ne.isMesh)re.wireframe===!0?(E.setLineWidth(re.wireframeLinewidth*Zt()),Wt.setMode(Y.LINES)):Wt.setMode(Y.TRIANGLES);else if(ne.isLine){let Tn=re.linewidth;Tn===void 0&&(Tn=1),E.setLineWidth(Tn*Zt()),ne.isLineSegments?Wt.setMode(Y.LINES):ne.isLineLoop?Wt.setMode(Y.LINE_LOOP):Wt.setMode(Y.LINE_STRIP)}else ne.isPoints?Wt.setMode(Y.POINTS):ne.isSprite&&Wt.setMode(Y.TRIANGLES);if(ne.isBatchedMesh)if(Rt.get("WEBGL_multi_draw"))Wt.renderMultiDraw(ne._multiDrawStarts,ne._multiDrawCounts,ne._multiDrawCount);else{const Tn=ne._multiDrawStarts,We=ne._multiDrawCounts,Sn=ne._multiDrawCount,Ot=Ze?De.get(Ze).bytesPerElement:1,Bn=ue.get(re).currentProgram.getUniforms();for(let wt=0;wt<Sn;wt++)Bn.setValue(Y,"_gl_DrawID",wt),Wt.render(Tn[wt]/Ot,We[wt])}else if(ne.isInstancedMesh)Wt.renderInstances(qe,gn,ne.count);else if(fe.isInstancedBufferGeometry){const Tn=fe._maxInstanceCount!==void 0?fe._maxInstanceCount:1/0,We=Math.min(fe.instanceCount,Tn);Wt.renderInstances(qe,gn,We)}else Wt.render(qe,gn)};function Ut(C,$,fe,re){K!==null&&C.isNodeMaterial&&K.setObject(re,C),ct===!0&&Ke.setState(C,fe,!1),C.transparent===!0&&C.side===Fi&&C.forceSinglePass===!1?(C.side=fi,C.needsUpdate=!0,Gn(C,$,re),C.side=za,C.needsUpdate=!0,Gn(C,$,re),C.side=Fi):Gn(C,$,re)}this.compile=function(C,$,fe=null){fe===null&&(fe=C),K!==null&&K.renderStart(C,$,fe),P=Le.get(fe),P.init($),T.push(P),fe.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),C!==fe&&C.traverseVisible(function(ne){ne.isLight&&ne.layers.test($.layers)&&(P.pushLight(ne),ne.castShadow&&P.pushShadow(ne))}),P.setupLights(),K!==null&&K.updateLights(P.state.lightsArray),Vt=this.localClippingEnabled,ct=Ke.init(this.clippingPlanes,Vt),ct===!0&&Ke.setGlobalState(this.clippingPlanes,$),K!==null&&st.render(P.state.shadowsArray,fe,$);const re=new Set;return C.traverse(function(ne){if(!(ne.isMesh||ne.isPoints||ne.isLine||ne.isSprite))return;const Ve=ne.material;if(Ve)if(Array.isArray(Ve))for(let Ie=0;Ie<Ve.length;Ie++){const ze=Ve[Ie];Ut(ze,fe,$,ne),re.add(ze)}else Ut(Ve,fe,$,ne),re.add(Ve)}),P=T.pop(),K!==null&&K.renderEnd(),re},this.compileAsync=function(C,$,fe=null){const re=this.compile(C,$,fe);return new Promise(ne=>{function Ve(){if(re.forEach(function(Ie){const Ze=ue.get(Ie).currentProgram;(Ze===void 0||Ze.isReady())&&re.delete(Ie)}),re.size===0){ne(C);return}setTimeout(Ve,10)}Rt.get("KHR_parallel_shader_compile")!==null?Ve():setTimeout(Ve,10)})};let Jt=null;function ht(C){Jt&&Jt(C)}function tt(){Ct.stop()}function sn(){Ct.start()}const Ct=new $v;Ct.setAnimationLoop(ht),typeof self<"u"&&Ct.setContext(self),this.setAnimationLoop=function(C){Jt=C,k.setAnimationLoop(C),C===null?Ct.stop():Ct.start()},k.addEventListener("sessionstart",tt),k.addEventListener("sessionend",sn),this.render=function(C,$){if($!==void 0&&$.isCamera!==!0){kt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(B===!0)return;K!==null&&K.renderStart(C,$);const fe=k.enabled===!0&&k.isPresenting===!0,re=F!==null&&(q===null||fe)&&F.begin(z,q);if(C.matrixWorldAutoUpdate===!0&&C.updateMatrixWorld(),$.parent===null&&$.matrixWorldAutoUpdate===!0&&$.updateMatrixWorld(),k.enabled===!0&&k.isPresenting===!0&&(F===null||F.isCompositing()===!1)&&(k.cameraAutoUpdate===!0&&k.updateCamera($),$=k.getCamera()),C.isScene===!0&&C.onBeforeRender(z,C,$,q),P=Le.get(C,T.length),P.init($),P.state.textureUnits=ge.getTextureUnits(),T.push(P),Mt.multiplyMatrices($.projectionMatrix,$.matrixWorldInverse),_t.setFromProjectionMatrix(Mt,lr,$.reversedDepth),Vt=this.localClippingEnabled,ct=Ke.init(this.clippingPlanes,Vt),L=Oe.get(C,I.length),L.init(),I.push(L),k.enabled===!0&&k.isPresenting===!0){const Ie=z.xr.getDepthSensingMesh();Ie!==null&&Ln(Ie,$,-1/0,z.sortObjects)}Ln(C,$,0,z.sortObjects),L.finish(),K!==null&&K.updateLights(P.state.lightsArray),z.sortObjects===!0&&L.sort(Ce,rt),Nt=k.enabled===!1||k.isPresenting===!1||k.hasDepthSensing()===!1,Nt&&ut.addToRenderList(L,C),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),ct===!0&&Ke.beginShadows();const ne=P.state.shadowsArray;if(st.render(ne,C,$),ct===!0&&Ke.endShadows(),(re&&F.hasRenderPass())===!1){const Ie=L.opaque,ze=L.transmissive;if(P.setupLights(),$.isArrayCamera){const Ze=$.cameras;if(ze.length>0)for(let it=0,vt=Ze.length;it<vt;it++){const Et=Ze[it];pi(Ie,ze,C,Et)}Nt&&ut.render(C);for(let it=0,vt=Ze.length;it<vt;it++){const Et=Ze[it];Qt(L,C,Et,Et.viewport)}}else ze.length>0&&pi(Ie,ze,C,$),Nt&&ut.render(C),Qt(L,C,$)}q!==null&&ce===0&&(ge.updateMultisampleRenderTarget(q),ge.updateRenderTargetMipmap(q)),re&&F.end(z),C.isScene===!0&&C.onAfterRender(z,C,$),ke.resetDefaultState(),W=-1,Z=null,T.pop(),T.length>0?(P=T[T.length-1],ge.setTextureUnits(P.state.textureUnits),ct===!0&&Ke.setGlobalState(z.clippingPlanes,P.state.camera)):P=null,I.pop(),I.length>0?L=I[I.length-1]:L=null,K!==null&&K.renderEnd()};function Ln(C,$,fe,re){if(C.visible===!1)return;if(C.layers.test($.layers)){if(C.isGroup)fe=C.renderOrder;else if(C.isLOD)C.autoUpdate===!0&&C.update($);else if(C.isLightProbeGrid)P.pushLightProbeGrid(C);else if(C.isLight)P.pushLight(C),C.castShadow&&P.pushShadow(C);else if(C.isSprite){if(!C.frustumCulled||C.intersectsFrustum(_t)){re&&Dt.setFromMatrixPosition(C.matrixWorld).applyMatrix4(Mt);const Ie=xe.update(C),ze=C.material;ze.visible&&L.push(C,Ie,ze,fe,Dt.z,null,$)}}else if((C.isMesh||C.isLine||C.isPoints)&&(!C.frustumCulled||C.intersectsFrustum(_t))){const Ie=xe.update(C),ze=C.material;if(re&&(C.boundingSphere!==void 0?(C.boundingSphere===null&&C.computeBoundingSphere(),Dt.copy(C.boundingSphere.center)):(Ie.boundingSphere===null&&Ie.computeBoundingSphere(),Dt.copy(Ie.boundingSphere.center)),Dt.applyMatrix4(C.matrixWorld).applyMatrix4(Mt)),Array.isArray(ze)){const Ze=Ie.groups;for(let it=0,vt=Ze.length;it<vt;it++){const Et=Ze[it],qe=ze[Et.materialIndex];qe&&qe.visible&&L.push(C,Ie,qe,fe,Dt.z,Et,$)}}else ze.visible&&L.push(C,Ie,ze,fe,Dt.z,null,$)}}const Ve=C.children;for(let Ie=0,ze=Ve.length;Ie<ze;Ie++)Ln(Ve[Ie],$,fe,re)}function Qt(C,$,fe,re){const{opaque:ne,transmissive:Ve,transparent:Ie}=C;P.setupLightsView(fe),ct===!0&&Ke.setGlobalState(z.clippingPlanes,fe),re&&E.viewport(D.copy(re)),ne.length>0&&xn(ne,$,fe),Ve.length>0&&xn(Ve,$,fe),Ie.length>0&&xn(Ie,$,fe),E.buffers.depth.setTest(!0),E.buffers.depth.setMask(!0),E.buffers.color.setMask(!0),E.setPolygonOffset(!1)}function pi(C,$,fe,re){if((fe.isScene===!0?fe.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const qe=Rt.has("EXT_color_buffer_half_float")||Rt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new Ji(1,1,{generateMipmaps:!0,type:qe?dr:Ei,minFilter:Fa,samples:Math.max(4,N.samples),stencilBuffer:l,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:It.workingColorSpace})}const Ve=P.state.transmissionRenderTarget[re.id],Ie=re.viewport||D;Ve.setSize(Ie.z*z.transmissionResolutionScale,Ie.w*z.transmissionResolutionScale);const ze=z.getRenderTarget(),Ze=z.getActiveCubeFace(),it=z.getActiveMipmapLevel();z.setRenderTarget(Ve),z.getClearColor(Be),Xe=z.getClearAlpha(),Xe<1&&z.setClearColor(16777215,.5),z.clear(),Nt&&ut.render(fe);const vt=z.toneMapping;z.toneMapping=cr;const Et=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),ct===!0&&Ke.setGlobalState(z.clippingPlanes,re),xn(C,fe,re),ge.updateMultisampleRenderTarget(Ve),ge.updateRenderTargetMipmap(Ve),Rt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ft=0,gn=$.length;Ft<gn;Ft++){const en=$[Ft],{object:Wt,geometry:Tn,material:We,group:Sn}=en;if(We.side===Fi&&Wt.layers.test(re.layers)){const Ot=We.side;We.side=fi,We.needsUpdate=!0,fn(Wt,fe,re,Tn,We,Sn),We.side=Ot,We.needsUpdate=!0,qe=!0}}qe===!0&&(ge.updateMultisampleRenderTarget(Ve),ge.updateRenderTargetMipmap(Ve))}z.setRenderTarget(ze,Ze,it),z.setClearColor(Be,Xe),Et!==void 0&&(re.viewport=Et),z.toneMapping=vt}function xn(C,$,fe){const re=$.isScene===!0?$.overrideMaterial:null;for(let ne=0,Ve=C.length;ne<Ve;ne++){const Ie=C[ne],{object:ze,geometry:Ze,group:it}=Ie;let vt=Ie.material;vt.allowOverride===!0&&re!==null&&(vt=re),ze.layers.test(fe.layers)&&fn(ze,$,fe,Ze,vt,it)}}function fn(C,$,fe,re,ne,Ve){K!==null&&ne.isNodeMaterial&&K.setObject(C,ne),C.onBeforeRender(z,$,fe,re,ne,Ve),C.modelViewMatrix.multiplyMatrices(fe.matrixWorldInverse,C.matrixWorld),C.normalMatrix.getNormalMatrix(C.modelViewMatrix),ne.onBeforeRender(z,$,fe,re,C,Ve),ne.transparent===!0&&ne.side===Fi&&ne.forceSinglePass===!1?(ne.side=fi,ne.needsUpdate=!0,z.renderBufferDirect(fe,$,re,ne,C,Ve),ne.side=za,ne.needsUpdate=!0,z.renderBufferDirect(fe,$,re,ne,C,Ve),ne.side=Fi):z.renderBufferDirect(fe,$,re,ne,C,Ve),C.onAfterRender(z,$,fe,re,ne,Ve)}function Gn(C,$,fe){$.isScene!==!0&&($=dn);const re=ue.get(C),ne=P.state.lights,Ve=P.state.shadowsArray,Ie=ne.state.version,ze=Re.getParameters(C,ne.state,Ve,$,fe,P.state.lightProbeGridArray),Ze=Re.getProgramCacheKey(ze);let it=re.programs;re.environment=C.isMeshStandardMaterial||C.isMeshLambertMaterial||C.isMeshPhongMaterial?$.environment:null,re.fog=$.fog;const vt=C.isMeshStandardMaterial||C.isMeshLambertMaterial&&!C.envMap||C.isMeshPhongMaterial&&!C.envMap;re.envMap=we.get(C.envMap||re.environment,vt),re.envMapRotation=re.environment!==null&&C.envMap===null?$.environmentRotation:C.envMapRotation,it===void 0&&(C.addEventListener("dispose",pt),it=new Map,re.programs=it);let Et=it.get(Ze);if(Et!==void 0){if(re.currentProgram===Et&&re.lightsStateVersion===Ie)return Ti(C,ze),Et}else ze.uniforms=Re.getUniforms(C),K!==null&&C.isNodeMaterial&&K.build(C,fe,ze),C.onBeforeCompile(ze,z),Et=Re.acquireProgram(ze,Ze),it.set(Ze,Et),re.uniforms=ze.uniforms;const qe=re.uniforms;return(!C.isShaderMaterial&&!C.isRawShaderMaterial||C.clipping===!0)&&(qe.clippingPlanes=Ke.uniform),Ti(C,ze),re.needsLights=pr(C),re.lightsStateVersion=Ie,re.needsLights&&(qe.ambientLightColor.value=ne.state.ambient,qe.lightProbe.value=ne.state.probe,qe.sunLights.value=ne.state.sun,qe.sunLightShadows.value=ne.state.sunShadow,qe.directionalLights.value=ne.state.directional,qe.directionalLightShadows.value=ne.state.directionalShadow,qe.spotLights.value=ne.state.spot,qe.spotLightShadows.value=ne.state.spotShadow,qe.rectAreaLights.value=ne.state.rectArea,qe.ltc_1.value=ne.state.rectAreaLTC1,qe.ltc_2.value=ne.state.rectAreaLTC2,qe.pointLights.value=ne.state.point,qe.pointLightShadows.value=ne.state.pointShadow,qe.hemisphereLights.value=ne.state.hemi,qe.sunShadowMatrix.value=ne.state.sunShadowMatrix,qe.sunShadowCascade.value=ne.state.sunShadowCascade,qe.directionalShadowMatrix.value=ne.state.directionalShadowMatrix,qe.spotLightMatrix.value=ne.state.spotLightMatrix,qe.spotLightMap.value=ne.state.spotLightMap,qe.pointShadowMatrix.value=ne.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=Et,re.uniformsList=null,Et}function ii(C){if(C.uniformsList===null){const $=C.currentProgram.getUniforms();C.uniformsList=Dc.seqWithValue($.seq,C.uniforms)}return C.uniformsList}function Ti(C,$){const fe=ue.get(C);fe.outputColorSpace=$.outputColorSpace,fe.batching=$.batching,fe.batchingColor=$.batchingColor,fe.instancing=$.instancing,fe.instancingColor=$.instancingColor,fe.instancingMorph=$.instancingMorph,fe.skinning=$.skinning,fe.morphTargets=$.morphTargets,fe.morphNormals=$.morphNormals,fe.morphColors=$.morphColors,fe.morphTargetsCount=$.morphTargetsCount,fe.numClippingPlanes=$.numClippingPlanes,fe.numIntersection=$.numClipIntersection,fe.vertexAlphas=$.vertexAlphas,fe.vertexTangents=$.vertexTangents,fe.toneMapping=$.toneMapping}function hr(C,$){if(C.length===0)return null;if(C.length===1)return C[0].texture!==null?C[0]:null;R.setFromMatrixPosition($.matrixWorld);for(let fe=0,re=C.length;fe<re;fe++){const ne=C[fe];if(ne.texture!==null&&ne.boundingBox.containsPoint(R))return ne}return null}function $t(C,$,fe,re,ne){$.isScene!==!0&&($=dn),ge.resetTextureUnits();const Ve=$.fog,Ie=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?$.environment:null,ze=q===null?z.outputColorSpace:q.isXRRenderTarget===!0?q.texture.colorSpace:It.workingColorSpace,Ze=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,it=we.get(re.envMap||Ie,Ze),vt=re.vertexColors===!0&&!!fe.attributes.color&&fe.attributes.color.itemSize===4,Et=!!fe.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!fe.morphAttributes.position,Ft=!!fe.morphAttributes.normal,gn=!!fe.morphAttributes.color;let en=cr;re.toneMapped&&(q===null||q.isXRRenderTarget===!0)&&(en=z.toneMapping);const Wt=fe.morphAttributes.position||fe.morphAttributes.normal||fe.morphAttributes.color,Tn=Wt!==void 0?Wt.length:0,We=ue.get(re),Sn=P.state.lights;if(ct===!0&&(Vt===!0||C!==Z)){const Yt=C===Z&&re.id===W;Ke.setState(re,C,Yt)}let Ot=!1;re.version===We.__version?(We.needsLights&&We.lightsStateVersion!==Sn.state.version||We.outputColorSpace!==ze||ne.isBatchedMesh&&We.batching===!1||!ne.isBatchedMesh&&We.batching===!0||ne.isBatchedMesh&&We.batchingColor===!0&&ne._colorsTexture===null||ne.isBatchedMesh&&We.batchingColor===!1&&ne._colorsTexture!==null||ne.isInstancedMesh&&We.instancing===!1||!ne.isInstancedMesh&&We.instancing===!0||ne.isSkinnedMesh&&We.skinning===!1||!ne.isSkinnedMesh&&We.skinning===!0||ne.isInstancedMesh&&We.instancingColor===!0&&ne.instanceColor===null||ne.isInstancedMesh&&We.instancingColor===!1&&ne.instanceColor!==null||ne.isInstancedMesh&&We.instancingMorph===!0&&ne.morphTexture===null||ne.isInstancedMesh&&We.instancingMorph===!1&&ne.morphTexture!==null||We.envMap!==it||re.fog===!0&&We.fog!==Ve||We.numClippingPlanes!==void 0&&(We.numClippingPlanes!==Ke.numPlanes||We.numIntersection!==Ke.numIntersection)||We.vertexAlphas!==vt||We.vertexTangents!==Et||We.morphTargets!==qe||We.morphNormals!==Ft||We.morphColors!==gn||We.toneMapping!==en||We.morphTargetsCount!==Tn||!!We.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(Ot=!0):(Ot=!0,We.__version=re.version);let Bn=We.currentProgram;Ot===!0&&(Bn=Gn(re,$,ne),K&&re.isNodeMaterial&&K.onUpdateProgram(re,Bn,We));let wt=!1,Ii=!1,mr=!1;const Gt=Bn.getUniforms(),on=We.uniforms;if(E.useProgram(Bn.program)&&(wt=!0,Ii=!0,mr=!0),re.id!==W&&(W=re.id,Ii=!0),We.needsLights){const Yt=hr(P.state.lightProbeGridArray,ne);We.lightProbeGrid!==Yt&&(We.lightProbeGrid=Yt,Ii=!0)}if(wt||Z!==C){E.buffers.depth.getReversed()&&C.reversedDepth!==!0&&(C._reversedDepth=!0,C.updateProjectionMatrix()),Gt.setValue(Y,"projectionMatrix",C.projectionMatrix),Gt.setValue(Y,"viewMatrix",C.matrixWorldInverse);const wi=Gt.map.cameraPosition;wi!==void 0&&wi.setValue(Y,Xt.setFromMatrixPosition(C.matrixWorld)),N.logarithmicDepthBuffer&&Gt.setValue(Y,"logDepthBufFC",2/(Math.log(C.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Gt.setValue(Y,"isOrthographic",C.isOrthographicCamera===!0),Z!==C&&(Z=C,Ii=!0,mr=!0)}if(We.needsLights&&(Sn.state.sunShadowMap.length>0&&Gt.setValue(Y,"sunShadowMap",Sn.state.sunShadowMap,ge),Sn.state.directionalShadowMap.length>0&&Gt.setValue(Y,"directionalShadowMap",Sn.state.directionalShadowMap,ge),Sn.state.spotShadowMap.length>0&&Gt.setValue(Y,"spotShadowMap",Sn.state.spotShadowMap,ge),Sn.state.pointShadowMap.length>0&&Gt.setValue(Y,"pointShadowMap",Sn.state.pointShadowMap,ge)),ne.isSkinnedMesh){Gt.setOptional(Y,ne,"bindMatrix"),Gt.setOptional(Y,ne,"bindMatrixInverse");const Yt=ne.skeleton;Yt&&(Yt.boneTexture===null&&Yt.computeBoneTexture(),Gt.setValue(Y,"boneTexture",Yt.boneTexture,ge))}ne.isBatchedMesh&&(Gt.setOptional(Y,ne,"batchingTexture"),Gt.setValue(Y,"batchingTexture",ne._matricesTexture,ge),Gt.setOptional(Y,ne,"batchingIdTexture"),Gt.setValue(Y,"batchingIdTexture",ne._indirectTexture,ge),Gt.setOptional(Y,ne,"batchingColorTexture"),ne._colorsTexture!==null&&Gt.setValue(Y,"batchingColorTexture",ne._colorsTexture,ge));const ki=fe.morphAttributes;if((ki.position!==void 0||ki.normal!==void 0||ki.color!==void 0)&&X.update(ne,fe,Bn),(Ii||We.receiveShadow!==ne.receiveShadow)&&(We.receiveShadow=ne.receiveShadow,Gt.setValue(Y,"receiveShadow",ne.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&$.environment!==null&&(on.envMapIntensity.value=$.environmentIntensity),on.dfgLUT!==void 0&&(on.dfgLUT.value=Y1()),Ii){if(Gt.setValue(Y,"toneMappingExposure",z.toneMappingExposure),We.needsLights&&ga(on,mr),Ve&&re.fog===!0&&Qe.refreshFogUniforms(on,Ve),Qe.refreshMaterialUniforms(on,re,pe,le,P.state.transmissionRenderTarget[C.id]),We.needsLights&&We.lightProbeGrid){const Yt=We.lightProbeGrid;on.probesSH.value=Yt.texture,on.probesMin.value.copy(Yt.boundingBox.min),on.probesMax.value.copy(Yt.boundingBox.max),on.probesResolution.value.copy(Yt.resolution)}Dc.upload(Y,ii(We),on,ge)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Dc.upload(Y,ii(We),on,ge),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Gt.setValue(Y,"center",ne.center),Gt.setValue(Y,"modelViewMatrix",ne.modelViewMatrix),Gt.setValue(Y,"normalMatrix",ne.normalMatrix),Gt.setValue(Y,"modelMatrix",ne.matrixWorld),re.uniformsGroups!==void 0){const Yt=re.uniformsGroups;for(let wi=0,zi=Yt.length;wi<zi;wi++){const Hi=Yt[wi];ye.update(Hi,Bn),ye.bind(Hi,Bn)}}return Bn}function ga(C,$){C.ambientLightColor.needsUpdate=$,C.lightProbe.needsUpdate=$,C.sunLights.needsUpdate=$,C.sunLightShadows.needsUpdate=$,C.directionalLights.needsUpdate=$,C.directionalLightShadows.needsUpdate=$,C.pointLights.needsUpdate=$,C.pointLightShadows.needsUpdate=$,C.spotLights.needsUpdate=$,C.spotLightShadows.needsUpdate=$,C.rectAreaLights.needsUpdate=$,C.hemisphereLights.needsUpdate=$}function pr(C){return C.isMeshLambertMaterial||C.isMeshToonMaterial||C.isMeshPhongMaterial||C.isMeshStandardMaterial||C.isShadowMaterial||C.isShaderMaterial&&C.lights===!0}this.getActiveCubeFace=function(){return oe},this.getActiveMipmapLevel=function(){return ce},this.getRenderTarget=function(){return q},this.setRenderTargetTextures=function(C,$,fe){const re=ue.get(C);re.__autoAllocateDepthBuffer=C.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ue.get(C.texture).__webglTexture=$,ue.get(C.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:fe,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(C,$){const fe=ue.get(C);fe.__webglFramebuffer=$,fe.__useDefaultFramebuffer=$===void 0},this.setRenderTarget=function(C,$=0,fe=0){q=C,oe=$,ce=fe;let re=null,ne=!1,Ve=!1;if(C){const ze=ue.get(C);if(ze.__useDefaultFramebuffer!==void 0){E.bindFramebuffer(Y.FRAMEBUFFER,ze.__webglFramebuffer),D.copy(C.viewport),se.copy(C.scissor),Me=C.scissorTest,E.viewport(D),E.scissor(se),E.setScissorTest(Me),W=-1;return}else if(ze.__webglFramebuffer===void 0)ge.setupRenderTarget(C);else if(ze.__hasExternalTextures)ge.rebindTextures(C,ue.get(C.texture).__webglTexture,ue.get(C.depthTexture).__webglTexture);else if(C.depthBuffer){const vt=C.depthTexture;if(ze.__boundDepthTexture!==vt){if(vt!==null&&ue.has(vt)&&(C.width!==vt.image.width||C.height!==vt.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ge.setupDepthRenderbuffer(C)}}const Ze=C.texture;(Ze.isData3DTexture||Ze.isDataArrayTexture||Ze.isCompressedArrayTexture)&&(Ve=!0);const it=ue.get(C).__webglFramebuffer;C.isWebGLCubeRenderTarget?(Array.isArray(it[$])?re=it[$][fe]:re=it[$],ne=!0):C.samples>0&&ge.useMultisampledRTT(C)===!1?re=ue.get(C).__webglMultisampledFramebuffer:Array.isArray(it)?re=it[fe]:re=it,D.copy(C.viewport),se.copy(C.scissor),Me=C.scissorTest}else D.copy(He).multiplyScalar(pe).floor(),se.copy(yt).multiplyScalar(pe).floor(),Me=tn;if(fe!==0&&(re=ie),E.bindFramebuffer(Y.FRAMEBUFFER,re)&&E.drawBuffers(C,re),E.viewport(D),E.scissor(se),E.setScissorTest(Me),ne){const ze=ue.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_CUBE_MAP_POSITIVE_X+$,ze.__webglTexture,fe)}else if(Ve){const ze=$;for(let Ze=0;Ze<C.textures.length;Ze++){const it=ue.get(C.textures[Ze]);Y.framebufferTextureLayer(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0+Ze,it.__webglTexture,fe,ze)}}else if(C!==null&&fe!==0){const ze=ue.get(C.texture);Y.framebufferTexture2D(Y.FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ze.__webglTexture,fe)}W=-1};function Ir(C){const $=ue.get(C);return($.__readFormat!==C.format||$.__readType!==C.type)&&($.__readFormat=C.format,$.__readType=C.type,$.__formatReadable=N.textureFormatReadable(C.format),$.__typeReadable=N.textureTypeReadable(C.type)),$}this.readRenderTargetPixels=function(C,$,fe,re,ne,Ve,Ie,ze=0){if(!(C&&C.isWebGLRenderTarget)){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ze=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ze=Ze[Ie]),Ze){E.bindFramebuffer(Y.FRAMEBUFFER,Ze);try{const it=C.textures[ze],vt=it.format,Et=it.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+ze);const qe=Ir(it);if(qe.__formatReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){kt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}$>=0&&$<=C.width-re&&fe>=0&&fe<=C.height-ne&&Y.readPixels($,fe,re,ne,Ue.convert(vt),Ue.convert(Et),Ve)}finally{const it=q!==null?ue.get(q).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,it)}}},this.readRenderTargetPixelsAsync=async function(C,$,fe,re,ne,Ve,Ie,ze=0){if(!(C&&C.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ze=ue.get(C).__webglFramebuffer;if(C.isWebGLCubeRenderTarget&&Ie!==void 0&&(Ze=Ze[Ie]),Ze)if($>=0&&$<=C.width-re&&fe>=0&&fe<=C.height-ne){E.bindFramebuffer(Y.FRAMEBUFFER,Ze);const it=C.textures[ze],vt=it.format,Et=it.type;C.textures.length>1&&Y.readBuffer(Y.COLOR_ATTACHMENT0+ze);const qe=Ir(it);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ft=Y.createBuffer();Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ft),Y.bufferData(Y.PIXEL_PACK_BUFFER,Ve.byteLength,Y.STREAM_READ),Y.readPixels($,fe,re,ne,Ue.convert(vt),Ue.convert(Et),0),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null);const gn=q!==null?ue.get(q).__webglFramebuffer:null;E.bindFramebuffer(Y.FRAMEBUFFER,gn);const en=Y.fenceSync(Y.SYNC_GPU_COMMANDS_COMPLETE,0);return Y.flush(),await nM(Y,en,4),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,Ft),Y.getBufferSubData(Y.PIXEL_PACK_BUFFER,0,Ve),Y.bindBuffer(Y.PIXEL_PACK_BUFFER,null),Y.deleteBuffer(Ft),Y.deleteSync(en),Ve}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(C,$=null,fe=0){const re=Math.pow(2,-fe),ne=Math.floor(C.image.width*re),Ve=Math.floor(C.image.height*re),Ie=$!==null?$.x:0,ze=$!==null?$.y:0;ge.setTexture2D(C,0),Y.copyTexSubImage2D(Y.TEXTURE_2D,fe,0,0,Ie,ze,ne,Ve),E.unbindTexture()},this.copyTextureToTexture=function(C,$,fe=null,re=null,ne=0,Ve=0){let Ie,ze,Ze,it,vt,Et,qe,Ft,gn;const en=C.isCompressedTexture?C.mipmaps[Ve]:C.image;if(fe!==null)Ie=fe.max.x-fe.min.x,ze=fe.max.y-fe.min.y,Ze=fe.isBox3?fe.max.z-fe.min.z:1,it=fe.min.x,vt=fe.min.y,Et=fe.isBox3?fe.min.z:0;else{const on=Math.pow(2,-ne);Ie=Math.floor(en.width*on),ze=Math.floor(en.height*on),C.isDataArrayTexture?Ze=en.depth:C.isData3DTexture?Ze=Math.floor(en.depth*on):Ze=1,it=0,vt=0,Et=0}re!==null?(qe=re.x,Ft=re.y,gn=re.z):(qe=0,Ft=0,gn=0);const Wt=Ue.convert($.format),Tn=Ue.convert($.type);let We;$.isData3DTexture?(ge.setTexture3D($,0),We=Y.TEXTURE_3D):$.isDataArrayTexture||$.isCompressedArrayTexture?(ge.setTexture2DArray($,0),We=Y.TEXTURE_2D_ARRAY):(ge.setTexture2D($,0),We=Y.TEXTURE_2D),E.activeTexture(Y.TEXTURE0),E.pixelStorei(Y.UNPACK_FLIP_Y_WEBGL,$.flipY),E.pixelStorei(Y.UNPACK_PREMULTIPLY_ALPHA_WEBGL,$.premultiplyAlpha),E.pixelStorei(Y.UNPACK_ALIGNMENT,$.unpackAlignment);const Sn=E.getParameter(Y.UNPACK_ROW_LENGTH),Ot=E.getParameter(Y.UNPACK_IMAGE_HEIGHT),Bn=E.getParameter(Y.UNPACK_SKIP_PIXELS),wt=E.getParameter(Y.UNPACK_SKIP_ROWS),Ii=E.getParameter(Y.UNPACK_SKIP_IMAGES);E.pixelStorei(Y.UNPACK_ROW_LENGTH,en.width),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,en.height),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,it),E.pixelStorei(Y.UNPACK_SKIP_ROWS,vt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Et);const mr=C.isDataArrayTexture||C.isData3DTexture,Gt=$.isDataArrayTexture||$.isData3DTexture;if(C.isDepthTexture){const on=ue.get(C),ki=ue.get($),Yt=ue.get(on.__renderTarget),wi=ue.get(ki.__renderTarget);E.bindFramebuffer(Y.READ_FRAMEBUFFER,Yt.__webglFramebuffer),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,wi.__webglFramebuffer);for(let zi=0;zi<Ze;zi++)mr&&(Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ue.get(C).__webglTexture,ne,Et+zi),Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ue.get($).__webglTexture,Ve,gn+zi)),Y.blitFramebuffer(it,vt,Ie,ze,qe,Ft,Ie,ze,Y.DEPTH_BUFFER_BIT,Y.NEAREST);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else if(ne!==0||C.isRenderTargetTexture||ue.has(C)){const on=ue.get(C),ki=ue.get($);E.bindFramebuffer(Y.READ_FRAMEBUFFER,H),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,te);for(let Yt=0;Yt<Ze;Yt++)mr?Y.framebufferTextureLayer(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,on.__webglTexture,ne,Et+Yt):Y.framebufferTexture2D(Y.READ_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,on.__webglTexture,ne),Gt?Y.framebufferTextureLayer(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,ki.__webglTexture,Ve,gn+Yt):Y.framebufferTexture2D(Y.DRAW_FRAMEBUFFER,Y.COLOR_ATTACHMENT0,Y.TEXTURE_2D,ki.__webglTexture,Ve),ne!==0?Y.blitFramebuffer(it,vt,Ie,ze,qe,Ft,Ie,ze,Y.COLOR_BUFFER_BIT,Y.NEAREST):Gt?Y.copyTexSubImage3D(We,Ve,qe,Ft,gn+Yt,it,vt,Ie,ze):Y.copyTexSubImage2D(We,Ve,qe,Ft,it,vt,Ie,ze);E.bindFramebuffer(Y.READ_FRAMEBUFFER,null),E.bindFramebuffer(Y.DRAW_FRAMEBUFFER,null)}else Gt?C.isDataTexture||C.isData3DTexture?Y.texSubImage3D(We,Ve,qe,Ft,gn,Ie,ze,Ze,Wt,Tn,en.data):$.isCompressedArrayTexture?Y.compressedTexSubImage3D(We,Ve,qe,Ft,gn,Ie,ze,Ze,Wt,en.data):Y.texSubImage3D(We,Ve,qe,Ft,gn,Ie,ze,Ze,Wt,Tn,en):C.isDataTexture?Y.texSubImage2D(Y.TEXTURE_2D,Ve,qe,Ft,Ie,ze,Wt,Tn,en.data):C.isCompressedTexture?Y.compressedTexSubImage2D(Y.TEXTURE_2D,Ve,qe,Ft,en.width,en.height,Wt,en.data):Y.texSubImage2D(Y.TEXTURE_2D,Ve,qe,Ft,Ie,ze,Wt,Tn,en);E.pixelStorei(Y.UNPACK_ROW_LENGTH,Sn),E.pixelStorei(Y.UNPACK_IMAGE_HEIGHT,Ot),E.pixelStorei(Y.UNPACK_SKIP_PIXELS,Bn),E.pixelStorei(Y.UNPACK_SKIP_ROWS,wt),E.pixelStorei(Y.UNPACK_SKIP_IMAGES,Ii),Ve===0&&$.generateMipmaps&&Y.generateMipmap(We),E.unbindTexture()},this.initRenderTarget=function(C){ue.get(C).__webglFramebuffer===void 0&&ge.setupRenderTarget(C)},this.initTexture=function(C){C.isCubeTexture?ge.setTextureCube(C,0):C.isData3DTexture?ge.setTexture3D(C,0):C.isDataArrayTexture||C.isCompressedArrayTexture?ge.setTexture2DArray(C,0):ge.setTexture2D(C,0),E.unbindTexture()},this.resetState=function(){oe=0,ce=0,q=null,E.reset(),ke.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return lr}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=It._getDrawingBufferColorSpace(e),t.unpackColorSpace=It._getUnpackColorSpace()}}class U0 extends Ih{constructor(e){super(e)}load(e,t,a,s){const l=this,u=new BM(this.manager);u.setPath(this.path),u.setResponseType("arraybuffer"),u.setRequestHeader(this.requestHeader),u.setWithCredentials(this.withCredentials),u.load(e,function(d){try{t(l.parse(d))}catch(m){s?s(m):console.error(m),l.manager.itemError(e)}},a,s)}parse(e){function t(p){const v=new DataView(p),x=32/8*3+32/8*3*3+16/8,_=v.getUint32(80,!0);if(80+32/8+_*x===v.byteLength)return!0;const w=[115,111,108,105,100];for(let b=0;b<5;b++)if(a(w,v,b))return!1;return!0}function a(p,v,x){for(let _=0,M=p.length;_<M;_++)if(p[_]!==v.getUint8(x+_))return!1;return!0}function s(p){const v=new DataView(p),x=v.getUint32(80,!0);let _,M,w,b=!1,y,S,U,V,R;for(let B=0;B<70;B++)v.getUint32(B,!1)==1129270351&&v.getUint8(B+4)==82&&v.getUint8(B+5)==61&&(b=!0,y=new Float32Array(x*3*3),S=v.getUint8(B+6)/255,U=v.getUint8(B+7)/255,V=v.getUint8(B+8)/255,R=v.getUint8(B+9)/255);const L=84,P=50,I=new ni,T=new Float32Array(x*3*3),F=new Float32Array(x*3*3),z=new Pt;for(let B=0;B<x;B++){const K=L+B*P,ie=v.getFloat32(K,!0),H=v.getFloat32(K+4,!0),te=v.getFloat32(K+8,!0);if(b){const oe=v.getUint16(K+48,!0);(oe&32768)===0?(_=(oe&31)/31,M=(oe>>5&31)/31,w=(oe>>10&31)/31):(_=S,M=U,w=V)}for(let oe=1;oe<=3;oe++){const ce=K+oe*12,q=B*3*3+(oe-1)*3;T[q]=v.getFloat32(ce,!0),T[q+1]=v.getFloat32(ce+4,!0),T[q+2]=v.getFloat32(ce+8,!0),F[q]=ie,F[q+1]=H,F[q+2]=te,b&&(z.setRGB(_,M,w,Mi),y[q]=z.r,y[q+1]=z.g,y[q+2]=z.b)}}return I.setAttribute("position",new hi(T,3)),I.setAttribute("normal",new hi(F,3)),b&&(I.setAttribute("color",new hi(y,3)),I.hasColors=!0,I.alpha=R),I}function l(p){const v=new ni,x=/solid([\s\S]*?)endsolid/g,_=/facet([\s\S]*?)endfacet/g,M=/solid\s(.+)/;let w=0;const b=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,y=new RegExp("vertex"+b+b+b,"g"),S=new RegExp("normal"+b+b+b,"g"),U=[],V=[],R=[],L=new J;let P,I=0,T=0,F=0;for(;(P=x.exec(p))!==null;){T=F;const z=P[0],B=(P=M.exec(z))!==null?P[1]:"";for(R.push(B);(P=_.exec(z))!==null;){let H=0,te=0;const oe=P[0];for(;(P=S.exec(oe))!==null;)L.x=parseFloat(P[1]),L.y=parseFloat(P[2]),L.z=parseFloat(P[3]),te++;for(;(P=y.exec(oe))!==null;)U.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),V.push(L.x,L.y,L.z),H++,F++;te!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+w),H!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+w),w++}const K=T,ie=F-T;v.userData.groupNames=R,v.addGroup(K,ie,I),I++}return v.setAttribute("position",new Rn(U,3)),v.setAttribute("normal",new Rn(V,3)),v}function u(p){return typeof p!="string"?new TextDecoder().decode(p):p}function d(p){if(typeof p=="string"){const v=new Uint8Array(p.length);for(let x=0;x<p.length;x++)v[x]=p.charCodeAt(x)&255;return v.buffer||v}else return p}const m=d(e);return t(m)?s(m):l(u(e))}}function F0(i,e=Math.PI/3){const t=i.index?i.toNonIndexed():i,a=t.attributes.position,s=a.count;let l;if(a.isBufferAttribute===!0&&a.itemSize===3&&a.normalized===!1)l=a.array;else{l=new Float64Array(s*3);for(let R=0;R<s;R++)l[3*R+0]=a.getX(R),l[3*R+1]=a.getY(R),l[3*R+2]=a.getZ(R)}const u=Math.cos(e),d=(1+1e-10)*100,m=s/3,p=new Float64Array(m*3);for(let R=0;R<m;R++){const L=9*R,P=l[L+0],I=l[L+1],T=l[L+2],F=l[L+3],z=l[L+4],B=l[L+5],K=l[L+6],ie=l[L+7],H=l[L+8],te=K-F,oe=ie-z,ce=H-B,q=P-F,W=I-z,Z=T-B,D=oe*Z-ce*W,se=ce*q-te*Z,Me=te*W-oe*q,Be=1/(Math.sqrt(D*D+se*se+Me*Me)||1);p[3*R+0]=D*Be,p[3*R+1]=se*Be,p[3*R+2]=Me*Be}const v=new Int32Array(s),x=new Float64Array(s*3);let _=1;for(;_<s*2;)_<<=1;const M=_-1,w=new Int32Array(_);let b=0;for(let R=0;R<s;R++){const L=3*R,P=Math.trunc(l[L+0]*d),I=Math.trunc(l[L+1]*d),T=Math.trunc(l[L+2]*d);let F=(Math.imul(P,73856093)^Math.imul(I,19349663)^Math.imul(T,83492791))&M;for(;;){const z=w[F];if(z===0){const K=3*b;x[K+0]=P,x[K+1]=I,x[K+2]=T,w[F]=b+1,v[R]=b++;break}const B=3*(z-1);if(x[B+0]===P&&x[B+1]===I&&x[B+2]===T){v[R]=z-1;break}F=F+1&M}}const y=new Int32Array(b+1);for(let R=0;R<s;R++)y[v[R]+1]++;for(let R=0;R<b;R++)y[R+1]+=y[R];const S=new Int32Array(s),U=y.slice(0,b);for(let R=0;R<m;R++){const L=3*R;S[U[v[L+0]]++]=R,S[U[v[L+1]]++]=R,S[U[v[L+2]]++]=R}const V=new Float32Array(s*3);for(let R=0;R<m;R++){const L=3*R,P=p[L+0],I=p[L+1],T=p[L+2];for(let F=0;F<3;F++){const z=L+F,B=v[z];let K=0,ie=0,H=0;for(let oe=y[B],ce=y[B+1];oe<ce;oe++){const q=3*S[oe],W=p[q+0],Z=p[q+1],D=p[q+2];P*W+I*Z+T*D>u&&(K+=W,ie+=Z,H+=D)}const te=1/(Math.sqrt(K*K+ie*ie+H*H)||1);V[3*z+0]=K*te,V[3*z+1]=ie*te,V[3*z+2]=H*te}}return t.setAttribute("normal",new hi(V,3,!1)),t}const O0={type:"change"},zh={type:"start"},e_={type:"end"},yc=new Dh,I0=new Lr,j1=Math.cos(70*aM.DEG2RAD),Cn=new J,ui=2*Math.PI,jt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},pf=1e-6;class K1 extends KM{constructor(e,t=null){super(e,t),this.state=jt.NONE,this.target=new J,this.cursor=new J,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.DOLLY,RIGHT:Nr.PAN},this.touches={ONE:Ps.ROTATE,TWO:Ps.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new J,this._lastQuaternion=new fa,this._lastTargetPosition=new J,this._quat=new fa().setFromUnitVectors(e.up,new J(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new c0,this._sphericalDelta=new c0,this._scale=1,this._panOffset=new J,this._rotateStart=new lt,this._rotateEnd=new lt,this._rotateDelta=new lt,this._panStart=new lt,this._panEnd=new lt,this._panDelta=new lt,this._dollyStart=new lt,this._dollyEnd=new lt,this._dollyDelta=new lt,this._dollyDirection=new J,this._mouse=new lt,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=J1.bind(this),this._onPointerDown=Z1.bind(this),this._onPointerUp=Q1.bind(this),this._onContextMenu=sC.bind(this),this._onMouseWheel=nC.bind(this),this._onKeyDown=iC.bind(this),this._onTouchStart=rC.bind(this),this._onTouchMove=aC.bind(this),this._onMouseDown=eC.bind(this),this._onMouseMove=tC.bind(this),this._interceptControlDown=oC.bind(this),this._interceptControlUp=lC.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=jt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(O0),this.update(),this.state=jt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Cn.copy(t).sub(this.target),Cn.applyQuaternion(this._quat),this._spherical.setFromVector3(Cn),this.autoRotate&&this.state===jt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let a=this.minAzimuthAngle,s=this.maxAzimuthAngle;isFinite(a)&&isFinite(s)&&(a<-Math.PI?a+=ui:a>Math.PI&&(a-=ui),s<-Math.PI?s+=ui:s>Math.PI&&(s-=ui),a<=s?this._spherical.theta=Math.max(a,Math.min(s,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(a+s)/2?Math.max(a,this._spherical.theta):Math.min(s,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let l=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const u=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),l=u!=this._spherical.radius}if(Cn.setFromSpherical(this._spherical),Cn.applyQuaternion(this._quatInverse),t.copy(this.target).add(Cn),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let u=null;if(this.object.isPerspectiveCamera){const d=Cn.length();u=this._clampDistance(d*this._scale);const m=d-u;this.object.position.addScaledVector(this._dollyDirection,m),this.object.updateMatrixWorld(),l=!!m}else if(this.object.isOrthographicCamera){const d=new J(this._mouse.x,this._mouse.y,0);d.unproject(this.object);const m=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),l=m!==this.object.zoom;const p=new J(this._mouse.x,this._mouse.y,0);p.unproject(this.object),this.object.position.sub(p).add(d),this.object.updateMatrixWorld(),u=Cn.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;u!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(u).add(this.object.position):(yc.origin.copy(this.object.position),yc.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yc.direction))<j1?this.object.lookAt(this.target):(I0.setFromNormalAndCoplanarPoint(this.object.up,this.target),yc.intersectPlane(I0,this.target))))}else if(this.object.isOrthographicCamera){const u=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),u!==this.object.zoom&&(this.object.updateProjectionMatrix(),l=!0)}return this._scale=1,this._performCursorZoom=!1,l||this._lastPosition.distanceToSquared(this.object.position)>pf||8*(1-this._lastQuaternion.dot(this.object.quaternion))>pf||this._lastTargetPosition.distanceToSquared(this.target)>pf?(this.dispatchEvent(O0),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?ui/60*this.autoRotateSpeed*e:ui/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Cn.setFromMatrixColumn(t,0),Cn.multiplyScalar(-e),this._panOffset.add(Cn)}_panUp(e,t){this.screenSpacePanning===!0?Cn.setFromMatrixColumn(t,1):(Cn.setFromMatrixColumn(t,0),Cn.crossVectors(this.object.up,Cn)),Cn.multiplyScalar(e),this._panOffset.add(Cn)}_pan(e,t){const a=this.domElement;if(this.object.isPerspectiveCamera){const s=this.object.position;Cn.copy(s).sub(this.target);let l=Cn.length();l*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*l/a.clientHeight,this.object.matrix),this._panUp(2*t*l/a.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/a.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/a.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const a=this.domElement.getBoundingClientRect(),s=e-a.left,l=t-a.top,u=a.width,d=a.height;this._mouse.x=s/u*2-1,this._mouse.y=-(l/d)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-ui*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._rotateStart.set(a,s)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panStart.set(a,s)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyStart.set(0,l)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const a=this._getSecondPointerPosition(e),s=.5*(e.pageX+a.x),l=.5*(e.pageY+a.y);this._rotateEnd.set(s,l)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(ui*this._rotateDelta.x/t.clientHeight),this._rotateUp(ui*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),a=.5*(e.pageX+t.x),s=.5*(e.pageY+t.y);this._panEnd.set(a,s)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),a=e.pageX-t.x,s=e.pageY-t.y,l=Math.sqrt(a*a+s*s);this._dollyEnd.set(0,l),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const u=(e.pageX+t.x)*.5,d=(e.pageY+t.y)*.5;this._updateZoomParameters(u,d)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new lt,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,a={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:a.deltaY*=16;break;case 2:a.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(a.deltaY*=10),a}}function Z1(i){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(i.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(i)&&(this._addPointer(i),i.pointerType==="touch"?this._onTouchStart(i):this._onMouseDown(i),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function J1(i){this.enabled!==!1&&(i.pointerType==="touch"?this._onTouchMove(i):this._onMouseMove(i))}function Q1(i){switch(this._removePointer(i),this._pointers.length){case 0:this.domElement.releasePointerCapture(i.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(e_),this.state=jt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function eC(i){let e;switch(i.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Nr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(i),this.state=jt.DOLLY;break;case Nr.ROTATE:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}break;case Nr.PAN:if(i.ctrlKey||i.metaKey||i.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(i),this.state=jt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(i),this.state=jt.PAN}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(zh)}function tC(i){switch(this.state){case jt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(i);break;case jt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(i);break;case jt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(i);break}}function nC(i){this.enabled===!1||this.enableZoom===!1||this.state!==jt.NONE||(i.preventDefault(),this.dispatchEvent(zh),this._handleMouseWheel(this._customWheelEvent(i)),this.dispatchEvent(e_))}function iC(i){this.enabled!==!1&&this._handleKeyDown(i)}function rC(i){switch(this._trackPointer(i),this._pointers.length){case 1:switch(this.touches.ONE){case Ps.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(i),this.state=jt.TOUCH_ROTATE;break;case Ps.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(i),this.state=jt.TOUCH_PAN;break;default:this.state=jt.NONE}break;case 2:switch(this.touches.TWO){case Ps.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(i),this.state=jt.TOUCH_DOLLY_PAN;break;case Ps.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(i),this.state=jt.TOUCH_DOLLY_ROTATE;break;default:this.state=jt.NONE}break;default:this.state=jt.NONE}this.state!==jt.NONE&&this.dispatchEvent(zh)}function aC(i){switch(this._trackPointer(i),this.state){case jt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(i),this.update();break;case jt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(i),this.update();break;case jt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(i),this.update();break;case jt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(i),this.update();break;default:this.state=jt.NONE}}function sC(i){this.enabled!==!1&&i.preventDefault()}function oC(i){i.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function lC(i){i.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const mf="../../",gf={label:"PR #28 (viewer-compare)",sha:"1a90d05f2e6ed46d128f195c325aee3400db1bec".slice(0,7)},k0=i=>i!=null&&i.p14?"fea/":`model/${i==null?void 0:i.id}/fea/`,Mc=new URLSearchParams(location.search),vf=(location.pathname.match(/\/(pr\/\d+\/)/)||[])[1]||"",cC=i=>!i||i==="main"?"":i.replace(/^\/+|\/+$/g,"")+"/",Ni={added:"#32a467",removed:"#e76a6e",changed:"#f0b726",moved:"#4c90f0",same:"#738091"},z0=i=>{const e=i.split(",");return[e[0],...[0,1,2].map(t=>(e[4+t]-e[1+t]).toFixed(2))].join(",")};function H0(i){const e=i.attributes.position,t=e.count;i.computeBoundingBox();const a=i.boundingBox;let s=0,l=0,u=0;for(let m=0;m<t;m++)s+=e.getX(m),l+=e.getY(m),u+=e.getZ(m);const d=m=>(Math.round(m*100)/100).toFixed(2);return[t/3,...a.min.toArray(),...a.max.toArray(),s/t,l/t,u/t].map((m,p)=>p?d(m):m).join(",")}function uC(i,e){const t=i==null?void 0:i.motion,a=u=>u*u*(3-2*u),s=t?t.a_latch+(t.a_release-t.a_latch)*a(Math.min(e,1)):0,l=t?t.r*(Math.cos(s*Math.PI/180)-Math.cos(t.a_latch*Math.PI/180)):0;return{mo:t,alpha:s,kx:l}}const Pr=i=>i.replace(/^N2_/,"").replace(/_/g," "),_f=3,dC=22,fC=["N2_keeper","N2_armature"],hC={Z:{label:"Straight pull (R3)",parts:{N2_adapter:"Z",N2_receiver:"Z",N2_keeper:"Z"}},Z_distal_lost:{label:"Straight pull, distal roof lost",parts:{N2_adapter:"Z",N2_receiver:"Z_distal_lost",N2_keeper:"Z_distal_lost"}},XZ90:{label:"Side pull 90° (outside R3)",parts:{N2_adapter:"XZ90",N2_receiver:"XZ90"}}};function t_(i,e){if(i>1)return e.setRGB(.85,.1,.85);const t=[[.19,.07,.23],[.16,.47,.93],[.1,.84,.66],[.64,.99,.24],[.98,.73,.22],[.86,.22,.05]],a=Math.max(0,i)*(t.length-1),s=Math.min(Math.floor(a),t.length-2),l=a-s;return e.setRGB(...t[s].map((u,d)=>u+(t[s+1][d]-u)*l))}const pC=`linear-gradient(90deg, ${[0,.2,.4,.6,.8,1].map(i=>"#"+t_(i,new Pt).getHexString()).join(",")})`;function mC(i){const e=Pe.useRef(null);if(!e.current){const t=new xM;t.add(new WM(16777215,3359829,2.2));const a=new s0(16777215,1.6);a.position.set(60,-40,90),t.add(a);const s=new s0(16777215,.6);s.position.set(-50,60,-30),t.add(s);const l=new Ui(35,1,.1,3e3);l.up.set(0,0,1),e.current={scene:t,cam:l,parts:new Map,cparts:new Map,fea:new Map,markers:new No},t.add(e.current.markers)}return Pe.useEffect(()=>{const t=e.current,a=new q1({antialias:!0,preserveDrawingBuffer:!0});a.setPixelRatio(devicePixelRatio),a.setClearColor(1382686),i.current.appendChild(a.domElement);const s=new K1(t.cam,a.domElement);Object.assign(s,{enableDamping:!0,dampingFactor:.12,rotateSpeed:.9,zoomToCursor:!0,screenSpacePanning:!0}),s.mouseButtons={LEFT:Nr.ROTATE,MIDDLE:Nr.PAN,RIGHT:Nr.PAN},t.oc=s,t.r=a;let l=!0;const u=new jM;a.domElement.addEventListener("dblclick",m=>{const p=a.domElement.getBoundingClientRect();u.setFromCamera(new lt((m.clientX-p.left)/p.width*2-1,-(m.clientY-p.top)/p.height*2+1),t.cam);const v=u.intersectObjects([...t.parts.values(),...t.fea.values()].filter(x=>x.visible))[0];if(v){const x=v.point.clone().sub(s.target);s.target.add(x),t.cam.position.add(x)}});const d=()=>{var v;if(!l)return;requestAnimationFrame(d),(v=t.tick)==null||v.call(t),s.update();const m=i.current.clientWidth,p=i.current.clientHeight;(a.domElement.width!==Math.floor(m*a.getPixelRatio())||a.domElement.height!==Math.floor(p*a.getPixelRatio()))&&a.setSize(m,p),t.cam.aspect=m/p,t.cam.updateProjectionMatrix(),a.render(t.scene,t.cam)};return d(),()=>{l=!1,a.dispose(),a.domElement.remove()}},[]),e.current}function V0(i){const e=document.createElement("canvas"),t=e.getContext("2d");e.width=512,e.height=64,t.fillStyle="rgba(17,20,24,0.85)",t.fillRect(0,0,512,64),t.fillStyle="#fff",t.font="bold 30px sans-serif",t.textBaseline="middle",t.fillText(i,14,32);const a=new CM(new zv({map:new LM(e),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return a.scale.set(.24,.03,1),a.center.set(0,.5),a.renderOrder=11,a}function G0(i,e,t){const a=new J(...e.peakV).add(t),s=new J(...e.peakN),l=s.clone().add(new J(0,0,s.z>.7?0:.35)).normalize();i.oc.target.copy(a),i.cam.position.copy(a).add(l.multiplyScalar(70)),i.oc.update(),i.dirty=!0}function xf(i,e,t){const a=new J(...e.min).add(new J(...e.max)).multiplyScalar(.5),s=new J(...e.size).length()*2.1,l={iso:i.isoDir||[.75,-1,.65],front:[0,-1,1e-4],top:[1e-4,-1e-4,1],side:[1,0,1e-4]}[t];i.oc.target.copy(a),i.cam.position.copy(a).add(new J(...l).normalize().multiplyScalar(s)),i.oc.update()}function gC(){var et;const i=Pe.useRef(),e=mC(i),[t,a]=Pe.useState(null),[s,l]=Pe.useState(null),[u,d]=Pe.useState(new URLSearchParams(location.search).get("mode")||"model"),[m,p]=Pe.useState(Number(new URLSearchParams(location.search).get("explode")||0)),[v,x]=Pe.useState(Number(new URLSearchParams(location.search).get("phase")||0)),[_,M]=Pe.useState(!1),[w,b]=Pe.useState({}),[y,S]=Pe.useState("Z"),[U,V]=Pe.useState(0),[R,L]=Pe.useState(new URLSearchParams(location.search).get("fade")!=="0"),[P,I]=Pe.useState(new URLSearchParams(location.search).get("scale")!=="abs"),[T,F]=Pe.useState(Number(new URLSearchParams(location.search).get("load")||17.8)),[z,B]=Pe.useState(!0),[K,ie]=Pe.useState([]),[H,te]=Pe.useState(null),[oe,ce]=Pe.useState([]),q=(et=K.find(k=>k.id===H))==null?void 0:et.p14,[W,Z]=Pe.useState(Mc.get("compare")?cC(Mc.get("compare")):null),[D,se]=Pe.useState(null),[Me,Be]=Pe.useState(null),[Xe,Ye]=Pe.useState(""),[le,pe]=Pe.useState(Mc.get("view")==="side"?"side":"overlay"),[Ce,rt]=Pe.useState(Mc.get("diffcolors")!=="0"),[He,yt]=Pe.useState(!1),[tn,_t]=Pe.useState(0),ct=vf!=="",Vt=W===null?null:mf+W;Pe.useEffect(()=>{fetch("model/designs.json").then(k=>k.json()).then(k=>{var Se;ie(k);const me=new URLSearchParams(location.search).get("design");te((Se=k.find(Fe=>Fe.id===me)||k[k.length-1])==null?void 0:Se.id)}),fetch(`${mf}versions.json`,{cache:"no-store"}).then(k=>k.json()).then(ce).catch(()=>{})},[]),Pe.useEffect(()=>{if(!H)return;for(const me of[...e.parts.values(),...e.fea.values()])e.scene.remove(me),me.geometry.dispose();for(const me of e.cparts.values())e.scene.remove(me),me.geometry.dispose();e.parts.clear(),e.fea.clear(),e.cparts.clear(),b({}),a(null),l(null),se(null),Be(null),Ye(""),fetch(`model/${H}/manifest.json`).then(me=>me.json()).then(a);const k=K.find(me=>me.id===H);(k!=null&&k.p14||k!=null&&k.fea)&&fetch(`${k0(k)}index.json`).then(me=>me.json()).then(l)},[H]),Pe.useEffect(()=>{if(!t)return;e.design=t.id;const k=new U0,me=t.id;t.parts.forEach(Se=>k.load(`model/${t.id}/${Se.stl}`,Fe=>{if(me!==e.design)return;const pt=q?(Fe.computeVertexNormals(),Fe):F0(Fe,Math.PI/7),ot=Se.kind==="purchased"&&/screw|spline/.test(Se.id),Tt=new di(pt,new sf({color:Se.color,metalness:ot?.6:.1,roughness:ot?.35:.6,side:Fi,transparent:(Se.opacity??1)<1,opacity:Se.opacity??1,depthWrite:(Se.opacity??1)>=1}));Tt.userData.p=Se,Tt.userData.sig=H0(Fe),e.parts.set(Se.id,Tt),e.scene.add(Tt),e.dirty=!0,_t(Ut=>Ut+1)})),e.isoDir=t.iso,xf(e,t.bounds,"iso")},[t]),Pe.useEffect(()=>{for(const ot of e.cparts.values())e.scene.remove(ot),ot.geometry.dispose();e.cparts.clear(),se(null),Be(null),Ye("");const k=new URL(location.href);if(W===null?k.searchParams.delete("compare"):k.searchParams.set("compare",W?W.replace(/\/$/,""):"main"),history.replaceState(null,"",k),W===null||!H)return;const me=K.find(ot=>ot.id===H),Se=`${Vt}model/${H}/`,Fe=`${W}|${H}`;e.ctag=Fe,fetch(`${Se}manifest.json`,{cache:"no-store"}).then(ot=>{if(!ot.ok)throw new Error(ot.status);return ot.json()}).then(ot=>{if(e.ctag!==Fe)return;se(ot);const Tt=new U0;ot.parts.forEach(Ut=>Tt.load(`${Se}${Ut.stl}`,Jt=>{if(e.ctag!==Fe)return;const ht=me!=null&&me.p14?(Jt.computeVertexNormals(),Jt):F0(Jt,Math.PI/7),tt=new di(ht,new sf({color:Ut.color,metalness:.1,roughness:.6,side:Fi}));tt.userData={p:Ut,sig:H0(Jt),other:!0},e.cparts.set(Ut.id,tt),e.scene.add(tt),_t(sn=>sn+1)}))}).catch(ot=>e.ctag===Fe&&Ye(`No ${H} model at ${W||"main"} (${ot.message})`));const pt=me!=null&&me.p14?`${Vt}fea/`:`${Se}fea/`;(me!=null&&me.p14||me!=null&&me.fea)&&fetch(`${pt}index.json`,{cache:"no-store"}).then(ot=>ot.json()).then(ot=>e.ctag===Fe&&Be(ot)).catch(()=>{})},[W,H,K]);const Mt=ct?e.cparts:e.parts,Xt=ct?e.parts:e.cparts,Dt=Pe.useMemo(()=>{if(W===null||!D||!t)return null;const k=[...new Set([...(ct?D:t).parts.map(Se=>Se.id),...(ct?t:D).parts.map(Se=>Se.id)])],me={};for(const Se of k){const Fe=Mt.get(Se),pt=Xt.get(Se),ot=(ct?D:t).parts.some(Ut=>Ut.id===Se),Tt=(ct?t:D).parts.some(Ut=>Ut.id===Se);if(me[Se]=ot?Tt?!Fe||!pt?"loading":Fe.userData.sig===pt.userData.sig?"same":z0(Fe.userData.sig)===z0(pt.userData.sig)?"moved":"changed":"removed":"added",me[Se]==="changed"||me[Se]==="moved"){const[Ut,Jt]=[Fe,pt].map(ht=>ht.geometry.boundingBox.getSize(new J));me[Se+"#d"]=`${Ut.toArray().map(ht=>ht.toFixed(1)).join("×")} → ${Jt.toArray().map(ht=>ht.toFixed(1)).join("×")} mm, tris ${Fe.userData.sig.split(",")[0]}→${pt.userData.sig.split(",")[0]}`}}return me},[W,D,t,tn]),dn=((t==null?void 0:t.iso)||[.75,-1])[1]>0?1:-1,Nt=t&&D?Math.max(t.bounds.size[0],D.bounds.size[0])*1.35*(ct?dn:-dn):0,Zt=(k="iso")=>{if(!t)return;if(!(W!==null&&le==="side"&&D))return xf(e,t.bounds,k);const me=Nt,Se=[...t.bounds.min],Fe=[...t.bounds.max];Se[0]=Math.min(Se[0],Se[0]+me),Fe[0]=Math.max(Fe[0],Fe[0]+me),xf(e,{min:Se,max:Fe,size:Fe.map((pt,ot)=>pt-Se[ot])},k)};Pe.useEffect(()=>{Zt()},[le,!!D]),Pe.useEffect(()=>{if(!s)return;const k=k0(K.find(me=>me.id===H));s.cases.forEach(me=>fetch(`${k}${me.part}__${me.case}.json`).then(Se=>Se.json()).then(Se=>{const Fe=new ni;Fe.setAttribute("position",new Rn(Se.pos,3)),Fe.setIndex(Se.idx),Fe.computeVertexNormals(),Fe.setAttribute("color",new Rn(new Float32Array(Se.pos.length),3));const pt=new di(Fe,new sf({vertexColors:!0,metalness:0,roughness:.75,side:Fi}));let ot=0;for(let tt=1;tt<Se.fi.length;tt++)Se.fi[tt]>Se.fi[ot]&&(ot=tt);const Tt=Fe.attributes.normal,Ut=new J;Fe.computeBoundingBox(),Fe.boundingBox.getCenter(Ut);const Jt=new J().fromBufferAttribute(Fe.attributes.position,ot),ht=new J().fromBufferAttribute(Tt,ot);ht.dot(Jt.clone().sub(Ut))<0&&ht.negate(),Se.peakV=Jt.toArray(),Se.peakN=ht.normalize().toArray(),Se.fiMax=Se.fi[ot],pt.userData={d:Se,part:me.part},pt.visible=!1,e.fea.set(`${me.part}__${me.case}`,pt),e.scene.add(pt),e.dirty=!0,V(tt=>tt+1)}))},[s]),Pe.useEffect(()=>{if(!_)return;let k=performance.now(),me=v>=2?0:v,Se;const Fe=pt=>{const ot=me+(pt-k)/1600;x(Math.min(ot,2)),ot<2?Se=requestAnimationFrame(Fe):M(!1)};return Se=requestAnimationFrame(Fe),()=>cancelAnimationFrame(Se)},[_]);const Y=(s==null?void 0:s.groups)||hC,_n=!!s,Rt=u==="fea"&&s&&Y[y]?Y[y].parts:{},N=t==null?void 0:t.motion,E=k=>k*k*(3-2*k),ee=N?N.a_latch+(N.a_release-N.a_latch)*E(Math.min(v,1)):0,ue=N?N.r*(Math.cos(ee*Math.PI/180)-Math.cos(N.a_latch*Math.PI/180)):0,ge=s!=null&&s.cases?Math.max(60,Math.ceil(Math.min(...s.cases.map(k=>k.fail_N))*1.2)):60,we=s?31/s.z_tds_MPa:1,De=Math.max(1e-9,...[...e.fea.values()].filter(k=>Rt[k.userData.part]&&!w[k.userData.part]).map(k=>(k.userData.d.fiMax||0)*T*we)),ve=P?De:1,xe=s?Object.entries(Rt).map(([k,me])=>s.cases.find(Se=>Se.part===k&&Se.case===me)).filter(Boolean):[],Re=xe.reduce((k,me)=>!k||me.fail_N<k.fail_N?me:k,null);Pe.useEffect(()=>{var me;if(!Re||u!=="fea"||new URLSearchParams(location.search).get("peak")!=="1"||e.peaked)return;const k=e.fea.get(`${Re.part}__${Re.case}`);k!=null&&k.userData.d.peakV&&(e.peaked=!0,(me=e.tick)==null||me.call(e),G0(e,k.userData.d,k.position))},[U,Re,u]),e.tick=()=>{var Jt;if(!t)return;const k=ht=>ht*ht*(3-2*ht),me=v,Se=k(Math.min(me,1)),Fe=k(Math.max(0,Math.min(me-1,1))),pt=(ht,tt,sn=t,Ct={mo:N,alpha:ee,kx:ue},Ln=0)=>{const{mo:Qt,alpha:pi,kx:xn}=Ct,fn=sn.parts.find($t=>$t.id===tt),Gn=(fn==null?void 0:fn.explode)||[0,0,0];let ii=Gn[0]*m,Ti=Gn[1]*m,hr=Gn[2]*m;if(Qt){if(Qt.slide.includes(tt)&&(ii+=xn),Qt.drop.includes(tt)&&(hr-=Qt.drop_mm*Fe),Qt.rotate.includes(tt)){const $t=-(pi-Qt.a_latch)*Math.PI/180,[ga,,pr]=Qt.pivot,Ir=Math.cos($t),C=Math.sin($t);ht.rotation.set(0,$t,0),ii+=ga-(ga*Ir+pr*C),hr+=pr-(-ga*C+pr*Ir)}else ht.rotation.set(0,0,0);ht.position.set(ii+Ln,Ti,hr);return}fC.includes(tt)&&(ii+=_f*Se),tt==="N2_return_spring"&&(ht.scale.x=1-.35*Se),tt==="N2_adapter"&&(hr+=dC*Fe),ht.position.set(ii+Ln,Ti,hr)},ot=W!==null&&Dt&&u==="model",Tt=le==="side",Ut=(ht,tt,sn)=>{var fn;const Ct=Dt[tt],Ln=((fn=ht.userData.p)==null?void 0:fn.opacity)??1,Qt=ht.material;if(ht.userData.c0||(ht.userData.c0=Qt.color.clone()),He&&Ct==="same")return!1;const pi=Ce?Ct==="same"?Ni.same:sn?Ct==="removed"||Ct==="changed"||Ct==="moved"?Ni.removed:Ni.same:Ni[Ct]||Ni.same:null;pi?Qt.color.set(pi):Qt.color.copy(ht.userData.c0);const xn=!Tt&&sn?Ct==="same"?0:.28:!Tt&&Ce&&Ct==="same"?.3:Ln;return Qt.transparent=xn<1,Qt.opacity=xn,Qt.depthWrite=xn>=1,Qt.wireframe=!Tt&&sn&&Ct==="changed",xn>0};for(const[ht,tt]of e.parts){pt(tt,ht);const sn=u==="fea"&&Rt[ht];tt.visible=!w[ht]&&!sn&&(u==="model"||z);const Ct=((Jt=tt.userData.p)==null?void 0:Jt.opacity)??1;tt.material.transparent=u==="fea"||Ct<1,tt.material.opacity=u==="fea"?.12*Ct:Ct,tt.material.depthWrite=u!=="fea"&&Ct>=1,ot?(tt.visible=tt.visible&&Ut(tt,ht,!ct),tt.material.wireframe=tt.material.wireframe&&tt.visible):tt.userData.c0&&(tt.material.color.copy(tt.userData.c0),tt.material.wireframe=!1)}if(D){const ht=uC(D,me),tt=Tt?Nt:0;for(const[sn,Ct]of e.cparts)pt(Ct,sn,D,ht,tt),Ct.visible=!!ot&&!w[sn]&&Ut(Ct,sn,ct)}if(e.markers.clear(),W!==null&&D&&u==="model"&&Tt)for(const[ht,tt]of[[`BASELINE: ${ut}`,ct?Nt:0],[`PROPOSED: ${X}`,ct?0:Nt]]){const sn=V0(ht);sn.position.set(t.bounds.min[0]+tt,t.bounds.min[1],t.bounds.max[2]+14),e.markers.add(sn)}for(const[ht,tt]of e.fea){const sn=Rt[tt.userData.part]&&ht===`${tt.userData.part}__${Rt[tt.userData.part]}`&&!w[tt.userData.part];if(tt.visible=!!sn,!sn)continue;pt(tt,tt.userData.part);const Ct=`${T}|${we}|${ve}`;if(tt.userData.ck!==Ct){const fn=tt.geometry.attributes.color,Gn=new Pt,ii=tt.userData.d.fi;for(let Ti=0;Ti<ii.length;Ti++)t_(ii[Ti]*T*we/ve,Gn),fn.setXYZ(Ti,Gn.r,Gn.g,Gn.b);fn.needsUpdate=!0,tt.userData.ck=Ct}const Ln=tt.userData.d,Qt=Re&&Ln.part===Re.part,pi=R&&Re&&!Qt;tt.material.transparent=pi,tt.material.opacity=pi?.12:1,tt.material.depthWrite=!pi;const xn=new di(new Fh(Qt?.9:.6,20,14),new Nh({color:Qt?16777215:11252671,depthTest:!1,transparent:!0,opacity:.95}));if(xn.position.set(...Ln.peakV||Ln.peak_mm).add(tt.position),Qt){const fn=V0(`PEAK ${Pr(Ln.part)}: ${(Ln.fiMax*T*we).toFixed(2)} of limit`);fn.position.copy(xn.position).add(new J(...Ln.peakN||[0,0,1]).multiplyScalar(4)),e.markers.add(fn)}if(xn.renderOrder=10,e.markers.add(xn),Qt){const fn=new di(new Oh(1.6,.18,8,32),xn.material);fn.position.copy(xn.position),fn.quaternion.copy(e.cam.quaternion),fn.renderOrder=10,e.markers.add(fn)}}};const Qe=[...new Set([...(t==null?void 0:t.parts.map(k=>k.id))||[],...W!==null&&D?D.parts.map(k=>k.id):[]])],Oe=k=>(t.parts.find(me=>me.id===k)||D.parts.find(me=>me.id===k)).color,Le=k=>{var me;return((me=oe.find(Se=>Se.path===k))==null?void 0:me.label)||(k?k.replace(/\/$/,""):"main")},Ke=Le(vf),st=W===null?"":Le(W),ut=ct?st:Ke,X=ct?Ke:st,Ne=k=>{var me;return(me=k==null?void 0:k.cases)==null?void 0:me.filter(Se=>Se.in_scope!==!1&&Se.case==="Z").reduce((Se,Fe)=>!Se||Fe.fail_N<Se.fail_N?Fe:Se,null)},_e=(()=>{const[k,me]=ct?[Me,s]:[s,Me];if(!k&&!me)return[];const Se=[],Fe=Ne(k),pt=Ne(me);(Fe||pt)&&Se.push(["Straight-pull screen (min)",Fe?`${Fe.fail_N} N (${Pr(Fe.part)})`:"–",pt?`${pt.fail_N} N (${Pr(pt.part)})`:"–",Fe&&pt?pt.fail_N-Fe.fail_N:null]);const ot=[...new Set([...(k==null?void 0:k.cases)||[],...(me==null?void 0:me.cases)||[]].filter(Tt=>Tt.case==="Z").map(Tt=>Tt.part))];for(const Tt of ot){const Ut=k==null?void 0:k.cases.find(ht=>ht.part===Tt&&ht.case==="Z"),Jt=me==null?void 0:me.cases.find(ht=>ht.part===Tt&&ht.case==="Z");Se.push([`  ${Pr(Tt)} Z`,Ut?`${Ut.fail_N} N`:"–",Jt?`${Jt.fail_N} N`:"–",Ut&&Jt?Jt.fail_N-Ut.fail_N:null])}for(const Tt of["design_N","required_fail_N","material"])((k==null?void 0:k[Tt])??"")!==((me==null?void 0:me[Tt])??"")&&Se.push([Tt,(k==null?void 0:k[Tt])??"–",(me==null?void 0:me[Tt])??"–",null]);return Se})(),Ue=(()=>{const[k,me]=ct?[D,t]:[t,D];if(!k||!me)return[];const Se=ot=>{var Tt;return{parts:ot.parts.length,...Object.fromEntries(Object.entries(ot.motion||{}).filter(([,Ut])=>typeof Ut=="number")),...Object.fromEntries((((Tt=ot.bounds)==null?void 0:Tt.size)||[]).map((Ut,Jt)=>["envelope "+"XYZ"[Jt],+Ut.toFixed(1)]))}},Fe=Se(k),pt=Se(me);return Object.keys({...Fe,...pt}).map(ot=>[ot,Fe[ot]??"–",pt[ot]??"–",typeof Fe[ot]=="number"&&typeof pt[ot]=="number"?+(pt[ot]-Fe[ot]).toFixed(3):null])})(),ke=Dt?Object.entries(Dt).filter(([k,me])=>!k.includes("#")&&me!=="same"&&me!=="loading").length:0,ye=s&&s.cases.filter(Se=>Se.in_scope&&Se.case==="Z").reduce((Se,Fe)=>Fe.fail_N<Se.fail_N?Fe:Se);return Q.jsxs("div",{className:"app",children:[Q.jsxs("div",{className:"panel",children:[Q.jsxs("div",{className:"status",children:["Version: ",Q.jsx(wc,{minimal:!0,intent:"warning",children:gf.label})," ",gf.sha&&Q.jsx("code",{children:gf.sha}),oe.length>1&&Q.jsx(Lo,{fill:!0,minimal:!0,value:"",onChange:k=>{location.href=mf+k.target.value},options:[{value:"",label:"Switch version…"},...oe.map(k=>({value:k.path,label:k.label+(k.title?` — ${k.title}`:"")}))]})]}),K.length>1&&Q.jsx(Lo,{fill:!0,value:H||"",onChange:k=>te(k.target.value),options:K.map(k=>({value:k.id,label:k.label}))}),Q.jsxs("div",{className:"status",children:[Q.jsxs("b",{children:["N2 hardpoint · ",q?(s==null?void 0:s.revision)||"":(t==null?void 0:t.revision)||""]}),Q.jsx("br",{}),!q&&t&&Q.jsxs(Q.Fragment,{children:[t.parts.length," parts from CI-built CAD (cad/viewer.py)",N?", release driven by the servo crank kinematics.":"."]}),ye&&Q.jsxs(Q.Fragment,{children:["Straight-pull stress screen ",Q.jsxs("b",{children:[ye.fail_N.toFixed(2)," N"]})," (",Pr(ye.part)," governs). Dividing by SF 2 gives ",ye.rating_sf2_N.toFixed(2)," N for comparison only.",Q.jsx("br",{}),Q.jsx("b",{children:"No working-load rating assigned."})," No printed or loaded-release tests recorded.",Q.jsx("br",{}),"Design load: ",s.design_N," N. Sacrificial bench target: ",s.required_fail_N," N."]})]}),Q.jsxs(Ec,{fill:!0,children:[Q.jsx(yi,{intent:u==="model"?"primary":"none",icon:"cube",text:"Model",onClick:()=>d("model")}),Q.jsx(yi,{intent:u==="fea"?"primary":"none",icon:"heat-grid",text:"FEA",disabled:!_n,onClick:()=>d("fea")})]}),Q.jsx("h6",{children:"Compare"}),Q.jsx(Lo,{fill:!0,value:W===null?"__off":W,onChange:k=>Z(k.target.value==="__off"?null:k.target.value),options:[{value:"__off",label:"Off (this version only)"},...(oe.length?oe:[{path:"",label:"main"}]).filter(k=>k.path!==vf).map(k=>({value:k.path,label:`${ct?"Baseline":"Proposed"}: ${k.label}${k.title?` — ${k.title}`:""}`}))]}),W!==null&&Q.jsxs(Q.Fragment,{children:[Q.jsxs("div",{className:"status",children:["Baseline ",Q.jsx(wc,{minimal:!0,children:ut})," → proposed ",Q.jsx(wc,{minimal:!0,intent:"warning",children:X}),Xe&&Q.jsxs(Q.Fragment,{children:[Q.jsx("br",{}),Q.jsx("span",{style:{color:Ni.removed},children:Xe})]}),Dt&&Q.jsxs(Q.Fragment,{children:[Q.jsx("br",{}),Q.jsx("b",{children:ke})," of ",Object.keys(Dt).filter(k=>!k.includes("#")).length," parts differ (by part name; geometry compared by triangle count, bounding box and centroid)."]})]}),Q.jsxs(Ec,{fill:!0,children:[Q.jsx(yi,{small:!0,intent:le==="overlay"?"primary":"none",text:"Overlay",onClick:()=>pe("overlay")}),Q.jsx(yi,{small:!0,intent:le==="side"?"primary":"none",text:"Side by side",onClick:()=>pe("side")})]}),Q.jsx(Rs,{checked:Ce,label:"Colour by change",onChange:()=>rt(!Ce)}),Q.jsx(Rs,{checked:He,label:"Hide unchanged parts",onChange:()=>yt(!He)}),Q.jsxs("div",{className:"status",children:[Object.entries(Ni).map(([k,me])=>Q.jsxs("span",{style:{marginRight:8},children:[Q.jsx("span",{className:"swatch",style:{background:me}}),k]},k)),Q.jsx("br",{}),le==="overlay"?"Overlay: baseline drawn as a red ghost (wireframe where changed).":"Side by side: baseline left, proposed right; one camera."]}),Dt&&Q.jsxs("table",{className:"fea",children:[Q.jsx("thead",{children:Q.jsxs("tr",{children:[Q.jsx("th",{children:"Part"}),Q.jsx("th",{children:"Change"})]})}),Q.jsx("tbody",{children:Object.entries(Dt).filter(([k,me])=>!k.includes("#")&&me!=="same").map(([k,me])=>Q.jsxs("tr",{title:Dt[k+"#d"]||"",children:[Q.jsx("td",{children:Pr(k)}),Q.jsxs("td",{style:{color:Ni[me]},children:[me,Dt[k+"#d"]&&Q.jsx("div",{style:{color:"#abb3bf",fontSize:10},children:Dt[k+"#d"]})]})]},k))})]}),[..._e,...Ue.filter(k=>k[1]!==k[2])].length>0&&Q.jsxs("table",{className:"fea",children:[Q.jsx("thead",{children:Q.jsxs("tr",{children:[Q.jsx("th",{children:"Key value"}),Q.jsx("th",{children:"Base"}),Q.jsx("th",{children:"Prop."}),Q.jsx("th",{children:"Δ"})]})}),Q.jsx("tbody",{children:[..._e,...Ue.filter(k=>k[1]!==k[2])].map(([k,me,Se,Fe])=>Q.jsxs("tr",{children:[Q.jsx("td",{children:k}),Q.jsx("td",{className:"n",children:String(me)}),Q.jsx("td",{className:"n",children:String(Se)}),Q.jsx("td",{className:"n",style:{color:Fe>0?Ni.added:Fe<0?Ni.removed:void 0},children:Fe===null?"":(Fe>0?"+":"")+ +Fe.toFixed(2)})]},k))})]}),u==="fea"&&Q.jsx("div",{className:"status",children:"Compare overlay is shown in Model mode; FEA shows this version."})]}),Q.jsx("h6",{children:"Explode"}),Q.jsx(Fo,{min:0,max:1,stepSize:.01,labelRenderer:!1,value:m,onChange:p}),(q||N)&&Q.jsxs(Q.Fragment,{children:[Q.jsx("h6",{children:"Release sequence"}),Q.jsxs("div",{style:{display:"flex",gap:6,alignItems:"center"},children:[Q.jsx(yi,{small:!0,icon:_?"pause":"play",onClick:()=>M(!_)}),Q.jsx(yi,{small:!0,icon:"reset",onClick:()=>{M(!1),x(0)}}),Q.jsx("div",{style:{flex:1,paddingTop:4},children:Q.jsx(Fo,{min:0,max:2,stepSize:.01,labelRenderer:!1,value:v,onChange:k=>{M(!1),x(k)}})})]}),Q.jsxs("div",{className:"status",children:[N?(v<.02?`Latched: servo ${N.a_latch}°, keeper through the adapter tab.`:v<=1?`Servo ${ee.toFixed(0)}° → ${N.a_release}°: pin drives the keeper +X ${ue.toFixed(1)} / ${(N.r*(Math.cos(N.a_release*Math.PI/180)-Math.cos(N.a_latch*Math.PI/180))).toFixed(1)} mm.`:"Keeper clear of the tab; adapter and payload drop by gravity.")+" Kinematics from params.py, not a tested release.":v<.02?"Latched: keeper crosses the adapter lug.":v<=1?`Solenoid pulls keeper +X ${(_f*v*v*(3-2*v)).toFixed(1)} / ${_f} mm.`:"Keeper open; illustrated adapter travel is +Z. Actual clearance requires an external departure force."," ",!N&&"This is a prescribed motion illustration, not a tested release."]})]}),u==="fea"&&s&&Q.jsxs(Q.Fragment,{children:[Q.jsx("h6",{children:"Load case"}),Q.jsx(Lo,{fill:!0,value:y,onChange:k=>S(k.target.value),options:Object.entries(Y).map(([k,me])=>({value:k,label:me.label}))}),Q.jsxs("h6",{children:["Applied load: ",T.toFixed(1)," N"]}),Q.jsx(Fo,{min:1,max:ge,stepSize:.1,labelRenderer:!1,value:T,onChange:F}),Q.jsxs("div",{className:"row",style:{display:"flex",gap:4,flexWrap:"wrap"},children:[Q.jsx(yi,{small:!0,text:`Design ${s.design_N} N`,onClick:()=>F(s.design_N)}),Q.jsx(yi,{small:!0,text:`Bench target ${s.required_fail_N} N`,onClick:()=>F(s.required_fail_N)})]}),Q.jsxs("table",{className:"fea",children:[Q.jsx("thead",{children:Q.jsxs("tr",{children:[Q.jsx("th",{children:"Part"}),Q.jsx("th",{children:"Screen"}),Q.jsx("th",{children:"Screen/load"})]})}),Q.jsx("tbody",{children:xe.map(k=>Q.jsxs("tr",{children:[Q.jsxs("td",{children:[Re===k&&"● ",Pr(k.part)]}),Q.jsxs("td",{className:"n",children:[k.fail_N," N"]}),Q.jsxs("td",{className:"n",children:[(k.fail_N/T).toFixed(2),"×"]})]},k.part))})]}),Q.jsx(Rs,{checked:z,label:"Ghost other parts",onChange:()=>B(!z)}),Q.jsx(Rs,{checked:P,label:"Scale colours to peak at this load",onChange:()=>I(!P)}),Q.jsx(Rs,{checked:R,label:"Fade parts other than the governing one",onChange:()=>L(!R)}),Q.jsx(yi,{small:!0,icon:"locate",text:"Look at peak",disabled:!Re,onClick:()=>{L(!0);const k=e.fea.get(`${Re.part}__${Re.case}`);k!=null&&k.userData.d.peakV&&G0(e,k.userData.d,k.position)}}),Q.jsxs("div",{className:"status",children:[s.material.toUpperCase(),", ",s.note]})]}),Q.jsx("h6",{children:"Parts"}),Q.jsx("div",{className:"parts",children:Qe.map(k=>Q.jsx(uv,{checked:!w[k],onChange:()=>b(me=>({...me,[k]:!me[k]})),labelElement:Q.jsxs("span",{children:[Q.jsx("span",{className:"swatch",style:{background:Dt&&Ce?Ni[Dt[k]]||Ni.same:Oe(k)}}),Pr(k)]})},k))}),Q.jsxs("div",{style:{display:"flex",gap:4},children:[Q.jsx(yi,{small:!0,text:"All",onClick:()=>b({})}),Q.jsx(yi,{small:!0,text:"Printed only",onClick:()=>b(Object.fromEntries(t.parts.filter(k=>!["printed","payload","moving"].includes(k.kind)).map(k=>[k.id,!0])))})]})]}),Q.jsxs("div",{className:"stage",ref:i,children:[t&&Q.jsx(Ec,{className:"views",minimal:!0,children:["iso","front","side","top"].map(k=>Q.jsx(yi,{small:!0,text:k,onClick:()=>Zt(k)},k))}),u==="fea"&&s&&Q.jsxs("div",{className:"legend",children:["Screen utilisation at ",T.toFixed(1)," N ",P?`(colours scaled to peak ${De.toFixed(2)}; 1.0 = assumed stress limit)`:"(1.0 = assumed stress limit)",Q.jsx("div",{className:"bar",style:{background:pC}}),Q.jsxs("div",{className:"ticks",children:[Q.jsx("span",{children:"0"}),Q.jsx("span",{children:(.5*ve).toFixed(2)}),Q.jsx("span",{children:ve.toFixed(2)}),!P&&Q.jsx("span",{style:{color:"#d91ad9"},children:">1"})]}),Re&&Q.jsxs("div",{style:{marginTop:4},children:["○ governing peak: ",Pr(Re.part)," ",(()=>{var me;const k=(me=e.fea.get(`${Re.part}__${Re.case}`))==null?void 0:me.userData.d;return k!=null&&k.peakV?`at (${k.peakV.map(Se=>Se.toFixed(1)).join(", ")}) mm, ${(k.fiMax*T*we).toFixed(3)} of limit`:""})()]})]}),Q.jsx("div",{className:"hint",children:"Drag: orbit · scroll: zoom to cursor · right-drag: pan · double-click: orbit around point"})]})]})}document.body.classList.add(qx);Xx.createRoot(document.getElementById("root")).render(Q.jsx(gC,{}));export{cn as I,wg as _,YS as p};
