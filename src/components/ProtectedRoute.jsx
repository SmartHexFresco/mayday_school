import { Navigate, Outlet, useLocation } from 'react-router-dom'
import { useAuth } from '@context/AuthContext'

const ProtectedRoute = ({ allowedRoles }) => {
  const { user, profile, loading } = useAuth()
  const location = useLocation()

  // Still loading auth state — show nothing yet
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-green-700 border-t-transparent rounded-full animate-spin" />
          <p className="text-sm text-gray-500 font-medium tracking-wide">
            Verifying access...
          </p>
        </div>
      </div>
    )
  }

  // Not logged in — redirect to correct login page
  if (!user || !profile) {
    const loginRoute =
      allowedRoles?.includes('admin')
        ? '/portal/staff-login'
        : allowedRoles?.includes('staff')
        ? '/portal/staff-login'
        : '/portal/student-login'

    return (
      <Navigate
        to={loginRoute}
        state={{ from: location }}
        replace
      />
    )
  }

  // Logged in but wrong role — redirect to their correct dashboard
  if (allowedRoles && !allowedRoles.includes(profile.role)) {
    const roleRedirects = {
      admin: '/admin',
      staff: '/portal/staff-dashboard',
      student: '/portal/student-dashboard',
    }

    return (
      <Navigate
        to={roleRedirects[profile.role] ?? '/'}
        replace
      />
    )
  }

  // Authorized — render the child route
  return <Outlet />
}

export default ProtectedRoute