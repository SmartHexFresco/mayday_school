// import { useState, useEffect, useRef, useCallback } from 'react'
// import { Link } from 'react-router-dom'
// import { ArrowRight, Play, X } from 'lucide-react'
// import { motion, AnimatePresence } from 'framer-motion'

// // ── Google Fonts ─────────────────
// const FontLoader = () => (
//   <link 
//     href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
//     rel="stylesheet" 
//   />
// )

// const slides = [
//   {
//     id: 1,
//     eyebrow: 'Welcome to MayDay',
//     heading: 'Nurturing Excellence,',
//     highlight: 'Building Futures',
//     subheading: 'Every child is seen, valued, and empowered to discover their greatest potential.',
//     primaryCTA: { label: 'Student Portal', path: 'https://portal.maydayintschool.com/student', external: true },
//     secondaryCTA: { label: 'WhatsApp Us', path: 'https://wa.me/2341234567890', external: true },
//     bgImage: '/hero-slide-1.jpg',
//   },
//   {
//     id: 2,
//     eyebrow: 'Academic Excellence',
//     heading: 'World-Class Education,',
//     highlight: 'Global Standards',
//     subheading: 'From Pre-Nursery to Secondary, our curriculum is designed to challenge and inspire learners.',
//     primaryCTA: { label: 'Explore Academics', path: '/academics', external: false },
//     secondaryCTA: { label: 'Staff Portal', path: 'https://portal.maydayintschool.com/', external: true },
//     bgImage: '/hero-slide-2.jpg',
//   },
//   {
//     id: 3,
//     eyebrow: 'Holistic Development',
//     heading: 'Beyond the Classroom,',
//     highlight: 'Into the Future',
//     subheading: 'Sports, ICT, arts, clubs, and cultural activities — developing complete, confident individuals.',
//     primaryCTA: { label: 'Specialties', path: '/specialties', external: false },
//     secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     bgImage: '/hero-slide-3.jpg',
//   },
//   {
//     id: 4,
//     eyebrow: 'Modern Facilities',
//     heading: 'State-of-the-Art',
//     highlight: 'Learning Environment',
//     subheading: 'Well-equipped classrooms, science labs, computer rooms, and sports facilities.',
//     primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
//     secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
//     bgImage: '/hero-slide-4.jpg',
//   },
//   {
//     id: 5,
//     eyebrow: 'Join Our Family',
//     heading: 'Start Your Journey',
//     highlight: 'With Us Today',
//     subheading: 'Give your child quality education, strong values, and a supportive community.',
//     primaryCTA: { label: 'Contact Us', path: '/contact', external: false },
//     secondaryCTA: { label: 'Learn More', path: '/about', external: false },
//     bgImage: '/hero-slide-5.jpg',
//   },
// ]

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

// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0)
//   const [showVideo, setShowVideo] = useState(false)
//   const intervalRef = useRef(null)

//   const startInterval = useCallback(() => {
//     if (intervalRef.current) clearInterval(intervalRef.current)
//     intervalRef.current = setInterval(() => {
//       setActiveSlide(prev => (prev + 1) % slides.length)
//     }, 8000)
//   }, [])

//   useEffect(() => {
//     startInterval()
//     return () => clearInterval(intervalRef.current)
//   }, [startInterval])

//   const slide = slides[activeSlide]

//   return (
//     <>
//       <FontLoader />
      
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
//         .hero-root {
//           --brand-gold: #D4AF37;
//           --font-serif: 'Playfair Display', serif;
//           --font-sans: 'Plus Jakarta Sans', sans-serif;
//           font-family: var(--font-sans);
//           color: white;
//           position: relative;
//           height: 100svh;
//           overflow: hidden;
//         }
        
//         .hero-bg {
//           position: absolute;
//           inset: 0;
//           background-size: cover;
//           background-position: center;
//           z-index: -2;
//         }
        
