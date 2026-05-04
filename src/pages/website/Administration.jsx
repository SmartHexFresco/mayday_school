import { motion } from 'framer-motion'
import { Mail, Phone, Award, Linkedin } from 'lucide-react'

// Keep your existing image imports
import directorImg from '@assets/images/staff/leadership/director.jpg'
import headTeacherImg from '@assets/images/staff/leadership/headteacher.jpg'
import deputyHeadImg from '@assets/images/staff/leadership/deputyhead.jpg'

const leadershipData = [
  {
    id: 1,
    full_name: 'Honourable Mr. Chiude Romanus',
    role: 'Director',
    qualification: 'LL.B, BL, MBA',
    bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence.',
    image: directorImg
  },
  {
    id: 2,
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering distinction.',
    image: headTeacherImg
  },
  {
    id: 3,
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
    image: deputyHeadImg
  }
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50, scale: 0.95 },
  visible: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } 
  }
}

const StaffCard = ({ member }) => (
  <motion.div 
    variants={cardVariants}
    whileHover={{ y: -15 }}
    className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-100 h-[600px] flex flex-col"
  >
    {/* Image Section with Interactive Gradients */}
    <div className="relative h-2/3 overflow-hidden bg-blue-50">
      <motion.img 
        src={member.image} 
        alt={member.full_name} 
        className="w-full h-full object-cover object-top filter grayscale-[40%] group-hover:grayscale-0 transition-all duration-1000"
        whileHover={{ scale: 1.1 }}
      />
      {/* Decorative Overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-blue-900/90 via-blue-900/20 to-transparent opacity-90 transition-opacity group-hover:opacity-100" />
      <div className="absolute top-6 left-6 flex gap-2">
        <span className="bg-yellow-500/90 backdrop-blur-md text-blue-950 text-[10px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-lg">
          {member.role}
        </span>
      </div>

      <div className="absolute bottom-8 left-8 right-8">
        <h3 className="text-white text-3xl font-serif font-bold leading-tight drop-shadow-md">
          {member.full_name}
        </h3>
        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "60px" }}
          className="h-1 bg-yellow-500 mt-3 rounded-full"
        />
      </div>
    </div>

    {/* Professional Bio Content */}
    <div className="p-10 flex flex-col justify-between flex-grow">
      <div>
        <p className="text-blue-600 font-bold text-[11px] uppercase tracking-[0.25em] mb-4">
          {member.qualification}
        </p>
        <p className="text-slate-500 text-sm leading-[1.8] line-clamp-3 group-hover:line-clamp-none transition-all duration-500 italic">
          "{member.bio}"
        </p>
      </div>
      
      {/* Action Row */}
      <div className="flex items-center justify-between pt-8 border-t border-slate-50">
        <div className="flex gap-4">
          {[Mail, Phone, Linkedin].map((Icon, i) => (
            <motion.button 
              key={i}
              whileHover={{ scale: 1.2, backgroundColor: '#EFF6FF', color: '#2563EB' }}
              className="w-10 h-10 rounded-full border border-slate-100 flex items-center justify-center text-slate-400 transition-all duration-300"
            >
              <Icon size={18} />
            </motion.button>
          ))}
        </div>
        <motion.button 
          whileHover={{ x: 5 }}
          className="text-blue-700 font-bold text-xs flex items-center gap-2 group-hover:text-yellow-600"
        >
          VIEW PROFILE <Award size={14} />
        </motion.button>
      </div>
    </div>
  </motion.div>
)

const Administration = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Immersive Blue Hero Header */}
      <section className="relative bg-blue-700 py-32 md:py-48 overflow-hidden">
        {/* Dynamic Background Background */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 5, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-1/4 -right-1/4 w-[800px] h-[800px] bg-blue-600/30 rounded-full blur-[120px] pointer-events-none" 
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <span className="text-blue-100 font-black text-xs uppercase tracking-[0.5em] mb-6 block">
              Leadership Excellence
            </span>
            <h1 className="text-white text-6xl md:text-8xl font-serif font-black leading-none mb-8">
              The <br />
              <span className="text-yellow-400 italic">Executive</span>
            </h1>
            <p className="max-w-xl text-blue-100/70 text-lg leading-relaxed border-l-4 border-yellow-500 pl-8">
              A collective of world-class educators and visionaries driving 
              the next generation of global leaders through moral and academic rigor.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Bento Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-32 pb-32 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
        >
          {leadershipData.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>
    </main>
  )
}

export default Administration
