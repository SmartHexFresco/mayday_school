


import { Link } from 'react-router-dom'
// import { FaFacebook } from 'react-icons/fa'
import {
  GraduationCap,
  Phone,
  Mail,
  MapPin,

  MessageCircle,
} from 'lucide-react'

{/* <FaFacebook className="w-4 h-4" /> */}

const quickLinks = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  { name: 'Admissions', path: '/admissions' },
  { name: 'Academics', path: '/academics' },
  { name: 'Administration', path: '/administration' },
  { name: 'Specialties', path: '/specialties' },
]

const resourceLinks = [
  { name: 'Gallery', path: '/gallery' },
  { name: 'Events', path: '/news' },
  { name: 'Reports', path: '/reports' },
  { name: 'Contact Us', path: '/contact' },
  { name: 'Student Portal', path: '/portal/student-login' },
  { name: 'Staff Portal', path: '/portal/staff-login' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-blue-700 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Column 1 — Brand */}
          <div className="space-y-4">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-yellow-600 rounded-full flex items-center justify-center">
                <GraduationCap className="w-5 h-5 text-white" />
              </div>
              <div className="leading-tight">
                <p className="font-semibold text-sm text-white">
                  MayDay 
                </p>
                <p className="text-yellow-400 text-xs">Int'l School</p>
              </div>
            </Link>

            <p className="text-gray-300 text-sm leading-relaxed">
              Nurturing excellence and building futures through quality
              education, strong values, and a passion for learning.
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3 pt-2">

               {/* <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Facebook"
              >
                 <Facebook className="w-4 h-4" />
              </a>   */}

              <a
                href="https://wa.me/234XXXXXXXXXX"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 bg-white/10 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-4 h-4" />
              </a>

              <a
                href="mailto:info@clustersoftreasure.edu.ng"
                className="w-9 h-9 bg-white/10 hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors duration-200"
                aria-label="Email"
              >
                <Mail className="w-4 h-4" />
              </a>

            </div>
          </div>

          {/* Column 2 — Quick Links */}
          <div>
            <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-5">
              Quick Links
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full group-hover:bg-yellow-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Resources */}
          <div>
            <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-5">
              Resources
            </h3>
            <ul className="space-y-2.5">
              {resourceLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-gray-300 hover:text-yellow-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 bg-yellow-600 rounded-full group-hover:bg-yellow-400 transition-colors" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4 — Contact Info */}
          <div>
            <h3 className="text-yellow-400 font-semibold text-sm uppercase tracking-widest mb-5">
              Contact Us
            </h3>

            <ul className="space-y-4">

              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-yellow-400 mt-0.5 shrink-0" />
                <span className="text-gray-300 text-sm leading-relaxed">
                  Your School Address,<br />
                  Enugu, Nigeria
                </span>
              </li>

              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href="tel:+234XXXXXXXXXX"
                  className="text-gray-300 hover:text-yellow-400 text-sm"
                >
                  +234 XXX XXX XXXX
                </a>
              </li>

              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href="https://wa.me/234XXXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-yellow-400 text-sm"
                >
                  WhatsApp Us
                </a>
              </li>

              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-yellow-400 shrink-0" />
                <a
                  href="mailto:info@MayDay.edu.ng"
                  className="text-gray-300 hover:text-yellow-400 text-sm"
                >
                  info@MayDay.edu.ng
                </a>
              </li>

            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white text-xs text-center sm:text-left">
            &copy; {currentYear} MayDay Int'l School. All rights reserved.
          </p>
          <p className="text-white text-xs">
            Designed & Developed with ❤️ for Excellence in Education
          </p>
        </div>
      </div>

    </footer>
  )
}

export default Footer
















