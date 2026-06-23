

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
import {
  Award,
  GraduationCap,
  Mail,
  MessageCircle,
  Phone,
  ShieldCheck,
  Sparkles,
  Users
} from 'lucide-react'

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

const priorities = [
  { label: 'Academic direction', icon: GraduationCap },
  { label: 'Pastoral care', icon: ShieldCheck },
  { label: 'Parent partnership', icon: Users }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.12, delayChildren: 0.1 }
  }
}

const cardVariants = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.21, 0.79, 0.51, 1] }
  }
}

const HeroSection = () => (
  <section className="relative min-h-[620px] overflow-hidden bg-slate-950">
    <motion.div
      initial={{ scale: 1.08 }}
      animate={{ scale: 1 }}
      transition={{ duration: 1.4, ease: 'easeOut' }}
      className="absolute inset-0"
    >
      <div
        className="h-full w-full bg-cover bg-center"
        style={{ backgroundImage: `url(${heroBg})` }}
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(2,6,23,0.92)_0%,rgba(15,23,42,0.76)_48%,rgba(15,23,42,0.38)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />
    </motion.div>

    <div className="relative z-10 mx-auto flex min-h-[620px] max-w-7xl items-center px-6 py-24">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.75, delay: 0.15 }}
        className="max-w-3xl"
      >
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-xs font-bold uppercase tracking-[0.24em] text-yellow-300 backdrop-blur">
          <Sparkles size={14} />
          Leadership Excellence
        </div>

        <h1 className="max-w-3xl text-5xl font-bold leading-[1.02] text-white md:text-7xl">
          School Administration
        </h1>

        <p className="mt-6 max-w-2xl border-l-4 border-yellow-400 pl-5 text-base leading-8 text-slate-100 md:text-lg">
          Meet the leaders guiding MayDay International School with clarity,
          discipline, academic ambition, and genuine care for every learner.
        </p>

        <div className="mt-10 grid max-w-3xl gap-3 sm:grid-cols-3">
          {priorities.map(({ label, icon: Icon }) => (
            <div
              key={label}
              className="flex items-center gap-3 border border-white/15 bg-white/10 px-4 py-3 text-sm font-semibold text-white backdrop-blur"
            >
              <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-yellow-400 text-blue-950">
                <Icon size={17} />
              </span>
              {label}
            </div>
          ))}
        </div>
      </motion.div>
    </div>
  </section>
)

const StaffImage = ({ src, alt, name }) => {
  const [imgError, setImgError] = useState(false)
  const [imagePosition, setImagePosition] = useState('center 26%')

  return (
    <div className="relative h-full w-full overflow-hidden bg-blue-950">
      {src && !imgError ? (
        <img
          src={src}
          alt={alt}
          className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
          style={{ objectPosition: imagePosition }}
          onError={() => setImgError(true)}
          onLoad={(event) => {
            const img = event.target
            if (img.naturalHeight > img.naturalWidth * 1.3) {
              setImagePosition('center 22%')
            }
          }}
        />
      ) : (
        <div className="flex h-full w-full items-center justify-center bg-blue-950">
          <span className="text-6xl font-bold text-white">
            {name?.charAt(0) || '?'}
          </span>
        </div>
      )}
    </div>
  )
}

const StaffCard = ({ member, featured }) => {
  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in contacting ${member.full_name} (${member.role}) at MayDay International School.`
    window.open(
      `https://wa.me/${member.whatsapp}?text=${encodeURIComponent(message)}`,
      '_blank'
    )
  }

  const handleEmail = () => {
    window.location.href = `mailto:${member.email}`
  }

  const handlePhone = () => {
    window.location.href = `tel:${member.phone}`
  }

  return (
    <motion.article
      variants={cardVariants}
      whileHover={{ y: -8 }}
      className={`group grid overflow-hidden rounded-lg border border-slate-200 bg-white shadow-[0_18px_55px_rgba(15,23,42,0.08)] transition duration-500 ${
        featured ? 'lg:grid-cols-[0.9fr_1.1fr] lg:col-span-3' : ''
      }`}
    >
      <div
        className={`relative ${
          featured ? 'h-[420px] lg:h-full' : 'h-[360px]'
        }`}
      >
        <StaffImage
          src={member.image}
          alt={member.full_name}
          name={member.full_name}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/70 via-transparent to-transparent" />
        <div className="absolute left-5 top-5 rounded-full bg-yellow-400 px-4 py-2 text-[11px] font-bold uppercase tracking-[0.18em] text-blue-950 shadow-lg">
          {member.role}
        </div>
      </div>

      <div className="flex min-h-[320px] flex-col p-6 md:p-8">
        <div>
          <p className="mb-3 flex items-center gap-2 text-xs font-bold uppercase tracking-[0.22em] text-blue-700">
            <Award size={15} />
            {member.qualification}
          </p>

          <h2 className="text-2xl font-bold leading-tight text-slate-950 md:text-3xl">
            {member.full_name}
          </h2>

          <div className="mt-4 h-1 w-14 rounded-full bg-yellow-400" />

          <p className="mt-6 text-[15px] leading-7 text-slate-600">
            {member.bio}
          </p>
        </div>

        <div className="mt-auto pt-8">
          <div className="grid gap-3 sm:grid-cols-3">
            <button
              type="button"
              onClick={handleEmail}
              className="flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 text-sm font-bold text-slate-700 transition hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              title={`Email ${member.full_name}`}
            >
              <Mail size={17} />
              Email
            </button>

            <button
              type="button"
              onClick={handlePhone}
              className="flex h-12 items-center justify-center gap-2 rounded-md border border-slate-200 text-sm font-bold text-slate-700 transition hover:border-blue-700 hover:bg-blue-700 hover:text-white"
              title={`Call ${member.full_name}`}
            >
              <Phone size={17} />
              Call
            </button>

            <button
              type="button"
              onClick={handleWhatsApp}
              className="flex h-12 items-center justify-center gap-2 rounded-md border border-emerald-200 bg-emerald-50 text-sm font-bold text-emerald-700 transition hover:border-emerald-600 hover:bg-emerald-600 hover:text-white"
              title={`WhatsApp ${member.full_name}`}
            >
              <MessageCircle size={17} />
              WhatsApp
            </button>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

const Administration = () => {
  const [director, ...team] = leadershipData

  return (
    <main className="min-h-screen bg-white text-slate-950">
      <HeroSection />

      <section className="relative z-20 mx-auto -mt-14 max-w-7xl px-6 pb-24">
        <div className="mb-10 border-l-4 border-yellow-400 py-2 pl-6">
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-blue-700">
            Administrative Team
          </p>
          <div className="mt-3 grid gap-5 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
            <h2 className="text-3xl font-bold leading-tight text-slate-950 md:text-4xl">
              Leadership with structure, care, and purpose.
            </h2>
            <p className="max-w-3xl text-[15px] leading-7 text-slate-600 lg:ml-auto">
              The administration team coordinates learning standards, teacher
              support, student welfare, and parent communication across the
              school community.
            </p>
          </div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="grid grid-cols-1 gap-7 lg:grid-cols-3"
        >
          <StaffCard member={director} featured />
          {team.map((member) => (
            <StaffCard key={member.id} member={member} />
          ))}
        </motion.div>
      </section>
    </main>
  )
}

export default Administration
