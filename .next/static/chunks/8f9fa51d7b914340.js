(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,49681,70451,e=>{"use strict";var r=e.i(35491);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:o=2,absoluteStrokeWidth:i,className:s="",children:l,iconNode:d,...c},u)=>(0,r.createElement)("svg",{ref:u,...a,width:n,height:n,stroke:e,strokeWidth:i?24*Number(o)/Number(n):o,className:t("lucide",s),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),o=(e,a)=>{let o=(0,r.forwardRef)(({className:o,...i},s)=>(0,r.createElement)(n,{ref:s,iconNode:a,className:t(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,o),...i}));return o.displayName=`${e}`,o};e.s(["default",()=>o],70451);let i=o("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>i],49681)},50932,e=>{"use strict";let r=(0,e.i(70451).default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>r],50932)},60499,e=>{"use strict";let r=(0,e.i(70451).default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>r],60499)},14057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={assign:function(){return l},searchParamsToUrlQuery:function(){return o},urlQueryToSearchParams:function(){return s}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});function o(e){let r={};for(let[t,a]of e.entries()){let e=r[t];void 0===e?r[t]=a:Array.isArray(e)?e.push(a):r[t]=[e,a]}return r}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function s(e){let r=new URLSearchParams;for(let[t,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)r.append(t,i(e));else r.set(t,i(a));return r}function l(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,a]of t.entries())e.append(r,a)}return e}},70249,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={formatUrl:function(){return s},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let o=e.r(4960)._(e.r(67133)),i=/https?|ftp|gopher|file/;function s(e){let{auth:r,hostname:t}=e,a=e.protocol||"",n=e.pathname||"",s=e.hash||"",l=e.query||"",d=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?d=r+e.host:t&&(d=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(o.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),s&&"#"!==s[0]&&(s="#"+s),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${n}${c}${s}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return s(e)}},47550,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,r){let t=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=o(e,a)),r&&(n.current=o(r,a))},[e,r])}function o(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},99901,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return b},MiddlewareNotFoundError:function(){return w},MissingStaticPage:function(){return y},NormalizeError:function(){return g},PageNotFoundError:function(){return v},SP:function(){return m},ST:function(){return x},WEB_VITALS:function(){return o},execOnce:function(){return i},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return j}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let o=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let r,t=!1;return(...a)=>(t||(t=!0,r=e(...a)),r)}let s=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>s.test(e);function d(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function c(){let{href:e}=window.location,r=d();return e.substring(r.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function h(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await h(r.Component,r.ctx)}:{};let a=await e.getInitialProps(r);if(t&&p(t))return a;if(!a)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let m="undefined"!=typeof performance,x=m&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class b extends Error{}class g extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class w extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return o}});let a=e.r(99901),n=e.r(13042);function o(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let r=(0,a.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},57832,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return b},useLinkStatus:function(){return v}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let o=e.r(4960),i=e.r(54156),s=o._(e.r(35491)),l=e.r(70249),d=e.r(30944),c=e.r(47550),u=e.r(99901),p=e.r(4471);e.r(14057);let f=e.r(11535),h=e.r(2239),m=e.r(83671);function x(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function b(r){var t;let a,n,o,[l,b]=(0,s.useOptimistic)(f.IDLE_LINK_STATUS),v=(0,s.useRef)(null),{href:y,as:w,children:j,prefetch:k=null,passHref:N,replace:S,shallow:P,scroll:C,onClick:M,onMouseEnter:E,onTouchStart:O,legacyBehavior:z=!1,onNavigate:_,ref:R,unstable_dynamicOnHover:T,...A}=r;a=j,z&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let L=s.default.useContext(d.AppRouterContext),I=!1!==k,D=!1!==k?null===(t=k)||"auto"===t?m.FetchStrategy.PPR:m.FetchStrategy.Full:m.FetchStrategy.PPR,{href:U,as:$}=s.default.useMemo(()=>{let e=x(y);return{href:e,as:w?x(w):e}},[y,w]);if(z){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=s.default.Children.only(a)}let F=z?n&&"object"==typeof n&&n.ref:R,B=s.default.useCallback(e=>(null!==L&&(v.current=(0,f.mountLinkInstance)(e,U,L,D,I,b)),()=>{v.current&&((0,f.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,f.unmountPrefetchableInstance)(e)}),[I,U,L,D,b]),V={ref:(0,c.useMergedRef)(B,F),onClick(r){z||"function"!=typeof M||M(r),z&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!L||r.defaultPrevented||function(r,t,a,n,o,i,l){if("undefined"!=typeof window){let d,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((d=r.currentTarget.getAttribute("target"))&&"_self"!==d||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(t)){o&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(30800);s.default.startTransition(()=>{u(a||t,o?"replace":"push",i??!0,n.current)})}}(r,U,$,v,S,C,_)},onMouseEnter(e){z||"function"!=typeof E||E(e),z&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),L&&I&&(0,f.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){z||"function"!=typeof O||O(e),z&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),L&&I&&(0,f.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,u.isAbsoluteUrl)($)?V.href=$:z&&!N&&("a"!==n.type||"href"in n.props)||(V.href=(0,p.addBasePath)($)),o=z?s.default.cloneElement(n,V):(0,i.jsx)("a",{...A,...V,children:a}),(0,i.jsx)(g.Provider,{value:l,children:o})}e.r(57832);let g=(0,s.createContext)(f.IDLE_LINK_STATUS),v=()=>(0,s.useContext)(g);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},1894,12514,46645,58280,e=>{"use strict";var r=e.i(54156),t=e.i(35264),a=e.i(76569),n=e.i(35491),o=e.i(13470),i=e.i(70451);let s=(0,i.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>s],12514);var l=e.i(50932);let d=(0,i.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,i.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);var u=e.i(60499);let p=(0,i.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>p],58280);var f=e.i(49681);let h=[{href:"/dashboard",label:"Dashboard",icon:s},{label:"Property",icon:l.Building2,subItems:[{href:"/execution",label:"Property List",icon:p},{href:"#",label:"Property Detail",icon:f.FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c},{href:"/templates",label:"Templates",icon:f.FileText},{href:"/profiles",label:"Profiles",icon:c}];function m({item:e,isActive:t,pathname:a}){let[i,s]=(0,n.useState)(!1),l=e.icon,d=e.subItems&&e.subItems.length>0;return((0,n.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&s(!0)},[a,e.label]),d)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:r=>{if(r.preventDefault(),d&&!i&&"Property"===e.label){let r=e.subItems?.[0];if(r?.href){window.location.href=r.href;return}}s(!i)},className:`re-nav-item w-full ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label}),(0,r.jsx)(u.ChevronDown,{className:`re-nav-chevron ${i?"rotated":""}`})]}),i&&(0,r.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let t=e.icon,n=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,r.jsxs)(o.default,{href:e.href||"#",className:`re-subnav-item ${n?"active":""}`,children:[(0,r.jsx)(t,{className:"re-subnav-icon"}),(0,r.jsx)("span",{children:e.label})]},e.label)})})]}):(0,r.jsxs)(o.default,{href:e.href||"#",className:`re-nav-item ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label})]})}function x(){let e=(0,a.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"re-sidebar",children:[(0,r.jsxs)("div",{className:"re-sidebar-brand",children:[(0,r.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,r.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,r.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,r.jsx)("div",{className:"re-nav-section",children:(0,r.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,r.jsx)("nav",{className:"re-nav",children:h.map((t,a)=>{let n=!1;return t.href?n=e===t.href:"Property"===t.label&&(n=e.startsWith("/execution")),(0,r.jsxs)("div",{children:["Rules"===t.label&&(0,r.jsx)("div",{className:"re-nav-divider"}),(0,r.jsx)(m,{item:t,isActive:n,pathname:e})]},t.label)})}),(0,r.jsx)("div",{className:"re-sidebar-footer",children:(0,r.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let b=(0,i.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function g(){let{admin:e,logout:o}=(0,t.useAuth)(),i=(0,a.useRouter)(),[s,l]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[p,f]=(0,n.useState)(!1);(0,n.useEffect)(()=>{l(localStorage.getItem("email")??"")},[]),(0,n.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let r=setInterval(e,1e3);return()=>clearInterval(r)},[]);let h=s?s.split("@")[0].slice(0,2).toUpperCase():"AD",m=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("header",{className:"re-header",children:[(0,r.jsxs)("div",{className:"re-header-left",children:[(0,r.jsxs)("div",{className:"re-brand",children:[(0,r.jsx)("div",{className:"re-brand-icon",children:(0,r.jsx)("div",{className:"re-brand-icon-inner"})}),(0,r.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,r.jsx)("div",{className:"re-divider-v"}),(0,r.jsxs)("div",{className:"re-breadcrumb",children:[(0,r.jsx)("span",{children:"Platform"}),(0,r.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,r.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,r.jsxs)("div",{className:"re-header-center",children:[(0,r.jsx)("div",{className:"re-time",children:d}),(0,r.jsx)("div",{className:"re-date",children:m})]}),(0,r.jsxs)("div",{className:"re-header-right",children:[(0,r.jsxs)("div",{className:"re-status",children:[(0,r.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsxs)("button",{className:`re-user-btn ${p?"open":""}`,onClick:()=>f(e=>!e),onBlur:()=>setTimeout(()=>f(!1),150),children:[(0,r.jsx)("div",{className:"re-avatar",children:h}),(0,r.jsxs)("div",{className:"re-user-info",children:[(0,r.jsx)("div",{className:"re-user-name",children:s||"Administrator"}),(0,r.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,r.jsx)(u.ChevronDown,{className:"re-chevron",size:13})]}),p&&(0,r.jsxs)("div",{className:"re-dropdown",children:[(0,r.jsxs)("div",{className:"re-dropdown-header",children:[(0,r.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,r.jsx)("div",{className:"re-dropdown-email",children:s||"Administrator"})]}),(0,r.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{o(),i.push("/login")},children:[(0,r.jsx)(b,{size:14}),"Sign out"]})]})]})]})]})]})}function v({children:e}){let{isAuthenticated:o}=(0,t.useAuth)(),i=(0,a.useRouter)(),[s,l]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{l(!0)},[]),(0,n.useEffect)(()=>{s&&!o&&i.push("/login")},[s,o,i]),s&&o)?(0,r.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,r.jsx)(x,{}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,r.jsx)(g,{}),(0,r.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>v],1894)},66950,e=>{"use strict";var r=e.i(54156),t=e.i(35491),a=e.i(1894);let n=(0,e.i(70451).default)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),o={COMP:{label:"Comparables",icon:"📊"},DOM:{label:"Dominant Factors",icon:"🎯"},ARV:{label:"After Repair Value",icon:"🏠"},PROFIT:{label:"Profitability",icon:"💰"}};function i(){let[e,i]=(0,t.useState)([]),[s,l]=(0,t.useState)(null),[d,c]=(0,t.useState)(null),[u,p]=(0,t.useState)(!0),[f,h]=(0,t.useState)(!1);(0,t.useEffect)(()=>{let e="dark"===localStorage.getItem("theme")||null===localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches;h(e),document.documentElement.classList.toggle("dark",e),fetch("/api/rules").then(e=>e.json()).then(e=>{i(e),p(!1)}).catch(()=>p(!1))},[]);let m=async(e,r)=>{l(null),c(e),setTimeout(()=>c(null),2e3),await fetch(`/api/rules/${e}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:r})}).catch(console.error)},x=e.reduce((e,r)=>(e[r.engine]=e[r.engine]||[],e[r.engine].push(r),e),{});return u?(0,r.jsx)(a.AdminLayout,{children:(0,r.jsx)("div",{className:"p-8 flex items-center justify-center min-h-screen",children:(0,r.jsxs)("div",{className:"text-center space-y-4",children:[(0,r.jsx)("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"Loading rules..."})]})})}):(0,r.jsxs)(a.AdminLayout,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"rules-container",children:[(0,r.jsx)("div",{className:"px-8 py-8",children:(0,r.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,r.jsx)("h1",{className:"text-4xl font-bold mb-2",style:{fontFamily:"'Syne', sans-serif"},children:"Underwriting Rules"}),(0,r.jsx)("p",{className:"text-slate-500 dark:text-slate-400 text-sm mb-8",children:"Phase 1 Configuration"})]})}),(0,r.jsx)("div",{className:"px-8 pb-12 max-w-6xl mx-auto",children:(0,r.jsx)("div",{className:"space-y-8",children:Object.entries(x).map(([e,t],a)=>{let i=o[e];return(0,r.jsxs)("div",{className:"engine-card rounded-12",style:{animationDelay:`${.1*a}s`},children:[(0,r.jsx)("div",{className:"engine-header px-8 py-6 relative",children:(0,r.jsxs)("div",{className:"flex items-center relative z-10",children:[(0,r.jsx)("span",{className:"engine-icon",children:i.icon}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h2",{className:"text-2xl font-bold",style:{fontFamily:"'Syne', sans-serif"},children:i.label}),(0,r.jsxs)("p",{className:"text-slate-500 dark:text-slate-400 text-sm mt-1",children:[t.length," rules configured"]})]})]})}),(0,r.jsx)("div",{className:"p-8 space-y-4",children:t.map((e,t)=>(0,r.jsxs)("div",{className:"rule-item",style:{animationDelay:`${.1*a+.05*t}s`},children:[(0,r.jsx)("div",{className:"flex justify-between items-start mb-2",children:(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("div",{className:"rule-key",children:e.key}),(0,r.jsx)("p",{className:"rule-description",children:e.description}),e.locked&&(0,r.jsx)("div",{className:"locked-badge",children:"🔒 Locked"})]})}),(0,r.jsxs)("div",{className:"flex justify-between items-center gap-4",children:[(0,r.jsxs)("div",{className:"rule-input-group flex-1",children:[(0,r.jsx)("input",{type:"number",defaultValue:e.value,onBlur:r=>m(e._id,Number(r.target.value)),onFocus:()=>l(e._id),className:"rule-input flex-1",disabled:e.locked,step:"0.01"}),e.unit&&(0,r.jsx)("span",{className:"rule-unit",children:e.unit})]}),d===e._id&&(0,r.jsxs)("div",{className:"save-indicator",children:[(0,r.jsx)(n,{size:16,strokeWidth:3}),(0,r.jsx)("span",{children:"Saved"})]})]})]},e._id))})]},e)})})})]})]})}e.s(["default",()=>i],66950)}]);