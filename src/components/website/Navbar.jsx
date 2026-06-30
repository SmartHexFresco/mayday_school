import { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import { ArrowRight, Menu, X, UserRound } from "lucide-react";

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

/**
 * Brand mark. Tries to load a real school logo first (swap LOGO_SRC for
 * your actual asset path) and falls back to a clean "M" monogram if no
 * image is available, so the navbar never depends on a generic stock icon.
 */
const LOGO_SRC = "/logo.png";

const BrandMark = ({ size = "h-12 w-12" }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`flex ${size} shrink-0 items-center justify-center rounded-2xl bg-blue-600 border border-blue-400/40`}
      aria-hidden="true"
    >
      {imageFailed ? (
        <span className="font-serif text-xl font-bold text-white">M</span>
      ) : (
        <img
          src={LOGO_SRC}
          alt=""
          className="h-7 w-7 object-contain"
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
};

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
  // trigger button.
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
          ${scrolled ? "scale-[0.98]" : "scale-100"}
        `}
        role="banner"
        aria-label="Main navigation"
      >
        {/* Outer shell: see-through glass, no shadows — contrast comes
            from solid color fills underneath text/controls instead. */}
        <div
          className={`
            relative overflow-hidden rounded-full
            border border-white/25
            bg-white/10
            backdrop-blur-md backdrop-saturate-150
            ${transition} ${duration}
            hover:bg-white/[0.14]
          `}
        >
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
              <BrandMark />

              <div className="min-w-0 leading-tight">
                <h2 className="truncate text-lg font-extrabold tracking-tight text-white sm:text-xl">
                  May<span className="text-blue-200">Day</span>
                </h2>
                <div className="mt-1 flex items-center gap-2">
                  <span className="h-px w-3 bg-blue-200/70" aria-hidden="true" />
                  <p className="truncate text-[10px] font-medium uppercase tracking-[0.3em] text-blue-50">
                    International School
                  </p>
                </div>
              </div>
            </Link>

            {/* Desktop Navigation — solid blue tray, flat, no shadow */}
            <nav
              className="hidden items-center gap-1 rounded-full border border-blue-300/40 bg-blue-700/50 p-1.5 lg:flex"
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
                      ${isActive ? "bg-blue-900" : "bg-blue-600 hover:bg-blue-800"}
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
                  border border-blue-400/40 bg-blue-600 px-5 text-sm font-semibold text-white
                  ${transition} ${duration}
                  hover:bg-blue-700
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
                  bg-blue-500 px-6 text-sm font-semibold text-white
                  ${transition} ${duration}
                  hover:bg-blue-600
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
                border border-blue-400/40 bg-blue-600 text-white
                ${transition} ${duration}
                hover:bg-blue-700
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
            absolute inset-0 flex flex-col bg-blue-700
            ${transition} ${duration}
            ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          {/* Mobile Header */}
          <div className="relative flex items-center justify-between px-6 pt-6">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="MayDay International School - Home"
            >
              <BrandMark />

              <div className="leading-tight">
                <h2 className="text-lg font-extrabold text-white">
                  May<span className="text-blue-200">Day</span>
                </h2>
                <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-blue-50">
                  International School
                </p>
              </div>
            </Link>

            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className={`
                flex h-12 w-12 items-center justify-center rounded-full
                border border-white/40 bg-blue-600 text-white
                ${transition} ${duration}
                hover:bg-blue-800
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
                      ${isActive ? "bg-blue-900" : "bg-blue-600/60 hover:bg-blue-800"}
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
                  border border-blue-400/40 bg-blue-600 text-base font-semibold text-white
                  ${transition} ${duration}
                  hover:bg-blue-800
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
                  bg-blue-500 text-base font-bold text-white
                  ${transition} ${duration}
                  hover:bg-blue-600
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
            <div className="rounded-3xl border border-white/20 bg-blue-800/60 p-6">
              <p className="text-sm font-semibold text-white">Inspiring Excellence.</p>
              <p className="mt-2 text-sm leading-7 text-blue-50">
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





































































































// import { useEffect, useState, useRef, useCallback } from "react";
// import { Link, NavLink } from "react-router-dom";
// import {
//   GraduationCap,
//   ArrowRight,
//   Menu,
//   X,
//   UserRound,
// } from "lucide-react";

// const navLinks = [
//   { name: "Home", path: "/" },
//   { name: "About", path: "/about" },
//   { name: "Admissions", path: "/admissions" },
//   { name: "Contact", path: "/contact" },
// ];

// // How long the menu's open/close transition takes (ms). Kept in one place
// // so it can be reused for both the Tailwind duration class and the
// // setTimeout delays that wait for that transition to finish.
// const MENU_TRANSITION_MS = 400;

// const Navbar = () => {
//   const [mobileOpen, setMobileOpen] = useState(false);
//   const [scrolled, setScrolled] = useState(false);
//   const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

//   const mobileMenuRef = useRef(null);
//   const menuButtonRef = useRef(null);
//   const firstFocusableRef = useRef(null);

//   // Check for reduced motion preference
//   useEffect(() => {
//     const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
//     setPrefersReducedMotion(mediaQuery.matches);

//     const handler = (e) => setPrefersReducedMotion(e.matches);
//     mediaQuery.addEventListener("change", handler);
//     return () => mediaQuery.removeEventListener("change", handler);
//   }, []);

//   // Handle scroll effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 15);
//     window.addEventListener("scroll", handleScroll, { passive: true });
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   // Handle body scroll lock + initial focus when the mobile menu opens
//   useEffect(() => {
//     const originalOverflow = document.body.style.overflow;

//     if (mobileOpen) {
//       document.body.style.overflow = "hidden";
//       document.body.style.position = "fixed";
//       document.body.style.width = "100%";

//       const timer = setTimeout(() => {
//         firstFocusableRef.current?.focus();
//       }, 100);

//       return () => {
//         clearTimeout(timer);
//         document.body.style.overflow = originalOverflow;
//         document.body.style.position = "";
//         document.body.style.width = "";
//       };
//     }

//     document.body.style.overflow = originalOverflow;
//     document.body.style.position = "";
//     document.body.style.width = "";
//   }, [mobileOpen]);

//   // Single source of truth for closing the menu and returning focus to the
//   // trigger button. Previously this exact block was duplicated 5+ times.
//   const closeMobileMenu = useCallback(() => {
//     setMobileOpen(false);
//     setTimeout(() => menuButtonRef.current?.focus(), MENU_TRANSITION_MS / 4);
//   }, []);

//   // Handle escape key
//   useEffect(() => {
//     const handleEscape = (e) => {
//       if (e.key === "Escape" && mobileOpen) closeMobileMenu();
//     };
//     document.addEventListener("keydown", handleEscape);
//     return () => document.removeEventListener("keydown", handleEscape);
//   }, [mobileOpen, closeMobileMenu]);

//   // Focus trap inside the mobile menu
//   const handleKeyDown = useCallback(
//     (e) => {
//       if (!mobileOpen || e.key !== "Tab") return;

//       const focusableElements = mobileMenuRef.current?.querySelectorAll(
//         'button:not([disabled]), a:not([disabled]), [tabindex="0"]:not([disabled])'
//       );
//       if (!focusableElements || focusableElements.length === 0) return;

//       const firstElement = focusableElements[0];
//       const lastElement = focusableElements[focusableElements.length - 1];

//       if (e.shiftKey && document.activeElement === firstElement) {
//         e.preventDefault();
//         lastElement.focus();
//       } else if (!e.shiftKey && document.activeElement === lastElement) {
//         e.preventDefault();
//         firstElement.focus();
//       }
//     },
//     [mobileOpen]
//   );

//   const duration = prefersReducedMotion ? "duration-0" : `duration-500`;
//   const transition = prefersReducedMotion ? "transition-none" : "transition-all";

//   return (
//     <>
//       <header
//         className={`
//           fixed left-1/2 top-4 z-50 w-[95%] max-w-7xl -translate-x-1/2
//           ${transition} ${duration}
//           ${scrolled ? "scale-[0.98] shadow-2xl" : "scale-100"}
//         `}
//         role="banner"
//         aria-label="Main navigation"
//       >
//         {/* Outer shell: true glass — low-opacity fill so whatever sits
//             behind the navbar stays clearly readable through it. */}
//         <div
//           className={`
//             relative overflow-hidden rounded-full
//             border border-white/25
//             bg-white/[0.06]
//             backdrop-blur-md backdrop-saturate-150
//             shadow-[0_8px_32px_rgba(0,0,0,0.10)]
//             ${transition} ${duration}
//             hover:bg-white/[0.10]
//           `}
//         >
//           {/* Glass reflection overlay */}
//           <div
//             className="pointer-events-none absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-white/[0.03]"
//             aria-hidden="true"
//           />

//           {/* Glass highlight line */}
//           <div
//             className="pointer-events-none absolute left-[10%] right-[10%] top-0 h-px bg-gradient-to-r from-transparent via-white/40 to-transparent"
//             aria-hidden="true"
//           />

//           <div className="relative flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
//             {/* Logo */}
//             <Link
//               to="/"
//               className="group flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
//               aria-label="MayDay International School - Home"
//             >
//               <div
//                 className={`
//                   flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl
//                   bg-gradient-to-br from-blue-600 to-blue-700
//                   shadow-lg shadow-blue-500/30
//                   ${transition} ${duration}
//                   group-hover:rotate-6 group-hover:scale-105 group-hover:shadow-blue-500/50
//                 `}
//                 aria-hidden="true"
//               >
//                 <GraduationCap className="h-6 w-6 text-white" />
//               </div>

//               <div className="min-w-0 leading-tight">
//                 <h2 className="truncate text-base font-bold tracking-tight text-white drop-shadow-lg sm:text-lg lg:text-xl">
//                   MayDay
//                 </h2>
//                 <p className="truncate text-[9px] uppercase tracking-[0.28em] text-blue-100/90 sm:text-[10px]">
//                   International School
//                 </p>
//               </div>
//             </Link>

//             {/* Desktop Navigation — the "tray" that holds the links.
//                 Deeper blue glass with a soft inner glow and a crisper
//                 border so it reads as a distinct, polished module rather
//                 than a flat strip. */}
//             <nav
//               className="hidden items-center gap-1 rounded-full border border-blue-300/30 bg-blue-700/30 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.15),0_8px_24px_rgba(29,78,216,0.25)] backdrop-blur-xl lg:flex"
//               aria-label="Main menu"
//             >
//               {navLinks.map((link) => (
//                 <NavLink
//                   key={link.path}
//                   to={link.path}
//                   end={link.path === "/"}
//                   className={({ isActive }) =>
//                     `
//                       relative rounded-full px-6 py-2.5 text-sm font-semibold text-white
//                       ${transition} ${duration}
//                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//                       ${
//                         isActive
//                           ? "bg-blue-600 shadow-lg shadow-blue-900/30"
//                           : "bg-blue-600/40 hover:bg-blue-600/70"
//                       }
//                     `
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               ))}
//             </nav>

