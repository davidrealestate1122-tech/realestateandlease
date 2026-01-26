module.exports=[1122,(a,b,c)=>{"use strict";b.exports=a.r(99721).vendored["react-ssr"].ReactServerDOMTurbopackClient},19763,a=>{"use strict";var b=a.i(93668);let c=(...a)=>a.filter((a,b,c)=>!!a&&""!==a.trim()&&c.indexOf(a)===b).join(" ").trim();var d={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};let e=(0,b.forwardRef)(({color:a="currentColor",size:e=24,strokeWidth:f=2,absoluteStrokeWidth:g,className:h="",children:i,iconNode:j,...k},l)=>(0,b.createElement)("svg",{ref:l,...d,width:e,height:e,stroke:a,strokeWidth:g?24*Number(f)/Number(e):f,className:c("lucide",h),...k},[...j.map(([a,c])=>(0,b.createElement)(a,c)),...Array.isArray(i)?i:[i]])),f=(a,d)=>{let f=(0,b.forwardRef)(({className:f,...g},h)=>(0,b.createElement)(e,{ref:h,iconNode:d,className:c(`lucide-${a.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase()}`,f),...g}));return f.displayName=`${a}`,f};a.s(["default",()=>f],19763)},7649,70838,71492,a=>{"use strict";var b=a.i(69297),c=a.i(40089),d=a.i(14539),e=a.i(93668),f=a.i(3762),g=a.i(19763);let h=(0,g.default)("ChartColumn",[["path",{d:"M3 3v16a2 2 0 0 0 2 2h16",key:"c24i48"}],["path",{d:"M18 17V9",key:"2bz60n"}],["path",{d:"M13 17V5",key:"1frdt8"}],["path",{d:"M8 17v-3",key:"17ska0"}]]),i=(0,g.default)("Building2",[["path",{d:"M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z",key:"1b4qmf"}],["path",{d:"M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2",key:"i71pzd"}],["path",{d:"M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2",key:"10jefs"}],["path",{d:"M10 6h4",key:"1itunk"}],["path",{d:"M10 10h4",key:"tcdvrf"}],["path",{d:"M10 14h4",key:"kelpxr"}],["path",{d:"M10 18h4",key:"1ulq68"}]]);a.s(["Building2",()=>i],70838);let j=(0,g.default)("Calendar",[["path",{d:"M8 2v4",key:"1cmpym"}],["path",{d:"M16 2v4",key:"4m81vk"}],["rect",{width:"18",height:"18",x:"3",y:"4",rx:"2",key:"1hopcy"}],["path",{d:"M3 10h18",key:"8toen8"}]]);a.s(["Calendar",()=>j],71492);let k=[{href:"/dashboard",label:"Dashboard",icon:h},{href:"/deals",label:"Deals",icon:i},{href:"/daily-summary",label:"Daily Summary",icon:j},{href:"/rules",label:"Rules",icon:(0,g.default)("Settings",[["path",{d:"M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z",key:"1qme2f"}],["circle",{cx:"12",cy:"12",r:"3",key:"1v7zrd"}]])},{href:"/users",label:"Users",icon:(0,g.default)("Users",[["path",{d:"M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2",key:"1yyitq"}],["circle",{cx:"9",cy:"7",r:"4",key:"nufk8"}],["path",{d:"M22 21v-2a4 4 0 0 0-3-3.87",key:"kshegd"}],["path",{d:"M16 3.13a4 4 0 0 1 0 7.75",key:"1da9ce"}]])}];function l(){let a=(0,d.usePathname)();return(0,b.jsxs)("div",{className:"w-64 bg-card border-r border-border flex flex-col",children:[(0,b.jsx)("div",{className:"p-6 border-b border-border",children:(0,b.jsx)("h1",{className:"text-xl font-bold text-foreground",children:"Real Estate Admin"})}),(0,b.jsx)("nav",{className:"flex-1 p-4 space-y-2",children:k.map(c=>{let d=c.icon,e=a===c.href;return(0,b.jsxs)(f.default,{href:c.href,className:`flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${e?"bg-primary text-primary-foreground":"text-foreground hover:bg-muted"}`,children:[(0,b.jsx)(d,{className:"w-5 h-5"}),(0,b.jsx)("span",{className:"font-medium",children:c.label})]},c.href)})})]})}var m=a.i(52858);let n=(0,g.default)("LogOut",[["path",{d:"M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4",key:"1uf3rs"}],["polyline",{points:"16 17 21 12 16 7",key:"1gabdz"}],["line",{x1:"21",x2:"9",y1:"12",y2:"12",key:"1uyos4"}]]),o=(0,g.default)("Moon",[["path",{d:"M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z",key:"a7tn18"}]]),p=(0,g.default)("Sun",[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]]);function q(){let{admin:a,logout:f}=(0,c.useAuth)(),g=(0,d.useRouter)(),[h,i]=(0,e.useState)(!1);return(0,e.useEffect)(()=>{i(document.documentElement.classList.contains("dark"))},[]),(0,b.jsx)("header",{className:"border-b border-border bg-card",children:(0,b.jsxs)("div",{className:"px-6 py-4 flex items-center justify-between",children:[(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"text-lg font-semibold text-foreground",children:"Welcome back"}),(0,b.jsx)("p",{className:"text-sm text-muted-foreground",children:a?.email})]}),(0,b.jsxs)("div",{className:"flex items-center gap-4",children:[(0,b.jsx)(m.Button,{variant:"ghost",size:"icon",onClick:()=>{document.documentElement.classList.toggle("dark"),i(!h)},className:"rounded-lg",children:h?(0,b.jsx)(p,{className:"w-5 h-5"}):(0,b.jsx)(o,{className:"w-5 h-5"})}),(0,b.jsxs)(m.Button,{variant:"ghost",size:"sm",onClick:()=>{f(),g.push("/login")},className:"flex items-center gap-2",children:[(0,b.jsx)(n,{className:"w-4 h-4"}),"Logout"]})]})]})})}function r({children:a}){let{isAuthenticated:f}=(0,c.useAuth)(),g=(0,d.useRouter)(),[h,i]=(0,e.useState)(!1);return((0,e.useEffect)(()=>{i(!0)},[]),(0,e.useEffect)(()=>{h&&!f&&g.push("/login")},[h,f,g]),h&&f)?(0,b.jsxs)("div",{className:"flex h-screen bg-background",children:[(0,b.jsx)(l,{}),(0,b.jsxs)("div",{className:"flex-1 flex flex-col",children:[(0,b.jsx)(q,{}),(0,b.jsx)("main",{className:"flex-1 overflow-auto",children:a})]})]}):null}a.s(["AdminLayout",()=>r],7649)},2913,a=>{"use strict";var b=a.i(69297),c=a.i(93668),d=a.i(7649);let e=(0,a.i(19763).default)("Check",[["path",{d:"M20 6 9 17l-5-5",key:"1gmf2c"}]]),f={COMP:{label:"Comparables",icon:"📊"},DOM:{label:"Dominant Factors",icon:"🎯"},ARV:{label:"After Repair Value",icon:"🏠"},PROFIT:{label:"Profitability",icon:"💰"}};function g(){let[a,g]=(0,c.useState)([]),[h,i]=(0,c.useState)(null),[j,k]=(0,c.useState)(null),[l,m]=(0,c.useState)(!0),[n,o]=(0,c.useState)(!1);(0,c.useEffect)(()=>{let a="dark"===localStorage.getItem("theme")||null===localStorage.getItem("theme")&&window.matchMedia("(prefers-color-scheme: dark)").matches;o(a),document.documentElement.classList.toggle("dark",a),fetch("/api/rules").then(a=>a.json()).then(a=>{g(a),m(!1)}).catch(()=>m(!1))},[]);let p=async(a,b)=>{i(null),k(a),setTimeout(()=>k(null),2e3),await fetch(`/api/rules/${a}`,{method:"PATCH",headers:{"Content-Type":"application/json"},body:JSON.stringify({value:b})}).catch(console.error)},q=a.reduce((a,b)=>(a[b.engine]=a[b.engine]||[],a[b.engine].push(b),a),{});return l?(0,b.jsx)(d.AdminLayout,{children:(0,b.jsx)("div",{className:"p-8 flex items-center justify-center min-h-screen",children:(0,b.jsxs)("div",{className:"text-center space-y-4",children:[(0,b.jsx)("div",{className:"w-12 h-12 border-4 border-blue-600 border-t-transparent rounded-full animate-spin mx-auto"}),(0,b.jsx)("p",{className:"text-muted-foreground",children:"Loading rules..."})]})})}):(0,b.jsxs)(d.AdminLayout,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsxs)("div",{className:"rules-container",children:[(0,b.jsx)("div",{className:"px-8 py-8",children:(0,b.jsxs)("div",{className:"max-w-6xl mx-auto",children:[(0,b.jsx)("h1",{className:"text-4xl font-bold mb-2",style:{fontFamily:"'Syne', sans-serif"},children:"Underwriting Rules"}),(0,b.jsx)("p",{className:"text-slate-500 dark:text-slate-400 text-sm mb-8",children:"Phase 1 Configuration"})]})}),(0,b.jsx)("div",{className:"px-8 pb-12 max-w-6xl mx-auto",children:(0,b.jsx)("div",{className:"space-y-8",children:Object.entries(q).map(([a,c],d)=>{let g=f[a];return(0,b.jsxs)("div",{className:"engine-card rounded-12",style:{animationDelay:`${.1*d}s`},children:[(0,b.jsx)("div",{className:"engine-header px-8 py-6 relative",children:(0,b.jsxs)("div",{className:"flex items-center relative z-10",children:[(0,b.jsx)("span",{className:"engine-icon",children:g.icon}),(0,b.jsxs)("div",{children:[(0,b.jsx)("h2",{className:"text-2xl font-bold",style:{fontFamily:"'Syne', sans-serif"},children:g.label}),(0,b.jsxs)("p",{className:"text-slate-500 dark:text-slate-400 text-sm mt-1",children:[c.length," rules configured"]})]})]})}),(0,b.jsx)("div",{className:"p-8 space-y-4",children:c.map((a,c)=>(0,b.jsxs)("div",{className:"rule-item",style:{animationDelay:`${.1*d+.05*c}s`},children:[(0,b.jsx)("div",{className:"flex justify-between items-start mb-2",children:(0,b.jsxs)("div",{className:"flex-1",children:[(0,b.jsx)("div",{className:"rule-key",children:a.key}),(0,b.jsx)("p",{className:"rule-description",children:a.description}),a.locked&&(0,b.jsx)("div",{className:"locked-badge",children:"🔒 Locked"})]})}),(0,b.jsxs)("div",{className:"flex justify-between items-center gap-4",children:[(0,b.jsxs)("div",{className:"rule-input-group flex-1",children:[(0,b.jsx)("input",{type:"number",defaultValue:a.value,onBlur:b=>p(a._id,Number(b.target.value)),onFocus:()=>i(a._id),className:"rule-input flex-1",disabled:a.locked,step:"0.01"}),a.unit&&(0,b.jsx)("span",{className:"rule-unit",children:a.unit})]}),j===a._id&&(0,b.jsxs)("div",{className:"save-indicator",children:[(0,b.jsx)(e,{size:16,strokeWidth:3}),(0,b.jsx)("span",{children:"Saved"})]})]})]},a._id))})]},a)})})})]})]})}a.s(["default",()=>g],2913)}];

//# sourceMappingURL=realestateandlease_fab629c7._.js.map