(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/realestateandlease/app/templates/[id]/page.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TemplatePage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
function TemplatePage({ params }) {
    _s();
    const [data, setData] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])({});
    const [docs, setDocs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const propertyId = "698250b3eacd04e2ddcd61c4";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TemplatePage.useEffect": ()=>{
            fetch(`/api/templates/${params.id}/values?propertyId=${propertyId}`).then({
                "TemplatePage.useEffect": (res)=>res.json()
            }["TemplatePage.useEffect"]).then(setData);
            fetch(`/api/documents?propertyId=${propertyId}&templateId=${params.id}`).then({
                "TemplatePage.useEffect": (res)=>res.json()
            }["TemplatePage.useEffect"]).then(setDocs);
        }
    }["TemplatePage.useEffect"], []);
    const save = async ()=>{
        await fetch("/api/deal-data", {
            method: "POST",
            body: JSON.stringify({
                propertyId,
                data
            })
        });
        alert("Saved");
    };
    const generate = async ()=>{
        const res = await fetch("/api/documents/generate", {
            method: "POST",
            body: JSON.stringify({
                templateId: params.id,
                propertyId
            })
        });
        const result = await res.json();
        alert("Generated");
        window.open(result.file);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                className: "text-xl font-bold mb-4",
                children: "Template"
            }, void 0, false, {
                fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            Object.keys(data).map((key)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "mb-2",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                            children: key
                        }, void 0, false, {
                            fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                            lineNumber: 51,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                            value: data[key] || "",
                            onChange: (e)=>setData({
                                    ...data,
                                    [key]: e.target.value
                                }),
                            className: "border px-2 ml-2"
                        }, void 0, false, {
                            fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                            lineNumber: 52,
                            columnNumber: 11
                        }, this)
                    ]
                }, key, true, {
                    fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                    lineNumber: 50,
                    columnNumber: 9
                }, this)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-4 flex gap-3",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: save,
                        className: "bg-blue-500 text-white px-4 py-2",
                        children: "Save"
                    }, void 0, false, {
                        fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                        lineNumber: 64,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: generate,
                        className: "bg-green-500 text-white px-4 py-2",
                        children: "Generate Document"
                    }, void 0, false, {
                        fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                        lineNumber: 68,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                lineNumber: 63,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                        className: "font-bold",
                        children: "Generated Documents"
                    }, void 0, false, {
                        fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                        lineNumber: 75,
                        columnNumber: 9
                    }, this),
                    docs.map((doc)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                href: doc.fileUrl,
                                target: "_blank",
                                children: [
                                    "Version ",
                                    doc.version
                                ]
                            }, void 0, true, {
                                fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                                lineNumber: 79,
                                columnNumber: 13
                            }, this)
                        }, doc._id, false, {
                            fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                            lineNumber: 78,
                            columnNumber: 11
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
                lineNumber: 74,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/realestateandlease/app/templates/[id]/page.tsx",
        lineNumber: 44,
        columnNumber: 5
    }, this);
}
_s(TemplatePage, "RC9WqUxFLtsf7GrKEVXV7kTmi5k=");
_c = TemplatePage;
var _c;
__turbopack_context__.k.register(_c, "TemplatePage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=realestateandlease_app_templates_%5Bid%5D_page_tsx_3da7dfdb._.js.map