//             {/* Right Actions */}
//             <div className="hidden items-center gap-3 lg:flex">
//               <Link
//                 to="/portal/student-login"
//                 className={`
//                   group inline-flex h-11 items-center gap-2 rounded-full
//                   border border-white/30 bg-white/10 px-5 text-sm font-semibold text-white
//                   backdrop-blur-xl
//                   ${transition} ${duration}
//                   hover:-translate-y-0.5 hover:border-white/40 hover:bg-white/20 hover:shadow-xl
//                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//                 `}
//               >
//                 <UserRound className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
//                 Portal
//               </Link>

//               <Link
//                 to="/admissions"
//                 className={`
//                   group inline-flex h-11 items-center gap-2 rounded-full
//                   bg-gradient-to-r from-blue-500 to-blue-600 px-6 text-sm font-semibold text-white
//                   shadow-[0_8px_32px_rgba(37,99,235,0.35)]
//                   ${transition} ${duration}
//                   hover:-translate-y-0.5 hover:scale-[1.02] hover:shadow-[0_12px_40px_rgba(37,99,235,0.45)]
//                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//                 `}
//               >
//                 Apply Now
//                 <ArrowRight className={`h-4 w-4 ${transition} duration-300 group-hover:translate-x-1`} />
//               </Link>
//             </div>

