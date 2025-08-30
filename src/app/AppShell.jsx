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
    <>
      <div class="fixed inset-0 -z-10 w-full min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <div className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </div>
    </>
  )
}
