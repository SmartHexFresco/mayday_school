import { motion } from 'framer-motion'
import { Mail, Phone, Award, X } from 'lucide-react'

// (Keep your existing image imports here)

const leadershipData = [
  {
    id: 1,
    full_name: 'Honourable Mr. Chiude Romanus',
    role: 'Director',
    qualification: 'LL.B, BL, MBA',
    bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence.',
    image: '/director.jpg' // Use your imported variable
  },
  {
    id: 2,
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering distinction.',
    image: '/headteacher.jpg' // Use your imported variable
  },
  {
    id: 3,
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
    image: '/deputyhead.jpg' // Use your imported variable
  }
]

const StaffCard = ({ member }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="group bg-white rounded-3xl overflow-hidden shadow-xl border border-slate-100 flex flex-col h-full"
    >
      {/* Professional Portrait */}
      <div className="relative h-[400px] overflow-hidden">
        <img 
          src={member.image} 
          alt={member.full_name} 
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-transparent to-transparent opacity-80" />
        
        <div className="absolute bottom-6 left-6">
          <span className="bg-yellow-500 text-blue-950 text-[10px] font-black px-3 py-1 rounded mb-2 inline-block uppercase tracking-wider">
            {member.role}
          </span>
          <h3 className="text-white text-2xl font-['Playfair_Display'] font-bold leading-tight">
            {member.full_name}
          </h3>
        </div>
      </div>

      {/* Content */}
      <div className="p-8 flex flex-col flex-grow">
        <p className="text-blue-600 text-xs font-bold mb-4 uppercase tracking-widest">{member.qualification}</p>
        <p className="text-slate-600 text-sm leading-relaxed italic mb-8 flex-grow">"{member.bio}"</p>
        
        {/* Fixed Interaction Row */}
        <div className="flex gap-3 pt-6 border-t border-slate-100">
          {[Mail, Phone, Award].map((Icon, idx) => (
            <button 
              key={idx}
              className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:text-blue-600 hover:border-blue-600 hover:bg-blue-50 transition-all"
            >
              <Icon size={18} />
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Administration = () => {
  return (
    <div className="bg-slate-50 min-h-screen font-['Plus_Jakarta_Sans']">
      {/* Blue Executive Header */}
      <section className="bg-blue-700 pt-32 pb-48 relative overflow-hidden">
        {/* Decorative elements - pointer-events-none */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-blue-600 skew-x-12 translate-x-20 pointer-events-none" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <span className="text-blue-200 text-sm font-bold tracking-[0.4em] uppercase mb-4 block">Our Team</span>
            <h1 className="text-white text-5xl md:text-7xl font-['Playfair_Display'] font-black">
              Executive <br /> <span className="text-yellow-400 italic">Administration</span>
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid - Pulled Upwards */}
      <section className="max-w-7xl mx-auto px-6 -mt-24 pb-24 relative z-20">
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
