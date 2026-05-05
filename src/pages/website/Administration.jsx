
import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Award, MessageCircle } from 'lucide-react'

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
    image: directorImg,
    email: 'director@mayday.edu.ng',
    phone: '+234 801 234 5678'
  },
  {
    id: 2,
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering distinction.',
    image: headTeacherImg,
    email: 'headteacher@mayday.edu.ng',
    phone: '+234 802 345 6789'
  },
  {
    id: 3,
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
    image: deputyHeadImg,
    email: 'deputy@mayday.edu.ng',
    phone: '+234 803 456 7890'
  }
]

// Animation Variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.7, ease: [0.21, 0.79, 0.51, 1] } 
  }
}

const StaffCard = ({ member }) => {
  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in contacting ${member.full_name} (${member.role}) at MayDay International School.`
    const whatsappUrl = `https://wa.me/2348012345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  const handleEmail = () => {
    window.location.href = `mailto:${member.email}`
  }

  const handlePhone = () => {
    window.location.href = `tel:${member.phone}`
  }

  return (
    <motion.div 
      variants={cardVariants}
      whileHover={{ y: -10 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 h-[520px] flex flex-col"
    >
      {/* Image Section */}
      <div className="relative h-[280px] overflow-hidden bg-gradient-to-br from-blue-900 to-blue-700">
        {member.image ? (
          <motion.img 
            src={member.image} 
            alt={member.full_name} 
            className="w-full h-full object-cover object-top"
            whileHover={{ scale: 1.08 }}
            transition={{ duration: 0.6 }}
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <span className="text-white text-6xl font-bold">{member.full_name.charAt(0)}</span>
          </div>
        )}
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
        
        {/* Role Badge */}
        <div className="absolute top-4 left-4">
          <span className="bg-yellow-500 text-blue-900 text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg">
            {member.role}
          </span>
        </div>
        
        {/* Name Overlay */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-white text-xl font-bold leading-tight drop-shadow-lg">
            {member.full_name}
          </h3>
          <motion.div 
            initial={{ width: 0 }}
            whileInView={{ width: "50px" }}
            className="h-0.5 bg-yellow-500 mt-2 rounded-full"
          />
        </div>
      </div>

      {/* Content Section */}
      <div className="p-5 flex flex-col flex-grow">
        <p className="text-blue-600 font-semibold text-[10px] uppercase tracking-wider mb-2">
          {member.qualification}
        </p>
        
        <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
          "{member.bio}"
        </p>
        
        {/* Action Buttons */}
        <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
          <div className="flex gap-2">
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: 'white' }}
              onClick={handleEmail}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              <Mail size={14} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: 'white' }}
              onClick={handlePhone}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
            >
              <Phone size={14} />
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.1, backgroundColor: '#25D366', color: 'white' }}
              onClick={handleWhatsApp}
              className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:text-white"
            >
              <MessageCircle size={14} />
            </motion.button>
          </div>
          
          <motion.button 
            whileHover={{ x: 3 }}
            className="text-blue-600 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1"
          >
            Profile <Award size={12} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
}

// WhatsApp Floating Button Component
const WhatsAppFloatingButton = () => {
  const [isHovered, setIsHovered] = useState(false)
  
  const handleWhatsAppClick = () => {
    const message = "Hello! I'm interested in MayDay International School. I'd like to get more information about admissions and programs."
    const whatsappUrl = `https://wa.me/2348012345678?text=${encodeURIComponent(message)}`
    window.open(whatsappUrl, '_blank')
  }

  return (
    <motion.button
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1, duration: 0.5 }}
      onClick={handleWhatsAppClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        zIndex: 9999,
        width: '56px',
        height: '56px',
        borderRadius: '50%',
        background: 'linear-gradient(135deg, #25D366 0%, #128C7E 100%)',
        border: 'none',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.3)'
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <MessageCircle size={28} color="white" />
      
      {/* Tooltip */}
      <motion.span
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 20 }}
        style={{
          position: 'absolute',
          right: '70px',
          whiteSpace: 'nowrap',
          backgroundColor: '#1f2937',
          color: 'white',
          padding: '8px 16px',
          borderRadius: '12px',
          fontSize: '12px',
          fontWeight: '500',
          fontFamily: 'system-ui, sans-serif',
          boxShadow: '0 4px 12px rgba(0,0,0,0.15)'
        }}
      >
        Chat with us on WhatsApp 📱
      </motion.span>
      
      {/* Pulse Animation */}
      <span style={{
        position: 'absolute',
        top: '-4px',
        right: '-4px',
        width: '16px',
        height: '16px',
        backgroundColor: '#ef4444',
        borderRadius: '50%',
        border: '2px solid white',
        animation: 'pulse 1.5s infinite'
      }} />
      
      <style>{`
        @keyframes pulse {
          0%, 100% {
            opacity: 1;
            transform: scale(1);
          }
          50% {
            opacity: 0.5;
            transform: scale(1.3);
          }
        }
      `}</style>
    </motion.button>
  )
}

// Need to import useState for the WhatsApp button
//import { useState } from 'react'

const Administration = () => {
  return (
    <main className="bg-white min-h-screen">
      {/* Immersive Blue Hero Header */}
      <section className="relative bg-gradient-to-br from-blue-800 via-blue-700 to-blue-900 py-28 md:py-36 overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 10, 0]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -right-32 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[100px]"
        />
        <motion.div 
          animate={{ 
            scale: [1.2, 1, 1.2],
            rotate: [0, -5, 0]
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] bg-yellow-500/10 rounded-full blur-[100px]"
        />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-yellow-400 font-bold text-xs uppercase tracking-[0.3em] mb-4 block">
              Leadership Excellence
            </span>
            <h1 className="text-white text-5xl md:text-7xl font-bold leading-tight mb-6">
              School <br />
              <span className="text-yellow-400 italic">Administration</span>
            </h1>
            <p className="max-w-xl text-blue-100 text-base leading-relaxed border-l-4 border-yellow-500 pl-6">
              Meet the visionary leaders driving academic excellence, 
              moral integrity, and holistic development at MayDay International School.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Leadership Grid */}
      <section className="max-w-7xl mx-auto px-6 -mt-16 pb-28 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {leadershipData.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>
      
      {/* WhatsApp Floating Button */}
     {/* <WhatsAppFloatingButton />*/}
    </main>
  )
}

export default Administration