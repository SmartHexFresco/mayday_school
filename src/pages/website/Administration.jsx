

// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { Mail, Phone, Award,  MessageCircle } from 'lucide-react'

// // Keep your existing image imports
// import directorImg from '@assets/images/staff/leadership/director.jpg'
// import headTeacherImg from '@assets/images/staff/leadership/headteacher.jpg'
// import deputyHeadImg from '@assets/images/staff/leadership/deputyhead.jpg'
// // Import hero background image
//  import heroBg from '@assets/images/administration-hero.jpg' // Add this image to your assets


// const leadershipData = [
//   {
//     id: 1,
//     full_name: 'Honourable Mr. Chiude Romanus',
//     role: 'Director',
//     qualification: 'LL.B, BL, MBA',
//     bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence.',
//     image: directorImg,
//     email: 'director@mayday.edu.ng',
//     phone: '+234 801 234 5678',
//     whatsapp: '2348012345678'
//   },
//   {
//     id: 2,
//     full_name: 'Mrs. Chinwe P. Okafor',
//     role: 'Head Teacher',
//     qualification: 'M.Ed. Educational Administration',
//     bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering distinction.',
//     image: headTeacherImg,
//     email: 'headteacher@mayday.edu.ng',
//     phone: '+234 802 345 6789',
//     whatsapp: '2348023456789'
//   },
//   {
//     id: 3,
//     full_name: 'Mrs. Chika Modesta',
//     role: 'Deputy Head Teacher',
//     qualification: 'M.Ed. Curriculum Studies',
//     bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
//     image: deputyHeadImg,
//     email: 'deputy@mayday.edu.ng',
//     phone: '+234 803 456 7890',
//     whatsapp: '2348034567890'
//   }
// ]

// // Animation Variants
// const containerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.15, delayChildren: 0.1 }
//   }
// }

// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   visible: { 
//     opacity: 1, 
//     y: 0,
//     transition: { duration: 0.7, ease: [0.21, 0.79, 0.51, 1] } 
//   }
// }

// const StaffCard = ({ member }) => {
//   const handleWhatsApp = () => {
//     const message = `Hello, I'm interested in contacting ${member.full_name} (${member.role}) at MayDay International School.`
//     const whatsappUrl = `https://wa.me/${member.whatsapp}?text=${encodeURIComponent(message)}`
//     window.open(whatsappUrl, '_blank')
//   }

//   const handleEmail = () => {
//     window.location.href = `mailto:${member.email}`
//   }

//   const handlePhone = () => {
//     window.location.href = `tel:${member.phone}`
//   }

//   return (
//     <motion.div 
//       variants={cardVariants}
//       whileHover={{ y: -10 }}
//       className="group relative bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 transition-all duration-500 h-[540px] flex flex-col"
//     >
//       {/* Image Section - Centered Face */}
//       <div className="relative h-[340px] overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
//         {member.image ? (
//           <motion.img 
//             src={member.image} 
//             alt={member.full_name} 
//             className="w-full h-full object-cover"
//             style={{ 
//               objectPosition: 'center 30%',
//               objectFit: 'cover'
//             }}
//             initial={{ scale: 1 }}
//             whileHover={{ scale: 1.08 }}
//             transition={{ duration: 0.6 }}
//           />
//         ) : (
//           <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
//             <span className="text-white text-6xl font-bold">{member.full_name.charAt(0)}</span>
//           </div>
//         )}
        
//         {/* Light Gradient Overlay */}
//         <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        
//         {/* Role Badge */}
//         <div className="absolute top-4 left-4">
//           <span className="bg-yellow-500 text-blue-900 text-[11px] font-bold px-3 py-1.5 rounded-full uppercase tracking-wider shadow-lg z-10 relative">
//             {member.role}
//           </span>
//         </div>
        
//         {/* Name Overlay */}
//         <div className="absolute bottom-0 left-0 right-0 p-5 bg-gradient-to-t from-black/80 via-black/40 to-transparent">
//           <h3 className="text-white text-xl font-bold leading-tight drop-shadow-lg">
//             {member.full_name}
//           </h3>
//           <motion.div 
//             initial={{ width: 0 }}
//             whileInView={{ width: "50px" }}
//             className="h-0.5 bg-yellow-500 mt-2 rounded-full"
//           />
//         </div>
//       </div>

