(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49681,70451,e=>{"use strict";var t=e.i(35491);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,t.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...a,width:n,height:n,stroke:e,strokeWidth:o?24*Number(i)/Number(n):i,className:r("lucide",s),...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),i=(e,a)=>{let i=(0,t.forwardRef)(({className:i,...o},s)=>(0,t.createElement)(n,{ref:s,iconNode:a,className:r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,i),...o}));return i.displayName=`${e}`,i};e.s(["default",()=>i],70451);let o=i("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>o],49681)},50932,e=>{"use strict";let t=(0,e.i(70451).default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>t],50932)},60499,e=>{"use strict";let t=(0,e.i(70451).default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>t],60499)},14057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});function i(e){let t={};for(let[r,a]of e.entries()){let e=t[r];void 0===e?t[r]=a:Array.isArray(e)?e.push(a):t[r]=[e,a]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(r,o(e));else t.set(r,o(a));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,a]of r.entries())e.append(t,a)}return e}},70249,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i=e.r(4960)._(e.r(67133)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,a=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${n}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},47550,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,t){let r=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=n.current;t&&(n.current=null,t())}else e&&(r.current=i(e,a)),t&&(n.current=i(t,a))},[e,t])}function i(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},99901,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return x},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return o},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return j}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...a)=>(r||(r=!0,t=e(...a)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&f(r))return a;if(!a)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let x="undefined"!=typeof performance,g=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return i}});let a=e.r(99901),n=e.r(13042);function i(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,n.hasBasePath)(r.pathname)}catch(e){return!1}}},57832,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return m},useLinkStatus:function(){return v}};for(var n in a)Object.defineProperty(r,n,{enumerable:!0,get:a[n]});let i=e.r(4960),o=e.r(54156),s=i._(e.r(35491)),l=e.r(70249),d=e.r(30944),c=e.r(47550),p=e.r(99901),f=e.r(4471);e.r(14057);let u=e.r(11535),h=e.r(2239),x=e.r(83671);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function m(t){var r;let a,n,i,[l,m]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:y,as:k,children:j,prefetch:w=null,passHref:N,replace:M,shallow:z,scroll:C,onClick:S,onMouseEnter:P,onTouchStart:E,legacyBehavior:L=!1,onNavigate:T,ref:O,unstable_dynamicOnHover:D,...A}=t;a=j,L&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let U=s.default.useContext(d.AppRouterContext),_=!1!==w,R=!1!==w?null===(r=w)||"auto"===r?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,{href:F,as:$}=s.default.useMemo(()=>{let e=g(y);return{href:e,as:k?g(k):e}},[y,k]);if(L){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(a)}let B=L?n&&"object"==typeof n&&n.ref:O,I=s.default.useCallback(e=>(null!==U&&(v.current=(0,u.mountLinkInstance)(e,F,U,R,_,m)),()=>{v.current&&((0,u.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,u.unmountPrefetchableInstance)(e)}),[_,F,U,R,m]),q={ref:(0,c.useMergedRef)(I,B),onClick(t){L||"function"!=typeof S||S(t),L&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(t),!U||t.defaultPrevented||function(t,r,a,n,i,o,l){if("undefined"!=typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){i&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(30800);s.default.startTransition(()=>{p(a||r,i?"replace":"push",o??!0,n.current)})}}(t,F,$,v,M,C,T)},onMouseEnter(e){L||"function"!=typeof P||P(e),L&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),U&&_&&(0,u.onNavigationIntent)(e.currentTarget,!0===D)},onTouchStart:function(e){L||"function"!=typeof E||E(e),L&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),U&&_&&(0,u.onNavigationIntent)(e.currentTarget,!0===D)}};return(0,p.isAbsoluteUrl)($)?q.href=$:L&&!N&&("a"!==n.type||"href"in n.props)||(q.href=(0,f.addBasePath)($)),i=L?s.default.cloneElement(n,q):(0,o.jsx)("a",{...A,...q,children:a}),(0,o.jsx)(b.Provider,{value:l,children:i})}e.r(57832);let b=(0,s.createContext)(u.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},1894,12514,46645,58280,e=>{"use strict";var t=e.i(54156),r=e.i(35264),a=e.i(76569),n=e.i(35491),i=e.i(13470),o=e.i(70451);let s=(0,o.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>s],12514);var l=e.i(50932);let d=(0,o.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,o.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);var p=e.i(60499);let f=(0,o.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>f],58280);var u=e.i(49681);let h=[{href:"/dashboard",label:"Dashboard",icon:s},{label:"Property",icon:l.Building2,subItems:[{href:"/execution",label:"Property List",icon:f},{href:"#",label:"Property Detail",icon:u.FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c},{href:"/templates",label:"Templates",icon:u.FileText},{href:"/profiles",label:"Profiles",icon:c}];function x({item:e,isActive:r,pathname:a}){let[o,s]=(0,n.useState)(!1),l=e.icon,d=e.subItems&&e.subItems.length>0;return((0,n.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&s(!0)},[a,e.label]),d)?(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:t=>{if(t.preventDefault(),d&&!o&&"Property"===e.label){let t=e.subItems?.[0];if(t?.href){window.location.href=t.href;return}}s(!o)},className:`re-nav-item w-full ${r?"active":""}`,children:[(0,t.jsx)(l,{className:"re-nav-icon"}),(0,t.jsx)("span",{className:"re-nav-label",children:e.label}),(0,t.jsx)(p.ChevronDown,{className:`re-nav-chevron ${o?"rotated":""}`})]}),o&&(0,t.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let r=e.icon,n=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,t.jsxs)(i.default,{href:e.href||"#",className:`re-subnav-item ${n?"active":""}`,children:[(0,t.jsx)(r,{className:"re-subnav-icon"}),(0,t.jsx)("span",{children:e.label})]},e.label)})})]}):(0,t.jsxs)(i.default,{href:e.href||"#",className:`re-nav-item ${r?"active":""}`,children:[(0,t.jsx)(l,{className:"re-nav-icon"}),(0,t.jsx)("span",{className:"re-nav-label",children:e.label})]})}function g(){let e=(0,a.usePathname)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("div",{className:"re-sidebar",children:[(0,t.jsxs)("div",{className:"re-sidebar-brand",children:[(0,t.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,t.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,t.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,t.jsx)("div",{className:"re-nav-section",children:(0,t.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,t.jsx)("nav",{className:"re-nav",children:h.map((r,a)=>{let n=!1;return r.href?n=e===r.href:"Property"===r.label&&(n=e.startsWith("/execution")),(0,t.jsxs)("div",{children:["Rules"===r.label&&(0,t.jsx)("div",{className:"re-nav-divider"}),(0,t.jsx)(x,{item:r,isActive:n,pathname:e})]},r.label)})}),(0,t.jsx)("div",{className:"re-sidebar-footer",children:(0,t.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,t.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,t.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let m=(0,o.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function b(){let{admin:e,logout:i}=(0,r.useAuth)(),o=(0,a.useRouter)(),[s,l]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[f,u]=(0,n.useState)(!1);(0,n.useEffect)(()=>{l(localStorage.getItem("email")??"")},[]),(0,n.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let t=setInterval(e,1e3);return()=>clearInterval(t)},[]);let h=s?s.split("@")[0].slice(0,2).toUpperCase():"AD",x=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("header",{className:"re-header",children:[(0,t.jsxs)("div",{className:"re-header-left",children:[(0,t.jsxs)("div",{className:"re-brand",children:[(0,t.jsx)("div",{className:"re-brand-icon",children:(0,t.jsx)("div",{className:"re-brand-icon-inner"})}),(0,t.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,t.jsx)("div",{className:"re-divider-v"}),(0,t.jsxs)("div",{className:"re-breadcrumb",children:[(0,t.jsx)("span",{children:"Platform"}),(0,t.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,t.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,t.jsxs)("div",{className:"re-header-center",children:[(0,t.jsx)("div",{className:"re-time",children:d}),(0,t.jsx)("div",{className:"re-date",children:x})]}),(0,t.jsxs)("div",{className:"re-header-right",children:[(0,t.jsxs)("div",{className:"re-status",children:[(0,t.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,t.jsxs)("div",{style:{position:"relative"},children:[(0,t.jsxs)("button",{className:`re-user-btn ${f?"open":""}`,onClick:()=>u(e=>!e),onBlur:()=>setTimeout(()=>u(!1),150),children:[(0,t.jsx)("div",{className:"re-avatar",children:h}),(0,t.jsxs)("div",{className:"re-user-info",children:[(0,t.jsx)("div",{className:"re-user-name",children:s||"Administrator"}),(0,t.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,t.jsx)(p.ChevronDown,{className:"re-chevron",size:13})]}),f&&(0,t.jsxs)("div",{className:"re-dropdown",children:[(0,t.jsxs)("div",{className:"re-dropdown-header",children:[(0,t.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,t.jsx)("div",{className:"re-dropdown-email",children:s||"Administrator"})]}),(0,t.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{i(),o.push("/login")},children:[(0,t.jsx)(m,{size:14}),"Sign out"]})]})]})]})]})]})}function v({children:e}){let{isAuthenticated:i}=(0,r.useAuth)(),o=(0,a.useRouter)(),[s,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),(0,n.useEffect)(()=>{s&&!i&&o.push("/login")},[s,i,o]),s&&i)?(0,t.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,t.jsx)(g,{}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,t.jsx)(b,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>v],1894)},85846,e=>{"use strict";let t=(0,e.i(70451).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>t],85846)},1573,e=>{"use strict";let t=(0,e.i(70451).default)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>t],1573)},18230,e=>{"use strict";let t=(0,e.i(70451).default)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["RefreshCw",()=>t],18230)},46439,95257,e=>{"use strict";var t=e.i(70451);let r=(0,t.default)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);e.s(["CheckCircle",()=>r],46439);let a=(0,t.default)("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);e.s(["Landmark",()=>a],95257)},67213,e=>{"use strict";let t=(0,e.i(70451).default)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>t],67213)},13539,e=>{"use strict";let t=(0,e.i(70451).default)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);e.s(["ChevronUp",()=>t],13539)},68689,e=>{"use strict";let t=(0,e.i(70451).default)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);e.s(["Save",()=>t],68689)},84109,e=>{"use strict";let t=(0,e.i(70451).default)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);e.s(["Download",()=>t],84109)},84906,e=>{"use strict";let t=(0,e.i(70451).default)("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);e.s(["Edit2",()=>t],84906)},52354,e=>{"use strict";let t=(0,e.i(70451).default)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);e.s(["Clock",()=>t],52354)},10077,e=>{"use strict";let t=(0,e.i(70451).default)("File",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}]]);e.s(["File",()=>t],10077)},18407,e=>{"use strict";let t=(0,e.i(70451).default)("Tag",[["path",{d:"M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z",key:"vktsd0"}],["circle",{cx:"7.5",cy:"7.5",r:".5",fill:"currentColor",key:"kqv944"}]]);e.s(["Tag",()=>t],18407)},46603,76206,e=>{"use strict";var t=e.i(70451);let r=(0,t.default)("SquareCheckBig",[["path",{d:"M21 10.5V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.5",key:"1uzm8b"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);e.s(["CheckSquare",()=>r],46603);let a=(0,t.default)("Layers",[["path",{d:"m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z",key:"8b97xw"}],["path",{d:"m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65",key:"dd6zsq"}],["path",{d:"m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65",key:"ep9fru"}]]);e.s(["Layers",()=>a],76206)},90354,e=>{"use strict";let t=(0,e.i(70451).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],90354)},33366,e=>{"use strict";let t=(0,e.i(70451).default)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>t],33366)},20918,54331,e=>{"use strict";var t=e.i(70451);let r=(0,t.default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);e.s(["Search",()=>r],20918);let a=(0,t.default)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>a],54331)},35922,e=>{"use strict";let t=(0,e.i(70451).default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>t],35922)},60247,e=>{"use strict";let t=(0,e.i(70451).default)("Upload",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"17 8 12 3 7 8",key:"t8dd8p"}],["line",{x1:"12",x2:"12",y1:"3",y2:"15",key:"widbto"}]]);e.s(["Upload",()=>t],60247)},63571,e=>{"use strict";var t=e.i(54156),r=e.i(35491),a=e.i(60247),n=e.i(10077),i=e.i(46439),o=e.i(85846),s=e.i(67213),l=e.i(35922),d=e.i(1894),c=e.i(48042);function p(){let[e,p]=(0,r.useState)(null),[f,u]=(0,r.useState)(!1),[h,x]=(0,r.useState)(!1),[g,m]=(0,r.useState)(null),[b,v]=(0,r.useState)(!1),[y,k]=(0,r.useState)(0),[j,w]=(0,r.useState)([]),[N,M]=(0,r.useState)(!1),z=e=>{e.preventDefault(),e.stopPropagation(),"dragenter"===e.type||"dragover"===e.type?v(!0):"dragleave"===e.type&&v(!1)},C=()=>{p(null),x(!1),m(null)},S=async()=>{if(!e)return void m("Please select a file first");u(!0),m(null),x(!1);try{let t=new FormData;t.append("file",e);let r=await fetch("/api/templates/upload",{method:"POST",body:t}),a=await r.json();if(!r.ok)throw Error(a.message||"Upload failed");x(!0),p(null),k(e=>e+1)}catch(e){m(e instanceof Error?e.message:"Upload failed")}finally{u(!1)}};return(0,t.jsxs)(d.AdminLayout,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .tp {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #f8f9fb;
          padding: 36px 40px;
        }

        .tp-header { margin-bottom: 32px; }
        .tp-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 30px;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .tp-subtitle {
          font-size: 13px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.03em;
        }

        .tp-stats-bar { display: flex; gap: 16px; margin-bottom: 28px; }
        .tp-stat {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px 22px;
          position: relative;
          overflow: hidden;
          flex: 1;
          transition: box-shadow 0.15s;
        }
        .tp-stat:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .tp-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 10px 10px 0 0;
          background: linear-gradient(90deg, rgba(196,162,96,0.85), rgba(196,162,96,0.3));
        }
        .tp-stat-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 4px;
        }
        .tp-stat-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px;
          font-weight: 600;
          color: #111827;
          line-height: 1;
        }
        .tp-stat-value.gold { color: #92700a; }
        .tp-stat-value.green { color: #166534; }
        .tp-stat-value.purple { color: #4f46e5; }

        .tp-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          margin-bottom: 0;
          position: relative;
        }
        .tp-card::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: linear-gradient(90deg, rgba(196,162,96,0.7), rgba(196,162,96,0.15));
        }
        .tp-card-body { padding: 28px 32px 32px; }

        .tp-dropzone {
          border: 2px dashed #e5e7eb;
          border-radius: 10px;
          padding: 48px 24px;
          text-align: center;
          transition: border-color 0.15s, background 0.15s;
          cursor: pointer;
        }
        .tp-dropzone:hover { border-color: rgba(196,162,96,0.45); background: rgba(196,162,96,0.02); }
        .tp-dropzone.active { border-color: rgba(196,162,96,0.6); background: rgba(196,162,96,0.05); }
        .tp-dropzone-icon {
          width: 60px; height: 60px;
          background: rgba(196,162,96,0.08);
          border: 1px solid rgba(196,162,96,0.2);
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .tp-dropzone-icon svg { width: 26px; height: 26px; color: #92700a; }
        .tp-dropzone-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 18px;
          font-weight: 500;
          color: #111827;
          margin-bottom: 6px;
        }
        .tp-dropzone-title span { color: #92700a; text-decoration: underline; text-underline-offset: 3px; }
        .tp-dropzone-formats { font-size: 12px; color: #9ca3af; font-weight: 300; margin-bottom: 4px; }
        .tp-dropzone-limit { font-size: 11px; color: #c4a260; letter-spacing: 0.06em; font-weight: 500; }

        .tp-file-row {
          display: flex; align-items: center; gap: 14px;
          background: #fafafa; border: 1px solid #e5e7eb;
          border-radius: 8px; padding: 14px 16px;
        }
        .tp-file-icon {
          width: 40px; height: 40px;
          background: rgba(196,162,96,0.08); border: 1px solid rgba(196,162,96,0.2);
          border-radius: 8px; display: flex; align-items: center; justify-content: center; flex-shrink: 0;
        }
        .tp-file-icon svg { width: 18px; height: 18px; color: #92700a; }
        .tp-file-name { font-size: 13px; font-weight: 500; color: #111827; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 1; }
        .tp-file-size { font-size: 11px; color: #9ca3af; font-weight: 300; margin-top: 2px; }
        .tp-file-remove {
          background: none; border: 1px solid #e5e7eb; border-radius: 6px; padding: 6px;
          cursor: pointer; color: #9ca3af; display: flex; align-items: center; justify-content: center;
          transition: background 0.12s, border-color 0.12s, color 0.12s; flex-shrink: 0;
        }
        .tp-file-remove:hover { background: #fef2f2; border-color: #fecaca; color: #dc2626; }
        .tp-file-remove svg { width: 14px; height: 14px; }

        .tp-alert {
          display: flex; align-items: flex-start; gap: 12px;
          padding: 14px 16px; border-radius: 8px; margin-top: 16px;
        }
        .tp-alert.error { background: #fef2f2; border: 1px solid #fecaca; }
        .tp-alert.success { background: #f0fdf4; border: 1px solid #bbf7d0; }
        .tp-alert svg { width: 16px; height: 16px; flex-shrink: 0; margin-top: 1px; }
        .tp-alert.error svg { color: #dc2626; }
        .tp-alert.success svg { color: #16a34a; }
        .tp-alert-title { font-size: 12px; font-weight: 600; letter-spacing: 0.05em; text-transform: uppercase; margin-bottom: 2px; }
        .tp-alert.error .tp-alert-title { color: #991b1b; }
        .tp-alert.success .tp-alert-title { color: #166534; }
        .tp-alert-msg { font-size: 13px; font-weight: 300; }
        .tp-alert.error .tp-alert-msg { color: #b91c1c; }
        .tp-alert.success .tp-alert-msg { color: #15803d; }

        .tp-actions {
          display: flex; justify-content: flex-end; gap: 10px;
          margin-top: 24px; padding-top: 20px; border-top: 1px solid #f3f4f6;
        }
        .tp-btn-cancel {
          padding: 10px 20px; background: #fff; border: 1px solid #e5e7eb; border-radius: 7px;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 400; color: #6b7280;
          cursor: pointer; transition: background 0.12s, border-color 0.12s, color 0.12s;
        }
        .tp-btn-cancel:hover:not(:disabled) { background: #f9fafb; border-color: #d1d5db; color: #374151; }
        .tp-btn-cancel:disabled { opacity: 0.4; cursor: not-allowed; }
        .tp-btn-upload {
          display: flex; align-items: center; gap: 8px; padding: 10px 24px;
          background: linear-gradient(135deg, rgba(196,162,96,0.9), rgba(146,112,10,0.95));
          border: 1px solid rgba(196,162,96,0.4); border-radius: 7px;
          font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; color: #fff;
          cursor: pointer; letter-spacing: 0.03em;
          transition: opacity 0.15s, box-shadow 0.15s;
          box-shadow: 0 2px 8px rgba(196,162,96,0.25);
        }
        .tp-btn-upload:hover:not(:disabled) { opacity: 0.9; box-shadow: 0 4px 16px rgba(196,162,96,0.35); }
        .tp-btn-upload:disabled { opacity: 0.4; cursor: not-allowed; box-shadow: none; }
        .tp-btn-upload svg { width: 15px; height: 15px; }
        .tp-btn-upload .spin { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        .tp-divider {
          display: flex; align-items: center; gap: 14px;
          margin: 32px 0 0;
        }
        .tp-divider-line { flex: 1; height: 1px; background: #e5e7eb; }
        .tp-divider-label {
          font-size: 10px; font-weight: 500;
          letter-spacing: 0.12em; text-transform: uppercase;
          color: #c4a260;
        }

        .tp .tl {
          padding: 28px 0 0;
          background: transparent;
          min-height: unset;
        }
      `}),(0,t.jsxs)("div",{className:"tp",children:[(0,t.jsxs)("div",{className:"tp-header",children:[(0,t.jsx)("div",{className:"tp-title",children:"Templates"}),(0,t.jsx)("div",{className:"tp-subtitle",children:"Upload and manage your template files"})]}),(0,t.jsxs)("div",{className:"tp-stats-bar",children:[(0,t.jsxs)("div",{className:"tp-stat",children:[(0,t.jsx)("div",{className:"tp-stat-label",children:"Max File Size"}),(0,t.jsx)("div",{className:"tp-stat-value gold",children:"100 MB"})]}),(0,t.jsxs)("div",{className:"tp-stat",children:[(0,t.jsx)("div",{className:"tp-stat-label",children:"Supported Formats"}),(0,t.jsx)("div",{className:"tp-stat-value purple",children:"7 Types"})]}),(0,t.jsxs)("div",{className:"tp-stat",children:[(0,t.jsx)("div",{className:"tp-stat-label",children:"Encryption"}),(0,t.jsx)("div",{className:"tp-stat-value green",children:"Active"})]})]}),(0,t.jsx)("div",{className:"tp-card",children:(0,t.jsxs)("div",{className:"tp-card-body",children:[(0,t.jsx)("div",{onDragEnter:z,onDragLeave:z,onDragOver:z,onDrop:e=>{e.preventDefault(),e.stopPropagation(),v(!1),e.dataTransfer.files&&e.dataTransfer.files[0]&&(p(e.dataTransfer.files[0]),m(null),x(!1))},children:e?(0,t.jsxs)("div",{className:"tp-file-row",children:[(0,t.jsx)("div",{className:"tp-file-icon",children:(0,t.jsx)(n.File,{})}),(0,t.jsxs)("div",{style:{flex:1,minWidth:0},children:[(0,t.jsx)("div",{className:"tp-file-name",children:e.name}),(0,t.jsx)("div",{className:"tp-file-size",children:(e=>{if(0===e)return"0 Bytes";let t=Math.floor(Math.log(e)/Math.log(1024));return Math.round(e/Math.pow(1024,t)*100)/100+" "+["Bytes","KB","MB","GB"][t]})(e.size)})]}),(0,t.jsx)("button",{className:"tp-file-remove",onClick:C,disabled:f,children:(0,t.jsx)(l.X,{})})]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("input",{type:"file",id:"file-upload",onChange:e=>{e.target.files&&e.target.files[0]&&(p(e.target.files[0]),m(null),x(!1))},accept:".pdf,.doc,.docx,.xls,.xlsx,.txt,.csv",style:{display:"none"}}),(0,t.jsx)("label",{htmlFor:"file-upload",style:{display:"block",cursor:"pointer"},children:(0,t.jsxs)("div",{className:`tp-dropzone${b?" active":""}`,children:[(0,t.jsx)("div",{className:"tp-dropzone-icon",children:(0,t.jsx)(a.Upload,{})}),(0,t.jsxs)("div",{className:"tp-dropzone-title",children:["Drop your file here, or ",(0,t.jsx)("span",{children:"browse"})]}),(0,t.jsx)("div",{className:"tp-dropzone-formats",children:"PDF · DOC · DOCX · XLS · XLSX · TXT · CSV"}),(0,t.jsx)("div",{className:"tp-dropzone-limit",children:"Maximum 100 MB"})]})})]})}),g&&(0,t.jsxs)("div",{className:"tp-alert error",children:[(0,t.jsx)(o.AlertCircle,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"tp-alert-title",children:"Upload Failed"}),(0,t.jsx)("div",{className:"tp-alert-msg",children:g})]})]}),h&&(0,t.jsxs)("div",{className:"tp-alert success",children:[(0,t.jsx)(i.CheckCircle,{}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"tp-alert-title",children:"Upload Successful"}),(0,t.jsx)("div",{className:"tp-alert-msg",children:"Your file has been uploaded successfully."})]})]}),(0,t.jsxs)("div",{className:"tp-actions",children:[e&&(0,t.jsx)("button",{className:"tp-btn-cancel",onClick:C,disabled:f,children:"Cancel"}),(0,t.jsx)("button",{className:"tp-btn-upload",onClick:S,disabled:!e||f,children:f?(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.Loader2,{className:"spin"}),"Uploading…"]}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(a.Upload,{}),"Upload File"]})})]})]})}),(0,t.jsxs)("div",{className:"tp-divider",children:[(0,t.jsx)("div",{className:"tp-divider-line"}),(0,t.jsx)("div",{className:"tp-divider-label",children:"Existing Templates"}),(0,t.jsx)("div",{className:"tp-divider-line"})]}),(0,t.jsx)(c.default,{setliveVariables:w},y)]})]})}e.s(["default",()=>p])}]);