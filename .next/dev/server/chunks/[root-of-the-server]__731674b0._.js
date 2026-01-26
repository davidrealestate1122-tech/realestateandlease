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
"[project]/realestateandlease/lib/scraprers/mockScraper.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "mockScrapeSoldProperties",
    ()=>mockScrapeSoldProperties
]);
function randomBetween(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
function randomDate(start, end) {
    return new Date(start.getTime() + Math.random() * (end.getTime() - start.getTime()));
}
async function mockScrapeSoldProperties(neighborhoodId) {
    const results = [];
    // 25 properties sold in last 6 months
    const sixMonthsAgo = new Date();
    sixMonthsAgo.setMonth(sixMonthsAgo.getMonth() - 6);
    for(let i = 1; i <= 25; i++){
        results.push({
            address: `${randomBetween(100, 999)} Mock St`,
            soldPrice: randomBetween(250000, 500000),
            soldDate: randomDate(sixMonthsAgo, new Date()),
            squareFeet: randomBetween(1200, 2500),
            yearBuilt: randomBetween(1980, 2015),
            beds: randomBetween(2, 5),
            baths: randomBetween(1, 3),
            neighborhoodId,
            distanceMiles: parseFloat((Math.random() * 1.5 + 0.1).toFixed(2)),
            hasGarage: Math.random() > 0.3,
            isBusyStreet: Math.random() > 0.7,
            nearCommercial: Math.random() > 0.85,
            nearMultiFamily: Math.random() > 0.9 ? "LARGE" : Math.random() > 0.7 ? "SMALL" : "NONE",
            nearFreeway: Math.random() > 0.9
        });
    }
    // 5 properties sold ~1 year ago
    const oneYearAgo = new Date();
    oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
    const elevenMonthsAgo = new Date();
    elevenMonthsAgo.setMonth(elevenMonthsAgo.getMonth() - 11);
    for(let i = 1; i <= 5; i++){
        results.push({
            address: `${randomBetween(100, 999)} Old St`,
            soldPrice: randomBetween(200000, 450000),
            soldDate: randomDate(elevenMonthsAgo, oneYearAgo),
            squareFeet: randomBetween(1200, 2500),
            yearBuilt: randomBetween(1970, 2010),
            beds: randomBetween(2, 5),
            baths: randomBetween(1, 3),
            neighborhoodId,
            distanceMiles: parseFloat((Math.random() * 1.5 + 0.1).toFixed(2)),
            hasGarage: Math.random() > 0.3,
            isBusyStreet: Math.random() > 0.7,
            nearCommercial: Math.random() > 0.85,
            nearMultiFamily: Math.random() > 0.9 ? "LARGE" : Math.random() > 0.7 ? "SMALL" : "NONE",
            nearFreeway: Math.random() > 0.9
        });
    }
    return results;
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
"[project]/realestateandlease/lib/arv/median.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "median",
    ()=>median
]);
function median(values) {
    const sorted = [
        ...values
    ].sort((a, b)=>a - b);
    const mid = Math.floor(sorted.length / 2);
    return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}
}),
"[project]/realestateandlease/lib/arv/calculateBaseArv.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateBaseArv",
    ()=>calculateBaseArv
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$median$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/arv/median.ts [app-route] (ecmascript)");
;
function calculateBaseArv(subjectSqft, comps) {
    const pricesPerSqft = comps.map((c)=>c.soldPrice / c.squareFeet);
    const ppsf = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$median$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["median"])(pricesPerSqft);
    return Math.round(ppsf * subjectSqft);
}
}),
"[project]/realestateandlease/lib/arv/adjustments.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyAdjustments",
    ()=>applyAdjustments
]);
function applyAdjustments(baseArv, adjustments) {
    let adjusted = baseArv;
    adjustments.forEach((a)=>{
        adjusted -= baseArv * a.percent;
    });
    return Math.round(adjusted);
}
}),
"[project]/realestateandlease/lib/arv/finalizeDeal.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "finalizeDeal",
    ()=>finalizeDeal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$calculateBaseArv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/arv/calculateBaseArv.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$adjustments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/arv/adjustments.ts [app-route] (ecmascript)");
;
;
function finalizeDeal({ subject, comps, adjustments }) {
    if (adjustments.length >= 2) {
        return {
            status: "FAIL",
            reason: "Multiple negative location factors"
        };
    }
    const baseArv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$calculateBaseArv$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["calculateBaseArv"])(subject.squareFeet, comps);
    const finalArv = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$adjustments$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyAdjustments"])(baseArv, adjustments);
    return {
        status: "PASS",
        baseArv,
        finalArv
    };
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
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$safeNumber$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/utils/safeNumber.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$scraprers$2f$mockScraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/scraprers/mockScraper.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyBuilder$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/services/subjectPropertyBuilder.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$compSelector$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/compSelector.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$domRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/domRules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$finalizeDeal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/arv/finalizeDeal.ts [app-route] (ecmascript)");
;
;
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
        const soldProperties = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$scraprers$2f$mockScraper$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["mockScrapeSoldProperties"])(subject.zip);
        //   const soldProperties = await scrapeSoldProperties(
        //   subject.city,subject.zip
        // )
        console.log("value of comp is", soldProperties);
        const evaluatedComps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$compSelector$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateComps"])(subject, soldProperties);
        console.log("value of included comp is", evaluatedComps);
        const includedComps = evaluatedComps.filter((c)=>c.included);
        console.log("value of included comp is", includedComps);
        const minComps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$domRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requiredCompCount"])(body.domDays);
        const selectedComps = includedComps;
        // Return early if not enough comps
        if (includedComps.length < minComps) {
            const deal = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Deal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
                subject,
                compsEvaluated: evaluatedComps,
                selectedComps,
                domDays: body.domDays ?? 30,
                minRequiredComps: minComps,
                status: "FAIL",
                failureReasons: [
                    `Only ${selectedComps.length} eligible comps found, ${minComps} required`
                ],
                source: "AUTO"
            });
            return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(deal);
        }
        const arvResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$finalizeDeal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalizeDeal"])({
            subject,
            comps: includedComps,
            adjustments: []
        });
        console.log("finalizeDeal results:", arvResult);
        const deal = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Deal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            subject,
            calculator: {
                purchasePrice: (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$safeNumber$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeNumber"])(body.purchasePrice)
            },
            compsEvaluated: evaluatedComps,
            selectedComps,
            baseArv: arvResult.baseArv,
            adjustedArv: arvResult.finalArv,
            domDays: body.domDays ?? 30,
            minCompsRequired: minComps,
            status: arvResult.status,
            failureReasons: arvResult.reason ? [
                arvResult.reason
            ] : [],
            explainability: {
                arvExplanation: "Median PPSF from selected comps",
                compSelectionExplanation: "Filtered by ZIP, date, sqft, year built",
                rejectionExplanation: arvResult.status === "FAIL" ? "Multiple negative conditions" : ""
            },
            source: "AUTO"
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(deal);
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

//# sourceMappingURL=%5Broot-of-the-server%5D__731674b0._.js.map