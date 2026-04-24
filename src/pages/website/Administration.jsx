import { useState, useEffect } from 'react'
import { supabase } from '@lib/supabaseClient'
import { Mail, Phone } from 'lucide-react'

// ── Staff Card Component ──────────────────────────────────
const StaffCard = ({ member }) => {
  const { full_name, role, subject, qualification, photo_url, bio } = member

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-green-200 transition-all duration-300 group">

      {/* Photo */}
      <div className="h-52 bg-green-50 overflow-hidden">
        {photo_url ? (
          <img
            src={photo_url}
            alt={full_name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <div className="w-20 h-20 bg-green-800 rounded-full flex items-center justify-center text-white text-2xl font-bold">
              {full_name?.charAt(0).toUpperCase()}
            </div>
          </div>
        )}
      </div>

      {/* Info */}
      <div className="p-5">
        <h3 className="text-gray-900 font-bold text-base mb-0.5">
          {full_name}
        </h3>

        <p className="text-yellow-600 text-sm font-medium mb-1">
          {role}
        </p>

        {subject && (
          <p className="text-green-700 text-xs font-medium mb-2">
            {subject}
          </p>
        )}

        {qualification && (
          <p className="text-gray-400 text-xs mb-3">
            {qualification}
          </p>
        )}

        {bio && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">
            {bio}
          </p>
        )}
      </div>
    </div>
  )
}

// ── Loading Skeleton ──────────────────────────────────────
const SkeletonCard = () => (
  <div className="bg-white border border-gray-100 rounded-xl overflow-hidden animate-pulse">
    <div className="h-52 bg-gray-200" />
    <div className="p-5 space-y-3">
      <div className="h-4 bg-gray-200 rounded w-3/4" />
      <div className="h-3 bg-gray-200 rounded w-1/2" />
      <div className="h-3 bg-gray-200 rounded w-full" />
      <div className="h-3 bg-gray-200 rounded w-5/6" />
    </div>
  </div>
)

const Administration = () => {
  const [academicStaff, setAcademicStaff] = useState([])
  const [nonAcademicStaff, setNonAcademicStaff] = useState([])
  const [leadership, setLeadership] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchStaff = async () => {
      const { data, error } = await supabase
        .from('staff')
        .select('*')
        .eq('is_active', true)
        .order('created_at', { ascending: true })

      if (!error && data) {
        setLeadership(
          data.filter((s) =>
            ['Director', 'Head Teacher', 'Deputy Head Teacher'].includes(s.role)
          )
        )

        setAcademicStaff(
          data.filter(
            (s) =>
              s.is_academic &&
              !['Director', 'Head Teacher', 'Deputy Head Teacher'].includes(
                s.role
              )
          )
        )

        setNonAcademicStaff(data.filter((s) => !s.is_academic))
      }

      setLoading(false)
    }

    fetchStaff()
  }, [])

  return (
    <div className="pt-26">

      {/* ── Page Header ──────────────────────────────────── */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Our Team
          </span>

          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Administration
          </h1>

          <p className="text-gray-300 text-lg max-w-2xl">
            Meet the dedicated and passionate team of professionals behind
            the success of MayDay International School.
          </p>
        </div>
      </section>

      {/* ── Leadership ───────────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
            School Leadership
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Meet Our Leaders
          </h2>

          <p className="text-gray-500 mt-4 text-sm">
            Visionary leaders committed to delivering excellence in education.
          </p>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => <SkeletonCard key={i} />)}
          </div>
        ) : leadership.length === 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            {[
              {
                title: 'The Director',
                description:
                  'Our Director brings decades of educational leadership experience and a passion for excellence.',
              },
              {
                title: 'The Head Teacher',
                description:
                  'Ensures smooth academic operations and student success across all levels.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-blue-50 border border-blue-100 rounded-xl p-8 text-center"
              >
                <div className="w-20 h-20 bg-blue-800 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {item.title.charAt(0)}
                </div>

                <h3 className="text-blue-800 font-bold text-lg mb-3">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {leadership.map((member) => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>

      {/* ── Academic Staff ───────────────────────────────── */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">

        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
            Teaching Team
          </span>

          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
            Academic Staff
          </h2>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
          </div>
        ) : academicStaff.length === 0 ? (
          <div className="text-center py-16 bg-gray-50 rounded-2xl">
            <Mail className="w-8 h-8 text-gray-400 mx-auto mb-3" />
            <p className="text-gray-500 text-sm">
              Academic staff profiles will appear here once added.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {academicStaff.map((member) => (
              <StaffCard key={member.id} member={member} />
            ))}
          </div>
        )}
      </section>

      {/* ── Non-Academic Staff ───────────────────────────── */}
      <section className="bg-gray-50 py-20">

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="text-yellow-600 font-semibold text-sm uppercase tracking-widest">
              Support Team
            </span>

            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mt-3">
              Non-Academic Staff
            </h2>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[1, 2, 3, 4].map((i) => <SkeletonCard key={i} />)}
            </div>
          ) : nonAcademicStaff.length === 0 ? (
            <div className="text-center py-16 bg-white rounded-2xl border border-gray-100">
              <Phone className="w-8 h-8 text-gray-400 mx-auto mb-3" />
              <p className="text-gray-500 text-sm">
                Non-academic staff profiles will appear here once added.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {nonAcademicStaff.map((member) => (
                <StaffCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>

    </div>
  )
}

export default Administration