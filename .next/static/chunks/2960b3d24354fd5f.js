(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49681,70451,e=>{"use strict";var r=e.i(35491);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:i=2,absoluteStrokeWidth:o,className:s="",children:l,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...a,width:n,height:n,stroke:e,strokeWidth:o?24*Number(i)/Number(n):i,className:t("lucide",s),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),i=(e,a)=>{let i=(0,r.forwardRef)(({className:i,...o},s)=>(0,r.createElement)(n,{ref:s,iconNode:a,className:t(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,i),...o}));return i.displayName=`${e}`,i};e.s(["default",()=>i],70451);let o=i("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>o],49681)},60499,e=>{"use strict";let r=(0,e.i(70451).default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>r],60499)},50932,e=>{"use strict";let r=(0,e.i(70451).default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>r],50932)},14057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return s}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});function i(e){let r={};for(let[t,a]of e.entries()){let e=r[t];void 0===e?r[t]=a:Array.isArray(e)?e.push(a):r[t]=[e,a]}return r}function o(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let r=new URLSearchParams;for(let[t,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)r.append(t,o(e));else r.set(t,o(a));return r}function l(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,a]of t.entries())e.append(r,a)}return e}},70249,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let i=e.r(4960)._(e.r(67133)),o=/https?|ftp|gopher|file/;function s(e){let{auth:r,hostname:t}=e,a=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?d=r+e.host:t&&(d=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||o.test(a))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${n}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},47550,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,r){let t=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=i(e,a)),r&&(n.current=i(r,a))},[e,r])}function i(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},99901,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return i},execOnce:function(){return o},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return x},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return j}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function o(e){let r,t=!1;return(...a)=>(t||(t=!0,r=e(...a)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function c(){let{href:e}=window.location,r=d();return e.substring(r.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function u(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function x(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await x(r.Component,r.ctx)}:{};let a=await e.getInitialProps(r);if(t&&f(t))return a;if(!a)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let a=e.r(99901),n=e.r(13042);function i(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let r=(0,a.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},57832,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return m},useLinkStatus:function(){return v}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let i=e.r(4960),o=e.r(54156),s=i._(e.r(35491)),l=e.r(70249),d=e.r(30944),c=e.r(47550),p=e.r(99901),f=e.r(4471);e.r(14057);let u=e.r(11535),x=e.r(2239),h=e.r(83671);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function m(r){var t;let a,n,i,[l,m]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:y,as:k,children:j,prefetch:w=null,passHref:N,replace:C,shallow:S,scroll:P,onClick:M,onMouseEnter:z,onTouchStart:E,legacyBehavior:_=!1,onNavigate:T,ref:L,unstable_dynamicOnHover:A,...O}=r;a=j,_&&("string"==typeof a||"number"==typeof a)&&(a=(0,o.jsx)("a",{children:a}));let D=s.default.useContext(d.AppRouterContext),R=!1!==w,U=!1!==w?null===(t=w)||"auto"===t?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:$,as:I}=s.default.useMemo(()=>{let e=g(y);return{href:e,as:k?g(k):e}},[y,k]);if(_){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(a)}let F=_?n&&"object"==typeof n&&n.ref:L,B=s.default.useCallback(e=>(null!==D&&(v.current=(0,u.mountLinkInstance)(e,$,D,U,R,m)),()=>{v.current&&((0,u.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,u.unmountPrefetchableInstance)(e)}),[R,$,D,U,m]),G={ref:(0,c.useMergedRef)(B,F),onClick(r){_||"function"!=typeof M||M(r),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!D||r.defaultPrevented||function(r,t,a,n,i,o,l){if("undefined"!=typeof window){let d,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((d=r.currentTarget.getAttribute("target"))&&"_self"!==d||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(t)){i&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(30800);s.default.startTransition(()=>{p(a||t,i?"replace":"push",o??!0,n.current)})}}(r,$,I,v,C,P,T)},onMouseEnter(e){_||"function"!=typeof z||z(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),D&&R&&(0,u.onNavigationIntent)(e.currentTarget,!0===A)},onTouchStart:function(e){_||"function"!=typeof E||E(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),D&&R&&(0,u.onNavigationIntent)(e.currentTarget,!0===A)}};return(0,p.isAbsoluteUrl)(I)?G.href=I:_&&!N&&("a"!==n.type||"href"in n.props)||(G.href=(0,f.addBasePath)(I)),i=_?s.default.cloneElement(n,G):(0,o.jsx)("a",{...O,...G,children:a}),(0,o.jsx)(b.Provider,{value:l,children:i})}e.r(57832);let b=(0,s.createContext)(u.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(b);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},1894,12514,46645,58280,e=>{"use strict";var r=e.i(54156),t=e.i(35264),a=e.i(76569),n=e.i(35491),i=e.i(13470),o=e.i(70451);let s=(0,o.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>s],12514);var l=e.i(50932);let d=(0,o.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,o.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);var p=e.i(60499);let f=(0,o.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>f],58280);var u=e.i(49681);let x=[{href:"/dashboard",label:"Dashboard",icon:s},{label:"Property",icon:l.Building2,subItems:[{href:"/execution",label:"Property List",icon:f},{href:"#",label:"Property Detail",icon:u.FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c},{href:"/templates",label:"Templates",icon:u.FileText},{href:"/profiles",label:"Profiles",icon:c}];function h({item:e,isActive:t,pathname:a}){let[o,s]=(0,n.useState)(!1),l=e.icon,d=e.subItems&&e.subItems.length>0;return((0,n.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&s(!0)},[a,e.label]),d)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:r=>{if(r.preventDefault(),d&&!o&&"Property"===e.label){let r=e.subItems?.[0];if(r?.href){window.location.href=r.href;return}}s(!o)},className:`re-nav-item w-full ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label}),(0,r.jsx)(p.ChevronDown,{className:`re-nav-chevron ${o?"rotated":""}`})]}),o&&(0,r.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let t=e.icon,n=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,r.jsxs)(i.default,{href:e.href||"#",className:`re-subnav-item ${n?"active":""}`,children:[(0,r.jsx)(t,{className:"re-subnav-icon"}),(0,r.jsx)("span",{children:e.label})]},e.label)})})]}):(0,r.jsxs)(i.default,{href:e.href||"#",className:`re-nav-item ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label})]})}function g(){let e=(0,a.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"re-sidebar",children:[(0,r.jsxs)("div",{className:"re-sidebar-brand",children:[(0,r.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,r.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,r.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,r.jsx)("div",{className:"re-nav-section",children:(0,r.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,r.jsx)("nav",{className:"re-nav",children:x.map((t,a)=>{let n=!1;return t.href?n=e===t.href:"Property"===t.label&&(n=e.startsWith("/execution")),(0,r.jsxs)("div",{children:["Rules"===t.label&&(0,r.jsx)("div",{className:"re-nav-divider"}),(0,r.jsx)(h,{item:t,isActive:n,pathname:e})]},t.label)})}),(0,r.jsx)("div",{className:"re-sidebar-footer",children:(0,r.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let m=(0,o.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function b(){let{admin:e,logout:i}=(0,t.useAuth)(),o=(0,a.useRouter)(),[s,l]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[f,u]=(0,n.useState)(!1);(0,n.useEffect)(()=>{l(localStorage.getItem("email")??"")},[]),(0,n.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let r=setInterval(e,1e3);return()=>clearInterval(r)},[]);let x=s?s.split("@")[0].slice(0,2).toUpperCase():"AD",h=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("header",{className:"re-header",children:[(0,r.jsxs)("div",{className:"re-header-left",children:[(0,r.jsxs)("div",{className:"re-brand",children:[(0,r.jsx)("div",{className:"re-brand-icon",children:(0,r.jsx)("div",{className:"re-brand-icon-inner"})}),(0,r.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,r.jsx)("div",{className:"re-divider-v"}),(0,r.jsxs)("div",{className:"re-breadcrumb",children:[(0,r.jsx)("span",{children:"Platform"}),(0,r.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,r.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,r.jsxs)("div",{className:"re-header-center",children:[(0,r.jsx)("div",{className:"re-time",children:d}),(0,r.jsx)("div",{className:"re-date",children:h})]}),(0,r.jsxs)("div",{className:"re-header-right",children:[(0,r.jsxs)("div",{className:"re-status",children:[(0,r.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsxs)("button",{className:`re-user-btn ${f?"open":""}`,onClick:()=>u(e=>!e),onBlur:()=>setTimeout(()=>u(!1),150),children:[(0,r.jsx)("div",{className:"re-avatar",children:x}),(0,r.jsxs)("div",{className:"re-user-info",children:[(0,r.jsx)("div",{className:"re-user-name",children:s||"Administrator"}),(0,r.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,r.jsx)(p.ChevronDown,{className:"re-chevron",size:13})]}),f&&(0,r.jsxs)("div",{className:"re-dropdown",children:[(0,r.jsxs)("div",{className:"re-dropdown-header",children:[(0,r.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,r.jsx)("div",{className:"re-dropdown-email",children:s||"Administrator"})]}),(0,r.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{i(),o.push("/login")},children:[(0,r.jsx)(m,{size:14}),"Sign out"]})]})]})]})]})]})}function v({children:e}){let{isAuthenticated:i}=(0,t.useAuth)(),o=(0,a.useRouter)(),[s,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),(0,n.useEffect)(()=>{s&&!i&&o.push("/login")},[s,i,o]),s&&i)?(0,r.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,r.jsx)(g,{}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,r.jsx)(b,{}),(0,r.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>v],1894)},42494,e=>{"use strict";let r=(0,e.i(70451).default)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>r],42494)},59581,e=>{"use strict";let r=(0,e.i(70451).default)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);e.s(["Trash2",()=>r],59581)},33366,e=>{"use strict";let r=(0,e.i(70451).default)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>r],33366)},68689,e=>{"use strict";let r=(0,e.i(70451).default)("Save",[["path",{d:"M15.2 3a2 2 0 0 1 1.4.6l3.8 3.8a2 2 0 0 1 .6 1.4V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2z",key:"1c8476"}],["path",{d:"M17 21v-7a1 1 0 0 0-1-1H8a1 1 0 0 0-1 1v7",key:"1ydtos"}],["path",{d:"M7 3v4a1 1 0 0 0 1 1h7",key:"t51u73"}]]);e.s(["Save",()=>r],68689)},67213,e=>{"use strict";let r=(0,e.i(70451).default)("LoaderCircle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["Loader2",()=>r],67213)},13539,e=>{"use strict";let r=(0,e.i(70451).default)("ChevronUp",[["path",{d:"m18 15-6-6-6 6",key:"153udz"}]]);e.s(["ChevronUp",()=>r],13539)},46439,95257,e=>{"use strict";var r=e.i(70451);let t=(0,r.default)("CircleCheckBig",[["path",{d:"M21.801 10A10 10 0 1 1 17 3.335",key:"yps3ct"}],["path",{d:"m9 11 3 3L22 4",key:"1pflzl"}]]);e.s(["CheckCircle",()=>t],46439);let a=(0,r.default)("Landmark",[["line",{x1:"3",x2:"21",y1:"22",y2:"22",key:"j8o0r"}],["line",{x1:"6",x2:"6",y1:"18",y2:"11",key:"10tf0k"}],["line",{x1:"10",x2:"10",y1:"18",y2:"11",key:"54lgf6"}],["line",{x1:"14",x2:"14",y1:"18",y2:"11",key:"380y"}],["line",{x1:"18",x2:"18",y1:"18",y2:"11",key:"1kevvc"}],["polygon",{points:"12 2 20 7 4 7",key:"jkujk7"}]]);e.s(["Landmark",()=>a],95257)},6372,e=>{"use strict";var r=e.i(54156),t=e.i(35491),a=e.i(33366),n=e.i(42494),i=e.i(59581),o=e.i(68689),s=e.i(67213),l=e.i(46439),d=e.i(60499),c=e.i(13539),p=e.i(50932);let f=(0,e.i(70451).default)("Hammer",[["path",{d:"m15 12-8.373 8.373a1 1 0 1 1-3-3L12 9",key:"eefl8a"}],["path",{d:"m18 15 4-4",key:"16gjal"}],["path",{d:"m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172V7l-2.26-2.26a6 6 0 0 0-4.202-1.756L9 2.96l.92.82A6.18 6.18 0 0 1 12 8.4V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5",key:"b7pghm"}]]);var u=e.i(95257),x=e.i(1894);let h=["investor","lender","contractor","company"],g={investor:a.User,lender:u.Landmark,contractor:f,company:p.Building2},m={investor:["Full Name","Email","Phone","Entity Name","Address","Tax ID","Investment Focus"],lender:["Lender Name","Contact Name","Email","Phone","Loan Programs","Rate Range","Max LTV","Address"],contractor:["Company Name","Contact Name","Email","Phone","License Number","Trade","Address","Insurance Expiry"],company:["Company Name","ABN/EIN","Address","Phone","Email","Director Name","Website"]};function b(){let[e,a]=(0,t.useState)([]),[p,f]=(0,t.useState)(!0),[u,b]=(0,t.useState)(null),[v,y]=(0,t.useState)(null),[k,j]=(0,t.useState)(null),[w,N]=(0,t.useState)(null),[C,S]=(0,t.useState)(!1),[P,M]=(0,t.useState)(""),[z,E]=(0,t.useState)("investor"),[_,T]=(0,t.useState)("");(0,t.useEffect)(()=>{fetch("/api/profiles").then(e=>e.json()).then(e=>{a(Array.isArray(e)?e:[]),f(!1)}).catch(()=>f(!1))},[]);let L=async()=>{if(!P.trim())return void T("Name is required");T("");let e={};m[z].forEach(r=>{e[r]=""});let r=await fetch("/api/profiles",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:P.trim(),type:z,data:e})}),t=await r.json();r.ok?(a(e=>[t,...e]),M(""),S(!1),b(t._id)):T(t.message||"Failed to create")},A=async e=>{y(e._id),await fetch(`/api/profiles/${e._id}`,{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:e.name,type:e.type,data:e.data})}),y(null),j(e._id),setTimeout(()=>j(null),1800)},O=async e=>{confirm("Delete this profile? This cannot be undone.")&&(N(e),await fetch(`/api/profiles/${e}`,{method:"DELETE"}),a(r=>r.filter(r=>r._id!==e)),N(null),u===e&&b(null))},D=h.reduce((r,t)=>(r[t]=e.filter(e=>e.type===t),r),{});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .pf { font-family:'DM Sans',sans-serif; min-height:100vh; background:#f8f9fb; padding:36px 40px; }
        .pf-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:30px; font-weight:600; color:#111827; letter-spacing:-.01em; margin-bottom:4px; }
        .pf-sub { font-size:13px; font-weight:300; color:#9ca3af; letter-spacing:.03em; margin-bottom:28px; }

        .pf-stats { display:flex; gap:16px; margin-bottom:28px; }
        .pf-stat { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:16px 22px; flex:1; position:relative; overflow:hidden; transition:box-shadow .15s; }
        .pf-stat:hover { box-shadow:0 4px 16px rgba(0,0,0,.06); }
        .pf-stat::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; border-radius:10px 10px 0 0; background:linear-gradient(90deg,rgba(196,162,96,.85),rgba(196,162,96,.3)); }
        .pf-stat-lbl { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; margin-bottom:4px; }
        .pf-stat-val { font-family:'Cormorant Garamond',Georgia,serif; font-size:28px; font-weight:600; color:#92700a; line-height:1; }

        /* Create form */
        .pf-create-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; margin-bottom:24px; overflow:hidden; position:relative; }
        .pf-create-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.7),rgba(196,162,96,.15)); border-radius:10px 10px 0 0; }
        .pf-create-header { display:flex; align-items:center; justify-content:space-between; padding:16px 22px; }
        .pf-create-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:16px; font-weight:600; color:#111827; }
        .pf-new-btn { display:flex; align-items:center; gap:6px; padding:8px 16px; background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border:1px solid rgba(196,162,96,.4); border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:500; color:#fff; cursor:pointer; box-shadow:0 2px 8px rgba(196,162,96,.22); }
        .pf-new-btn:hover { opacity:.9; }
        .pf-new-btn svg { width:13px; height:13px; }
        .pf-create-form { padding:0 22px 20px; border-top:1px solid #f3f4f6; background:#fafafa; }
        .pf-create-row { display:flex; gap:10px; margin-top:16px; align-items:flex-end; flex-wrap:wrap; }
        .pf-form-group { display:flex; flex-direction:column; gap:5px; flex:1; min-width:180px; }
        .pf-form-lbl { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; }
        .pf-form-input { padding:9px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:13px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; }
        .pf-form-input:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .pf-form-select { padding:9px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:13px; color:#111827; outline:none; cursor:pointer; }
        .pf-create-error { font-size:12px; color:#dc2626; margin-top:8px; }
        .pf-create-actions { display:flex; gap:8px; margin-top:16px; }
        .pf-cancel-btn { padding:9px 16px; background:#fff; border:1px solid #e5e7eb; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; color:#6b7280; cursor:pointer; }
        .pf-create-btn { display:flex; align-items:center; gap:6px; padding:9px 20px; background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border:1px solid rgba(196,162,96,.4); border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:500; color:#fff; cursor:pointer; }

        /* Group sections */
        .pf-group { margin-bottom:24px; }
        .pf-group-title { font-size:10px; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#9ca3af; margin-bottom:10px; padding-left:2px; display:flex; align-items:center; gap:8px; }
        .pf-group-title svg { width:13px; height:13px; }
        .pf-group-count { font-size:10px; background:rgba(196,162,96,.1); color:#92700a; border-radius:3px; padding:1px 6px; }

        /* Profile card */
        .pf-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; margin-bottom:8px; position:relative; transition:border-color .15s,box-shadow .15s; }
        .pf-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.6),rgba(196,162,96,.12)); border-radius:10px 10px 0 0; }
        .pf-card:hover { border-color:rgba(196,162,96,.35); box-shadow:0 4px 12px rgba(0,0,0,.05); }
        .pf-card.open { border-color:rgba(196,162,96,.45); }
        .pf-card-header { display:flex; align-items:center; gap:12px; padding:14px 18px; cursor:pointer; user-select:none; }
        .pf-card-ico { width:36px; height:36px; background:rgba(196,162,96,.08); border:1px solid rgba(196,162,96,.2); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .pf-card-ico svg { width:15px; height:15px; color:#92700a; }
        .pf-card-name { font-size:14px; font-weight:500; color:#111827; flex:1; }
        .pf-card-type-badge { font-size:9px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; padding:2px 8px; border-radius:4px; background:rgba(196,162,96,.1); border:1px solid rgba(196,162,96,.2); color:#92700a; }
        .pf-chevron { width:15px; height:15px; color:#9ca3af; flex-shrink:0; }

        /* Profile fields */
        .pf-fields { padding:16px 18px 20px; border-top:1px solid #f3f4f6; background:#fafafa; }
        .pf-fields-grid { display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px; }
        .pf-field { display:flex; flex-direction:column; gap:5px; }
        .pf-field-lbl { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; }
        .pf-field-input { padding:8px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:6px; font-family:'DM Sans',sans-serif; font-size:12.5px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; }
        .pf-field-input:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .pf-field-input.filled { border-color:rgba(196,162,96,.25); background:rgba(196,162,96,.02); }
        .pf-fields-footer { display:flex; justify-content:space-between; align-items:center; padding-top:12px; border-top:1px solid #f0f0f0; }
        .pf-delete-btn { display:flex; align-items:center; gap:5px; padding:7px 12px; background:#fff; border:1px solid #fecaca; border-radius:6px; font-family:'DM Sans',sans-serif; font-size:12px; color:#dc2626; cursor:pointer; transition:background .12s; }
        .pf-delete-btn:hover { background:#fef2f2; }
        .pf-delete-btn svg { width:13px; height:13px; }
        .pf-save-btn { display:flex; align-items:center; gap:6px; padding:8px 18px; border-radius:7px; font-family:'DM Sans',sans-serif; font-size:12.5px; font-weight:500; cursor:pointer; border:1px solid transparent; transition:opacity .15s; }
        .pf-save-btn svg { width:13px; height:13px; }
        .pf-save-btn.idle { background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border-color:rgba(196,162,96,.4); color:#fff; }
        .pf-save-btn.idle:hover { opacity:.9; }
        .pf-save-btn.saving { background:#f9fafb; border-color:#e5e7eb; color:#6b7280; }
        .pf-save-btn.saved { background:#f0fdf4; border-color:#bbf7d0; color:#15803d; }
        .pf-spin { animation:pfspin .7s linear infinite; }
        @keyframes pfspin { to{transform:rotate(360deg)} }

        /* Skeleton */
        .pf-skel { background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%); background-size:200% 100%; animation:pfskel 1.4s infinite; border-radius:8px; }
        @keyframes pfskel { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .pf-skel-row { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:14px 18px; display:flex; align-items:center; gap:12px; margin-bottom:8px; }

        /* Empty group */
        .pf-group-empty { padding:20px; text-align:center; font-size:12px; color:#9ca3af; background:#fff; border:1px dashed #e5e7eb; border-radius:8px; }
      `}),(0,r.jsx)(x.AdminLayout,{children:(0,r.jsxs)("div",{className:"pf",children:[(0,r.jsx)("div",{className:"pf-title",children:"Profiles"}),(0,r.jsx)("div",{className:"pf-sub",children:"Manage investor, lender, contractor and company profiles for auto-filling documents"}),(0,r.jsx)("div",{className:"pf-stats",children:h.map(t=>(0,r.jsxs)("div",{className:"pf-stat",children:[(0,r.jsxs)("div",{className:"pf-stat-lbl",children:[t,"s"]}),(0,r.jsx)("div",{className:"pf-stat-val",children:p?"—":e.filter(e=>e.type===t).length})]},t))}),(0,r.jsxs)("div",{className:"pf-create-card",children:[(0,r.jsxs)("div",{className:"pf-create-header",children:[(0,r.jsx)("div",{className:"pf-create-title",children:"Create New Profile"}),!C&&(0,r.jsxs)("button",{className:"pf-new-btn",onClick:()=>S(!0),children:[(0,r.jsx)(n.Plus,{})," New Profile"]})]}),C&&(0,r.jsxs)("div",{className:"pf-create-form",children:[(0,r.jsxs)("div",{className:"pf-create-row",children:[(0,r.jsxs)("div",{className:"pf-form-group",children:[(0,r.jsx)("label",{className:"pf-form-lbl",children:"Profile Name"}),(0,r.jsx)("input",{className:"pf-form-input",placeholder:"e.g. Acme Capital Partners",value:P,onChange:e=>M(e.target.value)})]}),(0,r.jsxs)("div",{className:"pf-form-group",style:{flex:"0 0 180px"},children:[(0,r.jsx)("label",{className:"pf-form-lbl",children:"Type"}),(0,r.jsx)("select",{className:"pf-form-select",value:z,onChange:e=>E(e.target.value),children:h.map(e=>(0,r.jsx)("option",{value:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})]})]}),_&&(0,r.jsx)("div",{className:"pf-create-error",children:_}),(0,r.jsxs)("div",{className:"pf-create-actions",children:[(0,r.jsx)("button",{className:"pf-cancel-btn",onClick:()=>{S(!1),M(""),T("")},children:"Cancel"}),(0,r.jsxs)("button",{className:"pf-create-btn",onClick:L,children:[(0,r.jsx)(n.Plus,{})," Create Profile"]})]})]})]}),p?[void 0,void 0,void 0].map((e,t)=>(0,r.jsxs)("div",{className:"pf-skel-row",children:[(0,r.jsx)("div",{className:"pf-skel",style:{width:36,height:36,flexShrink:0,borderRadius:8}}),(0,r.jsx)("div",{className:"pf-skel",style:{flex:1,height:14}}),(0,r.jsx)("div",{className:"pf-skel",style:{width:70,height:20,borderRadius:4}})]},t)):h.map(e=>{let t=g[e],n=D[e];return(0,r.jsxs)("div",{className:"pf-group",children:[(0,r.jsxs)("div",{className:"pf-group-title",children:[(0,r.jsx)(t,{}),e.charAt(0).toUpperCase()+e.slice(1),"s",(0,r.jsx)("span",{className:"pf-group-count",children:n.length})]}),0===n.length?(0,r.jsxs)("div",{className:"pf-group-empty",children:["No ",e,"s yet — create one above"]}):n.map(e=>{let t=u===e._id,n=g[e.type],p=v===e._id,f=k===e._id;return(0,r.jsxs)("div",{className:`pf-card${t?" open":""}`,children:[(0,r.jsxs)("div",{className:"pf-card-header",onClick:()=>b(t?null:e._id),children:[(0,r.jsx)("div",{className:"pf-card-ico",children:(0,r.jsx)(n,{})}),(0,r.jsx)("div",{className:"pf-card-name",children:e.name}),(0,r.jsx)("span",{className:"pf-card-type-badge",children:e.type}),t?(0,r.jsx)(c.ChevronUp,{className:"pf-chevron"}):(0,r.jsx)(d.ChevronDown,{className:"pf-chevron"})]}),t&&(0,r.jsxs)("div",{className:"pf-fields",children:[(0,r.jsx)("div",{className:"pf-fields-grid",children:Object.entries(e.data).map(([t,n])=>(0,r.jsxs)("div",{className:"pf-field",children:[(0,r.jsx)("label",{className:"pf-field-lbl",children:t}),(0,r.jsx)("input",{className:`pf-field-input${n?.trim()?" filled":""}`,placeholder:`Enter ${t.toLowerCase()}…`,value:n||"",onChange:r=>{var n,i;return n=e._id,i=r.target.value,void a(e=>e.map(e=>e._id===n?{...e,data:{...e.data,[t]:i}}:e))}})]},t))}),(0,r.jsxs)("div",{className:"pf-fields-footer",children:[(0,r.jsxs)("button",{className:"pf-delete-btn",onClick:()=>O(e._id),disabled:w===e._id,children:[w===e._id?(0,r.jsx)(s.Loader2,{className:"pf-spin"}):(0,r.jsx)(i.Trash2,{}),"Delete"]}),(0,r.jsx)("button",{className:`pf-save-btn ${p?"saving":f?"saved":"idle"}`,onClick:()=>A(e),disabled:p,children:p?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.Loader2,{className:"pf-spin"})," Saving…"]}):f?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.CheckCircle,{})," Saved"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Save,{})," Save Profile"]})})]})]})]},e._id)})]},e)})]})})]})}e.s(["default",()=>b],6372)}]);