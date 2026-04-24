// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { supabase } from '@lib/supabaseClient'
// import toast from 'react-hot-toast'
// import {
//   GraduationCap,
//   Eye,
//   EyeOff,
//   Lock,
//   Mail,
//   ShieldCheck,
// } from 'lucide-react'

// // ── Validation Schema ─────────────────────────────────────
// const loginSchema = z.object({
//   email: z.string().email('Valid email address is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
//   rememberMe: z.boolean().optional(),
// })

// const StaffLogin = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [forgotMode, setForgotMode] = useState(false)
//   const [forgotEmail, setForgotEmail] = useState('')
//   const [forgotLoading, setForgotLoading] = useState(false)
//   const navigate = useNavigate()
//   const location = useLocation()

//   const from = location.state?.from?.pathname || '/portal/staff-dashboard'

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { rememberMe: false },
//   })

//   // ── Sign In ───────────────────────────────────────────
//   const onSubmit = async ({ email, password, rememberMe }) => {
//     setLoading(true)
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//         options: {
//           persistSession: rememberMe ?? false,
//         },
//       })

//       if (error) throw error

//       // Fetch profile to determine role
//       const { data: profile } = await supabase
//         .from('profiles')
//         .select('role')
//         .eq('user_id', data.user.id)
//         .single()

//       const roleRedirects = {
//         admin: '/admin',
//         staff: '/portal/staff-dashboard',
//         student: '/portal/student-dashboard',
//       }

//       toast.success('Welcome back!')
//       navigate(
//         roleRedirects[profile?.role] ?? from,
//         { replace: true }
//       )
//     } catch (error) {
//       toast.error('Invalid email or password. Please try again.')
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // ── Forgot Password ───────────────────────────────────
//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!forgotEmail) {
//       toast.error('Please enter your email address')
//       return
//     }
//     setForgotLoading(true)
//     try {
//       const { error } = await supabase.auth.resetPasswordForEmail(
//         forgotEmail,
//         {
//           redirectTo: `${window.location.origin}/reset-password`,
//         }
//       )
//       if (error) throw error
//       toast.success('Password reset link sent! Check your email.')
//       setForgotMode(false)
//       setForgotEmail('')
//     } catch (error) {
//       toast.error('Failed to send reset email. Please try again.')
//       console.error(error)
//     } finally {
//       setForgotLoading(false)
//     }
//   }

//   return (
//     <div className="w-full">

//       {/* ── Logo ─────────────────────────────────────────── */}
//       <div className="text-center mb-8">
//         <Link to="/" className="inline-flex flex-col items-center gap-2">
//           <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
//             <GraduationCap className="w-7 h-7 text-white" />
//           </div>
//           <div>
//             <p className="text-blue-600 font-bold text-sm">
//               Clusters of Treasure
//             </p>
//             <p className="text-yellow-600 text-xs font-medium">
//               Int'l School
//             </p>
//           </div>
//         </Link>
//       </div>

//       {/* ── Card ─────────────────────────────────────────── */}
//       <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10">

//         {forgotMode ? (
//           // ── Forgot Password Mode ───────────────────────
//           <>
//             <div className="text-center mb-8">
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Reset Password
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Enter your staff email to receive a reset link
//               </p>
//             </div>

