








// import { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, ChevronRight, Play, X, GraduationCap, Users, Trophy, Calendar } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { cn } from '@utils/cn'

// // ── Slides Data ───────────────────────────────────────────
// const slides = [
//   {
//     id: 1,
//     badge: 'WELCOME TO MAYDAY',
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
//     badge: 'ACADEMIC EXCELLENCE',
//     heading: 'World-Class Education,',
//     highlight: 'Global Standards',
//     subheading:
//       'From Pre-Nursery to Secondary, our curriculum is designed to challenge, inspire, and develop every learner.',
//     primaryCTA: { label: 'Academics', path: '/academics', external: false },
//     secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
//     bgImage: '/hero-slide-2.jpg',
//   },
//   {
//     id: 3,
//     badge: 'HOLISTIC DEVELOPMENT',
//     heading: 'Beyond the Classroom,',
//     highlight: 'Into the Future',
//     subheading:
//       'Sports, ICT, arts, clubs, and cultural activities — developing complete, confident individuals.',
//     primaryCTA: { label: 'Specialties', path: '/specialties', external: false },
//     secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     bgImage: '/hero-slide-3.jpg',
//   },
//   {
//     id: 4,
//     badge: 'MODERN FACILITIES',
//     heading: 'State-of-the-Art',
//     highlight: 'Learning Environment',
//     subheading:
//       'Well-equipped classrooms, science labs, computer rooms, and sports facilities.',
//     primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
//     secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
//     bgImage: '/hero-slide-4.jpg',
//   },
//   {
//     id: 5,
//     badge: 'JOIN OUR FAMILY',
//     heading: 'Start Your Journey',
//     highlight: 'With Us Today',
//     subheading:
//       'Give your child quality education, strong values, and a supportive community.',
//     primaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     secondaryCTA: { label: 'Learn More', path: '/about', external: false },
//     bgImage: '/hero-slide-5.jpg',
//   },
// ]

// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0)
//   const [showVideo, setShowVideo] = useState(false)
//   const [isAnimating, setIsAnimating] = useState(false)

//   // Auto-slide with slower speed (10 seconds for smooth transitions)
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext()
//     }, 10000)
//     return () => clearInterval(interval)
//   }, [activeSlide])

//   const goToSlide = (index) => {
//     if (isAnimating || index === activeSlide) return
//     setIsAnimating(true)
//     setActiveSlide(index)
//     setTimeout(() => setIsAnimating(false), 800)
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

//   // Variants for animations
//   const contentVariants = {
//     hidden: { opacity: 0, y: 30 },
//     visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//     exit: { opacity: 0, y: -20, transition: { duration: 0.4 } }
//   }

//   const badgeVariants = {
//     hidden: { opacity: 0, scale: 0.9 },
//     visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
//   }

//   const statCardVariants = {
//     hidden: { opacity: 0, y: 20 },
//     visible: (i) => ({
//       opacity: 1,
//       y: 0,
//       transition: { delay: i * 0.1, duration: 0.5 }
//     })
//   }

//   const stats = [
//     { value: '500+', label: 'Students', icon: Users, color: 'from-blue-500 to-blue-600' },
//     { value: '40+', label: 'Staff', icon: GraduationCap, color: 'from-green-500 to-green-600' },
//     { value: '10+', label: 'Years', icon: Calendar, color: 'from-purple-500 to-purple-600' },
//     { value: '25+', label: 'Awards', icon: Trophy, color: 'from-yellow-500 to-yellow-600' },
//   ]

//   return (
//     <>
//       {/* HERO SECTION - FULL WIDTH/EDGE TO EDGE */}
//       <section className="relative min-h-screen w-full overflow-hidden">

//         {/* BACKGROUND SLIDESHOW - Full width/height */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.id}
//             initial={{ opacity: 0, scale: 1.05 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0, scale: 1.05 }}
//             transition={{ duration: 1.2, ease: 'easeInOut' }}
//             className="absolute inset-0 w-full h-full bg-cover bg-center"
//             style={{
//               backgroundImage: `url('${slide.bgImage}')`,
//             }}
//           >
//             {/* Gradient overlay - lighter so text pops but images show */}
//             <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-black/50" />
//             <div className="absolute inset-0 bg-blue-900/20" />
//           </motion.div>
//         </AnimatePresence>

//         {/* CONTENT CONTAINER - Full width */}
//         <div className="relative w-full min-h-screen flex items-center">
//           <div className="w-full px-4 sm:px-6 lg:px-8 py-20">

//             {/* Main Content Grid */}
//             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-7xl mx-auto">

//               {/* LEFT CONTENT - Animated */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={slide.id}
//                   initial="hidden"
//                   animate="visible"
//                   exit="exit"
//                   variants={contentVariants}
//                   className="space-y-6"
//                 >
//                   {/* Badge */}
//                   <motion.div variants={badgeVariants}>
//                     <div className="inline-flex items-center gap-2 bg-yellow-600/30 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 text-xs font-bold px-5 py-2.5 rounded-full uppercase tracking-wider">
//                       <span className="w-2 h-2 bg-yellow-400 rounded-full animate-pulse" />
//                       {slide.badge}
//                     </div>
//                   </motion.div>

//                   {/* Heading */}
//                   <h1 className="text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-black text-white leading-[1.1]">
//                     {slide.heading}{' '}
//                     <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-300 block mt-2 drop-shadow-2xl">
//                       {slide.highlight}
//                     </span>
//                   </h1>

//                   {/* Subheading */}
//                   <p className="text-white/95 text-base sm:text-lg lg:text-xl leading-relaxed max-w-xl font-medium drop-shadow-lg tracking-wide">
//                     {slide.subheading}
//                   </p>