//       {/* Content Section */}
//       <div className="p-5 flex flex-col flex-grow">
//         <p className="text-blue-600 font-semibold text-[11px] uppercase tracking-wider mb-2">
//           {member.qualification}
//         </p>
        
//         <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
//           "{member.bio}"
//         </p>
        
//         {/* Action Buttons */}
//         <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
//           <div className="flex gap-2">
//             <motion.button 
//               whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: 'white' }}
//               onClick={handleEmail}
//               className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
//               title={`Email ${member.full_name}`}
//             >
//               <Mail size={15} />
//             </motion.button>
            
//             <motion.button 
//               whileHover={{ scale: 1.1, backgroundColor: '#2563EB', color: 'white' }}
//               onClick={handlePhone}
//               className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-blue-600 hover:border-blue-600 hover:text-white"
//               title={`Call ${member.full_name}`}
//             >
//               <Phone size={15} />
//             </motion.button>
            
//             <motion.button 
//               whileHover={{ scale: 1.1, backgroundColor: '#25D366', color: 'white' }}
//               onClick={handleWhatsApp}
//               className="w-9 h-9 rounded-full border border-gray-200 flex items-center justify-center text-gray-500 transition-all duration-300 hover:bg-green-500 hover:border-green-500 hover:text-white"
//               title={`WhatsApp ${member.full_name}`}
//             >
//               <MessageCircle size={15} />
//             </motion.button>
//           </div>
          
//           <motion.button 
//             whileHover={{ x: 3 }}
//             className="text-blue-600 font-bold text-[10px] uppercase tracking-wider flex items-center gap-1"
//           >
//             Profile <Award size={12} />
//           </motion.button>
//         </div>
//       </div>
//     </motion.div>
//   )
// }

// // Hero Section with Image Background
// const HeroSection = () => {
//   return (
//     <section className="relative h-[450px] md:h-[550px] overflow-hidden">
//       {/* Background Image with Motion */}
//       <motion.div
//         initial={{ scale: 1.1 }}
//         animate={{ scale: 1 }}
//         transition={{ duration: 1.5, ease: "easeOut" }}
//         className="absolute inset-0 w-full h-full"
//       >
//         <div 
//           className="w-full h-full bg-cover bg-center bg-no-repeat"
//           style={{
//           backgroundImage: `url(${heroBg})`,
//          }}
//         >
//           {/* Dark Overlay for text readability */}
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
//         </div>
//       </motion.div>
      
//       {/* Animated Elements */}
//       <motion.div 
//         animate={{ 
//           scale: [1, 1.2, 1],
//           rotate: [0, 5, 0]
//         }}
//         transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
//         className="absolute top-20 right-20 w-64 h-64 bg-yellow-500/10 rounded-full blur-[80px]"
//       />
//       <motion.div 
//         animate={{ 
//           scale: [1.2, 1, 1.2],
//           rotate: [0, -5, 0]
//         }}
//         transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
//         className="absolute bottom-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[100px]"
//       />
      
//       {/* Content */}
//       <div className="relative z-10 h-full flex items-center">
//         <div className="max-w-7xl mx-auto px-6 w-full">
//           <motion.div 
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.8, delay: 0.2 }}
//           >
//             <span className="text-yellow-400 font-bold text-sm uppercase tracking-[0.3em] mb-4 block">
//               Leadership Excellence
//             </span>
//             <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-tight mb-6">
//               School <br />
//               <span className="text-yellow-400 italic">Administration</span>
//             </h1>
//             <p className="max-w-xl text-blue-100 text-base md:text-lg leading-relaxed border-l-4 border-yellow-500 pl-6">
//               Meet the visionary leaders driving academic excellence, 
//               moral integrity, and holistic development at MayDay International School.
//             </p>
//           </motion.div>
//         </div>
//       </div>
      
//       {/* Scroll indicator */}
//       <motion.div 
//         animate={{ y: [0, 10, 0] }}
//         transition={{ duration: 1.5, repeat: Infinity }}
//         className="absolute bottom-8 left-1/2 -translate-x-1/2"
//       >
//         <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
//           <div className="w-1 h-2 bg-white/70 rounded-full mt-2 animate-pulse" />
//         </div>
//       </motion.div>
//     </section>
//   )
// }

