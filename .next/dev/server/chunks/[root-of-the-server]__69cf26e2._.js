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
"[externals]/puppeteer [external] (puppeteer, esm_import)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

const mod = await __turbopack_context__.y("puppeteer");

__turbopack_context__.n(mod);
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, true);}),
"[project]/realestateandlease/lib/sourcing/publicSourceAdapter.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__,
    "fetchFromPublicSource",
    ()=>fetchFromPublicSource
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__ = __turbopack_context__.i("[externals]/puppeteer [external] (puppeteer, esm_import)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
function sleep(ms) {
    return new Promise((resolve)=>setTimeout(resolve, ms));
}
async function fetchFromPublicSource() {
    console.log("📥 STEP 1: FETCHING DATA FROM PUBLIC SOURCE");
    console.log("🌐 Source: Zillow (Dallas–Fort Worth)");
    console.log("🤖 Loading real Zillow page with browser...\n");
    let browser = null;
    try {
        // Launch browser
        console.log("🔄 Launching browser...");
        browser = await __TURBOPACK__imported__module__$5b$externals$5d2f$puppeteer__$5b$external$5d$__$28$puppeteer$2c$__esm_import$29$__["default"].launch({
            headless: "new",
            args: [
                "--no-sandbox",
                "--disable-setuid-sandbox",
                "--disable-dev-shm-usage",
                "--disable-gpu",
                "--disable-blink-features=AutomationControlled"
            ]
        });
        const page = await browser.newPage();
        // Set realistic viewport
        await page.setViewport({
            width: 1920,
            height: 1080
        });
        // Set realistic user agent
        await page.setUserAgent("Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36");
        // Bypass detection
        await page.evaluateOnNewDocument(()=>{
            Object.defineProperty(navigator, "webdriver", {
                get: ()=>false
            });
        });
        // Add delay before navigation
        await sleep(1000);
        // Navigate to Zillow
        console.log("🔗 Loading Zillow Dallas listings...");
        await page.goto("https://www.zillow.com/homes/for_sale/Dallas-TX/?searchQueryState=%7B%22pagination%22%3A%7B%7D%2C%22usersSearchQueryState%22%3A%7B%22isMapSearch%22%3Afalse%7D%7D", {
            waitUntil: "networkidle2",
            timeout: 60000
        });
        console.log("✅ Page loaded\n");
        // Wait for listings to appear
        console.log("⏳ Waiting for listings to load...");
        await page.waitForSelector("[data-testid*='property-card']", {
            timeout: 30000
        }).catch(()=>console.log("Property cards not found, trying alternative selectors..."));
        // Add delay to ensure content is loaded
        await sleep(2000);
        // Extract listings data
        console.log("🔍 Extracting listings data...\n");
        const listings = await page.evaluate(()=>{
            const results = [];
            // Try multiple selectors to find listings
            const selectors = [
                "[data-testid*='property-card']",
                "[data-testid='property-card']",
                "article",
                "[role='article']"
            ];
            let elements = [];
            for (const selector of selectors){
                const found = document.querySelectorAll(selector);
                if (found.length > 0) {
                    elements = Array.from(found);
                    break;
                }
            }
            console.log(`Found ${elements.length} property cards`);
            elements.forEach((element, index)=>{
                try {
                    // Extract address
                    const addressEl = element.querySelector("[data-testid*='address'], .list-card-addr, [class*='address']");
                    const address = addressEl?.textContent?.trim() || "";
                    if (!address || address.length === 0) return;
                    // Extract price
                    const priceEl = element.querySelector("[data-testid*='price'], .list-card-price, [class*='price']");
                    const priceText = priceEl?.textContent?.trim() || "";
                    const price = parseInt(priceText.replace(/[^0-9]/g, "")) || 0;
                    // Extract beds
                    const bedsEl = element.querySelector("[data-testid*='bed'], [class*='bed']");
                    const bedsText = bedsEl?.textContent?.trim() || "";
                    const beds = parseInt(bedsText.replace(/[^0-9]/g, "")) || 0;
                    // Extract baths
                    const bathsEl = element.querySelector("[data-testid*='bath'], [class*='bath']");
                    const bathsText = bathsEl?.textContent?.trim() || "";
                    const baths = parseFloat(bathsText.replace(/[^0-9.]/g, "")) || 0;
                    // Extract sqft
                    const sqftEl = element.querySelector("[data-testid*='sqft'], [class*='sqft']");
                    const sqftText = sqftEl?.textContent?.trim() || "";
                    const sqft = parseInt(sqftText.replace(/[^0-9]/g, "")) || 0;
                    // Extract status
                    const statusEl = element.querySelector("[data-testid*='status'], [class*='status']");
                    const statusText = statusEl?.textContent?.trim() || "ACTIVE";
                    const status = statusText.toUpperCase().includes("SOLD") ? "SOLD" : statusText.toUpperCase().includes("PENDING") ? "PENDING" : "ACTIVE";
                    // Only add if we have minimum data
                    if (address && beds > 0 && baths > 0 && price > 50000) {
                        results.push({
                            address,
                            price,
                            beds,
                            baths,
                            sqft,
                            status,
                            index
                        });
                    }
                } catch (err) {
                // Skip this element
                }
            });
            return results;
        });
        if (listings.length === 0) {
            throw new Error("No listings found. Zillow may have blocked the request or changed their page structure.");
        }
        console.log(`✅ Extracted ${listings.length} real listings from Zillow\n`);
        // Format listings
        const formattedListings = listings.map((listing, i)=>{
            // Parse address
            const parts = listing.address.split(",").map((p)=>p.trim());
            const street = parts[0] || "Unknown";
            const city = parts[1] || "Dallas";
            const stateZip = parts[2] || "";
            const zip = stateZip.match(/\d{5}/)?.[0] || "75001";
            return {
                externalId: `ZILLOW_${Date.now()}_${i}`,
                address: street,
                city,
                state: "TX",
                zip,
                price: listing.price,
                beds: listing.beds,
                baths: listing.baths,
                sqft: listing.sqft,
                dom: null,
                status: listing.status,
                updatedAt: new Date().toISOString()
            };
        });
        return formattedListings;
    } catch (error) {
        console.error(`\n❌ Error: ${error.message}\n`);
        if (error.message.includes("403")) {
            console.error("Your IP was blocked by Zillow. Options:");
            console.error("1. Wait 1-2 hours for the block to expire");
            console.error("2. Use a VPN to get a new IP");
            console.error("3. Use a paid proxy service");
        } else if (error.message.includes("No listings found")) {
            console.error("Could not find listings on the page.");
            console.error("This might mean:");
            console.error("- Zillow blocked automated access");
            console.error("- The page structure changed");
            console.error("- The search URL is no longer valid");
        }
        throw error;
    } finally{
        if (browser) {
            await browser.close();
        }
    }
}
const __TURBOPACK__default__export__ = fetchFromPublicSource;
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
"[project]/realestateandlease/lib/sourcing/normalizeListing.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// This should be in your lib/sourcing/normalizeListing.ts
__turbopack_context__.s([
    "normalizeListing",
    ()=>normalizeListing
]);
function normalizeListing(record) {
    try {
        // Validate required fields
        if (!record || typeof record !== "object") {
            console.warn("Invalid record format:", record);
            return undefined;
        }
        // Check for required fields
        const requiredFields = [
            "externalId",
            "address",
            "city",
            "state",
            "zip",
            "price",
            "beds",
            "baths",
            "sqft",
            "dom",
            "status"
        ];
        const missing = requiredFields.filter((field)=>!(field in record));
        if (missing.length > 0) {
            console.warn(`Missing required fields: ${missing.join(", ")}`);
            return undefined;
        }
        // Ensure externalId is numeric
        const externalId = typeof record.externalId === "string" ? record.externalId : parseInt(String(record.externalId), 10);
        if (!externalId) {
            console.warn("externalId must be a string:", record.externalId);
            return undefined;
        }
        // Return normalized listing
        const normalized = {
            externalId: externalId,
            address: String(record.address).trim(),
            city: String(record.city).trim(),
            state: String(record.state).trim(),
            zip: String(record.zip).trim(),
            price: Math.round(Number(record.price)),
            beds: Math.round(Number(record.beds)),
            baths: Math.round(Number(record.baths)),
            sqft: Math.round(Number(record.sqft)),
            status: String(record.status).trim(),
            dom: record.dom !== undefined ? Math.round(Number(record.dom)) : undefined,
            busy_road: Boolean(record.busy_road),
            near_commercial: Boolean(record.near_commercial),
            multifamily_nearby: Boolean(record.multifamily_nearby),
            has_garage: Boolean(record.has_garage),
            has_freeway_access: Boolean(record.has_freeway_access),
            soldDate: record.soldDate ? String(record.soldDate).trim() : undefined,
            yearBuilt: record.yearBuilt ? Math.round(Number(record.yearBuilt)) : undefined,
            updatedAt: record.updatedAt || new Date().toISOString()
        };
        return normalized;
    } catch (err) {
        console.error("Error normalizing listing:", err, "Record was:", record);
        return undefined;
    }
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
        externalId: listing.externalId,
        address: listing.address,
        city: listing.city,
        state: listing.state,
        zip: listing.zip,
        price: listing.price,
        beds: listing.beds,
        baths: listing.baths,
        sqft: listing.sqft,
        status: listing.status ?? "ACTIVE",
        dom: listing.dom,
        busy_road: listing.busy_road ?? false,
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
const seen = new Map();
function dedupe(listing, fp) {
    const prev = seen.get(listing.externalId);
    if (!prev) {
        seen.set(listing.externalId, fp);
        console.log("🆕 NEW LISTING");
        return "NEW";
    }
    if (prev === fp) {
        console.log("⏭ UNCHANGED — skipped");
        return "UNCHANGED";
    }
    seen.set(listing.externalId, fp);
    console.log("♻ CHANGED — re-evaluating");
    return "CHANGED";
}
}),
"[project]/realestateandlease/lib/comps/neighborhoodRules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isSameNeighborhood",
    ()=>isSameNeighborhood
]);
function isSameNeighborhood(subjectZip, compZip) {
    return subjectZip === compZip;
}
}),
"[project]/realestateandlease/lib/comps/selectComps.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "selectComps",
    ()=>selectComps
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$comps$2f$neighborhoodRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/comps/neighborhoodRules.ts [app-route] (ecmascript)");
;
function monthsBetween(a, b) {
    return Math.abs((a.getFullYear() - b.getFullYear()) * 12 + (a.getMonth() - b.getMonth()));
}
function selectComps(subject, comps) {
    console.log("\n🏘️  STEP 3: COMP ELIGIBILITY ENFORCEMENT");
    const eligibleComps = [];
    const excludedComps = [];
    const now = new Date();
    for (const comp of comps){
        const reasons = [];
        // 1️⃣ Neighborhood boundary (ZIP-based)
        if (!(0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$comps$2f$neighborhoodRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["isSameNeighborhood"])(subject.zip, comp.zip)) {
            reasons.push("Outside neighborhood boundary");
        }
        // 2️⃣ Sold date: within last 3–6 months
        if (!comp.soldDate) {
            reasons.push("Missing sold date");
        } else {
            const monthsOld = monthsBetween(now, new Date(comp.soldDate));
            if (monthsOld < 3 || monthsOld > 6) {
                reasons.push(`Sold date ${monthsOld} months ago (outside 3–6 month window)`);
            }
        }
        // 3️⃣ Square footage ±10%
        const sqftDelta = Math.abs(comp.sqft - subject.sqft) / subject.sqft;
        if (sqftDelta > 0.1) {
            reasons.push("Sqft variance > ±10%");
        }
        // 4️⃣ Year built range (±10–12 years)
        if (!comp.yearBuilt || !subject.yearBuilt) {
            reasons.push("Missing year built data");
        } else {
            const yearDiff = Math.abs(comp.yearBuilt - subject.yearBuilt);
            if (yearDiff > 12) {
                reasons.push(`Year built difference ${yearDiff} years (>12)`);
            }
        }
        // ❌ Excluded
        if (reasons.length > 0) {
            console.log(`❌ COMP EXCLUDED: ${comp.address}`);
            reasons.forEach((r)=>console.log(`   → ${r}`));
            excludedComps.push({
                compId: comp.externalId,
                address: comp.address,
                reasons
            });
            continue;
        }
        // ✅ Included
        console.log(`✅ COMP INCLUDED: ${comp.address}`);
        console.log(`   → Sqft: ${comp.sqft} (${subject.sqft} subject)`);
        console.log(`   → Year Built: ${comp.yearBuilt} (${subject.yearBuilt} subject)`);
        console.log(`   → Sold Date: ${comp.soldDate} (${monthsBetween(now, new Date(comp.soldDate))} months ago)`);
        eligibleComps.push(comp);
    }
    // 📊 DOM-BASED MINIMUM COMP ENFORCEMENT
    let minRequired = 1;
    if (subject.dom >= 90) minRequired = 3;
    else if (subject.dom >= 60) minRequired = 2;
    else if (subject.dom <= 30) minRequired = 1;
    console.log("\n📊 DOM-BASED COMP REQUIREMENTS");
    console.log(`   Subject DOM: ${subject.dom} days`);
    console.log(`   Minimum required COMPs: ${minRequired}`);
    console.log(`   Eligible COMPs found: ${eligibleComps.length}`);
    if (eligibleComps.length < minRequired) {
        console.log(`❌ INSUFFICIENT COMPS: ${eligibleComps.length}/${minRequired} required`);
    } else {
        console.log(`✅ COMP REQUIREMENT MET: ${eligibleComps.length}/${minRequired}`);
    }
    // 📋 Summary of included comps
    if (eligibleComps.length > 0) {
        console.log("\n📋 SUMMARY OF INCLUDED COMPS:");
        eligibleComps.forEach((comp, index)=>{
            console.log(`   ${index + 1}. ${comp.address}  || 'N/A'}`);
        });
    }
    return {
        selectedComps: eligibleComps,
        excludedComps,
        minRequired
    };
}
}),
"[project]/realestateandlease/lib/comps/compExplainability.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "explainComp",
    ()=>explainComp
]);
function explainComp(subject, comp) {
    const reasons = [];
    if (Math.abs(comp.sqft - subject.sqft) / subject.sqft > 0.2) {
        reasons.push("Sqft variance > 20%");
    }
    if (comp.dom && comp.dom > 120) {
        reasons.push("DOM exceeds 120 days");
    }
    if (comp.yearBuilt && subject.yearBuilt) {
        if (Math.abs(comp.yearBuilt - subject.yearBuilt) > 20) {
            reasons.push("Year-built outside tolerance");
        }
    }
    return {
        compId: comp.externalId,
        included: reasons.length === 0,
        reasons
    };
}
}),
"[project]/realestateandlease/lib/underwriting/negativeRules.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "detectNegativeFactors",
    ()=>detectNegativeFactors
]);
function detectNegativeFactors(listing) {
    const negatives = [];
    // Simulate negative factors based on property characteristics
    // In production, these would come from actual site surveys/inspections
    // Factor 1: Properties with very high DOM (Days on Market) - stale listings
    if (listing.dom !== null && listing.dom > 120) {
        negatives.push("High DOM (120+ days) - stale listing");
    }
    // Factor 2: SOLD status might indicate market issues
    if (listing.status === "SOLD") {
        negatives.push("Sold status - may indicate past market issues");
    }
    if (listing.busy_road) {
        negatives.push("Located on a busy road - potential noise/traffic issues");
    }
    if (listing.near_commercial) {
        negatives.push("Near commercial properties - possible nuisances");
    }
    if (listing.multifamily_nearby) {
        negatives.push("Multifamily properties nearby - may affect desirability");
    }
    if (!listing.has_garage) {
        negatives.push("No garage - limits parking/storage options");
    }
    if (!listing.has_freeway_access) {
        negatives.push("Lacks freeway access - may impact commute times");
    }
    // Factor 3: Certain ZIP codes have known environmental issues (example)
    // const problematicZips = ["75006", "76010"] // Carrollton, Arlington
    // if (problematicZips.includes(listing.zip)) {
    //   negatives.push("Location in zone with environmental concerns")
    // }
    // Factor 4: Very low price per sqft (< $150/sqft) might indicate structural issues
    // const pricePerSqft = listing.price / listing.sqft
    // if (pricePerSqft < 150) {
    //   negatives.push(`Low price per sqft ($${pricePerSqft.toFixed(2)}) - possible structural issues`)
    // }
    return negatives;
}
}),
"[project]/realestateandlease/lib/underwriting/costConfig.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "COST_CONFIG",
    ()=>COST_CONFIG
]);
const COST_CONFIG = {
    closingCostPct: 0.02,
    monthlyHoldingPct: 0.01,
    holdingMonths: 3,
    rehabPerSqft: 35
};
}),
"[project]/realestateandlease/lib/underwriting/evaluateProperty.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "evaluateProperty",
    ()=>evaluateProperty
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$negativeRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/underwriting/negativeRules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$costConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/underwriting/costConfig.ts [app-route] (ecmascript)");
;
;
const NEGATIVE_ADJUSTMENTS = {
    "Located on a busy road - potential noise/traffic issues": 0.05,
    "Near commercial properties - possible nuisances": 0.04,
    "Multifamily properties nearby - may affect desirability": 0.03,
    "No garage - limits parking/storage options": 0.02,
    "Lacks freeway access - may impact commute times": 0.02,
    "High DOM (120+ days) - stale listing": 0.03
};
function evaluateProperty(listing) {
    const negatives = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$negativeRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectNegativeFactors"])(listing);
    const baseArv = Math.round(listing.price * 1.25);
    let currentArv = baseArv;
    const adjustmentSteps = [];
    // 🚫 AUTO-REJECT RULE
    if (negatives.length >= 2) {
        return {
            externalId: listing.externalId,
            address: listing.address,
            underwriting: {
                status: "FAIL",
                failureReasons: negatives
            },
            evaluatedAt: new Date().toISOString()
        };
    }
    // ✅ APPLY ADJUSTMENTS ONE-BY-ONE
    for (const factor of negatives){
        const pct = NEGATIVE_ADJUSTMENTS[factor] || 0;
        const before = currentArv;
        const reduction = Math.round(before * pct);
        const after = before - reduction;
        adjustmentSteps.push({
            factor,
            percentApplied: `${(pct * 100).toFixed(1)}%`,
            arvBefore: before,
            arvAfter: after
        });
        currentArv = after;
    }
    const purchasePrice = listing.price;
    const closingCosts = Math.round(purchasePrice * __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$costConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COST_CONFIG"].closingCostPct);
    const holdingCosts = Math.round(purchasePrice * __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$costConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COST_CONFIG"].monthlyHoldingPct * __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$costConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COST_CONFIG"].holdingMonths);
    const rehabCost = Math.round(listing.sqft * __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$costConfig$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["COST_CONFIG"].rehabPerSqft);
    const totalCosts = closingCosts + holdingCosts + rehabCost + purchasePrice;
    return {
        externalId: listing.externalId,
        address: listing.address,
        underwriting: {
            status: "PASS",
            arv: {
                baseArv,
                finalArv: currentArv,
                adjustmentSteps
            },
            costs: {
                purchasePrice,
                closingCosts,
                holdingCosts,
                rehabCost,
                totalCosts
            },
            negativeFactors: negatives
        },
        evaluatedAt: new Date().toISOString()
    };
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
"[project]/realestateandlease/exports/exportEvaluations.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "exportCompExplanations",
    ()=>exportCompExplanations,
    "exportEvaluations",
    ()=>exportEvaluations,
    "exportSummary",
    ()=>exportSummary,
    "listGeneratedFiles",
    ()=>listGeneratedFiles,
    "saveNormalizedListings",
    ()=>saveNormalizedListings,
    "saveRawPayload",
    ()=>saveRawPayload
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs [external] (fs, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
const EXPORTS_DIR = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), "exports");
// Ensure exports directory exists
function ensureExportsDir() {
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(EXPORTS_DIR)) {
        __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].mkdirSync(EXPORTS_DIR, {
            recursive: true
        });
    }
}
function saveRawPayload(raw) {
    ensureExportsDir();
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(EXPORTS_DIR, "raw-payload.json");
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(raw, null, 2));
    console.log(`   📄 Saved: ${filePath}`);
}
function saveNormalizedListings(listings) {
    ensureExportsDir();
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(EXPORTS_DIR, "normalized-listings.json");
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(listings, null, 2));
    console.log(`   📄 Saved: ${filePath}`);
}
function exportEvaluations(evaluations) {
    ensureExportsDir();
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(EXPORTS_DIR, "evaluations.json");
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(evaluations, null, 2));
    console.log(`   📄 Saved: ${filePath}`);
}
function exportCompExplanations(compExplanations) {
    ensureExportsDir();
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(EXPORTS_DIR, "comp-explanations.json");
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(compExplanations, null, 2));
    console.log(`   📄 Saved: ${filePath}`);
}
function exportSummary(fetchedCount, normalizedCount, evaluatedCount, statusBreakdown) {
    ensureExportsDir();
    const summary = {
        pipelineRunAt: new Date().toISOString(),
        steps: {
            step1_ingestion: {
                name: "Real Public-Source Ingestion (Non-Simulated)",
                source: "Realtor.com (Dallas–Fort Worth)",
                fetched: fetchedCount,
                status: "✅ Complete"
            },
            step2_normalization: {
                name: "Normalization & DOM/Status Tracking",
                normalized: normalizedCount,
                normalizeRate: fetchedCount > 0 ? (normalizedCount / fetchedCount * 100).toFixed(2) + "%" : "N/A",
                status: "✅ Complete"
            },
            step3_neighborhood: {
                name: "Neighborhood Boundary Enforcement (COMP Selection)",
                propertiesEvaluated: normalizedCount,
                status: "✅ Complete"
            },
            step4_compExplainability: {
                name: "COMP Rule Explainability (JSON Export)",
                exportFile: "comp-explanations.json",
                status: "✅ Complete"
            },
            step5_negativeAdjustments: {
                name: "Negative Adjustments & Automatic Rejection",
                evaluated: evaluatedCount,
                status: "✅ Complete"
            },
            step6_export: {
                name: "Data Export & Storage",
                files: [
                    "raw-payload.json",
                    "normalized-listings.json",
                    "evaluations.json",
                    "comp-explanations.json",
                    "pipeline-summary.json"
                ],
                status: "✅ Complete"
            }
        },
        results: {
            totalEvaluated: evaluatedCount,
            statusBreakdown: statusBreakdown,
            passRate: evaluatedCount > 0 ? ((statusBreakdown.find((s)=>s.status === "PASS")?.count || 0) / evaluatedCount * 100).toFixed(2) + "%" : "N/A"
        }
    };
    const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(EXPORTS_DIR, "pipeline-summary.json");
    __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].writeFileSync(filePath, JSON.stringify(summary, null, 2));
    console.log(`   📄 Saved: ${filePath}`);
}
function listGeneratedFiles() {
    ensureExportsDir();
    if (!__TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].existsSync(EXPORTS_DIR)) {
        console.log("   (No files generated yet)");
        return;
    }
    const files = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].readdirSync(EXPORTS_DIR);
    if (files.length === 0) {
        console.log("   (No files in exports directory)");
        return;
    }
    console.log(`\n   Found ${files.length} files in ${EXPORTS_DIR}:`);
    files.forEach((file)=>{
        const filePath = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(EXPORTS_DIR, file);
        const stats = __TURBOPACK__imported__module__$5b$externals$5d2f$fs__$5b$external$5d$__$28$fs$2c$__cjs$29$__["default"].statSync(filePath);
        const sizeKb = (stats.size / 1024).toFixed(2);
        console.log(`   • ${file} (${sizeKb} KB)`);
    });
}
}),
"[externals]/events [external] (events, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("events", () => require("events"));

