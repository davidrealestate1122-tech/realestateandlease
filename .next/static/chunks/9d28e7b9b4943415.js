(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,14057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return i}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});function o(e){let t={};for(let[r,a]of e.entries()){let e=t[r];void 0===e?t[r]=a:Array.isArray(e)?e.push(a):t[r]=[e,a]}return t}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function i(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(r,s(e));else t.set(r,s(a));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,a]of r.entries())e.append(t,a)}return e}},70249,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return i},formatWithValidation:function(){return c},urlObjectKeys:function(){return l}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=e.r(4960)._(e.r(67133)),s=/https?|ftp|gopher|file/;function i(e){let{auth:t,hostname:r}=e,a=e.protocol||"",n=e.pathname||"",i=e.hash||"",l=e.query||"",c=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?c=t+e.host:r&&(c=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(c+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let u=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||s.test(a))&&!1!==c?(c="//"+(c||""),n&&"/"!==n[0]&&(n="/"+n)):c||(c=""),i&&"#"!==i[0]&&(i="#"+i),u&&"?"!==u[0]&&(u="?"+u),n=n.replace(/[?#]/g,encodeURIComponent),u=u.replace("#","%23"),`${a}${c}${n}${u}${i}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function c(e){return i(e)}},47550,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,t){let r=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=o(e,a)),t&&(n.current=o(t,a))},[e,t])}function o(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},99901,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DecodeError:function(){return y},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return v},NormalizeError:function(){return x},PageNotFoundError:function(){return b},SP:function(){return m},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return s},getDisplayName:function(){return d},getLocationOrigin:function(){return c},getURL:function(){return u},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return j}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let t,r=!1;return(...a)=>(r||(r=!0,t=e(...a)),t)}let i=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>i.test(e);function c(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function u(){let{href:e}=window.location,t=c();return e.substring(t.length)}function d(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&f(r))return a;if(!a)throw Object.defineProperty(Error(`"${d(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let m="undefined"!=typeof performance,g=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class y extends Error{}class x extends Error{}class b extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return o}});let a=e.r(99901),n=e.r(13042);function o(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},57832,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return y},useLinkStatus:function(){return b}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let o=e.r(4960),s=e.r(54156),i=o._(e.r(35491)),l=e.r(70249),c=e.r(30944),u=e.r(47550),d=e.r(99901),f=e.r(4471);e.r(14057);let p=e.r(11535),h=e.r(2239),m=e.r(83671);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function y(t){var r;let a,n,o,[l,y]=(0,i.useOptimistic)(p.IDLE_LINK_STATUS),b=(0,i.useRef)(null),{href:v,as:k,children:j,prefetch:N=null,passHref:w,replace:P,shallow:M,scroll:E,onClick:S,onMouseEnter:O,onTouchStart:_,legacyBehavior:C=!1,onNavigate:R,ref:L,unstable_dynamicOnHover:T,...A}=t;a=j,C&&("string"==typeof a||"number"==typeof a)&&(a=(0,s.jsx)("a",{children:a}));let I=i.default.useContext(c.AppRouterContext),z=!1!==N,$=!1!==N?null===(r=N)||"auto"===r?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:U,as:D}=i.default.useMemo(()=>{let e=g(v);return{href:e,as:k?g(k):e}},[v,k]);if(C){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=i.default.Children.only(a)}let F=C?n&&"object"==typeof n&&n.ref:L,B=i.default.useCallback(e=>(null!==I&&(b.current=(0,p.mountLinkInstance)(e,U,I,$,z,y)),()=>{b.current&&((0,p.unmountLinkForCurrentNavigation)(b.current),b.current=null),(0,p.unmountPrefetchableInstance)(e)}),[z,U,I,$,y]),V={ref:(0,u.useMergedRef)(B,F),onClick(t){C||"function"!=typeof S||S(t),C&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!I||t.defaultPrevented||function(t,r,a,n,o,s,l){if("undefined"!=typeof window){let c,{nodeName:u}=t.currentTarget;if("A"===u.toUpperCase()&&((c=t.currentTarget.getAttribute("target"))&&"_self"!==c||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){o&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:d}=e.r(30800);i.default.startTransition(()=>{d(a||r,o?"replace":"push",s??!0,n.current)})}}(t,U,D,b,P,E,R)},onMouseEnter(e){C||"function"!=typeof O||O(e),C&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),I&&z&&(0,p.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){C||"function"!=typeof _||_(e),C&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),I&&z&&(0,p.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,d.isAbsoluteUrl)(D)?V.href=D:C&&!w&&("a"!==n.type||"href"in n.props)||(V.href=(0,f.addBasePath)(D)),o=C?i.default.cloneElement(n,V):(0,s.jsx)("a",{...A,...V,children:a}),(0,s.jsx)(x.Provider,{value:l,children:o})}e.r(57832);let x=(0,i.createContext)(p.IDLE_LINK_STATUS),b=()=>(0,i.useContext)(x);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},1894,70451,50932,90354,e=>{"use strict";var t=e.i(54156),r=e.i(35264),a=e.i(76569),n=e.i(35491),o=e.i(13470);let s=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var i={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let l=(0,n.forwardRef)(({color:e="currentColor",size:t=24,strokeWidth:r=2,absoluteStrokeWidth:a,className:o="",children:l,iconNode:c,...u},d)=>(0,n.createElement)("svg",{ref:d,...i,width:t,height:t,stroke:e,strokeWidth:a?24*Number(r)/Number(t):r,className:s("lucide",o),...u},[...c.map(([e,t])=>(0,n.createElement)(e,t)),...Array.isArray(l)?l:[l]])),c=(e,t)=>{let r=(0,n.forwardRef)(({className:r,...a},o)=>(0,n.createElement)(l,{ref:o,iconNode:t,className:s(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,r),...a}));return r.displayName=`${e}`,r};e.s(["default",()=>c],70451);let u=c("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),d=c("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>d],50932);let f=c("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>f],90354);let p=[{href:"/dashboard",label:"Dashboard",icon:u},{href:"/deals",label:"Deals",icon:d},{href:"/daily-summary",label:"Daily Summary",icon:f},{href:"/rules",label:"Rules",icon:c("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},{href:"/users",label:"Users",icon:c("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])}];function h(){let e=(0,a.usePathname)();return(0,t.jsxs)("div",{className:"w-64 bg-card border-r border-border flex flex-col",children:[(0,t.jsx)("div",{className:"p-6 border-b border-border",children:(0,t.jsx)("h1",{className:"text-xl font-bold text-foreground",children:"Real Estate Admin"})}),(0,t.jsx)("nav",{className:"flex-1 p-4 space-y-2",children:p.map(r=>{let a=r.icon,n=e===r.href;return(0,t.jsxs)(o.default,{href:r.href,className:`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${n?"bg-primary text-primary-foreground":"text-foreground hover:bg-muted"}`,children:[(0,t.jsx)(a,{className:"w-5 h-5"}),(0,t.jsx)("span",{className:"font-medium",children:r.label})]},r.href)})})]})}var m=e.i(43619);let g=c("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),y=c("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),x=c("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function b(){let{admin:e,logout:o}=(0,r.useAuth)(),s=(0,a.useRouter)(),[i,l]=(0,n.useState)(!1);return(0,n.useEffect)(()=>{l(document.documentElement.classList.contains("dark"))},[]),(0,t.jsx)("header",{className:"border-b border-border bg-card",children:(0,t.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-lg font-semibold text-foreground",children:"Welcome back"}),(0,t.jsx)("p",{className:"text-sm text-muted-foreground",children:e?.email})]}),(0,t.jsxs)("div",{className:"flex items-center gap-4",children:[(0,t.jsx)(m.Button,{variant:"ghost",size:"icon",onClick:()=>{document.documentElement.classList.toggle("dark"),l(!i)},className:"rounded-lg",children:i?(0,t.jsx)(x,{className:"w-5 h-5"}):(0,t.jsx)(y,{className:"w-5 h-5"})}),(0,t.jsxs)(m.Button,{variant:"ghost",size:"sm",onClick:()=>{o(),s.push("/login")},className:"flex items-center gap-2",children:[(0,t.jsx)(g,{className:"w-4 h-4"}),"Logout"]})]})]})})}function v({children:e}){let{isAuthenticated:o}=(0,r.useAuth)(),s=(0,a.useRouter)(),[i,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),(0,n.useEffect)(()=>{i&&!o&&s.push("/login")},[i,o,s]),i&&o)?(0,t.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,t.jsx)(h,{}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,t.jsx)(b,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>v],1894)},66950,e=>{"use strict";var t=e.i(54156),r=e.i(35491),a=e.i(1894);let n=(0,e.i(70451).default)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),o={COMP:{label:"Comparables",icon:"📊"},DOM:{label:"Dominant Factors",icon:"🎯"},ARV:{label:"After Repair Value",icon:"🏠"},PROFIT:{label:"Profitability",icon:"💰"}};function s(){let[e,s]=(0,r.useState)([]),[i,l]=(0,r.useState)(null),[c,u]=(0,r.useState)(null),[d,f]=(0,r.useState)(!0),[p,h]=(0,r.useState)(!1);(0,r.useEffect)(()=>{let e="dark"===localStorage.getItem("theme")||null===localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches;h(e),document.documentElement.classList.toggle("dark",e),fetch("/api/rules").then(e=>e.json()).then(e=>{s(e),f(!1)}).catch(()=>f(!1))},[]);let m=async(e,t)=>{l(null),u(e),setTimeout(()=>u(null),2e3),await fetch(`/api/rules/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:t})}).catch(console.error)},g=e.reduce((e,t)=>(e[t.engine]=e[t.engine]||[],e[t.engine].push(t),e),{});return d?(0,t.jsx)(a.AdminLayout,{children:(0,t.jsx)("div",{className:"p-8 flex items-center justify-center min-h-screen",children:(0,t.jsxs)("div",{className:"text-center space-y-4",children:[(0,t.jsx)("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),(0,t.jsx)("p",{className:"text-muted-foreground",children:"Loading rules..."})]})})}):(0,t.jsxs)(a.AdminLayout,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700&family=Inter:wght@400;500;600&display=swap');
        
        :root {
          --bg-primary: #f8fafc;
          --bg-secondary: #ffffff;
          --bg-tertiary: #f1f5f9;
          --border-color: #e2e8f0;
          --border-color-light: #f1f5f9;
          --text-primary: #1e293b;
          --text-secondary: #64748b;
          --text-tertiary: #94a3b8;
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.04);
          --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.06);
          --shadow-hover: 0 2px 8px rgba(0, 0, 0, 0.04);
        }

        :root.dark {
          --bg-primary: #000000;
          --bg-secondary: #111111;
          --bg-tertiary: #1a1a1a;
          --border-color: #2a2a2a;
          --border-color-light: #333333;
          --text-primary: #ffffff;
          --text-secondary: #d1d5db;
          --text-tertiary: #9ca3af;
          --shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.5);
          --shadow-md: 0 4px 12px rgba(0, 0, 0, 0.6);
          --shadow-hover: 0 2px 8px rgba(0, 0, 0, 0.5);
        }
        
        .rules-container {
          font-family: 'Inter', sans-serif;
          background: var(--bg-primary);
          min-height: 100vh;
          color: var(--text-primary);
          transition: background-color 0.3s ease, color 0.3s ease;
        }
        
        .engine-card {
          animation: fadeInUp 0.6s ease-out;
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          box-shadow: var(--shadow-sm);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .engine-card:hover {
          border-color: var(--border-color-light);
          box-shadow: var(--shadow-md);
          transform: translateY(-2px);
        }
        
        .engine-header {
          background: var(--bg-tertiary);
          color: var(--text-primary);
          position: relative;
          overflow: hidden;
          border-bottom: 1px solid var(--border-color);
        }
        
        .engine-header::before {
          content: '';
          position: absolute;
          top: 0;
          right: 0;
          width: 300px;
          height: 300px;
          background: radial-gradient(circle, rgba(59, 130, 246, 0.03) 0%, transparent 70%);
          border-radius: 50%;
          transform: translate(100px, -100px);
        }
        
        .engine-icon {
          font-size: 2rem;
          margin-right: 12px;
        }
        
        .rule-item {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color-light);
          border-radius: 8px;
          padding: 20px;
          transition: all 0.3s ease;
          animation: fadeInUp 0.6s ease-out both;
        }
        
        .rule-item:hover {
          background: var(--bg-tertiary);
          border-color: var(--border-color);
          box-shadow: var(--shadow-hover);
        }
        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .rule-key {
          font-family: 'Syne', sans-serif;
          font-size: 1.125rem;
          font-weight: 600;
          color: var(--text-primary);
          margin-bottom: 8px;
          letter-spacing: -0.01em;
        }
        
        .rule-description {
          font-size: 0.875rem;
          color: var(--text-secondary);
          margin-bottom: 16px;
          line-height: 1.5;
        }
        
        .rule-input-group {
          display: flex;
          gap: 12px;
          align-items: center;
        }
        
        .rule-input {
          padding: 10px 14px;
          border: 1px solid var(--border-color);
          border-radius: 6px;
          font-size: 0.95rem;
          transition: all 0.2s ease;
          background: var(--bg-primary);
          font-weight: 500;
          color: var(--text-primary);
        }
        
        .rule-input:focus {
          outline: none;
          border-color: #3b82f6;
          box-shadow: 0 0 0 2px rgba(59, 130, 246, 0.1);
        }
        
        .rule-input:disabled {
          background: var(--bg-tertiary);
          color: var(--text-tertiary);
          cursor: not-allowed;
        }
        
        .rule-unit {
          font-size: 0.875rem;
          color: var(--text-tertiary);
          font-weight: 500;
          min-width: 40px;
        }
        
        .save-indicator {
          display: flex;
          align-items: center;
          gap: 6px;
          padding: 6px 12px;
          background: #dcfce7;
          color: #166534;
          border-radius: 6px;
          font-size: 0.8rem;
          font-weight: 500;
          animation: slideInRight 0.3s ease-out;
        }

        :root.dark .save-indicator {
          background: rgba(16, 185, 129, 0.2);
          color: #86efac;
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        .locked-badge {
          display: inline-block;
          background: #fee2e2;
          color: #991b1b;
          padding: 4px 10px;
          border-radius: 4px;
          font-size: 0.75rem;
          font-weight: 600;
          text-transform: uppercase;
          letter-spacing: 0.5px;
          margin-top: 8px;
        }

        :root.dark .locked-badge {
          background: rgba(239, 68, 68, 0.2);
          color: #fca5a5;
        }
      `}),(0,t.jsxs)("div",{className:"rules-container",children:[(0,t.jsx)("div",{className:"px-8 py-8",children:(0,t.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,t.jsx)("h1",{className:"text-4xl font-bold mb-2",style:{fontFamily:"'Syne', sans-serif"},children:"Underwriting Rules"}),(0,t.jsx)("p",{className:"text-slate-500 dark:text-slate-400 text-sm mb-8",children:"Phase 1 Configuration"})]})}),(0,t.jsx)("div",{className:"px-8 pb-12 max-w-6xl mx-auto",children:(0,t.jsx)("div",{className:"space-y-8",children:Object.entries(g).map(([e,r],a)=>{let s=o[e];return(0,t.jsxs)("div",{className:"engine-card rounded-12",style:{animationDelay:`${.1*a}s`},children:[(0,t.jsx)("div",{className:"engine-header px-8 py-6 relative",children:(0,t.jsxs)("div",{className:"flex items-center relative z-10",children:[(0,t.jsx)("span",{className:"engine-icon",children:s.icon}),(0,t.jsxs)("div",{children:[(0,t.jsx)("h2",{className:"text-2xl font-bold",style:{fontFamily:"'Syne', sans-serif"},children:s.label}),(0,t.jsxs)("p",{className:"text-slate-500 dark:text-slate-400 text-sm mt-1",children:[r.length," rules configured"]})]})]})}),(0,t.jsx)("div",{className:"p-8 space-y-4",children:r.map((e,r)=>(0,t.jsxs)("div",{className:"rule-item",style:{animationDelay:`${.1*a+.05*r}s`},children:[(0,t.jsx)("div",{className:"flex justify-between items-start mb-2",children:(0,t.jsxs)("div",{className:"flex-1",children:[(0,t.jsx)("div",{className:"rule-key",children:e.key}),(0,t.jsx)("p",{className:"rule-description",children:e.description}),e.locked&&(0,t.jsx)("div",{className:"locked-badge",children:"🔒 Locked"})]})}),(0,t.jsxs)("div",{className:"flex justify-between items-center gap-4",children:[(0,t.jsxs)("div",{className:"rule-input-group flex-1",children:[(0,t.jsx)("input",{type:"number",defaultValue:e.value,onBlur:t=>m(e._id,Number(t.target.value)),onFocus:()=>l(e._id),className:"rule-input flex-1",disabled:e.locked,step:"0.01"}),e.unit&&(0,t.jsx)("span",{className:"rule-unit",children:e.unit})]}),c===e._id&&(0,t.jsxs)("div",{className:"save-indicator",children:[(0,t.jsx)(n,{size:16,strokeWidth:3}),(0,t.jsx)("span",{children:"Saved"})]})]})]},e._id))})]},e)})})})]})]})}e.s(["default",()=>s],66950)}]);