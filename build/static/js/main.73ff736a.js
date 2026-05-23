/*! For license information please see main.73ff736a.js.LICENSE.txt */
(()=>{var e={43:(e,t,n)=>{"use strict";e.exports=n(202)},153:(e,t,n)=>{"use strict";var r=n(43),a=Symbol.for("react.element"),i=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,l=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function u(e,t,n){var r,i={},u=null,c=null;for(r in void 0!==n&&(u=""+n),void 0!==t.key&&(u=""+t.key),void 0!==t.ref&&(c=t.ref),t)o.call(t,r)&&!s.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:a,type:e,key:u,ref:c,props:i,_owner:l.current}}t.Fragment=i,t.jsx=u,t.jsxs=u},202:(e,t)=>{"use strict";var n=Symbol.for("react.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler"),l=Symbol.for("react.provider"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.memo"),f=Symbol.for("react.lazy"),p=Symbol.iterator;var h={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},m=Object.assign,g={};function y(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}function v(){}function b(e,t,n){this.props=e,this.context=t,this.refs=g,this.updater=n||h}y.prototype.isReactComponent={},y.prototype.setState=function(e,t){if("object"!==typeof e&&"function"!==typeof e&&null!=e)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")},y.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")},v.prototype=y.prototype;var x=b.prototype=new v;x.constructor=b,m(x,y.prototype),x.isPureReactComponent=!0;var w=Array.isArray,k=Object.prototype.hasOwnProperty,S={current:null},A={key:!0,ref:!0,__self:!0,__source:!0};function C(e,t,r){var a,i={},o=null,l=null;if(null!=t)for(a in void 0!==t.ref&&(l=t.ref),void 0!==t.key&&(o=""+t.key),t)k.call(t,a)&&!A.hasOwnProperty(a)&&(i[a]=t[a]);var s=arguments.length-2;if(1===s)i.children=r;else if(1<s){for(var u=Array(s),c=0;c<s;c++)u[c]=arguments[c+2];i.children=u}if(e&&e.defaultProps)for(a in s=e.defaultProps)void 0===i[a]&&(i[a]=s[a]);return{$$typeof:n,type:e,key:o,ref:l,props:i,_owner:S.current}}function E(e){return"object"===typeof e&&null!==e&&e.$$typeof===n}var P=/\/+/g;function _(e,t){return"object"===typeof e&&null!==e&&null!=e.key?function(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(e){return t[e]})}(""+e.key):t.toString(36)}function j(e,t,a,i,o){var l=typeof e;"undefined"!==l&&"boolean"!==l||(e=null);var s=!1;if(null===e)s=!0;else switch(l){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case n:case r:s=!0}}if(s)return o=o(s=e),e=""===i?"."+_(s,0):i,w(o)?(a="",null!=e&&(a=e.replace(P,"$&/")+"/"),j(o,t,a,"",function(e){return e})):null!=o&&(E(o)&&(o=function(e,t){return{$$typeof:n,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}(o,a+(!o.key||s&&s.key===o.key?"":(""+o.key).replace(P,"$&/")+"/")+e)),t.push(o)),1;if(s=0,i=""===i?".":i+":",w(e))for(var u=0;u<e.length;u++){var c=i+_(l=e[u],u);s+=j(l,t,a,c,o)}else if(c=function(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=p&&e[p]||e["@@iterator"])?e:null}(e),"function"===typeof c)for(e=c.call(e),u=0;!(l=e.next()).done;)s+=j(l=l.value,t,a,c=i+_(l,u++),o);else if("object"===l)throw t=String(e),Error("Objects are not valid as a React child (found: "+("[object Object]"===t?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function T(e,t,n){if(null==e)return e;var r=[],a=0;return j(e,r,"","",function(e){return t.call(n,e,a++)}),r}function N(e){if(-1===e._status){var t=e._result;(t=t()).then(function(t){0!==e._status&&-1!==e._status||(e._status=1,e._result=t)},function(t){0!==e._status&&-1!==e._status||(e._status=2,e._result=t)}),-1===e._status&&(e._status=0,e._result=t)}if(1===e._status)return e._result.default;throw e._result}var z={current:null},R={transition:null},I={ReactCurrentDispatcher:z,ReactCurrentBatchConfig:R,ReactCurrentOwner:S};function M(){throw Error("act(...) is not supported in production builds of React.")}t.Children={map:T,forEach:function(e,t,n){T(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return T(e,function(){t++}),t},toArray:function(e){return T(e,function(e){return e})||[]},only:function(e){if(!E(e))throw Error("React.Children.only expected to receive a single React element child.");return e}},t.Component=y,t.Fragment=a,t.Profiler=o,t.PureComponent=b,t.StrictMode=i,t.Suspense=c,t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=I,t.act=M,t.cloneElement=function(e,t,r){if(null===e||void 0===e)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var a=m({},e.props),i=e.key,o=e.ref,l=e._owner;if(null!=t){if(void 0!==t.ref&&(o=t.ref,l=S.current),void 0!==t.key&&(i=""+t.key),e.type&&e.type.defaultProps)var s=e.type.defaultProps;for(u in t)k.call(t,u)&&!A.hasOwnProperty(u)&&(a[u]=void 0===t[u]&&void 0!==s?s[u]:t[u])}var u=arguments.length-2;if(1===u)a.children=r;else if(1<u){s=Array(u);for(var c=0;c<u;c++)s[c]=arguments[c+2];a.children=s}return{$$typeof:n,type:e.type,key:i,ref:o,props:a,_owner:l}},t.createContext=function(e){return(e={$$typeof:s,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null}).Provider={$$typeof:l,_context:e},e.Consumer=e},t.createElement=C,t.createFactory=function(e){var t=C.bind(null,e);return t.type=e,t},t.createRef=function(){return{current:null}},t.forwardRef=function(e){return{$$typeof:u,render:e}},t.isValidElement=E,t.lazy=function(e){return{$$typeof:f,_payload:{_status:-1,_result:e},_init:N}},t.memo=function(e,t){return{$$typeof:d,type:e,compare:void 0===t?null:t}},t.startTransition=function(e){var t=R.transition;R.transition={};try{e()}finally{R.transition=t}},t.unstable_act=M,t.useCallback=function(e,t){return z.current.useCallback(e,t)},t.useContext=function(e){return z.current.useContext(e)},t.useDebugValue=function(){},t.useDeferredValue=function(e){return z.current.useDeferredValue(e)},t.useEffect=function(e,t){return z.current.useEffect(e,t)},t.useId=function(){return z.current.useId()},t.useImperativeHandle=function(e,t,n){return z.current.useImperativeHandle(e,t,n)},t.useInsertionEffect=function(e,t){return z.current.useInsertionEffect(e,t)},t.useLayoutEffect=function(e,t){return z.current.useLayoutEffect(e,t)},t.useMemo=function(e,t){return z.current.useMemo(e,t)},t.useReducer=function(e,t,n){return z.current.useReducer(e,t,n)},t.useRef=function(e){return z.current.useRef(e)},t.useState=function(e){return z.current.useState(e)},t.useSyncExternalStore=function(e,t,n){return z.current.useSyncExternalStore(e,t,n)},t.useTransition=function(){return z.current.useTransition()},t.version="18.3.1"},219:(e,t,n)=>{"use strict";var r=n(763),a={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},i={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},o={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},l={};function s(e){return r.isMemo(e)?o:l[e.$$typeof]||a}l[r.ForwardRef]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},l[r.Memo]=o;var u=Object.defineProperty,c=Object.getOwnPropertyNames,d=Object.getOwnPropertySymbols,f=Object.getOwnPropertyDescriptor,p=Object.getPrototypeOf,h=Object.prototype;e.exports=function e(t,n,r){if("string"!==typeof n){if(h){var a=p(n);a&&a!==h&&e(t,a,r)}var o=c(n);d&&(o=o.concat(d(n)));for(var l=s(t),m=s(n),g=0;g<o.length;++g){var y=o[g];if(!i[y]&&(!r||!r[y])&&(!m||!m[y])&&(!l||!l[y])){var v=f(n,y);try{u(t,y,v)}catch(b){}}}}return t}},234:(e,t)=>{"use strict";function n(e,t){var n=e.length;e.push(t);e:for(;0<n;){var r=n-1>>>1,a=e[r];if(!(0<i(a,t)))break e;e[r]=t,e[n]=a,n=r}}function r(e){return 0===e.length?null:e[0]}function a(e){if(0===e.length)return null;var t=e[0],n=e.pop();if(n!==t){e[0]=n;e:for(var r=0,a=e.length,o=a>>>1;r<o;){var l=2*(r+1)-1,s=e[l],u=l+1,c=e[u];if(0>i(s,n))u<a&&0>i(c,s)?(e[r]=c,e[u]=n,r=u):(e[r]=s,e[l]=n,r=l);else{if(!(u<a&&0>i(c,n)))break e;e[r]=c,e[u]=n,r=u}}}return t}function i(e,t){var n=e.sortIndex-t.sortIndex;return 0!==n?n:e.id-t.id}if("object"===typeof performance&&"function"===typeof performance.now){var o=performance;t.unstable_now=function(){return o.now()}}else{var l=Date,s=l.now();t.unstable_now=function(){return l.now()-s}}var u=[],c=[],d=1,f=null,p=3,h=!1,m=!1,g=!1,y="function"===typeof setTimeout?setTimeout:null,v="function"===typeof clearTimeout?clearTimeout:null,b="undefined"!==typeof setImmediate?setImmediate:null;function x(e){for(var t=r(c);null!==t;){if(null===t.callback)a(c);else{if(!(t.startTime<=e))break;a(c),t.sortIndex=t.expirationTime,n(u,t)}t=r(c)}}function w(e){if(g=!1,x(e),!m)if(null!==r(u))m=!0,R(k);else{var t=r(c);null!==t&&I(w,t.startTime-e)}}function k(e,n){m=!1,g&&(g=!1,v(E),E=-1),h=!0;var i=p;try{for(x(n),f=r(u);null!==f&&(!(f.expirationTime>n)||e&&!j());){var o=f.callback;if("function"===typeof o){f.callback=null,p=f.priorityLevel;var l=o(f.expirationTime<=n);n=t.unstable_now(),"function"===typeof l?f.callback=l:f===r(u)&&a(u),x(n)}else a(u);f=r(u)}if(null!==f)var s=!0;else{var d=r(c);null!==d&&I(w,d.startTime-n),s=!1}return s}finally{f=null,p=i,h=!1}}"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);var S,A=!1,C=null,E=-1,P=5,_=-1;function j(){return!(t.unstable_now()-_<P)}function T(){if(null!==C){var e=t.unstable_now();_=e;var n=!0;try{n=C(!0,e)}finally{n?S():(A=!1,C=null)}}else A=!1}if("function"===typeof b)S=function(){b(T)};else if("undefined"!==typeof MessageChannel){var N=new MessageChannel,z=N.port2;N.port1.onmessage=T,S=function(){z.postMessage(null)}}else S=function(){y(T,0)};function R(e){C=e,A||(A=!0,S())}function I(e,n){E=y(function(){e(t.unstable_now())},n)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(e){e.callback=null},t.unstable_continueExecution=function(){m||h||(m=!0,R(k))},t.unstable_forceFrameRate=function(e){0>e||125<e?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<e?Math.floor(1e3/e):5},t.unstable_getCurrentPriorityLevel=function(){return p},t.unstable_getFirstCallbackNode=function(){return r(u)},t.unstable_next=function(e){switch(p){case 1:case 2:case 3:var t=3;break;default:t=p}var n=p;p=t;try{return e()}finally{p=n}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(e,t){switch(e){case 1:case 2:case 3:case 4:case 5:break;default:e=3}var n=p;p=e;try{return t()}finally{p=n}},t.unstable_scheduleCallback=function(e,a,i){var o=t.unstable_now();switch("object"===typeof i&&null!==i?i="number"===typeof(i=i.delay)&&0<i?o+i:o:i=o,e){case 1:var l=-1;break;case 2:l=250;break;case 5:l=1073741823;break;case 4:l=1e4;break;default:l=5e3}return e={id:d++,callback:a,priorityLevel:e,startTime:i,expirationTime:l=i+l,sortIndex:-1},i>o?(e.sortIndex=i,n(c,e),null===r(u)&&e===r(c)&&(g?(v(E),E=-1):g=!0,I(w,i-o))):(e.sortIndex=l,n(u,e),m||h||(m=!0,R(k))),e},t.unstable_shouldYield=j,t.unstable_wrapCallback=function(e){var t=p;return function(){var n=p;p=t;try{return e.apply(this,arguments)}finally{p=n}}}},324:e=>{e.exports=function(e,t,n,r){var a=n?n.call(r,e,t):void 0;if(void 0!==a)return!!a;if(e===t)return!0;if("object"!==typeof e||!e||"object"!==typeof t||!t)return!1;var i=Object.keys(e),o=Object.keys(t);if(i.length!==o.length)return!1;for(var l=Object.prototype.hasOwnProperty.bind(t),s=0;s<i.length;s++){var u=i[s];if(!l(u))return!1;var c=e[u],d=t[u];if(!1===(a=n?n.call(r,c,d,u):void 0)||void 0===a&&c!==d)return!1}return!0}},391:(e,t,n)=>{"use strict";var r=n(950);t.H=r.createRoot,r.hydrateRoot},514:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/com_logo02.e6c7ff7037a3e48f4d82.png"},528:(e,t)=>{"use strict";var n=Symbol.for("react.transitional.element"),r=Symbol.for("react.portal"),a=Symbol.for("react.fragment"),i=Symbol.for("react.strict_mode"),o=Symbol.for("react.profiler");Symbol.for("react.provider");var l=Symbol.for("react.consumer"),s=Symbol.for("react.context"),u=Symbol.for("react.forward_ref"),c=Symbol.for("react.suspense"),d=Symbol.for("react.suspense_list"),f=Symbol.for("react.memo"),p=Symbol.for("react.lazy"),h=Symbol.for("react.view_transition"),m=Symbol.for("react.client.reference");function g(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case n:switch(e=e.type){case a:case o:case i:case c:case d:case h:return e;default:switch(e=e&&e.$$typeof){case s:case u:case p:case f:case l:return e;default:return t}}case r:return t}}}t.Hy=function(e){return"string"===typeof e||"function"===typeof e||e===a||e===o||e===i||e===c||e===d||"object"===typeof e&&null!==e&&(e.$$typeof===p||e.$$typeof===f||e.$$typeof===s||e.$$typeof===l||e.$$typeof===u||e.$$typeof===m||void 0!==e.getModuleId)},t.QP=g},579:(e,t,n)=>{"use strict";e.exports=n(153)},730:(e,t,n)=>{"use strict";var r=n(43),a=n(853);function i(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var o=new Set,l={};function s(e,t){u(e,t),u(e+"Capture",t)}function u(e,t){for(l[e]=t,e=0;e<t.length;e++)o.add(t[e])}var c=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),d=Object.prototype.hasOwnProperty,f=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,p={},h={};function m(e,t,n,r,a,i,o){this.acceptsBooleans=2===t||3===t||4===t,this.attributeName=r,this.attributeNamespace=a,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=i,this.removeEmptyString=o}var g={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){g[e]=new m(e,0,!1,e,null,!1,!1)}),[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];g[t]=new m(t,1,!1,e[1],null,!1,!1)}),["contentEditable","draggable","spellCheck","value"].forEach(function(e){g[e]=new m(e,2,!1,e.toLowerCase(),null,!1,!1)}),["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){g[e]=new m(e,2,!1,e,null,!1,!1)}),"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){g[e]=new m(e,3,!1,e.toLowerCase(),null,!1,!1)}),["checked","multiple","muted","selected"].forEach(function(e){g[e]=new m(e,3,!0,e,null,!1,!1)}),["capture","download"].forEach(function(e){g[e]=new m(e,4,!1,e,null,!1,!1)}),["cols","rows","size","span"].forEach(function(e){g[e]=new m(e,6,!1,e,null,!1,!1)}),["rowSpan","start"].forEach(function(e){g[e]=new m(e,5,!1,e.toLowerCase(),null,!1,!1)});var y=/[\-:]([a-z])/g;function v(e){return e[1].toUpperCase()}function b(e,t,n,r){var a=g.hasOwnProperty(t)?g[t]:null;(null!==a?0!==a.type:r||!(2<t.length)||"o"!==t[0]&&"O"!==t[0]||"n"!==t[1]&&"N"!==t[1])&&(function(e,t,n,r){if(null===t||"undefined"===typeof t||function(e,t,n,r){if(null!==n&&0===n.type)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return!r&&(null!==n?!n.acceptsBooleans:"data-"!==(e=e.toLowerCase().slice(0,5))&&"aria-"!==e);default:return!1}}(e,t,n,r))return!0;if(r)return!1;if(null!==n)switch(n.type){case 3:return!t;case 4:return!1===t;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}(t,n,a,r)&&(n=null),r||null===a?function(e){return!!d.call(h,e)||!d.call(p,e)&&(f.test(e)?h[e]=!0:(p[e]=!0,!1))}(t)&&(null===n?e.removeAttribute(t):e.setAttribute(t,""+n)):a.mustUseProperty?e[a.propertyName]=null===n?3!==a.type&&"":n:(t=a.attributeName,r=a.attributeNamespace,null===n?e.removeAttribute(t):(n=3===(a=a.type)||4===a&&!0===n?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,null,!1,!1)}),"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)}),["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(y,v);g[t]=new m(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)}),["tabIndex","crossOrigin"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!1,!1)}),g.xlinkHref=new m("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1),["src","href","action","formAction"].forEach(function(e){g[e]=new m(e,1,!1,e.toLowerCase(),null,!0,!0)});var x=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,w=Symbol.for("react.element"),k=Symbol.for("react.portal"),S=Symbol.for("react.fragment"),A=Symbol.for("react.strict_mode"),C=Symbol.for("react.profiler"),E=Symbol.for("react.provider"),P=Symbol.for("react.context"),_=Symbol.for("react.forward_ref"),j=Symbol.for("react.suspense"),T=Symbol.for("react.suspense_list"),N=Symbol.for("react.memo"),z=Symbol.for("react.lazy");Symbol.for("react.scope"),Symbol.for("react.debug_trace_mode");var R=Symbol.for("react.offscreen");Symbol.for("react.legacy_hidden"),Symbol.for("react.cache"),Symbol.for("react.tracing_marker");var I=Symbol.iterator;function M(e){return null===e||"object"!==typeof e?null:"function"===typeof(e=I&&e[I]||e["@@iterator"])?e:null}var D,O=Object.assign;function L(e){if(void 0===D)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);D=t&&t[1]||""}return"\n"+D+e}var F=!1;function B(e,t){if(!e||F)return"";F=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&"string"===typeof u.stack){for(var a=u.stack.split("\n"),i=r.stack.split("\n"),o=a.length-1,l=i.length-1;1<=o&&0<=l&&a[o]!==i[l];)l--;for(;1<=o&&0<=l;o--,l--)if(a[o]!==i[l]){if(1!==o||1!==l)do{if(o--,0>--l||a[o]!==i[l]){var s="\n"+a[o].replace(" at new "," at ");return e.displayName&&s.includes("<anonymous>")&&(s=s.replace("<anonymous>",e.displayName)),s}}while(1<=o&&0<=l);break}}}finally{F=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?L(e):""}function U(e){switch(e.tag){case 5:return L(e.type);case 16:return L("Lazy");case 13:return L("Suspense");case 19:return L("SuspenseList");case 0:case 2:case 15:return e=B(e.type,!1);case 11:return e=B(e.type.render,!1);case 1:return e=B(e.type,!0);default:return""}}function $(e){if(null==e)return null;if("function"===typeof e)return e.displayName||e.name||null;if("string"===typeof e)return e;switch(e){case S:return"Fragment";case k:return"Portal";case C:return"Profiler";case A:return"StrictMode";case j:return"Suspense";case T:return"SuspenseList"}if("object"===typeof e)switch(e.$$typeof){case P:return(e.displayName||"Context")+".Consumer";case E:return(e._context.displayName||"Context")+".Provider";case _:var t=e.render;return(e=e.displayName)||(e=""!==(e=t.displayName||t.name||"")?"ForwardRef("+e+")":"ForwardRef"),e;case N:return null!==(t=e.displayName||null)?t:$(e.type)||"Memo";case z:t=e._payload,e=e._init;try{return $(e(t))}catch(n){}}return null}function H(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=(e=t.render).displayName||e.name||"",t.displayName||(""!==e?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return $(t);case 8:return t===A?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof t)return t.displayName||t.name||null;if("string"===typeof t)return t}return null}function V(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":case"object":return e;default:return""}}function W(e){var t=e.type;return(e=e.nodeName)&&"input"===e.toLowerCase()&&("checkbox"===t||"radio"===t)}function Q(e){e._valueTracker||(e._valueTracker=function(e){var t=W(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&"undefined"!==typeof n&&"function"===typeof n.get&&"function"===typeof n.set){var a=n.get,i=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return a.call(this)},set:function(e){r=""+e,i.call(this,e)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(e){r=""+e},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}(e))}function K(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=W(e)?e.checked?"true":"false":e.value),(e=r)!==n&&(t.setValue(e),!0)}function G(e){if("undefined"===typeof(e=e||("undefined"!==typeof document?document:void 0)))return null;try{return e.activeElement||e.body}catch(t){return e.body}}function Y(e,t){var n=t.checked;return O({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=n?n:e._wrapperState.initialChecked})}function q(e,t){var n=null==t.defaultValue?"":t.defaultValue,r=null!=t.checked?t.checked:t.defaultChecked;n=V(null!=t.value?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:"checkbox"===t.type||"radio"===t.type?null!=t.checked:null!=t.value}}function X(e,t){null!=(t=t.checked)&&b(e,"checked",t,!1)}function Z(e,t){X(e,t);var n=V(t.value),r=t.type;if(null!=n)"number"===r?(0===n&&""===e.value||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if("submit"===r||"reset"===r)return void e.removeAttribute("value");t.hasOwnProperty("value")?ee(e,t.type,n):t.hasOwnProperty("defaultValue")&&ee(e,t.type,V(t.defaultValue)),null==t.checked&&null!=t.defaultChecked&&(e.defaultChecked=!!t.defaultChecked)}function J(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!("submit"!==r&&"reset"!==r||void 0!==t.value&&null!==t.value))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}""!==(n=e.name)&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,""!==n&&(e.name=n)}function ee(e,t,n){"number"===t&&G(e.ownerDocument)===e||(null==n?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var te=Array.isArray;function ne(e,t,n,r){if(e=e.options,t){t={};for(var a=0;a<n.length;a++)t["$"+n[a]]=!0;for(n=0;n<e.length;n++)a=t.hasOwnProperty("$"+e[n].value),e[n].selected!==a&&(e[n].selected=a),a&&r&&(e[n].defaultSelected=!0)}else{for(n=""+V(n),t=null,a=0;a<e.length;a++){if(e[a].value===n)return e[a].selected=!0,void(r&&(e[a].defaultSelected=!0));null!==t||e[a].disabled||(t=e[a])}null!==t&&(t.selected=!0)}}function re(e,t){if(null!=t.dangerouslySetInnerHTML)throw Error(i(91));return O({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function ae(e,t){var n=t.value;if(null==n){if(n=t.children,t=t.defaultValue,null!=n){if(null!=t)throw Error(i(92));if(te(n)){if(1<n.length)throw Error(i(93));n=n[0]}t=n}null==t&&(t=""),n=t}e._wrapperState={initialValue:V(n)}}function ie(e,t){var n=V(t.value),r=V(t.defaultValue);null!=n&&((n=""+n)!==e.value&&(e.value=n),null==t.defaultValue&&e.defaultValue!==n&&(e.defaultValue=n)),null!=r&&(e.defaultValue=""+r)}function oe(e){var t=e.textContent;t===e._wrapperState.initialValue&&""!==t&&null!==t&&(e.value=t)}function le(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function se(e,t){return null==e||"http://www.w3.org/1999/xhtml"===e?le(t):"http://www.w3.org/2000/svg"===e&&"foreignObject"===t?"http://www.w3.org/1999/xhtml":e}var ue,ce,de=(ce=function(e,t){if("http://www.w3.org/2000/svg"!==e.namespaceURI||"innerHTML"in e)e.innerHTML=t;else{for((ue=ue||document.createElement("div")).innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=ue.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}},"undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(e,t,n,r){MSApp.execUnsafeLocalFunction(function(){return ce(e,t)})}:ce);function fe(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&3===n.nodeType)return void(n.nodeValue=t)}e.textContent=t}var pe={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},he=["Webkit","ms","Moz","O"];function me(e,t,n){return null==t||"boolean"===typeof t||""===t?"":n||"number"!==typeof t||0===t||pe.hasOwnProperty(e)&&pe[e]?(""+t).trim():t+"px"}function ge(e,t){for(var n in e=e.style,t)if(t.hasOwnProperty(n)){var r=0===n.indexOf("--"),a=me(n,t[n],r);"float"===n&&(n="cssFloat"),r?e.setProperty(n,a):e[n]=a}}Object.keys(pe).forEach(function(e){he.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),pe[t]=pe[e]})});var ye=O({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function ve(e,t){if(t){if(ye[e]&&(null!=t.children||null!=t.dangerouslySetInnerHTML))throw Error(i(137,e));if(null!=t.dangerouslySetInnerHTML){if(null!=t.children)throw Error(i(60));if("object"!==typeof t.dangerouslySetInnerHTML||!("__html"in t.dangerouslySetInnerHTML))throw Error(i(61))}if(null!=t.style&&"object"!==typeof t.style)throw Error(i(62))}}function be(e,t){if(-1===e.indexOf("-"))return"string"===typeof t.is;switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xe=null;function we(e){return(e=e.target||e.srcElement||window).correspondingUseElement&&(e=e.correspondingUseElement),3===e.nodeType?e.parentNode:e}var ke=null,Se=null,Ae=null;function Ce(e){if(e=ba(e)){if("function"!==typeof ke)throw Error(i(280));var t=e.stateNode;t&&(t=wa(t),ke(e.stateNode,e.type,t))}}function Ee(e){Se?Ae?Ae.push(e):Ae=[e]:Se=e}function Pe(){if(Se){var e=Se,t=Ae;if(Ae=Se=null,Ce(e),t)for(e=0;e<t.length;e++)Ce(t[e])}}function _e(e,t){return e(t)}function je(){}var Te=!1;function Ne(e,t,n){if(Te)return e(t,n);Te=!0;try{return _e(e,t,n)}finally{Te=!1,(null!==Se||null!==Ae)&&(je(),Pe())}}function ze(e,t){var n=e.stateNode;if(null===n)return null;var r=wa(n);if(null===r)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(r=!("button"===(e=e.type)||"input"===e||"select"===e||"textarea"===e)),e=!r;break e;default:e=!1}if(e)return null;if(n&&"function"!==typeof n)throw Error(i(231,t,typeof n));return n}var Re=!1;if(c)try{var Ie={};Object.defineProperty(Ie,"passive",{get:function(){Re=!0}}),window.addEventListener("test",Ie,Ie),window.removeEventListener("test",Ie,Ie)}catch(ce){Re=!1}function Me(e,t,n,r,a,i,o,l,s){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(c){this.onError(c)}}var De=!1,Oe=null,Le=!1,Fe=null,Be={onError:function(e){De=!0,Oe=e}};function Ue(e,t,n,r,a,i,o,l,s){De=!1,Oe=null,Me.apply(Be,arguments)}function $e(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do{0!==(4098&(t=e).flags)&&(n=t.return),e=t.return}while(e)}return 3===t.tag?n:null}function He(e){if(13===e.tag){var t=e.memoizedState;if(null===t&&(null!==(e=e.alternate)&&(t=e.memoizedState)),null!==t)return t.dehydrated}return null}function Ve(e){if($e(e)!==e)throw Error(i(188))}function We(e){return null!==(e=function(e){var t=e.alternate;if(!t){if(null===(t=$e(e)))throw Error(i(188));return t!==e?null:e}for(var n=e,r=t;;){var a=n.return;if(null===a)break;var o=a.alternate;if(null===o){if(null!==(r=a.return)){n=r;continue}break}if(a.child===o.child){for(o=a.child;o;){if(o===n)return Ve(a),e;if(o===r)return Ve(a),t;o=o.sibling}throw Error(i(188))}if(n.return!==r.return)n=a,r=o;else{for(var l=!1,s=a.child;s;){if(s===n){l=!0,n=a,r=o;break}if(s===r){l=!0,r=a,n=o;break}s=s.sibling}if(!l){for(s=o.child;s;){if(s===n){l=!0,n=o,r=a;break}if(s===r){l=!0,r=o,n=a;break}s=s.sibling}if(!l)throw Error(i(189))}}if(n.alternate!==r)throw Error(i(190))}if(3!==n.tag)throw Error(i(188));return n.stateNode.current===n?e:t}(e))?Qe(e):null}function Qe(e){if(5===e.tag||6===e.tag)return e;for(e=e.child;null!==e;){var t=Qe(e);if(null!==t)return t;e=e.sibling}return null}var Ke=a.unstable_scheduleCallback,Ge=a.unstable_cancelCallback,Ye=a.unstable_shouldYield,qe=a.unstable_requestPaint,Xe=a.unstable_now,Ze=a.unstable_getCurrentPriorityLevel,Je=a.unstable_ImmediatePriority,et=a.unstable_UserBlockingPriority,tt=a.unstable_NormalPriority,nt=a.unstable_LowPriority,rt=a.unstable_IdlePriority,at=null,it=null;var ot=Math.clz32?Math.clz32:function(e){return e>>>=0,0===e?32:31-(lt(e)/st|0)|0},lt=Math.log,st=Math.LN2;var ut=64,ct=4194304;function dt(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return 4194240&e;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return 130023424&e;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function ft(e,t){var n=e.pendingLanes;if(0===n)return 0;var r=0,a=e.suspendedLanes,i=e.pingedLanes,o=268435455&n;if(0!==o){var l=o&~a;0!==l?r=dt(l):0!==(i&=o)&&(r=dt(i))}else 0!==(o=n&~a)?r=dt(o):0!==i&&(r=dt(i));if(0===r)return 0;if(0!==t&&t!==r&&0===(t&a)&&((a=r&-r)>=(i=t&-t)||16===a&&0!==(4194240&i)))return t;if(0!==(4&r)&&(r|=16&n),0!==(t=e.entangledLanes))for(e=e.entanglements,t&=r;0<t;)a=1<<(n=31-ot(t)),r|=e[n],t&=~a;return r}function pt(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;default:return-1}}function ht(e){return 0!==(e=-1073741825&e.pendingLanes)?e:1073741824&e?1073741824:0}function mt(){var e=ut;return 0===(4194240&(ut<<=1))&&(ut=64),e}function gt(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function yt(e,t,n){e.pendingLanes|=t,536870912!==t&&(e.suspendedLanes=0,e.pingedLanes=0),(e=e.eventTimes)[t=31-ot(t)]=n}function vt(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-ot(n),a=1<<r;a&t|e[r]&t&&(e[r]|=t),n&=~a}}var bt=0;function xt(e){return 1<(e&=-e)?4<e?0!==(268435455&e)?16:536870912:4:1}var wt,kt,St,At,Ct,Et=!1,Pt=[],_t=null,jt=null,Tt=null,Nt=new Map,zt=new Map,Rt=[],It="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Mt(e,t){switch(e){case"focusin":case"focusout":_t=null;break;case"dragenter":case"dragleave":jt=null;break;case"mouseover":case"mouseout":Tt=null;break;case"pointerover":case"pointerout":Nt.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":zt.delete(t.pointerId)}}function Dt(e,t,n,r,a,i){return null===e||e.nativeEvent!==i?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:i,targetContainers:[a]},null!==t&&(null!==(t=ba(t))&&kt(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,null!==a&&-1===t.indexOf(a)&&t.push(a),e)}function Ot(e){var t=va(e.target);if(null!==t){var n=$e(t);if(null!==n)if(13===(t=n.tag)){if(null!==(t=He(n)))return e.blockedOn=t,void Ct(e.priority,function(){St(n)})}else if(3===t&&n.stateNode.current.memoizedState.isDehydrated)return void(e.blockedOn=3===n.tag?n.stateNode.containerInfo:null)}e.blockedOn=null}function Lt(e){if(null!==e.blockedOn)return!1;for(var t=e.targetContainers;0<t.length;){var n=Yt(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(null!==n)return null!==(t=ba(n))&&kt(t),e.blockedOn=n,!1;var r=new(n=e.nativeEvent).constructor(n.type,n);xe=r,n.target.dispatchEvent(r),xe=null,t.shift()}return!0}function Ft(e,t,n){Lt(e)&&n.delete(t)}function Bt(){Et=!1,null!==_t&&Lt(_t)&&(_t=null),null!==jt&&Lt(jt)&&(jt=null),null!==Tt&&Lt(Tt)&&(Tt=null),Nt.forEach(Ft),zt.forEach(Ft)}function Ut(e,t){e.blockedOn===t&&(e.blockedOn=null,Et||(Et=!0,a.unstable_scheduleCallback(a.unstable_NormalPriority,Bt)))}function $t(e){function t(t){return Ut(t,e)}if(0<Pt.length){Ut(Pt[0],e);for(var n=1;n<Pt.length;n++){var r=Pt[n];r.blockedOn===e&&(r.blockedOn=null)}}for(null!==_t&&Ut(_t,e),null!==jt&&Ut(jt,e),null!==Tt&&Ut(Tt,e),Nt.forEach(t),zt.forEach(t),n=0;n<Rt.length;n++)(r=Rt[n]).blockedOn===e&&(r.blockedOn=null);for(;0<Rt.length&&null===(n=Rt[0]).blockedOn;)Ot(n),null===n.blockedOn&&Rt.shift()}var Ht=x.ReactCurrentBatchConfig,Vt=!0;function Wt(e,t,n,r){var a=bt,i=Ht.transition;Ht.transition=null;try{bt=1,Kt(e,t,n,r)}finally{bt=a,Ht.transition=i}}function Qt(e,t,n,r){var a=bt,i=Ht.transition;Ht.transition=null;try{bt=4,Kt(e,t,n,r)}finally{bt=a,Ht.transition=i}}function Kt(e,t,n,r){if(Vt){var a=Yt(e,t,n,r);if(null===a)Vr(e,t,r,Gt,n),Mt(e,r);else if(function(e,t,n,r,a){switch(t){case"focusin":return _t=Dt(_t,e,t,n,r,a),!0;case"dragenter":return jt=Dt(jt,e,t,n,r,a),!0;case"mouseover":return Tt=Dt(Tt,e,t,n,r,a),!0;case"pointerover":var i=a.pointerId;return Nt.set(i,Dt(Nt.get(i)||null,e,t,n,r,a)),!0;case"gotpointercapture":return i=a.pointerId,zt.set(i,Dt(zt.get(i)||null,e,t,n,r,a)),!0}return!1}(a,e,t,n,r))r.stopPropagation();else if(Mt(e,r),4&t&&-1<It.indexOf(e)){for(;null!==a;){var i=ba(a);if(null!==i&&wt(i),null===(i=Yt(e,t,n,r))&&Vr(e,t,r,Gt,n),i===a)break;a=i}null!==a&&r.stopPropagation()}else Vr(e,t,r,null,n)}}var Gt=null;function Yt(e,t,n,r){if(Gt=null,null!==(e=va(e=we(r))))if(null===(t=$e(e)))e=null;else if(13===(n=t.tag)){if(null!==(e=He(t)))return e;e=null}else if(3===n){if(t.stateNode.current.memoizedState.isDehydrated)return 3===t.tag?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Gt=e,null}function qt(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(Ze()){case Je:return 1;case et:return 4;case tt:case nt:return 16;case rt:return 536870912;default:return 16}default:return 16}}var Xt=null,Zt=null,Jt=null;function en(){if(Jt)return Jt;var e,t,n=Zt,r=n.length,a="value"in Xt?Xt.value:Xt.textContent,i=a.length;for(e=0;e<r&&n[e]===a[e];e++);var o=r-e;for(t=1;t<=o&&n[r-t]===a[i-t];t++);return Jt=a.slice(e,1<t?1-t:void 0)}function tn(e){var t=e.keyCode;return"charCode"in e?0===(e=e.charCode)&&13===t&&(e=13):e=t,10===e&&(e=13),32<=e||13===e?e:0}function nn(){return!0}function rn(){return!1}function an(e){function t(t,n,r,a,i){for(var o in this._reactName=t,this._targetInst=r,this.type=n,this.nativeEvent=a,this.target=i,this.currentTarget=null,e)e.hasOwnProperty(o)&&(t=e[o],this[o]=t?t(a):a[o]);return this.isDefaultPrevented=(null!=a.defaultPrevented?a.defaultPrevented:!1===a.returnValue)?nn:rn,this.isPropagationStopped=rn,this}return O(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var e=this.nativeEvent;e&&(e.preventDefault?e.preventDefault():"unknown"!==typeof e.returnValue&&(e.returnValue=!1),this.isDefaultPrevented=nn)},stopPropagation:function(){var e=this.nativeEvent;e&&(e.stopPropagation?e.stopPropagation():"unknown"!==typeof e.cancelBubble&&(e.cancelBubble=!0),this.isPropagationStopped=nn)},persist:function(){},isPersistent:nn}),t}var on,ln,sn,un={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},cn=an(un),dn=O({},un,{view:0,detail:0}),fn=an(dn),pn=O({},dn,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:Cn,button:0,buttons:0,relatedTarget:function(e){return void 0===e.relatedTarget?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==sn&&(sn&&"mousemove"===e.type?(on=e.screenX-sn.screenX,ln=e.screenY-sn.screenY):ln=on=0,sn=e),on)},movementY:function(e){return"movementY"in e?e.movementY:ln}}),hn=an(pn),mn=an(O({},pn,{dataTransfer:0})),gn=an(O({},dn,{relatedTarget:0})),yn=an(O({},un,{animationName:0,elapsedTime:0,pseudoElement:0})),vn=O({},un,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),bn=an(vn),xn=an(O({},un,{data:0})),wn={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},kn={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Sn={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function An(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):!!(e=Sn[e])&&!!t[e]}function Cn(){return An}var En=O({},dn,{key:function(e){if(e.key){var t=wn[e.key]||e.key;if("Unidentified"!==t)return t}return"keypress"===e.type?13===(e=tn(e))?"Enter":String.fromCharCode(e):"keydown"===e.type||"keyup"===e.type?kn[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:Cn,charCode:function(e){return"keypress"===e.type?tn(e):0},keyCode:function(e){return"keydown"===e.type||"keyup"===e.type?e.keyCode:0},which:function(e){return"keypress"===e.type?tn(e):"keydown"===e.type||"keyup"===e.type?e.keyCode:0}}),Pn=an(En),_n=an(O({},pn,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0})),jn=an(O({},dn,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:Cn})),Tn=an(O({},un,{propertyName:0,elapsedTime:0,pseudoElement:0})),Nn=O({},pn,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),zn=an(Nn),Rn=[9,13,27,32],In=c&&"CompositionEvent"in window,Mn=null;c&&"documentMode"in document&&(Mn=document.documentMode);var Dn=c&&"TextEvent"in window&&!Mn,On=c&&(!In||Mn&&8<Mn&&11>=Mn),Ln=String.fromCharCode(32),Fn=!1;function Bn(e,t){switch(e){case"keyup":return-1!==Rn.indexOf(t.keyCode);case"keydown":return 229!==t.keyCode;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Un(e){return"object"===typeof(e=e.detail)&&"data"in e?e.data:null}var $n=!1;var Hn={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Vn(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return"input"===t?!!Hn[e.type]:"textarea"===t}function Wn(e,t,n,r){Ee(r),0<(t=Qr(t,"onChange")).length&&(n=new cn("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var Qn=null,Kn=null;function Gn(e){Lr(e,0)}function Yn(e){if(K(xa(e)))return e}function qn(e,t){if("change"===e)return t}var Xn=!1;if(c){var Zn;if(c){var Jn="oninput"in document;if(!Jn){var er=document.createElement("div");er.setAttribute("oninput","return;"),Jn="function"===typeof er.oninput}Zn=Jn}else Zn=!1;Xn=Zn&&(!document.documentMode||9<document.documentMode)}function tr(){Qn&&(Qn.detachEvent("onpropertychange",nr),Kn=Qn=null)}function nr(e){if("value"===e.propertyName&&Yn(Kn)){var t=[];Wn(t,Kn,e,we(e)),Ne(Gn,t)}}function rr(e,t,n){"focusin"===e?(tr(),Kn=n,(Qn=t).attachEvent("onpropertychange",nr)):"focusout"===e&&tr()}function ar(e){if("selectionchange"===e||"keyup"===e||"keydown"===e)return Yn(Kn)}function ir(e,t){if("click"===e)return Yn(t)}function or(e,t){if("input"===e||"change"===e)return Yn(t)}var lr="function"===typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e===1/t)||e!==e&&t!==t};function sr(e,t){if(lr(e,t))return!0;if("object"!==typeof e||null===e||"object"!==typeof t||null===t)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var a=n[r];if(!d.call(t,a)||!lr(e[a],t[a]))return!1}return!0}function ur(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function cr(e,t){var n,r=ur(e);for(e=0;r;){if(3===r.nodeType){if(n=e+r.textContent.length,e<=t&&n>=t)return{node:r,offset:t-e};e=n}e:{for(;r;){if(r.nextSibling){r=r.nextSibling;break e}r=r.parentNode}r=void 0}r=ur(r)}}function dr(e,t){return!(!e||!t)&&(e===t||(!e||3!==e.nodeType)&&(t&&3===t.nodeType?dr(e,t.parentNode):"contains"in e?e.contains(t):!!e.compareDocumentPosition&&!!(16&e.compareDocumentPosition(t))))}function fr(){for(var e=window,t=G();t instanceof e.HTMLIFrameElement;){try{var n="string"===typeof t.contentWindow.location.href}catch(r){n=!1}if(!n)break;t=G((e=t.contentWindow).document)}return t}function pr(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&("input"===t&&("text"===e.type||"search"===e.type||"tel"===e.type||"url"===e.type||"password"===e.type)||"textarea"===t||"true"===e.contentEditable)}function hr(e){var t=fr(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&dr(n.ownerDocument.documentElement,n)){if(null!==r&&pr(n))if(t=r.start,void 0===(e=r.end)&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if((e=(t=n.ownerDocument||document)&&t.defaultView||window).getSelection){e=e.getSelection();var a=n.textContent.length,i=Math.min(r.start,a);r=void 0===r.end?i:Math.min(r.end,a),!e.extend&&i>r&&(a=r,r=i,i=a),a=cr(n,i);var o=cr(n,r);a&&o&&(1!==e.rangeCount||e.anchorNode!==a.node||e.anchorOffset!==a.offset||e.focusNode!==o.node||e.focusOffset!==o.offset)&&((t=t.createRange()).setStart(a.node,a.offset),e.removeAllRanges(),i>r?(e.addRange(t),e.extend(o.node,o.offset)):(t.setEnd(o.node,o.offset),e.addRange(t)))}for(t=[],e=n;e=e.parentNode;)1===e.nodeType&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for("function"===typeof n.focus&&n.focus(),n=0;n<t.length;n++)(e=t[n]).element.scrollLeft=e.left,e.element.scrollTop=e.top}}var mr=c&&"documentMode"in document&&11>=document.documentMode,gr=null,yr=null,vr=null,br=!1;function xr(e,t,n){var r=n.window===n?n.document:9===n.nodeType?n:n.ownerDocument;br||null==gr||gr!==G(r)||("selectionStart"in(r=gr)&&pr(r)?r={start:r.selectionStart,end:r.selectionEnd}:r={anchorNode:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection()).anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset},vr&&sr(vr,r)||(vr=r,0<(r=Qr(yr,"onSelect")).length&&(t=new cn("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=gr)))}function wr(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var kr={animationend:wr("Animation","AnimationEnd"),animationiteration:wr("Animation","AnimationIteration"),animationstart:wr("Animation","AnimationStart"),transitionend:wr("Transition","TransitionEnd")},Sr={},Ar={};function Cr(e){if(Sr[e])return Sr[e];if(!kr[e])return e;var t,n=kr[e];for(t in n)if(n.hasOwnProperty(t)&&t in Ar)return Sr[e]=n[t];return e}c&&(Ar=document.createElement("div").style,"AnimationEvent"in window||(delete kr.animationend.animation,delete kr.animationiteration.animation,delete kr.animationstart.animation),"TransitionEvent"in window||delete kr.transitionend.transition);var Er=Cr("animationend"),Pr=Cr("animationiteration"),_r=Cr("animationstart"),jr=Cr("transitionend"),Tr=new Map,Nr="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function zr(e,t){Tr.set(e,t),s(t,[e])}for(var Rr=0;Rr<Nr.length;Rr++){var Ir=Nr[Rr];zr(Ir.toLowerCase(),"on"+(Ir[0].toUpperCase()+Ir.slice(1)))}zr(Er,"onAnimationEnd"),zr(Pr,"onAnimationIteration"),zr(_r,"onAnimationStart"),zr("dblclick","onDoubleClick"),zr("focusin","onFocus"),zr("focusout","onBlur"),zr(jr,"onTransitionEnd"),u("onMouseEnter",["mouseout","mouseover"]),u("onMouseLeave",["mouseout","mouseover"]),u("onPointerEnter",["pointerout","pointerover"]),u("onPointerLeave",["pointerout","pointerover"]),s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" ")),s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" ")),s("onBeforeInput",["compositionend","keypress","textInput","paste"]),s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" ")),s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var Mr="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),Dr=new Set("cancel close invalid load scroll toggle".split(" ").concat(Mr));function Or(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,function(e,t,n,r,a,o,l,s,u){if(Ue.apply(this,arguments),De){if(!De)throw Error(i(198));var c=Oe;De=!1,Oe=null,Le||(Le=!0,Fe=c)}}(r,t,void 0,e),e.currentTarget=null}function Lr(e,t){t=0!==(4&t);for(var n=0;n<e.length;n++){var r=e[n],a=r.event;r=r.listeners;e:{var i=void 0;if(t)for(var o=r.length-1;0<=o;o--){var l=r[o],s=l.instance,u=l.currentTarget;if(l=l.listener,s!==i&&a.isPropagationStopped())break e;Or(a,l,u),i=s}else for(o=0;o<r.length;o++){if(s=(l=r[o]).instance,u=l.currentTarget,l=l.listener,s!==i&&a.isPropagationStopped())break e;Or(a,l,u),i=s}}}if(Le)throw e=Fe,Le=!1,Fe=null,e}function Fr(e,t){var n=t[ma];void 0===n&&(n=t[ma]=new Set);var r=e+"__bubble";n.has(r)||(Hr(t,e,2,!1),n.add(r))}function Br(e,t,n){var r=0;t&&(r|=4),Hr(n,e,r,t)}var Ur="_reactListening"+Math.random().toString(36).slice(2);function $r(e){if(!e[Ur]){e[Ur]=!0,o.forEach(function(t){"selectionchange"!==t&&(Dr.has(t)||Br(t,!1,e),Br(t,!0,e))});var t=9===e.nodeType?e:e.ownerDocument;null===t||t[Ur]||(t[Ur]=!0,Br("selectionchange",!1,t))}}function Hr(e,t,n,r){switch(qt(t)){case 1:var a=Wt;break;case 4:a=Qt;break;default:a=Kt}n=a.bind(null,t,n,e),a=void 0,!Re||"touchstart"!==t&&"touchmove"!==t&&"wheel"!==t||(a=!0),r?void 0!==a?e.addEventListener(t,n,{capture:!0,passive:a}):e.addEventListener(t,n,!0):void 0!==a?e.addEventListener(t,n,{passive:a}):e.addEventListener(t,n,!1)}function Vr(e,t,n,r,a){var i=r;if(0===(1&t)&&0===(2&t)&&null!==r)e:for(;;){if(null===r)return;var o=r.tag;if(3===o||4===o){var l=r.stateNode.containerInfo;if(l===a||8===l.nodeType&&l.parentNode===a)break;if(4===o)for(o=r.return;null!==o;){var s=o.tag;if((3===s||4===s)&&((s=o.stateNode.containerInfo)===a||8===s.nodeType&&s.parentNode===a))return;o=o.return}for(;null!==l;){if(null===(o=va(l)))return;if(5===(s=o.tag)||6===s){r=i=o;continue e}l=l.parentNode}}r=r.return}Ne(function(){var r=i,a=we(n),o=[];e:{var l=Tr.get(e);if(void 0!==l){var s=cn,u=e;switch(e){case"keypress":if(0===tn(n))break e;case"keydown":case"keyup":s=Pn;break;case"focusin":u="focus",s=gn;break;case"focusout":u="blur",s=gn;break;case"beforeblur":case"afterblur":s=gn;break;case"click":if(2===n.button)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":s=hn;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":s=mn;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":s=jn;break;case Er:case Pr:case _r:s=yn;break;case jr:s=Tn;break;case"scroll":s=fn;break;case"wheel":s=zn;break;case"copy":case"cut":case"paste":s=bn;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":s=_n}var c=0!==(4&t),d=!c&&"scroll"===e,f=c?null!==l?l+"Capture":null:l;c=[];for(var p,h=r;null!==h;){var m=(p=h).stateNode;if(5===p.tag&&null!==m&&(p=m,null!==f&&(null!=(m=ze(h,f))&&c.push(Wr(h,m,p)))),d)break;h=h.return}0<c.length&&(l=new s(l,u,null,n,a),o.push({event:l,listeners:c}))}}if(0===(7&t)){if(s="mouseout"===e||"pointerout"===e,(!(l="mouseover"===e||"pointerover"===e)||n===xe||!(u=n.relatedTarget||n.fromElement)||!va(u)&&!u[ha])&&(s||l)&&(l=a.window===a?a:(l=a.ownerDocument)?l.defaultView||l.parentWindow:window,s?(s=r,null!==(u=(u=n.relatedTarget||n.toElement)?va(u):null)&&(u!==(d=$e(u))||5!==u.tag&&6!==u.tag)&&(u=null)):(s=null,u=r),s!==u)){if(c=hn,m="onMouseLeave",f="onMouseEnter",h="mouse","pointerout"!==e&&"pointerover"!==e||(c=_n,m="onPointerLeave",f="onPointerEnter",h="pointer"),d=null==s?l:xa(s),p=null==u?l:xa(u),(l=new c(m,h+"leave",s,n,a)).target=d,l.relatedTarget=p,m=null,va(a)===r&&((c=new c(f,h+"enter",u,n,a)).target=p,c.relatedTarget=d,m=c),d=m,s&&u)e:{for(f=u,h=0,p=c=s;p;p=Kr(p))h++;for(p=0,m=f;m;m=Kr(m))p++;for(;0<h-p;)c=Kr(c),h--;for(;0<p-h;)f=Kr(f),p--;for(;h--;){if(c===f||null!==f&&c===f.alternate)break e;c=Kr(c),f=Kr(f)}c=null}else c=null;null!==s&&Gr(o,l,s,c,!1),null!==u&&null!==d&&Gr(o,d,u,c,!0)}if("select"===(s=(l=r?xa(r):window).nodeName&&l.nodeName.toLowerCase())||"input"===s&&"file"===l.type)var g=qn;else if(Vn(l))if(Xn)g=or;else{g=ar;var y=rr}else(s=l.nodeName)&&"input"===s.toLowerCase()&&("checkbox"===l.type||"radio"===l.type)&&(g=ir);switch(g&&(g=g(e,r))?Wn(o,g,n,a):(y&&y(e,l,r),"focusout"===e&&(y=l._wrapperState)&&y.controlled&&"number"===l.type&&ee(l,"number",l.value)),y=r?xa(r):window,e){case"focusin":(Vn(y)||"true"===y.contentEditable)&&(gr=y,yr=r,vr=null);break;case"focusout":vr=yr=gr=null;break;case"mousedown":br=!0;break;case"contextmenu":case"mouseup":case"dragend":br=!1,xr(o,n,a);break;case"selectionchange":if(mr)break;case"keydown":case"keyup":xr(o,n,a)}var v;if(In)e:{switch(e){case"compositionstart":var b="onCompositionStart";break e;case"compositionend":b="onCompositionEnd";break e;case"compositionupdate":b="onCompositionUpdate";break e}b=void 0}else $n?Bn(e,n)&&(b="onCompositionEnd"):"keydown"===e&&229===n.keyCode&&(b="onCompositionStart");b&&(On&&"ko"!==n.locale&&($n||"onCompositionStart"!==b?"onCompositionEnd"===b&&$n&&(v=en()):(Zt="value"in(Xt=a)?Xt.value:Xt.textContent,$n=!0)),0<(y=Qr(r,b)).length&&(b=new xn(b,e,null,n,a),o.push({event:b,listeners:y}),v?b.data=v:null!==(v=Un(n))&&(b.data=v))),(v=Dn?function(e,t){switch(e){case"compositionend":return Un(t);case"keypress":return 32!==t.which?null:(Fn=!0,Ln);case"textInput":return(e=t.data)===Ln&&Fn?null:e;default:return null}}(e,n):function(e,t){if($n)return"compositionend"===e||!In&&Bn(e,t)?(e=en(),Jt=Zt=Xt=null,$n=!1,e):null;switch(e){case"paste":default:return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return On&&"ko"!==t.locale?null:t.data}}(e,n))&&(0<(r=Qr(r,"onBeforeInput")).length&&(a=new xn("onBeforeInput","beforeinput",null,n,a),o.push({event:a,listeners:r}),a.data=v))}Lr(o,t)})}function Wr(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Qr(e,t){for(var n=t+"Capture",r=[];null!==e;){var a=e,i=a.stateNode;5===a.tag&&null!==i&&(a=i,null!=(i=ze(e,n))&&r.unshift(Wr(e,i,a)),null!=(i=ze(e,t))&&r.push(Wr(e,i,a))),e=e.return}return r}function Kr(e){if(null===e)return null;do{e=e.return}while(e&&5!==e.tag);return e||null}function Gr(e,t,n,r,a){for(var i=t._reactName,o=[];null!==n&&n!==r;){var l=n,s=l.alternate,u=l.stateNode;if(null!==s&&s===r)break;5===l.tag&&null!==u&&(l=u,a?null!=(s=ze(n,i))&&o.unshift(Wr(n,s,l)):a||null!=(s=ze(n,i))&&o.push(Wr(n,s,l))),n=n.return}0!==o.length&&e.push({event:t,listeners:o})}var Yr=/\r\n?/g,qr=/\u0000|\uFFFD/g;function Xr(e){return("string"===typeof e?e:""+e).replace(Yr,"\n").replace(qr,"")}function Zr(e,t,n){if(t=Xr(t),Xr(e)!==t&&n)throw Error(i(425))}function Jr(){}var ea=null,ta=null;function na(e,t){return"textarea"===e||"noscript"===e||"string"===typeof t.children||"number"===typeof t.children||"object"===typeof t.dangerouslySetInnerHTML&&null!==t.dangerouslySetInnerHTML&&null!=t.dangerouslySetInnerHTML.__html}var ra="function"===typeof setTimeout?setTimeout:void 0,aa="function"===typeof clearTimeout?clearTimeout:void 0,ia="function"===typeof Promise?Promise:void 0,oa="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof ia?function(e){return ia.resolve(null).then(e).catch(la)}:ra;function la(e){setTimeout(function(){throw e})}function sa(e,t){var n=t,r=0;do{var a=n.nextSibling;if(e.removeChild(n),a&&8===a.nodeType)if("/$"===(n=a.data)){if(0===r)return e.removeChild(a),void $t(t);r--}else"$"!==n&&"$?"!==n&&"$!"!==n||r++;n=a}while(n);$t(t)}function ua(e){for(;null!=e;e=e.nextSibling){var t=e.nodeType;if(1===t||3===t)break;if(8===t){if("$"===(t=e.data)||"$!"===t||"$?"===t)break;if("/$"===t)return null}}return e}function ca(e){e=e.previousSibling;for(var t=0;e;){if(8===e.nodeType){var n=e.data;if("$"===n||"$!"===n||"$?"===n){if(0===t)return e;t--}else"/$"===n&&t++}e=e.previousSibling}return null}var da=Math.random().toString(36).slice(2),fa="__reactFiber$"+da,pa="__reactProps$"+da,ha="__reactContainer$"+da,ma="__reactEvents$"+da,ga="__reactListeners$"+da,ya="__reactHandles$"+da;function va(e){var t=e[fa];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ha]||n[fa]){if(n=t.alternate,null!==t.child||null!==n&&null!==n.child)for(e=ca(e);null!==e;){if(n=e[fa])return n;e=ca(e)}return t}n=(e=n).parentNode}return null}function ba(e){return!(e=e[fa]||e[ha])||5!==e.tag&&6!==e.tag&&13!==e.tag&&3!==e.tag?null:e}function xa(e){if(5===e.tag||6===e.tag)return e.stateNode;throw Error(i(33))}function wa(e){return e[pa]||null}var ka=[],Sa=-1;function Aa(e){return{current:e}}function Ca(e){0>Sa||(e.current=ka[Sa],ka[Sa]=null,Sa--)}function Ea(e,t){Sa++,ka[Sa]=e.current,e.current=t}var Pa={},_a=Aa(Pa),ja=Aa(!1),Ta=Pa;function Na(e,t){var n=e.type.contextTypes;if(!n)return Pa;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var a,i={};for(a in n)i[a]=t[a];return r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function za(e){return null!==(e=e.childContextTypes)&&void 0!==e}function Ra(){Ca(ja),Ca(_a)}function Ia(e,t,n){if(_a.current!==Pa)throw Error(i(168));Ea(_a,t),Ea(ja,n)}function Ma(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,"function"!==typeof r.getChildContext)return n;for(var a in r=r.getChildContext())if(!(a in t))throw Error(i(108,H(e)||"Unknown",a));return O({},n,r)}function Da(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Pa,Ta=_a.current,Ea(_a,e),Ea(ja,ja.current),!0}function Oa(e,t,n){var r=e.stateNode;if(!r)throw Error(i(169));n?(e=Ma(e,t,Ta),r.__reactInternalMemoizedMergedChildContext=e,Ca(ja),Ca(_a),Ea(_a,e)):Ca(ja),Ea(ja,n)}var La=null,Fa=!1,Ba=!1;function Ua(e){null===La?La=[e]:La.push(e)}function $a(){if(!Ba&&null!==La){Ba=!0;var e=0,t=bt;try{var n=La;for(bt=1;e<n.length;e++){var r=n[e];do{r=r(!0)}while(null!==r)}La=null,Fa=!1}catch(a){throw null!==La&&(La=La.slice(e+1)),Ke(Je,$a),a}finally{bt=t,Ba=!1}}return null}var Ha=[],Va=0,Wa=null,Qa=0,Ka=[],Ga=0,Ya=null,qa=1,Xa="";function Za(e,t){Ha[Va++]=Qa,Ha[Va++]=Wa,Wa=e,Qa=t}function Ja(e,t,n){Ka[Ga++]=qa,Ka[Ga++]=Xa,Ka[Ga++]=Ya,Ya=e;var r=qa;e=Xa;var a=32-ot(r)-1;r&=~(1<<a),n+=1;var i=32-ot(t)+a;if(30<i){var o=a-a%5;i=(r&(1<<o)-1).toString(32),r>>=o,a-=o,qa=1<<32-ot(t)+a|n<<a|r,Xa=i+e}else qa=1<<i|n<<a|r,Xa=e}function ei(e){null!==e.return&&(Za(e,1),Ja(e,1,0))}function ti(e){for(;e===Wa;)Wa=Ha[--Va],Ha[Va]=null,Qa=Ha[--Va],Ha[Va]=null;for(;e===Ya;)Ya=Ka[--Ga],Ka[Ga]=null,Xa=Ka[--Ga],Ka[Ga]=null,qa=Ka[--Ga],Ka[Ga]=null}var ni=null,ri=null,ai=!1,ii=null;function oi(e,t){var n=Nu(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,null===(t=e.deletions)?(e.deletions=[n],e.flags|=16):t.push(n)}function li(e,t){switch(e.tag){case 5:var n=e.type;return null!==(t=1!==t.nodeType||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t)&&(e.stateNode=t,ni=e,ri=ua(t.firstChild),!0);case 6:return null!==(t=""===e.pendingProps||3!==t.nodeType?null:t)&&(e.stateNode=t,ni=e,ri=null,!0);case 13:return null!==(t=8!==t.nodeType?null:t)&&(n=null!==Ya?{id:qa,overflow:Xa}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},(n=Nu(18,null,null,0)).stateNode=t,n.return=e,e.child=n,ni=e,ri=null,!0);default:return!1}}function si(e){return 0!==(1&e.mode)&&0===(128&e.flags)}function ui(e){if(ai){var t=ri;if(t){var n=t;if(!li(e,t)){if(si(e))throw Error(i(418));t=ua(n.nextSibling);var r=ni;t&&li(e,t)?oi(r,n):(e.flags=-4097&e.flags|2,ai=!1,ni=e)}}else{if(si(e))throw Error(i(418));e.flags=-4097&e.flags|2,ai=!1,ni=e}}}function ci(e){for(e=e.return;null!==e&&5!==e.tag&&3!==e.tag&&13!==e.tag;)e=e.return;ni=e}function di(e){if(e!==ni)return!1;if(!ai)return ci(e),ai=!0,!1;var t;if((t=3!==e.tag)&&!(t=5!==e.tag)&&(t="head"!==(t=e.type)&&"body"!==t&&!na(e.type,e.memoizedProps)),t&&(t=ri)){if(si(e))throw fi(),Error(i(418));for(;t;)oi(e,t),t=ua(t.nextSibling)}if(ci(e),13===e.tag){if(!(e=null!==(e=e.memoizedState)?e.dehydrated:null))throw Error(i(317));e:{for(e=e.nextSibling,t=0;e;){if(8===e.nodeType){var n=e.data;if("/$"===n){if(0===t){ri=ua(e.nextSibling);break e}t--}else"$"!==n&&"$!"!==n&&"$?"!==n||t++}e=e.nextSibling}ri=null}}else ri=ni?ua(e.stateNode.nextSibling):null;return!0}function fi(){for(var e=ri;e;)e=ua(e.nextSibling)}function pi(){ri=ni=null,ai=!1}function hi(e){null===ii?ii=[e]:ii.push(e)}var mi=x.ReactCurrentBatchConfig;function gi(e,t,n){if(null!==(e=n.ref)&&"function"!==typeof e&&"object"!==typeof e){if(n._owner){if(n=n._owner){if(1!==n.tag)throw Error(i(309));var r=n.stateNode}if(!r)throw Error(i(147,e));var a=r,o=""+e;return null!==t&&null!==t.ref&&"function"===typeof t.ref&&t.ref._stringRef===o?t.ref:(t=function(e){var t=a.refs;null===e?delete t[o]:t[o]=e},t._stringRef=o,t)}if("string"!==typeof e)throw Error(i(284));if(!n._owner)throw Error(i(290,e))}return e}function yi(e,t){throw e=Object.prototype.toString.call(t),Error(i(31,"[object Object]"===e?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function vi(e){return(0,e._init)(e._payload)}function bi(e){function t(t,n){if(e){var r=t.deletions;null===r?(t.deletions=[n],t.flags|=16):r.push(n)}}function n(n,r){if(!e)return null;for(;null!==r;)t(n,r),r=r.sibling;return null}function r(e,t){for(e=new Map;null!==t;)null!==t.key?e.set(t.key,t):e.set(t.index,t),t=t.sibling;return e}function a(e,t){return(e=Ru(e,t)).index=0,e.sibling=null,e}function o(t,n,r){return t.index=r,e?null!==(r=t.alternate)?(r=r.index)<n?(t.flags|=2,n):r:(t.flags|=2,n):(t.flags|=1048576,n)}function l(t){return e&&null===t.alternate&&(t.flags|=2),t}function s(e,t,n,r){return null===t||6!==t.tag?((t=Ou(n,e.mode,r)).return=e,t):((t=a(t,n)).return=e,t)}function u(e,t,n,r){var i=n.type;return i===S?d(e,t,n.props.children,r,n.key):null!==t&&(t.elementType===i||"object"===typeof i&&null!==i&&i.$$typeof===z&&vi(i)===t.type)?((r=a(t,n.props)).ref=gi(e,t,n),r.return=e,r):((r=Iu(n.type,n.key,n.props,null,e.mode,r)).ref=gi(e,t,n),r.return=e,r)}function c(e,t,n,r){return null===t||4!==t.tag||t.stateNode.containerInfo!==n.containerInfo||t.stateNode.implementation!==n.implementation?((t=Lu(n,e.mode,r)).return=e,t):((t=a(t,n.children||[])).return=e,t)}function d(e,t,n,r,i){return null===t||7!==t.tag?((t=Mu(n,e.mode,r,i)).return=e,t):((t=a(t,n)).return=e,t)}function f(e,t,n){if("string"===typeof t&&""!==t||"number"===typeof t)return(t=Ou(""+t,e.mode,n)).return=e,t;if("object"===typeof t&&null!==t){switch(t.$$typeof){case w:return(n=Iu(t.type,t.key,t.props,null,e.mode,n)).ref=gi(e,null,t),n.return=e,n;case k:return(t=Lu(t,e.mode,n)).return=e,t;case z:return f(e,(0,t._init)(t._payload),n)}if(te(t)||M(t))return(t=Mu(t,e.mode,n,null)).return=e,t;yi(e,t)}return null}function p(e,t,n,r){var a=null!==t?t.key:null;if("string"===typeof n&&""!==n||"number"===typeof n)return null!==a?null:s(e,t,""+n,r);if("object"===typeof n&&null!==n){switch(n.$$typeof){case w:return n.key===a?u(e,t,n,r):null;case k:return n.key===a?c(e,t,n,r):null;case z:return p(e,t,(a=n._init)(n._payload),r)}if(te(n)||M(n))return null!==a?null:d(e,t,n,r,null);yi(e,n)}return null}function h(e,t,n,r,a){if("string"===typeof r&&""!==r||"number"===typeof r)return s(t,e=e.get(n)||null,""+r,a);if("object"===typeof r&&null!==r){switch(r.$$typeof){case w:return u(t,e=e.get(null===r.key?n:r.key)||null,r,a);case k:return c(t,e=e.get(null===r.key?n:r.key)||null,r,a);case z:return h(e,t,n,(0,r._init)(r._payload),a)}if(te(r)||M(r))return d(t,e=e.get(n)||null,r,a,null);yi(t,r)}return null}function m(a,i,l,s){for(var u=null,c=null,d=i,m=i=0,g=null;null!==d&&m<l.length;m++){d.index>m?(g=d,d=null):g=d.sibling;var y=p(a,d,l[m],s);if(null===y){null===d&&(d=g);break}e&&d&&null===y.alternate&&t(a,d),i=o(y,i,m),null===c?u=y:c.sibling=y,c=y,d=g}if(m===l.length)return n(a,d),ai&&Za(a,m),u;if(null===d){for(;m<l.length;m++)null!==(d=f(a,l[m],s))&&(i=o(d,i,m),null===c?u=d:c.sibling=d,c=d);return ai&&Za(a,m),u}for(d=r(a,d);m<l.length;m++)null!==(g=h(d,a,m,l[m],s))&&(e&&null!==g.alternate&&d.delete(null===g.key?m:g.key),i=o(g,i,m),null===c?u=g:c.sibling=g,c=g);return e&&d.forEach(function(e){return t(a,e)}),ai&&Za(a,m),u}function g(a,l,s,u){var c=M(s);if("function"!==typeof c)throw Error(i(150));if(null==(s=c.call(s)))throw Error(i(151));for(var d=c=null,m=l,g=l=0,y=null,v=s.next();null!==m&&!v.done;g++,v=s.next()){m.index>g?(y=m,m=null):y=m.sibling;var b=p(a,m,v.value,u);if(null===b){null===m&&(m=y);break}e&&m&&null===b.alternate&&t(a,m),l=o(b,l,g),null===d?c=b:d.sibling=b,d=b,m=y}if(v.done)return n(a,m),ai&&Za(a,g),c;if(null===m){for(;!v.done;g++,v=s.next())null!==(v=f(a,v.value,u))&&(l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return ai&&Za(a,g),c}for(m=r(a,m);!v.done;g++,v=s.next())null!==(v=h(m,a,g,v.value,u))&&(e&&null!==v.alternate&&m.delete(null===v.key?g:v.key),l=o(v,l,g),null===d?c=v:d.sibling=v,d=v);return e&&m.forEach(function(e){return t(a,e)}),ai&&Za(a,g),c}return function e(r,i,o,s){if("object"===typeof o&&null!==o&&o.type===S&&null===o.key&&(o=o.props.children),"object"===typeof o&&null!==o){switch(o.$$typeof){case w:e:{for(var u=o.key,c=i;null!==c;){if(c.key===u){if((u=o.type)===S){if(7===c.tag){n(r,c.sibling),(i=a(c,o.props.children)).return=r,r=i;break e}}else if(c.elementType===u||"object"===typeof u&&null!==u&&u.$$typeof===z&&vi(u)===c.type){n(r,c.sibling),(i=a(c,o.props)).ref=gi(r,c,o),i.return=r,r=i;break e}n(r,c);break}t(r,c),c=c.sibling}o.type===S?((i=Mu(o.props.children,r.mode,s,o.key)).return=r,r=i):((s=Iu(o.type,o.key,o.props,null,r.mode,s)).ref=gi(r,i,o),s.return=r,r=s)}return l(r);case k:e:{for(c=o.key;null!==i;){if(i.key===c){if(4===i.tag&&i.stateNode.containerInfo===o.containerInfo&&i.stateNode.implementation===o.implementation){n(r,i.sibling),(i=a(i,o.children||[])).return=r,r=i;break e}n(r,i);break}t(r,i),i=i.sibling}(i=Lu(o,r.mode,s)).return=r,r=i}return l(r);case z:return e(r,i,(c=o._init)(o._payload),s)}if(te(o))return m(r,i,o,s);if(M(o))return g(r,i,o,s);yi(r,o)}return"string"===typeof o&&""!==o||"number"===typeof o?(o=""+o,null!==i&&6===i.tag?(n(r,i.sibling),(i=a(i,o)).return=r,r=i):(n(r,i),(i=Ou(o,r.mode,s)).return=r,r=i),l(r)):n(r,i)}}var xi=bi(!0),wi=bi(!1),ki=Aa(null),Si=null,Ai=null,Ci=null;function Ei(){Ci=Ai=Si=null}function Pi(e){var t=ki.current;Ca(ki),e._currentValue=t}function _i(e,t,n){for(;null!==e;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,null!==r&&(r.childLanes|=t)):null!==r&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function ji(e,t){Si=e,Ci=Ai=null,null!==(e=e.dependencies)&&null!==e.firstContext&&(0!==(e.lanes&t)&&(bl=!0),e.firstContext=null)}function Ti(e){var t=e._currentValue;if(Ci!==e)if(e={context:e,memoizedValue:t,next:null},null===Ai){if(null===Si)throw Error(i(308));Ai=e,Si.dependencies={lanes:0,firstContext:e}}else Ai=Ai.next=e;return t}var Ni=null;function zi(e){null===Ni?Ni=[e]:Ni.push(e)}function Ri(e,t,n,r){var a=t.interleaved;return null===a?(n.next=n,zi(t)):(n.next=a.next,a.next=n),t.interleaved=n,Ii(e,r)}function Ii(e,t){e.lanes|=t;var n=e.alternate;for(null!==n&&(n.lanes|=t),n=e,e=e.return;null!==e;)e.childLanes|=t,null!==(n=e.alternate)&&(n.childLanes|=t),n=e,e=e.return;return 3===n.tag?n.stateNode:null}var Mi=!1;function Di(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function Oi(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function Li(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function Fi(e,t,n){var r=e.updateQueue;if(null===r)return null;if(r=r.shared,0!==(2&_s)){var a=r.pending;return null===a?t.next=t:(t.next=a.next,a.next=t),r.pending=t,Ii(e,n)}return null===(a=r.interleaved)?(t.next=t,zi(r)):(t.next=a.next,a.next=t),r.interleaved=t,Ii(e,n)}function Bi(e,t,n){if(null!==(t=t.updateQueue)&&(t=t.shared,0!==(4194240&n))){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}function Ui(e,t){var n=e.updateQueue,r=e.alternate;if(null!==r&&n===(r=r.updateQueue)){var a=null,i=null;if(null!==(n=n.firstBaseUpdate)){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};null===i?a=i=o:i=i.next=o,n=n.next}while(null!==n);null===i?a=i=t:i=i.next=t}else a=i=t;return n={baseState:r.baseState,firstBaseUpdate:a,lastBaseUpdate:i,shared:r.shared,effects:r.effects},void(e.updateQueue=n)}null===(e=n.lastBaseUpdate)?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function $i(e,t,n,r){var a=e.updateQueue;Mi=!1;var i=a.firstBaseUpdate,o=a.lastBaseUpdate,l=a.shared.pending;if(null!==l){a.shared.pending=null;var s=l,u=s.next;s.next=null,null===o?i=u:o.next=u,o=s;var c=e.alternate;null!==c&&((l=(c=c.updateQueue).lastBaseUpdate)!==o&&(null===l?c.firstBaseUpdate=u:l.next=u,c.lastBaseUpdate=s))}if(null!==i){var d=a.baseState;for(o=0,c=u=s=null,l=i;;){var f=l.lane,p=l.eventTime;if((r&f)===f){null!==c&&(c=c.next={eventTime:p,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var h=e,m=l;switch(f=t,p=n,m.tag){case 1:if("function"===typeof(h=m.payload)){d=h.call(p,d,f);break e}d=h;break e;case 3:h.flags=-65537&h.flags|128;case 0:if(null===(f="function"===typeof(h=m.payload)?h.call(p,d,f):h)||void 0===f)break e;d=O({},d,f);break e;case 2:Mi=!0}}null!==l.callback&&0!==l.lane&&(e.flags|=64,null===(f=a.effects)?a.effects=[l]:f.push(l))}else p={eventTime:p,lane:f,tag:l.tag,payload:l.payload,callback:l.callback,next:null},null===c?(u=c=p,s=d):c=c.next=p,o|=f;if(null===(l=l.next)){if(null===(l=a.shared.pending))break;l=(f=l).next,f.next=null,a.lastBaseUpdate=f,a.shared.pending=null}}if(null===c&&(s=d),a.baseState=s,a.firstBaseUpdate=u,a.lastBaseUpdate=c,null!==(t=a.shared.interleaved)){a=t;do{o|=a.lane,a=a.next}while(a!==t)}else null===i&&(a.shared.lanes=0);Ds|=o,e.lanes=o,e.memoizedState=d}}function Hi(e,t,n){if(e=t.effects,t.effects=null,null!==e)for(t=0;t<e.length;t++){var r=e[t],a=r.callback;if(null!==a){if(r.callback=null,r=n,"function"!==typeof a)throw Error(i(191,a));a.call(r)}}}var Vi={},Wi=Aa(Vi),Qi=Aa(Vi),Ki=Aa(Vi);function Gi(e){if(e===Vi)throw Error(i(174));return e}function Yi(e,t){switch(Ea(Ki,t),Ea(Qi,e),Ea(Wi,Vi),e=t.nodeType){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:se(null,"");break;default:t=se(t=(e=8===e?t.parentNode:t).namespaceURI||null,e=e.tagName)}Ca(Wi),Ea(Wi,t)}function qi(){Ca(Wi),Ca(Qi),Ca(Ki)}function Xi(e){Gi(Ki.current);var t=Gi(Wi.current),n=se(t,e.type);t!==n&&(Ea(Qi,e),Ea(Wi,n))}function Zi(e){Qi.current===e&&(Ca(Wi),Ca(Qi))}var Ji=Aa(0);function eo(e){for(var t=e;null!==t;){if(13===t.tag){var n=t.memoizedState;if(null!==n&&(null===(n=n.dehydrated)||"$?"===n.data||"$!"===n.data))return t}else if(19===t.tag&&void 0!==t.memoizedProps.revealOrder){if(0!==(128&t.flags))return t}else if(null!==t.child){t.child.return=t,t=t.child;continue}if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var to=[];function no(){for(var e=0;e<to.length;e++)to[e]._workInProgressVersionPrimary=null;to.length=0}var ro=x.ReactCurrentDispatcher,ao=x.ReactCurrentBatchConfig,io=0,oo=null,lo=null,so=null,uo=!1,co=!1,fo=0,po=0;function ho(){throw Error(i(321))}function mo(e,t){if(null===t)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!lr(e[n],t[n]))return!1;return!0}function go(e,t,n,r,a,o){if(io=o,oo=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,ro.current=null===e||null===e.memoizedState?Jo:el,e=n(r,a),co){o=0;do{if(co=!1,fo=0,25<=o)throw Error(i(301));o+=1,so=lo=null,t.updateQueue=null,ro.current=tl,e=n(r,a)}while(co)}if(ro.current=Zo,t=null!==lo&&null!==lo.next,io=0,so=lo=oo=null,uo=!1,t)throw Error(i(300));return e}function yo(){var e=0!==fo;return fo=0,e}function vo(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return null===so?oo.memoizedState=so=e:so=so.next=e,so}function bo(){if(null===lo){var e=oo.alternate;e=null!==e?e.memoizedState:null}else e=lo.next;var t=null===so?oo.memoizedState:so.next;if(null!==t)so=t,lo=e;else{if(null===e)throw Error(i(310));e={memoizedState:(lo=e).memoizedState,baseState:lo.baseState,baseQueue:lo.baseQueue,queue:lo.queue,next:null},null===so?oo.memoizedState=so=e:so=so.next=e}return so}function xo(e,t){return"function"===typeof t?t(e):t}function wo(e){var t=bo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=lo,a=r.baseQueue,o=n.pending;if(null!==o){if(null!==a){var l=a.next;a.next=o.next,o.next=l}r.baseQueue=a=o,n.pending=null}if(null!==a){o=a.next,r=r.baseState;var s=l=null,u=null,c=o;do{var d=c.lane;if((io&d)===d)null!==u&&(u=u.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),r=c.hasEagerState?c.eagerState:e(r,c.action);else{var f={lane:d,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};null===u?(s=u=f,l=r):u=u.next=f,oo.lanes|=d,Ds|=d}c=c.next}while(null!==c&&c!==o);null===u?l=r:u.next=s,lr(r,t.memoizedState)||(bl=!0),t.memoizedState=r,t.baseState=l,t.baseQueue=u,n.lastRenderedState=r}if(null!==(e=n.interleaved)){a=e;do{o=a.lane,oo.lanes|=o,Ds|=o,a=a.next}while(a!==e)}else null===a&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function ko(e){var t=bo(),n=t.queue;if(null===n)throw Error(i(311));n.lastRenderedReducer=e;var r=n.dispatch,a=n.pending,o=t.memoizedState;if(null!==a){n.pending=null;var l=a=a.next;do{o=e(o,l.action),l=l.next}while(l!==a);lr(o,t.memoizedState)||(bl=!0),t.memoizedState=o,null===t.baseQueue&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function So(){}function Ao(e,t){var n=oo,r=bo(),a=t(),o=!lr(r.memoizedState,a);if(o&&(r.memoizedState=a,bl=!0),r=r.queue,Do(Po.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||null!==so&&1&so.memoizedState.tag){if(n.flags|=2048,No(9,Eo.bind(null,n,r,a,t),void 0,null),null===js)throw Error(i(349));0!==(30&io)||Co(n,t,a)}return a}function Co(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.stores=[e]):null===(n=t.stores)?t.stores=[e]:n.push(e)}function Eo(e,t,n,r){t.value=n,t.getSnapshot=r,_o(t)&&jo(e)}function Po(e,t,n){return n(function(){_o(t)&&jo(e)})}function _o(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!lr(e,n)}catch(r){return!0}}function jo(e){var t=Ii(e,1);null!==t&&nu(t,e,1,-1)}function To(e){var t=vo();return"function"===typeof e&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:xo,lastRenderedState:e},t.queue=e,e=e.dispatch=Go.bind(null,oo,e),[t.memoizedState,e]}function No(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},null===(t=oo.updateQueue)?(t={lastEffect:null,stores:null},oo.updateQueue=t,t.lastEffect=e.next=e):null===(n=t.lastEffect)?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e),e}function zo(){return bo().memoizedState}function Ro(e,t,n,r){var a=vo();oo.flags|=e,a.memoizedState=No(1|t,n,void 0,void 0===r?null:r)}function Io(e,t,n,r){var a=bo();r=void 0===r?null:r;var i=void 0;if(null!==lo){var o=lo.memoizedState;if(i=o.destroy,null!==r&&mo(r,o.deps))return void(a.memoizedState=No(t,n,i,r))}oo.flags|=e,a.memoizedState=No(1|t,n,i,r)}function Mo(e,t){return Ro(8390656,8,e,t)}function Do(e,t){return Io(2048,8,e,t)}function Oo(e,t){return Io(4,2,e,t)}function Lo(e,t){return Io(4,4,e,t)}function Fo(e,t){return"function"===typeof t?(e=e(),t(e),function(){t(null)}):null!==t&&void 0!==t?(e=e(),t.current=e,function(){t.current=null}):void 0}function Bo(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Io(4,4,Fo.bind(null,t,e),n)}function Uo(){}function $o(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function Ho(e,t){var n=bo();t=void 0===t?null:t;var r=n.memoizedState;return null!==r&&null!==t&&mo(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function Vo(e,t,n){return 0===(21&io)?(e.baseState&&(e.baseState=!1,bl=!0),e.memoizedState=n):(lr(n,t)||(n=mt(),oo.lanes|=n,Ds|=n,e.baseState=!0),t)}function Wo(e,t){var n=bt;bt=0!==n&&4>n?n:4,e(!0);var r=ao.transition;ao.transition={};try{e(!1),t()}finally{bt=n,ao.transition=r}}function Qo(){return bo().memoizedState}function Ko(e,t,n){var r=tu(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},Yo(e))qo(t,n);else if(null!==(n=Ri(e,t,n,r))){nu(n,e,r,eu()),Xo(n,t,r)}}function Go(e,t,n){var r=tu(e),a={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(Yo(e))qo(t,a);else{var i=e.alternate;if(0===e.lanes&&(null===i||0===i.lanes)&&null!==(i=t.lastRenderedReducer))try{var o=t.lastRenderedState,l=i(o,n);if(a.hasEagerState=!0,a.eagerState=l,lr(l,o)){var s=t.interleaved;return null===s?(a.next=a,zi(t)):(a.next=s.next,s.next=a),void(t.interleaved=a)}}catch(u){}null!==(n=Ri(e,t,a,r))&&(nu(n,e,r,a=eu()),Xo(n,t,r))}}function Yo(e){var t=e.alternate;return e===oo||null!==t&&t===oo}function qo(e,t){co=uo=!0;var n=e.pending;null===n?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function Xo(e,t,n){if(0!==(4194240&n)){var r=t.lanes;n|=r&=e.pendingLanes,t.lanes=n,vt(e,n)}}var Zo={readContext:Ti,useCallback:ho,useContext:ho,useEffect:ho,useImperativeHandle:ho,useInsertionEffect:ho,useLayoutEffect:ho,useMemo:ho,useReducer:ho,useRef:ho,useState:ho,useDebugValue:ho,useDeferredValue:ho,useTransition:ho,useMutableSource:ho,useSyncExternalStore:ho,useId:ho,unstable_isNewReconciler:!1},Jo={readContext:Ti,useCallback:function(e,t){return vo().memoizedState=[e,void 0===t?null:t],e},useContext:Ti,useEffect:Mo,useImperativeHandle:function(e,t,n){return n=null!==n&&void 0!==n?n.concat([e]):null,Ro(4194308,4,Fo.bind(null,t,e),n)},useLayoutEffect:function(e,t){return Ro(4194308,4,e,t)},useInsertionEffect:function(e,t){return Ro(4,2,e,t)},useMemo:function(e,t){var n=vo();return t=void 0===t?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=vo();return t=void 0!==n?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=Ko.bind(null,oo,e),[r.memoizedState,e]},useRef:function(e){return e={current:e},vo().memoizedState=e},useState:To,useDebugValue:Uo,useDeferredValue:function(e){return vo().memoizedState=e},useTransition:function(){var e=To(!1),t=e[0];return e=Wo.bind(null,e[1]),vo().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=oo,a=vo();if(ai){if(void 0===n)throw Error(i(407));n=n()}else{if(n=t(),null===js)throw Error(i(349));0!==(30&io)||Co(r,t,n)}a.memoizedState=n;var o={value:n,getSnapshot:t};return a.queue=o,Mo(Po.bind(null,r,o,e),[e]),r.flags|=2048,No(9,Eo.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=vo(),t=js.identifierPrefix;if(ai){var n=Xa;t=":"+t+"R"+(n=(qa&~(1<<32-ot(qa)-1)).toString(32)+n),0<(n=fo++)&&(t+="H"+n.toString(32)),t+=":"}else t=":"+t+"r"+(n=po++).toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},el={readContext:Ti,useCallback:$o,useContext:Ti,useEffect:Do,useImperativeHandle:Bo,useInsertionEffect:Oo,useLayoutEffect:Lo,useMemo:Ho,useReducer:wo,useRef:zo,useState:function(){return wo(xo)},useDebugValue:Uo,useDeferredValue:function(e){return Vo(bo(),lo.memoizedState,e)},useTransition:function(){return[wo(xo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:Ao,useId:Qo,unstable_isNewReconciler:!1},tl={readContext:Ti,useCallback:$o,useContext:Ti,useEffect:Do,useImperativeHandle:Bo,useInsertionEffect:Oo,useLayoutEffect:Lo,useMemo:Ho,useReducer:ko,useRef:zo,useState:function(){return ko(xo)},useDebugValue:Uo,useDeferredValue:function(e){var t=bo();return null===lo?t.memoizedState=e:Vo(t,lo.memoizedState,e)},useTransition:function(){return[ko(xo)[0],bo().memoizedState]},useMutableSource:So,useSyncExternalStore:Ao,useId:Qo,unstable_isNewReconciler:!1};function nl(e,t){if(e&&e.defaultProps){for(var n in t=O({},t),e=e.defaultProps)void 0===t[n]&&(t[n]=e[n]);return t}return t}function rl(e,t,n,r){n=null===(n=n(r,t=e.memoizedState))||void 0===n?t:O({},t,n),e.memoizedState=n,0===e.lanes&&(e.updateQueue.baseState=n)}var al={isMounted:function(e){return!!(e=e._reactInternals)&&$e(e)===e},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Li(r,a);i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nu(t,e,a,r),Bi(t,e,a))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=eu(),a=tu(e),i=Li(r,a);i.tag=1,i.payload=t,void 0!==n&&null!==n&&(i.callback=n),null!==(t=Fi(e,i,a))&&(nu(t,e,a,r),Bi(t,e,a))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=eu(),r=tu(e),a=Li(n,r);a.tag=2,void 0!==t&&null!==t&&(a.callback=t),null!==(t=Fi(e,a,r))&&(nu(t,e,r,n),Bi(t,e,r))}};function il(e,t,n,r,a,i,o){return"function"===typeof(e=e.stateNode).shouldComponentUpdate?e.shouldComponentUpdate(r,i,o):!t.prototype||!t.prototype.isPureReactComponent||(!sr(n,r)||!sr(a,i))}function ol(e,t,n){var r=!1,a=Pa,i=t.contextType;return"object"===typeof i&&null!==i?i=Ti(i):(a=za(t)?Ta:_a.current,i=(r=null!==(r=t.contextTypes)&&void 0!==r)?Na(e,a):Pa),t=new t(n,i),e.memoizedState=null!==t.state&&void 0!==t.state?t.state:null,t.updater=al,e.stateNode=t,t._reactInternals=e,r&&((e=e.stateNode).__reactInternalMemoizedUnmaskedChildContext=a,e.__reactInternalMemoizedMaskedChildContext=i),t}function ll(e,t,n,r){e=t.state,"function"===typeof t.componentWillReceiveProps&&t.componentWillReceiveProps(n,r),"function"===typeof t.UNSAFE_componentWillReceiveProps&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&al.enqueueReplaceState(t,t.state,null)}function sl(e,t,n,r){var a=e.stateNode;a.props=n,a.state=e.memoizedState,a.refs={},Di(e);var i=t.contextType;"object"===typeof i&&null!==i?a.context=Ti(i):(i=za(t)?Ta:_a.current,a.context=Na(e,i)),a.state=e.memoizedState,"function"===typeof(i=t.getDerivedStateFromProps)&&(rl(e,t,i,n),a.state=e.memoizedState),"function"===typeof t.getDerivedStateFromProps||"function"===typeof a.getSnapshotBeforeUpdate||"function"!==typeof a.UNSAFE_componentWillMount&&"function"!==typeof a.componentWillMount||(t=a.state,"function"===typeof a.componentWillMount&&a.componentWillMount(),"function"===typeof a.UNSAFE_componentWillMount&&a.UNSAFE_componentWillMount(),t!==a.state&&al.enqueueReplaceState(a,a.state,null),$i(e,n,a,r),a.state=e.memoizedState),"function"===typeof a.componentDidMount&&(e.flags|=4194308)}function ul(e,t){try{var n="",r=t;do{n+=U(r),r=r.return}while(r);var a=n}catch(i){a="\nError generating stack: "+i.message+"\n"+i.stack}return{value:e,source:t,stack:a,digest:null}}function cl(e,t,n){return{value:e,source:null,stack:null!=n?n:null,digest:null!=t?t:null}}function dl(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var fl="function"===typeof WeakMap?WeakMap:Map;function pl(e,t,n){(n=Li(-1,n)).tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){Vs||(Vs=!0,Ws=r),dl(0,t)},n}function hl(e,t,n){(n=Li(-1,n)).tag=3;var r=e.type.getDerivedStateFromError;if("function"===typeof r){var a=t.value;n.payload=function(){return r(a)},n.callback=function(){dl(0,t)}}var i=e.stateNode;return null!==i&&"function"===typeof i.componentDidCatch&&(n.callback=function(){dl(0,t),"function"!==typeof r&&(null===Qs?Qs=new Set([this]):Qs.add(this));var e=t.stack;this.componentDidCatch(t.value,{componentStack:null!==e?e:""})}),n}function ml(e,t,n){var r=e.pingCache;if(null===r){r=e.pingCache=new fl;var a=new Set;r.set(t,a)}else void 0===(a=r.get(t))&&(a=new Set,r.set(t,a));a.has(n)||(a.add(n),e=Cu.bind(null,e,t,n),t.then(e,e))}function gl(e){do{var t;if((t=13===e.tag)&&(t=null===(t=e.memoizedState)||null!==t.dehydrated),t)return e;e=e.return}while(null!==e);return null}function yl(e,t,n,r,a){return 0===(1&e.mode)?(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,1===n.tag&&(null===n.alternate?n.tag=17:((t=Li(-1,1)).tag=2,Fi(n,t,1))),n.lanes|=1),e):(e.flags|=65536,e.lanes=a,e)}var vl=x.ReactCurrentOwner,bl=!1;function xl(e,t,n,r){t.child=null===e?wi(t,null,n,r):xi(t,e.child,n,r)}function wl(e,t,n,r,a){n=n.render;var i=t.ref;return ji(t,a),r=go(e,t,n,r,i,a),n=yo(),null===e||bl?(ai&&n&&ei(t),t.flags|=1,xl(e,t,r,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vl(e,t,a))}function kl(e,t,n,r,a){if(null===e){var i=n.type;return"function"!==typeof i||zu(i)||void 0!==i.defaultProps||null!==n.compare||void 0!==n.defaultProps?((e=Iu(n.type,null,r,t,t.mode,a)).ref=t.ref,e.return=t,t.child=e):(t.tag=15,t.type=i,Sl(e,t,i,r,a))}if(i=e.child,0===(e.lanes&a)){var o=i.memoizedProps;if((n=null!==(n=n.compare)?n:sr)(o,r)&&e.ref===t.ref)return Vl(e,t,a)}return t.flags|=1,(e=Ru(i,r)).ref=t.ref,e.return=t,t.child=e}function Sl(e,t,n,r,a){if(null!==e){var i=e.memoizedProps;if(sr(i,r)&&e.ref===t.ref){if(bl=!1,t.pendingProps=r=i,0===(e.lanes&a))return t.lanes=e.lanes,Vl(e,t,a);0!==(131072&e.flags)&&(bl=!0)}}return El(e,t,n,r,a)}function Al(e,t,n){var r=t.pendingProps,a=r.children,i=null!==e?e.memoizedState:null;if("hidden"===r.mode)if(0===(1&t.mode))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Ea(Rs,zs),zs|=n;else{if(0===(1073741824&n))return e=null!==i?i.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Ea(Rs,zs),zs|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=null!==i?i.baseLanes:n,Ea(Rs,zs),zs|=r}else null!==i?(r=i.baseLanes|n,t.memoizedState=null):r=n,Ea(Rs,zs),zs|=r;return xl(e,t,a,n),t.child}function Cl(e,t){var n=t.ref;(null===e&&null!==n||null!==e&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function El(e,t,n,r,a){var i=za(n)?Ta:_a.current;return i=Na(t,i),ji(t,a),n=go(e,t,n,r,i,a),r=yo(),null===e||bl?(ai&&r&&ei(t),t.flags|=1,xl(e,t,n,a),t.child):(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~a,Vl(e,t,a))}function Pl(e,t,n,r,a){if(za(n)){var i=!0;Da(t)}else i=!1;if(ji(t,a),null===t.stateNode)Hl(e,t),ol(t,n,r),sl(t,n,r,a),r=!0;else if(null===e){var o=t.stateNode,l=t.memoizedProps;o.props=l;var s=o.context,u=n.contextType;"object"===typeof u&&null!==u?u=Ti(u):u=Na(t,u=za(n)?Ta:_a.current);var c=n.getDerivedStateFromProps,d="function"===typeof c||"function"===typeof o.getSnapshotBeforeUpdate;d||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==r||s!==u)&&ll(t,o,r,u),Mi=!1;var f=t.memoizedState;o.state=f,$i(t,r,o,a),s=t.memoizedState,l!==r||f!==s||ja.current||Mi?("function"===typeof c&&(rl(t,n,c,r),s=t.memoizedState),(l=Mi||il(t,n,l,r,f,s,u))?(d||"function"!==typeof o.UNSAFE_componentWillMount&&"function"!==typeof o.componentWillMount||("function"===typeof o.componentWillMount&&o.componentWillMount(),"function"===typeof o.UNSAFE_componentWillMount&&o.UNSAFE_componentWillMount()),"function"===typeof o.componentDidMount&&(t.flags|=4194308)):("function"===typeof o.componentDidMount&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=s),o.props=r,o.state=s,o.context=u,r=l):("function"===typeof o.componentDidMount&&(t.flags|=4194308),r=!1)}else{o=t.stateNode,Oi(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:nl(t.type,l),o.props=u,d=t.pendingProps,f=o.context,"object"===typeof(s=n.contextType)&&null!==s?s=Ti(s):s=Na(t,s=za(n)?Ta:_a.current);var p=n.getDerivedStateFromProps;(c="function"===typeof p||"function"===typeof o.getSnapshotBeforeUpdate)||"function"!==typeof o.UNSAFE_componentWillReceiveProps&&"function"!==typeof o.componentWillReceiveProps||(l!==d||f!==s)&&ll(t,o,r,s),Mi=!1,f=t.memoizedState,o.state=f,$i(t,r,o,a);var h=t.memoizedState;l!==d||f!==h||ja.current||Mi?("function"===typeof p&&(rl(t,n,p,r),h=t.memoizedState),(u=Mi||il(t,n,u,r,f,h,s)||!1)?(c||"function"!==typeof o.UNSAFE_componentWillUpdate&&"function"!==typeof o.componentWillUpdate||("function"===typeof o.componentWillUpdate&&o.componentWillUpdate(r,h,s),"function"===typeof o.UNSAFE_componentWillUpdate&&o.UNSAFE_componentWillUpdate(r,h,s)),"function"===typeof o.componentDidUpdate&&(t.flags|=4),"function"===typeof o.getSnapshotBeforeUpdate&&(t.flags|=1024)):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=h),o.props=r,o.state=h,o.context=s,r=u):("function"!==typeof o.componentDidUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=4),"function"!==typeof o.getSnapshotBeforeUpdate||l===e.memoizedProps&&f===e.memoizedState||(t.flags|=1024),r=!1)}return _l(e,t,n,r,i,a)}function _l(e,t,n,r,a,i){Cl(e,t);var o=0!==(128&t.flags);if(!r&&!o)return a&&Oa(t,n,!1),Vl(e,t,i);r=t.stateNode,vl.current=t;var l=o&&"function"!==typeof n.getDerivedStateFromError?null:r.render();return t.flags|=1,null!==e&&o?(t.child=xi(t,e.child,null,i),t.child=xi(t,null,l,i)):xl(e,t,l,i),t.memoizedState=r.state,a&&Oa(t,n,!0),t.child}function jl(e){var t=e.stateNode;t.pendingContext?Ia(0,t.pendingContext,t.pendingContext!==t.context):t.context&&Ia(0,t.context,!1),Yi(e,t.containerInfo)}function Tl(e,t,n,r,a){return pi(),hi(a),t.flags|=256,xl(e,t,n,r),t.child}var Nl,zl,Rl,Il,Ml={dehydrated:null,treeContext:null,retryLane:0};function Dl(e){return{baseLanes:e,cachePool:null,transitions:null}}function Ol(e,t,n){var r,a=t.pendingProps,o=Ji.current,l=!1,s=0!==(128&t.flags);if((r=s)||(r=(null===e||null!==e.memoizedState)&&0!==(2&o)),r?(l=!0,t.flags&=-129):null!==e&&null===e.memoizedState||(o|=1),Ea(Ji,1&o),null===e)return ui(t),null!==(e=t.memoizedState)&&null!==(e=e.dehydrated)?(0===(1&t.mode)?t.lanes=1:"$!"===e.data?t.lanes=8:t.lanes=1073741824,null):(s=a.children,e=a.fallback,l?(a=t.mode,l=t.child,s={mode:"hidden",children:s},0===(1&a)&&null!==l?(l.childLanes=0,l.pendingProps=s):l=Du(s,a,0,null),e=Mu(e,a,n,null),l.return=t,e.return=t,l.sibling=e,t.child=l,t.child.memoizedState=Dl(n),t.memoizedState=Ml,e):Ll(t,s));if(null!==(o=e.memoizedState)&&null!==(r=o.dehydrated))return function(e,t,n,r,a,o,l){if(n)return 256&t.flags?(t.flags&=-257,Fl(e,t,l,r=cl(Error(i(422))))):null!==t.memoizedState?(t.child=e.child,t.flags|=128,null):(o=r.fallback,a=t.mode,r=Du({mode:"visible",children:r.children},a,0,null),(o=Mu(o,a,l,null)).flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,0!==(1&t.mode)&&xi(t,e.child,null,l),t.child.memoizedState=Dl(l),t.memoizedState=Ml,o);if(0===(1&t.mode))return Fl(e,t,l,null);if("$!"===a.data){if(r=a.nextSibling&&a.nextSibling.dataset)var s=r.dgst;return r=s,Fl(e,t,l,r=cl(o=Error(i(419)),r,void 0))}if(s=0!==(l&e.childLanes),bl||s){if(null!==(r=js)){switch(l&-l){case 4:a=2;break;case 16:a=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:a=32;break;case 536870912:a=268435456;break;default:a=0}0!==(a=0!==(a&(r.suspendedLanes|l))?0:a)&&a!==o.retryLane&&(o.retryLane=a,Ii(e,a),nu(r,e,a,-1))}return mu(),Fl(e,t,l,r=cl(Error(i(421))))}return"$?"===a.data?(t.flags|=128,t.child=e.child,t=Pu.bind(null,e),a._reactRetry=t,null):(e=o.treeContext,ri=ua(a.nextSibling),ni=t,ai=!0,ii=null,null!==e&&(Ka[Ga++]=qa,Ka[Ga++]=Xa,Ka[Ga++]=Ya,qa=e.id,Xa=e.overflow,Ya=t),t=Ll(t,r.children),t.flags|=4096,t)}(e,t,s,a,r,o,n);if(l){l=a.fallback,s=t.mode,r=(o=e.child).sibling;var u={mode:"hidden",children:a.children};return 0===(1&s)&&t.child!==o?((a=t.child).childLanes=0,a.pendingProps=u,t.deletions=null):(a=Ru(o,u)).subtreeFlags=14680064&o.subtreeFlags,null!==r?l=Ru(r,l):(l=Mu(l,s,n,null)).flags|=2,l.return=t,a.return=t,a.sibling=l,t.child=a,a=l,l=t.child,s=null===(s=e.child.memoizedState)?Dl(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},l.memoizedState=s,l.childLanes=e.childLanes&~n,t.memoizedState=Ml,a}return e=(l=e.child).sibling,a=Ru(l,{mode:"visible",children:a.children}),0===(1&t.mode)&&(a.lanes=n),a.return=t,a.sibling=null,null!==e&&(null===(n=t.deletions)?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=a,t.memoizedState=null,a}function Ll(e,t){return(t=Du({mode:"visible",children:t},e.mode,0,null)).return=e,e.child=t}function Fl(e,t,n,r){return null!==r&&hi(r),xi(t,e.child,null,n),(e=Ll(t,t.pendingProps.children)).flags|=2,t.memoizedState=null,e}function Bl(e,t,n){e.lanes|=t;var r=e.alternate;null!==r&&(r.lanes|=t),_i(e.return,t,n)}function Ul(e,t,n,r,a){var i=e.memoizedState;null===i?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:a}:(i.isBackwards=t,i.rendering=null,i.renderingStartTime=0,i.last=r,i.tail=n,i.tailMode=a)}function $l(e,t,n){var r=t.pendingProps,a=r.revealOrder,i=r.tail;if(xl(e,t,r.children,n),0!==(2&(r=Ji.current)))r=1&r|2,t.flags|=128;else{if(null!==e&&0!==(128&e.flags))e:for(e=t.child;null!==e;){if(13===e.tag)null!==e.memoizedState&&Bl(e,n,t);else if(19===e.tag)Bl(e,n,t);else if(null!==e.child){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;null===e.sibling;){if(null===e.return||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Ea(Ji,r),0===(1&t.mode))t.memoizedState=null;else switch(a){case"forwards":for(n=t.child,a=null;null!==n;)null!==(e=n.alternate)&&null===eo(e)&&(a=n),n=n.sibling;null===(n=a)?(a=t.child,t.child=null):(a=n.sibling,n.sibling=null),Ul(t,!1,a,n,i);break;case"backwards":for(n=null,a=t.child,t.child=null;null!==a;){if(null!==(e=a.alternate)&&null===eo(e)){t.child=a;break}e=a.sibling,a.sibling=n,n=a,a=e}Ul(t,!0,n,null,i);break;case"together":Ul(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function Hl(e,t){0===(1&t.mode)&&null!==e&&(e.alternate=null,t.alternate=null,t.flags|=2)}function Vl(e,t,n){if(null!==e&&(t.dependencies=e.dependencies),Ds|=t.lanes,0===(n&t.childLanes))return null;if(null!==e&&t.child!==e.child)throw Error(i(153));if(null!==t.child){for(n=Ru(e=t.child,e.pendingProps),t.child=n,n.return=t;null!==e.sibling;)e=e.sibling,(n=n.sibling=Ru(e,e.pendingProps)).return=t;n.sibling=null}return t.child}function Wl(e,t){if(!ai)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;null!==t;)null!==t.alternate&&(n=t),t=t.sibling;null===n?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;null!==n;)null!==n.alternate&&(r=n),n=n.sibling;null===r?t||null===e.tail?e.tail=null:e.tail.sibling=null:r.sibling=null}}function Ql(e){var t=null!==e.alternate&&e.alternate.child===e.child,n=0,r=0;if(t)for(var a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=14680064&a.subtreeFlags,r|=14680064&a.flags,a.return=e,a=a.sibling;else for(a=e.child;null!==a;)n|=a.lanes|a.childLanes,r|=a.subtreeFlags,r|=a.flags,a.return=e,a=a.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function Kl(e,t,n){var r=t.pendingProps;switch(ti(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return Ql(t),null;case 1:case 17:return za(t.type)&&Ra(),Ql(t),null;case 3:return r=t.stateNode,qi(),Ca(ja),Ca(_a),no(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),null!==e&&null!==e.child||(di(t)?t.flags|=4:null===e||e.memoizedState.isDehydrated&&0===(256&t.flags)||(t.flags|=1024,null!==ii&&(ou(ii),ii=null))),zl(e,t),Ql(t),null;case 5:Zi(t);var a=Gi(Ki.current);if(n=t.type,null!==e&&null!=t.stateNode)Rl(e,t,n,r,a),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(null===t.stateNode)throw Error(i(166));return Ql(t),null}if(e=Gi(Wi.current),di(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[fa]=t,r[pa]=o,e=0!==(1&t.mode),n){case"dialog":Fr("cancel",r),Fr("close",r);break;case"iframe":case"object":case"embed":Fr("load",r);break;case"video":case"audio":for(a=0;a<Mr.length;a++)Fr(Mr[a],r);break;case"source":Fr("error",r);break;case"img":case"image":case"link":Fr("error",r),Fr("load",r);break;case"details":Fr("toggle",r);break;case"input":q(r,o),Fr("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Fr("invalid",r);break;case"textarea":ae(r,o),Fr("invalid",r)}for(var s in ve(n,o),a=null,o)if(o.hasOwnProperty(s)){var u=o[s];"children"===s?"string"===typeof u?r.textContent!==u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",u]):"number"===typeof u&&r.textContent!==""+u&&(!0!==o.suppressHydrationWarning&&Zr(r.textContent,u,e),a=["children",""+u]):l.hasOwnProperty(s)&&null!=u&&"onScroll"===s&&Fr("scroll",r)}switch(n){case"input":Q(r),J(r,o,!0);break;case"textarea":Q(r),oe(r);break;case"select":case"option":break;default:"function"===typeof o.onClick&&(r.onclick=Jr)}r=a,t.updateQueue=r,null!==r&&(t.flags|=4)}else{s=9===a.nodeType?a:a.ownerDocument,"http://www.w3.org/1999/xhtml"===e&&(e=le(n)),"http://www.w3.org/1999/xhtml"===e?"script"===n?((e=s.createElement("div")).innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):"string"===typeof r.is?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),"select"===n&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[fa]=t,e[pa]=r,Nl(e,t,!1,!1),t.stateNode=e;e:{switch(s=be(n,r),n){case"dialog":Fr("cancel",e),Fr("close",e),a=r;break;case"iframe":case"object":case"embed":Fr("load",e),a=r;break;case"video":case"audio":for(a=0;a<Mr.length;a++)Fr(Mr[a],e);a=r;break;case"source":Fr("error",e),a=r;break;case"img":case"image":case"link":Fr("error",e),Fr("load",e),a=r;break;case"details":Fr("toggle",e),a=r;break;case"input":q(e,r),a=Y(e,r),Fr("invalid",e);break;case"option":default:a=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},a=O({},r,{value:void 0}),Fr("invalid",e);break;case"textarea":ae(e,r),a=re(e,r),Fr("invalid",e)}for(o in ve(n,a),u=a)if(u.hasOwnProperty(o)){var c=u[o];"style"===o?ge(e,c):"dangerouslySetInnerHTML"===o?null!=(c=c?c.__html:void 0)&&de(e,c):"children"===o?"string"===typeof c?("textarea"!==n||""!==c)&&fe(e,c):"number"===typeof c&&fe(e,""+c):"suppressContentEditableWarning"!==o&&"suppressHydrationWarning"!==o&&"autoFocus"!==o&&(l.hasOwnProperty(o)?null!=c&&"onScroll"===o&&Fr("scroll",e):null!=c&&b(e,o,c,s))}switch(n){case"input":Q(e),J(e,r,!1);break;case"textarea":Q(e),oe(e);break;case"option":null!=r.value&&e.setAttribute("value",""+V(r.value));break;case"select":e.multiple=!!r.multiple,null!=(o=r.value)?ne(e,!!r.multiple,o,!1):null!=r.defaultValue&&ne(e,!!r.multiple,r.defaultValue,!0);break;default:"function"===typeof a.onClick&&(e.onclick=Jr)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}null!==t.ref&&(t.flags|=512,t.flags|=2097152)}return Ql(t),null;case 6:if(e&&null!=t.stateNode)Il(e,t,e.memoizedProps,r);else{if("string"!==typeof r&&null===t.stateNode)throw Error(i(166));if(n=Gi(Ki.current),Gi(Wi.current),di(t)){if(r=t.stateNode,n=t.memoizedProps,r[fa]=t,(o=r.nodeValue!==n)&&null!==(e=ni))switch(e.tag){case 3:Zr(r.nodeValue,n,0!==(1&e.mode));break;case 5:!0!==e.memoizedProps.suppressHydrationWarning&&Zr(r.nodeValue,n,0!==(1&e.mode))}o&&(t.flags|=4)}else(r=(9===n.nodeType?n:n.ownerDocument).createTextNode(r))[fa]=t,t.stateNode=r}return Ql(t),null;case 13:if(Ca(Ji),r=t.memoizedState,null===e||null!==e.memoizedState&&null!==e.memoizedState.dehydrated){if(ai&&null!==ri&&0!==(1&t.mode)&&0===(128&t.flags))fi(),pi(),t.flags|=98560,o=!1;else if(o=di(t),null!==r&&null!==r.dehydrated){if(null===e){if(!o)throw Error(i(318));if(!(o=null!==(o=t.memoizedState)?o.dehydrated:null))throw Error(i(317));o[fa]=t}else pi(),0===(128&t.flags)&&(t.memoizedState=null),t.flags|=4;Ql(t),o=!1}else null!==ii&&(ou(ii),ii=null),o=!0;if(!o)return 65536&t.flags?t:null}return 0!==(128&t.flags)?(t.lanes=n,t):((r=null!==r)!==(null!==e&&null!==e.memoizedState)&&r&&(t.child.flags|=8192,0!==(1&t.mode)&&(null===e||0!==(1&Ji.current)?0===Is&&(Is=3):mu())),null!==t.updateQueue&&(t.flags|=4),Ql(t),null);case 4:return qi(),zl(e,t),null===e&&$r(t.stateNode.containerInfo),Ql(t),null;case 10:return Pi(t.type._context),Ql(t),null;case 19:if(Ca(Ji),null===(o=t.memoizedState))return Ql(t),null;if(r=0!==(128&t.flags),null===(s=o.rendering))if(r)Wl(o,!1);else{if(0!==Is||null!==e&&0!==(128&e.flags))for(e=t.child;null!==e;){if(null!==(s=eo(e))){for(t.flags|=128,Wl(o,!1),null!==(r=s.updateQueue)&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;null!==n;)e=r,(o=n).flags&=14680066,null===(s=o.alternate)?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=null===e?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Ea(Ji,1&Ji.current|2),t.child}e=e.sibling}null!==o.tail&&Xe()>$s&&(t.flags|=128,r=!0,Wl(o,!1),t.lanes=4194304)}else{if(!r)if(null!==(e=eo(s))){if(t.flags|=128,r=!0,null!==(n=e.updateQueue)&&(t.updateQueue=n,t.flags|=4),Wl(o,!0),null===o.tail&&"hidden"===o.tailMode&&!s.alternate&&!ai)return Ql(t),null}else 2*Xe()-o.renderingStartTime>$s&&1073741824!==n&&(t.flags|=128,r=!0,Wl(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(null!==(n=o.last)?n.sibling=s:t.child=s,o.last=s)}return null!==o.tail?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Xe(),t.sibling=null,n=Ji.current,Ea(Ji,r?1&n|2:1&n),t):(Ql(t),null);case 22:case 23:return du(),r=null!==t.memoizedState,null!==e&&null!==e.memoizedState!==r&&(t.flags|=8192),r&&0!==(1&t.mode)?0!==(1073741824&zs)&&(Ql(t),6&t.subtreeFlags&&(t.flags|=8192)):Ql(t),null;case 24:case 25:return null}throw Error(i(156,t.tag))}function Gl(e,t){switch(ti(t),t.tag){case 1:return za(t.type)&&Ra(),65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 3:return qi(),Ca(ja),Ca(_a),no(),0!==(65536&(e=t.flags))&&0===(128&e)?(t.flags=-65537&e|128,t):null;case 5:return Zi(t),null;case 13:if(Ca(Ji),null!==(e=t.memoizedState)&&null!==e.dehydrated){if(null===t.alternate)throw Error(i(340));pi()}return 65536&(e=t.flags)?(t.flags=-65537&e|128,t):null;case 19:return Ca(Ji),null;case 4:return qi(),null;case 10:return Pi(t.type._context),null;case 22:case 23:return du(),null;default:return null}}Nl=function(e,t){for(var n=t.child;null!==n;){if(5===n.tag||6===n.tag)e.appendChild(n.stateNode);else if(4!==n.tag&&null!==n.child){n.child.return=n,n=n.child;continue}if(n===t)break;for(;null===n.sibling;){if(null===n.return||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}},zl=function(){},Rl=function(e,t,n,r){var a=e.memoizedProps;if(a!==r){e=t.stateNode,Gi(Wi.current);var i,o=null;switch(n){case"input":a=Y(e,a),r=Y(e,r),o=[];break;case"select":a=O({},a,{value:void 0}),r=O({},r,{value:void 0}),o=[];break;case"textarea":a=re(e,a),r=re(e,r),o=[];break;default:"function"!==typeof a.onClick&&"function"===typeof r.onClick&&(e.onclick=Jr)}for(c in ve(n,r),n=null,a)if(!r.hasOwnProperty(c)&&a.hasOwnProperty(c)&&null!=a[c])if("style"===c){var s=a[c];for(i in s)s.hasOwnProperty(i)&&(n||(n={}),n[i]="")}else"dangerouslySetInnerHTML"!==c&&"children"!==c&&"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&"autoFocus"!==c&&(l.hasOwnProperty(c)?o||(o=[]):(o=o||[]).push(c,null));for(c in r){var u=r[c];if(s=null!=a?a[c]:void 0,r.hasOwnProperty(c)&&u!==s&&(null!=u||null!=s))if("style"===c)if(s){for(i in s)!s.hasOwnProperty(i)||u&&u.hasOwnProperty(i)||(n||(n={}),n[i]="");for(i in u)u.hasOwnProperty(i)&&s[i]!==u[i]&&(n||(n={}),n[i]=u[i])}else n||(o||(o=[]),o.push(c,n)),n=u;else"dangerouslySetInnerHTML"===c?(u=u?u.__html:void 0,s=s?s.__html:void 0,null!=u&&s!==u&&(o=o||[]).push(c,u)):"children"===c?"string"!==typeof u&&"number"!==typeof u||(o=o||[]).push(c,""+u):"suppressContentEditableWarning"!==c&&"suppressHydrationWarning"!==c&&(l.hasOwnProperty(c)?(null!=u&&"onScroll"===c&&Fr("scroll",e),o||s===u||(o=[])):(o=o||[]).push(c,u))}n&&(o=o||[]).push("style",n);var c=o;(t.updateQueue=c)&&(t.flags|=4)}},Il=function(e,t,n,r){n!==r&&(t.flags|=4)};var Yl=!1,ql=!1,Xl="function"===typeof WeakSet?WeakSet:Set,Zl=null;function Jl(e,t){var n=e.ref;if(null!==n)if("function"===typeof n)try{n(null)}catch(r){Au(e,t,r)}else n.current=null}function es(e,t,n){try{n()}catch(r){Au(e,t,r)}}var ts=!1;function ns(e,t,n){var r=t.updateQueue;if(null!==(r=null!==r?r.lastEffect:null)){var a=r=r.next;do{if((a.tag&e)===e){var i=a.destroy;a.destroy=void 0,void 0!==i&&es(t,n,i)}a=a.next}while(a!==r)}}function rs(e,t){if(null!==(t=null!==(t=t.updateQueue)?t.lastEffect:null)){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function as(e){var t=e.ref;if(null!==t){var n=e.stateNode;e.tag,e=n,"function"===typeof t?t(e):t.current=e}}function is(e){var t=e.alternate;null!==t&&(e.alternate=null,is(t)),e.child=null,e.deletions=null,e.sibling=null,5===e.tag&&(null!==(t=e.stateNode)&&(delete t[fa],delete t[pa],delete t[ma],delete t[ga],delete t[ya])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function os(e){return 5===e.tag||3===e.tag||4===e.tag}function ls(e){e:for(;;){for(;null===e.sibling;){if(null===e.return||os(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;5!==e.tag&&6!==e.tag&&18!==e.tag;){if(2&e.flags)continue e;if(null===e.child||4===e.tag)continue e;e.child.return=e,e=e.child}if(!(2&e.flags))return e.stateNode}}function ss(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?8===n.nodeType?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(8===n.nodeType?(t=n.parentNode).insertBefore(e,n):(t=n).appendChild(e),null!==(n=n._reactRootContainer)&&void 0!==n||null!==t.onclick||(t.onclick=Jr));else if(4!==r&&null!==(e=e.child))for(ss(e,t,n),e=e.sibling;null!==e;)ss(e,t,n),e=e.sibling}function us(e,t,n){var r=e.tag;if(5===r||6===r)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(4!==r&&null!==(e=e.child))for(us(e,t,n),e=e.sibling;null!==e;)us(e,t,n),e=e.sibling}var cs=null,ds=!1;function fs(e,t,n){for(n=n.child;null!==n;)ps(e,t,n),n=n.sibling}function ps(e,t,n){if(it&&"function"===typeof it.onCommitFiberUnmount)try{it.onCommitFiberUnmount(at,n)}catch(l){}switch(n.tag){case 5:ql||Jl(n,t);case 6:var r=cs,a=ds;cs=null,fs(e,t,n),ds=a,null!==(cs=r)&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?e.parentNode.removeChild(n):e.removeChild(n)):cs.removeChild(n.stateNode));break;case 18:null!==cs&&(ds?(e=cs,n=n.stateNode,8===e.nodeType?sa(e.parentNode,n):1===e.nodeType&&sa(e,n),$t(e)):sa(cs,n.stateNode));break;case 4:r=cs,a=ds,cs=n.stateNode.containerInfo,ds=!0,fs(e,t,n),cs=r,ds=a;break;case 0:case 11:case 14:case 15:if(!ql&&(null!==(r=n.updateQueue)&&null!==(r=r.lastEffect))){a=r=r.next;do{var i=a,o=i.destroy;i=i.tag,void 0!==o&&(0!==(2&i)||0!==(4&i))&&es(n,t,o),a=a.next}while(a!==r)}fs(e,t,n);break;case 1:if(!ql&&(Jl(n,t),"function"===typeof(r=n.stateNode).componentWillUnmount))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Au(n,t,l)}fs(e,t,n);break;case 21:fs(e,t,n);break;case 22:1&n.mode?(ql=(r=ql)||null!==n.memoizedState,fs(e,t,n),ql=r):fs(e,t,n);break;default:fs(e,t,n)}}function hs(e){var t=e.updateQueue;if(null!==t){e.updateQueue=null;var n=e.stateNode;null===n&&(n=e.stateNode=new Xl),t.forEach(function(t){var r=_u.bind(null,e,t);n.has(t)||(n.add(t),t.then(r,r))})}}function ms(e,t){var n=t.deletions;if(null!==n)for(var r=0;r<n.length;r++){var a=n[r];try{var o=e,l=t,s=l;e:for(;null!==s;){switch(s.tag){case 5:cs=s.stateNode,ds=!1;break e;case 3:case 4:cs=s.stateNode.containerInfo,ds=!0;break e}s=s.return}if(null===cs)throw Error(i(160));ps(o,l,a),cs=null,ds=!1;var u=a.alternate;null!==u&&(u.return=null),a.return=null}catch(c){Au(a,t,c)}}if(12854&t.subtreeFlags)for(t=t.child;null!==t;)gs(t,e),t=t.sibling}function gs(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(ms(t,e),ys(e),4&r){try{ns(3,e,e.return),rs(3,e)}catch(g){Au(e,e.return,g)}try{ns(5,e,e.return)}catch(g){Au(e,e.return,g)}}break;case 1:ms(t,e),ys(e),512&r&&null!==n&&Jl(n,n.return);break;case 5:if(ms(t,e),ys(e),512&r&&null!==n&&Jl(n,n.return),32&e.flags){var a=e.stateNode;try{fe(a,"")}catch(g){Au(e,e.return,g)}}if(4&r&&null!=(a=e.stateNode)){var o=e.memoizedProps,l=null!==n?n.memoizedProps:o,s=e.type,u=e.updateQueue;if(e.updateQueue=null,null!==u)try{"input"===s&&"radio"===o.type&&null!=o.name&&X(a,o),be(s,l);var c=be(s,o);for(l=0;l<u.length;l+=2){var d=u[l],f=u[l+1];"style"===d?ge(a,f):"dangerouslySetInnerHTML"===d?de(a,f):"children"===d?fe(a,f):b(a,d,f,c)}switch(s){case"input":Z(a,o);break;case"textarea":ie(a,o);break;case"select":var p=a._wrapperState.wasMultiple;a._wrapperState.wasMultiple=!!o.multiple;var h=o.value;null!=h?ne(a,!!o.multiple,h,!1):p!==!!o.multiple&&(null!=o.defaultValue?ne(a,!!o.multiple,o.defaultValue,!0):ne(a,!!o.multiple,o.multiple?[]:"",!1))}a[pa]=o}catch(g){Au(e,e.return,g)}}break;case 6:if(ms(t,e),ys(e),4&r){if(null===e.stateNode)throw Error(i(162));a=e.stateNode,o=e.memoizedProps;try{a.nodeValue=o}catch(g){Au(e,e.return,g)}}break;case 3:if(ms(t,e),ys(e),4&r&&null!==n&&n.memoizedState.isDehydrated)try{$t(t.containerInfo)}catch(g){Au(e,e.return,g)}break;case 4:default:ms(t,e),ys(e);break;case 13:ms(t,e),ys(e),8192&(a=e.child).flags&&(o=null!==a.memoizedState,a.stateNode.isHidden=o,!o||null!==a.alternate&&null!==a.alternate.memoizedState||(Us=Xe())),4&r&&hs(e);break;case 22:if(d=null!==n&&null!==n.memoizedState,1&e.mode?(ql=(c=ql)||d,ms(t,e),ql=c):ms(t,e),ys(e),8192&r){if(c=null!==e.memoizedState,(e.stateNode.isHidden=c)&&!d&&0!==(1&e.mode))for(Zl=e,d=e.child;null!==d;){for(f=Zl=d;null!==Zl;){switch(h=(p=Zl).child,p.tag){case 0:case 11:case 14:case 15:ns(4,p,p.return);break;case 1:Jl(p,p.return);var m=p.stateNode;if("function"===typeof m.componentWillUnmount){r=p,n=p.return;try{t=r,m.props=t.memoizedProps,m.state=t.memoizedState,m.componentWillUnmount()}catch(g){Au(r,n,g)}}break;case 5:Jl(p,p.return);break;case 22:if(null!==p.memoizedState){ws(f);continue}}null!==h?(h.return=p,Zl=h):ws(f)}d=d.sibling}e:for(d=null,f=e;;){if(5===f.tag){if(null===d){d=f;try{a=f.stateNode,c?"function"===typeof(o=a.style).setProperty?o.setProperty("display","none","important"):o.display="none":(s=f.stateNode,l=void 0!==(u=f.memoizedProps.style)&&null!==u&&u.hasOwnProperty("display")?u.display:null,s.style.display=me("display",l))}catch(g){Au(e,e.return,g)}}}else if(6===f.tag){if(null===d)try{f.stateNode.nodeValue=c?"":f.memoizedProps}catch(g){Au(e,e.return,g)}}else if((22!==f.tag&&23!==f.tag||null===f.memoizedState||f===e)&&null!==f.child){f.child.return=f,f=f.child;continue}if(f===e)break e;for(;null===f.sibling;){if(null===f.return||f.return===e)break e;d===f&&(d=null),f=f.return}d===f&&(d=null),f.sibling.return=f.return,f=f.sibling}}break;case 19:ms(t,e),ys(e),4&r&&hs(e);case 21:}}function ys(e){var t=e.flags;if(2&t){try{e:{for(var n=e.return;null!==n;){if(os(n)){var r=n;break e}n=n.return}throw Error(i(160))}switch(r.tag){case 5:var a=r.stateNode;32&r.flags&&(fe(a,""),r.flags&=-33),us(e,ls(e),a);break;case 3:case 4:var o=r.stateNode.containerInfo;ss(e,ls(e),o);break;default:throw Error(i(161))}}catch(l){Au(e,e.return,l)}e.flags&=-3}4096&t&&(e.flags&=-4097)}function vs(e,t,n){Zl=e,bs(e,t,n)}function bs(e,t,n){for(var r=0!==(1&e.mode);null!==Zl;){var a=Zl,i=a.child;if(22===a.tag&&r){var o=null!==a.memoizedState||Yl;if(!o){var l=a.alternate,s=null!==l&&null!==l.memoizedState||ql;l=Yl;var u=ql;if(Yl=o,(ql=s)&&!u)for(Zl=a;null!==Zl;)s=(o=Zl).child,22===o.tag&&null!==o.memoizedState?ks(a):null!==s?(s.return=o,Zl=s):ks(a);for(;null!==i;)Zl=i,bs(i,t,n),i=i.sibling;Zl=a,Yl=l,ql=u}xs(e)}else 0!==(8772&a.subtreeFlags)&&null!==i?(i.return=a,Zl=i):xs(e)}}function xs(e){for(;null!==Zl;){var t=Zl;if(0!==(8772&t.flags)){var n=t.alternate;try{if(0!==(8772&t.flags))switch(t.tag){case 0:case 11:case 15:ql||rs(5,t);break;case 1:var r=t.stateNode;if(4&t.flags&&!ql)if(null===n)r.componentDidMount();else{var a=t.elementType===t.type?n.memoizedProps:nl(t.type,n.memoizedProps);r.componentDidUpdate(a,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;null!==o&&Hi(t,o,r);break;case 3:var l=t.updateQueue;if(null!==l){if(n=null,null!==t.child)switch(t.child.tag){case 5:case 1:n=t.child.stateNode}Hi(t,l,n)}break;case 5:var s=t.stateNode;if(null===n&&4&t.flags){n=s;var u=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":u.autoFocus&&n.focus();break;case"img":u.src&&(n.src=u.src)}}break;case 6:case 4:case 12:case 19:case 17:case 21:case 22:case 23:case 25:break;case 13:if(null===t.memoizedState){var c=t.alternate;if(null!==c){var d=c.memoizedState;if(null!==d){var f=d.dehydrated;null!==f&&$t(f)}}}break;default:throw Error(i(163))}ql||512&t.flags&&as(t)}catch(p){Au(t,t.return,p)}}if(t===e){Zl=null;break}if(null!==(n=t.sibling)){n.return=t.return,Zl=n;break}Zl=t.return}}function ws(e){for(;null!==Zl;){var t=Zl;if(t===e){Zl=null;break}var n=t.sibling;if(null!==n){n.return=t.return,Zl=n;break}Zl=t.return}}function ks(e){for(;null!==Zl;){var t=Zl;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{rs(4,t)}catch(s){Au(t,n,s)}break;case 1:var r=t.stateNode;if("function"===typeof r.componentDidMount){var a=t.return;try{r.componentDidMount()}catch(s){Au(t,a,s)}}var i=t.return;try{as(t)}catch(s){Au(t,i,s)}break;case 5:var o=t.return;try{as(t)}catch(s){Au(t,o,s)}}}catch(s){Au(t,t.return,s)}if(t===e){Zl=null;break}var l=t.sibling;if(null!==l){l.return=t.return,Zl=l;break}Zl=t.return}}var Ss,As=Math.ceil,Cs=x.ReactCurrentDispatcher,Es=x.ReactCurrentOwner,Ps=x.ReactCurrentBatchConfig,_s=0,js=null,Ts=null,Ns=0,zs=0,Rs=Aa(0),Is=0,Ms=null,Ds=0,Os=0,Ls=0,Fs=null,Bs=null,Us=0,$s=1/0,Hs=null,Vs=!1,Ws=null,Qs=null,Ks=!1,Gs=null,Ys=0,qs=0,Xs=null,Zs=-1,Js=0;function eu(){return 0!==(6&_s)?Xe():-1!==Zs?Zs:Zs=Xe()}function tu(e){return 0===(1&e.mode)?1:0!==(2&_s)&&0!==Ns?Ns&-Ns:null!==mi.transition?(0===Js&&(Js=mt()),Js):0!==(e=bt)?e:e=void 0===(e=window.event)?16:qt(e.type)}function nu(e,t,n,r){if(50<qs)throw qs=0,Xs=null,Error(i(185));yt(e,n,r),0!==(2&_s)&&e===js||(e===js&&(0===(2&_s)&&(Os|=n),4===Is&&lu(e,Ns)),ru(e,r),1===n&&0===_s&&0===(1&t.mode)&&($s=Xe()+500,Fa&&$a()))}function ru(e,t){var n=e.callbackNode;!function(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,a=e.expirationTimes,i=e.pendingLanes;0<i;){var o=31-ot(i),l=1<<o,s=a[o];-1===s?0!==(l&n)&&0===(l&r)||(a[o]=pt(l,t)):s<=t&&(e.expiredLanes|=l),i&=~l}}(e,t);var r=ft(e,e===js?Ns:0);if(0===r)null!==n&&Ge(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(null!=n&&Ge(n),1===t)0===e.tag?function(e){Fa=!0,Ua(e)}(su.bind(null,e)):Ua(su.bind(null,e)),oa(function(){0===(6&_s)&&$a()}),n=null;else{switch(xt(r)){case 1:n=Je;break;case 4:n=et;break;case 16:default:n=tt;break;case 536870912:n=rt}n=ju(n,au.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function au(e,t){if(Zs=-1,Js=0,0!==(6&_s))throw Error(i(327));var n=e.callbackNode;if(ku()&&e.callbackNode!==n)return null;var r=ft(e,e===js?Ns:0);if(0===r)return null;if(0!==(30&r)||0!==(r&e.expiredLanes)||t)t=gu(e,r);else{t=r;var a=_s;_s|=2;var o=hu();for(js===e&&Ns===t||(Hs=null,$s=Xe()+500,fu(e,t));;)try{vu();break}catch(s){pu(e,s)}Ei(),Cs.current=o,_s=a,null!==Ts?t=0:(js=null,Ns=0,t=Is)}if(0!==t){if(2===t&&(0!==(a=ht(e))&&(r=a,t=iu(e,a))),1===t)throw n=Ms,fu(e,0),lu(e,r),ru(e,Xe()),n;if(6===t)lu(e,r);else{if(a=e.current.alternate,0===(30&r)&&!function(e){for(var t=e;;){if(16384&t.flags){var n=t.updateQueue;if(null!==n&&null!==(n=n.stores))for(var r=0;r<n.length;r++){var a=n[r],i=a.getSnapshot;a=a.value;try{if(!lr(i(),a))return!1}catch(l){return!1}}}if(n=t.child,16384&t.subtreeFlags&&null!==n)n.return=t,t=n;else{if(t===e)break;for(;null===t.sibling;){if(null===t.return||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}(a)&&(2===(t=gu(e,r))&&(0!==(o=ht(e))&&(r=o,t=iu(e,o))),1===t))throw n=Ms,fu(e,0),lu(e,r),ru(e,Xe()),n;switch(e.finishedWork=a,e.finishedLanes=r,t){case 0:case 1:throw Error(i(345));case 2:case 5:wu(e,Bs,Hs);break;case 3:if(lu(e,r),(130023424&r)===r&&10<(t=Us+500-Xe())){if(0!==ft(e,0))break;if(((a=e.suspendedLanes)&r)!==r){eu(),e.pingedLanes|=e.suspendedLanes&a;break}e.timeoutHandle=ra(wu.bind(null,e,Bs,Hs),t);break}wu(e,Bs,Hs);break;case 4:if(lu(e,r),(4194240&r)===r)break;for(t=e.eventTimes,a=-1;0<r;){var l=31-ot(r);o=1<<l,(l=t[l])>a&&(a=l),r&=~o}if(r=a,10<(r=(120>(r=Xe()-r)?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*As(r/1960))-r)){e.timeoutHandle=ra(wu.bind(null,e,Bs,Hs),r);break}wu(e,Bs,Hs);break;default:throw Error(i(329))}}}return ru(e,Xe()),e.callbackNode===n?au.bind(null,e):null}function iu(e,t){var n=Fs;return e.current.memoizedState.isDehydrated&&(fu(e,t).flags|=256),2!==(e=gu(e,t))&&(t=Bs,Bs=n,null!==t&&ou(t)),e}function ou(e){null===Bs?Bs=e:Bs.push.apply(Bs,e)}function lu(e,t){for(t&=~Ls,t&=~Os,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-ot(t),r=1<<n;e[n]=-1,t&=~r}}function su(e){if(0!==(6&_s))throw Error(i(327));ku();var t=ft(e,0);if(0===(1&t))return ru(e,Xe()),null;var n=gu(e,t);if(0!==e.tag&&2===n){var r=ht(e);0!==r&&(t=r,n=iu(e,r))}if(1===n)throw n=Ms,fu(e,0),lu(e,t),ru(e,Xe()),n;if(6===n)throw Error(i(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,wu(e,Bs,Hs),ru(e,Xe()),null}function uu(e,t){var n=_s;_s|=1;try{return e(t)}finally{0===(_s=n)&&($s=Xe()+500,Fa&&$a())}}function cu(e){null!==Gs&&0===Gs.tag&&0===(6&_s)&&ku();var t=_s;_s|=1;var n=Ps.transition,r=bt;try{if(Ps.transition=null,bt=1,e)return e()}finally{bt=r,Ps.transition=n,0===(6&(_s=t))&&$a()}}function du(){zs=Rs.current,Ca(Rs)}function fu(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(-1!==n&&(e.timeoutHandle=-1,aa(n)),null!==Ts)for(n=Ts.return;null!==n;){var r=n;switch(ti(r),r.tag){case 1:null!==(r=r.type.childContextTypes)&&void 0!==r&&Ra();break;case 3:qi(),Ca(ja),Ca(_a),no();break;case 5:Zi(r);break;case 4:qi();break;case 13:case 19:Ca(Ji);break;case 10:Pi(r.type._context);break;case 22:case 23:du()}n=n.return}if(js=e,Ts=e=Ru(e.current,null),Ns=zs=t,Is=0,Ms=null,Ls=Os=Ds=0,Bs=Fs=null,null!==Ni){for(t=0;t<Ni.length;t++)if(null!==(r=(n=Ni[t]).interleaved)){n.interleaved=null;var a=r.next,i=n.pending;if(null!==i){var o=i.next;i.next=a,r.next=o}n.pending=r}Ni=null}return e}function pu(e,t){for(;;){var n=Ts;try{if(Ei(),ro.current=Zo,uo){for(var r=oo.memoizedState;null!==r;){var a=r.queue;null!==a&&(a.pending=null),r=r.next}uo=!1}if(io=0,so=lo=oo=null,co=!1,fo=0,Es.current=null,null===n||null===n.return){Is=1,Ms=t,Ts=null;break}e:{var o=e,l=n.return,s=n,u=t;if(t=Ns,s.flags|=32768,null!==u&&"object"===typeof u&&"function"===typeof u.then){var c=u,d=s,f=d.tag;if(0===(1&d.mode)&&(0===f||11===f||15===f)){var p=d.alternate;p?(d.updateQueue=p.updateQueue,d.memoizedState=p.memoizedState,d.lanes=p.lanes):(d.updateQueue=null,d.memoizedState=null)}var h=gl(l);if(null!==h){h.flags&=-257,yl(h,l,s,0,t),1&h.mode&&ml(o,c,t),u=c;var m=(t=h).updateQueue;if(null===m){var g=new Set;g.add(u),t.updateQueue=g}else m.add(u);break e}if(0===(1&t)){ml(o,c,t),mu();break e}u=Error(i(426))}else if(ai&&1&s.mode){var y=gl(l);if(null!==y){0===(65536&y.flags)&&(y.flags|=256),yl(y,l,s,0,t),hi(ul(u,s));break e}}o=u=ul(u,s),4!==Is&&(Is=2),null===Fs?Fs=[o]:Fs.push(o),o=l;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,pl(0,u,t));break e;case 1:s=u;var v=o.type,b=o.stateNode;if(0===(128&o.flags)&&("function"===typeof v.getDerivedStateFromError||null!==b&&"function"===typeof b.componentDidCatch&&(null===Qs||!Qs.has(b)))){o.flags|=65536,t&=-t,o.lanes|=t,Ui(o,hl(o,s,t));break e}}o=o.return}while(null!==o)}xu(n)}catch(x){t=x,Ts===n&&null!==n&&(Ts=n=n.return);continue}break}}function hu(){var e=Cs.current;return Cs.current=Zo,null===e?Zo:e}function mu(){0!==Is&&3!==Is&&2!==Is||(Is=4),null===js||0===(268435455&Ds)&&0===(268435455&Os)||lu(js,Ns)}function gu(e,t){var n=_s;_s|=2;var r=hu();for(js===e&&Ns===t||(Hs=null,fu(e,t));;)try{yu();break}catch(a){pu(e,a)}if(Ei(),_s=n,Cs.current=r,null!==Ts)throw Error(i(261));return js=null,Ns=0,Is}function yu(){for(;null!==Ts;)bu(Ts)}function vu(){for(;null!==Ts&&!Ye();)bu(Ts)}function bu(e){var t=Ss(e.alternate,e,zs);e.memoizedProps=e.pendingProps,null===t?xu(e):Ts=t,Es.current=null}function xu(e){var t=e;do{var n=t.alternate;if(e=t.return,0===(32768&t.flags)){if(null!==(n=Kl(n,t,zs)))return void(Ts=n)}else{if(null!==(n=Gl(n,t)))return n.flags&=32767,void(Ts=n);if(null===e)return Is=6,void(Ts=null);e.flags|=32768,e.subtreeFlags=0,e.deletions=null}if(null!==(t=t.sibling))return void(Ts=t);Ts=t=e}while(null!==t);0===Is&&(Is=5)}function wu(e,t,n){var r=bt,a=Ps.transition;try{Ps.transition=null,bt=1,function(e,t,n,r){do{ku()}while(null!==Gs);if(0!==(6&_s))throw Error(i(327));n=e.finishedWork;var a=e.finishedLanes;if(null===n)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(i(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(function(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var a=31-ot(n),i=1<<a;t[a]=0,r[a]=-1,e[a]=-1,n&=~i}}(e,o),e===js&&(Ts=js=null,Ns=0),0===(2064&n.subtreeFlags)&&0===(2064&n.flags)||Ks||(Ks=!0,ju(tt,function(){return ku(),null})),o=0!==(15990&n.flags),0!==(15990&n.subtreeFlags)||o){o=Ps.transition,Ps.transition=null;var l=bt;bt=1;var s=_s;_s|=4,Es.current=null,function(e,t){if(ea=Vt,pr(e=fr())){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{var r=(n=(n=e.ownerDocument)&&n.defaultView||window).getSelection&&n.getSelection();if(r&&0!==r.rangeCount){n=r.anchorNode;var a=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch(w){n=null;break e}var l=0,s=-1,u=-1,c=0,d=0,f=e,p=null;t:for(;;){for(var h;f!==n||0!==a&&3!==f.nodeType||(s=l+a),f!==o||0!==r&&3!==f.nodeType||(u=l+r),3===f.nodeType&&(l+=f.nodeValue.length),null!==(h=f.firstChild);)p=f,f=h;for(;;){if(f===e)break t;if(p===n&&++c===a&&(s=l),p===o&&++d===r&&(u=l),null!==(h=f.nextSibling))break;p=(f=p).parentNode}f=h}n=-1===s||-1===u?null:{start:s,end:u}}else n=null}n=n||{start:0,end:0}}else n=null;for(ta={focusedElem:e,selectionRange:n},Vt=!1,Zl=t;null!==Zl;)if(e=(t=Zl).child,0!==(1028&t.subtreeFlags)&&null!==e)e.return=t,Zl=e;else for(;null!==Zl;){t=Zl;try{var m=t.alternate;if(0!==(1024&t.flags))switch(t.tag){case 0:case 11:case 15:case 5:case 6:case 4:case 17:break;case 1:if(null!==m){var g=m.memoizedProps,y=m.memoizedState,v=t.stateNode,b=v.getSnapshotBeforeUpdate(t.elementType===t.type?g:nl(t.type,g),y);v.__reactInternalSnapshotBeforeUpdate=b}break;case 3:var x=t.stateNode.containerInfo;1===x.nodeType?x.textContent="":9===x.nodeType&&x.documentElement&&x.removeChild(x.documentElement);break;default:throw Error(i(163))}}catch(w){Au(t,t.return,w)}if(null!==(e=t.sibling)){e.return=t.return,Zl=e;break}Zl=t.return}m=ts,ts=!1}(e,n),gs(n,e),hr(ta),Vt=!!ea,ta=ea=null,e.current=n,vs(n,e,a),qe(),_s=s,bt=l,Ps.transition=o}else e.current=n;if(Ks&&(Ks=!1,Gs=e,Ys=a),o=e.pendingLanes,0===o&&(Qs=null),function(e){if(it&&"function"===typeof it.onCommitFiberRoot)try{it.onCommitFiberRoot(at,e,void 0,128===(128&e.current.flags))}catch(t){}}(n.stateNode),ru(e,Xe()),null!==t)for(r=e.onRecoverableError,n=0;n<t.length;n++)a=t[n],r(a.value,{componentStack:a.stack,digest:a.digest});if(Vs)throw Vs=!1,e=Ws,Ws=null,e;0!==(1&Ys)&&0!==e.tag&&ku(),o=e.pendingLanes,0!==(1&o)?e===Xs?qs++:(qs=0,Xs=e):qs=0,$a()}(e,t,n,r)}finally{Ps.transition=a,bt=r}return null}function ku(){if(null!==Gs){var e=xt(Ys),t=Ps.transition,n=bt;try{if(Ps.transition=null,bt=16>e?16:e,null===Gs)var r=!1;else{if(e=Gs,Gs=null,Ys=0,0!==(6&_s))throw Error(i(331));var a=_s;for(_s|=4,Zl=e.current;null!==Zl;){var o=Zl,l=o.child;if(0!==(16&Zl.flags)){var s=o.deletions;if(null!==s){for(var u=0;u<s.length;u++){var c=s[u];for(Zl=c;null!==Zl;){var d=Zl;switch(d.tag){case 0:case 11:case 15:ns(8,d,o)}var f=d.child;if(null!==f)f.return=d,Zl=f;else for(;null!==Zl;){var p=(d=Zl).sibling,h=d.return;if(is(d),d===c){Zl=null;break}if(null!==p){p.return=h,Zl=p;break}Zl=h}}}var m=o.alternate;if(null!==m){var g=m.child;if(null!==g){m.child=null;do{var y=g.sibling;g.sibling=null,g=y}while(null!==g)}}Zl=o}}if(0!==(2064&o.subtreeFlags)&&null!==l)l.return=o,Zl=l;else e:for(;null!==Zl;){if(0!==(2048&(o=Zl).flags))switch(o.tag){case 0:case 11:case 15:ns(9,o,o.return)}var v=o.sibling;if(null!==v){v.return=o.return,Zl=v;break e}Zl=o.return}}var b=e.current;for(Zl=b;null!==Zl;){var x=(l=Zl).child;if(0!==(2064&l.subtreeFlags)&&null!==x)x.return=l,Zl=x;else e:for(l=b;null!==Zl;){if(0!==(2048&(s=Zl).flags))try{switch(s.tag){case 0:case 11:case 15:rs(9,s)}}catch(k){Au(s,s.return,k)}if(s===l){Zl=null;break e}var w=s.sibling;if(null!==w){w.return=s.return,Zl=w;break e}Zl=s.return}}if(_s=a,$a(),it&&"function"===typeof it.onPostCommitFiberRoot)try{it.onPostCommitFiberRoot(at,e)}catch(k){}r=!0}return r}finally{bt=n,Ps.transition=t}}return!1}function Su(e,t,n){e=Fi(e,t=pl(0,t=ul(n,t),1),1),t=eu(),null!==e&&(yt(e,1,t),ru(e,t))}function Au(e,t,n){if(3===e.tag)Su(e,e,n);else for(;null!==t;){if(3===t.tag){Su(t,e,n);break}if(1===t.tag){var r=t.stateNode;if("function"===typeof t.type.getDerivedStateFromError||"function"===typeof r.componentDidCatch&&(null===Qs||!Qs.has(r))){t=Fi(t,e=hl(t,e=ul(n,e),1),1),e=eu(),null!==t&&(yt(t,1,e),ru(t,e));break}}t=t.return}}function Cu(e,t,n){var r=e.pingCache;null!==r&&r.delete(t),t=eu(),e.pingedLanes|=e.suspendedLanes&n,js===e&&(Ns&n)===n&&(4===Is||3===Is&&(130023424&Ns)===Ns&&500>Xe()-Us?fu(e,0):Ls|=n),ru(e,t)}function Eu(e,t){0===t&&(0===(1&e.mode)?t=1:(t=ct,0===(130023424&(ct<<=1))&&(ct=4194304)));var n=eu();null!==(e=Ii(e,t))&&(yt(e,t,n),ru(e,n))}function Pu(e){var t=e.memoizedState,n=0;null!==t&&(n=t.retryLane),Eu(e,n)}function _u(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,a=e.memoizedState;null!==a&&(n=a.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(i(314))}null!==r&&r.delete(t),Eu(e,n)}function ju(e,t){return Ke(e,t)}function Tu(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function Nu(e,t,n,r){return new Tu(e,t,n,r)}function zu(e){return!(!(e=e.prototype)||!e.isReactComponent)}function Ru(e,t){var n=e.alternate;return null===n?((n=Nu(e.tag,t,e.key,e.mode)).elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=14680064&e.flags,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=null===t?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Iu(e,t,n,r,a,o){var l=2;if(r=e,"function"===typeof e)zu(e)&&(l=1);else if("string"===typeof e)l=5;else e:switch(e){case S:return Mu(n.children,a,o,t);case A:l=8,a|=8;break;case C:return(e=Nu(12,n,t,2|a)).elementType=C,e.lanes=o,e;case j:return(e=Nu(13,n,t,a)).elementType=j,e.lanes=o,e;case T:return(e=Nu(19,n,t,a)).elementType=T,e.lanes=o,e;case R:return Du(n,a,o,t);default:if("object"===typeof e&&null!==e)switch(e.$$typeof){case E:l=10;break e;case P:l=9;break e;case _:l=11;break e;case N:l=14;break e;case z:l=16,r=null;break e}throw Error(i(130,null==e?e:typeof e,""))}return(t=Nu(l,n,t,a)).elementType=e,t.type=r,t.lanes=o,t}function Mu(e,t,n,r){return(e=Nu(7,e,r,t)).lanes=n,e}function Du(e,t,n,r){return(e=Nu(22,e,r,t)).elementType=R,e.lanes=n,e.stateNode={isHidden:!1},e}function Ou(e,t,n){return(e=Nu(6,e,null,t)).lanes=n,e}function Lu(e,t,n){return(t=Nu(4,null!==e.children?e.children:[],e.key,t)).lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function Fu(e,t,n,r,a){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=gt(0),this.expirationTimes=gt(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=gt(0),this.identifierPrefix=r,this.onRecoverableError=a,this.mutableSourceEagerHydrationData=null}function Bu(e,t,n,r,a,i,o,l,s){return e=new Fu(e,t,n,l,s),1===t?(t=1,!0===i&&(t|=8)):t=0,i=Nu(3,null,null,t),e.current=i,i.stateNode=e,i.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},Di(i),e}function Uu(e){if(!e)return Pa;e:{if($e(e=e._reactInternals)!==e||1!==e.tag)throw Error(i(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if(za(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(null!==t);throw Error(i(171))}if(1===e.tag){var n=e.type;if(za(n))return Ma(e,n,t)}return t}function $u(e,t,n,r,a,i,o,l,s){return(e=Bu(n,r,!0,e,0,i,0,l,s)).context=Uu(null),n=e.current,(i=Li(r=eu(),a=tu(n))).callback=void 0!==t&&null!==t?t:null,Fi(n,i,a),e.current.lanes=a,yt(e,a,r),ru(e,r),e}function Hu(e,t,n,r){var a=t.current,i=eu(),o=tu(a);return n=Uu(n),null===t.context?t.context=n:t.pendingContext=n,(t=Li(i,o)).payload={element:e},null!==(r=void 0===r?null:r)&&(t.callback=r),null!==(e=Fi(a,t,o))&&(nu(e,a,o,i),Bi(e,a,o)),o}function Vu(e){return(e=e.current).child?(e.child.tag,e.child.stateNode):null}function Wu(e,t){if(null!==(e=e.memoizedState)&&null!==e.dehydrated){var n=e.retryLane;e.retryLane=0!==n&&n<t?n:t}}function Qu(e,t){Wu(e,t),(e=e.alternate)&&Wu(e,t)}Ss=function(e,t,n){if(null!==e)if(e.memoizedProps!==t.pendingProps||ja.current)bl=!0;else{if(0===(e.lanes&n)&&0===(128&t.flags))return bl=!1,function(e,t,n){switch(t.tag){case 3:jl(t),pi();break;case 5:Xi(t);break;case 1:za(t.type)&&Da(t);break;case 4:Yi(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,a=t.memoizedProps.value;Ea(ki,r._currentValue),r._currentValue=a;break;case 13:if(null!==(r=t.memoizedState))return null!==r.dehydrated?(Ea(Ji,1&Ji.current),t.flags|=128,null):0!==(n&t.child.childLanes)?Ol(e,t,n):(Ea(Ji,1&Ji.current),null!==(e=Vl(e,t,n))?e.sibling:null);Ea(Ji,1&Ji.current);break;case 19:if(r=0!==(n&t.childLanes),0!==(128&e.flags)){if(r)return $l(e,t,n);t.flags|=128}if(null!==(a=t.memoizedState)&&(a.rendering=null,a.tail=null,a.lastEffect=null),Ea(Ji,Ji.current),r)break;return null;case 22:case 23:return t.lanes=0,Al(e,t,n)}return Vl(e,t,n)}(e,t,n);bl=0!==(131072&e.flags)}else bl=!1,ai&&0!==(1048576&t.flags)&&Ja(t,Qa,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;Hl(e,t),e=t.pendingProps;var a=Na(t,_a.current);ji(t,n),a=go(null,t,r,e,a,n);var o=yo();return t.flags|=1,"object"===typeof a&&null!==a&&"function"===typeof a.render&&void 0===a.$$typeof?(t.tag=1,t.memoizedState=null,t.updateQueue=null,za(r)?(o=!0,Da(t)):o=!1,t.memoizedState=null!==a.state&&void 0!==a.state?a.state:null,Di(t),a.updater=al,t.stateNode=a,a._reactInternals=t,sl(t,r,e,n),t=_l(null,t,r,!0,o,n)):(t.tag=0,ai&&o&&ei(t),xl(null,t,a,n),t=t.child),t;case 16:r=t.elementType;e:{switch(Hl(e,t),e=t.pendingProps,r=(a=r._init)(r._payload),t.type=r,a=t.tag=function(e){if("function"===typeof e)return zu(e)?1:0;if(void 0!==e&&null!==e){if((e=e.$$typeof)===_)return 11;if(e===N)return 14}return 2}(r),e=nl(r,e),a){case 0:t=El(null,t,r,e,n);break e;case 1:t=Pl(null,t,r,e,n);break e;case 11:t=wl(null,t,r,e,n);break e;case 14:t=kl(null,t,r,nl(r.type,e),n);break e}throw Error(i(306,r,""))}return t;case 0:return r=t.type,a=t.pendingProps,El(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 1:return r=t.type,a=t.pendingProps,Pl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 3:e:{if(jl(t),null===e)throw Error(i(387));r=t.pendingProps,a=(o=t.memoizedState).element,Oi(e,t),$i(t,r,null,n);var l=t.memoizedState;if(r=l.element,o.isDehydrated){if(o={element:r,isDehydrated:!1,cache:l.cache,pendingSuspenseBoundaries:l.pendingSuspenseBoundaries,transitions:l.transitions},t.updateQueue.baseState=o,t.memoizedState=o,256&t.flags){t=Tl(e,t,r,n,a=ul(Error(i(423)),t));break e}if(r!==a){t=Tl(e,t,r,n,a=ul(Error(i(424)),t));break e}for(ri=ua(t.stateNode.containerInfo.firstChild),ni=t,ai=!0,ii=null,n=wi(t,null,r,n),t.child=n;n;)n.flags=-3&n.flags|4096,n=n.sibling}else{if(pi(),r===a){t=Vl(e,t,n);break e}xl(e,t,r,n)}t=t.child}return t;case 5:return Xi(t),null===e&&ui(t),r=t.type,a=t.pendingProps,o=null!==e?e.memoizedProps:null,l=a.children,na(r,a)?l=null:null!==o&&na(r,o)&&(t.flags|=32),Cl(e,t),xl(e,t,l,n),t.child;case 6:return null===e&&ui(t),null;case 13:return Ol(e,t,n);case 4:return Yi(t,t.stateNode.containerInfo),r=t.pendingProps,null===e?t.child=xi(t,null,r,n):xl(e,t,r,n),t.child;case 11:return r=t.type,a=t.pendingProps,wl(e,t,r,a=t.elementType===r?a:nl(r,a),n);case 7:return xl(e,t,t.pendingProps,n),t.child;case 8:case 12:return xl(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,a=t.pendingProps,o=t.memoizedProps,l=a.value,Ea(ki,r._currentValue),r._currentValue=l,null!==o)if(lr(o.value,l)){if(o.children===a.children&&!ja.current){t=Vl(e,t,n);break e}}else for(null!==(o=t.child)&&(o.return=t);null!==o;){var s=o.dependencies;if(null!==s){l=o.child;for(var u=s.firstContext;null!==u;){if(u.context===r){if(1===o.tag){(u=Li(-1,n&-n)).tag=2;var c=o.updateQueue;if(null!==c){var d=(c=c.shared).pending;null===d?u.next=u:(u.next=d.next,d.next=u),c.pending=u}}o.lanes|=n,null!==(u=o.alternate)&&(u.lanes|=n),_i(o.return,n,t),s.lanes|=n;break}u=u.next}}else if(10===o.tag)l=o.type===t.type?null:o.child;else if(18===o.tag){if(null===(l=o.return))throw Error(i(341));l.lanes|=n,null!==(s=l.alternate)&&(s.lanes|=n),_i(l,n,t),l=o.sibling}else l=o.child;if(null!==l)l.return=o;else for(l=o;null!==l;){if(l===t){l=null;break}if(null!==(o=l.sibling)){o.return=l.return,l=o;break}l=l.return}o=l}xl(e,t,a.children,n),t=t.child}return t;case 9:return a=t.type,r=t.pendingProps.children,ji(t,n),r=r(a=Ti(a)),t.flags|=1,xl(e,t,r,n),t.child;case 14:return a=nl(r=t.type,t.pendingProps),kl(e,t,r,a=nl(r.type,a),n);case 15:return Sl(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,a=t.pendingProps,a=t.elementType===r?a:nl(r,a),Hl(e,t),t.tag=1,za(r)?(e=!0,Da(t)):e=!1,ji(t,n),ol(t,r,a),sl(t,r,a,n),_l(null,t,r,!0,e,n);case 19:return $l(e,t,n);case 22:return Al(e,t,n)}throw Error(i(156,t.tag))};var Ku="function"===typeof reportError?reportError:function(e){console.error(e)};function Gu(e){this._internalRoot=e}function Yu(e){this._internalRoot=e}function qu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType)}function Xu(e){return!(!e||1!==e.nodeType&&9!==e.nodeType&&11!==e.nodeType&&(8!==e.nodeType||" react-mount-point-unstable "!==e.nodeValue))}function Zu(){}function Ju(e,t,n,r,a){var i=n._reactRootContainer;if(i){var o=i;if("function"===typeof a){var l=a;a=function(){var e=Vu(o);l.call(e)}}Hu(t,o,e,a)}else o=function(e,t,n,r,a){if(a){if("function"===typeof r){var i=r;r=function(){var e=Vu(o);i.call(e)}}var o=$u(t,r,e,0,null,!1,0,"",Zu);return e._reactRootContainer=o,e[ha]=o.current,$r(8===e.nodeType?e.parentNode:e),cu(),o}for(;a=e.lastChild;)e.removeChild(a);if("function"===typeof r){var l=r;r=function(){var e=Vu(s);l.call(e)}}var s=Bu(e,0,!1,null,0,!1,0,"",Zu);return e._reactRootContainer=s,e[ha]=s.current,$r(8===e.nodeType?e.parentNode:e),cu(function(){Hu(t,s,n,r)}),s}(n,t,e,a,r);return Vu(o)}Yu.prototype.render=Gu.prototype.render=function(e){var t=this._internalRoot;if(null===t)throw Error(i(409));Hu(e,t,null,null)},Yu.prototype.unmount=Gu.prototype.unmount=function(){var e=this._internalRoot;if(null!==e){this._internalRoot=null;var t=e.containerInfo;cu(function(){Hu(null,e,null,null)}),t[ha]=null}},Yu.prototype.unstable_scheduleHydration=function(e){if(e){var t=At();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Rt.length&&0!==t&&t<Rt[n].priority;n++);Rt.splice(n,0,e),0===n&&Ot(e)}},wt=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=dt(t.pendingLanes);0!==n&&(vt(t,1|n),ru(t,Xe()),0===(6&_s)&&($s=Xe()+500,$a()))}break;case 13:cu(function(){var t=Ii(e,1);if(null!==t){var n=eu();nu(t,e,1,n)}}),Qu(e,1)}},kt=function(e){if(13===e.tag){var t=Ii(e,134217728);if(null!==t)nu(t,e,134217728,eu());Qu(e,134217728)}},St=function(e){if(13===e.tag){var t=tu(e),n=Ii(e,t);if(null!==n)nu(n,e,t,eu());Qu(e,t)}},At=function(){return bt},Ct=function(e,t){var n=bt;try{return bt=e,t()}finally{bt=n}},ke=function(e,t,n){switch(t){case"input":if(Z(e,n),t=n.name,"radio"===n.type&&null!=t){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var a=wa(r);if(!a)throw Error(i(90));K(r),Z(r,a)}}}break;case"textarea":ie(e,n);break;case"select":null!=(t=n.value)&&ne(e,!!n.multiple,t,!1)}},_e=uu,je=cu;var ec={usingClientEntryPoint:!1,Events:[ba,xa,wa,Ee,Pe,uu]},tc={findFiberByHostInstance:va,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},nc={bundleType:tc.bundleType,version:tc.version,rendererPackageName:tc.rendererPackageName,rendererConfig:tc.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:x.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return null===(e=We(e))?null:e.stateNode},findFiberByHostInstance:tc.findFiberByHostInstance||function(){return null},findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var rc=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!rc.isDisabled&&rc.supportsFiber)try{at=rc.inject(nc),it=rc}catch(ce){}}t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=ec,t.createPortal=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!qu(t))throw Error(i(200));return function(e,t,n){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return{$$typeof:k,key:null==r?null:""+r,children:e,containerInfo:t,implementation:n}}(e,t,null,n)},t.createRoot=function(e,t){if(!qu(e))throw Error(i(299));var n=!1,r="",a=Ku;return null!==t&&void 0!==t&&(!0===t.unstable_strictMode&&(n=!0),void 0!==t.identifierPrefix&&(r=t.identifierPrefix),void 0!==t.onRecoverableError&&(a=t.onRecoverableError)),t=Bu(e,1,!1,null,0,n,0,r,a),e[ha]=t.current,$r(8===e.nodeType?e.parentNode:e),new Gu(t)},t.findDOMNode=function(e){if(null==e)return null;if(1===e.nodeType)return e;var t=e._reactInternals;if(void 0===t){if("function"===typeof e.render)throw Error(i(188));throw e=Object.keys(e).join(","),Error(i(268,e))}return e=null===(e=We(t))?null:e.stateNode},t.flushSync=function(e){return cu(e)},t.hydrate=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!0,n)},t.hydrateRoot=function(e,t,n){if(!qu(e))throw Error(i(405));var r=null!=n&&n.hydratedSources||null,a=!1,o="",l=Ku;if(null!==n&&void 0!==n&&(!0===n.unstable_strictMode&&(a=!0),void 0!==n.identifierPrefix&&(o=n.identifierPrefix),void 0!==n.onRecoverableError&&(l=n.onRecoverableError)),t=$u(t,null,e,1,null!=n?n:null,a,0,o,l),e[ha]=t.current,$r(e),r)for(e=0;e<r.length;e++)a=(a=(n=r[e])._getVersion)(n._source),null==t.mutableSourceEagerHydrationData?t.mutableSourceEagerHydrationData=[n,a]:t.mutableSourceEagerHydrationData.push(n,a);return new Yu(t)},t.render=function(e,t,n){if(!Xu(t))throw Error(i(200));return Ju(null,e,t,!1,n)},t.unmountComponentAtNode=function(e){if(!Xu(e))throw Error(i(40));return!!e._reactRootContainer&&(cu(function(){Ju(null,null,e,!1,function(){e._reactRootContainer=null,e[ha]=null})}),!0)},t.unstable_batchedUpdates=uu,t.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Xu(n))throw Error(i(200));if(null==e||void 0===e._reactInternals)throw Error(i(38));return Ju(e,t,n,!1,r)},t.version="18.3.1-next-f1338f8080-20240426"},763:(e,t,n)=>{"use strict";e.exports=n(983)},853:(e,t,n)=>{"use strict";e.exports=n(234)},874:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/suica.1866efe0cd49f80bd3f7.jpg"},950:(e,t,n)=>{"use strict";!function e(){if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__&&"function"===typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE)try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)}catch(t){console.error(t)}}(),e.exports=n(730)},958:(e,t,n)=>{"use strict";e.exports=n.p+"static/media/Wellbeing.98ebc46a1221cf50c414.png"},983:(e,t)=>{"use strict";var n="function"===typeof Symbol&&Symbol.for,r=n?Symbol.for("react.element"):60103,a=n?Symbol.for("react.portal"):60106,i=n?Symbol.for("react.fragment"):60107,o=n?Symbol.for("react.strict_mode"):60108,l=n?Symbol.for("react.profiler"):60114,s=n?Symbol.for("react.provider"):60109,u=n?Symbol.for("react.context"):60110,c=n?Symbol.for("react.async_mode"):60111,d=n?Symbol.for("react.concurrent_mode"):60111,f=n?Symbol.for("react.forward_ref"):60112,p=n?Symbol.for("react.suspense"):60113,h=n?Symbol.for("react.suspense_list"):60120,m=n?Symbol.for("react.memo"):60115,g=n?Symbol.for("react.lazy"):60116,y=n?Symbol.for("react.block"):60121,v=n?Symbol.for("react.fundamental"):60117,b=n?Symbol.for("react.responder"):60118,x=n?Symbol.for("react.scope"):60119;function w(e){if("object"===typeof e&&null!==e){var t=e.$$typeof;switch(t){case r:switch(e=e.type){case c:case d:case i:case l:case o:case p:return e;default:switch(e=e&&e.$$typeof){case u:case f:case g:case m:case s:return e;default:return t}}case a:return t}}}function k(e){return w(e)===d}t.AsyncMode=c,t.ConcurrentMode=d,t.ContextConsumer=u,t.ContextProvider=s,t.Element=r,t.ForwardRef=f,t.Fragment=i,t.Lazy=g,t.Memo=m,t.Portal=a,t.Profiler=l,t.StrictMode=o,t.Suspense=p,t.isAsyncMode=function(e){return k(e)||w(e)===c},t.isConcurrentMode=k,t.isContextConsumer=function(e){return w(e)===u},t.isContextProvider=function(e){return w(e)===s},t.isElement=function(e){return"object"===typeof e&&null!==e&&e.$$typeof===r},t.isForwardRef=function(e){return w(e)===f},t.isFragment=function(e){return w(e)===i},t.isLazy=function(e){return w(e)===g},t.isMemo=function(e){return w(e)===m},t.isPortal=function(e){return w(e)===a},t.isProfiler=function(e){return w(e)===l},t.isStrictMode=function(e){return w(e)===o},t.isSuspense=function(e){return w(e)===p},t.isValidElementType=function(e){return"string"===typeof e||"function"===typeof e||e===i||e===d||e===l||e===o||e===p||e===h||"object"===typeof e&&null!==e&&(e.$$typeof===g||e.$$typeof===m||e.$$typeof===s||e.$$typeof===u||e.$$typeof===f||e.$$typeof===v||e.$$typeof===b||e.$$typeof===x||e.$$typeof===y)},t.typeOf=w}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),n.p="/",n.nc=void 0,(()=>{"use strict";var e=n(43),t=n(391),r=n(528),a=n(324),i=n.n(a);const o=function(e){function t(e,r,s,u,f){for(var p,h,m,g,x,k=0,S=0,A=0,C=0,E=0,z=0,I=m=p=0,D=0,O=0,L=0,F=0,B=s.length,U=B-1,$="",H="",V="",W="";D<B;){if(h=s.charCodeAt(D),D===U&&0!==S+C+A+k&&(0!==S&&(h=47===S?10:47),C=A=k=0,B++,U++),0===S+C+A+k){if(D===U&&(0<O&&($=$.replace(d,"")),0<$.trim().length)){switch(h){case 32:case 9:case 59:case 13:case 10:break;default:$+=s.charAt(D)}h=59}switch(h){case 123:for(p=($=$.trim()).charCodeAt(0),m=1,F=++D;D<B;){switch(h=s.charCodeAt(D)){case 123:m++;break;case 125:m--;break;case 47:switch(h=s.charCodeAt(D+1)){case 42:case 47:e:{for(I=D+1;I<U;++I)switch(s.charCodeAt(I)){case 47:if(42===h&&42===s.charCodeAt(I-1)&&D+2!==I){D=I+1;break e}break;case 10:if(47===h){D=I+1;break e}}D=I}}break;case 91:h++;case 40:h++;case 34:case 39:for(;D++<U&&s.charCodeAt(D)!==h;);}if(0===m)break;D++}if(m=s.substring(F,D),0===p&&(p=($=$.replace(c,"").trim()).charCodeAt(0)),64===p){switch(0<O&&($=$.replace(d,"")),h=$.charCodeAt(1)){case 100:case 109:case 115:case 45:O=r;break;default:O=N}if(F=(m=t(r,O,m,h,f+1)).length,0<R&&(x=l(3,m,O=n(N,$,L),r,_,P,F,h,f,u),$=O.join(""),void 0!==x&&0===(F=(m=x.trim()).length)&&(h=0,m="")),0<F)switch(h){case 115:$=$.replace(w,o);case 100:case 109:case 45:m=$+"{"+m+"}";break;case 107:m=($=$.replace(y,"$1 $2"))+"{"+m+"}",m=1===T||2===T&&i("@"+m,3)?"@-webkit-"+m+"@"+m:"@"+m;break;default:m=$+m,112===u&&(H+=m,m="")}else m=""}else m=t(r,n(r,$,L),m,u,f+1);V+=m,m=L=O=I=p=0,$="",h=s.charCodeAt(++D);break;case 125:case 59:if(1<(F=($=(0<O?$.replace(d,""):$).trim()).length))switch(0===I&&(p=$.charCodeAt(0),45===p||96<p&&123>p)&&(F=($=$.replace(" ",":")).length),0<R&&void 0!==(x=l(1,$,r,e,_,P,H.length,u,f,u))&&0===(F=($=x.trim()).length)&&($="\0\0"),p=$.charCodeAt(0),h=$.charCodeAt(1),p){case 0:break;case 64:if(105===h||99===h){W+=$+s.charAt(D);break}default:58!==$.charCodeAt(F-1)&&(H+=a($,p,h,$.charCodeAt(2)))}L=O=I=p=0,$="",h=s.charCodeAt(++D)}}switch(h){case 13:case 10:47===S?S=0:0===1+p&&107!==u&&0<$.length&&(O=1,$+="\0"),0<R*M&&l(0,$,r,e,_,P,H.length,u,f,u),P=1,_++;break;case 59:case 125:if(0===S+C+A+k){P++;break}default:switch(P++,g=s.charAt(D),h){case 9:case 32:if(0===C+k+S)switch(E){case 44:case 58:case 9:case 32:g="";break;default:32!==h&&(g=" ")}break;case 0:g="\\0";break;case 12:g="\\f";break;case 11:g="\\v";break;case 38:0===C+S+k&&(O=L=1,g="\f"+g);break;case 108:if(0===C+S+k+j&&0<I)switch(D-I){case 2:112===E&&58===s.charCodeAt(D-3)&&(j=E);case 8:111===z&&(j=z)}break;case 58:0===C+S+k&&(I=D);break;case 44:0===S+A+C+k&&(O=1,g+="\r");break;case 34:case 39:0===S&&(C=C===h?0:0===C?h:C);break;case 91:0===C+S+A&&k++;break;case 93:0===C+S+A&&k--;break;case 41:0===C+S+k&&A--;break;case 40:if(0===C+S+k){if(0===p)if(2*E+3*z===533);else p=1;A++}break;case 64:0===S+A+C+k+I+m&&(m=1);break;case 42:case 47:if(!(0<C+k+A))switch(S){case 0:switch(2*h+3*s.charCodeAt(D+1)){case 235:S=47;break;case 220:F=D,S=42}break;case 42:47===h&&42===E&&F+2!==D&&(33===s.charCodeAt(F+2)&&(H+=s.substring(F,D+1)),g="",S=0)}}0===S&&($+=g)}z=E,E=h,D++}if(0<(F=H.length)){if(O=r,0<R&&(void 0!==(x=l(2,H,O,e,_,P,F,u,f,u))&&0===(H=x).length))return W+H+V;if(H=O.join(",")+"{"+H+"}",0!==T*j){switch(2!==T||i(H,2)||(j=0),j){case 111:H=H.replace(b,":-moz-$1")+H;break;case 112:H=H.replace(v,"::-webkit-input-$1")+H.replace(v,"::-moz-$1")+H.replace(v,":-ms-input-$1")+H}j=0}}return W+H+V}function n(e,t,n){var a=t.trim().split(m);t=a;var i=a.length,o=e.length;switch(o){case 0:case 1:var l=0;for(e=0===o?"":e[0]+" ";l<i;++l)t[l]=r(e,t[l],n).trim();break;default:var s=l=0;for(t=[];l<i;++l)for(var u=0;u<o;++u)t[s++]=r(e[u]+" ",a[l],n).trim()}return t}function r(e,t,n){var r=t.charCodeAt(0);switch(33>r&&(r=(t=t.trim()).charCodeAt(0)),r){case 38:return t.replace(g,"$1"+e.trim());case 58:return e.trim()+t.replace(g,"$1"+e.trim());default:if(0<1*n&&0<t.indexOf("\f"))return t.replace(g,(58===e.charCodeAt(0)?"":"$1")+e.trim())}return e+t}function a(e,t,n,r){var o=e+";",l=2*t+3*n+4*r;if(944===l){e=o.indexOf(":",9)+1;var s=o.substring(e,o.length-1).trim();return s=o.substring(0,e).trim()+s+";",1===T||2===T&&i(s,1)?"-webkit-"+s+s:s}if(0===T||2===T&&!i(o,1))return o;switch(l){case 1015:return 97===o.charCodeAt(10)?"-webkit-"+o+o:o;case 951:return 116===o.charCodeAt(3)?"-webkit-"+o+o:o;case 963:return 110===o.charCodeAt(5)?"-webkit-"+o+o:o;case 1009:if(100!==o.charCodeAt(4))break;case 969:case 942:return"-webkit-"+o+o;case 978:return"-webkit-"+o+"-moz-"+o+o;case 1019:case 983:return"-webkit-"+o+"-moz-"+o+"-ms-"+o+o;case 883:if(45===o.charCodeAt(8))return"-webkit-"+o+o;if(0<o.indexOf("image-set(",11))return o.replace(E,"$1-webkit-$2")+o;break;case 932:if(45===o.charCodeAt(4))switch(o.charCodeAt(5)){case 103:return"-webkit-box-"+o.replace("-grow","")+"-webkit-"+o+"-ms-"+o.replace("grow","positive")+o;case 115:return"-webkit-"+o+"-ms-"+o.replace("shrink","negative")+o;case 98:return"-webkit-"+o+"-ms-"+o.replace("basis","preferred-size")+o}return"-webkit-"+o+"-ms-"+o+o;case 964:return"-webkit-"+o+"-ms-flex-"+o+o;case 1023:if(99!==o.charCodeAt(8))break;return"-webkit-box-pack"+(s=o.substring(o.indexOf(":",15)).replace("flex-","").replace("space-between","justify"))+"-webkit-"+o+"-ms-flex-pack"+s+o;case 1005:return p.test(o)?o.replace(f,":-webkit-")+o.replace(f,":-moz-")+o:o;case 1e3:switch(t=(s=o.substring(13).trim()).indexOf("-")+1,s.charCodeAt(0)+s.charCodeAt(t)){case 226:s=o.replace(x,"tb");break;case 232:s=o.replace(x,"tb-rl");break;case 220:s=o.replace(x,"lr");break;default:return o}return"-webkit-"+o+"-ms-"+s+o;case 1017:if(-1===o.indexOf("sticky",9))break;case 975:switch(t=(o=e).length-10,l=(s=(33===o.charCodeAt(t)?o.substring(0,t):o).substring(e.indexOf(":",7)+1).trim()).charCodeAt(0)+(0|s.charCodeAt(7))){case 203:if(111>s.charCodeAt(8))break;case 115:o=o.replace(s,"-webkit-"+s)+";"+o;break;case 207:case 102:o=o.replace(s,"-webkit-"+(102<l?"inline-":"")+"box")+";"+o.replace(s,"-webkit-"+s)+";"+o.replace(s,"-ms-"+s+"box")+";"+o}return o+";";case 938:if(45===o.charCodeAt(5))switch(o.charCodeAt(6)){case 105:return s=o.replace("-items",""),"-webkit-"+o+"-webkit-box-"+s+"-ms-flex-"+s+o;case 115:return"-webkit-"+o+"-ms-flex-item-"+o.replace(S,"")+o;default:return"-webkit-"+o+"-ms-flex-line-pack"+o.replace("align-content","").replace(S,"")+o}break;case 973:case 989:if(45!==o.charCodeAt(3)||122===o.charCodeAt(4))break;case 931:case 953:if(!0===C.test(e))return 115===(s=e.substring(e.indexOf(":")+1)).charCodeAt(0)?a(e.replace("stretch","fill-available"),t,n,r).replace(":fill-available",":stretch"):o.replace(s,"-webkit-"+s)+o.replace(s,"-moz-"+s.replace("fill-",""))+o;break;case 962:if(o="-webkit-"+o+(102===o.charCodeAt(5)?"-ms-"+o:"")+o,211===n+r&&105===o.charCodeAt(13)&&0<o.indexOf("transform",10))return o.substring(0,o.indexOf(";",27)+1).replace(h,"$1-webkit-$2")+o}return o}function i(e,t){var n=e.indexOf(1===t?":":"{"),r=e.substring(0,3!==t?n:10);return n=e.substring(n+1,e.length-1),I(2!==t?r:r.replace(A,"$1"),n,t)}function o(e,t){var n=a(t,t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2));return n!==t+";"?n.replace(k," or ($1)").substring(4):"("+t+")"}function l(e,t,n,r,a,i,o,l,s,c){for(var d,f=0,p=t;f<R;++f)switch(d=z[f].call(u,e,p,n,r,a,i,o,l,s,c)){case void 0:case!1:case!0:case null:break;default:p=d}if(p!==t)return p}function s(e){return void 0!==(e=e.prefix)&&(I=null,e?"function"!==typeof e?T=1:(T=2,I=e):T=0),s}function u(e,n){var r=e;if(33>r.charCodeAt(0)&&(r=r.trim()),r=[r],0<R){var a=l(-1,n,r,r,_,P,0,0,0,0);void 0!==a&&"string"===typeof a&&(n=a)}var i=t(N,r,n,0,0);return 0<R&&(void 0!==(a=l(-2,i,r,r,_,P,i.length,0,0,0))&&(i=a)),j=0,P=_=1,i}var c=/^\0+/g,d=/[\0\r\f]/g,f=/: */g,p=/zoo|gra/,h=/([,: ])(transform)/g,m=/,\r+?/g,g=/([\t\r\n ])*\f?&/g,y=/@(k\w+)\s*(\S*)\s*/,v=/::(place)/g,b=/:(read-only)/g,x=/[svh]\w+-[tblr]{2}/,w=/\(\s*(.*)\s*\)/g,k=/([\s\S]*?);/g,S=/-self|flex-/g,A=/[^]*?(:[rp][el]a[\w-]+)[^]*/,C=/stretch|:\s*\w+\-(?:conte|avail)/,E=/([^-])(image-set\()/,P=1,_=1,j=0,T=1,N=[],z=[],R=0,I=null,M=0;return u.use=function e(t){switch(t){case void 0:case null:R=z.length=0;break;default:if("function"===typeof t)z[R++]=t;else if("object"===typeof t)for(var n=0,r=t.length;n<r;++n)e(t[n]);else M=0|!!t}return e},u.set=s,void 0!==e&&s(e),u};const l={animationIterationCount:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1};function s(e){var t=Object.create(null);return function(n){return void 0===t[n]&&(t[n]=e(n)),t[n]}}var u=/^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|abbr|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|disableRemotePlayback|download|draggable|encType|enterKeyHint|fetchpriority|fetchPriority|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|translate|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|incremental|fallback|inert|itemProp|itemScope|itemType|itemID|itemRef|on|option|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/,c=s(function(e){return u.test(e)||111===e.charCodeAt(0)&&110===e.charCodeAt(1)&&e.charCodeAt(2)<91}),d=n(219),f=n.n(d);function p(){return(p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var h=function(e,t){for(var n=[e[0]],r=0,a=t.length;r<a;r+=1)n.push(t[r],e[r+1]);return n},m=function(e){return null!==e&&"object"==typeof e&&"[object Object]"===(e.toString?e.toString():Object.prototype.toString.call(e))&&!(0,r.QP)(e)},g=Object.freeze([]),y=Object.freeze({});function v(e){return"function"==typeof e}function b(e){return e.displayName||e.name||"Component"}function x(e){return e&&"string"==typeof e.styledComponentId}var w="undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&({NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_ATTR||{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_ATTR)||"data-styled",k="undefined"!=typeof window&&"HTMLElement"in window,S=Boolean("boolean"==typeof SC_DISABLE_SPEEDY?SC_DISABLE_SPEEDY:"undefined"!=typeof process&&void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}&&(void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY?"false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.REACT_APP_SC_DISABLE_SPEEDY:void 0!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&""!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&("false"!=={NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY&&{NODE_ENV:"production",PUBLIC_URL:"",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}.SC_DISABLE_SPEEDY))),A={};function C(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];throw new Error("An error occurred. See https://git.io/JUIaE#"+e+" for more information."+(n.length>0?" Args: "+n.join(", "):""))}var E=function(){function e(e){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=e}var t=e.prototype;return t.indexOfGroup=function(e){for(var t=0,n=0;n<e;n++)t+=this.groupSizes[n];return t},t.insertRules=function(e,t){if(e>=this.groupSizes.length){for(var n=this.groupSizes,r=n.length,a=r;e>=a;)(a<<=1)<0&&C(16,""+e);this.groupSizes=new Uint32Array(a),this.groupSizes.set(n),this.length=a;for(var i=r;i<a;i++)this.groupSizes[i]=0}for(var o=this.indexOfGroup(e+1),l=0,s=t.length;l<s;l++)this.tag.insertRule(o,t[l])&&(this.groupSizes[e]++,o++)},t.clearGroup=function(e){if(e<this.length){var t=this.groupSizes[e],n=this.indexOfGroup(e),r=n+t;this.groupSizes[e]=0;for(var a=n;a<r;a++)this.tag.deleteRule(n)}},t.getGroup=function(e){var t="";if(e>=this.length||0===this.groupSizes[e])return t;for(var n=this.groupSizes[e],r=this.indexOfGroup(e),a=r+n,i=r;i<a;i++)t+=this.tag.getRule(i)+"/*!sc*/\n";return t},e}(),P=new Map,_=new Map,j=1,T=function(e){if(P.has(e))return P.get(e);for(;_.has(j);)j++;var t=j++;return P.set(e,t),_.set(t,e),t},N=function(e){return _.get(e)},z=function(e,t){t>=j&&(j=t+1),P.set(e,t),_.set(t,e)},R="style["+w+'][data-styled-version="5.3.11"]',I=new RegExp("^"+w+'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)'),M=function(e,t,n){for(var r,a=n.split(","),i=0,o=a.length;i<o;i++)(r=a[i])&&e.registerName(t,r)},D=function(e,t){for(var n=(t.textContent||"").split("/*!sc*/\n"),r=[],a=0,i=n.length;a<i;a++){var o=n[a].trim();if(o){var l=o.match(I);if(l){var s=0|parseInt(l[1],10),u=l[2];0!==s&&(z(u,s),M(e,u,l[3]),e.getTag().insertRules(s,r)),r.length=0}else r.push(o)}}},O=function(){return n.nc},L=function(e){var t=document.head,n=e||t,r=document.createElement("style"),a=function(e){for(var t=e.childNodes,n=t.length;n>=0;n--){var r=t[n];if(r&&1===r.nodeType&&r.hasAttribute(w))return r}}(n),i=void 0!==a?a.nextSibling:null;r.setAttribute(w,"active"),r.setAttribute("data-styled-version","5.3.11");var o=O();return o&&r.setAttribute("nonce",o),n.insertBefore(r,i),r},F=function(){function e(e){var t=this.element=L(e);t.appendChild(document.createTextNode("")),this.sheet=function(e){if(e.sheet)return e.sheet;for(var t=document.styleSheets,n=0,r=t.length;n<r;n++){var a=t[n];if(a.ownerNode===e)return a}C(17)}(t),this.length=0}var t=e.prototype;return t.insertRule=function(e,t){try{return this.sheet.insertRule(t,e),this.length++,!0}catch(e){return!1}},t.deleteRule=function(e){this.sheet.deleteRule(e),this.length--},t.getRule=function(e){var t=this.sheet.cssRules[e];return void 0!==t&&"string"==typeof t.cssText?t.cssText:""},e}(),B=function(){function e(e){var t=this.element=L(e);this.nodes=t.childNodes,this.length=0}var t=e.prototype;return t.insertRule=function(e,t){if(e<=this.length&&e>=0){var n=document.createTextNode(t),r=this.nodes[e];return this.element.insertBefore(n,r||null),this.length++,!0}return!1},t.deleteRule=function(e){this.element.removeChild(this.nodes[e]),this.length--},t.getRule=function(e){return e<this.length?this.nodes[e].textContent:""},e}(),U=function(){function e(e){this.rules=[],this.length=0}var t=e.prototype;return t.insertRule=function(e,t){return e<=this.length&&(this.rules.splice(e,0,t),this.length++,!0)},t.deleteRule=function(e){this.rules.splice(e,1),this.length--},t.getRule=function(e){return e<this.length?this.rules[e]:""},e}(),$=k,H={isServer:!k,useCSSOMInjection:!S},V=function(){function e(e,t,n){void 0===e&&(e=y),void 0===t&&(t={}),this.options=p({},H,{},e),this.gs=t,this.names=new Map(n),this.server=!!e.isServer,!this.server&&k&&$&&($=!1,function(e){for(var t=document.querySelectorAll(R),n=0,r=t.length;n<r;n++){var a=t[n];a&&"active"!==a.getAttribute(w)&&(D(e,a),a.parentNode&&a.parentNode.removeChild(a))}}(this))}e.registerId=function(e){return T(e)};var t=e.prototype;return t.reconstructWithOptions=function(t,n){return void 0===n&&(n=!0),new e(p({},this.options,{},t),this.gs,n&&this.names||void 0)},t.allocateGSInstance=function(e){return this.gs[e]=(this.gs[e]||0)+1},t.getTag=function(){return this.tag||(this.tag=(n=(t=this.options).isServer,r=t.useCSSOMInjection,a=t.target,e=n?new U(a):r?new F(a):new B(a),new E(e)));var e,t,n,r,a},t.hasNameForId=function(e,t){return this.names.has(e)&&this.names.get(e).has(t)},t.registerName=function(e,t){if(T(e),this.names.has(e))this.names.get(e).add(t);else{var n=new Set;n.add(t),this.names.set(e,n)}},t.insertRules=function(e,t,n){this.registerName(e,t),this.getTag().insertRules(T(e),n)},t.clearNames=function(e){this.names.has(e)&&this.names.get(e).clear()},t.clearRules=function(e){this.getTag().clearGroup(T(e)),this.clearNames(e)},t.clearTag=function(){this.tag=void 0},t.toString=function(){return function(e){for(var t=e.getTag(),n=t.length,r="",a=0;a<n;a++){var i=N(a);if(void 0!==i){var o=e.names.get(i),l=t.getGroup(a);if(o&&l&&o.size){var s=w+".g"+a+'[id="'+i+'"]',u="";void 0!==o&&o.forEach(function(e){e.length>0&&(u+=e+",")}),r+=""+l+s+'{content:"'+u+'"}/*!sc*/\n'}}}return r}(this)},e}(),W=/(a)(d)/gi,Q=function(e){return String.fromCharCode(e+(e>25?39:97))};function K(e){var t,n="";for(t=Math.abs(e);t>52;t=t/52|0)n=Q(t%52)+n;return(Q(t%52)+n).replace(W,"$1-$2")}var G=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Y=function(e){return G(5381,e)};function q(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(v(n)&&!x(n))return!1}return!0}var X=Y("5.3.11"),Z=function(){function e(e,t,n){this.rules=e,this.staticRulesId="",this.isStatic=(void 0===n||n.isStatic)&&q(e),this.componentId=t,this.baseHash=G(X,t),this.baseStyle=n,V.registerId(t)}return e.prototype.generateAndInjectStyles=function(e,t,n){var r=this.componentId,a=[];if(this.baseStyle&&a.push(this.baseStyle.generateAndInjectStyles(e,t,n)),this.isStatic&&!n.hash)if(this.staticRulesId&&t.hasNameForId(r,this.staticRulesId))a.push(this.staticRulesId);else{var i=ge(this.rules,e,t,n).join(""),o=K(G(this.baseHash,i)>>>0);if(!t.hasNameForId(r,o)){var l=n(i,"."+o,void 0,r);t.insertRules(r,o,l)}a.push(o),this.staticRulesId=o}else{for(var s=this.rules.length,u=G(this.baseHash,n.hash),c="",d=0;d<s;d++){var f=this.rules[d];if("string"==typeof f)c+=f;else if(f){var p=ge(f,e,t,n),h=Array.isArray(p)?p.join(""):p;u=G(u,h+d),c+=h}}if(c){var m=K(u>>>0);if(!t.hasNameForId(r,m)){var g=n(c,"."+m,void 0,r);t.insertRules(r,m,g)}a.push(m)}}return a.join(" ")},e}(),J=/^\s*\/\/.*$/gm,ee=[":","[",".","#"];function te(e){var t,n,r,a,i=void 0===e?y:e,l=i.options,s=void 0===l?y:l,u=i.plugins,c=void 0===u?g:u,d=new o(s),f=[],p=function(e){function t(t){if(t)try{e(t+"}")}catch(e){}}return function(n,r,a,i,o,l,s,u,c,d){switch(n){case 1:if(0===c&&64===r.charCodeAt(0))return e(r+";"),"";break;case 2:if(0===u)return r+"/*|*/";break;case 3:switch(u){case 102:case 112:return e(a[0]+r),"";default:return r+(0===d?"/*|*/":"")}case-2:r.split("/*|*/}").forEach(t)}}}(function(e){f.push(e)}),h=function(e,r,i){return 0===r&&-1!==ee.indexOf(i[n.length])||i.match(a)?e:"."+t};function m(e,i,o,l){void 0===l&&(l="&");var s=e.replace(J,""),u=i&&o?o+" "+i+" { "+s+" }":s;return t=l,n=i,r=new RegExp("\\"+n+"\\b","g"),a=new RegExp("(\\"+n+"\\b){2,}"),d(o||!i?"":i,u)}return d.use([].concat(c,[function(e,t,a){2===e&&a.length&&a[0].lastIndexOf(n)>0&&(a[0]=a[0].replace(r,h))},p,function(e){if(-2===e){var t=f;return f=[],t}}])),m.hash=c.length?c.reduce(function(e,t){return t.name||C(15),G(e,t.name)},5381).toString():"",m}var ne=e.createContext(),re=(ne.Consumer,e.createContext()),ae=(re.Consumer,new V),ie=te();function oe(){return(0,e.useContext)(ne)||ae}function le(){return(0,e.useContext)(re)||ie}function se(t){var n=(0,e.useState)(t.stylisPlugins),r=n[0],a=n[1],o=oe(),l=(0,e.useMemo)(function(){var e=o;return t.sheet?e=t.sheet:t.target&&(e=e.reconstructWithOptions({target:t.target},!1)),t.disableCSSOMInjection&&(e=e.reconstructWithOptions({useCSSOMInjection:!1})),e},[t.disableCSSOMInjection,t.sheet,t.target]),s=(0,e.useMemo)(function(){return te({options:{prefix:!t.disableVendorPrefixes},plugins:r})},[t.disableVendorPrefixes,r]);return(0,e.useEffect)(function(){i()(r,t.stylisPlugins)||a(t.stylisPlugins)},[t.stylisPlugins]),e.createElement(ne.Provider,{value:l},e.createElement(re.Provider,{value:s},t.children))}var ue=function(){function e(e,t){var n=this;this.inject=function(e,t){void 0===t&&(t=ie);var r=n.name+t.hash;e.hasNameForId(n.id,r)||e.insertRules(n.id,r,t(n.rules,r,"@keyframes"))},this.toString=function(){return C(12,String(n.name))},this.name=e,this.id="sc-keyframes-"+e,this.rules=t}return e.prototype.getName=function(e){return void 0===e&&(e=ie),this.name+e.hash},e}(),ce=/([A-Z])/,de=/([A-Z])/g,fe=/^ms-/,pe=function(e){return"-"+e.toLowerCase()};function he(e){return ce.test(e)?e.replace(de,pe).replace(fe,"-ms-"):e}var me=function(e){return null==e||!1===e||""===e};function ge(e,t,n,r){if(Array.isArray(e)){for(var a,i=[],o=0,s=e.length;o<s;o+=1)""!==(a=ge(e[o],t,n,r))&&(Array.isArray(a)?i.push.apply(i,a):i.push(a));return i}return me(e)?"":x(e)?"."+e.styledComponentId:v(e)?"function"!=typeof(u=e)||u.prototype&&u.prototype.isReactComponent||!t?e:ge(e(t),t,n,r):e instanceof ue?n?(e.inject(n,r),e.getName(r)):e:m(e)?function e(t,n){var r,a,i=[];for(var o in t)t.hasOwnProperty(o)&&!me(t[o])&&(Array.isArray(t[o])&&t[o].isCss||v(t[o])?i.push(he(o)+":",t[o],";"):m(t[o])?i.push.apply(i,e(t[o],o)):i.push(he(o)+": "+(r=o,(null==(a=t[o])||"boolean"==typeof a||""===a?"":"number"!=typeof a||0===a||r in l||r.startsWith("--")?String(a).trim():a+"px")+";")));return n?[n+" {"].concat(i,["}"]):i}(e):e.toString();var u}var ye=function(e){return Array.isArray(e)&&(e.isCss=!0),e};function ve(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return v(e)||m(e)?ye(ge(h(g,[e].concat(n)))):0===n.length&&1===e.length&&"string"==typeof e[0]?e:ye(ge(h(e,n)))}new Set;var be=function(e,t,n){return void 0===n&&(n=y),e.theme!==n.theme&&e.theme||t||n.theme},xe=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,we=/(^-|-$)/g;function ke(e){return e.replace(xe,"-").replace(we,"")}var Se=function(e){return K(Y(e)>>>0)};function Ae(e){return"string"==typeof e&&!0}var Ce=function(e){return"function"==typeof e||"object"==typeof e&&null!==e&&!Array.isArray(e)},Ee=function(e){return"__proto__"!==e&&"constructor"!==e&&"prototype"!==e};function Pe(e,t,n){var r=e[n];Ce(t)&&Ce(r)?_e(r,t):e[n]=t}function _e(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];for(var a=0,i=n;a<i.length;a++){var o=i[a];if(Ce(o))for(var l in o)Ee(l)&&Pe(e,o[l],l)}return e}var je=e.createContext();je.Consumer;function Te(t){var n=(0,e.useContext)(je),r=(0,e.useMemo)(function(){return function(e,t){return e?v(e)?e(t):Array.isArray(e)||"object"!=typeof e?C(8):t?p({},t,{},e):e:C(14)}(t.theme,n)},[t.theme,n]);return t.children?e.createElement(je.Provider,{value:r},t.children):null}var Ne={};function ze(t,n,r){var a=x(t),i=!Ae(t),o=n.attrs,l=void 0===o?g:o,s=n.componentId,u=void 0===s?function(e,t){var n="string"!=typeof e?"sc":ke(e);Ne[n]=(Ne[n]||0)+1;var r=n+"-"+Se("5.3.11"+n+Ne[n]);return t?t+"-"+r:r}(n.displayName,n.parentComponentId):s,d=n.displayName,h=void 0===d?function(e){return Ae(e)?"styled."+e:"Styled("+b(e)+")"}(t):d,m=n.displayName&&n.componentId?ke(n.displayName)+"-"+n.componentId:n.componentId||u,w=a&&t.attrs?Array.prototype.concat(t.attrs,l).filter(Boolean):l,k=n.shouldForwardProp;a&&t.shouldForwardProp&&(k=n.shouldForwardProp?function(e,r,a){return t.shouldForwardProp(e,r,a)&&n.shouldForwardProp(e,r,a)}:t.shouldForwardProp);var S,A=new Z(r,m,a?t.componentStyle:void 0),C=A.isStatic&&0===l.length,E=function(t,n){return function(t,n,r,a){var i=t.attrs,o=t.componentStyle,l=t.defaultProps,s=t.foldedComponentIds,u=t.shouldForwardProp,d=t.styledComponentId,f=t.target,h=function(e,t,n){void 0===e&&(e=y);var r=p({},t,{theme:e}),a={};return n.forEach(function(e){var t,n,i,o=e;for(t in v(o)&&(o=o(r)),o)r[t]=a[t]="className"===t?(n=a[t],i=o[t],n&&i?n+" "+i:n||i):o[t]}),[r,a]}(be(n,(0,e.useContext)(je),l)||y,n,i),m=h[0],g=h[1],b=function(e,t,n){var r=oe(),a=le();return t?e.generateAndInjectStyles(y,r,a):e.generateAndInjectStyles(n,r,a)}(o,a,m),x=r,w=g.$as||n.$as||g.as||n.as||f,k=Ae(w),S=g!==n?p({},n,{},g):n,A={};for(var C in S)"$"!==C[0]&&"as"!==C&&("forwardedAs"===C?A.as=S[C]:(u?u(C,c,w):!k||c(C))&&(A[C]=S[C]));return n.style&&g.style!==n.style&&(A.style=p({},n.style,{},g.style)),A.className=Array.prototype.concat(s,d,b!==d?b:null,n.className,g.className).filter(Boolean).join(" "),A.ref=x,(0,e.createElement)(w,A)}(S,t,n,C)};return E.displayName=h,(S=e.forwardRef(E)).attrs=w,S.componentStyle=A,S.displayName=h,S.shouldForwardProp=k,S.foldedComponentIds=a?Array.prototype.concat(t.foldedComponentIds,t.styledComponentId):g,S.styledComponentId=m,S.target=a?t.target:t,S.withComponent=function(e){var t=n.componentId,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(n,["componentId"]),i=t&&t+"-"+(Ae(e)?e:ke(b(e)));return ze(e,p({},a,{attrs:w,componentId:i}),r)},Object.defineProperty(S,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(e){this._foldedDefaultProps=a?_e({},t.defaultProps,e):e}}),Object.defineProperty(S,"toString",{value:function(){return"."+S.styledComponentId}}),i&&f()(S,t,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0,withComponent:!0}),S}var Re=function(e){return function e(t,n,a){if(void 0===a&&(a=y),!(0,r.Hy)(n))return C(1,String(n));var i=function(){return t(n,a,ve.apply(void 0,arguments))};return i.withConfig=function(r){return e(t,n,p({},a,{},r))},i.attrs=function(r){return e(t,n,p({},a,{attrs:Array.prototype.concat(a.attrs,r).filter(Boolean)}))},i}(ze,e)};["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","marquee","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","textPath","tspan"].forEach(function(e){Re[e]=Re(e)});var Ie=function(){function e(e,t){this.rules=e,this.componentId=t,this.isStatic=q(e),V.registerId(this.componentId+1)}var t=e.prototype;return t.createStyles=function(e,t,n,r){var a=r(ge(this.rules,t,n,r).join(""),""),i=this.componentId+e;n.insertRules(i,i,a)},t.removeStyles=function(e,t){t.clearRules(this.componentId+e)},t.renderStyles=function(e,t,n,r){e>2&&V.registerId(this.componentId+e),this.removeStyles(e,n),this.createStyles(e,t,n,r)},e}();function Me(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var a=ve.apply(void 0,[e].concat(n)).join(""),i=Se(a);return new ue(i,a)}!function(){function t(){var t=this;this._emitSheetCSS=function(){var e=t.instance.toString();if(!e)return"";var n=O();return"<style "+[n&&'nonce="'+n+'"',w+'="true"','data-styled-version="5.3.11"'].filter(Boolean).join(" ")+">"+e+"</style>"},this.getStyleTags=function(){return t.sealed?C(2):t._emitSheetCSS()},this.getStyleElement=function(){var n;if(t.sealed)return C(2);var r=((n={})[w]="",n["data-styled-version"]="5.3.11",n.dangerouslySetInnerHTML={__html:t.instance.toString()},n),a=O();return a&&(r.nonce=a),[e.createElement("style",p({},r,{key:"sc-0-0"}))]},this.seal=function(){t.sealed=!0},this.instance=new V({isServer:!0}),this.sealed=!1}var n=t.prototype;n.collectStyles=function(t){return this.sealed?C(2):e.createElement(se,{sheet:this.instance},t)},n.interleaveWithNodeStream=function(e){return C(3)}}();const De=Re,Oe=n.p+"static/media/profile_picture.30fccab6678c5fd2d87d.JPG";var Le=n(579);const Fe=De.section`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  background: #ffffff;
  color: #000000;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    height: auto;
    min-height: 100vh;
    overflow: visible;
    padding: 3.5rem 1.5rem;
  }
