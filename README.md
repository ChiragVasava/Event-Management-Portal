# Event Management Portal — AI Vendor Discovery (Vite + React + Tailwind)

Modern, responsive SPA to discover event vendors via image-based and text search, with vendor onboarding and a metrics dashboard.

## Tech Stack
- React 18 + Vite (JavaScript, SPA)
- Tailwind CSS (via @tailwindcss/vite)
- react-router-dom (routing)
- @tanstack/react-query (data layer)
- @supabase/supabase-js (auth: email/password)
- @xenova/transformers (in-browser CLIP embeddings)
- @tensorflow/tfjs + @tensorflow-models/coco-ssd (auto-tag uploads)
- recharts (metrics)
- react-hook-form + zod (forms)
- react-dropzone (uploads)

## Setup
1) Install
- npm install

2) Env (.env from .env.example)
- VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY (create a Supabase project, enable email/password auth)
- Optional: VITE_REPLICATE_API_TOKEN (if using /genai demos)

3) Dev
- npm run dev
- Open http://localhost:5173

4) Build/Preview
- npm run build
- npm run preview

## Notes
- Vite requires variables to be prefixed with `VITE_` and accessed via `import.meta.env`.
- Heavy ML models are lazy-loaded on first use to keep initial load fast.
- Auth-protected routes: `/dashboard`, `/vendor*` require sign-in; vendor role is chosen at sign-up.
- Search: `/search` tabs (Image/Text/Results) with Top-10 returned and response time shown.
- Portfolio Manager runs COCO-SSD on-device and shows suggested tags (no remote storage in MVP).