//                   {/* CTA Buttons */}
//                   <div className="flex flex-wrap gap-4 pt-4">
//                     {/* Primary CTA */}
//                     {slide.primaryCTA.external ? (
//                       <a
//                         href={slide.primaryCTA.path}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
//                       >
//                         {slide.primaryCTA.label}
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//                       </a>
//                     ) : (
//                       <Link
//                         to={slide.primaryCTA.path}
//                         className="group inline-flex items-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 hover:from-yellow-600 hover:to-yellow-700 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1"
//                       >
//                         {slide.primaryCTA.label}
//                         <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//                       </Link>
//                     )}

//                     {/* Secondary CTA */}
//                     {slide.secondaryCTA.external ? (
//                       <a
//                         href={slide.secondaryCTA.path}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                         className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
//                       >
//                         {slide.secondaryCTA.label}
//                         <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//                       </a>
//                     ) : (
//                       <Link
//                         to={slide.secondaryCTA.path}
//                         className="group inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/30 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:-translate-y-1"
//                       >
//                         {slide.secondaryCTA.label}
//                         <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition" />
//                       </Link>
//                     )}
//                   </div>

//                   {/* Video Tour Button */}
//                   <button
//                     onClick={() => setShowVideo(true)}
//                     className="inline-flex items-center gap-3 text-white hover:text-yellow-400 transition-colors duration-300 group mt-4"
//                   >
//                     <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:bg-yellow-500 transition-all duration-300">
//                       <Play className="w-5 h-5 ml-0.5" />
//                     </div>
//                     <span className="font-semibold tracking-wide">Watch School Tour</span>
//                   </button>
//                 </motion.div>
//               </AnimatePresence>

//               {/* RIGHT SIDE - STATS CARDS (New stylish design) */}
//               <div className="hidden lg:grid grid-cols-2 gap-5">
//                 {stats.map((stat, index) => {
//                   const Icon = stat.icon
//                   return (
//                     <motion.div
//                       key={stat.label}
//                       custom={index}
//                       initial="hidden"
//                       animate="visible"
//                       variants={statCardVariants}
//                       whileHover={{ y: -8, scale: 1.02 }}
//                       className="group relative overflow-hidden rounded-2xl p-6 backdrop-blur-md bg-black/30 border border-white/20 hover:border-yellow-500/50 transition-all duration-300"
//                     >
//                       {/* Background gradient on hover */}
//                       <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      
//                       <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg`}>
//                         <Icon className="w-6 h-6 text-white" />
//                       </div>
                      
//                       <p className="text-4xl font-black text-yellow-400 mb-1 drop-shadow-lg">
//                         {stat.value}
//                       </p>
//                       <p className="text-white/80 text-sm font-medium uppercase tracking-wider">
//                         {stat.label}
//                       </p>
//                     </motion.div>
//                   )
//                 })}
//               </div>

//             </div>
//           </div>
//         </div>

//         {/* NAVIGATION DOTS - Bottom center */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3 z-20">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goToSlide(i)}
//               className={cn(
//                 'transition-all duration-300 rounded-full',
//                 i === activeSlide
//                   ? 'w-10 h-2.5 bg-yellow-400'
//                   : 'w-2.5 h-2.5 bg-white/50 hover:bg-white/80'
//               )}
//             />
//           ))}
//         </div>

//         {/* PREV/NEXT BUTTONS - Side navigation */}
//         <button
//           onClick={goToPrev}
//           className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white flex items-center justify-center transition-all duration-300 z-20 hover:scale-110"
//         >
//           <ChevronRight className="rotate-180 w-5 h-5" />
//         </button>

//         <button
//           onClick={goToNext}
//           className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 lg:w-12 lg:h-12 bg-black/30 hover:bg-black/50 backdrop-blur-sm rounded-full text-white flex items-center justify-center transition-all duration-300 z-20 hover:scale-110"
//         >
//           <ChevronRight className="w-5 h-5" />
//         </button>

//       </section>

//       {/* VIDEO MODAL */}
//       <AnimatePresence>
//         {showVideo && (
//           <motion.div
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//             className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
//           >
//             <motion.div
//               initial={{ scale: 0.9, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1 }}
//               exit={{ scale: 0.9, opacity: 0 }}
//               className="relative w-full max-w-4xl bg-black rounded-2xl overflow-hidden aspect-video"
//             >
//               <button
//                 onClick={() => setShowVideo(false)}
//                 className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center transition z-10"
//               >
//                 <X className="w-5 h-5" />
//               </button>
//               <div className="flex items-center justify-center h-full text-white">
//                 <p className="text-xl">School Tour Video Coming Soon 🎥</p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Hero


































































































































































// import { useState, useEffect, useRef } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, Play, X, GraduationCap, Users, Trophy, Calendar } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { cn } from '@utils/cn'

// // ── Google Fonts injection (Cormorant Garamond + Outfit) ──────────────────────
// const FontLoader = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
//   `}</style>
// )

