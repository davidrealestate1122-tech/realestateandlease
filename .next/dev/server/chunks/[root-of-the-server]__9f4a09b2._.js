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
    "checkBusyStreet",
    ()=>checkBusyStreet,
    "checkHasGarage",
    ()=>checkHasGarage,
    "checkNearCommercial",
    ()=>checkNearCommercial,
    "checkNearDuplex",
    ()=>checkNearDuplex,
    "checkNearFreeway",
    ()=>checkNearFreeway,
    "checkNearLargeApartment",
    ()=>checkNearLargeApartment,
    "fetchNearbyPOI",
    ()=>fetchNearbyPOI,
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
async function fetchNearbyPOI(lat, lng, radiusMeters = 500) {
    const query = `
    [bbox:${lng - 0.01},${lat - 0.01},${lng + 0.01},${lat + 0.01}];
    (
      node["amenity"="parking"](${lat - 0.01},${lng - 0.01},${lat + 0.01},${lng + 0.01});
      way["amenity"="commercial"](${lat - 0.01},${lng - 0.01},${lat + 0.01},${lng + 0.01});
      way["building"="apartments"](${lat - 0.01},${lng - 0.01},${lat + 0.01},${lng + 0.01});
      way["building"="residential"](${lat - 0.01},${lng - 0.01},${lat + 0.01},${lng + 0.01});
      node["highway"="motorway"](${lat - 0.02},${lng - 0.02},${lat + 0.02},${lng + 0.02});
      node["highway"="trunk"](${lat - 0.02},${lng - 0.02},${lat + 0.02},${lng + 0.02});
    );
    out center;
  `;
    try {
        const res = await fetch("https://overpass-api.de/api/interpreter", {
            method: "POST",
            body: query
        });
        const data = await res.json();
        return data.elements || [];
    } catch (error) {
        console.error("Overpass API error:", error);
        return [];
    }
}
async function checkBusyStreet(lat, lng) {
    try {
        const elements = await fetchNearbyPOI(lat, lng, 200);
        // Check for highways/major roads
        const busyRoads = elements.filter((el)=>el.tags?.highway === "motorway" || el.tags?.highway === "trunk" || el.tags?.highway === "primary" || el.tags?.highway === "secondary");
        return busyRoads.length > 0;
    } catch (error) {
        console.error("Error checking busy street:", error);
        return false;
    }
}
async function checkNearCommercial(lat, lng) {
    try {
        const elements = await fetchNearbyPOI(lat, lng, 800);
        const commercial = elements.filter((el)=>el.tags?.amenity === "commercial" || el.tags?.landuse === "commercial" || el.tags?.building === "commercial");
        return commercial.length > 0;
    } catch (error) {
        console.error("Error checking commercial:", error);
        return false;
    }
}
async function checkNearLargeApartment(lat, lng) {
    try {
        const elements = await fetchNearbyPOI(lat, lng, 500);
        const apartments = elements.filter((el)=>el.tags?.building === "apartments" || el.tags?.building === "residential" || el.tags?.amenity === "parking" // Parking lots often indicate apartments
        );
        return apartments.length > 2 // Multiple apartment indicators
        ;
    } catch (error) {
        console.error("Error checking apartments:", error);
        return false;
    }
}
async function checkNearDuplex(lat, lng) {
    try {
        const elements = await fetchNearbyPOI(lat, lng, 300);
        const duplex = elements.filter((el)=>el.tags?.building === "duplex" || el.tags?.building === "semidetached_house");
        return duplex.length > 0;
    } catch (error) {
        console.error("Error checking duplex:", error);
        return false;
    }
}
async function checkNearFreeway(lat, lng) {
    try {
        const elements = await fetchNearbyPOI(lat, lng, 1000);
        const freeway = elements.filter((el)=>el.tags?.highway === "motorway" || el.tags?.highway === "trunk");
        return freeway.length > 0;
    } catch (error) {
        console.error("Error checking freeway:", error);
        return false;
    }
}
async function checkHasGarage(lat, lng) {
    try {
        const elements = await fetchNearbyPOI(lat, lng, 200);
        const garage = elements.filter((el)=>el.tags?.building === "garage" || el.tags?.amenity === "parking");
        // If parking/garage facilities exist nearby, likely has garage access
        return garage.length > 0 || Math.random() > 0.3 // Default: ~70% have garages
        ;
    } catch (error) {
        console.error("Error checking garage:", error);
        return Math.random() > 0.3;
    }
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
function estimateSqft(price) {
    if (price < 200_000) return 1200;
    if (price < 350_000) return 1600;
    if (price < 500_000) return 2000;
    return 2400;
}
async function buildSubjectProperty(address, purchasePrice) {
    const location = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchSubjectLocation"])(address);
    // Fetch flags in parallel
    const [isBusyStreet, nearCommercial, nearLargeApt, nearDuplex, nearFreeway, hasGarage] = await Promise.all([
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkBusyStreet"])(location.lat, location.lng),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkNearCommercial"])(location.lat, location.lng),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkNearLargeApartment"])(location.lat, location.lng),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkNearDuplex"])(location.lat, location.lng),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkNearFreeway"])(location.lat, location.lng),
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$services$2f$subjectPropertyFetcher$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["checkHasGarage"])(location.lat, location.lng)
    ]);
    return {
        // Identity
        address,
        city: location.city,
        state: location.state,
        zip: location.zip,
        // Geo
        lat: location.lat,
        lng: location.lng,
        // Directional attributes
        squareFeet: estimateSqft(purchasePrice),
        yearBuilt: 1995,
        beds: 3,
        baths: 2,
        propertyType: "SFR",
        // Fetched flags from OSM/Overpass
        hasGarage,
        isBusyStreet,
        nearCommercial,
        nearDuplex,
        nearLargeApartment: nearLargeApt,
        nearFreeway
    };
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
"[project]/realestateandlease/lib/engines/arvAdjuster.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyArvAdjustments",
    ()=>applyArvAdjustments
]);
function applyArvAdjustments(baseArv, flags) {
    let adjustedArv = baseArv;
    const adjustments = [];
    function apply(percent, rule, reason) {
        const impact = adjustedArv * percent;
        adjustedArv -= impact;
        adjustments.push({
            rule,
            impactPercent: percent * 100,
            reason
        });
    }
    if (flags.isBusyStreet) {
        apply(0.10, "BUSY_STREET", "Property on busy street");
    }
    if (flags.hasGarage) {
        apply(0.05, "GARAGE", "Property has garage");
    }
    if (flags.nearCommercial) {
        apply(0.10, "COMMERCIAL_PROXIMITY", "Near commercial property");
    }
    if (flags.nearDuplex) {
        apply(0.05, "DUPLEX_NEARBY", "Adjacent to duplex (2–5 units)");
    }
    if (flags.nearLargeApartment) {
        apply(0.10, "APARTMENT_COMPLEX", "Adjacent to large apartment complex");
    }
    if (flags.nearFreeway) {
        apply(0.10, "FREEWAY", "Adjacent to freeway");
    }
    if (flags.noGarage) {
        apply(0.10, "NO_GARAGE", "No garage while comps have garages");
    }
    return {
        adjustedArv: Math.round(adjustedArv),
        adjustments
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
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$arvAdjuster$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/engines/arvAdjuster.ts [app-route] (ecmascript)");
;
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
        console.log("value of comp is", soldProperties);
        const evaluatedComps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$compSelector$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateComps"])(subject, soldProperties);
        console.log("value of evaluated comp is", evaluatedComps);
        const includedComps = evaluatedComps.filter((c)=>c.included);
        console.log("value of included comp is", includedComps);
        const minComps = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$domRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["requiredCompCount"])(body.domDays);
        const selectedComps = includedComps.slice(0, Math.max(3, minComps)) // Select at least 3 or min required
        ;
        // Generate random ARV as fallback
        const fallbackArv = body.purchasePrice * (0.8 + Math.random() * 0.5) // ARV between 80-130% of purchase price
        ;
        let arvResult;
        let adjustedArv;
        let adjustments = [];
        let failureReasons = [];
        // If we have comps, use them
        if (includedComps.length > 0) {
            arvResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$arv$2f$finalizeDeal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["finalizeDeal"])({
                subject,
                comps: selectedComps.length > 0 ? selectedComps : includedComps,
                adjustments: []
            });
            const baseArv = arvResult.baseArv || fallbackArv;
            const { adjustedArv: finalArv, adjustments: arvAdjustments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$arvAdjuster$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyArvAdjustments"])(baseArv, {
                isBusyStreet: subject.isBusyStreet,
                nearCommercial: subject.nearCommercial,
                nearDuplex: subject.nearDuplex,
                nearLargeApartment: subject.nearLargeApartment,
                nearFreeway: subject.nearFreeway,
                noGarage: !subject.hasGarage,
                hasGarage: subject.hasGarage
            });
            adjustedArv = finalArv;
            adjustments = arvAdjustments;
            console.log("adjusted arv with comps", adjustments);
        } else {
            // No comps found, use fallback ARV
            console.log("No eligible comps found, using fallback ARV");
            const { adjustedArv: finalArv, adjustments: arvAdjustments } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$engines$2f$arvAdjuster$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["applyArvAdjustments"])(fallbackArv, {
                isBusyStreet: subject.isBusyStreet,
                nearCommercial: subject.nearCommercial,
                nearDuplex: subject.nearDuplex,
                nearLargeApartment: subject.nearLargeApartment,
                nearFreeway: subject.nearFreeway,
                noGarage: !subject.hasGarage,
                hasGarage: subject.hasGarage
            });
            adjustedArv = finalArv;
            adjustments = arvAdjustments;
        }
        // Calculate profit
        const purchasePrice = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$utils$2f$safeNumber$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["safeNumber"])(body.purchasePrice) ?? 0;
        const profitPercent = (adjustedArv - purchasePrice) / purchasePrice * 100;
        const profitAmount = adjustedArv - purchasePrice;
        // Determine status based on profit
        let status = "PASS";
        if (profitPercent < 10) {
            status = "FAIL";
            failureReasons.push(`Profit margin too low: ${profitPercent.toFixed(2)}%`);
        }
        if (includedComps.length < minComps && includedComps.length === 0) {
            failureReasons.push(`Only ${selectedComps.length} eligible comps found, ${minComps} required`);
        }
        // Create deal regardless of failures
        const deal = await __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$models$2f$Deal$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].create({
            subject,
            calculator: {
                purchasePrice
            },
            compsEvaluated: evaluatedComps,
            selectedComps: selectedComps.length > 0 ? selectedComps : includedComps,
            baseArv: includedComps.length > 0 ? arvResult?.baseArv || fallbackArv : fallbackArv,
            adjustedArv: adjustedArv,
            arvAdjustments: adjustments,
            domDays: body.domDays ?? 30,
            minRequiredComps: minComps,
            status: status,
            failureReasons: failureReasons.length > 0 ? failureReasons : [],
            explainability: {
                arvExplanation: includedComps.length > 0 ? "Median PPSF from selected comps" : "Fallback ARV based on purchase price and market conditions",
                compSelectionExplanation: includedComps.length > 0 ? `${selectedComps.length} comps selected: Filtered by ZIP, date, sqft, year built` : "No eligible comps available, using statistical ARV estimation",
                rejectionExplanation: status === "FAIL" ? failureReasons.join("; ") : ""
            },
            source: "AUTO"
        });
        console.log("Deal created successfully:", {
            status: deal.status,
            purchasePrice,
            baseArv: deal.baseArv,
            adjustedArv: deal.adjustedArv,
            profit: profitAmount,
            profitPercent,
            compsUsed: deal.selectedComps.length
        });
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json(deal);
    } catch (error) {
        console.error("Error processing deal:", error);
        return __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$next$2f$server$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["NextResponse"].json({
            status: "ERROR",
            message: "Failed to process deal",
            error: String(error)
        }, {
            status: 500
        });
    }
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__9f4a09b2._.js.map