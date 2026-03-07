module.exports = [
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/realestateandlease/app/layout.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/realestateandlease/app/layout.tsx [app-rsc] (ecmascript)"));
}),
"[externals]/mongoose [external] (mongoose, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("mongoose", () => require("mongoose"));

module.exports = mod;
}),
"[project]/realestateandlease/lib/db.js [app-rsc] (ecmascript)", ((__turbopack_context__) => {
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
"[project]/realestateandlease/models/Property.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const schema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    externalId: String,
    address: String,
    city: String,
    state: String,
    zip: String
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Property || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Property", schema);
}),
"[project]/realestateandlease/models/Phase1Snapshot.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const schema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    propertyId: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
    arv: Object,
    costs: Object,
    negativeFactors: [
        String
    ],
    evaluatedAt: Date
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Phase1Snapshot || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Phase1Snapshot", schema);
}),
"[project]/realestateandlease/models/ExecutionWorkspace.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const schema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    propertyId: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
    stage: {
        type: String,
        enum: [
            "DUE_DILIGENCE",
            "BIDDING",
            "REHAB",
            "CLOSING"
        ],
        default: "DUE_DILIGENCE"
    },
    executionCosts: Object
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.ExecutionWorkspace || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("ExecutionWorkspace", schema);
}),
"[project]/realestateandlease/models/DueDiligenceItem.ts [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const schema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    executionWorkspaceId: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.ObjectId,
    label: String,
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: Date
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.DueDiligenceItem || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("DueDiligenceItem", schema);
}),
"[project]/realestateandlease/app/execution/[propertyId]/page.tsx [app-rsc] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "OPTIONS",
    ()=>OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/server.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/db.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Property$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/Property.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Phase1Snapshot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/Phase1Snapshot.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionWorkspace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/ExecutionWorkspace.ts [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$DueDiligenceItem$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/DueDiligenceItem.ts [app-rsc] (ecmascript)");
;
;
;
;
;
;
// Request validation helpers
const isValidMongoId = (id)=>{
    return /^[0-9a-fA-F]{24}$/.test(id);
};
async function GET(request, { params }) {
    try {
        // Validate propertyId parameter
        if (!params?.propertyId || typeof params.propertyId !== "string") {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid request",
                message: "Missing or invalid propertyId parameter",
                code: "INVALID_PROPERTY_ID"
            }, {
                status: 400
            });
        }
        // Validate MongoDB ObjectId format
        if (!isValidMongoId(params.propertyId)) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Invalid format",
                message: "propertyId must be a valid MongoDB ID",
                code: "INVALID_MONGO_ID"
            }, {
                status: 400
            });
        }
        // Connect to database
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["connectDB"])();
        // Fetch property - return 404 if not found
        const property = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Property$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findById(params.propertyId).lean();
        if (!property) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Not found",
                message: "Property not found in database",
                code: "PROPERTY_NOT_FOUND"
            }, {
                status: 404
            });
        }
        // Fetch related data in parallel for better performance
        const [phase1, workspace] = await Promise.all([
            __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Phase1Snapshot$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
                propertyId: params.propertyId
            }).lean(),
            __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$ExecutionWorkspace$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].findOne({
                propertyId: params.propertyId
            }).lean()
        ]);
        // Fetch checklist items only if workspace exists
        let checklist = [];
        if (workspace?._id) {
            checklist = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$DueDiligenceItem$2e$ts__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"].find({
                executionWorkspaceId: workspace._id
            }).sort({
                createdAt: 1
            }).lean();
        }
        // Format checklist items
        const formattedChecklist = checklist.map((item)=>({
                _id: item._id,
                label: item.label,
                completed: item.completed,
                notes: item.notes || undefined,
                dueDate: item.dueDate || undefined
            }));
        // SIMPLIFIED RESPONSE FORMAT - Compatible with frontend
        const responseData = {
            property: {
                _id: property._id,
                address: property.address,
                city: property.city,
                state: property.state,
                zipCode: property.zipCode,
                createdAt: property.createdAt,
                updatedAt: property.updatedAt
            },
            phase1: phase1 || null,
            workspace: workspace ? {
                _id: workspace._id,
                stage: workspace.stage,
                createdAt: workspace.createdAt,
                updatedAt: workspace.updatedAt
            } : null,
            checklist: formattedChecklist
        };
        // Set cache headers for GET requests (5 minutes)
        const headers = new Headers();
        headers.set("Cache-Control", "private, max-age=300");
        headers.set("Content-Type", "application/json");
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json(responseData, {
            status: 200,
            headers
        });
    } catch (error) {
        console.error("[EXECUTION_DETAIL_GET_ERROR]", error);
        // Handle MongoDB connection errors
        if (error instanceof Error && error.message.includes("MongoDB")) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
                error: "Database error",
                message: "Failed to connect to database",
                code: "DATABASE_CONNECTION_ERROR"
            }, {
                status: 503
            });
        }
        // Handle unexpected errors
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({
            error: "Internal server error",
            message: "An unexpected error occurred while fetching property details",
            code: "INTERNAL_SERVER_ERROR"
        }, {
            status: 500
        });
    }
}
async function OPTIONS(request) {
    return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["NextResponse"].json({}, {
        status: 200
    });
}
}),
"[project]/realestateandlease/app/execution/[propertyId]/page.tsx [app-rsc] (ecmascript, Next.js Server Component)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/realestateandlease/app/execution/[propertyId]/page.tsx [app-rsc] (ecmascript)"));
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__e6408bc1._.js.map