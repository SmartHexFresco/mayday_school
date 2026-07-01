import { useEffect, useState, useRef, useCallback } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  ArrowRight,
  Menu,
  X,
  UserRound,
  Home,
  Info,
  ClipboardList,
  Mail,
  Phone,
} from "lucide-react";

const navLinks = [
  { name: "Home", path: "/", icon: Home },
  { name: "About", path: "/about", icon: Info },
  { name: "Admissions", path: "/admissions", icon: ClipboardList },
  { name: "Contact", path: "/contact", icon: Mail },
];

// How long the menu's open/close transition takes (ms). Kept in one place
// so it can be reused for both the Tailwind duration class and the
// setTimeout delays that wait for that transition to finish.
const MENU_TRANSITION_MS = 400;

// Swap this for your real logo file. If it fails to load (or isn't there
// yet), the hand-built academic crest below is used instead — never a
// plain text letter.
const LOGO_SRC = "/logo.png";

/**
 * Academic crest mark: a shield containing an open book and a small star,
 * drawn as a flat white line icon — the kind of emblem an actual school
 * would use, not a generic stock icon or a single letter.
 */
const CrestMark = ({ box = "h-12 w-12", icon = "h-6 w-6" }) => {
  const [imageFailed, setImageFailed] = useState(false);

  return (
    <div
      className={`flex ${box} shrink-0 items-center justify-center rounded-2xl border border-blue-400/40 bg-blue-600`}
      aria-hidden="true"
    >
      {imageFailed ? (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="1.4"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={icon}
        >
          {/* shield outline */}
          <path d="M12 2.5 L19.3 5.4 V11 C19.3 16 16 19.7 12 21.2 C8 19.7 4.7 16 4.7 11 V5.4 Z" />
          {/* open book */}
          <path d="M12 9.3 V16.2" />
          <path d="M7.6 9 C9.1 8.2 10.6 8.5 12 9.3" />
          <path d="M16.4 9 C14.9 8.2 13.4 8.5 12 9.3" />
          <path d="M7.6 9 V13.6 C9.1 12.8 10.6 13.1 12 13.9" />
          <path d="M16.4 9 V13.6 C14.9 12.8 13.4 13.1 12 13.9" />
          {/* star */}
          <path
            d="M12 4.3 L12.45 5.45 L13.65 5.55 L12.75 6.35 L13.05 7.55 L12 6.9 L10.95 7.55 L11.25 6.35 L10.35 5.55 L11.55 5.45 Z"
            fill="white"
            stroke="none"
          />
        </svg>
      ) : (
        <img
          src={LOGO_SRC}
          alt=""
          className={`${icon} object-contain`}
          onError={() => setImageFailed(true)}
        />
      )}
    </div>
  );
};

// "MayDay" rendered as individual blue letter badges with white type, so
// the wordmark stays fully readable no matter what's behind the navbar —
// including a plain white page background.
const NAME_LETTERS = "MayDay".split("");