//             {/* Mobile Menu Button */}
//             <button
//               ref={menuButtonRef}
//               onClick={() => setMobileOpen(true)}
//               aria-label="Open main menu"
//               aria-expanded={mobileOpen}
//               aria-controls="mobile-menu"
//               className={`
//                 flex h-11 w-11 items-center justify-center rounded-full
//                 border border-white/30 bg-white/10 text-white backdrop-blur-xl
//                 ${transition} ${duration}
//                 hover:scale-105 hover:bg-white/20
//                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//                 lg:hidden
//               `}
//             >
//               <Menu className="h-5 w-5" aria-hidden="true" />
//             </button>
//           </div>
//         </div>
//       </header>

//       {/* Mobile Navigation */}
//       <div
//         id="mobile-menu"
//         ref={mobileMenuRef}
//         role="dialog"
//         aria-modal="true"
//         aria-label="Mobile navigation menu"
//         className={`
//           fixed inset-0 z-[100]
//           ${transition} ${duration}
//           ${mobileOpen ? "visible opacity-100" : "invisible opacity-0"}
//         `}
//         onKeyDown={handleKeyDown}
//       >
//         {/* Backdrop */}
//         <div
//           onClick={closeMobileMenu}
//           className={`
//             absolute inset-0 bg-black/20 backdrop-blur-xl
//             ${transition} ${duration}
//             ${mobileOpen ? "opacity-100" : "opacity-0"}
//           `}
//           aria-hidden="true"
//         />

//         {/* Mobile Panel */}
//         <div
//           className={`
//             absolute inset-0 flex flex-col
//             bg-gradient-to-br from-blue-600/95 via-blue-700/95 to-blue-800/95
//             backdrop-blur-2xl backdrop-saturate-[200%]
//             ${transition} ${duration}
//             ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
//           `}
//         >
//           {/* Glass overlay */}
//           <div
//             className="pointer-events-none absolute inset-0 bg-gradient-to-br from-white/10 via-transparent to-white/5"
//             aria-hidden="true"
//           />