// // ── Slides Data ───────────────────────────────────────────────────────────────
// const slides = [
//   {
//     id: 1,
//     index: '01',
//     eyebrow: 'Welcome to MayDay',
//     heading: 'Nurturing Excellence,',
//     highlight: 'Building Futures',
//     subheading:
//       'Every child is seen, valued, and empowered to discover their greatest potential.',
//     primaryCTA: { label: 'Student Portal', path: 'https://portal.maydayintschool.com/student', external: true },
//     secondaryCTA: { label: 'WhatsApp Us', path: 'https://wa.me/2341234567890', external: true },
//     bgImage: '/hero-slide-1.jpg',
//   },
//   {
//     id: 2,
//     index: '02',
//     eyebrow: 'Academic Excellence',
//     heading: 'World-Class Education,',
//     highlight: 'Global Standards',
//     subheading:
//       'From Pre-Nursery to Secondary, our curriculum is designed to challenge, inspire, and develop every learner.',
//     primaryCTA: { label: 'Explore Academics', path: '/academics', external: false },
//     secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
//     bgImage: '/hero-slide-2.jpg',
//   },
//   {
//     id: 3,
//     index: '03',
//     eyebrow: 'Holistic Development',
//     heading: 'Beyond the Classroom,',
//     highlight: 'Into the Future',
//     subheading:
//       'Sports, ICT, arts, clubs, and cultural activities — developing complete, confident individuals.',
//     primaryCTA: { label: 'Our Specialties', path: '/specialties', external: false },
//     secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     bgImage: '/hero-slide-3.jpg',
//   },
//   {
//     id: 4,
//     index: '04',
//     eyebrow: 'Modern Facilities',
//     heading: 'State-of-the-Art',
//     highlight: 'Learning Environment',
//     subheading:
//       'Well-equipped classrooms, science labs, computer rooms, and premium sports facilities.',
//     primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
//     secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
//     bgImage: '/hero-slide-4.jpg',
//   },
//   {
//     id: 5,
//     index: '05',
//     eyebrow: 'Join Our Family',
//     heading: 'Start Your Journey',
//     highlight: 'With Us Today',
//     subheading:
//       'Give your child quality education, strong values, and a supportive community that lasts a lifetime.',
//     primaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     secondaryCTA: { label: 'About Us', path: '/about', external: false },
//     bgImage: '/hero-slide-5.jpg',
//   },
// ]

// const stats = [
//   { value: '500', label: 'Students Enrolled', icon: Users },
//   { value: '40',  label: 'Expert Staff',      icon: GraduationCap },
//   { value: '10',  label: 'Years of Excellence',icon: Calendar },
//   { value: '25',  label: 'Awards Won',         icon: Trophy },
// ]

// // ── Inline CSS (no Tailwind needed for custom vars) ───────────────────────────
// const styles = `
//   .hero-root {
//     --gold:        #C9A451;
//     --gold-light:  #E8C472;
//     --gold-dim:    rgba(201,164,81,0.15);
//     --navy:        #05091A;
//     --navy-mid:    rgba(5,9,26,0.55);
//     --white:       #F8F5EE;
//     --white-dim:   rgba(248,245,238,0.65);
//     font-family: 'Outfit', sans-serif;
//   }

//   /* ── background ── */
//   .hero-bg {
//     position: absolute; inset: 0;
//     background-size: cover; background-position: center;
//     will-change: transform;
//   }
//   .hero-bg-overlay {
//     position: absolute; inset: 0;
//     background: linear-gradient(
//       105deg,
//       rgba(5,9,26,0.88) 0%,
//       rgba(5,9,26,0.60) 45%,
//       rgba(5,9,26,0.30) 100%
//     );
//   }
//   .hero-bg-noise {
//     position: absolute; inset: 0;
//     background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.75' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.03'/%3E%3C/svg%3E");
//     opacity: 0.4; pointer-events: none;
//   }

//   /* ── gold rule ── */
//   .gold-rule {
//     display: inline-block; width: 48px; height: 2px;
//     background: linear-gradient(90deg, var(--gold), var(--gold-light));
//     border-radius: 2px;
//   }

//   /* ── eyebrow ── */
//   .eyebrow {
//     display: flex; align-items: center; gap: 12px;
//     color: var(--gold); font-size: 11px; font-weight: 600;
//     letter-spacing: 0.2em; text-transform: uppercase;
//   }

//   /* ── heading ── */
//   .hero-h1 {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: clamp(3rem, 6vw, 6.5rem);
//     font-weight: 600; line-height: 1.05;
//     color: var(--white); letter-spacing: -0.01em;
//   }
//   .hero-h1 .highlight {
//     font-style: italic;
//     background: linear-gradient(135deg, var(--gold-light) 0%, var(--gold) 100%);
//     -webkit-background-clip: text; -webkit-text-fill-color: transparent;
//     background-clip: text;
//     display: block;
//   }

//   /* ── subheading ── */
//   .hero-sub {
//     color: var(--white-dim);
//     font-size: clamp(0.9rem, 1.4vw, 1.1rem);
//     line-height: 1.75; font-weight: 300; max-width: 480px;
//   }

//   /* ── primary button ── */
//   .btn-primary {
//     position: relative; overflow: hidden;
//     display: inline-flex; align-items: center; gap: 10px;
//     padding: 16px 32px; border-radius: 4px;
//     background: var(--gold);
//     color: var(--navy); font-weight: 600; font-size: 14px;
//     letter-spacing: 0.06em; text-transform: uppercase;
//     text-decoration: none; border: none; cursor: pointer;
//     transition: box-shadow 0.3s, transform 0.3s;
//   }
//   .btn-primary::before {
//     content: ''; position: absolute; inset: 0;
//     background: linear-gradient(135deg, rgba(255,255,255,0.2) 0%, transparent 60%);
//     transform: translateX(-100%);
//     transition: transform 0.4s ease;
//   }
//   .btn-primary:hover::before { transform: translateX(0); }
//   .btn-primary:hover {
//     box-shadow: 0 12px 40px rgba(201,164,81,0.4);
//     transform: translateY(-2px);
//   }
//   .btn-primary svg { transition: transform 0.3s; }
//   .btn-primary:hover svg { transform: translateX(4px); }

//   /* ── ghost button ── */
//   .btn-ghost {
//     display: inline-flex; align-items: center; gap: 10px;
//     padding: 15px 30px; border-radius: 4px;
//     background: transparent;
//     border: 1px solid rgba(248,245,238,0.25);
//     color: var(--white); font-weight: 400; font-size: 14px;
//     letter-spacing: 0.06em; text-transform: uppercase;
//     text-decoration: none; cursor: pointer;
//     transition: border-color 0.3s, background 0.3s, transform 0.3s;
//   }
//   .btn-ghost:hover {
//     border-color: var(--gold);
//     background: var(--gold-dim);
//     transform: translateY(-2px);
//   }

