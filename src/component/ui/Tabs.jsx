"use client"

import { useId, useState } from "react"

export default function Tabs({ tabs, initial = 0 }) {
  const [active, setActive] = useState(initial)
  const tablistId = useId()
  return (
    <div>
      <div role="tablist" aria-orientation="horizontal" className="flex gap-2 border-b">
        {tabs.map((t, i) => (
          <button
            key={t.label}
            role="tab"
            aria-selected={active === i}
            aria-controls={`${tablistId}-panel-${i}`}
            id={`${tablistId}-tab-${i}`}
            onClick={() => setActive(i)}
            className={`px-3 py-2 text-sm border-b-2 ${
              active === i ? "border-teal-600 text-teal-700" : "border-transparent text-gray-600"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      <div
        role="tabpanel"
        id={`${tablistId}-panel-${active}`}
        aria-labelledby={`${tablistId}-tab-${active}`}
        className="py-4"
      >
        {tabs[active]?.content}
      </div>
    </div>
  )
}
