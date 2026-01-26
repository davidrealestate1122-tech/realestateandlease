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
"[project]/realestateandlease/lib/services/subjectPropertyFetcher.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchSubjectLocation",
    ()=>fetchSubjectLocation
]);
async function fetchSubjectLocation(address) {
    const url = `https://nominatim.openstreetmap.org/search?format=json&addressdetails=1&q=${encodeURIComponent(address)}`;
    const res = await fetch(url, {
        headers: {
            "User-Agent": "Phase1UnderwritingBot/1.0"
        }
    });
    const data = await res.json();
    if (!data || data.length === 0) {
        throw new Error("Unable to geocode address");
    }
    const result = data[0];
    return {
        lat: Number(result.lat),
        lng: Number(result.lon),
        zip: result.address.postcode ?? "UNKNOWN",
        city: result.address.city ?? result.address.town ?? result.address.village ?? "UNKNOWN",
        state: result.address.state ?? "UNKNOWN"
    };
}
}),
"[project]/realestateandlease/lib/services/subjectPropertyBuilder.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "buildSubjectProperty",
    ()=>buildSubjectProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/services/subjectPropertyFetcher.ts [app-route] (ecmascript)");
;
async function buildSubjectProperty(address, purchasePrice) {
    const location = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchSubjectLocation"])(address);
    return {
        address,
        zip: location.zip,
        lat: location.lat,
        lng: location.lng,
        city: location.city,
        state: location.state,
        // Phase 1 directional values (acceptable)
        squareFeet: estimateSqft(purchasePrice),
        yearBuilt: 1995,
        beds: 3,
        baths: 2,
        propertyType: "SFR",
        hasGarage: true,
        isBusyStreet: false
    };
}
function estimateSqft(price) {
    if (price < 200000) return 1200;
    if (price < 350000) return 1600;
    if (price < 500000) return 2000;
    return 2400;
}
}),
"[project]/realestateandlease/lib/utils/dateUtils.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "monthsAgo",
    ()=>monthsAgo
]);
function monthsAgo(date) {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    return diffMs / (1000 * 60 * 60 * 24 * 30);
}
}),
"[project]/realestateandlease/lib/engines/compSelector.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateComps",
    ()=>evaluateComps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/utils/dateUtils.ts [app-route] (ecmascript)");
;
function evaluateComps(subject, soldProperties) {
    return soldProperties.map((comp)=>{
        const exclusionReasons = [];
        // 1️⃣ Neighborhood (ZIP proxy)
        // FIX: Check if comp has a zip field, or extract it from address
        const compZip = comp.zip || String(comp.neighborhoodId).trim();
        const subjectZip = String(subject.zip).trim();
        if (compZip !== subjectZip) {
            exclusionReasons.push(`Outside neighborhood boundary (ZIP: ${compZip} vs ${subjectZip})`);
        }
        // 2️⃣ Sold recency
        const soldDate = new Date(comp.soldDate);
        const months = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$dateUtils$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["monthsAgo"])(soldDate);
        if (isNaN(months) || months < 3 || months > 6) {
            exclusionReasons.push(`Sold ${months} months ago (outside 3–6 month range)`);
        }
        // 3️⃣ Square footage ±10%
        if (!subject.squareFeet || !comp.squareFeet) {
            exclusionReasons.push("Missing square footage");
        } else {
            const sqftDelta = Math.abs(comp.squareFeet - subject.squareFeet) / subject.squareFeet;
            if (sqftDelta > 0.1) {
                exclusionReasons.push(`Square footage variance > ±10% (${(sqftDelta * 100).toFixed(1)}%)`);
            }
        }
        // 4️⃣ Year built ±12
        const yearDiff = Math.abs(Number(comp.yearBuilt) - Number(subject.yearBuilt));
        if (isNaN(yearDiff) || yearDiff > 12) {
            exclusionReasons.push(`Year built variance > ±12 years (${yearDiff} years)`);
        }
        // 5️⃣ Beds / baths
        if (Math.abs(comp.beds - subject.beds) > 1) {
            exclusionReasons.push(`Bed count mismatch (${comp.beds} vs ${subject.beds})`);
        }
        if (Math.abs(comp.baths - subject.baths) > 1) {
            exclusionReasons.push(`Bath count mismatch (${comp.baths} vs ${subject.baths})`);
        }
        return {
            address: comp.address,
            soldPrice: comp.soldPrice,
            soldDate: comp.soldDate,
            squareFeet: comp.squareFeet,
            yearBuilt: comp.yearBuilt,
            beds: comp.beds,
            baths: comp.baths,
            neighborhoodId: comp.neighborhoodId,
            distanceMiles: comp.distanceMiles,
            included: exclusionReasons.length === 0,
            exclusionReasons
        };
    });
}
}),
"[project]/realestateandlease/lib/engines/domRules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "requiredCompCount",
    ()=>requiredCompCount
]);
function requiredCompCount(domDays) {
    if (domDays >= 90) return 3;
    if (domDays >= 60) return 2;
    return 1;
}
}),
"[externals]/node:stream [external] (node:stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:stream", () => require("node:stream"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/node:assert [external] (node:assert, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:assert", () => require("node:assert"));

module.exports = mod;
}),
"[externals]/node:net [external] (node:net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:net", () => require("node:net"));

