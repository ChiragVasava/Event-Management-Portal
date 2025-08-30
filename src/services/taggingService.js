// Mock tagging service for frontend-only version
export async function detectImageTags(file) {
  // In a real implementation, this would use AI to detect tags
  // For the frontend-only version, we'll return some default tags
  return ["event", "celebration", "party", "gathering"]
}