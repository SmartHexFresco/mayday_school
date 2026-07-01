import { useCallback, useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Play } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const slides = [
  {
    id: 1,
    image: "/hero-slide-1.jpg",
    title: "Empowering Young Minds",
    highlight: "For A Brighter Future",
    description:
      "At MayDay International School, we inspire every child to learn, lead, and thrive in a world filled with endless possibilities.",
  },
  {
    id: 2,
    image: "/hero-slide-2.jpg",
    title: "Academic Excellence",
    highlight: "Without Limits",
    description:
      "Providing world-class education with modern teaching methods and global standards that prepare students for the future.",
  },
  {
    id: 3,
    image: "/hero-slide-3.jpg",
    title: "Building Character",
    highlight: "Creating Leaders",
    description:
      "Developing confident, disciplined and compassionate individuals equipped for tomorrow.",
  },
];

const AUTOPLAY_MS = 7000;

const Hero = () => {
  const [activeSlide, setActiveSlide] = useState(0);
  const [paused, setPaused] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  // Per-slide load status: "idle" | "loading" | "loaded" | "error".
  // Drives the skeleton placeholder and the graceful fallback background,
  // so a missing/slow image never shows a broken-image icon or a flash
  // of empty space.
  const [imgStatus, setImgStatus] = useState({});

  const intervalRef = useRef(null);
  const preloadedRef = useRef(new Set());

  // Respect reduced-motion: no autoplay, no slow zoom pan on the image.
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);
    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  const preloadSlide = useCallback((slide) => {
    if (!slide || preloadedRef.current.has(slide.id)) return;
    preloadedRef.current.add(slide.id);

    setImgStatus((s) => ({ ...s, [slide.id]: "loading" }));
    const img = new Image();
    img.src = slide.image;
    img.onload = () => setImgStatus((s) => ({ ...s, [slide.id]: "loaded" }));
    img.onerror = () => setImgStatus((s) => ({ ...s, [slide.id]: "error" }));
  }, []);

  // Load the first slide right away (it's the LCP element), and the second
  // shortly after so the first transition is instant. Everything else only
  // loads just before it's needed — real lazy loading for a carousel
  // instead of fetching all hero images up front.
  useEffect(() => {
    preloadSlide(slides[0]);
    const timer = setTimeout(() => preloadSlide(slides[1]), 400);
    return () => clearTimeout(timer);
  }, [preloadSlide]);

  // Always keep the *next* slide warmed up as the active one changes.
  useEffect(() => {
    preloadSlide(slides[(activeSlide + 1) % slides.length]);
  }, [activeSlide, preloadSlide]);

  // Autoplay — paused on hover/focus, when the tab isn't visible, or when
  // the person prefers reduced motion.
  useEffect(() => {
    if (paused || prefersReducedMotion) return undefined;

    intervalRef.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % slides.length);
    }, AUTOPLAY_MS);

    return () => clearInterval(intervalRef.current);
  }, [paused, prefersReducedMotion]);

  useEffect(() => {
    const handleVisibility = () => setPaused(document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  const goToSlide = useCallback(
    (index) => {
      preloadSlide(slides[index]);
      setActiveSlide(index);
    },
    [preloadSlide]
  );

  const slide = slides[activeSlide];
  const status = imgStatus[slide.id] ?? "idle";
  const duration = prefersReducedMotion ? 0 : 1.2;

  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-blue-900"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onFocus={() => setPaused(true)}
      onBlur={() => setPaused(false)}
      aria-roledescription="carousel"
      aria-label="MayDay International School highlights"
    >
      {/* Background */}
      <AnimatePresence mode="wait">
        <motion.div
          key={slide.id}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration }}
          className="absolute inset-0"
        >
          {/* Skeleton / fallback shown until the image reports loaded,
              and permanently if it fails — flat, brand-colored, no
              broken-image icon ever visible. */}
          {status !== "loaded" && (
            <div
              className={`absolute inset-0 bg-gradient-to-br from-blue-800 via-blue-900 to-blue-950 ${
                status === "loading" && !prefersReducedMotion ? "animate-pulse" : ""
              }`}
              aria-hidden="true"
            />
          )}

          {status !== "error" && (
            <motion.img
              src={slide.image}
              alt=""
              loading={activeSlide === 0 ? "eager" : "lazy"}
              decoding="async"
              fetchPriority={activeSlide === 0 ? "high" : "auto"}
              initial={{ scale: prefersReducedMotion ? 1 : 1.08 }}
              animate={{ scale: 1 }}
              transition={{ duration: prefersReducedMotion ? 0 : 8, ease: "easeOut" }}
              onLoad={() =>
                setImgStatus((s) => ({ ...s, [slide.id]: "loaded" }))
              }
              onError={() =>
                setImgStatus((s) => ({ ...s, [slide.id]: "error" }))
              }
              className={`absolute inset-0 h-full w-full object-cover object-center transition-opacity duration-700 ${
                status === "loaded" ? "opacity-100" : "opacity-0"
              }`}
            />
          )}

          <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/75 to-[#0F172A]/35" />
        </motion.div>
      </AnimatePresence>

      {/* Content — top padding clears the floating glass navbar */}
      <div className="relative z-20 flex min-h-[100svh] items-center pt-28 lg:pt-24">
        <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={slide.id}
              initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 35 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: prefersReducedMotion ? 0 : 0.7 }}
            >
              {/* Eyebrow — echoes the navbar's amber accent dot */}
              <div className="mb-7">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/10 px-5 py-3 text-[11px] font-semibold uppercase tracking-[3px] text-blue-100 backdrop-blur-2xl">
                  <span className="h-1.5 w-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                  Welcome To MayDay International School
                </span>
              </div>

              {/* Heading */}
              <div className="max-w-4xl">
                <h1 className="text-[3.2rem] font-extrabold leading-[1.02] tracking-[-0.05em] text-white md:text-[4.5rem] lg:text-[5.5rem] xl:text-[6rem]">
                  {slide.title}
                  <span className="mt-3 block text-blue-400">{slide.highlight}</span>
                </h1>
              </div>

              {/* Description */}
              <div className="mt-7 max-w-xl">
                <p className="text-base leading-8 text-white/75 md:text-lg">
                  {slide.description}
                </p>
              </div>

              {/* Buttons — flat, solid-color, same treatment as the navbar */}
              <div className="mt-10 flex flex-wrap gap-4">
                <Link
                  to="/admissions"
                  className="flex h-14 items-center gap-3 rounded-full bg-blue-600 px-8 text-sm font-semibold text-white transition-colors duration-300 hover:bg-blue-700"
                >
                  Apply Now
                  <ArrowRight className="h-5 w-5" aria-hidden="true" />
                </Link>

                <button
                  type="button"
                  aria-label="Watch the MayDay International School campus tour"
                  className="flex h-14 items-center gap-3 rounded-full border border-white/10 bg-white/10 px-7 text-sm font-semibold text-white backdrop-blur-2xl transition-colors duration-300 hover:bg-white/20"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
                    <Play className="h-4 w-4" aria-hidden="true" />
                  </div>
                  Watch Tour
                </button>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Indicators + autoplay progress */}
      <div className="absolute bottom-8 left-1/2 z-30 flex -translate-x-1/2 flex-col items-center gap-3">
        <div
          className="flex gap-3"
          role="tablist"
          aria-label="Hero slides"
        >
          {slides.map((s, index) => {
            const isActive = activeSlide === index;
            return (
              <button
                key={s.id}
                type="button"
                role="tab"
                aria-selected={isActive}
                aria-current={isActive}
                aria-label={`Show slide ${index + 1}: ${s.title}`}
                onClick={() => goToSlide(index)}
                className={`relative h-3 overflow-hidden rounded-full transition-all duration-500 ${
                  isActive ? "w-12 bg-white/25" : "w-3 bg-white/40 hover:bg-white/60"
                }`}
              >
                {isActive && !prefersReducedMotion && !paused && (
                  <motion.span
                    key={`${s.id}-progress`}
                    initial={{ width: "0%" }}
                    animate={{ width: "100%" }}
                    transition={{ duration: AUTOPLAY_MS / 1000, ease: "linear" }}
                    className="absolute inset-y-0 left-0 bg-amber-400"
                  />
                )}
                {isActive && (prefersReducedMotion || paused) && (
                  <span className="absolute inset-0 bg-amber-400" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Hero;








































































// import { useEffect, useRef, useState } from "react";
// import { Link } from "react-router-dom";
// import { ArrowRight, Play } from "lucide-react";
// import { AnimatePresence, motion } from "framer-motion";

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

//   const intervalRef = useRef(null);

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
//           initial={{ opacity: 0 }}
//           animate={{ opacity: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.2 }}
//           className="absolute inset-0"
//         >
//           <motion.img
//             src={slide.image}
//             alt={slide.title}
//             initial={{ scale: 1.08 }}
//             animate={{ scale: 1 }}
//             transition={{
//               duration: 8,
//               ease: "easeOut",
//             }}
//             className="absolute inset-0 h-full w-full object-cover object-center"
//           />

//           <div className="absolute inset-0 bg-gradient-to-r from-[#0F172A]/95 via-[#0F172A]/75 to-[#0F172A]/35" />
//         </motion.div>
//       </AnimatePresence>

//       {/* Content */}
//       <div className="relative z-20 flex min-h-screen items-center">
//         <div className="mx-auto w-full max-w-7xl px-6 lg:px-10">
//           <AnimatePresence mode="wait">
//             <motion.div
//               key={slide.id}
//               initial={{ opacity: 0, y: 35 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0 }}
//               transition={{ duration: 0.7 }}
//             >
//               {/* Eyebrow */}
//               <div className="mb-7">
//                 <span
//                   className="
//                   inline-flex
//                   items-center
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-white/10
//                   px-5
//                   py-3
//                   text-[11px]
//                   font-semibold
//                   uppercase
//                   tracking-[3px]
//                   text-blue-200
//                   backdrop-blur-2xl
//                 "
//                 >
//                   Welcome To MayDay International School
//                 </span>
//               </div>

//               {/* Heading */}
//               <div className="max-w-4xl">
//                 <h1
//                   className="
//                   text-[3.2rem]
//                   font-extrabold
//                   leading-[1.02]
//                   tracking-[-0.05em]
//                   text-white
//                   md:text-[4.5rem]
//                   lg:text-[5.5rem]
//                   xl:text-[6rem]
//                 "
//                 >
//                   {slide.title}

//                   <span className="mt-3 block text-blue-400">
//                     {slide.highlight}
//                   </span>
//                 </h1>
//               </div>

//               {/* Description */}
//               <div className="mt-7 max-w-xl">
//                 <p className="text-base leading-8 text-white/75 md:text-lg">
//                   {slide.description}
//                 </p>
//               </div>

//               {/* Buttons */}
//               <div className="mt-10 flex flex-wrap gap-4">
//                 <Link
//                   to="/admissions"
//                   className="
//                   flex
//                   h-14
//                   items-center
//                   gap-3
//                   rounded-full
//                   bg-blue-700
//                   px-8
//                   text-sm
//                   font-semibold
//                   text-white
//                   shadow-[0_20px_50px_rgba(29,78,216,.35)]
//                   transition-all
//                   duration-300
//                   hover:scale-105
//                 "
//                 >
//                   Apply Now

//                   <ArrowRight className="h-5 w-5" />
//                 </Link>

//                 <button
//                   className="
//                   flex
//                   h-14
//                   items-center
//                   gap-3
//                   rounded-full
//                   border
//                   border-white/10
//                   bg-white/10
//                   px-7
//                   text-sm
//                   font-semibold
//                   text-white
//                   backdrop-blur-2xl
//                   transition-all
//                   duration-300
//                   hover:bg-white/20
//                 "
//                 >
//                   <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/15">
//                     <Play className="h-4 w-4" />
//                   </div>

//                   Watch Tour
//                 </button>
//               </div>
//             </motion.div>
//           </AnimatePresence>
//         </div>
//       </div>

//       {/* Indicators */}
//       <div className="absolute bottom-7 left-1/2 z-30 flex -translate-x-1/2 gap-3">
//         {slides.map((_, index) => (
//           <button
//             key={index}
//             onClick={() => setActiveSlide(index)}
//             className={`rounded-full transition-all duration-500 ${
//               activeSlide === index
//                 ? "h-3 w-12 bg-blue-500"
//                 : "h-3 w-3 bg-white/40"
//             }`}
//           />
//         ))}
//       </div>
//     </section>
//   );
// };

// export default Hero;

