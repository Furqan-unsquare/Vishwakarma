import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import authClient from '@/lib/authClient'

export const Route = createFileRoute('/auth/signin')({
  component: RouteComponent,
})

type SigninFormData = {
  email: string
  password: string
}

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-Poppins mb-16">Login Here</h2>
      <SigninForm />
    </div>
  )
}

export const SigninForm = () => {
  const [formData, setFormData] = useState<SigninFormData>({
    email: '',
    password: '',
  })
  const [formError, setFormError] = useState('')
  const navigate = useNavigate()

  const signinMutation = useMutation({
    mutationFn: async (formData: SigninFormData) => {
      const res = await authClient.signIn.email({
        email: formData.email,
        password: formData.password,
      })

      if (res.error) {
        throw new Error(res.error.message || 'Login failed')
      }

      return res.data
    },
    onSuccess: () => {
      setFormError('')
      setFormData({ email: '', password: '' })
      navigate({ to: '/' })
    },
    onError: (error: Error) => setFormError(error.message),
  })

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    signinMutation.mutate(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col font-Dm-Sans placeholder:font-Dm-Sans max-w-[400px] gap-4"
    >
      <div className="w-[400px]">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Email<span className="text-red-700">*</span>
        </label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Enter your email"
        />
      </div>

      <div className="w-[400px]">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Password<span className="text-red-700">*</span>
        </label>
        <input
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
          required
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Enter your password"
        />
      </div>

      <Link className="text-right" to="/auth/signup">
        Don't have an account?
        <span className="text-blue-400">Register Now</span>
      </Link>
      {formError && <p className="text-red-500 text-sm">{formError}</p>}

      <button
        type="submit"
        disabled={signinMutation.isPending}
        className="bg-Orange text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition"
      >
        {signinMutation.isPending ? 'Signing in...' : 'Sign In'}
      </button>
    </form>
  )
}
