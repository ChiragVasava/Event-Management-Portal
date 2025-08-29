import { createClient } from "@supabase/supabase-js"

let _client
export function supabase() {
  if (_client) return _client
  _client = createClient(import.meta.env.VITE_SUPABASE_URL, import.meta.env.VITE_SUPABASE_ANON_KEY, {
    auth: { persistSession: true, autoRefreshToken: true, storage: window.localStorage },
  })
  return _client
}
