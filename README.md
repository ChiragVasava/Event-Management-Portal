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


## Act as Full Stack Web development Software Engineer Who is Competing in Hackathon and solving given Problem Statement of Event Management Portal.

## Make this Project With their Given Problem Solution using react+vite, JavaScript and tailwindcss setup and install needed npm and other packages dependencies in package.json and create component folder in src and create needed component and import them in files wherever is their use is for this problem statement.

## use Cloudinary for storing images and videos, not supabase And other tech or tool.

## This below is my project structure for pages and features needed to use for this project so give me full prompt to give Ai so that ai can make Project and install and use whatever tech packages is needed to create this project.

## add login, signup, account and logo and search button for searching in component named Navbar.jsx which will be use in whole project when user in not legged in website and when user  login in website it will should remove login & signup button and show other features & button used.

## also make footer component named Footer.jsx.
## Also give summary of which tech is used for this and how to use them with full setup instruction of this project in my personal vs code.

## Design a modern, responsive Event Management Vendor Discovery web app (MVP) with clear homepage value proposition, prominent hero search, intuitive navigation, and a role‑aware auth system for Users and Vendors, optimized for quick orientation and next steps.

## make it responsive for all device compatibility 

Pages to make for project :- Public discovery1. Home — /2. Categories (personal/professional + styles) — /categories3. Search (image upload + text prompt + results Top 10 on same page with tabs) — /search4. All Vendors (browse + filters) — /vendors5. Vendor Profile (details, ratings, portfolio, contact CTA) — /vendors/[vendorId]- Auth
6) Sign In — /auth/sign-in7) Sign Up — /auth/sign-up- User space8) User Dashboard (saved vendors, recent searches, preferences as tabs) — /dashboard- Vendor portal (AI-assisted onboarding and management)9) Vendor Onboarding (multi-step wizard: basics, categories, location) — /vendor/onboarding10) Vendor Dashboard (overview, health, leads) — /vendor11) Edit Vendor Profile (bio, contacts, coverage, categories) — /vendor/profile12) Portfolio Manager (upload, auto-tagging review, 
reorder) — /vendor/portfolio13) Services & Pricing (packages, add-ons) — /vendor/services14) Inquiries / Messages (lead inbox) — /vendor/inquiries- Demo / Metrics15) Metrics Dashboard (hackathon KPIs: accuracy, response time, relevance, tagging precision, prompt success) — /metricsNice-to-have (Phase 2, optional)- Auth: Forgot Password — /auth/forgot-password, Verify Email — /auth/verify
- Conversational Assistant — /assistant- GenAI Studio (prompt-to-image) — /genai/studio- Moodboard Builder (drag-and-drop) — /moodboard or /dashboard/moodboard- Admin: Overview — /admin, Vendors — /admin/vendors, Users — /admin/users, Tag Review — /admin/tag-review, Reports — /admin/metrics- Map / Location Search — /map
- Legal: Terms — /legal/terms, Privacy — /legal/privacy- Marketing: How It Works — /how-it-works, About — /about, Contact — /contactNotes- Keep search unified: tabs for “Image” (upload), “Text” (NLP query), and “Results” on /search to minimize pages.- The Vendor Onboarding can be a single page with a stepper to reduce page count while keeping UX clear.
- The Metrics page is critical for demoing impact quickly (charts + sample logs).This MVP set ensures you can demo image-based retrieval, top-10 recommendations, vendor onboarding/management, rich vendor profiles, and measurable KPIs without over-splitting the UI. Add the optional pages as your AI features and ops mature.












Design a modern, responsive Event Management Vendor Discovery web app (MVP) with clear homepage value proposition, prominent hero search, intuitive navigation, and a role‑aware auth system for Users and Vendors, optimized for quick orientation and next steps.
Name: “EventMatch AI” (placeholder), with logo top‑left that always links home and a predictable route structure across the site for easy re‑orientation.
Primary action on home: one large, central hero search that routes to /search, with clarity and visual priority over secondary elements to reduce cognitive load and improve task success on first visit.

Global navigation and layout

