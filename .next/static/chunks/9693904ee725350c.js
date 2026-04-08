(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,48042,e=>{"use strict";var r=e.i(54156),a=e.i(35491),i=e.i(76569),t=e.i(49681),s=e.i(60499),o=e.i(13539),l=e.i(67213),n=e.i(20918),d=e.i(35922),c=e.i(52354),p=e.i(70451);let x=(0,p.default)("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);var f=e.i(84109);let g=(0,p.default)("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);var h=e.i(10077);function m({templateId:e,propertyId:i}){let[s,o]=(0,a.useState)([]),[n,d]=(0,a.useState)(!0),[p,m]=(0,a.useState)({});(0,a.useEffect)(()=>{e&&(d(!0),fetch(`/api/documents?propertyId=${i}&templateId=${e}`).then(e=>e.json()).then(e=>{o(Array.isArray(e)?e:[]),d(!1)}).catch(()=>d(!1)))},[e]);let b=async e=>{if(e.pdfUrl)return void u(e.pdfUrl,v(e));m(r=>({...r,[e._id]:!0}));try{let r=await fetch("/api/documents/convert-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({documentId:e._id})});if(!r.ok)throw Error("Conversion failed");let{pdfUrl:a}=await r.json();o(r=>r.map(r=>r._id===e._id?{...r,pdfUrl:a}:r)),u(a,v(e))}catch(e){alert("PDF conversion failed. Make sure LibreOffice is installed on the server.")}finally{m(r=>({...r,[e._id]:!1}))}},u=(e,r)=>{let a=document.createElement("a");a.href=e,a.download=r,a.click()},v=e=>{let r=e.fileUrl?.split("/").pop()?.replace(/\.docx$/,"")||`document_v${e.version}`;return`${r}.pdf`};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .dl { font-family: 'DM Sans', sans-serif; margin-top: 24px; }
        .dl-card { background: #fff; border: 1px solid #e5e7eb; border-radius: 10px; overflow: hidden; position: relative; }
        .dl-card::before { content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px; background: linear-gradient(90deg, rgba(196,162,96,0.7), rgba(196,162,96,0.15)); border-radius: 10px 10px 0 0; }

        .dl-header { display: flex; align-items: center; justify-content: space-between; padding: 18px 22px 14px; border-bottom: 1px solid #f3f4f6; }
        .dl-header-left { display: flex; align-items: center; gap: 10px; }
        .dl-header-icon { width: 32px; height: 32px; background: rgba(196,162,96,0.08); border: 1px solid rgba(196,162,96,0.2); border-radius: 7px; display: flex; align-items: center; justify-content: center; }
        .dl-header-icon svg { width: 14px; height: 14px; color: #92700a; }
        .dl-header-title { font-family: 'Cormorant Garamond', Georgia, serif; font-size: 16px; font-weight: 600; color: #111827; letter-spacing: -0.01em; }
        .dl-badge { font-size: 10px; font-weight: 500; letter-spacing: 0.08em; text-transform: uppercase; color: #92700a; background: rgba(196,162,96,0.1); border: 1px solid rgba(196,162,96,0.2); border-radius: 4px; padding: 3px 8px; }

        .dl-skel-wrap { padding: 16px 22px; display: flex; flex-direction: column; gap: 10px; }
        .dl-skel { height: 52px; background: linear-gradient(90deg, #f0f0f0 25%, #e8e8e8 50%, #f0f0f0 75%); background-size: 200% 100%; animation: dl-skel 1.4s infinite; border-radius: 8px; }
        @keyframes dl-skel { 0% { background-position: 200% 0; } 100% { background-position: -200% 0; } }

        .dl-empty { padding: 48px 24px; text-align: center; }
        .dl-empty-icon { width: 48px; height: 48px; background: #f9fafb; border: 1px solid #e5e7eb; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 12px; }
        .dl-empty-icon svg { width: 20px; height: 20px; color: #9ca3af; }
        .dl-empty-title { font-size: 13px; font-weight: 500; color: #374151; margin-bottom: 3px; }
        .dl-empty-sub { font-size: 12px; color: #9ca3af; font-weight: 300; }

        .dl-list { padding: 12px 22px 16px; display: flex; flex-direction: column; gap: 8px; }
        .dl-row { display: flex; align-items: center; gap: 12px; padding: 12px 14px; background: #fafafa; border: 1px solid #f0f0f0; border-radius: 8px; transition: border-color 0.15s, box-shadow 0.15s; }
        .dl-row:hover { border-color: rgba(196,162,96,0.3); box-shadow: 0 2px 8px rgba(0,0,0,0.04); }

        .dl-row-icon { width: 34px; height: 34px; background: rgba(196,162,96,0.07); border: 1px solid rgba(196,162,96,0.18); border-radius: 7px; display: flex; align-items: center; justify-content: center; flex-shrink: 0; }
        .dl-row-icon svg { width: 14px; height: 14px; color: #92700a; }

        .dl-row-body { flex: 1; min-width: 0; }
        .dl-row-title { font-size: 13px; font-weight: 500; color: #111827; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; }
        .dl-row-meta { display: flex; align-items: center; gap: 6px; margin-top: 2px; font-size: 11px; color: #9ca3af; font-weight: 300; }
        .dl-row-meta svg { width: 10px; height: 10px; }
        .dl-pdf-badge { font-size: 9px; font-weight: 600; padding: 1px 6px; border-radius: 3px; background: #dcfce7; color: #15803d; margin-left: 4px; }

        .dl-actions { display: flex; gap: 6px; flex-shrink: 0; }
        .dl-btn { display: flex; align-items: center; gap: 5px; padding: 6px 11px; border-radius: 6px; font-family: 'DM Sans', sans-serif; font-size: 11px; font-weight: 500; letter-spacing: 0.02em; transition: all 0.12s; flex-shrink: 0; cursor: pointer; text-decoration: none; border: 1px solid; }
        .dl-btn.view { background: #fff; border-color: #e5e7eb; color: #374151; }
        .dl-btn.view:hover { background: rgba(196,162,96,0.06); border-color: rgba(196,162,96,0.35); color: #92700a; }
        .dl-btn.pdf { background: #fff; border-color: #e5e7eb; color: #374151; }
        .dl-btn.pdf:hover { background: #f0fdf4; border-color: #bbf7d0; color: #15803d; }
        .dl-btn.pdf.converting { background: #f9fafb; border-color: #e5e7eb; color: #9ca3af; cursor: not-allowed; }
        .dl-btn svg { width: 11px; height: 11px; }
        .dl-spin { animation: dlspin .7s linear infinite; }
        @keyframes dlspin { to { transform: rotate(360deg); } }

        .dl-footer { padding: 10px 22px 14px; border-top: 1px solid #f3f4f6; font-size: 11px; color: #9ca3af; font-weight: 300; letter-spacing: 0.04em; }
      `}),(0,r.jsx)("div",{className:"dl",children:(0,r.jsxs)("div",{className:"dl-card",children:[(0,r.jsxs)("div",{className:"dl-header",children:[(0,r.jsxs)("div",{className:"dl-header-left",children:[(0,r.jsx)("div",{className:"dl-header-icon",children:(0,r.jsx)(t.FileText,{})}),(0,r.jsx)("div",{className:"dl-header-title",children:"Generated Documents"})]}),!n&&s.length>0&&(0,r.jsxs)("span",{className:"dl-badge",children:[s.length," File",1!==s.length?"s":""]})]}),n?(0,r.jsx)("div",{className:"dl-skel-wrap",children:[void 0,void 0,void 0].map((e,a)=>(0,r.jsx)("div",{className:"dl-skel"},a))}):0===s.length?(0,r.jsxs)("div",{className:"dl-empty",children:[(0,r.jsx)("div",{className:"dl-empty-icon",children:(0,r.jsx)(x,{})}),(0,r.jsx)("div",{className:"dl-empty-title",children:"No documents yet"}),(0,r.jsx)("div",{className:"dl-empty-sub",children:"Generate a document to see it here"})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"dl-list",children:s.map((e,a)=>{let i=p[e._id],s=!!e.pdfUrl;return(0,r.jsxs)("div",{className:"dl-row",children:[(0,r.jsx)("div",{className:"dl-row-icon",children:(0,r.jsx)(t.FileText,{})}),(0,r.jsxs)("div",{className:"dl-row-body",children:[(0,r.jsxs)("div",{className:"dl-row-title",children:["Version ",e.version??a+1,s&&(0,r.jsx)("span",{className:"dl-pdf-badge",children:"PDF ✓"})]}),(0,r.jsxs)("div",{className:"dl-row-meta",children:[(0,r.jsx)(c.Clock,{}),e.createdAt?new Date(e.createdAt).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"Recently generated"]})]}),(0,r.jsxs)("div",{className:"dl-actions",children:[(0,r.jsxs)("a",{href:e.fileUrl,target:"_blank",rel:"noreferrer",className:"dl-btn view",children:[(0,r.jsx)(h.File,{})," Download DOCX"]}),(0,r.jsx)("button",{className:`dl-btn pdf${i?" converting":""}`,onClick:()=>b(e),disabled:i,children:i?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Loader2,{className:"dl-spin"})," Converting…"]}):s?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(f.Download,{})," PDF"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(g,{})," Export PDF"]})})]})]},e._id)})}),(0,r.jsxs)("div",{className:"dl-footer",children:[s.length," document",1!==s.length?"s":""," · Property ",i]})]})]})})]})}let b=(0,p.default)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);var u=e.i(46439),v=e.i(85846);let y=(0,p.default)("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]),w=(0,p.default)("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);function j({templateId:e,propertyId:i,variables:t=[],onGenerated:s}){let[o,n]=(0,a.useState)(!1),[d,c]=(0,a.useState)("idle"),[p,x]=(0,a.useState)(""),[f,g]=(0,a.useState)([]),h=async()=>{let r=t.filter(e=>e.required&&!e.value?.trim()).map(e=>e.variable);if(r.length>0)return void g(r);g([]),n(!0),c("idle"),x("");try{let r=await fetch("/api/documents/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:e,propertyId:i})}),a=await r.json();if(!r.ok)throw a.missingVariables?.length?(g(a.missingVariables),x(`Server reported missing variables: ${a.missingVariables.join(", ")}`)):x(a.message||"Generation failed. Please try again."),Error();c("success"),setTimeout(()=>{c("idle"),s?.()},2e3)}catch{c("error"),setTimeout(()=>{c("idle"),x("")},3500)}finally{n(!1)}};t.filter(e=>e.value?.trim()).length,t.filter(e=>e.required).length;let m=0===t.filter(e=>e.required&&!e.value?.trim()).length,j=0===t.length||m;return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');
        .gd { font-family:'DM Sans',sans-serif; margin-top:24px; }
        .gd-card { background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; position:relative; }
        .gd-card::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.7),rgba(196,162,96,.15)); border-radius:10px 10px 0 0; }
        .gd-body { padding:22px 24px; }

        .gd-top { display:flex; align-items:flex-start; gap:14px; margin-bottom:18px; }
        .gd-icon { width:42px; height:42px; background:rgba(196,162,96,.08); border:1px solid rgba(196,162,96,.22); border-radius:9px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .gd-icon svg { width:18px; height:18px; color:#92700a; }
        .gd-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:17px; font-weight:600; color:#111827; letter-spacing:-.01em; line-height:1.2; margin-bottom:3px; }
        .gd-sub { font-size:12px; font-weight:300; color:#9ca3af; letter-spacing:.02em; }

        .gd-meta { display:flex; gap:10px; padding:12px 14px; background:#f9fafb; border:1px solid #f0f0f0; border-radius:8px; margin-bottom:16px; }
        .gd-meta-item { flex:1; }
        .gd-meta-lbl { font-size:9px; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#9ca3af; margin-bottom:3px; }
        .gd-meta-val { font-size:12px; font-weight:500; color:#374151; white-space:nowrap; overflow:hidden; text-overflow:ellipsis; }
        .gd-meta-divider { width:1px; background:#e5e7eb; border-radius:1px; }

        /* Readiness bar */
        .gd-readiness { display:flex; align-items:center; gap:10px; padding:10px 14px; border-radius:8px; margin-bottom:16px; border:1px solid; }
        .gd-readiness.ready { background:#f0fdf4; border-color:#bbf7d0; }
        .gd-readiness.not-ready { background:#fef2f2; border-color:#fecaca; }
        .gd-readiness svg { width:14px; height:14px; flex-shrink:0; }
        .gd-readiness.ready svg { color:#16a34a; }
        .gd-readiness.not-ready svg { color:#dc2626; }
        .gd-readiness-text { font-size:12px; flex:1; }
        .gd-readiness.ready .gd-readiness-text { color:#15803d; }
        .gd-readiness.not-ready .gd-readiness-text { color:#dc2626; }
        .gd-readiness-count { font-size:10px; font-weight:500; padding:2px 7px; border-radius:4px; }
        .gd-readiness.ready .gd-readiness-count { background:#dcfce7; color:#15803d; }
        .gd-readiness.not-ready .gd-readiness-count { background:#fee2e2; color:#dc2626; }

        /* Missing vars list */
        .gd-missing-list { margin-bottom:14px; padding:10px 14px; background:#fef2f2; border:1px solid #fecaca; border-radius:8px; animation:gd-fade .2s ease; }
        .gd-missing-title { font-size:11px; font-weight:500; color:#991b1b; margin-bottom:6px; letter-spacing:.04em; text-transform:uppercase; }
        .gd-missing-tags { display:flex; flex-wrap:wrap; gap:4px; }
        .gd-missing-tag { font-size:11px; padding:2px 8px; background:#fee2e2; border:1px solid #fca5a5; border-radius:4px; color:#dc2626; font-weight:500; }
        @keyframes gd-fade { from{opacity:0;transform:translateY(4px)} to{opacity:1;transform:translateY(0)} }

        .gd-btn { display:flex; align-items:center; justify-content:center; gap:8px; width:100%; padding:11px 20px; border-radius:8px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:.03em; cursor:pointer; border:1px solid transparent; transition:opacity .15s,box-shadow .15s,background .2s,border-color .2s; }
        .gd-btn:disabled { cursor:not-allowed; opacity:.5; }
        .gd-btn svg { width:15px; height:15px; }
        .gd-btn.idle { background:linear-gradient(135deg,rgba(196,162,96,.9),rgba(146,112,10,.95)); border-color:rgba(196,162,96,.4); color:#fff; box-shadow:0 2px 8px rgba(196,162,96,.25); }
        .gd-btn.idle:hover:not(:disabled) { opacity:.9; box-shadow:0 4px 16px rgba(196,162,96,.35); }
        .gd-btn.blocked { background:#f9fafb; border-color:#e5e7eb; color:#9ca3af; }
        .gd-btn.loading { background:#f9fafb; border-color:#e5e7eb; color:#6b7280; }
        .gd-btn.success { background:#f0fdf4; border-color:#bbf7d0; color:#15803d; }
        .gd-btn.error   { background:#fef2f2; border-color:#fecaca; color:#dc2626; }

        .gd-toast { margin-top:12px; display:flex; align-items:center; gap:8px; padding:10px 14px; border-radius:7px; font-size:12px; animation:gd-fade .2s ease; }
        .gd-toast.success { background:#f0fdf4; border:1px solid #bbf7d0; color:#15803d; }
        .gd-toast.error   { background:#fef2f2; border:1px solid #fecaca; color:#dc2626; }
        .gd-toast svg { width:14px; height:14px; flex-shrink:0; }
        .gd-spin { animation:gd-spin .7s linear infinite; }
        @keyframes gd-spin { to{transform:rotate(360deg)} }
      `}),(0,r.jsx)("div",{className:"gd",children:(0,r.jsx)("div",{className:"gd-card",children:(0,r.jsxs)("div",{className:"gd-body",children:[(0,r.jsxs)("div",{className:"gd-top",children:[(0,r.jsx)("div",{className:"gd-icon",children:(0,r.jsx)(y,{})}),(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{className:"gd-title",children:"Generate Document"}),(0,r.jsx)("div",{className:"gd-sub",children:"Populate template with current variable values"})]})]}),(0,r.jsxs)("div",{className:"",children:[(0,r.jsx)("div",{className:"gd-meta-divider"}),t.length>0&&(0,r.jsx)(r.Fragment,{})]}),t.length>0&&(0,r.jsxs)("div",{className:`gd-readiness ${j?"ready":"not-ready"}`,children:[j?(0,r.jsx)(u.CheckCircle,{}):(0,r.jsx)(w,{}),(0,r.jsx)("span",{className:"gd-readiness-text",children:j?"All required fields filled — ready to generate":`${t.filter(e=>e.required&&!e.value?.trim()).length} required field${t.filter(e=>e.required&&!e.value?.trim()).length>1?"s":""} still missing`})]}),f.length>0&&(0,r.jsxs)("div",{className:"gd-missing-list",children:[(0,r.jsx)("div",{className:"gd-missing-title",children:"Fill these before generating"}),(0,r.jsx)("div",{className:"gd-missing-tags",children:f.map(e=>(0,r.jsx)("span",{className:"gd-missing-tag",children:e},e))})]}),(0,r.jsx)("button",{id:"gen-btn",className:`gd-btn ${o?"loading":!j&&t.length>0?"blocked":d}`,onClick:h,disabled:o,children:o?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Loader2,{className:"gd-spin"})," Generating…"]}):"success"===d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.CheckCircle,{})," Document Ready"]}):"error"===d?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.AlertCircle,{})," Generation Failed"]}):!j&&t.length>0?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(w,{})," Fill Required Fields First"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(b,{})," Generate Document"]})}),"success"===d&&(0,r.jsxs)("div",{className:"gd-toast success",children:[(0,r.jsx)(u.CheckCircle,{})," Document generated — refreshing list."]}),"error"===d&&(0,r.jsxs)("div",{className:"gd-toast error",children:[(0,r.jsx)(v.AlertCircle,{})," ",p||"Something went wrong. Please try again."]})]})})})]})}var k=e.i(18407),N=e.i(68689);let C=(0,p.default)("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);var _=e.i(33366),S=e.i(18230),z=e.i(50932),D=e.i(1573),M=e.i(90354),P=e.i(95257);let A=(0,p.default)("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}]]),F=(0,p.default)("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]),T=(0,p.default)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var $=e.i(84906);let I=e=>e.toLowerCase().replace(/[_\s\-]/g,""),L={investor:{varPatterns:["investor","company"],fieldMap:{"Full Name":"Investor_Name",Email:"Investor_Email",Phone:"Investor_Phone","Entity Name":"Company_Name",Address:"Investor_Address","Tax ID":"Tax_ID","Investment Focus":"Investment_Focus"}},lender:{varPatterns:["lender","loan","interest","rate","term"],fieldMap:{"Lender Name":"Lender_Name","Contact Name":"Lender_Contact",Email:"Lender_Email",Phone:"Lender_Phone","Loan Programs":"Loan_Programs","Rate Range":"Interest_Rate","Max LTV":"Max_LTV",Address:"Lender_Address"}},contractor:{varPatterns:["contractor"],fieldMap:{"Company Name":"Contractor_Company","Contact Name":"Contractor_Name",Email:"Contractor_Email",Phone:"Contractor_Phone","License Number":"License_Number",Trade:"Trade",Address:"Contractor_Address","Insurance Expiry":"Insurance_Expiry"}},company:{varPatterns:["company","abn","director","website"],fieldMap:{"Company Name":"Company_Name","ABN/EIN":"ABN_EIN",Address:"Company_Address",Phone:"Company_Phone",Email:"Company_Email","Director Name":"Director_Name",Website:"Website"}}},E={property:{label:"property",color:"#1d6f42",bg:"rgba(29,110,66,0.10)"},profile:{label:"profile",color:"#4f46e5",bg:"rgba(79,70,229,0.10)"},deal:{label:"deal",color:"#0369a1",bg:"rgba(3,105,161,0.10)"},database:{label:"db",color:"#6b7280",bg:"rgba(107,114,128,0.10)"},manual:{label:"edited",color:"#92700a",bg:"rgba(196,162,96,0.12)"}},G={investor:{label:"Investor",icon:_.User,color:"#0369a1",bg:"rgba(3,105,161,0.06)",border:"rgba(3,105,161,0.2)"},lender:{label:"Lender",icon:P.Landmark,color:"#7c3aed",bg:"rgba(124,58,237,0.06)",border:"rgba(124,58,237,0.2)"},contractor:{label:"Contractor",icon:A,color:"#b45309",bg:"rgba(180,83,9,0.06)",border:"rgba(180,83,9,0.2)"},company:{label:"Company",icon:F,color:"#1d6f42",bg:"rgba(29,110,66,0.06)",border:"rgba(29,110,66,0.2)"}},O=[{label:"Property",match:e=>e.includes("property")||e.includes("address")||"city"===e||"state"===e||e.includes("zip")},{label:"Investor",match:e=>e.includes("investor")||e.includes("company")&&!e.includes("contractor")},{label:"Financials",match:e=>e.includes("purchase")||"arv"===e||e.includes("rehab")||e.includes("holding")||e.includes("closing")||e.includes("total")||e.includes("profit")},{label:"Loan",match:e=>e.includes("loan")||e.includes("interest")||e.includes("lender")||e.includes("rate")||e.includes("term")},{label:"Contractor",match:e=>e.includes("contractor")},{label:"Timeline",match:e=>e.includes("start")||e.includes("end")||e.includes("date")||e.includes("duration")},{label:"Other",match:()=>!0}];function R({templateId:e,propertyId:i,onValuesChange:t,onSave:o}){let[c,p]=(0,a.useState)([]),[x,f]=(0,a.useState)([]),[g,h]=(0,a.useState)([]),[m,b]=(0,a.useState)(i??""),[y,w]=(0,a.useState)({}),[j,_]=(0,a.useState)(!0),[P,A]=(0,a.useState)(!0),[F,R]=(0,a.useState)(!0),[q,V]=(0,a.useState)(!1),[U,B]=(0,a.useState)("idle"),[H,Y]=(0,a.useState)(!1),[J,W]=(0,a.useState)(!1),[X,Z]=(0,a.useState)(null),[K,Q]=(0,a.useState)(""),[ee,er]=(0,a.useState)(0),[ea,ei]=(0,a.useState)(!!i),et=(0,a.useRef)(null),es=(0,a.useRef)(null),eo=(0,a.useRef)(t),el=(0,a.useRef)(o);(0,a.useEffect)(()=>{eo.current=t});let en=(0,a.useRef)(c);(0,a.useEffect)(()=>{en.current!==c&&(en.current=c,eo.current?.(c))}),(0,a.useEffect)(()=>{let e=e=>{et.current&&!et.current.contains(e.target)&&W(!1),es.current&&!es.current.contains(e.target)&&Z(null)};return document.addEventListener("mousedown",e),()=>document.removeEventListener("mousedown",e)},[]);let ed=async(r=!1,a)=>{el.current?.(c),_(!0);let t=a??m??i;try{let[a,i]=await Promise.all([fetch(`/api/templates/${e}/variables`),t?fetch(`/api/templates/${e}/values?propertyId=${t}`):Promise.resolve(null)]),s=await a.json(),o=i?await i.json():[];if(!Array.isArray(s))return void p([]);let l={};if(r&&Array.isArray(o))for(let e of o)e.value?.trim()&&(l[e.variable]={value:e.value,source:e.source??"manual"});let n=s.map(e=>{let r=l[e.variable];return r?.value?{...e,value:r.value,source:r.source}:{...e,value:"",source:""}});p(n)}catch{p([])}finally{_(!1)}};(0,a.useEffect)(()=>{e&&(p([]),b(i??""),w({}),er(0),Y(!1),B("idle"),ei(!!i),ed(!0),fetch("/api/execution/properties").then(e=>e.json()).then(e=>h(Array.isArray(e)?e:[])).catch(()=>h([])).finally(()=>A(!1)),fetch("/api/profiles").then(e=>e.json()).then(e=>f(Array.isArray(e)?e:[])).catch(()=>f([])).finally(()=>R(!1)))},[e]);let ec=async r=>{if(b(r),W(!1),Q(""),er(0),!r)return void await ed(!0);try{let a,i,t,s,[o,l]=await Promise.all([fetch(`/api/execution/properties/${r}`,{cache:"no-store"}),fetch(`/api/templates/${e}/values?propertyId=${r}`)]),n=await o.json(),d=await l.json(),c={};if(Array.isArray(d))for(let e of d)c[e.variable]={value:e.value,source:e.source??"manual"};let x=(a=e=>null!=e?String(e):"",i=n.workspace?.executionCosts??n.phase1?.costs??{},s=(t=n.phase1?.arv?.finalArv??n.phase1?.arv?.baseArv??0)&&i.totalCosts?t-i.totalCosts:void 0,Object.fromEntries(Object.entries({Property_Address:n.property?.address??"",City:n.property?.city??"",State:n.property?.state??"",Zip_Code:n.property?.zipCode??"",Investor_Name:n.investor?.name??"",Company_Name:n.investor?.companyName??"",Investor_Email:n.investor?.email??"",Investor_Phone:n.investor?.phone??"",Purchase_Price:a(i.purchasePrice),ARV:a(t),Rehab_Budget:a(i.rehabCost),Holding_Costs:a(i.holdingCosts),Closing_Costs:a(i.closingCosts),Total_Project_Cost:a(i.totalCosts),Estimated_Profit:null!=s?String(s):"",Loan_Amount:a(n.workspace?.loanAmount),Interest_Rate:n.workspace?.interestRate!=null?String(n.workspace.interestRate):"",Loan_Term:n.workspace?.loanTerm??"",Lender_Name:n.workspace?.lenderName??"",Contractor_Name:n.contractor?.name??"",Contractor_Email:n.contractor?.email??"",Contractor_Phone:n.contractor?.phone??"",Start_Date:n.workspace?.startDate??"",End_Date:n.workspace?.endDate??"",Project_Duration:n.workspace?.projectDuration??"",Additional_Notes:n.workspace?.additionalNotes??""}).filter(([,e])=>""!==e)));p(e=>{let r=e.map(e=>{let r=c[e.variable];if(r?.value)return{...e,value:r.value,source:r.source};let a=I(e.variable);for(let[r,i]of Object.entries(x))if(I(r)===a&&i)return{...e,value:i,source:"property"};return e});return er(r.filter(e=>e.value?.trim()).length),r})}catch{}},ep=(e,r)=>{if(w(a=>({...a,[e]:r})),Z(null),!r)return;let a=x.find(e=>e._id===r);a&&p(e=>{let r=function(e,r){let a=L[r.type];if(!a)return e;let i={};for(let[e,t]of Object.entries(a.fieldMap)){let a=r.data[e]?.trim();a&&(i[I(t)]=a,i[I(e)]=a)}return e.map(e=>{if("manual"===e.source)return e;let r=I(e.variable),t=e.mappedTo?I(e.mappedTo):"",s=i[r]??i[t];if(s)return{...e,value:s,source:"profile"};if(a.varPatterns.some(e=>r.includes(e))){for(let[a,t]of Object.entries(i))if(r.includes(a)||a.includes(r))return{...e,value:t,source:"profile"}}return e})}(e,a);return er(r.filter(e=>"profile"===e.source&&e.value?.trim()).length),r})},ex=(e,r)=>{p(a=>{let i=a.map(a=>a._id===e?{...a,value:r,source:"manual"}:a),t=i.find(e=>I(e.variable).includes("start")&&I(e.variable).includes("date")),s=i.find(e=>I(e.variable).includes("end")&&I(e.variable).includes("date")),o=i.find(e=>I(e.variable).includes("duration")||I(e.variable).includes("projectduration"));if(t?.value&&s?.value&&o){let e=new Date(t.value),r=Math.ceil((new Date(s.value).getTime()-e.getTime())/864e5);if(r>0){let e=Math.floor(r/7),a=Math.floor(r/30),t=a>=2?`${a} months`:e>=1?`${e} week${e>1?"s":""} (${r} days)`:`${r} day${r>1?"s":""}`;return i.map(e=>e._id===o._id?{...e,value:t,source:"manual"}:e)}}return i}),Y(!1)},ef=async()=>{if(c.filter(e=>e.required&&!e.value?.trim()).length>0)return void Y(!0);V(!0),B("idle");try{if(!(await fetch("/api/templates/save-values",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:e,propertyId:m,variables:c})})).ok)throw Error();B("success"),ei(!0)}catch{B("error")}finally{V(!1),setTimeout(()=>B("idle"),2200)}},eg=c.filter(e=>e.value?.trim()).length,eh=c.filter(e=>e.required&&!e.value?.trim()),em=g.find(e=>e._id===m),eb=g.filter(e=>(e.name??e.address??"").toLowerCase().includes(K.toLowerCase())||(e.address??"").toLowerCase().includes(K.toLowerCase())),eu=c.length?Math.round(eg/c.length*100):0,ev=[],ey=new Set;for(let e of O){let r=c.filter(r=>!ey.has(r._id)&&e.match(I(r.variable)));r.length&&(r.forEach(e=>ey.add(e._id)),ev.push({label:e.label,vars:r}))}return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .vr{font-family:'DM Sans',sans-serif;margin-top:24px}
        .vr-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:visible;position:relative}
        .vr-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#c4a260,rgba(196,162,96,.1));border-radius:12px 12px 0 0}

        .vr-header{display:flex;align-items:center;justify-content:space-between;padding:18px 22px 14px;border-bottom:1px solid #f3f4f6}
        .vr-header-left{display:flex;align-items:center;gap:10px}
        .vr-hicon{width:34px;height:34px;background:rgba(196,162,96,.08);border:1px solid rgba(196,162,96,.2);border-radius:8px;display:flex;align-items:center;justify-content:center}
        .vr-hicon svg{width:15px;height:15px;color:#92700a}
        .vr-htitle{font-family:'Cormorant Garamond',Georgia,serif;font-size:17px;font-weight:600;color:#111827;letter-spacing:-.01em}
        .vr-hright{display:flex;align-items:center;gap:12px}
        .vr-pct-ring{position:relative;width:38px;height:38px}
        .vr-pct-ring svg{transform:rotate(-90deg)}
        .vr-pct-ring circle{transition:stroke-dashoffset .4s}
        .vr-pct-num{position:absolute;inset:0;display:flex;align-items:center;justify-content:center;font-size:9px;font-weight:600;color:#92700a}
        .vr-filled-badge{font-size:10.5px;font-weight:500;color:#92700a;background:rgba(196,162,96,.1);padding:4px 10px;border-radius:20px}

        .vr-toast{margin:10px 22px 0;padding:9px 14px;border-radius:7px;background:rgba(79,70,229,.06);border:1px solid rgba(79,70,229,.18);display:flex;align-items:center;gap:8px;font-size:12px;color:#4f46e5;animation:vr-fade .25s ease}
        .vr-toast svg{width:13px;height:13px;flex-shrink:0}
        @keyframes vr-fade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}

        /* ── Property bar — locked vs unlocked states ── */
        .vr-prop-bar{padding:12px 22px;border-bottom:1px solid #f3f4f6;background:#fafafa;display:flex;align-items:center;gap:10px}
        .vr-prop-lbl{font-size:11px;color:#9ca3af;font-weight:400;white-space:nowrap;min-width:68px}

        /* locked display */
        .vr-prop-locked{display:flex;align-items:center;gap:10px;flex:1}
        .vr-prop-locked-pill{display:flex;align-items:center;gap:8px;flex:1;padding:8px 14px;background:#f0fdf4;border:1px solid #bbf7d0;border-radius:7px}
        .vr-prop-locked-pill svg.lock-ico{width:13px;height:13px;color:#15803d;flex-shrink:0}
        .vr-prop-locked-name{font-size:12.5px;font-weight:500;color:#111827;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .vr-prop-locked-tag{font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:3px;background:#dcfce7;color:#15803d;flex-shrink:0}
        .vr-change-btn{display:flex;align-items:center;gap:5px;padding:7px 13px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:11.5px;font-weight:500;color:#374151;cursor:pointer;white-space:nowrap;transition:border-color .15s,color .15s;flex-shrink:0}
        .vr-change-btn:hover{border-color:rgba(196,162,96,.4);color:#92700a}
        .vr-change-btn svg{width:12px;height:12px}

        /* unlocked selector */
        .vr-sel-wrap{position:relative;flex:1}
        .vr-sel-btn{display:flex;align-items:center;gap:8px;width:100%;padding:8px 12px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#374151;transition:border-color .15s;text-align:left}
        .vr-sel-btn:hover{border-color:rgba(196,162,96,.45)}
        .vr-sel-btn.active{border-color:rgba(196,162,96,.5);background:rgba(196,162,96,.03)}
        .vr-sel-btn .ico{width:13px;height:13px;color:#9ca3af;flex-shrink:0}
        .vr-sel-btn .chv{width:13px;height:13px;color:#9ca3af;margin-left:auto;flex-shrink:0}
        .vr-sel-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .vr-sel-name.ph{color:#9ca3af}
        .vr-applied-pill{font-size:10px;font-weight:500;letter-spacing:.05em;padding:3px 9px;border-radius:20px;white-space:nowrap;flex-shrink:0}
        .vr-applied-pill.property{background:rgba(29,110,66,.1);color:#1d6f42}
        .vr-clear-btn{display:flex;align-items:center;gap:4px;padding:4px 9px;background:#fff;border:1px solid #e5e7eb;border-radius:5px;font-size:10px;color:#6b7280;cursor:pointer;white-space:nowrap;transition:all .1s;flex-shrink:0}
        .vr-clear-btn:hover{background:#fef2f2;border-color:#fca5a5;color:#dc2626}
        .vr-clear-btn svg{width:10px;height:10px}

        /* profiles */
        .vr-profiles-section{padding:12px 22px;border-bottom:1px solid #f3f4f6;background:#fafafa}
        .vr-profiles-title{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px}
        .vr-profiles-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px}
        .vr-profile-card{border-radius:8px;border:1px solid #e5e7eb;background:#fff;overflow:visible;position:relative}
        .vr-profile-card-header{display:flex;align-items:center;gap:8px;padding:8px 10px;border-bottom:1px solid #f3f4f6}
        .vr-profile-type-icon{width:26px;height:26px;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .vr-profile-type-icon svg{width:12px;height:12px}
        .vr-profile-type-label{font-size:11px;font-weight:600;letter-spacing:.05em}
        .vr-profile-selector{padding:7px 10px;display:flex;align-items:center;gap:6px;cursor:pointer;position:relative}
        .vr-profile-sel-btn{display:flex;align-items:center;gap:6px;width:100%;padding:6px 10px;background:#fafafa;border:1px solid #e5e7eb;border-radius:6px;cursor:pointer;font-family:'DM Sans',sans-serif;font-size:11.5px;color:#374151;transition:border-color .15s;text-align:left}
        .vr-profile-sel-btn:hover{border-color:rgba(196,162,96,.4)}
        .vr-profile-sel-btn.active{border-color:rgba(196,162,96,.5);background:rgba(196,162,96,.04)}
        .vr-profile-sel-btn svg{width:11px;height:11px;color:#9ca3af;flex-shrink:0}
        .vr-profile-sel-name{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:11.5px}
        .vr-profile-sel-name.ph{color:#9ca3af}
        .vr-profile-clear{display:flex;align-items:center;padding:2px 6px;border:1px solid #e5e7eb;border-radius:4px;font-size:9px;color:#9ca3af;cursor:pointer;background:#fff;gap:3px;flex-shrink:0;transition:all .1s}
        .vr-profile-clear:hover{background:#fef2f2;border-color:#fca5a5;color:#dc2626}
        .vr-profile-clear svg{width:9px;height:9px}
        .vr-profile-applied{font-size:9px;font-weight:600;letter-spacing:.06em;padding:2px 7px;border-radius:3px;background:rgba(79,70,229,.08);color:#4f46e5;flex-shrink:0}

        /* dropdown */
        .vr-dd{position:absolute;top:calc(100% + 4px);left:0;right:0;z-index:300;background:#fff;border:1px solid #e5e7eb;border-radius:9px;box-shadow:0 8px 32px rgba(0,0,0,.13);overflow:hidden}
        .vr-dd-search{display:flex;align-items:center;gap:8px;padding:9px 13px;border-bottom:1px solid #f3f4f6}
        .vr-dd-search svg{width:13px;height:13px;color:#9ca3af;flex-shrink:0}
        .vr-dd-search input{flex:1;border:none;outline:none;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#111827;background:transparent}
        .vr-dd-scroll{max-height:200px;overflow-y:auto}
        .vr-dd-item{display:flex;align-items:center;gap:10px;padding:9px 13px;cursor:pointer;font-size:12.5px;color:#374151;transition:background .1s}
        .vr-dd-item:hover{background:#fafafa}
        .vr-dd-item.sel{background:rgba(196,162,96,.07)}
        .vr-dd-item svg{width:13px;height:13px;color:#9ca3af;flex-shrink:0}
        .vr-dd-body{flex:1;min-width:0}
        .vr-dd-name{font-size:12.5px;font-weight:500;color:#111827;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .vr-dd-sub{font-size:11px;color:#9ca3af;margin-top:1px}
        .vr-dd-empty{padding:16px;font-size:12px;color:#9ca3af;text-align:center}

        /* priority chain */
        .vr-chain{display:flex;align-items:center;gap:6px;padding:8px 22px;border-bottom:1px solid #f3f4f6;background:#f9fafb;flex-wrap:wrap}
        .vr-chain-lbl{font-size:10px;color:#9ca3af;font-weight:300}
        .vr-chain-step{font-size:10px;font-weight:500;padding:2px 9px;border-radius:4px;transition:all .2s}
        .vr-chain-step.on{background:rgba(196,162,96,.12);color:#92700a}
        .vr-chain-step.off{background:#f3f4f6;color:#c4c9d4}
        .vr-chain-arr{font-size:10px;color:#e5e7eb}

        .vr-missing{margin:12px 22px 0;padding:10px 14px;border-radius:7px;background:#fef2f2;border:1px solid #fecaca;display:flex;align-items:flex-start;gap:8px;font-size:12px;color:#dc2626;animation:vr-fade .2s ease}
        .vr-missing svg{width:14px;height:14px;flex-shrink:0;margin-top:1px}

        .vr-section{padding:0 22px}
        .vr-section-title{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#c4c9d4;padding:14px 0 8px;display:flex;align-items:center;gap:8px}
        .vr-section-title::after{content:'';flex:1;height:1px;background:#f3f4f6}

        .vr-row{display:grid;grid-template-columns:190px 1fr;align-items:center;gap:12px;padding:5px 0}
        .vr-label{display:flex;align-items:center;gap:7px;font-size:12.5px;font-weight:500;color:#374151;overflow:hidden}
        .vr-lico{width:22px;height:22px;background:rgba(196,162,96,.06);border:1px solid rgba(196,162,96,.14);border-radius:5px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .vr-lico svg{width:10px;height:10px;color:rgba(146,112,10,.6)}
        .vr-ltext{white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
        .vr-req-dot{width:5px;height:5px;border-radius:50%;background:#dc2626;flex-shrink:0}
        .vr-input-row{display:flex;align-items:center;gap:7px}
        .vr-input-wrap{position:relative;flex:1}
        .vr-input{width:100%;padding:8px 13px;background:#fafafa;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#111827;outline:none;transition:all .15s;box-sizing:border-box}
        .vr-input::placeholder{color:#d1d5db;font-weight:300}
        .vr-input:focus{background:#fff;border-color:rgba(196,162,96,.5);box-shadow:0 0 0 3px rgba(196,162,96,.07)}
        .vr-input.filled{border-color:rgba(196,162,96,.22);background:rgba(196,162,96,.02)}
        .vr-input.err{border-color:#fca5a5;background:#fef2f2}
        .vr-date-wrap{position:relative;flex:1}
        .vr-date-icon{position:absolute;left:11px;top:50%;transform:translateY(-50%);pointer-events:none}
        .vr-date-icon svg{width:13px;height:13px;color:#9ca3af}
        .vr-date-input{width:100%;padding:8px 13px 8px 34px;background:#fafafa;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12.5px;color:#111827;outline:none;transition:all .15s;box-sizing:border-box;cursor:pointer}
        .vr-date-input:focus{background:#fff;border-color:rgba(196,162,96,.5);box-shadow:0 0 0 3px rgba(196,162,96,.07)}
        .vr-date-input.filled{border-color:rgba(196,162,96,.22);background:rgba(196,162,96,.02)}
        .vr-date-input.err{border-color:#fca5a5;background:#fef2f2}
        .vr-date-input::-webkit-calendar-picker-indicator{opacity:.5;cursor:pointer}
        .vr-src{font-size:9px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:2px 7px;border-radius:3px;white-space:nowrap;flex-shrink:0}

        .vr-footer{display:flex;align-items:center;justify-content:space-between;padding:14px 22px 18px;border-top:1px solid #f3f4f6;gap:12px;flex-wrap:wrap;margin-top:8px}
        .vr-foot-left{display:flex;flex-direction:column;gap:5px}
        .vr-foot-hint{font-size:11px;color:#9ca3af;font-weight:300}
        .vr-legend{display:flex;gap:10px;flex-wrap:wrap}
        .vr-leg-item{display:flex;align-items:center;gap:4px;font-size:10px;color:#9ca3af}
        .vr-leg-dot{width:6px;height:6px;border-radius:2px}
        .vr-foot-right{display:flex;gap:8px;align-items:center}
        .vr-refresh{display:flex;align-items:center;gap:5px;padding:8px 13px;background:#fff;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12px;color:#6b7280;cursor:pointer;transition:background .12s}
        .vr-refresh:hover{background:#f9fafb}
        .vr-refresh svg{width:12px;height:12px}
        .vr-save{display:flex;align-items:center;gap:7px;padding:9px 22px;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:12.5px;font-weight:500;letter-spacing:.03em;cursor:pointer;border:1px solid transparent;transition:all .15s}
        .vr-save:disabled{cursor:not-allowed;opacity:.55}
        .vr-save svg{width:13px;height:13px}
        .vr-save.idle{background:linear-gradient(135deg,rgba(196,162,96,.92),rgba(146,112,10,.96));border-color:rgba(196,162,96,.4);color:#fff;box-shadow:0 2px 8px rgba(196,162,96,.22)}
        .vr-save.idle:hover:not(:disabled){opacity:.9;box-shadow:0 4px 14px rgba(196,162,96,.32)}
        .vr-save.saving{background:#f9fafb;border-color:#e5e7eb;color:#6b7280}
        .vr-save.success{background:#f0fdf4;border-color:#bbf7d0;color:#15803d}
        .vr-save.error{background:#fef2f2;border-color:#fecaca;color:#dc2626}
        .vr-spin{animation:vr-spin .7s linear infinite}
        @keyframes vr-spin{to{transform:rotate(360deg)}}

        .vr-skel-wrap{padding:16px 22px;display:flex;flex-direction:column;gap:12px}
        .vr-skel-row{display:flex;align-items:center;gap:10px}
        .vr-skel{background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);background-size:200% 100%;animation:vskel 1.4s infinite;border-radius:5px}
        @keyframes vskel{0%{background-position:200% 0}100%{background-position:-200% 0}}
        .vr-empty{padding:44px 24px;text-align:center}
        .vr-eico{width:46px;height:46px;background:#f9fafb;border:1px solid #e5e7eb;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 10px}
        .vr-eico svg{width:18px;height:18px;color:#9ca3af}
        .vr-etitle{font-size:13px;font-weight:500;color:#374151;margin-bottom:3px}
        .vr-esub{font-size:12px;color:#9ca3af;font-weight:300}
      `}),(0,r.jsx)("div",{className:"vr",children:(0,r.jsxs)("div",{className:"vr-card",children:[(0,r.jsxs)("div",{className:"vr-header",children:[(0,r.jsxs)("div",{className:"vr-header-left",children:[(0,r.jsx)("div",{className:"vr-hicon",children:(0,r.jsx)(C,{})}),(0,r.jsx)("div",{className:"vr-htitle",children:"Variable Review"})]}),!j&&c.length>0&&(0,r.jsxs)("div",{className:"vr-hright",children:[(0,r.jsxs)("span",{className:"vr-filled-badge",children:[eg,"/",c.length," filled"]}),(0,r.jsxs)("div",{className:"vr-pct-ring",children:[(0,r.jsxs)("svg",{width:"38",height:"38",viewBox:"0 0 38 38",children:[(0,r.jsx)("circle",{cx:"19",cy:"19",r:"15",fill:"none",stroke:"#f0f0f0",strokeWidth:"3"}),(0,r.jsx)("circle",{cx:"19",cy:"19",r:"15",fill:"none",stroke:"#c4a260",strokeWidth:"3",strokeDasharray:`${2*Math.PI*15}`,strokeDashoffset:`${2*Math.PI*15*(1-eu/100)}`,strokeLinecap:"round"})]}),(0,r.jsxs)("span",{className:"vr-pct-num",children:[eu,"%"]})]})]})]}),ee>0&&(0,r.jsxs)("div",{className:"vr-toast",children:[(0,r.jsx)(D.Zap,{}),(0,r.jsxs)("span",{children:[(0,r.jsxs)("strong",{children:[ee," fields"]})," auto-filled"]})]}),(0,r.jsxs)("div",{className:"vr-prop-bar",ref:et,children:[(0,r.jsx)("span",{className:"vr-prop-lbl",children:"Property:"}),ea&&em?(0,r.jsxs)("div",{className:"vr-prop-locked",children:[(0,r.jsxs)("div",{className:"vr-prop-locked-pill",children:[(0,r.jsx)(T,{className:"lock-ico"}),(0,r.jsx)("span",{className:"vr-prop-locked-name",children:em.address||em.name||"Selected property"}),(0,r.jsx)("span",{className:"vr-prop-locked-tag",children:"saved"})]}),(0,r.jsxs)("button",{className:"vr-change-btn",onClick:()=>{alert("cant change property because this template is locked to the current property. To change the property, please create a new Template.")},children:[(0,r.jsx)($.Edit2,{})," Change"]})]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)("div",{className:"vr-sel-wrap",children:[(0,r.jsxs)("button",{className:`vr-sel-btn${em?" active":""}`,onClick:()=>{W(e=>!e),Z(null)},children:[(0,r.jsx)(z.Building2,{className:"ico"}),(0,r.jsx)("span",{className:`vr-sel-name${!em?" ph":""}`,children:P?"Loading…":em?em.address||em.name||"Selected property":"Select a property…"}),(0,r.jsx)(s.ChevronDown,{className:"chv"})]}),J&&(0,r.jsxs)("div",{className:"vr-dd",children:[(0,r.jsxs)("div",{className:"vr-dd-search",children:[(0,r.jsx)(n.Search,{}),(0,r.jsx)("input",{autoFocus:!0,placeholder:"Search properties…",value:K,onChange:e=>Q(e.target.value)})]}),(0,r.jsxs)("div",{className:"vr-dd-scroll",children:[(0,r.jsxs)("div",{className:"vr-dd-item",onClick:()=>ec(""),children:[(0,r.jsx)(z.Building2,{}),(0,r.jsx)("div",{className:"vr-dd-body",children:(0,r.jsx)("div",{className:"vr-dd-name",children:"None"})})]}),eb.map(e=>(0,r.jsxs)("div",{className:`vr-dd-item${m===e._id?" sel":""}`,onClick:()=>ec(e._id),children:[(0,r.jsx)(z.Building2,{}),(0,r.jsxs)("div",{className:"vr-dd-body",children:[(0,r.jsx)("div",{className:"vr-dd-name",children:e.address||e.name||e._id}),e.city&&(0,r.jsx)("div",{className:"vr-dd-sub",children:[e.city,e.state].filter(Boolean).join(", ")})]})]},e._id)),0===eb.length&&(0,r.jsx)("div",{className:"vr-dd-empty",children:"No properties match"})]})]})]}),em&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("span",{className:"vr-applied-pill property",children:"applied"}),(0,r.jsxs)("button",{className:"vr-clear-btn",onClick:()=>ec(""),children:[(0,r.jsx)(d.X,{})," Clear"]})]})]})]}),(0,r.jsxs)("div",{className:"vr-profiles-section",ref:es,children:[(0,r.jsx)("div",{className:"vr-profiles-title",children:"Profiles"}),(0,r.jsx)("div",{className:"vr-profiles-grid",children:["investor","lender","contractor","company"].map(e=>{let a=G[e],i=a.icon,t=x.filter(r=>r.type===e),o=y[e]??"",l=t.find(e=>e._id===o),n=X===e;return(0,r.jsxs)("div",{className:"vr-profile-card",children:[(0,r.jsxs)("div",{className:"vr-profile-card-header",children:[(0,r.jsx)("div",{className:"vr-profile-type-icon",style:{background:a.bg,border:`1px solid ${a.border}`},children:(0,r.jsx)(i,{style:{color:a.color}})}),(0,r.jsx)("span",{className:"vr-profile-type-label",style:{color:a.color},children:a.label}),l&&(0,r.jsx)("span",{className:"vr-profile-applied",children:"applied"})]}),(0,r.jsxs)("div",{className:"vr-profile-selector",children:[(0,r.jsxs)("div",{style:{position:"relative",flex:1},children:[(0,r.jsxs)("button",{className:`vr-profile-sel-btn${l?" active":""}`,onClick:()=>Z(n?null:e),children:[(0,r.jsx)(i,{}),(0,r.jsx)("span",{className:`vr-profile-sel-name${!l?" ph":""}`,children:F?"Loading…":l?l.name:0===t.length?"No profiles":`Select ${a.label}…`}),(0,r.jsx)(s.ChevronDown,{style:{width:11,height:11,color:"#9ca3af",marginLeft:"auto",flexShrink:0}})]}),n&&t.length>0&&(0,r.jsx)("div",{className:"vr-dd",style:{minWidth:"100%"},children:(0,r.jsxs)("div",{className:"vr-dd-scroll",children:[(0,r.jsxs)("div",{className:"vr-dd-item",onClick:()=>ep(e,""),children:[(0,r.jsx)(i,{}),(0,r.jsx)("div",{className:"vr-dd-body",children:(0,r.jsx)("div",{className:"vr-dd-name",children:"None"})})]}),t.map(a=>(0,r.jsxs)("div",{className:`vr-dd-item${o===a._id?" sel":""}`,onClick:()=>ep(e,a._id),children:[(0,r.jsx)(i,{}),(0,r.jsxs)("div",{className:"vr-dd-body",children:[(0,r.jsx)("div",{className:"vr-dd-name",children:a.name}),(0,r.jsxs)("div",{className:"vr-dd-sub",children:[Object.keys(a.data).length," fields"]})]})]},a._id))]})})]}),l&&(0,r.jsxs)("button",{className:"vr-profile-clear",onClick:()=>ep(e,""),children:[(0,r.jsx)(d.X,{})," Clear"]})]})]},e)})})]}),(0,r.jsxs)("div",{className:"vr-chain",children:[(0,r.jsx)("span",{className:"vr-chain-lbl",children:"Priority:"}),(0,r.jsx)("span",{className:`vr-chain-step ${c.some(e=>"manual"===e.source)?"on":"off"}`,children:"manual"}),(0,r.jsx)("span",{className:"vr-chain-arr",children:"›"}),(0,r.jsx)("span",{className:`vr-chain-step ${Object.values(y).some(Boolean)?"on":"off"}`,children:"profile"}),(0,r.jsx)("span",{className:"vr-chain-arr",children:"›"}),(0,r.jsx)("span",{className:`vr-chain-step ${em?"on":"off"}`,children:"property"}),(0,r.jsx)("span",{className:"vr-chain-arr",children:"›"}),(0,r.jsx)("span",{className:"vr-chain-step off",children:"database"})]}),H&&eh.length>0&&(0,r.jsxs)("div",{className:"vr-missing",children:[(0,r.jsx)(v.AlertCircle,{}),(0,r.jsxs)("span",{children:[eh.length," required field",eh.length>1?"s":""," missing:"," ",(0,r.jsx)("strong",{children:eh.map(e=>e.variable).join(", ")})]})]}),j?(0,r.jsx)("div",{className:"vr-skel-wrap",children:[...Array(6)].map((e,a)=>(0,r.jsxs)("div",{className:"vr-skel-row",children:[(0,r.jsx)("div",{className:"vr-skel",style:{width:150,height:32,flexShrink:0}}),(0,r.jsx)("div",{className:"vr-skel",style:{flex:1,height:36}})]},a))}):0===c.length?(0,r.jsxs)("div",{className:"vr-empty",children:[(0,r.jsx)("div",{className:"vr-eico",children:(0,r.jsx)(k.Tag,{})}),(0,r.jsx)("div",{className:"vr-etitle",children:"No variables to review"}),(0,r.jsx)("div",{className:"vr-esub",children:"Map template variables first"})]}):(0,r.jsxs)(r.Fragment,{children:[ev.map(({label:e,vars:a})=>(0,r.jsxs)("div",{className:"vr-section",children:[(0,r.jsx)("div",{className:"vr-section-title",children:e}),a.map(e=>{let a,i=e.source?E[e.source]:null,t=H&&e.required&&!e.value?.trim(),s=(a=I(e.variable)).includes("date")||a.includes("startdate")||a.includes("enddate")||a.includes("expiry");return(0,r.jsxs)("div",{className:"vr-row",children:[(0,r.jsxs)("div",{className:"vr-label",children:[(0,r.jsx)("div",{className:"vr-lico",children:s?(0,r.jsx)(M.Calendar,{style:{width:10,height:10,color:"rgba(146,112,10,.6)"}}):(0,r.jsx)(k.Tag,{})}),(0,r.jsx)("span",{className:"vr-ltext",title:e.variable,children:e.variable}),e.required&&(0,r.jsx)("div",{className:"vr-req-dot",title:"Required"})]}),(0,r.jsxs)("div",{className:"vr-input-row",children:[s?(0,r.jsxs)("div",{className:"vr-date-wrap",children:[(0,r.jsx)("div",{className:"vr-date-icon",children:(0,r.jsx)(M.Calendar,{})}),(0,r.jsx)("input",{type:"date",className:`vr-date-input${e.value?.trim()?" filled":""}${t?" err":""}`,value:e.value||"",onChange:r=>ex(e._id,r.target.value)})]}):(0,r.jsx)("div",{className:"vr-input-wrap",children:(0,r.jsx)("input",{className:`vr-input${e.value?.trim()?" filled":""}${t?" err":""}`,placeholder:e.required?`${e.variable} (required)`:`Value for ${e.variable}…`,value:e.value||"",onChange:r=>ex(e._id,r.target.value)})}),i&&(0,r.jsx)("span",{className:"vr-src",style:{background:i.bg,color:i.color},children:i.label})]})]},e._id)})]},e)),(0,r.jsxs)("div",{className:"vr-footer",children:[(0,r.jsxs)("div",{className:"vr-foot-left",children:[(0,r.jsx)("span",{className:"vr-foot-hint",children:eg===c.length?"✓ All variables filled":`${c.length-eg} remaining`}),(0,r.jsx)("div",{className:"vr-legend",children:Object.entries(E).map(([e,a])=>(0,r.jsxs)("div",{className:"vr-leg-item",children:[(0,r.jsx)("div",{className:"vr-leg-dot",style:{background:a.color+"99"}}),a.label]},e))})]}),(0,r.jsxs)("div",{className:"vr-foot-right",children:[(0,r.jsxs)("button",{className:"vr-refresh",onClick:()=>ed(!0,m||i),children:[(0,r.jsx)(S.RefreshCw,{})," Refresh"]}),(0,r.jsx)("button",{className:`vr-save ${q?"saving":U}`,onClick:ef,disabled:q,children:q?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Loader2,{className:"vr-spin"})," Saving…"]}):"success"===U?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.CheckCircle,{})," Saved"]}):"error"===U?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.AlertCircle,{})," Failed"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(N.Save,{})," Save Values"]})})]})]})]})]})})]})}let q=(0,p.default)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),V=(0,p.default)("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var U=e.i(46603),B=e.i(54331),H=e.i(76206);function Y({propertyId:e,templateId:i,variables:n=[]}){let[d,c]=(0,a.useState)([]),[p,x]=(0,a.useState)([]),[g,h]=(0,a.useState)([]),[m,b]=(0,a.useState)({}),[y,w]=(0,a.useState)(!1),[j,k]=(0,a.useState)("idle"),[N,C]=(0,a.useState)(""),[_,S]=(0,a.useState)(!0),[z,D]=(0,a.useState)("Investor Packet"),[M,P]=(0,a.useState)(!0);(0,a.useEffect)(()=>{i&&e&&(P(!0),fetch(`/api/documents?templateId=${i}&propertyId=${e}`).then(e=>e.json()).then(e=>c(Array.isArray(e)?e:[])).catch(()=>c([])).finally(()=>P(!1)))},[i,e]),(0,a.useEffect)(()=>{e&&fetch(`/api/investor-packet?propertyId=${e}`).then(e=>e.json()).then(e=>h(Array.isArray(e)?e:[])).catch(()=>h([]))},[e]);let A=async e=>{if(e.pdfUrl)return!0;b(r=>({...r,[e._id]:!0}));try{let r=await fetch("/api/documents/convert-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({documentId:e._id})});if(r.ok){let{pdfUrl:a}=await r.json();return c(r=>r.map(r=>r._id===e._id?{...r,pdfUrl:a}:r)),!0}return!1}catch{return!1}finally{b(r=>({...r,[e._id]:!1}))}},F=async()=>{if(p.length){w(!0),k("idle"),C("");try{let r,a=d.filter(e=>p.includes(e._id));(await Promise.all(a.map(A))).every(Boolean)||C("Some documents failed to convert. They will be skipped.");let i=await fetch("/api/investor-packet",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({propertyId:e,documentIds:p,dealSummary:{propertyAddress:(r=e=>n.find(r=>r.variable===e)?.value||"")("Property_Address"),investorName:r("Investor_Name"),purchasePrice:r("Purchase_Price"),arv:r("ARV"),rehabBudget:r("Rehab_Budget"),holdingCosts:r("Holding_Costs"),closingCosts:r("Closing_Costs"),totalCosts:r("Total_Project_Cost"),estimatedProfit:r("Estimated_Profit"),loanAmount:r("Loan_Amount"),lenderName:r("Lender_Name"),startDate:r("Start_Date"),endDate:r("End_Date"),projectDuration:r("Project_Duration")},name:z})});if(!i.ok){let e=await i.json();throw Error(e.message||"Failed")}let{packet:t}=await i.json();h(e=>[t,...e]),k("success"),x([]),setTimeout(()=>k("idle"),3e3)}catch(e){C(e.message||"Generation failed"),k("error"),setTimeout(()=>{k("idle"),C("")},3500)}finally{w(!1)}}};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .ip{font-family:'DM Sans',sans-serif;margin-top:16px}
        .ip-card{background:#fff;border:1px solid #e5e7eb;border-radius:12px;overflow:hidden;position:relative}
        .ip-card::before{content:'';position:absolute;top:0;left:0;right:0;height:3px;background:linear-gradient(90deg,#4f46e5,rgba(79,70,229,.15));border-radius:12px 12px 0 0}

        .ip-header{display:flex;align-items:center;justify-content:space-between;padding:16px 22px;cursor:pointer;border-bottom:1px solid #f3f4f6;user-select:none}
        .ip-header-left{display:flex;align-items:center;gap:10px}
        .ip-hicon{width:34px;height:34px;background:rgba(79,70,229,.07);border:1px solid rgba(79,70,229,.2);border-radius:8px;display:flex;align-items:center;justify-content:center}
        .ip-hicon svg{width:15px;height:15px;color:#4f46e5}
        .ip-htitle{font-size:15px;font-weight:600;color:#111827}
        .ip-hbadge{font-size:10px;font-weight:600;letter-spacing:.08em;text-transform:uppercase;padding:3px 9px;border-radius:20px;background:rgba(79,70,229,.08);color:#4f46e5}
        .ip-chevron{width:16px;height:16px;color:#9ca3af}

        .ip-body{padding:18px 22px}

        .ip-name-row{display:flex;align-items:center;gap:10px;margin-bottom:18px}
        .ip-name-lbl{font-size:11px;color:#9ca3af;white-space:nowrap;min-width:80px}
        .ip-name-input{flex:1;padding:8px 12px;border:1px solid #e5e7eb;border-radius:7px;font-family:'DM Sans',sans-serif;font-size:13px;color:#111827;outline:none;transition:border-color .15s,box-shadow .15s}
        .ip-name-input:focus{border-color:rgba(79,70,229,.4);box-shadow:0 0 0 3px rgba(79,70,229,.06)}

        .ip-section-hdr{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
        .ip-section-lbl{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af}
        .ip-select-all{font-size:11px;color:#4f46e5;cursor:pointer;background:none;border:none;font-family:'DM Sans',sans-serif;padding:0;transition:opacity .12s}
        .ip-select-all:hover{opacity:.7}

        .ip-doc-list{display:flex;flex-direction:column;gap:6px;margin-bottom:18px}
        .ip-doc-item{display:flex;align-items:center;gap:10px;padding:10px 14px;border:1px solid #e5e7eb;border-radius:8px;cursor:pointer;transition:all .12s;user-select:none}
        .ip-doc-item:hover{border-color:rgba(79,70,229,.3);background:rgba(79,70,229,.02)}
        .ip-doc-item.sel{border-color:rgba(79,70,229,.45);background:rgba(79,70,229,.04)}
        .ip-chk{width:16px;height:16px;flex-shrink:0}
        .ip-chk.on{color:#4f46e5}
        .ip-chk.off{color:#d1d5db}
        .ip-doc-ico{width:28px;height:28px;background:#f3f4f6;border-radius:6px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .ip-doc-ico svg{width:13px;height:13px;color:#6b7280}
        .ip-doc-info{flex:1;min-width:0}
        .ip-doc-name{font-size:12.5px;font-weight:500;color:#111827;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .ip-doc-meta{font-size:11px;color:#9ca3af;margin-top:1px}
        .ip-doc-pdf-badge{font-size:9px;font-weight:600;padding:1px 6px;border-radius:3px;background:#dcfce7;color:#15803d;flex-shrink:0}
        .ip-converting-badge{font-size:9px;color:#9ca3af;display:flex;align-items:center;gap:3px;flex-shrink:0}
        .ip-converting-badge svg{width:10px;height:10px;animation:ipspin .7s linear infinite}

        .ip-empty{padding:28px 16px;text-align:center;color:#9ca3af;font-size:12px;background:#fafafa;border:1px dashed #e5e7eb;border-radius:8px;margin-bottom:18px}
        .ip-empty-ico{width:36px;height:36px;background:#f3f4f6;border-radius:50%;display:flex;align-items:center;justify-content:center;margin:0 auto 8px}
        .ip-empty-ico svg{width:15px;height:15px;color:#9ca3af}

        .ip-footer{display:flex;align-items:center;gap:12px}
        .ip-sel-count{font-size:12px;color:#6b7280}
        .ip-gen-btn{display:flex;align-items:center;gap:7px;padding:10px 22px;border-radius:8px;font-family:'DM Sans',sans-serif;font-size:13px;font-weight:500;cursor:pointer;border:none;transition:all .15s;margin-left:auto}
        .ip-gen-btn:disabled{opacity:.5;cursor:not-allowed}
        .ip-gen-btn.idle{background:linear-gradient(135deg,#4f46e5,#6366f1);color:#fff;box-shadow:0 2px 10px rgba(79,70,229,.22)}
        .ip-gen-btn.idle:hover:not(:disabled){opacity:.9;box-shadow:0 4px 16px rgba(79,70,229,.32)}
        .ip-gen-btn.loading{background:#f9fafb;border:1px solid #e5e7eb;color:#6b7280}
        .ip-gen-btn.success{background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d}
        .ip-gen-btn.error{background:#fef2f2;border:1px solid #fecaca;color:#dc2626}
        .ip-gen-btn svg{width:14px;height:14px}
        .ip-spin{animation:ipspin .7s linear infinite}
        @keyframes ipspin{to{transform:rotate(360deg)}}

        .ip-toast{margin-top:12px;display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:7px;font-size:12px;animation:ipfade .2s ease}
        .ip-toast.success{background:#f0fdf4;border:1px solid #bbf7d0;color:#15803d}
        .ip-toast.error{background:#fef2f2;border:1px solid #fecaca;color:#dc2626}
        .ip-toast svg{width:13px;height:13px;flex-shrink:0}
        @keyframes ipfade{from{opacity:0;transform:translateY(4px)}to{opacity:1;transform:translateY(0)}}

        .ip-divider{height:1px;background:#f3f4f6;margin:20px 0}
        .ip-history-lbl{font-size:10px;font-weight:600;letter-spacing:.1em;text-transform:uppercase;color:#9ca3af;margin-bottom:10px}
        .ip-packet-list{display:flex;flex-direction:column;gap:8px}
        .ip-packet-item{display:flex;align-items:center;gap:12px;padding:12px 14px;background:#fafafa;border:1px solid #e5e7eb;border-radius:8px}
        .ip-packet-ico{width:32px;height:32px;background:rgba(79,70,229,.07);border-radius:7px;display:flex;align-items:center;justify-content:center;flex-shrink:0}
        .ip-packet-ico svg{width:14px;height:14px;color:#4f46e5}
        .ip-packet-info{flex:1;min-width:0}
        .ip-packet-name{font-size:13px;font-weight:500;color:#111827;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
        .ip-packet-meta{font-size:11px;color:#9ca3af;margin-top:1px}
        .ip-packet-ver{font-size:10px;font-weight:600;padding:2px 7px;border-radius:3px;background:rgba(79,70,229,.08);color:#4f46e5;white-space:nowrap;flex-shrink:0}
        .ip-pkt-actions{display:flex;gap:6px;flex-shrink:0}
        .ip-pkt-btn{display:flex;align-items:center;gap:5px;padding:6px 11px;border-radius:6px;font-family:'DM Sans',sans-serif;font-size:11.5px;font-weight:500;cursor:pointer;transition:all .12s;text-decoration:none;border:1px solid}
        .ip-pkt-btn.view{background:#fff;border-color:#e5e7eb;color:#374151}
        .ip-pkt-btn.view:hover{border-color:#4f46e5;color:#4f46e5}
        .ip-pkt-btn.dl{background:#4f46e5;border-color:#4f46e5;color:#fff}
        .ip-pkt-btn.dl:hover{background:#4338ca;border-color:#4338ca}
        .ip-pkt-btn svg{width:12px;height:12px}

        .ip-skel{background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%);background-size:200% 100%;animation:ipskel 1.4s infinite;border-radius:7px}
        @keyframes ipskel{0%{background-position:200% 0}100%{background-position:-200% 0}}
      `}),(0,r.jsx)("div",{className:"ip",children:(0,r.jsxs)("div",{className:"ip-card",children:[(0,r.jsxs)("div",{className:"ip-header",onClick:()=>S(e=>!e),children:[(0,r.jsxs)("div",{className:"ip-header-left",children:[(0,r.jsx)("div",{className:"ip-hicon",children:(0,r.jsx)(q,{})}),(0,r.jsx)("span",{className:"ip-htitle",children:"Investor Packet"}),g.length>0&&(0,r.jsxs)("span",{className:"ip-hbadge",children:[g.length," saved"]})]}),_?(0,r.jsx)(o.ChevronUp,{className:"ip-chevron"}):(0,r.jsx)(s.ChevronDown,{className:"ip-chevron"})]}),_&&(0,r.jsxs)("div",{className:"ip-body",children:[(0,r.jsxs)("div",{className:"ip-name-row",children:[(0,r.jsx)("span",{className:"ip-name-lbl",children:"Packet name"}),(0,r.jsx)("input",{className:"ip-name-input",value:z,onChange:e=>D(e.target.value),placeholder:"Investor Packet"})]}),(0,r.jsxs)("div",{className:"ip-section-hdr",children:[(0,r.jsx)("span",{className:"ip-section-lbl",children:"Select documents"}),d.length>0&&(0,r.jsx)("button",{className:"ip-select-all",onClick:()=>x(p.length===d.length?[]:d.map(e=>e._id)),children:p.length===d.length?"Deselect all":"Select all"})]}),M?(0,r.jsx)("div",{className:"ip-doc-list",children:[void 0,void 0,void 0].map((e,a)=>(0,r.jsx)("div",{className:"ip-skel",style:{height:52}},a))}):0===d.length?(0,r.jsxs)("div",{className:"ip-empty",children:[(0,r.jsx)("div",{className:"ip-empty-ico",children:(0,r.jsx)(t.FileText,{})}),(0,r.jsx)("div",{children:"No documents generated yet."}),(0,r.jsx)("div",{style:{marginTop:4,fontSize:11},children:"Generate documents above first."})]}):(0,r.jsx)("div",{className:"ip-doc-list",children:d.map(e=>{let a=p.includes(e._id),i=m[e._id];return(0,r.jsxs)("div",{className:`ip-doc-item${a?" sel":""}`,onClick:()=>{let r;return r=e._id,x(e=>e.includes(r)?e.filter(e=>e!==r):[...e,r])},children:[a?(0,r.jsx)(U.CheckSquare,{className:"ip-chk on"}):(0,r.jsx)(V,{className:"ip-chk off"}),(0,r.jsx)("div",{className:"ip-doc-ico",children:(0,r.jsx)(t.FileText,{})}),(0,r.jsxs)("div",{className:"ip-doc-info",children:[(0,r.jsx)("div",{className:"ip-doc-name",children:e.fileUrl?.split("/").pop()?.replace(/_v\d+_\d+\.docx$/,"").replace(/_/g," ")||"Document"}),(0,r.jsx)("div",{className:"ip-doc-meta",children:e.createdAt?new Date(e.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""})]}),i?(0,r.jsxs)("span",{className:"ip-converting-badge",children:[(0,r.jsx)(l.Loader2,{})," Converting…"]}):e.pdfUrl?(0,r.jsx)("span",{className:"ip-doc-pdf-badge",children:"PDF ✓"}):null]},e._id)})}),(0,r.jsxs)("div",{className:"ip-footer",children:[p.length>0&&(0,r.jsxs)("span",{className:"ip-sel-count",children:[p.length," doc",p.length>1?"s":""," selected"]}),(0,r.jsx)("button",{className:`ip-gen-btn ${y?"loading":j}`,onClick:F,disabled:y||0===p.length,children:y?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(l.Loader2,{className:"ip-spin"})," Generating…"]}):"success"===j?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(u.CheckCircle,{})," Packet Ready"]}):"error"===j?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(v.AlertCircle,{})," Failed — Retry"]}):(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(H.Layers,{})," Generate Investor Packet"]})})]}),"success"===j&&(0,r.jsxs)("div",{className:"ip-toast success",children:[(0,r.jsx)(u.CheckCircle,{})," Investor packet created successfully."]}),"error"===j&&(0,r.jsxs)("div",{className:"ip-toast error",children:[(0,r.jsx)(v.AlertCircle,{})," ",N||"Generation failed. Please try again."]}),g.length>0&&(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("div",{className:"ip-divider"}),(0,r.jsx)("div",{className:"ip-history-lbl",children:"Saved Packets"}),(0,r.jsx)("div",{className:"ip-packet-list",children:g.map(e=>(0,r.jsxs)("div",{className:"ip-packet-item",children:[(0,r.jsx)("div",{className:"ip-packet-ico",children:(0,r.jsx)(q,{})}),(0,r.jsxs)("div",{className:"ip-packet-info",children:[(0,r.jsx)("div",{className:"ip-packet-name",children:e.name}),(0,r.jsxs)("div",{className:"ip-packet-meta",children:[new Date(e.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})," · ",e.documents?.length??0," doc",e.documents?.length!==1?"s":""]})]}),(0,r.jsxs)("span",{className:"ip-packet-ver",children:["v",e.version]}),(0,r.jsxs)("div",{className:"ip-pkt-actions flex gap-4 ",children:[(0,r.jsxs)("a",{href:e.pdfUrl,target:"_blank",rel:"noreferrer",className:"ip-pkt-btn view ",children:[(0,r.jsx)(B.Eye,{})," View"]}),(0,r.jsxs)("a",{href:e.pdfUrl,download:!0,className:"ip-pkt-btn view",children:[(0,r.jsx)(f.Download,{})," Download"]})]})]},e._id))})]})]})]})})]})}function J({setliveVariables:e}){(0,i.useParams)();let[c,p]=(0,a.useState)({}),x=e??(()=>{}),[f,g]=(0,a.useState)([]),[h,b]=(0,a.useState)([]),[u,v]=(0,a.useState)({}),[y,w]=(0,a.useState)(null),[k,N]=(0,a.useState)(null),[C,_]=(0,a.useState)(null),[S,z]=(0,a.useState)(null),[D,M]=(0,a.useState)(""),[P,A]=(0,a.useState)(!0),[F,T]=(0,a.useState)(0);(0,a.useEffect)(()=>{fetch("/api/templates").then(e=>e.json()).then(e=>{g(Array.isArray(e)?e:[]),A(!1)}).catch(()=>A(!1))},[]);let $=async e=>{if(y===e){w(null),b([]),x([]);return}N(e),w(e);let r=await fetch("/api/templates/get-values",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:e})}),a=await r.json();a&&p(r=>({...r,[e]:a}));let i=await fetch(`/api/templates/${e}/variables`),t=await i.json(),s=Array.isArray(t)?t:[];b(s),x(s),N(null)},I=f.filter(e=>e.name?.toLowerCase().includes(D.toLowerCase()));return(0,r.jsxs)("div",{className:"tl",children:[(0,r.jsx)("style",{children:`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;500;600&family=DM+Sans:wght@300;400;500&display=swap');

        .tl { font-family:'DM Sans',sans-serif; min-height:100vh; background:#f8f9fb; padding:36px 40px; }
        .tl-title { font-family:'Cormorant Garamond',Georgia,serif; font-size:30px; font-weight:600; color:#111827; letter-spacing:-.01em; margin-bottom:4px; }
        .tl-subtitle { font-size:13px; font-weight:300; color:#9ca3af; letter-spacing:.03em; margin-bottom:28px; }
        .tl-stats { display:flex; gap:16px; margin-bottom:28px; }
        .tl-stat { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:16px 22px; position:relative; overflow:hidden; flex:1; transition:box-shadow .15s; }
        .tl-stat:hover { box-shadow:0 4px 16px rgba(0,0,0,.06); }
        .tl-stat::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; border-radius:10px 10px 0 0; background:linear-gradient(90deg,rgba(196,162,96,.85),rgba(196,162,96,.3)); }
        .tl-stat-label { font-size:10px; font-weight:500; letter-spacing:.1em; text-transform:uppercase; color:#9ca3af; margin-bottom:4px; }
        .tl-stat-value { font-family:'Cormorant Garamond',Georgia,serif; font-size:28px; font-weight:600; line-height:1; color:#111827; }
        .tl-stat-value.gold { color:#92700a; }
        .tl-stat-value.purple { color:#4f46e5; }

        .tl-search-wrap { position:relative; margin-bottom:20px; }
        .tl-search-icon { position:absolute; left:14px; top:50%; transform:translateY(-50%); width:15px; height:15px; color:#9ca3af; pointer-events:none; }
        .tl-search { width:100%; padding:10px 14px 10px 38px; background:#fff; border:1px solid #e5e7eb; border-radius:8px; font-family:'DM Sans',sans-serif; font-size:13px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; box-sizing:border-box; }
        .tl-search::placeholder { color:#9ca3af; }
        .tl-search:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .tl-clear { position:absolute; right:12px; top:50%; transform:translateY(-50%); background:none; border:none; cursor:pointer; color:#9ca3af; display:flex; align-items:center; transition:color .12s; padding:2px; }
        .tl-clear:hover { color:#374151; }
        .tl-clear svg { width:14px; height:14px; }

        .tl-list { display:flex; flex-direction:column; gap:10px; }
        .tl-row { background:#fff; border:1px solid #e5e7eb; border-radius:10px; overflow:hidden; transition:border-color .15s,box-shadow .15s; position:relative; }
        .tl-row::before { content:''; position:absolute; top:0; left:0; right:0; height:3px; background:linear-gradient(90deg,rgba(196,162,96,.6),rgba(196,162,96,.12)); border-radius:10px 10px 0 0; }
        .tl-row:hover { border-color:rgba(196,162,96,.4); box-shadow:0 4px 16px rgba(0,0,0,.06); }
        .tl-row.open { border-color:rgba(196,162,96,.45); }
        .tl-row-header { display:flex; align-items:center; gap:14px; padding:16px 20px; cursor:pointer; user-select:none; }
        .tl-row-icon { width:38px; height:38px; background:rgba(196,162,96,.08); border:1px solid rgba(196,162,96,.2); border-radius:8px; display:flex; align-items:center; justify-content:center; flex-shrink:0; }
        .tl-row-icon svg { width:16px; height:16px; color:#92700a; }
        .tl-row-name { font-size:14px; font-weight:500; color:#111827; flex:1; }
        .tl-row-badge { font-size:10px; font-weight:500; letter-spacing:.08em; text-transform:uppercase; color:#92700a; background:rgba(196,162,96,.1); border:1px solid rgba(196,162,96,.2); border-radius:4px; padding:3px 8px; }
        .tl-row-chevron { width:16px; height:16px; color:#9ca3af; transition:color .12s; flex-shrink:0; }
        .tl-row:hover .tl-row-chevron { color:#92700a; }
        .tl-spin { animation:spin .7s linear infinite; }
        @keyframes spin { to{transform:rotate(360deg)} }

        .tl-panel { border-top:1px solid #f3f4f6; background:#fafafa; }

        .tl-vars { padding:20px 24px; }
        .tl-vars-label { font-size:10px; font-weight:500; letter-spacing:.12em; text-transform:uppercase; color:#9ca3af; margin-bottom:14px; }
        .tl-vars-list { display:flex; flex-direction:column; gap:10px; }
        .tl-var-row { display:flex; align-items:center; gap:12px; }
        .tl-var-name { font-family:'Cormorant Garamond',Georgia,serif; font-size:14px; font-weight:500; color:#374151; min-width:160px; display:flex; align-items:center; gap:6px; }
        .tl-var-name svg { width:12px; height:12px; color:rgba(196,162,96,.7); flex-shrink:0; }
        .tl-arrow { color:#d1d5db; flex-shrink:0; }
        .tl-arrow svg { width:14px; height:14px; }
        .tl-var-input-wrap { position:relative; flex:1; }
        .tl-var-input { width:100%; padding:8px 36px 8px 12px; background:#fff; border:1px solid #e5e7eb; border-radius:6px; font-family:'DM Sans',sans-serif; font-size:12px; color:#111827; outline:none; transition:border-color .15s,box-shadow .15s; box-sizing:border-box; }
        .tl-var-input::placeholder { color:#c4c9d4; }
        .tl-var-input:focus { border-color:rgba(196,162,96,.5); box-shadow:0 0 0 3px rgba(196,162,96,.08); }
        .tl-var-status { position:absolute; right:10px; top:50%; transform:translateY(-50%); display:flex; align-items:center; }
        .tl-var-status svg { width:13px; height:13px; }
        .tl-var-status.saving svg { color:#9ca3af; }
        .tl-var-status.saved svg { color:#16a34a; }

        .tl-sub-divider { height:1px; background:#e5e7eb; margin:0 24px; }
        .tl-sub-components { padding:20px 24px 24px; display:flex; flex-direction:column; gap:0; }

        .skel { background:linear-gradient(90deg,#f0f0f0 25%,#e8e8e8 50%,#f0f0f0 75%); background-size:200% 100%; animation:skel 1.4s infinite; border-radius:4px; }
        @keyframes skel { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
        .tl-row-skel { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:16px 20px; display:flex; align-items:center; gap:14px; }

        .tl-empty { background:#fff; border:1px solid #e5e7eb; border-radius:10px; padding:56px 24px; text-align:center; }
        .tl-empty-icon { width:52px; height:52px; background:#f9fafb; border:1px solid #e5e7eb; border-radius:50%; display:flex; align-items:center; justify-content:center; margin:0 auto 14px; }
        .tl-empty-icon svg { width:22px; height:22px; color:#9ca3af; }
        .tl-empty-title { font-size:14px; font-weight:500; color:#374151; margin-bottom:4px; }
        .tl-empty-sub { font-size:12px; color:#9ca3af; font-weight:300; }
      `}),(0,r.jsx)("div",{className:"tl-title",children:"Templates"}),(0,r.jsx)("div",{className:"tl-subtitle",children:"Browse templates and map their variables to data fields"}),(0,r.jsxs)("div",{className:"tl-stats",children:[(0,r.jsxs)("div",{className:"tl-stat",children:[(0,r.jsx)("div",{className:"tl-stat-label",children:"Total Templates"}),(0,r.jsx)("div",{className:"tl-stat-value gold",children:P?"—":f.length})]}),(0,r.jsxs)("div",{className:"tl-stat",children:[(0,r.jsx)("div",{className:"tl-stat-label",children:"Active Variables"}),(0,r.jsx)("div",{className:"tl-stat-value purple",children:y?h.length:"—"})]}),(0,r.jsxs)("div",{className:"tl-stat",children:[(0,r.jsx)("div",{className:"tl-stat-label",children:"Mapped"}),(0,r.jsx)("div",{className:"tl-stat-value",children:y?h.filter(e=>e.mappedTo).length:"—"})]})]}),(0,r.jsxs)("div",{className:"tl-search-wrap",children:[(0,r.jsx)(n.Search,{className:"tl-search-icon"}),(0,r.jsx)("input",{type:"text",placeholder:"Search templates…",value:D,onChange:e=>M(e.target.value),className:"tl-search"}),D&&(0,r.jsx)("button",{className:"tl-clear",onClick:()=>M(""),children:(0,r.jsx)(d.X,{})})]}),(0,r.jsx)("div",{className:"tl-list",children:P?[void 0,void 0,void 0,void 0].map((e,a)=>(0,r.jsxs)("div",{className:"tl-row-skel",children:[(0,r.jsx)("div",{className:"skel",style:{width:38,height:38,borderRadius:8,flexShrink:0}}),(0,r.jsx)("div",{className:"skel",style:{flex:1,height:14}}),(0,r.jsx)("div",{className:"skel",style:{width:60,height:20,borderRadius:4}})]},a)):0===I.length?(0,r.jsxs)("div",{className:"tl-empty",children:[(0,r.jsx)("div",{className:"tl-empty-icon",children:D?(0,r.jsx)(n.Search,{}):(0,r.jsx)(t.FileText,{})}),(0,r.jsx)("div",{className:"tl-empty-title",children:D?"No templates match your search":"No templates found"}),(0,r.jsx)("div",{className:"tl-empty-sub",children:D?"Try adjusting your search terms":"Upload a template to get started"})]}):I.map((e,a)=>{let i=y===e._id,n=k===e._id;return(0,r.jsxs)("div",{className:`tl-row${i?" open":""}`,children:[(0,r.jsxs)("div",{className:"tl-row-header",onClick:()=>$(e._id),children:[(0,r.jsx)("div",{className:"tl-row-icon",children:(0,r.jsx)(t.FileText,{})}),(0,r.jsx)("div",{className:"tl-row-name",children:e.name||"Untitled Template"}),i&&(0,r.jsx)("span",{className:"tl-row-badge",children:"Active"}),n?(0,r.jsx)(l.Loader2,{className:"tl-row-chevron tl-spin"}):i?(0,r.jsx)(o.ChevronUp,{className:"tl-row-chevron"}):(0,r.jsx)(s.ChevronDown,{className:"tl-row-chevron"})]}),i&&!n&&(0,r.jsxs)("div",{className:"tl-panel",children:[(0,r.jsx)("div",{className:"tl-sub-divider"}),(0,r.jsxs)("div",{className:"tl-sub-components",children:[(0,r.jsx)(R,{templateId:e._id,propertyId:c[e._id],onSave:r=>{fetch("/api/templates/get-values",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:e._id,propertyId:r[e._id]})}).then(async e=>await e.json()).then(r=>{r&&p(a=>({...a,[e._id]:r}))}),p(a=>({...a,[e._id]:r[e._id]}))},onValuesChange:r=>v(a=>({...a,[e._id]:r}))},e._id),c[e._id]?(0,r.jsx)(j,{templateId:e._id,propertyId:c[e._id],variables:h,onGenerated:()=>T(e=>e+1)}):(0,r.jsx)(r.Fragment,{}),c[e._id]?(0,r.jsx)(m,{templateId:e._id,propertyId:c[e._id],onDocumentGenerated:()=>T(e=>e+1)},F):(0,r.jsx)(r.Fragment,{})]})]}),c[e._id]&&(0,r.jsx)(Y,{templateId:e._id,propertyId:c[e._id],variables:u[e._id]??[]})]},e._id)})})]})}e.s(["default",()=>J],48042)}]);