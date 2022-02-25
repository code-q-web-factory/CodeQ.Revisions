/*! For license information please see Plugin.js.LICENSE.txt */
!function(e){var t={};function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={i:r,l:!1,exports:{}};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.l=!0,n.exports}__webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.d=function(e,t,r){__webpack_require__.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},__webpack_require__.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},__webpack_require__.t=function(e,t){if(1&t&&(e=__webpack_require__(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(__webpack_require__.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)__webpack_require__.d(r,n,function(t){return e[t]}.bind(null,n));return r},__webpack_require__.n=function(e){var t=e&&e.__esModule?function getDefault(){return e.default}:function getModuleExports(){return e};return __webpack_require__.d(t,"a",t),t},__webpack_require__.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},__webpack_require__.p="",__webpack_require__(__webpack_require__.s=11)}([function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().React},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2);t.default=function readFromConsumerApi(e){return function(){for(var t,r=[],o=0;o<arguments.length;o++)r[o]=arguments[o];if(window["@Neos:HostPluginAPI"]&&window["@Neos:HostPluginAPI"]["@"+e])return(t=window["@Neos:HostPluginAPI"])["@"+e].apply(t,n.__spread(r));throw new Error("You are trying to read from a consumer api that hasn't been initialized yet!")}}},function(e,t,r){"use strict";r.r(t),r.d(t,"__extends",(function(){return __extends})),r.d(t,"__assign",(function(){return __assign})),r.d(t,"__rest",(function(){return __rest})),r.d(t,"__decorate",(function(){return __decorate})),r.d(t,"__param",(function(){return __param})),r.d(t,"__metadata",(function(){return __metadata})),r.d(t,"__awaiter",(function(){return __awaiter})),r.d(t,"__generator",(function(){return __generator})),r.d(t,"__createBinding",(function(){return __createBinding})),r.d(t,"__exportStar",(function(){return __exportStar})),r.d(t,"__values",(function(){return __values})),r.d(t,"__read",(function(){return __read})),r.d(t,"__spread",(function(){return __spread})),r.d(t,"__spreadArrays",(function(){return __spreadArrays})),r.d(t,"__await",(function(){return __await})),r.d(t,"__asyncGenerator",(function(){return __asyncGenerator})),r.d(t,"__asyncDelegator",(function(){return __asyncDelegator})),r.d(t,"__asyncValues",(function(){return __asyncValues})),r.d(t,"__makeTemplateObject",(function(){return __makeTemplateObject})),r.d(t,"__importStar",(function(){return __importStar})),r.d(t,"__importDefault",(function(){return __importDefault})),r.d(t,"__classPrivateFieldGet",(function(){return __classPrivateFieldGet})),r.d(t,"__classPrivateFieldSet",(function(){return __classPrivateFieldSet}));var extendStatics=function(e,t){return(extendStatics=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var r in t)t.hasOwnProperty(r)&&(e[r]=t[r])})(e,t)};function __extends(e,t){function __(){this.constructor=e}extendStatics(e,t),e.prototype=null===t?Object.create(t):(__.prototype=t.prototype,new __)}var __assign=function(){return(__assign=Object.assign||function __assign(e){for(var t,r=1,n=arguments.length;r<n;r++)for(var o in t=arguments[r])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e}).apply(this,arguments)};function __rest(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(n=Object.getOwnPropertySymbols(e);o<n.length;o++)t.indexOf(n[o])<0&&Object.prototype.propertyIsEnumerable.call(e,n[o])&&(r[n[o]]=e[n[o]])}return r}function __decorate(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i}function __param(e,t){return function(r,n){t(r,n,e)}}function __metadata(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)}function __awaiter(e,t,r,n){return new(r||(r=Promise))((function(o,a){function fulfilled(e){try{step(n.next(e))}catch(e){a(e)}}function rejected(e){try{step(n.throw(e))}catch(e){a(e)}}function step(e){e.done?o(e.value):function adopt(e){return e instanceof r?e:new r((function(t){t(e)}))}(e.value).then(fulfilled,rejected)}step((n=n.apply(e,t||[])).next())}))}function __generator(e,t){var r,n,o,a,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:verb(0),throw:verb(1),return:verb(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function verb(a){return function(u){return function step(a){if(r)throw new TypeError("Generator is already executing.");for(;i;)try{if(r=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return i.label++,{value:a[1],done:!1};case 5:i.label++,n=a[1],a=[0];continue;case 7:a=i.ops.pop(),i.trys.pop();continue;default:if(!(o=i.trys,(o=o.length>0&&o[o.length-1])||6!==a[0]&&2!==a[0])){i=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){i.label=a[1];break}if(6===a[0]&&i.label<o[1]){i.label=o[1],o=a;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(a);break}o[2]&&i.ops.pop(),i.trys.pop();continue}a=t.call(e,i)}catch(e){a=[6,e],n=0}finally{r=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,u])}}}function __createBinding(e,t,r,n){void 0===n&&(n=r),e[n]=t[r]}function __exportStar(e,t){for(var r in e)"default"===r||t.hasOwnProperty(r)||(t[r]=e[r])}function __values(e){var t="function"==typeof Symbol&&Symbol.iterator,r=t&&e[t],n=0;if(r)return r.call(e);if(e&&"number"==typeof e.length)return{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function __read(e,t){var r="function"==typeof Symbol&&e[Symbol.iterator];if(!r)return e;var n,o,a=r.call(e),i=[];try{for(;(void 0===t||t-- >0)&&!(n=a.next()).done;)i.push(n.value)}catch(e){o={error:e}}finally{try{n&&!n.done&&(r=a.return)&&r.call(a)}finally{if(o)throw o.error}}return i}function __spread(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(__read(arguments[t]));return e}function __spreadArrays(){for(var e=0,t=0,r=arguments.length;t<r;t++)e+=arguments[t].length;var n=Array(e),o=0;for(t=0;t<r;t++)for(var a=arguments[t],i=0,u=a.length;i<u;i++,o++)n[o]=a[i];return n}function __await(e){return this instanceof __await?(this.v=e,this):new __await(e)}function __asyncGenerator(e,t,r){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var n,o=r.apply(e,t||[]),a=[];return n={},verb("next"),verb("throw"),verb("return"),n[Symbol.asyncIterator]=function(){return this},n;function verb(e){o[e]&&(n[e]=function(t){return new Promise((function(r,n){a.push([e,t,r,n])>1||resume(e,t)}))})}function resume(e,t){try{!function step(e){e.value instanceof __await?Promise.resolve(e.value.v).then(fulfill,reject):settle(a[0][2],e)}(o[e](t))}catch(e){settle(a[0][3],e)}}function fulfill(e){resume("next",e)}function reject(e){resume("throw",e)}function settle(e,t){e(t),a.shift(),a.length&&resume(a[0][0],a[0][1])}}function __asyncDelegator(e){var t,r;return t={},verb("next"),verb("throw",(function(e){throw e})),verb("return"),t[Symbol.iterator]=function(){return this},t;function verb(n,o){t[n]=e[n]?function(t){return(r=!r)?{value:__await(e[n](t)),done:"return"===n}:o?o(t):t}:o}}function __asyncValues(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,r=e[Symbol.asyncIterator];return r?r.call(e):(e=__values(e),t={},verb("next"),verb("throw"),verb("return"),t[Symbol.asyncIterator]=function(){return this},t);function verb(r){t[r]=e[r]&&function(t){return new Promise((function(n,o){(function settle(e,t,r,n){Promise.resolve(n).then((function(t){e({value:t,done:r})}),t)})(n,o,(t=e[r](t)).done,t.value)}))}}}function __makeTemplateObject(e,t){return Object.defineProperty?Object.defineProperty(e,"raw",{value:t}):e.raw=t,e}function __importStar(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t}function __importDefault(e){return e&&e.__esModule?e:{default:e}}function __classPrivateFieldGet(e,t){if(!t.has(e))throw new TypeError("attempted to get private field on non-instance");return t.get(e)}function __classPrivateFieldSet(e,t,r){if(!t.has(e))throw new TypeError("attempted to set private field on non-instance");return t.set(e,r),r}},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().PropTypes},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("NeosProjectPackages")().ReactUiComponents},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("NeosProjectPackages")().NeosUiReduxStore},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().reactRedux},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("vendor")().plow},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=n.__importDefault(r(17)),a=n.__importDefault(r(18)),i=function(e){function SynchronousRegistry(t){var r=e.call(this,t)||this;return r._registry=[],r}return n.__extends(SynchronousRegistry,e),SynchronousRegistry.prototype.set=function(e,t,r){if(void 0===r&&(r=0),"string"!=typeof e)throw new Error("Key must be a string");if("string"!=typeof r&&"number"!=typeof r)throw new Error("Position must be a string or a number");var n={key:e,value:t};r&&(n.position=r);var o=this._registry.findIndex((function(t){return t.key===e}));return-1===o?this._registry.push(n):this._registry[o]=n,t},SynchronousRegistry.prototype.get=function(e){if("string"!=typeof e)return console.error("Key must be a string"),null;var t=this._registry.find((function(t){return t.key===e}));return t?t.value:null},SynchronousRegistry.prototype._getChildrenWrapped=function(e){var t=this._registry.filter((function(t){return 0===t.key.indexOf(e+"/")}));return a.default(t)},SynchronousRegistry.prototype.getChildrenAsObject=function(e){var t={};return this._getChildrenWrapped(e).forEach((function(e){t[e.key]=e.value})),t},SynchronousRegistry.prototype.getChildren=function(e){return this._getChildrenWrapped(e).map((function(e){return e.value}))},SynchronousRegistry.prototype.has=function(e){return"string"!=typeof e?(console.error("Key must be a string"),!1):Boolean(this._registry.find((function(t){return t.key===e})))},SynchronousRegistry.prototype._getAllWrapped=function(){return a.default(this._registry)},SynchronousRegistry.prototype.getAllAsObject=function(){var e={};return this._getAllWrapped().forEach((function(t){e[t.key]=t.value})),e},SynchronousRegistry.prototype.getAllAsList=function(){return this._getAllWrapped().map((function(e){return Object.assign({id:e.key},e.value)}))},SynchronousRegistry}(o.default);t.default=i},function(e,t,r){"use strict";var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));e.exports=(0,n.default)("NeosProjectPackages")().NeosUiDecorators},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fetchWithErrorHandling=void 0;var n=function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(r(1));t.default=(0,n.default)("NeosProjectPackages")().NeosUiBackendConnectorDefault;var o=(0,n.default)("NeosProjectPackages")().NeosUiBackendConnector.fetchWithErrorHandling;t.fetchWithErrorHandling=o},function(e,t,r){"use strict";r(12)},function(e,t,r){"use strict";var n=_interopRequireDefault(r(13)),o=_interopRequireDefault(r(20));function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}(0,n.default)("CodeQ:Revisions",{},(function(e){e.get("inspector").get("views").set("CodeQ.Revisions/Inspector/Views/RevisionsView",{component:o.default})}))},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=n.__importDefault(r(14));t.createConsumerApi=o.default;var a=n.__importDefault(r(1));t.readFromConsumerApi=a.default;var i=r(16);t.SynchronousRegistry=i.SynchronousRegistry,t.SynchronousMetaRegistry=i.SynchronousMetaRegistry,t.default=a.default("manifest")},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2).__importDefault(r(15)),o=function createReadOnlyValue(e){return{value:e,writable:!1,enumerable:!1,configurable:!0}};t.default=function createConsumerApi(e,t){var r={};Object.keys(t).forEach((function(e){Object.defineProperty(r,e,o(t[e]))})),Object.defineProperty(r,"@manifest",o(n.default(e))),Object.defineProperty(window,"@Neos:HostPluginAPI",o(r))}},function(e,t,r){"use strict";t.__esModule=!0,t.default=function(e){return function(t,r,n){var o;e.push(((o={})[t]={options:r,bootstrap:n},o))}}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=n.__importDefault(r(8));t.SynchronousRegistry=o.default;var a=n.__importDefault(r(19));t.SynchronousMetaRegistry=a.default},function(e,t,r){"use strict";t.__esModule=!0;var n=function n(e){this.SERIAL_VERSION_UID="d8a5aa78-978e-11e6-ae22-56b6b6499611",this.description=e};t.default=n},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2);t.default=function positionalArraySorter(e,t,r){var o,a,i,u,l,s,c,f,d,_,p,y,v,h;void 0===t&&(t="position"),void 0===r&&(r="key");var m="string"==typeof t?function(e){return e[t]}:t,b={},g={},w={},R={},O={},x={};e.forEach((function(e,t){var n=e[r]?e[r]:String(t);b[n]=t;var o=m(e),a=String(o||t),i=!1;if(a.startsWith("start")){var u=(l=a.match(/start\s+(\d+)/))&&l[1]?Number(l[1]):0;w[u]||(w[u]=[]),w[u].push(n)}else if(a.startsWith("end")){var l;u=(l=a.match(/end\s+(\d+)/))&&l[1]?Number(l[1]):0;R[u]||(R[u]=[]),R[u].push(n)}else if(a.startsWith("before")){if(c=a.match(/before\s+(\S+)(\s+(\d+))?/)){var s=c[1];u=c[3]?Number(c[3]):0;O[s]||(O[s]={}),O[s][u]||(O[s][u]=[]),O[s][u].push(n)}else i=!0}else if(a.startsWith("after")){var c;if(c=a.match(/after\s+(\S+)(\s+(\d+))?/)){s=c[1],u=c[3]?Number(c[3]):0;x[s]||(x[s]={}),x[s][u]||(x[s][u]=[]),x[s][u].push(n)}else i=!0}else i=!0;if(i){var f=parseFloat(a);!isNaN(f)&&isFinite(f)||(f=t),g[f]||(g[f]=[]),g[f].push(n)}}));var S=[],E=[],j=[],P=[],k=function sortedWeights(e,t){var r=Object.keys(e).map((function(e){return Number(e)})).sort((function(e,t){return e-t}));return t?r:r.reverse()},D=function addToResults(e,t){e.forEach((function(e){var r,o,a,i;if(!(P.indexOf(e)>=0)){if(P.push(e),O[e]){var u=k(O[e],!0);try{for(var l=n.__values(u),s=l.next();!s.done;s=l.next()){var c=s.value;addToResults(O[e][c],t)}}catch(e){r={error:e}}finally{try{s&&!s.done&&(o=l.return)&&o.call(l)}finally{if(r)throw r.error}}}if(t.push(e),x[e]){var f=k(x[e],!1);try{for(var d=n.__values(f),_=d.next();!_.done;_=d.next()){c=_.value;addToResults(x[e][c],t)}}catch(e){a={error:e}}finally{try{_&&!_.done&&(i=d.return)&&i.call(d)}finally{if(a)throw a.error}}}}}))};try{for(var M=n.__values(k(w,!1)),C=M.next();!C.done;C=M.next()){var q=C.value;D(w[q],S)}}catch(e){o={error:e}}finally{try{C&&!C.done&&(a=M.return)&&a.call(M)}finally{if(o)throw o.error}}try{for(var N=n.__values(k(g,!0)),A=N.next();!A.done;A=N.next()){q=A.value;D(g[q],E)}}catch(e){i={error:e}}finally{try{A&&!A.done&&(u=N.return)&&u.call(N)}finally{if(i)throw i.error}}try{for(var I=n.__values(k(R,!0)),T=I.next();!T.done;T=I.next()){q=T.value;D(R[q],j)}}catch(e){l={error:e}}finally{try{T&&!T.done&&(s=I.return)&&s.call(I)}finally{if(l)throw l.error}}try{for(var F=n.__values(Object.keys(O)),B=F.next();!B.done;B=F.next()){var W=B.value;if(!(P.indexOf(W)>=0))try{for(var $=(d=void 0,n.__values(k(O[W],!1))),U=$.next();!U.done;U=$.next()){q=U.value;D(O[W][q],S)}}catch(e){d={error:e}}finally{try{U&&!U.done&&(_=$.return)&&_.call($)}finally{if(d)throw d.error}}}}catch(e){c={error:e}}finally{try{B&&!B.done&&(f=F.return)&&f.call(F)}finally{if(c)throw c.error}}try{for(var V=n.__values(Object.keys(x)),G=V.next();!G.done;G=V.next()){W=G.value;if(!(P.indexOf(W)>=0))try{for(var H=(v=void 0,n.__values(k(x[W],!1))),L=H.next();!L.done;L=H.next()){q=L.value;D(x[W][q],E)}}catch(e){v={error:e}}finally{try{L&&!L.done&&(h=H.return)&&h.call(H)}finally{if(v)throw v.error}}}}catch(e){p={error:e}}finally{try{G&&!G.done&&(y=V.return)&&y.call(V)}finally{if(p)throw p.error}}return n.__spread(S,E,j).map((function(e){return b[e]})).map((function(t){return e[t]}))}},function(e,t,r){"use strict";t.__esModule=!0;var n=r(2),o=function(e){function SynchronousMetaRegistry(){return null!==e&&e.apply(this,arguments)||this}return n.__extends(SynchronousMetaRegistry,e),SynchronousMetaRegistry.prototype.set=function(t,r){if("d8a5aa78-978e-11e6-ae22-56b6b6499611"!==r.SERIAL_VERSION_UID)throw new Error("You can only add registries to a meta registry");return e.prototype.set.call(this,t,r)},SynchronousMetaRegistry}(n.__importDefault(r(8)).default);t.default=o},function(e,t,r){"use strict";r.r(t);var n=r(0),o=r.n(n),a=r(3),i=r.n(a),u=r(6),l=r(7),s=r(5),c=r(9),f=r(4),d=r(10);function fetchFromBackend(e){let t=`/neos/codeq/revisions/${e.action}?`;return e.params.node&&(t+="&node="+encodeURIComponent(e.params.node.contextPath)),e.params.revision&&(t+="&revision="+encodeURIComponent(e.params.revision.identifier)),e.params.label&&(t+="&label="+encodeURIComponent(e.params.label)),d.fetchWithErrorHandling.withCsrfToken(r=>({url:t,method:"get"===e.action?"GET":"POST",credentials:"include",headers:{"X-Flow-Csrftoken":r,"Content-Type":"application/json"}})).then(e=>{if(e){if(404===e.status)throw new Error(e.message);return e.json()}})}function formatRevisionDate(e){return new Date(e.creationDateTime).toLocaleString(void 0,{year:"2-digit",month:"2-digit",day:"2-digit",hour:"2-digit",minute:"2-digit"})}var _=o.a.memo(({documentNode:e,addFlashMessage:t,reloadDocument:r,i18nRegistry:a})=>{const[i,u]=Object(n.useState)([]),[l,s]=Object(n.useState)(""),[c,d]=Object(n.useState)(null),[_,p]=Object(n.useState)(""),y=Object(n.useCallback)((e,t="",r=[],n="CodeQ.Revisions",o="Main")=>a.translate(e,t,r,n,o),[]),v=Object(n.useCallback)(()=>{fetchFromBackend({action:"get",params:{node:e}}).then(({revisions:e})=>u(e)).catch(e=>{s(y("error.failedFetchingExpressions")),console.error(e.message)})},[e]),h=Object(n.useCallback)(n=>{confirm(`Do you want to apply revision ${formatRevisionDate(n)} by ${n.creator}?`)&&fetchFromBackend({action:"apply",params:{node:e,revision:n}}).then(()=>{t(y("success.revisionApplied"),`Revision "${n.label||formatRevisionDate(n)}" by ${n.creator} applied.`,"success"),r(),s("")}).catch(e=>{s(y("error.failedApplyingRevision")),console.error(e.message)})},[]),m=Object(n.useCallback)(()=>{fetchFromBackend({action:"setlabel",params:{revision:c,label:_}}).then(()=>{t(y("success.revisionUpdated"),`Revision ${c.label||formatRevisionDate(c)} by ${c.creator} updated.`,"success"),v()}).catch(e=>{s(y("error.failedUpdatingRevision")),console.error(e.message)})},[c,_]);return Object(n.useEffect)(v,[e]),o.a.createElement("div",null,l&&o.a.createElement("div",{style:{color:"red",margin:"1rem 0"},role:"alert"},l),c?o.a.createElement("div",null,o.a.createElement("table",{style:{width:"100%"}},o.a.createElement("tbody",null,o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("strong",null,y("header.revision"))),o.a.createElement("td",null,formatRevisionDate(c))),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("strong",null,y("header.creator"))),o.a.createElement("td",null,c.creator)),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("strong",null,y("header.identifier"))),o.a.createElement("td",null,c.identifier)),o.a.createElement("tr",null,o.a.createElement("td",null,o.a.createElement("strong",null,y("header.label"))),o.a.createElement("td",null,o.a.createElement(f.TextInput,{defaultValue:c.label||"",onChange:e=>p(e.target.value)}))))),o.a.createElement("div",{style:{marginTop:"1rem"}},o.a.createElement(f.Button,{style:"warn",onClick:()=>d(null)},y("action.close")),o.a.createElement(f.Button,{style:"success",onClick:m,disabled:_==c.label},y("action.apply")))):o.a.createElement("table",{style:{width:"100%"}},o.a.createElement("thead",null,o.a.createElement("tr",null,o.a.createElement("th",{style:{textAlign:"left"}},y("header.label")),o.a.createElement("th",null,y("header.actions")))),o.a.createElement("tbody",null,i.map(e=>o.a.createElement("tr",{key:e.creationDateTime},o.a.createElement("td",{title:`Created on ${formatRevisionDate(e)} by ${e.creator}`},e.label||formatRevisionDate(e)),o.a.createElement("td",{style:{textAlign:"center"}},o.a.createElement(f.IconButton,{onClick:()=>d(e),icon:"edit",style:"primary",size:"small",title:`Edit revision ${formatRevisionDate(e)} by ${e.creator}`}),o.a.createElement(f.IconButton,{onClick:()=>h(e),icon:"check",style:"primary",size:"small",title:`Apply revision ${formatRevisionDate(e)} by ${e.creator}`})))))))}),__decorate=function(e,t,r,n){var o,a=arguments.length,i=a<3?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(o=e[u])&&(i=(a<3?o(i):a>3?o(t,r,i):o(t,r))||i);return a>3&&i&&Object.defineProperty(t,r,i),i};let p=class RevisionsView extends n.PureComponent{constructor(e){super(e)}render(){const e=this.props.getNodeByContextPath(this.props.documentNodePath);return o.a.createElement(_,{documentNode:e,addFlashMessage:this.props.addFlashMessage,reloadDocument:this.props.reloadDocument,i18nRegistry:this.props.i18nRegistry})}};p.propTypes={documentNodePath:i.a.string.isRequired,i18nRegistry:i.a.object.isRequired,getNodeByContextPath:i.a.func.isRequired,addFlashMessage:i.a.func.isRequired,reloadDocument:i.a.func.isRequired},p=__decorate([Object(u.connect)(e=>({getNodeByContextPath:s.selectors.CR.Nodes.nodeByContextPath(e)})),Object(u.connect)(Object(l.$transform)({documentNodePath:Object(l.$get)("cr.nodes.documentNode")}),{addFlashMessage:s.actions.UI.FlashMessages.add,reloadDocument:s.actions.UI.ContentCanvas.reload}),Object(c.neos)(e=>({i18nRegistry:e.get("i18n")}))],p);t.default=p}]);
//# sourceMappingURL=Plugin.js.map