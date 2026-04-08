(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49681,70451,e=>{"use strict";var r=e.i(35491);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:d,...c},p)=>(0,r.createElement)("svg",{ref:p,...a,width:n,height:n,stroke:e,strokeWidth:i?24*Number(o)/Number(n):o,className:t("lucide",s),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),o=(e,a)=>{let o=(0,r.forwardRef)(({className:o,...i},s)=>(0,r.createElement)(n,{ref:s,iconNode:a,className:t(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...i}));return o.displayName=`${e}`,o};e.s(["default",()=>o],70451);let i=o("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>i],49681)},50932,e=>{"use strict";let r=(0,e.i(70451).default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>r],50932)},60499,e=>{"use strict";let r=(0,e.i(70451).default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>r],60499)},14057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});function o(e){let r={};for(let[t,a]of e.entries()){let e=r[t];void 0===e?r[t]=a:Array.isArray(e)?e.push(a):r[t]=[e,a]}return r}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let r=new URLSearchParams;for(let[t,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)r.append(t,i(e));else r.set(t,i(a));return r}function l(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,a]of t.entries())e.append(r,a)}return e}},70249,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let o=e.r(4960)._(e.r(67133)),i=/https?|ftp|gopher|file/;function s(e){let{auth:r,hostname:t}=e,a=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?d=r+e.host:t&&(d=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${n}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},47550,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,r){let t=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=o(e,a)),r&&(n.current=o(r,a))},[e,r])}function o(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},99901,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return y},NormalizeError:function(){return m},PageNotFoundError:function(){return v},SP:function(){return h},ST:function(){return g},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return p},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return x},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return j}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let r,t=!1;return(...a)=>(t||(t=!0,r=e(...a)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function c(){let{href:e}=window.location,r=d();return e.substring(r.length)}function p(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function u(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function x(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await x(r.Component,r.ctx)}:{};let a=await e.getInitialProps(r);if(t&&f(t))return a;if(!a)throw Object.defineProperty(Error(`"${p(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let h="undefined"!=typeof performance,g=h&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class m extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return o}});let a=e.r(99901),n=e.r(13042);function o(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let r=(0,a.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},57832,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return v}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let o=e.r(4960),i=e.r(54156),s=o._(e.r(35491)),l=e.r(70249),d=e.r(30944),c=e.r(47550),p=e.r(99901),f=e.r(4471);e.r(14057);let u=e.r(11535),x=e.r(2239),h=e.r(83671);function g(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function b(r){var t;let a,n,o,[l,b]=(0,s.useOptimistic)(u.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:y,as:w,children:j,prefetch:k=null,passHref:N,replace:C,shallow:S,scroll:P,onClick:M,onMouseEnter:E,onTouchStart:z,legacyBehavior:_=!1,onNavigate:A,ref:T,unstable_dynamicOnHover:L,...O}=r;a=j,_&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let R=s.default.useContext(d.AppRouterContext),D=!1!==k,$=!1!==k?null===(t=k)||"auto"===t?h.FetchStrategy.PPR:h.FetchStrategy.Full:h.FetchStrategy.PPR,{href:U,as:I}=s.default.useMemo(()=>{let e=g(y);return{href:e,as:w?g(w):e}},[y,w]);if(_){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(a)}let B=_?n&&"object"==typeof n&&n.ref:T,F=s.default.useCallback(e=>(null!==R&&(v.current=(0,u.mountLinkInstance)(e,U,R,$,D,b)),()=>{v.current&&((0,u.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,u.unmountPrefetchableInstance)(e)}),[D,U,R,$,b]),G={ref:(0,c.useMergedRef)(F,B),onClick(r){_||"function"!=typeof M||M(r),_&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!R||r.defaultPrevented||function(r,t,a,n,o,i,l){if("undefined"!=typeof window){let d,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((d=r.currentTarget.getAttribute("target"))&&"_self"!==d||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,x.isLocalURL)(t)){o&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:p}=e.r(30800);s.default.startTransition(()=>{p(a||t,o?"replace":"push",i??!0,n.current)})}}(r,U,I,v,C,P,A)},onMouseEnter(e){_||"function"!=typeof E||E(e),_&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&D&&(0,u.onNavigationIntent)(e.currentTarget,!0===L)},onTouchStart:function(e){_||"function"!=typeof z||z(e),_&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&D&&(0,u.onNavigationIntent)(e.currentTarget,!0===L)}};return(0,p.isAbsoluteUrl)(I)?G.href=I:_&&!N&&("a"!==n.type||"href"in n.props)||(G.href=(0,f.addBasePath)(I)),o=_?s.default.cloneElement(n,G):(0,i.jsx)("a",{...O,...G,children:a}),(0,i.jsx)(m.Provider,{value:l,children:o})}e.r(57832);let m=(0,s.createContext)(u.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(m);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},1894,12514,46645,58280,e=>{"use strict";var r=e.i(54156),t=e.i(35264),a=e.i(76569),n=e.i(35491),o=e.i(13470),i=e.i(70451);let s=(0,i.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>s],12514);var l=e.i(50932);let d=(0,i.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,i.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);var p=e.i(60499);let f=(0,i.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>f],58280);var u=e.i(49681);let x=[{href:"/dashboard",label:"Dashboard",icon:s},{label:"Property",icon:l.Building2,subItems:[{href:"/execution",label:"Property List",icon:f},{href:"#",label:"Property Detail",icon:u.FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c},{href:"/templates",label:"Templates",icon:u.FileText},{href:"/profiles",label:"Profiles",icon:c}];function h({item:e,isActive:t,pathname:a}){let[i,s]=(0,n.useState)(!1),l=e.icon,d=e.subItems&&e.subItems.length>0;return((0,n.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&s(!0)},[a,e.label]),d)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:r=>{if(r.preventDefault(),d&&!i&&"Property"===e.label){let r=e.subItems?.[0];if(r?.href){window.location.href=r.href;return}}s(!i)},className:`re-nav-item w-full ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label}),(0,r.jsx)(p.ChevronDown,{className:`re-nav-chevron ${i?"rotated":""}`})]}),i&&(0,r.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let t=e.icon,n=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,r.jsxs)(o.default,{href:e.href||"#",className:`re-subnav-item ${n?"active":""}`,children:[(0,r.jsx)(t,{className:"re-subnav-icon"}),(0,r.jsx)("span",{children:e.label})]},e.label)})})]}):(0,r.jsxs)(o.default,{href:e.href||"#",className:`re-nav-item ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label})]})}function g(){let e=(0,a.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"re-sidebar",children:[(0,r.jsxs)("div",{className:"re-sidebar-brand",children:[(0,r.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,r.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,r.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,r.jsx)("div",{className:"re-nav-section",children:(0,r.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,r.jsx)("nav",{className:"re-nav",children:x.map((t,a)=>{let n=!1;return t.href?n=e===t.href:"Property"===t.label&&(n=e.startsWith("/execution")),(0,r.jsxs)("div",{children:["Rules"===t.label&&(0,r.jsx)("div",{className:"re-nav-divider"}),(0,r.jsx)(h,{item:t,isActive:n,pathname:e})]},t.label)})}),(0,r.jsx)("div",{className:"re-sidebar-footer",children:(0,r.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let b=(0,i.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function m(){let{admin:e,logout:o}=(0,t.useAuth)(),i=(0,a.useRouter)(),[s,l]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[f,u]=(0,n.useState)(!1);(0,n.useEffect)(()=>{l(localStorage.getItem("email")??"")},[]),(0,n.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let r=setInterval(e,1e3);return()=>clearInterval(r)},[]);let x=s?s.split("@")[0].slice(0,2).toUpperCase():"AD",h=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("header",{className:"re-header",children:[(0,r.jsxs)("div",{className:"re-header-left",children:[(0,r.jsxs)("div",{className:"re-brand",children:[(0,r.jsx)("div",{className:"re-brand-icon",children:(0,r.jsx)("div",{className:"re-brand-icon-inner"})}),(0,r.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,r.jsx)("div",{className:"re-divider-v"}),(0,r.jsxs)("div",{className:"re-breadcrumb",children:[(0,r.jsx)("span",{children:"Platform"}),(0,r.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,r.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,r.jsxs)("div",{className:"re-header-center",children:[(0,r.jsx)("div",{className:"re-time",children:d}),(0,r.jsx)("div",{className:"re-date",children:h})]}),(0,r.jsxs)("div",{className:"re-header-right",children:[(0,r.jsxs)("div",{className:"re-status",children:[(0,r.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsxs)("button",{className:`re-user-btn ${f?"open":""}`,onClick:()=>u(e=>!e),onBlur:()=>setTimeout(()=>u(!1),150),children:[(0,r.jsx)("div",{className:"re-avatar",children:x}),(0,r.jsxs)("div",{className:"re-user-info",children:[(0,r.jsx)("div",{className:"re-user-name",children:s||"Administrator"}),(0,r.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,r.jsx)(p.ChevronDown,{className:"re-chevron",size:13})]}),f&&(0,r.jsxs)("div",{className:"re-dropdown",children:[(0,r.jsxs)("div",{className:"re-dropdown-header",children:[(0,r.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,r.jsx)("div",{className:"re-dropdown-email",children:s||"Administrator"})]}),(0,r.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{o(),i.push("/login")},children:[(0,r.jsx)(b,{size:14}),"Sign out"]})]})]})]})]})]})}function v({children:e}){let{isAuthenticated:o}=(0,t.useAuth)(),i=(0,a.useRouter)(),[s,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),(0,n.useEffect)(()=>{s&&!o&&i.push("/login")},[s,o,i]),s&&o)?(0,r.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,r.jsx)(g,{}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,r.jsx)(m,{}),(0,r.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>v],1894)},59581,e=>{"use strict";let r=(0,e.i(70451).default)("Trash2",[["path",{d:"M3 6h18",key:"d0wm0j"}],["path",{d:"M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6",key:"4alrt4"}],["path",{d:"M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2",key:"v07s0e"}],["line",{x1:"10",x2:"10",y1:"11",y2:"17",key:"1uufr5"}],["line",{x1:"14",x2:"14",y1:"11",y2:"17",key:"xtxkd"}]]);e.s(["Trash2",()=>r],59581)},20980,e=>{"use strict";let r=(0,e.i(70451).default)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>r],20980)},35922,e=>{"use strict";let r=(0,e.i(70451).default)("X",[["path",{d:"M18 6 6 18",key:"1bl5f8"}],["path",{d:"m6 6 12 12",key:"d8bk6v"}]]);e.s(["X",()=>r],35922)},90354,e=>{"use strict";let r=(0,e.i(70451).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>r],90354)},20918,54331,e=>{"use strict";var r=e.i(70451);let t=(0,r.default)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);e.s(["Search",()=>t],20918);let a=(0,r.default)("Eye",[["path",{d:"M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0",key:"1nclc0"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]);e.s(["Eye",()=>a],54331)},30516,34340,e=>{"use strict";var r=e.i(70451);let t=(0,r.default)("ChevronLeft",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",()=>t],30516);let a=(0,r.default)("ChevronRight",[["path",{d:"m9 18 6-6-6-6",key:"mthhwq"}]]);e.s(["ChevronRight",()=>a],34340)},61787,e=>{"use strict";var r=e.i(54156),t=e.i(35491),a=e.i(13470),n=e.i(1894),o=e.i(20918),i=e.i(20980),s=e.i(90354),l=e.i(54331),d=e.i(59581),c=e.i(58280),p=e.i(30516),f=e.i(34340),u=e.i(35922);function x(){let[e,x]=(0,t.useState)([]),[h,g]=(0,t.useState)(!0),[b,m]=(0,t.useState)(""),[v,y]=(0,t.useState)(null),[w,j]=(0,t.useState)(1),[k,N]=(0,t.useState)(null);(0,t.useEffect)(()=>{(async()=>{try{g(!0);let e=await fetch("/api/execution/properties");if(!e.ok)throw Error("Failed to fetch properties");let r=await e.json();x(Array.isArray(r)?r:r.data||[])}catch(e){y(e instanceof Error?e.message:"An error occurred")}finally{g(!1)}})()},[]);let C=async(r,t)=>{if(t.preventDefault(),t.stopPropagation(),confirm("Are you sure you want to delete this property?")){N(r);try{await fetch(`/api/execution/properties/${r}`,{method:"DELETE"}),x(e.filter(e=>e._id!==r))}catch{alert("Failed to delete property. Please try again.")}finally{N(null)}}},S=e.filter(e=>{let r=b.toLowerCase();return e.address?.toLowerCase().includes(r)||e.city?.toLowerCase().includes(r)||e.state?.toLowerCase().includes(r)||e.zipCode?.toLowerCase().includes(r)}),P=Math.ceil(S.length/9),M=(w-1)*9,E=S.slice(M,M+9);(0,t.useEffect)(()=>{j(1)},[b]);let z=e=>{j(e),window.scrollTo({top:0,behavior:"smooth"})};return(0,r.jsxs)(n.AdminLayout,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ex {
          font-family: 'DM Sans', sans-serif;
          min-height: 100vh;
          background: #f8f9fb;
          padding: 36px 40px;
        }

        /* ── Page header ── */
        .ex-header {
          display: flex;
          align-items: flex-start;
          justify-content: space-between;
          margin-bottom: 32px;
          gap: 16px;
        }
        .ex-title {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 30px;
          font-weight: 600;
          color: #111827;
          letter-spacing: -0.01em;
          margin-bottom: 4px;
        }
        .ex-subtitle {
          font-size: 13px;
          font-weight: 300;
          color: #9ca3af;
          letter-spacing: 0.03em;
        }

        /* ── Stats bar ── */
        .ex-stats-bar {
          display: flex;
          gap: 16px;
          margin-bottom: 28px;
        }
        .ex-stat {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px 22px;
          position: relative;
          overflow: hidden;
          flex: 1;
          transition: box-shadow 0.15s;
        }
        .ex-stat:hover { box-shadow: 0 4px 16px rgba(0,0,0,0.06); }
        .ex-stat::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          border-radius: 10px 10px 0 0;
          background: linear-gradient(90deg, rgba(196,162,96,0.85), rgba(196,162,96,0.3));
        }
        .ex-stat-label {
          font-size: 10px;
          font-weight: 500;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #9ca3af;
          margin-bottom: 4px;
        }
        .ex-stat-value {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 28px;
          font-weight: 600;
          color: #111827;
          line-height: 1;
        }
        .ex-stat-value.gold { color: #92700a; }
        .ex-stat-value.blue { color: #4f46e5; }

        /* ── Search + filter row ── */
        .ex-search-row {
          display: flex;
          gap: 10px;
          margin-bottom: 24px;
          align-items: center;
        }
        .ex-search-wrap {
          position: relative;
          flex: 1;
        }
        .ex-search-icon {
          position: absolute;
          left: 14px;
          top: 50%;
          transform: translateY(-50%);
          width: 16px; height: 16px;
          color: #9ca3af;
          pointer-events: none;
        }
        .ex-search {
          width: 100%;
          padding: 10px 14px 10px 40px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 8px;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #111827;
          outline: none;
          transition: border-color 0.15s, box-shadow 0.15s;
        }
        .ex-search::placeholder { color: #9ca3af; }
        .ex-search:focus {
          border-color: rgba(196,162,96,0.5);
          box-shadow: 0 0 0 3px rgba(196,162,96,0.08);
        }
        .ex-clear-btn {
          position: absolute;
          right: 12px;
          top: 50%;
          transform: translateY(-50%);
          background: none;
          border: none;
          cursor: pointer;
          color: #9ca3af;
          display: flex; align-items: center; justify-content: center;
          padding: 2px;
          transition: color 0.12s;
        }
        .ex-clear-btn:hover { color: #374151; }
        .ex-clear-btn svg { width: 14px; height: 14px; }

        .ex-filter-count {
          font-size: 12px;
          color: #6b7280;
          white-space: nowrap;
          padding: 0 4px;
        }

        /* ── Error ── */
        .ex-error {
          margin-bottom: 20px;
          padding: 12px 16px;
          background: #fef2f2;
          border: 1px solid #fecaca;
          border-radius: 8px;
          font-size: 13px;
          color: #b91c1c;
        }

        /* ── Grid ── */
        .ex-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
          margin-bottom: 24px;
        }

        /* Property card */
        .prop-card {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          transition: border-color 0.15s, box-shadow 0.2s, transform 0.15s;
          position: relative;
        }
        .prop-card:hover {
          border-color: rgba(196,162,96,0.45);
          box-shadow: 0 8px 28px rgba(0,0,0,0.08);
          transform: translateY(-2px);
        }
        .prop-card.deleting {
          opacity: 0.5;
          pointer-events: none;
        }

        /* Card top accent */
        .prop-card-top {
          height: 3px;
          background: linear-gradient(90deg, rgba(196,162,96,0.7), rgba(196,162,96,0.15));
          flex-shrink: 0;
        }

        .prop-card-body {
          padding: 20px;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Index number */
        .prop-index {
          font-family: 'Cormorant Garamond', Georgia, serif;
          font-size: 11px;
          font-weight: 500;
          color: rgba(196,162,96,0.6);
          letter-spacing: 0.1em;
          margin-bottom: 10px;
        }

        .prop-address {
          font-size: 14px;
          font-weight: 500;
          color: #111827;
          line-height: 1.4;
          margin-bottom: 14px;
          flex: 1;
          display: -webkit-box;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }

        .prop-meta {
          display: flex;
          flex-direction: column;
          gap: 6px;
          margin-bottom: 16px;
        }
        .prop-meta-row {
          display: flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          color: #6b7280;
          font-weight: 300;
        }
        .prop-meta-row svg { width: 12px; height: 12px; color: #9ca3af; flex-shrink: 0; }

        /* Action buttons */
        .prop-actions {
          display: flex;
          gap: 8px;
          padding: 14px 20px;
          border-top: 1px solid #f3f4f6;
          background: #fafafa;
        }
        .prop-view-btn {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 6px;
          padding: 8px 12px;
          background: rgba(196,162,96,0.08);
          border: 1px solid rgba(196,162,96,0.2);
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 500;
          color: #92700a;
          text-decoration: none;
          letter-spacing: 0.03em;
          transition: background 0.15s, border-color 0.15s;
        }
        .prop-view-btn:hover {
          background: rgba(196,162,96,0.14);
          border-color: rgba(196,162,96,0.35);
        }
        .prop-view-btn svg { width: 13px; height: 13px; }

        .prop-del-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 8px 10px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          cursor: pointer;
          transition: background 0.15s, border-color 0.15s, color 0.15s;
          color: #9ca3af;
        }
        .prop-del-btn:hover {
          background: #fef2f2;
          border-color: #fecaca;
          color: #dc2626;
        }
        .prop-del-btn svg { width: 13px; height: 13px; }

        /* ── Skeleton ── */
        .skel {
          background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: skel 1.4s infinite;
          border-radius: 4px;
        }
        @keyframes skel { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        .prop-card-skel {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          overflow: hidden;
          padding: 20px;
        }
        .prop-card-skel-top { height: 3px; background: #f3f4f6; margin: -20px -20px 16px; }

        /* ── Empty state ── */
        .ex-empty {
          grid-column: 1 / -1;
          text-align: center;
          padding: 64px 24px;
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
        }
        .ex-empty-icon {
          width: 56px; height: 56px;
          background: #f9fafb;
          border: 1px solid #e5e7eb;
          border-radius: 50%;
          display: flex; align-items: center; justify-content: center;
          margin: 0 auto 16px;
        }
        .ex-empty-icon svg { width: 24px; height: 24px; color: #9ca3af; }
        .ex-empty-title { font-size: 15px; font-weight: 500; color: #374151; margin-bottom: 6px; }
        .ex-empty-sub { font-size: 13px; color: #9ca3af; font-weight: 300; }

        /* ── Pagination ── */
        .ex-pagination {
          background: #fff;
          border: 1px solid #e5e7eb;
          border-radius: 10px;
          padding: 16px 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
        }
        .ex-pagination-info {
          font-size: 12px;
          color: #6b7280;
          font-weight: 300;
        }
        .ex-pagination-info strong { color: #111827; font-weight: 500; }
        .ex-pagination-controls { display: flex; align-items: center; gap: 4px; }

        .pg-btn {
          min-width: 34px;
          height: 34px;
          padding: 0 8px;
          display: flex; align-items: center; justify-content: center;
          background: none;
          border: 1px solid #e5e7eb;
          border-radius: 6px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          font-weight: 400;
          color: #6b7280;
          cursor: pointer;
          transition: all 0.12s;
        }
        .pg-btn:hover:not(:disabled) {
          background: #f9fafb;
          border-color: rgba(196,162,96,0.35);
          color: #92700a;
        }
        .pg-btn.active {
          background: rgba(196,162,96,0.1);
          border-color: rgba(196,162,96,0.4);
          color: #92700a;
          font-weight: 500;
        }
        .pg-btn:disabled { opacity: 0.35; cursor: not-allowed; }
        .pg-btn svg { width: 14px; height: 14px; }
        .pg-ellipsis { padding: 0 4px; color: #9ca3af; font-size: 13px; }
      `}),(0,r.jsxs)("div",{className:"ex",children:[(0,r.jsx)("div",{className:"ex-header",children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"ex-title",children:"Property Executions"}),(0,r.jsx)("div",{className:"ex-subtitle",children:"Manage and monitor all properties in the execution pipeline"})]})}),(0,r.jsxs)("div",{className:"ex-stats-bar",children:[(0,r.jsxs)("div",{className:"ex-stat",children:[(0,r.jsx)("div",{className:"ex-stat-label",children:"Total Properties"}),(0,r.jsx)("div",{className:`ex-stat-value gold ${h?"skel":""}`,style:h?{height:28,width:48,display:"block"}:{},children:!h&&e.length})]}),(0,r.jsxs)("div",{className:"ex-stat",children:[(0,r.jsx)("div",{className:"ex-stat-label",children:"Filtered Results"}),(0,r.jsx)("div",{className:"ex-stat-value blue",children:h?"—":S.length!==e.length?S.length:"—"})]}),(0,r.jsxs)("div",{className:"ex-stat",children:[(0,r.jsx)("div",{className:"ex-stat-label",children:"Current Page"}),(0,r.jsx)("div",{className:"ex-stat-value",children:h?"—":`${w} / ${P||1}`})]})]}),(0,r.jsxs)("div",{className:"ex-search-row",children:[(0,r.jsxs)("div",{className:"ex-search-wrap",children:[(0,r.jsx)(o.Search,{className:"ex-search-icon"}),(0,r.jsx)("input",{type:"text",placeholder:"Search by address, city, state or zip code…",value:b,onChange:e=>m(e.target.value),className:"ex-search"}),b&&(0,r.jsx)("button",{className:"ex-clear-btn",onClick:()=>m(""),children:(0,r.jsx)(u.X,{})})]}),b&&!h&&(0,r.jsxs)("span",{className:"ex-filter-count",children:[S.length," result",1!==S.length?"s":""]})]}),v&&(0,r.jsx)("div",{className:"ex-error",children:v}),(0,r.jsx)("div",{className:"ex-grid",children:h?[...Array(9)].map((e,t)=>(0,r.jsxs)("div",{className:"prop-card-skel",children:[(0,r.jsx)("div",{className:"prop-card-skel-top"}),(0,r.jsx)("div",{className:"skel",style:{height:10,width:60,marginBottom:12}}),(0,r.jsx)("div",{className:"skel",style:{height:16,marginBottom:6}}),(0,r.jsx)("div",{className:"skel",style:{height:16,width:"70%",marginBottom:20}}),(0,r.jsx)("div",{className:"skel",style:{height:12,width:"80%",marginBottom:8}}),(0,r.jsx)("div",{className:"skel",style:{height:12,width:"55%",marginBottom:20}}),(0,r.jsx)("div",{className:"skel",style:{height:34,borderRadius:6}})]},t)):0===S.length?(0,r.jsxs)("div",{className:"ex-empty",children:[(0,r.jsx)("div",{className:"ex-empty-icon",children:b?(0,r.jsx)(o.Search,{}):(0,r.jsx)(c.Home,{})}),(0,r.jsx)("div",{className:"ex-empty-title",children:b?"No properties match your search":"No properties yet"}),(0,r.jsx)("div",{className:"ex-empty-sub",children:b?"Try adjusting your search terms":"Properties added to the execution pipeline will appear here"})]}):E.map((e,t)=>(0,r.jsxs)("div",{className:`prop-card ${k===e._id?"deleting":""}`,children:[(0,r.jsx)("div",{className:"prop-card-top"}),(0,r.jsxs)("div",{className:"prop-card-body",children:[(0,r.jsx)("div",{className:"prop-address",children:e.address||"Address not specified"}),(0,r.jsxs)("div",{className:"prop-meta",children:[(0,r.jsxs)("div",{className:"prop-meta-row",children:[(0,r.jsx)(i.MapPin,{}),[e.city,e.state,e.zipCode].filter(Boolean).join(", ")||"Location not specified"]}),e.createdAt&&(0,r.jsxs)("div",{className:"prop-meta-row",children:[(0,r.jsx)(s.Calendar,{}),new Date(e.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})]})]})]}),(0,r.jsxs)("div",{className:"prop-actions",children:[(0,r.jsxs)(a.default,{href:`/execution/${e._id}`,className:"prop-view-btn",children:[(0,r.jsx)(l.Eye,{}),"View Details"]}),(0,r.jsx)("button",{onClick:r=>C(e._id,r),className:"prop-del-btn",title:"Delete property",children:(0,r.jsx)(d.Trash2,{})})]})]},e._id))}),!h&&P>1&&(0,r.jsxs)("div",{className:"ex-pagination",children:[(0,r.jsxs)("div",{className:"ex-pagination-info",children:["Showing ",(0,r.jsx)("strong",{children:M+1}),"–",(0,r.jsx)("strong",{children:Math.min(M+9,S.length)})," of ",(0,r.jsx)("strong",{children:S.length})," properties"]}),(0,r.jsxs)("div",{className:"ex-pagination-controls",children:[(0,r.jsx)("button",{className:"pg-btn",onClick:()=>z(w-1),disabled:1===w,children:(0,r.jsx)(p.ChevronLeft,{})}),(()=>{let e=[];if(P<=5)for(let r=1;r<=P;r++)e.push(r);else w<=3?e.push(1,2,3,4,"...",P):w>=P-2?e.push(1,"...",P-3,P-2,P-1,P):e.push(1,"...",w-1,w,w+1,"...",P);return e})().map((e,t)=>"..."===e?(0,r.jsx)("span",{className:"pg-ellipsis",children:"…"},`e-${t}`):(0,r.jsx)("button",{className:`pg-btn ${w===e?"active":""}`,onClick:()=>z(e),children:e},e)),(0,r.jsx)("button",{className:"pg-btn",onClick:()=>z(w+1),disabled:w===P,children:(0,r.jsx)(f.ChevronRight,{})})]})]})]})]})}e.s(["default",()=>x])}]);