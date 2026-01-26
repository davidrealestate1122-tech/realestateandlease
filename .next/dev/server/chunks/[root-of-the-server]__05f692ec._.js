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
    return [
        // 🔹 UNCHANGED (should NOT re-evaluate)
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
        // 🔹 CHANGED PRICE (should re-evaluate)
        {
            externalId: "PUBLIC_1002",
            address: "456 Oak Ave",
            city: "Dallas",
            state: "TX",
            zip: "75202",
            price: 335000,
            beds: 4,
            baths: 2,
            sqft: 1900,
            updatedAt: "2026-01-08"
        },
        // 🔹 CHANGED SQFT (should re-evaluate)
        {
            externalId: "PUBLIC_1003",
            address: "789 Pine Dr",
            city: "Dallas",
            state: "TX",
            zip: "75203",
            price: 255000,
            beds: 3,
            baths: 1.5,
            sqft: 1500,
            updatedAt: "2026-01-08"
        },
        // 🔹 UNCHANGED
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
        // 🔹 NEW LISTING (should evaluate)
        {
            externalId: "PUBLIC_1013",
            address: "88 New Market St",
            city: "Plano",
            state: "TX",
            zip: "75074",
            price: 360000,
            beds: 4,
            baths: 2.5,
            sqft: 2050,
            updatedAt: "2026-01-08"
        },
        // 🔹 NEW LISTING
        {
            externalId: "PUBLIC_1014",
            address: "912 Horizon Blvd",
            city: "Irving",
            state: "TX",
            zip: "75060",
            price: 295000,
            beds: 3,
            baths: 2,
            sqft: 1700,
            updatedAt: "2026-01-08"
        }
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
    const baseArv = Math.round(listing.price * 1.25);
    const adjustedArv = Math.round(baseArv * 0.97);
    return {
        externalId: listing.externalId,
        address: listing.address,
        price: listing.price,
        underwriting: {
            status: "PASS",
            baseArv,
            adjustedArv,
            failureReasons: []
        },
        evaluatedAt: new Date().toISOString()
    };
}
}),
"[project]/realestateandlease/lib/pipeline/runDailyPipeline.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "runDailyPipeline",
    ()=>runDailyPipeline
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicListingsSource$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/publicListingsSource.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$deduplicationRegistry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/deduplicationRegistry.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$changeDetection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/changeDetection.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$pipeline$2f$evaluateListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/pipeline/evaluateListing.ts [app-route] (ecmascript)");
;
;
;
;
async function runDailyPipeline() {
    console.log("🔄 Daily pipeline started", new Date().toISOString());
    // STEP 1: Fetch public listings
    const listings = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicListingsSource$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchPublicListings"])();
    // STEP 2: Deduplication (per listing)
    const newListings = listings.filter((listing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$deduplicationRegistry$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isNewListing"])(listing.externalId));
    // STEP 3: Change detection
    const listingsToEvaluate = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$changeDetection$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectChanges"])(newListings);
    // STEP 4: Underwriting (Milestone 1 logic)
    const results = listingsToEvaluate.map((listing)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$pipeline$2f$evaluateListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateProperty"])(listing));
    console.log("✅ Daily pipeline completed");
    console.log("Evaluated properties:", results);
    return results;
}
}),
"[project]/realestateandlease/scheduler/dailyJob.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "startScheduler",
    ()=>startScheduler
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/node-cron [external] (node-cron, esm_import)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$pipeline$2f$runDailyPipeline$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/pipeline/runDailyPipeline.ts [app-route] (ecmascript)");
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
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$pipeline$2f$runDailyPipeline$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["runDailyPipeline"])();
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

//# sourceMappingURL=%5Broot-of-the-server%5D__05f692ec._.js.map