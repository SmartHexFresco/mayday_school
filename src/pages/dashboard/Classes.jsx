import { useState } from 'react'
import { Plus, Edit, Trash } from 'lucide-react'

const Classes = () => {
  const [classes, setClasses] = useState([
    { id: 1, name: 'JSS 1', arm: 'A' },
    { id: 2, name: 'JSS 2', arm: 'B' },
    { id: 3, name: 'SS 1', arm: 'A' },
  ])

  const [showModal, setShowModal] = useState(false)
  const [newClass, setNewClass] = useState({ name: '', arm: '' })

  // Add class
  const handleAddClass = (e) => {
    e.preventDefault()

    const newEntry = {
      id: Date.now(),
      ...newClass,
    }

    setClasses([...classes, newEntry])
    setNewClass({ name: '', arm: '' })
    setShowModal(false)
  }

  // Delete class
  const handleDelete = (id) => {
    setClasses(classes.filter((c) => c.id !== id))
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Classes
          </h1>
          <p className="text-sm text-gray-500">
            Manage school classes and arms
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800"
        >
          <Plus size={16} />
          Add Class
        </button>
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl overflow-hidden">
        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3">Class</th>
              <th className="p-3">Arm</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {classes.map((c) => (
              <tr key={c.id} className="border-t">
                <td className="p-3 font-medium">{c.name}</td>
                <td className="p-3">{c.arm}</td>
                <td className="p-3 flex gap-3">
                  
                  <button className="text-blue-600 hover:text-blue-800">
                    <Edit size={16} />
                  </button>

                  <button
                    onClick={() => handleDelete(c.id)}
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash size={16} />
                  </button>

                </td>
              </tr>
            ))}
          </tbody>

        </table>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl w-full max-w-md">

            <h2 className="text-lg font-semibold mb-4">
              Add New Class
            </h2>

            <form onSubmit={handleAddClass} className="space-y-4">

              <input
                type="text"
                placeholder="Class Name (e.g. JSS 1)"
                value={newClass.name}
                onChange={(e) =>
                  setNewClass({ ...newClass, name: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <input
                type="text"
                placeholder="Arm (e.g. A, B, C)"
                value={newClass.arm}
                onChange={(e) =>
                  setNewClass({ ...newClass, arm: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <div className="flex justify-end gap-2">
                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 text-sm border rounded-lg"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 text-sm bg-green-700 text-white rounded-lg hover:bg-green-800"
                >
                  Save
                </button>
              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  )
}

export default Classes