//   /* ── video button ── */
//   .btn-video {
//     display: inline-flex; align-items: center; gap: 14px;
//     background: none; border: none; cursor: pointer;
//     color: var(--white-dim); font-size: 13px;
//     letter-spacing: 0.1em; text-transform: uppercase;
//     font-family: 'Outfit', sans-serif; font-weight: 400;
//     transition: color 0.3s;
//     padding: 0;
//   }
//   .btn-video:hover { color: var(--gold); }
//   .btn-video:hover .play-ring { border-color: var(--gold); }
//   .btn-video:hover .play-fill { background: var(--gold); }
//   .play-ring {
//     width: 48px; height: 48px; border-radius: 50%;
//     border: 1px solid rgba(248,245,238,0.3);
//     display: flex; align-items: center; justify-content: center;
//     transition: border-color 0.3s;
//     flex-shrink: 0;
//   }
//   .play-fill {
//     width: 36px; height: 36px; border-radius: 50%;
//     background: rgba(248,245,238,0.1); backdrop-filter: blur(4px);
//     display: flex; align-items: center; justify-content: center;
//     transition: background 0.3s;
//   }

//   /* ── stat card ── */
//   .stat-card {
//     padding: 28px 24px;
//     background: rgba(5,9,26,0.45);
//     backdrop-filter: blur(16px);
//     border: 1px solid rgba(201,164,81,0.18);
//     border-radius: 6px;
//     transition: border-color 0.3s, transform 0.3s;
//   }
//   .stat-card:hover {
//     border-color: rgba(201,164,81,0.5);
//     transform: translateY(-6px);
//   }
//   .stat-divider {
//     width: 28px; height: 1.5px;
//     background: var(--gold); margin: 10px 0 12px;
//     border-radius: 2px;
//   }
//   .stat-value {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 3.2rem; font-weight: 600; line-height: 1;
//     color: var(--gold-light); letter-spacing: -0.02em;
//   }
//   .stat-label {
//     color: var(--white-dim); font-size: 11.5px;
//     font-weight: 400; letter-spacing: 0.12em; text-transform: uppercase;
//   }

//   /* ── slide counter ── */
//   .slide-counter {
//     font-family: 'Cormorant Garamond', serif;
//     font-size: 13px; color: var(--white-dim);
//     letter-spacing: 0.12em;
//   }
//   .slide-counter .current {
//     color: var(--gold); font-size: 18px; font-weight: 600;
//   }

//   /* ── progress bar ── */
//   .progress-track {
//     width: 120px; height: 1px;
//     background: rgba(248,245,238,0.15); border-radius: 1px; overflow: hidden;
//   }
//   .progress-fill {
//     height: 100%;
//     background: linear-gradient(90deg, var(--gold), var(--gold-light));
//     border-radius: 1px;
//     transform-origin: left;
//     transition: width 0s;
//   }
//   @keyframes progress-run {
//     from { width: 0% } to { width: 100% }
//   }
//   .progress-fill.running {
//     animation: progress-run 10s linear forwards;
//   }

//   /* ── nav dots ── */
//   .nav-dot {
//     width: 6px; height: 6px; border-radius: 50%;
//     background: rgba(248,245,238,0.3);
//     border: none; cursor: pointer; padding: 0;
//     transition: background 0.3s, transform 0.3s;
//   }
//   .nav-dot.active {
//     background: var(--gold); transform: scale(1.4);
//   }
//   .nav-dot:hover:not(.active) {
//     background: rgba(248,245,238,0.7);
//   }

//   /* ── prev/next ── */
//   .nav-arrow {
//     width: 46px; height: 46px; border-radius: 4px;
//     background: rgba(5,9,26,0.4); backdrop-filter: blur(8px);
//     border: 1px solid rgba(248,245,238,0.15);
//     color: var(--white); display: flex; align-items: center; justify-content: center;
//     cursor: pointer; transition: border-color 0.3s, background 0.3s;
//   }
//   .nav-arrow:hover {
//     border-color: var(--gold);
//     background: var(--gold-dim);
//   }

//   /* ── video modal ── */
//   .modal-bg {
//     position: fixed; inset: 0;
//     background: rgba(5,9,26,0.97); z-index: 50;
//     display: flex; align-items: center; justify-content: center;
//     padding: 24px;
//   }
//   .modal-close {
//     position: absolute; top: 16px; right: 16px;
//     width: 40px; height: 40px; border-radius: 50%;
//     background: rgba(248,245,238,0.08); border: none;
//     color: var(--white); cursor: pointer; display: flex;
//     align-items: center; justify-content: center;
//     transition: background 0.3s;
//   }
//   .modal-close:hover { background: rgba(248,245,238,0.18); }

//   /* ── thin decorative vertical line left ── */
//   .deco-line {
//     position: absolute; left: 24px; top: 50%;
//     transform: translateY(-50%);
//     width: 1px; height: 30vh;
//     background: linear-gradient(to bottom, transparent, var(--gold-dim), transparent);
//   }
// `

// // ── CTA Link/Anchor helper ────────────────────────────────────────────────────
// const CTALink = ({ cta, className, children }) =>
//   cta.external ? (
//     <a href={cta.path} target="_blank" rel="noopener noreferrer" className={className}>
//       {children}
//     </a>
//   ) : (
//     <Link to={cta.path} className={className}>
//       {children}
//     </Link>
//   )

