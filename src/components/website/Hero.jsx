
// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, ChevronRight, Play, X } from 'lucide-react'
// import { cn } from '@utils/cn'

// // ── Slides Data ───────────────────────────────────────────
// const slides = [
//   {
//     id: 1,
//     badge: 'Welcome to Our School',
//     heading: 'Nurturing Excellence,',
//     highlight: 'Building Futures',
//     subheading:
//       'At MayDay International School, every child is seen, valued, and empowered to discover their greatest potential.',
//     primaryCTA: { label: 'Student Portal', path: 'https://portal.maydayintschool.com/student', external: true },
//     secondaryCTA: { label: 'WhatsApp Us', path: 'https://wa.me/2341234567890', external: true },
//     bgImage: '/hero-slide-1.jpg',
//   },
//   {
//     id: 2,
//     badge: 'Academic Excellence',
//     heading: 'World-Class Education,',
//     highlight: 'Global Standards',
//     subheading:
//       'From Pre-Nursery to Secondary, our curriculum is designed to challenge, inspire, and develop every learner to their fullest capacity.',
//     primaryCTA: { label: 'Academics', path: '/academics', external: false },
//     secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
//     bgImage: '/hero-slide-2.jpg',
//   },
//   {
//     id: 3,
//     badge: 'Holistic Development',
//     heading: 'Beyond the Classroom,',
//     highlight: 'Into the Future',
//     subheading:
//       'Sports, ICT, arts, clubs, and cultural activities — we develop the complete child, equipping them for every challenge ahead.',
//     primaryCTA: { label: 'Specialties', path: '/specialties', external: false },
//     secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     bgImage: '/hero-slide-3.jpg',
//   },
//   {
//     id: 4,
//     badge: 'Modern Facilities',
//     heading: 'State-of-the-Art',
//     highlight: 'Learning Environment',
//     subheading:
//       'Well-equipped classrooms, science labs, computer rooms, library, and sports facilities that enhance the learning experience.',
//     primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
//     secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
//     bgImage: '/hero-slide-4.jpg',
//   },
//   {
//     id: 5,
//     badge: 'Join Our Family',
//     heading: 'Start Your Journey',
//     highlight: 'With Us Today',
//     subheading:
//       'Give your child the gift of quality education, strong moral values, and a supportive community that nurtures greatness.',
//     primaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     secondaryCTA: { label: 'Learn More', path: '/about', external: false },
//     bgImage: '/hero-slide-5.jpg',
//   },
// ]

// // ── Stats ─────────────────────────────────────────────────
// const stats = [
//   { value: '500+', label: 'Students' },
//   { value: '40+', label: 'Staff Members' },
//   { value: '10+', label: 'Years of Excellence' },
//   { value: '25+', label: 'Awards Won' },
// ]

// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0)
//   const [showVideo, setShowVideo] = useState(false)
//   const [isAnimating, setIsAnimating] = useState(false)

//   // Auto-slide
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext()
//     }, 4000)
//     return () => clearInterval(interval)
//   }, [activeSlide])

//   const goToSlide = (index) => {
//     if (isAnimating || index === activeSlide) return
//     setIsAnimating(true)
//     setActiveSlide(index)
//     setTimeout(() => setIsAnimating(false), 500)
//   }

//   const goToNext = () => {
//     goToSlide((activeSlide + 1) % slides.length)
//   }

//   const goToPrev = () => {
//     goToSlide(
//       activeSlide === 0 ? slides.length - 1 : activeSlide - 1
//     )
//   }

//   const slide = slides[activeSlide]

//   // Helper function to render CTA button
//   const renderCTA = (cta) => {
//     if (cta.external) {
//       return (
//         <a
//           href={cta.path}
//           target="_blank"
//           rel="noopener noreferrer"
//           className={`inline-flex items-center gap-2 ${
//             cta.label === 'Student Portal' || cta.label === 'Staff Portal'
//               ? 'bg-green-600 hover:bg-green-700'
//               : cta.label === 'WhatsApp Us'
//               ? 'bg-green-500 hover:bg-green-600'
//               : 'bg-yellow-600 hover:bg-yellow-700'
//           } text-white font-bold px-7 py-3.5 rounded-xl transition`}
//         >
//           {cta.label}
//           <ArrowRight className="w-4 h-4" />
//         </a>
//       )
//     }
//     return (
//       <Link
//         to={cta.path}
//         className={`inline-flex items-center gap-2 ${
//           cta.label === 'Academics' || cta.label === 'Specialties' || cta.label === 'Take a Tour' || cta.label === 'Contact Us'
//             ? 'bg-yellow-600 hover:bg-yellow-700'
//             : 'bg-white/10 hover:bg-white/20 border border-white/20'
//         } text-white font-bold px-7 py-3.5 rounded-xl transition`}
//       >
//         {cta.label}
//         <ChevronRight className="w-4 h-4" />
//       </Link>
//     )
//   }

