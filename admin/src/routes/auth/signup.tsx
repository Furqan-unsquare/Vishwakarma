import { createFileRoute, Link, useNavigate } from '@tanstack/react-router'
import { useState } from 'react'
import { useMutation } from '@tanstack/react-query'
import authClient from '@/lib/authClient'

export const Route = createFileRoute('/auth/signup')({
  component: RouteComponent,
})

type SignupFormData = {
  name: string
  email: string
  password: string
}

function RouteComponent() {
  return (
    <div className="flex flex-col justify-center items-center min-h-screen">
      <h2 className="text-4xl font-Poppins mb-16">Register Here</h2>
      <SignupForm />
    </div>
  )
}

export const SignupForm = () => {
  const [formData, setFormData] = useState<SignupFormData>({
    name: '',
    email: '',
    password: '',
  })
  const [formError, setFormError] = useState('')
  const navigate = useNavigate()

  const signupMutation = useMutation({
    mutationFn: async (formData: SignupFormData) => {
      const res = await authClient.signUp.email({
        name: formData.name,
        email: formData.email,
        password: formData.password,
      })

      if (res.error) {
        throw new Error(res.error.message || 'Registration failed')
      }

      return res.data
    },
    onSuccess: () => {
      setFormError('')
      setFormData({ name: '', email: '', password: '' })
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
    signupMutation.mutate(formData)
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col font-Dm-Sans placeholder:font-Dm-Sans max-w-[400px] gap-4"
    >
      <div className="w-[400px]">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Username<span className="text-red-700">*</span>
        </label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
          maxLength={30}
          className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-Orange"
          placeholder="Choose your username"
        />
      </div>

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

      <Link className="text-right" to="/auth/signin">
        Already have an account?
        <span className="text-blue-400"> Login Here</span>
      </Link>
      {formError && <p className="text-red-500 text-sm">{formError}</p>}

      <button
        type="submit"
        disabled={signupMutation.isPending}
        className="bg-Orange text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-600 transition"
      >
        {signupMutation.isPending ? 'Signing up...' : 'Sign Up'}
      </button>
    </form>
  )
}
