(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,39262,e=>{"use strict";let r=(0,e.i(70451).default)("Loader",[["path",{d:"M12 2v4",key:"3427ic"}],["path",{d:"m16.2 7.8 2.9-2.9",key:"r700ao"}],["path",{d:"M18 12h4",key:"wj9ykh"}],["path",{d:"m16.2 16.2 2.9 2.9",key:"1bxg5t"}],["path",{d:"M12 18v4",key:"jadmvz"}],["path",{d:"m4.9 19.1 2.9-2.9",key:"bwix9q"}],["path",{d:"M2 12h4",key:"j09sii"}],["path",{d:"m4.9 4.9 2.9 2.9",key:"giyufr"}]]);e.s(["Loader",()=>r],39262)},1573,e=>{"use strict";let r=(0,e.i(70451).default)("Zap",[["path",{d:"M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z",key:"1xq2db"}]]);e.s(["Zap",()=>r],1573)},93179,e=>{"use strict";let r=(0,e.i(70451).default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>r],93179)},49681,70451,e=>{"use strict";var r=e.i(35491);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let n=(0,r.forwardRef)(({color:e="currentColor",size:n=24,strokeWidth:s=2,absoluteStrokeWidth:i,className:l="",children:o,iconNode:d,...c},u)=>(0,r.createElement)("svg",{ref:u,...a,width:n,height:n,stroke:e,strokeWidth:i?24*Number(s)/Number(n):s,className:t("lucide",l),...c},[...d.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(o)?o:[o]])),s=(e,a)=>{let s=(0,r.forwardRef)(({className:s,...i},l)=>(0,r.createElement)(n,{ref:l,iconNode:a,className:t(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,s),...i}));return s.displayName=`${e}`,s};e.s(["default",()=>s],70451);let i=s("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>i],49681)},50932,e=>{"use strict";let r=(0,e.i(70451).default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>r],50932)},60499,e=>{"use strict";let r=(0,e.i(70451).default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>r],60499)},14057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={assign:function(){return o},searchParamsToUrlQuery:function(){return s},urlQueryToSearchParams:function(){return l}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});function s(e){let r={};for(let[t,a]of e.entries()){let e=r[t];void 0===e?r[t]=a:Array.isArray(e)?e.push(a):r[t]=[e,a]}return r}function i(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function l(e){let r=new URLSearchParams;for(let[t,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)r.append(t,i(e));else r.set(t,i(a));return r}function o(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,a]of t.entries())e.append(r,a)}return e}},70249,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={formatUrl:function(){return l},formatWithValidation:function(){return d},urlObjectKeys:function(){return o}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let s=e.r(4960)._(e.r(67133)),i=/https?|ftp|gopher|file/;function l(e){let{auth:r,hostname:t}=e,a=e.protocol||"",n=e.pathname||"",l=e.hash||"",o=e.query||"",d=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?d=r+e.host:t&&(d=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(d+=":"+e.port)),o&&"object"==typeof o&&(o=String(s.urlQueryToSearchParams(o)));let c=e.search||o&&`?${o}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||i.test(a))&&!1!==d?(d="//"+(d||""),n&&"/"!==n[0]&&(n="/"+n)):d||(d=""),l&&"#"!==l[0]&&(l="#"+l),c&&"?"!==c[0]&&(c="?"+c),n=n.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${d}${n}${c}${l}`}let o=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function d(e){return l(e)}},47550,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return n}});let a=e.r(35491);function n(e,r){let t=(0,a.useRef)(null),n=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=t.current;e&&(t.current=null,e());let r=n.current;r&&(n.current=null,r())}else e&&(t.current=s(e,a)),r&&(n.current=s(r,a))},[e,r])}function s(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},99901,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return m},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return v},NormalizeError:function(){return b},PageNotFoundError:function(){return y},SP:function(){return x},ST:function(){return g},WEB_VITALS:function(){return s},execOnce:function(){return i},getDisplayName:function(){return u},getLocationOrigin:function(){return d},getURL:function(){return c},isAbsoluteUrl:function(){return o},isResSent:function(){return p},loadGetInitialProps:function(){return h},normalizeRepeatedSlashes:function(){return f},stringifyError:function(){return j}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let s=["CLS","FCP","FID","INP","LCP","TTFB"];function i(e){let r,t=!1;return(...a)=>(t||(t=!0,r=e(...a)),r)}let l=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,o=e=>l.test(e);function d(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function c(){let{href:e}=window.location,r=d();return e.substring(r.length)}function u(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function p(e){return e.finished||e.headersSent}function f(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function h(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await h(r.Component,r.ctx)}:{};let a=await e.getInitialProps(r);if(t&&p(t))return a;if(!a)throw Object.defineProperty(Error(`"${u(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let x="undefined"!=typeof performance,g=x&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class m extends Error{}class b extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class v extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function j(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return s}});let a=e.r(99901),n=e.r(13042);function s(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let r=(0,a.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,n.hasBasePath)(t.pathname)}catch(e){return!1}}},57832,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return m},useLinkStatus:function(){return y}};for(var n in a)Object.defineProperty(t,n,{enumerable:!0,get:a[n]});let s=e.r(4960),i=e.r(54156),l=s._(e.r(35491)),o=e.r(70249),d=e.r(30944),c=e.r(47550),u=e.r(99901),p=e.r(4471);e.r(14057);let f=e.r(11535),h=e.r(2239),x=e.r(83671);function g(e){return"string"==typeof e?e:(0,o.formatUrl)(e)}function m(r){var t;let a,n,s,[o,m]=(0,l.useOptimistic)(f.IDLE_LINK_STATUS),y=(0,l.useRef)(null),{href:v,as:k,children:j,prefetch:w=null,passHref:N,replace:P,shallow:C,scroll:S,onClick:M,onMouseEnter:E,onTouchStart:A,legacyBehavior:O=!1,onNavigate:z,ref:T,unstable_dynamicOnHover:_,...L}=r;a=j,O&&("string"==typeof a||"number"==typeof a)&&(a=(0,i.jsx)("a",{children:a}));let R=l.default.useContext(d.AppRouterContext),D=!1!==w,I=!1!==w?null===(t=w)||"auto"===t?x.FetchStrategy.PPR:x.FetchStrategy.Full:x.FetchStrategy.PPR,{href:$,as:U}=l.default.useMemo(()=>{let e=g(v);return{href:e,as:k?g(k):e}},[v,k]);if(O){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});n=l.default.Children.only(a)}let F=O?n&&"object"==typeof n&&n.ref:T,B=l.default.useCallback(e=>(null!==R&&(y.current=(0,f.mountLinkInstance)(e,$,R,I,D,m)),()=>{y.current&&((0,f.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,f.unmountPrefetchableInstance)(e)}),[D,$,R,I,m]),q={ref:(0,c.useMergedRef)(B,F),onClick(r){O||"function"!=typeof M||M(r),O&&n.props&&"function"==typeof n.props.onClick&&n.props.onClick(r),!R||r.defaultPrevented||function(r,t,a,n,s,i,o){if("undefined"!=typeof window){let d,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((d=r.currentTarget.getAttribute("target"))&&"_self"!==d||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,h.isLocalURL)(t)){s&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),o){let e=!1;if(o({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:u}=e.r(30800);l.default.startTransition(()=>{u(a||t,s?"replace":"push",i??!0,n.current)})}}(r,$,U,y,P,S,z)},onMouseEnter(e){O||"function"!=typeof E||E(e),O&&n.props&&"function"==typeof n.props.onMouseEnter&&n.props.onMouseEnter(e),R&&D&&(0,f.onNavigationIntent)(e.currentTarget,!0===_)},onTouchStart:function(e){O||"function"!=typeof A||A(e),O&&n.props&&"function"==typeof n.props.onTouchStart&&n.props.onTouchStart(e),R&&D&&(0,f.onNavigationIntent)(e.currentTarget,!0===_)}};return(0,u.isAbsoluteUrl)(U)?q.href=U:O&&!N&&("a"!==n.type||"href"in n.props)||(q.href=(0,p.addBasePath)(U)),s=O?l.default.cloneElement(n,q):(0,i.jsx)("a",{...L,...q,children:a}),(0,i.jsx)(b.Provider,{value:o,children:s})}e.r(57832);let b=(0,l.createContext)(f.IDLE_LINK_STATUS),y=()=>(0,l.useContext)(b);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},1894,12514,46645,58280,e=>{"use strict";var r=e.i(54156),t=e.i(35264),a=e.i(76569),n=e.i(35491),s=e.i(13470),i=e.i(70451);let l=(0,i.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>l],12514);var o=e.i(50932);let d=(0,i.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,i.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);var u=e.i(60499);let p=(0,i.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>p],58280);var f=e.i(49681);let h=[{href:"/dashboard",label:"Dashboard",icon:l},{label:"Property",icon:o.Building2,subItems:[{href:"/execution",label:"Property List",icon:p},{href:"#",label:"Property Detail",icon:f.FileText}]},{href:"/rules",label:"Rules",icon:d},{href:"/users",label:"Users",icon:c},{href:"/templates",label:"Templates",icon:f.FileText},{href:"/profiles",label:"Profiles",icon:c}];function x({item:e,isActive:t,pathname:a}){let[i,l]=(0,n.useState)(!1),o=e.icon,d=e.subItems&&e.subItems.length>0;return((0,n.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&l(!0)},[a,e.label]),d)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:r=>{if(r.preventDefault(),d&&!i&&"Property"===e.label){let r=e.subItems?.[0];if(r?.href){window.location.href=r.href;return}}l(!i)},className:`re-nav-item w-full ${t?"active":""}`,children:[(0,r.jsx)(o,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label}),(0,r.jsx)(u.ChevronDown,{className:`re-nav-chevron ${i?"rotated":""}`})]}),i&&(0,r.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let t=e.icon,n=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,r.jsxs)(s.default,{href:e.href||"#",className:`re-subnav-item ${n?"active":""}`,children:[(0,r.jsx)(t,{className:"re-subnav-icon"}),(0,r.jsx)("span",{children:e.label})]},e.label)})})]}):(0,r.jsxs)(s.default,{href:e.href||"#",className:`re-nav-item ${t?"active":""}`,children:[(0,r.jsx)(o,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label})]})}function g(){let e=(0,a.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"re-sidebar",children:[(0,r.jsxs)("div",{className:"re-sidebar-brand",children:[(0,r.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,r.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,r.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,r.jsx)("div",{className:"re-nav-section",children:(0,r.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,r.jsx)("nav",{className:"re-nav",children:h.map((t,a)=>{let n=!1;return t.href?n=e===t.href:"Property"===t.label&&(n=e.startsWith("/execution")),(0,r.jsxs)("div",{children:["Rules"===t.label&&(0,r.jsx)("div",{className:"re-nav-divider"}),(0,r.jsx)(x,{item:t,isActive:n,pathname:e})]},t.label)})}),(0,r.jsx)("div",{className:"re-sidebar-footer",children:(0,r.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let m=(0,i.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function b(){let{admin:e,logout:s}=(0,t.useAuth)(),i=(0,a.useRouter)(),[l,o]=(0,n.useState)(""),[d,c]=(0,n.useState)(""),[p,f]=(0,n.useState)(!1);(0,n.useEffect)(()=>{o(localStorage.getItem("email")??"")},[]),(0,n.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let r=setInterval(e,1e3);return()=>clearInterval(r)},[]);let h=l?l.split("@")[0].slice(0,2).toUpperCase():"AD",x=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("header",{className:"re-header",children:[(0,r.jsxs)("div",{className:"re-header-left",children:[(0,r.jsxs)("div",{className:"re-brand",children:[(0,r.jsx)("div",{className:"re-brand-icon",children:(0,r.jsx)("div",{className:"re-brand-icon-inner"})}),(0,r.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,r.jsx)("div",{className:"re-divider-v"}),(0,r.jsxs)("div",{className:"re-breadcrumb",children:[(0,r.jsx)("span",{children:"Platform"}),(0,r.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,r.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,r.jsxs)("div",{className:"re-header-center",children:[(0,r.jsx)("div",{className:"re-time",children:d}),(0,r.jsx)("div",{className:"re-date",children:x})]}),(0,r.jsxs)("div",{className:"re-header-right",children:[(0,r.jsxs)("div",{className:"re-status",children:[(0,r.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsxs)("button",{className:`re-user-btn ${p?"open":""}`,onClick:()=>f(e=>!e),onBlur:()=>setTimeout(()=>f(!1),150),children:[(0,r.jsx)("div",{className:"re-avatar",children:h}),(0,r.jsxs)("div",{className:"re-user-info",children:[(0,r.jsx)("div",{className:"re-user-name",children:l||"Administrator"}),(0,r.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,r.jsx)(u.ChevronDown,{className:"re-chevron",size:13})]}),p&&(0,r.jsxs)("div",{className:"re-dropdown",children:[(0,r.jsxs)("div",{className:"re-dropdown-header",children:[(0,r.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,r.jsx)("div",{className:"re-dropdown-email",children:l||"Administrator"})]}),(0,r.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{s(),i.push("/login")},children:[(0,r.jsx)(m,{size:14}),"Sign out"]})]})]})]})]})]})}function y({children:e}){let{isAuthenticated:s}=(0,t.useAuth)(),i=(0,a.useRouter)(),[l,o]=(0,n.useState)(!1);return((0,n.useEffect)(()=>{o(!0)},[]),(0,n.useEffect)(()=>{l&&!s&&i.push("/login")},[l,s,i]),l&&s)?(0,r.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,r.jsx)(g,{}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,r.jsx)(b,{}),(0,r.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>y],1894)},85846,e=>{"use strict";let r=(0,e.i(70451).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>r],85846)},5953,e=>{"use strict";let r=(0,e.i(70451).default)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);e.s(["DollarSign",()=>r],5953)},94192,e=>{"use strict";let r=(0,e.i(70451).default)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>r],94192)},98895,e=>{"use strict";async function r(e,r){let t=await fetch(e,{headers:{"Content-Type":"application/json"},...r});if(!t.ok)throw Error("API Error");return t.json()}e.s(["api",()=>r])},71258,e=>{"use strict";var r=e.i(54156),t=e.i(35491),a=e.i(76569),n=e.i(1894),s=e.i(98895),i=e.i(58280),l=e.i(5953),o=e.i(1573),d=e.i(85846),c=e.i(94192),u=e.i(39262),p=e.i(93179);let f=(0,e.i(70451).default)("Info",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 16v-4",key:"1dtifu"}],["path",{d:"M12 8h.01",key:"e9boi3"}]]);var h=e.i(50932);function x(){let e=(0,a.useRouter)(),[x,g]=(0,t.useState)({address:"",purchasePrice:0}),[m,b]=(0,t.useState)(!1),[y,v]=(0,t.useState)(null),[k,j]=(0,t.useState)(null),w=x.address.trim()&&x.purchasePrice>0,N=(e,r)=>{g(t=>({...t,[e]:r})),v(null)},P=async()=>{if(!(x.address.trim()?x.purchasePrice<=0?(v("Purchase price must be greater than $0"),!1):(v(null),!0):(v("Property address is required"),!1)))return;b(!0),v(null),console.log("📤 === SUBMIT DEBUG ==="),console.log("Address:",x.address),console.log("Purchase Price:",x.purchasePrice);let r={address:x.address,purchasePrice:x.purchasePrice};console.log("📦 Payload being sent:"),console.log(JSON.stringify(r,null,2));try{let t=await (0,s.api)("/api/deals",{method:"POST",body:JSON.stringify(r)});if(console.log("📥 Response:",t),t?.status==="DEUPLICATE"){v(t?.message||"This property has already been added"),b(!1);return}t&&e.push("/deals")}catch(e){v(e.status||"Failed to create deal. Please try again."),console.error(e),b(!1)}};return(0,r.jsx)(n.AdminLayout,{children:(0,r.jsxs)("div",{className:"p-8 max-w-2xl mx-auto",children:[(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsxs)("button",{onClick:()=>e.back(),className:"flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-4 font-medium transition-colors",children:[(0,r.jsx)(p.ArrowLeft,{className:"w-4 h-4"}),"Back to Deals"]}),(0,r.jsxs)("div",{className:"flex items-start gap-4",children:[(0,r.jsx)("div",{className:"flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900",children:(0,r.jsx)(h.Building2,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h1",{className:"text-4xl font-bold text-gray-900 dark:text-gray-50 mb-2",children:"Create a New Deal"}),(0,r.jsx)("p",{className:"text-gray-500 dark:text-gray-400",children:"Enter your property details for analysis"})]})]})]}),(0,r.jsx)("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 p-8 mb-6",children:(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3",children:(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsx)(i.Home,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"}),"Property Address",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]})}),(0,r.jsx)("input",{type:"text",value:x.address,onChange:e=>N("address",e.target.value),onFocus:()=>j("address"),onBlur:()=>j(null),placeholder:"e.g., 123 Market Street, Denver, CO 80204",className:`w-full px-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${"address"===k?"border-blue-500":"border-gray-200 dark:border-gray-600"}`}),(0,r.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:"Include the street address, city, state, and ZIP code"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{className:"block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3",children:(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-2",children:[(0,r.jsx)(l.DollarSign,{className:"w-4 h-4 text-gray-500 dark:text-gray-400"}),"Purchase Price",(0,r.jsx)("span",{className:"text-red-500",children:"*"})]})}),(0,r.jsxs)("div",{className:"relative",children:[(0,r.jsx)("span",{className:"absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 dark:text-gray-400 font-semibold",children:"$"}),(0,r.jsx)("input",{type:"number",value:x.purchasePrice||"",onChange:e=>N("purchasePrice",Number(e.target.value)||0),onFocus:()=>j("purchasePrice"),onBlur:()=>j(null),placeholder:"250000",className:`w-full pl-8 pr-4 py-3 bg-gray-50 dark:bg-gray-700 border rounded-lg text-gray-900 dark:text-gray-50 placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all ${"purchasePrice"===k?"border-blue-500":"border-gray-200 dark:border-gray-600"}`})]}),(0,r.jsx)("p",{className:"text-xs text-gray-500 dark:text-gray-400 mt-2",children:"The total amount you paid or plan to pay for this property"})]}),y&&(0,r.jsxs)("div",{className:"bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-lg p-4 flex items-start gap-3",children:[(0,r.jsx)(d.AlertCircle,{className:"w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5"}),(0,r.jsx)("p",{className:"text-red-700 dark:text-red-300 text-sm",children:y})]}),w&&(0,r.jsx)("div",{className:"bg-green-50 dark:bg-green-950 border border-green-200 dark:border-green-800 rounded-lg p-4",children:(0,r.jsxs)("div",{className:"flex items-start gap-3",children:[(0,r.jsx)(c.CheckCircle2,{className:"w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5"}),(0,r.jsxs)("div",{className:"text-sm",children:[(0,r.jsx)("p",{className:"font-semibold text-green-900 dark:text-green-200 mb-2",children:"Ready to analyze this deal?"}),(0,r.jsxs)("ul",{className:"text-green-700 dark:text-green-300 space-y-1",children:[(0,r.jsxs)("li",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"}),"Address: ",x.address]}),(0,r.jsxs)("li",{className:"flex items-center gap-2",children:[(0,r.jsx)("span",{className:"w-1.5 h-1.5 rounded-full bg-green-600 dark:bg-green-400"}),"Price: $",x.purchasePrice.toLocaleString()]})]})]})]})})]})}),(0,r.jsxs)("div",{className:"flex gap-3 mb-6",children:[(0,r.jsx)("button",{onClick:P,disabled:!w||m,className:"flex-1 flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 dark:disabled:bg-gray-600 text-white font-semibold py-3 px-6 rounded-lg transition-all disabled:cursor-not-allowed",children:m?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.Loader,{className:"w-4 h-4 animate-spin"}),"Creating & Analyzing..."]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(o.Zap,{className:"w-4 h-4"}),"Create & Evaluate"]})}),(0,r.jsx)("button",{onClick:()=>e.back(),disabled:m,className:"flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-lg transition-all disabled:opacity-50",children:"Cancel"})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{className:"bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6",children:[(0,r.jsxs)("h3",{className:"font-semibold text-emerald-900 dark:text-emerald-200 mb-2 flex items-center gap-2",children:[(0,r.jsx)(c.CheckCircle2,{className:"w-4 h-4"}),"What Happens Next"]}),(0,r.jsxs)("ul",{className:"text-sm text-emerald-700 dark:text-emerald-300 space-y-2",children:[(0,r.jsx)("li",{children:"✓ Deal is created in your portfolio"}),(0,r.jsx)("li",{children:"✓ Property data is analyzed"}),(0,r.jsx)("li",{children:"✓ ROI calculations are performed"}),(0,r.jsx)("li",{children:"✓ Evaluation results are saved"})]})]}),(0,r.jsxs)("div",{className:"bg-amber-50 dark:bg-amber-950 border border-amber-200 dark:border-amber-800 rounded-xl p-6",children:[(0,r.jsxs)("h3",{className:"font-semibold text-amber-900 dark:text-amber-200 mb-2 flex items-center gap-2",children:[(0,r.jsx)(f,{className:"w-4 h-4"}),"Quick Tips"]}),(0,r.jsxs)("ul",{className:"text-sm text-amber-700 dark:text-amber-300 space-y-2",children:[(0,r.jsx)("li",{children:"• Be as accurate as possible"}),(0,r.jsx)("li",{children:"• Include full address details"}),(0,r.jsx)("li",{children:"• Use your actual purchase price"}),(0,r.jsx)("li",{children:"• You can view results on deals page"})]})]})]})]})})}e.s(["default",()=>x],71258)}]);