module.exports = mod;
}),
"[externals]/url [external] (url, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("url", () => require("url"));

module.exports = mod;
}),
"[externals]/util [external] (util, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("util", () => require("util"));

module.exports = mod;
}),
"[externals]/http [external] (http, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("http", () => require("http"));

module.exports = mod;
}),
"[externals]/https [external] (https, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("https", () => require("https"));

module.exports = mod;
}),
"[externals]/zlib [external] (zlib, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("zlib", () => require("zlib"));

module.exports = mod;
}),
"[externals]/stream [external] (stream, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("stream", () => require("stream"));

module.exports = mod;
}),
"[externals]/net [external] (net, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("net", () => require("net"));

module.exports = mod;
}),
"[externals]/dns [external] (dns, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("dns", () => require("dns"));

module.exports = mod;
}),
"[externals]/os [external] (os, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("os", () => require("os"));

module.exports = mod;
}),
"[externals]/tls [external] (tls, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("tls", () => require("tls"));

module.exports = mod;
}),
"[externals]/child_process [external] (child_process, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("child_process", () => require("child_process"));

module.exports = mod;
}),
"[project]/realestateandlease/lib/notification/emailService.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "sendDailyPassEmail",
    ()=>sendDailyPassEmail
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/node_modules/nodemailer/lib/nodemailer.js [app-route] (ecmascript)");
;
async function sendDailyPassEmail(deals) {
    if (deals.length === 0) return;
    const transporter = __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$node_modules$2f$nodemailer$2f$lib$2f$nodemailer$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__["default"].createTransport({
        host: process.env.SMTP_HOST,
        port: Number(process.env.SMTP_PORT),
        secure: false,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    });
    const body = `
Daily PASS Deals (${new Date().toDateString()})

${deals.map((d, i)=>`
${i + 1}. ${d.address}
   PP: $${d.purchasePrice.toLocaleString()}
   ARV: $${d.finalArv.toLocaleString()}
   Margin: ${d.marginPercent.toFixed(1)}%
`).join("\n")}

Phase 1 – Screening output only.
All figures are assumption-based and non-binding.
`;
    await transporter.sendMail({
        from: `"Deal Screener" <${process.env.SMTP_USER}>`,
        to: process.env.DAILY_DEALS_EMAIL,
        subject: `Daily PASS Deals – ${deals.length} Properties`,
        text: body
    });
}
}),
"[project]/realestateandlease/testscript/test.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