//         .hero-bg-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(135deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.5) 50%, rgba(0,0,0,0.3) 100%);
//           z-index: -1;
//         }
        
//         .hero-h1 {
//           font-family: var(--font-serif);
//           font-size: clamp(2rem, 5vw, 3.5rem);
//           line-height: 1.2;
//           font-weight: 800;
//           margin-bottom: 1.2rem;
//         }
        
//         .hero-h1 .highlight {
//           display: block;
//           color: var(--brand-gold);
//           font-style: italic;
//           font-weight: 700;
//           margin-top: 0.25rem;
//         }
        
//         .hero-sub {
//           font-size: clamp(0.9rem, 1.8vw, 1.1rem);
//           max-width: 550px;
//           line-height: 1.5;
//           margin-bottom: 2rem;
//           color: rgba(255,255,255,0.85);
//           font-weight: 400;
//         }
        
//         .btn-primary {
//           background: var(--brand-gold);
//           color: black;
//           padding: 12px 28px;
//           border-radius: 50px;
//           font-weight: 600;
//           font-size: 0.9rem;
//           display: inline-flex;
//           align-items: center;
//           gap: 8px;
//           transition: all 0.3s ease;
//           text-decoration: none;
//         }
        
//         .btn-primary:hover {
//           transform: translateY(-2px);
//           box-shadow: 0 8px 20px rgba(212, 175, 55, 0.3);
//         }
        
//         .btn-ghost {
//           border: 1px solid rgba(255,255,255,0.3);
//           padding: 12px 28px;
//           border-radius: 50px;
//           font-weight: 600;
//           font-size: 0.9rem;
//           backdrop-filter: blur(10px);
//           transition: all 0.3s ease;
//           text-decoration: none;
//           display: inline-flex;
//           align-items: center;
//           color: white;
//         }
        
//         .btn-ghost:hover {
//           background: white;
//           color: black;
//           border-color: white;
//         }
        
//         .eyebrow-text {
//           color: #D4AF37;
//           font-weight: 600;
//           letter-spacing: 2px;
//           text-transform: uppercase;
//           font-size: 0.7rem;
//           display: block;
//           margin-bottom: 0.75rem;
//         }
        
//         .slide-nav {
//           position: absolute;
//           bottom: 30px;
//           right: 40px;
//           display: flex;
//           gap: 15px;
//           align-items: center;
//           z-index: 20;
//         }
        
//         .progress-dot {
//           width: 35px;
//           height: 2px;
//           background: rgba(255,255,255,0.3);
//           border-radius: 2px;
//           overflow: hidden;
//           position: relative;
//           cursor: pointer;
//         }
        
//         .progress-fill {
//           position: absolute;
//           left: 0;
//           top: 0;
//           height: 100%;
//           background: var(--brand-gold);
//           width: 0%;
//         }
        
//         .modal-bg {
//           position: fixed;
//           inset: 0;
//           background: rgba(0,0,0,0.95);
//           z-index: 100;
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           backdrop-filter: blur(10px);
//         }
        
//         .watch-tour-btn {
//           background: none;
//           border: none;
//           color: white;
//           display: flex;
//           align-items: center;
//           gap: 10px;
//           cursor: pointer;
//           font-weight: 500;
//           font-size: 0.9rem;
//           transition: all 0.3s ease;
//         }
        
//         .watch-tour-btn:hover {
//           color: #D4AF37;
//         }
        
//         .play-icon {
//           width: 42px;
//           height: 42px;
//           border-radius: 50%;
//           border: 1px solid rgba(255,255,255,0.5);
//           display: flex;
//           align-items: center;
//           justify-content: center;
//           transition: all 0.3s ease;
//         }
        
//         .watch-tour-btn:hover .play-icon {
//           border-color: #D4AF37;
//           background: rgba(212, 175, 55, 0.2);
//         }
        
