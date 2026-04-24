import { useState } from 'react'
import { Settings as SettingsIcon, Save, School, Bell, Lock } from 'lucide-react'

const Settings = () => {
  const [settings, setSettings] = useState({
    schoolName: 'Cluster of Treasure School',
    email: 'admin@school.com',
    phone: '',
    address: '',
    session: '2025/2026',
    term: 'First Term',
    enableNotifications: true,
    allowRegistrations: true,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target

    setSettings({
      ...settings,
      [name]: type === 'checkbox' ? checked : value,
    })
  }

  const handleSave = () => {
    // TODO: connect backend API
    console.log('Saving settings:', settings)
    alert('Settings saved successfully!')
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
          <SettingsIcon /> System Settings
        </h1>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-green-600 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-700"
        >
          <Save size={16} />
          Save Changes
        </button>
      </div>

      {/* Settings Grid */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* School Info */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="font-semibold text-gray-700 flex items-center gap-2">
            <School size={18} /> School Information
          </h2>

          <input
            name="schoolName"
            value={settings.schoolName}
            onChange={handleChange}
            placeholder="School Name"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="email"
            value={settings.email}
            onChange={handleChange}
            placeholder="School Email"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="phone"
            value={settings.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full border px-3 py-2 rounded"
          />

          <input
            name="address"
            value={settings.address}
            onChange={handleChange}
            placeholder="School Address"
            className="w-full border px-3 py-2 rounded"
          />
        </div>

        {/* Academic Info */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4">
          <h2 className="font-semibold text-gray-700 flex items-center gap-2">
            <Lock size={18} /> Academic Settings
          </h2>

          <input
            name="session"
            value={settings.session}
            onChange={handleChange}
            placeholder="Academic Session"
            className="w-full border px-3 py-2 rounded"
          />

          <select
            name="term"
            value={settings.term}
            onChange={handleChange}
            className="w-full border px-3 py-2 rounded"
          >
            <option>First Term</option>
            <option>Second Term</option>
            <option>Third Term</option>
          </select>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Allow Registrations</span>
            <input
              type="checkbox"
              name="allowRegistrations"
              checked={settings.allowRegistrations}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* System Preferences */}
        <div className="bg-white p-6 rounded-xl shadow space-y-4 md:col-span-2">
          <h2 className="font-semibold text-gray-700 flex items-center gap-2">
            <Bell size={18} /> System Preferences
          </h2>

          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-600">Enable Notifications</span>
            <input
              type="checkbox"
              name="enableNotifications"
              checked={settings.enableNotifications}
              onChange={handleChange}
            />
          </div>
        </div>

      </div>
    </div>
  )
}

export default Settings