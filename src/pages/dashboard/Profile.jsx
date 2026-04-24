import { useState } from 'react'
import { useAuth } from '@context/AuthContext'
import { User, Mail, Shield, Edit3, Save } from 'lucide-react'

const Profile = () => {
  const { user } = useAuth()

  const [isEditing, setIsEditing] = useState(false)

  const [formData, setFormData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    role: user?.role || '',
    phone: user?.phone || '',
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSave = () => {
    // TODO: connect to backend API later
    console.log('Saving profile:', formData)
    setIsEditing(false)
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800">My Profile</h1>

        <button
          onClick={() => (isEditing ? handleSave() : setIsEditing(true))}
          className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition
            ${isEditing ? 'bg-green-600 text-white hover:bg-green-700' : 'bg-gray-200 hover:bg-gray-300 text-gray-700'}
          `}
        >
          {isEditing ? <Save size={16} /> : <Edit3 size={16} />}
          {isEditing ? 'Save Changes' : 'Edit Profile'}
        </button>
      </div>

      {/* Profile Card */}
      <div className="bg-white shadow rounded-xl p-6 grid md:grid-cols-2 gap-6">

        {/* Left Side */}
        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <User className="text-green-700" />
            <div>
              <p className="text-sm text-gray-500">Full Name</p>

              {isEditing ? (
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded w-full"
                />
              ) : (
                <p className="font-medium text-gray-800">{formData.name}</p>
              )}
            </div>
          </div>

          <div className="flex items-center gap-3">
            <Mail className="text-green-700" />
            <div>
              <p className="text-sm text-gray-500">Email</p>

              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded w-full"
                />
              ) : (
                <p className="font-medium text-gray-800">{formData.email}</p>
              )}
            </div>
          </div>

        </div>

        {/* Right Side */}
        <div className="space-y-4">

          <div className="flex items-center gap-3">
            <Shield className="text-green-700" />
            <div>
              <p className="text-sm text-gray-500">Role</p>
              <p className="font-medium text-gray-800 capitalize">
                {formData.role}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <User className="text-green-700" />
            <div>
              <p className="text-sm text-gray-500">Phone</p>

              {isEditing ? (
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border px-3 py-2 rounded w-full"
                />
              ) : (
                <p className="font-medium text-gray-800">
                  {formData.phone || 'Not set'}
                </p>
              )}
            </div>
          </div>

        </div>
      </div>

    </div>
  )
}

export default Profile