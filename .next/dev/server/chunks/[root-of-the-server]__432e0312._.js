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
"[project]/realestateandlease/models/Deal.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const SubjectPropertySchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    address: String,
    neighborhoodId: String,
    squareFeet: Number,
    yearBuilt: Number,
    beds: Number,
    baths: Number,
    propertyType: String,
    hasGarage: Boolean,
    isBusyStreet: Boolean
});
const CompSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    address: String,
    soldPrice: Number,
    soldDate: Date,
    squareFeet: Number,
    yearBuilt: Number,
    distanceMiles: Number,
    neighborhoodId: String,
    eligibility: {
        included: Boolean,
        exclusionReasons: [
            String
        ]
    }
});
const CalculatorSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    purchasePrice: Number,
    closingCosts: Number,
    holdingCosts: Number,
    rehabCostPerSqft: Number,
    realtorFeesPercent: Number,
    minimumProfitPercent: Number
});
const ArvAdjustmentSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    rule: String,
    impactPercent: Number,
    reason: String
});
const DealSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    subject: SubjectPropertySchema,
    calculator: CalculatorSchema,
    compsEvaluated: [
        CompSchema
    ],
    selectedComps: [
        CompSchema
    ],
    baseArv: Number,
    adjustedArv: Number,
    arvAdjustments: [
        ArvAdjustmentSchema
    ],
    domDays: Number,
    minRequiredComps: Number,
    status: {
        type: String,
        enum: [
            "PASS",
            "FAIL"
        ],
        default: "FAIL"
    },
    failureReasons: [
        String
    ],
    explainability: {
        arvExplanation: String,
        compSelectionExplanation: String,
        rejectionExplanation: String
    },
    source: {
        type: String,
        enum: [
            "AUTO",
            "MANUAL"
        ],
        default: "AUTO"
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Deal || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Deal", DealSchema);
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
"[project]/realestateandlease/models/Rule.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/mongoose [external] (mongoose, cjs)");
;
const RuleSchema = new __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema({
    engine: {
        type: String,
        enum: [
            "COMP",
            "DOM",
            "ARV",
            "PROFIT"
        ],
        required: true
    },
    key: {
        type: String,
        required: true,
        unique: true
    },
    value: {
        type: __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].Schema.Types.Mixed,
        required: true
    },
    unit: {
        type: String
    },
    description: {
        type: String
    },
    locked: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].models.Rule || __TURBOPACK__imported__module__$5b$externals$5d2f$mongoose__$5b$external$5d$__$28$mongoose$2c$__cjs$29$__["default"].model("Rule", RuleSchema);
}),
"[project]/realestateandlease/lib/rules/getRules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getRules",
    ()=>getRules
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Rule$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/Rule.ts [app-route] (ecmascript)");
;
async function getRules() {
    const rules = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Rule$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find();
    return Object.fromEntries(rules.map((r)=>[
            r.key,
            r.value
        ]));
}
}),
"[project]/realestateandlease/lib/engines/compEngine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runCompEngine",
    ()=>runCompEngine
]);
function runCompEngine(subject, comps, rules) {
    const selected = [];
    const rejected = [];
    // Validate inputs
    if (!Array.isArray(comps) || comps.length === 0) {
        return {
            selected: [],
            rejected: []
        };
    }
    for (const comp of comps){
        // Check distance
        if (comp.distance !== undefined && comp.distance > (rules?.MAX_COMP_DISTANCE || 2)) {
            rejected.push({
                comp,
                reason: `Distance too far (${comp.distance} > ${rules?.MAX_COMP_DISTANCE || 2})`
            });
            continue;
        }
        // Check DOM
        if (comp.dom !== undefined && comp.dom > (rules?.MAX_COMP_DOM || 180)) {
            rejected.push({
                comp,
                reason: `DOM too high (${comp.dom} > ${rules?.MAX_COMP_DOM || 180})`
            });
            continue;
        }
        // Check price validity
        if (!comp.price || comp.price <= 0) {
            rejected.push({
                comp,
                reason: "Invalid price"
            });
            continue;
        }
        selected.push(comp);
    }
    return {
        selected,
        rejected
    };
}
}),
"[project]/realestateandlease/lib/engines/arvEngine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runArvEngine",
    ()=>runArvEngine
]);
function runArvEngine(selectedComps) {
    // Calculate average price from selected comps
    if (!selectedComps || selectedComps.length === 0) {
        return {
            arv: 0,
            adjustments: [],
            compCount: 0
        };
    }
    const base = selectedComps.reduce((s, c)=>s + (c.price || 0), 0) / selectedComps.length;
    return {
        arv: Math.round(base),
        adjustments: [],
        compCount: selectedComps.length,
        avgPrice: Math.round(base)
    };
}
}),
"[project]/realestateandlease/lib/engines/domEngine.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runDomEngine",
    ()=>runDomEngine
]);
function runDomEngine(selectedComps, maxDom) {
    // Validate inputs
    if (!selectedComps || selectedComps.length === 0) {
        return {
            pass: false,
            reason: "No comparables to check DOM"
        };
    }
    // Find any comp that exceeds max DOM
    const failed = selectedComps.find((c)=>(c.dom || 0) > maxDom);
    if (failed) {
        return {
            pass: false,
            reason: `DOM gating failed - comp with ${failed.dom} days exceeds ${maxDom} day limit`
        };
    }
    // Calculate average DOM
    const avgDom = Math.round(selectedComps.reduce((s, c)=>s + (c.dom || 0), 0) / selectedComps.length);
    return {
        pass: true,
        reason: `DOM check passed - average ${avgDom} days`,
        avgDom: avgDom,
        maxDom: maxDom
    };
}
}),
"[project]/realestateandlease/lib/engines/dealEvaluator.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateDeal",
    ()=>evaluateDeal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$compEngine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/compEngine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$arvEngine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/arvEngine.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$domEngine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/domEngine.ts [app-route] (ecmascript)");