`,Be=De.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 3.5rem;
  max-width: 1080px;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    text-align: center;
    gap: 1.5rem;
  }
`,Ue=De.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  flex: 1 1 auto;
  min-width: 0;

  @media (max-width: 768px) {
    align-items: center;
  }
`,$e=De.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-bottom: 1.5rem;
  
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    gap: 0.75rem;
  }
`,He=De.h1`
  font-size: 3rem;
  font-weight: 200;
  letter-spacing: -0.02em;
  color: #000000;
  margin: 0;
  cursor: pointer;
  transition: all 0.4s ease;
  opacity: 1;
  transform: translateY(0);
  
  &:hover {
    color: #4CAF50;
  }
  
  &.changing {
    opacity: 0;
    transform: translateY(-10px);
  }
  
  @media (max-width: 768px) {
    font-size: 2.5rem;
  }
`,Ve=De.div`
  display: flex;
  gap: 0.75rem;
  align-items: center;
`,We=De.a`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  text-decoration: none;
  
  &:hover {
    background: #4CAF50;
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(76, 175, 80, 0.3);
  }
  
  svg {
    width: 20px;
    height: 20px;
    fill: #666666;
    transition: fill 0.3s ease;
  }
  
  &:hover svg {
    fill: #ffffff;
  }
`,Qe=De.p`
  font-size: 1.1rem;
  font-weight: 300;
  line-height: 1.6;
  color: #333333;
  letter-spacing: 0.01em;
  max-width: 580px;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 1rem;
    max-width: 100%;
  }
`,Ke=De.div`
  position: relative;
  flex-shrink: 0;

  @media (max-width: 768px) {
    order: -1;
    margin-top: 0;
    margin-bottom: 0.5rem;
  }
`,Ge=De.img`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  object-fit: cover;
  border: 3px solid #ffffff;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    width: 120px;
    height: 120px;
  }
`,Ye=De.div`
  position: fixed;
  background: rgba(0, 0, 0, 0.9);
  color: #ffffff;
  padding: 0.75rem 1rem;
  border-radius: 8px;
  font-size: 0.85rem;
  font-weight: 300;
  line-height: 1.4;
  max-width: 250px;
  z-index: 1000;
  pointer-events: none;
  opacity: 0;
  transform: translate(-50%, -100%) translateY(-10px);
  transition: opacity 0.3s ease, transform 0.3s ease;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
  
  &.visible {
    opacity: 1;
    transform: translate(-50%, -100%) translateY(-5px);
  }
  
  &::after {
    content: '';
    position: absolute;
    top: 100%;
    left: 50%;
    transform: translateX(-50%);
    border: 6px solid transparent;
    border-top-color: rgba(0, 0, 0, 0.9);
  }
`,qe=De.div`
  position: absolute;
  bottom: 2rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  opacity: 0.6;
  transition: all 0.3s ease;
  cursor: pointer;
  
  &:hover {
    opacity: 1;
    transform: translateX(-50%) translateY(-2px);
  }
`,Xe=(De.span`
  font-size: 0.75rem;
  font-weight: 300;
  color: #666666;
  margin-bottom: 0.5rem;
  letter-spacing: 0.05em;
  text-transform: uppercase;
`,De.div`
  width: 24px;
  height: 24px;
  border: 2px solid #4CAF50;
  border-top: none;
  border-left: none;
  transform: rotate(45deg);
  animation: bounce 2s infinite;
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: rotate(45deg) translateY(0);
    }
    40% {
      transform: rotate(45deg) translateY(-4px);
    }
    60% {
      transform: rotate(45deg) translateY(-2px);
    }
  }
`);const Ze=function(){const t=["Hi there!","\u3053\u3093\u306b\u3061\u306f","Hallo!","\u4f60\u597d"],[n,r]=(0,e.useState)(0),[a,i]=(0,e.useState)(!1),[o,l]=(0,e.useState)(!1),[s,u]=(0,e.useState)(!1),[c,d]=(0,e.useState)({x:0,y:0});return(0,e.useEffect)(()=>{let e;return a?e=setInterval(()=>{l(!0),setTimeout(()=>{r(e=>(e+1)%t.length),l(!1)},200)},2200):(r(0),l(!1)),()=>clearInterval(e)},[a,t.length]),(0,Le.jsxs)(Fe,{children:[(0,Le.jsxs)(Be,{children:[(0,Le.jsxs)(Ue,{children:[(0,Le.jsxs)($e,{children:[(0,Le.jsx)(He,{className:o?"changing":"",onMouseEnter:()=>i(!0),onMouseLeave:()=>i(!1),children:t[n]}),(0,Le.jsxs)(Ve,{children:[(0,Le.jsx)(We,{href:"https://www.linkedin.com/in/yushiq/",target:"_blank",rel:"noopener noreferrer",title:"LinkedIn",children:(0,Le.jsx)("svg",{viewBox:"0 0 24 24",children:(0,Le.jsx)("path",{d:"M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"})})}),(0,Le.jsx)(We,{href:"https://github.com/ihsuy",target:"_blank",rel:"noopener noreferrer",title:"GitHub",children:(0,Le.jsx)("svg",{viewBox:"0 0 24 24",children:(0,Le.jsx)("path",{d:"M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"})})})]})]}),(0,Le.jsx)(Qe,{children:"Hi \ud83d\udc4b I'm Yushi Chonan (aka Yushi Qiu), based in Tokyo, working at Anthropic as a member of technical staff. I'm passionate about using engineering to get things done - what gives me energy is whether what I build changes anything real for a team, a company, or a person trying to do their job. Before Anthropic, I spent five years at Palantir building Japan's commercial business from scratch, across manufacturing, logistics, fleet management, telecom, insurance, elderly care, and disaster response. That work taught me it's as much about trust and understanding as it is about code. I joined Anthropic because the most important leverage point right now is at the model layer, and I want to help bring that work to the people and organizations so they can use it well and safely. I'm happiest learning something hard, working with low-ego people willing to fight for what they believe in, and building toward something that lasts."})]}),(0,Le.jsxs)(Ke,{children:[(0,Le.jsx)(Ge,{src:Oe,alt:"Yushi Chonan (formerly Yushi Qiu)",onMouseEnter:()=>{u(!0)},onMouseLeave:()=>{u(!1)},onMouseMove:e=>{d({x:e.clientX,y:e.clientY})}}),(0,Le.jsx)(Ye,{className:s?"visible":"",style:{left:`${c.x}px`,top:`${c.y}px`},children:"Snapped by my friend Akil during a customer visit in Kuala Lumpur-this was at the National Museum of Malaysia, where we took a little detour for some culture"})]})]}),(0,Le.jsx)(qe,{onClick:()=>window.scrollTo({top:window.innerHeight,behavior:"smooth"}),children:(0,Le.jsx)(Xe,{})})]})};n(874),n(514),n(958);const Je=n.p+"static/media/palantir.ed45f602b201b630ee0b5087ab9b60da.svg",et=n.p+"static/media/utokyo.dd8bb2daf7f0e633ff41.png";const tt=n.p+"static/media/daimler.952f05b5b00719dc1d5613553eaa9540.svg",nt=De.section`
  min-height: 100vh;
  padding: 4rem 2rem 2rem 2rem;
  background: #ffffff;
`,rt=De.h2`
  font-size: 2.0rem;
  font-weight: 200;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
  letter-spacing: -0.01em;
  position: relative;
`,at=De.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 2rem;
`,it=De.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 0;
  }
`,ot=(De.div`
  display: flex;
  flex-direction: column;
`,De.h3`
  font-size: 1.8rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 0.5rem;
  letter-spacing: -0.01em;
`,De.h4`
  font-size: 1rem;
  font-weight: 300;
  color: #4CAF50; /* Summer green accent */
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,De.p`
  font-size: 0.9rem;
  color: #999999;
  margin-bottom: 2rem;
  font-weight: 300;
`,De.p`
  font-size: 1rem;
  line-height: 1.7;
  color: #666666;
  margin-bottom: 2rem;
  max-width: 600px;
`,De.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.8rem;
  margin-bottom: 1rem;
`,De.span`
  color: #000000;
  font-size: 0.85rem;
  font-weight: 300;
  padding-bottom: 2px;
  border-bottom: 1px solid #e0e0e0;
  transition: border-color 0.3s ease;
  
  &:hover {
    border-color: #2196F3; /* Summer blue accent */
  }
`,De.a`
  display: inline-block;
  margin-top: 1rem;
  color: #000000;
  text-decoration: none;
  font-weight: 300;
  font-size: 0.9rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  padding-bottom: 2px;
  border-bottom: 1px solid #4CAF50; /* Summer green accent */
  transition: all 0.3s ease;
  width: fit-content;
  
  &:hover {
    color: #4CAF50;
    text-decoration: none;
  }
`,De.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  gap: 0.6rem;
  margin-bottom: 0.6rem;
`),lt=De.div`
  display: flex;
  flex-direction: column;
  min-width: 0;
`,st=De.span`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  flex-shrink: 0;
  margin-top: 2px;
  border-radius: 6px;
  overflow: hidden;

  svg, img {
    width: 100%;
    height: 100%;
    display: block;
    object-fit: contain;
  }
`,ut=De.h3`
  font-size: 1.2rem;
  font-weight: 700;
  color: #000000;
  margin-bottom: 0.15rem;
  letter-spacing: -0.01em;
`,ct=De.div`
  font-size: 0.85rem;
  font-weight: 300;
  color: #666666;
  margin-bottom: 0.5rem;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,dt=De.span`
  font-size: 0.75rem;
  font-weight: 500;
  color:rgb(0, 0, 0);
  background: rgb(255, 217, 0);
  padding: 0.2rem 0.5rem;
  border-radius: 12px;
  margin-left: 0.5rem;
  white-space: nowrap;
`,ft=De.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  margin-bottom: 0.5rem;
`,pt=De.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  padding: 0.25rem 0;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.25rem;
  }
`,ht=De.div`
  font-size: 1rem;
  font-weight: 400;
  color: #4CAF50; /* Summer green accent */
  text-transform: uppercase;
  letter-spacing: 0.05em;
`,mt=De.div`
  font-size: 0.85rem;
  font-weight: 300;
  color: #999999;
`,gt=De.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #666666;
  margin: 0.4rem 0 0.6rem 0;
  max-width: 600px;
`,yt=De.div`
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  border-left: 2px solid #e0e0e0;
`,vt=De.div`
  margin-bottom: 0.5rem;
`,bt=De.h6`
  font-size: 0.8rem;
  font-weight: 500;
  color: #4CAF50;
  margin-bottom: 0.25rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,xt=De.p`
  font-size: 0.7rem;
  font-weight: 300;
  color: #999999;
  margin: 0;
  font-style: italic;
  line-height: 1.3;
`,wt=De.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`,kt=De.img`
  max-width: 120px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 3px;
  flex-shrink: 0;
  // border: 1px solid #e0e0e0;
`,St=De.div`
  flex: 1;
`,At=De.div`
  display: flex;
  align-items: center;
  gap: 0.3rem;
  margin-bottom: 0.25rem;
`,Ct=De.h6`
  font-size: 0.85rem;
  font-weight: 400;
  color: #000000;
  margin: 0;
  line-height: 1.3;
  flex: 1;
`,Et=De.a`
  color: #4CAF50;
  text-decoration: none;
  display: flex;
  align-items: center;
  opacity: 0.7;
  transition: all 0.2s ease;
  
  &:hover {
    opacity: 1;
    transform: translateX(2px);
  }
  
  svg {
    width: 14px;
    height: 14px;
  }
`,Pt=De.p`
  font-size: 0.75rem;
  color: #666666;
  margin-bottom: 0.25rem;
  line-height: 1.3;
`,_t=De.a`
  color: #4CAF50;
  text-decoration: none;
  font-weight: 400;
  
  &:hover {
    text-decoration: underline;
  }
`,jt=e=>{if(!e||!e.includes(" - "))return null;const[t,n]=e.split(" - "),r=new Date(t),a="present"===n.toLowerCase()?new Date:new Date(n);if(isNaN(r.getTime())||isNaN(a.getTime()))return null;const i=(a-r)/315576e5;if(i<1){const e=Math.round(12*i);return`${e} month${1!==e?"s":""}`}{const e=Math.floor(i),t=Math.round(12*(i-e));if(0===t)return`${e} year${1!==e?"s":""}`;if(t>=9){const t=e+1;return`${t} year${1!==t?"s":""}`}return`${e}.${t} years`}},Tt=e=>{let{text:t,className:n}=e;const r=(e=>{if(!e)return null;const t=/\[([^\]]+)\]\(([^)]+)\)/g,n=[];let r,a=0;for(;null!==(r=t.exec(e));)r.index>a&&n.push(e.slice(a,r.index)),n.push({type:"link",text:r[1],url:r[2]}),a=r.index+r[0].length;return a<e.length&&n.push(e.slice(a)),n.length>0?n:[e]})(t);return(0,Le.jsx)("span",{className:n,children:r.map((e,t)=>"string"===typeof e?e:"link"===e.type?(0,Le.jsx)(_t,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.text},t):null)})},Nt=()=>{const e=[{company:"Anthropic PBC",duration:"Apr 2026 - Present",roles:[{title:"Member of Technical Staff",description:"Building frontier AI systems at Anthropic, and establishing the Forward Deployed Engineering (FDE) motion in Japan and APAC."}],link:"https://www.anthropic.com",companyInitial:"A"},{company:"Palantir Technologies",duration:"May 2021 - Apr 2026",roles:[{title:"Enterprise Tech Lead, Japan Commercial",description:"As Palantir Japan\u2019s first locally hired Forward Deployed Engineer, I\u2019ve led the integration of Palantir\u2019s technology and culture into Japan\u2019s complex enterprise landscape. Starting from Palantir Japan's earliest pilots, I\u2019ve led the expansion of our organic customer base from zero to a dozen in three years and developed a sales pipeline generating a steady stream of annual recurring revenue.",workItems:[{title:"\u80fd\u767b\u534a\u5cf6\u5730\u9707\u3067\u77f3\u5ddd\u770c\u304c\u907f\u96e3\u8005\u60c5\u5831\u306e\u628a\u63e1\u306bSuica\u3092\u6d3b\u7528\u3078",titleEn:"Ishikawa Prefecture to Use Suica for Evacuee Information Management in Noto Peninsula Earthquake",description:"Disaster response system leveraging IC card technology for evacuee tracking and management",image:n(874),link:"https://xtech.nikkei.com/atcl/nxt/column/18/02706/012600061/"},{title:"\u30e4\u30de\u30c8\u30db\u30fc\u30eb\u30c7\u30a3\u30f3\u30b0\u30b9\u3068Palantir\u3001\u65e5\u672c\u306e\u7269\u6d41\u306e\u30c7\u30b8\u30bf\u30eb\u30c8\u30e9\u30f3\u30b9\u30d5\u30a9\u30fc\u30e1\u30fc\u30b7\u30e7\u30f3\u3092\u52a0\u901f\u3055\u305b\u308b\u53d6\u308a\u7d44\u307f",titleEn:"Yamato Holdings and Palantir Begin Initiative to Accelerate Digital Transformation of Japanese Logistics",description:"Strategic partnership to modernize Japan's logistics infrastructure through data-driven transformation",image:n(514),link:"https://www.yamato-hd.co.jp/news/2020/20200710.html"},{title:"\u9ad8\u9f62\u8005\u30b1\u30a2\u306e\u30c7\u30b8\u30bf\u30eb\u30c8\u30e9\u30f3\u30b9\u30d5\u30a9\u30fc\u30e1\u30fc\u30b7\u30e7\u30f3",titleEn:"Elderly Care Digital Transformation",description:"Driving societal change through digital transformation in elderly care and wellbeing",image:n(958),link:"https://www.palantir.com/impact/sompo/japan/"}]}],link:"https://www.palantir.com",companyInitial:"P"},{company:"Microsoft Japan",duration:"Oct 2020 - Apr 2021",roles:[{title:"AI for Good - CSR team",description:"Worked with non-profits and research institutions in Japan and internationally to promote technology adoption for social impact, including advancing tuberculosis treatment with computer vision, directly engaging with Japanese government officials and politicians to support youth coding education, and helping reskill workers for employment in partnership with organizations like [Sodateage Net](https://www.sodateage.net/)"}],link:"https://www.u-tokyo.ac.jp/en/",companyInitial:"UT"},{company:"The University of Tokyo",duration:"Apr 2020 - Sep 2021",roles:[{title:"Deep Learning Researcher",description:"Conducted research on neural network training dynamics and weight structure evolution."}],link:"https://www.u-tokyo.ac.jp/en/",companyInitial:"UT"},{company:"Daimler AG",duration:"Dec 2015 - Jun 2016",roles:[{title:"Data Scientist",description:"Applied semantic analysis techniques and built an automated system for categorizing market claims related to car malfunctions, enabling more efficient identification of trending vehicle issues. Ensured timely delivery of monthly reports, and supported the escalation of critical findings to R&D teams to drive resolution of emerging product concerns."}],link:"https://www.u-tokyo.ac.jp/en/",companyInitial:"UT"}];return(0,Le.jsxs)(nt,{children:[(0,Le.jsx)(rt,{children:"Work Experience"}),(0,Le.jsx)(at,{children:e.map((e,t)=>{return(0,Le.jsxs)(it,{children:[(0,Le.jsxs)(ot,{children:[(0,Le.jsx)(st,{children:(n=e.company,n.includes("Anthropic")?(0,Le.jsx)("img",{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAv8SURBVHgB7d2xVhxHGsXx8h7HegKR24J8NWxsZpwLyNeQe+EBvN4c5Fyw+QC5GG8udjcGvwA8gc5xYCc2JYtj1AeGZujvdlfd/y/UUSDQ9J3q2/1VffbrLz//lgBY+ksCYIsAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMfZ4Q7uLip/TV2iSprI5G6eRkmrr2/v379MWXK0kh//vzz4FYrAAE3hwcJqV3Z2cfLtauPXv2THZRHh+dJMQjAILlC/H0dJbU3ryJCZ2d3W+Twtvr31lEiOFTBECwvj7IUauOvALIK4Fo+Xc2nR4nxCIAgvW1lM0XUL4ViLC99U1SmM1+TIhFAAS6vLwKuwjb2N/7IUXY3tYEQP7d9fn7c0AABNrbf536VEMZODtlFRCJAAh0dvbf1LfSy8Dp0TFlYCACIEj+4F5eXqa+UQZiHgIgyFCeY1MGYh4CIEDf5V8TZSDuQwAE6Lv8a6IMxH0IgABDKP+aKANxFwKgY0Mp/5ooA3EXAqBjQx1ioQzEXQiADg2t/Gs6ePPvFGEyGScFysDuEQAdGlr51xRVBi4vv6AMLBQB0KEhln+35Ys/qgzc2v57UqAM7BYB0JGhln9Np0H30ZSBZSIAOlLKDjYXFxch99H54qcMLA8B0IGhl39NUWXgaPVlUsi/67zPIp6OAOjA0VFZS9KoMjDfBqjKwD62WasRAdCBo+OyNrCMvI8ej9eSQn6xiTLw6QiAJ5rNZkWUf01R99Gbm+uyMvDdu2E/dSkBAfBE00K3r456qSZf/Jsb60nhQLzdeo0IgCfI5V/J96JRL9WMJ5rbgBxgl1dXCYsjAJ6g9CIq6qUaZRl4xDsBT0IAPMHBYczjNJVaykAsjgBY0Nl1AVVi+ddURRnIgNDCCIAFTY/rWHrWUAZGbXnmgABYQC7/FC//KL5BsxrKQN4JWAwBsADVkvNf338nCYEaysCoKcfaEQAL2N/XLDlHqyPJgA1loC8C4JFU5V++f156/ly22w5loCcC4JFU5d/GxwJNtdsOZaAnAuARVOXf0tLzNBr9OVqrWkZTBvohAB5BtcScjD9d9quW0ZSBfgiAR1CVf1uNI7dUy2jKQD8EQEuq8i9/U+byr0m1jKYM9EIAtKQr/17d+eeqZXTUdlsfzhFc1dwGUAa2RwC0oCz/NuYs9W8Xg5Giphy3tjRbh1MGtkcAtKBaUj70Da86jjtqu638862sLCcFysB2CIAWZOXfN/MvcNVx3JHbbY3XKAOHhAB4gKr8y8v/5ZUXD/491XHcUdtt5VUMZeBwEAAPUJV/uzv/aPX3VCfwRJaBK8ua24Co8w9qQgDMkb9FVNt+jR7RkKtO4In62VWrGMrAhxEAc7y9vgAUH6CbwZ+2lGVgBOU5gpSB8xEAcxweaj48G498y09aBgbdR8tWMZwjOBcBcI98/3t+Hn/+XHPwp631wifsVKuYqMNQa0EA3EP1GGljfbEL+evJmqwMjLgNUq1islJObu4DAXAPVfm3sblYACjn7KPuo1VloKrLKREBcIeosdim+wZ/2lINCNVQBk45QOROBMAdVEvG+wZ/2lINCNVQBs4oA+9EADTkwR9FafTQ4E9bqjn70svAqC3PSkcANOztv04KXX1zq+bsaygDo7Y8KxkB0HB2pjlz/qHBn7aUr9aWXgaqup2SEAC35A+IYvBn+fqCbTP405bqAqIMrA8BcIuq/NvueGMM5QVEGVgXAuAjVfmXjQK2xlJdQJSBdSEAPlKVf48d/GlLeQFRBtaDAPhIVf5tBL29p7yAKAPrQQAkXfm36OBPW1vbmk03KQPrQQAk4Zt/67Hv7lMGtkcZ+Af7AFCWf4sO/rSlHBCK2m5LdRoyZeAf7ANA+eZfRPnXVPpBnKrTkDPKQAJAWP49bfCnLeWAUFQZqOoyKAPNA0BZ/m2IluaZakAoarstykAd6wBQlX+qJe0N1YBQ1HZbyi7DvQy0DQBl+bez227P/64oD+KMKgOVXUbE+QelsA0AxWGfWR78UZR/TaUfxKnqMjLV9m9D5BsAx2UO/rRVw320qsuIOgy1BJYBMJvNJOVfNlrV3v/fVvpLNaouI/Iw1KGzDICpqPyLGvxpq/QJO+mLTaanCX+ezOTyT3XPd35dLr16tZkc5JdqIu7ZcxmoOKPhpstQrDiG5LNff/n5t2Qkv7zy3T+/T+hWvnD+/793IRdQDlHFE5t8QvOu+IlN3+xuAQ4OOTI6Qi1loBurADi7LnpU5Z+jKspAswEhqwCYHjMDHqmGMjBqy7OhsgmAXP6pXv5xFjVhV/qU41DZBACz3xpRE3bKNwOjphyHyCYA9ve9lnZ9oQwsi0UAUP5pUQaWwyIAKP+0KAPLUX0AUP71gzKwDNUHAOVfPygDy1B9AFD+9YMysAxVBwDlX78oA4ev6gCg/OtX1HZbyi3Pai8Dqw0Ayr9hiBq9Ln3Ls6GoNgAo/4YharutXASurCwnhZrLwGoDgPJvGCK32xqvUQY+VZUBQPk3LFHbbam2PKu5DKwyACj/hiVfPJdXV6lrH8rAUdnnH/StugDIae28z/tQHQW9E7Cz+21SqLUMrC4A3l5f/O4HPg5R1H208vyDGsvA6jYFXRtP0vl5/FFP+UO3sqxpoaOp7m9PTqYhS/a9vdeSY97zKU//+fFtqklVAZBfOvlqbZIUfni9Jz3xN9JfX/5NUprmiz+HQNfyt/MXX64khagQ60tVtwCqxzX5238yGadabKy/SgpR99HKMjBqyrEvVQXA2ZnmeKevry/+mg6QUD1Oy6Luo1VlYNSUY1+qCYD8H6N69l/L0v+G8hu0hjIwasqxD9UEwLHovL+lpedpNHqZaqP6Bo18qab0w1D7UEUA5MEfVZOdj4+qkeobNIuasCv9MNQ+VBEAikdAN/o87jua6huUMnA4qggAVfk3GY97Pe47mvLJBmXgMBQfAJR/3VlefkEZ2FItZWDxAaAs/yaiHWn7pNpvjzJwGIoOAGX5V9PbX/Oo9tvLKAP7V3QAKMu/nd062/8m5eEblIH9KzoAVOVf/jDVXP41jYW3OpSB/So2ALTln+Zd+aGQ7rcXVAbmSU3KwIcVGwCq8q+2wZ+2VPvtRZWB+f+NMvBhRQaAsvyrbfCnLeWAUNR2W6rgLrkMLDIAlOVf7c/+76Ms0qLKQOV7DaWWgUUGgKr8q3Xwpy3lgFBUGbi1rTlApNQysLgAUJZ/tQ7+tKUcEDoNuo/mzcD5igsAVfmX1Tz405aqSLu4uAgrA1XvNZRYBhYVAMryL39onJ7930f5BCQq3FXvNUQdhhqpqABQHvY5Hvs9+ruLskiL2tI9//tVP0NpZ1KUFQDHDP70QTkgFHUfrfoZog5DjVJMAMxmM1n55zL405ZyQCjqPlr1M0QehhqhmACYCss/l8GfttQDQqWXgQcFnSZczMEgqmf/+YOS73vxqVzAXgUc8HmX59fla74N65ryZyjl/ZHqjgYD0F6Vx4MDaIcAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACMEQCAMQIAMEYAAMYIAMAYAQAYIwAAYwQAYIwAAIwRAIAxAgAwRgAAxggAwBgBABgjAABjBABgjAAAjBEAgDECADBGAADGCADAGAEAGCMAAGMEAGCMAACM/Q7TPhiyParLKgAAAABJRU5ErkJggg==",alt:"Anthropic"}):n.includes("Palantir")?(0,Le.jsx)("img",{src:Je,alt:"Palantir"}):n.includes("Microsoft")?(0,Le.jsxs)("svg",{viewBox:"0 0 24 24",xmlns:"http://www.w3.org/2000/svg","aria-label":"Microsoft",children:[(0,Le.jsx)("rect",{x:"1",y:"1",width:"10",height:"10",fill:"#F25022"}),(0,Le.jsx)("rect",{x:"13",y:"1",width:"10",height:"10",fill:"#7FBA00"}),(0,Le.jsx)("rect",{x:"1",y:"13",width:"10",height:"10",fill:"#00A4EF"}),(0,Le.jsx)("rect",{x:"13",y:"13",width:"10",height:"10",fill:"#FFB900"})]}):n.includes("Tokyo")?(0,Le.jsx)("img",{src:et,alt:"The University of Tokyo"}):n.includes("Daimler")?(0,Le.jsx)("img",{src:tt,alt:"Daimler"}):null)}),(0,Le.jsxs)(lt,{children:[(0,Le.jsx)(ut,{children:e.company}),(0,Le.jsxs)(ct,{children:[(0,Le.jsx)("span",{children:e.duration}),jt(e.duration)&&(0,Le.jsx)(dt,{children:jt(e.duration)})]})]})]}),(0,Le.jsx)(ft,{children:e.roles.map((e,t)=>(0,Le.jsxs)("div",{children:[(0,Le.jsxs)(pt,{children:[(0,Le.jsx)(ht,{children:e.title}),(0,Le.jsx)(mt,{children:e.duration})]}),e.description&&(0,Le.jsx)(gt,{children:(0,Le.jsx)(Tt,{text:e.description})}),e.workItems&&e.workItems.length>0&&(0,Le.jsxs)(yt,{children:[(0,Le.jsxs)(vt,{children:[(0,Le.jsx)(bt,{children:"Selected Public References"}),(0,Le.jsx)(xt,{children:"A small subset of publicly available work \u2022 Most projects remain confidential"})]}),e.workItems.map((e,t)=>(0,Le.jsxs)(wt,{children:[(0,Le.jsx)(kt,{src:e.image,alt:e.title}),(0,Le.jsxs)(St,{children:[(0,Le.jsxs)(At,{children:[(0,Le.jsx)(Ct,{children:e.title}),e.link&&(0,Le.jsx)(Et,{href:e.link,target:"_blank",rel:"noopener noreferrer",title:"Open article",children:(0,Le.jsx)("svg",{viewBox:"0 0 24 24",fill:"currentColor",children:(0,Le.jsx)("path",{d:"M19 19H5V5h7V3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2v-7h-2v7zM14 3v2h3.59l-9.83 9.83 1.41 1.41L19 6.41V10h2V3h-7z"})})})]}),(0,Le.jsx)(Pt,{children:(0,Le.jsx)(Tt,{text:e.description})})]})]},t))]})]},t))})]},t);var n})})]})},zt=n.p+"static/media/connect.c022f2e74241c864e1df.png",Rt=n.p+"static/media/puzzle.c46f23a732fe9f5b32fd.png",It=n.p+"static/media/bicg.d4894c6cfeda70764a30.png",Mt=()=>{let e=0,t=0;for(;0===e;)e=Math.random();for(;0===t;)t=Math.random();return Math.sqrt(-2*Math.log(e))*Math.cos(2*Math.PI*t)},Dt=e=>{const t=e.map((e,t)=>({v:e,i:t}));t.sort((e,t)=>e.v-t.v);const n=new Array(e.length);return t.forEach((e,t)=>{n[e.i]=t}),n},Ot=De.div`
  margin-top: 1.25rem;
  font-family: -apple-system, BlinkMacSystemFont, "SF Pro Display", "SF Pro Text", "Helvetica Neue", "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  color: #1d1d1f;
`,Lt=Me`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`,Ft=De.button`
  display: flex;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
  padding: 1rem 1.25rem;
  background: linear-gradient(120deg, #FAF6EA 0%, #F1E4D2 35%, #E8D4B3 65%, #FAF6EA 100%);
  background-size: 200% 200%;
  animation: ${Lt} 14s ease-in-out infinite;
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 14px;
  cursor: pointer;
  text-align: left;
  font-family: inherit;
  transition: transform 220ms cubic-bezier(0.32, 0.72, 0, 1), box-shadow 220ms cubic-bezier(0.32, 0.72, 0, 1), border-color 220ms;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.03);

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 8px 20px rgba(0, 0, 0, 0.06), 0 2px 4px rgba(0, 0, 0, 0.04);
    border-color: rgba(0, 0, 0, 0.1);
  }

  &:active {
    transform: translateY(0);
  }
