import { useState } from 'react'
import { Plus, Trash, Search } from 'lucide-react'

const Subjects = () => {
  const [subjects, setSubjects] = useState([
    { id: 1, name: 'Mathematics', code: 'MTH101', teacher: 'Mr. James' },
    { id: 2, name: 'English Language', code: 'ENG102', teacher: 'Mrs. Linda' },
    { id: 3, name: 'Basic Science', code: 'SCI103', teacher: 'Mr. David' },
  ])

  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const [newSubject, setNewSubject] = useState({
    name: '',
    code: '',
    teacher: '',
  })

  // Add subject
  const handleAddSubject = (e) => {
    e.preventDefault()

    const subject = {
      id: Date.now(),
      ...newSubject,
    }

    setSubjects([...subjects, subject])
    setNewSubject({ name: '', code: '', teacher: '' })
    setShowModal(false)
  }

  // Delete subject
  const handleDelete = (id) => {
    setSubjects(subjects.filter((s) => s.id !== id))
  }

  // Search filter
  const filteredSubjects = subjects.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Subjects
          </h1>
          <p className="text-sm text-gray-500">
            Manage school subjects and assigned teachers
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800"
        >
          <Plus size={16} />
          Add Subject
        </button>

      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search subjects..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border pl-10 pr-3 py-2 rounded-lg text-sm"
        />
      </div>

      {/* Table */}
      <div className="bg-white border rounded-xl overflow-hidden">

        <table className="w-full text-sm">

          <thead className="bg-gray-50 text-left">
            <tr>
              <th className="p-3">Subject</th>
              <th className="p-3">Code</th>
              <th className="p-3">Teacher</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredSubjects.map((s) => (
              <tr key={s.id} className="border-t">

                <td className="p-3 font-medium">{s.name}</td>
                <td className="p-3">{s.code}</td>
                <td className="p-3">{s.teacher}</td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(s.id)}
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
              Add Subject
            </h2>

            <form onSubmit={handleAddSubject} className="space-y-4">

              <input
                type="text"
                placeholder="Subject Name"
                value={newSubject.name}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, name: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <input
                type="text"
                placeholder="Subject Code (e.g. MTH101)"
                value={newSubject.code}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, code: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <input
                type="text"
                placeholder="Assigned Teacher"
                value={newSubject.teacher}
                onChange={(e) =>
                  setNewSubject({ ...newSubject, teacher: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <div className="flex justify-end gap-2">

                <button
                  type="button"
                  onClick={() => setShowModal(false)}
                  className="px-4 py-2 border rounded-lg text-sm"
                >
                  Cancel
                </button>

                <button
                  type="submit"
                  className="px-4 py-2 bg-green-700 text-white rounded-lg text-sm hover:bg-green-800"
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

export default Subjects