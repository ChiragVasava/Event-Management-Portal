"use client"

import { useState } from "react"
import Tabs from "./ui/Tabs.jsx"
import UploadDropzone from "./UploadDropzone.jsx"
import Button from "./ui/Button.jsx"
import VendorCard from "./VendorCard.jsx"
import { useSearch } from "../search/SearchContext.jsx"

export default function SearchTabs() {
  const { results, responseTimeMs, runImageSearch, runTextSearch, searching } = useSearch()
  const [text, setText] = useState("")

  const tabs = [
    {
      label: "Image",
      content: (
        <div className="space-y-4">
          <UploadDropzone onFiles={(files) => runImageSearch(files)} />
          <div className="text-sm text-gray-600">
            Upload an inspiration image to find visually similar vendors (CLIP + vector search).
          </div>
        </div>
      ),
    },
    {
      label: "Text",
      content: (
        <form
          className="flex items-center gap-2"
          onSubmit={(e) => {
            e.preventDefault()
            runTextSearch(text)
          }}
        >
          <input
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
            placeholder="Describe your event style, venue type, or services..."
          />
          <Button type="submit" variant="primary">
            Search
          </Button>
        </form>
      ),
    },
    {
      label: "Results",
      content: (
        <div className="space-y-3">
          <div className="text-sm text-gray-600">
            {searching ? "Searching…" : `Top ${results.length} results`}{" "}
            {responseTimeMs ? `• ${responseTimeMs} ms` : ""}
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {results.map((r) => (
              <VendorCard key={r.vendor.id} vendor={r.vendor} />
            ))}
          </div>
        </div>
      ),
    },
  ]

  return <Tabs tabs={tabs} />
}
