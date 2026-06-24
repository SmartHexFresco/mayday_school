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














































































// Premium Hero (Apple × Vercel × Framer Inspired)
// Blue + White Theme

import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Play,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    title: "Empowering Young Minds",
    highlight: "For A Brighter Future",
    description:
      "At MayDay International School, every child is inspired to learn, lead, and thrive in a world of endless possibilities.",
    image: "/hero-slide-1.jpg",
  },

  {
    id: 2,
    title: "Academic Excellence",
    highlight: "Without Limits",
    description:
      "Providing world-class education with modern teaching methods and global standards.",
    image: "/hero-slide-2.jpg",
  },

  {
    id: 3,
    title: "Building Character",
    highlight: "Creating Leaders",
    description:
      "Developing confident, disciplined, and compassionate individuals prepared for tomorrow.",
    image: "/hero-slide-3.jpg",
  },
];

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const intervalRef = useRef(null);

  useEffect(() => {
    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, 7000);

    return () => clearInterval(intervalRef.current);
  }, []);

  const slide = slides[activeSlide];

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{
            opacity: 0,
            scale: 1.1,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          exit={{
            opacity: 0,
          }}
          transition={{
            duration: 1.5,
          }}
          className="absolute inset-0"
        >
          <img
            src={slide.image}
            className="w-full h-full object-cover"
            alt=""
          />

          <div
            className="
            absolute
            inset-0
            bg-gradient-to-r
            from-[#0F172A]/85
            via-[#0F172A]/65
            to-[#0F172A]/20
          "
          />
        </motion.div>
      </AnimatePresence>

      {/* Main Content */}
      <div
        className="
        relative
        z-20
        h-full
        max-w-7xl
        mx-auto
        px-6
        flex
        items-center
      "
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={slide.id}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.7,
            }}
            className="
            max-w-3xl
            rounded-[40px]
            border
            border-white/10
            bg-white/10
            backdrop-blur-2xl
            shadow-[0_30px_80px_rgba(0,0,0,.2)]
            p-8
            md:p-12
          "
          >
            {/* Eyebrow */}
            <div
              className="
              text-blue-200
              uppercase
              tracking-[4px]
              text-xs
              font-semibold
              mb-5
            "
            >
              Welcome To MayDay International School
            </div>

            {/* Heading */}
            <h1
              className="
              text-white
              text-4xl
              md:text-7xl
              font-extrabold
              leading-[1.05]
              tracking-tight
            "
            >
              {slide.title}

              <span
                className="
                block
                text-blue-400
                mt-2
              "
              >
                {slide.highlight}
              </span>
            </h1>

            {/* Description */}
            <p
              className="
              mt-8
              text-white/80
              leading-8
              text-base
              md:text-lg
              max-w-2xl
            "
            >
              {slide.description}
            </p>

            {/* Buttons */}
            <div
              className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
            >
              <Link
                to="/admissions"
                className="
                h-14
                px-8
                rounded-full
                bg-blue-700
                text-white
                font-semibold
                flex
                items-center
                gap-3
                shadow-[0_20px_40px_rgba(29,78,216,.4)]
                hover:scale-105
                transition-all
              "
              >
                Apply Now

                <ArrowRight className="w-5 h-5" />
              </Link>

              <button
                className="
                h-14
                px-8
                rounded-full
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                text-white
                font-semibold
                flex
                items-center
                gap-3
                hover:bg-white/20
                transition-all
              "
              >
                <div
                  className="
                  w-10
                  h-10
                  rounded-full
                  bg-white/20
                  flex
                  items-center
                  justify-center
                "
                >
                  <Play className="w-4 h-4 fill-white" />
                </div>

                Watch Tour
              </button>
            </div>

            {/* Stats */}
            <div
              className="
              mt-14
              grid
              grid-cols-3
              gap-4
            "
            >
              <div
                className="
                rounded-3xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                p-5
              "
              >
                <h3 className="text-white text-3xl font-bold">
                  1200+
                </h3>

                <p className="text-white/70 mt-2 text-sm">
                  Students
                </p>
              </div>

              <div
                className="
                rounded-3xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                p-5
              "
              >
                <h3 className="text-white text-3xl font-bold">
                  98%
                </h3>

                <p className="text-white/70 mt-2 text-sm">
                  Success Rate
                </p>
              </div>

              <div
                className="
                rounded-3xl
                bg-white/10
                border
                border-white/10
                backdrop-blur-xl
                p-5
              >
                <h3 className="text-white text-3xl font-bold">
                  15+
                </h3>

                <p className="text-white/70 mt-2 text-sm">
                  Years Experience
                </p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Indicators */}
      <div
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        flex
        gap-3
        z-30
      "
      >
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveSlide(index)}
            className={`
              transition-all
              duration-500
              rounded-full
              ${
                activeSlide === index
                  ? "w-12 h-3 bg-blue-500"
                  : "w-3 h-3 bg-white/50"
              }
            `}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;

