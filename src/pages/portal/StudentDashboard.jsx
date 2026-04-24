import { useEffect, useState } from 'react'
import { useAuth } from '@context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {
  LogOut,
  User,
  BookOpen,
  ClipboardList,
} from 'lucide-react'

const StudentDashboard = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      navigate('/portal/student-login')
    } else {
      setLoading(false)
    }
  }, [user, navigate])

  const handleLogout = async () => {
    try {
      await signOut()
      toast.success('Logged out successfully')
      navigate('/portal/student-login')
    } catch (error) {
      toast.error('Error logging out')
    }
  }

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <div className="w-6 h-6 border-2 border-green-700 border-t-transparent rounded-full animate-spin" />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header */}
      <div className="bg-white shadow-sm border-b px-6 py-4 flex justify-between items-center">
        <h1 className="text-lg font-semibold text-gray-800">
          Student Dashboard
        </h1>

        <button
          onClick={handleLogout}
          className="flex items-center gap-2 text-sm text-red-600 hover:text-red-800"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>

      {/* Content */}
      <div className="p-6">

        {/* Welcome */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h2 className="text-xl font-bold text-gray-800">
            Welcome back 👋
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            {user?.email}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-green-700" />
            <div>
              <p className="text-sm text-gray-500">Courses</p>
              <h3 className="text-lg font-bold">5</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <ClipboardList className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Results</p>
              <h3 className="text-lg font-bold">12</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <User className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-500">Profile</p>
              <h3 className="text-lg font-bold">Complete</h3>
            </div>
          </div>

        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">
            Recent Activity
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>✅ Logged in successfully</li>
            <li>📘 Viewed Mathematics results</li>
            <li>📝 Updated profile</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default StudentDashboard