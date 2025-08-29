"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth.js"
import { useLocation, useNavigate, Link } from "react-router-dom"
import Button from "../../component/ui/Button.jsx"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
})

export default function SignInPage() {
  const { signIn } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()
  const from = location.state?.from?.pathname || "/"

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema) })

  return (
    <div className="container py-10 max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Sign In</h1>
      <form
        onSubmit={handleSubmit(async (values) => {
          const { error, role } = await signIn(values.email, values.password)
          if (error) {
            alert(error.message)
          } else {
            // role-aware redirect
            if (role === "vendor") navigate("/vendor", { replace: true })
            else navigate(from, { replace: true })
          }
        })}
        className="space-y-4"
      >
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input className="border rounded-md px-3 py-2 w-full" {...register("email")} />
          {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
        </div>
        <div>
          <label className="block text-sm font-medium">Password</label>
          <input type="password" className="border rounded-md px-3 py-2 w-full" {...register("password")} />
          {errors.password && <p className="text-sm text-red-600">{errors.password.message}</p>}
        </div>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Signing in…" : "Sign In"}
        </Button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        No account? <Link to="/auth/sign-up">Sign up</Link>
      </p>
    </div>
  )
}
