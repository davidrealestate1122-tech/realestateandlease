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
"[externals]/fs [external] (fs, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs", () => require("fs"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/buffer [external] (buffer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("buffer", () => require("buffer"));

module.exports = mod;
}),
"[externals]/constants [external] (constants, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("constants", () => require("constants"));

module.exports = mod;
}),
"[externals]/string_decoder [external] (string_decoder, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("string_decoder", () => require("string_decoder"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/puppeteer [external] (puppeteer, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("puppeteer", () => require("puppeteer"));

module.exports = mod;
}),
"[externals]/puppeteer-core [external] (puppeteer-core, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("puppeteer-core", () => require("puppeteer-core"));

module.exports = mod;
}),
"[project]/realestateandlease/lib/scraprers/zillowScrapper.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "scrapeSoldProperties",
    ()=>scrapeSoldProperties
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$chrome$2d$aws$2d$lambda$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/chrome-aws-lambda/build/index.js [app-route] (ecmascript)"); // serverless Chromium
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/puppeteer-core [external] (puppeteer-core, cjs)"); // puppeteer-core works with chromium
;
;
async function scrapeSoldProperties(city, zip) {
    const url = `https://www.zillow.com/${city}-${zip}/sold/`;
    // Launch headless Chromium for serverless
    const browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer$2d$core__$5b$external$5d$__$28$puppeteer$2d$core$2c$__cjs$29$__["default"].launch({
        args: __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$chrome$2d$aws$2d$lambda$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].args,
        defaultViewport: __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$chrome$2d$aws$2d$lambda$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].defaultViewport,
        executablePath: await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$chrome$2d$aws$2d$lambda$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].executablePath,
        headless: __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$chrome$2d$aws$2d$lambda$2f$build$2f$index$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].headless
    });
    const page = await browser.newPage();
    await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36");
    // Intercept JSON responses for sold listings
    let soldData = [];
    page.on("response", async (response)=>{
        try {
            const url = response.url();
            if (url.includes("SearchPage")) {
                const json = await response.json();
                const props = json?.cat1?.searchResults?.listResults || [];
                soldData.push(...props);
            }
        } catch (err) {}
    });
    // Navigate to Zillow sold page
    await page.goto(url, {
        waitUntil: "domcontentloaded",
        timeout: 60000
    });
    // Wait for property cards to load
    await page.waitForSelector("ul.photo-cards li article", {
        timeout: 60000
    });
    // Map the JSON data to SoldProperty
    const results = soldData.map((p)=>({
            address: p.address || "",
            soldPrice: Number(p.price?.replace(/[^0-9]/g, "")) || 0,
            soldDate: p.soldDate ? new Date(p.soldDate) : new Date(),
            squareFeet: p.sqft ?? 0,
            yearBuilt: p.yearBuilt ?? 0,
            beds: p.beds ?? 0,
            baths: p.baths ?? 0,
            neighborhoodId: zip,
            distanceMiles: 0,
            hasGarage: p.hasGarage ?? false,
            isBusyStreet: false,
            nearCommercial: false,
            nearMultiFamily: "NONE",
            nearFreeway: false
        }));
    await browser.close();
    return results;
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

//# sourceMappingURL=%5Broot-of-the-server%5D__cc1d9c63._.js.map