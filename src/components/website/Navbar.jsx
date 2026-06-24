
// import { useEffect, useState } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   GraduationCap,
//   ArrowRight,
//   Menu,
//   X,
//   UserRound,
// } from "lucide-react";

// const navLinks = [
//   {
//     name: "Home",
//     path: "/",
//   },
//   {
//     name: "About",
//     path: "/about",
//   },
//   {
//     name: "Admissions",
//     path: "/admissions",
//   },
//   {
//     name: "Contact",
//     path: "/contact",
//   },
// ];

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [visible, setVisible] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setVisible(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       {/* NAVBAR */}
//       <header
//         className={`
//         fixed
//         top-5
//         left-1/2
//         -translate-x-1/2
//         z-50
//         w-[94%]
//         max-w-7xl
//         transition-all
//         duration-700
//         ${
//           visible
//             ? "translate-y-0 opacity-100"
//             : "-translate-y-10 opacity-0"
//         }
//       `}
//       >
//         <div
//           className="
//           h-20
//           px-4
//           sm:px-8
//           rounded-full
//           border
//           border-white/30
//           bg-white/20
//           backdrop-blur-2xl
//           shadow-[0_20px_60px_rgba(0,0,0,0.08)]
//           flex
//           items-center
//           justify-between
//         "
//         >
//           {/* LOGO */}
//           <Link
//             to="/"
//             className="flex items-center gap-3"
//           >
//             <div
//               className="
//               h-12
//               w-12
//               rounded-2xl
//               bg-blue-700
//               flex
//               items-center
//               justify-center
//               shadow-lg
//             "
//             >
//               <GraduationCap className="w-6 h-6 text-white" />
//             </div>

//             <div className="hidden sm:block">
//               <h2 className="font-bold text-lg text-blue-950">
//                 MayDay
//               </h2>

//               <p className="uppercase tracking-[3px] text-[10px] text-slate-500">
//                 International School
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP LINKS */}
//           <div
//             className="
//             hidden
//             lg:flex
//             items-center
//             gap-2
//             bg-white/50
//             backdrop-blur-xl
//             rounded-full
//             p-2
//           "
//           >
//             {navLinks.map((link) => (
//               <NavLink
//                 key={link.path}
//                 to={link.path}
//                 end={link.path === "/"}
//                 className={({ isActive }) =>
//                   `
//                   px-5
//                   py-3
//                   rounded-full
//                   text-sm
//                   font-medium
//                   transition-all
//                   duration-300
//                   hover:-translate-y-0.5
//                   ${
//                     isActive
//                       ? "bg-blue-700 text-white shadow-lg"
//                       : "text-slate-700 hover:bg-white"
//                   }
//                 `
//                 }
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>

//           {/* RIGHT BUTTONS */}
//           <div className="hidden lg:flex items-center gap-3">
//             {/* PORTAL */}
//             <Link
//               to="/portal/student-login"
//               className="
//               h-12
//               px-5
//               rounded-full
//               bg-blue-50
//               border
//               border-blue-100
//               text-blue-700
//               text-sm
//               font-semibold
//               flex
//               items-center
//               gap-2
//               transition-all
//               duration-300
//               hover:bg-white
//               hover:shadow-xl
//               hover:-translate-y-0.5
//             "
//             >
//               <UserRound className="w-4 h-4" />
//               Portal
//             </Link>

//             {/* APPLY */}
//             <Link
//               to="/admissions"
//               className="
//               h-12
//               px-6
//               rounded-full
//               bg-blue-700
//               text-white
//               text-sm
//               font-semibold
//               flex
//               items-center
//               gap-2
//               transition-all
//               duration-300
//               hover:scale-105
//               shadow-xl
//             "
//             >
//               Apply Now
//               <ArrowRight className="w-4 h-4" />
//             </Link>
//           </div>

//           {/* MOBILE BUTTON */}
//           <button
//             onClick={() => setMobileOpen(true)}
//             className="
//             lg:hidden
//             h-12
//             w-12
//             rounded-full
//             bg-white/40
//             backdrop-blur-xl
//             border
//             border-white/30
//             flex
//             items-center
//             justify-center
//           "
//         >
//             <Menu className="w-5 h-5 text-blue-900" />
//           </button>
//         </div>
//       </header>