//         @keyframes slideFadeIn {
//           0% {
//             opacity: 0;
//             transform: translateY(20px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateY(0);
//           }
//         }
        
//         .content-animate {
//           animation: slideFadeIn 0.5s ease-out;
//         }
//       `}</style>

//       <section className="hero-root">
        
//         {/* Background Layer */}
//         <AnimatePresence mode="wait">
//           <motion.div
//             key={slide.id}
//             className="hero-bg"
//             style={{ backgroundImage: `url('${slide.bgImage}')` }}
//             initial={{ opacity: 0, scale: 1.1 }}
//             animate={{ opacity: 1, scale: 1 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.2, ease: "easeOut" }}
//           >
//             <div className="hero-bg-overlay" />
//           </motion.div>
//         </AnimatePresence>

//         {/* Content Layer */}
//         <div style={{ position: 'relative', zIndex: 10, height: '100%', display: 'flex', alignItems: 'center' }}>
//           <div style={{ width: '100%', maxWidth: '1280px', margin: '0 auto', padding: '0 40px' }}>
//             <AnimatePresence mode="wait">
//               <motion.div 
//                 key={activeSlide}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.5 }}
//                 className="content-animate"
//               >
//                 <span className="eyebrow-text">
//                   {slide.eyebrow}
//                 </span>

//                 <h1 className="hero-h1">
//                   {slide.heading}
//                   <span className="highlight">{slide.highlight}</span>
//                 </h1>

//                 <p className="hero-sub">{slide.subheading}</p>

//                 <div style={{ display: 'flex', gap: '16px', alignItems: 'center', flexWrap: 'wrap' }}>
//                   <CTALink cta={slide.primaryCTA} className="btn-primary">
//                     {slide.primaryCTA.label} <ArrowRight size={16} />
//                   </CTALink>

//                   <CTALink cta={slide.secondaryCTA} className="btn-ghost">
//                     {slide.secondaryCTA.label}
//                   </CTALink>

//                   <button 
//                     onClick={() => setShowVideo(true)}
//                     className="watch-tour-btn"
//                   >
//                     <div className="play-icon">
//                       <Play size={14} fill="white" />
//                     </div>
//                     Watch Tour
//                   </button>
//                 </div>
//               </motion.div>
//             </AnimatePresence>
//           </div>
//         </div>

//         {/* Slide Indicators */}
//         <div className="slide-nav">
//           {slides.map((_, i) => (
//             <div 
//               key={i} 
//               onClick={() => { setActiveSlide(i); startInterval(); }} 
//               className="progress-dot"
//             >
//               {activeSlide === i && (
//                 <motion.div 
//                   className="progress-fill" 
//                   initial={{ width: "0%" }} 
//                   animate={{ width: "100%" }} 
//                   transition={{ duration: 8, ease: "linear" }}
//                 />
//               )}
//             </div>
//           ))}
//         </div>
//       </section>

//       {/* Video Modal */}
//       <AnimatePresence>
//         {showVideo && (
//           <motion.div 
//             className="modal-bg"
//             initial={{ opacity: 0 }}
//             animate={{ opacity: 1 }}
//             exit={{ opacity: 0 }}
//           >
//             <div style={{ 
//               position: 'relative', 
//               width: '90%', 
//               maxWidth: '900px', 
//               aspectRatio: '16/9', 
//               background: '#111', 
//               borderRadius: '16px', 
//               display: 'flex', 
//               alignItems: 'center', 
//               justifyContent: 'center' 
//             }}>
//               <button 
//                 onClick={() => setShowVideo(false)}
//                 style={{ 
//                   position: 'absolute', 
//                   top: '-45px', 
//                   right: 0, 
//                   color: 'white', 
//                   background: 'none', 
//                   border: 'none',
//                   cursor: 'pointer'
//                 }}
//               >
//                 <X size={28} />
//               </button>
//               <div style={{ textAlign: 'center' }}>
//                 <Play size={40} style={{ marginBottom: '1rem', opacity: 0.5 }} />
//                 <p style={{ fontStyle: 'italic', fontFamily: 'var(--font-serif)', fontSize: '0.9rem' }}>Virtual Tour Experience Coming Soon</p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </>
//   )
// }

