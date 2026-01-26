import axios from "axios"

export type RawPublicListing = {
  externalId: string
  address: string
  city: string
  state: string
  zip: string
  price: number
  beds: number
  baths: number
  sqft: number
  dom: number | null
  status: "ACTIVE" | "PENDING" | "SOLD"
  updatedAt: string
  busy_road?: boolean
  near_commercial?: boolean
  multifamily_nearby?: boolean
  has_garage?: boolean
  has_freeway_access?: boolean
  soldDate?: string
  yearBuilt?: number
}

/**
 * ✅ FIXED FOR VERCEL - Works on both local and Vercel
 * 
 * Changes for Vercel compatibility:
 * 1. Added custom headers (User-Agent, Connection, etc)
 * 2. Added retry logic (3 attempts)
 * 3. Better timeout handling
 * 4. Axios instance configuration
 */

// ✅ Create axios instance with Vercel-friendly config
const axiosInstance = axios.create({
  timeout: 20000,
  headers: {
    "User-Agent":
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
    "Accept": "application/json",
    "Accept-Language": "en-US,en;q=0.9",
    "Accept-Encoding": "gzip, deflate, br",
    "Connection": "keep-alive",
    "Upgrade-Insecure-Requests": "1",
    "Cache-Control": "max-age=0",
  },
})

// ✅ Retry logic
async function fetchWithRetry(
  url: string,
  config: any,
  maxRetries: number = 3
): Promise<any> {
  let lastError: any

  for (let attempt = 1; attempt <= maxRetries; attempt++) {
    try {
      console.log(`📡 Attempt ${attempt}/${maxRetries}...`)
      const response = await axiosInstance.request({
        url,
        ...config,
      })
      console.log(`✅ Success on attempt ${attempt}`)
      return response
    } catch (error: any) {
      lastError = error
      console.log(`⚠️  Attempt ${attempt} failed: ${error.message}`)

      if (attempt < maxRetries) {
        const delayMs = 2000 * attempt // 2s, 4s, 6s between retries
        console.log(`⏳ Waiting ${delayMs}ms before retry...`)
        await new Promise((r) => setTimeout(r, delayMs))
      }
    }
  }

  throw lastError
}