//             <form onSubmit={handleForgotPassword} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Staff Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     value={forgotEmail}
//                     onChange={(e) => setForgotEmail(e.target.value)}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={forgotLoading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {forgotLoading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Reset Link'
//                 )}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setForgotMode(false)}
//                 className="w-full text-center text-sm text-gray-500 hover:text-yellow-700 transition-colors"
//               >
//                 ← Back to Login
//               </button>
//             </form>
//           </>
//         ) : (
//           // ── Login Mode ────────────────────────────────
//           <>
//             <div className="text-center mb-8">
//               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <ShieldCheck className="w-6 h-6 text-yellow-600" />
//               </div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Staff & Admin Login
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Authorized personnel only
//               </p>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     {...register('email')}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Password
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => setForgotMode(true)}
//                     className="text-xs text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     {...register('password')}
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               {/* Remember Me */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   {...register('rememberMe')}
//                   className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400 cursor-pointer"
//                 />
//                 <label
//                   htmlFor="rememberMe"
//                   className="text-sm text-gray-600 cursor-pointer select-none"
//                 >
//                   Remember me on this device
//                 </label>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {loading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Signing in...
//                   </>
//                 ) : (
//                   'Sign In'
//                 )}
//               </button>

//             </form>

//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-100" />
//               </div>
//               <div className="relative flex justify-center text-xs">
//                 <span className="bg-white px-3 text-gray-400">
//                   Other portals
//                 </span>
//               </div>
//             </div>

//             <Link
//               to="/portal/student-login"
//               className="w-full flex items-center justify-center border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-yellow-800 font-medium py-2.5 rounded-lg text-sm transition-all duration-200"
//             >
//               Login as Student Instead
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Security Notice */}
//       <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4">
//         <p className="text-yellow-800 text-xs text-center">
//           🔒 This portal is for authorized staff and administrators only.
//           Unauthorized access is strictly prohibited.
//         </p>
//       </div>

//       {/* Back to website */}
//       <p className="text-center text-gray-400 text-xs mt-4">
//         <Link to="/" className="hover:text-yellow-700 transition-colors">
//           ← Back to School Website
//         </Link>
//       </p>

//     </div>
//   )
// }

// export default StaffLogin





























































// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { supabase } from '@lib/supabaseClient'
// import toast from 'react-hot-toast'
// import {
//   GraduationCap,
//   Eye,
//   EyeOff,
//   Lock,
//   Mail,
//   ShieldCheck,
// } from 'lucide-react'

// // ── Validation Schema ─────────────────────────────────────
// const loginSchema = z.object({
//   email: z.string().email('Valid email address is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
//   rememberMe: z.boolean().optional(),
// })

// const StaffLogin = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [forgotMode, setForgotMode] = useState(false)
//   const [forgotEmail, setForgotEmail] = useState('')
//   const [forgotLoading, setForgotLoading] = useState(false)
//   const navigate = useNavigate()
//   const location = useLocation()

//   const from = location.state?.from?.pathname || '/portal/staff-dashboard'

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { rememberMe: false },
//   })

//   // ── Sign In (UPDATED FUNCTION) ───────────────────────────
//   const onSubmit = async ({ email, password, rememberMe }) => {
//     setLoading(true)
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//         options: { persistSession: rememberMe ?? false },
//       })

//       if (error) throw error

//       // ── Fetch profile to get role ─────────────────────
//       // const { data: profile, error: profileError } = await supabase
//       //   .from('profiles')
//       //   .select('role')
//       //   .eq('user_id', data.user.id)
//       //   .single()


//       const { data: profile, error: profileError } = await supabase
//           .from('profiles')
//           .select('role')
//           .eq('user_id', data.user.id)
//           .maybeSingle()


//       if (profileError || !profile) {
//         toast.error('Account found but no profile exists. Contact admin.')
//         return
//       }

//       const roleRedirects = {
//         admin: '/admin',
//         staff: '/portal/staff-dashboard',
//         student: '/portal/student-dashboard',
//       }

//       const redirectTo = roleRedirects[profile.role] ?? '/'

//       toast.success('Welcome back!')

//       // Small delay to let AuthContext update before redirect
//       setTimeout(() => {
//         navigate(redirectTo, { replace: true })
//       }, 300)

//     } catch (error) {
//       toast.error('Invalid email or password. Please try again.')
//       console.error(error)
//     } finally {
//       setLoading(false)
//     }
//   }

