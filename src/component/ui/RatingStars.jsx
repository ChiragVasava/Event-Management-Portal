export default function RatingStars({ value = 0 }) {
  const full = Math.round(value)
  return (
    <div aria-label={`Rating ${value} out of 5`} className="text-amber-500">
      {"★★★★★".slice(0, full)}
      <span className="text-gray-300">{"★★★★★".slice(full)}</span>
    </div>
  )
}
