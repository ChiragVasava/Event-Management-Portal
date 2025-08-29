import clsx from "classnames"

export default function Button({ as: Comp = "button", className, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-md px-3 py-2 text-sm font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2"
  const variants = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-600",
    outline: "border border-gray-300 bg-white hover:bg-gray-50 focus:ring-teal-600",
    ghost: "bg-transparent hover:bg-gray-100 focus:ring-teal-600",
    teal: "bg-teal-600 text-white hover:bg-teal-700 focus:ring-teal-600",
  }
  return <Comp className={clsx(base, variants[variant], className)} {...props} />
}
