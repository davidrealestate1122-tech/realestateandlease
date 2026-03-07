(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,43619,42834,e=>{"use strict";let r,t;var a=e.i(54156),n=e.i(35491);function s(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}var l=n.forwardRef((e,r)=>{let{children:t,...s}=e,l=n.Children.toArray(t),o=l.find(d);if(o){let e=o.props.children,t=l.map(r=>r!==o?r:n.Children.count(e)>1?n.Children.only(null):n.isValidElement(e)?e.props.children:null);return(0,a.jsx)(i,{...s,ref:r,children:n.isValidElement(e)?n.cloneElement(e,void 0,t):null})}return(0,a.jsx)(i,{...s,ref:r,children:t})});l.displayName="Slot";var i=n.forwardRef((e,r)=>{let{children:t,...a}=e;if(n.isValidElement(t)){var l;let e,i,o=(l=t,(i=(e=Object.getOwnPropertyDescriptor(l.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.ref:(i=(e=Object.getOwnPropertyDescriptor(l,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?l.props.ref:l.props.ref||l.ref);return n.cloneElement(t,{...function(e,r){let t={...r};for(let a in r){let n=e[a],s=r[a];/^on[A-Z]/.test(a)?n&&s?t[a]=(...e)=>{s(...e),n(...e)}:n&&(t[a]=n):"style"===a?t[a]={...n,...s}:"className"===a&&(t[a]=[n,s].filter(Boolean).join(" "))}return{...e,...t}}(a,t.props),ref:r?function(...e){return r=>{let t=!1,a=e.map(e=>{let a=s(e,r);return t||"function"!=typeof a||(t=!0),a});if(t)return()=>{for(let r=0;r<a.length;r++){let t=a[r];"function"==typeof t?t():s(e[r],null)}}}}(r,o):o})}return n.Children.count(t)>1?n.Children.only(null):null});i.displayName="SlotClone";var o=({children:e})=>(0,a.jsx)(a.Fragment,{children:e});function d(e){return n.isValidElement(e)&&e.type===o}e.s(["Slot",()=>l],42834);var c=e.i(93369);let u=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,f=c.clsx;var p=e.i(52960);let g=(r="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var a;if((null==t?void 0:t.variants)==null)return f(r,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:n,defaultVariants:s}=t,l=Object.keys(n).map(r=>{let t=null==e?void 0:e[r],a=null==s?void 0:s[r];if(null===t)return null;let l=u(t)||u(a);return n[r][l]}),i=e&&Object.entries(e).reduce((e,r)=>{let[t,a]=r;return void 0===a||(e[t]=a),e},{});return f(r,l,null==t||null==(a=t.compoundVariants)?void 0:a.reduce((e,r)=>{let{class:t,className:a,...n}=r;return Object.entries(n).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...s,...i}[r]):({...s,...i})[r]===t})?[...e,t,a]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function x({className:e,variant:r,size:t,asChild:n=!1,...s}){let i=n?l:"button";return(0,a.jsx)(i,{"data-slot":"button",className:(0,p.cn)(g({variant:r,size:t,className:e})),...s})}e.s(["Button",()=>x],43619)},70451,49681,e=>{"use strict";var r=e.i(35491);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:l,className:i="",children:o,iconNode:d,...c},u)=>(0,r.createElement)("svg",{ref:u,...a,width:n,height:n,stroke:e,strokeWidth:l?24*Number(s)/Number(n):s,className:t("lucide",i),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(o)?o:[o]])),s=(e,a)=>{let s=(0,r.forwardRef)(({className:s,...l},i)=>(0,r.createElement)(n,{ref:i,iconNode:a,className:t(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...l}));return s.displayName=`${e}`,s};e.s(["default",()=>s],70451);let l=s("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>l],49681)},14057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={assign:function(){return o},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return i}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});function s(e){let r={};for(let[t,a]of e.entries()){let e=r[t];void 0===e?r[t]=a:Array.isArray(e)?e.push(a):r[t]=[e,a]}return r}function l(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let r=new URLSearchParams;for(let[t,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)r.append(t,l(e));else r.set(t,l(a));return r}function o(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,a]of t.entries())e.append(r,a)}return e}},70249,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={formatUrl:function(){return i},formatWithValidation:function(){return d},urlObjectKeys:function(){return o}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let s=e.r(4960)._(e.r(67133)),l=/https?|ftp|gopher|file/;function i(e){let{auth:r,hostname:t}=e,a=e.protocol||"",n=e.pathname||"",i=e.hash||"",o=e.query||"",d=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?d=r+e.host:t&&(d=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(d+=":"+e.port)),o&&"object"==typeof o&&(o=String(s.urlQueryToSearchParams(o)));let c=e.search||o&&`?${o}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||l.test(a))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),i&&"#"!==i[0]&&(i="#"+i),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${n}${c}${i}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return i(e)}},47550,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,r){let t=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=s(e,a)),r&&(n.current=s(r,a))},[e,r])}function s(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},99901,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return v},NormalizeError:function(){return m},PageNotFoundError:function(){return y},SP:function(){return x},ST:function(){return h},WEB_VITALS:function(){return s},execOnce:function(){return l},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return o},isResSent:function(){return f},loadGetInitialProps:function(){return g},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return j}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function l(e){let r,t=!1;return(...a)=>(t||(t=!0,r=e(...a)),r)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>i.test(e);function d(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function c(){let{href:e}=window.location,r=d();return e.substring(r.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function g(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await g(r.Component,r.ctx)}:{};let a=await e.getInitialProps(r);if(t&&f(t))return a;if(!a)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let x="undefined"!=typeof performance,h=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class m extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});let a=e.r(99901),n=e.r(13042);function s(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let r=(0,a.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},57832,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return y}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let s=e.r(4960),l=e.r(54156),i=s._(e.r(35491)),o=e.r(70249),d=e.r(30944),c=e.r(47550),u=e.r(99901),f=e.r(4471);e.r(14057);let p=e.r(11535),g=e.r(2239),x=e.r(83671);function h(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}function b(r){var t;let a,n,s,[o,b]=(0,i.useOptimistic)(p.IDLE_LINK_STATUS),y=(0,i.useRef)(null),{href:v,as:k,children:j,prefetch:w=null,passHref:N,replace:C,shallow:S,scroll:P,onClick:A,onMouseEnter:E,onTouchStart:M,legacyBehavior:_=!1,onNavigate:L,ref:O,unstable_dynamicOnHover:z,...T}=r;a=j,_&&("string"==typeof a||"number"==typeof a)&&(a=(0,l.jsx)("a",{children:a}));let R=i.default.useContext(d.AppRouterContext),$=!1!==w,D=!1!==w?null===(t=w)||"auto"===t?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,{href:U,as:F}=i.default.useMemo(()=>{let e=h(v);return{href:e,as:k?h(k):e}},[v,k]);if(_){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=i.default.Children.only(a)}let I=_?n&&"object"==typeof n&&n.ref:O,V=i.default.useCallback(e=>(null!==R&&(y.current=(0,p.mountLinkInstance)(e,U,R,D,$,b)),()=>{y.current&&((0,p.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,p.unmountPrefetchableInstance)(e)}),[$,U,R,D,b]),B={ref:(0,c.useMergedRef)(V,I),onClick(r){_||"function"!=typeof A||A(r),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!R||r.defaultPrevented||function(r,t,a,n,s,l,o){if("undefined"!=typeof window){let d,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((d=r.currentTarget.getAttribute("target"))&&"_self"!==d||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,g.isLocalURL)(t)){s&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(30800);i.default.startTransition(()=>{u(a||t,s?"replace":"push",l??!0,n.current)})}}(r,U,F,y,C,P,L)},onMouseEnter(e){_||"function"!=typeof E||E(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&$&&(0,p.onNavigationIntent)(e.currentTarget,!0===z)},onTouchStart:function(e){_||"function"!=typeof M||M(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&$&&(0,p.onNavigationIntent)(e.currentTarget,!0===z)}};return(0,u.isAbsoluteUrl)(F)?B.href=F:_&&!N&&("a"!==n.type||"href"in n.props)||(B.href=(0,f.addBasePath)(F)),s=_?i.default.cloneElement(n,B):(0,l.jsx)("a",{...T,...B,children:a}),(0,l.jsx)(m.Provider,{value:o,children:s})}e.r(57832);let m=(0,i.createContext)(p.IDLE_LINK_STATUS),y=()=>(0,i.useContext)(m);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},1894,12514,50932,46645,60499,58280,e=>{"use strict";var r=e.i(54156),t=e.i(35264),a=e.i(76569),n=e.i(35491),s=e.i(13470),l=e.i(70451);let i=(0,l.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>i],12514);let o=(0,l.default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>o],50932);let d=(0,l.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,l.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);let u=(0,l.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>u],60499);let f=(0,l.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>f],58280);let p=[{href:"/dashboard",label:"Dashboard",icon:i},{label:"Property",icon:o,subItems:[{href:"/execution",label:"Property List",icon:f},{href:"#",label:"Property Detail",icon:e.i(49681).FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c}];function g({item:e,isActive:t,pathname:a}){let[l,i]=(0,n.useState)(!1),o=e.icon,d=e.subItems&&e.subItems.length>0;return((0,n.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&i(!0)},[a,e.label]),d)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:r=>{if(r.preventDefault(),d&&!l&&"Property"===e.label){let r=e.subItems?.[0];if(r?.href){window.location.href=r.href;return}}i(!l)},className:`re-nav-item w-full ${t?"active":""}`,children:[(0,r.jsx)(o,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label}),(0,r.jsx)(u,{className:`re-nav-chevron ${l?"rotated":""}`})]}),l&&(0,r.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let t=e.icon,n=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,r.jsxs)(s.default,{href:e.href||"#",className:`re-subnav-item ${n?"active":""}`,children:[(0,r.jsx)(t,{className:"re-subnav-icon"}),(0,r.jsx)("span",{children:e.label})]},e.label)})})]}):(0,r.jsxs)(s.default,{href:e.href||"#",className:`re-nav-item ${t?"active":""}`,children:[(0,r.jsx)(o,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label})]})}function x(){let e=(0,a.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"re-sidebar",children:[(0,r.jsxs)("div",{className:"re-sidebar-brand",children:[(0,r.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,r.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,r.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,r.jsx)("div",{className:"re-nav-section",children:(0,r.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,r.jsx)("nav",{className:"re-nav",children:p.map((t,a)=>{let n=!1;return t.href?n=e===t.href:"Property"===t.label&&(n=e.startsWith("/execution")),(0,r.jsxs)("div",{children:["Rules"===t.label&&(0,r.jsx)("div",{className:"re-nav-divider"}),(0,r.jsx)(g,{item:t,isActive:n,pathname:e})]},t.label)})}),(0,r.jsx)("div",{className:"re-sidebar-footer",children:(0,r.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let h=(0,l.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function b(){let{admin:e,logout:s}=(0,t.useAuth)(),l=(0,a.useRouter)(),[i,o]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[f,p]=(0,n.useState)(!1);(0,n.useEffect)(()=>{o(localStorage.getItem("email")??"")},[]),(0,n.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let r=setInterval(e,1e3);return()=>clearInterval(r)},[]);let g=i?i.split("@")[0].slice(0,2).toUpperCase():"AD",x=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("header",{className:"re-header",children:[(0,r.jsxs)("div",{className:"re-header-left",children:[(0,r.jsxs)("div",{className:"re-brand",children:[(0,r.jsx)("div",{className:"re-brand-icon",children:(0,r.jsx)("div",{className:"re-brand-icon-inner"})}),(0,r.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,r.jsx)("div",{className:"re-divider-v"}),(0,r.jsxs)("div",{className:"re-breadcrumb",children:[(0,r.jsx)("span",{children:"Platform"}),(0,r.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,r.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,r.jsxs)("div",{className:"re-header-center",children:[(0,r.jsx)("div",{className:"re-time",children:d}),(0,r.jsx)("div",{className:"re-date",children:x})]}),(0,r.jsxs)("div",{className:"re-header-right",children:[(0,r.jsxs)("div",{className:"re-status",children:[(0,r.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsxs)("button",{className:`re-user-btn ${f?"open":""}`,onClick:()=>p(e=>!e),onBlur:()=>setTimeout(()=>p(!1),150),children:[(0,r.jsx)("div",{className:"re-avatar",children:g}),(0,r.jsxs)("div",{className:"re-user-info",children:[(0,r.jsx)("div",{className:"re-user-name",children:i||"Administrator"}),(0,r.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,r.jsx)(u,{className:"re-chevron",size:13})]}),f&&(0,r.jsxs)("div",{className:"re-dropdown",children:[(0,r.jsxs)("div",{className:"re-dropdown-header",children:[(0,r.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,r.jsx)("div",{className:"re-dropdown-email",children:i||"Administrator"})]}),(0,r.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{s(),l.push("/login")},children:[(0,r.jsx)(h,{size:14}),"Sign out"]})]})]})]})]})]})}function m({children:e}){let{isAuthenticated:s}=(0,t.useAuth)(),l=(0,a.useRouter)(),[i,o]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{o(!0)},[]),(0,n.useEffect)(()=>{i&&!s&&l.push("/login")},[i,s,l]),i&&s)?(0,r.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,r.jsx)(x,{}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,r.jsx)(b,{}),(0,r.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>m],1894)},85846,e=>{"use strict";let r=(0,e.i(70451).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>r],85846)},5953,e=>{"use strict";let r=(0,e.i(70451).default)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);e.s(["DollarSign",()=>r],5953)},94192,e=>{"use strict";let r=(0,e.i(70451).default)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>r],94192)},98895,e=>{"use strict";async function r(e,r){let t=await fetch(e,{headers:{"Content-Type":"application/json"},...r});if(!t.ok)throw Error("API Error");return t.json()}e.s(["api",()=>r])},42494,e=>{"use strict";let r=(0,e.i(70451).default)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>r],42494)},10527,e=>{"use strict";let r=(0,e.i(70451).default)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);e.s(["TrendingUp",()=>r],10527)},59581,e=>{"use strict";let r=(0,e.i(70451).default)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);e.s(["Trash2",()=>r],59581)},20918,54331,e=>{"use strict";var r=e.i(70451);let t=(0,r.default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);e.s(["Search",()=>t],20918);let a=(0,r.default)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>a],54331)},85177,e=>{"use strict";var r=e.i(54156),t=e.i(35491),a=e.i(1894),n=e.i(43619),s=e.i(98895),l=e.i(13470);let i=(0,e.i(70451).default)("EllipsisVertical",[["circle",{cx:"12",cy:"12",r:"1",key:"41hilf"}],["circle",{cx:"12",cy:"5",r:"1",key:"gxeob9"}],["circle",{cx:"12",cy:"19",r:"1",key:"lyex9k"}]]);var o=e.i(42494),d=e.i(10527),c=e.i(5953),u=e.i(58280),f=e.i(20918),p=e.i(59581),g=e.i(54331),x=e.i(94192),h=e.i(85846);let b=e=>Math.round(e).toLocaleString();function m(){let[e,m]=(0,t.useState)([]),[y,v]=(0,t.useState)([]),[k,j]=(0,t.useState)(""),[w,N]=(0,t.useState)("ALL"),[C,S]=(0,t.useState)(!0),[P,A]=(0,t.useState)(null);(0,t.useEffect)(()=>{S(!0),(0,s.api)("/api/deals").then(e=>{m(e),E(e,k,w)}).finally(()=>S(!1))},[]);let E=(e,r,t)=>{let a=e;r.trim()&&(a=a.filter(e=>e.address?.toLowerCase().includes(r.toLowerCase()))),"ALL"!==t&&(a=a.filter(e=>e.status===t)),v(a)},M=async e=>{if(confirm("Are you sure you want to delete this deal?"))try{await (0,s.api)(`/api/deals/${e}`,{method:"DELETE"}),m(r=>r.filter(r=>r._id!==e)),v(r=>r.filter(r=>r._id!==e)),A(null)}catch(e){console.error("Failed to delete deal:",e)}},_=y.reduce((e,r)=>e+(r.adjustedArv||r.baseArv||0),0),L=y.filter(e=>"PASS"===e.status).length,O=y.filter(e=>"FAIL"===e.status).length;return(0,r.jsx)(a.AdminLayout,{children:(0,r.jsxs)("div",{className:"p-8 max-w-7xl mx-auto",children:[(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-gray-900 dark:text-gray-50 mb-2",children:"Deals"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"Manage and track all your real estate deals"})]}),(0,r.jsx)(l.default,{href:"/deals/new",children:(0,r.jsxs)(n.Button,{className:"flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-all",children:[(0,r.jsx)(o.Plus,{className:"w-5 h-5"}),"New Deal"]})})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-4 mb-8",children:[(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2",children:"Total Deals"}),(0,r.jsx)("p",{className:"text-3xl font-bold text-gray-900 dark:text-gray-50",children:y.length})]}),(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2",children:"Active"}),(0,r.jsx)("p",{className:"text-3xl font-bold text-emerald-600 dark:text-emerald-400",children:L})]}),(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2",children:"Failed"}),(0,r.jsx)("p",{className:"text-3xl font-bold text-red-600 dark:text-red-400",children:O})]}),(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700 p-4",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wide mb-2",children:"Total ARV"}),(0,r.jsxs)("p",{className:"text-3xl font-bold text-blue-600 dark:text-blue-400",children:["$",b(_/1e6),"M"]})]})]})]}),(0,r.jsx)("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-4 mb-6",children:(0,r.jsxs)("div",{className:"flex flex-col md:flex-row gap-4",children:[(0,r.jsx)("div",{className:"flex-1",children:(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)(f.Search,{className:"absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"}),(0,r.jsx)("input",{type:"text",placeholder:"Search by address...",value:k,onChange:r=>{var t;j(t=r.target.value),E(e,t,w)},className:"w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 rounded-lg text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"})]})}),(0,r.jsx)("div",{className:"flex gap-2",children:["ALL","PASS","FAIL"].map(t=>(0,r.jsx)("button",{onClick:()=>{N(t),E(e,k,t)},className:`px-4 py-2 rounded-lg font-medium text-sm transition-all ${w===t?"bg-blue-600 text-white":"bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600"}`,children:"ALL"===t?"All Deals":"PASS"===t?"Approved":"Failed"},t))})]})}),C?(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:[...Array(6)].map((e,t)=>(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-6 animate-pulse",children:[(0,r.jsx)("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-3/4 mb-4"}),(0,r.jsx)("div",{className:"h-8 bg-gray-200 dark:bg-gray-700 rounded w-1/2 mb-6"}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsx)("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded"}),(0,r.jsx)("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded w-4/5"})]})]},t))}):0===y.length?(0,r.jsxs)("div",{className:"text-center py-16",children:[(0,r.jsx)(u.Home,{className:"w-16 h-16 text-gray-300 dark:text-gray-600 mx-auto mb-4"}),(0,r.jsx)("h3",{className:"text-lg font-semibold text-gray-900 dark:text-gray-50 mb-2",children:"No deals found"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400 mb-6",children:k||"ALL"!==w?"Try adjusting your filters":"Create your first deal to get started"}),!k&&"ALL"===w&&(0,r.jsx)(l.default,{href:"/deals/new",children:(0,r.jsx)(n.Button,{className:"bg-blue-600 hover:bg-blue-700 text-white",children:"Create New Deal"})})]}):(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6",children:y.map(e=>{let t=(e=>{switch(e){case"PASS":return{color:"bg-emerald-50 dark:bg-emerald-950",textColor:"text-emerald-700 dark:text-emerald-300",borderColor:"border-emerald-200 dark:border-emerald-800",badgeColor:"bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",icon:x.CheckCircle2,label:"Approved"};case"FAIL":return{color:"bg-red-50 dark:bg-red-950",textColor:"text-red-700 dark:text-red-300",borderColor:"border-red-200 dark:border-red-800",badgeColor:"bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",icon:h.AlertCircle,label:"Failed"};default:return{color:"bg-gray-50 dark:bg-gray-800",textColor:"text-gray-700 dark:text-gray-300",borderColor:"border-gray-200 dark:border-gray-700",badgeColor:"bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300",icon:h.AlertCircle,label:e}}})(e.status),a=t.icon,n=e.calculator?.purchasePrice||0,s=e.calculator?.closingCosts||0,o=e.calculator?.holdingCosts||0,f=(e.calculator?.rehabCostPerSqft||0)*(e.subject?.squareFeet||0),m=(e.calculator?.realtorFeesPercent||0)/100*(e.adjustedArv||e.baseArv||0),y=(e.adjustedArv||e.baseArv||0)-(n+s+o+f+m),v=n>0?y/n*100:0;return(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-all duration-300 overflow-hidden group",children:[(0,r.jsxs)("div",{className:`${t.color} border-b ${t.borderColor} p-4 flex items-start justify-between`,children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)(a,{className:`w-5 h-5 ${t.textColor}`}),(0,r.jsx)("span",{className:`text-sm font-semibold ${t.textColor}`,children:t.label})]}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("button",{onClick:()=>A(P===e._id?null:e._id),className:"p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded transition-all",children:(0,r.jsx)(i,{className:"w-4 h-4 text-gray-600 dark:text-gray-400"})}),P===e._id&&(0,r.jsxs)("div",{className:"absolute right-0 mt-2 bg-white dark:bg-gray-700 rounded-lg shadow-xl border border-gray-200 dark:border-gray-600 z-10 min-w-[150px]",children:[(0,r.jsxs)(l.default,{href:`/deals/${e._id}`,className:"flex items-center gap-2 px-4 py-2 text-sm hover:bg-gray-100 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300",children:[(0,r.jsx)(g.Eye,{className:"w-4 h-4"})," View"]}),(0,r.jsxs)("button",{onClick:()=>M(e._id),className:"w-full flex items-center gap-2 px-4 py-2 text-sm hover:bg-red-50 dark:hover:bg-red-950 text-red-600 dark:text-red-400",children:[(0,r.jsx)(p.Trash2,{className:"w-4 h-4"})," Delete"]})]})]})]}),(0,r.jsxs)("div",{className:"p-6",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-50 mb-4 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors",children:e.subject?.address}),(0,r.jsxs)("div",{className:"space-y-3 mb-6",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400",children:[(0,r.jsx)(c.DollarSign,{className:"w-4 h-4"}),(0,r.jsx)("span",{className:"text-sm",children:"Purchase Price"})]}),(0,r.jsxs)("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:["$",b(e.calculator?.purchasePrice||0)]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400",children:[(0,r.jsx)(u.Home,{className:"w-4 h-4"}),(0,r.jsx)("span",{className:"text-sm",children:"ARV"})]}),(0,r.jsxs)("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:["$",b(e.adjustedArv||e.baseArv||0)]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 text-gray-600 dark:text-gray-400",children:[(0,r.jsx)(d.TrendingUp,{className:"w-4 h-4"}),(0,r.jsx)("span",{className:"text-sm",children:"Profit"})]}),(0,r.jsxs)("span",{className:`font-semibold text-lg ${v>=0?"text-emerald-600 dark:text-emerald-400":"text-red-600 dark:text-red-400"}`,children:[(Math.round(100*v)/100).toFixed(2),"%"]})]})]}),(0,r.jsx)("div",{className:"mb-6",children:(0,r.jsx)("div",{className:"w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden",children:(0,r.jsx)("div",{className:`h-full bg-gradient-to-r ${v>=0?"from-blue-500 to-blue-600 dark:from-blue-400 dark:to-blue-500":"from-red-500 to-red-600 dark:from-red-400 dark:to-red-500"}`,style:{width:`${Math.max(Math.abs(v),10)}%`}})})}),(0,r.jsx)(l.default,{href:`/deals/${e._id}`,className:"block",children:(0,r.jsx)("button",{className:"w-full py-2 px-3 bg-blue-50 dark:bg-blue-950 text-blue-600 dark:text-blue-400 rounded-lg font-medium text-sm hover:bg-blue-100 dark:hover:bg-blue-900 transition-all",children:"View Details"})})]})]},e._id)})})]})})}e.s(["default",()=>m],85177)}]);