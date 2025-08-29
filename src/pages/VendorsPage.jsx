"use client"

import { useMemo } from "react"
import { useSearchParams } from "react-router-dom"
import VendorCard from "../component/VendorCard.jsx"
import vendors from "../data/vendors.json"

export default function VendorsPage() {
  const [params] = useSearchParams()
  const category = params.get("category")
  const style = params.get("style")

  const filtered = useMemo(() => {
    return vendors.filter((v) => {
      const byCat = category ? v.categories?.includes(category) : true
      const byStyle = style ? v.styles?.includes(style) : true
      return byCat && byStyle
    })
  }, [category, style])

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold">All Vendors</h1>
      <p className="text-sm text-gray-600 mb-4">
        Filters applied: {category || "any"} / {style || "any"}
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {filtered.map((v) => (
          <VendorCard key={v.id} vendor={v} />
        ))}
      </div>
    </div>
  )
}