// // ── Hero Component ────────────────────────────────────────────────────────────
// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0)
//   const [showVideo, setShowVideo]     = useState(false)
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [progressKey, setProgressKey] = useState(0)
//   const intervalRef = useRef(null)

//   const startInterval = () => {
//     clearInterval(intervalRef.current)
//     intervalRef.current = setInterval(() => {
//       setActiveSlide(prev => (prev + 1) % slides.length)
//       setProgressKey(k => k + 1)
//     }, 10000)
//   }

//   useEffect(() => {
//     startInterval()
//     return () => clearInterval(intervalRef.current)
//   }, [])

//   const goToSlide = (index) => {
//     if (isAnimating || index === activeSlide) return
//     setIsAnimating(true)
//     setActiveSlide(index)
//     setProgressKey(k => k + 1)
//     startInterval()
//     setTimeout(() => setIsAnimating(false), 900)
//   }

//   const goToNext = () => goToSlide((activeSlide + 1) % slides.length)
//   const goToPrev = () => goToSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1)

//   const slide = slides[activeSlide]

//   // Animation variants
//   const bgVariants = {
//     initial:  { opacity: 0, scale: 1.06 },
//     animate:  { opacity: 1, scale: 1, transition: { duration: 1.4, ease: [0.25, 0.46, 0.45, 0.94] } },
//     exit:     { opacity: 0, scale: 1.03, transition: { duration: 0.7 } },
//   }

//   const contentVariants = {
//     initial:  { opacity: 0, y: 28 },
//     animate:  { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut', staggerChildren: 0.08 } },
//     exit:     { opacity: 0, y: -16, transition: { duration: 0.4 } },
//   }

//   const childVariant = {
//     initial: { opacity: 0, y: 20 },
//     animate: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
//   }

//   const statVariant = {
//     initial: { opacity: 0, y: 24 },
//     animate: (i) => ({ opacity: 1, y: 0, transition: { delay: i * 0.12 + 0.3, duration: 0.6, ease: 'easeOut' } }),
//   }

//   return (
//     <>
//       <FontLoader />
//       <style>{styles}</style>

//       <section className="hero-root" style={{ position: 'relative', minHeight: '100svh', width: '100%', overflow: 'hidden', background: '#05091A' }}>

//         {/* Decorative vertical line */}
//         <div className="deco-line" style={{ display: 'none' }} />

//         {/* ── Background ── */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={`bg-${slide.id}`}
//             className="hero-bg"
//             style={{ backgroundImage: `url('${slide.bgImage}')` }}
//             variants={bgVariants}
//             initial="initial"
//             animate="animate"
//             exit="exit"
//           >
//             <div className="hero-bg-overlay" />
//             <div className="hero-bg-noise" />
//           </motion.div>
//         </AnimatePresence>

//         {/* ── Content ── */}
//         <div style={{ position: 'relative', width: '100%', minHeight: '100svh', display: 'flex', alignItems: 'center' }}>
//           <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: 'clamp(80px,10vh,120px) clamp(24px,5vw,64px)' }}>

//             <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '48px', alignItems: 'center' }}
//                  className="hero-grid">
//               <style>{`@media(min-width:1024px){.hero-grid{grid-template-columns:1fr 1fr !important;}}`}</style>

//               {/* LEFT — Text */}
//               <AnimatePresence mode="wait">
//                 <motion.div
//                   key={`content-${slide.id}`}
//                   variants={contentVariants}
//                   initial="initial"
//                   animate="animate"
//                   exit="exit"
//                   style={{ display: 'flex', flexDirection: 'column', gap: '28px' }}
//                 >
//                   {/* Eyebrow */}
//                   <motion.div variants={childVariant}>
//                     <span className="eyebrow">
//                       <span className="gold-rule" />
//                       {slide.eyebrow}
//                     </span>
//                   </motion.div>

//                   {/* Heading */}
//                   <motion.h1 className="hero-h1" variants={childVariant}>
//                     {slide.heading}
//                     <span className="highlight">{slide.highlight}</span>
//                   </motion.h1>

//                   {/* Subheading */}
//                   <motion.p className="hero-sub" variants={childVariant}>
//                     {slide.subheading}
//                   </motion.p>

//                   {/* CTAs */}
//                   <motion.div variants={childVariant} style={{ display: 'flex', flexWrap: 'wrap', gap: '14px', paddingTop: '4px' }}>
//                     <CTALink cta={slide.primaryCTA} className="btn-primary">
//                       {slide.primaryCTA.label}
//                       <ArrowRight size={15} />
//                     </CTALink>
//                     <CTALink cta={slide.secondaryCTA} className="btn-ghost">
//                       {slide.secondaryCTA.label}
//                     </CTALink>
//                   </motion.div>

//                   {/* Video button */}
//                   <motion.div variants={childVariant}>
//                     <button className="btn-video" onClick={() => setShowVideo(true)}>
//                       <span className="play-ring">
//                         <span className="play-fill">
//                           <Play size={14} style={{ marginLeft: '2px' }} />
//                         </span>
//                       </span>
//                       Watch School Tour
//                     </button>
//                   </motion.div>
//                 </motion.div>
//               </AnimatePresence>

//               {/* RIGHT — Stats (desktop only) */}
//               <div style={{ display: 'none' }} className="stats-grid">
//                 <style>{`@media(min-width:1024px){.stats-grid{display:grid !important; grid-template-columns:1fr 1fr; gap:18px;}}`}</style>
//                 {stats.map((stat, i) => {
//                   const Icon = stat.icon
//                   return (
//                     <motion.div
//                       key={stat.label}
//                       className="stat-card"
//                       custom={i}
//                       variants={statVariant}
//                       initial="initial"
//                       animate="animate"
//                       whileHover={{ y: -6 }}
//                     >
//                       <Icon size={18} style={{ color: 'var(--gold)', opacity: 0.8 }} />
//                       <div className="stat-divider" />
//                       <div className="stat-value">{stat.value}</div>
//                       <div className="stat-label">{stat.label}</div>
//                     </motion.div>
//                   )
//                 })}
//               </div>
//             </div>

