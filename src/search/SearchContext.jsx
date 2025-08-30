"use client"

import { createContext, useContext, useState } from "react"
import { searchVendorsByText } from "../services/searchService.js"

const Ctx = createContext(null)

export function SearchProvider({ children }) {
  const [results, setResults] = useState([])
  const [responseTimeMs, setResponseTimeMs] = useState(0)
  const [searching, setSearching] = useState(false)

  async function runImageSearch(filesOrUrl) {
    // For simplified version, we'll just do a text search with a default query
    try {
      setSearching(true)
      // In a real implementation, we might extract text from the image
      // For now, we'll just search for "event"
      const { results, responseTimeMs } = searchVendorsByText("event")
      setResults(results)
      setResponseTimeMs(responseTimeMs)
    } finally {
      setSearching(false)
    }
  }

  async function runTextSearch(text) {
    try {
      setSearching(true)
      const { results, responseTimeMs } = searchVendorsByText(text)
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
