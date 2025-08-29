import vendors from "../data/vendors.json"
import { getImageEmbedding, getTextEmbedding } from "../services/searchService.js"

const store = {
  docs: [], // { id, vector: Float32Array, metadata }
}

export function upsertDocuments(docs) {
  for (const d of docs) {
    const i = store.docs.findIndex((x) => x.id === d.id)
    if (i >= 0) store.docs[i] = d
    else store.docs.push(d)
  }
}

export function cosineSimilarity(a, b) {
  let dot = 0,
    na = 0,
    nb = 0
  for (let i = 0; i < a.length; i++) {
    dot += a[i] * b[i]
    na += a[i] * a[i]
    nb += b[i] * b[i]
  }
  return dot / (Math.sqrt(na) * Math.sqrt(nb) + 1e-8)
}

export function search(queryVector, k = 10) {
  const scored = store.docs.map((d) => ({ id: d.id, score: cosineSimilarity(queryVector, d.vector) }))
  scored.sort((a, b) => b.score - a.score)
  return scored.slice(0, k)
}

// Lazy precompute: embed first portfolio image if available; else embed text (name + tags)
let precomputed = false
export async function precomputeVendorEmbeddings() {
  if (precomputed) return
  const docs = []
  for (const v of vendors) {
    let vec
    try {
      if (v.portfolioImages?.[0]) {
        vec = await getImageEmbedding(v.portfolioImages[0])
      } else {
        vec = await getTextEmbedding(`${v.name} ${v.tags?.join(" ") ?? ""}`)
      }
      docs.push({ id: v.id, vector: vec, metadata: { vendor: v } })
    } catch (e) {
      // fallback: zeros
      vec = new Float32Array(512)
      docs.push({ id: v.id, vector: vec, metadata: { vendor: v } })
    }
  }
  upsertDocuments(docs)
  precomputed = true
}
