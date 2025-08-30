"use client"

import { useState } from "react"
import { Link, useNavigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js"
import Button from "./ui/Button.jsx"

export default function Navbar() {
  const { session, role, signOut } = useAuth()
  const [q, setQ] = useState("")
  const navigate = useNavigate()
  const location = useLocation()

  function onSearch(e) {
    e.preventDefault()
    const params = new URLSearchParams()
    if (q.trim()) params.set("q", q.trim())
    navigate(`/search?${params.toString()}`)
  }

  // Hide auth buttons on auth pages
  const onAuthRoute = location.pathname.startsWith("/auth")

  return (
    <>
      <div class="fixed inset-0 -z-10 w-full min-h-screen bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px]"></div>
      <header className="border-b bg-white">
        <div className="container flex items-center justify-between h-16">
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

          <form onSubmit={onSearch} className="hidden md:flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search vendors..."
              className="border rounded-md px-3 py-2 w-64 focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-label="Search vendors"
            />
            <Button type="submit" variant="primary">
              Search
            </Button>
          </form>

          <div className="flex items-center gap-2">
            {!session && !onAuthRoute ? (
              <>
                <Link to="/auth/sign-in">
                  <Button variant="ghost">Login</Button>
                </Link>
                <Link to="/auth/sign-up">
                  <Button variant="primary">Register</Button>
                </Link>
              </>
            ) : null}

            {session ? (
              <>
                {role === "vendor" ? (
                  <Link to="/vendor">
                    <Button variant="teal">Vendor Dashboard</Button>
                  </Link>
                ) : (
                  <Link to="/dashboard">
                    <Button variant="teal">Dashboard</Button>
                  </Link>
                )}
                <Button variant="outline" onClick={signOut}>
                  Sign Out
                </Button>
              </>
            ) : null}
          </div>
        </div>

        {/* Mobile search */}
        <div className="md:hidden container py-2">
          <form onSubmit={onSearch} className="flex items-center gap-2">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              placeholder="Search vendors..."
              className="border rounded-md px-3 py-2 w-full focus:outline-none focus:ring-2 focus:ring-teal-600"
              aria-label="Search vendors"
            />
            {/* <Button type="submit" variant="primary">
            Go
          </Button> */}
            <Button type="submit" variant="primary" className="flex items-center gap-1">
              <lord-icon
                src="https://cdn.lordicon.com/wjyqkiew.json"
                trigger="hover"
                style={{ width: "25px", height: "25px" }}
              />
            </Button>
          </form>
        </div>
      </header>
    </>
  )
}
