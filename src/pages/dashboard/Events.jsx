import { useState } from 'react'
import { Plus, Trash, Search, Calendar } from 'lucide-react'

const Events = () => {
  const [events, setEvents] = useState([
    {
      id: 1,
      title: 'Mid-Term Examination',
      date: '2026-02-10',
      type: 'Exam',
    },
    {
      id: 2,
      title: 'PTA Meeting',
      date: '2026-01-25',
      type: 'Meeting',
    },
    {
      id: 3,
      title: 'Sports Day',
      date: '2026-03-05',
      type: 'Sport',
    },
  ])

  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const [newEvent, setNewEvent] = useState({
    title: '',
    date: '',
    type: '',
  })

  // Add event
  const handleAddEvent = (e) => {
    e.preventDefault()

    const event = {
      id: Date.now(),
      ...newEvent,
    }

    setEvents([...events, event])
    setNewEvent({ title: '', date: '', type: '' })
    setShowModal(false)
  }

  // Delete event
  const handleDelete = (id) => {
    setEvents(events.filter((e) => e.id !== id))
  }

  // Search filter
  const filteredEvents = events.filter((e) =>
    e.title.toLowerCase().includes(search.toLowerCase())
  )

  // Type badge color
  const getTypeColor = (type) => {
    switch (type) {
      case 'Exam':
        return 'bg-red-100 text-red-700'
      case 'Meeting':
        return 'bg-blue-100 text-blue-700'
      case 'Sport':
        return 'bg-green-100 text-green-700'
      default:
        return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            Events
          </h1>
          <p className="text-sm text-gray-500">
            Manage school events and activities
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800"
        >
          <Plus size={16} />
          Add Event
        </button>

      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search events..."
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
              <th className="p-3">Event</th>
              <th className="p-3">Date</th>
              <th className="p-3">Type</th>
              <th className="p-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {filteredEvents.map((e) => (
              <tr key={e.id} className="border-t">

                <td className="p-3 font-medium flex items-center gap-2">
                  <Calendar size={14} />
                  {e.title}
                </td>

                <td className="p-3">{e.date}</td>

                <td className="p-3">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${getTypeColor(
                      e.type
                    )}`}
                  >
                    {e.type}
                  </span>
                </td>

                <td className="p-3">
                  <button
                    onClick={() => handleDelete(e.id)}
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
              Add Event
            </h2>

            <form onSubmit={handleAddEvent} className="space-y-4">

              <input
                type="text"
                placeholder="Event Title"
                value={newEvent.title}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, title: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <input
                type="date"
                value={newEvent.date}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, date: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <select
                value={newEvent.type}
                onChange={(e) =>
                  setNewEvent({ ...newEvent, type: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              >
                <option value="">Select Type</option>
                <option value="Exam">Exam</option>
                <option value="Meeting">Meeting</option>
                <option value="Sport">Sport</option>
                <option value="Holiday">Holiday</option>
              </select>

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

export default Events