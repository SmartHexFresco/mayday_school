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
//       'At Clusters of Treasure International School, every child is seen, valued, and empowered to discover their greatest potential.',
//     primaryCTA: { label: 'Apply Now', path: '/admissions' },
//     secondaryCTA: { label: 'Discover More', path: '/about' },
//     bg: 'from-blue-700 via-blue-700 to-blue-600',
//   },
//   {
//     id: 2,
//     badge: 'Academic Excellence',
//     heading: 'World-Class Education',
//     highlight: 'Home',
//     subheading:
//       'From Pre-Nursery to Primary, our curriculum is designed to challenge, inspire, and develop every learner to their fullest capacity.',
//     primaryCTA: { label: 'Academics', path: '/academics' },
//     secondaryCTA: { label: 'Staff', path: '/administration' },
//     bg: 'from-blue-700 via-blue-700 to-blue-600',
//   },
//   {
//     id: 3,
//     badge: 'Holistic Development',
//     heading: 'Beyond the Classroom,',
//     highlight: 'Into the Future',
//     subheading:
//       'Sports, ICT, arts, clubs, and cultural activities — we develop the complete child, equipping them for every challenge ahead.',
//     primaryCTA: { label: 'Specialties', path: '/specialties' },
//     secondaryCTA: { label: 'Gallery', path: '/gallery' },
//     bg: 'from-blue-700 via-blue-700 to-blue-600',
//   },
// ]

// // ── Stats ─────────────────────────────────────────────────
// const stats = [
//   { value: '500+',label: 'Students' },
//   { value: '40+', label: 'Staff Members' },
//   { value: '10+', label: 'Years of Excellence' },
//   { value: '25+', label: 'Awards Won' },
// ]

// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0)
//   const [showVideo, setShowVideo] = useState(false)
//   const [isAnimating, setIsAnimating] = useState(false)

//   // Auto-slide every 6 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       goToNext()
//     }, 6000)
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

//   return (
//     <>
//       <section
//         className={cn(
//           'relative min-h-screen flex flex-col justify-center',
//           'bg-linear-to-br',
//           slide.bg,
//           'transition-all duration-700'
//         )}
//       >
//         {/* Background Pattern */}
//         <div className="absolute inset-0 opacity-5">
//           <div
//             className="absolute inset-0"
//             style={{
//               backgroundImage: `radial-gradient(circle at 1px 1px, white 1px, transparent 0)`,
//               backgroundSize: '40px 40px',
//             }}
//           />
//         </div>

//         {/* Decorative Circles */}
//         <div className="absolute top-20 right-20 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />
//         <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-400/10 rounded-full blur-3xl pointer-events-none" />

//         {/* Main Content */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//             {/* Left Content */}
//             <div
//               className={cn(
//                 'transition-all duration-500',
//                 isAnimating
//                   ? 'opacity-0 translate-y-4'
//                   : 'opacity-100 translate-y-0'
//               )}
//             >
//               {/* Badge */}
//               <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
//                 <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
//                 {slide.badge}
//               </div>

//               {/* Heading */}
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
//                 {slide.heading}{' '}
//                 <span className="text-yellow-400 block mt-1">
//                   {slide.highlight}
//                 </span>
//               </h1>

//               {/* Subheading */}
//               <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
//                 {slide.subheading}
//               </p>

//               {/* CTA Buttons */}
//               <div className="flex flex-wrap items-center gap-4">
//                 <Link
//                   to={slide.primaryCTA.path}
//                   className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-7 py-3.5 rounded-xl transition-all duration-200 hover:scale-105 active:scale-100"
//                 >
//                   {slide.primaryCTA.label}
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>

//                 <Link
//                   to={slide.secondaryCTA.path}
//                   className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition-all duration-200"
//                 >
//                   {slide.secondaryCTA.label}
//                   <ChevronRight className="w-4 h-4" />
//                 </Link>

//                 {/* Video Tour Button */}
//                 <button
//                   onClick={() => setShowVideo(true)}
//                   className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium transition-colors duration-200 group"
//                 >
//                   <div className="w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors group-hover:scale-110 duration-200">
//                     <Play className="w-4 h-4 ml-0.5" />
//                   </div>
//                   Watch School Tour
//                 </button>
//               </div>
//             </div>