// // Responsive image component for better face visibility
// const StaffImage = ({ src, alt, name }) => {
//   const [imgError, setImgError] = useState(false)
//   const [imagePosition, setImagePosition] = useState('center 35%')
  
//   return (
//     <div className="w-full h-full relative">
//       {!imgError ? (
//         <img 
//           src={src} 
//           alt={alt}
//           className="w-full h-full object-cover"
//           style={{ 
//             objectPosition: imagePosition,
//             objectFit: 'cover'
//           }}
//           onError={() => setImgError(true)}
//           onLoad={(e) => {
//             // Adjust position based on image dimensions
//             const img = e.target
//             const height = img.naturalHeight
//             const width = img.naturalWidth
//             // If image is taller, center on face area
//             if (height > width * 1.3) {
//               setImagePosition('center 30%')
//             }
//           }}
//         />
//       ) : (
//         <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-600 to-blue-800">
//           <span className="text-white text-6xl font-bold">{name?.charAt(0) || '?'}</span>
//         </div>
//       )}
//     </div>
//   )
// }

// const Administration = () => {
//   return (
//     <main className="bg-white min-h-screen">
//       {/* Hero Section */}
//       <HeroSection />

//       {/* Leadership Grid */}
//       <section className="max-w-7xl mx-auto px-6 -mt-16 pb-28 relative z-20">
//         <motion.div 
//           variants={containerVariants}
//           initial="hidden"
//           whileInView="visible"
//           viewport={{ once: true, margin: "-50px" }}
//           className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
//         >
//           {leadershipData.map((member) => (
//             <StaffCard key={member.id} member={member} />
//           ))}
//         </motion.div>
//       </section>

//       {/* Mobile CSS adjustments */}
//       <style>{`
//         @media (max-width: 768px) {
//           .group .h-\\[340px\\] {
//             height: 280px;
//           }
//         }
//       `}</style>
//     </main>
//   )
// }

// export default Administration






























































































































































import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, Award, MessageCircle, ArrowRight, ChevronDown } from 'lucide-react'

import directorImg from '@assets/images/staff/leadership/director.jpg'
import headTeacherImg from '@assets/images/staff/leadership/headteacher.jpg'
import deputyHeadImg from '@assets/images/staff/leadership/deputyhead.jpg'
import heroBg from '@assets/images/administration-hero.jpg'

const leadershipData = [
  {
    id: 1,
    full_name: 'Honourable Mr. Chiude Romanus',
    role: 'Director',
    qualification: 'LL.B, BL, MBA',
    bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence.',
    image: directorImg,
    email: 'director@mayday.edu.ng',
    phone: '+234 801 234 5678',
    whatsapp: '2348012345678'
  },
  {
    id: 2,
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering distinction.',
    image: headTeacherImg,
    email: 'headteacher@mayday.edu.ng',
    phone: '+234 802 345 6789',
    whatsapp: '2348023456789'
  },
  {
    id: 3,
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success.',
    image: deputyHeadImg,
    email: 'deputy@mayday.edu.ng',
    phone: '+234 803 456 7890',
    whatsapp: '2348034567890'
  }
]

// Orchestrated staggered animations that run both scrolling up & down
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.98
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: { 
      type: "spring",
      stiffness: 70,
      damping: 14,
      mass: 0.8
    } 
  }
}

const StaffImage = ({ src, alt, name }) => {
  const [imgError, setImgError] = useState(false)
  const [imagePosition, setImagePosition] = useState('center 25%')
  
  return (
    <div className="w-full h-full relative bg-slate-50">
      {!imgError && src ? (
        <img 
          src={src} 
          alt={alt}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
          onError={() => setImgError(true)}
          onLoad={(e) => {
            const img = e.target
            if (img.naturalHeight > img.naturalWidth * 1.2) {
              setImagePosition('center 20%')
            }
          }}
        />
      ) : (
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-blue-700 to-blue-900">
          <span className="text-white text-5xl font-light tracking-wider">
            {name?.split(' ').map(n => n[0]).join('').slice(0,2) || '?'}
          </span>
        </div>
      )}
    </div>
  )
}

