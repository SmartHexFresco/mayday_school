import { Menu, Bell, User, LogOut } from 'lucide-react'
import { useAuth } from '@context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'

const Header = ({ onMenuClick }) => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    try {
      await signOut()
      toast.success('Logged out successfully')
      navigate('/portal/student-login')
    } catch (error) {
      toast.error('Logout failed')
    }
  }

  return (
    <header className="flex items-center justify-between bg-white border-b px-4 py-3">

      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Mobile menu button */}
        <button
          onClick={onMenuClick}
          className="lg:hidden text-gray-600 hover:text-black"
        >
          <Menu />
        </button>

        <h1 className="text-sm font-semibold text-gray-700">
          Welcome back, {user?.name || 'Admin'}
        </h1>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-4">

        {/* Notifications (placeholder) */}
        <button className="relative text-gray-600 hover:text-black">
          <Bell />
          <span className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User info */}
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-green-700 flex items-center justify-center text-white text-sm font-bold">
            {user?.name ? user.name[0].toUpperCase() : 'A'}
          </div>

          <div className="hidden sm:block">
            <p className="text-sm font-medium text-gray-700">
              {user?.name || 'Admin'}
            </p>
            <p className="text-xs text-gray-400">
              {user?.role || 'admin'}
            </p>
          </div>
        </div>

        {/* Logout */}
        <button
          onClick={handleLogout}
          className="flex items-center gap-1 text-sm text-red-500 hover:text-red-600"
        >
          <LogOut size={16} />
        </button>
      </div>

    </header>
  )
}

export default Header