//   return (
//     <>
//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

//         {/* 🖼️ Background Slideshow */}
//         <div
//           className="absolute inset-0 bg-cover bg-center transition-all duration-700"
//           style={{
//             backgroundImage: `url('${slides[activeSlide].bgImage}')`,
//           }}
//         >
//           {/* Dark overlays for readability - slightly reduced for clearer images */}
//           <div className="absolute inset-0 bg-black/50" />
//           <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
//           <div className="absolute inset-0 bg-blue-900/10" />
//         </div>

//         {/* Content Container */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//             {/* LEFT CONTENT - THICKER TEXT FOR BETTER VISIBILITY */}
//             <div
//               className={cn(
//                 'transition-all duration-500',
//                 isAnimating
//                   ? 'opacity-0 translate-y-4'
//                   : 'opacity-100 translate-y-0'
//               )}
//             >
//               <div className="inline-flex items-center gap-2 bg-yellow-600/30 border border-yellow-500/40 text-yellow-400 text-xs font-bold px-4 py-2 rounded-full uppercase tracking-widest mb-6 backdrop-blur-sm">
//                 <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
//                 {slide.badge}
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black text-white leading-tight mb-4 drop-shadow-lg">
//                 {slide.heading}{' '}
//                 <span className="text-yellow-400 block mt-1 drop-shadow-xl">
//                   {slide.highlight}
//                 </span>
//               </h1>

//               <p className="text-white text-lg lg:text-xl leading-relaxed mb-10 max-w-xl font-medium drop-shadow-md">
//                 {slide.subheading}
//               </p>

//               <div className="flex flex-wrap items-center gap-4">
//                 {/* Primary CTA */}
//                 {renderCTA(slide.primaryCTA)}

//                 {/* Secondary CTA */}
//                 {slide.secondaryCTA.external ? (
//                   <a
//                     href={slide.secondaryCTA.path}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl transition"
//                   >
//                     {slide.secondaryCTA.label}
//                     <ChevronRight className="w-4 h-4" />
//                   </a>
//                 ) : (
//                   <Link
//                     to={slide.secondaryCTA.path}
//                     className="inline-flex items-center gap-2 bg-white/20 hover:bg-white/30 backdrop-blur-sm border border-white/30 text-white font-bold px-7 py-3.5 rounded-xl transition"
//                   >
//                     {slide.secondaryCTA.label}
//                     <ChevronRight className="w-4 h-4" />
//                   </Link>
//                 )}

//                 {/* Watch School Tour Button */}
//                 <button
//                   onClick={() => setShowVideo(true)}
//                   className="inline-flex items-center gap-2 text-white text-sm font-semibold drop-shadow-md hover:text-yellow-400 transition"
//                 >
//                   <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
//                     <Play className="w-4 h-4 ml-0.5" />
//                   </div>
//                   Watch School Tour
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT STATS - Made more visible */}
//             <div className="hidden lg:grid grid-cols-2 gap-4">
//               {stats.map((stat) => (
//                 <div
//                   key={stat.label}
//                   className="bg-black/40 backdrop-blur-md border border-white/20 rounded-2xl p-6 text-center hover:bg-black/50 transition"
//                 >
//                   <p className="text-4xl lg:text-5xl font-black text-yellow-400 mb-1 drop-shadow-lg">
//                     {stat.value}
//                   </p>
//                   <p className="text-white text-sm font-semibold">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>

//         {/* NAVIGATION DOTS */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goToSlide(i)}
//               className={cn(
//                 'transition-all rounded-full',
//                 i === activeSlide
//                   ? 'w-8 h-3 bg-yellow-400'
//                   : 'w-3 h-3 bg-white/60 hover:bg-white/90'
//               )}
//             />
//           ))}
//         </div>

//         {/* NAV BUTTONS */}
//         <button
//           onClick={goToPrev}
//           className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white flex items-center justify-center transition z-20"
//         >
//           <ChevronRight className="rotate-180 w-5 h-5" />
//         </button>