//             {/* ── Bottom bar ── */}
//             <div style={{
//               marginTop: 'clamp(40px,6vh,72px)',
//               display: 'flex', alignItems: 'center',
//               justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px'
//             }}>

//               {/* Counter + Progress */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '18px' }}>
//                 <span className="slide-counter">
//                   <span className="current">{slide.index}</span>
//                   &nbsp;/&nbsp;{String(slides.length).padStart(2,'0')}
//                 </span>
//                 <div className="progress-track">
//                   <div key={progressKey} className="progress-fill running" />
//                 </div>
//               </div>

//               {/* Dots */}
//               <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
//                 {slides.map((_, i) => (
//                   <button
//                     key={i}
//                     className={cn('nav-dot', i === activeSlide && 'active')}
//                     onClick={() => goToSlide(i)}
//                     aria-label={`Go to slide ${i + 1}`}
//                   />
//                 ))}
//               </div>

//               {/* Prev / Next */}
//               <div style={{ display: 'flex', gap: '10px' }}>
//                 <button className="nav-arrow" onClick={goToPrev} aria-label="Previous slide">
//                   <ArrowRight size={16} style={{ transform: 'rotate(180deg)' }} />
//                 </button>
//                 <button className="nav-arrow" onClick={goToNext} aria-label="Next slide">
//                   <ArrowRight size={16} />
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>

//       </section>

//       {/* ── Video Modal ── */}
//       <AnimatePresence>
//         {showVideo && (
//           <motion.div
//             className="modal-bg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <motion.div
//               initial={{ scale: 0.92, opacity: 0 }}
//               animate={{ scale: 1, opacity: 1, transition: { duration: 0.4, ease: 'easeOut' } }}
//               exit={{ scale: 0.92, opacity: 0 }}
//               style={{
//                 position: 'relative', width: '100%', maxWidth: '900px',
//                 background: '#08111F', borderRadius: '8px',
//                 border: '1px solid rgba(201,164,81,0.2)',
//                 aspectRatio: '16/9', overflow: 'hidden',
//                 display: 'flex', alignItems: 'center', justifyContent: 'center'
//               }}
//             >
//               <button className="modal-close" onClick={() => setShowVideo(false)}>
//                 <X size={18} />
//               </button>
//               <div style={{ textAlign: 'center', color: 'var(--white-dim)' }}>
//                 <Play size={40} style={{ marginBottom: '12px', color: 'var(--gold)', opacity: 0.7 }} />
//                 <p style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: '1.4rem', color: 'var(--white)' }}>
//                   School Tour Video Coming Soon
//                 </p>
//               </div>
//             </motion.div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Hero










































































// import { useState, useEffect, useRef, useCallback } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, Play, X, GraduationCap, Users, Trophy, Calendar } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'
// import { cn } from '@utils/cn'

// // ── Google Fonts ─────────────────────────────────────────
// const FontLoader = () => (
//   <style>{`
//     @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,600;0,700;1,300;1,400&family=Outfit:wght@300;400;500;600;700&display=swap');
//   `}</style>
// )

// // ── Slides ───────────────────────────────────────────────
// const slides = [
//   {
//     id: 1,
//     index: '01',
//     eyebrow: 'Welcome to MayDay',
//     heading: 'Nurturing Excellence,',
//     highlight: 'Building Futures',
//     subheading:
//       'Every child is seen, valued, and empowered to discover their greatest potential.',
//     primaryCTA: { label: 'Student Portal', path: 'https://portal.maydayintschool.com/student', external: true },
//     secondaryCTA: { label: 'WhatsApp Us', path: 'https://wa.me/2341234567890', external: true },
//     bgImage: '/hero-slide-1.jpg',
//   },
//   {
//     id: 2,
//     index: '02',
//     eyebrow: 'Academic Excellence',
//     heading: 'World-Class Education,',
//     highlight: 'Global Standards',
//     subheading:
//       'From Pre-Nursery to Secondary, our curriculum is designed to challenge, inspire, and develop every learner.',
//     primaryCTA: { label: 'Explore Academics', path: '/academics', external: false },
//     secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
//     bgImage: '/hero-slide-2.jpg',
//   },
//   {
//     id: 3,
//     index: '03',
//     eyebrow: 'Holistic Development',
//     heading: 'Beyond the Classroom,',
//     highlight: 'Into the Future',
//     subheading:
//       'Sports, ICT, arts, clubs, and cultural activities — developing complete, confident individuals.',
//     primaryCTA: { label: 'Our Specialties', path: '/specialties', external: false },
//     secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     bgImage: '/hero-slide-3.jpg',
//   },
//   {
//     id: 4,
//     index: '04',
//     eyebrow: 'Modern Facilities',
//     heading: 'State-of-the-Art',
//     highlight: 'Learning Environment',
//     subheading:
//       'Well-equipped classrooms, science labs, computer rooms, and premium sports facilities.',
//     primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
//     secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
//     bgImage: '/hero-slide-4.jpg',
//   },
//   {
//     id: 5,
//     index: '05',
//     eyebrow: 'Join Our Family',
//     heading: 'Start Your Journey',
//     highlight: 'With Us Today',
//     subheading:
//       'Give your child quality education, strong values, and a supportive community that lasts a lifetime.',
//     primaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     secondaryCTA: { label: 'About Us', path: '/about', external: false },
//     bgImage: '/hero-slide-5.jpg',
//   },
// ]