`,Bt=De.div`
  flex-shrink: 0;
  width: 84px;
  height: 36px;
  position: relative;
`,Ut=De.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  flex: 1;
  min-width: 0;
`,$t=De.span`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #8a6f44;
`,Ht=De.span`
  font-size: 0.9375rem;
  font-weight: 600;
  color: #1d1d1f;
  letter-spacing: -0.005em;
`,Vt=De.span`
  font-size: 0.8125rem;
  color: #6e6e73;
  line-height: 1.35;
`,Wt=De.span`
  flex-shrink: 0;
  font-size: 1.25rem;
  color: #1d1d1f;
  font-weight: 400;
  transition: transform 200ms cubic-bezier(0.32, 0.72, 0, 1);

  ${Ft}:hover & {
    transform: translateX(3px);
  }
`,Qt=De.div`
  overflow: hidden;
  transition: max-height 700ms cubic-bezier(0.32, 0.72, 0, 1), opacity 500ms ease, margin-top 700ms cubic-bezier(0.32, 0.72, 0, 1);
  max-height: ${e=>e.expanded?"5000px":"0px"};
  opacity: ${e=>e.expanded?1:0};
  margin-top: ${e=>e.expanded?"1rem":"0"};
`,Kt=De.div`
  background: linear-gradient(180deg, #FAFAF7 0%, #F2EEDF 100%);
  padding: 2.5rem 1.75rem;
  border-radius: 20px;
  border: 1px solid rgba(0, 0, 0, 0.05);

  @media (max-width: 768px) {
    padding: 1.75rem 1rem;
    border-radius: 16px;
  }
`,Gt=De.div`
  font-size: 0.75rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #86868b;
  margin-bottom: 0.875rem;
`,Yt=De.h3`
  font-size: clamp(1.75rem, 3vw, 2.625rem);
  font-weight: 700;
  letter-spacing: -0.022em;
  line-height: 1.05;
  margin: 0 0 0.875rem 0;

  span {
    display: block;
    color: #86868b;
  }
`,qt=De.p`
  font-size: clamp(0.9375rem, 1.25vw, 1.0625rem);
  line-height: 1.5;
  color: #424245;
  max-width: 56ch;
  margin: 0 0 2rem 0;
  font-weight: 400;

  em {
    font-style: normal;
    color: #1d1d1f;
    font-weight: 500;
  }
`,Xt=De.div`
  background: #ffffff;
  border-radius: 20px;
  padding: 1.75rem;
  box-shadow:
    0 1px 2px rgba(0, 0, 0, 0.04),
    0 10px 28px rgba(0, 0, 0, 0.05);
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 1.25rem;
  }
`,Zt=De.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`,Jt=De.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
  letter-spacing: -0.005em;
`,en=De.div`
  font-size: 0.8125rem;
  font-weight: 500;
  color: ${e=>e.active?"#1d1d1f":"#86868b"};
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  font-variant-numeric: tabular-nums;

  &::before {
    content: '';
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: ${e=>e.active?"#34c759":"#d2d2d7"};
    transition: background 300ms ease;
  }
`,tn=De.div`
  display: flex;
  gap: 0.875rem;
  font-size: 0.75rem;
  color: #6e6e73;
  margin-top: 0.5rem;
  flex-wrap: wrap;
`,nn=De.span`
  display: inline-flex;
  align-items: center;
  gap: 0.375rem;

  &::before {
    content: '';
    width: 9px;
    height: 9px;
    border-radius: 50%;
    background: ${e=>e.color};
  }
`,rn=De.svg`
  width: 100%;
  height: auto;
  display: block;
`,an=De.div`
  position: absolute;
  top: 1rem;
  right: 1rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #6e6e73;
  background: rgba(255, 255, 255, 0.92);
  backdrop-filter: blur(8px);
  padding: 0.375rem 0.75rem;
  border-radius: 999px;
  border: 1px solid rgba(0, 0, 0, 0.06);
  pointer-events: none;
  transition: opacity 400ms ease;
  opacity: ${e=>e.show?1:0};
`,on=De.div`
  display: flex;
  gap: 0.625rem;
  margin-top: 1.5rem;
  flex-wrap: wrap;
  align-items: center;
`,ln=De.button`
  font-family: inherit;
  font-size: 0.875rem;
  font-weight: 500;
  padding: 0.625rem 1.25rem;
  background: #1d1d1f;
  color: #ffffff;
  border: none;
  border-radius: 999px;
  cursor: pointer;
  transition: all 200ms cubic-bezier(0.32, 0.72, 0, 1);
  letter-spacing: -0.005em;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.18);
  }
  &:active {
    transform: translateY(0);
  }
  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
    transform: none;
    box-shadow: none;
  }
`,sn=De(ln)`
  background: #ffffff;
  color: #1d1d1f;
  border: 1px solid rgba(0, 0, 0, 0.14);
  &:hover {
    background: #f5f5f7;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.06);
  }
`,un=De.div`
  margin-left: auto;
  display: flex;
  gap: 1.25rem;
  font-size: 0.8125rem;
  color: #6e6e73;
  font-variant-numeric: tabular-nums;

  strong {
    color: #1d1d1f;
    font-weight: 600;
    margin-left: 0.4rem;
  }
`,cn=De.div`
  margin-top: 2rem;
  padding: 1.5rem 1.75rem;
  background: rgba(255, 255, 255, 0.55);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-left: 3px solid rgba(29, 29, 31, 0.4);
  border-radius: 14px;
`,dn=De.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  color: #86868b;
  margin-bottom: 0.5rem;