// export default Hero













































































// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Play } from "lucide-react";
// import { motion, AnimatePresence } from "framer-motion";

// const slides = [
//   {
//     id: 1,
//     image: "/hero-slide-1.jpg",
//     title: "Empowering Young Minds",
//     highlight: "For A Brighter Future",
//     description:
//       "At MayDay International School, we inspire every child to learn, lead, and thrive in a world filled with endless possibilities.",
//   },

//   {
//     id: 2,
//     image: "/hero-slide-2.jpg",
//     title: "Academic Excellence",
//     highlight: "Without Limits",
//     description:
//       "Providing world-class education with modern teaching methods and global standards that prepare students for the future.",
//   },

//   {
//     id: 3,
//     image: "/hero-slide-3.jpg",
//     title: "Building Character",
//     highlight: "Creating Leaders",
//     description:
//       "Developing confident, disciplined and compassionate individuals equipped for tomorrow.",
//   },
// ];

// const Hero = () => {
//   const [activeSlide, setActiveSlide] = useState(0);

//   const intervalRef = useRef();

//   useEffect(() => {
//     intervalRef.current = setInterval(() => {
//       setActiveSlide((prev) => (prev + 1) % slides.length);
//     }, 7000);

//     return () => clearInterval(intervalRef.current);
//   }, []);

//   const slide = slides[activeSlide];

//   return (
//     <section className="relative min-h-screen overflow-hidden">
//       {/* Background */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={slide.id}
//           initial={{ opacity: 0, scale: 1.08 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0"
//         >
//           <img
//             src={slide.image}
//             alt=""
//             className="w-full h-full object-cover"
//           />

//           <div className="absolute inset-0 bg-gradient-to-r from-slate-950/90 via-slate-950/65 to-slate-900/30" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content */}
//       <div className="relative z-20 min-h-screen flex items-center">
//         <div className="max-w-[1450px] mx-auto w-full px-6 lg:px-10">

//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slide.id}
//               initial={{ opacity: 0, y: 40 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: .7 }}
//             >
//               {/* Eyebrow */}
//               <div className="mb-8">
//                 <span className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/10 backdrop-blur-xl px-5 py-3 text-xs font-semibold uppercase tracking-[4px] text-blue-200">
//                   Welcome To MayDay International School
//                 </span>
//               </div>

//               {/* Heading */}
//               <div className="max-w-5xl">
//                 <h1 className="text-white font-extrabold leading-[0.95] tracking-[-0.06em] text-[3.2rem] md:text-[5rem] lg:text-[6.5rem] xl:text-[7.5rem]">
//                   {slide.title}

//                   <span className="block text-blue-400 mt-3">
//                     {slide.highlight}
//                   </span>
//                 </h1>
//               </div>

//               {/* Description */}
//               <div className="mt-10 max-w-2xl">
//                 <p className="text-white/75 text-lg md:text-xl leading-9">
//                   {slide.description}
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="mt-14 flex flex-wrap gap-5">

//                 <Link
//                   to="/admissions"
//                   className="
//                   h-16
//                   px-9
//                   rounded-full
//                   bg-blue-700
//                   text-white
//                   font-semibold
//                   text-sm
//                   flex items-center gap-3
//                   transition-all duration-300
//                   hover:scale-105
//                   shadow-[0_20px_60px_rgba(29,78,216,.35)]
//                   "
//                 >
//                   Apply Now

//                   <ArrowRight className="w-5 h-5" />
//                 </Link>

