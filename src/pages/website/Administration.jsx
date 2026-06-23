

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































































































































































import { useRef } from 'react'
import { motion, useScroll, useTransform, useReducedMotion } from 'framer-motion'
import { Mail, Phone, MessageCircle } from 'lucide-react'

// Keep your existing image imports — swap these back in your real project
import directorImg from '@assets/images/staff/leadership/director.jpg'
import headTeacherImg from '@assets/images/staff/leadership/headteacher.jpg'
import deputyHeadImg from '@assets/images/staff/leadership/deputyhead.jpg'

const leadershipData = [
  {
    id: 1,
    index: '01',
    full_name: 'Hon. Mr. Chiude Romanus',
    role: 'Director',
    qualification: 'LL.B, BL, MBA',
    bio: 'A distinguished educational philanthropist committed to raising exceptional leaders through quality education and moral excellence. His vision shapes every part of how the school defines achievement — not as a score, but as a standard of character carried for life.',
    quote: 'We are not building a school. We are building the people who will rebuild everything else.',
    image: directorImg,
    email: 'director@mayday.edu.ng',
    phone: '+234 801 234 5678',
    whatsapp: '2348012345678',
  },
  {
    id: 2,
    index: '02',
    full_name: 'Mrs. Chinwe P. Okafor',
    role: 'Head Teacher',
    qualification: 'M.Ed. Educational Administration',
    bio: 'A passionate educator with a heart for excellence, dedicated to nurturing young minds and fostering distinction. She leads the day-to-day life of the school with the conviction that discipline and warmth are not opposites, but partners.',
    quote: 'Every child remembers one teacher who believed in them first. I want that to be true here, every single day.',
    image: headTeacherImg,
    email: 'headteacher@mayday.edu.ng',
    phone: '+234 802 345 6789',
    whatsapp: '2348023456789',
  },
  {
    id: 3,
    index: '03',
    full_name: 'Mrs. Chika Modesta',
    role: 'Deputy Head Teacher',
    qualification: 'M.Ed. Curriculum Studies',
    bio: 'An innovative curriculum specialist committed to academic rigor, teacher development, and student success. Her work behind the scenes — in lesson design, staff mentoring, and standards — is what makes consistency possible across every classroom.',
    quote: 'Curriculum is a promise. Our job is to make sure the school keeps it, term after term.',
    image: deputyHeadImg,
    email: 'deputy@mayday.edu.ng',
    phone: '+234 803 456 7890',
    whatsapp: '2348034567890',
  },
]

/* ---------------------------------------------------------------------- */

const HeroSection = () => (
  <section className="admin-hero">
    <div className="admin-hero__inner">
      <motion.span
        className="admin-eyebrow"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: 'easeOut' }}
      >
        Leadership at MayDay International School
      </motion.span>

      <motion.h1
        className="admin-hero__title"
        initial={{ opacity: 0, y: 28 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9, ease: [0.21, 0.79, 0.31, 0.99], delay: 0.15 }}
      >
        The people who
        <br />
        <span className="admin-hero__title--italic">carry the standard</span>
      </motion.h1>

      <motion.div
        className="admin-hero__rule"
        initial={{ width: 0, opacity: 0 }}
        animate={{ width: 64, opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.5, ease: 'easeOut' }}
      />

      <motion.p
        className="admin-hero__dek"
        initial={{ opacity: 0, y: 16 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.55, ease: 'easeOut' }}
      >
        Three administrators, one shared conviction: that academic rigour and moral
        formation belong in the same sentence. Here is who leads that work, and why.
      </motion.p>
    </div>
  </section>
)

/* ---------------------------------------------------------------------- */

const ContactAction = ({ icon: Icon, label, onClick }) => (
  <button type="button" className="admin-action" onClick={onClick} title={label} aria-label={label}>
    <Icon size={16} strokeWidth={1.75} />
  </button>
)

