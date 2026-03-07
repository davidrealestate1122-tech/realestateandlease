(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39262,e=>{"use strict";let t=(0,e.i(70451).default)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);e.s(["Loader",()=>t],39262)},43619,42834,e=>{"use strict";let t,r;var a=e.i(54156),n=e.i(35491);function s(e,t){if("function"==typeof e)return e(t);null!=e&&(e.current=t)}var o=n.forwardRef((e,t)=>{let{children:r,...s}=e,o=n.Children.toArray(r),l=o.find(d);if(l){let e=l.props.children,r=o.map(t=>t!==l?t:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(i,{...s,ref:t,children:n.isValidElement(e)?n.cloneElement(e,void 0,r):null})}return(0,a.jsx)(i,{...s,ref:t,children:r})});o.displayName="Slot";var i=n.forwardRef((e,t)=>{let{children:r,...a}=e;if(n.isValidElement(r)){var o;let e,i,l=(o=r,(i=(e=Object.getOwnPropertyDescriptor(o.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.ref:(i=(e=Object.getOwnPropertyDescriptor(o,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?o.props.ref:o.props.ref||o.ref);return n.cloneElement(r,{...function(e,t){let r={...t};for(let a in t){let n=e[a],s=t[a];/^on[A-Z]/.test(a)?n&&s?r[a]=(...e)=>{s(...e),n(...e)}:n&&(r[a]=n):"style"===a?r[a]={...n,...s}:"className"===a&&(r[a]=[n,s].filter(Boolean).join(" "))}return{...e,...r}}(a,r.props),ref:t?function(...e){return t=>{let r=!1,a=e.map(e=>{let a=s(e,t);return r||"function"!=typeof a||(r=!0),a});if(r)return()=>{for(let t=0;t<a.length;t++){let r=a[t];"function"==typeof r?r():s(e[t],null)}}}}(t,l):l})}return n.Children.count(r)>1?n.Children.only(null):null});i.displayName="SlotClone";var l=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function d(e){return n.isValidElement(e)&&e.type===l}e.s(["Slot",()=>o],42834);var c=e.i(93369);let u=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,p=c.clsx;var f=e.i(52960);let h=(t="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",r={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var a;if((null==r?void 0:r.variants)==null)return p(t,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:n,defaultVariants:s}=r,o=Object.keys(n).map(t=>{let r=null==e?void 0:e[t],a=null==s?void 0:s[t];if(null===r)return null;let o=u(r)||u(a);return n[t][o]}),i=e&&Object.entries(e).reduce((e,t)=>{let[r,a]=t;return void 0===a||(e[r]=a),e},{});return p(t,o,null==r||null==(a=r.compoundVariants)?void 0:a.reduce((e,t)=>{let{class:r,className:a,...n}=t;return Object.entries(n).every(e=>{let[t,r]=e;return Array.isArray(r)?r.includes({...s,...i}[t]):({...s,...i})[t]===r})?[...e,r,a]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function m({className:e,variant:t,size:r,asChild:n=!1,...s}){let i=n?o:"button";return(0,a.jsx)(i,{"data-slot":"button",className:(0,f.cn)(h({variant:t,size:r,className:e})),...s})}e.s(["Button",()=>m],43619)},60095,e=>{"use strict";var t=e.i(54156),r=e.i(52960);function a({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card",className:(0,r.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...a})}function n({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-header",className:(0,r.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...a})}function s({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-title",className:(0,r.cn)("leading-none font-semibold",e),...a})}function o({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-description",className:(0,r.cn)("text-muted-foreground text-sm",e),...a})}function i({className:e,...a}){return(0,t.jsx)("div",{"data-slot":"card-content",className:(0,r.cn)("px-6",e),...a})}e.s(["Card",()=>a,"CardContent",()=>i,"CardDescription",()=>o,"CardHeader",()=>n,"CardTitle",()=>s])},59581,e=>{"use strict";let t=(0,e.i(70451).default)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);e.s(["Trash2",()=>t],59581)},70451,49681,e=>{"use strict";var t=e.i(35491);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:o,className:i="",children:l,iconNode:d,...c},u)=>(0,t.createElement)("svg",{ref:u,...a,width:n,height:n,stroke:e,strokeWidth:o?24*Number(s)/Number(n):s,className:r("lucide",i),...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),s=(e,a)=>{let s=(0,t.forwardRef)(({className:s,...o},i)=>(0,t.createElement)(n,{ref:i,iconNode:a,className:r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...o}));return s.displayName=`${e}`,s};e.s(["default",()=>s],70451);let o=s("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>o],49681)},14057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return i}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});function s(e){let t={};for(let[r,a]of e.entries()){let e=t[r];void 0===e?t[r]=a:Array.isArray(e)?e.push(a):t[r]=[e,a]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(r,o(e));else t.set(r,o(a));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,a]of r.entries())e.append(t,a)}return e}},70249,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return i},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let s=e.r(4960)._(e.r(67133)),o=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,a=e.protocol||"",n=e.pathname||"",i=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(s.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${n}${c}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return i(e)}},47550,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,t){let r=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=s(e,a)),t&&(n.current=s(t,a))},[e,t])}function s(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},99901,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return x},WEB_VITALS:function(){return s},execOnce:function(){return o},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return w}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...a)=>(r||(r=!0,t=e(...a)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>i.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&p(r))return a;if(!a)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let m="undefined"!=typeof performance,x=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return s}});let a=e.r(99901),n=e.r(13042);function s(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},57832,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return g},useLinkStatus:function(){return v}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let s=e.r(4960),o=e.r(54156),i=s._(e.r(35491)),l=e.r(70249),d=e.r(30944),c=e.r(47550),u=e.r(99901),p=e.r(4471);e.r(14057);let f=e.r(11535),h=e.r(2239),m=e.r(83671);function x(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(t){var r;let a,n,s,[l,g]=(0,i.useOptimistic)(f.IDLE_LINK_STATUS),v=(0,i.useRef)(null),{href:y,as:j,children:w,prefetch:N=null,passHref:k,replace:C,shallow:S,scroll:E,onClick:P,onMouseEnter:M,onTouchStart:A,legacyBehavior:O=!1,onNavigate:z,ref:T,unstable_dynamicOnHover:_,...R}=t;a=w,O&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let D=i.default.useContext(d.AppRouterContext),L=!1!==N,U=!1!==N?null===(r=N)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:$,as:F}=i.default.useMemo(()=>{let e=x(y);return{href:e,as:j?x(j):e}},[y,j]);if(O){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=i.default.Children.only(a)}let I=O?n&&"object"==typeof n&&n.ref:T,B=i.default.useCallback(e=>(null!==D&&(v.current=(0,f.mountLinkInstance)(e,$,D,U,L,g)),()=>{v.current&&((0,f.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,f.unmountPrefetchableInstance)(e)}),[L,$,D,U,g]),V={ref:(0,c.useMergedRef)(B,I),onClick(t){O||"function"!=typeof P||P(t),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!D||t.defaultPrevented||function(t,r,a,n,s,o,l){if("undefined"!=typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){s&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(30800);i.default.startTransition(()=>{u(a||r,s?"replace":"push",o??!0,n.current)})}}(t,$,F,v,C,E,z)},onMouseEnter(e){O||"function"!=typeof M||M(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),D&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===_)},onTouchStart:function(e){O||"function"!=typeof A||A(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),D&&L&&(0,f.onNavigationIntent)(e.currentTarget,!0===_)}};return(0,u.isAbsoluteUrl)(F)?V.href=F:O&&!k&&("a"!==n.type||"href"in n.props)||(V.href=(0,p.addBasePath)(F)),s=O?i.default.cloneElement(n,V):(0,o.jsx)("a",{...R,...V,children:a}),(0,o.jsx)(b.Provider,{value:l,children:s})}e.r(57832);let b=(0,i.createContext)(f.IDLE_LINK_STATUS),v=()=>(0,i.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},1894,12514,50932,46645,60499,58280,e=>{"use strict";var t=e.i(54156),r=e.i(35264),a=e.i(76569),n=e.i(35491),s=e.i(13470),o=e.i(70451);let i=(0,o.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>i],12514);let l=(0,o.default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>l],50932);let d=(0,o.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,o.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);let u=(0,o.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>u],60499);let p=(0,o.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>p],58280);let f=[{href:"/dashboard",label:"Dashboard",icon:i},{label:"Property",icon:l,subItems:[{href:"/execution",label:"Property List",icon:p},{href:"#",label:"Property Detail",icon:e.i(49681).FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c}];function h({item:e,isActive:r,pathname:a}){let[o,i]=(0,n.useState)(!1),l=e.icon,d=e.subItems&&e.subItems.length>0;return((0,n.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&i(!0)},[a,e.label]),d)?(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:t=>{if(t.preventDefault(),d&&!o&&"Property"===e.label){let t=e.subItems?.[0];if(t?.href){window.location.href=t.href;return}}i(!o)},className:`re-nav-item w-full ${r?"active":""}`,children:[(0,t.jsx)(l,{className:"re-nav-icon"}),(0,t.jsx)("span",{className:"re-nav-label",children:e.label}),(0,t.jsx)(u,{className:`re-nav-chevron ${o?"rotated":""}`})]}),o&&(0,t.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let r=e.icon,n=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,t.jsxs)(s.default,{href:e.href||"#",className:`re-subnav-item ${n?"active":""}`,children:[(0,t.jsx)(r,{className:"re-subnav-icon"}),(0,t.jsx)("span",{children:e.label})]},e.label)})})]}):(0,t.jsxs)(s.default,{href:e.href||"#",className:`re-nav-item ${r?"active":""}`,children:[(0,t.jsx)(l,{className:"re-nav-icon"}),(0,t.jsx)("span",{className:"re-nav-label",children:e.label})]})}function m(){let e=(0,a.usePathname)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        /* ── Sidebar shell ── */
        .re-sidebar {
          font-family: 'DM Sans', sans-serif;
          width: 240px;
          min-width: 240px;
          background: #ffffff;
          border-right: 1px solid #e5e7eb;
          display: flex;
          flex-direction: column;
          height: 100%;
          position: relative;
        }

        /* Right-edge gold accent */
        .re-sidebar::after {
          content: '';
          position: absolute;
          top: 0; right: -1px; bottom: 0;
          width: 2px;
          background: linear-gradient(180deg, transparent 0%, rgba(196,162,96,0.4) 30%, rgba(196,162,96,0.4) 70%, transparent 100%);
        }

        /* ── Logo / brand area ── */
        .re-sidebar-brand {
          padding: 20px 20px 18px;
          border-bottom: 1px solid #f3f4f6;
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .re-sidebar-brand-icon {
          width: 28px; height: 28px;
          border: 1.5px solid rgba(196,162,96,0.65);
          display: flex; align-items: center; justify-content: center;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .re-sidebar-brand-icon-inner {
          width: 10px; height: 10px;
          background: rgba(196,162,96,0.85);
        }
        .re-sidebar-brand-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111827;
          line-height: 1;
        }
        .re-sidebar-brand-sub {
          font-size: 10px;
          font-weight: 400;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          color: #b8943a;
          margin-top: 2px;
        }

        /* ── Nav section label ── */
        .re-nav-section {
          padding: 20px 16px 8px;
        }
        .re-nav-section-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.12em;
          text-transform: uppercase;
          color: #9ca3af;
        }

        /* ── Nav items ── */
        .re-nav {
          flex: 1;
          padding: 8px 12px 16px;
          display: flex;
          flex-direction: column;
          gap: 2px;
          overflow-y: auto;
        }

        .re-nav-item {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 9px 12px;
          border-radius: 7px;
          font-size: 13px;
          font-weight: 400;
          color: #4b5563;
          text-decoration: none;
          background: none;
          border: none;
          cursor: pointer;
          width: 100%;
          text-align: left;
          transition: background 0.13s, color 0.13s;
          position: relative;
        }
        .re-nav-item:hover {
          background: #f9fafb;
          color: #111827;
        }
        .re-nav-item:hover .re-nav-icon { color: #374151; }

        /* Active state — gold left bar */
        .re-nav-item.active {
          background: linear-gradient(90deg, rgba(196,162,96,0.1) 0%, rgba(196,162,96,0.04) 100%);
          color: #92700a;
          font-weight: 500;
          border: 1px solid rgba(196,162,96,0.18);
        }
        .re-nav-item.active::before {
          content: '';
          position: absolute;
          left: 0; top: 20%; bottom: 20%;
          width: 2.5px;
          border-radius: 0 2px 2px 0;
          background: rgba(196,162,96,0.85);
        }
        .re-nav-item.active .re-nav-icon { color: #b8943a; }

        .re-nav-icon {
          width: 16px; height: 16px;
          color: #9ca3af;
          flex-shrink: 0;
          transition: color 0.13s;
        }
        .re-nav-label { flex: 1; }

        .re-nav-chevron {
          width: 13px; height: 13px;
          color: #9ca3af;
          flex-shrink: 0;
          transition: transform 0.2s;
        }
        .re-nav-chevron.rotated { transform: rotate(180deg); }

        /* ── Sub-nav ── */
        .re-subnav {
          display: flex;
          flex-direction: column;
          gap: 1px;
          margin-top: 2px;
          padding-left: 14px;
          border-left: 1.5px solid #f3f4f6;
          margin-left: 20px;
        }

        .re-subnav-item {
          display: flex;
          align-items: center;
          gap: 8px;
          padding: 7px 10px;
          border-radius: 6px;
          font-size: 12.5px;
          font-weight: 400;
          color: #6b7280;
          text-decoration: none;
          transition: background 0.13s, color 0.13s;
        }
        .re-subnav-item:hover {
          background: #f9fafb;
          color: #111827;
        }
        .re-subnav-item:hover .re-subnav-icon { color: #374151; }
        .re-subnav-item.active {
          background: rgba(196,162,96,0.08);
          color: #92700a;
          font-weight: 500;
        }
        .re-subnav-item.active .re-subnav-icon { color: #b8943a; }

        .re-subnav-icon {
          width: 14px; height: 14px;
          color: #9ca3af;
          flex-shrink: 0;
          transition: color 0.13s;
        }

        /* ── Divider ── */
        .re-nav-divider {
          height: 1px;
          background: #f3f4f6;
          margin: 6px 4px;
        }

        /* ── Footer ── */
        .re-sidebar-footer {
          padding: 14px 16px;
          border-top: 1px solid #f3f4f6;
        }
        .re-sidebar-footer-text {
          font-size: 10px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.06em;
          text-align: center;
        }
        .re-sidebar-footer-gold {
          color: rgba(196,162,96,0.6);
        }
      `}),(0,t.jsxs)("div",{className:"re-sidebar",children:[(0,t.jsxs)("div",{className:"re-sidebar-brand",children:[(0,t.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,t.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,t.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,t.jsx)("div",{className:"re-nav-section",children:(0,t.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,t.jsx)("nav",{className:"re-nav",children:f.map((r,a)=>{let n=!1;return r.href?n=e===r.href:"Property"===r.label&&(n=e.startsWith("/execution")),(0,t.jsxs)("div",{children:["Rules"===r.label&&(0,t.jsx)("div",{className:"re-nav-divider"}),(0,t.jsx)(h,{item:r,isActive:n,pathname:e})]},r.label)})}),(0,t.jsx)("div",{className:"re-sidebar-footer",children:(0,t.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,t.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,t.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let x=(0,o.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function g(){let{admin:e,logout:s}=(0,r.useAuth)(),o=(0,a.useRouter)(),[i,l]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[p,f]=(0,n.useState)(!1);(0,n.useEffect)(()=>{l(localStorage.getItem("email")??"")},[]),(0,n.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let t=setInterval(e,1e3);return()=>clearInterval(t)},[]);let h=i?i.split("@")[0].slice(0,2).toUpperCase():"AD",m=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .re-header {
          font-family: 'DM Sans', sans-serif;
          background: #ffffff;
          border-bottom: 1px solid #e5e7eb;
          padding: 0 32px;
          height: 64px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          position: relative;
        }

        /* Gold accent line along the bottom edge */
        .re-header::after {
          content: '';
          position: absolute;
          bottom: -1px; left: 0; right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent 0%, rgba(196,162,96,0.55) 25%, rgba(196,162,96,0.55) 75%, transparent 100%);
        }

        /* ── Left ── */
        .re-header-left {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .re-brand {
          display: flex;
          align-items: center;
          gap: 10px;
        }
        .re-brand-icon {
          width: 26px; height: 26px;
          border: 1.5px solid rgba(196,162,96,0.65);
          display: flex; align-items: center; justify-content: center;
          transform: rotate(45deg);
          flex-shrink: 0;
        }
        .re-brand-icon-inner {
          width: 9px; height: 9px;
          background: rgba(196,162,96,0.85);
        }
        .re-brand-name {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 17px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #111827;
          white-space: nowrap;
        }

        .re-divider-v {
          width: 1px;
          height: 22px;
          background: #e5e7eb;
        }

        .re-breadcrumb {
          display: flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: #9ca3af;
          letter-spacing: 0.03em;
        }
        .re-breadcrumb-active {
          color: #374151;
          font-weight: 500;
        }
        .re-breadcrumb-sep {
          color: rgba(196,162,96,0.7);
          font-size: 14px;
          line-height: 1;
        }

        /* ── Center ── */
        .re-header-center {
          position: absolute;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 1px;
          pointer-events: none;
        }
        .re-time {
          font-size: 13px;
          font-weight: 500;
          color: #374151;
          letter-spacing: 0.05em;
        }
        .re-date {
          font-size: 10px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.05em;
        }

        /* ── Right ── */
        .re-header-right {
          display: flex;
          align-items: center;
          gap: 10px;
        }

        /* Status pill */
        .re-status {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 4px 12px;
          border: 1px solid #bbf7d0;
          background: #f0fdf4;
          border-radius: 20px;
          font-size: 11px;
          font-weight: 400;
          color: #15803d;
          letter-spacing: 0.04em;
        }
        .re-status-dot {
          width: 5px; height: 5px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 5px rgba(34,197,94,0.55);
          animation: re-pulse 2.2s ease infinite;
        }
        @keyframes re-pulse {
          0%,100% { opacity: 1; }
          50% { opacity: 0.3; }
        }

        /* User button */
        .re-user-btn {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 5px 12px 5px 5px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 7px;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, box-shadow 0.15s;
          position: relative;
        }
        .re-user-btn:hover {
          background: #f3f4f6;
          border-color: rgba(196,162,96,0.45);
          box-shadow: 0 1px 6px rgba(0,0,0,0.07);
        }

        .re-avatar {
          width: 30px; height: 30px;
          border-radius: 5px;
          background: linear-gradient(135deg, #c4a260, #9c7a38);
          display: flex; align-items: center; justify-content: center;
          font-size: 11px;
          font-weight: 600;
          color: #fff;
          letter-spacing: 0.05em;
          flex-shrink: 0;
        }

        .re-user-info {
          display: flex;
          flex-direction: column;
          gap: 1px;
          text-align: left;
        }
        .re-user-name {
          font-size: 12px;
          font-weight: 500;
          color: #111827;
          max-width: 160px;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
        .re-user-role {
          font-size: 10px;
          font-weight: 400;
          color: #b8943a;
          letter-spacing: 0.08em;
          text-transform: uppercase;
        }

        .re-chevron {
          color: #9ca3af;
          transition: transform 0.2s;
          flex-shrink: 0;
        }
        .re-user-btn.open .re-chevron { transform: rotate(180deg); }

        /* Dropdown */
        .re-dropdown {
          position: absolute;
          top: calc(100% + 8px);
          right: 0;
          min-width: 215px;
          background: #ffffff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          box-shadow: 0 10px 36px rgba(0,0,0,0.1), 0 2px 8px rgba(0,0,0,0.06);
          padding: 6px;
          z-index: 50;
          animation: re-dropdown-in 0.14s cubic-bezier(0.4,0,0.2,1);
        }
        @keyframes re-dropdown-in {
          from { opacity: 0; transform: translateY(-5px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .re-dropdown-header {
          padding: 10px 12px 12px;
          border-bottom: 1px solid #f3f4f6;
          margin-bottom: 4px;
        }
        .re-dropdown-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #b8943a;
          margin-bottom: 3px;
        }
        .re-dropdown-email {
          font-size: 12px;
          color: #6b7280;
          word-break: break-all;
        }

        .re-dropdown-item {
          display: flex;
          align-items: center;
          gap: 9px;
          width: 100%;
          padding: 8px 12px;
          border-radius: 5px;
          font-size: 13px;
          font-weight: 400;
          color: #374151;
          background: none;
          border: none;
          cursor: pointer;
          transition: background 0.12s, color 0.12s;
          text-align: left;
        }
        .re-dropdown-item svg { color: #9ca3af; flex-shrink: 0; transition: color 0.12s; }
        .re-dropdown-item:hover { background: #f9fafb; }
        .re-dropdown-item.danger:hover {
          background: #fef2f2;
          color: #dc2626;
        }
        .re-dropdown-item.danger:hover svg { color: #dc2626; }
      `}),(0,t.jsxs)("header",{className:"re-header",children:[(0,t.jsxs)("div",{className:"re-header-left",children:[(0,t.jsxs)("div",{className:"re-brand",children:[(0,t.jsx)("div",{className:"re-brand-icon",children:(0,t.jsx)("div",{className:"re-brand-icon-inner"})}),(0,t.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,t.jsx)("div",{className:"re-divider-v"}),(0,t.jsxs)("div",{className:"re-breadcrumb",children:[(0,t.jsx)("span",{children:"Platform"}),(0,t.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,t.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,t.jsxs)("div",{className:"re-header-center",children:[(0,t.jsx)("div",{className:"re-time",children:d}),(0,t.jsx)("div",{className:"re-date",children:m})]}),(0,t.jsxs)("div",{className:"re-header-right",children:[(0,t.jsxs)("div",{className:"re-status",children:[(0,t.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,t.jsxs)("div",{style:{position:"relative"},children:[(0,t.jsxs)("button",{className:`re-user-btn ${p?"open":""}`,onClick:()=>f(e=>!e),onBlur:()=>setTimeout(()=>f(!1),150),children:[(0,t.jsx)("div",{className:"re-avatar",children:h}),(0,t.jsxs)("div",{className:"re-user-info",children:[(0,t.jsx)("div",{className:"re-user-name",children:i||"Administrator"}),(0,t.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,t.jsx)(u,{className:"re-chevron",size:13})]}),p&&(0,t.jsxs)("div",{className:"re-dropdown",children:[(0,t.jsxs)("div",{className:"re-dropdown-header",children:[(0,t.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,t.jsx)("div",{className:"re-dropdown-email",children:i||"Administrator"})]}),(0,t.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{s(),o.push("/login")},children:[(0,t.jsx)(x,{size:14}),"Sign out"]})]})]})]})]})]})}function b({children:e}){let{isAuthenticated:s}=(0,r.useAuth)(),o=(0,a.useRouter)(),[i,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),(0,n.useEffect)(()=>{i&&!s&&o.push("/login")},[i,s,o]),i&&s)?(0,t.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,t.jsx)(m,{}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,t.jsx)(g,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>b],1894)},85846,e=>{"use strict";let t=(0,e.i(70451).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>t],85846)},42494,e=>{"use strict";let t=(0,e.i(70451).default)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>t],42494)},2431,e=>{"use strict";let t=(0,e.i(70451).default)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);e.s(["Shield",()=>t],2431)},84906,e=>{"use strict";let t=(0,e.i(70451).default)("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);e.s(["Edit2",()=>t],84906)},74598,e=>{"use strict";var t=e.i(54156),r=e.i(52960);function a({className:e,type:a,...n}){return(0,t.jsx)("input",{type:a,"data-slot":"input",className:(0,r.cn)("file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground dark:bg-input/30 border-input h-9 w-full min-w-0 rounded-md border bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm","focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px]","aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",e),...n})}e.s(["Input",()=>a])},6905,e=>{"use strict";var t=e.i(54156),r=e.i(1894),a=e.i(43619),n=e.i(60095),s=e.i(74598),o=e.i(35491);e.i(59691);var i=e.i(42834),l=["a","button","div","form","h2","h3","img","input","label","li","nav","ol","p","span","svg","ul"].reduce((e,r)=>{let a=o.forwardRef((e,a)=>{let{asChild:n,...s}=e,o=n?i.Slot:r;return"undefined"!=typeof window&&(window[Symbol.for("radix-ui")]=!0),(0,t.jsx)(o,{...s,ref:a})});return a.displayName=`Primitive.${r}`,{...e,[r]:a}},{}),d=o.forwardRef((e,r)=>(0,t.jsx)(l.label,{...e,ref:r,onMouseDown:t=>{t.target.closest("button, input, select, textarea")||(e.onMouseDown?.(t),!t.defaultPrevented&&t.detail>1&&t.preventDefault())}}));d.displayName="Label";var c=e.i(52960);function u({className:e,...r}){return(0,t.jsx)(d,{"data-slot":"label",className:(0,c.cn)("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",e),...r})}var p=e.i(59581),f=e.i(84906),h=e.i(42494),m=e.i(2431),x=e.i(85846),g=e.i(39262);function b(){let[e,i]=(0,o.useState)([]),[l,d]=(0,o.useState)(!0),[c,b]=(0,o.useState)(null),[v,y]=(0,o.useState)(!1),[j,w]=(0,o.useState)(null),[N,k]=(0,o.useState)(!1),[C,S]=(0,o.useState)({fullName:"",email:"",phone:"",password:"",role:"employee",status:"active"});(0,o.useEffect)(()=>{E()},[]);let E=async()=>{try{d(!0),b(null);let e=localStorage.getItem("token");if(!e){b("Authentication token not found"),d(!1);return}let t=await fetch("/api/users",{method:"GET",headers:{"Content-Type":"application/json",Authorization:`Bearer ${e}`}});if(!t.ok){if(401===t.status){b("Unauthorized. Please login again."),localStorage.removeItem("token");return}throw Error("Failed to fetch users")}let r=await t.json();i(r)}catch(e){b(e instanceof Error?e.message:"Failed to fetch users"),console.error("Fetch error:",e)}finally{d(!1)}},P=async()=>{if(!C.fullName||!C.email||!C.phone||!C.password)return void b("Please fill in all required fields");try{k(!0),b(null);let t=localStorage.getItem("token"),r=await fetch("/api/users",{method:"POST",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({fullName:C.fullName,email:C.email,phone:C.phone,password:C.password,role:C.role,status:C.status})});if(!r.ok){let e=await r.json();throw Error(e.message||"Failed to create user")}let a=await r.json();i([...e,a]),S({fullName:"",email:"",phone:"",password:"",role:"employee",status:"active"}),y(!1)}catch(e){b(e instanceof Error?e.message:"Failed to create user"),console.error("Create error:",e)}finally{k(!1)}},M=async()=>{if(j&&C.fullName&&C.email&&C.phone)try{k(!0),b(null);let t=localStorage.getItem("token"),r=await fetch(`/api/users/${j}`,{method:"PUT",headers:{"Content-Type":"application/json",Authorization:`Bearer ${t}`},body:JSON.stringify({fullName:C.fullName,email:C.email,phone:C.phone,role:C.role,status:C.status,...C.password&&{password:C.password}})});if(!r.ok){let e=await r.json();throw Error(e.message||"Failed to update user")}let a=await r.json();i(e.map(e=>e._id===j?a:e)),w(null),S({fullName:"",email:"",phone:"",password:"",role:"employee",status:"active"})}catch(e){b(e instanceof Error?e.message:"Failed to update user"),console.error("Update error:",e)}finally{k(!1)}},A=async t=>{if(console.log("id ",t),confirm("Are you sure you want to delete this user?"))try{b(null);let r=localStorage.getItem("token");if(!r){b("Authentication token not found. Please login again."),localStorage.removeItem("token");return}console.log("Deleting user:",t),console.log("Token exists:",!!r);let a=await fetch(`/api/users/${t}`,{method:"DELETE",headers:{"Content-Type":"application/json",Authorization:`Bearer ${r}`}});if(console.log("Delete response status:",a.status),!a.ok){let e="Failed to delete user";try{e=(await a.json()).message||e}catch(t){e=`Server error: ${a.statusText}`}throw Error(e)}let n=await a.json();console.log("Delete response:",n),i(e.filter(e=>e._id!==t)),b(null)}catch(e){b(e instanceof Error?e.message:"Failed to delete user"),console.error("Delete error:",e)}};return(0,t.jsx)(r.AdminLayout,{children:(0,t.jsxs)("div",{className:"p-8 space-y-6",children:[(0,t.jsxs)("div",{className:"flex items-center justify-between",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold text-foreground",children:"User Management"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Manage team members and permissions"})]}),(0,t.jsxs)(a.Button,{onClick:()=>{y(!v),w(null),S({fullName:"",email:"",phone:"",password:"",role:"employee",status:"active"})},className:"gap-2 bg-primary hover:bg-primary/90",children:[(0,t.jsx)(h.Plus,{className:"w-4 h-4"}),"Add User"]})]}),c&&(0,t.jsx)(n.Card,{className:"border-destructive/50 bg-destructive/5",children:(0,t.jsxs)(n.CardContent,{className:"flex gap-3 pt-6",children:[(0,t.jsx)(x.AlertCircle,{className:"w-5 h-5 text-destructive flex-shrink-0 mt-0.5"}),(0,t.jsx)("p",{className:"text-sm text-destructive",children:c})]})}),(v||j)&&(0,t.jsxs)(n.Card,{className:"border-primary/30 bg-primary/5",children:[(0,t.jsx)(n.CardHeader,{children:(0,t.jsx)(n.CardTitle,{children:j?"Edit User":"Add New User"})}),(0,t.jsxs)(n.CardContent,{className:"space-y-4",children:[(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(u,{htmlFor:"fullName",className:"text-foreground font-medium",children:"Full Name"}),(0,t.jsx)(s.Input,{id:"fullName",value:C.fullName,onChange:e=>S({...C,fullName:e.target.value}),placeholder:"John Doe",className:"bg-background"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(u,{htmlFor:"email",className:"text-foreground font-medium",children:"Email"}),(0,t.jsx)(s.Input,{id:"email",type:"email",value:C.email,onChange:e=>S({...C,email:e.target.value}),placeholder:"john@example.com",className:"bg-background"})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(u,{htmlFor:"phone",className:"text-foreground font-medium",children:"Phone"}),(0,t.jsx)(s.Input,{id:"phone",type:"tel",value:C.phone,onChange:e=>S({...C,phone:e.target.value}),placeholder:"+1 (555) 000-0000",className:"bg-background"})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsxs)(u,{htmlFor:"password",className:"text-foreground font-medium",children:["Password ",j&&"(Leave empty to keep current)"]}),(0,t.jsx)(s.Input,{id:"password",type:"password",value:C.password,onChange:e=>S({...C,password:e.target.value}),placeholder:j?"Leave empty to keep current":"Enter password",className:"bg-background"})]})]}),(0,t.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(u,{htmlFor:"role",className:"text-foreground font-medium",children:"Role"}),(0,t.jsxs)("select",{id:"role",value:C.role,onChange:e=>S({...C,role:e.target.value}),className:"w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground",children:[(0,t.jsx)("option",{value:"employee",children:"Employee"}),(0,t.jsx)("option",{value:"manager",children:"Manager"}),(0,t.jsx)("option",{value:"admin",children:"Admin"})]})]}),(0,t.jsxs)("div",{className:"space-y-2",children:[(0,t.jsx)(u,{htmlFor:"status",className:"text-foreground font-medium",children:"Status"}),(0,t.jsxs)("select",{id:"status",value:C.status,onChange:e=>S({...C,status:e.target.value}),className:"w-full px-3 py-2 rounded-lg border border-border bg-background text-foreground",children:[(0,t.jsx)("option",{value:"active",children:"Active"}),(0,t.jsx)("option",{value:"inactive",children:"Inactive"})]})]})]}),(0,t.jsxs)("div",{className:"flex gap-2 justify-end",children:[(0,t.jsx)(a.Button,{variant:"outline",onClick:()=>{y(!1),w(null),S({fullName:"",email:"",phone:"",password:"",role:"employee",status:"active"}),b(null)},disabled:N,children:"Cancel"}),(0,t.jsx)(a.Button,{onClick:j?M:P,className:"bg-primary hover:bg-primary/90",disabled:N,children:N?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(g.Loader,{className:"w-4 h-4 mr-2 animate-spin"}),j?"Updating...":"Creating..."]}):j?"Update":"Create"})]})]})]}),(0,t.jsxs)(n.Card,{children:[(0,t.jsxs)(n.CardHeader,{children:[(0,t.jsx)(n.CardTitle,{children:"Team Members"}),(0,t.jsxs)(n.CardDescription,{children:["Manage users and their roles (",e.length,")"]})]}),(0,t.jsx)(n.CardContent,{children:l?(0,t.jsx)("div",{className:"flex items-center justify-center py-8",children:(0,t.jsx)(g.Loader,{className:"w-6 h-6 animate-spin text-primary"})}):0===e.length?(0,t.jsx)("div",{className:"text-center py-8",children:(0,t.jsx)("p",{className:"text-muted-foreground",children:"No users found"})}):(0,t.jsx)("div",{className:"overflow-x-auto",children:(0,t.jsxs)("table",{className:"w-full",children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{className:"border-b border-border",children:[(0,t.jsx)("th",{className:"text-left py-3 px-4 font-semibold text-sm text-muted-foreground",children:"Full Name"}),(0,t.jsx)("th",{className:"text-left py-3 px-4 font-semibold text-sm text-muted-foreground",children:"Email"}),(0,t.jsx)("th",{className:"text-left py-3 px-4 font-semibold text-sm text-muted-foreground",children:"Phone"}),(0,t.jsx)("th",{className:"text-center py-3 px-4 font-semibold text-sm text-muted-foreground",children:"Role"}),(0,t.jsx)("th",{className:"text-center py-3 px-4 font-semibold text-sm text-muted-foreground",children:"Status"}),(0,t.jsx)("th",{className:"text-center py-3 px-4 font-semibold text-sm text-muted-foreground",children:"Actions"})]})}),(0,t.jsx)("tbody",{children:e.map(e=>(0,t.jsxs)("tr",{className:"border-b border-border hover:bg-muted/50 transition-colors",children:[(0,t.jsx)("td",{className:"py-3 px-4 text-sm font-medium",children:e?.fullName}),(0,t.jsx)("td",{className:"py-3 px-4 text-sm text-muted-foreground",children:e?.email}),(0,t.jsx)("td",{className:"py-3 px-4 text-sm text-muted-foreground",children:e?.phone}),(0,t.jsx)("td",{className:"text-center py-3 px-4",children:(0,t.jsxs)("span",{className:`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${(e=>{switch(e){case"admin":return"bg-destructive/20 text-destructive";case"manager":return"bg-primary/20 text-primary";case"employee":return"bg-blue-500/20 text-blue-500";default:return"bg-muted text-muted-foreground"}})(e?.role)}`,children:[(0,t.jsx)(m.Shield,{className:"w-3 h-3"}),e?.role.charAt(0).toUpperCase()+e?.role.slice(1)]})}),(0,t.jsx)("td",{className:"text-center py-3 px-4",children:(0,t.jsx)("span",{className:`inline-block px-3 py-1 rounded-full text-xs font-semibold ${e?.status==="active"?"bg-success/20 text-success":"bg-muted text-muted-foreground"}`,children:e?.status.charAt(0).toUpperCase()+e?.status.slice(1)})}),(0,t.jsx)("td",{className:"text-center py-3 px-4",children:(0,t.jsxs)("div",{className:"flex justify-center gap-2",children:[(0,t.jsx)("button",{onClick:()=>{w(e._id),S({fullName:e.fullName,email:e.email,phone:e.phone,password:"",role:e.role,status:e.status})},className:"text-primary hover:text-primary/80 transition-colors",title:"Edit",children:(0,t.jsx)(f.Edit2,{className:"w-4 h-4"})}),(0,t.jsx)("button",{onClick:()=>A(e._id),className:"text-destructive hover:text-destructive/80 transition-colors",title:"Delete",children:(0,t.jsx)(p.Trash2,{className:"w-4 h-4"})})]})})]},e?._id))})]})})})]})]})})}e.s(["default",()=>b],6905)}]);