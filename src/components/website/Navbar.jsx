
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
  const [visible, setVisible] = useState(false);

 useEffect(() => {
  let lastScrollY = window.scrollY;

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Hide when near top
    if (currentScrollY <= 80) {
      setVisible(false);
    }
    // Show when scrolling up
    else if (currentScrollY < lastScrollY) {
      setVisible(true);
    }
    // Hide when scrolling down
    else {
      setVisible(false);
    }

    lastScrollY = currentScrollY;
  };

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  return () =>
    window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <>
      {/* NAVBAR */}
      <header
  className={`
    fixed
    top-5
    left-1/2
    -translate-x-1/2
    z-50
    w-[94%]
    max-w-7xl
    transition-all
    duration-500
    ${
      visible
        ? "translate-y-0 opacity-100"
        : "-translate-y-24 opacity-0 pointer-events-none"
    }
  `}

      >
        <div
          className="
          h-20
          px-4
          sm:px-8
          rounded-full
          border
          border-white/30
          bg-white/20
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.08)]
          flex
          items-center
          justify-between
        "
        >
          {/* LOGO */}
          <Link
            to="/"
            className="flex items-center gap-3"
          >
            <div
              className="
              h-12
              w-12
              rounded-2xl
              bg-blue-700
              flex
              items-center
              justify-center
              shadow-lg
            "
            >
              <GraduationCap className="w-6 h-6 text-white" />
            </div>

            <div className="leading-tight">
            <h2 className="font-bold text-sm sm:text-lg text-blue-950">
              MayDay
            </h2>

      <p
       className="
       uppercase
       tracking-[2px]
       sm:tracking-[3px]
       text-[8px]
       sm:text-[10px]
      text-slate-500
      "
        >
           International School
        </p>
        </div>
          </Link>

          {/* DESKTOP LINKS */}
          <div
            className="
            hidden
            lg:flex
            items-center
            gap-2
            bg-white/50
            backdrop-blur-xl
            rounded-full
            p-2
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
                  py-3
                  rounded-full
                  text-sm
                  font-medium
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  ${
                    isActive
                      ? "bg-blue-700 text-white shadow-lg"
                      : "text-slate-700 hover:bg-white"
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
              className="
              h-12
              px-5
              rounded-full
              bg-blue-50
              border
              border-blue-100
              text-blue-700
              text-sm
              font-semibold
              flex
              items-center
              gap-2
              transition-all
              duration-300
              hover:bg-white
              hover:shadow-xl
              hover:-translate-y-0.5
            "
            >
              <UserRound className="w-4 h-4" />
              Portal
            </Link>

            {/* APPLY */}
            <Link
              to="/admissions"
              className="
              h-12
              px-6
              rounded-full
              bg-blue-700
              text-white
              text-sm
              font-semibold
              flex
              items-center
              gap-2
              transition-all
              duration-300
              hover:scale-105
              shadow-xl
            "
            >
              Apply Now
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE BUTTON */}
          <button
            onClick={() => setMobileOpen(true)}
            className="
            lg:hidden
            h-12
            w-12
            rounded-full
            bg-white/40
            backdrop-blur-xl
            border
            border-white/30
            flex
            items-center
            justify-center
          "
        >
            <Menu className="w-5 h-5 text-blue-900" />
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
        ${
          mobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }
      `}
      >
        {/* TOP */}
        <div
          className="
          h-24
          px-6
          flex
          items-center
          justify-between
        "
        >
          <div>
            <h2 className="font-bold text-2xl text-blue-950">
              MayDay
            </h2>

            <p className="text-xs uppercase tracking-[4px] text-slate-500">
              International School
            </p>
          </div>

          <button
            onClick={() => setMobileOpen(false)}
            className="
            h-12
            w-12
            rounded-full
            bg-white
            shadow-lg
            flex
            items-center
            justify-center
          "
          >
            <X className="text-blue-900" />
          </button>
        </div>

        {/* LINKS */}
        <div
          className="
          mt-12
          px-8
          flex
          flex-col
          gap-7
        "
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              onClick={() => setMobileOpen(false)}
              className="
              text-4xl
              font-semibold
              text-blue-950
              transition-all
              duration-300
              hover:translate-x-2
            "
            >
              {link.name}
            </NavLink>
          ))}

          {/* BUTTONS */}
          <div className="pt-12 space-y-4">
            <Link
              to="/portal/student-login"
              onClick={() => setMobileOpen(false)}
              className="
              h-14
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
            "
            >
              <UserRound className="w-5 h-5" />
              Student Portal
            </Link>

            <Link
              to="/admissions"
              onClick={() => setMobileOpen(false)}
              className="
              h-14
              rounded-2xl
              bg-blue-700
              text-white
              font-bold
              flex
              items-center
              justify-center
              gap-3
              shadow-[0_20px_40px_rgba(29,78,216,0.3)]
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