;
;
;
function evaluateDeal(deal, comps, rules) {
    const failures = [];
    try {
        // Validate input
        if (!deal) {
            return {
                status: "FAIL",
                arv: 0,
                profitPercent: 0,
                comps: [],
                failureReasons: [
                    "Invalid deal data"
                ]
            };
        }
        if (!Array.isArray(comps) || comps.length === 0) {
            return {
                status: "FAIL",
                arv: 0,
                profitPercent: 0,
                comps: [],
                failureReasons: [
                    "No comparables provided"
                ]
            };
        }
        const dealPrice = Number(deal.price) || deal.purchasePrice;
        if (!dealPrice || dealPrice <= 0) {
            return {
                status: "FAIL",
                arv: 0,
                profitPercent: 0,
                comps: [],
                failureReasons: [
                    "Invalid deal price"
                ]
            };
        }
        // Log inputs for debugging
        console.log("📊 Deal Evaluation Started");
        console.log("Deal Price:", dealPrice);
        console.log("Comps Count:", comps.length);
        console.log("Rules:", rules);
        // Step 1: Run comp engine
        console.log("\n🔍 Step 1: Filtering Comparables...");
        const compResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$compEngine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runCompEngine"])(deal, comps, rules);
        console.log("Comp Result:", compResult);
        if (!compResult || !Array.isArray(compResult.selected) || compResult.selected.length === 0) {
            failures.push("No valid comparables selected");
            return {
                status: "FAIL",
                arv: 0,
                profitPercent: 0,
                comps: [],
                failureReasons: failures
            };
        }
        const selected = compResult.selected;
        console.log(`✅ Selected ${selected.length} valid comps`);
        // Step 2: Calculate ARV
        console.log("\n📈 Step 2: Calculating ARV...");
        const arvResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$arvEngine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runArvEngine"])(selected);
        console.log("ARV Result:", arvResult);
        if (!arvResult || typeof arvResult.arv !== "number" || arvResult.arv <= 0) {
            failures.push("Failed to calculate ARV");
            return {
                status: "FAIL",
                arv: 0,
                profitPercent: 0,
                comps: selected,
                failureReasons: failures
            };
        }
        const arv = arvResult.arv;
        console.log(`✅ ARV Calculated: $${Math.round(arv).toLocaleString()}`);
        // Step 3: Check DOM
        console.log("\n📅 Step 3: Checking Days on Market...");
        const domCheck = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$domEngine$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runDomEngine"])(selected, rules?.MAX_COMP_DOM || 180);
        console.log("DOM Check:", domCheck);
        if (domCheck && !domCheck.pass) {
            failures.push(domCheck.reason || "DOM check failed");
            console.log("⚠️ DOM Check Failed:", domCheck.reason);
        } else {
            console.log("✅ DOM Check Passed");
        }
        // Step 4: Calculate Profit
        console.log("\n💰 Step 4: Calculating Profit...");
        const profitAmount = arv - dealPrice;
        const profitPercent = profitAmount / dealPrice * 100;
        console.log("Profit Amount:", Math.round(profitAmount));
        console.log("Profit Percent:", Math.round(profitPercent) + "%");
        if (isNaN(profitPercent) || !isFinite(profitPercent)) {
            failures.push("Profit calculation error");
            return {
                status: "FAIL",
                arv: Math.round(arv),
                profitPercent: 0,
                comps: selected,
                failureReasons: failures
            };
        }
        // Step 5: Check minimum profit
        console.log("\n✔️ Step 5: Checking Minimum Profit Threshold...");
        const minProfit = rules?.MIN_PROFIT_PERCENT || 10;
        console.log(`Minimum Required: ${minProfit}%`);
        console.log(`Actual Profit: ${Math.round(profitPercent)}%`);
        if (profitPercent < minProfit) {
            failures.push(`Profit below minimum (${Math.round(profitPercent)}% < ${minProfit}%)`);
            console.log("❌ Profit Check Failed");
        } else {
            console.log("✅ Profit Check Passed");
        }
        // Final result
        const result = {
            status: failures.length ? "FAIL" : "PASS",
            arv: Math.round(arv),
            profitPercent: Math.round(profitPercent),
            profitAmount: Math.round(profitAmount),
            comps: selected,
            failureReasons: failures
        };
        console.log("\n📋 Final Result:", result);
        return result;
    } catch (error) {
        console.error("❌ Evaluation Engine Error:", error);
        return {
            status: "FAIL",
            arv: 0,
            profitPercent: 0,
            comps: [],
            failureReasons: [
                "Evaluation error: " + (error instanceof Error ? error.message : "Unknown")
            ]
        };
    }
}
}),
"[project]/realestateandlease/lib/utils/safeNumber.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "safeNumber",
    ()=>safeNumber
]);
function safeNumber(value, fallback = null) {
    const n = Number(value);
    return Number.isFinite(n) ? n : fallback;
}
}),
"[project]/realestateandlease/app/api/deals/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>GET,
    "POST",
    ()=>POST
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/next/server.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Deal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/models/Deal.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/db.js [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$rules$2f$getRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/rules/getRules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$dealEvaluator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/dealEvaluator.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$safeNumber$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/utils/safeNumber.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function GET() {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
    const deals = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Deal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].find().sort({
        createdAt: -1
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(deals);
}
async function POST(req) {
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
    const body = await req.json();
    const comps = Array.isArray(body.comps) ? body.comps : [];
    const rules = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$rules$2f$getRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["getRules"])();
    const evaluation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$dealEvaluator$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateDeal"])(body, comps, rules);
    console.log("evaluayter:", evaluation);
    const deal = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Deal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
        address: body.address,
        purchasePrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$safeNumber$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeNumber"])(body.purchasePrice),
        arv: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$safeNumber$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeNumber"])(evaluation.arv),
        profitPercent: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$safeNumber$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeNumber"])(evaluation.profitPercent),
        status: evaluation.status,
        comps: evaluation.comps,
        failureReasons: evaluation.failureReasons,
        source: "MANUAL",
        notes: body.notes ?? ""
    });
    return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(deal);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__432e0312._.js.map