//             {/* Right Content — Stats Grid */}
//             <div
//               className={cn(
//                 'hidden lg:grid grid-cols-2 gap-4',
//                 'transition-all duration-500 delay-150',
//                 isAnimating
//                   ? 'opacity-0 translate-y-4'
//                   : 'opacity-100 translate-y-0'
//               )}
//             >
//               {stats.map((stat, i) => (
//                 <div
//                   key={stat.label}
//                   className={cn(
//                     'bg-white/10 border border-white/10 rounded-2xl p-6 text-center',
//                     'hover:bg-white/15 transition-colors duration-200',
//                     i === 0 && 'border-yellow-500/30 bg-yellow-500/10'
//                   )}
//                 >
//                   <p
//                     className={cn(
//                       'text-4xl font-black mb-1',
//                       i === 0 ? 'text-yellow-400' : 'text-white'
//                     )}
//                   >
//                     {stat.value}
//                   </p>
//                   <p className="text-gray-300 text-sm font-medium">
//                     {stat.label}
//                   </p>
//                 </div>
//               ))}

//               {/* Admission CTA Card */}
//               <div className="col-span-2 bg-yellow-600/20 border border-yellow-500/30 rounded-2xl p-5 flex items-center justify-between">
//                 <div>
//                   <p className="text-yellow-400 font-bold text-sm">
//                     Admissions Open!
//                   </p>
//                   <p className="text-gray-300 text-xs mt-0.5">
//                     Apply for the new academic session today
//                   </p>
//                 </div>
//                 <Link
//                   to="/admissions"
//                   className="bg-yellow-600 hover:bg-yellow-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg transition-colors whitespace-nowrap"
//                 >
//                   Apply Now
//                 </Link>
//               </div>
//             </div>

//           </div>
//         </div>

//         {/* Slide Controls */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-6">
//           {/* Prev */}
//           <button
//             onClick={goToPrev}
//             className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors"
//           >
//             <ChevronRight className="w-4 h-4 rotate-180" />
//           </button>

//           {/* Dots */}
//           <div className="flex items-center gap-2">
//             {slides.map((_, i) => (
//               <button
//                 key={i}
//                 onClick={() => goToSlide(i)}
//                 className={cn(
//                   'transition-all duration-300 rounded-full',
//                   i === activeSlide
//                     ? 'w-8 h-2.5 bg-yellow-400'
//                     : 'w-2.5 h-2.5 bg-white/30 hover:bg-white/60'
//                 )}
//               />
//             ))}
//           </div>

//           {/* Next */}
//           <button
//             onClick={goToNext}
//             className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors"
//           >
//             <ChevronRight className="w-4 h-4" />
//           </button>
//         </div>

//         {/* Scroll Indicator */}
//         <div className="absolute bottom-8 right-8 flex flex-col items-center gap-1.5 text-white/40">
//           <div className="w-px h-8 bg-white/20 relative overflow-hidden">
//             <div className="absolute top-0 w-full bg-yellow-400 h-1/2 animate-bounce" />
//           </div>
//           <p className="text-xs font-medium rotate-90 translate-x-3 tracking-widest uppercase">
//             Scroll
//           </p>
//         </div>

//       </section>

//       {/* Video Modal */}
//       {showVideo && (
//         <div
//           className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
//           onClick={() => setShowVideo(false)}
//         >
//           <div
//             className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden aspect-video"
//             onClick={(e) => e.stopPropagation()}
//           >
//             <button
//               onClick={() => setShowVideo(false)}
//               className="absolute top-3 right-3 z-10 w-9 h-9 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center text-white transition-colors"
//             >
//               <X className="w-5 h-5" />
//             </button>
//             <div className="w-full h-full flex items-center justify-center bg-gray-900">
//               <div className="text-center text-white">
//                 <Play className="w-12 h-12 mx-auto mb-3 text-yellow-400" />
//                 <p className="text-sm text-gray-400">
//                   Replace with your school video embed (YouTube/Vimeo)
//                 </p>
//               </div>
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
import { ArrowRight, ChevronRight, Play, X } from 'lucide-react'
import { cn } from '@utils/cn'

