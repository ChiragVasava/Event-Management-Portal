"use client"

import { useState } from "react"
import UploadDropzone from "../../component/UploadDropzone.jsx"
import Button from "../../component/ui/Button.jsx"
import { detectImageTags } from "../../services/taggingService.js"

export default function VendorPortfolioManagerPage() {
  const [items, setItems] = useState([])
  const [pendingTags, setPendingTags] = useState([])

  async function handleFiles(files) {
    const next = []
    for (const f of files) {
      const url = URL.createObjectURL(f)
      const tags = await detectImageTags(f)
      next.push({ url, tags })
    }
    setItems((prev) => [...prev, ...next])
    setPendingTags(next.flatMap((i) => i.tags).slice(0, 12))
  }

  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold">Portfolio Manager</h1>
      <p className="text-sm text-gray-600 mb-4">Uploads run on-device object detection to propose tags.</p>

      <UploadDropzone onFiles={handleFiles} />

      {pendingTags.length ? (
        <div className="mt-4">
          <h2 className="font-semibold">Suggested tags</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {pendingTags.map((t, i) => (
              <span key={`${t}-${i}`} className="text-xs bg-gray-100 rounded px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        </div>
      ) : null}

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-6">
        {items.map((it, i) => (
          <div key={i} className="border rounded-md overflow-hidden">
            <img src={it.url || "/placeholder.svg"} className="w-full h-32 object-cover" alt={`Portfolio ${i + 1}`} />
            <div className="p-2 text-xs text-gray-600">{it.tags.slice(0, 4).join(", ")}</div>
            <div className="flex">
              <Button className="flex-1 rounded-none" variant="ghost" onClick={() => reorder(i, -1, items, setItems)}>
                Up
              </Button>
              <Button className="flex-1 rounded-none" variant="ghost" onClick={() => reorder(i, 1, items, setItems)}>
                Down
              </Button>
              <Button
                className="flex-1 rounded-none bg-transparent"
                variant="outline"
                onClick={() => removeAt(i, items, setItems)}
              >
                Delete
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function reorder(i, delta, items, setItems) {
  const j = i + delta
  if (j < 0 || j >= items.length) return
  const copy = items.slice()
  const [it] = copy.splice(i, 1)
  copy.splice(j, 0, it)
  setItems(copy)
}
function removeAt(i, items, setItems) {
  const copy = items.slice()
  copy.splice(i, 1)
  setItems(copy)
}
