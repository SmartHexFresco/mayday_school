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
//   const [scrolled, setScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       setScrolled(window.scrollY > 80);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   useEffect(() => {
//     if (mobileOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "";
//     }
//     return () => {
//       document.body.style.overflow = "";
//     };
//   }, [mobileOpen]);

//   return (
//     <>
//       <header
//         className={`
//           fixed
//           top-4
//           sm:top-6
//           left-1/2
//           -translate-x-1/2
//           z-50
//           w-[92%]
//           sm:w-[94%]
//           max-w-7xl
//           transition-all
//           duration-700
//           ease-out
//           ${
//             scrolled
//               ? "translate-y-0 opacity-100"
//               : "translate-y-[-120%] opacity-0"
//           }
//         `}
//       >
//         <div
//           className={`
//             h-[72px]
//             sm:h-[80px]
//             px-4
//             sm:px-6
//             lg:px-8
//             rounded-full
//             flex
//             items-center
//             justify-between
//             transition-all
//             duration-500
//             ${
//               scrolled
//                 ? "bg-white/70 backdrop-blur-2xl border border-white/30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)]"
//                 : "bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.05)]"
//             }
//           `}
//         >
//           {/* LOGO */}
//           <Link
//             to="/"
//             className="flex items-center gap-3 sm:gap-4 flex-shrink-0"
//           >
//             <div
//               className="
//                 h-11
//                 w-11
//                 sm:h-12
//                 sm:w-12
//                 rounded-2xl
//                 bg-gradient-to-br
//                 from-blue-600
//                 to-blue-800
//                 flex
//                 items-center
//                 justify-center
//                 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.3)]
//                 transition-all
//                 duration-300
//                 hover:shadow-[0_12px_32px_-8px_rgba(29,78,216,0.4)]
//                 hover:scale-105
//               "
//             >
//               <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
//             </div>

//             <div className="leading-tight">
//               <h2
//                 className="
//                   font-bold
//                   text-base
//                   sm:text-xl
//                   text-blue-950
//                   tracking-tight
//                   transition-colors
//                   duration-300
//                 "
//               >
//                 MayDay
//               </h2>
//               <p
//                 className="
//                   uppercase
//                   tracking-[2px]
//                   sm:tracking-[3px]
//                   text-[7px]
//                   sm:text-[9px]
//                   text-slate-500
//                   font-medium
//                   hidden
//                   xs:block
//                 "
//               >
//                 International School
//               </p>
//             </div>
//           </Link>

//           {/* DESKTOP NAVIGATION */}
//           <div className="hidden lg:flex items-center gap-1">
//             <div
//               className="
//                 flex
//                 items-center
//                 gap-1
//                 bg-white/40
//                 backdrop-blur-xl
//                 rounded-full
//                 p-1.5
//                 border
//                 border-white/30
//               "
//             >
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.path}
//                   to={link.path}
//                   end={link.path === "/"}
//                   className={({ isActive }) =>
//                     `
//                       px-5
//                       py-2.5
//                       rounded-full
//                       text-sm
//                       font-medium
//                       transition-all
//                       duration-300
//                       ease-out
//                       hover:-translate-y-0.5
//                       ${
//                         isActive
//                           ? "bg-blue-700 text-white shadow-[0_8px_24px_-6px_rgba(29,78,216,0.4)]"
//                           : "text-slate-700 hover:bg-white/60 hover:text-blue-700"
//                       }
//                     `
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </div>

//             {/* PORTAL BUTTON */}
//             <Link
//               to="/portal/student-login"
//               className="
//                 ml-2
//                 h-[44px]
//                 px-5
//                 rounded-full
//                 border-2
//                 border-blue-200
//                 bg-white/50
//                 backdrop-blur-sm
//                 text-blue-700
//                 text-sm
//                 font-semibold
//                 flex
//                 items-center
//                 gap-2
//                 transition-all
//                 duration-300
//                 hover:bg-white
//                 hover:border-blue-300
//                 hover:shadow-[0_8px_24px_-6px_rgba(29,78,216,0.15)]
//                 hover:-translate-y-0.5
//               "
//             >
//               <UserRound className="w-4 h-4" />
//               Portal
//             </Link>

