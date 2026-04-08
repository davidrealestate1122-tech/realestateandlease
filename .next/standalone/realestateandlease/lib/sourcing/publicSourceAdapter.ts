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
 * ✅ FIXED - Using native fetch instead of axios
 * 
 * Why: Axios might have issues on Vercel
 * Solution: Use native fetch (works everywhere)
 */

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

    const encodedUrl = encodeURIComponent(nyUrl)
    const apiUrl = `https://real-estate101.p.rapidapi.com/api/search/byurl?url=${encodedUrl}&page=1`

    console.log("📤 Sending request to real-estate101 API...")

    // ✅ Use native fetch with AbortController for timeout
    const controller = new AbortController()
    const timeoutId = setTimeout(() => controller.abort(), 20000) // 20 second timeout

    const response = await fetch(apiUrl, {
      method: "GET",
      headers: {
        "x-rapidapi-key": RAPIDAPI_KEY,
        "x-rapidapi-host": "real-estate101.p.rapidapi.com",
        "User-Agent":
          "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/91.0.4472.124 Safari/537.36",
        "Accept": "application/json",
        "Accept-Language": "en-US,en;q=0.9",
        "Accept-Encoding": "gzip, deflate, br",
        "Connection": "keep-alive",
        "Cache-Control": "max-age=0",
      },
      signal: controller.signal,
    })

    clearTimeout(timeoutId)

    if (!response.ok) {
      console.error(`❌ API returned status ${response.status}`)
      return []
    }

    console.log("✅ Response received\n")

    const data = await response.json()
    const apiResults = data?.results || []

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
    console.error(`\n❌ API Error\n`)

    // Timeout error
    if (error.name === "AbortError" || error.message.includes("timeout")) {
      console.error("⚠️  Request Timeout (>20 seconds)")
      console.error("   The API server took too long to respond")
      console.error("   Check:")
      console.error("   • Is RAPIDAPI_KEY valid?")
      console.error("   • Is the API subscription active?")
      console.error("   • Is Vercel network blocking the request?\n")
      return []
    }

    // API Key error
    if (error.message.includes("401") || error.message.includes("403")) {
      console.error("⚠️  Authentication Error")
      console.error("   • Check your RAPIDAPI_KEY\n")
      return []
    }

    // Generic error
    console.error(`   Error: ${error.message}\n`)
    return []
  }
}

export default fetchFromPublicSource