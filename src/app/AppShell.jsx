"use client"

import Navbar from "../component/Navbar.jsx"
import Footer from "../component/Footer.jsx"
import { useEffect } from "react"
import { precomputeVendorEmbeddings } from "../lib/vectorStore.js"

export default function AppShell({ children }) {
  useEffect(() => {
    precomputeVendorEmbeddings().catch(() => {
      // silently ignore in MVP; embeddings can also be warmed from /metrics
    })
  }, [])
  return (
    <div className="min-h-full flex flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}
