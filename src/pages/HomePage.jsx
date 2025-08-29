import { Link } from "react-router-dom"
import VendorCard from "../component/VendorCard.jsx"
import vendors from "../data/vendors.json"

export default function HomePage() {
  const featured = vendors.slice(0, 6)
  return (
    <div>
      <section className="bg-gray-50">
        <div className="container py-12 text-center">
          <h1 className="text-3xl md:text-4xl font-semibold text-balance">
            Find the perfect vendors for your next event
          </h1>
          <p className="mt-3 text-gray-600">
            Image-based discovery, smart text search, and vendor portfolios — all in one place.
          </p>
          <div className="mt-6">
            <Link to="/search" className="inline-block bg-teal-600 text-black rounded-md px-4 py-2 hover:bg-teal-700 hover:text-black">
              Start Searching
            </Link>
          </div>
        </div>
      </section>

      <section className="container py-10">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold">Featured Vendors</h2>
          <Link to="/vendors">Browse all</Link>
        </div>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((v) => (
            <VendorCard key={v.id} vendor={v} />
          ))}
        </div>
      </section>
    </div>
  )
}
