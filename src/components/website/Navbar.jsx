// import { useState, useEffect } from 'react'
// import { NavLink, Link } from 'react-router-dom'
// import { Menu, X, GraduationCap } from 'lucide-react'
// import { cn } from '@utils/cn'

// // --- FIX: Added the missing Marquee CSS Animation directly here ---
// const MarqueeStyles = () => (
//   <style>{`
//     @keyframes marquee {
//       0% { transform: translateX(100%); }
//       100% { transform: translateX(-100%); }
//     }
//     .animate-marquee {
//       display: inline-block;
//       animation: marquee 25s linear infinite;
//     }
//     /* Add a pseudo-element to ensure continuous scrolling if needed */
//     .animate-marquee:hover {
//       animation-play-state: paused;
//     }
//   `}</style>
// )
// // ----------------------------------------------------------------

// const navLinks = [
//   { name: 'Home', path: '/' },
//   { name: 'About', path: '/about' },
//   { name: 'Admissions', path: '/admissions' },
//   //  { name: 'Academics', path: '/academics' },
//   //  { name: 'Administration', path: '/administration' },
//   //  { name: 'Specialties', path: '/specialties' },
//   //{ name: 'Gallery', path: '/gallery' },
//   //{ name: 'News', path: '/news' },
//   { name: 'Contact', path: '/contact' },
// ]

// // Sliding text messages
// const topBarMessages = [
//   "Welcome to MayDay International School — Nurturing Godly Children",
//   "📚 Enrolling Now for 2026/2027 Academic Session!",
//  // "🎓 Excellence in Education Since 2014",
//   "🏆 Where Every Child Shines Bright",
//   "📞 Call us today for a school tour!",
//   "✨ Character. Leadership. Excellence."
// ]

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false)
//   const [scrolled, setScrolled] = useState(false)
//   const [currentMessageIndex, setCurrentMessageIndex] = useState(0)

//   // Detect scroll for sticky shadow effect
//   useEffect(() => {
//     const handleScroll = () => setScrolled(window.scrollY > 20)
//     window.addEventListener('scroll', handleScroll)
//     return () => window.removeEventListener('scroll', handleScroll)
//   }, [])

//   // Auto-slide top bar messages every 5 seconds
//   useEffect(() => {
//     const interval = setInterval(() => {
//       setCurrentMessageIndex((prev) => (prev + 1) % topBarMessages.length)
//     }, 5000)
//     return () => clearInterval(interval)
//   }, [])

//   // Close menu on route change
//   const closeMenu = () => setIsOpen(false)

//   return (
//     <>
//       {/* Inject the CSS styles here so they always exist in production */}
//       <MarqueeStyles />

//       <header
//         className={cn(
//           'fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300',
//           scrolled ? 'shadow-md' : 'shadow-sm'
//         )}
//       >
//         {/* Top Bar with Sliding Text
//         <div className="bg-blue-700 text-white text-xs py-1.5 px-4 text-center tracking-wide overflow-hidden whitespace-nowrap">
//           <div
//             className="inline-block animate-slide"
//             key={currentMessageIndex}
//           >
//             {topBarMessages[currentMessageIndex]}
//           </div>
//         </div> */}

//         {/* Top Bar with Marquee Effect */}
//         <div className="bg-blue-700 text-white text-xs py-1.5 px-4 overflow-hidden">
//           <div className="animate-marquee whitespace-nowrap inline-block">
//             {topBarMessages.map((message, idx) => (
//               <span key={idx} className="mx-8">
//                 {message}
//               </span>
//             ))}
//           </div>
//         </div>

//         {/* Main Navbar */}
//         <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">

//             {/* Logo */}
//             <Link
//               to="/"
//               onClick={closeMenu}
//               className="flex items-center gap-2 group"
//             >
//               <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center group-hover:bg-yellow-600 transition-colors duration-300">
//                 <GraduationCap className="w-5 h-5 text-white" />
//               </div>
//               <div className="leading-tight">
//                 <p className="text-blue-700 font-semibold text-sm">
//                   MayDay 
//                 </p>
//                 <p className="text-blue-700 text-xs font-medium">
//                   Int'l School
//                 </p>
//               </div>
//             </Link>

//             {/* Desktop Nav Links */}
//             <ul className="hidden lg:flex items-center gap-1">
//               {navLinks.map((link) => (
//                 <li key={link.path}>
//                   <NavLink
//                     to={link.path}
//                     end={link.path === '/'}
//                     className={({ isActive }) =>
//                       cn(
//                         'px-3 py-2 rounded-md text-sm font-medium transition-all duration-200',
//                         isActive
//                           ? 'bg-blue-700 text-white'
//                           : 'text-gray-700 hover:bg-blue-50 hover:text-blue-700'
//                       )
//                     }
//                   >
//                     {link.name}
//                   </NavLink>
//                 </li>
//               ))}
//             </ul>

//             {/* Portal Button + Mobile Menu Toggle */}
//             <div className="flex items-center gap-3">
//               <Link
//                 to="/portal/student-login"
//                 className="hidden sm:inline-flex items-center gap-1.5 bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium px-4 py-2 rounded-md transition-colors duration-200"
//               >
//                 <GraduationCap className="w-4 h-4" />
//                 Portal
//               </Link>

//               {/* Mobile Menu Button */}
//               <button
//                 onClick={() => setIsOpen(!isOpen)}
//                 className="lg:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
//                 aria-label="Toggle menu"
//               >
//                 {isOpen ? (
//                   <X className="w-5 h-5" />
//                 ) : (
//                   <Menu className="w-5 h-5" />
//                 )}
//               </button>
//             </div>