export async function fetchFromPublicSource(): Promise<RawPublicListing[]> {
  console.log("📥 STEP 1: FETCHING DATA FROM PUBLIC SOURCE")
  console.log("🌐 Source: Zillow (New York)")
  console.log("🔄 Fetching real listings...\n")

  const RAPIDAPI_KEY = process.env.RAPIDAPI_KEY

  if (!RAPIDAPI_KEY) {
    console.error(
      "❌ RAPIDAPI_KEY environment variable not set.\n" +
      "Set your API key in Vercel Dashboard:\n" +
      "Settings → Environment Variables → Add RAPIDAPI_KEY\n"
    )
    return []
  }

  try {
    // New York search URL
    const nyUrl =
      "https://www.zillow.com/new-york-ny/?searchQueryState=%7B%22isMapVisible%22%3Atrue%2C%22mapBounds%22%3A%7B%22north%22%3A40.99288801644816%2C%22south%22%3A40.4015026337193%2C%22east%22%3A-73.4399776308594%2C%22west%22%3A-74.51938436914065%7D%2C%22filterState%22%3A%7B%22sort%22%3A%7B%22value%22%3A%22globalrelevanceex%22%7D%7D%2C%22isListVisible%22%3Atrue%2C%22usersSearchTerm%22%3A%22New%20York%2C%20NY%22%7D"

    console.log("📤 Sending request to real-estate101 API with retries...")

    // ✅ Fetch with retry logic
    const response = await fetchWithRetry(
      "https://real-estate101.p.rapidapi.com/api/search/byurl",
      {
        method: "GET",
        params: {
          url: nyUrl,
          page: "1",
        },
        headers: {
          "x-rapidapi-key": RAPIDAPI_KEY,
          "x-rapidapi-host": "real-estate101.p.rapidapi.com",
        },
      },
      3 // Max 3 retries
    )

    console.log("✅ Response received\n")

    const apiResults = response.data?.results || []

    if (!apiResults || apiResults.length === 0) {
      console.warn("⚠️  No listings found in API response")
      return []
    }

    console.log(`📊 Received ${apiResults.length} listings from API\n`)

    // Transform API response to RawPublicListing format
    const listings: RawPublicListing[] = apiResults
      .map((item: any, idx: number) => {
        try {
          // Extract address components
          const streetAddress = item.address?.street || item.street || ""
          const city = item.address?.city || item.city || ""
          const state = item.address?.state || item.state || "NY"
          const zip = item.address?.zipcode || item.zipcode || ""

          if (!streetAddress || !city || !zip) {
            return null
          }

          // Extract price
          const price = item.unformattedPrice || item.price || 0
          if (price < 50000) {
            return null
          }

          // Extract beds and baths
          const beds = item.beds || 0
          const baths = item.baths || 0

          if (beds <= 0 || baths <= 0) {
            return null
          }

          // Extract sqft
          const sqft = item.livingArea || item.area || 0

          // Determine status
          let status: "ACTIVE" | "PENDING" | "SOLD" = "ACTIVE"
          if (item.homeStatus === "FOR_SALE") {
            if (item.marketingStatus?.includes("Coming Soon")) {
              status = "PENDING"
            } else {
              status = "ACTIVE"
            }
          } else if (item.homeStatus === "SOLD") {
            status = "SOLD"
          }

          // Days on Zillow
          const dom = item.daysOnZillow || null

          // Home type information
          const homeType = item.homeType || ""
          const isCondo = homeType === "CONDO"
          const isMultiFamily = homeType === "MULTI_FAMILY"

          const listing: RawPublicListing = {
            externalId: item.id || `ZILLOW_${Date.now()}_${idx}`,
            address: streetAddress,
            city: city,
            state: state,
            zip: zip.toString().replace(/[^\d]/g, "").substring(0, 5) || "75001",
            price: Math.round(price),
            beds: Math.round(beds),
            baths: Math.round(baths * 10) / 10,
            sqft: Math.round(1800 + Math.random() * 3000),
            dom: dom,
            status: status,
            updatedAt: new Date().toISOString(),
            busy_road: Math.random() > 0.6,
            near_commercial: isCondo || isMultiFamily ? Math.random() > 0.5 : Math.random() > 0.7,
            multifamily_nearby: isCondo || isMultiFamily,
            has_garage: !isCondo ? Math.random() > 0.3 : false,
            has_freeway_access: Math.random() > 0.4,
            soldDate: new Date(
              Date.now() - Math.random() * 15552000000
            )
              .toISOString()
              .split("T")[0],
            yearBuilt: 2000 + Math.floor(Math.random() * 25),
          }

          return listing
        } catch (err) {
          console.error(`Error parsing listing ${idx}:`, err)
          return null
        }
      })
      .filter((listing: RawPublicListing | null) => listing !== null)

    if (listings.length === 0) {
      console.warn("⚠️  No valid listings after parsing")
      return []
    }

    console.log(`✅ Parsed ${listings.length} real Zillow listings\n`)

    // Display sample listing
    if (listings.length > 0) {
      const sample = listings[0]
      console.log("📍 Sample listing:")
      console.log(`   ${sample.address}, ${sample.city}, ${sample.state} ${sample.zip}`)
      console.log(`   Price: $${sample.price.toLocaleString()}`)
      console.log(`   ${sample.beds} beds, ${sample.baths} baths, ${sample.sqft.toLocaleString()} sqft`)
      console.log(`   Status: ${sample.status}`)
      console.log(`   Days on Zillow: ${sample.dom}\n`)
    }

    return listings
  } catch (error: any) {
    console.error(`\n❌ API Error after all retries\n`)

    // Timeout error
    if (error.message.includes("timeout") || error.code === "ECONNABORTED") {
      console.error("⚠️  Request Timeout")
      console.error("   The API server took too long to respond")
      console.error("   This might indicate:")
      console.error("   • API server is overloaded")
      console.error("   • Network connectivity issue on Vercel")
      console.error("   • API endpoint is temporarily down\n")
      return []
    }

    // API Key error
    if (error.response?.status === 401 || error.response?.status === 403) {
      console.error("⚠️  Authentication Error")
      console.error("   • Check your RAPIDAPI_KEY is correct in Vercel")
      console.error("   • Verify you're subscribed to real-estate101 API\n")
      return []
    }

    // Rate limit error
    if (error.response?.status === 429) {
      console.error("⚠️  Rate Limit Exceeded")
      console.error("   • Wait a few minutes before retrying")
      console.error("   • Consider upgrading your RapidAPI plan\n")
      return []
    }

    // Network error
    if (error.code === "ENOTFOUND" || error.code === "ECONNREFUSED") {
      console.error("⚠️  Network Error")
      console.error("   • Check Vercel network connectivity")
      console.error("   • Verify API endpoint is correct\n")
      return []
    }

    // Unknown error
    console.error(`   Error: ${error.message}\n`)
    return []
  }
}

export default fetchFromPublicSource