// ── Slides Data ───────────────────────────────────────────
const slides = [
  {
    id: 1,
    badge: 'Welcome to Our School',
    heading: 'Nurturing Excellence,',
    highlight: 'Building Futures',
    subheading:
      'At MayDay International School, every child is seen, valued, and empowered to discover their greatest potential.',
    primaryCTA: { label: 'Apply Now', path: '/admissions' },
    secondaryCTA: { label: 'Discover More', path: '/about' },
    bgImage: '/hero-bg.jpg',
  },
  {
    id: 2,
    badge: 'Academic Excellence',
    heading: 'World-Class Education',
    highlight: 'Home',
    subheading:
      'From Pre-Nursery to Primary, our curriculum is designed to challenge, inspire, and develop every learner to their fullest capacity.',
    primaryCTA: { label: 'Academics', path: '/academics' },
    secondaryCTA: { label: 'Staff', path: '/administration' },
    bgImage: '/hero-bg.jpg',
  },
  {
    id: 3,
    badge: 'Holistic Development',
    heading: 'Beyond the Classroom,',
    highlight: 'Into the Future',
    subheading:
      'Sports, ICT, arts, clubs, and cultural activities — we develop the complete child, equipping them for every challenge ahead.',
    primaryCTA: { label: 'Specialties', path: '/specialties' },
    secondaryCTA: { label: 'Gallery', path: '/gallery' },
    bgImage: '/hero-bg.jpg',
  },
]

// ── Stats ─────────────────────────────────────────────────
const stats = [
  { value: '500+', label: 'Students' },
  { value: '40+', label: 'Staff Members' },
  { value: '10+', label: 'Years of Excellence' },
  { value: '25+', label: 'Awards Won' },
]

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [showVideo, setShowVideo] = useState(false)
  const [isAnimating, setIsAnimating] = useState(false)

  // Auto-slide
  useEffect(() => {
    const interval = setInterval(() => {
      goToNext()
    }, 6000)
    return () => clearInterval(interval)
  }, [activeSlide])

  const goToSlide = (index) => {
    if (isAnimating || index === activeSlide) return
    setIsAnimating(true)
    setActiveSlide(index)
    setTimeout(() => setIsAnimating(false), 500)
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

  return (
    <>
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

        {/* 🖼️ Background Slideshow */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `url('${slides[activeSlide].bgImage}')`,
          }}
        >
          {/* Dark overlays for readability */}
          <div className="absolute inset-0 bg-black/60" />
          <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/70" />
          <div className="absolute inset-0 bg-blue-900/20" />
        </div>

        {/* Content Container */}
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

            {/* LEFT CONTENT */}
            <div
              className={cn(
                'transition-all duration-500',
                isAnimating
                  ? 'opacity-0 translate-y-4'
                  : 'opacity-100 translate-y-0'
              )}
            >
              <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
                <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
                {slide.badge}
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
                {slide.heading}{' '}
                <span className="text-yellow-400 block mt-1">
                  {slide.highlight}
                </span>
              </h1>

              <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
                {slide.subheading}
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <Link
                  to={slide.primaryCTA.path}
                  className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-7 py-3.5 rounded-xl transition"
                >
                  {slide.primaryCTA.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>

                <Link
                  to={slide.secondaryCTA.path}
                  className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition"
                >
                  {slide.secondaryCTA.label}
                  <ChevronRight className="w-4 h-4" />
                </Link>

                <button
                  onClick={() => setShowVideo(true)}
                  className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium"
                >
                  <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
                    <Play className="w-4 h-4 ml-0.5" />
                  </div>
                  Watch School Tour
                </button>
              </div>
            </div>

            {/* RIGHT STATS */}
            <div className="hidden lg:grid grid-cols-2 gap-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center"
                >
                  <p className="text-4xl font-black text-white mb-1">
                    {stat.value}
                  </p>
                  <p className="text-gray-300 text-sm">{stat.label}</p>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* NAVIGATION DOTS */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goToSlide(i)}
              className={cn(
                'transition-all rounded-full',
                i === activeSlide
                  ? 'w-8 h-2.5 bg-yellow-400'
                  : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
              )}
            />
          ))}
        </div>

        {/* NAV BUTTONS */}
        <button
          onClick={goToPrev}
          className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center"
        >
          <ChevronRight className="rotate-180 w-5 h-5" />
        </button>

        <button
          onClick={goToNext}
          className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5" />
        </button>

      </section>

      {/* VIDEO MODAL */}
      {showVideo && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden aspect-video">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-3 right-3 w-9 h-9 bg-white/10 rounded-full text-white"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero