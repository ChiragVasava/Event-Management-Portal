import pkg from "../package.json"
// We avoid importing react-router components that require a Router context.

export default function Page() {
  const scripts = pkg?.scripts ?? {}
  return (
    <main className="min-h-[60vh] container py-12">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-semibold">Event Management Portal — AI Vendor Discovery</h1>
        <p className="mt-3 text-gray-600">
          This repository includes a React + Vite SPA scaffold with Tailwind, react-router-dom, react-query, Supabase
          auth, in-browser ML (transformers & COCO‑SSD), Recharts, and more.
        </p>

        <section className="mt-8 border rounded-md p-4">
          <h2 className="text-xl font-semibold">How to run locally</h2>
          <ol className="list-decimal ml-6 mt-3 space-y-1 text-sm text-gray-700">
            <li>Create a .env from .env.example and fill your VITE_SUPABASE_* keys.</li>
            <li>
              Install dependencies: <code className="bg-gray-100 px-1 py-0.5 rounded">npm install</code>
            </li>
            <li>
              Start the Vite dev server: <code className="bg-gray-100 px-1 py-0.5 rounded">npm run dev</code>
            </li>
            <li>
              Open <code className="bg-gray-100 px-1 py-0.5 rounded">http://localhost:5173</code>
            </li>
          </ol>
        </section>

        <section className="mt-6 border rounded-md p-4">
          <h2 className="text-xl font-semibold">Available npm scripts</h2>
          <pre className="mt-3 bg-gray-50 p-3 rounded text-sm overflow-auto">{JSON.stringify(scripts, null, 2)}</pre>
        </section>

        <section className="mt-6 text-sm text-gray-600">
          <p>
            Note: This Next.js page is only for preview here. The actual application is a Vite SPA placed under{" "}
            <code className="bg-gray-100 px-1 py-0.5 rounded">/src</code>. Use the instructions above to run it locally.
          </p>
        </section>
      </div>
    </main>
  )
}