// // ── Stats ────────────────────────────────────────────────
// const stats = [
//   { value: '500', label: 'Students Enrolled', icon: Users },
//   { value: '40', label: 'Expert Staff', icon: GraduationCap },
//   { value: '10', label: 'Years of Excellence', icon: Calendar },
//   { value: '25', label: 'Awards Won', icon: Trophy },
// ]

// // ── Styles ───────────────────────────────────────────────
// const styles = `/* (your FULL original CSS here — unchanged) */`

// // ── CTA Helper ───────────────────────────────────────────
// const CTALink = ({ cta, className, children }) =>
//   cta.external ? (
//     <a href={cta.path} target="_blank" rel="noopener noreferrer" className={className}>
//       {children}
//     </a>
//   ) : (
//     <Link to={cta.path} className={className}>
//       {children}
//     </Link>
//   )

// // ── Component ────────────────────────────────────────────
// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0)
//   const [showVideo, setShowVideo] = useState(false)
//   const [isAnimating, setIsAnimating] = useState(false)
//   const [progressKey, setProgressKey] = useState(0)

//   const intervalRef = useRef(null)

//   // ✅ FIXED interval
//   const startInterval = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current)

//     intervalRef.current = setInterval(() => {
//       setActiveSlide(prev => (prev + 1) % slides.length)
//       setProgressKey(k => k + 1)
//     }, 10000)
//   }, [])

//   useEffect(() => {
//     startInterval()
//     return () => clearInterval(intervalRef.current)
//   }, [startInterval])

//   const goToSlide = (index) => {
//     if (isAnimating || index === activeSlide) return

//     setIsAnimating(true)
//     setActiveSlide(index)
//     setProgressKey(k => k + 1)
//     startInterval()

//     setTimeout(() => setIsAnimating(false), 800)
//   }

//   const goToNext = () => goToSlide((activeSlide + 1) % slides.length)
//   const goToPrev = () => goToSlide(activeSlide === 0 ? slides.length - 1 : activeSlide - 1)

//   const slide = slides[activeSlide]

//   return (
//     <>
//       <FontLoader />
//       <style>{styles}</style>

//       <section className="hero-root" style={{ position: 'relative', minHeight: '100svh', overflow: 'hidden' }}>

//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.id}
//             className="hero-bg"
//             style={{ backgroundImage: `url('${slide.bgImage}')` }}
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div className="hero-bg-overlay" />
//             <div className="hero-bg-noise" />
//           </motion.div>
//         </AnimatePresence>

//         <div style={{ position: 'relative', width: '100%', minHeight: '100svh', display: 'flex', alignItems: 'center' }}>
//           <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '100px 40px' }}>

//             <AnimatePresence mode="wait">
//               <motion.div key={slide.id} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>

//                 <h1 className="hero-h1">
//                   {slide.heading}
//                   <span className="highlight">{slide.highlight}</span>
//                 </h1>

//                 <p className="hero-sub">{slide.subheading}</p>

//                 <div style={{ display: 'flex', gap: '12px' }}>
//                   <CTALink cta={slide.primaryCTA} className="btn-primary">
//                     {slide.primaryCTA.label} <ArrowRight size={15} />
//                   </CTALink>

//                   <CTALink cta={slide.secondaryCTA} className="btn-ghost">
//                     {slide.secondaryCTA.label}
//                   </CTALink>
//                 </div>

//                 <button className="btn-video" onClick={() => setShowVideo(true)}>
//                   <Play /> Watch School Tour
//                 </button>

//               </motion.div>
//             </AnimatePresence>

//           </div>
//         </div>

//       </section>

//       {/* Modal */}
//       <AnimatePresence>
//         {showVideo && (
//           <motion.div className="modal-bg">
//             <div>
//               <button onClick={() => setShowVideo(false)}><X /></button>
//               <p>Video coming soon</p>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Hero












































import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, X, GraduationCap, Users, Trophy, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@utils/cn'

// ── Google Fonts (Upgraded to Playfair Display & Plus Jakarta Sans) ─────────────────
const FontLoader = () => (
  <style>{`
    @import url('https://googleapis.com');
  `}</style>
)

const slides = [
  {
    id: 1,
    eyebrow: 'Welcome to MayDay',
    heading: 'Nurturing Excellence,',
    highlight: 'Building Futures',
    subheading: 'Every child is seen, valued, and empowered to discover their greatest potential.',
    primaryCTA: { label: 'Student Portal', path: 'https://portal.maydayintschool.com/student', external: true },
    secondaryCTA: { label: 'WhatsApp Us', path: 'https://wa.me/2341234567890', external: true },
    bgImage: '/hero-slide-1.jpg',
  },
  {
    id: 2,
    eyebrow: 'Academic Excellence',
    heading: 'World-Class Education,',
    highlight: 'Global Standards',
    subheading: 'From Pre-Nursery to Secondary, our curriculum is designed to challenge and inspire learners.',
    primaryCTA: { label: 'Explore Academics', path: '/academics', external: false },
    secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
    bgImage: '/hero-slide-2.jpg',
  },
  {
    id: 3,
    eyebrow: 'Modern Facilities',
    heading: 'State-of-the-Art',
    highlight: 'Learning Spaces',
    subheading: 'Well-equipped classrooms, science labs, and premium sports facilities for holistic growth.',
    primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
    secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
    bgImage: '/hero-slide-3.jpg',
  },
]