Top bar: left = logo/name, center = none, right = rounded “Login” button opening a compact menu with “Sign In” and “Sign Up”, each flow offering a role toggle: Vendor or User, complying with clear labels and high information scent for primary routes.

Footer: concise links to Categories, Vendors, Metrics, and Legal, ensuring immediate access to content and predictable wayfinding across pages.

Mobile: mobile‑first stacking for hero, obvious CTA placement, and thumb‑reachable primary buttons to keep the top task prominent even on small screens.

Homepage — /

Hero: big project name, one‑line value proposition, and one oversized search input with a primary CTA “Search vendors” that routes to /search, keeping the hero simple, uncluttered, and outcome‑focused.

Sub‑hero tiles: Personal vs Professional categories with descriptive labels and sample imagery that reflects real offerings and guides exploration without clutter.

Trust strip: short explainer of “Image search + AI recommendations” for clarity on what the platform does and why it’s different, avoiding vague messaging.

Search — /search

Unified search with tabs: “Image” (upload), “Text” (prompt), and “Results” in one page to reduce page count and keep the task flow tight and scannable.

Image tab: drag‑and‑drop uploader with file previews; on submit, conceptually extract CLIP‑style embeddings for similarity retrieval; show loader, then top‑10 matches in responsive cards with vendor name, rating, badges, and CTA, aligning with robust image‑text retrieval patterns.

Text tab: a single text field with examples like “Boho wedding at sunset with earthy tones,” then run semantic search and display results in the same grid layout for consistency.

Results tab: grid with filters (Category, Location, Budget range, Rating, Tags), sort (Visual Similarity, Rating, Distance), and chips for active filters; provide empty‑state guidance and skeleton loaders to keep UX responsive and clear.

All Vendors — /vendors

Grid/list toggle with vendor cards showing cover image, average rating, key tags (e.g., floral décor, stage lighting), and primary CTA to profile; left filter panel for category, style, location, rating, and price, supporting intuitive browsing and discovery.

Consistent card design and tag chips to make scanning faster and encourage exploration without overwhelming users.

Vendor Profile — /vendors/[vendorId]

Header: vendor name, rating, location, coverage, contact CTA, and badges; below that, portfolio gallery with masonry grid and filterable tags generated from auto‑tagging.

Tabs: Overview (bio, services, price ranges), Portfolio (images), Reviews, FAQs; right rail contact/inquiry module with quick prefilled message; clear hierarchy so primary actions stand out.

Categories — /categories

Two sections: Personal (birthday, wedding, housewarming, casual) and Professional (corporate, conferences, exhibitions), with style facets (boho, luxury, minimalist) and sample visuals to reveal site content and guide navigation.

Each tile links to a filtered /vendors view with pre‑applied chips to reduce friction and reinforce information scent.

Auth — /auth/sign‑in and /auth/sign‑up

Split role selection (User or Vendor) as a toggle at the top, then form fields for email/password with minimal friction; secondary links for “Forgot password” and “Verify email” placeholders; keep labels explicit and avoid jargon.

Rounded Login button in the top‑right always opens a compact auth menu with Sign In and Sign Up, matching homepage guidance on next steps.

User Dashboard — /dashboard

Tabs: Saved Vendors, Recent Searches, Preferences; show simple lists with thumbnails, tags, and quick actions; provide empty states with guidance to search or explore categories.

Keep the starting point obvious with a “Search vendors” CTA and clear link labels for learned routes.

Vendor Onboarding — /vendor/onboarding

Single page stepper: Basics (name, bio, contacts), Categories & Styles, Coverage & Location, and Review & Submit; tight copy and tooltips to reduce friction and abandonment.

Auto‑tagging prep note: instruct vendors that uploaded images will be auto‑tagged for better discovery, building trust and clarity about benefits.

Vendor Dashboard — /vendor

Overview cards: Leads this week, Profile completeness, Portfolio items, Response time, and Health indicators placed top‑left for scannability; compact table of recent inquiries below.

Right rail: quick links to Edit Profile, Portfolio, Services, and Inquiries, emphasizing high‑priority tasks.

Edit Vendor Profile — /vendor/profile