module.exports = mod;
}),
"[externals]/node:http [external] (node:http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http", () => require("node:http"));

module.exports = mod;
}),
"[externals]/node:querystring [external] (node:querystring, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:querystring", () => require("node:querystring"));

module.exports = mod;
}),
"[externals]/node:events [external] (node:events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:events", () => require("node:events"));

module.exports = mod;
}),
"[externals]/node:diagnostics_channel [external] (node:diagnostics_channel, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:diagnostics_channel", () => require("node:diagnostics_channel"));

module.exports = mod;
}),
"[externals]/node:util [external] (node:util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util", () => require("node:util"));

module.exports = mod;
}),
"[externals]/node:tls [external] (node:tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:tls", () => require("node:tls"));

module.exports = mod;
}),
"[externals]/node:buffer [external] (node:buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:buffer", () => require("node:buffer"));

module.exports = mod;
}),
"[externals]/node:zlib [external] (node:zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:zlib", () => require("node:zlib"));

module.exports = mod;
}),
"[externals]/node:perf_hooks [external] (node:perf_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:perf_hooks", () => require("node:perf_hooks"));

module.exports = mod;
}),
"[externals]/node:util/types [external] (node:util/types, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:util/types", () => require("node:util/types"));

module.exports = mod;
}),
"[externals]/node:worker_threads [external] (node:worker_threads, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:worker_threads", () => require("node:worker_threads"));

module.exports = mod;
}),
"[externals]/node:crypto [external] (node:crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:crypto", () => require("node:crypto"));

module.exports = mod;
}),
"[externals]/node:http2 [external] (node:http2, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:http2", () => require("node:http2"));

module.exports = mod;
}),
"[externals]/node:async_hooks [external] (node:async_hooks, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:async_hooks", () => require("node:async_hooks"));

module.exports = mod;
}),
"[externals]/node:console [external] (node:console, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:console", () => require("node:console"));

module.exports = mod;
}),
"[externals]/node:fs/promises [external] (node:fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:fs/promises", () => require("node:fs/promises"));

module.exports = mod;
}),
"[externals]/node:path [external] (node:path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:path", () => require("node:path"));

module.exports = mod;
}),
"[externals]/node:timers [external] (node:timers, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:timers", () => require("node:timers"));

module.exports = mod;
}),
"[externals]/node:dns [external] (node:dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("node:dns", () => require("node:dns"));