//   // ── Forgot Password ───────────────────────────────────
//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!forgotEmail) {
//       toast.error('Please enter your email address')
//       return
//     }
//     setForgotLoading(true)
//     try {
//       const { error } = await supabase.auth.resetPasswordForEmail(
//         forgotEmail,
//         {
//           redirectTo: `${window.location.origin}/reset-password`,
//         }
//       )
//       if (error) throw error
//       toast.success('Password reset link sent! Check your email.')
//       setForgotMode(false)
//       setForgotEmail('')
//     } catch (error) {
//       toast.error('Failed to send reset email. Please try again.')
//       console.error(error)
//     } finally {
//       setForgotLoading(false)
//     }
//   }

//   return (
//     <div className="w-full">
      
//       {/* ── Logo ─────────────────────────────────────────── */}
//       <div className="text-center mb-8">
//         <Link to="/" className="inline-flex flex-col items-center gap-2">
//           <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
//             <GraduationCap className="w-7 h-7 text-white" />
//           </div>
//           <div>
//             <p className="text-blue-600 font-bold text-sm">
//               Clusters of Treasure
//             </p>
//             <p className="text-yellow-600 text-xs font-medium">
//               Int'l School
//             </p>
//           </div>
//         </Link>
//       </div>

//       {/* ── Card ─────────────────────────────────────────── */}
//       <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10">

//         {forgotMode ? (
//           // ── Forgot Password Mode ───────────────────────
//           <>
//             <div className="text-center mb-8">
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Reset Password
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Enter your staff email to receive a reset link
//               </p>
//             </div>

//             <form onSubmit={handleForgotPassword} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Staff Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     value={forgotEmail}
//                     onChange={(e) => setForgotEmail(e.target.value)}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={forgotLoading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {forgotLoading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Reset Link'
//                 )}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setForgotMode(false)}
//                 className="w-full text-center text-sm text-gray-500 hover:text-yellow-700 transition-colors"
//               >
//                 ← Back to Login
//               </button>
//             </form>
//           </>
//         ) : (
//           // ── Login Mode ────────────────────────────────
//           <>
//             <div className="text-center mb-8">
//               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <ShieldCheck className="w-6 h-6 text-yellow-600" />
//               </div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Staff & Admin Login
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Authorized personnel only
//               </p>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     {...register('email')}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Password
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => setForgotMode(true)}
//                     className="text-xs text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     {...register('password')}
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               {/* Remember Me */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   {...register('rememberMe')}
//                   className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400 cursor-pointer"
//                 />
//                 <label
//                   htmlFor="rememberMe"
//                   className="text-sm text-gray-600 cursor-pointer select-none"
//                 >
//                   Remember me on this device
//                 </label>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {loading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Signing in...
//                   </>
//                 ) : (
//                   'Sign In'
//                 )}
//               </button>

//             </form>

//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-100" />
//               </div>
//               <div className="relative flex justify-center text-xs">
//                 <span className="bg-white px-3 text-gray-400">
//                   Other portals
//                 </span>
//               </div>
//             </div>

//             <Link
//               to="/portal/student-login"
//               className="w-full flex items-center justify-center border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-yellow-800 font-medium py-2.5 rounded-lg text-sm transition-all duration-200"
//             >
//               Login as Student Instead
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Security Notice */}
//       <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4">
//         <p className="text-yellow-800 text-xs text-center">
//           🔒 This portal is for authorized staff and administrators only.
//           Unauthorized access is strictly prohibited.
//         </p>
//       </div>

//       {/* Back to website */}
//       <p className="text-center text-gray-400 text-xs mt-4">
//         <Link to="/" className="hover:text-yellow-700 transition-colors">
//           ← Back to School Website
//         </Link>
//       </p>

//     </div>
//   )
// }
    
// export default StaffLogin

















// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { supabase } from '@lib/supabaseClient'
// import toast from 'react-hot-toast'
// import {
//   GraduationCap,
//   Eye,
//   EyeOff,
//   Lock,
//   Mail,
//   ShieldCheck,
// } from 'lucide-react'

// // ── Validation Schema ─────────────────────────────────────
// const loginSchema = z.object({
//   email: z.string().email('Valid email address is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
//   rememberMe: z.boolean().optional(),
// })