const SchoolNameMark = ({ letterSize = "h-6 w-6 text-xs" }) => (
  <div className="min-w-0 leading-tight">
    <div className="flex gap-[3px]">
      {NAME_LETTERS.map((letter, i) => (
        <span
          key={i}
          className={`flex ${letterSize} items-center justify-center rounded-md bg-blue-600 font-bold text-white`}
        >
          {letter}
        </span>
      ))}
    </div>
    <div className="mt-1.5 inline-flex items-center gap-1.5 rounded-full bg-blue-900 px-2.5 py-0.5">
      <span className="h-1 w-1 rounded-full bg-amber-400" aria-hidden="true" />
      <p className="whitespace-nowrap text-[9px] font-semibold uppercase tracking-[0.25em] text-white">
        International School
      </p>
    </div>
  </div>
);

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
        {/* Outer shell stays see-through glass; every piece of text inside
            it sits on its own solid color, so legibility never depends on
            what's behind the header. */}
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
          <div className="relative flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
            {/* Logo */}
            <Link
              to="/"
              className="group flex min-w-0 items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
              aria-label="MayDay International School - Home"
            >
              <CrestMark />
              <SchoolNameMark />
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
            absolute inset-0 bg-black/30 backdrop-blur-xl
            ${transition} ${duration}
            ${mobileOpen ? "opacity-100" : "opacity-0"}
          `}
          aria-hidden="true"
        />

        {/* Mobile Panel */}
        <div
          className={`
            absolute inset-0 flex flex-col overflow-y-auto
            bg-gradient-to-b from-blue-800 to-blue-900
            ${transition} ${duration}
            ${mobileOpen ? "translate-y-0" : "-translate-y-full"}
          `}
        >
          {/* Slim gold accent bar — a small premium signature, not a shadow */}
          <div className="h-1 w-full bg-gradient-to-r from-amber-300 via-amber-400 to-amber-300" aria-hidden="true" />

          {/* Mobile Header */}
          <div className="flex items-center justify-between px-6 pb-6 pt-6">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex items-center gap-3 rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent"
              aria-label="MayDay International School - Home"
            >
              <CrestMark />
              <SchoolNameMark letterSize="h-7 w-7 text-sm" />
            </Link>

            <button
              onClick={closeMobileMenu}
              aria-label="Close menu"
              className={`
                flex h-11 w-11 items-center justify-center rounded-full
                border border-white/30 bg-white/10 text-white
                ${transition} ${duration}
                hover:bg-white/20
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              `}
            >
              <X className="h-5 w-5" aria-hidden="true" />
            </button>
          </div>

          <div className="border-t border-white/10" />

          {/* Primary nav — icon-led list rows instead of plain blue blocks */}
          <nav className="flex flex-col px-3 py-2" aria-label="Mobile menu">
            {navLinks.map((link, index) => {
              const Icon = link.icon;
              return (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  ref={index === 0 ? firstFocusableRef : null}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `
                      group flex items-center gap-4 rounded-2xl px-4 py-4
                      ${transition} ${duration}
                      focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
                      ${isActive ? "bg-white/10" : "hover:bg-white/5"}
                    `
                  }
                  style={{
                    transitionDelay: prefersReducedMotion ? "0ms" : `${index * 60}ms`,
                  }}
                >
                  {({ isActive }) => (
                    <>
                      <span
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border ${
                          isActive
                            ? "border-amber-400/60 bg-amber-400/15"
                            : "border-white/15 bg-white/5"
                        }`}
                      >
                        <Icon
                          className={`h-5 w-5 ${isActive ? "text-amber-300" : "text-white"}`}
                          aria-hidden="true"
                        />
                      </span>
                      <span className="flex-1 text-xl font-semibold tracking-tight text-white">
                        {link.name}
                      </span>
                      <ArrowRight
                        className={`h-5 w-5 text-white/50 ${transition} duration-300 group-hover:translate-x-1 group-hover:text-white`}
                        aria-hidden="true"
                      />
                    </>
                  )}
                </NavLink>
              );
            })}
          </nav>

          <div className="border-t border-white/10" />

          {/* Actions */}
          <div className="flex flex-col gap-3 px-6 py-6">
            <Link
              to="/admissions"
              onClick={closeMobileMenu}
              className={`
                group flex h-14 items-center justify-center gap-2 rounded-2xl
                bg-white text-base font-bold text-blue-700
                ${transition} ${duration}
                hover:bg-blue-50
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              `}
            >
              Apply Now
              <ArrowRight
                className={`h-5 w-5 ${transition} duration-300 group-hover:translate-x-1`}
                aria-hidden="true"
              />
            </Link>

            <Link
              to="/portal/student-login"
              onClick={closeMobileMenu}
              className={`
                flex h-14 items-center justify-center gap-2 rounded-2xl
                border border-white/30 text-base font-semibold text-white
                ${transition} ${duration}
                hover:bg-white/10
                focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-transparent
              `}
            >
              <UserRound className="h-5 w-5" aria-hidden="true" />
              Student Portal
            </Link>
          </div>

          {/* Footer — contact strip instead of a plain text card */}
          <div className="mt-auto border-t border-white/10 px-6 py-6">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
              <div className="flex items-center gap-2 text-sm text-blue-50">
                <Phone className="h-4 w-4 text-amber-300" aria-hidden="true" />
                <span>+234 800 000 0000</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-blue-50">
                <Mail className="h-4 w-4 text-amber-300" aria-hidden="true" />
                <span>admissions@maydayschool.edu</span>
              </div>
            </div>
            <p className="mt-4 text-xs leading-6 text-blue-100/70">
              Building confident learners with a world-class international
              education and a vibrant school community.
            </p>
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