module.exports = mod;
}),
"[project]/realestateandlease/lib/scraprers/zillowScrapper.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrapeSoldProperties",
    ()=>scrapeSoldProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/cheerio/dist/esm/index.js [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2d$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/cheerio/dist/esm/load-parse.js [app-route] (ecmascript)");
;
async function scrapeSoldProperties(city, zip) {
    const url = `https://www.zillow.com/${city}-${zip}/sold/`;
    const res = await fetch(url, {
        headers: {
            "User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36"
        }
    });
    const html = await res.text();
    const $ = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$cheerio$2f$dist$2f$esm$2f$load$2d$parse$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["load"](html);
    const results = [];
    $(".property-card").each((_, el)=>{
        const priceText = $(el).find(".property-card-price").text();
        const address = $(el).find("address").text();
        const soldPrice = Number(priceText.replace(/[^0-9]/g, ""));
        if (!soldPrice || !address) return;
        results.push({
            address,
            soldPrice,
            soldDate: new Date(),
            squareFeet: randomBetween(1200, 2500),
            yearBuilt: randomBetween(1980, 2015),
            beds: randomBetween(2, 5),
            baths: randomBetween(1, 3),
            neighborhoodId: zip,
            distanceMiles: randomBetween(0.1, 1.5),
            hasGarage: Math.random() > 0.3,
            isBusyStreet: Math.random() > 0.7,
            nearCommercial: Math.random() > 0.85,
            nearMultiFamily: Math.random() > 0.9 ? "LARGE" : Math.random() > 0.7 ? "SMALL" : "NONE",
            nearFreeway: Math.random() > 0.9
        });
    });
    return results;
}
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
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
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyBuilder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/services/subjectPropertyBuilder.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$compSelector$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/compSelector.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$domRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/domRules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$scraprers$2f$zillowScrapper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/scraprers/zillowScrapper.ts [app-route] (ecmascript)");
;
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
    try {
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$db$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["connectDB"])();
        const body = await req.json();
        const subject = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyBuilder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["buildSubjectProperty"])(body.address, body.purchasePrice);
        console.log("value of subject is", subject);
        // const soldProperties = await mockScrapeSoldProperties(
        //   subject.zip
        // )
        const soldProperties = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$scraprers$2f$zillowScrapper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["scrapeSoldProperties"])(subject.city, subject.zip);
        console.log("value of comp is", soldProperties);
        const evaluatedComps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$compSelector$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateComps"])(subject, soldProperties);
        console.log("value of included comp is", evaluatedComps);
        const includedComps = evaluatedComps.filter((c)=>c.included);
        console.log("value of included comp is", includedComps);
        const minComps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$domRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requiredCompCount"])(body.domDays);
        console.log("value of minComps is", minComps);
        // Return early if not enough comps
        if (includedComps.length < minComps) {
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
                status: "FAIL",
                failureReasons: [
                    `Only ${includedComps.length} eligible comps found, ${minComps} required`
                ],
                comps: evaluatedComps
            }, {
                status: 400
            });
        }
        // Continue with deal evaluation using the comps we found
        // const rules = await getRules()
        // const evaluation = evaluateDeal(body, includedComps, rules)
        // console.log("evaluator:", evaluation)
        // const deal = await Deal.create({
        //   address: body.address,
        //   purchasePrice: safeNumber(body.purchasePrice),
        //   arv: safeNumber(evaluation.arv),
        //   profitPercent: safeNumber(evaluation.profitPercent),
        //   status: evaluation.status,
        //   comps: evaluation.comps,
        //   failureReasons: evaluation.failureReasons,
        //   source: "MANUAL",
        //   notes: body.notes ?? "",
        // })
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "PASS",
            minRequiredComps: minComps,
            eligibleComps: includedComps.length
        }, {
            status: 201
        });
    } catch (error) {
        console.error("Error processing deal:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "ERROR",
            message: "Failed to process deal"
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__3a06d9ff._.js.map