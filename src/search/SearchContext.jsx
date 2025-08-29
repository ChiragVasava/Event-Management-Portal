"use client"

import { createContext, useContext, useState } from "react"
import { getImageEmbedding, getTextEmbedding, searchVendorsByEmbedding } from "../services/searchService.js"

const Ctx = createContext(null)

export function SearchProvider({ children }) {
  const [results, setResults] = useState([])
  const [responseTimeMs, setResponseTimeMs] = useState(0)
  const [searching, setSearching] = useState(false)

  async function runImageSearch(filesOrUrl) {
    try {
      setSearching(true)
      const file = Array.isArray(filesOrUrl) ? filesOrUrl[0] : filesOrUrl
      const emb = await getImageEmbedding(file)
      const { results, responseTimeMs } = await searchVendorsByEmbedding(emb)
      setResults(results)
      setResponseTimeMs(responseTimeMs)
    } finally {
      setSearching(false)
    }
  }

  async function runTextSearch(text) {
    try {
      setSearching(true)
      const emb = await getTextEmbedding(text)
      const { results, responseTimeMs } = await searchVendorsByEmbedding(emb)
      setResults(results)
      setResponseTimeMs(responseTimeMs)
    } finally {
      setSearching(false)
    }
  }

  return (
    <Ctx.Provider value={{ results, responseTimeMs, searching, runImageSearch, runTextSearch }}>
      {children}
    </Ctx.Provider>
  )
}

export function useSearch() {
  return useContext(Ctx)
}
