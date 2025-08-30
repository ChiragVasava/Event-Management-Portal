import { Link } from "react-router-dom"

export default function Footer() {
  return (
    <>
    
    <div class="fixed inset-0 -z-10 w-full min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>

    <footer className="border-t bg-white">
      <div className="container py-8 flex flex-col md:flex-row items-center md:items-start justify-between gap-6">
        <div className="text-center md:text-left">
          <div className="flex items-center gap-2 justify-center md:justify-start">
            <Link to="/" className="flex items-center gap-2">
                      {/* <img src="/logo.png" alt="Logo" className="h-8 w-8" /> */}
            
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 400 200"
                        className="h-14 w-14"
                      >
                        {/* E */}
                        <path d="M20 40 L20 160 L90 160 L90 140 L45 140 L45 110 L80 110 L80 90 L45 90 L45 60 L90 60 L90 40 Z" fill="black" />
            
                        {/* Lightning bolt cutting through middle */}
                        <path d="M120 30 L140 30 L110 100 L130 100 L100 170 L85 170 L115 100 L95 100 L125 30 Z" fill="black" />
            
                        {/* M (split by lightning) */}
                        {/* Left part of M */}
                        <path d="M150 40 L150 160 L175 160 L175 80 L190 110" fill="black" />
                        {/* Right part of M */}
                        <path d="M210 110 L225 80 L225 160 L250 160 L250 40 L220 40 L200 85" fill="black" />
            
                        {/* P */}
                        <path d="M280 40 L280 160 L305 160 L305 110 L340 110 C350 110 360 100 360 90 L360 60 C360 50 350 40 340 40 Z M305 60 L305 90 L335 90 L335 60 Z" fill="black" />
            
                        {/* Additional lightning elements */}
                        <path d="M160 25 L170 15 L165 35 L175 35 L170 50 L160 45 Z" fill="black" />
                        <path d="M190 175 L200 185 L195 165 L205 165 L200 150 L190 155 Z" fill="black" />
                        <path d="M240 20 L250 10 L245 30 L255 30 L250 45 L240 40 Z" fill="black" />
                      </svg>
                    </Link>
            <span className="font-semibold">Event Management Portal</span>
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
    </>
  )
}
