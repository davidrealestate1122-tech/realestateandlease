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
"[project]/realestateandlease/lib/sourcing/publicSourceAdapter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchFromPublicSource",
    ()=>fetchFromPublicSource
]);
async function fetchFromPublicSource() {
    const controller = new AbortController();
    const timeout = setTimeout(()=>controller.abort(), 8000);
    try {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            signal: controller.signal
        });
        if (!res.ok) {
            throw new Error(`Fetch failed: ${res.status}`);
        }
        const raw = await res.json();
        console.log("RAW PUBLIC PAYLOAD SAMPLE:", raw[0]);
        // Normalize to internal listing format
        return raw.slice(0, 10).map((item, index)=>({
                externalId: `PUBLIC_${item.id}`,
                address: item.title,
                city: "Dallas",
                state: "TX",
                zip: "75000",
                price: 250000 + index * 10000,
                beds: 3,
                baths: 2,
                sqft: 1600 + index * 100,
                updatedAt: new Date().toISOString()
            }));
    } catch (err) {
        console.error("Public source fetch failed:", err);
        return [];
    } finally{
        clearTimeout(timeout);
    }
}
}),
"[project]/realestateandlease/lib/sourcing/normalizeListing.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "normalizeListing",
    ()=>normalizeListing
]);
function normalizeListing(raw) {
    return {
        externalId: raw.id,
        address: raw.address,
        city: raw.city,
        state: raw.state,
        zip: raw.zip,
        price: raw.price,
        beds: raw.beds,
        baths: raw.baths,
        sqft: raw.sqft,
        status: raw.status ?? "UNKNOWN",
        updatedAt: raw.updated_at
    };
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/realestateandlease/dedupe/fingerprint.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fingerprint",
    ()=>fingerprint
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
function fingerprint(listing) {
    const payload = {
        price: listing.price,
        beds: listing.beds,
        baths: listing.baths,
        sqft: listing.sqft,
        status: listing.status,
        updatedAt: listing.updatedAt
    };
    return __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["default"].createHash("sha256").update(JSON.stringify(payload)).digest("hex");
}
}),
"[project]/realestateandlease/dedupe/dedupeListings.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "dedupe",
    ()=>dedupe
]);
const seen = new Map() // externalId → fingerprint
;
function dedupe(listing, fp) {
    const prev = seen.get(listing.externalId);
    if (!prev) {
        seen.set(listing.externalId, fp);
        console.log("NEW LISTING:", listing.externalId);
        return "NEW";
    }
    if (prev === fp) {
        console.log("DUPLICATE SKIPPED:", listing.externalId);
        return "UNCHANGED";
    }
    seen.set(listing.externalId, fp);
    console.log("CHANGE DETECTED → EVALUATING:", listing.address);
    return "CHANGED";
}
}),
"[project]/realestateandlease/lib/underwriting/evaluateProperty.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateProperty",
    ()=>evaluateProperty
]);
function evaluateProperty(listing) {
    const baseArv = Math.round(listing.price * 1.25);
    const adjustedArv = Math.round(baseArv * 0.97);
    const closingCosts = Math.round(listing.price * 0.02);
    const holdingCosts = Math.round(listing.price * 0.06);
    const rehabCosts = Math.round(listing.sqft * 25);
    const totalCosts = listing.price + closingCosts + holdingCosts + rehabCosts;
    const netProfit = adjustedArv - totalCosts;
    const profitMargin = netProfit / adjustedArv * 100;
    const pass = profitMargin >= 10;
    return {
        externalId: listing.externalId,
        address: listing.address,
        underwriting: {
            status: pass ? "PASS" : "FAIL",
            arv: {
                baseArv,
                adjustedArv
            },
            costs: {
                purchasePrice: listing.price,
                closingCosts,
                holdingCosts,
                rehabCosts,
                totalCosts
            },
            profit: {
                netProfit,
                profitMargin
            },
            failureReasons: pass ? [] : [
                `Profit margin ${profitMargin.toFixed(2)}% below 10% threshold`
            ]
        },
        evaluatedAt: new Date().toISOString()
    };
}
}),
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[project]/realestateandlease/exports/exportEvaluations.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportEvaluation",
    ()=>exportEvaluation
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
;
function exportEvaluation(data) {
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].appendFileSync("evaluations.log", JSON.stringify(data, null, 2) + "\n");
}
}),
"[project]/realestateandlease/testscript/test.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "run",
    ()=>run
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicSourceAdapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/publicSourceAdapter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$normalizeListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/normalizeListing.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/dedupe/fingerprint.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$dedupeListings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/dedupe/dedupeListings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$evaluateProperty$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/underwriting/evaluateProperty.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/exports/exportEvaluations.ts [app-route] (ecmascript)");
;
;
;
;
;
;
async function run() {
    console.log("PIPELINE STARTED:", new Date().toISOString());
    const raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicSourceAdapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchFromPublicSource"])();
    for (const record of raw){
        const listing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$normalizeListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeListing"])(record);
        const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fingerprint"])(listing);
        const result = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$dedupeListings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dedupe"])(listing, fp);
        if (result === "UNCHANGED") continue;
        const evaluation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$evaluateProperty$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateProperty"])(listing);
        console.log("PROPERTY EVALUATED:", evaluation);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportEvaluation"])(evaluation);
    }
    console.log("PIPELINE COMPLETED:", new Date().toISOString());
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
        console.log("⏱ Scheduler running:", new Date().toISOString());
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

//# sourceMappingURL=%5Broot-of-the-server%5D__87d62604._.js.map