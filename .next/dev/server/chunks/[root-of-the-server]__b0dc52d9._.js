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
"[project]/realestateandlease/app/api/execution/contractors/[id]/payment/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * FILE: /app/api/execution/contractors/[id]/payment/route.ts
 * FIXED WITH COMPREHENSIVE DEBUGGING
 */ __turbopack_context__.s([
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
async function PATCH(req, context) {
    try {
        console.log("\n" + "=".repeat(50));
        console.log("🔵 PATCH Payment API - Request Started");
        console.log("=".repeat(50));
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const body = await req.json();
        const params = await context.params;
        const contractorId = params.id;
        console.log("📝 Request Details:");
        console.log("  - Contractor ID:", contractorId);
        console.log("  - Body:", JSON.stringify(body, null, 2));
        // ===== VALIDATION 1: Contractor ID =====
        if (!contractorId || contractorId.length !== 24) {
            console.log("❌ VALIDATION FAILED: Invalid contractor ID format");
            console.log("  - Expected: 24-character MongoDB ID");
            console.log("  - Received:", contractorId);
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Invalid contractor ID format",
                details: {
                    expected: "24-character MongoDB ObjectId",
                    received: contractorId,
                    receivedLength: contractorId ? contractorId.length : 0
                }
            }, {
                status: 400
            });
        }
        // ===== VALIDATION 2: Fetch Contractor =====
        console.log("🔍 Fetching contractor from database...");
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(contractorId);
        if (!contractor) {
            console.log("❌ VALIDATION FAILED: Contractor not found");
            console.log("  - ID:", contractorId);
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Contractor not found",
                contractorId: contractorId
            }, {
                status: 404
            });
        }
        console.log("✅ Contractor found:", contractor.name);
        console.log("  - Current paid: $" + contractor.sowPaidToDate);
        console.log("  - Budget: $" + contractor.sowBudget);
        console.log("  - Payments:", contractor.paymentSchedule.length);
        // ===== VALIDATION 3: Payment ID Required =====
        if (!body.paymentId) {
            console.log("❌ VALIDATION FAILED: Missing paymentId");
            console.log("📋 Available payment IDs:");
            contractor.paymentSchedule.forEach((p, idx)=>{
                console.log(`  ${idx + 1}. ${p._id} - ${p.milestone} (${p.percentage}%) - $${p.amount} - ${p.status}`);
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Payment ID required",
                availablePayments: contractor.paymentSchedule.map((p)=>({
                        id: p._id.toString(),
                        milestone: p.milestone,
                        percentage: p.percentage,
                        amount: p.amount,
                        status: p.status
                    }))
            }, {
                status: 400
            });
        }
        console.log("📍 Looking for payment ID:", body.paymentId);
        // ===== VALIDATION 4: Find Payment Milestone =====
        const milestone = contractor.paymentSchedule.id(body.paymentId);
        if (!milestone) {
            console.log("❌ VALIDATION FAILED: Payment milestone not found");
            console.log("📋 Available payment IDs in system:");
            contractor.paymentSchedule.forEach((p)=>{
                console.log(`  - ${p._id.toString()} (${p.milestone})`);
            });
            console.log("❌ Requested ID does not exist:", body.paymentId);
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Payment milestone not found",
                requestedId: body.paymentId,
                availableIds: contractor.paymentSchedule.map((p)=>p._id.toString())
            }, {
                status: 404
            });
        }
        console.log("✅ Payment milestone found!");
        console.log(`  - Milestone: ${milestone.milestone}`);
        console.log(`  - Amount: $${milestone.amount}`);
        console.log(`  - Current status: ${milestone.status}`);
        console.log(`  - Percentage: ${milestone.percentage}%`);
        // ===== VALIDATION 5: Status Update =====
        if (body.status === "PAID") {
            console.log("\n📊 Processing PAID status...");
            console.log("  - Current sowPaidToDate: $" + contractor.sowPaidToDate);
            console.log("  - Adding milestone amount: $" + milestone.amount);
            const newTotal = contractor.sowPaidToDate + milestone.amount;
            console.log("  - New total would be: $" + newTotal);
            console.log("  - Budget: $" + contractor.sowBudget);
            console.log("  - Remaining budget: $" + (contractor.sowBudget - newTotal));
            // Check if milestone is already paid
            if (milestone.status === "PAID") {
                console.log("⚠️  WARNING: This payment is already marked as PAID");
                console.log("  - Paid date:", milestone.paidDate);
                return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Payment is already marked as PAID",
                    paidDate: milestone.paidDate
                }, {
                    status: 400
                });
            }
            // Validate budget
            if (newTotal > contractor.sowBudget) {
                console.log("❌ VALIDATION FAILED: Payment exceeds budget!");
                console.log(`  - Would exceed by: $${newTotal - contractor.sowBudget}`);
                return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                    success: false,
                    message: "Payment exceeds budget",
                    details: {
                        milestoneAmount: milestone.amount,
                        currentPaid: contractor.sowPaidToDate,
                        wouldTotal: newTotal,
                        budget: contractor.sowBudget,
                        exceedsBy: newTotal - contractor.sowBudget
                    }
                }, {
                    status: 400
                });
            }
            console.log("✅ Budget check passed!");
            // Update milestone
            milestone.status = "PAID";
            milestone.paidDate = new Date();
            contractor.sowPaidToDate = newTotal;
            console.log("  - Updated status: PAID");
            console.log("  - Updated paid date:", milestone.paidDate);
            console.log("  - Updated sowPaidToDate: $" + contractor.sowPaidToDate);
        } else {
            // Update to other status
            console.log("📊 Updating status to:", body.status || "PENDING");
            milestone.status = body.status || "PENDING";
        }
        // ===== SAVE TO DATABASE =====
        console.log("\n💾 Saving contractor to database...");
        await contractor.save();
        console.log("✅ Contractor saved successfully!");
        console.log("\n" + "=".repeat(50));
        console.log("🟢 SUCCESS - Payment updated successfully");
        console.log("=".repeat(50) + "\n");
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: contractor,
            message: "Payment updated successfully",
            updatedPayment: {
                milestone: milestone.milestone,
                status: milestone.status,
                paidDate: milestone.paidDate,
                amount: milestone.amount
            }
        }, {
            status: 200
        });
    } catch (error) {
        console.error("\n" + "=".repeat(50));
        console.error("🔴 ERROR - Exception caught");
        console.error("=".repeat(50));
        console.error("Error type:", error instanceof Error ? error.constructor.name : "Unknown");
        console.error("Message:", error instanceof Error ? error.message : error);
        console.error("Stack:", error instanceof Error ? error.stack : "No stack trace");
        console.error("=".repeat(50) + "\n");
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to update payment",
            error: error instanceof Error ? error.message : "Unknown error",
            errorType: error instanceof Error ? error.constructor.name : "Unknown"
        }, {
            status: 500
        });
    }
}
async function GET(req, context) {
    try {
        console.log("\n" + "=".repeat(50));
        console.log("🔵 GET Payment Schedule - Request Started");
        console.log("=".repeat(50));
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const params = await context.params;
        const contractorId = params.id;
        console.log("🔍 Fetching contractor:", contractorId);
        const contractor = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionContractor$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].findById(contractorId);
        if (!contractor) {
            console.log("❌ Contractor not found");
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                success: false,
                message: "Contractor not found"
            }, {
                status: 404
            });
        }
        console.log("✅ Contractor found:", contractor.name);
        console.log("📋 Payment Schedule:");
        console.log(`  - Total payments: ${contractor.paymentSchedule.length}`);
        console.log(`  - Total budget: $${contractor.sowBudget}`);
        console.log(`  - Total paid: $${contractor.sowPaidToDate}`);
        console.log(`  - Remaining: $${contractor.sowBudget - contractor.sowPaidToDate}`);
        console.log("\n  Details:");
        contractor.paymentSchedule.forEach((payment, idx)=>{
            console.log(`  ${idx + 1}. ${payment.milestone}`);
            console.log(`     - ID: ${payment._id.toString()}`);
            console.log(`     - Amount: $${payment.amount} (${payment.percentage}%)`);
            console.log(`     - Status: ${payment.status}`);
            if (payment.paidDate) {
                console.log(`     - Paid Date: ${payment.paidDate}`);
            }
        });
        console.log("\n" + "=".repeat(50));
        console.log("🟢 SUCCESS - Payment schedule retrieved");
        console.log("=".repeat(50) + "\n");
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: true,
            data: {
                contractor: {
                    id: contractor._id,
                    name: contractor.name,
                    sowBudget: contractor.sowBudget,
                    sowPaidToDate: contractor.sowPaidToDate
                },
                paymentSchedule: contractor.paymentSchedule.map((p)=>({
                        id: p._id.toString(),
                        milestone: p.milestone,
                        percentage: p.percentage,
                        amount: p.amount,
                        status: p.status,
                        paidDate: p.paidDate
                    }))
            }
        }, {
            status: 200
        });
    } catch (error) {
        console.error("🔴 GET Payment Error:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            success: false,
            message: "Failed to fetch payments",
            error: error instanceof Error ? error.message : "Unknown error"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__b0dc52d9._.js.map