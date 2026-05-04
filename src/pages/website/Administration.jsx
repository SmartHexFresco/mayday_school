import { Mail, Phone, Award } from 'lucide-react'

// Import your leadership images
import directorImg from '@assets/images/staff/leadership/director.jpg'
import headTeacherImg from '@assets/images/staff/leadership/headteacher.jpg'
import deputyHeadImg from '@assets/images/staff/leadership/deputyhead.jpg'

// ── Leadership Staff Data ──
const leadershipData = [
  {
    id: 1,
    full_name: 'Honourable Mr. Chiude Romanus',
    role: 'Director',
    qualification: 'LL.B, BL, MBA',
    bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence.',
    category: 'leadership',
    image: directorImg
  },
  {
    id: 2,
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering a culture of academic distinction.',
    category: 'leadership',
    image: headTeacherImg
  },
  {
    id: 3,
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
    category: 'leadership',
    image: deputyHeadImg
  }
]

// ── Staff Card Component - Clean Style ──
const StaffCard = ({ member }) => {
  const { full_name, role, qualification, bio, image } = member

  return (
    <div className="bg-white rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
      
      {/* Image - Circle Style Instead of Square */}
      <div className="pt-8 px-8">
        <div className="w-40 h-40 mx-auto rounded-full overflow-hidden bg-gray-100 shadow-md">
          {image ? (
            <img
              src={image}
              alt={full_name}
              className="w-full h-full object-cover"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
              <span className="text-white text-5xl font-bold">
                {full_name?.charAt(0).toUpperCase()}
              </span>
            </div>
          )}
        </div>
      </div>

      {/* Content */}
      <div className="text-center p-6">
        <h3 className="text-xl font-bold text-gray-800 mb-1">
          {full_name}
        </h3>
        
        <p className="text-yellow-600 font-semibold text-sm mb-3">
          {role}
        </p>
        
        <p className="text-gray-500 text-xs mb-4">
          {qualification}
        </p>
        
        <p className="text-gray-600 text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </div>
  )
}

// ── Main Component ──
const Administration = () => {
  return (
    <div className="pt-26 bg-gray-50">
      
      {/* Page Header */}
      <section className="bg-blue-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="text-yellow-400 text-sm font-semibold uppercase tracking-widest">
            Our Team
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold mt-3 mb-4">
            Administration
          </h1>
          <p className="text-gray-200 text-lg max-w-2xl mx-auto">
            Meet the dedicated and passionate team of professionals behind
            the success of the school.
          </p>
        </div>
      </section>

      {/* Leadership Section */}
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {leadershipData.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Administration