import vendors from "../data/vendors.json"

// Simple text search function
export function searchVendorsByText(query, filters = {}) {
  const t0 = performance.now()
  
  // Normalize query for case-insensitive search
  const normalizedQuery = query.toLowerCase().trim()
  
  // Filter vendors based on query and filters
  let filteredVendors = vendors.filter(vendor => {
    // Check if query matches name, tags, services, or location
    const matchesQuery = 
      vendor.name.toLowerCase().includes(normalizedQuery) ||
      (vendor.tags && vendor.tags.some(tag => tag.toLowerCase().includes(normalizedQuery))) ||
      (vendor.services && vendor.services.some(service => service.toLowerCase().includes(normalizedQuery))) ||
      vendor.location.toLowerCase().includes(normalizedQuery)
    
    // Check filters
    const matchesCategory = !filters.category || (vendor.categories && vendor.categories.includes(filters.category))
    const matchesStyle = !filters.style || (vendor.styles && vendor.styles.includes(filters.style))
    
    return matchesQuery && matchesCategory && matchesStyle
  })
  
  // Sort by rating (highest first) and then by name
  filteredVendors.sort((a, b) => {
    if (b.rating !== a.rating) {
      return (b.rating || 0) - (a.rating || 0)
    }
    return a.name.localeCompare(b.name)
  })
  
  // Take top 10 results
  const top10 = filteredVendors.slice(0, 10)
  const responseTimeMs = Math.round(performance.now() - t0)
  
  return { results: top10.map(vendor => ({ vendor, score: 1 })), responseTimeMs }
}

// Mock functions to maintain interface compatibility
export async function getTextEmbedding(text) {
  // Return a mock embedding
  return new Float32Array(512)
}

export async function getImageEmbedding(fileOrUrl) {
  // Return a mock embedding
  return new Float32Array(512)
}