// const StaffLogin = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [forgotMode, setForgotMode] = useState(false)
//   const [forgotEmail, setForgotEmail] = useState('')
//   const [forgotLoading, setForgotLoading] = useState(false)
//   const navigate = useNavigate()
//   const location = useLocation()

//   const from = location.state?.from?.pathname || '/portal/staff-dashboard'

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { rememberMe: false },
//   })

//   // ── Sign In (UPDATED FUNCTION) ───────────────────────────
//   const onSubmit = async ({ email, password, rememberMe }) => {
//     setLoading(true)
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       })

//       if (error) throw error

//       console.log('✅ Login success')
//       console.log('User ID:', data.user.id)
//       console.log('User email:', data.user.email)

//       const { data: profile, error: profileError } = await supabase
//         .from('profiles')
//         .select('*')
//         .eq('user_id', data.user.id)
//         .single()

//       console.log('Profile data:', profile)
//       console.log('Profile error:', profileError)
//       console.log('Profile error message:', profileError?.message)
//       console.log('Profile error code:', profileError?.code)

//       if (profileError || !profile) {
//         toast.error('Account found but no profile exists. Contact admin.')
//         return
//       }

//       const roleRedirects = {
//         admin: '/admin',
//         staff: '/portal/staff-dashboard',
//         student: '/portal/student-dashboard',
//       }

//       toast.success('Welcome back!')
//       setTimeout(() => {
//         navigate(roleRedirects[profile.role] ?? '/', { replace: true })
//       }, 300)

//     } catch (error) {
//       console.log('❌ Full error:', error)
//       toast.error('Invalid email or password.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // ── Forgot Password ───────────────────────────────────
//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!forgotEmail) {
//       toast.error('Please enter your email address')
//       return
//     }
//     setForgotLoading(true)
//     try {
//       const { error } = await supabase.auth.resetPasswordForEmail(
//         forgotEmail,
//         {
//           redirectTo: `${window.location.origin}/reset-password`,
//         }
//       )
//       if (error) throw error
//       toast.success('Password reset link sent! Check your email.')
//       setForgotMode(false)
//       setForgotEmail('')
//     } catch (error) {
//       toast.error('Failed to send reset email. Please try again.')
//       console.error(error)
//     } finally {
//       setForgotLoading(false)
//     }
//   }

//   return (
//     <div className="w-full">
      
//       {/* ── Logo ─────────────────────────────────────────── */}
//       <div className="text-center mb-8">
//         <Link to="/" className="inline-flex flex-col items-center gap-2">
//           <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
//             <GraduationCap className="w-7 h-7 text-white" />
//           </div>
//           <div>
//             <p className="text-blue-600 font-bold text-sm">
//               Clusters of Treasure
//             </p>
//             <p className="text-yellow-600 text-xs font-medium">
//               Int'l School
//             </p>
//           </div>
//         </Link>
//       </div>

//       {/* ── Card ─────────────────────────────────────────── */}
//       <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10">

//         {forgotMode ? (
//           // ── Forgot Password Mode ───────────────────────
//           <>
//             <div className="text-center mb-8">
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Reset Password
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Enter your staff email to receive a reset link
//               </p>
//             </div>