//                 <button
//                   className="
//                   h-16
//                   px-8
//                   rounded-full
//                   border border-white/10
//                   bg-white/10
//                   backdrop-blur-2xl
//                   text-white
//                   font-semibold
//                   flex items-center gap-4
//                   transition-all duration-300
//                   hover:bg-white/20
//                   "
//                 >
//                   <div className="w-11 h-11 rounded-full bg-white/15 flex items-center justify-center">
//                     <Play className="w-4 h-4 fill-white" />
//                   </div>

//                   Watch Tour
//                 </button>
//               </div>

//               {/* Statistics */}
//               <div
//                 className="
//                 mt-20
//                 grid
//                 grid-cols-1
//                 sm:grid-cols-3
//                 gap-5
//                 max-w-5xl
//                 "
//               >
//                 <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-3xl p-7">
//                   <h2 className="text-white font-bold text-5xl">
//                     1200+
//                   </h2>

//                   <p className="text-white/60 mt-3 text-sm uppercase tracking-[3px]">
//                     Students
//                   </p>
//                 </div>

//                 <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-3xl p-7">
//                   <h2 className="text-white font-bold text-5xl">
//                     98%
//                   </h2>

//                   <p className="text-white/60 mt-3 text-sm uppercase tracking-[3px]">
//                     Success Rate
//                   </p>
//                 </div>

//                 <div className="rounded-[32px] border border-white/10 bg-white/10 backdrop-blur-3xl p-7">
//                   <h2 className="text-white font-bold text-5xl">
//                     15+
//                   </h2>

//                   <p className="text-white/60 mt-3 text-sm uppercase tracking-[3px]">
//                     Years Of Excellence
//                   </p>
//                 </div>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex gap-4 z-30">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveSlide(index)}
//             className={`
//             transition-all duration-500 rounded-full
//             ${
//               activeSlide === index
//                 ? "w-14 h-3 bg-blue-500"
//                 : "w-3 h-3 bg-white/40"
//             }
//             `}
//           />
//         ))}
//       </div>

//       {/* Floating Scroll Indicator */}
//       <div className="hidden lg:flex absolute bottom-10 right-10 z-30">
//         <div className="rounded-full border border-white/10 bg-white/10 backdrop-blur-3xl px-5 py-3 text-white/80 text-sm">
//           Scroll Down ↓
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;












































































































































































































































































import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/hero-slide-1.jpg",
    title: "Empowering Young Minds",
    highlight: "For A Brighter Future",
    description:
      "At MayDay International School, every learner is guided to think deeply, lead confidently, and grow with the discipline needed for a changing world.",
  },
  {
    id: 2,
    image: "/hero-slide-2.jpg",
    title: "Academic Excellence",
    highlight: "Without Limits",
    description:
      "A refined learning environment where modern teaching, strong values, and individual attention prepare students for meaningful achievement.",
  },
  {
    id: 3,
    image: "/hero-slide-3.jpg",
    title: "Building Character",
    highlight: "Creating Leaders",
    description:
      "We nurture confident, compassionate, and capable young people through a school culture designed for excellence in every detail.",
  },
];