const styles = `
  .hero-root {
    --brand-gold: #D4AF37;
    --font-serif: 'Playfair Display', serif;
    --font-sans: 'Plus Jakarta Sans', sans-serif;
    font-family: var(--font-sans);
    color: white;
  }
  .hero-bg {
    position: absolute; inset: 0; background-size: cover; background-position: center; z-index: -2;
    transform: scale(1.1); transition: transform 10s linear;
  }
  .hero-bg-overlay {
    position: absolute; inset: 0; 
    background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%);
    z-index: -1;
  }
  .hero-h1 {
    font-family: var(--font-serif);
    font-size: clamp(2.5rem, 8vw, 5rem);
    line-height: 1.1; font-weight: 900; margin-bottom: 1.5rem;
  }
  .hero-h1 .highlight {
    display: block; color: var(--brand-gold); font-style: italic; font-weight: 700;
  }
  .hero-sub {
    font-size: clamp(1rem, 2vw, 1.25rem); max-width: 600px; line-height: 1.6;
    margin-bottom: 2.5rem; color: rgba(255,255,255,0.8); font-weight: 300;
  }
  .btn-primary {
    background: var(--brand-gold); color: black; padding: 16px 32px; border-radius: 100px;
    font-weight: 600; display: flex; align-items: center; gap: 8px; transition: all 0.3s ease;
  }
  .btn-primary:hover { transform: translateY(-2px); box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3); }
  .btn-ghost {
    border: 1px solid rgba(255,255,255,0.3); padding: 16px 32px; border-radius: 100px;
    font-weight: 600; backdrop-filter: blur(10px); transition: all 0.3s ease;
  }
  .btn-ghost:hover { background: white; color: black; }
  .slide-nav {
    position: absolute; bottom: 40px; right: 40px; display: flex; gap: 20px; align-items: center;
  }
  .progress-dot {
    width: 40px; height: 3px; background: rgba(255,255,255,0.2); border-radius: 2px; overflow: hidden; position: relative;
  }
  .progress-fill {
    position: absolute; left: 0; top: 0; height: 100%; background: var(--brand-gold); width: 0%;
  }
  .modal-bg {
    position: fixed; inset: 0; background: rgba(0,0,0,0.9); z-index: 100;
    display: flex; align-items: center; justify-content: center; backdrop-filter: blur(10px);
  }
`

const CTALink = ({ cta, className, children }) =>
  cta.external ? (
    <a href={cta.path} target="_blank" rel="noopener noreferrer" className={className}>
      {children}
    </a>
  ) : (
    <Link to={cta.path} className={className}>
      {children}
    </Link>
  )

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const intervalRef = useRef(null)

  const startInterval = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current)
    intervalRef.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % slides.length)
    }, 8000)
  }, [])

  useEffect(() => {
    startInterval()
    return () => clearInterval(intervalRef.current)
  }, [startInterval])

  const slide = slides[activeSlide]

  return (
    <>
      <FontLoader />
      <style>{styles}</style>

      <section className="hero-root" style={{ position: 'relative', height: '100svh', overflow: 'hidden' }}>
        
        {/* Background Layer */}
        <AnimatePresence mode="popLayout">
          <motion.div
            key={slide.id}
            className="hero-bg"
            style={{ backgroundImage: `url('${slide.bgImage}')` }}
            initial={{ opacity: 0, scale: 1.2 }}
            animate={{ opacity: 1, scale: 1.1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeOut" }}
          >
            <div className="hero-bg-overlay" />
          </motion.div>
        </AnimatePresence>

        {/* Content Layer */}
        <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
          <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
            <AnimatePresence mode="wait">
              <motion.div 
                key={activeSlide}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.6, staggerChildren: 0.1 }}
              >
                <motion.span 
                  style={{ color: '#D4AF37', fontWeight: 600, letterSpacing: '2px', textTransform: 'uppercase', fontSize: '0.875rem', display: 'block', marginBottom: '1rem' }}
                >
                  {slide.eyebrow}
                </motion.span>

                <h1 className="hero-h1">
                  {slide.heading}
                  <span className="highlight">{slide.highlight}</span>
                </h1>

                <p className="hero-sub">{slide.subheading}</p>

                <div style={{ display: 'flex', gap: '20px', alignItems: 'center', flexWrap: 'wrap' }}>
                  <CTALink cta={slide.primaryCTA} className="btn-primary">
                    {slide.primaryCTA.label} <ArrowRight size={18} />
                  </CTALink>

                  <CTALink cta={slide.secondaryCTA} className="btn-ghost">
                    {slide.secondaryCTA.label}
                  </CTALink>

                  <button 
                    onClick={() => setShowVideo(true)}
                    style={{ background: 'none', border: 'none', color: 'white', display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer', fontWeight: 500 }}
                  >
                    <div style={{ width: 48, height: 48, borderRadius: '50%', border: '1px solid white', display: 'flex', alignItems: 'center', justifyCenter: 'center', paddingLeft: '4px' }}>
                        <Play size={18} fill="white" />
                    </div>
                    Watch Tour
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="slide-nav">
          {slides.map((_, i) => (
            <div key={i} onClick={() => { setActiveSlide(i); startInterval(); }} style={{ cursor: 'pointer' }}>
              <div className="progress-dot">
                {activeSlide === i && (
                  <motion.div 
                    className="progress-fill" 
                    initial={{ width: "0%" }} 
                    animate={{ width: "100%" }} 
                    transition={{ duration: 8, ease: "linear" }}
                  />
                )}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Video Modal */}
      <AnimatePresence>
        {showVideo && (
          <motion.div 
            className="modal-bg"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div style={{ position: 'relative', width: '90%', maxWidth: '1000px', aspectRatio: '16/9', background: '#111', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <button 
                onClick={() => setShowVideo(false)}
                style={{ position: 'absolute', top: '-50px', right: 0, color: 'white', background: 'none', border: 'none' }}
              >
                <X size={32} />
              </button>
              <div style={{ textAlign: 'center' }}>
                <Play size={48} style={{ marginBottom: '1rem', opacity: 0.5 }} />
                <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)' }}>Virtual Tour Experience Coming Soon</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Hero
