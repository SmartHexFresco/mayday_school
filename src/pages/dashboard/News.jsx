import { useState } from 'react'
import { Plus, Trash, Search, Megaphone } from 'lucide-react'

const News = () => {
  const [news, setNews] = useState([
    {
      id: 1,
      title: 'School Resumption Date Announced',
      content: 'All students are to resume on 5th February.',
      date: '2026-01-10',
    },
    {
      id: 2,
      title: 'Mid-Term Break Notice',
      content: 'Mid-term break starts next week Friday.',
      date: '2026-01-15',
    },
     
  ])

  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)

  const [newNews, setNewNews] = useState({
    title: '',
    content: '',
    date: '',
  })

  // Add news
  const handleAddNews = (e) => {
    e.preventDefault()

    const item = {
      id: Date.now(),
      ...newNews,
    }

    setNews([item, ...news])
    setNewNews({ title: '', content: '', date: '' })
    setShowModal(false)
  }

  // Delete news
  const handleDelete = (id) => {
    setNews(news.filter((n) => n.id !== id))
  }

  // Search filter
  const filteredNews = news.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="space-y-6">

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">

        <div>
          <h1 className="text-2xl font-bold text-gray-800">
            News & Announcements
          </h1>
          <p className="text-sm text-gray-500">
            Publish school updates and announcements
          </p>
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="flex items-center gap-2 bg-green-700 text-white px-4 py-2 rounded-lg text-sm hover:bg-green-800"
        >
          <Plus size={16} />
          Add News
        </button>

      </div>

      {/* Search */}
      <div className="relative">
        <Search className="absolute left-3 top-2.5 text-gray-400 w-4 h-4" />
        <input
          type="text"
          placeholder="Search news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full border pl-10 pr-3 py-2 rounded-lg text-sm"
        />
      </div>

      {/* News List */}
      <div className="grid gap-4">

        {filteredNews.map((n) => (
          <div
            key={n.id}
            className="bg-white border rounded-xl p-4 shadow-sm hover:shadow-md transition"
          >

            <div className="flex items-start justify-between">

              <div className="flex items-center gap-2">
                <Megaphone className="text-green-700 w-4 h-4" />
                <h2 className="font-semibold text-gray-800">
                  {n.title}
                </h2>
              </div>

              <button
                onClick={() => handleDelete(n.id)}
                className="text-red-600 hover:text-red-800"
              >
                <Trash size={16} />
              </button>

            </div>

            <p className="text-sm text-gray-600 mt-2">
              {n.content}
            </p>

            <p className="text-xs text-gray-400 mt-3">
              Posted on: {n.date}
            </p>

          </div>
        ))}

      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">

          <div className="bg-white p-6 rounded-xl w-full max-w-md">

            <h2 className="text-lg font-semibold mb-4">
              Add News
            </h2>

            <form onSubmit={handleAddNews} className="space-y-4">

              <input
                type="text"
                placeholder="News Title"
                value={newNews.title}
                onChange={(e) =>
                  setNewNews({ ...newNews, title: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                required
              />

              <textarea
                placeholder="News Content"
                value={newNews.content}
                onChange={(e) =>
                  setNewNews({ ...newNews, content: e.target.value })
                }
                className="w-full border p-2 rounded-lg text-sm"
                rows="4"
                required
              />

              <input
                type="date"
                value={newNews.date}
                onChange={(e) =>
                  setNewNews({ ...newNews, date: e.target.value })
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
                  Publish
                </button>

              </div>

            </form>

          </div>

        </div>
      )}

    </div>
  )
}

export default News