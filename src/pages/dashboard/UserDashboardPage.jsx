export default function UserDashboardPage() {
  return (
    <div className="container py-8">
      <h1 className="text-2xl font-semibold">Your Dashboard</h1>
      <div className="mt-4 grid gap-4">
        <section className="border rounded-md p-4">
          <h2 className="font-semibold">Saved Vendors</h2>
          <p className="text-sm text-gray-600">No saved vendors yet.</p>
        </section>
        <section className="border rounded-md p-4">
          <h2 className="font-semibold">Recent Searches</h2>
          <p className="text-sm text-gray-600">Your latest search activity will appear here.</p>
        </section>
        <section className="border rounded-md p-4">
          <h2 className="font-semibold">Preferences</h2>
          <p className="text-sm text-gray-600">Set preferred styles and budget (stub).</p>
        </section>
      </div>
    </div>
  )
}
