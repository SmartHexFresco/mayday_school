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
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Admissions", path: "/admissions" },
  { name: "Contact", path: "/contact" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 24);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") setMobileOpen(false);
    };

    document.body.style.overflow = mobileOpen ? "hidden" : "";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [mobileOpen]);

  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <>
      <header className="sticky top-0 z-50 w-full px-3 pt-3 sm:px-5 sm:pt-5 lg:px-8">
        <nav
          className={`mx-auto flex h-16 w-full max-w-7xl items-center justify-between rounded-full border px-3 transition-all duration-500 ease-out sm:h-[76px] sm:px-5 lg:px-6 ${
            scrolled
              ? "border-blue-100/80 bg-white/78 shadow-[0_24px_80px_rgba(37,99,235,0.18)] backdrop-blur-2xl"
              : "border-white/35 bg-white/18 shadow-[0_18px_70px_rgba(37,99,235,0.08)] backdrop-blur-md"
          }`}
          aria-label="Main navigation"
        >
          <Link
            to="/"
            onClick={closeMobileMenu}
            className="group flex min-w-0 items-center gap-2 rounded-full pr-2 transition-transform duration-300 hover:scale-[1.01] sm:gap-3"
            aria-label="MayDay International School home"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-700 shadow-[0_12px_32px_rgba(29,78,216,0.34)] transition-all duration-300 group-hover:bg-blue-800 sm:h-12 sm:w-12">
              <GraduationCap className="h-5 w-5 text-white sm:h-6 sm:w-6" />
            </span>

            <span className="min-w-0 leading-none">
              <span className="block truncate text-[15px] font-semibold tracking-[-0.01em] text-blue-950 sm:text-lg">
                MayDay
              </span>
              <span className="mt-1 block truncate text-[7px] font-semibold uppercase tracking-[0.18em] text-blue-500 min-[360px]:text-[8px] sm:text-[10px] sm:tracking-[0.24em]">
                International School
              </span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 rounded-full border border-blue-100/70 bg-white/64 p-1.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.9)] backdrop-blur-xl lg:flex">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                end={link.path === "/"}
                className={({ isActive }) =>
                  `rounded-full px-5 py-3 text-sm font-medium tracking-[-0.01em] transition-all duration-300 ease-out ${
                    isActive
                      ? "bg-blue-700 text-white shadow-[0_12px_28px_rgba(29,78,216,0.28)]"
                      : "text-blue-900 hover:bg-white hover:text-blue-700 hover:shadow-[0_10px_30px_rgba(37,99,235,0.12)]"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="hidden items-center gap-3 lg:flex">
            <Link
              to="/portal/student-login"
              className="group flex h-12 items-center gap-2 rounded-full border border-blue-200 bg-white/72 px-5 text-sm font-semibold text-blue-700 shadow-[0_12px_34px_rgba(37,99,235,0.1)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-0.5 hover:border-blue-300 hover:bg-white hover:shadow-[0_18px_44px_rgba(37,99,235,0.18)]"
            >
              <UserRound className="h-4 w-4 transition-transform duration-300 group-hover:scale-110" />
              Portal
            </Link>

            <Link
              to="/admissions"
              className="group flex h-12 items-center gap-2 rounded-full bg-blue-700 px-6 text-sm font-semibold text-white shadow-[0_18px_42px_rgba(29,78,216,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-800 hover:shadow-[0_24px_54px_rgba(29,78,216,0.38)]"
            >
              Apply Now
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white/76 text-blue-900 shadow-[0_14px_34px_rgba(37,99,235,0.14)] backdrop-blur-xl transition-all duration-300 hover:bg-white active:scale-95 lg:hidden"
            aria-label="Open navigation menu"
            aria-expanded={mobileOpen}
          >
            <Menu className="h-5 w-5" />
          </button>
        </nav>
      </header>

      <div
        className={`fixed inset-0 z-[100] overflow-hidden bg-white/88 backdrop-blur-3xl transition-[opacity,visibility] duration-500 ease-out lg:hidden ${
          mobileOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
        aria-hidden={!mobileOpen}
      >
        <div
          className={`flex min-h-dvh flex-col px-4 py-4 transition-all duration-500 ease-out min-[360px]:px-5 sm:px-8 ${
            mobileOpen
              ? "translate-y-0 scale-100 opacity-100"
              : "translate-y-5 scale-[0.985] opacity-0"
          }`}
        >
          <div className="flex items-center justify-between gap-3">
            <Link
              to="/"
              onClick={closeMobileMenu}
              className="flex min-w-0 items-center gap-2 rounded-full pr-2 min-[360px]:gap-3"
              aria-label="MayDay International School home"
            >
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-blue-700 shadow-[0_12px_32px_rgba(29,78,216,0.32)] min-[360px]:h-12 min-[360px]:w-12">
                <GraduationCap className="h-5 w-5 text-white min-[360px]:h-6 min-[360px]:w-6" />
              </span>

              <span className="min-w-0 leading-none">
                <span className="block truncate text-base font-semibold text-blue-950 min-[360px]:text-lg sm:text-xl">
                  MayDay
                </span>
                <span className="mt-1 block truncate text-[7px] font-semibold uppercase tracking-[0.18em] text-blue-500 min-[360px]:text-[8px] sm:text-[10px] sm:tracking-[0.24em]">
                  International School
                </span>
              </span>
            </Link>

            <button
              type="button"
              onClick={closeMobileMenu}
              className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-blue-100 bg-white text-blue-900 shadow-[0_14px_36px_rgba(37,99,235,0.18)] transition-all duration-300 hover:bg-blue-50 active:scale-95 min-[360px]:h-12 min-[360px]:w-12"
              aria-label="Close navigation menu"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex flex-1 flex-col justify-center py-8 min-[390px]:py-10 sm:py-14">
            <div className="space-y-2 min-[360px]:space-y-3 sm:space-y-4">
              {navLinks.map((link, index) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  end={link.path === "/"}
                  onClick={closeMobileMenu}
                  className={({ isActive }) =>
                    `group flex items-center justify-between rounded-[28px] border px-5 py-4 text-[clamp(2rem,11vw,4.25rem)] font-semibold leading-none tracking-[-0.03em] transition-all duration-300 min-[360px]:px-6 min-[360px]:py-5 sm:rounded-[34px] sm:px-8 sm:py-6 ${
                      isActive
                        ? "border-blue-200 bg-blue-700 text-white shadow-[0_24px_54px_rgba(29,78,216,0.28)]"
                        : "border-blue-100/80 bg-white/54 text-blue-950 shadow-[0_18px_46px_rgba(37,99,235,0.1)] hover:border-blue-200 hover:bg-white hover:text-blue-700"
                    } ${mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"}`
                  }
                  style={{
                    transitionDelay: mobileOpen
                      ? `${120 + index * 55}ms`
                      : `${index * 20}ms`,
                  }}
                >
                  <span>{link.name}</span>
                  <ArrowRight className="h-6 w-6 shrink-0 opacity-70 transition-transform duration-300 group-hover:translate-x-1 min-[360px]:h-7 min-[360px]:w-7 sm:h-8 sm:w-8" />
                </NavLink>
              ))}
            </div>

            <div
              className={`mt-7 grid gap-3 transition-all duration-500 min-[390px]:mt-9 sm:mt-10 sm:grid-cols-2 ${
                mobileOpen ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
              }`}
              style={{ transitionDelay: mobileOpen ? "380ms" : "0ms" }}
            >
              <Link
                to="/portal/student-login"
                onClick={closeMobileMenu}
                className="flex min-h-14 items-center justify-center gap-3 rounded-full border border-blue-200 bg-white/76 px-5 text-base font-semibold text-blue-700 shadow-[0_16px_40px_rgba(37,99,235,0.14)] backdrop-blur-xl transition-all duration-300 hover:bg-white active:scale-[0.98] min-[360px]:min-h-16"
              >
                <UserRound className="h-5 w-5" />
                Portal
              </Link>

              <Link
                to="/admissions"
                onClick={closeMobileMenu}
                className="group flex min-h-14 items-center justify-center gap-3 rounded-full bg-blue-700 px-5 text-base font-semibold text-white shadow-[0_22px_48px_rgba(29,78,216,0.32)] transition-all duration-300 hover:bg-blue-800 active:scale-[0.98] min-[360px]:min-h-16"
              >
                Apply Now
                <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-0.5" />
              </Link>
            </div>
          </div>

          <div
            className={`pb-2 text-center text-[10px] font-semibold uppercase tracking-[0.28em] text-blue-400 transition-all duration-500 ${
              mobileOpen ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
            }`}
            style={{ transitionDelay: mobileOpen ? "460ms" : "0ms" }}
          >
            International School
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;