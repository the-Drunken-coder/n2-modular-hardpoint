var qS=Object.defineProperty;var YS=(n,e,t)=>e in n?qS(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Et=(n,e,t)=>YS(n,typeof e!="symbol"?e+"":e,t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const a of document.querySelectorAll('link[rel="modulepreload"]'))r(a);new MutationObserver(a=>{for(const o of a)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&r(c)}).observe(document,{childList:!0,subtree:!0});function t(a){const o={};return a.integrity&&(o.integrity=a.integrity),a.referrerPolicy&&(o.referrerPolicy=a.referrerPolicy),a.crossOrigin==="use-credentials"?o.credentials="include":a.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(a){if(a.ep)return;a.ep=!0;const o=t(a);fetch(a.href,o)}})();function jS(n){return n&&n.__esModule&&Object.prototype.hasOwnProperty.call(n,"default")?n.default:n}var Yd={exports:{}},fl={},jd={exports:{}},Dt={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ev;function KS(){if(ev)return Dt;ev=1;var n=Symbol.for("react.element"),e=Symbol.for("react.portal"),t=Symbol.for("react.fragment"),r=Symbol.for("react.strict_mode"),a=Symbol.for("react.profiler"),o=Symbol.for("react.provider"),c=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),d=Symbol.for("react.suspense"),h=Symbol.for("react.memo"),m=Symbol.for("react.lazy"),g=Symbol.iterator;function p(H){return H===null||typeof H!="object"?null:(H=g&&H[g]||H["@@iterator"],typeof H=="function"?H:null)}var x={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},E=Object.assign,T={};function S(H,oe,Se){this.props=H,this.context=oe,this.refs=T,this.updater=Se||x}S.prototype.isReactComponent={},S.prototype.setState=function(H,oe){if(typeof H!="object"&&typeof H!="function"&&H!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,H,oe,"setState")},S.prototype.forceUpdate=function(H){this.updater.enqueueForceUpdate(this,H,"forceUpdate")};function y(){}y.prototype=S.prototype;function b(H,oe,Se){this.props=H,this.context=oe,this.refs=T,this.updater=Se||x}var D=b.prototype=new y;D.constructor=b,E(D,S.prototype),D.isPureReactComponent=!0;var w=Array.isArray,C=Object.prototype.hasOwnProperty,P={current:null},F={key:!0,ref:!0,__self:!0,__source:!0};function A(H,oe,Se){var ke,Be={},He=null,ue=null;if(oe!=null)for(ke in oe.ref!==void 0&&(ue=oe.ref),oe.key!==void 0&&(He=""+oe.key),oe)C.call(oe,ke)&&!F.hasOwnProperty(ke)&&(Be[ke]=oe[ke]);var he=arguments.length-2;if(he===1)Be.children=Se;else if(1<he){for(var Pe=Array(he),Ke=0;Ke<he;Ke++)Pe[Ke]=arguments[Ke+2];Be.children=Pe}if(H&&H.defaultProps)for(ke in he=H.defaultProps,he)Be[ke]===void 0&&(Be[ke]=he[ke]);return{$$typeof:n,type:H,key:He,ref:ue,props:Be,_owner:P.current}}function U(H,oe){return{$$typeof:n,type:H.type,key:oe,ref:H.ref,props:H.props,_owner:H._owner}}function O(H){return typeof H=="object"&&H!==null&&H.$$typeof===n}function k(H){var oe={"=":"=0",":":"=2"};return"$"+H.replace(/[=:]/g,function(Se){return oe[Se]})}var I=/\/+/g;function X(H,oe){return typeof H=="object"&&H!==null&&H.key!=null?k(""+H.key):oe.toString(36)}function V(H,oe,Se,ke,Be){var He=typeof H;(He==="undefined"||He==="boolean")&&(H=null);var ue=!1;if(H===null)ue=!0;else switch(He){case"string":case"number":ue=!0;break;case"object":switch(H.$$typeof){case n:case e:ue=!0}}if(ue)return ue=H,Be=Be(ue),H=ke===""?"."+X(ue,0):ke,w(Be)?(Se="",H!=null&&(Se=H.replace(I,"$&/")+"/"),V(Be,oe,Se,"",function(Ke){return Ke})):Be!=null&&(O(Be)&&(Be=U(Be,Se+(!Be.key||ue&&ue.key===Be.key?"":(""+Be.key).replace(I,"$&/")+"/")+H)),oe.push(Be)),1;if(ue=0,ke=ke===""?".":ke+":",w(H))for(var he=0;he<H.length;he++){He=H[he];var Pe=ke+X(He,he);ue+=V(He,oe,Se,Pe,Be)}else if(Pe=p(H),typeof Pe=="function")for(H=Pe.call(H),he=0;!(He=H.next()).done;)He=He.value,Pe=ke+X(He,he++),ue+=V(He,oe,Se,Pe,Be);else if(He==="object")throw oe=String(H),Error("Objects are not valid as a React child (found: "+(oe==="[object Object]"?"object with keys {"+Object.keys(H).join(", ")+"}":oe)+"). If you meant to render a collection of children, use an array instead.");return ue}function q(H,oe,Se){if(H==null)return H;var ke=[],Be=0;return V(H,ke,"","",function(He){return oe.call(Se,He,Be++)}),ke}function ee(H){if(H._status===-1){var oe=H._result;oe=oe(),oe.then(function(Se){(H._status===0||H._status===-1)&&(H._status=1,H._result=Se)},function(Se){(H._status===0||H._status===-1)&&(H._status=2,H._result=Se)}),H._status===-1&&(H._status=0,H._result=oe)}if(H._status===1)return H._result.default;throw H._result}var ae={current:null},J={transition:null},te={ReactCurrentDispatcher:ae,ReactCurrentBatchConfig:J,ReactCurrentOwner:P};function ne(){throw Error("act(...) is not supported in production builds of React.")}return Dt.Children={map:q,forEach:function(H,oe,Se){q(H,function(){oe.apply(this,arguments)},Se)},count:function(H){var oe=0;return q(H,function(){oe++}),oe},toArray:function(H){return q(H,function(oe){return oe})||[]},only:function(H){if(!O(H))throw Error("React.Children.only expected to receive a single React element child.");return H}},Dt.Component=S,Dt.Fragment=t,Dt.Profiler=a,Dt.PureComponent=b,Dt.StrictMode=r,Dt.Suspense=d,Dt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=te,Dt.act=ne,Dt.cloneElement=function(H,oe,Se){if(H==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+H+".");var ke=E({},H.props),Be=H.key,He=H.ref,ue=H._owner;if(oe!=null){if(oe.ref!==void 0&&(He=oe.ref,ue=P.current),oe.key!==void 0&&(Be=""+oe.key),H.type&&H.type.defaultProps)var he=H.type.defaultProps;for(Pe in oe)C.call(oe,Pe)&&!F.hasOwnProperty(Pe)&&(ke[Pe]=oe[Pe]===void 0&&he!==void 0?he[Pe]:oe[Pe])}var Pe=arguments.length-2;if(Pe===1)ke.children=Se;else if(1<Pe){he=Array(Pe);for(var Ke=0;Ke<Pe;Ke++)he[Ke]=arguments[Ke+2];ke.children=he}return{$$typeof:n,type:H.type,key:Be,ref:He,props:ke,_owner:ue}},Dt.createContext=function(H){return H={$$typeof:c,_currentValue:H,_currentValue2:H,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},H.Provider={$$typeof:o,_context:H},H.Consumer=H},Dt.createElement=A,Dt.createFactory=function(H){var oe=A.bind(null,H);return oe.type=H,oe},Dt.createRef=function(){return{current:null}},Dt.forwardRef=function(H){return{$$typeof:u,render:H}},Dt.isValidElement=O,Dt.lazy=function(H){return{$$typeof:m,_payload:{_status:-1,_result:H},_init:ee}},Dt.memo=function(H,oe){return{$$typeof:h,type:H,compare:oe===void 0?null:oe}},Dt.startTransition=function(H){var oe=J.transition;J.transition={};try{H()}finally{J.transition=oe}},Dt.unstable_act=ne,Dt.useCallback=function(H,oe){return ae.current.useCallback(H,oe)},Dt.useContext=function(H){return ae.current.useContext(H)},Dt.useDebugValue=function(){},Dt.useDeferredValue=function(H){return ae.current.useDeferredValue(H)},Dt.useEffect=function(H,oe){return ae.current.useEffect(H,oe)},Dt.useId=function(){return ae.current.useId()},Dt.useImperativeHandle=function(H,oe,Se){return ae.current.useImperativeHandle(H,oe,Se)},Dt.useInsertionEffect=function(H,oe){return ae.current.useInsertionEffect(H,oe)},Dt.useLayoutEffect=function(H,oe){return ae.current.useLayoutEffect(H,oe)},Dt.useMemo=function(H,oe){return ae.current.useMemo(H,oe)},Dt.useReducer=function(H,oe,Se){return ae.current.useReducer(H,oe,Se)},Dt.useRef=function(H){return ae.current.useRef(H)},Dt.useState=function(H){return ae.current.useState(H)},Dt.useSyncExternalStore=function(H,oe,Se){return ae.current.useSyncExternalStore(H,oe,Se)},Dt.useTransition=function(){return ae.current.useTransition()},Dt.version="18.3.1",Dt}var tv;function Qp(){return tv||(tv=1,jd.exports=KS()),jd.exports}/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var nv;function ZS(){if(nv)return fl;nv=1;var n=Qp(),e=Symbol.for("react.element"),t=Symbol.for("react.fragment"),r=Object.prototype.hasOwnProperty,a=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(u,d,h){var m,g={},p=null,x=null;h!==void 0&&(p=""+h),d.key!==void 0&&(p=""+d.key),d.ref!==void 0&&(x=d.ref);for(m in d)r.call(d,m)&&!o.hasOwnProperty(m)&&(g[m]=d[m]);if(u&&u.defaultProps)for(m in d=u.defaultProps,d)g[m]===void 0&&(g[m]=d[m]);return{$$typeof:e,type:u,key:p,ref:x,props:g,_owner:a.current}}return fl.Fragment=t,fl.jsx=c,fl.jsxs=c,fl}var iv;function JS(){return iv||(iv=1,Yd.exports=ZS()),Yd.exports}var j=JS(),$c={},Kd={exports:{}},yi={},Zd={exports:{}},Jd={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var rv;function QS(){return rv||(rv=1,(function(n){function e(J,te){var ne=J.length;J.push(te);e:for(;0<ne;){var H=ne-1>>>1,oe=J[H];if(0<a(oe,te))J[H]=te,J[ne]=oe,ne=H;else break e}}function t(J){return J.length===0?null:J[0]}function r(J){if(J.length===0)return null;var te=J[0],ne=J.pop();if(ne!==te){J[0]=ne;e:for(var H=0,oe=J.length,Se=oe>>>1;H<Se;){var ke=2*(H+1)-1,Be=J[ke],He=ke+1,ue=J[He];if(0>a(Be,ne))He<oe&&0>a(ue,Be)?(J[H]=ue,J[He]=ne,H=He):(J[H]=Be,J[ke]=ne,H=ke);else if(He<oe&&0>a(ue,ne))J[H]=ue,J[He]=ne,H=He;else break e}}return te}function a(J,te){var ne=J.sortIndex-te.sortIndex;return ne!==0?ne:J.id-te.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;n.unstable_now=function(){return o.now()}}else{var c=Date,u=c.now();n.unstable_now=function(){return c.now()-u}}var d=[],h=[],m=1,g=null,p=3,x=!1,E=!1,T=!1,S=typeof setTimeout=="function"?setTimeout:null,y=typeof clearTimeout=="function"?clearTimeout:null,b=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function D(J){for(var te=t(h);te!==null;){if(te.callback===null)r(h);else if(te.startTime<=J)r(h),te.sortIndex=te.expirationTime,e(d,te);else break;te=t(h)}}function w(J){if(T=!1,D(J),!E)if(t(d)!==null)E=!0,ee(C);else{var te=t(h);te!==null&&ae(w,te.startTime-J)}}function C(J,te){E=!1,T&&(T=!1,y(A),A=-1),x=!0;var ne=p;try{for(D(te),g=t(d);g!==null&&(!(g.expirationTime>te)||J&&!k());){var H=g.callback;if(typeof H=="function"){g.callback=null,p=g.priorityLevel;var oe=H(g.expirationTime<=te);te=n.unstable_now(),typeof oe=="function"?g.callback=oe:g===t(d)&&r(d),D(te)}else r(d);g=t(d)}if(g!==null)var Se=!0;else{var ke=t(h);ke!==null&&ae(w,ke.startTime-te),Se=!1}return Se}finally{g=null,p=ne,x=!1}}var P=!1,F=null,A=-1,U=5,O=-1;function k(){return!(n.unstable_now()-O<U)}function I(){if(F!==null){var J=n.unstable_now();O=J;var te=!0;try{te=F(!0,J)}finally{te?X():(P=!1,F=null)}}else P=!1}var X;if(typeof b=="function")X=function(){b(I)};else if(typeof MessageChannel<"u"){var V=new MessageChannel,q=V.port2;V.port1.onmessage=I,X=function(){q.postMessage(null)}}else X=function(){S(I,0)};function ee(J){F=J,P||(P=!0,X())}function ae(J,te){A=S(function(){J(n.unstable_now())},te)}n.unstable_IdlePriority=5,n.unstable_ImmediatePriority=1,n.unstable_LowPriority=4,n.unstable_NormalPriority=3,n.unstable_Profiling=null,n.unstable_UserBlockingPriority=2,n.unstable_cancelCallback=function(J){J.callback=null},n.unstable_continueExecution=function(){E||x||(E=!0,ee(C))},n.unstable_forceFrameRate=function(J){0>J||125<J?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):U=0<J?Math.floor(1e3/J):5},n.unstable_getCurrentPriorityLevel=function(){return p},n.unstable_getFirstCallbackNode=function(){return t(d)},n.unstable_next=function(J){switch(p){case 1:case 2:case 3:var te=3;break;default:te=p}var ne=p;p=te;try{return J()}finally{p=ne}},n.unstable_pauseExecution=function(){},n.unstable_requestPaint=function(){},n.unstable_runWithPriority=function(J,te){switch(J){case 1:case 2:case 3:case 4:case 5:break;default:J=3}var ne=p;p=J;try{return te()}finally{p=ne}},n.unstable_scheduleCallback=function(J,te,ne){var H=n.unstable_now();switch(typeof ne=="object"&&ne!==null?(ne=ne.delay,ne=typeof ne=="number"&&0<ne?H+ne:H):ne=H,J){case 1:var oe=-1;break;case 2:oe=250;break;case 5:oe=1073741823;break;case 4:oe=1e4;break;default:oe=5e3}return oe=ne+oe,J={id:m++,callback:te,priorityLevel:J,startTime:ne,expirationTime:oe,sortIndex:-1},ne>H?(J.sortIndex=ne,e(h,J),t(d)===null&&J===t(h)&&(T?(y(A),A=-1):T=!0,ae(w,ne-H))):(J.sortIndex=oe,e(d,J),E||x||(E=!0,ee(C))),J},n.unstable_shouldYield=k,n.unstable_wrapCallback=function(J){var te=p;return function(){var ne=p;p=te;try{return J.apply(this,arguments)}finally{p=ne}}}})(Jd)),Jd}var sv;function eM(){return sv||(sv=1,Zd.exports=QS()),Zd.exports}/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var av;function tM(){if(av)return yi;av=1;var n=Qp(),e=eM();function t(i){for(var s="https://reactjs.org/docs/error-decoder.html?invariant="+i,l=1;l<arguments.length;l++)s+="&args[]="+encodeURIComponent(arguments[l]);return"Minified React error #"+i+"; visit "+s+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r=new Set,a={};function o(i,s){c(i,s),c(i+"Capture",s)}function c(i,s){for(a[i]=s,i=0;i<s.length;i++)r.add(s[i])}var u=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),d=Object.prototype.hasOwnProperty,h=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,m={},g={};function p(i){return d.call(g,i)?!0:d.call(m,i)?!1:h.test(i)?g[i]=!0:(m[i]=!0,!1)}function x(i,s,l,f){if(l!==null&&l.type===0)return!1;switch(typeof s){case"function":case"symbol":return!0;case"boolean":return f?!1:l!==null?!l.acceptsBooleans:(i=i.toLowerCase().slice(0,5),i!=="data-"&&i!=="aria-");default:return!1}}function E(i,s,l,f){if(s===null||typeof s>"u"||x(i,s,l,f))return!0;if(f)return!1;if(l!==null)switch(l.type){case 3:return!s;case 4:return s===!1;case 5:return isNaN(s);case 6:return isNaN(s)||1>s}return!1}function T(i,s,l,f,v,M,N){this.acceptsBooleans=s===2||s===3||s===4,this.attributeName=f,this.attributeNamespace=v,this.mustUseProperty=l,this.propertyName=i,this.type=s,this.sanitizeURL=M,this.removeEmptyString=N}var S={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(i){S[i]=new T(i,0,!1,i,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(i){var s=i[0];S[s]=new T(s,1,!1,i[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(i){S[i]=new T(i,2,!1,i.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(i){S[i]=new T(i,2,!1,i,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(i){S[i]=new T(i,3,!1,i.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(i){S[i]=new T(i,3,!0,i,null,!1,!1)}),["capture","download"].forEach(function(i){S[i]=new T(i,4,!1,i,null,!1,!1)}),["cols","rows","size","span"].forEach(function(i){S[i]=new T(i,6,!1,i,null,!1,!1)}),["rowSpan","start"].forEach(function(i){S[i]=new T(i,5,!1,i.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function b(i){return i[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(i){var s=i.replace(y,b);S[s]=new T(s,1,!1,i,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(i){var s=i.replace(y,b);S[s]=new T(s,1,!1,i,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(i){var s=i.replace(y,b);S[s]=new T(s,1,!1,i,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!1,!1)}),S.xlinkHref=new T("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(i){S[i]=new T(i,1,!1,i.toLowerCase(),null,!0,!0)});function D(i,s,l,f){var v=S.hasOwnProperty(s)?S[s]:null;(v!==null?v.type!==0:f||!(2<s.length)||s[0]!=="o"&&s[0]!=="O"||s[1]!=="n"&&s[1]!=="N")&&(E(s,l,v,f)&&(l=null),f||v===null?p(s)&&(l===null?i.removeAttribute(s):i.setAttribute(s,""+l)):v.mustUseProperty?i[v.propertyName]=l===null?v.type===3?!1:"":l:(s=v.attributeName,f=v.attributeNamespace,l===null?i.removeAttribute(s):(v=v.type,l=v===3||v===4&&l===!0?"":""+l,f?i.setAttributeNS(f,s,l):i.setAttribute(s,l))))}var w=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,C=Symbol.for("react.element"),P=Symbol.for("react.portal"),F=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),U=Symbol.for("react.profiler"),O=Symbol.for("react.provider"),k=Symbol.for("react.context"),I=Symbol.for("react.forward_ref"),X=Symbol.for("react.suspense"),V=Symbol.for("react.suspense_list"),q=Symbol.for("react.memo"),ee=Symbol.for("react.lazy"),ae=Symbol.for("react.offscreen"),J=Symbol.iterator;function te(i){return i===null||typeof i!="object"?null:(i=J&&i[J]||i["@@iterator"],typeof i=="function"?i:null)}var ne=Object.assign,H;function oe(i){if(H===void 0)try{throw Error()}catch(l){var s=l.stack.trim().match(/\n( *(at )?)/);H=s&&s[1]||""}return`
`+H+i}var Se=!1;function ke(i,s){if(!i||Se)return"";Se=!0;var l=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(s)if(s=function(){throw Error()},Object.defineProperty(s.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(s,[])}catch(pe){var f=pe}Reflect.construct(i,[],s)}else{try{s.call()}catch(pe){f=pe}i.call(s.prototype)}else{try{throw Error()}catch(pe){f=pe}i()}}catch(pe){if(pe&&f&&typeof pe.stack=="string"){for(var v=pe.stack.split(`
`),M=f.stack.split(`
`),N=v.length-1,W=M.length-1;1<=N&&0<=W&&v[N]!==M[W];)W--;for(;1<=N&&0<=W;N--,W--)if(v[N]!==M[W]){if(N!==1||W!==1)do if(N--,W--,0>W||v[N]!==M[W]){var Y=`
`+v[N].replace(" at new "," at ");return i.displayName&&Y.includes("<anonymous>")&&(Y=Y.replace("<anonymous>",i.displayName)),Y}while(1<=N&&0<=W);break}}}finally{Se=!1,Error.prepareStackTrace=l}return(i=i?i.displayName||i.name:"")?oe(i):""}function Be(i){switch(i.tag){case 5:return oe(i.type);case 16:return oe("Lazy");case 13:return oe("Suspense");case 19:return oe("SuspenseList");case 0:case 2:case 15:return i=ke(i.type,!1),i;case 11:return i=ke(i.type.render,!1),i;case 1:return i=ke(i.type,!0),i;default:return""}}function He(i){if(i==null)return null;if(typeof i=="function")return i.displayName||i.name||null;if(typeof i=="string")return i;switch(i){case F:return"Fragment";case P:return"Portal";case U:return"Profiler";case A:return"StrictMode";case X:return"Suspense";case V:return"SuspenseList"}if(typeof i=="object")switch(i.$$typeof){case k:return(i.displayName||"Context")+".Consumer";case O:return(i._context.displayName||"Context")+".Provider";case I:var s=i.render;return i=i.displayName,i||(i=s.displayName||s.name||"",i=i!==""?"ForwardRef("+i+")":"ForwardRef"),i;case q:return s=i.displayName||null,s!==null?s:He(i.type)||"Memo";case ee:s=i._payload,i=i._init;try{return He(i(s))}catch{}}return null}function ue(i){var s=i.type;switch(i.tag){case 24:return"Cache";case 9:return(s.displayName||"Context")+".Consumer";case 10:return(s._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return i=s.render,i=i.displayName||i.name||"",s.displayName||(i!==""?"ForwardRef("+i+")":"ForwardRef");case 7:return"Fragment";case 5:return s;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return He(s);case 8:return s===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof s=="function")return s.displayName||s.name||null;if(typeof s=="string")return s}return null}function he(i){switch(typeof i){case"boolean":case"number":case"string":case"undefined":return i;case"object":return i;default:return""}}function Pe(i){var s=i.type;return(i=i.nodeName)&&i.toLowerCase()==="input"&&(s==="checkbox"||s==="radio")}function Ke(i){var s=Pe(i)?"checked":"value",l=Object.getOwnPropertyDescriptor(i.constructor.prototype,s),f=""+i[s];if(!i.hasOwnProperty(s)&&typeof l<"u"&&typeof l.get=="function"&&typeof l.set=="function"){var v=l.get,M=l.set;return Object.defineProperty(i,s,{configurable:!0,get:function(){return v.call(this)},set:function(N){f=""+N,M.call(this,N)}}),Object.defineProperty(i,s,{enumerable:l.enumerable}),{getValue:function(){return f},setValue:function(N){f=""+N},stopTracking:function(){i._valueTracker=null,delete i[s]}}}}function Ge(i){i._valueTracker||(i._valueTracker=Ke(i))}function pt(i){if(!i)return!1;var s=i._valueTracker;if(!s)return!0;var l=s.getValue(),f="";return i&&(f=Pe(i)?i.checked?"true":"false":i.value),i=f,i!==l?(s.setValue(i),!0):!1}function nn(i){if(i=i||(typeof document<"u"?document:void 0),typeof i>"u")return null;try{return i.activeElement||i.body}catch{return i.body}}function mt(i,s){var l=s.checked;return ne({},s,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:l??i._wrapperState.initialChecked})}function Nt(i,s){var l=s.defaultValue==null?"":s.defaultValue,f=s.checked!=null?s.checked:s.defaultChecked;l=he(s.value!=null?s.value:l),i._wrapperState={initialChecked:f,initialValue:l,controlled:s.type==="checkbox"||s.type==="radio"?s.checked!=null:s.value!=null}}function qt(i,s){s=s.checked,s!=null&&D(i,"checked",s,!1)}function bt(i,s){qt(i,s);var l=he(s.value),f=s.type;if(l!=null)f==="number"?(l===0&&i.value===""||i.value!=l)&&(i.value=""+l):i.value!==""+l&&(i.value=""+l);else if(f==="submit"||f==="reset"){i.removeAttribute("value");return}s.hasOwnProperty("value")?cn(i,s.type,l):s.hasOwnProperty("defaultValue")&&cn(i,s.type,he(s.defaultValue)),s.checked==null&&s.defaultChecked!=null&&(i.defaultChecked=!!s.defaultChecked)}function Yt(i,s,l){if(s.hasOwnProperty("value")||s.hasOwnProperty("defaultValue")){var f=s.type;if(!(f!=="submit"&&f!=="reset"||s.value!==void 0&&s.value!==null))return;s=""+i._wrapperState.initialValue,l||s===i.value||(i.value=s),i.defaultValue=s}l=i.name,l!==""&&(i.name=""),i.defaultChecked=!!i._wrapperState.initialChecked,l!==""&&(i.name=l)}function cn(i,s,l){(s!=="number"||nn(i.ownerDocument)!==i)&&(l==null?i.defaultValue=""+i._wrapperState.initialValue:i.defaultValue!==""+l&&(i.defaultValue=""+l))}var vn=Array.isArray;function Bt(i,s,l,f){if(i=i.options,s){s={};for(var v=0;v<l.length;v++)s["$"+l[v]]=!0;for(l=0;l<i.length;l++)v=s.hasOwnProperty("$"+i[l].value),i[l].selected!==v&&(i[l].selected=v),v&&f&&(i[l].defaultSelected=!0)}else{for(l=""+he(l),s=null,v=0;v<i.length;v++){if(i[v].value===l){i[v].selected=!0,f&&(i[v].defaultSelected=!0);return}s!==null||i[v].disabled||(s=i[v])}s!==null&&(s.selected=!0)}}function en(i,s){if(s.dangerouslySetInnerHTML!=null)throw Error(t(91));return ne({},s,{value:void 0,defaultValue:void 0,children:""+i._wrapperState.initialValue})}function $(i,s){var l=s.value;if(l==null){if(l=s.children,s=s.defaultValue,l!=null){if(s!=null)throw Error(t(92));if(vn(l)){if(1<l.length)throw Error(t(93));l=l[0]}s=l}s==null&&(s=""),l=s}i._wrapperState={initialValue:he(l)}}function sn(i,s){var l=he(s.value),f=he(s.defaultValue);l!=null&&(l=""+l,l!==i.value&&(i.value=l),s.defaultValue==null&&i.defaultValue!==l&&(i.defaultValue=l)),f!=null&&(i.defaultValue=""+f)}function lt(i){var s=i.textContent;s===i._wrapperState.initialValue&&s!==""&&s!==null&&(i.value=s)}function z(i){switch(i){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function R(i,s){return i==null||i==="http://www.w3.org/1999/xhtml"?z(s):i==="http://www.w3.org/2000/svg"&&s==="foreignObject"?"http://www.w3.org/1999/xhtml":i}var K,ce=(function(i){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(s,l,f,v){MSApp.execUnsafeLocalFunction(function(){return i(s,l,f,v)})}:i})(function(i,s){if(i.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in i)i.innerHTML=s;else{for(K=K||document.createElement("div"),K.innerHTML="<svg>"+s.valueOf().toString()+"</svg>",s=K.firstChild;i.firstChild;)i.removeChild(i.firstChild);for(;s.firstChild;)i.appendChild(s.firstChild)}});function me(i,s){if(s){var l=i.firstChild;if(l&&l===i.lastChild&&l.nodeType===3){l.nodeValue=s;return}}i.textContent=s}var Me={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Oe=["Webkit","ms","Moz","O"];Object.keys(Me).forEach(function(i){Oe.forEach(function(s){s=s+i.charAt(0).toUpperCase()+i.substring(1),Me[s]=Me[i]})});function ge(i,s,l){return s==null||typeof s=="boolean"||s===""?"":l||typeof s!="number"||s===0||Me.hasOwnProperty(i)&&Me[i]?(""+s).trim():s+"px"}function _e(i,s){i=i.style;for(var l in s)if(s.hasOwnProperty(l)){var f=l.indexOf("--")===0,v=ge(l,s[l],f);l==="float"&&(l="cssFloat"),f?i.setProperty(l,v):i[l]=v}}var ze=ne({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function et(i,s){if(s){if(ze[i]&&(s.children!=null||s.dangerouslySetInnerHTML!=null))throw Error(t(137,i));if(s.dangerouslySetInnerHTML!=null){if(s.children!=null)throw Error(t(60));if(typeof s.dangerouslySetInnerHTML!="object"||!("__html"in s.dangerouslySetInnerHTML))throw Error(t(61))}if(s.style!=null&&typeof s.style!="object")throw Error(t(62))}}function Ue(i,s){if(i.indexOf("-")===-1)return typeof s.is=="string";switch(i){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var Fe=null;function Je(i){return i=i.target||i.srcElement||window,i.correspondingUseElement&&(i=i.correspondingUseElement),i.nodeType===3?i.parentNode:i}var ct=null,dt=null,Z=null;function Le(i){if(i=Ko(i)){if(typeof ct!="function")throw Error(t(280));var s=i.stateNode;s&&(s=oc(s),ct(i.stateNode,i.type,s))}}function ve(i){dt?Z?Z.push(i):Z=[i]:dt=i}function Ie(){if(dt){var i=dt,s=Z;if(Z=dt=null,Le(i),s)for(i=0;i<s.length;i++)Le(s[i])}}function Ve(i,s){return i(s)}function ye(){}var tt=!1;function Ze(i,s,l){if(tt)return i(s,l);tt=!0;try{return Ve(i,s,l)}finally{tt=!1,(dt!==null||Z!==null)&&(ye(),Ie())}}function Ft(i,s){var l=i.stateNode;if(l===null)return null;var f=oc(l);if(f===null)return null;l=f[s];e:switch(s){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(f=!f.disabled)||(i=i.type,f=!(i==="button"||i==="input"||i==="select"||i==="textarea")),i=!f;break e;default:i=!1}if(i)return null;if(l&&typeof l!="function")throw Error(t(231,s,typeof l));return l}var Ut=!1;if(u)try{var yn={};Object.defineProperty(yn,"passive",{get:function(){Ut=!0}}),window.addEventListener("test",yn,yn),window.removeEventListener("test",yn,yn)}catch{Ut=!1}function li(i,s,l,f,v,M,N,W,Y){var pe=Array.prototype.slice.call(arguments,3);try{s.apply(l,pe)}catch(we){this.onError(we)}}var qi=!1,Lr=null,Mi=!1,Dr=null,No={onError:function(i){qi=!0,Lr=i}};function _a(i,s,l,f,v,M,N,W,Y){qi=!1,Lr=null,li.apply(No,arguments)}function xa(i,s,l,f,v,M,N,W,Y){if(_a.apply(this,arguments),qi){if(qi){var pe=Lr;qi=!1,Lr=null}else throw Error(t(198));Mi||(Mi=!0,Dr=pe)}}function In(i){var s=i,l=i;if(i.alternate)for(;s.return;)s=s.return;else{i=s;do s=i,(s.flags&4098)!==0&&(l=s.return),i=s.return;while(i)}return s.tag===3?l:null}function Nr(i){if(i.tag===13){var s=i.memoizedState;if(s===null&&(i=i.alternate,i!==null&&(s=i.memoizedState)),s!==null)return s.dehydrated}return null}function ss(i){if(In(i)!==i)throw Error(t(188))}function Vs(i){var s=i.alternate;if(!s){if(s=In(i),s===null)throw Error(t(188));return s!==i?null:i}for(var l=i,f=s;;){var v=l.return;if(v===null)break;var M=v.alternate;if(M===null){if(f=v.return,f!==null){l=f;continue}break}if(v.child===M.child){for(M=v.child;M;){if(M===l)return ss(v),i;if(M===f)return ss(v),s;M=M.sibling}throw Error(t(188))}if(l.return!==f.return)l=v,f=M;else{for(var N=!1,W=v.child;W;){if(W===l){N=!0,l=v,f=M;break}if(W===f){N=!0,f=v,l=M;break}W=W.sibling}if(!N){for(W=M.child;W;){if(W===l){N=!0,l=M,f=v;break}if(W===f){N=!0,f=M,l=v;break}W=W.sibling}if(!N)throw Error(t(189))}}if(l.alternate!==f)throw Error(t(190))}if(l.tag!==3)throw Error(t(188));return l.stateNode.current===l?i:s}function fe(i){return i=Vs(i),i!==null?De(i):null}function De(i){if(i.tag===5||i.tag===6)return i;for(i=i.child;i!==null;){var s=De(i);if(s!==null)return s;i=i.sibling}return null}var xe=e.unstable_scheduleCallback,it=e.unstable_cancelCallback,ut=e.unstable_shouldYield,Mt=e.unstable_requestPaint,ht=e.unstable_now,xt=e.unstable_getCurrentPriorityLevel,ft=e.unstable_ImmediatePriority,Ot=e.unstable_UserBlockingPriority,L=e.unstable_NormalPriority,B=e.unstable_LowPriority,se=e.unstable_IdlePriority,re=null,ie=null;function Ae(i){if(ie&&typeof ie.onCommitFiberRoot=="function")try{ie.onCommitFiberRoot(re,i,void 0,(i.current.flags&128)===128)}catch{}}var be=Math.clz32?Math.clz32:Xe,Te=Math.log,We=Math.LN2;function Xe(i){return i>>>=0,i===0?32:31-(Te(i)/We|0)|0}var ot=64,gt=4194304;function qe(i){switch(i&-i){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return i&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return i&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return i}}function Ct(i,s){var l=i.pendingLanes;if(l===0)return 0;var f=0,v=i.suspendedLanes,M=i.pingedLanes,N=l&268435455;if(N!==0){var W=N&~v;W!==0?f=qe(W):(M&=N,M!==0&&(f=qe(M)))}else N=l&~v,N!==0?f=qe(N):M!==0&&(f=qe(M));if(f===0)return 0;if(s!==0&&s!==f&&(s&v)===0&&(v=f&-f,M=s&-s,v>=M||v===16&&(M&4194240)!==0))return s;if((f&4)!==0&&(f|=l&16),s=i.entangledLanes,s!==0)for(i=i.entanglements,s&=f;0<s;)l=31-be(s),v=1<<l,f|=i[l],s&=~v;return f}function an(i,s){switch(i){case 1:case 2:case 4:return s+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return s+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function Gt(i,s){for(var l=i.suspendedLanes,f=i.pingedLanes,v=i.expirationTimes,M=i.pendingLanes;0<M;){var N=31-be(M),W=1<<N,Y=v[N];Y===-1?((W&l)===0||(W&f)!==0)&&(v[N]=an(W,s)):Y<=s&&(i.expiredLanes|=W),M&=~W}}function Rt(i){return i=i.pendingLanes&-1073741825,i!==0?i:i&1073741824?1073741824:0}function tn(){var i=ot;return ot<<=1,(ot&4194240)===0&&(ot=64),i}function Ye(i){for(var s=[],l=0;31>l;l++)s.push(i);return s}function Sn(i,s,l){i.pendingLanes|=s,s!==536870912&&(i.suspendedLanes=0,i.pingedLanes=0),i=i.eventTimes,s=31-be(s),i[s]=l}function It(i,s){var l=i.pendingLanes&~s;i.pendingLanes=s,i.suspendedLanes=0,i.pingedLanes=0,i.expiredLanes&=s,i.mutableReadLanes&=s,i.entangledLanes&=s,s=i.entanglements;var f=i.eventTimes;for(i=i.expirationTimes;0<l;){var v=31-be(l),M=1<<v;s[v]=0,f[v]=-1,i[v]=-1,l&=~M}}function Kn(i,s){var l=i.entangledLanes|=s;for(i=i.entanglements;l;){var f=31-be(l),v=1<<f;v&s|i[f]&s&&(i[f]|=s),l&=~v}}var Pt=0;function Yi(i){return i&=-i,1<i?4<i?(i&268435455)!==0?16:536870912:4:1}var Ur,Wt,un,ji,jt,Fi=!1,Ki=[],Zi=null,as=null,os=null,Uo=new Map,Fo=new Map,ls=[],my="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Im(i,s){switch(i){case"focusin":case"focusout":Zi=null;break;case"dragenter":case"dragleave":as=null;break;case"mouseover":case"mouseout":os=null;break;case"pointerover":case"pointerout":Uo.delete(s.pointerId);break;case"gotpointercapture":case"lostpointercapture":Fo.delete(s.pointerId)}}function Oo(i,s,l,f,v,M){return i===null||i.nativeEvent!==M?(i={blockedOn:s,domEventName:l,eventSystemFlags:f,nativeEvent:M,targetContainers:[v]},s!==null&&(s=Ko(s),s!==null&&Wt(s)),i):(i.eventSystemFlags|=f,s=i.targetContainers,v!==null&&s.indexOf(v)===-1&&s.push(v),i)}function gy(i,s,l,f,v){switch(s){case"focusin":return Zi=Oo(Zi,i,s,l,f,v),!0;case"dragenter":return as=Oo(as,i,s,l,f,v),!0;case"mouseover":return os=Oo(os,i,s,l,f,v),!0;case"pointerover":var M=v.pointerId;return Uo.set(M,Oo(Uo.get(M)||null,i,s,l,f,v)),!0;case"gotpointercapture":return M=v.pointerId,Fo.set(M,Oo(Fo.get(M)||null,i,s,l,f,v)),!0}return!1}function km(i){var s=Bs(i.target);if(s!==null){var l=In(s);if(l!==null){if(s=l.tag,s===13){if(s=Nr(l),s!==null){i.blockedOn=s,jt(i.priority,function(){un(l)});return}}else if(s===3&&l.stateNode.current.memoizedState.isDehydrated){i.blockedOn=l.tag===3?l.stateNode.containerInfo:null;return}}}i.blockedOn=null}function ql(i){if(i.blockedOn!==null)return!1;for(var s=i.targetContainers;0<s.length;){var l=Sf(i.domEventName,i.eventSystemFlags,s[0],i.nativeEvent);if(l===null){l=i.nativeEvent;var f=new l.constructor(l.type,l);Fe=f,l.target.dispatchEvent(f),Fe=null}else return s=Ko(l),s!==null&&Wt(s),i.blockedOn=l,!1;s.shift()}return!0}function zm(i,s,l){ql(i)&&l.delete(s)}function vy(){Fi=!1,Zi!==null&&ql(Zi)&&(Zi=null),as!==null&&ql(as)&&(as=null),os!==null&&ql(os)&&(os=null),Uo.forEach(zm),Fo.forEach(zm)}function Io(i,s){i.blockedOn===s&&(i.blockedOn=null,Fi||(Fi=!0,e.unstable_scheduleCallback(e.unstable_NormalPriority,vy)))}function ko(i){function s(v){return Io(v,i)}if(0<Ki.length){Io(Ki[0],i);for(var l=1;l<Ki.length;l++){var f=Ki[l];f.blockedOn===i&&(f.blockedOn=null)}}for(Zi!==null&&Io(Zi,i),as!==null&&Io(as,i),os!==null&&Io(os,i),Uo.forEach(s),Fo.forEach(s),l=0;l<ls.length;l++)f=ls[l],f.blockedOn===i&&(f.blockedOn=null);for(;0<ls.length&&(l=ls[0],l.blockedOn===null);)km(l),l.blockedOn===null&&ls.shift()}var ya=w.ReactCurrentBatchConfig,Yl=!0;function _y(i,s,l,f){var v=Pt,M=ya.transition;ya.transition=null;try{Pt=1,yf(i,s,l,f)}finally{Pt=v,ya.transition=M}}function xy(i,s,l,f){var v=Pt,M=ya.transition;ya.transition=null;try{Pt=4,yf(i,s,l,f)}finally{Pt=v,ya.transition=M}}function yf(i,s,l,f){if(Yl){var v=Sf(i,s,l,f);if(v===null)kf(i,s,f,jl,l),Im(i,f);else if(gy(v,i,s,l,f))f.stopPropagation();else if(Im(i,f),s&4&&-1<my.indexOf(i)){for(;v!==null;){var M=Ko(v);if(M!==null&&Ur(M),M=Sf(i,s,l,f),M===null&&kf(i,s,f,jl,l),M===v)break;v=M}v!==null&&f.stopPropagation()}else kf(i,s,f,null,l)}}var jl=null;function Sf(i,s,l,f){if(jl=null,i=Je(f),i=Bs(i),i!==null)if(s=In(i),s===null)i=null;else if(l=s.tag,l===13){if(i=Nr(s),i!==null)return i;i=null}else if(l===3){if(s.stateNode.current.memoizedState.isDehydrated)return s.tag===3?s.stateNode.containerInfo:null;i=null}else s!==i&&(i=null);return jl=i,null}function Hm(i){switch(i){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(xt()){case ft:return 1;case Ot:return 4;case L:case B:return 16;case se:return 536870912;default:return 16}default:return 16}}var cs=null,Mf=null,Kl=null;function Vm(){if(Kl)return Kl;var i,s=Mf,l=s.length,f,v="value"in cs?cs.value:cs.textContent,M=v.length;for(i=0;i<l&&s[i]===v[i];i++);var N=l-i;for(f=1;f<=N&&s[l-f]===v[M-f];f++);return Kl=v.slice(i,1<f?1-f:void 0)}function Zl(i){var s=i.keyCode;return"charCode"in i?(i=i.charCode,i===0&&s===13&&(i=13)):i=s,i===10&&(i=13),32<=i||i===13?i:0}function Jl(){return!0}function Bm(){return!1}function Ei(i){function s(l,f,v,M,N){this._reactName=l,this._targetInst=v,this.type=f,this.nativeEvent=M,this.target=N,this.currentTarget=null;for(var W in i)i.hasOwnProperty(W)&&(l=i[W],this[W]=l?l(M):M[W]);return this.isDefaultPrevented=(M.defaultPrevented!=null?M.defaultPrevented:M.returnValue===!1)?Jl:Bm,this.isPropagationStopped=Bm,this}return ne(s.prototype,{preventDefault:function(){this.defaultPrevented=!0;var l=this.nativeEvent;l&&(l.preventDefault?l.preventDefault():typeof l.returnValue!="unknown"&&(l.returnValue=!1),this.isDefaultPrevented=Jl)},stopPropagation:function(){var l=this.nativeEvent;l&&(l.stopPropagation?l.stopPropagation():typeof l.cancelBubble!="unknown"&&(l.cancelBubble=!0),this.isPropagationStopped=Jl)},persist:function(){},isPersistent:Jl}),s}var Sa={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(i){return i.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Ef=Ei(Sa),zo=ne({},Sa,{view:0,detail:0}),yy=Ei(zo),wf,Tf,Ho,Ql=ne({},zo,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:bf,button:0,buttons:0,relatedTarget:function(i){return i.relatedTarget===void 0?i.fromElement===i.srcElement?i.toElement:i.fromElement:i.relatedTarget},movementX:function(i){return"movementX"in i?i.movementX:(i!==Ho&&(Ho&&i.type==="mousemove"?(wf=i.screenX-Ho.screenX,Tf=i.screenY-Ho.screenY):Tf=wf=0,Ho=i),wf)},movementY:function(i){return"movementY"in i?i.movementY:Tf}}),Gm=Ei(Ql),Sy=ne({},Ql,{dataTransfer:0}),My=Ei(Sy),Ey=ne({},zo,{relatedTarget:0}),Af=Ei(Ey),wy=ne({},Sa,{animationName:0,elapsedTime:0,pseudoElement:0}),Ty=Ei(wy),Ay=ne({},Sa,{clipboardData:function(i){return"clipboardData"in i?i.clipboardData:window.clipboardData}}),by=Ei(Ay),Cy=ne({},Sa,{data:0}),Wm=Ei(Cy),Ry={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Py={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Ly={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Dy(i){var s=this.nativeEvent;return s.getModifierState?s.getModifierState(i):(i=Ly[i])?!!s[i]:!1}function bf(){return Dy}var Ny=ne({},zo,{key:function(i){if(i.key){var s=Ry[i.key]||i.key;if(s!=="Unidentified")return s}return i.type==="keypress"?(i=Zl(i),i===13?"Enter":String.fromCharCode(i)):i.type==="keydown"||i.type==="keyup"?Py[i.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:bf,charCode:function(i){return i.type==="keypress"?Zl(i):0},keyCode:function(i){return i.type==="keydown"||i.type==="keyup"?i.keyCode:0},which:function(i){return i.type==="keypress"?Zl(i):i.type==="keydown"||i.type==="keyup"?i.keyCode:0}}),Uy=Ei(Ny),Fy=ne({},Ql,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Xm=Ei(Fy),Oy=ne({},zo,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:bf}),Iy=Ei(Oy),ky=ne({},Sa,{propertyName:0,elapsedTime:0,pseudoElement:0}),zy=Ei(ky),Hy=ne({},Ql,{deltaX:function(i){return"deltaX"in i?i.deltaX:"wheelDeltaX"in i?-i.wheelDeltaX:0},deltaY:function(i){return"deltaY"in i?i.deltaY:"wheelDeltaY"in i?-i.wheelDeltaY:"wheelDelta"in i?-i.wheelDelta:0},deltaZ:0,deltaMode:0}),Vy=Ei(Hy),By=[9,13,27,32],Cf=u&&"CompositionEvent"in window,Vo=null;u&&"documentMode"in document&&(Vo=document.documentMode);var Gy=u&&"TextEvent"in window&&!Vo,$m=u&&(!Cf||Vo&&8<Vo&&11>=Vo),qm=" ",Ym=!1;function jm(i,s){switch(i){case"keyup":return By.indexOf(s.keyCode)!==-1;case"keydown":return s.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Km(i){return i=i.detail,typeof i=="object"&&"data"in i?i.data:null}var Ma=!1;function Wy(i,s){switch(i){case"compositionend":return Km(s);case"keypress":return s.which!==32?null:(Ym=!0,qm);case"textInput":return i=s.data,i===qm&&Ym?null:i;default:return null}}function Xy(i,s){if(Ma)return i==="compositionend"||!Cf&&jm(i,s)?(i=Vm(),Kl=Mf=cs=null,Ma=!1,i):null;switch(i){case"paste":return null;case"keypress":if(!(s.ctrlKey||s.altKey||s.metaKey)||s.ctrlKey&&s.altKey){if(s.char&&1<s.char.length)return s.char;if(s.which)return String.fromCharCode(s.which)}return null;case"compositionend":return $m&&s.locale!=="ko"?null:s.data;default:return null}}var $y={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Zm(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s==="input"?!!$y[i.type]:s==="textarea"}function Jm(i,s,l,f){ve(f),s=rc(s,"onChange"),0<s.length&&(l=new Ef("onChange","change",null,l,f),i.push({event:l,listeners:s}))}var Bo=null,Go=null;function qy(i){gg(i,0)}function ec(i){var s=ba(i);if(pt(s))return i}function Yy(i,s){if(i==="change")return s}var Qm=!1;if(u){var Rf;if(u){var Pf="oninput"in document;if(!Pf){var eg=document.createElement("div");eg.setAttribute("oninput","return;"),Pf=typeof eg.oninput=="function"}Rf=Pf}else Rf=!1;Qm=Rf&&(!document.documentMode||9<document.documentMode)}function tg(){Bo&&(Bo.detachEvent("onpropertychange",ng),Go=Bo=null)}function ng(i){if(i.propertyName==="value"&&ec(Go)){var s=[];Jm(s,Go,i,Je(i)),Ze(qy,s)}}function jy(i,s,l){i==="focusin"?(tg(),Bo=s,Go=l,Bo.attachEvent("onpropertychange",ng)):i==="focusout"&&tg()}function Ky(i){if(i==="selectionchange"||i==="keyup"||i==="keydown")return ec(Go)}function Zy(i,s){if(i==="click")return ec(s)}function Jy(i,s){if(i==="input"||i==="change")return ec(s)}function Qy(i,s){return i===s&&(i!==0||1/i===1/s)||i!==i&&s!==s}var Ji=typeof Object.is=="function"?Object.is:Qy;function Wo(i,s){if(Ji(i,s))return!0;if(typeof i!="object"||i===null||typeof s!="object"||s===null)return!1;var l=Object.keys(i),f=Object.keys(s);if(l.length!==f.length)return!1;for(f=0;f<l.length;f++){var v=l[f];if(!d.call(s,v)||!Ji(i[v],s[v]))return!1}return!0}function ig(i){for(;i&&i.firstChild;)i=i.firstChild;return i}function rg(i,s){var l=ig(i);i=0;for(var f;l;){if(l.nodeType===3){if(f=i+l.textContent.length,i<=s&&f>=s)return{node:l,offset:s-i};i=f}e:{for(;l;){if(l.nextSibling){l=l.nextSibling;break e}l=l.parentNode}l=void 0}l=ig(l)}}function sg(i,s){return i&&s?i===s?!0:i&&i.nodeType===3?!1:s&&s.nodeType===3?sg(i,s.parentNode):"contains"in i?i.contains(s):i.compareDocumentPosition?!!(i.compareDocumentPosition(s)&16):!1:!1}function ag(){for(var i=window,s=nn();s instanceof i.HTMLIFrameElement;){try{var l=typeof s.contentWindow.location.href=="string"}catch{l=!1}if(l)i=s.contentWindow;else break;s=nn(i.document)}return s}function Lf(i){var s=i&&i.nodeName&&i.nodeName.toLowerCase();return s&&(s==="input"&&(i.type==="text"||i.type==="search"||i.type==="tel"||i.type==="url"||i.type==="password")||s==="textarea"||i.contentEditable==="true")}function eS(i){var s=ag(),l=i.focusedElem,f=i.selectionRange;if(s!==l&&l&&l.ownerDocument&&sg(l.ownerDocument.documentElement,l)){if(f!==null&&Lf(l)){if(s=f.start,i=f.end,i===void 0&&(i=s),"selectionStart"in l)l.selectionStart=s,l.selectionEnd=Math.min(i,l.value.length);else if(i=(s=l.ownerDocument||document)&&s.defaultView||window,i.getSelection){i=i.getSelection();var v=l.textContent.length,M=Math.min(f.start,v);f=f.end===void 0?M:Math.min(f.end,v),!i.extend&&M>f&&(v=f,f=M,M=v),v=rg(l,M);var N=rg(l,f);v&&N&&(i.rangeCount!==1||i.anchorNode!==v.node||i.anchorOffset!==v.offset||i.focusNode!==N.node||i.focusOffset!==N.offset)&&(s=s.createRange(),s.setStart(v.node,v.offset),i.removeAllRanges(),M>f?(i.addRange(s),i.extend(N.node,N.offset)):(s.setEnd(N.node,N.offset),i.addRange(s)))}}for(s=[],i=l;i=i.parentNode;)i.nodeType===1&&s.push({element:i,left:i.scrollLeft,top:i.scrollTop});for(typeof l.focus=="function"&&l.focus(),l=0;l<s.length;l++)i=s[l],i.element.scrollLeft=i.left,i.element.scrollTop=i.top}}var tS=u&&"documentMode"in document&&11>=document.documentMode,Ea=null,Df=null,Xo=null,Nf=!1;function og(i,s,l){var f=l.window===l?l.document:l.nodeType===9?l:l.ownerDocument;Nf||Ea==null||Ea!==nn(f)||(f=Ea,"selectionStart"in f&&Lf(f)?f={start:f.selectionStart,end:f.selectionEnd}:(f=(f.ownerDocument&&f.ownerDocument.defaultView||window).getSelection(),f={anchorNode:f.anchorNode,anchorOffset:f.anchorOffset,focusNode:f.focusNode,focusOffset:f.focusOffset}),Xo&&Wo(Xo,f)||(Xo=f,f=rc(Df,"onSelect"),0<f.length&&(s=new Ef("onSelect","select",null,s,l),i.push({event:s,listeners:f}),s.target=Ea)))}function tc(i,s){var l={};return l[i.toLowerCase()]=s.toLowerCase(),l["Webkit"+i]="webkit"+s,l["Moz"+i]="moz"+s,l}var wa={animationend:tc("Animation","AnimationEnd"),animationiteration:tc("Animation","AnimationIteration"),animationstart:tc("Animation","AnimationStart"),transitionend:tc("Transition","TransitionEnd")},Uf={},lg={};u&&(lg=document.createElement("div").style,"AnimationEvent"in window||(delete wa.animationend.animation,delete wa.animationiteration.animation,delete wa.animationstart.animation),"TransitionEvent"in window||delete wa.transitionend.transition);function nc(i){if(Uf[i])return Uf[i];if(!wa[i])return i;var s=wa[i],l;for(l in s)if(s.hasOwnProperty(l)&&l in lg)return Uf[i]=s[l];return i}var cg=nc("animationend"),ug=nc("animationiteration"),fg=nc("animationstart"),dg=nc("transitionend"),hg=new Map,pg="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function us(i,s){hg.set(i,s),o(s,[i])}for(var Ff=0;Ff<pg.length;Ff++){var Of=pg[Ff],nS=Of.toLowerCase(),iS=Of[0].toUpperCase()+Of.slice(1);us(nS,"on"+iS)}us(cg,"onAnimationEnd"),us(ug,"onAnimationIteration"),us(fg,"onAnimationStart"),us("dblclick","onDoubleClick"),us("focusin","onFocus"),us("focusout","onBlur"),us(dg,"onTransitionEnd"),c("onMouseEnter",["mouseout","mouseover"]),c("onMouseLeave",["mouseout","mouseover"]),c("onPointerEnter",["pointerout","pointerover"]),c("onPointerLeave",["pointerout","pointerover"]),o("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),o("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),o("onBeforeInput",["compositionend","keypress","textInput","paste"]),o("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),o("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var $o="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),rS=new Set("cancel close invalid load scroll toggle".split(" ").concat($o));function mg(i,s,l){var f=i.type||"unknown-event";i.currentTarget=l,xa(f,s,void 0,i),i.currentTarget=null}function gg(i,s){s=(s&4)!==0;for(var l=0;l<i.length;l++){var f=i[l],v=f.event;f=f.listeners;e:{var M=void 0;if(s)for(var N=f.length-1;0<=N;N--){var W=f[N],Y=W.instance,pe=W.currentTarget;if(W=W.listener,Y!==M&&v.isPropagationStopped())break e;mg(v,W,pe),M=Y}else for(N=0;N<f.length;N++){if(W=f[N],Y=W.instance,pe=W.currentTarget,W=W.listener,Y!==M&&v.isPropagationStopped())break e;mg(v,W,pe),M=Y}}}if(Mi)throw i=Dr,Mi=!1,Dr=null,i}function on(i,s){var l=s[Wf];l===void 0&&(l=s[Wf]=new Set);var f=i+"__bubble";l.has(f)||(vg(s,i,2,!1),l.add(f))}function If(i,s,l){var f=0;s&&(f|=4),vg(l,i,f,s)}var ic="_reactListening"+Math.random().toString(36).slice(2);function qo(i){if(!i[ic]){i[ic]=!0,r.forEach(function(l){l!=="selectionchange"&&(rS.has(l)||If(l,!1,i),If(l,!0,i))});var s=i.nodeType===9?i:i.ownerDocument;s===null||s[ic]||(s[ic]=!0,If("selectionchange",!1,s))}}function vg(i,s,l,f){switch(Hm(s)){case 1:var v=_y;break;case 4:v=xy;break;default:v=yf}l=v.bind(null,s,l,i),v=void 0,!Ut||s!=="touchstart"&&s!=="touchmove"&&s!=="wheel"||(v=!0),f?v!==void 0?i.addEventListener(s,l,{capture:!0,passive:v}):i.addEventListener(s,l,!0):v!==void 0?i.addEventListener(s,l,{passive:v}):i.addEventListener(s,l,!1)}function kf(i,s,l,f,v){var M=f;if((s&1)===0&&(s&2)===0&&f!==null)e:for(;;){if(f===null)return;var N=f.tag;if(N===3||N===4){var W=f.stateNode.containerInfo;if(W===v||W.nodeType===8&&W.parentNode===v)break;if(N===4)for(N=f.return;N!==null;){var Y=N.tag;if((Y===3||Y===4)&&(Y=N.stateNode.containerInfo,Y===v||Y.nodeType===8&&Y.parentNode===v))return;N=N.return}for(;W!==null;){if(N=Bs(W),N===null)return;if(Y=N.tag,Y===5||Y===6){f=M=N;continue e}W=W.parentNode}}f=f.return}Ze(function(){var pe=M,we=Je(l),Ce=[];e:{var Ee=hg.get(i);if(Ee!==void 0){var je=Ef,nt=i;switch(i){case"keypress":if(Zl(l)===0)break e;case"keydown":case"keyup":je=Uy;break;case"focusin":nt="focus",je=Af;break;case"focusout":nt="blur",je=Af;break;case"beforeblur":case"afterblur":je=Af;break;case"click":if(l.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":je=Gm;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":je=My;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":je=Iy;break;case cg:case ug:case fg:je=Ty;break;case dg:je=zy;break;case"scroll":je=yy;break;case"wheel":je=Vy;break;case"copy":case"cut":case"paste":je=by;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":je=Xm}var rt=(s&4)!==0,Mn=!rt&&i==="scroll",le=rt?Ee!==null?Ee+"Capture":null:Ee;rt=[];for(var Q=pe,de;Q!==null;){de=Q;var Ne=de.stateNode;if(de.tag===5&&Ne!==null&&(de=Ne,le!==null&&(Ne=Ft(Q,le),Ne!=null&&rt.push(Yo(Q,Ne,de)))),Mn)break;Q=Q.return}0<rt.length&&(Ee=new je(Ee,nt,null,l,we),Ce.push({event:Ee,listeners:rt}))}}if((s&7)===0){e:{if(Ee=i==="mouseover"||i==="pointerover",je=i==="mouseout"||i==="pointerout",Ee&&l!==Fe&&(nt=l.relatedTarget||l.fromElement)&&(Bs(nt)||nt[Fr]))break e;if((je||Ee)&&(Ee=we.window===we?we:(Ee=we.ownerDocument)?Ee.defaultView||Ee.parentWindow:window,je?(nt=l.relatedTarget||l.toElement,je=pe,nt=nt?Bs(nt):null,nt!==null&&(Mn=In(nt),nt!==Mn||nt.tag!==5&&nt.tag!==6)&&(nt=null)):(je=null,nt=pe),je!==nt)){if(rt=Gm,Ne="onMouseLeave",le="onMouseEnter",Q="mouse",(i==="pointerout"||i==="pointerover")&&(rt=Xm,Ne="onPointerLeave",le="onPointerEnter",Q="pointer"),Mn=je==null?Ee:ba(je),de=nt==null?Ee:ba(nt),Ee=new rt(Ne,Q+"leave",je,l,we),Ee.target=Mn,Ee.relatedTarget=de,Ne=null,Bs(we)===pe&&(rt=new rt(le,Q+"enter",nt,l,we),rt.target=de,rt.relatedTarget=Mn,Ne=rt),Mn=Ne,je&&nt)t:{for(rt=je,le=nt,Q=0,de=rt;de;de=Ta(de))Q++;for(de=0,Ne=le;Ne;Ne=Ta(Ne))de++;for(;0<Q-de;)rt=Ta(rt),Q--;for(;0<de-Q;)le=Ta(le),de--;for(;Q--;){if(rt===le||le!==null&&rt===le.alternate)break t;rt=Ta(rt),le=Ta(le)}rt=null}else rt=null;je!==null&&_g(Ce,Ee,je,rt,!1),nt!==null&&Mn!==null&&_g(Ce,Mn,nt,rt,!0)}}e:{if(Ee=pe?ba(pe):window,je=Ee.nodeName&&Ee.nodeName.toLowerCase(),je==="select"||je==="input"&&Ee.type==="file")var at=Yy;else if(Zm(Ee))if(Qm)at=Jy;else{at=Ky;var vt=jy}else(je=Ee.nodeName)&&je.toLowerCase()==="input"&&(Ee.type==="checkbox"||Ee.type==="radio")&&(at=Zy);if(at&&(at=at(i,pe))){Jm(Ce,at,l,we);break e}vt&&vt(i,Ee,pe),i==="focusout"&&(vt=Ee._wrapperState)&&vt.controlled&&Ee.type==="number"&&cn(Ee,"number",Ee.value)}switch(vt=pe?ba(pe):window,i){case"focusin":(Zm(vt)||vt.contentEditable==="true")&&(Ea=vt,Df=pe,Xo=null);break;case"focusout":Xo=Df=Ea=null;break;case"mousedown":Nf=!0;break;case"contextmenu":case"mouseup":case"dragend":Nf=!1,og(Ce,l,we);break;case"selectionchange":if(tS)break;case"keydown":case"keyup":og(Ce,l,we)}var _t;if(Cf)e:{switch(i){case"compositionstart":var yt="onCompositionStart";break e;case"compositionend":yt="onCompositionEnd";break e;case"compositionupdate":yt="onCompositionUpdate";break e}yt=void 0}else Ma?jm(i,l)&&(yt="onCompositionEnd"):i==="keydown"&&l.keyCode===229&&(yt="onCompositionStart");yt&&($m&&l.locale!=="ko"&&(Ma||yt!=="onCompositionStart"?yt==="onCompositionEnd"&&Ma&&(_t=Vm()):(cs=we,Mf="value"in cs?cs.value:cs.textContent,Ma=!0)),vt=rc(pe,yt),0<vt.length&&(yt=new Wm(yt,i,null,l,we),Ce.push({event:yt,listeners:vt}),_t?yt.data=_t:(_t=Km(l),_t!==null&&(yt.data=_t)))),(_t=Gy?Wy(i,l):Xy(i,l))&&(pe=rc(pe,"onBeforeInput"),0<pe.length&&(we=new Wm("onBeforeInput","beforeinput",null,l,we),Ce.push({event:we,listeners:pe}),we.data=_t))}gg(Ce,s)})}function Yo(i,s,l){return{instance:i,listener:s,currentTarget:l}}function rc(i,s){for(var l=s+"Capture",f=[];i!==null;){var v=i,M=v.stateNode;v.tag===5&&M!==null&&(v=M,M=Ft(i,l),M!=null&&f.unshift(Yo(i,M,v)),M=Ft(i,s),M!=null&&f.push(Yo(i,M,v))),i=i.return}return f}function Ta(i){if(i===null)return null;do i=i.return;while(i&&i.tag!==5);return i||null}function _g(i,s,l,f,v){for(var M=s._reactName,N=[];l!==null&&l!==f;){var W=l,Y=W.alternate,pe=W.stateNode;if(Y!==null&&Y===f)break;W.tag===5&&pe!==null&&(W=pe,v?(Y=Ft(l,M),Y!=null&&N.unshift(Yo(l,Y,W))):v||(Y=Ft(l,M),Y!=null&&N.push(Yo(l,Y,W)))),l=l.return}N.length!==0&&i.push({event:s,listeners:N})}var sS=/\r\n?/g,aS=/\u0000|\uFFFD/g;function xg(i){return(typeof i=="string"?i:""+i).replace(sS,`
`).replace(aS,"")}function sc(i,s,l){if(s=xg(s),xg(i)!==s&&l)throw Error(t(425))}function ac(){}var zf=null,Hf=null;function Vf(i,s){return i==="textarea"||i==="noscript"||typeof s.children=="string"||typeof s.children=="number"||typeof s.dangerouslySetInnerHTML=="object"&&s.dangerouslySetInnerHTML!==null&&s.dangerouslySetInnerHTML.__html!=null}var Bf=typeof setTimeout=="function"?setTimeout:void 0,oS=typeof clearTimeout=="function"?clearTimeout:void 0,yg=typeof Promise=="function"?Promise:void 0,lS=typeof queueMicrotask=="function"?queueMicrotask:typeof yg<"u"?function(i){return yg.resolve(null).then(i).catch(cS)}:Bf;function cS(i){setTimeout(function(){throw i})}function Gf(i,s){var l=s,f=0;do{var v=l.nextSibling;if(i.removeChild(l),v&&v.nodeType===8)if(l=v.data,l==="/$"){if(f===0){i.removeChild(v),ko(s);return}f--}else l!=="$"&&l!=="$?"&&l!=="$!"||f++;l=v}while(l);ko(s)}function fs(i){for(;i!=null;i=i.nextSibling){var s=i.nodeType;if(s===1||s===3)break;if(s===8){if(s=i.data,s==="$"||s==="$!"||s==="$?")break;if(s==="/$")return null}}return i}function Sg(i){i=i.previousSibling;for(var s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="$"||l==="$!"||l==="$?"){if(s===0)return i;s--}else l==="/$"&&s++}i=i.previousSibling}return null}var Aa=Math.random().toString(36).slice(2),mr="__reactFiber$"+Aa,jo="__reactProps$"+Aa,Fr="__reactContainer$"+Aa,Wf="__reactEvents$"+Aa,uS="__reactListeners$"+Aa,fS="__reactHandles$"+Aa;function Bs(i){var s=i[mr];if(s)return s;for(var l=i.parentNode;l;){if(s=l[Fr]||l[mr]){if(l=s.alternate,s.child!==null||l!==null&&l.child!==null)for(i=Sg(i);i!==null;){if(l=i[mr])return l;i=Sg(i)}return s}i=l,l=i.parentNode}return null}function Ko(i){return i=i[mr]||i[Fr],!i||i.tag!==5&&i.tag!==6&&i.tag!==13&&i.tag!==3?null:i}function ba(i){if(i.tag===5||i.tag===6)return i.stateNode;throw Error(t(33))}function oc(i){return i[jo]||null}var Xf=[],Ca=-1;function ds(i){return{current:i}}function ln(i){0>Ca||(i.current=Xf[Ca],Xf[Ca]=null,Ca--)}function rn(i,s){Ca++,Xf[Ca]=i.current,i.current=s}var hs={},Zn=ds(hs),mi=ds(!1),Gs=hs;function Ra(i,s){var l=i.type.contextTypes;if(!l)return hs;var f=i.stateNode;if(f&&f.__reactInternalMemoizedUnmaskedChildContext===s)return f.__reactInternalMemoizedMaskedChildContext;var v={},M;for(M in l)v[M]=s[M];return f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=s,i.__reactInternalMemoizedMaskedChildContext=v),v}function gi(i){return i=i.childContextTypes,i!=null}function lc(){ln(mi),ln(Zn)}function Mg(i,s,l){if(Zn.current!==hs)throw Error(t(168));rn(Zn,s),rn(mi,l)}function Eg(i,s,l){var f=i.stateNode;if(s=s.childContextTypes,typeof f.getChildContext!="function")return l;f=f.getChildContext();for(var v in f)if(!(v in s))throw Error(t(108,ue(i)||"Unknown",v));return ne({},l,f)}function cc(i){return i=(i=i.stateNode)&&i.__reactInternalMemoizedMergedChildContext||hs,Gs=Zn.current,rn(Zn,i),rn(mi,mi.current),!0}function wg(i,s,l){var f=i.stateNode;if(!f)throw Error(t(169));l?(i=Eg(i,s,Gs),f.__reactInternalMemoizedMergedChildContext=i,ln(mi),ln(Zn),rn(Zn,i)):ln(mi),rn(mi,l)}var Or=null,uc=!1,$f=!1;function Tg(i){Or===null?Or=[i]:Or.push(i)}function dS(i){uc=!0,Tg(i)}function ps(){if(!$f&&Or!==null){$f=!0;var i=0,s=Pt;try{var l=Or;for(Pt=1;i<l.length;i++){var f=l[i];do f=f(!0);while(f!==null)}Or=null,uc=!1}catch(v){throw Or!==null&&(Or=Or.slice(i+1)),xe(ft,ps),v}finally{Pt=s,$f=!1}}return null}var Pa=[],La=0,fc=null,dc=0,Oi=[],Ii=0,Ws=null,Ir=1,kr="";function Xs(i,s){Pa[La++]=dc,Pa[La++]=fc,fc=i,dc=s}function Ag(i,s,l){Oi[Ii++]=Ir,Oi[Ii++]=kr,Oi[Ii++]=Ws,Ws=i;var f=Ir;i=kr;var v=32-be(f)-1;f&=~(1<<v),l+=1;var M=32-be(s)+v;if(30<M){var N=v-v%5;M=(f&(1<<N)-1).toString(32),f>>=N,v-=N,Ir=1<<32-be(s)+v|l<<v|f,kr=M+i}else Ir=1<<M|l<<v|f,kr=i}function qf(i){i.return!==null&&(Xs(i,1),Ag(i,1,0))}function Yf(i){for(;i===fc;)fc=Pa[--La],Pa[La]=null,dc=Pa[--La],Pa[La]=null;for(;i===Ws;)Ws=Oi[--Ii],Oi[Ii]=null,kr=Oi[--Ii],Oi[Ii]=null,Ir=Oi[--Ii],Oi[Ii]=null}var wi=null,Ti=null,fn=!1,Qi=null;function bg(i,s){var l=Vi(5,null,null,0);l.elementType="DELETED",l.stateNode=s,l.return=i,s=i.deletions,s===null?(i.deletions=[l],i.flags|=16):s.push(l)}function Cg(i,s){switch(i.tag){case 5:var l=i.type;return s=s.nodeType!==1||l.toLowerCase()!==s.nodeName.toLowerCase()?null:s,s!==null?(i.stateNode=s,wi=i,Ti=fs(s.firstChild),!0):!1;case 6:return s=i.pendingProps===""||s.nodeType!==3?null:s,s!==null?(i.stateNode=s,wi=i,Ti=null,!0):!1;case 13:return s=s.nodeType!==8?null:s,s!==null?(l=Ws!==null?{id:Ir,overflow:kr}:null,i.memoizedState={dehydrated:s,treeContext:l,retryLane:1073741824},l=Vi(18,null,null,0),l.stateNode=s,l.return=i,i.child=l,wi=i,Ti=null,!0):!1;default:return!1}}function jf(i){return(i.mode&1)!==0&&(i.flags&128)===0}function Kf(i){if(fn){var s=Ti;if(s){var l=s;if(!Cg(i,s)){if(jf(i))throw Error(t(418));s=fs(l.nextSibling);var f=wi;s&&Cg(i,s)?bg(f,l):(i.flags=i.flags&-4097|2,fn=!1,wi=i)}}else{if(jf(i))throw Error(t(418));i.flags=i.flags&-4097|2,fn=!1,wi=i}}}function Rg(i){for(i=i.return;i!==null&&i.tag!==5&&i.tag!==3&&i.tag!==13;)i=i.return;wi=i}function hc(i){if(i!==wi)return!1;if(!fn)return Rg(i),fn=!0,!1;var s;if((s=i.tag!==3)&&!(s=i.tag!==5)&&(s=i.type,s=s!=="head"&&s!=="body"&&!Vf(i.type,i.memoizedProps)),s&&(s=Ti)){if(jf(i))throw Pg(),Error(t(418));for(;s;)bg(i,s),s=fs(s.nextSibling)}if(Rg(i),i.tag===13){if(i=i.memoizedState,i=i!==null?i.dehydrated:null,!i)throw Error(t(317));e:{for(i=i.nextSibling,s=0;i;){if(i.nodeType===8){var l=i.data;if(l==="/$"){if(s===0){Ti=fs(i.nextSibling);break e}s--}else l!=="$"&&l!=="$!"&&l!=="$?"||s++}i=i.nextSibling}Ti=null}}else Ti=wi?fs(i.stateNode.nextSibling):null;return!0}function Pg(){for(var i=Ti;i;)i=fs(i.nextSibling)}function Da(){Ti=wi=null,fn=!1}function Zf(i){Qi===null?Qi=[i]:Qi.push(i)}var hS=w.ReactCurrentBatchConfig;function Zo(i,s,l){if(i=l.ref,i!==null&&typeof i!="function"&&typeof i!="object"){if(l._owner){if(l=l._owner,l){if(l.tag!==1)throw Error(t(309));var f=l.stateNode}if(!f)throw Error(t(147,i));var v=f,M=""+i;return s!==null&&s.ref!==null&&typeof s.ref=="function"&&s.ref._stringRef===M?s.ref:(s=function(N){var W=v.refs;N===null?delete W[M]:W[M]=N},s._stringRef=M,s)}if(typeof i!="string")throw Error(t(284));if(!l._owner)throw Error(t(290,i))}return i}function pc(i,s){throw i=Object.prototype.toString.call(s),Error(t(31,i==="[object Object]"?"object with keys {"+Object.keys(s).join(", ")+"}":i))}function Lg(i){var s=i._init;return s(i._payload)}function Dg(i){function s(le,Q){if(i){var de=le.deletions;de===null?(le.deletions=[Q],le.flags|=16):de.push(Q)}}function l(le,Q){if(!i)return null;for(;Q!==null;)s(le,Q),Q=Q.sibling;return null}function f(le,Q){for(le=new Map;Q!==null;)Q.key!==null?le.set(Q.key,Q):le.set(Q.index,Q),Q=Q.sibling;return le}function v(le,Q){return le=Ms(le,Q),le.index=0,le.sibling=null,le}function M(le,Q,de){return le.index=de,i?(de=le.alternate,de!==null?(de=de.index,de<Q?(le.flags|=2,Q):de):(le.flags|=2,Q)):(le.flags|=1048576,Q)}function N(le){return i&&le.alternate===null&&(le.flags|=2),le}function W(le,Q,de,Ne){return Q===null||Q.tag!==6?(Q=Bd(de,le.mode,Ne),Q.return=le,Q):(Q=v(Q,de),Q.return=le,Q)}function Y(le,Q,de,Ne){var at=de.type;return at===F?we(le,Q,de.props.children,Ne,de.key):Q!==null&&(Q.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ee&&Lg(at)===Q.type)?(Ne=v(Q,de.props),Ne.ref=Zo(le,Q,de),Ne.return=le,Ne):(Ne=kc(de.type,de.key,de.props,null,le.mode,Ne),Ne.ref=Zo(le,Q,de),Ne.return=le,Ne)}function pe(le,Q,de,Ne){return Q===null||Q.tag!==4||Q.stateNode.containerInfo!==de.containerInfo||Q.stateNode.implementation!==de.implementation?(Q=Gd(de,le.mode,Ne),Q.return=le,Q):(Q=v(Q,de.children||[]),Q.return=le,Q)}function we(le,Q,de,Ne,at){return Q===null||Q.tag!==7?(Q=Qs(de,le.mode,Ne,at),Q.return=le,Q):(Q=v(Q,de),Q.return=le,Q)}function Ce(le,Q,de){if(typeof Q=="string"&&Q!==""||typeof Q=="number")return Q=Bd(""+Q,le.mode,de),Q.return=le,Q;if(typeof Q=="object"&&Q!==null){switch(Q.$$typeof){case C:return de=kc(Q.type,Q.key,Q.props,null,le.mode,de),de.ref=Zo(le,null,Q),de.return=le,de;case P:return Q=Gd(Q,le.mode,de),Q.return=le,Q;case ee:var Ne=Q._init;return Ce(le,Ne(Q._payload),de)}if(vn(Q)||te(Q))return Q=Qs(Q,le.mode,de,null),Q.return=le,Q;pc(le,Q)}return null}function Ee(le,Q,de,Ne){var at=Q!==null?Q.key:null;if(typeof de=="string"&&de!==""||typeof de=="number")return at!==null?null:W(le,Q,""+de,Ne);if(typeof de=="object"&&de!==null){switch(de.$$typeof){case C:return de.key===at?Y(le,Q,de,Ne):null;case P:return de.key===at?pe(le,Q,de,Ne):null;case ee:return at=de._init,Ee(le,Q,at(de._payload),Ne)}if(vn(de)||te(de))return at!==null?null:we(le,Q,de,Ne,null);pc(le,de)}return null}function je(le,Q,de,Ne,at){if(typeof Ne=="string"&&Ne!==""||typeof Ne=="number")return le=le.get(de)||null,W(Q,le,""+Ne,at);if(typeof Ne=="object"&&Ne!==null){switch(Ne.$$typeof){case C:return le=le.get(Ne.key===null?de:Ne.key)||null,Y(Q,le,Ne,at);case P:return le=le.get(Ne.key===null?de:Ne.key)||null,pe(Q,le,Ne,at);case ee:var vt=Ne._init;return je(le,Q,de,vt(Ne._payload),at)}if(vn(Ne)||te(Ne))return le=le.get(de)||null,we(Q,le,Ne,at,null);pc(Q,Ne)}return null}function nt(le,Q,de,Ne){for(var at=null,vt=null,_t=Q,yt=Q=0,Hn=null;_t!==null&&yt<de.length;yt++){_t.index>yt?(Hn=_t,_t=null):Hn=_t.sibling;var Xt=Ee(le,_t,de[yt],Ne);if(Xt===null){_t===null&&(_t=Hn);break}i&&_t&&Xt.alternate===null&&s(le,_t),Q=M(Xt,Q,yt),vt===null?at=Xt:vt.sibling=Xt,vt=Xt,_t=Hn}if(yt===de.length)return l(le,_t),fn&&Xs(le,yt),at;if(_t===null){for(;yt<de.length;yt++)_t=Ce(le,de[yt],Ne),_t!==null&&(Q=M(_t,Q,yt),vt===null?at=_t:vt.sibling=_t,vt=_t);return fn&&Xs(le,yt),at}for(_t=f(le,_t);yt<de.length;yt++)Hn=je(_t,le,yt,de[yt],Ne),Hn!==null&&(i&&Hn.alternate!==null&&_t.delete(Hn.key===null?yt:Hn.key),Q=M(Hn,Q,yt),vt===null?at=Hn:vt.sibling=Hn,vt=Hn);return i&&_t.forEach(function(Es){return s(le,Es)}),fn&&Xs(le,yt),at}function rt(le,Q,de,Ne){var at=te(de);if(typeof at!="function")throw Error(t(150));if(de=at.call(de),de==null)throw Error(t(151));for(var vt=at=null,_t=Q,yt=Q=0,Hn=null,Xt=de.next();_t!==null&&!Xt.done;yt++,Xt=de.next()){_t.index>yt?(Hn=_t,_t=null):Hn=_t.sibling;var Es=Ee(le,_t,Xt.value,Ne);if(Es===null){_t===null&&(_t=Hn);break}i&&_t&&Es.alternate===null&&s(le,_t),Q=M(Es,Q,yt),vt===null?at=Es:vt.sibling=Es,vt=Es,_t=Hn}if(Xt.done)return l(le,_t),fn&&Xs(le,yt),at;if(_t===null){for(;!Xt.done;yt++,Xt=de.next())Xt=Ce(le,Xt.value,Ne),Xt!==null&&(Q=M(Xt,Q,yt),vt===null?at=Xt:vt.sibling=Xt,vt=Xt);return fn&&Xs(le,yt),at}for(_t=f(le,_t);!Xt.done;yt++,Xt=de.next())Xt=je(_t,le,yt,Xt.value,Ne),Xt!==null&&(i&&Xt.alternate!==null&&_t.delete(Xt.key===null?yt:Xt.key),Q=M(Xt,Q,yt),vt===null?at=Xt:vt.sibling=Xt,vt=Xt);return i&&_t.forEach(function($S){return s(le,$S)}),fn&&Xs(le,yt),at}function Mn(le,Q,de,Ne){if(typeof de=="object"&&de!==null&&de.type===F&&de.key===null&&(de=de.props.children),typeof de=="object"&&de!==null){switch(de.$$typeof){case C:e:{for(var at=de.key,vt=Q;vt!==null;){if(vt.key===at){if(at=de.type,at===F){if(vt.tag===7){l(le,vt.sibling),Q=v(vt,de.props.children),Q.return=le,le=Q;break e}}else if(vt.elementType===at||typeof at=="object"&&at!==null&&at.$$typeof===ee&&Lg(at)===vt.type){l(le,vt.sibling),Q=v(vt,de.props),Q.ref=Zo(le,vt,de),Q.return=le,le=Q;break e}l(le,vt);break}else s(le,vt);vt=vt.sibling}de.type===F?(Q=Qs(de.props.children,le.mode,Ne,de.key),Q.return=le,le=Q):(Ne=kc(de.type,de.key,de.props,null,le.mode,Ne),Ne.ref=Zo(le,Q,de),Ne.return=le,le=Ne)}return N(le);case P:e:{for(vt=de.key;Q!==null;){if(Q.key===vt)if(Q.tag===4&&Q.stateNode.containerInfo===de.containerInfo&&Q.stateNode.implementation===de.implementation){l(le,Q.sibling),Q=v(Q,de.children||[]),Q.return=le,le=Q;break e}else{l(le,Q);break}else s(le,Q);Q=Q.sibling}Q=Gd(de,le.mode,Ne),Q.return=le,le=Q}return N(le);case ee:return vt=de._init,Mn(le,Q,vt(de._payload),Ne)}if(vn(de))return nt(le,Q,de,Ne);if(te(de))return rt(le,Q,de,Ne);pc(le,de)}return typeof de=="string"&&de!==""||typeof de=="number"?(de=""+de,Q!==null&&Q.tag===6?(l(le,Q.sibling),Q=v(Q,de),Q.return=le,le=Q):(l(le,Q),Q=Bd(de,le.mode,Ne),Q.return=le,le=Q),N(le)):l(le,Q)}return Mn}var Na=Dg(!0),Ng=Dg(!1),mc=ds(null),gc=null,Ua=null,Jf=null;function Qf(){Jf=Ua=gc=null}function ed(i){var s=mc.current;ln(mc),i._currentValue=s}function td(i,s,l){for(;i!==null;){var f=i.alternate;if((i.childLanes&s)!==s?(i.childLanes|=s,f!==null&&(f.childLanes|=s)):f!==null&&(f.childLanes&s)!==s&&(f.childLanes|=s),i===l)break;i=i.return}}function Fa(i,s){gc=i,Jf=Ua=null,i=i.dependencies,i!==null&&i.firstContext!==null&&((i.lanes&s)!==0&&(vi=!0),i.firstContext=null)}function ki(i){var s=i._currentValue;if(Jf!==i)if(i={context:i,memoizedValue:s,next:null},Ua===null){if(gc===null)throw Error(t(308));Ua=i,gc.dependencies={lanes:0,firstContext:i}}else Ua=Ua.next=i;return s}var $s=null;function nd(i){$s===null?$s=[i]:$s.push(i)}function Ug(i,s,l,f){var v=s.interleaved;return v===null?(l.next=l,nd(s)):(l.next=v.next,v.next=l),s.interleaved=l,zr(i,f)}function zr(i,s){i.lanes|=s;var l=i.alternate;for(l!==null&&(l.lanes|=s),l=i,i=i.return;i!==null;)i.childLanes|=s,l=i.alternate,l!==null&&(l.childLanes|=s),l=i,i=i.return;return l.tag===3?l.stateNode:null}var ms=!1;function id(i){i.updateQueue={baseState:i.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Fg(i,s){i=i.updateQueue,s.updateQueue===i&&(s.updateQueue={baseState:i.baseState,firstBaseUpdate:i.firstBaseUpdate,lastBaseUpdate:i.lastBaseUpdate,shared:i.shared,effects:i.effects})}function Hr(i,s){return{eventTime:i,lane:s,tag:0,payload:null,callback:null,next:null}}function gs(i,s,l){var f=i.updateQueue;if(f===null)return null;if(f=f.shared,(Vt&2)!==0){var v=f.pending;return v===null?s.next=s:(s.next=v.next,v.next=s),f.pending=s,zr(i,l)}return v=f.interleaved,v===null?(s.next=s,nd(f)):(s.next=v.next,v.next=s),f.interleaved=s,zr(i,l)}function vc(i,s,l){if(s=s.updateQueue,s!==null&&(s=s.shared,(l&4194240)!==0)){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Kn(i,l)}}function Og(i,s){var l=i.updateQueue,f=i.alternate;if(f!==null&&(f=f.updateQueue,l===f)){var v=null,M=null;if(l=l.firstBaseUpdate,l!==null){do{var N={eventTime:l.eventTime,lane:l.lane,tag:l.tag,payload:l.payload,callback:l.callback,next:null};M===null?v=M=N:M=M.next=N,l=l.next}while(l!==null);M===null?v=M=s:M=M.next=s}else v=M=s;l={baseState:f.baseState,firstBaseUpdate:v,lastBaseUpdate:M,shared:f.shared,effects:f.effects},i.updateQueue=l;return}i=l.lastBaseUpdate,i===null?l.firstBaseUpdate=s:i.next=s,l.lastBaseUpdate=s}function _c(i,s,l,f){var v=i.updateQueue;ms=!1;var M=v.firstBaseUpdate,N=v.lastBaseUpdate,W=v.shared.pending;if(W!==null){v.shared.pending=null;var Y=W,pe=Y.next;Y.next=null,N===null?M=pe:N.next=pe,N=Y;var we=i.alternate;we!==null&&(we=we.updateQueue,W=we.lastBaseUpdate,W!==N&&(W===null?we.firstBaseUpdate=pe:W.next=pe,we.lastBaseUpdate=Y))}if(M!==null){var Ce=v.baseState;N=0,we=pe=Y=null,W=M;do{var Ee=W.lane,je=W.eventTime;if((f&Ee)===Ee){we!==null&&(we=we.next={eventTime:je,lane:0,tag:W.tag,payload:W.payload,callback:W.callback,next:null});e:{var nt=i,rt=W;switch(Ee=s,je=l,rt.tag){case 1:if(nt=rt.payload,typeof nt=="function"){Ce=nt.call(je,Ce,Ee);break e}Ce=nt;break e;case 3:nt.flags=nt.flags&-65537|128;case 0:if(nt=rt.payload,Ee=typeof nt=="function"?nt.call(je,Ce,Ee):nt,Ee==null)break e;Ce=ne({},Ce,Ee);break e;case 2:ms=!0}}W.callback!==null&&W.lane!==0&&(i.flags|=64,Ee=v.effects,Ee===null?v.effects=[W]:Ee.push(W))}else je={eventTime:je,lane:Ee,tag:W.tag,payload:W.payload,callback:W.callback,next:null},we===null?(pe=we=je,Y=Ce):we=we.next=je,N|=Ee;if(W=W.next,W===null){if(W=v.shared.pending,W===null)break;Ee=W,W=Ee.next,Ee.next=null,v.lastBaseUpdate=Ee,v.shared.pending=null}}while(!0);if(we===null&&(Y=Ce),v.baseState=Y,v.firstBaseUpdate=pe,v.lastBaseUpdate=we,s=v.shared.interleaved,s!==null){v=s;do N|=v.lane,v=v.next;while(v!==s)}else M===null&&(v.shared.lanes=0);js|=N,i.lanes=N,i.memoizedState=Ce}}function Ig(i,s,l){if(i=s.effects,s.effects=null,i!==null)for(s=0;s<i.length;s++){var f=i[s],v=f.callback;if(v!==null){if(f.callback=null,f=l,typeof v!="function")throw Error(t(191,v));v.call(f)}}}var Jo={},gr=ds(Jo),Qo=ds(Jo),el=ds(Jo);function qs(i){if(i===Jo)throw Error(t(174));return i}function rd(i,s){switch(rn(el,s),rn(Qo,i),rn(gr,Jo),i=s.nodeType,i){case 9:case 11:s=(s=s.documentElement)?s.namespaceURI:R(null,"");break;default:i=i===8?s.parentNode:s,s=i.namespaceURI||null,i=i.tagName,s=R(s,i)}ln(gr),rn(gr,s)}function Oa(){ln(gr),ln(Qo),ln(el)}function kg(i){qs(el.current);var s=qs(gr.current),l=R(s,i.type);s!==l&&(rn(Qo,i),rn(gr,l))}function sd(i){Qo.current===i&&(ln(gr),ln(Qo))}var hn=ds(0);function xc(i){for(var s=i;s!==null;){if(s.tag===13){var l=s.memoizedState;if(l!==null&&(l=l.dehydrated,l===null||l.data==="$?"||l.data==="$!"))return s}else if(s.tag===19&&s.memoizedProps.revealOrder!==void 0){if((s.flags&128)!==0)return s}else if(s.child!==null){s.child.return=s,s=s.child;continue}if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return null;s=s.return}s.sibling.return=s.return,s=s.sibling}return null}var ad=[];function od(){for(var i=0;i<ad.length;i++)ad[i]._workInProgressVersionPrimary=null;ad.length=0}var yc=w.ReactCurrentDispatcher,ld=w.ReactCurrentBatchConfig,Ys=0,pn=null,Rn=null,kn=null,Sc=!1,tl=!1,nl=0,pS=0;function Jn(){throw Error(t(321))}function cd(i,s){if(s===null)return!1;for(var l=0;l<s.length&&l<i.length;l++)if(!Ji(i[l],s[l]))return!1;return!0}function ud(i,s,l,f,v,M){if(Ys=M,pn=s,s.memoizedState=null,s.updateQueue=null,s.lanes=0,yc.current=i===null||i.memoizedState===null?_S:xS,i=l(f,v),tl){M=0;do{if(tl=!1,nl=0,25<=M)throw Error(t(301));M+=1,kn=Rn=null,s.updateQueue=null,yc.current=yS,i=l(f,v)}while(tl)}if(yc.current=wc,s=Rn!==null&&Rn.next!==null,Ys=0,kn=Rn=pn=null,Sc=!1,s)throw Error(t(300));return i}function fd(){var i=nl!==0;return nl=0,i}function vr(){var i={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return kn===null?pn.memoizedState=kn=i:kn=kn.next=i,kn}function zi(){if(Rn===null){var i=pn.alternate;i=i!==null?i.memoizedState:null}else i=Rn.next;var s=kn===null?pn.memoizedState:kn.next;if(s!==null)kn=s,Rn=i;else{if(i===null)throw Error(t(310));Rn=i,i={memoizedState:Rn.memoizedState,baseState:Rn.baseState,baseQueue:Rn.baseQueue,queue:Rn.queue,next:null},kn===null?pn.memoizedState=kn=i:kn=kn.next=i}return kn}function il(i,s){return typeof s=="function"?s(i):s}function dd(i){var s=zi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=Rn,v=f.baseQueue,M=l.pending;if(M!==null){if(v!==null){var N=v.next;v.next=M.next,M.next=N}f.baseQueue=v=M,l.pending=null}if(v!==null){M=v.next,f=f.baseState;var W=N=null,Y=null,pe=M;do{var we=pe.lane;if((Ys&we)===we)Y!==null&&(Y=Y.next={lane:0,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null}),f=pe.hasEagerState?pe.eagerState:i(f,pe.action);else{var Ce={lane:we,action:pe.action,hasEagerState:pe.hasEagerState,eagerState:pe.eagerState,next:null};Y===null?(W=Y=Ce,N=f):Y=Y.next=Ce,pn.lanes|=we,js|=we}pe=pe.next}while(pe!==null&&pe!==M);Y===null?N=f:Y.next=W,Ji(f,s.memoizedState)||(vi=!0),s.memoizedState=f,s.baseState=N,s.baseQueue=Y,l.lastRenderedState=f}if(i=l.interleaved,i!==null){v=i;do M=v.lane,pn.lanes|=M,js|=M,v=v.next;while(v!==i)}else v===null&&(l.lanes=0);return[s.memoizedState,l.dispatch]}function hd(i){var s=zi(),l=s.queue;if(l===null)throw Error(t(311));l.lastRenderedReducer=i;var f=l.dispatch,v=l.pending,M=s.memoizedState;if(v!==null){l.pending=null;var N=v=v.next;do M=i(M,N.action),N=N.next;while(N!==v);Ji(M,s.memoizedState)||(vi=!0),s.memoizedState=M,s.baseQueue===null&&(s.baseState=M),l.lastRenderedState=M}return[M,f]}function zg(){}function Hg(i,s){var l=pn,f=zi(),v=s(),M=!Ji(f.memoizedState,v);if(M&&(f.memoizedState=v,vi=!0),f=f.queue,pd(Gg.bind(null,l,f,i),[i]),f.getSnapshot!==s||M||kn!==null&&kn.memoizedState.tag&1){if(l.flags|=2048,rl(9,Bg.bind(null,l,f,v,s),void 0,null),zn===null)throw Error(t(349));(Ys&30)!==0||Vg(l,s,v)}return v}function Vg(i,s,l){i.flags|=16384,i={getSnapshot:s,value:l},s=pn.updateQueue,s===null?(s={lastEffect:null,stores:null},pn.updateQueue=s,s.stores=[i]):(l=s.stores,l===null?s.stores=[i]:l.push(i))}function Bg(i,s,l,f){s.value=l,s.getSnapshot=f,Wg(s)&&Xg(i)}function Gg(i,s,l){return l(function(){Wg(s)&&Xg(i)})}function Wg(i){var s=i.getSnapshot;i=i.value;try{var l=s();return!Ji(i,l)}catch{return!0}}function Xg(i){var s=zr(i,1);s!==null&&ir(s,i,1,-1)}function $g(i){var s=vr();return typeof i=="function"&&(i=i()),s.memoizedState=s.baseState=i,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:il,lastRenderedState:i},s.queue=i,i=i.dispatch=vS.bind(null,pn,i),[s.memoizedState,i]}function rl(i,s,l,f){return i={tag:i,create:s,destroy:l,deps:f,next:null},s=pn.updateQueue,s===null?(s={lastEffect:null,stores:null},pn.updateQueue=s,s.lastEffect=i.next=i):(l=s.lastEffect,l===null?s.lastEffect=i.next=i:(f=l.next,l.next=i,i.next=f,s.lastEffect=i)),i}function qg(){return zi().memoizedState}function Mc(i,s,l,f){var v=vr();pn.flags|=i,v.memoizedState=rl(1|s,l,void 0,f===void 0?null:f)}function Ec(i,s,l,f){var v=zi();f=f===void 0?null:f;var M=void 0;if(Rn!==null){var N=Rn.memoizedState;if(M=N.destroy,f!==null&&cd(f,N.deps)){v.memoizedState=rl(s,l,M,f);return}}pn.flags|=i,v.memoizedState=rl(1|s,l,M,f)}function Yg(i,s){return Mc(8390656,8,i,s)}function pd(i,s){return Ec(2048,8,i,s)}function jg(i,s){return Ec(4,2,i,s)}function Kg(i,s){return Ec(4,4,i,s)}function Zg(i,s){if(typeof s=="function")return i=i(),s(i),function(){s(null)};if(s!=null)return i=i(),s.current=i,function(){s.current=null}}function Jg(i,s,l){return l=l!=null?l.concat([i]):null,Ec(4,4,Zg.bind(null,s,i),l)}function md(){}function Qg(i,s){var l=zi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&cd(s,f[1])?f[0]:(l.memoizedState=[i,s],i)}function e0(i,s){var l=zi();s=s===void 0?null:s;var f=l.memoizedState;return f!==null&&s!==null&&cd(s,f[1])?f[0]:(i=i(),l.memoizedState=[i,s],i)}function t0(i,s,l){return(Ys&21)===0?(i.baseState&&(i.baseState=!1,vi=!0),i.memoizedState=l):(Ji(l,s)||(l=tn(),pn.lanes|=l,js|=l,i.baseState=!0),s)}function mS(i,s){var l=Pt;Pt=l!==0&&4>l?l:4,i(!0);var f=ld.transition;ld.transition={};try{i(!1),s()}finally{Pt=l,ld.transition=f}}function n0(){return zi().memoizedState}function gS(i,s,l){var f=ys(i);if(l={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null},i0(i))r0(s,l);else if(l=Ug(i,s,l,f),l!==null){var v=ui();ir(l,i,f,v),s0(l,s,f)}}function vS(i,s,l){var f=ys(i),v={lane:f,action:l,hasEagerState:!1,eagerState:null,next:null};if(i0(i))r0(s,v);else{var M=i.alternate;if(i.lanes===0&&(M===null||M.lanes===0)&&(M=s.lastRenderedReducer,M!==null))try{var N=s.lastRenderedState,W=M(N,l);if(v.hasEagerState=!0,v.eagerState=W,Ji(W,N)){var Y=s.interleaved;Y===null?(v.next=v,nd(s)):(v.next=Y.next,Y.next=v),s.interleaved=v;return}}catch{}finally{}l=Ug(i,s,v,f),l!==null&&(v=ui(),ir(l,i,f,v),s0(l,s,f))}}function i0(i){var s=i.alternate;return i===pn||s!==null&&s===pn}function r0(i,s){tl=Sc=!0;var l=i.pending;l===null?s.next=s:(s.next=l.next,l.next=s),i.pending=s}function s0(i,s,l){if((l&4194240)!==0){var f=s.lanes;f&=i.pendingLanes,l|=f,s.lanes=l,Kn(i,l)}}var wc={readContext:ki,useCallback:Jn,useContext:Jn,useEffect:Jn,useImperativeHandle:Jn,useInsertionEffect:Jn,useLayoutEffect:Jn,useMemo:Jn,useReducer:Jn,useRef:Jn,useState:Jn,useDebugValue:Jn,useDeferredValue:Jn,useTransition:Jn,useMutableSource:Jn,useSyncExternalStore:Jn,useId:Jn,unstable_isNewReconciler:!1},_S={readContext:ki,useCallback:function(i,s){return vr().memoizedState=[i,s===void 0?null:s],i},useContext:ki,useEffect:Yg,useImperativeHandle:function(i,s,l){return l=l!=null?l.concat([i]):null,Mc(4194308,4,Zg.bind(null,s,i),l)},useLayoutEffect:function(i,s){return Mc(4194308,4,i,s)},useInsertionEffect:function(i,s){return Mc(4,2,i,s)},useMemo:function(i,s){var l=vr();return s=s===void 0?null:s,i=i(),l.memoizedState=[i,s],i},useReducer:function(i,s,l){var f=vr();return s=l!==void 0?l(s):s,f.memoizedState=f.baseState=s,i={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:i,lastRenderedState:s},f.queue=i,i=i.dispatch=gS.bind(null,pn,i),[f.memoizedState,i]},useRef:function(i){var s=vr();return i={current:i},s.memoizedState=i},useState:$g,useDebugValue:md,useDeferredValue:function(i){return vr().memoizedState=i},useTransition:function(){var i=$g(!1),s=i[0];return i=mS.bind(null,i[1]),vr().memoizedState=i,[s,i]},useMutableSource:function(){},useSyncExternalStore:function(i,s,l){var f=pn,v=vr();if(fn){if(l===void 0)throw Error(t(407));l=l()}else{if(l=s(),zn===null)throw Error(t(349));(Ys&30)!==0||Vg(f,s,l)}v.memoizedState=l;var M={value:l,getSnapshot:s};return v.queue=M,Yg(Gg.bind(null,f,M,i),[i]),f.flags|=2048,rl(9,Bg.bind(null,f,M,l,s),void 0,null),l},useId:function(){var i=vr(),s=zn.identifierPrefix;if(fn){var l=kr,f=Ir;l=(f&~(1<<32-be(f)-1)).toString(32)+l,s=":"+s+"R"+l,l=nl++,0<l&&(s+="H"+l.toString(32)),s+=":"}else l=pS++,s=":"+s+"r"+l.toString(32)+":";return i.memoizedState=s},unstable_isNewReconciler:!1},xS={readContext:ki,useCallback:Qg,useContext:ki,useEffect:pd,useImperativeHandle:Jg,useInsertionEffect:jg,useLayoutEffect:Kg,useMemo:e0,useReducer:dd,useRef:qg,useState:function(){return dd(il)},useDebugValue:md,useDeferredValue:function(i){var s=zi();return t0(s,Rn.memoizedState,i)},useTransition:function(){var i=dd(il)[0],s=zi().memoizedState;return[i,s]},useMutableSource:zg,useSyncExternalStore:Hg,useId:n0,unstable_isNewReconciler:!1},yS={readContext:ki,useCallback:Qg,useContext:ki,useEffect:pd,useImperativeHandle:Jg,useInsertionEffect:jg,useLayoutEffect:Kg,useMemo:e0,useReducer:hd,useRef:qg,useState:function(){return hd(il)},useDebugValue:md,useDeferredValue:function(i){var s=zi();return Rn===null?s.memoizedState=i:t0(s,Rn.memoizedState,i)},useTransition:function(){var i=hd(il)[0],s=zi().memoizedState;return[i,s]},useMutableSource:zg,useSyncExternalStore:Hg,useId:n0,unstable_isNewReconciler:!1};function er(i,s){if(i&&i.defaultProps){s=ne({},s),i=i.defaultProps;for(var l in i)s[l]===void 0&&(s[l]=i[l]);return s}return s}function gd(i,s,l,f){s=i.memoizedState,l=l(f,s),l=l==null?s:ne({},s,l),i.memoizedState=l,i.lanes===0&&(i.updateQueue.baseState=l)}var Tc={isMounted:function(i){return(i=i._reactInternals)?In(i)===i:!1},enqueueSetState:function(i,s,l){i=i._reactInternals;var f=ui(),v=ys(i),M=Hr(f,v);M.payload=s,l!=null&&(M.callback=l),s=gs(i,M,v),s!==null&&(ir(s,i,v,f),vc(s,i,v))},enqueueReplaceState:function(i,s,l){i=i._reactInternals;var f=ui(),v=ys(i),M=Hr(f,v);M.tag=1,M.payload=s,l!=null&&(M.callback=l),s=gs(i,M,v),s!==null&&(ir(s,i,v,f),vc(s,i,v))},enqueueForceUpdate:function(i,s){i=i._reactInternals;var l=ui(),f=ys(i),v=Hr(l,f);v.tag=2,s!=null&&(v.callback=s),s=gs(i,v,f),s!==null&&(ir(s,i,f,l),vc(s,i,f))}};function a0(i,s,l,f,v,M,N){return i=i.stateNode,typeof i.shouldComponentUpdate=="function"?i.shouldComponentUpdate(f,M,N):s.prototype&&s.prototype.isPureReactComponent?!Wo(l,f)||!Wo(v,M):!0}function o0(i,s,l){var f=!1,v=hs,M=s.contextType;return typeof M=="object"&&M!==null?M=ki(M):(v=gi(s)?Gs:Zn.current,f=s.contextTypes,M=(f=f!=null)?Ra(i,v):hs),s=new s(l,M),i.memoizedState=s.state!==null&&s.state!==void 0?s.state:null,s.updater=Tc,i.stateNode=s,s._reactInternals=i,f&&(i=i.stateNode,i.__reactInternalMemoizedUnmaskedChildContext=v,i.__reactInternalMemoizedMaskedChildContext=M),s}function l0(i,s,l,f){i=s.state,typeof s.componentWillReceiveProps=="function"&&s.componentWillReceiveProps(l,f),typeof s.UNSAFE_componentWillReceiveProps=="function"&&s.UNSAFE_componentWillReceiveProps(l,f),s.state!==i&&Tc.enqueueReplaceState(s,s.state,null)}function vd(i,s,l,f){var v=i.stateNode;v.props=l,v.state=i.memoizedState,v.refs={},id(i);var M=s.contextType;typeof M=="object"&&M!==null?v.context=ki(M):(M=gi(s)?Gs:Zn.current,v.context=Ra(i,M)),v.state=i.memoizedState,M=s.getDerivedStateFromProps,typeof M=="function"&&(gd(i,s,M,l),v.state=i.memoizedState),typeof s.getDerivedStateFromProps=="function"||typeof v.getSnapshotBeforeUpdate=="function"||typeof v.UNSAFE_componentWillMount!="function"&&typeof v.componentWillMount!="function"||(s=v.state,typeof v.componentWillMount=="function"&&v.componentWillMount(),typeof v.UNSAFE_componentWillMount=="function"&&v.UNSAFE_componentWillMount(),s!==v.state&&Tc.enqueueReplaceState(v,v.state,null),_c(i,l,v,f),v.state=i.memoizedState),typeof v.componentDidMount=="function"&&(i.flags|=4194308)}function Ia(i,s){try{var l="",f=s;do l+=Be(f),f=f.return;while(f);var v=l}catch(M){v=`
Error generating stack: `+M.message+`
`+M.stack}return{value:i,source:s,stack:v,digest:null}}function _d(i,s,l){return{value:i,source:null,stack:l??null,digest:s??null}}function xd(i,s){try{console.error(s.value)}catch(l){setTimeout(function(){throw l})}}var SS=typeof WeakMap=="function"?WeakMap:Map;function c0(i,s,l){l=Hr(-1,l),l.tag=3,l.payload={element:null};var f=s.value;return l.callback=function(){Dc||(Dc=!0,Ud=f),xd(i,s)},l}function u0(i,s,l){l=Hr(-1,l),l.tag=3;var f=i.type.getDerivedStateFromError;if(typeof f=="function"){var v=s.value;l.payload=function(){return f(v)},l.callback=function(){xd(i,s)}}var M=i.stateNode;return M!==null&&typeof M.componentDidCatch=="function"&&(l.callback=function(){xd(i,s),typeof f!="function"&&(_s===null?_s=new Set([this]):_s.add(this));var N=s.stack;this.componentDidCatch(s.value,{componentStack:N!==null?N:""})}),l}function f0(i,s,l){var f=i.pingCache;if(f===null){f=i.pingCache=new SS;var v=new Set;f.set(s,v)}else v=f.get(s),v===void 0&&(v=new Set,f.set(s,v));v.has(l)||(v.add(l),i=FS.bind(null,i,s,l),s.then(i,i))}function d0(i){do{var s;if((s=i.tag===13)&&(s=i.memoizedState,s=s!==null?s.dehydrated!==null:!0),s)return i;i=i.return}while(i!==null);return null}function h0(i,s,l,f,v){return(i.mode&1)===0?(i===s?i.flags|=65536:(i.flags|=128,l.flags|=131072,l.flags&=-52805,l.tag===1&&(l.alternate===null?l.tag=17:(s=Hr(-1,1),s.tag=2,gs(l,s,1))),l.lanes|=1),i):(i.flags|=65536,i.lanes=v,i)}var MS=w.ReactCurrentOwner,vi=!1;function ci(i,s,l,f){s.child=i===null?Ng(s,null,l,f):Na(s,i.child,l,f)}function p0(i,s,l,f,v){l=l.render;var M=s.ref;return Fa(s,v),f=ud(i,s,l,f,M,v),l=fd(),i!==null&&!vi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~v,Vr(i,s,v)):(fn&&l&&qf(s),s.flags|=1,ci(i,s,f,v),s.child)}function m0(i,s,l,f,v){if(i===null){var M=l.type;return typeof M=="function"&&!Vd(M)&&M.defaultProps===void 0&&l.compare===null&&l.defaultProps===void 0?(s.tag=15,s.type=M,g0(i,s,M,f,v)):(i=kc(l.type,null,f,s,s.mode,v),i.ref=s.ref,i.return=s,s.child=i)}if(M=i.child,(i.lanes&v)===0){var N=M.memoizedProps;if(l=l.compare,l=l!==null?l:Wo,l(N,f)&&i.ref===s.ref)return Vr(i,s,v)}return s.flags|=1,i=Ms(M,f),i.ref=s.ref,i.return=s,s.child=i}function g0(i,s,l,f,v){if(i!==null){var M=i.memoizedProps;if(Wo(M,f)&&i.ref===s.ref)if(vi=!1,s.pendingProps=f=M,(i.lanes&v)!==0)(i.flags&131072)!==0&&(vi=!0);else return s.lanes=i.lanes,Vr(i,s,v)}return yd(i,s,l,f,v)}function v0(i,s,l){var f=s.pendingProps,v=f.children,M=i!==null?i.memoizedState:null;if(f.mode==="hidden")if((s.mode&1)===0)s.memoizedState={baseLanes:0,cachePool:null,transitions:null},rn(za,Ai),Ai|=l;else{if((l&1073741824)===0)return i=M!==null?M.baseLanes|l:l,s.lanes=s.childLanes=1073741824,s.memoizedState={baseLanes:i,cachePool:null,transitions:null},s.updateQueue=null,rn(za,Ai),Ai|=i,null;s.memoizedState={baseLanes:0,cachePool:null,transitions:null},f=M!==null?M.baseLanes:l,rn(za,Ai),Ai|=f}else M!==null?(f=M.baseLanes|l,s.memoizedState=null):f=l,rn(za,Ai),Ai|=f;return ci(i,s,v,l),s.child}function _0(i,s){var l=s.ref;(i===null&&l!==null||i!==null&&i.ref!==l)&&(s.flags|=512,s.flags|=2097152)}function yd(i,s,l,f,v){var M=gi(l)?Gs:Zn.current;return M=Ra(s,M),Fa(s,v),l=ud(i,s,l,f,M,v),f=fd(),i!==null&&!vi?(s.updateQueue=i.updateQueue,s.flags&=-2053,i.lanes&=~v,Vr(i,s,v)):(fn&&f&&qf(s),s.flags|=1,ci(i,s,l,v),s.child)}function x0(i,s,l,f,v){if(gi(l)){var M=!0;cc(s)}else M=!1;if(Fa(s,v),s.stateNode===null)bc(i,s),o0(s,l,f),vd(s,l,f,v),f=!0;else if(i===null){var N=s.stateNode,W=s.memoizedProps;N.props=W;var Y=N.context,pe=l.contextType;typeof pe=="object"&&pe!==null?pe=ki(pe):(pe=gi(l)?Gs:Zn.current,pe=Ra(s,pe));var we=l.getDerivedStateFromProps,Ce=typeof we=="function"||typeof N.getSnapshotBeforeUpdate=="function";Ce||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(W!==f||Y!==pe)&&l0(s,N,f,pe),ms=!1;var Ee=s.memoizedState;N.state=Ee,_c(s,f,N,v),Y=s.memoizedState,W!==f||Ee!==Y||mi.current||ms?(typeof we=="function"&&(gd(s,l,we,f),Y=s.memoizedState),(W=ms||a0(s,l,W,f,Ee,Y,pe))?(Ce||typeof N.UNSAFE_componentWillMount!="function"&&typeof N.componentWillMount!="function"||(typeof N.componentWillMount=="function"&&N.componentWillMount(),typeof N.UNSAFE_componentWillMount=="function"&&N.UNSAFE_componentWillMount()),typeof N.componentDidMount=="function"&&(s.flags|=4194308)):(typeof N.componentDidMount=="function"&&(s.flags|=4194308),s.memoizedProps=f,s.memoizedState=Y),N.props=f,N.state=Y,N.context=pe,f=W):(typeof N.componentDidMount=="function"&&(s.flags|=4194308),f=!1)}else{N=s.stateNode,Fg(i,s),W=s.memoizedProps,pe=s.type===s.elementType?W:er(s.type,W),N.props=pe,Ce=s.pendingProps,Ee=N.context,Y=l.contextType,typeof Y=="object"&&Y!==null?Y=ki(Y):(Y=gi(l)?Gs:Zn.current,Y=Ra(s,Y));var je=l.getDerivedStateFromProps;(we=typeof je=="function"||typeof N.getSnapshotBeforeUpdate=="function")||typeof N.UNSAFE_componentWillReceiveProps!="function"&&typeof N.componentWillReceiveProps!="function"||(W!==Ce||Ee!==Y)&&l0(s,N,f,Y),ms=!1,Ee=s.memoizedState,N.state=Ee,_c(s,f,N,v);var nt=s.memoizedState;W!==Ce||Ee!==nt||mi.current||ms?(typeof je=="function"&&(gd(s,l,je,f),nt=s.memoizedState),(pe=ms||a0(s,l,pe,f,Ee,nt,Y)||!1)?(we||typeof N.UNSAFE_componentWillUpdate!="function"&&typeof N.componentWillUpdate!="function"||(typeof N.componentWillUpdate=="function"&&N.componentWillUpdate(f,nt,Y),typeof N.UNSAFE_componentWillUpdate=="function"&&N.UNSAFE_componentWillUpdate(f,nt,Y)),typeof N.componentDidUpdate=="function"&&(s.flags|=4),typeof N.getSnapshotBeforeUpdate=="function"&&(s.flags|=1024)):(typeof N.componentDidUpdate!="function"||W===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||W===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=1024),s.memoizedProps=f,s.memoizedState=nt),N.props=f,N.state=nt,N.context=Y,f=pe):(typeof N.componentDidUpdate!="function"||W===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=4),typeof N.getSnapshotBeforeUpdate!="function"||W===i.memoizedProps&&Ee===i.memoizedState||(s.flags|=1024),f=!1)}return Sd(i,s,l,f,M,v)}function Sd(i,s,l,f,v,M){_0(i,s);var N=(s.flags&128)!==0;if(!f&&!N)return v&&wg(s,l,!1),Vr(i,s,M);f=s.stateNode,MS.current=s;var W=N&&typeof l.getDerivedStateFromError!="function"?null:f.render();return s.flags|=1,i!==null&&N?(s.child=Na(s,i.child,null,M),s.child=Na(s,null,W,M)):ci(i,s,W,M),s.memoizedState=f.state,v&&wg(s,l,!0),s.child}function y0(i){var s=i.stateNode;s.pendingContext?Mg(i,s.pendingContext,s.pendingContext!==s.context):s.context&&Mg(i,s.context,!1),rd(i,s.containerInfo)}function S0(i,s,l,f,v){return Da(),Zf(v),s.flags|=256,ci(i,s,l,f),s.child}var Md={dehydrated:null,treeContext:null,retryLane:0};function Ed(i){return{baseLanes:i,cachePool:null,transitions:null}}function M0(i,s,l){var f=s.pendingProps,v=hn.current,M=!1,N=(s.flags&128)!==0,W;if((W=N)||(W=i!==null&&i.memoizedState===null?!1:(v&2)!==0),W?(M=!0,s.flags&=-129):(i===null||i.memoizedState!==null)&&(v|=1),rn(hn,v&1),i===null)return Kf(s),i=s.memoizedState,i!==null&&(i=i.dehydrated,i!==null)?((s.mode&1)===0?s.lanes=1:i.data==="$!"?s.lanes=8:s.lanes=1073741824,null):(N=f.children,i=f.fallback,M?(f=s.mode,M=s.child,N={mode:"hidden",children:N},(f&1)===0&&M!==null?(M.childLanes=0,M.pendingProps=N):M=zc(N,f,0,null),i=Qs(i,f,l,null),M.return=s,i.return=s,M.sibling=i,s.child=M,s.child.memoizedState=Ed(l),s.memoizedState=Md,i):wd(s,N));if(v=i.memoizedState,v!==null&&(W=v.dehydrated,W!==null))return ES(i,s,N,f,W,v,l);if(M){M=f.fallback,N=s.mode,v=i.child,W=v.sibling;var Y={mode:"hidden",children:f.children};return(N&1)===0&&s.child!==v?(f=s.child,f.childLanes=0,f.pendingProps=Y,s.deletions=null):(f=Ms(v,Y),f.subtreeFlags=v.subtreeFlags&14680064),W!==null?M=Ms(W,M):(M=Qs(M,N,l,null),M.flags|=2),M.return=s,f.return=s,f.sibling=M,s.child=f,f=M,M=s.child,N=i.child.memoizedState,N=N===null?Ed(l):{baseLanes:N.baseLanes|l,cachePool:null,transitions:N.transitions},M.memoizedState=N,M.childLanes=i.childLanes&~l,s.memoizedState=Md,f}return M=i.child,i=M.sibling,f=Ms(M,{mode:"visible",children:f.children}),(s.mode&1)===0&&(f.lanes=l),f.return=s,f.sibling=null,i!==null&&(l=s.deletions,l===null?(s.deletions=[i],s.flags|=16):l.push(i)),s.child=f,s.memoizedState=null,f}function wd(i,s){return s=zc({mode:"visible",children:s},i.mode,0,null),s.return=i,i.child=s}function Ac(i,s,l,f){return f!==null&&Zf(f),Na(s,i.child,null,l),i=wd(s,s.pendingProps.children),i.flags|=2,s.memoizedState=null,i}function ES(i,s,l,f,v,M,N){if(l)return s.flags&256?(s.flags&=-257,f=_d(Error(t(422))),Ac(i,s,N,f)):s.memoizedState!==null?(s.child=i.child,s.flags|=128,null):(M=f.fallback,v=s.mode,f=zc({mode:"visible",children:f.children},v,0,null),M=Qs(M,v,N,null),M.flags|=2,f.return=s,M.return=s,f.sibling=M,s.child=f,(s.mode&1)!==0&&Na(s,i.child,null,N),s.child.memoizedState=Ed(N),s.memoizedState=Md,M);if((s.mode&1)===0)return Ac(i,s,N,null);if(v.data==="$!"){if(f=v.nextSibling&&v.nextSibling.dataset,f)var W=f.dgst;return f=W,M=Error(t(419)),f=_d(M,f,void 0),Ac(i,s,N,f)}if(W=(N&i.childLanes)!==0,vi||W){if(f=zn,f!==null){switch(N&-N){case 4:v=2;break;case 16:v=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:v=32;break;case 536870912:v=268435456;break;default:v=0}v=(v&(f.suspendedLanes|N))!==0?0:v,v!==0&&v!==M.retryLane&&(M.retryLane=v,zr(i,v),ir(f,i,v,-1))}return Hd(),f=_d(Error(t(421))),Ac(i,s,N,f)}return v.data==="$?"?(s.flags|=128,s.child=i.child,s=OS.bind(null,i),v._reactRetry=s,null):(i=M.treeContext,Ti=fs(v.nextSibling),wi=s,fn=!0,Qi=null,i!==null&&(Oi[Ii++]=Ir,Oi[Ii++]=kr,Oi[Ii++]=Ws,Ir=i.id,kr=i.overflow,Ws=s),s=wd(s,f.children),s.flags|=4096,s)}function E0(i,s,l){i.lanes|=s;var f=i.alternate;f!==null&&(f.lanes|=s),td(i.return,s,l)}function Td(i,s,l,f,v){var M=i.memoizedState;M===null?i.memoizedState={isBackwards:s,rendering:null,renderingStartTime:0,last:f,tail:l,tailMode:v}:(M.isBackwards=s,M.rendering=null,M.renderingStartTime=0,M.last=f,M.tail=l,M.tailMode=v)}function w0(i,s,l){var f=s.pendingProps,v=f.revealOrder,M=f.tail;if(ci(i,s,f.children,l),f=hn.current,(f&2)!==0)f=f&1|2,s.flags|=128;else{if(i!==null&&(i.flags&128)!==0)e:for(i=s.child;i!==null;){if(i.tag===13)i.memoizedState!==null&&E0(i,l,s);else if(i.tag===19)E0(i,l,s);else if(i.child!==null){i.child.return=i,i=i.child;continue}if(i===s)break e;for(;i.sibling===null;){if(i.return===null||i.return===s)break e;i=i.return}i.sibling.return=i.return,i=i.sibling}f&=1}if(rn(hn,f),(s.mode&1)===0)s.memoizedState=null;else switch(v){case"forwards":for(l=s.child,v=null;l!==null;)i=l.alternate,i!==null&&xc(i)===null&&(v=l),l=l.sibling;l=v,l===null?(v=s.child,s.child=null):(v=l.sibling,l.sibling=null),Td(s,!1,v,l,M);break;case"backwards":for(l=null,v=s.child,s.child=null;v!==null;){if(i=v.alternate,i!==null&&xc(i)===null){s.child=v;break}i=v.sibling,v.sibling=l,l=v,v=i}Td(s,!0,l,null,M);break;case"together":Td(s,!1,null,null,void 0);break;default:s.memoizedState=null}return s.child}function bc(i,s){(s.mode&1)===0&&i!==null&&(i.alternate=null,s.alternate=null,s.flags|=2)}function Vr(i,s,l){if(i!==null&&(s.dependencies=i.dependencies),js|=s.lanes,(l&s.childLanes)===0)return null;if(i!==null&&s.child!==i.child)throw Error(t(153));if(s.child!==null){for(i=s.child,l=Ms(i,i.pendingProps),s.child=l,l.return=s;i.sibling!==null;)i=i.sibling,l=l.sibling=Ms(i,i.pendingProps),l.return=s;l.sibling=null}return s.child}function wS(i,s,l){switch(s.tag){case 3:y0(s),Da();break;case 5:kg(s);break;case 1:gi(s.type)&&cc(s);break;case 4:rd(s,s.stateNode.containerInfo);break;case 10:var f=s.type._context,v=s.memoizedProps.value;rn(mc,f._currentValue),f._currentValue=v;break;case 13:if(f=s.memoizedState,f!==null)return f.dehydrated!==null?(rn(hn,hn.current&1),s.flags|=128,null):(l&s.child.childLanes)!==0?M0(i,s,l):(rn(hn,hn.current&1),i=Vr(i,s,l),i!==null?i.sibling:null);rn(hn,hn.current&1);break;case 19:if(f=(l&s.childLanes)!==0,(i.flags&128)!==0){if(f)return w0(i,s,l);s.flags|=128}if(v=s.memoizedState,v!==null&&(v.rendering=null,v.tail=null,v.lastEffect=null),rn(hn,hn.current),f)break;return null;case 22:case 23:return s.lanes=0,v0(i,s,l)}return Vr(i,s,l)}var T0,Ad,A0,b0;T0=function(i,s){for(var l=s.child;l!==null;){if(l.tag===5||l.tag===6)i.appendChild(l.stateNode);else if(l.tag!==4&&l.child!==null){l.child.return=l,l=l.child;continue}if(l===s)break;for(;l.sibling===null;){if(l.return===null||l.return===s)return;l=l.return}l.sibling.return=l.return,l=l.sibling}},Ad=function(){},A0=function(i,s,l,f){var v=i.memoizedProps;if(v!==f){i=s.stateNode,qs(gr.current);var M=null;switch(l){case"input":v=mt(i,v),f=mt(i,f),M=[];break;case"select":v=ne({},v,{value:void 0}),f=ne({},f,{value:void 0}),M=[];break;case"textarea":v=en(i,v),f=en(i,f),M=[];break;default:typeof v.onClick!="function"&&typeof f.onClick=="function"&&(i.onclick=ac)}et(l,f);var N;l=null;for(pe in v)if(!f.hasOwnProperty(pe)&&v.hasOwnProperty(pe)&&v[pe]!=null)if(pe==="style"){var W=v[pe];for(N in W)W.hasOwnProperty(N)&&(l||(l={}),l[N]="")}else pe!=="dangerouslySetInnerHTML"&&pe!=="children"&&pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&pe!=="autoFocus"&&(a.hasOwnProperty(pe)?M||(M=[]):(M=M||[]).push(pe,null));for(pe in f){var Y=f[pe];if(W=v!=null?v[pe]:void 0,f.hasOwnProperty(pe)&&Y!==W&&(Y!=null||W!=null))if(pe==="style")if(W){for(N in W)!W.hasOwnProperty(N)||Y&&Y.hasOwnProperty(N)||(l||(l={}),l[N]="");for(N in Y)Y.hasOwnProperty(N)&&W[N]!==Y[N]&&(l||(l={}),l[N]=Y[N])}else l||(M||(M=[]),M.push(pe,l)),l=Y;else pe==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,W=W?W.__html:void 0,Y!=null&&W!==Y&&(M=M||[]).push(pe,Y)):pe==="children"?typeof Y!="string"&&typeof Y!="number"||(M=M||[]).push(pe,""+Y):pe!=="suppressContentEditableWarning"&&pe!=="suppressHydrationWarning"&&(a.hasOwnProperty(pe)?(Y!=null&&pe==="onScroll"&&on("scroll",i),M||W===Y||(M=[])):(M=M||[]).push(pe,Y))}l&&(M=M||[]).push("style",l);var pe=M;(s.updateQueue=pe)&&(s.flags|=4)}},b0=function(i,s,l,f){l!==f&&(s.flags|=4)};function sl(i,s){if(!fn)switch(i.tailMode){case"hidden":s=i.tail;for(var l=null;s!==null;)s.alternate!==null&&(l=s),s=s.sibling;l===null?i.tail=null:l.sibling=null;break;case"collapsed":l=i.tail;for(var f=null;l!==null;)l.alternate!==null&&(f=l),l=l.sibling;f===null?s||i.tail===null?i.tail=null:i.tail.sibling=null:f.sibling=null}}function Qn(i){var s=i.alternate!==null&&i.alternate.child===i.child,l=0,f=0;if(s)for(var v=i.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags&14680064,f|=v.flags&14680064,v.return=i,v=v.sibling;else for(v=i.child;v!==null;)l|=v.lanes|v.childLanes,f|=v.subtreeFlags,f|=v.flags,v.return=i,v=v.sibling;return i.subtreeFlags|=f,i.childLanes=l,s}function TS(i,s,l){var f=s.pendingProps;switch(Yf(s),s.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Qn(s),null;case 1:return gi(s.type)&&lc(),Qn(s),null;case 3:return f=s.stateNode,Oa(),ln(mi),ln(Zn),od(),f.pendingContext&&(f.context=f.pendingContext,f.pendingContext=null),(i===null||i.child===null)&&(hc(s)?s.flags|=4:i===null||i.memoizedState.isDehydrated&&(s.flags&256)===0||(s.flags|=1024,Qi!==null&&(Id(Qi),Qi=null))),Ad(i,s),Qn(s),null;case 5:sd(s);var v=qs(el.current);if(l=s.type,i!==null&&s.stateNode!=null)A0(i,s,l,f,v),i.ref!==s.ref&&(s.flags|=512,s.flags|=2097152);else{if(!f){if(s.stateNode===null)throw Error(t(166));return Qn(s),null}if(i=qs(gr.current),hc(s)){f=s.stateNode,l=s.type;var M=s.memoizedProps;switch(f[mr]=s,f[jo]=M,i=(s.mode&1)!==0,l){case"dialog":on("cancel",f),on("close",f);break;case"iframe":case"object":case"embed":on("load",f);break;case"video":case"audio":for(v=0;v<$o.length;v++)on($o[v],f);break;case"source":on("error",f);break;case"img":case"image":case"link":on("error",f),on("load",f);break;case"details":on("toggle",f);break;case"input":Nt(f,M),on("invalid",f);break;case"select":f._wrapperState={wasMultiple:!!M.multiple},on("invalid",f);break;case"textarea":$(f,M),on("invalid",f)}et(l,M),v=null;for(var N in M)if(M.hasOwnProperty(N)){var W=M[N];N==="children"?typeof W=="string"?f.textContent!==W&&(M.suppressHydrationWarning!==!0&&sc(f.textContent,W,i),v=["children",W]):typeof W=="number"&&f.textContent!==""+W&&(M.suppressHydrationWarning!==!0&&sc(f.textContent,W,i),v=["children",""+W]):a.hasOwnProperty(N)&&W!=null&&N==="onScroll"&&on("scroll",f)}switch(l){case"input":Ge(f),Yt(f,M,!0);break;case"textarea":Ge(f),lt(f);break;case"select":case"option":break;default:typeof M.onClick=="function"&&(f.onclick=ac)}f=v,s.updateQueue=f,f!==null&&(s.flags|=4)}else{N=v.nodeType===9?v:v.ownerDocument,i==="http://www.w3.org/1999/xhtml"&&(i=z(l)),i==="http://www.w3.org/1999/xhtml"?l==="script"?(i=N.createElement("div"),i.innerHTML="<script><\/script>",i=i.removeChild(i.firstChild)):typeof f.is=="string"?i=N.createElement(l,{is:f.is}):(i=N.createElement(l),l==="select"&&(N=i,f.multiple?N.multiple=!0:f.size&&(N.size=f.size))):i=N.createElementNS(i,l),i[mr]=s,i[jo]=f,T0(i,s,!1,!1),s.stateNode=i;e:{switch(N=Ue(l,f),l){case"dialog":on("cancel",i),on("close",i),v=f;break;case"iframe":case"object":case"embed":on("load",i),v=f;break;case"video":case"audio":for(v=0;v<$o.length;v++)on($o[v],i);v=f;break;case"source":on("error",i),v=f;break;case"img":case"image":case"link":on("error",i),on("load",i),v=f;break;case"details":on("toggle",i),v=f;break;case"input":Nt(i,f),v=mt(i,f),on("invalid",i);break;case"option":v=f;break;case"select":i._wrapperState={wasMultiple:!!f.multiple},v=ne({},f,{value:void 0}),on("invalid",i);break;case"textarea":$(i,f),v=en(i,f),on("invalid",i);break;default:v=f}et(l,v),W=v;for(M in W)if(W.hasOwnProperty(M)){var Y=W[M];M==="style"?_e(i,Y):M==="dangerouslySetInnerHTML"?(Y=Y?Y.__html:void 0,Y!=null&&ce(i,Y)):M==="children"?typeof Y=="string"?(l!=="textarea"||Y!=="")&&me(i,Y):typeof Y=="number"&&me(i,""+Y):M!=="suppressContentEditableWarning"&&M!=="suppressHydrationWarning"&&M!=="autoFocus"&&(a.hasOwnProperty(M)?Y!=null&&M==="onScroll"&&on("scroll",i):Y!=null&&D(i,M,Y,N))}switch(l){case"input":Ge(i),Yt(i,f,!1);break;case"textarea":Ge(i),lt(i);break;case"option":f.value!=null&&i.setAttribute("value",""+he(f.value));break;case"select":i.multiple=!!f.multiple,M=f.value,M!=null?Bt(i,!!f.multiple,M,!1):f.defaultValue!=null&&Bt(i,!!f.multiple,f.defaultValue,!0);break;default:typeof v.onClick=="function"&&(i.onclick=ac)}switch(l){case"button":case"input":case"select":case"textarea":f=!!f.autoFocus;break e;case"img":f=!0;break e;default:f=!1}}f&&(s.flags|=4)}s.ref!==null&&(s.flags|=512,s.flags|=2097152)}return Qn(s),null;case 6:if(i&&s.stateNode!=null)b0(i,s,i.memoizedProps,f);else{if(typeof f!="string"&&s.stateNode===null)throw Error(t(166));if(l=qs(el.current),qs(gr.current),hc(s)){if(f=s.stateNode,l=s.memoizedProps,f[mr]=s,(M=f.nodeValue!==l)&&(i=wi,i!==null))switch(i.tag){case 3:sc(f.nodeValue,l,(i.mode&1)!==0);break;case 5:i.memoizedProps.suppressHydrationWarning!==!0&&sc(f.nodeValue,l,(i.mode&1)!==0)}M&&(s.flags|=4)}else f=(l.nodeType===9?l:l.ownerDocument).createTextNode(f),f[mr]=s,s.stateNode=f}return Qn(s),null;case 13:if(ln(hn),f=s.memoizedState,i===null||i.memoizedState!==null&&i.memoizedState.dehydrated!==null){if(fn&&Ti!==null&&(s.mode&1)!==0&&(s.flags&128)===0)Pg(),Da(),s.flags|=98560,M=!1;else if(M=hc(s),f!==null&&f.dehydrated!==null){if(i===null){if(!M)throw Error(t(318));if(M=s.memoizedState,M=M!==null?M.dehydrated:null,!M)throw Error(t(317));M[mr]=s}else Da(),(s.flags&128)===0&&(s.memoizedState=null),s.flags|=4;Qn(s),M=!1}else Qi!==null&&(Id(Qi),Qi=null),M=!0;if(!M)return s.flags&65536?s:null}return(s.flags&128)!==0?(s.lanes=l,s):(f=f!==null,f!==(i!==null&&i.memoizedState!==null)&&f&&(s.child.flags|=8192,(s.mode&1)!==0&&(i===null||(hn.current&1)!==0?Pn===0&&(Pn=3):Hd())),s.updateQueue!==null&&(s.flags|=4),Qn(s),null);case 4:return Oa(),Ad(i,s),i===null&&qo(s.stateNode.containerInfo),Qn(s),null;case 10:return ed(s.type._context),Qn(s),null;case 17:return gi(s.type)&&lc(),Qn(s),null;case 19:if(ln(hn),M=s.memoizedState,M===null)return Qn(s),null;if(f=(s.flags&128)!==0,N=M.rendering,N===null)if(f)sl(M,!1);else{if(Pn!==0||i!==null&&(i.flags&128)!==0)for(i=s.child;i!==null;){if(N=xc(i),N!==null){for(s.flags|=128,sl(M,!1),f=N.updateQueue,f!==null&&(s.updateQueue=f,s.flags|=4),s.subtreeFlags=0,f=l,l=s.child;l!==null;)M=l,i=f,M.flags&=14680066,N=M.alternate,N===null?(M.childLanes=0,M.lanes=i,M.child=null,M.subtreeFlags=0,M.memoizedProps=null,M.memoizedState=null,M.updateQueue=null,M.dependencies=null,M.stateNode=null):(M.childLanes=N.childLanes,M.lanes=N.lanes,M.child=N.child,M.subtreeFlags=0,M.deletions=null,M.memoizedProps=N.memoizedProps,M.memoizedState=N.memoizedState,M.updateQueue=N.updateQueue,M.type=N.type,i=N.dependencies,M.dependencies=i===null?null:{lanes:i.lanes,firstContext:i.firstContext}),l=l.sibling;return rn(hn,hn.current&1|2),s.child}i=i.sibling}M.tail!==null&&ht()>Ha&&(s.flags|=128,f=!0,sl(M,!1),s.lanes=4194304)}else{if(!f)if(i=xc(N),i!==null){if(s.flags|=128,f=!0,l=i.updateQueue,l!==null&&(s.updateQueue=l,s.flags|=4),sl(M,!0),M.tail===null&&M.tailMode==="hidden"&&!N.alternate&&!fn)return Qn(s),null}else 2*ht()-M.renderingStartTime>Ha&&l!==1073741824&&(s.flags|=128,f=!0,sl(M,!1),s.lanes=4194304);M.isBackwards?(N.sibling=s.child,s.child=N):(l=M.last,l!==null?l.sibling=N:s.child=N,M.last=N)}return M.tail!==null?(s=M.tail,M.rendering=s,M.tail=s.sibling,M.renderingStartTime=ht(),s.sibling=null,l=hn.current,rn(hn,f?l&1|2:l&1),s):(Qn(s),null);case 22:case 23:return zd(),f=s.memoizedState!==null,i!==null&&i.memoizedState!==null!==f&&(s.flags|=8192),f&&(s.mode&1)!==0?(Ai&1073741824)!==0&&(Qn(s),s.subtreeFlags&6&&(s.flags|=8192)):Qn(s),null;case 24:return null;case 25:return null}throw Error(t(156,s.tag))}function AS(i,s){switch(Yf(s),s.tag){case 1:return gi(s.type)&&lc(),i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 3:return Oa(),ln(mi),ln(Zn),od(),i=s.flags,(i&65536)!==0&&(i&128)===0?(s.flags=i&-65537|128,s):null;case 5:return sd(s),null;case 13:if(ln(hn),i=s.memoizedState,i!==null&&i.dehydrated!==null){if(s.alternate===null)throw Error(t(340));Da()}return i=s.flags,i&65536?(s.flags=i&-65537|128,s):null;case 19:return ln(hn),null;case 4:return Oa(),null;case 10:return ed(s.type._context),null;case 22:case 23:return zd(),null;case 24:return null;default:return null}}var Cc=!1,ei=!1,bS=typeof WeakSet=="function"?WeakSet:Set,Qe=null;function ka(i,s){var l=i.ref;if(l!==null)if(typeof l=="function")try{l(null)}catch(f){_n(i,s,f)}else l.current=null}function bd(i,s,l){try{l()}catch(f){_n(i,s,f)}}var C0=!1;function CS(i,s){if(zf=Yl,i=ag(),Lf(i)){if("selectionStart"in i)var l={start:i.selectionStart,end:i.selectionEnd};else e:{l=(l=i.ownerDocument)&&l.defaultView||window;var f=l.getSelection&&l.getSelection();if(f&&f.rangeCount!==0){l=f.anchorNode;var v=f.anchorOffset,M=f.focusNode;f=f.focusOffset;try{l.nodeType,M.nodeType}catch{l=null;break e}var N=0,W=-1,Y=-1,pe=0,we=0,Ce=i,Ee=null;t:for(;;){for(var je;Ce!==l||v!==0&&Ce.nodeType!==3||(W=N+v),Ce!==M||f!==0&&Ce.nodeType!==3||(Y=N+f),Ce.nodeType===3&&(N+=Ce.nodeValue.length),(je=Ce.firstChild)!==null;)Ee=Ce,Ce=je;for(;;){if(Ce===i)break t;if(Ee===l&&++pe===v&&(W=N),Ee===M&&++we===f&&(Y=N),(je=Ce.nextSibling)!==null)break;Ce=Ee,Ee=Ce.parentNode}Ce=je}l=W===-1||Y===-1?null:{start:W,end:Y}}else l=null}l=l||{start:0,end:0}}else l=null;for(Hf={focusedElem:i,selectionRange:l},Yl=!1,Qe=s;Qe!==null;)if(s=Qe,i=s.child,(s.subtreeFlags&1028)!==0&&i!==null)i.return=s,Qe=i;else for(;Qe!==null;){s=Qe;try{var nt=s.alternate;if((s.flags&1024)!==0)switch(s.tag){case 0:case 11:case 15:break;case 1:if(nt!==null){var rt=nt.memoizedProps,Mn=nt.memoizedState,le=s.stateNode,Q=le.getSnapshotBeforeUpdate(s.elementType===s.type?rt:er(s.type,rt),Mn);le.__reactInternalSnapshotBeforeUpdate=Q}break;case 3:var de=s.stateNode.containerInfo;de.nodeType===1?de.textContent="":de.nodeType===9&&de.documentElement&&de.removeChild(de.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(t(163))}}catch(Ne){_n(s,s.return,Ne)}if(i=s.sibling,i!==null){i.return=s.return,Qe=i;break}Qe=s.return}return nt=C0,C0=!1,nt}function al(i,s,l){var f=s.updateQueue;if(f=f!==null?f.lastEffect:null,f!==null){var v=f=f.next;do{if((v.tag&i)===i){var M=v.destroy;v.destroy=void 0,M!==void 0&&bd(s,l,M)}v=v.next}while(v!==f)}}function Rc(i,s){if(s=s.updateQueue,s=s!==null?s.lastEffect:null,s!==null){var l=s=s.next;do{if((l.tag&i)===i){var f=l.create;l.destroy=f()}l=l.next}while(l!==s)}}function Cd(i){var s=i.ref;if(s!==null){var l=i.stateNode;switch(i.tag){case 5:i=l;break;default:i=l}typeof s=="function"?s(i):s.current=i}}function R0(i){var s=i.alternate;s!==null&&(i.alternate=null,R0(s)),i.child=null,i.deletions=null,i.sibling=null,i.tag===5&&(s=i.stateNode,s!==null&&(delete s[mr],delete s[jo],delete s[Wf],delete s[uS],delete s[fS])),i.stateNode=null,i.return=null,i.dependencies=null,i.memoizedProps=null,i.memoizedState=null,i.pendingProps=null,i.stateNode=null,i.updateQueue=null}function P0(i){return i.tag===5||i.tag===3||i.tag===4}function L0(i){e:for(;;){for(;i.sibling===null;){if(i.return===null||P0(i.return))return null;i=i.return}for(i.sibling.return=i.return,i=i.sibling;i.tag!==5&&i.tag!==6&&i.tag!==18;){if(i.flags&2||i.child===null||i.tag===4)continue e;i.child.return=i,i=i.child}if(!(i.flags&2))return i.stateNode}}function Rd(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.nodeType===8?l.parentNode.insertBefore(i,s):l.insertBefore(i,s):(l.nodeType===8?(s=l.parentNode,s.insertBefore(i,l)):(s=l,s.appendChild(i)),l=l._reactRootContainer,l!=null||s.onclick!==null||(s.onclick=ac));else if(f!==4&&(i=i.child,i!==null))for(Rd(i,s,l),i=i.sibling;i!==null;)Rd(i,s,l),i=i.sibling}function Pd(i,s,l){var f=i.tag;if(f===5||f===6)i=i.stateNode,s?l.insertBefore(i,s):l.appendChild(i);else if(f!==4&&(i=i.child,i!==null))for(Pd(i,s,l),i=i.sibling;i!==null;)Pd(i,s,l),i=i.sibling}var $n=null,tr=!1;function vs(i,s,l){for(l=l.child;l!==null;)D0(i,s,l),l=l.sibling}function D0(i,s,l){if(ie&&typeof ie.onCommitFiberUnmount=="function")try{ie.onCommitFiberUnmount(re,l)}catch{}switch(l.tag){case 5:ei||ka(l,s);case 6:var f=$n,v=tr;$n=null,vs(i,s,l),$n=f,tr=v,$n!==null&&(tr?(i=$n,l=l.stateNode,i.nodeType===8?i.parentNode.removeChild(l):i.removeChild(l)):$n.removeChild(l.stateNode));break;case 18:$n!==null&&(tr?(i=$n,l=l.stateNode,i.nodeType===8?Gf(i.parentNode,l):i.nodeType===1&&Gf(i,l),ko(i)):Gf($n,l.stateNode));break;case 4:f=$n,v=tr,$n=l.stateNode.containerInfo,tr=!0,vs(i,s,l),$n=f,tr=v;break;case 0:case 11:case 14:case 15:if(!ei&&(f=l.updateQueue,f!==null&&(f=f.lastEffect,f!==null))){v=f=f.next;do{var M=v,N=M.destroy;M=M.tag,N!==void 0&&((M&2)!==0||(M&4)!==0)&&bd(l,s,N),v=v.next}while(v!==f)}vs(i,s,l);break;case 1:if(!ei&&(ka(l,s),f=l.stateNode,typeof f.componentWillUnmount=="function"))try{f.props=l.memoizedProps,f.state=l.memoizedState,f.componentWillUnmount()}catch(W){_n(l,s,W)}vs(i,s,l);break;case 21:vs(i,s,l);break;case 22:l.mode&1?(ei=(f=ei)||l.memoizedState!==null,vs(i,s,l),ei=f):vs(i,s,l);break;default:vs(i,s,l)}}function N0(i){var s=i.updateQueue;if(s!==null){i.updateQueue=null;var l=i.stateNode;l===null&&(l=i.stateNode=new bS),s.forEach(function(f){var v=IS.bind(null,i,f);l.has(f)||(l.add(f),f.then(v,v))})}}function nr(i,s){var l=s.deletions;if(l!==null)for(var f=0;f<l.length;f++){var v=l[f];try{var M=i,N=s,W=N;e:for(;W!==null;){switch(W.tag){case 5:$n=W.stateNode,tr=!1;break e;case 3:$n=W.stateNode.containerInfo,tr=!0;break e;case 4:$n=W.stateNode.containerInfo,tr=!0;break e}W=W.return}if($n===null)throw Error(t(160));D0(M,N,v),$n=null,tr=!1;var Y=v.alternate;Y!==null&&(Y.return=null),v.return=null}catch(pe){_n(v,s,pe)}}if(s.subtreeFlags&12854)for(s=s.child;s!==null;)U0(s,i),s=s.sibling}function U0(i,s){var l=i.alternate,f=i.flags;switch(i.tag){case 0:case 11:case 14:case 15:if(nr(s,i),_r(i),f&4){try{al(3,i,i.return),Rc(3,i)}catch(rt){_n(i,i.return,rt)}try{al(5,i,i.return)}catch(rt){_n(i,i.return,rt)}}break;case 1:nr(s,i),_r(i),f&512&&l!==null&&ka(l,l.return);break;case 5:if(nr(s,i),_r(i),f&512&&l!==null&&ka(l,l.return),i.flags&32){var v=i.stateNode;try{me(v,"")}catch(rt){_n(i,i.return,rt)}}if(f&4&&(v=i.stateNode,v!=null)){var M=i.memoizedProps,N=l!==null?l.memoizedProps:M,W=i.type,Y=i.updateQueue;if(i.updateQueue=null,Y!==null)try{W==="input"&&M.type==="radio"&&M.name!=null&&qt(v,M),Ue(W,N);var pe=Ue(W,M);for(N=0;N<Y.length;N+=2){var we=Y[N],Ce=Y[N+1];we==="style"?_e(v,Ce):we==="dangerouslySetInnerHTML"?ce(v,Ce):we==="children"?me(v,Ce):D(v,we,Ce,pe)}switch(W){case"input":bt(v,M);break;case"textarea":sn(v,M);break;case"select":var Ee=v._wrapperState.wasMultiple;v._wrapperState.wasMultiple=!!M.multiple;var je=M.value;je!=null?Bt(v,!!M.multiple,je,!1):Ee!==!!M.multiple&&(M.defaultValue!=null?Bt(v,!!M.multiple,M.defaultValue,!0):Bt(v,!!M.multiple,M.multiple?[]:"",!1))}v[jo]=M}catch(rt){_n(i,i.return,rt)}}break;case 6:if(nr(s,i),_r(i),f&4){if(i.stateNode===null)throw Error(t(162));v=i.stateNode,M=i.memoizedProps;try{v.nodeValue=M}catch(rt){_n(i,i.return,rt)}}break;case 3:if(nr(s,i),_r(i),f&4&&l!==null&&l.memoizedState.isDehydrated)try{ko(s.containerInfo)}catch(rt){_n(i,i.return,rt)}break;case 4:nr(s,i),_r(i);break;case 13:nr(s,i),_r(i),v=i.child,v.flags&8192&&(M=v.memoizedState!==null,v.stateNode.isHidden=M,!M||v.alternate!==null&&v.alternate.memoizedState!==null||(Nd=ht())),f&4&&N0(i);break;case 22:if(we=l!==null&&l.memoizedState!==null,i.mode&1?(ei=(pe=ei)||we,nr(s,i),ei=pe):nr(s,i),_r(i),f&8192){if(pe=i.memoizedState!==null,(i.stateNode.isHidden=pe)&&!we&&(i.mode&1)!==0)for(Qe=i,we=i.child;we!==null;){for(Ce=Qe=we;Qe!==null;){switch(Ee=Qe,je=Ee.child,Ee.tag){case 0:case 11:case 14:case 15:al(4,Ee,Ee.return);break;case 1:ka(Ee,Ee.return);var nt=Ee.stateNode;if(typeof nt.componentWillUnmount=="function"){f=Ee,l=Ee.return;try{s=f,nt.props=s.memoizedProps,nt.state=s.memoizedState,nt.componentWillUnmount()}catch(rt){_n(f,l,rt)}}break;case 5:ka(Ee,Ee.return);break;case 22:if(Ee.memoizedState!==null){I0(Ce);continue}}je!==null?(je.return=Ee,Qe=je):I0(Ce)}we=we.sibling}e:for(we=null,Ce=i;;){if(Ce.tag===5){if(we===null){we=Ce;try{v=Ce.stateNode,pe?(M=v.style,typeof M.setProperty=="function"?M.setProperty("display","none","important"):M.display="none"):(W=Ce.stateNode,Y=Ce.memoizedProps.style,N=Y!=null&&Y.hasOwnProperty("display")?Y.display:null,W.style.display=ge("display",N))}catch(rt){_n(i,i.return,rt)}}}else if(Ce.tag===6){if(we===null)try{Ce.stateNode.nodeValue=pe?"":Ce.memoizedProps}catch(rt){_n(i,i.return,rt)}}else if((Ce.tag!==22&&Ce.tag!==23||Ce.memoizedState===null||Ce===i)&&Ce.child!==null){Ce.child.return=Ce,Ce=Ce.child;continue}if(Ce===i)break e;for(;Ce.sibling===null;){if(Ce.return===null||Ce.return===i)break e;we===Ce&&(we=null),Ce=Ce.return}we===Ce&&(we=null),Ce.sibling.return=Ce.return,Ce=Ce.sibling}}break;case 19:nr(s,i),_r(i),f&4&&N0(i);break;case 21:break;default:nr(s,i),_r(i)}}function _r(i){var s=i.flags;if(s&2){try{e:{for(var l=i.return;l!==null;){if(P0(l)){var f=l;break e}l=l.return}throw Error(t(160))}switch(f.tag){case 5:var v=f.stateNode;f.flags&32&&(me(v,""),f.flags&=-33);var M=L0(i);Pd(i,M,v);break;case 3:case 4:var N=f.stateNode.containerInfo,W=L0(i);Rd(i,W,N);break;default:throw Error(t(161))}}catch(Y){_n(i,i.return,Y)}i.flags&=-3}s&4096&&(i.flags&=-4097)}function RS(i,s,l){Qe=i,F0(i)}function F0(i,s,l){for(var f=(i.mode&1)!==0;Qe!==null;){var v=Qe,M=v.child;if(v.tag===22&&f){var N=v.memoizedState!==null||Cc;if(!N){var W=v.alternate,Y=W!==null&&W.memoizedState!==null||ei;W=Cc;var pe=ei;if(Cc=N,(ei=Y)&&!pe)for(Qe=v;Qe!==null;)N=Qe,Y=N.child,N.tag===22&&N.memoizedState!==null?k0(v):Y!==null?(Y.return=N,Qe=Y):k0(v);for(;M!==null;)Qe=M,F0(M),M=M.sibling;Qe=v,Cc=W,ei=pe}O0(i)}else(v.subtreeFlags&8772)!==0&&M!==null?(M.return=v,Qe=M):O0(i)}}function O0(i){for(;Qe!==null;){var s=Qe;if((s.flags&8772)!==0){var l=s.alternate;try{if((s.flags&8772)!==0)switch(s.tag){case 0:case 11:case 15:ei||Rc(5,s);break;case 1:var f=s.stateNode;if(s.flags&4&&!ei)if(l===null)f.componentDidMount();else{var v=s.elementType===s.type?l.memoizedProps:er(s.type,l.memoizedProps);f.componentDidUpdate(v,l.memoizedState,f.__reactInternalSnapshotBeforeUpdate)}var M=s.updateQueue;M!==null&&Ig(s,M,f);break;case 3:var N=s.updateQueue;if(N!==null){if(l=null,s.child!==null)switch(s.child.tag){case 5:l=s.child.stateNode;break;case 1:l=s.child.stateNode}Ig(s,N,l)}break;case 5:var W=s.stateNode;if(l===null&&s.flags&4){l=W;var Y=s.memoizedProps;switch(s.type){case"button":case"input":case"select":case"textarea":Y.autoFocus&&l.focus();break;case"img":Y.src&&(l.src=Y.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(s.memoizedState===null){var pe=s.alternate;if(pe!==null){var we=pe.memoizedState;if(we!==null){var Ce=we.dehydrated;Ce!==null&&ko(Ce)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(t(163))}ei||s.flags&512&&Cd(s)}catch(Ee){_n(s,s.return,Ee)}}if(s===i){Qe=null;break}if(l=s.sibling,l!==null){l.return=s.return,Qe=l;break}Qe=s.return}}function I0(i){for(;Qe!==null;){var s=Qe;if(s===i){Qe=null;break}var l=s.sibling;if(l!==null){l.return=s.return,Qe=l;break}Qe=s.return}}function k0(i){for(;Qe!==null;){var s=Qe;try{switch(s.tag){case 0:case 11:case 15:var l=s.return;try{Rc(4,s)}catch(Y){_n(s,l,Y)}break;case 1:var f=s.stateNode;if(typeof f.componentDidMount=="function"){var v=s.return;try{f.componentDidMount()}catch(Y){_n(s,v,Y)}}var M=s.return;try{Cd(s)}catch(Y){_n(s,M,Y)}break;case 5:var N=s.return;try{Cd(s)}catch(Y){_n(s,N,Y)}}}catch(Y){_n(s,s.return,Y)}if(s===i){Qe=null;break}var W=s.sibling;if(W!==null){W.return=s.return,Qe=W;break}Qe=s.return}}var PS=Math.ceil,Pc=w.ReactCurrentDispatcher,Ld=w.ReactCurrentOwner,Hi=w.ReactCurrentBatchConfig,Vt=0,zn=null,wn=null,qn=0,Ai=0,za=ds(0),Pn=0,ol=null,js=0,Lc=0,Dd=0,ll=null,_i=null,Nd=0,Ha=1/0,Br=null,Dc=!1,Ud=null,_s=null,Nc=!1,xs=null,Uc=0,cl=0,Fd=null,Fc=-1,Oc=0;function ui(){return(Vt&6)!==0?ht():Fc!==-1?Fc:Fc=ht()}function ys(i){return(i.mode&1)===0?1:(Vt&2)!==0&&qn!==0?qn&-qn:hS.transition!==null?(Oc===0&&(Oc=tn()),Oc):(i=Pt,i!==0||(i=window.event,i=i===void 0?16:Hm(i.type)),i)}function ir(i,s,l,f){if(50<cl)throw cl=0,Fd=null,Error(t(185));Sn(i,l,f),((Vt&2)===0||i!==zn)&&(i===zn&&((Vt&2)===0&&(Lc|=l),Pn===4&&Ss(i,qn)),xi(i,f),l===1&&Vt===0&&(s.mode&1)===0&&(Ha=ht()+500,uc&&ps()))}function xi(i,s){var l=i.callbackNode;Gt(i,s);var f=Ct(i,i===zn?qn:0);if(f===0)l!==null&&it(l),i.callbackNode=null,i.callbackPriority=0;else if(s=f&-f,i.callbackPriority!==s){if(l!=null&&it(l),s===1)i.tag===0?dS(H0.bind(null,i)):Tg(H0.bind(null,i)),lS(function(){(Vt&6)===0&&ps()}),l=null;else{switch(Yi(f)){case 1:l=ft;break;case 4:l=Ot;break;case 16:l=L;break;case 536870912:l=se;break;default:l=L}l=Y0(l,z0.bind(null,i))}i.callbackPriority=s,i.callbackNode=l}}function z0(i,s){if(Fc=-1,Oc=0,(Vt&6)!==0)throw Error(t(327));var l=i.callbackNode;if(Va()&&i.callbackNode!==l)return null;var f=Ct(i,i===zn?qn:0);if(f===0)return null;if((f&30)!==0||(f&i.expiredLanes)!==0||s)s=Ic(i,f);else{s=f;var v=Vt;Vt|=2;var M=B0();(zn!==i||qn!==s)&&(Br=null,Ha=ht()+500,Zs(i,s));do try{NS();break}catch(W){V0(i,W)}while(!0);Qf(),Pc.current=M,Vt=v,wn!==null?s=0:(zn=null,qn=0,s=Pn)}if(s!==0){if(s===2&&(v=Rt(i),v!==0&&(f=v,s=Od(i,v))),s===1)throw l=ol,Zs(i,0),Ss(i,f),xi(i,ht()),l;if(s===6)Ss(i,f);else{if(v=i.current.alternate,(f&30)===0&&!LS(v)&&(s=Ic(i,f),s===2&&(M=Rt(i),M!==0&&(f=M,s=Od(i,M))),s===1))throw l=ol,Zs(i,0),Ss(i,f),xi(i,ht()),l;switch(i.finishedWork=v,i.finishedLanes=f,s){case 0:case 1:throw Error(t(345));case 2:Js(i,_i,Br);break;case 3:if(Ss(i,f),(f&130023424)===f&&(s=Nd+500-ht(),10<s)){if(Ct(i,0)!==0)break;if(v=i.suspendedLanes,(v&f)!==f){ui(),i.pingedLanes|=i.suspendedLanes&v;break}i.timeoutHandle=Bf(Js.bind(null,i,_i,Br),s);break}Js(i,_i,Br);break;case 4:if(Ss(i,f),(f&4194240)===f)break;for(s=i.eventTimes,v=-1;0<f;){var N=31-be(f);M=1<<N,N=s[N],N>v&&(v=N),f&=~M}if(f=v,f=ht()-f,f=(120>f?120:480>f?480:1080>f?1080:1920>f?1920:3e3>f?3e3:4320>f?4320:1960*PS(f/1960))-f,10<f){i.timeoutHandle=Bf(Js.bind(null,i,_i,Br),f);break}Js(i,_i,Br);break;case 5:Js(i,_i,Br);break;default:throw Error(t(329))}}}return xi(i,ht()),i.callbackNode===l?z0.bind(null,i):null}function Od(i,s){var l=ll;return i.current.memoizedState.isDehydrated&&(Zs(i,s).flags|=256),i=Ic(i,s),i!==2&&(s=_i,_i=l,s!==null&&Id(s)),i}function Id(i){_i===null?_i=i:_i.push.apply(_i,i)}function LS(i){for(var s=i;;){if(s.flags&16384){var l=s.updateQueue;if(l!==null&&(l=l.stores,l!==null))for(var f=0;f<l.length;f++){var v=l[f],M=v.getSnapshot;v=v.value;try{if(!Ji(M(),v))return!1}catch{return!1}}}if(l=s.child,s.subtreeFlags&16384&&l!==null)l.return=s,s=l;else{if(s===i)break;for(;s.sibling===null;){if(s.return===null||s.return===i)return!0;s=s.return}s.sibling.return=s.return,s=s.sibling}}return!0}function Ss(i,s){for(s&=~Dd,s&=~Lc,i.suspendedLanes|=s,i.pingedLanes&=~s,i=i.expirationTimes;0<s;){var l=31-be(s),f=1<<l;i[l]=-1,s&=~f}}function H0(i){if((Vt&6)!==0)throw Error(t(327));Va();var s=Ct(i,0);if((s&1)===0)return xi(i,ht()),null;var l=Ic(i,s);if(i.tag!==0&&l===2){var f=Rt(i);f!==0&&(s=f,l=Od(i,f))}if(l===1)throw l=ol,Zs(i,0),Ss(i,s),xi(i,ht()),l;if(l===6)throw Error(t(345));return i.finishedWork=i.current.alternate,i.finishedLanes=s,Js(i,_i,Br),xi(i,ht()),null}function kd(i,s){var l=Vt;Vt|=1;try{return i(s)}finally{Vt=l,Vt===0&&(Ha=ht()+500,uc&&ps())}}function Ks(i){xs!==null&&xs.tag===0&&(Vt&6)===0&&Va();var s=Vt;Vt|=1;var l=Hi.transition,f=Pt;try{if(Hi.transition=null,Pt=1,i)return i()}finally{Pt=f,Hi.transition=l,Vt=s,(Vt&6)===0&&ps()}}function zd(){Ai=za.current,ln(za)}function Zs(i,s){i.finishedWork=null,i.finishedLanes=0;var l=i.timeoutHandle;if(l!==-1&&(i.timeoutHandle=-1,oS(l)),wn!==null)for(l=wn.return;l!==null;){var f=l;switch(Yf(f),f.tag){case 1:f=f.type.childContextTypes,f!=null&&lc();break;case 3:Oa(),ln(mi),ln(Zn),od();break;case 5:sd(f);break;case 4:Oa();break;case 13:ln(hn);break;case 19:ln(hn);break;case 10:ed(f.type._context);break;case 22:case 23:zd()}l=l.return}if(zn=i,wn=i=Ms(i.current,null),qn=Ai=s,Pn=0,ol=null,Dd=Lc=js=0,_i=ll=null,$s!==null){for(s=0;s<$s.length;s++)if(l=$s[s],f=l.interleaved,f!==null){l.interleaved=null;var v=f.next,M=l.pending;if(M!==null){var N=M.next;M.next=v,f.next=N}l.pending=f}$s=null}return i}function V0(i,s){do{var l=wn;try{if(Qf(),yc.current=wc,Sc){for(var f=pn.memoizedState;f!==null;){var v=f.queue;v!==null&&(v.pending=null),f=f.next}Sc=!1}if(Ys=0,kn=Rn=pn=null,tl=!1,nl=0,Ld.current=null,l===null||l.return===null){Pn=1,ol=s,wn=null;break}e:{var M=i,N=l.return,W=l,Y=s;if(s=qn,W.flags|=32768,Y!==null&&typeof Y=="object"&&typeof Y.then=="function"){var pe=Y,we=W,Ce=we.tag;if((we.mode&1)===0&&(Ce===0||Ce===11||Ce===15)){var Ee=we.alternate;Ee?(we.updateQueue=Ee.updateQueue,we.memoizedState=Ee.memoizedState,we.lanes=Ee.lanes):(we.updateQueue=null,we.memoizedState=null)}var je=d0(N);if(je!==null){je.flags&=-257,h0(je,N,W,M,s),je.mode&1&&f0(M,pe,s),s=je,Y=pe;var nt=s.updateQueue;if(nt===null){var rt=new Set;rt.add(Y),s.updateQueue=rt}else nt.add(Y);break e}else{if((s&1)===0){f0(M,pe,s),Hd();break e}Y=Error(t(426))}}else if(fn&&W.mode&1){var Mn=d0(N);if(Mn!==null){(Mn.flags&65536)===0&&(Mn.flags|=256),h0(Mn,N,W,M,s),Zf(Ia(Y,W));break e}}M=Y=Ia(Y,W),Pn!==4&&(Pn=2),ll===null?ll=[M]:ll.push(M),M=N;do{switch(M.tag){case 3:M.flags|=65536,s&=-s,M.lanes|=s;var le=c0(M,Y,s);Og(M,le);break e;case 1:W=Y;var Q=M.type,de=M.stateNode;if((M.flags&128)===0&&(typeof Q.getDerivedStateFromError=="function"||de!==null&&typeof de.componentDidCatch=="function"&&(_s===null||!_s.has(de)))){M.flags|=65536,s&=-s,M.lanes|=s;var Ne=u0(M,W,s);Og(M,Ne);break e}}M=M.return}while(M!==null)}W0(l)}catch(at){s=at,wn===l&&l!==null&&(wn=l=l.return);continue}break}while(!0)}function B0(){var i=Pc.current;return Pc.current=wc,i===null?wc:i}function Hd(){(Pn===0||Pn===3||Pn===2)&&(Pn=4),zn===null||(js&268435455)===0&&(Lc&268435455)===0||Ss(zn,qn)}function Ic(i,s){var l=Vt;Vt|=2;var f=B0();(zn!==i||qn!==s)&&(Br=null,Zs(i,s));do try{DS();break}catch(v){V0(i,v)}while(!0);if(Qf(),Vt=l,Pc.current=f,wn!==null)throw Error(t(261));return zn=null,qn=0,Pn}function DS(){for(;wn!==null;)G0(wn)}function NS(){for(;wn!==null&&!ut();)G0(wn)}function G0(i){var s=q0(i.alternate,i,Ai);i.memoizedProps=i.pendingProps,s===null?W0(i):wn=s,Ld.current=null}function W0(i){var s=i;do{var l=s.alternate;if(i=s.return,(s.flags&32768)===0){if(l=TS(l,s,Ai),l!==null){wn=l;return}}else{if(l=AS(l,s),l!==null){l.flags&=32767,wn=l;return}if(i!==null)i.flags|=32768,i.subtreeFlags=0,i.deletions=null;else{Pn=6,wn=null;return}}if(s=s.sibling,s!==null){wn=s;return}wn=s=i}while(s!==null);Pn===0&&(Pn=5)}function Js(i,s,l){var f=Pt,v=Hi.transition;try{Hi.transition=null,Pt=1,US(i,s,l,f)}finally{Hi.transition=v,Pt=f}return null}function US(i,s,l,f){do Va();while(xs!==null);if((Vt&6)!==0)throw Error(t(327));l=i.finishedWork;var v=i.finishedLanes;if(l===null)return null;if(i.finishedWork=null,i.finishedLanes=0,l===i.current)throw Error(t(177));i.callbackNode=null,i.callbackPriority=0;var M=l.lanes|l.childLanes;if(It(i,M),i===zn&&(wn=zn=null,qn=0),(l.subtreeFlags&2064)===0&&(l.flags&2064)===0||Nc||(Nc=!0,Y0(L,function(){return Va(),null})),M=(l.flags&15990)!==0,(l.subtreeFlags&15990)!==0||M){M=Hi.transition,Hi.transition=null;var N=Pt;Pt=1;var W=Vt;Vt|=4,Ld.current=null,CS(i,l),U0(l,i),eS(Hf),Yl=!!zf,Hf=zf=null,i.current=l,RS(l),Mt(),Vt=W,Pt=N,Hi.transition=M}else i.current=l;if(Nc&&(Nc=!1,xs=i,Uc=v),M=i.pendingLanes,M===0&&(_s=null),Ae(l.stateNode),xi(i,ht()),s!==null)for(f=i.onRecoverableError,l=0;l<s.length;l++)v=s[l],f(v.value,{componentStack:v.stack,digest:v.digest});if(Dc)throw Dc=!1,i=Ud,Ud=null,i;return(Uc&1)!==0&&i.tag!==0&&Va(),M=i.pendingLanes,(M&1)!==0?i===Fd?cl++:(cl=0,Fd=i):cl=0,ps(),null}function Va(){if(xs!==null){var i=Yi(Uc),s=Hi.transition,l=Pt;try{if(Hi.transition=null,Pt=16>i?16:i,xs===null)var f=!1;else{if(i=xs,xs=null,Uc=0,(Vt&6)!==0)throw Error(t(331));var v=Vt;for(Vt|=4,Qe=i.current;Qe!==null;){var M=Qe,N=M.child;if((Qe.flags&16)!==0){var W=M.deletions;if(W!==null){for(var Y=0;Y<W.length;Y++){var pe=W[Y];for(Qe=pe;Qe!==null;){var we=Qe;switch(we.tag){case 0:case 11:case 15:al(8,we,M)}var Ce=we.child;if(Ce!==null)Ce.return=we,Qe=Ce;else for(;Qe!==null;){we=Qe;var Ee=we.sibling,je=we.return;if(R0(we),we===pe){Qe=null;break}if(Ee!==null){Ee.return=je,Qe=Ee;break}Qe=je}}}var nt=M.alternate;if(nt!==null){var rt=nt.child;if(rt!==null){nt.child=null;do{var Mn=rt.sibling;rt.sibling=null,rt=Mn}while(rt!==null)}}Qe=M}}if((M.subtreeFlags&2064)!==0&&N!==null)N.return=M,Qe=N;else e:for(;Qe!==null;){if(M=Qe,(M.flags&2048)!==0)switch(M.tag){case 0:case 11:case 15:al(9,M,M.return)}var le=M.sibling;if(le!==null){le.return=M.return,Qe=le;break e}Qe=M.return}}var Q=i.current;for(Qe=Q;Qe!==null;){N=Qe;var de=N.child;if((N.subtreeFlags&2064)!==0&&de!==null)de.return=N,Qe=de;else e:for(N=Q;Qe!==null;){if(W=Qe,(W.flags&2048)!==0)try{switch(W.tag){case 0:case 11:case 15:Rc(9,W)}}catch(at){_n(W,W.return,at)}if(W===N){Qe=null;break e}var Ne=W.sibling;if(Ne!==null){Ne.return=W.return,Qe=Ne;break e}Qe=W.return}}if(Vt=v,ps(),ie&&typeof ie.onPostCommitFiberRoot=="function")try{ie.onPostCommitFiberRoot(re,i)}catch{}f=!0}return f}finally{Pt=l,Hi.transition=s}}return!1}function X0(i,s,l){s=Ia(l,s),s=c0(i,s,1),i=gs(i,s,1),s=ui(),i!==null&&(Sn(i,1,s),xi(i,s))}function _n(i,s,l){if(i.tag===3)X0(i,i,l);else for(;s!==null;){if(s.tag===3){X0(s,i,l);break}else if(s.tag===1){var f=s.stateNode;if(typeof s.type.getDerivedStateFromError=="function"||typeof f.componentDidCatch=="function"&&(_s===null||!_s.has(f))){i=Ia(l,i),i=u0(s,i,1),s=gs(s,i,1),i=ui(),s!==null&&(Sn(s,1,i),xi(s,i));break}}s=s.return}}function FS(i,s,l){var f=i.pingCache;f!==null&&f.delete(s),s=ui(),i.pingedLanes|=i.suspendedLanes&l,zn===i&&(qn&l)===l&&(Pn===4||Pn===3&&(qn&130023424)===qn&&500>ht()-Nd?Zs(i,0):Dd|=l),xi(i,s)}function $0(i,s){s===0&&((i.mode&1)===0?s=1:(s=gt,gt<<=1,(gt&130023424)===0&&(gt=4194304)));var l=ui();i=zr(i,s),i!==null&&(Sn(i,s,l),xi(i,l))}function OS(i){var s=i.memoizedState,l=0;s!==null&&(l=s.retryLane),$0(i,l)}function IS(i,s){var l=0;switch(i.tag){case 13:var f=i.stateNode,v=i.memoizedState;v!==null&&(l=v.retryLane);break;case 19:f=i.stateNode;break;default:throw Error(t(314))}f!==null&&f.delete(s),$0(i,l)}var q0;q0=function(i,s,l){if(i!==null)if(i.memoizedProps!==s.pendingProps||mi.current)vi=!0;else{if((i.lanes&l)===0&&(s.flags&128)===0)return vi=!1,wS(i,s,l);vi=(i.flags&131072)!==0}else vi=!1,fn&&(s.flags&1048576)!==0&&Ag(s,dc,s.index);switch(s.lanes=0,s.tag){case 2:var f=s.type;bc(i,s),i=s.pendingProps;var v=Ra(s,Zn.current);Fa(s,l),v=ud(null,s,f,i,v,l);var M=fd();return s.flags|=1,typeof v=="object"&&v!==null&&typeof v.render=="function"&&v.$$typeof===void 0?(s.tag=1,s.memoizedState=null,s.updateQueue=null,gi(f)?(M=!0,cc(s)):M=!1,s.memoizedState=v.state!==null&&v.state!==void 0?v.state:null,id(s),v.updater=Tc,s.stateNode=v,v._reactInternals=s,vd(s,f,i,l),s=Sd(null,s,f,!0,M,l)):(s.tag=0,fn&&M&&qf(s),ci(null,s,v,l),s=s.child),s;case 16:f=s.elementType;e:{switch(bc(i,s),i=s.pendingProps,v=f._init,f=v(f._payload),s.type=f,v=s.tag=zS(f),i=er(f,i),v){case 0:s=yd(null,s,f,i,l);break e;case 1:s=x0(null,s,f,i,l);break e;case 11:s=p0(null,s,f,i,l);break e;case 14:s=m0(null,s,f,er(f.type,i),l);break e}throw Error(t(306,f,""))}return s;case 0:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:er(f,v),yd(i,s,f,v,l);case 1:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:er(f,v),x0(i,s,f,v,l);case 3:e:{if(y0(s),i===null)throw Error(t(387));f=s.pendingProps,M=s.memoizedState,v=M.element,Fg(i,s),_c(s,f,null,l);var N=s.memoizedState;if(f=N.element,M.isDehydrated)if(M={element:f,isDehydrated:!1,cache:N.cache,pendingSuspenseBoundaries:N.pendingSuspenseBoundaries,transitions:N.transitions},s.updateQueue.baseState=M,s.memoizedState=M,s.flags&256){v=Ia(Error(t(423)),s),s=S0(i,s,f,l,v);break e}else if(f!==v){v=Ia(Error(t(424)),s),s=S0(i,s,f,l,v);break e}else for(Ti=fs(s.stateNode.containerInfo.firstChild),wi=s,fn=!0,Qi=null,l=Ng(s,null,f,l),s.child=l;l;)l.flags=l.flags&-3|4096,l=l.sibling;else{if(Da(),f===v){s=Vr(i,s,l);break e}ci(i,s,f,l)}s=s.child}return s;case 5:return kg(s),i===null&&Kf(s),f=s.type,v=s.pendingProps,M=i!==null?i.memoizedProps:null,N=v.children,Vf(f,v)?N=null:M!==null&&Vf(f,M)&&(s.flags|=32),_0(i,s),ci(i,s,N,l),s.child;case 6:return i===null&&Kf(s),null;case 13:return M0(i,s,l);case 4:return rd(s,s.stateNode.containerInfo),f=s.pendingProps,i===null?s.child=Na(s,null,f,l):ci(i,s,f,l),s.child;case 11:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:er(f,v),p0(i,s,f,v,l);case 7:return ci(i,s,s.pendingProps,l),s.child;case 8:return ci(i,s,s.pendingProps.children,l),s.child;case 12:return ci(i,s,s.pendingProps.children,l),s.child;case 10:e:{if(f=s.type._context,v=s.pendingProps,M=s.memoizedProps,N=v.value,rn(mc,f._currentValue),f._currentValue=N,M!==null)if(Ji(M.value,N)){if(M.children===v.children&&!mi.current){s=Vr(i,s,l);break e}}else for(M=s.child,M!==null&&(M.return=s);M!==null;){var W=M.dependencies;if(W!==null){N=M.child;for(var Y=W.firstContext;Y!==null;){if(Y.context===f){if(M.tag===1){Y=Hr(-1,l&-l),Y.tag=2;var pe=M.updateQueue;if(pe!==null){pe=pe.shared;var we=pe.pending;we===null?Y.next=Y:(Y.next=we.next,we.next=Y),pe.pending=Y}}M.lanes|=l,Y=M.alternate,Y!==null&&(Y.lanes|=l),td(M.return,l,s),W.lanes|=l;break}Y=Y.next}}else if(M.tag===10)N=M.type===s.type?null:M.child;else if(M.tag===18){if(N=M.return,N===null)throw Error(t(341));N.lanes|=l,W=N.alternate,W!==null&&(W.lanes|=l),td(N,l,s),N=M.sibling}else N=M.child;if(N!==null)N.return=M;else for(N=M;N!==null;){if(N===s){N=null;break}if(M=N.sibling,M!==null){M.return=N.return,N=M;break}N=N.return}M=N}ci(i,s,v.children,l),s=s.child}return s;case 9:return v=s.type,f=s.pendingProps.children,Fa(s,l),v=ki(v),f=f(v),s.flags|=1,ci(i,s,f,l),s.child;case 14:return f=s.type,v=er(f,s.pendingProps),v=er(f.type,v),m0(i,s,f,v,l);case 15:return g0(i,s,s.type,s.pendingProps,l);case 17:return f=s.type,v=s.pendingProps,v=s.elementType===f?v:er(f,v),bc(i,s),s.tag=1,gi(f)?(i=!0,cc(s)):i=!1,Fa(s,l),o0(s,f,v),vd(s,f,v,l),Sd(null,s,f,!0,i,l);case 19:return w0(i,s,l);case 22:return v0(i,s,l)}throw Error(t(156,s.tag))};function Y0(i,s){return xe(i,s)}function kS(i,s,l,f){this.tag=i,this.key=l,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=s,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=f,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Vi(i,s,l,f){return new kS(i,s,l,f)}function Vd(i){return i=i.prototype,!(!i||!i.isReactComponent)}function zS(i){if(typeof i=="function")return Vd(i)?1:0;if(i!=null){if(i=i.$$typeof,i===I)return 11;if(i===q)return 14}return 2}function Ms(i,s){var l=i.alternate;return l===null?(l=Vi(i.tag,s,i.key,i.mode),l.elementType=i.elementType,l.type=i.type,l.stateNode=i.stateNode,l.alternate=i,i.alternate=l):(l.pendingProps=s,l.type=i.type,l.flags=0,l.subtreeFlags=0,l.deletions=null),l.flags=i.flags&14680064,l.childLanes=i.childLanes,l.lanes=i.lanes,l.child=i.child,l.memoizedProps=i.memoizedProps,l.memoizedState=i.memoizedState,l.updateQueue=i.updateQueue,s=i.dependencies,l.dependencies=s===null?null:{lanes:s.lanes,firstContext:s.firstContext},l.sibling=i.sibling,l.index=i.index,l.ref=i.ref,l}function kc(i,s,l,f,v,M){var N=2;if(f=i,typeof i=="function")Vd(i)&&(N=1);else if(typeof i=="string")N=5;else e:switch(i){case F:return Qs(l.children,v,M,s);case A:N=8,v|=8;break;case U:return i=Vi(12,l,s,v|2),i.elementType=U,i.lanes=M,i;case X:return i=Vi(13,l,s,v),i.elementType=X,i.lanes=M,i;case V:return i=Vi(19,l,s,v),i.elementType=V,i.lanes=M,i;case ae:return zc(l,v,M,s);default:if(typeof i=="object"&&i!==null)switch(i.$$typeof){case O:N=10;break e;case k:N=9;break e;case I:N=11;break e;case q:N=14;break e;case ee:N=16,f=null;break e}throw Error(t(130,i==null?i:typeof i,""))}return s=Vi(N,l,s,v),s.elementType=i,s.type=f,s.lanes=M,s}function Qs(i,s,l,f){return i=Vi(7,i,f,s),i.lanes=l,i}function zc(i,s,l,f){return i=Vi(22,i,f,s),i.elementType=ae,i.lanes=l,i.stateNode={isHidden:!1},i}function Bd(i,s,l){return i=Vi(6,i,null,s),i.lanes=l,i}function Gd(i,s,l){return s=Vi(4,i.children!==null?i.children:[],i.key,s),s.lanes=l,s.stateNode={containerInfo:i.containerInfo,pendingChildren:null,implementation:i.implementation},s}function HS(i,s,l,f,v){this.tag=s,this.containerInfo=i,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Ye(0),this.expirationTimes=Ye(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Ye(0),this.identifierPrefix=f,this.onRecoverableError=v,this.mutableSourceEagerHydrationData=null}function Wd(i,s,l,f,v,M,N,W,Y){return i=new HS(i,s,l,W,Y),s===1?(s=1,M===!0&&(s|=8)):s=0,M=Vi(3,null,null,s),i.current=M,M.stateNode=i,M.memoizedState={element:f,isDehydrated:l,cache:null,transitions:null,pendingSuspenseBoundaries:null},id(M),i}function VS(i,s,l){var f=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:P,key:f==null?null:""+f,children:i,containerInfo:s,implementation:l}}function j0(i){if(!i)return hs;i=i._reactInternals;e:{if(In(i)!==i||i.tag!==1)throw Error(t(170));var s=i;do{switch(s.tag){case 3:s=s.stateNode.context;break e;case 1:if(gi(s.type)){s=s.stateNode.__reactInternalMemoizedMergedChildContext;break e}}s=s.return}while(s!==null);throw Error(t(171))}if(i.tag===1){var l=i.type;if(gi(l))return Eg(i,l,s)}return s}function K0(i,s,l,f,v,M,N,W,Y){return i=Wd(l,f,!0,i,v,M,N,W,Y),i.context=j0(null),l=i.current,f=ui(),v=ys(l),M=Hr(f,v),M.callback=s??null,gs(l,M,v),i.current.lanes=v,Sn(i,v,f),xi(i,f),i}function Hc(i,s,l,f){var v=s.current,M=ui(),N=ys(v);return l=j0(l),s.context===null?s.context=l:s.pendingContext=l,s=Hr(M,N),s.payload={element:i},f=f===void 0?null:f,f!==null&&(s.callback=f),i=gs(v,s,N),i!==null&&(ir(i,v,N,M),vc(i,v,N)),N}function Vc(i){if(i=i.current,!i.child)return null;switch(i.child.tag){case 5:return i.child.stateNode;default:return i.child.stateNode}}function Z0(i,s){if(i=i.memoizedState,i!==null&&i.dehydrated!==null){var l=i.retryLane;i.retryLane=l!==0&&l<s?l:s}}function Xd(i,s){Z0(i,s),(i=i.alternate)&&Z0(i,s)}function BS(){return null}var J0=typeof reportError=="function"?reportError:function(i){console.error(i)};function $d(i){this._internalRoot=i}Bc.prototype.render=$d.prototype.render=function(i){var s=this._internalRoot;if(s===null)throw Error(t(409));Hc(i,s,null,null)},Bc.prototype.unmount=$d.prototype.unmount=function(){var i=this._internalRoot;if(i!==null){this._internalRoot=null;var s=i.containerInfo;Ks(function(){Hc(null,i,null,null)}),s[Fr]=null}};function Bc(i){this._internalRoot=i}Bc.prototype.unstable_scheduleHydration=function(i){if(i){var s=ji();i={blockedOn:null,target:i,priority:s};for(var l=0;l<ls.length&&s!==0&&s<ls[l].priority;l++);ls.splice(l,0,i),l===0&&km(i)}};function qd(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11)}function Gc(i){return!(!i||i.nodeType!==1&&i.nodeType!==9&&i.nodeType!==11&&(i.nodeType!==8||i.nodeValue!==" react-mount-point-unstable "))}function Q0(){}function GS(i,s,l,f,v){if(v){if(typeof f=="function"){var M=f;f=function(){var pe=Vc(N);M.call(pe)}}var N=K0(s,f,i,0,null,!1,!1,"",Q0);return i._reactRootContainer=N,i[Fr]=N.current,qo(i.nodeType===8?i.parentNode:i),Ks(),N}for(;v=i.lastChild;)i.removeChild(v);if(typeof f=="function"){var W=f;f=function(){var pe=Vc(Y);W.call(pe)}}var Y=Wd(i,0,!1,null,null,!1,!1,"",Q0);return i._reactRootContainer=Y,i[Fr]=Y.current,qo(i.nodeType===8?i.parentNode:i),Ks(function(){Hc(s,Y,l,f)}),Y}function Wc(i,s,l,f,v){var M=l._reactRootContainer;if(M){var N=M;if(typeof v=="function"){var W=v;v=function(){var Y=Vc(N);W.call(Y)}}Hc(s,N,i,v)}else N=GS(l,s,i,v,f);return Vc(N)}Ur=function(i){switch(i.tag){case 3:var s=i.stateNode;if(s.current.memoizedState.isDehydrated){var l=qe(s.pendingLanes);l!==0&&(Kn(s,l|1),xi(s,ht()),(Vt&6)===0&&(Ha=ht()+500,ps()))}break;case 13:Ks(function(){var f=zr(i,1);if(f!==null){var v=ui();ir(f,i,1,v)}}),Xd(i,1)}},Wt=function(i){if(i.tag===13){var s=zr(i,134217728);if(s!==null){var l=ui();ir(s,i,134217728,l)}Xd(i,134217728)}},un=function(i){if(i.tag===13){var s=ys(i),l=zr(i,s);if(l!==null){var f=ui();ir(l,i,s,f)}Xd(i,s)}},ji=function(){return Pt},jt=function(i,s){var l=Pt;try{return Pt=i,s()}finally{Pt=l}},ct=function(i,s,l){switch(s){case"input":if(bt(i,l),s=l.name,l.type==="radio"&&s!=null){for(l=i;l.parentNode;)l=l.parentNode;for(l=l.querySelectorAll("input[name="+JSON.stringify(""+s)+'][type="radio"]'),s=0;s<l.length;s++){var f=l[s];if(f!==i&&f.form===i.form){var v=oc(f);if(!v)throw Error(t(90));pt(f),bt(f,v)}}}break;case"textarea":sn(i,l);break;case"select":s=l.value,s!=null&&Bt(i,!!l.multiple,s,!1)}},Ve=kd,ye=Ks;var WS={usingClientEntryPoint:!1,Events:[Ko,ba,oc,ve,Ie,kd]},ul={findFiberByHostInstance:Bs,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},XS={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:w.ReactCurrentDispatcher,findHostInstanceByFiber:function(i){return i=fe(i),i===null?null:i.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||BS,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Xc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Xc.isDisabled&&Xc.supportsFiber)try{re=Xc.inject(XS),ie=Xc}catch{}}return yi.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=WS,yi.createPortal=function(i,s){var l=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!qd(s))throw Error(t(200));return VS(i,s,null,l)},yi.createRoot=function(i,s){if(!qd(i))throw Error(t(299));var l=!1,f="",v=J0;return s!=null&&(s.unstable_strictMode===!0&&(l=!0),s.identifierPrefix!==void 0&&(f=s.identifierPrefix),s.onRecoverableError!==void 0&&(v=s.onRecoverableError)),s=Wd(i,1,!1,null,null,l,!1,f,v),i[Fr]=s.current,qo(i.nodeType===8?i.parentNode:i),new $d(s)},yi.findDOMNode=function(i){if(i==null)return null;if(i.nodeType===1)return i;var s=i._reactInternals;if(s===void 0)throw typeof i.render=="function"?Error(t(188)):(i=Object.keys(i).join(","),Error(t(268,i)));return i=fe(s),i=i===null?null:i.stateNode,i},yi.flushSync=function(i){return Ks(i)},yi.hydrate=function(i,s,l){if(!Gc(s))throw Error(t(200));return Wc(null,i,s,!0,l)},yi.hydrateRoot=function(i,s,l){if(!qd(i))throw Error(t(405));var f=l!=null&&l.hydratedSources||null,v=!1,M="",N=J0;if(l!=null&&(l.unstable_strictMode===!0&&(v=!0),l.identifierPrefix!==void 0&&(M=l.identifierPrefix),l.onRecoverableError!==void 0&&(N=l.onRecoverableError)),s=K0(s,null,i,1,l??null,v,!1,M,N),i[Fr]=s.current,qo(i),f)for(i=0;i<f.length;i++)l=f[i],v=l._getVersion,v=v(l._source),s.mutableSourceEagerHydrationData==null?s.mutableSourceEagerHydrationData=[l,v]:s.mutableSourceEagerHydrationData.push(l,v);return new Bc(s)},yi.render=function(i,s,l){if(!Gc(s))throw Error(t(200));return Wc(null,i,s,!1,l)},yi.unmountComponentAtNode=function(i){if(!Gc(i))throw Error(t(40));return i._reactRootContainer?(Ks(function(){Wc(null,null,i,!1,function(){i._reactRootContainer=null,i[Fr]=null})}),!0):!1},yi.unstable_batchedUpdates=kd,yi.unstable_renderSubtreeIntoContainer=function(i,s,l,f){if(!Gc(l))throw Error(t(200));if(i==null||i._reactInternals===void 0)throw Error(t(38));return Wc(i,s,l,!1,f)},yi.version="18.3.1-next-f1338f8080-20240426",yi}var ov;function nM(){if(ov)return Kd.exports;ov=1;function n(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(n)}catch(e){console.error(e)}}return n(),Kd.exports=tM(),Kd.exports}var lv;function iM(){if(lv)return $c;lv=1;var n=nM();return $c.createRoot=n.createRoot,$c.hydrateRoot=n.hydrateRoot,$c}var rM=iM();const qc={END:"end",LEFT:"left",RIGHT:"right",START:"start"},Os={NONE:"none",PRIMARY:"primary",SUCCESS:"success",WARNING:"warning",DANGER:"danger"};let Ht="bp6";typeof BLUEPRINT_NAMESPACE<"u"?Ht=BLUEPRINT_NAMESPACE:typeof REACT_APP_BLUEPRINT_NAMESPACE<"u"&&(Ht=REACT_APP_BLUEPRINT_NAMESPACE);const em=`${Ht}-active`,sM=`${Ht}-align-left`,aM=`${Ht}-align-right`,oM=`${Ht}-dark`,lf=`${Ht}-disabled`,Fl=`${Ht}-fill`,lM=`${Ht}-inline`,cM=`${Ht}-interactive`,bo=`${Ht}-large`,uM=`${Ht}-loading`,qu=`${Ht}-minimal`,cv=`${Ht}-outlined`,fM=`${Ht}-round`,Yu=`${Ht}-small`,Q_=`${Ht}-vertical`;dr(Os.PRIMARY);dr(Os.SUCCESS);dr(Os.WARNING);dr(Os.DANGER);const dM=`${Ht}-text-overflow-ellipsis`,cf=`${Ht}-button`,hM=`${cf}-group`,pM=`${cf}-spinner`,mM=`${cf}-text`,gM=`${Ht}-html-select`,tm=`${Ht}-control`,vM=`${tm}-input`,ex=`${tm}-indicator`,uv=`${ex}-child`,_M=`${Ht}-checkbox`,xM=`${Ht}-radio`,tx=`${Ht}-switch`,fv=`${tx}-inner-text`,ma=`${Ht}-slider`,yM=`${ma}-axis`,nx=`${ma}-handle`,ix=`${ma}-label`,SM=`${ma}-track`,MM=`${ma}-progress`,EM=`${Ht}-start`,wM=`${Ht}-end`,uf=`${Ht}-spinner`,TM=`${uf}-animation`,AM=`${uf}-head`,bM=`${Ht}-no-spin`,CM=`${uf}-track`,rx=`${Ht}-tag`,RM=`${rx}-remove`,nm=`${Ht}-icon`,PM=`${nm}-standard`,LM=`${nm}-large`;function im(n){switch(n){case qc.LEFT:case qc.START:return sM;case qc.RIGHT:case qc.END:return aM;default:return}}function DM(n){if(n!=null)return n.indexOf(`${Ht}-icon-`)===0?n:`${Ht}-icon-${n}`}function dr(n){if(!(n==null||n===Os.NONE))return`${Ht}-intent-${n.toLowerCase()}`}function ff(n,e){if(n==="small")return Yu;if(n==="large")return bo;const{large:t=!1,small:r=!1}=e;return{[bo]:t,[Yu]:r}}function sx(n,e){if(n==="outlined")return cv;if(n==="minimal")return qu;const{minimal:t=!1,outlined:r=!1}=e;return{[qu]:t,[cv]:r}}var Re=Qp();function NM(n,e,t=(r,a)=>r===a){return n==null&&e==null?!0:n==null||e==null||n.length!==e.length?!1:n.every((r,a)=>t(r,e[a]))}function UM(){return typeof window<"u"&&window.document!=null}function ax(n){return typeof n=="function"}const zs="[Blueprint]",FM=zs+" clamp: max cannot be less than min",OM=zs+" <Slider> stepSize must be greater than zero.",IM=zs+" <Slider> labelStepSize must be greater than zero.",kM=zs+" <Slider> min prop must be a finite number.",zM=zs+" <Slider> max prop must be a finite number.",HM=zs+" <MultiSlider> children must be <SliderHandle>s or <SliderTrackStop>s",VM=zs+" <MultiSlider> labelStepSize and labelValues prop are mutually exclusive, with labelStepSize taking priority.",BM=zs+" <Spinner> Classes.SMALL/LARGE are ignored if size prop is set.";function Kh(n){return typeof NODE_ENV<"u"&&NODE_ENV===n}function GM(n,e,t=1e-5){return Math.abs(n-e)<=t}function rm(n,e,t){if(n==null)return n;if(t<e)throw new Error(FM);return Math.min(Math.max(n,e),t)}function ox(n){if(!isFinite(n))return 0;let e=1,t=0;for(;Math.round(n*e)/e!==n;)e*=10,t++;return t}const Xn="Blueprint6",dv=["active","alignText","asyncControl","containerRef","current","elementRef","ellipsizeText","endIcon","fill","icon","iconSize","inputClassName","inputRef","intent","inline","large","loading","leftElement","leftIcon","minimal","onRemove","outlined","panel","panelClassName","popoverProps","rightElement","rightIcon","round","selectedValue","size","small","tagName","text","textClassName","variant"];function wo(n,e=dv,t=!1){return t&&(e=e.concat(dv)),e.reduce((r,a)=>(a.indexOf("-")!==-1||r.hasOwnProperty(a)&&delete r[a],r),{...n})}function ju(n,e=!1){return n==null||n===""||n===!1||!e&&Array.isArray(n)&&(n.length===0||n.every(t=>ju(t,!0)))}function lx(n,e){return n!=null&&n.type!=null&&n.type.displayName!=null&&n.type.displayName===e.displayName}const WM=`${Xn}.Icon.`;function XM(n){if(!Re.isValidElement(n))return!1;const{type:e}=n;if(typeof e=="string")return!1;const{displayName:t}=e;return typeof t=="string"&&t.startsWith(WM)}function hv(n){return n.key==="Enter"||n.key===" "}const $M=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];function qM(n){return $M.includes(n.key)}function YM(n,e,t){if(e.includes(n.key))return-1;if(t.includes(n.key))return 1}function jM(n){return n!=null&&typeof n!="function"}function KM(n){return typeof n=="function"}function ZM(n,e){jM(n)?n.current=e:KM(n)&&n(e)}function sm(...n){return e=>{n.forEach(t=>{ZM(t,e)})}}class am extends Re.PureComponent{constructor(t){super(t);Et(this,"componentWillUpdate");Et(this,"componentWillReceiveProps");Et(this,"componentWillMount");Et(this,"getDerivedStateFromProps");Et(this,"displayName");Et(this,"timeoutIds",[]);Et(this,"requestIds",[]);Et(this,"clearTimeouts",()=>{if(this.timeoutIds.length>0){for(const t of this.timeoutIds)window.clearTimeout(t);this.timeoutIds=[]}});Et(this,"cancelAnimationFrames",()=>{if(this.requestIds.length>0){for(const t of this.requestIds)window.cancelAnimationFrame(t);this.requestIds=[]}});Kh("production")||this.validateProps(this.props)}componentDidUpdate(t,r,a){Kh("production")||this.validateProps(this.props)}componentWillUnmount(){this.clearTimeouts(),this.cancelAnimationFrames()}requestAnimationFrame(t){const r=window.requestAnimationFrame(t);return this.requestIds.push(r),()=>window.cancelAnimationFrame(r)}setTimeout(t,r){const a=window.setTimeout(t,r);return this.timeoutIds.push(a),()=>window.clearTimeout(a)}validateProps(t){}}var Qd={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/var pv;function JM(){return pv||(pv=1,(function(n){(function(){var e={}.hasOwnProperty;function t(){for(var o="",c=0;c<arguments.length;c++){var u=arguments[c];u&&(o=a(o,r(u)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return t.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var c="";for(var u in o)e.call(o,u)&&o[u]&&(c=a(c,u));return c}function a(o,c){return c?o?o+" "+c:o+c:o}n.exports?(t.default=t,n.exports=t):window.classNames=t})()})(Qd)),Qd.exports}var QM=JM();const jn=jS(QM);function eE(n,e=[]){Re.useEffect(()=>{Kh("production")||n()},e)}const tE={defaultTabIndex:void 0,disabledTabIndex:-1};function cx(n,e,t,r=tE){const{defaultTabIndex:a,disabledTabIndex:o}=r,{active:c,onClick:u,onFocus:d,onKeyDown:h,onKeyUp:m,onBlur:g,tabIndex:p=a}=e,[x,E]=Re.useState(),[T,S]=Re.useState(!1),y=Re.useRef(null),b=Re.useCallback(P=>{T&&S(!1),g==null||g(P)},[T,g]),D=Re.useCallback(P=>{hv(P)&&(P.preventDefault(),P.key!==x&&S(!0)),E(P.key),h==null||h(P)},[x,h]),w=Re.useCallback(P=>{var F;hv(P)&&(S(!1),(F=y.current)==null||F.click()),E(void 0),m==null||m(P)},[m,y]);return[n&&(c||T),{onBlur:b,onClick:n?u:void 0,onFocus:n?d:void 0,onKeyDown:D,onKeyUp:w,ref:sm(y,t),tabIndex:n?p:o}]}var Ol=function(){return Ol=Object.assign||function(e){for(var t,r=1,a=arguments.length;r<a;r++){t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},Ol.apply(this,arguments)};function nE(n){return n.toLowerCase()}var iE=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],rE=/[^A-Z0-9]+/gi;function ux(n,e){e===void 0&&(e={});for(var t=e.splitRegexp,r=t===void 0?iE:t,a=e.stripRegexp,o=a===void 0?rE:a,c=e.transform,u=c===void 0?nE:c,d=e.delimiter,h=d===void 0?" ":d,m=mv(mv(n,r,"$1\0$2"),o,"\0"),g=0,p=m.length;m.charAt(g)==="\0";)g++;for(;m.charAt(p-1)==="\0";)p--;return m.slice(g,p).split("\0").map(u).join(h)}function mv(n,e,t){return e instanceof RegExp?n.replace(e,t):e.reduce(function(r,a){return r.replace(a,t)},n)}function sE(n,e){var t=n.charAt(0),r=n.substr(1).toLowerCase();return e>0&&t>="0"&&t<="9"?"_"+t+r:""+t.toUpperCase()+r}function aE(n,e){return e===void 0&&(e={}),ux(n,Ol({delimiter:"",transform:sE},e))}function oE(n,e){return e===void 0&&(e={}),ux(n,Ol({delimiter:"."},e))}function lE(n,e){return e===void 0&&(e={}),oE(n,Ol({delimiter:"_"},e))}var dn;(function(n){n[n.STANDARD=16]="STANDARD",n[n.LARGE=20]="LARGE"})(dn||(dn={}));const cE="modulepreload",uE=function(n,e){return new URL(n,e).href},gv={},vv=function(e,t,r){let a=Promise.resolve();if(t&&t.length>0){let c=function(m){return Promise.all(m.map(g=>Promise.resolve(g).then(p=>({status:"fulfilled",value:p}),p=>({status:"rejected",reason:p}))))};const u=document.getElementsByTagName("link"),d=document.querySelector("meta[property=csp-nonce]"),h=(d==null?void 0:d.nonce)||(d==null?void 0:d.getAttribute("nonce"));a=c(t.map(m=>{if(m=uE(m,r),m in gv)return;gv[m]=!0;const g=m.endsWith(".css"),p=g?'[rel="stylesheet"]':"";if(!!r)for(let T=u.length-1;T>=0;T--){const S=u[T];if(S.href===m&&(!g||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${m}"]${p}`))return;const E=document.createElement("link");if(E.rel=g?"stylesheet":cE,g||(E.as="script"),E.crossOrigin="",E.href=m,h&&E.setAttribute("nonce",h),document.head.appendChild(E),g)return new Promise((T,S)=>{E.addEventListener("load",T),E.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${m}`)))})}))}function o(c){const u=new Event("vite:preloadError",{cancelable:!0});if(u.payload=c,window.dispatchEvent(u),!u.defaultPrevented)throw c}return a.then(c=>{for(const u of c||[])u.status==="rejected"&&o(u.reason);return e().catch(o)})};var _;(function(n){n.AddApplication="add-application",n.AddChild="add-child",n.AddClip="add-clip",n.AddColumnLeft="add-column-left",n.AddColumnRight="add-column-right",n.AddDerivedColumn="add-derived-column",n.AddLocation="add-location",n.AddParent="add-parent",n.AddRowBottom="add-row-bottom",n.AddRowTop="add-row-top",n.AddTile="add-tile",n.AddToArtifact="add-to-artifact",n.AddToFolder="add-to-folder",n.Add="add",n.AimpointsTarget="aimpoints-target",n.Airplane="airplane",n.AlignCenter="align-center",n.AlignJustify="align-justify",n.AlignLeft="align-left",n.AlignRight="align-right",n.AlignmentBottom="alignment-bottom",n.AlignmentHorizontalCenter="alignment-horizontal-center",n.AlignmentLeft="alignment-left",n.AlignmentRight="alignment-right",n.AlignmentTop="alignment-top",n.AlignmentVerticalCenter="alignment-vertical-center",n.Ammunition="ammunition",n.Anchor="anchor",n.Annotation="annotation",n.Announcement="announcement",n.Antenna="antenna",n.AppHeader="app-header",n.Application="application",n.Applications="applications",n.Archive="archive",n.AreaOfInterest="area-of-interest",n.ArrayBoolean="array-boolean",n.ArrayDate="array-date",n.ArrayFloatingPoint="array-floating-point",n.ArrayNumeric="array-numeric",n.ArrayObject="array-object",n.ArrayString="array-string",n.ArrayTimestamp="array-timestamp",n.Array="array",n.ArrowBottomLeft="arrow-bottom-left",n.ArrowBottomRight="arrow-bottom-right",n.ArrowDown="arrow-down",n.ArrowLeft="arrow-left",n.ArrowRight="arrow-right",n.ArrowTopLeft="arrow-top-left",n.ArrowTopRight="arrow-top-right",n.ArrowUp="arrow-up",n.ArrowsArc="arrows-arc",n.ArrowsHorizontal="arrows-horizontal",n.ArrowsVertical="arrows-vertical",n.Asterisk="asterisk",n.At="at",n.AutomaticUpdates="automatic-updates",n.Axle="axle",n.Backlink="backlink",n.BackwardTen="backward-ten",n.Badge="badge",n.BanCircle="ban-circle",n.BankAccount="bank-account",n.Barcode="barcode",n.BinaryNumber="binary-number",n.Blank="blank",n.BlockPromote="block-promote",n.BlockedPerson="blocked-person",n.Bold="bold",n.Book="book",n.Bookmark="bookmark",n.Box="box",n.BranchLocked="branch-locked",n.BranchUnlocked="branch-unlocked",n.Briefcase="briefcase",n.BringData="bring-data",n.BringForward="bring-forward",n.BritishPound="british-pound",n.Bug="bug",n.Buggy="buggy",n.Build="build",n.Bullseye="bullseye",n.Calculator="calculator",n.Calendar="calendar",n.Camera="camera",n.CaretDown="caret-down",n.CaretLeft="caret-left",n.CaretRight="caret-right",n.CaretUp="caret-up",n.CargoShip="cargo-ship",n.CellTower="cell-tower",n.Changes="changes",n.Chart="chart",n.Chat="chat",n.ChevronBackward="chevron-backward",n.ChevronDown="chevron-down",n.ChevronForward="chevron-forward",n.ChevronLeft="chevron-left",n.ChevronRight="chevron-right",n.ChevronUp="chevron-up",n.CircleArrowDown="circle-arrow-down",n.CircleArrowLeft="circle-arrow-left",n.CircleArrowRight="circle-arrow-right",n.CircleArrowUp="circle-arrow-up",n.CircleDashed="circle-dashed",n.Circle="circle",n.Citation="citation",n.Clean="clean",n.Clip="clip",n.ClipboardFile="clipboard-file",n.Clipboard="clipboard",n.CloudDownload="cloud-download",n.CloudServer="cloud-server",n.CloudTick="cloud-tick",n.CloudUpload="cloud-upload",n.Cloud="cloud",n.CodeBlock="code-block",n.Code="code",n.Cog="cog",n.CollapseAll="collapse-all",n.ColorFill="color-fill",n.ColumnLayout="column-layout",n.Comment="comment",n.Comparison="comparison",n.Compass="compass",n.Compressed="compressed",n.Confirm="confirm",n.ConsoleAlert="console-alert",n.Console="console",n.Construction="construction",n.Contrast="contrast",n.Control="control",n.CreditCard="credit-card",n.Crop="crop",n.CrossCircle="cross-circle",n.Cross="cross",n.Crown="crown",n.CrystalBall="crystal-ball",n.CssStyle="css-style",n.CubeAdd="cube-add",n.CubeCutout="cube-cutout",n.CubeCutouts="cube-cutouts",n.CubeEdit="cube-edit",n.CubeRemove="cube-remove",n.Cube="cube",n.Cubes="cubes",n.CurlyBraces="curly-braces",n.CurvedRangeChart="curved-range-chart",n.Cut="cut",n.Cycle="cycle",n.Dashboard="dashboard",n.DataCloud="data-cloud",n.DataConnection="data-connection",n.DataLineage="data-lineage",n.DataSearch="data-search",n.DataSync="data-sync",n.Database="database",n.DeleteClip="delete-clip",n.Delete="delete",n.Delta="delta",n.DeriveColumn="derive-column",n.Descendant="descendant",n.Desktop="desktop",n.Detection="detection",n.Diagnosis="diagnosis",n.DiagramTree="diagram-tree",n.DirectionLeft="direction-left",n.DirectionRight="direction-right",n.Disable="disable",n.Divide="divide",n.DocumentCode="document-code",n.DocumentLocked="document-locked",n.DocumentOpen="document-open",n.DocumentShare="document-share",n.Document="document",n.Dollar="dollar",n.Dot="dot",n.DoubleCaretHorizontal="double-caret-horizontal",n.DoubleCaretVertical="double-caret-vertical",n.DoubleChevronDown="double-chevron-down",n.DoubleChevronLeft="double-chevron-left",n.DoubleChevronRight="double-chevron-right",n.DoubleChevronUp="double-chevron-up",n.DoughnutChart="doughnut-chart",n.Download="download",n.DragHandleHorizontal="drag-handle-horizontal",n.DragHandleVertical="drag-handle-vertical",n.Draw="draw",n.DrawerLeftFilled="drawer-left-filled",n.DrawerLeft="drawer-left",n.DrawerRightFilled="drawer-right-filled",n.DrawerRight="drawer-right",n.DriveTime="drive-time",n.DroneUav="drone-uav",n.Drone="drone",n.Duplicate="duplicate",n.Edit="edit",n.Eject="eject",n.Emoji="emoji",n.Endnote="endnote",n.Endorsed="endorsed",n.Engagement="engagement",n.Envelope="envelope",n.Equals="equals",n.Eraser="eraser",n.Error="error",n.Euro="euro",n.Excavator="excavator",n.Exchange="exchange",n.ExcludeRow="exclude-row",n.ExpandAll="expand-all",n.Explain="explain",n.Export="export",n.EyeOff="eye-off",n.EyeOn="eye-on",n.EyeOpen="eye-open",n.FastBackward="fast-backward",n.FastForward="fast-forward",n.FeedSubscribed="feed-subscribed",n.Feed="feed",n.FighterJet="fighter-jet",n.Film="film",n.FilterKeep="filter-keep",n.FilterList="filter-list",n.FilterOpen="filter-open",n.FilterRemove="filter-remove",n.FilterSortAsc="filter-sort-asc",n.FilterSortDesc="filter-sort-desc",n.Filter="filter",n.Flag="flag",n.Flame="flame",n.Flash="flash",n.FloatingPoint="floating-point",n.FloppyDisk="floppy-disk",n.FlowBranch="flow-branch",n.FlowEnd="flow-end",n.FlowLinear="flow-linear",n.FlowReviewBranch="flow-review-branch",n.FlowReview="flow-review",n.Flows="flows",n.FolderClose="folder-close",n.FolderNew="folder-new",n.FolderOpen="folder-open",n.FolderSharedOpen="folder-shared-open",n.FolderShared="folder-shared",n.Follower="follower",n.Following="following",n.Font="font",n.ForkEnd="fork-end",n.Fork="fork",n.Form="form",n.ForwardTen="forward-ten",n.FrameToFrame="frame-to-frame",n.Fuel="fuel",n.FullCircle="full-circle",n.FullStackedChart="full-stacked-chart",n.Fullscreen="fullscreen",n.FunctionMinimal="function-minimal",n.Function="function",n.GanttChart="gantt-chart",n.Generate="generate",n.Geofence="geofence",n.Geolocation="geolocation",n.Geosearch="geosearch",n.Geotime="geotime",n.GiftBox="gift-box",n.GitBranch="git-branch",n.GitCommit="git-commit",n.GitMerge="git-merge",n.GitNewBranch="git-new-branch",n.GitPull="git-pull",n.GitPush="git-push",n.GitRebase="git-rebase",n.GitRepo="git-repo",n.Glass="glass",n.GlobeNetworkAdd="globe-network-add",n.GlobeNetwork="globe-network",n.Globe="globe",n.GraphRemove="graph-remove",n.Graph="graph",n.GreaterThanOrEqualTo="greater-than-or-equal-to",n.GreaterThan="greater-than",n.GridView="grid-view",n.Grid="grid",n.GroupItem="group-item",n.GroupObjects="group-objects",n.GroupedBarChart="grouped-bar-chart",n.HandDown="hand-down",n.HandLeft="hand-left",n.HandRight="hand-right",n.HandUp="hand-up",n.Hand="hand",n.Hat="hat",n.HeaderOne="header-one",n.HeaderThree="header-three",n.HeaderTwo="header-two",n.Header="header",n.Headset="headset",n.HeartBroken="heart-broken",n.Heart="heart",n.HeatGrid="heat-grid",n.Heatmap="heatmap",n.Helicopter="helicopter",n.Help="help",n.HelperManagement="helper-management",n.Hexagon="hexagon",n.HighPriority="high-priority",n.HighVoltagePole="high-voltage-pole",n.Highlight="highlight",n.History="history",n.Home="home",n.HorizontalBarChartAsc="horizontal-bar-chart-asc",n.HorizontalBarChartDesc="horizontal-bar-chart-desc",n.HorizontalBarChart="horizontal-bar-chart",n.HorizontalDistribution="horizontal-distribution",n.HorizontalInbetween="horizontal-inbetween",n.Hurricane="hurricane",n.IdNumber="id-number",n.ImageRotateLeft="image-rotate-left",n.ImageRotateRight="image-rotate-right",n.Import="import",n.InboxFiltered="inbox-filtered",n.InboxGeo="inbox-geo",n.InboxSearch="inbox-search",n.InboxUpdate="inbox-update",n.Inbox="inbox",n.InfoSign="info-sign",n.Inheritance="inheritance",n.InheritedGroup="inherited-group",n.InnerJoin="inner-join",n.Input="input",n.Insert="insert",n.Intelligence="intelligence",n.Intersection="intersection",n.IpAddress="ip-address",n.IssueClosed="issue-closed",n.IssueNew="issue-new",n.Issue="issue",n.Italic="italic",n.JoinTable="join-table",n.KeyBackspace="key-backspace",n.KeyCommand="key-command",n.KeyControl="key-control",n.KeyDelete="key-delete",n.KeyEnter="key-enter",n.KeyEscape="key-escape",n.KeyOption="key-option",n.KeyShift="key-shift",n.KeyTab="key-tab",n.Key="key",n.KnownVehicle="known-vehicle",n.LabTest="lab-test",n.Label="label",n.LayerOutline="layer-outline",n.Layer="layer",n.Layers="layers",n.LayoutAuto="layout-auto",n.LayoutBalloon="layout-balloon",n.LayoutBottomRowThreeTiles="layout-bottom-row-three-tiles",n.LayoutBottomRowTwoTiles="layout-bottom-row-two-tiles",n.LayoutCircle="layout-circle",n.LayoutGrid="layout-grid",n.LayoutGroupBy="layout-group-by",n.LayoutHierarchy="layout-hierarchy",n.LayoutLeftColumnThreeTiles="layout-left-column-three-tiles",n.LayoutLeftColumnTwoTiles="layout-left-column-two-tiles",n.LayoutLinear="layout-linear",n.LayoutRightColumnThreeTiles="layout-right-column-three-tiles",n.LayoutRightColumnTwoTiles="layout-right-column-two-tiles",n.LayoutSkewGrid="layout-skew-grid",n.LayoutSortedClusters="layout-sorted-clusters",n.LayoutThreeColumns="layout-three-columns",n.LayoutThreeRows="layout-three-rows",n.LayoutTopRowThreeTiles="layout-top-row-three-tiles",n.LayoutTopRowTwoTiles="layout-top-row-two-tiles",n.LayoutTwoColumns="layout-two-columns",n.LayoutTwoRows="layout-two-rows",n.Layout="layout",n.Learning="learning",n.LeftJoin="left-join",n.LengthenText="lengthen-text",n.LessThanOrEqualTo="less-than-or-equal-to",n.LessThan="less-than",n.Lifesaver="lifesaver",n.Lightbulb="lightbulb",n.Lightning="lightning",n.Link="link",n.LinkedSquares="linked-squares",n.ListColumns="list-columns",n.ListDetailView="list-detail-view",n.List="list",n.Locate="locate",n.Lock="lock",n.Locomotive="locomotive",n.LogIn="log-in",n.LogOut="log-out",n.LowVoltagePole="low-voltage-pole",n.Manual="manual",n.ManuallyEnteredData="manually-entered-data",n.ManyToMany="many-to-many",n.ManyToOne="many-to-one",n.MapCreate="map-create",n.MapMarker="map-marker",n.Map="map",n.Markdown="markdown",n.Maximize="maximize",n.Media="media",n.MenuClosed="menu-closed",n.MenuOpen="menu-open",n.Menu="menu",n.MergeColumns="merge-columns",n.MergeLinks="merge-links",n.Microphone="microphone",n.Minimize="minimize",n.Minus="minus",n.MobilePhone="mobile-phone",n.MobileVideo="mobile-video",n.ModalFilled="modal-filled",n.Modal="modal",n.Model="model",n.Moon="moon",n.More="more",n.Mountain="mountain",n.Move="move",n.Mugshot="mugshot",n.MultiSelect="multi-select",n.Music="music",n.Nest="nest",n.NewComment="new-comment",n.NewDrawing="new-drawing",n.NewGridItem="new-grid-item",n.NewLayer="new-layer",n.NewLayers="new-layers",n.NewLink="new-link",n.NewObject="new-object",n.NewPerson="new-person",n.NewPrescription="new-prescription",n.NewShield="new-shield",n.NewTextBox="new-text-box",n.Ninja="ninja",n.NotEqualTo="not-equal-to",n.NotificationsAdd="notifications-add",n.NotificationsSnooze="notifications-snooze",n.NotificationsUpdated="notifications-updated",n.Notifications="notifications",n.NumberedList="numbered-list",n.Numerical="numerical",n.ObjectView="object-view",n.Office="office",n.Offline="offline",n.OilField="oil-field",n.OneColumn="one-column",n.OneToMany="one-to-many",n.OneToOne="one-to-one",n.OpenApplication="open-application",n.Outdated="outdated",n.OuterJoin="outer-join",n.Output="output",n.Package="package",n.PageBreak="page-break",n.PageLayout="page-layout",n.PanelStats="panel-stats",n.PanelTable="panel-table",n.Panel="panel",n.Paperclip="paperclip",n.Paragraph="paragraph",n.PasteVariable="paste-variable",n.PathSearch="path-search",n.Path="path",n.Pause="pause",n.People="people",n.Percentage="percentage",n.Person="person",n.PhoneCall="phone-call",n.PhoneForward="phone-forward",n.PhoneSearch="phone-search",n.Phone="phone",n.PieChart="pie-chart",n.Pill="pill",n.Pin="pin",n.Pistol="pistol",n.PivotTable="pivot-table",n.Pivot="pivot",n.Play="play",n.Playbook="playbook",n.Plus="plus",n.PolygonFilter="polygon-filter",n.Popout="popout",n.Power="power",n.PredictiveAnalysis="predictive-analysis",n.Prescription="prescription",n.Presentation="presentation",n.Print="print",n.Projects="projects",n.Properties="properties",n.Property="property",n.PublishFunction="publish-function",n.Pulse="pulse",n.Rain="rain",n.Random="random",n.RangeRing="range-ring",n.Record="record",n.RectHeight="rect-height",n.RectWidth="rect-width",n.Rectangle="rectangle",n.Redo="redo",n.RefreshOff="refresh-off",n.Refresh="refresh",n.Regex="regex",n.RegressionChart="regression-chart",n.RemoveColumnLeft="remove-column-left",n.RemoveColumnRight="remove-column-right",n.RemoveColumn="remove-column",n.RemoveRowBottom="remove-row-bottom",n.RemoveRowTop="remove-row-top",n.Remove="remove",n.Repeat="repeat",n.Reset="reset",n.Resolve="resolve",n.Rig="rig",n.RightJoin="right-join",n.Ring="ring",n.RocketSlant="rocket-slant",n.Rocket="rocket",n.RootFolder="root-folder",n.RotateCcw="rotate-ccw",n.RotateCw="rotate-cw",n.RotateDocument="rotate-document",n.RotatePage="rotate-page",n.Route="route",n.RunHistory="run-history",n.Satellite="satellite",n.Saved="saved",n.ScatterPlot="scatter-plot",n.SearchAround="search-around",n.SearchTemplate="search-template",n.SearchText="search-text",n.Search="search",n.SegmentedControl="segmented-control",n.Select="select",n.SelectionBoxAdd="selection-box-add",n.SelectionBoxEdit="selection-box-edit",n.SelectionBoxRemove="selection-box-remove",n.SelectionBox="selection-box",n.Selection="selection",n.SendBackward="send-backward",n.SendMessage="send-message",n.SendToGraph="send-to-graph",n.SendToMap="send-to-map",n.SendTo="send-to",n.Sensor="sensor",n.SeriesAdd="series-add",n.SeriesConfiguration="series-configuration",n.SeriesDerived="series-derived",n.SeriesFiltered="series-filtered",n.SeriesSearch="series-search",n.ServerInstall="server-install",n.Server="server",n.Settings="settings",n.Shapes="shapes",n.Share="share",n.SharedFilter="shared-filter",n.Shield="shield",n.Ship="ship",n.Shop="shop",n.ShoppingCart="shopping-cart",n.ShortenText="shorten-text",n.SignalSearch="signal-search",n.SimCard="sim-card",n.Slash="slash",n.SmallCross="small-cross",n.SmallInfoSign="small-info-sign",n.SmallMinus="small-minus",n.SmallPlus="small-plus",n.SmallSquare="small-square",n.SmallTick="small-tick",n.Snowflake="snowflake",n.SoccerBall="soccer-ball",n.SocialMedia="social-media",n.SortAlphabeticalDesc="sort-alphabetical-desc",n.SortAlphabetical="sort-alphabetical",n.SortAsc="sort-asc",n.SortDesc="sort-desc",n.SortNumericalDesc="sort-numerical-desc",n.SortNumerical="sort-numerical",n.Sort="sort",n.SpellCheck="spell-check",n.Spin="spin",n.SplitColumns="split-columns",n.SportsStadium="sports-stadium",n.Square="square",n.StackedChart="stacked-chart",n.StadiumGeometry="stadium-geometry",n.StarEmpty="star-empty",n.Star="star",n.StepBackward="step-backward",n.StepChart="step-chart",n.StepForward="step-forward",n.Stop="stop",n.Stopwatch="stopwatch",n.Strikethrough="strikethrough",n.Style="style",n.Subscript="subscript",n.SubtractRightJoin="subtract-right-join",n.Superscript="superscript",n.SwapHorizontal="swap-horizontal",n.SwapVertical="swap-vertical",n.Sweep="sweep",n.Switch="switch",n.SymbolCircle="symbol-circle",n.SymbolCross="symbol-cross",n.SymbolDiamond="symbol-diamond",n.SymbolRectangle="symbol-rectangle",n.SymbolSquare="symbol-square",n.SymbolTriangleDown="symbol-triangle-down",n.SymbolTriangleUp="symbol-triangle-up",n.Syringe="syringe",n.TableSync="table-sync",n.TagAdd="tag-add",n.TagPromote="tag-promote",n.TagRefresh="tag-refresh",n.TagUndo="tag-undo",n.Tag="tag",n.Tags="tags",n.TakeAction="take-action",n.Tank="tank",n.Target="target",n.Taxi="taxi",n.Team="team",n.Temperature="temperature",n.TextHighlight="text-highlight",n.ThAdd="th-add",n.ThDerived="th-derived",n.ThDisconnect="th-disconnect",n.ThFiltered="th-filtered",n.ThListAdd="th-list-add",n.ThList="th-list",n.ThVirtualAdd="th-virtual-add",n.ThVirtual="th-virtual",n.Th="th",n.ThirdParty="third-party",n.ThumbsDown="thumbs-down",n.ThumbsUp="thumbs-up",n.TickCircle="tick-circle",n.Tick="tick",n.Time="time",n.TimelineAreaChart="timeline-area-chart",n.TimelineBarChart="timeline-bar-chart",n.TimelineEvents="timeline-events",n.TimelineLineChart="timeline-line-chart",n.Tint="tint",n.Torch="torch",n.Tractor="tractor",n.Train="train",n.Translate="translate",n.Trash="trash",n.Tree="tree",n.TrendingDown="trending-down",n.TrendingUp="trending-up",n.Trophy="trophy",n.Truck="truck",n.TwoColumns="two-columns",n.Unarchive="unarchive",n.Underline="underline",n.Undo="undo",n.UngroupObjects="ungroup-objects",n.UnknownVehicle="unknown-vehicle",n.Unlink="unlink",n.Unlock="unlock",n.Unpin="unpin",n.Unresolve="unresolve",n.Updated="updated",n.Upload="upload",n.User="user",n.VariableLayer="variable-layer",n.Variable="variable",n.Vector="vector",n.VerticalBarChartAsc="vertical-bar-chart-asc",n.VerticalBarChartDesc="vertical-bar-chart-desc",n.VerticalDistribution="vertical-distribution",n.VerticalInbetween="vertical-inbetween",n.Video="video",n.Virus="virus",n.VolumeDown="volume-down",n.VolumeOff="volume-off",n.VolumeUp="volume-up",n.Walk="walk",n.WarningSign="warning-sign",n.WaterfallChart="waterfall-chart",n.Waves="waves",n.WidgetButton="widget-button",n.WidgetFooter="widget-footer",n.WidgetHeader="widget-header",n.Widget="widget",n.Wind="wind",n.Won="won",n.WrapLines="wrap-lines",n.WrenchRedo="wrench-redo",n.WrenchSnooze="wrench-snooze",n.WrenchTime="wrench-time",n.Wrench="wrench",n.Yen="yen",n.ZoomIn="zoom-in",n.ZoomOut="zoom-out",n.ZoomToFit="zoom-to-fit"})(_||(_={}));_.AddApplication+"",_.AddChild+"",_.AddClip+"",_.AddColumnLeft+"",_.AddColumnRight+"",_.AddDerivedColumn+"",_.AddLocation+"",_.AddParent+"",_.AddRowBottom+"",_.AddRowTop+"",_.AddTile+"",_.AddToArtifact+"",_.AddToFolder+"",_.Add+"",_.AimpointsTarget+"",_.Airplane+"",_.AlignCenter+"",_.AlignJustify+"",_.AlignLeft+"",_.AlignRight+"",_.AlignmentBottom+"",_.AlignmentHorizontalCenter+"",_.AlignmentLeft+"",_.AlignmentRight+"",_.AlignmentTop+"",_.AlignmentVerticalCenter+"",_.Ammunition+"",_.Anchor+"",_.Annotation+"",_.Announcement+"",_.Antenna+"",_.AppHeader+"",_.Application+"",_.Applications+"",_.Archive+"",_.AreaOfInterest+"",_.ArrayBoolean+"",_.ArrayDate+"",_.ArrayFloatingPoint+"",_.ArrayNumeric+"",_.ArrayObject+"",_.ArrayString+"",_.ArrayTimestamp+"",_.Array+"",_.ArrowBottomLeft+"",_.ArrowBottomRight+"",_.ArrowDown+"",_.ArrowLeft+"",_.ArrowRight+"",_.ArrowTopLeft+"",_.ArrowTopRight+"",_.ArrowUp+"",_.ArrowsArc+"",_.ArrowsHorizontal+"",_.ArrowsVertical+"",_.Asterisk+"",_.At+"",_.AutomaticUpdates+"",_.Axle+"",_.Backlink+"",_.BackwardTen+"",_.Badge+"",_.BanCircle+"",_.BankAccount+"",_.Barcode+"",_.BinaryNumber+"",_.Blank+"",_.BlockPromote+"",_.BlockedPerson+"",_.Bold+"",_.Book+"",_.Bookmark+"",_.Box+"",_.BranchLocked+"",_.BranchUnlocked+"",_.Briefcase+"",_.BringData+"",_.BringForward+"",_.BritishPound+"",_.Bug+"",_.Buggy+"",_.Build+"",_.Bullseye+"",_.Calculator+"",_.Calendar+"",_.Camera+"",_.CaretDown+"",_.CaretLeft+"",_.CaretRight+"",_.CaretUp+"",_.CargoShip+"",_.CellTower+"",_.Changes+"",_.Chart+"",_.Chat+"",_.ChevronBackward+"",_.ChevronDown+"",_.ChevronForward+"",_.ChevronLeft+"",_.ChevronRight+"",_.ChevronUp+"",_.CircleArrowDown+"",_.CircleArrowLeft+"",_.CircleArrowRight+"",_.CircleArrowUp+"",_.CircleDashed+"",_.Circle+"",_.Citation+"",_.Clean+"",_.Clip+"",_.ClipboardFile+"",_.Clipboard+"",_.CloudDownload+"",_.CloudServer+"",_.CloudTick+"",_.CloudUpload+"",_.Cloud+"",_.CodeBlock+"",_.Code+"",_.Cog+"",_.CollapseAll+"",_.ColorFill+"",_.ColumnLayout+"",_.Comment+"",_.Comparison+"",_.Compass+"",_.Compressed+"",_.Confirm+"",_.ConsoleAlert+"",_.Console+"",_.Construction+"",_.Contrast+"",_.Control+"",_.CreditCard+"",_.Crop+"",_.CrossCircle+"",_.Cross+"",_.Crown+"",_.CrystalBall+"",_.CssStyle+"",_.CubeAdd+"",_.CubeCutout+"",_.CubeCutouts+"",_.CubeEdit+"",_.CubeRemove+"",_.Cube+"",_.Cubes+"",_.CurlyBraces+"",_.CurvedRangeChart+"",_.Cut+"",_.Cycle+"",_.Dashboard+"",_.DataCloud+"",_.DataConnection+"",_.DataLineage+"",_.DataSearch+"",_.DataSync+"",_.Database+"",_.DeleteClip+"",_.Delete+"",_.Delta+"",_.DeriveColumn+"",_.Descendant+"",_.Desktop+"",_.Detection+"",_.Diagnosis+"",_.DiagramTree+"",_.DirectionLeft+"",_.DirectionRight+"",_.Disable+"",_.Divide+"",_.DocumentCode+"",_.DocumentLocked+"",_.DocumentOpen+"",_.DocumentShare+"",_.Document+"",_.Dollar+"",_.Dot+"",_.DoubleCaretHorizontal+"",_.DoubleCaretVertical+"",_.DoubleChevronDown+"",_.DoubleChevronLeft+"",_.DoubleChevronRight+"",_.DoubleChevronUp+"",_.DoughnutChart+"",_.Download+"",_.DragHandleHorizontal+"",_.DragHandleVertical+"",_.Draw+"",_.DrawerLeftFilled+"",_.DrawerLeft+"",_.DrawerRightFilled+"",_.DrawerRight+"",_.DriveTime+"",_.DroneUav+"",_.Drone+"",_.Duplicate+"",_.Edit+"",_.Eject+"",_.Emoji+"",_.Endnote+"",_.Endorsed+"",_.Engagement+"",_.Envelope+"",_.Equals+"",_.Eraser+"",_.Error+"",_.Euro+"",_.Excavator+"",_.Exchange+"",_.ExcludeRow+"",_.ExpandAll+"",_.Explain+"",_.Export+"",_.EyeOff+"",_.EyeOn+"",_.EyeOpen+"",_.FastBackward+"",_.FastForward+"",_.FeedSubscribed+"",_.Feed+"",_.FighterJet+"",_.Film+"",_.FilterKeep+"",_.FilterList+"",_.FilterOpen+"",_.FilterRemove+"",_.FilterSortAsc+"",_.FilterSortDesc+"",_.Filter+"",_.Flag+"",_.Flame+"",_.Flash+"",_.FloatingPoint+"",_.FloppyDisk+"",_.FlowBranch+"",_.FlowEnd+"",_.FlowLinear+"",_.FlowReviewBranch+"",_.FlowReview+"",_.Flows+"",_.FolderClose+"",_.FolderNew+"",_.FolderOpen+"",_.FolderSharedOpen+"",_.FolderShared+"",_.Follower+"",_.Following+"",_.Font+"",_.ForkEnd+"",_.Fork+"",_.Form+"",_.ForwardTen+"",_.FrameToFrame+"",_.Fuel+"",_.FullCircle+"",_.FullStackedChart+"",_.Fullscreen+"",_.FunctionMinimal+"",_.Function+"",_.GanttChart+"",_.Generate+"",_.Geofence+"",_.Geolocation+"",_.Geosearch+"",_.Geotime+"",_.GiftBox+"",_.GitBranch+"",_.GitCommit+"",_.GitMerge+"",_.GitNewBranch+"",_.GitPull+"",_.GitPush+"",_.GitRebase+"",_.GitRepo+"",_.Glass+"",_.GlobeNetworkAdd+"",_.GlobeNetwork+"",_.Globe+"",_.GraphRemove+"",_.Graph+"",_.GreaterThanOrEqualTo+"",_.GreaterThan+"",_.GridView+"",_.Grid+"",_.GroupItem+"",_.GroupObjects+"",_.GroupedBarChart+"",_.HandDown+"",_.HandLeft+"",_.HandRight+"",_.HandUp+"",_.Hand+"",_.Hat+"",_.HeaderOne+"",_.HeaderThree+"",_.HeaderTwo+"",_.Header+"",_.Headset+"",_.HeartBroken+"",_.Heart+"",_.HeatGrid+"",_.Heatmap+"",_.Helicopter+"",_.Help+"",_.HelperManagement+"",_.Hexagon+"",_.HighPriority+"",_.HighVoltagePole+"",_.Highlight+"",_.History+"",_.Home+"",_.HorizontalBarChartAsc+"",_.HorizontalBarChartDesc+"",_.HorizontalBarChart+"",_.HorizontalDistribution+"",_.HorizontalInbetween+"",_.Hurricane+"",_.IdNumber+"",_.ImageRotateLeft+"",_.ImageRotateRight+"",_.Import+"",_.InboxFiltered+"",_.InboxGeo+"",_.InboxSearch+"",_.InboxUpdate+"",_.Inbox+"",_.InfoSign+"",_.Inheritance+"",_.InheritedGroup+"",_.InnerJoin+"",_.Input+"",_.Insert+"",_.Intelligence+"",_.Intersection+"",_.IpAddress+"",_.IssueClosed+"",_.IssueNew+"",_.Issue+"",_.Italic+"",_.JoinTable+"",_.KeyBackspace+"",_.KeyCommand+"",_.KeyControl+"",_.KeyDelete+"",_.KeyEnter+"",_.KeyEscape+"",_.KeyOption+"",_.KeyShift+"",_.KeyTab+"",_.Key+"",_.KnownVehicle+"",_.LabTest+"",_.Label+"",_.LayerOutline+"",_.Layer+"",_.Layers+"",_.LayoutAuto+"",_.LayoutBalloon+"",_.LayoutBottomRowThreeTiles+"",_.LayoutBottomRowTwoTiles+"",_.LayoutCircle+"",_.LayoutGrid+"",_.LayoutGroupBy+"",_.LayoutHierarchy+"",_.LayoutLeftColumnThreeTiles+"",_.LayoutLeftColumnTwoTiles+"",_.LayoutLinear+"",_.LayoutRightColumnThreeTiles+"",_.LayoutRightColumnTwoTiles+"",_.LayoutSkewGrid+"",_.LayoutSortedClusters+"",_.LayoutThreeColumns+"",_.LayoutThreeRows+"",_.LayoutTopRowThreeTiles+"",_.LayoutTopRowTwoTiles+"",_.LayoutTwoColumns+"",_.LayoutTwoRows+"",_.Layout+"",_.Learning+"",_.LeftJoin+"",_.LengthenText+"",_.LessThanOrEqualTo+"",_.LessThan+"",_.Lifesaver+"",_.Lightbulb+"",_.Lightning+"",_.Link+"",_.LinkedSquares+"",_.ListColumns+"",_.ListDetailView+"",_.List+"",_.Locate+"",_.Lock+"",_.Locomotive+"",_.LogIn+"",_.LogOut+"",_.LowVoltagePole+"",_.Manual+"",_.ManuallyEnteredData+"",_.ManyToMany+"",_.ManyToOne+"",_.MapCreate+"",_.MapMarker+"",_.Map+"",_.Markdown+"",_.Maximize+"",_.Media+"",_.MenuClosed+"",_.MenuOpen+"",_.Menu+"",_.MergeColumns+"",_.MergeLinks+"",_.Microphone+"",_.Minimize+"",_.Minus+"",_.MobilePhone+"",_.MobileVideo+"",_.ModalFilled+"",_.Modal+"",_.Model+"",_.Moon+"",_.More+"",_.Mountain+"",_.Move+"",_.Mugshot+"",_.MultiSelect+"",_.Music+"",_.Nest+"",_.NewComment+"",_.NewDrawing+"",_.NewGridItem+"",_.NewLayer+"",_.NewLayers+"",_.NewLink+"",_.NewObject+"",_.NewPerson+"",_.NewPrescription+"",_.NewShield+"",_.NewTextBox+"",_.Ninja+"",_.NotEqualTo+"",_.NotificationsAdd+"",_.NotificationsSnooze+"",_.NotificationsUpdated+"",_.Notifications+"",_.NumberedList+"",_.Numerical+"",_.ObjectView+"",_.Office+"",_.Offline+"",_.OilField+"",_.OneColumn+"",_.OneToMany+"",_.OneToOne+"",_.OpenApplication+"",_.Outdated+"",_.OuterJoin+"",_.Output+"",_.Package+"",_.PageBreak+"",_.PageLayout+"",_.PanelStats+"",_.PanelTable+"",_.Panel+"",_.Paperclip+"",_.Paragraph+"",_.PasteVariable+"",_.PathSearch+"",_.Path+"",_.Pause+"",_.People+"",_.Percentage+"",_.Person+"",_.PhoneCall+"",_.PhoneForward+"",_.PhoneSearch+"",_.Phone+"",_.PieChart+"",_.Pill+"",_.Pin+"",_.Pistol+"",_.PivotTable+"",_.Pivot+"",_.Play+"",_.Playbook+"",_.Plus+"",_.PolygonFilter+"",_.Popout+"",_.Power+"",_.PredictiveAnalysis+"",_.Prescription+"",_.Presentation+"",_.Print+"",_.Projects+"",_.Properties+"",_.Property+"",_.PublishFunction+"",_.Pulse+"",_.Rain+"",_.Random+"",_.RangeRing+"",_.Record+"",_.RectHeight+"",_.RectWidth+"",_.Rectangle+"",_.Redo+"",_.RefreshOff+"",_.Refresh+"",_.Regex+"",_.RegressionChart+"",_.RemoveColumnLeft+"",_.RemoveColumnRight+"",_.RemoveColumn+"",_.RemoveRowBottom+"",_.RemoveRowTop+"",_.Remove+"",_.Repeat+"",_.Reset+"",_.Resolve+"",_.Rig+"",_.RightJoin+"",_.Ring+"",_.RocketSlant+"",_.Rocket+"",_.RootFolder+"",_.RotateCcw+"",_.RotateCw+"",_.RotateDocument+"",_.RotatePage+"",_.Route+"",_.RunHistory+"",_.Satellite+"",_.Saved+"",_.ScatterPlot+"",_.SearchAround+"",_.SearchTemplate+"",_.SearchText+"",_.Search+"",_.SegmentedControl+"",_.Select+"",_.SelectionBoxAdd+"",_.SelectionBoxEdit+"",_.SelectionBoxRemove+"",_.SelectionBox+"",_.Selection+"",_.SendBackward+"",_.SendMessage+"",_.SendToGraph+"",_.SendToMap+"",_.SendTo+"",_.Sensor+"",_.SeriesAdd+"",_.SeriesConfiguration+"",_.SeriesDerived+"",_.SeriesFiltered+"",_.SeriesSearch+"",_.ServerInstall+"",_.Server+"",_.Settings+"",_.Shapes+"",_.Share+"",_.SharedFilter+"",_.Shield+"",_.Ship+"",_.Shop+"",_.ShoppingCart+"",_.ShortenText+"",_.SignalSearch+"",_.SimCard+"",_.Slash+"",_.SmallCross+"",_.SmallInfoSign+"",_.SmallMinus+"",_.SmallPlus+"",_.SmallSquare+"",_.SmallTick+"",_.Snowflake+"",_.SoccerBall+"",_.SocialMedia+"",_.SortAlphabeticalDesc+"",_.SortAlphabetical+"",_.SortAsc+"",_.SortDesc+"",_.SortNumericalDesc+"",_.SortNumerical+"",_.Sort+"",_.SpellCheck+"",_.Spin+"",_.SplitColumns+"",_.SportsStadium+"",_.Square+"",_.StackedChart+"",_.StadiumGeometry+"",_.StarEmpty+"",_.Star+"",_.StepBackward+"",_.StepChart+"",_.StepForward+"",_.Stop+"",_.Stopwatch+"",_.Strikethrough+"",_.Style+"",_.Subscript+"",_.SubtractRightJoin+"",_.Superscript+"",_.SwapHorizontal+"",_.SwapVertical+"",_.Sweep+"",_.Switch+"",_.SymbolCircle+"",_.SymbolCross+"",_.SymbolDiamond+"",_.SymbolRectangle+"",_.SymbolSquare+"",_.SymbolTriangleDown+"",_.SymbolTriangleUp+"",_.Syringe+"",_.TableSync+"",_.TagAdd+"",_.TagPromote+"",_.TagRefresh+"",_.TagUndo+"",_.Tag+"",_.Tags+"",_.TakeAction+"",_.Tank+"",_.Target+"",_.Taxi+"",_.Team+"",_.Temperature+"",_.TextHighlight+"",_.ThAdd+"",_.ThDerived+"",_.ThDisconnect+"",_.ThFiltered+"",_.ThListAdd+"",_.ThList+"",_.ThVirtualAdd+"",_.ThVirtual+"",_.Th+"",_.ThirdParty+"",_.ThumbsDown+"",_.ThumbsUp+"",_.TickCircle+"",_.Tick+"",_.Time+"",_.TimelineAreaChart+"",_.TimelineBarChart+"",_.TimelineEvents+"",_.TimelineLineChart+"",_.Tint+"",_.Torch+"",_.Tractor+"",_.Train+"",_.Translate+"",_.Trash+"",_.Tree+"",_.TrendingDown+"",_.TrendingUp+"",_.Trophy+"",_.Truck+"",_.TwoColumns+"",_.Unarchive+"",_.Underline+"",_.Undo+"",_.UngroupObjects+"",_.UnknownVehicle+"",_.Unlink+"",_.Unlock+"",_.Unpin+"",_.Unresolve+"",_.Updated+"",_.Upload+"",_.User+"",_.VariableLayer+"",_.Variable+"",_.Vector+"",_.VerticalBarChartAsc+"",_.VerticalBarChartDesc+"",_.VerticalDistribution+"",_.VerticalInbetween+"",_.Video+"",_.Virus+"",_.VolumeDown+"",_.VolumeOff+"",_.VolumeUp+"",_.Walk+"",_.WarningSign+"",_.WaterfallChart+"",_.Waves+"",_.WidgetButton+"",_.WidgetFooter+"",_.WidgetHeader+"",_.Widget+"",_.Wind+"",_.Won+"",_.WrapLines+"",_.WrenchRedo+"",_.WrenchSnooze+"",_.WrenchTime+"",_.Wrench+"",_.Yen+"",_.ZoomIn+"",_.ZoomOut+"",_.ZoomToFit+"";const fx={},dx={};for(const n of Object.values(_))fx[aE(n)]=n,dx[lE(n).toUpperCase()]=n;const hx={...fx,...dx},fE=new Set(Object.values(hx));function dE(n){return typeof NODE_ENV<"u"&&NODE_ENV===n}async function hE(n,e){const t=dE("development")&&typeof performance<"u";let r;if(t&&(r=performance.now(),console.info(`Started '${n}'...`)),await e(),t){const a=Math.round(performance.now()-r);console.info(`Finished '${n}' in ${a}ms`)}}async function pE(n){const{loader:e=_o.defaultLoader}=n;return typeof e=="function"?e:e==="all"?(await vv(async()=>{const{allPathsLoader:t}=await import("./allPathsLoader-B-RQakoT.js");return{allPathsLoader:t}},[],import.meta.url)).allPathsLoader:(await vv(async()=>{const{splitPathsBySizeLoader:t}=await import("./splitPathsBySizeLoader-BewmAIka.js");return{splitPathsBySizeLoader:t}},[],import.meta.url)).splitPathsBySizeLoader}class Cl{constructor(){Et(this,"defaultLoader","split-by-size");Et(this,"loadedIconPaths16",new Map);Et(this,"loadedIconPaths20",new Map)}static setLoaderOptions(e){e.loader!==void 0&&(_o.defaultLoader=e.loader)}static async load(e,t,r){Array.isArray(e)||(e=[e]),await Promise.all(e.map(a=>this.loadImpl(a,t,r)))}static async loadAll(e){const t=Object.values(hx);hE("[Blueprint] loading all icons",async()=>{await Promise.all([this.load(t,dn.STANDARD,e),this.load(t,dn.LARGE,e)])})}static getPaths(e,t){return this.isValidIconName(e)?(t<dn.LARGE?_o.loadedIconPaths16:_o.loadedIconPaths20).get(e):void 0}static async loadImpl(e,t,r={}){if(!this.isValidIconName(e)){console.error(`[Blueprint] Unknown icon '${e}'`);return}const a=t<dn.LARGE?_o.loadedIconPaths16:_o.loadedIconPaths20;if(a.has(e))return;const o=await pE(r);try{const c=t<dn.LARGE?dn.STANDARD:dn.LARGE,u=await o(e,c);a.set(e,u)}catch(c){console.error(`[Blueprint] Unable to load ${t}px icon '${e}'`,c)}}static isValidIconName(e){return fE.has(e)}}const _o=new Cl,mE="bp6",_v=`${mE}-icon`,xv=new Map;function gE(n){const e=xv.get(n)??0;return xv.set(n,e+1),`${n}-${e}`}const Wl=Re.forwardRef((n,e)=>{const{children:t,className:r,color:a,htmlTitle:o,iconName:c,size:u=dn.STANDARD,svgProps:d,tagName:h="span",title:m,...g}=n,x=u>=dn.LARGE?dn.LARGE:dn.STANDARD,E=`0 0 ${x} ${x}`,T=gE("iconTitle"),S={fill:a,height:u,role:"img",viewBox:E,width:u,...d};return h===null?j.jsxs("svg",{"aria-labelledby":m?T:void 0,"data-icon":c,ref:e,...S,...g,className:jn(r,d==null?void 0:d.className),children:[m&&j.jsx("title",{id:T,children:m}),t]}):Re.createElement(h,{"aria-hidden":m?void 0:!0,...g,className:jn(_v,`${_v}-${c}`,r),ref:e,title:o},j.jsxs("svg",{"data-icon":c,...S,className:d==null?void 0:d.className,children:[m&&j.jsx("title",{children:m}),t]}))});Wl.displayName="Blueprint6.SVGIconContainer";const vE=["M12 6.5c0-.28-.22-.5-.5-.5h-7a.495.495 0 0 0-.37.83l3.5 4c.09.1.22.17.37.17s.28-.07.37-.17l3.5-4c.08-.09.13-.2.13-.33"],_E=["M16 7c0-.55-.45-1-1-1H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63"],px=Re.forwardRef((n,e)=>{const r=(n.size??dn.STANDARD)>=dn.LARGE?_E:vE;return j.jsx(Wl,{iconName:"caret-down",ref:e,...n,children:r.map((a,o)=>j.jsx("path",{d:a,fillRule:"evenodd"},o))})});px.displayName="Blueprint6.Icon.CaretDownIcon";const xE=["M5 7h6a1.003 1.003 0 0 0 .71-1.71l-3-3C8.53 2.11 8.28 2 8 2s-.53.11-.71.29l-3 3A1.003 1.003 0 0 0 5 7m6 2H5a1.003 1.003 0 0 0-.71 1.71l3 3c.18.18.43.29.71.29s.53-.11.71-.29l3-3A1.003 1.003 0 0 0 11 9"],yE=["M5 9h10c.55 0 1-.45 1-1 0-.24-.1-.46-.24-.63l.01-.01-5-6-.01.01C10.57 1.15 10.31 1 10 1s-.57.15-.76.37l-.01-.01-5 6 .01.01C4.1 7.54 4 7.76 4 8c0 .55.45 1 1 1m10 2H5c-.55 0-1 .45-1 1 0 .24.1.46.24.63l-.01.01 5 6 .01-.01c.19.22.45.37.76.37s.57-.15.76-.37l.01.01 5-6-.01-.01c.14-.17.24-.39.24-.63 0-.55-.45-1-1-1"],mx=Re.forwardRef((n,e)=>{const r=(n.size??dn.STANDARD)>=dn.LARGE?yE:xE;return j.jsx(Wl,{iconName:"double-caret-vertical",ref:e,...n,children:r.map((a,o)=>j.jsx("path",{d:a,fillRule:"evenodd"},o))})});mx.displayName="Blueprint6.Icon.DoubleCaretVerticalIcon";const SE=["m9.41 8 2.29-2.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L8 6.59l-2.29-2.3a1.003 1.003 0 0 0-1.42 1.42L6.59 8 4.3 10.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71L8 9.41l2.29 2.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],ME=["m11.41 10 3.29-3.29c.19-.18.3-.43.3-.71a1.003 1.003 0 0 0-1.71-.71L10 8.59l-3.29-3.3a1.003 1.003 0 0 0-1.42 1.42L8.59 10 5.3 13.29c-.19.18-.3.43-.3.71a1.003 1.003 0 0 0 1.71.71l3.29-3.3 3.29 3.29c.18.19.43.3.71.3a1.003 1.003 0 0 0 .71-1.71z"],gx=Re.forwardRef((n,e)=>{const r=(n.size??dn.STANDARD)>=dn.LARGE?ME:SE;return j.jsx(Wl,{iconName:"small-cross",ref:e,...n,children:r.map((a,o)=>j.jsx("path",{d:a,fillRule:"evenodd"},o))})});gx.displayName="Blueprint6.Icon.SmallCrossIcon";const Il=Re.forwardRef((n,e)=>{const{autoLoad:t=!0,className:r,color:a,icon:o,intent:c,tagName:u="span",svgProps:d,title:h,htmlTitle:m,...g}=n,p=n.size??dn.STANDARD,[x,E]=Re.useState(()=>typeof o=="string"?Cl.getPaths(o,p):void 0);if(Re.useEffect(()=>{let T=!1;if(typeof o=="string"){const S=Cl.getPaths(o,p);S!==void 0?E(S):t?Cl.load(o,p).then(()=>{T||E(Cl.getPaths(o,p))}).catch(y=>{console.error(`[Blueprint] Icon '${o}' (${p}px) could not be loaded.`,y)}):console.error(`[Blueprint] Icon '${o}' (${p}px) is not loaded yet and autoLoad={false}, did you call Icons.load('${o}', ${p})?`)}return()=>{T=!0}},[t,o,p]),o==null||typeof o=="boolean")return null;if(typeof o!="string"){if(Re.isValidElement(o)){const T=jn(o.props.className,r,dr(c));if(XM(o)){const S={...wo(g),className:T},y=o.props.size??n.size;y!=null&&(S.size=y);const b=o.props.color??a;return b!=null&&(S.color=b),Re.cloneElement(o,S)}return Re.cloneElement(o,{className:T})}return o}if(x==null){const T=p===dn.STANDARD?PM:p===dn.LARGE?LM:void 0;return Re.createElement(u||"span",{"aria-hidden":h?void 0:!0,...wo(g),className:jn(nm,T,DM(o),dr(c),r),"data-icon":o,ref:e,title:m})}else{const T=x.map((S,y)=>j.jsx("path",{d:S,fillRule:"evenodd"},y));return j.jsx(Wl,{children:T,className:jn(dr(c),r),color:a,htmlTitle:m,iconName:o,ref:e,size:p,svgProps:d,tagName:u,title:h,...wo(g)})}});Il.displayName=`${Xn}.Icon`;var pa;(function(n){n[n.SMALL=20]="SMALL",n[n.STANDARD=50]="STANDARD",n[n.LARGE=100]="LARGE"})(pa||(pa={}));const Ps=45,yv=`M 50,50 m 0,-${Ps} a ${Ps},${Ps} 0 1 1 0,${Ps*2} a ${Ps},${Ps} 0 1 1 0,-${Ps*2}`,dl=280,EE=10,wE=4,TE=16,vx=n=>{const{className:e="",intent:t,value:r,tagName:a="div",size:o,...c}=n;eE(()=>{const g=o!=null,p=e.indexOf(Yu)>=0||e.indexOf(bo)>=0;g&&p&&console.warn(BM)},[e,o]);const u=AE(o,e),d=Math.min(TE,wE*pa.LARGE/u),h=dl-dl*(r==null?.25:rm(r,0,1)),m=jn(uf,dr(t),{[bM]:r!=null},e);return Re.createElement(a,{"aria-label":"loading","aria-valuemax":100,"aria-valuemin":0,"aria-valuenow":r===void 0?void 0:r*100,className:m,role:"progressbar",...c},Re.createElement(a,{className:TM},j.jsxs("svg",{width:u,height:u,strokeWidth:d.toFixed(2),viewBox:bE(d),children:[j.jsx("path",{className:CM,d:yv}),j.jsx("path",{className:AM,d:yv,pathLength:dl,strokeDasharray:`${dl} ${dl}`,strokeDashoffset:h})]})))};vx.displayName=`${Xn}.Spinner`;const AE=(n,e)=>n==null?e.indexOf(Yu)>=0?pa.SMALL:e.indexOf(bo)>=0?pa.LARGE:pa.STANDARD:Math.max(EE,n),bE=n=>{const e=Ps+n/2,t=(50-e).toFixed(2),r=(e*2).toFixed(2);return`${t} ${t} ${r} ${r}`},CE=UM()?Re.useLayoutEffect:Re.useEffect,om=Re.forwardRef(({children:n,tagName:e="div",title:t,className:r,ellipsize:a=!1,...o},c)=>{const u=Re.useRef(),d=Re.useMemo(()=>sm(u,c),[c]),[h,m]=Re.useState(""),[g,p]=Re.useState();return CE(()=>{var x;((x=u.current)==null?void 0:x.textContent)!=null&&(p(a&&u.current.scrollWidth>u.current.clientWidth),m(u.current.textContent))},[u,n,a]),Re.createElement(e,{...o,className:jn({[dM]:a},r),ref:d,title:t??(g?h:void 0)},n)});om.displayName=`${Xn}.Text`;const Ri=Re.forwardRef((n,e)=>{const t=_x(n,e);return j.jsx("button",{type:"button",...wo(n),...t,children:xx(n)})});Ri.displayName=`${Xn}.Button`;const RE=Re.forwardRef((n,e)=>{const{href:t}=n,r=_x(n,e,{defaultTabIndex:0,disabledTabIndex:-1});return j.jsx("a",{role:"button",...wo(n),...r,"aria-disabled":r.disabled,href:r.disabled?void 0:t,children:xx(n)})});RE.displayName=`${Xn}.AnchorButton`;function _x(n,e,t){const{alignText:r,fill:a,large:o,loading:c=!1,minimal:u,outlined:d,size:h="medium",small:m,variant:g="solid"}=n,p=n.disabled||c,[x,E]=cx(!p,n,e,t),T=jn(cf,{[em]:x,[lf]:p,[Fl]:a,[uM]:c},im(r),dr(n.intent),ff(h,{large:o,small:m}),sx(g,{minimal:u,outlined:d}),n.className);return{...E,className:T,disabled:p}}function xx(n){const{children:e,ellipsizeText:t,endIcon:r,icon:a,loading:o,rightIcon:c,text:u,textClassName:d}=n,h=!ju(u)||!ju(e);return j.jsxs(j.Fragment,{children:[o&&j.jsx(vx,{className:pM,size:pa.SMALL}),j.jsx(Il,{icon:a}),h&&j.jsxs(om,{className:jn(mM,d),ellipsize:t,tagName:"span",children:[u,e]}),j.jsx(Il,{icon:r??c})]})}const Iu=Re.forwardRef((n,e)=>{const{alignText:t,className:r,fill:a,minimal:o,outlined:c,large:u,size:d="medium",variant:h="solid",vertical:m,...g}=n,p=jn(hM,{[Fl]:a,[Q_]:m},im(t),ff(d,{large:u}),sx(h,{minimal:o,outlined:c}),r);return j.jsx("div",{...g,ref:e,className:p,children:n.children})});Iu.displayName=`${Xn}.ButtonGroup`;const df=Re.forwardRef((n,e)=>{const{alignIndicator:t,children:r,className:a,indicatorChildren:o,inline:c,inputRef:u,label:d,labelElement:h,large:m,size:g="medium",style:p,type:x,typeClassName:E,tagName:T="label",...S}=n,y=jn(tm,E,{[lf]:S.disabled,[lM]:c},im(t),ff(g,{large:m}),a);return Re.createElement(T,{className:y,ref:e,style:p},j.jsx("input",{className:vM,...S,ref:u,type:x}),j.jsx("span",{className:ex,children:o}),d,h,r)});df.displayName=`${Xn}.Control`;const jr=Re.forwardRef((n,e)=>{const{innerLabelChecked:t,innerLabel:r,...a}=n,o=r||t?[j.jsx("div",{className:uv,children:j.jsx("div",{className:fv,children:t||r})},"checked"),j.jsx("div",{className:uv,children:j.jsx("div",{className:fv,children:r})},"unchecked")]:null;return j.jsx(df,{...a,indicatorChildren:o,ref:e,type:"checkbox",typeClassName:tx})});jr.displayName=`${Xn}.Switch`;const PE=Re.forwardRef((n,e)=>j.jsx(df,{...n,ref:e,type:"radio",typeClassName:xM}));PE.displayName=`${Xn}.Radio`;const LE=Re.forwardRef((n,e)=>{const{defaultIndeterminate:t,indeterminate:r,onChange:a,...o}=n,[c,u]=Re.useState(r||t||!1),d=Re.useRef(null),h=sm(n.inputRef,d),m=Re.useCallback(g=>{r===void 0&&u(g.target.indeterminate),a==null||a(g)},[r,a]);return Re.useEffect(()=>{r!==void 0&&u(r)},[r]),Re.useEffect(()=>{d.current!=null&&(d.current.indeterminate=c)},[d,c]),j.jsx(df,{...o,inputRef:h,onChange:m,ref:e,type:"checkbox",typeClassName:_M})});LE.displayName=`${Xn}.Checkbox`;const xo=Re.forwardRef((n,e)=>{const{className:t,children:r,disabled:a,fill:o,iconName:c="double-caret-vertical",iconProps:u,large:d,minimal:h,options:m=[],value:g,...p}=n,x=jn(gM,{[lf]:a,[Fl]:o,[bo]:d,[qu]:h},t),E="Open dropdown",T=c==="double-caret-vertical"?j.jsx(mx,{title:E,...u}):j.jsx(px,{title:E,...u}),S=m.map(y=>{const b=typeof y=="object"?y:{value:y};return Re.createElement("option",{...b,key:b.value,children:b.label||b.value})});return j.jsxs("div",{className:x,children:[j.jsxs("select",{disabled:a,ref:e,value:g,...p,multiple:!1,children:[S,r]}),T]})});xo.displayName=`${Xn}.HTMLSelect`;const Sv={START:"start",END:"end"},yx={PUSH:"push",NONE:"none"};function ku(n){return`${(n*100).toFixed(2)}%`}function Mv(n,e,t,r){const a=e<t?1:-1;for(let o=e;o!==t+a;o+=a)n[o]=r}function DE(n,e){if(n.length===0)return;let t=n[0],r=e(t);for(let a=1;a<n.length;a++){const o=n[a],c=e(o);c<r&&(t=o,r=c)}return t}const NE=["max","min","stepSize","tickSize","value"];class Sx extends am{constructor(){super(...arguments);Et(this,"state",{isMoving:!1});Et(this,"handleElement",null);Et(this,"refHandlers",{handle:t=>this.handleElement=t});Et(this,"beginHandleMovement",t=>{document.addEventListener("mousemove",this.handleHandleMovement),document.addEventListener("mouseup",this.endHandleMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.mouseEventClientOffset(t)))});Et(this,"beginHandleTouchMovement",t=>{document.addEventListener("touchmove",this.handleHandleTouchMovement),document.addEventListener("touchend",this.endHandleTouchMovement),document.addEventListener("touchcancel",this.endHandleTouchMovement),this.setState({isMoving:!0}),this.changeValue(this.clientToValue(this.touchEventClientOffset(t)))});Et(this,"getStyleProperties",()=>{if(this.handleElement==null)return{};const{min:t=0,tickSizeRatio:r,value:a,vertical:o}=this.props,{handleMidpoint:c}=this.getHandleMidpointAndOffset(this.handleElement,!0),u=(a-t)*r,d=`calc(${ku(u)} - ${c}px)`;return o?{bottom:d}:{left:d}});Et(this,"endHandleMovement",t=>{this.handleMoveEndedAt(this.mouseEventClientOffset(t))});Et(this,"endHandleTouchMovement",t=>{this.handleMoveEndedAt(this.touchEventClientOffset(t))});Et(this,"handleMoveEndedAt",t=>{var a,o;this.removeDocumentEventListeners(),this.setState({isMoving:!1});const r=this.changeValue(this.clientToValue(t));(o=(a=this.props).onRelease)==null||o.call(a,r)});Et(this,"handleHandleMovement",t=>{this.handleMovedTo(this.mouseEventClientOffset(t))});Et(this,"handleHandleTouchMovement",t=>{this.handleMovedTo(this.touchEventClientOffset(t))});Et(this,"handleMovedTo",t=>{this.state.isMoving&&!this.props.disabled&&this.changeValue(this.clientToValue(t))});Et(this,"handleKeyDown",t=>{const{stepSize:r,value:a}=this.props,o=YM(t,["ArrowLeft","ArrowDown"],["ArrowRight","ArrowUp"]);o!==void 0&&(this.changeValue(a+r*o),t.preventDefault())});Et(this,"handleKeyUp",t=>{var r,a;qM(t)&&((a=(r=this.props).onRelease)==null||a.call(r,this.props.value))})}componentDidMount(){this.forceUpdate()}render(){const{className:t,disabled:r,label:a,min:o,max:c,value:u,vertical:d,htmlProps:h}=this.props,{isMoving:m}=this.state;return j.jsx("span",{role:"slider",tabIndex:0,...h,className:jn(nx,{[em]:m},t),onKeyDown:r?void 0:this.handleKeyDown,onKeyUp:r?void 0:this.handleKeyUp,onMouseDown:r?void 0:this.beginHandleMovement,onTouchStart:r?void 0:this.beginHandleTouchMovement,ref:this.refHandlers.handle,style:this.getStyleProperties(),"aria-valuemin":o,"aria-valuemax":c,"aria-valuenow":u,"aria-disabled":r,"aria-orientation":d?"vertical":"horizontal",children:a==null?null:j.jsx("span",{className:ix,children:a})})}componentWillUnmount(){this.removeDocumentEventListeners()}clientToValue(t){const{stepSize:r,tickSize:a,value:o,vertical:c}=this.props;if(this.handleElement==null)return o;const u=c?window.innerHeight-t:t,d=this.getHandleElementCenterPixel(this.handleElement),h=u-d;return isNaN(h)?o:o+Math.round(h/(a*r))*r}mouseEventClientOffset(t){return this.props.vertical?t.clientY:t.clientX}touchEventClientOffset(t){const r=t.changedTouches[0];return this.props.vertical?r.clientY:r.clientX}validateProps(t){for(const r of NE)if(typeof t[r]!="number")throw new Error(`[Blueprint] <Handle> requires number value for ${r} prop`)}changeValue(t,r=this.props.onChange){return t=this.clamp(t),!isNaN(t)&&this.props.value!==t&&(r==null||r(t)),t}clamp(t){return rm(t,this.props.min,this.props.max)}getHandleElementCenterPixel(t){const{handleMidpoint:r,handleOffset:a}=this.getHandleMidpointAndOffset(t);return a+r}getHandleMidpointAndOffset(t,r=!1){if(t==null)return{handleMidpoint:0,handleOffset:0};const{vertical:a}=this.props,o=t.getBoundingClientRect();o.width=t.offsetWidth,o.height=t.offsetHeight;const c=a?r?"width":"height":r?"height":"width",u=a?window.innerHeight-(o.top+o[c]):o.left;return{handleMidpoint:o[c]/2,handleOffset:u}}removeDocumentEventListeners(){document.removeEventListener("mousemove",this.handleHandleMovement),document.removeEventListener("mouseup",this.endHandleMovement),document.removeEventListener("touchmove",this.handleHandleTouchMovement),document.removeEventListener("touchend",this.endHandleTouchMovement),document.removeEventListener("touchcancel",this.endHandleTouchMovement)}}Et(Sx,"displayName",`${Xn}.SliderHandle`);const Co=()=>null;Co.displayName=`${Xn}.MultiSliderHandle`;const Ds=class Ds extends am{constructor(){super(...arguments);Et(this,"state",{labelPrecision:UE(this.props),tickSize:0,tickSizeRatio:0});Et(this,"handleElements",[]);Et(this,"trackElement",null);Et(this,"addHandleRef",t=>{t!=null&&this.handleElements.push(t)});Et(this,"maybeHandleTrackClick",t=>{if(this.canHandleTrackEvent(t)){const r=this.nearestHandleForValue(this.handleElements,a=>a.mouseEventClientOffset(t));r&&r.beginHandleMovement(t)}});Et(this,"maybeHandleTrackTouch",t=>{if(this.canHandleTrackEvent(t)){const r=this.nearestHandleForValue(this.handleElements,a=>a.touchEventClientOffset(t));r&&r.beginHandleTouchMovement(t)}});Et(this,"canHandleTrackEvent",t=>{const r=t.target;return!this.props.disabled&&r.closest(`.${nx}`)==null});Et(this,"getHandlerForIndex",(t,r)=>a=>{r==null||r(this.getNewHandleValues(a,t))});Et(this,"handleChange",t=>{var o,c;const r=ea(this.props),a=r.map(u=>u.value);NM(t,a)||((c=(o=this.props).onChange)==null||c.call(o,t),r.forEach((u,d)=>{var h;a[d]!==t[d]&&((h=u.onChange)==null||h.call(u,t[d]))}))});Et(this,"handleRelease",t=>{var a,o;const r=ea(this.props);(o=(a=this.props).onRelease)==null||o.call(a,t),r.forEach((c,u)=>{var d;(d=c.onRelease)==null||d.call(c,t[u])})})}static getDerivedStateFromProps(t){return{labelPrecision:Ds.getLabelPrecision(t)}}static getLabelPrecision({labelPrecision:t,stepSize:r}){return t??ox(r)}getSnapshotBeforeUpdate(t){const r=ea(t);return ea(this.props).length!==r.length&&(this.handleElements=[]),null}render(){const t=jn(ma,{[lf]:this.props.disabled,[`${ma}-unlabeled`]:this.props.labelRenderer===!1,[Q_]:this.props.vertical},this.props.className);return j.jsxs("div",{className:t,onMouseDown:this.maybeHandleTrackClick,onTouchStart:this.maybeHandleTrackTouch,children:[j.jsx("div",{className:SM,ref:r=>this.trackElement=r,children:this.renderTracks()}),j.jsx("div",{className:yM,children:this.renderLabels()}),this.renderHandles()]})}componentDidMount(){this.updateTickSize()}componentDidUpdate(t,r){super.componentDidUpdate(t,r),(t.min!==this.props.min||t.max!==this.props.max||t.vertical!==this.props.vertical)&&this.updateTickSize()}validateProps(t){if(t.stepSize<=0)throw new Error(OM);if(t.labelStepSize!==void 0&&t.labelValues!==void 0)throw new Error(VM);if(t.labelStepSize!==void 0&&t.labelStepSize<=0)throw new Error(IM);if(t.min!==void 0&&!isFinite(t.min))throw new Error(kM);if(t.max!==void 0&&!isFinite(t.max))throw new Error(zM);let r=!1;if(Re.Children.forEach(t.children,a=>{a&&!lx(a,Co)&&(r=!0)}),r)throw new Error(HM)}formatLabel(t,r=!1){const{labelRenderer:a}=this.props;if(a!==!1)return ax(a)?a(t,{isHandleTooltip:r}):t.toFixed(this.state.labelPrecision)}renderLabels(){if(this.props.labelRenderer===!1)return null;const t=this.getLabelValues(),{max:r,min:a}=this.props;return t.map((c,u)=>{const d=ku((c-a)/(r-a)),h=this.props.vertical?{bottom:d}:{left:d};return j.jsx("div",{className:ix,style:h,children:this.formatLabel(c)},u)})}renderTracks(){const t=Mx(this.props);t.push({value:this.props.max});let r={value:this.props.min};const a=[];for(let o=0;o<t.length;o++){const c=t[o];a.push(this.renderTrackFill(o,r,c)),r=c}return a}renderTrackFill(t,r,a){const[o,c]=[this.getOffsetRatio(r.value),this.getOffsetRatio(a.value)].sort((p,x)=>p-x),u=ku(o),d=ku(1-c),m={...this.props.vertical?{bottom:u,left:0,top:d}:{left:u,right:d,top:0},...r.trackStyleAfter||a.trackStyleBefore||{}},g=jn(MM,dr(this.getTrackIntent(r,a)));return j.jsx("div",{className:g,style:m},`track-${t}`)}renderHandles(){const{disabled:t,max:r,min:a,stepSize:o,vertical:c}=this.props,u=ea(this.props);return u.length===0?null:u.map(({value:d,type:h,className:m,htmlProps:g},p)=>j.jsx(Sx,{htmlProps:g,className:jn({[EM]:h===Sv.START,[wM]:h===Sv.END},m),disabled:t,label:this.formatLabel(d,!0),max:r,min:a,onChange:this.getHandlerForIndex(p,this.handleChange),onRelease:this.getHandlerForIndex(p,this.handleRelease),ref:this.addHandleRef,stepSize:o,tickSize:this.state.tickSize,tickSizeRatio:this.state.tickSizeRatio,value:d,vertical:c},`${p}-${u.length}`))}nearestHandleForValue(t,r){return DE(t,a=>{const o=r(a),c=a.clientToValue(o),u=a.props.value;return Math.abs(c-u)})}getNewHandleValues(t,r){const o=ea(this.props).map(h=>h.value),c=o.slice();c[r]=t,c.sort((h,m)=>h-m);const u=c.indexOf(t),d=this.findFirstLockedHandleIndex(r,u);if(d===-1)Mv(c,r,u,t);else{const h=o[d];return Mv(o,r,d,h),o}return c}findFirstLockedHandleIndex(t,r){const a=t<r?1:-1,o=ea(this.props);for(let c=t+a;c!==r+a;c+=a)if(o[c].interactionKind!==yx.PUSH)return c;return-1}getLabelValues(){const{labelStepSize:t,labelValues:r,min:a,max:o}=this.props;let c=[];if(r!==void 0)c=r.slice();else for(let u=a;u<o||GM(u,o);u+=t??1)c.push(u);return c}getOffsetRatio(t){return rm((t-this.props.min)*this.state.tickSizeRatio,0,1)}getTrackIntent(t,r){return this.props.showTrackFill?t.intentAfter!==void 0?t.intentAfter:r!==void 0&&r.intentBefore!==void 0?r.intentBefore:this.props.defaultTrackIntent:Os.NONE}updateTickSize(){if(this.trackElement!=null){const t=this.props.vertical?this.trackElement.clientHeight:this.trackElement.clientWidth,r=1/(this.props.max-this.props.min),a=t*r;this.setState({tickSize:a,tickSizeRatio:r})}}};Et(Ds,"defaultSliderProps",{disabled:!1,max:10,min:0,showTrackFill:!0,stepSize:1,vertical:!1}),Et(Ds,"defaultProps",{...Ds.defaultSliderProps,defaultTrackIntent:Os.NONE}),Et(Ds,"displayName",`${Xn}.MultiSlider`),Et(Ds,"Handle",Co);let kl=Ds;function UE({labelPrecision:n,stepSize:e=kl.defaultSliderProps.stepSize}){return n??ox(e)}function ea(n){return Mx(n,e=>e.interactionKind!==yx.NONE)}function Mx({children:n},e=()=>!0){const t=Re.Children.map(n,a=>lx(a,Co)&&e(a.props)?a.props:null);let r=t??[];return r=r.filter(a=>a!==null),r.sort((a,o)=>a.value-o.value),r}class fa extends am{render(){const{initialValue:e,intent:t,value:r,onChange:a,onRelease:o,handleHtmlProps:c,...u}=this.props;return j.jsxs(kl,{...u,children:[j.jsx(Co,{value:r,intentAfter:r<e?t:void 0,intentBefore:r>e?t:void 0,onChange:a,onRelease:o,htmlProps:c}),j.jsx(Co,{value:e,interactionKind:"none"})]})}}Et(fa,"defaultProps",{...kl.defaultSliderProps,initialValue:0,intent:Os.PRIMARY,value:0}),Et(fa,"displayName",`${Xn}.Slider`);const Ex=n=>{const{className:e,large:t,onRemove:r,size:a,tabIndex:o}=n,c=t||a==="large"||(e==null?void 0:e.includes(bo)),u=Re.useCallback(d=>{r==null||r(d,n)},[r,n]);return j.jsx("button",{"aria-label":"Remove tag",type:"button",className:RM,onClick:u,tabIndex:o,children:j.jsx(gx,{size:c?dn.LARGE:dn.STANDARD})})};Ex.displayName=`${Xn}.TagRemoveButton`;const Zh=Re.forwardRef((n,e)=>{const{children:t,className:r,endIcon:a,fill:o=!1,icon:c,intent:u,interactive:d,large:h=!1,minimal:m=!1,multiline:g,onRemove:p,rightIcon:x,round:E=!1,size:T="medium",tabIndex:S=0,htmlTitle:y,...b}=n,D=ax(p),w=d??b.onClick!=null,[C,P]=cx(w,n,e,{defaultTabIndex:0,disabledTabIndex:void 0}),F=jn(rx,dr(u),ff(T,{large:h}),{[em]:C,[Fl]:o,[cM]:w,[qu]:m,[fM]:E},r);return j.jsxs("span",{...wo(b),...P,className:F,role:w?"button":void 0,children:[j.jsx(Il,{icon:c}),!ju(t)&&j.jsx(om,{className:Fl,ellipsize:!g,tagName:"span",title:y,children:t}),j.jsx(Il,{icon:a??x}),D&&j.jsx(Ex,{...n})]})});Zh.displayName=`${Xn}.Tag`;/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const Xl="186",Jr={ROTATE:0,DOLLY:1,PAN:2},So={ROTATE:0,PAN:1,DOLLY_PAN:2,DOLLY_ROTATE:3},FE=0,Ev=1,OE=2,zu=1,IE=2,Rl=3,ts=0,hi=1,Li=2,Qr=0,Nl=1,wv=2,Tv=3,Av=4,kE=5,yo=100,zE=101,HE=102,VE=103,BE=104,GE=200,WE=201,XE=202,$E=203,wx=204,Tx=205,qE=206,YE=207,jE=208,KE=209,ZE=210,JE=211,QE=212,ew=213,tw=214,Jh=0,Qh=1,ep=2,zl=3,tp=4,np=5,ip=6,rp=7,Ax=0,nw=1,iw=2,br=0,bx=1,Cx=2,Rx=3,Px=4,Lx=5,Dx=6,Nx=7,Ux=300,ga=301,Ro=302,eh=303,th=304,hf=306,sp=1e3,Zr=1001,ap=1002,Yn=1003,rw=1004,Yc=1005,ii=1006,nh=1007,da=1008,Di=1009,Fx=1010,Ox=1011,Hl=1012,lm=1013,Cr=1014,Tr=1015,Rr=1016,cm=1017,um=1018,Vl=1020,Ix=35902,kx=35899,zx=1021,Hx=1022,fr=1023,ns=1026,ha=1027,Vx=1028,fm=1029,va=1030,dm=1031,hm=1033,Hu=33776,Vu=33777,Bu=33778,Gu=33779,op=35840,lp=35841,cp=35842,up=35843,fp=36196,dp=37492,hp=37496,pp=37488,mp=37489,Ku=37490,gp=37491,vp=37808,_p=37809,xp=37810,yp=37811,Sp=37812,Mp=37813,Ep=37814,wp=37815,Tp=37816,Ap=37817,bp=37818,Cp=37819,Rp=37820,Pp=37821,Lp=36492,Dp=36494,Np=36495,Up=36283,Fp=36284,Zu=36285,Op=36286,sw=3200,Ip=0,aw=1,Ns="",Pi="srgb",Ju="srgb-linear",Qu="linear",Kt="srgb",ih=7680,ow=519,lw=512,cw=513,uw=514,pm=515,fw=516,dw=517,mm=518,hw=519,Bx=35044,bv="300 es",Ar=2e3,Bl=2001;function pw(n){for(let e=n.length-1;e>=0;--e)if(n[e]>=65535)return!0;return!1}function ef(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function mw(){const n=ef("canvas");return n.style.display="block",n}const Cv={};function tf(...n){const e="THREE."+n.shift();console.log(e,...n)}function Gx(n){const e=n[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=n[1];t&&t.isStackTrace?n[0]+=" "+t.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function St(...n){n=Gx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...n)}}function zt(...n){n=Gx(n);const e="THREE."+n.shift();{const t=n[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...n)}}function To(...n){const e=n.join(" ");e in Cv||(Cv[e]=!0,St(...n))}function gw(n,e,t){return new Promise(function(r,a){function o(){switch(n.clientWaitSync(e,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:a();break;case n.TIMEOUT_EXPIRED:setTimeout(o,t);break;default:r()}}setTimeout(o,t)})}const vw={[Jh]:Qh,[ep]:ip,[tp]:rp,[zl]:np,[Qh]:Jh,[ip]:ep,[rp]:tp,[np]:zl};class Hs{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const r=this._listeners;r[e]===void 0&&(r[e]=[]),r[e].indexOf(t)===-1&&r[e].push(t)}hasEventListener(e,t){const r=this._listeners;return r===void 0?!1:r[e]!==void 0&&r[e].indexOf(t)!==-1}removeEventListener(e,t){const r=this._listeners;if(r===void 0)return;const a=r[e];if(a!==void 0){const o=a.indexOf(t);o!==-1&&a.splice(o,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const r=t[e.type];if(r!==void 0){e.target=this;const a=r.slice(0);for(let o=0,c=a.length;o<c;o++)a[o].call(this,e);e.target=null}}}const ti=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Wu=Math.PI/180,kp=180/Math.PI;function Fs(){const n=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,r=Math.random()*4294967295|0;return(ti[n&255]+ti[n>>8&255]+ti[n>>16&255]+ti[n>>24&255]+"-"+ti[e&255]+ti[e>>8&255]+"-"+ti[e>>16&15|64]+ti[e>>24&255]+"-"+ti[t&63|128]+ti[t>>8&255]+"-"+ti[t>>16&255]+ti[t>>24&255]+ti[r&255]+ti[r>>8&255]+ti[r>>16&255]+ti[r>>24&255]).toLowerCase()}function Tt(n,e,t){return Math.max(e,Math.min(t,n))}function _w(n,e){return(n%e+e)%e}function rh(n,e,t){return(1-t)*n+t*e}function wr(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qt(n,e){switch(e.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}const xw={DEG2RAD:Wu},Dm=class Dm{constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,r=this.y,a=e.elements;return this.x=a[0]*t+a[3]*r+a[6],this.y=a[1]*t+a[4]*r+a[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y;return t*t+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const r=Math.cos(t),a=Math.sin(t),o=this.x-e.x,c=this.y-e.y;return this.x=o*r-c*a+e.x,this.y=o*a+c*r+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}};Dm.prototype.isVector2=!0;let st=Dm;class Is{constructor(e=0,t=0,r=0,a=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=r,this._w=a}static slerpFlat(e,t,r,a,o,c,u){let d=r[a+0],h=r[a+1],m=r[a+2],g=r[a+3],p=o[c+0],x=o[c+1],E=o[c+2],T=o[c+3];if(g!==T||d!==p||h!==x||m!==E){let S=d*p+h*x+m*E+g*T;S<0&&(p=-p,x=-x,E=-E,T=-T,S=-S);let y=1-u;if(S<.9995){const b=Math.acos(S),D=Math.sin(b);y=Math.sin(y*b)/D,u=Math.sin(u*b)/D,d=d*y+p*u,h=h*y+x*u,m=m*y+E*u,g=g*y+T*u}else{d=d*y+p*u,h=h*y+x*u,m=m*y+E*u,g=g*y+T*u;const b=1/Math.sqrt(d*d+h*h+m*m+g*g);d*=b,h*=b,m*=b,g*=b}}e[t]=d,e[t+1]=h,e[t+2]=m,e[t+3]=g}static multiplyQuaternionsFlat(e,t,r,a,o,c){const u=r[a],d=r[a+1],h=r[a+2],m=r[a+3],g=o[c],p=o[c+1],x=o[c+2],E=o[c+3];return e[t]=u*E+m*g+d*x-h*p,e[t+1]=d*E+m*p+h*g-u*x,e[t+2]=h*E+m*x+u*p-d*g,e[t+3]=m*E-u*g-d*p-h*x,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,r,a){return this._x=e,this._y=t,this._z=r,this._w=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const r=e._x,a=e._y,o=e._z,c=e._order,u=Math.cos,d=Math.sin,h=u(r/2),m=u(a/2),g=u(o/2),p=d(r/2),x=d(a/2),E=d(o/2);switch(c){case"XYZ":this._x=p*m*g+h*x*E,this._y=h*x*g-p*m*E,this._z=h*m*E+p*x*g,this._w=h*m*g-p*x*E;break;case"YXZ":this._x=p*m*g+h*x*E,this._y=h*x*g-p*m*E,this._z=h*m*E-p*x*g,this._w=h*m*g+p*x*E;break;case"ZXY":this._x=p*m*g-h*x*E,this._y=h*x*g+p*m*E,this._z=h*m*E+p*x*g,this._w=h*m*g-p*x*E;break;case"ZYX":this._x=p*m*g-h*x*E,this._y=h*x*g+p*m*E,this._z=h*m*E-p*x*g,this._w=h*m*g+p*x*E;break;case"YZX":this._x=p*m*g+h*x*E,this._y=h*x*g+p*m*E,this._z=h*m*E-p*x*g,this._w=h*m*g-p*x*E;break;case"XZY":this._x=p*m*g-h*x*E,this._y=h*x*g-p*m*E,this._z=h*m*E+p*x*g,this._w=h*m*g+p*x*E;break;default:St("Quaternion: .setFromEuler() encountered an unknown order: "+c)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const r=t/2,a=Math.sin(r);return this._x=e.x*a,this._y=e.y*a,this._z=e.z*a,this._w=Math.cos(r),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,r=t[0],a=t[4],o=t[8],c=t[1],u=t[5],d=t[9],h=t[2],m=t[6],g=t[10],p=r+u+g;if(p>0){const x=.5/Math.sqrt(p+1);this._w=.25/x,this._x=(m-d)*x,this._y=(o-h)*x,this._z=(c-a)*x}else if(r>u&&r>g){const x=2*Math.sqrt(1+r-u-g);this._w=(m-d)/x,this._x=.25*x,this._y=(a+c)/x,this._z=(o+h)/x}else if(u>g){const x=2*Math.sqrt(1+u-r-g);this._w=(o-h)/x,this._x=(a+c)/x,this._y=.25*x,this._z=(d+m)/x}else{const x=2*Math.sqrt(1+g-r-u);this._w=(c-a)/x,this._x=(o+h)/x,this._y=(d+m)/x,this._z=.25*x}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let r=e.dot(t)+1;return r<1e-8?(r=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=r):(this._x=0,this._y=-e.z,this._z=e.y,this._w=r)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=r),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(Tt(this.dot(e),-1,1)))}rotateTowards(e,t){const r=this.angleTo(e);if(r===0)return this;const a=Math.min(1,t/r);return this.slerp(e,a),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const r=e._x,a=e._y,o=e._z,c=e._w,u=t._x,d=t._y,h=t._z,m=t._w;return this._x=r*m+c*u+a*h-o*d,this._y=a*m+c*d+o*u-r*h,this._z=o*m+c*h+r*d-a*u,this._w=c*m-r*u-a*d-o*h,this._onChangeCallback(),this}slerp(e,t){let r=e._x,a=e._y,o=e._z,c=e._w,u=this.dot(e);u<0&&(r=-r,a=-a,o=-o,c=-c,u=-u);let d=1-t;if(u<.9995){const h=Math.acos(u),m=Math.sin(h);d=Math.sin(d*h)/m,t=Math.sin(t*h)/m,this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this._onChangeCallback()}else this._x=this._x*d+r*t,this._y=this._y*d+a*t,this._z=this._z*d+o*t,this._w=this._w*d+c*t,this.normalize();return this}slerpQuaternions(e,t,r){return this.copy(e).slerp(t,r)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),r=Math.random(),a=Math.sqrt(1-r),o=Math.sqrt(r);return this.set(a*Math.sin(e),a*Math.cos(e),o*Math.sin(t),o*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}const Nm=class Nm{constructor(e=0,t=0,r=0){this.x=e,this.y=t,this.z=r}set(e,t,r){return r===void 0&&(r=this.z),this.x=e,this.y=t,this.z=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(Rv.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(Rv.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[3]*r+o[6]*a,this.y=o[1]*t+o[4]*r+o[7]*a,this.z=o[2]*t+o[5]*r+o[8]*a,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=e.elements,c=1/(o[3]*t+o[7]*r+o[11]*a+o[15]);return this.x=(o[0]*t+o[4]*r+o[8]*a+o[12])*c,this.y=(o[1]*t+o[5]*r+o[9]*a+o[13])*c,this.z=(o[2]*t+o[6]*r+o[10]*a+o[14])*c,this}applyQuaternion(e){const t=this.x,r=this.y,a=this.z,o=e.x,c=e.y,u=e.z,d=e.w,h=2*(c*a-u*r),m=2*(u*t-o*a),g=2*(o*r-c*t);return this.x=t+d*h+c*g-u*m,this.y=r+d*m+u*h-o*g,this.z=a+d*g+o*m-c*h,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,r=this.y,a=this.z,o=e.elements;return this.x=o[0]*t+o[4]*r+o[8]*a,this.y=o[1]*t+o[5]*r+o[9]*a,this.z=o[2]*t+o[6]*r+o[10]*a,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const r=e.x,a=e.y,o=e.z,c=t.x,u=t.y,d=t.z;return this.x=a*d-o*u,this.y=o*c-r*d,this.z=r*u-a*c,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const r=e.dot(this)/t;return this.copy(e).multiplyScalar(r)}projectOnPlane(e){return sh.copy(this).projectOnVector(e),this.sub(sh)}reflect(e){return this.sub(sh.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const r=this.dot(e)/t;return Math.acos(Tt(r,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,r=this.y-e.y,a=this.z-e.z;return t*t+r*r+a*a}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,r){const a=Math.sin(t)*e;return this.x=a*Math.sin(r),this.y=Math.cos(t)*e,this.z=a*Math.cos(r),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,r){return this.x=e*Math.sin(t),this.y=r,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),r=this.setFromMatrixColumn(e,1).length(),a=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=r,this.z=a,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,r=Math.sqrt(1-t*t);return this.x=r*Math.cos(e),this.y=t,this.z=r*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}};Nm.prototype.isVector3=!0;let G=Nm;const sh=new G,Rv=new Is,Um=class Um{constructor(e,t,r,a,o,c,u,d,h){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,c,u,d,h)}set(e,t,r,a,o,c,u,d,h){const m=this.elements;return m[0]=e,m[1]=a,m[2]=u,m[3]=t,m[4]=o,m[5]=d,m[6]=r,m[7]=c,m[8]=h,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],this}extractBasis(e,t,r){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),r.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,c=r[0],u=r[3],d=r[6],h=r[1],m=r[4],g=r[7],p=r[2],x=r[5],E=r[8],T=a[0],S=a[3],y=a[6],b=a[1],D=a[4],w=a[7],C=a[2],P=a[5],F=a[8];return o[0]=c*T+u*b+d*C,o[3]=c*S+u*D+d*P,o[6]=c*y+u*w+d*F,o[1]=h*T+m*b+g*C,o[4]=h*S+m*D+g*P,o[7]=h*y+m*w+g*F,o[2]=p*T+x*b+E*C,o[5]=p*S+x*D+E*P,o[8]=p*y+x*w+E*F,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8];return t*c*m-t*u*h-r*o*m+r*u*d+a*o*h-a*c*d}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],g=m*c-u*h,p=u*d-m*o,x=h*o-c*d,E=t*g+r*p+a*x;if(E===0)return this.set(0,0,0,0,0,0,0,0,0);const T=1/E;return e[0]=g*T,e[1]=(a*h-m*r)*T,e[2]=(u*r-a*c)*T,e[3]=p*T,e[4]=(m*t-a*d)*T,e[5]=(a*o-u*t)*T,e[6]=x*T,e[7]=(r*d-h*t)*T,e[8]=(c*t-r*o)*T,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,r,a,o,c,u){const d=Math.cos(o),h=Math.sin(o);return this.set(r*d,r*h,-r*(d*c+h*u)+c+e,-a*h,a*d,-a*(-h*c+d*u)+u+t,0,0,1),this}scale(e,t){return To("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(ah.makeScale(e,t)),this}rotate(e){return To("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(ah.makeRotation(-e)),this}translate(e,t){return To("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(ah.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,r,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<9;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<9;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e}clone(){return new this.constructor().fromArray(this.elements)}};Um.prototype.isMatrix3=!0;let wt=Um;const ah=new wt,Pv=new wt().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),Lv=new wt().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function yw(){const n={enabled:!0,workingColorSpace:Ju,spaces:{},convert:function(a,o,c){return this.enabled===!1||o===c||!o||!c||(this.spaces[o].transfer===Kt&&(a.r=es(a.r),a.g=es(a.g),a.b=es(a.b)),this.spaces[o].primaries!==this.spaces[c].primaries&&(a.applyMatrix3(this.spaces[o].toXYZ),a.applyMatrix3(this.spaces[c].fromXYZ)),this.spaces[c].transfer===Kt&&(a.r=Ao(a.r),a.g=Ao(a.g),a.b=Ao(a.b))),a},workingToColorSpace:function(a,o){return this.convert(a,this.workingColorSpace,o)},colorSpaceToWorking:function(a,o){return this.convert(a,o,this.workingColorSpace)},getPrimaries:function(a){return this.spaces[a].primaries},getTransfer:function(a){return a===Ns?Qu:this.spaces[a].transfer},getToneMappingMode:function(a){return this.spaces[a].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(a,o=this.workingColorSpace){return a.fromArray(this.spaces[o].luminanceCoefficients)},define:function(a){Object.assign(this.spaces,a)},_getMatrix:function(a,o,c){return a.copy(this.spaces[o].toXYZ).multiply(this.spaces[c].fromXYZ)},_getDrawingBufferColorSpace:function(a){return this.spaces[a].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(a=this.workingColorSpace){return this.spaces[a].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(a,o){return To("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(a,o)},toWorkingColorSpace:function(a,o){return To("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(a,o)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],r=[.3127,.329];return n.define({[Ju]:{primaries:e,whitePoint:r,transfer:Qu,toXYZ:Pv,fromXYZ:Lv,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:Pi},outputColorSpaceConfig:{drawingBufferColorSpace:Pi}},[Pi]:{primaries:e,whitePoint:r,transfer:Kt,toXYZ:Pv,fromXYZ:Lv,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:Pi}}}),n}const kt=yw();function es(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function Ao(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}let Ba;class Sw{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let r;if(e instanceof HTMLCanvasElement)r=e;else{Ba===void 0&&(Ba=ef("canvas")),Ba.width=e.width,Ba.height=e.height;const a=Ba.getContext("2d");e instanceof ImageData?a.putImageData(e,0,0):a.drawImage(e,0,0,e.width,e.height),r=Ba}return r.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=ef("canvas");t.width=e.width,t.height=e.height;const r=t.getContext("2d");r.drawImage(e,0,0,e.width,e.height);const a=r.getImageData(0,0,e.width,e.height),o=a.data;for(let c=0;c<o.length;c++)o[c]=es(o[c]/255)*255;return r.putImageData(a,0,0),t}else if(e.data){const t=e.data.slice(0);for(let r=0;r<t.length;r++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[r]=Math.floor(es(t[r]/255)*255):t[r]=es(t[r]);return{data:t,width:e.width,height:e.height}}else return St("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let Mw=0;class gm{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:Mw++}),this.uuid=Fs(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const r={uuid:this.uuid,url:""},a=this.data;if(a!==null){let o;if(Array.isArray(a)){o=[];for(let c=0,u=a.length;c<u;c++)a[c].isDataTexture?o.push(oh(a[c].image)):o.push(oh(a[c]))}else o=oh(a);r.url=o}return t||(e.images[this.uuid]=r),r}}function oh(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Sw.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(St("Texture: Unable to serialize Texture."),{})}let Ew=0;const lh=new G;class si extends Hs{constructor(e=si.DEFAULT_IMAGE,t=si.DEFAULT_MAPPING,r=Zr,a=Zr,o=ii,c=da,u=fr,d=Di,h=si.DEFAULT_ANISOTROPY,m=Ns){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Ew++}),this.uuid=Fs(),this.name="",this.source=new gm(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=r,this.wrapT=a,this.magFilter=o,this.minFilter=c,this.anisotropy=h,this.format=u,this.internalFormat=null,this.type=d,this.offset=new st(0,0),this.repeat=new st(1,1),this.center=new st(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new wt,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=m,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(lh).x}get height(){return this.source.getSize(lh).y}get depth(){return this.source.getSize(lh).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const r=e[t];if(r===void 0){St(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){St(`Texture.setValues(): property '${t}' does not exist.`);continue}a&&r&&a.isVector2&&r.isVector2||a&&r&&a.isVector3&&r.isVector3||a&&r&&a.isMatrix3&&r.isMatrix3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const r={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(r.userData=this.userData),t||(e.textures[this.uuid]=r),r}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Ux)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case sp:e.x=e.x-Math.floor(e.x);break;case Zr:e.x=e.x<0?0:1;break;case ap:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case sp:e.y=e.y-Math.floor(e.y);break;case Zr:e.y=e.y<0?0:1;break;case ap:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}si.DEFAULT_IMAGE=null;si.DEFAULT_MAPPING=Ux;si.DEFAULT_ANISOTROPY=1;const Fm=class Fm{constructor(e=0,t=0,r=0,a=1){this.x=e,this.y=t,this.z=r,this.w=a}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,r,a){return this.x=e,this.y=t,this.z=r,this.w=a,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,r=this.y,a=this.z,o=this.w,c=e.elements;return this.x=c[0]*t+c[4]*r+c[8]*a+c[12]*o,this.y=c[1]*t+c[5]*r+c[9]*a+c[13]*o,this.z=c[2]*t+c[6]*r+c[10]*a+c[14]*o,this.w=c[3]*t+c[7]*r+c[11]*a+c[15]*o,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,r,a,o;const d=e.elements,h=d[0],m=d[4],g=d[8],p=d[1],x=d[5],E=d[9],T=d[2],S=d[6],y=d[10];if(Math.abs(m-p)<.01&&Math.abs(g-T)<.01&&Math.abs(E-S)<.01){if(Math.abs(m+p)<.1&&Math.abs(g+T)<.1&&Math.abs(E+S)<.1&&Math.abs(h+x+y-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const D=(h+1)/2,w=(x+1)/2,C=(y+1)/2,P=(m+p)/4,F=(g+T)/4,A=(E+S)/4;return D>w&&D>C?D<.01?(r=0,a=.707106781,o=.707106781):(r=Math.sqrt(D),a=P/r,o=F/r):w>C?w<.01?(r=.707106781,a=0,o=.707106781):(a=Math.sqrt(w),r=P/a,o=A/a):C<.01?(r=.707106781,a=.707106781,o=0):(o=Math.sqrt(C),r=F/o,a=A/o),this.set(r,a,o,t),this}let b=Math.sqrt((S-E)*(S-E)+(g-T)*(g-T)+(p-m)*(p-m));return Math.abs(b)<.001&&(b=1),this.x=(S-E)/b,this.y=(g-T)/b,this.z=(p-m)/b,this.w=Math.acos((h+x+y-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=Tt(this.x,e.x,t.x),this.y=Tt(this.y,e.y,t.y),this.z=Tt(this.z,e.z,t.z),this.w=Tt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=Tt(this.x,e,t),this.y=Tt(this.y,e,t),this.z=Tt(this.z,e,t),this.w=Tt(this.w,e,t),this}clampLength(e,t){const r=this.length();return this.divideScalar(r||1).multiplyScalar(Tt(r,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,r){return this.x=e.x+(t.x-e.x)*r,this.y=e.y+(t.y-e.y)*r,this.z=e.z+(t.z-e.z)*r,this.w=e.w+(t.w-e.w)*r,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}};Fm.prototype.isVector4=!0;let gn=Fm;class ww extends Hs{constructor(e=1,t=1,r={}){super(),r=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:ii,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},r),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=r.depth,this.scissor=new gn(0,0,e,t),this.scissorTest=!1,this.viewport=new gn(0,0,e,t),this.textures=[];const a={width:e,height:t,depth:r.depth},o=new si(a),c=r.count;for(let u=0;u<c;u++)this.textures[u]=o.clone(),this.textures[u].isRenderTargetTexture=!0,this.textures[u].renderTarget=this;this._setTextureOptions(r),this.depthBuffer=r.depthBuffer,this.stencilBuffer=r.stencilBuffer,this.resolveColorBuffer=r.resolveColorBuffer,this.resolveDepthBuffer=r.resolveDepthBuffer,this.resolveStencilBuffer=r.resolveStencilBuffer,this.storeMultisampledColorBuffer=r.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=r.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=r.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=r.depthTexture,this.samples=r.samples,this.multiview=r.multiview,this.useArrayDepthTexture=r.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:ii,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let r=0;r<this.textures.length;r++)this.textures[r].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,r=1){if(this.width!==e||this.height!==t||this.depth!==r){this.width=e,this.height=t,this.depth=r;for(let a=0,o=this.textures.length;a<o;a++)this.textures[a].image.width=e,this.textures[a].image.height=t,this.textures[a].image.depth=r,this.textures[a].isData3DTexture!==!0&&(this.textures[a].isArrayTexture=this.textures[a].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,r=e.textures.length;t<r;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const a=Object.assign({},e.textures[t].image);this.textures[t].source=new gm(a)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class hr extends ww{constructor(e=1,t=1,r={}){super(e,t,r),this.isWebGLRenderTarget=!0}}class Wx extends si{constructor(e=null,t=1,r=1,a=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Tw extends si{constructor(e=null,t=1,r=1,a=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:r,depth:a},this.magFilter=Yn,this.minFilter=Yn,this.wrapR=Zr,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}const of=class of{constructor(e,t,r,a,o,c,u,d,h,m,g,p,x,E,T,S){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,r,a,o,c,u,d,h,m,g,p,x,E,T,S)}set(e,t,r,a,o,c,u,d,h,m,g,p,x,E,T,S){const y=this.elements;return y[0]=e,y[4]=t,y[8]=r,y[12]=a,y[1]=o,y[5]=c,y[9]=u,y[13]=d,y[2]=h,y[6]=m,y[10]=g,y[14]=p,y[3]=x,y[7]=E,y[11]=T,y[15]=S,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new of().fromArray(this.elements)}copy(e){const t=this.elements,r=e.elements;return t[0]=r[0],t[1]=r[1],t[2]=r[2],t[3]=r[3],t[4]=r[4],t[5]=r[5],t[6]=r[6],t[7]=r[7],t[8]=r[8],t[9]=r[9],t[10]=r[10],t[11]=r[11],t[12]=r[12],t[13]=r[13],t[14]=r[14],t[15]=r[15],this}copyPosition(e){const t=this.elements,r=e.elements;return t[12]=r[12],t[13]=r[13],t[14]=r[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,r){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),r.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),r.setFromMatrixColumn(this,2),this)}makeBasis(e,t,r){return this.set(e.x,t.x,r.x,0,e.y,t.y,r.y,0,e.z,t.z,r.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,r=e.elements,a=1/Ga.setFromMatrixColumn(e,0).length(),o=1/Ga.setFromMatrixColumn(e,1).length(),c=1/Ga.setFromMatrixColumn(e,2).length();return t[0]=r[0]*a,t[1]=r[1]*a,t[2]=r[2]*a,t[3]=0,t[4]=r[4]*o,t[5]=r[5]*o,t[6]=r[6]*o,t[7]=0,t[8]=r[8]*c,t[9]=r[9]*c,t[10]=r[10]*c,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,r=e.x,a=e.y,o=e.z,c=Math.cos(r),u=Math.sin(r),d=Math.cos(a),h=Math.sin(a),m=Math.cos(o),g=Math.sin(o);if(e.order==="XYZ"){const p=c*m,x=c*g,E=u*m,T=u*g;t[0]=d*m,t[4]=-d*g,t[8]=h,t[1]=x+E*h,t[5]=p-T*h,t[9]=-u*d,t[2]=T-p*h,t[6]=E+x*h,t[10]=c*d}else if(e.order==="YXZ"){const p=d*m,x=d*g,E=h*m,T=h*g;t[0]=p+T*u,t[4]=E*u-x,t[8]=c*h,t[1]=c*g,t[5]=c*m,t[9]=-u,t[2]=x*u-E,t[6]=T+p*u,t[10]=c*d}else if(e.order==="ZXY"){const p=d*m,x=d*g,E=h*m,T=h*g;t[0]=p-T*u,t[4]=-c*g,t[8]=E+x*u,t[1]=x+E*u,t[5]=c*m,t[9]=T-p*u,t[2]=-c*h,t[6]=u,t[10]=c*d}else if(e.order==="ZYX"){const p=c*m,x=c*g,E=u*m,T=u*g;t[0]=d*m,t[4]=E*h-x,t[8]=p*h+T,t[1]=d*g,t[5]=T*h+p,t[9]=x*h-E,t[2]=-h,t[6]=u*d,t[10]=c*d}else if(e.order==="YZX"){const p=c*d,x=c*h,E=u*d,T=u*h;t[0]=d*m,t[4]=T-p*g,t[8]=E*g+x,t[1]=g,t[5]=c*m,t[9]=-u*m,t[2]=-h*m,t[6]=x*g+E,t[10]=p-T*g}else if(e.order==="XZY"){const p=c*d,x=c*h,E=u*d,T=u*h;t[0]=d*m,t[4]=-g,t[8]=h*m,t[1]=p*g+T,t[5]=c*m,t[9]=x*g-E,t[2]=E*g-x,t[6]=u*m,t[10]=T*g+p}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Aw,e,bw)}lookAt(e,t,r){const a=this.elements;return bi.subVectors(e,t),bi.lengthSq()===0&&(bi.z=1),bi.normalize(),ws.crossVectors(r,bi),ws.lengthSq()===0&&(Math.abs(r.z)===1?bi.x+=1e-4:bi.z+=1e-4,bi.normalize(),ws.crossVectors(r,bi)),ws.normalize(),jc.crossVectors(bi,ws),a[0]=ws.x,a[4]=jc.x,a[8]=bi.x,a[1]=ws.y,a[5]=jc.y,a[9]=bi.y,a[2]=ws.z,a[6]=jc.z,a[10]=bi.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const r=e.elements,a=t.elements,o=this.elements,c=r[0],u=r[4],d=r[8],h=r[12],m=r[1],g=r[5],p=r[9],x=r[13],E=r[2],T=r[6],S=r[10],y=r[14],b=r[3],D=r[7],w=r[11],C=r[15],P=a[0],F=a[4],A=a[8],U=a[12],O=a[1],k=a[5],I=a[9],X=a[13],V=a[2],q=a[6],ee=a[10],ae=a[14],J=a[3],te=a[7],ne=a[11],H=a[15];return o[0]=c*P+u*O+d*V+h*J,o[4]=c*F+u*k+d*q+h*te,o[8]=c*A+u*I+d*ee+h*ne,o[12]=c*U+u*X+d*ae+h*H,o[1]=m*P+g*O+p*V+x*J,o[5]=m*F+g*k+p*q+x*te,o[9]=m*A+g*I+p*ee+x*ne,o[13]=m*U+g*X+p*ae+x*H,o[2]=E*P+T*O+S*V+y*J,o[6]=E*F+T*k+S*q+y*te,o[10]=E*A+T*I+S*ee+y*ne,o[14]=E*U+T*X+S*ae+y*H,o[3]=b*P+D*O+w*V+C*J,o[7]=b*F+D*k+w*q+C*te,o[11]=b*A+D*I+w*ee+C*ne,o[15]=b*U+D*X+w*ae+C*H,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],r=e[4],a=e[8],o=e[12],c=e[1],u=e[5],d=e[9],h=e[13],m=e[2],g=e[6],p=e[10],x=e[14],E=e[3],T=e[7],S=e[11],y=e[15],b=d*x-h*p,D=u*x-h*g,w=u*p-d*g,C=c*x-h*m,P=c*p-d*m,F=c*g-u*m;return t*(T*b-S*D+y*w)-r*(E*b-S*C+y*P)+a*(E*D-T*C+y*F)-o*(E*w-T*P+S*F)}determinantAffine(){const e=this.elements,t=e[0],r=e[4],a=e[8],o=e[1],c=e[5],u=e[9],d=e[2],h=e[6],m=e[10];return t*(c*m-u*h)-r*(o*m-u*d)+a*(o*h-c*d)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,r){const a=this.elements;return e.isVector3?(a[12]=e.x,a[13]=e.y,a[14]=e.z):(a[12]=e,a[13]=t,a[14]=r),this}invert(){const e=this.elements,t=e[0],r=e[1],a=e[2],o=e[3],c=e[4],u=e[5],d=e[6],h=e[7],m=e[8],g=e[9],p=e[10],x=e[11],E=e[12],T=e[13],S=e[14],y=e[15],b=t*u-r*c,D=t*d-a*c,w=t*h-o*c,C=r*d-a*u,P=r*h-o*u,F=a*h-o*d,A=m*T-g*E,U=m*S-p*E,O=m*y-x*E,k=g*S-p*T,I=g*y-x*T,X=p*y-x*S,V=b*X-D*I+w*k+C*O-P*U+F*A;if(V===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const q=1/V;return e[0]=(u*X-d*I+h*k)*q,e[1]=(a*I-r*X-o*k)*q,e[2]=(T*F-S*P+y*C)*q,e[3]=(p*P-g*F-x*C)*q,e[4]=(d*O-c*X-h*U)*q,e[5]=(t*X-a*O+o*U)*q,e[6]=(S*w-E*F-y*D)*q,e[7]=(m*F-p*w+x*D)*q,e[8]=(c*I-u*O+h*A)*q,e[9]=(r*O-t*I-o*A)*q,e[10]=(E*P-T*w+y*b)*q,e[11]=(g*w-m*P-x*b)*q,e[12]=(u*U-c*k-d*A)*q,e[13]=(t*k-r*U+a*A)*q,e[14]=(T*D-E*C-S*b)*q,e[15]=(m*C-g*D+p*b)*q,this}scale(e){const t=this.elements,r=e.x,a=e.y,o=e.z;return t[0]*=r,t[4]*=a,t[8]*=o,t[1]*=r,t[5]*=a,t[9]*=o,t[2]*=r,t[6]*=a,t[10]*=o,t[3]*=r,t[7]*=a,t[11]*=o,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],r=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],a=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,r,a))}makeTranslation(e,t,r){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,r,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),r=Math.sin(e);return this.set(1,0,0,0,0,t,-r,0,0,r,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,0,r,0,0,1,0,0,-r,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),r=Math.sin(e);return this.set(t,-r,0,0,r,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const r=Math.cos(t),a=Math.sin(t),o=1-r,c=e.x,u=e.y,d=e.z,h=o*c,m=o*u;return this.set(h*c+r,h*u-a*d,h*d+a*u,0,h*u+a*d,m*u+r,m*d-a*c,0,h*d-a*u,m*d+a*c,o*d*d+r,0,0,0,0,1),this}makeScale(e,t,r){return this.set(e,0,0,0,0,t,0,0,0,0,r,0,0,0,0,1),this}makeShear(e,t,r,a,o,c){return this.set(1,r,o,0,e,1,c,0,t,a,1,0,0,0,0,1),this}compose(e,t,r){const a=this.elements,o=t._x,c=t._y,u=t._z,d=t._w,h=o+o,m=c+c,g=u+u,p=o*h,x=o*m,E=o*g,T=c*m,S=c*g,y=u*g,b=d*h,D=d*m,w=d*g,C=r.x,P=r.y,F=r.z;return a[0]=(1-(T+y))*C,a[1]=(x+w)*C,a[2]=(E-D)*C,a[3]=0,a[4]=(x-w)*P,a[5]=(1-(p+y))*P,a[6]=(S+b)*P,a[7]=0,a[8]=(E+D)*F,a[9]=(S-b)*F,a[10]=(1-(p+T))*F,a[11]=0,a[12]=e.x,a[13]=e.y,a[14]=e.z,a[15]=1,this}decompose(e,t,r){const a=this.elements;e.x=a[12],e.y=a[13],e.z=a[14];const o=this.determinantAffine();if(o===0)return r.set(1,1,1),t.identity(),this;let c=Ga.set(a[0],a[1],a[2]).length();const u=Ga.set(a[4],a[5],a[6]).length(),d=Ga.set(a[8],a[9],a[10]).length();o<0&&(c=-c),rr.copy(this);const h=1/c,m=1/u,g=1/d;return rr.elements[0]*=h,rr.elements[1]*=h,rr.elements[2]*=h,rr.elements[4]*=m,rr.elements[5]*=m,rr.elements[6]*=m,rr.elements[8]*=g,rr.elements[9]*=g,rr.elements[10]*=g,t.setFromRotationMatrix(rr),r.x=c,r.y=u,r.z=d,this}makePerspective(e,t,r,a,o,c,u=Ar,d=!1){const h=this.elements,m=2*o/(t-e),g=2*o/(r-a),p=(t+e)/(t-e),x=(r+a)/(r-a);let E,T;if(d)E=o/(c-o),T=c*o/(c-o);else if(u===Ar)E=-(c+o)/(c-o),T=-2*c*o/(c-o);else if(u===Bl)E=-c/(c-o),T=-c*o/(c-o);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=p,h[12]=0,h[1]=0,h[5]=g,h[9]=x,h[13]=0,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=-1,h[15]=0,this}makeOrthographic(e,t,r,a,o,c,u=Ar,d=!1){const h=this.elements,m=2/(t-e),g=2/(r-a),p=-(t+e)/(t-e),x=-(r+a)/(r-a);let E,T;if(d)E=1/(c-o),T=c/(c-o);else if(u===Ar)E=-2/(c-o),T=-(c+o)/(c-o);else if(u===Bl)E=-1/(c-o),T=-o/(c-o);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+u);return h[0]=m,h[4]=0,h[8]=0,h[12]=p,h[1]=0,h[5]=g,h[9]=0,h[13]=x,h[2]=0,h[6]=0,h[10]=E,h[14]=T,h[3]=0,h[7]=0,h[11]=0,h[15]=1,this}equals(e){const t=this.elements,r=e.elements;for(let a=0;a<16;a++)if(t[a]!==r[a])return!1;return!0}fromArray(e,t=0){for(let r=0;r<16;r++)this.elements[r]=e[r+t];return this}toArray(e=[],t=0){const r=this.elements;return e[t]=r[0],e[t+1]=r[1],e[t+2]=r[2],e[t+3]=r[3],e[t+4]=r[4],e[t+5]=r[5],e[t+6]=r[6],e[t+7]=r[7],e[t+8]=r[8],e[t+9]=r[9],e[t+10]=r[10],e[t+11]=r[11],e[t+12]=r[12],e[t+13]=r[13],e[t+14]=r[14],e[t+15]=r[15],e}};of.prototype.isMatrix4=!0;let $t=of;const Ga=new G,rr=new $t,Aw=new G(0,0,0),bw=new G(1,1,1),ws=new G,jc=new G,bi=new G,Dv=new $t,Nv=new Is;class ks{constructor(e=0,t=0,r=0,a=ks.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=r,this._order=a}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,r,a=this._order){return this._x=e,this._y=t,this._z=r,this._order=a,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,r=!0){const a=e.elements,o=a[0],c=a[4],u=a[8],d=a[1],h=a[5],m=a[9],g=a[2],p=a[6],x=a[10];switch(t){case"XYZ":this._y=Math.asin(Tt(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(-m,x),this._z=Math.atan2(-c,o)):(this._x=Math.atan2(p,h),this._z=0);break;case"YXZ":this._x=Math.asin(-Tt(m,-1,1)),Math.abs(m)<.9999999?(this._y=Math.atan2(u,x),this._z=Math.atan2(d,h)):(this._y=Math.atan2(-g,o),this._z=0);break;case"ZXY":this._x=Math.asin(Tt(p,-1,1)),Math.abs(p)<.9999999?(this._y=Math.atan2(-g,x),this._z=Math.atan2(-c,h)):(this._y=0,this._z=Math.atan2(d,o));break;case"ZYX":this._y=Math.asin(-Tt(g,-1,1)),Math.abs(g)<.9999999?(this._x=Math.atan2(p,x),this._z=Math.atan2(d,o)):(this._x=0,this._z=Math.atan2(-c,h));break;case"YZX":this._z=Math.asin(Tt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(-m,h),this._y=Math.atan2(-g,o)):(this._x=0,this._y=Math.atan2(u,x));break;case"XZY":this._z=Math.asin(-Tt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(p,h),this._y=Math.atan2(u,o)):(this._x=Math.atan2(-m,x),this._y=0);break;default:St("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,r===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,r){return Dv.makeRotationFromQuaternion(e),this.setFromRotationMatrix(Dv,t,r)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return Nv.setFromEuler(this),this.setFromQuaternion(Nv,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ks.DEFAULT_ORDER="XYZ";class vm{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cw=0;const Uv=new G,Wa=new Is,Gr=new $t,Kc=new G,hl=new G,Rw=new G,Pw=new Is,Fv=new G(1,0,0),Ov=new G(0,1,0),Iv=new G(0,0,1),kv={type:"added"},Lw={type:"removed"},Xa={type:"childadded",child:null},ch={type:"childremoved",child:null};class Gn extends Hs{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cw++}),this.uuid=Fs(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Gn.DEFAULT_UP.clone();const e=new G,t=new ks,r=new Is,a=new G(1,1,1);function o(){r.setFromEuler(t,!1)}function c(){t.setFromQuaternion(r,void 0,!1)}t._onChange(o),r._onChange(c),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:r},scale:{configurable:!0,enumerable:!0,value:a},modelViewMatrix:{value:new $t},normalMatrix:{value:new wt}}),this.matrix=new $t,this.matrixWorld=new $t,this.matrixAutoUpdate=Gn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new vm,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.multiply(Wa),this}rotateOnWorldAxis(e,t){return Wa.setFromAxisAngle(e,t),this.quaternion.premultiply(Wa),this}rotateX(e){return this.rotateOnAxis(Fv,e)}rotateY(e){return this.rotateOnAxis(Ov,e)}rotateZ(e){return this.rotateOnAxis(Iv,e)}translateOnAxis(e,t){return Uv.copy(e).applyQuaternion(this.quaternion),this.position.add(Uv.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(Fv,e)}translateY(e){return this.translateOnAxis(Ov,e)}translateZ(e){return this.translateOnAxis(Iv,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Gr.copy(this.matrixWorld).invert())}lookAt(e,t,r){e.isVector3?Kc.copy(e):Kc.set(e,t,r);const a=this.parent;this.updateWorldMatrix(!0,!1),hl.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Gr.lookAt(hl,Kc,this.up):Gr.lookAt(Kc,hl,this.up),this.quaternion.setFromRotationMatrix(Gr),a&&(Gr.extractRotation(a.matrixWorld),Wa.setFromRotationMatrix(Gr),this.quaternion.premultiply(Wa.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(zt("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(kv),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null):zt("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let r=0;r<arguments.length;r++)this.remove(arguments[r]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lw),ch.child=e,this.dispatchEvent(ch),ch.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Gr.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Gr.multiply(e.parent.matrixWorld)),e.applyMatrix4(Gr),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(kv),Xa.child=e,this.dispatchEvent(Xa),Xa.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let r=0,a=this.children.length;r<a;r++){const c=this.children[r].getObjectByProperty(e,t);if(c!==void 0)return c}}getObjectsByProperty(e,t,r=[]){this[e]===t&&r.push(this);const a=this.children;for(let o=0,c=a.length;o<c;o++)a[o].getObjectsByProperty(e,t,r);return r}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,e,Rw),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(hl,Pw,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,r=e.y,a=e.z,o=this.matrix.elements;o[12]+=t-o[0]*t-o[4]*r-o[8]*a,o[13]+=r-o[1]*t-o[5]*r-o[9]*a,o[14]+=a-o[2]*t-o[6]*r-o[10]*a}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let r=0,a=t.length;r<a;r++)t[r].updateMatrixWorld(e)}updateWorldMatrix(e,t,r=!1){const a=this.parent;if(e===!0&&a!==null&&a.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||r)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,r=!0),t===!0){const o=this.children;for(let c=0,u=o.length;c<u;c++)o[c].updateWorldMatrix(!1,!0,r)}}toJSON(e){const t=e===void 0||typeof e=="string",r={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},r.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const a={};a.uuid=this.uuid,a.type=this.type,a.name=this.name,a.castShadow=this.castShadow,a.receiveShadow=this.receiveShadow,a.visible=this.visible,a.frustumCulled=this.frustumCulled,a.renderOrder=this.renderOrder,a.static=this.static,a.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(a.userData=this.userData),a.layers=this.layers.mask,a.matrix=this.matrix.toArray(),a.up=this.up.toArray(),this.pivot!==null&&(a.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(a.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(a.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(a.type="InstancedMesh",a.count=this.count,a.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(a.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(a.type="BatchedMesh",a.perObjectFrustumCulled=this.perObjectFrustumCulled,a.sortObjects=this.sortObjects,a.drawRanges=this._drawRanges,a.reservedRanges=this._reservedRanges,a.geometryInfo=this._geometryInfo.map(u=>({...u,boundingBox:u.boundingBox?u.boundingBox.toJSON():void 0,boundingSphere:u.boundingSphere?u.boundingSphere.toJSON():void 0})),a.instanceInfo=this._instanceInfo.map(u=>({...u})),a.availableInstanceIds=this._availableInstanceIds.slice(),a.availableGeometryIds=this._availableGeometryIds.slice(),a.nextIndexStart=this._nextIndexStart,a.nextVertexStart=this._nextVertexStart,a.geometryCount=this._geometryCount,a.maxInstanceCount=this._maxInstanceCount,a.maxVertexCount=this._maxVertexCount,a.maxIndexCount=this._maxIndexCount,a.geometryInitialized=this._geometryInitialized,a.matricesTexture=this._matricesTexture.toJSON(e),a.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(a.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(a.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(a.boundingBox=this.boundingBox.toJSON()));function o(u,d){return u[d.uuid]===void 0&&(u[d.uuid]=d.toJSON(e)),d.uuid}if(this.isScene)this.background&&(this.background.isColor?a.background=this.background.toJSON():this.background.isTexture&&(a.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(a.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){a.geometry=o(e.geometries,this.geometry);const u=this.geometry.parameters;if(u!==void 0&&u.shapes!==void 0){const d=u.shapes;if(Array.isArray(d))for(let h=0,m=d.length;h<m;h++){const g=d[h];o(e.shapes,g)}else o(e.shapes,d)}}if(this.isSkinnedMesh&&(a.bindMode=this.bindMode,a.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(o(e.skeletons,this.skeleton),a.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const u=[];for(let d=0,h=this.material.length;d<h;d++)u.push(o(e.materials,this.material[d]));a.material=u}else a.material=o(e.materials,this.material);if(this.children.length>0){a.children=[];for(let u=0;u<this.children.length;u++)a.children.push(this.children[u].toJSON(e).object)}if(this.animations.length>0){a.animations=[];for(let u=0;u<this.animations.length;u++){const d=this.animations[u];a.animations.push(o(e.animations,d))}}if(t){const u=c(e.geometries),d=c(e.materials),h=c(e.textures),m=c(e.images),g=c(e.shapes),p=c(e.skeletons),x=c(e.animations),E=c(e.nodes);u.length>0&&(r.geometries=u),d.length>0&&(r.materials=d),h.length>0&&(r.textures=h),m.length>0&&(r.images=m),g.length>0&&(r.shapes=g),p.length>0&&(r.skeletons=p),x.length>0&&(r.animations=x),E.length>0&&(r.nodes=E)}return r.object=a,r;function c(u){const d=[];for(const h in u){const m=u[h];delete m.metadata,d.push(m)}return d}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let r=0;r<e.children.length;r++){const a=e.children[r];this.add(a.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}Gn.DEFAULT_UP=new G(0,1,0);Gn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Gn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Pl extends Gn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Dw={type:"move"};class uh{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Pl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Pl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Pl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const r of e.hand.values())this._getHandJoint(t,r)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,r){let a=null,o=null,c=null;const u=this._targetRay,d=this._grip,h=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(h&&e.hand){c=!0;for(const T of e.hand.values()){const S=t.getJointPose(T,r),y=this._getHandJoint(h,T);S!==null&&(y.matrix.fromArray(S.transform.matrix),y.matrix.decompose(y.position,y.rotation,y.scale),y.matrixWorldNeedsUpdate=!0,y.jointRadius=S.radius),y.visible=S!==null}const m=h.joints["index-finger-tip"],g=h.joints["thumb-tip"],p=m.position.distanceTo(g.position),x=.02,E=.005;h.inputState.pinching&&p>x+E?(h.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!h.inputState.pinching&&p<=x-E&&(h.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else d!==null&&e.gripSpace&&(o=t.getPose(e.gripSpace,r),o!==null&&(d.matrix.fromArray(o.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,o.linearVelocity?(d.hasLinearVelocity=!0,d.linearVelocity.copy(o.linearVelocity)):d.hasLinearVelocity=!1,o.angularVelocity?(d.hasAngularVelocity=!0,d.angularVelocity.copy(o.angularVelocity)):d.hasAngularVelocity=!1,d.eventsEnabled&&d.dispatchEvent({type:"gripUpdated",data:e,target:this})));u!==null&&(a=t.getPose(e.targetRaySpace,r),a===null&&o!==null&&(a=o),a!==null&&(u.matrix.fromArray(a.transform.matrix),u.matrix.decompose(u.position,u.rotation,u.scale),u.matrixWorldNeedsUpdate=!0,a.linearVelocity?(u.hasLinearVelocity=!0,u.linearVelocity.copy(a.linearVelocity)):u.hasLinearVelocity=!1,a.angularVelocity?(u.hasAngularVelocity=!0,u.angularVelocity.copy(a.angularVelocity)):u.hasAngularVelocity=!1,this.dispatchEvent(Dw)))}return u!==null&&(u.visible=a!==null),d!==null&&(d.visible=o!==null),h!==null&&(h.visible=c!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const r=new Pl;r.matrixAutoUpdate=!1,r.visible=!1,e.joints[t.jointName]=r,e.add(r)}return e.joints[t.jointName]}}const Xx={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},Ts={h:0,s:0,l:0},Zc={h:0,s:0,l:0};function fh(n,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?n+(e-n)*6*t:t<1/2?e:t<2/3?n+(e-n)*6*(2/3-t):n}class At{constructor(e,t,r){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,r)}set(e,t,r){if(t===void 0&&r===void 0){const a=e;a&&a.isColor?this.copy(a):typeof a=="number"?this.setHex(a):typeof a=="string"&&this.setStyle(a)}else this.setRGB(e,t,r);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=Pi){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,kt.colorSpaceToWorking(this,t),this}setRGB(e,t,r,a=kt.workingColorSpace){return this.r=e,this.g=t,this.b=r,kt.colorSpaceToWorking(this,a),this}setHSL(e,t,r,a=kt.workingColorSpace){if(e=_w(e,1),t=Tt(t,0,1),r=Tt(r,0,1),t===0)this.r=this.g=this.b=r;else{const o=r<=.5?r*(1+t):r+t-r*t,c=2*r-o;this.r=fh(c,o,e+1/3),this.g=fh(c,o,e),this.b=fh(c,o,e-1/3)}return kt.colorSpaceToWorking(this,a),this}setStyle(e,t=Pi){function r(o){o!==void 0&&parseFloat(o)<1&&St("Color: Alpha component of "+e+" will be ignored.")}let a;if(a=/^(\w+)\(([^\)]*)\)/.exec(e)){let o;const c=a[1],u=a[2];switch(c){case"rgb":case"rgba":if(o=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(255,parseInt(o[1],10))/255,Math.min(255,parseInt(o[2],10))/255,Math.min(255,parseInt(o[3],10))/255,t);if(o=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setRGB(Math.min(100,parseInt(o[1],10))/100,Math.min(100,parseInt(o[2],10))/100,Math.min(100,parseInt(o[3],10))/100,t);break;case"hsl":case"hsla":if(o=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(u))return r(o[4]),this.setHSL(parseFloat(o[1])/360,parseFloat(o[2])/100,parseFloat(o[3])/100,t);break;default:St("Color: Unknown color model "+e)}}else if(a=/^\#([A-Fa-f\d]+)$/.exec(e)){const o=a[1],c=o.length;if(c===3)return this.setRGB(parseInt(o.charAt(0),16)/15,parseInt(o.charAt(1),16)/15,parseInt(o.charAt(2),16)/15,t);if(c===6)return this.setHex(parseInt(o,16),t);St("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=Pi){const r=Xx[e.toLowerCase()];return r!==void 0?this.setHex(r,t):St("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=es(e.r),this.g=es(e.g),this.b=es(e.b),this}copyLinearToSRGB(e){return this.r=Ao(e.r),this.g=Ao(e.g),this.b=Ao(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Pi){return kt.workingToColorSpace(ni.copy(this),e),Math.round(Tt(ni.r*255,0,255))*65536+Math.round(Tt(ni.g*255,0,255))*256+Math.round(Tt(ni.b*255,0,255))}getHexString(e=Pi){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=kt.workingColorSpace){kt.workingToColorSpace(ni.copy(this),t);const r=ni.r,a=ni.g,o=ni.b,c=Math.max(r,a,o),u=Math.min(r,a,o);let d,h;const m=(u+c)/2;if(u===c)d=0,h=0;else{const g=c-u;switch(h=m<=.5?g/(c+u):g/(2-c-u),c){case r:d=(a-o)/g+(a<o?6:0);break;case a:d=(o-r)/g+2;break;case o:d=(r-a)/g+4;break}d/=6}return e.h=d,e.s=h,e.l=m,e}getRGB(e,t=kt.workingColorSpace){return kt.workingToColorSpace(ni.copy(this),t),e.r=ni.r,e.g=ni.g,e.b=ni.b,e}getStyle(e=Pi){kt.workingToColorSpace(ni.copy(this),e);const t=ni.r,r=ni.g,a=ni.b;return e!==Pi?`color(${e} ${t.toFixed(3)} ${r.toFixed(3)} ${a.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(r*255)},${Math.round(a*255)})`}offsetHSL(e,t,r){return this.getHSL(Ts),this.setHSL(Ts.h+e,Ts.s+t,Ts.l+r)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,r){return this.r=e.r+(t.r-e.r)*r,this.g=e.g+(t.g-e.g)*r,this.b=e.b+(t.b-e.b)*r,this}lerpHSL(e,t){this.getHSL(Ts),e.getHSL(Zc);const r=rh(Ts.h,Zc.h,t),a=rh(Ts.s,Zc.s,t),o=rh(Ts.l,Zc.l,t);return this.setHSL(r,a,o),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,r=this.g,a=this.b,o=e.elements;return this.r=o[0]*t+o[3]*r+o[6]*a,this.g=o[1]*t+o[4]*r+o[7]*a,this.b=o[2]*t+o[5]*r+o[8]*a,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const ni=new At;At.NAMES=Xx;class Nw extends Gn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ks,this.environmentIntensity=1,this.environmentRotation=new ks,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const sr=new G,Wr=new G,dh=new G,Xr=new G,$a=new G,qa=new G,zv=new G,hh=new G,ph=new G,mh=new G,gh=new gn,vh=new gn,_h=new gn;class Dn{constructor(e=new G,t=new G,r=new G){this.a=e,this.b=t,this.c=r}static getNormal(e,t,r,a){a.subVectors(r,t),sr.subVectors(e,t),a.cross(sr);const o=a.lengthSq();return o>0?a.multiplyScalar(1/Math.sqrt(o)):a.set(0,0,0)}static getBarycoord(e,t,r,a,o){sr.subVectors(a,t),Wr.subVectors(r,t),dh.subVectors(e,t);const c=sr.dot(sr),u=sr.dot(Wr),d=sr.dot(dh),h=Wr.dot(Wr),m=Wr.dot(dh),g=c*h-u*u;if(g===0)return o.set(0,0,0),null;const p=1/g,x=(h*d-u*m)*p,E=(c*m-u*d)*p;return o.set(1-x-E,E,x)}static containsPoint(e,t,r,a){return this.getBarycoord(e,t,r,a,Xr)===null?!1:Xr.x>=0&&Xr.y>=0&&Xr.x+Xr.y<=1}static getInterpolation(e,t,r,a,o,c,u,d){return this.getBarycoord(e,t,r,a,Xr)===null?(d.x=0,d.y=0,"z"in d&&(d.z=0),"w"in d&&(d.w=0),null):(d.setScalar(0),d.addScaledVector(o,Xr.x),d.addScaledVector(c,Xr.y),d.addScaledVector(u,Xr.z),d)}static getInterpolatedAttribute(e,t,r,a,o,c){return gh.setScalar(0),vh.setScalar(0),_h.setScalar(0),gh.fromBufferAttribute(e,t),vh.fromBufferAttribute(e,r),_h.fromBufferAttribute(e,a),c.setScalar(0),c.addScaledVector(gh,o.x),c.addScaledVector(vh,o.y),c.addScaledVector(_h,o.z),c}static isFrontFacing(e,t,r,a){return sr.subVectors(r,t),Wr.subVectors(e,t),sr.cross(Wr).dot(a)<0}set(e,t,r){return this.a.copy(e),this.b.copy(t),this.c.copy(r),this}setFromPointsAndIndices(e,t,r,a){return this.a.copy(e[t]),this.b.copy(e[r]),this.c.copy(e[a]),this}setFromAttributeAndIndices(e,t,r,a){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,r),this.c.fromBufferAttribute(e,a),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return sr.subVectors(this.c,this.b),Wr.subVectors(this.a,this.b),sr.cross(Wr).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return Dn.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return Dn.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,r,a,o){return Dn.getInterpolation(e,this.a,this.b,this.c,t,r,a,o)}containsPoint(e){return Dn.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return Dn.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const r=this.a,a=this.b,o=this.c;let c,u;$a.subVectors(a,r),qa.subVectors(o,r),hh.subVectors(e,r);const d=$a.dot(hh),h=qa.dot(hh);if(d<=0&&h<=0)return t.copy(r);ph.subVectors(e,a);const m=$a.dot(ph),g=qa.dot(ph);if(m>=0&&g<=m)return t.copy(a);const p=d*g-m*h;if(p<=0&&d>=0&&m<=0)return c=d/(d-m),t.copy(r).addScaledVector($a,c);mh.subVectors(e,o);const x=$a.dot(mh),E=qa.dot(mh);if(E>=0&&x<=E)return t.copy(o);const T=x*h-d*E;if(T<=0&&h>=0&&E<=0)return u=h/(h-E),t.copy(r).addScaledVector(qa,u);const S=m*E-x*g;if(S<=0&&g-m>=0&&x-E>=0)return zv.subVectors(o,a),u=(g-m)/(g-m+(x-E)),t.copy(a).addScaledVector(zv,u);const y=1/(S+T+p);return c=T*y,u=p*y,t.copy(r).addScaledVector($a,c).addScaledVector(qa,u)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class Wn{constructor(e=new G(1/0,1/0,1/0),t=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t+=3)this.expandByPoint(ar.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,r=e.count;t<r;t++)this.expandByPoint(ar.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,r=e.length;t<r;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const r=ar.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(r),this.max.copy(e).add(r),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const r=e.geometry;if(r!==void 0){const o=r.getAttribute("position");if(t===!0&&o!==void 0&&e.isInstancedMesh!==!0)for(let c=0,u=o.count;c<u;c++)e.isMesh===!0?e.getVertexPosition(c,ar):ar.fromBufferAttribute(o,c),ar.applyMatrix4(e.matrixWorld),this.expandByPoint(ar);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Jc.copy(e.boundingBox)):(r.boundingBox===null&&r.computeBoundingBox(),Jc.copy(r.boundingBox)),Jc.applyMatrix4(e.matrixWorld),this.union(Jc)}const a=e.children;for(let o=0,c=a.length;o<c;o++)this.expandByObject(a[o],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ar),ar.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,r;return e.normal.x>0?(t=e.normal.x*this.min.x,r=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,r=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,r+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,r+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,r+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,r+=e.normal.z*this.min.z),t<=-e.constant&&r>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(pl),Qc.subVectors(this.max,pl),Ya.subVectors(e.a,pl),ja.subVectors(e.b,pl),Ka.subVectors(e.c,pl),As.subVectors(ja,Ya),bs.subVectors(Ka,ja),ta.subVectors(Ya,Ka);let t=[0,-As.z,As.y,0,-bs.z,bs.y,0,-ta.z,ta.y,As.z,0,-As.x,bs.z,0,-bs.x,ta.z,0,-ta.x,-As.y,As.x,0,-bs.y,bs.x,0,-ta.y,ta.x,0];return!xh(t,Ya,ja,Ka,Qc)||(t=[1,0,0,0,1,0,0,0,1],!xh(t,Ya,ja,Ka,Qc))?!1:(eu.crossVectors(As,bs),t=[eu.x,eu.y,eu.z],xh(t,Ya,ja,Ka,Qc))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ar).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ar).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:($r[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),$r[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),$r[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),$r[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),$r[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),$r[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),$r[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),$r[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints($r),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const $r=[new G,new G,new G,new G,new G,new G,new G,new G],ar=new G,Jc=new Wn,Ya=new G,ja=new G,Ka=new G,As=new G,bs=new G,ta=new G,pl=new G,Qc=new G,eu=new G,na=new G;function xh(n,e,t,r,a){for(let o=0,c=n.length-3;o<=c;o+=3){na.fromArray(n,o);const u=a.x*Math.abs(na.x)+a.y*Math.abs(na.y)+a.z*Math.abs(na.z),d=e.dot(na),h=t.dot(na),m=r.dot(na);if(Math.max(-Math.max(d,h,m),Math.min(d,h,m))>u)return!1}return!0}const Tn=new G,tu=new st;let Uw=0;class ai extends Hs{constructor(e,t,r=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Uw++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=r,this.usage=Bx,this.updateRanges=[],this.gpuType=Tr,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,r){e*=this.itemSize,r*=t.itemSize;for(let a=0,o=this.itemSize;a<o;a++)this.array[e+a]=t.array[r+a];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,r=this.count;t<r;t++)tu.fromBufferAttribute(this,t),tu.applyMatrix3(e),this.setXY(t,tu.x,tu.y);else if(this.itemSize===3)for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix3(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyMatrix4(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyMatrix4(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.applyNormalMatrix(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)Tn.fromBufferAttribute(this,t),Tn.transformDirection(e),this.setXYZ(t,Tn.x,Tn.y,Tn.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let r=this.array[e*this.itemSize+t];return this.normalized&&(r=wr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qt(r,this.array)),this.array[e*this.itemSize+t]=r,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=wr(t,this.array)),t}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=wr(t,this.array)),t}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=wr(t,this.array)),t}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=wr(t,this.array)),t}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,r){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array)),this.array[e+0]=t,this.array[e+1]=r,this}setXYZ(e,t,r,a){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),a=Qt(a,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this}setXYZW(e,t,r,a,o){return e*=this.itemSize,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),a=Qt(a,this.array),o=Qt(o,this.array)),this.array[e+0]=t,this.array[e+1]=r,this.array[e+2]=a,this.array[e+3]=o,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class $x extends ai{constructor(e,t,r){super(new Uint16Array(e),t,r)}}class qx extends ai{constructor(e,t,r){super(new Uint32Array(e),t,r)}}class Cn extends ai{constructor(e,t,r){super(new Float32Array(e),t,r)}}const Fw=new Wn,ml=new G,yh=new G;class _m{constructor(e=new G,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const r=this.center;t!==void 0?r.copy(t):Fw.setFromPoints(e).getCenter(r);let a=0;for(let o=0,c=e.length;o<c;o++)a=Math.max(a,r.distanceToSquared(e[o]));return this.radius=Math.sqrt(a),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const r=this.center.distanceToSquared(e);return t.copy(e),r>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;ml.subVectors(e,this.center);const t=ml.lengthSq();if(t>this.radius*this.radius){const r=Math.sqrt(t),a=(r-this.radius)*.5;this.center.addScaledVector(ml,a/r),this.radius+=a}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(yh.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(ml.copy(e.center).add(yh)),this.expandByPoint(ml.copy(e.center).sub(yh))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ow=0;const Bi=new $t,Sh=new Gn,Za=new G,Ci=new Wn,gl=new Wn,Vn=new G;class oi extends Hs{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ow++}),this.uuid=Fs(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(pw(e)?qx:$x)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,r=0){this.groups.push({start:e,count:t,materialIndex:r})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const r=this.attributes.normal;if(r!==void 0){const o=new wt().getNormalMatrix(e);r.applyNormalMatrix(o),r.needsUpdate=!0}const a=this.attributes.tangent;return a!==void 0&&(a.transformDirection(e),a.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return Bi.makeRotationFromQuaternion(e),this.applyMatrix4(Bi),this}rotateX(e){return Bi.makeRotationX(e),this.applyMatrix4(Bi),this}rotateY(e){return Bi.makeRotationY(e),this.applyMatrix4(Bi),this}rotateZ(e){return Bi.makeRotationZ(e),this.applyMatrix4(Bi),this}translate(e,t,r){return Bi.makeTranslation(e,t,r),this.applyMatrix4(Bi),this}scale(e,t,r){return Bi.makeScale(e,t,r),this.applyMatrix4(Bi),this}lookAt(e){return Sh.lookAt(e),Sh.updateMatrix(),this.applyMatrix4(Sh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Za).negate(),this.translate(Za.x,Za.y,Za.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const r=[];for(let a=0,o=e.length;a<o;a++){const c=e[a];r.push(c.x,c.y,c.z||0)}this.setAttribute("position",new Cn(r,3))}else{const r=Math.min(e.length,t.count);for(let a=0;a<r;a++){const o=e[a];t.setXYZ(a,o.x,o.y,o.z||0)}e.length>t.count&&St("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Wn);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let r=0,a=t.length;r<a;r++){const o=t[r];Ci.setFromBufferAttribute(o),this.morphTargetsRelative?(Vn.addVectors(this.boundingBox.min,Ci.min),this.boundingBox.expandByPoint(Vn),Vn.addVectors(this.boundingBox.max,Ci.max),this.boundingBox.expandByPoint(Vn)):(this.boundingBox.expandByPoint(Ci.min),this.boundingBox.expandByPoint(Ci.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&zt('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new _m);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){zt("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const r=this.boundingSphere.center;if(Ci.setFromBufferAttribute(e),t)for(let o=0,c=t.length;o<c;o++){const u=t[o];gl.setFromBufferAttribute(u),this.morphTargetsRelative?(Vn.addVectors(Ci.min,gl.min),Ci.expandByPoint(Vn),Vn.addVectors(Ci.max,gl.max),Ci.expandByPoint(Vn)):(Ci.expandByPoint(gl.min),Ci.expandByPoint(gl.max))}Ci.getCenter(r);let a=0;for(let o=0,c=e.count;o<c;o++)Vn.fromBufferAttribute(e,o),a=Math.max(a,r.distanceToSquared(Vn));if(t)for(let o=0,c=t.length;o<c;o++){const u=t[o],d=this.morphTargetsRelative;for(let h=0,m=u.count;h<m;h++)Vn.fromBufferAttribute(u,h),d&&(Za.fromBufferAttribute(e,h),Vn.add(Za)),a=Math.max(a,r.distanceToSquared(Vn))}this.boundingSphere.radius=Math.sqrt(a),isNaN(this.boundingSphere.radius)&&zt('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){zt("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const r=t.position,a=t.normal,o=t.uv;let c=this.getAttribute("tangent");(c===void 0||c.count!==r.count)&&(c=new ai(new Float32Array(4*r.count),4),this.setAttribute("tangent",c));const u=[],d=[];for(let A=0;A<r.count;A++)u[A]=new G,d[A]=new G;const h=new G,m=new G,g=new G,p=new st,x=new st,E=new st,T=new G,S=new G;function y(A,U,O){h.fromBufferAttribute(r,A),m.fromBufferAttribute(r,U),g.fromBufferAttribute(r,O),p.fromBufferAttribute(o,A),x.fromBufferAttribute(o,U),E.fromBufferAttribute(o,O),m.sub(h),g.sub(h),x.sub(p),E.sub(p);const k=1/(x.x*E.y-E.x*x.y);isFinite(k)&&(T.copy(m).multiplyScalar(E.y).addScaledVector(g,-x.y).multiplyScalar(k),S.copy(g).multiplyScalar(x.x).addScaledVector(m,-E.x).multiplyScalar(k),u[A].add(T),u[U].add(T),u[O].add(T),d[A].add(S),d[U].add(S),d[O].add(S))}let b=this.groups;b.length===0&&(b=[{start:0,count:e.count}]);for(let A=0,U=b.length;A<U;++A){const O=b[A],k=O.start,I=O.count;for(let X=k,V=k+I;X<V;X+=3)y(e.getX(X+0),e.getX(X+1),e.getX(X+2))}const D=new G,w=new G,C=new G,P=new G;function F(A){C.fromBufferAttribute(a,A),P.copy(C);const U=u[A];D.copy(U),D.sub(C.multiplyScalar(C.dot(U))).normalize(),w.crossVectors(P,U);const k=w.dot(d[A])<0?-1:1;c.setXYZW(A,D.x,D.y,D.z,k)}for(let A=0,U=b.length;A<U;++A){const O=b[A],k=O.start,I=O.count;for(let X=k,V=k+I;X<V;X+=3)F(e.getX(X+0)),F(e.getX(X+1)),F(e.getX(X+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let r=this.getAttribute("normal");if(r===void 0||r.count!==t.count)r=new ai(new Float32Array(t.count*3),3),this.setAttribute("normal",r);else for(let p=0,x=r.count;p<x;p++)r.setXYZ(p,0,0,0);const a=new G,o=new G,c=new G,u=new G,d=new G,h=new G,m=new G,g=new G;if(e)for(let p=0,x=e.count;p<x;p+=3){const E=e.getX(p+0),T=e.getX(p+1),S=e.getX(p+2);a.fromBufferAttribute(t,E),o.fromBufferAttribute(t,T),c.fromBufferAttribute(t,S),m.subVectors(c,o),g.subVectors(a,o),m.cross(g),u.fromBufferAttribute(r,E),d.fromBufferAttribute(r,T),h.fromBufferAttribute(r,S),u.add(m),d.add(m),h.add(m),r.setXYZ(E,u.x,u.y,u.z),r.setXYZ(T,d.x,d.y,d.z),r.setXYZ(S,h.x,h.y,h.z)}else for(let p=0,x=t.count;p<x;p+=3)a.fromBufferAttribute(t,p+0),o.fromBufferAttribute(t,p+1),c.fromBufferAttribute(t,p+2),m.subVectors(c,o),g.subVectors(a,o),m.cross(g),r.setXYZ(p+0,m.x,m.y,m.z),r.setXYZ(p+1,m.x,m.y,m.z),r.setXYZ(p+2,m.x,m.y,m.z);this.normalizeNormals(),r.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,r=e.count;t<r;t++)Vn.fromBufferAttribute(e,t),Vn.normalize(),e.setXYZ(t,Vn.x,Vn.y,Vn.z)}toNonIndexed(){function e(u,d){const h=u.array,m=u.itemSize,g=u.normalized,p=new h.constructor(d.length*m);let x=0,E=0;for(let T=0,S=d.length;T<S;T++){u.isInterleavedBufferAttribute?x=d[T]*u.data.stride+u.offset:x=d[T]*m;for(let y=0;y<m;y++)p[E++]=h[x++]}return new ai(p,m,g)}if(this.index===null)return St("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new oi,r=this.index.array,a=this.attributes;for(const u in a){const d=a[u],h=e(d,r);t.setAttribute(u,h)}const o=this.morphAttributes;for(const u in o){const d=[],h=o[u];for(let m=0,g=h.length;m<g;m++){const p=h[m],x=e(p,r);d.push(x)}t.morphAttributes[u]=d}t.morphTargetsRelative=this.morphTargetsRelative;const c=this.groups;for(let u=0,d=c.length;u<d;u++){const h=c[u];t.addGroup(h.start,h.count,h.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const d=this.parameters;for(const h in d)d[h]!==void 0&&(e[h]=d[h]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const r=this.attributes;for(const d in r){const h=r[d];e.data.attributes[d]=h.toJSON(e.data)}const a={};let o=!1;for(const d in this.morphAttributes){const h=this.morphAttributes[d],m=[];for(let g=0,p=h.length;g<p;g++){const x=h[g];m.push(x.toJSON(e.data))}m.length>0&&(a[d]=m,o=!0)}o&&(e.data.morphAttributes=a,e.data.morphTargetsRelative=this.morphTargetsRelative);const c=this.groups;c.length>0&&(e.data.groups=JSON.parse(JSON.stringify(c)));const u=this.boundingSphere;return u!==null&&(e.data.boundingSphere=u.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const r=e.index;r!==null&&this.setIndex(r.clone());const a=e.attributes;for(const h in a){const m=a[h];this.setAttribute(h,m.clone(t))}const o=e.morphAttributes;for(const h in o){const m=[],g=o[h];for(let p=0,x=g.length;p<x;p++)m.push(g[p].clone(t));this.morphAttributes[h]=m}this.morphTargetsRelative=e.morphTargetsRelative;const c=e.groups;for(let h=0,m=c.length;h<m;h++){const g=c[h];this.addGroup(g.start,g.count,g.materialIndex)}const u=e.boundingBox;u!==null&&(this.boundingBox=u.clone());const d=e.boundingSphere;return d!==null&&(this.boundingSphere=d.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Iw{constructor(e,t){this.isInterleavedBuffer=!0,this.array=e,this.stride=t,this.count=e!==void 0?e.length/t:0,this.usage=Bx,this.updateRanges=[],this.version=0,this.uuid=Fs()}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.array=new e.array.constructor(e.array),this.count=e.count,this.stride=e.stride,this.usage=e.usage,this}copyAt(e,t,r){e*=this.stride,r*=t.stride;for(let a=0,o=this.stride;a<o;a++)this.array[e+a]=t.array[r+a];return this}set(e,t=0){return this.array.set(e,t),this}clone(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);const t=new this.array.constructor(e.arrayBuffers[this.array.buffer._uuid]),r=new this.constructor(t,this.stride);return r.setUsage(this.usage),r}onUpload(e){return this.onUploadCallback=e,this}toJSON(e){e.arrayBuffers===void 0&&(e.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=Fs()),e.arrayBuffers[this.array.buffer._uuid]===void 0&&(e.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));const t={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return t.usage=this.usage,t}}const fi=new G;class nf{constructor(e,t,r,a=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=e,this.itemSize=t,this.offset=r,this.normalized=a}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(e){this.data.needsUpdate=e}applyMatrix4(e){for(let t=0,r=this.data.count;t<r;t++)fi.fromBufferAttribute(this,t),fi.applyMatrix4(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}applyNormalMatrix(e){for(let t=0,r=this.count;t<r;t++)fi.fromBufferAttribute(this,t),fi.applyNormalMatrix(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}transformDirection(e){for(let t=0,r=this.count;t<r;t++)fi.fromBufferAttribute(this,t),fi.transformDirection(e),this.setXYZ(t,fi.x,fi.y,fi.z);return this}getComponent(e,t){let r=this.array[e*this.data.stride+this.offset+t];return this.normalized&&(r=wr(r,this.array)),r}setComponent(e,t,r){return this.normalized&&(r=Qt(r,this.array)),this.data.array[e*this.data.stride+this.offset+t]=r,this}setX(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset]=t,this}setY(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+1]=t,this}setZ(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+2]=t,this}setW(e,t){return this.normalized&&(t=Qt(t,this.array)),this.data.array[e*this.data.stride+this.offset+3]=t,this}getX(e){let t=this.data.array[e*this.data.stride+this.offset];return this.normalized&&(t=wr(t,this.array)),t}getY(e){let t=this.data.array[e*this.data.stride+this.offset+1];return this.normalized&&(t=wr(t,this.array)),t}getZ(e){let t=this.data.array[e*this.data.stride+this.offset+2];return this.normalized&&(t=wr(t,this.array)),t}getW(e){let t=this.data.array[e*this.data.stride+this.offset+3];return this.normalized&&(t=wr(t,this.array)),t}setXY(e,t,r){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this}setXYZ(e,t,r,a){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),a=Qt(a,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this}setXYZW(e,t,r,a,o){return e=e*this.data.stride+this.offset,this.normalized&&(t=Qt(t,this.array),r=Qt(r,this.array),a=Qt(a,this.array),o=Qt(o,this.array)),this.data.array[e+0]=t,this.data.array[e+1]=r,this.data.array[e+2]=a,this.data.array[e+3]=o,this}clone(e){if(e===void 0){tf("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return new ai(new this.array.constructor(t),this.itemSize,this.normalized)}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.clone(e)),new nf(e.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(e){if(e===void 0){tf("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");const t=[];for(let r=0;r<this.count;r++){const a=r*this.data.stride+this.offset;for(let o=0;o<this.itemSize;o++)t.push(this.data.array[a+o])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:t,normalized:this.normalized}}else return e.interleavedBuffers===void 0&&(e.interleavedBuffers={}),e.interleavedBuffers[this.data.uuid]===void 0&&(e.interleavedBuffers[this.data.uuid]=this.data.toJSON(e)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}}const Mh=new G,kw=new G,zw=new wt;class ur{constructor(e=new G(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,r,a){return this.normal.set(e,t,r),this.constant=a,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,r){const a=Mh.subVectors(r,t).cross(kw.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(a,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,r=!0){const a=e.delta(Mh),o=this.normal.dot(a);if(o===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const c=-(e.start.dot(this.normal)+this.constant)/o;return r===!0&&(c<0||c>1)?null:t.copy(e.start).addScaledVector(a,c)}intersectsLine(e){const t=this.distanceToPoint(e.start),r=this.distanceToPoint(e.end);return t<0&&r>0||r<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const r=t||zw.getNormalMatrix(e),a=this.coplanarPoint(Mh).applyMatrix4(e),o=this.normal.applyMatrix3(r).normalize();return this.constant=-a.dot(o),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let Hw=0;class Lo extends Hs{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:Hw++}),this.uuid=Fs(),this.name="",this.type="Material",this.blending=Nl,this.side=ts,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=wx,this.blendDst=Tx,this.blendEquation=yo,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new At(0,0,0),this.blendAlpha=0,this.depthFunc=zl,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ow,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ih,this.stencilZFail=ih,this.stencilZPass=ih,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const r=e[t];if(r===void 0){St(`Material: parameter '${t}' has value of undefined.`);continue}const a=this[t];if(a===void 0){St(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}a&&a.isColor?a.set(r):a&&a.isVector2&&r&&r.isVector2||a&&a.isEuler&&r&&r.isEuler||a&&a.isVector3&&r&&r.isVector3?a.copy(r):this[t]=r}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const r={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};r.uuid=this.uuid,r.type=this.type,r.blending=this.blending,r.side=this.side,r.shadowSide=this.shadowSide,r.vertexColors=this.vertexColors,r.opacity=this.opacity,r.transparent=this.transparent,r.blendSrc=this.blendSrc,r.blendDst=this.blendDst,r.blendEquation=this.blendEquation,r.blendSrcAlpha=this.blendSrcAlpha,r.blendDstAlpha=this.blendDstAlpha,r.blendEquationAlpha=this.blendEquationAlpha,r.blendColor=this.blendColor.getHex(),r.blendAlpha=this.blendAlpha,r.depthFunc=this.depthFunc,r.depthTest=this.depthTest,r.depthWrite=this.depthWrite,r.colorWrite=this.colorWrite,r.clipIntersection=this.clipIntersection,r.clipShadows=this.clipShadows,r.stencilWriteMask=this.stencilWriteMask,r.stencilFunc=this.stencilFunc,r.stencilRef=this.stencilRef,r.stencilFuncMask=this.stencilFuncMask,r.stencilFail=this.stencilFail,r.stencilZFail=this.stencilZFail,r.stencilZPass=this.stencilZPass,r.stencilWrite=this.stencilWrite,r.polygonOffset=this.polygonOffset,r.polygonOffsetFactor=this.polygonOffsetFactor,r.polygonOffsetUnits=this.polygonOffsetUnits,r.dithering=this.dithering,r.alphaTest=this.alphaTest,r.alphaHash=this.alphaHash,r.alphaToCoverage=this.alphaToCoverage,r.premultipliedAlpha=this.premultipliedAlpha,r.forceSinglePass=this.forceSinglePass,r.allowOverride=this.allowOverride,r.visible=this.visible,r.toneMapped=this.toneMapped,r.name=this.name,this.color&&this.color.isColor&&(r.color=this.color.getHex()),this.roughness!==void 0&&(r.roughness=this.roughness),this.metalness!==void 0&&(r.metalness=this.metalness),this.sheen!==void 0&&(r.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(r.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(r.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(r.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(r.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(r.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(r.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(r.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(r.shininess=this.shininess),this.clearcoat!==void 0&&(r.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(r.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(r.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(r.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(r.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,r.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(r.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(r.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(r.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(r.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(r.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(r.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(r.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(r.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(r.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(r.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(r.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(r.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(r.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(r.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(r.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(r.lightMap=this.lightMap.toJSON(e).uuid,r.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(r.aoMap=this.aoMap.toJSON(e).uuid,r.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(r.bumpMap=this.bumpMap.toJSON(e).uuid,r.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(r.normalMap=this.normalMap.toJSON(e).uuid,r.normalMapType=this.normalMapType,r.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(r.displacementMap=this.displacementMap.toJSON(e).uuid,r.displacementScale=this.displacementScale,r.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(r.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(r.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(r.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(r.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(r.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(r.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(r.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(r.combine=this.combine)),this.envMapRotation!==void 0&&(r.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(r.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(r.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(r.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(r.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(r.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(r.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(r.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(r.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(r.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(r.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(r.size=this.size),this.sizeAttenuation!==void 0&&(r.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(r.clippingPlanes=this.clippingPlanes.map(o=>o.toJSON())),this.rotation!==void 0&&(r.rotation=this.rotation),this.depthPacking!==void 0&&(r.depthPacking=this.depthPacking),this.linewidth!==void 0&&(r.linewidth=this.linewidth),this.linecap!==void 0&&(r.linecap=this.linecap),this.linejoin!==void 0&&(r.linejoin=this.linejoin),this.dashSize!==void 0&&(r.dashSize=this.dashSize),this.gapSize!==void 0&&(r.gapSize=this.gapSize),this.scale!==void 0&&(r.scale=this.scale),this.wireframe!==void 0&&(r.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(r.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(r.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(r.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(r.flatShading=this.flatShading),this.fog!==void 0&&(r.fog=this.fog),Object.keys(this.userData).length>0&&(r.userData=this.userData);function a(o){const c=[];for(const u in o){const d=o[u];delete d.metadata,c.push(d)}return c}if(t){const o=a(e.textures),c=a(e.images);o.length>0&&(r.textures=o),c.length>0&&(r.images=c)}return r}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new At().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(r=>new ur().fromJSON(r))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let r=e.normalScale;Array.isArray(r)===!1&&(r=[r,r]),this.normalScale=new st().fromArray(r)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new st().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let r=null;if(t!==null){const a=t.length;r=new Array(a);for(let o=0;o!==a;++o)r[o]=t[o].clone()}return this.clippingPlanes=r,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class Yx extends Lo{constructor(e){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new At(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.rotation=e.rotation,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}let Ja;const vl=new G,Qa=new G,eo=new G,to=new st,_l=new st,jx=new $t,nu=new G,xl=new G,iu=new G,Hv=new st,Eh=new st,Vv=new st;class Vw extends Gn{constructor(e=new Yx){if(super(),this.isSprite=!0,this.type="Sprite",Ja===void 0){Ja=new oi;const t=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),r=new Iw(t,5);Ja.setIndex([0,1,2,0,2,3]),Ja.setAttribute("position",new nf(r,3,0,!1)),Ja.setAttribute("uv",new nf(r,2,3,!1))}this.geometry=Ja,this.material=e,this.center=new st(.5,.5),this.count=1}intersectsFrustum(e){return e.intersectsSprite(this)}raycast(e,t){e.camera===null&&zt('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),Qa.setFromMatrixScale(this.matrixWorld),jx.copy(e.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(e.camera.matrixWorldInverse,this.matrixWorld),eo.setFromMatrixPosition(this.modelViewMatrix),e.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&Qa.multiplyScalar(-eo.z);const r=this.material.rotation;let a,o;r!==0&&(o=Math.cos(r),a=Math.sin(r));const c=this.center;ru(nu.set(-.5,-.5,0),eo,c,Qa,a,o),ru(xl.set(.5,-.5,0),eo,c,Qa,a,o),ru(iu.set(.5,.5,0),eo,c,Qa,a,o),Hv.set(0,0),Eh.set(1,0),Vv.set(1,1);let u=e.ray.intersectTriangle(nu,xl,iu,!1,vl);if(u===null&&(ru(xl.set(-.5,.5,0),eo,c,Qa,a,o),Eh.set(0,1),u=e.ray.intersectTriangle(nu,iu,xl,!1,vl),u===null))return;const d=e.ray.origin.distanceTo(vl);d<e.near||d>e.far||t.push({distance:d,point:vl.clone(),uv:Dn.getInterpolation(vl,nu,xl,iu,Hv,Eh,Vv,new st),face:null,object:this})}copy(e,t){return super.copy(e,t),e.center!==void 0&&this.center.copy(e.center),this.material=e.material,this}}function ru(n,e,t,r,a,o){to.subVectors(n,t).addScalar(.5).multiply(r),a!==void 0?(_l.x=o*to.x-a*to.y,_l.y=a*to.x+o*to.y):_l.copy(to),n.copy(e),n.x+=_l.x,n.y+=_l.y,n.applyMatrix4(jx)}const qr=new G,wh=new G,su=new G,au=new G;class pf{constructor(e=new G,t=new G(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,qr)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const r=t.dot(this.direction);return r<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,r)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=qr.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(qr.copy(this.origin).addScaledVector(this.direction,t),qr.distanceToSquared(e))}distanceSqToSegment(e,t,r,a){wh.copy(e).add(t).multiplyScalar(.5),su.copy(t).sub(e).normalize(),au.copy(this.origin).sub(wh);const o=e.distanceTo(t)*.5,c=-this.direction.dot(su),u=au.dot(this.direction),d=-au.dot(su),h=au.lengthSq(),m=Math.abs(1-c*c);let g,p,x,E;if(m>0)if(g=c*d-u,p=c*u-d,E=o*m,g>=0)if(p>=-E)if(p<=E){const T=1/m;g*=T,p*=T,x=g*(g+c*p+2*u)+p*(c*g+p+2*d)+h}else p=o,g=Math.max(0,-(c*p+u)),x=-g*g+p*(p+2*d)+h;else p=-o,g=Math.max(0,-(c*p+u)),x=-g*g+p*(p+2*d)+h;else p<=-E?(g=Math.max(0,-(-c*o+u)),p=g>0?-o:Math.min(Math.max(-o,-d),o),x=-g*g+p*(p+2*d)+h):p<=E?(g=0,p=Math.min(Math.max(-o,-d),o),x=p*(p+2*d)+h):(g=Math.max(0,-(c*o+u)),p=g>0?o:Math.min(Math.max(-o,-d),o),x=-g*g+p*(p+2*d)+h);else p=c>0?-o:o,g=Math.max(0,-(c*p+u)),x=-g*g+p*(p+2*d)+h;return r&&r.copy(this.origin).addScaledVector(this.direction,g),a&&a.copy(wh).addScaledVector(su,p),x}intersectSphere(e,t){if(e.radius<0)return null;qr.subVectors(e.center,this.origin);const r=qr.dot(this.direction),a=qr.dot(qr)-r*r,o=e.radius*e.radius;if(a>o)return null;const c=Math.sqrt(o-a),u=r-c,d=r+c;return d<0?null:u<0?this.at(d,t):this.at(u,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const r=-(this.origin.dot(e.normal)+e.constant)/t;return r>=0?r:null}intersectPlane(e,t){const r=this.distanceToPlane(e);return r===null?null:this.at(r,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let r,a,o,c,u,d;const h=1/this.direction.x,m=1/this.direction.y,g=1/this.direction.z,p=this.origin;return h>=0?(r=(e.min.x-p.x)*h,a=(e.max.x-p.x)*h):(r=(e.max.x-p.x)*h,a=(e.min.x-p.x)*h),m>=0?(o=(e.min.y-p.y)*m,c=(e.max.y-p.y)*m):(o=(e.max.y-p.y)*m,c=(e.min.y-p.y)*m),r>c||o>a||((o>r||isNaN(r))&&(r=o),(c<a||isNaN(a))&&(a=c),g>=0?(u=(e.min.z-p.z)*g,d=(e.max.z-p.z)*g):(u=(e.max.z-p.z)*g,d=(e.min.z-p.z)*g),r>d||u>a)||((u>r||r!==r)&&(r=u),(d<a||a!==a)&&(a=d),a<0)?null:this.at(r>=0?r:a,t)}intersectsBox(e){return this.intersectBox(e,qr)!==null}intersectTriangle(e,t,r,a,o){const c=this.origin,u=this.direction,d=u.x,h=u.y,m=u.z,g=e.x-c.x,p=e.y-c.y,x=e.z-c.z,E=t.x-c.x,T=t.y-c.y,S=t.z-c.z,y=r.x-c.x,b=r.y-c.y,D=r.z-c.z,w=Math.abs(d),C=Math.abs(h),P=Math.abs(m);let F,A,U,O,k,I,X,V,q,ee,ae,J;if(w>=C&&w>=P?(U=d,I=g,q=E,J=y,d>=0?(F=h,A=m,O=p,k=x,X=T,V=S,ee=b,ae=D):(F=m,A=h,O=x,k=p,X=S,V=T,ee=D,ae=b)):C>=P?(U=h,I=p,q=T,J=b,h>=0?(F=m,A=d,O=x,k=g,X=S,V=E,ee=D,ae=y):(F=d,A=m,O=g,k=x,X=E,V=S,ee=y,ae=D)):(U=m,I=x,q=S,J=D,m>=0?(F=d,A=h,O=g,k=p,X=E,V=T,ee=y,ae=b):(F=h,A=d,O=p,k=g,X=T,V=E,ee=b,ae=y)),U===0)return null;const te=F/U,ne=A/U,H=1/U,oe=O-te*I,Se=k-ne*I,ke=X-te*q,Be=V-ne*q,He=ee-te*J,ue=ae-ne*J,he=He*Be-ue*ke,Pe=oe*ue-Se*He,Ke=ke*Se-Be*oe;if(a){if(he<0||Pe<0||Ke<0)return null}else if((he<0||Pe<0||Ke<0)&&(he>0||Pe>0||Ke>0))return null;const Ge=he+Pe+Ke;if(Ge===0)return null;const pt=H*(he*I+Pe*q+Ke*J);return(Ge>0?pt<0:pt>0)?null:this.at(pt/Ge,o)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class xm extends Lo{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new At(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.combine=Ax,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Bv=new $t,ia=new pf,ou=new _m,Gv=new G,lu=new G,cu=new G,uu=new G,Th=new G,fu=new G,Wv=new G,du=new G;class Ni extends Gn{constructor(e=new oi,t=new xm){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,r=Object.keys(t);if(r.length>0){const a=t[r[0]];if(a!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let o=0,c=a.length;o<c;o++){const u=a[o].name||String(o);this.morphTargetInfluences.push(0),this.morphTargetDictionary[u]=o}}}}getVertexPosition(e,t){const r=this.geometry,a=r.attributes.position,o=r.morphAttributes.position,c=r.morphTargetsRelative;t.fromBufferAttribute(a,e);const u=this.morphTargetInfluences;if(o&&u){fu.set(0,0,0);for(let d=0,h=o.length;d<h;d++){const m=u[d],g=o[d];m!==0&&(Th.fromBufferAttribute(g,e),c?fu.addScaledVector(Th,m):fu.addScaledVector(Th.sub(t),m))}t.add(fu)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const r=this.geometry,a=this.material,o=this.matrixWorld;a!==void 0&&(r.boundingSphere===null&&r.computeBoundingSphere(),ou.copy(r.boundingSphere),ou.applyMatrix4(o),ia.copy(e.ray).recast(e.near),!(ou.containsPoint(ia.origin)===!1&&(ia.intersectSphere(ou,Gv)===null||ia.origin.distanceToSquared(Gv)>(e.far-e.near)**2))&&(Bv.copy(o).invert(),ia.copy(e.ray).applyMatrix4(Bv),!(r.boundingBox!==null&&ia.intersectsBox(r.boundingBox)===!1)&&this._computeIntersections(e,t,ia)))}_computeIntersections(e,t,r){let a;const o=this.geometry,c=this.material,u=o.index,d=o.attributes.position,h=o.attributes.uv,m=o.attributes.uv1,g=o.attributes.normal,p=o.groups,x=o.drawRange;if(u!==null)if(Array.isArray(c))for(let E=0,T=p.length;E<T;E++){const S=p[E],y=c[S.materialIndex],b=Math.max(S.start,x.start),D=Math.min(u.count,Math.min(S.start+S.count,x.start+x.count));for(let w=b,C=D;w<C;w+=3){const P=u.getX(w),F=u.getX(w+1),A=u.getX(w+2);a=hu(this,y,e,r,h,m,g,P,F,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,x.start),T=Math.min(u.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const b=u.getX(S),D=u.getX(S+1),w=u.getX(S+2);a=hu(this,c,e,r,h,m,g,b,D,w),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}else if(d!==void 0)if(Array.isArray(c))for(let E=0,T=p.length;E<T;E++){const S=p[E],y=c[S.materialIndex],b=Math.max(S.start,x.start),D=Math.min(d.count,Math.min(S.start+S.count,x.start+x.count));for(let w=b,C=D;w<C;w+=3){const P=w,F=w+1,A=w+2;a=hu(this,y,e,r,h,m,g,P,F,A),a&&(a.faceIndex=Math.floor(w/3),a.face.materialIndex=S.materialIndex,t.push(a))}}else{const E=Math.max(0,x.start),T=Math.min(d.count,x.start+x.count);for(let S=E,y=T;S<y;S+=3){const b=S,D=S+1,w=S+2;a=hu(this,c,e,r,h,m,g,b,D,w),a&&(a.faceIndex=Math.floor(S/3),t.push(a))}}}}function Bw(n,e,t,r,a,o,c,u){let d;if(e.side===hi?d=r.intersectTriangle(c,o,a,!0,u):d=r.intersectTriangle(a,o,c,e.side===ts,u),d===null)return null;du.copy(u),du.applyMatrix4(n.matrixWorld);const h=t.ray.origin.distanceTo(du);return h<t.near||h>t.far?null:{distance:h,point:du.clone(),object:n}}function hu(n,e,t,r,a,o,c,u,d,h){n.getVertexPosition(u,lu),n.getVertexPosition(d,cu),n.getVertexPosition(h,uu);const m=Bw(n,e,t,r,lu,cu,uu,Wv);if(m){const g=new G;Dn.getBarycoord(Wv,lu,cu,uu,g),a&&(m.uv=Dn.getInterpolatedAttribute(a,u,d,h,g,new st)),o&&(m.uv1=Dn.getInterpolatedAttribute(o,u,d,h,g,new st)),c&&(m.normal=Dn.getInterpolatedAttribute(c,u,d,h,g,new G),m.normal.dot(r.direction)>0&&m.normal.multiplyScalar(-1));const p={a:u,b:d,c:h,normal:new G,materialIndex:0};Dn.getNormal(lu,cu,uu,p.normal),m.face=p,m.barycoord=g}return m}class Gw extends si{constructor(e=null,t=1,r=1,a,o,c,u,d,h=Yn,m=Yn,g,p){super(null,c,u,d,h,m,a,o,g,p),this.isDataTexture=!0,this.image={data:e,width:t,height:r},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const ra=new _m,Ww=new st(.5,.5),pu=new G;class ym{constructor(e=new ur,t=new ur,r=new ur,a=new ur,o=new ur,c=new ur){this.planes=[e,t,r,a,o,c]}set(e,t,r,a,o,c){const u=this.planes;return u[0].copy(e),u[1].copy(t),u[2].copy(r),u[3].copy(a),u[4].copy(o),u[5].copy(c),this}copy(e){const t=this.planes;for(let r=0;r<6;r++)t[r].copy(e.planes[r]);return this}setFromProjectionMatrix(e,t=Ar,r=!1){const a=this.planes,o=e.elements,c=o[0],u=o[1],d=o[2],h=o[3],m=o[4],g=o[5],p=o[6],x=o[7],E=o[8],T=o[9],S=o[10],y=o[11],b=o[12],D=o[13],w=o[14],C=o[15];if(a[0].setComponents(h-c,x-m,y-E,C-b).normalize(),a[1].setComponents(h+c,x+m,y+E,C+b).normalize(),a[2].setComponents(h+u,x+g,y+T,C+D).normalize(),a[3].setComponents(h-u,x-g,y-T,C-D).normalize(),r)a[4].setComponents(d,p,S,w).normalize(),a[5].setComponents(h-d,x-p,y-S,C-w).normalize();else if(a[4].setComponents(h-d,x-p,y-S,C-w).normalize(),t===Ar)a[5].setComponents(h+d,x+p,y+S,C+w).normalize();else if(t===Bl)a[5].setComponents(d,p,S,w).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),ra.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),ra.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(ra)}intersectsSprite(e){ra.center.set(0,0,0);const t=Ww.distanceTo(e.center);return ra.radius=.7071067811865476+t,ra.applyMatrix4(e.matrixWorld),this.intersectsSphere(ra)}intersectsSphere(e){const t=this.planes,r=e.center,a=-e.radius;for(let o=0;o<6;o++)if(t[o].distanceToPoint(r)<a)return!1;return!0}intersectsBox(e){const t=this.planes;for(let r=0;r<6;r++){const a=t[r];if(pu.x=a.normal.x>0?e.max.x:e.min.x,pu.y=a.normal.y>0?e.max.y:e.min.y,pu.z=a.normal.z>0?e.max.z:e.min.z,a.distanceToPoint(pu)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let r=0;r<6;r++)if(t[r].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Kx extends si{constructor(e=[],t=ga,r,a,o,c,u,d,h,m){super(e,t,r,a,o,c,u,d,h,m),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class Xw extends si{constructor(e,t,r,a,o,c,u,d,h){super(e,t,r,a,o,c,u,d,h),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Gl extends si{constructor(e,t,r=Cr,a,o,c,u=Yn,d=Yn,h,m=ns,g=1){if(m!==ns&&m!==ha)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const p={width:e,height:t,depth:g};super(p,a,o,c,u,d,m,r,h),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new gm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class $w extends Gl{constructor(e,t=Cr,r=ga,a,o,c=Yn,u=Yn,d,h=ns){const m={width:e,height:e,depth:1},g=[m,m,m,m,m,m];super(e,e,t,r,a,o,c,u,d,h),this.image=g,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class Zx extends si{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class $l extends oi{constructor(e=1,t=1,r=1,a=1,o=1,c=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:r,widthSegments:a,heightSegments:o,depthSegments:c};const u=this;a=Math.floor(a),o=Math.floor(o),c=Math.floor(c);const d=[],h=[],m=[],g=[];let p=0,x=0;E("z","y","x",-1,-1,r,t,e,c,o,0),E("z","y","x",1,-1,r,t,-e,c,o,1),E("x","z","y",1,1,e,r,t,a,c,2),E("x","z","y",1,-1,e,r,-t,a,c,3),E("x","y","z",1,-1,e,t,r,a,o,4),E("x","y","z",-1,-1,e,t,-r,a,o,5),this.setIndex(d),this.setAttribute("position",new Cn(h,3)),this.setAttribute("normal",new Cn(m,3)),this.setAttribute("uv",new Cn(g,2));function E(T,S,y,b,D,w,C,P,F,A,U){const O=w/F,k=C/A,I=w/2,X=C/2,V=P/2,q=F+1,ee=A+1;let ae=0,J=0;const te=new G;for(let ne=0;ne<ee;ne++){const H=ne*k-X;for(let oe=0;oe<q;oe++){const Se=oe*O-I;te[T]=Se*b,te[S]=H*D,te[y]=V,h.push(te.x,te.y,te.z),te[T]=0,te[S]=0,te[y]=P>0?1:-1,m.push(te.x,te.y,te.z),g.push(oe/F),g.push(1-ne/A),ae+=1}}for(let ne=0;ne<A;ne++)for(let H=0;H<F;H++){const oe=p+H+q*ne,Se=p+H+q*(ne+1),ke=p+(H+1)+q*(ne+1),Be=p+(H+1)+q*ne;d.push(oe,Se,Be),d.push(Se,ke,Be),J+=6}u.addGroup(x,J,U),x+=J,p+=ae}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new $l(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class mf extends oi{constructor(e=1,t=1,r=1,a=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:r,heightSegments:a};const o=e/2,c=t/2,u=Math.floor(r),d=Math.floor(a),h=u+1,m=d+1,g=e/u,p=t/d,x=[],E=[],T=[],S=[];for(let y=0;y<m;y++){const b=y*p-c;for(let D=0;D<h;D++){const w=D*g-o;E.push(w,-b,0),T.push(0,0,1),S.push(D/u),S.push(1-y/d)}}for(let y=0;y<d;y++)for(let b=0;b<u;b++){const D=b+h*y,w=b+h*(y+1),C=b+1+h*(y+1),P=b+1+h*y;x.push(D,w,P),x.push(w,C,P)}this.setIndex(x),this.setAttribute("position",new Cn(E,3)),this.setAttribute("normal",new Cn(T,3)),this.setAttribute("uv",new Cn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new mf(e.width,e.height,e.widthSegments,e.heightSegments)}}class Sm extends oi{constructor(e=1,t=32,r=16,a=0,o=Math.PI*2,c=0,u=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:r,phiStart:a,phiLength:o,thetaStart:c,thetaLength:u},t=Math.max(3,Math.floor(t)),r=Math.max(2,Math.floor(r));const d=Math.min(c+u,Math.PI);let h=0;const m=[],g=new G,p=new G,x=[],E=[],T=[],S=[];for(let y=0;y<=r;y++){const b=[],D=y/r,w=c+D*u,C=e*Math.cos(w),P=Math.sqrt(e*e-C*C);let F=0;y===0&&c===0?F=.5/t:y===r&&d===Math.PI&&(F=-.5/t);for(let A=0;A<=t;A++){const U=A/t,O=a+U*o;g.x=-P*Math.cos(O),g.y=C,g.z=P*Math.sin(O),E.push(g.x,g.y,g.z),p.copy(g).normalize(),T.push(p.x,p.y,p.z),S.push(U+F,1-D),b.push(h++)}m.push(b)}for(let y=0;y<r;y++)for(let b=0;b<t;b++){const D=m[y][b+1],w=m[y][b],C=m[y+1][b],P=m[y+1][b+1];(y!==0||c>0)&&x.push(D,w,P),(y!==r-1||d<Math.PI)&&x.push(w,C,P)}this.setIndex(x),this.setAttribute("position",new Cn(E,3)),this.setAttribute("normal",new Cn(T,3)),this.setAttribute("uv",new Cn(S,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Sm(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}class Mm extends oi{constructor(e=1,t=.4,r=12,a=48,o=Math.PI*2,c=0,u=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:e,tube:t,radialSegments:r,tubularSegments:a,arc:o,thetaStart:c,thetaLength:u},r=Math.floor(r),a=Math.floor(a);const d=[],h=[],m=[],g=[],p=new G,x=new G,E=new G;for(let T=0;T<=r;T++){const S=c+T/r*u;for(let y=0;y<=a;y++){const b=y/a*o;x.x=(e+t*Math.cos(S))*Math.cos(b),x.y=(e+t*Math.cos(S))*Math.sin(b),x.z=t*Math.sin(S),h.push(x.x,x.y,x.z),p.x=e*Math.cos(b),p.y=e*Math.sin(b),E.subVectors(x,p).normalize(),m.push(E.x,E.y,E.z),g.push(y/a),g.push(T/r)}}for(let T=1;T<=r;T++)for(let S=1;S<=a;S++){const y=(a+1)*T+S-1,b=(a+1)*(T-1)+S-1,D=(a+1)*(T-1)+S,w=(a+1)*T+S;d.push(y,b,w),d.push(b,D,w)}this.setIndex(d),this.setAttribute("position",new Cn(h,3)),this.setAttribute("normal",new Cn(m,3)),this.setAttribute("uv",new Cn(g,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Mm(e.radius,e.tube,e.radialSegments,e.tubularSegments,e.arc,e.thetaStart,e.thetaLength)}}function Po(n){const e={};for(const t in n){e[t]={};for(const r in n[t]){const a=n[t][r];if(Xv(a))a.isRenderTargetTexture?(St("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][r]=null):e[t][r]=a.clone();else if(Array.isArray(a))if(Xv(a[0])){const o=[];for(let c=0,u=a.length;c<u;c++)o[c]=a[c].clone();e[t][r]=o}else e[t][r]=a.slice();else e[t][r]=a}}return e}function di(n){const e={};for(let t=0;t<n.length;t++){const r=Po(n[t]);for(const a in r)e[a]=r[a]}return e}function Xv(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function qw(n){const e=[];for(let t=0;t<n.length;t++)e.push(n[t].clone());return e}function Jx(n){const e=n.getRenderTarget();return e===null?n.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:kt.workingColorSpace}const Yw={clone:Po,merge:di};var jw=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Kw=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Pr extends Lo{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=jw,this.fragmentShader=Kw,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=Po(e.uniforms),this.uniformsGroups=qw(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const a in this.uniforms){const c=this.uniforms[a].value;c&&c.isTexture?t.uniforms[a]={type:"t",value:c.toJSON(e).uuid}:c&&c.isColor?t.uniforms[a]={type:"c",value:c.getHex()}:c&&c.isVector2?t.uniforms[a]={type:"v2",value:c.toArray()}:c&&c.isVector3?t.uniforms[a]={type:"v3",value:c.toArray()}:c&&c.isVector4?t.uniforms[a]={type:"v4",value:c.toArray()}:c&&c.isMatrix3?t.uniforms[a]={type:"m3",value:c.toArray()}:c&&c.isMatrix4?t.uniforms[a]={type:"m4",value:c.toArray()}:t.uniforms[a]={value:c}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const r={};for(const a in this.extensions)this.extensions[a]===!0&&(r[a]=!0);return Object.keys(r).length>0&&(t.extensions=r),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const r in e.uniforms){const a=e.uniforms[r];switch(this.uniforms[r]={},a.type){case"t":this.uniforms[r].value=t[a.value]||null;break;case"c":this.uniforms[r].value=new At().setHex(a.value);break;case"v2":this.uniforms[r].value=new st().fromArray(a.value);break;case"v3":this.uniforms[r].value=new G().fromArray(a.value);break;case"v4":this.uniforms[r].value=new gn().fromArray(a.value);break;case"m3":this.uniforms[r].value=new wt().fromArray(a.value);break;case"m4":this.uniforms[r].value=new $t().fromArray(a.value);break;default:this.uniforms[r].value=a.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const r in e.extensions)this.extensions[r]=e.extensions[r];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class Zw extends Pr{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class zp extends Lo{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new At(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new At(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Ip,this.normalScale=new st(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ks,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Jw extends Lo{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Qw extends Lo{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}const $v={enabled:!1,files:{},add:function(n,e){this.enabled!==!1&&(qv(n)||(this.files[n]=e))},get:function(n){if(this.enabled!==!1&&!qv(n))return this.files[n]},remove:function(n){delete this.files[n]},clear:function(){this.files={}}};function qv(n){try{const e=n.slice(n.indexOf(":")+1);return new URL(e).protocol==="blob:"}catch{return!1}}class eT{constructor(e,t,r){const a=this;let o=!1,c=0,u=0,d;const h=[];this.onStart=void 0,this.onLoad=e,this.onProgress=t,this.onError=r,this._abortController=null,this.itemStart=function(m){u++,o===!1&&a.onStart!==void 0&&a.onStart(m,c,u),o=!0},this.itemEnd=function(m){c++,a.onProgress!==void 0&&a.onProgress(m,c,u),c===u&&(o=!1,a.onLoad!==void 0&&a.onLoad())},this.itemError=function(m){a.onError!==void 0&&a.onError(m)},this.resolveURL=function(m){return m=m.normalize("NFC"),d?d(m):m},this.setURLModifier=function(m){return d=m,this},this.addHandler=function(m,g){return h.push(m,g),this},this.removeHandler=function(m){const g=h.indexOf(m);return g!==-1&&h.splice(g,2),this},this.getHandler=function(m){for(let g=0,p=h.length;g<p;g+=2){const x=h[g],E=h[g+1];if(x.global&&(x.lastIndex=0),x.test(m))return E}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}}const tT=new eT;class Em{constructor(e){this.manager=e!==void 0?e:tT,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(e,t){const r=this;return new Promise(function(a,o){r.load(e,a,t,o)})}parse(){}setCrossOrigin(e){return this.crossOrigin=e,this}setWithCredentials(e){return this.withCredentials=e,this}setPath(e){return this.path=e,this}setResourcePath(e){return this.resourcePath=e,this}setRequestHeader(e){return this.requestHeader=e,this}abort(){return this}}Em.DEFAULT_MATERIAL_NAME="__DEFAULT";const Yr={};class nT extends Error{constructor(e,t){super(e),this.response=t}}class iT extends Em{constructor(e){super(e),this.mimeType="",this.responseType="",this._abortController=new AbortController}load(e,t,r,a){e===void 0&&(e=""),this.path!==void 0&&(e=this.path+e),e=this.manager.resolveURL(e);const o=$v.get(`file:${e}`);if(o!==void 0){this.manager.itemStart(e),setTimeout(()=>{t&&t(o),this.manager.itemEnd(e)},0);return}if(Yr[e]!==void 0){Yr[e].push({onLoad:t,onProgress:r,onError:a});return}Yr[e]=[],Yr[e].push({onLoad:t,onProgress:r,onError:a});const c=new Request(e,{headers:new Headers(this.requestHeader),credentials:this.withCredentials?"include":"same-origin",signal:typeof AbortSignal.any=="function"?AbortSignal.any([this._abortController.signal,this.manager.abortController.signal]):this._abortController.signal}),u=this.mimeType,d=this.responseType;fetch(c).then(h=>{if(h.status===200||h.status===0){if(h.status===0&&St("FileLoader: HTTP Status 0 received."),typeof ReadableStream>"u"||h.body===void 0||h.body.getReader===void 0)return h;const m=Yr[e],g=h.body.getReader(),p=h.headers.get("X-File-Size")||h.headers.get("Content-Length"),x=p?parseInt(p):0,E=x!==0;let T=0;const S=new ReadableStream({start(y){b();function b(){g.read().then(({done:D,value:w})=>{if(D)y.close();else{T+=w.byteLength;const C=new ProgressEvent("progress",{lengthComputable:E,loaded:T,total:x});for(let P=0,F=m.length;P<F;P++){const A=m[P];A.onProgress&&A.onProgress(C)}y.enqueue(w),b()}},D=>{y.error(D)})}}});return new Response(S)}else throw new nT(`fetch for "${h.url}" responded with ${h.status}: ${h.statusText}`,h)}).then(h=>{switch(d){case"arraybuffer":return h.arrayBuffer();case"blob":return h.blob();case"document":return h.text().then(m=>new DOMParser().parseFromString(m,u));case"json":return h.json();default:if(u==="")return h.text();{const g=/charset="?([^;"\s]*)"?/i.exec(u),p=g&&g[1]?g[1].toLowerCase():void 0,x=new TextDecoder(p);return h.arrayBuffer().then(E=>x.decode(E))}}}).then(h=>{$v.add(`file:${e}`,h);const m=Yr[e];delete Yr[e];for(let g=0,p=m.length;g<p;g++){const x=m[g];x.onLoad&&x.onLoad(h)}}).catch(h=>{const m=Yr[e];if(m===void 0)throw this.manager.itemError(e),h;delete Yr[e];for(let g=0,p=m.length;g<p;g++){const x=m[g];x.onError&&x.onError(h)}this.manager.itemError(e)}).finally(()=>{this.manager.itemEnd(e)}),this.manager.itemStart(e)}setResponseType(e){return this.responseType=e,this}setMimeType(e){return this.mimeType=e,this}abort(){return this._abortController.abort(),this._abortController=new AbortController,this}}class Qx extends Gn{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new At(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}class rT extends Qx{constructor(e,t,r){super(e,r),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.groundColor=new At(t)}copy(e,t){return super.copy(e,t),this.groundColor.copy(e.groundColor),this}toJSON(e){const t=super.toJSON(e);return t.object.groundColor=this.groundColor.getHex(),t}}const Ah=new $t,Yv=new G,jv=new G;class sT{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new st(512,512),this.mapType=Di,this.map=null,this.mapPass=null,this.matrix=new $t,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new ym,this._frameExtents=new st(1,1),this._viewportCount=1,this._viewports=[new gn(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;Yv.setFromMatrixPosition(e.matrixWorld),t.position.copy(Yv),jv.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(jv),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,r,a){Ah.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),r.setFromProjectionMatrix(Ah,e.coordinateSystem,e.reversedDepth);const o=this._frameExtents,c=a?a.z/o.x:1,u=a?a.w/o.y:1,d=a?a.x/o.x:0,h=a?a.y/o.y:0;e.coordinateSystem===Bl||e.reversedDepth?t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,1,0,0,0,0,1):t.set(.5*c,0,0,.5*c+d,0,.5*u,0,.5*u+h,0,0,.5,.5,0,0,0,1),t.multiply(Ah)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const mu=new G,gu=new Is,xr=new G;class ey extends Gn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new $t,this.projectionMatrix=new $t,this.projectionMatrixInverse=new $t,this.coordinateSystem=Ar,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(mu,gu,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,xr.set(1,1,1)).invert()}updateWorldMatrix(e,t,r=!1){super.updateWorldMatrix(e,t,r),this.matrixWorld.decompose(mu,gu,xr),xr.x===1&&xr.y===1&&xr.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(mu,gu,xr.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const Cs=new G,Kv=new st,Zv=new st;class Wi extends ey{constructor(e=50,t=1,r=.1,a=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=r,this.far=a,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=kp*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(Wu*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return kp*2*Math.atan(Math.tan(Wu*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,r){Cs.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z),Cs.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),r.set(Cs.x,Cs.y).multiplyScalar(-e/Cs.z)}getViewSize(e,t){return this.getViewBounds(e,Kv,Zv),t.subVectors(Zv,Kv)}setViewOffset(e,t,r,a,o,c){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(Wu*.5*this.fov)/this.zoom,r=2*t,a=this.aspect*r,o=-.5*a;const c=this.view;if(this.view!==null&&this.view.enabled){const d=c.fullWidth,h=c.fullHeight;o+=c.offsetX*a/d,t-=c.offsetY*r/h,a*=c.width/d,r*=c.height/h}const u=this.filmOffset;u!==0&&(o+=e*u/this.getFilmWidth()),this.projectionMatrix.makePerspective(o,o+a,t,t-r,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class wm extends ey{constructor(e=-1,t=1,r=1,a=-1,o=.1,c=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=r,this.bottom=a,this.near=o,this.far=c,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,r,a,o,c){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=r,this.view.offsetY=a,this.view.width=o,this.view.height=c,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),r=(this.right+this.left)/2,a=(this.top+this.bottom)/2;let o=r-e,c=r+e,u=a+t,d=a-t;if(this.view!==null&&this.view.enabled){const h=(this.right-this.left)/this.view.fullWidth/this.zoom,m=(this.top-this.bottom)/this.view.fullHeight/this.zoom;o+=h*this.view.offsetX,c=o+h*this.view.width,u-=m*this.view.offsetY,d=u-m*this.view.height}this.projectionMatrix.makeOrthographic(o,c,u,d,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class aT extends sT{constructor(){super(new wm(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}}class Jv extends Qx{constructor(e,t){super(e,t),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(Gn.DEFAULT_UP),this.updateMatrix(),this.target=new Gn,this.shadow=new aT}dispose(){super.dispose(),this.shadow.dispose()}copy(e){return super.copy(e),this.target=e.target.clone(),this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.shadow=this.shadow.toJSON(),t.object.target=this.target.uuid,t}}const no=-90,io=1;class oT extends Gn{constructor(e,t,r){super(),this.type="CubeCamera",this.renderTarget=r,this.coordinateSystem=null,this.activeMipmapLevel=0;const a=new Wi(no,io,e,t);a.layers=this.layers,this.add(a);const o=new Wi(no,io,e,t);o.layers=this.layers,this.add(o);const c=new Wi(no,io,e,t);c.layers=this.layers,this.add(c);const u=new Wi(no,io,e,t);u.layers=this.layers,this.add(u);const d=new Wi(no,io,e,t);d.layers=this.layers,this.add(d);const h=new Wi(no,io,e,t);h.layers=this.layers,this.add(h)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[r,a,o,c,u,d]=t;for(const h of t)this.remove(h);if(e===Ar)r.up.set(0,1,0),r.lookAt(1,0,0),a.up.set(0,1,0),a.lookAt(-1,0,0),o.up.set(0,0,-1),o.lookAt(0,1,0),c.up.set(0,0,1),c.lookAt(0,-1,0),u.up.set(0,1,0),u.lookAt(0,0,1),d.up.set(0,1,0),d.lookAt(0,0,-1);else if(e===Bl)r.up.set(0,-1,0),r.lookAt(-1,0,0),a.up.set(0,-1,0),a.lookAt(1,0,0),o.up.set(0,0,1),o.lookAt(0,1,0),c.up.set(0,0,-1),c.lookAt(0,-1,0),u.up.set(0,-1,0),u.lookAt(0,0,1),d.up.set(0,-1,0),d.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const h of t)this.add(h),h.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:r,activeMipmapLevel:a}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[o,c,u,d,h,m]=this.children,g=e.getRenderTarget(),p=e.getActiveCubeFace(),x=e.getActiveMipmapLevel(),E=e.xr.enabled;e.xr.enabled=!1;const T=r.texture.generateMipmaps;r.texture.generateMipmaps=!1;let S=!1;e.isWebGLRenderer===!0?S=e.state.buffers.depth.getReversed():S=e.reversedDepthBuffer,e.setRenderTarget(r,0,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(r,1,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(r,2,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,u),e.setRenderTarget(r,3,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,d),e.setRenderTarget(r,4,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,h),r.texture.generateMipmaps=T,e.setRenderTarget(r,5,a),S&&e.autoClear===!1&&e.clearDepth(),e.render(t,m),e.setRenderTarget(g,p,x),e.xr.enabled=E,r.texture.needsPMREMUpdate=!0}}class lT extends Wi{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}const Qv=new $t;class cT{constructor(e,t,r=0,a=1/0){this.ray=new pf(e,t),this.near=r,this.far=a,this.camera=null,this.layers=new vm,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):zt("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Qv.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Qv),this}intersectObject(e,t=!0,r=[]){return Hp(e,this,r,t),r.sort(e_),r}intersectObjects(e,t=!0,r=[]){for(let a=0,o=e.length;a<o;a++)Hp(e[a],this,r,t);return r.sort(e_),r}}function e_(n,e){return n.distance-e.distance}function Hp(n,e,t,r){let a=!0;if(n.layers.test(e.layers)&&n.raycast(e,t)===!1&&(a=!1),a===!0&&r===!0){const o=n.children;for(let c=0,u=o.length;c<u;c++)Hp(o[c],e,t,!0)}}class t_{constructor(e=1,t=0,r=0){this.radius=e,this.phi=t,this.theta=r}set(e,t,r){return this.radius=e,this.phi=t,this.theta=r,this}copy(e){return this.radius=e.radius,this.phi=e.phi,this.theta=e.theta,this}makeSafe(){return this.phi=Tt(this.phi,1e-6,Math.PI-1e-6),this}setFromVector3(e){return this.setFromCartesianCoords(e.x,e.y,e.z)}setFromCartesianCoords(e,t,r){return this.radius=Math.sqrt(e*e+t*t+r*r),this.radius===0?(this.theta=0,this.phi=0):(this.theta=Math.atan2(e,r),this.phi=Math.acos(Tt(t/this.radius,-1,1))),this}clone(){return new this.constructor().copy(this)}}const Om=class Om{constructor(e,t,r,a){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,r,a)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let r=0;r<4;r++)this.elements[r]=e[r+t];return this}set(e,t,r,a){const o=this.elements;return o[0]=e,o[2]=t,o[1]=r,o[3]=a,this}};Om.prototype.isMatrix2=!0;let n_=Om;const i_=new G,vu=new G,ro=new G,so=new G,bh=new G,uT=new G,fT=new G;class is{constructor(e=new G,t=new G){this.start=e,this.end=t}set(e,t){return this.start.copy(e),this.end.copy(t),this}copy(e){return this.start.copy(e.start),this.end.copy(e.end),this}getCenter(e){return e.addVectors(this.start,this.end).multiplyScalar(.5)}delta(e){return e.subVectors(this.end,this.start)}distanceSq(){return this.start.distanceToSquared(this.end)}distance(){return this.start.distanceTo(this.end)}at(e,t){return this.delta(t).multiplyScalar(e).add(this.start)}closestPointToPointParameter(e,t){i_.subVectors(e,this.start),vu.subVectors(this.end,this.start);const r=vu.dot(vu);if(r===0)return 0;let o=vu.dot(i_)/r;return t&&(o=Tt(o,0,1)),o}closestPointToPoint(e,t,r){const a=this.closestPointToPointParameter(e,t);return this.delta(r).multiplyScalar(a).add(this.start)}distanceSqToLine3(e,t=uT,r=fT){const a=10000000000000001e-32;let o,c;const u=this.start,d=e.start,h=this.end,m=e.end;ro.subVectors(h,u),so.subVectors(m,d),bh.subVectors(u,d);const g=ro.dot(ro),p=so.dot(so),x=so.dot(bh);if(g<=a&&p<=a)return t.copy(u),r.copy(d),t.sub(r),t.dot(t);if(g<=a)o=0,c=x/p,c=Tt(c,0,1);else{const E=ro.dot(bh);if(p<=a)c=0,o=Tt(-E/g,0,1);else{const T=ro.dot(so),S=g*p-T*T;S!==0?o=Tt((T*x-E*p)/S,0,1):o=0,c=(T*o+x)/p,c<0?(c=0,o=Tt(-E/g,0,1)):c>1&&(c=1,o=Tt((T-E)/g,0,1))}}return t.copy(u).addScaledVector(ro,o),r.copy(d).addScaledVector(so,c),t.distanceToSquared(r)}applyMatrix4(e){return this.start.applyMatrix4(e),this.end.applyMatrix4(e),this}equals(e){return e.start.equals(this.start)&&e.end.equals(this.end)}clone(){return new this.constructor().copy(this)}}class dT extends Hs{constructor(e,t=null){super(),this.object=e,this.domElement=t,this.enabled=!0,this.state=-1,this.keys={},this.mouseButtons={LEFT:null,MIDDLE:null,RIGHT:null},this.touches={ONE:null,TWO:null}}connect(e){this.domElement!==null&&this.disconnect(),this.domElement=e}disconnect(){}dispose(){}update(){}}function r_(n,e,t,r){const a=hT(r);switch(t){case zx:return n*e;case Vx:return n*e/a.components*a.byteLength;case fm:return n*e/a.components*a.byteLength;case va:return n*e*2/a.components*a.byteLength;case dm:return n*e*2/a.components*a.byteLength;case Hx:return n*e*3/a.components*a.byteLength;case fr:return n*e*4/a.components*a.byteLength;case hm:return n*e*4/a.components*a.byteLength;case Hu:case Vu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case Bu:case Gu:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case lp:case up:return Math.max(n,16)*Math.max(e,8)/4;case op:case cp:return Math.max(n,8)*Math.max(e,8)/2;case fp:case dp:case pp:case mp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*8;case hp:case Ku:case gp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case vp:return Math.floor((n+3)/4)*Math.floor((e+3)/4)*16;case _p:return Math.floor((n+4)/5)*Math.floor((e+3)/4)*16;case xp:return Math.floor((n+4)/5)*Math.floor((e+4)/5)*16;case yp:return Math.floor((n+5)/6)*Math.floor((e+4)/5)*16;case Sp:return Math.floor((n+5)/6)*Math.floor((e+5)/6)*16;case Mp:return Math.floor((n+7)/8)*Math.floor((e+4)/5)*16;case Ep:return Math.floor((n+7)/8)*Math.floor((e+5)/6)*16;case wp:return Math.floor((n+7)/8)*Math.floor((e+7)/8)*16;case Tp:return Math.floor((n+9)/10)*Math.floor((e+4)/5)*16;case Ap:return Math.floor((n+9)/10)*Math.floor((e+5)/6)*16;case bp:return Math.floor((n+9)/10)*Math.floor((e+7)/8)*16;case Cp:return Math.floor((n+9)/10)*Math.floor((e+9)/10)*16;case Rp:return Math.floor((n+11)/12)*Math.floor((e+9)/10)*16;case Pp:return Math.floor((n+11)/12)*Math.floor((e+11)/12)*16;case Lp:case Dp:case Np:return Math.ceil(n/4)*Math.ceil(e/4)*16;case Up:case Fp:return Math.ceil(n/4)*Math.ceil(e/4)*8;case Zu:case Op:return Math.ceil(n/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function hT(n){switch(n){case Di:case Fx:return{byteLength:1,components:1};case Hl:case Ox:case Rr:return{byteLength:2,components:1};case cm:case um:return{byteLength:2,components:4};case Cr:case lm:case Tr:return{byteLength:4,components:1};case Ix:case kx:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Xl}}));typeof window<"u"&&(window.__THREE__?St("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Xl);/**
 * @license
 * Copyright 2010-2026 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function ty(){let n=null,e=!1,t=null,r=null;function a(o,c){r=n.requestAnimationFrame(a),t(o,c)}return{start:function(){e!==!0&&t!==null&&n!==null&&(r=n.requestAnimationFrame(a),e=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(r),e=!1},setAnimationLoop:function(o){t=o},setContext:function(o){n=o}}}function pT(n){const e=new WeakMap;function t(u,d){const h=u.array,m=u.usage,g=h.byteLength,p=n.createBuffer();n.bindBuffer(d,p),n.bufferData(d,h,m),u.onUploadCallback();let x;if(h instanceof Float32Array)x=n.FLOAT;else if(typeof Float16Array<"u"&&h instanceof Float16Array)x=n.HALF_FLOAT;else if(h instanceof Uint16Array)u.isFloat16BufferAttribute?x=n.HALF_FLOAT:x=n.UNSIGNED_SHORT;else if(h instanceof Int16Array)x=n.SHORT;else if(h instanceof Uint32Array)x=n.UNSIGNED_INT;else if(h instanceof Int32Array)x=n.INT;else if(h instanceof Int8Array)x=n.BYTE;else if(h instanceof Uint8Array)x=n.UNSIGNED_BYTE;else if(h instanceof Uint8ClampedArray)x=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+h);return{buffer:p,type:x,bytesPerElement:h.BYTES_PER_ELEMENT,version:u.version,size:g}}function r(u,d,h){const m=d.array,g=d.updateRanges;if(n.bindBuffer(h,u),g.length===0)n.bufferSubData(h,0,m);else{g.sort((x,E)=>x.start-E.start);let p=0;for(let x=1;x<g.length;x++){const E=g[p],T=g[x];T.start<=E.start+E.count+1?E.count=Math.max(E.count,T.start+T.count-E.start):(++p,g[p]=T)}g.length=p+1;for(let x=0,E=g.length;x<E;x++){const T=g[x];n.bufferSubData(h,T.start*m.BYTES_PER_ELEMENT,m,T.start,T.count)}d.clearUpdateRanges()}d.onUploadCallback()}function a(u){return u.isInterleavedBufferAttribute&&(u=u.data),e.get(u)}function o(u){u.isInterleavedBufferAttribute&&(u=u.data);const d=e.get(u);d&&(n.deleteBuffer(d.buffer),e.delete(u))}function c(u,d){if(u.isInterleavedBufferAttribute&&(u=u.data),u.isGLBufferAttribute){const m=e.get(u);(!m||m.version<u.version)&&e.set(u,{buffer:u.buffer,type:u.type,bytesPerElement:u.elementSize,version:u.version});return}const h=e.get(u);if(h===void 0)e.set(u,t(u,d));else if(h.version<u.version){if(h.size!==u.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");r(h.buffer,u,d),h.version=u.version}}return{get:a,remove:o,update:c}}var mT=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,gT=`#ifdef USE_ALPHAHASH
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
#endif`,vT=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,_T=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,xT=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,yT=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,ST=`#ifdef USE_AOMAP
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
#endif`,MT=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ET=`#ifdef USE_BATCHING
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
#endif`,wT=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,TT=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,AT=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,bT=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,CT=`#ifdef USE_IRIDESCENCE
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
#endif`,RT=`#ifdef USE_BUMPMAP
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
#endif`,PT=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,LT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,DT=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,NT=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,UT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,FT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,OT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,IT=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,kT=`#define PI 3.141592653589793
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
} // validated`,zT=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,HT=`vec3 transformedNormal = objectNormal;
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
#endif`,VT=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,BT=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,GT=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,WT=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,XT="gl_FragColor = linearToOutputTexel( gl_FragColor );",$T=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,qT=`#ifdef USE_ENVMAP
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
#endif`,YT=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,jT=`#ifdef USE_ENVMAP
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
#endif`,KT=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,ZT=`#ifdef USE_ENVMAP
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
#endif`,JT=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,QT=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,eA=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,tA=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,nA=`#ifdef USE_GRADIENTMAP
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
}`,iA=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,rA=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,sA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,aA=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,oA=`#ifdef USE_ENVMAP
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
#endif`,lA=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,cA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,uA=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,fA=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,dA=`PhysicalMaterial material;
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
#endif`,hA=`uniform sampler2D dfgLUT;
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
}`,pA=`
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
#endif`,mA=`#if defined( RE_IndirectDiffuse )
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
#endif`,gA=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,vA=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,_A=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,xA=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,yA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,SA=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,MA=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,EA=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,wA=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,TA=`#if defined( USE_POINTS_UV )
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
#endif`,AA=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,bA=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,CA=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,RA=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,PA=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,LA=`#ifdef USE_MORPHTARGETS
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
#endif`,DA=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,NA=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,UA=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,FA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,OA=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,IA=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,kA=`#ifdef USE_NORMALMAP
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
#endif`,zA=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,HA=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,VA=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,BA=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,GA=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,WA=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,XA=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,$A=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,qA=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,YA=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,jA=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,KA=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,ZA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,JA=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,QA=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,e1=`float getShadowMask() {
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
}`,t1=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,n1=`#ifdef USE_SKINNING
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
#endif`,i1=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,r1=`#ifdef USE_SKINNING
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
#endif`,s1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,a1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,o1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,l1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,c1=`#ifdef USE_TRANSMISSION
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
#endif`,u1=`#ifdef USE_TRANSMISSION
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
#endif`,f1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,d1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,h1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,p1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const m1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,g1=`uniform sampler2D t2D;
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
}`,v1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,_1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,x1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,y1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,S1=`#include <common>
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
}`,M1=`#if DEPTH_PACKING == 3200
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
}`,E1=`#define DISTANCE
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
}`,w1=`#define DISTANCE
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
}`,T1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,A1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,b1=`uniform float scale;
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
}`,C1=`uniform vec3 diffuse;
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
}`,R1=`#include <common>
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
}`,P1=`uniform vec3 diffuse;
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
}`,L1=`#define LAMBERT
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
}`,D1=`#define LAMBERT
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
}`,N1=`#define MATCAP
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
}`,U1=`#define MATCAP
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
}`,F1=`#define NORMAL
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
}`,O1=`#define NORMAL
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
}`,I1=`#define PHONG
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
}`,k1=`#define PHONG
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
}`,z1=`#define STANDARD
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
}`,H1=`#define STANDARD
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
}`,V1=`#define TOON
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
}`,B1=`#define TOON
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
}`,G1=`uniform float size;
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
}`,W1=`uniform vec3 diffuse;
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
}`,X1=`#include <common>
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
}`,$1=`uniform vec3 color;
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
}`,q1=`uniform float rotation;
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
}`,Y1=`uniform vec3 diffuse;
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
}`,Lt={alphahash_fragment:mT,alphahash_pars_fragment:gT,alphamap_fragment:vT,alphamap_pars_fragment:_T,alphatest_fragment:xT,alphatest_pars_fragment:yT,aomap_fragment:ST,aomap_pars_fragment:MT,batching_pars_vertex:ET,batching_vertex:wT,begin_vertex:TT,beginnormal_vertex:AT,bsdfs:bT,iridescence_fragment:CT,bumpmap_pars_fragment:RT,clipping_planes_fragment:PT,clipping_planes_pars_fragment:LT,clipping_planes_pars_vertex:DT,clipping_planes_vertex:NT,color_fragment:UT,color_pars_fragment:FT,color_pars_vertex:OT,color_vertex:IT,common:kT,cube_uv_reflection_fragment:zT,defaultnormal_vertex:HT,displacementmap_pars_vertex:VT,displacementmap_vertex:BT,emissivemap_fragment:GT,emissivemap_pars_fragment:WT,colorspace_fragment:XT,colorspace_pars_fragment:$T,envmap_fragment:qT,envmap_common_pars_fragment:YT,envmap_pars_fragment:jT,envmap_pars_vertex:KT,envmap_physical_pars_fragment:oA,envmap_vertex:ZT,fog_vertex:JT,fog_pars_vertex:QT,fog_fragment:eA,fog_pars_fragment:tA,gradientmap_pars_fragment:nA,lightmap_pars_fragment:iA,lights_lambert_fragment:rA,lights_lambert_pars_fragment:sA,lights_pars_begin:aA,lights_toon_fragment:lA,lights_toon_pars_fragment:cA,lights_phong_fragment:uA,lights_phong_pars_fragment:fA,lights_physical_fragment:dA,lights_physical_pars_fragment:hA,lights_fragment_begin:pA,lights_fragment_maps:mA,lights_fragment_end:gA,lightprobes_pars_fragment:vA,logdepthbuf_fragment:_A,logdepthbuf_pars_fragment:xA,logdepthbuf_pars_vertex:yA,logdepthbuf_vertex:SA,map_fragment:MA,map_pars_fragment:EA,map_particle_fragment:wA,map_particle_pars_fragment:TA,metalnessmap_fragment:AA,metalnessmap_pars_fragment:bA,morphinstance_vertex:CA,morphcolor_vertex:RA,morphnormal_vertex:PA,morphtarget_pars_vertex:LA,morphtarget_vertex:DA,normal_fragment_begin:NA,normal_fragment_maps:UA,normal_pars_fragment:FA,normal_pars_vertex:OA,normal_vertex:IA,normalmap_pars_fragment:kA,clearcoat_normal_fragment_begin:zA,clearcoat_normal_fragment_maps:HA,clearcoat_pars_fragment:VA,iridescence_pars_fragment:BA,opaque_fragment:GA,packing:WA,premultiplied_alpha_fragment:XA,project_vertex:$A,dithering_fragment:qA,dithering_pars_fragment:YA,roughnessmap_fragment:jA,roughnessmap_pars_fragment:KA,shadowmap_pars_fragment:ZA,shadowmap_pars_vertex:JA,shadowmap_vertex:QA,shadowmask_pars_fragment:e1,skinbase_vertex:t1,skinning_pars_vertex:n1,skinning_vertex:i1,skinnormal_vertex:r1,specularmap_fragment:s1,specularmap_pars_fragment:a1,tonemapping_fragment:o1,tonemapping_pars_fragment:l1,transmission_fragment:c1,transmission_pars_fragment:u1,uv_pars_fragment:f1,uv_pars_vertex:d1,uv_vertex:h1,worldpos_vertex:p1,background_vert:m1,background_frag:g1,backgroundCube_vert:v1,backgroundCube_frag:_1,cube_vert:x1,cube_frag:y1,depth_vert:S1,depth_frag:M1,distance_vert:E1,distance_frag:w1,equirect_vert:T1,equirect_frag:A1,linedashed_vert:b1,linedashed_frag:C1,meshbasic_vert:R1,meshbasic_frag:P1,meshlambert_vert:L1,meshlambert_frag:D1,meshmatcap_vert:N1,meshmatcap_frag:U1,meshnormal_vert:F1,meshnormal_frag:O1,meshphong_vert:I1,meshphong_frag:k1,meshphysical_vert:z1,meshphysical_frag:H1,meshtoon_vert:V1,meshtoon_frag:B1,points_vert:G1,points_frag:W1,shadow_vert:X1,shadow_frag:$1,sprite_vert:q1,sprite_frag:Y1},$e={common:{diffuse:{value:new At(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new wt}},envmap:{envMap:{value:null},envMapRotation:{value:new wt},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new wt}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new wt}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new wt},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new wt},normalScale:{value:new st(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new wt},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new wt}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new wt}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new wt}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new At(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new G},probesMax:{value:new G},probesResolution:{value:new G}},points:{diffuse:{value:new At(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0},uvTransform:{value:new wt}},sprite:{diffuse:{value:new At(16777215)},opacity:{value:1},center:{value:new st(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new wt},alphaMap:{value:null},alphaMapTransform:{value:new wt},alphaTest:{value:0}}},Er={basic:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.fog]),vertexShader:Lt.meshbasic_vert,fragmentShader:Lt.meshbasic_frag},lambert:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new At(0)},envMapIntensity:{value:1}}]),vertexShader:Lt.meshlambert_vert,fragmentShader:Lt.meshlambert_frag},phong:{uniforms:di([$e.common,$e.specularmap,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,$e.lights,{emissive:{value:new At(0)},specular:{value:new At(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphong_vert,fragmentShader:Lt.meshphong_frag},standard:{uniforms:di([$e.common,$e.envmap,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.roughnessmap,$e.metalnessmap,$e.fog,$e.lights,{emissive:{value:new At(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag},toon:{uniforms:di([$e.common,$e.aomap,$e.lightmap,$e.emissivemap,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.gradientmap,$e.fog,$e.lights,{emissive:{value:new At(0)}}]),vertexShader:Lt.meshtoon_vert,fragmentShader:Lt.meshtoon_frag},matcap:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,$e.fog,{matcap:{value:null}}]),vertexShader:Lt.meshmatcap_vert,fragmentShader:Lt.meshmatcap_frag},points:{uniforms:di([$e.points,$e.fog]),vertexShader:Lt.points_vert,fragmentShader:Lt.points_frag},dashed:{uniforms:di([$e.common,$e.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Lt.linedashed_vert,fragmentShader:Lt.linedashed_frag},depth:{uniforms:di([$e.common,$e.displacementmap]),vertexShader:Lt.depth_vert,fragmentShader:Lt.depth_frag},normal:{uniforms:di([$e.common,$e.bumpmap,$e.normalmap,$e.displacementmap,{opacity:{value:1}}]),vertexShader:Lt.meshnormal_vert,fragmentShader:Lt.meshnormal_frag},sprite:{uniforms:di([$e.sprite,$e.fog]),vertexShader:Lt.sprite_vert,fragmentShader:Lt.sprite_frag},background:{uniforms:{uvTransform:{value:new wt},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Lt.background_vert,fragmentShader:Lt.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new wt}},vertexShader:Lt.backgroundCube_vert,fragmentShader:Lt.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Lt.cube_vert,fragmentShader:Lt.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Lt.equirect_vert,fragmentShader:Lt.equirect_frag},distance:{uniforms:di([$e.common,$e.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Lt.distance_vert,fragmentShader:Lt.distance_frag},shadow:{uniforms:di([$e.lights,$e.fog,{color:{value:new At(0)},opacity:{value:1}}]),vertexShader:Lt.shadow_vert,fragmentShader:Lt.shadow_frag}};Er.physical={uniforms:di([Er.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new wt},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new wt},clearcoatNormalScale:{value:new st(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new wt},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new wt},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new wt},sheen:{value:0},sheenColor:{value:new At(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new wt},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new wt},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new wt},transmissionSamplerSize:{value:new st},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new wt},attenuationDistance:{value:0},attenuationColor:{value:new At(0)},specularColor:{value:new At(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new wt},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new wt},anisotropyVector:{value:new st},anisotropyMap:{value:null},anisotropyMapTransform:{value:new wt}}]),vertexShader:Lt.meshphysical_vert,fragmentShader:Lt.meshphysical_frag};const _u={r:0,b:0,g:0},j1=new $t,ny=new wt;ny.set(-1,0,0,0,1,0,0,0,1);function K1(n,e,t,r,a,o){const c=new At(0);let u=a===!0?0:1,d,h,m=null,g=0,p=null;function x(b){let D=b.isScene===!0?b.background:null;if(D&&D.isTexture){const w=b.backgroundBlurriness>0;D=e.get(D,w)}return D}function E(b){let D=!1;const w=x(b);w===null?S(c,u):w&&w.isColor&&(S(w,1),D=!0);const C=n.xr.getEnvironmentBlendMode();C==="additive"?t.buffers.color.setClear(0,0,0,1,o):C==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,o),(n.autoClear||D)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function T(b,D){const w=x(D);w&&(w.isCubeTexture||w.mapping===hf)?(h===void 0&&(h=new Ni(new $l(1,1,1),new Pr({name:"BackgroundCubeMaterial",uniforms:Po(Er.backgroundCube.uniforms),vertexShader:Er.backgroundCube.vertexShader,fragmentShader:Er.backgroundCube.fragmentShader,side:hi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),h.geometry.deleteAttribute("normal"),h.geometry.deleteAttribute("uv"),h.onBeforeRender=function(C,P,F){this.matrixWorld.copyPosition(F.matrixWorld)},Object.defineProperty(h.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(h)),h.material.uniforms.envMap.value=w,h.material.uniforms.backgroundBlurriness.value=D.backgroundBlurriness,h.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,h.material.uniforms.backgroundRotation.value.setFromMatrix4(j1.makeRotationFromEuler(D.backgroundRotation)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&h.material.uniforms.backgroundRotation.value.premultiply(ny),h.material.toneMapped=kt.getTransfer(w.colorSpace)!==Kt,(m!==w||g!==w.version||p!==n.toneMapping)&&(h.material.needsUpdate=!0,m=w,g=w.version,p=n.toneMapping),h.layers.enableAll(),b.unshift(h,h.geometry,h.material,0,0,null)):w&&w.isTexture&&(d===void 0&&(d=new Ni(new mf(2,2),new Pr({name:"BackgroundMaterial",uniforms:Po(Er.background.uniforms),vertexShader:Er.background.vertexShader,fragmentShader:Er.background.fragmentShader,side:ts,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),d.geometry.deleteAttribute("normal"),Object.defineProperty(d.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(d)),d.material.uniforms.t2D.value=w,d.material.uniforms.backgroundIntensity.value=D.backgroundIntensity,d.material.toneMapped=kt.getTransfer(w.colorSpace)!==Kt,w.matrixAutoUpdate===!0&&w.updateMatrix(),d.material.uniforms.uvTransform.value.copy(w.matrix),(m!==w||g!==w.version||p!==n.toneMapping)&&(d.material.needsUpdate=!0,m=w,g=w.version,p=n.toneMapping),d.layers.enableAll(),b.unshift(d,d.geometry,d.material,0,0,null))}function S(b,D){b.getRGB(_u,Jx(n)),t.buffers.color.setClear(_u.r,_u.g,_u.b,D,o)}function y(){h!==void 0&&(h.geometry.dispose(),h.material.dispose(),h=void 0),d!==void 0&&(d.geometry.dispose(),d.material.dispose(),d=void 0)}return{getClearColor:function(){return c},setClearColor:function(b,D=1){c.set(b),u=D,S(c,u)},getClearAlpha:function(){return u},setClearAlpha:function(b){u=b,S(c,u)},render:E,addToRenderList:T,dispose:y}}function Z1(n,e){const t=n.getParameter(n.MAX_VERTEX_ATTRIBS),r={},a=p(null);let o=a,c=!1;function u(k,I,X,V,q){let ee=!1;const ae=g(k,V,X,I);o!==ae&&(o=ae,h(o.object)),ee=x(k,V,X,q),ee&&E(k,V,X,q),q!==null&&e.update(q,n.ELEMENT_ARRAY_BUFFER),(ee||c)&&(c=!1,w(k,I,X,V),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,e.get(q).buffer))}function d(){return n.createVertexArray()}function h(k){return n.bindVertexArray(k)}function m(k){return n.deleteVertexArray(k)}function g(k,I,X,V){const q=V.wireframe===!0;let ee=r[I.id];ee===void 0&&(ee={},r[I.id]=ee);const ae=k.isInstancedMesh===!0?k.id:0;let J=ee[ae];J===void 0&&(J={},ee[ae]=J);let te=J[X.id];te===void 0&&(te={},J[X.id]=te);let ne=te[q];return ne===void 0&&(ne=p(d()),te[q]=ne),ne}function p(k){const I=[],X=[],V=[];for(let q=0;q<t;q++)I[q]=0,X[q]=0,V[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:I,enabledAttributes:X,attributeDivisors:V,object:k,attributes:{},index:null}}function x(k,I,X,V){const q=o.attributes,ee=I.attributes;let ae=0;const J=X.getAttributes();for(const te in J)if(J[te].location>=0){const H=q[te];let oe=ee[te];if(oe===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(oe=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(oe=k.instanceColor)),H===void 0||H.attribute!==oe||oe&&H.data!==oe.data)return!0;ae++}return o.attributesNum!==ae||o.index!==V}function E(k,I,X,V){const q={},ee=I.attributes;let ae=0;const J=X.getAttributes();for(const te in J)if(J[te].location>=0){let H=ee[te];H===void 0&&(te==="instanceMatrix"&&k.instanceMatrix&&(H=k.instanceMatrix),te==="instanceColor"&&k.instanceColor&&(H=k.instanceColor));const oe={};oe.attribute=H,H&&H.data&&(oe.data=H.data),q[te]=oe,ae++}o.attributes=q,o.attributesNum=ae,o.index=V}function T(){const k=o.newAttributes;for(let I=0,X=k.length;I<X;I++)k[I]=0}function S(k){y(k,0)}function y(k,I){const X=o.newAttributes,V=o.enabledAttributes,q=o.attributeDivisors;X[k]=1,V[k]===0&&(n.enableVertexAttribArray(k),V[k]=1),q[k]!==I&&(n.vertexAttribDivisor(k,I),q[k]=I)}function b(){const k=o.newAttributes,I=o.enabledAttributes;for(let X=0,V=I.length;X<V;X++)I[X]!==k[X]&&(n.disableVertexAttribArray(X),I[X]=0)}function D(k,I,X,V,q,ee,ae){ae===!0?n.vertexAttribIPointer(k,I,X,q,ee):n.vertexAttribPointer(k,I,X,V,q,ee)}function w(k,I,X,V){T();const q=V.attributes,ee=X.getAttributes(),ae=I.defaultAttributeValues;for(const J in ee){const te=ee[J];if(te.location>=0){let ne=q[J];if(ne===void 0&&(J==="instanceMatrix"&&k.instanceMatrix&&(ne=k.instanceMatrix),J==="instanceColor"&&k.instanceColor&&(ne=k.instanceColor)),ne!==void 0){const H=ne.normalized,oe=ne.itemSize,Se=e.get(ne);if(Se===void 0)continue;const ke=Se.buffer,Be=Se.type,He=Se.bytesPerElement,ue=Be===n.INT||Be===n.UNSIGNED_INT||ne.gpuType===lm;if(ne.isInterleavedBufferAttribute){const he=ne.data,Pe=he.stride,Ke=ne.offset;if(he.isInstancedInterleavedBuffer){for(let Ge=0;Ge<te.locationSize;Ge++)y(te.location+Ge,he.meshPerAttribute);k.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=he.meshPerAttribute*he.count)}else for(let Ge=0;Ge<te.locationSize;Ge++)S(te.location+Ge);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let Ge=0;Ge<te.locationSize;Ge++)D(te.location+Ge,oe/te.locationSize,Be,H,Pe*He,(Ke+oe/te.locationSize*Ge)*He,ue)}else{if(ne.isInstancedBufferAttribute){for(let he=0;he<te.locationSize;he++)y(te.location+he,ne.meshPerAttribute);k.isInstancedMesh!==!0&&V._maxInstanceCount===void 0&&(V._maxInstanceCount=ne.meshPerAttribute*ne.count)}else for(let he=0;he<te.locationSize;he++)S(te.location+he);n.bindBuffer(n.ARRAY_BUFFER,ke);for(let he=0;he<te.locationSize;he++)D(te.location+he,oe/te.locationSize,Be,H,oe*He,oe/te.locationSize*he*He,ue)}}else if(ae!==void 0){const H=ae[J];if(H!==void 0)switch(H.length){case 2:n.vertexAttrib2fv(te.location,H);break;case 3:n.vertexAttrib3fv(te.location,H);break;case 4:n.vertexAttrib4fv(te.location,H);break;default:n.vertexAttrib1fv(te.location,H)}}}}b()}function C(){U();for(const k in r){const I=r[k];for(const X in I){const V=I[X];for(const q in V){const ee=V[q];for(const ae in ee)m(ee[ae].object),delete ee[ae];delete V[q]}}delete r[k]}}function P(k){if(r[k.id]===void 0)return;const I=r[k.id];for(const X in I){const V=I[X];for(const q in V){const ee=V[q];for(const ae in ee)m(ee[ae].object),delete ee[ae];delete V[q]}}delete r[k.id]}function F(k){for(const I in r){const X=r[I];for(const V in X){const q=X[V];if(q[k.id]===void 0)continue;const ee=q[k.id];for(const ae in ee)m(ee[ae].object),delete ee[ae];delete q[k.id]}}}function A(k){for(const I in r){const X=r[I],V=k.isInstancedMesh===!0?k.id:0,q=X[V];if(q!==void 0){for(const ee in q){const ae=q[ee];for(const J in ae)m(ae[J].object),delete ae[J];delete q[ee]}delete X[V],Object.keys(X).length===0&&delete r[I]}}}function U(){O(),c=!0,o!==a&&(o=a,h(o.object))}function O(){a.geometry=null,a.program=null,a.wireframe=!1}return{setup:u,reset:U,resetDefaultState:O,dispose:C,releaseStatesOfGeometry:P,releaseStatesOfObject:A,releaseStatesOfProgram:F,initAttributes:T,enableAttribute:S,disableUnusedAttributes:b}}function J1(n,e,t){let r;function a(d){r=d}function o(d,h){n.drawArrays(r,d,h),t.update(h,r,1)}function c(d,h,m){m!==0&&(n.drawArraysInstanced(r,d,h,m),t.update(h,r,m))}function u(d,h,m){if(m===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(r,d,0,h,0,m);let p=0;for(let x=0;x<m;x++)p+=h[x];t.update(p,r,1)}this.setMode=a,this.render=o,this.renderInstances=c,this.renderMultiDraw=u}function Q1(n,e,t,r){let a;function o(){if(a!==void 0)return a;if(e.has("EXT_texture_filter_anisotropic")===!0){const F=e.get("EXT_texture_filter_anisotropic");a=n.getParameter(F.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else a=0;return a}function c(F){return!(F!==fr&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function u(F){const A=F===Rr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(F!==Di&&F!==Tr&&!A&&r.convert(F)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function d(F){if(F==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";F="mediump"}return F==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let h=t.precision!==void 0?t.precision:"highp";const m=d(h);m!==h&&(St("WebGLRenderer:",h,"not supported, using",m,"instead."),h=m);const g=t.logarithmicDepthBuffer===!0,p=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&p===!1&&St("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const x=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),E=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),T=n.getParameter(n.MAX_TEXTURE_SIZE),S=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),y=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),D=n.getParameter(n.MAX_VARYING_VECTORS),w=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),C=n.getParameter(n.MAX_SAMPLES),P=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:o,getMaxPrecision:d,textureFormatReadable:c,textureTypeReadable:u,precision:h,logarithmicDepthBuffer:g,reversedDepthBuffer:p,maxTextures:x,maxVertexTextures:E,maxTextureSize:T,maxCubemapSize:S,maxAttributes:y,maxVertexUniforms:b,maxVaryings:D,maxFragmentUniforms:w,maxSamples:C,samples:P}}function eb(n){const e=this;let t=null,r=0,a=!1,o=!1;const c=new ur,u=new wt,d={value:null,needsUpdate:!1};this.uniform=d,this.numPlanes=0,this.numIntersection=0,this.init=function(g,p){const x=g.length!==0||p||r!==0||a;return a=p,r=g.length,x},this.beginShadows=function(){o=!0,m(null)},this.endShadows=function(){o=!1},this.setGlobalState=function(g,p){t=m(g,p,0)},this.setState=function(g,p,x){const E=g.clippingPlanes,T=g.clipIntersection,S=g.clipShadows,y=n.get(g);if(!a||E===null||E.length===0||o&&!S)o?m(null):h();else{const b=o?0:r,D=b*4;let w=y.clippingState||null;d.value=w,w=m(E,p,D,x);for(let C=0;C!==D;++C)w[C]=t[C];y.clippingState=w,this.numIntersection=T?this.numPlanes:0,this.numPlanes+=b}};function h(){d.value!==t&&(d.value=t,d.needsUpdate=r>0),e.numPlanes=r,e.numIntersection=0}function m(g,p,x,E){const T=g!==null?g.length:0;let S=null;if(T!==0){if(S=d.value,E!==!0||S===null){const y=x+T*4,b=p.matrixWorldInverse;u.getNormalMatrix(b),(S===null||S.length<y)&&(S=new Float32Array(y));for(let D=0,w=x;D!==T;++D,w+=4)c.copy(g[D]).applyMatrix4(b,u),c.normal.toArray(S,w),S[w+3]=c.constant}d.value=S,d.needsUpdate=!0}return e.numPlanes=T,e.numIntersection=0,S}}const Mo=4,tb=6,nb=20,ib=256,yl=new wm,s_=new At;let Ch=null,Rh=0,Ph=0,Lh=!1;const rb=new G,sa=new G;class a_{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,r=.1,a=100,o={}){const{size:c=256,position:u=rb}=o;Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(c);const d=this._allocateTargets();return d.depthBuffer=!0,this._sceneToCubeUV(e,r,a,d,u),t>0&&this._blur(d,0,0,t),this._applyPMREM(d),this._cleanup(d),d}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=c_(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=l_(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ch,Rh,Ph),this._renderer.xr.enabled=Lh,e.scissorTest=!1,ao(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===ga||e.mapping===Ro?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ch=this._renderer.getRenderTarget(),Rh=this._renderer.getActiveCubeFace(),Ph=this._renderer.getActiveMipmapLevel(),Lh=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const r=t||this._allocateTargets();return this._textureToCubeUV(e,r),this._applyPMREM(r),this._cleanup(r),r}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,r={magFilter:ii,minFilter:ii,generateMipmaps:!1,type:Rr,format:fr,colorSpace:Ju,depthBuffer:!1},a=o_(e,t,r);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=o_(e,t,r);const{_lodMax:o}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=sb(o)),this._blurMaterial=ob(o,e,t),this._ggxMaterial=ab(o,e,t)}return a}_compileMaterial(e){const t=new Ni(new oi,e);this._renderer.compile(t,yl)}_sceneToCubeUV(e,t,r,a,o){const d=new Wi(90,1,t,r),h=[1,-1,1,1,1,1],m=[1,1,1,-1,-1,-1],g=this._renderer,p=g.autoClear,x=g.toneMapping;g.getClearColor(s_),g.toneMapping=br,g.autoClear=!1,g.state.buffers.depth.getReversed()&&(g.setRenderTarget(a),g.clearDepth(),g.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new Ni(new $l,new xm({name:"PMREM.Background",side:hi,depthWrite:!1,depthTest:!1})));const T=this._backgroundBox,S=T.material;let y=!1;const b=e.background;b?b.isColor&&(S.color.copy(b),e.background=null,y=!0):(S.color.copy(s_),y=!0);for(let D=0;D<6;D++){const w=D%3;w===0?(d.up.set(0,h[D],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x+m[D],o.y,o.z)):w===1?(d.up.set(0,0,h[D]),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y+m[D],o.z)):(d.up.set(0,h[D],0),d.position.set(o.x,o.y,o.z),d.lookAt(o.x,o.y,o.z+m[D]));const C=this._cubeSize;ao(a,w*C,D>2?C:0,C,C),g.setRenderTarget(a),y&&g.render(T,d),g.render(e,d)}g.toneMapping=x,g.autoClear=p,e.background=b}_textureToCubeUV(e,t){const r=this._renderer,a=e.mapping===ga||e.mapping===Ro;a?(this._cubemapMaterial===null&&(this._cubemapMaterial=c_()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=l_());const o=a?this._cubemapMaterial:this._equirectMaterial,c=this._lodMeshes[0];c.material=o;const u=o.uniforms;u.envMap.value=e;const d=this._cubeSize;ao(t,0,0,3*d,2*d),r.setRenderTarget(t),r.render(c,yl)}_applyPMREM(e){const t=this._renderer,r=t.autoClear;t.autoClear=!1;const a=this._lodMeshes.length;for(let o=1;o<a;o++)this._applyGGXFilter(e,o-1,o);t.autoClear=r}_applyGGXFilter(e,t,r){const a=this._renderer,o=this._pingPongRenderTarget,c=this._ggxMaterial,u=this._lodMeshes[r];u.material=c;const d=c.uniforms,h=r/(this._lodMeshes.length-1),m=t/(this._lodMeshes.length-1),g=Math.sqrt(h*h-m*m),p=h*1.25,x=g*p,{_lodMax:E}=this,T=this._sizeLods[r],S=3*T*(r>E-Mo?r-E+Mo:0),y=4*(this._cubeSize-T);d.envMap.value=e.texture,d.roughness.value=x,d.mipInt.value=E-t,ao(o,S,y,3*T,2*T),a.setRenderTarget(o),a.render(u,yl),d.envMap.value=o.texture,d.roughness.value=0,d.mipInt.value=E-r,ao(e,S,y,3*T,2*T),a.setRenderTarget(e),a.render(u,yl)}_blur(e,t,r,a){const o=this._pingPongRenderTarget,c=Math.min(a,Math.PI)/Math.SQRT2;this._blurPass(e,o,t,r,c),this._blurPass(o,e,r,r,c)}_blurPass(e,t,r,a,o){const c=this._renderer,u=this._blurMaterial,d=this._lodMeshes[a];d.material=u;const h=u.uniforms;h.envMap.value=e.texture,h.sigma.value=o,h.mipInt.value=this._lodMax-r;const m=this._sizeLods[a],g=3*m*(a>this._lodMax-Mo?a-this._lodMax+Mo:0),p=4*(this._cubeSize-m);ao(t,g,p,3*m,2*m),c.setRenderTarget(t),c.render(d,yl)}}function sb(n){const e=[],t=[];let r=n;const a=n-Mo+1+tb;for(let o=0;o<a;o++){const c=Math.pow(2,r);e.push(c);const u=1/(c-2),d=-u,h=1+u,m=[d,d,h,d,h,h,d,d,h,h,d,h],g=6,p=6,x=3,E=new Float32Array(x*p*g),T=new Float32Array(x*p*g);for(let y=0;y<g;y++){const b=y%3*2/3-1,D=y>2?0:-1,w=[b,D,0,b+2/3,D,0,b+2/3,D+1,0,b,D,0,b+2/3,D+1,0,b,D+1,0];E.set(w,x*p*y);for(let C=0;C<p;C++){const P=m[C*2]*2-1,F=m[C*2+1]*2-1;y===0?sa.set(1,F,P):y===1?sa.set(-P,1,-F):y===2?sa.set(-P,F,1):y===3?sa.set(-1,F,-P):y===4?sa.set(-P,-1,F):sa.set(P,F,-1),sa.toArray(T,(y*p+C)*x)}}const S=new oi;S.setAttribute("position",new ai(E,x)),S.setAttribute("outputDirection",new ai(T,x)),t.push(new Ni(S,null)),r>Mo&&r--}return{lodMeshes:t,sizeLods:e}}function o_(n,e,t){const r=new hr(n,e,t);return r.texture.mapping=hf,r.texture.name="PMREM.cubeUv",r.scissorTest=!0,r}function ao(n,e,t,r,a){n.viewport.set(e,t,r,a),n.scissor.set(e,t,r,a)}function ab(n,e,t){return new Pr({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ib,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function ob(n,e,t){return new Pr({name:"SphericalGaussianBlur",defines:{SAMPLES:nb,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function l_(){return new Pr({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:gf(),fragmentShader:`

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
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function c_(){return new Pr({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:gf(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Qr,depthTest:!1,depthWrite:!1})}function gf(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class iy extends hr{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const r={width:e,height:e,depth:1},a=[r,r,r,r,r,r];this.texture=new Kx(a),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const r={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},a=new $l(5,5,5),o=new Pr({name:"CubemapFromEquirect",uniforms:Po(r.uniforms),vertexShader:r.vertexShader,fragmentShader:r.fragmentShader,side:hi,blending:Qr});o.uniforms.tEquirect.value=t;const c=new Ni(a,o),u=t.minFilter;return t.minFilter===da&&(t.minFilter=ii),new oT(1,10,this).update(e,c),t.minFilter=u,c.geometry.dispose(),c.material.dispose(),this}clear(e,t=!0,r=!0,a=!0){const o=e.getRenderTarget();for(let c=0;c<6;c++)e.setRenderTarget(this,c),e.clear(t,r,a);e.setRenderTarget(o)}}function lb(n){let e=new WeakMap,t=new WeakMap,r=null;function a(p,x=!1){return p==null?null:x?c(p):o(p)}function o(p){if(p&&p.isTexture){const x=p.mapping;if(x===eh||x===th)if(e.has(p)){const E=e.get(p).texture;return u(E,p.mapping)}else{const E=p.image;if(E&&E.height>0){const T=new iy(E.height);return T.fromEquirectangularTexture(n,p),e.set(p,T),p.addEventListener("dispose",h),u(T.texture,p.mapping)}else return null}}return p}function c(p){if(p&&p.isTexture){const x=p.mapping,E=x===eh||x===th,T=x===ga||x===Ro;if(E||T){let S=t.get(p);const y=S!==void 0?S.texture.pmremVersion:0;if(p.isRenderTargetTexture&&p.pmremVersion!==y)return r===null&&(r=new a_(n)),S=E?r.fromEquirectangular(p,S):r.fromCubemap(p,S),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),S.texture;if(S!==void 0)return S.texture;{const b=p.image;return E&&b&&b.height>0||T&&b&&d(b)?(r===null&&(r=new a_(n)),S=E?r.fromEquirectangular(p):r.fromCubemap(p),S.texture.pmremVersion=p.pmremVersion,t.set(p,S),p.addEventListener("dispose",m),S.texture):null}}}return p}function u(p,x){return x===eh?p.mapping=ga:x===th&&(p.mapping=Ro),p}function d(p){let x=0;const E=6;for(let T=0;T<E;T++)p[T]!==void 0&&x++;return x===E}function h(p){const x=p.target;x.removeEventListener("dispose",h);const E=e.get(x);E!==void 0&&(e.delete(x),E.dispose())}function m(p){const x=p.target;x.removeEventListener("dispose",m);const E=t.get(x);E!==void 0&&(t.delete(x),E.dispose())}function g(){e=new WeakMap,t=new WeakMap,r!==null&&(r.dispose(),r=null)}return{get:a,dispose:g}}function cb(n){const e={};function t(r){if(e[r]!==void 0)return e[r];const a=n.getExtension(r);return e[r]=a,a}return{has:function(r){return t(r)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(r){const a=t(r);return a===null&&To("WebGLRenderer: "+r+" extension not supported."),a}}}function ub(n,e,t,r){const a={},o=new WeakMap;function c(g){const p=g.target;p.index!==null&&e.remove(p.index);for(const E in p.attributes)e.remove(p.attributes[E]);p.removeEventListener("dispose",c),delete a[p.id];const x=o.get(p);x&&(e.remove(x),o.delete(p)),r.releaseStatesOfGeometry(p),p.isInstancedBufferGeometry===!0&&delete p._maxInstanceCount,t.memory.geometries--}function u(g,p){return a[p.id]===!0||(p.addEventListener("dispose",c),a[p.id]=!0,t.memory.geometries++),p}function d(g){const p=g.attributes;for(const x in p)e.update(p[x],n.ARRAY_BUFFER)}function h(g){const p=[],x=g.index,E=g.attributes.position;let T=0;if(E===void 0)return;if(x!==null){const b=x.array;T=x.version;for(let D=0,w=b.length;D<w;D+=3){const C=b[D+0],P=b[D+1],F=b[D+2];p.push(C,P,P,F,F,C)}}else{const b=E.array;T=E.version;for(let D=0,w=b.length/3-1;D<w;D+=3){const C=D+0,P=D+1,F=D+2;p.push(C,P,P,F,F,C)}}const S=new(E.count>=65535?qx:$x)(p,1);S.version=T;const y=o.get(g);y&&e.remove(y),o.set(g,S)}function m(g){const p=o.get(g);if(p){const x=g.index;x!==null&&p.version<x.version&&h(g)}else h(g);return o.get(g)}return{get:u,update:d,getWireframeAttribute:m}}function fb(n,e,t){let r;function a(g){r=g}let o,c;function u(g){o=g.type,c=g.bytesPerElement}function d(g,p){n.drawElements(r,p,o,g*c),t.update(p,r,1)}function h(g,p,x){x!==0&&(n.drawElementsInstanced(r,p,o,g*c,x),t.update(p,r,x))}function m(g,p,x){if(x===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(r,p,0,o,g,0,x);let T=0;for(let S=0;S<x;S++)T+=p[S];t.update(T,r,1)}this.setMode=a,this.setIndex=u,this.render=d,this.renderInstances=h,this.renderMultiDraw=m}function db(n){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function r(o,c,u){switch(t.calls++,c){case n.TRIANGLES:t.triangles+=u*(o/3);break;case n.LINES:t.lines+=u*(o/2);break;case n.LINE_STRIP:t.lines+=u*(o-1);break;case n.LINE_LOOP:t.lines+=u*o;break;case n.POINTS:t.points+=u*o;break;default:zt("WebGLInfo: Unknown draw mode:",c);break}}function a(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:a,update:r}}function hb(n,e,t){const r=new WeakMap,a=new gn;function o(c,u,d){const h=c.morphTargetInfluences,m=u.morphAttributes.position||u.morphAttributes.normal||u.morphAttributes.color,g=m!==void 0?m.length:0;let p=r.get(u);if(p===void 0||p.count!==g){let U=function(){F.dispose(),r.delete(u),u.removeEventListener("dispose",U)};p!==void 0&&p.texture.dispose();const x=u.morphAttributes.position!==void 0,E=u.morphAttributes.normal!==void 0,T=u.morphAttributes.color!==void 0,S=u.morphAttributes.position||[],y=u.morphAttributes.normal||[],b=u.morphAttributes.color||[];let D=0;x===!0&&(D=1),E===!0&&(D=2),T===!0&&(D=3);let w=u.attributes.position.count*D,C=1;w>e.maxTextureSize&&(C=Math.ceil(w/e.maxTextureSize),w=e.maxTextureSize);const P=new Float32Array(w*C*4*g),F=new Wx(P,w,C,g);F.type=Tr,F.needsUpdate=!0;const A=D*4;for(let O=0;O<g;O++){const k=S[O],I=y[O],X=b[O],V=w*C*4*O;for(let q=0;q<k.count;q++){const ee=q*A;x===!0&&(a.fromBufferAttribute(k,q),P[V+ee+0]=a.x,P[V+ee+1]=a.y,P[V+ee+2]=a.z,P[V+ee+3]=0),E===!0&&(a.fromBufferAttribute(I,q),P[V+ee+4]=a.x,P[V+ee+5]=a.y,P[V+ee+6]=a.z,P[V+ee+7]=0),T===!0&&(a.fromBufferAttribute(X,q),P[V+ee+8]=a.x,P[V+ee+9]=a.y,P[V+ee+10]=a.z,P[V+ee+11]=X.itemSize===4?a.w:1)}}p={count:g,texture:F,size:new st(w,C)},r.set(u,p),u.addEventListener("dispose",U)}if(c.isInstancedMesh===!0&&c.morphTexture!==null)d.getUniforms().setValue(n,"morphTexture",c.morphTexture,t);else{let x=0;for(let T=0;T<h.length;T++)x+=h[T];const E=u.morphTargetsRelative?1:1-x;d.getUniforms().setValue(n,"morphTargetBaseInfluence",E),d.getUniforms().setValue(n,"morphTargetInfluences",h)}d.getUniforms().setValue(n,"morphTargetsTexture",p.texture,t),d.getUniforms().setValue(n,"morphTargetsTextureSize",p.size)}return{update:o}}function pb(n,e,t,r,a){let o=new WeakMap;function c(h){const m=a.render.frame,g=h.geometry,p=e.get(h,g);if(o.get(p)!==m&&(e.update(p),o.set(p,m)),h.isInstancedMesh&&(h.hasEventListener("dispose",d)===!1&&h.addEventListener("dispose",d),o.get(h)!==m&&(t.update(h.instanceMatrix,n.ARRAY_BUFFER),h.instanceColor!==null&&t.update(h.instanceColor,n.ARRAY_BUFFER),o.set(h,m))),h.isSkinnedMesh){const x=h.skeleton;o.get(x)!==m&&(x.update(),o.set(x,m))}return p}function u(){o=new WeakMap}function d(h){const m=h.target;m.removeEventListener("dispose",d),r.releaseStatesOfObject(m),t.remove(m.instanceMatrix),m.instanceColor!==null&&t.remove(m.instanceColor)}return{update:c,dispose:u}}const mb={[bx]:"LINEAR_TONE_MAPPING",[Cx]:"REINHARD_TONE_MAPPING",[Rx]:"CINEON_TONE_MAPPING",[Px]:"ACES_FILMIC_TONE_MAPPING",[Dx]:"AGX_TONE_MAPPING",[Nx]:"NEUTRAL_TONE_MAPPING",[Lx]:"CUSTOM_TONE_MAPPING"};function gb(n,e,t,r,a,o){const c=new hr(e,t,{type:n,depthBuffer:a,stencilBuffer:o,samples:r?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let u=null,d=null;const h=new oi;h.setAttribute("position",new Cn([-1,3,0,-1,-1,0,3,-1,0],3)),h.setAttribute("uv",new Cn([0,2,0,0,2,0],2));const m=new Zw({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),g=new Ni(h,m),p=new wm(-1,1,1,-1,0,1);let x=null,E=null,T=!1,S,y=null,b=[],D=!1;this.setSize=function(w,C){c.setSize(w,C),u!==null&&u.setSize(w,C),d!==null&&d.setSize(w,C);for(let P=0;P<b.length;P++){const F=b[P];F.setSize&&F.setSize(w,C)}},this.setEffects=function(w){b=w,D=b.length>0&&b[0].isRenderPass===!0;const C=c.width,P=c.height;b.length>0&&u===null&&(u=new hr(C,P,{type:Rr,depthBuffer:!1,stencilBuffer:!1}),d=new hr(C,P,{type:Rr,depthBuffer:!1,stencilBuffer:!1}));for(let F=0;F<b.length;F++){const A=b[F];A.setSize&&A.setSize(C,P)}},this.begin=function(w,C){if(T||w.toneMapping===br&&b.length===0)return!1;if(y=C,C!==null){const P=C.width,F=C.height;(c.width!==P||c.height!==F)&&this.setSize(P,F)}return D===!1&&w.setRenderTarget(c),S=w.toneMapping,w.toneMapping=br,!0},this.hasRenderPass=function(){return D},this.end=function(w,C){w.toneMapping=S,T=!0;let P=c,F=u;for(let A=0;A<b.length;A++){const U=b[A];U.enabled!==!1&&(U.render(w,F,P,C),U.needsSwap!==!1&&(P=F,F=F===u?d:u))}if(x!==w.outputColorSpace||E!==w.toneMapping){x=w.outputColorSpace,E=w.toneMapping,m.defines={},kt.getTransfer(x)===Kt&&(m.defines.SRGB_TRANSFER="");const A=mb[E];A&&(m.defines[A]=""),m.needsUpdate=!0}m.uniforms.tDiffuse.value=P.texture,w.setRenderTarget(y),w.render(g,p),y=null,T=!1},this.isCompositing=function(){return T},this.dispose=function(){c.dispose(),u!==null&&u.dispose(),d!==null&&d.dispose(),h.dispose(),m.dispose()}}const ry=new si,Vp=new Gl(1,1),sy=new Wx,ay=new Tw,oy=new Kx,u_=[],f_=[],d_=new Float32Array(16),h_=new Float32Array(9),p_=new Float32Array(4);function Do(n,e,t){const r=n[0];if(r<=0||r>0)return n;const a=e*t;let o=u_[a];if(o===void 0&&(o=new Float32Array(a),u_[a]=o),e!==0){r.toArray(o,0);for(let c=1,u=0;c!==e;++c)u+=t,n[c].toArray(o,u)}return o}function Fn(n,e){if(n.length!==e.length)return!1;for(let t=0,r=n.length;t<r;t++)if(n[t]!==e[t])return!1;return!0}function On(n,e){for(let t=0,r=e.length;t<r;t++)n[t]=e[t]}function vf(n,e){let t=f_[e];t===void 0&&(t=new Int32Array(e),f_[e]=t);for(let r=0;r!==e;++r)t[r]=n.allocateTextureUnit();return t}function vb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1f(this.addr,e),t[0]=e)}function _b(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;n.uniform2fv(this.addr,e),On(t,e)}}function xb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(n.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Fn(t,e))return;n.uniform3fv(this.addr,e),On(t,e)}}function yb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;n.uniform4fv(this.addr,e),On(t,e)}}function Sb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;n.uniformMatrix2fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,r))return;p_.set(r),n.uniformMatrix2fv(this.addr,!1,p_),On(t,r)}}function Mb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;n.uniformMatrix3fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,r))return;h_.set(r),n.uniformMatrix3fv(this.addr,!1,h_),On(t,r)}}function Eb(n,e){const t=this.cache,r=e.elements;if(r===void 0){if(Fn(t,e))return;n.uniformMatrix4fv(this.addr,!1,e),On(t,e)}else{if(Fn(t,r))return;d_.set(r),n.uniformMatrix4fv(this.addr,!1,d_),On(t,r)}}function wb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1i(this.addr,e),t[0]=e)}function Tb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;n.uniform2iv(this.addr,e),On(t,e)}}function Ab(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;n.uniform3iv(this.addr,e),On(t,e)}}function bb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;n.uniform4iv(this.addr,e),On(t,e)}}function Cb(n,e){const t=this.cache;t[0]!==e&&(n.uniform1ui(this.addr,e),t[0]=e)}function Rb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(n.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Fn(t,e))return;n.uniform2uiv(this.addr,e),On(t,e)}}function Pb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(n.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Fn(t,e))return;n.uniform3uiv(this.addr,e),On(t,e)}}function Lb(n,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(n.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Fn(t,e))return;n.uniform4uiv(this.addr,e),On(t,e)}}function Db(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a);let o;this.type===n.SAMPLER_2D_SHADOW?(Vp.compareFunction=t.isReversedDepthBuffer()?mm:pm,o=Vp):o=ry,t.setTexture2D(e||o,a)}function Nb(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture3D(e||ay,a)}function Ub(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTextureCube(e||oy,a)}function Fb(n,e,t){const r=this.cache,a=t.allocateTextureUnit();r[0]!==a&&(n.uniform1i(this.addr,a),r[0]=a),t.setTexture2DArray(e||sy,a)}function Ob(n){switch(n){case 5126:return vb;case 35664:return _b;case 35665:return xb;case 35666:return yb;case 35674:return Sb;case 35675:return Mb;case 35676:return Eb;case 5124:case 35670:return wb;case 35667:case 35671:return Tb;case 35668:case 35672:return Ab;case 35669:case 35673:return bb;case 5125:return Cb;case 36294:return Rb;case 36295:return Pb;case 36296:return Lb;case 35678:case 36198:case 36298:case 36306:case 35682:return Db;case 35679:case 36299:case 36307:return Nb;case 35680:case 36300:case 36308:case 36293:return Ub;case 36289:case 36303:case 36311:case 36292:return Fb}}function Ib(n,e){n.uniform1fv(this.addr,e)}function kb(n,e){const t=Do(e,this.size,2);n.uniform2fv(this.addr,t)}function zb(n,e){const t=Do(e,this.size,3);n.uniform3fv(this.addr,t)}function Hb(n,e){const t=Do(e,this.size,4);n.uniform4fv(this.addr,t)}function Vb(n,e){const t=Do(e,this.size,4);n.uniformMatrix2fv(this.addr,!1,t)}function Bb(n,e){const t=Do(e,this.size,9);n.uniformMatrix3fv(this.addr,!1,t)}function Gb(n,e){const t=Do(e,this.size,16);n.uniformMatrix4fv(this.addr,!1,t)}function Wb(n,e){n.uniform1iv(this.addr,e)}function Xb(n,e){n.uniform2iv(this.addr,e)}function $b(n,e){n.uniform3iv(this.addr,e)}function qb(n,e){n.uniform4iv(this.addr,e)}function Yb(n,e){n.uniform1uiv(this.addr,e)}function jb(n,e){n.uniform2uiv(this.addr,e)}function Kb(n,e){n.uniform3uiv(this.addr,e)}function Zb(n,e){n.uniform4uiv(this.addr,e)}function Jb(n,e,t){const r=this.cache,a=e.length,o=vf(t,a);Fn(r,o)||(n.uniform1iv(this.addr,o),On(r,o));let c;this.type===n.SAMPLER_2D_SHADOW?c=Vp:c=ry;for(let u=0;u!==a;++u)t.setTexture2D(e[u]||c,o[u])}function Qb(n,e,t){const r=this.cache,a=e.length,o=vf(t,a);Fn(r,o)||(n.uniform1iv(this.addr,o),On(r,o));for(let c=0;c!==a;++c)t.setTexture3D(e[c]||ay,o[c])}function eC(n,e,t){const r=this.cache,a=e.length,o=vf(t,a);Fn(r,o)||(n.uniform1iv(this.addr,o),On(r,o));for(let c=0;c!==a;++c)t.setTextureCube(e[c]||oy,o[c])}function tC(n,e,t){const r=this.cache,a=e.length,o=vf(t,a);Fn(r,o)||(n.uniform1iv(this.addr,o),On(r,o));for(let c=0;c!==a;++c)t.setTexture2DArray(e[c]||sy,o[c])}function nC(n){switch(n){case 5126:return Ib;case 35664:return kb;case 35665:return zb;case 35666:return Hb;case 35674:return Vb;case 35675:return Bb;case 35676:return Gb;case 5124:case 35670:return Wb;case 35667:case 35671:return Xb;case 35668:case 35672:return $b;case 35669:case 35673:return qb;case 5125:return Yb;case 36294:return jb;case 36295:return Kb;case 36296:return Zb;case 35678:case 36198:case 36298:case 36306:case 35682:return Jb;case 35679:case 36299:case 36307:return Qb;case 35680:case 36300:case 36308:case 36293:return eC;case 36289:case 36303:case 36311:case 36292:return tC}}class iC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.setValue=Ob(t.type)}}class rC{constructor(e,t,r){this.id=e,this.addr=r,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=nC(t.type)}}class sC{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,r){const a=this.seq;for(let o=0,c=a.length;o!==c;++o){const u=a[o];u.setValue(e,t[u.id],r)}}}const Dh=/(\w+)(\])?(\[|\.)?/g;function m_(n,e){n.seq.push(e),n.map[e.id]=e}function aC(n,e,t){const r=n.name,a=r.length;for(Dh.lastIndex=0;;){const o=Dh.exec(r),c=Dh.lastIndex;let u=o[1];const d=o[2]==="]",h=o[3];if(d&&(u=u|0),h===void 0||h==="["&&c+2===a){m_(t,h===void 0?new iC(u,n,e):new rC(u,n,e));break}else{let g=t.map[u];g===void 0&&(g=new sC(u),m_(t,g)),t=g}}}class Xu{constructor(e,t){this.seq=[],this.map={};const r=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let c=0;c<r;++c){const u=e.getActiveUniform(t,c),d=e.getUniformLocation(t,u.name);aC(u,d,this)}const a=[],o=[];for(const c of this.seq)c.type===e.SAMPLER_2D_SHADOW||c.type===e.SAMPLER_CUBE_SHADOW||c.type===e.SAMPLER_2D_ARRAY_SHADOW?a.push(c):o.push(c);a.length>0&&(this.seq=a.concat(o))}setValue(e,t,r,a){const o=this.map[t];o!==void 0&&o.setValue(e,r,a)}setOptional(e,t,r){const a=t[r];a!==void 0&&this.setValue(e,r,a)}static upload(e,t,r,a){for(let o=0,c=t.length;o!==c;++o){const u=t[o],d=r[u.id];d.needsUpdate!==!1&&u.setValue(e,d.value,a)}}static seqWithValue(e,t){const r=[];for(let a=0,o=e.length;a!==o;++a){const c=e[a];c.id in t&&r.push(c)}return r}}function g_(n,e,t){const r=n.createShader(e);return n.shaderSource(r,t),n.compileShader(r),r}const oC=37297;let lC=0;function cC(n,e){const t=n.split(`
`),r=[],a=Math.max(e-6,0),o=Math.min(e+6,t.length);for(let c=a;c<o;c++){const u=c+1;r.push(`${u===e?">":" "} ${u}: ${t[c]}`)}return r.join(`
`)}const v_=new wt;function uC(n){kt._getMatrix(v_,kt.workingColorSpace,n);const e=`mat3( ${v_.elements.map(t=>t.toFixed(4))} )`;switch(kt.getTransfer(n)){case Qu:return[e,"LinearTransferOETF"];case Kt:return[e,"sRGBTransferOETF"];default:return St("WebGLProgram: Unsupported color space: ",n),[e,"LinearTransferOETF"]}}function __(n,e,t){const r=n.getShaderParameter(e,n.COMPILE_STATUS),o=(n.getShaderInfoLog(e)||"").trim();if(r&&o==="")return"";const c=/ERROR: 0:(\d+)/.exec(o);if(c){const u=parseInt(c[1]);return t.toUpperCase()+`

`+o+`

`+cC(n.getShaderSource(e),u)}else return o}function fC(n,e){const t=uC(e);return[`vec4 ${n}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const dC={[bx]:"Linear",[Cx]:"Reinhard",[Rx]:"Cineon",[Px]:"ACESFilmic",[Dx]:"AgX",[Nx]:"Neutral",[Lx]:"Custom"};function hC(n,e){const t=dC[e];return t===void 0?(St("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const xu=new G;function pC(){kt.getLuminanceCoefficients(xu);const n=xu.x.toFixed(4),e=xu.y.toFixed(4),t=xu.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function mC(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ll).join(`
`)}function gC(n){const e=[];for(const t in n){const r=n[t];r!==!1&&e.push("#define "+t+" "+r)}return e.join(`
`)}function vC(n,e){const t={},r=n.getProgramParameter(e,n.ACTIVE_ATTRIBUTES);for(let a=0;a<r;a++){const o=n.getActiveAttrib(e,a),c=o.name;let u=1;o.type===n.FLOAT_MAT2&&(u=2),o.type===n.FLOAT_MAT3&&(u=3),o.type===n.FLOAT_MAT4&&(u=4),t[c]={type:o.type,location:n.getAttribLocation(e,c),locationSize:u}}return t}function Ll(n){return n!==""}function x_(n,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function y_(n,e){return n.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const _C=/^[ \t]*#include +<([\w\d./]+)>/gm;function Bp(n){return n.replace(_C,yC)}const xC=new Map;function yC(n,e){let t=Lt[e];if(t===void 0){const r=xC.get(e);if(r!==void 0)t=Lt[r],St('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,r);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return Bp(t)}const SC=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function S_(n){return n.replace(SC,MC)}function MC(n,e,t,r){let a="";for(let o=parseInt(e);o<parseInt(t);o++)a+=r.replace(/\[\s*i\s*\]/g,"[ "+o+" ]").replace(/UNROLLED_LOOP_INDEX/g,o);return a}function M_(n){let e=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?e+=`
#define HIGH_PRECISION`:n.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const EC={[zu]:"SHADOWMAP_TYPE_PCF",[Rl]:"SHADOWMAP_TYPE_VSM"};function wC(n){return EC[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const TC={[ga]:"ENVMAP_TYPE_CUBE",[Ro]:"ENVMAP_TYPE_CUBE",[hf]:"ENVMAP_TYPE_CUBE_UV"};function AC(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":TC[n.envMapMode]||"ENVMAP_TYPE_CUBE"}const bC={[Ro]:"ENVMAP_MODE_REFRACTION"};function CC(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":bC[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}const RC={[Ax]:"ENVMAP_BLENDING_MULTIPLY",[nw]:"ENVMAP_BLENDING_MIX",[iw]:"ENVMAP_BLENDING_ADD"};function PC(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":RC[n.combine]||"ENVMAP_BLENDING_NONE"}function LC(n){const e=n.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,r=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:r,maxMip:t}}function DC(n,e,t,r){const a=n.getContext(),o=t.defines;let c=t.vertexShader,u=t.fragmentShader;const d=wC(t),h=AC(t),m=CC(t),g=PC(t),p=LC(t),x=mC(t),E=gC(o),T=a.createProgram();let S,y,b=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(S=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ll).join(`
`),S.length>0&&(S+=`
`),y=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E].filter(Ll).join(`
`),y.length>0&&(y+=`
`)):(S=[M_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+m:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ll).join(`
`),y=[M_(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,E,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+h:"",t.envMap?"#define "+m:"",t.envMap?"#define "+g:"",p?"#define CUBEUV_TEXEL_WIDTH "+p.texelWidth:"",p?"#define CUBEUV_TEXEL_HEIGHT "+p.texelHeight:"",p?"#define CUBEUV_MAX_MIP "+p.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+d:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==br?"#define TONE_MAPPING":"",t.toneMapping!==br?Lt.tonemapping_pars_fragment:"",t.toneMapping!==br?hC("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Lt.colorspace_pars_fragment,fC("linearToOutputTexel",t.outputColorSpace),pC(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ll).join(`
`)),c=Bp(c),c=x_(c,t),c=y_(c,t),u=Bp(u),u=x_(u,t),u=y_(u,t),c=S_(c),u=S_(u),t.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,S=[x,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+S,y=["#define varying in",t.glslVersion===bv?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===bv?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+y);const D=b+S+c,w=b+y+u,C=g_(a,a.VERTEX_SHADER,D),P=g_(a,a.FRAGMENT_SHADER,w);a.attachShader(T,C),a.attachShader(T,P),t.index0AttributeName!==void 0?a.bindAttribLocation(T,0,t.index0AttributeName):t.hasPositionAttribute===!0&&a.bindAttribLocation(T,0,"position"),a.linkProgram(T);function F(k){if(n.debug.checkShaderErrors){const I=a.getProgramInfoLog(T)||"",X=a.getShaderInfoLog(C)||"",V=a.getShaderInfoLog(P)||"",q=I.trim(),ee=X.trim(),ae=V.trim();let J=!0,te=!0;if(a.getProgramParameter(T,a.LINK_STATUS)===!1)if(J=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(a,T,C,P);else{const ne=__(a,C,"vertex"),H=__(a,P,"fragment");zt("WebGLProgram: Shader Error "+a.getError()+" - VALIDATE_STATUS "+a.getProgramParameter(T,a.VALIDATE_STATUS)+`

Material Name: `+k.name+`
Material Type: `+k.type+`

Program Info Log: `+q+`
`+ne+`
`+H)}else q!==""?St("WebGLProgram: Program Info Log:",q):(ee===""||ae==="")&&(te=!1);te&&(k.diagnostics={runnable:J,programLog:q,vertexShader:{log:ee,prefix:S},fragmentShader:{log:ae,prefix:y}})}a.deleteShader(C),a.deleteShader(P),A=new Xu(a,T),U=vC(a,T)}let A;this.getUniforms=function(){return A===void 0&&F(this),A};let U;this.getAttributes=function(){return U===void 0&&F(this),U};let O=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return O===!1&&(O=a.getProgramParameter(T,oC)),O},this.destroy=function(){r.releaseStatesOfProgram(this),a.deleteProgram(T),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=lC++,this.cacheKey=e,this.usedTimes=1,this.program=T,this.vertexShader=C,this.fragmentShader=P,this}let NC=0;class UC{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,r){const a=this._getShaderCacheForMaterial(e);return a.has(t)===!1&&(a.add(t),t.usedTimes++),a.has(r)===!1&&(a.add(r),r.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const r of t)r.usedTimes--,r.usedTimes===0&&this.shaderCache.delete(r.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let r=t.get(e);return r===void 0&&(r=new Set,t.set(e,r)),r}_getShaderStage(e){const t=this.shaderCache;let r=t.get(e);return r===void 0&&(r=new FC(e),t.set(e,r)),r}}class FC{constructor(e){this.id=NC++,this.code=e,this.usedTimes=0}}function OC(n){return n===va||n===Ku||n===Zu}function IC(n,e,t,r,a,o){const c=new vm,u=new UC,d=new Set,h=[],m=new Map,g=r.logarithmicDepthBuffer;let p=r.precision;const x={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function E(A){return d.add(A),A===0?"uv":`uv${A}`}function T(A,U,O,k,I,X){const V=k.fog,q=I.geometry,ee=A.isMeshStandardMaterial||A.isMeshLambertMaterial||A.isMeshPhongMaterial?k.environment:null,ae=A.isMeshStandardMaterial||A.isMeshLambertMaterial&&!A.envMap||A.isMeshPhongMaterial&&!A.envMap,J=e.get(A.envMap||ee,ae),te=J&&J.mapping===hf?J.image.height:null,ne=x[A.type];A.precision!==null&&(p=r.getMaxPrecision(A.precision),p!==A.precision&&St("WebGLProgram.getParameters:",A.precision,"not supported, using",p,"instead."));const H=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,oe=H!==void 0?H.length:0;let Se=0;q.morphAttributes.position!==void 0&&(Se=1),q.morphAttributes.normal!==void 0&&(Se=2),q.morphAttributes.color!==void 0&&(Se=3);let ke,Be,He,ue;if(ne){const Ft=Er[ne];ke=Ft.vertexShader,Be=Ft.fragmentShader}else{ke=A.vertexShader,Be=A.fragmentShader;const Ft=u.getVertexShaderStage(A),Ut=u.getFragmentShaderStage(A);u.update(A,Ft,Ut),He=Ft.id,ue=Ut.id}const he=n.getRenderTarget(),Pe=n.state.buffers.depth.getReversed(),Ke=I.isInstancedMesh===!0,Ge=I.isBatchedMesh===!0,pt=!!A.map,nn=!!A.matcap,mt=!!J,Nt=!!A.aoMap,qt=!!A.lightMap,bt=!!A.bumpMap&&A.wireframe===!1,Yt=!!A.normalMap,cn=!!A.displacementMap,vn=!!A.emissiveMap,Bt=!!A.metalnessMap,en=!!A.roughnessMap,$=A.anisotropy>0,sn=A.clearcoat>0,lt=A.dispersion>0,z=A.retroreflectivity>0,R=A.iridescence>0,K=A.sheen>0,ce=A.transmission>0,me=$&&!!A.anisotropyMap,Me=sn&&!!A.clearcoatMap,Oe=sn&&!!A.clearcoatNormalMap,ge=sn&&!!A.clearcoatRoughnessMap,_e=R&&!!A.iridescenceMap,ze=R&&!!A.iridescenceThicknessMap,et=K&&!!A.sheenColorMap,Ue=K&&!!A.sheenRoughnessMap,Fe=!!A.specularMap,Je=!!A.specularColorMap,ct=!!A.specularIntensityMap,dt=ce&&!!A.transmissionMap,Z=ce&&!!A.thicknessMap,Le=!!A.gradientMap,ve=!!A.alphaMap,Ie=A.alphaTest>0,Ve=!!A.alphaHash,ye=!!A.extensions;let tt=br;A.toneMapped&&(he===null||he.isXRRenderTarget===!0)&&(tt=n.toneMapping);const Ze={shaderID:ne,shaderType:A.type,shaderName:A.name,vertexShader:ke,fragmentShader:Be,defines:A.defines,customVertexShaderID:He,customFragmentShaderID:ue,isRawShaderMaterial:A.isRawShaderMaterial===!0,glslVersion:A.glslVersion,precision:p,batching:Ge,batchingColor:Ge&&I._colorsTexture!==null,instancing:Ke,instancingColor:Ke&&I.instanceColor!==null,instancingMorph:Ke&&I.morphTexture!==null,outputColorSpace:he===null?n.outputColorSpace:he.isXRRenderTarget===!0?he.texture.colorSpace:kt.workingColorSpace,alphaToCoverage:!!A.alphaToCoverage,map:pt,matcap:nn,envMap:mt,envMapMode:mt&&J.mapping,envMapCubeUVHeight:te,aoMap:Nt,lightMap:qt,bumpMap:bt,normalMap:Yt,displacementMap:cn,emissiveMap:vn,normalMapObjectSpace:Yt&&A.normalMapType===aw,normalMapTangentSpace:Yt&&A.normalMapType===Ip,packedNormalMap:Yt&&A.normalMapType===Ip&&OC(A.normalMap.format),metalnessMap:Bt,roughnessMap:en,anisotropy:$,anisotropyMap:me,clearcoat:sn,clearcoatMap:Me,clearcoatNormalMap:Oe,clearcoatRoughnessMap:ge,dispersion:lt,retroreflection:z,iridescence:R,iridescenceMap:_e,iridescenceThicknessMap:ze,sheen:K,sheenColorMap:et,sheenRoughnessMap:Ue,specularMap:Fe,specularColorMap:Je,specularIntensityMap:ct,transmission:ce,transmissionMap:dt,thicknessMap:Z,gradientMap:Le,opaque:A.transparent===!1&&A.blending===Nl&&A.alphaToCoverage===!1,alphaMap:ve,alphaTest:Ie,alphaHash:Ve,combine:A.combine,mapUv:pt&&E(A.map.channel),aoMapUv:Nt&&E(A.aoMap.channel),lightMapUv:qt&&E(A.lightMap.channel),bumpMapUv:bt&&E(A.bumpMap.channel),normalMapUv:Yt&&E(A.normalMap.channel),displacementMapUv:cn&&E(A.displacementMap.channel),emissiveMapUv:vn&&E(A.emissiveMap.channel),metalnessMapUv:Bt&&E(A.metalnessMap.channel),roughnessMapUv:en&&E(A.roughnessMap.channel),anisotropyMapUv:me&&E(A.anisotropyMap.channel),clearcoatMapUv:Me&&E(A.clearcoatMap.channel),clearcoatNormalMapUv:Oe&&E(A.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:ge&&E(A.clearcoatRoughnessMap.channel),iridescenceMapUv:_e&&E(A.iridescenceMap.channel),iridescenceThicknessMapUv:ze&&E(A.iridescenceThicknessMap.channel),sheenColorMapUv:et&&E(A.sheenColorMap.channel),sheenRoughnessMapUv:Ue&&E(A.sheenRoughnessMap.channel),specularMapUv:Fe&&E(A.specularMap.channel),specularColorMapUv:Je&&E(A.specularColorMap.channel),specularIntensityMapUv:ct&&E(A.specularIntensityMap.channel),transmissionMapUv:dt&&E(A.transmissionMap.channel),thicknessMapUv:Z&&E(A.thicknessMap.channel),alphaMapUv:ve&&E(A.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(Yt||$),vertexNormals:!!q.attributes.normal,vertexColors:A.vertexColors,vertexAlphas:A.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:I.isPoints===!0&&!!q.attributes.uv&&(pt||ve),fog:!!V,useFog:A.fog===!0,fogExp2:!!V&&V.isFogExp2,flatShading:A.wireframe===!1&&(A.flatShading===!0||q.attributes.normal===void 0&&Yt===!1&&(A.isMeshLambertMaterial||A.isMeshPhongMaterial||A.isMeshStandardMaterial||A.isMeshPhysicalMaterial)),sizeAttenuation:A.sizeAttenuation===!0,logarithmicDepthBuffer:g,reversedDepthBuffer:Pe,skinning:I.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:oe,morphTextureStride:Se,numSunLights:U.sun.length,numDirLights:U.directional.length,numPointLights:U.point.length,numSpotLights:U.spot.length,numSpotLightMaps:U.spotLightMap.length,numRectAreaLights:U.rectArea.length,numHemiLights:U.hemi.length,numSunLightShadows:U.sunShadowMap.length,numDirLightShadows:U.directionalShadowMap.length,numPointLightShadows:U.pointShadowMap.length,numSpotLightShadows:U.spotShadowMap.length,numSpotLightShadowsWithMaps:U.numSpotLightShadowsWithMaps,numLightProbes:U.numLightProbes,numLightProbeGrids:X.length,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:A.dithering,shadowMapEnabled:n.shadowMap.enabled&&O.length>0,shadowMapType:n.shadowMap.type,toneMapping:tt,decodeVideoTexture:pt&&A.map.isVideoTexture===!0&&kt.getTransfer(A.map.colorSpace)===Kt,decodeVideoTextureEmissive:vn&&A.emissiveMap.isVideoTexture===!0&&kt.getTransfer(A.emissiveMap.colorSpace)===Kt,premultipliedAlpha:A.premultipliedAlpha,doubleSided:A.side===Li,flipSided:A.side===hi,useDepthPacking:A.depthPacking>=0,depthPacking:A.depthPacking||0,index0AttributeName:A.index0AttributeName,extensionClipCullDistance:ye&&A.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ye&&A.extensions.multiDraw===!0||Ge)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:A.customProgramCacheKey()};return Ze.vertexUv1s=d.has(1),Ze.vertexUv2s=d.has(2),Ze.vertexUv3s=d.has(3),d.clear(),Ze}function S(A){const U=[];if(A.shaderID?U.push(A.shaderID):(U.push(A.customVertexShaderID),U.push(A.customFragmentShaderID)),A.defines!==void 0)for(const O in A.defines)U.push(O),U.push(A.defines[O]);return A.isRawShaderMaterial===!1&&(y(U,A),b(U,A),U.push(n.outputColorSpace)),U.push(A.customProgramCacheKey),U.join()}function y(A,U){A.push(U.precision),A.push(U.outputColorSpace),A.push(U.envMapMode),A.push(U.envMapCubeUVHeight),A.push(U.mapUv),A.push(U.alphaMapUv),A.push(U.lightMapUv),A.push(U.aoMapUv),A.push(U.bumpMapUv),A.push(U.normalMapUv),A.push(U.displacementMapUv),A.push(U.emissiveMapUv),A.push(U.metalnessMapUv),A.push(U.roughnessMapUv),A.push(U.anisotropyMapUv),A.push(U.clearcoatMapUv),A.push(U.clearcoatNormalMapUv),A.push(U.clearcoatRoughnessMapUv),A.push(U.iridescenceMapUv),A.push(U.iridescenceThicknessMapUv),A.push(U.sheenColorMapUv),A.push(U.sheenRoughnessMapUv),A.push(U.specularMapUv),A.push(U.specularColorMapUv),A.push(U.specularIntensityMapUv),A.push(U.transmissionMapUv),A.push(U.thicknessMapUv),A.push(U.combine),A.push(U.fogExp2),A.push(U.sizeAttenuation),A.push(U.morphTargetsCount),A.push(U.morphAttributeCount),A.push(U.numSunLights),A.push(U.numDirLights),A.push(U.numPointLights),A.push(U.numSpotLights),A.push(U.numSpotLightMaps),A.push(U.numHemiLights),A.push(U.numRectAreaLights),A.push(U.numSunLightShadows),A.push(U.numDirLightShadows),A.push(U.numPointLightShadows),A.push(U.numSpotLightShadows),A.push(U.numSpotLightShadowsWithMaps),A.push(U.numLightProbes),A.push(U.shadowMapType),A.push(U.toneMapping),A.push(U.numClippingPlanes),A.push(U.numClipIntersection),A.push(U.depthPacking)}function b(A,U){c.disableAll(),U.instancing&&c.enable(0),U.instancingColor&&c.enable(1),U.instancingMorph&&c.enable(2),U.matcap&&c.enable(3),U.envMap&&c.enable(4),U.normalMapObjectSpace&&c.enable(5),U.normalMapTangentSpace&&c.enable(6),U.clearcoat&&c.enable(7),U.iridescence&&c.enable(8),U.alphaTest&&c.enable(9),U.vertexColors&&c.enable(10),U.vertexAlphas&&c.enable(11),U.vertexUv1s&&c.enable(12),U.vertexUv2s&&c.enable(13),U.vertexUv3s&&c.enable(14),U.vertexTangents&&c.enable(15),U.anisotropy&&c.enable(16),U.alphaHash&&c.enable(17),U.batching&&c.enable(18),U.dispersion&&c.enable(19),U.retroreflection&&c.enable(24),U.batchingColor&&c.enable(20),U.gradientMap&&c.enable(21),U.packedNormalMap&&c.enable(22),U.vertexNormals&&c.enable(23),A.push(c.mask),c.disableAll(),U.fog&&c.enable(0),U.useFog&&c.enable(1),U.flatShading&&c.enable(2),U.logarithmicDepthBuffer&&c.enable(3),U.reversedDepthBuffer&&c.enable(4),U.skinning&&c.enable(5),U.morphTargets&&c.enable(6),U.morphNormals&&c.enable(7),U.morphColors&&c.enable(8),U.premultipliedAlpha&&c.enable(9),U.shadowMapEnabled&&c.enable(10),U.doubleSided&&c.enable(11),U.flipSided&&c.enable(12),U.useDepthPacking&&c.enable(13),U.dithering&&c.enable(14),U.transmission&&c.enable(15),U.sheen&&c.enable(16),U.opaque&&c.enable(17),U.pointsUvs&&c.enable(18),U.decodeVideoTexture&&c.enable(19),U.decodeVideoTextureEmissive&&c.enable(20),U.alphaToCoverage&&c.enable(21),U.numLightProbeGrids>0&&c.enable(22),U.hasPositionAttribute&&c.enable(23),A.push(c.mask)}function D(A){const U=x[A.type];let O;if(U){const k=Er[U];O=Yw.clone(k.uniforms)}else O=A.uniforms;return O}function w(A,U){let O=m.get(U);return O!==void 0?++O.usedTimes:(O=new DC(n,U,A,a),h.push(O),m.set(U,O)),O}function C(A){if(--A.usedTimes===0){const U=h.indexOf(A);h[U]=h[h.length-1],h.pop(),m.delete(A.cacheKey),A.destroy()}}function P(A){u.remove(A)}function F(){u.dispose()}return{getParameters:T,getProgramCacheKey:S,getUniforms:D,acquireProgram:w,releaseProgram:C,releaseShaderCache:P,programs:h,dispose:F}}function kC(){let n=new WeakMap;function e(c){return n.has(c)}function t(c){let u=n.get(c);return u===void 0&&(u={},n.set(c,u)),u}function r(c){n.delete(c)}function a(c,u,d){n.get(c)[u]=d}function o(){n=new WeakMap}return{has:e,get:t,remove:r,update:a,dispose:o}}function zC(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.material.id!==e.material.id?n.material.id-e.material.id:n.materialVariant!==e.materialVariant?n.materialVariant-e.materialVariant:n.z!==e.z?n.z-e.z:n.id-e.id}function E_(n,e){return n.groupOrder!==e.groupOrder?n.groupOrder-e.groupOrder:n.renderOrder!==e.renderOrder?n.renderOrder-e.renderOrder:n.z!==e.z?e.z-n.z:n.id-e.id}function w_(){const n=[];let e=0;const t=[],r=[],a=[];function o(){e=0,t.length=0,r.length=0,a.length=0}function c(p){let x=0;return p.isInstancedMesh&&(x+=2),p.isSkinnedMesh&&(x+=1),x}function u(p,x,E,T,S,y){let b=n[e];return b===void 0?(b={id:p.id,object:p,geometry:x,material:E,materialVariant:c(p),groupOrder:T,renderOrder:p.renderOrder,z:S,group:y},n[e]=b):(b.id=p.id,b.object=p,b.geometry=x,b.material=E,b.materialVariant=c(p),b.groupOrder=T,b.renderOrder=p.renderOrder,b.z=S,b.group=y),e++,b}function d(p,x,E,T,S,y,b){b.reversedDepth===!0&&(S=-S);const D=u(p,x,E,T,S,y);E.transmission>0?r.push(D):E.transparent===!0?a.push(D):t.push(D)}function h(p,x,E,T,S,y){const b=u(p,x,E,T,S,y);E.transmission>0?r.unshift(b):E.transparent===!0?a.unshift(b):t.unshift(b)}function m(p,x){t.length>1&&t.sort(p||zC),r.length>1&&r.sort(x||E_),a.length>1&&a.sort(x||E_)}function g(){for(let p=e,x=n.length;p<x;p++){const E=n[p];if(E.id===null)break;E.id=null,E.object=null,E.geometry=null,E.material=null,E.group=null}}return{opaque:t,transmissive:r,transparent:a,init:o,push:d,unshift:h,finish:g,sort:m}}function HC(){let n=new WeakMap;function e(r,a){const o=n.get(r);let c;return o===void 0?(c=new w_,n.set(r,[c])):a>=o.length?(c=new w_,o.push(c)):c=o[a],c}function t(){n=new WeakMap}return{get:e,dispose:t}}function VC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new G,color:new At};break;case"SpotLight":t={position:new G,direction:new G,color:new At,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new G,color:new At,distance:0,decay:0};break;case"HemisphereLight":t={direction:new G,skyColor:new At,groundColor:new At};break;case"RectAreaLight":t={color:new At,position:new G,halfWidth:new G,halfHeight:new G};break}return n[e.id]=t,t}}}function BC(){const n={};return{get:function(e){if(n[e.id]!==void 0)return n[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new st,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[e.id]=t,t}}}let GC=0;function WC(n,e){return(e.castShadow?2:0)-(n.castShadow?2:0)+(e.map?1:0)-(n.map?1:0)}function XC(n){const e=new VC,t=BC(),r={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let h=0;h<9;h++)r.probe.push(new G);const a=new G,o=new $t,c=new $t;function u(h){let m=0,g=0,p=0;for(let I=0;I<9;I++)r.probe[I].set(0,0,0);let x=0,E=0,T=0,S=0,y=0,b=0,D=0,w=0,C=0,P=0,F=0,A=0,U=0,O=0;h.sort(WC);for(let I=0,X=h.length;I<X;I++){const V=h[I],q=V.color,ee=V.intensity,ae=V.distance;let J=null;if(V.shadow&&V.shadow.map&&(V.shadow.map.texture.format===va?J=V.shadow.map.texture:J=V.shadow.map.depthTexture||V.shadow.map.texture),V.isAmbientLight)m+=q.r*ee,g+=q.g*ee,p+=q.b*ee;else if(V.isLightProbe){for(let te=0;te<9;te++)r.probe[te].addScaledVector(V.sh.coefficients[te],ee);O++}else if(V.isSunLight){const te=e.get(V);if(te.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ne=V.shadow,H=t.get(V);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize.copy(ne.mapSize).multiply(ne.getFrameExtents()),r.sunShadow[E]=H,r.sunShadowMap[E]=J;const oe=ne.getViewportCount();for(let Se=0;Se<oe;Se++)r.sunShadowMatrix[T+Se]=ne.getMatrix(Se),r.sunShadowCascade[T+Se]=ne._cascadeData[Se];T+=oe,E++}r.sun[x]=te,x++}else if(V.isDirectionalLight){const te=e.get(V);if(te.color.copy(V.color).multiplyScalar(V.intensity),V.castShadow){const ne=V.shadow,H=t.get(V);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,r.directionalShadow[S]=H,r.directionalShadowMap[S]=J,r.directionalShadowMatrix[S]=V.shadow.matrix,C++}r.directional[S]=te,S++}else if(V.isSpotLight){const te=e.get(V);te.position.setFromMatrixPosition(V.matrixWorld),te.color.copy(q).multiplyScalar(ee),te.distance=ae,te.coneCos=Math.cos(V.angle),te.penumbraCos=Math.cos(V.angle*(1-V.penumbra)),te.decay=V.decay,r.spot[b]=te;const ne=V.shadow;if(V.map&&(r.spotLightMap[A]=V.map,A++,ne.updateMatrices(V),V.castShadow&&U++),r.spotLightMatrix[b]=ne.matrix,V.castShadow){const H=t.get(V);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,r.spotShadow[b]=H,r.spotShadowMap[b]=J,F++}b++}else if(V.isRectAreaLight){const te=e.get(V);te.color.copy(q).multiplyScalar(ee),te.halfWidth.set(V.width*.5,0,0),te.halfHeight.set(0,V.height*.5,0),r.rectArea[D]=te,D++}else if(V.isPointLight){const te=e.get(V);if(te.color.copy(V.color).multiplyScalar(V.intensity),te.distance=V.distance,te.decay=V.decay,V.castShadow){const ne=V.shadow,H=t.get(V);H.shadowIntensity=ne.intensity,H.shadowBias=ne.bias,H.shadowNormalBias=ne.normalBias,H.shadowRadius=ne.radius,H.shadowMapSize=ne.mapSize,H.shadowCameraNear=ne.camera.near,H.shadowCameraFar=ne.camera.far,r.pointShadow[y]=H,r.pointShadowMap[y]=J,r.pointShadowMatrix[y]=V.shadow.matrix,P++}r.point[y]=te,y++}else if(V.isHemisphereLight){const te=e.get(V);te.skyColor.copy(V.color).multiplyScalar(ee),te.groundColor.copy(V.groundColor).multiplyScalar(ee),r.hemi[w]=te,w++}}D>0&&(n.has("OES_texture_float_linear")===!0?(r.rectAreaLTC1=$e.LTC_FLOAT_1,r.rectAreaLTC2=$e.LTC_FLOAT_2):(r.rectAreaLTC1=$e.LTC_HALF_1,r.rectAreaLTC2=$e.LTC_HALF_2)),r.ambient[0]=m,r.ambient[1]=g,r.ambient[2]=p;const k=r.hash;(k.sunLength!==x||k.directionalLength!==S||k.pointLength!==y||k.spotLength!==b||k.rectAreaLength!==D||k.hemiLength!==w||k.numSunShadows!==E||k.numDirectionalShadows!==C||k.numPointShadows!==P||k.numSpotShadows!==F||k.numSpotMaps!==A||k.numLightProbes!==O)&&(r.sun.length=x,r.directional.length=S,r.spot.length=b,r.rectArea.length=D,r.point.length=y,r.hemi.length=w,r.sunShadow.length=E,r.sunShadowMap.length=E,r.sunShadowMatrix.length=T,r.sunShadowCascade.length=T,r.directionalShadow.length=C,r.directionalShadowMap.length=C,r.directionalShadowMatrix.length=C,r.pointShadow.length=P,r.pointShadowMap.length=P,r.pointShadowMatrix.length=P,r.spotShadow.length=F,r.spotShadowMap.length=F,r.spotLightMatrix.length=F+A-U,r.spotLightMap.length=A,r.numSpotLightShadowsWithMaps=U,r.numLightProbes=O,k.sunLength=x,k.directionalLength=S,k.pointLength=y,k.spotLength=b,k.rectAreaLength=D,k.hemiLength=w,k.numSunShadows=E,k.numDirectionalShadows=C,k.numPointShadows=P,k.numSpotShadows=F,k.numSpotMaps=A,k.numLightProbes=O,r.version=GC++)}function d(h,m){let g=0,p=0,x=0,E=0,T=0,S=0;const y=m.matrixWorldInverse;for(let b=0,D=h.length;b<D;b++){const w=h[b];if(w.isSunLight){const C=r.sun[g];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(y),g++}else if(w.isDirectionalLight){const C=r.directional[p];C.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),p++}else if(w.isSpotLight){const C=r.spot[E];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),C.direction.setFromMatrixPosition(w.matrixWorld),a.setFromMatrixPosition(w.target.matrixWorld),C.direction.sub(a),C.direction.transformDirection(y),E++}else if(w.isRectAreaLight){const C=r.rectArea[T];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),c.identity(),o.copy(w.matrixWorld),o.premultiply(y),c.extractRotation(o),C.halfWidth.set(w.width*.5,0,0),C.halfHeight.set(0,w.height*.5,0),C.halfWidth.applyMatrix4(c),C.halfHeight.applyMatrix4(c),T++}else if(w.isPointLight){const C=r.point[x];C.position.setFromMatrixPosition(w.matrixWorld),C.position.applyMatrix4(y),x++}else if(w.isHemisphereLight){const C=r.hemi[S];C.direction.setFromMatrixPosition(w.matrixWorld),C.direction.transformDirection(y),S++}}}return{setup:u,setupView:d,state:r}}function T_(n){const e=new XC(n),t=[],r=[],a=[];function o(p){g.camera=p,t.length=0,r.length=0,a.length=0}function c(p){t.push(p)}function u(p){r.push(p)}function d(p){a.push(p)}function h(){e.setup(t)}function m(p){e.setupView(t,p)}const g={lightsArray:t,shadowsArray:r,lightProbeGridArray:a,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:o,state:g,setupLights:h,setupLightsView:m,pushLight:c,pushShadow:u,pushLightProbeGrid:d}}function $C(n){let e=new WeakMap;function t(a,o=0){const c=e.get(a);let u;return c===void 0?(u=new T_(n),e.set(a,[u])):o>=c.length?(u=new T_(n),c.push(u)):u=c[o],u}function r(){e=new WeakMap}return{get:t,dispose:r}}const qC=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,YC=`uniform sampler2D shadow_pass;
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
}`,jC=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],KC=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],A_=new $t,Sl=new G,Nh=new G;function ZC(n,e,t){let r=new ym;const a=new st,o=new st,c=new gn,u=new Jw,d=new Qw,h={},m=t.maxTextureSize,g={[ts]:hi,[hi]:ts,[Li]:Li},p=new Pr({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new st},radius:{value:4}},vertexShader:qC,fragmentShader:YC}),x=p.clone();x.defines.HORIZONTAL_PASS=1;const E=new oi;E.setAttribute("position",new ai(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const T=new Ni(E,p),S=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=zu;let y=this.type;this.render=function(P,F,A){if(S.enabled===!1||S.autoUpdate===!1&&S.needsUpdate===!1||P.length===0)return;this.type===IE&&(St("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=zu);const U=n.getRenderTarget(),O=n.getActiveCubeFace(),k=n.getActiveMipmapLevel(),I=n.state;I.setBlending(Qr),I.buffers.depth.getReversed()===!0?I.buffers.color.setClear(0,0,0,0):I.buffers.color.setClear(1,1,1,1),I.buffers.depth.setTest(!0),I.setScissorTest(!1);const X=y!==this.type;X&&F.traverse(function(V){V.material&&(Array.isArray(V.material)?V.material.forEach(q=>q.needsUpdate=!0):V.material.needsUpdate=!0)});for(let V=0,q=P.length;V<q;V++){const ee=P[V],ae=ee.shadow;if(ae===void 0){St("WebGLShadowMap:",ee,"has no shadow.");continue}if(ae.autoUpdate===!1&&ae.needsUpdate===!1)continue;a.copy(ae.mapSize);const J=ae.getFrameExtents();a.multiply(J),o.copy(ae.mapSize),(a.x>m||a.y>m)&&(a.x>m&&(o.x=Math.floor(m/J.x),a.x=o.x*J.x,ae.mapSize.x=o.x),a.y>m&&(o.y=Math.floor(m/J.y),a.y=o.y*J.y,ae.mapSize.y=o.y));const te=n.state.buffers.depth.getReversed();if(ae.camera._reversedDepth=te,ae.map===null||X===!0){if(ae.map!==null&&(ae.map.depthTexture!==null&&(ae.map.depthTexture.dispose(),ae.map.depthTexture=null),ae.map.dispose()),this.type===Rl){if(ee.isPointLight){St("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}ae.map=new hr(a.x,a.y,{format:va,type:Rr,minFilter:ii,magFilter:ii,generateMipmaps:!1}),ae.map.texture.name=ee.name+".shadowMap",ae.map.depthTexture=new Gl(a.x,a.y,Tr),ae.map.depthTexture.name=ee.name+".shadowMapDepth",ae.map.depthTexture.format=ns,ae.map.depthTexture.compareFunction=null,ae.map.depthTexture.minFilter=Yn,ae.map.depthTexture.magFilter=Yn}else ee.isPointLight?(ae.map=new iy(a.x),ae.map.depthTexture=new $w(a.x,Cr)):(ae.map=new hr(a.x,a.y),ae.map.depthTexture=new Gl(a.x,a.y,Cr)),ae.map.depthTexture.name=ee.name+".shadowMap",ae.map.depthTexture.format=ns,this.type===zu?(ae.map.depthTexture.compareFunction=te?mm:pm,ae.map.depthTexture.minFilter=ii,ae.map.depthTexture.magFilter=ii):(ae.map.depthTexture.compareFunction=null,ae.map.depthTexture.minFilter=Yn,ae.map.depthTexture.magFilter=Yn);ae.camera.updateProjectionMatrix()}ae.map.isWebGLCubeRenderTarget!==!0&&(ae.map.width!==a.x||ae.map.height!==a.y)&&ae.map.setSize(a.x,a.y);const ne=ae.map.isWebGLCubeRenderTarget?6:ae.getViewportCount();ee.isPointLight!==!0&&ae.updateMatrices(ee,A);for(let H=0;H<ne;H++){const oe=ae.getCamera(H);if(ee.isPointLight){const Se=ae.camera,ke=ae.matrix,Be=ee.distance||Se.far;Be!==Se.far&&(Se.far=Be,Se.updateProjectionMatrix()),Sl.setFromMatrixPosition(ee.matrixWorld),Se.position.copy(Sl),Nh.copy(Se.position),Nh.add(jC[H]),Se.up.copy(KC[H]),Se.lookAt(Nh),Se.updateMatrixWorld(),ke.makeTranslation(-Sl.x,-Sl.y,-Sl.z),A_.multiplyMatrices(Se.projectionMatrix,Se.matrixWorldInverse),ae._frustum.setFromProjectionMatrix(A_,Se.coordinateSystem,Se.reversedDepth)}if(ae.map.isWebGLCubeRenderTarget)n.setRenderTarget(ae.map,H),n.clear();else{H===0&&(n.setRenderTarget(ae.map),n.clear());const Se=ae.getViewport(H);c.set(o.x*Se.x,o.y*Se.y,o.x*Se.z,o.y*Se.w),I.viewport(c)}r=ae.getFrustum(H),w(F,A,oe,ee,this.type)}ae.isPointLightShadow!==!0&&this.type===Rl&&b(ae,A),ae.needsUpdate=!1}y=this.type,S.needsUpdate=!1,n.setRenderTarget(U,O,k)};function b(P,F){const A=e.update(T);p.defines.VSM_SAMPLES!==P.blurSamples&&(p.defines.VSM_SAMPLES=P.blurSamples,x.defines.VSM_SAMPLES=P.blurSamples,p.needsUpdate=!0,x.needsUpdate=!0),P.mapPass===null?P.mapPass=new hr(a.x,a.y,{format:va,type:Rr}):(P.mapPass.width!==P.map.width||P.mapPass.height!==P.map.height)&&P.mapPass.setSize(P.map.width,P.map.height),p.uniforms.shadow_pass.value=P.map.depthTexture,p.uniforms.resolution.value.set(P.map.width,P.map.height),p.uniforms.radius.value=P.radius,n.setRenderTarget(P.mapPass),n.clear(),n.renderBufferDirect(F,null,A,p,T,null),x.uniforms.shadow_pass.value=P.mapPass.texture,x.uniforms.resolution.value.set(P.map.width,P.map.height),x.uniforms.radius.value=P.radius,n.setRenderTarget(P.map),n.clear(),n.renderBufferDirect(F,null,A,x,T,null)}function D(P,F,A,U){let O=null;const k=A.isPointLight===!0?P.customDistanceMaterial:P.customDepthMaterial;if(k!==void 0)O=k;else if(O=A.isPointLight===!0?d:u,n.localClippingEnabled&&F.clipShadows===!0&&Array.isArray(F.clippingPlanes)&&F.clippingPlanes.length!==0||F.displacementMap&&F.displacementScale!==0||F.alphaMap&&F.alphaTest>0||F.map&&F.alphaTest>0||F.alphaToCoverage===!0){const I=O.uuid,X=F.uuid;let V=h[I];V===void 0&&(V={},h[I]=V);let q=V[X];q===void 0&&(q=O.clone(),V[X]=q,F.addEventListener("dispose",C)),O=q}if(O.visible=F.visible,O.wireframe=F.wireframe,U===Rl?O.side=F.shadowSide!==null?F.shadowSide:F.side:O.side=F.shadowSide!==null?F.shadowSide:g[F.side],O.alphaMap=F.alphaMap,O.alphaTest=F.alphaToCoverage===!0?.5:F.alphaTest,O.map=F.map,O.clipShadows=F.clipShadows,O.clippingPlanes=F.clippingPlanes,O.clipIntersection=F.clipIntersection,O.displacementMap=F.displacementMap,O.displacementScale=F.displacementScale,O.displacementBias=F.displacementBias,O.wireframeLinewidth=F.wireframeLinewidth,O.linewidth=F.linewidth,A.isPointLight===!0&&O.isMeshDistanceMaterial===!0){const I=n.properties.get(O);I.light=A}return O}function w(P,F,A,U,O){if(P.visible===!1)return;if(P.layers.test(F.layers)&&(P.isMesh||P.isLine||P.isPoints)&&(P.castShadow||P.receiveShadow&&O===Rl)&&(!P.frustumCulled||P.intersectsFrustum(r))){P.modelViewMatrix.multiplyMatrices(A.matrixWorldInverse,P.matrixWorld);const X=e.update(P),V=P.material;if(Array.isArray(V)){const q=X.groups;for(let ee=0,ae=q.length;ee<ae;ee++){const J=q[ee],te=V[J.materialIndex];if(te&&te.visible){const ne=D(P,te,U,O);P.onBeforeShadow(n,P,F,A,X,ne,J),n.renderBufferDirect(A,null,X,ne,P,J),P.onAfterShadow(n,P,F,A,X,ne,J)}}}else if(V.visible){const q=D(P,V,U,O);P.onBeforeShadow(n,P,F,A,X,q,null),n.renderBufferDirect(A,null,X,q,P,null),P.onAfterShadow(n,P,F,A,X,q,null)}}const I=P.children;for(let X=0,V=I.length;X<V;X++)w(I[X],F,A,U,O)}function C(P){P.target.removeEventListener("dispose",C);for(const A in h){const U=h[A],O=P.target.uuid;O in U&&(U[O].dispose(),delete U[O])}}}function JC(n,e){function t(){let Z=!1;const Le=new gn;let ve=null;const Ie=new gn(0,0,0,0);return{setMask:function(Ve){ve!==Ve&&!Z&&(n.colorMask(Ve,Ve,Ve,Ve),ve=Ve)},setLocked:function(Ve){Z=Ve},setClear:function(Ve,ye,tt,Ze,Ft){Ft===!0&&(Ve*=Ze,ye*=Ze,tt*=Ze),Le.set(Ve,ye,tt,Ze),Ie.equals(Le)===!1&&(n.clearColor(Ve,ye,tt,Ze),Ie.copy(Le))},reset:function(){Z=!1,ve=null,Ie.set(-1,0,0,0)}}}function r(){let Z=!1,Le=!1,ve=null,Ie=null,Ve=null;return{setReversed:function(ye){if(Le!==ye){const tt=e.get("EXT_clip_control");ye?tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.ZERO_TO_ONE_EXT):tt.clipControlEXT(tt.LOWER_LEFT_EXT,tt.NEGATIVE_ONE_TO_ONE_EXT),Le=ye;const Ze=Ve;Ve=null,this.setClear(Ze)}},getReversed:function(){return Le},setTest:function(ye){ye?he(n.DEPTH_TEST):Pe(n.DEPTH_TEST)},setMask:function(ye){ve!==ye&&!Z&&(n.depthMask(ye),ve=ye)},setFunc:function(ye){if(Le&&(ye=vw[ye]),Ie!==ye){switch(ye){case Jh:n.depthFunc(n.NEVER);break;case Qh:n.depthFunc(n.ALWAYS);break;case ep:n.depthFunc(n.LESS);break;case zl:n.depthFunc(n.LEQUAL);break;case tp:n.depthFunc(n.EQUAL);break;case np:n.depthFunc(n.GEQUAL);break;case ip:n.depthFunc(n.GREATER);break;case rp:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Ie=ye}},setLocked:function(ye){Z=ye},setClear:function(ye){Ve!==ye&&(Ve=ye,Le&&(ye=1-ye),n.clearDepth(ye))},reset:function(){Z=!1,ve=null,Ie=null,Ve=null,Le=!1}}}function a(){let Z=!1,Le=null,ve=null,Ie=null,Ve=null,ye=null,tt=null,Ze=null,Ft=null;return{setTest:function(Ut){Z||(Ut?he(n.STENCIL_TEST):Pe(n.STENCIL_TEST))},setMask:function(Ut){Le!==Ut&&!Z&&(n.stencilMask(Ut),Le=Ut)},setFunc:function(Ut,yn,li){(ve!==Ut||Ie!==yn||Ve!==li)&&(n.stencilFunc(Ut,yn,li),ve=Ut,Ie=yn,Ve=li)},setOp:function(Ut,yn,li){(ye!==Ut||tt!==yn||Ze!==li)&&(n.stencilOp(Ut,yn,li),ye=Ut,tt=yn,Ze=li)},setLocked:function(Ut){Z=Ut},setClear:function(Ut){Ft!==Ut&&(n.clearStencil(Ut),Ft=Ut)},reset:function(){Z=!1,Le=null,ve=null,Ie=null,Ve=null,ye=null,tt=null,Ze=null,Ft=null}}}const o=new t,c=new r,u=new a,d=new WeakMap,h=new WeakMap;let m={},g={},p={},x=new WeakMap,E=[],T=null,S=!1,y=null,b=null,D=null,w=null,C=null,P=null,F=null,A=new At(0,0,0),U=0,O=!1,k=null,I=null,X=null,V=null,q=null;const ee=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let ae=!1,J=0;const te=n.getParameter(n.VERSION);te.indexOf("WebGL")!==-1?(J=parseFloat(/^WebGL (\d)/.exec(te)[1]),ae=J>=1):te.indexOf("OpenGL ES")!==-1&&(J=parseFloat(/^OpenGL ES (\d)/.exec(te)[1]),ae=J>=2);let ne=null,H={};const oe=n.getParameter(n.SCISSOR_BOX),Se=n.getParameter(n.VIEWPORT),ke=new gn().fromArray(oe),Be=new gn().fromArray(Se);function He(Z,Le,ve,Ie){const Ve=new Uint8Array(4),ye=n.createTexture();n.bindTexture(Z,ye),n.texParameteri(Z,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(Z,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let tt=0;tt<ve;tt++)Z===n.TEXTURE_3D||Z===n.TEXTURE_2D_ARRAY?n.texImage3D(Le,0,n.RGBA,1,1,Ie,0,n.RGBA,n.UNSIGNED_BYTE,Ve):n.texImage2D(Le+tt,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ve);return ye}const ue={};ue[n.TEXTURE_2D]=He(n.TEXTURE_2D,n.TEXTURE_2D,1),ue[n.TEXTURE_CUBE_MAP]=He(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),ue[n.TEXTURE_2D_ARRAY]=He(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),ue[n.TEXTURE_3D]=He(n.TEXTURE_3D,n.TEXTURE_3D,1,1),o.setClear(0,0,0,1),c.setClear(1),u.setClear(0),he(n.DEPTH_TEST),c.setFunc(zl),bt(!1),Yt(Ev),he(n.CULL_FACE),Nt(Qr);function he(Z){m[Z]!==!0&&(n.enable(Z),m[Z]=!0)}function Pe(Z){m[Z]!==!1&&(n.disable(Z),m[Z]=!1)}function Ke(Z,Le){return p[Z]!==Le?(n.bindFramebuffer(Z,Le),p[Z]=Le,Z===n.DRAW_FRAMEBUFFER&&(p[n.FRAMEBUFFER]=Le),Z===n.FRAMEBUFFER&&(p[n.DRAW_FRAMEBUFFER]=Le),!0):!1}function Ge(Z,Le){let ve=E,Ie=!1;if(Z){ve=x.get(Le),ve===void 0&&(ve=[],x.set(Le,ve));const Ve=Z.textures;if(ve.length!==Ve.length||ve[0]!==n.COLOR_ATTACHMENT0){for(let ye=0,tt=Ve.length;ye<tt;ye++)ve[ye]=n.COLOR_ATTACHMENT0+ye;ve.length=Ve.length,Ie=!0}}else ve[0]!==n.BACK&&(ve[0]=n.BACK,Ie=!0);Ie&&n.drawBuffers(ve)}function pt(Z){return T!==Z?(n.useProgram(Z),T=Z,!0):!1}const nn={[yo]:n.FUNC_ADD,[zE]:n.FUNC_SUBTRACT,[HE]:n.FUNC_REVERSE_SUBTRACT};nn[VE]=n.MIN,nn[BE]=n.MAX;const mt={[GE]:n.ZERO,[WE]:n.ONE,[XE]:n.SRC_COLOR,[wx]:n.SRC_ALPHA,[ZE]:n.SRC_ALPHA_SATURATE,[jE]:n.DST_COLOR,[qE]:n.DST_ALPHA,[$E]:n.ONE_MINUS_SRC_COLOR,[Tx]:n.ONE_MINUS_SRC_ALPHA,[KE]:n.ONE_MINUS_DST_COLOR,[YE]:n.ONE_MINUS_DST_ALPHA,[JE]:n.CONSTANT_COLOR,[QE]:n.ONE_MINUS_CONSTANT_COLOR,[ew]:n.CONSTANT_ALPHA,[tw]:n.ONE_MINUS_CONSTANT_ALPHA};function Nt(Z,Le,ve,Ie,Ve,ye,tt,Ze,Ft,Ut){if(Z===Qr){S===!0&&(Pe(n.BLEND),S=!1);return}if(S===!1&&(he(n.BLEND),S=!0),Z!==kE){if(Z!==y||Ut!==O){if((b!==yo||C!==yo)&&(n.blendEquation(n.FUNC_ADD),b=yo,C=yo),Ut)switch(Z){case Nl:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wv:n.blendFunc(n.ONE,n.ONE);break;case Tv:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Av:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:zt("WebGLState: Invalid blending: ",Z);break}else switch(Z){case Nl:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case wv:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Tv:zt("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Av:zt("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:zt("WebGLState: Invalid blending: ",Z);break}D=null,w=null,P=null,F=null,A.set(0,0,0),U=0,y=Z,O=Ut}return}Ve=Ve||Le,ye=ye||ve,tt=tt||Ie,(Le!==b||Ve!==C)&&(n.blendEquationSeparate(nn[Le],nn[Ve]),b=Le,C=Ve),(ve!==D||Ie!==w||ye!==P||tt!==F)&&(n.blendFuncSeparate(mt[ve],mt[Ie],mt[ye],mt[tt]),D=ve,w=Ie,P=ye,F=tt),(Ze.equals(A)===!1||Ft!==U)&&(n.blendColor(Ze.r,Ze.g,Ze.b,Ft),A.copy(Ze),U=Ft),y=Z,O=!1}function qt(Z,Le){Z.side===Li?Pe(n.CULL_FACE):he(n.CULL_FACE);let ve=Z.side===hi;Le&&(ve=!ve),bt(ve),Z.blending===Nl&&Z.transparent===!1?Nt(Qr):Nt(Z.blending,Z.blendEquation,Z.blendSrc,Z.blendDst,Z.blendEquationAlpha,Z.blendSrcAlpha,Z.blendDstAlpha,Z.blendColor,Z.blendAlpha,Z.premultipliedAlpha),c.setFunc(Z.depthFunc),c.setTest(Z.depthTest),c.setMask(Z.depthWrite),o.setMask(Z.colorWrite);const Ie=Z.stencilWrite;u.setTest(Ie),Ie&&(u.setMask(Z.stencilWriteMask),u.setFunc(Z.stencilFunc,Z.stencilRef,Z.stencilFuncMask),u.setOp(Z.stencilFail,Z.stencilZFail,Z.stencilZPass)),vn(Z.polygonOffset,Z.polygonOffsetFactor,Z.polygonOffsetUnits),Z.alphaToCoverage===!0?he(n.SAMPLE_ALPHA_TO_COVERAGE):Pe(n.SAMPLE_ALPHA_TO_COVERAGE)}function bt(Z){k!==Z&&(Z?n.frontFace(n.CW):n.frontFace(n.CCW),k=Z)}function Yt(Z){Z!==FE?(he(n.CULL_FACE),Z!==I&&(Z===Ev?n.cullFace(n.BACK):Z===OE?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Pe(n.CULL_FACE),I=Z}function cn(Z){Z!==X&&(ae&&n.lineWidth(Z),X=Z)}function vn(Z,Le,ve){Z?(he(n.POLYGON_OFFSET_FILL),(V!==Le||q!==ve)&&(V=Le,q=ve,c.getReversed()&&(Le=-Le),n.polygonOffset(Le,ve))):Pe(n.POLYGON_OFFSET_FILL)}function Bt(Z){Z?he(n.SCISSOR_TEST):Pe(n.SCISSOR_TEST)}function en(Z){Z===void 0&&(Z=n.TEXTURE0+ee-1),ne!==Z&&(n.activeTexture(Z),ne=Z)}function $(Z,Le,ve){ve===void 0&&(ne===null?ve=n.TEXTURE0+ee-1:ve=ne);let Ie=H[ve];Ie===void 0&&(Ie={type:void 0,texture:void 0},H[ve]=Ie),(Ie.type!==Z||Ie.texture!==Le)&&(ne!==ve&&(n.activeTexture(ve),ne=ve),n.bindTexture(Z,Le||ue[Z]),Ie.type=Z,Ie.texture=Le)}function sn(){const Z=H[ne];Z!==void 0&&Z.type!==void 0&&(n.bindTexture(Z.type,null),Z.type=void 0,Z.texture=void 0)}function lt(){try{n.compressedTexImage2D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function z(){try{n.compressedTexImage3D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function R(){try{n.texSubImage2D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function K(){try{n.texSubImage3D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function ce(){try{n.compressedTexSubImage2D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function me(){try{n.compressedTexSubImage3D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function Me(){try{n.texStorage2D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function Oe(){try{n.texStorage3D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function ge(){try{n.texImage2D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function _e(){try{n.texImage3D(...arguments)}catch(Z){zt("WebGLState:",Z)}}function ze(Z){return g[Z]!==void 0?g[Z]:n.getParameter(Z)}function et(Z,Le){g[Z]!==Le&&(n.pixelStorei(Z,Le),g[Z]=Le)}function Ue(Z){ke.equals(Z)===!1&&(n.scissor(Z.x,Z.y,Z.z,Z.w),ke.copy(Z))}function Fe(Z){Be.equals(Z)===!1&&(n.viewport(Z.x,Z.y,Z.z,Z.w),Be.copy(Z))}function Je(Z,Le){let ve=h.get(Le);ve===void 0&&(ve=new WeakMap,h.set(Le,ve));let Ie=ve.get(Z);Ie===void 0&&(Ie=n.getUniformBlockIndex(Le,Z.name),ve.set(Z,Ie))}function ct(Z,Le){const Ie=h.get(Le).get(Z);d.get(Le)!==Ie&&(n.uniformBlockBinding(Le,Ie,Z.__bindingPointIndex),d.set(Le,Ie))}function dt(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),c.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),m={},g={},ne=null,H={},p={},x=new WeakMap,E=[],T=null,S=!1,y=null,b=null,D=null,w=null,C=null,P=null,F=null,A=new At(0,0,0),U=0,O=!1,k=null,I=null,X=null,V=null,q=null,ke.set(0,0,n.canvas.width,n.canvas.height),Be.set(0,0,n.canvas.width,n.canvas.height),o.reset(),c.reset(),u.reset()}return{buffers:{color:o,depth:c,stencil:u},enable:he,disable:Pe,bindFramebuffer:Ke,drawBuffers:Ge,useProgram:pt,setBlending:Nt,setMaterial:qt,setFlipSided:bt,setCullFace:Yt,setLineWidth:cn,setPolygonOffset:vn,setScissorTest:Bt,activeTexture:en,bindTexture:$,unbindTexture:sn,compressedTexImage2D:lt,compressedTexImage3D:z,texImage2D:ge,texImage3D:_e,pixelStorei:et,getParameter:ze,updateUBOMapping:Je,uniformBlockBinding:ct,texStorage2D:Me,texStorage3D:Oe,texSubImage2D:R,texSubImage3D:K,compressedTexSubImage2D:ce,compressedTexSubImage3D:me,scissor:Ue,viewport:Fe,reset:dt}}function QC(n,e,t,r,a,o,c){const u=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,d=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),h=new st,m=new WeakMap,g=new Set;let p;const x=new WeakMap;let E=!1;try{E=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function T(z,R){return E?new OffscreenCanvas(z,R):ef("canvas")}function S(z,R,K){let ce=1;const me=lt(z);if((me.width>K||me.height>K)&&(ce=K/Math.max(me.width,me.height)),ce<1)if(typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&z instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&z instanceof ImageBitmap||typeof VideoFrame<"u"&&z instanceof VideoFrame){const Me=Math.floor(ce*me.width),Oe=Math.floor(ce*me.height);p===void 0&&(p=T(Me,Oe));const ge=R?T(Me,Oe):p;return ge.width=Me,ge.height=Oe,ge.getContext("2d").drawImage(z,0,0,Me,Oe),St("WebGLRenderer: Texture has been resized from ("+me.width+"x"+me.height+") to ("+Me+"x"+Oe+")."),ge}else return"data"in z&&St("WebGLRenderer: Image in DataTexture is too big ("+me.width+"x"+me.height+")."),z;return z}function y(z){return z.generateMipmaps}function b(z){n.generateMipmap(z)}function D(z){return z.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:z.isWebGL3DRenderTarget?n.TEXTURE_3D:z.isWebGLArrayRenderTarget||z.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function w(z,R,K,ce,me,Me=!1){if(z!==null){if(n[z]!==void 0)return n[z];St("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+z+"'")}let Oe;ce&&(Oe=e.get("EXT_texture_norm16"),Oe||St("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let ge=R;if(R===n.RED&&(K===n.FLOAT&&(ge=n.R32F),K===n.HALF_FLOAT&&(ge=n.R16F),K===n.UNSIGNED_BYTE&&(ge=n.R8),K===n.UNSIGNED_SHORT&&Oe&&(ge=Oe.R16_EXT),K===n.SHORT&&Oe&&(ge=Oe.R16_SNORM_EXT)),R===n.RED_INTEGER&&(K===n.UNSIGNED_BYTE&&(ge=n.R8UI),K===n.UNSIGNED_SHORT&&(ge=n.R16UI),K===n.UNSIGNED_INT&&(ge=n.R32UI),K===n.BYTE&&(ge=n.R8I),K===n.SHORT&&(ge=n.R16I),K===n.INT&&(ge=n.R32I)),R===n.RG&&(K===n.FLOAT&&(ge=n.RG32F),K===n.HALF_FLOAT&&(ge=n.RG16F),K===n.UNSIGNED_BYTE&&(ge=n.RG8),K===n.UNSIGNED_SHORT&&Oe&&(ge=Oe.RG16_EXT),K===n.SHORT&&Oe&&(ge=Oe.RG16_SNORM_EXT)),R===n.RG_INTEGER&&(K===n.UNSIGNED_BYTE&&(ge=n.RG8UI),K===n.UNSIGNED_SHORT&&(ge=n.RG16UI),K===n.UNSIGNED_INT&&(ge=n.RG32UI),K===n.BYTE&&(ge=n.RG8I),K===n.SHORT&&(ge=n.RG16I),K===n.INT&&(ge=n.RG32I)),R===n.RGB_INTEGER&&(K===n.UNSIGNED_BYTE&&(ge=n.RGB8UI),K===n.UNSIGNED_SHORT&&(ge=n.RGB16UI),K===n.UNSIGNED_INT&&(ge=n.RGB32UI),K===n.BYTE&&(ge=n.RGB8I),K===n.SHORT&&(ge=n.RGB16I),K===n.INT&&(ge=n.RGB32I)),R===n.RGBA_INTEGER&&(K===n.UNSIGNED_BYTE&&(ge=n.RGBA8UI),K===n.UNSIGNED_SHORT&&(ge=n.RGBA16UI),K===n.UNSIGNED_INT&&(ge=n.RGBA32UI),K===n.BYTE&&(ge=n.RGBA8I),K===n.SHORT&&(ge=n.RGBA16I),K===n.INT&&(ge=n.RGBA32I)),R===n.RGB&&(K===n.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGB16_EXT),K===n.SHORT&&Oe&&(ge=Oe.RGB16_SNORM_EXT),K===n.UNSIGNED_INT_5_9_9_9_REV&&(ge=n.RGB9_E5),K===n.UNSIGNED_INT_10F_11F_11F_REV&&(ge=n.R11F_G11F_B10F)),R===n.RGBA){const _e=Me?Qu:kt.getTransfer(me);K===n.FLOAT&&(ge=n.RGBA32F),K===n.HALF_FLOAT&&(ge=n.RGBA16F),K===n.UNSIGNED_BYTE&&(ge=_e===Kt?n.SRGB8_ALPHA8:n.RGBA8),K===n.UNSIGNED_SHORT&&Oe&&(ge=Oe.RGBA16_EXT),K===n.SHORT&&Oe&&(ge=Oe.RGBA16_SNORM_EXT),K===n.UNSIGNED_SHORT_4_4_4_4&&(ge=n.RGBA4),K===n.UNSIGNED_SHORT_5_5_5_1&&(ge=n.RGB5_A1)}return(ge===n.R16F||ge===n.R32F||ge===n.RG16F||ge===n.RG32F||ge===n.RGBA16F||ge===n.RGBA32F)&&e.get("EXT_color_buffer_float"),ge}function C(z,R){let K;return z?R===null||R===Cr||R===Vl?K=n.DEPTH24_STENCIL8:R===Tr?K=n.DEPTH32F_STENCIL8:R===Hl&&(K=n.DEPTH24_STENCIL8,St("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):R===null||R===Cr||R===Vl?K=n.DEPTH_COMPONENT24:R===Tr?K=n.DEPTH_COMPONENT32F:R===Hl&&(K=n.DEPTH_COMPONENT16),K}function P(z,R){return y(z)===!0||z.isFramebufferTexture&&z.minFilter!==Yn&&z.minFilter!==ii?Math.log2(Math.max(R.width,R.height))+1:z.mipmaps!==void 0&&z.mipmaps.length>0?z.mipmaps.length:z.isCompressedTexture&&Array.isArray(z.image)?R.mipmaps.length:1}function F(z){const R=z.target;R.removeEventListener("dispose",F),U(R),R.isVideoTexture&&m.delete(R),R.isHTMLTexture&&g.delete(R)}function A(z){const R=z.target;R.removeEventListener("dispose",A),k(R)}function U(z){const R=r.get(z);if(R.__webglInit===void 0)return;const K=z.source,ce=x.get(K);if(ce){const me=ce[R.__cacheKey];me.usedTimes--,me.usedTimes===0&&O(z),Object.keys(ce).length===0&&x.delete(K)}r.remove(z)}function O(z){const R=r.get(z);n.deleteTexture(R.__webglTexture);const K=z.source,ce=x.get(K);delete ce[R.__cacheKey],c.memory.textures--}function k(z){const R=r.get(z);if(z.depthTexture&&(z.depthTexture.dispose(),r.remove(z.depthTexture)),z.isWebGLCubeRenderTarget)for(let ce=0;ce<6;ce++){if(Array.isArray(R.__webglFramebuffer[ce]))for(let me=0;me<R.__webglFramebuffer[ce].length;me++)n.deleteFramebuffer(R.__webglFramebuffer[ce][me]);else n.deleteFramebuffer(R.__webglFramebuffer[ce]);R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer[ce])}else{if(Array.isArray(R.__webglFramebuffer))for(let ce=0;ce<R.__webglFramebuffer.length;ce++)n.deleteFramebuffer(R.__webglFramebuffer[ce]);else n.deleteFramebuffer(R.__webglFramebuffer);if(R.__webglDepthbuffer&&n.deleteRenderbuffer(R.__webglDepthbuffer),R.__webglMultisampledFramebuffer&&n.deleteFramebuffer(R.__webglMultisampledFramebuffer),R.__webglColorRenderbuffer)for(let ce=0;ce<R.__webglColorRenderbuffer.length;ce++)R.__webglColorRenderbuffer[ce]&&n.deleteRenderbuffer(R.__webglColorRenderbuffer[ce]);R.__webglDepthRenderbuffer&&n.deleteRenderbuffer(R.__webglDepthRenderbuffer)}const K=z.textures;for(let ce=0,me=K.length;ce<me;ce++){const Me=r.get(K[ce]);Me.__webglTexture&&(n.deleteTexture(Me.__webglTexture),c.memory.textures--),r.remove(K[ce])}r.remove(z)}let I=0;function X(){I=0}function V(){return I}function q(z){I=z}function ee(){const z=I;return z>=a.maxTextures&&St("WebGLTextures: Trying to use "+(z+1)+" texture units while this GPU supports only "+a.maxTextures),I+=1,z}function ae(z){const R=[];return R.push(z.wrapS),R.push(z.wrapT),R.push(z.wrapR||0),R.push(z.magFilter),R.push(z.minFilter),R.push(z.anisotropy),R.push(z.internalFormat),R.push(z.format),R.push(z.type),R.push(z.generateMipmaps),R.push(z.premultiplyAlpha),R.push(z.flipY),R.push(z.unpackAlignment),R.push(z.colorSpace),R.join()}function J(z,R){const K=r.get(z);if(z.isVideoTexture&&$(z),z.isRenderTargetTexture===!1&&z.isExternalTexture!==!0&&z.version>0&&K.__version!==z.version){const ce=z.image;if(ce===null)St("WebGLRenderer: Texture marked for update but no image data found.");else if(ce.complete===!1)St("WebGLRenderer: Texture marked for update but image is incomplete");else{Pe(K,z,R);return}}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D,K.__webglTexture,n.TEXTURE0+R)}function te(z,R){const K=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){Pe(K,z,R);return}else z.isExternalTexture&&(K.__webglTexture=z.sourceTexture?z.sourceTexture:null);t.bindTexture(n.TEXTURE_2D_ARRAY,K.__webglTexture,n.TEXTURE0+R)}function ne(z,R){const K=r.get(z);if(z.isRenderTargetTexture===!1&&z.version>0&&K.__version!==z.version){Pe(K,z,R);return}t.bindTexture(n.TEXTURE_3D,K.__webglTexture,n.TEXTURE0+R)}function H(z,R){const K=r.get(z);if(z.isCubeDepthTexture!==!0&&z.version>0&&K.__version!==z.version){Ke(K,z,R);return}t.bindTexture(n.TEXTURE_CUBE_MAP,K.__webglTexture,n.TEXTURE0+R)}const oe={[sp]:n.REPEAT,[Zr]:n.CLAMP_TO_EDGE,[ap]:n.MIRRORED_REPEAT},Se={[Yn]:n.NEAREST,[rw]:n.NEAREST_MIPMAP_NEAREST,[Yc]:n.NEAREST_MIPMAP_LINEAR,[ii]:n.LINEAR,[nh]:n.LINEAR_MIPMAP_NEAREST,[da]:n.LINEAR_MIPMAP_LINEAR},ke={[lw]:n.NEVER,[hw]:n.ALWAYS,[cw]:n.LESS,[pm]:n.LEQUAL,[uw]:n.EQUAL,[mm]:n.GEQUAL,[fw]:n.GREATER,[dw]:n.NOTEQUAL};function Be(z,R){if(R.type===Tr&&e.has("OES_texture_float_linear")===!1&&(R.magFilter===ii||R.magFilter===nh||R.magFilter===Yc||R.magFilter===da||R.minFilter===ii||R.minFilter===nh||R.minFilter===Yc||R.minFilter===da)&&St("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(z,n.TEXTURE_WRAP_S,oe[R.wrapS]),n.texParameteri(z,n.TEXTURE_WRAP_T,oe[R.wrapT]),(z===n.TEXTURE_3D||z===n.TEXTURE_2D_ARRAY)&&n.texParameteri(z,n.TEXTURE_WRAP_R,oe[R.wrapR]),n.texParameteri(z,n.TEXTURE_MAG_FILTER,Se[R.magFilter]),n.texParameteri(z,n.TEXTURE_MIN_FILTER,Se[R.minFilter]),R.compareFunction&&(n.texParameteri(z,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(z,n.TEXTURE_COMPARE_FUNC,ke[R.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(R.magFilter===Yn||R.minFilter!==Yc&&R.minFilter!==da||R.type===Tr&&e.has("OES_texture_float_linear")===!1)return;if(R.anisotropy>1||r.get(R).__currentAnisotropy){const K=e.get("EXT_texture_filter_anisotropic");n.texParameterf(z,K.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(R.anisotropy,a.getMaxAnisotropy())),r.get(R).__currentAnisotropy=R.anisotropy}}}function He(z,R){let K=!1;z.__webglInit===void 0&&(z.__webglInit=!0,R.addEventListener("dispose",F));const ce=R.source;let me=x.get(ce);me===void 0&&(me={},x.set(ce,me));const Me=ae(R);if(Me!==z.__cacheKey){me[Me]===void 0&&(me[Me]={texture:n.createTexture(),usedTimes:0},c.memory.textures++,K=!0),me[Me].usedTimes++;const Oe=me[z.__cacheKey];Oe!==void 0&&(me[z.__cacheKey].usedTimes--,Oe.usedTimes===0&&O(R)),z.__cacheKey=Me,z.__webglTexture=me[Me].texture}return K}function ue(z,R,K){return Math.floor(Math.floor(z/K)/R)}function he(z,R,K,ce){const Me=z.updateRanges;if(Me.length===0)t.texSubImage2D(n.TEXTURE_2D,0,0,0,R.width,R.height,K,ce,R.data);else{Me.sort((et,Ue)=>et.start-Ue.start);let Oe=0;for(let et=1;et<Me.length;et++){const Ue=Me[Oe],Fe=Me[et],Je=Ue.start+Ue.count,ct=ue(Fe.start,R.width,4),dt=ue(Ue.start,R.width,4);Fe.start<=Je+1&&ct===dt&&ue(Fe.start+Fe.count-1,R.width,4)===ct?Ue.count=Math.max(Ue.count,Fe.start+Fe.count-Ue.start):(++Oe,Me[Oe]=Fe)}Me.length=Oe+1;const ge=t.getParameter(n.UNPACK_ROW_LENGTH),_e=t.getParameter(n.UNPACK_SKIP_PIXELS),ze=t.getParameter(n.UNPACK_SKIP_ROWS);t.pixelStorei(n.UNPACK_ROW_LENGTH,R.width);for(let et=0,Ue=Me.length;et<Ue;et++){const Fe=Me[et],Je=Math.floor(Fe.start/4),ct=Math.ceil(Fe.count/4),dt=Je%R.width,Z=Math.floor(Je/R.width),Le=ct,ve=1;t.pixelStorei(n.UNPACK_SKIP_PIXELS,dt),t.pixelStorei(n.UNPACK_SKIP_ROWS,Z),t.texSubImage2D(n.TEXTURE_2D,0,dt,Z,Le,ve,K,ce,R.data)}z.clearUpdateRanges(),t.pixelStorei(n.UNPACK_ROW_LENGTH,ge),t.pixelStorei(n.UNPACK_SKIP_PIXELS,_e),t.pixelStorei(n.UNPACK_SKIP_ROWS,ze)}}function Pe(z,R,K){let ce=n.TEXTURE_2D;(R.isDataArrayTexture||R.isCompressedArrayTexture)&&(ce=n.TEXTURE_2D_ARRAY),R.isData3DTexture&&(ce=n.TEXTURE_3D);const me=He(z,R),Me=R.source;t.bindTexture(ce,z.__webglTexture,n.TEXTURE0+K);const Oe=r.get(Me);if(Me.version!==Oe.__version||me===!0){if(t.activeTexture(n.TEXTURE0+K),(typeof ImageBitmap<"u"&&R.image instanceof ImageBitmap)===!1){const ve=kt.getPrimaries(kt.workingColorSpace),Ie=R.colorSpace===Ns?null:kt.getPrimaries(R.colorSpace),Ve=R.colorSpace===Ns||ve===Ie?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ve)}t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment);let _e=S(R.image,!1,a.maxTextureSize);_e=sn(R,_e);const ze=o.convert(R.format,R.colorSpace),et=o.convert(R.type);let Ue=w(R.internalFormat,ze,et,R.normalized,R.colorSpace,R.isVideoTexture);Be(ce,R);let Fe;const Je=R.mipmaps,ct=R.isVideoTexture!==!0,dt=Oe.__version===void 0||me===!0,Z=Me.dataReady,Le=P(R,_e);if(R.isDepthTexture)Ue=C(R.format===ha,R.type),dt&&(ct?t.texStorage2D(n.TEXTURE_2D,1,Ue,_e.width,_e.height):t.texImage2D(n.TEXTURE_2D,0,Ue,_e.width,_e.height,0,ze,et,null));else if(R.isDataTexture)if(Je.length>0){ct&&dt&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Fe=Je[ve],ct?Z&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,ze,et,Fe.data):t.texImage2D(n.TEXTURE_2D,ve,Ue,Fe.width,Fe.height,0,ze,et,Fe.data);R.generateMipmaps=!1}else ct?(dt&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height),Z&&he(R,_e,ze,et)):t.texImage2D(n.TEXTURE_2D,0,Ue,_e.width,_e.height,0,ze,et,_e.data);else if(R.isCompressedTexture)if(R.isCompressedArrayTexture){ct&&dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,Je[0].width,Je[0].height,_e.depth);for(let ve=0,Ie=Je.length;ve<Ie;ve++)if(Fe=Je[ve],R.format!==fr)if(ze!==null)if(ct){if(Z)if(R.layerUpdates.size>0){const Ve=r_(Fe.width,Fe.height,R.format,R.type);for(const ye of R.layerUpdates){const tt=Fe.data.subarray(ye*Ve/Fe.data.BYTES_PER_ELEMENT,(ye+1)*Ve/Fe.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,ye,Fe.width,Fe.height,1,ze,tt)}}else t.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,_e.depth,ze,Fe.data)}else t.compressedTexImage3D(n.TEXTURE_2D_ARRAY,ve,Ue,Fe.width,Fe.height,_e.depth,0,Fe.data,0,0);else St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else ct?Z&&t.texSubImage3D(n.TEXTURE_2D_ARRAY,ve,0,0,0,Fe.width,Fe.height,_e.depth,ze,et,Fe.data):t.texImage3D(n.TEXTURE_2D_ARRAY,ve,Ue,Fe.width,Fe.height,_e.depth,0,ze,et,Fe.data);R.layerUpdates.size>0&&R.clearLayerUpdates()}else{ct&&dt&&t.texStorage2D(n.TEXTURE_2D,Le,Ue,Je[0].width,Je[0].height);for(let ve=0,Ie=Je.length;ve<Ie;ve++)Fe=Je[ve],R.format!==fr?ze!==null?ct?Z&&t.compressedTexSubImage2D(n.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,ze,Fe.data):t.compressedTexImage2D(n.TEXTURE_2D,ve,Ue,Fe.width,Fe.height,0,Fe.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):ct?Z&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,Fe.width,Fe.height,ze,et,Fe.data):t.texImage2D(n.TEXTURE_2D,ve,Ue,Fe.width,Fe.height,0,ze,et,Fe.data)}else if(R.isDataArrayTexture)if(ct){if(dt&&t.texStorage3D(n.TEXTURE_2D_ARRAY,Le,Ue,_e.width,_e.height,_e.depth),Z)if(R.layerUpdates.size>0){const ve=r_(_e.width,_e.height,R.format,R.type);for(const Ie of R.layerUpdates){const Ve=_e.data.subarray(Ie*ve/_e.data.BYTES_PER_ELEMENT,(Ie+1)*ve/_e.data.BYTES_PER_ELEMENT);t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Ie,_e.width,_e.height,1,ze,et,Ve)}R.clearLayerUpdates()}else t.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,_e.width,_e.height,_e.depth,ze,et,_e.data)}else t.texImage3D(n.TEXTURE_2D_ARRAY,0,Ue,_e.width,_e.height,_e.depth,0,ze,et,_e.data);else if(R.isData3DTexture)ct?(dt&&t.texStorage3D(n.TEXTURE_3D,Le,Ue,_e.width,_e.height,_e.depth),Z&&t.texSubImage3D(n.TEXTURE_3D,0,0,0,0,_e.width,_e.height,_e.depth,ze,et,_e.data)):t.texImage3D(n.TEXTURE_3D,0,Ue,_e.width,_e.height,_e.depth,0,ze,et,_e.data);else if(R.isFramebufferTexture){if(dt)if(ct)t.texStorage2D(n.TEXTURE_2D,Le,Ue,_e.width,_e.height);else{let ve=_e.width,Ie=_e.height;for(let Ve=0;Ve<Le;Ve++)t.texImage2D(n.TEXTURE_2D,Ve,Ue,ve,Ie,0,ze,et,null),ve>>=1,Ie>>=1}}else if(R.isHTMLTexture){if("texElementImage2D"in n){const ve=n.canvas;if(ve.hasAttribute("layoutsubtree")||ve.setAttribute("layoutsubtree","true"),_e.parentNode!==ve){ve.appendChild(_e),g.add(R),ve.onpaint=Ie=>{const Ve=Ie.changedElements;for(const ye of g)Ve.includes(ye.image)&&(ye.needsUpdate=!0)},ve.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,_e);else{const Ve=n.RGBA,ye=n.RGBA,tt=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ve,ye,tt,_e)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(Je.length>0){if(ct&&dt){const ve=lt(Je[0]);t.texStorage2D(n.TEXTURE_2D,Le,Ue,ve.width,ve.height)}for(let ve=0,Ie=Je.length;ve<Ie;ve++)Fe=Je[ve],ct?Z&&t.texSubImage2D(n.TEXTURE_2D,ve,0,0,ze,et,Fe):t.texImage2D(n.TEXTURE_2D,ve,Ue,ze,et,Fe);R.generateMipmaps=!1}else if(ct){if(dt){const ve=lt(_e);t.texStorage2D(n.TEXTURE_2D,Le,Ue,ve.width,ve.height)}Z&&t.texSubImage2D(n.TEXTURE_2D,0,0,0,ze,et,_e)}else t.texImage2D(n.TEXTURE_2D,0,Ue,ze,et,_e);y(R)&&b(ce),Oe.__version=Me.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ke(z,R,K){if(R.image.length!==6)return;const ce=He(z,R),me=R.source;t.bindTexture(n.TEXTURE_CUBE_MAP,z.__webglTexture,n.TEXTURE0+K);const Me=r.get(me);if(me.version!==Me.__version||ce===!0){t.activeTexture(n.TEXTURE0+K);const Oe=kt.getPrimaries(kt.workingColorSpace),ge=R.colorSpace===Ns?null:kt.getPrimaries(R.colorSpace),_e=R.colorSpace===Ns||Oe===ge?n.NONE:n.BROWSER_DEFAULT_WEBGL;t.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,R.flipY),t.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,R.premultiplyAlpha),t.pixelStorei(n.UNPACK_ALIGNMENT,R.unpackAlignment),t.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,_e);const ze=R.isCompressedTexture||R.image[0].isCompressedTexture,et=R.image[0]&&R.image[0].isDataTexture,Ue=[];for(let ye=0;ye<6;ye++)!ze&&!et?Ue[ye]=S(R.image[ye],!0,a.maxCubemapSize):Ue[ye]=et?R.image[ye].image:R.image[ye],Ue[ye]=sn(R,Ue[ye]);const Fe=Ue[0],Je=o.convert(R.format,R.colorSpace),ct=o.convert(R.type),dt=w(R.internalFormat,Je,ct,R.normalized,R.colorSpace),Z=R.isVideoTexture!==!0,Le=Me.__version===void 0||ce===!0,ve=me.dataReady;let Ie=P(R,Fe);Be(n.TEXTURE_CUBE_MAP,R);let Ve;if(ze){Z&&Le&&t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,dt,Fe.width,Fe.height);for(let ye=0;ye<6;ye++){Ve=Ue[ye].mipmaps;for(let tt=0;tt<Ve.length;tt++){const Ze=Ve[tt];R.format!==fr?Je!==null?Z?ve&&t.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt,0,0,Ze.width,Ze.height,Je,Ze.data):t.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt,dt,Ze.width,Ze.height,0,Ze.data):St("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):Z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt,0,0,Ze.width,Ze.height,Je,ct,Ze.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt,dt,Ze.width,Ze.height,0,Je,ct,Ze.data)}}}else{if(Ve=R.mipmaps,Z&&Le){Ve.length>0&&Ie++;const ye=lt(Ue[0]);t.texStorage2D(n.TEXTURE_CUBE_MAP,Ie,dt,ye.width,ye.height)}for(let ye=0;ye<6;ye++)if(et){Z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Ue[ye].width,Ue[ye].height,Je,ct,Ue[ye].data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,dt,Ue[ye].width,Ue[ye].height,0,Je,ct,Ue[ye].data);for(let tt=0;tt<Ve.length;tt++){const Ft=Ve[tt].image[ye].image;Z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt+1,0,0,Ft.width,Ft.height,Je,ct,Ft.data):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt+1,dt,Ft.width,Ft.height,0,Je,ct,Ft.data)}}else{Z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,0,0,Je,ct,Ue[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,0,dt,Je,ct,Ue[ye]);for(let tt=0;tt<Ve.length;tt++){const Ze=Ve[tt];Z?ve&&t.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt+1,0,0,Je,ct,Ze.image[ye]):t.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+ye,tt+1,dt,Je,ct,Ze.image[ye])}}}y(R)&&b(n.TEXTURE_CUBE_MAP),Me.__version=me.version,R.onUpdate&&R.onUpdate(R)}z.__version=R.version}function Ge(z,R,K,ce,me,Me){const Oe=o.convert(K.format,K.colorSpace),ge=o.convert(K.type),_e=w(K.internalFormat,Oe,ge,K.normalized,K.colorSpace),ze=r.get(R),et=r.get(K);if(et.__renderTarget=R,!ze.__hasExternalTextures){const Ue=Math.max(1,R.width>>Me),Fe=Math.max(1,R.height>>Me);me===n.TEXTURE_3D||me===n.TEXTURE_2D_ARRAY?t.texImage3D(me,Me,_e,Ue,Fe,R.depth,0,Oe,ge,null):t.texImage2D(me,Me,_e,Ue,Fe,0,Oe,ge,null)}t.bindFramebuffer(n.FRAMEBUFFER,z),en(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,ce,me,et.__webglTexture,0,Bt(R)):(me===n.TEXTURE_2D||me>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&me<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,ce,me,et.__webglTexture,Me),t.bindFramebuffer(n.FRAMEBUFFER,null)}function pt(z,R,K){if(n.bindRenderbuffer(n.RENDERBUFFER,z),R.depthBuffer){const ce=R.depthTexture,me=ce&&ce.isDepthTexture?ce.type:null,Me=C(R.stencilBuffer,me),Oe=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;en(R)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(R),Me,R.width,R.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(R),Me,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,Me,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Oe,n.RENDERBUFFER,z)}else{const ce=R.textures;for(let me=0;me<ce.length;me++){const Me=ce[me],Oe=o.convert(Me.format,Me.colorSpace),ge=o.convert(Me.type),_e=w(Me.internalFormat,Oe,ge,Me.normalized,Me.colorSpace);en(R)?u.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,Bt(R),_e,R.width,R.height):K?n.renderbufferStorageMultisample(n.RENDERBUFFER,Bt(R),_e,R.width,R.height):n.renderbufferStorage(n.RENDERBUFFER,_e,R.width,R.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function nn(z,R,K){const ce=R.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(n.FRAMEBUFFER,z),!(R.depthTexture&&R.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const me=r.get(R.depthTexture);if(me.__renderTarget=R,(!me.__webglTexture||R.depthTexture.image.width!==R.width||R.depthTexture.image.height!==R.height)&&(R.depthTexture.image.width=R.width,R.depthTexture.image.height=R.height,R.depthTexture.needsUpdate=!0),ce){if(me.__webglInit===void 0&&(me.__webglInit=!0,R.depthTexture.addEventListener("dispose",F)),me.__webglTexture===void 0){me.__webglTexture=n.createTexture(),t.bindTexture(n.TEXTURE_CUBE_MAP,me.__webglTexture),Be(n.TEXTURE_CUBE_MAP,R.depthTexture);const ze=o.convert(R.depthTexture.format),et=o.convert(R.depthTexture.type);let Ue;R.depthTexture.format===ns?Ue=n.DEPTH_COMPONENT24:R.depthTexture.format===ha&&(Ue=n.DEPTH24_STENCIL8);for(let Fe=0;Fe<6;Fe++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+Fe,0,Ue,R.width,R.height,0,ze,et,null)}}else J(R.depthTexture,0);const Me=me.__webglTexture,Oe=Bt(R),ge=ce?n.TEXTURE_CUBE_MAP_POSITIVE_X+K:n.TEXTURE_2D,_e=R.depthTexture.format===ha?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(R.depthTexture.format===ns)en(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,ge,Me,0,Oe):n.framebufferTexture2D(n.FRAMEBUFFER,_e,ge,Me,0);else if(R.depthTexture.format===ha)en(R)?u.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,_e,ge,Me,0,Oe):n.framebufferTexture2D(n.FRAMEBUFFER,_e,ge,Me,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function mt(z){const R=r.get(z),K=z.isWebGLCubeRenderTarget===!0;if(R.__boundDepthTexture!==z.depthTexture){const ce=z.depthTexture;if(R.__depthDisposeCallback&&R.__depthDisposeCallback(),ce){const me=()=>{delete R.__boundDepthTexture,delete R.__depthDisposeCallback,ce.removeEventListener("dispose",me)};ce.addEventListener("dispose",me),R.__depthDisposeCallback=me}R.__boundDepthTexture=ce}if(z.depthTexture&&!R.__autoAllocateDepthBuffer)if(K)for(let ce=0;ce<6;ce++)nn(R.__webglFramebuffer[ce],z,ce);else{const ce=z.texture.mipmaps;ce&&ce.length>0?nn(R.__webglFramebuffer[0],z,0):nn(R.__webglFramebuffer,z,0)}else if(K){R.__webglDepthbuffer=[];for(let ce=0;ce<6;ce++)if(t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[ce]),R.__webglDepthbuffer[ce]===void 0)R.__webglDepthbuffer[ce]=n.createRenderbuffer(),pt(R.__webglDepthbuffer[ce],z,!1);else{const me=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=R.__webglDepthbuffer[ce];n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Me)}}else{const ce=z.texture.mipmaps;if(ce&&ce.length>0?t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer[0]):t.bindFramebuffer(n.FRAMEBUFFER,R.__webglFramebuffer),R.__webglDepthbuffer===void 0)R.__webglDepthbuffer=n.createRenderbuffer(),pt(R.__webglDepthbuffer,z,!1);else{const me=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Me=R.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Me),n.framebufferRenderbuffer(n.FRAMEBUFFER,me,n.RENDERBUFFER,Me)}}t.bindFramebuffer(n.FRAMEBUFFER,null)}function Nt(z,R,K){const ce=r.get(z);R!==void 0&&Ge(ce.__webglFramebuffer,z,z.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),K!==void 0&&mt(z)}function qt(z){const R=z.texture,K=r.get(z),ce=r.get(R);z.addEventListener("dispose",A);const me=z.textures,Me=z.isWebGLCubeRenderTarget===!0,Oe=me.length>1;if(Oe||(ce.__webglTexture===void 0&&(ce.__webglTexture=n.createTexture()),ce.__version=R.version,c.memory.textures++),Me){K.__webglFramebuffer=[];for(let ge=0;ge<6;ge++)if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer[ge]=[];for(let _e=0;_e<R.mipmaps.length;_e++)K.__webglFramebuffer[ge][_e]=n.createFramebuffer()}else K.__webglFramebuffer[ge]=n.createFramebuffer()}else{if(R.mipmaps&&R.mipmaps.length>0){K.__webglFramebuffer=[];for(let ge=0;ge<R.mipmaps.length;ge++)K.__webglFramebuffer[ge]=n.createFramebuffer()}else K.__webglFramebuffer=n.createFramebuffer();if(Oe)for(let ge=0,_e=me.length;ge<_e;ge++){const ze=r.get(me[ge]);ze.__webglTexture===void 0&&(ze.__webglTexture=n.createTexture(),c.memory.textures++)}if(z.samples>0&&en(z)===!1){K.__webglMultisampledFramebuffer=n.createFramebuffer(),K.__webglColorRenderbuffer=[],t.bindFramebuffer(n.FRAMEBUFFER,K.__webglMultisampledFramebuffer);for(let ge=0;ge<me.length;ge++){const _e=me[ge];K.__webglColorRenderbuffer[ge]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,K.__webglColorRenderbuffer[ge]);const ze=o.convert(_e.format,_e.colorSpace),et=o.convert(_e.type),Ue=w(_e.internalFormat,ze,et,_e.normalized,_e.colorSpace,z.isXRRenderTarget===!0),Fe=Bt(z);n.renderbufferStorageMultisample(n.RENDERBUFFER,Fe,Ue,z.width,z.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ge,n.RENDERBUFFER,K.__webglColorRenderbuffer[ge])}n.bindRenderbuffer(n.RENDERBUFFER,null),z.depthBuffer&&(K.__webglDepthRenderbuffer=n.createRenderbuffer(),pt(K.__webglDepthRenderbuffer,z,!0)),t.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Me){t.bindTexture(n.TEXTURE_CUBE_MAP,ce.__webglTexture),Be(n.TEXTURE_CUBE_MAP,R);for(let ge=0;ge<6;ge++)if(R.mipmaps&&R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)Ge(K.__webglFramebuffer[ge][_e],z,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,_e);else Ge(K.__webglFramebuffer[ge],z,R,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+ge,0);y(R)&&b(n.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(Oe){for(let ge=0,_e=me.length;ge<_e;ge++){const ze=me[ge],et=r.get(ze);let Ue=n.TEXTURE_2D;(z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(Ue=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(Ue,et.__webglTexture),Be(Ue,ze),Ge(K.__webglFramebuffer,z,ze,n.COLOR_ATTACHMENT0+ge,Ue,0),y(ze)&&b(Ue)}t.unbindTexture()}else{let ge=n.TEXTURE_2D;if((z.isWebGL3DRenderTarget||z.isWebGLArrayRenderTarget)&&(ge=z.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),t.bindTexture(ge,ce.__webglTexture),Be(ge,R),R.mipmaps&&R.mipmaps.length>0)for(let _e=0;_e<R.mipmaps.length;_e++)Ge(K.__webglFramebuffer[_e],z,R,n.COLOR_ATTACHMENT0,ge,_e);else Ge(K.__webglFramebuffer,z,R,n.COLOR_ATTACHMENT0,ge,0);y(R)&&b(ge),t.unbindTexture()}z.depthBuffer&&mt(z)}function bt(z){const R=z.textures;for(let K=0,ce=R.length;K<ce;K++){const me=R[K];if(y(me)){const Me=D(z),Oe=r.get(me).__webglTexture;t.bindTexture(Me,Oe),b(Me),t.unbindTexture()}}}const Yt=[],cn=[];function vn(z){if(z.samples>0){if(en(z)===!1){const R=z.textures,K=z.width,ce=z.height;let me=n.COLOR_BUFFER_BIT;const Me=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Oe=r.get(z),ge=R.length>1;if(ge)for(let ze=0;ze<R.length;ze++)t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,null),t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,null,0);t.bindFramebuffer(n.READ_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer);const _e=z.texture.mipmaps;_e&&_e.length>0?t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer[0]):t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglFramebuffer);for(let ze=0;ze<R.length;ze++){if(z.resolveDepthBuffer&&(z.depthBuffer&&(me|=n.DEPTH_BUFFER_BIT),z.stencilBuffer&&z.resolveStencilBuffer&&(me|=n.STENCIL_BUFFER_BIT)),ge){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[ze]);const et=r.get(R[ze]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,et,0)}n.blitFramebuffer(0,0,K,ce,0,0,K,ce,me,n.NEAREST),d===!0&&(Yt.length=0,cn.length=0,Yt.push(n.COLOR_ATTACHMENT0+ze),z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&(Yt.push(Me),cn.push(Me),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,cn)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,Yt))}if(t.bindFramebuffer(n.READ_FRAMEBUFFER,null),t.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),ge)for(let ze=0;ze<R.length;ze++){t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.RENDERBUFFER,Oe.__webglColorRenderbuffer[ze]);const et=r.get(R[ze]).__webglTexture;t.bindFramebuffer(n.FRAMEBUFFER,Oe.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+ze,n.TEXTURE_2D,et,0)}t.bindFramebuffer(n.DRAW_FRAMEBUFFER,Oe.__webglMultisampledFramebuffer)}else if(z.depthBuffer&&z.storeMultisampledDepthBuffer===!1&&d){const R=z.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[R])}}}function Bt(z){return Math.min(a.maxSamples,z.samples)}function en(z){const R=r.get(z);return z.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&R.__useRenderToTexture!==!1}function $(z){const R=c.render.frame;m.get(z)!==R&&(m.set(z,R),z.update())}function sn(z,R){const K=z.colorSpace,ce=z.format,me=z.type;return z.isCompressedTexture===!0||z.isVideoTexture===!0||K!==Ju&&K!==Ns&&(kt.getTransfer(K)===Kt?(ce!==fr||me!==Di)&&St("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):zt("WebGLTextures: Unsupported texture color space:",K)),R}function lt(z){return typeof HTMLImageElement<"u"&&z instanceof HTMLImageElement?(h.width=z.naturalWidth||z.width,h.height=z.naturalHeight||z.height):typeof VideoFrame<"u"&&z instanceof VideoFrame?(h.width=z.displayWidth,h.height=z.displayHeight):(h.width=z.width,h.height=z.height),h}this.allocateTextureUnit=ee,this.resetTextureUnits=X,this.getTextureUnits=V,this.setTextureUnits=q,this.setTexture2D=J,this.setTexture2DArray=te,this.setTexture3D=ne,this.setTextureCube=H,this.rebindTextures=Nt,this.setupRenderTarget=qt,this.updateRenderTargetMipmap=bt,this.updateMultisampleRenderTarget=vn,this.setupDepthRenderbuffer=mt,this.setupFrameBufferTexture=Ge,this.useMultisampledRTT=en,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function eR(n,e){function t(r,a=Ns){let o;const c=kt.getTransfer(a);if(r===Di)return n.UNSIGNED_BYTE;if(r===cm)return n.UNSIGNED_SHORT_4_4_4_4;if(r===um)return n.UNSIGNED_SHORT_5_5_5_1;if(r===Ix)return n.UNSIGNED_INT_5_9_9_9_REV;if(r===kx)return n.UNSIGNED_INT_10F_11F_11F_REV;if(r===Fx)return n.BYTE;if(r===Ox)return n.SHORT;if(r===Hl)return n.UNSIGNED_SHORT;if(r===lm)return n.INT;if(r===Cr)return n.UNSIGNED_INT;if(r===Tr)return n.FLOAT;if(r===Rr)return n.HALF_FLOAT;if(r===zx)return n.ALPHA;if(r===Hx)return n.RGB;if(r===fr)return n.RGBA;if(r===ns)return n.DEPTH_COMPONENT;if(r===ha)return n.DEPTH_STENCIL;if(r===Vx)return n.RED;if(r===fm)return n.RED_INTEGER;if(r===va)return n.RG;if(r===dm)return n.RG_INTEGER;if(r===hm)return n.RGBA_INTEGER;if(r===Hu||r===Vu||r===Bu||r===Gu)if(c===Kt)if(o=e.get("WEBGL_compressed_texture_s3tc_srgb"),o!==null){if(r===Hu)return o.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(r===Vu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(r===Bu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(r===Gu)return o.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(o=e.get("WEBGL_compressed_texture_s3tc"),o!==null){if(r===Hu)return o.COMPRESSED_RGB_S3TC_DXT1_EXT;if(r===Vu)return o.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(r===Bu)return o.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(r===Gu)return o.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(r===op||r===lp||r===cp||r===up)if(o=e.get("WEBGL_compressed_texture_pvrtc"),o!==null){if(r===op)return o.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(r===lp)return o.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(r===cp)return o.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(r===up)return o.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(r===fp||r===dp||r===hp||r===pp||r===mp||r===Ku||r===gp)if(o=e.get("WEBGL_compressed_texture_etc"),o!==null){if(r===fp||r===dp)return c===Kt?o.COMPRESSED_SRGB8_ETC2:o.COMPRESSED_RGB8_ETC2;if(r===hp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:o.COMPRESSED_RGBA8_ETC2_EAC;if(r===pp)return o.COMPRESSED_R11_EAC;if(r===mp)return o.COMPRESSED_SIGNED_R11_EAC;if(r===Ku)return o.COMPRESSED_RG11_EAC;if(r===gp)return o.COMPRESSED_SIGNED_RG11_EAC}else return null;if(r===vp||r===_p||r===xp||r===yp||r===Sp||r===Mp||r===Ep||r===wp||r===Tp||r===Ap||r===bp||r===Cp||r===Rp||r===Pp)if(o=e.get("WEBGL_compressed_texture_astc"),o!==null){if(r===vp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:o.COMPRESSED_RGBA_ASTC_4x4_KHR;if(r===_p)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:o.COMPRESSED_RGBA_ASTC_5x4_KHR;if(r===xp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:o.COMPRESSED_RGBA_ASTC_5x5_KHR;if(r===yp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:o.COMPRESSED_RGBA_ASTC_6x5_KHR;if(r===Sp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:o.COMPRESSED_RGBA_ASTC_6x6_KHR;if(r===Mp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:o.COMPRESSED_RGBA_ASTC_8x5_KHR;if(r===Ep)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:o.COMPRESSED_RGBA_ASTC_8x6_KHR;if(r===wp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:o.COMPRESSED_RGBA_ASTC_8x8_KHR;if(r===Tp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:o.COMPRESSED_RGBA_ASTC_10x5_KHR;if(r===Ap)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:o.COMPRESSED_RGBA_ASTC_10x6_KHR;if(r===bp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:o.COMPRESSED_RGBA_ASTC_10x8_KHR;if(r===Cp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:o.COMPRESSED_RGBA_ASTC_10x10_KHR;if(r===Rp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:o.COMPRESSED_RGBA_ASTC_12x10_KHR;if(r===Pp)return c===Kt?o.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:o.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(r===Lp||r===Dp||r===Np)if(o=e.get("EXT_texture_compression_bptc"),o!==null){if(r===Lp)return c===Kt?o.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:o.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(r===Dp)return o.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(r===Np)return o.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(r===Up||r===Fp||r===Zu||r===Op)if(o=e.get("EXT_texture_compression_rgtc"),o!==null){if(r===Up)return o.COMPRESSED_RED_RGTC1_EXT;if(r===Fp)return o.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(r===Zu)return o.COMPRESSED_RED_GREEN_RGTC2_EXT;if(r===Op)return o.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return r===Vl?n.UNSIGNED_INT_24_8:n[r]!==void 0?n[r]:null}return{convert:t}}const tR=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,nR=`
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

}`;class iR{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const r=new Zx(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=r}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,r=new Pr({vertexShader:tR,fragmentShader:nR,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new Ni(new mf(20,20),r)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class rR extends Hs{constructor(e,t){super();const r=this;let a=null,o=1,c=null,u="local-floor",d=1,h=null,m=null,g=null,p=null,x=null,E=null;const T=typeof XRWebGLBinding<"u",S=new iR,y={},b=t.getContextAttributes();let D=null,w=null;const C=[],P=[],F=new st;let A=null,U=null;const O=new Wi;O.viewport=new gn;const k=new Wi;k.viewport=new gn;const I=[O,k],X=new lT;let V=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(ue){let he=C[ue];return he===void 0&&(he=new uh,C[ue]=he),he.getTargetRaySpace()},this.getControllerGrip=function(ue){let he=C[ue];return he===void 0&&(he=new uh,C[ue]=he),he.getGripSpace()},this.getHand=function(ue){let he=C[ue];return he===void 0&&(he=new uh,C[ue]=he),he.getHandSpace()};function ee(ue){const he=P.indexOf(ue.inputSource);if(he===-1)return;const Pe=C[he];Pe!==void 0&&(Pe.update(ue.inputSource,ue.frame,h||c),Pe.dispatchEvent({type:ue.type,data:ue.inputSource}))}function ae(){a.removeEventListener("select",ee),a.removeEventListener("selectstart",ee),a.removeEventListener("selectend",ee),a.removeEventListener("squeeze",ee),a.removeEventListener("squeezestart",ee),a.removeEventListener("squeezeend",ee),a.removeEventListener("end",ae),a.removeEventListener("inputsourceschange",J);for(let ue=0;ue<C.length;ue++){const he=P[ue];he!==null&&(P[ue]=null,C[ue].disconnect(he))}V=null,q=null,S.reset();for(const ue in y)delete y[ue];if(e.setRenderTarget(D),x=null,p=null,g=null,a=null,w=null,He.stop(),r.isPresenting=!1,e.setPixelRatio(A),e.setSize(F.width,F.height,!1),U!==null){const ue=U.camera;ue.fov=U.fov,ue.zoom=U.zoom,ue.updateProjectionMatrix(),U=null}r.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(ue){o=ue,r.isPresenting===!0&&St("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(ue){u=ue,r.isPresenting===!0&&St("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return h||c},this.setReferenceSpace=function(ue){h=ue},this.getBaseLayer=function(){return p!==null?p:x},this.getBinding=function(){return g===null&&T&&(g=new XRWebGLBinding(a,t)),g},this.getFrame=function(){return E},this.getSession=function(){return a},this.setSession=async function(ue){if(a=ue,a!==null){if(D=e.getRenderTarget(),a.addEventListener("select",ee),a.addEventListener("selectstart",ee),a.addEventListener("selectend",ee),a.addEventListener("squeeze",ee),a.addEventListener("squeezestart",ee),a.addEventListener("squeezeend",ee),a.addEventListener("end",ae),a.addEventListener("inputsourceschange",J),b.xrCompatible!==!0&&await t.makeXRCompatible(),A=e.getPixelRatio(),e.getSize(F),T&&"createProjectionLayer"in XRWebGLBinding.prototype){let Pe=null,Ke=null,Ge=null;b.depth&&(Ge=b.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,Pe=b.stencil?ha:ns,Ke=b.stencil?Vl:Cr);const pt={colorFormat:t.RGBA8,depthFormat:Ge,scaleFactor:o};g=this.getBinding(),p=g.createProjectionLayer(pt),a.updateRenderState({layers:[p]}),e.setPixelRatio(1),e.setSize(p.textureWidth,p.textureHeight,!1),w=new hr(p.textureWidth,p.textureHeight,{format:fr,type:Di,depthTexture:new Gl(p.textureWidth,p.textureHeight,Ke,void 0,void 0,void 0,void 0,void 0,void 0,Pe),stencilBuffer:b.stencil,colorSpace:e.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1,storeMultisampledDepthBuffer:p.ignoreDepthValues===!1,storeMultisampledStencilBuffer:p.ignoreDepthValues===!1})}else{const Pe={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:o};x=new XRWebGLLayer(a,t,Pe),a.updateRenderState({baseLayer:x}),e.setPixelRatio(1),e.setSize(x.framebufferWidth,x.framebufferHeight,!1),w=new hr(x.framebufferWidth,x.framebufferHeight,{format:fr,type:Di,colorSpace:e.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:x.ignoreDepthValues===!1,resolveStencilBuffer:x.ignoreDepthValues===!1,storeMultisampledDepthBuffer:x.ignoreDepthValues===!1,storeMultisampledStencilBuffer:x.ignoreDepthValues===!1})}w.isXRRenderTarget=!0,this.setFoveation(d),h=null,c=await a.requestReferenceSpace(u),He.setContext(a),He.start(),r.isPresenting=!0,r.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(a!==null)return a.environmentBlendMode},this.getDepthTexture=function(){return S.getDepthTexture()};function J(ue){for(let he=0;he<ue.removed.length;he++){const Pe=ue.removed[he],Ke=P.indexOf(Pe);Ke>=0&&(P[Ke]=null,C[Ke].disconnect(Pe))}for(let he=0;he<ue.added.length;he++){const Pe=ue.added[he];let Ke=P.indexOf(Pe);if(Ke===-1){for(let pt=0;pt<C.length;pt++)if(pt>=P.length){P.push(Pe),Ke=pt;break}else if(P[pt]===null){P[pt]=Pe,Ke=pt;break}if(Ke===-1)break}const Ge=C[Ke];Ge&&Ge.connect(Pe)}}const te=new G,ne=new G;function H(ue,he,Pe){te.setFromMatrixPosition(he.matrixWorld),ne.setFromMatrixPosition(Pe.matrixWorld);const Ke=te.distanceTo(ne),Ge=he.projectionMatrix.elements,pt=Pe.projectionMatrix.elements,nn=Ge[14]/(Ge[10]-1),mt=Ge[14]/(Ge[10]+1),Nt=(Ge[9]+1)/Ge[5],qt=(Ge[9]-1)/Ge[5],bt=(Ge[8]-1)/Ge[0],Yt=(pt[8]+1)/pt[0],cn=nn*bt,vn=nn*Yt,Bt=Ke/(-bt+Yt),en=Bt*-bt;if(he.matrixWorld.decompose(ue.position,ue.quaternion,ue.scale),ue.translateX(en),ue.translateZ(Bt),ue.matrixWorld.compose(ue.position,ue.quaternion,ue.scale),ue.matrixWorldInverse.copy(ue.matrixWorld).invert(),Ge[10]===-1)ue.projectionMatrix.copy(he.projectionMatrix),ue.projectionMatrixInverse.copy(he.projectionMatrixInverse);else{const $=nn+Bt,sn=mt+Bt,lt=cn-en,z=vn+(Ke-en),R=Nt*mt/sn*$,K=qt*mt/sn*$;ue.projectionMatrix.makePerspective(lt,z,R,K,$,sn),ue.projectionMatrixInverse.copy(ue.projectionMatrix).invert()}}function oe(ue,he){he===null?ue.matrixWorld.copy(ue.matrix):ue.matrixWorld.multiplyMatrices(he.matrixWorld,ue.matrix),ue.matrixWorldInverse.copy(ue.matrixWorld).invert()}this.updateCamera=function(ue){if(a===null)return;let he=ue.near,Pe=ue.far;S.texture!==null&&(S.depthNear>0&&(he=S.depthNear),S.depthFar>0&&(Pe=S.depthFar)),X.near=k.near=O.near=he,X.far=k.far=O.far=Pe,(V!==X.near||q!==X.far)&&(a.updateRenderState({depthNear:X.near,depthFar:X.far}),V=X.near,q=X.far),X.layers.mask=ue.layers.mask|6,O.layers.mask=X.layers.mask&-5,k.layers.mask=X.layers.mask&-3;const Ke=ue.parent,Ge=X.cameras;oe(X,Ke);for(let pt=0;pt<Ge.length;pt++)oe(Ge[pt],Ke);Ge.length===2?H(X,O,k):X.projectionMatrix.copy(O.projectionMatrix),U===null&&ue.isPerspectiveCamera&&(U={camera:ue,fov:ue.fov,zoom:ue.zoom}),Se(ue,X,Ke)};function Se(ue,he,Pe){Pe===null?ue.matrix.copy(he.matrixWorld):(ue.matrix.copy(Pe.matrixWorld),ue.matrix.invert(),ue.matrix.multiply(he.matrixWorld)),ue.matrix.decompose(ue.position,ue.quaternion,ue.scale),ue.updateMatrixWorld(!0),ue.projectionMatrix.copy(he.projectionMatrix),ue.projectionMatrixInverse.copy(he.projectionMatrixInverse),ue.isPerspectiveCamera&&(ue.fov=kp*2*Math.atan(1/ue.projectionMatrix.elements[5]),ue.zoom=1)}this.getCamera=function(){return X},this.getFoveation=function(){if(!(p===null&&x===null))return d},this.setFoveation=function(ue){d=ue,p!==null&&(p.fixedFoveation=ue),x!==null&&x.fixedFoveation!==void 0&&(x.fixedFoveation=ue)},this.hasDepthSensing=function(){return S.texture!==null},this.getDepthSensingMesh=function(){return S.getMesh(X)},this.getCameraTexture=function(ue){return y[ue]};let ke=null;function Be(ue,he){if(m=he.getViewerPose(h||c),E=he,m!==null){const Pe=m.views;x!==null&&(e.setRenderTargetFramebuffer(w,x.framebuffer),e.setRenderTarget(w));let Ke=!1;Pe.length!==X.cameras.length&&(X.cameras.length=0,Ke=!0);for(let mt=0;mt<Pe.length;mt++){const Nt=Pe[mt];let qt=null;if(x!==null)qt=x.getViewport(Nt);else{const Yt=g.getViewSubImage(p,Nt);qt=Yt.viewport,mt===0&&(e.setRenderTargetTextures(w,Yt.colorTexture,Yt.depthStencilTexture),e.setRenderTarget(w))}let bt=I[mt];bt===void 0&&(bt=new Wi,bt.layers.enable(mt),bt.viewport=new gn,I[mt]=bt),bt.matrix.fromArray(Nt.transform.matrix),bt.matrix.decompose(bt.position,bt.quaternion,bt.scale),bt.projectionMatrix.fromArray(Nt.projectionMatrix),bt.projectionMatrixInverse.copy(bt.projectionMatrix).invert(),bt.viewport.set(qt.x,qt.y,qt.width,qt.height),mt===0&&(X.matrix.copy(bt.matrix),X.matrix.decompose(X.position,X.quaternion,X.scale)),Ke===!0&&X.cameras.push(bt)}const Ge=a.enabledFeatures;if(Ge&&Ge.includes("depth-sensing")&&a.depthUsage=="gpu-optimized"&&T){g=r.getBinding();const mt=g.getDepthInformation(Pe[0]);mt&&mt.isValid&&mt.texture&&S.init(mt,a.renderState)}if(Ge&&Ge.includes("camera-access")&&T){e.state.unbindTexture(),g=r.getBinding();for(let mt=0;mt<Pe.length;mt++){const Nt=Pe[mt].camera;if(Nt){let qt=y[Nt];qt||(qt=new Zx,y[Nt]=qt);const bt=g.getCameraImage(Nt);qt.sourceTexture=bt}}}}for(let Pe=0;Pe<C.length;Pe++){const Ke=P[Pe],Ge=C[Pe];Ke!==null&&Ge!==void 0&&Ge.update(Ke,he,h||c)}ke&&ke(ue,he),he.detectedPlanes&&r.dispatchEvent({type:"planesdetected",data:he}),E=null}const He=new ty;He.setAnimationLoop(Be),this.setAnimationLoop=function(ue){ke=ue},this.dispose=function(){}}}const sR=new $t,ly=new wt;ly.set(-1,0,0,0,1,0,0,0,1);function aR(n,e){function t(S,y){S.matrixAutoUpdate===!0&&S.updateMatrix(),y.value.copy(S.matrix)}function r(S,y){y.color.getRGB(S.fogColor.value,Jx(n)),y.isFog?(S.fogNear.value=y.near,S.fogFar.value=y.far):y.isFogExp2&&(S.fogDensity.value=y.density)}function a(S,y,b,D,w){y.isNodeMaterial?y.uniformsNeedUpdate=!1:y.isMeshBasicMaterial?o(S,y):y.isMeshLambertMaterial?(o(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshToonMaterial?(o(S,y),g(S,y)):y.isMeshPhongMaterial?(o(S,y),m(S,y),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)):y.isMeshStandardMaterial?(o(S,y),p(S,y),y.isMeshPhysicalMaterial&&x(S,y,w)):y.isMeshMatcapMaterial?(o(S,y),E(S,y)):y.isMeshDepthMaterial?o(S,y):y.isMeshDistanceMaterial?(o(S,y),T(S,y)):y.isMeshNormalMaterial?o(S,y):y.isLineBasicMaterial?(c(S,y),y.isLineDashedMaterial&&u(S,y)):y.isPointsMaterial?d(S,y,b,D):y.isSpriteMaterial?h(S,y):y.isShadowMaterial?(S.color.value.copy(y.color),S.opacity.value=y.opacity):y.isShaderMaterial&&(y.uniformsNeedUpdate=!1)}function o(S,y){S.opacity.value=y.opacity,y.color&&S.diffuse.value.copy(y.color),y.emissive&&S.emissive.value.copy(y.emissive).multiplyScalar(y.emissiveIntensity),y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.bumpMap&&(S.bumpMap.value=y.bumpMap,t(y.bumpMap,S.bumpMapTransform),S.bumpScale.value=y.bumpScale,y.side===hi&&(S.bumpScale.value*=-1)),y.normalMap&&(S.normalMap.value=y.normalMap,t(y.normalMap,S.normalMapTransform),S.normalScale.value.copy(y.normalScale),y.side===hi&&S.normalScale.value.negate()),y.displacementMap&&(S.displacementMap.value=y.displacementMap,t(y.displacementMap,S.displacementMapTransform),S.displacementScale.value=y.displacementScale,S.displacementBias.value=y.displacementBias),y.emissiveMap&&(S.emissiveMap.value=y.emissiveMap,t(y.emissiveMap,S.emissiveMapTransform)),y.specularMap&&(S.specularMap.value=y.specularMap,t(y.specularMap,S.specularMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest);const b=e.get(y),D=b.envMap,w=b.envMapRotation;D&&(S.envMap.value=D,S.envMapRotation.value.setFromMatrix4(sR.makeRotationFromEuler(w)).transpose(),D.isCubeTexture&&D.isRenderTargetTexture===!1&&S.envMapRotation.value.premultiply(ly),S.reflectivity.value=y.reflectivity,S.ior.value=y.ior,S.refractionRatio.value=y.refractionRatio),y.lightMap&&(S.lightMap.value=y.lightMap,S.lightMapIntensity.value=y.lightMapIntensity,t(y.lightMap,S.lightMapTransform)),y.aoMap&&(S.aoMap.value=y.aoMap,S.aoMapIntensity.value=y.aoMapIntensity,t(y.aoMap,S.aoMapTransform))}function c(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform))}function u(S,y){S.dashSize.value=y.dashSize,S.totalSize.value=y.dashSize+y.gapSize,S.scale.value=y.scale}function d(S,y,b,D){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.size.value=y.size*b,S.scale.value=D*.5,y.map&&(S.map.value=y.map,t(y.map,S.uvTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function h(S,y){S.diffuse.value.copy(y.color),S.opacity.value=y.opacity,S.rotation.value=y.rotation,y.map&&(S.map.value=y.map,t(y.map,S.mapTransform)),y.alphaMap&&(S.alphaMap.value=y.alphaMap,t(y.alphaMap,S.alphaMapTransform)),y.alphaTest>0&&(S.alphaTest.value=y.alphaTest)}function m(S,y){S.specular.value.copy(y.specular),S.shininess.value=Math.max(y.shininess,1e-4)}function g(S,y){y.gradientMap&&(S.gradientMap.value=y.gradientMap)}function p(S,y){S.metalness.value=y.metalness,y.metalnessMap&&(S.metalnessMap.value=y.metalnessMap,t(y.metalnessMap,S.metalnessMapTransform)),S.roughness.value=y.roughness,y.roughnessMap&&(S.roughnessMap.value=y.roughnessMap,t(y.roughnessMap,S.roughnessMapTransform)),y.envMap&&(S.envMapIntensity.value=y.envMapIntensity)}function x(S,y,b){S.ior.value=y.ior,y.sheen>0&&(S.sheenColor.value.copy(y.sheenColor).multiplyScalar(y.sheen),S.sheenRoughness.value=y.sheenRoughness,y.sheenColorMap&&(S.sheenColorMap.value=y.sheenColorMap,t(y.sheenColorMap,S.sheenColorMapTransform)),y.sheenRoughnessMap&&(S.sheenRoughnessMap.value=y.sheenRoughnessMap,t(y.sheenRoughnessMap,S.sheenRoughnessMapTransform))),y.clearcoat>0&&(S.clearcoat.value=y.clearcoat,S.clearcoatRoughness.value=y.clearcoatRoughness,y.clearcoatMap&&(S.clearcoatMap.value=y.clearcoatMap,t(y.clearcoatMap,S.clearcoatMapTransform)),y.clearcoatRoughnessMap&&(S.clearcoatRoughnessMap.value=y.clearcoatRoughnessMap,t(y.clearcoatRoughnessMap,S.clearcoatRoughnessMapTransform)),y.clearcoatNormalMap&&(S.clearcoatNormalMap.value=y.clearcoatNormalMap,t(y.clearcoatNormalMap,S.clearcoatNormalMapTransform),S.clearcoatNormalScale.value.copy(y.clearcoatNormalScale),y.side===hi&&S.clearcoatNormalScale.value.negate())),y.dispersion>0&&(S.dispersion.value=y.dispersion),y.retroreflectivity>0&&(S.retroreflectivity.value=y.retroreflectivity),y.iridescence>0&&(S.iridescence.value=y.iridescence,S.iridescenceIOR.value=y.iridescenceIOR,S.iridescenceThicknessMinimum.value=y.iridescenceThicknessRange[0],S.iridescenceThicknessMaximum.value=y.iridescenceThicknessRange[1],y.iridescenceMap&&(S.iridescenceMap.value=y.iridescenceMap,t(y.iridescenceMap,S.iridescenceMapTransform)),y.iridescenceThicknessMap&&(S.iridescenceThicknessMap.value=y.iridescenceThicknessMap,t(y.iridescenceThicknessMap,S.iridescenceThicknessMapTransform))),y.transmission>0&&(S.transmission.value=y.transmission,S.transmissionSamplerMap.value=b.texture,S.transmissionSamplerSize.value.set(b.width,b.height),y.transmissionMap&&(S.transmissionMap.value=y.transmissionMap,t(y.transmissionMap,S.transmissionMapTransform)),S.thickness.value=y.thickness,y.thicknessMap&&(S.thicknessMap.value=y.thicknessMap,t(y.thicknessMap,S.thicknessMapTransform)),S.attenuationDistance.value=y.attenuationDistance,S.attenuationColor.value.copy(y.attenuationColor)),y.anisotropy>0&&(S.anisotropyVector.value.set(y.anisotropy*Math.cos(y.anisotropyRotation),y.anisotropy*Math.sin(y.anisotropyRotation)),y.anisotropyMap&&(S.anisotropyMap.value=y.anisotropyMap,t(y.anisotropyMap,S.anisotropyMapTransform))),S.specularIntensity.value=y.specularIntensity,S.specularColor.value.copy(y.specularColor),y.specularColorMap&&(S.specularColorMap.value=y.specularColorMap,t(y.specularColorMap,S.specularColorMapTransform)),y.specularIntensityMap&&(S.specularIntensityMap.value=y.specularIntensityMap,t(y.specularIntensityMap,S.specularIntensityMapTransform))}function E(S,y){y.matcap&&(S.matcap.value=y.matcap)}function T(S,y){const b=e.get(y).light;S.referencePosition.value.setFromMatrixPosition(b.matrixWorld),S.nearDistance.value=b.shadow.camera.near,S.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:r,refreshMaterialUniforms:a}}function oR(n,e,t,r){let a={},o={},c=[];const u=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function d(w,C){const P=C.program;r.uniformBlockBinding(w,P)}function h(w,C){let P=a[w.id];P===void 0&&(S(w),P=m(w),a[w.id]=P,w.addEventListener("dispose",b));const F=C.program;r.updateUBOMapping(w,F);const A=e.render.frame;o[w.id]!==A&&(p(w),o[w.id]=A)}function m(w){const C=g();w.__bindingPointIndex=C;const P=n.createBuffer(),F=w.__size,A=w.usage;return n.bindBuffer(n.UNIFORM_BUFFER,P),n.bufferData(n.UNIFORM_BUFFER,F,A),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,C,P),P}function g(){for(let w=0;w<u;w++)if(c.indexOf(w)===-1)return c.push(w),w;return zt("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function p(w){const C=a[w.id],P=w.uniforms,F=w.__cache;n.bindBuffer(n.UNIFORM_BUFFER,C);for(let A=0,U=P.length;A<U;A++){const O=P[A];if(Array.isArray(O))for(let k=0,I=O.length;k<I;k++)x(O[k],A,k,F);else x(O,A,0,F)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function x(w,C,P,F){if(T(w,C,P,F)===!0){const A=w.__offset,U=w.value;if(Array.isArray(U)){let O=0;for(let k=0;k<U.length;k++){const I=U[k],X=y(I);E(I,w.__data,O),typeof I!="number"&&typeof I!="boolean"&&!I.isMatrix3&&!ArrayBuffer.isView(I)&&(O+=X.storage/Float32Array.BYTES_PER_ELEMENT)}}else E(U,w.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,A,w.__data)}}function E(w,C,P){typeof w=="number"||typeof w=="boolean"?C[0]=w:w.isMatrix3?(C[0]=w.elements[0],C[1]=w.elements[1],C[2]=w.elements[2],C[3]=0,C[4]=w.elements[3],C[5]=w.elements[4],C[6]=w.elements[5],C[7]=0,C[8]=w.elements[6],C[9]=w.elements[7],C[10]=w.elements[8],C[11]=0):ArrayBuffer.isView(w)?C.set(new w.constructor(w.buffer,w.byteOffset,C.length)):w.toArray(C,P)}function T(w,C,P,F){const A=w.value,U=C+"_"+P;if(F[U]===void 0)return typeof A=="number"||typeof A=="boolean"?F[U]=A:ArrayBuffer.isView(A)?F[U]=A.slice():F[U]=A.clone(),!0;{const O=F[U];if(typeof A=="number"||typeof A=="boolean"){if(O!==A)return F[U]=A,!0}else{if(ArrayBuffer.isView(A))return!0;if(O.equals(A)===!1)return O.copy(A),!0}}return!1}function S(w){const C=w.uniforms;let P=0;const F=16;for(let U=0,O=C.length;U<O;U++){const k=Array.isArray(C[U])?C[U]:[C[U]];for(let I=0,X=k.length;I<X;I++){const V=k[I],q=Array.isArray(V.value)?V.value:[V.value];for(let ee=0,ae=q.length;ee<ae;ee++){const J=q[ee],te=y(J),ne=P%F,H=ne%te.boundary,oe=ne+H;P+=H,oe!==0&&F-oe<te.storage&&(P+=F-oe),V.__data=new Float32Array(te.storage/Float32Array.BYTES_PER_ELEMENT),V.__offset=P,P+=te.storage}}}const A=P%F;return A>0&&(P+=F-A),w.__size=P,w.__cache={},this}function y(w){const C={boundary:0,storage:0};return typeof w=="number"||typeof w=="boolean"?(C.boundary=4,C.storage=4):w.isVector2?(C.boundary=8,C.storage=8):w.isVector3||w.isColor?(C.boundary=16,C.storage=12):w.isVector4?(C.boundary=16,C.storage=16):w.isMatrix3?(C.boundary=48,C.storage=48):w.isMatrix4?(C.boundary=64,C.storage=64):w.isTexture?St("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(w)?(C.boundary=16,C.storage=w.byteLength):St("WebGLRenderer: Unsupported uniform value type.",w),C}function b(w){const C=w.target;C.removeEventListener("dispose",b);const P=c.indexOf(C.__bindingPointIndex);c.splice(P,1),n.deleteBuffer(a[C.id]),delete a[C.id],delete o[C.id]}function D(){for(const w in a)n.deleteBuffer(a[w]);c=[],a={},o={}}return{bind:d,update:h,dispose:D}}const lR=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let yr=null;function cR(){return yr===null&&(yr=new Gw(lR,16,16,va,Rr),yr.name="DFG_LUT",yr.minFilter=ii,yr.magFilter=ii,yr.wrapS=Zr,yr.wrapT=Zr,yr.generateMipmaps=!1,yr.needsUpdate=!0),yr}class uR{constructor(e={}){const{canvas:t=mw(),context:r=null,depth:a=!0,stencil:o=!1,alpha:c=!1,antialias:u=!1,premultipliedAlpha:d=!0,preserveDrawingBuffer:h=!1,powerPreference:m="default",failIfMajorPerformanceCaveat:g=!1,reversedDepthBuffer:p=!1,outputBufferType:x=Di}=e;this.isWebGLRenderer=!0;let E;if(r!==null){if(typeof WebGLRenderingContext<"u"&&r instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");E=r.getContextAttributes().alpha}else E=c;const T=x,S=new Set([hm,dm,fm]),y=new Set([Di,Cr,Hl,Vl,cm,um]),b=new Uint32Array(4),D=new Int32Array(4),w=new G;let C=null,P=null;const F=[],A=[];let U=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=br,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const O=this;let k=!1,I=null,X=null,V=null,q=null;this._outputColorSpace=Pi;let ee=0,ae=0,J=null,te=-1,ne=null;const H=new gn,oe=new gn;let Se=null;const ke=new At(0);let Be=0,He=t.width,ue=t.height,he=1,Pe=null,Ke=null;const Ge=new gn(0,0,He,ue),pt=new gn(0,0,He,ue);let nn=!1;const mt=new ym;let Nt=!1,qt=!1;const bt=new $t,Yt=new G,cn=new gn,vn={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let Bt=!1;function en(){return J===null?he:1}let $=r;function sn(L,B){return t.getContext(L,B)}let lt,z,R,K,ce,me,Me,Oe,ge,_e,ze,et,Ue,Fe,Je,ct,dt,Z,Le,ve,Ie,Ve,ye;try{const L={alpha:!0,depth:a,stencil:o,antialias:u,premultipliedAlpha:d,preserveDrawingBuffer:h,powerPreference:m,failIfMajorPerformanceCaveat:g};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Xl}`),t.addEventListener("webglcontextlost",Ft,!1),t.addEventListener("webglcontextrestored",Ut,!1),t.addEventListener("webglcontextcreationerror",yn,!1),$===null){const B="webgl2";if($=sn(B,L),$===null)throw sn(B)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}tt()}catch(L){throw t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),zt("WebGLRenderer: "+L.message),L}function tt(){lt=new cb($),lt.init(),Ie=new eR($,lt),z=new Q1($,lt,e,Ie),R=new JC($,lt),z.reversedDepthBuffer&&p&&R.buffers.depth.setReversed(!0),X=$.createFramebuffer(),V=$.createFramebuffer(),q=$.createFramebuffer(),K=new db($),ce=new kC,me=new QC($,lt,R,ce,z,Ie,K),Me=new lb(O),Oe=new pT($),Ve=new Z1($,Oe),ge=new ub($,Oe,K,Ve),_e=new pb($,ge,Oe,Ve,K),Z=new hb($,z,me),Je=new eb(ce),ze=new IC(O,Me,lt,z,Ve,Je),et=new aR(O,ce),Ue=new HC,Fe=new $C(lt),dt=new K1(O,Me,R,_e,E,d),ct=new ZC(O,_e,z),ye=new oR($,K,z,R),Le=new J1($,lt,K),ve=new fb($,lt,K),K.programs=ze.programs,O.capabilities=z,O.extensions=lt,O.properties=ce,O.renderLists=Ue,O.shadowMap=ct,O.state=R,O.info=K}T!==Di&&(U=new gb(T,t.width,t.height,u,a,o));const Ze=new rR(O,$);this.xr=Ze,this.getContext=function(){return $},this.getContextAttributes=function(){return $.getContextAttributes()},this.forceContextLoss=function(){const L=lt.get("WEBGL_lose_context");L&&L.loseContext()},this.forceContextRestore=function(){const L=lt.get("WEBGL_lose_context");L&&L.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(L){L!==void 0&&(he=L,this.setSize(He,ue,!1))},this.getSize=function(L){return L.set(He,ue)},this.setSize=function(L,B,se=!0){if(Ze.isPresenting){St("WebGLRenderer: Can't change size while VR device is presenting.");return}He=L,ue=B,t.width=Math.floor(L*he),t.height=Math.floor(B*he),se===!0&&(t.style.width=L+"px",t.style.height=B+"px"),U!==null&&U.setSize(t.width,t.height),this.setViewport(0,0,L,B)},this.getDrawingBufferSize=function(L){return L.set(He*he,ue*he).floor()},this.setDrawingBufferSize=function(L,B,se){He=L,ue=B,he=se,t.width=Math.floor(L*se),t.height=Math.floor(B*se),this.setViewport(0,0,L,B)},this.setEffects=function(L){if(T===Di){zt("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(L){for(let B=0;B<L.length;B++)if(L[B].isOutputPass===!0){St("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}U.setEffects(L||[])},this.getCurrentViewport=function(L){return L.copy(H)},this.getViewport=function(L){return L.copy(Ge)},this.setViewport=function(L,B,se,re){L.isVector4?Ge.set(L.x,L.y,L.z,L.w):Ge.set(L,B,se,re),R.viewport(H.copy(Ge).multiplyScalar(he).round())},this.getScissor=function(L){return L.copy(pt)},this.setScissor=function(L,B,se,re){L.isVector4?pt.set(L.x,L.y,L.z,L.w):pt.set(L,B,se,re),R.scissor(oe.copy(pt).multiplyScalar(he).round())},this.getScissorTest=function(){return nn},this.setScissorTest=function(L){R.setScissorTest(nn=L)},this.setOpaqueSort=function(L){Pe=L},this.setTransparentSort=function(L){Ke=L},this.getClearColor=function(L){return L.copy(dt.getClearColor())},this.setClearColor=function(){dt.setClearColor(...arguments)},this.getClearAlpha=function(){return dt.getClearAlpha()},this.setClearAlpha=function(){dt.setClearAlpha(...arguments)},this.clear=function(L=!0,B=!0,se=!0){let re=0;if(L){let ie=!1;if(J!==null){const Ae=J.texture.format;ie=S.has(Ae)}if(ie){const Ae=J.texture.type,be=y.has(Ae),Te=dt.getClearColor(),We=dt.getClearAlpha(),Xe=Te.r,ot=Te.g,gt=Te.b;be?(b[0]=Xe,b[1]=ot,b[2]=gt,b[3]=We,$.clearBufferuiv($.COLOR,0,b)):(D[0]=Xe,D[1]=ot,D[2]=gt,D[3]=We,$.clearBufferiv($.COLOR,0,D))}else re|=$.COLOR_BUFFER_BIT}B&&(re|=$.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),se&&(re|=$.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),re!==0&&$.clear(re)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(L){L.setRenderer(this),I=L},this.dispose=function(){t.removeEventListener("webglcontextlost",Ft,!1),t.removeEventListener("webglcontextrestored",Ut,!1),t.removeEventListener("webglcontextcreationerror",yn,!1),dt.dispose(),Ue.dispose(),Fe.dispose(),ce.dispose(),Me.dispose(),_e.dispose(),Ve.dispose(),ye.dispose(),ze.dispose(),Ze.dispose(),Ze.removeEventListener("sessionstart",_a),Ze.removeEventListener("sessionend",xa),In.stop()};function Ft(L){L.preventDefault(),tf("WebGLRenderer: Context Lost."),k=!0}function Ut(){tf("WebGLRenderer: Context Restored."),k=!1;const L=K.autoReset,B=ct.enabled,se=ct.autoUpdate,re=ct.needsUpdate,ie=ct.type;tt(),K.autoReset=L,ct.enabled=B,ct.autoUpdate=se,ct.needsUpdate=re,ct.type=ie}function yn(L){zt("WebGLRenderer: A WebGL context could not be created. Reason: ",L.statusMessage)}function li(L){const B=L.target;B.removeEventListener("dispose",li),qi(B)}function qi(L){Lr(L),ce.remove(L)}function Lr(L){const B=ce.get(L).programs;B!==void 0&&(B.forEach(function(se){ze.releaseProgram(se)}),L.isShaderMaterial&&ze.releaseShaderCache(L))}this.renderBufferDirect=function(L,B,se,re,ie,Ae){B===null&&(B=vn);const be=ie.isMesh&&ie.matrixWorld.determinantAffine()<0,Te=ht(L,B,se,re,ie);R.setMaterial(re,be);let We=se.index,Xe=1;if(re.wireframe===!0){if(We=ge.getWireframeAttribute(se),We===void 0)return;Xe=2}const ot=se.drawRange,gt=se.attributes.position;let qe=ot.start*Xe,Ct=(ot.start+ot.count)*Xe;Ae!==null&&(qe=Math.max(qe,Ae.start*Xe),Ct=Math.min(Ct,(Ae.start+Ae.count)*Xe)),We!==null?(qe=Math.max(qe,0),Ct=Math.min(Ct,We.count)):gt!=null&&(qe=Math.max(qe,0),Ct=Math.min(Ct,gt.count));const an=Ct-qe;if(an<0||an===1/0)return;Ve.setup(ie,re,Te,se,We);let Gt,Rt=Le;if(We!==null&&(Gt=Oe.get(We),Rt=ve,Rt.setIndex(Gt)),ie.isMesh)re.wireframe===!0?(R.setLineWidth(re.wireframeLinewidth*en()),Rt.setMode($.LINES)):Rt.setMode($.TRIANGLES);else if(ie.isLine){let tn=re.linewidth;tn===void 0&&(tn=1),R.setLineWidth(tn*en()),ie.isLineSegments?Rt.setMode($.LINES):ie.isLineLoop?Rt.setMode($.LINE_LOOP):Rt.setMode($.LINE_STRIP)}else ie.isPoints?Rt.setMode($.POINTS):ie.isSprite&&Rt.setMode($.TRIANGLES);if(ie.isBatchedMesh)if(lt.get("WEBGL_multi_draw"))Rt.renderMultiDraw(ie._multiDrawStarts,ie._multiDrawCounts,ie._multiDrawCount);else{const tn=ie._multiDrawStarts,Ye=ie._multiDrawCounts,Sn=ie._multiDrawCount,It=We?Oe.get(We).bytesPerElement:1,Kn=ce.get(re).currentProgram.getUniforms();for(let Pt=0;Pt<Sn;Pt++)Kn.setValue($,"_gl_DrawID",Pt),Rt.render(tn[Pt]/It,Ye[Pt])}else if(ie.isInstancedMesh)Rt.renderInstances(qe,an,ie.count);else if(se.isInstancedBufferGeometry){const tn=se._maxInstanceCount!==void 0?se._maxInstanceCount:1/0,Ye=Math.min(se.instanceCount,tn);Rt.renderInstances(qe,an,Ye)}else Rt.render(qe,an)};function Mi(L,B,se,re){I!==null&&L.isNodeMaterial&&I.setObject(re,L),Nt===!0&&Je.setState(L,se,!1),L.transparent===!0&&L.side===Li&&L.forceSinglePass===!1?(L.side=hi,L.needsUpdate=!0,xe(L,B,re),L.side=ts,L.needsUpdate=!0,xe(L,B,re),L.side=Li):xe(L,B,re)}this.compile=function(L,B,se=null){se===null&&(se=L),I!==null&&I.renderStart(L,B,se),P=Fe.get(se),P.init(B),A.push(P),se.traverseVisible(function(ie){ie.isLight&&ie.layers.test(B.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),L!==se&&L.traverseVisible(function(ie){ie.isLight&&ie.layers.test(B.layers)&&(P.pushLight(ie),ie.castShadow&&P.pushShadow(ie))}),P.setupLights(),I!==null&&I.updateLights(P.state.lightsArray),qt=this.localClippingEnabled,Nt=Je.init(this.clippingPlanes,qt),Nt===!0&&Je.setGlobalState(this.clippingPlanes,B),I!==null&&ct.render(P.state.shadowsArray,se,B);const re=new Set;return L.traverse(function(ie){if(!(ie.isMesh||ie.isPoints||ie.isLine||ie.isSprite))return;const Ae=ie.material;if(Ae)if(Array.isArray(Ae))for(let be=0;be<Ae.length;be++){const Te=Ae[be];Mi(Te,se,B,ie),re.add(Te)}else Mi(Ae,se,B,ie),re.add(Ae)}),P=A.pop(),I!==null&&I.renderEnd(),re},this.compileAsync=function(L,B,se=null){const re=this.compile(L,B,se);return new Promise(ie=>{function Ae(){if(re.forEach(function(be){const We=ce.get(be).currentProgram;(We===void 0||We.isReady())&&re.delete(be)}),re.size===0){ie(L);return}setTimeout(Ae,10)}lt.get("KHR_parallel_shader_compile")!==null?Ae():setTimeout(Ae,10)})};let Dr=null;function No(L){Dr&&Dr(L)}function _a(){In.stop()}function xa(){In.start()}const In=new ty;In.setAnimationLoop(No),typeof self<"u"&&In.setContext(self),this.setAnimationLoop=function(L){Dr=L,Ze.setAnimationLoop(L),L===null?In.stop():In.start()},Ze.addEventListener("sessionstart",_a),Ze.addEventListener("sessionend",xa),this.render=function(L,B){if(B!==void 0&&B.isCamera!==!0){zt("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(k===!0)return;I!==null&&I.renderStart(L,B);const se=Ze.enabled===!0&&Ze.isPresenting===!0,re=U!==null&&(J===null||se)&&U.begin(O,J);if(L.matrixWorldAutoUpdate===!0&&L.updateMatrixWorld(),B.parent===null&&B.matrixWorldAutoUpdate===!0&&B.updateMatrixWorld(),Ze.enabled===!0&&Ze.isPresenting===!0&&(U===null||U.isCompositing()===!1)&&(Ze.cameraAutoUpdate===!0&&Ze.updateCamera(B),B=Ze.getCamera()),L.isScene===!0&&L.onBeforeRender(O,L,B,J),P=Fe.get(L,A.length),P.init(B),P.state.textureUnits=me.getTextureUnits(),A.push(P),bt.multiplyMatrices(B.projectionMatrix,B.matrixWorldInverse),mt.setFromProjectionMatrix(bt,Ar,B.reversedDepth),qt=this.localClippingEnabled,Nt=Je.init(this.clippingPlanes,qt),C=Ue.get(L,F.length),C.init(),F.push(C),Ze.enabled===!0&&Ze.isPresenting===!0){const be=O.xr.getDepthSensingMesh();be!==null&&Nr(be,B,-1/0,O.sortObjects)}Nr(L,B,0,O.sortObjects),C.finish(),I!==null&&I.updateLights(P.state.lightsArray),O.sortObjects===!0&&C.sort(Pe,Ke),Bt=Ze.enabled===!1||Ze.isPresenting===!1||Ze.hasDepthSensing()===!1,Bt&&dt.addToRenderList(C,L),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Nt===!0&&Je.beginShadows();const ie=P.state.shadowsArray;if(ct.render(ie,L,B),Nt===!0&&Je.endShadows(),(re&&U.hasRenderPass())===!1){const be=C.opaque,Te=C.transmissive;if(P.setupLights(),B.isArrayCamera){const We=B.cameras;if(Te.length>0)for(let Xe=0,ot=We.length;Xe<ot;Xe++){const gt=We[Xe];Vs(be,Te,L,gt)}Bt&&dt.render(L);for(let Xe=0,ot=We.length;Xe<ot;Xe++){const gt=We[Xe];ss(C,L,gt,gt.viewport)}}else Te.length>0&&Vs(be,Te,L,B),Bt&&dt.render(L),ss(C,L,B)}J!==null&&ae===0&&(me.updateMultisampleRenderTarget(J),me.updateRenderTargetMipmap(J)),re&&U.end(O),L.isScene===!0&&L.onAfterRender(O,L,B),Ve.resetDefaultState(),te=-1,ne=null,A.pop(),A.length>0?(P=A[A.length-1],me.setTextureUnits(P.state.textureUnits),Nt===!0&&Je.setGlobalState(O.clippingPlanes,P.state.camera)):P=null,F.pop(),F.length>0?C=F[F.length-1]:C=null,I!==null&&I.renderEnd()};function Nr(L,B,se,re){if(L.visible===!1)return;if(L.layers.test(B.layers)){if(L.isGroup)se=L.renderOrder;else if(L.isLOD)L.autoUpdate===!0&&L.update(B);else if(L.isLightProbeGrid)P.pushLightProbeGrid(L);else if(L.isLight)P.pushLight(L),L.castShadow&&P.pushShadow(L);else if(L.isSprite){if(!L.frustumCulled||L.intersectsFrustum(mt)){re&&cn.setFromMatrixPosition(L.matrixWorld).applyMatrix4(bt);const be=_e.update(L),Te=L.material;Te.visible&&C.push(L,be,Te,se,cn.z,null,B)}}else if((L.isMesh||L.isLine||L.isPoints)&&(!L.frustumCulled||L.intersectsFrustum(mt))){const be=_e.update(L),Te=L.material;if(re&&(L.boundingSphere!==void 0?(L.boundingSphere===null&&L.computeBoundingSphere(),cn.copy(L.boundingSphere.center)):(be.boundingSphere===null&&be.computeBoundingSphere(),cn.copy(be.boundingSphere.center)),cn.applyMatrix4(L.matrixWorld).applyMatrix4(bt)),Array.isArray(Te)){const We=be.groups;for(let Xe=0,ot=We.length;Xe<ot;Xe++){const gt=We[Xe],qe=Te[gt.materialIndex];qe&&qe.visible&&C.push(L,be,qe,se,cn.z,gt,B)}}else Te.visible&&C.push(L,be,Te,se,cn.z,null,B)}}const Ae=L.children;for(let be=0,Te=Ae.length;be<Te;be++)Nr(Ae[be],B,se,re)}function ss(L,B,se,re){const{opaque:ie,transmissive:Ae,transparent:be}=L;P.setupLightsView(se),Nt===!0&&Je.setGlobalState(O.clippingPlanes,se),re&&R.viewport(H.copy(re)),ie.length>0&&fe(ie,B,se),Ae.length>0&&fe(Ae,B,se),be.length>0&&fe(be,B,se),R.buffers.depth.setTest(!0),R.buffers.depth.setMask(!0),R.buffers.color.setMask(!0),R.setPolygonOffset(!1)}function Vs(L,B,se,re){if((se.isScene===!0?se.overrideMaterial:null)!==null)return;if(P.state.transmissionRenderTarget[re.id]===void 0){const qe=lt.has("EXT_color_buffer_half_float")||lt.has("EXT_color_buffer_float");P.state.transmissionRenderTarget[re.id]=new hr(1,1,{generateMipmaps:!0,type:qe?Rr:Di,minFilter:da,samples:Math.max(4,z.samples),stencilBuffer:o,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:kt.workingColorSpace})}const Ae=P.state.transmissionRenderTarget[re.id],be=re.viewport||H;Ae.setSize(be.z*O.transmissionResolutionScale,be.w*O.transmissionResolutionScale);const Te=O.getRenderTarget(),We=O.getActiveCubeFace(),Xe=O.getActiveMipmapLevel();O.setRenderTarget(Ae),O.getClearColor(ke),Be=O.getClearAlpha(),Be<1&&O.setClearColor(16777215,.5),O.clear(),Bt&&dt.render(se);const ot=O.toneMapping;O.toneMapping=br;const gt=re.viewport;if(re.viewport!==void 0&&(re.viewport=void 0),P.setupLightsView(re),Nt===!0&&Je.setGlobalState(O.clippingPlanes,re),fe(L,se,re),me.updateMultisampleRenderTarget(Ae),me.updateRenderTargetMipmap(Ae),lt.has("WEBGL_multisampled_render_to_texture")===!1){let qe=!1;for(let Ct=0,an=B.length;Ct<an;Ct++){const Gt=B[Ct],{object:Rt,geometry:tn,material:Ye,group:Sn}=Gt;if(Ye.side===Li&&Rt.layers.test(re.layers)){const It=Ye.side;Ye.side=hi,Ye.needsUpdate=!0,De(Rt,se,re,tn,Ye,Sn),Ye.side=It,Ye.needsUpdate=!0,qe=!0}}qe===!0&&(me.updateMultisampleRenderTarget(Ae),me.updateRenderTargetMipmap(Ae))}O.setRenderTarget(Te,We,Xe),O.setClearColor(ke,Be),gt!==void 0&&(re.viewport=gt),O.toneMapping=ot}function fe(L,B,se){const re=B.isScene===!0?B.overrideMaterial:null;for(let ie=0,Ae=L.length;ie<Ae;ie++){const be=L[ie],{object:Te,geometry:We,group:Xe}=be;let ot=be.material;ot.allowOverride===!0&&re!==null&&(ot=re),Te.layers.test(se.layers)&&De(Te,B,se,We,ot,Xe)}}function De(L,B,se,re,ie,Ae){I!==null&&ie.isNodeMaterial&&I.setObject(L,ie),L.onBeforeRender(O,B,se,re,ie,Ae),L.modelViewMatrix.multiplyMatrices(se.matrixWorldInverse,L.matrixWorld),L.normalMatrix.getNormalMatrix(L.modelViewMatrix),ie.onBeforeRender(O,B,se,re,L,Ae),ie.transparent===!0&&ie.side===Li&&ie.forceSinglePass===!1?(ie.side=hi,ie.needsUpdate=!0,O.renderBufferDirect(se,B,re,ie,L,Ae),ie.side=ts,ie.needsUpdate=!0,O.renderBufferDirect(se,B,re,ie,L,Ae),ie.side=Li):O.renderBufferDirect(se,B,re,ie,L,Ae),L.onAfterRender(O,B,se,re,ie,Ae)}function xe(L,B,se){B.isScene!==!0&&(B=vn);const re=ce.get(L),ie=P.state.lights,Ae=P.state.shadowsArray,be=ie.state.version,Te=ze.getParameters(L,ie.state,Ae,B,se,P.state.lightProbeGridArray),We=ze.getProgramCacheKey(Te);let Xe=re.programs;re.environment=L.isMeshStandardMaterial||L.isMeshLambertMaterial||L.isMeshPhongMaterial?B.environment:null,re.fog=B.fog;const ot=L.isMeshStandardMaterial||L.isMeshLambertMaterial&&!L.envMap||L.isMeshPhongMaterial&&!L.envMap;re.envMap=Me.get(L.envMap||re.environment,ot),re.envMapRotation=re.environment!==null&&L.envMap===null?B.environmentRotation:L.envMapRotation,Xe===void 0&&(L.addEventListener("dispose",li),Xe=new Map,re.programs=Xe);let gt=Xe.get(We);if(gt!==void 0){if(re.currentProgram===gt&&re.lightsStateVersion===be)return ut(L,Te),gt}else Te.uniforms=ze.getUniforms(L),I!==null&&L.isNodeMaterial&&I.build(L,se,Te),L.onBeforeCompile(Te,O),gt=ze.acquireProgram(Te,We),Xe.set(We,gt),re.uniforms=Te.uniforms;const qe=re.uniforms;return(!L.isShaderMaterial&&!L.isRawShaderMaterial||L.clipping===!0)&&(qe.clippingPlanes=Je.uniform),ut(L,Te),re.needsLights=ft(L),re.lightsStateVersion=be,re.needsLights&&(qe.ambientLightColor.value=ie.state.ambient,qe.lightProbe.value=ie.state.probe,qe.sunLights.value=ie.state.sun,qe.sunLightShadows.value=ie.state.sunShadow,qe.directionalLights.value=ie.state.directional,qe.directionalLightShadows.value=ie.state.directionalShadow,qe.spotLights.value=ie.state.spot,qe.spotLightShadows.value=ie.state.spotShadow,qe.rectAreaLights.value=ie.state.rectArea,qe.ltc_1.value=ie.state.rectAreaLTC1,qe.ltc_2.value=ie.state.rectAreaLTC2,qe.pointLights.value=ie.state.point,qe.pointLightShadows.value=ie.state.pointShadow,qe.hemisphereLights.value=ie.state.hemi,qe.sunShadowMatrix.value=ie.state.sunShadowMatrix,qe.sunShadowCascade.value=ie.state.sunShadowCascade,qe.directionalShadowMatrix.value=ie.state.directionalShadowMatrix,qe.spotLightMatrix.value=ie.state.spotLightMatrix,qe.spotLightMap.value=ie.state.spotLightMap,qe.pointShadowMatrix.value=ie.state.pointShadowMatrix),re.lightProbeGrid=P.state.lightProbeGridArray.length>0,re.currentProgram=gt,re.uniformsList=null,gt}function it(L){if(L.uniformsList===null){const B=L.currentProgram.getUniforms();L.uniformsList=Xu.seqWithValue(B.seq,L.uniforms)}return L.uniformsList}function ut(L,B){const se=ce.get(L);se.outputColorSpace=B.outputColorSpace,se.batching=B.batching,se.batchingColor=B.batchingColor,se.instancing=B.instancing,se.instancingColor=B.instancingColor,se.instancingMorph=B.instancingMorph,se.skinning=B.skinning,se.morphTargets=B.morphTargets,se.morphNormals=B.morphNormals,se.morphColors=B.morphColors,se.morphTargetsCount=B.morphTargetsCount,se.numClippingPlanes=B.numClippingPlanes,se.numIntersection=B.numClipIntersection,se.vertexAlphas=B.vertexAlphas,se.vertexTangents=B.vertexTangents,se.toneMapping=B.toneMapping}function Mt(L,B){if(L.length===0)return null;if(L.length===1)return L[0].texture!==null?L[0]:null;w.setFromMatrixPosition(B.matrixWorld);for(let se=0,re=L.length;se<re;se++){const ie=L[se];if(ie.texture!==null&&ie.boundingBox.containsPoint(w))return ie}return null}function ht(L,B,se,re,ie){B.isScene!==!0&&(B=vn),me.resetTextureUnits();const Ae=B.fog,be=re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial?B.environment:null,Te=J===null?O.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:kt.workingColorSpace,We=re.isMeshStandardMaterial||re.isMeshLambertMaterial&&!re.envMap||re.isMeshPhongMaterial&&!re.envMap,Xe=Me.get(re.envMap||be,We),ot=re.vertexColors===!0&&!!se.attributes.color&&se.attributes.color.itemSize===4,gt=!!se.attributes.tangent&&(!!re.normalMap||re.anisotropy>0),qe=!!se.morphAttributes.position,Ct=!!se.morphAttributes.normal,an=!!se.morphAttributes.color;let Gt=br;re.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Gt=O.toneMapping);const Rt=se.morphAttributes.position||se.morphAttributes.normal||se.morphAttributes.color,tn=Rt!==void 0?Rt.length:0,Ye=ce.get(re),Sn=P.state.lights;if(Nt===!0&&(qt===!0||L!==ne)){const jt=L===ne&&re.id===te;Je.setState(re,L,jt)}let It=!1;re.version===Ye.__version?(Ye.needsLights&&Ye.lightsStateVersion!==Sn.state.version||Ye.outputColorSpace!==Te||ie.isBatchedMesh&&Ye.batching===!1||!ie.isBatchedMesh&&Ye.batching===!0||ie.isBatchedMesh&&Ye.batchingColor===!0&&ie._colorsTexture===null||ie.isBatchedMesh&&Ye.batchingColor===!1&&ie._colorsTexture!==null||ie.isInstancedMesh&&Ye.instancing===!1||!ie.isInstancedMesh&&Ye.instancing===!0||ie.isSkinnedMesh&&Ye.skinning===!1||!ie.isSkinnedMesh&&Ye.skinning===!0||ie.isInstancedMesh&&Ye.instancingColor===!0&&ie.instanceColor===null||ie.isInstancedMesh&&Ye.instancingColor===!1&&ie.instanceColor!==null||ie.isInstancedMesh&&Ye.instancingMorph===!0&&ie.morphTexture===null||ie.isInstancedMesh&&Ye.instancingMorph===!1&&ie.morphTexture!==null||Ye.envMap!==Xe||re.fog===!0&&Ye.fog!==Ae||Ye.numClippingPlanes!==void 0&&(Ye.numClippingPlanes!==Je.numPlanes||Ye.numIntersection!==Je.numIntersection)||Ye.vertexAlphas!==ot||Ye.vertexTangents!==gt||Ye.morphTargets!==qe||Ye.morphNormals!==Ct||Ye.morphColors!==an||Ye.toneMapping!==Gt||Ye.morphTargetsCount!==tn||!!Ye.lightProbeGrid!=P.state.lightProbeGridArray.length>0)&&(It=!0):(It=!0,Ye.__version=re.version);let Kn=Ye.currentProgram;It===!0&&(Kn=xe(re,B,ie),I&&re.isNodeMaterial&&I.onUpdateProgram(re,Kn,Ye));let Pt=!1,Yi=!1,Ur=!1;const Wt=Kn.getUniforms(),un=Ye.uniforms;if(R.useProgram(Kn.program)&&(Pt=!0,Yi=!0,Ur=!0),re.id!==te&&(te=re.id,Yi=!0),Ye.needsLights){const jt=Mt(P.state.lightProbeGridArray,ie);Ye.lightProbeGrid!==jt&&(Ye.lightProbeGrid=jt,Yi=!0)}if(Pt||ne!==L){R.buffers.depth.getReversed()&&L.reversedDepth!==!0&&(L._reversedDepth=!0,L.updateProjectionMatrix()),Wt.setValue($,"projectionMatrix",L.projectionMatrix),Wt.setValue($,"viewMatrix",L.matrixWorldInverse);const Fi=Wt.map.cameraPosition;Fi!==void 0&&Fi.setValue($,Yt.setFromMatrixPosition(L.matrixWorld)),z.logarithmicDepthBuffer&&Wt.setValue($,"logDepthBufFC",2/(Math.log(L.far+1)/Math.LN2)),(re.isMeshPhongMaterial||re.isMeshToonMaterial||re.isMeshLambertMaterial||re.isMeshBasicMaterial||re.isMeshStandardMaterial||re.isShaderMaterial)&&Wt.setValue($,"isOrthographic",L.isOrthographicCamera===!0),ne!==L&&(ne=L,Yi=!0,Ur=!0)}if(Ye.needsLights&&(Sn.state.sunShadowMap.length>0&&Wt.setValue($,"sunShadowMap",Sn.state.sunShadowMap,me),Sn.state.directionalShadowMap.length>0&&Wt.setValue($,"directionalShadowMap",Sn.state.directionalShadowMap,me),Sn.state.spotShadowMap.length>0&&Wt.setValue($,"spotShadowMap",Sn.state.spotShadowMap,me),Sn.state.pointShadowMap.length>0&&Wt.setValue($,"pointShadowMap",Sn.state.pointShadowMap,me)),ie.isSkinnedMesh){Wt.setOptional($,ie,"bindMatrix"),Wt.setOptional($,ie,"bindMatrixInverse");const jt=ie.skeleton;jt&&(jt.boneTexture===null&&jt.computeBoneTexture(),Wt.setValue($,"boneTexture",jt.boneTexture,me))}ie.isBatchedMesh&&(Wt.setOptional($,ie,"batchingTexture"),Wt.setValue($,"batchingTexture",ie._matricesTexture,me),Wt.setOptional($,ie,"batchingIdTexture"),Wt.setValue($,"batchingIdTexture",ie._indirectTexture,me),Wt.setOptional($,ie,"batchingColorTexture"),ie._colorsTexture!==null&&Wt.setValue($,"batchingColorTexture",ie._colorsTexture,me));const ji=se.morphAttributes;if((ji.position!==void 0||ji.normal!==void 0||ji.color!==void 0)&&Z.update(ie,se,Kn),(Yi||Ye.receiveShadow!==ie.receiveShadow)&&(Ye.receiveShadow=ie.receiveShadow,Wt.setValue($,"receiveShadow",ie.receiveShadow)),(re.isMeshStandardMaterial||re.isMeshLambertMaterial||re.isMeshPhongMaterial)&&re.envMap===null&&B.environment!==null&&(un.envMapIntensity.value=B.environmentIntensity),un.dfgLUT!==void 0&&(un.dfgLUT.value=cR()),Yi){if(Wt.setValue($,"toneMappingExposure",O.toneMappingExposure),Ye.needsLights&&xt(un,Ur),Ae&&re.fog===!0&&et.refreshFogUniforms(un,Ae),et.refreshMaterialUniforms(un,re,he,ue,P.state.transmissionRenderTarget[L.id]),Ye.needsLights&&Ye.lightProbeGrid){const jt=Ye.lightProbeGrid;un.probesSH.value=jt.texture,un.probesMin.value.copy(jt.boundingBox.min),un.probesMax.value.copy(jt.boundingBox.max),un.probesResolution.value.copy(jt.resolution)}Xu.upload($,it(Ye),un,me)}if(re.isShaderMaterial&&re.uniformsNeedUpdate===!0&&(Xu.upload($,it(Ye),un,me),re.uniformsNeedUpdate=!1),re.isSpriteMaterial&&Wt.setValue($,"center",ie.center),Wt.setValue($,"modelViewMatrix",ie.modelViewMatrix),Wt.setValue($,"normalMatrix",ie.normalMatrix),Wt.setValue($,"modelMatrix",ie.matrixWorld),re.uniformsGroups!==void 0){const jt=re.uniformsGroups;for(let Fi=0,Ki=jt.length;Fi<Ki;Fi++){const Zi=jt[Fi];ye.update(Zi,Kn),ye.bind(Zi,Kn)}}return Kn}function xt(L,B){L.ambientLightColor.needsUpdate=B,L.lightProbe.needsUpdate=B,L.sunLights.needsUpdate=B,L.sunLightShadows.needsUpdate=B,L.directionalLights.needsUpdate=B,L.directionalLightShadows.needsUpdate=B,L.pointLights.needsUpdate=B,L.pointLightShadows.needsUpdate=B,L.spotLights.needsUpdate=B,L.spotLightShadows.needsUpdate=B,L.rectAreaLights.needsUpdate=B,L.hemisphereLights.needsUpdate=B}function ft(L){return L.isMeshLambertMaterial||L.isMeshToonMaterial||L.isMeshPhongMaterial||L.isMeshStandardMaterial||L.isShadowMaterial||L.isShaderMaterial&&L.lights===!0}this.getActiveCubeFace=function(){return ee},this.getActiveMipmapLevel=function(){return ae},this.getRenderTarget=function(){return J},this.setRenderTargetTextures=function(L,B,se){const re=ce.get(L);re.__autoAllocateDepthBuffer=L.resolveDepthBuffer===!1,re.__autoAllocateDepthBuffer===!1&&(re.__useRenderToTexture=!1),ce.get(L.texture).__webglTexture=B,ce.get(L.depthTexture).__webglTexture=re.__autoAllocateDepthBuffer?void 0:se,re.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(L,B){const se=ce.get(L);se.__webglFramebuffer=B,se.__useDefaultFramebuffer=B===void 0},this.setRenderTarget=function(L,B=0,se=0){J=L,ee=B,ae=se;let re=null,ie=!1,Ae=!1;if(L){const Te=ce.get(L);if(Te.__useDefaultFramebuffer!==void 0){R.bindFramebuffer($.FRAMEBUFFER,Te.__webglFramebuffer),H.copy(L.viewport),oe.copy(L.scissor),Se=L.scissorTest,R.viewport(H),R.scissor(oe),R.setScissorTest(Se),te=-1;return}else if(Te.__webglFramebuffer===void 0)me.setupRenderTarget(L);else if(Te.__hasExternalTextures)me.rebindTextures(L,ce.get(L.texture).__webglTexture,ce.get(L.depthTexture).__webglTexture);else if(L.depthBuffer){const ot=L.depthTexture;if(Te.__boundDepthTexture!==ot){if(ot!==null&&ce.has(ot)&&(L.width!==ot.image.width||L.height!==ot.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");me.setupDepthRenderbuffer(L)}}const We=L.texture;(We.isData3DTexture||We.isDataArrayTexture||We.isCompressedArrayTexture)&&(Ae=!0);const Xe=ce.get(L).__webglFramebuffer;L.isWebGLCubeRenderTarget?(Array.isArray(Xe[B])?re=Xe[B][se]:re=Xe[B],ie=!0):L.samples>0&&me.useMultisampledRTT(L)===!1?re=ce.get(L).__webglMultisampledFramebuffer:Array.isArray(Xe)?re=Xe[se]:re=Xe,H.copy(L.viewport),oe.copy(L.scissor),Se=L.scissorTest}else H.copy(Ge).multiplyScalar(he).floor(),oe.copy(pt).multiplyScalar(he).floor(),Se=nn;if(se!==0&&(re=X),R.bindFramebuffer($.FRAMEBUFFER,re)&&R.drawBuffers(L,re),R.viewport(H),R.scissor(oe),R.setScissorTest(Se),ie){const Te=ce.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_CUBE_MAP_POSITIVE_X+B,Te.__webglTexture,se)}else if(Ae){const Te=B;for(let We=0;We<L.textures.length;We++){const Xe=ce.get(L.textures[We]);$.framebufferTextureLayer($.FRAMEBUFFER,$.COLOR_ATTACHMENT0+We,Xe.__webglTexture,se,Te)}}else if(L!==null&&se!==0){const Te=ce.get(L.texture);$.framebufferTexture2D($.FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,Te.__webglTexture,se)}te=-1};function Ot(L){const B=ce.get(L);return(B.__readFormat!==L.format||B.__readType!==L.type)&&(B.__readFormat=L.format,B.__readType=L.type,B.__formatReadable=z.textureFormatReadable(L.format),B.__typeReadable=z.textureTypeReadable(L.type)),B}this.readRenderTargetPixels=function(L,B,se,re,ie,Ae,be,Te=0){if(!(L&&L.isWebGLRenderTarget)){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let We=ce.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&be!==void 0&&(We=We[be]),We){R.bindFramebuffer($.FRAMEBUFFER,We);try{const Xe=L.textures[Te],ot=Xe.format,gt=Xe.type;L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Te);const qe=Ot(Xe);if(qe.__formatReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(qe.__typeReadable===!1){zt("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}B>=0&&B<=L.width-re&&se>=0&&se<=L.height-ie&&$.readPixels(B,se,re,ie,Ie.convert(ot),Ie.convert(gt),Ae)}finally{const Xe=J!==null?ce.get(J).__webglFramebuffer:null;R.bindFramebuffer($.FRAMEBUFFER,Xe)}}},this.readRenderTargetPixelsAsync=async function(L,B,se,re,ie,Ae,be,Te=0){if(!(L&&L.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let We=ce.get(L).__webglFramebuffer;if(L.isWebGLCubeRenderTarget&&be!==void 0&&(We=We[be]),We)if(B>=0&&B<=L.width-re&&se>=0&&se<=L.height-ie){R.bindFramebuffer($.FRAMEBUFFER,We);const Xe=L.textures[Te],ot=Xe.format,gt=Xe.type;L.textures.length>1&&$.readBuffer($.COLOR_ATTACHMENT0+Te);const qe=Ot(Xe);if(qe.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(qe.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const Ct=$.createBuffer();$.bindBuffer($.PIXEL_PACK_BUFFER,Ct),$.bufferData($.PIXEL_PACK_BUFFER,Ae.byteLength,$.STREAM_READ),$.readPixels(B,se,re,ie,Ie.convert(ot),Ie.convert(gt),0),$.bindBuffer($.PIXEL_PACK_BUFFER,null);const an=J!==null?ce.get(J).__webglFramebuffer:null;R.bindFramebuffer($.FRAMEBUFFER,an);const Gt=$.fenceSync($.SYNC_GPU_COMMANDS_COMPLETE,0);return $.flush(),await gw($,Gt,4),$.bindBuffer($.PIXEL_PACK_BUFFER,Ct),$.getBufferSubData($.PIXEL_PACK_BUFFER,0,Ae),$.bindBuffer($.PIXEL_PACK_BUFFER,null),$.deleteBuffer(Ct),$.deleteSync(Gt),Ae}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(L,B=null,se=0){const re=Math.pow(2,-se),ie=Math.floor(L.image.width*re),Ae=Math.floor(L.image.height*re),be=B!==null?B.x:0,Te=B!==null?B.y:0;me.setTexture2D(L,0),$.copyTexSubImage2D($.TEXTURE_2D,se,0,0,be,Te,ie,Ae),R.unbindTexture()},this.copyTextureToTexture=function(L,B,se=null,re=null,ie=0,Ae=0){let be,Te,We,Xe,ot,gt,qe,Ct,an;const Gt=L.isCompressedTexture?L.mipmaps[Ae]:L.image;if(se!==null)be=se.max.x-se.min.x,Te=se.max.y-se.min.y,We=se.isBox3?se.max.z-se.min.z:1,Xe=se.min.x,ot=se.min.y,gt=se.isBox3?se.min.z:0;else{const un=Math.pow(2,-ie);be=Math.floor(Gt.width*un),Te=Math.floor(Gt.height*un),L.isDataArrayTexture?We=Gt.depth:L.isData3DTexture?We=Math.floor(Gt.depth*un):We=1,Xe=0,ot=0,gt=0}re!==null?(qe=re.x,Ct=re.y,an=re.z):(qe=0,Ct=0,an=0);const Rt=Ie.convert(B.format),tn=Ie.convert(B.type);let Ye;B.isData3DTexture?(me.setTexture3D(B,0),Ye=$.TEXTURE_3D):B.isDataArrayTexture||B.isCompressedArrayTexture?(me.setTexture2DArray(B,0),Ye=$.TEXTURE_2D_ARRAY):(me.setTexture2D(B,0),Ye=$.TEXTURE_2D),R.activeTexture($.TEXTURE0),R.pixelStorei($.UNPACK_FLIP_Y_WEBGL,B.flipY),R.pixelStorei($.UNPACK_PREMULTIPLY_ALPHA_WEBGL,B.premultiplyAlpha),R.pixelStorei($.UNPACK_ALIGNMENT,B.unpackAlignment);const Sn=R.getParameter($.UNPACK_ROW_LENGTH),It=R.getParameter($.UNPACK_IMAGE_HEIGHT),Kn=R.getParameter($.UNPACK_SKIP_PIXELS),Pt=R.getParameter($.UNPACK_SKIP_ROWS),Yi=R.getParameter($.UNPACK_SKIP_IMAGES);R.pixelStorei($.UNPACK_ROW_LENGTH,Gt.width),R.pixelStorei($.UNPACK_IMAGE_HEIGHT,Gt.height),R.pixelStorei($.UNPACK_SKIP_PIXELS,Xe),R.pixelStorei($.UNPACK_SKIP_ROWS,ot),R.pixelStorei($.UNPACK_SKIP_IMAGES,gt);const Ur=L.isDataArrayTexture||L.isData3DTexture,Wt=B.isDataArrayTexture||B.isData3DTexture;if(L.isDepthTexture){const un=ce.get(L),ji=ce.get(B),jt=ce.get(un.__renderTarget),Fi=ce.get(ji.__renderTarget);R.bindFramebuffer($.READ_FRAMEBUFFER,jt.__webglFramebuffer),R.bindFramebuffer($.DRAW_FRAMEBUFFER,Fi.__webglFramebuffer);for(let Ki=0;Ki<We;Ki++)Ur&&($.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ce.get(L).__webglTexture,ie,gt+Ki),$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ce.get(B).__webglTexture,Ae,an+Ki)),$.blitFramebuffer(Xe,ot,be,Te,qe,Ct,be,Te,$.DEPTH_BUFFER_BIT,$.NEAREST);R.bindFramebuffer($.READ_FRAMEBUFFER,null),R.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else if(ie!==0||L.isRenderTargetTexture||ce.has(L)){const un=ce.get(L),ji=ce.get(B);R.bindFramebuffer($.READ_FRAMEBUFFER,V),R.bindFramebuffer($.DRAW_FRAMEBUFFER,q);for(let jt=0;jt<We;jt++)Ur?$.framebufferTextureLayer($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,un.__webglTexture,ie,gt+jt):$.framebufferTexture2D($.READ_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,un.__webglTexture,ie),Wt?$.framebufferTextureLayer($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,ji.__webglTexture,Ae,an+jt):$.framebufferTexture2D($.DRAW_FRAMEBUFFER,$.COLOR_ATTACHMENT0,$.TEXTURE_2D,ji.__webglTexture,Ae),ie!==0?$.blitFramebuffer(Xe,ot,be,Te,qe,Ct,be,Te,$.COLOR_BUFFER_BIT,$.NEAREST):Wt?$.copyTexSubImage3D(Ye,Ae,qe,Ct,an+jt,Xe,ot,be,Te):$.copyTexSubImage2D(Ye,Ae,qe,Ct,Xe,ot,be,Te);R.bindFramebuffer($.READ_FRAMEBUFFER,null),R.bindFramebuffer($.DRAW_FRAMEBUFFER,null)}else Wt?L.isDataTexture||L.isData3DTexture?$.texSubImage3D(Ye,Ae,qe,Ct,an,be,Te,We,Rt,tn,Gt.data):B.isCompressedArrayTexture?$.compressedTexSubImage3D(Ye,Ae,qe,Ct,an,be,Te,We,Rt,Gt.data):$.texSubImage3D(Ye,Ae,qe,Ct,an,be,Te,We,Rt,tn,Gt):L.isDataTexture?$.texSubImage2D($.TEXTURE_2D,Ae,qe,Ct,be,Te,Rt,tn,Gt.data):L.isCompressedTexture?$.compressedTexSubImage2D($.TEXTURE_2D,Ae,qe,Ct,Gt.width,Gt.height,Rt,Gt.data):$.texSubImage2D($.TEXTURE_2D,Ae,qe,Ct,be,Te,Rt,tn,Gt);R.pixelStorei($.UNPACK_ROW_LENGTH,Sn),R.pixelStorei($.UNPACK_IMAGE_HEIGHT,It),R.pixelStorei($.UNPACK_SKIP_PIXELS,Kn),R.pixelStorei($.UNPACK_SKIP_ROWS,Pt),R.pixelStorei($.UNPACK_SKIP_IMAGES,Yi),Ae===0&&B.generateMipmaps&&$.generateMipmap(Ye),R.unbindTexture()},this.initRenderTarget=function(L){ce.get(L).__webglFramebuffer===void 0&&me.setupRenderTarget(L)},this.initTexture=function(L){L.isCubeTexture?me.setTextureCube(L,0):L.isData3DTexture?me.setTexture3D(L,0):L.isDataArrayTexture||L.isCompressedArrayTexture?me.setTexture2DArray(L,0):me.setTexture2D(L,0),R.unbindTexture()},this.resetState=function(){ee=0,ae=0,J=null,R.reset(),Ve.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ar}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=kt._getDrawingBufferColorSpace(e),t.unpackColorSpace=kt._getUnpackColorSpace()}}class fR extends Em{constructor(e){super(e)}load(e,t,r,a){const o=this,c=new iT(this.manager);c.setPath(this.path),c.setResponseType("arraybuffer"),c.setRequestHeader(this.requestHeader),c.setWithCredentials(this.withCredentials),c.load(e,function(u){try{t(o.parse(u))}catch(d){a?a(d):console.error(d),o.manager.itemError(e)}},r,a)}parse(e){function t(h){const m=new DataView(h),g=32/8*3+32/8*3*3+16/8,p=m.getUint32(80,!0);if(80+32/8+p*g===m.byteLength)return!0;const E=[115,111,108,105,100];for(let T=0;T<5;T++)if(r(E,m,T))return!1;return!0}function r(h,m,g){for(let p=0,x=h.length;p<x;p++)if(h[p]!==m.getUint8(g+p))return!1;return!0}function a(h){const m=new DataView(h),g=m.getUint32(80,!0);let p,x,E,T=!1,S,y,b,D,w;for(let k=0;k<70;k++)m.getUint32(k,!1)==1129270351&&m.getUint8(k+4)==82&&m.getUint8(k+5)==61&&(T=!0,S=new Float32Array(g*3*3),y=m.getUint8(k+6)/255,b=m.getUint8(k+7)/255,D=m.getUint8(k+8)/255,w=m.getUint8(k+9)/255);const C=84,P=50,F=new oi,A=new Float32Array(g*3*3),U=new Float32Array(g*3*3),O=new At;for(let k=0;k<g;k++){const I=C+k*P,X=m.getFloat32(I,!0),V=m.getFloat32(I+4,!0),q=m.getFloat32(I+8,!0);if(T){const ee=m.getUint16(I+48,!0);(ee&32768)===0?(p=(ee&31)/31,x=(ee>>5&31)/31,E=(ee>>10&31)/31):(p=y,x=b,E=D)}for(let ee=1;ee<=3;ee++){const ae=I+ee*12,J=k*3*3+(ee-1)*3;A[J]=m.getFloat32(ae,!0),A[J+1]=m.getFloat32(ae+4,!0),A[J+2]=m.getFloat32(ae+8,!0),U[J]=X,U[J+1]=V,U[J+2]=q,T&&(O.setRGB(p,x,E,Pi),S[J]=O.r,S[J+1]=O.g,S[J+2]=O.b)}}return F.setAttribute("position",new ai(A,3)),F.setAttribute("normal",new ai(U,3)),T&&(F.setAttribute("color",new ai(S,3)),F.hasColors=!0,F.alpha=w),F}function o(h){const m=new oi,g=/solid([\s\S]*?)endsolid/g,p=/facet([\s\S]*?)endfacet/g,x=/solid\s(.+)/;let E=0;const T=/[\s]+([+-]?(?:\d*)(?:\.\d*)?(?:[eE][+-]?\d+)?)/.source,S=new RegExp("vertex"+T+T+T,"g"),y=new RegExp("normal"+T+T+T,"g"),b=[],D=[],w=[],C=new G;let P,F=0,A=0,U=0;for(;(P=g.exec(h))!==null;){A=U;const O=P[0],k=(P=x.exec(O))!==null?P[1]:"";for(w.push(k);(P=p.exec(O))!==null;){let V=0,q=0;const ee=P[0];for(;(P=y.exec(ee))!==null;)C.x=parseFloat(P[1]),C.y=parseFloat(P[2]),C.z=parseFloat(P[3]),q++;for(;(P=S.exec(ee))!==null;)b.push(parseFloat(P[1]),parseFloat(P[2]),parseFloat(P[3])),D.push(C.x,C.y,C.z),V++,U++;q!==1&&console.error("THREE.STLLoader: Something isn't right with the normal of face number "+E),V!==3&&console.error("THREE.STLLoader: Something isn't right with the vertices of face number "+E),E++}const I=A,X=U-A;m.userData.groupNames=w,m.addGroup(I,X,F),F++}return m.setAttribute("position",new Cn(b,3)),m.setAttribute("normal",new Cn(D,3)),m}function c(h){return typeof h!="string"?new TextDecoder().decode(h):h}function u(h){if(typeof h=="string"){const m=new Uint8Array(h.length);for(let g=0;g<h.length;g++)m[g]=h.charCodeAt(g)&255;return m.buffer||m}else return h}const d=u(e);return t(d)?a(d):o(c(e))}}function dR(n,e=Math.PI/3){const t=n.index?n.toNonIndexed():n,r=t.attributes.position,a=r.count;let o;if(r.isBufferAttribute===!0&&r.itemSize===3&&r.normalized===!1)o=r.array;else{o=new Float64Array(a*3);for(let w=0;w<a;w++)o[3*w+0]=r.getX(w),o[3*w+1]=r.getY(w),o[3*w+2]=r.getZ(w)}const c=Math.cos(e),u=(1+1e-10)*100,d=a/3,h=new Float64Array(d*3);for(let w=0;w<d;w++){const C=9*w,P=o[C+0],F=o[C+1],A=o[C+2],U=o[C+3],O=o[C+4],k=o[C+5],I=o[C+6],X=o[C+7],V=o[C+8],q=I-U,ee=X-O,ae=V-k,J=P-U,te=F-O,ne=A-k,H=ee*ne-ae*te,oe=ae*J-q*ne,Se=q*te-ee*J,ke=1/(Math.sqrt(H*H+oe*oe+Se*Se)||1);h[3*w+0]=H*ke,h[3*w+1]=oe*ke,h[3*w+2]=Se*ke}const m=new Int32Array(a),g=new Float64Array(a*3);let p=1;for(;p<a*2;)p<<=1;const x=p-1,E=new Int32Array(p);let T=0;for(let w=0;w<a;w++){const C=3*w,P=Math.trunc(o[C+0]*u),F=Math.trunc(o[C+1]*u),A=Math.trunc(o[C+2]*u);let U=(Math.imul(P,73856093)^Math.imul(F,19349663)^Math.imul(A,83492791))&x;for(;;){const O=E[U];if(O===0){const I=3*T;g[I+0]=P,g[I+1]=F,g[I+2]=A,E[U]=T+1,m[w]=T++;break}const k=3*(O-1);if(g[k+0]===P&&g[k+1]===F&&g[k+2]===A){m[w]=O-1;break}U=U+1&x}}const S=new Int32Array(T+1);for(let w=0;w<a;w++)S[m[w]+1]++;for(let w=0;w<T;w++)S[w+1]+=S[w];const y=new Int32Array(a),b=S.slice(0,T);for(let w=0;w<d;w++){const C=3*w;y[b[m[C+0]]++]=w,y[b[m[C+1]]++]=w,y[b[m[C+2]]++]=w}const D=new Float32Array(a*3);for(let w=0;w<d;w++){const C=3*w,P=h[C+0],F=h[C+1],A=h[C+2];for(let U=0;U<3;U++){const O=C+U,k=m[O];let I=0,X=0,V=0;for(let ee=S[k],ae=S[k+1];ee<ae;ee++){const J=3*y[ee],te=h[J+0],ne=h[J+1],H=h[J+2];P*te+F*ne+A*H>c&&(I+=te,X+=ne,V+=H)}const q=1/(Math.sqrt(I*I+X*X+V*V)||1);D[3*O+0]=I*q,D[3*O+1]=X*q,D[3*O+2]=V*q}}return t.setAttribute("normal",new ai(D,3,!1)),t}const b_={type:"change"},Tm={type:"start"},cy={type:"end"},yu=new pf,C_=new ur,hR=Math.cos(70*xw.DEG2RAD),Ln=new G,Si=2*Math.PI,Zt={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},Uh=1e-6;class pR extends dT{constructor(e,t=null){super(e,t),this.state=Zt.NONE,this.target=new G,this.cursor=new G,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minTargetRadius=0,this.maxTargetRadius=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!1,this.dampingFactor=.05,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.keyRotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.zoomToCursor=!1,this.autoRotate=!1,this.autoRotateSpeed=2,this.keys={LEFT:"ArrowLeft",UP:"ArrowUp",RIGHT:"ArrowRight",BOTTOM:"ArrowDown"},this.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.DOLLY,RIGHT:Jr.PAN},this.touches={ONE:So.ROTATE,TWO:So.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._cursorStyle="auto",this._domElementKeyEvents=null,this._lastPosition=new G,this._lastQuaternion=new Is,this._lastTargetPosition=new G,this._quat=new Is().setFromUnitVectors(e.up,new G(0,1,0)),this._quatInverse=this._quat.clone().invert(),this._spherical=new t_,this._sphericalDelta=new t_,this._scale=1,this._panOffset=new G,this._rotateStart=new st,this._rotateEnd=new st,this._rotateDelta=new st,this._panStart=new st,this._panEnd=new st,this._panDelta=new st,this._dollyStart=new st,this._dollyEnd=new st,this._dollyDelta=new st,this._dollyDirection=new G,this._mouse=new st,this._performCursorZoom=!1,this._pointers=[],this._pointerPositions={},this._controlActive=!1,this._onPointerMove=gR.bind(this),this._onPointerDown=mR.bind(this),this._onPointerUp=vR.bind(this),this._onContextMenu=wR.bind(this),this._onMouseWheel=yR.bind(this),this._onKeyDown=SR.bind(this),this._onTouchStart=MR.bind(this),this._onTouchMove=ER.bind(this),this._onMouseDown=_R.bind(this),this._onMouseMove=xR.bind(this),this._interceptControlDown=TR.bind(this),this._interceptControlUp=AR.bind(this),this.domElement!==null&&this.connect(this.domElement),this.update()}set cursorStyle(e){this._cursorStyle=e,e==="grab"?this.domElement.style.cursor="grab":this.domElement.style.cursor="auto"}get cursorStyle(){return this._cursorStyle}connect(e){super.connect(e),this.domElement.addEventListener("pointerdown",this._onPointerDown),this.domElement.addEventListener("pointercancel",this._onPointerUp),this.domElement.addEventListener("contextmenu",this._onContextMenu),this.domElement.addEventListener("wheel",this._onMouseWheel,{passive:!1}),this.domElement.getRootNode().addEventListener("keydown",this._interceptControlDown,{passive:!0,capture:!0}),this.domElement.style.touchAction="none"}disconnect(){this.state=Zt.NONE,this.domElement.removeEventListener("pointerdown",this._onPointerDown),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.domElement.removeEventListener("pointercancel",this._onPointerUp),this.domElement.removeEventListener("wheel",this._onMouseWheel),this.domElement.removeEventListener("contextmenu",this._onContextMenu),this.stopListenToKeyEvents();const e=this.domElement.getRootNode();e.removeEventListener("keydown",this._interceptControlDown,{capture:!0}),e.removeEventListener("keyup",this._interceptControlUp,{capture:!0}),this._controlActive=!1,this._pointers.length=0,this._pointerPositions={},this.domElement.style.touchAction="",this.domElement.style.cursor="auto"}dispose(){this.disconnect()}getPolarAngle(){return this._spherical.phi}getAzimuthalAngle(){return this._spherical.theta}getDistance(){return this.object.position.distanceTo(this.target)}listenToKeyEvents(e){e.addEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=e}stopListenToKeyEvents(){this._domElementKeyEvents!==null&&(this._domElementKeyEvents.removeEventListener("keydown",this._onKeyDown),this._domElementKeyEvents=null)}saveState(){this.target0.copy(this.target),this.position0.copy(this.object.position),this.zoom0=this.object.zoom}reset(){this.target.copy(this.target0),this.object.position.copy(this.position0),this.object.zoom=this.zoom0,this.object.updateProjectionMatrix(),this.dispatchEvent(b_),this.update(),this.state=Zt.NONE}pan(e,t){this._pan(e,t),this.update()}dollyIn(e){this._dollyIn(e),this.update()}dollyOut(e){this._dollyOut(e),this.update()}rotateLeft(e){this._rotateLeft(e),this.update()}rotateUp(e){this._rotateUp(e),this.update()}update(e=null){const t=this.object.position;Ln.copy(t).sub(this.target),Ln.applyQuaternion(this._quat),this._spherical.setFromVector3(Ln),this.autoRotate&&this.state===Zt.NONE&&this._rotateLeft(this._getAutoRotationAngle(e)),this.enableDamping?(this._spherical.theta+=this._sphericalDelta.theta*this.dampingFactor,this._spherical.phi+=this._sphericalDelta.phi*this.dampingFactor):(this._spherical.theta+=this._sphericalDelta.theta,this._spherical.phi+=this._sphericalDelta.phi);let r=this.minAzimuthAngle,a=this.maxAzimuthAngle;isFinite(r)&&isFinite(a)&&(r<-Math.PI?r+=Si:r>Math.PI&&(r-=Si),a<-Math.PI?a+=Si:a>Math.PI&&(a-=Si),r<=a?this._spherical.theta=Math.max(r,Math.min(a,this._spherical.theta)):this._spherical.theta=this._spherical.theta>(r+a)/2?Math.max(r,this._spherical.theta):Math.min(a,this._spherical.theta)),this._spherical.phi=Math.max(this.minPolarAngle,Math.min(this.maxPolarAngle,this._spherical.phi)),this._spherical.makeSafe(),this.enableDamping===!0?this.target.addScaledVector(this._panOffset,this.dampingFactor):this.target.add(this._panOffset),this.target.sub(this.cursor),this.target.clampLength(this.minTargetRadius,this.maxTargetRadius),this.target.add(this.cursor);let o=!1;if(this.zoomToCursor&&this._performCursorZoom||this.object.isOrthographicCamera)this._spherical.radius=this._clampDistance(this._spherical.radius);else{const c=this._spherical.radius;this._spherical.radius=this._clampDistance(this._spherical.radius*this._scale),o=c!=this._spherical.radius}if(Ln.setFromSpherical(this._spherical),Ln.applyQuaternion(this._quatInverse),t.copy(this.target).add(Ln),this.object.lookAt(this.target),this.enableDamping===!0?(this._sphericalDelta.theta*=1-this.dampingFactor,this._sphericalDelta.phi*=1-this.dampingFactor,this._panOffset.multiplyScalar(1-this.dampingFactor)):(this._sphericalDelta.set(0,0,0),this._panOffset.set(0,0,0)),this.zoomToCursor&&this._performCursorZoom){let c=null;if(this.object.isPerspectiveCamera){const u=Ln.length();c=this._clampDistance(u*this._scale);const d=u-c;this.object.position.addScaledVector(this._dollyDirection,d),this.object.updateMatrixWorld(),o=!!d}else if(this.object.isOrthographicCamera){const u=new G(this._mouse.x,this._mouse.y,0);u.unproject(this.object);const d=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),this.object.updateProjectionMatrix(),o=d!==this.object.zoom;const h=new G(this._mouse.x,this._mouse.y,0);h.unproject(this.object),this.object.position.sub(h).add(u),this.object.updateMatrixWorld(),c=Ln.length()}else console.warn("WARNING: OrbitControls.js encountered an unknown camera type - zoom to cursor disabled."),this.zoomToCursor=!1;c!==null&&(this.screenSpacePanning?this.target.set(0,0,-1).transformDirection(this.object.matrix).multiplyScalar(c).add(this.object.position):(yu.origin.copy(this.object.position),yu.direction.set(0,0,-1).transformDirection(this.object.matrix),Math.abs(this.object.up.dot(yu.direction))<hR?this.object.lookAt(this.target):(C_.setFromNormalAndCoplanarPoint(this.object.up,this.target),yu.intersectPlane(C_,this.target))))}else if(this.object.isOrthographicCamera){const c=this.object.zoom;this.object.zoom=Math.max(this.minZoom,Math.min(this.maxZoom,this.object.zoom/this._scale)),c!==this.object.zoom&&(this.object.updateProjectionMatrix(),o=!0)}return this._scale=1,this._performCursorZoom=!1,o||this._lastPosition.distanceToSquared(this.object.position)>Uh||8*(1-this._lastQuaternion.dot(this.object.quaternion))>Uh||this._lastTargetPosition.distanceToSquared(this.target)>Uh?(this.dispatchEvent(b_),this._lastPosition.copy(this.object.position),this._lastQuaternion.copy(this.object.quaternion),this._lastTargetPosition.copy(this.target),!0):!1}_getAutoRotationAngle(e){return e!==null?Si/60*this.autoRotateSpeed*e:Si/60/60*this.autoRotateSpeed}_getZoomScale(e){const t=Math.abs(e*.01);return Math.pow(.95,this.zoomSpeed*t)}_rotateLeft(e){this._sphericalDelta.theta-=e}_rotateUp(e){this._sphericalDelta.phi-=e}_panLeft(e,t){Ln.setFromMatrixColumn(t,0),Ln.multiplyScalar(-e),this._panOffset.add(Ln)}_panUp(e,t){this.screenSpacePanning===!0?Ln.setFromMatrixColumn(t,1):(Ln.setFromMatrixColumn(t,0),Ln.crossVectors(this.object.up,Ln)),Ln.multiplyScalar(e),this._panOffset.add(Ln)}_pan(e,t){const r=this.domElement;if(this.object.isPerspectiveCamera){const a=this.object.position;Ln.copy(a).sub(this.target);let o=Ln.length();o*=Math.tan(this.object.fov/2*Math.PI/180),this._panLeft(2*e*o/r.clientHeight,this.object.matrix),this._panUp(2*t*o/r.clientHeight,this.object.matrix)}else this.object.isOrthographicCamera?(this._panLeft(e*(this.object.right-this.object.left)/this.object.zoom/r.clientWidth,this.object.matrix),this._panUp(t*(this.object.top-this.object.bottom)/this.object.zoom/r.clientHeight,this.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),this.enablePan=!1)}_dollyOut(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale/=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_dollyIn(e){this.object.isPerspectiveCamera||this.object.isOrthographicCamera?this._scale*=e:(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),this.enableZoom=!1)}_updateZoomParameters(e,t){if(!this.zoomToCursor)return;this._performCursorZoom=!0;const r=this.domElement.getBoundingClientRect(),a=e-r.left,o=t-r.top,c=r.width,u=r.height;this._mouse.x=a/c*2-1,this._mouse.y=-(o/u)*2+1,this._dollyDirection.set(this._mouse.x,this._mouse.y,1).unproject(this.object).sub(this.object.position).normalize()}_clampDistance(e){return Math.max(this.minDistance,Math.min(this.maxDistance,e))}_handleMouseDownRotate(e){this._rotateStart.set(e.clientX,e.clientY)}_handleMouseDownDolly(e){this._updateZoomParameters(e.clientX,e.clientX),this._dollyStart.set(e.clientX,e.clientY)}_handleMouseDownPan(e){this._panStart.set(e.clientX,e.clientY)}_handleMouseMoveRotate(e){this._rotateEnd.set(e.clientX,e.clientY),this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/t.clientHeight),this._rotateUp(Si*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd),this.update()}_handleMouseMoveDolly(e){this._dollyEnd.set(e.clientX,e.clientY),this._dollyDelta.subVectors(this._dollyEnd,this._dollyStart),this._dollyDelta.y>0?this._dollyOut(this._getZoomScale(this._dollyDelta.y)):this._dollyDelta.y<0&&this._dollyIn(this._getZoomScale(this._dollyDelta.y)),this._dollyStart.copy(this._dollyEnd),this.update()}_handleMouseMovePan(e){this._panEnd.set(e.clientX,e.clientY),this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd),this.update()}_handleMouseWheel(e){this._updateZoomParameters(e.clientX,e.clientY),e.deltaY<0?this._dollyIn(this._getZoomScale(e.deltaY)):e.deltaY>0&&this._dollyOut(this._getZoomScale(e.deltaY)),this.update()}_handleKeyDown(e){let t=!1;switch(e.code){case this.keys.UP:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,this.keyPanSpeed),t=!0;break;case this.keys.BOTTOM:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateUp(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(0,-this.keyPanSpeed),t=!0;break;case this.keys.LEFT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(this.keyPanSpeed,0),t=!0;break;case this.keys.RIGHT:e.ctrlKey||e.metaKey||e.shiftKey?this.enableRotate&&this._rotateLeft(-Si*this.keyRotateSpeed/this.domElement.clientHeight):this.enablePan&&this._pan(-this.keyPanSpeed,0),t=!0;break}t&&(e.preventDefault(),this.update())}_handleTouchStartRotate(e){if(this._pointers.length===1)this._rotateStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._rotateStart.set(r,a)}}_handleTouchStartPan(e){if(this._pointers.length===1)this._panStart.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panStart.set(r,a)}}_handleTouchStartDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(r*r+a*a);this._dollyStart.set(0,o)}_handleTouchStartDollyPan(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enablePan&&this._handleTouchStartPan(e)}_handleTouchStartDollyRotate(e){this.enableZoom&&this._handleTouchStartDolly(e),this.enableRotate&&this._handleTouchStartRotate(e)}_handleTouchMoveRotate(e){if(this._pointers.length==1)this._rotateEnd.set(e.pageX,e.pageY);else{const r=this._getSecondPointerPosition(e),a=.5*(e.pageX+r.x),o=.5*(e.pageY+r.y);this._rotateEnd.set(a,o)}this._rotateDelta.subVectors(this._rotateEnd,this._rotateStart).multiplyScalar(this.rotateSpeed);const t=this.domElement;this._rotateLeft(Si*this._rotateDelta.x/t.clientHeight),this._rotateUp(Si*this._rotateDelta.y/t.clientHeight),this._rotateStart.copy(this._rotateEnd)}_handleTouchMovePan(e){if(this._pointers.length===1)this._panEnd.set(e.pageX,e.pageY);else{const t=this._getSecondPointerPosition(e),r=.5*(e.pageX+t.x),a=.5*(e.pageY+t.y);this._panEnd.set(r,a)}this._panDelta.subVectors(this._panEnd,this._panStart).multiplyScalar(this.panSpeed),this._pan(this._panDelta.x,this._panDelta.y),this._panStart.copy(this._panEnd)}_handleTouchMoveDolly(e){const t=this._getSecondPointerPosition(e),r=e.pageX-t.x,a=e.pageY-t.y,o=Math.sqrt(r*r+a*a);this._dollyEnd.set(0,o),this._dollyDelta.set(0,Math.pow(this._dollyEnd.y/this._dollyStart.y,this.zoomSpeed)),this._dollyOut(this._dollyDelta.y),this._dollyStart.copy(this._dollyEnd);const c=(e.pageX+t.x)*.5,u=(e.pageY+t.y)*.5;this._updateZoomParameters(c,u)}_handleTouchMoveDollyPan(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enablePan&&this._handleTouchMovePan(e)}_handleTouchMoveDollyRotate(e){this.enableZoom&&this._handleTouchMoveDolly(e),this.enableRotate&&this._handleTouchMoveRotate(e)}_addPointer(e){this._pointers.push(e.pointerId)}_removePointer(e){delete this._pointerPositions[e.pointerId];for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId){this._pointers.splice(t,1);return}}_isTrackingPointer(e){for(let t=0;t<this._pointers.length;t++)if(this._pointers[t]==e.pointerId)return!0;return!1}_trackPointer(e){let t=this._pointerPositions[e.pointerId];t===void 0&&(t=new st,this._pointerPositions[e.pointerId]=t),t.set(e.pageX,e.pageY)}_getSecondPointerPosition(e){const t=e.pointerId===this._pointers[0]?this._pointers[1]:this._pointers[0];return this._pointerPositions[t]}_customWheelEvent(e){const t=e.deltaMode,r={clientX:e.clientX,clientY:e.clientY,deltaY:e.deltaY};switch(t){case 1:r.deltaY*=16;break;case 2:r.deltaY*=100;break}return e.ctrlKey&&!this._controlActive&&(r.deltaY*=10),r}}function mR(n){this.enabled!==!1&&(this._pointers.length===0&&(this.domElement.setPointerCapture(n.pointerId),this.domElement.ownerDocument.addEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.addEventListener("pointerup",this._onPointerUp)),!this._isTrackingPointer(n)&&(this._addPointer(n),n.pointerType==="touch"?this._onTouchStart(n):this._onMouseDown(n),this._cursorStyle==="grab"&&(this.domElement.style.cursor="grabbing")))}function gR(n){this.enabled!==!1&&(n.pointerType==="touch"?this._onTouchMove(n):this._onMouseMove(n))}function vR(n){switch(this._removePointer(n),this._pointers.length){case 0:this.domElement.releasePointerCapture(n.pointerId),this.domElement.ownerDocument.removeEventListener("pointermove",this._onPointerMove),this.domElement.ownerDocument.removeEventListener("pointerup",this._onPointerUp),this.dispatchEvent(cy),this.state=Zt.NONE,this._cursorStyle==="grab"&&(this.domElement.style.cursor="grab");break;case 1:const e=this._pointers[0],t=this._pointerPositions[e];this._onTouchStart({pointerId:e,pageX:t.x,pageY:t.y});break}}function _R(n){let e;switch(n.button){case 0:e=this.mouseButtons.LEFT;break;case 1:e=this.mouseButtons.MIDDLE;break;case 2:e=this.mouseButtons.RIGHT;break;default:e=-1}switch(e){case Jr.DOLLY:if(this.enableZoom===!1)return;this._handleMouseDownDolly(n),this.state=Zt.DOLLY;break;case Jr.ROTATE:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Zt.PAN}else{if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Zt.ROTATE}break;case Jr.PAN:if(n.ctrlKey||n.metaKey||n.shiftKey){if(this.enableRotate===!1)return;this._handleMouseDownRotate(n),this.state=Zt.ROTATE}else{if(this.enablePan===!1)return;this._handleMouseDownPan(n),this.state=Zt.PAN}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Tm)}function xR(n){switch(this.state){case Zt.ROTATE:if(this.enableRotate===!1)return;this._handleMouseMoveRotate(n);break;case Zt.DOLLY:if(this.enableZoom===!1)return;this._handleMouseMoveDolly(n);break;case Zt.PAN:if(this.enablePan===!1)return;this._handleMouseMovePan(n);break}}function yR(n){this.enabled===!1||this.enableZoom===!1||this.state!==Zt.NONE||(n.preventDefault(),this.dispatchEvent(Tm),this._handleMouseWheel(this._customWheelEvent(n)),this.dispatchEvent(cy))}function SR(n){this.enabled!==!1&&this._handleKeyDown(n)}function MR(n){switch(this._trackPointer(n),this._pointers.length){case 1:switch(this.touches.ONE){case So.ROTATE:if(this.enableRotate===!1)return;this._handleTouchStartRotate(n),this.state=Zt.TOUCH_ROTATE;break;case So.PAN:if(this.enablePan===!1)return;this._handleTouchStartPan(n),this.state=Zt.TOUCH_PAN;break;default:this.state=Zt.NONE}break;case 2:switch(this.touches.TWO){case So.DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchStartDollyPan(n),this.state=Zt.TOUCH_DOLLY_PAN;break;case So.DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchStartDollyRotate(n),this.state=Zt.TOUCH_DOLLY_ROTATE;break;default:this.state=Zt.NONE}break;default:this.state=Zt.NONE}this.state!==Zt.NONE&&this.dispatchEvent(Tm)}function ER(n){switch(this._trackPointer(n),this.state){case Zt.TOUCH_ROTATE:if(this.enableRotate===!1)return;this._handleTouchMoveRotate(n),this.update();break;case Zt.TOUCH_PAN:if(this.enablePan===!1)return;this._handleTouchMovePan(n),this.update();break;case Zt.TOUCH_DOLLY_PAN:if(this.enableZoom===!1&&this.enablePan===!1)return;this._handleTouchMoveDollyPan(n),this.update();break;case Zt.TOUCH_DOLLY_ROTATE:if(this.enableZoom===!1&&this.enableRotate===!1)return;this._handleTouchMoveDollyRotate(n),this.update();break;default:this.state=Zt.NONE}}function wR(n){this.enabled!==!1&&n.preventDefault()}function TR(n){n.key==="Control"&&(this._controlActive=!0,this.domElement.getRootNode().addEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}function AR(n){n.key==="Control"&&(this._controlActive=!1,this.domElement.getRootNode().removeEventListener("keyup",this._interceptControlUp,{passive:!0,capture:!0}))}const uy=0,bR=1,CR=2,R_=2,Fh=1.25,P_=1,Ui=32,An=Ui/4,fy=65535,$u=Math.pow(2,-24),Am=Symbol("SKIP_GENERATION"),dy={strategy:uy,maxDepth:40,targetLeafSize:10,useSharedArrayBuffer:!1,setBoundingBox:!0,onProgress:null,indirect:!1,verbose:!0,range:null,[Am]:!1};function xn(n,e,t){return t.min.x=e[n],t.min.y=e[n+1],t.min.z=e[n+2],t.max.x=e[n+3],t.max.y=e[n+4],t.max.z=e[n+5],t}function Gp(n){let e=-1,t=-1/0;for(let r=0;r<3;r++){const a=n[r+3]-n[r];a>t&&(t=a,e=r)}return e}function L_(n,e,t){for(let r=0;r<3;r++){const a=e[n+2*r],o=e[n+2*r+1],c=a-o,u=a+o;c<t[r]&&(t[r]=c),u>t[r+3]&&(t[r+3]=u)}}function Oh(n){const e=n[3]-n[0],t=n[4]-n[1],r=n[5]-n[2];return 2*(e*t+t*r+r*e)}function En(n,e){return e[n+15]===fy}function Bn(n,e){return e[n+6]}function ri(n,e){return e[n+14]}function Nn(n){return n+An}function Un(n,e){const t=e[n+6];return n+t*An}function bm(n,e){return e[n+7]}function Ih(n,e,t,r,a){let o=1/0,c=1/0,u=1/0,d=-1/0,h=-1/0,m=-1/0,g=1/0,p=1/0,x=1/0,E=-1/0,T=-1/0,S=-1/0;const y=n.offset||0;for(let b=(e-y)*6,D=(e+t-y)*6;b<D;b+=6){const w=n[b+0],C=n[b+1],P=w-C,F=w+C;P<o&&(o=P),F>d&&(d=F),w<g&&(g=w),w>E&&(E=w);const A=n[b+2],U=n[b+3],O=A-U,k=A+U;O<c&&(c=O),k>h&&(h=k),A<p&&(p=A),A>T&&(T=A);const I=n[b+4],X=n[b+5],V=I-X,q=I+X;V<u&&(u=V),q>m&&(m=q),I<x&&(x=I),I>S&&(S=I)}r[0]=o,r[1]=c,r[2]=u,r[3]=d,r[4]=h,r[5]=m,a[0]=g,a[1]=p,a[2]=x,a[3]=E,a[4]=T,a[5]=S}const Mr=8,Cm=8,kh=new Int32Array(Mr),Sr=new Float32Array(Mr*6),oo=new Float32Array(Mr*6),or=new Float32Array(6),Su=new Float32Array(6),Rs=new Int32Array(Cm),D_=new Float32Array(Cm*6);function RR(n,e,t,r){for(let a=0;a<3;a++){const o=e[n+2*a],c=e[n+2*a+1],u=o-c,d=o+c;u<t[r+a]&&(t[r+a]=u),d>t[r+a+3]&&(t[r+a+3]=d)}}function N_(n,e){const t=n[e+3]-n[e],r=n[e+4]-n[e+1],a=n[e+5]-n[e+2];return 2*(t*r+r*a+a*t)}function PR(n,e,t,r,a,o){let c=-1,u=0;if(o===uy)c=Gp(e),c!==-1&&(u=(e[c]+e[c+3])/2);else if(o===bR)c=Gp(n),c!==-1&&(u=LR(t,r,a,c));else if(o===CR){const d=Oh(n);let h=Fh*a;const m=t.offset||0,g=(r-m)*6,p=(r+a-m)*6;for(let x=0;x<3;x++){const E=e[x],y=(e[x+3]-E)/Mr;if(a<Cm){for(let b=0;b<a;b++){const D=g+b*6,w=t[D+2*x];let C=b;for(;C>0&&t[Rs[C-1]+2*x]>w;)Rs[C]=Rs[C-1],C--;Rs[C]=D}for(let b=0;b<3;b++)or[b]=1/0,or[b+3]=-1/0,Su[b]=1/0,Su[b+3]=-1/0;for(let b=a-1;b>=0;b--)L_(Rs[b],t,Su),D_.set(Su,b*6);for(let b=0;b<a-1;b++){L_(Rs[b],t,or);const D=t[Rs[b+1]+2*x];if(t[Rs[b]+2*x]===D)continue;const w=b+1,C=a-w,P=Oh(or)/d,F=N_(D_,w*6)/d,A=P_+Fh*(P*w+F*C);A<h&&(c=x,h=A,u=D)}}else{for(let w=0;w<Mr;w++){kh[w]=0;for(let C=0;C<3;C++)Sr[w*6+C]=1/0,Sr[w*6+C+3]=-1/0}for(let w=g;w<p;w+=6){let F=~~((t[w+2*x]-E)/y);F>=Mr&&(F=Mr-1),kh[F]++,RR(w,t,Sr,F*6)}const b=(Mr-1)*6;for(let w=0;w<6;w++)oo[b+w]=Sr[b+w];for(let w=Mr-2;w>=0;w--){const C=w*6,P=C+6;for(let F=0;F<3;F++)oo[C+F]=Math.min(Sr[C+F],oo[P+F]),oo[C+F+3]=Math.max(Sr[C+F+3],oo[P+F+3])}let D=0;for(let w=0;w<Mr-1;w++){const C=w*6,P=kh[w];if(P!==0)for(let k=0;k<3;k++)D===0?(or[k]=Sr[C+k],or[k+3]=Sr[C+k+3]):(or[k]=Math.min(or[k],Sr[C+k]),or[k+3]=Math.max(or[k+3],Sr[C+k+3]));D+=P;let F=0,A=0;D!==0&&(F=Oh(or)/d);const U=a-D;U!==0&&(A=N_(oo,C+6)/d);const O=P_+Fh*(F*D+A*U);O<h&&(c=x,h=O,u=E+y+w*y)}}}}else console.warn(`BVH: Invalid build strategy value ${o} used.`);return{axis:c,pos:u}}function LR(n,e,t,r){let a=0;const o=n.offset;for(let c=e,u=e+t;c<u;c++)a+=n[(c-o)*6+r*2];return a/t}function DR(n,e,t,r,a,o){let c=r,u=r+a-1;const d=o.pos,h=o.axis*2,m=t.offset||0;for(;;){for(;c<=u&&t[(c-m)*6+h]<d;)c++;for(;c<=u&&t[(u-m)*6+h]>=d;)u--;if(c<u){for(let g=0;g<e;g++){let p=n[c*e+g];n[c*e+g]=n[u*e+g],n[u*e+g]=p}for(let g=0;g<6;g++){const p=c-m,x=u-m,E=t[p*6+g];t[p*6+g]=t[x*6+g],t[x*6+g]=E}c++,u--}else return c}}const NR=Math.pow(2,32),lo=new Float32Array(6),Mu=new Float32Array(6);function UR(n,e,t,r,a,o){const{maxDepth:c,verbose:u,targetLeafSize:d,_strictLeafSize:h=1/0,strategy:m,onProgress:g,useSharedArrayBuffer:p=!1}=a,x=n.primitiveBuffer,E=n.primitiveBufferStride,T=p?SharedArrayBuffer:ArrayBuffer,S=new T(Ui*Math.max(1,2*Math.ceil(r)-1)),y=new Float32Array(S),b=new Uint32Array(S),D=new Uint16Array(S);let w=0,C=!1;return Ih(e,t,r,lo,Mu),A(t,r,0),S.slice(0,w*Ui);function P(U){g&&g((U-o.offset)/o.count)}function F(U,O,k){const I=U*2;b[U+6]=O,D[I+14]=k,D[I+15]=fy,P(O+k)}function A(U,O,k){const I=w++,X=I*An;y.set(lo,X),!C&&k>=c&&(C=!0,u&&console.warn(`BVH: Max depth of ${c} reached when generating BVH. Consider increasing maxDepth.`));const V=O>h;if(O<=d&&!V||k>=c){F(X,U,O);return}const q=PR(lo,Mu,e,U,O,m);let ee=q.axis===-1?-1:DR(x,E,e,U,O,q);if(q.axis===-1||ee===U||ee===U+O){if(!V){F(X,U,O);return}q.axis=Math.max(0,Gp(lo)),ee=U+Math.max(1,Math.floor(O/2))}b[X+7]=q.axis;const ae=ee-U;Ih(e,U,ae,lo,Mu),A(U,ae,k+1);const J=w-I;if(J>NR)throw new Error("MeshBVH: Cannot store relative child node offset greater than 32 bits.");b[X+6]=J;const te=O-ae;Ih(e,ee,te,lo,Mu),A(ee,te,k+1)}}function FR(n,e){const t=n.getRootRanges(e.range),r=t[0],a=t[t.length-1],o={offset:r.offset,count:a.offset+a.count-r.offset},c=new Float32Array(6*o.count);c.offset=o.offset,n.computePrimitiveBounds(o.offset,o.count,c),n._roots=t.map(u=>UR(n,c,u.offset,u.count,e,o))}class Rm{constructor(e){this._getNewPrimitive=e,this._primitives=[]}getPrimitive(){const e=this._primitives;return e.length===0?this._getNewPrimitive():e.pop()}releasePrimitive(e){this._primitives.push(e)}}class OR{constructor(){this.float32Array=null,this.uint16Array=null,this.uint32Array=null;const e=[];let t=null;this.setBuffer=r=>{t&&e.push(t),t=r,this.float32Array=new Float32Array(r),this.uint16Array=new Uint16Array(r),this.uint32Array=new Uint32Array(r)},this.clearBuffer=()=>{t=null,this.float32Array=null,this.uint16Array=null,this.uint32Array=null,e.length!==0&&this.setBuffer(e.pop())}}}const Jt=new OR;let Us,Eo;const co=[],Eu=new Rm(()=>new Wn);function IR(n,e,t,r,a,o){Us=Eu.getPrimitive(),Eo=Eu.getPrimitive(),co.push(Us,Eo),Jt.setBuffer(n._roots[e]);const c=Wp(0,n.geometry,t,r,a,o);Jt.clearBuffer(),Eu.releasePrimitive(Us),Eu.releasePrimitive(Eo),co.pop(),co.pop();const u=co.length;return u>0&&(Eo=co[u-1],Us=co[u-2]),c}function Wp(n,e,t,r,a=null,o=0,c=0){const{float32Array:u,uint16Array:d,uint32Array:h}=Jt;let m=n*2;if(En(m,d)){const p=Bn(n,h),x=ri(m,d);return xn(n,u,Us),r(p,x,!1,c,o+n/An,Us)}else{let O=function(I){const{uint16Array:X,uint32Array:V}=Jt;let q=I*2;for(;!En(q,X);)I=Nn(I),q=I*2;return Bn(I,V)},k=function(I){const{uint16Array:X,uint32Array:V}=Jt;let q=I*2;for(;!En(q,X);)I=Un(I,V),q=I*2;return Bn(I,V)+ri(q,X)};const p=Nn(n),x=Un(n,h);let E=p,T=x,S,y,b,D;if(a&&(b=Us,D=Eo,xn(E,u,b),xn(T,u,D),S=a(b),y=a(D),y<S)){E=x,T=p;const I=S;S=y,y=I,b=D}b||(b=Us,xn(E,u,b));const w=En(E*2,d),C=t(b,w,S,c+1,o+E/An);let P;if(C===R_){const I=O(E),V=k(E)-I;P=r(I,V,!0,c+1,o+E/An,b)}else P=C&&Wp(E,e,t,r,a,o,c+1);if(P)return!0;D=Eo,xn(T,u,D);const F=En(T*2,d),A=t(D,F,y,c+1,o+T/An);let U;if(A===R_){const I=O(T),V=k(T)-I;U=r(I,V,!0,c+1,o+T/An,D)}else U=A&&Wp(T,e,t,r,a,o,c+1);return!!U}}const Ul=new Jt.constructor,rf=new Jt.constructor,Ls=new Rm(()=>new Wn),uo=new Wn,fo=new Wn,zh=new Wn,Hh=new Wn;let Vh=!1;function kR(n,e,t,r){if(Vh)throw new Error("MeshBVH: Recursive calls to bvhcast not supported.");Vh=!0;const a=n._roots,o=e._roots;let c,u=0,d=0;const h=new $t().copy(t).invert();for(let m=0,g=a.length;m<g;m++){Ul.setBuffer(a[m]),d=0;const p=Ls.getPrimitive();xn(0,Ul.float32Array,p),p.applyMatrix4(h);for(let x=0,E=o.length;x<E&&(rf.setBuffer(o[x]),c=cr(0,0,t,h,r,u,d,0,0,p),rf.clearBuffer(),d+=o[x].byteLength/Ui,!c);x++);if(Ls.releasePrimitive(p),Ul.clearBuffer(),u+=a[m].byteLength/Ui,c)break}return Vh=!1,c}function cr(n,e,t,r,a,o=0,c=0,u=0,d=0,h=null,m=!1){let g,p;m?(g=rf,p=Ul):(g=Ul,p=rf);const x=g.float32Array,E=g.uint32Array,T=g.uint16Array,S=p.float32Array,y=p.uint32Array,b=p.uint16Array,D=n*2,w=e*2,C=En(D,T),P=En(w,b);let F=!1;if(P&&C)m?F=a(Bn(e,y),ri(e*2,b),Bn(n,E),ri(n*2,T),d,c+e/An,u,o+n/An):F=a(Bn(n,E),ri(n*2,T),Bn(e,y),ri(e*2,b),u,o+n/An,d,c+e/An);else if(P){const A=Ls.getPrimitive();xn(e,S,A),A.applyMatrix4(t);const U=Nn(n),O=Un(n,E);xn(U,x,uo),xn(O,x,fo);const k=A.intersectsBox(uo),I=A.intersectsBox(fo);F=k&&cr(e,U,r,t,a,c,o,d,u+1,A,!m)||I&&cr(e,O,r,t,a,c,o,d,u+1,A,!m),Ls.releasePrimitive(A)}else{const A=Nn(e),U=Un(e,y);xn(A,S,zh),xn(U,S,Hh);const O=h.intersectsBox(zh),k=h.intersectsBox(Hh);if(O&&k)F=cr(n,A,t,r,a,o,c,u,d+1,h,m)||cr(n,U,t,r,a,o,c,u,d+1,h,m);else if(O)if(C)F=cr(n,A,t,r,a,o,c,u,d+1,h,m);else{const I=Ls.getPrimitive();I.copy(zh).applyMatrix4(t);const X=Nn(n),V=Un(n,E);xn(X,x,uo),xn(V,x,fo);const q=I.intersectsBox(uo),ee=I.intersectsBox(fo);F=q&&cr(A,X,r,t,a,c,o,d,u+1,I,!m)||ee&&cr(A,V,r,t,a,c,o,d,u+1,I,!m),Ls.releasePrimitive(I)}else if(k)if(C)F=cr(n,U,t,r,a,o,c,u,d+1,h,m);else{const I=Ls.getPrimitive();I.copy(Hh).applyMatrix4(t);const X=Nn(n),V=Un(n,E);xn(X,x,uo),xn(V,x,fo);const q=I.intersectsBox(uo),ee=I.intersectsBox(fo);F=q&&cr(U,X,r,t,a,c,o,d,u+1,I,!m)||ee&&cr(U,V,r,t,a,c,o,d,u+1,I,!m),Ls.releasePrimitive(I)}}return F}const Bh=new class{constructor(){let n=null,e=null,t=null,r=!1;this.root=null,this.buffer=null,this.uint32Array=null,this.uint16Array=null,this.setBVH=(o,c)=>{if(r)throw new Error("BVHTraversalHelper: cannot call setBVH during an active traversal.");this.root=c,this.buffer=n=o._roots[c],this.uint16Array=t=new Uint16Array(n),this.uint32Array=e=new Uint32Array(n)},this.reset=()=>{this.root=null,this.buffer=n=null,this.uint16Array=t=null,this.uint32Array=e=null},this.getRangeStart=o=>{let c=o*2;for(;!En(c,t);)o=Nn(o),c=o*2;return Bn(o,e)},this.getRangeEnd=o=>{let c=o*2;for(;!En(c,t);)o=Un(o,e),c=o*2;return Bn(o,e)+ri(c,t)};const a=(o,c,u)=>{const d=c*2,h=En(d,t);if(!o(u,h,c)&&!h){const g=Nn(c),p=Un(c,e);a(o,g,u+1),a(o,p,u+1)}};this.traverseBuffer=o=>{if(r)throw new Error("BVHTraversalHelper: cannot start a traversal during an active traversal.");r=!0;try{a(o,0,0)}finally{r=!1}},this.traverse=o=>{this.traverseBuffer((c,u,d)=>{if(u){const h=d*2,m=e[d+6],g=t[h+14];return o(c,u,new Float32Array(n,d*4,6),m,g)}else{const h=bm(d,e);return o(c,u,new Float32Array(n,d*4,6),h)}})}}},U_=new Wn,ho=new Float32Array(6);class zR{constructor(){this._roots=null,this.primitiveBuffer=null,this.primitiveBufferStride=null}init(e){e={...dy,...e},"maxLeafSize"in e&&(console.warn('BVH: "maxLeafSize" option has been deprecated. Use "targetLeafSize", instead.'),e={...e,targetLeafSize:e.maxLeafSize}),FR(this,e)}getRootRanges(){throw new Error("BVH: getRootRanges() not implemented")}writePrimitiveBounds(){throw new Error("BVH: writePrimitiveBounds() not implemented")}writePrimitiveRangeBounds(e,t,r,a){let o=1/0,c=1/0,u=1/0,d=-1/0,h=-1/0,m=-1/0;for(let g=e,p=e+t;g<p;g++){this.writePrimitiveBounds(g,ho,0);const[x,E,T,S,y,b]=ho;x<o&&(o=x),S>d&&(d=S),E<c&&(c=E),y>h&&(h=y),T<u&&(u=T),b>m&&(m=b)}return r[a+0]=o,r[a+1]=c,r[a+2]=u,r[a+3]=d,r[a+4]=h,r[a+5]=m,r}computePrimitiveBounds(e,t,r){const a=r.offset||0;for(let o=e,c=e+t;o<c;o++){this.writePrimitiveBounds(o,ho,0);const[u,d,h,m,g,p]=ho,x=(u+m)/2,E=(d+g)/2,T=(h+p)/2,S=(m-u)/2,y=(g-d)/2,b=(p-h)/2,D=(o-a)*6;r[D+0]=x,r[D+1]=S+(Math.abs(x)+S)*$u,r[D+2]=E,r[D+3]=y+(Math.abs(E)+y)*$u,r[D+4]=T,r[D+5]=b+(Math.abs(T)+b)*$u}return r}shiftPrimitiveOffsets(e){const t=this._indirectBuffer;if(t)for(let r=0,a=t.length;r<a;r++)t[r]+=e;else{const r=this._roots;for(let a=0;a<r.length;a++){const o=r[a],c=new Uint32Array(o),u=new Uint16Array(o),d=o.byteLength/Ui;for(let h=0;h<d;h++){const m=An*h,g=2*m;En(g,u)&&(c[m+6]+=e)}}}}traverse(e,t=0){Bh.setBVH(this,t),Bh.traverse(e),Bh.reset()}refit(){const e=this._roots;for(let t=0,r=e.length;t<r;t++){const a=e[t],o=new Uint32Array(a),c=new Uint16Array(a),u=new Float32Array(a),d=a.byteLength/Ui;for(let h=d-1;h>=0;h--){const m=h*An,g=m*2;if(En(g,c)){const x=Bn(m,o),E=ri(g,c);this.writePrimitiveRangeBounds(x,E,ho,0),u.set(ho,m)}else{const x=Nn(m),E=Un(m,o);for(let T=0;T<3;T++){const S=u[x+T],y=u[x+T+3],b=u[E+T],D=u[E+T+3];u[m+T]=S<b?S:b,u[m+T+3]=y>D?y:D}}}}}getBoundingBox(e){return e.makeEmpty(),this._roots.forEach(r=>{xn(0,new Float32Array(r),U_),e.union(U_)}),e}shapecast(e){let{boundsTraverseOrder:t,intersectsBounds:r,intersectsRange:a,intersectsPrimitive:o,scratchPrimitive:c,iterate:u}=e;if(a&&o){const g=a;a=(p,x,E,T,S)=>g(p,x,E,T,S)?!0:u(p,x,this,o,E,T,c)}else a||(o?a=(g,p,x,E)=>u(g,p,this,o,x,E,c):a=(g,p,x)=>x);let d=!1,h=0;const m=this._roots;for(let g=0,p=m.length;g<p;g++){const x=m[g];if(d=IR(this,g,r,a,t,h),d)break;h+=x.byteLength/Ui}return d}bvhcast(e,t,r){let{intersectsRanges:a}=r;return kR(this,e,t,a)}}function HR(){return typeof SharedArrayBuffer<"u"}function Pm(n){return n.index?n.index.count:n.attributes.position.count}function _f(n){return Pm(n)/3}function VR(n,e=ArrayBuffer){return n>65535?new Uint32Array(new e(4*n)):new Uint16Array(new e(2*n))}function BR(n,e){if(!n.index){const t=n.attributes.position.count,r=e.useSharedArrayBuffer?SharedArrayBuffer:ArrayBuffer,a=VR(t,r);n.setIndex(new ai(a,1));for(let o=0;o<t;o++)a[o]=o}}function GR(n,e,t){const r=Pm(n)/t,a=e||n.drawRange,o=a.start/t,c=(a.start+a.count)/t,u=Math.max(0,o),d=Math.min(r,c)-u;return{offset:Math.floor(u),count:Math.floor(d)}}function WR(n,e){return n.groups.map(t=>({offset:t.start/e,count:t.count/e}))}function F_(n,e,t){const r=GR(n,e,t),a=WR(n,t);if(!a.length)return[r];const o=[],c=r.offset,u=r.offset+r.count,d=Pm(n)/t,h=[];for(const p of a){const{offset:x,count:E}=p,T=x,S=isFinite(E)?E:d-x,y=x+S;T<u&&y>c&&(h.push({pos:Math.max(c,T),isStart:!0}),h.push({pos:Math.min(u,y),isStart:!1}))}h.sort((p,x)=>p.pos!==x.pos?p.pos-x.pos:p.type==="end"?-1:1);let m=0,g=null;for(const p of h){const x=p.pos;m!==0&&x!==g&&o.push({offset:g,count:x-g}),m+=p.isStart?1:-1,g=x}return o}function XR(n,e){const t=n[n.length-1],r=t.offset+t.count>2**16,a=n.reduce((h,m)=>h+m.count,0),o=r?4:2,c=e?new SharedArrayBuffer(a*o):new ArrayBuffer(a*o),u=r?new Uint32Array(c):new Uint16Array(c);let d=0;for(let h=0;h<n.length;h++){const{offset:m,count:g}=n[h];for(let p=0;p<g;p++)u[d+p]=m+p;d+=g}return u}class $R extends zR{get indirect(){return!!this._indirectBuffer}get primitiveStride(){return null}get primitiveBufferStride(){return this.indirect?1:this.primitiveStride}set primitiveBufferStride(e){}get primitiveBuffer(){return this.indirect?this._indirectBuffer:this.geometry.index.array}set primitiveBuffer(e){}constructor(e,t={}){if(e.isBufferGeometry){if(e.index&&e.index.isInterleavedBufferAttribute)throw new Error("BVH: InterleavedBufferAttribute is not supported for the index attribute.")}else throw new Error("BVH: Only BufferGeometries are supported.");if(t.useSharedArrayBuffer&&!HR())throw new Error("BVH: SharedArrayBuffer is not available.");super(),this.geometry=e,this.resolvePrimitiveIndex=t.indirect?r=>this._indirectBuffer[r]:r=>r,this.primitiveBuffer=null,this.primitiveBufferStride=null,this._indirectBuffer=null,t={...dy,...t},t[Am]||this.init(t)}init(e){const{geometry:t,primitiveStride:r}=this;if(e.indirect){const a=F_(t,e.range,r),o=XR(a,e.useSharedArrayBuffer);this._indirectBuffer=o}else BR(t,e);super.init(e),!t.boundingBox&&e.setBoundingBox&&(t.boundingBox=this.getBoundingBox(new Wn))}getRootRanges(e){return this.indirect?[{offset:0,count:this._indirectBuffer.length}]:F_(this.geometry,e,this.primitiveStride)}raycastObject3D(){throw new Error("BVH: raycastObject3D() not implemented")}}class rs{constructor(){this.min=1/0,this.max=-1/0}setFromPointsField(e,t){let r=1/0,a=-1/0;for(let o=0,c=e.length;o<c;o++){const d=e[o][t];r=d<r?d:r,a=d>a?d:a}this.min=r,this.max=a}setFromPoints(e,t){let r=1/0,a=-1/0;for(let o=0,c=t.length;o<c;o++){const u=t[o],d=e.dot(u);r=d<r?d:r,a=d>a?d:a}this.min=r,this.max=a}isSeparated(e){return this.min>e.max||e.min>this.max}}rs.prototype.setFromBox=(function(){const n=new G;return function(t,r){const a=r.min,o=r.max;let c=1/0,u=-1/0;for(let d=0;d<=1;d++)for(let h=0;h<=1;h++)for(let m=0;m<=1;m++){n.x=a.x*d+o.x*(1-d),n.y=a.y*h+o.y*(1-h),n.z=a.z*m+o.z*(1-m);const g=t.dot(n);c=Math.min(g,c),u=Math.max(g,u)}this.min=c,this.max=u}})();const qR=(function(){const n=new G,e=new G,t=new G;return function(a,o,c){const u=a.start,d=n,h=o.start,m=e;t.subVectors(u,h),n.subVectors(a.end,a.start),e.subVectors(o.end,o.start);const g=t.dot(m),p=m.dot(d),x=m.dot(m),E=t.dot(d),S=d.dot(d)*x-p*p;let y,b;S!==0?y=(g*p-E*x)/S:y=0,b=(g+y*p)/x,c.x=y,c.y=b}})(),Lm=(function(){const n=new st,e=new G,t=new G;return function(a,o,c,u){qR(a,o,n);let d=n.x,h=n.y;if(d>=0&&d<=1&&h>=0&&h<=1){a.at(d,c),o.at(h,u);return}else if(d>=0&&d<=1){h<0?o.at(0,u):o.at(1,u),a.closestPointToPoint(u,!0,c);return}else if(h>=0&&h<=1){d<0?a.at(0,c):a.at(1,c),o.closestPointToPoint(c,!0,u);return}else{let m;d<0?m=a.start:m=a.end;let g;h<0?g=o.start:g=o.end;const p=e,x=t;if(a.closestPointToPoint(g,!0,e),o.closestPointToPoint(m,!0,t),p.distanceToSquared(g)<=x.distanceToSquared(m)){c.copy(p),u.copy(g);return}else{c.copy(m),u.copy(x);return}}}})(),YR=(function(){const n=new G,e=new G,t=new ur,r=new is;return function(o,c){const{radius:u,center:d}=o,{a:h,b:m,c:g}=c;if(r.start=h,r.end=m,r.closestPointToPoint(d,!0,n).distanceTo(d)<=u||(r.start=h,r.end=g,r.closestPointToPoint(d,!0,n).distanceTo(d)<=u)||(r.start=m,r.end=g,r.closestPointToPoint(d,!0,n).distanceTo(d)<=u))return!0;const T=c.getPlane(t);if(Math.abs(T.distanceToPoint(d))<=u){const y=T.projectPoint(d,e);if(c.containsPoint(y))return!0}return!1}})(),jR=["x","y","z"],Kr=1e-15,O_=Kr*Kr;function Gi(n){return Math.abs(n)<Kr}class pr extends Dn{constructor(...e){super(...e),this.isExtendedTriangle=!0,this.satAxes=new Array(4).fill().map(()=>new G),this.satBounds=new Array(4).fill().map(()=>new rs),this.points=[this.a,this.b,this.c],this.plane=new ur,this.isDegenerateIntoSegment=!1,this.isDegenerateIntoPoint=!1,this.degenerateSegment=new is,this.needsUpdate=!0}intersectsSphere(e){return YR(e,this)}update(){const e=this.a,t=this.b,r=this.c,a=this.points,o=this.satAxes,c=this.satBounds,u=o[0],d=c[0];this.getNormal(u),d.setFromPoints(u,a);const h=o[1],m=c[1];h.subVectors(e,t),m.setFromPoints(h,a);const g=o[2],p=c[2];g.subVectors(t,r),p.setFromPoints(g,a);const x=o[3],E=c[3];x.subVectors(r,e),E.setFromPoints(x,a);const T=h.length(),S=g.length(),y=x.length();this.isDegenerateIntoPoint=!1,this.isDegenerateIntoSegment=!1,T<Kr?S<Kr||y<Kr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(e),this.degenerateSegment.end.copy(r)):S<Kr?y<Kr?this.isDegenerateIntoPoint=!0:(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(t),this.degenerateSegment.end.copy(e)):y<Kr&&(this.isDegenerateIntoSegment=!0,this.degenerateSegment.start.copy(r),this.degenerateSegment.end.copy(t)),this.plane.setFromNormalAndCoplanarPoint(u,e),this.needsUpdate=!1}}pr.prototype.closestPointToSegment=(function(){const n=new G,e=new G,t=new is;return function(a,o=null,c=null){this.needsUpdate&&this.update();const{start:u,end:d}=a,h=this.points;let m,g=1/0;const p=this.plane.distanceToPoint(u),x=this.plane.distanceToPoint(d);if(p*x<0&&this.plane.intersectLine(a,n)!==null&&this.containsPoint(n))return o&&o.copy(n),c&&c.copy(n),0;for(let E=0;E<3;E++){const T=(E+1)%3;t.start.copy(h[E]),t.end.copy(h[T]),Lm(t,a,n,e),m=n.distanceToSquared(e),m<g&&(g=m,o&&o.copy(n),c&&c.copy(e))}return this.closestPointToPoint(u,n),m=u.distanceToSquared(n),m<g&&(g=m,o&&o.copy(n),c&&c.copy(u)),this.closestPointToPoint(d,n),m=d.distanceToSquared(n),m<g&&(g=m,o&&o.copy(n),c&&c.copy(d)),Math.sqrt(g)}})();pr.prototype.intersectsTriangle=(function(){const n=new pr,e=new rs,t=new rs,r=new G,a=new G,o=new G,c=new G,u=new is,d=new is,h=new G,m=new st,g=new st;function p(D,w,C,P){const F=r;!D.isDegenerateIntoPoint&&!D.isDegenerateIntoSegment?F.copy(D.plane.normal):F.copy(w.plane.normal);const A=D.satBounds,U=D.satAxes;for(let I=1;I<4;I++){const X=A[I],V=U[I];if(e.setFromPoints(V,w.points),X.isSeparated(e)||(c.copy(F).cross(V),e.setFromPoints(c,D.points),t.setFromPoints(c,w.points),e.isSeparated(t)))return!1}const O=w.satBounds,k=w.satAxes;for(let I=1;I<4;I++){const X=O[I],V=k[I];if(e.setFromPoints(V,D.points),X.isSeparated(e)||(c.crossVectors(F,V),e.setFromPoints(c,D.points),t.setFromPoints(c,w.points),e.isSeparated(t)))return!1}return C&&(P||console.warn("ExtendedTriangle.intersectsTriangle: Triangles are coplanar which does not support an output edge. Setting edge to 0, 0, 0."),C.start.set(0,0,0),C.end.set(0,0,0)),!0}function x(D,w,C,P,F,A,U,O,k,I,X){let V=U/(U-O);I.x=P+(F-P)*V,X.start.subVectors(w,D).multiplyScalar(V).add(D),V=U/(U-k),I.y=P+(A-P)*V,X.end.subVectors(C,D).multiplyScalar(V).add(D)}function E(D,w,C,P,F,A,U,O,k,I,X){if(F>0)x(D.c,D.a,D.b,P,w,C,k,U,O,I,X);else if(A>0)x(D.b,D.a,D.c,C,w,P,O,U,k,I,X);else if(O*k>0||U!=0)x(D.a,D.b,D.c,w,C,P,U,O,k,I,X);else if(O!=0)x(D.b,D.a,D.c,C,w,P,O,U,k,I,X);else if(k!=0)x(D.c,D.a,D.b,P,w,C,k,U,O,I,X);else return!0;return!1}function T(D,w,C,P){const F=w.degenerateSegment,A=D.plane.distanceToPoint(F.start),U=D.plane.distanceToPoint(F.end);return Gi(A)?Gi(U)?p(D,w,C,P):(C&&(C.start.copy(F.start),C.end.copy(F.start)),D.containsPoint(F.start)):Gi(U)?(C&&(C.start.copy(F.end),C.end.copy(F.end)),D.containsPoint(F.end)):D.plane.intersectLine(F,r)!=null?(C&&(C.start.copy(r),C.end.copy(r)),D.containsPoint(r)):!1}function S(D,w,C){const P=w.a;return Gi(D.plane.distanceToPoint(P))&&D.containsPoint(P)?(C&&(C.start.copy(P),C.end.copy(P)),!0):!1}function y(D,w,C){const P=D.degenerateSegment,F=w.a;return P.closestPointToPoint(F,!0,r),F.distanceToSquared(r)<O_?(C&&(C.start.copy(F),C.end.copy(F)),!0):!1}function b(D,w,C,P){if(D.isDegenerateIntoSegment)if(w.isDegenerateIntoSegment){const F=D.degenerateSegment,A=w.degenerateSegment,U=a,O=o;F.delta(U),A.delta(O);const k=r.subVectors(A.start,F.start),I=U.x*O.y-U.y*O.x;if(Gi(I))return!1;const X=(k.x*O.y-k.y*O.x)/I,V=-(U.x*k.y-U.y*k.x)/I;if(X<0||X>1||V<0||V>1)return!1;const q=F.start.z+U.z*X,ee=A.start.z+O.z*V;return Gi(q-ee)?(C&&(C.start.copy(F.start).addScaledVector(U,X),C.end.copy(F.start).addScaledVector(U,X)),!0):!1}else return w.isDegenerateIntoPoint?y(D,w,C):T(w,D,C,P);else{if(D.isDegenerateIntoPoint)return w.isDegenerateIntoPoint?w.a.distanceToSquared(D.a)<O_?(C&&(C.start.copy(D.a),C.end.copy(D.a)),!0):!1:w.isDegenerateIntoSegment?y(w,D,C):S(w,D,C);if(w.isDegenerateIntoPoint)return S(D,w,C);if(w.isDegenerateIntoSegment)return T(D,w,C,P)}}return function(w,C=null,P=!1){this.needsUpdate&&this.update(),w.isExtendedTriangle?w.needsUpdate&&w.update():(n.copy(w),n.update(),w=n);const F=b(this,w,C,P);if(F!==void 0)return F;const A=this.plane,U=w.plane;let O=U.distanceToPoint(this.a),k=U.distanceToPoint(this.b),I=U.distanceToPoint(this.c);Gi(O)&&(O=0),Gi(k)&&(k=0),Gi(I)&&(I=0);const X=O*k,V=O*I;if(X>0&&V>0)return!1;let q=A.distanceToPoint(w.a),ee=A.distanceToPoint(w.b),ae=A.distanceToPoint(w.c);Gi(q)&&(q=0),Gi(ee)&&(ee=0),Gi(ae)&&(ae=0);const J=q*ee,te=q*ae;if(J>0&&te>0)return!1;a.copy(A.normal),o.copy(U.normal);const ne=a.cross(o);let H=0,oe=Math.abs(ne.x);const Se=Math.abs(ne.y);Se>oe&&(oe=Se,H=1),Math.abs(ne.z)>oe&&(H=2);const Be=jR[H],He=this.a[Be],ue=this.b[Be],he=this.c[Be],Pe=w.a[Be],Ke=w.b[Be],Ge=w.c[Be];if(E(this,He,ue,he,X,V,O,k,I,m,u))return p(this,w,C,P);if(E(w,Pe,Ke,Ge,J,te,q,ee,ae,g,d))return p(this,w,C,P);if(m.y<m.x){const pt=m.y;m.y=m.x,m.x=pt,h.copy(u.start),u.start.copy(u.end),u.end.copy(h)}if(g.y<g.x){const pt=g.y;g.y=g.x,g.x=pt,h.copy(d.start),d.start.copy(d.end),d.end.copy(h)}return m.y<g.x||g.y<m.x?!1:(C&&(g.x>m.x?C.start.copy(d.start):C.start.copy(u.start),g.y<m.y?C.end.copy(d.end):C.end.copy(u.end)),!0)}})();pr.prototype.distanceToPoint=(function(){const n=new G;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}})();pr.prototype.distanceToTriangle=(function(){const n=new G,e=new G,t=["a","b","c"],r=new is,a=new is;return function(c,u=null,d=null){const h=u||d?r:null;if(this.intersectsTriangle(c,h,!0))return(u||d)&&(u&&h.getCenter(u),d&&h.getCenter(d)),0;let m=1/0;for(let g=0;g<3;g++){let p;const x=t[g],E=c[x];this.closestPointToPoint(E,n),p=E.distanceToSquared(n),p<m&&(m=p,u&&u.copy(n),d&&d.copy(E));const T=this[x];c.closestPointToPoint(T,n),p=T.distanceToSquared(n),p<m&&(m=p,u&&u.copy(T),d&&d.copy(n))}for(let g=0;g<3;g++){const p=t[g],x=t[(g+1)%3];r.set(this[p],this[x]);for(let E=0;E<3;E++){const T=t[E],S=t[(E+1)%3];a.set(c[T],c[S]),Lm(r,a,n,e);const y=n.distanceToSquared(e);y<m&&(m=y,u&&u.copy(n),d&&d.copy(e))}}return Math.sqrt(m)}})();class pi{constructor(e,t,r){this.isOrientedBox=!0,this.min=new G,this.max=new G,this.matrix=new $t,this.invMatrix=new $t,this.points=new Array(8).fill().map(()=>new G),this.satAxes=new Array(3).fill().map(()=>new G),this.satBounds=new Array(3).fill().map(()=>new rs),this.alignedSatBounds=new Array(3).fill().map(()=>new rs),this.needsUpdate=!1,e&&this.min.copy(e),t&&this.max.copy(t),r&&this.matrix.copy(r)}set(e,t,r){this.min.copy(e),this.max.copy(t),this.matrix.copy(r),this.needsUpdate=!0}copy(e){this.min.copy(e.min),this.max.copy(e.max),this.matrix.copy(e.matrix),this.needsUpdate=!0}}pi.prototype.update=(function(){return function(){const e=this.matrix,t=this.min,r=this.max,a=this.points;for(let h=0;h<=1;h++)for(let m=0;m<=1;m++)for(let g=0;g<=1;g++){const p=1*h|2*m|4*g,x=a[p];x.x=h?r.x:t.x,x.y=m?r.y:t.y,x.z=g?r.z:t.z,x.applyMatrix4(e)}const o=this.satBounds,c=this.satAxes,u=a[0];for(let h=0;h<3;h++){const m=c[h],g=o[h],p=1<<h,x=a[p];m.subVectors(u,x),g.setFromPoints(m,a)}const d=this.alignedSatBounds;d[0].setFromPointsField(a,"x"),d[1].setFromPointsField(a,"y"),d[2].setFromPointsField(a,"z"),this.invMatrix.copy(this.matrix).invert(),this.needsUpdate=!1}})();pi.prototype.intersectsBox=(function(){const n=new rs;return function(t){this.needsUpdate&&this.update();const r=t.min,a=t.max,o=this.satBounds,c=this.satAxes,u=this.alignedSatBounds;if(n.min=r.x,n.max=a.x,u[0].isSeparated(n)||(n.min=r.y,n.max=a.y,u[1].isSeparated(n))||(n.min=r.z,n.max=a.z,u[2].isSeparated(n)))return!1;for(let d=0;d<3;d++){const h=c[d],m=o[d];if(n.setFromBox(h,t),m.isSeparated(n))return!1}return!0}})();pi.prototype.intersectsTriangle=(function(){const n=new pr,e=new Array(3),t=new rs,r=new rs,a=new G;return function(c){this.needsUpdate&&this.update(),c.isExtendedTriangle?c.needsUpdate&&c.update():(n.copy(c),n.update(),c=n);const u=this.satBounds,d=this.satAxes;e[0]=c.a,e[1]=c.b,e[2]=c.c;for(let p=0;p<3;p++){const x=u[p],E=d[p];if(t.setFromPoints(E,e),x.isSeparated(t))return!1}const h=c.satBounds,m=c.satAxes,g=this.points;for(let p=0;p<3;p++){const x=h[p],E=m[p];if(t.setFromPoints(E,g),x.isSeparated(t))return!1}for(let p=0;p<3;p++){const x=d[p];for(let E=0;E<4;E++){const T=m[E];if(a.crossVectors(x,T),t.setFromPoints(a,e),r.setFromPoints(a,g),t.isSeparated(r))return!1}}return!0}})();pi.prototype.closestPointToPoint=(function(){return function(e,t){return this.needsUpdate&&this.update(),t.copy(e).applyMatrix4(this.invMatrix).clamp(this.min,this.max).applyMatrix4(this.matrix),t}})();pi.prototype.distanceToPoint=(function(){const n=new G;return function(t){return this.closestPointToPoint(t,n),t.distanceTo(n)}})();pi.prototype.distanceToBox=(function(){const n=["x","y","z"],e=new Array(12).fill().map(()=>new is),t=new Array(12).fill().map(()=>new is),r=new G,a=new G;return function(c,u=0,d=null,h=null){if(this.needsUpdate&&this.update(),this.intersectsBox(c))return(d||h)&&(c.getCenter(a),this.closestPointToPoint(a,r),c.closestPointToPoint(r,a),d&&d.copy(r),h&&h.copy(a)),0;const m=u*u,g=c.min,p=c.max,x=this.points;let E=1/0;for(let S=0;S<8;S++){const y=x[S];a.copy(y).clamp(g,p);const b=y.distanceToSquared(a);if(b<E&&(E=b,d&&d.copy(y),h&&h.copy(a),b<m))return Math.sqrt(b)}let T=0;for(let S=0;S<3;S++)for(let y=0;y<=1;y++)for(let b=0;b<=1;b++){const D=(S+1)%3,w=(S+2)%3,C=y<<D|b<<w,P=1<<S|y<<D|b<<w,F=x[C],A=x[P];e[T].set(F,A);const O=n[S],k=n[D],I=n[w],X=t[T],V=X.start,q=X.end;V[O]=g[O],V[k]=y?g[k]:p[k],V[I]=b?g[I]:p[I],q[O]=p[O],q[k]=y?g[k]:p[k],q[I]=b?g[I]:p[I],T++}for(let S=0;S<=1;S++)for(let y=0;y<=1;y++)for(let b=0;b<=1;b++){a.x=S?p.x:g.x,a.y=y?p.y:g.y,a.z=b?p.z:g.z,this.closestPointToPoint(a,r);const D=a.distanceToSquared(r);if(D<E&&(E=D,d&&d.copy(r),h&&h.copy(a),D<m))return Math.sqrt(D)}for(let S=0;S<12;S++){const y=e[S];for(let b=0;b<12;b++){const D=t[b];Lm(y,D,r,a);const w=r.distanceToSquared(a);if(w<E&&(E=w,d&&d.copy(r),h&&h.copy(a),w<m))return Math.sqrt(w)}}return Math.sqrt(E)}})();class KR extends Rm{constructor(){super(()=>new pr)}}const Xi=new KR,Ml=new G,Gh=new G;function ZR(n,e,t={},r=0,a=1/0){const o=r*r,c=a*a;let u=1/0,d=null;if(n.shapecast({boundsTraverseOrder:m=>(Ml.copy(e).clamp(m.min,m.max),Ml.distanceToSquared(e)),intersectsBounds:(m,g,p)=>p<u&&p<c,intersectsTriangle:(m,g)=>{m.closestPointToPoint(e,Ml);const p=e.distanceToSquared(Ml);return p<u&&(Gh.copy(Ml),u=p,d=g),p<o}}),u===1/0)return null;const h=Math.sqrt(u);return t.point?t.point.copy(Gh):t.point=Gh.clone(),t.distance=h,t.faceIndex=d,t}const wu=parseInt(Xl)>=169,JR=parseInt(Xl)<=161,aa=new G,oa=new G,la=new G,Tu=new st,Au=new st,bu=new st,I_=new G,k_=new G,z_=new G,El=new G;function QR(n,e,t,r,a,o,c,u){let d;if(o===hi?d=n.intersectTriangle(r,t,e,!0,a):d=n.intersectTriangle(e,t,r,o!==Li,a),d===null)return null;const h=n.origin.distanceTo(a);return h<c||h>u?null:{distance:h,point:a.clone()}}function H_(n,e,t,r,a,o,c,u,d,h,m){aa.fromBufferAttribute(e,o),oa.fromBufferAttribute(e,c),la.fromBufferAttribute(e,u);const g=QR(n,aa,oa,la,El,d,h,m);if(g){if(r){Tu.fromBufferAttribute(r,o),Au.fromBufferAttribute(r,c),bu.fromBufferAttribute(r,u),g.uv=new st;const x=Dn.getInterpolation(El,aa,oa,la,Tu,Au,bu,g.uv);wu||(g.uv=x)}if(a){Tu.fromBufferAttribute(a,o),Au.fromBufferAttribute(a,c),bu.fromBufferAttribute(a,u),g.uv1=new st;const x=Dn.getInterpolation(El,aa,oa,la,Tu,Au,bu,g.uv1);wu||(g.uv1=x),JR&&(g.uv2=g.uv1)}if(t){I_.fromBufferAttribute(t,o),k_.fromBufferAttribute(t,c),z_.fromBufferAttribute(t,u),g.normal=new G;const x=Dn.getInterpolation(El,aa,oa,la,I_,k_,z_,g.normal);g.normal.dot(n.direction)>0&&g.normal.multiplyScalar(-1),wu||(g.normal=x)}const p={a:o,b:c,c:u,normal:new G,materialIndex:0};if(Dn.getNormal(aa,oa,la,p.normal),g.face=p,g.faceIndex=o,wu){const x=new G;Dn.getBarycoord(El,aa,oa,la,x),g.barycoord=x}}return g}function V_(n){return n&&n.isMaterial?n.side:n}function xf(n,e,t,r,a,o,c){const u=r*3;let d=u+0,h=u+1,m=u+2;const{index:g,groups:p}=n;n.index&&(d=g.getX(d),h=g.getX(h),m=g.getX(m));const{position:x,normal:E,uv:T,uv1:S}=n.attributes;if(Array.isArray(e)){const y=r*3;for(let b=0,D=p.length;b<D;b++){const{start:w,count:C,materialIndex:P}=p[b];if(y>=w&&y<w+C){const F=V_(e[P]),A=H_(t,x,E,T,S,d,h,m,F,o,c);if(A)if(A.faceIndex=r,A.face.materialIndex=P,a)a.push(A);else return A}}}else{const y=V_(e),b=H_(t,x,E,T,S,d,h,m,y,o,c);if(b)if(b.faceIndex=r,b.face.materialIndex=0,a)a.push(b);else return b}return null}function bn(n,e,t,r){const a=n.a,o=n.b,c=n.c;let u=e,d=e+1,h=e+2;t&&(u=t.getX(u),d=t.getX(d),h=t.getX(h)),a.x=r.getX(u),a.y=r.getY(u),a.z=r.getZ(u),o.x=r.getX(d),o.y=r.getY(d),o.z=r.getZ(d),c.x=r.getX(h),c.y=r.getY(h),c.z=r.getZ(h)}function e2(n,e,t,r,a,o,c,u){const{geometry:d,_indirectBuffer:h}=n;for(let m=r,g=r+a;m<g;m++)xf(d,e,t,m,o,c,u)}function t2(n,e,t,r,a,o,c){const{geometry:u,_indirectBuffer:d}=n;let h=1/0,m=null;for(let g=r,p=r+a;g<p;g++){let x;x=xf(u,e,t,g,null,o,c),x&&x.distance<h&&(m=x,h=x.distance)}return m}function n2(n,e,t,r,a,o,c){const{geometry:u}=t,{index:d}=u,h=u.attributes.position;for(let m=n,g=e+n;m<g;m++){let p;if(p=m,bn(c,p*3,d,h),c.needsUpdate=!0,r(c,p,a,o))return!0}return!1}function i2(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,r=t.index?t.index.array:null,a=t.attributes.position;let o,c,u,d,h=0;const m=n._roots;for(let p=0,x=m.length;p<x;p++)o=m[p],c=new Uint32Array(o),u=new Uint16Array(o),d=new Float32Array(o),g(0,h),h+=o.byteLength;function g(p,x,E=!1){const T=p*2;if(En(T,u)){const S=Bn(p,c),y=ri(T,u);let b=1/0,D=1/0,w=1/0,C=-1/0,P=-1/0,F=-1/0;for(let A=3*S,U=3*(S+y);A<U;A++){let O=r[A];const k=a.getX(O),I=a.getY(O),X=a.getZ(O);k<b&&(b=k),k>C&&(C=k),I<D&&(D=I),I>P&&(P=I),X<w&&(w=X),X>F&&(F=X)}return d[p+0]!==b||d[p+1]!==D||d[p+2]!==w||d[p+3]!==C||d[p+4]!==P||d[p+5]!==F?(d[p+0]=b,d[p+1]=D,d[p+2]=w,d[p+3]=C,d[p+4]=P,d[p+5]=F,!0):!1}else{const S=Nn(p),y=Un(p,c);let b=E,D=!1,w=!1;if(e){if(!b){const O=S/An+x/Ui,k=y/An+x/Ui;D=e.has(O),w=e.has(k),b=!D&&!w}}else D=!0,w=!0;const C=b||D,P=b||w;let F=!1;C&&(F=g(S,x,b));let A=!1;P&&(A=g(y,x,b));const U=F||A;if(U)for(let O=0;O<3;O++){const k=S+O,I=y+O,X=d[k],V=d[k+3],q=d[I],ee=d[I+3];d[p+O]=X<q?X:q,d[p+O+3]=V>ee?V:ee}return U}}}function $i(n,e,t,r,a){let o,c,u,d,h,m;const g=1/t.direction.x,p=1/t.direction.y,x=1/t.direction.z,E=t.origin.x,T=t.origin.y,S=t.origin.z;let y=e[n],b=e[n+3],D=e[n+1],w=e[n+3+1],C=e[n+2],P=e[n+3+2];return g>=0?(o=(y-E)*g,c=(b-E)*g):(o=(b-E)*g,c=(y-E)*g),p>=0?(u=(D-T)*p,d=(w-T)*p):(u=(w-T)*p,d=(D-T)*p),o>d||u>c||((u>o||isNaN(o))&&(o=u),(d<c||isNaN(c))&&(c=d),x>=0?(h=(C-S)*x,m=(P-S)*x):(h=(P-S)*x,m=(C-S)*x),o>m||h>c)?!1:((h>o||o!==o)&&(o=h),(m<c||c!==c)&&(c=m),o<=a&&c>=r)}function r2(n,e,t,r,a,o,c,u){const{geometry:d,_indirectBuffer:h}=n;for(let m=r,g=r+a;m<g;m++){let p=h?h[m]:m;xf(d,e,t,p,o,c,u)}}function s2(n,e,t,r,a,o,c){const{geometry:u,_indirectBuffer:d}=n;let h=1/0,m=null;for(let g=r,p=r+a;g<p;g++){let x;x=xf(u,e,t,d?d[g]:g,null,o,c),x&&x.distance<h&&(m=x,h=x.distance)}return m}function a2(n,e,t,r,a,o,c){const{geometry:u}=t,{index:d}=u,h=u.attributes.position;for(let m=n,g=e+n;m<g;m++){let p;if(p=t.resolveTriangleIndex(m),bn(c,p*3,d,h),c.needsUpdate=!0,r(c,p,a,o))return!0}return!1}function o2(n,e,t,r,a,o,c){Jt.setBuffer(n._roots[e]),$i(0,Jt.float32Array,r,o,c)&&Xp(0,n,t,r,a,o,c),Jt.clearBuffer()}function Xp(n,e,t,r,a,o,c){const{float32Array:u,uint16Array:d,uint32Array:h}=Jt,m=n*2;if(En(m,d)){const p=Bn(n,h),x=ri(m,d);e2(e,t,r,p,x,a,o,c)}else{const p=Nn(n);$i(p,u,r,o,c)&&Xp(p,e,t,r,a,o,c);const x=Un(n,h);$i(x,u,r,o,c)&&Xp(x,e,t,r,a,o,c)}}const l2=["x","y","z"];function c2(n,e,t,r,a,o){Jt.setBuffer(n._roots[e]);let c=null;return $i(0,Jt.float32Array,r,a,o)&&(c=$p(0,n,t,r,a,o)),Jt.clearBuffer(),c}function $p(n,e,t,r,a,o){const{float32Array:c,uint16Array:u,uint32Array:d}=Jt;let h=n*2;if(En(h,u)){const g=Bn(n,d),p=ri(h,u);return t2(e,t,r,g,p,a,o)}else{const g=bm(n,d),p=l2[g],E=r.direction[p]>=0;let T,S;E?(T=Nn(n),S=Un(n,d)):(T=Un(n,d),S=Nn(n));const b=$i(T,c,r,a,o)?$p(T,e,t,r,a,o):null;if(b){const C=b.point[p];if(E?C<=c[S+g]:C>=c[S+g+3])return b}const w=$i(S,c,r,a,o)?$p(S,e,t,r,a,o):null;return b&&w?b.distance<=w.distance?b:w:b||w||null}}const Cu=new Wn,po=new pr,mo=new pr,wl=new $t,B_=new pi,Ru=new pi;function u2(n,e,t,r){Jt.setBuffer(n._roots[e]);const a=qp(0,n,t,r);return Jt.clearBuffer(),a}function qp(n,e,t,r,a=null){const{float32Array:o,uint16Array:c,uint32Array:u}=Jt;let d=n*2;if(a===null&&(t.boundingBox||t.computeBoundingBox(),B_.set(t.boundingBox.min,t.boundingBox.max,r),a=B_),En(d,c)){const m=e.geometry,g=m.index,p=m.attributes.position,x=t.index,E=t.attributes.position,T=Bn(n,u),S=ri(d,c);if(wl.copy(r).invert(),t.boundsTree)return xn(n,o,Ru),Ru.matrix.copy(wl),Ru.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:b=>Ru.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(r),b.b.applyMatrix4(r),b.c.applyMatrix4(r),b.needsUpdate=!0;for(let D=T*3,w=(S+T)*3;D<w;D+=3)if(bn(mo,D,g,p),mo.needsUpdate=!0,b.intersectsTriangle(mo))return!0;return!1}});{const y=_f(t);for(let b=T*3,D=(S+T)*3;b<D;b+=3){bn(po,b,g,p),po.a.applyMatrix4(wl),po.b.applyMatrix4(wl),po.c.applyMatrix4(wl),po.needsUpdate=!0;for(let w=0,C=y*3;w<C;w+=3)if(bn(mo,w,x,E),mo.needsUpdate=!0,po.intersectsTriangle(mo))return!0}}}else{const m=Nn(n),g=Un(n,u);return xn(m,o,Cu),!!(a.intersectsBox(Cu)&&qp(m,e,t,r,a)||(xn(g,o,Cu),a.intersectsBox(Cu)&&qp(g,e,t,r,a)))}}const Pu=new $t,Wh=new pi,Tl=new pi,f2=new G,d2=new G,h2=new G,p2=new G;function m2(n,e,t,r={},a={},o=0,c=1/0){e.boundingBox||e.computeBoundingBox(),Wh.set(e.boundingBox.min,e.boundingBox.max,t),Wh.needsUpdate=!0;const u=n.geometry,d=u.attributes.position,h=u.index,m=e.attributes.position,g=e.index,p=Xi.getPrimitive(),x=Xi.getPrimitive();let E=f2,T=d2,S=null,y=null;a&&(S=h2,y=p2);let b=1/0,D=null,w=null;return Pu.copy(t).invert(),Tl.matrix.copy(Pu),n.shapecast({boundsTraverseOrder:C=>Wh.distanceToBox(C),intersectsBounds:(C,P,F)=>F<b&&F<c?(P&&(Tl.min.copy(C.min),Tl.max.copy(C.max),Tl.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree)return e.boundsTree.shapecast({boundsTraverseOrder:A=>Tl.distanceToBox(A),intersectsBounds:(A,U,O)=>O<b&&O<c,intersectsRange:(A,U)=>{for(let O=A,k=A+U;O<k;O++){bn(x,3*O,g,m),x.a.applyMatrix4(t),x.b.applyMatrix4(t),x.c.applyMatrix4(t),x.needsUpdate=!0;for(let I=C,X=C+P;I<X;I++){bn(p,3*I,h,d),p.needsUpdate=!0;const V=p.distanceToTriangle(x,E,S);if(V<b&&(T.copy(E),y&&y.copy(S),b=V,D=I,w=O),V<o)return!0}}}});{const F=_f(e);for(let A=0,U=F;A<U;A++){bn(x,3*A,g,m),x.a.applyMatrix4(t),x.b.applyMatrix4(t),x.c.applyMatrix4(t),x.needsUpdate=!0;for(let O=C,k=C+P;O<k;O++){bn(p,3*O,h,d),p.needsUpdate=!0;const I=p.distanceToTriangle(x,E,S);if(I<b&&(T.copy(E),y&&y.copy(S),b=I,D=O,w=A),I<o)return!0}}}}}),Xi.releasePrimitive(p),Xi.releasePrimitive(x),b===1/0?null:(r.point?r.point.copy(T):r.point=T.clone(),r.distance=b,r.faceIndex=D,a&&(a.point?a.point.copy(y):a.point=y.clone(),a.point.applyMatrix4(Pu),T.applyMatrix4(Pu),a.distance=T.sub(a.point).length(),a.faceIndex=w),r)}function g2(n,e=null){e&&Array.isArray(e)&&(e=new Set(e));const t=n.geometry,r=t.index?t.index.array:null,a=t.attributes.position;let o,c,u,d,h=0;const m=n._roots;for(let p=0,x=m.length;p<x;p++)o=m[p],c=new Uint32Array(o),u=new Uint16Array(o),d=new Float32Array(o),g(0,h),h+=o.byteLength;function g(p,x,E=!1){const T=p*2;if(En(T,u)){const S=Bn(p,c),y=ri(T,u);let b=1/0,D=1/0,w=1/0,C=-1/0,P=-1/0,F=-1/0;for(let A=S,U=S+y;A<U;A++){const O=3*n.resolveTriangleIndex(A);for(let k=0;k<3;k++){let I=O+k;I=r?r[I]:I;const X=a.getX(I),V=a.getY(I),q=a.getZ(I);X<b&&(b=X),X>C&&(C=X),V<D&&(D=V),V>P&&(P=V),q<w&&(w=q),q>F&&(F=q)}}return d[p+0]!==b||d[p+1]!==D||d[p+2]!==w||d[p+3]!==C||d[p+4]!==P||d[p+5]!==F?(d[p+0]=b,d[p+1]=D,d[p+2]=w,d[p+3]=C,d[p+4]=P,d[p+5]=F,!0):!1}else{const S=Nn(p),y=Un(p,c);let b=E,D=!1,w=!1;if(e){if(!b){const O=S/An+x/Ui,k=y/An+x/Ui;D=e.has(O),w=e.has(k),b=!D&&!w}}else D=!0,w=!0;const C=b||D,P=b||w;let F=!1;C&&(F=g(S,x,b));let A=!1;P&&(A=g(y,x,b));const U=F||A;if(U)for(let O=0;O<3;O++){const k=S+O,I=y+O,X=d[k],V=d[k+3],q=d[I],ee=d[I+3];d[p+O]=X<q?X:q,d[p+O+3]=V>ee?V:ee}return U}}}function v2(n,e,t,r,a,o,c){Jt.setBuffer(n._roots[e]),$i(0,Jt.float32Array,r,o,c)&&Yp(0,n,t,r,a,o,c),Jt.clearBuffer()}function Yp(n,e,t,r,a,o,c){const{float32Array:u,uint16Array:d,uint32Array:h}=Jt,m=n*2;if(En(m,d)){const p=Bn(n,h),x=ri(m,d);r2(e,t,r,p,x,a,o,c)}else{const p=Nn(n);$i(p,u,r,o,c)&&Yp(p,e,t,r,a,o,c);const x=Un(n,h);$i(x,u,r,o,c)&&Yp(x,e,t,r,a,o,c)}}const _2=["x","y","z"];function x2(n,e,t,r,a,o){Jt.setBuffer(n._roots[e]);let c=null;return $i(0,Jt.float32Array,r,a,o)&&(c=jp(0,n,t,r,a,o)),Jt.clearBuffer(),c}function jp(n,e,t,r,a,o){const{float32Array:c,uint16Array:u,uint32Array:d}=Jt;let h=n*2;if(En(h,u)){const g=Bn(n,d),p=ri(h,u);return s2(e,t,r,g,p,a,o)}else{const g=bm(n,d),p=_2[g],E=r.direction[p]>=0;let T,S;E?(T=Nn(n),S=Un(n,d)):(T=Un(n,d),S=Nn(n));const b=$i(T,c,r,a,o)?jp(T,e,t,r,a,o):null;if(b){const C=b.point[p];if(E?C<=c[S+g]:C>=c[S+g+3])return b}const w=$i(S,c,r,a,o)?jp(S,e,t,r,a,o):null;return b&&w?b.distance<=w.distance?b:w:b||w||null}}const Lu=new Wn,go=new pr,vo=new pr,Al=new $t,G_=new pi,Du=new pi;function y2(n,e,t,r){Jt.setBuffer(n._roots[e]);const a=Kp(0,n,t,r);return Jt.clearBuffer(),a}function Kp(n,e,t,r,a=null){const{float32Array:o,uint16Array:c,uint32Array:u}=Jt;let d=n*2;if(a===null&&(t.boundingBox||t.computeBoundingBox(),G_.set(t.boundingBox.min,t.boundingBox.max,r),a=G_),En(d,c)){const m=e.geometry,g=m.index,p=m.attributes.position,x=t.index,E=t.attributes.position,T=Bn(n,u),S=ri(d,c);if(Al.copy(r).invert(),t.boundsTree)return xn(n,o,Du),Du.matrix.copy(Al),Du.needsUpdate=!0,t.boundsTree.shapecast({intersectsBounds:b=>Du.intersectsBox(b),intersectsTriangle:b=>{b.a.applyMatrix4(r),b.b.applyMatrix4(r),b.c.applyMatrix4(r),b.needsUpdate=!0;for(let D=T,w=S+T;D<w;D++)if(bn(vo,3*e.resolveTriangleIndex(D),g,p),vo.needsUpdate=!0,b.intersectsTriangle(vo))return!0;return!1}});{const y=_f(t);for(let b=T,D=S+T;b<D;b++){const w=e.resolveTriangleIndex(b);bn(go,3*w,g,p),go.a.applyMatrix4(Al),go.b.applyMatrix4(Al),go.c.applyMatrix4(Al),go.needsUpdate=!0;for(let C=0,P=y*3;C<P;C+=3)if(bn(vo,C,x,E),vo.needsUpdate=!0,go.intersectsTriangle(vo))return!0}}}else{const m=Nn(n),g=Un(n,u);return xn(m,o,Lu),!!(a.intersectsBox(Lu)&&Kp(m,e,t,r,a)||(xn(g,o,Lu),a.intersectsBox(Lu)&&Kp(g,e,t,r,a)))}}const Nu=new $t,Xh=new pi,bl=new pi,S2=new G,M2=new G,E2=new G,w2=new G;function T2(n,e,t,r={},a={},o=0,c=1/0){e.boundingBox||e.computeBoundingBox(),Xh.set(e.boundingBox.min,e.boundingBox.max,t),Xh.needsUpdate=!0;const u=n.geometry,d=u.attributes.position,h=u.index,m=e.attributes.position,g=e.index,p=Xi.getPrimitive(),x=Xi.getPrimitive();let E=S2,T=M2,S=null,y=null;a&&(S=E2,y=w2);let b=1/0,D=null,w=null;return Nu.copy(t).invert(),bl.matrix.copy(Nu),n.shapecast({boundsTraverseOrder:C=>Xh.distanceToBox(C),intersectsBounds:(C,P,F)=>F<b&&F<c?(P&&(bl.min.copy(C.min),bl.max.copy(C.max),bl.needsUpdate=!0),!0):!1,intersectsRange:(C,P)=>{if(e.boundsTree){const F=e.boundsTree;return F.shapecast({boundsTraverseOrder:A=>bl.distanceToBox(A),intersectsBounds:(A,U,O)=>O<b&&O<c,intersectsRange:(A,U)=>{for(let O=A,k=A+U;O<k;O++){const I=F.resolveTriangleIndex(O);bn(x,3*I,g,m),x.a.applyMatrix4(t),x.b.applyMatrix4(t),x.c.applyMatrix4(t),x.needsUpdate=!0;for(let X=C,V=C+P;X<V;X++){const q=n.resolveTriangleIndex(X);bn(p,3*q,h,d),p.needsUpdate=!0;const ee=p.distanceToTriangle(x,E,S);if(ee<b&&(T.copy(E),y&&y.copy(S),b=ee,D=X,w=O),ee<o)return!0}}}})}else{const F=_f(e);for(let A=0,U=F;A<U;A++){bn(x,3*A,g,m),x.a.applyMatrix4(t),x.b.applyMatrix4(t),x.c.applyMatrix4(t),x.needsUpdate=!0;for(let O=C,k=C+P;O<k;O++){const I=n.resolveTriangleIndex(O);bn(p,3*I,h,d),p.needsUpdate=!0;const X=p.distanceToTriangle(x,E,S);if(X<b&&(T.copy(E),y&&y.copy(S),b=X,D=O,w=A),X<o)return!0}}}}}),Xi.releasePrimitive(p),Xi.releasePrimitive(x),b===1/0?null:(r.point?r.point.copy(T):r.point=T.clone(),r.distance=b,r.faceIndex=D,a&&(a.point?a.point.copy(y):a.point=y.clone(),a.point.applyMatrix4(Nu),T.applyMatrix4(Nu),a.distance=T.sub(a.point).length(),a.faceIndex=w),r)}function W_(n,e,t){return n===null?null:(n.point.applyMatrix4(e.matrixWorld),n.distance=n.point.distanceTo(t.ray.origin),n.object=e,n)}const Uu=new pi,Fu=new pf,X_=new G,$_=new $t,q_=new G,$h=["getX","getY","getZ"];class sf extends $R{static serialize(e,t={}){t={cloneBuffers:!0,...t};const r=e.geometry,a=e._roots,o=e._indirectBuffer,c=r.getIndex(),u={version:1,roots:null,index:null,indirectBuffer:null};return t.cloneBuffers?(u.roots=a.map(d=>d.slice()),u.index=c?c.array.slice():null,u.indirectBuffer=o?o.slice():null):(u.roots=a,u.index=c?c.array:null,u.indirectBuffer=o),u}static deserialize(e,t,r={}){r={setIndex:!0,indirect:!!e.indirectBuffer,...r};const{index:a,roots:o,indirectBuffer:c}=e;e.version||(console.warn("MeshBVH.deserialize: Serialization format has been changed and will be fixed up. It is recommended to regenerate any stored serialized data."),d(o));const u=new sf(t,{...r,[Am]:!0});if(u._roots=o,u._indirectBuffer=c||null,r.setIndex){const h=t.getIndex();if(h===null){const m=new ai(e.index,1,!1);t.setIndex(m)}else h.array!==a&&(h.array.set(a),h.needsUpdate=!0)}return u;function d(h){for(let m=0;m<h.length;m++){const g=h[m],p=new Uint32Array(g),x=new Uint16Array(g);for(let E=0,T=g.byteLength/Ui;E<T;E++){const S=An*E,y=2*S;En(y,x)||(p[S+6]=p[S+6]/An-E)}}}}get primitiveStride(){return 3}get resolveTriangleIndex(){return this.resolvePrimitiveIndex}constructor(e,t={}){t.maxLeafTris&&(console.warn('MeshBVH: "maxLeafTris" option has been deprecated. Use "targetLeafSize", instead.'),t={...t,targetLeafSize:t.maxLeafTris}),super(e,t)}shiftTriangleOffsets(e){return super.shiftPrimitiveOffsets(e)}writePrimitiveBounds(e,t,r){const a=this.geometry,o=this._indirectBuffer,c=a.attributes.position,u=a.index?a.index.array:null,h=(o?o[e]:e)*3;let m=h+0,g=h+1,p=h+2;u&&(m=u[m],g=u[g],p=u[p]);for(let x=0;x<3;x++){const E=c[$h[x]](m),T=c[$h[x]](g),S=c[$h[x]](p);let y=E;T<y&&(y=T),S<y&&(y=S);let b=E;T>b&&(b=T),S>b&&(b=S),t[r+x]=y,t[r+x+3]=b}return t}computePrimitiveBounds(e,t,r){const a=this.geometry,o=this._indirectBuffer,c=a.attributes.position,u=a.index?a.index.array:null,d=c.normalized;if(e<0||t+e-r.offset>r.length/6)throw new Error("MeshBVH: compute triangle bounds range is invalid.");const h=c.array,m=c.offset||0;let g=3;c.isInterleavedBufferAttribute&&(g=c.data.stride);const p=["getX","getY","getZ"],x=r.offset;for(let E=e,T=e+t;E<T;E++){const y=(o?o[E]:E)*3,b=(E-x)*6;let D=y+0,w=y+1,C=y+2;u&&(D=u[D],w=u[w],C=u[C]),d||(D=D*g+m,w=w*g+m,C=C*g+m);for(let P=0;P<3;P++){let F,A,U;d?(F=c[p[P]](D),A=c[p[P]](w),U=c[p[P]](C)):(F=h[D+P],A=h[w+P],U=h[C+P]);let O=F;A<O&&(O=A),U<O&&(O=U);let k=F;A>k&&(k=A),U>k&&(k=U);const I=(k-O)/2,X=P*2;r[b+X+0]=O+I,r[b+X+1]=I+(Math.abs(O)+I)*$u}}return r}raycastObject3D(e,t,r=[]){const{material:a}=e;if(a===void 0)return;$_.copy(e.matrixWorld).invert(),Fu.copy(t.ray).applyMatrix4($_),q_.setFromMatrixScale(e.matrixWorld),X_.copy(Fu.direction).multiply(q_);const o=X_.length(),c=t.near/o,u=t.far/o;if(t.firstHitOnly===!0){let d=this.raycastFirst(Fu,a,c,u);d=W_(d,e,t),d&&r.push(d)}else{const d=this.raycast(Fu,a,c,u);for(let h=0,m=d.length;h<m;h++){const g=W_(d[h],e,t);g&&r.push(g)}}return r}refit(e=null){return(this.indirect?g2:i2)(this,e)}raycast(e,t=ts,r=0,a=1/0){const o=this._roots,c=[],u=this.indirect?v2:o2;for(let d=0,h=o.length;d<h;d++)u(this,d,t,e,c,r,a);return c}raycastFirst(e,t=ts,r=0,a=1/0){const o=this._roots;let c=null;const u=this.indirect?x2:c2;for(let d=0,h=o.length;d<h;d++){const m=u(this,d,t,e,r,a);m!=null&&(c==null||m.distance<c.distance)&&(c=m)}return c}intersectsGeometry(e,t){let r=!1;const a=this._roots,o=this.indirect?y2:u2;for(let c=0,u=a.length;c<u&&(r=o(this,c,e,t),!r);c++);return r}shapecast(e){const t=Xi.getPrimitive(),r=super.shapecast({...e,intersectsPrimitive:e.intersectsTriangle,scratchPrimitive:t,iterate:this.indirect?a2:n2});return Xi.releasePrimitive(t),r}bvhcast(e,t,r){let{intersectsRanges:a,intersectsTriangles:o}=r;const c=Xi.getPrimitive(),u=this.geometry.index,d=this.geometry.attributes.position,h=this.indirect?E=>{const T=this.resolveTriangleIndex(E);bn(c,T*3,u,d)}:E=>{bn(c,E*3,u,d)},m=Xi.getPrimitive(),g=e.geometry.index,p=e.geometry.attributes.position,x=e.indirect?E=>{const T=e.resolveTriangleIndex(E);bn(m,T*3,g,p)}:E=>{bn(m,E*3,g,p)};if(o){if(!(e instanceof sf))throw new Error('MeshBVH: "intersectsTriangles" callback can only be used with another MeshBVH.');const E=(T,S,y,b,D,w,C,P)=>{for(let F=y,A=y+b;F<A;F++){x(F),m.a.applyMatrix4(t),m.b.applyMatrix4(t),m.c.applyMatrix4(t),m.needsUpdate=!0;for(let U=T,O=T+S;U<O;U++)if(h(U),c.needsUpdate=!0,o(c,m,U,F,D,w,C,P))return!0}return!1};if(a){const T=a;a=function(S,y,b,D,w,C,P,F){return T(S,y,b,D,w,C,P,F)?!0:E(S,y,b,D,w,C,P,F)}}else a=E}return super.bvhcast(e,t,{intersectsRanges:a})}intersectsBox(e,t){return Uu.set(e.min,e.max,t),Uu.needsUpdate=!0,this.shapecast({intersectsBounds:r=>Uu.intersectsBox(r),intersectsTriangle:r=>Uu.intersectsTriangle(r)})}intersectsSphere(e){return this.shapecast({intersectsBounds:t=>e.intersectsBox(t),intersectsTriangle:t=>t.intersectsSphere(e)})}closestPointToGeometry(e,t,r={},a={},o=0,c=1/0){return(this.indirect?T2:m2)(this,e,t,r,a,o,c)}closestPointToPoint(e,t={},r=0,a=1/0){return ZR(this,e,t,r,a)}}const ua="../../",qh={label:"PR #28 (viewer-compare)",sha:"15e3f1d507820e5718526e774eff590f0a148d5b".slice(0,7)},mn=new URLSearchParams(location.search),Yh=(location.pathname.match(/\/(pr\/\d+\/)/)||[])[1]||"",Y_=n=>!n||n==="main"?"":n.replace(/^\/+|\/+$/g,"")+"/",af=n=>(n.match(/pr\/(\d+)/)||[])[1],A2=n=>n.path?`#${af(n.path)} ${n.title||n.label}`:"main",Dl=n=>n?`#${af(n)}`:"main",ca=n=>n.replace(/^N2_/,"").replace(/_/g," "),lr={added:"#32a467",removed:"#e76a6e",changed:"#f0b726",moved:"#4c90f0",same:"#738091"},b2=3,C2=22,R2=["N2_keeper","N2_armature"],P2={Z:{label:"Straight pull (R3)",parts:{N2_adapter:"Z",N2_receiver:"Z",N2_keeper:"Z"}},Z_distal_lost:{label:"Straight pull, distal roof lost",parts:{N2_adapter:"Z",N2_receiver:"Z_distal_lost",N2_keeper:"Z_distal_lost"}},XZ90:{label:"Side pull 90° (outside R3)",parts:{N2_adapter:"XZ90",N2_receiver:"XZ90"}}};function hy(n,e){if(n>1)return e.setRGB(.85,.1,.85);const t=[[.19,.07,.23],[.16,.47,.93],[.1,.84,.66],[.64,.99,.24],[.98,.73,.22],[.86,.22,.05]],r=Math.max(0,n)*(t.length-1),a=Math.min(Math.floor(r),t.length-2),o=r-a;return e.setRGB(...t[a].map((c,u)=>c+(t[a+1][u]-c)*o))}const L2=`linear-gradient(90deg, ${[0,.2,.4,.6,.8,1].map(n=>"#"+hy(n,new At).getHexString()).join(",")})`;function D2(n){const e=n.attributes.position,t=e.count;n.computeBoundingBox();const r=n.boundingBox;let a=0,o=0,c=0;for(let u=0;u<t;u++)a+=e.getX(u),o+=e.getY(u),c+=e.getZ(u);return{tris:t/3,size:r.getSize(new G).toArray(),c:[a/t,o/t,c/t],bc:r.getCenter(new G).toArray(),key:[t/3,...r.min.toArray(),...r.max.toArray(),a/t,o/t,c/t].map(u=>u.toFixed(2)).join(",")}}async function jh(n,e,t,r=1){const a=new oi;a.setAttribute("position",e.attributes.position.clone());const o=new sf(a),c=n.attributes.position,u=a.attributes.position,d=a.index,h=new Float32Array(Math.ceil(c.count/r)),m=new G,g={point:new G},p=new Dn,x=new G,E=new G(...t);for(let b=0,D=0;b<c.count;b+=r,D++){m.fromBufferAttribute(c,b).add(E),o.closestPointToPoint(m,g);const w=g.faceIndex*3,C=P=>d?d.getX(w+P):w+P;p.setFromAttributeAndIndices(u,C(0),C(1),C(2)).getNormal(x),h[D]=Math.sign(m.clone().sub(g.point).dot(x))*g.distance,D%2e4===19999&&await new Promise(P=>setTimeout(P))}let T=0,S=0,y=0;for(const b of h)T=Math.max(T,b),S=Math.min(S,b),y+=Math.abs(b);return{d:h,max:T,min:S,mean:y/h.length}}const Zp=new At("#8a939f"),py=new At("#32a467"),Jp=new At("#e76a6e");function N2(n,e,t,r){return Math.abs(n)<=e?r.copy(Zp):r.copy(Zp).lerp(n>0?py:Jp,Math.min(1,.35+.65*(Math.abs(n)-e)/Math.max(t-e,1e-6)))}const U2="linear-gradient(90deg, #e76a6e, #8a939f 42%, #8a939f 58%, #32a467)",F2=n=>{const e=[...n].sort((t,r)=>t-r);return e.length?e[e.length>>1]:0},Ou=n=>[n.tris,...n.size.map(e=>e.toFixed(2))].join(",");function j_(n,e){const t=n==null?void 0:n.motion,r=c=>c*c*(3-2*c),a=t?t.a_latch+(t.a_release-t.a_latch)*r(Math.min(e,1)):0,o=t?t.r*(Math.cos(a*Math.PI/180)-Math.cos(t.a_latch*Math.PI/180)):0;return{mo:t,alpha:a,kx:o}}function K_(n,e="#fff"){const t=document.createElement("canvas"),r=t.getContext("2d");r.font="bold 28px sans-serif";const a=Math.ceil(r.measureText(n).width)+28;t.width=a,t.height=48,r.fillStyle="rgba(17,20,24,0.85)",r.fillRect(0,0,a,48),r.fillStyle=e,r.font="bold 28px sans-serif",r.textBaseline="middle",r.fillText(n,14,25);const o=new Vw(new Yx({map:new Xw(t),depthTest:!1,transparent:!0,sizeAttenuation:!1}));return o.scale.set(.024*a/48,.024,1),o.center.set(.5,0),o.renderOrder=11,o}function O2(n){const e=Re.useRef(null);if(!e.current){const t=new Nw;t.add(new rT(16777215,3359829,2.2));const r=new Jv(16777215,1.6);r.position.set(60,-40,90),t.add(r);const a=new Jv(16777215,.6);a.position.set(-50,60,-30),t.add(a);const o=new Wi(35,1,.1,3e3);o.up.set(0,0,1),e.current={scene:t,cam:o,sets:{A:new Map,B:new Map},fea:new Map,markers:new Pl},t.add(e.current.markers)}return Re.useEffect(()=>{const t=e.current,r=new uR({antialias:!0,preserveDrawingBuffer:!0});r.setPixelRatio(devicePixelRatio),r.setClearColor(1316636),n.current.appendChild(r.domElement);const a=new pR(t.cam,r.domElement);Object.assign(a,{enableDamping:!0,dampingFactor:.12,rotateSpeed:.9,zoomToCursor:!0,screenSpacePanning:!0}),a.mouseButtons={LEFT:Jr.ROTATE,MIDDLE:Jr.PAN,RIGHT:Jr.PAN},t.oc=a;let o=!0;const c=new cT;r.domElement.addEventListener("dblclick",d=>{const h=r.domElement.getBoundingClientRect();c.setFromCamera(new st((d.clientX-h.left)/h.width*2-1,-(d.clientY-h.top)/h.height*2+1),t.cam);const m=c.intersectObjects([...t.sets.A.values(),...t.sets.B.values(),...t.fea.values()].filter(g=>g.visible))[0];if(m){const g=m.point.clone().sub(a.target);a.target.add(g),t.cam.position.add(g)}});const u=()=>{var m;if(!o)return;requestAnimationFrame(u),(m=t.tick)==null||m.call(t),a.update();const d=n.current.clientWidth,h=n.current.clientHeight;(r.domElement.width!==Math.floor(d*r.getPixelRatio())||r.domElement.height!==Math.floor(h*r.getPixelRatio()))&&r.setSize(d,h),t.cam.aspect=d/h,t.cam.updateProjectionMatrix(),r.render(t.scene,t.cam)};return u(),()=>{o=!1,r.dispose(),r.domElement.remove()}},[]),e.current}function Z_(n,e,t,r){const a=e.getCenter(new G),o=e.getSize(new G).length()*2.1+10,c={iso:r||[.75,-1,.65],front:[0,-1,1e-4],top:[1e-4,-1e-4,1],side:[1,0,1e-4]}[t];n.oc.target.copy(a),n.cam.position.copy(a).add(new G(...c).normalize().multiplyScalar(o)),n.oc.update()}const I2=n=>new Wn(new G(...n.min),new G(...n.max));function J_(n,e,t,r,a,o){const[c,u]=Re.useState(null),[d,h]=Re.useState(null),[m,g]=Re.useState("");return Re.useEffect(()=>{const p=n.sets[e];for(const T of p.values())n.scene.remove(T),T.geometry.dispose();if(p.clear(),u(null),h(null),g(""),t===null||!r)return;const x=`${t}|${r}`;n["tag"+e]=x;const E=`${t}model/${r}/`;fetch(`${E}manifest.json`,{cache:"no-store"}).then(T=>{if(!T.ok)throw new Error(`HTTP ${T.status}`);return T.json()}).then(T=>{if(n["tag"+e]!==x)return;u(T);const S=new fR;T.parts.forEach(y=>S.load(`${E}${y.stl}`,b=>{if(n["tag"+e]!==x)return;const D=a!=null&&a.p14?(b.computeVertexNormals(),b):dR(b,Math.PI/7),w=y.kind==="purchased"&&/screw|spline/.test(y.id),C=new Ni(D,new zp({color:y.color,metalness:w?.6:.1,roughness:w?.35:.6,side:Li}));C.userData={p:y,sig:D2(b),c0:new At(y.color),key:e},p.set(y.id,C),n.scene.add(C),o()}))}).catch(T=>n["tag"+e]===x&&g(`${r} not published at ${Dl(t.slice(ua.length))} (${T.message})`)),(a!=null&&a.p14||a!=null&&a.fea)&&fetch(`${a!=null&&a.p14?t+"fea/":E+"fea/"}index.json`,{cache:"no-store"}).then(T=>T.json()).then(T=>n["tag"+e]===x&&h(T)).catch(()=>{})},[t,r]),{man:c,fea:d,err:m}}function k2(){var In,Nr,ss,Vs;const n=Re.useRef(),e=O2(n),[t,r]=Re.useState([{path:"",label:"main",title:""}]),[a,o]=Re.useState(Y_(mn.get("base")??(Yh?"":mn.get("compare")??""))),[c,u]=Re.useState(Y_(mn.get("prop")??(Yh||(mn.get("compare"),"")))),[d,h]=Re.useState(mn.get("view")||(Yh||mn.get("compare")?"overlay":"single")),[m,g]=Re.useState(mn.get("mode")==="fea"?"fea":"model"),[p,x]=Re.useState([]),[E,T]=Re.useState(mn.get("design")),[S,y]=Re.useState(Number(mn.get("explode")||0)),[b,D]=Re.useState(Number(mn.get("phase")||0)),[w,C]=Re.useState(!1),[P,F]=Re.useState({}),[A,U]=Re.useState(mn.get("focus")),[O,k]=Re.useState(mn.get("diffcolors")!=="0"),[I,X]=Re.useState(mn.get("changed")==="1"),[V,q]=Re.useState("Z"),[ee,ae]=Re.useState(Number(mn.get("load")||17.8)),[J,te]=Re.useState(mn.get("scale")!=="abs"),[ne,H]=Re.useState(mn.get("fade")!=="0"),[oe,Se]=Re.useState(!0),[ke,Be]=Re.useState(mn.get("devmap")!=="0"),[He,ue]=Re.useState(Number(mn.get("tol")||.05)),[he,Pe]=Re.useState(Number(mn.get("dscale")||1)),[Ke,Ge]=Re.useState(mn.get("onlydiff")==="1"),[pt,nn]=Re.useState(mn.get("removed")!=="0"),[mt,Nt]=Re.useState(mn.get("align")||"assembly"),[qt,bt]=Re.useState(0),[Yt,cn]=Re.useState(0),[vn,Bt]=Re.useState(0),en=()=>cn(fe=>fe+1),$=d!=="single";Re.useEffect(()=>{fetch(`${ua}versions.json`,{cache:"no-store"}).then(fe=>fe.json()).then(fe=>{fe=[...fe].sort((De,xe)=>(De.path?+af(De.path):1e9)-(xe.path?+af(xe.path):1e9)).reverse(),r(fe.length?fe:[{path:"",label:"main",title:""}])}).catch(()=>{})},[]),Re.useEffect(()=>{const fe=De=>fetch(`${De}model/designs.json`,{cache:"no-store"}).then(xe=>{if(!xe.ok)throw 0;return xe.json()});fe(ua+c).catch(()=>fe("")).then(De=>{x(De),T(xe=>{var it;return De.find(ut=>ut.id===xe)?xe:(it=De[De.length-1])==null?void 0:it.id})}).catch(()=>{})},[c]);const sn=p.find(fe=>fe.id===E),lt=J_(e,"B",ua+c,E,sn,en),z=J_(e,"A",$?ua+a:null,E,sn,en),R=lt.man,K=lt.fea,ce=sn==null?void 0:sn.p14;Re.useEffect(()=>{const fe=new URL(location.href),De=fe.searchParams;De.delete("compare");const xe=(it,ut,Mt)=>ut===Mt||ut===null?De.delete(it):De.set(it,ut);xe("design",E,null),xe("base",a?a.replace(/\/$/,""):"main",null),xe("prop",c?c.replace(/\/$/,""):"main",null),xe("view",d,"single"),xe("mode",m,"model"),xe("explode",S?String(S):null,null),xe("diffcolors",O?null:"0",null),xe("devmap",ke?null:"0",null),xe("tol",He===.05?null:String(He),null),xe("dscale",he===1?null:String(he),null),xe("onlydiff",Ke?"1":null,null),xe("removed",pt?null:"0",null),xe("align",mt,"assembly"),xe("focus",A,null),xe("changed",I?"1":null,null),history.replaceState(null,"",fe)},[E,a,c,d,m,S,O,I,ke,He,he,Ke,pt,mt,A]),Re.useEffect(()=>{for(const xe of e.fea.values())e.scene.remove(xe),xe.geometry.dispose();if(e.fea.clear(),e.peaked=!1,!K)return;const fe=ce?`${ua}${c}fea/`:`${ua}${c}model/${E}/fea/`,De=e.tagB;K.cases.forEach(xe=>fetch(`${fe}${xe.part}__${xe.case}.json`).then(it=>it.json()).then(it=>{if(De!==e.tagB)return;const ut=new oi;ut.setAttribute("position",new Cn(it.pos,3)),ut.setIndex(it.idx),ut.computeVertexNormals(),ut.setAttribute("color",new Cn(new Float32Array(it.pos.length),3));const Mt=new Ni(ut,new zp({vertexColors:!0,metalness:0,roughness:.75,side:Li}));let ht=0;for(let L=1;L<it.fi.length;L++)it.fi[L]>it.fi[ht]&&(ht=L);const xt=new G;ut.computeBoundingBox(),ut.boundingBox.getCenter(xt);const ft=new G().fromBufferAttribute(ut.attributes.position,ht),Ot=new G().fromBufferAttribute(ut.attributes.normal,ht);Ot.dot(ft.clone().sub(xt))<0&&Ot.negate(),it.peakV=ft.toArray(),it.peakN=Ot.normalize().toArray(),it.fiMax=it.fi[ht],Mt.userData={d:it,part:xe.part},Mt.visible=!1,e.fea.set(`${xe.part}__${xe.case}`,Mt),e.scene.add(Mt),Bt(L=>L+1)}))},[K]),Re.useEffect(()=>{if(!w)return;const fe=performance.now(),De=b>=2?0:b;let xe;const it=ut=>{const Mt=De+(ut-fe)/1600;D(Math.min(Mt,2)),Mt<2?xe=requestAnimationFrame(it):C(!1)};return xe=requestAnimationFrame(it),()=>cancelAnimationFrame(xe)},[w]);const me=Re.useMemo(()=>{const fe={};if(!$||!z.man||!lt.man)return fe;const De=[...e.sets.B].map(([Mt,ht])=>[Mt,ht,e.sets.A.get(Mt)]).filter(([,Mt,ht])=>ht),xe=De.filter(([,Mt,ht])=>Ou(ht.userData.sig)===Ou(Mt.userData.sig)),it=[0,1,2].map(Mt=>F2(xe.map(([,ht,xt])=>ht.userData.sig.c[Mt]-xt.userData.sig.c[Mt]))),ut=(Mt,ht,xt)=>[0,1,2].every(ft=>Math.abs(Mt.userData.sig.c[ft]-ht.userData.sig.c[ft]-xt[ft])<.02);for(const[Mt,ht,xt]of De)fe[Mt]=mt==="assembly"?ut(ht,xt,it)?it:[0,0,0]:mt==="none"?[0,0,0]:mt==="part"?[0,1,2].map(ft=>ht.userData.sig.bc[ft]-xt.userData.sig.bc[ft]):it;return fe._g=mt==="assembly"?it:[0,0,0],fe},[$,z.man,lt.man,Yt,mt]),Me=Re.useMemo(()=>{if(!$||!z.man||!lt.man)return null;const fe=[...new Set([...z.man.parts.map(xe=>xe.id),...lt.man.parts.map(xe=>xe.id)])],De={};for(const xe of fe){const it=e.sets.A.get(xe),ut=e.sets.B.get(xe),Mt=z.man.parts.some(se=>se.id===xe),ht=lt.man.parts.some(se=>se.id===xe),xt=me[xe]||[0,0,0],ft=it&&ut&&Ou(it.userData.sig)===Ou(ut.userData.sig),Ot=ft&&[xt,mt==="assembly"?[0,0,0]:xt].some(se=>[0,1,2].every(re=>Math.abs(ut.userData.sig.c[re]-it.userData.sig.c[re]-se[re])<.02)),L=Mt?ht?!it||!ut?"loading":Ot?"same":ft?"moved":"changed":"removed":"added",B=se=>se.map(re=>re.toFixed(1)).join("×");De[xe]={st:L,note:L==="changed"?`${B(it.userData.sig.size)} → ${B(ut.userData.sig.size)} mm · ${it.userData.sig.tris}→${ut.userData.sig.tris} tris`:L==="moved"?"same shape, new position":""}}return De},[$,z.man,lt.man,Yt,me]);Re.useEffect(()=>{if(!Me||!ke)return;let fe=!1;return e.dev=e.dev||{},(async()=>{var De;for(const[xe,it]of Object.entries(Me)){if(fe)return;if(it.st!=="changed")continue;const ut=e.sets.A.get(xe),Mt=e.sets.B.get(xe),ht=me[xe],xt=`${e.tagA}|${e.tagB}|${ht}`;if(!ut||!Mt||((De=e.dev[xe])==null?void 0:De.key)===xt)continue;let ft=ht;if(mt==="assembly"){const se=[[0,0,0],me._g,[0,1,2].map(Ae=>Mt.userData.sig.bc[Ae]-ut.userData.sig.bc[Ae])],re=Math.max(1,Math.floor(Mt.geometry.attributes.position.count/3e3));let ie=1/0;for(const Ae of se){const be=await jh(Mt.geometry,ut.geometry,Ae.map(Te=>-Te),re);be.mean<ie&&(ie=be.mean,ft=Ae)}}const Ot=ft.map(se=>-se),L=await jh(Mt.geometry,ut.geometry,Ot),B=await jh(ut.geometry,Mt.geometry,ft);if(fe)return;e.dev[xe]={key:xt,fwd:L,rev:B,off:ft},bt(se=>se+1)}})(),()=>{fe=!0}},[Me,ke]);const Oe=fe=>{var xe;const De=(xe=e.dev)==null?void 0:xe[fe];return De&&De.key===`${e.tagA}|${e.tagB}|${me[fe]}`?De:null},ge={added:0,removed:1,changed:2,moved:3,loading:4,same:5},_e=Me?Object.entries(Me).sort((fe,De)=>ge[fe[1].st]-ge[De[1].st]):[],ze=_e.filter(([,fe])=>!["same","loading"].includes(fe.st)).length,et=(K==null?void 0:K.groups)||P2,Ue=m==="fea"&&!$&&!!K,Fe=Ue&&et[V]?et[V].parts:{},Je=K?31/K.z_tds_MPa:1,ct=Math.max(1e-9,...[...e.fea.values()].filter(fe=>Fe[fe.userData.part]&&!P[fe.userData.part]).map(fe=>(fe.userData.d.fiMax||0)*ee*Je)),dt=J?ct:1,Z=K?Object.entries(Fe).map(([fe,De])=>K.cases.find(xe=>xe.part===fe&&xe.case===De)).filter(Boolean):[],Le=Z.reduce((fe,De)=>!fe||De.fail_N<fe.fail_N?De:fe,null),ve=K!=null&&K.cases?Math.max(60,Math.ceil(Math.min(...K.cases.map(fe=>fe.fail_N))*1.2)):60,Ie=()=>{const fe=Le&&e.fea.get(`${Le.part}__${Le.case}`);if(!(fe!=null&&fe.userData.d.peakV))return;const De=new G(...fe.userData.d.peakV).add(fe.position),xe=new G(...fe.userData.d.peakN),it=xe.clone().add(new G(0,0,xe.z>.7?0:.35)).normalize();e.oc.target.copy(De),e.cam.position.copy(De).add(it.multiplyScalar(70)),e.oc.update()};Re.useEffect(()=>{var fe;Le&&Ue&&mn.get("peak")==="1"&&!e.peaked&&e.fea.get(`${Le.part}__${Le.case}`)&&(e.peaked=!0,(fe=e.tick)==null||fe.call(e),Ie())},[vn,Le,Ue]);const Ve=((R==null?void 0:R.iso)||((In=z.man)==null?void 0:In.iso)||[.75,-1])[1]>0?1:-1,ye=Math.max((R==null?void 0:R.bounds.size[0])||0,((Nr=z.man)==null?void 0:Nr.bounds.size[0])||0),tt=d==="side"?Ve*ye*.68:0,Ze=d==="side"?-Ve*ye*.68:0,Ft=(fe="iso")=>{const De=[lt.man&&[lt.man,Ze],$&&z.man&&[z.man,tt]].filter(Boolean);if(!De.length)return;const xe=new Wn;De.forEach(([it,ut])=>xe.union(I2(it.bounds).translate(new G(ut,0,0)))),Z_(e,xe,fe,(lt.man||z.man).iso)};Re.useEffect(()=>{Ft()},[d,!!lt.man,!!z.man,E]);const Ut=fe=>{var xe;if(A===fe)return U(null),Ft();U(fe),(xe=e.tick)==null||xe.call(e);const De=e.sets.B.get(fe)||e.sets.A.get(fe);De&&(De.updateMatrixWorld(),Z_(e,new Wn().setFromObject(De),"iso",(lt.man||z.man).iso))};e.tick=()=>{var Mt,ht;const fe=xt=>xt*xt*(3-2*xt),De=fe(Math.min(b,1)),xe=fe(Math.max(0,Math.min(b-1,1))),it=(xt,ft,Ot,L)=>{var We;const{mo:B,alpha:se,kx:re}=j_(Ot,b),ie=((We=Ot.parts.find(Xe=>Xe.id===ft))==null?void 0:We.explode)||[0,0,0];let Ae=ie[0]*S,be=ie[1]*S,Te=ie[2]*S;if(xt.rotation.set(0,0,0),xt.scale.set(1,1,1),B){if(B.slide.includes(ft)&&(Ae+=re),B.drop.includes(ft)&&(Te-=B.drop_mm*xe),B.rotate.includes(ft)){const Xe=-(se-B.a_latch)*Math.PI/180,[ot,,gt]=B.pivot,qe=Math.cos(Xe),Ct=Math.sin(Xe);xt.rotation.set(0,Xe,0),Ae+=ot-(ot*qe+gt*Ct),Te+=gt-(-ot*Ct+gt*qe)}}else R2.includes(ft)&&(Ae+=b2*De),ft==="N2_return_spring"&&(xt.scale.x=1-.35*De),ft==="N2_adapter"&&(Te+=C2*xe);xt.position.set(Ae+L,be,Te)},ut=(xt,ft,Ot,L=!1)=>{const B=xt.material;ft?B.color.set(ft):B.color.copy(xt.userData.c0),B.transparent=Ot<1,B.opacity=Ot,B.depthWrite=Ot>=1,B.wireframe=L};for(const xt of["A","B"]){const ft=xt==="A"?z.man:lt.man,Ot=xt==="A";for(const[L,B]of e.sets[xt]){if(!ft){B.visible=!1;continue}if(it(B,L,ft,xt==="A"?tt:Ze),xt==="A"){const ot=((Mt=Oe(L))==null?void 0:Mt.off)||me[L];ot&&B.position.add(new G(...ot))}const se=B.userData.p.opacity??1,re=(ht=Me==null?void 0:Me[L])==null?void 0:ht.st;let ie=!P[L]&&(xt==="B"||$),Ae=null,be=se,Te=!1;$&&Me&&(I&&re==="same"&&(ie=!1),O&&(Ae=re==="same"||re==="loading"?lr.same:Ot?lr.removed:lr[re]),d==="overlay"&&(Ot?(re==="same"&&(ie=!1),be=.28,Te=re==="changed"):O&&re==="same"&&(be=.3))),Ue&&(Fe[L]?ie=!1:oe?be=.12*se:ie=!1),A&&L!==A&&(be=Math.min(be,.08),Te=!1);const We=$&&ke&&re==="changed"&&(!A||A===L)&&Oe(L),Xe=We&&(xt==="B"||pt);if(B.userData.mat0||(B.userData.mat0=B.material),Xe){const ot=xt==="B"?We.fwd.d:We.rev.d,gt=B.geometry,qe=`${We.key}|${He}|${he}|${Ke}|${d}`;if((!gt.attributes.devc||gt.attributes.devc.count!==ot.length)&&gt.setAttribute("devc",new Cn(new Float32Array(ot.length*4),4)),B.userData.devMat||(B.userData.devMat=new zp({vertexColors:!0,roughness:.65,side:Li})),B.userData.ck!==qe){const Gt=gt.attributes.devc,Rt=new At;for(let tn=0;tn<ot.length;tn++)if(xt==="B")N2(ot[tn],He,he,Rt),Gt.setXYZW(tn,Rt.r,Rt.g,Rt.b,Ke&&Math.abs(ot[tn])<=He?.06:1);else{const Ye=ot[tn]>He;Rt.copy(Ye?Jp:Zp),Gt.setXYZW(tn,Rt.r,Rt.g,Rt.b,Ye?.32:d==="side"?.35:.04)}gt.setAttribute("color",Gt),Gt.needsUpdate=!0,B.userData.ck=qe}const Ct=B.userData.devMat,an=xt==="A"||Ke;Ct.transparent=an,Ct.depthWrite=!an,B.material=Ct}else B.material=B.userData.mat0;B.visible=ie,ie&&!Xe&&ut(B,Ae,be,Te&&ie)}}if(e.markers.clear(),d==="side"&&z.man&&lt.man)for(const[xt,ft,Ot,L]of[[`Baseline · ${Dl(a)}`,tt,z.man,"#e76a6e"],[`Proposal · ${Dl(c)}`,Ze,lt.man,"#f0b726"]]){const B=K_(xt,L),se=Ot.bounds;B.position.set((se.min[0]+se.max[0])/2+ft,(se.min[1]+se.max[1])/2,se.max[2]+6),e.markers.add(B)}for(const[xt,ft]of e.fea){const Ot=ft.userData.part,L=Ue&&xt===`${Ot}__${Fe[Ot]}`&&!P[Ot];if(ft.visible=!!L,!L)continue;it(ft,Ot,lt.man,0);const B=`${ee}|${Je}|${dt}`;if(ft.userData.ck!==B){const be=ft.geometry.attributes.color,Te=new At,We=ft.userData.d.fi;for(let Xe=0;Xe<We.length;Xe++)hy(We[Xe]*ee*Je/dt,Te),be.setXYZ(Xe,Te.r,Te.g,Te.b);be.needsUpdate=!0,ft.userData.ck=B}const se=ft.userData.d,re=Le&&Ot===Le.part,ie=ne&&Le&&!re;ft.material.transparent=ie,ft.material.opacity=ie?.12:1,ft.material.depthWrite=!ie;const Ae=new Ni(new Sm(re?.9:.6,20,14),new xm({color:re?16777215:11252671,depthTest:!1,transparent:!0,opacity:.95}));if(Ae.position.set(...se.peakV).add(ft.position),Ae.renderOrder=10,e.markers.add(Ae),re){const be=K_(`Peak ${ca(Ot)} ${(se.fiMax*ee*Je).toFixed(2)}`);be.position.copy(Ae.position).add(new G(...se.peakN).multiplyScalar(4)),e.markers.add(be);const Te=new Ni(new Mm(1.6,.18,8,32),Ae.material);Te.position.copy(Ae.position),Te.quaternion.copy(e.cam.quaternion),Te.renderOrder=10,e.markers.add(Te)}}};const yn=fe=>{var De;return(De=fe==null?void 0:fe.cases)==null?void 0:De.filter(xe=>xe.in_scope!==!1&&xe.case==="Z").reduce((xe,it)=>!xe||it.fail_N<xe.fail_N?it:xe,null)},li=(()=>{var ft,Ot;if(!$)return[];const fe=[],De=z.fea,xe=lt.fea,it=yn(De),ut=yn(xe);(it||ut)&&fe.push(["Straight-pull screen (min)",it==null?void 0:it.fail_N,ut==null?void 0:ut.fail_N," N"]);for(const L of[...new Set([...(De==null?void 0:De.cases)||[],...(xe==null?void 0:xe.cases)||[]].filter(B=>B.case==="Z").map(B=>B.part))])fe.push([`  ${ca(L)}`,(ft=De==null?void 0:De.cases.find(B=>B.part===L&&B.case==="Z"))==null?void 0:ft.fail_N,(Ot=xe==null?void 0:xe.cases.find(B=>B.part===L&&B.case==="Z"))==null?void 0:Ot.fail_N," N"]);const Mt=L=>L?{parts:L.parts.length,...Object.fromEntries(Object.entries(L.motion||{}).filter(([,B])=>typeof B=="number")),...Object.fromEntries(L.bounds.size.map((B,se)=>[`envelope ${"XYZ"[se]}`,+B.toFixed(1)]))}:{},ht=Mt(z.man),xt=Mt(lt.man);for(const L of Object.keys({...ht,...xt}))ht[L]!==xt[L]&&fe.push([L,ht[L],xt[L],""]);return fe})(),qi=K&&yn(K),Lr=t.map(fe=>({value:fe.path,label:A2(fe)})),Mi=R==null?void 0:R.motion,{alpha:Dr,kx:No}=j_(R,b),_a=[...new Set([...((ss=lt.man)==null?void 0:ss.parts.map(fe=>fe.id))||[],...$&&z.man?z.man.parts.map(fe=>fe.id):[]])],xa=fe=>{var De,xe,it,ut;return Me&&O?lr[(De=Me[fe])==null?void 0:De.st]||lr.same:(ut=((xe=lt.man)==null?void 0:xe.parts.find(Mt=>Mt.id===fe))||((it=z.man)==null?void 0:it.parts.find(Mt=>Mt.id===fe)))==null?void 0:ut.color};return j.jsxs("div",{className:"app",children:[j.jsxs("header",{className:"top",children:[j.jsxs("div",{className:"brand",children:["N2 hardpoint",j.jsxs("span",{children:[qh.label,qh.sha&&` · ${qh.sha}`]})]}),j.jsxs("label",{className:"pick",children:[j.jsx("span",{children:"Design"}),j.jsx(xo,{minimal:!0,value:E||"",onChange:fe=>T(fe.target.value),options:p.map(fe=>({value:fe.id,label:fe.label}))})]}),j.jsxs("label",{className:`pick base ${$?"":"off"}`,children:[j.jsx("span",{children:"Baseline"}),j.jsx(xo,{minimal:!0,value:a,disabled:!$,onChange:fe=>o(fe.target.value),options:Lr})]}),j.jsxs("label",{className:"pick prop",children:[j.jsx("span",{children:$?"Proposal":"Version"}),j.jsx(xo,{minimal:!0,value:c,onChange:fe=>u(fe.target.value),options:Lr})]}),j.jsx(Iu,{className:"seg",children:[["single","Single"],["overlay","Overlay"],["side","Side by side"]].map(([fe,De])=>j.jsx(Ri,{small:!0,active:d===fe,intent:d===fe?"primary":"none",text:De,onClick:()=>h(fe)},fe))}),j.jsxs(Iu,{className:"seg",children:[j.jsx(Ri,{small:!0,icon:"cube",active:m==="model",text:"Model",onClick:()=>g("model")}),j.jsx(Ri,{small:!0,icon:"heat-grid",active:m==="fea",disabled:!K||$,title:$?"FEA colours show in Single view":"",text:"FEA",onClick:()=>g("fea")})]})]}),j.jsxs("div",{className:"body",children:[j.jsxs("div",{className:"stage",ref:n,children:[j.jsx(Iu,{className:"views",minimal:!0,children:["iso","front","side","top"].map(fe=>j.jsx(Ri,{small:!0,text:fe,onClick:()=>Ft(fe)},fe))}),(lt.err||z.err)&&j.jsx("div",{className:"err",children:[z.err&&`Baseline: ${z.err}`,lt.err&&`Proposal: ${lt.err}`].filter(Boolean).join(" · ")}),$&&j.jsxs("div",{className:"legend chips",children:[Object.entries(lr).map(([fe,De])=>j.jsxs("span",{children:[j.jsx("i",{style:{background:De}}),fe]},fe)),j.jsx("div",{className:"sub",children:d==="overlay"?ke?"Changed parts coloured by surface deviation; baseline shown as a ghost.":"Baseline drawn as a red ghost (wireframe where the shape changed).":"Baseline left, proposal right, shared camera."})]}),$&&ke&&j.jsxs("div",{className:"legend dev",children:["Surface deviation, proposal vs baseline (mm)",j.jsx("div",{className:"bar",style:{background:U2}}),j.jsxs("div",{className:"ticks",children:[j.jsxs("span",{children:["−",he.toFixed(1)," removed"]}),j.jsxs("span",{children:["±",He.toFixed(2)]}),j.jsxs("span",{children:["+",he.toFixed(1)," added"]})]}),pt&&j.jsx("div",{className:"sub",children:"Red ghost: baseline surface that is no longer there."})]}),Ue&&j.jsxs("div",{className:"legend",children:["Utilisation at ",ee.toFixed(1)," N ",J?`(scaled to peak ${ct.toFixed(2)})`:"(1.0 = stress limit)",j.jsx("div",{className:"bar",style:{background:L2}}),j.jsxs("div",{className:"ticks",children:[j.jsx("span",{children:"0"}),j.jsx("span",{children:(.5*dt).toFixed(2)}),j.jsx("span",{children:dt.toFixed(2)}),!J&&j.jsx("span",{style:{color:"#d91ad9"},children:">1"})]})]}),j.jsx("div",{className:"hint",children:"Drag orbit · scroll zoom · right-drag pan · double-click re-centre"})]}),j.jsxs("aside",{className:"side",children:[j.jsxs("section",{children:[j.jsx("h6",{children:$?"Changes":"Summary"}),$?j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"muted",children:[j.jsx("b",{children:ze})," of ",_e.length," parts differ, ",j.jsx(Zh,{minimal:!0,className:"t-base",children:Dl(a)})," → ",j.jsx(Zh,{minimal:!0,className:"t-prop",children:Dl(c)}),". Click a part to focus it."]}),j.jsx("div",{className:"list",children:_e.filter(([,fe])=>!I||fe.st!=="same").map(([fe,De])=>j.jsxs("button",{className:`row ${A===fe?"on":""}`,onClick:()=>Ut(fe),children:[j.jsx("i",{style:{background:lr[De.st]||lr.same}}),j.jsx("span",{className:"nm",children:ca(fe)}),j.jsx("span",{className:"st",style:{color:lr[De.st]},children:De.st}),De.note&&j.jsx("span",{className:"note",children:De.note}),De.st==="changed"&&ke&&(xe=>xe?j.jsxs("span",{className:"note dev",children:[j.jsxs("b",{style:{color:py.getStyle()},children:["+",xe.fwd.max.toFixed(2)]})," / ",j.jsx("b",{style:{color:Jp.getStyle()},children:Math.min(xe.fwd.min,-xe.rev.max).toFixed(2)})," mm max · mean ",xe.fwd.mean.toFixed(2)," mm"]}):j.jsx("span",{className:"note",children:"measuring surface deviation…"}))(Oe(fe))]},fe))})]}):j.jsxs("div",{className:"muted",children:[R&&j.jsxs(j.Fragment,{children:[R.name||R.id," · ",R.parts.length," parts",Mi?", release driven by the servo crank kinematics":"",".",j.jsx("br",{})]}),qi&&j.jsxs(j.Fragment,{children:["Straight-pull stress screen ",j.jsxs("b",{children:[qi.fail_N.toFixed(1)," N"]})," (",ca(qi.part)," governs). Design load ",K.design_N," N, bench target ",K.required_fail_N," N. No working-load rating assigned; not yet tested."]})]})]}),$&&li.length>0&&j.jsxs("section",{children:[j.jsx("h6",{children:"Key values"}),j.jsxs("table",{className:"tbl",children:[j.jsx("thead",{children:j.jsxs("tr",{children:[j.jsx("th",{}),j.jsx("th",{children:"Base"}),j.jsx("th",{children:"Prop."}),j.jsx("th",{children:"Δ"})]})}),j.jsx("tbody",{children:li.map(([fe,De,xe,it])=>{const ut=typeof De=="number"&&typeof xe=="number"?xe-De:null;return j.jsxs("tr",{children:[j.jsx("td",{children:fe}),j.jsx("td",{className:"n",children:De??"–"}),j.jsx("td",{className:"n",children:xe??"–"}),j.jsx("td",{className:"n",style:{color:ut>0?lr.added:ut<0?lr.removed:void 0},children:ut===null||ut===0?"":`${ut>0?"+":""}${+ut.toFixed(2)}${it}`})]},fe)})})]})]}),j.jsxs("section",{children:[j.jsx("h6",{children:"Display"}),j.jsxs("div",{className:"ctl",children:[j.jsx("span",{children:"Explode"}),j.jsx(fa,{min:0,max:1,stepSize:.01,labelRenderer:!1,value:S,onChange:y})]}),(ce||Mi)&&j.jsxs("div",{className:"ctl",children:[j.jsx("span",{children:"Release"}),j.jsx(Ri,{small:!0,minimal:!0,icon:w?"pause":"play",onClick:()=>C(!w)}),j.jsx(Ri,{small:!0,minimal:!0,icon:"reset",onClick:()=>{C(!1),D(0)}}),j.jsx(fa,{min:0,max:2,stepSize:.01,labelRenderer:!1,value:b,onChange:fe=>{C(!1),D(fe)}})]}),(ce||Mi)&&j.jsx("div",{className:"muted small",children:Mi?(b<.02?`Latched: servo ${Mi.a_latch}°.`:b<=1?`Servo ${Dr.toFixed(0)}°, keeper +X ${No.toFixed(1)} mm.`:"Keeper clear; adapter drops.")+" Kinematics from params.py, not a tested release.":b<.02?"Latched.":b<=1?"Solenoid retracting the keeper.":"Keeper open; illustrated adapter travel."}),$&&j.jsxs(j.Fragment,{children:[j.jsx(jr,{checked:O,label:"Colour by change",onChange:()=>k(!O)}),j.jsx(jr,{checked:I,label:"Hide unchanged parts",onChange:()=>X(!I)})]}),$&&j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"ctl",children:[j.jsx("span",{children:"Align"}),j.jsx(xo,{minimal:!0,fill:!0,value:mt,onChange:fe=>Nt(fe.target.value),options:[{value:"assembly",label:"Best fit (auto)"},{value:"part",label:"Each part by bbox centre"},{value:"none",label:"None (raw coordinates)"}]})]}),j.jsx(jr,{checked:ke,label:"Surface deviation map",onChange:()=>Be(!ke)}),ke&&j.jsxs(j.Fragment,{children:[j.jsxs("div",{className:"ctl",children:[j.jsxs("span",{children:["Tol ",He.toFixed(2)]}),j.jsx(fa,{min:.01,max:.5,stepSize:.01,labelRenderer:!1,value:He,onChange:ue})]}),j.jsxs("div",{className:"ctl",children:[j.jsxs("span",{children:["Scale ",he.toFixed(1)]}),j.jsx(fa,{min:.2,max:5,stepSize:.1,labelRenderer:!1,value:he,onChange:Pe})]}),j.jsx(jr,{checked:Ke,label:"Show only differences",onChange:()=>Ge(!Ke)}),j.jsx(jr,{checked:pt,label:"Baseline as removed-material overlay",onChange:()=>nn(!pt)})]})]}),A&&j.jsx(Ri,{small:!0,icon:"cross",text:`Clear focus (${ca(A)})`,onClick:()=>Ut(A)})]}),Ue&&j.jsxs("section",{children:[j.jsx("h6",{children:"FEA"}),j.jsx(xo,{fill:!0,value:V,onChange:fe=>q(fe.target.value),options:Object.entries(et).map(([fe,De])=>({value:fe,label:De.label}))}),j.jsxs("div",{className:"ctl",children:[j.jsxs("span",{children:[ee.toFixed(1)," N"]}),j.jsx(fa,{min:1,max:ve,stepSize:.1,labelRenderer:!1,value:ee,onChange:ae})]}),j.jsxs("div",{className:"btns",children:[j.jsx(Ri,{small:!0,text:`Design ${K.design_N} N`,onClick:()=>ae(K.design_N)}),j.jsx(Ri,{small:!0,text:`Bench ${K.required_fail_N} N`,onClick:()=>ae(K.required_fail_N)}),j.jsx(Ri,{small:!0,icon:"locate",text:"Peak",disabled:!Le,onClick:()=>{H(!0),Ie()}})]}),j.jsxs("table",{className:"tbl",children:[j.jsx("thead",{children:j.jsxs("tr",{children:[j.jsx("th",{children:"Part"}),j.jsx("th",{children:"Screen"}),j.jsx("th",{children:"×load"})]})}),j.jsx("tbody",{children:Z.map(fe=>j.jsxs("tr",{children:[j.jsxs("td",{children:[Le===fe&&"● ",ca(fe.part)]}),j.jsxs("td",{className:"n",children:[fe.fail_N," N"]}),j.jsxs("td",{className:"n",children:[(fe.fail_N/ee).toFixed(2),"×"]})]},fe.part))})]}),j.jsx(jr,{checked:oe,label:"Ghost other parts",onChange:()=>Se(!oe)}),j.jsx(jr,{checked:J,label:"Scale colours to peak",onChange:()=>te(!J)}),j.jsx(jr,{checked:ne,label:"Fade non-governing parts",onChange:()=>H(!ne)}),j.jsxs("div",{className:"muted small",children:[(Vs=K.material)==null?void 0:Vs.toUpperCase(),", ",K.note]})]}),j.jsxs("section",{children:[j.jsx("h6",{children:"Parts"}),j.jsx("div",{className:"parts",children:_a.map(fe=>j.jsxs("label",{className:P[fe]?"off":"",children:[j.jsx("input",{type:"checkbox",checked:!P[fe],onChange:()=>F(De=>({...De,[fe]:!De[fe]}))}),j.jsx("i",{style:{background:xa(fe)}}),ca(fe)]},fe))}),j.jsxs("div",{className:"btns",children:[j.jsx(Ri,{small:!0,text:"All",onClick:()=>F({})}),j.jsx(Ri,{small:!0,text:"Printed only",onClick:()=>{var fe,De;return F(Object.fromEntries([...((fe=lt.man)==null?void 0:fe.parts)||[],...((De=z.man)==null?void 0:De.parts)||[]].filter(xe=>!["printed","payload","moving"].includes(xe.kind)).map(xe=>[xe.id,!0])))}})]})]})]})]})]})}document.body.classList.add(oM);rM.createRoot(document.getElementById("root")).render(j.jsx(k2,{}));export{dn as I,vv as _,aE as p};