`,fn=De.p`
  font-size: 0.875rem;
  line-height: 1.6;
  color: #1d1d1f;
  margin: 0 0 1.25rem 0;
  max-width: 64ch;

  em {
    font-style: italic;
    color: #424245;
  }

  strong {
    font-weight: 600;
    color: #1d1d1f;
  }
`,pn=De.button`
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  padding: 0.5rem 0.95rem;
  background: rgba(29, 29, 31, 0.04);
  color: #1d1d1f;
  border: 1px solid rgba(0, 0, 0, 0.08);
  border-radius: 999px;
  cursor: pointer;
  letter-spacing: -0.005em;
  transition: all 200ms cubic-bezier(0.32, 0.72, 0, 1);
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;

  &:hover {
    background: rgba(29, 29, 31, 0.08);
    border-color: rgba(0, 0, 0, 0.14);
  }

  &::after {
    content: '→';
    transition: transform 200ms cubic-bezier(0.32, 0.72, 0, 1);
    transform: ${e=>e.open?"rotate(-90deg)":"rotate(0)"};
  }
`,hn=De.div`
  overflow: hidden;
  max-height: ${e=>e.open?"1400px":"0"};
  opacity: ${e=>e.open?1:0};
  margin-top: ${e=>e.open?"1.5rem":"0"};
  transition:
    max-height 700ms cubic-bezier(0.32, 0.72, 0, 1),
    opacity 500ms ease,
    margin-top 700ms cubic-bezier(0.32, 0.72, 0, 1);