//             <form onSubmit={handleForgotPassword} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Staff Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     value={forgotEmail}
//                     onChange={(e) => setForgotEmail(e.target.value)}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={forgotLoading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {forgotLoading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Reset Link'
//                 )}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setForgotMode(false)}
//                 className="w-full text-center text-sm text-gray-500 hover:text-yellow-700 transition-colors"
//               >
//                 ← Back to Login
//               </button>
//             </form>
//           </>
//         ) : (
//           // ── Login Mode ────────────────────────────────
//           <>
//             <div className="text-center mb-8">
//               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <ShieldCheck className="w-6 h-6 text-yellow-600" />
//               </div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Staff & Admin Login
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Authorized personnel only
//               </p>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     {...register('email')}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Password
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => setForgotMode(true)}
//                     className="text-xs text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     {...register('password')}
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               {/* Remember Me */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   {...register('rememberMe')}
//                   className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400 cursor-pointer"
//                 />
//                 <label
//                   htmlFor="rememberMe"
//                   className="text-sm text-gray-600 cursor-pointer select-none"
//                 >
//                   Remember me on this device
//                 </label>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {loading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Signing in...
//                   </>
//                 ) : (
//                   'Sign In'
//                 )}
//               </button>

//             </form>

//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-100" />
//               </div>
//               <div className="relative flex justify-center text-xs">
//                 <span className="bg-white px-3 text-gray-400">
//                   Other portals
//                 </span>
//               </div>
//             </div>

//             <Link
//               to="/portal/student-login"
//               className="w-full flex items-center justify-center border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-yellow-800 font-medium py-2.5 rounded-lg text-sm transition-all duration-200"
//             >
//               Login as Student Instead
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Security Notice */}
//       <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4">
//         <p className="text-yellow-800 text-xs text-center">
//           🔒 This portal is for authorized staff and administrators only.
//           Unauthorized access is strictly prohibited.
//         </p>
//       </div>

//       {/* Back to website */}
//       <p className="text-center text-gray-400 text-xs mt-4">
//         <Link to="/" className="hover:text-yellow-700 transition-colors">
//           ← Back to School Website
//         </Link>
//       </p>

//     </div>
//   )
// }
    
// export default StaffLogin
















// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { zodResolver } from '@hookform/resolvers/zod'
// import { z } from 'zod'
// import { Link, useNavigate, useLocation } from 'react-router-dom'
// import { supabase } from '@lib/supabaseClient'
// import toast from 'react-hot-toast'
// import {
//   GraduationCap,
//   Eye,
//   EyeOff,
//   Lock,
//   Mail,
//   ShieldCheck,
// } from 'lucide-react'

// // ── Validation Schema ─────────────────────────────────────
// const loginSchema = z.object({
//   email: z.string().email('Valid email address is required'),
//   password: z.string().min(6, 'Password must be at least 6 characters'),
//   rememberMe: z.boolean().optional(),
// })

// const StaffLogin = () => {
//   const [showPassword, setShowPassword] = useState(false)
//   const [loading, setLoading] = useState(false)
//   const [forgotMode, setForgotMode] = useState(false)
//   const [forgotEmail, setForgotEmail] = useState('')
//   const [forgotLoading, setForgotLoading] = useState(false)
//   const navigate = useNavigate()
//   const location = useLocation()

//   const from = location.state?.from?.pathname || '/portal/staff-dashboard'

//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: zodResolver(loginSchema),
//     defaultValues: { rememberMe: false },
//   })

//   // ── Sign In (SIMPLIFIED - AuthContext handles profile) ───────────────────────────
//   const onSubmit = async ({ email, password, rememberMe }) => {
//     setLoading(true)
//     try {
//       const { data, error } = await supabase.auth.signInWithPassword({
//         email,
//         password,
//       })

//       if (error) throw error

//       console.log('✅ Login success')
//       console.log('User ID:', data.user.id)
//       console.log('User email:', data.user.email)

//       // Profile fetch REMOVED - AuthContext will handle it
//       // Just wait a moment for AuthContext to update, then navigate to staff dashboard
      
//       toast.success('Welcome back!')

//       setTimeout(() => {
//         navigate('/portal/staff-dashboard', { replace: true })
//       }, 500)

//     } catch (error) {
//       console.log('❌ Login error:', error)
//       toast.error('Invalid email or password.')
//     } finally {
//       setLoading(false)
//     }
//   }

