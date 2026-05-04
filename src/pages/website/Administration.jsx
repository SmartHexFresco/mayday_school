import { Mail, Phone } from 'lucide-react'

// Import images (only for leadership that exist)
import directorImg from '@assets/images/staff/leadership/director.jpg'
import headTeacherImg from '@assets/images/staff/leadership/headteacher.jpg'
import deputyHeadImg from '@assets/images/staff/leadership/deputyhead.jpg'

// ── Leadership Staff Data Only ──
const leadershipData = [
  {
    id: 1,
    full_name: 'Honourable Mr. Chiude Romanus',
    role: 'Director',
    qualification: 'LL.B, BL, MBA',
    bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence.',
    image: directorImg,
    category: 'leadership'
  },
  {
    id: 2,
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering a culture of academic distinction.',
    image: headTeacherImg,
    category: 'leadership'
  },
  {
    id: 3,
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
    image: deputyHeadImg,
    category: 'leadership'
  }
]

// ── Staff Card Component ──────────────────────────────────
const StaffCard = ({ member }) => {
  const { full_name, role, qualification, bio, image } = member

  return (
    <div className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-md hover:border-green-200 transition-all duration-300 group">
      {/* Photo */}
      <div className="h-52 bg-green-50 overflow-hidden">
        {image ? (
          <img
            src={image}
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
        <p className="text-yellow-600 text-sm font-medium mb-1">{role}</p>
        {qualification && (
          <p className="text-gray-400 text-xs mb-3">{qualification}</p>
        )}
        {bio && (
          <p className="text-gray-500 text-sm leading-relaxed line-clamp-3">{bio}</p>
        )}
      </div>
    </div>
  )
}

// ── Main Component ────────────────────────────────────────
const Administration = () => {
  return (
    <div className="pt-26">
      {/* Page Header */}
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
            the success of the school.
          </p>
        </div>
      </section>

      {/* Leadership Section Only */}
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

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {leadershipData.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Administration