`,mn=De.div`
  background: #ffffff;
  border-radius: 18px;
  padding: 1.5rem 1.5rem 1.25rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 8px 22px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 1.25rem 1rem 1rem;
    border-radius: 14px;
  }
`,gn=De.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  flex-wrap: wrap;
  gap: 0.75rem;
  margin-bottom: 1.25rem;
`,yn=De.h4`
  font-size: 1rem;
  font-weight: 600;
  color: #1d1d1f;
  margin: 0;
  letter-spacing: -0.005em;
`,vn=De.div`
  display: flex;
  gap: 0.875rem;
  font-size: 0.6875rem;
  color: #6e6e73;
  flex-wrap: wrap;
`,bn=De.span`
  display: inline-flex;
  align-items: center;
  gap: 0.35rem;

  &::before {
    content: '';
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: ${e=>e.color};
  }
`,xn=De.div`
  display: grid;
  grid-template-columns: minmax(0, 1fr) 280px;
  gap: 1.25rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`,wn=De.svg`
  width: 100%;
  height: auto;
  display: block;
  background: linear-gradient(180deg, #fdfcf8 0%, #f7f3ea 100%);
  border-radius: 12px;
  border: 1px solid rgba(0, 0, 0, 0.04);
  padding: 0.5rem;
`,kn=Me`
  0% { opacity: 0; }
  100% { opacity: 1; }
`,Sn=Me`
  0% { opacity: 0; }
  100% { opacity: 0.5; }
`,An=De.g`
  cursor: pointer;
`,Cn=De.g`
  opacity: 0;
  animation: ${kn} 480ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
  animation-delay: ${e=>e.delay}ms;

  circle.dot {
    transition: r 220ms cubic-bezier(0.32, 0.72, 0, 1),
                stroke-width 220ms ease;
  }

  ${An}:hover & circle.dot {
    r: ${e=>e.baseRadius+3};
  }
`,En=De.path`
  fill: none;
  stroke-linecap: round;
  opacity: 0;
  animation: ${Sn} 600ms cubic-bezier(0.32, 0.72, 0, 1) forwards;
  animation-delay: ${e=>e.delay}ms;
`,Pn=De.text`
  font-family: inherit;
  font-size: 9.5px;
  font-weight: 500;
  fill: #1d1d1f;
  text-anchor: middle;
  pointer-events: none;
  user-select: none;
`,_n=De.text`
  font-family: inherit;
  font-size: 8.5px;
  fill: #86868b;
  text-anchor: middle;
  pointer-events: none;
  user-select: none;
`,jn=De.div`
  background: rgba(255, 255, 255, 0.6);
  border: 1px solid rgba(0, 0, 0, 0.06);
  border-radius: 12px;
  padding: 1.125rem 1.125rem 1.25rem;
  font-size: 0.8125rem;
  line-height: 1.5;
  align-self: start;
  transition: border-color 200ms ease;

  @media (max-width: 900px) {
    margin-top: 0.5rem;
  }
`,Tn=De.div`
  font-size: 0.6875rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: ${e=>e.color||"#86868b"};
  margin-bottom: 0.4rem;
`,Nn=De.div`
  font-size: 0.875rem;
  font-weight: 600;
  color: #1d1d1f;
  letter-spacing: -0.005em;
  line-height: 1.35;
  margin-bottom: 0.4rem;
`,zn=De.div`
  font-size: 0.75rem;
  color: #6e6e73;
  margin-bottom: 0.65rem;
`,Rn=De.div`
  font-size: 0.78125rem;
  font-style: italic;
  color: #424245;
  margin-bottom: 0.75rem;
  padding-left: 0.5rem;
  border-left: 2px solid rgba(0, 0, 0, 0.08);
`,In=De.a`
  font-size: 0.78125rem;
  font-weight: 500;
  color: #1d1d1f;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
  gap: 0.25rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.15);
  padding-bottom: 1px;
  transition: border-color 180ms ease;

  &:hover {
    border-color: rgba(0, 0, 0, 0.45);
    color: #1d1d1f;
  }
`,Mn=De.span`
  display: inline-block;
  font-size: 0.6875rem;
  font-weight: 500;
  color: #86868b;
  background: rgba(0, 0, 0, 0.04);
  padding: 0.15rem 0.5rem;
  border-radius: 999px;
  margin-left: 0.4rem;
  vertical-align: middle;
`,Dn={root:"#9e9e9e",hardware:"#CC785C",theory:"#5BA4E2",algorithmic:"#B07ED4",adjacent:"#6BA4B8"},On={root:"NeurIPS 2020",hardware:"Hardware \xb7 Kuroda Lab",theory:"Theory",algorithmic:"Algorithmic",adjacent:"Adjacent substrates"},Ln=[{id:"root",branch:"root",x:380,y:60,year:2020,venue:"NeurIPS 2020",title:"Train-by-Reconnect: Decoupling Locations of Weights from their Values",authors:"Yushi Qiu \xb7 Reiji Suda",url:"https://arxiv.org/abs/2003.02570",keyResult:"Identified that information learned by SGD lives predominantly in weight ordering, not values (SoWP). Proposed the two-dimensions hypothesis and LaPerm - the first algorithm to train DNNs by permuting initial values without altering them.",label:"Qiu & Suda",sub:"2020"},{id:"hsu_22a",parent:"root",branch:"hardware",x:110,y:180,year:2022,venue:"IEEE OJ-CAS",title:"A 0.61-\xb5J/Frame Pipelined Wired-logic DNN Processor in 16-nm FPGA Using Convolutional Non-Linear Neural Network",authors:"Hsu, Kosuge, Hamada, Kuroda",url:"https://ieeexplore.ieee.org/document/9657198",keyResult:">100\xd7 energy efficiency vs SOTA BNN accelerator on CIFAR-10.",label:"Hsu",sub:"2022 \xb7 OJ-CAS"},{id:"hsu_22b",parent:"hsu_22a",branch:"hardware",x:110,y:240,year:2022,venue:"IEEE Hot Chips",title:"A 13.7-\xb5J/Prediction 88% Accuracy CIFAR-10 Single-Chip Wired-logic Processor in 16-nm FPGA",authors:"Hsu, Kosuge, Hamada, Kuroda",url:"https://hc34.hotchips.org/",keyResult:"88% CIFAR-10 single-chip at 13.7 \xb5J/prediction.",label:"Hsu",sub:"2022 \xb7 Hot Chips"},{id:"li_23",parent:"hsu_22b",branch:"hardware",x:110,y:300,year:2023,venue:"IEEE ISCAS",title:"A 0.13-mJ/Prediction CIFAR-100 Raster-Scan-Based Wired-Logic Processor Using Non-Linear Neural Network",authors:"Li, Hsu, Sumikawa, Hamada, Kosuge, Kuroda",url:"https://ieeexplore.ieee.org/document/10181427",keyResult:"238\xd7 energy efficiency vs SOTA FPGA; 7\xd7 vs SOTA ASIC at 68.6% CIFAR-100.",label:"Li",sub:"2023 \xb7 ISCAS",highlight:!0},{id:"li_24",parent:"li_23",branch:"hardware",x:110,y:360,year:2024,venue:"IEICE Trans. Electronics",title:"A 0.13-mJ/Prediction CIFAR-100 Fully Synthesizable Raster-Scan-Based Wired-Logic Processor in 16-nm FPGA",authors:"Li, Zhan, Sumikawa, Hamada, Kosuge, Kuroda",url:"https://www.jstage.jst.go.jp/article/transele/E107.C/6/E107.C_2023LHP0001/_article",keyResult:"Journal version with full synthesis flow and HLS methodology.",label:"Li",sub:"2024 \xb7 IEICE"},{id:"pan_25a",parent:"li_24",branch:"hardware",x:110,y:420,year:2025,venue:"ASP-DAC",title:"A Coarse- and Fine-Grained LUT Segmentation Method Enabling Single FPGA Implementation of Wired-Logic DNN Processor",authors:"Pan, Li, Hamada, Kosuge",url:"https://dl.acm.org/doi/10.1145/3658617.3698484",keyResult:"LUT segmentation enabling larger models in single-chip wired-logic.",label:"Pan",sub:"2025 \xb7 ASP-DAC"},{id:"pan_25b",parent:"pan_25a",branch:"hardware",x:110,y:480,year:2025,venue:"IEICE Trans. Electronics",title:"Analysis and Design of Coarse and Fine Segmented LUT Implementation for FPGA-Based Resource-Efficient Wired-Logic DNN Processors",authors:"Pan, Li, Hamada, Kosuge",url:"https://www.jstage.jst.go.jp/article/transele/E108.C/6/E108.C_2024LHP0002/_article",keyResult:"Extended analysis of LUT segmentation for resource efficiency.",label:"Pan",sub:"2025 \xb7 IEICE"},{id:"pan_25c",parent:"pan_25b",branch:"hardware",x:110,y:540,year:2025,venue:"Conference, May 2025",title:"A 83.7% Resource Reduced FPGA-based Wired-Logic DNN Processor by Using Mixed-Precision Module Embedding Into Non-Linear Function LUT",authors:"Pan, Hamada, Kosuge",url:"https://www.researchgate.net/scientific-contributions/Atsutake-Kosuge-2026827263",keyResult:"83.7% resource reduction via mixed-precision LUT embedding.",label:"Pan",sub:"2025"},{id:"zhu_25",parent:"root",branch:"theory",x:300,y:180,year:2025,venue:"Neural Networks (Elsevier)",title:"Neural Networks Trained by Weight Permutation are Universal Approximators",authors:"Zhu, Liu, Chu, et al.",url:"https://arxiv.org/abs/2407.01033",keyResult:"First UAP proof for permutation-trained ReLU networks; explicitly motivated by Train-by-Reconnect needing theoretical grounding for hardware adoption.",label:"Zhu",sub:"2025 \xb7 UAP"},{id:"padst_25",parent:"root",branch:"algorithmic",x:490,y:180,year:2025,venue:"arXiv",title:"Efficient Dynamic Structured Sparse Training with Learned Shuffles (PA-DST)",authors:"Anonymous (under review)",url:"https://arxiv.org/abs/2510.14812",keyResult:"Matches unstructured baselines at 90\u201395% sparsity on ViT-B/16 (ImageNet) and GPT-2 (WikiText-103); 1.21\xd7 train, 2.9\xd7 inference speedup.",label:"PA-DST",sub:"2025",relationship:"conceptual descendant"},{id:"feldmann_21",parent:"root",branch:"adjacent",x:660,y:180,year:2021,venue:"Nature",title:"Parallel convolutional processing using an integrated photonic tensor core",authors:"Feldmann, Youngblood, Karpov, et al.",url:"https://www.nature.com/articles/s41586-020-03070-1",keyResult:"Tera-MAC/s photonic tensor core with phase-change memory. Grouped by Zhu et al. 2025 with Train-by-Reconnect under the same write-vs-route hardware economics.",label:"Feldmann",sub:"2021 \xb7 Nature",relationship:"adjacent \xb7 not direct citation"}],Fn=t=>{let{visible:n}=t;const[r,a]=(0,e.useState)("root"),i=(0,e.useMemo)(()=>Object.fromEntries(Ln.map(e=>[e.id,e])),[]),o=(0,e.useMemo)(()=>Ln.filter(e=>e.parent).map(e=>({from:i[e.parent],to:e})),[i]),l=i[r]||i.root,s=(e,t)=>{const n=t.x-e.x,r=t.y-e.y,a=e.y+.55*r,i=t.y-.55*r;return Math.abs(n)<.5?`M ${e.x} ${e.y} L ${t.x} ${t.y}`:`M ${e.x} ${e.y} C ${e.x} ${a}, ${t.x} ${i}, ${t.x} ${t.y}`};return(0,Le.jsxs)(mn,{children:[(0,Le.jsxs)(gn,{children:[(0,Le.jsx)(yn,{children:"Downstream lineage"}),(0,Le.jsx)(vn,{children:Object.entries(On).map(e=>{let[t,n]=e;return(0,Le.jsx)(bn,{color:Dn[t],children:n},t)})})]}),(0,Le.jsxs)(xn,{children:[(0,Le.jsxs)(wn,{viewBox:"0 0 760 600",preserveAspectRatio:"xMidYMid meet",children:[o.map((e,t)=>{var n;const a=null===(n=e.to.relationship)||void 0===n?void 0:n.includes("adjacent");return(0,Le.jsx)(En,{d:s(e.from,e.to),stroke:Dn[e.to.branch],strokeWidth:r===e.to.id||r===e.from.id?2.5:1.5,strokeDasharray:a?"4 4":"0",style:{opacity:r===e.to.id||r===e.from.id?.85:.45,transition:"stroke-width 220ms ease, opacity 220ms ease"},delay:200+60*t},`e-${e.to.id}`)}),Ln.map((e,t)=>{const n=r===e.id;return(0,Le.jsx)(An,{transform:`translate(${e.x} ${e.y})`,onClick:()=>a(e.id),children:(0,Le.jsxs)(Cn,{delay:70*t,baseRadius:9,children:[n&&(0,Le.jsx)("circle",{r:14,fill:"none",stroke:Dn[e.branch],strokeWidth:"1.5",opacity:"0.4"}),(0,Le.jsx)("circle",{className:"dot",r:9,fill:Dn[e.branch],stroke:n?"#ffffff":"rgba(255,255,255,0.5)",strokeWidth:n?2:1.25}),(0,Le.jsx)(Pn,{y:23,children:e.label}),(0,Le.jsx)(_n,{y:35,children:e.sub})]})},e.id)})]}),(0,Le.jsxs)(jn,{children:[(0,Le.jsxs)(Tn,{color:Dn[l.branch],children:[l.year," \xb7 ",l.venue,l.relationship&&(0,Le.jsx)(Mn,{children:l.relationship})]}),(0,Le.jsx)(Nn,{children:l.title}),(0,Le.jsx)(zn,{children:l.authors}),l.keyResult&&(0,Le.jsx)(Rn,{children:l.keyResult}),l.url&&(0,Le.jsx)(In,{href:l.url,target:"_blank",rel:"noopener noreferrer",children:"Open paper \u2192"})]})]})]})},Bn=De.div`
  margin-top: 1.75rem;
  font-size: 0.8125rem;
  line-height: 1.55;
  color: #86868b;

  a {
    color: #1d1d1f;
    text-decoration: underline;
    text-decoration-color: rgba(0, 0, 0, 0.2);
    text-underline-offset: 2px;
    &:hover {
      text-decoration-color: rgba(0, 0, 0, 0.6);
    }
  }
`,Un=De.div`
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
`,$n=De.button`
  font-family: inherit;
  font-size: 0.8125rem;
  font-weight: 500;
  color: #6e6e73;
  background: transparent;
  border: none;
  padding: 0.5rem 1rem;
  cursor: pointer;
  letter-spacing: -0.005em;
  transition: color 200ms ease;

  &:hover {
    color: #1d1d1f;
  }
`,Hn=["#5BA4E2","#E5765B","#6BA4B8","#B07ED4"],Vn=["Layer 12","Layer 27","Layer 41","Layer 53"],Wn=De.circle`
  transition:
    cx 900ms cubic-bezier(0.32, 0.72, 0, 1),
    cy 900ms cubic-bezier(0.32, 0.72, 0, 1);
  transition-delay: ${e=>e.delay}ms;
`,Qn=()=>Array.from({length:4},()=>Array.from({length:56},()=>Mt())),Kn=t=>{let{visible:n}=t;const[r,a]=(0,e.useState)(!1),[i,o]=(0,e.useState)(0),[l,s]=(0,e.useState)(!1),u=(0,e.useMemo)(Qn,[i]),c=(0,e.useMemo)(()=>u.map(Dt),[u]);(0,e.useEffect)(()=>{if(!n||l)return;const e=setTimeout(()=>a(!0),900),t=setTimeout(()=>a(!1),3600),r=setTimeout(()=>s(!0),3800);return()=>{clearTimeout(e),clearTimeout(t),clearTimeout(r)}},[n,l]);const d=e=>28+(3.2-e)/6.4*264;return(0,Le.jsxs)(Xt,{children:[(0,Le.jsxs)(Zt,{children:[(0,Le.jsx)(Jt,{children:"\u2460 Four weight vectors"}),(0,Le.jsx)(en,{active:r,children:r?"Sorted within each vector":"Original order"})]}),(0,Le.jsxs)("div",{style:{position:"relative"},children:[(0,Le.jsxs)(rn,{viewBox:"0 0 880 320",preserveAspectRatio:"xMidYMid meet",children:[(0,Le.jsx)("line",{x1:40,y1:d(0),x2:840,y2:d(0),stroke:"rgba(0,0,0,0.06)",strokeWidth:"1"}),u.map((e,t)=>e.map((e,n)=>{const a=r?c[t][n]:n;return(0,Le.jsx)(Wn,{cx:(i=a,40+i/55*800),cy:d(e),r:"2.75",fill:Hn[t],opacity:"0.72",delay:90*t},`${t}-${n}`);var i}))]}),(0,Le.jsx)(an,{show:r,children:"All four collapse onto one curve"})]}),(0,Le.jsx)(tn,{children:Vn.map((e,t)=>(0,Le.jsx)(nn,{color:Hn[t],children:e},t))}),(0,Le.jsxs)(on,{children:[(0,Le.jsx)(ln,{onClick:()=>a(e=>!e),children:r?"Restore original order":"Sort within each vector"}),(0,Le.jsx)(sn,{onClick:()=>{a(!1),o(e=>e+1)},children:"Draw new sample"})]})]})},Gn=40,Yn=[1,1,1,1,1],qn=[1.6,-1.6,1.6,-1.6,1.6],Xn=62,Zn=238,Jn=e=>42+e/4*236,er=Xn+176/3,tr=Xn+352/3,nr=e=>e.map(e=>{const t=Jn(e.row),n=Jn(e.col);return{c1y:t+(n-t)/3,v1:0,c2y:t+2*(n-t)/3,v2:0}}),rr=e=>{const t=e.replace("#","");return{r:parseInt(t.slice(0,2),16),g:parseInt(t.slice(2,4),16),b:parseInt(t.slice(4,6),16)}},ar=(e,t,n)=>{const r=rr(e),a=rr(t);return`rgb(${Math.round(r.r+(a.r-r.r)*n)}, ${Math.round(r.g+(a.g-r.g)*n)}, ${Math.round(r.b+(a.b-r.b)*n)})`},ir=e=>{const t=Math.max(-2,Math.min(2,e))/2;return t<0?ar("#EEE5D2","#3A85C7",-t):ar("#EEE5D2","#CC785C",t)},or=e=>Math.abs(e)>1?"#ffffff":"#1d1d1f",lr=()=>Array.from({length:25},()=>1.2*Mt()),sr=()=>Array.from({length:25},(e,t)=>({row:Math.floor(t/5),col:t%5})),ur=(e,t)=>{const n=new Array(5).fill(0);return e.forEach((e,r)=>{n[e.col]+=Yn[e.row]*t[r]}),n},cr=(e,t)=>ur(e,t).reduce((e,t,n)=>e+(t-qn[n])**2,0),dr=e=>48+45*e,fr=e=>50+45*e,pr=De.div`
  display: grid;
  grid-template-columns: minmax(0, auto) minmax(0, 1fr);
  gap: 1rem;
  align-items: start;

  @media (max-width: 720px) {
    grid-template-columns: 1fr;
  }
`,hr=De.div`
  font-size: 0.6875rem;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #86868b;
  text-align: center;
  margin-top: 0.25rem;
  font-weight: 500;
`,mr=De.div`
  position: relative;
  width: 100%;
  height: 3px;
  background: rgba(0, 0, 0, 0.06);
  border-radius: 2px;
  margin-bottom: 0.75rem;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    height: 100%;
    width: ${e=>100*(1-e.lossNorm)}%;
    background: #34c759;
    opacity: 0.9;
    border-radius: 2px;
    transition: width 540ms cubic-bezier(0.32, 0.72, 0, 1);
  }
`,gr=t=>{let{visible:n}=t;const[r,a]=(0,e.useState)(0),[i,o]=(0,e.useState)(!1),[l,s]=(0,e.useState)(!1),u=(0,e.useMemo)(lr,[r]),[c,d]=(0,e.useState)(sr),f=(0,e.useRef)(sr().map(e=>({row:e.row,col:e.col}))),p=(0,e.useRef)(sr().map(()=>({row:0,col:0}))),h=(0,e.useRef)(nr(sr())),m=(0,e.useRef)(c),g=(0,e.useRef)(null),y=(0,e.useRef)(0),v=(0,e.useRef)([]),[,b]=(0,e.useReducer)(e=>e+1,0);(0,e.useEffect)(()=>{m.current=c,(()=>{if(null!=g.current)return;y.current=performance.now();const e=t=>{const n=Math.min(.032,(t-y.current)/1e3);y.current=t;const r=m.current,a=f.current,i=p.current,o=h.current;let l=!1;for(let e=0;e<a.length;e++){for(const o of["row","col"]){const t=a[e][o],s=r[e][o],u=i[e][o],c=u+(-90*(t-s)-14*u)*n,d=t+c*n;i[e][o]=c,a[e][o]=d,(Math.abs(d-s)>.0015||Math.abs(c)>.0015)&&(l=!0)}const t=Jn(a[e].row),s=Jn(a[e].col),u=t+(s-t)/3,c=t+2*(s-t)/3,d=o[e],f=-70*(d.c1y-u)-7*d.v1;d.v1+=f*n,d.c1y+=d.v1*n;const p=-70*(d.c2y-c)-7*d.v2;d.v2+=p*n,d.c2y+=d.v2*n,(Math.abs(d.c1y-u)>.05||Math.abs(d.v1)>.05||Math.abs(d.c2y-c)>.05||Math.abs(d.v2)>.05)&&(l=!0)}if(b(),l)g.current=requestAnimationFrame(e);else{for(let e=0;e<a.length;e++){a[e].row=r[e].row,a[e].col=r[e].col,i[e].row=0,i[e].col=0;const t=Jn(r[e].row),n=Jn(r[e].col);o[e].c1y=t+(n-t)/3,o[e].c2y=t+2*(n-t)/3,o[e].v1=0,o[e].v2=0}g.current=null,b()}};g.current=requestAnimationFrame(e)})()},[c]);const x=()=>{v.current.forEach(clearTimeout),v.current=[]},w=e=>{x(),null!=g.current&&(cancelAnimationFrame(g.current),g.current=null),f.current=e.map(e=>({row:e.row,col:e.col})),p.current=e.map(()=>({row:0,col:0})),h.current=nr(e),m.current=e,d(e),b()};(0,e.useEffect)(()=>{w(sr()),o(!1),s(!1)},[r]),(0,e.useEffect)(()=>()=>{v.current.forEach(clearTimeout),null!=g.current&&cancelAnimationFrame(g.current)},[]);const k=cr(c,u),S=ur(c,u),A=Math.min(1,k/14),C=k<.6,E=()=>{if(i)return;x();let e=c.map(e=>({...e})),t=cr(e,u);const n=[];for(let r=0;r<3e4&&n.length<9;r++){const r=Math.floor(25*Math.random()),a=Math.floor(25*Math.random());if(r===a)continue;const i=e.map(e=>({...e})),o=i[r];i[r]=i[a],i[a]=o;const l=cr(i,u);if(l<t-1e-9&&(e=i,t=l,n.push({w1:r,w2:a}),t<.05))break}0!==n.length&&(o(!0),n.forEach((e,t)=>{const r=setTimeout(()=>{d(t=>{const n=t.map(e=>({...e})),r=n[e.w1];return n[e.w1]=n[e.w2],n[e.w2]=r,n}),t===n.length-1&&v.current.push(setTimeout(()=>o(!1),700))},240*(t+1));v.current.push(r)}))};(0,e.useEffect)(()=>{if(!n||l)return;const e=setTimeout(()=>{E(),s(!0)},1400);return()=>clearTimeout(e)},[n,l]);const P=f.current,_=p.current;return(0,Le.jsxs)(Xt,{children:[(0,Le.jsxs)(Zt,{children:[(0,Le.jsx)(Jt,{children:"\u2461 Reconnection alone trains the network"}),(0,Le.jsx)(en,{active:C,children:i?"Reconnecting\u2026":C?"Trained - output matches target":"Untrained - output \u2260 target"})]}),(0,Le.jsx)(mr,{lossNorm:A}),(0,Le.jsxs)(pr,{children:[(0,Le.jsxs)("div",{children:[(0,Le.jsxs)(rn,{viewBox:"0 0 278 318",preserveAspectRatio:"xMidYMid meet",children:[Array.from({length:5},(e,t)=>(0,Le.jsxs)("text",{x:34,y:fr(t)+20+3,fontSize:"9",fill:"#86868b",textAnchor:"end",fontFamily:"inherit",children:["x",t]},`rl-${t}`)),(0,Le.jsx)("text",{x:158,y:20,fontSize:"9",fill:"#86868b",textAnchor:"middle",fontFamily:"inherit",children:"target output"}),qn.map((e,t)=>(0,Le.jsx)("circle",{cx:dr(t)+20,cy:35,r:"6",fill:"none",stroke:ir(e),strokeWidth:"1.75",strokeDasharray:"3 3",opacity:"0.75"},`tg-${t}`)),Array.from({length:25},(e,t)=>{const n=Math.floor(t/5),r=t%5;return(0,Le.jsx)("rect",{x:dr(r),y:fr(n),width:Gn,height:Gn,rx:"7",fill:"rgba(0,0,0,0.025)"},`bg-${t}`)}),u.map((e,t)=>{const n=P[t],r=dr(n.col)+20,a=fr(n.row)+20,i=Math.hypot(_[t].row,_[t].col),o=1+Math.min(.13,.05*i);return(0,Le.jsxs)("g",{transform:`translate(${r} ${a}) scale(${o})`,children:[(0,Le.jsx)("rect",{x:-20,y:-20,width:Gn,height:Gn,rx:"7",fill:ir(e),stroke:"rgba(0,0,0,0.08)",strokeWidth:"1"}),(0,Le.jsx)("text",{x:"0",y:"4",fontSize:"10.5",fill:or(e),textAnchor:"middle",fontFamily:"inherit",style:{pointerEvents:"none",userSelect:"none"},children:e.toFixed(1)})]},t)}),(0,Le.jsx)("text",{x:158,y:286,fontSize:"9",fill:"#86868b",textAnchor:"middle",fontFamily:"inherit",children:"column sum"}),S.map((e,t)=>(0,Le.jsx)("circle",{cx:dr(t)+20,cy:300,r:"8",fill:ir(e),stroke:"rgba(0,0,0,0.12)",strokeWidth:"1"},`os-${t}`))]}),(0,Le.jsx)(hr,{children:"weight matrix"})]}),(0,Le.jsxs)("div",{children:[(0,Le.jsxs)(rn,{viewBox:"0 0 300 318",preserveAspectRatio:"xMidYMid meet",children:[(0,Le.jsx)("text",{x:Xn,y:24,fontSize:"9",fill:"#86868b",textAnchor:"middle",fontFamily:"inherit",children:"inputs"}),(0,Le.jsx)("text",{x:Zn,y:24,fontSize:"9",fill:"#86868b",textAnchor:"middle",fontFamily:"inherit",children:"outputs \xb7 target"}),u.map((e,t)=>{const n=P[t],r=h.current[t],a=Jn(n.row),i=Jn(n.col),o=Math.min(3.5,1.4*Math.abs(e)+.5);return(0,Le.jsx)("path",{d:`M 62 ${a} C ${er} ${r.c1y} ${tr} ${r.c2y} 238 ${i}`,fill:"none",stroke:ir(e),strokeWidth:o,strokeLinecap:"round",opacity:"0.72"},t)}),Array.from({length:5},(e,t)=>(0,Le.jsx)("circle",{cx:Xn,cy:Jn(t),r:12,fill:"#2a2a2c"},`in-${t}`)),S.map((e,t)=>(0,Le.jsxs)("g",{children:[(0,Le.jsx)("circle",{cx:Zn,cy:Jn(t),r:16,fill:"none",stroke:ir(qn[t]),strokeWidth:"1.5",strokeDasharray:"3 3",opacity:"0.55"}),(0,Le.jsx)("circle",{cx:Zn,cy:Jn(t),r:12,fill:ir(e),stroke:"rgba(0,0,0,0.14)",strokeWidth:"1"})]},`on-${t}`))]}),(0,Le.jsx)(hr,{children:"network connections"})]})]}),(0,Le.jsxs)(tn,{style:{marginTop:"0.75rem"},children:[(0,Le.jsx)(nn,{color:"#3A85C7",children:"negative weight"}),(0,Le.jsx)(nn,{color:"#CC785C",children:"positive weight"}),(0,Le.jsx)("span",{style:{color:"#86868b"},children:"same values, reconnected - a cell glides to a new slot; its cable end slides to the new neuron"})]}),(0,Le.jsxs)(on,{children:[(0,Le.jsx)(ln,{onClick:E,disabled:i,children:i?"Reconnecting\u2026":"Reconnect to train"}),(0,Le.jsx)(sn,{onClick:()=>{i||(x(),d(e=>{const t=e.map(e=>({...e}));for(let n=t.length-1;n>0;n--){const e=Math.floor(Math.random()*(n+1));[t[n],t[e]]=[t[e],t[n]]}return t}))},disabled:i,children:"Random shuffle"}),(0,Le.jsx)(sn,{onClick:()=>w(sr()),disabled:i,children:"Reset"}),(0,Le.jsx)(sn,{onClick:()=>a(e=>e+1),disabled:i,children:"New init"}),(0,Le.jsx)(un,{children:(0,Le.jsxs)("span",{children:["Loss",(0,Le.jsx)("strong",{children:k.toFixed(2)})]})})]})]})},yr=e=>{let{phase:t}=e;const n=[.6,-.4,.2,-.7,.5],r=[...n].sort((e,t)=>e-t);return(0,Le.jsx)("svg",{viewBox:"0 0 84 36",width:"84",height:"36",children:n.map((e,n)=>{const a=8+17*n,i=18-12*(e+(r[n]-e)*t);return(0,Le.jsx)("circle",{cx:a,cy:i,r:"3",fill:Hn[n%Hn.length],opacity:"0.85"},n)})})},vr=()=>{const[t,n]=(0,e.useState)(!1),[r,a]=(0,e.useState)(!1),[i,o]=(0,e.useState)(!1),l=(()=>{const[t,n]=(0,e.useState)(0);return(0,e.useEffect)(()=>{let e;const t=performance.now(),r=a=>{const i=(a-t)/1e3%4,o=i<2?i/2:(4-i)/2,l=.5-.5*Math.cos(Math.PI*o);n(l),e=requestAnimationFrame(r)};return e=requestAnimationFrame(r),()=>cancelAnimationFrame(e)},[]),t})(),s=(0,e.useRef)(null),u=()=>{n(!1),setTimeout(()=>a(!1),800)};return(0,Le.jsxs)(Ot,{children:[(0,Le.jsxs)(Ft,{onClick:t?u:()=>{a(!0),requestAnimationFrame(()=>n(!0))},"aria-expanded":t,children:[(0,Le.jsx)(Bt,{children:(0,Le.jsx)(yr,{phase:l})}),(0,Le.jsxs)(Ut,{children:[(0,Le.jsx)($t,{children:"Interactive \xb7 NeurIPS 2020"}),(0,Le.jsx)(Ht,{children:"Train by Reconnect - see the idea in motion"}),(0,Le.jsx)(Vt,{children:"Two short demos - the observation, and how reconnection alone trains a network."})]}),(0,Le.jsx)(Wt,{children:t?"\u2191":"\u2192"})]}),(0,Le.jsx)(Qt,{expanded:t,ref:s,children:r&&(0,Le.jsxs)(Kt,{children:[(0,Le.jsx)(Gt,{children:"\u2460 The discovery"}),(0,Le.jsxs)(Yt,{children:["Same values.",(0,Le.jsx)("span",{children:"Different positions."})]}),(0,Le.jsxs)(qt,{children:["The information learned by SGD appears to be encoded primarily in the ",(0,Le.jsx)("em",{children:"ordering"})," ","of weights rather than their ",(0,Le.jsx)("em",{children:"values"}),". Sort within each vector and the four distributions collapse onto a single curve."]}),(0,Le.jsx)(Kn,{visible:t}),(0,Le.jsx)(Gt,{style:{marginTop:"2.25rem"},children:"\u2461 The consequence"}),(0,Le.jsxs)(Yt,{children:["Reconnect alone.",(0,Le.jsx)("span",{children:"The network trains."})]}),(0,Le.jsxs)(qt,{children:["If the information lives in the order, a different ",(0,Le.jsx)("em",{children:"assignment"})," of the same initial values to a network's connections should already be enough to train. Below is a 5\xd75 weight matrix - each cell is one connection. Reconnection moves a cell to a new position. No value is ever changed; the trained matrix is, visibly, a",(0,Le.jsx)("em",{children:" permutation of the random init"}),"."]}),(0,Le.jsx)(gr,{visible:t}),(0,Le.jsxs)(cn,{children:[(0,Le.jsx)(dn,{children:"Where it led"}),(0,Le.jsxs)(fn,{children:["This conceptual decoupling - separating ",(0,Le.jsx)("em",{children:"what"})," a weight is from ",(0,Le.jsx)("em",{children:"where"})," ","it sits - contributed to a research direction in fixed-weight physical AI substrates. Downstream work in that direction has demonstrated up to ",(0,Le.jsx)("strong",{children:"238\xd7 energy efficiency gains"})," over conventional FPGA-based inference at matched accuracy."]}),(0,Le.jsx)(pn,{open:i,onClick:()=>o(e=>!e),children:i?"Hide downstream lineage":"View downstream lineage"}),(0,Le.jsx)(hn,{open:i,children:i&&(0,Le.jsx)(Fn,{visible:i})})]}),(0,Le.jsxs)(Bn,{children:["From"," ",(0,Le.jsx)("a",{href:"https://papers.nips.cc/paper/2020/hash/f0682320ccbbb1f1fb1e795de5e5639a-Abstract.html",target:"_blank",rel:"noopener noreferrer",children:"Train-by-Reconnect: Decoupling Locations of Weights from their Values"})," ","(NeurIPS 2020). Plots in \u2460 use independent draws from a standard normal as a stand-in for trained-network weight vectors; the paper shows real layers (ResNet, VGG, MobileNet, NASNet) exhibit the same collapse when sorted. The 5\xd75 network in \u2461 uses a fixed input pattern; ",(0,Le.jsx)("em",{children:"Reconnect to train"})," runs a short random-swap search over edge assignments - no weight value ever changes."]}),(0,Le.jsx)(Un,{children:(0,Le.jsx)($n,{onClick:u,children:"Collapse \u2191"})})]})})]})},br=De.section`
  min-height: 100vh;
  padding: 2rem 2rem 4rem 2rem;
  background:rgb(255, 255, 255);
`,xr=De.h2`
  font-size: 2.0rem;
  font-weight: 200;
  text-align: center;
  margin-bottom: 3rem;
  color: #000000;
  letter-spacing: -0.01em;
  position: relative;
`,wr=De.div`
  max-width: 900px;
  margin: 0 auto;
  display: grid;
  gap: 1rem;
`,kr=De.div`
  display: flex;
  flex-direction: column;
  padding: 0.75rem 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
  
  @media (max-width: 768px) {
    padding: 0.6rem 0;
  }
`,Sr=De.div`
  display: flex;
  flex-direction: column;
`,Ar=De.h3`
  font-size: 1.2rem;
  font-weight: 500;
  color: #000000;
  margin-bottom: 0.15rem;
  letter-spacing: -0.01em;
`,Cr=De.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 0.6rem;
`,Er=De.h4`
  font-size: 0.9rem;
  font-weight: 300;
  color: #2196F3; /* Summer blue accent */
  margin-bottom: 0.1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,Pr=De.div`
  font-size: 0.85rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-weight: 300;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
`,_r=De.p`
  font-size: 0.85rem;
  line-height: 1.5;
  color: #666666;
  margin: 0.4rem 0 0.6rem 0;
  max-width: 600px;
`,jr=De.div`
  margin-top: 0.5rem;
  padding-left: 0.8rem;
  border-left: 2px solid #e0e0e0;
`,Tr=De.h5`
  font-size: 0.8rem;
  font-weight: 500;
  color: #2196F3;
  margin-bottom: 0.5rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
`,Nr=De.div`
  display: flex;
  gap: 0.6rem;
  margin-bottom: 0.5rem;
  align-items: flex-start;
  
  @media (max-width: 768px) {
    flex-direction: column;
    gap: 0.4rem;
  }
`,zr=De.img`
  max-width: 120px;
  max-height: 80px;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 3px;
  flex-shrink: 0;
`,Rr=De.div`
  flex: 1;
`,Ir=De.h6`
  font-size: 0.9rem;
  font-weight: 400;
  color: #000000;
  margin-bottom: 0.25rem;
  line-height: 1.4;
`,Mr=De.span`
  display: inline-block;
  font-size: 0.65rem;
  font-weight: 600;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  color: #5D2A82;
  background: rgba(93, 42, 130, 0.08);
  border: 1px solid rgba(93, 42, 130, 0.18);
  padding: 0.12rem 0.5rem;
  border-radius: 999px;
  margin-bottom: 0.35rem;
  margin-right: 0.4rem;
  vertical-align: middle;
`,Dr=De.p`
  font-size: 0.8rem;
  color: #666666;
  margin-bottom: 0.5rem;
  font-style: italic;
  line-height: 1.3;
`,Or=De.a`
  color: #4CAF50;
  text-decoration: none;
  font-weight: 400;
  
  &:hover {
    text-decoration: underline;
  }
`,Lr=e=>{let{text:t,className:n}=e;const r=(e=>{if(!e)return null;const t=/\[([^\]]+)\]\(([^)]+)\)/g,n=[];let r,a=0;for(;null!==(r=t.exec(e));)r.index>a&&n.push(e.slice(a,r.index)),n.push({type:"link",text:r[1],url:r[2]}),a=r.index+r[0].length;return a<e.length&&n.push(e.slice(a)),n.length>0?n:[e]})(t);return(0,Le.jsx)("span",{className:n,children:r.map((e,t)=>"string"===typeof e?e:"link"===e.type?(0,Le.jsx)(Or,{href:e.url,target:"_blank",rel:"noopener noreferrer",children:e.text},t):null)})},Fr=De.a`
  font-size: 0.8rem;
  color: #4CAF50;
  text-decoration: none;
  font-weight: 300;
  
  &:hover {
    text-decoration: underline;
  }
`,Br=()=>{const t=[{degree:"PhD (drop out)",school:"The University of Tokyo",duration:"2020 - 2021",description:"Conducting research in deep learning after completing a mathematics-focused bachelor's degree. My work explored DNN's training dynamics, especially around how weight structures, rather than their numerical values, drives learning in neural networks. I left the program in 2021 to pursue real-world impact in industry, carrying forward the same curiosity and rigor into real-world systems",schoolInitial:"UTokyo",publications:[{title:"Train-by-Reconnect: Decoupling Locations of Weights from their Values",description:"In Proceedings of NeurIPS 2020",link:"https://papers.nips.cc/paper/2020/hash/f0682320ccbbb1f1fb1e795de5e5639a-Abstract.html",image:zt,demo:"train-by-reconnect",venue:"NeurIPS 2020"}]},{degree:"Master of Science",school:"The University of Tokyo",duration:"2018 - 2020",description:"",schoolInitial:"UTokyo",publications:[{title:"Permute to Train: A New Dimension to Training Deep Neural Networks",description:"Preprint available @ [Arxiv](https://arxiv.org/abs/2003.02570v4)",image:Rt,link:"https://github.com/ihsuy/SGPerm"},{title:"Online Autotuning of Parameters of GA-BiCG",description:"Oral Presentation at [ATAT in HPSC](https://sites.google.com/site/atathpsc/previous-conf/2018?authuser=0) (2018)",image:It}]},{degree:"Bachelor of Science",school:"University of Illinois Urbana-Champaign",duration:"2012 - 2017",description:"",schoolInitial:"UIUC"}];return(0,Le.jsxs)(br,{children:[(0,Le.jsx)(xr,{children:"Academic Background & Publications"}),(0,Le.jsx)(wr,{children:t.map((t,n)=>(0,Le.jsx)(kr,{children:(0,Le.jsxs)(Sr,{children:[(0,Le.jsx)(Ar,{children:t.degree}),(0,Le.jsxs)(Cr,{children:[(0,Le.jsx)(Er,{children:t.school}),(0,Le.jsx)(Pr,{children:(0,Le.jsx)("span",{children:t.duration})})]}),t.description&&(0,Le.jsx)(_r,{children:t.description}),t.publications&&t.publications.length>0&&(0,Le.jsxs)(jr,{children:[(0,Le.jsx)(Tr,{children:"Publications"}),t.publications.map((t,n)=>(0,Le.jsxs)(e.Fragment,{children:[(0,Le.jsxs)(Nr,{children:[(0,Le.jsx)(zr,{src:t.image,alt:t.title}),(0,Le.jsxs)(Rr,{children:[t.venue&&(0,Le.jsx)(Mr,{children:t.venue}),(0,Le.jsx)(Ir,{children:t.title}),t.description&&(0,Le.jsx)(Dr,{children:(0,Le.jsx)(Lr,{text:t.description})}),t.link&&(0,Le.jsx)(Fr,{href:t.link,target:"_blank",rel:"noopener noreferrer",children:"View Paper \u2192"})]})]}),"train-by-reconnect"===t.demo&&(0,Le.jsx)(vr,{})]},n))]})]})},n))})]})},Ur=De.div`
  width: 100%;
  min-height: 100vh;
  scroll-behavior: smooth;
`,$r=()=>(0,Le.jsxs)(Ur,{children:[(0,Le.jsx)(Ze,{}),(0,Le.jsx)(Nt,{}),(0,Le.jsx)(Br,{})]}),Hr=(function(t){for(var n=arguments.length,r=new Array(n>1?n-1:0),a=1;a<n;a++)r[a-1]=arguments[a];var i=ve.apply(void 0,[t].concat(r)),o="sc-global-"+Se(JSON.stringify(i)),l=new Ie(i,o);function s(t){var n=oe(),r=le(),a=(0,e.useContext)(je),i=(0,e.useRef)(n.allocateGSInstance(o)).current;return n.server&&u(i,t,n,a,r),(0,e.useLayoutEffect)(function(){if(!n.server)return u(i,t,n,a,r),function(){return l.removeStyles(i,n)}},[i,t,n,a,r]),null}function u(e,t,n,r,a){if(l.isStatic)l.renderStyles(e,A,n,a);else{var i=p({},t,{theme:be(t,r,s.defaultProps)});l.renderStyles(e,i,n,a)}}return e.memo(s)})`
  @import url('https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap');
  
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    background: #ffffff;
    color: #2c3e50;
    line-height: 1.6;
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  .App {
    width: 100%;
    min-height: 100vh;
  }

  a {
    color: #667eea;
    text-decoration: none;
    transition: all 0.3s ease;
  }

  a:hover {
    color: #764ba2;
    text-decoration: none;
  }

  span.copyright {
    color: #6c757d;
    font-weight: 400;
    font-size: 0.9rem;
  }

  div.margin {
    background: #f8f9fa;
    text-align: center;
    padding: 1rem;
    border-top: 1px solid #e9ecef;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: 'Inter', 'Segoe UI', 'Roboto', sans-serif;
    font-weight: 600;
    line-height: 1.2;
    margin: 0;
  }

  p {
    margin: 0;
  }

  /* Smooth scrolling for webkit browsers */
  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  ::-webkit-scrollbar-thumb {
    background: #c1c1c1;
    border-radius: 4px;
  }

  ::-webkit-scrollbar-thumb:hover {
    background: #a8a8a8;
  }
  
`,Vr={colors:{primary:"#667eea",secondary:"#764ba2",background:"#ffffff",text:"#2c3e50",lightGray:"#f8f9fa",darkGray:"#6c757d"},fonts:{primary:"'Inter', 'Segoe UI', 'Roboto', sans-serif",heading:"'Inter', 'Segoe UI', 'Roboto', sans-serif"},breakpoints:{mobile:"768px",tablet:"1024px",desktop:"1200px"}};const Wr=function(){return(0,Le.jsx)(Te,{theme:Vr,children:(0,Le.jsxs)(Le.Fragment,{children:[(0,Le.jsx)(Hr,{}),(0,Le.jsx)("div",{className:"App",children:(0,Le.jsx)($r,{})}),(0,Le.jsx)("div",{className:"pos-f-t p-2 margin",children:(0,Le.jsx)("span",{className:"copyright",children:"\xa9\ufe0f Yushi Chonan. All rights reserved."})})]})})},Qr=e=>{e&&e instanceof Function&&console.log("Performance monitoring disabled")},Kr=document.getElementById("root");(0,t.H)(Kr).render((0,Le.jsx)(e.StrictMode,{children:(0,Le.jsx)(Wr,{})})),Qr()})()})();
//# sourceMappingURL=main.73ff736a.js.map