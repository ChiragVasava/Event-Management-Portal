import { Link } from "react-router-dom"
import RatingStars from "./ui/RatingStars.jsx"

export default function VendorCard({ vendor }) {
  const img = vendor?.portfolioImages?.[0] || "/vendor-portfolio.png"
  return (
    <Link to={`/vendors/${vendor.id}`} className="block border rounded-md overflow-hidden hover:shadow-sm">
      <img src={img || "/placeholder.svg"} alt={`${vendor.name} portfolio`} className="w-full h-40 object-cover" />
      <div className="p-3">
        <div className="flex items-center justify-between">
          <h3 className="font-medium">{vendor.name}</h3>
          <RatingStars value={vendor.rating ?? 0} />
        </div>
        <p className="text-sm text-gray-600 mt-1">{vendor.location}</p>
        <div className="flex flex-wrap gap-2 mt-2">
          {(vendor.tags ?? []).slice(0, 4).map((t) => (
            <span key={t} className="text-xs bg-gray-100 rounded px-2 py-0.5">
              {t}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}