//   // ── Forgot Password ───────────────────────────────────
//   const handleForgotPassword = async (e) => {
//     e.preventDefault()
//     if (!forgotEmail) {
//       toast.error('Please enter your email address')
//       return
//     }
//     setForgotLoading(true)
//     try {
//       const { error } = await supabase.auth.resetPasswordForEmail(
//         forgotEmail,
//         {
//           redirectTo: `${window.location.origin}/reset-password`,
//         }
//       )
//       if (error) throw error
//       toast.success('Password reset link sent! Check your email.')
//       setForgotMode(false)
//       setForgotEmail('')
//     } catch (error) {
//       toast.error('Failed to send reset email. Please try again.')
//       console.error(error)
//     } finally {
//       setForgotLoading(false)
//     }
//   }

//   return (
//     <div className="w-full">
      
//       {/* ── Logo ─────────────────────────────────────────── */}
//       <div className="text-center mb-8">
//         <Link to="/" className="inline-flex flex-col items-center gap-2">
//           <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
//             <GraduationCap className="w-7 h-7 text-white" />
//           </div>
//           <div>
//             <p className="text-blue-600 font-bold text-sm">
//               Clusters of Treasure
//             </p>
//             <p className="text-yellow-600 text-xs font-medium">
//               Int'l School
//             </p>
//           </div>
//         </Link>
//       </div>

//       {/* ── Card ─────────────────────────────────────────── */}
//       <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10">

//         {forgotMode ? (
//           // ── Forgot Password Mode ───────────────────────
//           <>
//             <div className="text-center mb-8">
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Reset Password
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Enter your staff email to receive a reset link
//               </p>
//             </div>

//             <form onSubmit={handleForgotPassword} className="space-y-5">
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Staff Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     value={forgotEmail}
//                     onChange={(e) => setForgotEmail(e.target.value)}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//               </div>

//               <button
//                 type="submit"
//                 disabled={forgotLoading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {forgotLoading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Sending...
//                   </>
//                 ) : (
//                   'Send Reset Link'
//                 )}
//               </button>

//               <button
//                 type="button"
//                 onClick={() => setForgotMode(false)}
//                 className="w-full text-center text-sm text-gray-500 hover:text-yellow-700 transition-colors"
//               >
//                 ← Back to Login
//               </button>
//             </form>
//           </>
//         ) : (
//           // ── Login Mode ────────────────────────────────
//           <>
//             <div className="text-center mb-8">
//               <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
//                 <ShieldCheck className="w-6 h-6 text-yellow-600" />
//               </div>
//               <h1 className="text-2xl font-bold text-gray-900">
//                 Staff & Admin Login
//               </h1>
//               <p className="text-gray-500 text-sm mt-2">
//                 Authorized personnel only
//               </p>
//             </div>

//             <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

//               {/* Email */}
//               <div>
//                 <label className="block text-sm font-medium text-gray-700 mb-1.5">
//                   Email Address
//                 </label>
//                 <div className="relative">
//                   <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type="email"
//                     {...register('email')}
//                     placeholder="staff@school.edu.ng"
//                     className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                 </div>
//                 {errors.email && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.email.message}
//                   </p>
//                 )}
//               </div>

//               {/* Password */}
//               <div>
//                 <div className="flex items-center justify-between mb-1.5">
//                   <label className="block text-sm font-medium text-gray-700">
//                     Password
//                   </label>
//                   <button
//                     type="button"
//                     onClick={() => setForgotMode(true)}
//                     className="text-xs text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
//                   >
//                     Forgot password?
//                   </button>
//                 </div>
//                 <div className="relative">
//                   <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
//                   <input
//                     type={showPassword ? 'text' : 'password'}
//                     {...register('password')}
//                     placeholder="Enter your password"
//                     className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
//                   />
//                   <button
//                     type="button"
//                     onClick={() => setShowPassword(!showPassword)}
//                     className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 transition-colors"
//                   >
//                     {showPassword ? (
//                       <EyeOff className="w-4 h-4" />
//                     ) : (
//                       <Eye className="w-4 h-4" />
//                     )}
//                   </button>
//                 </div>
//                 {errors.password && (
//                   <p className="text-red-500 text-xs mt-1">
//                     {errors.password.message}
//                   </p>
//                 )}
//               </div>

