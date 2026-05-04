import { motion } from 'framer-motion'
import { Mail, Phone, Award } from 'lucide-react'

// Import leadership images (Keeping your existing imports)
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
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering a culture of academic distinction.',
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

// ── Motion Variants ──
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { 
    opacity: 1, 
    y: 0, 
    transition: { duration: 0.6, ease: "easeOut" } 
  }
}

const StaffCard = ({ member }) => {
  const { full_name, role, qualification, bio, image } = member

  return (
    <motion.div 
      variants={itemVariants}
      whileHover={{ y: -10 }}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500"
    >
      {/* Professional Portrait Container */}
      <div className="relative h-[420px] overflow-hidden bg-slate-200">
        <motion.img
          src={image}
          alt={full_name}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.8 }}
        />
        
        {/* Professional Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/20 to-transparent opacity-70 group-hover:opacity-90 transition-opacity duration-500" />
        
        {/* Floating Info on Image */}
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-yellow-500 text-slate-900 text-[10px] font-bold uppercase tracking-[0.2em] px-3 py-1 inline-block mb-3"
          >
            {role}
          </motion.div>
          <h3 className="text-2xl font-serif font-bold text-white leading-tight">
            {full_name}
          </h3>
          <p className="text-yellow-400/90 text-sm font-medium italic mt-1">
            {qualification}
          </p>
        </div>
      </div>

      {/* Expandable Bio Content */}
      <div className="p-8">
        <motion.div 
          className="w-12 h-1 bg-yellow-500 mb-4"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
        <p className="text-slate-600 text-sm leading-relaxed mb-6">
          {bio}
        </p>
        
        <div className="flex gap-4 border-t border-gray-100 pt-6">
          {[Mail, Phone, Award].map((Icon, i) => (
            <motion.button 
              key={i}
              whileHover={{ scale: 1.2, color: '#D4AF37' }}
              className="text-slate-400 transition-colors"
            >
              <Icon size={18} />
            </motion.button>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

const Administration = () => {
  return (
    <div className="bg-white min-h-screen">
      
      {/* Animated Header */}
      <section className="relative bg-slate-900 text-white py-32 overflow-hidden">
        {/* Animated Background Shape */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '20%' }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="absolute top-0 right-0 w-1/2 h-full bg-yellow-500/5 skew-x-12"
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-500 text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
              Leadership Excellence
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Executive <br />
              <span className="text-yellow-500 italic">Administration</span>
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '100px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1 bg-yellow-500 mb-8"
            />
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid with Staggered Reveal */}
      <section className="max-w-7xl mx-auto px-6 py-24">
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
    </div>
  )
}

export default Administration
