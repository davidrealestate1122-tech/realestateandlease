module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/realestateandlease/lib/db.js [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "connectDB",
    ()=>connectDB
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const MONGODB_URI = process.env.MONGO_URI;
if (!MONGODB_URI) {
    throw new Error("Please define MONGO_URI in .env.local");
}
let cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose;
if (!cached) {
    cached = /*TURBOPACK member replacement*/ __turbopack_context__.g.mongoose = {
        conn: null,
        promise: null
    };
}
async function connectDB() {
    if (cached.conn) return cached.conn;
    if (!cached.promise) {
        cached.promise = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connect(MONGODB_URI).then((mongoose)=>mongoose);
    }
    cached.conn = await cached.promise;
    return cached.conn;
}
}),
"[project]/realestateandlease/models/InvestorPacket.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const InvestorPacketSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    propertyId: {
        type: String,
        required: true
    },
    name: {
        type: String,
        default: "Investor Packet"
    },
    version: {
        type: Number,
        default: 1
    },
    pdfUrl: {
        type: String
    },
    pdfPath: {
        type: String
    },
    documents: [
        {
            documentId: String,
            fileUrl: String,
            title: String,
            order: Number
        }
    ],
    createdAt: {
        type: Date,
        default: Date.now
    }
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.InvestorPacket || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("InvestorPacket", InvestorPacketSchema);
}),
"[project]/realestateandlease/models/Document.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const DocumentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    templateId: {
        type: String,
        required: true
    },
    propertyId: {
        type: String,
        required: true
    },
    version: {
        type: Number,
        required: true
    },
    fileUrl: {
        type: String
    },
    filePath: {
        type: String
    },
    resolvedVariables: {
        type: Map,
        of: String
    },
    pdfUrl: {
        type: String
    },
    pdfPath: {
        type: String
    },
    status: {
        type: String,
        default: "generated"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});
