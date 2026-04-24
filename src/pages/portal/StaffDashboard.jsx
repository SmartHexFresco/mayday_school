import { useEffect, useState } from 'react'
import { useAuth } from '@context/AuthContext'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import {
  LogOut,
  Users,
  BookOpen,
  ClipboardCheck,
  PlusCircle,
} from 'lucide-react'

const StaffDashboard = () => {
  const { user, signOut } = useAuth()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)

  useEffect(() => {
    if (!user) {
      navigate('/portal/staff-login')
    } else {
      setLoading(false)
    }
  }, [user, navigate])

  const handleLogout = async () => {
    try {
      await signOut()
      toast.success('Logged out successfully')
      navigate('/portal/staff-login')
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
          Staff Dashboard
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
            Welcome, Staff 👋
          </h2>
          <p className="text-gray-500 mt-1 text-sm">
            {user?.email}
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <Users className="w-8 h-8 text-blue-600" />
            <div>
              <p className="text-sm text-gray-500">Total Students</p>
              <h3 className="text-lg font-bold">320</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <BookOpen className="w-8 h-8 text-blue-700" />
            <div>
              <p className="text-sm text-gray-500">Classes</p>
              <h3 className="text-lg font-bold">12</h3>
            </div>
          </div>

          <div className="bg-white p-5 rounded-xl shadow-sm flex items-center gap-4">
            <ClipboardCheck className="w-8 h-8 text-yellow-600" />
            <div>
              <p className="text-sm text-gray-500">Results Uploaded</p>
              <h3 className="text-lg font-bold">85</h3>
            </div>
          </div>

        </div>

        {/* Quick Actions */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-6">
          <h3 className="text-lg font-semibold mb-4">
            Quick Actions
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

            <button
              onClick={() => navigate('/portal/manage-students')}
              className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50"
            >
              <Users className="w-5 h-5 text-blue-600" />
              Manage Students
            </button>

            <button
              onClick={() => navigate('/portal/upload-results')}
              className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50"
            >
              <PlusCircle className="w-5 h-5 text-blue-700" />
              Upload Results
            </button>

            <button
              onClick={() => navigate('/portal/classes')}
              className="flex items-center gap-3 border p-4 rounded-lg hover:bg-gray-50"
            >
              <BookOpen className="w-5 h-5 text-yellow-600" />
              Manage Classes
            </button>

          </div>
        </div>

        {/* Activity */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h3 className="text-lg font-semibold mb-4">
            Recent Activity
          </h3>

          <ul className="space-y-3 text-sm text-gray-600">
            <li>📊 Uploaded results for SS2</li>
            <li>👨‍🎓 Added new student</li>
            <li>📘 Updated class subjects</li>
          </ul>
        </div>

      </div>
    </div>
  )
}

export default StaffDashboard