const LeaderRow = ({ member, reversed }) => {
  const ref = useRef(null)
  const prefersReducedMotion = useReducedMotion()
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  })
  const portraitY = useTransform(scrollYProgress, [0, 1], prefersReducedMotion ? [0, 0] : [-28, 28])

  const handleEmail = () => { window.location.href = `mailto:${member.email}` }
  const handlePhone = () => { window.location.href = `tel:${member.phone}` }
  const handleWhatsApp = () => {
    const message = `Hello, I'm interested in contacting ${member.full_name} (${member.role}) at MayDay International School.`
    window.open(`https://wa.me/${member.whatsapp}?text=${encodeURIComponent(message)}`, '_blank')
  }

  return (
    <div ref={ref} className={`admin-row ${reversed ? 'admin-row--reversed' : ''}`}>
      <motion.div
        className="admin-row__portrait-col"
        initial={{ opacity: 0, x: reversed ? 64 : -64 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.85, ease: [0.21, 0.79, 0.31, 0.99] }}
      >
        <div className="admin-portrait-frame">
          <motion.img
            src={member.image}
            alt={member.full_name}
            className="admin-portrait-frame__img"
            style={{ y: portraitY }}
          />
        </div>
      </motion.div>

      <motion.div
        className="admin-row__text-col"
        initial={{ opacity: 0, x: reversed ? -48 : 48 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, margin: '-15% 0px' }}
        transition={{ duration: 0.85, ease: [0.21, 0.79, 0.31, 0.99], delay: 0.1 }}
      >
        <span className="admin-row__index">{member.index}</span>
        <span className="admin-row__role">{member.role}</span>
        <h2 className="admin-row__name">{member.full_name}</h2>
        <p className="admin-row__qualification">{member.qualification}</p>
        <p className="admin-row__bio">{member.bio}</p>

        <blockquote className="admin-quote">
          <span className="admin-quote__mark" aria-hidden="true">&ldquo;</span>
          <p className="admin-quote__text">{member.quote}</p>
        </blockquote>

        <div className="admin-row__actions">
          <ContactAction icon={Mail} label={`Email ${member.full_name}`} onClick={handleEmail} />
          <ContactAction icon={Phone} label={`Call ${member.full_name}`} onClick={handlePhone} />
          <ContactAction icon={MessageCircle} label={`WhatsApp ${member.full_name}`} onClick={handleWhatsApp} />
        </div>
      </motion.div>
    </div>
  )
}

/* ---------------------------------------------------------------------- */

const ClosingCTA = () => (
  <section className="admin-cta">
    <motion.div
      className="admin-cta__inner"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-10% 0px' }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      <span className="admin-eyebrow admin-eyebrow--center">Speak with leadership</span>
      <h2 className="admin-cta__title">Get in touch with our leadership team</h2>
      <button
        type="button"
        className="admin-cta__button"
        onClick={() => { window.location.href = 'mailto:director@mayday.edu.ng' }}
      >
        Contact the office
      </button>
    </motion.div>
  </section>
)

/* ---------------------------------------------------------------------- */

