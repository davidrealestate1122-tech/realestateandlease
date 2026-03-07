(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,70451,49681,e=>{"use strict";var r=e.i(35491);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var n={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let a=(0,r.forwardRef)(({color:e="currentColor",size:a=24,strokeWidth:i=2,absoluteStrokeWidth:s,className:o="",children:l,iconNode:d,...c},u)=>(0,r.createElement)("svg",{ref:u,...n,width:a,height:a,stroke:e,strokeWidth:s?24*Number(i)/Number(a):i,className:t("lucide",o),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(l)?l:[l]])),i=(e,n)=>{let i=(0,r.forwardRef)(({className:i,...s},o)=>(0,r.createElement)(a,{ref:o,iconNode:n,className:t(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,i),...s}));return i.displayName=`${e}`,i};e.s(["default",()=>i],70451);let s=i("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>s],49681)},14057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},67133,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={assign:function(){return l},searchParamsToUrlQuery:function(){return i},urlQueryToSearchParams:function(){return o}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});function i(e){let r={};for(let[t,n]of e.entries()){let e=r[t];void 0===e?r[t]=n:Array.isArray(e)?e.push(n):r[t]=[e,n]}return r}function s(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function o(e){let r=new URLSearchParams;for(let[t,n]of Object.entries(e))if(Array.isArray(n))for(let e of n)r.append(t,s(e));else r.set(t,s(n));return r}function l(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,n]of t.entries())e.append(r,n)}return e}},70249,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={formatUrl:function(){return o},formatWithValidation:function(){return d},urlObjectKeys:function(){return l}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=e.r(4960)._(e.r(67133)),s=/https?|ftp|gopher|file/;function o(e){let{auth:r,hostname:t}=e,n=e.protocol||"",a=e.pathname||"",o=e.hash||"",l=e.query||"",d=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?d=r+e.host:t&&(d=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(d+=":"+e.port)),l&&"object"==typeof l&&(l=String(i.urlQueryToSearchParams(l)));let c=e.search||l&&`?${l}`||"";return n&&!n.endsWith(":")&&(n+=":"),e.slashes||(!n||s.test(n))&&!1!==d?(d="//"+(d||""),a&&"/"!==a[0]&&(a="/"+a)):d||(d=""),o&&"#"!==o[0]&&(o="#"+o),c&&"?"!==c[0]&&(c="?"+c),a=a.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${n}${d}${a}${c}${o}`}let l=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return o(e)}},47550,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return a}});let n=e.r(35491);function a(e,r){let t=(0,n.useRef)(null),a=(0,n.useRef)(null);return(0,n.useCallback)(n=>{if(null===n){let e=t.current;e&&(t.current=null,e());let r=a.current;r&&(a.current=null,r())}else e&&(t.current=i(e,n)),r&&(a.current=i(r,n))},[e,r])}function i(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},99901,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={DecodeError:function(){return g},MiddlewareNotFoundError:function(){return j},MissingStaticPage:function(){return y},NormalizeError:function(){return b},PageNotFoundError:function(){return v},SP:function(){return x},ST:function(){return m},WEB_VITALS:function(){return i},execOnce:function(){return s},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return l},isResSent:function(){return f},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return p},stringifyError:function(){return w}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=["CLS","FCP","FID","INP","LCP","TTFB"];function s(e){let r,t=!1;return(...n)=>(t||(t=!0,r=e(...n)),r)}let o=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,l=e=>o.test(e);function d(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function c(){let{href:e}=window.location,r=d();return e.substring(r.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function f(e){return e.finished||e.headersSent}function p(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function h(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await h(r.Component,r.ctx)}:{};let n=await e.getInitialProps(r);if(t&&f(t))return n;if(!n)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${n}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return n}let x="undefined"!=typeof performance,m=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class g extends Error{}class b extends Error{}class v extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class y extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class j extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function w(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return i}});let n=e.r(99901),a=e.r(13042);function i(e){if(!(0,n.isAbsoluteUrl)(e))return!0;try{let r=(0,n.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,a.hasBasePath)(t.pathname)}catch(e){return!1}}},57832,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return n}});let n=e=>{}},13470,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n={default:function(){return g},useLinkStatus:function(){return v}};for(var a in n)Object.defineProperty(t,a,{enumerable:!0,get:n[a]});let i=e.r(4960),s=e.r(54156),o=i._(e.r(35491)),l=e.r(70249),d=e.r(30944),c=e.r(47550),u=e.r(99901),f=e.r(4471);e.r(14057);let p=e.r(11535),h=e.r(2239),x=e.r(83671);function m(e){return"string"==typeof e?e:(0,l.formatUrl)(e)}function g(r){var t;let n,a,i,[l,g]=(0,o.useOptimistic)(p.IDLE_LINK_STATUS),v=(0,o.useRef)(null),{href:y,as:j,children:w,prefetch:N=null,passHref:k,replace:C,shallow:P,scroll:M,onClick:S,onMouseEnter:E,onTouchStart:O,legacyBehavior:A=!1,onNavigate:z,ref:R,unstable_dynamicOnHover:_,...T}=r;n=w,A&&("string"==typeof n||"number"==typeof n)&&(n=(0,s.jsx)("a",{children:n}));let L=o.default.useContext(d.AppRouterContext),D=!1!==N,U=!1!==N?null===(t=N)||"auto"===t?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,{href:$,as:I}=o.default.useMemo(()=>{let e=m(y);return{href:e,as:j?m(j):e}},[y,j]);if(A){if(n?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});a=o.default.Children.only(n)}let F=A?a&&"object"==typeof a&&a.ref:R,B=o.default.useCallback(e=>(null!==L&&(v.current=(0,p.mountLinkInstance)(e,$,L,U,D,g)),()=>{v.current&&((0,p.unmountLinkForCurrentNavigation)(v.current),v.current=null),(0,p.unmountPrefetchableInstance)(e)}),[D,$,L,U,g]),V={ref:(0,c.useMergedRef)(B,F),onClick(r){A||"function"!=typeof S||S(r),A&&a.props&&"function"==typeof a.props.onClick&&a.props.onClick(r),!L||r.defaultPrevented||function(r,t,n,a,i,s,l){if("undefined"!=typeof window){let d,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((d=r.currentTarget.getAttribute("target"))&&"_self"!==d||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(t)){i&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),l){let e=!1;if(l({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(30800);o.default.startTransition(()=>{u(n||t,i?"replace":"push",s??!0,a.current)})}}(r,$,I,v,C,M,z)},onMouseEnter(e){A||"function"!=typeof E||E(e),A&&a.props&&"function"==typeof a.props.onMouseEnter&&a.props.onMouseEnter(e),L&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===_)},onTouchStart:function(e){A||"function"!=typeof O||O(e),A&&a.props&&"function"==typeof a.props.onTouchStart&&a.props.onTouchStart(e),L&&D&&(0,p.onNavigationIntent)(e.currentTarget,!0===_)}};return(0,u.isAbsoluteUrl)(I)?V.href=I:A&&!k&&("a"!==a.type||"href"in a.props)||(V.href=(0,f.addBasePath)(I)),i=A?o.default.cloneElement(a,V):(0,s.jsx)("a",{...T,...V,children:n}),(0,s.jsx)(b.Provider,{value:l,children:i})}e.r(57832);let b=(0,o.createContext)(p.IDLE_LINK_STATUS),v=()=>(0,o.useContext)(b);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},1894,12514,50932,46645,60499,58280,e=>{"use strict";var r=e.i(54156),t=e.i(35264),n=e.i(76569),a=e.i(35491),i=e.i(13470),s=e.i(70451);let o=(0,s.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>o],12514);let l=(0,s.default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>l],50932);let d=(0,s.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,s.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);let u=(0,s.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>u],60499);let f=(0,s.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>f],58280);let p=[{href:"/dashboard",label:"Dashboard",icon:o},{label:"Property",icon:l,subItems:[{href:"/execution",label:"Property List",icon:f},{href:"#",label:"Property Detail",icon:e.i(49681).FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c}];function h({item:e,isActive:t,pathname:n}){let[s,o]=(0,a.useState)(!1),l=e.icon,d=e.subItems&&e.subItems.length>0;return((0,a.useEffect)(()=>{"Property"===e.label&&n.includes("/execution")&&o(!0)},[n,e.label]),d)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:r=>{if(r.preventDefault(),d&&!s&&"Property"===e.label){let r=e.subItems?.[0];if(r?.href){window.location.href=r.href;return}}o(!s)},className:`re-nav-item w-full ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label}),(0,r.jsx)(u,{className:`re-nav-chevron ${s?"rotated":""}`})]}),s&&(0,r.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let t=e.icon,a=n===e.href||"Property Detail"===e.label&&n.match(/^\/execution\/[a-f0-9]{24}$/);return(0,r.jsxs)(i.default,{href:e.href||"#",className:`re-subnav-item ${a?"active":""}`,children:[(0,r.jsx)(t,{className:"re-subnav-icon"}),(0,r.jsx)("span",{children:e.label})]},e.label)})})]}):(0,r.jsxs)(i.default,{href:e.href||"#",className:`re-nav-item ${t?"active":""}`,children:[(0,r.jsx)(l,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label})]})}function x(){let e=(0,n.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"re-sidebar",children:[(0,r.jsxs)("div",{className:"re-sidebar-brand",children:[(0,r.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,r.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,r.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,r.jsx)("div",{className:"re-nav-section",children:(0,r.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,r.jsx)("nav",{className:"re-nav",children:p.map((t,n)=>{let a=!1;return t.href?a=e===t.href:"Property"===t.label&&(a=e.startsWith("/execution")),(0,r.jsxs)("div",{children:["Rules"===t.label&&(0,r.jsx)("div",{className:"re-nav-divider"}),(0,r.jsx)(h,{item:t,isActive:a,pathname:e})]},t.label)})}),(0,r.jsx)("div",{className:"re-sidebar-footer",children:(0,r.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let m=(0,s.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function g(){let{admin:e,logout:i}=(0,t.useAuth)(),s=(0,n.useRouter)(),[o,l]=(0,a.useState)(""),[d,c]=(0,a.useState)(""),[f,p]=(0,a.useState)(!1);(0,a.useEffect)(()=>{l(localStorage.getItem("email")??"")},[]),(0,a.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let r=setInterval(e,1e3);return()=>clearInterval(r)},[]);let h=o?o.split("@")[0].slice(0,2).toUpperCase():"AD",x=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("header",{className:"re-header",children:[(0,r.jsxs)("div",{className:"re-header-left",children:[(0,r.jsxs)("div",{className:"re-brand",children:[(0,r.jsx)("div",{className:"re-brand-icon",children:(0,r.jsx)("div",{className:"re-brand-icon-inner"})}),(0,r.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,r.jsx)("div",{className:"re-divider-v"}),(0,r.jsxs)("div",{className:"re-breadcrumb",children:[(0,r.jsx)("span",{children:"Platform"}),(0,r.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,r.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,r.jsxs)("div",{className:"re-header-center",children:[(0,r.jsx)("div",{className:"re-time",children:d}),(0,r.jsx)("div",{className:"re-date",children:x})]}),(0,r.jsxs)("div",{className:"re-header-right",children:[(0,r.jsxs)("div",{className:"re-status",children:[(0,r.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsxs)("button",{className:`re-user-btn ${f?"open":""}`,onClick:()=>p(e=>!e),onBlur:()=>setTimeout(()=>p(!1),150),children:[(0,r.jsx)("div",{className:"re-avatar",children:h}),(0,r.jsxs)("div",{className:"re-user-info",children:[(0,r.jsx)("div",{className:"re-user-name",children:o||"Administrator"}),(0,r.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,r.jsx)(u,{className:"re-chevron",size:13})]}),f&&(0,r.jsxs)("div",{className:"re-dropdown",children:[(0,r.jsxs)("div",{className:"re-dropdown-header",children:[(0,r.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,r.jsx)("div",{className:"re-dropdown-email",children:o||"Administrator"})]}),(0,r.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{i(),s.push("/login")},children:[(0,r.jsx)(m,{size:14}),"Sign out"]})]})]})]})]})]})}function b({children:e}){let{isAuthenticated:i}=(0,t.useAuth)(),s=(0,n.useRouter)(),[o,l]=(0,a.useState)(!1);return((0,a.useEffect)(()=>{l(!0)},[]),(0,a.useEffect)(()=>{o&&!i&&s.push("/login")},[o,i,s]),o&&i)?(0,r.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,r.jsx)(x,{}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,r.jsx)(g,{}),(0,r.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>b],1894)},90354,e=>{"use strict";let r=(0,e.i(70451).default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);e.s(["Calendar",()=>r],90354)},43619,42834,e=>{"use strict";let r,t;var n=e.i(54156),a=e.i(35491);function i(e,r){if("function"==typeof e)return e(r);null!=e&&(e.current=r)}var s=a.forwardRef((e,r)=>{let{children:t,...i}=e,s=a.Children.toArray(t),l=s.find(d);if(l){let e=l.props.children,t=s.map(r=>r!==l?r:a.Children.count(e)>1?a.Children.only(null):a.isValidElement(e)?e.props.children:null);return(0,n.jsx)(o,{...i,ref:r,children:a.isValidElement(e)?a.cloneElement(e,void 0,t):null})}return(0,n.jsx)(o,{...i,ref:r,children:t})});s.displayName="Slot";var o=a.forwardRef((e,r)=>{let{children:t,...n}=e;if(a.isValidElement(t)){var s;let e,o,l=(s=t,(o=(e=Object.getOwnPropertyDescriptor(s.props,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.ref:(o=(e=Object.getOwnPropertyDescriptor(s,"ref")?.get)&&"isReactWarning"in e&&e.isReactWarning)?s.props.ref:s.props.ref||s.ref);return a.cloneElement(t,{...function(e,r){let t={...r};for(let n in r){let a=e[n],i=r[n];/^on[A-Z]/.test(n)?a&&i?t[n]=(...e)=>{i(...e),a(...e)}:a&&(t[n]=a):"style"===n?t[n]={...a,...i}:"className"===n&&(t[n]=[a,i].filter(Boolean).join(" "))}return{...e,...t}}(n,t.props),ref:r?function(...e){return r=>{let t=!1,n=e.map(e=>{let n=i(e,r);return t||"function"!=typeof n||(t=!0),n});if(t)return()=>{for(let r=0;r<n.length;r++){let t=n[r];"function"==typeof t?t():i(e[r],null)}}}}(r,l):l})}return a.Children.count(t)>1?a.Children.only(null):null});o.displayName="SlotClone";var l=({children:e})=>(0,n.jsx)(n.Fragment,{children:e});function d(e){return a.isValidElement(e)&&e.type===l}e.s(["Slot",()=>s],42834);var c=e.i(93369);let u=e=>"boolean"==typeof e?`${e}`:0===e?"0":e,f=c.clsx;var p=e.i(52960);let h=(r="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",t={variants:{variant:{default:"bg-primary text-primary-foreground hover:bg-primary/90",destructive:"bg-destructive text-white hover:bg-destructive/90 focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",outline:"border bg-background shadow-xs hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",secondary:"bg-secondary text-secondary-foreground hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2 has-[>svg]:px-3",sm:"h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",lg:"h-10 rounded-md px-6 has-[>svg]:px-4",icon:"size-9","icon-sm":"size-8","icon-lg":"size-10"}},defaultVariants:{variant:"default",size:"default"}},e=>{var n;if((null==t?void 0:t.variants)==null)return f(r,null==e?void 0:e.class,null==e?void 0:e.className);let{variants:a,defaultVariants:i}=t,s=Object.keys(a).map(r=>{let t=null==e?void 0:e[r],n=null==i?void 0:i[r];if(null===t)return null;let s=u(t)||u(n);return a[r][s]}),o=e&&Object.entries(e).reduce((e,r)=>{let[t,n]=r;return void 0===n||(e[t]=n),e},{});return f(r,s,null==t||null==(n=t.compoundVariants)?void 0:n.reduce((e,r)=>{let{class:t,className:n,...a}=r;return Object.entries(a).every(e=>{let[r,t]=e;return Array.isArray(t)?t.includes({...i,...o}[r]):({...i,...o})[r]===t})?[...e,t,n]:e},[]),null==e?void 0:e.class,null==e?void 0:e.className)});function x({className:e,variant:r,size:t,asChild:a=!1,...i}){let o=a?s:"button";return(0,n.jsx)(o,{"data-slot":"button",className:(0,p.cn)(h({variant:r,size:t,className:e})),...i})}e.s(["Button",()=>x],43619)},60095,e=>{"use strict";var r=e.i(54156),t=e.i(52960);function n({className:e,...n}){return(0,r.jsx)("div",{"data-slot":"card",className:(0,t.cn)("bg-card text-card-foreground flex flex-col gap-6 rounded-xl border py-6 shadow-sm",e),...n})}function a({className:e,...n}){return(0,r.jsx)("div",{"data-slot":"card-header",className:(0,t.cn)("@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",e),...n})}function i({className:e,...n}){return(0,r.jsx)("div",{"data-slot":"card-title",className:(0,t.cn)("leading-none font-semibold",e),...n})}function s({className:e,...n}){return(0,r.jsx)("div",{"data-slot":"card-description",className:(0,t.cn)("text-muted-foreground text-sm",e),...n})}function o({className:e,...n}){return(0,r.jsx)("div",{"data-slot":"card-content",className:(0,t.cn)("px-6",e),...n})}e.s(["Card",()=>n,"CardContent",()=>o,"CardDescription",()=>s,"CardHeader",()=>a,"CardTitle",()=>i])},2431,e=>{"use strict";let r=(0,e.i(70451).default)("Shield",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}]]);e.s(["Shield",()=>r],2431)},1299,e=>{"use strict";let r=(0,e.i(70451).default)("Mail",[["rect",{width:"20",height:"16",x:"2",y:"4",rx:"2",key:"18n3k1"}],["path",{d:"m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7",key:"1ocrg3"}]]);e.s(["Mail",()=>r],1299)},33366,e=>{"use strict";let r=(0,e.i(70451).default)("User",[["path",{d:"M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2",key:"975kel"}],["circle",{cx:"12",cy:"7",r:"4",key:"17ys0d"}]]);e.s(["User",()=>r],33366)},87014,e=>{"use strict";var r=e.i(54156),t=e.i(1894),n=e.i(60095),a=e.i(43619),i=e.i(35264),s=e.i(76569),o=e.i(1299),l=e.i(33366),d=e.i(2431),c=e.i(90354);function u(){let{admin:e,logout:u}=(0,i.useAuth)(),f=(0,s.useRouter)();return(0,r.jsx)(t.AdminLayout,{children:(0,r.jsxs)("div",{className:"p-8 space-y-6",children:[(0,r.jsxs)("div",{className:"space-y-2",children:[(0,r.jsx)("h1",{className:"text-3xl font-bold text-foreground",children:"Profile & Settings"}),(0,r.jsx)("p",{className:"text-muted-foreground",children:"Manage your admin account"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-3 gap-6",children:[(0,r.jsxs)(n.Card,{className:"md:col-span-1",children:[(0,r.jsx)(n.CardHeader,{className:"text-center pb-2",children:(0,r.jsx)("div",{className:"w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center mx-auto mb-4",children:(0,r.jsx)(l.User,{className:"w-8 h-8 text-primary"})})}),(0,r.jsxs)(n.CardContent,{className:"text-center space-y-2",children:[(0,r.jsx)("p",{className:"text-lg font-semibold text-foreground",children:e?.name}),(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:e?.role})]})]}),(0,r.jsxs)(n.Card,{className:"md:col-span-2",children:[(0,r.jsxs)(n.CardHeader,{children:[(0,r.jsx)(n.CardTitle,{children:"Account Information"}),(0,r.jsx)(n.CardDescription,{children:"Your admin account details"})]}),(0,r.jsxs)(n.CardContent,{className:"space-y-4",children:[(0,r.jsxs)("div",{className:"p-4 border border-border rounded-lg flex items-center gap-3",children:[(0,r.jsx)(o.Mail,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs text-muted-foreground uppercase mb-1",children:"Email Address"}),(0,r.jsx)("p",{className:"font-medium text-foreground",children:e?.email})]})]}),(0,r.jsxs)("div",{className:"p-4 border border-border rounded-lg flex items-center gap-3",children:[(0,r.jsx)(d.Shield,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs text-muted-foreground uppercase mb-1",children:"Access Level"}),(0,r.jsx)("p",{className:"font-medium text-foreground",children:"Full Administrator"})]})]}),(0,r.jsxs)("div",{className:"p-4 border border-border rounded-lg flex items-center gap-3",children:[(0,r.jsx)(c.Calendar,{className:"w-5 h-5 text-muted-foreground flex-shrink-0"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs text-muted-foreground uppercase mb-1",children:"Account Created"}),(0,r.jsx)("p",{className:"font-medium text-foreground",children:"December 2024"})]})]})]})]})]}),(0,r.jsxs)(n.Card,{children:[(0,r.jsxs)(n.CardHeader,{children:[(0,r.jsx)(n.CardTitle,{children:"Permissions"}),(0,r.jsx)(n.CardDescription,{children:"Your administrative privileges"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsx)("div",{className:"space-y-2",children:["View all deals and properties","Access deal details and analysis","Generate daily summaries","View underwriting rules","Manage admin account settings"].map((e,t)=>(0,r.jsxs)("div",{className:"flex items-center gap-3 p-2",children:[(0,r.jsx)("div",{className:"w-5 h-5 rounded border-2 border-success bg-success/20 flex items-center justify-center",children:(0,r.jsx)("svg",{className:"w-3 h-3 text-success",viewBox:"0 0 20 20",fill:"currentColor",children:(0,r.jsx)("path",{fillRule:"evenodd",d:"M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z",clipRule:"evenodd"})})}),(0,r.jsx)("span",{className:"text-sm text-foreground",children:e})]},t))})})]}),(0,r.jsxs)(n.Card,{className:"border-destructive/50",children:[(0,r.jsxs)(n.CardHeader,{children:[(0,r.jsx)(n.CardTitle,{className:"text-destructive",children:"Session & Logout"}),(0,r.jsx)(n.CardDescription,{children:"Manage your current session"})]}),(0,r.jsx)(n.CardContent,{children:(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsx)("p",{className:"text-sm text-muted-foreground",children:"You are currently logged in to the Real Estate Admin system. Click below to log out of your account."}),(0,r.jsx)(a.Button,{variant:"destructive",onClick:()=>{u(),f.push("/login")},className:"w-full",children:"Log Out"})]})})]})]})})}e.s(["default",()=>u])}]);