//               {/* Remember Me */}
//               <div className="flex items-center gap-2">
//                 <input
//                   type="checkbox"
//                   id="rememberMe"
//                   {...register('rememberMe')}
//                   className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400 cursor-pointer"
//                 />
//                 <label
//                   htmlFor="rememberMe"
//                   className="text-sm text-gray-600 cursor-pointer select-none"
//                 >
//                   Remember me on this device
//                 </label>
//               </div>

//               {/* Submit */}
//               <button
//                 type="submit"
//                 disabled={loading}
//                 className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
//               >
//                 {loading ? (
//                   <>
//                     <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
//                     Signing in...
//                   </>
//                 ) : (
//                   'Sign In'
//                 )}
//               </button>

//             </form>

//             {/* Divider */}
//             <div className="relative my-6">
//               <div className="absolute inset-0 flex items-center">
//                 <div className="w-full border-t border-gray-100" />
//               </div>
//               <div className="relative flex justify-center text-xs">
//                 <span className="bg-white px-3 text-gray-400">
//                   Other portals
//                 </span>
//               </div>
//             </div>

//             <Link
//               to="/portal/student-login"
//               className="w-full flex items-center justify-center border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-yellow-800 font-medium py-2.5 rounded-lg text-sm transition-all duration-200"
//             >
//               Login as Student Instead
//             </Link>
//           </>
//         )}
//       </div>

//       {/* Security Notice */}
//       <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4">
//         <p className="text-yellow-800 text-xs text-center">
//           🔒 This portal is for authorized staff and administrators only.
//           Unauthorized access is strictly prohibited.
//         </p>
//       </div>

//       {/* Back to website */}
//       <p className="text-center text-gray-400 text-xs mt-4">
//         <Link to="/" className="hover:text-yellow-700 transition-colors">
//           ← Back to School Website
//         </Link>
//       </p>

//     </div>
//   )
// }
    
// export default StaffLogin


























import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { supabase } from '@lib/supabaseClient'
import toast from 'react-hot-toast'
import {
  GraduationCap,
  Eye,
  EyeOff,
  Lock,
  Mail,
  ShieldCheck,
} from 'lucide-react'

