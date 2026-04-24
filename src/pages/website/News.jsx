



import { useState, useEffect } from 'react'
import { Plus, Trash, Search, Megaphone, Calendar, X, AlertCircle, Info, Star } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

const News = () => {
  // Enhanced News State with Categories
  const [news, setNews] = useState([
    {
      id: 1,
      title: '2026 Resumption Protocol',
      content: 'All students must present their updated medical clearance upon resumption on February 5th.',
      date: '2026-04-10',
      category: 'Urgent',
    },
    {
      id: 2,
      title: 'Annual Inter-House Sports',
      content: 'Join us for a day of athletic excellence and house spirit! Parents are cordially invited.',
      date: '2026-04-15',
      category: 'Event',
    },
  ])

  const [search, setSearch] = useState('')
  const [showModal, setShowModal] = useState(false)
  const [newNews, setNewNews] = useState({ title: '', content: '', date: '', category: 'General' })

  // Categories with matching colors
  const categoryStyles = {
    Urgent: 'bg-red-100 text-red-700 border-red-200',
    Academic: 'bg-blue-100 text-blue-700 border-blue-200',
    Event: 'bg-purple-100 text-purple-700 border-purple-200',
    General: 'bg-gray-100 text-gray-700 border-gray-200',
  }

  const handleAddNews = (e) => {
    e.preventDefault()
    const item = { id: Date.now(), ...newNews }
    setNews([item, ...news])
    setNewNews({ title: '', content: '', date: '', category: 'General' })
    setShowModal(false)
  }

  const handleDelete = (id) => {
    setNews(news.filter((n) => n.id !== id))
  }

  const filteredNews = news.filter((n) =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.category.toLowerCase().includes(search.toLowerCase())
  )

  const inputStyle = "w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-transparent transition-all"

  return (
    // Added pt-32 to clear the fixed navbar
    <div className="pt-32 pb-20 bg-gray-50 min-h-screen">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 space-y-8">

        {/* Dynamic Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
              <Megaphone className="text-blue-700" size={24} />
              News Feed
            </h1>
            <p className="text-gray-500 text-sm mt-1">
              Currently showing <span className="font-bold text-blue-700">{filteredNews.length}</span> active updates.
            </p>
          </div>

          <button
            onClick={() => setShowModal(true)}
            className="flex items-center justify-center gap-2 bg-blue-700 text-white px-6 py-2.5 rounded-xl font-semibold hover:bg-blue-800 transition-all shadow-md active:scale-95"
          >
            <Plus size={18} />
            Add Announcement
          </button>
        </div>

        {/* Search & Filter Bar */}
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search by title or category (Urgent, Event...)"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-blue-600 outline-none transition-all"
          />
        </div>

        {/* News Items Grid */}
        <div className="grid gap-6">
          <AnimatePresence mode='popLayout'>
            {filteredNews.map((n) => (
              <motion.div
                key={n.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-all group"
              >
                <div className="flex items-start justify-between">
                  <div className="space-y-1">
                    <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border ${categoryStyles[n.category]}`}>
                      {n.category}
                    </span>
                    <h2 className="font-bold text-xl text-gray-800 pt-2 group-hover:text-blue-700 transition-colors">
                      {n.title}
                    </h2>
                  </div>
                  <button onClick={() => handleDelete(n.id)} className="p-2 text-gray-300 hover:text-red-600 rounded-lg transition-colors">
                    <Trash size={18} />
                  </button>
                </div>

                <p className="text-gray-600 mt-4 leading-relaxed">
                  {n.content}
                </p>

                <div className="flex items-center gap-4 mt-6 pt-4 border-t border-gray-50">
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs font-medium uppercase">
                    <Calendar size={14} />
                    {new Date(n.date).toLocaleDateString('en-US', { day: 'numeric', month: 'short' })}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Empty State */}
          {filteredNews.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-24 bg-white rounded-3xl border-2 border-dashed border-gray-200">
              <Info className="mx-auto text-gray-300 mb-4" size={48} />
              <h3 className="text-xl font-bold text-gray-800">No news to show</h3>
              <p className="text-gray-500 mt-1 px-4">There are no announcements matching your search criteria at this time.</p>
            </motion.div>
          )}
        </div>

        {/* Modal (Add News) */}
        <AnimatePresence>
          {showModal && (
            <div className="fixed inset-0 z-60 flex items-center justify-center p-4">
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setShowModal(false)} className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm" />
              <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} exit={{ y: 50, opacity: 0 }} className="bg-white rounded-3xl w-full max-w-lg shadow-2xl relative z-10 p-8">
                <div className="flex justify-between items-center mb-6">
                  <h2 className="text-2xl font-bold text-gray-800">Add New News</h2>
                  <button onClick={() => setShowModal(false)} className="text-gray-400 hover:text-gray-600"><X size={24} /></button>
                </div>

                <form onSubmit={handleAddNews} className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="col-span-2">
                      <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">News Title</label>
                      <input type="text" className={inputStyle} value={newNews.title} onChange={(e) => setNewNews({ ...newNews, title: e.target.value })} required />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Category</label>
                      <select className={inputStyle} value={newNews.category} onChange={(e) => setNewNews({ ...newNews, category: e.target.value })}>
                        <option>General</option>
                        <option>Urgent</option>
                        <option>Academic</option>
                        <option>Event</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Date</label>
                      <input type="date" className={inputStyle} value={newNews.date} onChange={(e) => setNewNews({ ...newNews, date: e.target.value })} required />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-1 ml-1">Content</label>
                    <textarea rows="4" className={`${inputStyle} resize-none`} value={newNews.content} onChange={(e) => setNewNews({ ...newNews, content: e.target.value })} required />
                  </div>
                  <button type="submit" className="w-full bg-blue-700 text-white py-4 rounded-2xl font-bold text-lg hover:bg-blue-800 transition-all shadow-xl">
                    Publish Announcement
                  </button>
                </form>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </div>
    </div>
  )
}

export default News
