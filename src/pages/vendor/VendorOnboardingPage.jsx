"use client"

import { useState } from "react"
import UploadDropzone from "../../component/UploadDropzone.jsx"
import Button from "../../component/ui/Button.jsx"
import styles from "../../data/styles.json"
import { detectImageTags } from "../../services/taggingService.js"

export default function VendorOnboardingPage() {
  const [step, setStep] = useState(0)
  const [form, setForm] = useState({
    name: "",
    contact: "",
    categories: [],
    styles: [],
    city: "",
    country: "",
    uploads: [],
    suggestedTags: [],
  })

  function next() {
    setStep((s) => Math.min(s + 1, 2))
  }
  function back() {
    setStep((s) => Math.max(s - 1, 0))
  }

  return (
    <div className="container py-8 max-w-2xl">
      <h1 className="text-2xl font-semibold">Vendor Onboarding</h1>
      <p className="text-sm text-gray-600 mb-4">Step {step + 1} of 3</p>

      {step === 0 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Business Name</label>
            <input
              className="border rounded-md px-3 py-2 w-full"
              value={form.name}
              onChange={(e) => setForm({ ...form, name: e.target.value })}
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Contact Email</label>
            <input
              className="border rounded-md px-3 py-2 w-full"
              value={form.contact}
              onChange={(e) => setForm({ ...form, contact: e.target.value })}
            />
          </div>
        </div>
      )}

      {step === 1 && (
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium">Categories</label>
            <div className="flex gap-2">
              {["personal", "professional"].map((c) => (
                <button
                  key={c}
                  onClick={() => setForm({ ...form, categories: toggle(form.categories, c) })}
                  className={`px-3 py-1 rounded border ${form.categories.includes(c) ? "bg-teal-600 text-white" : ""}`}
                >
                  {c}
                </button>
              ))}
            </div>
          </div>
          <div>
            <label className="block text-sm font-medium">Styles</label>
            <div className="flex gap-2 flex-wrap">
              {styles.map((s) => (
                <button
                  key={s}
                  onClick={() => setForm({ ...form, styles: toggle(form.styles, s) })}
                  className={`px-3 py-1 rounded border ${form.styles.includes(s) ? "bg-teal-600 text-white" : ""}`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {step === 2 && (
        <div className="space-y-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div>
              <label className="block text-sm font-medium">City</label>
              <input
                className="border rounded-md px-3 py-2 w-full"
                value={form.city}
                onChange={(e) => setForm({ ...form, city: e.target.value })}
              />
            </div>
            <div>
              <label className="block text-sm font-medium">Country</label>
              <input
                className="border rounded-md px-3 py-2 w-full"
                value={form.country}
                onChange={(e) => setForm({ ...form, country: e.target.value })}
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">Upload sample images (optional)</label>
            <UploadDropzone
              onFiles={async (files) => {
                const file = files[0]
                if (!file) return
                const tags = await detectImageTags(file)
                setForm((f) => ({ ...f, uploads: files, suggestedTags: tags.slice(0, 8) }))
              }}
            />
            {form.suggestedTags?.length ? (
              <div className="mt-3 text-sm text-gray-700">Suggested tags: {form.suggestedTags.join(", ")}</div>
            ) : null}
          </div>
        </div>
      )}

      <div className="flex items-center gap-2 mt-6">
        {step > 0 && (
          <Button variant="outline" onClick={back}>
            Back
          </Button>
        )}
        {step < 2 ? (
          <Button variant="primary" onClick={next}>
            Next
          </Button>
        ) : (
          <Button variant="primary" onClick={() => alert("Onboarding complete (stub)!")}>
            Finish
          </Button>
        )}
      </div>
    </div>
  )
}

function toggle(arr, v) {
  return arr.includes(v) ? arr.filter((x) => x !== v) : [...arr, v]
}
