import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import {
  GraduationCap,
  ArrowRight,
  Menu,
  X,
  UserRound,
} from "lucide-react";

const navLinks = [
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
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 80);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`
          fixed
          top-4
          sm:top-6
          left-1/2
          -translate-x-1/2
          z-50
          w-[92%]
          sm:w-[94%]
          max-w-7xl
          transition-all
          duration-700
          ease-out
          ${
            scrolled
              ? "translate-y-0 opacity-100"
              : "translate-y-[-120%] opacity-0"
          }
        `}
      >
        <div
          className={`
            h-[72px]
            sm:h-[80px]
            px-4
            sm:px-6
            lg:px-8
            rounded-full
            flex
            items-center
            justify-between
            transition-all
            duration-500
            ${
              scrolled
                ? "bg-white/70 backdrop-blur-2xl border border-white/30 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.08)]"
                : "bg-white/20 backdrop-blur-xl border border-white/20 shadow-[0_20px_60px_-10px_rgba(0,0,0,0.05)]"
            }
          `}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3 sm:gap-4 flex-shrink-0"
          >
            <div
              className="
                h-11
                w-11
                sm:h-12
                sm:w-12
                rounded-2xl
                bg-gradient-to-br
                from-blue-600
                to-blue-800
                flex
                items-center
                justify-center
                shadow-[0_8px_24px_-6px_rgba(29,78,216,0.3)]
                transition-all
                duration-300
                hover:shadow-[0_12px_32px_-8px_rgba(29,78,216,0.4)]
                hover:scale-105
              "
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            <div className="leading-tight">
              <h2
                className="
                  font-bold
                  text-base
                  sm:text-xl
                  text-blue-950
                  tracking-tight
                  transition-colors
                  duration-300
                "
              >
                MayDay
              </h2>
              <p
                className="
                  uppercase
                  tracking-[2px]
                  sm:tracking-[3px]
                  text-[7px]
                  sm:text-[9px]
                  text-slate-500
                  font-medium
                  hidden
                  xs:block
                "
              >
                International School
              </p>
            </div>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden lg:flex items-center gap-1">
            <div
              className="
                flex
                items-center
                gap-1
                bg-white/40
                backdrop-blur-xl
                rounded-full
                p-1.5
                border
                border-white/30
              "
            >
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  className={({ isActive }) =>
                    `
                      px-5
                      py-2.5
                      rounded-full
                      text-sm
                      font-medium
                      transition-all
                      duration-300
                      ease-out
                      hover:-translate-y-0.5
                      ${
                        isActive
                          ? "bg-blue-700 text-white shadow-[0_8px_24px_-6px_rgba(29,78,216,0.4)]"
                          : "text-slate-700 hover:bg-white/60 hover:text-blue-700"
                      }
                    `
                  }
                >
                  {link.name}
                </NavLink>
              ))}
            </div>

            {/* PORTAL BUTTON */}
            <Link
              to="/portal/student-login"
              className="
                ml-2
                h-[44px]
                px-5
                rounded-full
                border-2
                border-blue-200
                bg-white/50
                backdrop-blur-sm
                text-blue-700
                text-sm
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:bg-white
                hover:border-blue-300
                hover:shadow-[0_8px_24px_-6px_rgba(29,78,216,0.15)]
                hover:-translate-y-0.5
              "
            >
              <UserRound className="w-4 h-4" />
              Portal
            </Link>

            {/* APPLY BUTTON */}
            <Link
              to="/admissions"
              className="
                ml-1
                h-[44px]
                px-6
                rounded-full
                bg-gradient-to-r
                from-blue-600
                to-blue-700
                text-white
                text-sm
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:shadow-[0_12px_32px_-8px_rgba(29,78,216,0.4)]
                hover:-translate-y-0.5
                hover:scale-105
                shadow-[0_8px_24px_-6px_rgba(29,78,216,0.3)]
              "
            >
              Apply Now
              <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>

          {/* MOBILE MENU TOGGLE */}
          <button
            onClick={() => setMobileOpen(true)}
            className="
              lg:hidden
              h-11
              w-11
              sm:h-12
              sm:w-12
              rounded-full
              bg-white/40
              backdrop-blur-xl
              border
              border-white/30
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:bg-white/60
              hover:scale-105
              shadow-sm
            "
          >
            <Menu className="w-5 h-5 sm:w-5 sm:h-5 text-blue-900" />
          </button>
        </div>
      </header>

      {/* PREMIUM MOBILE OVERLAY */}
      <div
        className={`
          fixed
          inset-0
          z-[100]
          transition-all
          duration-500
          ease-out
          ${
            mobileOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
      >
        {/* Backdrop */}
        <div
          className={`
            absolute
            inset-0
            bg-white/60
            backdrop-blur-3xl
            transition-all
            duration-700
            ${
              mobileOpen
                ? "opacity-100"
                : "opacity-0"
            }
          `}
          onClick={() => setMobileOpen(false)}
        />

        {/* Menu Content */}
        <div
          className={`
            relative
            h-full
            w-full
            flex
            flex-col
            px-6
            sm:px-10
            md:px-16
            transition-all
            duration-500
            delay-100
            ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "translate-y-8 opacity-0"
            }
          `}
        >
          {/* Top Bar */}
          <div
            className="
              h-24
              sm:h-28
              flex
              items-center
              justify-between
              border-b
              border-blue-100/50
              flex-shrink-0
            "
          >
            <div>
              <h2
                className="
                  font-bold
                  text-2xl
                  sm:text-3xl
                  text-blue-950
                  tracking-tight
                "
              >
                MayDay
              </h2>
              <p
                className="
                  text-[10px]
                  sm:text-xs
                  uppercase
                  tracking-[4px]
                  sm:tracking-[5px]
                  text-slate-500
                  font-medium
                "
              >
                International School
              </p>
            </div>

            <button
              onClick={() => setMobileOpen(false)}
              className="
                h-12
                w-12
                sm:h-14
                sm:w-14
                rounded-full
                bg-white
                shadow-[0_8px_24px_-6px_rgba(0,0,0,0.08)]
                flex
                items-center
                justify-center
                transition-all
                duration-300
                hover:shadow-[0_12px_32px_-8px_rgba(0,0,0,0.12)]
                hover:scale-105
                active:scale-95
              "
            >
              <X className="w-6 h-6 sm:w-7 sm:h-7 text-blue-900" />
            </button>
          </div>

          {/* Navigation Links */}
          <div
            className="
              flex-1
              flex
              flex-col
              justify-center
              py-8
              sm:py-12
              space-y-6
              sm:space-y-8
            "
          >
            {navLinks.map((link, index) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={() => setMobileOpen(false)}
                className={({ isActive }) =>
                  `
                    text-4xl
                    sm:text-5xl
                    md:text-6xl
                    lg:text-7xl
                    font-bold
                    transition-all
                    duration-300
                    ${
                      isActive
                        ? "text-blue-700"
                        : "text-blue-950 hover:text-blue-600"
                    }
                    hover:translate-x-3
                    active:scale-95
                    tracking-tight
                  `
                }
                style={{
                  transitionDelay: `${index * 50}ms`,
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* Action Buttons */}
          <div
            className="
              flex-shrink-0
              pb-8
              sm:pb-12
              space-y-4
              sm:space-y-5
              w-full
              max-w-md
              mx-auto
            "
          >
            <Link
              to="/portal/student-login"
              onClick={() => setMobileOpen(false)}
              className="
                h-14
                sm:h-16
                w-full
                rounded-2xl
                bg-white/80
                backdrop-blur-sm
                border-2
                border-blue-100
                text-blue-700
                font-semibold
                text-base
                sm:text-lg
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
                hover:bg-white
                hover:border-blue-300
                hover:shadow-[0_12px_32px_-8px_rgba(29,78,216,0.12)]
                active:scale-98
              "
            >
              <UserRound className="w-5 h-5 sm:w-6 sm:h-6" />
              Student Portal
            </Link>

            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="
                h-14
                sm:h-16
                w-full
                rounded-2xl
                bg-gradient-to-r
                from-blue-600
                to-blue-700
                text-white
                font-bold
                text-base
                sm:text-lg
                flex
                items-center
                justify-center
                gap-3
                transition-all
                duration-300
                shadow-[0_20px_40px_-12px_rgba(29,78,216,0.35)]
                hover:shadow-[0_24px_48px_-12px_rgba(29,78,216,0.45)]
                hover:-translate-y-0.5
                active:scale-98
              "
            >
              Apply Now
              <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;