// ── Validation Schema ─────────────────────────────────────
const loginSchema = z.object({
  email: z.string().email('Valid email address is required'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  rememberMe: z.boolean().optional(),
})

const StaffLogin = () => {
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [forgotMode, setForgotMode] = useState(false)
  const [forgotEmail, setForgotEmail] = useState('')
  const [forgotLoading, setForgotLoading] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || '/portal/staff-dashboard'

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(loginSchema),
    defaultValues: { rememberMe: false },
  })

  // ── Sign In (FIXED NAVIGATION) ───────────────────────────
  const onSubmit = async ({ email, password, rememberMe }) => {
    setLoading(true)
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      })

      if (error) throw error

      console.log('✅ Login success')
      console.log('User ID:', data.user.id)
      console.log('User email:', data.user.email)

      toast.success('Welcome back!')

      // FIXED: Use window.location for reliable navigation or ensure navigate works
      // Option 1: Try navigate first
      // navigate('/portal/staff-dashboard', { replace: true })
      window.location.href = '/portal/staff-dashboard'
      
      // Option 2: Fallback to window.location if navigate doesn't work
      // setTimeout(() => {
      //   window.location.href = '/portal/staff-dashboard'
      // }, 1000)

    } catch (error) {
      console.log('❌ Login error:', error)
      toast.error('Invalid email or password.')
    } finally {
      setLoading(false)
    }
  }

  // ── Forgot Password ───────────────────────────────────
  const handleForgotPassword = async (e) => {
    e.preventDefault()
    if (!forgotEmail) {
      toast.error('Please enter your email address')
      return
    }
    setForgotLoading(true)
    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        forgotEmail,
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      )
      if (error) throw error
      toast.success('Password reset link sent! Check your email.')
      setForgotMode(false)
      setForgotEmail('')
    } catch (error) {
      toast.error('Failed to send reset email. Please try again.')
      console.error(error)
    } finally {
      setForgotLoading(false)
    }
  }

  return (
    <div className="w-full">
      
      {/* ── Logo ─────────────────────────────────────────── */}
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-blue-600 font-bold text-sm">
              MayDay
            </p>
            <p className="text-yellow-600 text-xs font-medium">
              Int'l School
            </p>
          </div>
        </Link>
      </div>

      {/* ── Card ─────────────────────────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10">

        {forgotMode ? (
          // ── Forgot Password Mode ───────────────────────
          <>
            <div className="text-center mb-8">
              <h1 className="text-2xl font-bold text-gray-900">
                Reset Password
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Enter your staff email to receive a reset link
              </p>
            </div>

            <form onSubmit={handleForgotPassword} className="space-y-5">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Staff Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    value={forgotEmail}
                    onChange={(e) => setForgotEmail(e.target.value)}
                    placeholder="staff@school.edu.ng"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={forgotLoading}
                className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {forgotLoading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  'Send Reset Link'
                )}
              </button>

              <button
                type="button"
                onClick={() => setForgotMode(false)}
                className="w-full text-center text-sm text-gray-500 hover:text-yellow-700 transition-colors"
              >
                ← Back to Login
              </button>
            </form>
          </>
        ) : (
          // ── Login Mode ────────────────────────────────
          <>
            <div className="text-center mb-8">
              <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <ShieldCheck className="w-6 h-6 text-yellow-600" />
              </div>
              <h1 className="text-2xl font-bold text-gray-900">
                Staff & Admin Login
              </h1>
              <p className="text-gray-500 text-sm mt-2">
                Authorized personnel only
              </p>
            </div>

            <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                    type="email"
                    {...register('email')}
                    placeholder="staff@school.edu.ng"
                    className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
                  />
                </div>
                {errors.email && (
                  <p className="text-red-500 text-xs mt-1">
                    {errors.email.message}
                  </p>
                )}
              </div>

              {/* Password */}
              <div>
                <div className="flex items-center justify-between mb-1.5">
                  <label className="block text-sm font-medium text-gray-700">
                    Password
                  </label>
                  <button
                    type="button"
                    onClick={() => setForgotMode(true)}
                    className="text-xs text-yellow-600 hover:text-yellow-800 font-medium transition-colors"
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
                    className="w-full pl-10 pr-10 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent transition"
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

              {/* Remember Me */}
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  {...register('rememberMe')}
                  className="w-4 h-4 rounded border-gray-300 text-yellow-500 focus:ring-yellow-400 cursor-pointer"
                />
                <label
                  htmlFor="rememberMe"
                  className="text-sm text-gray-600 cursor-pointer select-none"
                >
                  Remember me on this device
                </label>
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full flex items-center justify-center gap-2 bg-yellow-600 hover:bg-yellow-700 disabled:bg-yellow-300 text-white font-semibold py-3 rounded-lg transition-colors duration-200"
              >
                {loading ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Signing in...
                  </>
                ) : (
                  'Sign In'
                )}
              </button>

            </form>

            {/* Divider */}
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
              to="/portal/student-login"
              className="w-full flex items-center justify-center border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-yellow-800 font-medium py-2.5 rounded-lg text-sm transition-all duration-200"
            >
              Login as Student Instead
            </Link>
          </>
        )}
      </div>

      {/* Security Notice */}
      <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4">
        <p className="text-yellow-800 text-xs text-center">
          🔒 This portal is for authorized staff and administrators only.
          Unauthorized access is strictly prohibited.
        </p>
      </div>

      {/* Back to website */}
      <p className="text-center text-gray-400 text-xs mt-4">
        <Link to="/" className="hover:text-yellow-700 transition-colors">
          ← Back to School Website
        </Link>
      </p>

    </div>
  )
}
    
export default StaffLogin