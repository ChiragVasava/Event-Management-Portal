"use client"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { zodResolver } from "@hookform/resolvers/zod"
import { useAuth } from "../../hooks/useAuth.js"
import { useNavigate, Link } from "react-router-dom"
import Button from "../../component/ui/Button.jsx"

const schema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  role: z.enum(["user", "vendor"]),
})

export default function SignUpPage() {
  const { signUp } = useAuth()
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({ resolver: zodResolver(schema), defaultValues: { role: "user" } })

  return (
    <div className="container py-10 max-w-md">
      <h1 className="text-2xl font-semibold mb-4">Create account</h1>
      <form
        onSubmit={handleSubmit(async (values) => {
          const { error, role } = await signUp(values.email, values.password, values.role)
          if (error) alert(error.message)
          else {
            if (role === "vendor") navigate("/vendor/onboarding", { replace: true })
            else navigate("/", { replace: true })
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
        <div>
          <label className="block text-sm font-medium">Role</label>
          <select className="border rounded-md px-3 py-2 w-full" {...register("role")}>
            <option value="user">User</option>
            <option value="vendor">Vendor</option>
          </select>
          {errors.role && <p className="text-sm text-red-600">{errors.role.message}</p>}
        </div>
        <Button type="submit" variant="primary" disabled={isSubmitting}>
          {isSubmitting ? "Creating…" : "Sign Up"}
        </Button>
      </form>
      <p className="text-sm text-gray-600 mt-4">
        Already have an account? <Link to="/auth/sign-in">Sign in</Link>
      </p>
    </div>
  )
}
