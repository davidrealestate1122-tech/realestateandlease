(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,84109,e=>{"use strict";let r=(0,e.i(70451).default)("Download",[["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["polyline",{points:"7 10 12 15 17 10",key:"2ggqvy"}],["line",{x1:"12",x2:"12",y1:"15",y2:"3",key:"1vk2je"}]]);e.s(["Download",()=>r],84109)},84906,e=>{"use strict";let r=(0,e.i(70451).default)("Pen",[["path",{d:"M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z",key:"1a8usu"}]]);e.s(["Edit2",()=>r],84906)},42494,e=>{"use strict";let r=(0,e.i(70451).default)("Plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",()=>r],42494)},10527,e=>{"use strict";let r=(0,e.i(70451).default)("TrendingUp",[["polyline",{points:"22 7 13.5 15.5 8.5 10.5 2 17",key:"126l90"}],["polyline",{points:"16 7 22 7 22 13",key:"kwv8wd"}]]);e.s(["TrendingUp",()=>r],10527)},20980,e=>{"use strict";let r=(0,e.i(70451).default)("MapPin",[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]]);e.s(["MapPin",()=>r],20980)},52354,e=>{"use strict";let r=(0,e.i(70451).default)("Clock",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["polyline",{points:"12 6 12 12 16 14",key:"68esgv"}]]);e.s(["Clock",()=>r],52354)},93179,e=>{"use strict";let r=(0,e.i(70451).default)("ArrowLeft",[["path",{d:"m12 19-7-7 7-7",key:"1l729n"}],["path",{d:"M19 12H5",key:"x3x0zl"}]]);e.s(["ArrowLeft",()=>r],93179)},70451,49681,e=>{"use strict";var r=e.i(35491);let t=(...e)=>e.filter((e,r,t)=>!!e&&""!==e.trim()&&t.indexOf(e)===r).join(" ").trim();var a={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let s=(0,r.forwardRef)(({color:e="currentColor",size:s=24,strokeWidth:l=2,absoluteStrokeWidth:d,className:n="",children:i,iconNode:o,...c},x)=>(0,r.createElement)("svg",{ref:x,...a,width:s,height:s,stroke:e,strokeWidth:d?24*Number(l)/Number(s):l,className:t("lucide",n),...c},[...o.map(([e,t])=>(0,r.createElement)(e,t)),...Array.isArray(i)?i:[i]])),l=(e,a)=>{let l=(0,r.forwardRef)(({className:l,...d},n)=>(0,r.createElement)(s,{ref:n,iconNode:a,className:t(`lucide-${e.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,l),...d}));return l.displayName=`${e}`,l};e.s(["default",()=>l],70451);let d=l("FileText",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",()=>d],49681)},14057,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"warnOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},67133,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={assign:function(){return i},searchParamsToUrlQuery:function(){return l},urlQueryToSearchParams:function(){return n}};for(var s in a)Object.defineProperty(t,s,{enumerable:!0,get:a[s]});function l(e){let r={};for(let[t,a]of e.entries()){let e=r[t];void 0===e?r[t]=a:Array.isArray(e)?e.push(a):r[t]=[e,a]}return r}function d(e){return"string"==typeof e?e:("number"!=typeof e||isNaN(e))&&"boolean"!=typeof e?"":String(e)}function n(e){let r=new URLSearchParams;for(let[t,a]of Object.entries(e))if(Array.isArray(a))for(let e of a)r.append(t,d(e));else r.set(t,d(a));return r}function i(e,...r){for(let t of r){for(let r of t.keys())e.delete(r);for(let[r,a]of t.entries())e.append(r,a)}return e}},70249,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={formatUrl:function(){return n},formatWithValidation:function(){return o},urlObjectKeys:function(){return i}};for(var s in a)Object.defineProperty(t,s,{enumerable:!0,get:a[s]});let l=e.r(4960)._(e.r(67133)),d=/https?|ftp|gopher|file/;function n(e){let{auth:r,hostname:t}=e,a=e.protocol||"",s=e.pathname||"",n=e.hash||"",i=e.query||"",o=!1;r=r?encodeURIComponent(r).replace(/%3A/i,":")+"@":"",e.host?o=r+e.host:t&&(o=r+(~t.indexOf(":")?`[${t}]`:t),e.port&&(o+=":"+e.port)),i&&"object"==typeof i&&(i=String(l.urlQueryToSearchParams(i)));let c=e.search||i&&`?${i}`||"";return a&&!a.endsWith(":")&&(a+=":"),e.slashes||(!a||d.test(a))&&!1!==o?(o="//"+(o||""),s&&"/"!==s[0]&&(s="/"+s)):o||(o=""),n&&"#"!==n[0]&&(n="#"+n),c&&"?"!==c[0]&&(c="?"+c),s=s.replace(/[?#]/g,encodeURIComponent),c=c.replace("#","%23"),`${a}${o}${s}${c}${n}`}let i=["auth","hash","host","hostname","href","path","pathname","port","protocol","query","search","slashes"];function o(e){return n(e)}},47550,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"useMergedRef",{enumerable:!0,get:function(){return s}});let a=e.r(35491);function s(e,r){let t=(0,a.useRef)(null),s=(0,a.useRef)(null);return(0,a.useCallback)(a=>{if(null===a){let e=t.current;e&&(t.current=null,e());let r=s.current;r&&(s.current=null,r())}else e&&(t.current=l(e,a)),r&&(s.current=l(r,a))},[e,r])}function l(e,r){if("function"!=typeof e)return e.current=r,()=>{e.current=null};{let t=e(r);return"function"==typeof t?t:()=>e(null)}}("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},99901,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={DecodeError:function(){return h},MiddlewareNotFoundError:function(){return k},MissingStaticPage:function(){return j},NormalizeError:function(){return f},PageNotFoundError:function(){return y},SP:function(){return p},ST:function(){return g},WEB_VITALS:function(){return l},execOnce:function(){return d},getDisplayName:function(){return x},getLocationOrigin:function(){return o},getURL:function(){return c},isAbsoluteUrl:function(){return i},isResSent:function(){return m},loadGetInitialProps:function(){return b},normalizeRepeatedSlashes:function(){return u},stringifyError:function(){return v}};for(var s in a)Object.defineProperty(t,s,{enumerable:!0,get:a[s]});let l=["CLS","FCP","FID","INP","LCP","TTFB"];function d(e){let r,t=!1;return(...a)=>(t||(t=!0,r=e(...a)),r)}let n=/^[a-zA-Z][a-zA-Z\d+\-.]*?:/,i=e=>n.test(e);function o(){let{protocol:e,hostname:r,port:t}=window.location;return`${e}//${r}${t?":"+t:""}`}function c(){let{href:e}=window.location,r=o();return e.substring(r.length)}function x(e){return"string"==typeof e?e:e.displayName||e.name||"Unknown"}function m(e){return e.finished||e.headersSent}function u(e){let r=e.split("?");return r[0].replace(/\\/g,"/").replace(/\/\/+/g,"/")+(r[1]?`?${r.slice(1).join("?")}`:"")}async function b(e,r){let t=r.res||r.ctx&&r.ctx.res;if(!e.getInitialProps)return r.ctx&&r.Component?{pageProps:await b(r.Component,r.ctx)}:{};let a=await e.getInitialProps(r);if(t&&m(t))return a;if(!a)throw Object.defineProperty(Error(`"${x(e)}.getInitialProps()" should resolve to an object. But found "${a}" instead.`),"__NEXT_ERROR_CODE",{value:"E394",enumerable:!1,configurable:!0});return a}let p="undefined"!=typeof performance,g=p&&["mark","measure","getEntriesByName"].every(e=>"function"==typeof performance[e]);class h extends Error{}class f extends Error{}class y extends Error{constructor(e){super(),this.code="ENOENT",this.name="PageNotFoundError",this.message=`Cannot find module for page: ${e}`}}class j extends Error{constructor(e,r){super(),this.message=`Failed to load static file for page: ${e} ${r}`}}class k extends Error{constructor(){super(),this.code="ENOENT",this.message="Cannot find the middleware module"}}function v(e){return JSON.stringify({message:e.message,stack:e.stack})}},2239,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"isLocalURL",{enumerable:!0,get:function(){return l}});let a=e.r(99901),s=e.r(13042);function l(e){if(!(0,a.isAbsoluteUrl)(e))return!0;try{let r=(0,a.getLocationOrigin)(),t=new URL(e,r);return t.origin===r&&(0,s.hasBasePath)(t.pathname)}catch(e){return!1}}},57832,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"errorOnce",{enumerable:!0,get:function(){return a}});let a=e=>{}},13470,(e,r,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a={default:function(){return h},useLinkStatus:function(){return y}};for(var s in a)Object.defineProperty(t,s,{enumerable:!0,get:a[s]});let l=e.r(4960),d=e.r(54156),n=l._(e.r(35491)),i=e.r(70249),o=e.r(30944),c=e.r(47550),x=e.r(99901),m=e.r(4471);e.r(14057);let u=e.r(11535),b=e.r(2239),p=e.r(83671);function g(e){return"string"==typeof e?e:(0,i.formatUrl)(e)}function h(r){var t;let a,s,l,[i,h]=(0,n.useOptimistic)(u.IDLE_LINK_STATUS),y=(0,n.useRef)(null),{href:j,as:k,children:v,prefetch:N=null,passHref:w,replace:C,shallow:P,scroll:A,onClick:S,onMouseEnter:$,onTouchStart:M,legacyBehavior:E=!1,onNavigate:R,ref:D,unstable_dynamicOnHover:T,...O}=r;a=v,E&&("string"==typeof a||"number"==typeof a)&&(a=(0,d.jsx)("a",{children:a}));let L=n.default.useContext(o.AppRouterContext),z=!1!==N,_=!1!==N?null===(t=N)||"auto"===t?p.FetchStrategy.PPR:p.FetchStrategy.Full:p.FetchStrategy.PPR,{href:F,as:U}=n.default.useMemo(()=>{let e=g(j);return{href:e,as:k?g(k):e}},[j,k]);if(E){if(a?.$$typeof===Symbol.for("react.lazy"))throw Object.defineProperty(Error("`<Link legacyBehavior>` received a direct child that is either a Server Component, or JSX that was loaded with React.lazy(). This is not supported. Either remove legacyBehavior, or make the direct child a Client Component that renders the Link's `<a>` tag."),"__NEXT_ERROR_CODE",{value:"E863",enumerable:!1,configurable:!0});s=n.default.Children.only(a)}let I=E?s&&"object"==typeof s&&s.ref:D,B=n.default.useCallback(e=>(null!==L&&(y.current=(0,u.mountLinkInstance)(e,F,L,_,z,h)),()=>{y.current&&((0,u.unmountLinkForCurrentNavigation)(y.current),y.current=null),(0,u.unmountPrefetchableInstance)(e)}),[z,F,L,_,h]),q={ref:(0,c.useMergedRef)(B,I),onClick(r){E||"function"!=typeof S||S(r),E&&s.props&&"function"==typeof s.props.onClick&&s.props.onClick(r),!L||r.defaultPrevented||function(r,t,a,s,l,d,i){if("undefined"!=typeof window){let o,{nodeName:c}=r.currentTarget;if("A"===c.toUpperCase()&&((o=r.currentTarget.getAttribute("target"))&&"_self"!==o||r.metaKey||r.ctrlKey||r.shiftKey||r.altKey||r.nativeEvent&&2===r.nativeEvent.which)||r.currentTarget.hasAttribute("download"))return;if(!(0,b.isLocalURL)(t)){l&&(r.preventDefault(),location.replace(t));return}if(r.preventDefault(),i){let e=!1;if(i({preventDefault:()=>{e=!0}}),e)return}let{dispatchNavigateAction:x}=e.r(30800);n.default.startTransition(()=>{x(a||t,l?"replace":"push",d??!0,s.current)})}}(r,F,U,y,C,A,R)},onMouseEnter(e){E||"function"!=typeof $||$(e),E&&s.props&&"function"==typeof s.props.onMouseEnter&&s.props.onMouseEnter(e),L&&z&&(0,u.onNavigationIntent)(e.currentTarget,!0===T)},onTouchStart:function(e){E||"function"!=typeof M||M(e),E&&s.props&&"function"==typeof s.props.onTouchStart&&s.props.onTouchStart(e),L&&z&&(0,u.onNavigationIntent)(e.currentTarget,!0===T)}};return(0,x.isAbsoluteUrl)(U)?q.href=U:E&&!w&&("a"!==s.type||"href"in s.props)||(q.href=(0,m.addBasePath)(U)),l=E?n.default.cloneElement(s,q):(0,d.jsx)("a",{...O,...q,children:a}),(0,d.jsx)(f.Provider,{value:i,children:l})}e.r(57832);let f=(0,n.createContext)(u.IDLE_LINK_STATUS),y=()=>(0,n.useContext)(f);("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),r.exports=t.default)},1894,12514,50932,46645,60499,58280,e=>{"use strict";var r=e.i(54156),t=e.i(35264),a=e.i(76569),s=e.i(35491),l=e.i(13470),d=e.i(70451);let n=(0,d.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]);e.s(["BarChart3",()=>n],12514);let i=(0,d.default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);e.s(["Building2",()=>i],50932);let o=(0,d.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]]),c=(0,d.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]]);e.s(["Users",()=>c],46645);let x=(0,d.default)("ChevronDown",[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]]);e.s(["ChevronDown",()=>x],60499);let m=(0,d.default)("House",[["path",{d:"M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8",key:"5wwlr5"}],["path",{d:"M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z",key:"1d0kgt"}]]);e.s(["Home",()=>m],58280);let u=[{href:"/dashboard",label:"Dashboard",icon:n},{label:"Property",icon:i,subItems:[{href:"/execution",label:"Property List",icon:m},{href:"#",label:"Property Detail",icon:e.i(49681).FileText}]},{href:"/rules",label:"Rules",icon:o},{href:"/users",label:"Users",icon:c}];function b({item:e,isActive:t,pathname:a}){let[d,n]=(0,s.useState)(!1),i=e.icon,o=e.subItems&&e.subItems.length>0;return((0,s.useEffect)(()=>{"Property"===e.label&&a.includes("/execution")&&n(!0)},[a,e.label]),o)?(0,r.jsxs)("div",{children:[(0,r.jsxs)("button",{onClick:r=>{if(r.preventDefault(),o&&!d&&"Property"===e.label){let r=e.subItems?.[0];if(r?.href){window.location.href=r.href;return}}n(!d)},className:`re-nav-item w-full ${t?"active":""}`,children:[(0,r.jsx)(i,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label}),(0,r.jsx)(x,{className:`re-nav-chevron ${d?"rotated":""}`})]}),d&&(0,r.jsx)("div",{className:"re-subnav",children:e.subItems?.map(e=>{let t=e.icon,s=a===e.href||"Property Detail"===e.label&&a.match(/^\/execution\/[a-f0-9]{24}$/);return(0,r.jsxs)(l.default,{href:e.href||"#",className:`re-subnav-item ${s?"active":""}`,children:[(0,r.jsx)(t,{className:"re-subnav-icon"}),(0,r.jsx)("span",{children:e.label})]},e.label)})})]}):(0,r.jsxs)(l.default,{href:e.href||"#",className:`re-nav-item ${t?"active":""}`,children:[(0,r.jsx)(i,{className:"re-nav-icon"}),(0,r.jsx)("span",{className:"re-nav-label",children:e.label})]})}function p(){let e=(0,a.usePathname)();return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("div",{className:"re-sidebar",children:[(0,r.jsxs)("div",{className:"re-sidebar-brand",children:[(0,r.jsx)("div",{className:"re-sidebar-brand-icon",children:(0,r.jsx)("div",{className:"re-sidebar-brand-icon-inner"})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"re-sidebar-brand-name",children:"Real Estate"}),(0,r.jsx)("div",{className:"re-sidebar-brand-sub",children:"Admin Portal"})]})]}),(0,r.jsx)("div",{className:"re-nav-section",children:(0,r.jsx)("span",{className:"re-nav-section-label",children:"Navigation"})}),(0,r.jsx)("nav",{className:"re-nav",children:u.map((t,a)=>{let s=!1;return t.href?s=e===t.href:"Property"===t.label&&(s=e.startsWith("/execution")),(0,r.jsxs)("div",{children:["Rules"===t.label&&(0,r.jsx)("div",{className:"re-nav-divider"}),(0,r.jsx)(b,{item:t,isActive:s,pathname:e})]},t.label)})}),(0,r.jsx)("div",{className:"re-sidebar-footer",children:(0,r.jsxs)("div",{className:"re-sidebar-footer-text",children:[(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})," ","Underwriting System v2.4"," ",(0,r.jsx)("span",{className:"re-sidebar-footer-gold",children:"◆"})]})})]})]})}let g=(0,d.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]);function h(){let{admin:e,logout:l}=(0,t.useAuth)(),d=(0,a.useRouter)(),[n,i]=(0,s.useState)(""),[o,c]=(0,s.useState)(""),[m,u]=(0,s.useState)(!1);(0,s.useEffect)(()=>{i(localStorage.getItem("email")??"")},[]),(0,s.useEffect)(()=>{let e=()=>{c(new Date().toLocaleTimeString("en-US",{hour:"2-digit",minute:"2-digit",hour12:!0}))};e();let r=setInterval(e,1e3);return()=>clearInterval(r)},[]);let b=n?n.split("@")[0].slice(0,2).toUpperCase():"AD",p=new Date().toLocaleDateString("en-US",{weekday:"long",month:"long",day:"numeric",year:"numeric"});return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
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
      `}),(0,r.jsxs)("header",{className:"re-header",children:[(0,r.jsxs)("div",{className:"re-header-left",children:[(0,r.jsxs)("div",{className:"re-brand",children:[(0,r.jsx)("div",{className:"re-brand-icon",children:(0,r.jsx)("div",{className:"re-brand-icon-inner"})}),(0,r.jsx)("span",{className:"re-brand-name",children:"Real Estate"})]}),(0,r.jsx)("div",{className:"re-divider-v"}),(0,r.jsxs)("div",{className:"re-breadcrumb",children:[(0,r.jsx)("span",{children:"Platform"}),(0,r.jsx)("span",{className:"re-breadcrumb-sep",children:"›"}),(0,r.jsx)("span",{className:"re-breadcrumb-active",children:"Underwriting Dashboard"})]})]}),(0,r.jsxs)("div",{className:"re-header-center",children:[(0,r.jsx)("div",{className:"re-time",children:o}),(0,r.jsx)("div",{className:"re-date",children:p})]}),(0,r.jsxs)("div",{className:"re-header-right",children:[(0,r.jsxs)("div",{className:"re-status",children:[(0,r.jsx)("span",{className:"re-status-dot"}),"All Systems Operational"]}),(0,r.jsxs)("div",{style:{position:"relative"},children:[(0,r.jsxs)("button",{className:`re-user-btn ${m?"open":""}`,onClick:()=>u(e=>!e),onBlur:()=>setTimeout(()=>u(!1),150),children:[(0,r.jsx)("div",{className:"re-avatar",children:b}),(0,r.jsxs)("div",{className:"re-user-info",children:[(0,r.jsx)("div",{className:"re-user-name",children:n||"Administrator"}),(0,r.jsx)("div",{className:"re-user-role",children:"Admin"})]}),(0,r.jsx)(x,{className:"re-chevron",size:13})]}),m&&(0,r.jsxs)("div",{className:"re-dropdown",children:[(0,r.jsxs)("div",{className:"re-dropdown-header",children:[(0,r.jsx)("div",{className:"re-dropdown-label",children:"Signed in as"}),(0,r.jsx)("div",{className:"re-dropdown-email",children:n||"Administrator"})]}),(0,r.jsxs)("button",{className:"re-dropdown-item danger",onClick:()=>{l(),d.push("/login")},children:[(0,r.jsx)(g,{size:14}),"Sign out"]})]})]})]})]})]})}function f({children:e}){let{isAuthenticated:l}=(0,t.useAuth)(),d=(0,a.useRouter)(),[n,i]=(0,s.useState)(!1);return((0,s.useEffect)(()=>{i(!0)},[]),(0,s.useEffect)(()=>{n&&!l&&d.push("/login")},[n,l,d]),n&&l)?(0,r.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,r.jsx)(p,{}),(0,r.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,r.jsx)(h,{}),(0,r.jsx)("main",{className:"flex-1 overflow-auto",children:e})]})]}):null}e.s(["AdminLayout",()=>f],1894)},85846,e=>{"use strict";let r=(0,e.i(70451).default)("CircleAlert",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["line",{x1:"12",x2:"12",y1:"8",y2:"12",key:"1pkeuh"}],["line",{x1:"12",x2:"12.01",y1:"16",y2:"16",key:"4dfq90"}]]);e.s(["AlertCircle",()=>r],85846)},94192,e=>{"use strict";let r=(0,e.i(70451).default)("CircleCheck",[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"m9 12 2 2 4-4",key:"dzmm74"}]]);e.s(["CheckCircle2",()=>r],94192)},5953,e=>{"use strict";let r=(0,e.i(70451).default)("DollarSign",[["line",{x1:"12",x2:"12",y1:"2",y2:"22",key:"7eqyqh"}],["path",{d:"M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6",key:"1b0p4s"}]]);e.s(["DollarSign",()=>r],5953)},98895,e=>{"use strict";async function r(e,r){let t=await fetch(e,{headers:{"Content-Type":"application/json"},...r});if(!t.ok)throw Error("API Error");return t.json()}e.s(["api",()=>r])},5286,e=>{"use strict";var r=e.i(54156),t=e.i(35491),a=e.i(76569),s=e.i(1894),l=e.i(98895),d=e.i(94192),n=e.i(85846),i=e.i(10527),o=e.i(20980),c=e.i(5953),x=e.i(58280),m=e.i(93179),u=e.i(84906),b=e.i(70451);let p=(0,b.default)("Share2",[["circle",{cx:"18",cy:"5",r:"3",key:"gq8acd"}],["circle",{cx:"6",cy:"12",r:"3",key:"w7nqdw"}],["circle",{cx:"18",cy:"19",r:"3",key:"1xt0gg"}],["line",{x1:"8.59",x2:"15.42",y1:"13.51",y2:"17.49",key:"47mynk"}],["line",{x1:"15.41",x2:"8.59",y1:"6.51",y2:"10.49",key:"1n3mei"}]]),g=(0,b.default)("Printer",[["path",{d:"M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2",key:"143wyd"}],["path",{d:"M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6",key:"1itne7"}],["rect",{x:"6",y:"14",width:"12",height:"8",rx:"1",key:"1ue0tg"}]]);var h=e.i(84109),f=e.i(42494);let y=(0,b.default)("Minus",[["path",{d:"M5 12h14",key:"1ays0h"}]]),j=(0,b.default)("Wrench",[["path",{d:"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z",key:"cbrjhi"}]]);var k=e.i(52354),v=e.i(49681),N=e.i(13470);let w=e=>Math.round(e).toLocaleString(),C=e=>(Math.round(100*e)/100).toFixed(2);function P(){let{id:e}=(0,a.useParams)(),b=(0,a.useRouter)(),[P,A]=(0,t.useState)(null),[S,$]=(0,t.useState)(!0),[M,E]=(0,t.useState)("overview");(0,t.useEffect)(()=>{$(!0),(0,l.api)(`/api/deals/${e}`).then(A).finally(()=>$(!1))},[e]);let R=P?.calculator||{},D=R.purchasePrice||0,T=R.closingCosts||0,O=R.holdingCosts||0,L=(R.rehabCostPerSqft||0)*(P?.subject?.squareFeet||0),z=(R.realtorFeesPercent||0)/100*(P?.adjustedArv||P?.baseArv||0),_=D+T+O+L+z,F=(P?.adjustedArv||P?.baseArv||0)-_,U=D>0?F/D*100:0,I=U>=20?"Excellent":U>=10?"Good":"Moderate",B=P?.arvAdjustments?.reduce((e,r)=>e+(r.impactPercent||0),0)||0;if(S)return(0,r.jsx)(s.AdminLayout,{children:(0,r.jsx)("div",{className:"p-8 flex items-center justify-center min-h-[60vh]",children:(0,r.jsxs)("div",{className:"animate-pulse space-y-4 w-full max-w-6xl",children:[(0,r.jsx)("div",{className:"h-8 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/3"}),(0,r.jsx)("div",{className:"h-4 bg-gray-200 dark:bg-gray-700 rounded-lg w-1/4 mb-6"}),(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[void 0,void 0,void 0,void 0].map((e,t)=>(0,r.jsx)("div",{className:"h-32 bg-gray-200 dark:bg-gray-700 rounded-lg"},t))})]})})});if(!P)return(0,r.jsx)(s.AdminLayout,{children:(0,r.jsxs)("div",{className:"p-8 max-w-4xl mx-auto",children:[(0,r.jsxs)("button",{onClick:()=>b.back(),className:"flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 font-medium",children:[(0,r.jsx)(m.ArrowLeft,{className:"w-4 h-4"}),"Back"]}),(0,r.jsx)("div",{className:"bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-8",children:(0,r.jsxs)("div",{className:"flex gap-4",children:[(0,r.jsx)(n.AlertCircle,{className:"w-6 h-6 text-red-600 dark:text-red-400 flex-shrink-0"}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"font-semibold text-red-900 dark:text-red-200 mb-2",children:"Deal Not Found"}),(0,r.jsx)("p",{className:"text-red-700 dark:text-red-300",children:"The deal you're looking for could not be found."})]})]})})]})});let q=(e=>{switch(e?.toUpperCase()){case"PASS":return{color:"bg-emerald-50 dark:bg-emerald-950",textColor:"text-emerald-700 dark:text-emerald-300",borderColor:"border-emerald-200 dark:border-emerald-800",badgeColor:"bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-300",icon:d.CheckCircle2,label:"Approved"};case"FAIL":return{color:"bg-red-50 dark:bg-red-950",textColor:"text-red-700 dark:text-red-300",borderColor:"border-red-200 dark:border-red-800",badgeColor:"bg-red-100 dark:bg-red-900 text-red-700 dark:text-red-300",icon:n.AlertCircle,label:"Failed"};default:return{color:"bg-gray-50 dark:bg-gray-800",textColor:"text-gray-700 dark:text-gray-300",borderColor:"border-gray-200 dark:border-gray-700",badgeColor:"bg-gray-100 dark:bg-gray-900 text-gray-700 dark:text-gray-300",icon:n.AlertCircle,label:e}}})(P.status),H=q.icon;return(0,r.jsx)(s.AdminLayout,{children:(0,r.jsxs)("div",{className:"p-8 max-w-7xl mx-auto",children:[(0,r.jsxs)("button",{onClick:()=>b.back(),className:"flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 mb-6 font-medium transition-colors",children:[(0,r.jsx)(m.ArrowLeft,{className:"w-4 h-4"}),"Back to Deals"]}),(0,r.jsxs)("div",{className:"mb-8",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between gap-4 mb-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-3",children:[(0,r.jsx)("div",{className:"flex items-center justify-center w-12 h-12 rounded-lg bg-blue-100 dark:bg-blue-900",children:(0,r.jsx)(x.Home,{className:"w-6 h-6 text-blue-600 dark:text-blue-400"})}),(0,r.jsx)("h1",{className:"text-4xl font-bold text-gray-900 dark:text-gray-50",children:P.subject?.address||"N/A"})]}),(0,r.jsxs)("p",{className:"text-gray-500 dark:text-gray-400 flex items-center gap-2",children:[(0,r.jsx)(o.MapPin,{className:"w-4 h-4"}),"Deal ID: ",e]})]}),(0,r.jsxs)("div",{className:"flex gap-2",children:[(0,r.jsx)("button",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group",title:"Print",children:(0,r.jsx)(g,{className:"w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"})}),(0,r.jsx)("button",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group",title:"Share",children:(0,r.jsx)(p,{className:"w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"})}),(0,r.jsx)(N.default,{href:`/deals/${e}/edit`,children:(0,r.jsx)("button",{className:"p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors group",title:"Edit",children:(0,r.jsx)(u.Edit2,{className:"w-5 h-5 text-gray-600 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-gray-200"})})})]})]}),(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsxs)("span",{className:`inline-flex items-center gap-2 px-4 py-2 rounded-full font-semibold text-sm border ${q.badgeColor}`,children:[(0,r.jsx)(H,{className:"w-4 h-4"}),q.label]}),(0,r.jsxs)("span",{className:`inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-semibold ${U>=0?"bg-emerald-100 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-300":"bg-red-100 dark:bg-red-950 text-red-700 dark:text-red-300"}`,children:[(0,r.jsx)(i.TrendingUp,{className:"w-3 h-3"}),I," ROI (",C(U),"%)"]})]})]}),(0,r.jsxs)("div",{className:"bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700 mb-6",children:[(0,r.jsx)("div",{className:"flex border-b border-gray-200 dark:border-gray-700 overflow-x-auto",children:["overview","subject","comps","adjustments","analysis"].map(e=>(0,r.jsx)("button",{onClick:()=>E(e),className:`py-4 px-6 font-medium transition-all border-b-2 whitespace-nowrap ${M===e?"border-blue-600 text-blue-600 dark:text-blue-400":"border-transparent text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-200"}`,children:e.charAt(0).toUpperCase()+e.slice(1)},e))}),(0,r.jsxs)("div",{className:"p-8",children:["overview"===M&&(0,r.jsxs)("div",{className:"space-y-8",children:[(0,r.jsxs)("div",{className:"bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl p-6 border border-blue-200 dark:border-blue-700",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-blue-900 dark:text-blue-100 mb-4",children:"Deal Analysis Process"}),(0,r.jsxs)("div",{className:"flex items-center justify-between gap-2 text-sm",children:[(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",children:"1"}),(0,r.jsx)("span",{className:"text-xs font-semibold text-center",children:"Subject Property"})]}),(0,r.jsx)("div",{className:"flex-1 h-1 bg-blue-300"}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",children:"2"}),(0,r.jsx)("span",{className:"text-xs font-semibold text-center",children:"Selected Comps"})]}),(0,r.jsx)("div",{className:"flex-1 h-1 bg-blue-300"}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",children:"3"}),(0,r.jsx)("span",{className:"text-xs font-semibold text-center",children:"Base ARV"})]}),(0,r.jsx)("div",{className:"flex-1 h-1 bg-blue-300"}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",children:"4"}),(0,r.jsx)("span",{className:"text-xs font-semibold text-center",children:"Adjustments"})]}),(0,r.jsx)("div",{className:"flex-1 h-1 bg-blue-300"}),(0,r.jsxs)("div",{className:"flex flex-col items-center gap-2",children:[(0,r.jsx)("div",{className:"w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold",children:"5"}),(0,r.jsx)("span",{className:"text-xs font-semibold text-center",children:"Final Result"})]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-4 gap-6",children:[(0,r.jsxs)("div",{className:"bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 rounded-xl border border-blue-200 dark:border-blue-700 p-6 hover:shadow-lg transition-all",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,r.jsx)("div",{className:"p-2 bg-blue-200 dark:bg-blue-700 rounded-lg",children:(0,r.jsx)(c.DollarSign,{className:"w-5 h-5 text-blue-600 dark:text-blue-300"})}),(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-600 dark:text-blue-300 uppercase tracking-wide",children:"Purchase Price"})]}),(0,r.jsxs)("p",{className:"text-3xl font-bold text-blue-900 dark:text-blue-100",children:["$",w(D)]}),(0,r.jsx)("p",{className:"text-xs text-blue-700 dark:text-blue-300 mt-2",children:"Your investment"})]}),(0,r.jsxs)("div",{className:"bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900 dark:to-purple-800 rounded-xl border border-purple-200 dark:border-purple-700 p-6 hover:shadow-lg transition-all",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,r.jsx)("div",{className:"p-2 bg-purple-200 dark:bg-purple-700 rounded-lg",children:(0,r.jsx)(x.Home,{className:"w-5 h-5 text-purple-600 dark:text-purple-300"})}),(0,r.jsx)("p",{className:"text-xs font-semibold text-purple-600 dark:text-purple-300 uppercase tracking-wide",children:"Base ARV"})]}),(0,r.jsxs)("p",{className:"text-3xl font-bold text-purple-900 dark:text-purple-100",children:["$",w(P.baseArv||0)]}),(0,r.jsx)("p",{className:"text-xs text-purple-700 dark:text-purple-300 mt-2",children:"From comparable sales"})]}),(0,r.jsxs)("div",{className:`bg-gradient-to-br ${B>=0?"from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800":"from-orange-50 to-orange-100 dark:from-orange-900 dark:to-orange-800"} rounded-xl border ${B>=0?"border-amber-200 dark:border-amber-700":"border-orange-200 dark:border-orange-700"} p-6 hover:shadow-lg transition-all`,children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,r.jsx)("div",{className:`p-2 ${B>=0?"bg-amber-200 dark:bg-amber-700":"bg-orange-200 dark:bg-orange-700"} rounded-lg`,children:B>=0?(0,r.jsx)(f.Plus,{className:`w-5 h-5 ${B>=0?"text-amber-600 dark:text-amber-300":"text-orange-600 dark:text-orange-300"}`}):(0,r.jsx)(y,{className:`w-5 h-5 ${B>=0?"text-amber-600 dark:text-amber-300":"text-orange-600 dark:text-orange-300"}`})}),(0,r.jsx)("p",{className:`text-xs font-semibold ${B>=0?"text-amber-600 dark:text-amber-300":"text-orange-600 dark:text-orange-300"} uppercase tracking-wide`,children:"Adjustments"})]}),(0,r.jsxs)("p",{className:`text-3xl font-bold ${B>=0?"text-amber-900 dark:text-amber-100":"text-orange-900 dark:text-orange-100"}`,children:[B>=0?"+":"",C(B),"%"]}),(0,r.jsx)("p",{className:`text-xs ${B>=0?"text-amber-700 dark:text-amber-300":"text-orange-700 dark:text-orange-300"} mt-2`,children:"Total impact on ARV"})]}),(0,r.jsxs)("div",{className:`bg-gradient-to-br ${U>=0?"from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800":"from-red-50 to-red-100 dark:from-red-900 dark:to-red-800"} rounded-xl border ${U>=0?"border-emerald-200 dark:border-emerald-700":"border-red-200 dark:border-red-700"} p-6 hover:shadow-lg transition-all`,children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,r.jsx)("div",{className:`p-2 ${U>=0?"bg-emerald-200 dark:bg-emerald-700":"bg-red-200 dark:bg-red-700"} rounded-lg`,children:(0,r.jsx)(i.TrendingUp,{className:`w-5 h-5 ${U>=0?"text-emerald-600 dark:text-emerald-300":"text-red-600 dark:text-red-300"}`})}),(0,r.jsx)("p",{className:`text-xs font-semibold ${U>=0?"text-emerald-600 dark:text-emerald-300":"text-red-600 dark:text-red-300"} uppercase tracking-wide`,children:"Final ARV"})]}),(0,r.jsxs)("p",{className:`text-3xl font-bold ${U>=0?"text-emerald-900 dark:text-emerald-100":"text-red-900 dark:text-red-100"}`,children:["$",w(P.adjustedArv||P.baseArv||0)]}),(0,r.jsxs)("p",{className:`text-xs mt-2 ${U>=0?"text-emerald-700 dark:text-emerald-300":"text-red-700 dark:text-red-300"}`,children:[I," ROI"]})]})]}),(0,r.jsxs)("div",{className:"bg-gray-50 dark:bg-gray-700 rounded-xl p-6 border border-gray-200 dark:border-gray-600",children:[(0,r.jsx)("h3",{className:"text-lg font-semibold text-gray-900 dark:text-gray-50 mb-4",children:"Deal Summary"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-4 gap-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase",children:"Profit"}),(0,r.jsxs)("p",{className:`text-xl font-bold ${U>=0?"text-emerald-600 dark:text-emerald-400":"text-red-600 dark:text-red-400"}`,children:[C(U),"%"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase",children:"Profit $"}),(0,r.jsxs)("p",{className:`text-xl font-bold ${U>=0?"text-emerald-600 dark:text-emerald-400":"text-red-600 dark:text-red-400"}`,children:["$",w(F)]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase",children:"Comps Used"}),(0,r.jsx)("p",{className:"text-xl font-bold text-gray-900 dark:text-gray-50",children:P.selectedComps?.length||0})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2 uppercase",children:"Status"}),(0,r.jsx)("p",{className:"text-xl font-bold text-gray-900 dark:text-gray-50",children:P.status})]})]})]})]}),"subject"===M&&(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-50 mb-6",children:"Subject Property Details"}),(0,r.jsxs)("div",{className:"bg-blue-50 dark:bg-blue-900 border border-blue-200 dark:border-blue-700 rounded-xl p-6",children:[(0,r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-8",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"font-semibold text-blue-900 dark:text-blue-100 mb-4",children:"Property Information"}),(0,r.jsxs)("div",{className:"space-y-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-1",children:"Address"}),(0,r.jsx)("p",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100",children:P.subject?.address})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-1",children:"Property Type"}),(0,r.jsx)("p",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100",children:P.subject?.propertyType||"Single Family"})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-1",children:"Year Built"}),(0,r.jsx)("p",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100",children:P.subject?.yearBuilt})]})]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("h4",{className:"font-semibold text-blue-900 dark:text-blue-100 mb-4",children:"Physical Specifications"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-1",children:"Square Feet"}),(0,r.jsx)("p",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100",children:P.subject?.squareFeet?.toLocaleString()})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-1",children:"Beds"}),(0,r.jsx)("p",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100",children:P.subject?.beds})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-1",children:"Baths"}),(0,r.jsx)("p",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100",children:P.subject?.baths})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-1",children:"Garage"}),(0,r.jsx)("p",{className:"text-lg font-semibold text-blue-900 dark:text-blue-100",children:P.subject?.hasGarage?"Yes":"No"})]})]})]})]}),(0,r.jsxs)("div",{className:"mt-6 pt-6 border-t border-blue-200 dark:border-blue-700",children:[(0,r.jsx)("h4",{className:"font-semibold text-blue-900 dark:text-blue-100 mb-4",children:"Features & Conditions"}),(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-3 gap-4",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:`w-3 h-3 rounded-full ${P.subject?.hasGarage?"bg-emerald-500":"bg-gray-300"}`}),(0,r.jsx)("span",{className:"text-sm text-blue-900 dark:text-blue-100",children:P.subject?.hasGarage?"Has Garage":"No Garage"})]}),(0,r.jsxs)("div",{className:"flex items-center gap-2",children:[(0,r.jsx)("div",{className:`w-3 h-3 rounded-full ${P.subject?.isBusyStreet?"bg-amber-500":"bg-emerald-500"}`}),(0,r.jsx)("span",{className:"text-sm text-blue-900 dark:text-blue-100",children:P.subject?.isBusyStreet?"Busy Street":"Quiet Street"})]})]})]})]})]}),"comps"===M&&(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-50 mb-2",children:"Selected Comparable Properties"}),(0,r.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:[P.selectedComps?.length||0," properties selected from"," ",P.compsEvaluated?.length||0," evaluated comps"]})]}),P.selectedComps&&P.selectedComps.length>0?(0,r.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 gap-6",children:P.selectedComps.map((e,t)=>(0,r.jsxs)("div",{className:"bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900 dark:to-green-800 border border-green-200 dark:border-green-700 rounded-xl p-6",children:[(0,r.jsxs)("div",{className:"flex items-start justify-between mb-4",children:[(0,r.jsxs)("div",{children:[(0,r.jsxs)("h4",{className:"font-bold text-green-900 dark:text-green-100 mb-1",children:["Comp #",t+1]}),(0,r.jsx)("p",{className:"text-sm text-green-700 dark:text-green-300",children:e.address})]}),(0,r.jsxs)("div",{className:"text-right",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-600 dark:text-green-400 uppercase",children:"Sold Price"}),(0,r.jsxs)("p",{className:"text-xl font-bold text-green-900 dark:text-green-100",children:["$",w(e.soldPrice||0)]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-2 gap-4 mb-4 pb-4 border-b border-green-200 dark:border-green-700",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-700 dark:text-green-300 uppercase mb-1",children:"Sold"}),(0,r.jsx)("p",{className:"text-sm font-semibold text-green-900 dark:text-green-100",children:new Date(e.soldDate).toLocaleDateString()}),(0,r.jsxs)("p",{className:"text-xs text-green-700 dark:text-green-300",children:[Math.floor((new Date().getTime()-new Date(e.soldDate).getTime())/864e5)," ","days ago"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-700 dark:text-green-300 uppercase mb-1",children:"Distance"}),(0,r.jsxs)("p",{className:"text-sm font-semibold text-green-900 dark:text-green-100",children:[e.distanceMiles?.toFixed(2)," mi"]})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-700 dark:text-green-300 uppercase mb-1",children:"Sqft"}),(0,r.jsx)("p",{className:"text-sm font-semibold text-green-900 dark:text-green-100",children:e.squareFeet?.toLocaleString()})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-700 dark:text-green-300 uppercase mb-1",children:"$/Sqft"}),(0,r.jsxs)("p",{className:"text-sm font-semibold text-green-900 dark:text-green-100",children:["$",w(e.soldPrice/(e.squareFeet||1))]})]})]}),(0,r.jsxs)("div",{className:"grid grid-cols-3 gap-2",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-700 dark:text-green-300 mb-1",children:"Beds"}),(0,r.jsx)("p",{className:"text-lg font-bold text-green-900 dark:text-green-100",children:e.beds})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-700 dark:text-green-300 mb-1",children:"Baths"}),(0,r.jsx)("p",{className:"text-lg font-bold text-green-900 dark:text-green-100",children:e.baths})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-green-700 dark:text-green-300 mb-1",children:"Year"}),(0,r.jsx)("p",{className:"text-lg font-bold text-green-900 dark:text-green-100",children:e.yearBuilt})]})]})]},t))}):(0,r.jsx)("div",{className:"bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6",children:(0,r.jsx)("p",{className:"text-yellow-800 dark:text-yellow-200",children:"No comparable properties selected"})})]}),"adjustments"===M&&(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{children:[(0,r.jsx)("h3",{className:"text-xl font-bold text-gray-900 dark:text-gray-50 mb-2",children:"ARV Adjustments"}),(0,r.jsxs)("p",{className:"text-sm text-gray-600 dark:text-gray-400",children:["Base ARV: ",(0,r.jsxs)("span",{className:"font-semibold",children:["$",w(P.baseArv||0)]})]})]}),P.arvAdjustments&&P.arvAdjustments.length>0?(0,r.jsxs)("div",{className:"space-y-4",children:[P.arvAdjustments.map((e,t)=>(0,r.jsx)("div",{className:`border-l-4 ${e.impactPercent>=0?"border-green-500 bg-green-50 dark:bg-green-900":"border-red-500 bg-red-50 dark:bg-red-900"} rounded-lg p-4`,children:(0,r.jsxs)("div",{className:"flex items-center justify-between",children:[(0,r.jsxs)("div",{className:"flex-1",children:[(0,r.jsx)("h4",{className:`font-semibold ${e.impactPercent>=0?"text-green-900 dark:text-green-100":"text-red-900 dark:text-red-100"}`,children:e.rule}),(0,r.jsx)("p",{className:`text-sm mt-1 ${e.impactPercent>=0?"text-green-700 dark:text-green-300":"text-red-700 dark:text-red-300"}`,children:e.reason})]}),(0,r.jsxs)("div",{className:`text-right font-bold text-xl ${e.impactPercent>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`,children:[e.impactPercent>=0?"+":"",C(e.impactPercent||0),"%"]})]})},t)),(0,r.jsxs)("div",{className:"mt-6 pt-6 border-t border-gray-200 dark:border-gray-700",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 bg-gray-100 dark:bg-gray-700 rounded-lg",children:[(0,r.jsx)("span",{className:"font-semibold text-gray-900 dark:text-gray-50",children:"Total Adjustment Impact"}),(0,r.jsxs)("span",{className:`text-2xl font-bold ${B>=0?"text-green-600 dark:text-green-400":"text-red-600 dark:text-red-400"}`,children:[B>=0?"+":"",C(B),"%"]})]}),(0,r.jsxs)("div",{className:"mt-4 p-4 bg-blue-50 dark:bg-blue-900 rounded-lg border border-blue-200 dark:border-blue-700",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300 uppercase mb-2",children:"Calculation"}),(0,r.jsxs)("p",{className:"text-sm text-blue-900 dark:text-blue-100",children:["Base ARV: $",w(P.baseArv||0)]}),(0,r.jsxs)("p",{className:"text-sm text-blue-900 dark:text-blue-100 mt-1",children:["Adjustment: ",B>=0?"+":"",C(B),"% ( $",w((P.baseArv||0)*(B/100)),")"]}),(0,r.jsxs)("p",{className:"text-lg font-bold text-blue-900 dark:text-blue-100 mt-3 pt-3 border-t border-blue-200 dark:border-blue-700",children:["Final ARV: $",w(P.adjustedArv||0)]})]})]})]}):(0,r.jsx)("div",{className:"bg-yellow-50 dark:bg-yellow-950 border border-yellow-200 dark:border-yellow-800 rounded-xl p-6",children:(0,r.jsx)("p",{className:"text-yellow-800 dark:text-yellow-200",children:"No adjustments applied. Final ARV equals Base ARV."})})]}),"analysis"===M&&(0,r.jsxs)("div",{className:"space-y-6",children:[(0,r.jsxs)("div",{className:"bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 rounded-xl p-6 mb-6 shadow-sm hover:shadow-md transition-shadow",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between mb-6",children:[(0,r.jsx)("h3",{className:"text-lg font-bold text-gray-900 dark:text-gray-50",children:"Cost Breakdown"}),(0,r.jsx)("div",{className:"px-3 py-1 bg-blue-100 dark:bg-blue-900 rounded-full",children:(0,r.jsx)("span",{className:"text-xs font-semibold text-blue-700 dark:text-blue-300",children:"5 Items"})})]}),(0,r.jsxs)("div",{className:"space-y-3",children:[(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("div",{className:"w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900 flex items-center justify-center",children:(0,r.jsx)(c.DollarSign,{className:"w-5 h-5 text-blue-600 dark:text-blue-400"})}),(0,r.jsx)("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:"Purchase Price"})]}),(0,r.jsxs)("span",{className:"text-lg font-bold text-gray-900 dark:text-gray-50",children:["$",w(D)]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("div",{className:"w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900 flex items-center justify-center",children:(0,r.jsx)(v.FileText,{className:"w-5 h-5 text-purple-600 dark:text-purple-400"})}),(0,r.jsx)("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:"Closing Costs"})]}),(0,r.jsxs)("span",{className:"text-lg font-bold text-gray-900 dark:text-gray-50",children:["$",w(T)]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("div",{className:"w-10 h-10 rounded-lg bg-amber-100 dark:bg-amber-900 flex items-center justify-center",children:(0,r.jsx)(k.Clock,{className:"w-5 h-5 text-amber-600 dark:text-amber-400"})}),(0,r.jsx)("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:"Holding Costs"})]}),(0,r.jsxs)("span",{className:"text-lg font-bold text-gray-900 dark:text-gray-50",children:["$",w(O)]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("div",{className:"w-10 h-10 rounded-lg bg-orange-100 dark:bg-orange-900 flex items-center justify-center",children:(0,r.jsx)(j,{className:"w-5 h-5 text-orange-600 dark:text-orange-400"})}),(0,r.jsx)("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:"Rehab Cost"})]}),(0,r.jsxs)("span",{className:"text-lg font-bold text-gray-900 dark:text-gray-50",children:["$",w(L)]})]}),(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 bg-white dark:bg-gray-700 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-600 transition-colors",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3",children:[(0,r.jsx)("div",{className:"w-10 h-10 rounded-lg bg-green-100 dark:bg-green-900 flex items-center justify-center",children:(0,r.jsx)(x.Home,{className:"w-5 h-5 text-green-600 dark:text-green-400"})}),(0,r.jsx)("span",{className:"font-medium text-gray-700 dark:text-gray-300",children:"Realtor Fees"})]}),(0,r.jsxs)("span",{className:"text-lg font-bold text-gray-900 dark:text-gray-50",children:["$",w(z)]})]}),(0,r.jsx)("div",{className:"mt-4 pt-4 border-t-2 border-gray-200 dark:border-gray-600",children:(0,r.jsxs)("div",{className:"flex items-center justify-between p-4 bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 rounded-lg",children:[(0,r.jsx)("span",{className:"font-bold text-white text-lg",children:"Total Investment"}),(0,r.jsxs)("span",{className:"text-3xl font-black text-white",children:["$",w(_)]})]})}),(0,r.jsxs)("div",{className:"grid grid-cols-2 md:grid-cols-5 gap-3 mt-4",children:[(0,r.jsxs)("div",{className:"text-center p-3 bg-white dark:bg-gray-700 rounded-lg",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase",children:"Purchase"}),(0,r.jsxs)("p",{className:"text-sm font-bold text-gray-900 dark:text-gray-50",children:[C(D/_*100),"%"]})]}),(0,r.jsxs)("div",{className:"text-center p-3 bg-white dark:bg-gray-700 rounded-lg",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase",children:"Closing"}),(0,r.jsxs)("p",{className:"text-sm font-bold text-gray-900 dark:text-gray-50",children:[C(T/_*100),"%"]})]}),(0,r.jsxs)("div",{className:"text-center p-3 bg-white dark:bg-gray-700 rounded-lg",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase",children:"Holding"}),(0,r.jsxs)("p",{className:"text-sm font-bold text-gray-900 dark:text-gray-50",children:[C(O/_*100),"%"]})]}),(0,r.jsxs)("div",{className:"text-center p-3 bg-white dark:bg-gray-700 rounded-lg",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase",children:"Rehab"}),(0,r.jsxs)("p",{className:"text-sm font-bold text-gray-900 dark:text-gray-50",children:[C(L/_*100),"%"]})]}),(0,r.jsxs)("div",{className:"text-center p-3 bg-white dark:bg-gray-700 rounded-lg",children:[(0,r.jsx)("p",{className:"text-xs font-semibold text-gray-500 dark:text-gray-400 mb-1 uppercase",children:"Realtor"}),(0,r.jsxs)("p",{className:"text-sm font-bold text-gray-900 dark:text-gray-50",children:[C(z/_*100),"%"]})]})]})]})]}),Array.isArray(P.failureReasons)&&P.failureReasons.length>0?(0,r.jsxs)("div",{className:"bg-red-50 dark:bg-red-950 border border-red-200 dark:border-red-800 rounded-xl p-6",children:[(0,r.jsxs)("div",{className:"flex items-center gap-2 mb-4",children:[(0,r.jsx)(n.AlertCircle,{className:"w-5 h-5 text-red-600 dark:text-red-400"}),(0,r.jsx)("h3",{className:"text-lg font-semibold text-red-900 dark:text-red-200",children:"Why This Deal Failed"})]}),(0,r.jsx)("ul",{className:"space-y-3",children:P.failureReasons.map((e,t)=>(0,r.jsxs)("li",{className:"flex items-start gap-3 text-red-700 dark:text-red-300",children:[(0,r.jsx)("span",{className:"flex-shrink-0 w-2 h-2 mt-2 rounded-full bg-red-600 dark:bg-red-400"}),(0,r.jsx)("span",{className:"text-sm",children:e})]},t))}),P.explainability?.rejectionExplanation&&(0,r.jsxs)("div",{className:"mt-6 pt-6 border-t border-red-200 dark:border-red-800",children:[(0,r.jsx)("h4",{className:"font-semibold text-red-900 dark:text-red-200 mb-3",children:"Explanation"}),(0,r.jsx)("p",{className:"text-sm text-red-700 dark:text-red-300",children:P.explainability.rejectionExplanation})]})]}):(0,r.jsxs)("div",{className:"bg-emerald-50 dark:bg-emerald-950 border border-emerald-200 dark:border-emerald-800 rounded-xl p-6",children:[(0,r.jsxs)("div",{className:"flex items-center gap-3 mb-4",children:[(0,r.jsx)(d.CheckCircle2,{className:"w-6 h-6 text-emerald-600 dark:text-emerald-400"}),(0,r.jsx)("h3",{className:"font-semibold text-emerald-900 dark:text-emerald-200",children:"Deal Approved ✓"})]}),(0,r.jsx)("p",{className:"text-sm text-emerald-700 dark:text-emerald-300 mb-6",children:"This deal meets all analysis criteria and is ready to proceed."}),P.explainability?.arvExplanation&&(0,r.jsxs)("div",{className:"bg-white dark:bg-emerald-900 rounded-lg p-4 mb-4",children:[(0,r.jsx)("h4",{className:"font-semibold text-emerald-900 dark:text-emerald-100 mb-2",children:"ARV Explanation"}),(0,r.jsx)("p",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:P.explainability.arvExplanation})]}),P.explainability?.compSelectionExplanation&&(0,r.jsxs)("div",{className:"bg-white dark:bg-emerald-900 rounded-lg p-4",children:[(0,r.jsx)("h4",{className:"font-semibold text-emerald-900 dark:text-emerald-100 mb-2",children:"Comparable Selection"}),(0,r.jsx)("p",{className:"text-sm text-emerald-700 dark:text-emerald-300",children:P.explainability.compSelectionExplanation})]})]})]})]})]}),(0,r.jsxs)("div",{className:"flex gap-3 mt-6",children:[(0,r.jsx)(N.default,{href:`/deals/${e}/edit`,className:"flex-1",children:(0,r.jsxs)("button",{className:"w-full flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-all",children:[(0,r.jsx)(u.Edit2,{className:"w-4 h-4"}),"Edit Deal"]})}),(0,r.jsxs)("button",{className:"flex-1 bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-300 font-semibold py-3 px-6 rounded-lg transition-all flex items-center justify-center gap-2",children:[(0,r.jsx)(h.Download,{className:"w-4 h-4"}),"Export Report"]})]})]})})}e.s(["default",()=>P],5286)}]);