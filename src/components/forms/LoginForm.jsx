import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link } from 'react-router-dom'
import { supabase } from '@lib/supabaseClient'
import toast from 'react-hot-toast'
import {
  Mail,
  Lock,
  Eye,
  EyeOff,
  GraduationCap,
  ShieldCheck,
  Loader2,
} from 'lucide-react'
import { cn } from '@utils/cn'

// ── Schema ────────────────────────────────────────────────
const loginSchema = z.object({
  email: z.string().email('Valid email address is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
})

const LoginForm = ({
  role = 'student',
  onSuccess,
  redirectPath,
}) => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [forgotMode, setForgotMode] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotLoading, setForgotLoading] = useState(false)

  const isStaff = role === 'staff' || role === 'admin'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false },
  })

  // ── Sign In ───────────────────────────────────────────
  const onSubmit = async ({ email, password, rememberMe }) => {
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
        options: { persistSession: rememberMe ?? false },
      })

      if (error) throw error

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('user_id', data.user.id)
        .single()

      const roleRedirects = {
        admin: '/admin',
        staff: '/portal/staff-dashboard',
        student: '/portal/student-dashboard',
      }

      toast.success('Welcome back!')
      onSuccess?.(profile?.role, roleRedirects[profile?.role])
    } catch (err) {
      toast.error('Invalid email or password.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  // ── Forgot Password ───────────────────────────────────
  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!forgotEmail) {
      toast.error('Please enter your email')
      return
    }
    setForgotLoading(true)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        forgotEmail,
        { redirectTo: `${window.location.origin}/reset-password` }
      )
      if (error) throw error
      toast.success('Password reset link sent to your email!')
      setForgotMode(false)
      setForgotEmail('')
    } catch (err) {
      toast.error('Failed to send reset email')
    } finally {
      setForgotLoading(false)
    }
  }

  return (
    <div className="w-full">

      {/* Logo */}
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-green-800 rounded-full flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-green-800 font-bold text-sm">
              Clusters of Treasure
            </p>
            <p className="text-yellow-600 text-xs font-medium">
              Int'l School
            </p>
          </div>
        </Link>
      </div>

      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10">

        {forgotMode ? (
          <>
            <div className="text-center mb-8">
              <h2 className="text-2xl font-bold text-gray-900">
                Reset Password
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                Enter your email and we'll send a reset link
              </p>
            </div>
            <form onSubmit={handleForgotPassword} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
              </div>
              <button
                type="submit"
                disabled={forgotLoading}
                className={cn(
                  'w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-colors',
                  isStaff
                    ? 'bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300'
                    : 'bg-green-800 hover:bg-green-900 disabled:bg-green-400'
                )}
              >
                {forgotLoading ? (
                  <Loader2 className="w-4 h-4 animate-spin" />
                ) : (
                  'Send Reset Link'
                )}
              </button>
              <button
                type="button"
                onClick={() => setForgotMode(false)}
                className="w-full text-center text-sm text-gray-500 hover:text-gray-700 transition-colors"
              >
                ← Back to Login
              </button>
            </form>
          </>
        ) : (
          <>
            <div className="text-center mb-8">
              {isStaff && (
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                  <ShieldCheck className="w-6 h-6 text-yellow-600" />
                </div>
              )}
              <h2 className="text-2xl font-bold text-gray-900">
                {isStaff ? 'Staff & Admin Login' : 'Student Login'}
              </h2>
              <p className="text-gray-500 text-sm mt-2">
                {isStaff
                  ? 'Authorized personnel only'
                  : 'Sign in to access your portal'}
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    {...register('email')}
                    placeholder={
                      isStaff
                        ? 'staff@school.edu.ng'
                        : 'student@email.com'
                    }
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setForgotMode(true)}
                    className={cn(
                      'text-xs font-medium transition-colors',
                      isStaff
                        ? 'text-yellow-600 hover:text-yellow-800'
                        : 'text-green-700 hover:text-green-900'
                    )}
                  >
                    Forgot password?
                  </button>
                </div>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type={showPassword ? 'text' : 'password'}
                    {...register('password')}
                    placeholder="Enter your password"
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-transparent"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
                  >
                    {showPassword ? (
                      <EyeOff className="w-4 h-4" />
                    ) : (
                      <Eye className="w-4 h-4" />
                    )}
                  </button>
                </div>
                {errors.password && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>

              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  {...register('rememberMe')}
                  className="w-4 h-4 rounded border-gray-300 text-green-600 focus:ring-green-500 cursor-pointer"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm text-gray-600 cursor-pointer select-none"
                >
                  Remember me on this device
                </label>
              </div>

              <button
                type="submit"
                disabled={loading}
                className={cn(
                  'w-full flex items-center justify-center gap-2 text-white font-semibold py-3 rounded-lg transition-colors duration-200',
                  isStaff
                    ? 'bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300'
                    : 'bg-green-800 hover:bg-green-900 disabled:bg-green-400'
                )}
              >
                {loading ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>
            </form>

            <div className="relative my-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-100" />
              </div>
              <div className="relative flex justify-center text-xs">
                <span className="bg-white px-3 text-gray-400">
                  Other portals
                </span>
              </div>
            </div>

            <Link
              to={
                isStaff
                  ? '/portal/student-login'
                  : '/portal/staff-login'
              }
              className="w-full flex items-center justify-center border border-gray-200 hover:border-green-600 hover:bg-green-50 text-gray-700 hover:text-green-800 font-medium py-2.5 rounded-lg text-sm transition-all duration-200"
            >
              {isStaff
                ? 'Login as Student Instead'
                : 'Login as Staff Instead'}
            </Link>
          </>
        )}
      </div>

      {isStaff && (
        <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4">
          <p className="text-yellow-800 text-xs text-center">
            🔒 Authorized staff and administrators only. Unauthorized
            access is strictly prohibited.
          </p>
        </div>
      )}

      <p className="text-center text-gray-400 text-xs mt-6">
        <Link to="/" className="hover:text-green-800 transition-colors">
          ← Back to School Website
        </Link>
      </p>
    </div>
  )
}

export default LoginForm