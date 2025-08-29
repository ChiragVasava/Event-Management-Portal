import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <footer className="border-t bg-gray-50">
      <div className="container py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <img src="/logo.png" className="h-6 w-6" alt="" />
            <span className="font-semibold">Event Vendor Discovery</span>
          </div>
          <p className="text-sm text-gray-600 mt-2">Find the right vendors for unforgettable events.</p>
        </div>
        <nav className="text-sm flex gap-4 flex-wrap justify-center md:justify-end">
          <Link to="/how-it-works">How It Works</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/legal/terms">Terms</Link>
          <Link to="/legal/privacy">Privacy</Link>
        </nav>
      </div>
    </footer>
  )
}
