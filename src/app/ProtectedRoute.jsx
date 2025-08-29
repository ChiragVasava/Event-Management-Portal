"use client"
import { Navigate, useLocation } from "react-router-dom"
import { useAuth } from "../hooks/useAuth.js"

export default function ProtectedRoute({ children, requireVendor = false }) {
  const { session, user, role, loading } = useAuth()
  const location = useLocation()

  if (loading) {
    return <div className="container py-10">Checking session…</div>
  }

  if (!session) {
    return <Navigate to="/auth/sign-in" state={{ from: location }} replace />
  }

  if (requireVendor && role !== "vendor") {
    return <div className="container py-10">403 — Vendor access only.</div>
  }

  return children
}