// Compound index for quick lookup per deal+template
DocumentSchema.index({
    templateId: 1,
    propertyId: 1,
    version: 1
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Document || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Document", DocumentSchema);
}),
"[project]/realestateandlease/app/api/investor-packet/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/pdf-lib/es/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/pdf-lib/es/api/index.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/pdf-lib/es/api/colors.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/pdf-lib/es/api/StandardFonts.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$InvestorPacket$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/InvestorPacket.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Document$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/Document.ts [app-route] (ecmascript)");
;
;
;
;
;
;
;
async function GET(req) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
    const { searchParams } = new URL(req.url);
    const propertyId = searchParams.get("propertyId");
    if (!propertyId) return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json([], {
        status: 200
    });
    try {
        const packets = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$InvestorPacket$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            propertyId
        }).sort({
            version: -1
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(packets);
    } catch (err) {
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed"
        }, {
            status: 500
        });
    }
}
async function POST(req) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
    try {
        const { propertyId, documentIds, dealSummary, name } = await req.json();
        if (!propertyId || !documentIds?.length) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "propertyId and documentIds required"
            }, {
                status: 400
            });
        }
        // 1. Load documents in selected order
        const docs = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Document$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find({
            _id: {
                $in: documentIds
            }
        });
        const orderedDocs = documentIds.map((id)=>docs.find((d)=>String(d._id) === id)).filter(Boolean);
        if (!orderedDocs.length) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "No valid documents found"
            }, {
                status: 400
            });
        }
        // 2. Create merged PDF
        const mergedPdf = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PDFDocument"].create();
        const font = await mergedPdf.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StandardFonts"].Helvetica);
        const boldFont = await mergedPdf.embedFont(__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$StandardFonts$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["StandardFonts"].HelveticaBold);
        // 2a. Deal summary cover page
        const coverPage = mergedPdf.addPage([
            612,
            792
        ]);
        const { width, height } = coverPage.getSize();
        // Dark header bar
        coverPage.drawRectangle({
            x: 0,
            y: height - 90,
            width,
            height: 90,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.07, 0.07, 0.09)
        });
        coverPage.drawText("INVESTOR PACKET", {
            x: 40,
            y: height - 44,
            size: 24,
            font: boldFont,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.77, 0.64, 0.38)
        });
        if (dealSummary.propertyAddress) {
            coverPage.drawText(dealSummary.propertyAddress, {
                x: 40,
                y: height - 66,
                size: 10,
                font,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.65, 0.65, 0.65)
            });
        }
        // Gold divider
        coverPage.drawRectangle({
            x: 40,
            y: height - 96,
            width: 532,
            height: 2,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.77, 0.64, 0.38)
        });
        // Summary fields
        const fields = [
            [
                "Property Address",
                dealSummary.propertyAddress
            ],
            [
                "Investor Name",
                dealSummary.investorName
            ],
            [
                "Purchase Price",
                dealSummary.purchasePrice ? `$${Number(dealSummary.purchasePrice).toLocaleString()}` : ""
            ],
            [
                "ARV",
                dealSummary.arv ? `$${Number(dealSummary.arv).toLocaleString()}` : ""
            ],
            [
                "Rehab Budget",
                dealSummary.rehabBudget ? `$${Number(dealSummary.rehabBudget).toLocaleString()}` : ""
            ],
            [
                "Holding Costs",
                dealSummary.holdingCosts ? `$${Number(dealSummary.holdingCosts).toLocaleString()}` : ""
            ],
            [
                "Closing Costs",
                dealSummary.closingCosts ? `$${Number(dealSummary.closingCosts).toLocaleString()}` : ""
            ],
            [
                "Total Project Cost",
                dealSummary.totalCosts ? `$${Number(dealSummary.totalCosts).toLocaleString()}` : ""
            ],
            [
                "Estimated Profit",
                dealSummary.estimatedProfit ? `$${Number(dealSummary.estimatedProfit).toLocaleString()}` : ""
            ],
            [
                "Loan Amount",
                dealSummary.loanAmount ? `$${Number(dealSummary.loanAmount).toLocaleString()}` : ""
            ],
            [
                "Lender",
                dealSummary.lenderName
            ],
            [
                "Start Date",
                dealSummary.startDate
            ],
            [
                "End Date",
                dealSummary.endDate
            ],
            [
                "Duration",
                dealSummary.projectDuration
            ]
        ].filter(([, v])=>v?.trim());
        // Section title
        let y = height - 124;
        coverPage.drawText("DEAL SUMMARY", {
            x: 40,
            y,
            size: 9,
            font: boldFont,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.77, 0.64, 0.38)
        });
        y -= 18;
        // Field rows with alternating background
        for(let i = 0; i < fields.length; i++){
            const [label, value] = fields[i];
            if (i % 2 === 0) {
                coverPage.drawRectangle({
                    x: 36,
                    y: y - 6,
                    width: 540,
                    height: 20,
                    color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.97, 0.97, 0.97)
                });
            }
            coverPage.drawText(label, {
                x: 44,
                y,
                size: 10,
                font: boldFont,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.35, 0.35, 0.35)
            });
            coverPage.drawText(value, {
                x: 260,
                y,
                size: 10,
                font,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.1, 0.1, 0.1)
            });
            y -= 22;
            if (y < 80) break;
        }
        // Documents included list
        y -= 16;
        coverPage.drawText("DOCUMENTS INCLUDED", {
            x: 40,
            y,
            size: 9,
            font: boldFont,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.77, 0.64, 0.38)
        });
        y -= 16;
        for(let i = 0; i < orderedDocs.length; i++){
            const d = orderedDocs[i];
            const title = d.fileUrl?.split("/").pop()?.replace(/_v\d+_\d+\.docx$/, "") || `Document ${i + 1}`;
            coverPage.drawText(`${i + 1}.  ${title}`, {
                x: 44,
                y,
                size: 10,
                font,
                color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.25, 0.25, 0.25)
            });
            y -= 18;
            if (y < 60) break;
        }
        // Footer
        coverPage.drawRectangle({
            x: 0,
            y: 0,
            width,
            height: 40,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.07, 0.07, 0.09)
        });
        coverPage.drawText(`Generated ${new Date().toLocaleDateString("en-US", {
            month: "long",
            day: "numeric",
            year: "numeric"
        })}`, {
            x: 40,
            y: 14,
            size: 9,
            font,
            color: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$colors$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["rgb"])(0.5, 0.5, 0.5)
        });
        // 2b. Merge each document PDF (must already be converted)
        const skipped = [];
        for (const doc of orderedDocs){
            const pdfPath = doc.pdfPath ?? (doc.pdfUrl ? __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", doc.pdfUrl) : null);
            if (!pdfPath || !(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(pdfPath)) {
                skipped.push(doc._id);
                continue;
            }
            try {
                const pdfBytes = (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["readFileSync"])(pdfPath);
                const srcPdf = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$pdf$2d$lib$2f$es$2f$api$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["PDFDocument"].load(pdfBytes);
                const pages = await mergedPdf.copyPages(srcPdf, srcPdf.getPageIndices());
                pages.forEach((p)=>mergedPdf.addPage(p));
            } catch (e) {
                console.warn(`[investor-packet] Skipping doc ${doc._id}:`, e);
                skipped.push(doc._id);
            }
        }
        // 3. Save merged PDF to disk
        const packetBytes = await mergedPdf.save();
        const packetDir = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "public", "packets", propertyId);
        if (!(0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["existsSync"])(packetDir)) (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["mkdirSync"])(packetDir, {
            recursive: true
        });
        const existingCount = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$InvestorPacket$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].countDocuments({
            propertyId
        });
        const version = existingCount + 1;
        const filename = `investor-packet-v${version}-${Date.now()}.pdf`;
        const pdfPath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(packetDir, filename);
        const pdfUrl = `/packets/${propertyId}/${filename}`;
        (0, __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["writeFileSync"])(pdfPath, packetBytes);
        // 4. Save to DB
        const packet = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$InvestorPacket$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            propertyId,
            name: name || `Investor Packet v${version}`,
            version,
            pdfUrl,
            pdfPath,
            documents: orderedDocs.map((d, i)=>({
                    documentId: String(d._id),
                    fileUrl: d.fileUrl,
                    title: d.fileUrl?.split("/").pop()?.replace(/_v\d+_\d+\.docx$/, "") || `Document ${i + 1}`,
                    order: i
                }))
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            packet,
            skipped: skipped.length ? skipped : undefined
        });
    } catch (err) {
        console.error("[investor-packet]", err);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed to generate packet",
            error: err.message
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3ef7889e._.js.map