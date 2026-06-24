
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

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingUp = currentScrollY < lastScrollY.current;

      if (currentScrollY <= 60) {
        setVisible(false);
      } else {
        setVisible(scrollingUp);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <motion.header
        initial={false}
        animate={visible ? "show" : "hide"}
        variants={{
          show: { y: 0, opacity: 1, scale: 1 },
          hide: { y: -28, opacity: 0, scale: 0.98 },
        }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className="fixed left-1/2 top-5 z-50 w-[calc(100%-24px)] max-w-6xl -translate-x-1/2 lg:w-auto"
      >
        <div className="flex h-16 items-center justify-between rounded-full border border-white/35 bg-white/70 px-3 shadow-[0_18px_70px_rgba(15,23,42,0.16)] backdrop-blur-2xl sm:h-[72px] sm:px-4">
          <Link to="/" className="group flex min-w-0 items-center gap-3 pr-2">
            <span className="grid size-11 shrink-0 place-items-center rounded-full bg-[#1D4ED8] text-white shadow-[0_14px_35px_rgba(29,78,216,0.35)] transition-transform duration-300 group-hover:scale-105 sm:size-12">
              <GraduationCap className="size-5 sm:size-6" />
            </span>

            <span className="hidden min-w-[128px] sm:block">
              <span className="block text-[15px] font-semibold leading-none tracking-tight text-[#0F172A]">
                MayDay
              </span>
              <span className="mt-1 block text-[9px] font-semibold uppercase tracking-[0.28em] text-[#1D4ED8]">
                International
              </span>
            </span>
          </Link>

          <nav className="mx-2 hidden items-center rounded-full border border-[#1D4ED8]/10 bg-white/55 p-1.5 shadow-inner shadow-white/50 lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  [
                    "rounded-full px-4 py-2.5 text-sm font-medium transition-all duration-300 xl:px-5",
                    isActive
                      ? "bg-[#0F172A] text-white shadow-[0_10px_28px_rgba(15,23,42,0.18)]"
                      : "text-[#0F172A]/75 hover:bg-white hover:text-[#1D4ED8]",
                  ].join(" ")
                }
              >
                {link.name}
              </NavLink>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Link
              to="/portal/student-login"
              className="group inline-flex h-11 items-center gap-2 rounded-full border border-[#1D4ED8]/20 bg-[#1D4ED8]/10 px-4 text-sm font-semibold text-[#1D4ED8] shadow-[inset_0_1px_0_rgba(255,255,255,0.7),0_12px_34px_rgba(29,78,216,0.12)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#1D4ED8]/15"
            >
              <UserRound className="size-4" />
              Student Portal
            </Link>

            <Link
              to="/admissions"
              className="group inline-flex h-11 items-center gap-2 rounded-full bg-[#1D4ED8] px-5 text-sm font-semibold text-white shadow-[0_16px_42px_rgba(29,78,216,0.35)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_20px_54px_rgba(29,78,216,0.45)]"
            >
              Apply Now
              <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="grid size-11 place-items-center rounded-full border border-[#1D4ED8]/15 bg-white/70 text-[#0F172A] shadow-[0_10px_28px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-all duration-300 hover:text-[#1D4ED8] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="size-5" />
          </button>
        </div>
      </motion.header>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35, ease: "easeOut" }}
            className="fixed inset-0 z-[100] overflow-hidden bg-white text-[#0F172A]"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(29,78,216,0.18),transparent_34%),linear-gradient(180deg,#FFFFFF_0%,#F8FAFC_100%)]" />

            <div className="relative flex min-h-dvh flex-col px-5 py-5 sm:px-8">
              <div className="flex items-center justify-between">
                <Link
                  to="/"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center gap-3"
                >
                  <span className="grid size-12 place-items-center rounded-full bg-[#1D4ED8] text-white shadow-[0_14px_35px_rgba(29,78,216,0.35)]">
                    <GraduationCap className="size-6" />
                  </span>
                  <span>
                    <span className="block text-lg font-semibold leading-none tracking-tight">
                      MayDay
                    </span>
                    <span className="mt-1 block text-[10px] font-semibold uppercase tracking-[0.3em] text-[#1D4ED8]">
                      International School
                    </span>
                  </span>
                </Link>

                <button
                  type="button"
                  onClick={() => setMobileOpen(false)}
                  className="grid size-12 place-items-center rounded-full border border-[#0F172A]/10 bg-white text-[#0F172A] shadow-[0_14px_40px_rgba(15,23,42,0.1)]"
                  aria-label="Close menu"
                >
                  <X className="size-5" />
                </button>
              </div>

              <div className="flex flex-1 flex-col justify-center py-10">
                <div className="mb-8 inline-flex w-fit items-center gap-2 rounded-full border border-[#1D4ED8]/15 bg-[#1D4ED8]/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1D4ED8]">
                  <Sparkles className="size-3.5" />
                  Explore
                </div>

                <nav className="flex flex-col gap-1">
                  {navLinks.map((link, index) => (
                    <motion.div
                      key={link.path}
                      initial={{ y: 24, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{
                        delay: 0.08 + index * 0.06,
                        duration: 0.45,
                        ease: [0.22, 1, 0.36, 1],
                      }}
                    >
                      <NavLink
                        to={link.path}
                        end={link.path === "/"}
                        onClick={() => setMobileOpen(false)}
                        className={({ isActive }) =>
                          [
                            "group flex items-center justify-between border-b border-[#0F172A]/10 py-5 text-[clamp(2.35rem,13vw,5rem)] font-semibold leading-[0.92] tracking-tight transition-colors duration-300",
                            isActive
                              ? "text-[#1D4ED8]"
                              : "text-[#0F172A] hover:text-[#1D4ED8]",
                          ].join(" ")
                        }
                      >
                        {link.name}
                        <ArrowRight className="size-6 shrink-0 opacity-40 transition-all duration-300 group-hover:translate-x-1 group-hover:opacity-100" />
                      </NavLink>
                    </motion.div>
                  ))}
                </nav>
              </div>

              <div className="grid gap-3 pb-4 sm:grid-cols-2">
                <Link
                  to="/portal/student-login"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full border border-[#1D4ED8]/20 bg-[#1D4ED8]/10 px-5 text-sm font-semibold text-[#1D4ED8] shadow-[0_16px_42px_rgba(29,78,216,0.12)]"
                >
                  <UserRound className="size-4" />
                  Student Portal
                </Link>

                <Link
                  to="/admissions"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex h-14 items-center justify-center gap-2 rounded-full bg-[#1D4ED8] px-5 text-sm font-semibold text-white shadow-[0_18px_48px_rgba(29,78,216,0.34)]"
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