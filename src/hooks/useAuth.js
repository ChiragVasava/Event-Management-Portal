"use client"

import { useEffect, useState, useCallback } from "react"
import { supabase } from "../lib/supabase.js"

export function useAuth() {
  const [session, setSession] = useState(null)
  const [user, setUser] = useState(null)
  const [role, setRole] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const s = supabase()
    s.auth.getSession().then(({ data }) => {
      setSession(data.session || null)
      setUser(data.session?.user || null)
      setRole(data.session?.user?.user_metadata?.role || null)
      setLoading(false)
    })
    const { data: sub } = s.auth.onAuthStateChange((_event, sess) => {
      setSession(sess)
      setUser(sess?.user || null)
      setRole(sess?.user?.user_metadata?.role || null)
      setLoading(false)
    })
    return () => sub.subscription.unsubscribe()
  }, [])

  const signIn = useCallback(async (email, password) => {
    const { data, error } = await supabase().auth.signInWithPassword({ email, password })
    const r = data.session?.user?.user_metadata?.role || null
    return { data, error, role: r }
  }, [])

  const signUp = useCallback(async (email, password, role = "user") => {
    const { data, error } = await supabase().auth.signUp({
      email,
      password,
      options: { data: { role } },
    })
    return { data, error, role }
  }, [])

  const signOut = useCallback(async () => {
    await supabase().auth.signOut()
  }, [])

  return { session, user, role, loading, signIn, signUp, signOut }
}
