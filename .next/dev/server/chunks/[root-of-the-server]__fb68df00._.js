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
"[project]/realestateandlease/app/api/execution/contractors/[id]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DELETE",
    ()=>DELETE,
    "GET",
    ()=>GET,
    "PATCH",
    ()=>PATCH
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/ExecutionContractor.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/server.js [app-route] (ecmascript)");
;
;
;
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
            data: contractor
        });
    } catch (error) {
        console.error("GET Contractor Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to fetch contractor"
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
        // Handle SOW Status Transitions with validation
        if (body.sowStatus && body.sowStatus !== contractor.sowStatus) {
            const allowedTransitions = {
                DRAFT: [
                    "SENT"
                ],
                SENT: [
                    "SIGNED",
                    "DRAFT"
                ],
                SIGNED: [
                    "ACTIVE",
                    "SENT"
                ],
                ACTIVE: [
                    "COMPLETED",
                    "SIGNED"
                ],
                COMPLETED: [
                    "ACTIVE"
                ],
                TERMINATED: [
                    "DRAFT"
                ]
            };
            if (!allowedTransitions[contractor.sowStatus]?.includes(body.sowStatus)) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: `Cannot transition from ${contractor.sowStatus} to ${body.sowStatus}`
                }, {
                    status: 400
                });
            }
            contractor.sowStatus = body.sowStatus;
        }
        // Handle payment schedule update with custom milestones
        if (body.paymentSchedule && body.paymentSchedule.length > 0) {
            console.log("📝 Updating with custom payment milestones");
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
            // Use the budget from the update if provided, otherwise use existing
            const budgetForCalculation = body.sowBudget || contractor.sowBudget;
            // Build updated payment schedule
            const updatedPaymentSchedule = body.paymentSchedule.map((m)=>{
                // If milestone already has _id, preserve it (it's an existing milestone being updated)
                return {
                    ...m._id && {
                        _id: m._id
                    },
                    milestone: m.milestone || "Payment",
                    percentage: m.percentage,
                    amount: Math.round(budgetForCalculation * m.percentage / 100),
                    status: m.status || "PENDING",
                    paidDate: m.paidDate || undefined
                };
            });
            contractor.paymentSchedule = updatedPaymentSchedule;
        }
        // Update scope items if provided
        if (body.scopeItems) {
            contractor.scopeItems = body.scopeItems;
        }
        // Update paid amount
        if (body.sowPaidToDate !== undefined) {
            if (body.sowPaidToDate > contractor.sowBudget) {
                return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Paid amount exceeds budget"
                }, {
                    status: 400
                });
            }
            contractor.sowPaidToDate = body.sowPaidToDate;
        }
        // Update other fields (NOW INCLUDING sowBudget - NOT DISABLED)
        if (body.name) contractor.name = body.name;
        if (body.email !== undefined) contractor.email = body.email;
        if (body.phone !== undefined) contractor.phone = body.phone;
        if (body.address !== undefined) contractor.address = body.address;
        if (body.state !== undefined) contractor.state = body.state;
        if (body.licenseNumber !== undefined) contractor.licenseNumber = body.licenseNumber;
        // IMPORTANT: sowBudget is now updatable
        if (body.sowBudget && body.sowBudget > 0) {
            console.log(`💰 Updating budget from $${contractor.sowBudget} to $${body.sowBudget}`);
            // If budget is updated, recalculate payment schedule amounts if not provided
            if (!body.paymentSchedule && contractor.paymentSchedule.length > 0) {
                contractor.paymentSchedule.forEach((payment)=>{
                    payment.amount = Math.round(body.sowBudget * payment.percentage / 100);
                });
            }
            contractor.sowBudget = body.sowBudget;
        }
        if (body.sowStartDate) contractor.sowStartDate = body.sowStartDate;
        if (body.sowCompletionDate) contractor.sowCompletionDate = body.sowCompletionDate;
        if (body.notes !== undefined) contractor.notes = body.notes;
        if (body.isActive !== undefined) contractor.isActive = body.isActive;
        await contractor.save();
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: contractor
        });
    } catch (error) {
        console.error("PATCH Contractor Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to update contractor"
        }, {
            status: 500
        });
    }
}
async function DELETE(req, context) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const params = await context.params;
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findByIdAndDelete(params.id);
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
            message: "Contractor deleted successfully"
        });
    } catch (error) {
        console.error("DELETE Contractor Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to delete contractor"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__fb68df00._.js.map