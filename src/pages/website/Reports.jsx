import { useState, useEffect } from 'react'
import { supabase } from '@lib/supabaseClient'
import { Star, Quote } from 'lucide-react'

const roles = ['All', 'Management', 'Parent', 'Student']

const ReportCard = ({ item }) => {
  const roleColors = {
    Management: 'bg-green-100 text-green-700',
    Parent: 'bg-blue-100 text-blue-700',
    Student: 'bg-yellow-100 text-yellow-700',
  }

  return (
    <div className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md hover:border-green-200 transition-all duration-300 flex flex-col h-full">
      <Quote className="w-8 h-8 text-yellow-400 mb-4 shrink-0" />
      <div className="flex items-center gap-1 mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`w-4 h-4 ${
              i < (item.rating || 5)
                ? 'text-yellow-500 fill-yellow-500'
                : 'text-gray-200 fill-gray-200'
            }`}
          />
        ))}
      </div>
      <p className="text-gray-600 text-sm leading-relaxed flex-1 mb-6">
        "{item.quote}"
      </p>
      <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
        {item.photo_url ? (
          <img
            src={item.photo_url}
            alt={item.full_name}
            className="w-11 h-11 rounded-full object-cover shrink-0"
          />
        ) : (
          <div className="w-11 h-11 bg-blue-800 rounded-full flex items-center justify-center text-white font-bold text-sm shrink-0">
            {item.full_name?.charAt(0).toUpperCase()}
          </div>
        )}
        <div>
          <p className="text-gray-900 font-semibold text-sm">{item.full_name}</p>
          <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            roleColors[item.role] || 'bg-gray-100 text-gray-600'
          }`}>
            {item.role}
          </span>
        </div>
      </div>
    </div>
  )
}

const Reports = () => {
  const [testimonials, setTestimonials] = useState([])
  const [filtered, setFiltered] = useState([])
  const [activeRole, setActiveRole] = useState('All')
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_published', true)
        .order('sort_order', { ascending: true })

      if (!error && data) {
        setTestimonials(data)
        setFiltered(data)
      }
      setLoading(false)
    }

    fetchTestimonials()
  }, [])

  useEffect(() => {
    if (activeRole === 'All') {
      setFiltered(testimonials)
    } else {
      setFiltered(testimonials.filter((t) => t.role === activeRole))
    }
  }, [activeRole, testimonials])

  return (
    <div className="pt-26">
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Voices & Testimonies
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Special Reports
          </h1>
          <p className="text-gray-300 text-lg max-w-2xl">
            Hear directly from our management, parents, and students.
          </p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-wrap gap-3">
          {roles.map((role) => (
            <button
              key={role}
              onClick={() => setActiveRole(role)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeRole === role
                  ? 'bg-blue-800 text-white'
                  : 'bg-gray-100 text-gray-600 hover:bg-green-50 hover:text-blue-800'
              }`}
            >
              {role}
            </button>
          ))}
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        {loading ? (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-20 bg-gray-50 rounded-2xl">
            <Quote className="w-12 h-12 text-gray-300 mx-auto mb-4" />
            <p className="text-gray-500 text-sm">No testimonials yet.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((item) => (
              <ReportCard key={item.id} item={item} />
            ))}
          </div>
        )}
      </section>
    </div>
  )
}

export default Reports