const StaffCard = ({ member }) => {
  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in contacting ${member.full_name} (${member.role}) at MayDay International School.`
    window.open(`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <motion.div 
      variants={cardVariants}
      className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col"
    >
      <div className="relative aspect-[4/4] sm:aspect-[4/5] md:aspect-[4/4] overflow-hidden">
        <StaffImage src={member.image} alt={member.full_name} name={member.full_name} />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90" />
        
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-white/95 backdrop-blur-md text-blue-900 text-[10px] font-bold px-3 py-1.5 rounded-md uppercase tracking-widest shadow-sm">
            {member.role}
          </span>
        </div>

        <div className="absolute bottom-0 left-0 right-0 p-6 z-10 text-white">
          <p className="text-blue-300 font-medium text-[11px] uppercase tracking-wider mb-1">
            {member.qualification}
          </p>
          <h3 className="text-xl md:text-2xl font-bold tracking-tight text-white leading-snug">
            {member.full_name}
          </h3>
        </div>
      </div>

      <div className="p-6 flex flex-col flex-grow bg-white">
        <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow font-normal italic">
          "{member.bio}"
        </p>
        
        <div className="flex items-center justify-between pt-4 border-t border-slate-100">
          <div className="flex gap-2.5">
            <button 
              onClick={() => window.location.href = `mailto:${member.email}`}
              className="w-9 h-9 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              title={`Email ${member.full_name}`}
            >
              <Mail size={15} />
            </button>
            <button 
              onClick={() => window.location.href = `tel:${member.phone}`}
              className="w-9 h-9 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-blue-50 hover:text-blue-600 transition-colors duration-200"
              title={`Call ${member.full_name}`}
            >
              <Phone size={15} />
            </button>
            <button 
              onClick={handleWhatsApp}
              className="w-9 h-9 rounded-full bg-slate-50 text-slate-600 flex items-center justify-center hover:bg-emerald-50 hover:text-emerald-600 transition-colors duration-200"
              title={`WhatsApp ${member.full_name}`}
            >
              <MessageCircle size={15} />
            </button>
          </div>
          
          <button className="text-blue-600 font-bold text-xs uppercase tracking-wider flex items-center gap-1.5 group/btn">
            <span>View Bio</span>
            <ArrowRight size={13} className="transition-transform duration-300 group-hover/btn:translate-x-1" />
          </button>
        </div>
      </div>
    </motion.div>
  )
}

const HeroSection = () => {
  return (
    <section className="relative min-h-[60vh] md:min-h-[70vh] flex items-center justify-center overflow-hidden bg-slate-950">
      <div className="absolute inset-0 z-0">
        <img 
          src={heroBg} 
          alt="MayDay Admin Banner" 
          className="w-full h-full object-cover opacity-35 object-center scale-105 select-none"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-blue-950/40 via-slate-950/80 to-slate-950" />
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center pt-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="inline-flex items-center gap-2 bg-blue-500/10 text-blue-400 font-semibold text-xs uppercase tracking-[0.25em] px-3.5 py-1.5 rounded-full border border-blue-500/20 mb-6">
            <Award size={12} className="text-blue-400" /> Executive Leadership
          </span>
          
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Governing with Purpose & <br className="hidden sm:inline" />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-200">
              Academic Distinction
            </span>
          </h1>
          
          <p className="max-w-xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-light">
            Meet the visionary minds driving academic rigor, moral integrity, and modern systems leadership at MayDay International School.
          </p>
        </motion.div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-1 opacity-60">
        <span className="text-[10px] uppercase text-white tracking-widest font-medium">Explore Leadership</span>
        <ChevronDown size={14} className="text-white animate-bounce" />
      </div>
    </section>
  )
}

const Administration = () => {
  return (
    <main className="bg-slate-50 min-h-screen font-sans antialiased">
      {/* Global Injection for Smooth Elastic Scrolling */}
      <style>{`
        html {
          scroll-behavior: smooth !important;
        }
      `}</style>

      <HeroSection />

      {/* Grid wrapper with multi-directional viewport watching */}
      <section className="max-w-7xl mx-auto px-6 -mt-12 sm:-mt-16 pb-32 relative z-20">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ 
            once: false,       // <-- Forces animations to execute going up AND down
            amount: 0.15       // <-- Card triggers animation as soon as 15% of it enters screen
          }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
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