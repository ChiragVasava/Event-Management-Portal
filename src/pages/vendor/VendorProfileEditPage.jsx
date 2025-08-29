import Button from "../../component/ui/Button.jsx"

export default function VendorProfileEditPage() {
  return (
    <div className="container py-8 max-w-2xl">
      <h1 className="text-2xl font-semibold mb-4">Edit Vendor Profile</h1>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Bio</label>
          <textarea className="border rounded-md px-3 py-2 w-full h-32" defaultValue="" />
        </div>
        <div>
          <label className="block text-sm font-medium">Coverage Area</label>
          <input className="border rounded-md px-3 py-2 w-full" defaultValue="" />
        </div>
        <Button variant="primary">Save</Button>
      </div>
    </div>
  )
}
