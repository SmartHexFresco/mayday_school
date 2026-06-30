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

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [mobileOpen]);

  return (
    <>
      {/* NAVBAR */}
      <header
        className={`
          fixed
          top-0
          left-0
          right-0
          z-50
          transition-all
          duration-500
          ease-in-out
          ${
            scrolled
              ? "top-3 sm:top-5 left-1/2 -translate-x-1/2 w-[95%] sm:w-[94%] max-w-7xl"
              : "w-full"
          }
        `}
      >
        <div
          className={`
            h-16 sm:h-20
            px-3 sm:px-6 md:px-8
            transition-all
            duration-500
            ease-in-out
            flex
            items-center
            justify-between
            ${
              scrolled
                ? `
                  rounded-full
                  border
                  border-white/30
                  bg-white/20
                  backdrop-blur-2xl
                  shadow-[0_20px_60px_rgba(0,0,0,0.08)]
                `
                : `
                  rounded-none
                  bg-white/95
                  backdrop-blur-md
                  shadow-md
                  border-b
                  border-gray-200/50
                `
            }
          `}
        >
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-2 sm:gap-3 shrink-0"
          >
            <div
              className={`
                h-10 w-10 sm:h-12 sm:w-12
                rounded-xl sm:rounded-2xl
                bg-blue-700
                flex
                items-center
                justify-center
                shadow-lg
                transition-all
                duration-300
                ${scrolled ? "scale-100" : "scale-105"}
              `}
            >
              <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
            </div>

            <div className="leading-tight">
              <h2 className="font-bold text-sm sm:text-lg text-blue-950">
                MayDay
              </h2>

              <p
                className={`
                  uppercase
                  tracking-[1.5px] sm:tracking-[2px] md:tracking-[3px]
                  text-[7px] sm:text-[8px] md:text-[10px]
                  text-slate-500
                  transition-all
                  duration-300
                  hidden xs:block
                `}
              >
                International School
              </p>
            </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div
            className={`
              hidden
              lg:flex
              items-center
              gap-2
              transition-all
              duration-500
              ${
                scrolled
                  ? "bg-white/50 backdrop-blur-xl rounded-full p-2"
                  : "bg-transparent"
              }
            `}
          >
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `
                  px-4 xl:px-5
                  py-2.5 xl:py-3
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  ${
                    isActive
                      ? "bg-blue-700 text-white shadow-lg"
                      : `text-slate-700 hover:bg-white/50 ${
                          scrolled ? "" : "hover:bg-white/80"
                        }`
                  }
                `
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          {/* RIGHT BUTTONS */}
          <div className="hidden lg:flex items-center gap-3">
            {/* PORTAL */}
            <Link
              to="/portal/student-login"
              className={`
                h-11 xl:h-12
                px-4 xl:px-5
                rounded-full
                text-sm
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:-translate-y-0.5
                ${
                  scrolled
                    ? `
                      bg-blue-50
                      border
                      border-blue-100
                      text-blue-700
                      hover:bg-white
                      hover:shadow-xl
                    `
                    : `
                      bg-blue-600
                      text-white
                      hover:bg-blue-700
                      hover:shadow-lg
                    `
                }
              `}
            >
              <UserRound className="w-4 h-4" />
              <span className="hidden xl:inline">Portal</span>
            </Link>

            {/* APPLY */}
            <Link
              to="/admissions"
              className={`
                h-11 xl:h-12
                px-4 xl:px-6
                rounded-full
                text-sm
                font-semibold
                flex
                items-center
                gap-2
                transition-all
                duration-300
                hover:scale-105
                shadow-xl
                ${
                  scrolled
                    ? "bg-blue-700 text-white"
                    : "bg-blue-600 text-white hover:bg-blue-700"
                }
              `}
            >
              <span className="hidden xs:inline">Apply</span>
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className={`
              lg:hidden
              h-10 w-10 sm:h-12 sm:w-12
              rounded-full
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:scale-105
              active:scale-95
              ${
                scrolled
                  ? "bg-white/40 backdrop-blur-xl border border-white/30"
                  : "bg-white/80 backdrop-blur-sm border border-gray-200"
              }
            `}
            aria-label="Open menu"
          >
            <Menu className="w-5 h-5 sm:w-5 sm:h-5 text-blue-900" />
          </button>
        </div>
      </header>

      {/* PREMIUM MOBILE MENU */}
      <div
        className={`
          fixed
          inset-0
          z-[100]
          bg-white/70
          backdrop-blur-3xl
          transition-all
          duration-500
          ease-in-out
          ${
            mobileOpen
              ? "opacity-100 visible pointer-events-auto"
              : "opacity-0 invisible pointer-events-none"
          }
        `}
        onClick={(e) => {
          if (e.target === e.currentTarget) {
            setMobileOpen(false);
          }
        }}
      >
        {/* TOP */}
        <div
          className={`
            h-20 sm:h-24
            px-4 sm:px-6
            flex
            items-center
            justify-between
            transition-transform
            duration-500
            delay-100
            ${
              mobileOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-8 opacity-0"
            }
          `}
        >
          <div>
            <h2 className="font-bold text-xl sm:text-2xl text-blue-950">
              MayDay
            </h2>

            <p className="text-[10px] sm:text-xs uppercase tracking-[3px] sm:tracking-[4px] text-slate-500">
              International School
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="
              h-10 w-10 sm:h-12 sm:w-12
              rounded-full
              bg-white
              shadow-lg
              flex
              items-center
              justify-center
              transition-all
              duration-300
              hover:rotate-90
              hover:shadow-xl
              active:scale-90
            "
            aria-label="Close menu"
          >
            <X className="w-5 h-5 sm:w-6 sm:h-6 text-blue-900" />
          </button>
        </div>

        {/* LINKS */}
        <div
          className="
            mt-8 sm:mt-12
            px-6 sm:px-8
            flex
            flex-col
            gap-5 sm:gap-7
          "
        >
          {navLinks.map((link, index) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                `
                text-3xl sm:text-4xl
                font-semibold
                text-blue-950
                transition-all
                duration-300
                hover:translate-x-3
                hover:text-blue-700
                relative
                group
                transform
                transition-all
                duration-500
                delay-${index * 100}
                ${
                  mobileOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }
                ${
                  isActive
                    ? "text-blue-700"
                    : ""
                }
              `
              }
            >
              {link.name}
              <span
                className={`
                  absolute
                  bottom-0
                  left-0
                  w-0
                  h-0.5
                  bg-blue-700
                  transition-all
                  duration-300
                  group-hover:w-full
                `}
              />
            </NavLink>
          ))}

          {/* BUTTONS */}
          <div
            className={`
              pt-6 sm:pt-12
              space-y-3 sm:space-y-4
              transition-all
              duration-500
              delay-300
              ${
                mobileOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-8 opacity-0"
              }
            `}
          >
            <Link
              to="/portal/student-login"
              onClick={() => setMobileOpen(false)}
              className="
                h-12 sm:h-14
                rounded-2xl
                bg-blue-50
                border
                border-blue-100
                text-blue-700
                font-semibold
                flex
                items-center
                justify-center
                gap-3
                shadow-lg
                transition-all
                duration-300
                hover:bg-blue-100
                hover:shadow-xl
                active:scale-95
                text-sm sm:text-base
              "
            >
              <UserRound className="w-4 h-4 sm:w-5 sm:h-5" />
              Student Portal
            </Link>

            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="
                h-12 sm:h-14
                rounded-2xl
                bg-blue-700
                text-white
                font-bold
                flex
                items-center
                justify-center
                gap-3
                shadow-[0_20px_40px_rgba(29,78,216,0.3)]
                transition-all
                duration-300
                hover:bg-blue-800
                hover:shadow-[0_25px_50px_rgba(29,78,216,0.4)]
                active:scale-95
                text-sm sm:text-base
              "
            >
              Apply Now
              <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        {/* Decorative background elements */}
        <div
          className={`
            absolute
            -top-20
            -right-20
            w-64 h-64
            bg-blue-500/10
            rounded-full
            blur-3xl
            transition-all
            duration-1000
            ${
              mobileOpen
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }
          `}
        />
        <div
          className={`
            absolute
            -bottom-20
            -left-20
            w-64 h-64
            bg-purple-500/10
            rounded-full
            blur-3xl
            transition-all
            duration-1000
            delay-200
            ${
              mobileOpen
                ? "scale-100 opacity-100"
                : "scale-50 opacity-0"
            }
          `}
        />
      </div>
    </>
  );
};

export default Navbar;