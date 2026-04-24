import { useState, useEffect } from 'react'
import { supabase } from '@lib/supabaseClient'
import { X, Play } from 'lucide-react'

// ── Categories ────────────────────────────────────────────
const categories = [
  'All',
  'Classrooms',
  'Events',
  'ICT Room',
  'School Bus',
  'Playground',
  'General',
]

// ── Lightbox Component ────────────────────────────────────
const Lightbox = ({ item, onClose }) => {
  useEffect(() => {
    const handleKey = (e) => e.key === 'Escape' && onClose()

    // Disable background scroll
    document.body.style.overflow = 'hidden'

    window.addEventListener('keydown', handleKey)

    return () => {
      window.removeEventListener('keydown', handleKey)
      document.body.style.overflow = 'auto'
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <button
        onClick={onClose}
        className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors"
      >
        <X className="w-8 h-8" />
      </button>

      <div
        className="max-w-4xl w-full"
        onClick={(e) => e.stopPropagation()}
      >
        {item.media_type === 'video' ? (
          <video
            src={item.file_url}
            controls
            autoPlay
            className="w-full rounded-xl"
          />
        ) : (
          <img
            src={item.file_url}
            alt={item.title || 'Gallery image'}
            className="w-full rounded-xl object-contain max-h-[80vh]"
          />
        )}

        {item.title && (
          <p className="text-white text-center mt-4 font-medium">
            {item.title}
          </p>
        )}

        {item.description && (
          <p className="text-gray-400 text-center text-sm mt-1">
            {item.description}
          </p>
        )}
      </div>
    </div>
  )
}

// ── Skeleton Card ─────────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-gray-200 rounded-xl animate-pulse aspect-square" />
)

const Gallery = () => {
  const [items, setItems] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedItem, setSelectedItem] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchGallery = async () => {
      const { data, error } = await supabase
        .from('gallery')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true })

      if (!error && data) {
        setItems(data)
        setFiltered(data)
      }

      setLoading(false)
    }

    fetchGallery()
  }, [])

  // Filter by category (safer comparison)
  useEffect(() => {
    if (activeCategory.toLowerCase() === 'all') {
      setFiltered(items)
    } else {
      setFiltered(
        items.filter(
          (item) =>
            item.category?.toLowerCase() === activeCategory.toLowerCase()
        )
      )
    }
  }, [activeCategory, items])

  return (
    <div className="pt-26">

      {/* ── Page Header ──────────────────────────────────── */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Visual Tour
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Gallery
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl">
            A glimpse into life at Clusters of Treasure International School —
            classrooms, events, activities, and special moments.
          </p>
        </div>
      </section>

      {/* ── Filter Tabs ──────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <button
              key={`${cat}-${index}`}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-blue-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>

      {/* ── Gallery Grid ─────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">

        {loading ? (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, i) => (
              <SkeletonCard key={i} />
            ))}
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <X className="w-8 h-8 text-gray-400" />
            </div>
            <p className="text-gray-500 text-sm">
              No media found in this category yet.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map((item) => (
              <div
                key={item.id}
                onClick={() => setSelectedItem(item)}
                className="relative group cursor-pointer rounded-xl overflow-hidden aspect-square bg-gray-100"
              >
                {item.media_type === 'video' ? (
                  <>
                    <img
                      src={item.thumbnail_url || '/video-placeholder.jpg'}
                      alt={item.title || 'Video'}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-12 h-12 bg-white/80 rounded-full flex items-center justify-center">
                        <Play className="w-6 h-6 text-blue-800 ml-1" />
                      </div>
                    </div>
                  </>
                ) : (
                  <img
                    src={item.file_url}
                    alt={item.title || 'Gallery image'}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                )}

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <div>
                    {item.title && (
                      <p className="text-white text-sm font-medium line-clamp-1">
                        {item.title}
                      </p>
                    )}
                    {item.category && (
                      <span className="text-yellow-400 text-xs">
                        {item.category}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Lightbox ─────────────────────────────────────── */}
      {selectedItem && (
        <Lightbox
          item={selectedItem}
          onClose={() => setSelectedItem(null)}
        />
      )}

    </div>
  )
}

export default Gallery