const Administration = () => {
  return (
    <main className="admin-page">
      <HeroSection />

      <section className="admin-rows">
        {leadershipData.map((member, i) => (
          <LeaderRow key={member.id} member={member} reversed={i % 2 === 1} />
        ))}
      </section>

      <ClosingCTA />

      <style>{`
        .admin-page {
          background: var(--surface-page);
          font-family: var(--font-body);
          color: var(--text-primary);
          overflow-x: hidden;
        }

        /* ---------------- Hero ---------------- */
        .admin-hero {
          position: relative;
          padding: var(--space-8) var(--space-4) var(--space-7);
          background: linear-gradient(180deg, var(--surface-wash-start) 0%, var(--surface-wash-end) 70%);
        }
        .admin-hero__inner {
          max-width: 56rem;
          margin: 0 auto;
        }
        .admin-eyebrow {
          display: block;
          font-family: var(--font-body);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: var(--tracking-eyebrow);
          text-transform: uppercase;
          color: var(--text-eyebrow);
          margin-bottom: var(--space-3);
        }
        .admin-hero__title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(2.75rem, 7vw, 5.5rem);
          line-height: 1.04;
          letter-spacing: -0.01em;
          color: var(--text-primary);
          margin: 0;
        }
        .admin-hero__title--italic {
          font-style: italic;
          font-weight: 400;
          color: var(--accent-primary);
        }
        .admin-hero__rule {
          height: 2px;
          background: var(--border-divider);
          margin: var(--space-4) 0;
        }
        .admin-hero__dek {
          font-family: var(--font-body);
          font-size: 1.0625rem;
          line-height: 1.65;
          color: var(--text-secondary);
          max-width: 38rem;
          margin: 0;
        }

        /* ---------------- Rows ---------------- */
        .admin-rows {
          max-width: 72rem;
          margin: 0 auto;
          padding: 0 var(--space-4) var(--space-6);
        }
        .admin-row {
          display: grid;
          grid-template-columns: minmax(0, 0.85fr) minmax(0, 1.15fr);
          gap: var(--space-6);
          align-items: center;
          padding: var(--space-7) 0;
          border-bottom: 1px solid var(--border-hairline);
        }
        .admin-row:last-child {
          border-bottom: none;
        }
        .admin-row--reversed {
          grid-template-columns: minmax(0, 1.15fr) minmax(0, 0.85fr);
        }
        .admin-row--reversed .admin-row__portrait-col {
          grid-column: 2;
          grid-row: 1;
        }
        .admin-row--reversed .admin-row__text-col {
          grid-column: 1;
          grid-row: 1;
        }

        .admin-portrait-frame {
          position: relative;
          aspect-ratio: 3 / 4;
          overflow: hidden;
          border: 1px solid var(--border-portrait);
          box-shadow: var(--shadow-portrait);
          background: var(--surface-alt);
        }
        .admin-portrait-frame::after {
          content: '';
          position: absolute;
          inset: 0;
          border: 1px solid var(--border-portrait);
          pointer-events: none;
        }
        .admin-portrait-frame__img {
          position: absolute;
          inset: -6% 0;
          width: 100%;
          height: 112%;
          object-fit: cover;
          object-position: center 22%;
        }

        .admin-row__index {
          display: block;
          font-family: var(--font-display);
          font-weight: 400;
          font-size: 1.5rem;
          color: var(--text-index);
          margin-bottom: var(--space-2);
        }
        .admin-row__role {
          display: block;
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: var(--tracking-label);
          text-transform: uppercase;
          color: var(--text-eyebrow);
          margin-bottom: var(--space-1);
        }
        .admin-row__name {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.875rem, 3.2vw, 2.5rem);
          line-height: 1.12;
          color: var(--text-primary);
          margin: 0 0 0.5rem;
        }
        .admin-row__qualification {
          font-family: var(--font-display);
          font-style: italic;
          font-size: 1.0625rem;
          color: var(--text-secondary);
          margin: 0 0 var(--space-3);
        }
        .admin-row__bio {
          font-size: 1rem;
          line-height: 1.7;
          color: var(--text-secondary);
          margin: 0 0 var(--space-4);
          max-width: 34rem;
        }

        .admin-quote {
          position: relative;
          margin: 0 0 var(--space-4);
          padding-left: var(--space-4);
          border-left: 2px solid var(--border-divider);
        }
        .admin-quote__mark {
          position: absolute;
          left: -0.35rem;
          top: -1.6rem;
          font-family: var(--font-display);
          font-size: 4.5rem;
          line-height: 1;
          color: var(--accent-quote-mark);
          font-weight: 500;
          user-select: none;
        }
        .admin-quote__text {
          font-family: var(--font-display);
          font-style: italic;
          font-weight: 400;
          font-size: 1.25rem;
          line-height: 1.5;
          color: var(--text-primary);
          margin: 0;
        }

        .admin-row__actions {
          display: flex;
          align-items: center;
          gap: var(--space-2);
        }
        .admin-action {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          width: 2.5rem;
          height: 2.5rem;
          border-radius: 50%;
          border: 1px solid var(--action-border);
          background: var(--action-bg);
          color: var(--action-fg);
          cursor: pointer;
          transition: background 0.25s ease, color 0.25s ease, border-color 0.25s ease, transform 0.25s ease;
        }
        .admin-action:hover {
          background: var(--action-bg-hover);
          color: var(--action-fg-hover);
          border-color: var(--action-border-hover);
          transform: translateY(-2px);
        }
        .admin-action:focus-visible {
          outline: 2px solid var(--accent-secondary);
          outline-offset: 2px;
        }

        /* ---------------- CTA ---------------- */
        .admin-cta {
          background: var(--surface-alt);
          padding: var(--space-7) var(--space-4);
          text-align: center;
        }
        .admin-cta__inner {
          max-width: 36rem;
          margin: 0 auto;
        }
        .admin-eyebrow--center {
          text-align: center;
        }
        .admin-cta__title {
          font-family: var(--font-display);
          font-weight: 500;
          font-size: clamp(1.75rem, 4vw, 2.5rem);
          line-height: 1.2;
          color: var(--text-primary);
          margin: 0 0 var(--space-4);
        }
        .admin-cta__button {
          font-family: var(--font-body);
          font-size: 0.9375rem;
          font-weight: 600;
          letter-spacing: 0.02em;
          color: var(--button-primary-fg);
          background: var(--button-primary-bg);
          border: none;
          padding: 0.95rem 2.25rem;
          cursor: pointer;
          transition: background 0.25s ease, transform 0.25s ease;
        }
        .admin-cta__button:hover {
          background: var(--button-primary-bg-hover);
          transform: translateY(-2px);
        }
        .admin-cta__button:focus-visible {
          outline: 2px solid var(--accent-secondary);
          outline-offset: 3px;
        }

        /* ---------------- Mobile ---------------- */
        @media (max-width: 860px) {
          .admin-hero {
            padding: var(--space-6) var(--space-3) var(--space-5);
          }
          .admin-row,
          .admin-row--reversed {
            grid-template-columns: 1fr;
            gap: var(--space-4);
            padding: var(--space-6) 0;
          }
          .admin-row--reversed .admin-row__portrait-col,
          .admin-row--reversed .admin-row__text-col {
            grid-column: 1;
          }
          .admin-row__portrait-col {
            grid-row: 1 !important;
          }
          .admin-row__text-col {
            grid-row: 2 !important;
          }
          .admin-portrait-frame {
            max-width: 22rem;
            margin: 0 auto;
          }
          .admin-row__text-col {
            text-align: left;
          }
          .admin-quote__mark {
            font-size: 3.5rem;
            top: -1.2rem;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .admin-portrait-frame__img {
            transition: none !important;
          }
        }
      `}</style>
    </main>
  )
}

export default Administration