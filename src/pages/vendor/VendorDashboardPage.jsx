import { Link } from "react-router-dom"

export default function VendorDashboardPage() {
  return (
    <div className="container py-8 space-y-6">
      <h1 className="text-2xl font-semibold">Vendor Dashboard</h1>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <Link to="/vendor/profile" className="border rounded-md p-4 hover:bg-gray-50">
          Edit Profile
        </Link>
        <Link to="/vendor/portfolio" className="border rounded-md p-4 hover:bg-gray-50">
          Manage Portfolio
        </Link>
        <Link to="/vendor/services" className="border rounded-md p-4 hover:bg-gray-50">
          Services & Pricing
        </Link>
      </div>
      <div className="border rounded-md p-4">
        <h2 className="font-semibold">Leads</h2>
        <p className="text-sm text-gray-600">New: 0 • In-progress: 0 • Closed: 0</p>
      </div>
    </div>
  )
}
