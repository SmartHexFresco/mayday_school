import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Play, X, GraduationCap, Users, Trophy, Calendar, ChevronLeft, ChevronRight } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'

// ── Google Fonts ─────────────────
const FontLoader = () => (
  <link 
    href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap" 
    rel="stylesheet" 
  />
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
    eyebrow: 'Holistic Development',
    heading: 'Beyond the Classroom,',
    highlight: 'Into the Future',
    subheading: 'Sports, ICT, arts, clubs, and cultural activities — developing complete, confident individuals.',
    primaryCTA: { label: 'Specialties', path: '/specialties', external: false },
    secondaryCTA: { label: 'Contact Us', path: '/contact', external: false },
    bgImage: '/hero-slide-3.jpg',
  },
  {
    id: 4,
    eyebrow: 'Modern Facilities',
    heading: 'State-of-the-Art',
    highlight: 'Learning Environment',
    subheading: 'Well-equipped classrooms, science labs, computer rooms, and sports facilities.',
    primaryCTA: { label: 'Take a Tour', path: '/gallery', external: false },
    secondaryCTA: { label: 'Enroll Now', path: '/admissions', external: false },
    bgImage: '/hero-slide-4.jpg',
  },
  {
    id: 5,
    eyebrow: 'Join Our Family',
    heading: 'Start Your Journey',
    highlight: 'With Us Today',
    subheading: 'Give your child quality education, strong values, and a supportive community.',
    primaryCTA: { label: 'Contact Us', path: '/contact', external: false },
    secondaryCTA: { label: 'Learn More', path: '/about', external: false },
    bgImage: '/hero-slide-5.jpg',
  },
]

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
      
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700;800;900&family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&display=swap');
        
        .hero-root {
          --brand-gold: #D4AF37;
          --font-serif: 'Playfair Display', serif;
          --font-sans: 'Plus Jakarta Sans', sans-serif;
          font-family: var(--font-sans);
          color: white;
          position: relative;
          height: 100svh;
          overflow: hidden;
        }
        
        .hero-bg {
          position: absolute;
          inset: 0;
          background-size: cover;
          background-position: center;
          z-index: -2;
          transform: scale(1.1);
          transition: transform 10s linear;
        }
        
        .hero-bg-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to right, rgba(0,0,0,0.8) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%);
          z-index: -1;
        }
        
        .hero-h1 {
          font-family: var(--font-serif);
          font-size: clamp(2.5rem, 8vw, 5rem);
          line-height: 1.1;
          font-weight: 900;
          margin-bottom: 1.5rem;
        }
        
        .hero-h1 .highlight {
          display: block;
          color: var(--brand-gold);
          font-style: italic;
          font-weight: 700;
        }
        
        .hero-sub {
          font-size: clamp(1rem, 2vw, 1.25rem);
          max-width: 600px;
          line-height: 1.6;
          margin-bottom: 2.5rem;
          color: rgba(255,255,255,0.8);
          font-weight: 300;
        }
        
        .btn-primary {
          background: var(--brand-gold);
          color: black;
          padding: 16px 32px;
          border-radius: 100px;
          font-weight: 600;
          display: inline-flex;
          align-items: center;
          gap: 8px;
          transition: all 0.3s ease;
          text-decoration: none;
        }
        
        .btn-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 10px 20px rgba(212, 175, 55, 0.3);
        }
        
        .btn-ghost {
          border: 1px solid rgba(255,255,255,0.3);
          padding: 16px 32px;
          border-radius: 100px;
          font-weight: 600;
          backdrop-filter: blur(10px);
          transition: all 0.3s ease;
          text-decoration: none;
          display: inline-flex;
          align-items: center;
          color: white;
        }
        
        .btn-ghost:hover {
          background: white;
          color: black;
        }
        
        .slide-nav {
          position: absolute;
          bottom: 40px;
          right: 40px;
          display: flex;
          gap: 20px;
          align-items: center;
          z-index: 20;
        }
        
        .progress-dot {
          width: 40px;
          height: 3px;
          background: rgba(255,255,255,0.2);
          border-radius: 2px;
          overflow: hidden;
          position: relative;
          cursor: pointer;
        }
        
        .progress-fill {
          position: absolute;
          left: 0;
          top: 0;
          height: 100%;
          background: var(--brand-gold);
          width: 0%;
        }
        
        .modal-bg {
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.9);
          z-index: 100;
          display: flex;
          align-items: center;
          justify-content: center;
          backdrop-filter: blur(10px);
        }
        
        @keyframes slideFadeIn {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .content-animate {
          animation: slideFadeIn 0.6s ease-out;
        }
      `}</style>

      <section className="hero-root">
        
        {/* Background Layer */}
        <AnimatePresence mode="wait">
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
                transition={{ duration: 0.6 }}
                className="content-animate"
              >
                <span style={{ 
                  color: '#D4AF37', 
                  fontWeight: 600, 
                  letterSpacing: '2px', 
                  textTransform: 'uppercase', 
                  fontSize: '0.875rem', 
                  display: 'block', 
                  marginBottom: '1rem' 
                }}>
                  {slide.eyebrow}
                </span>

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
                    style={{ 
                      background: 'none', 
                      border: 'none', 
                      color: 'white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      gap: '10px', 
                      cursor: 'pointer', 
                      fontWeight: 500 
                    }}
                  >
                    <div style={{ 
                      width: 48, 
                      height: 48, 
                      borderRadius: '50%', 
                      border: '1px solid white', 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      paddingLeft: '4px' 
                    }}>
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
            <div 
              key={i} 
              onClick={() => { setActiveSlide(i); startInterval(); }} 
              className="progress-dot"
            >
              {activeSlide === i && (
                <motion.div 
                  className="progress-fill" 
                  initial={{ width: "0%" }} 
                  animate={{ width: "100%" }} 
                  transition={{ duration: 8, ease: "linear" }}
                />
              )}
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
            <div style={{ 
              position: 'relative', 
              width: '90%', 
              maxWidth: '1000px', 
              aspectRatio: '16/9', 
              background: '#111', 
              borderRadius: '20px', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center' 
            }}>
              <button 
                onClick={() => setShowVideo(false)}
                style={{ 
                  position: 'absolute', 
                  top: '-50px', 
                  right: 0, 
                  color: 'white', 
                  background: 'none', 
                  border: 'none',
                  cursor: 'pointer'
                }}
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