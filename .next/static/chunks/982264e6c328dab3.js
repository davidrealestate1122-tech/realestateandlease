(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49681,70451,e=>{"use strict";var t=e.i(35491);let r=(...e)=>e.filter((e,t,r)=>!!e&&""!==e.trim()&&r.indexOf(e)===t).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let i=(0,t.forwardRef)(({color:e="currentColor",size:i=24,strokeWidth:n=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:d,...c},p)=>(0,t.createElement)("svg",{ref:p,...a,width:i,height:i,stroke:e,strokeWidth:o?24*Number(n)/Number(i):n,className:r("lucide",s),...c},[...d.map(([e,r])=>(0,t.createElement)(e,r)),...Array.isArray(l)?l:[l]])),n=(e,a)=>{let n=(0,t.forwardRef)(({className:n,...o},s)=>(0,t.createElement)(i,{ref:s,iconNode:a,className:r(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,n),...o}));return n.displayName=`${e}`,n};e.s(["default",()=>n],70451);let o=n("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>o],49681)},50932,e=>{"use strict";let t=(0,e.i(70451).default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>t],50932)},60499,e=>{"use strict";let t=(0,e.i(70451).default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>t],60499)},14057,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return n},urlQueryToSearchParams:function(){return s}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});function n(e){let t={};for(let[r,a]of e.entries()){let e=t[r];void 0===e?t[r]=a:Array.isArray(e)?e.push(a):t[r]=[e,a]}return t}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let t=new URLSearchParams;for(let[r,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)t.append(r,o(e));else t.set(r,o(a));return t}function l(e,...t){for(let r of t){for(let t of r.keys())e.delete(t);for(let[t,a]of r.entries())e.append(t,a)}return e}},70249,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(4960)._(e.r(67133)),o=/https?|ftp|gopher|file/;function s(e){let{auth:t,hostname:r}=e,a=e.protocol||"",i=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;t=t?encodeURIComponent(t).replace(/%3A/i,":")+"@":"",e.host?d=t+e.host:r&&(d=t+(~r.indexOf(":")?`[${r}]`:r),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(n.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==d?(d="//"+(d||""),i&&"/"!==i[0]&&(i="/"+i)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),i=i.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${i}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},47550,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"useMergedRef",{enumerable:!0,get:function(){return i}});let a=e.r(35491);function i(e,t){let r=(0,a.useRef)(null),i=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=r.current;e&&(r.current=null,e());let t=i.current;t&&(i.current=null,t())}else e&&(r.current=n(e,a)),t&&(i.current=n(t,a))},[e,t])}function n(e,t){if("function"!=typeof e)return e.current=t,()=>{e.current=null};{let r=e(t);return"function"==typeof r?r:()=>e(null)}}("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},99901,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return v},SP:function(){return x},ST:function(){return g},WEB_VITALS:function(){return n},execOnce:function(){return o},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return j}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let t,r=!1;return(...a)=>(r||(r=!0,t=e(...a)),t)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:t,port:r}=window.location;return`${e}//${t}${r?":"+r:""}`}function c(){let{href:e}=window.location,t=d();return e.substring(t.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function u(e){let t=e.split("?");return t[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(t[1]?`?${t.slice(1).join("?")}`:"")}async function h(e,t){let r=t.res||t.ctx&&t.ctx.res;if(!e.getInitialProps)return t.ctx&&t.Component?{pageProps:await h(t.Component,t.ctx)}:{};let a=await e.getInitialProps(t);if(r&&f(r))return a;if(!a)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let x="undefined"!=typeof performance,g=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class m extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,t){super(),this.message=`Failed to load static file for page: ${e} ${t}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"isLocalURL",{enumerable:!0,get:function(){return n}});let a=e.r(99901),i=e.r(13042);function n(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let t=(0,a.getLocationOrigin)(),r=new URL(e,t);return r.origin===t&&(0,i.hasBasePath)(r.pathname)}catch(e){return!1}}},57832,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return v}};for(var i in a)Object.defineProperty(r,i,{enumerable:!0,get:a[i]});let n=e.r(4960),o=e.r(54156),s=n._(e.r(35491)),l=e.r(70249),d=e.r(30944),c=e.r(47550),p=e.r(99901),f=e.r(4471);e.r(14057);let u=e.r(11535),h=e.r(2239),x=e.r(83671);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function b(t){var r;let a,i,n,[l,b]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:y,as:w,children:j,prefetch:k=null,passHref:N,replace:z,shallow:P,scroll:M,onClick:C,onMouseEnter:S,onTouchStart:A,legacyBehavior:E=!1,onNavigate:T,ref:D,unstable_dynamicOnHover:O,...R}=t;a=j,E&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let _=s.default.useContext(d.AppRouterContext),L=!1!==k,U=!1!==k?null===(r=k)||"auto"===r?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,{href:$,as:I}=s.default.useMemo(()=>{let e=g(y);return{href:e,as:w?g(w):e}},[y,w]);if(E){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});i=s.default.Children.only(a)}let B=E?i&&"object"==typeof i&&i.ref:D,F=s.default.useCallback(e=>(null!==_&&(v.current=(0,u.mountLinkInstance)(e,$,_,U,L,b)),()=>{v.current&&((0,u.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,u.unmountPrefetchableInstance)(e)}),[L,$,_,U,b]),G={ref:(0,c.useMergedRef)(F,B),onClick(t){E||"function"!=typeof C||C(t),E&&i.props&&"function"==typeof i.props.onClick&&i.props.onClick(t),!_||t.defaultPrevented||function(t,r,a,i,n,o,l){if("undefined"!=typeof window){let d,{nodeName:c}=t.currentTarget;if("A"===c.toUpperCase()&&((d=t.currentTarget.getAttribute("target"))&&"_self"!==d||t.metaKey||t.ctrlKey||t.shiftKey||t.altKey||t.nativeEvent&&2===t.nativeEvent.which)||t.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(r)){n&&(t.preventDefault(),location.replace(r));return}if(t.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(30800);s.default.startTransition(()=>{p(a||r,n?"replace":"push",o??!0,i.current)})}}(t,$,I,v,z,M,T)},onMouseEnter(e){E||"function"!=typeof S||S(e),E&&i.props&&"function"==typeof i.props.onMouseEnter&&i.props.onMouseEnter(e),_&&L&&(0,u.onNavigationIntent)(e.currentTarget,!0===O)},onTouchStart:function(e){E||"function"!=typeof A||A(e),E&&i.props&&"function"==typeof i.props.onTouchStart&&i.props.onTouchStart(e),_&&L&&(0,u.onNavigationIntent)(e.currentTarget,!0===O)}};return(0,p.isAbsoluteUrl)(I)?G.href=I:E&&!N&&("a"!==i.type||"href"in i.props)||(G.href=(0,f.addBasePath)(I)),n=E?s.default.cloneElement(i,G):(0,o.jsx)("a",{...R,...G,children:a}),(0,o.jsx)(m.Provider,{value:l,children:n})}e.r(57832);let m=(0,s.createContext)(u.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(m);("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},1894,12514,46645,58280,e=>{"use strict";var t=e.i(54156),r=e.i(35264),a=e.i(76569),i=e.i(35491),n=e.i(13470),o=e.i(70451);let s=(0,o.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>s],12514);var l=e.i(50932);let d=(0,o.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,o.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);var p=e.i(60499);let f=(0,o.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>f],58280);var u=e.i(49681);let h=[{href:"/dashboard",label:"Dashboard",icon:s},{label:"Property",icon:l.Building2,subItems:[{href:"/execution",label:"Property List",icon:f},{href:"#",label:"Property Detail",icon:u.FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c},{href:"/templates",label:"Templates",icon:u.FileText},{href:"/profiles",label:"Profiles",icon:c}];function x({item:e,isActive:r,pathname:a}){let[o,s]=(0,i.useState)(!1),l=e.icon,d=e.subItems&&e.subItems.length>0;return((0,i.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&s(!0)},[a,e.label]),d)?(0,t.jsxs)("div",{children:[(0,t.jsxs)("button",{onClick:t=>{if(t.preventDefault(),d&&!o&&"Property"===e.label){let t=e.subItems?.[0];if(t?.href){window.location.href=t.href;return}}s(!o)},className:`re-nav-item w-full ${r?"active":""}`,children:[(0,t.jsx)(l,{className:"re-nav-icon"}),(0,t.jsx)("span",{className:"re-nav-label",children:e.label}),(0,t.jsx)(p.ChevronDown,{className:`re-nav-chevron ${o?"rotated":""}`})]}),o&&(0,t.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let r=e.icon,i=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,t.jsxs)(n.default,{href:e.href||"#",className:`re-subnav-item ${i?"active":""}`,children:[(0,t.jsx)(r,{className:"re-subnav-icon"}),(0,t.jsx)("span",{children:e.label})]},e.label)})})]}):(0,t.jsxs)(n.default,{href:e.href||"#",className:`re-nav-item ${r?"active":""}`,children:[(0,t.jsx)(l,{className:"re-nav-icon"}),(0,t.jsx)("span",{className:"re-nav-label",children:e.label})]})}function g(){let e=(0,a.usePathname)();return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("div",{className:"re-sidebar",children:[(0,t.jsxs)("div",{className:"re-sidebar-brand",children:[(0,t.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,t.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,t.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,t.jsx)("div",{className:"re-nav-section",children:(0,t.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,t.jsx)("nav",{className:"re-nav",children:h.map((r,a)=>{let i=!1;return r.href?i=e===r.href:"Property"===r.label&&(i=e.startsWith("/execution")),(0,t.jsxs)("div",{children:["Rules"===r.label&&(0,t.jsx)("div",{className:"re-nav-divider"}),(0,t.jsx)(x,{item:r,isActive:i,pathname:e})]},r.label)})}),(0,t.jsx)("div",{className:"re-sidebar-footer",children:(0,t.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,t.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,t.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let b=(0,o.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function m(){let{admin:e,logout:n}=(0,r.useAuth)(),o=(0,a.useRouter)(),[s,l]=(0,i.useState)(""),[d,c]=(0,i.useState)(""),[f,u]=(0,i.useState)(!1);(0,i.useEffect)(()=>{l(localStorage.getItem("email")??"")},[]),(0,i.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let t=setInterval(e,1e3);return()=>clearInterval(t)},[]);let h=s?s.split("@")[0].slice(0,2).toUpperCase():"AD",x=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("style",{children:`
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
      `}),(0,t.jsxs)("header",{className:"re-header",children:[(0,t.jsxs)("div",{className:"re-header-left",children:[(0,t.jsxs)("div",{className:"re-brand",children:[(0,t.jsx)("div",{className:"re-brand-icon",children:(0,t.jsx)("div",{className:"re-brand-icon-inner"})}),(0,t.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,t.jsx)("div",{className:"re-divider-v"}),(0,t.jsxs)("div",{className:"re-breadcrumb",children:[(0,t.jsx)("span",{children:"Platform"}),(0,t.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,t.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,t.jsxs)("div",{className:"re-header-center",children:[(0,t.jsx)("div",{className:"re-time",children:d}),(0,t.jsx)("div",{className:"re-date",children:x})]}),(0,t.jsxs)("div",{className:"re-header-right",children:[(0,t.jsxs)("div",{className:"re-status",children:[(0,t.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,t.jsxs)("div",{style:{position:"relative"},children:[(0,t.jsxs)("button",{className:`re-user-btn ${f?"open":""}`,onClick:()=>u(e=>!e),onBlur:()=>setTimeout(()=>u(!1),150),children:[(0,t.jsx)("div",{className:"re-avatar",children:h}),(0,t.jsxs)("div",{className:"re-user-info",children:[(0,t.jsx)("div",{className:"re-user-name",children:s||"Administrator"}),(0,t.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,t.jsx)(p.ChevronDown,{className:"re-chevron",size:13})]}),f&&(0,t.jsxs)("div",{className:"re-dropdown",children:[(0,t.jsxs)("div",{className:"re-dropdown-header",children:[(0,t.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,t.jsx)("div",{className:"re-dropdown-email",children:s||"Administrator"})]}),(0,t.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{n(),o.push("/login")},children:[(0,t.jsx)(b,{size:14}),"Sign out"]})]})]})]})]})]})}function v({children:e}){let{isAuthenticated:n}=(0,r.useAuth)(),o=(0,a.useRouter)(),[s,l]=(0,i.useState)(!1);return((0,i.useEffect)(()=>{l(!0)},[]),(0,i.useEffect)(()=>{s&&!n&&o.push("/login")},[s,n,o]),s&&n)?(0,t.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,t.jsx)(g,{}),(0,t.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,t.jsx)(m,{}),(0,t.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>v],1894)},20980,e=>{"use strict";let t=(0,e.i(70451).default)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>t],20980)},10527,e=>{"use strict";let t=(0,e.i(70451).default)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);e.s(["TrendingUp",()=>t],10527)},90354,e=>{"use strict";let t=(0,e.i(70451).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>t],90354)},52354,e=>{"use strict";let t=(0,e.i(70451).default)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);e.s(["Clock",()=>t],52354)},18230,e=>{"use strict";let t=(0,e.i(70451).default)("RefreshCw",[["path",{d:"M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8",key:"v9h5vc"}],["path",{d:"M21 3v5h-5",key:"1q7to0"}],["path",{d:"M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16",key:"3uifl3"}],["path",{d:"M8 16H3v5",key:"1cv678"}]]);e.s(["RefreshCw",()=>t],18230)},44722,e=>{"use strict";var t=e.i(54156),r=e.i(1894),a=e.i(35491),i=e.i(50932);let n=(0,e.i(70451).default)("ArrowRight",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);var o=e.i(20980),s=e.i(90354),l=e.i(10527),d=e.i(52354),c=e.i(18230),p=e.i(13470);function f(){let[e,f]=(0,a.useState)([]),[u,h]=(0,a.useState)(!0),[x,g]=(0,a.useState)(null),b=async()=>{h(!0),g(null);try{let e=await fetch("/api/execution/properties");if(!e.ok)throw Error("Failed to fetch properties");let t=await e.json();f(Array.isArray(t)?t:t.data||[])}catch(e){g(e instanceof Error?e.message:"Failed to load")}finally{h(!1)}};(0,a.useEffect)(()=>{b()},[]);let m=e.length,v=[...e].sort((e,t)=>new Date(t.createdAt??0).getTime()-new Date(e.createdAt??0).getTime()).slice(0,5),y=new Date(Date.now()-6048e5),w=new Date(Date.now()-2592e6),j=e.filter(e=>e.createdAt&&new Date(e.createdAt)>=y).length,k=e.filter(e=>e.createdAt&&new Date(e.createdAt)>=w).length;return Object.entries(e.reduce((e,t)=>{let r=t.state?.trim()||"Unknown";return e[r]=(e[r]||0)+1,e},{})).sort((e,t)=>t[1]-e[1]).slice(0,4),(0,t.jsxs)(r.AdminLayout,{children:[(0,t.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .dash { font-family: 'DM Sans', sans-serif; min-height: 100vh; background: #f8f9fb; padding: 36px 40px; }

        .dash-header { margin-bottom: 32px; display: flex; align-items: flex-start; justify-content: space-between; }
        .dash-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 30px; font-weight: 600; color: #111827; margin-bottom: 4px; letter-spacing: -0.01em; }
        .dash-subtitle { font-size: 13px; font-weight: 300; color: #9ca3af; letter-spacing: 0.03em; }

        .refresh-btn { display: flex; align-items: center; gap: 6px; padding: 8px 14px; background: #fff; border: 1px solid #e5e7eb; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 400; color: #6b7280; cursor: pointer; transition: all 0.15s; }
        .refresh-btn:hover { border-color: rgba(196,162,96,0.4); color: #92700a; }
        .refresh-btn svg { width: 13px; height: 13px; }
        .refresh-btn.spinning svg { animation: spin 0.7s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }

        /* Section label */
        .dash-section-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: #9ca3af; margin-bottom: 14px; display: flex; align-items: center; gap: 8px; }
        .dash-section-label::after { content: ''; flex: 1; height: 1px; background: #e5e7eb; }

        /* Stat cards */
        .dash-stats { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; margin-bottom: 32px; }

        .stat-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 22px 24px; position: relative; overflow: hidden; transition: box-shadow 0.15s, border-color 0.15s; }
        .stat-card:hover { box-shadow: 0 4px 20px rgba(0,0,0,0.07); border-color: #d1d5db; }
        .stat-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; border-radius: 10px 10px 0 0; }
        .stat-card.gold::before  { background: linear-gradient(90deg, rgba(196,162,96,0.9), rgba(196,162,96,0.35)); }
        .stat-card.green::before { background: linear-gradient(90deg, rgba(34,197,94,0.8), rgba(34,197,94,0.25)); }
        .stat-card.blue::before  { background: linear-gradient(90deg, rgba(99,102,241,0.8), rgba(99,102,241,0.25)); }
        .stat-card.slate::before { background: linear-gradient(90deg, rgba(100,116,139,0.8), rgba(100,116,139,0.25)); }

        .stat-icon-wrap { width: 38px; height: 38px; border-radius: 8px; display: flex; align-items: center; justify-content: center; margin-bottom: 16px; }
        .stat-icon-wrap.gold  { background: rgba(196,162,96,0.1); }
        .stat-icon-wrap.green { background: rgba(34,197,94,0.1); }
        .stat-icon-wrap.blue  { background: rgba(99,102,241,0.1); }
        .stat-icon-wrap.slate { background: rgba(100,116,139,0.1); }
        .stat-icon-wrap svg { width: 18px; height: 18px; }
        .stat-icon-wrap.gold  svg { color: #b8943a; }
        .stat-icon-wrap.green svg { color: #16a34a; }
        .stat-icon-wrap.blue  svg { color: #6366f1; }
        .stat-icon-wrap.slate svg { color: #64748b; }

        .stat-label { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #9ca3af; margin-bottom: 6px; }
        .stat-value { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 38px; font-weight: 600; letter-spacing: -0.02em; line-height: 1; margin-bottom: 8px; color: #111827; }
        .stat-value.gold  { color: #92700a; }
        .stat-value.green { color: #15803d; }
        .stat-value.blue  { color: #4f46e5; }
        .stat-value.slate { color: #475569; }
        .stat-sub { font-size: 12px; font-weight: 300; color: #9ca3af; }

        /* Skeleton pulse */
        .skel { background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%); background-size: 200% 100%; animation: skel-anim 1.4s infinite; border-radius: 4px; }
        @keyframes skel-anim { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        /* Mid row */
        .dash-mid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 32px; }

        /* Property CTA dark card */
        .property-cta-card { background: #111827; border-radius: 10px; padding: 32px; position: relative; overflow: hidden; display: flex; flex-direction: column; justify-content: space-between; min-height: 200px; }
        .property-cta-card::before { content: ''; position: absolute; inset: 0; background-image: linear-gradient(rgba(196,162,96,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(196,162,96,0.05) 1px, transparent 1px); background-size: 32px 32px; }
        .property-cta-card::after { content: ''; position: absolute; top: -40px; right: -40px; width: 160px; height: 160px; background: radial-gradient(circle, rgba(196,162,96,0.2) 0%, transparent 70%); pointer-events: none; }
        .cta-label { font-size: 10px; font-weight: 500; letter-spacing: 0.14em; text-transform: uppercase; color: rgba(196,162,96,0.7); margin-bottom: 8px; position: relative; z-index: 1; }
        .cta-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 26px; font-weight: 500; color: #fff; margin-bottom: 6px; position: relative; z-index: 1; line-height: 1.2; }
        .cta-sub { font-size: 12px; font-weight: 300; color: rgba(255,255,255,0.38); margin-bottom: 24px; position: relative; z-index: 1; }
        .cta-count { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 42px; font-weight: 600; color: rgba(196,162,96,0.9); line-height: 1; position: relative; z-index: 1; }
        .cta-count-label { font-size: 11px; color: rgba(255,255,255,0.3); letter-spacing: 0.06em; position: relative; z-index: 1; margin-bottom: 20px; }
        .cta-btn { display: inline-flex; align-items: center; gap: 8px; padding: 10px 20px; background: rgba(196,162,96,0.9); border: none; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 12px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #111827; text-decoration: none; cursor: pointer; transition: background 0.15s, transform 0.12s; position: relative; z-index: 1; width: fit-content; }
        .cta-btn:hover { background: rgba(196,162,96,1); transform: translateY(-1px); }
        .cta-btn svg { width: 14px; height: 14px; }

        /* State breakdown card */
        .breakdown-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 28px; }
        .breakdown-title { font-size: 12px; font-weight: 500; letter-spacing: 0.1em; text-transform: uppercase; color: #9ca3af; margin-bottom: 20px; display: flex; align-items: center; gap: 8px; }
        .breakdown-title svg { width: 14px; height: 14px; color: rgba(196,162,96,0.7); }
        .breakdown-row { display: flex; align-items: center; gap: 12px; padding: 10px 0; border-bottom: 1px solid #f9fafb; }
        .breakdown-row:last-child { border-bottom: none; }
        .breakdown-state { font-size: 13px; font-weight: 500; color: #374151; min-width: 80px; }
        .breakdown-bar-wrap { flex: 1; height: 5px; background: #f3f4f6; border-radius: 3px; overflow: hidden; }
        .breakdown-bar { height: 100%; border-radius: 3px; background: linear-gradient(90deg, rgba(196,162,96,0.85), rgba(196,162,96,0.35)); }
        .breakdown-count { font-size: 13px; font-weight: 600; color: #6b7280; min-width: 24px; text-align: right; font-family: 'Cormorant Garamond', Georgia, serif; font-size: 17px; }
        .breakdown-empty { font-size: 13px; color: #9ca3af; text-align: center; padding: 24px 0; }

        /* Recent properties table */
        .activity-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; }
        .activity-head { padding: 20px 24px; border-bottom: 1px solid #f3f4f6; display: flex; align-items: center; justify-content: space-between; }
        .activity-head-title { font-size: 13px; font-weight: 500; color: #374151; }
        .activity-head-sub { font-size: 11px; color: #9ca3af; margin-top: 2px; }
        .activity-view-all { font-size: 11px; font-weight: 500; letter-spacing: 0.06em; text-transform: uppercase; color: #b8943a; text-decoration: none; display: flex; align-items: center; gap: 4px; transition: opacity 0.15s; }
        .activity-view-all:hover { opacity: 0.7; }
        .activity-view-all svg { width: 12px; height: 12px; }

        .activity-row { display: flex; align-items: center; justify-content: space-between; padding: 14px 24px; border-bottom: 1px solid #f9fafb; transition: background 0.12s; }
        .activity-row:last-child { border-bottom: none; }
        .activity-row:hover { background: #fafafa; }

        .activity-left { display: flex; align-items: flex-start; gap: 12px; }
        .activity-icon-wrap { width: 34px; height: 34px; border-radius: 7px; background: rgba(196,162,96,0.08); border: 1px solid rgba(196,162,96,0.15); display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .activity-icon-wrap svg { width: 15px; height: 15px; color: #b8943a; }
        .activity-addr { font-size: 13px; font-weight: 500; color: #111827; margin-bottom: 2px; }
        .activity-loc { font-size: 11px; color: #9ca3af; font-weight: 300; }

        .activity-right { display: flex; align-items: center; gap: 16px; flex-shrink: 0; }
        .activity-date { font-size: 11px; color: #9ca3af; display: flex; align-items: center; gap: 4px; }
        .activity-date svg { width: 11px; height: 11px; }

        .view-btn { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; font-weight: 500; color: #9ca3af; text-decoration: none; padding: 5px 10px; border-radius: 5px; border: 1px solid #e5e7eb; transition: all 0.12s; letter-spacing: 0.04em; }
        .view-btn:hover { border-color: rgba(196,162,96,0.4); color: #92700a; background: rgba(196,162,96,0.04); }
        .view-btn svg { width: 11px; height: 11px; }

        /* Empty / error state */
        .empty-state { text-align: center; padding: 48px 24px; }
        .empty-icon { width: 48px; height: 48px; background: #f3f4f6; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
        .empty-icon svg { width: 22px; height: 22px; color: #9ca3af; }
        .empty-text { font-size: 14px; font-weight: 500; color: #374151; margin-bottom: 4px; }
        .empty-sub { font-size: 12px; color: #9ca3af; }

        .error-banner { margin-bottom: 24px; padding: 12px 16px; background: #fef2f2; border: 1px solid #fecaca; border-radius: 8px; font-size: 13px; color: #b91c1c; }
      `}),(0,t.jsxs)("div",{className:"dash",children:[(0,t.jsxs)("div",{className:"dash-header",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"dash-title",children:"Dashboard"}),(0,t.jsx)("div",{className:"dash-subtitle",children:"Overview of your real estate property portfolio"})]}),(0,t.jsxs)("button",{className:`refresh-btn ${u?"spinning":""}`,onClick:b,disabled:u,children:[(0,t.jsx)(c.RefreshCw,{}),"Refresh"]})]}),x&&(0,t.jsx)("div",{className:"error-banner",children:x}),(0,t.jsx)("div",{className:"dash-section-label",children:"Portfolio Overview"}),(0,t.jsxs)("div",{className:"dash-stats",children:[(0,t.jsxs)("div",{className:"stat-card gold",children:[(0,t.jsx)("div",{className:"stat-icon-wrap gold",children:(0,t.jsx)(i.Building2,{})}),(0,t.jsx)("div",{className:"stat-label",children:"Total Properties"}),u?(0,t.jsx)("div",{className:"skel",style:{height:42,width:80,marginBottom:8}}):(0,t.jsx)("div",{className:"stat-value gold",children:m}),(0,t.jsx)("div",{className:"stat-sub",children:"In execution pipeline"})]}),(0,t.jsxs)("div",{className:"stat-card green",children:[(0,t.jsx)("div",{className:"stat-icon-wrap green",children:(0,t.jsx)(l.TrendingUp,{})}),(0,t.jsx)("div",{className:"stat-label",children:"Added This Week"}),u?(0,t.jsx)("div",{className:"skel",style:{height:42,width:60,marginBottom:8}}):(0,t.jsx)("div",{className:"stat-value green",children:j}),(0,t.jsx)("div",{className:"stat-sub",children:"Last 7 days"})]}),(0,t.jsxs)("div",{className:"stat-card blue",children:[(0,t.jsx)("div",{className:"stat-icon-wrap blue",children:(0,t.jsx)(s.Calendar,{})}),(0,t.jsx)("div",{className:"stat-label",children:"Added This Month"}),u?(0,t.jsx)("div",{className:"skel",style:{height:42,width:60,marginBottom:8}}):(0,t.jsx)("div",{className:"stat-value blue",children:k}),(0,t.jsx)("div",{className:"stat-sub",children:"Last 30 days"})]})]}),(0,t.jsx)("div",{className:"dash-section-label",children:"Property Management"}),(0,t.jsx)("div",{className:"",children:(0,t.jsxs)("div",{className:"property-cta-card",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"cta-label",children:"Execution Pipeline"}),(0,t.jsx)("div",{className:"cta-title",children:"Property Portfolio"}),(0,t.jsx)("div",{className:"cta-sub",children:"Search, filter and manage all properties under execution"}),u?(0,t.jsx)("div",{className:"skel",style:{height:42,width:80,marginBottom:4}}):(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"cta-count",children:m}),(0,t.jsx)("div",{className:"cta-count-label",children:"Total Properties"})]})]}),(0,t.jsxs)(p.default,{href:"/execution",className:"cta-btn",children:["View All Properties",(0,t.jsx)(n,{})]})]})}),(0,t.jsx)("div",{className:"dash-section-label",children:"Recent Properties"}),(0,t.jsxs)("div",{className:"activity-card",children:[(0,t.jsxs)("div",{className:"activity-head",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"activity-head-title",children:"Latest Additions"}),(0,t.jsx)("div",{className:"activity-head-sub",children:"5 most recently added properties"})]}),(0,t.jsxs)(p.default,{href:"/execution",className:"activity-view-all",children:["View all ",(0,t.jsx)(n,{})]})]}),u?(0,t.jsx)("div",{style:{padding:"16px 24px",display:"flex",flexDirection:"column",gap:12},children:[void 0,void 0,void 0,void 0,void 0].map((e,r)=>(0,t.jsx)("div",{className:"skel",style:{height:52}},r))}):0===v.length?(0,t.jsxs)("div",{className:"empty-state",children:[(0,t.jsx)("div",{className:"empty-icon",children:(0,t.jsx)(i.Building2,{})}),(0,t.jsx)("div",{className:"empty-text",children:"No properties yet"}),(0,t.jsx)("div",{className:"empty-sub",children:"Properties added to the execution pipeline will appear here"})]}):v.map(e=>(0,t.jsxs)("div",{className:"activity-row",children:[(0,t.jsxs)("div",{className:"activity-left",children:[(0,t.jsx)("div",{className:"activity-icon-wrap",children:(0,t.jsx)(o.MapPin,{})}),(0,t.jsxs)("div",{children:[(0,t.jsx)("div",{className:"activity-addr",children:e.address||"Address not specified"}),(0,t.jsx)("div",{className:"activity-loc",children:[e.city,e.state,e.zipCode].filter(Boolean).join(", ")||"Location not specified"})]})]}),(0,t.jsxs)("div",{className:"activity-right",children:[e.createdAt&&(0,t.jsxs)("div",{className:"activity-date",children:[(0,t.jsx)(d.Clock,{}),new Date(e.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]}),(0,t.jsxs)(p.default,{href:`/execution/${e._id}`,className:"view-btn",children:["Details ",(0,t.jsx)(l.TrendingUp,{})]})]})]},e._id))]})]})]})}e.s(["default",()=>f],44722)}]);