//             {/* APPLY BUTTON */}
//             <Link
//               to="/admissions"
//               className="
//                 ml-1
//                 h-[44px]
//                 px-6
//                 rounded-full
//                 bg-gradient-to-r
//                 from-blue-600
//                 to-blue-700
//                 text-white
//                 text-sm
//                 font-semibold
//                 flex
//                 items-center
//                 gap-2
//                 transition-all
//                 duration-300
//                 hover:shadow-[0_12px_32px_-8px_rgba(29,78,216,0.4)]
//                 hover:-translate-y-0.5
//                 hover:scale-105
//                 shadow-[0_8px_24px_-6px_rgba(29,78,216,0.3)]
//               "
//             >
//               Apply Now
//               <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </div>

//           {/* MOBILE MENU TOGGLE */}
//           <button
//             onClick={() => setMobileOpen(true)}
//             className="
//               lg:hidden
//               h-11
//               w-11
//               sm:h-12
//               sm:w-12
//               rounded-full
//               bg-white/40
//               backdrop-blur-xl
//               border
//               border-white/30
//               flex
//               items-center
//               justify-center
//               transition-all
//               duration-300
//               hover:bg-white/60
//               hover:scale-105
//               shadow-sm
//             "
//           >
//             <Menu className="w-5 h-5 sm:w-5 sm:h-5 text-blue-900" />
//           </button>
//         </div>
//       </header>

//       {/* PREMIUM MOBILE OVERLAY */}
//       <div
//         className={`
//           fixed
//           inset-0
//           z-[100]
//           transition-all
//           duration-500
//           ease-out
//           ${
//             mobileOpen
//               ? "opacity-100 visible pointer-events-auto"
//               : "opacity-0 invisible pointer-events-none"
//           }
//         `}
//       >
//         {/* Backdrop */}
//         <div
//           className={`
//             absolute
//             inset-0
//             bg-white/60
//             backdrop-blur-3xl
//             transition-all
//             duration-700
//             ${
//               mobileOpen
//                 ? "opacity-100"
//                 : "opacity-0"
//             }
//           `}
//           onClick={() => setMobileOpen(false)}
//         />

//         {/* Menu Content */}
//         <div
//           className={`
//             relative
//             h-full
//             w-full
//             flex
//             flex-col
//             px-6
//             sm:px-10
//             md:px-16
//             transition-all
//             duration-500
//             delay-100
//             ${
//               mobileOpen
//                 ? "translate-y-0 opacity-100"
//                 : "translate-y-8 opacity-0"
//             }
//           `}
//         >
//           {/* Top Bar */}
//           <div
//             className="
//               h-24
//               sm:h-28
//               flex
//               items-center
//               justify-between
//               border-b
//               border-blue-100/50
//               flex-shrink-0
//             "
//           >
//             <div>
//               <h2
//                 className="
//                   font-bold
//                   text-2xl
//                   sm:text-3xl
//                   text-blue-950
//                   tracking-tight
//                 "
//               >
//                 MayDay
//               </h2>
//               <p
//                 className="
//                   text-[10px]
//                   sm:text-xs
//                   uppercase
//                   tracking-[4px]
//                   sm:tracking-[5px]
//                   text-slate-500
//                   font-medium
//                 "
//               >
//                 International School
//               </p>
//             </div>

//             <button
//               onClick={() => setMobileOpen(false)}
//               className="
//                 h-12
//                 w-12
//                 sm:h-14
//                 sm:w-14
//                 rounded-full
//                 bg-white
//                 shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)]
//                 flex
//                 items-center
//                 justify-center
//                 transition-all
//                 duration-300
//                 hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)]
//                 hover:scale-105
//                 active:scale-95
//               "
//             >
//               <X className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <div
//             className="
//               flex-1
//               flex
//               flex-col
//               justify-center
//               py-8
//               sm:py-12
//               space-y-6
//               sm:space-y-8
//             "
//           >
//             {navLinks.map((link, index) => (
//               <NavLink
//                 key={link.path}
//                 to={link.path}
//                 onClick={() => setMobileOpen(false)}
//                 className={({ isActive }) =>
//                   `
//                     text-4xl
//                     sm:text-5xl
//                     md:text-6xl
//                     lg:text-7xl
//                     font-bold
//                     transition-all
//                     duration-300
//                     ${
//                       isActive
//                         ? "text-blue-700"
//                         : "text-blue-950 hover:text-blue-600"
//                     }
//                     hover:translate-x-3
//                     active:scale-95
//                     tracking-tight
//                   `
//                 }
//                 style={{
//                   transitionDelay: `${index * 50}ms`,
//                 }}
//               >
//                 {link.name}
//               </NavLink>
//             ))}
//           </div>

