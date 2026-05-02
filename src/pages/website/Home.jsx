



import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { supabase } from '@lib/supabaseClient'
import Hero from '@components/website/Hero'
import TestimonialCard from '@components/website/TestimonialCard'
import About from '@pages/website/About'

// ── Why Choose Us Data ────────────────────────────────────
const features = [
  {
    title: 'Academic Excellence',
    description:
      'Our curriculum is designed to challenge and inspire students at every level, from Pre-Nursery to Primary.',
  },
  {
    title: 'Staff',
    description:
      'Our team of qualified and passionate educators are committed to bringing out the best in every child.',
  },
  {
    title: 'Safe Environment',
    description:
      'We provide a secure, nurturing, and inclusive environment where every child feels valued and protected.',
  },
  {
    title: 'Modern Facilities',
    description:
      'From our ICT lab to our well-equipped classrooms, we provide the best tools for 21st century learning.',
  },
  {
    title: 'Holistic Development',
    description:
      'Beyond academics, we nurture creativity, culture, sports, and character through diverse activities.',
  },
  {
    title: 'Parent Partnership',
    description:
      'We believe in strong home-school collaboration to ensure every child reaches their full potential.',
  },
]

const Home = () => {
  const [announcements, setAnnouncements] = useState([])
  const [testimonials, setTestimonials] = useState([])
  const [loadingAnnouncements, setLoadingAnnouncements] = useState(true)
  const [loadingTestimonials, setLoadingTestimonials] = useState(true)

  // ── Fetch Announcements ───────────────────────────────
  useEffect(() => {
    const fetchAnnouncements = async () => {
      const { data, error } = await supabase
        .from('announcements')
        .select('*')
        .eq('is_published', true)
        .order('created_at', { ascending: false })
        .limit(3)

      if (!error) setAnnouncements(data || [])
      setLoadingAnnouncements(false)
    }

    fetchAnnouncements()
  }, [])

  // ── Fetch Testimonials ────────────────────────────────
  useEffect(() => {
    const fetchTestimonials = async () => {
      const { data, error } = await supabase
        .from('testimonials')
        .select('*')
        .eq('is_published', true)
        .eq('is_featured', true)
        .order('sort_order', { ascending: true })
        .limit(3)

      if (!error) setTestimonials(data || [])
      setLoadingTestimonials(false)
    }

    fetchTestimonials()
  }, [])

  return (
    <div>

      {/* ── Hero ─────────────────────────────────────────── */}
      <Hero />

      {/* ── About ─────────────────────────────────────────── */}
      <About />

      {/* ── Why Choose Us ────────────────────────────────── */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Where MayDay Leads, Success Follows
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="bg-white rounded-xl p-6 border border-gray-100 hover:shadow-md hover:border-blue-200 transition-all duration-300"
              >
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-3 h-3 bg-blue-700 rounded-full" />
                </div>
                <h3 className="text-gray-900 font-semibold mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Latest Announcements ─────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex items-center justify-between mb-10">
          <div>
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
              Stay Updated
            </span>
            <h2 className="text-3xl font-bold text-gray-900 mt-2">
              Latest Announcements
            </h2>
          </div>
          <Link
            to="/news"
            className="hidden sm:inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold text-sm transition-colors"
          >
            View All
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {loadingAnnouncements ? (
          <div className="flex justify-center py-10">
            <div className="w-8 h-8 border-4 border-blue-700 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : announcements.length === 0 ? (
          <p className="text-gray-400 text-center py-10">
            No announcements at this time.
          </p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {announcements.map((item) => (
              <div
                key={item.id}
                className="bg-white border border-gray-100 rounded-xl p-6 hover:shadow-md transition-all duration-300"
              >
                <span className="inline-block bg-green-100 text-blue-800 text-xs font-semibold px-3 py-1 rounded-full mb-3">
                  {item.category}
                </span>
                <h3 className="text-gray-900 font-semibold mb-2 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
                  {item.content}
                </p>
              </div>
            ))}
          </div>
        )}
      </section>

      {/* ── Testimonials ─────────────────────────────────── */}
      <section className="bg-blue-700 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-yellow-400 font-semibold text-sm uppercase tracking-widest">
              What People Say
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mt-3">
              Voices from Our Community
            </h2>
          </div>

          {loadingTestimonials ? (
            <div className="flex justify-center py-10">
              <div className="w-8 h-8 border-4 border-yellow-400 border-t-transparent rounded-full animate-spin" />
            </div>
          ) : testimonials.length === 0 ? (
            <p className="text-gray-400 text-center py-10">
              No testimonials yet.
            </p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {testimonials.map((item) => (
                <TestimonialCard key={item.id} testimonial={item} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* ── Admissions CTA ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-blue-600 rounded-2xl px-8 py-14 text-center text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            Ready to Join Our School Family?
          </h2>
          <p className="text-yellow-100 text-lg mb-8 max-w-xl mx-auto">
            Give your child the gift of quality education. Applications
            are open for the new academic session.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/admissions"
              className="inline-flex items-center gap-2 bg-white text-blue-700 hover:bg-gray-100 font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 border-2 border-white/50 hover:bg-white/10 text-white font-semibold px-8 py-3 rounded-md transition-colors duration-200"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

    </div>
  )
}

export default Home