import styles from "../data/styles.json"
import { Link } from "react-router-dom"

export default function CategoriesPage() {
  const cats = [
    { id: "personal", label: "Personal" },
    { id: "professional", label: "Professional" },
  ]
  return (
    <div className="container py-10 space-y-8">
      <div>
        <h1 className="text-2xl font-semibold">Categories</h1>
        <p className="text-gray-600">Choose a category or style to explore vendors.</p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
        {cats.map((c) => (
          <Link key={c.id} to={`/vendors?category=${c.id}`} className="border rounded-md p-4 hover:bg-gray-50">
            {c.label}
          </Link>
        ))}
      </div>
      <div>
        <h2 className="text-xl font-semibold">Styles</h2>
        <div className="mt-3 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3">
          {styles.map((s) => (
            <Link
              key={s}
              to={`/vendors?style=${encodeURIComponent(s)}`}
              className="border rounded-md p-4 hover:bg-gray-50"
            >
              {s}
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
