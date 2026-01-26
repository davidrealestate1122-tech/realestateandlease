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
"[externals]/node-cron [external] (node-cron, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("node-cron");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/realestateandlease/lib/sourcing/publicListingsSource.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchPublicListings",
    ()=>fetchPublicListings
]);
async function fetchPublicListings() {
    const baseListings = [
        {
            externalId: "PUBLIC_1001",
            address: "123 Main St",
            city: "Dallas",
            state: "TX",
            zip: "75201",
            price: 285000,
            beds: 3,
            baths: 2,
            sqft: 1600,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1002",
            address: "456 Oak Ave",
            city: "Dallas",
            state: "TX",
            zip: "75202",
            price: 320000,
            beds: 4,
            baths: 2,
            sqft: 1900,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1003",
            address: "789 Pine Dr",
            city: "Dallas",
            state: "TX",
            zip: "75203",
            price: 255000,
            beds: 3,
            baths: 1.5,
            sqft: 1400,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1004",
            address: "1012 Cedar Ln",
            city: "Dallas",
            state: "TX",
            zip: "75204",
            price: 410000,
            beds: 4,
            baths: 3,
            sqft: 2300,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1005",
            address: "220 Birch St",
            city: "Plano",
            state: "TX",
            zip: "75074",
            price: 365000,
            beds: 4,
            baths: 2.5,
            sqft: 2100,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1006",
            address: "998 Willow Ct",
            city: "Plano",
            state: "TX",
            zip: "75075",
            price: 295000,
            beds: 3,
            baths: 2,
            sqft: 1750,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1007",
            address: "432 Spruce Way",
            city: "Irving",
            state: "TX",
            zip: "75060",
            price: 275000,
            beds: 3,
            baths: 2,
            sqft: 1650,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1008",
            address: "55 Magnolia Blvd",
            city: "Irving",
            state: "TX",
            zip: "75061",
            price: 340000,
            beds: 4,
            baths: 2,
            sqft: 2000,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1009",
            address: "870 Lakeview Dr",
            city: "Garland",
            state: "TX",
            zip: "75040",
            price: 245000,
            beds: 3,
            baths: 2,
            sqft: 1500,
            updatedAt: "2026-01-07"
        },
        {
            externalId: "PUBLIC_1010",
            address: "19 Hillcrest Rd",
            city: "Garland",
            state: "TX",
            zip: "75041",
            price: 385000,
            beds: 4,
            baths: 3,
            sqft: 2400,
            updatedAt: "2026-01-07"
        }
    ];
    /**
   * 5-second deterministic time bucket
   */ const timeBucket = Math.floor(Date.now() / 5000);
    /**
   * Rotate listings each bucket
   */ const offset = timeBucket % baseListings.length;
    const rotated = [
        ...baseListings.slice(offset),
        ...baseListings.slice(0, offset)
    ];
    /**
   * First 7 → force material change every 5 seconds
   * Last 3 → unchanged duplicates
   */ const now = new Date().toISOString();
    const changedListings = rotated.slice(0, 7).map((l, index)=>({
            externalId: l.externalId + "_v" + timeBucket,
            address: l.address,
            city: l.city,
            state: l.state,
            zip: l.zip,
            price: l.price + (index + 1) * 1000,
            beds: l.beds,
            baths: l.baths,
            sqft: l.sqft,
            updatedAt: now
        }));
    const duplicateListings = rotated.slice(7, 10);
    return [
        ...changedListings,
        ...duplicateListings
    ];
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/realestateandlease/lib/sourcing/deduplicationRegistry.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isNewListing",
    ()=>isNewListing,
    "markListingAsSeen",
    ()=>markListingAsSeen
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const REGISTRY_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "seen-listings.json");
/**
 * Ensure registry file exists
 */ function ensureRegistryFile() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync("data")) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync("data");
    }
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(REGISTRY_PATH)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(REGISTRY_PATH, JSON.stringify([]));
    }
}
/**
 * Load seen listing IDs
 */ function loadSeenIds() {
    ensureRegistryFile();
    const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(REGISTRY_PATH, "utf-8");
    const ids = JSON.parse(raw);
    return new Set(ids);
}
/**
 * Persist updated seen IDs
 */ function saveSeenIds(ids) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(REGISTRY_PATH, JSON.stringify([
        ...ids
    ], null, 2));
}
function isNewListing(externalId) {
    const seenIds = loadSeenIds();
    return !seenIds.has(externalId);
}
function markListingAsSeen(externalId) {
    const seenIds = loadSeenIds();
    seenIds.add(externalId);
    saveSeenIds(seenIds);
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/realestateandlease/lib/sourcing/changeDetection.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectChanges",
    ()=>detectChanges
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
const STATE_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "data", "listing-state.json");
function ensureStateFile() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync("data")) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync("data");
    }
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(STATE_PATH)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(STATE_PATH, JSON.stringify([]));
    }
}
function loadStates() {
    ensureStateFile();
    const raw = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readFileSync(STATE_PATH, "utf-8");
    const items = JSON.parse(raw);
    return new Map(items.map((i)=>[
            i.externalId,
            i.fingerprint
        ]));
}
function saveStates(stateMap) {
    const data = Array.from(stateMap.entries()).map(([externalId, fingerprint])=>({
            externalId,
            fingerprint
        }));
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(STATE_PATH, JSON.stringify(data, null, 2));
}
function createFingerprint(listing) {
    const materialFields = {
        price: listing.price,
        beds: listing.beds,
        baths: listing.baths,
        sqft: listing.sqft,
        updatedAt: listing.updatedAt
    };
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(JSON.stringify(materialFields)).digest("hex");
}
function detectChanges(listings) {
    const states = loadStates();
    const changed = [];
    for (const listing of listings){
        const fingerprint = createFingerprint(listing);
        const previous = states.get(listing.externalId);
        if (!previous || previous !== fingerprint) {
            states.set(listing.externalId, fingerprint);
            changed.push(listing);
        }
    }
    saveStates(states);
    return changed;
}
}),
"[project]/realestateandlease/lib/pipeline/evaluateListing.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateProperty",
    ()=>evaluateProperty
]);
function evaluateProperty(listing) {
    /* ================================
     1️⃣ BASE ARV LOGIC (Milestone 1)
  ================================= */ const baseArv = Math.round(listing.price * 1.25);
    const adjustedArv = Math.round(baseArv * 0.97);
    /* ================================
     2️⃣ COST ASSUMPTIONS (Explicit)
  ================================= */ const CLOSING_COST_RATE = 0.02 // 2%
    ;
    const HOLDING_COST_RATE = 0.01 // 1% per month
    ;
    const HOLDING_MONTHS = 6;
    const REHAB_COST_PER_SQFT = 25 // $25 / sqft
    ;
    /* ================================
     3️⃣ COST CALCULATIONS
  ================================= */ const closingCosts = Math.round(listing.price * CLOSING_COST_RATE);
    const holdingCosts = Math.round(listing.price * HOLDING_COST_RATE * HOLDING_MONTHS);
    const rehabCosts = Math.round(listing.sqft * REHAB_COST_PER_SQFT);
    const totalCosts = listing.price + closingCosts + holdingCosts + rehabCosts;
    /* ================================
     4️⃣ PROFIT ANALYSIS
  ================================= */ const netProfit = adjustedArv - totalCosts;
    const profitMargin = netProfit / adjustedArv * 100;
    const status = profitMargin >= 10 ? "PASS" : "FAIL";
    /* ================================
     5️⃣ RETURN STRUCTURE (AUDITABLE)
  ================================= */ return {
        externalId: listing.externalId,
        address: listing.address,
        price: listing.price,
        underwriting: {
            status,
            baseArv,
            adjustedArv,
            costs: {
                closingCosts,
                holdingCosts,
                rehabCosts,
                totalCosts
            },
            profit: {
                netProfit,
                profitMargin: Number(profitMargin.toFixed(2))
            },
            failureReasons: status === "FAIL" ? [
                `Profit margin ${profitMargin.toFixed(2)}% below 10% threshold`
            ] : []
        },
        evaluatedAt: new Date().toISOString()
    };
}
}),
"[project]/realestateandlease/testscript/test.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "run",
    ()=>run
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicListingsSource$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/publicListingsSource.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$deduplicationRegistry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/deduplicationRegistry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$changeDetection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/changeDetection.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$pipeline$2f$evaluateListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/pipeline/evaluateListing.ts [app-route] (ecmascript)");
;
;
;
;
async function run() {
    console.log("🔄 PIPELINE STARTED:", new Date().toISOString());
    // --------------------------------------------------
    // STEP 1: Fetch public listings (automated ingestion)
    // --------------------------------------------------
    const listings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicListingsSource$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchPublicListings"])();
    console.log(`📥 ${listings.length} listings fetched`);
    // --------------------------------------------------
    // STEP 2: Deduplication (skip previously seen)
    // --------------------------------------------------
    const deduplicatedListings = [];
    for (const listing of listings){
        if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$deduplicationRegistry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNewListing"])(listing.externalId)) {
            console.log("🆕 NEW LISTING:", listing.externalId);
            (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$deduplicationRegistry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["markListingAsSeen"])(listing.externalId);
            deduplicatedListings.push(listing);
        } else {
            console.log("⏭️ DUPLICATE SKIPPED:", listing.externalId);
        }
    }
    // --------------------------------------------------
    // STEP 3: Change detection (material changes only)
    // --------------------------------------------------
    const listingsToEvaluate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$changeDetection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectChanges"])(deduplicatedListings);
    console.log(`🔍 ${listingsToEvaluate.length} listings require evaluation`);
    for (const listing of listingsToEvaluate){
        console.log("📐 CHANGE DETECTED → EVALUATING:", listing.address);
    }
    // --------------------------------------------------
    // STEP 4: Apply underwriting logic (Milestone 1)
    // --------------------------------------------------
    const results = listingsToEvaluate.map((listing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$pipeline$2f$evaluateListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateProperty"])(listing));
    for (const result of results){
        console.log("🏠 PROPERTY EVALUATED");
        console.log("────────────────────────────");
        console.log("ID:", result.externalId);
        console.log("Address:", result.address);
        console.log("Status:", result.underwriting.status);
        console.log("ARV");
        console.log("  Base ARV:", result.underwriting.baseArv);
        console.log("  Adjusted ARV:", result.underwriting.adjustedArv);
        console.log("COSTS");
        console.log("  Purchase Price:", result.price);
        console.log("  Closing Costs:", result.underwriting.costs.closingCosts);
        console.log("  Holding Costs:", result.underwriting.costs.holdingCosts);
        console.log("  Rehab Costs:", result.underwriting.costs.rehabCosts);
        console.log("  Total Costs:", result.underwriting.costs.totalCosts);
        console.log("PROFIT");
        console.log("  Net Profit:", result.underwriting.profit.netProfit);
        console.log("  Profit Margin:", result.underwriting.profit.profitMargin + "%");
        if (result.underwriting.failureReasons.length > 0) {
            console.log("FAILURE REASONS:");
            result.underwriting.failureReasons.forEach((r)=>console.log("  -", r));
        }
        console.log("Evaluated At:", result.evaluatedAt);
        console.log("────────────────────────────\n");
    }
    console.log("🏁 PIPELINE COMPLETED:", new Date().toISOString());
    return results;
}
// Run manually or via scheduler
run();
}),
"[project]/realestateandlease/scheduler/dailyJob.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "startScheduler",
    ()=>startScheduler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$testscript$2f$test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/testscript/test.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let initialized = false;
function startScheduler() {
    if (initialized) return;
    initialized = true;
    // TEMP: every minute (for verification)
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__["default"].schedule("* * * * *", async ()=>{
        console.log("⏰ Scheduler running");
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$testscript$2f$test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["run"])();
    });
    console.log("✅ Scheduler started");
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/realestateandlease/app/api/bootstrap/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "GET",
    ()=>GET
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$scheduler$2f$dailyJob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/scheduler/dailyJob.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$scheduler$2f$dailyJob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$scheduler$2f$dailyJob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
async function GET() {
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$scheduler$2f$dailyJob$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["startScheduler"])();
    return new Response("Scheduler bootstrapped");
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__24b4a840._.js.map