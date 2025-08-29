"use client"

import { useState } from "react"
import Button from "../../component/ui/Button.jsx"

export default function VendorServicesPage() {
  const [packagesList, setPackagesList] = useState([])
  const [name, setName] = useState("")
  const [price, setPrice] = useState("")

  return (
    <div className="container py-8 max-w-2xl">
      <h1 className="text-2xl font-semibold">Services & Pricing</h1>
      <div className="flex gap-2 mt-4">
        <input
          className="border rounded-md px-3 py-2 w-full"
          placeholder="Package name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          className="border rounded-md px-3 py-2 w-40"
          placeholder="Price"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <Button
          variant="primary"
          onClick={() => {
            if (!name) return
            setPackagesList((p) => [...p, { id: Date.now(), name, price }])
            setName("")
            setPrice("")
          }}
        >
          Add
        </Button>
      </div>

      <ul className="mt-4 space-y-2">
        {packagesList.map((p) => (
          <li key={p.id} className="border rounded-md p-3 flex items-center justify-between">
            <span>
              {p.name} — ${p.price}
            </span>
            <Button variant="outline" onClick={() => setPackagesList((list) => list.filter((x) => x.id !== p.id))}>
              Remove
            </Button>
          </li>
        ))}
      </ul>
    </div>
  )
}