//       {/* PREMIUM MOBILE MENU */}
//       <div
//         className={`
//         fixed
//         inset-0
//         z-[100]
//         bg-white/70
//         backdrop-blur-3xl
//         transition-all
//         duration-500
//         ${
//           mobileOpen
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         }
//       `}
//       >
//         {/* TOP */}
//         <div
//           className="
//           h-24
//           px-6
//           flex
//           items-center
//           justify-between
//         "
//         >
//           <div>
//             <h2 className="font-bold text-2xl text-blue-950">
//               MayDay
//             </h2>

//             <p className="text-xs uppercase tracking-[4px] text-slate-500">
//               International School
//             </p>
//           </div>

//           <button
//             onClick={() => setMobileOpen(false)}
//             className="
//             h-12
//             w-12
//             rounded-full
//             bg-white
//             shadow-lg
//             flex
//             items-center
//             justify-center
//           "
//           >
//             <X className="text-blue-900" />
//           </button>
//         </div>

//         {/* LINKS */}
//         <div
//           className="
//           mt-12
//           px-8
//           flex
//           flex-col
//           gap-7
//         "
//         >
//           {navLinks.map((link) => (
//             <NavLink
//               key={link.path}
//               to={link.path}
//               onClick={() => setMobileOpen(false)}
//               className="
//               text-4xl
//               font-semibold
//               text-blue-950
//               transition-all
//               duration-300
//               hover:translate-x-2
//             "
//             >
//               {link.name}
//             </NavLink>
//           ))}

//           {/* BUTTONS */}
//           <div className="pt-12 space-y-4">
//             <Link
//               to="/portal/student-login"
//               onClick={() => setMobileOpen(false)}
//               className="
//               h-14
//               rounded-2xl
//               bg-blue-50
//               border
//               border-blue-100
//               text-blue-700
//               font-semibold
//               flex
//               items-center
//               justify-center
//               gap-3
//               shadow-lg
//             "
//             >
//               <UserRound className="w-5 h-5" />
//               Student Portal
//             </Link>

//             <Link
//               to="/admissions"
//               onClick={() => setMobileOpen(false)}
//               className="
//               h-14
//               rounded-2xl
//               bg-blue-700
//               text-white
//               font-bold
//               flex
//               items-center
//               justify-center
//               gap-3
//               shadow-[0_20px_40px_rgba(29,78,216,0.3)]
//             "
//             >
//               Apply Now
//               <ArrowRight className="w-5 h-5" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;







































































































































import { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRight,
  GraduationCap,
  Menu,
  Sparkles,
  UserRound,
  X,
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

// ─── Spring presets ────────────────────────────────────────────────────────
const springSnappy = { type: "spring", stiffness: 420, damping: 38 };
const springSmooth = { type: "spring", stiffness: 280, damping: 32 };

// ─── Palette (blue + white only) ──────────────────────────────────────────
// #1D4ED8  — brand blue
// #1641B0  — blue-700 (hover/depth)
// #0A1628  — deep navy (text)
// #DBEAFE  — blue-100 (tint backgrounds)
// #EFF6FF  — blue-50  (lightest wash)
// white / white/α — backgrounds

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(true); // show at top on load
  const lastScrollY = useRef(0);

  // ── Scroll-hide / scroll-reveal ─────────────────────────────────────────
  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const scrollingUp = currentY < lastScrollY.current;

      if (currentY <= 40) {
        setVisible(true); // always show near top
      } else {
        setVisible(scrollingUp);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ── Lock body scroll when mobile menu is open ───────────────────────────
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* ── Desktop / tablet floating nav ─────────────────────────────── */}
      <motion.header
        initial={{ y: 0, opacity: 1 }}
        animate={visible ? { y: 0, opacity: 1, scale: 1 } : { y: -32, opacity: 0, scale: 0.97 }}
        transition={springSmooth}
        className="fixed left-1/2 top-5 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2"
      >
        <div
          className="flex h-16 items-center justify-between rounded-full border border-blue-200/60 bg-white/80 px-3 shadow-[0_8px_32px_rgba(29,78,216,0.10),0_2px_8px_rgba(29,78,216,0.06)] backdrop-blur-2xl sm:h-[72px] sm:px-4"
        >
          {/* Brand */}
          <Link to="/" className="group flex min-w-0 shrink-0 items-center gap-3 pr-2">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#1D4ED8] text-white shadow-[0_8px_24px_rgba(29,78,216,0.30)] transition-transform duration-300 group-hover:scale-105 sm:size-12">
              <GraduationCap className="size-5 sm:size-6" />
            </span>
            <span className="hidden sm:block">
              <span className="block text-[15px] font-bold leading-none tracking-tight text-[#0A1628]">
                MayDay
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.30em] text-[#1D4ED8]">
                International
              </span>
            </span>
          </Link>

          {/* Desktop nav links */}
          <nav
            aria-label="Primary navigation"
            className="mx-2 hidden items-center rounded-full border border-blue-100 bg-blue-50/60 p-1.5 shadow-inner shadow-white/80 lg:flex"
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 xl:px-5",
                    isActive
                      ? "bg-[#1D4ED8] text-white shadow-[0_6px_20px_rgba(29,78,216,0.25)]"
                      : "text-[#0A1628]/70 hover:bg-white hover:text-[#1D4ED8]",
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTAs */}
          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/portal/student-login"
              className="inline-flex h-11 items-center gap-2 rounded-full border border-[#1D4ED8]/25 bg-[#1D4ED8]/8 px-4 text-sm font-semibold text-[#1D4ED8] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8]/14 hover:shadow-[0_8px_24px_rgba(29,78,216,0.14)]"
            >
              <UserRound className="size-4" />
              Student Portal
            </Link>

            <Link
              to="/admissions"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#1D4ED8] px-5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(29,78,216,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1641B0] hover:shadow-[0_12px_36px_rgba(29,78,216,0.42)]"
            >
              Apply Now
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Mobile hamburger */}
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            className="grid size-11 place-items-center rounded-full border border-blue-200/60 bg-white/80 text-[#0A1628] shadow-[0_4px_16px_rgba(29,78,216,0.08)] backdrop-blur-xl transition-all duration-300 hover:text-[#1D4ED8] lg:hidden"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </motion.header>

      {/* ── Mobile full-screen menu ──────────────────────────────────────── */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 12 }}
            transition={{ duration: 0.30, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[100] overflow-hidden bg-white text-[#0A1628]"
          >
            {/* Subtle blue radial wash */}
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_40%_at_50%_0%,rgba(219,234,254,0.55),transparent_70%)]" />

            <div className="relative flex min-h-dvh flex-col px-5 py-5 sm:px-8">
              {/* Header row */}
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-[#1D4ED8] text-white shadow-[0_8px_24px_rgba(29,78,216,0.28)]">
                    <GraduationCap className="size-6" />
                  </span>
                  <span>
                    <span className="block text-lg font-bold leading-none tracking-tight text-[#0A1628]">
                      MayDay
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.30em] text-[#1D4ED8]">
                      International School
                    </span>
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  aria-label="Close navigation menu"
                  className="grid size-12 place-items-center rounded-full border border-blue-100 bg-white text-[#0A1628] shadow-[0_4px_16px_rgba(29,78,216,0.08)] transition-colors duration-200 hover:text-[#1D4ED8]"
                >
                  <X className="size-5" />
                </button>
              </div>

              {/* Nav links */}
              <div className="flex flex-1 flex-col justify-center py-10">
                <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#1D4ED8]/20 bg-[#1D4ED8]/8 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
                  <Sparkles className="size-3.5" />
                  Explore
                </div>

                <nav aria-label="Mobile navigation" className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.06 + index * 0.055,
                        ...springSnappy,
                      }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.path === "/"}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          [
                            "group flex items-center justify-between border-b border-blue-100 py-5 text-[clamp(2.2rem,12vw,4.5rem)] font-bold leading-[0.92] tracking-tight transition-colors duration-250",
                            isActive
                              ? "text-[#1D4ED8]"
                              : "text-[#0A1628] hover:text-[#1D4ED8]",
                          ].join(" ")
                        }
                      >
                        {link.name}
                        <ArrowRight className="size-6 shrink-0 opacity-30 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              {/* Mobile CTAs */}
              <div className="grid gap-3 pb-4 sm:grid-cols-2">
                <Link
                  to="/portal/student-login"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#1D4ED8]/25 bg-[#1D4ED8]/8 px-5 text-sm font-semibold text-[#1D4ED8] transition-colors duration-200 hover:bg-[#1D4ED8]/14"
                >
                  <UserRound className="size-4" />
                  Student Portal
                </Link>

                <Link
                  to="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-5 text-sm font-semibold text-white shadow-[0_8px_28px_rgba(29,78,216,0.30)] transition-all duration-200 hover:bg-[#1641B0]"
                >
                  Apply Now
                  <ArrowRight className="size-4" />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;