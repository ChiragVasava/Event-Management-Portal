import { pipeline } from "@xenova/transformers"
import vendors from "../data/vendors.json"
import { precomputeVendorEmbeddings, search as vectorSearch } from "../lib/vectorStore.js"

let featureExtractor // CLIP for text and images

async function getPipeline() {
  if (!featureExtractor) {
    featureExtractor = await pipeline("feature-extraction", "Xenova/clip-vit-base-patch32")
  }
  return featureExtractor
}

function normalize(vec) {
  const v = Array.from(vec)
  const norm = Math.sqrt(v.reduce((s, x) => s + x * x, 0)) + 1e-8
  return Float32Array.from(v.map((x) => x / norm))
}

export async function getTextEmbedding(text) {
  const pipe = await getPipeline()
  const output = await pipe(text, { pooling: "mean", normalize: false })
  return normalize(output.data)
}

// Accepts File, Blob, URL, or data URL
export async function getImageEmbedding(fileOrUrl) {
  const pipe = await getPipeline()
  const output = await pipe(fileOrUrl, { pooling: "mean", normalize: false })
  return normalize(output.data)
}

export async function searchVendorsByEmbedding(embedding, filters = {}) {
  const t0 = performance.now()
  await precomputeVendorEmbeddings()
  const results = vectorSearch(embedding, 20)

  // Hybrid re-rank: boost by category match and rating
  const boosted = results
    .map((r) => {
      const v = vendors.find((x) => x.id === r.id)
      if (!v) return null
      let score = r.score
      if (filters.category && v.categories?.includes(filters.category)) score += 0.05
      if (filters.style && v.styles?.includes(filters.style)) score += 0.03
      score += (v.rating ?? 0) * 0.01
      return { vendor: v, score }
    })
    .filter(Boolean)

  boosted.sort((a, b) => b.score - a.score)
  const top10 = boosted.slice(0, 10)
  const responseTimeMs = Math.round(performance.now() - t0)
  return { results: top10, responseTimeMs }
}
