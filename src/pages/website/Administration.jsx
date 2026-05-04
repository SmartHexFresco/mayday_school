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
      whileHover={{ y: -12 }}
      className="group relative bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500"
    >
      <div className="relative h-[440px] overflow-hidden bg-slate-200">
        <motion.img
          src={image}
          alt={full_name}
          className="w-full h-full object-cover object-top"
          whileHover={{ scale: 1.08 }}
          transition={{ duration: 1.2 }}
        />
        
        {/* Blue-Tinted Professional Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-900/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-500" />
        
        <div className="absolute bottom-6 left-6 right-6">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-yellow-500 text-blue-950 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1 inline-block mb-3 rounded-sm"
          >
            {role}
          </motion.div>
          <h3 className="text-2xl font-serif font-bold text-white leading-tight">
            {full_name}
          </h3>
          <p className="text-blue-200 text-sm font-medium italic mt-1">
            {qualification}
          </p>
        </div>
      </div>

      <div className="p-8">
        <motion.div 
          className="w-12 h-1 bg-blue-600 mb-4"
          whileHover={{ width: "100%" }}
          transition={{ duration: 0.4 }}
        />
        <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">
          "{bio}"
        </p>
        
        <div className="flex gap-4 border-t border-gray-100 pt-6">
          {[Mail, Phone, Award].map((Icon, i) => (
            <motion.button 
              key={i}
              whileHover={{ scale: 1.2, color: '#2563eb' }}
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
    <div className="bg-slate-50 min-h-screen">
      
      {/* Updated Blue Header Section */}
      <section className="relative bg-blue-700 text-white py-32 overflow-hidden">
        {/* Animated Blue Shape Overlay */}
        <motion.div 
          initial={{ x: '100%' }}
          animate={{ x: '30%' }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="absolute top-0 right-0 w-full h-full bg-blue-600/30 skew-x-12"
        />
        
        <div className="relative max-w-7xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-blue-100 text-xs font-bold uppercase tracking-[0.4em] mb-4 block">
              School Leadership
            </span>
            <h1 className="text-5xl md:text-7xl font-serif font-bold mb-8">
              Our <br />
              <span className="text-yellow-400 italic">Administration</span>
            </h1>
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: '120px' }}
              transition={{ delay: 0.5, duration: 0.8 }}
              className="h-1.5 bg-yellow-400 mb-8"
            />
            <p className="max-w-xl text-blue-50 text-lg leading-relaxed opacity-90">
              Meet the visionary leaders dedicated to providing world-class 
              educational standards and fostering moral excellence.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="max-w-7xl mx-auto px-6 py-24 relative -mt-12 z-10">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10"
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