return __turbopack_context__.a(async (__turbopack_handle_async_dependencies__, __turbopack_async_result__) => { try {

__turbopack_context__.s([
    "run",
    ()=>run
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicSourceAdapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/publicSourceAdapter.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$normalizeListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/sourcing/normalizeListing.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/dedupe/fingerprint.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$dedupeListings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/dedupe/dedupeListings.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$comps$2f$selectComps$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/comps/selectComps.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$comps$2f$compExplainability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/comps/compExplainability.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$evaluateProperty$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/underwriting/evaluateProperty.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$negativeRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/underwriting/negativeRules.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/exports/exportEvaluations.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$notification$2f$emailService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/realestateandlease/lib/notification/emailService.ts [app-route] (ecmascript)");
var __turbopack_async_dependencies__ = __turbopack_handle_async_dependencies__([
    __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicSourceAdapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicSourceAdapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
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
// Helper function to deep log objects and arrays
function logDeep(label, data, depth = 10) {
    console.log(`\n>>> ${label}:`);
    console.log(JSON.stringify(data, null, 2));
}
let passEmailPayload = [];
async function run() {
    console.log("\n" + "=".repeat(80));
    console.log("🚀 PIPELINE STARTED:", new Date().toISOString());
    console.log("=".repeat(80));
    // ✅ STEP 1: REAL PUBLIC-SOURCE INGESTION (Non-Simulated)
    console.log("\n📥 STEP 1: FETCHING DATA FROM PUBLIC SOURCE");
    console.log("🌐 Source: Realtor.com (Dallas–Fort Worth)");
    const raw = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$publicSourceAdapter$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchFromPublicSource"])();
    console.log(`✓ Fetched ${raw.length} raw records from source`);
    // ✅ Raw payload proof
    console.log("\n📸 RAW PAYLOAD SAMPLE (First Record):");
    if (raw.length > 0) {
        logDeep("RAW RECORD EXAMPLE", raw[0]);
    }
    // ✅ STEP 2: NORMALIZATION & DOM/STATUS TRACKING
    console.log("\n📝 STEP 2: NORMALIZING & PROCESSING RECORDS");
    console.log("📌 Tracking: DOM field + listing status");
    const normalizedListings = [];
    const evaluatedProperties = [];
    const compExplanations = [];
    const evaluationsByStatus = {};
    const domTrackingLog = [];
    for(let i = 0; i < raw.length; i++){
        const record = raw[i];
        console.log(`\n${"─".repeat(80)}`);
        console.log(`PROCESSING RECORD ${i + 1}/${raw.length} (ID: ${record.externalId})`);
        console.log(`${"─".repeat(80)}`);
        // Log raw record
        logDeep(`RAW RECORD`, record);
        // ✅ Normalize
        const listing = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$sourcing$2f$normalizeListing$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["normalizeListing"])(record);
        if (!listing) {
            console.warn(`❌ WARNING: normalizeListing returned undefined for record ID: ${record.externalId}`);
            console.warn("Raw record was:", record);
            continue;
        }
        logDeep(`NORMALIZED LISTING`, listing);
        normalizedListings.push(listing);
        // ✅ DOM & Status Tracking
        console.log("\n📊 DOM & STATUS TRACKING");
        console.log(`   DOM: ${listing.dom !== null ? listing.dom + " days" : "NOT AVAILABLE"}`);
        console.log(`   Status: ${listing.status || "NOT AVAILABLE"}`);
        domTrackingLog.push({
            externalId: listing.externalId,
            address: listing.address,
            dom: listing.dom,
            status: listing.status
        });
        // ✅ Fingerprint (includes DOM + status)
        const fp = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$fingerprint$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fingerprint"])(listing);
        console.log("\n🔐 FINGERPRINT (DOM & STATUS INCLUDED)");
        logDeep(`FINGERPRINT COMPONENTS`, {
            fingerprint: fp,
            address: listing.address,
            city: listing.city,
            price: listing.price,
            sqft: listing.sqft,
            dom: listing.dom,
            status: listing.status,
            busy_road: listing.busy_road ?? false
        });
        // ✅ Dedupe
        const dedupeResult = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$dedupe$2f$dedupeListings$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["dedupe"])(listing, fp);
        console.log(`\n📊 DEDUPE RESULT: ${dedupeResult}`);
        if (dedupeResult === "UNCHANGED") {
            console.log("→ Skipping unchanged listing");
            continue;
        }
        // ✅ STEP 3: NEIGHBORHOOD BOUNDARY ENFORCEMENT (COMP SELECTION)
        console.log("\n🏘️  STEP 3: NEIGHBORHOOD BOUNDARY ENFORCEMENT (COMP SELECTION)");
        // Simulated COMP pool (in production, this would be a larger database)
        const allComps = normalizedListings.filter((l)=>l.externalId !== listing.externalId);
        const { selectedComps, excludedComps, minRequired } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$comps$2f$selectComps$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["selectComps"])(listing, allComps);
        console.log(`✓ Selected ${selectedComps.length}/${allComps.length} comparables`);
        // ✅ STEP 4: COMP RULE EXPLAINABILITY (JSON EXPORT)
        console.log("\n📋 STEP 4: COMP RULE EXPLAINABILITY");
        const compExplanationsList = selectedComps.map((comp)=>{
            const explanation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$comps$2f$compExplainability$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["explainComp"])(listing, comp);
            console.log(`   ${explanation.compId}: ${explanation.included ? "✅ INCLUDED" : "❌ EXCLUDED"}`);
            if (explanation.reasons.length > 0) {
                explanation.reasons.forEach((reason)=>console.log(`      → ${reason}`));
            }
            return explanation;
        });
        logDeep(`COMP EXPLANATIONS`, compExplanationsList);
        compExplanations.push({
            subjectId: listing.externalId,
            subjectAddress: listing.address,
            comparables: compExplanationsList
        });
        // ✅ STEP 5: NEGATIVE ADJUSTMENTS & AUTOMATIC REJECTION
        console.log("\n⚠️  STEP 5: NEGATIVE ADJUSTMENTS & AUTOMATIC REJECTION");
        const negativeFactors = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$negativeRules$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["detectNegativeFactors"])(listing);
        console.log(`\n📌 NEGATIVE FACTORS DETECTED: ${negativeFactors.length}`);
        if (negativeFactors.length > 0) {
            negativeFactors.forEach((factor, idx)=>{
                console.log(`   ${idx + 1}. ${factor}`);
            });
        } else {
            console.log("   ✓ No negative external factors");
        }
        // Apply evaluation logic with negative factor handling
        console.log("\n⚙️  EVALUATING PROPERTY");
        const evaluation = (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$underwriting$2f$evaluateProperty$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["evaluateProperty"])(listing);
        logDeep(`EVALUATION RESULT`, evaluation);
        if (evaluation.underwriting?.arv?.adjustmentSteps) {
            console.log("\n📉 NEGATIVE ADJUSTMENT MATH BREAKDOWN");
            evaluation.underwriting.arv.adjustmentSteps.forEach((step, idx)=>{
                console.log(`  ${idx + 1}. ${step.factor}`);
                console.log(`     → ${step.percentApplied} applied`);
                console.log(`     → ARV: $${step.arvBefore.toLocaleString()} → $${step.arvAfter.toLocaleString()}`);
            });
            console.log(`\n   Final Adjusted ARV: $${evaluation.underwriting.arv.finalArv.toLocaleString()}`);
        }
        // Log evaluation details with full expansion
        if (evaluation) {
            console.log("\n📋 EVALUATION DETAILS:");
            console.log("  externalId:", evaluation.externalId);
            console.log("  address:", evaluation.address);
            console.log("  evaluatedAt:", evaluation.evaluatedAt);
            if (evaluation.underwriting?.costs) {
                console.log("\n💰 COST BREAKDOWN (AUTO-APPLIED)");
                console.log(`   Purchase Price (PP): $${evaluation.underwriting.costs.purchasePrice.toLocaleString()}`);
                console.log(`   Closing Costs (CC): $${evaluation.underwriting.costs.closingCosts.toLocaleString()}`);
                console.log(`   Holding Costs: $${evaluation.underwriting.costs.holdingCosts.toLocaleString()}`);
                console.log(`   Rehab Cost: $${evaluation.underwriting.costs.rehabCost.toLocaleString()}`);
                console.log(`   Total Costs: $${evaluation.underwriting.costs.totalCosts.toLocaleString()}`);
            }
            if (evaluation.underwriting) {
                console.log("  underwriting:");
                const status = evaluation.underwriting.status;
                console.log("    status:", status);
                evaluationsByStatus[status] = (evaluationsByStatus[status] || 0) + 1;
                if (status === "FAIL") {
                    console.log("    ❌ AUTOMATIC REJECTION");
                    if (evaluation.underwriting.failureReasons) {
                        logDeep("    FAILURE REASONS", evaluation.underwriting.failureReasons);
                    }
                } else if (status === "PASS") {
                    console.log("    ✅ PASSED UNDERWRITING");
                    console.log("✅ Dilivered in Email");
                    if (evaluation.underwriting.arv) {
                        const { baseArv, finalArv } = evaluation.underwriting.arv;
                        console.log(`    Base ARV: $${baseArv.toLocaleString()}`);
                        console.log(`    Adjusted ARV: $${finalArv.toLocaleString()}`);
                        if (baseArv !== finalArv) {
                            const discount = ((1 - finalArv / baseArv) * 100).toFixed(1);
                            console.log(`    Adjustment: -${discount}% (for negative factors)`);
                        }
                    }
                    if (evaluation.underwriting.negativeFactors && evaluation.underwriting.negativeFactors.length > 0) {
                        console.log(`    Applied adjustments for ${evaluation.underwriting.negativeFactors.length} negative factor(s)`);
                    }
                    const costs = evaluation.underwriting?.costs;
                    const arv = evaluation.underwriting?.arv;
                    const marginPercent = (arv.finalArv - costs.purchasePrice) / arv.finalArv * 100;
                    passEmailPayload.push({
                        address: evaluation.address,
                        purchasePrice: costs.purchasePrice,
                        baseArv: arv.baseArv,
                        finalArv: arv.finalArv,
                        marginPercent
                    });
                //   if (evaluation.underwriting.costs) {
                //     logDeep("    COSTS", evaluation.underwriting.costs)
                //   }
                //   if (evaluation.underwriting.profit) {
                //     logDeep("    PROFIT", evaluation.underwriting.profit)
                //   }
                // }
                }
            }
            evaluatedProperties.push(evaluation);
        }
        // ✅ STEP 6: EXPORT/SAVE
        console.log("\n" + "=".repeat(80));
        console.log("💾 STEP 6: EXPORTING & SAVING DATA");
        console.log("=".repeat(80));
        // Save all at once (not in loop)
        console.log(`\n📦 Saving ${normalizedListings.length} normalized listings...`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveNormalizedListings"])(normalizedListings);
        console.log(`📦 Saving ${raw.length} raw records (proof of real source ingestion)...`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["saveRawPayload"])(raw);
        console.log(`📦 Saving ${evaluatedProperties.length} evaluations...`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportEvaluations"])(evaluatedProperties);
        console.log(`📦 Saving ${compExplanations.length} COMP rule explanations (JSON exportable)...`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportCompExplanations"])(compExplanations);
        // Generate summary
        const statusBreakdown = Object.entries(evaluationsByStatus).map(([status, count])=>({
                status,
                count
            }));
        console.log(`📦 Saving pipeline summary...`);
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$exports$2f$exportEvaluations$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["exportSummary"])(raw.length, normalizedListings.length, evaluatedProperties.length, statusBreakdown);
    // ✅ STEP 7: SUMMARY REPORT
    // console.log("\n" + "=".repeat(80))
    // console.log("📊 PIPELINE SUMMARY")
    // console.log("=".repeat(80))
    // console.log(`\n📥 STEP 1 - FETCHED: ${raw.length} records`)
    // const cityBreakdown = raw.reduce((acc: any, r: any) => {
    //   acc[r.city] = (acc[r.city] || 0) + 1
    //   return acc
    // }, {})
    // logDeep("Records by city", cityBreakdown)
    // console.log(`\n✅ STEP 2 - NORMALIZED: ${normalizedListings.length}/${raw.length} records`)
    // const normalizeRate =
    //   raw.length > 0 ? ((normalizedListings.length / raw.length) * 100).toFixed(2) : "N/A"
    // console.log(`   Success rate: ${normalizeRate}%`)
    // logDeep("DOM & Status Tracking", domTrackingLog.slice(0, 3))
    // console.log(`\n✅ STEP 3 - NEIGHBORHOOD ENFORCEMENT: ${normalizedListings.length} properties evaluated`)
    // console.log(`   All properties filtered by ZIP code boundary`)
    // console.log(`\n✅ STEP 4 - COMP EXPLANATIONS: ${compExplanations.length} COMP rule sets exported (JSON exportable)`)
    // console.log(`\n✅ STEP 5 - NEGATIVE FACTORS: Analyzed across all ${normalizedListings.length} properties`)
    // // const negativeFactorSummary = Object.entries(
    // //   evaluatedProperties.reduce((acc: any, e: any) => {
    // //     const negatives = e.underwriting?.negativeFactors || []
    // //     negatives.forEach((n: string) => {
    // //       acc[n] = (acc[n] || 0) + 1
    // //     })
    // //     return acc
    // //   }, {})
    // // )
    // const negativeFactorSummary = detectNegativeFactors(evaluatedProperties)
    // if (negativeFactorSummary.length > 0) {
    //   console.log(`   Found ${negativeFactorSummary.length} unique negative factor types:`)
    //   negativeFactorSummary.forEach(([factor, count]) => {
    //     console.log(`      • ${factor}: ${count} property(ies)`)
    //   })
    // } else {
    //   console.log(`   No negative factors detected`)
    // }
    // console.log(`\n✅ STEP 6 - EVALUATED: ${evaluatedProperties.length}/${normalizedListings.length} records`)
    // const evaluateRate =
    //   normalizedListings.length > 0
    //     ? ((evaluatedProperties.length / normalizedListings.length) * 100).toFixed(2)
    //     : "N/A"
    // console.log(`   Success rate: ${evaluateRate}%`)
    // logDeep("Evaluation breakdown", statusBreakdown)
    // const passCount = statusBreakdown.find((sb) => sb.status === "PASS")?.count || 0
    // const failCount = statusBreakdown.find((sb) => sb.status === "FAIL")?.count || 0
    // console.log(`\n   ✅ PASSED: ${passCount} properties`)
    // console.log(`   ❌ REJECTED: ${failCount} properties (≥2 negative factors)`)
    // // List all generated files
    // console.log("\n📂 Generated Files:")
    // listGeneratedFiles()
    // console.log("\n" + "=".repeat(80))
    // console.log("✅ PIPELINE COMPLETED:", new Date().toISOString())
    // console.log("=".repeat(80))
    // console.log("\n✨ FULLY SATISFIES ALL REQUIREMENTS:")
    // console.log("   ✅ Real public-source ingestion (Realtor.com)")
    // console.log("   ✅ Raw payload proof captured")
    // console.log("   ✅ Normalized storage with metadata")
    // console.log("   ✅ DOM & status change tracking")
    // console.log("   ✅ Neighborhood boundary enforcement")
    // console.log("   ✅ COMP rule explainability (JSON exportable)")
    // console.log("   ✅ Negative factor adjustments applied")
    // console.log("   ✅ Auto-rejection for ≥2 negative factors")
    // console.log("=".repeat(80) + "\n")
    }
    await (0, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$lib$2f$notification$2f$emailService$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["sendDailyPassEmail"])(passEmailPayload);
    passEmailPayload = [];
}
__turbopack_async_result__();
} catch(e) { __turbopack_async_result__(e); } }, false);}),
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
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__,
    __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$testscript$2f$test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__
]);
[__TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__, __TURBOPACK__imported__module__$5b$project$5d2f$realestateandlease$2f$testscript$2f$test$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__] = __turbopack_async_dependencies__.then ? (await __turbopack_async_dependencies__)() : __turbopack_async_dependencies__;
;
;
let initialized = false;
function simpleTime() {
    return new Date().toLocaleString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
    });
}
function startScheduler() {
    if (initialized) return;
    initialized = true;
    // TEMP: every minute (for verification)
    __TURBOPACK__imported__module__$5b$externals$5d2f$node$2d$cron__$5b$external$5d$__$28$node$2d$cron$2c$__esm_import$29$__["default"].schedule("* * * * *", async ()=>{
        console.log("⏱ Scheduler running:", simpleTime());
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

//# sourceMappingURL=%5Broot-of-the-server%5D__69cf26e2._.js.map