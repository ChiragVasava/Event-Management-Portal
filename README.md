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

## Install Cloudinary
## Get the Cloudinary React SDK
npm i @cloudinary/url-gen @cloudinary/react

## Optimize and Transform
```js
import React from 'react'
import { Cloudinary } from '@cloudinary/url-gen';
import { auto } from '@cloudinary/url-gen/actions/resize';
import { autoGravity } from '@cloudinary/url-gen/qualifiers/gravity';
import { AdvancedImage } from '@cloudinary/react';

const App = () => {
  const cld = new Cloudinary({ cloud: { cloudName: 'dfsyznpth' } });
  
  // Use this sample image or upload your own via the Media Explorer
  const img = cld
        .image('cld-sample-5')
        .format('auto') // Optimize delivery by resizing and applying auto-format and auto-quality
        .quality('auto')
        .resize(auto().gravity(autoGravity()).width(500).height(500)); // Transform the image: auto-crop to square aspect_ratio

  return (<AdvancedImage cldImg={img}/>);
};

export default App
```

Cloud name dfsyznpth
API key	345599265182956
API secret 2wRwXuScXcAStvS2c-Xptc0phzE
API environment variable CLOUDINARY_URL=cloudinary://345599265182956:2wRwXuScXcAStvS2c-Xptc0phzE@dfsyznpth

https://github.com/ChiragVasava/Event-Management-Portal