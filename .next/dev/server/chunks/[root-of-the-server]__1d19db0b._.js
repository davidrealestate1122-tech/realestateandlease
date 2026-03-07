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
"[project]/realestateandlease/app/api/execution/contractors/[id]/scope/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FILE: /app/api/execution/contractors/[id]/scope/route.ts
 * Manage scope items
 */ __turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/ExecutionContractor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
async function POST(req, context) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const body = await req.json();
        const params = await context.params;
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(params.id);
        if (!contractor) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Contractor not found"
            }, {
                status: 404
            });
        }
        // Validate scope item
        if (!body.category) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Category required"
            }, {
                status: 400
            });
        }
        // Check if category already exists
        const exists = contractor.scopeItems.some((item)=>item.category === body.category);
        if (exists) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Category already exists"
            }, {
                status: 400
            });
        }
        contractor.scopeItems.push({
            category: body.category,
            description: body.description || "",
            status: "PENDING"
        });
        await contractor.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: contractor
        }, {
            status: 201
        });
    } catch (error) {
        console.error("POST Scope Item Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to add scope item"
        }, {
            status: 500
        });
    }
}
async function PATCH(req, context) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const body = await req.json();
        const params = await context.params;
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(params.id);
        if (!contractor) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Contractor not found"
            }, {
                status: 404
            });
        }
        // Validate scope item ID
        if (!body.scopeItemId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Scope item ID required"
            }, {
                status: 400
            });
        }
        // Find and update scope item
        const item = contractor.scopeItems.id(body.scopeItemId);
        if (!item) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Scope item not found"
            }, {
                status: 404
            });
        }
        if (body.status) {
            // Validate status
            if (![
                "PENDING",
                "IN_PROGRESS",
                "COMPLETED"
            ].includes(body.status)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Invalid status value"
                }, {
                    status: 400
                });
            }
            item.status = body.status;
        }
        if (body.description) {
            item.description = body.description;
        }
        await contractor.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: contractor
        });
    } catch (error) {
        console.error("PATCH Scope Item Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to update scope item"
        }, {
            status: 500
        });
    }
}
async function GET(req, context) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const params = await context.params;
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(params.id);
        if (!contractor) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Contractor not found"
            }, {
                status: 404
            });
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: contractor.scopeItems
        });
    } catch (error) {
        console.error("GET Scope Items Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to fetch scope items"
        }, {
            status: 500
        });
    }
}
async function DELETE(req, context) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const body = await req.json();
        const params = await context.params;
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(params.id);
        if (!contractor) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Contractor not found"
            }, {
                status: 404
            });
        }
        if (!body.scopeItemId) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Scope item ID required"
            }, {
                status: 400
            });
        }
        contractor.scopeItems.id(body.scopeItemId).deleteOne();
        await contractor.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            message: "Scope item deleted",
            data: contractor
        });
    } catch (error) {
        console.error("DELETE Scope Item Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to delete scope item"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1d19db0b._.js.map