//         <button
//           onClick={goToNext}
//           className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-black/40 hover:bg-black/60 backdrop-blur-sm rounded-full text-white flex items-center justify-center transition z-20"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>

//       </section>

//       {/* VIDEO MODAL */}
//       {showVideo && (
//         <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
//           <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden aspect-video">
//             <button
//               onClick={() => setShowVideo(false)}
//               className="absolute top-3 right-3 w-9 h-9 bg-white/10 rounded-full text-white hover:bg-white/20 transition"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             {/* Add your video embed here */}
//             <div className="flex items-center justify-center h-full text-white">
//               School Tour Video Coming Soon
//             </div>
//           </div>
//         </div>
//       )}
//     </>
//   )
// }

// export default Hero











































































import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ChevronRight, Play, X, GraduationCap, Users, Trophy, Calendar } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@utils/cn'

// ── Slides Data ───────────────────────────────────────────
const slides = [
  {
    id: 1,
    badge: 'WELCOME TO MAYDAY',
    heading: 'Nurturing Excellence,',
    highlight: 'Building Futures',
    subheading:
      'At MayDay International School, every child is seen, valued, and empowered to discover their greatest potential.',
    primaryCTA: { label: 'Student Portal', path: 'https://portal.maydayintschool.com/student', external: true },
    secondaryCTA: { label: 'WhatsApp Us', path: 'https://wa.me/2341234567890', external: true },
    bgImage: '/hero-slide-1.jpg',
  },
  {
    id: 2,
    badge: 'ACADEMIC EXCELLENCE',
    heading: 'World-Class Education,',
    highlight: 'Global Standards',
    subheading:
      'From Pre-Nursery to Secondary, our curriculum is designed to challenge, inspire, and develop every learner.',
    primaryCTA: { label: 'Academics', path: '/academics', external: false },
    secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
    bgImage: '/hero-slide-2.jpg',
  },
  {
    id: 3,
    badge: 'HOLISTIC DEVELOPMENT',
    heading: 'Beyond the Classroom,',
    highlight: 'Into the Future',
    subheading:
      'Sports, ICT, arts, clubs, and cultural activities — developing complete, confident individuals.',
    primaryCTA: { label: 'Specialties', path: '/specialties', external: false },
    secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
    bgImage: '/hero-slide-3.jpg',
  },
  {
    id: 4,
    badge: 'MODERN FACILITIES',
    heading: 'State-of-the-Art',
    highlight: 'Learning Environment',
    subheading:
      'Well-equipped classrooms, science labs, computer rooms, and sports facilities.',
    primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
    secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
    bgImage: '/hero-slide-4.jpg',
  },
  {
    id: 5,
    badge: 'JOIN OUR FAMILY',
    heading: 'Start Your Journey',
    highlight: 'With Us Today',
    subheading:
      'Give your child quality education, strong values, and a supportive community.',
    primaryCTA: { label: 'Contact Us', path: '/contact', external: false },
    secondaryCTA: { label: 'Learn More', path: '/about', external: false },
    bgImage: '/hero-slide-5.jpg',
  },
]

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-slide with slower speed (10 seconds for smooth transitions)
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 10000)
    return () => clearInterval(interval)
  }, [activeSlide])

  const goToSlide = (index) => {
    if (isAnimating || index === activeSlide) return
    setIsAnimating(true)
    setActiveSlide(index)
    setTimeout(() => setIsAnimating(false), 800)
  }

  const goToNext = () => {
    goToSlide((activeSlide + 1) % slides.length)
  }

  const goToPrev = () => {
    goToSlide(
      activeSlide === 0 ? slides.length - 1 : activeSlide - 1
    )
  }

  const slide = slides[activeSlide]

  // Variants for animations
  const contentVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
  }

  const badgeVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
  }

  const statCardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.1, duration: 0.5 }
    })
  }

  const stats = [
    { value: '500+', label: 'Students', icon: Users, color: 'from-blue-500 to-blue-600' },
    { value: '40+', label: 'Staff', icon: GraduationCap, color: 'from-green-500 to-green-600' },
    { value: '10+', label: 'Years', icon: Calendar, color: 'from-purple-500 to-purple-600' },
    { value: '25+', label: 'Awards', icon: Trophy, color: 'from-yellow-500 to-yellow-600' },
  ]

  return (
    <>
      {/* HERO SECTION - FULL WIDTH/EDGE TO EDGE */}
      <section className="relative min-h-screen w-full overflow-hidden">

        {/* BACKGROUND SLIDESHOW - Full width/height */}
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0, scale: 1.05 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 1.2, ease: 'easeInOut' }}
            className="absolute inset-0 w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url('${slide.bgImage}')`,
            }}
          >
            {/* Gradient overlay - lighter so text pops but images show */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
            <div className="absolute inset-0 bg-blue-900/20" />
          </motion.div>
        </AnimatePresence>

        {/* CONTENT CONTAINER - Full width */}
        <div className="relative w-full min-h-screen flex items-center">
          <div className="w-full px-4 sm:px-6 lg:px-8 py-20">

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

              {/* LEFT CONTENT - Animated */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={slide.id}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={contentVariants}
                  className="space-y-6"
                >
                  {/* Badge */}
                  <motion.div variants={badgeVariants}>
                    <div className="inline-flex items-center gap-2 bg-yellow-600/30 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
                      <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
                      {slide.badge}
                    </div>
                  </motion.div>

                  {/* Heading */}
                  <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1]">
                    {slide.heading}{' '}
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 block mt-2 drop-shadow-2xl">
                      {slide.highlight}
                    </span>
                  </h1>

                  {/* Subheading */}
                  <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium drop-shadow-lg tracking-wide">
                    {slide.subheading}
                  </p>

                  {/* CTA Buttons */}
                  <div className="flex flex-wrap gap-4 pt-4">
                    {/* Primary CTA */}
                    {slide.primaryCTA.external ? (
                      <a
                        href={slide.primaryCTA.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        {slide.primaryCTA.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </a>
                    ) : (
                      <Link
                        to={slide.primaryCTA.path}
                        className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
                      >
                        {slide.primaryCTA.label}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </Link>
                    )}

                    {/* Secondary CTA */}
                    {slide.secondaryCTA.external ? (
                      <a
                        href={slide.secondaryCTA.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {slide.secondaryCTA.label}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </a>
                    ) : (
                      <Link
                        to={slide.secondaryCTA.path}
                        className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
                      >
                        {slide.secondaryCTA.label}
                        <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                      </Link>
                    )}
                  </div>

                  {/* Video Tour Button */}
                  <button
                    onClick={() => setShowVideo(true)}
                    className="inline-flex items-center gap-3 text-white hover:text-yellow-400 transition-colors duration-300 group mt-4"
                  >
                    <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300">
                      <Play className="w-5 h-5 ml-0.5" />
                    </div>
                    <span className="font-semibold tracking-wide">Watch School Tour</span>
                  </button>
                </motion.div>
              </AnimatePresence>

              {/* RIGHT SIDE - STATS CARDS (New stylish design) */}
              <div className="hidden lg:grid grid-cols-2 gap-5">
                {stats.map((stat, index) => {
                  const Icon = stat.icon
                  return (
                    <motion.div
                      key={stat.label}
                      custom={index}
                      initial="hidden"
                      animate="visible"
                      variants={statCardVariants}
                      whileHover={{ y: -8, scale: 1.02 }}
                      className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur-md bg-black/30 border border-white/20 hover:border-yellow-500/50 transition-all duration-300"
                    >
                      {/* Background gradient on hover */}
                      <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      
                      <p className="text-4xl font-black text-yellow-400 mb-1 drop-shadow-lg">
                        {stat.value}
                      </p>
                      <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
                        {stat.label}
                      </p>
                    </motion.div>
                  )
                })}
              </div>

            </div>
          </div>
        </div>

        {/* NAVIGATION DOTS - Bottom center */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={cn(
                'transition-all duration-300 rounded-full',
                i === activeSlide
                  ? 'w-10 h-2.5 bg-yellow-400'
                  : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
              )}
            />
          ))}
        </div>

        {/* PREV/NEXT BUTTONS - Side navigation */}
        <button
          onClick={goToPrev}
          className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white flex items-center justify-center transition-all duration-300 z-20 hover:scale-110"
        >
          <ChevronRight className="rotate-180 w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white flex items-center justify-center transition-all duration-300 z-20 hover:scale-110"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </section>

      {/* VIDEO MODAL */}
      <AnimatePresence>
        {showVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video"
            >
              <button
                onClick={() => setShowVideo(false)}
                className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center transition z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="flex items-center justify-center h-full text-white">
                <p className="text-xl">School Tour Video Coming Soon 🎥</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Hero