//           {/* Action Buttons */}
//           <div
//             className="
//               flex-shrink-0
//               pb-8
//               sm:pb-12
//               space-y-4
//               sm:space-y-5
//               w-full
//               max-w-md
//               mx-auto
//             "
//           >
//             <Link
//               to="/portal/student-login"
//               onClick={() => setMobileOpen(false)}
//               className="
//                 h-14
//                 sm:h-16
//                 w-full
//                 rounded-2xl
//                 bg-white/80
//                 backdrop-blur-sm
//                 border-2
//                 border-blue-100
//                 text-blue-700
//                 font-semibold
//                 text-base
//                 sm:text-lg
//                 flex
//                 items-center
//                 justify-center
//                 gap-3
//                 transition-all
//                 duration-300
//                 hover:bg-white
//                 hover:border-blue-300
//                 hover:shadow-[0_12px_32px_-8px_rgba(29,78,216,0.12)]
//                 active:scale-98
//               "
//             >
//               <UserRound className="w-5 h-5 sm:w-6 sm:h-6" />
//               Student Portal
//             </Link>

//             <Link
//               to="/admissions"
//               onClick={() => setMobileOpen(false)}
//               className="
//                 h-14
//                 sm:h-16
//                 w-full
//                 rounded-2xl
//                 bg-gradient-to-r
//                 from-blue-600
//                 to-blue-700
//                 text-white
//                 font-bold
//                 text-base
//                 sm:text-lg
//                 flex
//                 items-center
//                 justify-center
//                 gap-3
//                 transition-all
//                 duration-300
//                 shadow-[0_20px_40px_-12px_rgba(29,78,216,0.35)]
//                 hover:shadow-[0_24px_48px_-12px_rgba(29,78,216,0.45)]
//                 hover:-translate-y-0.5
//                 active:scale-98
//               "
//             >
//               Apply Now
//               <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
//             </Link>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;







































































































import { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  GraduationCap,
  ArrowRight,
  Menu,
  X,
  UserRound,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

// How long the menu's open/close transition takes (ms). Kept in one place
// so it can be reused for both the Tailwind duration class and the
// setTimeout delays that wait for that transition to finish.
const MENU_TRANSITION_MS = 400;

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  const mobileMenuRef = useRef(null);
  const menuButtonRef = useRef(null);
  const firstFocusableRef = useRef(null);

  // Check for reduced motion preference
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    setPrefersReducedMotion(mediaQuery.matches);

    const handler = (e) => setPrefersReducedMotion(e.matches);
    mediaQuery.addEventListener("change", handler);
    return () => mediaQuery.removeEventListener("change", handler);
  }, []);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 15);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle body scroll lock + initial focus when the mobile menu opens
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.width = "100%";

      const timer = setTimeout(() => {
        firstFocusableRef.current?.focus();
      }, 100);

      return () => {
        clearTimeout(timer);
        document.body.style.overflow = originalOverflow;
        document.body.style.position = "";
        document.body.style.width = "";
      };
    }

    document.body.style.overflow = originalOverflow;
    document.body.style.position = "";
    document.body.style.width = "";
  }, [mobileOpen]);

  // Single source of truth for closing the menu and returning focus to the
  // trigger button. Previously this exact block was duplicated 5+ times.
  const closeMobileMenu = useCallback(() => {
    setMobileOpen(false);
    setTimeout(() => menuButtonRef.current?.focus(), MENU_TRANSITION_MS / 4);
  }, []);

  // Handle escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape" && mobileOpen) closeMobileMenu();
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, [mobileOpen, closeMobileMenu]);

  // Focus trap inside the mobile menu
  const handleKeyDown = useCallback(
    (e) => {
      if (!mobileOpen || e.key !== "Tab") return;

      const focusableElements = mobileMenuRef.current?.querySelectorAll(
        'button:not([disabled]), a:not([disabled]), [tabindex="0"]:not([disabled])'
      );
      if (!focusableElements || focusableElements.length === 0) return;

      const firstElement = focusableElements[0];
      const lastElement = focusableElements[focusableElements.length - 1];

      if (e.shiftKey && document.activeElement === firstElement) {
        e.preventDefault();
        lastElement.focus();
      } else if (!e.shiftKey && document.activeElement === lastElement) {
        e.preventDefault();
        firstElement.focus();
      }
    },
    [mobileOpen]
  );

  const duration = prefersReducedMotion ? "duration-0" : `duration-500`;
  const transition = prefersReducedMotion ? "transition-none" : "transition-all";

  return (
    <>
      <header
        className={`
          fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2
          ${transition} ${duration}
          ${scrolled ? "scale-[0.98] shadow-2xl" : "scale-100"}
        `}
        role="banner"
        aria-label="Main navigation"
      >
        {/* Outer shell: true glass — low-opacity fill so whatever sits
            behind the navbar stays clearly readable through it. */}
        <div
          className={`
            relative overflow-hidden rounded-full
            border border-white/25
            bg-white/[0.06]
            backdrop-blur-md backdrop-saturate-150
            shadow-[0_8px_32px_rgba(0,0,0,0.10)]
            ${transition} ${duration}
            hover:bg-white/[0.10]
          `}
        >
          {/* Glass reflection overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/[0.03]"
            aria-hidden="true"
          />

          {/* Glass highlight line */}
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
            aria-hidden="true"
          />

          <div className="relative flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              to="/"
              className="group flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="MayDay International School - Home"
            >
              <div
                className={`
                  flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl
                  bg-gradient-to-br from-blue-600 to-blue-700
                  shadow-lg shadow-blue-500/30
                  ${transition} ${duration}
                  group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-blue-500/50
                `}
                aria-hidden="true"
              >
                <GraduationCap className="h-6 w-6 text-white" />
              </div>

              <div className="min-w-0 leading-tight">
                <h2 className="truncate text-base font-bold tracking-tight text-white drop-shadow-lg sm:text-lg lg:text-xl">
                  MayDay
                </h2>
                <p className="truncate text-[9px] uppercase tracking-[0.28em] text-blue-100/90 sm:text-[10px]">
                  International School
                </p>
              </div>
            </Link>

            {/* Desktop Navigation — the "tray" that holds the links.
                Deeper blue glass with a soft inner glow and a crisper
                border so it reads as a distinct, polished module rather
                than a flat strip. */}
            <nav
              className="hidden items-center gap-1 rounded-full border border-blue-300/30 bg-blue-700/30 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_24px_rgba(29,78,216,0.25)] backdrop-blur-xl lg:flex"
              aria-label="Main menu"
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `
                      relative rounded-full px-6 py-2.5 text-sm font-semibold text-white
                      ${transition} ${duration}
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                      ${
                        isActive
                          ? "bg-blue-600 shadow-lg shadow-blue-900/30"
                          : "bg-blue-600/40 hover:bg-blue-600/70"
                      }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="hidden items-center gap-3 lg:flex">
              <Link
                to="/portal/student-login"
                className={`
                  group inline-flex h-11 items-center gap-2 rounded-full
                  border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white
                  backdrop-blur-xl
                  ${transition} ${duration}
                  hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 hover:shadow-xl
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                `}
              >
                <UserRound className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
                Portal
              </Link>

              <Link
                to="/admissions"
                className={`
                  group inline-flex h-11 items-center gap-2 rounded-full
                  bg-gradient-to-r from-blue-500 to-blue-600 px-6 text-sm font-semibold text-white
                  shadow-[0_8px_32px_rgba(37,99,235,0.35)]
                  ${transition} ${duration}
                  hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(37,99,235,0.45)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                `}
              >
                Apply Now
                <ArrowRight className={`h-4 w-4 ${transition} duration-300 group-hover:translate-x-1`} />
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              ref={menuButtonRef}
              onClick={() => setMobileOpen(true)}
              aria-label="Open main menu"
              aria-expanded={mobileOpen}
              aria-controls="mobile-menu"
              className={`
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/30 bg-white/10 text-white backdrop-blur-xl
                ${transition} ${duration}
                hover:scale-105 hover:bg-white/20
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                lg:hidden
              `}
            >
              <Menu className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Navigation */}
      <div
        id="mobile-menu"
        ref={mobileMenuRef}
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation menu"
        className={`
          fixed inset-0 z-[100]
          ${transition} ${duration}
          ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}
        `}
        onKeyDown={handleKeyDown}
      >
        {/* Backdrop */}
        <div
          onClick={closeMobileMenu}
          className={`
            absolute inset-0 bg-black/20 backdrop-blur-xl
            ${transition} ${duration}
            ${mobileOpen ? "opacity-100" : "opacity-0"}
          `}
          aria-hidden="true"
        />

        {/* Mobile Panel */}
        <div
          className={`
            absolute inset-0 flex flex-col
            bg-gradient-to-br from-blue-600/95 via-blue-700/95 to-blue-800/95
            backdrop-blur-2xl backdrop-saturate-[200%]
            ${transition} ${duration}
            ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          {/* Glass overlay */}
          <div
            className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"
            aria-hidden="true"
          />

          {/* Subtle grid pattern */}
          <div
            className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"
            aria-hidden="true"
          />

          {/* Mobile Header */}
          <div className="relative flex items-center justify-between px-6 pt-6">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="MayDay International School - Home"
            >
              <div
                className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 shadow-lg shadow-black/10 backdrop-blur-xl"
                aria-hidden="true"
              >
                <GraduationCap className="h-6 w-6 text-white" />
              </div>

              <div className="leading-tight">
                <h2 className="text-lg font-bold text-white drop-shadow-lg">MayDay</h2>
                <p className="text-[10px] uppercase tracking-[0.28em] text-blue-100/80">
                  International School
                </p>
              </div>
            </Link>

            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className={`
                flex h-12 w-12 items-center justify-center rounded-full
                border border-white/30 bg-white/10 text-white shadow-lg backdrop-blur-xl
                ${transition} ${duration}
                hover:rotate-90 hover:bg-white/20
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              `}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          {/* Mobile Content */}
          <div className="relative flex flex-1 flex-col justify-center px-8 sm:px-10">
            <nav className="space-y-2" aria-label="Mobile menu">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  ref={index === 0 ? firstFocusableRef : null}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `
                      group flex items-center justify-between rounded-3xl px-6 py-5
                      text-[1.9rem] font-bold tracking-tight text-white
                      ${transition} ${duration}
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                      ${
                        isActive
                          ? "bg-white/20 shadow-2xl shadow-black/10 backdrop-blur-xl"
                          : "hover:bg-white/10"
                      }
                    `
                  }
                  style={{
                    transitionDelay: prefersReducedMotion ? "0ms" : `${index * 70}ms`,
                  }}
                >
                  <span>{link.name}</span>
                  <ArrowRight
                    className={`h-6 w-6 ${transition} duration-300 group-hover:translate-x-2`}
                    aria-hidden="true"
                  />
                </NavLink>
              ))}
            </nav>

            <div className="mt-14 space-y-4">
              <Link
                to="/portal/student-login"
                onClick={closeMobileMenu}
                className={`
                  flex h-16 items-center justify-center gap-3 rounded-2xl
                  border border-white/30 bg-white/10 text-base font-semibold text-white
                  shadow-xl backdrop-blur-xl
                  ${transition} ${duration}
                  hover:-translate-y-1 hover:bg-white/20
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                `}
              >
                <UserRound className="h-5 w-5" aria-hidden="true" />
                Student Portal
              </Link>

              <Link
                to="/admissions"
                onClick={closeMobileMenu}
                className={`
                  group flex h-16 items-center justify-center gap-3 rounded-2xl
                  bg-gradient-to-r from-white/30 to-white/20 text-base font-bold text-white
                  shadow-[0_20px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl
                  ${transition} ${duration}
                  hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(0,0,0,0.3)]
                  focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                `}
              >
                Apply Now
                <ArrowRight
                  className={`h-5 w-5 ${transition} duration-300 group-hover:translate-x-1`}
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>

          {/* Footer */}
          <div className="relative px-8 pb-10 pt-6">
            <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl">
              <p className="text-sm font-semibold text-white/90">Inspiring Excellence.</p>
              <p className="mt-2 text-sm leading-7 text-white/70">
                Building confident learners with a world-class international
                education and a vibrant school community.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;