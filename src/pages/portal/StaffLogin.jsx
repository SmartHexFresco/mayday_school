






import { Link } from 'react-router-dom'
import { GraduationCap, Users, Briefcase, ArrowRight } from 'lucide-react'

const StaffLogin = () => {
  return (
    <div className="w-full">
      
      {/* ── Logo ─────────────────────────────────────────── */}
      <div className="text-center mb-8">
        <Link to="/" className="inline-flex flex-col items-center gap-2">
          <div className="w-14 h-14 bg-blue-700 rounded-full flex items-center justify-center">
            <GraduationCap className="w-7 h-7 text-white" />
          </div>
          <div>
            <p className="text-blue-600 font-bold text-sm">
              MayDay
            </p>
            <p className="text-yellow-600 text-xs font-medium">
              Int'l School
            </p>
          </div>
        </Link>
      </div>

      {/* ── Card ─────────────────────────────────────────── */}
      <div className="bg-white border border-gray-100 rounded-2xl shadow-sm px-8 py-10">
        
        <div className="text-center mb-8">
          <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-3">
            <Briefcase className="w-6 h-6 text-yellow-600" />
          </div>
          <h1 className="text-2xl font-bold text-gray-900">
            Staff & Admin Portal
          </h1>
          <p className="text-gray-500 text-sm mt-2">
            Access your staff dashboard
          </p>
        </div>

        {/* Direct Link to Staff Portal */}
        <a
          href="http://portal.maydayintschool.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full flex items-center justify-between bg-yellow-600 hover:bg-yellow-700 text-white font-semibold py-4 px-6 rounded-lg transition-all duration-200 group"
        >
          <span>Go to Staff Portal</span>
          <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
        </a>

        {/* Divider */}
        <div className="relative my-6">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-100" />
          </div>
          <div className="relative flex justify-center text-xs">
            <span className="bg-white px-3 text-gray-400">
              Other portals
            </span>
          </div>
        </div>

        <Link
          to="/portal/student-login"
          className="w-full flex items-center justify-center border border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 text-gray-700 hover:text-yellow-800 font-medium py-2.5 rounded-lg text-sm transition-all duration-200"
        >
          Login as Student Instead
        </Link>

      </div>

      {/* Security Notice */}
      <div className="mt-4 bg-yellow-50 border border-yellow-200 rounded-xl px-5 py-4">
        <p className="text-yellow-800 text-xs text-center">
          🔒 This portal is for authorized staff and administrators only.
          Unauthorized access is strictly prohibited.
        </p>
      </div>

      {/* Back to website */}
      <p className="text-center text-gray-400 text-xs mt-4">
        <Link to="/" className="hover:text-yellow-700 transition-colors">
          ← Back to School Website
        </Link>
      </p>

    </div>
  )
}
    
export default StaffLogin