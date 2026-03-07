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
"[project]/realestateandlease/models/ExecutionCost.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const Cost = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"]({
    executionWorkspaceId: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["Schema"].Types.ObjectId,
        ref: "ExecutionWorkspace",
        required: true,
        index: true
    },
    category: {
        type: String,
        required: true
    },
    plannedAmount: {
        type: Number,
        required: true,
        default: 0
    },
    actualAmount: {
        type: Number,
        required: true,
        default: 0
    },
    notes: {
        type: String
    }
}, {
    timestamps: true
});
Cost.virtual("variance").get(function() {
    return this.actualAmount - this.plannedAmount;
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["models"].Cost || (0, __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["model"])("Cost", Cost);
}),
"[project]/realestateandlease/app/api/execution/costs/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionCost$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/ExecutionCost.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
;
;
;
async function POST(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const body = await req.json();
        const { executionWorkspaceId, category, plannedAmount, actualAmount } = body;
        // Validation
        if (!executionWorkspaceId || !category) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                message: "Missing required fields: executionWorkspaceId, category"
            }, {
                status: 400
            });
        }
        // ============================================================
        // ENSURE COLLECTION EXISTS - Run on first creation
        // ============================================================
        try {
            const collections = await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.db?.listCollections().toArray();
            const collectionNames = collections?.map((c)=>c.name) || [];
            // If costs collection doesn't exist, create it
            if (!collectionNames.includes("costs")) {
                console.log("Creating 'costs' collection...");
                await __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].connection.db?.createCollection("costs");
                console.log("✅ 'costs' collection created successfully");
            }
            // Create indexes for performance
            await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionCost$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collection.createIndex({
                executionWorkspaceId: 1
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionCost$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collection.createIndex({
                createdAt: -1
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionCost$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collection.createIndex({
                executionWorkspaceId: 1,
                category: 1
            });
            await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionCost$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].collection.createIndex({
                approvalStatus: 1
            });
        } catch (collectionError) {
            console.error("Error with collection creation:", collectionError);
        // Continue anyway - collection might already exist
        }
        // ============================================================
        // CREATE THE COST DOCUMENT
        // ============================================================
        const newCost = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionCost$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            executionWorkspaceId,
            category,
            plannedAmount: plannedAmount || 0,
            actualAmount: actualAmount || 0
        });
        // Populate the workspace reference before returning
        await newCost.populate("executionWorkspaceId", "stage");
        console.log("✅ Cost created successfully:", newCost._id);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(newCost, {
            status: 201
        });
    } catch (error) {
        console.error("❌ Error creating cost:", error);
        let errorMessage = "Failed to create cost";
        let statusCode = 500;
        if (error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Error.ValidationError) {
            errorMessage = "Validation error: " + Object.values(error.errors).map((e)=>e.message).join(", ");
            statusCode = 400;
        } else if (error instanceof __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Error.CastError) {
            errorMessage = "Invalid ID format";
            statusCode = 400;
        } else if (error instanceof Error) {
            errorMessage = error.message;
        }
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: errorMessage,
            error: ("TURBOPACK compile-time truthy", 1) ? error : "TURBOPACK unreachable"
        }, {
            status: statusCode
        });
    }
}
async function GET(req) {
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const { searchParams } = new URL(req.url);
        const executionWorkspaceId = searchParams.get("executionWorkspaceId");
        const category = searchParams.get("category");
        const approvalStatus = searchParams.get("approvalStatus");
        const filter = {};
        if (executionWorkspaceId) {
            filter.executionWorkspaceId = executionWorkspaceId;
        }
        if (category) {
            filter.category = {
                $regex: category,
                $options: "i"
            };
        }
        if (approvalStatus) {
            filter.approvalStatus = approvalStatus;
        }
        const costs = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionCost$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find(filter).sort({
            createdAt: -1
        }).populate("executionWorkspaceId", "stage").lean();
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(costs, {
            status: 200
        });
    } catch (error) {
        console.error("❌ Error fetching costs:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            message: "Failed to fetch costs"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9478a2f6._.js.map