//           </div>
//         </nav>

//         {/* Mobile Menu */}
//         <div
//           className={cn(
//             'lg:hidden bg-white border-t border-gray-100 overflow-hidden transition-all duration-300',
//             isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
//           )}
//         >
//           <ul className="px-4 py-3 space-y-1">
//             {navLinks.map((link) => (
//               <li key={link.path}>
//                 <NavLink
//                   to={link.path}
//                   end={link.path === '/'}
//                   onClick={closeMenu}
//                   className={({ isActive }) =>
//                     cn(
//                       'block px-4 py-2.5 rounded-md text-sm font-medium transition-colors duration-200',
//                       isActive
//                         ? 'bg-blue-700 text-white'
//                         : 'text-gray-700 hover:bg-green-50 hover:text-blue-700'
//                     )
//                   }
//                 >
//                   {link.name}
//                 </NavLink>
//               </li>
//             ))}

//             {/* Mobile Portal Button */}
//             <li className="pt-2 border-t border-gray-100">
//               <Link
//                 to="/portal/student-login"
//                 onClick={closeMenu}
//                 className="flex items-center justify-center gap-2 w-full bg-yellow-600 hover:bg-yellow-700 text-white text-sm font-medium px-4 py-2.5 rounded-md transition-colors duration-200"
//               >
//                 <GraduationCap className="w-4 h-4" />
//                 Student / Staff Portal
//               </Link>
//             </li>
//           </ul>
//         </div>
//       </header>
//     </>
//   )
// }

// export default Navbar








































































import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  GraduationCap,
  ArrowRight,
  Menu,
  X,
  UserRound,
} from "lucide-react";

const links = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Admissions",
    path: "/admissions",
  },
  {
    name: "Contact",
    path: "/contact",
  },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let lastScroll = window.scrollY;

    const handleScroll = () => {
      const current = window.scrollY;

      if (current > 120) {
        if (current > lastScroll) {
          setHidden(true);
          setMobileOpen(false);
        } else {
          setHidden(false);
        }
      } else {
        setHidden(false);
      }

      lastScroll = current;
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`
        fixed top-5 left-1/2 -translate-x-1/2
        w-[94%]
        max-w-7xl
        z-50
        transition-all duration-500
        ${hidden ? "-translate-y-40" : "translate-y-0 -translate-x-1/2"}
      `}
      >
        <div
          className="
          h-20
          rounded-full
          border border-white/20
          bg-white/80
          backdrop-blur-xl
          shadow-[0_10px_40px_rgba(0,0,0,0.08)]
          px-8
          flex items-center justify-between
        "
        >
          {/* logo */}
          <Link to="/" className="flex items-center gap-3">
            <div
              className="
              h-12 w-12
              rounded-2xl
              bg-[#0B1F3A]
              flex items-center justify-center
            "
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </div>

            <div>
              <h2 className="font-bold text-[#0B1F3A] text-lg">
                MayDay
              </h2>

              <p className="uppercase tracking-[3px] text-[10px] text-gray-500">
                International School
              </p>
            </div>
          </Link>

          {/* desktop links */}
          <div className="hidden lg:flex items-center gap-2">
            {links.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `
                  px-5 py-3
                  rounded-full
                  text-sm
                  font-medium
                  transition-all duration-300
                  ${
                    isActive
                      ? "bg-[#0B1F3A] text-white"
                      : "text-gray-600 hover:bg-gray-100"
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* right buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/portal/student-login"
              className="
              flex items-center gap-2
              text-sm
              font-medium
              text-gray-700
              hover:text-[#0B1F3A]
            "
            >
              <UserRound className="w-4 h-4" />
              Portal
            </Link>

            <Link
              to="/admissions"
              className="
              h-12
              px-6
              rounded-full
              bg-[#0B1F3A]
              text-white
              font-semibold
              text-sm
              flex items-center gap-2
              hover:scale-105
              transition-all duration-300
            "
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* mobile button */}
          <button
            onClick={() => setMobileOpen(true)}
            className="
            lg:hidden
            w-11 h-11
            rounded-full
            bg-gray-100
            flex items-center justify-center
          "
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </header>

      {/* mobile menu */}
      <div
        className={`
        fixed inset-0 z-[100]
        bg-[#07111F]
        transition-all duration-500
        ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
      `}
      >
        <div className="h-24 px-8 flex items-center justify-between">
          <div>
            <h2 className="text-white text-xl font-bold">
              MayDay
            </h2>

            <p className="text-white/50 text-xs uppercase tracking-[4px]">
              International School
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="
            w-12 h-12
            rounded-full
            bg-white/10
            flex items-center justify-center
            text-white
          "
          >
            <X />
          </button>
        </div>

        <div
          className="
          px-8
          mt-16
          flex flex-col
          gap-8
        "
        >
          {links.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="
              text-4xl
              font-semibold
              text-white
              hover:text-[#D4AF37]
              transition-colors
            "
            >
              {link.name}
            </NavLink>
          ))}

          <div className="border-t border-white/10 pt-10 mt-6">
            <Link
              to="/portal/student-login"
              className="
              flex items-center gap-3
              text-white/80
              text-lg
              mb-8
            "
            >
              <UserRound />
              Portal
            </Link>

            <Link
              to="/admissions"
              className="
              h-14
              rounded-full
              bg-[#D4AF37]
              text-[#07111F]
              font-bold
              px-8
              inline-flex
              items-center
              gap-3
            "
            >
              Apply Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
```
