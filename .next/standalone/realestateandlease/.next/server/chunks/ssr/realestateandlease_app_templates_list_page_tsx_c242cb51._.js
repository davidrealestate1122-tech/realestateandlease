module.exports=[12913,a=>{"use strict";var b=a.i(69297),c=a.i(93668),d=a.i(14539),e=a.i(92716),f=a.i(23033),g=a.i(99942),h=a.i(84629),i=a.i(45501),j=a.i(46484),k=a.i(68698),l=a.i(19763);let m=(0,l.default)("FolderOpen",[["path",{d:"m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2",key:"usdka0"}]]);var n=a.i(51209);let o=(0,l.default)("FileDown",[["path",{d:"M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z",key:"1rqfz7"}],["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M12 18v-6",key:"17g6i2"}],["path",{d:"m9 15 3 3 3-3",key:"1npd3o"}]]);var p=a.i(54778);function q({templateId:a,propertyId:d}){let[f,g]=(0,c.useState)([]),[i,j]=(0,c.useState)(!0),[l,q]=(0,c.useState)({});(0,c.useEffect)(()=>{a&&(j(!0),fetch(`/api/documents?propertyId=${d}&templateId=${a}`).then(a=>a.json()).then(a=>{g(Array.isArray(a)?a:[]),j(!1)}).catch(()=>j(!1)))},[a]);let r=async a=>{if(a.pdfUrl)return void s(a.pdfUrl,t(a));q(b=>({...b,[a._id]:!0}));try{let b=await fetch("/api/documents/convert-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({documentId:a._id})});if(!b.ok)throw Error("Conversion failed");let{pdfUrl:c}=await b.json();g(b=>b.map(b=>b._id===a._id?{...b,pdfUrl:c}:b)),s(c,t(a))}catch(a){alert("PDF conversion failed. Make sure LibreOffice is installed on the server.")}finally{q(b=>({...b,[a._id]:!1}))}},s=(a,b)=>{let c=document.createElement("a");c.href=a,c.download=b,c.click()},t=a=>{let b=a.fileUrl?.split("/").pop()?.replace(/\.docx$/,"")||`document_v${a.version}`;return`${b}.pdf`};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("div",{className:"dl",children:(0,b.jsxs)("div",{className:"dl-card",children:[(0,b.jsxs)("div",{className:"dl-header",children:[(0,b.jsxs)("div",{className:"dl-header-left",children:[(0,b.jsx)("div",{className:"dl-header-icon",children:(0,b.jsx)(e.FileText,{})}),(0,b.jsx)("div",{className:"dl-header-title",children:"Generated Documents"})]}),!i&&f.length>0&&(0,b.jsxs)("span",{className:"dl-badge",children:[f.length," File",1!==f.length?"s":""]})]}),i?(0,b.jsx)("div",{className:"dl-skel-wrap",children:[void 0,void 0,void 0].map((a,c)=>(0,b.jsx)("div",{className:"dl-skel"},c))}):0===f.length?(0,b.jsxs)("div",{className:"dl-empty",children:[(0,b.jsx)("div",{className:"dl-empty-icon",children:(0,b.jsx)(m,{})}),(0,b.jsx)("div",{className:"dl-empty-title",children:"No documents yet"}),(0,b.jsx)("div",{className:"dl-empty-sub",children:"Generate a document to see it here"})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"dl-list",children:f.map((a,c)=>{let d=l[a._id],f=!!a.pdfUrl;return(0,b.jsxs)("div",{className:"dl-row",children:[(0,b.jsx)("div",{className:"dl-row-icon",children:(0,b.jsx)(e.FileText,{})}),(0,b.jsxs)("div",{className:"dl-row-body",children:[(0,b.jsxs)("div",{className:"dl-row-title",children:["Version ",a.version??c+1,f&&(0,b.jsx)("span",{className:"dl-pdf-badge",children:"PDF ✓"})]}),(0,b.jsxs)("div",{className:"dl-row-meta",children:[(0,b.jsx)(k.Clock,{}),a.createdAt?new Date(a.createdAt).toLocaleDateString("en-GB",{day:"numeric",month:"short",year:"numeric"}):"Recently generated"]})]}),(0,b.jsxs)("div",{className:"dl-actions",children:[(0,b.jsxs)("a",{href:a.fileUrl,target:"_blank",rel:"noreferrer",className:"dl-btn view",children:[(0,b.jsx)(p.File,{})," Download DOCX"]}),(0,b.jsx)("button",{className:`dl-btn pdf${d?" converting":""}`,onClick:()=>r(a),disabled:d,children:d?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Loader2,{className:"dl-spin"})," Converting…"]}):f?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(n.Download,{})," PDF"]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(o,{})," Export PDF"]})})]})]},a._id)})}),(0,b.jsxs)("div",{className:"dl-footer",children:[f.length," document",1!==f.length?"s":""," · Property ",d]})]})]})})]})}let r=(0,l.default)("Sparkles",[["path",{d:"M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.581a.5.5 0 0 1 0 .964L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0z",key:"4pj2yx"}],["path",{d:"M20 3v4",key:"1olli1"}],["path",{d:"M22 5h-4",key:"1gvqau"}],["path",{d:"M4 17v2",key:"vumght"}],["path",{d:"M5 18H3",key:"zchphs"}]]);var s=a.i(47885),t=a.i(91226);let u=(0,l.default)("FileOutput",[["path",{d:"M14 2v4a2 2 0 0 0 2 2h4",key:"tnqrlb"}],["path",{d:"M4 7V4a2 2 0 0 1 2-2 2 2 0 0 0-2 2",key:"1vk7w2"}],["path",{d:"M4.063 20.999a2 2 0 0 0 2 1L18 22a2 2 0 0 0 2-2V7l-5-5H6",key:"1jink5"}],["path",{d:"m5 11-3 3",key:"1dgrs4"}],["path",{d:"m5 17-3-3h10",key:"1mvvaf"}]]),v=(0,l.default)("ShieldAlert",[["path",{d:"M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z",key:"oel41y"}],["path",{d:"M12 8v4",key:"1got3b"}],["path",{d:"M12 16h.01",key:"1drbdi"}]]);function w({templateId:a,propertyId:d,variables:e=[],onGenerated:f}){let[g,i]=(0,c.useState)(!1),[j,k]=(0,c.useState)("idle"),[l,m]=(0,c.useState)(""),[n,o]=(0,c.useState)([]),p=async()=>{let b=e.filter(a=>a.required&&!a.value?.trim()).map(a=>a.variable);if(b.length>0)return void o(b);o([]),i(!0),k("idle"),m("");try{let b=await fetch("/api/documents/generate",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:a,propertyId:d})}),c=await b.json();if(!b.ok)throw c.missingVariables?.length?(o(c.missingVariables),m(`Server reported missing variables: ${c.missingVariables.join(", ")}`)):m(c.message||"Generation failed. Please try again."),Error();k("success"),setTimeout(()=>{k("idle"),f?.()},2e3)}catch{k("error"),setTimeout(()=>{k("idle"),m("")},3500)}finally{i(!1)}};e.filter(a=>a.value?.trim()).length,e.filter(a=>a.required).length;let q=0===e.filter(a=>a.required&&!a.value?.trim()).length,w=0===e.length||q;return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("div",{className:"gd",children:(0,b.jsx)("div",{className:"gd-card",children:(0,b.jsxs)("div",{className:"gd-body",children:[(0,b.jsxs)("div",{className:"gd-top",children:[(0,b.jsx)("div",{className:"gd-icon",children:(0,b.jsx)(u,{})}),(0,b.jsxs)("div",{children:[(0,b.jsx)("div",{className:"gd-title",children:"Generate Document"}),(0,b.jsx)("div",{className:"gd-sub",children:"Populate template with current variable values"})]})]}),(0,b.jsxs)("div",{className:"",children:[(0,b.jsx)("div",{className:"gd-meta-divider"}),e.length>0&&(0,b.jsx)(b.Fragment,{})]}),e.length>0&&(0,b.jsxs)("div",{className:`gd-readiness ${w?"ready":"not-ready"}`,children:[w?(0,b.jsx)(s.CheckCircle,{}):(0,b.jsx)(v,{}),(0,b.jsx)("span",{className:"gd-readiness-text",children:w?"All required fields filled — ready to generate":`${e.filter(a=>a.required&&!a.value?.trim()).length} required field${e.filter(a=>a.required&&!a.value?.trim()).length>1?"s":""} still missing`})]}),n.length>0&&(0,b.jsxs)("div",{className:"gd-missing-list",children:[(0,b.jsx)("div",{className:"gd-missing-title",children:"Fill these before generating"}),(0,b.jsx)("div",{className:"gd-missing-tags",children:n.map(a=>(0,b.jsx)("span",{className:"gd-missing-tag",children:a},a))})]}),(0,b.jsx)("button",{id:"gen-btn",className:`gd-btn ${g?"loading":!w&&e.length>0?"blocked":j}`,onClick:p,disabled:g,children:g?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Loader2,{className:"gd-spin"})," Generating…"]}):"success"===j?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.CheckCircle,{})," Document Ready"]}):"error"===j?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.AlertCircle,{})," Generation Failed"]}):!w&&e.length>0?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(v,{})," Fill Required Fields First"]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(r,{})," Generate Document"]})}),"success"===j&&(0,b.jsxs)("div",{className:"gd-toast success",children:[(0,b.jsx)(s.CheckCircle,{})," Document generated — refreshing list."]}),"error"===j&&(0,b.jsxs)("div",{className:"gd-toast error",children:[(0,b.jsx)(t.AlertCircle,{})," ",l||"Something went wrong. Please try again."]})]})})})]})}var x=a.i(5548),y=a.i(5287);let z=(0,l.default)("SlidersHorizontal",[["line",{x1:"21",x2:"14",y1:"4",y2:"4",key:"obuewd"}],["line",{x1:"10",x2:"3",y1:"4",y2:"4",key:"1q6298"}],["line",{x1:"21",x2:"12",y1:"12",y2:"12",key:"1iu8h1"}],["line",{x1:"8",x2:"3",y1:"12",y2:"12",key:"ntss68"}],["line",{x1:"21",x2:"16",y1:"20",y2:"20",key:"14d8ph"}],["line",{x1:"12",x2:"3",y1:"20",y2:"20",key:"m0wm8r"}],["line",{x1:"14",x2:"14",y1:"2",y2:"6",key:"14e1ph"}],["line",{x1:"8",x2:"8",y1:"10",y2:"14",key:"1i6ji0"}],["line",{x1:"16",x2:"16",y1:"18",y2:"22",key:"1lctlv"}]]);var A=a.i(72090),B=a.i(93915),C=a.i(70838),D=a.i(14671),E=a.i(71492),F=a.i(68496);let G=(0,l.default)("HardHat",[["path",{d:"M2 18a1 1 0 0 0 1 1h18a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1H3a1 1 0 0 0-1 1v2z",key:"1dej2m"}],["path",{d:"M10 10V5a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v5",key:"1p9q5i"}],["path",{d:"M4 15v-3a6 6 0 0 1 6-6",key:"9ciidu"}],["path",{d:"M14 6a6 6 0 0 1 6 6v3",key:"1hnv84"}]]),H=(0,l.default)("Building",[["rect",{width:"16",height:"20",x:"4",y:"2",rx:"2",ry:"2",key:"76otgf"}],["path",{d:"M9 22v-4h6v4",key:"r93iot"}],["path",{d:"M8 6h.01",key:"1dz90k"}],["path",{d:"M16 6h.01",key:"1x0f13"}],["path",{d:"M12 6h.01",key:"1vi96p"}],["path",{d:"M12 10h.01",key:"1nrarc"}],["path",{d:"M12 14h.01",key:"1etili"}],["path",{d:"M16 10h.01",key:"1m94wz"}],["path",{d:"M16 14h.01",key:"1gbofw"}],["path",{d:"M8 10h.01",key:"19clt8"}],["path",{d:"M8 14h.01",key:"6423bh"}]]),I=(0,l.default)("Lock",[["rect",{width:"18",height:"11",x:"3",y:"11",rx:"2",ry:"2",key:"1w4ew1"}],["path",{d:"M7 11V7a5 5 0 0 1 10 0v4",key:"fwvmzm"}]]);var J=a.i(19049);let K=a=>a.toLowerCase().replace(/[_\s\-]/g,""),L={investor:{varPatterns:["investor","company"],fieldMap:{"Full Name":"Investor_Name",Email:"Investor_Email",Phone:"Investor_Phone","Entity Name":"Company_Name",Address:"Investor_Address","Tax ID":"Tax_ID","Investment Focus":"Investment_Focus"}},lender:{varPatterns:["lender","loan","interest","rate","term"],fieldMap:{"Lender Name":"Lender_Name","Contact Name":"Lender_Contact",Email:"Lender_Email",Phone:"Lender_Phone","Loan Programs":"Loan_Programs","Rate Range":"Interest_Rate","Max LTV":"Max_LTV",Address:"Lender_Address"}},contractor:{varPatterns:["contractor"],fieldMap:{"Company Name":"Contractor_Company","Contact Name":"Contractor_Name",Email:"Contractor_Email",Phone:"Contractor_Phone","License Number":"License_Number",Trade:"Trade",Address:"Contractor_Address","Insurance Expiry":"Insurance_Expiry"}},company:{varPatterns:["company","abn","director","website"],fieldMap:{"Company Name":"Company_Name","ABN/EIN":"ABN_EIN",Address:"Company_Address",Phone:"Company_Phone",Email:"Company_Email","Director Name":"Director_Name",Website:"Website"}}},M={property:{label:"property",color:"#1d6f42",bg:"rgba(29,110,66,0.10)"},profile:{label:"profile",color:"#4f46e5",bg:"rgba(79,70,229,0.10)"},deal:{label:"deal",color:"#0369a1",bg:"rgba(3,105,161,0.10)"},database:{label:"db",color:"#6b7280",bg:"rgba(107,114,128,0.10)"},manual:{label:"edited",color:"#92700a",bg:"rgba(196,162,96,0.12)"}},N={investor:{label:"Investor",icon:A.User,color:"#0369a1",bg:"rgba(3,105,161,0.06)",border:"rgba(3,105,161,0.2)"},lender:{label:"Lender",icon:F.Landmark,color:"#7c3aed",bg:"rgba(124,58,237,0.06)",border:"rgba(124,58,237,0.2)"},contractor:{label:"Contractor",icon:G,color:"#b45309",bg:"rgba(180,83,9,0.06)",border:"rgba(180,83,9,0.2)"},company:{label:"Company",icon:H,color:"#1d6f42",bg:"rgba(29,110,66,0.06)",border:"rgba(29,110,66,0.2)"}},O=[{label:"Property",match:a=>a.includes("property")||a.includes("address")||"city"===a||"state"===a||a.includes("zip")},{label:"Investor",match:a=>a.includes("investor")||a.includes("company")&&!a.includes("contractor")},{label:"Financials",match:a=>a.includes("purchase")||"arv"===a||a.includes("rehab")||a.includes("holding")||a.includes("closing")||a.includes("total")||a.includes("profit")},{label:"Loan",match:a=>a.includes("loan")||a.includes("interest")||a.includes("lender")||a.includes("rate")||a.includes("term")},{label:"Contractor",match:a=>a.includes("contractor")},{label:"Timeline",match:a=>a.includes("start")||a.includes("end")||a.includes("date")||a.includes("duration")},{label:"Other",match:()=>!0}];function P({templateId:a,propertyId:d,onValuesChange:e,onSave:g}){let[k,l]=(0,c.useState)([]),[m,n]=(0,c.useState)([]),[o,p]=(0,c.useState)([]),[q,r]=(0,c.useState)(d??""),[u,v]=(0,c.useState)({}),[w,A]=(0,c.useState)(!0),[F,G]=(0,c.useState)(!0),[H,P]=(0,c.useState)(!0),[Q,R]=(0,c.useState)(!1),[S,T]=(0,c.useState)("idle"),[U,V]=(0,c.useState)(!1),[W,X]=(0,c.useState)(!1),[Y,Z]=(0,c.useState)(null),[$,_]=(0,c.useState)(""),[aa,ab]=(0,c.useState)(0),[ac,ad]=(0,c.useState)(!!d),ae=(0,c.useRef)(null),af=(0,c.useRef)(null),ag=(0,c.useRef)(e),ah=(0,c.useRef)(g);(0,c.useEffect)(()=>{ag.current=e});let ai=(0,c.useRef)(k);(0,c.useEffect)(()=>{ai.current!==k&&(ai.current=k,ag.current?.(k))}),(0,c.useEffect)(()=>{let a=a=>{ae.current&&!ae.current.contains(a.target)&&X(!1),af.current&&!af.current.contains(a.target)&&Z(null)};return document.addEventListener("mousedown",a),()=>document.removeEventListener("mousedown",a)},[]);let aj=async(b=!1,c)=>{ah.current?.(k),A(!0);let e=c??q??d;try{let[c,d]=await Promise.all([fetch(`/api/templates/${a}/variables`),e?fetch(`/api/templates/${a}/values?propertyId=${e}`):Promise.resolve(null)]),f=await c.json(),g=d?await d.json():[];if(!Array.isArray(f))return void l([]);let h={};if(b&&Array.isArray(g))for(let a of g)a.value?.trim()&&(h[a.variable]={value:a.value,source:a.source??"manual"});let i=f.map(a=>{let b=h[a.variable];return b?.value?{...a,value:b.value,source:b.source}:{...a,value:"",source:""}});l(i)}catch{l([])}finally{A(!1)}};(0,c.useEffect)(()=>{a&&(l([]),r(d??""),v({}),ab(0),V(!1),T("idle"),ad(!!d),aj(!0),fetch("/api/execution/properties").then(a=>a.json()).then(a=>p(Array.isArray(a)?a:[])).catch(()=>p([])).finally(()=>G(!1)),fetch("/api/profiles").then(a=>a.json()).then(a=>n(Array.isArray(a)?a:[])).catch(()=>n([])).finally(()=>P(!1)))},[a]);let ak=async b=>{if(r(b),X(!1),_(""),ab(0),!b)return void await aj(!0);try{let c,d,e,f,[g,h]=await Promise.all([fetch(`/api/execution/properties/${b}`,{cache:"no-store"}),fetch(`/api/templates/${a}/values?propertyId=${b}`)]),i=await g.json(),j=await h.json(),k={};if(Array.isArray(j))for(let a of j)k[a.variable]={value:a.value,source:a.source??"manual"};let m=(c=a=>null!=a?String(a):"",d=i.workspace?.executionCosts??i.phase1?.costs??{},f=(e=i.phase1?.arv?.finalArv??i.phase1?.arv?.baseArv??0)&&d.totalCosts?e-d.totalCosts:void 0,Object.fromEntries(Object.entries({Property_Address:i.property?.address??"",City:i.property?.city??"",State:i.property?.state??"",Zip_Code:i.property?.zipCode??"",Investor_Name:i.investor?.name??"",Company_Name:i.investor?.companyName??"",Investor_Email:i.investor?.email??"",Investor_Phone:i.investor?.phone??"",Purchase_Price:c(d.purchasePrice),ARV:c(e),Rehab_Budget:c(d.rehabCost),Holding_Costs:c(d.holdingCosts),Closing_Costs:c(d.closingCosts),Total_Project_Cost:c(d.totalCosts),Estimated_Profit:null!=f?String(f):"",Loan_Amount:c(i.workspace?.loanAmount),Interest_Rate:i.workspace?.interestRate!=null?String(i.workspace.interestRate):"",Loan_Term:i.workspace?.loanTerm??"",Lender_Name:i.workspace?.lenderName??"",Contractor_Name:i.contractor?.name??"",Contractor_Email:i.contractor?.email??"",Contractor_Phone:i.contractor?.phone??"",Start_Date:i.workspace?.startDate??"",End_Date:i.workspace?.endDate??"",Project_Duration:i.workspace?.projectDuration??"",Additional_Notes:i.workspace?.additionalNotes??""}).filter(([,a])=>""!==a)));l(a=>{let b=a.map(a=>{let b=k[a.variable];if(b?.value)return{...a,value:b.value,source:b.source};let c=K(a.variable);for(let[b,d]of Object.entries(m))if(K(b)===c&&d)return{...a,value:d,source:"property"};return a});return ab(b.filter(a=>a.value?.trim()).length),b})}catch{}},al=(a,b)=>{if(v(c=>({...c,[a]:b})),Z(null),!b)return;let c=m.find(a=>a._id===b);c&&l(a=>{let b=function(a,b){let c=L[b.type];if(!c)return a;let d={};for(let[a,e]of Object.entries(c.fieldMap)){let c=b.data[a]?.trim();c&&(d[K(e)]=c,d[K(a)]=c)}return a.map(a=>{if("manual"===a.source)return a;let b=K(a.variable),e=a.mappedTo?K(a.mappedTo):"",f=d[b]??d[e];if(f)return{...a,value:f,source:"profile"};if(c.varPatterns.some(a=>b.includes(a))){for(let[c,e]of Object.entries(d))if(b.includes(c)||c.includes(b))return{...a,value:e,source:"profile"}}return a})}(a,c);return ab(b.filter(a=>"profile"===a.source&&a.value?.trim()).length),b})},am=(a,b)=>{l(c=>{let d=c.map(c=>c._id===a?{...c,value:b,source:"manual"}:c),e=d.find(a=>K(a.variable).includes("start")&&K(a.variable).includes("date")),f=d.find(a=>K(a.variable).includes("end")&&K(a.variable).includes("date")),g=d.find(a=>K(a.variable).includes("duration")||K(a.variable).includes("projectduration"));if(e?.value&&f?.value&&g){let a=new Date(e.value),b=Math.ceil((new Date(f.value).getTime()-a.getTime())/864e5);if(b>0){let a=Math.floor(b/7),c=Math.floor(b/30),e=c>=2?`${c} months`:a>=1?`${a} week${a>1?"s":""} (${b} days)`:`${b} day${b>1?"s":""}`;return d.map(a=>a._id===g._id?{...a,value:e,source:"manual"}:a)}}return d}),V(!1)},an=async()=>{if(k.filter(a=>a.required&&!a.value?.trim()).length>0)return void V(!0);R(!0),T("idle");try{if(!(await fetch("/api/templates/save-values",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:a,propertyId:q,variables:k})})).ok)throw Error();T("success"),ad(!0)}catch{T("error")}finally{R(!1),setTimeout(()=>T("idle"),2200)}},ao=k.filter(a=>a.value?.trim()).length,ap=k.filter(a=>a.required&&!a.value?.trim()),aq=o.find(a=>a._id===q),ar=o.filter(a=>(a.name??a.address??"").toLowerCase().includes($.toLowerCase())||(a.address??"").toLowerCase().includes($.toLowerCase())),as=k.length?Math.round(ao/k.length*100):0,at=[],au=new Set;for(let a of O){let b=k.filter(b=>!au.has(b._id)&&a.match(K(b.variable)));b.length&&(b.forEach(a=>au.add(a._id)),at.push({label:a.label,vars:b}))}return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("div",{className:"vr",children:(0,b.jsxs)("div",{className:"vr-card",children:[(0,b.jsxs)("div",{className:"vr-header",children:[(0,b.jsxs)("div",{className:"vr-header-left",children:[(0,b.jsx)("div",{className:"vr-hicon",children:(0,b.jsx)(z,{})}),(0,b.jsx)("div",{className:"vr-htitle",children:"Variable Review"})]}),!w&&k.length>0&&(0,b.jsxs)("div",{className:"vr-hright",children:[(0,b.jsxs)("span",{className:"vr-filled-badge",children:[ao,"/",k.length," filled"]}),(0,b.jsxs)("div",{className:"vr-pct-ring",children:[(0,b.jsxs)("svg",{width:"38",height:"38",viewBox:"0 0 38 38",children:[(0,b.jsx)("circle",{cx:"19",cy:"19",r:"15",fill:"none",stroke:"#f0f0f0",strokeWidth:"3"}),(0,b.jsx)("circle",{cx:"19",cy:"19",r:"15",fill:"none",stroke:"#c4a260",strokeWidth:"3",strokeDasharray:`${2*Math.PI*15}`,strokeDashoffset:`${2*Math.PI*15*(1-as/100)}`,strokeLinecap:"round"})]}),(0,b.jsxs)("span",{className:"vr-pct-num",children:[as,"%"]})]})]})]}),aa>0&&(0,b.jsxs)("div",{className:"vr-toast",children:[(0,b.jsx)(D.Zap,{}),(0,b.jsxs)("span",{children:[(0,b.jsxs)("strong",{children:[aa," fields"]})," auto-filled"]})]}),(0,b.jsxs)("div",{className:"vr-prop-bar",ref:ae,children:[(0,b.jsx)("span",{className:"vr-prop-lbl",children:"Property:"}),ac&&aq?(0,b.jsxs)("div",{className:"vr-prop-locked",children:[(0,b.jsxs)("div",{className:"vr-prop-locked-pill",children:[(0,b.jsx)(I,{className:"lock-ico"}),(0,b.jsx)("span",{className:"vr-prop-locked-name",children:aq.address||aq.name||"Selected property"}),(0,b.jsx)("span",{className:"vr-prop-locked-tag",children:"saved"})]}),(0,b.jsxs)("button",{className:"vr-change-btn",onClick:()=>{alert("cant change property because this template is locked to the current property. To change the property, please create a new Template.")},children:[(0,b.jsx)(J.Edit2,{})," Change"]})]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsxs)("div",{className:"vr-sel-wrap",children:[(0,b.jsxs)("button",{className:`vr-sel-btn${aq?" active":""}`,onClick:()=>{X(a=>!a),Z(null)},children:[(0,b.jsx)(C.Building2,{className:"ico"}),(0,b.jsx)("span",{className:`vr-sel-name${!aq?" ph":""}`,children:F?"Loading…":aq?aq.address||aq.name||"Selected property":"Select a property…"}),(0,b.jsx)(f.ChevronDown,{className:"chv"})]}),W&&(0,b.jsxs)("div",{className:"vr-dd",children:[(0,b.jsxs)("div",{className:"vr-dd-search",children:[(0,b.jsx)(i.Search,{}),(0,b.jsx)("input",{autoFocus:!0,placeholder:"Search properties…",value:$,onChange:a=>_(a.target.value)})]}),(0,b.jsxs)("div",{className:"vr-dd-scroll",children:[(0,b.jsxs)("div",{className:"vr-dd-item",onClick:()=>ak(""),children:[(0,b.jsx)(C.Building2,{}),(0,b.jsx)("div",{className:"vr-dd-body",children:(0,b.jsx)("div",{className:"vr-dd-name",children:"None"})})]}),ar.map(a=>(0,b.jsxs)("div",{className:`vr-dd-item${q===a._id?" sel":""}`,onClick:()=>ak(a._id),children:[(0,b.jsx)(C.Building2,{}),(0,b.jsxs)("div",{className:"vr-dd-body",children:[(0,b.jsx)("div",{className:"vr-dd-name",children:a.address||a.name||a._id}),a.city&&(0,b.jsx)("div",{className:"vr-dd-sub",children:[a.city,a.state].filter(Boolean).join(", ")})]})]},a._id)),0===ar.length&&(0,b.jsx)("div",{className:"vr-dd-empty",children:"No properties match"})]})]})]}),aq&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("span",{className:"vr-applied-pill property",children:"applied"}),(0,b.jsxs)("button",{className:"vr-clear-btn",onClick:()=>ak(""),children:[(0,b.jsx)(j.X,{})," Clear"]})]})]})]}),(0,b.jsxs)("div",{className:"vr-profiles-section",ref:af,children:[(0,b.jsx)("div",{className:"vr-profiles-title",children:"Profiles"}),(0,b.jsx)("div",{className:"vr-profiles-grid",children:["investor","lender","contractor","company"].map(a=>{let c=N[a],d=c.icon,e=m.filter(b=>b.type===a),g=u[a]??"",h=e.find(a=>a._id===g),i=Y===a;return(0,b.jsxs)("div",{className:"vr-profile-card",children:[(0,b.jsxs)("div",{className:"vr-profile-card-header",children:[(0,b.jsx)("div",{className:"vr-profile-type-icon",style:{background:c.bg,border:`1px solid ${c.border}`},children:(0,b.jsx)(d,{style:{color:c.color}})}),(0,b.jsx)("span",{className:"vr-profile-type-label",style:{color:c.color},children:c.label}),h&&(0,b.jsx)("span",{className:"vr-profile-applied",children:"applied"})]}),(0,b.jsxs)("div",{className:"vr-profile-selector",children:[(0,b.jsxs)("div",{style:{position:"relative",flex:1},children:[(0,b.jsxs)("button",{className:`vr-profile-sel-btn${h?" active":""}`,onClick:()=>Z(i?null:a),children:[(0,b.jsx)(d,{}),(0,b.jsx)("span",{className:`vr-profile-sel-name${!h?" ph":""}`,children:H?"Loading…":h?h.name:0===e.length?"No profiles":`Select ${c.label}…`}),(0,b.jsx)(f.ChevronDown,{style:{width:11,height:11,color:"#9ca3af",marginLeft:"auto",flexShrink:0}})]}),i&&e.length>0&&(0,b.jsx)("div",{className:"vr-dd",style:{minWidth:"100%"},children:(0,b.jsxs)("div",{className:"vr-dd-scroll",children:[(0,b.jsxs)("div",{className:"vr-dd-item",onClick:()=>al(a,""),children:[(0,b.jsx)(d,{}),(0,b.jsx)("div",{className:"vr-dd-body",children:(0,b.jsx)("div",{className:"vr-dd-name",children:"None"})})]}),e.map(c=>(0,b.jsxs)("div",{className:`vr-dd-item${g===c._id?" sel":""}`,onClick:()=>al(a,c._id),children:[(0,b.jsx)(d,{}),(0,b.jsxs)("div",{className:"vr-dd-body",children:[(0,b.jsx)("div",{className:"vr-dd-name",children:c.name}),(0,b.jsxs)("div",{className:"vr-dd-sub",children:[Object.keys(c.data).length," fields"]})]})]},c._id))]})})]}),h&&(0,b.jsxs)("button",{className:"vr-profile-clear",onClick:()=>al(a,""),children:[(0,b.jsx)(j.X,{})," Clear"]})]})]},a)})})]}),(0,b.jsxs)("div",{className:"vr-chain",children:[(0,b.jsx)("span",{className:"vr-chain-lbl",children:"Priority:"}),(0,b.jsx)("span",{className:`vr-chain-step ${k.some(a=>"manual"===a.source)?"on":"off"}`,children:"manual"}),(0,b.jsx)("span",{className:"vr-chain-arr",children:"›"}),(0,b.jsx)("span",{className:`vr-chain-step ${Object.values(u).some(Boolean)?"on":"off"}`,children:"profile"}),(0,b.jsx)("span",{className:"vr-chain-arr",children:"›"}),(0,b.jsx)("span",{className:`vr-chain-step ${aq?"on":"off"}`,children:"property"}),(0,b.jsx)("span",{className:"vr-chain-arr",children:"›"}),(0,b.jsx)("span",{className:"vr-chain-step off",children:"database"})]}),U&&ap.length>0&&(0,b.jsxs)("div",{className:"vr-missing",children:[(0,b.jsx)(t.AlertCircle,{}),(0,b.jsxs)("span",{children:[ap.length," required field",ap.length>1?"s":""," missing:"," ",(0,b.jsx)("strong",{children:ap.map(a=>a.variable).join(", ")})]})]}),w?(0,b.jsx)("div",{className:"vr-skel-wrap",children:[...Array(6)].map((a,c)=>(0,b.jsxs)("div",{className:"vr-skel-row",children:[(0,b.jsx)("div",{className:"vr-skel",style:{width:150,height:32,flexShrink:0}}),(0,b.jsx)("div",{className:"vr-skel",style:{flex:1,height:36}})]},c))}):0===k.length?(0,b.jsxs)("div",{className:"vr-empty",children:[(0,b.jsx)("div",{className:"vr-eico",children:(0,b.jsx)(x.Tag,{})}),(0,b.jsx)("div",{className:"vr-etitle",children:"No variables to review"}),(0,b.jsx)("div",{className:"vr-esub",children:"Map template variables first"})]}):(0,b.jsxs)(b.Fragment,{children:[at.map(({label:a,vars:c})=>(0,b.jsxs)("div",{className:"vr-section",children:[(0,b.jsx)("div",{className:"vr-section-title",children:a}),c.map(a=>{let c,d=a.source?M[a.source]:null,e=U&&a.required&&!a.value?.trim(),f=(c=K(a.variable)).includes("date")||c.includes("startdate")||c.includes("enddate")||c.includes("expiry");return(0,b.jsxs)("div",{className:"vr-row",children:[(0,b.jsxs)("div",{className:"vr-label",children:[(0,b.jsx)("div",{className:"vr-lico",children:f?(0,b.jsx)(E.Calendar,{style:{width:10,height:10,color:"rgba(146,112,10,.6)"}}):(0,b.jsx)(x.Tag,{})}),(0,b.jsx)("span",{className:"vr-ltext",title:a.variable,children:a.variable}),a.required&&(0,b.jsx)("div",{className:"vr-req-dot",title:"Required"})]}),(0,b.jsxs)("div",{className:"vr-input-row",children:[f?(0,b.jsxs)("div",{className:"vr-date-wrap",children:[(0,b.jsx)("div",{className:"vr-date-icon",children:(0,b.jsx)(E.Calendar,{})}),(0,b.jsx)("input",{type:"date",className:`vr-date-input${a.value?.trim()?" filled":""}${e?" err":""}`,value:a.value||"",onChange:b=>am(a._id,b.target.value)})]}):(0,b.jsx)("div",{className:"vr-input-wrap",children:(0,b.jsx)("input",{className:`vr-input${a.value?.trim()?" filled":""}${e?" err":""}`,placeholder:a.required?`${a.variable} (required)`:`Value for ${a.variable}…`,value:a.value||"",onChange:b=>am(a._id,b.target.value)})}),d&&(0,b.jsx)("span",{className:"vr-src",style:{background:d.bg,color:d.color},children:d.label})]})]},a._id)})]},a)),(0,b.jsxs)("div",{className:"vr-footer",children:[(0,b.jsxs)("div",{className:"vr-foot-left",children:[(0,b.jsx)("span",{className:"vr-foot-hint",children:ao===k.length?"✓ All variables filled":`${k.length-ao} remaining`}),(0,b.jsx)("div",{className:"vr-legend",children:Object.entries(M).map(([a,c])=>(0,b.jsxs)("div",{className:"vr-leg-item",children:[(0,b.jsx)("div",{className:"vr-leg-dot",style:{background:c.color+"99"}}),c.label]},a))})]}),(0,b.jsxs)("div",{className:"vr-foot-right",children:[(0,b.jsxs)("button",{className:"vr-refresh",onClick:()=>aj(!0,q||d),children:[(0,b.jsx)(B.RefreshCw,{})," Refresh"]}),(0,b.jsx)("button",{className:`vr-save ${Q?"saving":S}`,onClick:an,disabled:Q,children:Q?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Loader2,{className:"vr-spin"})," Saving…"]}):"success"===S?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.CheckCircle,{})," Saved"]}):"error"===S?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.AlertCircle,{})," Failed"]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(y.Save,{})," Save Values"]})})]})]})]})]})})]})}let Q=(0,l.default)("Package",[["path",{d:"M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z",key:"1a0edw"}],["path",{d:"M12 22V12",key:"d0xqtd"}],["path",{d:"m3.3 7 7.703 4.734a2 2 0 0 0 1.994 0L20.7 7",key:"yx3hmr"}],["path",{d:"m7.5 4.27 9 5.15",key:"1c824w"}]]),R=(0,l.default)("Square",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",key:"afitv7"}]]);var S=a.i(11708),T=a.i(48971),U=a.i(98165);function V({propertyId:a,templateId:d,variables:i=[]}){let[j,k]=(0,c.useState)([]),[l,m]=(0,c.useState)([]),[o,p]=(0,c.useState)([]),[q,r]=(0,c.useState)({}),[u,v]=(0,c.useState)(!1),[w,x]=(0,c.useState)("idle"),[y,z]=(0,c.useState)(""),[A,B]=(0,c.useState)(!0),[C,D]=(0,c.useState)("Investor Packet"),[E,F]=(0,c.useState)(!0);(0,c.useEffect)(()=>{d&&a&&(F(!0),fetch(`/api/documents?templateId=${d}&propertyId=${a}`).then(a=>a.json()).then(a=>k(Array.isArray(a)?a:[])).catch(()=>k([])).finally(()=>F(!1)))},[d,a]),(0,c.useEffect)(()=>{a&&fetch(`/api/investor-packet?propertyId=${a}`).then(a=>a.json()).then(a=>p(Array.isArray(a)?a:[])).catch(()=>p([]))},[a]);let G=async a=>{if(a.pdfUrl)return!0;r(b=>({...b,[a._id]:!0}));try{let b=await fetch("/api/documents/convert-pdf",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({documentId:a._id})});if(b.ok){let{pdfUrl:c}=await b.json();return k(b=>b.map(b=>b._id===a._id?{...b,pdfUrl:c}:b)),!0}return!1}catch{return!1}finally{r(b=>({...b,[a._id]:!1}))}},H=async()=>{if(l.length){v(!0),x("idle"),z("");try{let b,c=j.filter(a=>l.includes(a._id));(await Promise.all(c.map(G))).every(Boolean)||z("Some documents failed to convert. They will be skipped.");let d=await fetch("/api/investor-packet",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({propertyId:a,documentIds:l,dealSummary:{propertyAddress:(b=a=>i.find(b=>b.variable===a)?.value||"")("Property_Address"),investorName:b("Investor_Name"),purchasePrice:b("Purchase_Price"),arv:b("ARV"),rehabBudget:b("Rehab_Budget"),holdingCosts:b("Holding_Costs"),closingCosts:b("Closing_Costs"),totalCosts:b("Total_Project_Cost"),estimatedProfit:b("Estimated_Profit"),loanAmount:b("Loan_Amount"),lenderName:b("Lender_Name"),startDate:b("Start_Date"),endDate:b("End_Date"),projectDuration:b("Project_Duration")},name:C})});if(!d.ok){let a=await d.json();throw Error(a.message||"Failed")}let{packet:e}=await d.json();p(a=>[e,...a]),x("success"),m([]),setTimeout(()=>x("idle"),3e3)}catch(a){z(a.message||"Generation failed"),x("error"),setTimeout(()=>{x("idle"),z("")},3500)}finally{v(!1)}}};return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("div",{className:"ip",children:(0,b.jsxs)("div",{className:"ip-card",children:[(0,b.jsxs)("div",{className:"ip-header",onClick:()=>B(a=>!a),children:[(0,b.jsxs)("div",{className:"ip-header-left",children:[(0,b.jsx)("div",{className:"ip-hicon",children:(0,b.jsx)(Q,{})}),(0,b.jsx)("span",{className:"ip-htitle",children:"Investor Packet"}),o.length>0&&(0,b.jsxs)("span",{className:"ip-hbadge",children:[o.length," saved"]})]}),A?(0,b.jsx)(g.ChevronUp,{className:"ip-chevron"}):(0,b.jsx)(f.ChevronDown,{className:"ip-chevron"})]}),A&&(0,b.jsxs)("div",{className:"ip-body",children:[(0,b.jsxs)("div",{className:"ip-name-row",children:[(0,b.jsx)("span",{className:"ip-name-lbl",children:"Packet name"}),(0,b.jsx)("input",{className:"ip-name-input",value:C,onChange:a=>D(a.target.value),placeholder:"Investor Packet"})]}),(0,b.jsxs)("div",{className:"ip-section-hdr",children:[(0,b.jsx)("span",{className:"ip-section-lbl",children:"Select documents"}),j.length>0&&(0,b.jsx)("button",{className:"ip-select-all",onClick:()=>m(l.length===j.length?[]:j.map(a=>a._id)),children:l.length===j.length?"Deselect all":"Select all"})]}),E?(0,b.jsx)("div",{className:"ip-doc-list",children:[void 0,void 0,void 0].map((a,c)=>(0,b.jsx)("div",{className:"ip-skel",style:{height:52}},c))}):0===j.length?(0,b.jsxs)("div",{className:"ip-empty",children:[(0,b.jsx)("div",{className:"ip-empty-ico",children:(0,b.jsx)(e.FileText,{})}),(0,b.jsx)("div",{children:"No documents generated yet."}),(0,b.jsx)("div",{style:{marginTop:4,fontSize:11},children:"Generate documents above first."})]}):(0,b.jsx)("div",{className:"ip-doc-list",children:j.map(a=>{let c=l.includes(a._id),d=q[a._id];return(0,b.jsxs)("div",{className:`ip-doc-item${c?" sel":""}`,onClick:()=>{let b;return b=a._id,m(a=>a.includes(b)?a.filter(a=>a!==b):[...a,b])},children:[c?(0,b.jsx)(S.CheckSquare,{className:"ip-chk on"}):(0,b.jsx)(R,{className:"ip-chk off"}),(0,b.jsx)("div",{className:"ip-doc-ico",children:(0,b.jsx)(e.FileText,{})}),(0,b.jsxs)("div",{className:"ip-doc-info",children:[(0,b.jsx)("div",{className:"ip-doc-name",children:a.fileUrl?.split("/").pop()?.replace(/_v\d+_\d+\.docx$/,"").replace(/_/g," ")||"Document"}),(0,b.jsx)("div",{className:"ip-doc-meta",children:a.createdAt?new Date(a.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"}):""})]}),d?(0,b.jsxs)("span",{className:"ip-converting-badge",children:[(0,b.jsx)(h.Loader2,{})," Converting…"]}):a.pdfUrl?(0,b.jsx)("span",{className:"ip-doc-pdf-badge",children:"PDF ✓"}):null]},a._id)})}),(0,b.jsxs)("div",{className:"ip-footer",children:[l.length>0&&(0,b.jsxs)("span",{className:"ip-sel-count",children:[l.length," doc",l.length>1?"s":""," selected"]}),(0,b.jsx)("button",{className:`ip-gen-btn ${u?"loading":w}`,onClick:H,disabled:u||0===l.length,children:u?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(h.Loader2,{className:"ip-spin"})," Generating…"]}):"success"===w?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(s.CheckCircle,{})," Packet Ready"]}):"error"===w?(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(t.AlertCircle,{})," Failed — Retry"]}):(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)(U.Layers,{})," Generate Investor Packet"]})})]}),"success"===w&&(0,b.jsxs)("div",{className:"ip-toast success",children:[(0,b.jsx)(s.CheckCircle,{})," Investor packet created successfully."]}),"error"===w&&(0,b.jsxs)("div",{className:"ip-toast error",children:[(0,b.jsx)(t.AlertCircle,{})," ",y||"Generation failed. Please try again."]}),o.length>0&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("div",{className:"ip-divider"}),(0,b.jsx)("div",{className:"ip-history-lbl",children:"Saved Packets"}),(0,b.jsx)("div",{className:"ip-packet-list",children:o.map(a=>(0,b.jsxs)("div",{className:"ip-packet-item",children:[(0,b.jsx)("div",{className:"ip-packet-ico",children:(0,b.jsx)(Q,{})}),(0,b.jsxs)("div",{className:"ip-packet-info",children:[(0,b.jsx)("div",{className:"ip-packet-name",children:a.name}),(0,b.jsxs)("div",{className:"ip-packet-meta",children:[new Date(a.createdAt).toLocaleDateString("en-US",{month:"short",day:"numeric",year:"numeric"})," · ",a.documents?.length??0," doc",a.documents?.length!==1?"s":""]})]}),(0,b.jsxs)("span",{className:"ip-packet-ver",children:["v",a.version]}),(0,b.jsxs)("div",{className:"ip-pkt-actions flex gap-4 ",children:[(0,b.jsxs)("a",{href:a.pdfUrl,target:"_blank",rel:"noreferrer",className:"ip-pkt-btn view ",children:[(0,b.jsx)(T.Eye,{})," View"]}),(0,b.jsxs)("a",{href:a.pdfUrl,download:!0,className:"ip-pkt-btn view",children:[(0,b.jsx)(n.Download,{})," Download"]})]})]},a._id))})]})]})]})})]})}function W({setliveVariables:a}){(0,d.useParams)();let[k,l]=(0,c.useState)({}),m=a??(()=>{}),[n,o]=(0,c.useState)([]),[p,r]=(0,c.useState)([]),[s,t]=(0,c.useState)({}),[u,v]=(0,c.useState)(null),[x,y]=(0,c.useState)(null),[z,A]=(0,c.useState)(null),[B,C]=(0,c.useState)(null),[D,E]=(0,c.useState)(""),[F,G]=(0,c.useState)(!0),[H,I]=(0,c.useState)(0);(0,c.useEffect)(()=>{fetch("/api/templates").then(a=>a.json()).then(a=>{o(Array.isArray(a)?a:[]),G(!1)}).catch(()=>G(!1))},[]);let J=async a=>{if(u===a){v(null),r([]),m([]);return}y(a),v(a);let b=await fetch("/api/templates/get-values",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:a})}),c=await b.json();c&&l(b=>({...b,[a]:c}));let d=await fetch(`/api/templates/${a}/variables`),e=await d.json(),f=Array.isArray(e)?e:[];r(f),m(f),y(null)},K=n.filter(a=>a.name?.toLowerCase().includes(D.toLowerCase()));return(0,b.jsxs)("div",{className:"tl",children:[(0,b.jsx)("style",{children:`
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
      `}),(0,b.jsx)("div",{className:"tl-title",children:"Templates"}),(0,b.jsx)("div",{className:"tl-subtitle",children:"Browse templates and map their variables to data fields"}),(0,b.jsxs)("div",{className:"tl-stats",children:[(0,b.jsxs)("div",{className:"tl-stat",children:[(0,b.jsx)("div",{className:"tl-stat-label",children:"Total Templates"}),(0,b.jsx)("div",{className:"tl-stat-value gold",children:F?"—":n.length})]}),(0,b.jsxs)("div",{className:"tl-stat",children:[(0,b.jsx)("div",{className:"tl-stat-label",children:"Active Variables"}),(0,b.jsx)("div",{className:"tl-stat-value purple",children:u?p.length:"—"})]}),(0,b.jsxs)("div",{className:"tl-stat",children:[(0,b.jsx)("div",{className:"tl-stat-label",children:"Mapped"}),(0,b.jsx)("div",{className:"tl-stat-value",children:u?p.filter(a=>a.mappedTo).length:"—"})]})]}),(0,b.jsxs)("div",{className:"tl-search-wrap",children:[(0,b.jsx)(i.Search,{className:"tl-search-icon"}),(0,b.jsx)("input",{type:"text",placeholder:"Search templates…",value:D,onChange:a=>E(a.target.value),className:"tl-search"}),D&&(0,b.jsx)("button",{className:"tl-clear",onClick:()=>E(""),children:(0,b.jsx)(j.X,{})})]}),(0,b.jsx)("div",{className:"tl-list",children:F?[void 0,void 0,void 0,void 0].map((a,c)=>(0,b.jsxs)("div",{className:"tl-row-skel",children:[(0,b.jsx)("div",{className:"skel",style:{width:38,height:38,borderRadius:8,flexShrink:0}}),(0,b.jsx)("div",{className:"skel",style:{flex:1,height:14}}),(0,b.jsx)("div",{className:"skel",style:{width:60,height:20,borderRadius:4}})]},c)):0===K.length?(0,b.jsxs)("div",{className:"tl-empty",children:[(0,b.jsx)("div",{className:"tl-empty-icon",children:D?(0,b.jsx)(i.Search,{}):(0,b.jsx)(e.FileText,{})}),(0,b.jsx)("div",{className:"tl-empty-title",children:D?"No templates match your search":"No templates found"}),(0,b.jsx)("div",{className:"tl-empty-sub",children:D?"Try adjusting your search terms":"Upload a template to get started"})]}):K.map((a,c)=>{let d=u===a._id,i=x===a._id;return(0,b.jsxs)("div",{className:`tl-row${d?" open":""}`,children:[(0,b.jsxs)("div",{className:"tl-row-header",onClick:()=>J(a._id),children:[(0,b.jsx)("div",{className:"tl-row-icon",children:(0,b.jsx)(e.FileText,{})}),(0,b.jsx)("div",{className:"tl-row-name",children:a.name||"Untitled Template"}),d&&(0,b.jsx)("span",{className:"tl-row-badge",children:"Active"}),i?(0,b.jsx)(h.Loader2,{className:"tl-row-chevron tl-spin"}):d?(0,b.jsx)(g.ChevronUp,{className:"tl-row-chevron"}):(0,b.jsx)(f.ChevronDown,{className:"tl-row-chevron"})]}),d&&!i&&(0,b.jsxs)("div",{className:"tl-panel",children:[(0,b.jsx)("div",{className:"tl-sub-divider"}),(0,b.jsxs)("div",{className:"tl-sub-components",children:[(0,b.jsx)(P,{templateId:a._id,propertyId:k[a._id],onSave:b=>{fetch("/api/templates/get-values",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({templateId:a._id,propertyId:b[a._id]})}).then(async a=>await a.json()).then(b=>{b&&l(c=>({...c,[a._id]:b}))}),l(c=>({...c,[a._id]:b[a._id]}))},onValuesChange:b=>t(c=>({...c,[a._id]:b}))},a._id),k[a._id]?(0,b.jsx)(w,{templateId:a._id,propertyId:k[a._id],variables:p,onGenerated:()=>I(a=>a+1)}):(0,b.jsx)(b.Fragment,{}),k[a._id]?(0,b.jsx)(q,{templateId:a._id,propertyId:k[a._id],onDocumentGenerated:()=>I(a=>a+1)},H):(0,b.jsx)(b.Fragment,{})]})]}),k[a._id]&&(0,b.jsx)(V,{templateId:a._id,propertyId:k[a._id],variables:s[a._id]??[]})]},a._id)})})]})}a.s(["default",()=>W],12913)}];

//# sourceMappingURL=realestateandlease_app_templates_list_page_tsx_c242cb51._.js.map