Sections: Bio, Contacts, Coverage, Categories & Styles, Social links; form validation with inline hints; surface completeness score to guide progress.

Clear, descriptive labels and logical grouping to reduce cognitive load.

Portfolio Manager — /vendor/portfolio

Uploader with drag‑and‑drop, bulk upload, and per‑image controls; show AI auto‑tags and allow manual edit/approve; reordering via drag to set primary covers.

Explain that object detection/classification assists discovery and can improve search ranking; keep explanations short and actionable.

Services & Pricing — /vendor/services

Package cards (e.g., Basic, Standard, Premium) with inclusions and add‑ons; price range or “contact for quote” option; consistent card formatting for easy comparison.

Primary CTA to update and preview as profile, reinforcing next steps.

Inquiries / Messages — /vendor/inquiries

Unified inbox with list of leads, quick reply templates, and status chips; conversation view with vendor notes; keep actions like “Mark won/lost” scannable and near the thread.

Filters for status and time to support operational use.

Metrics Dashboard — /metrics

KPIs (5–10 max): Image‑to‑Vendor Matching Accuracy, Response Time (ms) for image search, Recommendation Relevance (avg 1–5), Tagging Precision, GenAI Prompt Success, Search‑to‑Click Ratio, Repeat Query Capability; place the most important KPIs top‑left with clean charts.

Add time‑range filter, light drill‑downs, and benchmark lines to provide context and avoid clutter while keeping it actionable for demo.

Nice‑to‑have (Phase 2) routes

Conversational Assistant — /assistant, GenAI Studio — /genai/studio, Moodboard — /moodboard, Map — /map, Admin — /admin with Users/Vendors/Tag Review/Reports, Legal — /legal/*, Marketing — /how‑it‑works, /about, /contact; generate stubs with concise descriptions and predictable link labels.

AI/ML alignment (UX‑level wiring for demo)

Image‑based search: on upload, describe using a pre‑trained vision‑language encoder (CLIP‑style) to create embeddings, then approximate nearest neighbor search (e.g., FAISS) over vendor portfolio vectors for top‑10 retrieval, ranked by visual similarity and vendor quality signals.

Portfolio auto‑tagging: indicate object detection/classification (e.g., YOLOv8) generates tags like “floral décor”, “stage lighting”, “open‑air setup” to power filters and improve scan‑ability and relevance.

Recommendation context: note hybrid ranking that can combine content similarity with ratings, category match, and location/availability as future extensions, while keeping the UI simple and uncluttered.

Design system (foundations and components)

Foundations: mobile‑first type scale, sufficient color contrast, 8‑pt spacing, and 12‑column grid on desktop for predictability and scanning efficiency.

Components: Hero search, Text input, File uploader, Tabs, Chips, Cards, Badges, Ratings, Buttons, Dropdowns, Modals/Drawers, Tables, Pagination, Empty states, Skeletons, Toasts, and KPI tiles/charts; keep labels explicit and avoid jargon.

Accessibility: keyboard focus order, visible focus, ARIA roles for nav/landmarks, and motion kept minimal to avoid distraction and improve performance.

States and guidance

Loading: skeletons on vendor grids and KPI tiles to keep perceived speed high; Error: concise retry messaging near the failed component; Empty: helpful next steps (e.g., “Try another image or add a text prompt”).

Performance: minimize motion/animation in critical flows and ensure immediate access to content to prevent abandonment on slower connections.

Primary acceptance points

Home hero communicates who/what/next and prioritizes the unified search flow.

/search consolidates image/text input and results with clear filters and sort, returning a top‑10 grid with strong visual hierarchy.

Vendor portal supports onboarding, profile edits, portfolio tagging, services, and inquiries with clear calls‑to‑action and role‑appropriate navigation.

/metrics shows 5–10 KPIs with scannable layout, context, and minimal clutter for a compelling demo.

Notes to the generator

Keep the homepage uncluttered with one dominant CTA and route labels that reflect user goals; avoid generic “Learn more” and ensure the nav is in a highly noticeable place.

Use representative imagery for hero and categories that actually signal what the platform offers, not decorative placeholders that add noise.