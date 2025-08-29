"use client"
import { useParams } from "react-router-dom"
import vendors from "../data/vendors.json"
import RatingStars from "../component/ui/RatingStars.jsx"
import Button from "../component/ui/Button.jsx"

export default function VendorProfilePage() {
  const { vendorId } = useParams()
  const vendor = vendors.find((v) => String(v.id) === String(vendorId))

  if (!vendor) return <div className="container py-10">Vendor not found.</div>

  return (
    <div>
      <div className="bg-gray-50">
        <div className="container py-8">
          <h1 className="text-2xl font-semibold">{vendor.name}</h1>
          <div className="flex items-center gap-4 text-sm text-gray-600 mt-1">
            <span>
              <RatingStars value={vendor.rating} />
            </span>
            <span>{vendor.location}</span>
            <span>{vendor.categories?.join(", ")}</span>
          </div>
          <div className="mt-4">
            <Button variant="primary">Contact Vendor</Button>
          </div>
        </div>
      </div>

      <div className="container py-8 space-y-6">
        <section>
          <h2 className="text-xl font-semibold">Portfolio</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 mt-3">
            {(vendor.portfolioImages ?? []).map((src, i) => (
              <img
                key={i}
                src={src || "/placeholder.svg"}
                alt={`${vendor.name} work ${i + 1}`}
                className="w-full h-32 object-cover rounded"
              />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Services</h2>
          <ul className="list-disc ml-5 mt-2 text-gray-700">
            {(vendor.services ?? []).map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="text-xl font-semibold">Tags</h2>
          <div className="flex flex-wrap gap-2 mt-2">
            {(vendor.tags ?? []).map((t) => (
              <span key={t} className="text-xs bg-gray-100 rounded px-2 py-0.5">
                {t}
              </span>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}