//           {/* Subtle grid pattern */}
//           <div
//             className="pointer-events-none absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiIGZpbGwtcnVsZT0ibm9uemVybyI+PHBhdGggZD0iTTM2IDM0djItSDI0di0yaDEyek0zNiAyNHYySDI0di0yaDEyeiIvPjwvZz48L2c+PC9zdmc+')] opacity-50"
//             aria-hidden="true"
//           />

//           {/* Mobile Header */}
//           <div className="relative flex items-center justify-between px-6 pt-6">
//             <Link
//               to="/"
//               onClick={closeMobileMenu}
//               className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
//               aria-label="MayDay International School - Home"
//             >
//               <div
//                 className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white/20 shadow-lg shadow-black/10 backdrop-blur-xl"
//                 aria-hidden="true"
//               >
//                 <GraduationCap className="h-6 w-6 text-white" />
//               </div>

//               <div className="leading-tight">
//                 <h2 className="text-lg font-bold text-white drop-shadow-lg">MayDay</h2>
//                 <p className="text-[10px] uppercase tracking-[0.28em] text-blue-100/80">
//                   International School
//                 </p>
//               </div>
//             </Link>

//             <button
//               onClick={closeMobileMenu}
//               aria-label="Close menu"
//               className={`
//                 flex h-12 w-12 items-center justify-center rounded-full
//                 border border-white/30 bg-white/10 text-white shadow-lg backdrop-blur-xl
//                 ${transition} ${duration}
//                 hover:rotate-90 hover:bg-white/20
//                 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//               `}
//             >
//               <X className="h-5 w-5" aria-hidden="true" />
//             </button>
//           </div>

//           {/* Mobile Content */}
//           <div className="relative flex flex-1 flex-col justify-center px-8 sm:px-10">
//             <nav className="space-y-2" aria-label="Mobile menu">
//               {navLinks.map((link, index) => (
//                 <NavLink
//                   key={link.path}
//                   to={link.path}
//                   end={link.path === "/"}
//                   ref={index === 0 ? firstFocusableRef : null}
//                   onClick={closeMobileMenu}
//                   className={({ isActive }) =>
//                     `
//                       group flex items-center justify-between rounded-3xl px-6 py-5
//                       text-[1.9rem] font-bold tracking-tight text-white
//                       ${transition} ${duration}
//                       focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//                       ${
//                         isActive
//                           ? "bg-white/20 shadow-2xl shadow-black/10 backdrop-blur-xl"
//                           : "hover:bg-white/10"
//                       }
//                     `
//                   }
//                   style={{
//                     transitionDelay: prefersReducedMotion ? "0ms" : `${index * 70}ms`,
//                   }}
//                 >
//                   <span>{link.name}</span>
//                   <ArrowRight
//                     className={`h-6 w-6 ${transition} duration-300 group-hover:translate-x-2`}
//                     aria-hidden="true"
//                   />
//                 </NavLink>
//               ))}
//             </nav>

//             <div className="mt-14 space-y-4">
//               <Link
//                 to="/portal/student-login"
//                 onClick={closeMobileMenu}
//                 className={`
//                   flex h-16 items-center justify-center gap-3 rounded-2xl
//                   border border-white/30 bg-white/10 text-base font-semibold text-white
//                   shadow-xl backdrop-blur-xl
//                   ${transition} ${duration}
//                   hover:-translate-y-1 hover:bg-white/20
//                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//                 `}
//               >
//                 <UserRound className="h-5 w-5" aria-hidden="true" />
//                 Student Portal
//               </Link>

//               <Link
//                 to="/admissions"
//                 onClick={closeMobileMenu}
//                 className={`
//                   group flex h-16 items-center justify-center gap-3 rounded-2xl
//                   bg-gradient-to-r from-white/30 to-white/20 text-base font-bold text-white
//                   shadow-[0_20px_45px_rgba(0,0,0,0.2)] backdrop-blur-xl
//                   ${transition} ${duration}
//                   hover:-translate-y-1 hover:shadow-[0_25px_55px_rgba(0,0,0,0.3)]
//                   focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
//                 `}
//               >
//                 Apply Now
//                 <ArrowRight
//                   className={`h-5 w-5 ${transition} duration-300 group-hover:translate-x-1`}
//                   aria-hidden="true"
//                 />
//               </Link>
//             </div>
//           </div>

//           {/* Footer */}
//           <div className="relative px-8 pb-10 pt-6">
//             <div className="rounded-3xl border border-white/20 bg-white/5 p-6 backdrop-blur-xl">
//               <p className="text-sm font-semibold text-white/90">Inspiring Excellence.</p>
//               <p className="mt-2 text-sm leading-7 text-white/70">
//                 Building confident learners with a world-class international
//                 education and a vibrant school community.
//               </p>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Navbar;