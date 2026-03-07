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
"[project]/realestateandlease/models/ExecutionContractor.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const ScopeItemSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    category: {
        type: String,
        enum: [
            "DEMO",
            "WINDOWS",
            "LANDSCAPING",
            "EXTERIOR",
            "INTERIOR",
            "FLOORING",
            "DOORS",
            "ELECTRICAL",
            "PLUMBING",
            "HVAC",
            "BATHROOMS",
            "KITCHEN",
            "ROOF",
            "GARAGE",
            "PERMITS",
            "FINAL"
        ]
    },
    description: String,
    status: {
        type: String,
        enum: [
            "PENDING",
            "IN_PROGRESS",
            "COMPLETED"
        ],
        default: "PENDING"
    }
}, {
    timestamps: true
});
const PaymentMilestoneSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    milestone: String,
    percentage: Number,
    amount: Number,
    status: {
        type: String,
        enum: [
            "PENDING",
            "INVOICED",
            "PAID"
        ],
        default: "PENDING"
    },
    paidDate: Date
}, {
    timestamps: true
});
const ExecutionContractorSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    // Property Reference
    propertyId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "Property",
        required: true
    },
    executionWorkspaceId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
        ref: "ExecutionWorkspace"
    },
    // Basic Contractor Info (from SOW Agreement)
    name: String,
    email: String,
    phone: String,
    address: String,
    state: String,
    licenseNumber: String,
    // SOW Status Workflow
    sowStatus: {
        type: String,
        enum: [
            "DRAFT",
            "SENT",
            "SIGNED",
            "ACTIVE",
            "COMPLETED",
            "TERMINATED"
        ],
        default: "DRAFT"
    },
    // Timeline
    sowStartDate: Date,
    sowCompletionDate: Date,
    // Budget & Payment
    sowBudget: {
        type: Number,
        default: 0
    },
    sowPaidToDate: {
        type: Number,
        default: 0
    },
    // Scope Items (mapped from SOW categories)
    scopeItems: [
        ScopeItemSchema
    ],
    // Payment Schedule (5 milestone payments: 20%, 40%, 60%, 80%, 100%)
    paymentSchedule: [
        PaymentMilestoneSchema
    ],
    // Additional Notes
    notes: String,
    documents: [
        String
    ],
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
// Index for queries
ExecutionContractorSchema.index({
    propertyId: 1
});
ExecutionContractorSchema.index({
    executionWorkspaceId: 1
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.ExecutionContractor || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("ExecutionContractor", ExecutionContractorSchema);
}),
"[externals]/next/dist/server/app-render/after-task-async-storage.external.js [external] (next/dist/server/app-render/after-task-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/after-task-async-storage.external.js", () => require("next/dist/server/app-render/after-task-async-storage.external.js"));

module.exports = mod;
}),
"[project]/realestateandlease/app/api/execution/contractors/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/ExecutionContractor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const body = await req.json();
        // Validate required fields
        if (!body.propertyId && !body.executionWorkspaceId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Property ID or Workspace ID required"
            }, {
                status: 400
            });
        }
        if (!body.name) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Contractor name required"
            }, {
                status: 400
            });
        }
        if (!body.sowBudget || body.sowBudget <= 0) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "SOW Budget must be greater than 0"
            }, {
                status: 400
            });
        }
        // Handle payment schedule
        let paymentSchedule = [];
        if (body.paymentSchedule && body.paymentSchedule.length > 0) {
            // Use custom milestones provided by user
            console.log("📝 Using custom payment milestones");
            // Validate percentages add up to 100
            const totalPercentage = body.paymentSchedule.reduce((sum, m)=>sum + (m.percentage || 0), 0);
            if (totalPercentage !== 100) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: `Payment percentages must add up to 100% (currently ${totalPercentage}%)`
                }, {
                    status: 400
                });
            }
            // Build payment schedule with amounts
            paymentSchedule = body.paymentSchedule.map((m)=>({
                    milestone: m.milestone || "Payment",
                    percentage: m.percentage,
                    amount: Math.round(body.sowBudget * m.percentage / 100),
                    status: "PENDING"
                }));
        } else {
            // Auto-create default milestones if none provided
            console.log("📝 Using default payment milestones");
            const budget = body.sowBudget;
            paymentSchedule = [
                {
                    milestone: "First",
                    percentage: 20,
                    amount: Math.round(budget * 0.2),
                    status: "PENDING"
                },
                {
                    milestone: "Second",
                    percentage: 40,
                    amount: Math.round(budget * 0.4),
                    status: "PENDING"
                },
                {
                    milestone: "Third",
                    percentage: 60,
                    amount: Math.round(budget * 0.6),
                    status: "PENDING"
                },
                {
                    milestone: "Fourth",
                    percentage: 80,
                    amount: Math.round(budget * 0.8),
                    status: "PENDING"
                },
                {
                    milestone: "Final",
                    percentage: 100,
                    amount: Math.round(budget * 1.0),
                    status: "PENDING"
                }
            ];
        }
        // Initialize scope items from all SOW categories
        let scopeItems = body.scopeItems || [];
        if (scopeItems.length === 0) {
            const categories = [
                "DEMO",
                "WINDOWS",
                "LANDSCAPING",
                "EXTERIOR",
                "INTERIOR",
                "FLOORING",
                "DOORS",
                "ELECTRICAL",
                "PLUMBING",
                "HVAC",
                "BATHROOMS",
                "KITCHEN",
                "ROOF",
                "GARAGE",
                "PERMITS",
                "FINAL"
            ];
            scopeItems = categories.map((cat)=>({
                    category: cat,
                    description: "",
                    status: "PENDING"
                }));
        }
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            propertyId: body.propertyId || body.executionWorkspaceId,
            executionWorkspaceId: body.executionWorkspaceId,
            name: body.name,
            email: body.email,
            phone: body.phone,
            address: body.address,
            state: body.state,
            licenseNumber: body.licenseNumber,
            sowBudget: body.sowBudget || 0,
            sowStartDate: body.sowStartDate,
            sowCompletionDate: body.sowCompletionDate,
            sowStatus: "DRAFT",
            sowPaidToDate: 0,
            paymentSchedule,
            scopeItems,
            notes: body.notes,
            isActive: true
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: contractor
        }, {
            status: 201
        });
    } catch (error) {
        console.error("POST Contractor Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to create contractor"
        }, {
            status: 500
        });
    }
}
async function GET(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const { searchParams } = new URL(req.url);
        const propertyId = searchParams.get("propertyId");
        const workspaceId = searchParams.get("workspaceId");
        const query = {};
        if (propertyId) {
            query.propertyId = propertyId;
        }
        if (workspaceId) {
            query.executionWorkspaceId = workspaceId;
        }
        const contractors = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(query).lean();
        const contractorsWithStatus = contractors.map((contractor)=>{
            const paymentSchedule = contractor.paymentSchedule ?? [];
            const scopeItems = contractor.scopeItems ?? [];
            const allPaid = paymentSchedule.length > 0 && paymentSchedule.every((item)=>item.status === "PAID");
            const allTAskDone = scopeItems.length > 0 && scopeItems.every((s)=>s.status === "COMPLETED");
            const budgetsEqual = contractor.sowBudget != null && contractor.sowPaidToDate != null && contractor.sowBudget === contractor.sowPaidToDate;
            const sowStatus = allPaid && allTAskDone && budgetsEqual ? "COMPLETED" : "DRAFT";
            return {
                ...contractor,
                sowStatus
            };
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: contractorsWithStatus
        });
    } catch (error) {
        console.error("GET Contractors Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to fetch contractors"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__ec310d37._.js.map