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

// ── Upgraded Professional Staff Card ──
const StaffCard = ({ member }) => {
  const { full_name, role, qualification, bio, image } = member

  return (
    <div className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-2">
      
      {/* Image Container - Professional Portrait Style */}
      <div className="relative h-96 overflow-hidden bg-gray-200">
        {image ? (
          <img
            src={image}
            alt={full_name}
            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-slate-800">
            <span className="text-white/20 text-8xl font-bold">{full_name?.charAt(0)}</span>
          </div>
        )}
        
        {/* Subtle Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60" />
        
        {/* Role Badge Overlay */}
        <div className="absolute bottom-4 left-4 bg-yellow-500 text-slate-900 px-3 py-1 rounded text-xs font-bold uppercase tracking-widest">
          {role}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8">
        <div className="mb-4">
          <h3 className="text-2xl font-serif font-bold text-slate-900 mb-1 leading-tight">
            {full_name}
          </h3>
          <p className="text-yellow-700 text-sm font-medium italic">
            {qualification}
          </p>
        </div>
        
        <div className="w-12 h-1 bg-yellow-500 mb-4 transition-all duration-500 group-hover:w-full" />
        
        <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-500">
          {bio}
        </p>
        
        {/* Contact/Action Icons */}
        <div className="mt-6 pt-6 border-t border-gray-100 flex gap-4">
           <button className="text-slate-400 hover:text-yellow-600 transition-colors">
              <Mail size={18} />
           </button>
           <button className="text-slate-400 hover:text-yellow-600 transition-colors">
              <Phone size={18} />
           </button>
           <button className="text-slate-400 hover:text-yellow-600 transition-colors">
              <Award size={18} />
           </button>
        </div>
      </div>
    </div>
  )
}

const Administration = () => {
  return (
    <div className="pt-20 bg-white">
      
      {/* Executive Page Header */}
      <section className="relative bg-slate-900 text-white py-24 overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-yellow-500/10 skew-x-12 transform translate-x-20" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="inline-block px-4 py-1 border border-yellow-500/30 rounded-full text-yellow-500 text-xs font-bold uppercase tracking-[0.2em] mb-6">
              Executive Leadership
            </span>
            <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
              Our <span className="text-yellow-500">Administration</span>
            </h1>
            <p className="text-slate-400 text-lg leading-relaxed border-l-2 border-yellow-500 pl-6">
              Guiding MayDay International with decades of combined experience 
              and a shared vision for global educational standards.
            </p>
          </div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {leadershipData.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </div>
      </section>
    </div>
  )
}

export default Administration
