import { useState } from 'react'
import { Plus, Trash, Search } from 'lucide-react'

const Results = () => {
  const [results, setResults] = useState([
    {
      id: 1,
      student: 'John Doe',
      class: 'JSS 1A',
      subject: 'Mathematics',
      score: 75,
    },
    {
      id: 2,
      student: 'Mary Johnson',
      class: 'SS 2B',
      subject: 'English',
      score: 88,
    },
    {
      id: 3,
      student: 'David Peter',
      class: 'JSS 3A',
      subject: 'Science',
      score: 62,
    },
  ])

  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const [newResult, setNewResult] = useState({
    student: '',
    class: '',
    subject: '',
    score: '',
  })

  // Grade calculator
  const getGrade = (score) => {
    if (score >= 70) return 'A'
    if (score >= 60) return 'B'
    if (score >= 50) return 'C'
    if (score >= 45) return 'D'
    if (score >= 40) return 'E'
    return 'F'
  }

  // Add result
  const handleAddResult = (e) => {
    e.preventDefault()

    const result = {
      id: Date.now(),
      ...newResult,
      score: Number(newResult.score),
    }

    setResults([...results, result])
    setNewResult({ student: '', class: '', subject: '', score: '' })
    setShowModal(false)
  }

  // Delete result
  const handleDelete = (id) => {
    setResults(results.filter((r) => r.id !== id))
  }

  // Search filter
  const filteredResults = results.filter((r) =>
    r.student.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Results
          </h1>
          <p className="text-sm text-gray-500">
            Manage students academic performance
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800"
        >
          <Plus size={16} />
          Add Result
        </button>

      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search student..."
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
              <th className="p-3">Student</th>
              <th className="p-3">Class</th>
              <th className="p-3">Subject</th>
              <th className="p-3">Score</th>
              <th className="p-3">Grade</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredResults.map((r) => (
              <tr key={r.id} className="border-t">

                <td className="p-3 font-medium">{r.student}</td>
                <td className="p-3">{r.class}</td>
                <td className="p-3">{r.subject}</td>

                <td className="p-3">{r.score}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      getGrade(r.score) === 'A'
                        ? 'bg-green-100 text-green-700'
                        : getGrade(r.score) === 'B'
                        ? 'bg-blue-100 text-blue-700'
                        : getGrade(r.score) === 'C'
                        ? 'bg-yellow-100 text-yellow-700'
                        : getGrade(r.score) === 'D'
                        ? 'bg-orange-100 text-orange-700'
                        : getGrade(r.score) === 'E'
                        ? 'bg-gray-200 text-gray-700'
                        : 'bg-red-100 text-red-700'
                    }`}
                  >
                    {getGrade(r.score)}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(r.id)}
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
              Add Student Result
            </h2>

            <form onSubmit={handleAddResult} className="space-y-4">

              <input
                type="text"
                placeholder="Student Name"
                value={newResult.student}
                onChange={(e) =>
                  setNewResult({ ...newResult, student: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <input
                type="text"
                placeholder="Class"
                value={newResult.class}
                onChange={(e) =>
                  setNewResult({ ...newResult, class: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <input
                type="text"
                placeholder="Subject"
                value={newResult.subject}
                onChange={(e) =>
                  setNewResult({ ...newResult, subject: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <input
                type="number"
                placeholder="Score (0 - 100)"
                value={newResult.score}
                onChange={(e) =>
                  setNewResult({ ...newResult, score: e.target.value })
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

export default Results