const stats = [
  { value: "1200+", label: "Students" },
  { value: "98%", label: "Success Rate" },
  { value: "15+", label: "Years of Excellence" },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % slides.length);
    }, 7500);

    return () => window.clearInterval(intervalRef.current);
  }, []);

  const slide = slides[activeSlide];

  return (
    <div className="relative bg-[#F8FAFC]">
      <section className="relative min-h-[100svh] overflow-hidden bg-[#0F172A]">
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.1, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <motion.img
              src={slide.image}
              alt=""
              initial={{ scale: 1.08 }}
              animate={{ scale: 1.18 }}
              transition={{ duration: 9, ease: "linear" }}
              className="h-full w-full object-cover"
            />

            <div className="absolute inset-0 bg-[#0F172A]/70" />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(15,23,42,0.96)_0%,rgba(15,23,42,0.82)_42%,rgba(15,23,42,0.38)_100%)]" />
            <div className="absolute inset-x-0 bottom-0 h-56 bg-[linear-gradient(180deg,transparent_0%,#F8FAFC_100%)]" />
          </motion.div>
        </AnimatePresence>

        <div className="relative z-10 flex min-h-[100svh] items-center">
          <div className="mx-auto w-full max-w-[1500px] px-5 pb-24 pt-28 sm:px-8 md:pb-28 lg:px-10 xl:px-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={slide.id}
                initial={{ y: 34, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: -18, opacity: 0 }}
                transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                className="max-w-6xl"
              >
                <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.26em] text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.16)] backdrop-blur-2xl sm:mb-8">
                  <Sparkles className="size-3.5 text-white" />
                  MayDay International School
                </div>

                <h1 className="max-w-5xl text-[clamp(3.1rem,8.2vw,6rem)] font-semibold leading-[0.92] tracking-tight text-white">
                  {slide.title}
                  <span className="block text-white/70">{slide.highlight}</span>
                </h1>

                <p className="mt-6 max-w-[700px] text-base leading-7 text-white/76 sm:mt-7 sm:text-lg sm:leading-8 md:text-xl md:leading-9">
                  {slide.description}
                </p>

                <div className="mt-9 flex flex-col gap-3 sm:mt-11 sm:flex-row sm:items-center sm:gap-4">
                  <Link
                    to="/admissions"
                    className="group inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-7 text-sm font-semibold text-white shadow-[0_22px_60px_rgba(29,78,216,0.38)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_28px_76px_rgba(29,78,216,0.48)] sm:h-16 sm:px-9"
                  >
                    Apply Now
                    <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </Link>

                  <button
                    type="button"
                    className="group inline-flex h-14 items-center justify-center gap-3 rounded-full border border-white/18 bg-white/10 px-6 text-sm font-semibold text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.18),0_18px_54px_rgba(15,23,42,0.25)] backdrop-blur-2xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/16 sm:h-16 sm:px-8"
                  >
                    <span className="grid size-9 place-items-center rounded-full bg-white text-[#1D4ED8] transition-transform duration-300 group-hover:scale-105 sm:size-10">
                      <Play className="ml-0.5 size-4 fill-[#1D4ED8]" />
                    </span>
                    Watch Tour
                  </button>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        <div className="absolute bottom-8 left-5 z-20 flex items-center gap-3 sm:left-8 lg:left-10 xl:left-12">
          {slides.map((item, index) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveSlide(index)}
              className={[
                "h-2.5 rounded-full transition-all duration-500",
                activeSlide === index
                  ? "w-12 bg-white"
                  : "w-2.5 bg-white/40 hover:bg-white/70",
              ].join(" ")}
              aria-label={`Show slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-8 right-5 z-20 hidden rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-white/80 backdrop-blur-2xl lg:block">
          Scroll
        </div>
      </section>

      <section className="relative z-20 -mt-16 px-5 pb-16 sm:-mt-20 sm:px-8 lg:px-10 xl:px-12">
        <div className="mx-auto grid max-w-6xl grid-cols-1 overflow-hidden rounded-[28px] border border-[#1D4ED8]/10 bg-white shadow-[0_28px_90px_rgba(15,23,42,0.14)] sm:grid-cols-3">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className={[
                "relative px-7 py-7 sm:px-8 sm:py-9",
                index !== 0 ? "border-t border-[#1D4ED8]/10 sm:border-l sm:border-t-0" : "",
              ].join(" ")}
            >
              <div className="absolute inset-x-0 top-0 h-px bg-[#1D4ED8]/20" />
              <p className="text-[clamp(2.3rem,5vw,4rem)] font-semibold leading-none tracking-tight text-[#1D4ED8]">
                {stat.value}
              </p>
              <p className="mt-3 text-sm font-semibold uppercase tracking-[0.24em] text-[#0F172A]/64">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Hero;