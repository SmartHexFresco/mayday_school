// import { NavLink } from 'react-router-dom'
// import { getMenuByRole } from './RoleBasedMenu'
// import { X } from 'lucide-react'
// import { useAuth } from '@context/AuthContext'

// const Sidebar = ({ isOpen, onClose }) => {
//   const { user } = useAuth()
//   const role = user?.role || 'admin'

//   const links = getMenuByRole(role)

//   return (
//     <aside
//       className={`
//         fixed lg:static z-40 top-0 left-0 h-full w-64 bg-white border-r
//         transform transition-transform duration-300
//         ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'}
//       `}
//     >
//       {/* Header */}
//       <div className="flex items-center justify-between p-4 border-b lg:border-none">
//         <h1 className="text-lg font-bold text-green-800">
//           School Portal
//         </h1>

//         <button
//           onClick={onClose}
//           className="lg:hidden text-gray-500 hover:text-black"
//         >
//           <X />
//         </button>
//       </div>

//       {/* Navigation */}
//       <nav className="mt-4 px-3 space-y-1">
//         {links.map((item) => {
//           const Icon = item.icon

//           return (
//             <NavLink
//               key={item.name}
//               to={item.path}
//               className={({ isActive }) =>
//                 `flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition
//                 ${
//                   isActive
//                     ? 'bg-green-100 text-green-800'
//                     : 'text-gray-600 hover:bg-gray-100'
//                 }`
//               }
//             >
//               <Icon className="w-4 h-4" />
//               {item.name}
//             </NavLink>
//           )
//         })}
//       </nav>
//     </aside>
//   )
// }

// export default Sidebar















































import { Link, useLocation } from 'react-router-dom'
import { useAuth } from '@context/AuthContext'
import { 
  LayoutDashboard, 
  FileText, 
  User, 
  Users, 
  UserCheck, 
  BookOpen, 
  GraduationCap,
  Bell,
  Calendar,
  ClipboardList,
  TrendingUp,
  ExternalLink,
  Eye
} from 'lucide-react'

const Sidebar = () => {
  const { profile, isAdmin, isStaff, isStudent } = useAuth()
  const location = useLocation()
  
  const getMenuItems = () => {
    // Admin Menu with Student Portal Access
    if (isAdmin()) {
      return [
        // Admin Main Sections
        { label: 'Dashboard', path: '/admin', icon: LayoutDashboard },
        { label: 'Students', path: '/admin/students', icon: Users },
        { label: 'Staff', path: '/admin/staff', icon: UserCheck },
        { label: 'Classes', path: '/admin/classes', icon: BookOpen },
        { label: 'Subjects', path: '/admin/subjects', icon: GraduationCap },
        { label: 'Results', path: '/admin/results', icon: ClipboardList },
        { label: 'Announcements', path: '/admin/news', icon: Bell },
        { label: 'Events', path: '/admin/events', icon: Calendar },
        { label: 'Reports', path: '/admin/reports', icon: TrendingUp },
        
        // Divider/Header for Student Portal Access
        { type: 'divider' },
        { type: 'header', label: 'Student Portal Access' },
        
        // Student Portal Links (Admin can view these)
        { label: 'Student Dashboard', path: '/portal/student-dashboard', icon: Eye },
        { label: 'View Results', path: '/portal/my-results', icon: FileText },
        { label: 'Student Profile', path: '/portal/profile', icon: User },
      ]
    }
    
    // Staff Menu with limited Student Access
    if (isStaff()) {
      return [
        { label: 'Dashboard', path: '/portal/staff-dashboard', icon: LayoutDashboard },
        { label: 'My Classes', path: '/portal/my-classes', icon: BookOpen },
        { label: 'Students', path: '/portal/students', icon: Users },
        { label: 'Results', path: '/portal/results', icon: FileText },
        { label: 'Profile', path: '/portal/profile', icon: User },
      ]
    }
    
    // Student Menu
    return [
      { label: 'Dashboard', path: '/portal/student-dashboard', icon: LayoutDashboard },
      { label: 'My Results', path: '/portal/my-results', icon: FileText },
      { label: 'Profile', path: '/portal/profile', icon: User },
    ]
  }

  const menuItems = getMenuItems()

  return (
    <aside className="w-64 bg-white border-r border-gray-200 min-h-screen flex flex-col">
      <div className="p-4 border-b border-gray-200">
        <h2 className="text-xl font-bold text-green-800">School Portal</h2>
        {isAdmin() && (
          <span className="text-xs text-yellow-600 font-medium">Admin Mode</span>
        )}
      </div>
      
      <nav className="p-4 space-y-1 flex-1 overflow-y-auto">
        {menuItems.map((item, index) => {
          // Handle divider
          if (item.type === 'divider') {
            return <hr key={`divider-${index}`} className="my-4 border-gray-200" />
          }
          
          // Handle section header
          if (item.type === 'header') {
            return (
              <h3 key={`header-${index}`} className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                {item.label}
              </h3>
            )
          }
          
          const Icon = item.icon
          const isActive = location.pathname === item.path
          const isStudentPortalLink = item.path.startsWith('/portal/')
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive 
                  ? 'bg-green-50 text-green-700 border-r-2 border-green-600' 
                  : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
              } ${isStudentPortalLink ? 'text-yellow-600 hover:text-yellow-700' : ''}`}
            >
              <Icon className={`w-5 h-5 ${isStudentPortalLink ? 'text-yellow-500' : ''}`} />
              <span className="flex-1">{item.label}</span>
              {isStudentPortalLink && <ExternalLink className="w-3 h-3 opacity-50" />}
            </Link>
          )
        })}
      </nav>
    </aside>
  )
}

export default Sidebar