













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
//     primaryCTA: { label: 'Apply Now', path: '/admissions' },
//     secondaryCTA: { label: 'Discover More', path: '/about' },
//     bgImage: '/hero-bg.jpg',
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
//     bgImage: '/hero-bg.jpg',
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
//     bgImage: '/hero-bg.jpg',
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
//       {/* HERO SECTION */}
//       <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">

//         {/* 🖼️ Background Slideshow */}
//         <div
//           className="absolute inset-0 bg-cover bg-center transition-all duration-700"
//           style={{
//             backgroundImage: `url('${slides[activeSlide].bgImage}')`,
//           }}
//         >
//           {/* Dark overlays for readability */}
//           <div className="absolute inset-0 bg-black/60" />
//           <div className="absolute inset-0 bg-linear-to-r from-black/80 via-black/50 to-black/70" />
//           <div className="absolute inset-0 bg-blue-900/20" />
//         </div>

//         {/* Content Container */}
//         <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-20">
//           <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

//             {/* LEFT CONTENT */}
//             <div
//               className={cn(
//                 'transition-all duration-500',
//                 isAnimating
//                   ? 'opacity-0 translate-y-4'
//                   : 'opacity-100 translate-y-0'
//               )}
//             >
//               <div className="inline-flex items-center gap-2 bg-yellow-600/20 border border-yellow-500/30 text-yellow-400 text-xs font-semibold px-4 py-2 rounded-full uppercase tracking-widest mb-6">
//                 <span className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse" />
//                 {slide.badge}
//               </div>

//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight mb-4">
//                 {slide.heading}{' '}
//                 <span className="text-yellow-400 block mt-1">
//                   {slide.highlight}
//                 </span>
//               </h1>

//               <p className="text-gray-300 text-lg leading-relaxed mb-10 max-w-xl">
//                 {slide.subheading}
//               </p>

//               <div className="flex flex-wrap items-center gap-4">
//                 <Link
//                   to={slide.primaryCTA.path}
//                   className="inline-flex items-center gap-2 bg-yellow-600 hover:bg-yellow-700 text-white font-bold px-7 py-3.5 rounded-xl transition"
//                 >
//                   {slide.primaryCTA.label}
//                   <ArrowRight className="w-4 h-4" />
//                 </Link>

//                 <Link
//                   to={slide.secondaryCTA.path}
//                   className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition"
//                 >
//                   {slide.secondaryCTA.label}
//                   <ChevronRight className="w-4 h-4" />
//                 </Link>

//                 <button
//                   onClick={() => setShowVideo(true)}
//                   className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-medium"
//                 >
//                   <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
//                     <Play className="w-4 h-4 ml-0.5" />
//                   </div>
//                   Watch School Tour
//                 </button>
//               </div>
//             </div>

//             {/* RIGHT STATS */}
//             <div className="hidden lg:grid grid-cols-2 gap-4">
//               {stats.map((stat) => (
//                 <div
//                   key={stat.label}
//                   className="bg-white/10 border border-white/10 rounded-2xl p-6 text-center"
//                 >
//                   <p className="text-4xl font-black text-white mb-1">
//                     {stat.value}
//                   </p>
//                   <p className="text-gray-300 text-sm">{stat.label}</p>
//                 </div>
//               ))}
//             </div>

//           </div>
//         </div>

//         {/* NAVIGATION DOTS */}
//         <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-3">
//           {slides.map((_, i) => (
//             <button
//               key={i}
//               onClick={() => goToSlide(i)}
//               className={cn(
//                 'transition-all rounded-full',
//                 i === activeSlide
//                   ? 'w-8 h-2.5 bg-yellow-400'
//                   : 'w-2.5 h-2.5 bg-white/40 hover:bg-white/70'
//               )}
//             />
//           ))}
//         </div>

//         {/* NAV BUTTONS */}
//         <button
//           onClick={goToPrev}
//           className="absolute left-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center"
//         >
//           <ChevronRight className="rotate-180 w-5 h-5" />
//         </button>

//         <button
//           onClick={goToNext}
//           className="absolute right-5 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full text-white flex items-center justify-center"
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
//               className="absolute top-3 right-3 w-9 h-9 bg-white/10 rounded-full text-white"
//             >
//               <X className="w-5 h-5" />
//             </button>
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
    primaryCTA: { label: 'Student Portal', path: 'https://portal.maydayintschool.com/student', external: true },
    secondaryCTA: { label: 'WhatsApp Us', path: 'https://wa.me/2341234567890', external: true },
    bgImage: '/hero-bg.jpg',
  },
  {
    id: 2,
    badge: 'Academic Excellence',
    heading: 'World-Class Education',
    highlight: 'Home',
    subheading:
      'From Pre-Nursery to Primary, our curriculum is designed to challenge, inspire, and develop every learner to their fullest capacity.',
    primaryCTA: { label: 'Academics', path: '/academics', external: false },
    secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
    bgImage: '/hero-bg.jpg',
  },
  {
    id: 3,
    badge: 'Holistic Development',
    heading: 'Beyond the Classroom,',
    highlight: 'Into the Future',
    subheading:
      'Sports, ICT, arts, clubs, and cultural activities — we develop the complete child, equipping them for every challenge ahead.',
    primaryCTA: { label: 'Specialties', path: '/specialties', external: false },
    secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
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

  // Helper function to render CTA button
  const renderCTA = (cta) => {
    if (cta.external) {
      return (
        <a
          href={cta.path}
          target="_blank"
          rel="noopener noreferrer"
          className={`inline-flex items-center gap-2 ${
            cta.label === 'Student Portal' || cta.label === 'Staff Portal'
              ? 'bg-green-600 hover:bg-green-700'
              : cta.label === 'WhatsApp Us'
              ? 'bg-green-500 hover:bg-green-600'
              : 'bg-yellow-600 hover:bg-yellow-700'
          } text-white font-bold px-7 py-3.5 rounded-xl transition`}
        >
          {cta.label}
          <ArrowRight className="w-4 h-4" />
        </a>
      )
    }
    return (
      <Link
        to={cta.path}
        className={`inline-flex items-center gap-2 ${
          cta.label === 'Academics' || cta.label === 'Specialties'
            ? 'bg-yellow-600 hover:bg-yellow-700'
            : 'bg-white/10 hover:bg-white/20 border border-white/20'
        } text-white font-semibold px-7 py-3.5 rounded-xl transition`}
      >
        {cta.label}
        <ChevronRight className="w-4 h-4" />
      </Link>
    )
  }

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
                {/* Primary CTA */}
                {renderCTA(slide.primaryCTA)}

                {/* Secondary CTA */}
                {slide.secondaryCTA.external ? (
                  <a
                    href={slide.secondaryCTA.path}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition"
                  >
                    {slide.secondaryCTA.label}
                    <ChevronRight className="w-4 h-4" />
                  </a>
                ) : (
                  <Link
                    to={slide.secondaryCTA.path}
                    className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-semibold px-7 py-3.5 rounded-xl transition"
                  >
                    {slide.secondaryCTA.label}
                    <ChevronRight className="w-4 h-4" />
                  </Link>
                )}

                {/* Watch School Tour Button */}
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
            {/* Add your video embed here */}
            <div className="flex items-center justify-center h-full text-white">
              School Tour Video Coming Soon
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default Hero