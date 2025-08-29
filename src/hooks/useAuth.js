"use client"

import { useEffect, useState, useCallback } from "react"
import users from "../data/users.json"

export function useAuth() {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  // Initialize from localStorage if available
  useEffect(() => {
    const savedSession = localStorage.getItem("mockSession")
    if (savedSession) {
      const parsedSession = JSON.parse(savedSession)
      setSession(parsedSession)
      setUser(parsedSession.user)
      setRole(parsedSession.user?.role || null)
    }
    setLoading(false)
    
    // Simulate auth state change listener
    const handleStorageChange = (e) => {
      if (e.key === "mockSession") {
        if (e.newValue) {
          const parsedSession = JSON.parse(e.newValue)
          setSession(parsedSession)
          setUser(parsedSession.user)
          setRole(parsedSession.user?.role || null)
        } else {
          setSession(null)
          setUser(null)
          setRole(null)
        }
      }
    }
    
    window.addEventListener("storage", handleStorageChange)
    return () => window.removeEventListener("storage", handleStorageChange)
  }, [])

  const signIn = useCallback(async (email, password) => {
    // Find user in mock data
    const foundUser = users.find(u => u.email === email && u.password === password)
    
    if (foundUser) {
      const mockSession = {
        user: {
          id: foundUser.id,
          email: foundUser.email,
          role: foundUser.role,
          user_metadata: {
            role: foundUser.role
          }
        }
      }
      
      // Save to localStorage
      localStorage.setItem("mockSession", JSON.stringify(mockSession))
      
      // Update state
      setSession(mockSession)
      setUser(mockSession.user)
      setRole(mockSession.user.role)
      
      return { data: { session: mockSession }, error: null, role: foundUser.role }
    } else {
      return { data: null, error: { message: "Invalid email or password" }, role: null }
    }
  }, [])

  const signUp = useCallback(async (email, password, role = "user") => {
    // Check if user already exists
    const existingUser = users.find(u => u.email === email)
    
    if (existingUser) {
      return { data: null, error: { message: "User already exists" }, role: null }
    }
    
    // Create new user (in a real app, this would be persisted)
    const newUser = {
      id: `user_${Date.now()}`,
      email,
      password,
      role
    }
    
    // For mock purposes, we'll just return success
    return { data: { user: newUser }, error: null, role }
  }, [])

  const signOut = useCallback(async () => {
    // Clear from localStorage
    localStorage.removeItem("mockSession")
    
    // Update state
    setSession(null)
    setUser(null)
    setRole(null)
  }, [])

  return { session, user, role, loading, signIn, signUp, signOut }
}
